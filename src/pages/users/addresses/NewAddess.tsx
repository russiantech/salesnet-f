import React from 'react';

const NewAddress = () => {
  const existingAddresses = [
    { id: 1, address: '123 Main St, Austin, TX, 78701' },
    { id: 2, address: '456 Elm St, Chicago, IL, 60601' },
    { id: 3, address: '789 Maple Ave, New York, NY, 10001' },
  ];

  return (
    <>
      {/* Add new address modal */}
      <div className="modal fade" id="newAddressModal" data-bs-backdrop="static" tabIndex={-1} aria-labelledby="newAddressModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="newAddressModalLabel">Add New Address</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <form className="row g-3 g-lg-4 needs-validation" noValidate>
                {/* Existing Address Selection */}
                <div className="col-12">
                  <label className="form-label">Choose Existing Address</label>
                  {existingAddresses.map((address) => (
                    <div className="form-check alert d-flex align-items-center alert-info mb-3" role='alert' key={address.id}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="existingAddress"
                        id={`address-${address.id}`}
                        value={address.address}
                      />
                      <label className="form-check-label" htmlFor={`address-${address.id}`}>
                        {address.address}
                      </label>
                    </div>
                  ))}
                </div>

                {/* New Address Fields */}
                <div className="col-lg-6">
                  <div className="position-relative">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" required />
                    <div className="invalid-feedback">Please enter your name!</div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="position-relative">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" required />
                    <div className="invalid-feedback">Please enter a valid email!</div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="position-relative">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="tel" className="form-control" id="phone" required />
                    <div className="invalid-feedback">Please enter your phone number!</div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="position-relative">
                    <label className="form-label">Country</label>
                    <select className="form-select" aria-label="Select country" required>
                      <option value="">Select country...</option>
                      {/* Add countries here */}
                      <optgroup label="Africa">
                        <option value="Nigeria">Nigeria</option>
                        <option value="South Africa">South Africa</option>
                      </optgroup>
                      {/* Additional countries... */}
                    </select>
                    <div className="invalid-feedback">Please select your country!</div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="position-relative">
                    <label className="form-label">City</label>
                    <select className="form-select" aria-label="Select city" required>
                      <option value="">Select city...</option>
                      <option value="Austin">Austin</option>
                      <option value="Chicago">Chicago</option>
                      {/* Additional cities... */}
                    </select>
                    <div className="invalid-feedback">Please select your city!</div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="position-relative">
                    <label htmlFor="zip" className="form-label">ZIP Code</label>
                    <input type="text" className="form-control" id="zip" required />
                    <div className="invalid-feedback">Please enter your ZIP code!</div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="position-relative">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" required />
                    <div className="invalid-feedback">Please enter your address!</div>
                  </div>
                </div>

                {/* Primary Address Option */}
                <div className="col-12">
                  <div className="form-check mb-0">
                    <input type="checkbox" className="form-check-input" id="setPrimary" />
                    <label htmlFor="setPrimary" className="form-check-label">Set as primary address</label>
                  </div>
                </div>

                {/* Submit and Close Buttons */}
                <div className="col-12">
                  <div className="d-flex gap-3 pt-2 pt-sm-0">
                    <button type="submit" className="btn btn-primary">Add Address</button>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewAddress;
