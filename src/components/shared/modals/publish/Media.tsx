import React from 'react';

const Media = ({ onChange }) => {
  return (
    <section className="position-relative bg-body rounded p-4 mt-4">
      <div className="position-relative z-1 pb-md-2 px-md-2">
        <div className="d-sm-flex align-items-center justify-content-between mb-3 mb-sm-4">
          <h2 className="h4 mb-2 mb-sm-0 me-3">Photos / videos</h2>
          <div className="position-relative d-flex">
            <i className="fi-info text-info mt-1 me-2" />
          </div>
        </div>
        <small className="fs-sm text-warning">Max photo size is 8 MB. Formats: jpeg, jpg, png. Put the main picture first.</small>
        <div style={{ maxWidth: '852px' }}>
          <div className="row row-cols-2 row-cols-sm-3 g-2 g-md-4 g-lg-3 g-xl-4">
            {/* Item */}
            <div className="col">
              <div className="hover-effect-opacity position-relative overflow-hidden rounded">
                <span className="badge text-bg-light position-absolute top-0 start-0 z-3 mt-2 ms-2">Cover</span>
                <div className="ratio" style={{ '-fnAspectRatio': 'calc(180 / 268 * 100%)' }}>
                  <img src="/assets/img/pages/products/upload_01.jpg" alt="Image" />
                </div>
                <div className="hover-effect-target position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 opacity-0">
                  <button type="button" className="btn btn-icon btn-sm btn-light position-relative z-2" aria-label="Remove">
                    <i className="fi-trash fs-base" />
                  </button>
                  <span className="position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-25 z-1" />
                </div>
              </div>
            </div>
            {/* Item */}
            <div className="col">
              <div className="hover-effect-opacity position-relative overflow-hidden rounded">
                <div className="ratio" style={{ 'fnAspectRatio': 'calc(180 / 268 * 100%)' }}>
                  <img src="/assets/img/pages/products/upload_02.jpg" alt="Image" />
                </div>
                <div className="hover-effect-target position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 opacity-0">
                  <button type="button" className="btn btn-icon btn-sm btn-light position-relative z-2" aria-label="Remove">
                    <i className="fi-trash fs-base" />
                  </button>
                  <span className="position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-25 z-1" />
                </div>
              </div>
            </div>
            {/* Item */}
            <div className="col">
              <div className="hover-effect-opacity position-relative overflow-hidden rounded">
                <div className="ratio" style={{ 'fnAspectRatio': 'calc(180 / 268 * 100%)' }}>
                  <img src="/assets/img/add-item/car/03.jpg" alt="Image" />
                </div>
                <div className="hover-effect-target position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 opacity-0">
                  <button type="button" className="btn btn-icon btn-sm btn-light position-relative z-2" aria-label="Remove">
                    <i className="fi-trash fs-base" />
                  </button>
                  <span className="position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-25 z-1" />
                </div>
              </div>
            </div>
            {/* Item */}
            <div className="col">
              <div className="hover-effect-opacity position-relative overflow-hidden rounded">
                <div className="ratio" style={{ 'fnAspectRatio': 'calc(180 / 268 * 100%)' }}>
                  <img src="/assets/img/add-item/car/04.jpg" alt="Image" />
                </div>
                <div className="hover-effect-target position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 opacity-0">
                  <button type="button" className="btn btn-icon btn-sm btn-light position-relative z-2" aria-label="Remove">
                    <i className="fi-trash fs-base" />
                  </button>
                  <span className="position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-25 z-1" />
                </div>
              </div>
            </div>
            {/* Upload button */}
            <div className="col">
              <div className="d-flex align-items-center justify-content-center position-relative h-100 cursor-pointer bg-body-tertiary border border-2 border-dotted rounded p-3">
                <div className="text-center">
                  <i className="fi-plus-circle fs-4 text-secondary-emphasis mb-2" />
                  <div className="hover-effect-underline stretched-link fs-sm fw-medium">Upload photos / videos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-3 mt-2 mt-md-3">
          <label htmlFor="link" className="form-label">Link to the video online.</label>
          <div className="position-relative">
            <i className="fi-link position-absolute top-50 start-0 translate-middle-y fs-lg ms-3" />
            <input type="url" className="form-control form-icon-start" id="link" placeholder="www.youtube.com/..." />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Media;
