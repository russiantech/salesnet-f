import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <div className="container">
        {/* 404 error message */}
        <section className="container pt-3">
          <div className="position-relative py-5">
            <div className="row position-relative align-items-center justify-content-center z-2 py-xl-4">
              {/* Illustration */}
              <div className="col-10 col-sm-7 col-md-6 col-lg-5 col-xxl-4 offset-lg-1 offset-xxl-2 order-md-2">
                <svg
                  width={447}
                  viewBox="0 0 447 420"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.05" filter="url(#filter0_f_2921_40054)">
                    <ellipse cx="223.5" cy={371} rx="193.5" ry={19} fill="#181D25" />
                  </g>
                  <path
                    className="d-none-dark"
                    d="M44 374V97H403V374H44Z"
                    fill="url(#paint0_linear_2921_40054)"
                  />
                  <path
                    className="d-none d-block-dark"
                    d="M44 374V97H403V374H44Z"
                    fill="#394557"
                  />
                  <path
                    className="d-none-dark"
                    d="M387.803 74.034H232.968H208.083H46.3354L67.0016 85L44 97L208.083 96.8446H232.968L403.002 97L380.002 85L387.803 74.034Z"
                    fill="url(#paint1_linear_2921_40054)"
                  />
                  <path
                    className="d-none d-block-dark"
                    d="M387.803 74.034H232.968H208.083H46.3354L67.0016 85L44 97L208.083 96.8446H232.968L403.002 97L380.002 85L387.803 74.034Z"
                    fill="url(#paint0_linear_6256_34079)"
                  />
                  <path
                    className="d-none-dark"
                    d="M67 85V97H44L67 85Z"
                    fill="#cad0d9"
                  />
                  <path
                    className="d-none-dark"
                    d="M380 85V97H403L380 85Z"
                    fill="#cad0d9"
                  />
                  <path
                    className="d-none d-block-dark"
                    d="M67 85V97H44L67 85Z"
                    fill="#303947"
                  />
                  <path
                    className="d-none d-block-dark"
                    d="M380 85V97H403L380 85Z"
                    fill="#303947"
                  />
                  <path
                    className="text-body-emphasis"
                    style={{ animationDuration: "1.75s" }}
                    d="M168 119.5C168 122.342 166.176 124.757 163.636 125.641C165.819 174.426 193.987 199.96 221.691 200.876C236.17 201.355 250.811 195.175 262.062 181.776C272.468 169.385 280.03 150.739 281.707 125.371C279.515 124.327 278 122.09 278 119.5C278 115.91 280.91 113 284.5 113C288.09 113 291 115.91 291 119.5C291 122.686 288.707 125.337 285.681 125.893C283.926 151.781 276.159 171.209 265.125 184.349C253.127 198.637 237.33 205.395 221.559 204.874C191.136 203.868 161.872 176.02 159.637 125.729C156.955 124.928 155 122.442 155 119.5C155 115.91 157.91 113 161.5 113C165.09 113 168 115.91 168 119.5Z"
                    fill="currentColor"
                  />
                  <g clipPath="url(#clip0_2921_40054)">
                    <path
                      className="animate-down-up text-body-emphasis"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M85.5309 99.8036L81.1914 83.1734L105.747 6.60145L132.18 -0.295868L149.245 65.1031L161.632 61.8707L166.048 78.7935L153.661 82.0258L158.242 99.5826L138.052 104.851L133.471 87.2943L85.5309 99.8036ZM117.606 28.0932L118.386 27.8896L129.445 70.2697L102.378 77.3324L102.175 76.5521L117.606 28.0932Z"
                      fill="currentColor"
                    />
                    <path
                      className="animate-down-up text-body-emphasis"
                      style={{ animationDuration: "3s", animationDelay: ".35s" }}
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M218.542 111.74C210 110.26 203.002 106.91 197.546 101.692C192.125 96.4801 188.428 89.6344 186.456 81.1554C184.517 72.682 184.507 62.8824 186.425 51.7565C188.305 40.6582 191.546 31.4775 196.15 24.2144C200.787 16.9569 206.516 11.8098 213.335 8.77286C220.192 5.70843 227.878 4.89721 236.393 6.3392C244.907 7.78118 251.881 11.0752 257.314 16.2213C262.78 21.3729 266.508 28.1386 268.497 36.5182C270.491 44.8647 270.532 54.5843 268.619 65.677C266.728 76.8416 263.456 86.1024 258.802 93.4592C254.181 100.822 248.453 106.071 241.617 109.207C234.781 112.344 227.089 113.188 218.542 111.74ZM221.563 93.9002C227.394 94.8877 232.545 92.7441 237.017 87.4693C241.489 82.1945 244.701 73.6905 246.654 61.957C247.962 54.2379 248.255 47.6761 247.534 42.2717C246.847 36.873 245.281 32.6375 242.836 29.5652C240.425 26.4986 237.281 24.6371 233.405 23.9806C227.607 22.9987 222.478 25.112 218.018 30.3205C213.557 35.529 210.331 43.9115 208.34 55.4681C207.016 63.2866 206.689 69.945 207.36 75.4431C208.069 80.9138 209.643 85.2018 212.082 88.3071C214.527 91.3794 217.687 93.2437 221.563 93.9002Z"
                      fill="currentColor"
                    />
                    <path
                      className="animate-down-up text-body-emphasis"
                      style={{ animationDuration: "3s", animationDelay: ".75s" }}
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M290.23 71.3761L288.056 88.425L337.203 94.6927L334.908 112.692L355.606 115.331L357.902 97.3324L370.601 98.9519L372.813 81.603L360.114 79.9835L368.664 12.9377L341.566 9.4819L290.23 71.3761ZM345.356 33.9476L344.556 33.8455L312.169 73.0561L312.067 73.8561L339.815 77.3948L345.356 33.9476Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_2921_40054"
                      x={0}
                      y={322}
                      width={447}
                      height={98}
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation={15}
                        result="effect1_foregroundBlur_2921_40054"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_2921_40054"
                      x1={195}
                      y1={125}
                      x2={275}
                      y2={338}
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset={0} stopColor="#ffffff" />
                      <stop offset={1} stopColor="#eff5fd" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_2921_40054"
                      x1="229.5"
                      y1="101.5"
                      x2="229.5"
                      y2={74}
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset={0} stopColor="#9ca3af" />
                      <stop offset={1} stopColor="#d2d4d9" />
                    </linearGradient>
                    <linearGradient
                      id="paint0_linear_6256_34079"
                      x1="229.5"
                      y1="101.5"
                      x2="229.5"
                      y2={74}
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset={0} stopColor="#21262f" />
                      <stop offset={1} stopColor="#374150" />
                    </linearGradient>
                    <clipPath id="clip0_2921_40054">
                      <rect
                        width={359}
                        height={97}
                        fill="white"
                        transform="translate(44)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              {/* Text */}
              <div className="col-md-5 col-xxl-4 offset-md-1 order-md-1">
                <div className="text-center text-md-start px-4 px-sm-5 px-md-0">
                  <h1 className="mb-sm-4">We lost that page...</h1>
                  <p className="pb-2 pb-sm-3 pb-md-0 mb-4 mb-md-5">
                    The page you are looking for was moved, removed or might never
                    existed. Here some helpful links:
                  </p>
                  <div className="position-relative">
                    <i className="ci-search position-absolute top-50 start-0 translate-middle-y fs-lg ms-3" />
                    <input
                      type="search"
                      className="form-control form-control-lg form-icon-start"
                      placeholder="What are you looking for..."
                      aria-label="Search"
                    />
                  </div>
                </div>
              </div>
            </div>
            <span
              className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none-dark rtl-flip"
              style={{
                background: "linear-gradient(124deg, #e2daec -29.7%, #e4eefd 65.5%)"
              }}
            />
            <span
              className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none d-block-dark rtl-flip"
              style={{
                background: "linear-gradient(124deg, #37343b -29.7%, #222a36 65.5%)"
              }}
            />
          </div>
        </section>
        {/* Links */}
        <section className="container pt-4">
          <div className="row row-cols-1 row-cols-md-3 g-3 g-lg-4">
            <div className="col">
              <div className="nav flex-column position-relative h-100 border rounded-5 p-4 pt-3">
                <a
                  className="nav-link animate-underline stretched-link text-body-emphasis fw-semibold px-0 mb-1"
                  href="/"
                >
                  <span className="animate-target">Go to homepage</span>
                  <i className="ci-chevron-right fs-base ms-1" />
                </a>
                <span className="fs-sm">Continue shopping from the homepage</span>
              </div>
            </div>
            <div className="col">
              <div className="nav flex-column position-relative h-100 border rounded-5 p-4 pt-3">
                <a
                  className="nav-link animate-underline stretched-link text-body-emphasis fw-semibold px-0 mb-1"
                  href="/products"
                >
                  <span className="animate-target">Trending products</span>
                  <i className="ci-chevron-right fs-base ms-1" />
                </a>
                <span className="fs-sm">Check out the trending products</span>
              </div>
            </div>
            <div className="col">
              <div className="nav flex-column position-relative h-100 border rounded-5 p-4 pt-3">
                <a
                  className="nav-link animate-underline stretched-link text-body-emphasis fw-semibold px-0 mb-1"
                  href="/support"
                >
                  <span className="animate-target">Help and support</span>
                  <i className="ci-chevron-right fs-base ms-1" />
                </a>
                <span className="fs-sm">Our friendly team here to help</span>
              </div>
            </div>
          </div>
        </section>
      </div>

    </>
  )
}

const NotImplimentedPage = () => {
  return (

    <div className="modal fade" id="NotImplimentedPage" tabIndex="-1" aria-modal="true" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Comming Soon</h5>
            <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p className='fw-bold'> The page/feature you're looking for is currently under active development, stay tuned,
              we're aiming to improve your experience on salesnet.</p>
          </div>
          <div className="modal-footer flex-column flex-sm-row align-items-stretch">
            <button className="btn btn-outline-warning" type="button" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

  );
};

export { NotFoundPage, NotImplimentedPage };

