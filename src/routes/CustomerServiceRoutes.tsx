
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import SeoConfig from "../utils/SeoManager";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import Navigation from "../components/shared/Navigation";

const AboutUs = lazy(() => import("../pages/customerService/AboutUs"));
const ContactUs = lazy(() => import("../pages/customerService/ContactUs"));

const Help = lazy(() => import("../pages/customerService/Help"));
const HelpSingle = lazy(() => import("../pages/customerService/HelpSingle"));
const Terms = lazy(() => import("../pages/customerService/Terms"));

// Lazy-loaded components
// const ContactUs = lazy(() => import("../pages/customerService/ContactUs"));

const customerServiceRoutes = () => {
  return (
    <>
    <SeoConfig 
        title={'Salesnet - Browse internet of sales.'}
        description={ 'Discover this exclusive offer with amazing discounts'}
        keywords={`products, quality, discount, deals`}
        // image={offer?.banner_image}
        canonical={`/products`}
    />
     <Navigation />
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        {/* <Route path="/:slug" element={<ProductDetails />} /> */}
        {/* <Route path="/edit/:slug" element={<PublishPage productSlug="big-medical-show-main-can-a-measure" />} /> */}
        
        {/* Public routes */}
        <Route path="/terms" element={<Terms />} />
        <Route path="/support-center" element={<Help />} />
        <Route path="/help/:slug" element={<HelpSingle />} />
                        
      </Routes>
    </Suspense>
  </>
  );
};

export default customerServiceRoutes;
