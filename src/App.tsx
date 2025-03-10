import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Canvas from "./components/shared/modals/Canvas";
import Navigation from "./components/shared/Navigation";
import User from "./components/auth/User";
import PrivateRoute from "./services/guards/PrivateRoute";
import Footer from "./components/shared/Footer";
import Signup from "./components/auth/Signup";
import Signin from "./components/auth/Signin";
import Basket from "./components/user/basket/Basket";
import ProductDetails from "./components/pages/products/ProductDetails";
import Home from "./components/pages/home/Home";
import Publish from "./components/shared/modals/publish/Publish";
import { NotFoundPage, NotImplimentedPage } from './components/pages/Notfound';

const App = () => {
  const location = useLocation();

  // Paths where the header/footer should not appear
  const noHeaderFooterPaths = ['/auth/signin', "*", '/auth/signup', '/notfound', '/products-slug']; // Add more paths as needed

  const shouldHideHeaderFooter = noHeaderFooterPaths.includes(location.pathname);

  return (
    <>
      <NotImplimentedPage />
      <Publish />
      <Canvas />
      {!shouldHideHeaderFooter && <Navigation />}
      <main className="content-wrapper"> 
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/products" element={<Products />} /> */}
          <Route path="/products-slug" element={<ProductDetails />} />
          {/* <Route path="/products/:slug" element={<ProductDetails />} /> */}

          <Route path="/auth/signin" element={<Signin />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      {!shouldHideHeaderFooter && <Footer />}
    </>
  );
};

// Wrap the App component with Router in the main entry point
const Root = () => (
  <Router>
    <App />
  </Router>
);

export default Root;
