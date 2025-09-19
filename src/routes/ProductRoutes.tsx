
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import TrendingProducts from "../pages/products/TrendingProducts";
import SeoConfig from "../utils/SeoManager";
import LoadingSpinner from "../components/shared/LoadingSpinner";
// import TrendingProducts from "../pages/home/TrendingProducts";

// Lazy-loaded components
const Products = lazy(() => import("../pages/products/Products"));
const ProductDetails = lazy(() => import("../pages/products/ProductDetails"));
const ProductsByCategories = lazy(() => import("../pages/products/ProductsByCategories"));
// const PublishPage = lazy(() => import("../components/shared/modals/publish/PublishPage"));
// const TrendingProducts = lazy(() => import("../pages/products/TrendingProducts"));

const ProductRoutes = () => {
  return (
    <>
    <SeoConfig 
        title={'Quality products - Browse internet of sales.'}
        description={ 'Discover this exclusive offer with amazing discounts'}
        keywords={`products, quality, discount, deals`}
        // image={offer?.banner_image}
        canonical={`/products`}
    />
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/:slug" element={<ProductDetails />} />
        {/* <Route path="/edit/:slug" element={<PublishPage productSlug="big-medical-show-main-can-a-measure" />} /> */}
        <Route path="/by-categories" element={<ProductsByCategories />} />
        <Route path="/trending" element={<TrendingProducts /> } />
      </Routes>
    </Suspense>
  </>
  );
};

export default ProductRoutes;
