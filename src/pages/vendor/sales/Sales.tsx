import Navigation from "../../../components/shared/Navigation"
import Aside from "../shared/Aside"

const Sales = () => {
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
              <div data-filter-list="{&quot;searchClass&quot;: &quot;product-search&quot;, &quot;listClass&quot;: &quot;product-list&quot;, &quot;sortClass&quot;: &quot;product-sort&quot;, &quot;valueNames&quot;: [&quot;product&quot;, &quot;date&quot;, &quot;tendered&quot;, &quot;earning&quot;]}">
                {/* Header */}
                <div className="d-md-flex align-items-center justify-content-between gap-3 pb-2 pb-sm-3 mb-md-2">
                  <h1 className="h2 mb-md-0">Sales</h1>
                  <div className="d-flex flex-column flex-sm-row gap-2 gap-sm-3">
                    <div className="position-relative w-100">
                      <i className="ci-search position-absolute top-50 start-0 translate-middle-y ms-3" />
                      <input type="search" className="product-search form-control form-icon-start rounded-pill" placeholder="Search" />
                    </div>
                    <div className="position-relative" style={{minWidth: '190px'}}>
                      <i className="ci-calendar position-absolute top-50 start-0 translate-middle-y z-1 ms-3" />
                      <select className="form-select form-icon-start rounded-pill" data-select="{
                      &quot;classNames&quot;: {
                        &quot;containerInner&quot;: [&quot;form-select&quot;, &quot;form-icon-start&quot;, &quot;rounded-pill&quot;]
                      },
                      &quot;removeItemButton&quot;: false
                    }" aria-label="Period select">
                        <option value="Current">Current month</option>
                        <option value="Last month">Last month</option>
                        <option value="Last 3 months">Last 3 months</option>
                        <option value="Last 6 months">Last 6 months</option>
                        <option value="Last year">Last year</option>
                      </select>
                    </div>
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
                        <button type="button" className="btn fw-normal text-body product-sort p-0" data-sort="date">Date</button>
                      </th>
                      <th className="d-none d-md-table-cell" scope="col">
                        <span className="fw-normal text-body">Status</span>
                      </th>
                      <th className="text-end d-none d-sm-table-cell" scope="col">
                        <button type="button" className="btn fw-normal text-body product-sort p-0 me-n2" data-sort="tendered">Tendered</button>
                      </th>
                      <th className="text-end pe-0" scope="col">
                        <button type="button" className="btn fw-normal text-body product-sort p-0 me-n2" data-sort="earning">Earning</button>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="product-list">
                    {/* Item */}
                    <tr>
                      <td className="py-3 ps-0">
                        <div className="d-flex align-items-start align-items-md-center hover-effect-scale position-relative">
                          <div className="ratio bg-body-secondary rounded-2 overflow-hidden flex-shrink-0" style={{"--cz-aspect-ratio": 'calc(52 / 66 * 100%)', width: '66px'}}>
                            <img src="/assets/img/account/products/01.jpg" className="hover-effect-target" alt="Image" />
                          </div>
                          <div className="ps-2 ms-1">
                            <span className="badge fs-xs text-info bg-info-subtle rounded-pill d-md-none mb-1">Pending</span>
                            <h6 className="product mb-1 mb-md-0">
                              <a className="fs-sm fw-medium hover-effect-underline stretched-link" href="shop-product-marketplace.html">Smart watches series 9 mockup</a>
                            </h6>
                            <div className="fs-body-emphasis d-sm-none mb-1">$15.00</div>
                            <div className="fs-body-emphasis d-md-none">June 30, 2024</div>
                          </div>
                        </div>
                      </td>
                      <td className="d-none d-md-table-cell py-3">June 30, 2024<span className="date visually-hidden">1719745200</span></td>
                      <td className="d-none d-md-table-cell py-3">
                        <span className="badge fs-xs text-info bg-info-subtle rounded-pill">Pending</span>
                      </td>
                      <td className="tendered text-end d-none d-sm-table-cell py-3">$15.00</td>
                      <td className="earning text-end py-3 pe-0">$11.25</td>
                    </tr>
                    {/* Item */}
                    <tr>
                      <td className="py-3 ps-0">
                        <div className="d-flex align-items-start align-items-md-center hover-effect-scale position-relative">
                          <div className="ratio bg-body-secondary rounded-2 overflow-hidden flex-shrink-0" style={{"--cz-aspect-ratio": 'calc(52 / 66 * 100%)', width: '66px'}}>
                            <img src="/assets/img/account/products/02.jpg" className="hover-effect-target" alt="Image" />
                          </div>
                          <div className="ps-2 ms-1">
                            <span className="badge fs-xs text-success bg-success-subtle rounded-pill d-md-none mb-1">Completed</span>
                            <h6 className="product mb-1 mb-md-0">
                              <a className="fs-sm fw-medium hover-effect-underline stretched-link" href="shop-product-marketplace.html">3D box mockup bold rebrand</a>
                            </h6>
                            <div className="fs-body-emphasis d-sm-none mb-1">$16.00</div>
                            <div className="fs-body-emphasis d-md-none">June 29, 2024</div>
                          </div>
                        </div>
                      </td>
                      <td className="d-none d-md-table-cell py-3">June 29, 2024<span className="date visually-hidden">1719658800</span></td>
                      <td className="d-none d-md-table-cell py-3">
                        <span className="badge fs-xs text-success bg-success-subtle rounded-pill">Completed</span>
                      </td>
                      <td className="tendered text-end d-none d-sm-table-cell py-3">$16.00</td>
                      <td className="earning text-end py-3 pe-0">$12.00</td>
                    </tr>
                    {/* Item */}
                    <tr>
                      <td className="py-3 ps-0">
                        <div className="d-flex align-items-start align-items-md-center hover-effect-scale position-relative">
                          <div className="ratio bg-body-secondary rounded-2 overflow-hidden flex-shrink-0" style={{"--cz-aspect-ratio": 'calc(52 / 66 * 100%)', width: '66px'}}>
                            <img src="/assets/img/account/products/03.jpg" className="hover-effect-target" alt="Image" />
                          </div>
                          <div className="ps-2 ms-1">
                            <span className="badge fs-xs text-success bg-success-subtle rounded-pill d-md-none mb-1">Completed</span>
                            <h6 className="product mb-1 mb-md-0">
                              <a className="fs-sm fw-medium hover-effect-underline stretched-link" href="shop-product-marketplace.html">iPhone 15 pro mockups</a>
                            </h6>
                            <div className="fs-body-emphasis d-sm-none mb-1">$19.00</div>
                            <div className="fs-body-emphasis d-md-none">June 29, 2024</div>
                          </div>
                        </div>
                      </td>
                      <td className="d-none d-md-table-cell py-3">June 29, 2024<span className="date visually-hidden">1719658800</span></td>
                      <td className="d-none d-md-table-cell py-3">
                        <span className="badge fs-xs text-success bg-success-subtle rounded-pill">Completed</span>
                      </td>
                      <td className="tendered text-end d-none d-sm-table-cell py-3">$19.00</td>
                      <td className="earning text-end py-3 pe-0">$14.25</td>
                    </tr>
                    {/* Item */}
                    <tr>
                      <td className="py-3 ps-0">
                        <div className="d-flex align-items-start align-items-md-center hover-effect-scale position-relative">
                          <div className="ratio bg-body-secondary rounded-2 overflow-hidden flex-shrink-0" style={{"--cz-aspect-ratio": 'calc(52 / 66 * 100%)', width: '66px'}}>
                            <img src="/assets/img/account/products/04.jpg" className="hover-effect-target" alt="Image" />
                          </div>
                          <div className="ps-2 ms-1">
                            <span className="badge fs-xs text-success bg-success-subtle rounded-pill d-md-none mb-1">Completed</span>
                            <h6 className="product mb-1 mb-md-0">
                              <a className="fs-sm fw-medium hover-effect-underline stretched-link" href="shop-product-marketplace.html">A collection of colorful items</a>
                            </h6>
                            <div className="fs-body-emphasis d-sm-none mb-1">$21.00</div>
                            <div className="fs-body-emphasis d-md-none">June 28, 2024</div>
                          </div>
                        </div>
                      </td>
                      <td className="d-none d-md-table-cell py-3">June 28, 2024<span className="date visually-hidden">1719572400</span></td>
                      <td className="d-none d-md-table-cell py-3">
                        <span className="badge fs-xs text-success bg-success-subtle rounded-pill">Completed</span>
                      </td>
                      <td className="tendered text-end d-none d-sm-table-cell py-3">$21.00</td>
                      <td className="earning text-end py-3 pe-0">$15.75</td>
                    </tr>
                    {/* Item */}
                    <tr>
                      <td className="py-3 ps-0">
                        <div className="d-flex align-items-start align-items-md-center hover-effect-scale position-relative">
                          <div className="ratio bg-body-secondary rounded-2 overflow-hidden flex-shrink-0" style={{"--cz-aspect-ratio": 'calc(52 / 66 * 100%)', width: '66px'}}>
                            <img src="/assets/img/account/products/05.jpg" className="hover-effect-target" alt="Image" />
                          </div>
                          <div className="ps-2 ms-1">
                            <span className="badge fs-xs text-success bg-success-subtle rounded-pill d-md-none mb-1">Completed</span>
                            <h6 className="product mb-1 mb-md-0">
                              <a className="fs-sm fw-medium hover-effect-underline stretched-link" href="shop-product-marketplace.html">House plants website template</a>
                            </h6>
                            <div className="fs-body-emphasis d-sm-none mb-1">$35.00</div>
                            <div className="fs-body-emphasis d-md-none">June 27, 2024</div>
                          </div>
                        </div>
                      </td>
                      <td className="d-none d-md-table-cell py-3">June 27, 2024<span className="date visually-hidden">1719486000</span></td>
                      <td className="d-none d-md-table-cell py-3">
                        <span className="badge fs-xs text-success bg-success-subtle rounded-pill">Completed</span>
                      </td>
                      <td className="tendered text-end d-none d-sm-table-cell py-3">$35.00</td>
                      <td className="earning text-end py-3 pe-0">$26.25</td>
                    </tr>
                    {/* Item */}
                    <tr>
                      <td className="py-3 ps-0">
                        <div className="d-flex align-items-start align-items-md-center hover-effect-scale position-relative">
                          <div className="ratio bg-body-secondary rounded-2 overflow-hidden flex-shrink-0" style={{"--cz-aspect-ratio": 'calc(52 / 66 * 100%)', width: '66px'}}>
                            <img src="/assets/img/account/products/06.jpg" className="hover-effect-target" alt="Image" />
                          </div>
                          <div className="ps-2 ms-1">
                            <span className="badge fs-xs text-success bg-success-subtle rounded-pill d-md-none mb-1">Completed</span>
                            <h6 className="product mb-1 mb-md-0">
                              <a className="fs-sm fw-medium hover-effect-underline stretched-link" href="shop-product-marketplace.html">Isometric smartphone mockups</a>
                            </h6>
                            <div className="fs-body-emphasis d-sm-none mb-1">$24.00</div>
                            <div className="fs-body-emphasis d-md-none">June 26, 2024</div>
                          </div>
                        </div>
                      </td>
                      <td className="d-none d-md-table-cell py-3">June 26, 2024<span className="date visually-hidden">1719399600</span></td>
                      <td className="d-none d-md-table-cell py-3">
                        <span className="badge fs-xs text-success bg-success-subtle rounded-pill">Completed</span>
                      </td>
                      <td className="tendered text-end d-none d-sm-table-cell py-3">$24.00</td>
                      <td className="earning text-end py-3 pe-0">$18.00</td>
                    </tr>
                    {/* Item */}
                    <tr>
                      <td className="py-3 ps-0">
                        <div className="d-flex align-items-start align-items-md-center hover-effect-scale position-relative">
                          <div className="ratio bg-body-secondary rounded-2 overflow-hidden flex-shrink-0" style={{"--cz-aspect-ratio": 'calc(52 / 66 * 100%)', width: '66px'}}>
                            <img src="/assets/img/account/products/07.jpg" className="hover-effect-target" alt="Image" />
                          </div>
                          <div className="ps-2 ms-1">
                            <span className="badge fs-xs text-success bg-success-subtle rounded-pill d-md-none mb-1">Completed</span>
                            <h6 className="product mb-1 mb-md-0">
                              <a className="fs-sm fw-medium hover-effect-underline stretched-link" href="shop-product-marketplace.html">A stunning set of tablet pro mockups</a>
                            </h6>
                            <div className="fs-body-emphasis d-sm-none mb-1">$18.00</div>
                            <div className="fs-body-emphasis d-md-none">June 26, 2024</div>
                          </div>
                        </div>
                      </td>
                      <td className="d-none d-md-table-cell py-3">June 26, 2024<span className="date visually-hidden">1719399600</span></td>
                      <td className="d-none d-md-table-cell py-3">
                        <span className="badge fs-xs text-success bg-success-subtle rounded-pill">Completed</span>
                      </td>
                      <td className="tendered text-end d-none d-sm-table-cell py-3">$18.00</td>
                      <td className="earning text-end py-3 pe-0">$13.50</td>
                    </tr>
                    {/* Item */}
                    <tr>
                      <td className="py-3 ps-0">
                        <div className="d-flex align-items-start align-items-md-center hover-effect-scale position-relative">
                          <div className="ratio bg-body-secondary rounded-2 overflow-hidden flex-shrink-0" style={{"--cz-aspect-ratio": 'calc(52 / 66 * 100%)', width: '66px'}}>
                            <img src="/assets/img/account/products/08.jpg" className="hover-effect-target" alt="Image" />
                          </div>
                          <div className="ps-2 ms-1">
                            <span className="badge fs-xs text-danger bg-danger-subtle rounded-pill d-md-none mb-1">Canceled</span>
                            <h6 className="product mb-1 mb-md-0">
                              <a className="fs-sm fw-medium hover-effect-underline stretched-link" href="shop-product-marketplace.html">Multi device mockup PSD</a>
                            </h6>
                            <div className="fs-body-emphasis d-sm-none mb-1">$27.00</div>
                            <div className="fs-body-emphasis d-md-none">June 25, 2024</div>
                          </div>
                        </div>
                      </td>
                      <td className="d-none d-md-table-cell py-3">June 25, 2024<span className="date visually-hidden">1719313200</span></td>
                      <td className="d-none d-md-table-cell py-3">
                        <span className="badge fs-xs text-danger bg-danger-subtle rounded-pill">Canceled</span>
                      </td>
                      <td className="tendered text-end d-none d-sm-table-cell py-3">$27.00</td>
                      <td className="earning text-end py-3 pe-0">$0.00</td>
                    </tr>
                  </tbody>
                </table>
                {/* Pagination */}
                <div className="d-flex align-items-center justify-content-between pt-4 gap-3">
                  <div className="fs-sm">Showing <span className="fw-semibold">8</span> of <span className="fw-semibold">30</span><span className="d-none d-sm-inline"> results</span></div>
                  <nav aria-label="Pagination">
                    <ul className="pagination">
                      <li className="page-item active" aria-current="page">
                        <span className="page-link">
                          1
                          <span className="visually-hidden">(current)</span>
                        </span>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">2</a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">3</a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">4</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    </>
  )
}

export default Sales
