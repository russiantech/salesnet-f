// import {AxiosService} from "./base/AxiosService";

// export const PagesAxiosService = {
//     getHome() {
//         return AxiosService.json.get('/');
//     },
    
//     getAbout() {

//     }
// };

import { AxiosService } from "./base/AxiosService";

export const PagesAxiosService = {
    // Get page by slug
    getBySlug: (slug: string) => {
        return AxiosService.json.get(`/pages/slug/${slug}`);
    },

    // Get page's products
    getPageProducts: (pageId: string, query = {}) => {
        const finalQuery = { 
            location: `/pages/${pageId}/products`, 
            page: 1, 
            page_size: 12,
            ...query 
        };
        return AxiosService.fetchPage(finalQuery.location, finalQuery);
    },

    // Follow a page
    followPage: (pageId: string) => {
        return AxiosService.json.post(`/pages/${pageId}/follow`);
    },

    // Unfollow a page
    unfollowPage: (pageId: string) => {
        return AxiosService.json.delete(`/pages/${pageId}/follow`);
    },

    // Check if current user follows this page
    checkPageFollowing: (pageId: string) => {
        return AxiosService.json.get(`/pages/${pageId}/following-status`);
    },

    // Get page followers
    getFollowers: (pageId: string, query = {}) => {
        const finalQuery = { 
            location: `/pages/${pageId}/followers`, 
            page: 1, 
            page_size: 20,
            ...query 
        };
        return AxiosService.fetchPage(finalQuery.location, finalQuery);
    },


    // NEW 
    // Get business stats
    getStats: (businessId: string, businessType: 'user' | 'page') => {
        return AxiosService.json.get(`/business/${businessId}/stats`, {
            params: { type: businessType || 'user' }
        });
    },

    // Update business profile
    updatePage: (businessId: string, businessType: 'user' | 'page', data: FormData) => {
        const endpoint = businessType === 'user' 
            ? `/users/${businessId}/profile`
            : `/pages/${businessId}/profile`;
            
        return AxiosService.multipart.put(endpoint, data);
    },

    // Get business hours
    getBusinessHours: (businessId: string, businessType: 'user' | 'page') => {
        return AxiosService.json.get(`/business/${businessId}/hours`, {
            params: { type: businessType }
        });
    },

    // Update business hours
    updateBusinessHours: (businessId: string, businessType: 'user' | 'page', hours: any) => {
        return AxiosService.json.put(`/business/${businessId}/hours`, {
            type: businessType,
            hours
        });
    },


};