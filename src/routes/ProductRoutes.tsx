// ProductRoutes.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetails from "../pages/products/ProductDetails";
import Home from "../pages/home/Home";


const ProductRoutes = () => {
  return (
    <Routes>
      <Route path="/products/:slug" element={<ProductDetails />} />
    </Routes>
  );
};

export default ProductRoutes;
