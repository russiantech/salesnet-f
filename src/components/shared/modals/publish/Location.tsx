import React from 'react';

const Location = ({ onChange }) => {
  return (
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
                          <div className="col-sm-6 col-md-4">
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
                          <div className="col-sm-6 col-md-4">
                            <div className="position-relative">
                              <label className="form-label">State</label>
                              <select name="state" className="form-select" id="stateSelect0" required disabled>
                                <option value>Select State...</option>
                                {/* Options will be populated dynamically */}
                              </select>
                              <div className="invalid-feedback">Please select your state!</div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-4">
                            <div className="position-relative">
                              <label className="form-label">City</label>
                              <select name="city" className="form-select" id="citySelect0" required disabled>
                                <option value>Select city...</option>
                                {/* Options will be populated dynamically */}
                              </select>
                              <div className="invalid-feedback">Please select your city!</div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-4">
                            <div className="position-relative">
                              <label htmlFor="zip-0" className="form-label">ZIP code</label>
                              <input name="zip_code" type="text" className="form-control" id="zip-0" defaultValue={110012} required />
                              <div className="invalid-feedback">Please enter your ZIP code!</div>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-8">
                            <div className="position-relative">
                              <label htmlFor="address-0" className="form-label">Address</label>
                              <input type="text" name="address" className="form-control" id="address-0" defaultValue="Str. of Harizona" required />
                              <div className="invalid-feedback">Please enter your address!</div>
                            </div>
                          </div>
                      </div>
                    </div>
                  </section>
  );
}

export default Location;
