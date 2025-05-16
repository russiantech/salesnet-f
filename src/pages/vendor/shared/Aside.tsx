import { NavLink } from 'react-router-dom';

const Aside = () => {
    return (
        <>
            {/* Sidebar navigation that turns into offcanvas on screens < 992px wide (lg breakpoint) */}
            <aside className="col-lg-3">
                <div className="d-none d-lg-block" style={{ marginTop: '-105px' }} />
                <div className="offcanvas-lg offcanvas-start sticky-lg-top pe-lg-0 pe-xl-4" id="accountSidebar">
                    <div className="d-none d-lg-block" style={{ paddingTop: '105px' }} />
                    {/* Header */}
                    <div className="offcanvas-header align-items-start d-lg-block py-3 p-lg-0">
                        <div className="d-flex align-items-start flex-lg-column gap-lg-3">
                            {/* Visible on screens > 991px wide */}
                            <div className="ratio ratio-1x1 border rounded-circle overflow-hidden d-none d-lg-block" style={{ width: '86px' }}>
                                <img src="/assets/img/us/logos/favicon.svg" alt="Avatar" />
                            </div>
                            {/* Visible on screens < 992px wide */}
                            <div className="ratio ratio-1x1 border rounded-circle overflow-hidden flex-shrink-0 d-lg-none" style={{ width: '48px' }}>
                                <img src="/assets/img/us/logos/favicon.svg" alt="Avatar" />
                            </div>
                            <div className="w-100 ps-2 ms-1 ms-lg-0 ps-lg-0">
                                <h4 className="h6 mb-1 mb-lg-2">Techa - Russian Developers.</h4>
                                <p className="fs-sm mb-0">Digital products &amp; bespoke development</p>
                            </div>
                        </div>
                        <button type="button" className="btn-close d-lg-none mt-n2" data-bs-dismiss="offcanvas" data-bs-target="#accountSidebar" aria-label="Close" />
                    </div>
                    {/* Body (Navigation) */}
                    <div className="offcanvas-body d-block pt-2 pt-lg-4 pb-lg-0">
                        <nav className="list-group list-group-borderless">
                            <NavLink className="list-group-item list-group-item-action d-flex align-items-center rounded-pill pe-none---" to="/vendor/dashboard">
                                <i className="ci-grid fs-base opacity-75 me-2" />
                                Dashboard
                            </NavLink>
                            <NavLink className="list-group-item list-group-item-action d-flex align-items-center rounded-pill" to="/vendor/products">
                                <i className="ci-layers fs-base opacity-75 me-2" />
                                Products (4)
                            </NavLink>
                            <NavLink className="list-group-item list-group-item-action d-flex align-items-center rounded-pill" to="/vendor/sales">
                                <i className="ci-pie-chart fs-base opacity-75 me-2" />
                                Sales
                            </NavLink>
                            {/* <button className="list-group-item list-group-item-action d-flex align-items-center rounded-pill" 
                            to="/vendor/sales">
                                <i className="ci-pie-chart fs-base opacity-75 me-2" />
                                Create-offer
                            </button> */}

                            <NavLink data-bs-toggle="modal" data-bs-target="#OfferForm" 
                            className="list-group-item list-group-item-action d-flex align-items-center rounded-pill animate-scale " 
                            to="/vendor/offers/!" data-discover="true">
                              {/* <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center 
                              w-100 h-100 rounded-circle animate-scale fs-lg">
                                <i className="ci-powerbank animate-target fs-4 m-1"></i>Create Offer</span> */}
                                 <i className="ci-powerbank animate-target fs-base opacity-75 me-2" />
                                 Create-offer
                            </NavLink>

                            <NavLink className="list-group-item list-group-item-action d-flex align-items-center rounded-pill" to="/vendor/payouts">
                                <i className="ci-dollar-sign fs-base opacity-75 me-2" />
                                Payouts
                            </NavLink>
                        </nav>
                        <h6 className="pt-4 ps-2 ms-1">User account</h6>
                        <nav className="list-group list-group-borderless">
                            <NavLink className="list-group-item list-group-item-action d-flex align-items-center rounded-pill" to="/vendor/purchases">
                                <i className="ci-shopping-bag fs-base opacity-75 me-2" />
                                Purchases (6)
                            </NavLink>
                            <NavLink className="list-group-item list-group-item-action d-flex align-items-center rounded-pill" to="/vendor/favorites">
                                <i className="ci-heart fs-base opacity-75 me-2" />
                                Favorites
                            </NavLink>
                            <NavLink className="list-group-item list-group-item-action d-flex align-items-center rounded-pill" to="/vendor/settings">
                                <i className="ci-settings fs-base opacity-75 me-2" />
                                Settings
                            </NavLink>
                            <NavLink className="list-group-item list-group-item-action d-flex align-items-center rounded-pill" to="/user/signout">
                                <i className="ci-log-out fs-base opacity-75 me-2" />
                                Signout
                            </NavLink>
                        </nav>
                    </div>

      <div className="dropdown">
        {/* <button type="button" className="theme-switcher btn btn-icon btn-lg btn-outline-secondary fs-lg border-0 rounded-circle animate-scale" 
        data-bs-toggle="dropdown" aria-expanded="false" aria-label="Toggle theme (light)">
          <span className="theme-icon-active d-flex animate-target">
            <i className="ci-sun" />
          </span>
        </button> */}
        <button type="button" data-bs-toggle="dropdown" aria-expanded="false" aria-label="Toggle theme (light)"  className="btn btn-dark rounded-pill w-100 animate-scale mt-lg-4">
            <i className="ci-refresh-ccw animate-target fs-sm ms-n1 me-2 fw-bold"></i> Switch Account
        </button>

        <ul className="dropdown-menu" style={{"--cz-drop-down-min-width": '9rem'}}>
          <li>
            <button type="button" className="dropdown-item active" data-bs-theme-value="light" aria-pressed="true">
              <span className="theme-icon d-flex fs-base me-2">
                <i className="ci-sun" />
              </span>
              <span className="theme-label">Salesnet</span>
              <i className="item-active-indicator ci-check ms-auto" />
            </button>
          </li>
          <li>
            <button type="button" className="dropdown-item" data-bs-theme-value="dark" aria-pressed="false">
              <span className="theme-icon d-flex fs-base me-2">
                <i className="ci-moon" />
              </span>
              <span className="theme-label">Intellect</span>
              <i className="item-active-indicator ci-check ms-auto" />
            </button>
          </li>
          <li>
            <button type="button" className="dropdown-item" data-bs-theme-value="auto" aria-pressed="false">
              <span className="theme-icon d-flex fs-base me-2">
                <i className="ci-auto" />
              </span>
              <span className="theme-label">Barman</span>
              <i className="item-active-indicator ci-check ms-auto" />
            </button>
          </li>
        </ul>
      </div>

                </div>
            </aside>
        </>
    );
};

export default Aside;
