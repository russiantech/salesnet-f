import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// ProductRoutes.js
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import SingleOffer from "../pages/offers/SingleOffer";
import SeoConfig from "../utils/SeoManager";
// Lazy-loaded components
const ProductsByOffers = lazy(() => import("../pages/offers/ProductsByOffers"));
const OfferRoutes = () => {
    return (_jsx(Suspense, { fallback: _jsx(LoadingSpinner, {}), children: _jsxs(_Fragment, { children: [_jsx(SeoConfig, { title: ' Special Offer 22', description: 'Discover this exclusive offer with amazing discounts', keywords: `offer, discount, deals`, 
                    // image={offer?.banner_image}
                    canonical: `/offers` }), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(ProductsByOffers, {}) }), _jsx(Route, { path: "/:slug", element: _jsx(SingleOffer, {}) })] })] }) }));
};
export default OfferRoutes;
