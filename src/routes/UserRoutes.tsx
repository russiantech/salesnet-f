import { Route, Routes } from 'react-router-dom';
import Personal from '../pages/user/personal/Personal';
// import Notifications from '../pages/user/notifications/Notifications';
// import Addresses from '../pages/user/addresses/Address';
// import Favorites from '../pages/user/favorites/Favorites';
// import Basket from '../pages/user/basket/Basket';
// import Orders from '../pages/user/orders/Orders';
// import Payments from '../pages/user/payments/Payments';
// import Reviews from '../pages/user/reviews/Reviews';

const UserRoutes = () => (
    <Routes>
      <Route path="/personal" element={<Personal />} />
      {/* <Route path="/notifications" element={<Notifications />} />
      <Route path="/addresses" element={<Addresses />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/basket" element={<Basket />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/payments" element={<Payments />} />
      <Route path="/reviews" element={<Reviews />} /> */}
    </Routes>
  );
  
export default UserRoutes