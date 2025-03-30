import React from 'react';

const Promote = ({ onChange }) => {
  return (
    <section className="position-relative bg-body rounded p-4 mt-4">
      <h2 className="h4 mb-3 text-center">Promote Your Listing</h2>

        <div className="row g-4 pt-5 pb-3">
          {/* Plan */}
          <div className="col-12 col-md-4">
            <div className="card h-100 bg-body-tertiary border-0 rounded-5 p-3">
              <div className="card-body p-2 p-xl-3">
                <button type="button" className="btn btn-dark position-relative rounded-pill mb-3 mb-xl-4">
                  <i className="ci-zap fs-lg fw-bold"></i> Easy Start
                </button>
                <div className="d-flex align-items-center pb-1 pb-xl-0 mb-2 mb-xl-3">
                  <div className="h1 mb-0">$3.9</div>
                  <div className="fs-sm ms-2">/ month</div>
                </div>
                <p className="fs-sm mb-xl-4">Ideal if you're testing the waters and want to start with basic exposure.</p>
                <button type="button" className="btn btn-lg btn-outline-info w-100">Select Easy Start</button>
                <ul className="list-unstyled gap-md-3 fs-sm text-dark-emphasis pt-4 mt-lg-1 mt-xl-2 mb-0">
                  <li className="d-flex">
                    <i className="fi-check fs-base text-body-secondary me-2" style={{ marginTop: '3px' }} />
                    7-Day Run for your ad active for one week
                  </li>
                  <li className="d-flex">
                    <i className="fi-check fs-base text-body-secondary me-2" style={{ marginTop: '3px' }} />
                    Keep your ad live and active for one week
                  </li>
                  <li className="d-flex">
                    <i className="fi-check fs-base text-body-secondary me-2" style={{ marginTop: '3px' }} />
                    Track views and basic engagement metrics
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Featured plan */}
          <div className="col-12 col-md-4">
            <div className="position-relative h-100">
              <div className="card position-relative h-100 z-2 bg-body-tertiary border-0 rounded-5 p-3">
                <div className="card-body p-2 p-xl-3">
                  <button type="button" className="btn text-info bg-info-subtle position-relative rounded-pill mb-3 mb-xl-4">
                    <i className="ci-cloud-lightning"></i> Fast Sale
                    <span className="badge d-flex text-bg-info position-absolute top-0 start-100 translate-middle rounded-pill">Recommended</span>
                  </button>
                  <div className="d-flex align-items-center pb-1 pb-xl-0 mb-2 mb-xl-3">
                    <div className="h1 mb-0">$6.9</div>
                    <div className="fs-sm ms-2">/ month</div>
                  </div>
                  <p className="fs-sm mb-xl-4">Perfect for serious sellers who want more exposure and detailed insights.</p>
                  <button type="button" className="btn btn-lg btn-info w-100">Select Fast Sale</button>
                  <div className="h6 fs-sm pt-4 mt-lg-1 mt-xl-2">Includes everything in Easy Start +</div>
                  <ul className="list-unstyled gap-md-3 fs-sm text-dark-emphasis mb-0">
                    <li className="d-flex">
                      <i className="fi-check fs-base text-body-secondary me-2" style={{ marginTop: '3px' }} />
                      14-Day Run for your ad active for two weeks
                    </li>
                    <li className="d-flex">
                      <i className="fi-check fs-base text-body-secondary me-2" style={{ marginTop: '3px' }} />
                      Detailed user engagement analytics
                    </li>
                    <li className="d-flex">
                      <i className="fi-check fs-base text-body-secondary me-2" style={{ marginTop: '3px' }} />
                      Dedicated assistance from our support team
                    </li>
                  </ul>
                </div>
              </div>
              <div className="position-absolute top-0 start-0 w-100 z-1 fs-sm fw-semibold text-white text-center" style={{ marginTop: '-27px' }}>Recommended</div>
              <div className="position-absolute top-0 start-0 bg-info rounded-5 ms-n1" style={{ width: 'calc(100% + 8px)', height: 'calc(100% + 36px)', marginTop: '-32px' }} />
            </div>
          </div>

          {/* Plan */}
          <div className="col-12 col-md-4">
            <div className="position-relative">
              <div className="card position-relative h-100 z-1 bg-body-tertiary border-0 rounded-5 p-3">
                <div className="card-body p-2 p-xl-3">
                  <button className="badge d-inline-flex align-items-center text-info bg-info-subtle fw-semibold text-decoration-none py-2 px-3 mb-2 rounded-pill mb-3 mb-xl-4">
                    <i className="ci-rocket fs-lg ms-1"></i> Turbo Boost
                  </button>
                  <div className="d-flex align-items-center pb-1 pb-xl-0 mb-2 mb-xl-3">
                    <div className="h1 mb-0">$7.90</div>
                    <div className="fs-sm ms-2">/ month</div>
                  </div>
                  <p className="fs-sm mb-xl-4">Best for ambitious sellers who want maximum exposure and advanced insights.</p>
                  <button type="button" className="btn btn-lg btn-outline-info w-100">Select Turbo Boost</button>
                  <div className="h6 fs-sm pt-4 mt-lg-1 mt-xl-2">Includes everything in Fast Sale +</div>
                  <ul className="list-unstyled gap-md-3 fs-sm text-dark-emphasis mb-0">
                    <li className="d-flex">
                      <i className="fi-check fs-base text-body-secondary me-2" style={{ marginTop: '3px' }} />
                      28-Day Run for your ad active for three weeks
                    </li>
                    <li className="d-flex">
                      <i className="fi-check fs-base text-body-secondary me-2" style={{ marginTop: '3px' }} />
                      Advanced comprehensive data analysis
                    </li>
                    <li className="d-flex">
                      <i className="fi-check fs-base text-body-secondary me-2" style={{ marginTop: '3px' }} />
                      Personalized assistance from our manager
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

    </section>
  );
}

export default Promote;
