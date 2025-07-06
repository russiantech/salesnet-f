
// import { useEffect, useState, useRef } from 'react';
// import { useParams, useNavigate, Link } from 'react-router-dom';
// import { Navigation, Thumbs, Controller } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore from 'swiper';
// import GLightbox from 'glightbox';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/thumbs';
// import 'glightbox/dist/css/glightbox.css';
// import { ProductAxiosService } from '../../services/net/ProductAxiosService';
// import './Products.css';
// import ProductRecommendations from './ProductRecommendations';
// import { formatDate } from '../../utils/dateUtils';
// import ProductReviewForm from './ProductReviewForm';
// import LoadingSpinner from '../../components/shared/LoadingSpinner';
// import Breadcrumb from '../../components/shared/Breadcrumb';

// interface ProductOwner {
//     id: number;
//     name: string;
//     slug: string;
//     avatar?: string;
//     type: 'user' | 'page';
// }
  
// interface ProductDetails {
//     id: number;
//     name: string;
//     price: string;
//     description: string;
//     image_urls: string[];
//     reviews_count: number;
//     categories: Array<{ id: number; name: string }>;
//     users: any[];
//     pages: any[];
//     created_at: string;
//     tags: string[];
// }

// SwiperCore.use([Navigation, Thumbs, Controller]);

// const ProductDetails = () => {
//     const { slug } = useParams<{ slug: string }>();
//     const navigate = useNavigate();
//     const [product, setProduct] = useState<ProductDetails | null>(null);
//     const [owner, setOwner] = useState<ProductOwner | null>(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);
//     const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
//     const mainSwiperRef = useRef<SwiperCore | null>(null);
//     const lightboxRef = useRef<any>(null);

//         useEffect(() => {
//         const fetchProductDetails = async () => {
//             try {
//                 const response = await ProductAxiosService.getBySlug(slug!);
//                 const data = response.data;
//                 setProduct(data);
                
//                 // Determine owner from pages or users
//                 let ownerData = null;
                
//                 if (data.pages && data.pages.length > 0) {
//                     // Product is owned by a page
//                     const pageOwner = data.pages[0];
//                     ownerData = {
//                         id: pageOwner.id,
//                         name: pageOwner.name,
//                         slug: pageOwner.slug,
//                         avatar: pageOwner.avatar,
//                         type: 'page' as const
//                     };
//                 } else if (data.users && data.users.length > 0) {
//                     // Product is owned by a user
//                     const userOwner = data.users[0];
//                     ownerData = {
//                         id: userOwner.id,
//                         name: userOwner.name || userOwner.username,
//                         slug: userOwner.username,
//                         avatar: userOwner.avatar,
//                         type: 'user' as const,
//                         username: userOwner.username,
//                         email: userOwner.email,
//                         phone: userOwner.phone
//                     };
//                 }
                
//                 setOwner(ownerData);

//             } catch (err) {
//                 setError('Failed to load product details');
//                 console.error('Error fetching product details:', err);
//             } finally {
//                 setLoading(false);
//             }
//         };
        
//         if (slug) {
//             fetchProductDetails();
//         }
//     }, [slug]);


//     // Initialize GLightbox
//     useEffect(() => {
//         lightboxRef.current = GLightbox({
//             selector: '[data-glightbox]',
//             touchNavigation: true,
//             loop: true,
//             openEffect: 'zoom',
//             closeEffect: 'fade'
//         });

//         return () => {
//             lightboxRef.current?.destroy();
//         };
//     }, []);

//     // Reinitialize lightbox when product changes
//     useEffect(() => {
//         if (product && lightboxRef.current) {
//             lightboxRef.current.destroy();
//             lightboxRef.current = GLightbox({
//                 selector: '[data-glightbox]',
//                 touchNavigation: true,
//                 loop: true,
//                 openEffect: 'zoom',
//                 closeEffect: 'fade'
//             });
//         }
//     }, [product]);

//     // Helper to determine URL type
//     const getUrlType = (url: string): string => {
//         if (!url) return 'image';
        
//         // Video extensions
//         const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi'];
//         const extension = url.substring(url.lastIndexOf('.')).toLowerCase();
        
//         if (videoExtensions.includes(extension)) return 'video';
//         if (url.includes('youtube.com') || url.includes('youtu.be')) return 'youtube';
//         if (url.includes('vimeo.com')) return 'vimeo';
        
//         return 'image';
//     };

//     const handleSocialShare = (platform: string) => {
//         const shareUrl = window.location.href;
//         const text = `Check out ${product?.name} on our platform - ${product?.description}`;

//         switch(platform) {
//             case 'facebook':
//                 window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
//                 break;
//             case 'instagram':
//                 alert("Instagram sharing is not supported directly. Please copy the link.");
//                 break;
//             case 'twitter':
//                 window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
//                 break;
//             case 'linkedin':
//                 window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(product?.name || '')}`, '_blank');
//                 break;
//             case 'copy':
//                 navigator.clipboard.writeText(shareUrl);
//                 alert('Link copied to clipboard!');
//                 break;
//         }
//     };

//     if (loading) {
//         return <LoadingSpinner />;
//     }

//     if (error) {
//         return <div>{error}</div>;
//     }

//     return (
//         <>
//             <main className="content-wrapper">
//                 <section className="container pb-2 pb-sm-3 pb-md-4 pb-lg-5 mb-xxl-3">
//                     <Breadcrumb 
//                         items={[
//                             { label: 'Home', path: '/' },
//                             { label: 'Products', path: '/products' },
//                             { label: product?.name || slug, path: `/products/${slug}` }
//                         ]} 
//                     />
                    
//                     <div className="row d-flex">
//                         <div className="col-lg-8 col-xl-9">
//                             <h1 className="h3 container mb-4 animate-scale">
//                                 <span onClick={() => navigate(-1)} className='cursor-pointer animate-target'>
//                                 <i className="ci-corner-up-left fw-bold me-2"></i>
//                                 </span>
                                
//                                 {product.name} 
//                             </h1>

//                             <div className="d-flex flex-column flex-md-row align-items-md-center gap-3 gap-md-4 h3 container mb-4">
                                
//                                 {owner && (
//                                     <div className="nav align-items-center gap-2 fs-sm">
//                                         <Link to={`/${owner.type === 'page' ? 'pages' : 'users'}/${owner.slug}`} className="nav-link text-body gap-1 p-0">
//                                             <div className="flex-shrink-0 border rounded-circle" style={{ width: "32px" }}>
//                                                 <img alt={owner.name} src={owner.avatar || '/assets/img/us/logos/avatar.png'} className="ratio ratio-1x1 rounded-circle" />
//                                             </div>
//                                             {owner.name}
//                                         </Link>
//                                         <span className="text-body-secondary">
//                                             Listed {formatDate(product!.created_at)}
//                                         </span>
//                                     </div>
//                                 )}

//                                 <div className="d-flex justify-content-between flex-grow-1 gap-4">
//                                     {product.reviews_count > 0 && (
//                                         <span className="badge rounded-pill text-info bg-info-subtle d-inline-flex align-items-center fs-sm">
//                                             {product.reviews_count} sales
//                                         </span>
//                                     )}
//                                     <div className="d-flex gap-2">
//                                         <button className="btn btn-sm btn-dark bg-dark rounded-pill animate-pulse fw-bold">
//                                             ${product.price}
//                                         </button>
//                                         <button className="btn btn-sm btn-info rounded-pill animate-pulse text-info bg-info-subtle " type="button">
//                                             <i className="ci-shopping-cart animate-target fs-sm ms-n1 me-1" />
//                                             Basket
//                                         </button>
//                                         <button className="btn btn-sm btn-secondary rounded-pill animate-pulse" type="button">
//                                             <i className="ci-heart animate-target fs-sm ms-n1 me-1" />
//                                             {product.reviews_count}
//                                         </button>
//                                         <Link className="btn btn-sm btn-secondary rounded-pill animate-scale" to="#comments">
//                                             <i className="ci-message-circle animate-target fs-sm ms-n1 me-1" />
//                                             {product.reviews_count}
//                                         </Link>
//                                         <div className="dropdown">
//                                             <button aria-expanded="false" aria-label="Share" className="btn btn-icon btn-sm btn-secondary animate-scale rounded-circle" 
//                                                 data-bs-toggle="dropdown" type="button">
//                                                 <i className="ci-share-2 animate-target fs-sm" />
//                                             </button>
//                                             <ul className="dropdown-menu dropdown-menu-end" style={{ "--cz-dropdown-min-width": "8.5rem" }}>
//                                                 <li>
//                                                     <button className="dropdown-item" onClick={() => handleSocialShare('facebook')}>
//                                                         <i className="ci-facebook fs-base me-2 text-info" />
//                                                         Facebook
//                                                     </button>
//                                                 </li>
//                                                 <li>
//                                                     <a className="dropdown-item" href="#!" onClick={() => handleSocialShare('instagram')}>
//                                                         <i className="ci-instagram fs-base me-2 text-primary" />
//                                                         Instagram
//                                                     </a>
//                                                 </li>
//                                                 <li>
//                                                     <button className="dropdown-item" onClick={() => handleSocialShare('twitter')}>
//                                                         <i className="ci-twitter fs-base me-2" />
//                                                         Twitter
//                                                     </button>
//                                                 </li>
//                                                 <li>
//                                                     <button className="dropdown-item" onClick={() => handleSocialShare('linkedin')}>
//                                                         <i className="ci-linkedin fs-base me-2 text-info" />
//                                                         LinkedIn
//                                                     </button>
//                                                 </li>
//                                                 <li>
//                                                     <button className="dropdown-item" onClick={() => handleSocialShare('copy')}>
//                                                         <i className="ci-copy fs-base me-2" />
//                                                         Copy Link
//                                                     </button>
//                                                 </li>
//                                             </ul>
//                                         </div>
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>

//                         <div className="col-lg-4 col-xl-3 col-12">
//                             Hey there.
//                         </div>
//                     </div>

//                     <div className="row pb-5 pt-4">
//                         <div className="col-lg-8 col-xl-9">
//                             {/* Swiper Gallery with Corrected Sizing */}
//                             <div className="position-relative mb-3">
//                                 <Swiper
//                                     modules={[Navigation, Thumbs, Controller]}
//                                     spaceBetween={10}
//                                     navigation={{
//                                         prevEl: '.btn-prev',
//                                         nextEl: '.btn-next'
//                                     }}
//                                     thumbs={{ swiper: thumbsSwiper }}
//                                     onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
//                                     className="main-swiper rounded-4 overflow-hidden"
//                                     loop={true}
//                                 >
//                                     {product.image_urls?.map((url, index) => (
//                                         <SwiperSlide key={index} className="d-flex justify-content-center">
//                                             <a
//                                                 data-glightbox={`gallery:product-gallery`}
//                                                 data-type={getUrlType(url)}
//                                                 href={url}
//                                                 className="d-block w-100 h-100 position-relative gallery-item"
//                                             >
//                                                 <div className="ratio" style={{ paddingBottom: '100%' }}>
//                                                     {getUrlType(url) === 'image' ? (
//                                                         <img 
//                                                             src={url} 
//                                                             alt={`Product view ${index + 1}`} 
//                                                             className="object-fit-cover position-absolute top-0 start-0 w-100 h-100"
//                                                         />
//                                                     ) : (
//                                                         <div className="bg-dark d-flex align-items-center justify-content-center w-100 h-100 position-absolute top-0 start-0">
//                                                             <i className="ci-video text-white fs-1" />
//                                                             <span className="visually-hidden">Video Preview</span>
//                                                         </div>
//                                                     )}
//                                                 </div>
//                                                 <div className="gallery-overlay"></div>
//                                                 <i className="ci-zoom-in gallery-zoom-icon"></i>
//                                             </a>
//                                         </SwiperSlide>
//                                     ))}
//                                 </Swiper>
                                
//                                 {/* Navigation buttons */}
//                                 <div className="position-absolute top-50 start-0 z-2 translate-middle-y ms-2">
//                                     <button 
//                                         className="btn btn-prev btn-icon btn-outline-secondary bg-body rounded-circle animate-slide-start" 
//                                         aria-label="Previous slide"
//                                     >
//                                         <i className="ci-chevron-left fs-lg animate-target" />
//                                     </button>
//                                 </div>
//                                 <div className="position-absolute top-50 end-0 z-2 translate-middle-y me-2">
//                                     <button 
//                                         className="btn btn-next btn-icon btn-outline-secondary bg-body rounded-circle animate-slide-end" 
//                                         aria-label="Next slide"
//                                     >
//                                         <i className="ci-chevron-right fs-lg animate-target" />
//                                     </button>
//                                 </div>
//                             </div>
                            
//                             {/* Thumbnails Swiper with Corrected Sizing */}
//                             <div className="swiper-thumbs pt-2 mt-1" style={{ maxWidth: '100%' }}>
//                                 <Swiper
//                                     modules={[Thumbs, Controller]}
//                                     spaceBetween={12}
//                                     slidesPerView={3}
//                                     watchSlidesProgress={true}
//                                     onSwiper={setThumbsSwiper}
//                                     breakpoints={{
//                                         340: { slidesPerView: 4 },
//                                         500: { slidesPerView: 5 },
//                                         600: { slidesPerView: 6 },
//                                         768: { slidesPerView: 4 },
//                                         992: { slidesPerView: 5 },
//                                         1200: { slidesPerView: 6 }
//                                     }}
//                                     className="thumb-swiper"
//                                 >
//                                     {product.image_urls?.map((url, index) => (
//                                         <SwiperSlide key={index} className="swiper-thumb">
//                                             <a
//                                                 data-glightbox={`gallery:product-gallery`}
//                                                 data-type={getUrlType(url)}
//                                                 href={url}
//                                                 className="d-block w-100 h-100 position-relative gallery-item rounded-2"
//                                                 onClick={() => mainSwiperRef.current?.slideTo(index)}
//                                             >
//                                                 <div className="ratio ratio-1x1">
//                                                     {getUrlType(url) === 'image' ? (
//                                                         <img 
//                                                             src={url} 
//                                                             alt={`${url} ${index + 1}`} 
//                                                             className="object-fit-cover position-absolute top-0 start-0 w-100 h-100 rounded-2"
//                                                         />
//                                                     ) : (
//                                                         <div className="bg-dark d-flex align-items-center justify-content-center w-100 h-100 position-absolute top-0 start-0 rounded-2">
//                                                             <i className="ci-video text-white fs-5" />
//                                                             <span className="visually-hidden">Video Thumbnail</span>
//                                                         </div>
//                                                     )}
//                                                 </div>
//                                                 <div className="gallery-overlay"></div>
//                                                 <i className="ci-zoom-in gallery-zoom-icon"></i>
//                                             </a>
//                                         </SwiperSlide>
//                                     ))}
//                                 </Swiper>
//                             </div>
                        
//                         <section className="container pt-5 mt-2 mt-sm-3 mt-lg-4 mt-xl-5">
//                             <ul className="nav nav-pills mb-3 - flex-nowrap" role="tablist">
//         <li className="nav-item" role="presentation">
//           <button type="button" className="nav-link active" id="description-tab" data-bs-toggle="pill" 
//           data-bs-target="#description-tab-pane" role="tab" aria-controls="description-tab-pane" aria-selected="true">
//             <i className="ci-info me-2 ms-n1" />
//             Description
//           </button>
//         </li>
//         <li className="nav-item" role="presentation">
//           <button className="nav-link" id="pills-delivery-tab" data-bs-toggle="pill" data-bs-target="#delivery-tab-pane" 
//           type="button" role="tab" aria-controls="delivery-tab-pane" aria-selected="false">
//             <i className="ci-shopping-cart me-2 ms-n1" />
//             Delivery & Returns
//           </button>
//         </li>
//         <li className="nav-item" role="presentation">
//           <button className="nav-link" id="reviews-tab" data-bs-toggle="pill" data-bs-target="#reviews-tab-pane" 
//           type="button" role="tab" aria-controls="#reviews-tab-pane" aria-selected="false">
//             {/* <i className="ci-refresh me-2 ms-n1" /> */}
//             {/* <i className="ci-corner-up-left me-2 ms-n1"></i> */}
//             <i className="ci-message-square me-2 ms-n1"></i>
//             Reviews <span className="badge rounded-pill bg-warning"> {product.reviews_count}</span>
//           </button>
//         </li>
//       </ul>
//                             <div className="tab-content pt-4 mt-sm-1 mt-md-3">
//                                 <div aria-labelledby="description-tab" className="tab-pane fade active show" id="description-tab-pane" role="tabpanel">
//                                     <div className="row">
//         <h2 className="h3 pb-2 pb-md-3">Overview</h2>
//                                         {/* <p>{JSON.stringify(product)}</p> */}
//                                         <p>{product?.description}</p>
//                                         <div className="col-md-12 order-md-1">
//         <h3 className="h6">General specs</h3>
//         <ul className="list-unstyled d-flex flex-column gap-3 fs-sm pb-3 m-0 mb-2 mb-sm-3">
//           <li className="d-flex align-items-center position-relative pe-4">
//             <span>Model:</span>
//             <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
//             <span className="text-dark-emphasis fw-medium text-end">iPhone 14 Plus</span>
//           </li>
//           <li className="d-flex align-items-center position-relative pe-4">
//             <span>Manufacturer:</span>
//             <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
//             <span className="text-dark-emphasis fw-medium text-end">Apple Inc.</span>
//           </li>
//           <li className="d-flex align-items-center position-relative pe-4">
//             <span>Finish:</span>
//             <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
//             <span className="text-dark-emphasis fw-medium text-end">Ceramic, Glass, Aluminium</span>
//             <i className="ci-info fs-base text-body-tertiary position-absolute top-50 end-0 translate-middle-y" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-custom-class="popover-sm" data-bs-content="Ceramic shield front, Glass back and Aluminium design" />
//           </li>
//           <li className="d-flex align-items-center position-relative pe-4">
//             <span>Capacity:</span>
//             <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
//             <span className="text-dark-emphasis fw-medium text-end">128GB</span>
//           </li>
//           <li className="d-flex align-items-center position-relative pe-4">
//             <span>Chip:</span>
//             <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
//             <span className="text-dark-emphasis fw-medium text-end">A15 Bionic chip</span>
//           </li>
//         </ul>
//         <h3 className="h6">Display</h3>
//         <ul className="list-unstyled d-flex flex-column gap-3 fs-sm pb-3 m-0 mb-2 mb-sm-3">
//           <li className="d-flex align-items-center position-relative pe-4">
//             <span>Diagonal:</span>
//             <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
//             <span className="text-dark-emphasis fw-medium text-end">6.1"</span>
//           </li>
//           <li className="d-flex align-items-center position-relative pe-4">
//             <span>Screen type:</span>
//             <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
//             <span className="text-dark-emphasis fw-medium text-end">Super Retina XDR</span>
//             <i className="ci-info fs-base text-body-tertiary position-absolute top-50 end-0 translate-middle-y" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-custom-class="popover-sm" data-bs-content="HDR display, True Tone, Wide color (P3), Haptic Touch, 800 nits brightness" />
//           </li>
//           <li className="d-flex align-items-center position-relative pe-4">
//             <span>Resolution:</span>
//             <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
//             <span className="text-dark-emphasis fw-medium text-end">2778x1284px at 458ppi</span>
//           </li>
//           <li className="d-flex align-items-center position-relative pe-4">
//             <span>Refresh rate:</span>
//             <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
//             <span className="text-dark-emphasis fw-medium text-end">120 Hz</span>
//           </li>
//         </ul>
//         <h3 className="h6">Camera</h3>
//         <ul className="list-unstyled d-flex flex-column gap-3 fs-sm pb-3 m-0 mb-2 mb-sm-3">
//           <li className="d-flex align-items-center position-relative pe-4">
//             <span>Front camera:</span>
//             <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
//             <span className="text-dark-emphasis fw-medium text-end">12MP</span>
//           </li>
//           <li className="d-flex align-items-center position-relative pe-4">
//             <span>Main camera:</span>
//             <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
//             <span className="text-dark-emphasis fw-medium text-end">12MP Ultra Wide</span>
//           </li>
//           <li className="d-flex align-items-center position-relative pe-4">
//             <span>Zoom:</span>
//             <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
//             <span className="text-dark-emphasis fw-medium text-end">2x opical, 5x digital</span>
//           </li>
//           <li className="d-flex align-items-center position-relative pe-4">
//             <span>Video:</span>
//             <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
//             <span className="text-dark-emphasis fw-medium text-end">4K video recording</span>
//             <i className="ci-info fs-base text-body-tertiary position-absolute top-50 end-0 translate-middle-y" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-custom-class="popover-sm" data-bs-content="4K video, 1080p HD video, 720p HD video, Cinematic mode, Action mode" />
//           </li>
//         </ul>
//         <h3 className="h6">Power and Battery</h3>
//         <ul className="list-unstyled d-flex flex-column gap-3 fs-sm pb-3 m-0 mb-2 mb-sm-3">
//           <li className="d-flex align-items-center position-relative pe-4">
//             <span>Fast charging:</span>
//             <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
//             <span className="text-dark-emphasis fw-medium text-end">Yes</span>
//           </li>
//           <li className="d-flex align-items-center position-relative pe-4">
//             <span>Wireless charging:</span>
//             <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
//             <span className="text-dark-emphasis fw-medium text-end">Yes</span>
//           </li>
//           <li className="d-flex align-items-center position-relative pe-4">
//             <span>Charging power:</span>
//             <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
//             <span className="text-dark-emphasis fw-medium text-end">up to 15W</span>
//           </li>
//           <li className="d-flex align-items-center position-relative pe-4">
//             <span>Video playback:</span>
//             <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
//             <span className="text-dark-emphasis fw-medium text-end">Up to 26 hours</span>
//           </li>
//           <li className="d-flex align-items-center position-relative pe-4">
//             <span>Audio playback:</span>
//             <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
//             <span className="text-dark-emphasis fw-medium text-end">Up to 100 hours</span>
//           </li>
//         </ul>
//         <h3 className="h6">Size and Weight</h3>
//         <ul className="list-unstyled d-flex flex-column gap-3 fs-sm pb-3 m-0 mb-2 mb-sm-3">
//           <li className="d-flex align-items-center position-relative pe-4">
//             <span>Height:</span>
//             <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
//             <span className="text-dark-emphasis fw-medium text-end">160.8 mm</span>
//           </li>
//           <li className="d-flex align-items-center position-relative pe-4">
//             <span>Width:</span>
//             <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
//             <span className="text-dark-emphasis fw-medium text-end">78.1 mm</span>
//           </li>
//           <li className="d-flex align-items-center position-relative pe-4">
//             <span>Weight:</span>
//             <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
//             <span className="text-dark-emphasis fw-medium text-end">203 grams</span>
//           </li>
//         </ul>
//         <div className="alert d-flex alert-info mb-2 mb-sm-3" role="alert">
//           <i className="ci-info fs-lg pe-1 me-2" style={{marginTop: '.125rem'}} />
//           <div className="fs-sm">Product specifications and equipment are subject to change without notice.</div>
//         </div>
//         <div className="pt-3">
//           <h3 className="h6">Do you have any questions?</h3>
//           <a className="btn btn-sm btn-primary" href="#!">Contact us</a>
//         </div>
//       </div>
//                                     </div>
//                                 </div>
//                                 {/* Delivery and Returns */}
//                                 <div aria-labelledby="delivery-tab" className="tab-pane fade fs-sm" id="delivery-tab-pane" role="tabpanel">
//                                     <div className="row row-cols-1 row-cols-md-12">
//                                         <div className="col mb-3 mb-md-0">
                                            
//                                             {/*  */}
//                                               <p>We strive to deliver your product as quickly as possible. Our estimated delivery times are as follows:</p>

//                                             <div className="col-12 order-md-1">
//         <h3 className="h6">Delivery</h3>
//         <ul className="list-unstyled d-flex flex-column gap-3 fs-sm pb-3 m-0 mb-2 mb-sm-3">
//           <li className="d-flex align-items-center position-relative pe-4">
//             <span>Standard delivery:</span>
//             <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
//             <span className="text-dark-emphasis fw-medium text-end">Within 3-7 business days.</span>
//           </li>
//           <li className="d-flex align-items-center position-relative pe-4">
//             <span>Express delivery:</span>
//             <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
//             <span className="text-dark-emphasis fw-medium text-end">Within 1-3 business days.</span>
//           </li>
//           <li className="d-flex align-items-center position-relative pe-4">
//             <span>Returns:</span>
//             <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
//             <span className="text-dark-emphasis fw-medium text-end">15 days.</span>
//             <i className="ci-info fs-base text-body-tertiary position-absolute top-50 end-0 translate-middle-y" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-custom-class="popover-sm" data-bs-content="Ceramic shield front, Glass back and Aluminium design" />
//           </li>
    
//         </ul>

//         <p>If you are not happy with your purchase, you can return it within 30 days for a full refund or exchange.</p>
//         <h3 className="h6">Returns</h3>
//         <ul className="list-unstyled d-flex flex-column gap-3 fs-sm pb-3 m-0 mb-2 mb-sm-3">
          
//           <li className="d-flex align-items-center position-relative pe-4">
//             <span>Time frame:</span>
//             <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
//             <span className="text-dark-emphasis fw-medium text-end">Up to 15 days.</span>
//             <i className="ci-info fs-base text-body-tertiary position-absolute top-50 end-0 translate-middle-y" 
//             data-bs-toggle="popover" data-bs-trigger="hover" data-bs-custom-class="popover-sm" 
//             data-bs-content="up to 15 days interval to return an item to salesnet." />
//           </li>
          
//         </ul>
//         </div>
//                                         </div>
//                                         {/* <div className="col">
//                                             <div className="ps-lg-2 ps-xl-3">
//                                                 <h6>Returns</h6>
//                                                 <p>If you are not happy with your purchase, you can return it within 30 days for a full refund or exchange.</p>
//                                             </div>
//                                         </div> */}
//                                     </div>
//                                 </div>
//                                 {/* Reviews */}
//                                 <div aria-labelledby="reviews-tab" className="tab-pane fade" id="reviews-tab-pane" role="tabpanel">
//                                     <div className="d-sm-flex align-items-center justify-content-between border-bottom pb-2 pb-sm-3">
//                                         <div className="mb-3 me-sm-3">
//                                             <h2 className="h5 pb-2 mb-1">Customer reviews</h2>
//                                             <div className="d-flex align-items-center text-body-secondary fs-sm">
//                                                 <div className="d-flex gap-1 me-2">
//                                                     <i className="ci-star-filled text-warning" />
//                                                     <i className="ci-star-filled text-warning" />
//                                                     <i className="ci-star-filled text-warning" />
//                                                     <i className="ci-star-filled text-warning" />
//                                                     <i className="ci-star text-body-tertiary opacity-75" />
//                                                 </div>
//                                                 Based on {product.reviews_count} reviews
//                                             </div>
//                                         </div>
//                                         <button className="btn btn-outline-dark mb-3" data-bs-target="#reviewForm" data-bs-toggle="modal" type="button">
//                                             Leave a review
//                                         </button>
//                                          {/* Modal for the review form */}
//                                          {product && (
//                                             <ProductReviewForm 
//                                                 productSlug={product.slug} // Use product.slug instead
//                                                 onReviewSubmitted={() => {
//                                                     console.log('Review submitted, refresh reviews.');
//                                                 }}
//                                             />
//                                         )}

//                                     </div>
//                                     {/* Review List */}
//                                     <div className="bg-body-tertiary rounded-4 p-4 p-sm-5">
//                                         {/* Reviews would be dynamically generated here */}
                                       
//                                         <div className="vstack gap-3 gap-md-4 mt-n3">

//                                             {product.reviews && product.reviews.length > 0 ? (
//                                                 product.reviews.map((review) => (
//                                                     <div key={review.id} className="mt-3">
//                                                         <div className="d-flex align-items-center justify-content-between gap-3 mb-3">
//                                                             <div className="d-flex align-items-center">
//                                                                 <div className="ratio ratio-1x1 flex-shrink-0 bg-body-secondary rounded-circle overflow-hidden"
//                                                                     style={{ width: "40px" }}>
//                                                                     {/* <img alt="Avatar" src={`/assets/img/pages/products/comments/${review.user_id}.jpg`} /> */}
//                                                                     <img alt={review.username} src={review.avatar || '/assets/img/us/logos/avatar.png'} />
//                                                                 </div>
//                                                                 <div className="ps-2 ms-1">
//                                                                     <div className="fs-sm fw-semibold text-dark-emphasis mb-1">
//                                                                         {/* Assuming user names are mapped from user IDs */}
//                                                                         {review.name || review.username}
//                                                                     </div>
//                                                                     <div className="fs-xs text-body-secondary">
//                                                                         {/* {new Date(review.created_at).toLocaleDateString()} */}
//                                                                         {new Date(review.created_at).toLocaleDateString('en-US', { year: 'numeric',  month: 'long',  day: 'numeric' })}
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                             <div className="d-flex gap-2">
//                                                                 <button
//                                                                     className="btn btn-sm btn-secondary bg-body border-0 animate-pulse rounded-pill"
//                                                                     type="button">
//                                                                     <i className="ci-heart animate-target fs-sm ms-n1 me-1" />
//                                                                     {review.rating}
//                                                                 </button>
//                                                                 <button
//                                                                     aria-label="Reply"
//                                                                     className="btn btn-icon btn-sm btn-secondary bg-body border-0 animate-slide-end rounded-circle"
//                                                                     type="button">
//                                                                     <i className="ci-corner-up-right animate-target fs-sm" />
//                                                                 </button>
//                                                             </div>
//                                                         </div>
//                                                         <p className="fs-sm mb-0 text-break">{review.comment}</p>
//                                                     </div>
//                                                 ))
//                                             ) : (
//                                                 <p className="fs-sm text-body-secondary">No comments available for this product just yet.</p>
//                                             )}
//                                         </div>

//                                         {/*  */}
//                                     </div>
//                                 </div>
//                             </div>
//                         </section>

//                         <h2 className="h4 pt-5 mt-md-2 mb-lg-4">Tags</h2>
//                         <div className="d-flex flex-wrap gap-2 mt-n1">
//                             {product.tags && product.tags.length > 0 ? (
//                                 product.tags.slice(1).map((tag, index) => (
//                                     <Link key={index} className="btn btn-sm btn-secondary rounded-pill fs-sm text-body-emphasis"
//                                         to={`/products/${tag}`}>
//                                         {tag}
//                                     </Link>
//                                 ))
//                             ) : (
//                                 <>
//                                     <Link className="btn btn-sm btn-secondary rounded-pill fs-sm text-body-emphasis" to="/products">New Goods</Link>
//                                     <Link className="btn btn-sm btn-secondary rounded-pill fs-sm text-body-emphasis" to="/products">Go to products</Link>
//                                     <Link className="btn btn-sm btn-secondary rounded-pill fs-sm text-body-emphasis" to="/products">Recharge</Link>
//                                     <Link className="btn btn-sm btn-secondary rounded-pill fs-sm text-body-emphasis" to="/products">Digital</Link>
//                                     <Link className="btn btn-sm btn-secondary rounded-pill fs-sm text-body-emphasis" to="/products">Physical</Link>
//                                 </>
//                             )}
//                         </div>

//                     </div>
                    
                
//                 </div>

//             </section>

//             <ProductRecommendations />

//         </main>
//         </>
//     );
// }

// export default ProductDetails;
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
import { formatDate } from '../../utils/dateUtils';
import ProductReviewForm from './ProductReviewForm';
import LoadingSpinner from '../../components/shared/LoadingSpinner';
import Breadcrumb from '../../components/shared/Breadcrumb';

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
}

SwiperCore.use([Navigation, Thumbs, Controller]);

const ProductDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<ProductDetails | null>(null);
  const [owner, setOwner] = useState<ProductOwner | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
  const mainSwiperRef = useRef<SwiperCore | null>(null);
  const lightboxRef = useRef<any>(null);

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
            type: 'user' as const,
            username: userOwner.username,
            email: userOwner.email,
            phone: userOwner.phone
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

  // Helper to determine URL type
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

  const handleSocialShare = (platform: string) => {
    const shareUrl = window.location.href;
    const text = `Check out ${product?.name} on our platform - ${product?.description}`;

    switch(platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
        break;
      case 'instagram':
        alert("Instagram sharing is not supported directly. Please copy the link.");
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(product?.name || '')}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(shareUrl);
        alert('Link copied to clipboard!');
        break;
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error || !product) {
    return <div>{error || 'Product not found'}</div>;
  }

  return (
    <>
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
                    <span className="badge rounded-pill text-dark border d-inline-flex align-items-center fs-sm">
                    <i className="ci-bar-chart me-1"></i> 
                    {product.reviews_count} Sales
                    </span>

                  )}

                {product.price > 0 && (
                    <span className="badge rounded-pill text-dark border d-inline-flex align-items-center fs-sm">
                    $   
                    {product.price}
                    </span>

                  )}

              </h1>

              <div className="d-flex flex-column flex-md-row align-items-md-center gap-3 gap-md-4 h3 container mb-4">
                {owner && (
                  <div className="nav align-items-center gap-2 fs-sm">
                    <Link to={`/${owner.type === 'page' ? 'pages' : 'users'}/${owner.slug}`} className="nav-link text-body gap-1 p-0">
                      <div className="flex-shrink-0 border rounded-circle" style={{ width: "32px" }}>
                        <img alt={owner.name} src={owner.avatar || '/assets/img/us/logos/avatar.png'} className="ratio ratio-1x1 rounded-circle" />
                      </div>
                      {owner.name}
                    </Link>
                    <span className="text-body-secondary">
                      Listed {formatDate(product!.created_at)}
                    </span>
                  </div>
                )}

                <div className="d-flex justify-content-between flex-grow-1 gap-4">
                  
                  {/* {product.reviews_count > 0 && (
                    <span className="badge1 rounded-pill fw-bold fs-sm align-items-center">
                      {product.reviews_count} sales
                    </span>
                  )} */}
                  <span className="rounded-pill fw-bold fs-sm align-items-center"></span>

                  <div className="d-flex gap-2">
                    
                    {/* <button className="btn btn-sm btn-dark bg-dark rounded-pill animate-pulse fw-bold">
                      ${product.price} - {product.reviews_count > 0 && (
                    <span className="rounded-pill fw-bold1 fs-sm align-items-center">
                      {product.reviews_count} sales
                    </span>
                  )}
                    </button> */}

                    <button className="btn btn-sm btn-info rounded-pill animate-pulse text-info bg-dark-subtle " type="button">
                      <i className="ci-shopping-cart animate-target fs-sm ms-n1 me-1" />
                     Add ${product.price}
                    </button>
                    {/* <button className="btn btn-sm btn-info rounded-pill animate-pulse text-info bg-info-subtle " type="button">
                      <i className="ci-shopping-cart animate-target fs-sm ms-n1 me-1" />
                      add ${product.price} to basket
                    </button> */}

                    <button className="btn btn-sm btn-secondary rounded-pill animate-pulse" type="button">
                      <i className="ci-heart animate-target fs-sm ms-n1 me-1" />
                      {product.reviews_count}
                    </button>
                    <Link className="btn btn-sm btn-secondary rounded-pill animate-scale" to="#comments">
                      <i className="ci-message-circle animate-target fs-sm ms-n1 me-1" />
                      {product.reviews_count}
                    </Link>
                    <div className="dropdown">
                      <button aria-expanded="false" aria-label="Share" className="btn btn-icon btn-sm btn-secondary animate-scale rounded-circle" 
                        data-bs-toggle="dropdown" type="button">
                        <i className="ci-share-2 animate-target fs-sm" />
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end" style={{ "--cz-dropdown-min-width": "8.5rem" }}>
                        <li>
                          <button className="dropdown-item" onClick={() => handleSocialShare('facebook')}>
                            <i className="ci-facebook fs-base me-2 text-info" />
                            Facebook
                          </button>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#!" onClick={() => handleSocialShare('instagram')}>
                            <i className="ci-instagram fs-base me-2 text-primary" />
                            Instagram
                          </a>
                        </li>
                        <li>
                          <button className="dropdown-item" onClick={() => handleSocialShare('twitter')}>
                            <i className="ci-twitter fs-base me-2" />
                            Twitter
                          </button>
                        </li>
                        <li>
                          <button className="dropdown-item" onClick={() => handleSocialShare('linkedin')}>
                            <i className="ci-linkedin fs-base me-2 text-info" />
                            LinkedIn
                          </button>
                        </li>
                        <li>
                          <button className="dropdown-item" onClick={() => handleSocialShare('copy')}>
                            <i className="ci-copy fs-base me-2" />
                            Copy Link
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="row">
                        <div className="col-lg-8 col-xl-9">
                            <h1 className="h3 mb-sm-4">
                                {/* ... back button ... */}
                                <span onClick={() => navigate(-1)} className='cursor-pointer animate-target'>
                                <i className="ci-corner-up-left fw-bold me-2"></i>
                                </span>
                                {product.name} 
                            </h1>

                            <div className="d-flex flex-column flex-md-row align-items-md-center gap-3 gap-md-4">
                                {/* ... owner info ... */}
                                {owner && (
                  <div className="nav align-items-center gap-2 fs-sm">
                    <Link to={`/${owner.type === 'page' ? 'pages' : 'users'}/${owner.slug}`} className="nav-link text-body gap-1 p-0">
                      <div className="flex-shrink-0 border rounded-circle" style={{ width: "32px" }}>
                        <img alt={owner.name} src={owner.avatar || '/assets/img/us/logos/avatar.png'} className="ratio ratio-1x1 rounded-circle" />
                      </div>
                      {owner.name}
                    </Link>
                    <span className="text-body-secondary">
                      Listed {formatDate(product!.created_at)}
                    </span>
                  </div>
                )}

                                <div className="d-flex justify-content-between flex-grow-1 gap-4">
                                    {/* Sales Badge - Moved here for consistency */}
                                    <span className="badge rounded-pill text-dark border d-inline-flex align-items-center fs-sm">
                                        <i className="ci-bar-chart me-1"></i> 
                                        {product.reviews_count} Sales
                                    </span>

                                    <div className="d-flex gap-2">
                                        {/* ... price button ... */}
                                        <button className="btn btn-sm btn-info rounded-pill animate-pulse text-info bg-info-subtle " type="button">
                                            <i className="ci-shopping-cart animate-target fs-sm ms-n1 me-1" />
                                            Basket
                                        </button>
                                        
                                        {/* Favorites Button - Updated with heart icon */}
                                        <button className="btn btn-sm btn-secondary rounded-pill animate-pulse" type="button">
                                            <i className="ci-heart animate-target fs-sm ms-n1 me-1" />
                                            {product.reviews_count}
                                        </button>
                                        
                                        {/* Reviews Button - Updated with message icon */}
                                        <Link className="btn btn-sm btn-secondary rounded-pill animate-scale" to="#comments">
                                            <i className="ci-message-circle animate-target fs-sm ms-n1 me-1" />
                                            {product.reviews_count}
                                        </Link>
                                        
                                        {/* ... share dropdown ... */}
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
                  className="main-swiper rounded-4 overflow-hidden"
                  loop={true}
                >
                  {product.image_urls?.map((url, index) => (
                    <SwiperSlide key={index} className="d-flex justify-content-center">
                      <a
                        data-glightbox={`gallery:product-gallery`}
                        data-type={getUrlType(url)}
                        href={url}
                        className="d-block w-100 h-100 position-relative gallery-item"
                      >
                        <div className="ratio" style={{ paddingBottom: '100%' }}>
                          {getUrlType(url) === 'image' ? (
                            <img 
                              src={url} 
                              alt={`Product view ${index + 1}`} 
                              className="object-fit-cover position-absolute top-0 start-0 w-100 h-100"
                            />
                          ) : (
                            <div className="bg-dark d-flex align-items-center justify-content-center w-100 h-100 position-absolute top-0 start-0">
                              <i className="ci-video text-white fs-1" />
                              <span className="visually-hidden">Video Preview</span>
                            </div>
                          )}
                        </div>
                        <div className="gallery-overlay"></div>
                        <i className="ci-zoom-in gallery-zoom-icon"></i>
                      </a>
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
                  {product.image_urls?.map((url, index) => (
                    <SwiperSlide key={index} className="swiper-thumb">
                      <a
                        data-glightbox={`gallery:product-gallery`}
                        data-type={getUrlType(url)}
                        href={url}
                        className="d-block w-100 h-100 position-relative gallery-item rounded-2"
                        onClick={() => mainSwiperRef.current?.slideTo(index)}
                      >
                        <div className="ratio ratio-1x1">
                          {getUrlType(url) === 'image' ? (
                            <img 
                              src={url} 
                              alt={`${url} ${index + 1}`} 
                              className="object-fit-cover position-absolute top-0 start-0 w-100 h-100 rounded-2"
                            />
                          ) : (
                            <div className="bg-dark d-flex align-items-center justify-content-center w-100 h-100 position-absolute top-0 start-0 rounded-2">
                              <i className="ci-video text-white fs-5" />
                              <span className="visually-hidden">Video Thumbnail</span>
                            </div>
                          )}
                        </div>
                        <div className="gallery-overlay"></div>
                        <i className="ci-zoom-in gallery-zoom-icon"></i>
                      </a>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            
            {/* Tabs Column - Side by side on large screens */}
            <div className="col-lg-5 col-xl-4 mt-5 mt-lg-0">
              {/* <div className="sticky-top" style={{ top: '1rem', position:'sticky !important' }}> */}
              <div className="">
                <section className="pt-5 pt-lg-0 mt-2 mt-sm-3 mt-lg-0">
                  <ul className="nav nav-pills mb-3 flex-nowrap" role="tablist">
                    <li className="nav-item" role="presentation">
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
                    <li className="nav-item" role="presentation">
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
                        Delivery & Returns
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button 
                        className="nav-link" 
                        id="reviews-tab" 
                        data-bs-toggle="pill" 
                        data-bs-target="#reviews-tab-pane" 
                        type="button" 
                        role="tab" 
                        aria-controls="#reviews-tab-pane" 
                        aria-selected="false"
                      >
                        <i className="ci-message-square me-2 ms-n1" />
                        Reviews <span className="badge rounded-pill bg-warning"> {product.reviews_count}</span>
                      </button>
                    </li>
                  </ul>
                  
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
                          <h3 className="h6">General specs</h3>
                          <ul className="list-unstyled d-flex flex-column gap-3 fs-sm pb-3 m-0 mb-2 mb-sm-3">
                            <li className="d-flex align-items-center position-relative pe-4">
                              <span>Model:</span>
                              <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                              <span className="text-dark-emphasis fw-medium text-end">iPhone 14 Plus</span>
                            </li>
                            <li className="d-flex align-items-center position-relative pe-4">
                              <span>Manufacturer:</span>
                              <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                              <span className="text-dark-emphasis fw-medium text-end">Apple Inc.</span>
                            </li>
                            <li className="d-flex align-items-center position-relative pe-4">
                              <span>Finish:</span>
                              <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                              <span className="text-dark-emphasis fw-medium text-end">Ceramic, Glass, Aluminium</span>
                              <i className="ci-info fs-base text-body-tertiary position-absolute top-50 end-0 translate-middle-y" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-custom-class="popover-sm" data-bs-content="Ceramic shield front, Glass back and Aluminium design" />
                            </li>
                            <li className="d-flex align-items-center position-relative pe-4">
                              <span>Capacity:</span>
                              <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                              <span className="text-dark-emphasis fw-medium text-end">128GB</span>
                            </li>
                            <li className="d-flex align-items-center position-relative pe-4">
                              <span>Chip:</span>
                              <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                              <span className="text-dark-emphasis fw-medium text-end">A15 Bionic chip</span>
                            </li>
                          </ul>
                          <h3 className="h6">Display</h3>
                          <ul className="list-unstyled d-flex flex-column gap-3 fs-sm pb-3 m-0 mb-2 mb-sm-3">
                            <li className="d-flex align-items-center position-relative pe-4">
                              <span>Diagonal:</span>
                              <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                              <span className="text-dark-emphasis fw-medium text-end">6.1"</span>
                            </li>
                            <li className="d-flex align-items-center position-relative pe-4">
                              <span>Screen type:</span>
                              <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                              <span className="text-dark-emphasis fw-medium text-end">Super Retina XDR</span>
                              <i className="ci-info fs-base text-body-tertiary position-absolute top-50 end-0 translate-middle-y" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-custom-class="popover-sm" data-bs-content="HDR display, True Tone, Wide color (P3), Haptic Touch, 800 nits brightness" />
                            </li>
                            <li className="d-flex align-items-center position-relative pe-4">
                              <span>Resolution:</span>
                              <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                              <span className="text-dark-emphasis fw-medium text-end">2778x1284px at 458ppi</span>
                            </li>
                            <li className="d-flex align-items-center position-relative pe-4">
                              <span>Refresh rate:</span>
                              <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                              <span className="text-dark-emphasis fw-medium text-end">120 Hz</span>
                            </li>
                          </ul>
                          <h3 className="h6">Camera</h3>
                          <ul className="list-unstyled d-flex flex-column gap-3 fs-sm pb-3 m-0 mb-2 mb-sm-3">
                            <li className="d-flex align-items-center position-relative pe-4">
                              <span>Front camera:</span>
                              <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                              <span className="text-dark-emphasis fw-medium text-end">12MP</span>
                            </li>
                            <li className="d-flex align-items-center position-relative pe-4">
                              <span>Main camera:</span>
                              <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                              <span className="text-dark-emphasis fw-medium text-end">12MP Ultra Wide</span>
                            </li>
                            <li className="d-flex align-items-center position-relative pe-4">
                              <span>Zoom:</span>
                              <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                              <span className="text-dark-emphasis fw-medium text-end">2x opical, 5x digital</span>
                            </li>
                            <li className="d-flex align-items-center position-relative pe-4">
                              <span>Video:</span>
                              <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                              <span className="text-dark-emphasis fw-medium text-end">4K video recording</span>
                              <i className="ci-info fs-base text-body-tertiary position-absolute top-50 end-0 translate-middle-y" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-custom-class="popover-sm" data-bs-content="4K video, 1080p HD video, 720p HD video, Cinematic mode, Action mode" />
                            </li>
                          </ul>
                          <h3 className="h6">Power and Battery</h3>
                          <ul className="list-unstyled d-flex flex-column gap-3 fs-sm pb-3 m-0 mb-2 mb-sm-3">
                            <li className="d-flex align-items-center position-relative pe-4">
                              <span>Fast charging:</span>
                              <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                              <span className="text-dark-emphasis fw-medium text-end">Yes</span>
                            </li>
                            <li className="d-flex align-items-center position-relative pe-4">
                              <span>Wireless charging:</span>
                              <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                              <span className="text-dark-emphasis fw-medium text-end">Yes</span>
                            </li>
                            <li className="d-flex align-items-center position-relative pe-4">
                              <span>Charging power:</span>
                              <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                              <span className="text-dark-emphasis fw-medium text-end">up to 15W</span>
                            </li>
                            <li className="d-flex align-items-center position-relative pe-4">
                              <span>Video playback:</span>
                              <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                              <span className="text-dark-emphasis fw-medium text-end">Up to 26 hours</span>
                            </li>
                            <li className="d-flex align-items-center position-relative pe-4">
                              <span>Audio playback:</span>
                              <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                              <span className="text-dark-emphasis fw-medium text-end">Up to 100 hours</span>
                            </li>
                          </ul>
                          <h3 className="h6">Size and Weight</h3>
                          <ul className="list-unstyled d-flex flex-column gap-3 fs-sm pb-3 m-0 mb-2 mb-sm-3">
                            <li className="d-flex align-items-center position-relative pe-4">
                              <span>Height:</span>
                              <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                              <span className="text-dark-emphasis fw-medium text-end">160.8 mm</span>
                            </li>
                            <li className="d-flex align-items-center position-relative pe-4">
                              <span>Width:</span>
                              <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                              <span className="text-dark-emphasis fw-medium text-end">78.1 mm</span>
                            </li>
                            <li className="d-flex align-items-center position-relative pe-4">
                              <span>Weight:</span>
                              <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                              <span className="text-dark-emphasis fw-medium text-end">203 grams</span>
                            </li>
                          </ul>
                          <div className="alert d-flex alert-info mb-2 mb-sm-3" role="alert">
                            <i className="ci-info fs-lg pe-1 me-2" style={{marginTop: '.125rem'}} />
                            <div className="fs-sm">Product specifications and equipment are subject to change without notice.</div>
                          </div>
                          <div className="pt-3">
                            <h3 className="h6">Do you have any questions?</h3>
                            <a className="btn btn-sm btn-primary" href="#!">Contact us</a>
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
                                <span>Returns:</span>
                                <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                                <span className="text-dark-emphasis fw-medium text-end">15 days.</span>
                                <i className="ci-info fs-base text-body-tertiary position-absolute top-50 end-0 translate-middle-y" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-custom-class="popover-sm" data-bs-content="Ceramic shield front, Glass back and Aluminium design" />
                              </li>
                            </ul>
                            <p>If you are not happy with your purchase, you can return it within 30 days for a full refund or exchange.</p>
                            <h3 className="h6">Returns</h3>
                            <ul className="list-unstyled d-flex flex-column gap-3 fs-sm pb-3 m-0 mb-2 mb-sm-3">
                              <li className="d-flex align-items-center position-relative pe-4">
                                <span>Time frame:</span>
                                <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                                <span className="text-dark-emphasis fw-medium text-end">Up to 15 days.</span>
                                <i className="ci-info fs-base text-body-tertiary position-absolute top-50 end-0 translate-middle-y" 
                                data-bs-toggle="popover" data-bs-trigger="hover" data-bs-custom-class="popover-sm" 
                                data-bs-content="up to 15 days interval to return an item to salesnet." />
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
                        <button className="btn btn-outline-dark mb-3" data-bs-target="#reviewForm" data-bs-toggle="modal" type="button">
                          Leave a review
                        </button>
                        {product && (
                          <ProductReviewForm 
                            productSlug={product.slug}
                            onReviewSubmitted={() => {
                              console.log('Review submitted, refresh reviews.');
                            }}
                          />
                        )}
                        
                      </div>
                      
                      {/* Review List */}
                      <div className="bg-body-tertiary rounded-4 p-4 p-sm-5">
                        <div className="vstack gap-3 gap-md-4 mt-n3">
                          {product.reviews && product.reviews.length > 0 ? (
                            product.reviews.map((review) => (
                              <div key={review.id} className="mt-3">
                                <div className="d-flex align-items-center justify-content-between gap-3 mb-3">
                                  <div className="d-flex align-items-center">
                                    <div className="ratio ratio-1x1 flex-shrink-0 bg-body-secondary rounded-circle overflow-hidden"
                                      style={{ width: "40px" }}>
                                      <img alt={review.username} src={review.avatar || '/assets/img/us/logos/avatar.png'} />
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