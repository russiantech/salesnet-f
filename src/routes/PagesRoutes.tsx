
// ProductRoutes.js
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import TrendingProducts from "../pages/products/TrendingProducts";
import SeoConfig from "../utils/SeoManager";
import SalesPages from "../pages/salespages/SalesPages";

// Lazy-loaded components
const Products = lazy(() => import("../pages/products/Products"));
const ProductDetails = lazy(() => import("../pages/products/ProductDetails"));
const ProductsByCategories = lazy(() => import("../pages/products/ProductsByCategories"));
const PublishPage = lazy(() => import("../components/shared/modals/publish/PublishPage"));

const PagesRoutes = () => {
  return (
    <>
    <SeoConfig 
            title={'Pages - my internet sales page.'}
            description={ 'Discover this exclusive offer with amazing discounts'}
            keywords={`products, quality, discount, deals`}
            // image={offer?.banner_image}
            canonical={`/pages`}
        />
    <Suspense fallback={<div className="loading-spinner"><div className="spinner"></div></div>}>
      <Routes>
        <Route path="/" element={<Products />} />
        {/* <Route path="/:slug" element={<SalesPages />} /> */}
        <Route path="/:username" element={<SalesPages />} />
        {/* <Route path="/edit/:slug" element={<PublishPage productSlug="big-medical-show-main-can-a-measure" />} />
        <Route path="/by-categories" element={<ProductsByCategories />} />
        <Route path="/trending" element={<TrendingProducts /> } /> */}
      </Routes>
        
    </Suspense>
  </>
  );
};

export default PagesRoutes;
