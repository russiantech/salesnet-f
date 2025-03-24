import React from 'react'

const ReviewForm = () => {
  return (
    <>
      <div className="modal fade" id="reviewForm" data-bs-backdrop="static" tabIndex={-1} aria-labelledby="reviewFormLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <form className="modal-content needs-validation" noValidate>
              <div className="modal-header d-block pb-3">
                <div className="d-flex align-items-center mb-3">
                  <h5 className="modal-title" id="reviewFormLabel">Leave a review for:</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="d-flex align-items-center">
                  <a className="flex-shrink-0" href="shop-product-general-electronics.html">
                    <img src="/assets/img/shop/electronics/thumbs/10.png" width={110} alt="MacBook" />
                  </a>
                  <div className="w-100 min-w-0 ps-2 ps-sm-3">
                    <h5 className="d-flex animate-underline mb-2">
                      <a className="d-block fs-sm fw-medium text-truncate animate-target" href="shop-product-general-electronics.html">Apple iPhone 14 Plus 128GB Blue</a>
                    </h5>
                    <div className="h6 mb-0">$940.00</div>
                  </div>
                </div>
              </div>
              <div className="modal-body pb-3">
                <div className="mb-3">
                  <label htmlFor="review-name" className="form-label">Your name</label>
                  <input type="text" className="form-control" id="review-name" defaultValue="Susan Gardner" readOnly />
                  <div className="invalid-feedback">Please enter your name!</div>
                  <small className="form-text">Will be displayed on the comment.</small>
                </div>
                <div className="mb-3">
                  <label className="form-label">Rating <span className="text-danger">*</span></label>
                  <select className="form-select" data-select="{
                    &quot;placeholderValue&quot;: &quot;Choose rating&quot;,
                    &quot;choices&quot;: [
                      {
                        &quot;value&quot;: &quot;&quot;,
                        &quot;label&quot;: &quot;Choose rating&quot;,
                        &quot;placeholder&quot;: true
                      },
                      {
                        &quot;value&quot;: &quot;1&quot;,
                        &quot;label&quot;: &quot;<span class=\&quot;visually-hidden\&quot;>1 star</span>&quot;,
                        &quot;customProperties&quot;: {
                          &quot;icon&quot;: &quot;<span class=\&quot;d-flex gap-1 py-1\&quot;><i class=\&quot;ci-star-filled text-warning\&quot;></i></span>&quot;,
                          &quot;selected&quot;: &quot;1 star&quot;
                        }
                      },
                      {
                        &quot;value&quot;: &quot;2&quot;,
                        &quot;label&quot;: &quot;<span class=\&quot;visually-hidden\&quot;>2 stars</span>&quot;,
                        &quot;customProperties&quot;: {
                          &quot;icon&quot;: &quot;<span class=\&quot;d-flex gap-1 py-1\&quot;><i class=\&quot;ci-star-filled text-warning\&quot;></i><i class=\&quot;ci-star-filled text-warning\&quot;></i></span>&quot;,
                          &quot;selected&quot;: &quot;2 stars&quot;
                        }
                      },
                      {
                        &quot;value&quot;: &quot;3&quot;,
                        &quot;label&quot;: &quot;<span class=\&quot;visually-hidden\&quot;>3 stars</span>&quot;,
                        &quot;customProperties&quot;: {
                          &quot;icon&quot;: &quot;<span class=\&quot;d-flex gap-1 py-1\&quot;><i class=\&quot;ci-star-filled text-warning\&quot;></i><i class=\&quot;ci-star-filled text-warning\&quot;></i><i class=\&quot;ci-star-filled text-warning\&quot;></i></span>&quot;,
                          &quot;selected&quot;: &quot;3 stars&quot;
                        }
                      },
                      {
                        &quot;value&quot;: &quot;4&quot;,
                        &quot;label&quot;: &quot;<span class=\&quot;visually-hidden\&quot;>4 stars</span>&quot;,
                        &quot;customProperties&quot;: {
                          &quot;icon&quot;: &quot;<span class=\&quot;d-flex gap-1 py-1\&quot;><i class=\&quot;ci-star-filled text-warning\&quot;></i><i class=\&quot;ci-star-filled text-warning\&quot;></i><i class=\&quot;ci-star-filled text-warning\&quot;></i><i class=\&quot;ci-star-filled text-warning\&quot;></i></span>&quot;,
                          &quot;selected&quot;: &quot;4 stars&quot;
                        }
                      },
                      {
                        &quot;value&quot;: &quot;5&quot;,
                        &quot;label&quot;: &quot;<span class=\&quot;visually-hidden\&quot;>5 stars</span>&quot;,
                        &quot;customProperties&quot;: {
                          &quot;icon&quot;: &quot;<span class=\&quot;d-flex gap-1 py-1\&quot;><i class=\&quot;ci-star-filled text-warning\&quot;></i><i class=\&quot;ci-star-filled text-warning\&quot;></i><i class=\&quot;ci-star-filled text-warning\&quot;></i><i class=\&quot;ci-star-filled text-warning\&quot;></i><i class=\&quot;ci-star-filled text-warning\&quot;></i></span>&quot;,
                          &quot;selected&quot;: &quot;5 stars&quot;
                        }
                      }
                    ]
                  }" data-select-template="true" required />
                  <div className="invalid-feedback">Please choose your rating!</div>
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="review-text">Review <span className="text-danger">*</span></label>
                  <textarea className="form-control" rows={4} id="review-text" required defaultValue={""} />
                  <div className="invalid-feedback">Please write a review!</div>
                  <small className="form-text">Your review must be at least 50 characters.</small>
                </div>
                <div className="mb-3">
                  <label className="form-label">Pros</label>
                  <input type="text" className="form-select" data-select="{&quot;placeholderValue&quot;: &quot;Type and hit \&quot;Enter\&quot;&quot;}" />
                </div>
                <div>
                  <label className="form-label">Cons</label>
                  <input type="text" className="form-select" data-select="{&quot;placeholderValue&quot;: &quot;Type and hit \&quot;Enter\&quot;&quot;}" />
                </div>
              </div>
              <div className="modal-footer flex-nowrap gap-3 border-0 px-4">
                <button type="reset" className="btn btn-secondary w-100 m-0" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" className="btn btn-primary w-100 m-0">Submit review</button>
              </div>
            </form>
          </div>
        </div>
    </>
  )
}

export default ReviewForm
