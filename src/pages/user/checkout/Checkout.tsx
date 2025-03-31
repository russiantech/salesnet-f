import React from 'react'

const Checkout = () => {
  return (
    <>
    <>

  {/* Delivey options offcanvas */}
  <div
    className="offcanvas offcanvas-end pb-sm-2 px-sm-2"
    id="deliveryOptions"
    tabIndex={-1}
    aria-labelledby="deliveryOptionsLabel"
    style={{ width: 500 }}
  >
    {/* Header with nav tabs */}
    <div className="offcanvas-header flex-column align-items-start py-3 pt-lg-4">
      <div className="d-flex align-items-center justify-content-between w-100 pb-xl-1 mb-4">
        <h4 className="offcanvas-title" id="deliveryOptionsLabel">
          Delivery options
        </h4>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <ul className="nav nav-pills nav-justified w-100" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            type="button"
            className="nav-link active"
            id="delivery-tab"
            data-bs-toggle="tab"
            data-bs-target="#delivery-tab-pane"
            role="tab"
            aria-controls="delivery-tab-pane"
            aria-selected="true"
          >
            <i className="ci-shopping-bag fs-base ms-n1 me-2" />
            Delivery
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            type="button"
            className="nav-link"
            id="pickup-tab"
            data-bs-toggle="tab"
            data-bs-target="#pickup-tab-pane"
            role="tab"
            aria-controls="pickup-tab-pane"
            aria-selected="false"
          >
            <i className="ci-box fs-base ms-n1 me-2" />
            Pickup
          </button>
        </li>
      </ul>
    </div>
    <div className="offcanvas-body tab-content py-2 py-sm-3">
      {/* Delivery tab */}
      <div
        className="tab-pane fade show active"
        id="delivery-tab-pane"
        role="tabpanel"
        aria-labelledby="delivery-tab"
      >
        {/* Address options collapse */}
        <div
          className="collapse delivery-address show"
          id="deliveryAddressOptions"
        >
          <div className="mt-n3">
            <div className="form-check border-bottom py-4 m-0">
              <input
                type="radio"
                className="form-check-input"
                id="address-1"
                name="delivery-address"
                defaultChecked=""
              />
              <label
                htmlFor="address-1"
                className="form-check-label text-dark-emphasis fw-semibold"
              >
                567 Cherry Lane Apt B12 Sacramento, 95829
              </label>
            </div>
            <div className="form-check border-bottom py-4 m-0">
              <input
                type="radio"
                className="form-check-input"
                id="address-2"
                name="delivery-address"
              />
              <div className="d-flex w-100">
                <label
                  htmlFor="address-2"
                  className="form-check-label text-dark-emphasis me-3"
                >
                  1901 Thornridge Cir. Shiloh, Hawaii, 81063
                </label>
                <button
                  type="button"
                  className="btn-close fs-sm ms-auto"
                  data-bs-toggle="tooltip"
                  data-bs-custom-class="tooltip-sm"
                  data-bs-title="Remove"
                  aria-label="Remove"
                />
              </div>
            </div>
            <div className="form-check border-bottom py-4 m-0">
              <input
                type="radio"
                className="form-check-input"
                id="address-3"
                name="delivery-address"
              />
              <div className="d-flex w-100">
                <label
                  htmlFor="address-3"
                  className="form-check-label text-dark-emphasis me-3"
                >
                  3517 W. Gray St. Utica, Pennsylvania, 57867
                </label>
                <button
                  type="button"
                  className="btn-close fs-sm ms-auto"
                  data-bs-toggle="tooltip"
                  data-bs-custom-class="tooltip-sm"
                  data-bs-title="Remove"
                  aria-label="Remove"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Add new address collapse */}
        <div className="collapse delivery-address" id="deliveryAddressAdd">
          <div className="nav mb-4">
            <a
              className="nav-link animate-underline p-0"
              href=".delivery-address.html"
              data-bs-toggle="collapse"
              aria-expanded="true"
              aria-controls="deliveryAddressOptions deliveryAddressAdd"
            >
              <i className="ci-chevron-left fs-lg ms-n1 me-1" />
              <span className="animate-target">Back to my addresses</span>
            </a>
          </div>
          <div className="d-flex align-items-center justify-content-between mb-3 mb-lg-4">
            <h5 className="h6 mb-0 me-3">Add an address to start ordering</h5>
            <a
              className="btn btn-sm btn-outline-primary rounded-pill"
              href="#!"
            >
              <i className="ci-map-pin fs-base ms-n1 me-1" />
              Find on map
            </a>
          </div>
          <div className="mb-3 mb-lg-4">
            <label className="form-label">State *</label>
            <select
              className="form-select form-select-lg rounded-pill"
              data-select='{
          "classNames": {
            "containerInner": ["form-select", "form-select-lg", "rounded-pill"]
          }
        }'
              aria-label="Large pill select"
            >
              <option value="">Select state</option>
              <option value="Arizona">Arizona</option>
              <option value="California">California</option>
              <option value="Montana">Montana</option>
              <option value="Nevada">Nevada</option>
              <option value="New Mexico">New Mexico</option>
              <option value="Texas">Texas</option>
            </select>
          </div>
          <div className="mb-3 mb-lg-4">
            <label htmlFor="my-postcode" className="form-label">
              Postcode *
            </label>
            <input
              type="text"
              className="form-control form-control-lg rounded-pill"
              id="my-postcode"
            />
          </div>
          <div className="mb-3 mb-lg-4">
            <label className="form-label">City *</label>
            <select
              className="form-select form-select-lg rounded-pill"
              data-select='{
          "classNames": {
            "containerInner": ["form-select", "form-select-lg", "rounded-pill"]
          }
        }'
              aria-label="Large pill select"
            >
              <option value="">Select city</option>
              <option value="Austin">Austin</option>
              <option value="Helena">Helena</option>
              <option value="Sacramento">Sacramento</option>
              <option value="Santa Fe">Santa Fe</option>
              <option value="Las Vegas">Las Vegas</option>
              <option value="Phoenix">Phoenix</option>
            </select>
          </div>
          <label htmlFor="my-address" className="form-label">
            Street address *
          </label>
          <input
            type="text"
            className="form-control form-control-lg rounded-pill"
            id="my-address"
          />
        </div>
        {/* Add address collapse toggle */}
        <div className="nav">
          <a
            className="nav-link hiding-collapse-toggle animate-underline collapsed px-0 mt-4"
            href=".delivery-address.html"
            data-bs-toggle="collapse"
            aria-expanded="false"
            aria-controls="deliveryAddressOptions deliveryAddressAdd"
          >
            <span className="animate-target">Add delivery address</span>
            <i className="ci-plus fs-base ms-1" />
          </a>
        </div>
      </div>
      {/* Pickup tab */}
      <div
        className="tab-pane fade"
        id="pickup-tab-pane"
        role="tabpanel"
        aria-labelledby="pickup-tab"
      >
        {/* Pickup store options collapse */}
        <div className="collapse pickup-options show" id="pickupStoreOptions">
          <div className="mt-n3">
            <div className="form-check border-bottom py-4 m-0">
              <input
                type="radio"
                className="form-check-input"
                id="store-1"
                name="pickup-store"
                defaultChecked=""
              />
              <div>
                <div className="d-flex w-100 pb-2 mb-1">
                  <label
                    htmlFor="store-1"
                    className="form-check-label text-dark-emphasis fw-semibold me-3"
                  >
                    Sacramento Supercenter
                  </label>
                  <button
                    type="button"
                    className="btn-close fs-sm ms-auto"
                    data-bs-toggle="tooltip"
                    data-bs-custom-class="tooltip-sm"
                    data-bs-title="Remove"
                    aria-label="Remove"
                  />
                </div>
                <div className="fs-xs mb-2">
                  8270 Delta Shores Cir S, Sacramento, CA 95832
                </div>
                <div className="fs-xs">
                  Open:{" "}
                  <span className="text-dark-emphasis fw-medium">
                    07:00 - 22:00
                  </span>
                </div>
              </div>
            </div>
            <div className="form-check border-bottom py-4 m-0">
              <input
                type="radio"
                className="form-check-input"
                id="store-2"
                name="pickup-store"
              />
              <div>
                <div className="d-flex w-100 pb-2 mb-1">
                  <label
                    htmlFor="store-2"
                    className="form-check-label text-dark-emphasis fw-semibold me-3"
                  >
                    West Sacramento Supercenter
                  </label>
                  <button
                    type="button"
                    className="btn-close fs-sm ms-auto"
                    data-bs-toggle="tooltip"
                    data-bs-custom-class="tooltip-sm"
                    data-bs-title="Remove"
                    aria-label="Remove"
                  />
                </div>
                <div className="fs-xs mb-2">
                  755 Riverpoint Ct, West Sacramento, CA 95605
                </div>
                <div className="fs-xs">
                  Open:{" "}
                  <span className="text-dark-emphasis fw-medium">
                    07:00 - 21:00
                  </span>
                </div>
              </div>
            </div>
            <div className="form-check border-bottom py-4 m-0">
              <input
                type="radio"
                className="form-check-input"
                id="store-3"
                name="pickup-store"
              />
              <div>
                <div className="d-flex w-100 pb-2 mb-1">
                  <label
                    htmlFor="store-3"
                    className="form-check-label text-dark-emphasis fw-semibold me-3"
                  >
                    Rancho Cordova Supercenter
                  </label>
                  <button
                    type="button"
                    className="btn-close fs-sm ms-auto"
                    data-bs-toggle="tooltip"
                    data-bs-custom-class="tooltip-sm"
                    data-bs-title="Remove"
                    aria-label="Remove"
                  />
                </div>
                <div className="fs-xs mb-2">
                  10655 Folsom Blvd, Rancho Cordova, CA 95670
                </div>
                <div className="fs-xs">
                  Open:{" "}
                  <span className="text-dark-emphasis fw-medium">
                    08:00 - 23:00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Add new pickup store collapse */}
        <div className="collapse pickup-options" id="pickupStoreAdd">
          <div className="nav mb-4">
            <a
              className="nav-link animate-underline p-0"
              href=".pickup-options.html"
              data-bs-toggle="collapse"
              aria-expanded="true"
              aria-controls="pickupStoreOptions pickupStoreAdd"
            >
              <i className="ci-chevron-left fs-lg ms-n1 me-1" />
              <span className="animate-target">Back to my stores</span>
            </a>
          </div>
          <div className="d-flex align-items-center justify-content-between mb-3 mb-lg-4">
            <h5 className="h6 mb-0 me-3">Select a suitable store</h5>
            <a
              className="btn btn-sm btn-outline-primary rounded-pill"
              href="#!"
            >
              <i className="ci-map-pin fs-base ms-n1 me-1" />
              Find on map
            </a>
          </div>
          <div className="mb-3 mb-lg-4">
            <label className="form-label">State *</label>
            <select
              className="form-select form-select-lg rounded-pill"
              data-select='{
          "classNames": {
            "containerInner": ["form-select", "form-select-lg", "rounded-pill"]
          }
        }'
              aria-label="Large pill select"
            >
              <option value="">Select state</option>
              <option value="Arizona">Arizona</option>
              <option value="California" selected="">
                California
              </option>
              <option value="Montana">Montana</option>
              <option value="Nevada">Nevada</option>
              <option value="New Mexico">New Mexico</option>
              <option value="Texas">Texas</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="form-label">City *</label>
            <select
              className="form-select form-select-lg rounded-pill"
              data-select='{
          "classNames": {
            "containerInner": ["form-select", "form-select-lg", "rounded-pill"]
          }
        }'
              aria-label="Large pill select"
            >
              <option value="">Select city</option>
              <option value="Austin">Austin</option>
              <option value="Helena">Helena</option>
              <option value="Sacramento" selected="">
                Sacramento
              </option>
              <option value="Santa Fe">Santa Fe</option>
              <option value="Las Vegas">Las Vegas</option>
              <option value="Phoenix">Phoenix</option>
            </select>
          </div>
          <div className="fs-xs fw-medium text-uppercase text-body-secondary">
            Found stores:
          </div>
          <div className="form-check border-bottom py-4 m-0">
            <input
              type="radio"
              className="form-check-input"
              id="store-4"
              name="found-store"
            />
            <div>
              <label
                htmlFor="store-4"
                className="form-check-label text-dark-emphasis fw-semibold pb-2 mb-1"
              >
                Sacramento Supercenter
              </label>
              <div className="fs-xs mb-2">
                8270 Delta Shores Cir S, Sacramento, CA 95832
              </div>
              <div className="fs-xs">
                Open:{" "}
                <span className="text-dark-emphasis fw-medium">
                  07:00 - 22:00
                </span>
              </div>
            </div>
          </div>
          <div className="form-check border-bottom py-4 m-0">
            <input
              type="radio"
              className="form-check-input"
              id="store-5"
              name="found-store"
            />
            <div>
              <label
                htmlFor="store-5"
                className="form-check-label text-dark-emphasis fw-semibold pb-2 mb-1"
              >
                West Sacramento Supercenter
              </label>
              <div className="fs-xs mb-2">
                755 Riverpoint Ct, West Sacramento, CA 95605
              </div>
              <div className="fs-xs">
                Open:{" "}
                <span className="text-dark-emphasis fw-medium">
                  07:00 - 21:00
                </span>
              </div>
            </div>
          </div>
          <div className="form-check border-bottom py-4 m-0">
            <input
              type="radio"
              className="form-check-input"
              id="store-6"
              name="found-store"
            />
            <div>
              <label
                htmlFor="store-6"
                className="form-check-label text-dark-emphasis fw-semibold pb-2 mb-1"
              >
                Rancho Cordova Supercenter
              </label>
              <div className="fs-xs mb-2">
                10655 Folsom Blvd, Rancho Cordova, CA 95670
              </div>
              <div className="fs-xs">
                Open:{" "}
                <span className="text-dark-emphasis fw-medium">
                  08:00 - 23:00
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Add address collapse toggle */}
        <div className="nav">
          <a
            className="nav-link hiding-collapse-toggle animate-underline collapsed px-0 mt-4"
            href=".pickup-options.html"
            data-bs-toggle="collapse"
            aria-expanded="false"
            aria-controls="pickupStoreOptions pickupStoreAdd"
          >
            <span className="animate-target">Add store address</span>
            <i className="ci-plus fs-base ms-1" />
          </a>
        </div>
      </div>
    </div>
    {/* Footer */}
    <div className="offcanvas-header">
      <button
        type="button"
        className="btn btn-lg btn-primary w-100 rounded-pill"
      >
        Confirm address
      </button>
    </div>
  </div>
  {/* Delivery date and time offcanvas */}
  <div
    className="offcanvas offcanvas-end pb-sm-2 px-sm-2"
    id="deliveryDateTime"
    tabIndex={-1}
    aria-labelledby="deliveryDateTimeLabel"
    style={{ width: 500 }}
  >
    {/* Header with nav tabs */}
    <div className="offcanvas-header py-3 pt-lg-4">
      <h4 className="offcanvas-title" id="deliveryDateTimeLabel">
        Schedule date and time
      </h4>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
    </div>
    {/* Body */}
    <div className="offcanvas-body py-3">
      {/* Day */}
      <div className="d-flex justify-content-between gap-3 overflow-auto pb-3">
        <div className="text-center">
          <div className="fs-sm pb-1 mb-2">Mon</div>
          <input type="radio" className="btn-check" name="day" id="mon" />
          <label
            className="btn btn-icon btn-lg btn-outline-secondary fs-sm rounded-circle"
            htmlFor="mon"
          >
            24
          </label>
        </div>
        <div className="text-center">
          <div className="fs-sm pb-1 mb-2">Tue</div>
          <input type="radio" className="btn-check" name="day" id="tue" />
          <label
            className="btn btn-icon btn-lg btn-outline-secondary fs-sm rounded-circle"
            htmlFor="tue"
          >
            25
          </label>
        </div>
        <div className="text-center">
          <div className="fs-sm pb-1 mb-2">Wed</div>
          <input
            type="radio"
            className="btn-check"
            name="day"
            id="wed"
            defaultChecked=""
          />
          <label
            className="btn btn-icon btn-lg btn-outline-secondary fs-sm rounded-circle"
            htmlFor="wed"
          >
            26
          </label>
        </div>
        <div className="text-center">
          <div className="fs-sm pb-1 mb-2">Thu</div>
          <input type="radio" className="btn-check" name="day" id="thu" />
          <label
            className="btn btn-icon btn-lg btn-outline-secondary fs-sm rounded-circle"
            htmlFor="thu"
          >
            27
          </label>
        </div>
        <div className="text-center">
          <div className="fs-sm pb-1 mb-2">Fri</div>
          <input type="radio" className="btn-check" name="day" id="fri" />
          <label
            className="btn btn-icon btn-lg btn-outline-secondary fs-sm rounded-circle"
            htmlFor="fri"
          >
            28
          </label>
        </div>
        <div className="text-center">
          <div className="fs-sm pb-1 mb-2">Sat</div>
          <input type="radio" className="btn-check" name="day" id="sat" />
          <label
            className="btn btn-icon btn-lg btn-outline-secondary fs-sm rounded-circle"
            htmlFor="sat"
          >
            29
          </label>
        </div>
        <div className="text-center">
          <div className="fs-sm pb-1 mb-2">Sun</div>
          <input type="radio" className="btn-check" name="day" id="sun" />
          <label
            className="btn btn-icon btn-lg btn-outline-secondary fs-sm rounded-circle"
            htmlFor="sun"
          >
            30
          </label>
        </div>
      </div>
      {/* Time */}
      <div className="form-check border-bottom py-4 m-0">
        <input
          type="radio"
          className="form-check-input"
          id="delivery-time-1"
          name="delivery-time"
        />
        <div className="d-flex w-100">
          <label
            htmlFor="delivery-time-1"
            className="form-check-label text-dark-emphasis fw-semibold me-3"
          >
            08:00 - 10:00
          </label>
          <span className="fs-sm ms-auto">Free</span>
        </div>
      </div>
      <div className="form-check border-bottom py-4 m-0">
        <input
          type="radio"
          className="form-check-input"
          id="delivery-time-2"
          name="delivery-time"
          defaultChecked=""
        />
        <div className="d-flex w-100">
          <label
            htmlFor="delivery-time-2"
            className="form-check-label text-dark-emphasis fw-semibold me-3"
          >
            10:00 - 12:00
          </label>
          <span className="fs-sm ms-auto">Free</span>
        </div>
      </div>
      <div className="form-check border-bottom py-4 m-0">
        <input
          type="radio"
          className="form-check-input"
          id="delivery-time-3"
          name="delivery-time"
        />
        <div className="d-flex w-100">
          <label
            htmlFor="delivery-time-3"
            className="form-check-label text-dark-emphasis fw-semibold me-3"
          >
            12:00 - 14:00
          </label>
          <span className="fs-sm ms-auto">Free</span>
        </div>
      </div>
      <div className="form-check border-bottom py-4 m-0">
        <input
          type="radio"
          className="form-check-input"
          id="delivery-time-4"
          name="delivery-time"
        />
        <div className="d-flex w-100">
          <label
            htmlFor="delivery-time-4"
            className="form-check-label text-dark-emphasis fw-semibold me-3"
          >
            14:00 - 16:00
          </label>
          <span className="fs-sm ms-auto">Free</span>
        </div>
      </div>
      <div className="form-check border-bottom py-4 m-0">
        <input
          type="radio"
          className="form-check-input"
          id="delivery-time-5"
          name="delivery-time"
        />
        <div className="d-flex w-100">
          <label
            htmlFor="delivery-time-5"
            className="form-check-label text-dark-emphasis fw-semibold me-3"
          >
            16:00 - 18:00
          </label>
          <span className="fs-sm ms-auto">Free</span>
        </div>
      </div>
      <div className="form-check border-bottom py-4 m-0">
        <input
          type="radio"
          className="form-check-input"
          id="delivery-time-6"
          name="delivery-time"
        />
        <div className="d-flex w-100">
          <label
            htmlFor="delivery-time-6"
            className="form-check-label text-dark-emphasis fw-semibold me-3"
          >
            18:00 - 20:00
          </label>
          <span className="fs-sm ms-auto">Free</span>
        </div>
      </div>
      <div className="form-check border-bottom py-4 m-0">
        <input
          type="radio"
          className="form-check-input"
          id="delivery-time-7"
          name="delivery-time"
        />
        <div className="d-flex w-100">
          <label
            htmlFor="delivery-time-7"
            className="form-check-label text-dark-emphasis fw-semibold me-3"
          >
            20:00 - 22:00
          </label>
          <span className="fs-sm ms-auto">Free</span>
        </div>
      </div>
    </div>
    {/* Footer */}
    <div className="offcanvas-header">
      <button
        type="button"
        className="btn btn-lg btn-primary w-100 rounded-pill"
      >
        Confirm date and time
      </button>
    </div>
  </div>
</>

  {/* Page content */}
  <main className="content-wrapper">
    {/* Breadcrumb */}
    <nav
      className="container pt-1 pt-md-0 my-3 my-md-4"
      aria-label="breadcrumb"
    >
      <ol className="breadcrumb mb-0">
        <li className="breadcrumb-item">
          <a href="home-grocery.html">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="shop-catalog-grocery.html">User</a>
        </li>
        <li className="breadcrumb-item">
          <a href="checkout-v2-cart.html">Basket</a>
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
            <div className="nav">
              <a
                className="nav-link text-decoration-underline text-nowrap p-0"
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
                className="form-control form-control-lg rounded-pill"
                id="house"
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
                className="form-control form-control-lg rounded-pill"
                id="floor"
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
            className="form-control form-control-lg rounded-pill"
            id="phone-number"
            data-input-format='{"numericOnly": true, "delimiters": ["+1 ", " ", " "], "blocks": [0, 3, 3, 2]}'
            placeholder="+1 ___ ___ __"
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
                      className="form-control form-control-lg form-icon-end rounded-pill"
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
                        className="form-control form-control-lg rounded-pill"
                        data-input-format='{"date": true, "datePattern": ["m", "y"]}'
                        placeholder="MM/YY"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control form-control-lg rounded-pill"
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
            {/* Cash on delivery */}
            <div className="mt-4">
              <div
                className="form-check mb-0"
                role="listitem"
                data-bs-toggle="collapse"
                data-bs-target="#cash"
                aria-expanded="false"
                aria-controls="cash"
              >
                <label className="form-check-label w-100 text-dark-emphasis fw-semibold">
                  <input
                    type="radio"
                    className="form-check-input fs-base me-2 me-sm-3"
                    name="payment-method"
                  />
                  Cash on delivery
                </label>
              </div>
              <div
                className="collapse"
                id="cash"
                data-bs-parent="#paymentMethod"
              >
                <div className="d-sm-flex align-items-center pt-3 pt-sm-4 pb-2 ps-3 ms-2 ms-sm-3">
                  <span className="fs-sm me-3">
                    I would require a change from:
                  </span>
                  <div
                    className="input-group mt-2 mt-sm-0"
                    style={{ maxWidth: 150 }}
                  >
                    <span className="input-group-text rounded-pill rounded-end-0">
                      <i className="ci-dollar-sign" />
                    </span>
                    <input
                      type="number"
                      className="form-control rounded-pill rounded-start-0"
                      aria-label="Amount (to the nearest dollar)"
                    />
                  </div>
                </div>
              </div>
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
                  Card on delivery
                </label>
              </div>
              <div
                className="collapse"
                id="card-on-delivery"
                data-bs-parent="#paymentMethod"
              />
            </div>
          </div>
          {/* Packaging section */}
          <h2 className="h5 mt-5 mb-4">Packaging</h2>
          <div
            className="alert alert-success text-dark-emphasis fs-sm border-0 rounded-4 mb-4"
            role="alert"
          >
            We are eco-friendly company 🍏, so we use as little plastic as
            possible.
          </div>
          <div className="d-flex flex-column gap-3">
            <div className="form-check m-0">
              <input
                type="radio"
                className="form-check-input"
                id="bags"
                name="packaging"
              />
              <label
                htmlFor="bags"
                className="form-check-label text-dark-emphasis fw-medium"
              >
                Branded bags{" "}
                <span className="text-body-secondary">
                  (absorbent polyester)
                </span>
              </label>
            </div>
            <div className="form-check m-0">
              <input
                type="radio"
                className="form-check-input"
                id="eco"
                name="packaging"
              />
              <label
                htmlFor="eco"
                className="form-check-label text-dark-emphasis fw-medium"
              >
                Eco-friendly packaging{" "}
                <span className="text-body-secondary">
                  (cardboard packaging)
                </span>
              </label>
            </div>
          </div>
        </div>
        {/* Order summary (sticky sidebar) */}
        <aside className="col-lg-4 offset-xl-1" style={{ marginTop: "-115px" }}>
          <div className="position-sticky top-0" style={{ paddingTop: 115 }}>
            <div className="d-flex align-items-center justify-content-between border-bottom pb-4 mb-4">
              <h2 className="h5 mb-0 me-3">Order summary</h2>
              <div className="nav">
                <a
                  className="nav-link text-decoration-underline p-0"
                  href="checkout-v2-cart.html"
                >
                  Edit
                </a>
              </div>
            </div>
            <ul className="list-unstyled fs-sm gap-3 mb-0">
              <li className="d-flex justify-content-between">
                Subtotal (8 items):
                <span className="text-dark-emphasis fw-medium">$71.70</span>
              </li>
              <li className="d-flex justify-content-between">
                Saving:
                <span className="text-danger fw-medium">-$2.79</span>
              </li>
              <li className="d-flex justify-content-between">
                Delivery:
                <span className="text-dark-emphasis fw-medium">Free</span>
              </li>
            </ul>
            <div className="border-top pt-4 mt-4">
              <div className="d-flex justify-content-between mb-4">
                <span className="fs-sm">Estimated total:</span>
                <span className="h5 mb-0">$68.91</span>
              </div>
              <div
                className="alert d-flex alert-warning fs-sm rounded-4 mb-4"
                role="alert"
              >
                <i className="ci-info fs-lg pe-1 mt-1 me-2" />
                <div>
                  There is a weighted product in the cart. The actual amount may
                  differ from the indicated amount.
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="order-note" className="form-label">
                  Order note
                </label>
                <textarea
                  className="form-control rounded-5"
                  id="order-note"
                  rows={3}
                  defaultValue={""}
                />
              </div>
              <div className="form-check mb-4">
                <input type="checkbox" className="form-check-input" id="age" />
                <label htmlFor="age" className="form-check-label">
                  The order has products with age restrictions. I confirm that
                  <span className="fw-semibold">
                    I am at least 18 years old.
                  </span>
                </label>
              </div>
              <a
                className="btn btn-lg btn-primary w-100 rounded-pill"
                href="checkout-v2-thankyou.html"
              >
                Confirm the order
                <i className="ci-chevron-right fs-lg ms-1 me-n1" />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  </main>

  <>
  {/* Back to top button */}
  <div className="floating-buttons position-fixed top-50 end-0 z-sticky me-3 me-xl-4 pb-4">
    <a
      className="btn-scroll-top btn btn-sm bg-body border-0 rounded-pill shadow animate-slide-end"
      href="#top"
    >
      Top
      <i className="ci-arrow-right fs-base ms-1 me-n1 animate-target" />
      <span className="position-absolute top-0 start-0 w-100 h-100 border rounded-pill z-0" />
      <svg
        className="position-absolute top-0 start-0 w-100 h-100 z-1"
        viewBox="0 0 62 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x=".75"
          y=".75"
          width="60.5"
          height="30.5"
          rx="15.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit={10}
        />
      </svg>
    </a>
    <a
      className="btn btn-sm btn-outline-secondary text-uppercase bg-body rounded-pill shadow animate-rotate ms-2 me-n5"
      href="#customizer"
      style={{ fontSize: ".625rem", letterSpacing: ".05rem" }}
      data-bs-toggle="offcanvas"
      role="button"
      aria-controls="customizer"
    >
      Customize
      <i className="ci-settings fs-base ms-1 me-n2 animate-target" />
    </a>
  </div>
</>

</>

  )
}

export default Checkout
