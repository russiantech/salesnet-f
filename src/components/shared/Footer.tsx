import React from 'react';
import { Link } from 'react-router-dom';
import { useBootstrapPopovers } from '../../hooks/useBootstrapPopovers';

import { socialLinks } from './FooterMini';
import { tr } from 'framer-motion/client';

const Footer = () => {
  // Define reusable link groups at the top
  const companyPages = [
    { label: 'About us', path: '/customer-service/about-us', info: 'Learn more about what we do.', is_disabled: false },
    // { label: 'Our team', path: '/customer-service/our-team', info: 'Meet the people behind Salesnet.', is_disabled: false },
    // { label: 'Careers', path: '/customer-service/careers', info: 'Work with us.', is_disabled: false },
    { label: 'Contact us', path: '/customer-service/contact-us', info: 'Get in touch.', is_disabled: false },
    { label: 'News', path: '/customer-service/news', info: 'Latest updates and announcements.', is_disabled: true }
  ];

  const accountPages = [
    { label: 'Your account', path: '/users/personal', is_disabled: false },
    { label: 'Shipping rates & policies', path: '/shipping-rates-policies', is_disabled: false },
    { label: 'Refunds & replacements', path: '/refunds-replacements', is_disabled: true },
    { label: 'Delivery info', path: '/delivery-info', is_disabled: true },
    { label: 'Order tracking', path: '/order-tracking', is_disabled: true },
    { label: 'Taxes & fees', path: '/taxes-fees', is_disabled: true }
  ];

  const customerPages = [
    { label: 'Money back guarantee', path: '/money-back-guarantee', is_disabled: true },
    { label: 'Product returns', path: '/product-returns', is_disabled: true },
    { label: 'Support center', path: '/customer-service/support-center', is_disabled: true },
    { label: 'Shipping', path: '/customer-service/shipping', is_disabled: true },
    { label: 'Terms & conditions', path: '/customer-service/terms-conditions', is_disabled: false }
  ];

  // Back to top scroll handler
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useBootstrapPopovers();

  return (
    <footer className="footer pt-5 pb-4 mb-5">
      <div className="container pt-sm-2 pt-md-3 pt-lg-4">
        <div className="row pb-5 mb-lg-3">
          {/* Columns with links that are turned into accordion on small screens */}
          <div className="col-md-8 col-xl-7 pb-2 pb-md-0 mb-4 mb-md-0 mt-n3 mt-sm-0">
            <div className="accordion" id="footerLinks">
              <div className="row row-cols-1 row-cols-sm-3">
                {/* About company section */}
                <div className="accordion-item col border-0">
                  <h6 className="accordion-header" id="companyHeading">
                    <span className="text-dark-emphasis d-none d-sm-block">The company</span>
                    <button 
                      type="button" 
                      className="accordion-button py-3 d-sm-none collapsed" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#companyLinks" 
                      aria-expanded="false" 
                      aria-controls="companyLinks"
                    >
                      The company
                    </button>
                  </h6>
                  <div 
                    className="accordion-collapse collapse d-sm-block" 
                    id="companyLinks" 
                    aria-labelledby="companyHeading" 
                    data-bs-parent="#footerLinks"
                  >
                    <ul className="nav flex-column gap-2 pt-sm-3 pb-3 mt-n1 mb-1">
                      {companyPages.map((page) => (
                        <li key={page.label} className="d-flex w-100 pt-1">
                          <Link disabled={page.is_disabled}
                            className={`nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0 ${page.is_disabled ? 'disabled' : ''}`} 
                            to={page.path}
                            title={page.info}
                          >
                            {page.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <hr className="d-sm-none my-0" />
                </div>

                {/* Account section */}
                <div className="accordion-item col border-0">
                  <h6 className="accordion-header" id="accountHeading">
                    <span className="text-dark-emphasis d-none d-sm-block">Account</span>
                    <button 
                      type="button" 
                      className="accordion-button py-3 d-sm-none collapsed" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#accountLinks" 
                      aria-expanded="false" 
                      aria-controls="accountLinks"
                    >
                      Account
                    </button>
                  </h6>
                  <div 
                    className="accordion-collapse collapse d-sm-block" 
                    id="accountLinks" 
                    aria-labelledby="accountHeading" 
                    data-bs-parent="#footerLinks"
                  >
                    <ul className="nav flex-column gap-2 pt-sm-3 pb-3 mt-n1 mb-1">
                      {accountPages.map((page) => (
                        <li key={page.label} className="d-flex w-100 pt-1">
                          <Link 
                            className={`nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0 ${page.is_disabled ? 'disabled' : ''}`} 
                            to={page.path}
                          >
                            {page.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <hr className="d-sm-none my-0" />
                </div>

                {/* Customer Service section */}
                <div className="accordion-item col border-0">
                  <h6 className="accordion-header" id="customerHeading">
                    <span className="text-dark-emphasis d-none d-sm-block">Customer service</span>
                    <button 
                      type="button" 
                      className="accordion-button py-3 d-sm-none collapsed" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#customerLinks" 
                      aria-expanded="false" 
                      aria-controls="customerLinks"
                    >
                      Customer service
                    </button>
                  </h6>
                  <div 
                    className="accordion-collapse collapse d-sm-block" 
                    id="customerLinks" 
                    aria-labelledby="customerHeading" 
                    data-bs-parent="#footerLinks"
                  >
                    <ul className="nav flex-column gap-2 pt-sm-3 pb-3 mt-n1 mb-1">
                      {customerPages.map((page) => (
                        <li key={page.label} className="d-flex w-100 pt-1">
                          <Link 
                            className={`nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0 ${page.is_disabled ? 'disabled' : ''}`} 
                            to={page.path}
                          >
                            {page.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <hr className="d-sm-none my-0" />
                </div>
              </div>
            </div>
          </div>

          {/* Subscription */}
          <div className="col-md-4 offset-xl-1">
            <h6 className="mb-4">Join us and stay up to date</h6>
            <form className="needs-validation was-validated" noValidate>
              <div className="form-check form-check-inline">
                <input type="checkbox" className="form-check-input" id="check-woman" defaultChecked />
                <label htmlFor="check-woman" className="form-check-label">Woman</label>
              </div>
              <div className="form-check form-check-inline">
                <input type="checkbox" className="form-check-input" id="check-man" />
                <label htmlFor="check-man" className="form-check-label">Man</label>
              </div>
              <div className="form-check form-check-inline">
                <input type="checkbox" className="form-check-input" id="check-sale" />
                <label htmlFor="check-sale" className="form-check-label">Sale</label>
              </div>
              <div className="position-relative mt-3">
                <input 
                  type="email" 
                  className="form-control form-control-lg bg-image-none text-start" 
                  placeholder="Enter email" 
                  aria-label="Your email address" 
                  required 
                />
                <div className="invalid-tooltip bg-transparent p-0">Please enter your email address!</div>
                <button 
                  type="submit" 
                  className="btn btn-icon btn-ghost fs-xl btn-secondary border-0 position-absolute top-0 end-0 mt-1 me-1" 
                  aria-label="Submit your email address"
                >
                  <i className="ci-arrow-up-right" />
                </button>
              </div>
            </form>
          </div>
        </div>
        

      <div className="d-flex justify-content-center justify-content-lg-start gap-2 mt-n2 mt-md-0">

        {socialLinks.map(({ label, url, info }) => (
            <Link
                key={label}
                className="btn btn-icon fs-base btn-outline-secondary border-0"
                to={url}
                data-bs-toggle="popover"
                data-bs-trigger="hover"
                data-bs-custom-class="popover-sm"
                data-bs-content={info}
                aria-label={`Follow us on ${label}`}
            >
                <i className={`ci-${label.toLowerCase()}`} />
            </Link>
            ))}
            
        {/* <Link className="btn btn-icon fs-base btn-outline-secondary border-0" to="#!" 
        data-bs-toggle="tooltip" 
        data-bs-template="<div class=&quot;tooltip fs-xs mb-n2&quot; role=&quot;tooltip&quot;><div class=&quot;tooltip-inner bg-transparent text-body p-0&quot;></div></div>" 
        aria-label="Follow us on YouTube" data-bs-original-title="YouTube">
          <i className="ci-youtube" />
        </Link>
        <Link className="btn btn-icon fs-base btn-outline-secondary border-0" to="#!" data-bs-toggle="tooltip" data-bs-template="<div class=&quot;tooltip fs-xs mb-n2&quot; role=&quot;tooltip&quot;><div class=&quot;tooltip-inner bg-transparent text-body p-0&quot;></div></div>" aria-label="Follow us on Facebook" data-bs-original-title="Facebook">
          <i className="ci-facebook" />
        </Link>
        <Link className="btn btn-icon fs-base btn-outline-secondary border-0" to="#!" data-bs-toggle="tooltip" data-bs-template="<div class=&quot;tooltip fs-xs mb-n2&quot; role=&quot;tooltip&quot;><div class=&quot;tooltip-inner bg-transparent text-body p-0&quot;></div></div>" aria-label="Follow us on Instagram" data-bs-original-title="Instagram">
          <i className="ci-instagram" />
        </Link>
        <Link className="btn btn-icon fs-base btn-outline-secondary border-0" to="#!" data-bs-toggle="tooltip" data-bs-template="<div class=&quot;tooltip fs-xs mb-n2&quot; role=&quot;tooltip&quot;><div class=&quot;tooltip-inner bg-transparent text-body p-0&quot;></div></div>" aria-label="Follow us on Telegram" data-bs-original-title="Telegram">
          <i className="ci-telegram" />
        </Link>
        <Link className="btn btn-icon fs-base btn-outline-secondary border-0" to="#!" data-bs-toggle="tooltip" data-bs-template="<div class=&quot;tooltip fs-xs mb-n2&quot; role=&quot;tooltip&quot;><div class=&quot;tooltip-inner bg-transparent text-body p-0&quot;></div></div>" aria-label="Follow us on Pinterest" data-bs-original-title="Pinterest">
          <i className="ci-pinterest" />
        </Link> */}
        
      </div>
   
        {/* Copyright + Payment methods */}
        <div className="d-lg-flex align-items-center border-top pt-4 mt-3">
          <div className="d-flex gap-2 gap-sm-3 justify-content-center ms-lg-auto mb-3 mb-md-4 mb-lg-0 order-lg-2">
            {['visa-light-mode', 'paypal-light-mode', 'mastercard', 'google-pay-light-mode', 'apple-pay-light-mode'].map((method) => (
              <div key={method}>
                <img src={`/assets/img/payment-methods/${method}.svg`} alt={method} />
              </div>
            ))}
          </div>
          <div className="d-md-flex justify-content-center order-lg-1">
            <ul className="nav justify-content-center gap-4 order-md-3 mb-4 mb-md-0">
              <li className="animate-underline">
                <Link className="nav-link fs-xs fw-normal p-0 animate-target" to="/privacy">Privacy</Link>
              </li>
              <li className="animate-underline">
                <Link className="nav-link fs-xs fw-normal p-0 animate-target" to="/affiliates">Affiliates</Link>
              </li>
              <li className="animate-underline">
                <Link className="nav-link fs-xs fw-normal p-0 animate-target" to="/terms">Terms of use</Link>
              </li>
            </ul>
            <div className="vr text-body-secondary opacity-25 mx-4 d-none d-md-inline-block order-md-2" />
            <p className="text-body fs-xs text-center text-md-start mb-0 me-4 order-md-1">
              ©{' '}
              <Link 
                className="animate-target text-dark-emphasis fw-medium text-decoration-none pe-1 border rounded-pill cursor-pointer" 
                to="https://techa.salesnet.ng" 
                target="_blank" 
                rel="noreferrer"
              >
                Techa - Russian Developers.
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <div className="floating-buttons position-fixed bottom-0 end-0 z-sticky me-3 me-xl-4 pb-4">
        <button 
          onClick={scrollToTop} 
          className="btn-scroll-top btn btn-sm bg-body border-0 rounded-pill shadow animate-slide-end"
        >
          Top
          <i className="ci-arrow-right fs-base ms-1 me-n1 animate-target" />
          <span className="position-absolute top-0 start-0 w-100 h-100 border rounded-pill z-0" />
          <svg 
            className="position-absolute top-0 start-0 w-100 h-100 z-1" 
            viewBox="0 0 62 32" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect 
              x=".75" 
              y=".75" 
              width="60.5" 
              height="30.5" 
              rx="15.25" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeMiterlimit="10" 
              style={{ strokeDasharray: '155.201', strokeDashoffset: '43.9562' }}
            />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
