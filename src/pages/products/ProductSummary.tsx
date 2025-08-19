// // import { useState } from "react";
// // import { FavoriteButton } from "./interactions/FavoriteButton";
// // import { Link } from "react-router-dom";
// // import { formatCurrency } from "../../utils/currencyUtils";
// // import { BasketButton } from "./interactions/BasketButton";
// // import { CompareButton } from "./interactions/CompareButton";
// // import { ProductBadge, ProductRating } from "./ProductFeatures";

// // export const ProductSummary = ({
// //   product,
// //   showDetails = false,
// //   showMetrics= false,
// //   showBadge = true,
// //   discountBadge = true,
// //   showCheckbox = false,
// //   isChecked = false,
// //   onCheckChange = () => {}
// // }) => {
// //   const [loadingState, setLoadingState] = useState({
// //     favorites: false,
// //     compare: false,
// //     basket: false
// //   });

// //   const [inFavorites, setInFavorites] = useState(product.is_favorite || false);
// //   const [inCompare, setInCompare] = useState(product.is_compared || false);


// //   // useProductInteractions(product.id, isAuthenticated);

// //   // Calculate discount percentage if available

// //   const badgeType = () => {
// //     if (product.metrics?.orders > 10) return 'hot';
// //     if (product.is_new) return 'new';
// //     if (product.discount_price || product.discount) return 'sale';
// //     if (product.stock < 5) return 'limited';
// //     return null;
// //   };

// //   const renderPrice = () => {
// //     const hasDiscount = product.discount_price || product.discount;
// //     const discountedPrice = product.discount_price || 
// //                           (product.discount ? product.discount.calculated_price : null);
    
// //     return (
// //       <div className="h5 lh-1 mb-0">
// //         {hasDiscount ? (
// //           <>
// //             <span className="text-danger">{formatCurrency(discountedPrice)}</span>
// //             <span className="text-decoration-line-through text-body-tertiary fs-sm ms-2">
// //               {formatCurrency(product.price)}
// //             </span>
// //             {discountBadge && product.discount && (
// //               <span className="badge bg-danger bg-opacity-10 text-danger fs-xs ms-2">
// //                 {product.discount.discount_type === 'percentage'
// //                   ? `${product.discount.discount_value}% OFF`
// //                   : `${formatCurrency(product.discount.discount_value)} OFF`}
// //               </span>
// //             )}
// //           </>
// //         ) : (
// //           formatCurrency(product.price)
// //         )}
// //       </div>
// //     );
// //   };

// //   const handleCheckboxChange = (e) => {
// //     if (onCheckChange) {
// //       onCheckChange(e.target.checked);
// //     }
// //   };

// //   return (
// //     <div className='col' key={product.id}>
// //       <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
// //         <div className="position-relative">
// //           {/* Checkbox for selection */}
// //           {showCheckbox && (
// //             <div className="position-absolute top-0 end-0 z-3 pt-1 pe-1 mt-2 me-2">
// //               <div className="form-check fs-lg">
// //                 <input 
// //                   type="checkbox" 
// //                   className="form-check-input select-card-check" 
// //                   checked={isChecked}
// //                   onChange={handleCheckboxChange}
// //                 />
// //               </div>
// //             </div>
// //           )}

// //           {/* Desktop action buttons - hide when checkbox is shown */}
// //           {!showCheckbox && (
// //             <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
// //               <div className="d-flex flex-column gap-2">
// //                 <FavoriteButton 
// //                   productId={product.id}
// //                   productName={product.name}
// //                   initialFavorite={product.is_favorite}
// //                   className="d-none d-lg-inline-flex"
// //                 />
// //                 <CompareButton 
// //                   productId={product.id}
// //                   productName={product.name}
// //                   initialCompared={product.is_compared}
// //                   className="d-none d-lg-inline-flex"
// //                 />
// //               </div>
// //             </div>
// //           )}

// //           {/* Mobile dropdown menu - hide when checkbox is shown */}
// //           {!showCheckbox && (
// //             <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
// //               <button
// //                 type="button"
// //                 className="btn btn-icon btn-sm btn-secondary bg-body"
// //                 data-bs-toggle="dropdown"
// //                 aria-expanded="false"
// //                 aria-label="More actions"
// //               >
// //                 <i className="ci-more-vertical fs-lg" />
// //               </button>
// //               <ul className="dropdown-menu dropdown-menu-end fs-xs p-2" style={{ minWidth: 'auto' }}>
// //                 <li>
// //                   <FavoriteButton 
// //                     productId={product.id}
// //                     productName={product.name}
// //                     initialFavorite={product.is_favorite}
// //                     className="dropdown-item d-flex align-items-center"
// //                   />
// //                 </li>
// //                 <li>
// //                   <CompareButton 
// //                     productId={product.id}
// //                     productName={product.name}
// //                     initialCompared={product.is_compared}
// //                     showText={false}
// //                     className="dropdown-item d-flex align-items-center"
// //                   />
// //                 </li>
// //               </ul>
// //             </div>
// //           )}

// //           {/* Product image link */}
// //           <Link className="d-block rounded-top overflow-hidden p-3 p-sm-4" to={`/products/${product.slug}`}>
// //             {showBadge && badgeType() && <ProductBadge type={badgeType()} />}
// //             <div className="ratio" style={{ '--cz-aspect-ratio': 'calc(240 / 258 * 100%)' }}>
// //               <img 
// //                 src={product.image_urls?.[0] || product.image || '/assets/img/placeholder.jpg'}
// //                 alt={product.name}
// //                 className="img-fluid object-fit-cover rounded"
// //                 onError={(e) => {
// //                   e.target.src = '/assets/img/placeholder.jpg';
// //                 }}
// //               />
// //             </div>
// //           </Link>
// //         </div>

// //         {/* Product info */}
// //         <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
// //           <ProductRating
// //             averageRating={product.average_rating}
// //             reviewsCount={product.reviews_count}
// //           />

// //           <h3 className="pb-1 mb-2">
// //             <Link className="d-block fs-sm fw-medium text-truncate" to={`/products/${product.slug}`}>
// //               <span className="animate-target">{product.name}</span>
// //             </Link>
// //           </h3>

// //           <div className="d-flex align-items-center justify-content-between">
// //             {renderPrice()}
// //             {/* {!showCheckbox && <BasketButton productId={product.id} productName={product.name} />} */}
// //             <BasketButton productId={product.id} productName={product.name} />
// //           </div>
// //         </div>

// //         {showDetails && (
// //           <div className="product-card-details position-absolute top-100 start-0 w-100 bg-body rounded-bottom shadow mt-n2 p-3 pt-1">
// //             <span className="position-absolute top-0 start-0 w-100 bg-body mt-n2 py-2" />
// //             <ul className="list-unstyled d-flex flex-column gap-2 m-0">
// //               <li className="d-flex align-items-center">
// //                 <span className="fs-xs">Category:</span>
// //                 <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
// //                 <span className="text-dark-emphasis fs-xs fw-medium text-end">
// //                   {product.categories?.[0]?.name || 'Uncategorized'}
// //                 </span>
// //               </li>
// //               {product.metrics?.orders && (
// //                 <li className="d-flex align-items-center">
// //                   <span className="fs-xs">Orders:</span>
// //                   <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
// //                   <span className="text-dark-emphasis fs-xs fw-medium text-end">
// //                     {product.metrics.orders}
// //                   </span>
// //                 </li>
// //               )}
// //               <li className="d-flex align-items-center">
// //                 <span className="fs-xs">Stock:</span>
// //                 <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
// //                 <span className="text-dark-emphasis fs-xs fw-medium text-end">
// //                   {product.stock} available
// //                 </span>
// //               </li>
// //               {product.trend_score && (
// //                 <li className="d-flex align-items-center">
// //                   <span className="fs-xs">Trend Score:</span>
// //                   <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
// //                   <span className="text-dark-emphasis fs-xs fw-medium text-end">
// //                     {product.trend_score.toFixed(1)}
// //                   </span>
// //                 </li>
// //               )}
// //             </ul>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductSummary;

// // v2
// import { useState } from "react";
// import { FavoriteButton } from "./interactions/FavoriteButton";
// import { Link } from "react-router-dom";
// import { formatCurrency } from "../../utils/currencyUtils";
// import { BasketButton } from "./interactions/BasketButton";
// import { CompareButton } from "./interactions/CompareButton";
// import { ProductBadge, ProductRating } from "./ProductFeatures";

// export const ProductSummary = ({
//   product,
//   showDetails = false,
//   showMetrics= false,
//   showBadge = true,
//   discountBadge = true,
//   showCheckbox = false,
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
//     const discountedPrice = product.discount_price || 
//                           (product.discount ? product.discount.calculated_price : null);
    
//     return (
//       <div className="h5 lh-1 mb-0 flex-grow-1 me-2">
//         {hasDiscount ? (
//           <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-1">
//             <span className="text-danger fw-medium">{formatCurrency(discountedPrice)}</span>
//             <div className="d-flex align-items-center gap-2">
//               <span className="text-decoration-line-through text-body-tertiary fs-sm">
//                 {formatCurrency(product.price)}
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
//           <span className="fw-medium">{formatCurrency(product.price)}</span>
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
//           {/* Checkbox for selection */}
//           {showCheckbox && (
//             <div className="position-absolute top-0 end-0 z-3 pt-1 pe-1 mt-2 me-2">
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
//             <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
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
//             <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
//               <button
//                 type="button"
//                 className="btn btn-icon btn-sm btn-secondary bg-body"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//                 aria-label="More actions"
//               >
//                 <i className="ci-more-vertical fs-lg" />
//               </button>
//               <ul className="dropdown-menu dropdown-menu-end fs-xs p-2" style={{ minWidth: 'auto' }}>
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
//           <Link className="d-block rounded-top overflow-hidden" to={`/products/${product.slug}`}>
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
//           </Link>
//         </div>

//         {/* Product info */}
//         <div className="flex-grow-1 d-flex flex-column p-3">
//           <div className="mb-2">
//             <ProductRating
//               averageRating={product.average_rating}
//               reviewsCount={product.reviews_count}
//             />
//           </div>

//           <h3 className="mb-2 flex-grow-1">
//             <Link className="d-block fs-sm fw-medium text-decoration-none" to={`/products/${product.slug}`}>
//               <span className="animate-target d-block" style={{ 
//                 display: '-webkit-box',
//                 '-webkit-line-clamp': '2',
//                 '-webkit-box-orient': 'vertical',
//                 overflow: 'hidden',
//                 lineHeight: '1.4',
//                 minHeight: '2.8em'
//               }}>
//                 {product.name}
//               </span>
//             </Link>
//           </h3>

//           {/* Price and basket button container */}
//           <div className="d-flex align-items-start justify-content-between gap-2 mt-auto">
//             {renderPrice()}
//             <div className="flex-shrink-0">
//               <BasketButton productId={product.id} productName={product.name} />
//             </div>
//           </div>
//         </div>

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
//               {product.trend_score && (
//                 <li className="d-flex align-items-center">
//                   <span className="fs-xs">Trend Score:</span>
//                   <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
//                   <span className="text-dark-emphasis fs-xs fw-medium text-end">
//                     {product.trend_score.toFixed(1)}
//                   </span>
//                 </li>
//               )}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductSummary;

// v2
import { useState } from "react";
import { FavoriteButton } from "./interactions/FavoriteButton";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/currencyUtils";
import { BasketButton } from "./interactions/BasketButton";
import { CompareButton } from "./interactions/CompareButton";
import { ProductBadge, ProductRating } from "./ProductFeatures";

// v3
// export const ProductSummary = ({
//   product,
//   showDetails = false,
//   showMetrics= false,
//   showBadge = true,
//   discountBadge = true,
//   showCheckbox = false,
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
//     const discountedPrice = product.discount_price || 
//                           (product.discount ? product.discount.calculated_price : null);
    
//     return (
//       <div className="h5 lh-1 mb-0 flex-grow-1 me-2">
//         {hasDiscount ? (
//           <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-1">
//             <span className="text-danger fw-medium">{formatCurrency(discountedPrice)}</span>
//             <div className="d-flex align-items-center gap-2">
//               <span className="text-decoration-line-through text-body-tertiary fs-sm">
//                 {formatCurrency(product.price)}
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
//           <span className="fw-medium">{formatCurrency(product.price)}</span>
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
//           {/* Checkbox for selection */}
//           {showCheckbox && (
//             <div className="position-absolute top-0 end-0 z-3 pt-1 pe-1 mt-2 me-2">
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
//             <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
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
//             <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
//               <button
//                 type="button"
//                 className="btn btn-icon btn-sm btn-secondary bg-body"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//                 aria-label="More actions"
//               >
//                 <i className="ci-more-vertical fs-lg" />
//               </button>
//               <ul className="dropdown-menu dropdown-menu-end fs-xs p-2" style={{ minWidth: 'auto' }}>
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
//           <Link className="d-block rounded-top overflow-hidden" to={`/products/${product.slug}`}>
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
//           </Link>
//         </div>

//         {/* Product info */}
//         <div className="flex-grow-1 d-flex flex-column p-3">
//           <div className="mb-2">
//             <ProductRating
//               averageRating={product.average_rating}
//               reviewsCount={product.reviews_count}
//             />
//           </div>

//           <h3 className="mb-2 flex-grow-1">
//             <Link className="d-block fs-sm fw-medium text-decoration-none" to={`/products/${product.slug}`}>
//               <span className="animate-target d-block" style={{ 
//                 display: '-webkit-box',
//                 WebkitLineClamp: '2',
//                 WebkitBoxOrient: 'vertical',
//                 overflow: 'hidden',
//                 lineHeight: '1.4',
//                 minHeight: '2.8em'
//               }}>
//                 {product.name}
//               </span>
//             </Link>
//           </h3>

//           {/* Price and basket button container */}
//           <div className="d-flex align-items-start justify-content-between gap-2 mt-auto">
//             {renderPrice()}
//             <div className="flex-shrink-0">
//               <BasketButton productId={product.id} productName={product.name} />
//             </div>
//           </div>
//         </div>

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
//               {product.trend_score && (
//                 <li className="d-flex align-items-center">
//                   <span className="fs-xs">Trend Score:</span>
//                   <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
//                   <span className="text-dark-emphasis fs-xs fw-medium text-end">
//                     {product.trend_score.toFixed(1)}
//                   </span>
//                 </li>
//               )}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductSummary;

// v4
// import { useState } from "react";

// Mock components for demonstration
// const FavoriteButton = ({ productId, productName, initialFavorite, className }) => (
//   <button className={`btn btn-icon btn-sm ${className}`} title="Add to favorites">
//     <i className={`ci-heart${initialFavorite ? '-filled text-danger' : ''}`} />
//   </button>
// );

// const BasketButton = ({ productId, productName }) => (
//   <button className="btn btn-icon btn-sm btn-secondary" title="Add to cart">
//     <i className="ci-shopping-cart" />
//   </button>
// );

// const CompareButton = ({ productId, productName, initialCompared, showText = true, className }) => (
//   <button className={className || "btn btn-icon btn-sm"} title="Compare">
//     <i className={`ci-repeat${initialCompared ? ' text-info' : ''}`} />
//     {showText && <span className="ms-1">Compare</span>}
//   </button>
// );

// const ProductBadge = ({ type }) => {
//   const badgeConfig = {
//     hot: { text: 'HOT', class: 'bg-danger' },
//     new: { text: 'NEW', class: 'bg-success' },
//     sale: { text: 'SALE', class: 'bg-warning' },
//     limited: { text: 'LIMITED', class: 'bg-info' }
//   };
  
//   const config = badgeConfig[type] || { text: type.toUpperCase(), class: 'bg-secondary' };
  
//   return (
//     <span className={`position-absolute top-0 start-0 badge ${config.class} text-white m-2 z-2`}>
//       {config.text}
//     </span>
//   );
// };

// const ProductRating = ({ averageRating, reviewsCount }) => (
//   <div className="d-flex align-items-center gap-1">
//     <div className="d-flex">
//       {[1,2,3,4,5].map(star => (
//         <i key={star} className={`ci-star${star <= averageRating ? '-filled text-warning' : ' text-body-tertiary'} fs-sm`} />
//       ))}
//     </div>
//     <span className="text-body-secondary fs-xs">({reviewsCount || 0})</span>
//   </div>
// );

// New Subscription Badge Component
// const SubscriptionBadge = ({ subscription }) => {
//   if (!subscription || !subscription.plan) return null;
  
//   const { plan, is_expiring_soon, days_remaining } = subscription;
  
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
//         className={`badge ${getBadgeClass()} d-flex align-items-center gap-1`}
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

  // const formatCurrency = (amount) => {
  //   return new Intl.NumberFormat('en-US', {
  //     style: 'currency',
  //     currency: 'USD'
  //   }).format(amount);
  // };

  const renderPrice = () => {
    const hasDiscount = product.discount_price || product.discount;
    const discountedPrice = product.discount_price || 
                          (product.discount ? product.discount.calculated_price : null);
    
    return (
      <div className="h5 lh-1 mb-0 flex-grow-1 me-2">
        {hasDiscount ? (
          <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-1">
            <span className="text-danger fw-medium">{formatCurrency(discountedPrice)}</span>
            <div className="d-flex align-items-center gap-2">
              <span className="text-decoration-line-through text-body-tertiary fs-sm">
                {formatCurrency(product.price)}
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
          <span className="fw-medium">{formatCurrency(product.price)}</span>
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

          {/* Product image link */}
          <a className="d-block rounded-top overflow-hidden" href={`/products/${product.slug}`}>
            {showBadge && badgeType() && <ProductBadge type={badgeType()} />}
            <div className="position-relative w-100" style={{ paddingBottom: '100%' }}>
              <img 
                src={product.image_urls?.[0] || product.image || '/assets/img/placeholder.jpg'}
                alt={product.name}
                className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                onError={(e) => {
                  e.target.src = '/assets/img/placeholder.jpg';
                }}
              />
            </div>
          </a>
        </div>

        {/* Product info */}
        <div className="flex-grow-1 d-flex flex-column p-3">
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
                <span className="flex-grow-1">{product.name}</span>
                {product.has_subscription && (
                  <i 
                    className="ci-crown text-warning fs-sm flex-shrink-0" 
                    title={`${product.subscription?.plan?.name} Plan`}
                  />
                )}
              </span>
            </a>
          </h3>

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