// import { AxiosService } from "./base/AxiosService";
// export const FavoritesAxiosService = {
//     /**
//      * Get user's favorite lists with pagination
//      * @param params Query parameters
//      * @returns Promise with favorite lists
//      */
//     getFavoriteLists: (params: {
//         page?: number;
//         page_size?: number;
//         user_id?: string;
//         sort_by?: 'date' | 'name' | 'updated';
//         [key: string]: any;
//     }) => {
//         const finalParams = {
//             page: 1,
//             page_size: 10,
//             sort_by: 'updated',
//             ...params
//         };
//         return AxiosService.json.get('/favorites/lists', { params: finalParams });
//     },
//     /**
//      * Get items in a specific favorite list
//      * @param listId Favorite list ID
//      * @param params Query parameters
//      * @returns Promise with favorite items
//      */
//     getFavoriteItems: (listId: string, params: {
//         page?: number;
//         page_size?: number;
//         sort_by?: 'date' | 'price_asc' | 'price_desc' | 'rating';
//         [key: string]: any;
//     }) => {
//         const finalParams = {
//             page: 1,
//             page_size: 12,
//             sort_by: 'date',
//             ...params
//         };
//         return AxiosService.json.get(`/favorites/lists/${listId}/items`, { params: finalParams });
//     },
//     /**
//      * Create a new favorite list
//      * @param data Favorite list data
//      * @returns Promise with created list
//      */
//     createFavoriteList: (data: {
//         name: string;
//         description?: string;
//         privacy?: 'private' | 'public' | 'shared';
//         user_id?: string;
//     }) => {
//         return AxiosService.json.post('/favorites/lists', data);
//     },
//     /**
//      * Update a favorite list
//      * @param listId Favorite list ID
//      * @param data Update data
//      * @returns Promise with updated list
//      */
//     updateFavoriteList: (listId: string, data: {
//         name?: string;
//         description?: string;
//         privacy?: 'private' | 'public' | 'shared';
//     }) => {
//         return AxiosService.json.patch(`/favorites/lists/${listId}`, data);
//     },
//     /**
//      * Delete a favorite list
//      * @param listId Favorite list ID
//      * @returns Promise with deletion result
//      */
//     deleteFavoriteList: (listId: string) => {
//         return AxiosService.json.delete(`/favorites/lists/${listId}`);
//     },
//     /**
//      * Add item to favorite list
//      * @param listId Favorite list ID
//      * @param productId Product ID to add
//      * @returns Promise with operation result
//      */
//     addFavoriteItem: (listId: string, productId: string) => {
//         return AxiosService.json.post(`/favorites/lists/${listId}/items`, { product_id: productId });
//     },
//     /**
//      * Remove item from favorite list
//      * @param listId Favorite list ID
//      * @param productId Product ID to remove
//      * @returns Promise with operation result
//      */
//     removeFavoriteItem: (listId: string, productId: string) => {
//         return AxiosService.json.delete(`/favorites/lists/${listId}/items/${productId}`);
//     },
//     /**
//      * Move items between favorite lists
//      * @param sourceListId Source list ID
//      * @param targetListId Target list ID
//      * @param productIds Array of product IDs to move
//      * @returns Promise with operation result
//      */
//     moveFavoriteItems: (sourceListId: string, targetListId: string, productIds: string[]) => {
//         return AxiosService.json.post('/favorites/items/move', {
//             source_list_id: sourceListId,
//             target_list_id: targetListId,
//             product_ids: productIds
//         });
//     },
//     /**
//      * Get user's default favorite list
//      * @param userId Optional user ID (defaults to current user)
//      * @returns Promise with default list
//      */
//     getDefaultFavoriteList: (userId?: string) => {
//         return AxiosService.json.get('/favorites/lists/default', {
//             params: { user_id: userId }
//         });
//     },
//     /**
//      * Bulk add items to favorite list
//      * @param listId Favorite list ID
//      * @param productIds Array of product IDs to add
//      * @returns Promise with operation result
//      */
//     bulkAddFavoriteItems: (listId: string, productIds: string[]) => {
//         return AxiosService.json.post(`/favorites/lists/${listId}/items/bulk`, {
//             product_ids: productIds
//         });
//     }
// };
// 
import { AxiosService } from "./base/AxiosService";
export const FavoritesAxiosService = {
    /**
     * Get user's favorite lists with pagination
     * @param params Query parameters
     * @returns Promise with favorite lists
     */
    getFavoriteLists: (params) => {
        const finalParams = {
            page: 1,
            page_size: 10,
            sort_by: 'updated',
            ...params
        };
        return AxiosService.json.get('/favorites/lists', { params: finalParams });
    },
    /**
     * Get items in a specific favorite list
     * @param listId Favorite list ID
     * @param params Query parameters
     * @returns Promise with favorite items
     */
    getFavoriteItems: (listId, params) => {
        const finalParams = {
            page: 1,
            page_size: 12,
            sort_by: 'date',
            ...params
        };
        return AxiosService.json.get(`/favorites/lists/${listId}/items`, { params: finalParams });
    },
    /**
     * Create a new favorite list
     * @param data Favorite list data
     * @returns Promise with created list
     */
    createFavoriteList: (data) => {
        return AxiosService.json.post('/favorites/lists', data);
    },
    /**
     * Update a favorite list
     * @param listId Favorite list ID
     * @param data Update data
     * @returns Promise with updated list
     */
    updateFavoriteList: (listId, data) => {
        return AxiosService.json.patch(`/favorites/lists/${listId}`, data);
    },
    /**
     * Delete a favorite list
     * @param listId Favorite list ID
     * @returns Promise with deletion result
     */
    deleteFavoriteList: (listId) => {
        return AxiosService.json.delete(`/favorites/lists/${listId}`);
    },
    /**
     * Add item to favorite list
     * @param listId Favorite list ID
     * @param productId Product ID to add
     * @returns Promise with operation result
     */
    addFavoriteItem: (listId, productId) => {
        // return AxiosService.json.post(`/favorites/lists/${listId}/items`, { product_id: productId });
        const data = { product_id: productId, list_id: listId };
        return AxiosService.json.post('/favorites', data);
    },
    /**
     * Remove item from favorite list
     * @param listId Favorite list ID
     * @param itemId Item ID to remove
     * @returns Promise with operation result
     */
    removeFavoriteItem: (listId, itemId) => {
        return AxiosService.json.delete(`/favorites/lists/${listId}/items/${itemId}`);
    },
    /**
     * Remove multiple items from a favorite list by product IDs
     *
     * @param {string} listId - ID of the favorite list
     * @param {string[]} productIds - Array of product IDs to remove
     * @returns {Promise<AxiosResponse>}
     */
    removeBatchFavoriteItems: async (listId, productIds) => {
        return AxiosService.json.post(`/favorites/lists/${listId}/items/batch-remove`, {
            product_ids: productIds
        });
    },
    // // Add this function to your FavoritesAxiosService export
    // export const FavoritesAxiosService = {
    //     // ... existing methods
    //     removeBatchFavoriteItems,
    // },  
    /**
     * Move items between favorite lists
     * @param sourceListId Source list ID
     * @param targetListId Target list ID
     * @param itemIds Array of favorite item IDs to move
     * @returns Promise with operation result
     */
    moveFavoriteItems: (sourceListId, targetListId, itemIds) => {
        console.log(`Passed datas: source_list_id: ${sourceListId},
            target_list_id: ${targetListId},
            favorite_ids: ${itemIds} 
            `);
        return AxiosService.json.post('/favorites/items/move', {
            source_list_id: sourceListId,
            target_list_id: targetListId,
            favorite_ids: itemIds
        });
    },
    /**
     * Get user's default favorite list
     * @param userId Optional user ID (defaults to current user)
     * @returns Promise with default list
     */
    getDefaultFavoriteList: (userId) => {
        return AxiosService.json.get('/favorites/lists/default', {
            params: { user_id: userId }
        });
    },
    /**
     * Bulk add items to favorite list
     * @param listId Favorite list ID
     * @param productIds Array of product IDs to add
     * @returns Promise with operation result
     */
    bulkAddFavoriteItems: (listId, productIds) => {
        return AxiosService.json.post(`/favorites/lists/${listId}/items/bulk`, {
            product_ids: productIds
        });
    },
    // 
    /**
    * Check if a product is in favorites
    * @param productId Product ID to check
    * @returns Promise with check result
    */
    checkFavoriteStatus: (productId) => {
        return AxiosService.json.get(`/favorites/items/check/${productId}`, {
            withCredentials: true
        });
    },
    /**
     * Toggle favorite status for a product
     * @param productId Product ID to toggle
     * @returns Promise with operation result
     */
    toggleFavorite: (productId) => {
        return AxiosService.json.post('/favorites/items/toggle', { product_id: productId }, { withCredentials: true });
    }
};
