// // const Offers = () => {
// //     return (
// //       <>
// //           <section className="container pt-5 mt-2 mt-sm-3 mt-lg-4">
  
// //                   {/* Heading + Countdown */}
// //                   <div className="d-flex align-items-start align-items-md-center justify-content-between border-bottom pb-3 pb-md-4">
// //                   <div className="d-md-flex align-items-center">
// //                       <h2 className="h3 pe-3 me-3 mb-md-0">Special offers for you</h2>
  
// //                       {/* Replace "demoDate" inside data-countdown-date attribute with the real date, ex: "10/15/2025 12:00:00" */}
// //                       <div className="d-flex align-items-center" data-countdown-date="demoDate">
// //                       <div className="btn btn-primary pe-none px-2">
// //                           <span data-days="">13</span>
// //                           <span>d</span>
// //                       </div>
// //                       <div className="animate-blinking text-body-tertiary fs-lg fw-medium mx-2">:</div>
// //                       <div className="btn btn-primary pe-none px-2">
// //                           <span data-hours="">00</span>
// //                           <span>h</span>
// //                       </div>
// //                       <div className="animate-blinking text-body-tertiary fs-lg fw-medium mx-2">:</div>
// //                       <div className="btn btn-primary pe-none px-2">
// //                           <span data-minutes="">15</span>
// //                           <span>m</span>
// //                       </div>
// //                       </div>
// //                   </div>
// //                   <div className="nav ms-3">
// //                       <a className="nav-link animate-underline px-0 py-2" href="shop-catalog-electronics.html">
// //                       <span className="animate-target text-nowrap">View all</span>
// //                       <i className="ci-chevron-right fs-base ms-1"></i>
// //                       </a>
// //                   </div>
// //                   </div>
  
// //                   {/* Product carousel */}
// //                   <div className="position-relative mx-md-1">
  
// //                   {/* External slider prev/next buttons visible on screens > 500px wide (sm breakpoint) */}
// //                   <button type="button" className="offers-prev btn btn-icon btn-outline-secondary bg-body rounded-circle animate-slide-start position-absolute top-50 start-0 z-2 translate-middle-y ms-n1 d-none d-sm-inline-flex" aria-label="Previous slide" tabindex="0" aria-controls="swiper-wrapper-202f5be3e2d0b10103">
// //                       <i className="ci-chevron-left fs-lg animate-target"></i>
// //                   </button>
// //                   <button type="button" className="offers-next btn btn-icon btn-outline-secondary bg-body rounded-circle animate-slide-end position-absolute top-50 end-0 z-2 translate-middle-y me-n1 d-none d-sm-inline-flex" aria-label="Next slide" tabindex="0" aria-controls="swiper-wrapper-202f5be3e2d0b10103">
// //                       <i className="ci-chevron-right fs-lg animate-target"></i>
// //                   </button>
  
// //                   {/* Slider */}
// //                   <div className="swiper py-4 px-sm-3 swiper-initialized swiper-horizontal swiper-backface-hidden" data-swiper="{
// //                       &quot;slidesPerView&quot;: 2,
// //                       &quot;spaceBetween&quot;: 24,
// //                       &quot;loop&quot;: true,
// //                       &quot;navigation&quot;: {
// //                       &quot;prevEl&quot;: &quot;.offers-prev&quot;,
// //                       &quot;nextEl&quot;: &quot;.offers-next&quot;
// //                       },
// //                       &quot;breakpoints&quot;: {
// //                       &quot;768&quot;: {
// //                           &quot;slidesPerView&quot;: 3
// //                       },
// //                       &quot;992&quot;: {
// //                           &quot;slidesPerView&quot;: 4
// //                       }
// //                       }
// //                   }">
// //                       <div className="swiper-wrapper" id="swiper-wrapper-202f5be3e2d0b10103" aria-live="polite">
  
// //                       {/* Item */}
// //                       <div className="swiper-slide swiper-slide-active" role="group" aria-label="1 / 5" data-swiper-slide-index="0" style={{"width":"210.25px","marginRight":"24px"}}>
// //                           <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
// //                           <div className="position-relative">
// //                               <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
// //                               <div className="d-flex flex-column gap-2">
// //                                   <button type="button" className="btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex" aria-label="Add to Wishlist">
// //                                   <i className="ci-heart fs-base animate-target"></i>
// //                                   </button>
// //                                   <button type="button" className="btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex" aria-label="Compare">
// //                                   <i className="ci-refresh-cw fs-base animate-target"></i>
// //                                   </button>
// //                               </div>
// //                               </div>
// //                               <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
// //                               <button type="button" className="btn btn-icon btn-sm btn-secondary bg-body" data-bs-toggle="dropdown" aria-expanded="false" aria-label="More actions">
// //                                   <i className="ci-more-vertical fs-lg"></i>
// //                               </button>
// //                               <ul className="dropdown-menu dropdown-menu-end fs-xs p-2" style={{"minWidth":"auto"}}>
// //                                   <li>
// //                                   <a className="dropdown-item" href="#!">
// //                                       <i className="ci-heart fs-sm ms-n1 me-2"></i>
// //                                       Add to Wishlist
// //                                   </a>
// //                                   </li>
// //                                   <li>
// //                                   <a className="dropdown-item" href="#!">
// //                                       <i className="ci-refresh-cw fs-sm ms-n1 me-2"></i>
// //                                       Compare
// //                                   </a>
// //                                   </li>
// //                               </ul>
// //                               </div>
// //                               <a className="d-block rounded-top overflow-hidden p-3 p-sm-4" href="shop-product-general-electronics.html">
// //                               <div className="ratio" style={{"--cz-aspect-ratio":"calc(240 / 258 * 100%)"}}>
// //                                   <img src="assets/img/shop/electronics/09.png" alt="Wireless Buds"/>
// //                               </div>
// //                               </a>
// //                           </div>
// //                           <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
// //                               <div className="d-flex align-items-center gap-2 mb-2">
// //                               <div className="d-flex gap-1 fs-xs">
// //                                   <i className="ci-star-filled text-warning"></i>
// //                                   <i className="ci-star-filled text-warning"></i>
// //                                   <i className="ci-star-filled text-warning"></i>
// //                                   <i className="ci-star-filled text-warning"></i>
// //                                   <i className="ci-star-half text-warning"></i>
// //                               </div>
// //                               <span className="text-body-tertiary fs-xs">(14)</span>
// //                               </div>
// //                               <h3 className="pb-1 mb-2">
// //                               <a className="d-block fs-sm fw-medium text-truncate" href="shop-product-general-electronics.html">
// //                                   <span className="animate-target">Xiaomi Wireless Buds Pro</span>
// //                               </a>
// //                               </h3>
// //                               <div className="d-flex align-items-center justify-content-between pb-2 mb-1">
// //                               <div className="h5 lh-1 mb-0">$129.99 <del className="text-body-tertiary fs-sm fw-normal">$156.00</del></div>
// //                               <button type="button" className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2" aria-label="Add to Cart">
// //                                   <i className="ci-shopping-cart fs-base animate-target"></i>
// //                               </button>
// //                               </div>
// //                               <div className="progress mb-2" role="progressbar" aria-label="Available in stock" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{"height":"4px"}}>
// //                               <div className="progress-bar rounded-pill" style={{"width":"25%"}}></div>
// //                               </div>
// //                               <div className="text-body-secondary fs-sm">Available: <span className="text-dark-emphasis fw-medium">112</span></div>
// //                           </div>
// //                           </div>
// //                       </div>
  
// //                       {/* Item */}
// //                       <div className="swiper-slide swiper-slide-next" role="group" aria-label="2 / 5" data-swiper-slide-index="1" style={{"width":"210.25px","marginRight":"24px"}}>
// //                           <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
// //                           <div className="position-relative">
// //                               <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
// //                               <div className="d-flex flex-column gap-2">
// //                                   <button type="button" className="btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex" aria-label="Add to Wishlist">
// //                                   <i className="ci-heart fs-base animate-target"></i>
// //                                   </button>
// //                                   <button type="button" className="btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex" aria-label="Compare">
// //                                   <i className="ci-refresh-cw fs-base animate-target"></i>
// //                                   </button>
// //                               </div>
// //                               </div>
// //                               <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
// //                               <button type="button" className="btn btn-icon btn-sm btn-secondary bg-body" data-bs-toggle="dropdown" aria-expanded="false" aria-label="More actions">
// //                                   <i className="ci-more-vertical fs-lg"></i>
// //                               </button>
// //                               <ul className="dropdown-menu dropdown-menu-end fs-xs p-2" style={{"minWidth":"auto"}}>
// //                                   <li>
// //                                   <a className="dropdown-item" href="#!">
// //                                       <i className="ci-heart fs-sm ms-n1 me-2"></i>
// //                                       Add to Wishlist
// //                                   </a>
// //                                   </li>
// //                                   <li>
// //                                   <a className="dropdown-item" href="#!">
// //                                       <i className="ci-refresh-cw fs-sm ms-n1 me-2"></i>
// //                                       Compare
// //                                   </a>
// //                                   </li>
// //                               </ul>
// //                               </div>
// //                               <a className="d-block rounded-top overflow-hidden p-3 p-sm-4" href="shop-product-general-electronics.html">
// //                               <div className="ratio" style={{"--cz-aspect-ratio":"calc(240 / 258 * 100%)"}}>
// //                                   <img src="assets/img/shop/electronics/03.png" alt="Smart Watch"/>
// //                               </div>
// //                               </a>
// //                           </div>
// //                           <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
// //                               <div className="d-flex align-items-center gap-2 mb-2">
// //                               <div className="d-flex gap-1 fs-xs">
// //                                   <i className="ci-star-filled text-warning"></i>
// //                                   <i className="ci-star-filled text-warning"></i>
// //                                   <i className="ci-star-filled text-warning"></i>
// //                                   <i className="ci-star-filled text-warning"></i>
// //                                   <i className="ci-star-filled text-warning"></i>
// //                               </div>
// //                               <span className="text-body-tertiary fs-xs">(138)</span>
// //                               </div>
// //                               <h3 className="pb-1 mb-2">
// //                               <a className="d-block fs-sm fw-medium text-truncate" href="shop-product-general-electronics.html">
// //                                   <span className="animate-target">Smart Watch Series 7, White</span>
// //                               </a>
// //                               </h3>
// //                               <div className="d-flex align-items-center justify-content-between pb-2 mb-1">
// //                               <div className="h5 lh-1 mb-0">$429.00 <del className="text-body-tertiary fs-sm fw-normal">$486.00</del></div>
// //                               <button type="button" className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2" aria-label="Add to Cart">
// //                                   <i className="ci-shopping-cart fs-base animate-target"></i>
// //                               </button>
// //                               </div>
// //                               <div className="progress mb-2" role="progressbar" aria-label="Available in stock" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{"height":"4px"}}>
// //                               <div className="progress-bar rounded-pill" style={{"width":"50%"}}></div>
// //                               </div>
// //                               <div className="text-body-secondary fs-sm">Available: <span className="text-dark-emphasis fw-medium">45</span></div>
// //                           </div>
// //                           </div>
// //                       </div>
  
// //                       {/* Item */}
// //                       <div className="swiper-slide" role="group" aria-label="3 / 5" data-swiper-slide-index="2" style={{"width":"210.25px","marginRight":"24px"}}>
// //                           <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
// //                           <div className="position-relative">
// //                               <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
// //                               <div className="d-flex flex-column gap-2">
// //                                   <button type="button" className="btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex" aria-label="Add to Wishlist">
// //                                   <i className="ci-heart fs-base animate-target"></i>
// //                                   </button>
// //                                   <button type="button" className="btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex" aria-label="Compare">
// //                                   <i className="ci-refresh-cw fs-base animate-target"></i>
// //                                   </button>
// //                               </div>
// //                               </div>
// //                               <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
// //                               <button type="button" className="btn btn-icon btn-sm btn-secondary bg-body" data-bs-toggle="dropdown" aria-expanded="false" aria-label="More actions">
// //                                   <i className="ci-more-vertical fs-lg"></i>
// //                               </button>
// //                               <ul className="dropdown-menu dropdown-menu-end fs-xs p-2" style={{"minWidth":"auto"}}>
// //                                   <li>
// //                                   <a className="dropdown-item" href="#!">
// //                                       <i className="ci-heart fs-sm ms-n1 me-2"></i>
// //                                       Add to Wishlist
// //                                   </a>
// //                                   </li>
// //                                   <li>
// //                                   <a className="dropdown-item" href="#!">
// //                                       <i className="ci-refresh-cw fs-sm ms-n1 me-2"></i>
// //                                       Compare
// //                                   </a>
// //                                   </li>
// //                               </ul>
// //                               </div>
// //                               <a className="d-block rounded-top overflow-hidden p-3 p-sm-4" href="shop-product-general-electronics.html">
// //                               <div className="ratio" style={{"--cz-aspect-ratio":"calc(240 / 258 * 100%)"}}>
// //                                   <img src="assets/img/shop/electronics/11.png" alt="Nikon Camera"/>
// //                               </div>
// //                               </a>
// //                           </div>
// //                           <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
// //                               <div className="d-flex align-items-center gap-2 mb-2">
// //                               <div className="d-flex gap-1 fs-xs">
// //                                   <i className="ci-star-filled text-warning"></i>
// //                                   <i className="ci-star-filled text-warning"></i>
// //                                   <i className="ci-star-filled text-warning"></i>
// //                                   <i className="ci-star-filled text-warning"></i>
// //                                   <i className="ci-star text-body-tertiary opacity-75"></i>
// //                               </div>
// //                               <span className="text-body-tertiary fs-xs">(64)</span>
// //                               </div>
// //                               <h3 className="pb-1 mb-2">
// //                               <a className="d-block fs-sm fw-medium text-truncate" href="shop-product-general-electronics.html">
// //                                   <span className="animate-target">VRB01 Camera Nikon Max</span>
// //                               </a>
// //                               </h3>
// //                               <div className="d-flex align-items-center justify-content-between pb-2 mb-1">
// //                               <div className="h5 lh-1 mb-0">$652.00 <del className="text-body-tertiary fs-sm fw-normal">$785.00</del></div>
// //                               <button type="button" className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2" aria-label="Add to Cart">
// //                                   <i className="ci-shopping-cart fs-base animate-target"></i>
// //                               </button>
// //                               </div>
// //                               <div className="progress mb-2" role="progressbar" aria-label="Available in stock" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{"height":"4px"}}>
// //                               <div className="progress-bar rounded-pill" style={{"width":"75%"}}></div>
// //                               </div>
// //                               <div className="text-body-secondary fs-sm">Available: <span className="text-dark-emphasis fw-medium">13</span></div>
// //                           </div>
// //                           </div>
// //                       </div>
  
// //                       {/* Item */}
// //                       <div className="swiper-slide" role="group" aria-label="4 / 5" data-swiper-slide-index="3" style={{"width":"210.25px","marginRight":"24px"}}>
// //                           <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
// //                           <div className="position-relative">
// //                               <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
// //                               <div className="d-flex flex-column gap-2">
// //                                   <button type="button" className="btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex" aria-label="Add to Wishlist">
// //                                   <i className="ci-heart fs-base animate-target"></i>
// //                                   </button>
// //                                   <button type="button" className="btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex" aria-label="Compare">
// //                                   <i className="ci-refresh-cw fs-base animate-target"></i>
// //                                   </button>
// //                               </div>
// //                               </div>
// //                               <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
// //                               <button type="button" className="btn btn-icon btn-sm btn-secondary bg-body" data-bs-toggle="dropdown" aria-expanded="false" aria-label="More actions">
// //                                   <i className="ci-more-vertical fs-lg"></i>
// //                               </button>
// //                               <ul className="dropdown-menu dropdown-menu-end fs-xs p-2" style={{"minWidth":"auto"}}>
// //                                   <li>
// //                                   <a className="dropdown-item" href="#!">
// //                                       <i className="ci-heart fs-sm ms-n1 me-2"></i>
// //                                       Add to Wishlist
// //                                   </a>
// //                                   </li>
// //                                   <li>
// //                                   <a className="dropdown-item" href="#!">
// //                                       <i className="ci-refresh-cw fs-sm ms-n1 me-2"></i>
// //                                       Compare
// //                                   </a>
// //                                   </li>
// //                               </ul>
// //                               </div>
// //                               <a className="d-block rounded-top overflow-hidden p-3 p-sm-4" href="shop-product-general-electronics.html">
// //                               <div className="ratio" style={{"--cz-aspect-ratio":"calc(240 / 258 * 100%)"}}>
// //                                   <img src="assets/img/shop/electronics/10.png" alt="iPhone 14"/>
// //                               </div>
// //                               </a>
// //                           </div>
// //                           <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
// //                               <div className="d-flex align-items-center gap-2 mb-2">
// //                               <div className="d-flex gap-1 fs-xs">
// //                                   <i className="ci-star-filled text-warning"></i>
// //                                   <i className="ci-star-filled text-warning"></i>
// //                                   <i className="ci-star-filled text-warning"></i>
// //                                   <i className="ci-star-half text-warning"></i>
// //                                   <i className="ci-star text-body-tertiary opacity-75"></i>
// //                               </div>
// //                               <span className="text-body-tertiary fs-xs">(51)</span>
// //                               </div>
// //                               <h3 className="pb-1 mb-2">
// //                               <a className="d-block fs-sm fw-medium text-truncate" href="shop-product-general-electronics.html">
// //                                   <span className="animate-target">Apple iPhone 14 128GB Blue</span>
// //                               </a>
// //                               </h3>
// //                               <div className="d-flex align-items-center justify-content-between pb-2 mb-1">
// //                               <div className="h5 lh-1 mb-0">$652.00 <del className="text-body-tertiary fs-sm fw-normal">$785.00</del></div>
// //                               <button type="button" className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2" aria-label="Add to Cart">
// //                                   <i className="ci-shopping-cart fs-base animate-target"></i>
// //                               </button>
// //                               </div>
// //                               <div className="progress mb-2" role="progressbar" aria-label="Available in stock" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{"height":"4px"}}>
// //                               <div className="progress-bar rounded-pill" style={{"width":"25%"}}></div>
// //                               </div>
// //                               <div className="text-body-secondary fs-sm">Available: <span className="text-dark-emphasis fw-medium">7</span></div>
// //                           </div>
// //                           </div>
// //                       </div>
  
// //                       {/* Item */}
// //                       <div className="swiper-slide" role="group" aria-label="5 / 5" data-swiper-slide-index="4" style={{"width":"210.25px","marginRight":"24px"}}>
// //                           <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
// //                           <div className="position-relative">
// //                               <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
// //                               <div className="d-flex flex-column gap-2">
// //                                   <button type="button" className="btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex" aria-label="Add to Wishlist">
// //                                   <i className="ci-heart fs-base animate-target"></i>
// //                                   </button>
// //                                   <button type="button" className="btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex" aria-label="Compare">
// //                                   <i className="ci-refresh-cw fs-base animate-target"></i>
// //                                   </button>
// //                               </div>
// //                               </div>
// //                               <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
// //                               <button type="button" className="btn btn-icon btn-sm btn-secondary bg-body" data-bs-toggle="dropdown" aria-expanded="false" aria-label="More actions">
// //                                   <i className="ci-more-vertical fs-lg"></i>
// //                               </button>
// //                               <ul className="dropdown-menu dropdown-menu-end fs-xs p-2" style={{"minWidth":"auto"}}>
// //                                   <li>
// //                                   <a className="dropdown-item" href="#!">
// //                                       <i className="ci-heart fs-sm ms-n1 me-2"></i>
// //                                       Add to Wishlist
// //                                   </a>
// //                                   </li>
// //                                   <li>
// //                                   <a className="dropdown-item" href="#!">
// //                                       <i className="ci-refresh-cw fs-sm ms-n1 me-2"></i>
// //                                       Compare
// //                                   </a>
// //                                   </li>
// //                               </ul>
// //                               </div>
// //                               <a className="d-block rounded-top overflow-hidden p-3 p-sm-4" href="shop-product-general-electronics.html">
// //                               <div className="ratio" style={{"--cz-aspect-ratio":"calc(240 / 258 * 100%)"}}>
// //                                   <img src="assets/img/shop/electronics/01.png" alt="VR Glasses"/>
// //                               </div>
// //                               </a>
// //                           </div>
// //                           <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
// //                               <div className="d-flex align-items-center gap-2 mb-2">
// //                               <div className="d-flex gap-1 fs-xs">
// //                                   <i className="ci-star-filled text-warning"></i>
// //                                   <i className="ci-star-filled text-warning"></i>
// //                                   <i className="ci-star-filled text-warning"></i>
// //                                   <i className="ci-star-filled text-warning"></i>
// //                                   <i className="ci-star-half text-warning"></i>
// //                               </div>
// //                               <span className="text-body-tertiary fs-xs">(19)</span>
// //                               </div>
// //                               <h3 className="pb-1 mb-2">
// //                               <a className="d-block fs-sm fw-medium text-truncate" href="shop-product-general-electronics.html">
// //                                   <span className="animate-target">VRB01 Virtual Reality Glasses</span>
// //                               </a>
// //                               </h3>
// //                               <div className="d-flex align-items-center justify-content-between pb-2 mb-1">
// //                               <div className="h5 lh-1 mb-0">$340.99 <del className="text-body-tertiary fs-sm fw-normal">$430.00</del></div>
// //                               <button type="button" className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2" aria-label="Add to Cart">
// //                                   <i className="ci-shopping-cart fs-base animate-target"></i>
// //                               </button>
// //                               </div>
// //                               <div className="progress mb-2" role="progressbar" aria-label="Available in stock" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100" style={{"height":"4px"}}>
// //                               <div className="progress-bar rounded-pill" style={{"width":"33%"}}></div>
// //                               </div>
// //                               <div className="text-body-secondary fs-sm">Available: <span className="text-dark-emphasis fw-medium">16</span></div>
// //                           </div>
// //                           </div>
// //                       </div>
// //                       </div>
// //                   <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
  
// //                   {/* External slider prev/next buttons visible on screens < 500px wide (sm breakpoint) */}
// //                   <div className="d-flex justify-content-center gap-2 mt-n2 mb-3 pb-1 d-sm-none">
// //                       <button type="button" className="offers-prev btn btn-icon btn-outline-secondary bg-body rounded-circle animate-slide-start me-1" aria-label="Previous slide" tabindex="0" aria-controls="swiper-wrapper-202f5be3e2d0b10103">
// //                       <i className="ci-chevron-left fs-lg animate-target"></i>
// //                       </button>
// //                       <button type="button" className="offers-next btn btn-icon btn-outline-secondary bg-body rounded-circle animate-slide-end" aria-label="Next slide" tabindex="0" aria-controls="swiper-wrapper-202f5be3e2d0b10103">
// //                       <i className="ci-chevron-right fs-lg animate-target"></i>
// //                       </button>
// //                   </div>
// //                   </div>
// //           </section>
// //       </>
// //     )
// //   }
  
// //   export default Offers;

// // 

// import React, { useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/autoplay';

// const Offers = () => {
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);
//   const mobilePrevRef = useRef(null);
//   const mobileNextRef = useRef(null);

//   // Product data array
//   const products = [
//     {
//       id: 1,
//       name: "Xiaomi Wireless Buds Pro",
//       price: 129.99,
//       originalPrice: 156.00,
//       rating: 4.5,
//       reviews: 14,
//       stock: 112,
//       stockPercentage: 25,
//       image: "assets/img/shop/electronics/09.png",
//       link: "/products/xiaomi-wireless-buds-pro"
//     },
//     {
//       id: 2,
//       name: "Smart Watch Series 7, White",
//       price: 429.00,
//       originalPrice: 486.00,
//       rating: 5,
//       reviews: 138,
//       stock: 45,
//       stockPercentage: 50,
//       image: "assets/img/shop/electronics/03.png",
//       link: "/products/smart-watch-series-7"
//     },
//     {
//       id: 3,
//       name: "VRB01 Camera Nikon Max",
//       price: 652.00,
//       originalPrice: 785.00,
//       rating: 4,
//       reviews: 64,
//       stock: 13,
//       stockPercentage: 75,
//       image: "assets/img/shop/electronics/11.png",
//       link: "/products/nikon-camera-max"
//     },
//     {
//       id: 4,
//       name: "Apple iPhone 14 128GB Blue",
//       price: 652.00,
//       originalPrice: 785.00,
//       rating: 3.5,
//       reviews: 51,
//       stock: 7,
//       stockPercentage: 25,
//       image: "assets/img/shop/electronics/10.png",
//       link: "/products/iphone-14-blue"
//     },
//     {
//       id: 5,
//       name: "VRB01 Virtual Reality Glasses",
//       price: 340.99,
//       originalPrice: 430.00,
//       rating: 4.5,
//       reviews: 19,
//       stock: 16,
//       stockPercentage: 33,
//       image: "assets/img/shop/electronics/01.png",
//       link: "/products/vr-glasses"
//     }
//   ];

//   // Render star rating
//   const renderStars = (rating) => {
//     const stars = [];
//     const fullStars = Math.floor(rating);
//     const hasHalfStar = rating % 1 >= 0.5;
    
//     for (let i = 0; i < fullStars; i++) {
//       stars.push(<i key={`full-${i}`} className="ci-star-filled text-warning"></i>);
//     }
    
//     if (hasHalfStar) {
//       stars.push(<i key="half" className="ci-star-half text-warning"></i>);
//     }
    
//     const emptyStars = 5 - stars.length;
//     for (let i = 0; i < emptyStars; i++) {
//       stars.push(<i key={`empty-${i}`} className="ci-star text-body-tertiary opacity-75"></i>);
//     }
    
//     return stars;
//   };

//   return (
//     <section className="container pt-5 mt-2 mt-sm-3 mt-lg-4">
//       {/* Heading + Countdown */}
//       <div className="d-flex align-items-start align-items-md-center justify-content-between border-bottom pb-3 pb-md-4">
//         <div className="d-md-flex align-items-center">
//           <h2 className="h3 pe-3 me-3 mb-md-0">Special offers for you</h2>
          
//           {/* Countdown timer */}
//           <div className="d-flex align-items-center" data-countdown="10/15/2025 12:00:00">
//             <div className="btn btn-success pe-none px-2 rounded-pill">
//               <span data-days="">13</span>
//               <span>d</span>
//             </div>
//             <div className="animate-blinking text-body-tertiary fs-lg fw-medium mx-2">:</div>
//             <div className="btn btn-outline-warning pe-none px-2 rounded-pill">
//               <span data-hours="">00</span>
//               <span>h</span>
//             </div>
//             <div className="animate-blinking text-body-tertiary fs-lg fw-medium mx-2">:</div>
//             <div className="btn btn-outline-danger pe-none px-2 rounded-pill">
//               <span data-minutes="">15</span>
//               <span>m</span>
//             </div>
//           </div>

//         </div>
//         <div className="nav ms-3">
//           <Link to="/offers" className="nav-link badge text-bg-success rounded-pill animate-scale" >
//             <span className="text-nowrap animate-target">View all </span>
//             <i className="ci-chevron-right fs-base ms-1 animate-target"></i>
//           </Link>
//         </div>
//       </div>

//       {/* Product carousel */}
//       <div className="position-relative mx-md-1">
//         {/* Desktop navigation buttons */}
//         <button 
//           ref={prevRef}
//           type="button" 
//           className="offers-prev btn btn-icon btn-outline-secondary bg-body rounded-circle animate-slide-start position-absolute top-50 start-0 z-2 translate-middle-y ms-n1 d-none d-sm-inline-flex" 
//           aria-label="Previous slide"
//         >
//           <i className="ci-chevron-left fs-lg animate-target"></i>
//         </button>
//         <button 
//           ref={nextRef}
//           type="button" 
//           className="offers-next btn btn-icon btn-outline-secondary bg-body rounded-circle animate-slide-end position-absolute top-50 end-0 z-2 translate-middle-y me-n1 d-none d-sm-inline-flex" 
//           aria-label="Next slide"
//         >
//           <i className="ci-chevron-right fs-lg animate-target"></i>
//         </button>

//         {/* Swiper slider */}
//         <Swiper
//           modules={[Navigation, Autoplay]}
//           spaceBetween={24}
//           slidesPerView={2}
//           loop={true}
//           autoplay={{
//             delay: 5000,
//             disableOnInteraction: false
//           }}
//           navigation={{
//             prevEl: prevRef.current,
//             nextEl: nextRef.current,
//           }}
//           onInit={(swiper) => {
//             swiper.params.navigation.prevEl = prevRef.current;
//             swiper.params.navigation.nextEl = nextRef.current;
//             swiper.navigation.init();
//             swiper.navigation.update();
//           }}
//           breakpoints={{
//             768: {
//               slidesPerView: 3
//             },
//             992: {
//               slidesPerView: 4
//             }
//           }}
//           className="py-4 px-sm-3"
//         >
//           {products.map((product) => (
//             <SwiperSlide key={product.id}>
//               <div className="product-card animate-underline hover-effect-opacity bg-body rounded h-100">
//                 <div className="position-relative h-100 d-flex flex-column">
//                   <div className="position-relative flex-grow-1">
//                     <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
//                       <div className="d-flex flex-column gap-2">
//                         <button 
//                           type="button" 
//                           className="btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex" 
//                           aria-label={`Add ${product.name} to Wishlist`}
//                         >
//                           <i className="ci-heart fs-base animate-target"></i>
//                         </button>
//                         <button 
//                           type="button" 
//                           className="btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex" 
//                           aria-label={`Compare ${product.name}`}
//                         >
//                           <i className="ci-refresh-cw fs-base animate-target"></i>
//                         </button>
//                       </div>
//                     </div>
//                     <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
//                       <button 
//                         type="button" 
//                         className="btn btn-icon btn-sm btn-secondary bg-body" 
//                         data-bs-toggle="dropdown" 
//                         aria-expanded="false" 
//                         aria-label={`More actions for ${product.name}`}
//                       >
//                         <i className="ci-more-vertical fs-lg"></i>
//                       </button>
//                       <ul className="dropdown-menu dropdown-menu-end fs-xs p-2" style={{minWidth: "auto"}}>
//                         <li>
//                           <button className="dropdown-item">
//                             <i className="ci-heart fs-sm ms-n1 me-2"></i>
//                             Add to Wishlist
//                           </button>
//                         </li>
//                         <li>
//                           <button className="dropdown-item">
//                             <i className="ci-refresh-cw fs-sm ms-n1 me-2"></i>
//                             Compare
//                           </button>
//                         </li>
//                       </ul>
//                     </div>
//                     <Link 
//                       to={product.link} 
//                       className="d-block rounded-top overflow-hidden p-3 p-sm-4"
//                       aria-label={`View details for ${product.name}`}
//                     >
//                       <div className="ratio" style={{"--cz-aspect-ratio":"calc(240 / 258 * 100%)"}}>
//                         <img 
//                           src={product.image} 
//                           alt={product.name} 
//                           className="img-fluid"
//                           loading="lazy"
//                         />
//                       </div>
//                     </Link>
//                   </div>
//                   <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
//                     <div className="d-flex align-items-center gap-2 mb-2">
//                       <div className="d-flex gap-1 fs-xs">
//                         {renderStars(product.rating)}
//                       </div>
//                       <span className="text-body-tertiary fs-xs">({product.reviews})</span>
//                     </div>
//                     <h3 className="pb-1 mb-2">
//                       <Link 
//                         to={product.link} 
//                         className="d-block fs-sm fw-medium text-truncate"
//                       >
//                         <span className="animate-target">{product.name}</span>
//                       </Link>
//                     </h3>
//                     <div className="d-flex align-items-center justify-content-between pb-2 mb-1">
//                       <div className="h5 lh-1 mb-0">
//                         ${product.price.toFixed(2)} 
//                         <del className="text-body-tertiary fs-sm fw-normal">${product.originalPrice.toFixed(2)}</del>
//                       </div>
//                       <button 
//                         type="button" 
//                         className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2" 
//                         aria-label={`Add ${product.name} to Cart`}
//                       >
//                         <i className="ci-shopping-cart fs-base animate-target"></i>
//                       </button>
//                     </div>
//                     <div 
//                       className="progress mb-2" 
//                       role="progressbar" 
//                       aria-label={`Available stock for ${product.name}`} 
//                       aria-valuenow={product.stockPercentage} 
//                       aria-valuemin="0" 
//                       aria-valuemax="100" 
//                       style={{height: "4px"}}
//                     >
//                       <div 
//                         className="progress-bar rounded-pill" 
//                         style={{width: `${product.stockPercentage}%`}}
//                       ></div>
//                     </div>
//                     <div className="text-body-secondary fs-sm">
//                       Available: <span className="text-dark-emphasis fw-medium">{product.stock}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Mobile navigation buttons */}
//         <div className="d-flex justify-content-center gap-2 mt-n2 mb-3 pb-1 d-sm-none">
//           <button 
//             ref={mobilePrevRef}
//             type="button" 
//             className="offers-prev btn btn-icon btn-outline-secondary bg-body rounded-circle animate-slide-start me-1" 
//             aria-label="Previous slide"
//           >
//             <i className="ci-chevron-left fs-lg animate-target"></i>
//           </button>
//           <button 
//             ref={mobileNextRef}
//             type="button" 
//             className="offers-next btn btn-icon btn-outline-secondary bg-body rounded-circle animate-slide-end" 
//             aria-label="Next slide"
//           >
//             <i className="ci-chevron-right fs-lg animate-target"></i>
//           </button>
//         </div>
//       </div>
//     </section>
//   );

// };

// export default Offers;

// 

import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const Offers = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const mobilePrevRef = useRef(null);
  const mobileNextRef = useRef(null);

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set the target date (October 15, 2025)
  const targetDate = new Date('2025-10-15T12:00:00').getTime();

  // Update countdown every second
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Product data array
  const products = [
    {
      id: 1,
      name: "Xiaomi Wireless Buds Pro",
      price: 129.99,
      originalPrice: 156.00,
      rating: 4.5,
      reviews: 14,
      stock: 112,
      stockPercentage: 25,
      image: "assets/img/shop/electronics/09.png",
      link: "/products/xiaomi-wireless-buds-pro"
    },
    {
      id: 2,
      name: "Smart Watch Series 7, White",
      price: 429.00,
      originalPrice: 486.00,
      rating: 5,
      reviews: 138,
      stock: 45,
      stockPercentage: 50,
      image: "assets/img/shop/electronics/03.png",
      link: "/products/smart-watch-series-7"
    },
    {
      id: 3,
      name: "VRB01 Camera Nikon Max",
      price: 652.00,
      originalPrice: 785.00,
      rating: 4,
      reviews: 64,
      stock: 13,
      stockPercentage: 75,
      image: "assets/img/shop/electronics/11.png",
      link: "/products/nikon-camera-max"
    },
    {
      id: 4,
      name: "Apple iPhone 14 128GB Blue",
      price: 652.00,
      originalPrice: 785.00,
      rating: 3.5,
      reviews: 51,
      stock: 7,
      stockPercentage: 25,
      image: "assets/img/shop/electronics/10.png",
      link: "/products/iphone-14-blue"
    },
    {
      id: 5,
      name: "VRB01 Virtual Reality Glasses",
      price: 340.99,
      originalPrice: 430.00,
      rating: 4.5,
      reviews: 19,
      stock: 16,
      stockPercentage: 33,
      image: "assets/img/shop/electronics/01.png",
      link: "/products/vr-glasses"
    },
    {
      id: 6,
      name: "Sony WH-1000XM4 Headphones",
      price: 349.99,
      originalPrice: 399.99,
      rating: 4.8,
      reviews: 215,
      stock: 28,
      stockPercentage: 40,
      image: "assets/img/shop/electronics/12.png",
      link: "/products/sony-headphones"
    },
    {
      id: 7,
      name: "MacBook Pro 14-inch M1 Pro",
      price: 1999.00,
      originalPrice: 2199.00,
      rating: 4.9,
      reviews: 178,
      stock: 9,
      stockPercentage: 15,
      image: "assets/img/shop/electronics/13.png",
      link: "/products/macbook-pro"
    },
    {
      id: 8,
      name: "Samsung Galaxy Tab S8 Ultra",
      price: 899.99,
      originalPrice: 1099.99,
      rating: 4.7,
      reviews: 92,
      stock: 21,
      stockPercentage: 60,
      image: "assets/img/shop/electronics/14.png",
      link: "/products/galaxy-tab-s8"
    }
  ];

  // Render star rating
  const renderStars = (rating) => {
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

  return (
    <section className="container pt-5 mt-2 mt-sm-3 mt-lg-4">
      {/* Heading + Countdown */}
      <div className="d-flex align-items-start align-items-md-center justify-content-between border-bottom pb-3 pb-md-4">
        <div className="d-md-flex align-items-center">
          <h2 className="h3 pe-3 me-3 mb-md-0">Special offers for you</h2>
          
          {/* Countdown timer */}
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
            disableOnInteraction: false
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
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="product-card animate-underline hover-effect-opacity bg-body rounded h-100">
                <div className="position-relative h-100 d-flex flex-column">
                  <div className="position-relative flex-grow-1">
                    <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
                      <div className="d-flex flex-column gap-2">
                        <button 
                          type="button" 
                          className="btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex" 
                          aria-label={`Add ${product.name} to Wishlist`}
                        >
                          <i className="ci-heart fs-base animate-target"></i>
                        </button>
                        <button 
                          type="button" 
                          className="btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex" 
                          aria-label={`Compare ${product.name}`}
                        >
                          <i className="ci-refresh-cw fs-base animate-target"></i>
                        </button>
                      </div>
                    </div>
                    <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
                      <button 
                        type="button" 
                        className="btn btn-icon btn-sm btn-secondary bg-body" 
                        data-bs-toggle="dropdown" 
                        aria-expanded="false" 
                        aria-label={`More actions for ${product.name}`}
                      >
                        <i className="ci-more-vertical fs-lg"></i>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end fs-xs p-2" style={{minWidth: "auto"}}>
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
                      </ul>
                    </div>
                    <Link 
                      to={product.link} 
                      className="d-block rounded-top overflow-hidden p-3 p-sm-4"
                      aria-label={`View details for ${product.name}`}
                    >
                      <div className="ratio" style={{"--cz-aspect-ratio":"calc(240 / 258 * 100%)"}}>
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="img-fluid"
                          loading="lazy"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <div className="d-flex gap-1 fs-xs">
                        {renderStars(product.rating)}
                      </div>
                      <span className="text-body-tertiary fs-xs">({product.reviews})</span>
                    </div>
                    <h3 className="pb-1 mb-2">
                      <Link 
                        to={product.link} 
                        className="d-block fs-sm fw-medium text-truncate"
                      >
                        <span className="animate-target">{product.name}</span>
                      </Link>
                    </h3>
                    <div className="d-flex align-items-center justify-content-between pb-2 mb-1">
                      <div className="h5 lh-1 mb-0">
                        ${product.price.toFixed(2)} 
                        <del className="text-body-tertiary fs-sm fw-normal">${product.originalPrice.toFixed(2)}</del>
                      </div>
                      <button 
                        type="button" 
                        className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2" 
                        aria-label={`Add ${product.name} to Cart`}
                      >
                        <i className="ci-shopping-cart fs-base animate-target"></i>
                      </button>
                    </div>
                    <div 
                      className="progress mb-2" 
                      role="progressbar" 
                      aria-label={`Available stock for ${product.name}`} 
                      aria-valuenow={product.stockPercentage} 
                      aria-valuemin="0" 
                      aria-valuemax="100" 
                      style={{height: "4px"}}
                    >
                      <div 
                        className="progress-bar rounded-pill" 
                        style={{width: `${product.stockPercentage}%`}}
                      ></div>
                    </div>
                    <div className="text-body-secondary fs-sm">
                      Available: <span className="text-dark-emphasis fw-medium">{product.stock}</span>
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