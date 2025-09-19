
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import SeoConfig from "../utils/SeoManager";
import OAuthCallbackHandler from "../components/auth/OAuthCallbackHandler";

// Lazy load auth-related pages
const Signin = lazy(() => import("../pages/auth/Signin"));
const Signup = lazy(() => import("../pages/auth/Signup"));
const RecoverPassword = lazy(() => import("../pages/auth/RecoverPassword"));
const VerifyRecoveryCode = lazy(() => import("../components/auth/VerifyRecoveryCode"));

const AuthRoutes = () => (
  <Suspense fallback={null}>
  <>
  <SeoConfig 
          title={'Authenticate and browse Salesnet Securely.'}
        description={ 'Discover this exclusive offer with amazing discounts'}
        keywords={`offer, discount, deals`}
        // image={offer?.banner_image}
        canonical={`/signin`}
    />

    <Routes>
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/recover-password" element={<RecoverPassword />} />
      
      {/* New recovery verification route */}
      <Route path="/verify-recovery" element={<VerifyRecoveryCode />} />

      {/*  */}
      {/* OAuth callback route - handles all provider callbacks */}
        <Route path="/oauth/callback" element={<OAuthCallbackHandler />} />
        {/* You can also add specific provider callback routes if needed */}
        <Route path="/oauth/callback/:provider" element={<OAuthCallbackHandler />} />

    </Routes>
  </>
  </Suspense>
);

export default AuthRoutes;
