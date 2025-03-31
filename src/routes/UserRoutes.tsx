import { Route, Routes } from 'react-router-dom';
import Personal from '../pages/user/personal/Personal';
import Notifications from '../pages/user/notifications/Notifications';
import Addresses from '../pages/user/addresses/Addresses';
import Favorites from '../pages/user/favorites/Favorites';
// import Basket from '../pages/user/basket/Basket';
import Orders from '../pages/user/orders/Orders';
import Payments from '../pages/user/payments/Payments';
import Reviews from '../pages/user/reviews/Reviews';
import Terms from '../pages/user/customerService/Terms';
import Help from '../pages/user/customerService/Help';
import HelpSingle from '../pages/user/customerService/HelpSingle';
import Basket from '../pages/user/basket/Basket';
import Navigation from '../components/shared/Navigation';
import Checkout from '../pages/user/checkout/Checkout';

const UserRoutes = () => (
  <>
    <Navigation />
    <Routes>
      <Route path="/personal" element={<Personal />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/addresses" element={<Addresses />} />
      <Route path="/favorites" element={<Favorites />} />
      {/* <Route path="/basket" element={<Basket />} /> */}
      <Route path="/orders" element={<Orders />} />
      <Route path="/payments" element={<Payments />} />
      <Route path="/reviews" element={<Reviews />} />

      {/* Shoppings */}
      <Route path="/basket" element={<Basket />} />
      <Route path="/checkout" element={<Checkout />} />

      {/* others */}
      <Route path="/terms" element={<Terms />} />
      <Route path="/help" element={<Help />} />
      <Route path="/help/:slug" element={<HelpSingle />} />
    </Routes>
  </>
);

export default UserRoutes