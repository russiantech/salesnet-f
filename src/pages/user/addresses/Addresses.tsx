import React from 'react'
import NewAddess from './NewAddess'
import Aside from '../shared/Aside'
// import Navigation from '../../../components/shared/Navigation'

const Addresses = () => {
  return (
    <>
      <div>
          {/* Add new address modal */}
          <NewAddess />

            {/* <Navigation /> */}
            
          {/* Page content */}
          <main className="content-wrapper">
            <div className="container py-5 mt-n2 mt-sm-0">
              <div className="row pt-md-2 pt-lg-3 pb-sm-2 pb-md-3 pb-lg-4 pb-xl-5">
                
                {/* Sidebar navigation that turns into offcanvas on screens < 992px wide (lg breakpoint) */}
                <Aside />

                {/* Addresses content */}
                <div className="col-lg-9">
                  <div className="ps-lg-3 ps-xl-0">
                    {/* Page title */}
                    <h1 className="h2 mb-1 mb-sm-2">Addresses</h1>
                    {/* Primary shipping address */}
                    <div className="border-bottom py-4">
                      <div className="nav flex-nowrap align-items-center justify-content-between pb-1 mb-3">
                        <div className="d-flex align-items-center gap-3 me-4">
                          <h2 className="h6 mb-0">Shipping address</h2>
                          <span className="badge text-bg-info rounded-pill">Primary</span>
                        </div>
                        <a className="nav-link hiding-collapse-toggle text-decoration-underline p-0 collapsed" href="#primaryAddressEdit" data-bs-toggle="collapse" aria-expanded="false" aria-controls="primaryAddressPreview primaryAddressEdit">Edit</a>
                      </div>
                      <div className="collapse primary-address show" id="primaryAddressPreview">
                        <ul className="list-unstyled fs-sm m-0">
                          <li>New York 11741, USA</li>
                          <li>396 Lillian Bolavandy, Holbrook</li>
                        </ul>
                      </div>
                      <div className="collapse primary-address" id="primaryAddressEdit">
                        <form className="row g-3 g-sm-4 needs-validation" noValidate>
                          <div className="col-sm-6">
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
                                  <option value="United States" selected>United States</option>
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
                          <div className="col-sm-6">
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
                                <option value="New York" selected>New York</option>
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
                          <div className="col-sm-4">
                            <div className="position-relative">
                              <label htmlFor="psa-zip" className="form-label">ZIP code</label>
                              <input type="text" className="form-control" id="psa-zip" defaultValue={11741} required />
                              <div className="invalid-feedback">Please enter your ZIP code!</div>
                            </div>
                          </div>
                          <div className="col-sm-8">
                            <div className="position-relative">
                              <label htmlFor="psa-address" className="form-label">Address</label>
                              <input type="text" className="form-control" id="psa-address" defaultValue="396 Lillian Bolavandy, Holbrook" required />
                              <div className="invalid-feedback">Please enter your address!</div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-check mb-0">
                              <input type="checkbox" className="form-check-input" id="set-primary-1" defaultChecked />
                              <label htmlFor="set-primary-1" className="form-check-label">Set as primary address</label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="d-flex gap-3 pt-2 pt-sm-0">
                              <button type="submit" className="btn btn-primary">Save changes</button>
                              <button type="button" className="btn btn-secondary" data-bs-toggle="collapse" data-bs-target=".primary-address" aria-expanded="true" aria-controls="primaryAddressPreview primaryAddressEdit">Close</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    {/* Alternative shipping address */}
                    <div className="border-bottom py-4">
                      <div className="nav flex-nowrap align-items-center justify-content-between pb-1 mb-3">
                        <div className="d-flex align-items-center gap-3 me-4">
                          <h2 className="h6 mb-0">Alternative shipping address</h2>
                        </div>
                        <a className="nav-link hiding-collapse-toggle text-decoration-underline p-0 collapsed" href="#alternativeAddressEdit" data-bs-toggle="collapse" aria-expanded="false" aria-controls="alternativeAddressPreview alternativeAddressEdit">Edit</a>
                      </div>
                      <div className="collapse alternative-address show" id="alternativeAddressPreview">
                        <ul className="list-unstyled fs-sm m-0">
                          <li>Florida 32806, USA</li>
                          <li>514 S. Magnolia St., Orlando</li>
                        </ul>
                      </div>
                      <div className="collapse alternative-address" id="alternativeAddressEdit">
                        <form className="row g-3 g-sm-4 needs-validation" noValidate>
                          <div className="col-sm-6">
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
                                  <option value="United States" selected>United States</option>
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
                          <div className="col-sm-6">
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
                                <option value="Orlando" selected>Orlando</option>
                                <option value="Philadelphia">Philadelphia</option>
                                <option value="Phoenix">Phoenix</option>
                                <option value="San Antonio">San Antonio</option>
                                <option value="San Diego">San Diego</option>
                                <option value="San Jose">San Jose</option>
                              </select>
                              <div className="invalid-feedback">Please select your city!</div>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="position-relative">
                              <label htmlFor="asa-zip" className="form-label">ZIP code</label>
                              <input type="text" className="form-control" id="asa-zip" defaultValue={32806} required />
                              <div className="invalid-feedback">Please enter your ZIP code!</div>
                            </div>
                          </div>
                          <div className="col-sm-8">
                            <div className="position-relative">
                              <label htmlFor="asa-address" className="form-label">Address</label>
                              <input type="text" className="form-control" id="asa-address" defaultValue="514 S. Magnolia St." required />
                              <div className="invalid-feedback">Please enter your address!</div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-check mb-0">
                              <input type="checkbox" className="form-check-input" id="set-primary-2" />
                              <label htmlFor="set-primary-2" className="form-check-label">Set as primary address</label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="d-flex gap-3 pt-2 pt-sm-0">
                              <button type="submit" className="btn btn-primary">Save changes</button>
                              <button type="button" className="btn btn-secondary" data-bs-toggle="collapse" data-bs-target=".alternative-address" aria-expanded="true" aria-controls="alternativeAddressPreview alternativeAddressEdit">Close</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    {/* Add address button */}
                    <div className="nav pt-4">
                      <a className="nav-link animate-underline fs-base px-0" href="#newAddressModal" data-bs-toggle="modal">
                        <i className="ci-plus fs-lg ms-n1 me-2" />
                        <span className="animate-target">Add address</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
    </>
  )
}

export default Addresses
