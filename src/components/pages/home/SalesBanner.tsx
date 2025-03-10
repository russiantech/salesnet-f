
const SalesBanner = () => {
    return (
      <section className="container pt-5 mt-sm-2 mt-md-3 mt-lg-4">
      {/* Sale Banner (CTA) */}
      <div className="row g-0">
        <div className="col-md-3 mb-n4 mb-md-0">
          <div className="position-relative d-flex flex-column align-items-center justify-content-center h-100 py-5">
            <div className="position-absolute top-0 start-0 w-100 h-100 d-none d-md-block">
              <span className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none-dark" style={{backgroundColor: '#accbee'}} />
              <span className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none d-block-dark" style={{backgroundColor: '#1b273a'}} />
            </div>
            <div className="position-absolute top-0 start-0 w-100 h-100 d-md-none">
              <span className="position-absolute top-0 start-0 w-100 h-100 rounded-top-5 d-none-dark" style={{background: 'linear-gradient(90deg, #accbee 0%, #e7f0fd 100%)'}} />
              <span className="position-absolute top-0 start-0 w-100 h-100 rounded-top-5 d-none d-block-dark" style={{background: 'linear-gradient(90deg, #1b273a 0%, #1f2632 100%)'}} />
            </div>
            <div className="position-relative z-1 display-1 text-dark-emphasis text-nowrap mb-0">
              20
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
            <span className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none-dark rtl-flip" style={{background: 'linear-gradient(90deg, #accbee 0%, #e7f0fd 100%)'}} />
            <span className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none d-block-dark rtl-flip" style={{background: 'linear-gradient(90deg, #1b273a 0%, #1f2632 100%)'}} />
            <div className="row align-items-center position-relative z-2">
              <div className="col-md-6 mb-3 mb-md-0">
                <div className="text-center text-md-start py-md-5 px-4 ps-md-5 pe-md-0 me-md-n5">
                  <h3 className="text-uppercase fw-bold ps-xxl-3 pb-2 mb-1">Seasonal weekly sale 2024</h3>
                  <p className="text-body-emphasis ps-xxl-3 mb-0">Use code <span className="d-inline-block fw-semibold bg-white text-dark rounded-pill py-1 px-2">Sale 2024</span> to get best offer</p>
                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-center justify-content-md-end pb-5 pb-md-0">
                <div className="me-xxl-4">
                  <img src="assets/img/home/electronics/banner/camera.png" className="d-block rtl-flip" width={420} alt="Camera" />
                  <div className="d-none d-lg-block" style={{marginBottom: '-9%'}} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-none d-lg-block" style={{paddingBottom: '3%'}} />
    </section>
    )
  }
  
  export default SalesBanner
  