import { useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ProductSummary from './ProductSummary_0';
import LoadingCard from '../../components/shared/LoadingCard';
import Breadcrumb from '../../components/shared/Breadcrumb';
import { NotificationService } from '../../services/local/NotificationService';
import { ProductAxiosService } from '../../services/net/ProductAxiosService';

import './TrendingProducts.css'
import SeoConfig from '../../utils/SeoManager';

const TrendingProducts2 = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTrendingProducts = useCallback(async (pageNumber, signal) => {
    try {
      setLoading(true);
      const response = await ProductAxiosService.getTrendingProducts({
        page: pageNumber,
        page_size: 8
      }, { signal });

      setProducts(prev => [...prev, ...response.data.products]);
      setHasMore(response.data.page_meta.has_next_page);
      setError(null);
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError('Failed to load trending products');
        NotificationService.showDialog(err.message);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    fetchTrendingProducts(page, controller.signal);
    return () => controller.abort();
  }, [page, fetchTrendingProducts]);

  const handleScroll = useCallback(() => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 500 && !loading && hasMore) {
      setPage(prev => prev + 1);
    }
  }, [loading, hasMore]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  if (error) {
    return (
      <div className="container py-5 text-center">
        <div className="alert alert-danger">{error}</div>
      </div>
    );
  }

  return (
    <main className="content-wrapper">
      <div className="container py-4 py-lg-5">
        <div className="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom">
          <h2 className="h3 mb-0">
            <i className="ci-rocket text-danger me-2" />
            Trending Products
          </h2>
          <span className="badge bg-primary rounded-pill bg-opacity-10 text-primary">
            {products.length} Items
          </span>
        </div>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {products.map((product) => (
            <ProductSummary
              key={product.id}
              product={product}
              showBadge={true}
              discountBadge={product.has_discount}
            />
          ))}
        </div>

        {loading && (
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mt-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <LoadingCard key={`loading-${index}`} />
            ))}
          </div>
        )}

        {!hasMore && (
          <div className="text-center py-5 mt-4">
            <p className="text-muted">No more trending products to load</p>
          </div>
        )}
      </div>
    </main>
  );
};

// export default TrendingProducts;

// 
// import { useState, useEffect, useCallback } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';
// // import { ProductsAxiosService } from '../../services/net/ProductsAxiosService';
// import ProductSummary from '../products/ProductSummary';
// import LoadingCard from '../../components/shared/LoadingCard';
// import Breadcrumb from '../../components/shared/Breadcrumb';
// import { NotificationService } from '../../services/local/NotificationService';
// import { ProductAxiosService } from '../../services/net/ProductAxiosService';

const TrendingProducts = () => {
  const [products, setProducts] = useState([]);
  const [pageMeta, setPageMeta] = useState({});
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { scrollYProgress } = useScroll();
  const waveOpacity = useTransform(scrollYProgress, [0, 0.2], [0.6, 0]);
  const waveY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    const fetchTrendingProducts = async () => {
      try {
        setLoading(true);
        const response = await ProductAxiosService.getTrendingProducts({
          page,
          page_size: 8
        });

        setProducts(prev => [...prev, ...response.data.products]);
        setPageMeta(response.data.page_meta);
        setHasMore(response.data.page_meta.has_next_page);
        setError(null);
      } catch (err) {
        setError('Failed to load trending products');
        NotificationService.showDialog(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingProducts();
  }, [page]);

  const handleScroll = useCallback(() => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 500 && !loading && hasMore) {
      setPage(prev => prev + 1);
    }
  }, [loading, hasMore]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  if (error) {
    return (
      <div className="container py-5 text-center">
        <div className="alert alert-danger">{error}</div>
      </div>
    );
  }

  return (
    <main className="content-wrapper position-relative">

      <SeoConfig 
        title="Trending Products | Most Popular Items"
        description="Discover what's trending right now. Shop our collection of currently popular products."
        keywords="trending, popular products, best sellers"
        canonical="/trending"
      />

      {/* Wave Animation Backgrounds */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            opacity: waveOpacity,
            y: waveY,
            background: `linear-gradient(${45 + i * 45}deg, 
              #1c0d8c 0%, 
              #2d1a9c 100%)`,
            zIndex: -1 - i,
            transform: `scale(${1 + i * 0.1})`
          }}
        />
      ))}

      {/* Content Container */}
      <div className="position-relative" style={{ zIndex: 1 }}>
        {/* Breadcrumb */}
        <section className="container py-2">
          <div className="bg-white bg-opacity-75 p-2 rounded-3">
            <Breadcrumb
              items={[
                { label: 'Home', path: '/' },
                { label: 'Trending Products', path: '/trending' }
              ]} 
            />
          </div>
        </section>

        <div className="container pb-2">
          {/* Sticky Header */}
          <motion.div 
            className="sticky-top bg-white rounded-3 shadow-sm p-2 mb-2 zindex-sticky"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <div className="d-flex flex-wrap align-items-center justify-content-between">
              <div className="d-flex align-items-center flex-wrap">
                <h1 className="h4 pe-3 me-3 mb-2 mb-md-0">
                  <i className="ci-rocket text-danger me-2" />
                  Trending Internet Products
                </h1>
                <span className="badge bg-primary bg-opacity-15 border border-primary rounded-pill me-3 mb-2 mb-md-0">
                  {pageMeta.total_items_count || 0} Items
                </span>
              </div>
              
              <div className="d-flex align-items-center gap-3">
                <button className="btn btn-sm btn-outline-secondary">
                  <i className="ci-filter me-2" />
                  Filter
                </button>
                <div className="vr d-none d-md-inline-block" />
                <button className="btn btn-sm btn-outline-secondary">
                  <i className="ci-sort-asc me-2" />
                  Sort
                </button>
              </div>
            </div>
          </motion.div>

          {/* Products Grid */}
          <motion.div 
            className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className="col"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100
                }}
              >
                <ProductSummary
                  product={product}
                  showDetails={true}
                  showBadge={true}
                  discountBadge={product.has_discount}
                />
              </motion.div>
            ))}

            {loading && Array.from({ length: 4 }).map((_, index) => (
              <LoadingCard key={`loading-${index}`} />
            ))}

            {!hasMore && (
              <div className="col-12 text-center py-5">
                <p className="text-muted">No more trending products to load</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default TrendingProducts;