import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import DeliveryDateOffCanvas from './DeliveryDateOffCanvas'
import DeliveryOptionsOffCanvas from './DeliveryOptionsOffCanvas'
import AsideOrderSummary from './AsideOrderSummary'

const Checkout = () => {
  return (
    <>

      {/* Delivey options offcanvas */}
      <DeliveryOptionsOffCanvas />
      
      {/* Delivery date and time offcanvas */}
      <DeliveryDateOffCanvas />

      {/* Page content */}
      <main className="content-wrapper">
        {/* Breadcrumb */}
        <nav className="container pt-1 pt-md-0 my-3 my-md-4" aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="breadcrumb-item">
              <Link to="/user/personnal">User</Link>
            </li>
            <li className="breadcrumb-item">
              <NavLink to="/basket">Basket</NavLink>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Checkout
            </li>
          </ol>
        </nav>
        {/* Checkout form + Order summary */}
        <section className="container pb-5 mb-2 mb-md-3 mb-lg-4 mb-xl-5">
          <h1 className="h3 mb-4">Checkout</h1>
          <div className="row">
            {/* Checkout form */}
            <div className="col-lg-8 col-xl-7 mb-5 mb-lg-0">
              {/* Delivery address section */}
              <h2 className="h5 mb-4">Delivery address</h2>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="d-flex align-items-center fs-sm text-dark-emphasis me-3">
                  <i className="ci-map-pin fs-base text-primary me-2" />
                  567 Cherry Souse Lane Sacramento, 95829
                </div>
                <div className="nav animate-scale">
                  <a
                    className="badge text-bg-info rounded-pill animate-target text-nowrap p-1"
                    href="#deliveryOptions"
                    data-bs-toggle="offcanvas"
                    aria-controls="deliveryOptions"
                  >
                    Change address
                  </a>
                </div>
              </div>
              <div className="row row-cols-1 row-cols-sm-2 g-3 g-ms-4 mb-3 mb-sm-4">
                <div className="col">
                  <label htmlFor="house" className="form-label">
                    House / Flat*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="house"
                    name="house"
                  />
                </div>
                <div className="col">
                  <label htmlFor="floor" className="form-label">
                    Floor{" "}
                    <span className="fw-normal text-body-secondary">
                      (optional)
                    </span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="floor"
                    name="floor"
                  />
                </div>
              </div>
              <label htmlFor="phone-number" className="form-label">
                Phone number *{" "}
                <span className="fw-normal text-body-secondary">
                  (We'll contact you in case anything comes up with your order)
                </span>
              </label>
              <input
                type="tel"
                className="form-control"
                id="phone-number"
                name="phone_number"
                data-input-format='{"numericOnly": true, "delimiters": ["+1 ", " ", " "], "blocks": [0, 3, 3, 2]}'
                placeholder="+234 ___ ___ __"
              />
              {/* Delivery date and time section */}
              <h2 className="h5 mt-5 mb-4">Delivery date and time</h2>
              <div className="d-flex flex-wrap gap-3">
                <div>
                  <input
                    type="radio"
                    className="btn-check"
                    name="date"
                    id="today"
                    defaultChecked=""
                  />
                  <label
                    className="btn btn-outline-secondary rounded-pill"
                    htmlFor="today"
                  >
                    Today
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    className="btn-check"
                    name="date"
                    id="tomorrow"
                  />
                  <label
                    className="btn btn-outline-secondary rounded-pill"
                    htmlFor="tomorrow"
                  >
                    Tomorrow
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    className="btn-check"
                    name="date"
                    id="other-date"
                  />
                  <label
                    className="btn btn-outline-secondary rounded-pill"
                    htmlFor="other-date"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#deliveryDateTime"
                    aria-controls="deliveryDateTime"
                  >
                    Other date
                  </label>
                </div>
              </div>
              <div className="fs-sm mt-4">
                The cost of delivery:{" "}
                <span className="fw-semibold text-dark-emphasis">Free</span>
              </div>
              <div className="d-flex flex-wrap gap-3 mt-3">
                <div>
                  <input
                    type="radio"
                    className="btn-check"
                    name="time"
                    id="time-1"
                    defaultChecked=""
                  />
                  <label
                    className="btn btn-outline-secondary rounded-pill"
                    htmlFor="time-1"
                  >
                    10:00 - 12:00
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    className="btn-check"
                    name="time"
                    id="time-2"
                  />
                  <label
                    className="btn btn-outline-secondary rounded-pill"
                    htmlFor="time-2"
                  >
                    12:00 - 14:00
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    className="btn-check"
                    name="time"
                    id="time-3"
                  />
                  <label
                    className="btn btn-outline-secondary rounded-pill"
                    htmlFor="time-3"
                  >
                    14:00 - 16:00
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    className="btn-check"
                    name="time"
                    id="time-4"
                  />
                  <label
                    className="btn btn-outline-secondary rounded-pill"
                    htmlFor="time-4"
                  >
                    16:00 - 18:00
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    className="btn-check"
                    name="time"
                    id="time-5"
                  />
                  <label
                    className="btn btn-outline-secondary rounded-pill"
                    htmlFor="time-5"
                  >
                    18:00 - 20:00
                  </label>
                </div>
              </div>
              {/* Payment method section */}
              <h2 className="h5 mt-5 mb-0">Payment method</h2>
              <div id="paymentMethod" role="list">
                {/* Credit card */}
                <div className="mt-4">
                  <div
                    className="form-check mb-0"
                    role="listitem"
                    data-bs-toggle="collapse"
                    data-bs-target="#card"
                    aria-expanded="true"
                    aria-controls="card"
                  >
                    <label className="form-check-label d-flex align-items-center text-dark-emphasis fw-semibold">
                      <input
                        type="radio"
                        className="form-check-input fs-base me-2 me-sm-3"
                        name="payment-method"
                        defaultChecked=""
                      />
                      Credit or debit card
                      <span className="d-none d-sm-flex gap-2 ms-3">
                        <img
                          src="/assets/img/payment-methods/amex.svg"
                          className="d-block bg-info rounded-1"
                          width={36}
                          alt="Amex"
                        />
                        <img
                          src="/assets/img/payment-methods/visa-light-mode.svg"
                          className="d-none-dark"
                          width={36}
                          alt="Visa"
                        />
                        <img
                          src="/assets/img/payment-methods/visa-dark-mode.svg"
                          className="d-none d-block-dark"
                          width={36}
                          alt="Visa"
                        />
                        <img
                          src="/assets/img/payment-methods/mastercard.svg"
                          width={36}
                          alt="Mastercard"
                        />
                        <img
                          src="/assets/img/payment-methods/maestro.svg"
                          width={36}
                          alt="Maestro"
                        />
                      </span>
                    </label>
                  </div>
                  <div
                    className="collapse show"
                    id="card"
                    data-bs-parent="#paymentMethod"
                  >
                    <form
                      className="needs-validation pt-4 pb-2 ps-3 ms-2 ms-sm-3"
                      noValidate=""
                    >
                      <div
                        className="position-relative mb-3 mb-sm-4"
                        data-input-format='{"creditCard": true}'
                      >
                        <input
                          type="text"
                          className="form-control form-icon-end"
                          placeholder="Card number"
                          required=""
                        />
                        <span
                          className="position-absolute d-flex top-50 end-0 translate-middle-y fs-5 text-body-tertiary me-3"
                          data-card-icon=""
                        />
                      </div>
                      <div className="row row-cols-1 row-cols-sm-2 g-3 g-sm-4">
                        <div className="col">
                          <input
                            type="text"
                            className="form-control "
                            data-input-format='{"date": true, "datePattern": ["m", "y"]}'
                            placeholder="MM/YY"
                          />
                        </div>
                        <div className="col">
                          <input
                            type="text"
                            className="form-control "
                            maxLength={4}
                            data-input-format='{"numeral": true, "numeralPositiveOnly": true, "numeralThousandsGroupStyle": "none"}'
                            placeholder="CVC"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                {/* PayPal */}
                <div className="mt-4">
                  <div
                    className="form-check mb-0"
                    role="listitem"
                    data-bs-toggle="collapse"
                    data-bs-target="#paypal"
                    aria-expanded="false"
                    aria-controls="paypal"
                  >
                    <label className="form-check-label d-flex align-items-center text-dark-emphasis fw-semibold">
                      <input
                        type="radio"
                        className="form-check-input fs-base me-2 me-sm-3"
                        name="payment-method"
                      />
                      PayPal
                      <img
                        src="/assets/img/payment-methods/paypal-icon.svg"
                        className="ms-3"
                        width={16}
                        alt="PayPal"
                      />
                    </label>
                  </div>
                  <div
                    className="collapse"
                    id="paypal"
                    data-bs-parent="#paymentMethod"
                  />
                </div>
                {/* Google Pay */}
                <div className="mt-4">
                  <div
                    className="form-check mb-0"
                    role="listitem"
                    data-bs-toggle="collapse"
                    data-bs-target="#googlepay"
                    aria-expanded="false"
                    aria-controls="googlepay"
                  >
                    <label className="form-check-label d-flex align-items-center text-dark-emphasis fw-semibold">
                      <input
                        type="radio"
                        className="form-check-input fs-base me-2 me-sm-3"
                        name="payment-method"
                      />
                      Google Pay
                      <img
                        src="/assets/img/payment-methods/google-icon.svg"
                        className="ms-3"
                        width={20}
                        alt="Google Pay"
                      />
                    </label>
                  </div>
                  <div
                    className="collapse"
                    id="googlepay"
                    data-bs-parent="#paymentMethod"
                  />
                </div>

                {/* Card on delivery */}
                <div className="mt-4">
                  <div
                    className="form-check mb-0"
                    role="listitem"
                    data-bs-toggle="collapse"
                    data-bs-target="#card-on-delivery"
                    aria-expanded="false"
                    aria-controls="card-on-delivery"
                  >
                    <label className="form-check-label text-dark-emphasis fw-semibold">
                      <input
                        type="radio"
                        className="form-check-input fs-base me-2 me-sm-3"
                        name="payment-method"
                      />
                      Payment on delivery
                    </label>
                  </div>
                  <div
                    className="collapse"
                    id="card-on-delivery"
                    data-bs-parent="#paymentMethod"
                  />
                </div>
              </div>

            </div>
            {/* Order summary (sticky sidebar) */}
            <AsideOrderSummary />

          </div>
        </section>

      </main>

      </>
  )
}

export default Checkout
