
// ProductRoutes.js
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import ProductsByOffersSlug from "../pages/offers/ProductsByOffersSlug";
import SingleOffer from "../pages/offers/SingleOffer";
import SeoConfig from "../utils/SeoManager";

// Lazy-loaded components
const ProductsByOffers = lazy(() => import("../pages/offers/ProductsByOffers"));

const OfferRoutes = () => {

return (
    <Suspense fallback={<LoadingSpinner />}>
    <>
    <SeoConfig 
        title={' Special Offer 22'}
        description={ 'Discover this exclusive offer with amazing discounts'}
        keywords={`offer, discount, deals`}
        // image={offer?.banner_image}
        canonical={`/offers`}
    />
    <Routes>
            <Route path="/" element={<ProductsByOffers />} />
            <Route path="/:slug" element={<SingleOffer />} />
            {/* <Route path="/:slug2" element={<ProductsByOffersSlug />} /> */}
    </Routes>
    </>
    </Suspense>
);

};

export default OfferRoutes;
