// import { Route, Routes } from 'react-router-dom';
// import Personal from '../pages/user/personal/Personal';
// import Notifications from '../pages/user/notifications/Notifications';
// import Addresses from '../pages/user/addresses/Addresses';
// import Favorites from '../pages/user/favorites/Favorites';
// // import Basket from '../pages/user/basket/Basket';
// import Orders from '../pages/user/orders/Orders';
// import Payments from '../pages/user/payments/Payments';
// import Reviews from '../pages/user/reviews/Reviews';
// import Terms from '../pages/user/customerService/Terms';
// import Help from '../pages/user/customerService/Help';
// import HelpSingle from '../pages/user/customerService/HelpSingle';
// import Basket from '../pages/user/basket/Basket';
// import Navigation from '../components/shared/Navigation';
// import Checkout from '../pages/user/checkout/Checkout';

// const UserRoutes = () => (
//   <>
//     <Navigation />
//     <Routes>
//       <Route path="/personal" element={<Personal />} />
//       <Route path="/notifications" element={<Notifications />} />
//       <Route path="/addresses" element={<Addresses />} />
//       <Route path="/favorites" element={<Favorites />} />
//       {/* <Route path="/basket" element={<Basket />} /> */}
//       <Route path="/orders" element={<Orders />} />
//       <Route path="/payments" element={<Payments />} />
//       <Route path="/reviews" element={<Reviews />} />

//       {/* Shoppings */}
//       <Route path="/basket" element={<Basket />} />
//       <Route path="/checkout" element={<Checkout />} />

//       {/* others */}
//       <Route path="/terms" element={<Terms />} />
//       <Route path="/help" element={<Help />} />
//       <Route path="/help/:slug" element={<HelpSingle />} />
//     </Routes>
//   </>
// );

// export default UserRoutes

import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from '../components/shared/Navigation';
import PrivateRoute from '../services/guards/PrivateRoute';

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
        {/* <PrivateRoute path="/personal" component={<Personal>} /> */}
        {/* <PrivateRoute path="/personal" element={<Personal />} /> */}
        {/* <Route path="/personal" element={<Personal />} /> */}

        <Route path="/personal" element={ <PrivateRoute>  <Personal /> </PrivateRoute>} />

        <Route path="/notifications" element={<Notifications />} />
        <Route path="/addresses" element={<Addresses />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/help" element={<Help />} />
        <Route path="/help/:slug" element={<HelpSingle />} />
      </Routes>
    </Suspense>
  </>
);

export default UserRoutes;
