import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// // Sample JSON data matching the component structure
// const salesBannerData = [
//   {
//     id: 1,
//     discount: 20,
//     title: "Seasonal weekly sale 2024",
//     promoCode: "Sale 2024",
//     image: "assets/img/home/electronics/banner/camera.png",
//     bgColor: "#accbee",
//     darkBgColor: "#1b273a",
//     gradient: "linear-gradient(90deg, #accbee 0%, #e7f0fd 100%)",
//     darkGradient: "linear-gradient(90deg, #1b273a 0%, #1f2632 100%)"
//   },
//   {
//     id: 2,
//     discount: 30,
//     title: "Summer electronics sale",
//     promoCode: "Summer30",
//     image: "assets/img/home/electronics/banner/camera.png",
//     bgColor: "#f6d365",
//     darkBgColor: "#2c3e50",
//     gradient: "linear-gradient(90deg, #f6d365 0%, #fda085 100%)",
//     darkGradient: "linear-gradient(90deg, #2c3e50 0%, #4ca1af 100%)"
//   },
//   {
//     id: 3,
//     discount: 15,
//     title: "New arrivals discount",
//     promoCode: "New2024",
//     image: "assets/img/home/electronics/banner/camera.png",
//     bgColor: "#84fab0",
//     darkBgColor: "#1e3c72",
//     gradient: "linear-gradient(90deg, #84fab0 0%, #8fd3f4 100%)",
//     darkGradient: "linear-gradient(90deg, #1e3c72 0%, #2a5298 100%)"
//   }
// ];
// const SalesBanner = () => {
//   return (
//     <section className="container pt-2 mt-2">
//       <Swiper
//         // modules={[Autoplay, Pagination, Navigation]}
//         modules={[Autoplay, Pagination]}
//         spaceBetween={30}
//         slidesPerView={1}
//         autoplay={{ delay: 5000, disableOnInteraction: false }}
//         loop
//         // pagination={{ clickable: true }}
//         pagination={{
//           clickable: true,
//           dynamicBullets: true
//         }}
//       >
//         {salesBannerData.map((banner) => (
//           <SwiperSlide key={banner.id}>
//             <div className="row g-0">
//               <div className="col-md-3 mb-n4 mb-md-0">
//                 <div className="position-relative d-flex flex-column align-items-center justify-content-center h-100 py-5">
//                   <div className="position-absolute top-0 start-0 w-100 h-100 d-none d-md-block">
//                     <span 
//                       className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none-dark" 
//                       style={{backgroundColor: banner.bgColor}} 
//                     />
//                     <span 
//                       className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none d-block-dark" 
//                       style={{backgroundColor: banner.darkBgColor}} 
//                     />
//                   </div>
//                   <div className="position-absolute top-0 start-0 w-100 h-100 d-md-none">
//                     <span 
//                       className="position-absolute top-0 start-0 w-100 h-100 rounded-top-5 d-none-dark" 
//                       style={{background: banner.gradient}} 
//                     />
//                     <span 
//                       className="position-absolute top-0 start-0 w-100 h-100 rounded-top-5 d-none d-block-dark" 
//                       style={{background: banner.darkGradient}} 
//                     />
//                   </div>
//                   <div className="position-relative z-1 display-1 text-dark-emphasis text-nowrap mb-0">
//                     {banner.discount}
//                     <span className="d-inline-block ms-n2">
//                       <span className="d-block fs-1">%</span>
//                       <span className="d-block fs-5">OFF</span>
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-9 position-relative">
//                 <div className="position-absolute top-0 start-0 h-100 overflow-hidden rounded-pill z-2 d-none d-md-block" style={{color: 'var(--cz-body-bg)', marginLeft: '-2px'}}>
//                   <svg width={4} height={436} viewBox="0 0 4 436" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M2 0L1.99998 436" stroke="currentColor" strokeWidth={3} strokeDasharray="8 12" strokeLinecap="round" />
//                   </svg>
//                 </div>
//                 <div className="position-relative">
//                   <span 
//                     className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none-dark rtl-flip" 
//                     style={{background: banner.gradient}} 
//                   />
//                   <span 
//                     className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none d-block-dark rtl-flip" 
//                     style={{background: banner.darkGradient}} 
//                   />
//                   <div className="row align-items-center position-relative z-2">
//                     <div className="col-md-6 mb-3 mb-md-0">
//                       <div className="text-center text-md-start py-md-5 px-4 ps-md-5 pe-md-0 me-md-n5">
//                         <h3 className="text-uppercase fw-bold ps-xxl-3 pb-2 mb-1">{banner.title}</h3>
//                         <p className="text-body-emphasis ps-xxl-3 mb-0">
//                           Use code <span className="d-inline-block fw-semibold bg-white text-dark rounded-pill py-1 px-2">{banner.promoCode}</span> to get best offer
//                         </p>
//                       </div>
//                     </div>
//                     <div className="col-md-6 d-flex justify-content-center justify-content-md-end pb-5 pb-md-0">
//                       <div className="me-xxl-4">
//                         <img src={banner.image} className="d-block rtl-flip" width={420} alt="Promotional product" />
//                         <div className="d-none d-lg-block" style={{marginBottom: '-9%'}} />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="d-none d-lg-block" style={{paddingBottom: '3%'}} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };
// export default SalesBanner;
// 
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Link } from 'react-router-dom'; // Import Link from your routing library
// // Updated JSON data with links
// const salesBannerData = [
//   {
//     id: 1,
//     discount: 20,
//     title: "Seasonal weekly sale 2024",
//     promoCode: "Sale 2024",
//     image: "assets/img/home/electronics/banner/camera.png",
//     bgColor: "#accbee",
//     darkBgColor: "#1b273a",
//     gradient: "linear-gradient(90deg, #accbee 0%, #e7f0fd 100%)",
//     darkGradient: "linear-gradient(90deg, #1b273a 0%, #1f2632 100%)",
//     link: "/promotions/seasonal-sale-2024", // Add link property
//     target: "_self" // Optional: "_blank" for new tab
//   },
//   {
//     id: 2,
//     discount: 30,
//     title: "Summer electronics sale",
//     promoCode: "Summer30",
//     image: "assets/img/home/electronics/banner/camera.png",
//     bgColor: "#f6d365",
//     darkBgColor: "#2c3e50",
//     gradient: "linear-gradient(90deg, #f6d365 0%, #fda085 100%)",
//     darkGradient: "linear-gradient(90deg, #2c3e50 0%, #4ca1af 100%)",
//     link: "/categories/electronics",
//     target: "_self"
//   },
//   {
//     id: 3,
//     discount: 15,
//     title: "New arrivals discount",
//     promoCode: "New2024",
//     image: "assets/img/home/electronics/banner/camera.png",
//     bgColor: "#84fab0",
//     darkBgColor: "#1e3c72",
//     gradient: "linear-gradient(90deg, #84fab0 0%, #8fd3f4 100%)",
//     darkGradient: "linear-gradient(90deg, #1e3c72 0%, #2a5298 100%)",
//     link: "/products/new-arrivals",
//     target: "_self"
//   }
// ];
// const SalesBanner = () => {
//   return (
//     <section className="container pt-2 mt-2">
//       <Swiper
//         modules={[Autoplay, Pagination]}
//         spaceBetween={30}
//         slidesPerView={1}
//         autoplay={{ delay: 5000, disableOnInteraction: false }}
//         loop
//         pagination={{
//           clickable: true,
//           dynamicBullets:true
//         }}
//       >
//         {salesBannerData.map((banner) => (
//           <SwiperSlide key={banner.id}>
//             {/* Wrap the entire banner content with Link */}
//             <Link 
//               to={banner.link} 
//               target={banner.target}
//               className="text-decoration-none"
//             >
//               <div className="row g-0">
//                 <div className="col-md-3 mb-n4 mb-md-0">
//                   <div className="position-relative d-flex flex-column align-items-center justify-content-center h-100 py-5">
//                     <div className="position-absolute top-0 start-0 w-100 h-100 d-none d-md-block">
//                       <span 
//                         className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none-dark" 
//                         style={{backgroundColor: banner.bgColor}} 
//                       />
//                       <span 
//                         className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none d-block-dark" 
//                         style={{backgroundColor: banner.darkBgColor}} 
//                       />
//                     </div>
//                     <div className="position-absolute top-0 start-0 w-100 h-100 d-md-none">
//                       <span 
//                         className="position-absolute top-0 start-0 w-100 h-100 rounded-top-5 d-none-dark" 
//                         style={{background: banner.gradient}} 
//                       />
//                       <span 
//                         className="position-absolute top-0 start-0 w-100 h-100 rounded-top-5 d-none d-block-dark" 
//                         style={{background: banner.darkGradient}} 
//                       />
//                     </div>
//                     <div className="position-relative z-1 display-1 text-dark-emphasis text-nowrap mb-0">
//                       {banner.discount}
//                       <span className="d-inline-block ms-n2">
//                         <span className="d-block fs-1">%</span>
//                         <span className="d-block fs-5">OFF</span>
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-md-9 position-relative">
//                   <div className="position-absolute top-0 start-0 h-100 overflow-hidden rounded-pill z-2 d-none d-md-block" style={{color: 'var(--cz-body-bg)', marginLeft: '-2px'}}>
//                     <svg width={4} height={436} viewBox="0 0 4 436" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M2 0L1.99998 436" stroke="currentColor" strokeWidth={3} strokeDasharray="8 12" strokeLinecap="round" />
//                     </svg>
//                   </div>
//                   <div className="position-relative">
//                     <span 
//                       className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none-dark rtl-flip" 
//                       style={{background: banner.gradient}} 
//                     />
//                     <span 
//                       className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none d-block-dark rtl-flip" 
//                       style={{background: banner.darkGradient}} 
//                     />
//                     <div className="row align-items-center position-relative z-2">
//                       <div className="col-md-6 mb-3 mb-md-0">
//                         <div className="text-center text-md-start py-md-5 px-4 ps-md-5 pe-md-0 me-md-n5">
//                           <h3 className="text-uppercase fw-bold ps-xxl-3 pb-2 mb-1">{banner.title}</h3>
//                           <p className="text-body-emphasis ps-xxl-3 mb-0">
//                             Use code <span className="d-inline-block fw-semibold bg-white text-dark rounded-pill py-1 px-2">{banner.promoCode}</span> to get best offer
//                           </p>
//                         </div>
//                       </div>
//                       <div className="col-md-6 d-flex justify-content-center justify-content-md-end pb-5 pb-md-0">
//                         <div className="me-xxl-4">
//                           <img src={banner.image} className="d-block rtl-flip" width={420} alt="Promotional product" />
//                           <div className="d-none d-lg-block" style={{marginBottom: '-9%'}} />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="d-none d-lg-block" style={{paddingBottom: '3%'}} />
//             </Link>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };
// export default SalesBanner;
// 
// src/components/SalesBanner.tsx
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../../components/shared/LoadingSpinner';
import { NotificationService } from '../../services/local/NotificationService';
import { OffersAxiosService } from '../../services/net/OffersAxiosService';
const SalesBanner2 = () => {
    const [banners, setBanners] = useState([]);
    const [loading, setLoading] = useState(true);
    // const { handleError } = useErrorHandler();
    useEffect(() => {
        const loadBanners = async () => {
            try {
                setLoading(true);
                const response = await OffersAxiosService.getPromotionalBanners(5);
                setBanners(response.data.banners);
            }
            catch (err) {
                // handleError(err, 'Failed to load promotional banners');
                console.error('Failed to fetch products:', err); // Log the error
                NotificationService.showDialog(err.message);
            }
            finally {
                setLoading(false);
            }
        };
        loadBanners();
    }, []);
    if (loading) {
        return (
        // <section className="container pt-2 mt-2">
        //   <div className="text-center py-4">
        //     <div className="spinner-border text-primary" role="status">
        //       <span className="visually-hidden">Loading...</span>
        //     </div>
        //   </div>
        // </section>
        _jsx(LoadingSpinner, {}));
    }
    if (!loading && banners.length === 0) {
        return null; // Don't render anything if no banners available
    }
    return (_jsx("section", { className: "container pt-2 mt-2", children: _jsx(Swiper, { modules: [Autoplay, Pagination], spaceBetween: 30, slidesPerView: 1, autoplay: {
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
            }, loop: banners.length > 1, pagination: {
                clickable: true,
                dynamicBullets: true
            }, children: banners.map((banner) => (_jsx(SwiperSlide, { children: _jsxs(Link, { to: banner.link, className: "text-decoration-none", "aria-label": `View ${banner.name} offer`, children: [_jsxs("div", { className: "row g-0", children: [_jsx("div", { className: "col-md-3 mb-n4 mb-md-0", children: _jsxs("div", { className: "position-relative d-flex flex-column align-items-center justify-content-center h-100 py-5", children: [_jsx("div", { className: "position-absolute top-0 start-0 w-100 h-100 d-none d-md-block", children: _jsx("span", { className: "position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none-dark", style: {
                                                        background: banner.gradient || 'linear-gradient(90deg, #accbee 0%, #e7f0fd 100%)'
                                                    } }) }), _jsx("div", { className: "position-absolute top-0 start-0 w-100 h-100 d-md-none", children: _jsx("span", { className: "position-absolute top-0 start-0 w-100 h-100 rounded-top-5 d-none-dark", style: {
                                                        background: banner.gradient || 'linear-gradient(90deg, #accbee 0%, #e7f0fd 100%)'
                                                    } }) }), banner.discount && (_jsxs("div", { className: "position-relative z-1 display-1 text-dark-emphasis text-nowrap mb-0", children: [Math.round(parseFloat(banner.discount)), _jsxs("span", { className: "d-inline-block ms-n2", children: [_jsx("span", { className: "d-block fs-1", children: "%" }), _jsx("span", { className: "d-block fs-5", children: "OFF" })] })] }))] }) }), _jsxs("div", { className: "col-md-9 position-relative", children: [_jsx("div", { className: "position-absolute top-0 start-0 h-100 overflow-hidden rounded-pill z-2 d-none d-md-block", style: { color: 'var(--cz-body-bg)', marginLeft: '-2px' }, children: _jsx("svg", { width: 4, height: 436, viewBox: "0 0 4 436", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { d: "M2 0L1.99998 436", stroke: "currentColor", strokeWidth: 3, strokeDasharray: "8 12", strokeLinecap: "round" }) }) }), _jsxs("div", { className: "position-relative", children: [_jsx("span", { className: "position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none-dark rtl-flip", style: {
                                                        background: banner.gradient || 'linear-gradient(90deg, #accbee 0%, #e7f0fd 100%)'
                                                    } }), _jsxs("div", { className: "row align-items-center position-relative z-2", children: [_jsx("div", { className: "col-md-6 mb-3 mb-md-0", children: _jsxs("div", { className: "text-center text-md-start py-md-5 px-4 ps-md-5 pe-md-0 me-md-n5", children: [_jsx("h3", { className: "text-uppercase fw-bold ps-xxl-3 pb-2 mb-1", children: banner.name }), banner.promo_code && (_jsxs("p", { className: "text-body-emphasis ps-xxl-3 mb-0", children: ["Use code ", _jsx("span", { className: "d-inline-block fw-semibold bg-white text-dark rounded-pill py-1 px-2", children: banner.promo_code }), " to get best offer"] }))] }) }), _jsx("div", { className: "col-md-6 d-flex justify-content-center justify-content-md-end pb-5 pb-md-0", children: _jsxs("div", { className: "me-xxl-4", children: [_jsx("img", { src: banner.image, className: "d-block rtl-flip", width: 420, alt: banner.name, onError: (e) => {
                                                                            const target = e.target;
                                                                            target.src = '/assets/img/placeholder-banner.jpg';
                                                                        } }), _jsx("div", { className: "d-none d-lg-block", style: { marginBottom: '-9%' } })] }) })] })] })] })] }), _jsx("div", { className: "d-none d-lg-block", style: { paddingBottom: '3%' } })] }) }, banner.id))) }) }));
};
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Default placeholder images (can be moved to a constants file)
const PLACEHOLDER_BANNERS = [
    '/assets/img/home/hero-slider/1.png',
    '/assets/img/home/hero-slider/2.png',
    '/assets/img/home/hero-slider/3.png',
];
const SalesBanner = () => {
    const [banners, setBanners] = useState([]);
    const [loading, setLoading] = useState(true);
    // const { handleError } = useErrorHandler();
    useEffect(() => {
        const loadBanners = async () => {
            try {
                setLoading(true);
                const response = await OffersAxiosService.getPromotionalBanners(10);
                // Enhance banner data with placeholder management
                const enhancedBanners = response.data.banners.map((banner, index) => ({
                    ...banner,
                    // Use a rotating placeholder if no image is provided
                    effectiveImage: banner.image || PLACEHOLDER_BANNERS[index % PLACEHOLDER_BANNERS.length],
                    // Default gradient if none provided
                    effectiveGradient: banner.gradient || 'linear-gradient(90deg, #accbee 0%, #e7f0fd 100%)'
                }));
                setBanners(enhancedBanners);
            }
            catch (err) {
                // handleError(err, 'Failed to load promotional banners');
                // Fallback to placeholder banners if API fails
                setBanners(PLACEHOLDER_BANNERS.map((img, index) => ({
                    id: index,
                    name: `Special Offer ${index + 1}`,
                    discount: '20',
                    promo_code: `OFFER${index + 1}`,
                    image: img,
                    gradient: 'linear-gradient(90deg, #accbee 0%, #e7f0fd 100%)',
                    link: '/offers',
                    effectiveImage: img,
                    effectiveGradient: 'linear-gradient(90deg, #accbee 0%, #e7f0fd 100%)'
                })));
            }
            finally {
                setLoading(false);
            }
        };
        loadBanners();
    }, []);
    const handleImageError = (e, index) => {
        const target = e.target;
        target.src = PLACEHOLDER_BANNERS[index % PLACEHOLDER_BANNERS.length];
        target.classList.add('placeholder-image');
    };
    if (loading) {
        return (_jsx("section", { className: "container pt-2 mt-2", children: _jsx(LoadingSpinner, {}) }));
    }
    if (!loading && banners.length === 0) {
        // Optional: Render a minimal placeholder when no banners are available
        return (_jsx("section", { className: "container pt-2 mt-2", children: _jsx("div", { className: "alert alert-info text-center", children: "No current promotions available. Check back soon!" }) }));
    }
    return (_jsx("section", { className: "container pt-2 mt-2", children: _jsx(Swiper, { modules: [Autoplay, Pagination], spaceBetween: 30, slidesPerView: 1, autoplay: {
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                waitForTransition: true
            }, loop: banners.length > 1, pagination: {
                clickable: true,
                dynamicBullets: true,
                dynamicMainBullets: 3
            }, speed: 800, grabCursor: true, children: banners.map((banner, index) => (_jsx(SwiperSlide, { children: _jsxs(Link, { to: banner.link, className: "text-decoration-none banner-link", "aria-label": `View ${banner.name} promotion`, children: [_jsxs("div", { className: "row g-0 banner-container", children: [_jsx("div", { className: "col-md-3 mb-n4 mb-md-0 discount-display", children: _jsxs("div", { className: "position-relative d-flex flex-column align-items-center justify-content-center h-100 py-5", children: [_jsx("div", { className: "position-absolute top-0 start-0 w-100 h-100 d-none d-md-block", children: _jsx("span", { className: "position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none-dark", style: { background: banner.effectiveGradient } }) }), _jsx("div", { className: "position-absolute top-0 start-0 w-100 h-100 d-md-none", children: _jsx("span", { className: "position-absolute top-0 start-0 w-100 h-100 rounded-top-5 d-none-dark", style: { background: banner.effectiveGradient } }) }), banner.discount && (_jsx("div", { className: "position-relative z-1 display-1 text-dark-emphasis text-nowrap mb-0", children: banner.is_percentage ? (_jsxs(_Fragment, { children: [Math.round(parseFloat(banner.discount)), _jsxs("span", { className: "d-inline-block ms-n2", children: [_jsx("span", { className: "d-block fs-1", children: "%" }), _jsx("span", { className: "d-block fs-5", children: "OFF" })] })] })) : (_jsxs(_Fragment, { children: [banner.currency_symbol || '$', Math.round(parseFloat(banner.discount)), _jsx("span", { className: "d-inline-block ms-n2", children: _jsx("span", { className: "d-block fs-5", children: "OFF" }) })] })) }))] }) }), _jsxs("div", { className: "col-md-9 position-relative banner-content", children: [_jsx("div", { className: "position-absolute top-0 start-0 h-100 overflow-hidden rounded-pill z-2 d-none d-md-block", style: { color: 'var(--cz-body-bg)', marginLeft: '-2px' }, children: _jsx("svg", { width: 4, height: 436, viewBox: "0 0 4 436", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { d: "M2 0L1.99998 436", stroke: "currentColor", strokeWidth: 3, strokeDasharray: "8 12", strokeLinecap: "round" }) }) }), _jsxs("div", { className: "position-relative", children: [_jsx("span", { className: "position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none-dark rtl-flip", style: { background: banner.effectiveGradient } }), _jsxs("div", { className: "row align-items-center position-relative z-2", children: [_jsx("div", { className: "col-md-6 mb-3 mb-md-0 banner-text", children: _jsxs("div", { className: "text-center text-md-start py-md-5 px-4 ps-md-5 pe-md-0 me-md-n5", children: [_jsx("h3", { className: "text-uppercase fw-bold ps-xxl-3 pb-2 mb-1", children: banner.name }), banner.promo_code && (_jsxs("p", { className: "text-body-emphasis ps-xxl-3 mb-0", children: ["Use code ", _jsx("span", { className: "d-inline-block fw-semibold bg-white text-dark rounded-pill py-1 px-2", children: banner.promo_code }), " to get best offer"] }))] }) }), _jsx("div", { className: "col-md-6 d-flex justify-content-center justify-content-md-end pb-5 pb-md-0 banner-image-container", children: _jsxs("div", { className: "me-xxl-4", children: [_jsx("img", { src: banner.effectiveImage, className: "d-block rtl-flip banner-image", width: 420, alt: banner.name, loading: "lazy", onError: (e) => handleImageError(e, index) }), _jsx("div", { className: "d-none d-lg-block", style: { marginBottom: '-9%' } })] }) })] })] })] })] }), _jsx("div", { className: "d-none d-lg-block", style: { paddingBottom: '3%' } })] }) }, banner.id))) }) }));
};
export default SalesBanner;
