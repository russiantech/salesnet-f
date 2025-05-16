
// 
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// Lazy load test-related pages
const OfferForm = lazy(() => import("../pages/vendor/offers/OfferForm"));

const TestRoutes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes> 
      <Route path="/insert-offers" element={<OfferForm offer={undefined} onSuccess={undefined} />} />
    </Routes>
  </Suspense>
);

export default TestRoutes;
