// v3 - Enhanced with proper mobile fullscreen media experience
import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Navigation, Thumbs, Controller } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import GLightbox from 'glightbox';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'glightbox/dist/css/glightbox.css';
import { ProductAxiosService } from '../../services/net/ProductAxiosService';
import './Products.css';
import ProductRecommendations from './ProductRecommendations';
import { formatDate, formatRelativeTime } from '../../utils/dateUtils';
import ProductReviewForm from './ProductReviewForm';
import LoadingSpinner from '../../components/shared/LoadingSpinner';
import Breadcrumb from '../../components/shared/Breadcrumb';
import { ChatButton } from './interactions/ChatButton';
import { BasketButton } from './interactions/BasketButton';
import { FavoriteButton } from './interactions/FavoriteButton';
import { ShareButton } from './interactions/ShareButton';
import { useBootstrapPopovers } from '../../hooks/useBootstrapPopovers';
import SeoConfig from '../../utils/SeoManager';
import { formatCurrency } from '../../utils/currencyUtils';
import { Key } from 'react';

interface ProductOwner {
  id: number;
  name: string;
  slug: string;
  avatar?: string;
  type: 'user' | 'page';
}

interface ProductDetails {
  id: number;
  name: string;
  price: string;
  description: string;
  image_urls: string[];
  reviews_count: number;
  categories: Array<{ id: number; name: string }>;
  users: any[];
  pages: any[];
  created_at: string;
  tags: string[];
  slug: string;
  reviews: Array<{
    id: number;
    comment: string;
    created_at: string;
    rating: number;
    username: string;
    name: string;
    avatar: string;
  }>;
  attributes: Array<{
    key: string;
    value: string;
  }>;
}

SwiperCore.use([Navigation, Thumbs, Controller]);

const ProductDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<ProductDetails | null>(null);
  const [owner, setOwner] = useState<ProductOwner | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
  const [lightboxInstance, setLightboxInstance] = useState<any>(null);
  const [shouldAutoOpenLightbox, setShouldAutoOpenLightbox] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const mainSwiperRef = useRef<SwiperCore | null>(null);
  const lightboxRef = useRef<any>(null);
  const hasAutoOpenedRef = useRef(false);
  const mediaContainerRef = useRef<HTMLDivElement>(null);

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await ProductAxiosService.getBySlug(slug!);
        const data = response.data;
        setProduct(data);
        
        // Determine owner from pages or users
        let ownerData = null;
        
        if (data.pages && data.pages.length > 0) {
          const pageOwner = data.pages[0];
          ownerData = {
            id: pageOwner.id,
            name: pageOwner.name,
            slug: pageOwner.slug,
            avatar: pageOwner.avatar,
            type: 'page' as const
          };
        } else if (data.users && data.users.length > 0) {
          const userOwner = data.users[0];
          ownerData = {
            id: userOwner.id,
            name: userOwner.name || userOwner.username,
            slug: userOwner.username,
            avatar: userOwner.avatar,
            type: 'user' as const,
            username: userOwner.username,
            email: userOwner.email,
            phone: userOwner.phone
          };
        }
        setOwner(ownerData);

      } catch (err) {
        setError('Failed to load product details');
        console.error('Error fetching product details:', err);
      } finally {
        setLoading(false);
      }
    };
    
    if (slug) {
      fetchProductDetails();
    }
  }, [slug]);

  useBootstrapPopovers(product);

  // Enhanced GLightbox initialization with mobile fullscreen support
  useEffect(() => {
    if (product?.image_urls?.length > 0) {
      // Cleanup previous instance
      if (lightboxRef.current) {
        lightboxRef.current.destroy();
      }

      // Enhanced gallery items configuration
      const galleryItems = product.image_urls.map((url, index) => {
        const urlType = getUrlType(url);
        const isVideo = urlType !== 'image';
        
        return {
          href: url,
          type: isVideo ? 'video' : 'image',
          source: urlType === 'youtube' ? 'youtube' : urlType === 'vimeo' ? 'vimeo' : 'local',
          title: `${product.name} - ${isVideo ? 'Video' : 'Image'} ${index + 1}`,
          description: isVideo ? 'Click play to view video' : 'Click to view full image'
        };
      });

      // Mobile-optimized lightbox configuration
      const lightboxConfig = {
        elements: galleryItems,
        touchNavigation: true,
        loop: true,
        openEffect: isMobile ? 'none' : 'zoom',
        closeEffect: isMobile ? 'none' : 'fade',
        slideEffect: isMobile ? 'slide' : 'slide',
        closeOnOutsideClick: true,
        startAt: 0,
        skin: 'clean',
        descPosition: 'bottom',
        
        // Mobile-specific optimizations
        mobile: {
          fullscreen: true,
          preload: true,
          touchNavigation: true,
          touchFollowAxis: true
        },
        
        // Responsive sizing
        width: isMobile ? '100vw' : '90vw',
        height: isMobile ? '100vh' : '90vh',
        
        // Video configuration
        videosWidth: isMobile ? '100%' : '90vw',
        videosHeight: isMobile ? '70%' : '90vh',
        autoplayVideos: false,
        
        // Event handlers for enhanced mobile experience
        onOpen: () => {
          console.log('Lightbox opened in', isMobile ? 'mobile mode' : 'desktop mode');
          document.body.style.overflow = 'hidden'; // Prevent background scrolling
          
          // Add mobile-specific classes
          if (isMobile) {
            document.body.classList.add('lightbox-mobile-open');
          }
        },
        onClose: () => {
          console.log('Lightbox closed');
          document.body.style.overflow = '';
          document.body.classList.remove('lightbox-mobile-open');
          setShouldAutoOpenLightbox(false);
        },
        beforeSlideChange: (prev, current) => {
          if (mainSwiperRef.current && current?.index !== undefined) {
            mainSwiperRef.current.slideTo(current.index);
          }
        },
        onSlideChange: (current) => {
          if (mainSwiperRef.current && current?.index !== undefined) {
            mainSwiperRef.current.slideTo(current.index);
          }
        },
        
        // Enhanced Plyr configuration for videos
        plyr: {
          css: 'https://cdn.plyr.io/3.7.8/plyr.css',
          js: 'https://cdn.plyr.io/3.7.8/plyr.js',
          config: {
            ratio: '16:9',
            autoplay: false,
            muted: true,
            fullscreen: {
              enabled: true,
              fallback: true,
              iosNative: true // Critical for iOS fullscreen
            },
            controls: [
              'play-large', 
              'play', 
              'progress', 
              'current-time', 
              'mute', 
              'volume', 
              'fullscreen'
            ],
            hideControls: true,
            youtube: {
              noCookie: true,
              rel: 0,
              showinfo: 0,
              iv_load_policy: 3,
              modestbranding: 1
            },
            vimeo: {
              byline: false,
              portrait: false,
              title: false,
              transparent: false
            }
          }
        }
      };

      const lightbox = GLightbox(lightboxConfig);
      lightboxRef.current = lightbox;
      setLightboxInstance(lightbox);

      // Enhanced auto-open with mobile considerations
      if (shouldAutoOpenLightbox && !hasAutoOpenedRef.current) {
        hasAutoOpenedRef.current = true;
        
        // Slightly longer delay for mobile to ensure proper initialization
        const openDelay = isMobile ? 1000 : 800;
        
        setTimeout(() => {
          try {
            lightbox.openAt(0);
          } catch (error) {
            console.warn('Failed to auto-open lightbox:', error);
            // Fallback: manual open trigger
            setTimeout(() => lightbox.openAt(0), 500);
          }
        }, openDelay);
      }

      return () => {
        if (lightbox) {
          lightbox.destroy();
          document.body.style.overflow = '';
          document.body.classList.remove('lightbox-mobile-open');
        }
      };
    }
  }, [product, shouldAutoOpenLightbox, isMobile]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Enhanced URL type detection
  const getUrlType = (url: string): string => {
    if (!url) return 'image';
    
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi', '.wmv', '.flv', '.mkv'];
    const extension = url.substring(url.lastIndexOf('.')).toLowerCase();
    
    if (videoExtensions.includes(extension)) return 'video';
    if (url.includes('youtube.com') || url.includes('youtu.be')) return 'youtube';
    if (url.includes('vimeo.com')) return 'vimeo';
    if (url.includes('dailymotion.com')) return 'dailymotion';
    
    return 'image';
  };

  // Enhanced video thumbnail generation
  const getVideoThumbnail = (url: string): string => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const videoId = url.includes('youtube.com') 
        ? new URL(url).searchParams.get('v') || url.split('v=')[1]?.split('&')[0]
        : url.split('/').pop()?.split('?')[0];
      return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '/assets/img/us/video-placeholder.png';
    }
    
    if (url.includes('vimeo.com')) {
      const videoId = url.split('/').pop();
      return videoId ? `https://vumbnail.com/${videoId}.jpg` : '/assets/img/us/video-placeholder.png';
    }
    
    return '/assets/img/us/video-placeholder.png';
  };

  // Enhanced media click handler with mobile optimizations
  const handleMediaClick = (index: number) => {
    if (lightboxInstance) {
      // Add mobile-specific preparation
      if (isMobile) {
        // Force landscape orientation hint for videos
        const urlType = getUrlType(product?.image_urls[index] || '');
        if (urlType !== 'image') {
          console.log('Video detected - preparing for fullscreen playback');
        }
      }
      
      lightboxInstance.openAt(index);
    }
  };

  // Enhanced fullscreen trigger for mobile
  const triggerMobileFullscreen = (index: number) => {
    if (!lightboxInstance) return;
    
    if (isMobile) {
      // Special handling for mobile fullscreen
      const element = document.querySelector('.glightbox-container');
      if (element && element.requestFullscreen) {
        element.requestFullscreen().catch(err => {
          console.log('Fullscreen request failed:', err);
          // Fallback to regular lightbox
          lightboxInstance.openAt(index);
        });
      } else {
        lightboxInstance.openAt(index);
      }
    } else {
      lightboxInstance.openAt(index);
    }
  };

  // Enhanced media preview component with mobile optimizations
  const MediaPreview = ({ url, index, isThumb = false }: { url: string; index: number; isThumb?: boolean }) => {
    const urlType = getUrlType(url);
    const isVideo = urlType !== 'image';
    
    return (
      <div className={`ratio ${isThumb ? 'ratio-1x1' : 'ratio-4x3'} position-relative`}>
        <div className="position-absolute top-0 start-0 w-100 h-100">
          {urlType === 'image' ? (
            <img 
              src={url}
              alt={`${product?.name || 'Product'} ${isThumb ? 'thumbnail' : 'image'} ${index + 1}`}
              className="object-fit-cover w-100 h-100"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = '/assets/img/us/placeholder.png';
                e.currentTarget.className = 'object-fit-contain w-100 h-100 bg-light';
              }}
            />
          ) : isVideo ? (
            <div className="position-relative w-100 h-100">
              {/* Video thumbnail */}
              <img 
                src={getVideoThumbnail(url)}
                alt={`${product?.name || 'Product'} video preview ${index + 1}`}
                className="object-fit-cover w-100 h-100"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = '/assets/img/us/video-placeholder.png';
                }}
              />
              
              {/* Video overlay */}
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-25"></div>
              
              {/* Video type badge */}
              <div className="position-absolute top-0 end-0 m-2">
                <span className="badge bg-dark bg-opacity-75 text-white fs-xs px-2 py-1">
                  <i className="ci-video me-1"></i>
                  {urlType === 'youtube' ? 'YouTube' : urlType === 'vimeo' ? 'Vimeo' : 'Video'}
                </span>
              </div>
              
              {/* Play button */}
              <div className="position-absolute top-50 start-50 translate-middle">
                <div className={`btn btn-light ${isThumb ? 'btn-xs' : 'btn-lg'} rounded-circle shadow-lg`}
                     style={{ 
                       width: isThumb ? '2rem' : '4rem', 
                       height: isThumb ? '2rem' : '4rem' 
                     }}>
                  <i className={`ci-play-filled ${isThumb ? 'fs-xs' : 'fs-4'} text-primary`}></i>
                </div>
              </div>
              
              {/* Duration indicator for non-embedded videos */}
              {urlType === 'video' && (
                <div className="position-absolute bottom-0 start-0 m-2">
                  <span className="badge bg-dark bg-opacity-50 text-white fs-xs">
                    <i className="ci-time me-1"></i>
                    Play
                  </span>
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <LoadingSpinner size='sm' />
        <span className="ms-2">Getting product info ready for you...</span>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="text-center">
          <i className="ci-exclamation-triangle fs-1 text-warning mb-3"></i>
          <h3>{error || 'Product not found'}</h3>
          <button 
            onClick={() => navigate('/products')} 
            className="btn btn-primary mt-3"
          >
            Browse Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <SeoConfig 
        title={`${product?.name || slug} - Salesnet.`}
        description={product?.description}
        keywords={`${product?.name}, products, quality, discount, deals`}
        canonical={`/products`}
      />
      
      {/* Mobile-specific CSS injection */}
      <style>
        {`
          @media (max-width: 768px) {
            .lightbox-mobile-open .glightbox-container {
              position: fixed !important;
              top: 0 !important;
              left: 0 !important;
              width: 100vw !important;
              height: 100vh !important;
              z-index: 99999 !important;
            }
            
            .glightbox-mobile .gslide-image {
              max-width: 100vw !important;
              max-height: 100vh !important;
            }
            
            .glightbox-mobile .gslide-video {
              width: 100% !important;
              height: 70vh !important;
            }
            
            .glightbox-mobile .gclose {
              top: 20px !important;
              right: 20px !important;
              background: rgba(0,0,0,0.7) !important;
              border-radius: 50% !important;
              width: 44px !important;
              height: 44px !important;
            }
          }
          
          .gallery-item {
            transition: transform 0.3s ease;
          }
          
          .gallery-item:hover {
            transform: scale(1.02);
          }
          
          .mobile-fullscreen-trigger {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1000;
            background: rgba(0,0,0,0.8);
            color: white;
            border: none;
            border-radius: 50%;
            width: 60px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
          }
        `}
      </style>
      
      <main className="content-wrapper">
        <section className="container pb-2 pb-sm-3 pb-md-4 pb-lg-5 mb-xxl-3">
          <Breadcrumb 
            items={[
              { label: 'Home', path: '/' },
              { label: 'Products', path: '/products' },
              { label: product?.name || slug, path: `/products/${slug}` }
            ]} 
          />
          
          <div className="row d-flex">
            <div className="col-lg-8 col-xl-9">
              <h1 className="h3 container mb-4 animate-scale">
                <span onClick={() => navigate(-1)} className='cursor-pointer animate-target'>
                  <i className="ci-corner-up-left fw-bold me-2"></i>
                </span>
                {product.name} 

                {product.reviews_count > 0 && (
                  <span className="badge rounded-pill text-dark border d-inline-flex align-items-center fs-sm">
                    <i className="ci-bar-chart me-1"></i> 
                    {product.reviews_count} Sales
                  </span>
                )}
              </h1>

              <div className="d-flex flex-column flex-md-row align-items-md-center gap-3 gap-md-4 h3 container mb-4">
                {owner && (
                  <div className="nav align-items-center gap-2">
                    <Link to={`/${owner.type === 'page' ? 'pages' : 'users'}/${owner.slug}`} className="nav-link text-body gap-1 p-0 fw-bold cursor-pointer">
                      <div className="flex-shrink-0 border rounded-circle" style={{ width: "35px", height:"35px " }}>
                        <img alt={owner.name} src={owner.avatar || '/assets/img/us/logos/avatar.png'} onError={(e) => {
                            e.currentTarget.src = '/assets/img/us/logos/avatar.png'; }}
                        className="ratio ratio-1x1 rounded-circle" style={{ width: "35px", height:"35px " }} />
                      </div>
                      <span className="badge rounded-pill text-dark bg-grey-subtle fs-sm border">{owner.name}</span>
                    </Link>
                    <span className="fs-xs text-muted">
                      Listed {formatRelativeTime(product!.created_at)}
                    </span>
                  </div>
                )}

                <div className="d-flex justify-content-between flex-grow-1 gap-2">
                  <span className="rounded-pill fw-bold fs-sm align-items-center"></span>

                  <div className="d-flex gap-1">
                    <BasketButton productId={product.id} productName={product.name} className='rounded-pill' />
                    <span className="btn btn-sm btn-dark rounded-pill animate-pulse text-default fs-sm">
                      {formatCurrency(product.price, 'NGN', { short: true })}
                    </span>

                    <FavoriteButton productId={product.id} productName={product.name} className='rounded-pill' />
                    <ChatButton businessId={''} className='animate-scale' />
                    <ShareButton productId={''} productName={''} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row pb-5 pt-4">
            {/* Gallery Column */}
            <div className="col-lg-7 col-xl-8" ref={mediaContainerRef}>
              {/* Enhanced mobile fullscreen guidance */}
              {isMobile && (
                <div className="alert alert-info d-flex align-items-center mb-3" role="alert">
                  <i className="ci-smartphone fs-lg me-2"></i>
                  <small>
                    <strong>Mobile Optimized:</strong> Media opens in full-screen mode. Videos play in native player for best experience.
                  </small>
                </div>
              )}

              <div className="position-relative mb-3">
                <Swiper
                  modules={[Navigation, Thumbs, Controller]}
                  spaceBetween={10}
                  navigation={{
                    prevEl: '.btn-prev',
                    nextEl: '.btn-next'
                  }}
                  thumbs={{ swiper: thumbsSwiper }}
                  onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
                  onSlideChange={(swiper) => {
                    if (lightboxInstance && !hasAutoOpenedRef.current) {
                      try {
                        lightboxInstance.goToSlide(swiper.activeIndex);
                      } catch (error) {
                        console.warn('Failed to sync lightbox slide:', error);
                      }
                    }
                  }}
                  className="main-swiper rounded-4 overflow-hidden"
                  loop={true}
                >
                  {product.image_urls?.map((url: string, index: Key | null | undefined) => {
                    const urlType = getUrlType(url);
                    const numIndex = Number(index);
                    const isVideo = urlType !== 'image';
                    
                    return (
                      <SwiperSlide key={index} className="d-flex justify-content-center">
                        <div
                          onClick={() => triggerMobileFullscreen(numIndex)}
                          className="d-block w-100 h-100 position-relative gallery-item cursor-pointer"
                          style={{ cursor: 'pointer' }}
                        >
                          <MediaPreview url={url} index={numIndex} />
                          
                          {/* Enhanced overlay for better UX */}
                          <div className="gallery-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center opacity-0 hover-opacity-100 transition-opacity">
                            <div className="text-center text-white">
                              <i className="ci-zoom-in display-4 mb-2"></i>
                              <div className="fs-sm">Tap to {isVideo ? 'play video' : 'view fullscreen'}</div>
                            </div>
                          </div>
                          
                          {/* Media counter overlay */}
                          <div className="position-absolute top-0 start-0 m-3">
                            <span className="badge bg-dark bg-opacity-75 text-white fs-xs px-2 py-1 rounded-pill">
                              {numIndex + 1} of {product.image_urls.length}
                            </span>
                          </div>
                          
                          {/* Enhanced full screen hint */}
                          <div className="position-absolute bottom-0 end-0 m-3">
                            <span className="badge bg-primary bg-opacity-90 text-white fs-xs px-2 py-1 rounded-pill">
                              <i className={`ci-${isVideo ? 'play' : 'expand'} me-1`}></i>
                              {isVideo ? 'Play Video' : 'Full Screen'}
                            </span>
                          </div>
                          
                          {/* Video duration indicator */}
                          {isVideo && urlType === 'video' && (
                            <div className="position-absolute bottom-0 start-0 m-3">
                              <span className="badge bg-dark bg-opacity-75 text-white fs-xs px-2 py-1 rounded-pill">
                                <i className="ci-time me-1"></i>
                                Tap to play
                              </span>
                            </div>
                          )}
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
                
                {/* Navigation buttons */}
                <div className="position-absolute top-50 start-0 z-2 translate-middle-y ms-2">
                  <button className="btn btn-prev btn-icon btn-outline-secondary bg-body rounded-circle animate-slide-start" 
                    aria-label="Previous slide">
                    <i className="ci-chevron-left fs-lg animate-target" />
                  </button>
                </div>
                <div className="position-absolute top-50 end-0 z-2 translate-middle-y me-2">
                  <button className="btn btn-next btn-icon btn-outline-secondary bg-body rounded-circle animate-slide-end" 
                    aria-label="Next slide">
                    <i className="ci-chevron-right fs-lg animate-target" />
                  </button>
                </div>
              </div>
              
              {/* Thumbnails Swiper */}
              <div className="swiper-thumbs pt-2 mt-1" style={{ maxWidth: '100%' }}>
                <Swiper
                  modules={[Thumbs, Controller]}
                  spaceBetween={12}
                  slidesPerView={3}
                  watchSlidesProgress={true}
                  onSwiper={setThumbsSwiper}
                  breakpoints={{
                    340: { slidesPerView: 4 },
                    500: { slidesPerView: 5 },
                    600: { slidesPerView: 6 },
                    768: { slidesPerView: 4 },
                    992: { slidesPerView: 5 },
                    1200: { slidesPerView: 6 }
                  }}
                  className="thumb-swiper"
                >
                  {product.image_urls?.map((url, index) => {
                    const urlType = getUrlType(url);
                    const isVideo = urlType !== 'image';
                    
                    return (
                      <SwiperSlide key={index} className="swiper-thumb">
                        <div
                          onClick={() => {
                            mainSwiperRef.current?.slideTo(index);
                            triggerMobileFullscreen(index);
                          }}
                          className="d-block w-100 h-100 position-relative gallery-item rounded-2 cursor-pointer"
                          style={{ cursor: 'pointer' }}
                        >
                          <MediaPreview url={url} index={index} isThumb={true} />
                          
                          {/* Thumbnail overlay */}
                          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-0 hover-bg-opacity-25 transition-all rounded-2"></div>
                          
                          {/* Thumbnail number indicator */}
                          <div className="position-absolute top-0 start-0 m-1">
                            <span className={`badge ${isVideo ? 'bg-warning' : 'bg-dark'} bg-opacity-75 text-white rounded-pill`} style={{ fontSize: '10px' }}>
                              {isVideo ? '▶' : index + 1}
                            </span>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>

              {/* Enhanced manual full-screen toggle */}
              <div className="text-center mt-3">
                <button 
                  onClick={() => triggerMobileFullscreen(0)}
                  className={`btn ${isMobile ? 'btn-primary' : 'btn-outline-primary'} rounded-pill`}
                >
                  <i className={`ci-${isMobile ? 'smartphone' : 'expand'} me-2`}></i>
                  {isMobile ? 'Open Media Gallery' : 'View in Full Screen'}
                </button>
                
                {isMobile && (
                  <div className="mt-2">
                    <small className="text-muted">
                      Optimized for mobile viewing with full-screen media playback
                    </small>
                  </div>
                )}
              </div>
            </div>
            
            {/* Tabs Column */}
            <div className="col-lg-5 col-xl-4 mt-2 mt-lg-0">
              <div className="">
                <section className="pt-2 pt-lg-0 mt-2 mt-sm-3 mt-lg-0">
                  <div className="overflow-x-auto" data-simplebar data-simplebar-auto-hide="false">
                    <ul
                      className="nav nav-pills mb-3 flex-nowrap d-flex gap-2"
                      role="tablist"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      <li className="nav-item flex-shrink-0" role="presentation">
                        <button
                          type="button"
                          className="nav-link active"
                          id="description-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#description-tab-pane"
                          role="tab"
                          aria-controls="description-tab-pane"
                          aria-selected="true"
                        >
                          <i className="ci-info me-2 ms-n1" />
                          Description
                        </button>
                      </li>
                      <li className="nav-item flex-shrink-0" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-delivery-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#delivery-tab-pane"
                          type="button"
                          role="tab"
                          aria-controls="delivery-tab-pane"
                          aria-selected="false"
                        >
                          <i className="ci-shopping-cart me-2 ms-n1" />
                          Delivery
                        </button>
                      </li>
                      <li className="nav-item flex-shrink-0" role="presentation">
                        <button
                          className="nav-link rounded-pill"
                          id="reviews-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#reviews-tab-pane"
                          type="button"
                          role="tab"
                          aria-controls="#reviews-tab-pane"
                          aria-selected="false"
                        >
                          <i className="ci-message-square me-2 ms-n1" />
                          Reviews{" "}
                          <span className="badge rounded-pill bg-warning">
                            {product.reviews_count}
                          </span>
                        </button>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="tab-content pt-4 mt-sm-1 mt-md-3">
                    <div 
                      aria-labelledby="description-tab" 
                      className="tab-pane fade active show" 
                      id="description-tab-pane" 
                      role="tabpanel"
                    >
                      <div className="row">
                        <h2 className="h3 pb-2 pb-md-3">Overview</h2>
                        <p>{product?.description}</p>
                        <div className="col-md-12 order-md-1">
                          
                          {product.attributes && product.attributes.length > 0 && (
                            <div className="pt-5 mt-md-2 mb-lg-4">
                              <h3 className="h6">General specs</h3>
                              <div className="vstack gap-3 gap-md-4 mt-n3 - overflow-y-auto pe-3" data-simplebar data-simplebar-auto-hide="false" style={{maxWidth: "100%", maxHeight: "320px"}}>
                              <ul className="list-unstyled d-flex flex-column gap-3 fs-sm pb-3 m-0 mb-2 mb-sm-3">
                                <li className="d-flex align-items-center position-relative pe-4">
                                  <span>Price:</span>
                                  <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                                  <span className="text-dark-emphasis fw-medium text-end">{formatCurrency(product.price, 'NGN', { short: false })}</span>
                                </li>
                                {product.attributes.map((attr, index) => (
                                  <li key={index} className="d-flex align-items-center position-relative pe-4">
                                    <span>{attr.key}:</span>
                                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2"/>
                                    <span className="text-dark-emphasis fw-medium text-end">{attr.value}</span>
                                    <i className="ci-info fs-base text-body-tertiary position-absolute top-50 end-0 translate-middle-y" 
                                       data-bs-toggle="popover" 
                                       data-bs-trigger="hover" 
                                       data-bs-custom-class="popover-sm" 
                                       data-bs-content={attr.value} />
                                  </li>
                                ))}
                              </ul>
                                </div>
                            </div>
                          )}

                          <div className="alert d-flex alert-info mb-2 mb-sm-3" role="alert">
                            <i className="ci-info fs-lg pe-1 me-2" style={{marginTop: '.125rem'}} />
                            <div className="fs-sm">Product specifications and equipment are subject to change without notice.</div>
                          </div>
                          <div className="pt-3">
                            <h3 className="h6">Do you have any questions?</h3>
                            <Link 
                              to={`https://wa.me/+2347026561327?text=Hello Salesnet!, I'm interested in this product <${product.name}>.`} 
                              className="btn btn-sm btn-success rounded-pill me-1"
                            >
                              <i className="ci-whatsapp me-1"></i> Whatsapp
                            </Link>

                            <Link to={`tel:07026561327`} className="btn btn-sm btn-info rounded-pill me-1">
                              <i className="ci-phone me-1"></i> Call us
                            </Link>
                            <Link to={`mailto:scale@salesnet.ng`} className="btn btn-sm btn-primary rounded-pill">
                              <i className="ci-mail me-1"></i> mail us
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Delivery and Returns */}
                    <div 
                      aria-labelledby="delivery-tab" 
                      className="tab-pane fade fs-sm" 
                      id="delivery-tab-pane" 
                      role="tabpanel"
                    >
                      <div className="row row-cols-1 row-cols-md-12">
                        <div className="col mb-3 mb-md-0">
                          <p>We strive to deliver your product as quickly as possible. Our estimated delivery times are as follows:</p>
                          <div className="col-12 order-md-1">
                            <h3 className="h6">Delivery</h3>
                            <ul className="list-unstyled d-flex flex-column gap-3 fs-sm pb-3 m-0 mb-2 mb-sm-3">
                              <li className="d-flex align-items-center position-relative pe-4">
                                <span>Standard delivery:</span>
                                <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                                <span className="text-dark-emphasis fw-medium text-end">Within 3-7 business days.</span>
                              </li>
                              <li className="d-flex align-items-center position-relative pe-4">
                                <span>Express delivery:</span>
                                <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                                <span className="text-dark-emphasis fw-medium text-end">Within 1-3 business days.</span>
                              </li>
                              <li className="d-flex align-items-center position-relative pe-4">
                                <span>Within same city/town:</span>
                                <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                                <span className="text-dark-emphasis fw-medium text-end">Same day(fastest).</span>
                                <i className="ci-info fs-base text-warning position-absolute top-50 end-0 translate-middle-y" 
                                data-bs-toggle="popover" data-bs-trigger="hover" data-bs-custom-class="popover-sm" 
                                data-bs-content="For same day delivery within same city, kindly place your order before 11.AM." />
                              </li>
                            </ul>
                            <p>If you are not happy with your purchase, you can return it within 7 days for a full refund or exchange.</p>
                            <h3 className="h6">Returns</h3>
                            <ul className="list-unstyled d-flex flex-column gap-3 fs-sm pb-3 m-0 mb-2 mb-sm-3">
                              <li className="d-flex align-items-center position-relative pe-4">
                                <span>Time frame:</span>
                                <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                                <span className="text-dark-emphasis fw-medium text-end">Up to 7 days.</span>
                                <i className="ci-info fs-base text-warning position-absolute top-50 end-0 translate-middle-y" 
                                data-bs-toggle="popover" data-bs-trigger="hover" data-bs-custom-class="popover-sm" 
                                data-bs-content="up to 7 days interval to return an item to salesnet." />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Reviews */}
                    <div 
                      aria-labelledby="reviews-tab" 
                      className="tab-pane fade" 
                      id="reviews-tab-pane" 
                      role="tabpanel"
                    >
                      <div className="d-sm-flex align-items-center justify-content-between border-bottom pb-2 pb-sm-3">
                        <div className="mb-3 me-sm-3">
                          <h2 className="h5 pb-2 mb-1">Customer reviews</h2>
                          <div className="d-flex align-items-center text-body-secondary fs-sm">
                            <div className="d-flex gap-1 me-2">
                              <i className="ci-star-filled text-warning" />
                              <i className="ci-star-filled text-warning" />
                              <i className="ci-star-filled text-warning" />
                              <i className="ci-star-filled text-warning" />
                              <i className="ci-star text-body-tertiary opacity-75" />
                            </div>
                            Based on {product.reviews_count} reviews
                          </div>
                        </div>
                        <button className="btn btn-outline-dark mb-3 rounded-pill" data-bs-target="#reviewForm" data-bs-toggle="modal" type="button">
                          Leave a review
                        </button>
                        {product && (
                          <ProductReviewForm 
                            productSlug={product.slug}
                            onReviewSubmitted={() => {
                              // console.log('Review submitted, refresh reviews.');
                            }}
                          />
                        )}
                        
                      </div>
                      
                      {/* Review List */}
                      <div className="bg-body-tertiary rounded-4 p-4 p-sm-5">
                        <div className="vstack gap-3 gap-md-4 mt-n3 - overflow-y-auto pe-3" data-simplebar data-simplebar-auto-hide="false" style={{maxWidth: "100%", maxHeight: "320px"}}>
                          {product.reviews && product.reviews.length > 0 ? (
                            product.reviews.map((review) => (
                              <div key={review.id} className="mt-3">
                                <div className="d-flex align-items-center justify-content-between gap-3 mb-3">
                                  <div className="d-flex align-items-center">
                                    <div className="ratio ratio-1x1 flex-shrink-0 bg-body-secondary rounded-circle overflow-hidden"
                                      style={{ width: "40px" }}>
                                      <img 
                                        src={review.avatar || '/assets/img/us/logos/avatar.png'} 
                                        alt={review.username} 
                                        onError={(e) => {
                                          e.currentTarget.src = '/assets/img/us/placeholder.png';
                                        }}
                                      />
                                    </div>
                                    <div className="ps-2 ms-1">
                                      <div className="fs-sm fw-semibold text-dark-emphasis mb-1">
                                        {review.name || review.username}
                                      </div>
                                      <div className="fs-xs text-body-secondary">
                                        {new Date(review.created_at).toLocaleDateString('en-US', { year: 'numeric',  month: 'long',  day: 'numeric' })}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="d-flex gap-2">
                                    <button
                                      className="btn btn-sm btn-secondary bg-body border-0 animate-pulse rounded-pill"
                                      type="button">
                                      <i className="ci-heart animate-target fs-sm ms-n1 me-1" />
                                      {review.rating}
                                    </button>
                                    <button
                                      aria-label="Reply"
                                      className="btn btn-icon btn-sm btn-secondary bg-body border-0 animate-slide-end rounded-circle"
                                      type="button">
                                      <i className="ci-corner-up-right animate-target fs-sm" />
                                    </button>
                                  </div>
                                </div>
                                <p className="fs-sm mb-0 text-break">{review.comment}</p>
                              </div>
                            ))
                          ) : (
                            <p className="fs-sm text-body-secondary">No comments available for this product just yet.</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>

          {/* Tags Section */}
          <div className="row">
            <div className="col-12">
              <h2 className="h4 pt-5 mt-md-2 mb-lg-4">Tags</h2>
              <div className="d-flex flex-wrap gap-2 mt-n1">
                {product.tags && product.tags.length > 0 ? (
                  product.tags.slice(1).map((tag, index) => (
                    <Link key={index} className="btn btn-sm btn-secondary rounded-pill fs-sm text-body-emphasis"
                      to={`/products/${tag}`}>
                      {tag}
                    </Link>
                  ))
                ) : (
                  <>
                    <Link className="btn btn-sm btn-secondary rounded-pill fs-sm text-body-emphasis" to="/products">New Goods</Link>
                    <Link className="btn btn-sm btn-secondary rounded-pill fs-sm text-body-emphasis" to="/products">Go to products</Link>
                    <Link className="btn btn-sm btn-secondary rounded-pill fs-sm text-body-emphasis" to="/products">Recharge</Link>
                    <Link className="btn btn-sm btn-secondary rounded-pill fs-sm text-body-emphasis" to="/products">Digital</Link>
                    <Link className="btn btn-sm btn-secondary rounded-pill fs-sm text-body-emphasis" to="/products">Physical</Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        <ProductRecommendations />
      </main>
    </>
  );
}

export default ProductDetails;