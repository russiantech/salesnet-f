// import { lazy, Suspense } from 'react';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./pages/home/Home";
// import { NotFoundPage, NotImplimentedPage } from "./pages/Notfound";
// import Canvas from "./components/shared/modals/Canvas";
// import Publish from "./components/shared/modals/publish/Publish";
// import AuthRoutes from "./routes/AuthRoutes";
// import ProductRoutes from "./routes/ProductRoutes";
// import UserRoutes from "./routes/UserRoutes";
// import VendorRoutes from "./routes/VendorRoutes";

// const App = () => {
//   return (
//     <>
//       <NotImplimentedPage />
//       <Publish />
//       <Canvas />
      
//       <Routes>
//         <Route path="/" element={<Home />} />
//         {/* Include ProductRoutes and AuthRoutes as nested routes */}
//         <Route path="/products/*" element={<ProductRoutes />} />
//         <Route path="/auth/*" element={<AuthRoutes />} />
//         <Route path="/user/*" element={<UserRoutes />} />
//         <Route path="/vendor/*" element={<VendorRoutes />} />
//         <Route path="*" element={<NotFoundPage />} />
//       </Routes>
//     </>
//   );
// };


// const Root = () => (
//   <Router>
//     <App />
//   </Router>
// );

// export default Root;

import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import { NotFoundPage, NotImplimentedPage } from "./pages/Notfound";
import Canvas from "./components/shared/modals/Canvas";
import Publish from "./components/shared/modals/publish/Publish";

// Lazy load routes
const AuthRoutes = lazy(() => import("./routes/AuthRoutes"));
const ProductRoutes = lazy(() => import("./routes/ProductRoutes"));
const UserRoutes = lazy(() => import("./routes/UserRoutes"));
const VendorRoutes = lazy(() => import("./routes/VendorRoutes"));

const App = () => {
  return (
    <>
      <NotImplimentedPage />
      <Publish />
      <Canvas />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Include ProductRoutes and AuthRoutes as nested routes */}
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

const Root = () => (
  <Router>
    <App />
  </Router>
);

export default Root;
