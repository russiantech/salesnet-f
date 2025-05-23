import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// // components/product/ProductFeatures.jsx
// import { useState } from 'react';
// import axios from 'axios';
// // import { useAuth } from '../../contexts/AuthContext';
// import { ProductAxiosService } from '../../services/net/ProductAxiosService';
// export const ProductFavorites = ({ productId, initialIsFavorite }) => {
//   const [isFavorite, setIsFavorite] = useState(initialIsFavorite);
//   // const { currentUser } = useAuth();
//   const currentUser = null; 
//   const toggleFavorite = async () => {
//     try {
//       if (!currentUser) {
//         // Handle login redirect or show toast
//         return;
//       }
//       if (isFavorite) {
//         await ProductAxiosService.json.delete(`/products/${productId}/favorites`);
//       } else {
//         await ProductAxiosService.json.post(`/products/${productId}/favorites`);
//       }
//       setIsFavorite(!isFavorite);
//     } catch (error) {
//       console.error('Failed to update favorites:', error);
//     }
//   };
//   return (
//     <button 
//       type="button" 
//       className="btn btn-icon btn-secondary animate-pulse" 
//       aria-label={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
//       onClick={toggleFavorite}
//     >
//       <i className={`ci-heart fs-base ${isFavorite ? 'text-danger ci-heart-filled' : ''}`} />
//     </button>
//   );
// };
// export const ProductBasket = ({ productId }) => {
//   // const { currentUser } = useAuth();
//   const currentUser = null;
//   const [isAdding, setIsAdding] = useState(false);
//   const addToBasket = async () => {
//     try {
//       if (!currentUser) {
//         // Handle login redirect or show toast
//         return;
//       }
//       setIsAdding(true);
//       await ProductAxiosService.json.post(`/basket/items`, {
//         product_id: productId,
//         quantity: 1
//       });
//       // Show success toast or update global basket state
//     } catch (error) {
//       console.error('Failed to add to basket:', error);
//     } finally {
//       setIsAdding(false);
//     }
//   };
//   return (
//     <button 
//       type="button" 
//       className="btn btn-icon btn-secondary animate-slide-end" 
//       aria-label="Add to Basket"
//       onClick={addToBasket}
//       disabled={isAdding}
//     >
//       <i className={`ci-shopping-cart fs-base ${isAdding ? 'opacity-75' : ''}`} />
//     </button>
//   );
// };
// export const ProductCompare = ({ productId }) => {
//   const [isComparing, setIsComparing] = useState(false);
//   // const { currentUser } = useAuth();
//   const currentUser = null;
//   const toggleCompare = async () => {
//     try {
//       if (!currentUser) {
//         // Handle login redirect or show toast
//         return;
//       }
//       setIsComparing(true);
//       // Implement compare logic based on your backend API
//       await ProductAxiosService.json.post(`/compare`, { product_id: productId });
//       // Update global compare state or show toast
//     } catch (error) {
//       console.error('Failed to update compare:', error);
//     } finally {
//       setIsComparing(false);
//     }
//   };
//   return (
//     <button 
//       type="button" 
//       className="btn btn-icon btn-secondary animate-rotate" 
//       aria-label={isComparing ? "Comparing..." : "Compare"}
//       onClick={toggleCompare}
//       disabled={isComparing}
//     >
//       <i className={`ci-refresh-cw fs-base ${isComparing ? 'spinner-border spinner-border-sm' : ''}`} />
//     </button>
//   );
// };
// export const ProductRating = ({ averageRating, reviewsCount }) => {
//   return (
//     <div className="d-flex align-items-center gap-2">
//       <div className="d-flex gap-1 fs-xs">
//         {[1, 2, 3, 4, 5].map((star) => (
//           <i 
//             key={star} 
//             className={`ci-star${star <= Math.round(averageRating) ? '-filled' : ''} ${averageRating ? 'text-warning' : 'text-body-tertiary opacity-75'}`}
//           />
//         ))}
//       </div>
//       <span className="text-body-tertiary fs-xs">({reviewsCount})</span>
//     </div>
//   );
// };
// export const ProductBadge = ({ type }) => {
//   const badgeClasses = {
//     hot: 'bg-danger',
//     new: 'bg-info',
//     sale: 'bg-success',
//     limited: 'bg-warning'
//   };
//   const badgeText = {
//     hot: 'Hot',
//     new: 'New',
//     sale: 'Sale',
//     limited: 'Limited'
//   };
//   return (
//     <span className={`badge ${badgeClasses[type]} position-absolute top-0 start-0 mt-2 ms-2 mt-lg-3 ms-lg-3 z-2`}>
//       {badgeText[type]}
//     </span>
//   );
// };
// 
// components/product/ProductFeatures.jsx
import { useState } from 'react';
// import { UsersService } from '../../services/UsersService';
import { useProductInteractions } from '../../hooks/useProductInteractions';
import { NotificationService } from '../../services/local/NotificationService';
import { UsersService } from '../../services/local/UsersService';
// import { NotificationService } from '../../services/NotificationService';
/**
 * Product Badge Component
 * Displays a badge on product cards (e.g., "Hot", "New", "Sale")
 */
export const ProductBadge = ({ type }) => {
    const badgeClasses = {
        hot: 'bg-danger',
        new: 'bg-success',
        sale: 'bg-warning',
        limited: 'bg-info'
    };
    const badgeLabels = {
        hot: 'Hot',
        new: 'New',
        sale: 'Sale',
        limited: 'Limited'
    };
    return (_jsx("span", { className: `badge ${badgeClasses[type]} position-absolute top-0 start-0 mt-2 ms-2 mt-lg-3 ms-lg-3 z-2`, children: badgeLabels[type] }));
};
/**
 * Product Favorites Component
 * Handles adding/removing products from favorites with loading animation
 */
// export const ProductFavorites = ({ productId, initialIsFavorite = false }) => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [isFavorite, setIsFavorite] = useState(initialIsFavorite);
//   const isAuthenticated = UsersService.isAuthenticated();
//   const { toggleWishlist, isWishlisted } = useProductInteractions(productId, isAuthenticated);
//   const handleToggleFavorite = async () => {
//     if (!isAuthenticated) {
//       NotificationService.showDialog('Please sign in to add items to favorites', 'info');
//       return;
//     }
//     setIsLoading(true);
//     try {
//       await toggleWishlist();
//       setIsFavorite(!isFavorite);
//       NotificationService.showDialog(
//         `Product ${!isFavorite ? 'added to' : 'removed from'} favorites`,
//         'success'
//       );
//     } catch (error) {
//       NotificationService.showDialog('Failed to update favorites', 'error');
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   return (
//     <button 
//       type="button" 
//       className={`btn btn-icon btn-secondary animate-pulse d-flex align-items-center justify-content-center${isFavorite ? ' active' : ''}`}
//       aria-label={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
//       onClick={handleToggleFavorite}
//       disabled={isLoading}
//     >
//       {isLoading ? (
//         <LoadingSpinner />
//       ) : (
//         <i className={`ci-heart${isFavorite ? '-filled' : ''} fs-base animate-target`} />
//       )}
//     </button>
//   );
// };
/**
 * Product Compare Component
 * Handles adding/removing products from comparison list with loading animation
 */
// export const ProductCompare = ({ productId, initialIsCompared = false }) => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [isCompared, setIsCompared] = useState(initialIsCompared);
//   const isAuthenticated = UsersService.isAuthenticated();
//   const handleToggleCompare = async () => {
//     if (!isAuthenticated) {
//       NotificationService.showDialog('Please sign in to add items to compare', 'info');
//       return;
//     }
//     setIsLoading(true);
//     try {
//       // Here you would call your comparison service
//       // For now we'll simulate an API call
//       await new Promise(resolve => setTimeout(resolve, 500));
//       setIsCompared(!isCompared);
//       NotificationService.showDialog(
//         `Product ${!isCompared ? 'added to' : 'removed from'} compare list`,
//         'success'
//       );
//     } catch (error) {
//       NotificationService.showDialog('Failed to update compare list', 'error');
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   return (
//     <button 
//       type="button" 
//       className={`btn btn-icon btn-secondary animate-rotate d-flex align-items-center justify-content-center${isCompared ? ' active' : ''}`}
//       aria-label={isCompared ? "Remove from Compare" : "Add to Compare"}
//       onClick={handleToggleCompare}
//       disabled={isLoading}
//     >
//       {isLoading ? (
//         <LoadingSpinner />
//       ) : (
//         <i className="ci-refresh-cw fs-base animate-target" />
//       )}
//     </button>
//   );
// };
/**
 * Product Basket Component
 * Handles adding products to basket with loading animation
 */
export const ProductBasket = ({ productId }) => {
    const [isLoading, setIsLoading] = useState(false);
    const isAuthenticated = UsersService.isAuthenticated();
    const { addToBasket } = useProductInteractions(productId, isAuthenticated);
    const handleAddToBasket = async () => {
        if (!isAuthenticated) {
            NotificationService.showDialog('Please sign in to add items to basket', 'info');
            return;
        }
        setIsLoading(true);
        try {
            await addToBasket(1);
            NotificationService.showDialog('Product added to basket', 'success');
        }
        catch (error) {
            NotificationService.showDialog('Failed to add product to basket', 'error');
        }
        finally {
            setIsLoading(false);
        }
    };
    return (_jsx("button", { type: "button", className: "product-card-button btn btn-icon btn-secondary animate-slide-end ms-2 d-flex align-items-center justify-content-center", "aria-label": "Add to Basket", onClick: handleAddToBasket, disabled: isLoading, children: isLoading ? (_jsx("div", { className: "spinner-border spinner-border-sm", role: "status", children: _jsx("span", { className: "visually-hidden", children: "Loading..." }) })) : (_jsx("i", { className: "ci-shopping-cart fs-base animate-target" })) }));
};
/**
 * Product Rating Component
 * Displays product ratings
 */
// export const ProductRating = ({ averageRating = 0, reviewsCount = 0 }) => {
//   const hasRating = averageRating > 0;
//   const roundedRating = Math.round(averageRating);
//   return (
//     <div className="d-flex align-items-center gap-2 mb-2">
//       <div className="d-flex gap-1 fs-xs">
//         {[1, 2, 3, 4, 5].map((star) => (
//           <i 
//             key={star} 
//             className={`ci-star${star <= roundedRating ? '-filled' : ''} ${hasRating ? 'text-warning' : 'text-body-tertiary opacity-75'}`}
//           />
//         ))}
//       </div>
//       <span className="text-body-tertiary fs-xs">({reviewsCount})</span>
//     </div>
//   );
// };
// ProductRating.tsx - Standalone component file
export const ProductRating = ({ averageRating = 0, reviewsCount = 0 }) => {
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                stars.push(_jsx("i", { className: "ci-star-filled text-warning" }, i));
            }
            else if (i === fullStars + 1 && hasHalfStar) {
                stars.push(_jsx("i", { className: "ci-star-half text-warning" }, i));
            }
            else {
                stars.push(_jsx("i", { className: "ci-star text-body-tertiary opacity-75" }, i));
            }
        }
        return stars;
    };
    return (_jsxs("div", { className: "d-flex align-items-center gap-2 mb-2", children: [_jsx("div", { className: "d-flex gap-1 fs-xs", children: renderStars(averageRating) }), _jsxs("span", { className: "text-body-tertiary fs-xs", children: ["(", averageRating, ")"] })] }));
};
