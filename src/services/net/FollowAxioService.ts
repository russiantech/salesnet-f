
import { AxiosService } from './base/AxiosService';

export class FollowAxioService {
  
  static async follow(targetId: string, targetType: 'user' | 'page') {
    try {
      const endpoint = targetType === 'user' 
        ? `/users/${targetId}/follow`
        : `/pages/${targetId}/follow`;
        
      const response = await AxiosService.json.post(endpoint);
      return {
        data: response.data,
        success: true
      };
    } catch (error) {
      const entityType = targetType === 'user' ? 'user' : 'page';
      return {
        error: error.response?.data?.message || `Failed to follow ${entityType}`,
        success: false
      };
    }
  }

  static async unfollow(targetId: string, targetType: 'user' | 'page') {
    try {
      const endpoint = targetType === 'user' 
        ? `/users/${targetId}/follow`
        : `/pages/${targetId}/follow`;
        
      const response = await AxiosService.json.delete(endpoint);
      return {
        data: response.data,
        success: true
      };
    } catch (error) {
      const entityType = targetType === 'user' ? 'user' : 'page';
      return {
        error: error.response?.data?.message || `Failed to unfollow ${entityType}`,
        success: false
      };
    }
  }

  static async getFollowStatus(targetId: string, targetType: 'user' | 'page') {
    try {
      const endpoint = targetType === 'user' 
        ? `/users/${targetId}/follow-status`
        : `/pages/${targetId}/follow-status`;
        
      const response = await AxiosService.json.get(endpoint);
      return {
        data: response.data,
        success: true
      };
    } catch (error) {
      const entityType = targetType === 'user' ? 'user' : 'page';
      return {
        error: error.response?.data?.message || `Failed to get follow status for ${entityType}`,
        success: false
      };
    }
  }

  // Legacy methods for backward compatibility
  static async followUser(userId: string) {
    return this.follow(userId, 'user');
  }

  static async unfollowUser(userId: string) {
    return this.unfollow(userId, 'user');
  }

  static async followPage(pageId: string) {
    return this.follow(pageId, 'page');
  }

  static async unfollowPage(pageId: string) {
    return this.unfollow(pageId, 'page');
  }
}