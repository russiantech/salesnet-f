import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="footer position-relative bg-dark">
          <span className="position-absolute top-0 start-0 w-100 h-100 bg-body d-none d-block-dark" />
          <div className="container position-relative z-1 pt-sm-2 pt-md-3 pt-lg-4" data-bs-theme="dark">
            {/* Columns with links that are turned into accordion on screens < 500px wide (sm breakpoint) */}
            <div className="accordion py-5" id="footerLinks">
              <div className="row">
                <div className="col-md-4 d-sm-flex flex-md-column align-items-center align-items-md-start pb-3 mb-sm-4">
                  <h4 className="mb-sm-0 mb-md-4 me-4">
                    <a className="text-dark-emphasis text-decoration-none" href="index.html">Salesnet</a>
                  </h4>
                  <p className="text-body fs-sm text-sm-end text-md-start mb-sm-0 mb-md-3 ms-0 ms-sm-auto ms-md-0 me-4">Got questions? Contact us 24/7</p>
                  <div className="dropdown" style={{maxWidth: '250px'}}>
                    <button type="button" className="btn btn-secondary dropdown-toggle justify-content-between w-100" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Help and consultation
                    </button>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#!">Help center &amp; FAQ</a></li>
                      <li><a className="dropdown-item" href="#!">Support chat</a></li>
                      <li><a className="dropdown-item" href="#!">Open support ticket</a></li>
                      <li><a className="dropdown-item" href="#!">Call center</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="row row-cols-1 row-cols-sm-3 gx-3 gx-md-4">
                    <div className="accordion-item col border-0">
                      <h6 className="accordion-header" id="companyHeading">
                        <span className="text-dark-emphasis d-none d-sm-block">Company</span>
                        <button type="button" className="accordion-button collapsed py-3 d-sm-none" data-bs-toggle="collapse" data-bs-target="#companyLinks" aria-expanded="false" aria-controls="companyLinks">Company</button>
                      </h6>
                      <div className="accordion-collapse collapse d-sm-block" id="companyLinks" aria-labelledby="companyHeading" data-bs-parent="#footerLinks">
                        <ul className="nav flex-column gap-2 pt-sm-3 pb-3 mt-n1 mb-1">
                          <li className="d-flex w-100 pt-1">
                            <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="#!">About company</a>
                          </li>
                          <li className="d-flex w-100 pt-1">
                            <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="#!">Our team</a>
                          </li>
                          <li className="d-flex w-100 pt-1">
                            <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="#!">Careers</a>
                          </li>
                          <li className="d-flex w-100 pt-1">
                            <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="#!">Contact us</a>
                          </li>
                          <li className="d-flex w-100 pt-1">
                            <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="#!">News</a>
                          </li>
                        </ul>
                      </div>
                      <hr className="d-sm-none my-0" />
                    </div>
                    <div className="accordion-item col border-0">
                      <h6 className="accordion-header" id="accountHeading">
                        <span className="text-dark-emphasis d-none d-sm-block">Account</span>
                        <button type="button" className="accordion-button collapsed py-3 d-sm-none" data-bs-toggle="collapse" data-bs-target="#accountLinks" aria-expanded="false" aria-controls="accountLinks">Account</button>
                      </h6>
                      <div className="accordion-collapse collapse d-sm-block" id="accountLinks" aria-labelledby="accountHeading" data-bs-parent="#footerLinks">
                        <ul className="nav flex-column gap-2 pt-sm-3 pb-3 mt-n1 mb-1">
                          <li className="d-flex w-100 pt-1">
                            <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="#!">Your account</a>
                          </li>
                          <li className="d-flex w-100 pt-1">
                            <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="#!">Shipping rates &amp; policies</a>
                          </li>
                          <li className="d-flex w-100 pt-1">
                            <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="#!">Refunds &amp; replacements</a>
                          </li>
                          <li className="d-flex w-100 pt-1">
                            <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="#!">Delivery info</a>
                          </li>
                          <li className="d-flex w-100 pt-1">
                            <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="#!">Order tracking</a>
                          </li>
                          <li className="d-flex w-100 pt-1">
                            <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="#!">Taxes &amp; fees</a>
                          </li>
                        </ul>
                      </div>
                      <hr className="d-sm-none my-0" />
                    </div>
                    <div className="accordion-item col border-0">
                      <h6 className="accordion-header" id="customerHeading">
                        <span className="text-dark-emphasis d-none d-sm-block">Customer service</span>
                        <button type="button" className="accordion-button collapsed py-3 d-sm-none" data-bs-toggle="collapse" data-bs-target="#customerLinks" aria-expanded="false" aria-controls="customerLinks">Customer service</button>
                      </h6>
                      <div className="accordion-collapse collapse d-sm-block" id="customerLinks" aria-labelledby="customerHeading" data-bs-parent="#footerLinks">
                        <ul className="nav flex-column gap-2 pt-sm-3 pb-3 mt-n1 mb-1">
                          <li className="d-flex w-100 pt-1">
                            <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="#!">Payment methods</a>
                          </li>
                          <li className="d-flex w-100 pt-1">
                            <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="#!">Money back guarantee</a>
                          </li>
                          <li className="d-flex w-100 pt-1">
                            <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="#!">Product returns</a>
                          </li>
                          <li className="d-flex w-100 pt-1">
                            <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="#!">Support center</a>
                          </li>
                          <li className="d-flex w-100 pt-1">
                            <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="#!">Shipping</a>
                          </li>
                          <li className="d-flex w-100 pt-1">
                            <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="#!">Terms &amp; conditions</a>
                          </li>
                        </ul>
                      </div>
                      <hr className="d-sm-none my-0" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Category / tag links */}
            <div className="d-flex flex-column gap-3 pb-3 pb-md-4 pb-lg-5 mt-n2 mt-sm-n4 mt-lg-0 mb-4">
              <ul className="nav align-items-center text-body-tertiary gap-2">
                <li className="animate-underline">
                  <a className="nav-link fw-normal p-0 animate-target" href="#!">Computers</a>
                </li>
                <li className="px-1">/</li>
                <li className="animate-underline">
                  <a className="nav-link fw-normal p-0 animate-target" href="#!">Smartphones</a>
                </li>
                <li className="px-1">/</li>
                <li className="animate-underline">
                  <a className="nav-link fw-normal p-0 animate-target" href="#!">TV, Video</a>
                </li>
                <li className="px-1">/</li>
                <li className="animate-underline">
                  <a className="nav-link fw-normal p-0 animate-target" href="#!">Speakers</a>
                </li>
                <li className="px-1">/</li>
                <li className="animate-underline">
                  <a className="nav-link fw-normal p-0 animate-target" href="#!">Cameras</a>
                </li>
                <li className="px-1">/</li>
                <li className="animate-underline">
                  <a className="nav-link fw-normal p-0 animate-target" href="#!">Printers</a>
                </li>
                <li className="px-1">/</li>
                <li className="animate-underline">
                  <a className="nav-link fw-normal p-0 animate-target" href="#!">Video Games</a>
                </li>
                <li className="px-1">/</li>
                <li className="animate-underline">
                  <a className="nav-link fw-normal p-0 animate-target" href="#!">Headphones</a>
                </li>
                <li className="px-1">/</li>
                <li className="animate-underline">
                  <a className="nav-link fw-normal p-0 animate-target" href="#!">Wearable</a>
                </li>
                <li className="px-1">/</li>
                <li className="animate-underline">
                  <a className="nav-link fw-normal p-0 animate-target" href="#!">HDD/SSD</a>
                </li>
                <li className="px-1">/</li>
                <li className="animate-underline">
                  <a className="nav-link fw-normal p-0 animate-target" href="#!">Smart Home</a>
                </li>
                <li className="px-1">/</li>
                <li className="animate-underline">
                  <a className="nav-link fw-normal p-0 animate-target" href="#!">Apple Devices</a>
                </li>
                <li className="px-1">/</li>
                <li className="animate-underline">
                  <a className="nav-link fw-normal p-0 animate-target" href="#!">Tablets</a>
                </li>
              </ul>
              <ul className="nav align-items-center text-body-tertiary gap-2">
                <li className="animate-underline">
                  <a className="nav-link fw-normal p-0 animate-target" href="#!">Monitors</a>
                </li>
                <li className="px-1">/</li>
                <li className="animate-underline">
                  <a className="nav-link fw-normal p-0 animate-target" href="#!">Scanners</a>
                </li>
                <li className="px-1">/</li>
                <li className="animate-underline">
                  <a className="nav-link fw-normal p-0 animate-target" href="#!">Servers</a>
                </li>
                <li className="px-1">/</li>
                <li className="animate-underline">
                  <a className="nav-link fw-normal p-0 animate-target" href="#!">Heating and Cooling</a>
                </li>
                <li className="px-1">/</li>
                <li className="animate-underline">
                  <a className="nav-link fw-normal p-0 animate-target" href="#!">E-readers</a>
                </li>
                <li className="px-1">/</li>
                <li className="animate-underline">
                  <a className="nav-link fw-normal p-0 animate-target" href="#!">Data Storage</a>
                </li>
                <li className="px-1">/</li>
                <li className="animate-underline">
                  <a className="nav-link fw-normal p-0 animate-target" href="#!">Networking</a>
                </li>
                <li className="px-1">/</li>
                <li className="animate-underline">
                  <a className="nav-link fw-normal p-0 animate-target" href="#!">Power Strips</a>
                </li>
                <li className="px-1">/</li>
                <li className="animate-underline">
                  <a className="nav-link fw-normal p-0 animate-target" href="#!">Plugs and Outlets</a>
                </li>
                <li className="px-1">/</li>
                <li className="animate-underline">
                  <a className="nav-link fw-normal p-0 animate-target" href="#!">Detectors and Sensors</a>
                </li>
                <li className="px-1">/</li>
                <li className="animate-underline">
                  <a className="nav-link fw-normal p-0 animate-target" href="#!">Accessories</a>
                </li>
              </ul>
            </div>
            {/* Copyright + Payment methods */}
            <div className="d-md-flex align-items-center border-top py-4">
              <div className="d-flex gap-2 gap-sm-3 justify-content-center ms-md-auto mb-4 mb-md-0 order-md-2">
                <div>
                  <img src="assets/img/payment-methods/visa-dark-mode.svg" alt="Visa" />
                </div>
                <div>
                  <img src="assets/img/payment-methods/mastercard.svg" alt="Mastercard" />
                </div>
                <div>
                  <img src="assets/img/payment-methods/paypal-dark-mode.svg" alt="PayPal" />
                </div>
                <div>
                  <img src="assets/img/payment-methods/google-pay-dark-mode.svg" alt="Google Pay" />
                </div>
                <div>
                  <img src="assets/img/payment-methods/apple-pay-dark-mode.svg" alt="Apple Pay" />
                </div>
              </div>
              <p className="text-body fs-xs text-center text-md-start mb-0 me-4 order-md-1">© All rights reserved. Made by <span className="animate-underline">
                  <a className="animate-target text-dark-emphasis fw-medium text-decoration-none" href="!#" target="_blank" rel="noreferrer">Techa - Russian Developers.</a></span></p>
            </div>
          </div>
        </footer>
        <br />
        <br />
        {/* Back to top button */}
        <div className="floating-buttons position-fixed top-50 end-0 z-sticky me-3 me-xl-4 pb-4">
          <a className="btn-scroll-top btn btn-sm bg-body border-0 rounded-pill shadow animate-slide-end" href="#top">
            Top
            <i className="ci-arrow-right fs-base ms-1 me-n1 animate-target" />
            <span className="position-absolute top-0 start-0 w-100 h-100 border rounded-pill z-0" />
            
            <svg className="position-absolute top-0 start-0 w-100 h-100 z-1" viewBox="0 0 62 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x=".75" y=".75" width="60.5" height="30.5" rx="15.25" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" style={{"stroke-dasharray": 155.201, "stroke-dashoffset": 43.9562}}></rect>
        </svg>
          </a>
        </div>
    </div>
  )
}

export default Footer

