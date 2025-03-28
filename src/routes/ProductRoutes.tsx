// ProductRoutes.js
import { Route, Routes } from "react-router-dom";
import Products from "../pages/products/Products";
import ProductReviewForm from "../pages/products/ProductReviewForm";
import ProductDetails from "../pages/products/ProductDetails";
import ProductsByCategories from "../pages/products/ProductsByCategories";

const ProductRoutes = () => {
  return (
    <>
    <ProductReviewForm />

    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/:slug" element={<ProductDetails />} />
      <Route path="/by-categories" element={<ProductsByCategories />} />
    </Routes>
    </>
  );
};

export default ProductRoutes;
