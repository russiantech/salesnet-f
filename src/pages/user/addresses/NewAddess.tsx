import React from 'react'

const NewAddess = () => {
  return (
    <>
        {/* Add new address modal */}
        <div className="modal fade" id="newAddressModal" data-bs-backdrop="static" tabIndex={-1} aria-labelledby="newAddressModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="newAddressModalLabel">Add new address</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                  <form className="row g-3 g-lg-4 needs-validation" noValidate>
                    <div className="col-lg-6">
                      <div className="position-relative">
                        <label className="form-label">Country</label>
                        <select className="form-select" data-select="{&quot;searchEnabled&quot;: true}" aria-label="Select country" required>
                          <option value>Select country...</option>
                          <optgroup label="Africa">
                            <option value="Nigeria">Nigeria</option>
                            <option value="South Africa">South Africa</option>
                            <option value="Kenya">Kenya</option>
                            <option value="Egypt">Egypt</option>
                            <option value="Ethiopia">Ethiopia</option>
                          </optgroup>
                          <optgroup label="Asia">
                            <option value="China">China</option>
                            <option value="India">India</option>
                            <option value="Japan">Japan</option>
                            <option value="South Korea">South Korea</option>
                            <option value="Saudi Arabia">Saudi Arabia</option>
                          </optgroup>
                          <optgroup label="Europe">
                            <option value="Germany">Germany</option>
                            <option value="France">France</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="Italy">Italy</option>
                            <option value="Spain">Spain</option>
                          </optgroup>
                          <optgroup label="North America">
                            <option value="United States">United States</option>
                            <option value="Canada">Canada</option>
                            <option value="Mexico">Mexico</option>
                            <option value="Jamaica">Jamaica</option>
                            <option value="Costa Rica">Costa Rica</option>
                          </optgroup>
                          <optgroup label="South America">
                            <option value="Brazil">Brazil</option>
                            <option value="Argentina">Argentina</option>
                            <option value="Colombia">Colombia</option>
                            <option value="Chile">Chile</option>
                            <option value="Peru">Peru</option>
                          </optgroup>
                          <optgroup label="Oceania">
                            <option value="Australia">Australia</option>
                            <option value="New Zealand">New Zealand</option>
                            <option value="Papua New Guinea">Papua New Guinea</option>
                            <option value="Fiji">Fiji</option>
                            <option value="Solomon Islands">Solomon Islands</option>
                          </optgroup>
                        </select>
                        <div className="invalid-feedback">Please select your country!</div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="position-relative">
                        <label className="form-label">City</label>
                        <select className="form-select" data-select="{&quot;searchEnabled&quot;: true}" aria-label="Select city" required>
                          <option value>Select city...</option>
                          <option value="Austin">Austin</option>
                          <option value="Charlotte">Charlotte</option>
                          <option value="Chicago">Chicago</option>
                          <option value="Columbus">Columbus</option>
                          <option value="Dallas">Dallas</option>
                          <option value="Houston">Houston</option>
                          <option value="Jacksonville">Jacksonville</option>
                          <option value="Los Angeles">Los Angeles</option>
                          <option value="New York">New York</option>
                          <option value="Orlando">Orlando</option>
                          <option value="Philadelphia">Philadelphia</option>
                          <option value="Phoenix">Phoenix</option>
                          <option value="San Antonio">San Antonio</option>
                          <option value="San Diego">San Diego</option>
                          <option value="San Jose">San Jose</option>
                        </select>
                        <div className="invalid-feedback">Please select your city!</div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="position-relative">
                        <label htmlFor="add-zip" className="form-label">ZIP code</label>
                        <input type="text" className="form-control" id="add-zip" required />
                        <div className="invalid-feedback">Please enter your ZIP code!</div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="position-relative">
                        <label htmlFor="add-address" className="form-label">Address</label>
                        <input type="text" className="form-control" id="add-address" required />
                        <div className="invalid-feedback">Please enter your address!</div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-check mb-0">
                        <input type="checkbox" className="form-check-input" id="set-primary-3" />
                        <label htmlFor="set-primary-3" className="form-check-label">Set as primary address</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-flex gap-3 pt-2 pt-sm-0">
                        <button type="submit" className="btn btn-primary">Add address</button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default NewAddess