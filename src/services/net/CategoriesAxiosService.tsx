import { AxiosService } from "./base/AxiosService";

export const CategoriesAxiosService = {
    /**
     * Get categories with optional depth and filters
     * @param query The query parameters
     * @returns Promise with categories
     */
    getCategories: (query: {
        depth?: number;
        include_products?: boolean;
        parent_id?: number;
        featured_only?: boolean;
        [key: string]: any;
    }) => {
        const finalQuery = { 
            depth: 1,
            include_products: false,
            ...query 
        };
        return AxiosService.json.get('/categories', { params: finalQuery });
    },

    /**
     * Get a single category by ID or slug
     * @param identifier Category ID or slug
     * @param query Additional query parameters
     * @returns Promise with category details
     */
    getCategory: (
        identifier: string | number,
        query: {
            include_products?: boolean;
            include_children?: boolean;
            [key: string]: any;
        } = {}
    ) => {
        const finalQuery = {
            include_products: false,
            include_children: true,
            ...query
        };
        return AxiosService.json.get(`/categories/${identifier}`, { params: finalQuery });
    },

    /**
     * Get featured categories
     * @param limit Number of categories to return
     * @returns Promise with featured categories
     */
    getFeaturedCategories: (limit: number = 5) => {
        return AxiosService.json.get('/categories/featured', { 
            params: { 
                limit: Math.min(limit, 20)
            } 
        });
    },

    /**
     * Get category tree (hierarchy)
     * @param max_depth Maximum depth to return
     * @returns Promise with category tree
     */
    getCategoryTree: (max_depth: number = 3) => {
        return AxiosService.json.get('/categories/tree', { 
            params: { 
                max_depth: Math.min(max_depth, 5)
            } 
        });
    },

    /**
     * Get products in a category
     * @param categoryId Category ID
     * @param query Product query parameters
     * @returns Promise with products
     */
    getCategoryProducts: (
        categoryId: number,
        query: {
            page?: number;
            page_size?: number;
            sort_by?: 'popularity' | 'newest' | 'price_asc' | 'price_desc' | 'rating';
            [key: string]: any;
        }
    ) => {
        const finalQuery = { 
            page: 1, 
            page_size: 12,
            sort_by: 'popularity',
            ...query 
        };
        return AxiosService.json.get(`/categories/${categoryId}/products`, { params: finalQuery });
    },

    /**
     * Get category filters/attributes
     * @param categoryId Category ID
     * @returns Promise with available filters
     */
    getCategoryFilters: (categoryId: number) => {
        return AxiosService.json.get(`/categories/${categoryId}/filters`);
    },

    /**
     * Log category view for analytics (non-blocking)
     * @param categoryId Category ID
     */
    logCategoryView: (categoryId: number) => {
        // Fire and forget - don't wait for response
        AxiosService.json.post('/categories/log-view', { categoryId })
            .catch(() => { /* Silently fail */ });
    }
};