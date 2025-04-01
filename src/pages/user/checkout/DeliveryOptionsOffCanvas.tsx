import React from 'react'

const DeliveryOptionsOffCanvas = () => {
  return (
    <>
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
              className="form-control "
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
            className="form-control "
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
    </>
  )
}

export default DeliveryOptionsOffCanvas
