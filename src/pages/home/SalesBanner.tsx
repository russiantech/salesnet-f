import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import LoadingSpinner from '../../components/shared/LoadingSpinner';
import { OffersAxiosService } from '../../services/net/OffersAxiosService';
import { formatCurrency } from '../../utils/currencyUtils';
import { ADVERTISING_BANNERS } from './datas/advertisingBanners';

interface BannerOffer {
  id: number;
  name: string;
  discount: string;
  is_percentage: boolean;
  currency_symbol?: string;
  promo_code: string;
  image: string;
  gradient: string;
  link: string;
  effectiveImage: string;
  effectiveGradient: string;
}

const PLACEHOLDER_BANNERS = [
  '/assets/img/home/banner/camera.png',
  '/assets/img/home/hero-slider/2.png',
  '/assets/img/home/hero-slider/3.png',
];

const DEFAULT_GRADIENT = 'linear-gradient(90deg, #accbee 0%, #e7f0fd 100%)';

const SalesBanner = () => {
  const [banners, setBanners] = useState<BannerOffer[]>([]);
  const [loading, setLoading] = useState(true);

  /*
  const defaultBanners = PLACEHOLDER_BANNERS.map((img, index) => ({
          id: index,
          name: `Special Offer ${index + 1}`,
          discount: '20',
          is_percentage: true,
          promo_code: `OFFER${index + 1}`,
          image: img,
          gradient: DEFAULT_GRADIENT,
          link: '/offers',
          effectiveImage: img,
          effectiveGradient: DEFAULT_GRADIENT
        }));
      
  const ADVERTISING_BANNERS: BannerOffer[] = [
  {
    id: 1001,
    name: "Be Part of Something Big – Join Salesnet Today!",
    discount: "0",
    is_percentage: false,
    currency_symbol: '',
    promo_code: "Cheap",
    image: "/assets/img/home/banner/camera.png",
    gradient: DEFAULT_GRADIENT,
    link: "https://salesnet.ng",
    effectiveImage: "/assets/img/home/banner/camera.png",
    effectiveGradient: DEFAULT_GRADIENT,
  },
  {
    id: 1001,
    name: "Be Part of Something Big – Join Salesnet Today!",
    discount: "0",
    is_percentage: false,
    currency_symbol: '',
    promo_code: "Cheap",
    image: "/assets/img/home/banner/ekusi_soup.png",
    gradient: DEFAULT_GRADIENT,
    link: "https://salesnet.ng",
    effectiveImage: "/assets/img/home/banner/ekusi_soup.png",
    effectiveGradient: DEFAULT_GRADIENT,
  },
  {
    id: 1003,
    name: "Grow with Us – Buyers & Sellers Welcome 🛒",
    discount: "2",
    is_percentage: false,
    promo_code: "Secured",
    image: "/assets/img/home/banner/furniture.png",
    gradient: DEFAULT_GRADIENT,
    link: "https://salesnet.ng",
    effectiveImage: "/assets/img/home/banner/furniture.png",
    effectiveGradient: DEFAULT_GRADIENT,
  },
  {
    id: 1003,
    name: "Grow with Us – Buyers & Sellers Welcome 🛒",
    discount: "2",
    is_percentage: false,
    promo_code: "Secured",
    image: "/assets/img/home/banner/furniture0.png",
    gradient: DEFAULT_GRADIENT,
    link: "https://salesnet.ng",
    effectiveImage: "/assets/img/home/banner/furniture0.png",
    effectiveGradient: DEFAULT_GRADIENT,
  },
  {
    id: 1004,
    name: "Grow with Us – Buyers & Sellers Welcome 🛒",
    discount: "2",
    is_percentage: false,
    promo_code: "Secured",
    image: "/assets/img/home/banner/fall_season.png",
    gradient: DEFAULT_GRADIENT,
    link: "https://salesnet.ng",
    effectiveImage: "/assets/img/home/banner/fall_season.png",
    effectiveGradient: DEFAULT_GRADIENT,
  },
    {
    id: 1002,
    name: "Discover & Sell on Nigeria’s Newest E-commerce Platform 🚀",
    discount: "1",
    is_percentage: false,
    promo_code: "Faster",
    image: "/assets/img/home/banner/sneakers.png",
    gradient: DEFAULT_GRADIENT,
    link: "https://salesnet.ng",
    effectiveImage: "/assets/img/home/banner/sneakers.png",
    effectiveGradient: DEFAULT_GRADIENT,
  },
    {
    id: 1005,
    name: "Grow with Us – Buyers & Sellers Welcome 🛒",
    discount: "2",
    is_percentage: false,
    promo_code: "Secured",
    image: "/assets/img/home/banner/knitted_bag.png",
    gradient: DEFAULT_GRADIENT,
    link: "https://salesnet.ng",
    effectiveImage: "/assets/img/home/banner/knitted_bag.png",
    effectiveGradient: DEFAULT_GRADIENT,
  },
  {
    id: 1005,
    name: "Grow with Us – Buyers & Sellers Welcome 🛒",
    discount: "2",
    is_percentage: false,
    promo_code: "Secured",
    image: "/assets/img/home/banner/jollof.png",
    gradient: DEFAULT_GRADIENT,
    link: "https://salesnet.ng",
    effectiveImage: "/assets/img/home/banner/jollof.png",
    effectiveGradient: DEFAULT_GRADIENT,
  },
  {
    id: 1005,
    name: "Grow with Us – Buyers & Sellers Welcome 🛒",
    discount: "2",
    is_percentage: false,
    promo_code: "Secured",
    image: "/assets/img/home/banner/jollof_and_fried.png",
    gradient: DEFAULT_GRADIENT,
    link: "https://salesnet.ng",
    effectiveImage: "/assets/img/home/banner/jollof_and_fried.png",
    effectiveGradient: DEFAULT_GRADIENT,
  },
  {
    id: 1005,
    name: "Grow with Us – Buyers & Sellers Welcome 🛒",
    discount: "2",
    is_percentage: false,
    promo_code: "Secured",
    image: "/assets/img/home/banner/jollof_sweet.png",
    gradient: DEFAULT_GRADIENT,
    link: "https://salesnet.ng",
    effectiveImage: "/assets/img/home/banner/jollof_sweet.png",
    effectiveGradient: DEFAULT_GRADIENT,
  },
  {
    id: 1005,
    name: "Grow with Us – Buyers & Sellers Welcome 🛒",
    discount: "2",
    is_percentage: false,
    promo_code: "Secured",
    image: "/assets/img/home/banner/afang_soup.png",
    gradient: DEFAULT_GRADIENT,
    link: "https://salesnet.ng",
    effectiveImage: "/assets/img/home/banner/afang_soup.png",
    effectiveGradient: DEFAULT_GRADIENT,
  },
  {
    id: 1005,
    name: "Grow with Us – Buyers & Sellers Welcome 🛒",
    discount: "2",
    is_percentage: false,
    promo_code: "Secured",
    image: "/assets/img/home/banner/okufe_goat_meat.png",
    gradient: DEFAULT_GRADIENT,
    link: "https://salesnet.ng",
    effectiveImage: "/assets/img/home/banner/okufe_goat_meat.png",
    effectiveGradient: DEFAULT_GRADIENT,
  },


];


  useEffect(() => {
    const loadBanners = async () => {
      try {

        setLoading(true);
        const response = await OffersAxiosService.getPromotionalBanners(10);
        
        const enhancedBanners = response.data.banners.map((banner: BannerOffer, index: number) => ({
          ...banner,
          effectiveImage: banner.image || PLACEHOLDER_BANNERS[index % PLACEHOLDER_BANNERS.length],
          effectiveGradient: banner.gradient || DEFAULT_GRADIENT
        }));

        // alert(JSON.stringify(defaultBanners));
        // console.log(`Enhanced: ${enhancedBanners}`);
        
        // if(enhancedBanners){
        //   setBanners(enhancedBanners);
        // }else{
        //   // show default
        //   setBanners(defaultBanners);
        // }

      // setBanners(enhancedBanners.length > 0 ? enhancedBanners : defaultBanners);
      // If promos exist, show them; otherwise show advertising slides
      setBanners(enhancedBanners.length > 0 ? enhancedBanners : ADVERTISING_BANNERS);

      } catch (err) {

        setBanners(defaultBanners );
        
      } finally {
        setLoading(false);
      }
    };

    loadBanners();
  }, []);
  */

  useEffect(() => {
  const loadBanners = async () => {
    try {
      setLoading(true);
      const response = await OffersAxiosService.getPromotionalBanners(10);

      const enhancedBanners = (response?.data?.banners || []).map(
        (banner: BannerOffer, index: number) => ({
          ...banner,
          effectiveImage:
            banner.image || PLACEHOLDER_BANNERS[index % PLACEHOLDER_BANNERS.length],
          effectiveGradient: banner.gradient || DEFAULT_GRADIENT,
        })
      );

      // If promos exist, show them; otherwise show advertising slides
      setBanners(enhancedBanners.length > 0 ? enhancedBanners : ADVERTISING_BANNERS);
    } catch (err) {
      // On API failure, still show advertising
      setBanners(ADVERTISING_BANNERS);
    } finally {
      setLoading(false);
    }
  };

  loadBanners();
}, []);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>, index: number) => {
    const target = e.target as HTMLImageElement;
    target.src = PLACEHOLDER_BANNERS[index % PLACEHOLDER_BANNERS.length];
    target.classList.add('placeholder-image');
  };

  if (loading) {
    return (
      <section className="container pt-2 mt-2">
        <div className="d-flex justify-content-center align-items-center">
        <LoadingSpinner size='sm' />
        <span className="ms-2">Getting promos ready...</span>
      </div>
      </section>
    );
  }

  if (!loading && banners.length === 0) {
    return (
      <section className="container pt-2 mt-2">
        <div className="alert alert-info text-center">
          No current promotions available. Check back soon!
        </div>
      </section>
    );
  }

  return (
    <section className="container pt-2 mt-2">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ 
          delay: 5000, 
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          waitForTransition: true
        }}
        loop={banners.length > 1}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 3
        }}
        speed={800}
        grabCursor={true}
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={banner.id}>
            <Link to={banner.link} 
              className="text-decoration-none banner-link"
              aria-label={`View ${banner.name} promotion`}
            >
              <div className="row g-0 banner-container">
                <div className="col-md-3 mb-n4 mb-md-0 discount-display">
                  <div className="position-relative d-flex flex-column align-items-center justify-content-center h-100 py-5">
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-none d-md-block">
                      <span 
                        className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none-dark" 
                        style={{ background: banner.effectiveGradient }} 
                      />
                    </div>
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-md-none">
                      <span 
                        className="position-absolute top-0 start-0 w-100 h-100 rounded-top-5 d-none-dark" 
                        style={{ background: banner.effectiveGradient }} 
                      />
                    </div>
                    <div className="position-relative z-1 display-1 text-dark-emphasis text-nowrap mb-0">
                      {banner.is_percentage ? (
                        <>
                          {Math.round(parseFloat(banner.discount))}
                          <span className="d-inline-block ms-n2">
                            <span className="d-block fs-1">%</span>
                            <span className="d-block fs-5">OFF</span>
                          </span>
                        </>
                      ) : (
                        <>
                          {/* {banner.currency_symbol || '$'}{Math.round(parseFloat(banner.discount))} */}
                          {/* {banner.currency_symbol || formatCurrency(banner.discount, 'NGN', { short: true }) } */}
                          {banner.currency_symbol || formatCurrency(banner.discount, 'NGN', { short: true }) }
                          <span className="d-inline-block ms-n2">
                            <span className="d-block fs-5">OFF</span>
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-md-9 position-relative banner-content">
                  <div className="position-absolute top-0 start-0 h-100 overflow-hidden rounded-pill z-2 d-none d-md-block" 
                    style={{ color: 'var(--cz-body-bg)', marginLeft: '-2px' }}>
                    <svg width={4} height={436} viewBox="0 0 4 436" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 0L1.99998 436" stroke="currentColor" strokeWidth={3} strokeDasharray="8 12" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="position-relative">
                    <span className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none-dark rtl-flip" 
                      style={{ background: banner.effectiveGradient }} 
                    />
                    <div className="row align-items-center position-relative z-2">
                      <div className="col-md-6 mb-3 mb-md-0 banner-text">
                        <div className="text-center text-md-start py-md-5 px-4 ps-md-5 pe-md-0 me-md-n5">
                          <h3 className="text-uppercase fw-bold ps-xxl-3 pb-2 mb-1">{banner.name}</h3>
                          {/* {banner.promo_code && (
                            <p className="text-body-emphasis ps-xxl-3 mb-0">
                              Use code <span className="d-inline-block fw-semibold bg-white text-dark rounded-pill py-1 px-2">
                                {banner.promo_code}
                              </span>
                            </p>
                          )} */}
                          {banner.promo_code ? (
                          <p className="text-body-emphasis ps-xxl-3 mb-0">
                            Use code{" "}
                            <span className="d-inline-block fw-semibold bg-white text-dark rounded-pill py-1 px-2">
                              {banner.promo_code}
                            </span>
                          </p>
                        ) : (
                          <p className="text-body-emphasis ps-xxl-3 mb-0">
                            {banner.link.includes("salesnet.ng")
                              ? "Join us today - the internet of sales."
                              : ""}
                          </p>
                        )}
                        </div>
                      </div>
                      <div className="col-md-6 d-flex justify-content-center justify-content-md-end pb-5 pb-md-0 banner-image-container">
                        <div className="me-xxl-4">
                          <img 
                            src={banner.effectiveImage} 
                            className="d-block rtl-flip banner-image rounded" 
                            width={420} 
                            alt={banner.name}
                            loading="lazy"
                            onError={(e) => handleImageError(e, index)}
                          />
                          <div className="d-none d-lg-block" style={{ marginBottom: '-9%' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-none d-lg-block" style={{ paddingBottom: '3%' }} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SalesBanner;