// src/services/OffersAxiosService.ts
import { AxiosService } from "./base/AxiosService";

export const OffersAxiosService = {
    /**
     * Fetch all offers with pagination and filtering
     * @param query The query parameters for filtering offers
     * @returns Promise with paginated offers
     */
    fetchOffers: (query: {
        page?: number;
        page_size?: number;
        status?: 'active' | 'scheduled' | 'expired' | 'all';
        is_featured?: boolean;
        product_id?: number;
        category_id?: number;
        sort_by?: 'newest' | 'ending_soon' | 'discount' | 'featured';
        [key: string]: any;
    }) => {
        const finalQuery = { 
            page: 1, 
            page_size: 10,
            status: 'active',
            ...query 
        };
        return AxiosService.json.get('/offers', { params: finalQuery });
        // return AxiosService.json.get('/offers');
    },

    
    /**
     * Get offer by slug
     * @param {string} slug - Offer slug
     * @returns {Promise} Axios response
     */
    getBySlug: (slug) => {
        return AxiosService.json.get(`/offers/${slug}?include_products=true`);
    },

    /**
     * Get featured offers (typically for homepage display)
     * @param limit Maximum number of offers to return
     * @returns Promise with featured offers
     */
    getFeaturedOffers: (limit: number = 5) => {
        return AxiosService.json.get('/offers/featured', { 
        // return AxiosService.json.get('/offers', { 
            params: { 
                limit: Math.min(limit, 20)
            } 
        });
    },

    /**
     * Get offer by ID
     * @param id The offer ID
     * @returns Promise with offer details
     */
    getOfferById: (id: number | string) => {
        return AxiosService.json.get(`/offers/${id}`);
    },

    /**
     * Create a new offer
     * @param offerData The offer data to create
     * @returns Promise with created offer
     */
    createOffer: (offerData: {
        name: string;
        product_ids: number[];
        discount_type: 'percentage' | 'fixed_amount';
        discount_value: number;
        promo_code?: string;
        start_date: string;
        end_date: string;
        banner_image?: string;
        background_gradient?: string;
        text_color?: string;
        is_featured?: boolean;
        category_ids?: number[];
        media_files?: string[];
    }) => {
        return AxiosService.multipart.post('/offers', offerData);
        // return AxiosService.json.post('/offers', offerData);
    },

    /**
     * Update an existing offer
     * @param id The offer ID to update
     * @param offerData The updated offer data
     * @returns Promise with updated offer
     */
    updateOffer: (id: number | string, offerData: {
        name?: string;
        product_ids?: number[];
        discount_type?: 'percentage' | 'fixed_amount';
        discount_value?: number;
        promo_code?: string | null;
        start_date?: string;
        end_date?: string;
        banner_image?: string | null;
        background_gradient?: string | null;
        text_color?: string;
        is_featured?: boolean;
        category_ids?: number[];
    }) => {
        return AxiosService.json.put(`/offers/${id}`, offerData);
    },

    /**
     * Delete an offer
     * @param id The offer ID to delete
     * @returns Promise with deletion confirmation
     */
    deleteOffer: (id: number | string) => {
        return AxiosService.json.delete(`/offers/${id}`);
    },

    /**
     * Get offers for a specific product
     * @param productId The product ID
     * @returns Promise with product offers
     */
    getProductOffers: (productId: number | string) => {
        return AxiosService.json.get(`/products/${productId}/offers`);
    },

    // 

    getProducts: (slug, params = {}) => {
        const defaultParams = { 
        page: 1,
        page_size: 20
        };
        return AxiosService.json.get(`/offers/${slug}/products`, {
        params: { ...defaultParams, ...params }
        });
    },

    /**
     * Get promotional banners (for homepage carousel)
     * @param limit Maximum number of banners to return
     * @param is_active Only return active banners
     * @returns Promise with promotional banners
     */
    getPromotionalBanners: (limit: number = 5, is_active: boolean = true) => {
        return AxiosService.json.get('/offers/promotional-banners', { 
            params: { 
                limit: Math.min(limit, 10),
                is_active
            } 
        });
    },

    /**
     * Validate a promo code
     * @param code The promo code to validate
     * @param productId Optional product ID to check applicability
     * @returns Promise with validation result
     */
    validatePromoCode: (code: string, productId?: number | string) => {
        const params: Record<string, any> = { code };
        if (productId) params.product_id = productId;
        
        return AxiosService.json.get('/offers/validate-code', { params });
    },

    /**
     * Get time-limited offers (flash sales)
     * @param hours Time window in hours
     * @returns Promise with time-limited offers
     */
    getFlashSales: (hours: number = 24) => {
        return AxiosService.json.get('/offers/flash-sales', { 
            params: { 
                hours: Math.min(hours, 72)
            } 
        });
    },

    /**
     * Get offer statistics (admin only)
     * @param period Time period (7d, 30d, 90d)
     * @returns Promise with offer statistics
     */
    getOfferStatistics: (period: '7d' | '30d' | '90d' = '30d') => {
        return AxiosService.json.get('/offers/statistics', { 
            params: { period } 
        });
    },

    /**
     * Get similar offers based on current offer
     * @param offerId The offer ID to find similar for
     * @param limit Maximum number of similar offers
     * @returns Promise with similar offers
     */
    getSimilarOffers: (offerId: number | string, limit: number = 4) => {
        return AxiosService.json.get(`/offers/${offerId}/similar`, { 
            params: { 
                limit: Math.min(limit, 10)
            } 
        });
    }
};

// 
