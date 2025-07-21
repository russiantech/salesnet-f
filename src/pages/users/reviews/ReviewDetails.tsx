import React from 'react'

const ReviewDetails = () => {
  return (
    <>
      {/* Review details offcanvas */}
      <div className="offcanvas offcanvas-end pb-sm-2 px-sm-2" id="reviewDetails" tabIndex={-1} aria-labelledby="reviewDetailsLabel" style={{width: '500px'}}>
          {/* Header */}
          <div className="offcanvas-header py-3 pt-lg-4">
            <h4 className="offcanvas-title" id="reviewDetailsLabel">My review</h4>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
          </div>
          {/* Body */}
          <div className="offcanvas-body pt-2">
            {/* Product */}
            <div className="d-flex align-items-center border-bottom mb-4">
              <a className="flex-shrink-0" href="shop-product-general-electronics.html">
                <img src="/assets/img/shop/electronics/thumbs/07.png" width={110} alt="MacBook" />
              </a>
              <div className="w-100 min-w-0 ps-2 ps-sm-3">
                <h5 className="d-flex animate-underline mb-2">
                  <a className="d-block fs-sm fw-medium text-truncate animate-target" href="shop-product-general-electronics.html">Laptop Apple MacBook Pro 13 M2</a>
                </h5>
                <div className="h6 mb-0">$1,200.00</div>
              </div>
            </div>
            {/* Review */}
            <div className="d-flex align-items-center justify-content-between mb-3">
              <div className="d-flex gap-1 fs-sm me-2 me-sm-3">
                <i className="ci-star-filled text-warning" />
                <i className="ci-star-filled text-warning" />
                <i className="ci-star-filled text-warning" />
                <i className="ci-star-filled text-warning" />
                <i className="ci-star-filled text-warning" />
              </div>
              <div className="fs-sm text-body-secondary">June 17, 2024</div>
            </div>
            <div className="d-flex gap-2 pb-2 mb-1">
              <div className="d-flex fs-sm me-4">
                <span className="text-dark-emphasis fw-medium me-2">Color:</span>
                Space Gray
              </div>
              <div className="d-flex fs-sm">
                <span className="text-dark-emphasis fw-medium me-2">Model:</span>
                256GB
              </div>
            </div>
            <p className="fs-sm">After 6 months of using the laptop, I can say that it fully meets the needs. The main advantage is smooth operation without hangs, the function of scanning fingerprints to unlock the laptop works perfectly, it will be useful for those who work in the office (confidentiality of information is guaranteed).</p>
            <ul className="list-unstyled fs-sm pb-2 mb-1">
              <li><span className="text-dark-emphasis fw-medium">Pros:</span> Touchpad, design, weight, performance, battery</li>
              <li><span className="text-dark-emphasis fw-medium">Cons:</span> Warming up</li>
            </ul>
            <div className="nav align-items-center">
              <div className="nav-link text-body-secondary px-0 ms-auto me-n1 pe-none">
                <i className="ci-thumbs-up fs-base me-1" />
                0
              </div>
              <hr className="vr my-2 mx-3" />
              <div className="nav-link text-body-secondary px-0 ms-n1 pe-none">
                <i className="ci-thumbs-down fs-base me-1" />
                0
              </div>
            </div>
            <div className="pt-4 mt-2 mt-md-3">
              <div className="d-flex align-items-center bg-body-tertiary text-dark-emphasis fs-sm rounded p-3 px-sm-4">
                <svg className="text-warning flex-shrink-0 me-3" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor"><path d="M1.333 9.667H7.5V16h-5c-.64 0-1.167-.527-1.167-1.167V9.667zm13.334 0v5.167c0 .64-.527 1.167-1.167 1.167h-5V9.667h6.167zM0 5.833V7.5c0 .64.527 1.167 1.167 1.167h.167H7.5v-1-3H1.167C.527 4.667 0 5.193 0 5.833zm14.833-1.166H8.5v3 1h6.167.167C15.473 8.667 16 8.14 16 7.5V5.833c0-.64-.527-1.167-1.167-1.167z" /><path d="M8 5.363a.5.5 0 0 1-.495-.573C7.752 3.123 9.054-.03 12.219-.03c1.807.001 2.447.977 2.447 1.813 0 1.486-2.069 3.58-6.667 3.58zM12.219.971c-2.388 0-3.295 2.27-3.595 3.377 1.884-.088 3.072-.565 3.756-.971.949-.563 1.287-1.193 1.287-1.595 0-.599-.747-.811-1.447-.811z" /><path d="M8.001 5.363c-4.598 0-6.667-2.094-6.667-3.58 0-.836.641-1.812 2.448-1.812 3.165 0 4.467 3.153 4.713 4.819a.5.5 0 0 1-.495.573zM3.782.971c-.7 0-1.448.213-1.448.812 0 .851 1.489 2.403 5.042 2.566C7.076 3.241 6.169.971 3.782.971z" /></svg>
                You have earned <span className="fw-semibold">+100 bonuses</span>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default ReviewDetails
