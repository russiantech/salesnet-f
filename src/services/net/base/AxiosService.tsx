// src/services/net/AxiosService.ts
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { UsersService } from '../../local/UsersService';
import { NotificationService } from '../../local/NotificationService';
import { getEnv } from '../../../utils/env';

interface AuthTokens {
  accessToken: string | null;
  refreshToken: string | null;
}

interface RefreshTokenResponse {
  access_token: string;
  refresh_token?: string;
  
}

let navigationHandler: ((path: string) => void) | null = null;

export const registerNavigation = (handler: (path: string) => void) => {
  navigationHandler = handler;
};

const getBaseURL = (): string => {
  return window.location.hostname === 'localhost' 
    ? getEnv('VITE_API_BASE_URL') || "http://localhost:8080/api" : getEnv('VITE_API_BASE_PRODUCTION_URL') || 'https://api.salesnet.ng/api';
    // ? 'http://localhost:8080/api' : 'https://salesnet.securecryptosrecovery.com/api'; // : 'https://salesnet.onrender.com/api';
    // https://api.salesnet.ng/api/products
};

// Configure base Axios instance
// const axiosInstance = axios.create({
//     baseURL: import.meta.env.VITE_API_BASE_URL,
//     timeout: 10000,
//     headers: {
//         "Content-Type": "application/json",
//     },
// });

const createAxiosInstance = (contentType = 'application/json'): AxiosInstance => {
  const instance = axios.create({
    baseURL: getBaseURL(),
    timeout: 50000,
    headers: {
      'Content-Type': contentType,
    },
    // 
    // withCredentials: true, // If you need to send cookies
    // headers: {
    //   'Content-Type': contentType,
    //   'Accept': 'application/json'
    // },
    // 
    responseType: 'json',
  });

  instance.interceptors.request.use((config) => {
    const user = UsersService.getCurrentUser();
    if (user?.access_token) {
      config.headers.Authorization = `Bearer ${user.access_token}`;
    }
    return config;
  });

  return instance;
};

// JSON instance for standard requests
const jsonInstance = createAxiosInstance();

// Multipart instance for file uploads
const multipartInstance = createAxiosInstance('multipart/form-data');

const handleAuthError = async (_error: AxiosError): Promise<void> => {
  const user = UsersService.getCurrentUser();
  if (!user) return;

  UsersService.signout();
  NotificationService.showDialog('Session expired. Please sign in again.', 'error');
  
  if (navigationHandler) {
    navigationHandler('/auth/signin');
  }
};

const setupResponseInterceptor = (instance: AxiosInstance): void => {
  instance.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error: AxiosError) => {
      const originalRequest = error.config;
      if (!originalRequest || !error.response) return Promise.reject(error);

      // Handle 401 Unauthorized
      if (error.response.status === 401) {
        try {
          const newToken = await handleTokenRefresh();
          if (newToken && originalRequest.headers) {
            originalRequest.headers.Authorization = `Bearer ${newToken}`;
            return instance(originalRequest);
          }
        } catch (refreshError) {
          await handleAuthError(error);
        }
      }

      // Handle other errors
      if (error.response.status >= 500) {
        NotificationService.showDialog('Server error. Please try again later.', 'error');
      }

      return Promise.reject(error);
    }
  );
};

// const handleTokenRefresh = async (): Promise<string | null> => {
//   const user = UsersService.getCurrentUser();
//   if (!user?.refresh_token) return null;

//   try {
//     const response = await jsonInstance.post<RefreshTokenResponse>('/users/refresh-token', {
//       refresh_token: user.refresh_token,
//     });

//     const newAccessToken = response.data.access_token;
//     const newRefreshToken = response.data.refresh_token || user.refresh_token;

//     UsersService.authenticate({
//       ...user,
//       access_token: newAccessToken,
//       refresh_token: newRefreshToken,
//     });

//     return newAccessToken;
//   } catch (error) {
//     await handleAuthError(error as AxiosError);
//     return null;
//   }
// };

// 
let isRefreshing = false;
const handleTokenRefresh = async (): Promise<string | null> => {
  const user = UsersService.getCurrentUser();
  if (!user?.refresh_token) return null;

  if (isRefreshing) return null; // Prevent multiple refresh attempts
  isRefreshing = true;

  try {
    const response = await jsonInstance.post<RefreshTokenResponse>('/users/refresh-token', {
      refresh_token: user.refresh_token,
    });

    const newAccessToken = response.data.access_token;
    // Update tokens in the user service
    UsersService.authenticate({
      ...user,
      access_token: newAccessToken,
      refresh_token: user.refresh_token, // Assuming refresh token doesn't change
    });

    return newAccessToken;
  } catch (error) {
    await handleAuthError(error as AxiosError);
    return null;
  } finally {
    isRefreshing = false; // Reset the flag
  }
};


// Set up interceptors for both instances
setupResponseInterceptor(jsonInstance);
setupResponseInterceptor(multipartInstance);

export const AxiosService = {
  json: {
    get: (url: string, config?: AxiosRequestConfig) => jsonInstance.get(url, config),
    post: (url: string, data?: unknown, config?: AxiosRequestConfig) => 
      jsonInstance.post(url, data, config),
    put: (url: string, data?: unknown, config?: AxiosRequestConfig) => 
      jsonInstance.put(url, data, config),
    delete: (url: string, config?: AxiosRequestConfig) => 
      jsonInstance.delete(url, config),
  },

  multipart: {
    post: (url: string, data?: unknown, config?: AxiosRequestConfig) => 
      multipartInstance.post(url, data, config),
    put: (url: string, data?: unknown, config?: AxiosRequestConfig) => 
      multipartInstance.put(url, data, config),
  },

  // fetchPage1: (url: string, pagination = { page: 1, page_size: 10 }) => 
  //   jsonInstance.get(`${url}?page=${pagination.page}&page_size=${pagination.page_size}`),

  // now can handle additional url parameters
  fetchPage: (url: string, params: Record<string, any> = { page: 1, page_size: 10 }) => {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        searchParams.append(key, String(value));
      }
    });
    return jsonInstance.get(`${url}?${searchParams.toString()}`);
  }

};

// SEE USAGE BELOW:
/*
For JSON requests
AxiosService.json.post('/products', { name: 'New Product' });

For file uploads
const formData = new FormData();
formData.append('file', file);
AxiosService.multipart.post('/upload', formData);
*/

// export const AxiosService = {
//     axiosInstance,
//     get,
//     post,
//     put,
//     destroy,
//     fetchPage
// };