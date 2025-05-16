// components/product/ProductCard.jsx
// import { Link } from 'react-router-dom';
// import { formatPrice } from '../../utils/currencyUtils';
// import { ProductBadge, ProductBasket, ProductCompare, ProductFavorites, ProductRating } from './ProductFeatures';

// export const ProductCard = ({ 
//   product, 
//   showDetails = true,
//   showActions = true,
//   showBadge = true
// }) => {
//   const badgeType = () => {
//     if (product.metrics?.orders > 10) return 'hot';
//     if (product.is_new) return 'new';
//     if (product.discount_price) return 'sale';
//     if (product.stock < 5) return 'limited';
//     return null;
//   };

//   return (
//     <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
//       <div className="position-relative">
//         {showActions && (
//           <>
//             <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
//               <div className="d-flex flex-column gap-2">
//                 <ProductFavorites 
//                   productId={product.id} 
//                   initialIsFavorite={product.is_favorite} 
//                 />
//                 <ProductCompare productId={product.id} />
//               </div>
//             </div>
            
//             <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
//               <button type="button" className="btn btn-icon btn-sm btn-secondary bg-body" data-bs-toggle="dropdown" aria-expanded="false" aria-label="More actions">
//                 <i className="ci-more-vertical fs-lg" />
//               </button>
//               <ul className="dropdown-menu dropdown-menu-end fs-xs p-2" style={{ minWidth: 'auto' }}>
//                 <li>
//                   <button className="dropdown-item">
//                     <i className="ci-heart fs-sm ms-n1 me-2" />
//                     Add to Favorites
//                   </button>
//                 </li>
//                 <li>
//                   <button className="dropdown-item">
//                     <i className="ci-refresh-cw fs-sm ms-n1 me-2" />
//                     Compare
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           </>
//         )}

//         <Link className="d-block rounded-top overflow-hidden p-3 p-sm-4" to={`/products/${product.slug}`}>
//           {showBadge && badgeType() && <ProductBadge type={badgeType()} />}
//           <div className="ratio" style={{ '--cz-aspect-ratio': 'calc(240 / 258 * 100%)' }}>
//             <img 
//               src={product.image_urls?.[0] || 'https://via.placeholder.com/300'} 
//               alt={product.name} 
//               className="img-fluid object-fit-cover"
//               onError={(e) => {
//                 e.target.src = 'https://via.placeholder.com/300';
//               }}
//             />
//           </div>
//         </Link>
//       </div>
      
//       <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
//         <ProductRating 
//           averageRating={product.average_rating} 
//           reviewsCount={product.reviews_count} 
//         />
        
//         <h3 className="pb-1 mb-2">
//           <Link className="d-block fs-sm fw-medium text-truncate" to={`/products/${product.slug}`}>
//             {product.name}
//           </Link>
//         </h3>
        
//         <div className="d-flex align-items-center justify-content-between">
//           <div className="h5 lh-1 mb-0">
//             {product.discount_price ? (
//               <>
//                 <span className="text-danger">{formatPrice(product.discount_price)}</span>
//                 <span className="text-decoration-line-through text-body-tertiary fs-sm ms-2">
//                   {formatPrice(product.price)}
//                 </span>
//               </>
//             ) : (
//               formatPrice(product.price)
//             )}
//           </div>
//           {showActions && <ProductBasket productId={product.id} />}
//         </div>
//       </div>

//       {showDetails && (
//         <div className="product-card-details position-absolute top-100 start-0 w-100 bg-body rounded-bottom shadow mt-n2 p-3 pt-1">
//           <span className="position-absolute top-0 start-0 w-100 bg-body mt-n2 py-2" />
//           <ul className="list-unstyled d-flex flex-column gap-2 m-0">
//             <li className="d-flex align-items-center">
//               <span className="fs-xs">Category:</span>
//               <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
//               <span className="text-dark-emphasis fs-xs fw-medium text-end">
//                 {product.categories?.[0]?.name || 'Uncategorized'}
//               </span>
//             </li>
//             {product.metrics?.orders && (
//               <li className="d-flex align-items-center">
//                 <span className="fs-xs">Orders:</span>
//                 <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
//                 <span className="text-dark-emphasis fs-xs fw-medium text-end">
//                   {product.metrics.orders}
//                 </span>
//               </li>
//             )}
//             <li className="d-flex align-items-center">
//               <span className="fs-xs">Stock:</span>
//               <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
//               <span className="text-dark-emphasis fs-xs fw-medium text-end">
//                 {product.stock} available
//               </span>
//             </li>
//             {product.trend_score && (
//               <li className="d-flex align-items-center">
//                 <span className="fs-xs">Trend Score:</span>
//                 <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
//                 <span className="text-dark-emphasis fs-xs fw-medium text-end">
//                   {product.trend_score.toFixed(1)}
//                 </span>
//               </li>
//             )}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };


// claude
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { formatPrice } from '../../utils/currencyUtils';
// import { useProductInteractions } from '../../hooks/useProductInteractions';

// /**
//  * Reusable product card component with integrated interaction functionality
//  * @param {Object} props - Component props
//  * @param {Object} props.product - Product data object
//  * @param {boolean} props.showDetails - Whether to show additional product details
//  * @param {boolean} props.showMetrics - Whether to show product metrics
//  */
// const ProductCard = ({ product, showDetails = false, showMetrics = false }) => {
//   const {
//     inFavorites,
//     inCompare,
//     loading,
//     toggleFavorite,
//     toggleCompare,
//     addToBasket
//   } = useProductInteractions(product.id);

//   const isHot = product.metrics?.orders > 5;
//   const hasRating = product.average_rating > 0;

//   return (
//     <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
//       <div className="position-relative">
//         {/* Desktop action buttons */}
//         <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
//           <div className="d-flex flex-column gap-2">
//             <button 
//               type="button" 
//               className={`btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex${inFavorites ? ' active' : ''}`}
//               aria-label={inFavorites ? "Remove from Favorites" : "Add to Favorites"}
//               onClick={toggleFavorite}
//               disabled={loading.favorites}
//             >
//               <i className={`ci-heart${inFavorites ? '-filled' : ''} fs-base animate-target`} />
//             </button>
//             <button 
//               type="button" 
//               className={`btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex${inCompare ? ' active' : ''}`}
//               aria-label={inCompare ? "Remove from Compare" : "Add to Compare"}
//               onClick={toggleCompare}
//               disabled={loading.compare}
//             >
//               <i className="ci-refresh-cw fs-base animate-target" />
//             </button>
//           </div>
//         </div>
        
//         {/* Mobile dropdown menu */}
//         <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
//           <button 
//             type="button" 
//             className="btn btn-icon btn-sm btn-secondary bg-body" 
//             data-bs-toggle="dropdown" 
//             aria-expanded="false" 
//             aria-label="More actions"
//           >
//             <i className="ci-more-vertical fs-lg" />
//           </button>
//           <ul className="dropdown-menu dropdown-menu-end fs-xs p-2" style={{ minWidth: 'auto' }}>
//             <li>
//               <button 
//                 className="dropdown-item" 
//                 onClick={toggleFavorite}
//                 disabled={loading.favorites}
//               >
//                 <i className={`ci-heart${inFavorites ? '-filled' : ''} fs-sm ms-n1 me-2`} />
//                 {inFavorites ? 'Remove from Favorites' : 'Add to Favorites'}
//               </button>
//             </li>
//             <li>
//               <button 
//                 className="dropdown-item" 
//                 onClick={toggleCompare}
//                 disabled={loading.compare}
//               >
//                 <i className="ci-refresh-cw fs-sm ms-n1 me-2" />
//                 {inCompare ? 'Remove from Compare' : 'Add to Compare'}
//               </button>
//             </li>
//           </ul>
//         </div>

//         {/* Product image link */}
//         <Link className="d-block rounded-top overflow-hidden p-3 p-sm-4" to={`/products/${product.slug}`}>
//           {isHot && (
//             <span className="badge bg-danger position-absolute top-0 start-0 mt-2 ms-2 mt-lg-3 ms-lg-3 z-2 z-index-100">
//               Hot
//             </span>
//           )}
//           <div className="ratio" style={{ '--cz-aspect-ratio': 'calc(240 / 258 * 100%)' }}>
//             <img 
//               src={product.image_urls?.[0] || '/images/placeholder-product.jpg'} 
//               alt={product.name} 
//               className="img-fluid object-fit-cover"
//               onError={(e) => {
//                 e.target.src = '/images/placeholder-product.jpg';
//               }}
//             />
//           </div>
//         </Link>
//       </div>
      
//       {/* Product info */}
//       <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
//         {/* Rating display */}
//         <div className="d-flex align-items-center gap-2 mb-2">
//           <div className="d-flex gap-1 fs-xs">
//             {[1, 2, 3, 4, 5].map((star) => (
//               <i 
//                 key={star} 
//                 className={`ci-star${star <= Math.round(product.average_rating) ? '-filled' : ''} ${hasRating ? 'text-warning' : 'text-body-tertiary opacity-75'}`}
//               />
//             ))}
//           </div>
//           <span className="text-body-tertiary fs-xs">({product.reviews_count || 0})</span>
//         </div>
        
//         {/* Product name */}
//         <h3 className="pb-1 mb-2">
//           <Link className="d-block fs-sm fw-medium text-truncate" to={`/products/${product.slug}`}>
//             <span className="animate-target">{product.name}</span>
//           </Link>
//         </h3>
        
//         {/* Price and basket button */}
//         <div className="d-flex align-items-center justify-content-between">
//           <div className="h5 lh-1 mb-0">{formatPrice(product.price)}</div>
//           <button 
//             type="button" 
//             className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2" 
//             aria-label="Add to Basket"
//             onClick={() => addToBasket(1)}
//             disabled={loading.basket}
//           >
//             <i className="ci-shopping-cart fs-base animate-target" />
//           </button>
//         </div>
//       </div>
      
//       {/* Additional product details */}
//       {showDetails && (
//         <div className="product-card-details position-absolute top-100 start-0 w-100 bg-body rounded-bottom shadow mt-n2 p-3 pt-1">
//           <span className="position-absolute top-0 start-0 w-100 bg-body mt-n2 py-2" />
//           <ul className="list-unstyled d-flex flex-column gap-2 m-0">
//             <li className="d-flex align-items-center">
//               <span className="fs-xs">Category:</span>
//               <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
//               <span className="text-dark-emphasis fs-xs fw-medium text-end">
//                 {product.categories?.length > 0 ? product.categories[0].name : 'Uncategorized'}
//               </span>
//             </li>
            
//             {showMetrics && product.metrics && (
//               <>
//                 <li className="d-flex align-items-center">
//                   <span className="fs-xs">Orders:</span>
//                   <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
//                   <span className="text-dark-emphasis fs-xs fw-medium text-end">
//                     {product.metrics.orders}
//                   </span>
//                 </li>
                
//                 {product.metrics.trend_score !== undefined && (
//                   <li className="d-flex align-items-center">
//                     <span className="fs-xs">Trend Score:</span>
//                     <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
//                     <span className="text-dark-emphasis fs-xs fw-medium text-end">
//                       {product.metrics.trend_score.toFixed(1)}
//                     </span>
//                   </li>
//                 )}
//               </>
//             )}
            
//             <li className="d-flex align-items-center">
//               <span className="fs-xs">Stock:</span>
//               <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
//               <span className="text-dark-emphasis fs-xs fw-medium text-end">
//                 {product.stock} available
//               </span>
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductCard;


// claude 2

// components/product/ProductCard.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../utils/currencyUtils';
import { ProductBadge, ProductRating } from './ProductFeatures';
// import { UsersService } from '../../services/UsersService';
// import { NotificationService } from '../../services/NotificationService';
import { useProductInteractions } from '../../hooks/useProductInteractions';
import { NotificationService } from '../../services/local/NotificationService';
import { UsersService } from '../../services/local/UsersService';
import { LoadingZoom } from '../../components/shared/LoadingSpinner';

/**
 * Enhanced Product Card component with loading animations for all interactions
 * @param {Object} props - Component props
 * @param {Object} props.product - Product data
 * @param {boolean} props.showDetails - Whether to show additional details
 * @param {boolean} props.showBadge - Whether to show product badge
 */
export const ProductCard1 = ({ 
  product, 
  showDetails = false, 
  showBadge = true 
}) => {
  const isAuthenticated = UsersService.isAuthenticated();
  
  // Loading states for each action
  const [loadingState, setLoadingState] = useState({
    favorites: false,
    compare: false,
    basket: false
  });
  
  // State for UI
  const [inFavorites, setInFavorites] = useState(product.is_favorite || false);
  const [inCompare, setInCompare] = useState(product.is_compared || false);
  
  // Get product interaction methods
  const { 
    toggleWishlist,
    addToBasket
  } = useProductInteractions(product.id, isAuthenticated);
  
  // Determine badge type
  const badgeType = () => {
    if (product.metrics?.orders > 10) return 'hot';
    if (product.is_new) return 'new';
    if (product.discount_price) return 'sale';
    if (product.stock < 5) return 'limited';
    return null;
  };
  
  // Handle adding/removing from favorites
  const handleToggleFavorite = async () => {
    if (!isAuthenticated) {
      NotificationService.showDialog('Please sign in to add items to favorites', 'info');
      return;
    }
    
    setLoadingState(prev => ({ ...prev, favorites: true }));
    try {
      await toggleWishlist();
      setInFavorites(!inFavorites);
      NotificationService.showDialog(
        `Product ${!inFavorites ? 'added to' : 'removed from'} favorites`,
        'success'
      );
    } catch (error) {
      NotificationService.showDialog('Failed to update favorites', 'error');
    } finally {
      setLoadingState(prev => ({ ...prev, favorites: false }));
    }
  };
  
  // Handle adding/removing from compare
  const handleToggleCompare = async () => {
    if (!isAuthenticated) {
      NotificationService.showDialog('Please sign in to add items to compare', 'info');
      return;
    }
    
    setLoadingState(prev => ({ ...prev, compare: true }));
    try {
      // Here you would call your comparison service
      // We'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 500));
      setInCompare(!inCompare);
      NotificationService.showDialog(
        `Product ${!inCompare ? 'added to' : 'removed from'} compare list`,
        'success'
      );
    } catch (error) {
      NotificationService.showDialog('Failed to update compare list', 'error');
    } finally {
      setLoadingState(prev => ({ ...prev, compare: false }));
    }
  };
  
  // Handle adding to basket
  const handleAddToBasket = async () => {
    if (!isAuthenticated) {
      NotificationService.showDialog('Please sign in to add items to basket', 'info');
      return;
    }
    
    setLoadingState(prev => ({ ...prev, basket: true }));
    try {
      await addToBasket(1);
      NotificationService.showDialog('Product added to basket', 'success');
    } catch (error) {
      NotificationService.showDialog('Failed to add product to basket', 'error');
    } finally {
      setLoadingState(prev => ({ ...prev, basket: false }));
    }
  };

  return (
    <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
      <div className="position-relative">
        {/* Desktop action buttons */}
        <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
          <div className="d-flex flex-column gap-2">
            <button 
              type="button" data-bs-toggle="offcanvas" data-bs-target="#quickSigninCanvas" 
                                            aria-controls="shoppingCart" aria-label="Sign in Canvas"
              className={`btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex${inFavorites ? ' active' : ''}`}
              aria-label={inFavorites ? "Remove from Favorites" : "Add to Favorites"}
              onClick={handleToggleFavorite}
              disabled={loadingState.favorites}
            >
              {loadingState.favorites ? (
               <LoadingZoom />
              ) : (
                <i className={`ci-heart${inFavorites ? '-filled' : ''} fs-base animate-target`} />
              )}
            </button>
            <button 
              type="button" 
              className={`btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex${inCompare ? ' active' : ''}`}
              aria-label={inCompare ? "Remove from Compare" : "Add to Compare"}
              onClick={handleToggleCompare}
              disabled={loadingState.compare}
            >
              {loadingState.compare ? (
                 <LoadingZoom />
              ) : (
                <i className="ci-refresh-cw fs-base animate-target" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile dropdown menu */}
        <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
          <button 
            type="button" 
            className="btn btn-icon btn-sm btn-secondary bg-body" 
            data-bs-toggle="dropdown" 
            aria-expanded="false" 
            aria-label="More actions"
          >
            <i className="ci-more-vertical fs-lg" />
          </button>
          <ul className="dropdown-menu dropdown-menu-end fs-xs p-2" style={{ minWidth: 'auto' }}>
            <li>
              <button 
                className="dropdown-item d-flex align-items-center" 
                onClick={handleToggleFavorite}
                disabled={loadingState.favorites}
              >
                {loadingState.favorites ? (
                  <LoadingZoom />
                ) : (
                  <i className={`ci-heart${inFavorites ? '-filled' : ''} fs-sm ms-n1 me-2`} />
                )}
                {inFavorites ? 'Remove from Favorites' : 'Add to Favorites'}
              </button>
            </li>
            <li>
              <button 
                className="dropdown-item d-flex align-items-center" 
                onClick={handleToggleCompare}
                disabled={loadingState.compare}
              >
                {loadingState.compare ? (
                   <LoadingZoom />
                ) : (
                  <i className="ci-refresh-cw fs-sm ms-n1 me-2" />
                )}
                {inCompare ? 'Remove from Compare' : 'Add to Compare'}
              </button>
            </li>
          </ul>
        </div>

        {/* Product image link */}
        <Link className="d-block rounded-top overflow-hidden p-3 p-sm-4" to={`/products/${product.slug}`}>
          {showBadge && badgeType() && <ProductBadge type={badgeType()} />}
          <div className="ratio" style={{ '--cz-aspect-ratio': 'calc(240 / 258 * 100%)' }}>
            <img 
              src={product.image_urls?.[0] || '/images/placeholder-product.jpg'} 
              alt={product.name} 
              className="img-fluid object-fit-cover"
              onError={(e) => {
                e.target.src = '/images/placeholder-product.jpg';
              }}
            />
          </div>
        </Link>
      </div>
      
      {/* Product info */}
      <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
        {/* Rating display */}
        <ProductRating 
          averageRating={product.average_rating} 
          reviewsCount={product.reviews_count} 
        />
        
        {/* Product name */}
        <h3 className="pb-1 mb-2">
          <Link className="d-block fs-sm fw-medium text-truncate" to={`/products/${product.slug}`}>
            <span className="animate-target">{product.name}</span>
          </Link>
        </h3>
        
        {/* Price and basket button */}
        <div className="d-flex align-items-center justify-content-between">
          <div className="h5 lh-1 mb-0">
            {product.discount_price ? (
              <>
                <span className="text-danger">{formatPrice(product.discount_price)}</span>
                <span className="text-decoration-line-through text-body-tertiary fs-sm ms-2">
                  {formatPrice(product.price)}
                </span>
              </>
            ) : (
              formatPrice(product.price)
            )}
          </div>
          <button 
            type="button" 
            className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2" 
            aria-label="Add to Basket"
            onClick={handleAddToBasket}
            disabled={loadingState.basket}
          >
            {loadingState.basket ? (
               <LoadingZoom />
            ) : (
              <i className="ci-shopping-cart fs-base animate-target" />
            )}
          </button>
        </div>
      </div>
      
      {/* Additional product details */}
      {showDetails && (
        <div className="product-card-details position-absolute top-100 start-0 w-100 bg-body rounded-bottom shadow mt-n2 p-3 pt-1">
          <span className="position-absolute top-0 start-0 w-100 bg-body mt-n2 py-2" />
          <ul className="list-unstyled d-flex flex-column gap-2 m-0">
            <li className="d-flex align-items-center">
              <span className="fs-xs">Category:</span>
              <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
              <span className="text-dark-emphasis fs-xs fw-medium text-end">
                {product.categories?.[0]?.name || 'Uncategorized'}
              </span>
            </li>
            {product.metrics?.orders && (
              <li className="d-flex align-items-center">
                <span className="fs-xs">Orders:</span>
                <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                <span className="text-dark-emphasis fs-xs fw-medium text-end">
                  {product.metrics.orders}
                </span>
              </li>
            )}
            <li className="d-flex align-items-center">
              <span className="fs-xs">Stock:</span>
              <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
              <span className="text-dark-emphasis fs-xs fw-medium text-end">
                {product.stock} available
              </span>
            </li>
            {product.trend_score && (
              <li className="d-flex align-items-center">
                <span className="fs-xs">Trend Score:</span>
                <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                <span className="text-dark-emphasis fs-xs fw-medium text-end">
                  {product.trend_score.toFixed(1)}
                </span>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

// export default ProductCard;


import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
// import { formatPrice } from '../../utils/currencyUtils';
// import { ProductBadge, ProductRating } from './ProductFeatures';
// import { useProductInteractions } from '../../hooks/useProductInteractions';
// import { LoadingZoom } from '../../components/shared/LoadingSpinner';
// import { Offcanvas } from 'bootstrap';

export const ProductCard = ({ 
  product, 
  showDetails = false, 
  showBadge = true 
}) => {
  const signinCanvasRef = useRef<HTMLDivElement>(null);
  const [loadingState, setLoadingState] = useState({
    favorites: false,
    compare: false,
    basket: false
  });
  
  const [inFavorites, setInFavorites] = useState(product.is_favorite || false);
  const [inCompare, setInCompare] = useState(product.is_compared || false);
  
  const isAuthenticated = UsersService.isAuthenticated();

  const { 
    toggleFavorites,
    addToBasket
  } = useProductInteractions(product.id, isAuthenticated);
  
  const handleInteraction = async (action: () => Promise<void>, type: 'favorites' | 'compare' | 'basket') => {
    setLoadingState(prev => ({ ...prev, [type]: true }));
    try {
      await action();
      if (type === 'favorites') setInFavorites(!inFavorites);
      if (type === 'compare') setInCompare(!inCompare);
    } finally {
      setLoadingState(prev => ({ ...prev, [type]: false }));
    }
  };

  const badgeType = () => {
    if (product.metrics?.orders > 10) return 'hot';
    if (product.is_new) return 'new';
    if (product.discount_price) return 'sale';
    if (product.stock < 5) return 'limited';
    return null;
  };

    // Handle adding/removing from favorites
    const handleToggleFavorite = async () => {
      if (!isAuthenticated) {
        NotificationService.showDialog('Please sign in to add items to favorites', 'info');
        return;
      }
      
      setLoadingState(prev => ({ ...prev, favorites: true }));
      try {
        await toggleFavorites();
        setInFavorites(!inFavorites);
        NotificationService.showDialog(
          `Product ${!inFavorites ? 'added to' : 'removed from'} favorites`,
          'success'
        );
      } catch (error) {
        NotificationService.showDialog('Failed to update favorites', 'error');
      } finally {
        setLoadingState(prev => ({ ...prev, favorites: false }));
      }
    };
    
    // Handle adding/removing from compare
    const handleToggleCompare = async () => {
      if (!isAuthenticated) {
        NotificationService.showDialog('Please sign in to add items to compare', 'info');
        return;
      }
      
      setLoadingState(prev => ({ ...prev, compare: true }));
      try {
        // Here you would call your comparison service
        // We'll simulate an API call
        await new Promise(resolve => setTimeout(resolve, 500));
        setInCompare(!inCompare);
        NotificationService.showDialog(
          `Product ${!inCompare ? 'added to' : 'removed from'} compare list`,
          'success'
        );
      } catch (error) {
        NotificationService.showDialog('Failed to update compare list', 'error');
      } finally {
        setLoadingState(prev => ({ ...prev, compare: false }));
      }
    };
    
    // Handle adding to basket
    const handleAddToBasket = async () => {
      if (!isAuthenticated) {
        NotificationService.showDialog('Please sign in to add items to basket', 'info');
        return;
      }
      
      setLoadingState(prev => ({ ...prev, basket: true }));
      try {
        await addToBasket(1);
        NotificationService.showDialog('Product added to basket', 'success');
      } catch (error) {
        NotificationService.showDialog('Failed to add product to basket', 'error');
      } finally {
        setLoadingState(prev => ({ ...prev, basket: false }));
      }

    };

  return (
    <>
      <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
        {/* ... other product card code ... */}
        <div className="position-relative">

        {/* Desktop action buttons */}
        <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
          <div className="d-flex flex-column gap-2">
            <button 
              type="button"
              className={`btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex${inFavorites ? ' active' : ''}`}
              aria-label={inFavorites ? "Remove from Favorites" : "Add to Favorites"}
              // onClick={() => handleInteraction(toggleWishlist, 'favorites')}
              onClick={() => handleInteraction(() => handleToggleFavorite(), 'favorites')}
              disabled={loadingState.favorites}
              data-bs-toggle="offcanvas" 
              data-bs-target="#quickSigninCanvas"
              aria-controls="quickSigninCanvas"
            >
              {loadingState.favorites ? (
                <LoadingZoom />
              ) : (
                <i className={`ci-heart${inFavorites ? '-filled' : ''} fs-base animate-target`} />
              )}
            </button>
            
            <button 
              type="button"
              className={`btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex${inCompare ? ' active' : ''}`}
              aria-label={inCompare ? "Remove from Compare" : "Add to Compare"}
              onClick={() => handleInteraction(() => handleToggleCompare(), 'compare')} // Replace with actual compare function
              disabled={loadingState.compare}
              data-bs-toggle="offcanvas" 
              data-bs-target="#quickSigninCanvas"
              aria-controls="quickSigninCanvas"
            >
              {loadingState.compare ? (
                <LoadingZoom />
              ) : (
                <i className="ci-refresh-cw fs-base animate-target" />
              )}
            </button>
          </div>
        </div>

                
        {/* Mobile dropdown menu */}
        <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
          <button 
            type="button" 
            className="btn btn-icon btn-sm btn-secondary bg-body" 
            data-bs-toggle="dropdown" 
            aria-expanded="false" 
            aria-label="More actions"
          >
            <i className="ci-more-vertical fs-lg" />
          </button>
          <ul className="dropdown-menu dropdown-menu-end fs-xs p-2" style={{ minWidth: 'auto' }}>
            <li>
              <button 
                className="dropdown-item d-flex align-items-center" 
                // onClick={handleToggleFavorite}
                onClick={() => handleInteraction(() => handleToggleFavorite(), 'favorites')}
                disabled={loadingState.favorites}
                data-bs-toggle="offcanvas" 
                data-bs-target="#quickSigninCanvas"
                aria-controls="quickSigninCanvas"
              >
                {loadingState.favorites ? (
                  <LoadingZoom />
                ) : (
                  <i className={`ci-heart${inFavorites ? '-filled' : ''} fs-sm ms-n1 me-2`} />
                )}
                {inFavorites ? 'Remove from Favorites' : 'Add to Favorites'}
              </button>
            </li>
            <li>
              <button 
                className="dropdown-item d-flex align-items-center" 
                // onClick={handleToggleCompare}
                onClick={() => handleInteraction(() => handleToggleCompare(), 'compare')}
                disabled={loadingState.compare}
                data-bs-toggle="offcanvas" 
                data-bs-target="#quickSigninCanvas"
                aria-controls="quickSigninCanvas"
              >
                {loadingState.compare ? (
                   <LoadingZoom />
                ) : (
                  <i className="ci-refresh-cw fs-sm ms-n1 me-2" />
                )}
                {inCompare ? 'Remove from Compare' : 'Add to Compare'}
              </button>
              
            </li>
          </ul>
        </div>

        {/* Product image link */}
        <Link className="d-block rounded-top overflow-hidden p-3 p-sm-4" to={`/products/${product.slug}`}>
          {showBadge && badgeType() && <ProductBadge type={badgeType()} />}
          <div className="ratio" style={{ '--cz-aspect-ratio': 'calc(240 / 258 * 100%)' }}>
            <img src={product.image_urls?.[0] || '/images/placeholder-product.jpg'} 
              alt={product.name} 
              className="img-fluid object-fit-cover"
              onError={(e) => {
                e.target.src = '/images/placeholder-product.jpg';
              }}
            />
          </div>
        </Link>

        
        </div>

        {/* ... rest of product card ... */}
               {/* Product info */}
      <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
        {/* Rating display */}
        <ProductRating 
          averageRating={product.average_rating} 
          reviewsCount={product.reviews_count} 
        />
        
        {/* Product name */}
        <h3 className="pb-1 mb-2">
          <Link className="d-block fs-sm fw-medium text-truncate" to={`/products/${product.slug}`}>
            <span className="animate-target">{product.name}</span>
          </Link>
        </h3>
        
        {/* Price and basket button */}
        <div className="d-flex align-items-center justify-content-between">
          <div className="h5 lh-1 mb-0">
            {product.discount_price ? (
              <>
                <span className="text-danger">{formatPrice(product.discount_price)}</span>
                <span className="text-decoration-line-through text-body-tertiary fs-sm ms-2">
                  {formatPrice(product.price)}
                </span>
              </>
            ) : (
              formatPrice(product.price)
            )}
          </div>

          {/* <button 
            type="button" 
            className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2" 
            aria-label="Add to Basket"
            onClick={handleAddToBasket}
            disabled={loadingState.basket}
          >
            {loadingState.basket ? (
               <LoadingZoom />
            ) : (
              <i className="ci-shopping-cart fs-base animate-target" />
            )}
          </button> */}
          <button 
          type="button"
          className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2" 
          aria-label="Add to Basket"
          onClick={() => handleInteraction(() => handleAddToBasket(), 'basket')}
          disabled={loadingState.basket}
          data-bs-toggle="offcanvas" 
          data-bs-target="#quickSigninCanvas"
          aria-controls="quickSigninCanvas"
        >
          {loadingState.basket ? (
            <LoadingZoom />
          ) : (
            <i className="ci-shopping-cart fs-base animate-target" />
          )}
        </button>


        </div>
      </div>
      
      {/* Additional product details */}
      {showDetails && (
        <div className="product-card-details position-absolute top-100 start-0 w-100 bg-body rounded-bottom shadow mt-n2 p-3 pt-1">
          <span className="position-absolute top-0 start-0 w-100 bg-body mt-n2 py-2" />
          <ul className="list-unstyled d-flex flex-column gap-2 m-0">
            <li className="d-flex align-items-center">
              <span className="fs-xs">Category:</span>
              <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
              <span className="text-dark-emphasis fs-xs fw-medium text-end">
                {product.categories?.[0]?.name || 'Uncategorized'}
              </span>
            </li>
            {product.metrics?.orders && (
              <li className="d-flex align-items-center">
                <span className="fs-xs">Orders:</span>
                <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                <span className="text-dark-emphasis fs-xs fw-medium text-end">
                  {product.metrics.orders}
                </span>
              </li>
            )}
            <li className="d-flex align-items-center">
              <span className="fs-xs">Stock:</span>
              <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
              <span className="text-dark-emphasis fs-xs fw-medium text-end">
                {product.stock} available
              </span>
            </li>
            {product.trend_score && (
              <li className="d-flex align-items-center">
                <span className="fs-xs">Trend Score:</span>
                <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                <span className="text-dark-emphasis fs-xs fw-medium text-end">
                  {product.trend_score.toFixed(1)}
                </span>
              </li>
            )}
          </ul>
        </div>
      )}
      
      </div>

      {/* Sign-in Offcanvas (should be in your layout component) */}
      {/* <div 
        className="offcanvas offcanvas-end" 
        tabIndex={-1} 
        id="quickSigninCanvas" 
        aria-labelledby="quickSigninCanvasLabel"
        ref={signinCanvasRef}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="quickSigninCanvasLabel">Sign In Required</h5>
          <button 
            type="button" 
            className="btn-close text-reset" 
            data-bs-dismiss="offcanvas" 
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <p>You need to sign in to perform this action.</p>
          <Link 
            to="/auth/signin" 
            className="btn btn-primary w-100"
            onClick={() => signinCanvasRef.current && bootstrap.Offcanvas.getInstance(signinCanvasRef.current)?.hide()}
          >
            Sign In
          </Link>
          <div className="text-center mt-3">
            <span className="text-muted">Don't have an account?</span>{' '}
            <Link 
              to="/auth/signup" 
              className="text-decoration-none"
              onClick={() => signinCanvasRef.current && bootstrap.Offcanvas.getInstance(signinCanvasRef.current)?.hide()}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div> */}
    </>
  );
};

// 
// 
import React, { useEffect } from 'react';
// import { useProductInteractions } from '../hooks/useProductInteractions';
// import { NotificationService } from '../services/NotificationService';

// Example product detail component
const ProductCard2 = ({ product, isAuthenticated }) => {
  const {
    inBasket,
    basketQuantity,
    isWishlisted,
    isLoading,
    addToBasket,
    removeFromBasket,
    updateBasketQuantity,
    toggleWishlist
  } = useProductInteractions(
    product.id, 
    isAuthenticated,
    product.name // Pass product name for notification messages
  );

  // Quantity change handler
  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity >= 0) {
      updateBasketQuantity(newQuantity);
    }
  };

  // Show custom notification manually (example of direct NotificationService usage)
  const showCustomNotification = () => {
    NotificationService.showDialog(
      `${product.name} is now on sale! Limited stock available.`, 
      'warning'
    );
  };

  return (
    <div className="product-detail-container">
      <h2>{product.name}</h2>
      <p className="price">${product.price.toFixed(2)}</p>
      
      {/* Product actions */}
      <div className="product-actions">
        {/* Add to basket button */}
        {!inBasket ? (
          <button 
            className="btn btn-primary me-2" 
            onClick={() => addToBasket(1)}
            disabled={isLoading}
          >
            <i className="ci-cart fs-lg me-2"></i>
            Add to Basket
          </button>
        ) : (
          <div className="d-flex align-items-center">
            <button 
              className="btn btn-outline-secondary btn-sm"
              onClick={() => updateBasketQuantity(Math.max(1, basketQuantity - 1))}
              disabled={isLoading}
            >
              <i className="ci-minus"></i>
            </button>
            
            <input 
              type="number"
              className="form-control form-control-sm mx-2"
              style={{ width: '60px' }}
              value={basketQuantity}
              min="0"
              onChange={handleQuantityChange}
              disabled={isLoading}
            />
            
            <button 
              className="btn btn-outline-secondary btn-sm me-3"
              onClick={() => updateBasketQuantity(basketQuantity + 1)}
              disabled={isLoading}
            >
              <i className="ci-plus"></i>
            </button>
            
            <button 
              className="btn btn-outline-danger btn-sm"
              onClick={removeFromBasket}
              disabled={isLoading}
            >
              <i className="ci-trash"></i>
            </button>
          </div>
        )}
        
        {/* Wishlist button */}
        <button 
          className={`btn ${isWishlisted ? 'btn-danger' : 'btn-outline-danger'} ms-2`}
          onClick={toggleWishlist}
          disabled={isLoading}
        >
          <i className={`ci-heart${!isWishlisted ? '-filled' : ''}`}></i>
          {isWishlisted ? ' Wishlisted' : ' Wishlist'}
        </button>
        
        {/* Example of manually showing a notification */}
        <button 
          className="btn btn-outline-warning ms-2"
          onClick={showCustomNotification}
        >
          <i className="ci-bell"></i> Sale Alert
        </button>
      </div>
      
      {/* Product description */}
      <div className="product-description mt-4">
        <h4>Description</h4>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
