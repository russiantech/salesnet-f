// // services/dashboardService.js
// import { AxiosService } from '../net/base/AxiosService';

// export const dashboardService = {
//   /**
//    * Get dashboard data based on user role
//    * @param {string} role - User role (user, vendor, rider, admin, dev)
//    * @param {string} period - Time period filter
//    * @returns {Promise<Object>} Dashboard data
//    */
//   async getDashboardData(role: any, period = 'current') {
//     try {
//       let endpoint;
      
//       switch (role) {
//         case 'vendor':
//           endpoint = '/dashboard/vendor';
//           break;
//         case 'rider':
//           endpoint = '/dashboard/rider';
//           break;
//         case 'admin':
//         case 'dev':
//           endpoint = '/dashboard/admin';
//           break;
//         case 'user':
//         default:
//           endpoint = '/dashboard/buyer';
//           break;
//       }
      
//       const response = await AxiosService.json.get(`${endpoint}?period=${period}`);
//       return response.data.data;
//     } catch (error: any) {
//       console.error('Dashboard service error:', error);
//       throw new Error(
//         error.response?.data?.message || 
//         'Failed to fetch dashboard data'
//       );
//     }
//   },

//   /**
//    * Get buyer-specific dashboard data
//    * @param {string} period - Time period filter
//    * @returns {Promise<Object>} Buyer dashboard data
//    */
//   async getBuyerDashboard(period = 'current') {
//     try {
//     //   const response = await api.get(`/dashboard/buyer?period=${period}`);
//       const response = await AxiosService.json.get(`/dashboard/buyer?period=${period}`);
//       return response.data.data;
//     } catch (error: any) {
//       console.error('Buyer dashboard error:', error);
//       throw new Error(
//         error.response?.data?.message || 
//         'Failed to fetch buyer dashboard'
//       );
//     }
//   },

//   /**
//    * Get vendor-specific dashboard data
//    * @param {string} period - Time period filter
//    * @returns {Promise<Object>} Vendor dashboard data
//    */
//   async getVendorDashboard(period = 'current') {
//     try {
//       const response = await AxiosService.json.get(`/dashboard/vendor?period=${period}`);
//       return response.data.data;
//     } catch (error: any) {
//       console.error('Vendor dashboard error:', error);
//       throw new Error(
//         error?.response?.data?.message || 
//         'Failed to fetch vendor dashboard'
//       );
//     }
//   },

//   /**
//    * Get rider-specific dashboard data
//    * @param {string} period - Time period filter
//    * @returns {Promise<Object>} Rider dashboard data
//    */
//   async getRiderDashboard(period = 'current') {
//     try {
//       const response = await AxiosService.json.get(`/dashboard/rider?period=${period}`);
//       return response.data.data;
//     } catch (error: any) {
//       console.error('Rider dashboard error:', error);
//       throw new Error(
//         error?.response?.data?.message || 
//         'Failed to fetch rider dashboard'
//       );
//     }
//   },

//   /**
//    * Get admin-specific dashboard data
//    * @param {string} period - Time period filter
//    * @returns {Promise<Object>} Admin dashboard data
//    */
//   async getAdminDashboard(period = 'current') {
//     try {
//       const response = await AxiosService.json.get(`/dashboard/admin?period=${period}`);
//       return response.data.data;
//     } catch (error: any) {
//       console.error('Admin dashboard error:', error);
//       throw new Error(
//         error?.response?.data?.message || 
//         'Failed to fetch admin dashboard'
//       );
//     }
//   }
// };

//  v2

import { AxiosService } from "./base/AxiosService";

export interface DashboardStats {
    earnings: {
        current: number;
        previous: number;
        percentageChange: number;
    };
    balance: {
        available: number;
        pending: number;
        nextPayoutDate: string;
    };
    lifetime: {
        totalEarnings: number;
        totalOrders: number;
        totalProducts: number;
    };
    recentSales: {
        total: number;
        items: Array<{
            id: number;
            product_name: string;
            product_slug: string;
            product_image: string;
            date: string;
            status: string;
            tendered: number;
            earning: number;
        }>;
    };
    earningsHistory: Array<{
        date: string;
        amount: number;
    }>;
}

export interface DashboardFilters {
    period?: 'current' | 'last-month' | 'last-3-months' | 'last-6-months' | 'last-year';
    page?: number;
    page_size?: number;
    search?: string;
    sort_by?: 'date' | 'tendered' | 'earning';
    sort_order?: 'asc' | 'desc';
}

export const DashboardAxiosService = {
    // Get dashboard stats for current user
    getStats: (filters: DashboardFilters = {}) => {
        const params = new URLSearchParams();
        if (filters.period) params.append('period', filters.period);
        
        return AxiosService.json.get(`/dashboard/stats?${params.toString()}`);
    },

    // Get earnings history for chart
    getEarningsHistory: (filters: DashboardFilters = {}) => {
        const params = new URLSearchParams();
        if (filters.period) params.append('period', filters.period);
        
        return AxiosService.json.get(`/dashboard/earnings-history?${params.toString()}`);
    },

    // Get recent sales with pagination
    getRecentSales: (filters: DashboardFilters = {}) => {
        const finalQuery = {
            location: '/dashboard/recent-sales',
            page: filters.page || 1,
            page_size: filters.page_size || 5,
            search: filters.search,
            sort_by: filters.sort_by,
            sort_order: filters.sort_order,
            period: filters.period
        };
        
        return AxiosService.fetchPage(finalQuery.location, finalQuery);
    },

    // Get dashboard overview by user type
    getOverviewByUserType: (userType: 'vendor' | 'buyer' | 'rider' | 'admin') => {
        return AxiosService.json.get(`/dashboard/overview/${userType}`);
    },

    // Get vendor-specific metrics
    getVendorMetrics: (filters: DashboardFilters = {}) => {
        const params = new URLSearchParams();
        if (filters.period) params.append('period', filters.period);
        
        return AxiosService.json.get(`/dashboard/vendor/metrics?${params.toString()}`);
    },

    // Get buyer-specific metrics
    getBuyerMetrics: (filters: DashboardFilters = {}) => {
        const params = new URLSearchParams();
        if (filters.period) params.append('period', filters.period);
        
        return AxiosService.json.get(`/dashboard/buyer/metrics?${params.toString()}`);
    },

    // Get rider-specific metrics
    getRiderMetrics: (filters: DashboardFilters = {}) => {
        const params = new URLSearchParams();
        if (filters.period) params.append('period', filters.period);
        
        return AxiosService.json.get(`/dashboard/rider/metrics?${params.toString()}`);
    },

    // Export dashboard data
    exportData: (format: 'csv' | 'pdf' | 'excel', filters: DashboardFilters = {}) => {
        const params = new URLSearchParams();
        if (filters.period) params.append('period', filters.period);
        params.append('format', format);
        
        return AxiosService.json.get(`/dashboard/export?${params.toString()}`, {
            responseType: 'blob'
        });
    }
};