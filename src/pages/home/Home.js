import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// import HeroSlides from "./HeroSlides"
// import Features from "./Features"
// import NewArrivals from "./NewArrivals"
// import Offers from "./Offers"
// import SalesBanner from "./SalesBanner"
// import TrendingProducts from "./TrendingProducts"
// import Brands from "./Brands"
// import Navigation from "../../components/shared/Navigation"
// import Footer from "../../components/shared/Footer"
// import ProductsByCategories from "../products/ProductsByCategories"
// const Home = () => {
//     return (
//       <> 
//         <Navigation />
//         <main className="content-wrapper"> 
//           <SalesBanner />
//           {/* <HeroSlides /> */}
//           <Features />
//           <NewArrivals />
//           <TrendingProducts />
//           <SalesBanner />
//           <Offers/>
//           <ProductsByCategories />
//           <Brands/>
//         </main>
//         <Footer />
//       </>
//     )
//   }
// export default Home
// 
import { Suspense, lazy } from 'react';
import Navigation from "../../components/shared/Navigation";
import Footer from "../../components/shared/Footer";
import LoadingSpinner from '../../components/shared/LoadingSpinner';
// const HeroSlides = lazy(() => import("./HeroSlides"));
const Features = lazy(() => import("./Features"));
const NewArrivals = lazy(() => import("./NewArrivals"));
const Offers = lazy(() => import("./Offers"));
const SalesBanner = lazy(() => import("./SalesBanner"));
const TrendingProducts = lazy(() => import("./TrendingProducts"));
const Brands = lazy(() => import("./Brands"));
const ProductsByCategories = lazy(() => import("../products/ProductsByCategories"));
const Home = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Navigation, {}), _jsx("main", { className: "content-wrapper", children: _jsxs(Suspense, { fallback: _jsx(LoadingSpinner, {}), children: [_jsx(SalesBanner, {}), _jsx(Features, {}), _jsx(NewArrivals, {}), _jsx(TrendingProducts, {}), _jsx(SalesBanner, {}), _jsx(Offers, {}), _jsx(ProductsByCategories, {}), _jsx(Brands, {})] }) }), _jsx(Footer, {})] }));
};
export default Home;
