// import { useState, useEffect, useCallback } from 'react';
// import { ProductInteractionService } from '../services/net/ProductInteractionService';
// import { useAuth } from '../context/AuthContext';
// // import { useAuth } from './path-to-your-auth-context'; // Adjust path as needed

// /**
//  * Custom hook to manage product interactions like favorites, basket, compare
//  * @param {string} productId - The ID of the product
//  * @returns {Object} Product interaction methods and states
//  */
// export const useProductInteractions = (productId) => {
//   const { isAuthenticated, user, showLoginModal } = useAuth();
  
//   // States for different interaction types
//   const [inFavorites, setInFavorites] = useState(false);
//   const [inBasket, setInBasket] = useState(false);
//   const [inCompare, setInCompare] = useState(false);
//   const [basketQuantity, setBasketQuantity] = useState(0);
//   const [loadingStates, setLoadingStates] = useState({
//     favorites: false,
//     basket: false,
//     compare: false
//   });

//   // Check initial states
//   useEffect(() => {
//     if (isAuthenticated && productId) {
//       checkFavoriteStatus();
//       checkBasketStatus();
//       checkCompareStatus();
//     }
//   }, [isAuthenticated, productId]);

//   // Check if product is in favorites
//   const checkFavoriteStatus = useCallback(async () => {
//     if (!isAuthenticated || !productId) return;
    
//     try {
//       const response = await ProductInteractionService.favorites.check(productId);
//       setInFavorites(response.data.in_favorites);
//     } catch (error) {
//       console.error('Error checking favorite status:', error);
//     }
//   }, [isAuthenticated, productId]);

//   // Check if product is in basket
//   const checkBasketStatus = useCallback(async () => {
//     if (!isAuthenticated || !productId) return;
    
//     try {
//       const response = await ProductInteractionService.basket.get();
//       const basketItem = response.data.products.find(item => item.product_id === productId);
      
//       setInBasket(!!basketItem);
//       setBasketQuantity(basketItem ? basketItem.quantity : 0);
//     } catch (error) {
//       console.error('Error checking basket status:', error);
//     }
//   }, [isAuthenticated, productId]);

//   // Check if product is in compare
//   const checkCompareStatus = useCallback(async () => {
//     if (!isAuthenticated || !productId) return;
    
//     try {
//       const response = await ProductInteractionService.compare.check(productId);
//       setInCompare(response.data.in_compare);
//     } catch (error) {
//       console.error('Error checking compare status:', error);
//     }
//   }, [isAuthenticated, productId]);

//   // Toggle favorite status
//   const toggleFavorite = useCallback(async () => {
//     if (!isAuthenticated) {
//       showLoginModal();
//       return;
//     }
    
//     try {
//       setLoadingStates(prev => ({ ...prev, favorites: true }));
//       await ProductInteractionService.favorites.toggle(productId, inFavorites);
//       setInFavorites(!inFavorites);
//     } catch (error) {
//       console.error('Error toggling favorite:', error);
//     } finally {
//       setLoadingStates(prev => ({ ...prev, favorites: false }));
//     }
//   }, [isAuthenticated, productId, inFavorites, showLoginModal]);

//   // Toggle compare status
//   const toggleCompare = useCallback(async () => {
//     if (!isAuthenticated) {
//       showLoginModal();
//       return;
//     }
    
//     try {
//       setLoadingStates(prev => ({ ...prev, compare: true }));
//       await ProductInteractionService.compare.toggle(productId, inCompare);
//       setInCompare(!inCompare);
//     } catch (error) {
//       console.error('Error toggling compare:', error);
//     } finally {
//       setLoadingStates(prev => ({ ...prev, compare: false }));
//     }
//   }, [isAuthenticated, productId, inCompare, showLoginModal]);

//   // Add to basket
//   const addToBasket = useCallback(async (quantity = 1, options = {}) => {
//     if (!isAuthenticated) {
//       showLoginModal();
//       return;
//     }
    
//     try {
//       setLoadingStates(prev => ({ ...prev, basket: true }));
//       await ProductInteractionService.basket.add(productId, quantity, options);
//       setInBasket(true);
//       setBasketQuantity(prev => prev + quantity);
//     } catch (error) {
//       console.error('Error adding to basket:', error);
//     } finally {
//       setLoadingStates(prev => ({ ...prev, basket: false }));
//     }
//   }, [isAuthenticated, productId, showLoginModal]);

//   // Remove from basket
//   const removeFromBasket = useCallback(async (itemId) => {
//     if (!isAuthenticated) return;
    
//     try {
//       setLoadingStates(prev => ({ ...prev, basket: true }));
//       await ProductInteractionService.basket.remove(itemId);
//       setInBasket(false);
//       setBasketQuantity(0);
//     } catch (error) {
//       console.error('Error removing from basket:', error);
//     } finally {
//       setLoadingStates(prev => ({ ...prev, basket: false }));
//     }
//   }, [isAuthenticated]);

//   return {
//     inFavorites,
//     inBasket,
//     inCompare,
//     basketQuantity,
//     loading: loadingStates,
//     toggleFavorite,
//     toggleCompare,
//     addToBasket,
//     removeFromBasket,
//     refreshStatus: {
//       checkFavoriteStatus,
//       checkBasketStatus,
//       checkCompareStatus
//     }
//   };
// };

// // function useAuth(): { isAuthenticated: any; user: any; showLoginModal: any; } {
// //     throw new Error('Function not implemented.');
// // }


// 

// First, ensure React hooks are imported correctly at the top of the file
// import { useState, useCallback, useEffect } from 'react';
// import { ProductInteractionService } from '../services/net/ProductInteractionService';
// // import ProductInteractionService from '../services/ProductInteractionService';

// // Define the hook function
// export const useProductInteractions1 = (productId, isAuthenticated) => {
//   const [inBasket, setInBasket] = useState(false);
//   const [basketQuantity, setBasketQuantity] = useState(0);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isWishlisted, setIsWishlisted] = useState(false);
  
//   // Check if product is in basket
//   const checkBasketStatus = useCallback(async () => {
//     if (!isAuthenticated || !productId) return;
    
//     try {
//       const response = await ProductInteractionService.basket.get();
      
//       // Safe access to possibly undefined properties
//       if (response?.data?.products) {
//         const basketItem = response.data.products.find(item => item.product_id === productId);
        
//         setInBasket(!!basketItem);
//         setBasketQuantity(basketItem ? basketItem.quantity : 0);
//       } else {
//         // Handle case where products array doesn't exist
//         console.log('No products found in basket or unexpected response format');
//         setInBasket(false);
//         setBasketQuantity(0);
//       }
//     } catch (error) {
//       console.error('Error checking basket status:', error);
//       setInBasket(false);
//       setBasketQuantity(0);
//     }
//   }, [isAuthenticated, productId]);
  
//   // Check if product is wishlisted
//   const checkWishlistStatus = useCallback(async () => {
//     if (!isAuthenticated || !productId) return;
    
//     try {
//       const response = await ProductInteractionService.favorites.get();
      
//       if (response?.data?.products) {
//         const wishlisted = response.data.products.some(item => item.product_id === productId);
//         setIsWishlisted(wishlisted);
//       } else {
//         setIsWishlisted(false);
//       }
//     } catch (error) {
//       console.error('Error checking wishlist status:', error);
//       setIsWishlisted(false);
//     }
//   }, [isAuthenticated, productId]);
  
//   // Add to basket function
//   const addToBasket = useCallback(async (quantity = 1) => {
//     if (!isAuthenticated || !productId) return;
    
//     setIsLoading(true);
//     try {
//       await ProductInteractionService.basket.add(productId, quantity);
//       await checkBasketStatus();
//     } catch (error) {
//       console.error('Error adding product to basket:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   }, [isAuthenticated, productId, checkBasketStatus]);
  
//   // Remove from basket function
//   const removeFromBasket = useCallback(async () => {
//     if (!isAuthenticated || !productId) return;
    
//     setIsLoading(true);
//     try {
//       await ProductInteractionService.basket.remove(productId);
//       setInBasket(false);
//       setBasketQuantity(0);
//     } catch (error) {
//       console.error('Error removing product from basket:', error);
//       // Refresh basket status to ensure UI is in sync
//       await checkBasketStatus();
//     } finally {
//       setIsLoading(false);
//     }
//   }, [isAuthenticated, productId, checkBasketStatus]);
  
//   // Update basket quantity
//   const updateBasketQuantity = useCallback(async (quantity) => {
//     if (!isAuthenticated || !productId) return;
    
//     setIsLoading(true);
//     try {
//       await ProductInteractionService.basket.update(productId, quantity);
//       await checkBasketStatus();
//     } catch (error) {
//       console.error('Error updating basket quantity:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   }, [isAuthenticated, productId, checkBasketStatus]);
  
//   // Toggle wishlist status
//   const toggleWishlist = useCallback(async () => {
//     if (!isAuthenticated || !productId) return;
    
//     setIsLoading(true);
//     try {
//       if (isWishlisted) {
//         await ProductInteractionService.favorites.remove(productId);
//         setIsWishlisted(false);
//       } else {
//         await ProductInteractionService.favorites.add(productId);
//         setIsWishlisted(true);
//       }
//     } catch (error) {
//       console.error('Error toggling wishlist status:', error);
//       // Refresh wishlist status to ensure UI is in sync
//       await checkWishlistStatus();
//     } finally {
//       setIsLoading(false);
//     }
//   }, [isAuthenticated, productId, isWishlisted, checkWishlistStatus]);
  
//   // Check basket and wishlist status on mount and when auth status changes
//   useEffect(() => {
//     if (isAuthenticated && productId) {
//       checkBasketStatus();
//       checkWishlistStatus();
//     } else {
//       // Reset states when not authenticated
//       setInBasket(false);
//       setBasketQuantity(0);
//       setIsWishlisted(false);
//     }
//   }, [isAuthenticated, productId, checkBasketStatus, checkWishlistStatus]);
  
//   return {
//     inBasket,
//     basketQuantity,
//     isWishlisted,
//     isLoading,
//     addToBasket,
//     removeFromBasket,
//     updateBasketQuantity,
//     toggleWishlist,
//     refreshBasketStatus: checkBasketStatus,
//     refreshWishlistStatus: checkWishlistStatus
//   };
// };

// export default useProductInteractions1;

// 

// import { useState, useCallback, useEffect } from 'react';
// import { ProductInteractionService } from '../services/net/ProductInteractionService';

// export const useProductInteractions2 = (productId, isAuthenticated) => {
//   const [inBasket, setInBasket] = useState(false);
//   const [basketQuantity, setBasketQuantity] = useState(0);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isWishlisted, setIsWishlisted] = useState(false);
  
//   // Initial data fetch
//   const fetchProductState = useCallback(async () => {
//     if (!isAuthenticated || !productId) return;
    
//     try {
//       // Get basket data
//       const basketResponse = await ProductInteractionService.basket.get();
//       if (basketResponse?.data?.products) {
//         const basketItem = basketResponse.data.products.find(item => item.product_id === productId);
//         setInBasket(!!basketItem);
//         setBasketQuantity(basketItem ? basketItem.quantity : 0);
//       }
      
//       // Get wishlist data
//       const wishlistResponse = await ProductInteractionService.favorites.list();
//       if (wishlistResponse?.data?.products) {
//         const wishlisted = wishlistResponse.data.products.some(item => item.product_id === productId);
//         setIsWishlisted(wishlisted);
//       }
//     } catch (error) {
//       console.error('Error fetching product state:', error);
//     }
//   }, [isAuthenticated, productId]);
  
//   // Add to basket - directly call API without checking first
//   const addToBasket = useCallback(async (quantity = 1) => {
//     if (!isAuthenticated || !productId) return;
    
//     setIsLoading(true);
//     try {
//       await ProductInteractionService.basket.add(productId, quantity);
//       // Update local state
//       setInBasket(true);
//       setBasketQuantity(prev => prev + quantity);
//     } catch (error) {
//       console.error('Error adding product to basket:', error);
//       // Only fetch full state when there's an error
//       await fetchProductState();
//     } finally {
//       setIsLoading(false);
//     }
//   }, [isAuthenticated, productId, fetchProductState]);
  
//   // Remove from basket - directly call API without checking first
//   const removeFromBasket = useCallback(async () => {
//     if (!isAuthenticated || !productId) return;
    
//     setIsLoading(true);
//     try {
//       await ProductInteractionService.basket.remove(productId);
//       // Update local state
//       setInBasket(false);
//       setBasketQuantity(0);
//     } catch (error) {
//       console.error('Error removing product from basket:', error);
//       // Only fetch full state when there's an error
//       await fetchProductState();
//     } finally {
//       setIsLoading(false);
//     }
//   }, [isAuthenticated, productId, fetchProductState]);
  
//   // Update basket quantity - directly call API without checking first
//   const updateBasketQuantity = useCallback(async (quantity) => {
//     if (!isAuthenticated || !productId) return;
    
//     setIsLoading(true);
//     try {
//       await ProductInteractionService.basket.updateQuantity(productId, quantity);
//       // Update local state
//       setInBasket(quantity > 0);
//       setBasketQuantity(quantity);
//     } catch (error) {
//       console.error('Error updating basket quantity:', error);
//       // Only fetch full state when there's an error
//       await fetchProductState();
//     } finally {
//       setIsLoading(false);
//     }
//   }, [isAuthenticated, productId, fetchProductState]);
  
//   // Toggle wishlist - directly call API without checking first
//   const toggleWishlist = useCallback(async () => {
//     if (!isAuthenticated || !productId) return;
    
//     setIsLoading(true);
//     try {
//       if (isWishlisted) {
//         await ProductInteractionService.favorites.remove(productId);
//         setIsWishlisted(false);
//       } else {
//         await ProductInteractionService.favorites.add(productId);
//         setIsWishlisted(true);
//       }
//     } catch (error) {
//       console.error('Error toggling wishlist status:', error);
//       // Only fetch full state when there's an error
//       await fetchProductState();
//     } finally {
//       setIsLoading(false);
//     }
//   }, [isAuthenticated, productId, isWishlisted, fetchProductState]);
  
//   // Initial fetch on mount and when auth status changes
//   useEffect(() => {
//     if (isAuthenticated && productId) {
//       fetchProductState();
//     } else {
//       // Reset states when not authenticated
//       setInBasket(false);
//       setBasketQuantity(0);
//       setIsWishlisted(false);
//     }
//   }, [isAuthenticated, productId, fetchProductState]);
  
//   return {
//     inBasket,
//     basketQuantity,
//     isWishlisted,
//     isLoading,
//     addToBasket,
//     removeFromBasket,
//     updateBasketQuantity,
//     toggleWishlist,
//     refreshState: fetchProductState
//   };
// };

// 
// 
import { useState, useCallback, useEffect } from 'react';
import { ProductInteractionService } from '../services/net/ProductInteractionService';
import { NotificationService } from '../services/local/NotificationService';
// import { NotificationService } from '../services/NotificationService';

// Toast notification utility - extends your existing NotificationService
const ToastNotification = {
  toastInstance: null,
  
  // Initialize the toast (call this once when app loads)
  init: () => {
    // Create a global toast container if it doesn't exist
    if (!document.getElementById('liveToast')) {
      const toastContainer = document.createElement('div');
      toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
      
      // Create the toast element using exactly your structure
      toastContainer.innerHTML = `
        <div class="toast border-primary" id="liveToast" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <i class="ci-bell text-primary fs-base mt-1 me-2"></i>
            <strong class="me-auto" id="toast-title">Toast title</strong>
            <small class="text-body-secondary" id="toast-time">Just now</small>
            <button type="button" class="btn-close ms-2" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body" id="toast-message">
            Hello, world! This is a toast message.
          </div>
        </div>
      `;
      
      document.body.appendChild(toastContainer);
    }
    
    // Initialize the Bootstrap toast
    const toastEl = document.getElementById('liveToast');
    if (toastEl && window.bootstrap) {
      ToastNotification.toastInstance = new window.bootstrap.Toast(toastEl, {
        autohide: true,
        delay: 5000
      });
    } else {
      console.error('Bootstrap toast initialization failed. Make sure Bootstrap JS is loaded.');
    }
    
    // Subscribe to notification service to show toasts
    NotificationService.subscribe(message => {
      if (message && message.show && message.message) {
        ToastNotification.showToast(message.message, message.type);
      }
    });
  },
  
  // Show a toast notification
  showToast: (message, type = 'primary', title = 'Notification') => {
    // Initialize if not already initialized
    if (!ToastNotification.toastInstance) {
      ToastNotification.init();
    }
    
    const toastEl = document.getElementById('liveToast');
    if (!toastEl) {
      console.error('Toast element not found');
      return;
    }
    
    // Update toast content
    const titleEl = document.getElementById('toast-title');
    const messageEl = document.getElementById('toast-message');
    const timeEl = document.getElementById('toast-time');
    
    if (titleEl) titleEl.textContent = title;
    if (messageEl) messageEl.textContent = message;
    if (timeEl) timeEl.textContent = 'Just now';
    
    // Update toast styling based on type
    toastEl.className = `toast border-${type}`;
    const iconEl = toastEl.querySelector('.toast-header i');
    if (iconEl) {
      iconEl.className = `ci-bell text-${type} fs-base mt-1 me-2`;
    }
    
    // Show the toast
    if (ToastNotification.toastInstance) {
      ToastNotification.toastInstance.show();
    } else {
      console.error('Toast instance not available');
    }
  }
};

// Initialize toast service when this module loads
if (typeof window !== 'undefined') {
  // Only run in browser environment, not during SSR
  window.addEventListener('DOMContentLoaded', () => {
    ToastNotification.init();
  });
}

// Enhanced product interactions hook with toast notifications
export const useProductInteractions = (productId, isAuthenticated, productName = 'Product') => {
  const [inBasket, setInBasket] = useState(false);
  const [basketQuantity, setBasketQuantity] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  // Initial data fetch
  const fetchProductState = useCallback(async () => {
    if (!isAuthenticated || !productId) return;
    
    try {
      // Get basket data
      const basketResponse = await ProductInteractionService.basket.get();
      if (basketResponse?.data?.products) {
        const basketItem = basketResponse.data.products.find(item => item.product_id === productId);
        setInBasket(!!basketItem);
        setBasketQuantity(basketItem ? basketItem.quantity : 0);
      }
      
      // Get wishlist data
      const wishlistResponse = await ProductInteractionService.favorites.list();
      if (wishlistResponse?.data?.products) {
        const wishlisted = wishlistResponse.data.products.some(item => item.product_id === productId);
        setIsWishlisted(wishlisted);
      }
    } catch (error) {
      console.error('Error fetching product state:', error);
    }
  }, [isAuthenticated, productId]);
  
  // Add to basket - directly call API with toast notification
  const addToBasket = useCallback(async (quantity = 1) => {
    if (!isAuthenticated || !productId) return;
    
    setIsLoading(true);
    NotificationService.setIsLoading(true);
    
    try {
      await ProductInteractionService.basket.add(productId, quantity);
      // Update local state
      setInBasket(true);
      setBasketQuantity(prev => prev + quantity);
      
      // Show success notification
      NotificationService.showDialog(
        `${productName} has been added to your basket.`,
        'success'
      );
    } catch (error) {
      console.error('Error adding product to basket:', error);
      // Only fetch full state when there's an error
      await fetchProductState();
      
      // Show error notification
      NotificationService.showDialog(
        'Could not add item to your basket. Please try again.',
        'danger'
      );
    } finally {
      setIsLoading(false);
      NotificationService.setIsLoading(false);
    }
  }, [isAuthenticated, productId, productName, fetchProductState]);
  
  // Remove from basket - directly call API with toast notification
  const removeFromBasket = useCallback(async () => {
    if (!isAuthenticated || !productId) return;
    
    setIsLoading(true);
    NotificationService.setIsLoading(true);
    
    try {
      await ProductInteractionService.basket.remove(productId);
      // Update local state
      setInBasket(false);
      setBasketQuantity(0);
      
      // Show success notification
      NotificationService.showDialog(
        `${productName} has been removed from your basket.`,
        'info'
      );
    } catch (error) {
      console.error('Error removing product from basket:', error);
      // Only fetch full state when there's an error
      await fetchProductState();
      
      // Show error notification
      NotificationService.showDialog(
        'Could not remove item from your basket. Please try again.',
        'danger'
      );
    } finally {
      setIsLoading(false);
      NotificationService.setIsLoading(false);
    }
  }, [isAuthenticated, productId, productName, fetchProductState]);
  
  // Update basket quantity - directly call API with toast notification
  const updateBasketQuantity = useCallback(async (quantity) => {
    if (!isAuthenticated || !productId) return;
    
    setIsLoading(true);
    NotificationService.setIsLoading(true);
    
    try {
      await ProductInteractionService.basket.updateQuantity(productId, quantity);
      // Update local state
      setInBasket(quantity > 0);
      setBasketQuantity(quantity);
      
      // Show success notification
      NotificationService.showDialog(
        quantity > 0 
          ? `${productName} quantity updated to ${quantity}.`
          : `${productName} has been removed from your basket.`,
        'info'
      );
    } catch (error) {
      console.error('Error updating basket quantity:', error);
      // Only fetch full state when there's an error
      await fetchProductState();
      
      // Show error notification
      NotificationService.showDialog(
        'Could not update your basket. Please try again.',
        'danger'
      );
    } finally {
      setIsLoading(false);
      NotificationService.setIsLoading(false);
    }
  }, [isAuthenticated, productId, productName, fetchProductState]);
  
  // Toggle wishlist - directly call API with toast notification
  const toggleFavorites = useCallback(async () => {
    if (!isAuthenticated || !productId) return;
    
    setIsLoading(true);
    NotificationService.setIsLoading(true);
    const wasWishlisted = isWishlisted;
    
    try {
      if (wasWishlisted) {
        await ProductInteractionService.favorites.remove(productId);
        setIsWishlisted(false);
        
        // Show success notification
        NotificationService.showDialog(
          `${productName} has been removed from your wishlist.`,
          'info'
        );
      } else {
        await ProductInteractionService.favorites.add(productId);
        setIsWishlisted(true);
        
        // Show success notification
        NotificationService.showDialog(
          `${productName} has been added to your wishlist.`,
          'success'
        );
      }
    } catch (error) {
      console.error('Error toggling wishlist status:', error);
      // Only fetch full state when there's an error
      await fetchProductState();
      
      // Show error notification
      NotificationService.showDialog(
        `Could not ${wasWishlisted ? 'remove from' : 'add to'} wishlist. Please try again.`,
        'danger'
      );
    } finally {
      setIsLoading(false);
      NotificationService.setIsLoading(false);
    }
  }, [isAuthenticated, productId, productName, isWishlisted, fetchProductState]);
  
  // Initial fetch on mount and when auth status changes
  useEffect(() => {
    if (isAuthenticated && productId) {
      fetchProductState();
    } else {
      // Reset states when not authenticated
      setInBasket(false);
      setBasketQuantity(0);
      setIsWishlisted(false);
    }
  }, [isAuthenticated, productId, fetchProductState]);
  
  return {
    inBasket,
    basketQuantity,
    isWishlisted,
    isLoading,
    addToBasket,
    removeFromBasket,
    updateBasketQuantity,
    toggleFavorites,
    refreshState: fetchProductState
  };
};

export default useProductInteractions;