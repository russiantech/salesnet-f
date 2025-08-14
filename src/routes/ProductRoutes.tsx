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
    <Suspense fallback={<div className="loading-spinner"><div className="spinner"></div></div>}>
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
