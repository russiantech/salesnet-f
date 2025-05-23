import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
// // src/components/product/BasketButton.tsx
// import { useState } from 'react';
// import { LoadingZoom } from '../../../components/shared/LoadingSpinner';
// import { useAuth } from '../../../context/AuthContext';
// import { NotificationService } from '../../../services/local/NotificationService';
// import { ProductInteractionService } from '../../../services/net/ProductAxiosService';
// interface BasketButtonProps {
//   productId: string;
//   productName: string;
//   initialQuantity?: number;
//   className?: string;
// }
// export const BasketButton = ({ 
//   productId, 
//   productName, 
//   initialQuantity = 0,
//   className = '' 
// }: BasketButtonProps) => {
//   const [quantity, setQuantity] = useState(initialQuantity);
//   const [isLoading, setIsLoading] = useState(false);
//   const { isAuthenticated, showLoginModal } = useAuth();
//   /**
//    * Handles adding/updating product in basket
//    * @param {number} newQuantity - The quantity to set (defaults to current + 1)
//    */
//   const handleBasketAction = async (newQuantity = quantity + 1) => {
//     if (!isAuthenticated) {
//       showLoginModal();
//       return;
//     }
//     setIsLoading(true);
//     NotificationService.setIsLoading(true);
//     try {
//       const response = await ProductInteractionService.basket.add(productId, newQuantity);
//       if (response.success) {
//         setQuantity(newQuantity);
//         NotificationService.showDialog(
//           response.message || `${productName} has been added to your basket.`,
//           'success'
//         );
//       } else {
//         // Handle API success=false scenario
//         NotificationService.showDialog(
//           response.error || 'Could not update your basket.',
//           'warning'
//         );
//       }
//     } catch (error) {
//       console.error('Basket operation failed:', error);
//       NotificationService.showDialog(
//         error.response?.data?.message || error.response?.data?.error || 
//         'Could not update your basket. Please try again.',
//         'danger'
//       );
//       // Refresh basket state on error
//       try {
//         const basketState = await ProductInteractionService.basket.get();
//         const item = basketState.data.items.find(i => i.product_id === productId);
//         setQuantity(item?.quantity || 0);
//       } catch (refreshError) {
//         console.error('Failed to refresh basket state:', refreshError);
//       }
//     } finally {
//       setIsLoading(false);
//       NotificationService.setIsLoading(false);
//     }
//   };
//   /**
//    * Handles removing product from basket
//    */
//   const handleRemoveFromBasket = async () => {
//     if (!isAuthenticated || !productId) return;
//     setIsLoading(true);
//     NotificationService.setIsLoading(true);
//     try {
//       const response = await ProductInteractionService.basket.remove(productId);
//       if (response.success) {
//         setQuantity(0);
//         NotificationService.showDialog(
//           response.message || `${productName} has been removed from your basket.`,
//           'success'
//         );
//       }
//     } catch (error) {
//       console.error('Remove from basket failed:', error);
//       NotificationService.showDialog(
//         error.response?.data?.message || 
//         'Could not remove item from basket. Please try again.',
//         'danger'
//       );
//     } finally {
//       setIsLoading(false);
//       NotificationService.setIsLoading(false);
//     }
//   };
//   return (
//     <div className={`basket-controls ${className}`}>
//       {quantity > 0 ? (
//         <div className="quantity-selector">
//           <button 
//             className="btn btn-sm btn-outline-secondary"
//             onClick={() => handleBasketAction(quantity - 1)}
//             disabled={isLoading || quantity <= 1}
//             aria-label="Reduce quantity"
//           >
//             −
//           </button>
//           <span className="px-2">{quantity}</span>
//           <button 
//             className="btn btn-sm btn-outline-secondary"
//             onClick={() => handleBasketAction(quantity + 1)}
//             disabled={isLoading}
//             aria-label="Increase quantity"
//           >
//             +
//           </button>
//           <button 
//             className="btn btn-sm btn-danger ms-2"
//             onClick={handleRemoveFromBasket}
//             disabled={isLoading}
//             aria-label="Remove from basket"
//           >
//             Remove
//           </button>
//         </div>
//       ) : (
//         <button
//           className="btn btn-primary"
//           onClick={() => handleBasketAction()}
//           disabled={isLoading}
//           aria-label="Add to basket"
//         >
//           {isLoading ? (
//             <LoadingZoom />
//           ) : (
//             <>
//               <i className="ci-shopping-cart me-2" />
//               Add to Basket
//             </>
//           )}
//         </button>
//       )}
//     </div>
//   );
// };
// 
// src/components/product/BasketButton.tsx
import { useState, useEffect } from 'react';
import { LoadingZoom } from '../../../components/shared/LoadingSpinner';
import { NotificationService } from '../../../services/local/NotificationService';
import { UsersService } from '../../../services/local/UsersService';
import { ProductInteractionService } from '../../../services/net/ProductAxiosService';
export const BasketButto2n = ({ productId, productName, initialQuantity = 0, className = '' }) => {
    const [quantity, setQuantity] = useState(initialQuantity);
    const [isLoading, setIsLoading] = useState(false);
    // Sync with actual basket state on mount
    useEffect(() => {
        if (UsersService.isAuthenticated()) {
            fetchBasketState();
        }
    }, [productId]);
    const fetchBasketState = async () => {
        try {
            const response = await ProductInteractionService.basket.get();
            const item = response.data.items.find(i => i.product_id === productId);
            setQuantity(item?.quantity || 0);
        }
        catch (error) {
            console.error('Failed to fetch basket state:', error);
        }
    };
    const handleBasketAction = async (newQuantity = quantity + 1) => {
        if (!UsersService.isAuthenticated()) {
            NotificationService.showDialog(`Signin to continue, kindly...`, 'danger');
            // Trigger sign-in canvas
            const signinCanvas = document.getElementById('quickSigninCanvas');
            if (signinCanvas) {
                const offcanvas = new bootstrap.Offcanvas(signinCanvas);
                offcanvas.show();
            }
            return;
        }
        setIsLoading(true);
        NotificationService.setIsLoading(true);
        try {
            const response = await ProductInteractionService.basket.add(productId, newQuantity);
            if (response.success) {
                setQuantity(newQuantity);
                NotificationService.showDialog(response.message || `${productName} has been added to your basket.`, 'success');
            }
        }
        catch (error) {
            console.error('Basket operation failed:', error);
            NotificationService.showDialog(error.response?.data?.message ||
                'Could not update your basket. Please try again.', 'danger');
            await fetchBasketState();
        }
        finally {
            setIsLoading(false);
            NotificationService.setIsLoading(false);
        }
    };
    return (_jsx("button", { type: "button", className: `btn btn-icon btn-secondary animate-slide-end ${className}`, "aria-label": quantity > 0 ? "Update basket" : "Add to basket", onClick: () => handleBasketAction(), disabled: isLoading, "data-bs-toggle": !UsersService.isAuthenticated() ? "offcanvas" : undefined, "data-bs-target": !UsersService.isAuthenticated() ? "#quickSigninCanvas" : undefined, "aria-controls": !UsersService.isAuthenticated() ? "quickSigninCanvas" : undefined, children: isLoading ? (_jsx(LoadingZoom, {})) : (_jsxs(_Fragment, { children: [_jsx("i", { className: "ci-shopping-cart fs-base animate-target" }), quantity > 0 && _jsx("span", { className: "ms-1", children: quantity })] })) }));
};
// 
// src/components/product/BasketButton.tsx
export const BasketButton2 = ({ productId, productName }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [quantity, setQuantity] = useState(0);
    const handleBasketAction = async () => {
        alert(UsersService.isAuthenticated());
        // Trigger sign-in canvas
        if (!UsersService.isAuthenticated()) {
            NotificationService.showDialog(`Signin to continue, kindly...`, 'danger');
            showSigninCanvas();
            return;
        }
        setIsLoading(true);
        try {
            const response = await ProductInteractionService.basket.add(productId, 1);
            if (response.success) {
                setQuantity(prev => prev + 1);
            }
        }
        finally {
            setIsLoading(false);
        }
    };
    const showSigninCanvas = () => {
        const canvasElement = document.getElementById('quickSigninCanvas');
        if (canvasElement) {
            // First remove any existing backdrops
            const existingBackdrops = document.querySelectorAll('.offcanvas-backdrop');
            existingBackdrops.forEach(backdrop => backdrop.remove());
            // Then show new canvas
            const offcanvas = new bootstrap.Offcanvas(canvasElement);
            offcanvas.show();
        }
    };
    return (_jsx(_Fragment, { children: _jsx("button", { type: "button", className: "product-card-button btn btn-icon btn-secondary animate-slide-end ms-2", "aria-label": "Add to Basket", onClick: handleBasketAction, disabled: isLoading, "data-bs-toggle": "offcanvas", "data-bs-target": "#quickSigninCanvas", "aria-controls": "quickSigninCanvas", children: isLoading ? (_jsx(LoadingZoom, {})) : (_jsx("i", { className: "ci-shopping-cart fs-base animate-target" })) }) }));
};
export const BasketButton = ({ productId, productName, className = '' }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    // Check auth status on mount and subscribe to changes
    useEffect(() => {
        const checkAuth = () => {
            setIsAuthenticated(UsersService.isAuthenticated());
        };
        checkAuth();
        UsersService.subscribe(checkAuth);
        return () => UsersService.unsubscribe(checkAuth);
    }, []);
    const handleBasketAction = async (e) => {
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
            //   console.log('basket response:', response);
            if (response?.data?.success) {
                NotificationService.showDialog(response.data.message || `${productName} added to basket`, 'success');
            }
            else {
                NotificationService.showDialog(response.error || `${productName} not added to basket`, 'warning');
            }
        }
        catch (error) {
            NotificationService.showDialog(error.response?.data?.message || 'Failed to add to basket', 'danger');
        }
        finally {
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
            const offcanvas = new bootstrap.Offcanvas(canvasElement);
            offcanvas.show();
        }
    };
    return (_jsx("button", { type: "button", className: `product-card-button btn btn-icon btn-secondary animate-slide-end ms-2 ${className}`, "aria-label": "Add to Basket", onClick: handleBasketAction, disabled: isLoading, "data-bs-toggle": !isAuthenticated ? "offcanvas" : undefined, "data-bs-target": !isAuthenticated ? "#quickSigninCanvas" : undefined, "aria-controls": !isAuthenticated ? "quickSigninCanvas" : undefined, children: isLoading ? (_jsx(LoadingZoom, {})) : (_jsx("i", { className: "ci-shopping-cart fs-base animate-target" })) }));
};
