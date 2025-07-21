// import Navigation from "../../../components/shared/Navigation"

import { Link } from "react-router-dom"

const Help = () => {
  return (
    <>
      {/* <Navigation /> */}
      
      <main className="content-wrapper">
        {/* Hero */}
        <section className="container pt-3 pt-sm-4">
          <div className="position-relative px-4 px-sm-5 px-xl-0 py-5">
            <span className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none-dark rtl-flip" style={{background: 'linear-gradient(-90deg, #accbee 0%, #e7f0fd 100%)'}} />
            <span className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none d-block-dark rtl-flip" style={{background: 'linear-gradient(-90deg, #1b273a 0%, #1f2632 100%)'}} />
            <div className="position-relative z-1">
              <h1 className="h2 text-center pt-md-2 pt-lg-3 pt-xl-4 mb-4">How can we help?</h1>
              <div className="position-relative mx-auto mb-4" style={{maxWidth: '545px'}}>
                <i className="ci-search position-absolute top-50 start-0 translate-middle-y text-body fs-lg ms-3" />
                <input type="search" className="form-control form-control-lg form-icon-start" placeholder="What do you need help with?" aria-label="Search field" />
              </div>
              <div className="row justify-content-center g-4 pt-2 pt-sm-3 pb-md-2 pb-lg-3 pb-xl-4">
                <div className="col-6 col-md-3 col-xl-2 text-center">
                  <div className="position-relative d-inline-block">
                    <div className="position-relative d-inline-flex justify-content-center align-items-center text-body-emphasis" style={{width: '48px', height: '48px'}}>
                      <span className="position-absolute top-0 start-0 w-100 h-100 bg-white bg-opacity-50 rounded-circle d-none-dark" />
                      <span className="position-absolute top-0 start-0 w-100 h-100 bg-white bg-opacity-10 rounded-circle d-none d-block-dark" />
                      <i className="ci-delivery position-relative z-1 fs-xl" />
                    </div>
                    <h3 className="text-dark fs-sm fw-medium pt-1 mt-2 mb-0">
                      <Link  className="hover-effect-underline stretched-link text-decoration-none" to="/users/help/techa-help-slug">Track your order</Link>
                    </h3>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-xl-2 text-center">
                  <div className="position-relative d-inline-block">
                    <div className="position-relative d-inline-flex justify-content-center align-items-center text-body-emphasis" style={{width: '48px', height: '48px'}}>
                      <span className="position-absolute top-0 start-0 w-100 h-100 bg-white bg-opacity-50 rounded-circle d-none-dark" />
                      <span className="position-absolute top-0 start-0 w-100 h-100 bg-white bg-opacity-10 rounded-circle d-none d-block-dark" />
                      <i className="ci-shopping-bag position-relative z-1 fs-xl" />
                    </div>
                    <h3 className="text-dark fs-sm fw-medium pt-1 mt-2 mb-0">
                      <Link  className="hover-effect-underline stretched-link text-decoration-none" to="/users/help/techa-help-slug">Edit or cancel order</Link>
                    </h3>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-xl-2 text-center">
                  <div className="position-relative d-inline-block">
                    <div className="position-relative d-inline-flex justify-content-center align-items-center text-body-emphasis" style={{width: '48px', height: '48px'}}>
                      <span className="position-absolute top-0 start-0 w-100 h-100 bg-white bg-opacity-50 rounded-circle d-none-dark" />
                      <span className="position-absolute top-0 start-0 w-100 h-100 bg-white bg-opacity-10 rounded-circle d-none d-block-dark" />
                      <i className="ci-refresh-cw position-relative z-1 fs-xl" />
                    </div>
                    <h3 className="text-dark fs-sm fw-medium pt-1 mt-2 mb-0">
                      <Link  className="hover-effect-underline stretched-link text-decoration-none" to="/users/help/techa-help-slug">Returns &amp; refunds</Link>
                    </h3>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-xl-2 text-center">
                  <div className="position-relative d-inline-block">
                    <div className="position-relative d-inline-flex justify-content-center align-items-center text-body-emphasis" style={{width: '48px', height: '48px'}}>
                      <span className="position-absolute top-0 start-0 w-100 h-100 bg-white bg-opacity-50 rounded-circle d-none-dark" />
                      <span className="position-absolute top-0 start-0 w-100 h-100 bg-white bg-opacity-10 rounded-circle d-none d-block-dark" />
                      <i className="ci-gift position-relative z-1 fs-xl" />
                    </div>
                    <h3 className="text-dark fs-sm fw-medium pt-1 mt-2 mb-0">
                      <Link  className="hover-effect-underline stretched-link text-decoration-none" to="/users/help/techa-help-slug">My bonus account</Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Category cards */}
        <section className="container pt-4">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 g-sm-3 g-md-4">
            {/* Category */}
            <div className="col">
              <div className="card h-100 bg-body-tertiary border-0 p-md-2">
                <div className="card-body">
                  <h3 className="h5 d-flex mb-4">
                    <i className="ci-delivery fs-xl pe-1 mt-1 me-2" />
                    Delivery
                  </h3>
                  <ul className="nav flex-column gap-3">
                    <li>
                      <Link  className="nav-link hover-effect-underline fw-normal p-0" to="/users/help/techa-help-slug">Can I track my order in real-time?</Link>
                    </li>
                    <li>
                      <Link  className="nav-link hover-effect-underline fw-normal p-0" to="/users/help/techa-help-slug">Is there an option for express delivery?</Link>
                    </li>
                    <li>
                      <Link  className="nav-link hover-effect-underline fw-normal p-0" to="/users/help/techa-help-slug">Will my parcel be charged customs charges?</Link>
                    </li>
                    <li>
                      <Link  className="nav-link hover-effect-underline fw-normal p-0" to="/users/help/techa-help-slug">Do you offer international delivery?</Link>
                    </li>
                    <li>
                      <Link  className="nav-link hover-effect-underline fw-normal p-0" to="/users/help/techa-help-slug">Why does my statement have a recurring charge?</Link>
                    </li>
                  </ul>
                </div>
                <div className="card-footer nav bg-transparent border-0 pt-0">
                  <Link  className="nav-link animate-underline px-0 py-2" to="#!">
                    <span className="animate-target">View all</span>
                    <i className="ci-chevron-right fs-base ms-1" />
                  </Link>
                </div>
              </div>
            </div>
            {/* Category */}
            <div className="col">
              <div className="card h-100 bg-body-tertiary border-0 p-md-2">
                <div className="card-body">
                  <h3 className="h5 d-flex mb-4">
                    <i className="ci-refresh-cw fs-xl pe-1 mt-1 me-2" />
                    Returns &amp; refunds
                  </h3>
                  <ul className="nav flex-column gap-3">
                    <li>
                      <Link  className="nav-link hover-effect-underline fw-normal p-0" to="/users/help/techa-help-slug">What is your returns policy?</Link>
                    </li>
                    <li>
                      <Link  className="nav-link hover-effect-underline fw-normal p-0" to="/users/help/techa-help-slug">I paid with Afterpay, how do returns work?</Link>
                    </li>
                    <li>
                      <Link  className="nav-link hover-effect-underline fw-normal p-0" to="/users/help/techa-help-slug">What happens to my refund if I return 45 days?</Link>
                    </li>
                    <li>
                      <Link  className="nav-link hover-effect-underline fw-normal p-0" to="/users/help/techa-help-slug">How do I return something to you?</Link>
                    </li>
                    <li>
                      <Link  className="nav-link hover-effect-underline fw-normal p-0" to="/users/help/techa-help-slug">Can I return an exchange instead of a refund?</Link>
                    </li>
                  </ul>
                </div>
                <div className="card-footer nav bg-transparent border-0 pt-0">
                  <Link  className="nav-link animate-underline px-0 py-2" to="#!">
                    <span className="animate-target">View all</span>
                    <i className="ci-chevron-right fs-base ms-1" />
                  </Link>
                </div>
              </div>
            </div>
            {/* Category */}
            <div className="col">
              <div className="card h-100 bg-body-tertiary border-0 p-md-2">
                <div className="card-body">
                  <h3 className="h5 d-flex mb-4">
                    <i className="ci-credit-card fs-xl pe-1 mt-1 me-2" />
                    Payment options
                  </h3>
                  <ul className="nav flex-column gap-3">
                    <li>
                      <Link  className="nav-link hover-effect-underline fw-normal p-0" to="/users/help/techa-help-slug">How do I place an order?</Link>
                    </li>
                    <li>
                      <Link  className="nav-link hover-effect-underline fw-normal p-0" to="/users/help/techa-help-slug">My payment was declined, what should I do?</Link>
                    </li>
                    <li>
                      <Link  className="nav-link hover-effect-underline fw-normal p-0" to="/users/help/techa-help-slug">When will I be charged for my order?</Link>
                    </li>
                    <li>
                      <Link  className="nav-link hover-effect-underline fw-normal p-0" to="/users/help/techa-help-slug">How do I pay using Google Pay?</Link>
                    </li>
                    <li>
                      <Link  className="nav-link hover-effect-underline fw-normal p-0" to="/users/help/techa-help-slug">How do I use my Gift Voucher to pay for an order?</Link>
                    </li>
                  </ul>
                </div>
                <div className="card-footer nav bg-transparent border-0 pt-0">
                  <Link  className="nav-link animate-underline px-0 py-2" to="#!">
                    <span className="animate-target">View all</span>
                    <i className="ci-chevron-right fs-base ms-1" />
                  </Link>
                </div>
              </div>
            </div>
            {/* Category */}
            <div className="col">
              <div className="card h-100 bg-body-tertiary border-0 p-md-2">
                <div className="card-body">
                  <h3 className="h5 d-flex mb-4">
                    <i className="ci-shopping-bag fs-xl pe-1 mt-1 me-2" />
                    Order issues
                  </h3>
                  <ul className="nav flex-column gap-3">
                    <li>
                      <Link  className="nav-link hover-effect-underline fw-normal p-0" to="/users/help/techa-help-slug">Can I amend my order after I've placed it?</Link>
                    </li>
                    <li>
                      <Link  className="nav-link hover-effect-underline fw-normal p-0" to="/users/help/techa-help-slug">I've received a faulty item, what should I do?</Link>
                    </li>
                    <li>
                      <Link  className="nav-link hover-effect-underline fw-normal p-0" to="/users/help/techa-help-slug">I've received an incorrect item, what do I do?</Link>
                    </li>
                    <li>
                      <Link  className="nav-link hover-effect-underline fw-normal p-0" to="/users/help/techa-help-slug">I've bought a gift voucher, can I cancel or return it?</Link>
                    </li>
                    <li>
                      <Link  className="nav-link hover-effect-underline fw-normal p-0" to="/users/help/techa-help-slug">What if isn't right on my customs invoice?</Link>
                    </li>
                  </ul>
                </div>
                <div className="card-footer nav bg-transparent border-0 pt-0">
                  <Link  className="nav-link animate-underline px-0 py-2" to="#!">
                    <span className="animate-target">View all</span>
                    <i className="ci-chevron-right fs-base ms-1" />
                  </Link>
                </div>
              </div>
            </div>
            {/* Category */}
            <div className="col">
              <div className="card h-100 bg-body-tertiary border-0 p-md-2">
                <div className="card-body">
                  <h3 className="h5 d-flex mb-4">
                    <i className="ci-archive fs-xl pe-1 mt-1 me-2" />
                    Products &amp; stock
                  </h3>
                  <ul className="nav flex-column gap-3">
                    <li>
                      <Link  className="nav-link hover-effect-underline fw-normal p-0" to="/users/help/techa-help-slug">Where can I find your size guide?</Link>
                    </li>
                    <li>
                      <Link  className="nav-link hover-effect-underline fw-normal p-0" to="/users/help/techa-help-slug">Where can I find your care instructions?</Link>
                    </li>
                    <li>
                      <Link  className="nav-link hover-effect-underline fw-normal p-0" to="/users/help/techa-help-slug">Can you tell me more about Collusion?</Link>
                    </li>
                    <li>
                      <Link  className="nav-link hover-effect-underline fw-normal p-0" to="/users/help/techa-help-slug">How do I change my Fit Assistant Information?</Link>
                    </li>
                    <li>
                      <Link  className="nav-link hover-effect-underline fw-normal p-0" to="/users/help/techa-help-slug">What are your adhesive product guidelines?</Link>
                    </li>
                  </ul>
                </div>
                <div className="card-footer nav bg-transparent border-0 pt-0">
                  <Link  className="nav-link animate-underline px-0 py-2" to="#!">
                    <span className="animate-target">View all</span>
                    <i className="ci-chevron-right fs-base ms-1" />
                  </Link>
                </div>
              </div>
            </div>
            {/* Category */}
            <div className="col">
              <div className="card h-100 bg-body-tertiary border-0 p-md-2">
                <div className="card-body">
                  <h3 className="h5 d-flex mb-4">
                    <i className="ci-settings fs-xl pe-1 mt-1 me-2" />
                    Managing account
                  </h3>
                  <ul className="nav flex-column gap-3">
                    <li>
                      <Link  className="nav-link hover-effect-underline fw-normal p-0" to="/users/help/techa-help-slug">How do I create an account?</Link>
                    </li>
                    <li>
                      <Link  className="nav-link hover-effect-underline fw-normal p-0" to="/users/help/techa-help-slug">I'm having trouble signing into my account.</Link>
                    </li>
                    <li>
                      <Link  className="nav-link hover-effect-underline fw-normal p-0" to="/users/help/techa-help-slug">I'm having problems using your App.</Link>
                    </li>
                    <li>
                      <Link  className="nav-link hover-effect-underline fw-normal p-0" to="/users/help/techa-help-slug">Do I need to create an account to shop with you?</Link>
                    </li>
                    <li>
                      <Link  className="nav-link hover-effect-underline fw-normal p-0" to="/users/help/techa-help-slug">I'd like to delete my account what should I do?</Link>
                    </li>
                  </ul>
                </div>
                <div className="card-footer nav bg-transparent border-0 pt-0">
                  <Link  className="nav-link animate-underline px-0 py-2" to="#!">
                    <span className="animate-target">View all</span>
                    <i className="ci-chevron-right fs-base ms-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Popular articles (Carousel) */}
        <section className="container py-5 mt-1 mt-sm-2 mt-md-3 mt-lg-4 mt-xl-5">
          <h2 className="text-center pb-2 pb-sm-3 pb-lg-4">Popular articles</h2>
          {/* Nav pills */}
          <div className="row g-0 overflow-x-auto pb-3 mb-2 mb-md-3 mb-lg-4">
            <div className="col-auto mx-auto">
              <ul className="nav nav-pills flex-nowrap text-nowrap">
                <li className="nav-item">
                  <Link  className="nav-link rounded-pill active" aria-current="page" to="#!">Delivery</Link>
                </li>
                <li className="nav-item rounded-pill">
                  <Link  className="nav-link rounded-pill" to="#!">Returns &amp; refunds</Link>
                </li>
                <li className="nav-item">
                  <Link  className="nav-link rounded-pill" to="#!">Payment</Link>
                </li>
                <li className="nav-item">
                  <Link  className="nav-link rounded-pill" to="#!">Order issues</Link>
                </li>
                <li className="nav-item">
                  <Link  className="nav-link rounded-pill" to="#!">Products &amp; stock</Link>
                </li>
                <li className="nav-item">
                  <Link  className="nav-link rounded-pill" to="#!">Account</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Carousel */}
          <div className="position-relative pb-xl-2 mx-2 mx-sm-0">
            <div className="swiper swiper-initialized swiper-horizontal swiper-autoheight swiper-backface-hidden" data-swiper="{
            &quot;slidesPerView&quot;: 1,
            &quot;spaceBetween&quot;: 24,
            &quot;loop&quot;: true,
            &quot;autoHeight&quot;: true,
            &quot;navigation&quot;: {
              &quot;prevEl&quot;: &quot;.btn-prev&quot;,
              &quot;nextEl&quot;: &quot;.btn-next&quot;
            },
            &quot;breakpoints&quot;: {
              &quot;500&quot;: {
                &quot;slidesPerView&quot;: 2
              },
              &quot;992&quot;: {
                &quot;slidesPerView&quot;: 3
              }
            }
          }">
              <div className="swiper-wrapper" id="swiper-wrapper-a106775b6d11e156a" aria-live="polite" style={{height: '355px', transform: 'translate3d(0px, 0px, 0px)'}}>
                {/* Article */}
                <article className="swiper-slide swiper-slide-active" role="group" aria-label="1 / 4" data-swiper-slide-index={0} style={{width: '304.333px', marginRight: '24px'}}>
                  <Link  className="ratio d-flex hover-effect-scale rounded overflow-hidden" to="/users/help/techa-help-slug" style={{"--cz-aspect-ratio": 'calc(306 / 416 * 100%)'}}>
                    <img src="../assets/img/help/article01.jpg" className="hover-effect-target" alt="Image" />
                  </Link>
                  <div className="pt-4">
                    <div className="text-body-tertiary fs-xs pb-2 mt-n1 mb-1">October 2, 2024</div>
                    <h3 className="h5 mb-0">
                      <Link  className="hover-effect-underline" to="/users/help/techa-help-slug">When should I place an order to ensure Express Delivery?</Link>
                    </h3>
                  </div>
                </article>
                {/* Article */}
                <article className="swiper-slide swiper-slide-next" role="group" aria-label="2 / 4" data-swiper-slide-index={1} style={{width: '304.333px', marginRight: '24px'}}>
                  <Link  className="ratio d-flex hover-effect-scale rounded overflow-hidden" to="/users/help/techa-help-slug" style={{"--cz-aspect-ratio": 'calc(306 / 416 * 100%)'}}>
                    <img src="/assets/img/help/article02.jpg" className="hover-effect-target" alt="Image" />
                  </Link>
                  <div className="pt-4">
                    <div className="text-body-tertiary fs-xs pb-2 mt-n1 mb-1">July 17, 2024</div>
                    <h3 className="h5 mb-0">
                      <Link  className="hover-effect-underline" to="/users/help/techa-help-slug">Why does my statement have a recurring delivery charge?</Link>
                    </h3>
                  </div>
                </article>
                {/* Article */}
                <article className="swiper-slide" role="group" aria-label="3 / 4" data-swiper-slide-index={2} style={{width: '304.333px', marginRight: '24px'}}>
                  <Link  className="ratio d-flex hover-effect-scale rounded overflow-hidden" to="/users/help/techa-help-slug" style={{"--cz-aspect-ratio": 'calc(306 / 416 * 100%)'}}>
                    <img src="../assets/img/help/article03.jpg" className="hover-effect-target" alt="Image" />
                  </Link>
                  <div className="pt-4">
                    <div className="text-body-tertiary fs-xs pb-2 mt-n1 mb-1">June 13, 2024</div>
                    <h3 className="h5 mb-0">
                      <Link  className="hover-effect-underline" to="/users/help/techa-help-slug">How can I find information about your international delivery?</Link>
                    </h3>
                  </div>
                </article>
                {/* Article */}
                <article className="swiper-slide" role="group" aria-label="4 / 4" data-swiper-slide-index={3} style={{width: '304.333px', marginRight: '24px'}}>
                  <Link  className="ratio d-flex hover-effect-scale rounded overflow-hidden" to="/users/help/techa-help-slug" style={{"--cz-aspect-ratio": 'calc(306 / 416 * 100%)'}}>
                    <img src="/assets/img/help/article04.jpg" className="hover-effect-target" alt="Image" />
                  </Link>
                  <div className="pt-4">
                    <div className="text-body-tertiary fs-xs pb-2 mt-n1 mb-1">May 30, 2024</div>
                    <h3 className="h5 mb-0">
                      <Link  className="hover-effect-underline" to="/users/help/techa-help-slug">Will my parcel be charged additional customs charges?</Link>
                    </h3>
                  </div>
                </article>
              </div>
              <span className="swiper-notification" aria-live="assertive" aria-atomic="true" /></div>
            {/* Prev button */}
            <div className="position-absolute top-50 start-0 z-2 translate-middle hover-effect-target mt-n5">
              <button type="button" className="btn btn-prev btn-icon btn-outline-secondary bg-body rounded-circle animate-slide-start" aria-label="Previous slide" tabIndex={0} aria-controls="swiper-wrapper-a106775b6d11e156a">
                <i className="ci-chevron-left fs-lg animate-target" />
              </button>
            </div>
            {/* Next button */}
            <div className="position-absolute top-50 start-100 z-2 translate-middle hover-effect-target mt-n5">
              <button type="button" className="btn btn-next btn-icon btn-outline-secondary bg-body rounded-circle animate-slide-end" aria-label="Next slide" tabIndex={0} aria-controls="swiper-wrapper-a106775b6d11e156a">
                <i className="ci-chevron-right fs-lg animate-target" />
              </button>
            </div>
          </div>
        </section>
        <hr className="my-0 my-sm-2 my-md-3 my-lg-4" />
        {/* FAQ (Accordion) */}
        <section className="container py-5 mb-1 mb-sm-2 mb-md-3 mb-lg-4 mb-xl-5">
          <div className="row pt-xl-2">
            <div className="col-md-4 col-xl-3 mb-4 mb-md-0" style={{marginTop: '-120px'}}>
              <div className="sticky-md-top text-center text-md-start pe-md-4 pe-lg-5 pe-xl-0" style={{paddingTop: '120px'}}>
                <h2>Popular FAQs</h2>
                <p className="pb-2 pb-md-3">Still have unanswered questions and need to get in touch?</p>
                <Link  className="btn btn-lg btn-primary" to="#!">Contact us</Link>
              </div>
            </div>
            <div className="col-md-8 offset-xl-1">
              {/* Accordion of questions */}
              <div className="accordion" id="faq">
                {/* Question */}
                <div className="accordion-item">
                  <h3 className="accordion-header" id="faqHeading-1">
                    <button type="button" className="accordion-button hover-effect-underline collapsed" data-bs-toggle="collapse" data-bs-target="#faqCollapse-1" aria-expanded="false" aria-controls="faqCollapse-1">
                      <span className="me-2">How long will delivery take?</span>
                    </button>
                  </h3>
                  <div className="accordion-collapse collapse" id="faqCollapse-1" aria-labelledby="faqHeading-1" data-bs-parent="#faq">
                    <div className="accordion-body">Delivery times vary based on your location and the chosen shipping method. Generally, our standard delivery takes up to 5 days, while our Express Delivery ensures your order reaches you within 1 day. Please note that these times may be subject to occasional variations due to unforeseen circumstances, but we do our best to meet these estimates.</div>
                  </div>
                </div>
                {/* Question */}
                <div className="accordion-item">
                  <h3 className="accordion-header" id="faqHeading-2">
                    <button type="button" className="accordion-button hover-effect-underline collapsed" data-bs-toggle="collapse" data-bs-target="#faqCollapse-2" aria-expanded="false" aria-controls="faqCollapse-2">
                      <span className="me-2">What payment methods do you accept?</span>
                    </button>
                  </h3>
                  <div className="accordion-collapse collapse" id="faqCollapse-2" aria-labelledby="faqHeading-2" data-bs-parent="#faq">
                    <div className="accordion-body">We offer a range of secure payment options to provide you with flexibility and convenience. Accepted methods include major credit/debit cards, PayPal, and other secure online payment gateways. You can find the complete list of accepted payment methods during the checkout process.</div>
                  </div>
                </div>
                {/* Question */}
                <div className="accordion-item">
                  <h3 className="accordion-header" id="faqHeading-3">
                    <button type="button" className="accordion-button hover-effect-underline collapsed" data-bs-toggle="collapse" data-bs-target="#faqCollapse-3" aria-expanded="false" aria-controls="faqCollapse-3">
                      <span className="me-2">Do you ship internationally?</span>
                    </button>
                  </h3>
                  <div className="accordion-collapse collapse" id="faqCollapse-3" aria-labelledby="faqHeading-3" data-bs-parent="#faq">
                    <div className="accordion-body">Yes, we proudly offer international shipping to cater to our global customer base. Shipping costs and delivery times will be automatically calculated at the checkout based on your selected destination. Please note that any customs duties or taxes applicable in your country are the responsibility of the customer.</div>
                  </div>
                </div>
                {/* Question */}
                <div className="accordion-item">
                  <h3 className="accordion-header" id="faqHeading-4">
                    <button type="button" className="accordion-button hover-effect-underline collapsed" data-bs-toggle="collapse" data-bs-target="#faqCollapse-4" aria-expanded="false" aria-controls="faqCollapse-4">
                      <span className="me-2">Do I need an account to place an order?</span>
                    </button>
                  </h3>
                  <div className="accordion-collapse collapse" id="faqCollapse-4" aria-labelledby="faqHeading-4" data-bs-parent="#faq">
                    <div className="accordion-body">While you can place an order as a guest, creating an account comes with added benefits. By having an account, you can easily track your orders, manage your preferences, and enjoy a quicker checkout process for future purchases. It also allows us to provide you with personalized recommendations and exclusive offers.</div>
                  </div>
                </div>
                {/* Question */}
                <div className="accordion-item">
                  <h3 className="accordion-header" id="faqHeading-5">
                    <button type="button" className="accordion-button hover-effect-underline collapsed" data-bs-toggle="collapse" data-bs-target="#faqCollapse-5" aria-expanded="false" aria-controls="faqCollapse-5">
                      <span className="me-2">How can I track my order?</span>
                    </button>
                  </h3>
                  <div className="accordion-collapse collapse" id="faqCollapse-5" aria-labelledby="faqHeading-5" data-bs-parent="#faq">
                    <div className="accordion-body">Once your order is dispatched, you will receive a confirmation email containing a unique tracking number. You can use this tracking number on our website to monitor the real-time status of your shipment. Additionally, logging into your account will grant you access to a comprehensive order history, including tracking information.</div>
                  </div>
                </div>
                {/* Question */}
                <div className="accordion-item">
                  <h3 className="accordion-header" id="faqHeading-6">
                    <button type="button" className="accordion-button hover-effect-underline collapsed" data-bs-toggle="collapse" data-bs-target="#faqCollapse-6" aria-expanded="false" aria-controls="faqCollapse-6">
                      <span className="me-2">What are the product refund conditions?</span>
                    </button>
                  </h3>
                  <div className="accordion-collapse collapse" id="faqCollapse-6" aria-labelledby="faqHeading-6" data-bs-parent="#faq">
                    <div className="accordion-body">Our refund policy is designed to ensure customer satisfaction. Details can be found in our [refund policy page](insert link). In essence, we accept returns within [insert number] days of receiving the product, provided it is in its original condition with all tags and packaging intact. Refunds are processed promptly once the returned item is inspected and approved.</div>
                  </div>
                </div>
                {/* Question */}
                <div className="accordion-item">
                  <h3 className="accordion-header" id="faqHeading-7">
                    <button type="button" className="accordion-button hover-effect-underline collapsed" data-bs-toggle="collapse" data-bs-target="#faqCollapse-7" aria-expanded="false" aria-controls="faqCollapse-7">
                      <span className="me-2">Where can I find your size guide?</span>
                    </button>
                  </h3>
                  <div className="accordion-collapse collapse" id="faqCollapse-7" aria-labelledby="faqHeading-7" data-bs-parent="#faq">
                    <div className="accordion-body">Our comprehensive size guide is conveniently located on each product page to assist you in choosing the right fit. Additionally, you can find the size guide in the main menu under "Size Guide." We recommend referring to these resources to ensure your selected items match your preferred sizing.</div>
                  </div>
                </div>
                {/* Question */}
                <div className="accordion-item">
                  <h3 className="accordion-header" id="faqHeading-8">
                    <button type="button" className="accordion-button hover-effect-underline collapsed" data-bs-toggle="collapse" data-bs-target="#faqCollapse-8" aria-expanded="false" aria-controls="faqCollapse-8">
                      <span className="me-2">Do I need to create an account to shop with you?</span>
                    </button>
                  </h3>
                  <div className="accordion-collapse collapse" id="faqCollapse-8" aria-labelledby="faqHeading-8" data-bs-parent="#faq">
                    <div className="accordion-body">While guest checkout is available for your convenience, creating an account enhances your overall shopping experience. With an account, you can easily track your order status, save multiple shipping addresses, and enjoy a streamlined checkout process. Moreover, account holders receive early access to promotions and exclusive offers. Signing up is quick and hassle-free!</div>
                  </div>
                </div>
                {/* Question */}
                <div className="accordion-item">
                  <h3 className="accordion-header" id="faqHeading-9">
                    <button type="button" className="accordion-button hover-effect-underline collapsed" data-bs-toggle="collapse" data-bs-target="#faqCollapse-9" aria-expanded="false" aria-controls="faqCollapse-9">
                      <span className="me-2">Is there a minimum order value for free shipping?</span>
                    </button>
                  </h3>
                  <div className="accordion-collapse collapse" id="faqCollapse-9" aria-labelledby="faqHeading-9" data-bs-parent="#faq">
                    <div className="accordion-body">Yes, we offer free shipping on orders exceeding $250. Orders below this threshold are subject to standard shipping fees, which will be displayed during the checkout process.</div>
                  </div>
                </div>
                {/* Question */}
                <div className="accordion-item">
                  <h3 className="accordion-header" id="faqHeading-10">
                    <button type="button" className="accordion-button hover-effect-underline collapsed" data-bs-toggle="collapse" data-bs-target="#faqCollapse-10" aria-expanded="false" aria-controls="faqCollapse-10">
                      <span className="me-2">Can I modify or cancel my order after placing it?</span>
                    </button>
                  </h3>
                  <div className="accordion-collapse collapse" id="faqCollapse-10" aria-labelledby="faqHeading-10" data-bs-parent="#faq">
                    <div className="accordion-body">Once an order is confirmed, our system processes it promptly to ensure timely dispatch. Therefore, modifications or cancellations are challenging after this point. However, please contact our customer support as soon as possible, and we will do our best to assist you based on the order status.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    
    </>
  )
}

export default Help
