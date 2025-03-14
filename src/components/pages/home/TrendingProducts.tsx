const TrendingProducts = () => {
    
    {/* Trending products (Grid) */}
  return (
      <section className="container pt-5 mt-2 mt-sm-3 mt-lg-4">
              {/* Heading */}
              <div className="d-flex align-items-center justify-content-between border-bottom pb-3 pb-md-4">
              <h2 className="h3 mb-0">Trending products</h2>
              <div className="nav ms-3">
                  <a className="nav-link animate-underline px-0 py-2" href="shop-catalog-electronics.html">
                  <span className="animate-target">View all</span>
                  <i className="ci-chevron-right fs-base ms-1" />
                  </a>
              </div>
              </div>
              {/* Product grid */}
              <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 pt-4">
              {/* Item */}
              <div className="col">
                  <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
                  <div className="position-relative">
                      <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
                      <div className="d-flex flex-column gap-2">
                          <button type="button" className="btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex" aria-label="Add to Wishlist">
                          <i className="ci-heart fs-base animate-target" />
                          </button>
                          <button type="button" className="btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex" aria-label="Compare">
                          <i className="ci-refresh-cw fs-base animate-target" />
                          </button>
                      </div>
                      </div>
                      <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
                      <button type="button" className="btn btn-icon btn-sm btn-secondary bg-body" data-bs-toggle="dropdown" aria-expanded="false" aria-label="More actions">
                          <i className="ci-more-vertical fs-lg" />
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end fs-xs p-2" style={{minWidth: 'auto'}}>
                          <li>
                          <a className="dropdown-item" href="#!">
                              <i className="ci-heart fs-sm ms-n1 me-2" />
                              Add to Wishlist
                          </a>
                          </li>
                          <li>
                          <a className="dropdown-item" href="#!">
                              <i className="ci-refresh-cw fs-sm ms-n1 me-2" />
                              Compare
                          </a>
                          </li>
                      </ul>
                      </div>
                      <a className="d-block rounded-top overflow-hidden p-3 p-sm-4" href="./single_product.html">
                      <span className="badge bg-danger position-absolute top-0 start-0 mt-2 ms-2 mt-lg-3 ms-lg-3">-21%</span>
                      <div className="ratio" style={{'--cz-aspect-ratio': 'calc(240 / 258 * 100%)'}}>
                          <img src="assets/img/shop/electronics/01.png" alt="VR Glasses" />
                      </div>
                      </a>
                  </div>
                  <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
                      <div className="d-flex align-items-center gap-2 mb-2">
                      <div className="d-flex gap-1 fs-xs">
                          <i className="ci-star-filled text-warning" />
                          <i className="ci-star-filled text-warning" />
                          <i className="ci-star-filled text-warning" />
                          <i className="ci-star-filled text-warning" />
                          <i className="ci-star text-body-tertiary opacity-75" />
                      </div>
                      <span className="text-body-tertiary fs-xs">(123)</span>
                      </div>
                      <h3 className="pb-1 mb-2">
                      <a className="d-block fs-sm fw-medium text-truncate" href="./single_product.html">
                          <span className="animate-target">VRB01 Virtual Reality Glasses</span>
                      </a>
                      </h3>
                      <div className="d-flex align-items-center justify-content-between">
                      <div className="h5 lh-1 mb-0">$340.99 <del className="text-body-tertiary fs-sm fw-normal">$430.00</del></div>
                      <button type="button" className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2" aria-label="Add to Cart">
                          <i className="ci-shopping-cart fs-base animate-target" />
                      </button>
                      </div>
                  </div>
                  <div className="product-card-details position-absolute top-100 start-0 w-100 bg-body rounded-bottom shadow mt-n2 p-3 pt-1">
                      <span className="position-absolute top-0 start-0 w-100 bg-body mt-n2 py-2" />
                      <ul className="list-unstyled d-flex flex-column gap-2 m-0">
                      <li className="d-flex align-items-center">
                          <span className="fs-xs">Display:</span>
                          <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                          <span className="text-dark-emphasis fs-xs fw-medium text-end">OLED 1440x1600</span>
                      </li>
                      <li className="d-flex align-items-center">
                          <span className="fs-xs">Graphics:</span>
                          <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                          <span className="text-dark-emphasis fs-xs fw-medium text-end">Adreno 540</span>
                      </li>
                      <li className="d-flex align-items-center">
                          <span className="fs-xs">Sound:</span>
                          <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                          <span className="text-dark-emphasis fs-xs fw-medium text-end">2x3.5mm jack</span>
                      </li>
                      <li className="d-flex align-items-center">
                          <span className="fs-xs">Input:</span>
                          <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                          <span className="text-dark-emphasis fs-xs fw-medium text-end">4 built-in cameras</span>
                      </li>
                      </ul>
                  </div>
                  </div>
              </div>
              {/* Item */}
              <div className="col">
                  <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
                  <div className="position-relative">
                      <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
                      <div className="d-flex flex-column gap-2">
                          <button type="button" className="btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex" aria-label="Add to Wishlist">
                          <i className="ci-heart fs-base animate-target" />
                          </button>
                          <button type="button" className="btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex" aria-label="Compare">
                          <i className="ci-refresh-cw fs-base animate-target" />
                          </button>
                      </div>
                      </div>
                      <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
                      <button type="button" className="btn btn-icon btn-sm btn-secondary bg-body" data-bs-toggle="dropdown" aria-expanded="false" aria-label="More actions">
                          <i className="ci-more-vertical fs-lg" />
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end fs-xs p-2" style={{minWidth: 'auto'}}>
                          <li>
                          <a className="dropdown-item" href="#!">
                              <i className="ci-heart fs-sm ms-n1 me-2" />
                              Add to Wishlist
                          </a>
                          </li>
                          <li>
                          <a className="dropdown-item" href="#!">
                              <i className="ci-refresh-cw fs-sm ms-n1 me-2" />
                              Compare
                          </a>
                          </li>
                      </ul>
                      </div>
                      <a className="d-block rounded-top overflow-hidden p-3 p-sm-4" href="./single_product.html">
                      <div className="ratio" style={{'--cz-aspect-ratio': 'calc(240 / 258 * 100%)'}}>
                          <img src="assets/img/shop/electronics/02.png" alt="iPhone 14" />
                      </div>
                      </a>
                  </div>
                  <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
                      <div className="d-flex align-items-center gap-2 mb-2">
                      <div className="d-flex gap-1 fs-xs">
                          <i className="ci-star-filled text-warning" />
                          <i className="ci-star-filled text-warning" />
                          <i className="ci-star-filled text-warning" />
                          <i className="ci-star-filled text-warning" />
                          <i className="ci-star-half text-warning" />
                      </div>
                      <span className="text-body-tertiary fs-xs">(142)</span>
                      </div>
                      <h3 className="pb-1 mb-2">
                      <a className="d-block fs-sm fw-medium text-truncate" href="./single_product.html">
                          <span className="animate-target">Apple iPhone 14 128GB White</span>
                      </a>
                      </h3>
                      <div className="d-flex align-items-center justify-content-between">
                      <div className="h5 lh-1 mb-0">$899.00</div>
                      <button type="button" className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2" aria-label="Add to Cart">
                          <i className="ci-shopping-cart fs-base animate-target" />
                      </button>
                      </div>
                  </div>
                  <div className="product-card-details position-absolute top-100 start-0 w-100 bg-body rounded-bottom shadow mt-n2 p-3 pt-1">
                      <span className="position-absolute top-0 start-0 w-100 bg-body mt-n2 py-2" />
                      <ul className="list-unstyled d-flex flex-column gap-2 m-0">
                      <li className="d-flex align-items-center">
                          <span className="fs-xs">Display:</span>
                          <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                          <span className="text-dark-emphasis fs-xs fw-medium text-end">6.1" XDR</span>
                      </li>
                      <li className="d-flex align-items-center">
                          <span className="fs-xs">Capacity:</span>
                          <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                          <span className="text-dark-emphasis fs-xs fw-medium text-end">128 GB</span>
                      </li>
                      <li className="d-flex align-items-center">
                          <span className="fs-xs">Chip:</span>
                          <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                          <span className="text-dark-emphasis fs-xs fw-medium text-end">A15 Bionic</span>
                      </li>
                      <li className="d-flex align-items-center">
                          <span className="fs-xs">Camera:</span>
                          <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                          <span className="text-dark-emphasis fs-xs fw-medium text-end">12 + 12 MP</span>
                      </li>
                      <li className="d-flex align-items-center">
                          <span className="fs-xs">Weight:</span>
                          <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                          <span className="text-dark-emphasis fs-xs fw-medium text-end">172 grams</span>
                      </li>
                      </ul>
                  </div>
                  </div>
              </div>
              {/* Item */}
              <div className="col">
                  <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
                  <div className="position-relative">
                      <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
                      <div className="d-flex flex-column gap-2">
                          <button type="button" className="btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex" aria-label="Add to Wishlist">
                          <i className="ci-heart fs-base animate-target" />
                          </button>
                          <button type="button" className="btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex" aria-label="Compare">
                          <i className="ci-refresh-cw fs-base animate-target" />
                          </button>
                      </div>
                      </div>
                      <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
                      <button type="button" className="btn btn-icon btn-sm btn-secondary bg-body" data-bs-toggle="dropdown" aria-expanded="false" aria-label="More actions">
                          <i className="ci-more-vertical fs-lg" />
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end fs-xs p-2" style={{minWidth: 'auto'}}>
                          <li>
                          <a className="dropdown-item" href="#!">
                              <i className="ci-heart fs-sm ms-n1 me-2" />
                              Add to Wishlist
                          </a>
                          </li>
                          <li>
                          <a className="dropdown-item" href="#!">
                              <i className="ci-refresh-cw fs-sm ms-n1 me-2" />
                              Compare
                          </a>
                          </li>
                      </ul>
                      </div>
                      <a className="d-block rounded-top overflow-hidden p-3 p-sm-4" href="./single_product.html">
                      <div className="ratio" style={{'--cz-aspect-ratio': 'calc(240 / 258 * 100%)'}}>
                          <img src="assets/img/shop/electronics/03.png" alt="Smart Watch" />
                      </div>
                      </a>
                  </div>
                  <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
                      <div className="d-flex align-items-center gap-2 mb-2">
                      <div className="d-flex gap-1 fs-xs">
                          <i className="ci-star-filled text-warning" />
                          <i className="ci-star-filled text-warning" />
                          <i className="ci-star-filled text-warning" />
                          <i className="ci-star-filled text-warning" />
                          <i className="ci-star-filled text-warning" />
                      </div>
                      <span className="text-body-tertiary fs-xs">(67)</span>
                      </div>
                      <h3 className="pb-1 mb-2">
                      <a className="d-block fs-sm fw-medium text-truncate" href="./single_product.html">
                          <span className="animate-target">Smart Watch Series 7, White</span>
                      </a>
                      </h3>
                      <div className="d-flex align-items-center justify-content-between">
                      <div className="h5 lh-1 mb-0">$429.00</div>
                      <button type="button" className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2" aria-label="Add to Cart">
                          <i className="ci-shopping-cart fs-base animate-target" />
                      </button>
                      </div>
                  </div>
                  <div className="product-card-details position-absolute top-100 start-0 w-100 bg-body rounded-bottom shadow mt-n2 p-3 pt-1">
                      <span className="position-absolute top-0 start-0 w-100 bg-body mt-n2 py-2" />
                      <ul className="list-unstyled d-flex flex-column gap-2 m-0">
                      <li className="d-flex align-items-center">
                          <span className="fs-xs">Display:</span>
                          <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                          <span className="text-dark-emphasis fs-xs fw-medium text-end">45mm OLED</span>
                      </li>
                      <li className="d-flex align-items-center">
                          <span className="fs-xs">Chip:</span>
                          <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                          <span className="text-dark-emphasis fs-xs fw-medium text-end">64-bit Dual-core</span>
                      </li>
                      <li className="d-flex align-items-center">
                          <span className="fs-xs">Connectivity:</span>
                          <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                          <span className="text-dark-emphasis fs-xs fw-medium text-end">Wi-Fi, Bluetooth</span>
                      </li>
                      <li className="d-flex align-items-center">
                          <span className="fs-xs">Power:</span>
                          <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                          <span className="text-dark-emphasis fs-xs fw-medium text-end">Lithium-ion battery</span>
                      </li>
                      <li className="d-flex align-items-center">
                          <span className="fs-xs">Weight:</span>
                          <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                          <span className="text-dark-emphasis fs-xs fw-medium text-end">37.0 grams</span>
                      </li>
                      </ul>
                  </div>
                  </div>
              </div>
              {/* Item */}
              <div className="col">
                  <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
                  <div className="position-relative">
                      <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
                      <div className="d-flex flex-column gap-2">
                          <button type="button" className="btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex" aria-label="Add to Wishlist">
                          <i className="ci-heart fs-base animate-target" />
                          </button>
                          <button type="button" className="btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex" aria-label="Compare">
                          <i className="ci-refresh-cw fs-base animate-target" />
                          </button>
                      </div>
                      </div>
                      <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
                      <button type="button" className="btn btn-icon btn-sm btn-secondary bg-body" data-bs-toggle="dropdown" aria-expanded="false" aria-label="More actions">
                          <i className="ci-more-vertical fs-lg" />
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end fs-xs p-2" style={{minWidth: 'auto'}}>
                          <li>
                          <a className="dropdown-item" href="#!">
                              <i className="ci-heart fs-sm ms-n1 me-2" />
                              Add to Wishlist
                          </a>
                          </li>
                          <li>
                          <a className="dropdown-item" href="#!">
                              <i className="ci-refresh-cw fs-sm ms-n1 me-2" />
                              Compare
                          </a>
                          </li>
                      </ul>
                      </div>
                      <a className="d-block rounded-top overflow-hidden p-3 p-sm-4" href="./single_product.html">
                      <span className="badge bg-info position-absolute top-0 start-0 mt-2 ms-2 mt-lg-3 ms-lg-3">New</span>
                      <div className="ratio" style={{'--cz-aspect-ratio': 'calc(240 / 258 * 100%)'}}>
                          <img src="assets/img/shop/electronics/04.png" alt="MacBook" />
                      </div>
                      </a>
                  </div>
                  <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
                      <div className="d-flex align-items-center gap-2 mb-2">
                      <div className="d-flex gap-1 fs-xs">
                          <i className="ci-star-filled text-warning" />
                          <i className="ci-star-filled text-warning" />
                          <i className="ci-star-filled text-warning" />
                          <i className="ci-star-filled text-warning" />
                          <i className="ci-star-half text-warning" />
                      </div>
                      <span className="text-body-tertiary fs-xs">(51)</span>
                      </div>
                      <h3 className="pb-1 mb-2">
                      <a className="d-block fs-sm fw-medium text-truncate" href="./single_product.html">
                          <span className="animate-target">Laptop Apple MacBook Pro 13 M2</span>
                      </a>
                      </h3>
                      <div className="d-flex align-items-center justify-content-between">
                      <div className="h5 lh-1 mb-0">$1,200.00</div>
                      <button type="button" className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2" aria-label="Add to Cart">
                          <i className="ci-shopping-cart fs-base animate-target" />
                      </button>
                      </div>
                  </div>
                  <div className="product-card-details position-absolute top-100 start-0 w-100 bg-body rounded-bottom shadow mt-n2 p-3 pt-1">
                      <span className="position-absolute top-0 start-0 w-100 bg-body mt-n2 py-2" />
                      <ul className="list-unstyled d-flex flex-column gap-2 m-0">
                      <li className="d-flex align-items-center">
                          <span className="fs-xs">Chip:</span>
                          <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                          <span className="text-dark-emphasis fs-xs fw-medium text-end">Apple M2</span>
                      </li>
                      <li className="d-flex align-items-center">
                          <span className="fs-xs">Memory:</span>
                          <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                          <span className="text-dark-emphasis fs-xs fw-medium text-end">8 GB unified</span>
                      </li>
                      <li className="d-flex align-items-center">
                          <span className="fs-xs">Storage:</span>
                          <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                          <span className="text-dark-emphasis fs-xs fw-medium text-end">256 GB SSD</span>
                      </li>
                      <li className="d-flex align-items-center">
                          <span className="fs-xs">Display:</span>
                          <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                          <span className="text-dark-emphasis fs-xs fw-medium text-end">13.3-inch Retina</span>
                      </li>
                      </ul>
                  </div>
                  </div>
              </div>
              {/* Item */}
              <div className="col">
                  <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
                  <div className="posittion-relative">
                      <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
                      <div className="d-flex flex-column gap-2">
                          <button type="button" className="btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex" aria-label="Add to Wishlist">
                          <i className="ci-heart fs-base animate-target" />
                          </button>
                          <button type="button" className="btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex" aria-label="Compare">
                          <i className="ci-refresh-cw fs-base animate-target" />
                          </button>
                      </div>
                      </div>
                      <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
                      <button type="button" className="btn btn-icon btn-sm btn-secondary bg-body" data-bs-toggle="dropdown" aria-expanded="false" aria-label="More actions">
                          <i className="ci-more-vertical fs-lg" />
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end fs-xs p-2" style={{minWidth: 'auto'}}>
                          <li>
                          <a className="dropdown-item" href="#!">
                              <i className="ci-heart fs-sm ms-n1 me-2" />
                              Add to Wishlist
                          </a>
                          </li>
                          <li>
                          <a className="dropdown-item" href="#!">
                              <i className="ci-refresh-cw fs-sm ms-n1 me-2" />
                              Compare
                          </a>
                          </li>
                      </ul>
                      </div>
                      <a className="d-block rounded-top overflow-hidden p-3 p-sm-4" href="./single_product.html">
                      <div className="ratio" style={{'--cz-aspect-ratio': 'calc(240 / 258 * 100%)'}}>
                          <img src="assets/img/shop/electronics/05.png" alt="iPad Air" />
                      </div>
                      </a>
                  </div>
                  <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
                      <div className="d-flex align-items-center gap-2 mb-2">
                      <div className="d-flex gap-1 fs-xs">
                          <i className="ci-star-filled text-warning" />
                          <i className="ci-star-filled text-warning" />
                          <i className="ci-star-filled text-warning" />
                          <i className="ci-star-filled text-warning" />
                          <i className="ci-star-filled text-warning" />
                      </div>
                      <span className="text-body-tertiary fs-xs">(12)</span>
                      </div>
                      <h3 className="pb-1 mb-2">
                      <a className="d-block fs-sm fw-medium text-truncate" href="./single_product.html">
                          <span className="animate-target">Tablet Apple iPad Air M1</span>
                      </a>
                      </h3>
                      <div className="d-flex align-items-center justify-content-between">
                      <div className="h5 lh-1 mb-0">$540.00</div>
                      <button type="button" className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2" aria-label="Add to Cart">
                          <i className="ci-shopping-cart fs-base animate-target" />
                      </button>
                      </div>
                  </div>
                  <div className="product-card-details position-absolute top-100 start-0 w-100 bg-body rounded-bottom shadow mt-n2 p-3 pt-1">
                      <span className="position-absolute top-0 start-0 w-100 bg-body mt-n2 py-2" />
                      <ul className="list-unstyled d-flex flex-column gap-2 m-0">
                      <li className="d-flex align-items-center">
                          <span className="fs-xs">Display:</span>
                          <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                          <span className="text-dark-emphasis fs-xs fw-medium text-end">10.9" LED</span>
                      </li>
                      <li className="d-flex align-items-center">
                          <span className="fs-xs">Capacity:</span>
                          <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                          <span className="text-dark-emphasis fs-xs fw-medium text-end">64 GB</span>
                      </li>
                      <li className="d-flex align-items-center">
                          <span className="fs-xs">Chip:</span>
                          <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                          <span className="text-dark-emphasis fs-xs fw-medium text-end">Apple M1</span>
                      </li>
                      <li className="d-flex align-items-center">
                          <span className="fs-xs">Camera:</span>
                          <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                          <span className="text-dark-emphasis fs-xs fw-medium text-end">12 MP Wide</span>
                      </li>
                      <li className="d-flex align-items-center">
                          <span className="fs-xs">Weight:</span>
                          <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                          <span className="text-dark-emphasis fs-xs fw-medium text-end">462 grams</span>
                      </li>
                      </ul>
                  </div>
                  </div>
              </div>
              {/* Item */}
              <div className="col">
                  <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
                  <div className="position-relative">
                      <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
                      <div className="d-flex flex-column gap-2">
                          <button type="button" className="btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex" aria-label="Add to Wishlist">
                          <i className="ci-heart fs-base animate-target" />
                          </button>
                          <button type="button" className="btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex" aria-label="Compare">
                          <i className="ci-refresh-cw fs-base animate-target" />
                          </button>
                      </div>
                      </div>
                      <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
                      <button type="button" className="btn btn-icon btn-sm btn-secondary bg-body" data-bs-toggle="dropdown" aria-expanded="false" aria-label="More actions">
                          <i className="ci-more-vertical fs-lg" />
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end fs-xs p-2" style={{minWidth: 'auto'}}>
                          <li>
                          <a className="dropdown-item" href="#!">
                              <i className="ci-heart fs-sm ms-n1 me-2" />
                              Add to Wishlist
                          </a>
                          </li>
                          <li>
                          <a className="dropdown-item" href="#!">
                              <i className="ci-refresh-cw fs-sm ms-n1 me-2" />
                              Compare
                          </a>
                          </li>
                      </ul>
                      </div>
                      <a className="d-block rounded-top overflow-hidden p-3 p-sm-4" href="./single_product.html">
                      <div className="ratio" style={{'--cz-aspect-ratio': 'calc(240 / 258 * 100%)'}}>
                          <img src="assets/img/shop/electronics/06.png" alt="AirPods 2" />
                      </div>
                      </a>
                  </div>
                  <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
                      <div className="d-flex align-items-center gap-2 mb-2">
                      <div className="d-flex gap-1 fs-xs">
                          <i className="ci-star-filled text-warning" />
                          <i className="ci-star-filled text-warning" />
                          <i className="ci-star-filled text-warning" />
                          <i className="ci-star-filled text-warning" />
                          <i className="ci-star text-body-tertiary opacity-75" />
                      </div>
                      <span className="text-body-tertiary fs-xs">(78)</span>
                      </div>
                      <h3 className="pb-1 mb-2">
                      <a className="d-block fs-sm fw-medium text-truncate" href="./single_product.html">
                          <span className="animate-target">Headphones Apple AirPods 2 Pro</span>
                      </a>
                      </h3>
                      <div className="d-flex align-items-center justify-content-between">
                      <div className="h5 lh-1 mb-0">$224.00</div>
                      <button type="button" className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2" aria-label="Add to Cart">
                          <i className="ci-shopping-cart fs-base animate-target" />
                      </button>
                      </div>
                  </div>
                  <div className="product-card-details position-absolute top-100 start-0 w-100 bg-body rounded-bottom shadow mt-n2 p-3 pt-1">
                      <span className="position-absolute top-0 start-0 w-100 bg-body mt-n2 py-2" />
                      <ul className="list-unstyled d-flex flex-column gap-2 m-0">
                      <li className="d-flex align-items-center">
                          <span className="fs-xs">Audio:</span>
                          <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                          <span className="text-dark-emphasis fs-xs fw-medium text-end">Noise Cancellation</span>
                      </li>
                      <li className="d-flex align-items-center">
                          <span className="fs-xs">Sensors:</span>
                          <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                          <span className="text-dark-emphasis fs-xs fw-medium text-end">Touch control</span>
                      </li>
                      <li className="d-flex align-items-center">
                          <span className="fs-xs">Chip:</span>
                          <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                          <span className="text-dark-emphasis fs-xs fw-medium text-end">Apple H2</span>
                      </li>
                      <li className="d-flex align-items-center">
                          <span className="fs-xs">Weight:</span>
                          <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                          <span className="text-dark-emphasis fs-xs fw-medium text-end">50.8 grams</span>
                      </li>
                      </ul>
                  </div>
                  </div>
              </div>
              {/* Item */}
              <div className="col">
                  <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
                  <div className="posittion-relative">
                      <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
                      <div className="d-flex flex-column gap-2">
                          <button type="button" className="btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex" aria-label="Add to Wishlist">
                          <i className="ci-heart fs-base animate-target" />
                          </button>
                          <button type="button" className="btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex" aria-label="Compare">
                          <i className="ci-refresh-cw fs-base animate-target" />
                          </button>
                      </div>
                      </div>
                      <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
                      <button type="button" className="btn btn-icon btn-sm btn-secondary bg-body" data-bs-toggle="dropdown" aria-expanded="false" aria-label="More actions">
                          <i className="ci-more-vertical fs-lg" />
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end fs-xs p-2" style={{minWidth: 'auto'}}>
                          <li>
                          <a className="dropdown-item" href="#!">
                              <i className="ci-heart fs-sm ms-n1 me-2" />
                              Add to Wishlist
                          </a>
                          </li>
                          <li>
                          <a className="dropdown-item" href="#!">
                              <i className="ci-refresh-cw fs-sm ms-n1 me-2" />
                              Compare
                          </a>
                          </li>
                      </ul>
                      </div>
                      <a className="d-block rounded-top overflow-hidden p-3 p-sm-4" href="./single_product.html">
                      <div className="ratio" style={{'--cz-aspect-ratio': 'calc(240 / 258 * 100%)'}}>
                          <img src="assets/img/shop/electronics/07.png" alt="iPad Pro" />
                      </div>
                      </a>
                  </div>
                  <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
                      <div className="d-flex align-items-center gap-2 mb-2">
                      <div className="d-flex gap-1 fs-xs">
                          <i className="ci-star-filled text-warning" />
                          <i className="ci-star-filled text-warning" />
                          <i className="ci-star-filled text-warning" />
                          <i className="ci-star-filled text-warning" />
                          <i className="ci-star-half text-warning" />
                      </div>
                      <span className="text-body-tertiary fs-xs">(49)</span>
                      </div>
                      <h3 className="pb-1 mb-2">
                      <a className="d-block fs-sm fw-medium text-truncate" href="./single_product.html">
                          <span className="animate-target">Tablet Apple iPad Pro M1</span>
                      </a>
                      </h3>
                      <div className="d-flex align-items-center justify-content-between">
                      <div className="h5 lh-1 mb-0">$739.00</div>
                      <button type="button" className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2" aria-label="Add to Cart">
                          <i className="ci-shopping-cart fs-base animate-target" />
                      </button>
                      </div>
                  </div>
                  <div className="product-card-details position-absolute top-100 start-0 w-100 bg-body rounded-bottom shadow mt-n2 p-3 pt-1">
                      <span className="position-absolute top-0 start-0 w-100 bg-body mt-n2 py-2" />
                      <ul className="list-unstyled d-flex flex-column gap-2 m-0">
                      <li className="d-flex align-items-center">
                          <span className="fs-xs">Display:</span>
                          <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                          <span className="text-dark-emphasis fs-xs fw-medium text-end">11" LED</span>
                      </li>
                      <li className="d-flex align-items-center">
                          <span className="fs-xs">Capacity:</span>
                          <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                          <span className="text-dark-emphasis fs-xs fw-medium text-end">128 GB</span>
                      </li>
                      <li className="d-flex align-items-center">
                          <span className="fs-xs">Chip:</span>
                          <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                          <span className="text-dark-emphasis fs-xs fw-medium text-end">Apple M1</span>
                      </li>
                      <li className="d-flex align-items-center">
                          <span className="fs-xs">Camera:</span>
                          <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                          <span className="text-dark-emphasis fs-xs fw-medium text-end">12 MP Wide</span>
                      </li>
                      <li className="d-flex align-items-center">
                          <span className="fs-xs">Weight:</span>
                          <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                          <span className="text-dark-emphasis fs-xs fw-medium text-end">470 grams</span>
                      </li>
                      </ul>
                  </div>
                  </div>
              </div>
              {/* Item */}
              <div className="col">
                  <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
                  <div className="posittion-relative">
                      <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
                      <div className="d-flex flex-column gap-2">
                          <button type="button" className="btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex" aria-label="Add to Wishlist">
                          <i className="ci-heart fs-base animate-target" />
                          </button>
                          <button type="button" className="btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex" aria-label="Compare">
                          <i className="ci-refresh-cw fs-base animate-target" />
                          </button>
                      </div>
                      </div>
                      <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
                      <button type="button" className="btn btn-icon btn-sm btn-secondary bg-body" data-bs-toggle="dropdown" aria-expanded="false" aria-label="More actions">
                          <i className="ci-more-vertical fs-lg" />
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end fs-xs p-2" style={{minWidth: 'auto'}}>
                          <li>
                          <a className="dropdown-item" href="#!">
                              <i className="ci-heart fs-sm ms-n1 me-2" />
                              Add to Wishlist
                          </a>
                          </li>
                          <li>
                          <a className="dropdown-item" href="#!">
                              <i className="ci-refresh-cw fs-sm ms-n1 me-2" />
                              Compare
                          </a>
                          </li>
                      </ul>
                      </div>
                      <a className="d-block rounded-top overflow-hidden p-3 p-sm-4" href="./single_product.html">
                      <div className="ratio" style={{'--cz-aspect-ratio': 'calc(240 / 258 * 100%)'}}>
                          <img src="assets/img/shop/electronics/08.png" alt="Bluetooth Headphones" />
                      </div>
                      </a>
                  </div>
                  <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
                      <div className="d-flex align-items-center gap-2 mb-2">
                      <div className="d-flex gap-1 fs-xs">
                          <i className="ci-star-filled text-warning" />
                          <i className="ci-star-filled text-warning" />
                          <i className="ci-star-filled text-warning" />
                          <i className="ci-star-half text-warning" />
                          <i className="ci-star text-body-tertiary opacity-75" />
                      </div>
                      <span className="text-body-tertiary fs-xs">(136)</span>
                      </div>
                      <h3 className="pb-1 mb-2">
                      <a className="d-block fs-sm fw-medium text-truncate" href="./single_product.html">
                          <span className="animate-target">Wireless Bluetooth Headphones Sony</span>
                      </a>
                      </h3>
                      <div className="d-flex align-items-center justify-content-between">
                      <div className="h5 lh-1 mb-0">$299.00</div>
                      <button type="button" className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2" aria-label="Add to Cart">
                          <i className="ci-shopping-cart fs-base animate-target" />
                      </button>
                      </div>
                  </div>
                  <div className="product-card-details position-absolute top-100 start-0 w-100 bg-body rounded-bottom shadow mt-n2 p-3 pt-1">
                      <span className="position-absolute top-0 start-0 w-100 bg-body mt-n2 py-2" />
                      <ul className="list-unstyled d-flex flex-column gap-2 m-0">
                      <li className="d-flex align-items-center">
                          <span className="fs-xs">Audio:</span>
                          <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                          <span className="text-dark-emphasis fs-xs fw-medium text-end">Noise Cancellation</span>
                      </li>
                      <li className="d-flex align-items-center">
                          <span className="fs-xs">Connectivity:</span>
                          <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                          <span className="text-dark-emphasis fs-xs fw-medium text-end">Bluetooth, 3.5mm jack</span>
                      </li>
                      <li className="d-flex align-items-center">
                          <span className="fs-xs">Material:</span>
                          <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                          <span className="text-dark-emphasis fs-xs fw-medium text-end">Leather, Plastic</span>
                      </li>
                      <li className="d-flex align-items-center">
                          <span className="fs-xs">Weight:</span>
                          <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                          <span className="text-dark-emphasis fs-xs fw-medium text-end">185 grams</span>
                      </li>
                      </ul>
                  </div>
                  </div>
              </div>
              </div>
          </section>
  )
}

export default TrendingProducts