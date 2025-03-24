import React from 'react'
import Navigation from '../../../components/shared/Navigation'
import Aside from '../shared/Aside'

const Favorites = () => {
  return (
    <>
        <Navigation />

      {/* Page content */}
      <main className="content-wrapper">
        <div className="container pt-4 pt-lg-5 pb-5">
          <div className="row pt-sm-2 pt-md-3 pt-lg-0 pb-2 pb-sm-3 pb-md-4 pb-lg-5">
            {/* Sidebar navigation that turns into offcanvas on screens < 992px wide (lg breakpoint) */}
            <Aside />

            {/* Favorites content */}
            <div className="col-lg-9 pt-2 pt-xl-3">
              {/* Header */}
              <div className="d-flex align-items-center justify-content-between gap-3 pb-3 mb-2 mb-md-3">
                <h1 className="h2 mb-0">Favorites</h1>
                <div style={{width: '170px'}}>
                  <select className="form-select rounded-pill" data-select="{
                  &quot;classNames&quot;: {
                    &quot;containerInner&quot;: [&quot;form-select&quot;, &quot;rounded-pill&quot;]
                  },
                  &quot;removeItemButton&quot;: false
                }" aria-label="Period select">
                    <option value="All">All products</option>
                    <option value="Vectors">Vectors</option>
                    <option value="Mockups">Mockups</option>
                    <option value="Photos">Photos</option>
                    <option value="3D">3D</option>
                    <option value="AI images">AI images</option>
                    <option value="Templates">Templates</option>
                  </select>
                </div>
              </div>
              {/* Products grid */}
              <div className="row row-cols-2 row-cols-md-3 g-3 g-sm-4 g-lg-3 g-xl-4">
                {/* Product */}
                <div className="col">
                  <div className="card h-100 animate-underline hover-effect-scale rounded-4 overflow-hidden">
                    <div className="card-img-top position-relative bg-body-tertiary overflow-hidden">
                      <a className="ratio d-block hover-effect-target" style={{"--cz-aspect-ratio": 'calc(220 / 304 * 100%)'}} href="shop-product-marketplace.html">
                        <img src="/assets/img/shop/marketplace/01.jpg" alt="Image" />
                      </a>
                      <div className="position-absolute top-0 end-0 z-2 hover-effect-target pt-1 pt-sm-0 pe-1 pe-sm-0 mt-2 mt-sm-3 me-2 me-sm-3">
                        <button type="button" className="btn btn-sm btn-icon btn-light text-danger bg-light border-0 rounded-circle animate-pulse" aria-label="Add to wishlist">
                          <i className="ci-heart-filled animate-target fs-sm" />
                        </button>
                      </div>
                    </div>
                    <div className="card-body p-3">
                      <div className="d-flex min-w-0 justify-content-between gap-2 gap-sm-3 mb-2">
                        <h3 className="nav min-w-0 mb-0">
                          <a className="nav-link text-truncate p-0" href="shop-product-marketplace.html">
                            <span className="text-truncate animate-target">Set of two badge identity cards</span>
                          </a>
                        </h3>
                        <div className="h6 mb-0">$8</div>
                      </div>
                      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                        <div className="nav align-items-center gap-1 fs-xs">
                          <a className="nav-link fs-xs text-body gap-1 p-0" href="#!">
                            <div className="flex-shrink-0 border rounded-circle" style={{width: '22px'}}>
                              <div className="ratio ratio-1x1 rounded-circle overflow-hidden">
                                <img src="/assets/img/shop/marketplace/avatars/04.png" alt="Avatar" />
                              </div>
                            </div>
                            Fireby
                          </a>
                          <div className="text-body-secondary">in</div>
                          <a className="nav-link fs-xs text-body p-0" href="#!">Mockups</a>
                        </div>
                        <div className="fs-xs text-body-secondary">17 sales</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Product */}
                <div className="col">
                  <div className="card h-100 animate-underline hover-effect-scale rounded-4 overflow-hidden">
                    <div className="card-img-top position-relative bg-body-tertiary overflow-hidden">
                      <a className="ratio d-block hover-effect-target" style={{"--cz-aspect-ratio": 'calc(220 / 304 * 100%)'}} href="shop-product-marketplace.html">
                        <img src="/assets/img/shop/marketplace/02.jpg" alt="Image" />
                      </a>
                      <div className="position-absolute top-0 end-0 z-2 hover-effect-target pt-1 pt-sm-0 pe-1 pe-sm-0 mt-2 mt-sm-3 me-2 me-sm-3">
                        <button type="button" className="btn btn-sm btn-icon btn-light text-danger bg-light border-0 rounded-circle animate-pulse" aria-label="Add to wishlist">
                          <i className="ci-heart-filled animate-target fs-sm" />
                        </button>
                      </div>
                    </div>
                    <div className="card-body p-3">
                      <div className="d-flex min-w-0 justify-content-between gap-2 gap-sm-3 mb-2">
                        <h3 className="nav min-w-0 mb-0">
                          <a className="nav-link text-truncate p-0" href="shop-product-marketplace.html">
                            <span className="text-truncate animate-target">Smart watches series 9 mockup</span>
                          </a>
                        </h3>
                        <div className="h6 mb-0">$15</div>
                      </div>
                      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                        <div className="nav align-items-center gap-1 fs-xs">
                          <a className="nav-link fs-xs text-body gap-1 p-0" href="#!">
                            <div className="flex-shrink-0 border rounded-circle" style={{width: '22px'}}>
                              <div className="ratio ratio-1x1 rounded-circle overflow-hidden">
                                <img src="/assets/img/shop/marketplace/avatars/03.png" alt="Avatar" />
                              </div>
                            </div>
                            MD Studio
                          </a>
                          <div className="text-body-secondary">in</div>
                          <a className="nav-link fs-xs text-body p-0" href="#!">Mockups</a>
                        </div>
                        <div className="fs-xs text-body-secondary">132 sales</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Product */}
                <div className="col">
                  <div className="card h-100 animate-underline hover-effect-scale rounded-4 overflow-hidden">
                    <div className="card-img-top position-relative bg-body-tertiary overflow-hidden">
                      <a className="ratio d-block hover-effect-target" style={{"--cz-aspect-ratio": 'calc(220 / 304 * 100%)'}} href="shop-product-marketplace.html">
                        <img src="/assets/img/shop/marketplace/03.jpg" alt="Image" />
                      </a>
                      <div className="position-absolute top-0 end-0 z-2 hover-effect-target pt-1 pt-sm-0 pe-1 pe-sm-0 mt-2 mt-sm-3 me-2 me-sm-3">
                        <button type="button" className="btn btn-sm btn-icon btn-light text-danger bg-light border-0 rounded-circle animate-pulse" aria-label="Add to wishlist">
                          <i className="ci-heart-filled animate-target fs-sm" />
                        </button>
                      </div>
                    </div>
                    <div className="card-body p-3">
                      <div className="d-flex min-w-0 justify-content-between gap-2 gap-sm-3 mb-2">
                        <h3 className="nav min-w-0 mb-0">
                          <a className="nav-link text-truncate p-0" href="shop-product-marketplace.html">
                            <span className="text-truncate animate-target">3D box mockup bold rebrand</span>
                          </a>
                        </h3>
                        <div className="h6 mb-0">$16</div>
                      </div>
                      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                        <div className="nav align-items-center gap-1 fs-xs">
                          <a className="nav-link fs-xs text-body gap-1 p-0" href="#!">
                            <div className="flex-shrink-0 border rounded-circle" style={{width: '22px'}}>
                              <div className="ratio ratio-1x1 rounded-circle overflow-hidden">
                                <img src="/assets/img/shop/marketplace/avatars/02.png" alt="Avatar" />
                              </div>
                            </div>
                            Magic FS
                          </a>
                          <div className="text-body-secondary">in</div>
                          <a className="nav-link fs-xs text-body p-0" href="#!">Mockups</a>
                        </div>
                        <div className="fs-xs text-body-secondary">56 sales</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Product */}
                <div className="col">
                  <div className="card h-100 animate-underline hover-effect-scale rounded-4 overflow-hidden">
                    <div className="card-img-top position-relative bg-body-tertiary overflow-hidden">
                      <a className="ratio d-block hover-effect-target" style={{"--cz-aspect-ratio": 'calc(220 / 304 * 100%)'}} href="shop-product-marketplace.html">
                        <img src="/assets/img/shop/marketplace/06.jpg" alt="Image" />
                      </a>
                      <div className="position-absolute top-0 end-0 z-2 hover-effect-target pt-1 pt-sm-0 pe-1 pe-sm-0 mt-2 mt-sm-3 me-2 me-sm-3">
                        <button type="button" className="btn btn-sm btn-icon btn-light text-danger bg-light border-0 rounded-circle animate-pulse" aria-label="Add to wishlist">
                          <i className="ci-heart-filled animate-target fs-sm" />
                        </button>
                      </div>
                    </div>
                    <div className="card-body p-3">
                      <div className="d-flex min-w-0 justify-content-between gap-2 gap-sm-3 mb-2">
                        <h3 className="nav min-w-0 mb-0">
                          <a className="nav-link text-truncate p-0" href="shop-product-marketplace.html">
                            <span className="text-truncate animate-target">Smartphone mockups for UI designs</span>
                          </a>
                        </h3>
                        <div className="h6 mb-0">$18</div>
                      </div>
                      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                        <div className="nav align-items-center gap-1 fs-xs">
                          <a className="nav-link fs-xs text-body gap-1 p-0" href="#!">
                            <div className="flex-shrink-0 border rounded-circle" style={{width: '22px'}}>
                              <div className="ratio ratio-1x1 rounded-circle overflow-hidden">
                                <img src="/assets/img/shop/marketplace/avatars/03.png" alt="Avatar" />
                              </div>
                            </div>
                            MD Studio
                          </a>
                          <div className="text-body-secondary">in</div>
                          <a className="nav-link fs-xs text-body p-0" href="#!">Mockups</a>
                        </div>
                        <div className="fs-xs text-body-secondary">152 sales</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Product */}
                <div className="col">
                  <div className="card h-100 animate-underline hover-effect-scale rounded-4 overflow-hidden">
                    <div className="card-img-top position-relative bg-body-tertiary overflow-hidden">
                      <a className="ratio d-block hover-effect-target" style={{"--cz-aspect-ratio": 'calc(220 / 304 * 100%)'}} href="shop-product-marketplace.html">
                        <img src="/assets/img/shop/marketplace/08.jpg" alt="Image" />
                      </a>
                      <div className="position-absolute top-0 end-0 z-2 hover-effect-target pt-1 pt-sm-0 pe-1 pe-sm-0 mt-2 mt-sm-3 me-2 me-sm-3">
                        <button type="button" className="btn btn-sm btn-icon btn-light text-danger bg-light border-0 rounded-circle animate-pulse" aria-label="Add to wishlist">
                          <i className="ci-heart-filled animate-target fs-sm" />
                        </button>
                      </div>
                    </div>
                    <div className="card-body p-3">
                      <div className="d-flex min-w-0 justify-content-between gap-2 gap-sm-3 mb-2">
                        <h3 className="nav min-w-0 mb-0">
                          <a className="nav-link text-truncate p-0" href="shop-product-marketplace.html">
                            <span className="text-truncate animate-target">iPhone 15 pro mockups</span>
                          </a>
                        </h3>
                        <div className="h6 mb-0">$19</div>
                      </div>
                      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                        <div className="nav align-items-center gap-1 fs-xs">
                          <a className="nav-link fs-xs text-body gap-1 p-0" href="#!">
                            <div className="flex-shrink-0 border rounded-circle" style={{width: '22px'}}>
                              <div className="ratio ratio-1x1 rounded-circle overflow-hidden">
                                <img src="/assets/img/shop/marketplace/avatars/04.png" alt="Avatar" />
                              </div>
                            </div>
                            Fireby
                          </a>
                          <div className="text-body-secondary">in</div>
                          <a className="nav-link fs-xs text-body p-0" href="#!">Mockups</a>
                        </div>
                        <div className="fs-xs text-body-secondary">47 sales</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Product */}
                <div className="col">
                  <div className="card h-100 animate-underline hover-effect-scale rounded-4 overflow-hidden">
                    <div className="card-img-top position-relative bg-body-tertiary overflow-hidden">
                      <a className="ratio d-block hover-effect-target" style={{"--cz-aspect-ratio": 'calc(220 / 304 * 100%)'}} href="shop-product-marketplace.html">
                        <img src="/assets/img/shop/marketplace/04.jpg" alt="Image" />
                      </a>
                      <div className="position-absolute top-0 end-0 z-2 hover-effect-target pt-1 pt-sm-0 pe-1 pe-sm-0 mt-2 mt-sm-3 me-2 me-sm-3">
                        <button type="button" className="btn btn-sm btn-icon btn-light text-danger bg-light border-0 rounded-circle animate-pulse" aria-label="Add to wishlist">
                          <i className="ci-heart-filled animate-target fs-sm" />
                        </button>
                      </div>
                    </div>
                    <div className="card-body p-3">
                      <div className="d-flex min-w-0 justify-content-between gap-2 gap-sm-3 mb-2">
                        <h3 className="nav min-w-0 mb-0">
                          <a className="nav-link text-truncate p-0" href="shop-product-marketplace.html">
                            <span className="text-truncate animate-target">Falling gift cards mockup</span>
                          </a>
                        </h3>
                        <div className="h6 mb-0">$9</div>
                      </div>
                      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                        <div className="nav align-items-center gap-1 fs-xs">
                          <a className="nav-link fs-xs text-body gap-1 p-0" href="#!">
                            <div className="flex-shrink-0 border rounded-circle" style={{width: '22px'}}>
                              <div className="ratio ratio-1x1 rounded-circle overflow-hidden">
                                <img src="/assets/img/shop/marketplace/avatars/02.png" alt="Avatar" />
                              </div>
                            </div>
                            Magic FS
                          </a>
                          <div className="text-body-secondary">in</div>
                          <a className="nav-link fs-xs text-body p-0" href="#!">Mockups</a>
                        </div>
                        <div className="fs-xs text-body-secondary">34 sales</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    </>
  )
}

export default Favorites