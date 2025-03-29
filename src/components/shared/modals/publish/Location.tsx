import React from 'react';

const Location = ({ onChange }) => {
  return (
    <div className="tab-pane fade">
      <h2 className="h4 mb-3">Location</h2>
      <div className="row g-3">
        <div className="col">
          <label htmlFor="country" className="form-label">Country</label>
          <input type="text" className="form-control" id="country" name="country" onChange={onChange} required />
        </div>
        <div className="col">
          <label htmlFor="state" className="form-label">State</label>
          <input type="text" className="form-control" id="state" name="state" onChange={onChange} required />
        </div>
        <div className="col">
          <label htmlFor="city" className="form-label">City</label>
          <input type="text" className="form-control" id="city" name="city" onChange={onChange} required />
        </div>
        <div className="col">
          <label htmlFor="zip_code" className="form-label">ZIP Code</label>
          <input type="text" className="form-control" id="zip_code" name="zip_code" onChange={onChange} required />
        </div>
      </div>
    </div>
  );
}

export default Location;
