import { AxiosService } from "./base/AxiosService";

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
    add: (productId: any): Promise<any> => {
      return AxiosService.json.post('/favorites', { product_id: productId });
    },

    /**
     * Remove a product from favorites
     * @param {string} productId - The ID of the product to remove from favorites
     * @returns {Promise} The axios response
     */
    remove: (productId: any): Promise<any> => {
      return AxiosService.json.delete(`/favorites/${productId}`);
    },

    /**
     * Toggle a product's favorite status
     * @param {string} productId - The ID of the product to toggle
     * @param {boolean} currentStatus - The current favorite status
     * @returns {Promise} The axios response
     */
    toggle: (productId: any, currentStatus: any): Promise<any> => {
      return currentStatus 
        ? ProductInteractionService.favorites.remove(productId)
        : ProductInteractionService.favorites.add(productId);
    },

    /**
     * Get user's favorites/wishlist
     * @param {Object} params - Optional query parameters
     * @returns {Promise} The axios response
     */
    list: (params: object = {}): Promise<any> => {
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
    check: (productId: any): Promise<any> => {
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
    add: (productId: any, quantity: number = 1, options: object = {}): Promise<any> => {
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
    remove: (itemId: any): Promise<any> => {
      return AxiosService.json.delete(`/basket/${itemId}`);
    },

    /**
     * Update basket item quantity
     * @param {string} itemId - The basket item ID
     * @param {number} quantity - The new quantity
     * @returns {Promise} The axios response
     */
    updateQuantity: (itemId: any, quantity: any): Promise<any> => {
      return AxiosService.json.put(`/basket/${itemId}`, { quantity });
    },

    /**
     * Get user's basket contents
     * @returns {Promise} The axios response
     */
    get: (): Promise<any> => {
      return AxiosService.json.get('/basket');
    },

    /**
     * Clear the entire basket
     * @returns {Promise} The axios response
     */
    clear: (): Promise<any> => {
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
    add: (productId: any): Promise<any> => {
      return AxiosService.json.post('/compare', { product_id: productId });
    },

    /**
     * Remove a product from compare list
     * @param {string} productId - The ID of the product to remove from compare
     * @returns {Promise} The axios response
     */
    remove: (productId: any): Promise<any> => {
      return AxiosService.json.delete(`/compare/${productId}`);
    },

    /**
     * Toggle a product's compare status
     * @param {string} productId - The ID of the product to toggle
     * @param {boolean} currentStatus - The current compare status
     * @returns {Promise} The axios response
     */
    toggle: (productId: any, currentStatus: any): Promise<any> => {
      return currentStatus 
        ? ProductInteractionService.compare.remove(productId)
        : ProductInteractionService.compare.add(productId);
    },

    /**
     * Get user's compare list
     * @returns {Promise} The axios response
     */
    list: (): Promise<any> => {
      return AxiosService.json.get('/compare');
    },

    /**
     * Check if a product is in compare list
     * @param {string} productId - The ID of the product to check
     * @returns {Promise} The axios response
     */
    check: (productId: any): Promise<any> => {
      return AxiosService.json.get(`/compare/check/${productId}`);
    },

    /**
     * Clear the entire compare list
     * @returns {Promise} The axios response
     */
    clear: (): Promise<any> => {
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
    submit: (productId: any, rating: any, review: string = ''): Promise<any> => {
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
    get: (productId: any, params: object = {}): Promise<any> => {
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
    update: (productId: any, ratingId: any, updates: unknown): Promise<any> => {
      return AxiosService.json.put(`/products/${productId}/ratings/${ratingId}`, updates);
    },

    /**
     * Delete a rating
     * @param {string} productId - The ID of the product
     * @param {string} ratingId - The ID of the rating
     * @returns {Promise} The axios response
     */
    delete: (productId: any, ratingId: any): Promise<any> => {
      return AxiosService.json.delete(`/products/${productId}/ratings/${ratingId}`);
    }
  }
};