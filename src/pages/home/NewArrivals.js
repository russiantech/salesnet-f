import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NotificationService } from '../../services/local/NotificationService';
import LoadingSpinner from '../../components/shared/LoadingSpinner';
import { ProductAxiosService } from '../../services/net/ProductAxiosService';
// import renderRatingStar '../../utils/RenderRatingStar';
import { ProductRating } from '../products/ProductFeatures';
const NewArrivals = () => {
    const [products, setProducts] = useState([]);
    const [bannerProduct, setBannerProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState({
        currentPage: 1,
        totalPages: 1,
        hasNext: false,
        hasPrev: false
    });
    useEffect(() => {
        const fetchNewArrivals = async () => {
            try {
                setLoading(true);
                // const response = await OffersAxiosService.getNewArrivals();
                const response = await ProductAxiosService.getNewArrivals();
                if (response.data.success) {
                    setProducts(response.data.products);
                    setBannerProduct(response.data.banner_product || null);
                    setPagination({
                        currentPage: response.data.page_meta.current_page_number,
                        totalPages: response.data.page_meta.total_pages_count,
                        hasNext: response.data.page_meta.has_next_page,
                        hasPrev: response.data.page_meta.has_prev_page
                    });
                }
            }
            catch (error) {
                NotificationService.showDialog('Failed to load new arrivals');
            }
            finally {
                setLoading(false);
            }
        };
        fetchNewArrivals();
    }, []);
    if (loading) {
        return (_jsx("section", { className: "container pt-5 mt-1 mt-sm-2 mt-md-3 mt-lg-4", children: _jsx(LoadingSpinner, {}) }));
    }
    return (_jsxs("section", { className: "container pt-5 mt-1 mt-sm-2 mt-md-3 mt-lg-4", children: [_jsx("h2", { className: "h3 pb-2 pb-sm-3", children: "New Arrivals" }), _jsxs("div", { className: "row", children: [bannerProduct && (_jsx("div", { className: "col-lg-4", "data-bs-theme": "dark", children: _jsxs("div", { className: "d-flex flex-column align-items-center justify-content-end h-100 text-center overflow-hidden rounded-5 px-4 px-lg-3 pt-4 pb-5", style: {
                                background: `#1d2c41 url(${bannerProduct.image_urls[0] || '/assets/img/home/electronics/banner/background.jpg'}) center/cover no-repeat`
                            }, children: [_jsx("div", { className: "ratio animate-up-down position-relative z-2 me-lg-4", style: {
                                        maxWidth: '320px',
                                        marginBottom: '-19%',
                                        aspectRatio: 'calc(690 / 640 * 100%)'
                                    }, children: _jsx("img", { src: bannerProduct.image_urls[0] || '/assets/img/home/electronics/banner/laptop.png', alt: bannerProduct.name }) }), _jsx("h3", { className: "display-2 mb-2", children: bannerProduct.name }), _jsxs("p", { className: "text-body fw-medium mb-4", children: [bannerProduct.description.substring(0, 50), "..."] }), _jsxs(Link, { className: "btn btn-sm btn-primary", to: `/products/${bannerProduct.slug}`, children: ["From $", bannerProduct.price.toFixed(2), _jsx("i", { className: "ci-arrow-up-right fs-base ms-1 me-n1" })] })] }) })), _jsx("div", { className: "col-sm-6 col-lg-4 d-flex flex-column gap-3 pt-4 py-lg-4", children: products.slice(0, 4).map((product, index) => (_jsxs("div", { className: "position-relative animate-underline d-flex align-items-center ps-xl-3", children: [_jsx("div", { className: "ratio ratio-1x1 flex-shrink-0", style: { width: '110px' }, children: _jsx("img", { src: product.image_urls[0] || '/assets/img/shop/electronics/thumbs/01.png', alt: product.name, className: "object-fit-cover rounded" }) }), _jsxs("div", { className: "w-100 min-w-0 ps-2 ps-sm-3", children: [_jsx("div", { className: "d-flex align-items-center gap-2 mb-2", children: _jsx("div", { className: "d-flex gap-1 fs-xs", children: _jsx(ProductRating, { averageRating: product.average_rating, reviewsCount: product.reviews_count }) }) }), _jsx("h4", { className: "mb-2", children: _jsx(Link, { className: "stretched-link d-block fs-sm fw-medium text-truncate", to: `/products/${product.slug}`, children: _jsx("span", { className: "animate-target", children: product.name }) }) }), _jsxs("div", { className: "h5 mb-0", children: ["$", product.price.toFixed(2)] })] })] }, product.id))) }), _jsx("div", { className: "col-sm-6 col-lg-4 d-flex flex-column gap-3 pt-3 py-lg-4", children: products.slice(4, 8).map((product, index) => (_jsxs("div", { className: "position-relative animate-underline d-flex align-items-center ps-xl-3", children: [_jsx("div", { className: "ratio ratio-1x1 flex-shrink-0", style: { width: '110px' }, children: _jsx("img", { src: product.image_urls[0] || '/assets/img/shop/electronics/thumbs/01.png', alt: product.name, className: "object-fit-cover" }) }), _jsxs("div", { className: "w-100 min-w-0 ps-2 ps-sm-3", children: [_jsx("div", { className: "d-flex align-items-center gap-2 mb-2", children: _jsx("div", { className: "d-flex gap-1 fs-xs", children: _jsx(ProductRating, { averageRating: product.average_rating, reviewsCount: product.average_rating }) }) }), _jsx("h4", { className: "mb-2", children: _jsx(Link, { className: "stretched-link d-block fs-sm fw-medium text-truncate", to: `/products/${product.slug}`, children: _jsx("span", { className: "animate-target", children: product.name }) }) }), _jsxs("div", { className: "h5 mb-0", children: ["$", product.price.toFixed(2)] })] })] }, product.id))) })] })] }));
};
export default NewArrivals;
