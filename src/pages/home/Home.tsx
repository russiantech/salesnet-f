
import HeroSlides from "./HeroSlides"
import Features from "./Features"
import NewArrivals from "./NewArrivals"
import Offers from "./Offers"
import SalesBanner from "./SalesBanner"
import TrendingProducts from "./TrendingProducts"
import Brands from "./Brands"
import Navigation from "../../components/shared/Navigation"
import Footer from "../../components/shared/Footer"


const Home = () => {
    return (
      <>
        <Navigation />
        <main className="content-wrapper"> 
          <SalesBanner />
          {/* <HeroSlides /> */}
          <Features />
          <NewArrivals />
          <TrendingProducts />
          <SalesBanner />
          <Offers/>
          <Brands/>
        </main>
        <Footer />
      </>
    )
  }

export default Home
