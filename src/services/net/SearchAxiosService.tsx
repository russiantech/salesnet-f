import { AxiosService } from "./base/AxiosService";

export const SearchAxiosService = {
    /**
     * Perform a global search across products, pages, and users
     * @param query The search query parameters
     * @returns Promise with search results
     */
    globalSearch: (query: {
        q: string;
        page?: number;
        page_size?: number;
        type?: 'product' | 'page' | 'user' | 'all';
        [key: string]: any;
    }) => {
        const finalQuery = { 
            page: 1, 
            page_size: 10, 
            type: 'all',
            ...query 
        };
        return AxiosService.json.get('/search', { params: finalQuery });
    },

    /**
     * Search specifically for products
     * @param query Search parameters including filters
     * @returns Promise with product search results
     */
    searchProducts: (query: {
        q: string;
        page?: number;
        page_size?: number;
        category_id?: number;
        min_price?: number;
        max_price?: number;
        sort_by?: 'relevance' | 'price_asc' | 'price_desc' | 'newest' | 'rating';
        [key: string]: any;
    }) => {
        const finalQuery = { 
            page: 1, 
            page_size: 12,
            sort_by: 'relevance',
            ...query 
        };
        return AxiosService.json.get('/search/products', { params: finalQuery });
    },

    /**
     * Search specifically for pages (content pages)
     * @param query Search parameters
     * @returns Promise with page search results
     */
    searchPages: (query: {
        q: string;
        page?: number;
        page_size?: number;
        [key: string]: any;
    }) => {
        const finalQuery = { 
            page: 1, 
            page_size: 10,
            ...query 
        };
        return AxiosService.json.get('/search/pages', { params: finalQuery });
    },

    /**
     * Search specifically for users
     * @param query Search parameters
     * @returns Promise with user search results
     */
    searchUsers: (query: {
        q: string;
        page?: number;
        page_size?: number;
        [key: string]: any;
    }) => {
        const finalQuery = { 
            page: 1, 
            page_size: 10,
            ...query 
        };
        return AxiosService.json.get('/search/users', { params: finalQuery });
    },

    /**
     * Get search autocomplete suggestions
     * @param q Search term
     * @param limit Maximum number of suggestions
     * @param type Filter by type (product, page, user)
     * @returns Promise with suggestions
     */
    getSuggestions: (
        q: string, 
        limit: number = 5, 
        type?: 'product' | 'page' | 'user'
    ) => {
        const params: Record<string, any> = { q };
        if (limit) params.limit = Math.min(limit, 10);
        if (type) params.type = type;
        
        return AxiosService.json.get('/search/suggestions', { params });
    },

    /**
     * Get popular search terms
     * @param limit Number of terms to return
     * @param days Time period in days
     * @returns Promise with popular terms
     */
    getPopularSearches: (limit: number = 5, days: number = 30) => {
        return AxiosService.json.get('/search/popular', { 
            params: { 
                limit: Math.min(limit, 20),
                days: Math.min(days, 365)
            } 
        });
    },

    /**
     * Get search filters/aggregations (for faceted search)
     * @param type The type of search (products, etc.)
     * @returns Promise with available filters
     */
    getSearchFilters: (type: 'products' = 'products') => {
        return AxiosService.json.get(`/search/filters/${type}`);
    },

    /**
     * Log a search query for analytics (non-blocking)
     * @param q Search term
     * @param type Search type
     */
    logSearchQuery: (q: string, type?: string) => {
        // Fire and forget - don't wait for response
        AxiosService.json.post('/search/log', { q, type })
            .catch(() => { /* Silently fail */ });
    }
};