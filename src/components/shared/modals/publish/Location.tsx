import React from 'react';

const Location = ({ onChange }) => {
  return (
    <section className="position-relative bg-body rounded p-4 mt-4">
      <div className="position-relative z-1 pb-md-2 px-md-2">
        <h2 className="h4 mb-3 mb-sm-4">Address/Location options</h2>
        <div className="row">
          <div className="d-flex flex-wrap gap-2">

            <>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  id="contact-radio"
                  name="location"
                  disabled=""
                />
                <label htmlFor="contact-radio" className="form-check-label h4">
                  Use my current address details instead.
                </label>
              </div>
            </>
          </div>
        </div>

        <div className="row g-3 g-md-4">
          <div className="col-sm-6 col-md-4">
            <div className="position-relative">
              <label className="form-label">Country</label>
              <select name="country" className="form-select" id="countrySelect0" required>
                <option>Select country...</option>
                {/* Options will be populated dynamically */}
                <option defaultValue={3} selected={false}>Afghanistan</option>
                <option defaultValue={124} selected={false}>South Korea</option>
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
