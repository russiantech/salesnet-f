import React from 'react'

const Publish = () => {
  return (
    // <!-- Extra large modal -->
    <div className="modal fade" id="PublishPage" tabindex="-1" role="dialog">
      <div className="modal-dialog modal-xl" role="document">
        <div className="modal-content">
          {<PublishPage />}
        </div>
      </div>
    </div>
  )
}

export default Publish

const PublishPage = () => {
  return (
    <div className="container pt-4 justify-content-center">
      <div className="row pt-sm-2" style={{ marginLeft: "-15px", marginRight: "-15px" }}>
        {/* Tabs-like behavior */}
        <section id="pills-tabs" className="docs-section">
          <h4>Sales is real, works like charm..</h4>
          <div className="card border-0 shadow - row g-0 overflow-x-auto pb-3 mb-2 mb-md-3 mb-lg-4" data-simplebar data-simplebar-auto-hide="false">
            {/* <span className="d-none d-block-dark position-absolute top-0 start-0 w-100 h-100 bg-dark rounded opacity-50" /> */}
            <div className="card-body position-relative z-2 col-auto">
              {/* Nav pills */}
              <ul className="nav nav-pills mb-3 - flex-nowrap gap-2 text-nowrap pb-3" role="tablist">
                <li className="nav-item" role="presentation">
                  <button type="button" className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">
                    <i className="fi-home me-2 ms-n1" />
                    Home
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button type="button" className="nav-link" id="pills-listing-type-tab" data-bs-toggle="pill" data-bs-target="#pills-listing-type" role="tab" aria-controls="pills-listing-type" aria-selected="true">
                    <i className="fi-home me-2 ms-n1" />
                    Listing Type:
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-images-tab" data-bs-toggle="pill" data-bs-target="#pills-images" type="button" role="tab" aria-controls="pills-images" aria-selected="false">
                    <i className="fi-user me-2 ms-n1" />
                    Images &amp; Videos
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                    <i className="fi-map-pin me-2 ms-n1" />
                    Contact
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-location-tab" data-bs-toggle="pill" data-bs-target="#pills-location" type="button" role="tab" aria-controls="pills-location" aria-selected="false">
                    <i className="fi-map-pin me-2 ms-n1" />
                    Location
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-promote-tab" data-bs-toggle="pill" data-bs-target="#pills-promote" type="button" role="tab" aria-controls="pills-promote" aria-selected="false">
                    <i className="fi-map-pin me-2 ms-n1" />
                    Promote / Boast
                  </button>
                </li>
              </ul>
              {/* Pills content */}
              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                  {/*  */}
                  <section className="position-relative bg-body rounded p-4 mt-4">
                    <div className="position-relative z-1 pb-md-2 px-md-2">
                      <h2 className="h4 mb-3 mb-sm-4">Listing details</h2>
                      <div className="row row-cols-1 row-cols-sm-2 g-3 g-md-4 mb-3 mb-md-4">
                        <div className="col">
                          <label htmlFor="product_name" className="form-label">Product name.</label>
                          <input type="text" className="form-control form-control-lg" id="product_name" name="product_name" min={10} placeholder="Product name." />
                        </div>
                        <div className="col">
                          <label htmlFor="product_categories" className="form-label d-flex align-items-center">Categories <i className="fi-info fs-base ms-2" data-bs-toggle="tooltip" aria-label="Measured at a steady pace of 65 mph" data-bs-original-title="Measured at a steady pace of 65 mph" /></label>
                          {/* Large rounded select */}
                          <div className="mb-3">
                            <select className="form-select form-select-lg" name="product_categories">
                              <option value>Select option...</option>
                              <option value={1}>Option 1</option>
                              <option value={2}>Option 2</option>
                              <option value={3}>Option 3</option>
                            </select>
                          </div>
                        </div>
                        <div className="col">
                          <label htmlFor="product_price" className="form-label">Price</label>
                          <input type="number" className="form-control form-control-lg" id="product_price" />
                        </div>
                        <div className="col">
                          <label htmlFor="product_condition" className="form-label">Condition</label>
                          <select className="form-select form-select-lg" id="product_condition" name="product_condition">
                            <option value>Select option...</option>
                            <option value={1}>Used Item</option>
                            <option value={2}>Brand New</option>
                          </select>
                        </div>
                      </div>
                      <label htmlFor="description" className="form-label fs-6 fw-semibold">Description *</label>
                      <p className="fs-sm mb-2">Here you can let your imagination run wild and describe the car in the best possible way!</p>
                      <textarea className="form-control form-control-lg" rows={5} id="product_description" name="product_description" placeholder="Maximum 300 characters" required data-listener-added_f37f4a2c="true" defaultValue={""} />
                      <span id="monica-writing-entry-btn-root" style={{ position: 'absolute', left: '0px', top: '0px', pointerEvents: 'none' }} /></div>
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark rounded d-none d-block-dark" />
                  </section>
                  {/*  */}
                </div>
                <div className="tab-pane fade" id="pills-listing-type" role="tabpanel" aria-labelledby="pills-listing-tab">

                  <section className="container pt-2 mt-1 mt-sm-3 mt-lg-4">
                      <div className="row">
                        {/* <label className="form-label pb-1 mb-2">Model</label> */}
                        <h4 className="h4 mb-3 mb-sm-4">Select a listing type</h4>
                        <div className="d-flex flex-wrap gap-2">
                          <input
                            type="radio"
                            className="btn-check"
                            name="model-options"
                            id="model-1"
                            defaultChecked=""
                          />
                          <label htmlFor="model-1" className="btn btn-sm border-2 btn-outline-secondary">
                            <div className="d-flex flex-column flex-xxl-row align-items-center">
                              <div className="d-flex text-dark-emphasis bg-body-tertiary rounded-circle p-4 mb-3 mb-xxl-0">
                                <i className="ci-delivery fs-2 m-xxl-1" />
                              </div>
                              <div className="text-center text-xxl-start ps-xxl-3">
                                <h3 className="h6 mb-1">Sell an item</h3>
                              </div>
                            </div>
                          </label>
                          <input
                            type="radio"
                            className="btn-check"
                            name="model-options"
                            id="model-2"
                          />
                          <label htmlFor="model-2" className="btn btn-sm border-2  btn-outline-secondary">
                            <div className="d-flex flex-column flex-xxl-row align-items-center">
                              <div className="d-flex text-dark-emphasis bg-body-tertiary rounded-circle p-4 mb-3 mb-xxl-0">
                                <i className="ci-chat fs-2 m-xxl-1" />
                              </div>
                              <div className="text-center text-xxl-start ps-xxl-3">
                                <h3 className="h6 mb-1">Offer a service</h3>
                              </div>
                            </div>
                          </label>

                          <input
                            type="radio"
                            className="btn-check"
                            name="model-options"
                            id="model-3"
                          />
                          <label htmlFor="model-3" className="btn btn-sm border-2 btn-outline-secondary">
                            <div className="d-flex flex-column flex-xxl-row align-items-center">
                              <div className="d-flex text-dark-emphasis bg-body-tertiary rounded-circle p-4 mb-3 mb-xxl-0">
                                <i className="ci-credit-card fs-2 m-xxl-1" />
                              </div>
                              <div className="text-center text-xxl-start ps-xxl-3">
                                <h3 className="h6 mb-1">Sell a property</h3>
                              </div>
                            </div>
                          </label>
                          <input
                            type="radio"
                            className="btn-check"
                            name="model-options"
                            id="model-4"
                            disabled=""
                          />
                          <label htmlFor="model-4" className="btn btn-sm border-2 btn-outline-secondary">
                            <div className="d-flex flex-column flex-xxl-row align-items-center">
                              <div className="d-flex text-dark-emphasis bg-body-tertiary rounded-circle p-4 mb-3 mb-xxl-0">
                                <i className="ci-refresh-cw fs-2 m-xxl-1" />
                              </div>
                              <div className="text-center text-xxl-start ps-xxl-3">
                                <h3 className="h6 mb-1">Sell a car</h3>
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>
                  </section>
                </div>

                <div className="tab-pane fade" id="pills-images" role="tabpanel" aria-labelledby="pills-images-tab">
                  <section className="position-relative bg-body rounded p-4 mt-4">
                    <div className="position-relative z-1 pb-md-2 px-md-2">
                      <div className="d-sm-flex align-items-center justify-content-between mb-3 mb-sm-4">
                        <h2 className="h4 mb-2 mb-sm-0 me-3">Photos / videos</h2>
                        <div className="position-relative d-flex">
                          <i className="fi-info text-info mt-1 me-2" />
                          <a className="fs-sm fw-medium stretched-link text-bg-light rounded" href="#!">How tos</a>
                        </div>
                      </div>
                      <small className="fs-sm text-warning">The maximum photo size is 8 MB. Formats: jpeg, jpg, png. Put the main picture first.</small>
                      <div style={{ maxWidth: '852px' }}>
                        <div className="row row-cols-2 row-cols-sm-3 g-2 g-md-4 g-lg-3 g-xl-4">
                          {/* Item */}
                          <div className="col">
                            <div className="hover-effect-opacity position-relative overflow-hidden rounded">
                              <span className="badge text-bg-light position-absolute top-0 start-0 z-3 mt-2 ms-2">Cover</span>
                              <div className="ratio" style={{ '-fn-aspect-ratio': 'calc(180 / 268 * 100%)' }}>
                                <img src="../assets/img/pages/products/upload_01.jpg" alt="Image" />
                              </div>
                              <div className="hover-effect-target position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 opacity-0">
                                <button type="button" className="btn btn-icon btn-sm btn-light position-relative z-2" aria-label="Remove">
                                  <i className="fi-trash fs-base" />
                                </button>
                                <span className="position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-25 z-1" />
                              </div>
                            </div>
                          </div>
                          {/* Item */}
                          <div className="col">
                            <div className="hover-effect-opacity position-relative overflow-hidden rounded">
                              <div className="ratio" style={{ '-fn-aspect-ratio': 'calc(180 / 268 * 100%)' }}>
                                <img src="../assets/img/pages/products/upload_02.jpg" alt="Image" />
                              </div>
                              <div className="hover-effect-target position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 opacity-0">
                                <button type="button" className="btn btn-icon btn-sm btn-light position-relative z-2" aria-label="Remove">
                                  <i className="fi-trash fs-base" />
                                </button>
                                <span className="position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-25 z-1" />
                              </div>
                            </div>
                          </div>
                          {/* Item */}
                          <div className="col">
                            <div className="hover-effect-opacity position-relative overflow-hidden rounded">
                              <div className="ratio" style={{ '-fn-aspect-ratio': 'calc(180 / 268 * 100%)' }}>
                                <img src="../assets/img/add-item/car/03.jpg" alt="Image" />
                              </div>
                              <div className="hover-effect-target position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 opacity-0">
                                <button type="button" className="btn btn-icon btn-sm btn-light position-relative z-2" aria-label="Remove">
                                  <i className="fi-trash fs-base" />
                                </button>
                                <span className="position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-25 z-1" />
                              </div>
                            </div>
                          </div>
                          {/* Item */}
                          <div className="col">
                            <div className="hover-effect-opacity position-relative overflow-hidden rounded">
                              <div className="ratio" style={{ '-fn-aspect-ratio': 'calc(180 / 268 * 100%)' }}>
                                <img src="../assets/img/add-item/car/04.jpg" alt="Image" />
                              </div>
                              <div className="hover-effect-target position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 opacity-0">
                                <button type="button" className="btn btn-icon btn-sm btn-light position-relative z-2" aria-label="Remove">
                                  <i className="fi-trash fs-base" />
                                </button>
                                <span className="position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-25 z-1" />
                              </div>
                            </div>
                          </div>
                          {/* Upload button */}
                          <div className="col">
                            <div className="d-flex align-items-center justify-content-center position-relative h-100 cursor-pointer bg-body-tertiary border border-2 border-dotted rounded p-3">
                              <div className="text-center">
                                <i className="fi-plus-circle fs-4 text-secondary-emphasis mb-2" />
                                <div className="hover-effect-underline stretched-link fs-sm fw-medium">Upload photos / videos</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-3 mt-2 mt-md-3">
                        <label htmlFor="link" className="form-label">Link to the video online.</label>
                        <div className="position-relative">
                          <i className="fi-link position-absolute top-50 start-0 translate-middle-y fs-lg ms-3" />
                          <input type="url" className="form-control form-control-lg form-icon-start" id="link" placeholder="www.youtube.com/..." />
                        </div>
                      </div>
                    </div>
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark rounded d-none d-block-dark" />
                  </section>
                </div>
                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                  <section className="position-relative bg-body rounded p-4 mt-4">
                    <div className="position-relative z-1 pb-md-2 px-md-2">
                      <h2 className="h4 mb-3 mb-sm-4">Contacts</h2>
                      <div className="nav nav-pills flex-wrap gap-3 mb-3 mb-sm-4">
                        <div>
                          <input type="radio" className="btn-check" id="private" name="seller" defaultChecked />
                          <label className="nav-link" htmlFor="private">
                            <i className="fi-user fs-base ms-n1 me-2" />
                            Delivery Available
                          </label>
                        </div>
                        <div>
                          <input type="radio" className="btn-check" id="dealer" name="seller" />
                          <label className="nav-link" htmlFor="dealer">
                            <i className="fi-briefcase fs-base ms-n1 me-2" />
                            Pick-up only.
                          </label>
                        </div>
                      </div>
                      <div className="row row-cols-1 row-cols-sm-2 g-3 g-md-4">
                        <div className="col">
                          <label htmlFor="fn" className="form-label">First name *</label>
                          <input type="text" className="form-control form-control-lg" id="fn" required />
                        </div>
                        <div className="col">
                          <label htmlFor="ln" className="form-label">Last name *</label>
                          <input type="text" className="form-control form-control-lg" id="ln" required />
                        </div>
                        <div className="col">
                          <label htmlFor="email" className="form-label">Email *</label>
                          <input type="email" className="form-control form-control-lg" id="email" required />
                        </div>
                        <div className="col">
                          <label htmlFor="phone" className="form-label">Phone number *</label>
                          <input type="tel" className="form-control form-control-lg" id="phone" data-input-format="{&quot;numericOnly&quot;: true, &quot;delimiters&quot;: [&quot;(&quot;, &quot;)&quot;, &quot; &quot;, &quot;-&quot;, &quot; &quot;], &quot;blocks&quot;: [0, 3, 0, 3, 4]}" placeholder="(___) ___-____" required />
                        </div>
                        <div className="col">
                          <div className="form-check mb-0">
                            <input type="checkbox" className="form-check-input" id="dealer-ready" />
                            <label htmlFor="dealer-ready" className="form-check-label">Ready to cooperate with dealers</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark rounded d-none d-block-dark" />
                  </section>
                </div>
                <div className="tab-pane fade" id="pills-location" role="tabpanel" aria-labelledby="pills-location-tab">
                  {/*  */}
                  <section className="position-relative bg-body rounded p-4 mt-4">
                    <div className="position-relative z-1 pb-md-2 px-md-2">
                      <h2 className="h4 mb-3 mb-sm-4">Location</h2>
                      {/* <div class="nav nav-pills flex-wrap gap-3 mb-3 mb-sm-4">
                                      <div>
                                        <input type="radio" class="btn-check" id="private" name="seller" checked="">
                                        <label class="nav-link" for="private">
                                          <i class="fi-user fs-base ms-n1 me-2"></i>
                                          Delivery Available
                                        </label>
                                      </div>
                                      <div>
                                        <input type="radio" class="btn-check" id="dealer" name="seller">
                                        <label class="nav-link" for="dealer">
                                          <i class="fi-briefcase fs-base ms-n1 me-2"></i>
                                          Pick-up only.
                                        </label>
                                      </div>
                                    </div> */}
                      <div className="row g-3 g-md-4">
                        <form id="update_address_form_52" method="put" action="addresses" className="update-form row g-3 g-sm-4 needs-validation" noValidate>
                          <div className="col-sm-4">
                            <div className="position-relative">
                              <label className="form-label">Country</label>
                              <select name="country" className="form-select" id="countrySelect0" required>
                                <option value>Select country...</option>
                                {/* Options will be populated dynamically */}
                                <option value={3} selected="false">Afghanistan</option>
                                <option value={124} selected="false">South Korea</option>
                              </select>
                              <div className="invalid-feedback">Please select your country!</div>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="position-relative">
                              <label className="form-label">State</label>
                              <select name="state" className="form-select" id="stateSelect0" required disabled>
                                <option value>Select State...</option>
                                {/* Options will be populated dynamically */}
                              </select>
                              <div className="invalid-feedback">Please select your state!</div>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="position-relative">
                              <label className="form-label">City</label>
                              <select name="city" className="form-select" id="citySelect0" required disabled>
                                <option value>Select city...</option>
                                {/* Options will be populated dynamically */}
                              </select>
                              <div className="invalid-feedback">Please select your city!</div>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="position-relative">
                              <label htmlFor="zip-0" className="form-label">ZIP code</label>
                              <input name="zip_code" type="text" className="form-control" id="zip-0" defaultValue={110012} required />
                              <div className="invalid-feedback">Please enter your ZIP code!</div>
                            </div>
                          </div>
                          <div className="col-sm-8">
                            <div className="position-relative">
                              <label htmlFor="address-0" className="form-label">Address</label>
                              <input type="text" name="address" className="form-control" id="address-0" defaultValue="Str. of Harizona" required />
                              <div className="invalid-feedback">Please enter your address!</div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="tab-pane fade" id="pills-promote" role="tabpanel" aria-labelledby="pills-promote-tab">
                  {/*  */}
                  <div className="overflow-x-auto">
                    <div className="d-flex gap-4 pt-5 pb-3 mb-1">
                      {/* Plan */}
                      <div className="w-100" style={{ minWidth: '290px' }}>
                        <div className="card h-100 bg-body-tertiary border-0 rounded-5 p-3">
                          <div className="card-body p-2 p-xl-3">
                            <svg className="d-block mb-3 mb-xl-4" xmlns="http://www.w3.org/2000/svg" width={56} height={56} fill="none"><path className="text-primary" d="M51.729 34.356c.085-.254.17-.508.17-.763-2.119 9.068-9.237 16.187-18.305 18.305.254-.085.508-.085.678-.169l-3.475-13.051a10.99 10.99 0 0 0 7.797-7.797l13.136 3.475zm.169-12.034c-.085-.254-.085-.508-.169-.763l-13.051 3.475a10.99 10.99 0 0 0-7.797-7.797l3.475-13.051c-.254-.085-.508-.085-.678-.17 8.983 2.203 16.102 9.322 18.22 18.305zM21.644 4.271l3.475 13.051a10.99 10.99 0 0 0-7.797 7.797L4.271 21.644c-.085.254-.085.509-.17.763C6.22 13.339 13.339 6.22 22.406 4.102c-.254 0-.509.085-.763.17zm3.475 34.407l-3.559 13.136c.254.085.508.085.763.169-9.068-2.119-16.186-9.237-18.305-18.305.085.254.085.508.17.763l13.051-3.475c1.102 3.644 4.153 6.695 7.881 7.712z" fill="currentColor" /><path className="text-secondary-emphasis" d="M45.797 53h-5.085a.4.4 0 1 1 0-.847h5.085c3.475 0 6.356-2.881 6.356-6.356v-5.085a.4.4 0 1 1 .847 0v5.085A7.2 7.2 0 0 1 45.797 53zM28 53c-2.203 0-4.322-.254-6.441-.847-.254-.085-.339-.254-.339-.508l3.39-12.712c-3.644-1.102-6.441-3.983-7.542-7.542L4.356 34.78c-.254.085-.424-.085-.508-.339C3.254 32.322 3 30.203 3 28s.254-4.322.847-6.441c.085-.254.254-.339.508-.339l12.712 3.39c1.102-3.644 3.983-6.441 7.542-7.542L21.22 4.356c-.085-.254.085-.424.339-.508C23.678 3.254 25.797 3 28 3s4.322.254 6.441.847c.254.085.339.254.339.508l-3.39 12.712c3.644 1.102 6.441 3.983 7.542 7.542l12.712-3.39c.254-.085.424.085.509.339.593 2.119.847 4.237.847 6.441s-.254 4.322-.847 6.441c-.085.254-.254.339-.509.339l-12.712-3.39c-1.102 3.644-3.983 6.441-7.542 7.542l3.39 12.712c.085.254-.085.424-.339.509-2.119.593-4.237.847-6.441.847zm-5.847-1.525c1.949.508 3.814.678 5.848.678s3.898-.254 5.847-.678l-3.305-12.288c-1.61.339-3.475.339-5.085 0l-3.305 12.288zm3.136-13.22a11.73 11.73 0 0 0 5.424 0c3.644-1.017 6.441-3.813 7.458-7.457.254-.848.339-1.78.339-2.712s-.085-1.864-.339-2.712c-1.017-3.644-3.814-6.441-7.458-7.458a11.73 11.73 0 0 0-5.424 0c-3.644 1.017-6.441 3.814-7.458 7.458-.254.847-.339 1.78-.339 2.712s.085 1.864.339 2.712c.932 3.559 3.813 6.441 7.458 7.457zm13.898-7.712l12.288 3.305c.508-1.949.678-3.814.678-5.847s-.254-3.898-.678-5.847l-12.288 3.305c.169.847.254 1.695.254 2.542s-.085 1.695-.254 2.542zm-34.661-8.39c-.508 1.949-.678 3.814-.678 5.848s.254 3.898.678 5.847l12.288-3.305c-.17-.847-.254-1.695-.254-2.542s.085-1.695.254-2.542L4.525 22.153zM22.153 4.525l3.305 12.288c1.61-.339 3.475-.339 5.085 0l3.305-12.288c-1.949-.508-3.814-.678-5.847-.678s-3.898.254-5.847.678zM15.288 53h-5.085A7.2 7.2 0 0 1 3 45.797v-5.085a.4.4 0 0 1 .424-.424.4.4 0 0 1 .424.424v5.085c0 3.475 2.881 6.356 6.356 6.356h5.085a.4.4 0 1 1 0 .847zm22.034-1.864c-.169 0-.339-.085-.424-.254-.085-.254 0-.424.254-.593 5.932-2.458 10.763-7.203 13.22-13.136.085-.254.339-.339.593-.254s.339.339.254.593c-2.542 6.102-7.542 11.102-13.644 13.644h-.254zm-18.644 0h-.169c-6.102-2.542-11.102-7.542-13.644-13.644-.085-.254 0-.424.254-.593.254-.085.424 0 .593.254 2.458 5.932 7.203 10.763 13.136 13.22.254.085.339.339.254.593a.65.65 0 0 1-.424.169zm32.034-32.034c-.17 0-.339-.085-.424-.254-2.458-5.932-7.203-10.763-13.136-13.22-.254-.085-.339-.339-.254-.593s.339-.339.593-.254c6.102 2.542 11.102 7.458 13.644 13.644.085.254 0 .424-.254.593 0 .085-.085.085-.169.085zm-45.424 0h-.17c-.254-.085-.339-.339-.254-.593 2.542-6.102 7.542-11.102 13.644-13.644.254-.085.424 0 .593.254.085.254 0 .424-.254.593-5.932 2.458-10.763 7.203-13.22 13.136 0 .169-.169.254-.339.254zm47.288-3.39a.4.4 0 0 1-.424-.424v-5.085c0-3.475-2.881-6.356-6.356-6.356h-5.085a.4.4 0 0 1-.424-.424.4.4 0 0 1 .424-.424h5.085A7.2 7.2 0 0 1 53 10.203v5.085a.4.4 0 0 1-.424.424zm-49.152 0A.4.4 0 0 1 3 15.288v-5.085A7.2 7.2 0 0 1 10.203 3h5.085a.4.4 0 0 1 .424.424.4.4 0 0 1-.424.424h-5.085c-3.475 0-6.356 2.881-6.356 6.356v5.085a.4.4 0 0 1-.424.424z" fill="currentColor" /></svg>
                            <h3 className="fs-lg fw-normal">Easy Start</h3>
                            <div className="d-flex align-items-center pb-1 pb-xl-0 mb-2 mb-xl-3">
                              <div className="h1 mb-0">$25</div>
                              <div className="fs-sm ms-2">/ month</div>
                            </div>
                            <p className="fs-sm mb-xl-4">Ideal if you're testing the waters and want to start with basic exposure.</p>
                            <button type="button" className="btn btn-lg btn-outline-info w-100">Select Easy Start</button>
                            <ul className="list-unstyled gap-md-3 fs-sm text-dark-emphasis pt-4 mt-lg-1 mt-xl-2 mb-0">
                              <li className="d-flex">
                                <i className="fi-check fs-base text-body-secondary me-2" style={{ marginTop: '3px' }} />
                                7-Day Run for your ad active for one weeks
                              </li>
                              <li className="d-flex">
                                <i className="fi-check fs-base text-body-secondary me-2" style={{ marginTop: '3px' }} />
                                Keep your ad live and active for one week
                              </li>
                              <li className="d-flex">
                                <i className="fi-check fs-base text-body-secondary me-2" style={{ marginTop: '3px' }} />
                                Track views and basic engagement metrics
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* Featured plan */}
                      <div className="w-100" style={{ minWidth: '290px' }}>
                        <div className="position-relative h-100">
                          <div className="card position-relative h-100 z-2 bg-body-tertiary border-0 rounded-5 p-3">
                            <div className="card-body p-2 p-xl-3">
                              <svg className="d-block mb-3 mb-xl-4" xmlns="http://www.w3.org/2000/svg" width={56} height={56} fill="none"><path className="text-info" d="M44.136 9.966c5.79 4.746 9.491 11.864 9.491 19.932 0 14.142-11.485 25.627-25.627 25.627S2.373 44.041 2.373 29.898 13.858 4.271 28 4.271v5.695c-11.01 0-19.932 8.922-19.932 19.932S16.99 49.831 28 49.831s19.932-8.922 19.932-19.932c0-7.973-4.746-14.807-11.485-18.034h.095 7.593V9.966z" fill="currentColor" /><path className="text-primary" d="M44.136 9.966v1.898h-7.593V9.966 2.373h7.593v7.593z" fill="currentColor" /><path className="text-info" d="M28 21.356c-4.746 0-8.542 3.797-8.542 8.542s3.797 8.542 8.542 8.542 8.542-3.797 8.542-8.542-3.796-8.542-8.542-8.542zm0-5.695a14.22 14.22 0 0 1 14.237 14.237A14.22 14.22 0 0 1 28 44.136a14.22 14.22 0 0 1-14.237-14.237A14.22 14.22 0 0 1 28 15.661z" fill="currentColor" /><path className="text-primary" d="M36.543 2.373v7.593h-.949-7.593V4.271.475h8.542v1.898zM28 27.051c1.614 0 2.847 1.234 2.847 2.848S29.614 32.746 28 32.746s-2.847-1.234-2.847-2.848 1.234-2.847 2.848-2.847z" fill="currentColor" /><path className="text-secondary-emphasis" d="M28 56A26.09 26.09 0 0 1 1.898 29.898c0-14.237 11.485-25.817 25.627-26.102V.475c0-.285.19-.475.475-.475h8.542c.285 0 .475.19.475.475V11.39h6.644V2.847h-3.322c-.285 0-.475-.19-.475-.475s.19-.475.475-.475h3.797c.285 0 .475.19.475.475v9.491c0 .285-.19.475-.475.475h-7.593c-.285 0-.475-.19-.475-.475v-1.424h-4.271c-.285 0-.475-.19-.475-.475s.19-.475.475-.475h4.271V.949h-7.593v28.949c0 .285-.19.475-.475.475s-.475-.19-.475-.475V27.62c-1.044.19-1.898 1.139-1.898 2.278A2.35 2.35 0 0 0 28 32.271a2.35 2.35 0 0 0 2.373-2.373c0-.285.19-.475.475-.475s.475.19.475.475c0 1.803-1.519 3.322-3.322 3.322s-3.322-1.519-3.322-3.322c0-1.708 1.234-3.037 2.847-3.322V21.83c-4.271.285-7.593 3.797-7.593 8.068A8.06 8.06 0 0 0 28 37.966c4.461 0 8.068-3.607 8.068-8.068 0-3.132-1.709-5.885-4.461-7.213-.19-.095-.285-.38-.19-.664.095-.19.38-.285.664-.19 3.132 1.519 5.031 4.651 5.031 8.068 0 4.936-4.081 9.017-9.017 9.017s-9.016-4.081-9.016-9.017c0-4.841 3.797-8.732 8.542-9.017v-4.746c-7.403.285-13.288 6.359-13.288 13.763 0 7.593 6.169 13.763 13.763 13.763s13.763-6.169 13.763-13.763c0-5.79-3.702-11.01-9.207-13.003-.285-.095-.38-.38-.285-.57s.38-.38.569-.285c5.885 2.088 9.776 7.688 9.776 13.858 0 8.068-6.644 14.712-14.712 14.712s-14.712-6.644-14.712-14.712c0-7.973 6.359-14.427 14.237-14.712v-4.746c-10.536.285-18.983 8.922-18.983 19.458 0 10.725 8.732 19.458 19.458 19.458s19.458-8.732 19.458-19.458c0-5.315-2.088-10.251-5.885-13.858-.19-.19-.19-.475 0-.664a.46.46 0 0 1 .664 0c3.986 3.892 6.17 9.017 6.17 14.617A20.38 20.38 0 0 1 28 50.4 20.38 20.38 0 0 1 7.593 29.993c0-11.105 8.922-20.122 19.932-20.407V4.841c-13.668.285-24.678 11.39-24.678 25.153 0 13.858 11.295 25.152 25.153 25.152s25.153-11.295 25.153-25.152a25.23 25.23 0 0 0-5.6-15.851c-.19-.19-.095-.475.095-.664s.475-.095.664.095c3.797 4.651 5.79 10.441 5.79 16.42C54.102 44.325 42.427 56 28 56z" fill="currentColor" /></svg>
                              <h3 className="fs-lg fw-normal">Fast Sale</h3>
                              <div className="d-flex align-items-center pb-1 pb-xl-0 mb-2 mb-xl-3">
                                <div className="h1 mb-0">$49</div>
                                <div className="fs-sm ms-2">/ month</div>
                              </div>
                              <p className="fs-sm mb-xl-4">Perfect for serious sellers who want more exposure and detailed insights.</p>
                              <button type="button" className="btn btn-lg btn-info w-100">Select Fast Sale</button>
                              <div className="h6 fs-sm pt-4 mt-lg-1 mt-xl-2">Includes everything in Easy Start +</div>
                              <ul className="list-unstyled gap-md-3 fs-sm text-dark-emphasis mb-0">
                                <li className="d-flex">
                                  <i className="fi-check fs-base text-body-secondary me-2" style={{ marginTop: '3px' }} />
                                  14-Day Run for your ad active for two weeks
                                </li>
                                <li className="d-flex">
                                  <i className="fi-check fs-base text-body-secondary me-2" style={{ marginTop: '3px' }} />
                                  Detailed user engagement analytics
                                </li>
                                <li className="d-flex">
                                  <i className="fi-check fs-base text-body-secondary me-2" style={{ marginTop: '3px' }} />
                                  Dedicated assistance from our support team
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="position-absolute top-0 start-0 w-100 z-1 fs-sm fw-semibold text-white text-center" style={{ marginTop: '-27px' }}>Recommended</div>
                          <div className="position-absolute top-0 start-0 bg-info rounded-5 ms-n1" style={{ width: 'calc(100% + 8px)', height: 'calc(100% + 36px)', marginTop: '-32px' }} />
                        </div>
                      </div>
                      {/* Plan */}
                      <div className="w-100" style={{ minWidth: '290px' }}>
                        <div className="position-relative">
                          <div className="card position-relative h-100 z-1 bg-body-tertiary border-0 rounded-5 p-3">
                            <div className="card-body p-2 p-xl-3">
                              <svg className="d-block mb-3 mb-xl-4" xmlns="http://www.w3.org/2000/svg" width={56} height={56} fill="none"><g className="text-primary" fill="currentColor"><path d="M49.812 40.352v5.69h-11.38s-.664.664-1.897 1.422V24.23l3.793.948c1.043 0 1.897.854 1.897 1.897v7.587l1.897.948c1.897.948 5.69 2.655 5.69 4.742zM19.465 24.23v23.235c-1.233-.759-1.897-1.422-1.897-1.422H6.188v-5.69c0-2.086 3.793-3.793 5.69-4.742l1.897-.948v-7.587c0-1.043.853-1.897 1.897-1.897l3.793-.948z" /><path d="M30.845 16.644A2.79 2.79 0 0 0 28 13.799c-1.517 0-2.845 1.233-2.845 2.845s1.328 2.845 2.845 2.845a2.79 2.79 0 0 0 2.845-2.845zm-7.492-11.38s1.802.948 4.647.948 4.647-.948 4.647-.948c3.888 4.647 3.888 10.432 3.888 10.432v8.535 23.235c-1.707 1.043-4.647 2.371-8.535 2.371s-6.828-1.328-8.535-2.371V24.23v-8.535s0-5.785 3.888-10.432z" /></g><path className="text-secondary-emphasis" d="M44.122 56c-.285 0-.474-.19-.474-.474v-5.69c0-.285.19-.474.474-.474s.474.19.474.474v5.69c0 .285-.19.474-.474.474zm-32.244 0c-.284 0-.474-.19-.474-.474v-5.69c0-.285.19-.474.474-.474s.474.19.474.474v5.69c0 .285-.19.474-.474.474zm28.45-1.897c-.285 0-.474-.19-.474-.474v-3.793c0-.285.19-.474.474-.474s.474.19.474.474v3.793c0 .285-.19.474-.474.474zm-24.657 0c-.284 0-.474-.19-.474-.474v-3.793c0-.285.19-.474.474-.474s.474.19.474.474v3.793c0 .285-.19.474-.474.474zm32.244-1.897c-.285 0-.474-.19-.474-.474v-1.897c0-.285.19-.474.474-.474s.474.19.474.474v1.897c0 .285-.19.474-.474.474zm-39.831 0c-.285 0-.474-.19-.474-.474v-1.897c0-.285.19-.474.474-.474s.474.19.474.474v1.897c0 .285-.19.474-.474.474zM28 50.31c-6.069 0-9.863-3.129-10.622-3.793H6.188c-.285 0-.474-.19-.474-.474v-5.69c0-2.276 3.319-3.888 5.5-4.931l2.086-1.043v-7.302c0-1.328 1.043-2.371 2.371-2.371.284 0 .474.19.474.474s-.19.474-.474.474a1.46 1.46 0 0 0-1.422 1.422v7.587c0 .19-.095.379-.285.379l-2.371 1.138c-1.707.853-4.931 2.466-4.931 4.078v5.216h10.906c.095 0 .284.095.379.095 0 0 3.793 3.699 10.052 3.699s10.052-3.604 10.052-3.699c.095-.095.19-.095.379-.095h10.906v-5.121c0-1.612-3.224-3.224-4.931-4.078l-2.371-1.138c-.19-.095-.285-.285-.285-.379V27.17a1.46 1.46 0 0 0-1.423-1.423c-.285 0-.474-.19-.474-.474s.19-.474.474-.474c1.328 0 2.371 1.043 2.371 2.371v7.302l2.086 1.043c2.181 1.043 5.5 2.75 5.5 4.931v5.69c0 .285-.19.474-.474.474h-11.19C37.863 47.18 34.07 50.31 28 50.31zm0-3.793c-.285 0-.474-.19-.474-.474v-17.07c0-.285.19-.474.474-.474s.474.19.474.474v17.07c0 .285-.19.474-.474.474zm8.535-3.793c-.285 0-.474-.19-.474-.474V15.695c0-.095-.095-5.5-3.509-9.863-.664.285-2.276.854-4.552.854s-3.888-.569-4.552-.854c-3.509 4.362-3.509 9.768-3.509 9.863v26.554c0 .284-.19.474-.474.474s-.474-.19-.474-.474V15.695c0-.284.095-6.923 4.837-11.759L27.621.142c.19-.19.474-.19.664 0l3.793 3.793c4.837 4.837 4.837 11.475 4.837 11.759v26.554c.095.284-.095.474-.379.474zM24.112 5.074c.759.285 2.086.664 3.888.664s3.13-.379 3.888-.664c-.095-.19-.285-.285-.379-.379L28.095 1.28l-3.414 3.414c-.285.095-.379.285-.569.379zM28 19.963c-1.802 0-3.319-1.517-3.319-3.319s1.517-3.319 3.319-3.319 3.319 1.517 3.319 3.319-1.517 3.319-3.319 3.319zm0-5.69c-1.328 0-2.371 1.043-2.371 2.371s1.043 2.371 2.371 2.371 2.371-1.043 2.371-2.371-1.043-2.371-2.371-2.371z" fill="currentColor" /></svg>
                              <h3 className="fs-lg fw-normal">Turbo Boost</h3>
                              <div className="d-flex align-items-center pb-1 pb-xl-0 mb-2 mb-xl-3">
                                <div className="h1 mb-0">$70</div>
                                <div className="fs-sm ms-2">/ month</div>
                              </div>
                              <p className="fs-sm mb-xl-4">Best for ambitious sellers who want maximum exposure and advanced insights.</p>
                              <button type="button" className="btn btn-lg btn-outline-info w-100">Select Turbo Boost</button>
                              <div className="h6 fs-sm pt-4 mt-lg-1 mt-xl-2">Includes everything in Fast Sale +</div>
                              <ul className="list-unstyled gap-md-3 fs-sm text-dark-emphasis mb-0">
                                <li className="d-flex">
                                  <i className="fi-check fs-base text-body-secondary me-2" style={{ marginTop: '3px' }} />
                                  28-Day Run for your ad active for tree weeks
                                </li>
                                <li className="d-flex">
                                  <i className="fi-check fs-base text-body-secondary me-2" style={{ marginTop: '3px' }} />
                                  Advanced comprehensive data analysis
                                </li>
                                <li className="d-flex">
                                  <i className="fi-check fs-base text-body-secondary me-2" style={{ marginTop: '3px' }} />
                                  Personalized assistance from our manager
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <footer className="sticky-bottom bg-body pb-3">
              <div className="progress rounded-0" role="progressbar" aria-label="Dark example" aria-valuenow="85.71" aria-valuemin={0} aria-valuemax={100} style={{ height: '4px' }}>
                <div className="progress-bar bg-dark d-none-dark" style={{ width: '85.71%' }} />
                <div className="progress-bar bg-light d-none d-block-dark" style={{ width: '85.71%' }} />
              </div>
              <div className="container d-flex gap-3 pt-3">
                <a className="btn btn-outline-dark animate-slide-start" href="add-property-price.html">
                  <i className="fi-arrow-left animate-target fs-base ms-n1 me-2" />
                  Back
                </a>
                <a className="btn btn-dark animate-slide-end ms-auto" href="add-property-promotion.html">
                  Next
                  <i className="fi-arrow-right animate-target fs-base ms-2 me-n1" />
                </a>
              </div>
            </footer>
            {/*  */}
          </div>
        </section>
      </div>
    </div>
  )
}

import './PublishPage.css'; // Ensure you have this CSS file

