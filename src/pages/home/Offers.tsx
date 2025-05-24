
// src/components/Offers.tsx
import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { OffersAxiosService } from '../../services/net/OffersAxiosService';
import { Offer } from '../../types/Offers';
import { NotificationService } from '../../services/local/NotificationService';
import { CompareButton } from '../products/interactions/CompareButton';
import { FavoriteButton } from '../products/interactions/FavoriteButton';
import { BasketButton } from '../products/interactions/BasketButton';
import LoadingSpinner from '../../components/shared/LoadingSpinner';

const Offers = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const mobilePrevRef = useRef(null);
  const mobileNextRef = useRef(null);
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeOfferId, setActiveOfferId] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Fetch offers from API
  useEffect(() => {
    const loadOffers = async () => {
      try {
        setLoading(true);
        const response = await OffersAxiosService.fetchOffers();
        setOffers(response.data.offers);
        
        // Set the first offer as active for countdown
        if (response.data.offers.length > 0) {
          setActiveOfferId(response.data.offers[0].id);
          setTimeLeft(response.data.offers[0].time_left);
        }
      } catch (err) {
        NotificationService.showDialog(`${err}, Failed to load offers.`)
      } finally {
        setLoading(false);
      }
    };

    loadOffers();
  }, []);

  // Update countdown for the active offer
  useEffect(() => {
    if (!activeOfferId || offers.length === 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const { days, hours, minutes, seconds } = prev;
        
        let newSeconds = seconds - 1;
        let newMinutes = minutes;
        let newHours = hours;
        let newDays = days;
        
        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }
        
        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }
        
        if (newHours < 0) {
          newHours = 23;
          newDays -= 1;
        }
        
        return {
          days: newDays,
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [activeOfferId, offers]);

  const handleSlideChange = (swiper: any) => {
    if (offers.length > 0) {
      setActiveOfferId(offers[swiper.realIndex].id);
      setTimeLeft(offers[swiper.realIndex].time_left);
    }
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="ci-star-filled text-warning"></i>);
    }
    
    if (hasHalfStar) {
      stars.push(<i key="half" className="ci-star-half text-warning"></i>);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="ci-star text-body-tertiary opacity-75"></i>);
    }
    
    return stars;
  };

  if (loading) {
    return (
      <section className="container pt-5 mt-2 mt-sm-3 mt-lg-4">
       <LoadingSpinner />
      </section>
    );
  }

  if (!loading && offers.length === 0) {
    return (
      <section className="container pt-5 mt-2 mt-sm-3 mt-lg-4">
        <div className="alert alert-info">
          No current offers available. Check back soon!
        </div>
      </section>
    );
  }

  return (
    <section className="container pt-5 mt-2 mt-sm-3 mt-lg-4">
      {/* Heading + Countdown */}
      <div className="d-flex align-items-start align-items-md-center justify-content-between border-bottom pb-3 pb-md-4">
        <div className="d-md-flex align-items-center">
          <h2 className="h3 pe-3 me-3 mb-md-0">Special offers for you</h2>
          
          {/* Countdown timer */}
          {activeOfferId && (
            <div className="d-flex align-items-center">
              <div className="btn btn-success pe-none px-2 rounded-pill">
                <span>{timeLeft.days.toString().padStart(2, '0')}</span>
                <span>d</span>
              </div>
              <div className="animate-blinking text-body-tertiary fs-lg fw-medium mx-2">:</div>
              <div className="btn btn-outline-warning pe-none px-2 rounded-pill">
                <span>{timeLeft.hours.toString().padStart(2, '0')}</span>
                <span>h</span>
              </div>
              <div className="animate-blinking text-body-tertiary fs-lg fw-medium mx-2">:</div>
              <div className="btn btn-outline-danger pe-none px-2 rounded-pill">
                <span>{timeLeft.minutes.toString().padStart(2, '0')}</span>
                <span>m</span>
              </div>
              <div className="animate-blinking text-body-tertiary fs-lg fw-medium mx-2">:</div>
              <div className="btn btn-outline-info pe-none px-2 rounded-pill">
                <span>{timeLeft.seconds.toString().padStart(2, '0')}</span>
                <span>s</span>
              </div>
            </div>
          )}
        </div>
        <div className="nav ms-3">
          <Link to="/offers" className="nav-link badge text-bg-success rounded-pill animate-scale">
            <span className="text-nowrap animate-target">View all </span>
            <i className="ci-chevron-right fs-base ms-1 animate-target"></i>
          </Link>
        </div>
      </div>

      {/* Product carousel */}
      <div className="position-relative mx-md-1">
        {/* Desktop navigation buttons */}
        <button 
          ref={prevRef}
          type="button" 
          className="offers-prev btn btn-icon btn-outline-secondary bg-body rounded-circle animate-slide-start position-absolute top-50 start-0 z-2 translate-middle-y ms-n1 d-none d-sm-inline-flex" 
          aria-label="Previous slide"
        >
          <i className="ci-chevron-left fs-lg animate-target"></i>
        </button>
        <button 
          ref={nextRef}
          type="button" 
          className="offers-next btn btn-icon btn-outline-secondary bg-body rounded-circle animate-slide-end position-absolute top-50 end-0 z-2 translate-middle-y me-n1 d-none d-sm-inline-flex" 
          aria-label="Next slide"
        >
          <i className="ci-chevron-right fs-lg animate-target"></i>
        </button>

        {/* Swiper slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          onSlideChange={handleSlideChange}
          breakpoints={{
            576: {
              slidesPerView: 2
            },
            768: {
              slidesPerView: 3
            },
            992: {
              slidesPerView: 4
            },
            1200: {
              slidesPerView: 5
            }
          }}
          className="py-4 px-sm-3"
        >
          {offers.map((offer) => (
            <SwiperSlide key={offer.id}>
              <div className="product-card animate-underline hover-effect-opacity bg-body rounded h-100">
                <div className="position-relative h-100 d-flex flex-column">
                  <div className="position-relative flex-grow-1">
                    <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
                      <div className="d-flex flex-column gap-2">
                        {/* <button 
                          type="button" 
                          className="btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex" 
                          aria-label={`Add ${offer.products[0].name} to Wishlist`}
                        >
                          <i className="ci-heart fs-base animate-target"></i>
                        </button>
                        <button 
                          type="button" 
                          className="btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex" 
                          aria-label={`Compare ${offer.products[0].name}`}
                        >
                          <i className="ci-refresh-cw fs-base animate-target"></i>
                        </button> */}
                             <FavoriteButton 
                                productId={offer.products[0].id}
                                productName={offer.products[0].name}
                                initialFavorite={offer.products[0].is_favorite}
                                className="d-none d-lg-inline-flex"
                              />
                              <CompareButton 
                                productId={offer.products[0].id}
                                productName={offer.products[0].name}
                                initialCompared={offer.products[0].is_compared}
                                className="d-none d-lg-inline-flex"
                              />
                      </div>
                    </div>
                    <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
                      <button 
                        type="button" 
                        className="btn btn-icon btn-sm btn-secondary bg-body" 
                        data-bs-toggle="dropdown" 
                        aria-expanded="false" 
                        aria-label={`More actions for ${offer.products[0].name}`}
                      >
                        <i className="ci-more-vertical fs-lg"></i>
                      </button>
                      {/* <ul className="dropdown-menu dropdown-menu-end fs-xs p-2" style={{minWidth: "auto"}}>
                        <li>
                          <button className="dropdown-item">
                            <i className="ci-heart fs-sm ms-n1 me-2"></i>
                            Add to Wishlist
                          </button>
                        </li>
                        <li>
                          <button className="dropdown-item">
                            <i className="ci-refresh-cw fs-sm ms-n1 me-2"></i>
                            Compare
                          </button>
                        </li>
                      </ul> */}
                      <ul className="dropdown-menu dropdown-menu-end fs-xs p-2" style={{ minWidth: 'auto' }}>
              <li>
                <FavoriteButton 
                productId={offer.products[0].id}
                productName={offer.products[0].name}
                initialFavorite={offer.products[0].is_favorite}
                className="dropdown-item d-flex align-items-center"
              />
      
              </li>
              <li>
    
              <CompareButton 
                productId={offer.products[0].id}
                productName={offer.products[0].name}
                initialCompared={offer.products[0].is_compared}
                className="dropdown-item d-flex align-items-center"
              />

              </li>
            </ul>
                    </div>
                    <Link 
                      to={`/offers/${offer.slug}`} 
                      className="d-block rounded-top overflow-hidden p-3 p-sm-4"
                      aria-label={`View details for ${offer.products[0].name}`}
                      // style={{ background: offer.background }} // back-ground-not-needed-here.
                    >
                      <div className="ratio" style={{"--cz-aspect-ratio":"calc(240 / 258 * 100%)"}}>
                        <img src={offer.products[0].image || offer.banner_image || offer.products[0].image || '/assets/img/placeholder-product.png'} 
                          alt={offer.products[0].name} 
                          className="img-fluid rounded w-100"
                          loading="lazy"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/assets/img/placeholder.jpg';
                          }}
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <div className="d-flex gap-1 fs-xs">
                        {renderStars(4)} {/* Default rating since not in API */}
                      </div>
                      <span className="text-body-tertiary fs-xs">(0)</span> {/* Default comment count */}
                    </div>
                    <h3 className="pb-1 mb-2">
                      <Link 
                        to={`/offers/${offer.slug}`} 
                        className="d-block fs-sm fw-medium text-truncate"
                      >
                        <span className="animate-target">{offer.name}</span>
                      </Link>
                    </h3>
                    <div className="d-flex align-items-center justify-content-between pb-2 mb-1">
                      <div className="h5 lh-1 mb-0">
                        {offer.discount.type === 'percentage' ? (
                          <>
                            ${(parseFloat(offer.products[0].price) * (1 - offer.discount.value / 100)).toFixed(2)}
                            <del className="text-body-tertiary fs-sm fw-normal">${offer.products[0].price}</del>
                          </>
                        ) : (
                          <>
                            ${(parseFloat(offer.products[0].price) - offer.discount.value).toFixed(2)}
                            <del className="text-body-tertiary fs-sm fw-normal">${offer.products[0].price}</del>
                          </>
                        )}
                        {/* <span className="badge bg-danger ms-2">
                          {offer.discount.type === 'percentage' 
                            ? `${offer.discount.value}% OFF` 
                            : `$${offer.discount.value} OFF`}
                        </span> */}
                      </div>
                      {/* <button 
                        type="button" 
                        className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2" 
                        aria-label={`Add ${offer.products[0].name} to Cart`}
                      >
                        <i className="ci-shopping-cart fs-base animate-target"></i>
                      </button> */}
                      <BasketButton productId={offer.products[0].id} productName={offer.products[0].name} />

                    </div>
                    <div className="text-body-secondary fs-sm">
                      <div className="mt-1">
                        <small className="text-muted">Use code:</small>{' '}
                        <span className="badge bg-light text-dark">{offer.discount.code}</span>
                        <span className="badge rounded-pill bg-danger ms-2">
                        {/* <span className="badge btn-outline-danger pe-none ms-2 rounded-pill"> */}
                          {offer.discount.type === 'percentage' 
                            ? `${offer.discount.value}% OFF` 
                            : `$${offer.discount.value} OFF`}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Mobile navigation buttons */}
        <div className="d-flex justify-content-center gap-2 mt-n2 mb-3 pb-1 d-sm-none">
          <button 
            ref={mobilePrevRef}
            type="button" 
            className="offers-prev btn btn-icon btn-outline-secondary bg-body rounded-circle animate-slide-start me-1" 
            aria-label="Previous slide"
          >
            <i className="ci-chevron-left fs-lg animate-target"></i>
          </button>
          <button 
            ref={mobileNextRef}
            type="button" 
            className="offers-next btn btn-icon btn-outline-secondary bg-body rounded-circle animate-slide-end" 
            aria-label="Next slide"
          >
            <i className="ci-chevron-right fs-lg animate-target"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Offers;