
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
    return (
      <> 
        <Navigation />
        <main className="content-wrapper"> 
          <Suspense fallback={<LoadingSpinner />}>
            <SalesBanner />
            {/* <HeroSlides /> */}
            <Features />
            <NewArrivals />
            <TrendingProducts />
            <SalesBanner />
            <Offers />
            <ProductsByCategories />
            <Brands />
          </Suspense>
        </main>
        <Footer />
      </>
    );
}

export default Home;
