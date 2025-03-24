import Navigation from "../../../components/shared/Navigation"
import Aside from "../shared/Aside"
import MakeFavoriteModal from "./MakeFavoriteModal"
// import OrderItems from "./OrderItems"

const Favorites = () => {

  return (
    <>
      <MakeFavoriteModal />

      <Navigation />
      {/* Page content */}
      <main className="content-wrapper">
        <div className="container py-5 mt-n2 mt-sm-0">
          <div className="row pt-md-2 pt-lg-3 pb-sm-2 pb-md-3 pb-lg-4 pb-xl-5">

            {/* Sidebar navigation that turns into offcanvas on screens < 992px wide (lg breakpoint) */}
            <Aside />

            {/* Wishlist content */}
            <div className="col-lg-9">
              <div className="ps-lg-3 ps-xl-0">
                {/* Page title + Add list button*/}
                <div className="d-flex align-items-center justify-content-between pb-3 mb-1 mb-sm-2 mb-md-3">
                  <h1 className="h2 me-3 mb-0">Favorites</h1>
                  <div className="nav">
                    <a className="nav-link animate-underline px-0 py-1 py-ms-2" href="#wishlistModal" data-bs-toggle="modal">
                      <i className="ci-plus fs-base me-1" />
                      <span className="animate-target badge text-bg-info rounded-pill">Add favorite.</span>
                    </a>
                  </div>
                </div>
                {/* Wishlist selector */}
                <div className="border-bottom pb-4 mb-3">
                  <div className="row align-items-center justify-content-between">
                    <div className="col-sm-7 col-md-8 col-xxl-9 d-flex align-items-center mb-3 mb-sm-0">
                      <h5 className="me-2 mb-0">Interesting offers</h5>
                      <div className="dropdown ms-auto ms-sm-0">
                        <button type="button" className="btn btn-icon btn-ghost btn-secondary border-0" id="wishlist-selector" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false" aria-label="Select wishlist">
                          <i className="ci-more-vertical fs-xl" />
                        </button>
                        <div className="dropdown-menu dropdown-menu-end">
                          <div className="d-flex flex-column gap-1 mb-2">
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="wishlist-1" name="wishlist" defaultChecked />
                              <label htmlFor="wishlist-1" className="form-check-label text-body">Interesting offers</label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="wishlist-2" name="wishlist" />
                              <label htmlFor="wishlist-2" className="form-check-label text-body">Top picks collection</label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="wishlist-3" name="wishlist" />
                              <label htmlFor="wishlist-3" className="form-check-label text-body">Family stuff</label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="wishlist-4" name="wishlist" />
                              <label htmlFor="wishlist-4" className="form-check-label text-body">My must-haves</label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="wishlist-5" name="wishlist" />
                              <label htmlFor="wishlist-5" className="form-check-label text-body">For my husband</label>
                            </div>
                          </div>
                          <button type="button" className="btn btn-sm btn-dark w-100" onclick="document.getElementById('wishlist-selector').click()">Select wishlist</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-5 col-md-4 col-xxl-3">
                      <select className="form-select" data-select="{&quot;removeItemButton&quot;: false}" aria-label="Wishlist sorting">
                        <option value="date">By date added</option>
                        <option value="price-ascend">By price ascending</option>
                        <option value="price-descend">By price descending</option>
                        <option value="rating">By rating</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* Master checkbox + Action buttons */}
                <div className="nav align-items-center mb-4">
                  <div className="form-checkl nav-link animate-underline fs-lg ps-0 pe-2 py-2 mt-n1 me-4" data-master-checkbox="{&quot;container&quot;: &quot;#wishlistSelection&quot;, &quot;label&quot;: &quot;Select all&quot;, &quot;labelChecked&quot;: &quot;Unselect all&quot;, &quot;showOnCheck&quot;: &quot;#action-buttons&quot;}">
                    <input type="checkbox" className="form-check-input" id="wishlist-master" defaultChecked />
                    <label htmlFor="wishlist-master" className="form-check-label animate-target mt-1 ms-2">Unselect all</label>
                  </div>
                  <div className="d-flex flex-wrap" id="action-buttons">
                    <a className="nav-link animate-underline px-0 pe-sm-2 py-2 me-4" href="#!">
                      <i className="ci-shopping-cart fs-base me-2" />
                      <span className="animate-target d-none d-md-inline">Add to cart</span>
                    </a>
                    <a className="nav-link animate-underline px-0 pe-sm-2 py-2 me-4" href="#!">
                      <i className="ci-repeat fs-base me-2" />
                      <span className="animate-target d-none d-md-inline">Relocate</span>
                    </a>
                    <a className="nav-link animate-underline px-0 py-2" href="#!">
                      <i className="ci-trash fs-base me-1" />
                      <span className="animate-target d-none d-md-inline">Remove selected</span>
                    </a>
                  </div>
                </div>
                {/* Wishlist items (Grid) */}
                <div className="row row-cols-2 row-cols-md-3 g-4" id="wishlistSelection">
                  {/* Item */}
                  <div className="col">
                    <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
                      <div className="position-relative">
                        <div className="position-absolute top-0 end-0 z-1 pt-1 pe-1 mt-2 me-2">
                          <div className="form-check fs-lg">
                            <input type="checkbox" className="form-check-input select-card-check" defaultChecked />
                          </div>
                        </div>
                        <a className="d-block rounded-top overflow-hidden p-3 p-sm-4" href="/products/techa-products-slug">
                          <span className="badge bg-danger position-absolute top-0 start-0 mt-2 ms-2 mt-lg-3 ms-lg-3">-21%</span>
                          <div className="ratio" style={{ "--cz-aspect-ratio": 'calc(240 / 258 * 100%)' }}>
                            <img src="/assets/img/shop/electronics/01.png" alt="VR Glasses" />
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
                          <a className="d-block fs-sm fw-medium text-truncate" href="/products/techa-products-slug">
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
                    </div>
                  </div>
                  {/* Item */}
                  <div className="col">
                    <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
                      <div className="position-relative">
                        <div className="position-absolute top-0 end-0 z-1 pt-1 pe-1 mt-2 me-2">
                          <div className="form-check fs-lg">
                            <input type="checkbox" className="form-check-input select-card-check" defaultChecked />
                          </div>
                        </div>
                        <a className="d-block rounded-top overflow-hidden p-3 p-sm-4" href="/products/techa-products-slug">
                          <div className="ratio" style={{ "--cz-aspect-ratio": 'calc(240 / 258 * 100%)' }}>
                            <img src="/assets/img/shop/electronics/02.png" alt="iPhone 14" />
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
                          <a className="d-block fs-sm fw-medium text-truncate" href="/products/techa-products-slug">
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
                    </div>
                  </div>
                  {/* Item */}
                  <div className="col">
                    <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
                      <div className="position-relative">
                        <div className="position-absolute top-0 end-0 z-1 pt-1 pe-1 mt-2 me-2">
                          <div className="form-check fs-lg">
                            <input type="checkbox" className="form-check-input select-card-check" />
                          </div>
                        </div>
                        <a className="d-block rounded-top overflow-hidden p-3 p-sm-4" href="/products/techa-products-slug">
                          <div className="ratio" style={{ "--cz-aspect-ratio": 'calc(240 / 258 * 100%)' }}>
                            <img src="/assets/img/shop/electronics/03.png" alt="Smart Watch" />
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
                          <a className="d-block fs-sm fw-medium text-truncate" href="/products/techa-products-slug">
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
                    </div>
                  </div>
                  {/* Item */}
                  <div className="col">
                    <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
                      <div className="posittion-relative">
                        <div className="position-absolute top-0 end-0 z-1 pt-1 pe-1 mt-2 me-2">
                          <div className="form-check fs-lg">
                            <input type="checkbox" className="form-check-input select-card-check" />
                          </div>
                        </div>
                        <a className="d-block rounded-top overflow-hidden p-3 p-sm-4" href="/products/techa-products-slug">
                          <div className="ratio" style={{ "--cz-aspect-ratio": 'calc(240 / 258 * 100%)' }}>
                            <img src="/assets/img/shop/electronics/05.png" alt="iPad Air" />
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
                          <a className="d-block fs-sm fw-medium text-truncate" href="/products/techa-products-slug">
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
                    </div>
                  </div>
                  {/* Item */}
                  <div className="col">
                    <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
                      <div className="position-relative">
                        <div className="position-absolute top-0 end-0 z-1 pt-1 pe-1 mt-2 me-2">
                          <div className="form-check fs-lg">
                            <input type="checkbox" className="form-check-input select-card-check" />
                          </div>
                        </div>
                        <a className="d-block rounded-top overflow-hidden p-3 p-sm-4" href="/products/techa-products-slug">
                          <div className="ratio" style={{ "--cz-aspect-ratio": 'calc(240 / 258 * 100%)' }}>
                            <img src="/assets/img/shop/electronics/06.png" alt="AirPods 2" />
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
                          <a className="d-block fs-sm fw-medium text-truncate" href="/products/techa-products-slug">
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
