// const NewArrivals = () => {
//     return (
//       <section className="container pt-5 mt-1 mt-sm-2 mt-md-3 mt-lg-4">
//       {/* New arrivals (List) */}
//       <h2 className="h3 pb-2 pb-sm-3">New arrivals</h2>
//       <div className="row">
        
//         {/* Banner */}
//         <div className="col-lg-4" data-bs-theme="dark">
//           <div className="d-flex flex-column align-items-center justify-content-end h-100 text-center overflow-hidden rounded-5 px-4 px-lg-3 pt-4 pb-5" style={{background: '#1d2c41 url(/assets/img/home/electronics/banner/background.jpg) center/cover no-repeat'}}>
//             <div className="ratio animate-up-down position-relative z-2 me-lg-4" style={{maxWidth: '320px', marginBottom: '-19%', "cz-aspect-ratio": 'calc(690 / 640 * 100%)'}}>
//               <img src="/assets/img/home/electronics/banner/laptop.png" alt="Laptop" />
//             </div>
//             <h3 className="display-2 mb-2">MacBook</h3>
//             <p className="text-body fw-medium mb-4">Be Pro Anywhere</p>
//             <a className="btn btn-sm btn-primary" href="/products/slug">
//               From $1,199
//               <i className="ci-arrow-up-right fs-base ms-1 me-n1" />
//             </a>
//           </div>
//         </div>
//         {/* Product list */}
//         <div className="col-sm-6 col-lg-4 d-flex flex-column gap-3 pt-4 py-lg-4">
//           {/* Item */}
//           <div className="position-relative animate-underline d-flex align-items-center ps-xl-3">
//             <div className="ratio ratio-1x1 flex-shrink-0" style={{width: '110px'}}>
//               <img src="/assets/img/shop/electronics/thumbs/01.png" alt="Smart Watch" />
//             </div>
//             <div className="w-100 min-w-0 ps-2 ps-sm-3">
//               <div className="d-flex align-items-center gap-2 mb-2">
//                 <div className="d-flex gap-1 fs-xs">
//                   <i className="ci-star-filled text-warning" />
//                   <i className="ci-star-filled text-warning" />
//                   <i className="ci-star-filled text-warning" />
//                   <i className="ci-star-filled text-warning" />
//                   <i className="ci-star-filled text-warning" />
//                 </div>
//                 <span className="text-body-tertiary fs-xs">45</span>
//               </div>
//               <h4 className="mb-2">
//                 <a className="stretched-link d-block fs-sm fw-medium text-truncate" href="/products/slug">
//                   <span className="animate-target">Smart Watch Series 7, White</span>
//                 </a>
//               </h4>
//               <div className="h5 mb-0">$449.00</div>
//             </div>
//           </div>
//           {/* Item */}
//           <div className="position-relative animate-underline d-flex align-items-center ps-xl-3">
//             <div className="ratio ratio-1x1 flex-shrink-0" style={{width: '110px'}}>
//               <img src="/assets/img/shop/electronics/thumbs/03.png" width={110} alt="VR Glasses" />
//             </div>
//             <div className="w-100 min-w-0 ps-2 ps-sm-3">
//               <div className="d-flex align-items-center gap-2 mb-2">
//                 <div className="d-flex gap-1 fs-xs">
//                   <i className="ci-star-filled text-warning" />
//                   <i className="ci-star-filled text-warning" />
//                   <i className="ci-star-filled text-warning" />
//                   <i className="ci-star-half text-warning" />
//                   <i className="ci-star text-body-tertiary opacity-75" />
//                 </div>
//                 <span className="text-body-tertiary fs-xs">123</span>
//               </div>
//               <h4 className="mb-2">
//                 <a className="stretched-link d-block fs-sm fw-medium text-truncate" href="/products/slug">
//                   <span className="animate-target">VRB01 Virtual Reality Glasses</span>
//                 </a>
//               </h4>
//               <div className="h5 mb-0">$340.99</div>
//             </div>
//           </div>
//           {/* Item */}
//           <div className="position-relative animate-underline d-flex align-items-center ps-xl-3">
//             <div className="ratio ratio-1x1 flex-shrink-0" style={{width: '110px'}}>
//               <img src="/assets/img/shop/electronics/thumbs/05.png" width={110} alt="Bluetooth Headphones" />
//             </div>
//             <div className="w-100 min-w-0 ps-2 ps-sm-3">
//               <div className="d-flex align-items-center gap-2 mb-2">
//                 <div className="d-flex gap-1 fs-xs">
//                   <i className="ci-star-filled text-warning" />
//                   <i className="ci-star-filled text-warning" />
//                   <i className="ci-star-filled text-warning" />
//                   <i className="ci-star-filled text-warning" />
//                   <i className="ci-star text-body-tertiary opacity-75" />
//                 </div>
//                 <span className="text-body-tertiary fs-xs">34</span>
//               </div>
//               <h4 className="mb-2">
//                 <a className="stretched-link d-block fs-sm fw-medium text-truncate" href="/products/slug">
//                   <span className="animate-target">Wireless Bluetooth Headphones Sony</span>
//                 </a>
//               </h4>
//               <div className="h5 mb-0">$357.00</div>
//             </div>
//           </div>
//           {/* Item */}
//           <div className="position-relative animate-underline d-flex align-items-center ps-xl-3">
//             <div className="ratio ratio-1x1 flex-shrink-0" style={{width: '110px'}}>
//               <img src="/assets/img/shop/electronics/thumbs/07.png" width={110} alt="MacBook" />
//             </div>
//             <div className="w-100 min-w-0 ps-2 ps-sm-3">
//               <div className="d-flex align-items-center gap-2 mb-2">
//                 <div className="d-flex gap-1 fs-xs">
//                   <i className="ci-star-filled text-warning" />
//                   <i className="ci-star-filled text-warning" />
//                   <i className="ci-star-filled text-warning" />
//                   <i className="ci-star-filled text-warning" />
//                   <i className="ci-star-filled text-warning" />
//                 </div>
//                 <span className="text-body-tertiary fs-xs">34</span>
//               </div>
//               <h4 className="mb-2">
//                 <a className="stretched-link d-block fs-sm fw-medium text-truncate" href="/products/slug">
//                   <span className="animate-target">Laptop Apple MacBook Pro 13 M2</span>
//                 </a>
//               </h4>
//               <div className="h5 mb-0">$1,200.00</div>
//             </div>
//           </div>
//         </div>
//         {/* Product list */}
//         <div className="col-sm-6 col-lg-4 d-flex flex-column gap-3 pt-3 py-lg-4">
//           {/* Item */}
//           <div className="position-relative animate-underline d-flex align-items-center ps-xl-3">
//             <div className="ratio ratio-1x1 flex-shrink-0" style={{width: '110px'}}>
//               <img src="/assets/img/shop/electronics/thumbs/02.png" width={110} alt="iPad Pro" />
//             </div>
//             <div className="w-100 min-w-0 ps-2 ps-sm-3">
//               <div className="d-flex align-items-center gap-2 mb-2">
//                 <div className="d-flex gap-1 fs-xs">
//                   <i className="ci-star-filled text-warning" />
//                   <i className="ci-star-filled text-warning" />
//                   <i className="ci-star-filled text-warning" />
//                   <i className="ci-star-filled text-warning" />
//                   <i className="ci-star text-body-tertiary opacity-75" />
//                 </div>
//                 <span className="text-body-tertiary fs-xs">126</span>
//               </div>
//               <h4 className="mb-2">
//                 <a className="stretched-link d-block fs-sm fw-medium text-truncate" href="/products/slug">
//                   <span className="animate-target">Tablet Apple iPad Air M1</span>
//                 </a>
//               </h4>
//               <div className="h5 mb-0">$540.00</div>
//             </div>
//           </div>
//           {/* Item */}
//           <div className="position-relative animate-underline d-flex align-items-center ps-xl-3">
//             <div className="ratio ratio-1x1 flex-shrink-0" style={{width: '110px'}}>
//               <img src="/assets/img/shop/electronics/thumbs/04.png" width={110} alt="AirPods 2 Pro" />
//             </div>
//             <div className="w-100 min-w-0 ps-2 ps-sm-3">
//               <div className="d-flex align-items-center gap-2 mb-2">
//                 <div className="d-flex gap-1 fs-xs">
//                   <i className="ci-star-filled text-warning" />
//                   <i className="ci-star-filled text-warning" />
//                   <i className="ci-star-filled text-warning" />
//                   <i className="ci-star-filled text-warning" />
//                   <i className="ci-star-filled text-warning" />
//                 </div>
//                 <span className="text-body-tertiary fs-xs">340</span>
//               </div>
//               <h4 className="mb-2">
//                 <a className="stretched-link d-block fs-sm fw-medium text-truncate" href="/products/slug"><span className="animate-target">Headphones Apple AirPods 2 Pro</span></a>
//               </h4>
//               <div className="h5 mb-0">$209.99 <del className="text-body-tertiary fs-sm fw-normal">$356.00</del></div>
//             </div>
//           </div>
//           {/* Item */}
//           <div className="position-relative animate-underline d-flex align-items-center ps-xl-3">
//             <div className="ratio ratio-1x1 flex-shrink-0" style={{width: '110px'}}>
//               <img src="/assets/img/shop/electronics/thumbs/06.png" width={110} alt="Power Bank" />
//             </div>
//             <div className="w-100 min-w-0 ps-2 ps-sm-3">
//               <div className="d-flex align-items-center gap-2 mb-2">
//                 <div className="d-flex gap-1 fs-xs">
//                   <i className="ci-star-filled text-warning" />
//                   <i className="ci-star-filled text-warning" />
//                   <i className="ci-star-filled text-warning" />
//                   <i className="ci-star-filled text-warning" />
//                   <i className="ci-star text-body-tertiary opacity-75" />
//                 </div>
//                 <span className="text-body-tertiary fs-xs">29</span>
//               </div>
//               <h4 className="mb-2">
//                 <a className="stretched-link d-block fs-sm fw-medium text-truncate" href="/products/slug">
//                   <span className="animate-target">Power Bank PBS 10000 mAh Black</span>
//                 </a>
//               </h4>
//               <div className="h5 mb-0">$49.99</div>
//             </div>
//           </div>
//           {/* Item */}
//           <div className="position-relative animate-underline d-flex align-items-center ps-xl-3">
//             <div className="ratio ratio-1x1 flex-shrink-0" style={{width: '110px'}}>
//               <img src="/assets/img/shop/electronics/thumbs/08.png" width={110} alt="iPhone 14" />
//             </div>
//             <div className="w-100 min-w-0 ps-2 ps-sm-3">
//               <div className="d-flex align-items-center gap-2 mb-2">
//                 <div className="d-flex gap-1 fs-xs">
//                   <i className="ci-star-filled text-warning" />
//                   <i className="ci-star-filled text-warning" />
//                   <i className="ci-star-filled text-warning" />
//                   <i className="ci-star-filled text-warning" />
//                   <i className="ci-star-filled text-warning" />
//                 </div>
//                 <span className="text-body-tertiary fs-xs">12</span>
//               </div>
//               <h4 className="mb-2">
//                 <a className="stretched-link d-block fs-sm fw-medium text-truncate" href="/products/slug">
//                   <span className="animate-target">Apple iPhone 14 128GB White</span>
//                 </a>
//               </h4>
//               <div className="h5 mb-0">$899.00 <del className="text-body-tertiary fs-sm fw-normal">$958.00</del></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//     )
//   }

// export default NewArrivals

// 

// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { NotificationService } from '../../services/local/NotificationService';
// import LoadingSpinner from '../../components/shared/LoadingSpinner';
// import { ProductAxiosService } from '../../services/net/ProductAxiosService';
// import ProductCard from '../products/ProductCard';
// // import renderRatingStar '../../utils/RenderRatingStar';
// import { ProductRating } from '../products/ProductFeatures';
// import { formatCurrency } from '../../utils/currencyUtils';

// const NewArrivals = () => {
//   const [products, setProducts] = useState([]);
//   const [bannerProduct, setBannerProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [pagination, setPagination] = useState({
//     currentPage: 1,
//     totalPages: 1,
//     hasNext: false,
//     hasPrev: false
//   });

//   useEffect(() => {
//     const fetchNewArrivals = async () => {
//       try {
//         setLoading(true);
//         // const response = await OffersAxiosService.getNewArrivals();
//         const response = await ProductAxiosService.getNewArrivals()
        
//         if (response.data.success) {
//           setProducts(response.data.products);
//           setBannerProduct(response.data.banner_product || null);
          
//           setPagination({
//             currentPage: response.data.page_meta.current_page_number,
//             totalPages: response.data.page_meta.total_pages_count,
//             hasNext: response.data.page_meta.has_next_page,
//             hasPrev: response.data.page_meta.has_prev_page
//           });
//         }
//       } catch (error) {
//         NotificationService.showDialog('Failed to load new arrivals');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNewArrivals();
//   }, []);


//   if (loading) {
//     return (
//       <section className="container pt-5 mt-1 mt-sm-2 mt-md-3 mt-lg-4">
//         <LoadingSpinner />
//       </section>
//     );
//   }

//   return (
//     <section className="container pt-5 mt-1 mt-sm-2 mt-md-3 mt-lg-4">
//       <h2 className="h3 pb-2 pb-sm-3">New Arrivals</h2>
      
//       <div className="row">
//         {/* Banner Product */}
//         {bannerProduct && (
//           <div className="col-lg-4" data-bs-theme="dark">
//             <div 
//               className="d-flex flex-column align-items-center justify-content-end h-100 text-center overflow-hidden rounded-5 px-4 px-lg-3 pt-4 pb-5" 
//               style={{ 
//                 background: `#1d2c41 url(${bannerProduct.image_urls[0] || '/assets/img/home/electronics/banner/background.jpg'}) center/cover no-repeat`
//               }}
//             >
//               <div 
//                 className="ratio animate-up-down position-relative z-2 me-lg-4" 
//                 style={{ 
//                   maxWidth: '320px', 
//                   marginBottom: '-19%', 
//                   aspectRatio: 'calc(690 / 640 * 100%)'
//                 }}
//               >
//                 <img 
//                   src={bannerProduct.image_urls[0] || '/assets/img/home/electronics/banner/laptop.png'} 
//                   alt={bannerProduct.name} 
//                 />
//               </div>
//               <h3 className="display-2 mb-2">{bannerProduct.name}</h3>
//               <p className="text-body fw-medium mb-4">{bannerProduct?.description?.substring(0, 50)}...</p>
//               <Link 
//                 className="btn btn-sm btn-primary" 
//                 to={`/products/${bannerProduct.slug}`}
//               >
//                 From {bannerProduct.price?.toFixed(2) ?? 'N/A'}
//                 <i className="ci-arrow-up-right fs-base ms-1 me-n1" />
//               </Link>
//             </div>
//           </div>
//         )}
        
//         {/* Product Lists */}
//         <div className="col-sm-6 col-lg-4 d-flex flex-column gap-3 pt-4 py-lg-4">
//           {products.slice(0, 4).map((product, index) => (
//             <div key={product.id} className="position-relative animate-underline d-flex align-items-center ps-xl-3">
//               <div className="ratio ratio-1x1 flex-shrink-0" style={{ width: '110px' }}>
//                 <img 
//                   src={product.image_urls[0] || '/assets/img/shop/electronics/thumbs/01.png'} 
//                   alt={product.name} 
//                   className="object-fit-cover rounded"
//                 />
//               </div>
//               <div className="w-100 min-w-0 ps-2 ps-sm-3">
//                 <div className="d-flex align-items-center gap-2 mb-2">
//                   <div className="d-flex gap-1 fs-xs">
//                     {/* {ProductRating(product.average_rating)} */}
//                     <ProductRating 
//                 averageRating={product.average_rating} 
//                 reviewsCount={product.reviews_count} 
//               />
//                   </div>
//                   {/* <span className="text-body-tertiary fs-xs">{product.reviews_count}</span> */}
//                 </div>
//                 <h4 className="mb-2">
//                   <Link 
//                     className="stretched-link d-block fs-sm fw-medium text-truncate" 
//                     to={`/products/${product.slug}`}
//                   >
//                     <span className="animate-target">{product.name}</span>
//                   </Link>
//                 </h4>
//                 {/* <div className="h5 mb-0">${product.price.toFixed(2)}</div> */}
//                 <div className="h5 mb-0">{formatCurrency(product.price, 'NGN', { short: true })}</div>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         <div className="col-sm-6 col-lg-4 d-flex flex-column gap-3 pt-3 py-lg-4">

//           {products.slice(4, 8).map((product, index) => (
//             <div key={product.id} className="position-relative animate-underline d-flex align-items-center ps-xl-3">
//               <div className="ratio ratio-1x1 flex-shrink-0" style={{ width: '110px' }}>
//                 <img 
//                   src={product.image_urls[0] || '/assets/img/shop/electronics/thumbs/01.png'} 
//                   alt={product.name} 
//                   className="object-fit-cover"
//                 />
//               </div>
//               <div className="w-100 min-w-0 ps-2 ps-sm-3">
//                 <div className="d-flex align-items-center gap-2 mb-2">
//                   <div className="d-flex gap-1 fs-xs">
//                     {/* {ProductRating(product.average_rating)} */}
//                     <ProductRating 
//                 averageRating={product.average_rating} 
//                 reviewsCount={product.average_rating} 
//                 // reviewsCount={product.reviews_count} 
//               />
//                   </div>
//                   {/* <span className="text-body-tertiary fs-xs">{product.reviews_count}</span> */}
//                 </div>
//                 <h4 className="mb-2">
//                   <Link 
//                     className="stretched-link d-block fs-sm fw-medium text-truncate" 
//                     to={`/products/${product.slug}`}
//                   >
//                     <span className="animate-target">{product.name}</span>
//                   </Link>
//                 </h4>
//                 <div className="h5 mb-0">{formatCurrency(product.price, 'NGN', { short: true })}</div>
//               </div>
//             </div>
//           ))}


//         </div>
//       </div>
      
//       {/* Pagination Controls */}
//       {/* {pagination.totalPages > 1 && (
//         <nav className="d-flex justify-content-center pt-4">
//           <ul className="pagination">
//             {pagination.hasPrev && (
//               <li className="page-item">
//                 <button className="page-link" onClick={() => loadPage(pagination.currentPage - 1)}>
//                   <i className="ci-arrow-left me-2" />
//                   Prev
//                 </button>
//               </li>
//             )}
            
//             {Array.from({ length: Math.min(5, pagination.totalPages) }, (_, i) => {
//               const pageNum = i + 1;
//               return (
//                 <li key={pageNum} className={`page-item ${pagination.currentPage === pageNum ? 'active' : ''}`}>
//                   <button className="page-link" onClick={() => loadPage(pageNum)}>
//                     {pageNum}
//                   </button>
//                 </li>
//               );
//             })}
            
//             {pagination.hasNext && (
//               <li className="page-item">
//                 <button className="page-link" onClick={() => loadPage(pagination.currentPage + 1)}>
//                   Next
//                   <i className="ci-arrow-right ms-2" />
//                 </button>
//               </li>
//             )}
//           </ul>
//         </nav>
//       )} */}
//     </section>
//   );
// };

// export default NewArrivals;

// v2
// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { NotificationService } from '../../services/local/NotificationService';
// import LoadingSpinner from '../../components/shared/LoadingSpinner';
// import { ProductAxiosService } from '../../services/net/ProductAxiosService';
// import ProductCard from '../products/ProductCard';
// import { ProductRating } from '../products/ProductFeatures';
// import { formatCurrency } from '../../utils/currencyUtils';

// // Helper function to check if URL is a video
// const isVideoUrl = (url) => {
//   if (!url) return false;
//   const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi', '.mkv'];
//   return videoExtensions.some(ext => url.toLowerCase().includes(ext));
// };

// // Media component that handles both images and videos
// const MediaPreview = ({ mediaUrl, altText, className = "", style = {} }) => {
//   const [isHovered, setIsHovered] = useState(false);
  
//   if (isVideoUrl(mediaUrl)) {
//     return (
//       <video
//         src={mediaUrl}
//         alt={altText}
//         className={className}
//         style={style}
//         muted
//         loop
//         playsInline
//         autoPlay={isHovered}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         onLoadedData={(e) => {
//           // Pause initially, will play on hover
//           if (!isHovered) {
//             e.target.pause();
//           }
//         }}
//       />
//     );
//   }
  
//   return (
//     <img 
//       src={mediaUrl || '/assets/img/shop/electronics/thumbs/01.png'} 
//       alt={altText}
//       className={className}
//       style={style}
//     />
//   );
// };

// const NewArrivals = () => {
//   const [products, setProducts] = useState([]);
//   const [bannerProduct, setBannerProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [_, setPagination] = useState({
//     currentPage: 1,
//     totalPages: 1,
//     hasNext: false,
//     hasPrev: false
//   });

//   useEffect(() => {
//     const fetchNewArrivals = async () => {
//       try {
//         setLoading(true);
//         const response = await ProductAxiosService.getNewArrivals({}, '')
        
//         if (response.data.success) {
//           setProducts(response.data.products);
//           setBannerProduct(response.data.banner_product || null);
          
//           setPagination({
//             currentPage: response.data.page_meta.current_page_number,
//             totalPages: response.data.page_meta.total_pages_count,
//             hasNext: response.data.page_meta.has_next_page,
//             hasPrev: response.data.page_meta.has_prev_page
//           });
//         }
//       } catch (error) {
//         NotificationService.showDialog('Failed to load new arrivals');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNewArrivals();
//   }, []);

//   if (loading) {
//     return (
//       <section className="container pt-5 mt-1 mt-sm-2 mt-md-3 mt-lg-4">
//         <LoadingSpinner />
//       </section>
//     );
//   }

//   return (
//     <section className="container pt-5 mt-1 mt-sm-2 mt-md-3 mt-lg-4">
//       <h2 className="h3 pb-2 pb-sm-3">New Arrivals</h2>
      
//       <div className="row">
//         {/* Banner Product */}
//         {bannerProduct && (
//           <div className="col-lg-4" data-bs-theme="dark">
//             <div 
//               className="d-flex flex-column align-items-center justify-content-end h-100 text-center overflow-hidden rounded-5 px-4 px-lg-3 pt-4 pb-5" 
//               style={{ 
//                 background: `#1d2c41 url(${!isVideoUrl(bannerProduct.image_urls[0]) ? (bannerProduct.image_urls[0] || '/assets/img/home/electronics/banner/background.jpg') : '/assets/img/home/electronics/banner/background.jpg'}) center/cover no-repeat`
//               }}
//             >
//               <div 
//                 className="ratio animate-up-down position-relative z-2 me-lg-4" 
//                 style={{ 
//                   maxWidth: '320px', 
//                   marginBottom: '-19%', 
//                   aspectRatio: 'calc(690 / 640 * 100%)'
//                 }}
//               >
//                 <MediaPreview
//                   mediaUrl={bannerProduct.image_urls[0]}
//                   altText={bannerProduct.name}
//                 />
//               </div>
//               <h3 className="display-2 mb-2">{bannerProduct.name}</h3>
//               <p className="text-body fw-medium mb-4">{bannerProduct?.description?.substring(0, 50)}...</p>
//               <Link 
//                 className="btn btn-sm btn-primary" 
//                 to={`/products/${bannerProduct.slug}`}
//               >
//                 From {formatCurrency(bannerProduct.price, 'NGN', { short: true })}
//                 <i className="ci-arrow-up-right fs-base ms-1 me-n1" />
//               </Link>
//             </div>
//           </div>
//         )}
        
//         {/* Product Lists - First Column */}
//         <div className="col-sm-6 col-lg-4 d-flex flex-column gap-3 pt-4 py-lg-4">
//           {products.slice(0, 4).map((product) => (
//             <div key={product.id} className="position-relative animate-underline d-flex align-items-center ps-xl-3">
//               <div className="ratio ratio-1x1 flex-shrink-0" style={{ width: '110px' }}>
//                 <MediaPreview
//                   mediaUrl={product.image_urls[0]}
//                   altText={product.name}
//                   className="object-fit-cover rounded"
//                 />
//               </div>
//               <div className="w-100 min-w-0 ps-2 ps-sm-3">
//                 <div className="d-flex align-items-center gap-2 mb-2">
//                   <div className="d-flex gap-1 fs-xs">
//                     <ProductRating 
//                       averageRating={product.average_rating} 
//                       reviewsCount={product.reviews_count} 
//                     />
//                   </div>
//                 </div>
//                 <h4 className="mb-2">
//                   <Link 
//                     className="stretched-link d-block fs-sm fw-medium text-truncate" 
//                     to={`/products/${product.slug}`}
//                   >
//                     <span className="animate-target">{product.name}</span>
//                   </Link>
//                 </h4>
//                 <div className="h5 mb-0">{formatCurrency(product.price, 'NGN', { short: true })}</div>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         {/* Product Lists - Second Column */}
//         <div className="col-sm-6 col-lg-4 d-flex flex-column gap-3 pt-3 py-lg-4">
//           {products.slice(4, 8).map((product) => (
//             <div key={product.id} className="position-relative animate-underline d-flex align-items-center ps-xl-3">
//               <div className="ratio ratio-1x1 flex-shrink-0" style={{ width: '110px' }}>
//                 <MediaPreview
//                   mediaUrl={product.image_urls[0]}
//                   altText={product.name}
//                   className="object-fit-cover rounded"
//                 />
//               </div>
//               <div className="w-100 min-w-0 ps-2 ps-sm-3">
//                 <div className="d-flex align-items-center gap-2 mb-2">
//                   <div className="d-flex gap-1 fs-xs">
//                     <ProductRating 
//                       averageRating={product.average_rating} 
//                       reviewsCount={product.reviews_count} 
//                     />
//                   </div>
//                 </div>
//                 <h4 className="mb-2">
//                   <Link 
//                     className="stretched-link d-block fs-sm fw-medium text-truncate" 
//                     to={`/products/${product.slug}`}
//                   >
//                     <span className="animate-target">{product.name}</span>
//                   </Link>
//                 </h4>
//                 <div className="h5 mb-0">{formatCurrency(product.price, 'NGN', { short: true })}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewArrivals;

// v3
// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { NotificationService } from '../../services/local/NotificationService';
// import LoadingSpinner from '../../components/shared/LoadingSpinner';
// import { ProductAxiosService } from '../../services/net/ProductAxiosService';
// import { ProductRating } from '../products/ProductFeatures';
// import { formatCurrency } from '../../utils/currencyUtils';
// import { useRef } from 'react';

// // Helper function to check if URL is a video
// const isVideoUrl = (url) => {
//   if (!url) return false;
//   const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi', '.mkv'];
//   return videoExtensions.some(ext => url.toLowerCase().includes(ext));
// };

// // Media component that handles both images and videos
// const MediaPreview = ({ mediaUrl, altText, className = "", style = {} }) => {
//   const videoRef = useRef(null);
  
//   const handleMouseEnter = () => {
//     if (videoRef.current && isVideoUrl(mediaUrl)) {
//       videoRef.current.play().catch(err => console.log('Video play failed:', err));
//     }
//   };
  
//   const handleMouseLeave = () => {
//     if (videoRef.current && isVideoUrl(mediaUrl)) {
//       videoRef.current.pause();
//       videoRef.current.currentTime = 0; // Reset to beginning
//     }
//   };
  
//   if (isVideoUrl(mediaUrl)) {
//     return (
//       <div 
//         className="position-relative w-100 h-100"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         style={{ cursor: 'pointer' }}
//       >
//         <video
//           ref={videoRef}
//           src={mediaUrl}
//           className={className}
//           style={{
//             ...style,
//             width: '100%',
//             height: '100%',
//           }}
//           muted
//           loop
//           playsInline
//           preload="metadata"
//           controls={false}
//         />
//         {/* Play icon overlay */}
//         <div 
//           className="position-absolute d-flex align-items-center justify-content-center"
//           style={{
//             bottom: '8px',
//             left: '8px',
//             width: '24px',
//             height: '24px',
//             backgroundColor: 'rgba(0, 0, 0, 0.6)',
//             borderRadius: '50%',
//             zIndex: 2
//           }}
//         >
//           <i className="ci-play text-white" style={{ fontSize: '10px', marginLeft: '1px' }}></i>
//         </div>
//       </div>
//     );
//   }
  
//   return (
//     <img 
//       src={mediaUrl || '/assets/img/shop/electronics/thumbs/01.png'} 
//       alt={altText}
//       className={className}
//       style={style}
//     />
//   );
// };

// const NewArrivals = () => {
//   const [products, setProducts] = useState([]);
//   const [bannerProduct, setBannerProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [pagination, setPagination] = useState({
//     currentPage: 1,
//     totalPages: 1,
//     hasNext: false,
//     hasPrev: false
//   });

//   useEffect(() => {
//     const fetchNewArrivals = async () => {
//       try {
//         setLoading(true);
//         const response = await ProductAxiosService.getNewArrivals()
        
//         if (response.data.success) {
//           setProducts(response.data.products);
//           setBannerProduct(response.data.banner_product || null);
          
//           setPagination({
//             currentPage: response.data.page_meta.current_page_number,
//             totalPages: response.data.page_meta.total_pages_count,
//             hasNext: response.data.page_meta.has_next_page,
//             hasPrev: response.data.page_meta.has_prev_page
//           });
//         }
//       } catch (error) {
//         NotificationService.showDialog('Failed to load new arrivals');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNewArrivals();
//   }, []);

//   if (loading) {
//     return (
//       <section className="container pt-5 mt-1 mt-sm-2 mt-md-3 mt-lg-4">
//         <LoadingSpinner />
//       </section>
//     );
//   }

//   return (
//     <section className="container pt-5 mt-1 mt-sm-2 mt-md-3 mt-lg-4">
//       <h2 className="h3 pb-2 pb-sm-3">New Arrivals</h2>
      
//       <div className="row">
//         {/* Banner Product */}
//         {bannerProduct && (
//           <div className="col-lg-4" data-bs-theme="dark">
//             <div 
//               className="d-flex flex-column align-items-center justify-content-end h-100 text-center overflow-hidden rounded-5 px-4 px-lg-3 pt-4 pb-5" 
//               style={{ 
//                 background: `#1d2c41 url(${!isVideoUrl(bannerProduct.image_urls[0]) ? (bannerProduct.image_urls[0] || '/assets/img/home/electronics/banner/background.jpg') : '/assets/img/home/electronics/banner/background.jpg'}) center/cover no-repeat`
//               }}
//             >
//               <div 
//                 className="ratio animate-up-down position-relative z-2 me-lg-4" 
//                 style={{ 
//                   maxWidth: '320px', 
//                   marginBottom: '-19%', 
//                   aspectRatio: 'calc(690 / 640 * 100%)'
//                 }}
//               >
//                 <MediaPreview
//                   mediaUrl={bannerProduct.image_urls[0]}
//                   altText={bannerProduct.name}
//                 />
//               </div>
//               <h3 className="display-2 mb-2">{bannerProduct.name}</h3>
//               <p className="text-body fw-medium mb-4">{bannerProduct?.description?.substring(0, 50)}...</p>
//               <Link 
//                 className="btn btn-sm btn-primary" 
//                 to={`/products/${bannerProduct.slug}`}
//               >
//                 From {formatCurrency(bannerProduct.price, 'NGN', { short: true })}
//                 <i className="ci-arrow-up-right fs-base ms-1 me-n1" />
//               </Link>
//             </div>
//           </div>
//         )}
        
//         {/* Product Lists - First Column */}
//         <div className="col-sm-6 col-lg-4 d-flex flex-column gap-3 pt-4 py-lg-4">
//           {products.slice(0, 4).map((product) => (
//             <div key={product.id} className="position-relative animate-underline d-flex align-items-center ps-xl-3">
//               <div className="ratio ratio-1x1 flex-shrink-0" style={{ width: '110px' }}>
//                 <MediaPreview
//                   mediaUrl={product.image_urls[0]}
//                   altText={product.name}
//                   className="object-fit-cover rounded"
//                 />
//               </div>
//               <div className="w-100 min-w-0 ps-2 ps-sm-3">
//                 <div className="d-flex align-items-center gap-2 mb-2">
//                   <div className="d-flex gap-1 fs-xs">
//                     <ProductRating 
//                       averageRating={product.average_rating} 
//                       reviewsCount={product.reviews_count} 
//                     />
//                   </div>
//                 </div>
//                 <h4 className="mb-2">
//                   <Link 
//                     className="stretched-link d-block fs-sm fw-medium text-truncate" 
//                     to={`/products/${product.slug}`}
//                   >
//                     <span className="animate-target">{product.name}</span>
//                   </Link>
//                 </h4>
//                 <div className="h5 mb-0">{formatCurrency(product.price, 'NGN', { short: true })}</div>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         {/* Product Lists - Second Column */}
//         <div className="col-sm-6 col-lg-4 d-flex flex-column gap-3 pt-3 py-lg-4">
//           {products.slice(4, 8).map((product) => (
//             <div key={product.id} className="position-relative animate-underline d-flex align-items-center ps-xl-3">
//               <div className="ratio ratio-1x1 flex-shrink-0" style={{ width: '110px' }}>
//                 <MediaPreview
//                   mediaUrl={product.image_urls[0]}
//                   altText={product.name}
//                   className="object-fit-cover rounded"
//                 />
//               </div>
//               <div className="w-100 min-w-0 ps-2 ps-sm-3">
//                 <div className="d-flex align-items-center gap-2 mb-2">
//                   <div className="d-flex gap-1 fs-xs">
//                     <ProductRating 
//                       averageRating={product.average_rating} 
//                       reviewsCount={product.reviews_count} 
//                     />
//                   </div>
//                 </div>
//                 <h4 className="mb-2">
//                   <Link 
//                     className="stretched-link d-block fs-sm fw-medium text-truncate" 
//                     to={`/products/${product.slug}`}
//                   >
//                     <span className="animate-target">{product.name}</span>
//                   </Link>
//                 </h4>
//                 <div className="h5 mb-0">{formatCurrency(product.price, 'NGN', { short: true })}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewArrivals;

// v4
// import { useEffect, useState, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { NotificationService } from '../../services/local/NotificationService';
// import LoadingSpinner from '../../components/shared/LoadingSpinner';
// import { ProductAxiosService } from '../../services/net/ProductAxiosService';
// import ProductCard from '../products/ProductCard';
// import { ProductRating } from '../products/ProductFeatures';
// import { formatCurrency } from '../../utils/currencyUtils';

// // Helper function to check if URL is a video
// const isVideoUrl = (url) => {
//   if (!url) return false;
//   const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi', '.mkv'];
//   return videoExtensions.some(ext => url.toLowerCase().includes(ext));
// };

// // Media component that handles both images and videos
// const MediaPreview = ({ mediaUrl, altText, className = "", style = {}, onMouseEnter, onMouseLeave }) => {
//   const videoRef = useRef(null);
  
//   const handleMouseEnter = (e) => {
//     if (videoRef.current && isVideoUrl(mediaUrl)) {
//       videoRef.current.play().catch(err => console.log('Video play failed:', err));
//     }
//     if (onMouseEnter) onMouseEnter(e);
//   };
  
//   const handleMouseLeave = (e) => {
//     if (videoRef.current && isVideoUrl(mediaUrl)) {
//       videoRef.current.pause();
//       videoRef.current.currentTime = 0; // Reset to beginning
//     }
//     if (onMouseLeave) onMouseLeave(e);
//   };
  
//   if (isVideoUrl(mediaUrl)) {
//     return (
//       <>
//         <video
//           ref={videoRef}
//           src={mediaUrl}
//           className={className}
//           style={style}
//           muted
//           loop
//           playsInline
//           preload="metadata"
//           controls={false}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         />
//         {/* Play icon overlay */}
//         <div 
//           className="position-absolute d-flex align-items-center justify-content-center"
//           style={{
//             bottom: '8px',
//             left: '8px',
//             width: '20px',
//             height: '20px',
//             backgroundColor: 'rgba(0, 0, 0, 0.6)',
//             borderRadius: '50%',
//             zIndex: 2,
//             pointerEvents: 'none'
//           }}
//         >
//           <i className="ci-play text-white" style={{ fontSize: '8px', marginLeft: '1px' }}></i>
//         </div>
//       </>
//     );
//   }
  
//   return (
//     <img 
//       src={mediaUrl || '/assets/img/shop/electronics/thumbs/01.png'} 
//       alt={altText}
//       className={className}
//       style={style}
//       onMouseEnter={onMouseEnter}
//       onMouseLeave={onMouseLeave}
//     />
//   );
// };

// const NewArrivals = () => {
//   const [products, setProducts] = useState([]);
//   const [bannerProduct, setBannerProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [pagination, setPagination] = useState({
//     currentPage: 1,
//     totalPages: 1,
//     hasNext: false,
//     hasPrev: false
//   });

//   useEffect(() => {
//     const fetchNewArrivals = async () => {
//       try {
//         setLoading(true);
//         const response = await ProductAxiosService.getNewArrivals()
        
//         if (response.data.success) {
//           setProducts(response.data.products);
//           setBannerProduct(response.data.banner_product || null);
          
//           setPagination({
//             currentPage: response.data.page_meta.current_page_number,
//             totalPages: response.data.page_meta.total_pages_count,
//             hasNext: response.data.page_meta.has_next_page,
//             hasPrev: response.data.page_meta.has_prev_page
//           });
//         }
//       } catch (error) {
//         NotificationService.showDialog('Failed to load new arrivals');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNewArrivals();
//   }, []);

//   if (loading) {
//     return (
//       <section className="container pt-5 mt-1 mt-sm-2 mt-md-3 mt-lg-4">
//         <LoadingSpinner />
//       </section>
//     );
//   }

//   return (
//     <section className="container pt-5 mt-1 mt-sm-2 mt-md-3 mt-lg-4">
//       <h2 className="h3 pb-2 pb-sm-3">New Arrivals</h2>
      
//       <div className="row">
//         {/* Banner Product */}
//         {bannerProduct && (
//           <div className="col-lg-4" data-bs-theme="dark">
//             <div 
//               className="d-flex flex-column align-items-center justify-content-end h-100 text-center overflow-hidden rounded-5 px-4 px-lg-3 pt-4 pb-5" 
//               style={{ 
//                 background: `#1d2c41 url(${!isVideoUrl(bannerProduct.image_urls[0]) ? (bannerProduct.image_urls[0] || '/assets/img/home/electronics/banner/background.jpg') : '/assets/img/home/electronics/banner/background.jpg'}) center/cover no-repeat`
//               }}
//             >
//               <div 
//                 className="ratio animate-up-down position-relative z-2 me-lg-4" 
//                 style={{ 
//                   maxWidth: '320px', 
//                   marginBottom: '-19%', 
//                   aspectRatio: 'calc(690 / 640 * 100%)'
//                 }}
//               >
//                 <MediaPreview
//                   mediaUrl={bannerProduct.image_urls[0]}
//                   altText={bannerProduct.name}
//                 />
//               </div>
//               <h3 className="display-2 mb-2">{bannerProduct.name}</h3>
//               <p className="text-body fw-medium mb-4">{bannerProduct?.description?.substring(0, 50)}...</p>
//               <Link 
//                 className="btn btn-sm btn-primary" 
//                 to={`/products/${bannerProduct.slug}`}
//               >
//                 From {formatCurrency(bannerProduct.price, 'NGN', { short: true })}
//                 <i className="ci-arrow-up-right fs-base ms-1 me-n1" />
//               </Link>
//             </div>
//           </div>
//         )}
        
//         {/* Product Lists - First Column */}
//         <div className="col-sm-6 col-lg-4 d-flex flex-column gap-3 pt-4 py-lg-4">
//           {products.slice(0, 4).map((product) => (
//             <div 
//               key={product.id} 
//               className="position-relative animate-underline d-flex align-items-center ps-xl-3"
//             >
//               <div className="ratio ratio-1x1 flex-shrink-0 position-relative" style={{ width: '110px' }}>
//                 <MediaPreview
//                   mediaUrl={product.image_urls[0]}
//                   altText={product.name}
//                   className="object-fit-cover rounded"
//                 />
//               </div>
//               <div className="w-100 min-w-0 ps-2 ps-sm-3">
//                 <div className="d-flex align-items-center gap-2 mb-2">
//                   <div className="d-flex gap-1 fs-xs">
//                     <ProductRating 
//                       averageRating={product.average_rating} 
//                       reviewsCount={product.reviews_count} 
//                     />
//                   </div>
//                 </div>
//                 <h4 className="mb-2">
//                   <Link 
//                     className="stretched-link d-block fs-sm fw-medium text-truncate" 
//                     to={`/products/${product.slug}`}
//                   >
//                     <span className="animate-target">{product.name}</span>
//                   </Link>
//                 </h4>
//                 <div className="h5 mb-0">{formatCurrency(product.price, 'NGN', { short: true })}</div>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         {/* Product Lists - Second Column */}
//         <div className="col-sm-6 col-lg-4 d-flex flex-column gap-3 pt-3 py-lg-4">
//           {products.slice(4, 8).map((product) => (
//             <div 
//               key={product.id} 
//               className="position-relative animate-underline d-flex align-items-center ps-xl-3"
//             >
//               <div className="ratio ratio-1x1 flex-shrink-0 position-relative" style={{ width: '110px' }}>
//                 <MediaPreview
//                   mediaUrl={product.image_urls[0]}
//                   altText={product.name}
//                   className="object-fit-cover rounded" onMouseEnter={undefined} onMouseLeave={undefined}                />
//               </div>
//               <div className="w-100 min-w-0 ps-2 ps-sm-3">
//                 <div className="d-flex align-items-center gap-2 mb-2">
//                   <div className="d-flex gap-1 fs-xs">
//                     <ProductRating 
//                       averageRating={product.average_rating} 
//                       reviewsCount={product.reviews_count} 
//                     />
//                   </div>
//                 </div>
//                 <h4 className="mb-2">
//                   <Link 
//                     className="stretched-link d-block fs-sm fw-medium text-truncate" 
//                     to={`/products/${product.slug}`}
//                   >
//                     <span className="animate-target">{product.name}</span>
//                   </Link>
//                 </h4>
//                 <div className="h5 mb-0">{formatCurrency(product.price, 'NGN', { short: true })}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewArrivals;

// v5
import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Navigation, Thumbs, Controller } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import GLightbox from 'glightbox';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'glightbox/dist/css/glightbox.css';
import { ProductAxiosService } from '../../services/net/ProductAxiosService';
import './Products.css';
import ProductRecommendations from './ProductRecommendations';
import { formatDate, formatRelativeTime } from '../../utils/dateUtils';
import ProductReviewForm from './ProductReviewForm';
import LoadingSpinner from '../../components/shared/LoadingSpinner';
import Breadcrumb from '../../components/shared/Breadcrumb';
import { ChatButton } from './interactions/ChatButton';
import { BasketButton } from './interactions/BasketButton';
import { FavoriteButton } from './interactions/FavoriteButton';
import { ShareButton } from './interactions/ShareButton';
import { useBootstrapPopovers } from '../../hooks/useBootstrapPopovers';
import SeoConfig from '../../utils/SeoManager';
import { formatCurrency } from '../../utils/currencyUtils';

interface ProductOwner {
  id: number;
  name: string;
  slug: string;
  avatar?: string;
  type: 'user' | 'page';
}

interface ProductDetails {
  id: number;
  name: string;
  price: string;
  description: string;
  image_urls: string[];
  reviews_count: number;
  categories: Array<{ id: number; name: string }>;
  users: any[];
  pages: any[];
  created_at: string;
  tags: string[];
  slug: string;
  reviews: Array<{
    id: number;
    comment: string;
    created_at: string;
    rating: number;
    username: string;
    name: string;
    avatar: string;
  }>;
  attributes: Array<{
    key: string;
    value: string;
  }>;
}

SwiperCore.use([Navigation, Thumbs, Controller]);

// Helper function to check if URL is a video
const isVideoUrl = (url: string): boolean => {
  if (!url) return false;
  const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi', '.mkv'];
  return videoExtensions.some(ext => url.toLowerCase().includes(ext));
};

// Media component that handles both images and videos
const MediaPreview = ({ 
  mediaUrl, 
  altText, 
  className = "", 
  style = {},
  isThumb = false,
  onMouseEnter,
  onMouseLeave
}: { 
  mediaUrl: string; 
  altText: string; 
  className?: string; 
  style?: React.CSSProperties;
  isThumb?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  if (isVideoUrl(mediaUrl)) {
    return (
      <div 
        className="position-relative w-100 h-100"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <video
          ref={videoRef}
          src={mediaUrl}
          className={className}
          style={style}
          muted
          loop
          playsInline
          preload="metadata"
          controls={false}
        />
        {/* Play icon overlay */}
        <div 
          className="position-absolute d-flex align-items-center justify-content-center"
          style={{
            bottom: '4px',
            left: '4px',
            width: isThumb ? '16px' : '24px',
            height: isThumb ? '16px' : '24px',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            borderRadius: '50%',
            zIndex: 2,
            pointerEvents: 'none'
          }}
        >
          <i className="ci-play text-white" style={{ 
            fontSize: isThumb ? '6px' : '8px', 
            marginLeft: '1px' 
          }}></i>
        </div>
      </div>
    );
  }
  
  return (
    <img 
      src={mediaUrl || '/assets/img/us/placeholder.png'} 
      alt={altText}
      className={className}
      style={style}
      onError={(e) => {
        e.currentTarget.src = '/assets/img/us/placeholder.png';
      }}
    />
  );
};

// Plus indicator for additional media
const PlusIndicator = ({ count }: { count: number }) => {
  return (
    <div className="position-absolute top-0 end-0 m-2">
      <span className="badge bg-dark rounded-circle d-flex align-items-center justify-content-center" 
            style={{ width: '24px', height: '24px' }}>
        +{count}
      </span>
    </div>
  );
};

const ProductDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<ProductDetails | null>(null);
  const [owner, setOwner] = useState<ProductOwner | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const mainSwiperRef = useRef<SwiperCore | null>(null);
  const lightboxRef = useRef<any>(null);
  const videoRefs = useRef<{[key: string]: HTMLVideoElement | null}>({});

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await ProductAxiosService.getBySlug(slug!);
        const data = response.data;
        setProduct(data);
        
        // Determine owner from pages or users
        let ownerData = null;
        
        if (data.pages && data.pages.length > 0) {
          // Product is owned by a page
          const pageOwner = data.pages[0];
          ownerData = {
            id: pageOwner.id,
            name: pageOwner.name,
            slug: pageOwner.slug,
            avatar: pageOwner.avatar,
            type: 'page' as const
          };
        } else if (data.users && data.users.length > 0) {
          // Product is owned by a user
          const userOwner = data.users[0];
          ownerData = {
            id: userOwner.id,
            name: userOwner.name || userOwner.username,
            slug: userOwner.username,
            avatar: userOwner.avatar,
            type: 'user' as const
          };
        }
        setOwner(ownerData);

      } catch (err) {
        setError('Failed to load product details');
        console.error('Error fetching product details:', err);
      } finally {
        setLoading(false);
      }
    };
    
    if (slug) {
      fetchProductDetails();
    }
  }, [slug]);

  // Initialize Bootstrap popovers after product data's
  useBootstrapPopovers(product);

  // Initialize GLightbox
  useEffect(() => {
    lightboxRef.current = GLightbox({
      selector: '[data-glightbox]',
      touchNavigation: true,
      loop: true,
      openEffect: 'zoom',
      closeEffect: 'fade'
    });

    return () => {
      lightboxRef.current?.destroy();
    };
  }, []);

  // Reinitialize lightbox when product changes
  useEffect(() => {
    if (product && lightboxRef.current) {
      lightboxRef.current.destroy();
      lightboxRef.current = GLightbox({
        selector: '[data-glightbox]',
        touchNavigation: true,
        loop: true,
        openEffect: 'zoom',
        closeEffect: 'fade'
      });
    }
  }, [product]);

  // Reset scroll position when slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Helper to determine URL type for lightbox
  const getUrlType = (url: string): string => {
    if (!url) return 'image';
    
    // Video extensions
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi'];
    const extension = url.substring(url.lastIndexOf('.')).toLowerCase();
    
    if (videoExtensions.includes(extension)) return 'video';
    if (url.includes('youtube.com') || url.includes('youtu.be')) return 'youtube';
    if (url.includes('vimeo.com')) return 'vimeo';
    
    return 'image';
  };

  // Handle mouse enter for video thumbnails
  const handleThumbMouseEnter = (url: string, index: number) => {
    if (isVideoUrl(url) && videoRefs.current[`thumb-${index}`]) {
      videoRefs.current[`thumb-${index}`]?.play()
        .catch(err => console.log('Video play failed:', err));
    }
  };

  // Handle mouse leave for video thumbnails
  const handleThumbMouseLeave = (url: string, index: number) => {
    if (isVideoUrl(url) && videoRefs.current[`thumb-${index}`]) {
      videoRefs.current[`thumb-${index}`]?.pause();
      if (videoRefs.current[`thumb-${index}`]) {
        videoRefs.current[`thumb-${index}`]!.currentTime = 0;
      }
    }
  };

  // Handle mouse enter for main video
  const handleMainMouseEnter = (url: string, index: number) => {
    if (isVideoUrl(url) && videoRefs.current[`main-${index}`]) {
      videoRefs.current[`main-${index}`]?.play()
        .catch(err => console.log('Video play failed:', err));
    }
  };

  // Handle mouse leave for main video
  const handleMainMouseLeave = (url: string, index: number) => {
    if (isVideoUrl(url) && videoRefs.current[`main-${index}`]) {
      videoRefs.current[`main-${index}`]?.pause();
      if (videoRefs.current[`main-${index}`]) {
        videoRefs.current[`main-${index}`]!.currentTime = 0;
      }
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error || !product) {
    return <div>{error || 'Product not found'}</div>;
  }

  const MAX_VISIBLE_THUMBS = 6;
  const hasMoreMedia = product.image_urls.length > MAX_VISIBLE_THUMBS;
  const visibleThumbs = hasMoreMedia 
    ? product.image_urls.slice(0, MAX_VISIBLE_THUMBS - 1) 
    : product.image_urls;

  return (
    <>
      <SeoConfig 
        title={` ${product?.name || slug} - Salesnet.`}
        description={product?.description}
        keywords={`${product?.name}, products, quality, discount, deals`}
        canonical={`/products`}
      />
      
      <main className="content-wrapper">
        <section className="container pb-2 pb-sm-3 pb-md-4 pb-lg-5 mb-xxl-3">
          <Breadcrumb 
            items={[
              { label: 'Home', path: '/' },
              { label: 'Products', path: '/products' },
              { label: product?.name || slug, path: `/products/${slug}` }
            ]} 
          />
          
          <div className="row d-flex">
            <div className="col-lg-8 col-xl-9">
              <h1 className="h3 container mb-4 animate-scale">
                <span onClick={() => navigate(-1)} className='cursor-pointer animate-target'>
                  <i className="ci-corner-up-left fw-bold me-2"></i>
                </span>
                {product.name} 

                {product.reviews_count > 0 && (
                  <span className="badge rounded-pill text-dark border d-inline-flex align-items-center fs-sm ms-2">
                    <i className="ci-bar-chart me-1"></i> 
                    {product.reviews_count} Sales
                  </span>
                )}
              </h1>

              <div className="d-flex flex-column flex-md-row align-items-md-center gap-3 gap-md-4 h3 container mb-4">
                {owner && (
                  <div className="nav align-items-center gap-2">
                    <Link to={`/${owner.type === 'page' ? 'pages' : 'users'}/${owner.slug}`} className="nav-link text-body gap-1 p-0 fw-bold cursor-pointer">
                      <div className="flex-shrink-0 border rounded-circle" style={{ width: "35px", height:"35px " }}>
                        <img alt={owner.name} src={owner.avatar || '/assets/img/us/logos/avatar.png'} onError={(e) => {
                            e.currentTarget.src = '/assets/img/us/logos/avatar.png'; }}
                        className="ratio ratio-1x1 rounded-circle" style={{ width: "35px", height:"35px " }} />
                      </div>
                      <span className="badge rounded-pill text-dark bg-grey-subtle fs-sm border">{owner.name}</span>
                    </Link>
                    <span className="fs-xs text-muted">
                      Listed {formatRelativeTime(product!.created_at)}
                    </span>
                  </div>
                )}

                <div className="d-flex justify-content-between flex-grow-1 gap-2">
                  <span className="rounded-pill fw-bold fs-sm align-items-center"></span>

                  <div className="d-flex gap-1">
                    <BasketButton productId={product.id} productName={product.name} className='rounded-pill' />
                    <span className="btn btn-sm btn-dark rounded-pill animate-pulse text-dafaut fs-sm">
                      {formatCurrency(product.price, 'NGN', { short: true })}
                    </span>

                    <FavoriteButton productId={product.id} productName={product.name} className='rounded-pill' />
                    <ChatButton businessId={''} className='animate-scale' />
                    <ShareButton productId={''} productName={''} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row pb-5 pt-4">
            {/* Gallery Column */}
            <div className="col-lg-7 col-xl-8">
              <div className="position-relative mb-3">
                <Swiper
                  modules={[Navigation, Thumbs, Controller]}
                  spaceBetween={10}
                  navigation={{
                    prevEl: '.btn-prev',
                    nextEl: '.btn-next'
                  }}
                  thumbs={{ swiper: thumbsSwiper }}
                  onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
                  onSlideChange={(swiper) => setActiveMediaIndex(swiper.activeIndex)}
                  className="main-swiper rounded-4 overflow-hidden"
                  loop={true}
                >
                  {product.image_urls?.map((url, index) => (
                    <SwiperSlide key={index} className="d-flex justify-content-center">
                      <Link
                        data-glightbox={`gallery:product-gallery`}
                        data-type={getUrlType(url)}
                        to={url}
                        className="d-block w-100 h-100 position-relative gallery-item"
                        onMouseEnter={() => handleMainMouseEnter(url, index)}
                        onMouseLeave={() => handleMainMouseLeave(url, index)}
                      >
                        <div className="ratio" style={{ paddingBottom: '100%' }}>
                          <MediaPreview
                            mediaUrl={url}
                            altText={`Product view ${index + 1}`}
                            className="object-fit-cover position-absolute top-0 start-0 w-100 h-100"
                            style={{ objectFit: 'cover' }}
                          />
                        </div>
                        <div className="gallery-overlay"></div>
                        <i className="ci-zoom-in gallery-zoom-icon"></i>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
                
                {/* Navigation buttons */}
                <div className="position-absolute top-50 start-0 z-2 translate-middle-y ms-2">
                  <button className="btn btn-prev btn-icon btn-outline-secondary bg-body rounded-circle animate-slide-start" 
                    aria-label="Previous slide"
                  >
                    <i className="ci-chevron-left fs-lg animate-target" />
                  </button>
                </div>
                <div className="position-absolute top-50 end-0 z-2 translate-middle-y me-2">
                  <button className="btn btn-next btn-icon btn-outline-secondary bg-body rounded-circle animate-slide-end" 
                    aria-label="Next slide">
                    <i className="ci-chevron-right fs-lg animate-target" />
                  </button>
                </div>
              </div>
              
              {/* Thumbnails Swiper */}
              <div className="swiper-thumbs pt-2 mt-1" style={{ maxWidth: '100%' }}>
                <Swiper
                  modules={[Thumbs, Controller]}
                  spaceBetween={12}
                  slidesPerView={3}
                  watchSlidesProgress={true}
                  onSwiper={setThumbsSwiper}
                  breakpoints={{
                    340: { slidesPerView: 4 },
                    500: { slidesPerView: 5 },
                    600: { slidesPerView: 6 },
                    768: { slidesPerView: 4 },
                    992: { slidesPerView: 5 },
                    1200: { slidesPerView: 6 }
                  }}
                  className="thumb-swiper"
                >
                  {visibleThumbs.map((url, index) => (
                    <SwiperSlide key={index} className="swiper-thumb">
                      <a
                        data-glightbox={`gallery:product-gallery`}
                        data-type={getUrlType(url)}
                        href={url}
                        className="d-block w-100 h-100 position-relative gallery-item rounded-2"
                        onClick={() => mainSwiperRef.current?.slideTo(index)}
                        onMouseEnter={() => handleThumbMouseEnter(url, index)}
                        onMouseLeave={() => handleThumbMouseLeave(url, index)}
                      >
                        <div className="ratio ratio-1x1">
                          <MediaPreview
                            mediaUrl={url}
                            altText={`Thumbnail ${index + 1}`}
                            className="object-fit-cover position-absolute top-0 start-0 w-100 h-100 rounded-2"
                            style={{ objectFit: 'cover' }}
                            isThumb={true}
                          />
                        </div>
                        <div className="gallery-overlay"></div>
                        <i className="ci-zoom-in gallery-zoom-icon"></i>
                      </a>
                    </SwiperSlide>
                  ))}
                  
                  {/* Show (+) indicator if there are more media items */}
                  {hasMoreMedia && (
                    <SwiperSlide className="swiper-thumb">
                      <div 
                        className="d-block w-100 h-100 position-relative rounded-2 bg-light d-flex align-items-center justify-content-center cursor-pointer"
                        onClick={() => mainSwiperRef.current?.slideTo(MAX_VISIBLE_THUMBS - 1)}
                        style={{ minHeight: '80px' }}
                      >
                        <PlusIndicator count={product.image_urls.length - (MAX_VISIBLE_THUMBS - 1)} />
                        <span className="fs-4 fw-bold text-dark">+{product.image_urls.length - (MAX_VISIBLE_THUMBS - 1)}</span>
                      </div>
                    </SwiperSlide>
                  )}
                </Swiper>
              </div>
            </div>
            
            {/* Tabs Column - Side by side on large screens */}
            <div className="col-lg-5 col-xl-4 mt-2 mt-lg-0">
              <div className="">
                <section className="pt-2 pt-lg-0 mt-2 mt-sm-3 mt-lg-0">
                  <div className="overflow-x-auto" data-simplebar data-simplebar-auto-hide="false">
                    <ul
                      className="nav nav-pills mb-3 flex-nowrap d-flex gap-2"
                      role="tablist"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      <li className="nav-item flex-shrink-0" role="presentation">
                        <button
                          type="button"
                          className="nav-link active"
                          id="description-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#description-tab-pane"
                          role="tab"
                          aria-controls="description-tab-pane"
                          aria-selected="true"
                        >
                          <i className="ci-info me-2 ms-n1" />
                          Description
                        </button>
                      </li>
                      <li className="nav-item flex-shrink-0" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-delivery-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#delivery-tab-pane"
                          type="button"
                          role="tab"
                          aria-controls="delivery-tab-pane"
                          aria-selected="false"
                        >
                          <i className="ci-shopping-cart me-2 ms-n1" />
                          Delivery
                        </button>
                      </li>
                      <li className="nav-item flex-shrink-0" role="presentation">
                        <button
                          className="nav-link rounded-pill"
                          id="reviews-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#reviews-tab-pane"
                          type="button"
                          role="tab"
                          aria-controls="#reviews-tab-pane"
                          aria-selected="false"
                        >
                          <i className="ci-message-square me-2 ms-n1" />
                          Reviews{" "}
                          <span className="badge rounded-pill bg-warning">
                            {product.reviews_count}
                          </span>
                        </button>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="tab-content pt-4 mt-sm-1 mt-md-3">
                    <div 
                      aria-labelledby="description-tab" 
                      className="tab-pane fade active show" 
                      id="description-tab-pane" 
                      role="tabpanel"
                    >
                      <div className="row">
                        <h2 className="h3 pb-2 pb-md-3">Overview</h2>
                        <p>{product?.description}</p>
                        <div className="col-md-12 order-md-1">
                          
                          {/* Scrollable Attributes Section */}
                          {product.attributes && product.attributes.length > 0 && (
                            <div className="pt-5 mt-md-2 mb-lg-4">
                              <h3 className="h6">General specs</h3>
                              <div 
                                className="overflow-y-auto pe-3" 
                                data-simplebar 
                                data-simplebar-auto-hide="false" 
                                style={{maxHeight: "280px"}}
                              >
                                <ul className="list-unstyled d-flex flex-column gap-3 fs-sm pb-3 m-0 mb-2 mb-sm-3">
                                  <li className="d-flex align-items-center position-relative pe-4">
                                    <span>Price:</span>
                                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                                    <span className="text-dark-emphasis fw-medium text-end">{formatCurrency(product.price, 'NGN', { short: false })}</span>
                                  </li>
                                  {product.attributes.map((attr, index) => (
                                    <li key={index} className="d-flex align-items-center position-relative pe-4">
                                      <span>{attr.key}:</span>
                                      <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2"/>
                                      <span className="text-dark-emphasis fw-medium text-end">{attr.value}</span>
                                      <i className="ci-info fs-base text-body-tertiary position-absolute top-50 end-0 translate-middle-y" 
                                        data-bs-toggle="popover" 
                                        data-bs-trigger="hover" 
                                        data-bs-custom-class="popover-sm" 
                                        data-bs-content={attr.value} />
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )}

                          <div className="alert d-flex alert-info mb-2 mb-sm-3" role="alert">
                            <i className="ci-info fs-lg pe-1 me-2" style={{marginTop: '.125rem'}} />
                            <div className="fs-sm">Product specifications and equipment are subject to change without notice.</div>
                          </div>
                          <div className="pt-3">
                            <h3 className="h6">Do you have any questions?</h3>
                            <Link 
                              to={`https://wa.me/+2347026561327?text=Hello Salesnet!, I'm interested in this product <${product.name}>.`} 
                              className="btn btn-sm btn-success rounded-pill me-1"
                            >
                            <i className="ci-whatsapp me-1"></i> Whatsapp
                            </Link>

                            <Link to={`tel:07026561327`} className="btn btn-sm btn-info rounded-pill me-1"><i className="ci-phone me-1"></i> Call us</Link>
                            <Link to={`mailto:scale@salesnet.ng`} className="btn btn-sm btn-primary rounded-pill"><i className="ci-mail me-1"></i> mail us</Link>

                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Delivery and Returns */}
                    <div 
                      aria-labelledby="delivery-tab" 
                      className="tab-pane fade fs-sm" 
                      id="delivery-tab-pane" 
                      role="tabpanel"
                    >
                      <div className="row row-cols-1 row-cols-md-12">
                        <div className="col mb-3 mb-md-0">
                          <p>We strive to deliver your product as quickly as possible. Our estimated delivery times are as follows:</p>
                          <div className="col-12 order-md-1">
                            <h3 className="h6">Delivery</h3>
                            <ul className="list-unstyled d-flex flex-column gap-3 fs-sm pb-3 m-0 mb-2 mb-sm-3">
                              <li className="d-flex align-items-center position-relative pe-4">
                                <span>Standard delivery:</span>
                                <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                                <span className="text-dark-emphasis fw-medium text-end">Within 3-7 business days.</span>
                              </li>
                              <li className="d-flex align-items-center position-relative pe-4">
                                <span>Express delivery:</span>
                                <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                                <span className="text-dark-emphasis fw-medium text-end">Within 1-3 business days.</span>
                              </li>
                              <li className="d-flex align-items-center position-relative pe-4">
                                <span>Within same city/town:</span>
                                <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                                <span className="text-dark-emphasis fw-medium text-end">Same day(fastest).</span>
                                <i className="ci-info fs-base text-warning position-absolute top-50 end-0 translate-middle-y" 
                                data-bs-toggle="popover" data-bs-trigger="hover" data-bs-custom-class="popover-sm" 
                                data-bs-content="For same day delivery within same city, kindly place your order before 11.AM." />
                              </li>
                            </ul>
                            <p>If you are not happy with your purchase, you can return it within 7 days for a full refund or exchange.</p>
                            <h3 className="h6">Returns</h3>
                            <ul className="list-unstyled d-flex flex-column gap-3 fs-sm pb-3 m-0 mb-2 mb-sm-3">
                              <li className="d-flex align-items-center position-relative pe-4">
                                <span>Time frame:</span>
                                <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                                <span className="text-dark-emphasis fw-medium text-end">Up to 7 days.</span>
                                <i className="ci-info fs-base text-warning position-absolute top-50 end-0 translate-middle-y" 
                                data-bs-toggle="popover" data-bs-trigger="hover" data-bs-custom-class="popover-sm" 
                                data-bs-content="up to 7 days interval to return an item to salesnet." />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Reviews */}
                    <div 
                      aria-labelledby="reviews-tab" 
                      className="tab-pane fade" 
                      id="reviews-tab-pane" 
                      role="tabpanel"
                    >
                      <div className="d-sm-flex align-items-center justify-content-between border-bottom pb-2 pb-sm-3">
                        <div className="mb-3 me-sm-3">
                          <h2 className="h5 pb-2 mb-1">Customer reviews</h2>
                          <div className="d-flex align-items-center text-body-secondary fs-sm">
                            <div className="d-flex gap-1 me-2">
                              <i className="ci-star-filled text-warning" />
                              <i className="ci-star-filled text-warning" />
                              <i className="ci-star-filled text-warning" />
                              <i className="ci-star-filled text-warning" />
                              <i className="ci-star text-body-tertiary opacity-75" />
                            </div>
                            Based on {product.reviews_count} reviews
                          </div>
                        </div>
                        <button className="btn btn-outline-dark mb-3 rounded-pill" data-bs-target="#reviewForm" data-bs-toggle="modal" type="button">
                          Leave a review
                        </button>
                        {product && (
                          <ProductReviewForm 
                            productSlug={product.slug}
                            onReviewSubmitted={() => {
                              // console.log('Review submitted, refresh reviews.');
                            }}
                          />
                        )}
                      </div>
                      
                      {/* Review List */}
                      <div className="bg-body-tertiary rounded-4 p-4 p-sm-5">
                        <div className="vstack gap-3 gap-md-4 mt-n3 - overflow-y-auto pe-3" data-simplebar data-simplebar-auto-hide="false" style={{maxWidth: "100%", maxHeight: "320px"}}>
                          {product.reviews && product.reviews.length > 0 ? (
                            product.reviews.map((review) => (
                              <div key={review.id} className="mt-3">
                                <div className="d-flex align-items-center justify-content-between gap-3 mb-3">
                                  <div className="d-flex align-items-center">
                                    <div className="ratio ratio-1x1 flex-shrink-0 bg-body-secondary rounded-circle overflow-hidden"
                                      style={{ width: "40px" }}>
                                      <img 
                                      src={review.avatar || '/assets/img/us/logos/avatar.png'} 
                                      alt={review.username} 
                                        onError={(e) => {
                                      e.currentTarget.src = '/assets/img/us/placeholder.png';
                                    }}
                                      />
                                    </div>
                                    <div className="ps-2 ms-1">
                                      <div className="fs-sm fw-semibold text-dark-emphasis mb-1">
                                        {review.name || review.username}
                                      </div>
                                      <div className="fs-xs text-body-secondary">
                                        {new Date(review.created_at).toLocaleDateString('en-US', { year: 'numeric',  month: 'long',  day: 'numeric' })}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="d-flex gap-2">
                                    <button
                                      className="btn btn-sm btn-secondary bg-body border-0 animate-pulse rounded-pill"
                                      type="button">
                                      <i className="ci-heart animate-target fs-sm ms-n1 me-1" />
                                      {review.rating}
                                    </button>
                                    <button
                                      aria-label="Reply"
                                      className="btn btn-icon btn-sm btn-secondary bg-body border-0 animate-slide-end rounded-circle"
                                      type="button">
                                      <i className="ci-corner-up-right animate-target fs-sm" />
                                    </button>
                                  </div>
                                </div>
                                <p className="fs-sm mb-0 text-break">{review.comment}</p>
                              </div>
                            ))
                          ) : (
                            <p className="fs-sm text-body-secondary">No comments available for this product just yet.</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>

          {/* Tags Section - Below both columns */}
          <div className="row">
            <div className="col-12">
              <h2 className="h4 pt-5 mt-md-2 mb-lg-4">Tags</h2>
              <div className="d-flex flex-wrap gap-2 mt-n1">
                {product.tags && product.tags.length > 0 ? (
                  product.tags.slice(1).map((tag, index) => (
                    <Link key={index} className="btn btn-sm btn-secondary rounded-pill fs-sm text-body-emphasis"
                      to={`/products/${tag}`}>
                      {tag}
                    </Link>
                  ))
                ) : (
                  <>
                    <Link className="btn btn-sm btn-secondary rounded-pill fs-sm text-body-emphasis" to="/products">New Goods</Link>
                    <Link className="btn btn-sm btn-secondary rounded-pill fs-sm text-body-emphasis" to="/products">Go to products</Link>
                    <Link className="btn btn-sm btn-secondary rounded-pill fs-sm text-body-emphasis" to="/products">Recharge</Link>
                    <Link className="btn btn-sm btn-secondary rounded-pill fs-sm text-body-emphasis" to="/products">Digital</Link>
                    <Link className="btn btn-sm btn-secondary rounded-pill fs-sm text-body-emphasis" to="/products">Physical</Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        <ProductRecommendations />
      </main>
    </>
  );
}

export default ProductDetails;