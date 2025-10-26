
// v-02
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from '../components/shared/Navigation';
import ProtectedLayout from '../services/guards/ProtectedLayout';
import SeoConfig from '../utils/SeoManager';
import CheckoutSuccess from '../pages/users/checkout/CheckoutSuccess';
import LoadingSpinner from '../components/shared/LoadingSpinner';
import Products from '../pages/users/products/Products';
// import PublishPage from '../components/shared/modals/publish/PublishPage';
import EditProductPage from '../pages/users/products/EditProductPage';

// Lazy load user-related pages
const Personal = lazy(() => import('../pages/users/personal/Personal'));
const Notifications = lazy(() => import('../pages/users/notifications/Notifications'));
const Addresses = lazy(() => import('../pages/users/addresses/Addresses'));
const Favorites = lazy(() => import('../pages/users/favorites/Favorites'));
const Orders = lazy(() => import('../pages/users/orders/Orders'));
const Payments = lazy(() => import('../pages/users/payments/Payments'));
const Reviews = lazy(() => import('../pages/users/reviews/Reviews'));
const Basket = lazy(() => import('../pages/users/basket/Basket'));
const Checkout = lazy(() => import('../pages/users/checkout/Checkout'));
const Dashboard = lazy(() => import('../pages/users/dashboard/Dashboard'));

// Lazy load SalesPages
const SalesPages = lazy(() => import('../pages/salespages/SalesPages'));

const UserRoutes = () => (
    <>
        <Navigation />
        <SeoConfig 
            title={'User - Internet of sales.'}
            description={'Discover this exclusive offer with amazing discounts'}
            keywords={`user, account, discount, deals`}
            canonical={`/users`}
        />

        {/* <Suspense fallback={null}> */}
        <Suspense fallback={<LoadingSpinner />}>
            <Routes>

                {/* Public SalesPages route - accessible without authentication */}
                <Route path="/:username" element={<SalesPages />} />
                
                {/* Protected routes */}
                <Route element={<ProtectedLayout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/personal" element={<Personal />} />
                    <Route path="/products" element={<Products />} />

                    <Route path="/products/:slug/edit" element={<EditProductPage />} />

                    {/* <Route path="/products/edit/:slug" element={<PublishPage productSlug="big-medical-show-main-can-a-measure" />} /> */}
                    <Route path="/notifications" element={<Notifications />} />
                    <Route path="/addresses" element={<Addresses />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/payments" element={<Payments />} />
                    <Route path="/reviews" element={<Reviews />} />
                    <Route path="/basket" element={<Basket />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/checkout/success" element={<CheckoutSuccess />} />
                </Route>
            </Routes>
        </Suspense>
    </>
);

export default UserRoutes;

