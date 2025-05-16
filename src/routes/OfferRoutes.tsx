
// ProductRoutes.js
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import ProductsByOffersSlug from "../pages/offers/ProductsByOffersSlug";
import SingleOffer from "../pages/offers/SingleOffer";

// Lazy-loaded components
const ProductsByOffers = lazy(() => import("../pages/offers/ProductsByOffers"));

const OfferRoutes = () => {

return (
    <Suspense fallback={<LoadingSpinner />}>
    <Routes>
            <Route path="/" element={<ProductsByOffers />} />
            <Route path="/:slug" element={<SingleOffer />} />
            <Route path="/:slug2" element={<ProductsByOffersSlug />} />
    </Routes>
    </Suspense>
);

};

export default OfferRoutes;
