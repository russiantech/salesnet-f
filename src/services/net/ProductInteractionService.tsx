// src/services/net/ProductInteractionService.ts
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
  options?: object;
}

interface AddMultipleToBasketRequest {
  items: AddToBasketRequest[];
}

interface ShippingCalculationRequest {
  country: string;
  state?: string;
  city: string;
  postal_code: string;
}

interface ShippingOption {
  id: string;
  name: string;
  price: number;
  estimated_delivery: string;
}

interface BasketValidationError {
  item_id: string;
  message: string;
  type: 'out_of_stock' | 'price_changed' | 'unavailable';
}

interface ProductAvailability {
  product_id: string;
  available: boolean;
  current_price: number;
  stock_quantity: number;
}

interface ProductRecommendation {
  product_id: string;
  product_name: string;
  product_image: string;
  price: number;
  reason: string;
}

/**
 * Comprehensive service for handling all product interactions
 */
export const ProductInteractionService = {
  // Favorites (Wishlist) operations
  favorites: {
    add: (productId: string): Promise<AxiosResponse> => {
      return AxiosService.json.post('/favorites', { product_id: productId });
    },
    remove: (productId: string): Promise<AxiosResponse> => {
      return AxiosService.json.delete(`/favorites/${productId}`);
    },
    toggle: (productId: string, currentStatus: boolean): Promise<AxiosResponse> => {
      return currentStatus 
        ? ProductInteractionService.favorites.remove(productId)
        : ProductInteractionService.favorites.add(productId);
    },
    list: (params: object = {}): Promise<AxiosResponse> => {
      const defaultParams = { page: 1, page_size: 20 };
      return AxiosService.json.get('/favorites', {
        params: { ...defaultParams, ...params }
      });
    },
    check: (productId: string): Promise<AxiosResponse> => {
      return AxiosService.json.get(`/favorites/check/${productId}`);
    }
  },

  // Basket (Cart) operations
  basket: {
    /**
     * Get current user's basket
     */
    get: (): Promise<AxiosResponse<BasketResponse>> => {
      return AxiosService.json.get('/basket');
    },

    /**
     * Add single item to basket
     */
    add: (productId: string, quantity: number = 1, options: object = {}): Promise<AxiosResponse<BasketResponse>> => {
      return AxiosService.json.post('/basket/items', {
        product_id: productId,
        quantity,
        options
      });
    },

    /**
     * Add multiple items to basket
     */
    addMultiple: (items: AddToBasketRequest[]): Promise<AxiosResponse<BasketResponse>> => {
      return AxiosService.json.post('/basket/items/batch', { items });
    },

    /**
     * Update item quantity in basket
     */
    updateQuantity: (itemId: string, quantity: number): Promise<AxiosResponse<BasketResponse>> => {
      return AxiosService.json.put(`/basket/items/${itemId}`, { quantity });
    },

    /**
     * Remove item from basket
     */
    remove: (itemId: string): Promise<AxiosResponse<BasketResponse>> => {
      return AxiosService.json.delete(`/basket/${itemId}`);
    },

    /**
     * Remove multiple items from basket
     */
    removeMultiple: (itemIds: string[]): Promise<AxiosResponse<BasketResponse>> => {
      return AxiosService.json.delete('/basket/items/batch', {
        data: { item_ids: itemIds }
      });
    },

    /**
     * Clear entire basket
     */
    clear: (): Promise<AxiosResponse<{ message: string }>> => {
      return AxiosService.json.delete('/basket');
    },

    /**
     * Apply coupon code to basket
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
    getSummary: (): Promise<AxiosResponse<{
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
     */
    calculateShipping: (shippingAddress: ShippingCalculationRequest): Promise<AxiosResponse<{
      shipping_options: ShippingOption[];
    }>> => {
      return AxiosService.json.post('/basket/shipping/calculate', shippingAddress);
    },

    /**
     * Save basket item for later
     */
    saveForLater: (itemId: string): Promise<AxiosResponse<BasketResponse>> => {
      return AxiosService.json.post(`/basket/items/${itemId}/save-for-later`);
    },

    /**
     * Move saved item back to basket
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
    validate: (): Promise<AxiosResponse<{
      valid: boolean;
      errors: BasketValidationError[];
    }>> => {
      return AxiosService.json.post('/basket/validate');
    },

    /**
     * Get recommended products based on basket contents
     */
    getRecommendations: (): Promise<AxiosResponse<{
      recommendations: ProductRecommendation[];
    }>> => {
      return AxiosService.json.get('/basket/recommendations');
    },

    /**
     * Check product availability and prices
     */
    checkAvailability: (productIds: string[]): Promise<AxiosResponse<{
      products: ProductAvailability[];
    }>> => {
      return AxiosService.json.post('/basket/check-availability', {
        product_ids: productIds
      });
    }
  },

  // Compare operations
  compare: {
    add: (productId: string): Promise<AxiosResponse> => {
      return AxiosService.json.post('/compare', { product_id: productId });
    },
    remove: (productId: string): Promise<AxiosResponse> => {
      return AxiosService.json.delete(`/compare/${productId}`);
    },
    toggle: (productId: string, currentStatus: boolean): Promise<AxiosResponse> => {
      return currentStatus 
        ? ProductInteractionService.compare.remove(productId)
        : ProductInteractionService.compare.add(productId);
    },
    list: (): Promise<AxiosResponse> => {
      return AxiosService.json.get('/compare');
    },
    check: (productId: string): Promise<AxiosResponse> => {
      return AxiosService.json.get(`/compare/check/${productId}`);
    },
    clear: (): Promise<AxiosResponse> => {
      return AxiosService.json.delete('/compare');
    }
  },

  // Rating operations
  rating: {
    submit: (productId: string, rating: number, review: string = ''): Promise<AxiosResponse> => {
      return AxiosService.json.post(`/products/${productId}/ratings`, {
        rating,
        review
      });
    },
    get: (productId: string, params: object = {}): Promise<AxiosResponse> => {
      const defaultParams = { page: 1, page_size: 10 };
      return AxiosService.json.get(`/products/${productId}/ratings`, {
        params: { ...defaultParams, ...params }
      });
    },
    update: (productId: string, ratingId: string, updates: object): Promise<AxiosResponse> => {
      return AxiosService.json.put(`/products/${productId}/ratings/${ratingId}`, updates);
    },
    delete: (productId: string, ratingId: string): Promise<AxiosResponse> => {
      return AxiosService.json.delete(`/products/${productId}/ratings/${ratingId}`);
    }
  }
};