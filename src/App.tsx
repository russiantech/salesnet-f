// import { lazy, Suspense } from 'react';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./pages/home/Home";
// import { NotFoundPage, NotImplimentedPage } from "./pages/Notfound";
// import CategoriesPage from './pages/categories/CategoriesPage';
// import OfferForm from './pages/vendor/offers/OfferForm';

// const ProductsInCategory = lazy(() => import("./pages/products/ProductsInCategory"));

// // Lazy load routes
// const AuthRoutes = lazy(() => import("./routes/AuthRoutes"));
// const ProductRoutes = lazy(() => import("./routes/ProductRoutes"));
// const UserRoutes = lazy(() => import("./routes/UserRoutes"));
// const VendorRoutes = lazy(() => import("./routes/VendorRoutes"));
// // 
// // const NotImplimentedPage = lazy(() => import("./pages/Notfound"));
// const Canvas = lazy(() => import("./components/shared/modals/Canvas"));
// const Publish = lazy(() => import("./components/shared/modals/publish/Publish"));
// const Search = lazy(() => import("./components/shared/modals/Search/Search"));
// const SearchPage = lazy(() => import("./components/shared/SearchPage"));

// // TEST ROUTES
// const TestRoutes = lazy(() => import("./routes/TestRoutes"));

// const AppComponent = () => {
//   return (
//     <>
//       {/* Static content that’s always rendered */}
//       <NotImplimentedPage />
//       <Publish />
//       <Canvas />
//       <Search />
      
//       {/* Suspense handles all lazy components */}
//       <Suspense fallback={<div className="loading-spinner"><div className="spinner"></div></div>}>
//         <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/categories" element={<CategoriesPage />} />
//             <Route path="/categories/:slug" element={<ProductsInCategory />} />
//             <Route path="/search" element={<SearchPage />} />
//             <Route path="/products/*" element={<ProductRoutes />} />
//             <Route path="/auth/*" element={<AuthRoutes />} />
//             <Route path="/user/*" element={<UserRoutes />} />
//             <Route path="/vendor/*" element={<VendorRoutes />} />
//             {/* TEST ROUTES */}
//             <Route path="/insert-offers" element={<OfferForm offer={undefined} onSuccess={undefined} />} />
//             <Route path="/tests/*" element={<TestRoutes />} />

//             <Route path="*" element={<NotFoundPage />} />
//         </Routes>
//       </Suspense>
//     </>
//   );
// };

// const App = () => (
//     <Router>
//       <AppComponent />
//     </Router>
// );
  
// export default App;


//
import { lazy, Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import { NotFoundPage, NotImplimentedPage } from "./pages/Notfound";
import CategoriesPage from './pages/categories/CategoriesPage';
// import OfferForm from './pages/vendor/offers/OfferForm';
import LoadingSpinner from './components/shared/LoadingSpinner';
import AuthCanvas from './components/shared/modals/AuthCanvas';
import { GlobalNotifications } from './components/shared/GlobalNotifications';
import Installer from './components/shared/Installer';
import ManualInstallButton from './components/shared/ManualInstallButton';

const ProductsInCategory = lazy(() => import("./pages/products/ProductsInCategory"));

// Lazy load routes
const AuthRoutes = lazy(() => import("./routes/AuthRoutes"));
const ProductRoutes = lazy(() => import("./routes/ProductRoutes"));
const OfferRoutes = lazy(() => import("./routes/OfferRoutes"));
const UserRoutes = lazy(() => import("./routes/UserRoutes"));
const VendorRoutes = lazy(() => import("./routes/VendorRoutes"));

const Canvas = lazy(() => import("./components/shared/modals/Canvas"));
const Publish = lazy(() => import("./components/shared/modals/publish/Publish"));
const Search = lazy(() => import("./components/shared/modals/Search/Search"));
const SearchPage = lazy(() => import("./components/shared/SearchPage"));

// TEST ROUTES
const TestRoutes = lazy(() => import("./routes/TestRoutes"));

const App = () => {
  return (
    <>
      {/* Static content that's always rendered */}
      <NotImplimentedPage />
      <Publish />
      <Canvas />
      <Search />
      <AuthCanvas />
      <GlobalNotifications />

      <ManualInstallButton />
      
      {/* Suspense handles all lazy components */}
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          
            <Route path="/" element={<Home />} /> 
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/categories/:slug" element={<ProductsInCategory />} />
            <Route path="/search" element={<SearchPage />} />

            <Route path="/products/*" element={<ProductRoutes />} />

            <Route path="/offers/*" element={<OfferRoutes />} />

            <Route path="/auth/*" element={<AuthRoutes />} />

            <Route path="/user/*" element={<UserRoutes />} />

            <Route path="/vendor/*" element={<VendorRoutes />} />

            {/* TEST ROUTES */}
            {/* <Route path="/insert-offers" element={<OfferForm offer={undefined} onSuccess={undefined} />} /> */}
            <Route path="/tests/*" element={<TestRoutes />} />

            <Route path="*" element={<NotFoundPage />} />
            
        </Routes>
      </Suspense>

       <Installer />

    </>
  );
};

export default App;