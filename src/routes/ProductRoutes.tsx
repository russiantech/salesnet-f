// ProductRoutes.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetails from "../pages/products/ProductDetails";

const ProductRoutes = () => {
  return (
    <Routes>
      <Route path="/:slug" element={<ProductDetails />} />
    </Routes>
  );
};

export default ProductRoutes;
