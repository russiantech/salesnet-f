const Offers = () => {
    return (
      <>
          <section className="container pt-5 mt-2 mt-sm-3 mt-lg-4">
  
                  {/* Heading + Countdown */}
                  <div className="d-flex align-items-start align-items-md-center justify-content-between border-bottom pb-3 pb-md-4">
                  <div className="d-md-flex align-items-center">
                      <h2 className="h3 pe-3 me-3 mb-md-0">Special offers for you</h2>
  
                      {/* Replace "demoDate" inside data-countdown-date attribute with the real date, ex: "10/15/2025 12:00:00" */}
                      <div className="d-flex align-items-center" data-countdown-date="demoDate">
                      <div className="btn btn-primary pe-none px-2">
                          <span data-days="">13</span>
                          <span>d</span>
                      </div>
                      <div className="animate-blinking text-body-tertiary fs-lg fw-medium mx-2">:</div>
                      <div className="btn btn-primary pe-none px-2">
                          <span data-hours="">00</span>
                          <span>h</span>
                      </div>
                      <div className="animate-blinking text-body-tertiary fs-lg fw-medium mx-2">:</div>
                      <div className="btn btn-primary pe-none px-2">
                          <span data-minutes="">15</span>
                          <span>m</span>
                      </div>
                      </div>
                  </div>
                  <div className="nav ms-3">
                      <a className="nav-link animate-underline px-0 py-2" href="shop-catalog-electronics.html">
                      <span className="animate-target text-nowrap">View all</span>
                      <i className="ci-chevron-right fs-base ms-1"></i>
                      </a>
                  </div>
                  </div>
  
                  {/* Product carousel */}
                  <div className="position-relative mx-md-1">
  
                  {/* External slider prev/next buttons visible on screens > 500px wide (sm breakpoint) */}
                  <button type="button" className="offers-prev btn btn-icon btn-outline-secondary bg-body rounded-circle animate-slide-start position-absolute top-50 start-0 z-2 translate-middle-y ms-n1 d-none d-sm-inline-flex" aria-label="Previous slide" tabindex="0" aria-controls="swiper-wrapper-202f5be3e2d0b10103">
                      <i className="ci-chevron-left fs-lg animate-target"></i>
                  </button>
                  <button type="button" className="offers-next btn btn-icon btn-outline-secondary bg-body rounded-circle animate-slide-end position-absolute top-50 end-0 z-2 translate-middle-y me-n1 d-none d-sm-inline-flex" aria-label="Next slide" tabindex="0" aria-controls="swiper-wrapper-202f5be3e2d0b10103">
                      <i className="ci-chevron-right fs-lg animate-target"></i>
                  </button>
  
                  {/* Slider */}
                  <div className="swiper py-4 px-sm-3 swiper-initialized swiper-horizontal swiper-backface-hidden" data-swiper="{
                      &quot;slidesPerView&quot;: 2,
                      &quot;spaceBetween&quot;: 24,
                      &quot;loop&quot;: true,
                      &quot;navigation&quot;: {
                      &quot;prevEl&quot;: &quot;.offers-prev&quot;,
                      &quot;nextEl&quot;: &quot;.offers-next&quot;
                      },
                      &quot;breakpoints&quot;: {
                      &quot;768&quot;: {
                          &quot;slidesPerView&quot;: 3
                      },
                      &quot;992&quot;: {
                          &quot;slidesPerView&quot;: 4
                      }
                      }
                  }">
                      <div className="swiper-wrapper" id="swiper-wrapper-202f5be3e2d0b10103" aria-live="polite">
  
                      {/* Item */}
                      <div className="swiper-slide swiper-slide-active" role="group" aria-label="1 / 5" data-swiper-slide-index="0" style={{"width":"210.25px","marginRight":"24px"}}>
                          <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
                          <div className="position-relative">
                              <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
                              <div className="d-flex flex-column gap-2">
                                  <button type="button" className="btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex" aria-label="Add to Wishlist">
                                  <i className="ci-heart fs-base animate-target"></i>
                                  </button>
                                  <button type="button" className="btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex" aria-label="Compare">
                                  <i className="ci-refresh-cw fs-base animate-target"></i>
                                  </button>
                              </div>
                              </div>
                              <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
                              <button type="button" className="btn btn-icon btn-sm btn-secondary bg-body" data-bs-toggle="dropdown" aria-expanded="false" aria-label="More actions">
                                  <i className="ci-more-vertical fs-lg"></i>
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end fs-xs p-2" style={{"minWidth":"auto"}}>
                                  <li>
                                  <a className="dropdown-item" href="#!">
                                      <i className="ci-heart fs-sm ms-n1 me-2"></i>
                                      Add to Wishlist
                                  </a>
                                  </li>
                                  <li>
                                  <a className="dropdown-item" href="#!">
                                      <i className="ci-refresh-cw fs-sm ms-n1 me-2"></i>
                                      Compare
                                  </a>
                                  </li>
                              </ul>
                              </div>
                              <a className="d-block rounded-top overflow-hidden p-3 p-sm-4" href="shop-product-general-electronics.html">
                              <div className="ratio" style={{"--cz-aspect-ratio":"calc(240 / 258 * 100%)"}}>
                                  <img src="assets/img/shop/electronics/09.png" alt="Wireless Buds"/>
                              </div>
                              </a>
                          </div>
                          <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
                              <div className="d-flex align-items-center gap-2 mb-2">
                              <div className="d-flex gap-1 fs-xs">
                                  <i className="ci-star-filled text-warning"></i>
                                  <i className="ci-star-filled text-warning"></i>
                                  <i className="ci-star-filled text-warning"></i>
                                  <i className="ci-star-filled text-warning"></i>
                                  <i className="ci-star-half text-warning"></i>
                              </div>
                              <span className="text-body-tertiary fs-xs">(14)</span>
                              </div>
                              <h3 className="pb-1 mb-2">
                              <a className="d-block fs-sm fw-medium text-truncate" href="shop-product-general-electronics.html">
                                  <span className="animate-target">Xiaomi Wireless Buds Pro</span>
                              </a>
                              </h3>
                              <div className="d-flex align-items-center justify-content-between pb-2 mb-1">
                              <div className="h5 lh-1 mb-0">$129.99 <del className="text-body-tertiary fs-sm fw-normal">$156.00</del></div>
                              <button type="button" className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2" aria-label="Add to Cart">
                                  <i className="ci-shopping-cart fs-base animate-target"></i>
                              </button>
                              </div>
                              <div className="progress mb-2" role="progressbar" aria-label="Available in stock" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{"height":"4px"}}>
                              <div className="progress-bar rounded-pill" style={{"width":"25%"}}></div>
                              </div>
                              <div className="text-body-secondary fs-sm">Available: <span className="text-dark-emphasis fw-medium">112</span></div>
                          </div>
                          </div>
                      </div>
  
                      {/* Item */}
                      <div className="swiper-slide swiper-slide-next" role="group" aria-label="2 / 5" data-swiper-slide-index="1" style={{"width":"210.25px","marginRight":"24px"}}>
                          <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
                          <div className="position-relative">
                              <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
                              <div className="d-flex flex-column gap-2">
                                  <button type="button" className="btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex" aria-label="Add to Wishlist">
                                  <i className="ci-heart fs-base animate-target"></i>
                                  </button>
                                  <button type="button" className="btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex" aria-label="Compare">
                                  <i className="ci-refresh-cw fs-base animate-target"></i>
                                  </button>
                              </div>
                              </div>
                              <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
                              <button type="button" className="btn btn-icon btn-sm btn-secondary bg-body" data-bs-toggle="dropdown" aria-expanded="false" aria-label="More actions">
                                  <i className="ci-more-vertical fs-lg"></i>
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end fs-xs p-2" style={{"minWidth":"auto"}}>
                                  <li>
                                  <a className="dropdown-item" href="#!">
                                      <i className="ci-heart fs-sm ms-n1 me-2"></i>
                                      Add to Wishlist
                                  </a>
                                  </li>
                                  <li>
                                  <a className="dropdown-item" href="#!">
                                      <i className="ci-refresh-cw fs-sm ms-n1 me-2"></i>
                                      Compare
                                  </a>
                                  </li>
                              </ul>
                              </div>
                              <a className="d-block rounded-top overflow-hidden p-3 p-sm-4" href="shop-product-general-electronics.html">
                              <div className="ratio" style={{"--cz-aspect-ratio":"calc(240 / 258 * 100%)"}}>
                                  <img src="assets/img/shop/electronics/03.png" alt="Smart Watch"/>
                              </div>
                              </a>
                          </div>
                          <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
                              <div className="d-flex align-items-center gap-2 mb-2">
                              <div className="d-flex gap-1 fs-xs">
                                  <i className="ci-star-filled text-warning"></i>
                                  <i className="ci-star-filled text-warning"></i>
                                  <i className="ci-star-filled text-warning"></i>
                                  <i className="ci-star-filled text-warning"></i>
                                  <i className="ci-star-filled text-warning"></i>
                              </div>
                              <span className="text-body-tertiary fs-xs">(138)</span>
                              </div>
                              <h3 className="pb-1 mb-2">
                              <a className="d-block fs-sm fw-medium text-truncate" href="shop-product-general-electronics.html">
                                  <span className="animate-target">Smart Watch Series 7, White</span>
                              </a>
                              </h3>
                              <div className="d-flex align-items-center justify-content-between pb-2 mb-1">
                              <div className="h5 lh-1 mb-0">$429.00 <del className="text-body-tertiary fs-sm fw-normal">$486.00</del></div>
                              <button type="button" className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2" aria-label="Add to Cart">
                                  <i className="ci-shopping-cart fs-base animate-target"></i>
                              </button>
                              </div>
                              <div className="progress mb-2" role="progressbar" aria-label="Available in stock" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{"height":"4px"}}>
                              <div className="progress-bar rounded-pill" style={{"width":"50%"}}></div>
                              </div>
                              <div className="text-body-secondary fs-sm">Available: <span className="text-dark-emphasis fw-medium">45</span></div>
                          </div>
                          </div>
                      </div>
  
                      {/* Item */}
                      <div className="swiper-slide" role="group" aria-label="3 / 5" data-swiper-slide-index="2" style={{"width":"210.25px","marginRight":"24px"}}>
                          <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
                          <div className="position-relative">
                              <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
                              <div className="d-flex flex-column gap-2">
                                  <button type="button" className="btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex" aria-label="Add to Wishlist">
                                  <i className="ci-heart fs-base animate-target"></i>
                                  </button>
                                  <button type="button" className="btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex" aria-label="Compare">
                                  <i className="ci-refresh-cw fs-base animate-target"></i>
                                  </button>
                              </div>
                              </div>
                              <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
                              <button type="button" className="btn btn-icon btn-sm btn-secondary bg-body" data-bs-toggle="dropdown" aria-expanded="false" aria-label="More actions">
                                  <i className="ci-more-vertical fs-lg"></i>
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end fs-xs p-2" style={{"minWidth":"auto"}}>
                                  <li>
                                  <a className="dropdown-item" href="#!">
                                      <i className="ci-heart fs-sm ms-n1 me-2"></i>
                                      Add to Wishlist
                                  </a>
                                  </li>
                                  <li>
                                  <a className="dropdown-item" href="#!">
                                      <i className="ci-refresh-cw fs-sm ms-n1 me-2"></i>
                                      Compare
                                  </a>
                                  </li>
                              </ul>
                              </div>
                              <a className="d-block rounded-top overflow-hidden p-3 p-sm-4" href="shop-product-general-electronics.html">
                              <div className="ratio" style={{"--cz-aspect-ratio":"calc(240 / 258 * 100%)"}}>
                                  <img src="assets/img/shop/electronics/11.png" alt="Nikon Camera"/>
                              </div>
                              </a>
                          </div>
                          <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
                              <div className="d-flex align-items-center gap-2 mb-2">
                              <div className="d-flex gap-1 fs-xs">
                                  <i className="ci-star-filled text-warning"></i>
                                  <i className="ci-star-filled text-warning"></i>
                                  <i className="ci-star-filled text-warning"></i>
                                  <i className="ci-star-filled text-warning"></i>
                                  <i className="ci-star text-body-tertiary opacity-75"></i>
                              </div>
                              <span className="text-body-tertiary fs-xs">(64)</span>
                              </div>
                              <h3 className="pb-1 mb-2">
                              <a className="d-block fs-sm fw-medium text-truncate" href="shop-product-general-electronics.html">
                                  <span className="animate-target">VRB01 Camera Nikon Max</span>
                              </a>
                              </h3>
                              <div className="d-flex align-items-center justify-content-between pb-2 mb-1">
                              <div className="h5 lh-1 mb-0">$652.00 <del className="text-body-tertiary fs-sm fw-normal">$785.00</del></div>
                              <button type="button" className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2" aria-label="Add to Cart">
                                  <i className="ci-shopping-cart fs-base animate-target"></i>
                              </button>
                              </div>
                              <div className="progress mb-2" role="progressbar" aria-label="Available in stock" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{"height":"4px"}}>
                              <div className="progress-bar rounded-pill" style={{"width":"75%"}}></div>
                              </div>
                              <div className="text-body-secondary fs-sm">Available: <span className="text-dark-emphasis fw-medium">13</span></div>
                          </div>
                          </div>
                      </div>
  
                      {/* Item */}
                      <div className="swiper-slide" role="group" aria-label="4 / 5" data-swiper-slide-index="3" style={{"width":"210.25px","marginRight":"24px"}}>
                          <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
                          <div className="position-relative">
                              <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
                              <div className="d-flex flex-column gap-2">
                                  <button type="button" className="btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex" aria-label="Add to Wishlist">
                                  <i className="ci-heart fs-base animate-target"></i>
                                  </button>
                                  <button type="button" className="btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex" aria-label="Compare">
                                  <i className="ci-refresh-cw fs-base animate-target"></i>
                                  </button>
                              </div>
                              </div>
                              <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
                              <button type="button" className="btn btn-icon btn-sm btn-secondary bg-body" data-bs-toggle="dropdown" aria-expanded="false" aria-label="More actions">
                                  <i className="ci-more-vertical fs-lg"></i>
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end fs-xs p-2" style={{"minWidth":"auto"}}>
                                  <li>
                                  <a className="dropdown-item" href="#!">
                                      <i className="ci-heart fs-sm ms-n1 me-2"></i>
                                      Add to Wishlist
                                  </a>
                                  </li>
                                  <li>
                                  <a className="dropdown-item" href="#!">
                                      <i className="ci-refresh-cw fs-sm ms-n1 me-2"></i>
                                      Compare
                                  </a>
                                  </li>
                              </ul>
                              </div>
                              <a className="d-block rounded-top overflow-hidden p-3 p-sm-4" href="shop-product-general-electronics.html">
                              <div className="ratio" style={{"--cz-aspect-ratio":"calc(240 / 258 * 100%)"}}>
                                  <img src="assets/img/shop/electronics/10.png" alt="iPhone 14"/>
                              </div>
                              </a>
                          </div>
                          <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
                              <div className="d-flex align-items-center gap-2 mb-2">
                              <div className="d-flex gap-1 fs-xs">
                                  <i className="ci-star-filled text-warning"></i>
                                  <i className="ci-star-filled text-warning"></i>
                                  <i className="ci-star-filled text-warning"></i>
                                  <i className="ci-star-half text-warning"></i>
                                  <i className="ci-star text-body-tertiary opacity-75"></i>
                              </div>
                              <span className="text-body-tertiary fs-xs">(51)</span>
                              </div>
                              <h3 className="pb-1 mb-2">
                              <a className="d-block fs-sm fw-medium text-truncate" href="shop-product-general-electronics.html">
                                  <span className="animate-target">Apple iPhone 14 128GB Blue</span>
                              </a>
                              </h3>
                              <div className="d-flex align-items-center justify-content-between pb-2 mb-1">
                              <div className="h5 lh-1 mb-0">$652.00 <del className="text-body-tertiary fs-sm fw-normal">$785.00</del></div>
                              <button type="button" className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2" aria-label="Add to Cart">
                                  <i className="ci-shopping-cart fs-base animate-target"></i>
                              </button>
                              </div>
                              <div className="progress mb-2" role="progressbar" aria-label="Available in stock" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{"height":"4px"}}>
                              <div className="progress-bar rounded-pill" style={{"width":"25%"}}></div>
                              </div>
                              <div className="text-body-secondary fs-sm">Available: <span className="text-dark-emphasis fw-medium">7</span></div>
                          </div>
                          </div>
                      </div>
  
                      {/* Item */}
                      <div className="swiper-slide" role="group" aria-label="5 / 5" data-swiper-slide-index="4" style={{"width":"210.25px","marginRight":"24px"}}>
                          <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
                          <div className="position-relative">
                              <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
                              <div className="d-flex flex-column gap-2">
                                  <button type="button" className="btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex" aria-label="Add to Wishlist">
                                  <i className="ci-heart fs-base animate-target"></i>
                                  </button>
                                  <button type="button" className="btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex" aria-label="Compare">
                                  <i className="ci-refresh-cw fs-base animate-target"></i>
                                  </button>
                              </div>
                              </div>
                              <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
                              <button type="button" className="btn btn-icon btn-sm btn-secondary bg-body" data-bs-toggle="dropdown" aria-expanded="false" aria-label="More actions">
                                  <i className="ci-more-vertical fs-lg"></i>
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end fs-xs p-2" style={{"minWidth":"auto"}}>
                                  <li>
                                  <a className="dropdown-item" href="#!">
                                      <i className="ci-heart fs-sm ms-n1 me-2"></i>
                                      Add to Wishlist
                                  </a>
                                  </li>
                                  <li>
                                  <a className="dropdown-item" href="#!">
                                      <i className="ci-refresh-cw fs-sm ms-n1 me-2"></i>
                                      Compare
                                  </a>
                                  </li>
                              </ul>
                              </div>
                              <a className="d-block rounded-top overflow-hidden p-3 p-sm-4" href="shop-product-general-electronics.html">
                              <div className="ratio" style={{"--cz-aspect-ratio":"calc(240 / 258 * 100%)"}}>
                                  <img src="assets/img/shop/electronics/01.png" alt="VR Glasses"/>
                              </div>
                              </a>
                          </div>
                          <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
                              <div className="d-flex align-items-center gap-2 mb-2">
                              <div className="d-flex gap-1 fs-xs">
                                  <i className="ci-star-filled text-warning"></i>
                                  <i className="ci-star-filled text-warning"></i>
                                  <i className="ci-star-filled text-warning"></i>
                                  <i className="ci-star-filled text-warning"></i>
                                  <i className="ci-star-half text-warning"></i>
                              </div>
                              <span className="text-body-tertiary fs-xs">(19)</span>
                              </div>
                              <h3 className="pb-1 mb-2">
                              <a className="d-block fs-sm fw-medium text-truncate" href="shop-product-general-electronics.html">
                                  <span className="animate-target">VRB01 Virtual Reality Glasses</span>
                              </a>
                              </h3>
                              <div className="d-flex align-items-center justify-content-between pb-2 mb-1">
                              <div className="h5 lh-1 mb-0">$340.99 <del className="text-body-tertiary fs-sm fw-normal">$430.00</del></div>
                              <button type="button" className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2" aria-label="Add to Cart">
                                  <i className="ci-shopping-cart fs-base animate-target"></i>
                              </button>
                              </div>
                              <div className="progress mb-2" role="progressbar" aria-label="Available in stock" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100" style={{"height":"4px"}}>
                              <div className="progress-bar rounded-pill" style={{"width":"33%"}}></div>
                              </div>
                              <div className="text-body-secondary fs-sm">Available: <span className="text-dark-emphasis fw-medium">16</span></div>
                          </div>
                          </div>
                      </div>
                      </div>
                  <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
  
                  {/* External slider prev/next buttons visible on screens < 500px wide (sm breakpoint) */}
                  <div className="d-flex justify-content-center gap-2 mt-n2 mb-3 pb-1 d-sm-none">
                      <button type="button" className="offers-prev btn btn-icon btn-outline-secondary bg-body rounded-circle animate-slide-start me-1" aria-label="Previous slide" tabindex="0" aria-controls="swiper-wrapper-202f5be3e2d0b10103">
                      <i className="ci-chevron-left fs-lg animate-target"></i>
                      </button>
                      <button type="button" className="offers-next btn btn-icon btn-outline-secondary bg-body rounded-circle animate-slide-end" aria-label="Next slide" tabindex="0" aria-controls="swiper-wrapper-202f5be3e2d0b10103">
                      <i className="ci-chevron-right fs-lg animate-target"></i>
                      </button>
                  </div>
                  </div>
          </section>
      </>
    )
  }
  
  export default Offers;