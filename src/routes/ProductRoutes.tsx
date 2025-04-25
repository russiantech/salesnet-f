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

// Lazy-loaded components
const Products = lazy(() => import("../pages/products/Products"));
const ProductDetails = lazy(() => import("../pages/products/ProductDetails"));
const ProductsByCategories = lazy(() => import("../pages/products/ProductsByCategories"));
const PublishPage = lazy(() => import("../components/shared/modals/publish/PublishPage"));

const ProductRoutes = () => {
  return (
    <Suspense fallback={<div className="loading-spinner"><div className="spinner"></div></div>}>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/:slug" element={<ProductDetails />} />
        <Route path="/edit/:slug" element={<PublishPage productSlug="big-medical-show-main-can-a-measure" />} />
        <Route path="/by-categories" element={<ProductsByCategories />} />
      </Routes>
    </Suspense>
  );
};

export default ProductRoutes;
