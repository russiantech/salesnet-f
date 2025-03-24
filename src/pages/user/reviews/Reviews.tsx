import Navigation from "../../../components/shared/Navigation"
import Aside from "../shared/Aside"
import ReviewDetails from "./ReviewDetails"
import ReviewForm from "./ReviewForm"

const Reviews = () => {
  return (
    <>

      <Navigation />
      
      <div>
        {/* Review details offcanvas */}
        <ReviewDetails />

        {/* Review form modal */}
        <ReviewForm />

        {/* Page content */}
        <main className="content-wrapper">
          <div className="container py-5 mt-n2 mt-sm-0">
            <div className="row pt-md-2 pt-lg-3 pb-sm-2 pb-md-3 pb-lg-4 pb-xl-5">
              
              {/* Sidebar navigation that turns into offcanvas on screens < 992px wide (lg breakpoint) */}
             <Aside />

              {/* Reviews content */}
              <div className="col-lg-9">
                <div className="ps-lg-3 ps-xl-0">
                  {/* Page title + Sorting select */}
                  <div className="row align-items-center pb-2 mb-sm-1">
                    <div className="col-sm-6 col-md-7 col-xxl-8 mb-3 mb-md-0">
                      <h1 className="h2 me-3 mb-0">My reviews</h1>
                    </div>
                    <div className="col-sm-6 col-md-5 col-xxl-4">
                      <select className="form-select" data-select="{&quot;removeItemButton&quot;: false}" aria-label="Wishlist sorting">
                        <option value="products-reviews">Products and reviews</option>
                        <option value="reviews">My reviews</option>
                        <option value="products">Products awaiting reviews</option>
                      </select>
                    </div>
                  </div>
                  {/* Review items (List) */}
                  {/* Item */}
                  <div className="d-md-flex align-items-center justify-content-between gap-4 border-bottom py-3">
                    <div className="nav flex-nowrap position-relative align-items-center">
                      <img src="/assets/img/shop/electronics/thumbs/11.png" className="d-block my-xl-1" width={64} alt="Image" />
                      <a className="nav-link stretched-link hover-effect-underline ps-3 p-0" href="/products/techa-products">Apple iPad 10.2" 2021 Wi-Fi 64 GB Space Gray (MK2K3RK/A)</a>
                    </div>
                    <div className="d-flex h6 fs-sm pt-2 pt-md-0 ps-3 ps-md-0 mb-2 mb-md-0">
                      <div className="flex-shrink-0 d-md-none" style={{width: '64px'}} />
                      <svg className="text-warning flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor"><path d="M1.333 9.667H7.5V16h-5c-.64 0-1.167-.527-1.167-1.167V9.667zm13.334 0v5.167c0 .64-.527 1.167-1.167 1.167h-5V9.667h6.167zM0 5.833V7.5c0 .64.527 1.167 1.167 1.167h.167H7.5v-1-3H1.167C.527 4.667 0 5.193 0 5.833zm14.833-1.166H8.5v3 1h6.167.167C15.473 8.667 16 8.14 16 7.5V5.833c0-.64-.527-1.167-1.167-1.167z" /><path d="M8 5.363a.5.5 0 0 1-.495-.573C7.752 3.123 9.054-.03 12.219-.03c1.807.001 2.447.977 2.447 1.813 0 1.486-2.069 3.58-6.667 3.58zM12.219.971c-2.388 0-3.295 2.27-3.595 3.377 1.884-.088 3.072-.565 3.756-.971.949-.563 1.287-1.193 1.287-1.595 0-.599-.747-.811-1.447-.811z" /><path d="M8.001 5.363c-4.598 0-6.667-2.094-6.667-3.58 0-.836.641-1.812 2.448-1.812 3.165 0 4.467 3.153 4.713 4.819a.5.5 0 0 1-.495.573zM3.782.971c-.7 0-1.448.213-1.448.812 0 .851 1.489 2.403 5.042 2.566C7.076 3.241 6.169.971 3.782.971z" /></svg>
                      +100 bonuses for a review
                    </div>
                    <div className="d-flex pt-2 pt-md-0 ps-3 ps-md-0 mb-2 mb-md-0">
                      <div className="d-md-none" style={{width: '64px'}} />
                      <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#reviewForm">Leave a review</button>
                    </div>
                  </div>
                  {/* Item */}
                  <div className="d-md-flex align-items-center justify-content-between gap-4 border-bottom py-3">
                    <div className="nav flex-nowrap position-relative align-items-center">
                      <img src="/assets/img/shop/electronics/thumbs/12.png" className="d-block my-xl-1" width={64} alt="Image" />
                      <a className="nav-link stretched-link hover-effect-underline ps-3 p-0" href="/products/techa-products">Laptop Apple MacBook Pro 13 M2</a>
                    </div>
                    <div className="position-relative d-flex align-items-center text-decoration-none min-w-0 pt-1 pt-md-0 ps-3 ps-md-0 mb-2 mb-md-0">
                      <div className="flex-shrink-0 d-md-none" style={{width: '64px'}} />
                      <div className="h6 fs-sm text-body-secondary text-truncate p-0 me-3 me-sm-4 mb-0">+100 bonuses earned</div>
                      <div className="d-flex gap-1 fs-sm me-2 me-sm-3">
                        <i className="ci-star-filled text-warning" />
                        <i className="ci-star-filled text-warning" />
                        <i className="ci-star-filled text-warning" />
                        <i className="ci-star-filled text-warning" />
                        <i className="ci-star-filled text-warning" />
                      </div>
                      <a className="btn btn-icon btn-ghost btn-secondary stretched-link border-0" href="#reviewDetails" data-bs-toggle="offcanvas" aria-controls="reviewDetails" aria-label="Show review details">
                        <i className="ci-chevron-right fs-lg" />
                      </a>
                    </div>
                  </div>
                  {/* Item */}
                  <div className="d-md-flex align-items-center justify-content-between gap-4 border-bottom py-3">
                    <div className="nav flex-nowrap position-relative align-items-center">
                      <img src="/assets/img/shop/electronics/thumbs/13.png" className="d-block my-xl-1" width={64} alt="Product thumb" />
                      <a className="nav-link stretched-link hover-effect-underline ps-3 p-0" href="/products/techa-products">Razer Opus X Mercury Headphones (RZ04-03760200-R3M1)</a>
                    </div>
                    <div className="d-flex pt-2 pt-md-0 ps-3 ps-md-0 mb-2 mb-md-0">
                      <div className="d-md-none" style={{width: '64px'}} />
                      <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#reviewForm">Leave a review</button>
                    </div>
                  </div>
                  {/* Item */}
                  <div className="d-md-flex align-items-center justify-content-between gap-4 border-bottom py-3">
                    <div className="nav flex-nowrap position-relative align-items-center">
                      <img src="/assets/img/shop/electronics/thumbs/14.png" className="d-block my-xl-1" width={64} alt="Product thumb" />
                      <a className="nav-link stretched-link hover-effect-underline ps-3 p-0" href="/products/techa-products">3D virtual reality glasses VR Shinecon G10 for smartphones with a large screen</a>
                    </div>
                    <div className="d-flex pt-2 pt-md-0 ps-3 ps-md-0 mb-2 mb-md-0">
                      <div className="d-md-none" style={{width: '64px'}} />
                      <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#reviewForm">Leave a review</button>
                    </div>
                  </div>
                  {/* Item */}
                  <div className="d-md-flex align-items-center justify-content-between gap-4 border-bottom py-3">
                    <div className="nav flex-nowrap position-relative align-items-center">
                      <img src="/assets/img/shop/electronics/thumbs/15.png" className="d-block my-xl-1" width={64} alt="Product thumb" />
                      <a className="nav-link stretched-link hover-effect-underline ps-3 p-0" href="/products/techa-products">Apple iPad Pro M2 2022 64 GB Space Gray</a>
                    </div>
                    <div className="d-flex h6 fs-sm pt-2 pt-md-0 ps-3 ps-md-0 mb-2 mb-md-0">
                      <div className="flex-shrink-0 d-md-none" style={{width: '64px'}} />
                      <svg className="text-warning flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor"><path d="M1.333 9.667H7.5V16h-5c-.64 0-1.167-.527-1.167-1.167V9.667zm13.334 0v5.167c0 .64-.527 1.167-1.167 1.167h-5V9.667h6.167zM0 5.833V7.5c0 .64.527 1.167 1.167 1.167h.167H7.5v-1-3H1.167C.527 4.667 0 5.193 0 5.833zm14.833-1.166H8.5v3 1h6.167.167C15.473 8.667 16 8.14 16 7.5V5.833c0-.64-.527-1.167-1.167-1.167z" /><path d="M8 5.363a.5.5 0 0 1-.495-.573C7.752 3.123 9.054-.03 12.219-.03c1.807.001 2.447.977 2.447 1.813 0 1.486-2.069 3.58-6.667 3.58zM12.219.971c-2.388 0-3.295 2.27-3.595 3.377 1.884-.088 3.072-.565 3.756-.971.949-.563 1.287-1.193 1.287-1.595 0-.599-.747-.811-1.447-.811z" /><path d="M8.001 5.363c-4.598 0-6.667-2.094-6.667-3.58 0-.836.641-1.812 2.448-1.812 3.165 0 4.467 3.153 4.713 4.819a.5.5 0 0 1-.495.573zM3.782.971c-.7 0-1.448.213-1.448.812 0 .851 1.489 2.403 5.042 2.566C7.076 3.241 6.169.971 3.782.971z" /></svg>
                      +86 bonuses for a review
                    </div>
                    <div className="d-flex pt-2 pt-md-0 ps-3 ps-md-0 mb-2 mb-md-0">
                      <div className="d-md-none" style={{width: '64px'}} />
                      <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#reviewForm">Leave a review</button>
                    </div>
                  </div>
                  {/* Item */}
                  <div className="d-md-flex align-items-center justify-content-between gap-4 border-bottom py-3">
                    <div className="nav flex-nowrap position-relative align-items-center">
                      <img src="/assets/img/shop/electronics/thumbs/16.png" className="d-block my-xl-1" width={64} alt="Product thumb" />
                      <a className="nav-link stretched-link hover-effect-underline ps-3 p-0" href="/products/techa-products">Mobile phone Apple iPhone 14 256GB Starlight</a>
                    </div>
                    <div className="d-flex pt-2 pt-md-0 ps-3 ps-md-0 mb-2 mb-md-0">
                      <div className="d-md-none" style={{width: '64px'}} />
                      <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#reviewForm">Leave a review</button>
                    </div>
                  </div>
                  {/* Item */}
                  <div className="d-md-flex align-items-center justify-content-between gap-4 border-bottom py-3">
                    <div className="nav flex-nowrap position-relative align-items-center">
                      <img src="/assets/img/shop/electronics/thumbs/17.png" className="d-block my-xl-1" width={64} alt="Product thumb" />
                      <a className="nav-link stretched-link hover-effect-underline ps-3 p-0" href="/products/techa-products">Power Bank PBS 10000 mAh Black</a>
                    </div>
                    <div className="position-relative d-flex align-items-center text-decoration-none min-w-0 pt-1 pt-md-0 ps-3 ps-md-0 mb-2 mb-md-0">
                      <div className="flex-shrink-0 d-md-none" style={{width: '64px'}} />
                      <div className="d-flex gap-1 fs-sm me-2 me-sm-3">
                        <i className="ci-star-filled text-warning" />
                        <i className="ci-star-filled text-warning" />
                        <i className="ci-star-filled text-warning" />
                        <i className="ci-star-filled text-warning" />
                        <i className="ci-star text-body-tertiary opacity-75" />
                      </div>
                      <a className="btn btn-icon btn-ghost btn-secondary stretched-link border-0" href="#reviewDetails" data-bs-toggle="offcanvas" aria-controls="reviewDetails" aria-label="Show review details">
                        <i className="ci-chevron-right fs-lg" />
                      </a>
                    </div>
                  </div>
                  {/* Item */}
                  <div className="d-md-flex align-items-center justify-content-between gap-4 border-bottom py-3">
                    <div className="nav flex-nowrap position-relative align-items-center">
                      <img src="/assets/img/shop/electronics/thumbs/18.png" className="d-block my-xl-1" width={64} alt="Product thumb" />
                      <a className="nav-link stretched-link hover-effect-underline ps-3 p-0" href="/products/techa-products">Apple iPhone 14 128GB Blue</a>
                    </div>
                    <div className="d-flex pt-2 pt-md-0 ps-3 ps-md-0 mb-2 mb-md-0">
                      <div className="d-md-none" style={{width: '64px'}} />
                      <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#reviewForm">Leave a review</button>
                    </div>
                  </div>
                  {/* Item */}
                  <div className="d-md-flex align-items-center justify-content-between gap-4 border-bottom py-3">
                    <div className="nav flex-nowrap position-relative align-items-center">
                      <img src="/assets/img/shop/electronics/thumbs/19.png" className="d-block my-xl-1" width={64} alt="Product thumb" />
                      <a className="nav-link stretched-link hover-effect-underline ps-3 p-0" href="/products/techa-products">VRB01 Camera Nikon Max</a>
                    </div>
                    <div className="d-flex pt-2 pt-md-0 ps-3 ps-md-0 mb-2 mb-md-0">
                      <div className="d-md-none" style={{width: '64px'}} />
                      <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#reviewForm">Leave a review</button>
                    </div>
                  </div>
                  {/* Pagination */}
                  <nav className="pt-3 pb-2 pb-sm-0 mt-2 mt-md-3" aria-label="Page navigation example">
                    <ul className="pagination">
                      <li className="page-item active" aria-current="page">
                        <span className="page-link">
                          1
                          <span className="visually-hidden">(current)</span>
                        </span>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">2</a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">3</a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">4</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
   
    </>
  )
}

export default Reviews