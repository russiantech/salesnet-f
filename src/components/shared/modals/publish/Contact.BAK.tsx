import React from 'react';

const Contact = ({ onChange }) => {
    return (
        <>
              <section className="container pt-2 mt-1 mt-sm-3 mt-lg-4">
            <div className="row">
                {/* <label className="form-label pb-1 mb-2">Model</label> */}
                <h4 className="h4 mb-3 mb-sm-4">Delivery & Contact</h4>
                <div className="d-flex flex-wrap gap-2">
                    <input
                        type="radio"
                        className="btn-check"
                        name="delivery-options"
                        id="model-1"
                        defaultChecked=""
                    />
                    <label htmlFor="model-1" className="btn btn-sm border-2 btn-outline-secondary">
                        <div className="d-flex flex-column flex-xxl-row align-items-center">
                            <div className="d-flex text-dark-emphasis bg-body-tertiary rounded-circle p-4 mb-3 mb-xxl-0">
                                <i className="ci-delivery fs-2 m-xxl-1" />
                            </div>
                            <div className="text-center text-xxl-start ps-xxl-3">
                                <h3 className="h6 mb-1">Public meet-up</h3>
                                <p className="fs-sm mb-0">You both meet at a public place.</p>
                            </div>
                        </div>
                    </label>
                    <input
                        type="radio"
                        className="btn-check"
                        name="delivery-options"
                        id="delivery-options"
                    />
                    <label htmlFor="model-2" className="btn btn-sm border-2  btn-outline-secondary">
                        <div className="d-flex flex-column flex-xxl-row align-items-center">
                            <div className="d-flex text-dark-emphasis bg-body-tertiary rounded-circle p-4 mb-3 mb-xxl-0">
                                <i className="ci-chat fs-2 m-xxl-1" />
                            </div>
                            <div className="text-center text-xxl-start ps-xxl-3">
                                <h3 className="h6 mb-1">Door pick-up</h3>
                                <p className="fs-sm mb-0">Buyer picks-up at your door</p>
                            </div>
                        </div>
                    </label>

                    <input
                        type="radio"
                        className="btn-check"
                        name="delivery-options"
                        id="model-3"
                    />
                    <label htmlFor="model-3" className="btn btn-sm border-2 btn-outline-secondary">
                        <div className="d-flex flex-column flex-xxl-row align-items-center">
                            <div className="d-flex text-dark-emphasis bg-body-tertiary rounded-circle p-4 mb-3 mb-xxl-0">
                                <i className="ci-credit-card fs-2 m-xxl-1" />
                            </div>
                            <div className="text-center text-xxl-start ps-xxl-3">
                                <h3 className="h6 mb-1">Door drop-off</h3>
                                <p className="fs-sm mb-0">You drop-off at buy's door</p>
                            </div>
                        </div>
                    </label>
                    <input
                        type="radio"
                        className="btn-check"
                        name="delivery-options"
                        id="model-4"
                        disabled=""
                    />

                </div>
            </div>
        </section>

        <section className="position-relative bg-body rounded p-4 mt-4">
            {/* <div className="position-relative z-1 pb-md-2 px-md-2">
                <div className="row">
                
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
                </div>

                <div className="row row-cols-1 row-cols-sm-2 g-3 g-md-4">
                    <h2 className="h4 mb-3 mb-sm-4">Contacts</h2> 
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
            </div> */}
        
        <>
  {/* Inline radio buttons */} 
  <div className="form-check form-check-inline">
    <input
      type="radio"
      className="form-check-input"
      id="ex-radio-5"
      name="radio-inline"
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
      name="radio-inline"
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
      disabled=""
    />
    <label htmlFor="ex-radio-7" className="form-check-label h4">
      Door drop-off
    </label>
  </div>
</>

            <div className="row">
  <div className="col-md-4 position-relative mb-4">
    <label htmlFor="validationTooltipt01" className="form-label">
      Name
    </label>
    <input
      type="text"
      className="form-control"
      id="validationTooltipt01"
      placeholder="Your Name"
      required=""
    />
    <div className="invalid-tooltip">Please enter your first name.</div>
    <div className="valid-tooltip">Looks good!</div>
  </div>
  <div className="col-md-4 position-relative mb-4">
    <label htmlFor="validationTooltipt02" className="form-label">
      Phone
    </label>
    <input
      type="text"
      className="form-control"
      id="validationTooltipt02"
      placeholder="Active phone number"
    />
    <div className="invalid-tooltip">Please enter your last name.</div>
    <div className="valid-tooltip">Looks good!</div>
  </div>
  <div className="col-md-4 position-relative mb-4">
    <label htmlFor="validationTooltipt03" className="form-label">
      Email
    </label>
    <input
      type="text"
      className="form-control"
      id="validationTooltipt03"
      placeholder="Valid email address"
      required=""
    />
    <div className="invalid-tooltip">Please choose a username.</div>
    <div className="valid-tooltip">Looks good!</div>
  </div>
</div>

        </section>
        </>
    );
}

export default Contact;
