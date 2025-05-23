import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
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
import SeoConfig from "../utils/SeoManager";
// Lazy load auth-related pages
const Signin = lazy(() => import("../pages/auth/Signin"));
const Signup = lazy(() => import("../pages/auth/Signup"));
const RecoverPassword = lazy(() => import("../pages/auth/RecoverPassword"));
const AuthRoutes = () => (_jsx(Suspense, { fallback: null, children: _jsxs(_Fragment, { children: [_jsx(SeoConfig, { title: 'Authenticate and browse Salesnet Securely . Internet of sales.', description: 'Discover this exclusive offer with amazing discounts', keywords: `offer, discount, deals`, 
                // image={offer?.banner_image}
                canonical: `/signin` }), _jsxs(Routes, { children: [_jsx(Route, { path: "/signin", element: _jsx(Signin, {}) }), _jsx(Route, { path: "/signup", element: _jsx(Signup, {}) }), _jsx(Route, { path: "/recover-password", element: _jsx(RecoverPassword, {}) })] })] }) }));
export default AuthRoutes;
