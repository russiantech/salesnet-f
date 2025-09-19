// v3 - made to auto-slide and 2 columns on mobile
import { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ProductAxiosService } from '../../services/net/ProductAxiosService';
import LoadingSpinner from '../../components/shared/LoadingSpinner';
import ProductSummary from '../products/ProductSummary';
import { motion, AnimatePresence } from 'framer-motion';

// Import Swiper and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TrendingProducts = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  const fetchTrendingProducts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await ProductAxiosService.fetchTrending({ 
        currency: 'USD',
        page: 1,
        page_size: 12
      });

      setTrendingProducts(response.data.products);
      setError(null);
    } catch (err) {
      setError(err.message || 'Failed to load trending products');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTrendingProducts();
  }, [fetchTrendingProducts]);

    if (loading) {
    return (
      <section className="container pt-2 mt-2">
        <div className="d-flex justify-content-center align-items-center">
        <LoadingSpinner size='sm' />
        <span className="ms-2">Getting products trend...</span>
      </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="container pt-5 mt-2 mt-sm-3 mt-lg-4">
        <div className="text-center text-danger py-5">
          {error}
        </div>
      </section>
    );
  }

  return (
    <section className="container pt-5 mt-2 mt-sm-3 mt-lg-4">
      {/* Heading */}
      <div className="d-flex align-items-center justify-content-between border-bottom pb-3 pb-md-4">
        <h2 className="h3 mb-0">Trending products</h2>
        <div className="nav">
          <Link 
            to="/products/trending" 
            className="nav-link badge text-bg-success rounded-pill animate-scale"
          >
            <span className="text-nowrap animate-target">View all</span>
            <i className="ci-chevron-right fs-base ms-1 animate-target"></i>
          </Link>
        </div>
      </div>

      {/* Slider */}
      <div className="position-relative pt-4">
        {/* Navigation buttons */}
        <button 
          ref={prevButtonRef}
          className="btn btn-icon btn-outline-secondary rounded-circle animate-slide-start position-absolute top-50 start-0 translate-middle-y mt-n3" 
          aria-label="Previous"
        >
          <i className="ci-chevron-left fs-lg animate-target"></i>
        </button>
        <button 
          ref={nextButtonRef}
          className="btn btn-icon btn-outline-secondary rounded-circle animate-slide-end position-absolute top-50 end-0 translate-middle-y mt-n3" 
          aria-label="Next"
        >
          <i className="ci-chevron-right fs-lg animate-target"></i>
        </button>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            prevEl: prevButtonRef.current,
            nextEl: nextButtonRef.current,
          }}
          pagination={{ 
            clickable: true,
            el: '.swiper-pagination',
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          spaceBetween={16}
          slidesPerView={2}
          breakpoints={{
            576: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            992: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          onInit={(swiper) => {
            // Override default navigation initialization
            swiper.params.navigation.prevEl = prevButtonRef.current;
            swiper.params.navigation.nextEl = nextButtonRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          <AnimatePresence>
            {trendingProducts.map((product, index) => (
              <SwiperSlide key={product.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {/* <ProductSummary 
                    product={product} 
                    showDetails={true} 
                    showMetrics={true} 
                  /> */}
                  <ProductSummary
                    product={product}
                    showMetrics={true} 
                    showSubscription={true}  // Toggle subscription display
                    showDetails={true}       // Enhanced details with subscription
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </AnimatePresence>
        </Swiper>
        
        {/* Pagination */}
        <div className="swiper-pagination position-static mt-3"></div>
      </div>
    </section>
  );
};

export default TrendingProducts;