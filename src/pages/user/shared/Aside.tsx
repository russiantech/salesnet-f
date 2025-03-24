import { NavLink } from 'react-router-dom'
import Bonuses from './Bonuses'

const Aside = () => {
  return (
    <>
    <Bonuses />
    <aside className="col-lg-3">
        <div
          className="offcanvas-lg offcanvas-start pe-lg-0 pe-xl-4"
          id="accountSidebar"
        >
          {/* Header */}
          <div className="offcanvas-header d-lg-block py-3 p-lg-0">
            <div className="d-flex align-items-center">
              <div className="h5 d-flex justify-content-center align-items-center flex-shrink-0 text-primary bg-primary-subtle lh-1 rounded-circle mb-0"
                style={{ width: "3rem", height: "3rem" }}> R </div>
              <div className="min-w-0 ps-3">
                <h5 className="h6 mb-1">Russian developers</h5>
                <div className="nav flex-nowrap text-nowrap min-w-0">
                  <NavLink
                    className="nav-link animate-underline text-body p-0"
                    to="#bonusesModal"
                    data-bs-toggle="modal"
                  >
                    <svg
                      className="text-warning flex-shrink-0 me-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                    >
                      <path d="M1.333 9.667H7.5V16h-5c-.64 0-1.167-.527-1.167-1.167V9.667zm13.334 0v5.167c0 .64-.527 1.167-1.167 1.167h-5V9.667h6.167zM0 5.833V7.5c0 .64.527 1.167 1.167 1.167h.167H7.5v-1-3H1.167C.527 4.667 0 5.193 0 5.833zm14.833-1.166H8.5v3 1h6.167.167C15.473 8.667 16 8.14 16 7.5V5.833c0-.64-.527-1.167-1.167-1.167z" />
                      <path d="M8 5.363a.5.5 0 0 1-.495-.573C7.752 3.123 9.054-.03 12.219-.03c1.807.001 2.447.977 2.447 1.813 0 1.486-2.069 3.58-6.667 3.58zM12.219.971c-2.388 0-3.295 2.27-3.595 3.377 1.884-.088 3.072-.565 3.756-.971.949-.563 1.287-1.193 1.287-1.595 0-.599-.747-.811-1.447-.811z" />
                      <path d="M8.001 5.363c-4.598 0-6.667-2.094-6.667-3.58 0-.836.641-1.812 2.448-1.812 3.165 0 4.467 3.153 4.713 4.819a.5.5 0 0 1-.495.573zM3.782.971c-.7 0-1.448.213-1.448.812 0 .851 1.489 2.403 5.042 2.566C7.076 3.241 6.169.971 3.782.971z" />
                    </svg>
                    <span className="animate-target me-1">100 bonuses</span>
                    <span className="text-body fw-normal text-truncate">
                      available
                    </span>
                  </NavLink>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="btn-close d-lg-none"
              data-bs-dismiss="offcanvas"
              data-bs-target="#accountSidebar"
              aria-label="Close"
            />
          </div>
          {/* Body (Navigation) */}
          <div className="offcanvas-body d-block pt-2 pt-lg-4 pb-lg-0">
            <nav className="list-group list-group-borderless">
              <NavLink
                className="list-group-item list-group-item-action d-flex align-items-center"
                to="/user/orders"
              >
                <i className="ci-shopping-bag fs-base opacity-75 me-2" />
                Orders
                <span className="badge bg-primary rounded-pill ms-auto">1</span>
              </NavLink>
              <NavLink
                className="list-group-item list-group-item-action d-flex align-items-center"
                to="/user/favorites"
              >
                <i className="ci-heart fs-base opacity-75 me-2" />
                Wishlist
              </NavLink>
              <NavLink
                className="list-group-item list-group-item-action d-flex align-items-center"
                to="/user/payments"
              >
                <i className="ci-credit-card fs-base opacity-75 me-2" />
                Payment methods
              </NavLink>
              <NavLink
                className="list-group-item list-group-item-action d-flex align-items-center"
                to="/user/reviews"
              >
                <i className="ci-star fs-base opacity-75 me-2" />
                My reviews
              </NavLink>
            </nav>
            <h6 className="pt-4 ps-2 ms-1">Manage account</h6>
            <nav className="list-group list-group-borderless">
              <NavLink className="list-group-item list-group-item-action d-flex align-items-center"
                to="/user/personal">
                <i className="ci-user fs-base opacity-75 me-2" />
                Personal info
              </NavLink>
              <NavLink
                className="list-group-item list-group-item-action d-flex align-items-center"
                to="/user/addresses"
              >
                <i className="ci-map-pin fs-base opacity-75 me-2" />
                Addresses
              </NavLink>
              <NavLink
                className="list-group-item list-group-item-action d-flex align-items-center"
                to="/user/notifications"
              >
                <i className="ci-bell fs-base opacity-75 mt-1 me-2" />
                Notifications
              </NavLink>
            </nav>
            <h6 className="pt-4 ps-2 ms-1">Customer service</h6>
            <nav className="list-group list-group-borderless">
              <NavLink
                className="list-group-item list-group-item-action d-flex align-items-center"
                to="/user/help" >
                <i className="ci-help-circle fs-base opacity-75 me-2" />
                Help center
              </NavLink>
              <NavLink
                className="list-group-item list-group-item-action d-flex align-items-center"
                to="/user/terms"
              >
                <i className="ci-info fs-base opacity-75 me-2" />
                Terms and conditions
              </NavLink>
            </nav>
            <nav className="list-group list-group-borderless pt-3">
              <NavLink
                className="list-group-item list-group-item-action d-flex align-items-center"
                to="/auth/signout"
              >
                <i className="ci-log-out fs-base opacity-75 me-2" />
                Log out
              </NavLink>
            </nav>
          </div>
        </div>
    </aside>
    </>
  )
}

export default Aside
