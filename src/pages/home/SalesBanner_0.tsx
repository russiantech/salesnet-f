
// const SalesBanner = () => {
//     return (
//       <section className="container pt-5 mt-sm-2 mt-md-3 mt-lg-4">
//       {/* Sale Banner (CTA) */}
//       <div className="row g-0">
//         <div className="col-md-3 mb-n4 mb-md-0">
//           <div className="position-relative d-flex flex-column align-items-center justify-content-center h-100 py-5">
//             <div className="position-absolute top-0 start-0 w-100 h-100 d-none d-md-block">
//               <span className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none-dark" style={{backgroundColor: '#accbee'}} />
//               <span className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none d-block-dark" style={{backgroundColor: '#1b273a'}} />
//             </div>
//             <div className="position-absolute top-0 start-0 w-100 h-100 d-md-none">
//               <span className="position-absolute top-0 start-0 w-100 h-100 rounded-top-5 d-none-dark" style={{background: 'linear-gradient(90deg, #accbee 0%, #e7f0fd 100%)'}} />
//               <span className="position-absolute top-0 start-0 w-100 h-100 rounded-top-5 d-none d-block-dark" style={{background: 'linear-gradient(90deg, #1b273a 0%, #1f2632 100%)'}} />
//             </div>
//             <div className="position-relative z-1 display-1 text-dark-emphasis text-nowrap mb-0">
//               20
//               <span className="d-inline-block ms-n2">
//                 <span className="d-block fs-1">%</span>
//                 <span className="d-block fs-5">OFF</span>
//               </span>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-9 position-relative">
//           <div className="position-absolute top-0 start-0 h-100 overflow-hidden rounded-pill z-2 d-none d-md-block" style={{color: 'var(--cz-body-bg)', marginLeft: '-2px'}}>
//             <svg width={4} height={436} viewBox="0 0 4 436" xmlns="http://www.w3.org/2000/svg">
//               <path d="M2 0L1.99998 436" stroke="currentColor" strokeWidth={3} strokeDasharray="8 12" strokeLinecap="round" />
//             </svg>
//           </div>
//           <div className="position-relative">
//             <span className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none-dark rtl-flip" style={{background: 'linear-gradient(90deg, #accbee 0%, #e7f0fd 100%)'}} />
//             <span className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none d-block-dark rtl-flip" style={{background: 'linear-gradient(90deg, #1b273a 0%, #1f2632 100%)'}} />
//             <div className="row align-items-center position-relative z-2">
//               <div className="col-md-6 mb-3 mb-md-0">
//                 <div className="text-center text-md-start py-md-5 px-4 ps-md-5 pe-md-0 me-md-n5">
//                   <h3 className="text-uppercase fw-bold ps-xxl-3 pb-2 mb-1">Seasonal weekly sale 2024</h3>
//                   <p className="text-body-emphasis ps-xxl-3 mb-0">Use code <span className="d-inline-block fw-semibold bg-white text-dark rounded-pill py-1 px-2">Sale 2024</span> to get best offer</p>
//                 </div>
//               </div>
//               <div className="col-md-6 d-flex justify-content-center justify-content-md-end pb-5 pb-md-0">
//                 <div className="me-xxl-4">
//                   <img src="assets/img/home/electronics/banner/camera.png" className="d-block rtl-flip" width={420} alt="Camera" />
//                   <div className="d-none d-lg-block" style={{marginBottom: '-9%'}} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="d-none d-lg-block" style={{paddingBottom: '3%'}} />
//     </section>
//     )
//   }
  
// export default SalesBanner


// 
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// // Sample JSON data mimicking actual hero content
// const heroData = [
//   {
//     id: 1,
//     title: "Summer Collection 2024",
//     subtitle: "New arrivals with 30% off",
//     image: "https://example.com/images/summer-banner.jpg",
//     ctaText: "Shop Now",
//     ctaLink: "/summer-sale",
//     bgColor: "#ff7e5f"
//   },
//   {
//     id: 2,
//     title: "Tech Gadgets Sale",
//     subtitle: "Up to 50% off on electronics",
//     image: "https://example.com/images/tech-banner.jpg",
//     ctaText: "Explore Deals",
//     ctaLink: "/electronics",
//     bgColor: "#4b6cb7"
//   },
//   {
//     id: 3,
//     title: "Limited Time Offer",
//     subtitle: "Premium members get extra 15% off",
//     image: "https://example.com/images/premium-banner.jpg",
//     ctaText: "Join Now",
//     ctaLink: "/membership",
//     bgColor: "#11998e"
//   }
// ];

// const SalesBanner = () => {
//   return (
//     <section className="container pt-5 mt-sm-2 mt-md-3 mt-lg-4">
//       <Swiper
//         modules={[Autoplay, Pagination, Navigation]}
//         spaceBetween={0}
//         slidesPerView={1}
//         autoplay={{ delay: 5000, disableOnInteraction: false }}
//         pagination={{ clickable: true }}
//         navigation
//         loop
//         className="hero-swiper"
//       >
//         {heroData.map((slide) => (
//           <SwiperSlide key={slide.id}>
//             <div 
//               className="hero-slide"
//               style={{ backgroundColor: slide.bgColor }}
//             >
//               <div className="container">
//                 <div className="row align-items-center">
//                   <div className="col-lg-6">
//                     <h2>{slide.title}</h2>
//                     <p>{slide.subtitle}</p>
//                     <a href={slide.ctaLink} className="btn btn-primary">
//                       {slide.ctaText}
//                     </a>
//                   </div>
//                   <div className="col-lg-6">
//                     <img 
//                       src={slide.image} 
//                       alt={slide.title}
//                       className="img-fluid"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default SalesBanner;


// 

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Sample JSON data matching the component structure
const salesBannerData = [
  {
    id: 1,
    discount: 20,
    title: "Seasonal weekly sale 2024",
    promoCode: "Sale 2024",
    image: "assets/img/home/electronics/banner/camera.png",
    bgColor: "#accbee",
    darkBgColor: "#1b273a",
    gradient: "linear-gradient(90deg, #accbee 0%, #e7f0fd 100%)",
    darkGradient: "linear-gradient(90deg, #1b273a 0%, #1f2632 100%)"
  },
  {
    id: 2,
    discount: 30,
    title: "Summer electronics sale",
    promoCode: "Summer30",
    image: "assets/img/home/electronics/banner/camera.png",
    bgColor: "#f6d365",
    darkBgColor: "#2c3e50",
    gradient: "linear-gradient(90deg, #f6d365 0%, #fda085 100%)",
    darkGradient: "linear-gradient(90deg, #2c3e50 0%, #4ca1af 100%)"
  },
  {
    id: 3,
    discount: 15,
    title: "New arrivals discount",
    promoCode: "New2024",
    image: "assets/img/home/electronics/banner/camera.png",
    bgColor: "#84fab0",
    darkBgColor: "#1e3c72",
    gradient: "linear-gradient(90deg, #84fab0 0%, #8fd3f4 100%)",
    darkGradient: "linear-gradient(90deg, #1e3c72 0%, #2a5298 100%)"
  }
];

const SalesBanner = () => {
  return (
    <section className="container pt-5 mt-sm-2 mt-md-3 mt-lg-4">
      <Swiper
        // modules={[Autoplay, Pagination, Navigation]}
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        // pagination={{ clickable: true }}
        pagination={{
          clickable: true,
        }}
        
      >
        {salesBannerData.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="row g-0">
              <div className="col-md-3 mb-n4 mb-md-0">
                <div className="position-relative d-flex flex-column align-items-center justify-content-center h-100 py-5">
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-none d-md-block">
                    <span 
                      className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none-dark" 
                      style={{backgroundColor: banner.bgColor}} 
                    />
                    <span 
                      className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none d-block-dark" 
                      style={{backgroundColor: banner.darkBgColor}} 
                    />
                  </div>
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-md-none">
                    <span 
                      className="position-absolute top-0 start-0 w-100 h-100 rounded-top-5 d-none-dark" 
                      style={{background: banner.gradient}} 
                    />
                    <span 
                      className="position-absolute top-0 start-0 w-100 h-100 rounded-top-5 d-none d-block-dark" 
                      style={{background: banner.darkGradient}} 
                    />
                  </div>
                  <div className="position-relative z-1 display-1 text-dark-emphasis text-nowrap mb-0">
                    {banner.discount}
                    <span className="d-inline-block ms-n2">
                      <span className="d-block fs-1">%</span>
                      <span className="d-block fs-5">OFF</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-9 position-relative">
                <div className="position-absolute top-0 start-0 h-100 overflow-hidden rounded-pill z-2 d-none d-md-block" style={{color: 'var(--cz-body-bg)', marginLeft: '-2px'}}>
                  <svg width={4} height={436} viewBox="0 0 4 436" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 0L1.99998 436" stroke="currentColor" strokeWidth={3} strokeDasharray="8 12" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="position-relative">
                  <span 
                    className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none-dark rtl-flip" 
                    style={{background: banner.gradient}} 
                  />
                  <span 
                    className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none d-block-dark rtl-flip" 
                    style={{background: banner.darkGradient}} 
                  />
                  <div className="row align-items-center position-relative z-2">
                    <div className="col-md-6 mb-3 mb-md-0">
                      <div className="text-center text-md-start py-md-5 px-4 ps-md-5 pe-md-0 me-md-n5">
                        <h3 className="text-uppercase fw-bold ps-xxl-3 pb-2 mb-1">{banner.title}</h3>
                        <p className="text-body-emphasis ps-xxl-3 mb-0">
                          Use code <span className="d-inline-block fw-semibold bg-white text-dark rounded-pill py-1 px-2">{banner.promoCode}</span> to get best offer
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center justify-content-md-end pb-5 pb-md-0">
                      <div className="me-xxl-4">
                        <img src={banner.image} className="d-block rtl-flip" width={420} alt="Promotional product" />
                        <div className="d-none d-lg-block" style={{marginBottom: '-9%'}} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="d-none d-lg-block" style={{paddingBottom: '3%'}} /> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SalesBanner;

// 

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Navigation, Scrollbar } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/scrollbar';

// // Sample JSON data
// const salesBannerData = [
//   {
//     id: 1,
//     discount: 20,
//     title: "Seasonal weekly sale 2024",
//     promoCode: "Sale 2024",
//     image: "assets/img/home/electronics/banner/camera.png",
//     bgColor: "#accbee",
//     darkBgColor: "#1b273a",
//     gradient: "linear-gradient(90deg, #accbee 0%, #e7f0fd 100%)",
//     darkGradient: "linear-gradient(90deg, #1b273a 0%, #1f2632 100%)"
//   },
//   {
//     id: 2,
//     discount: 30,
//     title: "Summer electronics sale",
//     promoCode: "Summer30",
//     image: "assets/img/home/electronics/banner/camera.png",
//     bgColor: "#f6d365",
//     darkBgColor: "#2c3e50",
//     gradient: "linear-gradient(90deg, #f6d365 0%, #fda085 100%)",
//     darkGradient: "linear-gradient(90deg, #2c3e50 0%, #4ca1af 100%)"
//   },
//   {
//     id: 3,
//     discount: 15,
//     title: "New arrivals discount",
//     promoCode: "New2024",
//     image: "assets/img/home/electronics/banner/camera.png",
//     bgColor: "#84fab0",
//     darkBgColor: "#1e3c72",
//     gradient: "linear-gradient(90deg, #84fab0 0%, #8fd3f4 100%)",
//     darkGradient: "linear-gradient(90deg, #1e3c72 0%, #2a5298 100%)"
//   }
// ];

// const SalesBanner = () => {
//   return (
//     <section className="container pt-5 mt-sm-2 mt-md-3 mt-lg-4">
//       <div className="row justify-content-center" data-bs-theme="dark">
//         <div className="col-xxl-10">
//           <div className="position-relative mx-5 mx-xxl-0">
//             <Swiper
//               modules={[Autoplay, Navigation, Scrollbar]}
//               spaceBetween={30}
//               slidesPerView={1}
//               autoplay={{ delay: 5000, disableOnInteraction: false }}
//               navigation
//               scrollbar={{ draggable: true }}
//               loop
//             >
//               {salesBannerData.map((banner) => (
//                 <SwiperSlide key={banner.id}>
//                   <div className="row g-0">
//                     <div className="col-md-3 mb-n4 mb-md-0">
//                       <div className="position-relative d-flex flex-column align-items-center justify-content-center h-100 py-5">
//                         <div className="position-absolute top-0 start-0 w-100 h-100 d-none d-md-block">
//                           <span 
//                             className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none-dark" 
//                             style={{backgroundColor: banner.bgColor}} 
//                           />
//                           <span 
//                             className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none d-block-dark" 
//                             style={{backgroundColor: banner.darkBgColor}} 
//                           />
//                         </div>
//                         <div className="position-absolute top-0 start-0 w-100 h-100 d-md-none">
//                           <span 
//                             className="position-absolute top-0 start-0 w-100 h-100 rounded-top-5 d-none-dark" 
//                             style={{background: banner.gradient}} 
//                           />
//                           <span 
//                             className="position-absolute top-0 start-0 w-100 h-100 rounded-top-5 d-none d-block-dark" 
//                             style={{background: banner.darkGradient}} 
//                           />
//                         </div>
//                         <div className="position-relative z-1 display-1 text-dark-emphasis text-nowrap mb-0">
//                           {banner.discount}
//                           <span className="d-inline-block ms-n2">
//                             <span className="d-block fs-1">%</span>
//                             <span className="d-block fs-5">OFF</span>
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-md-9 position-relative">
//                       <div className="position-absolute top-0 start-0 h-100 overflow-hidden rounded-pill z-2 d-none d-md-block" style={{color: 'var(--cz-body-bg)', marginLeft: '-2px'}}>
//                         <svg width={4} height={436} viewBox="0 0 4 436" xmlns="http://www.w3.org/2000/svg">
//                           <path d="M2 0L1.99998 436" stroke="currentColor" strokeWidth={3} strokeDasharray="8 12" strokeLinecap="round" />
//                         </svg>
//                       </div>
//                       <div className="position-relative">
//                         <span 
//                           className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none-dark rtl-flip" 
//                           style={{background: banner.gradient}} 
//                         />
//                         <span 
//                           className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none d-block-dark rtl-flip" 
//                           style={{background: banner.darkGradient}} 
//                         />
//                         <div className="row align-items-center position-relative z-2">
//                           <div className="col-md-6 mb-3 mb-md-0">
//                             <div className="text-center text-md-start py-md-5 px-4 ps-md-5 pe-md-0 me-md-n5">
//                               <h3 className="text-uppercase fw-bold ps-xxl-3 pb-2 mb-1">{banner.title}</h3>
//                               <p className="text-body-emphasis ps-xxl-3 mb-0">
//                                 Use code <span className="d-inline-block fw-semibold bg-white text-dark rounded-pill py-1 px-2">{banner.promoCode}</span> to get best offer
//                               </p>
//                             </div>
//                           </div>
//                           <div className="col-md-6 d-flex justify-content-center justify-content-md-end pb-5 pb-md-0">
//                             <div className="me-xxl-4">
//                               <img src={banner.image} className="d-block rtl-flip" width={420} alt="Promotional product" />
//                               <div className="d-none d-lg-block" style={{marginBottom: '-9%'}} />
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="d-none d-lg-block" style={{paddingBottom: '3%'}} />
//                 </SwiperSlide>
//               ))}
//             </Swiper>

//             {/* Swiper Scrollbar */}
//             <div className="swiper-scrollbar mb-4 swiper-scrollbar-horizontal" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SalesBanner;
