

// import { lazy, Suspense } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Navigation from '../components/shared/Navigation';
// // import PrivateRoute from '../services/guards/PrivateRoute';
// import ProtectedLayout from '../services/guards/ProtectedLayout';
// import SeoConfig from '../utils/SeoManager';
// import CheckoutSuccess from '../pages/users/checkout/CheckoutSuccess';

// // Lazy load user-related pages
// const Personal = lazy(() => import('../pages/users/personal/Personal'));
// const Notifications = lazy(() => import('../pages/users/notifications/Notifications'));
// const Addresses = lazy(() => import('../pages/users/addresses/Addresses'));
// const Favorites = lazy(() => import('../pages/users/favorites/Favorites'));
// const Orders = lazy(() => import('../pages/users/orders/Orders'));
// const Payments = lazy(() => import('../pages/users/payments/Payments'));
// const Reviews = lazy(() => import('../pages/users/reviews/Reviews'));
// const Terms = lazy(() => import('../pages/users/customerService/Terms'));
// const Help = lazy(() => import('../pages/users/customerService/Help'));
// const HelpSingle = lazy(() => import('../pages/users/customerService/HelpSingle'));
// const Basket = lazy(() => import('../pages/users/basket/Basket'));
// const Checkout = lazy(() => import('../pages/users/checkout/Checkout'));

// const UserRoutes = () => (
//     <>
//     <Navigation />
//     {/* <Suspense fallback={<div className="loading-spinner"><div className="spinner"></div></div>}> */}
//     <SeoConfig 
//         title={'User - welcome to internet of sales.'}
//         description={ 'Discover this exclusive offer with amazing discounts'}
//         keywords={`user, account, discount, deals`}
//         // image={offer?.banner_image}
//         canonical={`/users`}
//     />

//     <Suspense fallback={null}>
//       <Routes>
//         {/* Public routes */}
//         <Route path="/terms" element={<Terms />} />
//         <Route path="/help" element={<Help />} />
//         <Route path="/help/:slug" element={<HelpSingle />} />
        
//         {/* Protected routes */}
//         {/* <Route element={()=> ProtectedLayout()}> */}
//         <Route element={<ProtectedLayout />}>
//           <Route path="/personal" element={<Personal />} />
//           <Route path="/notifications" element={<Notifications />} />
//           <Route path="/addresses" element={<Addresses />} />
//           <Route path="/favorites" element={<Favorites />} />
//           <Route path="/orders" element={<Orders />} />
//           <Route path="/payments" element={<Payments />} />
//           <Route path="/reviews" element={<Reviews />} />
//           <Route path="/basket" element={<Basket />} />
//           <Route path="/checkout" element={<Checkout />} />
//           <Route path="/checkout/success" element={<CheckoutSuccess />} />
//         </Route>
//       </Routes>
//     </Suspense>
//   </>
// );

// export default UserRoutes;


// v-02
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from '../components/shared/Navigation';
import ProtectedLayout from '../services/guards/ProtectedLayout';
import SeoConfig from '../utils/SeoManager';
import CheckoutSuccess from '../pages/users/checkout/CheckoutSuccess';
import LoadingSpinner from '../components/shared/LoadingSpinner';

// Lazy load user-related pages
const Personal = lazy(() => import('../pages/users/personal/Personal'));
const Notifications = lazy(() => import('../pages/users/notifications/Notifications'));
const Addresses = lazy(() => import('../pages/users/addresses/Addresses'));
const Favorites = lazy(() => import('../pages/users/favorites/Favorites'));
const Orders = lazy(() => import('../pages/users/orders/Orders'));
const Payments = lazy(() => import('../pages/users/payments/Payments'));
const Reviews = lazy(() => import('../pages/users/reviews/Reviews'));
const Terms = lazy(() => import('../pages/users/customerService/Terms'));
const Help = lazy(() => import('../pages/users/customerService/Help'));
const HelpSingle = lazy(() => import('../pages/users/customerService/HelpSingle'));
const Basket = lazy(() => import('../pages/users/basket/Basket'));
const Checkout = lazy(() => import('../pages/users/checkout/Checkout'));

// Lazy load SalesPages
const SalesPages = lazy(() => import('../pages/salespages/SalesPages'));

const UserRoutes = () => (
    <>
        <Navigation />
        <SeoConfig 
            title={'User - welcome to internet of sales.'}
            description={'Discover this exclusive offer with amazing discounts'}
            keywords={`user, account, discount, deals`}
            canonical={`/users`}
        />

        {/* <Suspense fallback={null}> */}
        <Suspense fallback={<LoadingSpinner />}>
            <Routes>
                {/* Public routes */}
                <Route path="/terms" element={<Terms />} />
                <Route path="/help" element={<Help />} />
                <Route path="/help/:slug" element={<HelpSingle />} />
                
                {/* Public SalesPages route - accessible without authentication */}
                <Route path="/:username" element={<SalesPages />} />
                
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
                    <Route path="/checkout/success" element={<CheckoutSuccess />} />
                </Route>
            </Routes>
        </Suspense>
    </>
);

export default UserRoutes;


// Updated to allow rendering some routes without navigation bar
// v-05 -+++++ THIS VERSION CAN EXCLUDES NAVIGATION BAR IN SOME PAGE +++++++++++--
// import { lazy, Suspense } from 'react';
// import { Route, Routes, useLocation } from 'react-router-dom';
// import Navigation from '../components/shared/Navigation';
// import ProtectedLayout from '../services/guards/ProtectedLayout';
// import SeoConfig from '../utils/SeoManager';
// import CheckoutSuccess from '../pages/users/checkout/CheckoutSuccess';

// // Lazy load user-related pages
// const Personal = lazy(() => import('../pages/users/personal/Personal'));
// const Notifications = lazy(() => import('../pages/users/notifications/Notifications'));
// const Addresses = lazy(() => import('../pages/users/addresses/Addresses'));
// const Favorites = lazy(() => import('../pages/users/favorites/Favorites'));
// const Orders = lazy(() => import('../pages/users/orders/Orders'));
// const Payments = lazy(() => import('../pages/users/payments/Payments'));
// const Reviews = lazy(() => import('../pages/users/reviews/Reviews'));
// const Terms = lazy(() => import('../pages/users/customerService/Terms'));
// const Help = lazy(() => import('../pages/users/customerService/Help'));
// const HelpSingle = lazy(() => import('../pages/users/customerService/HelpSingle'));
// const Basket = lazy(() => import('../pages/users/basket/Basket'));
// const Checkout = lazy(() => import('../pages/users/checkout/Checkout'));

// // Lazy load SalesPages
// const SalesPages = lazy(() => import('../pages/salespages/SalesPages'));

// const UserRoutes = () => {
//     const location = useLocation();
    
//     // Define routes that should NOT show navigation (with /users prefix)
//     const routesWithoutNavigation = [
//         '/users/checkout',
//         '/users/checkout/success'
//     ];
    
//     // Define all known routes that SHOULD show navigation
//     const routesWithNavigation = [
//         '/users/personal',
//         '/users/notifications', 
//         '/users/addresses',
//         '/users/favorites',
//         '/users/orders',
//         '/users/payments',
//         '/users/reviews',
//         '/users/basket',
//         '/users/terms',
//         '/users/help'
//     ];
    
//     // Check if current route is a sales page (dynamic username route)
//     // Sales page is /users/username where username doesn't contain slashes or match known routes
//     const isSalesPage = location.pathname.match(/^\/users\/[^\/]+$/) && 
//                        !routesWithNavigation.some(route => location.pathname.startsWith(route)) &&
//                        !routesWithoutNavigation.some(route => location.pathname.startsWith(route));
    
//     // Determine if navigation should be shown
//     const shouldShowNavigation = !routesWithoutNavigation.some(route => 
//         location.pathname.startsWith(route)
//     ) && !isSalesPage;

//     return (
//         <>
//             {shouldShowNavigation && <Navigation />}
            
//             <SeoConfig 
//                 title={'User - welcome to internet of sales.'}
//                 description={'Discover this exclusive offer with amazing discounts'}
//                 keywords={`user, account, discount, deals`}
//                 canonical={`/users`}
//             />

//             <Suspense fallback={null}>
//                 <Routes>
//                     {/* Public routes */}
//                     <Route path="/terms" element={<Terms />} />
//                     <Route path="/help" element={<Help />} />
//                     <Route path="/help/:slug" element={<HelpSingle />} />
                    
//                     {/* Public SalesPages route - accessible without authentication */}
//                     <Route path="/:username" element={<SalesPages />} />
                    
//                     {/* Protected routes */}
//                     <Route element={<ProtectedLayout />}>
//                         <Route path="/personal" element={<Personal />} />
//                         <Route path="/notifications" element={<Notifications />} />
//                         <Route path="/addresses" element={<Addresses />} />
//                         <Route path="/favorites" element={<Favorites />} />
//                         <Route path="/orders" element={<Orders />} />
//                         <Route path="/payments" element={<Payments />} />
//                         <Route path="/reviews" element={<Reviews />} />
//                         <Route path="/basket" element={<Basket />} />
//                         <Route path="/checkout" element={<Checkout />} />
//                         <Route path="/checkout/success" element={<CheckoutSuccess />} />
//                     </Route>
//                 </Routes>
//             </Suspense>
//         </>
//     );
// };

// export default UserRoutes;