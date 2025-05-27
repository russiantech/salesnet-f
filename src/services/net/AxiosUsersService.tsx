import { UsersService } from './../local/UsersService';
import { AxiosService } from "./base/AxiosService";

// Simple type definitions that match your actual usage
interface SigninUser {
  username: string;
  password: string;
}

interface SignupUser {
  username: string;
  phone: string;
  email: string;
  password: string;
  name?: string;
  [key: string]: any;
}

interface ChangePasswordData {
  current_password: string;
  new_password: string;
  confirm_password: string;
}

interface ProfileUpdateData {
  name?: string;
  avatar?: File;
  [key: string]: any;
}

interface PaginationParams {
  page?: number;
  page_size?: number;
  [key: string]: any; // Allow additional properties like 'search'
}

export const AxiosUsersService = {
  /**
   * Sign in user with email and password
   */
  signin(user: SigninUser) {
    return AxiosService.json.post('/users/signin', user);
  },

  /**
   * Sign out current user (clears local storage)
   */
  signout(): void {
    UsersService.signout();
  },

  /**
   * Register new user account
   */
  signup(user: SignupUser) {
    return AxiosService.json.post('/users/signup', user);
  },

  /**
   * Get current user profile
   */
  getProfile() {
    return AxiosService.json.get(`/users/current`);
  },

  /**
   * Update user profile (supports file uploads)
   */
  updateProfile(data: ProfileUpdateData) {
    return AxiosService.multipart.put('/users', data);
  },

  /**
   * Refresh authentication token
   */
  refreshToken() {
    const currentUser = UsersService.getCurrentUser();
    
    if (!currentUser?.refresh_token) {
      throw new Error('No refresh token available');
    }

    return AxiosService.json.post('/users/refresh-token', {
      refresh_token: currentUser.refresh_token
    });
  },

  /**
   * Change user password
   */
  changePassword(data: ChangePasswordData) {
    return AxiosService.multipart.put('/users/change-password', data);
  },

  /**
   * Delete user account permanently
   */
  deleteAccount() {
    return AxiosService.json.delete('/users/account');
  },

  /**
   * Fetch paginated list of users (admin function)
   */
  fetchAll(pagination: PaginationParams = { page: 1, page_size: 10 }) {
    return AxiosService.fetchPage('/users', pagination);
  },

  /**
   * Search users by query
   */
  search(query: string, pagination: PaginationParams = { page: 1, page_size: 10 }) {
    const searchParams = new URLSearchParams({
      page: String(pagination.page || 1),
      page_size: String(pagination.page_size || 10),
      search: query
    });
    
    return AxiosService.json.get(`/users/search?${searchParams.toString()}`);
  }
};