
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

  // attributes - new
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
  const mainSwiperRef = useRef<SwiperCore | null>(null);
  const lightboxRef = useRef<any>(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await ProductAxiosService.getBySlug(slug!);
        const data = response.data;
        setProduct(data);
        
        // Determine owner from pages or users
        let ownerData = null;
        
        if (data.pages && data.pages.length > 0) {
          // Product is owned by a page
          const pageOwner = data.pages[0];
          ownerData = {
            id: pageOwner.id,
            name: pageOwner.name,
            slug: pageOwner.slug,
            avatar: pageOwner.avatar,
            type: 'page' as const
          };
        } else if (data.users && data.users.length > 0) {
          // Product is owned by a user
          const userOwner = data.users[0];
          ownerData = {
            id: userOwner.id,
            name: userOwner.name || userOwner.username,
            slug: userOwner.username,
            avatar: userOwner.avatar,
            // type: 'user' as const,
            type: 'user' as const,
            username: userOwner.username,
            email: userOwner.email,
            phone: userOwner.phone
          };
        }
        // console.log(`ownerData:, ${ownerData}, ${JSON.stringify(data)}`);
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

  // Initialize Bootstrap popovers after product data's
  useBootstrapPopovers(product);

  // Initialize GLightbox
  useEffect(() => {
    lightboxRef.current = GLightbox({
      selector: '[data-glightbox]',
      touchNavigation: true,
      loop: true,
      openEffect: 'zoom',
      closeEffect: 'fade'
    });

    return () => {
      lightboxRef.current?.destroy();
    };
  }, []);

  // Reinitialize lightbox when product changes
  useEffect(() => {
    if (product && lightboxRef.current) {
      lightboxRef.current.destroy();
      lightboxRef.current = GLightbox({
        selector: '[data-glightbox]',
        touchNavigation: true,
        loop: true,
        openEffect: 'zoom',
        closeEffect: 'fade'
      });
    }
  }, [product]);

    // Reset scroll position when slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Helper to determine URL type
  const getUrlType = (url: string): string => {
    if (!url) return 'image';
    
    // Video extensions
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi'];
    const extension = url.substring(url.lastIndexOf('.')).toLowerCase();
    
    if (videoExtensions.includes(extension)) return 'video';
    if (url.includes('youtube.com') || url.includes('youtu.be')) return 'youtube';
    if (url.includes('vimeo.com')) return 'vimeo';
    
    return 'image';
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error || !product) {
    return <div>{error || 'Product not found'}</div>;
  }

  return (
    <>
    <SeoConfig 
        title={` ${product?.name || slug} - Salesnet.`}
        description={product?.description}
        keywords={`${product?.name}, products, quality, discount, deals`}
        // image={offer?.banner_image}
        canonical={`/products`}
    />
    
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
                {/* {alert(owner)} */}
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
                      {/* Listed {formatDate(product!.created_at)} */}
                      Listed {formatRelativeTime(product!.created_at)}
                    </span>
                  </div>

                )}

                <div className="d-flex justify-content-between flex-grow-1 gap-2">
                  <span className="rounded-pill fw-bold fs-sm align-items-center"></span>

                  <div className="d-flex gap-1">
                    
                    <BasketButton productId={product.id} productName={product.name} className='rounded-pill' />
                    <span className="btn btn-sm btn-dark rounded-pill animate-pulse text-dafaut fs-sm">
                      {formatCurrency(product.price, 'NGN', { short: true })}
                    </span>

                    <FavoriteButton productId={product.id} productName={product.name} className='rounded-pill' />

                    <ChatButton businessId={''} className='animate-scale' />

                    {/* <div className="dropdown">
                      <button aria-expanded="false" aria-label="Share" className="btn btn-icon btn-sm btn-secondary animate-scale rounded-circle" 
                        data-bs-toggle="dropdown" type="button">
                        <i className="ci-share-2 animate-target fs-sm" />
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end" style={{ "--cz-dropdown-min-width": "8.5rem" }}>
                        <li>
                          <button className="dropdown-item" onClick={() => handleSocialShare('facebook')}>
                            <i className="ci-facebook fs-base me-2 text-info" />
                            Facebook
                          </button>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#!" onClick={() => handleSocialShare('instagram')}>
                            <i className="ci-instagram fs-base me-2 text-primary" />
                            Instagram
                          </a>
                        </li>
                        <li>
                          <button className="dropdown-item" onClick={() => handleSocialShare('twitter')}>
                            <i className="ci-twitter fs-base me-2" />
                            Twitter
                          </button>
                        </li>
                        <li>
                          <button className="dropdown-item" onClick={() => handleSocialShare('linkedin')}>
                            <i className="ci-linkedin fs-base me-2 text-info" />
                            LinkedIn
                          </button>
                        </li>
                        <li>
                          <button className="dropdown-item" onClick={() => handleSocialShare('copy')}>
                            <i className="ci-copy fs-base me-2" />
                            Copy Link
                          </button>
                        </li>
                      </ul>

                    </div> */}
                    <ShareButton productId={''} productName={''} />

                  </div>

                </div>

              </div>
            </div>
          </div>

          <div className="row pb-5 pt-4">
            {/* Gallery Column */}
            <div className="col-lg-7 col-xl-8">
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
                  className="main-swiper rounded-4 overflow-hidden"
                  loop={true}
                >
                  {product.image_urls?.map((url, index) => (
                    <SwiperSlide key={index} className="d-flex justify-content-center">
                      <Link
                        data-glightbox={`gallery:product-gallery`}
                        data-type={getUrlType(url)}
                        to={url}
                        className="d-block w-100 h-100 position-relative gallery-item"
                      >
                        <div className="ratio" style={{ paddingBottom: '100%' }}>
                          {getUrlType(url) === 'image' ? (
                            <img 
                              src={url} 
                              alt={`Product view ${index + 1}`} 
                              onError={(e) => {
                                e.currentTarget.src = '/assets/img/us/placeholder.png';
                              }}
                              className="object-fit-cover position-absolute top-0 start-0 w-100 h-100"
                            />
                          ) : (
                            <div className="bg-dark d-flex align-items-center justify-content-center w-100 h-100 position-absolute top-0 start-0">
                              <i className="ci-video text-white fs-1" />
                              <span className="visually-hidden">Video Preview</span>
                            </div>
                          )}
                        </div>
                        <div className="gallery-overlay"></div>
                        <i className="ci-zoom-in gallery-zoom-icon"></i>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
                
                {/* Navigation buttons */}
                <div className="position-absolute top-50 start-0 z-2 translate-middle-y ms-2">
                  <button className="btn btn-prev btn-icon btn-outline-secondary bg-body rounded-circle animate-slide-start" 
                    aria-label="Previous slide"
                  >
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
                  {product.image_urls?.map((url, index) => (
                    <SwiperSlide key={index} className="swiper-thumb">
                      <a
                        data-glightbox={`gallery:product-gallery`}
                        data-type={getUrlType(url)}
                        href={url}
                        className="d-block w-100 h-100 position-relative gallery-item rounded-2"
                        onClick={() => mainSwiperRef.current?.slideTo(index)}
                      >
                        <div className="ratio ratio-1x1">
                          {getUrlType(url) === 'image' ? (
                            <img 
                              src={url} 
                              onError={(e) => {
                                e.currentTarget.src = '/assets/img/us/placeholder.png';
                              }}

                              alt={`${url} ${index + 1}`} 
                              className="object-fit-cover position-absolute top-0 start-0 w-100 h-100 rounded-2"
                            />
                          ) : (
                            <div className="bg-dark d-flex align-items-center justify-content-center w-100 h-100 position-absolute top-0 start-0 rounded-2">
                              <i className="ci-video text-white fs-5" />
                              <span className="visually-hidden">Video Thumbnail</span>
                            </div>
                          )}
                        </div>
                        <div className="gallery-overlay"></div>
                        <i className="ci-zoom-in gallery-zoom-icon"></i>
                      </a>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            
            {/* Tabs Column - Side by side on large screens */}
            <div className="col-lg-5 col-xl-4 mt-2 mt-lg-0">
              {/* <div className="sticky-top" style={{ top: '1rem', position:'sticky !important' }}> */}
              <div className="">
                <section className="pt-2 pt-lg-0 mt-2 mt-sm-3 mt-lg-0">
                  {/* <ul className="nav nav-pills mb-3 flex-nowrap" role="tablist">
                    <li className="nav-item" role="presentation">
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
                    <li className="nav-item" role="presentation">
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
                    <li className="nav-item" role="presentation">
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
                        Reviews <span className="badge rounded-pill bg-warning"> {product.reviews_count}</span>
                      </button>
                    </li>
                  </ul> */}

  <div className="overflow-x-auto" data-simplebar data-simplebar-auto-hide="false">
    <ul
      className="nav nav-pills mb-3 flex-nowrap d-flex gap-2"
      role="tablist"
      style={{ whiteSpace: "nowrap" }} // prevents wrapping
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

                        
                          {/*  */}
                          {product.attributes && product.attributes.length > 0 && (
                          <div className="pt-5 mt-md-2 mb-lg-4">
                          <h3 className="h6">General specs</h3>
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
                                      <i className="ci-info fs-base text-body-tertiary position-absolute top-50 end-0 translate-middle-y" data-bs-toggle="popover" 
                                      data-bs-trigger="hover" data-bs-custom-class="popover-sm" data-bs-content={attr.value} />

                                    </li>
                                    ))}

                            {/* <li className="d-flex align-items-center position-relative pe-4">
                              <span>Manufacturer:</span>
                              <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                              <span className="text-dark-emphasis fw-medium text-end">Apple Inc.</span>
                            </li> */}
                            
                            </ul>
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

                            <Link to={`tel:07026561327`} className="btn btn-sm btn-info rounded-pill me-1"><i className="ci-phone me-1"></i> Call us</Link>
                            <Link to={`mailto:scale@salesnet.ng`} className="btn btn-sm btn-primary rounded-pill"><i className="ci-mail me-1"></i> mail us</Link>

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

          {/* Tags Section - Below both columns */}
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


// // v7 - Bootstrap tool-tip initialize in component but later move to custom hooks to make it re-usable.
// import { useEffect, useState, useRef } from 'react';
// import { useParams, useNavigate, Link } from 'react-router-dom';
// import { Navigation, Thumbs, Controller } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore from 'swiper';
// import GLightbox from 'glightbox';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/thumbs';
// import 'glightbox/dist/css/glightbox.css';
// import { ProductAxiosService } from '../../services/net/ProductAxiosService';
// import './Products.css';
// import ProductRecommendations from './ProductRecommendations';
// import { formatDate, formatRelativeTime } from '../../utils/dateUtils';
// import ProductReviewForm from './ProductReviewForm';
// import LoadingSpinner from '../../components/shared/LoadingSpinner';
// import Breadcrumb from '../../components/shared/Breadcrumb';
// import { ChatButton } from './interactions/ChatButton';
// import { BasketButton } from './interactions/BasketButton';
// import { FavoriteButton } from './interactions/FavoriteButton';
// import { ShareButton } from './interactions/ShareButton';

// interface ProductOwner {
//   id: number;
//   name: string;
//   slug: string;
//   avatar?: string;
//   type: 'user' | 'page';
// }

// interface ProductDetails {
//   id: number;
//   name: string;
//   price: string;
//   description: string;
//   image_urls: string[];
//   reviews_count: number;
//   categories: Array<{ id: number; name: string }>;
//   users: any[];
//   pages: any[];
//   created_at: string;
//   tags: string[];
//   slug: string;
//   reviews: Array<{
//     id: number;
//     comment: string;
//     created_at: string;
//     rating: number;
//     username: string;
//     name: string;
//     avatar: string;
//   }>;
//   attributes: Array<{
//     key: string;
//     value: string;
//   }>;
// }

// SwiperCore.use([Navigation, Thumbs, Controller]);

// const ProductDetails = () => {
//   const { slug } = useParams<{ slug: string }>();
//   const navigate = useNavigate();
//   const [product, setProduct] = useState<ProductDetails | null>(null);
//   const [owner, setOwner] = useState<ProductOwner | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
//   const mainSwiperRef = useRef<SwiperCore | null>(null);
//   const lightboxRef = useRef<any>(null);

//   useEffect(() => {
//     const fetchProductDetails = async () => {
//       try {
//         const response = await ProductAxiosService.getBySlug(slug!);
//         const data = response.data;
//         setProduct(data);
        
//         // Determine owner from pages or users
//         let ownerData = null;
        
//         if (data.pages && data.pages.length > 0) {
//           const pageOwner = data.pages[0];
//           ownerData = {
//             id: pageOwner.id,
//             name: pageOwner.name,
//             slug: pageOwner.slug,
//             avatar: pageOwner.avatar,
//             type: 'page' as const
//           };
//         } else if (data.users && data.users.length > 0) {
//           const userOwner = data.users[0];
//           ownerData = {
//             id: userOwner.id,
//             name: userOwner.name || userOwner.username,
//             slug: userOwner.username,
//             avatar: userOwner.avatar,
//             type: 'user' as const,
//             username: userOwner.username,
//             email: userOwner.email,
//             phone: userOwner.phone
//           };
//         }
//         console.log(`ownerData:, ${ownerData}, ${JSON.stringify(data)}`);
//         setOwner(ownerData);

//       } catch (err) {
//         setError('Failed to load product details');
//         console.error('Error fetching product details:', err);
//       } finally {
//         setLoading(false);
//       }
//     };
    
//     if (slug) {
//       fetchProductDetails();
//     }
//   }, [slug]);

//   // Initialize Bootstrap popovers
//   useEffect(() => {
//     const initializePopovers = () => {
//       // Check if Bootstrap is available
//       if (typeof window !== 'undefined' && window.bootstrap) {
//         // Dispose existing popovers first
//         const existingPopovers = document.querySelectorAll('[data-bs-toggle="popover"]');
//         existingPopovers.forEach(popover => {
//           const bsPopover = window.bootstrap.Popover.getInstance(popover);
//           if (bsPopover) {
//             bsPopover.dispose();
//           }
//         });

//         // Initialize new popovers
//         const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
//         popoverTriggerList.forEach(popoverTriggerEl => {
//           new window.bootstrap.Popover(popoverTriggerEl, {
//             html: true,
//             trigger: 'hover focus',
//             placement: 'top'
//           });
//         });
//       }
//     };

//     // Initialize popovers when product data is available
//     if (product) {
//       // Use setTimeout to ensure DOM is fully rendered
//       setTimeout(initializePopovers, 100);
//     }

//     // Cleanup function
//     return () => {
//       if (typeof window !== 'undefined' && window.bootstrap) {
//         const existingPopovers = document.querySelectorAll('[data-bs-toggle="popover"]');
//         existingPopovers.forEach(popover => {
//           const bsPopover = window.bootstrap.Popover.getInstance(popover);
//           if (bsPopover) {
//             bsPopover.dispose();
//           }
//         });
//       }
//     };
//   }, [product]);

//   // Initialize GLightbox
//   useEffect(() => {
//     lightboxRef.current = GLightbox({
//       selector: '[data-glightbox]',
//       touchNavigation: true,
//       loop: true,
//       openEffect: 'zoom',
//       closeEffect: 'fade'
//     });

//     return () => {
//       lightboxRef.current?.destroy();
//     };
//   }, []);

//   // Reinitialize lightbox when product changes
//   useEffect(() => {
//     if (product && lightboxRef.current) {
//       lightboxRef.current.destroy();
//       lightboxRef.current = GLightbox({
//         selector: '[data-glightbox]',
//         touchNavigation: true,
//         loop: true,
//         openEffect: 'zoom',
//         closeEffect: 'fade'
//       });
//     }
//   }, [product]);

//   // Reset scroll position when slug changes
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [slug]);

//   // Helper to determine URL type
//   const getUrlType = (url: string): string => {
//     if (!url) return 'image';
    
//     // Video extensions
//     const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi'];
//     const extension = url.substring(url.lastIndexOf('.')).toLowerCase();
    
//     if (videoExtensions.includes(extension)) return 'video';
//     if (url.includes('youtube.com') || url.includes('youtu.be')) return 'youtube';
//     if (url.includes('vimeo.com')) return 'vimeo';
    
//     return 'image';
//   };

//   if (loading) {
//     return <LoadingSpinner />;
//   }

//   if (error || !product) {
//     return <div>{error || 'Product not found'}</div>;
//   }

//   return (
//     <>
//       <main className="content-wrapper">
//         <section className="container pb-2 pb-sm-3 pb-md-4 pb-lg-5 mb-xxl-3">
//           <Breadcrumb 
//             items={[
//               { label: 'Home', path: '/' },
//               { label: 'Products', path: '/products' },
//               { label: product?.name || slug, path: `/products/${slug}` }
//             ]} 
//           />
          
//           <div className="row d-flex">
//             <div className="col-lg-8 col-xl-9">
//               <h1 className="h3 container mb-4 animate-scale">
//                 <span onClick={() => navigate(-1)} className='cursor-pointer animate-target'>
//                 <i className="ci-corner-up-left fw-bold me-2"></i>
//                 </span>
//                 {product.name} 

//                 {product.reviews_count > 0 && (
//                     <span className="badge rounded-pill text-dark border d-inline-flex align-items-center fs-sm">
//                     <i className="ci-bar-chart me-1"></i> 
//                     {product.reviews_count} Sales
//                     </span>
//                   )}
//               </h1>

//               <div className="d-flex flex-column flex-md-row align-items-md-center gap-3 gap-md-4 h3 container mb-4">
//                 {owner && (
//                   <div className="nav align-items-center gap-2 fs-sm cursor-pointer">
//                     <Link to={`/${owner.type === 'page' ? 'pages' : 'users'}/${owner.slug}`} className="nav-link text-body gap-1 p-0 fw-bold cursor-pointer">
//                       <div className="flex-shrink-0 border rounded-circle" style={{ width: "35px", height:"35px " }}>
//                         <img alt={owner.name} src={owner.avatar || '/assets/img/us/logos/avatar.png'} onError={(e) => {
//                             e.currentTarget.src = '/assets/img/us/logos/avatar.png'; }}
//                         className="ratio ratio-1x1 rounded-circle" style={{ width: "35px", height:"35px " }} />
//                       </div>
//                       {owner.name}
//                     </Link>
//                     <span className="text-body-secondary">
//                       Listed {formatRelativeTime(product!.created_at)}
//                     </span>
//                   </div>
//                 )}

//                 <div className="d-flex justify-content-between flex-grow-1 gap-4">
//                   <span className="rounded-pill fw-bold fs-sm align-items-center"></span>

//                   <div className="d-flex gap-2">
//                     <BasketButton productId={product.id} productName={product.name} className='rounded-pill' />
//                     <span className="btn btn-sm btn-dark rounded-pill animate-pulse text-dafaut fs-sm">
//                      ₦{product.price}
//                     </span>

//                     <FavoriteButton productId={product.id} productName={product.name} className='rounded-pill' />
//                     <ChatButton businessId={''} />
//                     <ShareButton productId={''} productName={''} />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="row pb-5 pt-4">
//             {/* Gallery Column */}
//             <div className="col-lg-7 col-xl-8">
//               <div className="position-relative mb-3">
//                 <Swiper
//                   modules={[Navigation, Thumbs, Controller]}
//                   spaceBetween={10}
//                   navigation={{
//                     prevEl: '.btn-prev',
//                     nextEl: '.btn-next'
//                   }}
//                   thumbs={{ swiper: thumbsSwiper }}
//                   onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
//                   className="main-swiper rounded-4 overflow-hidden"
//                   loop={true}
//                 >
//                   {product.image_urls?.map((url, index) => (
//                     <SwiperSlide key={index} className="d-flex justify-content-center">
//                       <Link
//                         data-glightbox={`gallery:product-gallery`}
//                         data-type={getUrlType(url)}
//                         to={url}
//                         className="d-block w-100 h-100 position-relative gallery-item"
//                       >
//                         <div className="ratio" style={{ paddingBottom: '100%' }}>
//                           {getUrlType(url) === 'image' ? (
//                             <img 
//                               src={url} 
//                               alt={`Product view ${index + 1}`} 
//                               onError={(e) => {
//                                 e.currentTarget.src = '/assets/img/us/placeholder.png';
//                               }}
//                               className="object-fit-cover position-absolute top-0 start-0 w-100 h-100"
//                             />
//                           ) : (
//                             <div className="bg-dark d-flex align-items-center justify-content-center w-100 h-100 position-absolute top-0 start-0">
//                               <i className="ci-video text-white fs-1" />
//                               <span className="visually-hidden">Video Preview</span>
//                             </div>
//                           )}
//                         </div>
//                         <div className="gallery-overlay"></div>
//                         <i className="ci-zoom-in gallery-zoom-icon"></i>
//                       </Link>
//                     </SwiperSlide>
//                   ))}
//                 </Swiper>
                
//                 {/* Navigation buttons */}
//                 <div className="position-absolute top-50 start-0 z-2 translate-middle-y ms-2">
//                   <button className="btn btn-prev btn-icon btn-outline-secondary bg-body rounded-circle animate-slide-start" 
//                     aria-label="Previous slide"
//                   >
//                     <i className="ci-chevron-left fs-lg animate-target" />
//                   </button>
//                 </div>
//                 <div className="position-absolute top-50 end-0 z-2 translate-middle-y me-2">
//                   <button className="btn btn-next btn-icon btn-outline-secondary bg-body rounded-circle animate-slide-end" 
//                     aria-label="Next slide">
//                     <i className="ci-chevron-right fs-lg animate-target" />
//                   </button>
//                 </div>
//               </div>
              
//               {/* Thumbnails Swiper */}
//               <div className="swiper-thumbs pt-2 mt-1" style={{ maxWidth: '100%' }}>
//                 <Swiper
//                   modules={[Thumbs, Controller]}
//                   spaceBetween={12}
//                   slidesPerView={3}
//                   watchSlidesProgress={true}
//                   onSwiper={setThumbsSwiper}
//                   breakpoints={{
//                     340: { slidesPerView: 4 },
//                     500: { slidesPerView: 5 },
//                     600: { slidesPerView: 6 },
//                     768: { slidesPerView: 4 },
//                     992: { slidesPerView: 5 },
//                     1200: { slidesPerView: 6 }
//                   }}
//                   className="thumb-swiper"
//                 >
//                   {product.image_urls?.map((url, index) => (
//                     <SwiperSlide key={index} className="swiper-thumb">
//                       <a
//                         data-glightbox={`gallery:product-gallery`}
//                         data-type={getUrlType(url)}
//                         href={url}
//                         className="d-block w-100 h-100 position-relative gallery-item rounded-2"
//                         onClick={() => mainSwiperRef.current?.slideTo(index)}
//                       >
//                         <div className="ratio ratio-1x1">
//                           {getUrlType(url) === 'image' ? (
//                             <img 
//                               src={url} 
//                               onError={(e) => {
//                                 e.currentTarget.src = '/assets/img/us/placeholder.png';
//                               }}
//                               alt={`${url} ${index + 1}`} 
//                               className="object-fit-cover position-absolute top-0 start-0 w-100 h-100 rounded-2"
//                             />
//                           ) : (
//                             <div className="bg-dark d-flex align-items-center justify-content-center w-100 h-100 position-absolute top-0 start-0 rounded-2">
//                               <i className="ci-video text-white fs-5" />
//                               <span className="visually-hidden">Video Thumbnail</span>
//                             </div>
//                           )}
//                         </div>
//                         <div className="gallery-overlay"></div>
//                         <i className="ci-zoom-in gallery-zoom-icon"></i>
//                       </a>
//                     </SwiperSlide>
//                   ))}
//                 </Swiper>
//               </div>
//             </div>
            
//             {/* Tabs Column */}
//             <div className="col-lg-5 col-xl-4 mt-2 mt-lg-0">
//               <div className="">
//                 <section className="pt-2 pt-lg-0 mt-2 mt-sm-3 mt-lg-0">
//                   <ul className="nav nav-pills mb-3 flex-nowrap" role="tablist">
//                     <li className="nav-item" role="presentation">
//                       <button 
//                         type="button" 
//                         className="nav-link active" 
//                         id="description-tab" 
//                         data-bs-toggle="pill" 
//                         data-bs-target="#description-tab-pane" 
//                         role="tab" 
//                         aria-controls="description-tab-pane" 
//                         aria-selected="true"
//                       >
//                         <i className="ci-info me-2 ms-n1" />
//                         Description
//                       </button>
//                     </li>
//                     <li className="nav-item" role="presentation">
//                       <button 
//                         className="nav-link" 
//                         id="pills-delivery-tab" 
//                         data-bs-toggle="pill" 
//                         data-bs-target="#delivery-tab-pane" 
//                         type="button" 
//                         role="tab" 
//                         aria-controls="delivery-tab-pane" 
//                         aria-selected="false"
//                       >
//                         <i className="ci-shopping-cart me-2 ms-n1" />
//                         Delivery
//                       </button>
//                     </li>
//                     <li className="nav-item" role="presentation">
//                       <button 
//                         className="nav-link rounded-pill" 
//                         id="reviews-tab" 
//                         data-bs-toggle="pill" 
//                         data-bs-target="#reviews-tab-pane" 
//                         type="button" 
//                         role="tab" 
//                         aria-controls="#reviews-tab-pane" 
//                         aria-selected="false"
//                       >
//                         <i className="ci-message-square me-2 ms-n1" />
//                         Reviews <span className="badge rounded-pill bg-warning"> {product.reviews_count}</span>
//                       </button>
//                     </li>
//                   </ul>
                  
//                   <div className="tab-content pt-4 mt-sm-1 mt-md-3">
//                     <div 
//                       aria-labelledby="description-tab" 
//                       className="tab-pane fade active show" 
//                       id="description-tab-pane" 
//                       role="tabpanel"
//                     >
//                       <div className="row">
//                         <h2 className="h3 pb-2 pb-md-3">Overview</h2>
//                         <p>{product?.description}</p>
//                         <div className="col-md-12 order-md-1">
                          
//                           {/* Product Attributes with Working Tooltips */}
//                           {product.attributes && product.attributes.length > 0 && (
//                             <div className="pt-5 mt-md-2 mb-lg-4">
//                               <h3 className="h6">General specs</h3>
//                               <ul className="list-unstyled d-flex flex-column gap-3 fs-sm pb-3 m-0 mb-2 mb-sm-3">
//                                 {product.attributes.map((attr, index) => (
//                                   <li key={index} className="d-flex align-items-center position-relative pe-4">
//                                     <span>{attr.key}:</span>
//                                     <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2"/>
//                                     <span className="text-dark-emphasis fw-medium text-end">{attr.value}</span>
//                                     <i 
//                                       className="ci-info fs-base text-body-tertiary position-absolute top-50 end-0 translate-middle-y" 
//                                       data-bs-toggle="popover" 
//                                       data-bs-trigger="hover focus" 
//                                       data-bs-custom-class="popover-sm" 
//                                       data-bs-content={attr.value}
//                                       data-bs-placement="top"
//                                       tabIndex={0}
//                                       role="button"
//                                       aria-label={`Additional information about ${attr.key}`}
//                                     />
//                                   </li>
//                                 ))}

//                                 <li className="d-flex align-items-center position-relative pe-4">
//                                   <span>Manufacturer:</span>
//                                   <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
//                                   <span className="text-dark-emphasis fw-medium text-end">Apple Inc.</span>
//                                   <i 
//                                     className="ci-info fs-base text-body-tertiary position-absolute top-50 end-0 translate-middle-y" 
//                                     data-bs-toggle="popover" 
//                                     data-bs-trigger="hover focus" 
//                                     data-bs-custom-class="popover-sm" 
//                                     data-bs-content="Apple Inc. is the manufacturer of this product"
//                                     data-bs-placement="top"
//                                     tabIndex={0}
//                                     role="button"
//                                     aria-label="Additional information about manufacturer"
//                                   />
//                                 </li>
//                               </ul>
//                             </div>
//                           )}

//                           <div className="alert d-flex alert-info mb-2 mb-sm-3" role="alert">
//                             <i className="ci-info fs-lg pe-1 me-2" style={{marginTop: '.125rem'}} />
//                             <div className="fs-sm">Product specifications and equipment are subject to change without notice.</div>
//                           </div>
//                           <div className="pt-3">
//                             <h3 className="h6">Do you have any questions?</h3>
//                             <a className="btn btn-sm btn-primary" href="#!">Contact us</a>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
                    
//                     {/* Delivery and Returns */}
//                     <div 
//                       aria-labelledby="delivery-tab" 
//                       className="tab-pane fade fs-sm" 
//                       id="delivery-tab-pane" 
//                       role="tabpanel"
//                     >
//                       <div className="row row-cols-1 row-cols-md-12">
//                         <div className="col mb-3 mb-md-0">
//                           <p>We strive to deliver your product as quickly as possible. Our estimated delivery times are as follows:</p>
//                           <div className="col-12 order-md-1">
//                             <h3 className="h6">Delivery</h3>
//                             <ul className="list-unstyled d-flex flex-column gap-3 fs-sm pb-3 m-0 mb-2 mb-sm-3">
//                               <li className="d-flex align-items-center position-relative pe-4">
//                                 <span>Standard delivery:</span>
//                                 <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
//                                 <span className="text-dark-emphasis fw-medium text-end">Within 3-7 business days.</span>
//                               </li>
//                               <li className="d-flex align-items-center position-relative pe-4">
//                                 <span>Express delivery:</span>
//                                 <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
//                                 <span className="text-dark-emphasis fw-medium text-end">Within 1-3 business days.</span>
//                               </li>
//                               <li className="d-flex align-items-center position-relative pe-4">
//                                 <span>Within same city/town:</span>
//                                 <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
//                                 <span className="text-dark-emphasis fw-medium text-end">Same day(fastest).</span>
//                                 <i 
//                                   className="ci-info fs-base text-body-tertiary position-absolute top-50 end-0 translate-middle-y" 
//                                   data-bs-toggle="popover" 
//                                   data-bs-trigger="hover focus" 
//                                   data-bs-custom-class="popover-sm" 
//                                   data-bs-content="For same day delivery within same city, kindly place your order before 11.AM."
//                                   data-bs-placement="top"
//                                   tabIndex={0}
//                                   role="button"
//                                   aria-label="Additional information about same day delivery"
//                                 />
//                               </li>
//                             </ul>
//                             <p>If you are not happy with your purchase, you can return it within 7 days for a full refund or exchange.</p>
//                             <h3 className="h6">Returns</h3>
//                             <ul className="list-unstyled d-flex flex-column gap-3 fs-sm pb-3 m-0 mb-2 mb-sm-3">
//                               <li className="d-flex align-items-center position-relative pe-4">
//                                 <span>Time frame:</span>
//                                 <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
//                                 <span className="text-dark-emphasis fw-medium text-end">Up to 7 days.</span>
//                                 <i 
//                                   className="ci-info fs-base text-body-tertiary position-absolute top-50 end-0 translate-middle-y" 
//                                   data-bs-toggle="popover" 
//                                   data-bs-trigger="hover focus" 
//                                   data-bs-custom-class="popover-sm" 
//                                   data-bs-content="up to 7 days interval to return an item to salesnet."
//                                   data-bs-placement="top"
//                                   tabIndex={0}
//                                   role="button"
//                                   aria-label="Additional information about return timeframe"
//                                 />
//                               </li>
//                             </ul>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
                    
//                     {/* Reviews */}
//                     <div 
//                       aria-labelledby="reviews-tab" 
//                       className="tab-pane fade" 
//                       id="reviews-tab-pane" 
//                       role="tabpanel"
//                     >
//                       <div className="d-sm-flex align-items-center justify-content-between border-bottom pb-2 pb-sm-3">
//                         <div className="mb-3 me-sm-3">
//                           <h2 className="h5 pb-2 mb-1">Customer reviews</h2>
//                           <div className="d-flex align-items-center text-body-secondary fs-sm">
//                             <div className="d-flex gap-1 me-2">
//                               <i className="ci-star-filled text-warning" />
//                               <i className="ci-star-filled text-warning" />
//                               <i className="ci-star-filled text-warning" />
//                               <i className="ci-star-filled text-warning" />
//                               <i className="ci-star text-body-tertiary opacity-75" />
//                             </div>
//                             Based on {product.reviews_count} reviews
//                           </div>
//                         </div>
//                         <button className="btn btn-outline-dark mb-3 rounded-pill" data-bs-target="#reviewForm" data-bs-toggle="modal" type="button">
//                           Leave a review
//                         </button>
//                         {product && (
//                           <ProductReviewForm 
//                             productSlug={product.slug}
//                             onReviewSubmitted={() => {
//                               // console.log('Review submitted, refresh reviews.');
//                             }}
//                           />
//                         )}
//                       </div>
                      
//                       {/* Review List */}
//                       <div className="bg-body-tertiary rounded-4 p-4 p-sm-5">
//                         <div className="vstack gap-3 gap-md-4 mt-n3 - overflow-y-auto pe-3" data-simplebar data-simplebar-auto-hide="false" style={{maxWidth: "100%", maxHeight: "320px"}}>
//                           {product.reviews && product.reviews.length > 0 ? (
//                             product.reviews.map((review) => (
//                               <div key={review.id} className="mt-3">
//                                 <div className="d-flex align-items-center justify-content-between gap-3 mb-3">
//                                   <div className="d-flex align-items-center">
//                                     <div className="ratio ratio-1x1 flex-shrink-0 bg-body-secondary rounded-circle overflow-hidden"
//                                       style={{ width: "40px" }}>
//                                       <img 
//                                         src={review.avatar || '/assets/img/us/logos/avatar.png'} 
//                                         alt={review.username} 
//                                         onError={(e) => {
//                                           e.currentTarget.src = '/assets/img/us/placeholder.png';
//                                         }}
//                                       />
//                                     </div>
//                                     <div className="ps-2 ms-1">
//                                       <div className="fs-sm fw-semibold text-dark-emphasis mb-1">
//                                         {review.name || review.username}
//                                       </div>
//                                       <div className="fs-xs text-body-secondary">
//                                         {new Date(review.created_at).toLocaleDateString('en-US', { year: 'numeric',  month: 'long',  day: 'numeric' })}
//                                       </div>
//                                     </div>
//                                   </div>
//                                   <div className="d-flex gap-2">
//                                     <button
//                                                                             className="btn btn-sm btn-secondary bg-body border-0 animate-pulse rounded-pill"
//                                       type="button">
//                                       <i className="ci-heart animate-target fs-sm ms-n1 me-1" />
//                                       {review.rating}
//                                     </button>
//                                     <button
//                                       aria-label="Reply"
//                                       className="btn btn-icon btn-sm btn-secondary bg-body border-0 animate-slide-end rounded-circle"
//                                       type="button">
//                                       <i className="ci-corner-up-right animate-target fs-sm" />
//                                     </button>
//                                   </div>
//                                 </div>
//                                 <p className="fs-sm mb-0 text-break">{review.comment}</p>
//                               </div>
//                             ))
//                           ) : (
//                             <p className="fs-sm text-body-secondary">No comments available for this product just yet.</p>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </section>
//               </div>
//             </div>
//           </div>

//           {/* Tags Section - Below both columns */}
//           <div className="row">
//             <div className="col-12">
//               <h2 className="h4 pt-5 mt-md-2 mb-lg-4">Tags</h2>
//               <div className="d-flex flex-wrap gap-2 mt-n1">
//                 {product.tags && product.tags.length > 0 ? (
//                   product.tags.slice(1).map((tag, index) => (
//                     <Link key={index} className="btn btn-sm btn-secondary rounded-pill fs-sm text-body-emphasis"
//                       to={`/products/${tag}`}>
//                       {tag}
//                     </Link>
//                   ))
//                 ) : (
//                   <>
//                     <Link className="btn btn-sm btn-secondary rounded-pill fs-sm text-body-emphasis" to="/products">New Goods</Link>
//                     <Link className="btn btn-sm btn-secondary rounded-pill fs-sm text-body-emphasis" to="/products">Go to products</Link>
//                     <Link className="btn btn-sm btn-secondary rounded-pill fs-sm text-body-emphasis" to="/products">Recharge</Link>
//                     <Link className="btn btn-sm btn-secondary rounded-pill fs-sm text-body-emphasis" to="/products">Digital</Link>
//                     <Link className="btn btn-sm btn-secondary rounded-pill fs-sm text-body-emphasis" to="/products">Physical</Link>
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         </section>

//         <ProductRecommendations />
//       </main>
//     </>
//   );
// }

// export default ProductDetails;
 