import Navigation from "../../../components/shared/Navigation"
import Aside from "../shared/Aside"

const Products = () => {
  return (
    <>
    <Navigation />
      {/* Page content */}
      <main className="content-wrapper">
        <div className="container pt-4 pt-lg-5 pb-5">
          <div className="row pt-sm-2 pt-md-3 pt-lg-0 pb-2 pb-sm-3 pb-md-4 pb-lg-5">
            {/* Sidebar navigation that turns into offcanvas on screens < 992px wide (lg breakpoint) */}
            
            <Aside />

            {/* Sales content */}
            <div className="col-lg-9 pt-2 pt-xl-3">
              <div data-filter-list="{&quot;searchClass&quot;: &quot;product-search&quot;, &quot;listClass&quot;: &quot;product-list&quot;, &quot;sortClass&quot;: &quot;product-sort&quot;, &quot;valueNames&quot;: [&quot;product&quot;, &quot;status&quot;, &quot;sales&quot;, &quot;earnings&quot;]}">
                {/* Header */}
                <div className="d-sm-flex align-items-center justify-content-between gap-3 pb-2 pb-sm-3 mb-md-2">
                  <h1 className="h2 text-nowrap mb-sm-0">Products (4)</h1>
                  <div className="position-relative w-100" style={{maxWidth: '300px'}}>
                    <i className="ci-search position-absolute top-50 start-0 translate-middle-y ms-3" />
                    <input type="search" className="product-search form-control form-icon-start rounded-pill" placeholder="Search" />
                  </div>
                </div>
                {/* Sales list (table) */}
                <table className="table align-middle fs-sm mb-0">
                  <thead>
                    <tr>
                      <th className="ps-0" scope="col">
                        <span className="fw-normal text-body">Product</span>
                      </th>
                      <th className="d-none d-md-table-cell" scope="col">
                        <span className="fw-normal text-body">Status</span>
                      </th>
                      <th className="text-end d-none d-md-table-cell" scope="col">
                        <button type="button" className="btn fw-normal text-body product-sort p-0 me-n2" data-sort="sales">Sales</button>
                      </th>
                      <th className="text-end d-none d-sm-table-cell" scope="col">
                        <button type="button" className="btn fw-normal text-body product-sort p-0 me-n2" data-sort="earnings">Earnings</button>
                      </th>
                      <th className="text-end ps-0 ps-sm-3 pe-0" scope="col">
                        <span className="fw-normal text-body">Action</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="product-list">
                    {/* Item */}
                    <tr>
                      <td className="py-3 ps-0">
                        <div className="d-flex align-items-start align-items-md-center hover-effect-scale position-relative py-1">
                          <div className="ratio bg-body-secondary rounded overflow-hidden flex-shrink-sm-0" style={{"--cz-aspect-ratio": 'calc(110 / 142 * 100%)', maxWidth: '142px'}}>
                            <img src="/assets/img/account/products/03.jpg" className="hover-effect-target" alt="Image" />
                          </div>
                          <div className="ps-2 ps-sm-3 ms-1">
                            <span className="badge fs-xs text-success bg-success-subtle rounded-pill d-md-none mb-1">Active</span>
                            <h6 className="product mb-2">
                              <a className="fs-sm fw-medium hover-effect-underline stretched-link" href="/products/slug">iPhone 15 pro mockups</a>
                            </h6>
                            <div className="d-flex flex-md-column align-items-center align-items-md-start gap-2">
                              <div className="h6 mb-0 me-1 me-md-0">$19</div>
                              <div className="d-flex gap-2">
                                <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
                                  <i className="ci-heart text-body-secondary me-1" />
                                  13
                                </div>
                                <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
                                  <i className="ci-message-circle text-body-secondary me-1" />
                                  4
                                </div>
                              </div>
                            </div>
                            <div className="fs-xs text-nowrap d-md-none mt-2 mb-1"><span className="text-body-secondary">Sales:</span> 47</div>
                            <div className="fs-xs text-nowrap d-sm-none"><span className="text-body-secondary">Earnings:</span> $669.75</div>
                          </div>
                        </div>
                      </td>
                      <td className="d-none d-md-table-cell py-3">
                        <span className="status badge fs-xs text-success bg-success-subtle rounded-pill">Active</span>
                      </td>
                      <td className="sales d-none d-md-table-cell text-end py-3">47</td>
                      <td className="text-end d-none d-sm-table-cell py-3">$669.75<span className="earnings visually-hidden">66975</span></td>
                      <td className="text-end py-3 ps-0 ps-sm-3 pe-0">
                        <div className="dropdown">
                          <button type="button" className="btn btn-icon btn-ghost btn-sm btn-secondary rounded-circle" data-bs-toggle="dropdown" aria-expanded="false" aria-label="Settings">
                            <i className="ci-more-vertical fs-base" />
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="#!">
                                <i className="ci-edit opacity-75 me-2" />
                                Edit
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#!">
                                <i className="ci-zap fs-base opacity-75 me-2" />
                                Promote
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#!">
                                <i className="ci-archive opacity-75 me-2" />
                                Move to archive
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item text-danger" href="#!">
                                <i className="ci-trash opacity-75 me-2" />
                                Delete
                              </a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    {/* Item */}
                    <tr>
                      <td className="py-3 ps-0">
                        <div className="d-flex align-items-start align-items-md-center hover-effect-scale position-relative py-1">
                          <div className="ratio bg-body-secondary rounded overflow-hidden flex-shrink-sm-0" style={{"--cz-aspect-ratio": 'calc(110 / 142 * 100%)', maxWidth: '142px'}}>
                            <img src="/assets/img/account/products/04.jpg" className="hover-effect-target" alt="Image" />
                          </div>
                          <div className="ps-2 ps-sm-3 ms-1">
                            <span className="badge fs-xs text-success bg-success-subtle rounded-pill d-md-none mb-1">Active</span>
                            <h6 className="product mb-2">
                              <a className="fs-sm fw-medium hover-effect-underline stretched-link" href="/products/slug">3D box mockup bold rebrand</a>
                            </h6>
                            <div className="d-flex flex-md-column align-items-center align-items-md-start gap-2">
                              <div className="h6 mb-0 me-1 me-md-0">$16</div>
                              <div className="d-flex gap-2">
                                <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
                                  <i className="ci-heart text-body-secondary me-1" />
                                  25
                                </div>
                                <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
                                  <i className="ci-message-circle text-body-secondary me-1" />
                                  2
                                </div>
                              </div>
                            </div>
                            <div className="fs-xs text-nowrap d-md-none mt-2 mb-1"><span className="text-body-secondary">Sales:</span> 56</div>
                            <div className="fs-xs text-nowrap d-sm-none"><span className="text-body-secondary">Earnings:</span> $672.00</div>
                          </div>
                        </div>
                      </td>
                      <td className="d-none d-md-table-cell py-3">
                        <span className="status badge fs-xs text-success bg-success-subtle rounded-pill">Active</span>
                      </td>
                      <td className="sales d-none d-md-table-cell text-end py-3">56</td>
                      <td className="text-end d-none d-sm-table-cell py-3">$672.00<span className="earnings visually-hidden">67200</span></td>
                      <td className="text-end py-3 ps-0 ps-sm-3 pe-0">
                        <div className="dropdown">
                          <button type="button" className="btn btn-icon btn-ghost btn-sm btn-secondary rounded-circle" data-bs-toggle="dropdown" aria-expanded="false" aria-label="Settings">
                            <i className="ci-more-vertical fs-base" />
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="#!">
                                <i className="ci-edit opacity-75 me-2" />
                                Edit
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#!">
                                <i className="ci-zap fs-base opacity-75 me-2" />
                                Promote
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#!">
                                <i className="ci-archive opacity-75 me-2" />
                                Move to archive
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item text-danger" href="#!">
                                <i className="ci-trash opacity-75 me-2" />
                                Delete
                              </a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    {/* Item */}
                    <tr>
                      <td className="py-3 ps-0">
                        <div className="d-flex align-items-start align-items-md-center hover-effect-scale position-relative py-1">
                          <div className="ratio bg-body-secondary rounded overflow-hidden flex-shrink-sm-0" style={{"--cz-aspect-ratio": 'calc(110 / 142 * 100%)', maxWidth: '142px'}}>
                            <img src="/assets/img/account/products/05.jpg" className="hover-effect-target" alt="Image" />
                          </div>
                          <div className="ps-2 ps-sm-3 ms-1">
                            <span className="badge fs-xs text-success bg-success-subtle rounded-pill d-md-none mb-1">Active</span>
                            <h6 className="product mb-2">
                              <a className="fs-sm fw-medium hover-effect-underline stretched-link" href="/products/slug">Smartphone mockups for UI designs</a>
                            </h6>
                            <div className="d-flex flex-md-column align-items-center align-items-md-start gap-2">
                              <div className="h6 mb-0 me-1 me-md-0">$18</div>
                              <div className="d-flex gap-2">
                                <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
                                  <i className="ci-heart text-body-secondary me-1" />
                                  36
                                </div>
                                <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
                                  <i className="ci-message-circle text-body-secondary me-1" />
                                  8
                                </div>
                              </div>
                            </div>
                            <div className="fs-xs text-nowrap d-md-none mt-2 mb-1"><span className="text-body-secondary">Sales:</span> 152</div>
                            <div className="fs-xs text-nowrap d-sm-none"><span className="text-body-secondary">Earnings:</span> $2,052.00</div>
                          </div>
                        </div>
                      </td>
                      <td className="d-none d-md-table-cell py-3">
                        <span className="status badge fs-xs text-success bg-success-subtle rounded-pill">Active</span>
                      </td>
                      <td className="sales d-none d-md-table-cell text-end py-3">152</td>
                      <td className="text-end d-none d-sm-table-cell py-3">$2,052.00<span className="earnings visually-hidden">205200</span></td>
                      <td className="text-end py-3 ps-0 ps-sm-3 pe-0">
                        <div className="dropdown">
                          <button type="button" className="btn btn-icon btn-ghost btn-sm btn-secondary rounded-circle" data-bs-toggle="dropdown" aria-expanded="false" aria-label="Settings">
                            <i className="ci-more-vertical fs-base" />
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="#!">
                                <i className="ci-edit opacity-75 me-2" />
                                Edit
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#!">
                                <i className="ci-zap fs-base opacity-75 me-2" />
                                Promote
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#!">
                                <i className="ci-archive opacity-75 me-2" />
                                Move to archive
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item text-danger" href="#!">
                                <i className="ci-trash opacity-75 me-2" />
                                Delete
                              </a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    {/* Item */}
                    <tr>
                      <td className="py-3 ps-0">
                        <div className="d-flex align-items-start align-items-md-center hover-effect-scale position-relative py-1">
                          <div className="ratio bg-body-secondary rounded overflow-hidden flex-shrink-sm-0" style={{"--cz-aspect-ratio": 'calc(110 / 142 * 100%)', maxWidth: '142px'}}>
                            <img src="/assets/img/account/products/07.jpg" className="hover-effect-target" alt="Image" />
                          </div>
                          <div className="ps-2 ps-sm-3 ms-1">
                            <span className="badge fs-xs text-warning bg-warning-subtle rounded-pill d-md-none mb-1">Archived</span>
                            <h6 className="product mb-2">
                              <a className="fs-sm fw-medium hover-effect-underline stretched-link" href="/products/slug">Multi device mockup PSD</a>
                            </h6>
                            <div className="d-flex flex-md-column align-items-center align-items-md-start gap-2">
                              <div className="h6 mb-0 me-1 me-md-0">$27</div>
                              <div className="d-flex gap-2">
                                <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
                                  <i className="ci-heart text-body-secondary me-1" />
                                  9
                                </div>
                                <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
                                  <i className="ci-message-circle text-body-secondary me-1" />
                                  12
                                </div>
                              </div>
                            </div>
                            <div className="fs-xs text-nowrap d-md-none mt-2 mb-1"><span className="text-body-secondary">Sales:</span> 43</div>
                            <div className="fs-xs text-nowrap d-sm-none"><span className="text-body-secondary">Earnings:</span> $870.75</div>
                          </div>
                        </div>
                      </td>
                      <td className="d-none d-md-table-cell py-3">
                        <span className="status badge fs-xs text-warning bg-warning-subtle rounded-pill">Archived</span>
                      </td>
                      <td className="sales d-none d-md-table-cell text-end py-3">43</td>
                      <td className="text-end d-none d-sm-table-cell py-3">$870.75<span className="earnings visually-hidden">87075</span></td>
                      <td className="text-end py-3 ps-0 ps-sm-3 pe-0">
                        <div className="dropdown">
                          <button type="button" className="btn btn-icon btn-ghost btn-sm btn-secondary rounded-circle" data-bs-toggle="dropdown" aria-expanded="false" aria-label="Settings">
                            <i className="ci-more-vertical fs-base" />
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="#!">
                                <i className="ci-edit opacity-75 me-2" />
                                Edit
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#!">
                                <i className="ci-zap fs-base opacity-75 me-2" />
                                Promote
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#!">
                                <i className="ci-archive opacity-75 me-2" />
                                Move to archive
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item text-danger" href="#!">
                                <i className="ci-trash opacity-75 me-2" />
                                Delete
                              </a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>

    </>
  )
}

export default Products
