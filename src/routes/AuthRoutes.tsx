// AuthRoutes.tsx
import { Route, Routes } from "react-router-dom";
import Signin from "../pages/auth/Signin";
import Signup from "../pages/auth/Signup";
import RecoverPassword from "../pages/auth/RecoverPassword";

const AuthRoutes = () => (
  <Routes>
    <Route path="/signin" element={<Signin />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/recover-password" element={<RecoverPassword />} />
  </Routes>
);

export default AuthRoutes;
