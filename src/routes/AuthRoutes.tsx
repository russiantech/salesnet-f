// // AuthRoutes.tsx
// import { Route, Routes } from "react-router-dom";
// import Signin from "../pages/auth/Signin";
// import Signup from "../pages/auth/Signup";
// import RecoverPassword from "../pages/auth/RecoverPassword";

// const AuthRoutes = () => (
//   <Routes>
//     <Route path="/signin" element={<Signin />} />
//     <Route path="/signup" element={<Signup />} />
//     <Route path="/recover-password" element={<RecoverPassword />} />
//   </Routes>
// );

// export default AuthRoutes;

// 
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// Lazy load auth-related pages
const Signin = lazy(() => import("../pages/auth/Signin"));
const Signup = lazy(() => import("../pages/auth/Signup"));
const RecoverPassword = lazy(() => import("../pages/auth/RecoverPassword"));

const AuthRoutes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/recover-password" element={<RecoverPassword />} />
    </Routes>
  </Suspense>
);

export default AuthRoutes;
