// import { useState, useEffect, useCallback, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { ProductAxiosService } from '../../services/net/ProductAxiosService';
// import LoadingSpinner from '../../components/shared/LoadingSpinner';
// import ProductSummary from '../products/ProductSummary';
// import { motion, AnimatePresence } from 'framer-motion';

// const TrendingProducts = () => {
//   const [trendingProducts, setTrendingProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [loadingMore, setLoadingMore] = useState(false);
//   const [error, setError] = useState(null);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);
//   const pageRef = useRef(page);
//   const containerRef = useRef(null);

//   const fetchTrendingProducts = useCallback(async (pageNumber = 1) => {
//     try {
//       const isInitialLoad = pageNumber === 1;
//       if (isInitialLoad) setLoading(true);
//       else setLoadingMore(true);

//       const response = await ProductAxiosService.fetchTrending({ 
//         currency: 'USD',
//         page: pageNumber,
//         page_size: 8 
//       });

//       setTrendingProducts(prev => [
//         ...(isInitialLoad ? [] : prev),
//         ...response.data.products
//       ]);
//       setHasMore(response.data.products.length >= 8);
//       setError(null);
//     } catch (err) {
//       setError(err.message || 'Failed to load trending products');
//     } finally {
//       setLoading(false);
//       setLoadingMore(false);
//     }
//   }, []);

//   const handleScroll = useCallback(() => {
//     if (!hasMore || loadingMore) return;
    
//     const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
//     const threshold = 200;
    
//     if (scrollHeight - (scrollTop + clientHeight) < threshold) {
//       setPage(prev => {
//         const nextPage = prev + 1;
//         pageRef.current = nextPage;
//         fetchTrendingProducts(nextPage);
//         return nextPage;
//       });
//     }
//   }, [hasMore, loadingMore, fetchTrendingProducts]);

//   useEffect(() => {
//     fetchTrendingProducts(1);
//   }, [fetchTrendingProducts]);

//   useEffect(() => {
//     const container = containerRef.current;
//     container.addEventListener('scroll', handleScroll);
//     return () => container.removeEventListener('scroll', handleScroll);
//   }, [handleScroll]);

//   if (error) {
//     return (
//       <div className="container py-5 text-center text-danger">
//         {error}
//       </div>
//     );
//   }

//   return (
//     <section 
//       className="container pt-5 mt-2 mt-sm-3 mt-lg-4"
//       ref={containerRef}
//       style={{ maxHeight: '80vh', overflowY: 'auto' }}
//     >
//       {/* Heading */}
//       <div className="d-flex align-items-center justify-content-between border-bottom pb-3 pb-md-4">
//         <h2 className="h3 mb-0">Trending products</h2>
//         <div className="nav">
//           <Link 
//             to="/products/trending" 
//             className="nav-link badge text-bg-success rounded-pill animate-scale"
//           >
//             <span className="text-nowrap animate-target">View all</span>
//             <i className="ci-chevron-right fs-base ms-1 animate-target"></i>
//           </Link>
//         </div>
//       </div>

//       {/* Product grid */}
//       <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 pt-4">
//         {/* <div className="vstack gap-3 gap-md-4 mt-n3 - overflow-y-auto pe-3" data-simplebar data-simplebar-auto-hide="false" style={{maxWidth: "100%", maxHeight: "650px"}}> */}
//         <AnimatePresence>
//           {trendingProducts.map((product, index) => (
//             <motion.div
//               className="col"
//               key={product.id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0 }}
//               transition={{ delay: index * 0.05 }}
//             >
//               <ProductSummary 
//                 product={product} 
//                 showDetails={true} 
//                 showMetrics={true} 
//               />
//             </motion.div>
//           ))}
//         </AnimatePresence>

//         {(loading || loadingMore) && (
//           <div className="col-12 text-center py-4">
//             <LoadingSpinner />
//           </div>
//         )}

//         {!hasMore && trendingProducts.length > 0 && (
//           <div className="col-12 text-center py-4">
//             <p className="text-muted">No more trending products to load</p>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default TrendingProducts;

// 
import { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ProductAxiosService } from '../../services/net/ProductAxiosService';
import LoadingSpinner from '../../components/shared/LoadingSpinner';
import ProductSummary from '../products/ProductSummary';
import { motion, AnimatePresence } from 'framer-motion';

// Import Swiper and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
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
      <section className="container pt-5 mt-2 mt-sm-3 mt-lg-4">
        <div className="text-center py-5">
          <LoadingSpinner />
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
      <div className="position-relative px-5 pt-4">
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
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: prevButtonRef.current,
            nextEl: nextButtonRef.current,
          }}
          pagination={{ 
            clickable: true,
            el: '.swiper-pagination',
          }}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
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
                  <ProductSummary 
                    product={product} 
                    showDetails={true} 
                    showMetrics={true} 
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