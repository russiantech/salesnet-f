import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from '../components/shared/Navigation';
// import PrivateRoute from '../services/guards/PrivateRoute';
import ProtectedLayout from '../services/guards/ProtectedLayout';
import SeoConfig from '../utils/SeoManager';
// Lazy load user-related pages
const Personal = lazy(() => import('../pages/user/personal/Personal'));
const Notifications = lazy(() => import('../pages/user/notifications/Notifications'));
const Addresses = lazy(() => import('../pages/user/addresses/Addresses'));
const Favorites = lazy(() => import('../pages/user/favorites/Favorites'));
const Orders = lazy(() => import('../pages/user/orders/Orders'));
const Payments = lazy(() => import('../pages/user/payments/Payments'));
const Reviews = lazy(() => import('../pages/user/reviews/Reviews'));
const Terms = lazy(() => import('../pages/user/customerService/Terms'));
const Help = lazy(() => import('../pages/user/customerService/Help'));
const HelpSingle = lazy(() => import('../pages/user/customerService/HelpSingle'));
const Basket = lazy(() => import('../pages/user/basket/Basket'));
const Checkout = lazy(() => import('../pages/user/checkout/Checkout'));
const UserRoutes = () => (_jsxs(_Fragment, { children: [_jsx(Navigation, {}), _jsx(SeoConfig, { title: 'User - welcome to internet of sales.', description: 'Discover this exclusive offer with amazing discounts', keywords: `user, account, discount, deals`, 
            // image={offer?.banner_image}
            canonical: `/users` }), _jsx(Suspense, { fallback: null, children: _jsxs(Routes, { children: [_jsx(Route, { path: "/terms", element: _jsx(Terms, {}) }), _jsx(Route, { path: "/help", element: _jsx(Help, {}) }), _jsx(Route, { path: "/help/:slug", element: _jsx(HelpSingle, {}) }), _jsxs(Route, { element: _jsx(ProtectedLayout, {}), children: [_jsx(Route, { path: "/personal", element: _jsx(Personal, {}) }), _jsx(Route, { path: "/notifications", element: _jsx(Notifications, {}) }), _jsx(Route, { path: "/addresses", element: _jsx(Addresses, {}) }), _jsx(Route, { path: "/favorites", element: _jsx(Favorites, {}) }), _jsx(Route, { path: "/orders", element: _jsx(Orders, {}) }), _jsx(Route, { path: "/payments", element: _jsx(Payments, {}) }), _jsx(Route, { path: "/reviews", element: _jsx(Reviews, {}) }), _jsx(Route, { path: "/basket", element: _jsx(Basket, {}) }), _jsx(Route, { path: "/checkout", element: _jsx(Checkout, {}) })] })] }) })] }));
export default UserRoutes;
