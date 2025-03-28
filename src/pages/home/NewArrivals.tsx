const NewArrivals = () => {
    return (
      <section className="container pt-5 mt-1 mt-sm-2 mt-md-3 mt-lg-4">
      {/* New arrivals (List) */}
      <h2 className="h3 pb-2 pb-sm-3">New arrivals</h2>
      <div className="row">
        {/* Banner */}
        <div className="col-lg-4" data-bs-theme="dark">
          <div className="d-flex flex-column align-items-center justify-content-end h-100 text-center overflow-hidden rounded-5 px-4 px-lg-3 pt-4 pb-5" style={{background: '#1d2c41 url(/assets/img/home/electronics/banner/background.jpg) center/cover no-repeat'}}>
            <div className="ratio animate-up-down position-relative z-2 me-lg-4" style={{maxWidth: '320px', marginBottom: '-19%', "cz-aspect-ratio": 'calc(690 / 640 * 100%)'}}>
              <img src="/assets/img/home/electronics/banner/laptop.png" alt="Laptop" />
            </div>
            <h3 className="display-2 mb-2">MacBook</h3>
            <p className="text-body fw-medium mb-4">Be Pro Anywhere</p>
            <a className="btn btn-sm btn-primary" href="/products/slug">
              From $1,199
              <i className="ci-arrow-up-right fs-base ms-1 me-n1" />
            </a>
          </div>
        </div>
        {/* Product list */}
        <div className="col-sm-6 col-lg-4 d-flex flex-column gap-3 pt-4 py-lg-4">
          {/* Item */}
          <div className="position-relative animate-underline d-flex align-items-center ps-xl-3">
            <div className="ratio ratio-1x1 flex-shrink-0" style={{width: '110px'}}>
              <img src="/assets/img/shop/electronics/thumbs/01.png" alt="Smart Watch" />
            </div>
            <div className="w-100 min-w-0 ps-2 ps-sm-3">
              <div className="d-flex align-items-center gap-2 mb-2">
                <div className="d-flex gap-1 fs-xs">
                  <i className="ci-star-filled text-warning" />
                  <i className="ci-star-filled text-warning" />
                  <i className="ci-star-filled text-warning" />
                  <i className="ci-star-filled text-warning" />
                  <i className="ci-star-filled text-warning" />
                </div>
                <span className="text-body-tertiary fs-xs">45</span>
              </div>
              <h4 className="mb-2">
                <a className="stretched-link d-block fs-sm fw-medium text-truncate" href="/products/slug">
                  <span className="animate-target">Smart Watch Series 7, White</span>
                </a>
              </h4>
              <div className="h5 mb-0">$449.00</div>
            </div>
          </div>
          {/* Item */}
          <div className="position-relative animate-underline d-flex align-items-center ps-xl-3">
            <div className="ratio ratio-1x1 flex-shrink-0" style={{width: '110px'}}>
              <img src="/assets/img/shop/electronics/thumbs/03.png" width={110} alt="VR Glasses" />
            </div>
            <div className="w-100 min-w-0 ps-2 ps-sm-3">
              <div className="d-flex align-items-center gap-2 mb-2">
                <div className="d-flex gap-1 fs-xs">
                  <i className="ci-star-filled text-warning" />
                  <i className="ci-star-filled text-warning" />
                  <i className="ci-star-filled text-warning" />
                  <i className="ci-star-half text-warning" />
                  <i className="ci-star text-body-tertiary opacity-75" />
                </div>
                <span className="text-body-tertiary fs-xs">123</span>
              </div>
              <h4 className="mb-2">
                <a className="stretched-link d-block fs-sm fw-medium text-truncate" href="/products/slug">
                  <span className="animate-target">VRB01 Virtual Reality Glasses</span>
                </a>
              </h4>
              <div className="h5 mb-0">$340.99</div>
            </div>
          </div>
          {/* Item */}
          <div className="position-relative animate-underline d-flex align-items-center ps-xl-3">
            <div className="ratio ratio-1x1 flex-shrink-0" style={{width: '110px'}}>
              <img src="/assets/img/shop/electronics/thumbs/05.png" width={110} alt="Bluetooth Headphones" />
            </div>
            <div className="w-100 min-w-0 ps-2 ps-sm-3">
              <div className="d-flex align-items-center gap-2 mb-2">
                <div className="d-flex gap-1 fs-xs">
                  <i className="ci-star-filled text-warning" />
                  <i className="ci-star-filled text-warning" />
                  <i className="ci-star-filled text-warning" />
                  <i className="ci-star-filled text-warning" />
                  <i className="ci-star text-body-tertiary opacity-75" />
                </div>
                <span className="text-body-tertiary fs-xs">34</span>
              </div>
              <h4 className="mb-2">
                <a className="stretched-link d-block fs-sm fw-medium text-truncate" href="/products/slug">
                  <span className="animate-target">Wireless Bluetooth Headphones Sony</span>
                </a>
              </h4>
              <div className="h5 mb-0">$357.00</div>
            </div>
          </div>
          {/* Item */}
          <div className="position-relative animate-underline d-flex align-items-center ps-xl-3">
            <div className="ratio ratio-1x1 flex-shrink-0" style={{width: '110px'}}>
              <img src="/assets/img/shop/electronics/thumbs/07.png" width={110} alt="MacBook" />
            </div>
            <div className="w-100 min-w-0 ps-2 ps-sm-3">
              <div className="d-flex align-items-center gap-2 mb-2">
                <div className="d-flex gap-1 fs-xs">
                  <i className="ci-star-filled text-warning" />
                  <i className="ci-star-filled text-warning" />
                  <i className="ci-star-filled text-warning" />
                  <i className="ci-star-filled text-warning" />
                  <i className="ci-star-filled text-warning" />
                </div>
                <span className="text-body-tertiary fs-xs">34</span>
              </div>
              <h4 className="mb-2">
                <a className="stretched-link d-block fs-sm fw-medium text-truncate" href="/products/slug">
                  <span className="animate-target">Laptop Apple MacBook Pro 13 M2</span>
                </a>
              </h4>
              <div className="h5 mb-0">$1,200.00</div>
            </div>
          </div>
        </div>
        {/* Product list */}
        <div className="col-sm-6 col-lg-4 d-flex flex-column gap-3 pt-3 py-lg-4">
          {/* Item */}
          <div className="position-relative animate-underline d-flex align-items-center ps-xl-3">
            <div className="ratio ratio-1x1 flex-shrink-0" style={{width: '110px'}}>
              <img src="/assets/img/shop/electronics/thumbs/02.png" width={110} alt="iPad Pro" />
            </div>
            <div className="w-100 min-w-0 ps-2 ps-sm-3">
              <div className="d-flex align-items-center gap-2 mb-2">
                <div className="d-flex gap-1 fs-xs">
                  <i className="ci-star-filled text-warning" />
                  <i className="ci-star-filled text-warning" />
                  <i className="ci-star-filled text-warning" />
                  <i className="ci-star-filled text-warning" />
                  <i className="ci-star text-body-tertiary opacity-75" />
                </div>
                <span className="text-body-tertiary fs-xs">126</span>
              </div>
              <h4 className="mb-2">
                <a className="stretched-link d-block fs-sm fw-medium text-truncate" href="/products/slug">
                  <span className="animate-target">Tablet Apple iPad Air M1</span>
                </a>
              </h4>
              <div className="h5 mb-0">$540.00</div>
            </div>
          </div>
          {/* Item */}
          <div className="position-relative animate-underline d-flex align-items-center ps-xl-3">
            <div className="ratio ratio-1x1 flex-shrink-0" style={{width: '110px'}}>
              <img src="/assets/img/shop/electronics/thumbs/04.png" width={110} alt="AirPods 2 Pro" />
            </div>
            <div className="w-100 min-w-0 ps-2 ps-sm-3">
              <div className="d-flex align-items-center gap-2 mb-2">
                <div className="d-flex gap-1 fs-xs">
                  <i className="ci-star-filled text-warning" />
                  <i className="ci-star-filled text-warning" />
                  <i className="ci-star-filled text-warning" />
                  <i className="ci-star-filled text-warning" />
                  <i className="ci-star-filled text-warning" />
                </div>
                <span className="text-body-tertiary fs-xs">340</span>
              </div>
              <h4 className="mb-2">
                <a className="stretched-link d-block fs-sm fw-medium text-truncate" href="/products/slug"><span className="animate-target">Headphones Apple AirPods 2 Pro</span></a>
              </h4>
              <div className="h5 mb-0">$209.99 <del className="text-body-tertiary fs-sm fw-normal">$356.00</del></div>
            </div>
          </div>
          {/* Item */}
          <div className="position-relative animate-underline d-flex align-items-center ps-xl-3">
            <div className="ratio ratio-1x1 flex-shrink-0" style={{width: '110px'}}>
              <img src="/assets/img/shop/electronics/thumbs/06.png" width={110} alt="Power Bank" />
            </div>
            <div className="w-100 min-w-0 ps-2 ps-sm-3">
              <div className="d-flex align-items-center gap-2 mb-2">
                <div className="d-flex gap-1 fs-xs">
                  <i className="ci-star-filled text-warning" />
                  <i className="ci-star-filled text-warning" />
                  <i className="ci-star-filled text-warning" />
                  <i className="ci-star-filled text-warning" />
                  <i className="ci-star text-body-tertiary opacity-75" />
                </div>
                <span className="text-body-tertiary fs-xs">29</span>
              </div>
              <h4 className="mb-2">
                <a className="stretched-link d-block fs-sm fw-medium text-truncate" href="/products/slug">
                  <span className="animate-target">Power Bank PBS 10000 mAh Black</span>
                </a>
              </h4>
              <div className="h5 mb-0">$49.99</div>
            </div>
          </div>
          {/* Item */}
          <div className="position-relative animate-underline d-flex align-items-center ps-xl-3">
            <div className="ratio ratio-1x1 flex-shrink-0" style={{width: '110px'}}>
              <img src="/assets/img/shop/electronics/thumbs/08.png" width={110} alt="iPhone 14" />
            </div>
            <div className="w-100 min-w-0 ps-2 ps-sm-3">
              <div className="d-flex align-items-center gap-2 mb-2">
                <div className="d-flex gap-1 fs-xs">
                  <i className="ci-star-filled text-warning" />
                  <i className="ci-star-filled text-warning" />
                  <i className="ci-star-filled text-warning" />
                  <i className="ci-star-filled text-warning" />
                  <i className="ci-star-filled text-warning" />
                </div>
                <span className="text-body-tertiary fs-xs">12</span>
              </div>
              <h4 className="mb-2">
                <a className="stretched-link d-block fs-sm fw-medium text-truncate" href="/products/slug">
                  <span className="animate-target">Apple iPhone 14 128GB White</span>
                </a>
              </h4>
              <div className="h5 mb-0">$899.00 <del className="text-body-tertiary fs-sm fw-normal">$958.00</del></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
  }
  export default NewArrivals