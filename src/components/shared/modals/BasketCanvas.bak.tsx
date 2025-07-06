// import { NavLink, Link } from "react-router-dom";

// const BasketCanvas = () => {
//   return (
//     <>
//       {/* Empty Basket Offcanvas */}
//       <div className="offcanvas offcanvas-end pb-sm-2 px-sm-2 d-none"
//         id="shoppingCart_01"
//         tabIndex={-1}
//         aria-labelledby="shoppingCartLabel"
//         style={{ width: '500px' }}
//         aria-modal="true"
//         role="dialog"
//       >
//         <div className="offcanvas-header py-3 pt-lg-4">
//           <h4 className="offcanvas-title" id="shoppingCartLabel">
//             Shopping Basket
//           </h4>
//           <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//         </div>
//         <div className="offcanvas-body text-center">
//           <svg
//             className="d-block mx-auto mb-4"
//             xmlns="http://www.w3.org/2000/svg"
//             width="60"
//             viewBox="0 0 29.5 30"
//           >
//             {/* SVG path */}
//           </svg>
//           <h6 className="mb-2">Your shopping basket is currently empty!</h6>
//           <p className="fs-sm mb-4">Add item(s) to the cart to proceed with your purchase.</p>
//           <button
//             type="button"
//             className="btn btn-dark rounded-pill"
//             data-bs-dismiss="offcanvas"
//             aria-label="Close"
//           >
//             Continue shopping
//           </button>
//         </div>
//       </div>

//       {/* Shopping cart offcanvas */}
//       <div
//         className="offcanvas offcanvas-end pb-sm-2 px-sm-2"
//         id="shoppingCart"
//         tabIndex={-1}
//         aria-labelledby="shoppingCartLabel"
//         style={{ width: '500px' }}
//       >
//         {/* Header */}
//         <div className="offcanvas-header flex-column align-items-start py-3 pt-lg-4">
//           <div className="d-flex align-items-center justify-content-between w-100 mb-3 mb-lg-4">
//             <h4 className="offcanvas-title" id="shoppingCartLabel">
//               Basket
//             </h4>
//             <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//           </div>

//           <div className="alert alert-success text-dark-emphasis fs-sm border-0 rounded-4 mb-0" role="alert">
//               Congratulations 🎉 You have added more than <span className="fw-semibold">$50</span> to your cart. 
//               <span className="fw-semibold">Delivery is free</span> for you!
//           </div>

//           <p className="fs-sm">
//             Buy <span className="text-dark-emphasis fw-semibold">$183</span> more to get{' '}
//             <span className="text-dark-emphasis fw-semibold">Free Shipping</span>
//           </p>
//           <div
//             className="progress w-100"
//             role="progressbar"
//             aria-label="Free shipping progress"
//             aria-valuenow="75"
//             aria-valuemin="0"
//             aria-valuemax="100"
//             style={{ height: '4px' }}
//           >
//             <div className="progress-bar bg-warning rounded-pill" style={{ width: '75%' }}></div>
//           </div>
//         </div>
//         {/* Items */}
//         <div className="offcanvas-body d-flex flex-column gap-4 pt-2">
//           {/* Item */}
//           <div className="d-flex align-items-center">
//             <a className="flex-shrink-0" href="/products/techa-products-slug">
//               <img src="/assets/img/shop/electronics/thumbs/08.png" width="110" alt="iPhone 14" />
//             </a>
//             <div className="w-100 min-w-0 ps-2 ps-sm-3">
//               <h5 className="d-flex animate-underline mb-2">
//                 <a
//                   className="d-block fs-sm fw-medium text-truncate animate-target"
//                   href="/products/techa-products-slug"
//                 >
//                   Apple iPhone 14 128GB White
//                 </a>
//               </h5>
//               <div className="h6 pb-1 mb-2">$899.00</div>
//               <div className="d-flex align-items-center justify-content-between">
//                 <div className="count-input rounded-2">
//                   <button
//                     type="button"
//                     className="btn btn-icon btn-sm"
//                     data-decrement=""
//                     aria-label="Decrement quantity"
//                   >
//                     <i className="ci-minus"></i>
//                   </button>
//                   <input
//                     type="number"
//                     className="form-control form-control-sm"
//                     value="1"
//                     readOnly
//                   />
//                   <button
//                     type="button"
//                     className="btn btn-icon btn-sm"
//                     data-increment=""
//                     aria-label="Increment quantity"
//                   >
//                     <i className="ci-plus"></i>
//                   </button>
//                 </div>
//                 <button
//                   type="button"
//                   className="btn-close fs-sm"
//                   data-bs-toggle="tooltip"
//                   data-bs-custom-class="tooltip-sm"
//                   data-bs-title="Remove"
//                   aria-label="Remove from cart"
//                 ></button>
//               </div>
//             </div>
//           </div>
//           {/* Item */}
//           <div className="d-flex align-items-center">
//             <a className="flex-shrink-0" href="/products/techa-products-slug">
//               <img src="/assets/img/shop/electronics/thumbs/08.png" width="110" alt="iPhone 14" />
//             </a>
//             <div className="w-100 min-w-0 ps-2 ps-sm-3">
//               <h5 className="d-flex animate-underline mb-2">
//                 <a
//                   className="d-block fs-sm fw-medium text-truncate animate-target"
//                   href="/products/techa-products-slug"
//                 >
//                   Apple iPhone 14 128GB White
//                 </a>
//               </h5>
//               <div className="h6 pb-1 mb-2">$899.00</div>
//               <div className="d-flex align-items-center justify-content-between">
//                 <div className="count-input rounded-2">
//                   <button
//                     type="button"
//                     className="btn btn-icon btn-sm"
//                     data-decrement=""
//                     aria-label="Decrement quantity"
//                   >
//                     <i className="ci-minus"></i>
//                   </button>
//                   <input
//                     type="number"
//                     className="form-control form-control-sm"
//                     value="1"
//                     readOnly
//                   />
//                   <button
//                     type="button"
//                     className="btn btn-icon btn-sm"
//                     data-increment=""
//                     aria-label="Increment quantity"
//                   >
//                     <i className="ci-plus"></i>
//                   </button>
//                 </div>
//                 <button
//                   type="button"
//                   className="btn-close fs-sm"
//                   data-bs-toggle="tooltip"
//                   data-bs-custom-class="tooltip-sm"
//                   data-bs-title="Remove"
//                   aria-label="Remove from cart"
//                 ></button>
//               </div>
//             </div>
//           </div>
//           {/* Additional items */}
//         </div>
//         {/* Footer */}
//         <div className="offcanvas-header flex-column align-items-start">
//           <div className="d-flex align-items-center justify-content-between w-100 mb-3 mb-md-4">
//             <span className="text-light-emphasis">Subtotal:</span>
//             <span className="h6 mb-0">$2,317.00</span>
//           </div>
//           <div className="d-flex w-100 gap-3">
//             <NavLink className="btn btn-lg btn-secondary w-100" to='/user/basket'>
//               View cart
//             </NavLink>
//             <Link className="btn btn-lg btn-primary w-100" to="/user/checkout">
//               Checkout
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default BasketCanvas

// 
// VERSION 03

// import React, { useState, useEffect } from "react";
// import { NavLink, Link } from "react-router-dom";
// import { NotificationService } from "../../../services/local/NotificationService";
// import { UsersService } from "../../../services/local/UsersService";
// import { BasketAxiosService } from "../../../services/net/BasketAxiosService";
// // import { UsersService } from "../services/UsersService";
// // import { BasketAxiosService } from "../services/BasketAxiosService";
// // import { NotificationService } from "../services/NotificationService";

// interface BasketItem {
//   id: string;
//   product_id: string;
//   name: string;
//   price: number;
//   quantity: number;
//   image_url: string;
//   slug: string;
// }

// interface BasketState {
//   items: BasketItem[];
//   subtotal: number;
//   isLoading: boolean;
//   freeShippingThreshold: number;
//   freeShippingProgress: number;
// }

// const BasketCanvas: React.FC = () => {
//   const [basketState, setBasketState] = useState<BasketState>({
//     items: [],
//     subtotal: 0,
//     isLoading: true,
//     freeShippingThreshold: 50,
//     freeShippingProgress: 0
//   });

//   const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

//   useEffect(() => {
//     // Subscribe to user authentication changes
//     const handleUserChange = () => {
//       setIsAuthenticated(UsersService.isAuthenticated());
//       loadBasket();
//     };

//     UsersService.subscribe(handleUserChange);
//     handleUserChange(); // Initial load

//     return () => {
//       UsersService.unsubscribe(handleUserChange);
//     };
//   }, []);

//   const loadBasket = async (): Promise<void> => {
//     try {
//       setBasketState(prev => ({ ...prev, isLoading: true }));
      
//       const basketData = await BasketAxiosService.getBasket();
//       const subtotal = calculateSubtotal(basketData.items);
//       const progress = Math.min((subtotal / basketState.freeShippingThreshold) * 100, 100);

//       setBasketState(prev => ({
//         ...prev,
//         items: basketData.items,
//         subtotal,
//         freeShippingProgress: progress,
//         isLoading: false
//       }));
//     } catch (error) {
//       console.error('Failed to load basket:', error);
//       NotificationService.showDialog('Failed to load basket items', 'error');
//       setBasketState(prev => ({ ...prev, isLoading: false }));
//     }
//   };

//   const calculateSubtotal = (items: BasketItem[]): number => {
//     return items.reduce((total, item) => total + (item.price * item.quantity), 0);
//   };

//   const updateQuantity = async (itemId: string, newQuantity: number): Promise<void> => {
//     if (newQuantity <= 0) {
//       await removeItem(itemId);
//       return;
//     }

//     try {
//       await BasketAxiosService.updateQuantity(itemId, newQuantity);
//       await loadBasket(); // Refresh basket
//       NotificationService.showDialog('Quantity updated successfully', 'success');
//     } catch (error) {
//       console.error('Failed to update quantity:', error);
//       NotificationService.showDialog('Failed to update quantity', 'error');
//     }
//   };

//   const removeItem = async (itemId: string): Promise<void> => {
//     try {
//       await BasketAxiosService.removeItem(itemId);
//       await loadBasket(); // Refresh basket
//       NotificationService.showDialog('Item removed from basket', 'success');
//     } catch (error) {
//       console.error('Failed to remove item:', error);
//       NotificationService.showDialog('Failed to remove item', 'error');
//     }
//   };

//   const clearBasket = async (): Promise<void> => {
//     try {
//       await BasketAxiosService.clearBasket();
//       await loadBasket(); // Refresh basket
//       NotificationService.showDialog('Basket cleared successfully', 'success');
//     } catch (error) {
//       console.error('Failed to clear basket:', error);
//       NotificationService.showDialog('Failed to clear basket', 'error');
//     }
//   };

//   const formatPrice = (price: number): string => {
//     return new Intl.NumberFormat('en-US', {
//       style: 'currency',
//       currency: 'USD'
//     }).format(price);
//   };

//   const getRemainingForFreeShipping = (): number => {
//     return Math.max(basketState.freeShippingThreshold - basketState.subtotal, 0);
//   };

//   const isFreeShippingEligible = (): boolean => {
//     return basketState.subtotal >= basketState.freeShippingThreshold;
//   };

//   if (basketState.isLoading) {
//     return (
//       <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
//         <div className="spinner-border" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </div>
//       </div>
//     );
//   }

//   // Empty basket state
//   if (basketState.items.length === 0) {
//     return (
//       <div className="offcanvas offcanvas-end pb-sm-2 px-sm-2"
//         id="shoppingCart"
//         tabIndex={-1}
//         aria-labelledby="shoppingCartLabel"
//         style={{ width: '500px' }}
//         aria-modal="true"
//         role="dialog"
//       >
//         <div className="offcanvas-header py-3 pt-lg-4">
//           <h4 className="offcanvas-title" id="shoppingCartLabel">
//             Shopping Basket
//           </h4>
//           <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//         </div>
//         <div className="offcanvas-body text-center">
//           <svg
//             className="d-block mx-auto mb-4"
//             xmlns="http://www.w3.org/2000/svg"
//             width="60"
//             viewBox="0 0 29.5 30"
//           >
//             <path d="M29.5,26.84A3.16,3.16,0,0,1,26.34,30H3.16A3.16,3.16,0,0,1,0,26.84V9.23a3.16,3.16,0,0,1,3.16-3.16H7.4V3.16A3.16,3.16,0,0,1,10.56,0h8.38A3.16,3.16,0,0,1,22.1,3.16V6.07h4.24A3.16,3.16,0,0,1,29.5,9.23ZM10.56,3.16V6.07h8.38V3.16ZM26.34,9.23H3.16V26.84H26.34Z"/>
//           </svg>
//           <h6 className="mb-2">Your shopping basket is currently empty!</h6>
//           <p className="fs-sm mb-4">
//             {isAuthenticated 
//               ? "Add items to your basket to proceed with your purchase."
//               : "Sign in to sync your basket across devices, or continue shopping as a guest."
//             }
//           </p>
//           <button
//             type="button"
//             className="btn btn-dark rounded-pill"
//             data-bs-dismiss="offcanvas"
//             aria-label="Close"
//           >
//             Continue shopping
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // Basket with items
//   return (
//     <div
//       className="offcanvas offcanvas-end pb-sm-2 px-sm-2"
//       id="shoppingCart"
//       tabIndex={-1}
//       aria-labelledby="shoppingCartLabel"
//       style={{ width: '500px' }}
//     >
//       {/* Header */}
//       <div className="offcanvas-header flex-column align-items-start py-3 pt-lg-4">
//         <div className="d-flex align-items-center justify-content-between w-100 mb-3 mb-lg-4">
//           <h4 className="offcanvas-title" id="shoppingCartLabel">
//             Basket ({basketState.items.length} {basketState.items.length === 1 ? 'item' : 'items'})
//           </h4>
//           <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//         </div>

//         {/* Free shipping alert */}
//         {isFreeShippingEligible() ? (
//           <div className="alert alert-success text-dark-emphasis fs-sm border-0 rounded-4 mb-3" role="alert">
//             Congratulations 🎉 You qualify for <span className="fw-semibold">free shipping</span>!
//           </div>
//         ) : (
//           <>
//             <p className="fs-sm mb-2">
//               Buy <span className="text-dark-emphasis fw-semibold">{formatPrice(getRemainingForFreeShipping())}</span> more to get{' '}
//               <span className="text-dark-emphasis fw-semibold">Free Shipping</span>
//             </p>
//             <div className="progress w-100 mb-3"
//               role="progressbar"
//               aria-label="Free shipping progress"
//               aria-valuenow={basketState.freeShippingProgress}
//               aria-valuemin="0"
//               aria-valuemax="100"
//               style={{ height: '4px' }}
//             >
//               <div 
//                 className="progress-bar bg-warning rounded-pill" 
//                 style={{ width: `${basketState.freeShippingProgress}%` }}
//               ></div>
//             </div>
//           </>
//         )}

//         {/* Storage indicator for non-authenticated users */}
//         {!isAuthenticated && (
//           <div className="alert alert-info fs-sm border-0 rounded-4 mb-0" role="alert">
//             <i className="ci-info-circle me-2"></i>
//             Items stored locally. <Link to="/login" className="alert-link">Sign in</Link> to save across devices.
//           </div>
//         )}
//       </div>

//       {/* Items */}
//       <div className="offcanvas-body d-flex flex-column gap-4 pt-2">
//         {basketState.items.map((item) => (
//           <div key={item.id} className="d-flex align-items-center">
//             <Link className="flex-shrink-0" to={`/products/${item.slug}`}>
//               <img 
//                 src={item.image_url} 
//                 width="110" 
//                 alt={item.name}
//                 onError={(e) => {
//                   (e.target as HTMLImageElement).src = '/assets/img/shop/placeholder.png';
//                 }}
//               />
//             </Link>
//             <div className="w-100 min-w-0 ps-2 ps-sm-3">
//               <h5 className="d-flex animate-underline mb-2">
//                 <Link
//                   className="d-block fs-sm fw-medium text-truncate animate-target"
//                   to={`/products/${item.slug}`}
//                   title={item.name}
//                 >
//                   {item.name}
//                 </Link>
//               </h5>
//               <div className="h6 pb-1 mb-2">{formatPrice(item.price)}</div>
//               <div className="d-flex align-items-center justify-content-between">
//                 <div className="count-input rounded-2">
//                   <button
//                     type="button"
//                     className="btn btn-icon btn-sm"
//                     onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                     aria-label="Decrease quantity"
//                     disabled={basketState.isLoading}
//                   >
//                     <i className="ci-minus"></i>
//                   </button>
//                   <input
//                     type="number"
//                     className="form-control form-control-sm"
//                     value={item.quantity}
//                     onChange={(e) => {
//                       const newQuantity = parseInt(e.target.value) || 1;
//                       updateQuantity(item.id, newQuantity);
//                     }}
//                     min="1"
//                     max="99"
//                   />
//                   <button
//                     type="button"
//                     className="btn btn-icon btn-sm"
//                     onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                     aria-label="Increase quantity"
//                     disabled={basketState.isLoading}
//                   >
//                     <i className="ci-plus"></i>
//                   </button>
//                 </div>
//                 <button
//                   type="button"
//                   className="btn-close fs-sm"
//                   onClick={() => removeItem(item.id)}
//                   data-bs-toggle="tooltip"
//                   data-bs-custom-class="tooltip-sm"
//                   data-bs-title="Remove"
//                   aria-label="Remove from cart"
//                   disabled={basketState.isLoading}
//                 ></button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Footer */}
//       <div className="offcanvas-header flex-column align-items-start">
//         <div className="d-flex align-items-center justify-content-between w-100 mb-2">
//           <span className="text-light-emphasis">Subtotal:</span>
//           <span className="h6 mb-0">{formatPrice(basketState.subtotal)}</span>
//         </div>
        
//         {isFreeShippingEligible() && (
//           <div className="d-flex align-items-center justify-content-between w-100 mb-3">
//             <span className="text-success fs-sm">Shipping:</span>
//             <span className="text-success fs-sm fw-semibold">Free</span>
//           </div>
//         )}

//         <div className="d-flex w-100 gap-3 mb-3">
//           <NavLink 
//             className="btn btn-lg btn-secondary w-100" 
//             to="/user/basket"
//             data-bs-dismiss="offcanvas"
//           >
//             View cart
//           </NavLink>
//           <Link 
//             className="btn btn-lg btn-primary w-100" 
//             to={isAuthenticated ? "/user/checkout" : "/login?redirect=checkout"}
//             data-bs-dismiss="offcanvas"
//           >
//             Checkout
//           </Link>
//         </div>

//         <button
//           type="button"
//           className="btn btn-outline-danger btn-sm w-100"
//           onClick={clearBasket}
//           disabled={basketState.isLoading}
//         >
//           Clear Basket
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BasketCanvas;

// VERSION 04

import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { BasketAxiosService } from "../../../services/BasketAxiosService";
import { UsersService } from "../../../services/local/UsersService";

interface BasketItem {
  id: string;
  product_id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  total: number;
}

interface BasketState {
  items: BasketItem[];
  subtotal: number;
  itemCount: number;
  freeShippingThreshold: number;
  isLoading: boolean;
}

const BasketCanvas: React.FC = () => {
  const [basketState, setBasketState] = useState<BasketState>({
    items: [],
    subtotal: 0,
    itemCount: 0,
    freeShippingThreshold: 50,
    isLoading: true
  });

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    // Check authentication status
    setIsAuthenticated(UsersService.isAuthenticated());
    
    // Load basket data
    loadBasketData();

    // Subscribe to basket updates
    const unsubscribe = BasketAxiosService.subscribe((basketData) => {
      setBasketState(prev => ({
        ...prev,
        items: basketData.items || [],
        subtotal: basketData.subtotal || 0,
        itemCount: basketData.itemCount || 0,
        isLoading: false
      }));
    });

    return () => unsubscribe();
  }, []);

  const loadBasketData = async () => {
    try {
      setBasketState(prev => ({ ...prev, isLoading: true }));
      await BasketAxiosService.loadBasket();
    } catch (error) {
      console.error('Failed to load basket:', error);
      setBasketState(prev => ({ ...prev, isLoading: false }));
    }
  };

  const handleQuantityChange = async (itemId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    try {
      await BasketAxiosService.updateQuantity(itemId, newQuantity);
    } catch (error) {
      console.error('Failed to update quantity:', error);
    }
  };

  const handleRemoveItem = async (itemId: string) => {
    try {
      await BasketAxiosService.removeItem(itemId);
    } catch (error) {
      console.error('Failed to remove item:', error);
    }
  };

  const remainingForFreeShipping = Math.max(0, basketState.freeShippingThreshold - basketState.subtotal);
  const freeShippingProgress = Math.min(100, (basketState.subtotal / basketState.freeShippingThreshold) * 100);
  const qualifiesForFreeShipping = basketState.subtotal >= basketState.freeShippingThreshold;

  const renderEmptyBasket = () => (
    <div className="offcanvas offcanvas-end pb-sm-2 px-sm-2"
      id="shoppingCart"
      tabIndex={-1}
      aria-labelledby="shoppingCartLabel"
      style={{ width: '500px' }}
      aria-modal="true"
      role="dialog"
    >
      <div className="offcanvas-header py-3 pt-lg-4">
        <h4 className="offcanvas-title" id="shoppingCartLabel">
          Shopping Basket
        </h4>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body text-center">
        <svg
          className="d-block mx-auto mb-4"
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          viewBox="0 0 29.5 30"
        >
          <path d="M8.893 26.563c-1.351 0-2.446-1.095-2.446-2.446s1.095-2.446 2.446-2.446 2.446 1.095 2.446 2.446-1.095 2.446-2.446 2.446zm0-3.893c-.798 0-1.446.648-1.446 1.446s.648 1.446 1.446 1.446 1.446-.648 1.446-1.446-.648-1.446-1.446-1.446z"/>
          <path d="M24.107 26.563c-1.351 0-2.446-1.095-2.446-2.446s1.095-2.446 2.446-2.446 2.446 1.095 2.446 2.446-1.095 2.446-2.446 2.446zm0-3.893c-.798 0-1.446.648-1.446 1.446s.648 1.446 1.446 1.446 1.446-.648 1.446-1.446-.648-1.446-1.446-1.446z"/>
          <path d="M28.5 7.813H6.25L5.156 3.125H1.25c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h4.531c.239 0 .448.169.493.402L7.281 7.313H28.5c.276 0 .5.224.5.5s-.224.5-.5.5z"/>
          <path d="M26.25 19.688H8.125c-.233 0-.441-.162-.488-.388L6.094 9.375h-.938c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1.563c.233 0 .441.162.488.388l1.544 9.925H26.25c.276 0 .5.224.5.5s-.224.5-.5.5z"/>
        </svg>
        <h6 className="mb-2">Your shopping basket is currently empty!</h6>
        <p className="fs-sm mb-4">Add item(s) to the cart to proceed with your purchase.</p>
        <button
          type="button"
          className="btn btn-dark rounded-pill"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          Continue shopping
        </button>
      </div>
    </div>
  );

  const renderBasketItem = (item: BasketItem) => (
    <div key={item.id} className="d-flex align-items-center">
      <Link className="flex-shrink-0" to={`/products/${item.slug}`}>
        <img 
          src={item.image || "/assets/img/place-holder.png"} 
          width="110" 
          alt={item.name}
          loading="lazy"
        />
      </Link>
      <div className="w-100 min-w-0 ps-2 ps-sm-3">
        <h5 className="d-flex animate-underline mb-2">
          <Link
            className="d-block fs-sm fw-medium text-truncate animate-target"
            to={`/products/${item.slug}`}
          >
            {item.name}
          </Link>
        </h5>
        <div className="h6 pb-1 mb-2">${item.price.toFixed(2)}</div>
        <div className="d-flex align-items-center justify-content-between">
          <div className="count-input rounded-2">
            <button
              type="button"
              className="btn btn-icon btn-sm"
              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
              disabled={basketState.isLoading}
              aria-label="Decrement quantity"
            >
              <i className="ci-minus"></i>
            </button>
            <input
              type="number"
              className="form-control form-control-sm"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
              min="1"
              disabled={basketState.isLoading}
            />
            <button
              type="button"
              className="btn btn-icon btn-sm"
              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
              disabled={basketState.isLoading}
              aria-label="Increment quantity"
            >
              <i className="ci-plus"></i>
            </button>
          </div>
          <button
            type="button"
            className="btn-close fs-sm"
            onClick={() => handleRemoveItem(item.id)}
            disabled={basketState.isLoading}
            data-bs-toggle="tooltip"
            data-bs-custom-class="tooltip-sm"
            data-bs-title="Remove"
            aria-label="Remove from cart"
          ></button>
        </div>
      </div>
    </div>
  );

  if (basketState.items.length === 0 && !basketState.isLoading) {
    
    return renderEmptyBasket();
  }

  return (
    <div
      className="offcanvas offcanvas-end pb-sm-2 px-sm-2"
      id="shoppingCart"
      tabIndex={-1}
      aria-labelledby="shoppingCartLabel"
      style={{ width: '500px' }}
    >
      {/* Header */}
      <div className="offcanvas-header flex-column align-items-start py-3 pt-lg-4">
        <div className="d-flex align-items-center justify-content-between w-100 mb-3 mb-lg-4">
          <h4 className="offcanvas-title" id="shoppingCartLabel">
            Basket ({basketState.itemCount})
          </h4>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        {/* Free Shipping Alert */}
        {qualifiesForFreeShipping ? (
          <div className="alert alert-success text-dark-emphasis fs-sm border-0 rounded-4 mb-0" role="alert">
            Congratulations 🎉 You have added more than <span className="fw-semibold">${basketState.freeShippingThreshold}</span> to your cart. 
            <span className="fw-semibold"> Delivery is free</span> for you!
          </div>
        ) : (
          <>
            <p className="fs-sm">
              Buy <span className="text-dark-emphasis fw-semibold">${remainingForFreeShipping.toFixed(2)}</span> more to get{' '}
              <span className="text-dark-emphasis fw-semibold">Free Shipping</span>
            </p>
            <div
              className="progress w-100"
              role="progressbar"
              aria-label="Free shipping progress"
              aria-valuenow={freeShippingProgress}
              aria-valuemin={0}
              aria-valuemax={100}
              style={{ height: '4px' }}
            >
              <div 
                className="progress-bar bg-warning rounded-pill" 
                style={{ width: `${freeShippingProgress}%` }}
              ></div>
            </div>
          </>
        )}
      </div>

      {/* Items */}
      <div className="offcanvas-body d-flex flex-column gap-4 pt-2">
        {basketState.isLoading ? (
          <div className="text-center py-4">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          basketState.items.map(renderBasketItem)
        )}
      </div>

      {/* Footer */}
      <div className="offcanvas-header flex-column align-items-start">
        <div className="d-flex align-items-center justify-content-between w-100 mb-3 mb-md-4">
          <span className="text-light-emphasis">Subtotal:</span>
          <span className="h6 mb-0">${basketState.subtotal.toFixed(2)}</span>
        </div>
        <div className="d-flex w-100 gap-3">
          <NavLink 
            className="btn btn-lg btn-secondary w-100" 
            to={isAuthenticated ? '/user/basket' : '/basket'}
          >
            View cart
          </NavLink>
          <Link 
            className="btn btn-lg btn-primary w-100" 
            to={isAuthenticated ? "/user/checkout" : "/checkout"}
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BasketCanvas;