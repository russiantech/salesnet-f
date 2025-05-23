import { jsx as _jsx } from "react/jsx-runtime";
// 
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// Lazy load test-related pages
const OfferForm = lazy(() => import("../pages/vendor/offers/OfferForm"));
const TestRoutes = () => (_jsx(Suspense, { fallback: _jsx("div", { children: "Loading..." }), children: _jsx(Routes, { children: _jsx(Route, { path: "/insert-offers", element: _jsx(OfferForm, { offer: undefined, onSuccess: undefined }) }) }) }));
export default TestRoutes;
