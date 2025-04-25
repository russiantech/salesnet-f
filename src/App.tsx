import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import { NotFoundPage, NotImplimentedPage } from "./pages/Notfound";
import CategoriesPage from './pages/categories/CategoriesPage';

const ProductsInCategory = lazy(() => import("./pages/products/ProductsInCategory"));

// Lazy load routes
const AuthRoutes = lazy(() => import("./routes/AuthRoutes"));
const ProductRoutes = lazy(() => import("./routes/ProductRoutes"));
const UserRoutes = lazy(() => import("./routes/UserRoutes"));
const VendorRoutes = lazy(() => import("./routes/VendorRoutes"));
// 
// const NotImplimentedPage = lazy(() => import("./pages/Notfound"));
const Canvas = lazy(() => import("./components/shared/modals/Canvas"));
const Publish = lazy(() => import("./components/shared/modals/publish/Publish"));
const Search = lazy(() => import("./components/shared/modals/Search/Search"));
const SearchPage = lazy(() => import("./components/shared/SearchPage"));

const AppComponent = () => {
  return (
    <>
      {/* Static content that’s always rendered */}
      <NotImplimentedPage />
      <Publish />
      <Canvas />
      <Search />
      
      {/* Suspense handles all lazy components */}
      <Suspense fallback={<div className="loading-spinner"><div className="spinner"></div></div>}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/categories/:slug" element={<ProductsInCategory />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/products/*" element={<ProductRoutes />} />
            <Route path="/auth/*" element={<AuthRoutes />} />
            <Route path="/user/*" element={<UserRoutes />} />
            <Route path="/vendor/*" element={<VendorRoutes />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

const App = () => (
    <Router>
      <AppComponent />
    </Router>
);
  
export default App;
