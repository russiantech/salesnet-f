import React from 'react';

const Contact = ({ onChange }) => {
  return (
    <>
      <section className="container pt-2 mt-1 mt-sm-3 mt-lg-4">
        <div className="row">
          <h4 className="h4 mb-3 mb-sm-4">Delivery options and Contact</h4>
          <div className="d-flex flex-wrap gap-2">

            <>
              {/* Inline radio buttons */}
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  id="ex-radio-5"
                  name="delivery_options"
                />
                <label htmlFor="ex-radio-5" className="form-check-label h4">
                  Public meet-up
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  id="ex-radio-6"
                  name="delivery_options"
                  defaultChecked=""
                />
                <label htmlFor="ex-radio-6" className="form-check-label h4">
                  Door pick-up
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  id="ex-radio-7"
                  name="delivery_options"
                />
                <label htmlFor="ex-radio-7" className="form-check-label h4">
                  Door drop-off
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  id="contact-radio"
                  name="use_current_contact"
                />
                <label htmlFor="contact-radio" className="form-check-label h4">
                  Use my current contact details instead.
                </label>
              </div>
            </>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 position-relative mb-4">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Your Name"
              name="name"
            />
          </div>
          <div className="col-md-4 position-relative mb-4">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              placeholder="Active phone number"
            />
          </div>
          <div className="col-md-4 position-relative mb-4">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Valid email address"
              name="email"
            />
          </div>
        </div>

      </section>
    </>
  );
}

export default Contact;
