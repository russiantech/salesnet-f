

import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from '../components/shared/Navigation';
import PrivateRoute from '../services/guards/PrivateRoute';
import ProtectedLayout from '../services/guards/ProtectedLayout';

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

const UserRoutes = () => (
    <>
    <Navigation />
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Public routes */}
        <Route path="/terms" element={<Terms />} />
        <Route path="/help" element={<Help />} />
        <Route path="/help/:slug" element={<HelpSingle />} />
        
        {/* Protected routes */}
        <Route element={<ProtectedLayout />}>
          <Route path="/personal" element={<Personal />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/addresses" element={<Addresses />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  </>
);

export default UserRoutes;
