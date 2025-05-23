// import axios from "axios";
// import {UsersService} from "../../local/UsersService";
// let cachedUser = {};
// UsersService.subscribe((user) => {
//     cachedUser = user;
// });
// // const axiosInstance = axios.create({
// //     baseURL: 'http://localhost:8080/api',
// //     // baseURL: 'https://salesnet.onrender.com/api',
// //     responseType: 'json',
// //     responseEncoding: 'utf8'
// // });
// const axiosInstance = axios.create({
//     baseURL: window.location.hostname === 'localhost' 
//         ? 'http://localhost:8080/api'
//         : 'https://salesnet.onrender.com/api',
//     responseType: 'json',
//     responseEncoding: 'utf8'
// });
// axiosInstance.interceptors.request.use((config) => {
//     if (cachedUser.access_token)
//         config.headers.authorization = `Bearer ${cachedUser.access_token}`;
//     return config;
// }, function (error) {
//     return Promise.reject(error);
// });
// function get(url) {
//     return axiosInstance.get(url)
// }
// function post(url, data) {
//     return axiosInstance.post(url, data);
// }
// function fetchPage(url, pagination = {page: 1, page_size: 5}) {
//     return get(`${url}?page=${pagination.page || 1}&page_size=${pagination.page_size || 5}`)
// }
// function put() {
// }
// function destroy(url) {
// }
// export const AxiosService = {
//     axiosInstance,
//     get,
//     post,
//     put,
//     destroy,
//     fetchPage
// };
// 
// 
// import axios from "axios";
// import { UsersService } from "../../local/UsersService";
// let cachedUser = {
//     token: null,
//     refresh_token: null,
// };
// UsersService.subscribe((user) => {
//     cachedUser.access_token = user.access_token;
//     cachedUser.refresh_token = user.refresh_token;
// });
// const axiosInstance = axios.create({
//     baseURL: window.location.hostname === 'localhost' 
//         ? 'http://localhost:8080/api'
//         : 'https://salesnet.onrender.com/api',
//     responseType: 'json',
//     responseEncoding: 'utf8'
// });
// // Request Interceptor
// axiosInstance.interceptors.request.use((config) => {
//     if (cachedUser.access_token) {
//         config.headers.Authorization = `Bearer ${cachedUser.access_token}`;
//     }
//     return config;
// }, function (error) {
//     return Promise.reject(error);
// });
// // Response Interceptor
// axiosInstance.interceptors.response.use(
//     response => response,
//     async (error) => {
//         const originalRequest = error.config;
//         if (error.response.status === 401 && !originalRequest._retry) {
//             originalRequest._retry = true;
//             const refreshed = await refresh_token();
//             if (refreshed) {
//                 originalRequest.headers.Authorization = `Bearer ${cachedUser.access_token}`;
//                 return axiosInstance(originalRequest);
//             }
//         }
//         console.error('API Request Error:', error.response?.data || error.message);
//         return Promise.reject(error);
//     }
// );
// // Function to refresh the token using Axios
// async function refresh_token() {
//     if (!cachedUser.refresh_token || !cachedUser.refresh_token.trim()) {
//         console.warn('No refresh token available. Cannot refresh access token.');
//         return false;
//     }
//     try {
//         const response = await axiosInstance.post('/users/refresh-token', {
//             refresh_token: cachedUser.refresh_token
//         });
//         if (response.data.access_token) {
//             cachedUser.access_token = response.data.access_token;
//             localStorage.setItem('access_token', response.data.access_token);
//         }
//         if (response.data.refresh_token) {
//             cachedUser.refresh_token = response.data.refresh_token;
//             localStorage.setItem('refresh_token', response.data.refresh_token);
//         }
//         return true; // Token refreshed successfully
//     } catch (error) {
//         console.error('Error refreshing token:', error.response?.data || error.message);
//         return false; // Error during token refresh
//     }
// }
// // API functions
// function get(url) {
//     return axiosInstance.get(url);
// }
// function post(url, data) {
//     return axiosInstance.post(url, data);
// }
// function fetchPage(url, pagination = { page: 1, page_size: 5 }) {
//     return get(`${url}?page=${pagination.page || 1}&page_size=${pagination.page_size || 5}`);
// }
// function put(url, data) {
//     return axiosInstance.put(url, data);
// }
// function destroy(url) {
//     return axiosInstance.delete(url);
// }
// export const AxiosService = {
//     axiosInstance,
//     get,
//     post,
//     put,
//     destroy,
//     fetchPage
// };
// 
import axios from "axios";
import { UsersService } from "../../local/UsersService";
import { useNavigate } from "react-router-dom";
import { NotificationService } from "../../local/NotificationService";
import { AxiosUsersService } from "../AxiosUsersService";
let cachedUser = {
    access_token: null,
    refresh_token: null,
};
// UsersService.subscribe((user: { access_token: null; refresh_token: null; }) => {
//     cachedUser.access_token = user.access_token;
//     cachedUser.refresh_token = user.refresh_token;
// });
UsersService.subscribe((user) => {
    try {
        if (user) {
            console.log('User received:', user);
            cachedUser.access_token = user.access_token || null;
            cachedUser.refresh_token = user.refresh_token || null;
        }
        else {
            throw new Error('Received undefined user');
        }
    }
    catch (error) {
        console.error('Error in user subscription:', error.message);
    }
});
//
// const axiosInstance = axios.create({
//     baseURL: window.location.hostname === 'localhost' 
//         ? 'http://localhost:8080/api'
//         : 'https://salesnet.onrender.com/api',
//     responseType: 'json',
//     responseEncoding: 'utf8'
// });
// // Request Interceptor
// axiosInstance.interceptors.request.use((config) => {
//     if (cachedUser.access_token) {
//         config.headers.Authorization = `Bearer ${cachedUser.access_token}`;
//     }
//     return config;
// }, function (error) {
//     return Promise.reject(error);
// });
// // Response Interceptor
// axiosInstance.interceptors.response.use(
//     response => {
//         // Log successful responses
//         console.log('Response:', {
//             status: response.status,
//             data: response.data,
//             config: response.config
//         });
//         return response;
//     },
//     async (error) => {
//         // Log error responses
//         console.error('Error from AxiosService Response:', {
//             status: error.response?.status,
//             data: error.response?.data,
//             config: error.config
//         });
//         const originalRequest = error.config;
//         if (error.response.status === 401 && !originalRequest._retry) {
//             originalRequest._retry = true;
//             const refreshed = await refresh_token();
//             if (refreshed) {
//                 originalRequest.headers.Authorization = `Bearer ${cachedUser.access_token}`;
//                 return axiosInstance(originalRequest);
//             }
//         }
//         return Promise.reject(error);
//     }
// );
// // Function to refresh the token using Axios
// async function refresh_token() {
//     if (!cachedUser.refresh_token || !cachedUser.refresh_token.trim()) {
//         console.warn('No refresh token available. Cannot refresh access token.');
//         return false;
//     }
//     try {
//         const response = await axiosInstance.post('/users/refresh-token', {
//             refresh_token: cachedUser.refresh_token
//         });
//         if (response.data.access_token) {
//             cachedUser.access_token = response.data.access_token; // Update access token in cachedUser
//             LocalStorageService.set('access_token', response.data.access_token);
//         }
//         return true; // Token refreshed successfully
//     } catch (error) {
//         console.error('Error refreshing token:', error.response?.data || error.message);
//         return false; // Error during token refresh
//     }
// }
// API functions
// 
const axiosInstance = axios.create({
    baseURL: window.location.hostname === 'localhost'
        ? 'http://localhost:8080/api'
        : 'https://salesnet.onrender.com/api',
    responseType: 'json',
    responseEncoding: 'utf8'
});
// Request Interceptor
axiosInstance.interceptors.request.use((config) => {
    if (cachedUser.access_token) {
        config.headers.Authorization = `Bearer ${cachedUser.access_token}`;
    }
    return config;
}, (error) => Promise.reject(error));
// Response Interceptor
axiosInstance.interceptors.response.use(response => response, async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401) {
        // Initialize retry counter if not exists
        originalRequest._retryCount = originalRequest._retryCount || 0;
        if (originalRequest._retryCount < 3) {
            try {
                originalRequest._retryCount++;
                const refreshed = await refreshAuthToken();
                if (refreshed) {
                    // Update authorization header with new token
                    originalRequest.headers.Authorization = `Bearer ${cachedUser.access_token}`;
                    return axiosInstance(originalRequest);
                }
            }
            catch (refreshError) {
                console.error('Refresh token failed:', refreshError);
            }
            // If refresh failed but retries remaining, continue chain
            if (originalRequest._retryCount < 3) {
                return axiosInstance(originalRequest);
            }
        }
        // Max retries reached or refresh failed - clear auth and redirect
        // handleLogout();
        UsersService.logout();
        return Promise.reject(new Error('Maximum authentication retries reached'));
    }
    return Promise.reject(error);
});
const refreshAuthToken = async () => {
    const navigate = useNavigate();
    const currentUser = UsersService.getCurrentUser();
    // Validate existing tokens
    if (!currentUser?.refresh_token?.trim()) {
        NotificationService.showDialog('Session expired. Please sign in again.', 'warning');
        UsersService.logout();
        navigate('/auth/signin');
        return false;
    }
    try {
        const response = await AxiosUsersService.refreshToken(currentUser.refresh_token);
        if (!response.data.success || !response.data.access_token) {
            throw new Error(response.data.error || 'Failed to refresh session');
        }
        // Update user tokens
        const updatedUser = {
            ...currentUser,
            access_token: response.data.access_token,
            refresh_token: response.data.refresh_token || currentUser.refresh_token,
        };
        UsersService.authenticate(updatedUser);
        // Optionally refresh user data
        //   await fetchUserData(updatedUser.access_token);
        return true;
    }
    catch (error) {
        const errorMessage = error.response?.data?.error ||
            error.message ||
            'Session refresh failed. Please sign in again.';
        console.error('Token refresh error:', errorMessage);
        // Clear credentials for security
        UsersService.logout();
        // Show user feedback
        NotificationService.showDialog(errorMessage, 'error');
        // Navigate to login with original location
        navigate('/auth/signin', {
            state: { from: location.pathname },
            replace: true
        });
        return false;
    }
};
// Logout handler
// function handleLogout() {
//     // Clear all auth-related data
//     cachedUser.access_token = null;
//     cachedUser.refresh_token = null;
//     LocalStorageService.clear('access_token');
//     LocalStorageService.clear('refresh_token');
//     // Redirect to login
//     window.location.href = '/login';
// }
function get(url) {
    return axiosInstance.get(url);
}
function post(url, data) {
    return axiosInstance.post(url, data);
}
function fetchPage(url, pagination = { page: 1, page_size: 5 }) {
    return get(`${url}?page=${pagination.page || 1}&page_size=${pagination.page_size || 5}`);
}
function put(url, data) {
    return axiosInstance.put(url, data);
}
function destroy(url) {
    return axiosInstance.delete(url);
}
export const AxiosService = {
    axiosInstance,
    get,
    post,
    put,
    destroy,
    fetchPage
};
// import axios from "axios";
// import { UsersService } from "../../local/UsersService";
// // Token management singleton
// const tokenManager = {
//     accessToken: null,
//     refresh_token: null,
//     init() {
//         const user = UsersService.getCurrentUser();
//         this.accessToken = user?.access_token;
//         this.refresh_token = user?.refresh_token;
//         UsersService.subscribe(user => {
//             this.accessToken = user?.access_token;
//             this.refresh_token = user?.refresh_token;
//         });
//     }
// };
// tokenManager.init();
// const axiosInstance = axios.create({
//     baseURL: window.location.hostname === 'localhost' 
//         ? 'http://localhost:8080/api'
//         : 'https://salesnet.onrender.com/api',
//     responseType: 'json',
//     timeout: 10000,
//     headers: {
//         'Content-Type': 'application/json'
//     }
// });
// // Request interceptor
// axiosInstance.interceptors.request.use(config => {
//     if (tokenManager.accessToken) {
//         config.headers.Authorization = `Bearer ${tokenManager.accessToken}`;
//     }
//     return config;
// }, error => Promise.reject(error));
// // Response interceptor
// axiosInstance.interceptors.response.use(
//     response => {
//         if (process.env.NODE_ENV === 'development') {
//             console.debug('API Success:', response.config.url);
//         }
//         return response;
//     },
//     async error => {
//         const originalRequest = error.config;
//         if (error.response?.status === 401 && !originalRequest._retry) {
//             originalRequest._retry = true;
//             try {
//                 const { data } = await axiosInstance.post('/auth/refresh', {
//                     refresh_token: tokenManager.refresh_token
//                 });
//                 if (data.access_token) {
//                     const user = UsersService.getCurrentUser();
//                     if (user) {
//                         user.access_token = data.access_token;
//                         user.refresh_token = data.refresh_token || user.refresh_token;
//                         UsersService.authenticate(user);
//                         originalRequest.headers.Authorization = `Bearer ${data.access_token}`;
//                         return axiosInstance(originalRequest);
//                     }
//                 }
//             } catch (refreshError) {
//                 console.error('Token refresh failed:', refreshError);
//                 UsersService.logout();
//                 window.location.href = '/auth/signin';
//             }
//         }
//         if (error.response) {
//             console.error('API Error:', {
//                 status: error.response.status,
//                 message: error.response.data?.message,
//                 path: error.config.url
//             });
//         }
//         return Promise.reject(error);
//     }
// );
// export const AxiosService = {
//     axiosInstance,
//     get: (url) => axiosInstance.get(url),
//     post: (url, data) => axiosInstance.post(url, data),
//     put: (url, data) => axiosInstance.put(url, data),
//     delete: (url) => axiosInstance.delete(url),
//     fetchPage: (url, pagination = { page: 1, page_size: 10 }) => 
//         axiosInstance.get(`${url}?page=${pagination.page}&page_size=${pagination.page_size}`)
// };
// 
