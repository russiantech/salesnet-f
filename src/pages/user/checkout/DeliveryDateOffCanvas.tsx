import React from 'react'

const DeliveryDateOffCanvas = () => {
  return (
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
  )
}

export default DeliveryDateOffCanvas
