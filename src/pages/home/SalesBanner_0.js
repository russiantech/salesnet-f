import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Sample JSON data matching the component structure
const salesBannerData = [
    {
        id: 1,
        discount: 20,
        title: "Seasonal weekly sale 2024",
        promoCode: "Sale 2024",
        image: "assets/img/home/electronics/banner/camera.png",
        bgColor: "#accbee",
        darkBgColor: "#1b273a",
        gradient: "linear-gradient(90deg, #accbee 0%, #e7f0fd 100%)",
        darkGradient: "linear-gradient(90deg, #1b273a 0%, #1f2632 100%)"
    },
    {
        id: 2,
        discount: 30,
        title: "Summer electronics sale",
        promoCode: "Summer30",
        image: "assets/img/home/electronics/banner/camera.png",
        bgColor: "#f6d365",
        darkBgColor: "#2c3e50",
        gradient: "linear-gradient(90deg, #f6d365 0%, #fda085 100%)",
        darkGradient: "linear-gradient(90deg, #2c3e50 0%, #4ca1af 100%)"
    },
    {
        id: 3,
        discount: 15,
        title: "New arrivals discount",
        promoCode: "New2024",
        image: "assets/img/home/electronics/banner/camera.png",
        bgColor: "#84fab0",
        darkBgColor: "#1e3c72",
        gradient: "linear-gradient(90deg, #84fab0 0%, #8fd3f4 100%)",
        darkGradient: "linear-gradient(90deg, #1e3c72 0%, #2a5298 100%)"
    }
];
const SalesBanner = () => {
    return (_jsx("section", { className: "container pt-5 mt-sm-2 mt-md-3 mt-lg-4", children: _jsx(Swiper
        // modules={[Autoplay, Pagination, Navigation]}
        , { 
            // modules={[Autoplay, Pagination, Navigation]}
            modules: [Autoplay, Pagination], spaceBetween: 30, slidesPerView: 1, autoplay: { delay: 5000, disableOnInteraction: false }, loop: true, 
            // pagination={{ clickable: true }}
            pagination: {
                clickable: true,
            }, children: salesBannerData.map((banner) => (_jsx(SwiperSlide, { children: _jsxs("div", { className: "row g-0", children: [_jsx("div", { className: "col-md-3 mb-n4 mb-md-0", children: _jsxs("div", { className: "position-relative d-flex flex-column align-items-center justify-content-center h-100 py-5", children: [_jsxs("div", { className: "position-absolute top-0 start-0 w-100 h-100 d-none d-md-block", children: [_jsx("span", { className: "position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none-dark", style: { backgroundColor: banner.bgColor } }), _jsx("span", { className: "position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none d-block-dark", style: { backgroundColor: banner.darkBgColor } })] }), _jsxs("div", { className: "position-absolute top-0 start-0 w-100 h-100 d-md-none", children: [_jsx("span", { className: "position-absolute top-0 start-0 w-100 h-100 rounded-top-5 d-none-dark", style: { background: banner.gradient } }), _jsx("span", { className: "position-absolute top-0 start-0 w-100 h-100 rounded-top-5 d-none d-block-dark", style: { background: banner.darkGradient } })] }), _jsxs("div", { className: "position-relative z-1 display-1 text-dark-emphasis text-nowrap mb-0", children: [banner.discount, _jsxs("span", { className: "d-inline-block ms-n2", children: [_jsx("span", { className: "d-block fs-1", children: "%" }), _jsx("span", { className: "d-block fs-5", children: "OFF" })] })] })] }) }), _jsxs("div", { className: "col-md-9 position-relative", children: [_jsx("div", { className: "position-absolute top-0 start-0 h-100 overflow-hidden rounded-pill z-2 d-none d-md-block", style: { color: 'var(--cz-body-bg)', marginLeft: '-2px' }, children: _jsx("svg", { width: 4, height: 436, viewBox: "0 0 4 436", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { d: "M2 0L1.99998 436", stroke: "currentColor", strokeWidth: 3, strokeDasharray: "8 12", strokeLinecap: "round" }) }) }), _jsxs("div", { className: "position-relative", children: [_jsx("span", { className: "position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none-dark rtl-flip", style: { background: banner.gradient } }), _jsx("span", { className: "position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none d-block-dark rtl-flip", style: { background: banner.darkGradient } }), _jsxs("div", { className: "row align-items-center position-relative z-2", children: [_jsx("div", { className: "col-md-6 mb-3 mb-md-0", children: _jsxs("div", { className: "text-center text-md-start py-md-5 px-4 ps-md-5 pe-md-0 me-md-n5", children: [_jsx("h3", { className: "text-uppercase fw-bold ps-xxl-3 pb-2 mb-1", children: banner.title }), _jsxs("p", { className: "text-body-emphasis ps-xxl-3 mb-0", children: ["Use code ", _jsx("span", { className: "d-inline-block fw-semibold bg-white text-dark rounded-pill py-1 px-2", children: banner.promoCode }), " to get best offer"] })] }) }), _jsx("div", { className: "col-md-6 d-flex justify-content-center justify-content-md-end pb-5 pb-md-0", children: _jsxs("div", { className: "me-xxl-4", children: [_jsx("img", { src: banner.image, className: "d-block rtl-flip", width: 420, alt: "Promotional product" }), _jsx("div", { className: "d-none d-lg-block", style: { marginBottom: '-9%' } })] }) })] })] })] })] }) }, banner.id))) }) }));
};
export default SalesBanner;
