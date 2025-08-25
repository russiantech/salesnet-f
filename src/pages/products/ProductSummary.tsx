
// // v2
// import { useState } from "react";
// import { FavoriteButton } from "./interactions/FavoriteButton";
// import { Link } from "react-router-dom";
// import { formatCurrency } from "../../utils/currencyUtils";
// import { BasketButton } from "./interactions/BasketButton";
// import { CompareButton } from "./interactions/CompareButton";
// import { ProductBadge, ProductRating } from "./ProductFeatures";

// const SubscriptionBadge = ({ subscription }) => {
//   // Safely access plan through multiple possible paths
//   const plan = subscription?.plan || subscription?.plans?.plan;
  
//   if (!plan) return null;
  
//   const { is_expiring_soon, days_remaining } = subscription;
  
//   const getBadgeClass = () => {
//     if (is_expiring_soon) return 'bg-warning text-dark';
//     return `bg-${plan.badge_color || 'primary'} text-white`;
//   };
  
//   const getIcon = () => {
//     return plan.icon || 'ci-crown';
//   };
  
//   return (
//     <div className="position-absolute top-0 end-0 z-3 m-2">
//       <span 
//         className={`badge ${getBadgeClass()} d-flex align-items-center gap-1 rounded-pill`}
//         title={`${plan.name} Plan${is_expiring_soon ? ` - Expires in ${days_remaining} days` : ''}`}
//       >
//         <i className={`${getIcon()} fs-xs`} />
//         <span className="fs-xs">{plan.name}</span>
//         {is_expiring_soon && (
//           <i className="ci-clock fs-xs ms-1" title="Expiring soon" />
//         )}
//       </span>
//     </div>
//   );
// };

// // Enhanced Product Summary Component
// export const ProductSummary = ({
//   product,
//   showDetails = false,
//   showMetrics = false,
//   showBadge = true,
//   discountBadge = true,
//   showCheckbox = false,
//   showSubscription = true,
//   isChecked = false,
//   onCheckChange = () => {}
// }) => {
//   const [loadingState, setLoadingState] = useState({
//     favorites: false,
//     compare: false,
//     basket: false
//   });

//   const [inFavorites, setInFavorites] = useState(product.is_favorite || false);
//   const [inCompare, setInCompare] = useState(product.is_compared || false);

//   const badgeType = () => {
//     if (product.metrics?.orders > 10) return 'hot';
//     if (product.is_new) return 'new';
//     if (product.discount_price || product.discount) return 'sale';
//     if (product.stock < 5) return 'limited';
//     return null;
//   };

//   const renderPrice = () => {
//     const hasDiscount = product.discount_price || product.discount;
//     const discountedPrice = product.discount_price ||  (product.discount ? product.discount.calculated_price : null);
    
//     return (
//       <div className="h5 lh-1 mb-0 flex-grow-1 me-2">
//         {hasDiscount ? (
//           <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-1">
//             <span className="text-danger fw-medium">{formatCurrency(discountedPrice)}</span>
//             <div className="d-flex align-items-center gap-2">
//               <span className="text-decoration-line-through text-body-tertiary fs-sm">
//                 {/* {formatCurrency(product.price)} */}
//                 {formatCurrency(product.price, 'NGN', { short: true })}
//               </span>
//               {discountBadge && product.discount && (
//                 <span className="badge bg-danger bg-opacity-10 text-danger fs-xs">
//                   {product.discount.discount_type === 'percentage'
//                     ? `${product.discount.discount_value}% OFF`
//                     : `${formatCurrency(product.discount.discount_value)} OFF`}
//                 </span>
//               )}
//             </div>
//           </div>
//         ) : (
//           <span className="fw-medium"> {formatCurrency(product.price, 'NGN', { short: true })} </span>
//         )}
//       </div>
//     );
//   };

//   const handleCheckboxChange = (e) => {
//     if (onCheckChange) {
//       onCheckChange(e.target.checked);
//     }
//   };

//   return (
//     <div className='col' key={product.id}>
//       <div className="product-card animate-underline hover-effect-opacity bg-body rounded h-100 d-flex flex-column">
//         <div className="position-relative flex-shrink-0">
//           {/* Subscription Badge */}
//           {showSubscription && product.has_subscription && product.subscription && (
//             <SubscriptionBadge subscription={product.subscription} />
//           )}
          
//           {/* Checkbox for selection */}
//           {showCheckbox && (
//             <div className="position-absolute top-0 start-0 z-3 pt-1 ps-1 mt-2 ms-2">
//               <div className="form-check fs-lg">
//                 <input 
//                   type="checkbox" 
//                   className="form-check-input select-card-check" 
//                   checked={isChecked}
//                   onChange={handleCheckboxChange}
//                 />
//               </div>
//             </div>
//           )}

//           {/* Desktop action buttons - hide when checkbox is shown */}
//           {!showCheckbox && (
//             <div className="position-absolute top-0 start-0 z-2 hover-effect-target opacity-0 mt-3 ms-3">
//               <div className="d-flex flex-column gap-2">
//                 <FavoriteButton 
//                   productId={product.id}
//                   productName={product.name}
//                   initialFavorite={product.is_favorite}
//                   className="d-none d-lg-inline-flex"
//                 />
//                 <CompareButton 
//                   productId={product.id}
//                   productName={product.name}
//                   initialCompared={product.is_compared}
//                   className="d-none d-lg-inline-flex"
//                 />
//               </div>
//             </div>
//           )}

//           {/* Mobile dropdown menu - hide when checkbox is shown */}
//           {!showCheckbox && (
//             <div className="dropdown d-lg-none position-absolute bottom-0 start-0 z-2 mb-2 ms-2">
//               <button
//                 type="button"
//                 className="btn btn-icon btn-sm btn-secondary bg-body"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//                 aria-label="More actions"
//               >
//                 <i className="ci-more-vertical fs-lg" />
//               </button>
//               <ul className="dropdown-menu dropdown-menu-start fs-xs p-2" style={{ minWidth: 'auto' }}>
//                 <li>
//                   <FavoriteButton 
//                     productId={product.id}
//                     productName={product.name}
//                     initialFavorite={product.is_favorite}
//                     className="dropdown-item d-flex align-items-center"
//                   />
//                 </li>
//                 <li>
//                   <CompareButton 
//                     productId={product.id}
//                     productName={product.name}
//                     initialCompared={product.is_compared}
//                     showText={false}
//                     className="dropdown-item d-flex align-items-center"
//                   />
//                 </li>
//               </ul>
//             </div>
//           )}

//           {/* Product image link */}
//           <a className="d-block rounded-top overflow-hidden" href={`/products/${product.slug}`}>
//             {showBadge && badgeType() && <ProductBadge type={badgeType()} />}
//             <div className="position-relative w-100" style={{ paddingBottom: '100%' }}>
//               <img 
//                 src={product.image_urls?.[0] || product.image || '/assets/img/placeholder.jpg'}
//                 alt={product.name}
//                 className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
//                 onError={(e) => {
//                   e.target.src = '/assets/img/placeholder.jpg';
//                 }}
//               />
//             </div>
//           </a>
//         </div>

//         {/* Product info */}
//         <div className="flex-grow-1 d-flex flex-column p-2">
//           <div className="mb-2">
//             <ProductRating
//               averageRating={product.average_rating}
//               reviewsCount={product.reviews_count}
//             />
//           </div>

//           {/* Product Name with Subscription Indicator */}
//           <h3 className="mb-2 flex-grow-1">
//             <a className="d-block fs-sm fw-medium text-decoration-none" href={`/products/${product.slug}`}>
//               <span className="animate-target d-flex align-items-center gap-2" style={{ 
//                 display: '-webkit-box',
//                 WebkitLineClamp: '2',
//                 WebkitBoxOrient: 'vertical',
//                 overflow: 'hidden',
//                 lineHeight: '1.4',
//                 minHeight: '2.8em'
//               }}>
//                 <span className="flex-grow-1 text-truncate">{product.name}</span>
//                 {product.has_subscription && (
//                   <i className="ci-crown text-warning fs-sm flex-shrink-0" 
//                     title={`${product.subscription?.plan?.name} Plan`}
//                   />
//                 )}
//               </span>
//             </a>
//           </h3>

//           {/* Subscription Info Mini Display */}
//           {product.has_subscription && product.subscription && (
//             <div className="mb-2">
//               <div className="d-flex align-items-center gap-2">
//                 <span className={`badge rounded-pill bg-${product?.subscription?.plan?.plan?.badge_color || 'primary'} bg-opacity-10 text-${product?.subscription?.plan?.badge_color || 'primary'} fs-xs`}>
//                   <i className={`${product?.subscription?.plan?.plan?.icon || 'ci-crown'} me-1`} />
//                   {product?.subscription?.plan?.name}
//                 </span>
//                 {product.subscription.is_expiring_soon && (
//                   <span className="badge rounded-pill bg-warning bg-opacity-10 text-warning fs-xs" title={`Expires in ${product.subscription.days_remaining} days`}>
//                     <i className="ci-clock me-1" />
//                     {product.subscription.days_remaining}d left
//                   </span>
//                 )}
//               </div>
//             </div>
//           )}

//           {/* Price and basket button container */}
//           <div className="d-flex align-items-start justify-content-between gap-2 mt-auto">
//             {renderPrice()}
//             <div className="flex-shrink-0">
//               <BasketButton productId={product.id} productName={product.name} />
//             </div>
//           </div>
//         </div>

//         {/* Enhanced Details with Subscription Info */}
//         {showDetails && (
//           <div className="product-card-details position-absolute top-100 start-0 w-100 bg-body rounded-bottom shadow mt-n2 p-3 pt-1">
//             <span className="position-absolute top-0 start-0 w-100 bg-body mt-n2 py-2" />
//             <ul className="list-unstyled d-flex flex-column gap-2 m-0">
//               <li className="d-flex align-items-center">
//                 <span className="fs-xs">Category:</span>
//                 <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
//                 <span className="text-dark-emphasis fs-xs fw-medium text-end">
//                   {product.categories?.[0]?.name || 'Uncategorized'}
//                 </span>
//               </li>
              
//               {/* Subscription Details */}
//               {product.has_subscription && product.subscription && (
//                 <>
//                   <li className="d-flex align-items-center">
//                     <span className="fs-xs">Plan:</span>
//                     <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
//                     <span className="text-dark-emphasis fs-xs fw-medium text-end d-flex align-items-center gap-1 rounded-pill">
//                       <i className={`${product?.subscription?.plan?.icon || 'ci-crown'} text-${product?.subscription?.plan?.badge_color || 'primary'}`} />
//                       {product?.subscription?.plan?.name}
//                     </span>
//                   </li>
//                   <li className="d-flex align-items-center">
//                     <span className="fs-xs">Expires:</span>
//                     <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
//                     <span className={`fs-xs fw-medium text-end ${product.subscription.is_expiring_soon ? 'text-warning' : 'text-dark-emphasis'}`}>
//                       {product.subscription.days_remaining} days
//                     </span>
//                   </li>
//                 </>
//               )}
              
//               {product.metrics?.orders && (
//                 <li className="d-flex align-items-center">
//                   <span className="fs-xs">Orders:</span>
//                   <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
//                   <span className="text-dark-emphasis fs-xs fw-medium text-end">
//                     {product.metrics.orders}
//                   </span>
//                 </li>
//               )}
//               <li className="d-flex align-items-center">
//                 <span className="fs-xs">Stock:</span>
//                 <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
//                 <span className="text-dark-emphasis fs-xs fw-medium text-end">
//                   {product.stock} available
//                 </span>
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductSummary;


// v2 - Enhanced with Video Preview Support - working
// import { useState } from "react";
// import { FavoriteButton } from "./interactions/FavoriteButton";
// import { Link } from "react-router-dom";
// import { formatCurrency } from "../../utils/currencyUtils";
// import { BasketButton } from "./interactions/BasketButton";
// import { CompareButton } from "./interactions/CompareButton";
// import { ProductBadge, ProductRating } from "./ProductFeatures";

// const SubscriptionBadge = ({ subscription }) => {
//   // Safely access plan through multiple possible paths
//   const plan = subscription?.plan || subscription?.plans?.plan;
  
//   if (!plan) return null;
  
//   const { is_expiring_soon, days_remaining } = subscription;
  
//   const getBadgeClass = () => {
//     if (is_expiring_soon) return 'bg-warning text-dark';
//     return `bg-${plan.badge_color || 'primary'} text-white`;
//   };
  
//   const getIcon = () => {
//     return plan.icon || 'ci-crown';
//   };
  
//   return (
//     <div className="position-absolute top-0 end-0 z-3 m-2">
//       <span 
//         className={`badge ${getBadgeClass()} d-flex align-items-center gap-1 rounded-pill`}
//         title={`${plan.name} Plan${is_expiring_soon ? ` - Expires in ${days_remaining} days` : ''}`}
//       >
//         <i className={`${getIcon()} fs-xs`} />
//         <span className="fs-xs">{plan.name}</span>
//         {is_expiring_soon && (
//           <i className="ci-clock fs-xs ms-1" title="Expiring soon" />
//         )}
//       </span>
//     </div>
//   );
// };

// // Video Preview Component
// const VideoPreview = ({ videoUrl, posterUrl, productName, className = "" }) => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [showControls, setShowControls] = useState(false);

//   const handleMouseEnter = () => {
//     setShowControls(true);
//     if (!isPlaying) {
//       setIsPlaying(true);
//     }
//   };

//   const handleMouseLeave = () => {
//     setShowControls(false);
//     setIsPlaying(false);
//   };

//   const handleVideoEnd = () => {
//     setIsPlaying(false);
//   };

//   return (
//     <div 
//       className={`position-relative w-100 ${className}`}
//       style={{ paddingBottom: '100%' }}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <video
//         className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
//         poster={posterUrl || '/assets/img/placeholder.jpg'}
//         muted
//         loop={false}
//         playsInline
//         preload="metadata"
//         onEnded={handleVideoEnd}
//         ref={(video) => {
//           if (video) {
//             if (isPlaying) {
//               video.play().catch(() => {
//                 // Handle play error silently
//                 setIsPlaying(false);
//               });
//             } else {
//               video.pause();
//               video.currentTime = 0;
//             }
//           }
//         }}
//         onError={(e) => {
//           console.warn('Video failed to load:', videoUrl);
//           e.target.style.display = 'none';
//           // Fallback to poster or placeholder
//         }}
//       >
//         <source src={videoUrl} type="video/mp4" />
//         <source src={videoUrl} type="video/webm" />
//         <source src={videoUrl} type="video/ogg" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Video Play Indicator */}
//       {!isPlaying && (
//         <div className="position-absolute top-50 start-50 translate-middle">
//           <div className="btn btn-icon btn-lg btn-dark bg-dark bg-opacity-50 border-0">
//             <i className="ci-play-circle fs-2 text-white" />
//           </div>
//         </div>
//       )}

//       {/* Video Controls Overlay */}
//       {showControls && isPlaying && (
//         <div className="position-absolute bottom-0 start-0 w-100 bg-gradient-dark p-2">
//           <div className="d-flex align-items-center justify-content-between">
//             <small className="text-white opacity-75">
//               <i className="ci-video me-1" />
//               Video Preview
//             </small>
//             <div className="d-flex gap-1">
//               <button 
//                 type="button" 
//                 className="btn btn-icon btn-sm btn-outline-light border-0"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   e.stopPropagation();
//                   setIsPlaying(false);
//                 }}
//               >
//                 <i className="ci-pause fs-sm" />
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Fallback image if video fails */}
//       <img 
//         src={posterUrl || '/assets/img/placeholder.jpg'}
//         alt={productName}
//         className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
//         style={{ display: 'none' }}
//         onError={(e) => {
//           e.target.src = '/assets/img/placeholder.jpg';
//         }}
//       />
//     </div>
//   );
// };

// // Media Display Component (handles both images and videos)
// const MediaDisplay = ({ product, className = "" }) => {
//   // Determine if the first media item is a video
//   const firstMediaUrl = product.video_urls?.[0] || product.video || product.image_urls?.[0] || product.image;
//   const isVideo = product.video_urls?.[0] || product.video || 
//     (firstMediaUrl && (
//       firstMediaUrl.includes('.mp4') || 
//       firstMediaUrl.includes('.webm') || 
//       firstMediaUrl.includes('.ogg') ||
//       firstMediaUrl.includes('video')
//     ));

//   const posterImage = product.image_urls?.[0] || product.image || '/assets/img/placeholder.jpg';

//   if (isVideo) {
//     return (
//       <VideoPreview 
//         videoUrl={firstMediaUrl}
//         posterUrl={posterImage}
//         productName={product.name}
//         className={className}
//       />
//     );
//   }

//   // Default image display
//   return (
//     <div className={`position-relative w-100 ${className}`} style={{ paddingBottom: '100%' }}>
//       <img 
//         src={firstMediaUrl || '/assets/img/placeholder.jpg'}
//         alt={product.name}
//         className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
//         onError={(e) => {
//           e.target.src = '/assets/img/placeholder.jpg';
//         }}
//       />
//     </div>
//   );
// };

// // Enhanced Product Summary Component
// export const ProductSummary = ({
//   product,
//   showDetails = false,
//   showMetrics = false,
//   showBadge = true,
//   discountBadge = true,
//   showCheckbox = false,
//   showSubscription = true,
//   isChecked = false,
//   onCheckChange = () => {}
// }) => {
//   const [loadingState, setLoadingState] = useState({
//     favorites: false,
//     compare: false,
//     basket: false
//   });

//   const [inFavorites, setInFavorites] = useState(product.is_favorite || false);
//   const [inCompare, setInCompare] = useState(product.is_compared || false);

//   const badgeType = () => {
//     if (product.metrics?.orders > 10) return 'hot';
//     if (product.is_new) return 'new';
//     if (product.discount_price || product.discount) return 'sale';
//     if (product.stock < 5) return 'limited';
//     return null;
//   };

//   const renderPrice = () => {
//     const hasDiscount = product.discount_price || product.discount;
//     const discountedPrice = product.discount_price ||  (product.discount ? product.discount.calculated_price : null);
    
//     return (
//       <div className="h5 lh-1 mb-0 flex-grow-1 me-2">
//         {hasDiscount ? (
//           <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-1">
//             <span className="text-danger fw-medium">{formatCurrency(discountedPrice)}</span>
//             <div className="d-flex align-items-center gap-2">
//               <span className="text-decoration-line-through text-body-tertiary fs-sm">
//                 {formatCurrency(product.price, 'NGN', { short: true })}
//               </span>
//               {discountBadge && product.discount && (
//                 <span className="badge bg-danger bg-opacity-10 text-danger fs-xs">
//                   {product.discount.discount_type === 'percentage'
//                     ? `${product.discount.discount_value}% OFF`
//                     : `${formatCurrency(product.discount.discount_value)} OFF`}
//                 </span>
//               )}
//             </div>
//           </div>
//         ) : (
//           <span className="fw-medium"> {formatCurrency(product.price, 'NGN', { short: true })} </span>
//         )}
//       </div>
//     );
//   };

//   const handleCheckboxChange = (e) => {
//     if (onCheckChange) {
//       onCheckChange(e.target.checked);
//     }
//   };

//   return (
//     <div className='col' key={product.id}>
//       <div className="product-card animate-underline hover-effect-opacity bg-body rounded h-100 d-flex flex-column">
//         <div className="position-relative flex-shrink-0">
//           {/* Subscription Badge */}
//           {showSubscription && product.has_subscription && product.subscription && (
//             <SubscriptionBadge subscription={product.subscription} />
//           )}
          
//           {/* Checkbox for selection */}
//           {showCheckbox && (
//             <div className="position-absolute top-0 start-0 z-3 pt-1 ps-1 mt-2 ms-2">
//               <div className="form-check fs-lg">
//                 <input 
//                   type="checkbox" 
//                   className="form-check-input select-card-check" 
//                   checked={isChecked}
//                   onChange={handleCheckboxChange}
//                 />
//               </div>
//             </div>
//           )}

//           {/* Desktop action buttons - hide when checkbox is shown */}
//           {!showCheckbox && (
//             <div className="position-absolute top-0 start-0 z-2 hover-effect-target opacity-0 mt-3 ms-3">
//               <div className="d-flex flex-column gap-2">
//                 <FavoriteButton 
//                   productId={product.id}
//                   productName={product.name}
//                   initialFavorite={product.is_favorite}
//                   className="d-none d-lg-inline-flex"
//                 />
//                 <CompareButton 
//                   productId={product.id}
//                   productName={product.name}
//                   initialCompared={product.is_compared}
//                   className="d-none d-lg-inline-flex"
//                 />
//               </div>
//             </div>
//           )}

//           {/* Mobile dropdown menu - hide when checkbox is shown */}
//           {!showCheckbox && (
//             <div className="dropdown d-lg-none position-absolute bottom-0 start-0 z-2 mb-2 ms-2">
//               <button
//                 type="button"
//                 className="btn btn-icon btn-sm btn-secondary bg-body"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//                 aria-label="More actions"
//               >
//                 <i className="ci-more-vertical fs-lg" />
//               </button>
//               <ul className="dropdown-menu dropdown-menu-start fs-xs p-2" style={{ minWidth: 'auto' }}>
//                 <li>
//                   <FavoriteButton 
//                     productId={product.id}
//                     productName={product.name}
//                     initialFavorite={product.is_favorite}
//                     className="dropdown-item d-flex align-items-center"
//                   />
//                 </li>
//                 <li>
//                   <CompareButton 
//                     productId={product.id}
//                     productName={product.name}
//                     initialCompared={product.is_compared}
//                     showText={false}
//                     className="dropdown-item d-flex align-items-center"
//                   />
//                 </li>
//               </ul>
//             </div>
//           )}

//           {/* Product media link with video support */}
//           <a className="d-block rounded-top overflow-hidden" href={`/products/${product.slug}`}>
//             {showBadge && badgeType() && <ProductBadge type={badgeType()} />}
//             <MediaDisplay product={product} />
//           </a>
//         </div>

//         {/* Product info */}
//         <div className="flex-grow-1 d-flex flex-column p-2">
//           <div className="mb-2">
//             <ProductRating
//               averageRating={product.average_rating}
//               reviewsCount={product.reviews_count}
//             />
//           </div>

//           {/* Product Name with Subscription Indicator */}
//           <h3 className="mb-2 flex-grow-1">
//             <a className="d-block fs-sm fw-medium text-decoration-none" href={`/products/${product.slug}`}>
//               <span className="animate-target d-flex align-items-center gap-2" style={{ 
//                 display: '-webkit-box',
//                 WebkitLineClamp: '2',
//                 WebkitBoxOrient: 'vertical',
//                 overflow: 'hidden',
//                 lineHeight: '1.4',
//                 minHeight: '2.8em'
//               }}>
//                 <span className="flex-grow-1 text-truncate">{product.name}</span>
//                 {product.has_subscription && (
//                   <i className="ci-crown text-warning fs-sm flex-shrink-0" 
//                     title={`${product.subscription?.plan?.name} Plan`}
//                   />
//                 )}
//               </span>
//             </a>
//           </h3>

//           {/* Media Type Indicator */}
//           {(product.video_urls?.[0] || product.video) && (
//             <div className="mb-2">
//               <span className="badge rounded-pill bg-primary bg-opacity-10 text-primary fs-xs">
//                 <i className="ci-video me-1" />
//                 Video Content
//               </span>
//             </div>
//           )}

//           {/* Subscription Info Mini Display */}
//           {product.has_subscription && product.subscription && (
//             <div className="mb-2">
//               <div className="d-flex align-items-center gap-2">
//                 <span className={`badge rounded-pill bg-${product?.subscription?.plan?.plan?.badge_color || 'primary'} bg-opacity-10 text-${product?.subscription?.plan?.badge_color || 'primary'} fs-xs`}>
//                   <i className={`${product?.subscription?.plan?.plan?.icon || 'ci-crown'} me-1`} />
//                   {product?.subscription?.plan?.name}
//                 </span>
//                 {product.subscription.is_expiring_soon && (
//                   <span className="badge rounded-pill bg-warning bg-opacity-10 text-warning fs-xs" title={`Expires in ${product.subscription.days_remaining} days`}>
//                     <i className="ci-clock me-1" />
//                     {product.subscription.days_remaining}d left
//                   </span>
//                 )}
//               </div>
//             </div>
//           )}

//           {/* Price and basket button container */}
//           <div className="d-flex align-items-start justify-content-between gap-2 mt-auto">
//             {renderPrice()}
//             <div className="flex-shrink-0">
//               <BasketButton productId={product.id} productName={product.name} />
//             </div>
//           </div>
//         </div>

//         {/* Enhanced Details with Subscription Info */}
//         {showDetails && (
//           <div className="product-card-details position-absolute top-100 start-0 w-100 bg-body rounded-bottom shadow mt-n2 p-3 pt-1">
//             <span className="position-absolute top-0 start-0 w-100 bg-body mt-n2 py-2" />
//             <ul className="list-unstyled d-flex flex-column gap-2 m-0">
//               <li className="d-flex align-items-center">
//                 <span className="fs-xs">Category:</span>
//                 <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
//                 <span className="text-dark-emphasis fs-xs fw-medium text-end">
//                   {product.categories?.[0]?.name || 'Uncategorized'}
//                 </span>
//               </li>

//               {/* Media Type Detail */}
//               <li className="d-flex align-items-center">
//                 <span className="fs-xs">Media:</span>
//                 <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
//                 <span className="text-dark-emphasis fs-xs fw-medium text-end d-flex align-items-center gap-1">
//                   <i className={`${(product.video_urls?.[0] || product.video) ? 'ci-video text-primary' : 'ci-image text-secondary'}`} />
//                   {(product.video_urls?.[0] || product.video) ? 'Video' : 'Image'}
//                 </span>
//               </li>
              
//               {/* Subscription Details */}
//               {product.has_subscription && product.subscription && (
//                 <>
//                   <li className="d-flex align-items-center">
//                     <span className="fs-xs">Plan:</span>
//                     <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
//                     <span className="text-dark-emphasis fs-xs fw-medium text-end d-flex align-items-center gap-1 rounded-pill">
//                       <i className={`${product?.subscription?.plan?.icon || 'ci-crown'} text-${product?.subscription?.plan?.badge_color || 'primary'}`} />
//                       {product?.subscription?.plan?.name}
//                     </span>
//                   </li>
//                   <li className="d-flex align-items-center">
//                     <span className="fs-xs">Expires:</span>
//                     <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
//                     <span className={`fs-xs fw-medium text-end ${product.subscription.is_expiring_soon ? 'text-warning' : 'text-dark-emphasis'}`}>
//                       {product.subscription.days_remaining} days
//                     </span>
//                   </li>
//                 </>
//               )}
              
//               {product.metrics?.orders && (
//                 <li className="d-flex align-items-center">
//                   <span className="fs-xs">Orders:</span>
//                   <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
//                   <span className="text-dark-emphasis fs-xs fw-medium text-end">
//                     {product.metrics.orders}
//                   </span>
//                 </li>
//               )}
//               <li className="d-flex align-items-center">
//                 <span className="fs-xs">Stock:</span>
//                 <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
//                 <span className="text-dark-emphasis fs-xs fw-medium text-end">
//                   {product.stock} available
//                 </span>
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductSummary;

// v3
// v2 - Enhanced with Video Preview Support
import { useState } from "react";
import { FavoriteButton } from "./interactions/FavoriteButton";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/currencyUtils";
import { BasketButton } from "./interactions/BasketButton";
import { CompareButton } from "./interactions/CompareButton";
import { ProductBadge, ProductRating } from "./ProductFeatures";

const SubscriptionBadge = ({ subscription }) => {
  // Safely access plan through multiple possible paths
  const plan = subscription?.plan || subscription?.plans?.plan;
  
  if (!plan) return null;
  
  const { is_expiring_soon, days_remaining } = subscription;
  
  const getBadgeClass = () => {
    if (is_expiring_soon) return 'bg-warning text-dark';
    return `bg-${plan.badge_color || 'primary'} text-white`;
  };
  
  const getIcon = () => {
    return plan.icon || 'ci-crown';
  };
  
  return (
    <div className="position-absolute top-0 end-0 z-3 m-2">
      <span 
        className={`badge ${getBadgeClass()} d-flex align-items-center gap-1 rounded-pill`}
        title={`${plan.name} Plan${is_expiring_soon ? ` - Expires in ${days_remaining} days` : ''}`}
      >
        <i className={`${getIcon()} fs-xs`} />
        <span className="fs-xs">{plan.name}</span>
        {is_expiring_soon && (
          <i className="ci-clock fs-xs ms-1" title="Expiring soon" />
        )}
      </span>
    </div>
  );
};

// Video Preview Component
const VideoPreview = ({ videoUrl, posterUrl, productName, className = "" }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const handleMouseEnter = () => {
    setShowControls(true);
    if (!isPlaying) {
      setIsPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    setShowControls(false);
    setIsPlaying(false);
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <div 
      className={`position-relative w-100 ${className}`}
      style={{ paddingBottom: '100%' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
        poster={posterUrl || '/assets/img/placeholder.jpg'}
        muted
        loop={false}
        playsInline
        preload="metadata"
        onEnded={handleVideoEnd}
        ref={(video) => {
          if (video) {
            if (isPlaying) {
              video.play().catch(() => {
                // Handle play error silently
                setIsPlaying(false);
              });
            } else {
              video.pause();
              video.currentTime = 0;
            }
          }
        }}
        onError={(e) => {
          console.warn('Video failed to load:', videoUrl);
          e.target.style.display = 'none';
          // Fallback to poster or placeholder
        }}
      >
        <source src={videoUrl} type="video/mp4" />
        <source src={videoUrl} type="video/webm" />
        <source src={videoUrl} type="video/ogg" />
        Your browser does not support the video tag.
      </video>

      {/* Video Play Indicator */}
      {!isPlaying && (
        <div className="position-absolute bottom-0 start-0 m-2">
          <div className="btn btn-icon btn-sm btn-dark bg-dark bg-opacity-75 border-0">
            <i className="ci-play-circle fs-lg text-white" />
          </div>
        </div>
      )}

      {/* Video Controls Overlay */}
      {showControls && isPlaying && (
        <div className="position-absolute bottom-0 start-0 w-100 bg-gradient-dark p-2">
          <div className="d-flex align-items-center justify-content-between">
            <small className="text-white opacity-75">
              <i className="ci-video me-1" />
              Video Preview
            </small>
            <div className="d-flex gap-1">
              <button 
                type="button" 
                className="btn btn-icon btn-sm btn-outline-light border-0"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsPlaying(false);
                }}
              >
                <i className="ci-pause fs-sm" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Fallback image if video fails */}
      <img 
        src={posterUrl || '/assets/img/placeholder.jpg'}
        alt={productName}
        className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
        style={{ display: 'none' }}
        onError={(e) => {
          e.target.src = '/assets/img/placeholder.jpg';
        }}
      />
    </div>
  );
};

// Media Display Component (handles both images and videos)
const MediaDisplay = ({ product, className = "" }) => {
  // Determine if the first media item is a video
  const firstMediaUrl = product.video_urls?.[0] || product.video || product.image_urls?.[0] || product.image;
  const isVideo = product.video_urls?.[0] || product.video || 
    (firstMediaUrl && (
      firstMediaUrl.includes('.mp4') || 
      firstMediaUrl.includes('.webm') || 
      firstMediaUrl.includes('.ogg') ||
      firstMediaUrl.includes('video')
    ));

  const posterImage = product.image_urls?.[0] || product.image || '/assets/img/placeholder.jpg';

  if (isVideo) {
    return (
      <VideoPreview 
        videoUrl={firstMediaUrl}
        posterUrl={posterImage}
        productName={product.name}
        className={className}
      />
    );
  }

  // Default image display
  return (
    <div className={`position-relative w-100 ${className}`} style={{ paddingBottom: '100%' }}>
      <img 
        src={firstMediaUrl || '/assets/img/placeholder.jpg'}
        alt={product.name}
        className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
        onError={(e) => {
          e.target.src = '/assets/img/placeholder.jpg';
        }}
      />
    </div>
  );
};

// Enhanced Product Summary Component
export const ProductSummary = ({
  product,
  showDetails = false,
  showMetrics = false,
  showBadge = true,
  discountBadge = true,
  showCheckbox = false,
  showSubscription = true,
  isChecked = false,
  onCheckChange = () => {}
}) => {
  const [loadingState, setLoadingState] = useState({
    favorites: false,
    compare: false,
    basket: false
  });

  const [inFavorites, setInFavorites] = useState(product.is_favorite || false);
  const [inCompare, setInCompare] = useState(product.is_compared || false);

  const badgeType = () => {
    if (product.metrics?.orders > 10) return 'hot';
    if (product.is_new) return 'new';
    if (product.discount_price || product.discount) return 'sale';
    if (product.stock < 5) return 'limited';
    return null;
  };

  const renderPrice = () => {
    const hasDiscount = product.discount_price || product.discount;
    const discountedPrice = product.discount_price ||  (product.discount ? product.discount.calculated_price : null);
    
    return (
      <div className="h5 lh-1 mb-0 flex-grow-1 me-2">
        {hasDiscount ? (
          <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-1">
            <span className="text-danger fw-medium">{formatCurrency(discountedPrice)}</span>
            <div className="d-flex align-items-center gap-2">
              <span className="text-decoration-line-through text-body-tertiary fs-sm">
                {formatCurrency(product.price, 'NGN', { short: true })}
              </span>
              {discountBadge && product.discount && (
                <span className="badge bg-danger bg-opacity-10 text-danger fs-xs">
                  {product.discount.discount_type === 'percentage'
                    ? `${product.discount.discount_value}% OFF`
                    : `${formatCurrency(product.discount.discount_value)} OFF`}
                </span>
              )}
            </div>
          </div>
        ) : (
          <span className="fw-medium"> {formatCurrency(product.price, 'NGN', { short: true })} </span>
        )}
      </div>
    );
  };

  const handleCheckboxChange = (e) => {
    if (onCheckChange) {
      onCheckChange(e.target.checked);
    }
  };

  return (
    <div className='col' key={product.id}>
      <div className="product-card animate-underline hover-effect-opacity bg-body rounded h-100 d-flex flex-column">
        <div className="position-relative flex-shrink-0">
          {/* Subscription Badge */}
          {showSubscription && product.has_subscription && product.subscription && (
            <SubscriptionBadge subscription={product.subscription} />
          )}
          
          {/* Checkbox for selection */}
          {showCheckbox && (
            <div className="position-absolute top-0 start-0 z-3 pt-1 ps-1 mt-2 ms-2">
              <div className="form-check fs-lg">
                <input 
                  type="checkbox" 
                  className="form-check-input select-card-check" 
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
              </div>
            </div>
          )}

          {/* Desktop action buttons - hide when checkbox is shown */}
          {!showCheckbox && (
            <div className="position-absolute top-0 start-0 z-2 hover-effect-target opacity-0 mt-3 ms-3">
              <div className="d-flex flex-column gap-2">
                <FavoriteButton 
                  productId={product.id}
                  productName={product.name}
                  initialFavorite={product.is_favorite}
                  className="d-none d-lg-inline-flex"
                />
                <CompareButton 
                  productId={product.id}
                  productName={product.name}
                  initialCompared={product.is_compared}
                  className="d-none d-lg-inline-flex"
                />
              </div>
            </div>
          )}

          {/* Mobile dropdown menu - hide when checkbox is shown */}
          {!showCheckbox && (
            <div className="dropdown d-lg-none position-absolute bottom-0 start-0 z-2 mb-2 ms-2">
              <button
                type="button"
                className="btn btn-icon btn-sm btn-secondary bg-body"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                aria-label="More actions"
              >
                <i className="ci-more-vertical fs-lg" />
              </button>
              <ul className="dropdown-menu dropdown-menu-start fs-xs p-2" style={{ minWidth: 'auto' }}>
                <li>
                  <FavoriteButton 
                    productId={product.id}
                    productName={product.name}
                    initialFavorite={product.is_favorite}
                    className="dropdown-item d-flex align-items-center"
                  />
                </li>
                <li>
                  <CompareButton 
                    productId={product.id}
                    productName={product.name}
                    initialCompared={product.is_compared}
                    showText={false}
                    className="dropdown-item d-flex align-items-center"
                  />
                </li>
              </ul>
            </div>
          )}

          {/* Product media link with video support */}
          <a className="d-block rounded-top overflow-hidden" href={`/products/${product.slug}`}>
            {showBadge && badgeType() && <ProductBadge type={badgeType()} />}
            <MediaDisplay product={product} />
          </a>
        </div>

        {/* Product info */}
        <div className="flex-grow-1 d-flex flex-column p-2">
          <div className="mb-2">
            <ProductRating
              averageRating={product.average_rating}
              reviewsCount={product.reviews_count}
            />
          </div>

          {/* Product Name with Subscription Indicator */}
          <h3 className="mb-2 flex-grow-1">
            <a className="d-block fs-sm fw-medium text-decoration-none" href={`/products/${product.slug}`}>
              <span className="animate-target d-flex align-items-center gap-2" style={{ 
                display: '-webkit-box',
                WebkitLineClamp: '2',
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                lineHeight: '1.4',
                minHeight: '2.8em'
              }}>
                <span className="flex-grow-1 text-truncate">{product.name}</span>
                {product.has_subscription && (
                  <i className="ci-crown text-warning fs-sm flex-shrink-0" 
                    title={`${product.subscription?.plan?.name} Plan`}
                  />
                )}
              </span>
            </a>
          </h3>

          {/* Media Type Indicator */}
          {(product.video_urls?.[0] || product.video) && (
            <div className="mb-2">
              <span className="badge rounded-pill bg-primary bg-opacity-10 text-primary fs-xs">
                <i className="ci-video me-1" />
                Video Content
              </span>
            </div>
          )}

          {/* Subscription Info Mini Display */}
          {product.has_subscription && product.subscription && (
            <div className="mb-2">
              <div className="d-flex align-items-center gap-2">
                <span className={`badge rounded-pill bg-${product?.subscription?.plan?.plan?.badge_color || 'primary'} bg-opacity-10 text-${product?.subscription?.plan?.badge_color || 'primary'} fs-xs`}>
                  <i className={`${product?.subscription?.plan?.plan?.icon || 'ci-crown'} me-1`} />
                  {product?.subscription?.plan?.name}
                </span>
                {product.subscription.is_expiring_soon && (
                  <span className="badge rounded-pill bg-warning bg-opacity-10 text-warning fs-xs" title={`Expires in ${product.subscription.days_remaining} days`}>
                    <i className="ci-clock me-1" />
                    {product.subscription.days_remaining}d left
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Price and basket button container */}
          <div className="d-flex align-items-start justify-content-between gap-2 mt-auto">
            {renderPrice()}
            <div className="flex-shrink-0">
              <BasketButton productId={product.id} productName={product.name} />
            </div>
          </div>
        </div>

        {/* Enhanced Details with Subscription Info */}
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

              {/* Media Type Detail */}
              <li className="d-flex align-items-center">
                <span className="fs-xs">Media:</span>
                <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                <span className="text-dark-emphasis fs-xs fw-medium text-end d-flex align-items-center gap-1">
                  <i className={`${(product.video_urls?.[0] || product.video) ? 'ci-video text-primary' : 'ci-image text-secondary'}`} />
                  {(product.video_urls?.[0] || product.video) ? 'Video' : 'Image'}
                </span>
              </li>
              
              {/* Subscription Details */}
              {product.has_subscription && product.subscription && (
                <>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Plan:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                    <span className="text-dark-emphasis fs-xs fw-medium text-end d-flex align-items-center gap-1 rounded-pill">
                      <i className={`${product?.subscription?.plan?.icon || 'ci-crown'} text-${product?.subscription?.plan?.badge_color || 'primary'}`} />
                      {product?.subscription?.plan?.name}
                    </span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Expires:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                    <span className={`fs-xs fw-medium text-end ${product.subscription.is_expiring_soon ? 'text-warning' : 'text-dark-emphasis'}`}>
                      {product.subscription.days_remaining} days
                    </span>
                  </li>
                </>
              )}
              
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
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSummary;