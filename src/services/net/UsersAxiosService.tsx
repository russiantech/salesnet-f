// src/services/net/UsersAxiosService.tsx
// This file contains the UsersAxiosService which handles user-related API calls

import axios from 'axios';
import { CompletePasswordResetFormData, RecoverPasswordFormData, SignupFormData, VerifyRecoveryCodeFormData } from '../../types/auth.types';
import { UsersService } from '../local/UsersService';
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

// UsersAxiosService.tsx

export const UsersAxiosService = {
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
  //
  /**
   * Step 1: Initiate signup with verification codes
   */
  async initiateSignup(data: SignupUser) {
    const req = AxiosService.json.post('/users/initiate-signup', data);
    // console.log("Initiate Signup Request:", req);
    return req;
  },

  /**
   * Step 2: Verify codes and complete signup
   */
  async verifySignup(data: {
    token: string;
    email_code: string;
    phone_code: string;
  }) {
    return AxiosService.json.post('/users/verify-signup', data);
  },

  /**
   * Resend verification code
   */
  async resendVerificationCode(data: {
    token: string;
    type: 'email' | 'phone';
  }) {
    return AxiosService.json.post('/users/resend-verification', data);
  },

  // Update existing signup to use new flow
  async signup(data: SignupFormData) {
    // This now calls initiate-signup instead of direct signup
    return this.initiateSignup(data);
  },
  
  // 

  // signup(user: SignupUser) {
  //   return AxiosService.json.post('/users/signup', user);
  // },

  // Recover password
 async recoverPassword(data: RecoverPasswordFormData) {
   const requestData = {
          ...data,
          callback_url: `${window.location.origin}/auth/verify-recovery`
      };
    return await AxiosService.json.post('/users/recover-password', requestData);
},
//

async verifyRecoveryCode(data: VerifyRecoveryCodeFormData) {
  return await AxiosService.json.post('/users/verify-recovery-code', data);
},

async completePasswordReset(data: CompletePasswordResetFormData) {
  return await AxiosService.json.post('/users/complete-password-reset', data);
},

  // Social Authentication
  // Add these methods to your UsersAxiosService
//   async initiateSocialAuth(provider: string) {
//     return AxiosService.json.get(`/users/authorize/${provider.toLowerCase()}`);
// },

  async initiateSocialAuth(provider: string, headers: Record<string, string> = {}) {
    return AxiosService.json.get(`/users/authorize/${provider.toLowerCase()}`, {
      headers: {
        // 'Content-Type': 'application/json',
        ...headers,
      },
    });
},

  async getLinkedAccounts() {
    return AxiosService.json.get(`/users/linked-accounts`);
  },

  async unlinkSocialAccount(provider: string) {
    return AxiosService.json.delete(`/users/linked-accounts/${provider.toLowerCase()}`);
  },
// 

  /**
   * Get current user profile
   */
  getProfile() {
    return AxiosService.json.get(`/users/current`);
  },

  /**
   * Update user profile (supports file uploads)
   */
  updateUser(data: ProfileUpdateData, _formData: FormData) {
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
  },

  // NEW
  // Get user by username
    getByUsername: (username: string) => {
        return AxiosService.json.get(`/users/${username}`);
    },

    // Get user's products
    getUserProducts: (userId: string, query = {}) => {
        const finalQuery = { 
            // location: `/users/${userId}/products`, 
            location: `products/${userId}/users`, 
            page: 1, 
            page_size: 12,
            ...query 
        };
        return AxiosService.fetchPage(finalQuery.location, finalQuery);
    },

    // Follow a user
    followUser: (userId: string) => {
        return AxiosService.json.post(`/users/${userId}/follow`);
    },

    // Unfollow a user
    unfollowUser: (userId: string) => {
        return AxiosService.json.delete(`/users/${userId}/follow`);
    },

    // Check if current user follows this user
    checkFollowing: (userId: string) => {
        return AxiosService.json.get(`/users/${userId}/following-status`);
    },

    // Get user followers
    getFollowers: (userId: string, query = {}) => {
        const finalQuery = { 
            location: `/users/${userId}/followers`, 
            page: 1, 
            page_size: 20,
            ...query 
        };
        return AxiosService.fetchPage(finalQuery.location, finalQuery);
    },

    // Get user following
    getFollowing: (userId: string, query = {}) => {
        const finalQuery = { 
            location: `/users/${userId}/following`, 
            page: 1, 
            page_size: 20,
            ...query 
        };
        return AxiosService.fetchPage(finalQuery.location, finalQuery);
    },

};