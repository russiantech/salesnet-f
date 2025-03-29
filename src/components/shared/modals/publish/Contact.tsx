import React from 'react';

const Contact = ({ onChange }) => {
  return (
    <div className="tab-pane fade">
      <h2 className="h4 mb-3">Contact Information</h2>
      <div className="row g-3">
        <div className="col">
          <label htmlFor="first_name" className="form-label">First Name</label>
          <input type="text" className="form-control" id="first_name" name="first_name" onChange={onChange} required />
        </div>
        <div className="col">
          <label htmlFor="last_name" className="form-label">Last Name</label>
          <input type="text" className="form-control" id="last_name" name="last_name" onChange={onChange} required />
        </div>
        <div className="col">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" onChange={onChange} required />
        </div>
        <div className="col">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input type="tel" className="form-control" id="phone" name="phone" onChange={onChange} required />
        </div>
      </div>
    </div>
  );
}

export default Contact;
