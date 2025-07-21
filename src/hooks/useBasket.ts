// // import { useState, useEffect } from 'react';
// import { useState, useEffect } from 'react';
// import { BasketAxiosService } from '../services/net/BasketAxiosService';
// // import { BasketAxiosService } from '../services/net/BasketAxiosService';
// // import { BasketItem, BasketState } from '../types';

// export const useBasket = () => {
//   const [basket, setBasket] = useState<BasketState>({
//     items: [],
//     subtotal: 0,
//     itemCount: 0,
//     freeShippingThreshold: 50,
//     isLoading: true
//   });

//   useEffect(() => {
//     const unsubscribe = BasketAxiosService.subscribe((basketData) => {
//       setBasket({
//         items: basketData.items,
//         subtotal: basketData.subtotal,
//         itemCount: basketData.itemCount,
//         freeShippingThreshold: 50,
//         isLoading: false
//       });
//     });

//     // Load initial basket data
//     BasketAxiosService.loadBasket();

//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   const updateQuantity = async (itemId: string | number, quantity: number) => {
//     try {
//       await BasketAxiosService.updateQuantity(itemId, quantity);
//     } catch (error) {
//       console.error('Failed to update quantity:', error);
//       throw error;
//     }
//   };

//   const removeItem = async (itemId: string | number) => {
//     try {
//       await BasketAxiosService.removeItem(itemId);
//     } catch (error) {
//       console.error('Failed to remove item:', error);
//       throw error;
//     }
//   };

//   const clearBasket = async () => {
//     try {
//       await BasketAxiosService.clearBasket();
//     } catch (error) {
//       console.error('Failed to clear basket:', error);
//       throw error;
//     }
//   };

//   return {
//     basket,
//     updateQuantity,
//     removeItem,
//     clearBasket,
//     loading: basket.isLoading
//   };
// };

// 

import { useState, useEffect } from 'react';
import { BasketAxiosService } from '../services/net/BasketAxiosService';

// Define comprehensive type interfaces
interface BasketItem {
  id: string | number;
  product_id: string | number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  slug?: string;
  discount?: number;
  originalPrice?: number;
  color?: string;
  model?: string;
}

interface BasketState {
  items: BasketItem[];
  subtotal: number;
  itemCount: number;
  freeShippingThreshold: number;
  isLoading: boolean;
  savings?: number;
  tax?: number;
  estimatedTotal?: number;
  deliveryFee?: number;
  total?: number;
}

interface UseBasketReturn {
  basket: BasketState;
  loading: boolean;
  updateQuantity: (itemId: string | number, quantity: number) => Promise<void>;
  removeItem: (itemId: string | number) => Promise<void>;
  clearBasket: () => Promise<void>;
  applyPromoCode: (code: string) => Promise<void>;
}

const DEFAULT_BASKET_STATE: BasketState = {
  items: [],
  subtotal: 0,
  itemCount: 0,
  freeShippingThreshold: 100000,
  isLoading: true
};

export const useBasket = (): UseBasketReturn => {
  const [basket, setBasket] = useState<BasketState>(DEFAULT_BASKET_STATE);
  
  // Calculate basket metrics
  const calculateBasketMetrics = (items: BasketItem[], subtotal: number) => {
    // Calculate savings from discounts
    const savings = items.reduce((total, item) => {
      if (item.originalPrice && item.originalPrice > item.price) {
        return total + ((item.originalPrice - item.price) * item.quantity);
      }
      return total;
    }, 0);

    // Calculate tax (8% of subtotal)
    const tax = subtotal * 0.08;
    
    // Calculate estimated total
    const estimatedTotal = subtotal + tax - savings;
    
    // Determine delivery fee
    const qualifiesForFreeShipping = subtotal >= DEFAULT_BASKET_STATE.freeShippingThreshold;
    const deliveryFee = qualifiesForFreeShipping ? 0 : 5; // $5 delivery fee if not qualified
    
    return {
      savings,
      tax,
      estimatedTotal,
      deliveryFee,
      total: estimatedTotal + deliveryFee,
    };
  };

  useEffect(() => {
    const handleBasketUpdate = (basketData: {
      items: BasketItem[];
      subtotal: number;
      itemCount: number;
    }) => {
      const metrics = calculateBasketMetrics(basketData.items, basketData.subtotal);
      
      setBasket({
        items: basketData.items,
        subtotal: basketData.subtotal,
        itemCount: basketData.itemCount,
        freeShippingThreshold: DEFAULT_BASKET_STATE.freeShippingThreshold,
        isLoading: false,
        ...metrics
      });
    };

    const unsubscribe = BasketAxiosService.subscribe(handleBasketUpdate);
    BasketAxiosService.loadBasket();

    return () => {
      unsubscribe();
    };
  }, []);

  const updateQuantity = async (itemId: string | number, quantity: number) => {
    try {
      await BasketAxiosService.updateQuantity(itemId, quantity);
    } catch (error) {
      console.error('Failed to update quantity:', error);
      throw error;
    }
  };

  const removeItem = async (itemId: string | number) => {
    try {
      await BasketAxiosService.removeItem(itemId);
    } catch (error) {
      console.error('Failed to remove item:', error);
      throw error;
    }
  };

  const clearBasket = async () => {
    try {
      await BasketAxiosService.clearBasket();
    } catch (error) {
      console.error('Failed to clear basket:', error);
      throw error;
    }
  };

  const applyPromoCode = async (code: string) => {
    try {
      await BasketAxiosService.applyPromoCode(code);
    } catch (error) {
      console.error('Failed to apply promo code:', error);
      throw error;
    }
  };

  return {
    basket,
    loading: basket.isLoading,
    updateQuantity,
    removeItem,
    clearBasket,
    applyPromoCode
  };
};