// src/services/net/BasketAxiosService.tsx
import { AxiosService } from "./base/AxiosService";
import { AxiosResponse } from "axios";

interface BasketItem {
  id: string;
  product_id: string;
  product_name: string;
  product_image: string;
  price: number;
  quantity: number;
  total: number;
}

interface BasketResponse {
  items: BasketItem[];
  subtotal: number;
  item_count: number;
  tax?: number;
  shipping?: number;
  total?: number;
}

interface AddToBasketRequest {
  product_id: string;
  quantity: number;
}

interface AddMultipleToBasketRequest {
  items: AddToBasketRequest[];
}

export const BasketAxiosService = {
  /**
   * Get current user's basket
   */
  getBasket: (): Promise<AxiosResponse<BasketResponse>> => {
    return AxiosService.json.get('/basket');
  },

  /**
   * Add single item to basket
   * @param productId Product ID to add
   * @param quantity Quantity to add (default: 1)
   */
  addToBasket: (productId: string, quantity: number = 1): Promise<AxiosResponse<BasketResponse>> => {
    return AxiosService.json.post('/basket/items', {
      product_id: productId,
      quantity: quantity
    });
  },

  /**
   * Add multiple items to basket
   * @param productIds Array of product IDs to add
   * @param quantities Optional array of quantities (defaults to 1 for each)
   */
  addMultipleToBasket: (productIds: string[], quantities?: number[]): Promise<AxiosResponse<BasketResponse>> => {
    const items = productIds.map((id, index) => ({
      product_id: id,
      quantity: quantities?.[index] || 1
    }));
    
    return AxiosService.json.post('/basket/items/batch', { items });
  },

  /**
   * Update item quantity in basket
   * @param itemId Basket item ID
   * @param quantity New quantity
   */
  updateQuantity: (itemId: string, quantity: number): Promise<AxiosResponse<BasketResponse>> => {
    return AxiosService.json.put(`/basket/items/${itemId}`, {
      quantity: quantity
    });
  },

  /**
   * Remove item from basket
   * @param itemId Basket item ID to remove
   */
  removeFromBasket: (itemId: string): Promise<AxiosResponse<BasketResponse>> => {
    return AxiosService.json.delete(`/basket/items/${itemId}`);
  },

  /**
   * Remove multiple items from basket
   * @param itemIds Array of basket item IDs to remove
   */
  removeMultipleFromBasket: (itemIds: string[]): Promise<AxiosResponse<BasketResponse>> => {
    return AxiosService.json.delete('/basket/items/batch', {
      data: { item_ids: itemIds }
    });
  },

  /**
   * Clear entire basket
   */
  clearBasket: (): Promise<AxiosResponse<{ message: string }>> => {
    return AxiosService.json.delete('/basket');
  },

  /**
   * Apply coupon code to basket
   * @param couponCode Coupon code to apply
   */
  applyCoupon: (couponCode: string): Promise<AxiosResponse<BasketResponse>> => {
    return AxiosService.json.post('/basket/coupon', {
      coupon_code: couponCode
    });
  },

  /**
   * Remove coupon from basket
   */
  removeCoupon: (): Promise<AxiosResponse<BasketResponse>> => {
    return AxiosService.json.delete('/basket/coupon');
  },

  /**
   * Get basket summary (totals, taxes, shipping)
   */
  getBasketSummary: (): Promise<AxiosResponse<{
    subtotal: number;
    tax: number;
    shipping: number;
    discount: number;
    total: number;
    item_count: number;
  }>> => {
    return AxiosService.json.get('/basket/summary');
  },

  /**
   * Calculate shipping for basket
   * @param shippingAddress Shipping address for calculation
   */
  calculateShipping: (shippingAddress: {
    country: string;
    state?: string;
    city: string;
    postal_code: string;
  }): Promise<AxiosResponse<{
    shipping_options: Array<{
      id: string;
      name: string;
      price: number;
      estimated_delivery: string;
    }>;
  }>> => {
    return AxiosService.json.post('/basket/shipping/calculate', shippingAddress);
  },

  /**
   * Save basket for later (wishlist-like functionality)
   */
  saveForLater: (itemId: string): Promise<AxiosResponse<BasketResponse>> => {
    return AxiosService.json.post(`/basket/items/${itemId}/save-for-later`);
  },

  /**
   * Move item from saved for later back to basket
   */
  moveToBasket: (savedItemId: string): Promise<AxiosResponse<BasketResponse>> => {
    return AxiosService.json.post(`/basket/saved-items/${savedItemId}/move-to-basket`);
  },

  /**
   * Get saved for later items
   */
  getSavedItems: (): Promise<AxiosResponse<{
    saved_items: Array<{
      id: string;
      product_id: string;
      product_name: string;
      product_image: string;
      price: number;
      saved_at: string;
    }>;
  }>> => {
    return AxiosService.json.get('/basket/saved-items');
  },

  /**
   * Validate basket before checkout
   */
  validateBasket: (): Promise<AxiosResponse<{
    valid: boolean;
    errors: Array<{
      item_id: string;
      message: string;
      type: 'out_of_stock' | 'price_changed' | 'unavailable';
    }>;
  }>> => {
    return AxiosService.json.post('/basket/validate');
  },

  /**
   * Get recommended products based on basket contents
   */
  getRecommendations: (): Promise<AxiosResponse<{
    recommendations: Array<{
      product_id: string;
      product_name: string;
      product_image: string;
      price: number;
      reason: string;
    }>;
  }>> => {
    return AxiosService.json.get('/basket/recommendations');
  },

  /**
   * Check if products are still available and get updated prices
   * @param productIds Array of product IDs to check
   */
  checkAvailability: (productIds: string[]): Promise<AxiosResponse<{
    products: Array<{
      product_id: string;
      available: boolean;
      current_price: number;
      stock_quantity: number;
    }>;
  }>> => {
    return AxiosService.json.post('/basket/check-availability', {
      product_ids: productIds
    });
  }
};

export default BasketAxiosService;