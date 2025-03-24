import Navigation from '../../../components/shared/Navigation'
import Aside from '../shared/Aside'

const Settings = () => {
  return (
    <>
        {/* Add payment method modal */}
        <div className="modal fade" id="addPaymentModal" data-bs-backdrop="static" tabIndex={-1} aria-labelledby="addPaymentModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addPaymentModalLabel">Add new payment method</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                {/* Nav tabs */}
                <ul className="nav nav-tabs rounded-pill mb-3" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button type="button" className="nav-link rounded-pill active" id="card-tab" data-bs-toggle="tab" data-bs-target="#card-tab-pane" role="tab" aria-controls="card-tab-pane" aria-selected="true">
                      <i className="ci-credit-card fs-base opacity-75 ms-n2 me-2" />
                      Card
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button type="button" className="nav-link rounded-pill" id="paypal-tab" data-bs-toggle="tab" data-bs-target="#paypal-tab-pane" role="tab" aria-controls="paypal-tab-pane" aria-selected="false">
                      <img src="/assets/img/payment-methods/paypal-icon.svg" className="me-2" width={14} alt="PayPal" />
                      PayPal
                    </button>
                  </li>
                </ul>
                <div className="tab-content">
                  {/* Card tab */}
                  <div className="tab-pane fade show active" id="card-tab-pane" role="tabpanel" aria-labelledby="card-tab">
                    <form className="needs-validation" noValidate>
                      <div className="mb-3">
                        <label htmlFor="card-number" className="form-label">Card number</label>
                        <div className="position-relative" data-input-format="{&quot;creditCard&quot;: true}">
                          <input type="text" className="form-control form-icon-end rounded-pill" id="card-number" style={{backgroundImage: 'none'}} placeholder="XXXX XXXX XXXX XXXX" required />
                          <span className="position-absolute d-flex top-50 end-0 translate-middle-y fs-5 text-body-tertiary me-3" data-card-icon />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="card-name" className="form-label">Name on card</label>
                        <input type="text" className="form-control rounded-pill" id="card-name" placeholder="Full name" required />
                      </div>
                      <div className="row mb-4">
                        <div className="col-7">
                          <label htmlFor="card-expiration" className="form-label">Expiration date</label>
                          <input type="text" className="form-control rounded-pill" id="card-expiration" data-input-format="{&quot;date&quot;: true, &quot;datePattern&quot;: [&quot;m&quot;, &quot;y&quot;]}" placeholder="MM/YY" required />
                        </div>
                        <div className="col-5">
                          <label htmlFor="card-cvc" className="form-label">CVC</label>
                          <input type="text" className="form-control rounded-pill" id="card-cvc" data-input-format="{&quot;numericOnly&quot;: true, &quot;blocks&quot;: [3]}" placeholder="XXX" required />
                        </div>
                      </div>
                      <div className="d-flex gap-3">
                        <button type="reset" className="btn btn-secondary w-100 rounded-pill" data-bs-dismiss="modal" data-bs-target="#addPaymentModal">Cancel</button>
                        <button type="submit" className="btn btn-primary w-100 rounded-pill">Add card</button>
                      </div>
                    </form>
                  </div>
                  {/* PayPal tab */}
                  <div className="tab-pane fade" id="paypal-tab-pane" role="tabpanel" aria-labelledby="paypal-tab">
                    <form className="needs-validation" noValidate>
                      <div className="mb-4">
                        <label htmlFor="paypal-email" className="form-label">Email associated with PayPal</label>
                        <input type="email" className="form-control rounded-pill" id="paypal-email" placeholder="Email address" required />
                        <div className="invalid-feedback">Please provide a valid email address!</div>
                      </div>
                      <div className="d-flex gap-3">
                        <button type="reset" className="btn btn-secondary w-100 rounded-pill" data-bs-dismiss="modal" data-bs-target="#addPaymentModal">Cancel</button>
                        <button type="submit" className="btn btn-primary w-100 rounded-pill">Continue</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Navigation />

        {/* Page content */}
        <main className="content-wrapper">
          <div className="container pt-4 pt-lg-5 pb-5">
            <div className="row pt-sm-2 pt-md-3 pt-lg-0 pb-2 pb-sm-3 pb-md-4 pb-lg-5">
              {/* Sidebar navigation that turns into offcanvas on screens < 992px wide (lg breakpoint) */}
              <Aside />
              {/* Account settings content */}
              <div className="col-lg-9 pt-2 pt-xl-3">
                {/* Page title */}
                <h1 className="h2 pb-1 pb-sm-2 pb-md-3">Settings</h1>
                {/* Nav tabs */}
                <div className="overflow-auto mb-3">
                  <ul className="nav nav-pills flex-nowrap gap-2 text-nowrap pb-3" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button type="button" className="nav-link active" id="profile-tab" data-bs-toggle="pill" data-bs-target="#profile" role="tab" aria-controls="profile" aria-selected="true">
                        Profile
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button type="button" className="nav-link" id="security-tab" data-bs-toggle="pill" data-bs-target="#security" role="tab" aria-controls="security" aria-selected="false">
                        Security
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button type="button" className="nav-link" id="payment-tab" data-bs-toggle="pill" data-bs-target="#payment" role="tab" aria-controls="payment" aria-selected="false">
                        Payment methods
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button type="button" className="nav-link" id="notifications-tab" data-bs-toggle="pill" data-bs-target="#notifications" role="tab" aria-controls="notifications" aria-selected="false">
                        Notifications
                      </button>
                    </li>
                  </ul>
                </div>
                {/* Tabs content */}
                <div className="tab-content">
                  {/* Profile tab */}
                  <div className="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    {/* Avatar */}
                    <div className="d-flex align-items-start align-items-sm-center pb-3 mb-3">
                      <div className="ratio ratio-1x1 hover-effect-opacity border rounded-circle overflow-hidden" style={{width: '112px'}}>
                        <img src="/assets/img/account/avatar-lg.png" alt="Avatar" />
                        <div className="hover-effect-target position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 opacity-0">
                          <button type="button" className="btn btn-icon btn-sm btn-light position-relative z-2" aria-label="Remove">
                            <i className="ci-trash fs-base" />
                          </button>
                          <span className="position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-25 z-1" />
                        </div>
                      </div>
                      <div className="ps-3 ps-sm-4">
                        <p className="fs-sm" style={{maxWidth: '400px'}}>Your profile picture will appear on your profile and listings. PNG or JPG no bigger than 500px wide and tall.</p>
                        <button type="button" className="btn btn-sm btn-secondary animate-rotate rounded-pill">
                          <i className="ci-refresh-ccw animate-target fs-sm ms-n1 me-2" />
                          Update picture
                        </button>
                      </div>
                    </div>
                    {/* Settings form */}
                    <form className="needs-validation" noValidate>
                      <div className="row row-cols-1 row-cols-sm-2 g-4 mb-4">
                        <div className="col position-relative">
                          <label htmlFor="fn" className="form-label fs-base">First name *</label>
                          <input type="text" className="form-control form-control-lg rounded-pill" id="fn" defaultValue="Createx" required />
                          <div className="invalid-tooltip bg-transparent p-0">Enter your first name!</div>
                        </div>
                        <div className="col position-relative">
                          <label htmlFor="ln" className="form-label fs-base">Last name *</label>
                          <input type="text" className="form-control form-control-lg rounded-pill" id="ln" defaultValue="Studio" required />
                          <div className="invalid-tooltip bg-transparent p-0">Enter your last name!</div>
                        </div>
                        <div className="col position-relative">
                          <label htmlFor="email" className="form-label d-flex align-items-center fs-base">Email address * <span className="badge text-danger bg-danger-subtle ms-2">Verify email</span></label>
                          <input type="email" className="form-control form-control-lg rounded-pill" id="email" defaultValue="contact@createx.studio" required />
                          <div className="invalid-tooltip bg-transparent p-0">Enter a valid email address!</div>
                        </div>
                        <div className="col">
                          <label htmlFor="display-name" className="form-label fs-base">Display name</label>
                          <input type="text" className="form-control form-control-lg form-icon-end rounded-pill" id="display-name" defaultValue="Createx Studio" />
                        </div>
                      </div>
                      <div className="pb-2 mb-3 mb-sm-4">
                        <label htmlFor="description" className="form-label fs-base">Description</label>
                        <textarea className="form-control form-control-lg rounded-5" id="description" rows={6} defaultValue={"Digital products & bespoke development"} />
                      </div>
                      <div className="pb-2 mb-4">
                        <div className="form-check fs-lg m-0">
                          <input type="checkbox" className="form-check-input" id="allow-contact" />
                          <label htmlFor="allow-contact" className="form-check-label fs-base">Allow other users to contact you with work inquiries.</label>
                        </div>
                      </div>
                      <div className="d-flex gap-3">
                        <button type="submit" className="btn btn-lg btn-primary rounded-pill">Save changes</button>
                        <button type="reset" className="btn btn-lg btn-secondary rounded-pill">Cancel</button>
                      </div>
                    </form>
                  </div>
                  {/* Security tab */}
                  <div className="tab-pane fade" id="security" role="tabpanel" aria-labelledby="security-tab">
                    {/* Change password form */}
                    <form className="needs-validation" noValidate>
                      <div className="row row-cols-1 row-cols-sm-2 g-4 mb-4">
                        <div className="col">
                          <label htmlFor="current-password" className="form-label fs-base">Current password</label>
                          <div className="password-toggle">
                            <input type="password" className="form-control form-control-lg rounded-pill" id="current-password" required />
                            <div className="invalid-tooltip bg-transparent p-0">Incorrect password. Please try again.</div>
                            <label className="password-toggle-button" aria-label="Show/hide password">
                              <input type="checkbox" className="btn-check" />
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="row row-cols-1 row-cols-sm-2 g-4 mb-4">
                        <div className="col">
                          <label htmlFor="new-password" className="form-label fs-base">New password <span className="fs-sm fw-normal text-body-secondary">(Min 8 chars)</span></label>
                          <div className="password-toggle">
                            <input type="password" className="form-control form-control-lg rounded-pill" minLength={8} id="new-password" required />
                            <div className="invalid-tooltip bg-transparent p-0">Please ensure password is at least 8 characters long.</div>
                            <label className="password-toggle-button" aria-label="Show/hide password">
                              <input type="checkbox" className="btn-check" />
                            </label>
                          </div>
                        </div>
                        <div className="col">
                          <label htmlFor="confirm-new-password" className="form-label fs-base">Confirm new password</label>
                          <div className="password-toggle">
                            <input type="password" className="form-control form-control-lg rounded-pill" minLength={8} id="confirm-new-password" required />
                            <div className="invalid-tooltip bg-transparent p-0">Passwords do not match.</div>
                            <label className="password-toggle-button" aria-label="Show/hide password">
                              <input type="checkbox" className="btn-check" />
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex gap-3">
                        <button type="submit" className="btn btn-lg btn-primary rounded-pill">Update password</button>
                        <button type="reset" className="btn btn-lg btn-secondary rounded-pill">Cancel</button>
                      </div>
                    </form>
                    {/* Delete account */}
                    <h2 className="h6 pt-5 mt-xl-2 pb-1 mb-2">Delete account</h2>
                    <p className="fs-sm">When you delete your account, your public profile will be deactivated immediately. If you change your mind before the 14 days are up, sign in with your email and password, and we'll send a link to reactivate account.</p>
                    <div className="form-check mb-3">
                      <input type="checkbox" className="form-check-input" id="confirm-deletion" />
                      <label htmlFor="confirm-deletion" className="form-check-label">Yes, I want to delete my account</label>
                    </div>
                    <a className="fs-sm fw-medium text-danger" href="#!">Delete account</a>
                  </div>
                  {/* Payment methods tab */}
                  <div className="tab-pane fade" id="payment" role="tabpanel" aria-labelledby="payment-tab">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 g-md-4 g-lg-3 g-xl-4">
                      <div className="col">
                        <div className="card h-100 rounded-4">
                          <div className="card-body pb-3">
                            <div className="d-flex align-items-start justify-content-between mb-4">
                              <img src="/assets/img/payment-methods/mastercard.svg" className="m-n3" width={100} alt="Mastercard" />
                              <span className="badge text-bg-info rounded-pill">Primary</span>
                            </div>
                            <div className="h6 mb-1">**** **** **** 8341</div>
                            <div className="text-danger fs-xs">Expired 05/24</div>
                          </div>
                          <div className="card-footer d-flex gap-2 bg-transparent border-0 pt-0 pb-4">
                            <button type="button" className="btn btn-sm btn-outline-secondary rounded-pill me-1">Edit</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary rounded-pill">Remove</button>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="card h-100 rounded-4">
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
                          <div className="card-footer d-flex gap-2 bg-transparent border-0 pt-0 pb-4">
                            <button type="button" className="btn btn-sm btn-outline-secondary rounded-pill me-1">Edit</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary rounded-pill">Remove</button>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="card border-0 h-100">
                          <span className="position-absolute top-0 start-0 w-100 h-100 border border-dashed border-secondary border-opacity-25 rounded-4 d-none-dark" />
                          <span className="position-absolute top-0 start-0 w-100 h-100 border border-dashed border-light border-opacity-25 rounded-4 d-none d-block-dark" />
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
                  {/* Notifications tab */}
                  <div className="tab-pane fade" id="notifications" role="tabpanel" aria-labelledby="notifications-tab">
                    <div className="vstack gap-4 pt-sm-1">
                      <div className="form-check form-switch mb-0">
                        <input type="checkbox" className="form-check-input" id="product-sold" defaultChecked />
                        <label className="form-check-label ps-2" htmlFor="product-sold">
                          <span className="d-block h6 mb-2">Product sold notifications</span>
                          <span className="fs-sm">Send an email when someone purchased one of my product.</span>
                        </label>
                      </div>
                      <div className="form-check form-switch mb-0">
                        <input type="checkbox" className="form-check-input" id="product-update" defaultChecked />
                        <label className="form-check-label ps-2" htmlFor="product-update">
                          <span className="d-block h6 mb-2">Product update notifications</span>
                          <span className="fs-sm">Send an email when a product I've purchased is updated.</span>
                        </label>
                      </div>
                      <div className="form-check form-switch mb-0">
                        <input type="checkbox" className="form-check-input" id="surveys" />
                        <label className="form-check-label ps-2" htmlFor="surveys">
                          <span className="d-block h6 mb-2">Surveys and tests</span>
                          <span className="fs-sm">Receive invitations to participate in surveys, consultations, and tool testing.</span>
                        </label>
                      </div>
                      <div className="form-check form-switch mb-0">
                        <input type="checkbox" className="form-check-input" id="product-review" defaultChecked />
                        <label className="form-check-label ps-2" htmlFor="product-review">
                          <span className="d-block h6 mb-2">Product review notifications</span>
                          <span className="fs-sm">Company news and cooperation offers.</span>
                        </label>
                      </div>
                      <div className="form-check form-switch mb-0">
                        <input type="checkbox" className="form-check-input" id="daily-summary" />
                        <label className="form-check-label ps-2" htmlFor="daily-summary">
                          <span className="d-block h6 mb-2">Daily summary emails</span>
                          <span className="fs-sm">Send an email when someone leaves a review with his/her rating.</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
    </>
  )
}

export default Settings
