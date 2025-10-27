// 
import { Suspense, lazy } from 'react';
import Navigation from "../../components/shared/Navigation";
import Footer from "../../components/shared/Footer";
import LoadingSpinner from '../../components/shared/LoadingSpinner';
import SeoConfig from '../../utils/SeoManager';

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
        <SeoConfig 
          title={`Salesnet:Internet Of Sales`}
          description="Internet of Sales. Premier internet marketplace using technology and AI to enhance and secure the buying and selling experience.
          At Salesnet, we're dedicated to transforming commerce and sales through the internet and AI technologies by creating seamless connections between buyers and sellers with intelligent sales pages for users.
          Discover quality products at unbeatable prices."
          keywords={`sales, internet, marketplace, vendors, sellers, products, quality, discount, deals`}
          canonical={`/`}
        />
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
