import axios from "axios";
import { UsersService } from "../../local/UsersService";
import { useNavigate } from "react-router-dom";
import { NotificationService } from "../../local/NotificationService";
import { AxiosUsersService } from "../AxiosUsersService";
let cachedUser = {
    access_token: null,
    refresh_token: null,
};
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
