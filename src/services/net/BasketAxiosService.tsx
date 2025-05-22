// src/services/net/BasketAxiosService.ts
import { AxiosService } from "./base/AxiosService";

export const BasketAxiosService = {
    /**
     * Add multiple items to cart
     * @param productIds Array of product IDs to add
     * @param quantities Optional array of quantities (defaults to 1 for each)
     */
    addMultipleToBasket: (productIds: string[], quantities?: number[]) => {
        const items = productIds.map((id, index) => ({
            product_id: id,
            quantity: quantities?.[index] || 1
        }));
        
        // return AxiosService.json.post('/cart/items/batch', { items });
        return AxiosService.json.post('/basket ', { items });
    },

    // ... other cart-related methods
};