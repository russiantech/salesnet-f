import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// // ProductRoutes.js
// import { Route, Routes } from "react-router-dom";
// import Products from "../pages/products/Products";
// import ProductDetails from "../pages/products/ProductDetails";
// import ProductsByCategories from "../pages/products/ProductsByCategories";
// import PublishPage from "../components/shared/modals/publish/PublishPage";
// const ProductRoutes = () => {
//   return (
//     <>
//     {/* <ProductReviewForm /> */}
//     <Routes>
//       <Route path="/" element={<Products />} />
//       <Route path="/:slug" element={<ProductDetails />} />
//       <Route path="/edit/:slug" element={<PublishPage productSlug="big-medical-show-main-can-a-measure" />} />
//       <Route path="/by-categories" element={<ProductsByCategories />} />
//     </Routes>
//     </>
//   );
// };
// export default ProductRoutes;
// 
// ProductRoutes.js
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import TrendingProducts from "../pages/products/TrendingProducts";
import SeoConfig from "../utils/SeoManager";
// import TrendingProducts from "../pages/home/TrendingProducts";
// Lazy-loaded components
const Products = lazy(() => import("../pages/products/Products"));
const ProductDetails = lazy(() => import("../pages/products/ProductDetails"));
const ProductsByCategories = lazy(() => import("../pages/products/ProductsByCategories"));
const PublishPage = lazy(() => import("../components/shared/modals/publish/PublishPage"));
// const TrendingProducts = lazy(() => import("../pages/products/TrendingProducts"));
const ProductRoutes = () => {
    return (_jsxs(_Fragment, { children: [_jsx(SeoConfig, { title: 'Quality products - Browse internet of sales.', description: 'Discover this exclusive offer with amazing discounts', keywords: `products, quality, discount, deals`, 
                // image={offer?.banner_image}
                canonical: `/products` }), _jsx(Suspense, { fallback: _jsx("div", { className: "loading-spinner", children: _jsx("div", { className: "spinner" }) }), children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Products, {}) }), _jsx(Route, { path: "/:slug", element: _jsx(ProductDetails, {}) }), _jsx(Route, { path: "/edit/:slug", element: _jsx(PublishPage, { productSlug: "big-medical-show-main-can-a-measure" }) }), _jsx(Route, { path: "/by-categories", element: _jsx(ProductsByCategories, {}) }), _jsx(Route, { path: "/trending", element: _jsx(TrendingProducts, {}) })] }) })] }));
};
export default ProductRoutes;
