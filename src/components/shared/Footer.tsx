import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer position-relative bg-dark mb-2">
      <span className="position-absolute top-0 start-0 w-100 h-100 bg-body d-none d-block-dark" />
      <div className="container position-relative z-1 pt-sm-2 pt-md-3 pt-lg-4" data-bs-theme="dark">
        {/* Columns with links */}
        <div className="accordion py-5" id="footerLinks">
          <div className="row">
            <div className="col-md-4 d-sm-flex flex-md-column align-items-center align-items-md-start pb-3 mb-sm-4">
              <h4 className="mb-sm-0 mb-md-4 me-4">
                <Link className="text-dark-emphasis text-decoration-none" to="/">Salesnet</Link>
              </h4>
              <p className="text-body fs-sm text-sm-end text-md-start mb-sm-0 mb-md-3 ms-0 ms-sm-auto ms-md-0 me-4">
                Got questions? Contact us 24/7
              </p>
              <div className="dropdown" style={{ maxWidth: '250px' }}>
                <button 
                  type="button" 
                  className="btn btn-secondary dropdown-toggle justify-content-between w-100" 
                  data-bs-toggle="dropdown" 
                  aria-haspopup="true" 
                  aria-expanded="false"
                >
                  Help and consultation
                </button>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/help">Help center & FAQ</Link></li>
                  <li><Link className="dropdown-item" to="/support">Support chat</Link></li>
                  <li><Link className="dropdown-item" to="/ticket">Open support ticket</Link></li>
                  <li><Link className="dropdown-item" to="/contact">Call center</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-md-8">
              <div className="row row-cols-1 row-cols-sm-3 gx-3 gx-md-4">
                {/* Company Links */}
                <div className="accordion-item col border-0">
                  <h6 className="accordion-header" id="companyHeading">
                    <span className="text-dark-emphasis d-none d-sm-block">Company</span>
                    <button 
                      type="button" 
                      className="accordion-button collapsed py-3 d-sm-none" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#companyLinks" 
                      aria-expanded="false" 
                      aria-controls="companyLinks"
                    >
                      Company
                    </button>
                  </h6>
                  <div 
                    className="accordion-collapse collapse d-sm-block" 
                    id="companyLinks" 
                    aria-labelledby="companyHeading" 
                    data-bs-parent="#footerLinks"
                  >
                    <ul className="nav flex-column gap-2 pt-sm-3 pb-3 mt-n1 mb-1">
                      {['About company', 'Our team', 'Careers', 'Contact us', 'News'].map((item) => (
                        <li key={item} className="d-flex w-100 pt-1">
                          <Link 
                            className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" 
                            to={`/${item.toLowerCase().replace(' ', '-')}`}
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <hr className="d-sm-none my-0" />
                </div>

                {/* Account Links */}
                <div className="accordion-item col border-0">
                  <h6 className="accordion-header" id="accountHeading">
                    <span className="text-dark-emphasis d-none d-sm-block">Account</span>
                    <button 
                      type="button" 
                      className="accordion-button collapsed py-3 d-sm-none" 
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
                      {[
                        'Your account', 
                        'Shipping rates & policies', 
                        'Refunds & replacements', 
                        'Delivery info', 
                        'Order tracking', 
                        'Taxes & fees'
                      ].map((item) => (
                        <li key={item} className="d-flex w-100 pt-1">
                          <Link 
                            className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" 
                            to={`/${item.toLowerCase().replace(/ & | /g, '-')}`}
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <hr className="d-sm-none my-0" />
                </div>

                {/* Customer Service Links */}
                <div className="accordion-item col border-0">
                  <h6 className="accordion-header" id="customerHeading">
                    <span className="text-dark-emphasis d-none d-sm-block">Customer service</span>
                    <button 
                      type="button" 
                      className="accordion-button collapsed py-3 d-sm-none" 
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
                      {[
                        'Payment methods', 
                        'Money back guarantee', 
                        'Product returns', 
                        'Support center', 
                        'Shipping', 
                        'Terms & conditions'
                      ].map((item) => (
                        <li key={item} className="d-flex w-100 pt-1">
                          <Link 
                            className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" 
                            to={`/${item.toLowerCase().replace(/ & | /g, '-')}`}
                          >
                            {item}
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
        </div>

        {/* Category links */}
        <div className="d-flex flex-column gap-3 pb-3 pb-md-4 pb-lg-5 mt-n2 mt-sm-n4 mt-lg-0 mb-4">
          {[
            ['Computers', 'Smartphones', 'TV, Video', 'Speakers', 'Cameras', 'Printers', 'Video Games', 'Headphones', 'Wearable', 'HDD/SSD', 'Smart Home', 'Apple Devices', 'Tablets'],
            ['Monitors', 'Scanners', 'Servers', 'Heating and Cooling', 'E-readers', 'Data Storage', 'Networking', 'Power Strips', 'Plugs and Outlets', 'Detectors and Sensors', 'Accessories']
          ].map((linkGroup, groupIndex) => (
            <ul key={groupIndex} className="nav align-items-center text-body-tertiary gap-2">
              {linkGroup.map((link, index) => (
                <React.Fragment key={link}>
                  <li className="animate-underline">
                    <Link className="nav-link fw-normal p-0 animate-target" to={`/category/${link.toLowerCase().replace(/[,/ ]/g, '-')}`}>
                      {link}
                    </Link>
                  </li>
                  {index < linkGroup.length - 1 && <li className="px-1">/</li>}
                </React.Fragment>
              ))}
            </ul>
          ))}
        </div>

        {/* Copyright + Payment methods */}
        <div className="d-md-flex align-items-center border-top py-4">
          <div className="d-flex gap-2 gap-sm-3 justify-content-center ms-md-auto mb-4 mb-md-0 order-md-2">
            {['visa', 'mastercard', 'paypal', 'google-pay', 'apple-pay'].map((method) => (
              <div key={method}>
                <img 
                  src={`assets/img/payment-methods/${method}-dark-mode.svg`} 
                  alt={method.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ')} 
                />
              </div>
            ))}
          </div>
          <p className="text-body fs-xs text-center text-md-start mb-0 me-4 order-md-1">
            ©{' '}
            <Link 
              className="animate-target text-dark-emphasis fw-medium text-decoration-none" 
              to="/about" 
              target="_blank" 
              rel="noreferrer"
            >
              Techa - Russian Developers.
            </Link>
          </p>
        </div>
      </div>


<a href="#top" className="btn-scroll-top btn btn-sm bg-body border-0 rounded-pill shadow animate-slide-end">
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
</a>

      {/* Back to top button */}
      <div className="floating-buttons position-fixed top-50 end-0 z-sticky me-3 me-xl-4 pb-4">
        <Link className="btn-scroll-top btn btn-sm bg-body border-0 rounded-pill shadow animate-slide-end" to="#top">
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
        </Link>
      </div>

    </footer>
  );
};

export default Footer;