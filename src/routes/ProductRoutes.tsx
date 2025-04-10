// ProductRoutes.js
import { Route, Routes } from "react-router-dom";
import Products from "../pages/products/Products";
import ProductReviewForm from "../pages/products/ProductReviewForm";
import ProductDetails from "../pages/products/ProductDetails";
import ProductsByCategories from "../pages/products/ProductsByCategories";
import PublishPage from "../components/shared/modals/publish/PublishPage.bak_4";

const ProductRoutes = () => {
  return (
    <>
    <ProductReviewForm />
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/:slug" element={<ProductDetails />} />
      <Route path="/edit/:slug" element={<PublishPage productSlug="big-medical-show-main-can-a-measure" />} />
      <Route path="/by-categories" element={<ProductsByCategories />} />
    </Routes>
    </>
  );
};

export default ProductRoutes;