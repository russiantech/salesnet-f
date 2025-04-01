// import { Route, Routes } from "react-router-dom";
// import Dashboard from "../pages/vendor/dashboard/Dashboard";
// import Products from "../pages/vendor/products/Products";
// import Sales from "../pages/vendor/sales/Sales";
// import Payouts from "../pages/vendor/payouts/Payouts";
// import Settings from "../pages/vendor/settings/Settings";
// import Purchases from "../pages/vendor/purchases/Purchases";
// import Favorites from "../pages/vendor/favorites/Favorites";

// const UserRoutes = () => (
//     <Routes>
//       <Route path="/dashboard" element={<Dashboard />} />
//       <Route path="/products" element={<Products />} />
//       <Route path="/sales" element={<Sales />} />
//       <Route path="/payouts" element={<Payouts />} />
//       <Route path="/settings" element={<Settings />} />
//       <Route path="/purchases" element={<Purchases />} />
//       <Route path="/favorites" element={<Favorites />} />
      
//       {/* <Route path="/help/:slug" element={<HelpSingle />} />  */}
//     </Routes>
//   );
  
// export default UserRoutes

// 
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// Lazy load vendor-related pages
const Dashboard = lazy(() => import("../pages/vendor/dashboard/Dashboard"));
const Products = lazy(() => import("../pages/vendor/products/Products"));
const Sales = lazy(() => import("../pages/vendor/sales/Sales"));
const Payouts = lazy(() => import("../pages/vendor/payouts/Payouts"));
const Settings = lazy(() => import("../pages/vendor/settings/Settings"));
const Purchases = lazy(() => import("../pages/vendor/purchases/Purchases"));
const Favorites = lazy(() => import("../pages/vendor/favorites/Favorites"));

const VendorRoutes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/products" element={<Products />} />
      <Route path="/sales" element={<Sales />} />
      <Route path="/payouts" element={<Payouts />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/purchases" element={<Purchases />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  </Suspense>
);

export default VendorRoutes;
