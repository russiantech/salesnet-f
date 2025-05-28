import { AxiosService } from "./base/AxiosService";

export const ProductAxiosService = {

    // Fetch a paginated list of products
    fetchPage: (query = {}, username: string) => {
        const finalQuery = { location: '/products', page: 1, page_size: 5, username, ...query };
        return AxiosService.fetchPage(finalQuery.location, finalQuery);
    },

    // Fetch a paginated list of recommended products 
    getRecommended: (query = {}, username: string) => {
        const finalQuery = { location: '/products/recommendations', page: 1, page_size: 5, username, ...query };
        return AxiosService.fetchPage(finalQuery.location, finalQuery);
    },

    // Fetch a paginated list of recommended products 
    getNewArrivals: (query = {}, username: string) => {
        const finalQuery = { location: '/products/new-arrivals', page: 1, page_size: 8, username, ...query };
        return AxiosService.fetchPage(finalQuery.location, finalQuery);
    },

    // Fetch a product by its slug
    getBySlug: (slug: string) => {
        if (typeof slug !== "string") {
            throw new Error("Slug must be a string");
        }
        return AxiosService.json.get(`/products/${slug}?include_user=1`);
    },

    // Fetch all categories
    // fetchCategories: () => AxiosService.json.get('/categories?page_size=100'),

    fetchCategories: (query = {}, username: string) => {
        const finalQuery = { location: '/categories', page: 1, page_size: 90, username, ...query };
        return AxiosService.fetchPage(finalQuery.location, finalQuery);
    },

    // fetchProductsByCategories: () => AxiosService.json.get('/by-categories'),
    fetchProductsByCategories: () => AxiosService.fetchPage('/by-categories-all'),

    /**
     * Fetch trending products with pagination and currency support
     * @param params { 
     *   page?: number,
     *   page_size?: number,
     *   currency?: string,
     *   [key: string]: any 
     * }
     */
    fetchTrending: (params = {}) => {
        const defaultParams = { 
            page: 1, 
            page_size: 8,
            currency: 'USD',
            include_metrics: true
        };
        
        return AxiosService.json.get('/products/trending', {
            params: { ...defaultParams, ...params }
        });
    },

    // Get trending products with pagination
    async getTrendingProducts(params = {}, config = {}) {
        return AxiosService.fetchPage('/products/trending', {
            page: 1,
            page_size: 8,
            ...params,
            ...config
        });
    },

    getProductsByCategorySlug: async (
        slug: string,
        page: number,
        pageSize: number
    ) => {
        return await AxiosService.json.get(`/products/${slug}/category`, {
            params: {
                page,
                page_size: pageSize,
            },
        });
    },

    bySlug: (
        slug: string,
        page: number,
        pageSize: number
    ) => AxiosService.json.get(`/products/${slug}/category`, {
        params: {
            page,
            page_size: pageSize,
        },
    }),

    createProduct: (data: FormData) => AxiosService.multipart.post('/products', data),
    
    updateProduct: (id: string, data: FormData) => AxiosService.multipart.put(`/products/${id}`, data),
    
    // For JSON data
    updateProductMetadata: (id: string, data: object) => AxiosService.json.put(`/products/${id}/metadata`, data),

    // Delete a product
    deleteProduct: (slug: string) => AxiosService.json.delete(`/products/${slug}`),

    // Create a comment for a product
    createComment: (slug: string, payload: any) => AxiosService.multipart.post(`/products/${slug}/comments`, { comment: { body: payload } }),

    // Delete a comment for a product
    deleteComment: (slug: string, commentId: any) => AxiosService.json.delete(`/products/${slug}/comments/${commentId}`),

    // FOR PRODUCT FEATURES:
    // Favorites endpoints
    getFavorites: (params = {}) => {
        return AxiosService.json.get('/favorites', { params });
    },

    addFavorite: (productId: string) => {
        return AxiosService.json.post(`/products/${productId}/favorites`);
    },

    removeFavorite: (productId: string) => {
        return AxiosService.json.delete(`/products/${productId}/favorites`);
    },

    // Basket endpoints
    getBasket: () => {
        return AxiosService.json.get('/basket');
    },

    addToBasket: (productId: string, quantity = 1) => {
        return AxiosService.json.post('/basket', {
            product_id: productId,
            quantity
        });
    },

    // Compare endpoints
    getCompareList: () => {
        return AxiosService.json.get('/compares');
    },

    addToCompare: (productId: string) => {
        return AxiosService.json.post('/compares', { product_id: productId });
    },
};

/**
 * Service for handling product interactions (favorites, basket, compare, ratings)
 */
export const ProductInteractionService = {
    // Favorites (Wishlist) operations
    favorites: {
        /**
         * Add a product to favorites
         * @param {string} productId - The ID of the product to add to favorites
         * @returns {Promise} The axios response
         */
        add: (productId: string) => {
            return AxiosService.json.post('/favorites', { product_id: productId });
        },

        /**
         * Remove a product from favorites
         * @param {string} productId - The ID of the product to remove from favorites
         * @returns {Promise} The axios response
         */
        remove: (productId: string) => {
            return AxiosService.json.delete(`/favorites/${productId}`);
        },

        /**
         * Toggle a product's favorite status
         * @param {string} productId - The ID of the product to toggle
         * @param {boolean} currentStatus - The current favorite status
         * @returns {Promise} The axios response
         */
        toggle: (productId: string, currentStatus: boolean) => {
            return currentStatus 
                ? ProductInteractionService.favorites.remove(productId)
                : ProductInteractionService.favorites.add(productId);
        },

        /**
         * Get user's favorites/wishlist
         * @param {Object} params - Optional query parameters
         * @returns {Promise} The axios response
         */
        list: (params = {}) => {
            const defaultParams = { page: 1, page_size: 20 };
            return AxiosService.json.get('/favorites', {
                params: { ...defaultParams, ...params }
            });
        },

        /**
         * Check if a product is in favorites
         * @param {string} productId - The ID of the product to check
         * @returns {Promise} The axios response
         */
        check: (productId: string) => {
            return AxiosService.json.get(`/favorites/check/${productId}`);
        }
    },

    // Basket (Cart) operations
    basket: {
        /**
         * Add a product to basket
         * @param {string} productId - The ID of the product
         * @param {number} quantity - The quantity to add
         * @param {Object} options - Optional product options
         * @returns {Promise} The axios response
         */
        add: (productId: string, quantity = 1, options = {}) => {
            return AxiosService.json.post('/basket', { 
                product_id: productId,
                quantity,
                options
            });
        },

        /**
         * Remove a product from basket
         * @param {string} itemId - The basket item ID
         * @returns {Promise} The axios response
         */
        remove: (itemId: string) => {
            return AxiosService.json.delete(`/basket/${itemId}`);
        },

        /**
         * Update basket item quantity
         * @param {string} itemId - The basket item ID
         * @param {number} quantity - The new quantity
         * @returns {Promise} The axios response
         */
        updateQuantity: (itemId: string, quantity: number) => {
            return AxiosService.json.put(`/basket/${itemId}`, { quantity });
        },

        /**
         * Get user's basket contents
         * @returns {Promise} The axios response
         */
        get: () => {
            return AxiosService.json.get('/basket');
        },

        /**
         * Clear the entire basket
         * @returns {Promise} The axios response
         */
        clear: () => {
            return AxiosService.json.delete('/basket');
        }
    },

    // Compare operations
    compare: {
        /**
         * Add a product to compare list
         * @param {string} productId - The ID of the product to add to compare
         * @returns {Promise} The axios response
         */
        add: (productId: string) => {
            return AxiosService.json.post('/compares', { product_id: productId });
        },

        /**
         * Remove a product from compare list
         * @param {string} productId - The ID of the product to remove from compare
         * @returns {Promise} The axios response
         */
        remove: (productId: string) => {
            return AxiosService.json.delete(`/compare/${productId}`);
        },

        /**
         * Toggle a product's compare status
         * @param {string} productId - The ID of the product to toggle
         * @param {boolean} currentStatus - The current compare status
         * @returns {Promise} The axios response
         */
        toggle: (productId: string, currentStatus: boolean) => {
            return currentStatus 
                ? ProductInteractionService.compare.remove(productId)
                : ProductInteractionService.compare.add(productId);
        },

        /**
         * Get user's compare list
         * @returns {Promise} The axios response
         */
        list: () => {
            return AxiosService.json.get('/compare');
        },

        /**
         * Check if a product is in compare list
         * @param {string} productId - The ID of the product to check
         * @returns {Promise} The axios response
         */
        check: (productId: string) => {
            return AxiosService.json.get(`/compare/check/${productId}`);
        },

        /**
         * Clear the entire compare list
         * @returns {Promise} The axios response
         */
        clear: () => {
            return AxiosService.json.delete('/compare');
        }
    },

    // Rating operations
    rating: {
        /**
         * Submit a rating for a product
         * @param {string} productId - The ID of the product
         * @param {number} rating - The rating value (1-5)
         * @param {string} review - Optional review text
         * @returns {Promise} The axios response
         */
        submit: (productId: string, rating: number, review = '') => {
            return AxiosService.json.post(`/products/${productId}/ratings`, {
                rating,
                review
            });
        },

        /**
         * Get ratings for a product
         * @param {string} productId - The ID of the product
         * @param {Object} params - Optional query parameters
         * @returns {Promise} The axios response
         */
        get: (productId: string, params = {}) => {
            const defaultParams = { page: 1, page_size: 10 };
            return AxiosService.json.get(`/products/${productId}/ratings`, {
                params: { ...defaultParams, ...params }
            });
        },

        /**
         * Update an existing rating
         * @param {string} productId - The ID of the product
         * @param {string} ratingId - The ID of the rating
         * @param {Object} updates - The fields to update
         * @returns {Promise} The axios response
         */
        update: (productId: string, ratingId: string, updates: object) => {
            return AxiosService.json.put(`/products/${productId}/ratings/${ratingId}`, updates);
        },

        /**
         * Delete a rating
         * @param {string} productId - The ID of the product
         * @param {string} ratingId - The ID of the rating
         * @returns {Promise} The axios response
         */
        delete: (productId: string, ratingId: string) => {
            return AxiosService.json.delete(`/products/${productId}/ratings/${ratingId}`);
        }
    }
};