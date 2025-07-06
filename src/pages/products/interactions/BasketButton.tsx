
// // src/components/product/BasketButton.tsx
// import { useState, useEffect } from 'react';
// import { LoadingZoom } from '../../../components/shared/LoadingSpinner';
// import { NotificationService } from '../../../services/local/NotificationService';
// import { UsersService } from '../../../services/local/UsersService';
// import { ProductInteractionService } from '../../../services/net/ProductAxiosService';

// interface BasketButtonProps {
//   productId: string;
//   productName: string;
//   className?: string;
// }

// export const BasketButton = ({ productId, productName, className = '' }: BasketButtonProps) => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   // Check auth status on mount and subscribe to changes
//   useEffect(() => {
//     const checkAuth = () => {
//       setIsAuthenticated(UsersService.isAuthenticated());
//     };
    
//     checkAuth();
//     UsersService.subscribe(checkAuth);
    
//     return () => UsersService.unsubscribe(checkAuth);
//   }, []);

//   const handleBasketAction = async (e: React.MouseEvent) => {
//     // Prevent default Bootstrap behavior
//     e.preventDefault();
    
//     if (!isAuthenticated) {
//       NotificationService.showDialog('Please sign in to add items to basket', 'info');
//       showSigninCanvas();
//       return;
//     }
    
//     setIsLoading(true);
//     try {
//       const response = await ProductInteractionService.basket.add(productId, 1);
//     //   console.log('basket response:', response);
//       if (response?.data?.success) {
//         NotificationService.showDialog(
//           response.data.message || `${productName} added to basket`,
//           'success'
//         );
//       }else{
//         NotificationService.showDialog(
//             response.error || `${productName} not added to basket`,
//             'warning'
//           );
//       }
//     } catch (error) {
//       NotificationService.showDialog(
//         error.response?.data?.message || 'Failed to add to basket',
//         'danger'
//       );
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const showSigninCanvas = () => {
//     const canvasElement = document.getElementById('quickSigninCanvas');
//     if (canvasElement) {
//       // Clean up any existing backdrops
//       const existingBackdrops = document.querySelectorAll('.offcanvas-backdrop');
//       existingBackdrops.forEach(backdrop => backdrop.remove());
      
//       // Show new canvas
//       const offcanvas = new bootstrap.Offcanvas(canvasElement);
//       offcanvas.show();
//     }
//   };

//   return (
//     <button
//       type="button"
//       className={`product-card-button btn btn-icon btn-secondary animate-slide-end ms-2 ${className}`}
//       aria-label="Add to Basket"
//       onClick={handleBasketAction}
//       disabled={isLoading}
//       data-bs-toggle={!isAuthenticated ? "offcanvas" : undefined}
//       data-bs-target={!isAuthenticated ? "#quickSigninCanvas" : undefined}
//       aria-controls={!isAuthenticated ? "quickSigninCanvas" : undefined}
//     >
//       {isLoading ? (
//         <LoadingZoom />
//       ) : (
//         <i className="ci-shopping-cart fs-base animate-target" />
//       )}
//     </button>
//   );
// };

// V2

// src/components/product/BasketButton.tsx
import { useState, useEffect } from 'react';
import { LoadingZoom } from '../../../components/shared/LoadingSpinner';
import { NotificationService } from '../../../services/local/NotificationService';
import { UsersService } from '../../../services/local/UsersService';
import { ProductInteractionService } from '../../../services/net/ProductAxiosService';
import { BasketAxiosService } from '../../../services/net/BasketAxiosService'; // Add this import

interface BasketButtonProps {
  productId: string;
  productName: string;
  className?: string;
}

export const BasketButton = ({ productId, productName, className = '' }: BasketButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check auth status on mount and subscribe to changes
  useEffect(() => {
    const checkAuth = () => {
      setIsAuthenticated(UsersService.isAuthenticated());
    };
        
    checkAuth();
    const unsubscribe = UsersService.subscribe(checkAuth);
        
    return () => unsubscribe;
  }, []);

  const handleBasketAction = async (e: React.MouseEvent) => {
    // Prevent default Bootstrap behavior
    e.preventDefault();
        
    if (!isAuthenticated) {
      NotificationService.showDialog('Please sign in to add items to basket', 'info');
      showSigninCanvas();
      return;
    }
        
    setIsLoading(true);
    try {
      const response = await ProductInteractionService.basket.add(productId, 1);
      
      if (response?.data?.success) {
        NotificationService.showDialog(
          response.data.message || `${productName} added to basket`,
          'success'
        );
        
        // 🔥 KEY FIX: Trigger global basket reload after successful add
        await BasketAxiosService.loadBasket();
        
      } else {
        NotificationService.showDialog(
          response.error || `${productName} not added to basket`,
          'warning'
        );
      }
    } catch (error: any) {
      console.error('Basket add error:', error);
      NotificationService.showDialog(
        error.response?.data?.message || 'Failed to add to basket',
        'danger'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const showSigninCanvas = () => {
    const canvasElement = document.getElementById('quickSigninCanvas');
    if (canvasElement) {
      // Clean up any existing backdrops
      const existingBackdrops = document.querySelectorAll('.offcanvas-backdrop');
      existingBackdrops.forEach(backdrop => backdrop.remove());
            
      // Show new canvas
      const offcanvas = new (window as any).bootstrap.Offcanvas(canvasElement);
      offcanvas.show();
    }
  };

  return (
    <button
      type="button"
      className={`product-card-button btn btn-icon btn-secondary animate-slide-end ms-2 ${className}`}
      aria-label="Add to Basket"
      onClick={handleBasketAction}
      disabled={isLoading}
      data-bs-toggle={!isAuthenticated ? "offcanvas" : undefined}
      data-bs-target={!isAuthenticated ? "#quickSigninCanvas" : undefined}
      aria-controls={!isAuthenticated ? "quickSigninCanvas" : undefined}
    >
      {isLoading ? (
        <LoadingZoom />
      ) : (
        <i className="ci-shopping-cart fs-base animate-target" />
      )}
    </button>
  );
};