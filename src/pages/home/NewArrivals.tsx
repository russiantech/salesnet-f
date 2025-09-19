// v5 - Fixed responsive text and dimmed background
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { NotificationService } from '../../services/local/NotificationService';
import LoadingSpinner from '../../components/shared/LoadingSpinner';
import { ProductAxiosService } from '../../services/net/ProductAxiosService';
import { ProductRating } from '../products/ProductFeatures';
import { formatCurrency } from '../../utils/currencyUtils';

// Helper function to check if URL is a video
const isVideoUrl = (url) => {
  if (!url) return false;
  const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi', '.mkv'];
  return videoExtensions.some(ext => url.toLowerCase().includes(ext));
};

// Media component that handles both images and videos
const MediaPreview = ({ mediaUrl, altText, className = "", style = {} }) => {
  const videoRef = useRef(null);
  
  if (isVideoUrl(mediaUrl)) {
    return (
      <>
        <video
          ref={videoRef}
          src={mediaUrl}
          className={className}
          style={style}
          muted
          loop
          playsInline
          preload="metadata"
          controls={false}
        />
        {/* Play icon overlay */}
        <div 
          className="position-absolute d-flex align-items-center justify-content-center"
          style={{
            bottom: '0',
            left: '0',
            width: '18px',
            height: '18px',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            borderRadius: '50%',
            zIndex: 2,
            pointerEvents: 'none'
          }}
        >
          <i className="ci-play text-white" style={{ fontSize: '7px', marginLeft: '1px' }}></i>
        </div>
      </>
    );
  }
  
  return (
    <img 
      src={mediaUrl || '/assets/img/shop/electronics/thumbs/01.png'} 
      alt={altText}
      className={className}
      style={style}
    />
  );
};

const NewArrivals = () => {
  const [products, setProducts] = useState([]);
  const [bannerProduct, setBannerProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    hasNext: false,
    hasPrev: false
  });

  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        setLoading(true);
        const response = await ProductAxiosService.getNewArrivals()
        
        if (response.data.success) {
          setProducts(response.data.products);
          setBannerProduct(response.data.banner_product || null);
          
          setPagination({
            currentPage: response.data.page_meta.current_page_number,
            totalPages: response.data.page_meta.total_pages_count,
            hasNext: response.data.page_meta.has_next_page,
            hasPrev: response.data.page_meta.has_prev_page
          });
        }
      } catch (error) {
        NotificationService.showDialog('Failed to load new arrivals');
      } finally {
        setLoading(false);
      }
    };

    fetchNewArrivals();
  }, []);

    if (loading) {
      return (
        <section className="container pt-2 mt-2">
          <div className="d-flex justify-content-center align-items-center">
          <LoadingSpinner size='sm' />
          <span className="ms-2">Getting top recent products for you...</span>
        </div>
        </section>
      );
    }

  return (
    <section className="container pt-5 mt-1 mt-sm-2 mt-md-3 mt-lg-4">
      <h2 className="h3 pb-2 pb-sm-3">New Arrivals</h2>
      
      <div className="row">
        {/* Banner Product */}
        {bannerProduct && (
          <div className="col-lg-4" data-bs-theme="dark">
            <div 
              className="d-flex flex-column align-items-center justify-content-end h-100 text-center overflow-hidden rounded-5 px-4 px-lg-3 pt-4 pb-5 position-relative" 
              style={{ 
                background: `linear-gradient(rgba(29, 44, 65, 0.7), rgba(29, 44, 65, 0.8)), url(${!isVideoUrl(bannerProduct.image_urls[0]) ? (bannerProduct.image_urls[0] || '/assets/img/home/electronics/banner/background.jpg') : '/assets/img/home/electronics/banner/background.jpg'}) center/cover no-repeat`,
                minHeight: '400px'
              }}
            >
              {/* Dark overlay for better text readability */}
              <div 
                className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25"
                style={{ zIndex: 1 }}
              ></div>
              
              <div 
                className="ratio animate-up-down position-relative me-lg-4" 
                style={{ 
                  maxWidth: '280px', 
                  marginBottom: '-15%', 
                  aspectRatio: 'calc(690 / 640 * 100%)',
                  zIndex: 2
                }}
              >
                <MediaPreview
                  mediaUrl={bannerProduct.image_urls[0]}
                  altText={bannerProduct.name}
                />
              </div>
              
              {/* Responsive title with proper text wrapping */}
              <h3 
                className="mb-2 position-relative fw-bold text-white lh-sm"
                style={{ 
                  fontSize: 'clamp(1.2rem, 3vw, 2rem)',
                  zIndex: 2,
                  wordWrap: 'break-word',
                  hyphens: 'auto',
                  maxWidth: '100%',
                  display: '-webkit-box',
                  WebkitLineClamp: '3',
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}
              >
                {bannerProduct.name}
              </h3>
              
              {/* Description with proper truncation */}
              <p 
                className="text-light fw-medium mb-4 position-relative"
                style={{ 
                  fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                  zIndex: 2,
                  display: '-webkit-box',
                  WebkitLineClamp: '2',
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  opacity: 0.9,
                  maxWidth: '100%'
                }}
              >
                {bannerProduct?.description || 'Discover amazing features and quality'}
              </p>
              
              <Link 
                className="btn btn-sm btn-primary cursor-pointer rounded-pill position-relative" 
                to={`/products/${bannerProduct.slug}`}
                style={{ zIndex: 2 }}
              >
                <span className="d-none d-sm-inline me-1">From </span>
                {formatCurrency(bannerProduct.price, 'NGN', { short: true })}
                <i className="ci-arrow-up-right fs-base ms-1 me-n1" />
              </Link>
            </div>
          </div>
        )}
        
        {/* Product Lists - First Column */}
        <div className="col-sm-6 col-lg-4 d-flex flex-column gap-3 pt-4 py-lg-4">
          {products.slice(0, 4).map((product) => {            
            const handleMouseEnter = () => {
              const video = document.querySelector(`#video-${product.id}`);
              if (video && isVideoUrl(product.image_urls[0])) {
                video.play().catch(err => console.log('Video play failed:', err));
              }
            };
            
            const handleMouseLeave = () => {
              const video = document.querySelector(`#video-${product.id}`);
              if (video && isVideoUrl(product.image_urls[0])) {
                video.pause();
                video.currentTime = 0;
              }
            };
            
            return (
              <div 
                key={product.id} 
                className="position-relative animate-underline d-flex align-items-center ps-xl-3"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="ratio ratio-1x1 flex-shrink-0 position-relative" style={{ width: '110px' }}>
                  {isVideoUrl(product.image_urls[0]) ? (
                    <>
                      <video
                        id={`video-${product.id}`}
                        src={product.image_urls[0]}
                        className="object-fit-cover rounded"
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        controls={false}
                      />
                      <div 
                        className="position-absolute d-flex align-items-center justify-content-center"
                        style={{
                          bottom: '0',
                          left: '0',
                          width: '18px',
                          height: '18px',
                          backgroundColor: 'rgba(0, 0, 0, 0.7)',
                          borderRadius: '50%',
                          zIndex: 2,
                          pointerEvents: 'none'
                        }}
                      >
                        <i className="ci-play text-white" style={{ fontSize: '7px', marginLeft: '1px' }}></i>
                      </div>
                    </>
                  ) : (
                    <img 
                      src={product.image_urls[0] || '/assets/img/shop/electronics/thumbs/01.png'} 
                      alt={product.name}
                      className="object-fit-cover rounded"
                    />
                  )}
                </div>
                <div className="w-100 min-w-0 ps-2 ps-sm-3">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <div className="d-flex gap-1 fs-xs">
                      <ProductRating 
                        averageRating={product.average_rating} 
                        reviewsCount={product.reviews_count} 
                      />
                    </div>
                  </div>
                  <h4 className="mb-2">
                    <Link 
                      className="stretched-link d-block fs-sm fw-medium text-truncate" 
                      to={`/products/${product.slug}`}
                    >
                      <span className="animate-target">{product.name}</span>
                    </Link>
                  </h4>
                  <div className="h5 mb-0">{formatCurrency(product.price, 'NGN', { short: true })}</div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Product Lists - Second Column */}
        <div className="col-sm-6 col-lg-4 d-flex flex-column gap-3 pt-3 py-lg-4">
          {products.slice(4, 8).map((product) => {
            const handleMouseEnter = () => {
              const video = document.querySelector(`#video-${product.id}`);
              if (video && isVideoUrl(product.image_urls[0])) {
                video.play().catch(err => console.log('Video play failed:', err));
              }
            };
            
            const handleMouseLeave = () => {
              const video = document.querySelector(`#video-${product.id}`);
              if (video && isVideoUrl(product.image_urls[0])) {
                video.pause();
                video.currentTime = 0;
              }
            };
            
            return (
              <div 
                key={product.id} 
                className="position-relative animate-underline d-flex align-items-center ps-xl-3"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="ratio ratio-1x1 flex-shrink-0 position-relative" style={{ width: '110px' }}>
                  {isVideoUrl(product.image_urls[0]) ? (
                    <>
                      <video
                        id={`video-${product.id}`}
                        src={product.image_urls[0]}
                        className="object-fit-cover rounded"
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        controls={false}
                      />
                      <div 
                        className="position-absolute d-flex align-items-center justify-content-center"
                        style={{
                          bottom: '0',
                          left: '0',
                          width: '18px',
                          height: '18px',
                          backgroundColor: 'rgba(0, 0, 0, 0.7)',
                          borderRadius: '50%',
                          zIndex: 2,
                          pointerEvents: 'none'
                        }}
                      >
                        <i className="ci-play text-white" style={{ fontSize: '7px', marginLeft: '1px' }}></i>
                      </div>
                    </>
                  ) : (
                    <img 
                      src={product.image_urls[0] || '/assets/img/shop/electronics/thumbs/01.png'} 
                      alt={product.name}
                      className="object-fit-cover rounded"
                    />
                  )}
                </div>
                <div className="w-100 min-w-0 ps-2 ps-sm-3">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <div className="d-flex gap-1 fs-xs">
                      <ProductRating 
                        averageRating={product.average_rating} 
                        reviewsCount={product.reviews_count} 
                      />
                    </div>
                  </div>
                  <h4 className="mb-2">
                    <Link 
                      className="stretched-link d-block fs-sm fw-medium text-truncate" 
                      to={`/products/${product.slug}`}
                    >
                      <span className="animate-target">{product.name}</span>
                    </Link>
                  </h4>
                  <div className="h5 mb-0">{formatCurrency(product.price, 'NGN', { short: true })}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;