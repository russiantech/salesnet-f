import React from 'react'
import { Link } from 'react-router-dom'
import { useBootstrapPopovers } from '../../hooks/useBootstrapPopovers';

// Define reusable social link groups at the top
export const socialLinks = [
  { 
    label: 'Facebook', 
    url: 'https://facebook.com/salesnet.net', 
    info: 'Follow us on Facebook for updates.' 
  },

    { 
    label: 'Instagram', 
    url: 'https://instagram.com/yourhandle', 
    info: 'Check out our latest photos and stories.' 
  },

  { 
    label: 'X', 
    url: 'https://twitter.com/salesnet', 
    info: 'Stay connected with our latest tweets.' 
  },

  { 
    label: 'LinkedIn', 
    url: 'https://linkedin.com/company/salesnet', 
    info: 'Connect with us professionally on LinkedIn.' 
  },

  { 
    label: 'YouTube', 
    url: 'https://youtube.com/@salesnet', 
    info: 'Watch our videos and tutorials.' 
  },

  { 
    label: 'Pinterest', 
    url: 'https://pinterest.com/salesnet', 
    info: 'Explore our boards for inspiration.' 
  }
];

const FooterMini = () => {
  // ✅ Call hook inside the component
  useBootstrapPopovers();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Social account links */}
       {/* <section className="container py-4">
        <div className="d-flex justify-content-center justify-content-lg-start gap-2 mt-n2 mt-md-0">
            
            <Link
            className="btn btn-icon fs-base btn-outline-secondary border-0"
            to="#!"
            data-bs-toggle="popover"
            data-bs-trigger="hover"
            data-bs-custom-class="popover-sm"
            data-bs-content="YouTube"
            aria-label="Follow us on YouTube"
            >
            <i className="ci-youtube" />
            </Link>

            <Link
            className="btn btn-icon fs-base btn-outline-secondary border-0"
            to="#!"
            data-bs-toggle="popover"
            data-bs-trigger="hover"
            data-bs-custom-class="popover-sm"
            data-bs-content="Facebook"
            aria-label="Follow us on Facebook"
            >
            <i className="ci-facebook" />
            </Link>

            <Link
            className="btn btn-icon fs-base btn-outline-secondary border-0"
            to="#!"
            data-bs-toggle="popover"
            data-bs-trigger="hover"
            data-bs-custom-class="popover-sm"
            data-bs-content="Instagram"
            aria-label="Follow us on Instagram"
            >
            <i className="ci-instagram" />
            </Link>

            <Link
            className="btn btn-icon fs-base btn-outline-secondary border-0"
            to="#!"
            data-bs-toggle="popover"
            data-bs-trigger="hover"
            data-bs-custom-class="popover-sm"
            data-bs-content="Telegram"
            aria-label="Follow us on Telegram"
            >
            <i className="ci-telegram" />
            </Link>

            <Link
            className="btn btn-icon fs-base btn-outline-secondary border-0"
            to="#!"
            data-bs-toggle="popover"
            data-bs-trigger="hover"
            data-bs-custom-class="popover-sm"
            data-bs-content="Pinterest"
            aria-label="Follow us on Pinterest"
            >
            <i className="ci-pinterest" />
            </Link>
        </div>
        </section>  */}

    <section className="container py-4">
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
    </div>
    </section>



      {/* Copyright + Payment methods */}
      <section className="container pb-4 mb-5">
        <div className="d-lg-flex align-items-center border-top pt-4 mt-3">
          <div className="d-flex gap-2 gap-sm-3 justify-content-center ms-lg-auto mb-3 mb-md-4 mb-lg-0 order-lg-2">
            {['visa-light-mode', 'paypal-light-mode', 'mastercard', 'google-pay-light-mode', 'apple-pay-light-mode'].map((method) => (
              <div key={method}>
                <img
                  src={`/assets/img/payment-methods/${method}.svg`}
                  alt={method.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ')}
                />
              </div>
            ))}
          </div>

          <div className="d-md-flex justify-content-center order-lg-1">
            <ul className="nav justify-content-center gap-4 order-md-3 mb-4 mb-md-0">
              <li className="animate-underline">
                <Link className="nav-link fs-xs fw-normal p-0 animate-target" to="#!">Privacy</Link>
              </li>
              <li className="animate-underline">
                <Link className="nav-link fs-xs fw-normal p-0 animate-target" to="#!">Affiliates</Link>
              </li>
              <li className="animate-underline">
                <Link className="nav-link fs-xs fw-normal p-0 animate-target" to="#!">Terms of use</Link>
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
      </section>

      {/* Back to top button */}
      <div className="position-fixed bottom-0 end-0 z-3 me-3 me-xl-4 mb-4">
        <button
          className="btn-scroll-top btn btn-sm bg-body border-0 rounded-pill shadow animate-slide-end"
          onClick={scrollToTop}
          aria-label="Back to top"
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
              style={{
                strokeDasharray: '155.201',
                strokeDashoffset: '43.9562'
              }}
            />
          </svg>
        </button>
      </div>
    </>
  )
}

export default FooterMini
