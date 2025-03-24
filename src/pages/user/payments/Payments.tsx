import AddPaymentModal from './AddPaymentModal'
import Aside from '../shared/Aside'
import Navigation from '../../../components/shared/Navigation'

const Payments = () => {
  return (
    <>

      <div>
        {/* Add payment method modal */}
        <AddPaymentModal />

        <Navigation />
        
        {/* Page content */}
        <main className="content-wrapper">
          <div className="container py-5 mt-n2 mt-sm-0">
            <div className="row pt-md-2 pt-lg-3 pb-sm-2 pb-md-3 pb-lg-4 pb-xl-5">
              
              {/* Sidebar navigation that turns into offcanvas on screens < 992px wide (lg breakpoint) */}
              <Aside />

              {/* Payment methods content */}
              <div className="col-lg-9">
                <div className="ps-lg-3 ps-xl-0">
                  {/* Page title */}
                  <h1 className="h2 pb-2 pb-md-3">Payment methods</h1>
                  {/* Payment methods (Grid) */}
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 g-md-4 g-lg-3 g-xl-4">
                    <div className="col">
                      <div className="card h-100">
                        <div className="card-body pb-3">
                          <div className="d-flex align-items-start justify-content-between mb-4">
                            <img src="/assets/img/payment-methods/mastercard.svg" className="m-n3" width={100} alt="Mastercard" />
                            <span className="badge text-bg-info rounded-pill">Primary</span>
                          </div>
                          <div className="h6 mb-1">**** **** **** 8341</div>
                          <div className="text-danger fs-xs">Expired 05/24</div>
                        </div>
                        <div className="card-footer d-flex gap-3 bg-transparent border-0 pt-0 pb-4">
                          <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">Remove</button>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card h-100">
                        <div className="card-body pb-3">
                          <div className="d-flex align-items-start justify-content-between mb-4">
                             <img src="/assets/img/payment-methods/visa-light-mode.svg" className="d-none-dark m-n3" width={100} alt="Visa" />
                             <img src="/assets/img/payment-methods/visa-dark-mode.svg" className="d-none d-block-dark m-n3" width={100} alt="Visa" />
                            <div className="nav animate-underline">
                              <a className="nav-link animate-target fs-xs p-0" href="#!">Set as primary</a>
                            </div>
                          </div>
                          <div className="h6 mb-1">**** **** **** 1276</div>
                          <div className="text-body fs-xs">Expiration 01/27</div>
                        </div>
                        <div className="card-footer d-flex gap-3 bg-transparent border-0 pt-0 pb-4">
                          <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">Remove</button>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card border-0 h-100">
                        <span className="position-absolute top-0 start-0 w-100 h-100 border border-dashed border-secondary border-opacity-25 rounded d-none-dark" />
                        <span className="position-absolute top-0 start-0 w-100 h-100 border border-dashed border-light border-opacity-25 rounded d-none d-block-dark" />
                        <div className="card-body position-relative z-2 nav align-items-center justify-content-center py-5">
                          <a className="nav-link animate-underline stretched-link min-w-0 fs-base px-0" href="#addPaymentModal" data-bs-toggle="modal">
                            <i className="ci-plus fs-lg ms-n2 me-2" />
                            <span className="animate-target text-truncate">Add payment method</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

      </div>


    </>
  )
}

export default Payments
