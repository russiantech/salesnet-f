import React from 'react'

const AddPaymentModal = () => {
    return (
        <div className="modal fade" id="addPaymentModal" data-bs-backdrop="static" tabIndex={-1} aria-labelledby="addPaymentModalLabel" aria-hidden="true" style={{ display: 'none' }}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="addPaymentModalLabel">Add new payment method</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        {/* Nav tabs */}
                        <ul className="nav nav-tabs mb-3" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button type="button" className="nav-link active" id="card-tab" data-bs-toggle="tab" data-bs-target="#card-tab-pane" role="tab" aria-controls="card-tab-pane" aria-selected="true">
                                    <i className="ci-credit-card fs-base opacity-75 ms-n2 me-2" />
                                    Card
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button type="button" className="nav-link" id="paypal-tab" data-bs-toggle="tab" data-bs-target="#paypal-tab-pane" role="tab" aria-controls="paypal-tab-pane" aria-selected="false" tabIndex={-1}>
                                     <img src="/assets/img/payment-methods/paypal-icon.svg" className="me-2" width={14} alt="PayPal" />
                                    PayPal
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content">
                            {/* Card tab */}
                            <div className="tab-pane fade active show" id="card-tab-pane" role="tabpanel" aria-labelledby="card-tab">
                                <form className="needs-validation" noValidate>
                                    <div className="mb-3">
                                        <label htmlFor="card-number" className="form-label">Card number</label>
                                        <div className="position-relative" data-input-format="{&quot;creditCard&quot;: true}">
                                            <input type="text" className="form-control form-icon-end" id="card-number" style={{ backgroundImage: 'none' }} placeholder="XXXX XXXX XXXX XXXX" required />
                                            <span className="position-absolute d-flex top-50 end-0 translate-middle-y fs-5 text-body-tertiary me-3" data-card-icon><svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor"><path d="M21 3H3C1.3 3 0 4.3 0 6v12c0 1.7 1.3 3 3 3h18c1.7 0 3-1.3 3-3V6c0-1.7-1.3-3-3-3zm1.2 15c0 .7-.6 1.2-1.2 1.2H3c-.7 0-1.2-.6-1.2-1.2V6c0-.7.6-1.2 1.2-1.2h18c.7 0 1.2.6 1.2 1.2v12z" /><path d="M7 16.1H4c-.5 0-.9.4-.9.9s.4.9.9.9h3c.5 0 .9-.4.9-.9s-.4-.9-.9-.9zm13-9H4c-.5 0-.9.4-.9.9s.4.9.9.9h16c.5 0 .9-.4.9-.9s-.4-.9-.9-.9z" /></svg></span>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="card-name" className="form-label">Name on card</label>
                                        <input type="text" className="form-control" id="card-name" placeholder="Full name" required />
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-7">
                                            <label htmlFor="card-expiration" className="form-label">Expiration date</label>
                                            <input type="text" className="form-control" id="card-expiration" data-input-format="{&quot;date&quot;: true, &quot;datePattern&quot;: [&quot;m&quot;, &quot;y&quot;]}" placeholder="MM/YY" required />
                                        </div>
                                        <div className="col-5">
                                            <label htmlFor="card-cvc" className="form-label">CVC</label>
                                            <input type="text" className="form-control" id="card-cvc" data-input-format="{&quot;numericOnly&quot;: true, &quot;blocks&quot;: [3]}" placeholder="XXX" required />
                                        </div>
                                    </div>
                                    <div className="d-flex gap-3">
                                        <button type="reset" className="btn btn-secondary w-100" data-bs-dismiss="modal" data-bs-target="#addPaymentModal">Cancel</button>
                                        <button type="submit" className="btn btn-primary w-100">Add card</button>
                                    </div>
                                </form>
                            </div>
                            {/* PayPal tab */}
                            <div className="tab-pane fade" id="paypal-tab-pane" role="tabpanel" aria-labelledby="paypal-tab">
                                <form className="needs-validation" noValidate>
                                    <div className="mb-4">
                                        <label htmlFor="paypal-email" className="form-label">Email associated with PayPal</label>
                                        <input type="email" className="form-control" id="paypal-email" placeholder="Email address" required />
                                        <div className="invalid-feedback">Please provide a valid email address!</div>
                                    </div>
                                    <div className="d-flex gap-3">
                                        <button type="reset" className="btn btn-secondary w-100" data-bs-dismiss="modal" data-bs-target="#addPaymentModal">Cancel</button>
                                        <button type="submit" className="btn btn-primary w-100">Continue</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPaymentModal
