import Navigation from '../../../components/shared/Navigation'
import Aside from '../shared/Aside'

const Purchases = () => {
  return (
    <>
      <Navigation />

      {/* Page content */}
      <main className="content-wrapper">
        <div className="container pt-4 pt-lg-5 pb-5">
          <div className="row pt-sm-2 pt-md-3 pt-lg-0 pb-2 pb-sm-3 pb-md-4 pb-lg-5">
            {/* Sidebar navigation that turns into offcanvas on screens < 992px wide (lg breakpoint) */}
            <Aside />

            {/* Purchases content */}
            <div className="col-lg-9 pt-2 pt-xl-3">
              <div data-filter-list="{&quot;searchClass&quot;: &quot;product-search&quot;, &quot;listClass&quot;: &quot;product-list&quot;, &quot;sortClass&quot;: &quot;product-sort&quot;, &quot;valueNames&quot;: [&quot;product&quot;, &quot;author&quot;, &quot;category&quot;, &quot;date&quot;, &quot;license&quot;]}">
                {/* Header */}
                <div className="d-sm-flex align-items-center justify-content-between gap-3 pb-2 pb-sm-3 mb-md-2">
                  <h1 className="h2 text-nowrap mb-sm-0">Purchases (6)</h1>
                  <div className="position-relative w-100" style={{maxWidth: '300px'}}>
                    <i className="ci-search position-absolute top-50 start-0 translate-middle-y ms-3" />
                    <input type="search" className="product-search form-control form-icon-start rounded-pill" placeholder="Search" />
                  </div>
                </div>
                {/* Purchases list (table) */}
                <table className="table align-middle fs-sm mb-0">
                  <thead>
                    <tr>
                      <th className="px-0 pe-sm-2" scope="col">
                        <span className="fw-normal text-body">Product</span>
                      </th>
                      <th className="d-none d-md-table-cell" scope="col">
                        <button type="button" className="btn fw-normal text-body product-sort p-0" data-sort="date">Purchase date</button>
                      </th>
                      <th className="d-none d-md-table-cell" scope="col">
                        <span className="fw-normal text-body">License</span>
                      </th>
                      <th className="d-none d-sm-table-cell pe-0" scope="col" />
                    </tr>
                  </thead>
                  <tbody className="product-list">
                    {/* Item */}
                    <tr>
                      <td className="py-3 px-0 pe-sm-2">
                        <div className="d-none d-md-block d-xl-none" style={{width: '350px'}} />
                        <div className="d-none d-xl-block" style={{width: '450px'}} />
                        <div className="d-flex align-items-start align-items-md-center hover-effect-scale position-relative py-1">
                          <div className="ratio bg-body-secondary rounded overflow-hidden flex-shrink-sm-0" style={{"--cz-aspect-ratio": 'calc(110 / 142 * 100%)', maxWidth: '142px'}}>
                            <img src="/assets/img/account/products/13.jpg" className="hover-effect-target" alt="Image" />
                          </div>
                          <div className="ps-2 ps-sm-3 ms-1">
                            <h6 className="product mb-2">
                              <a className="fs-sm fw-medium hover-effect-underline stretched-link" href="/products/slug">Smart watches series 9 mockup</a>
                            </h6>
                            <div className="d-flex align-items-center flex-wrap gap-1 fs-xs">
                              <div className="author d-flex align-items-center fs-xs fw-medium text-body gap-1 p-0">
                                <div className="flex-shrink-0 border rounded-circle" style={{width: '22px'}}>
                                  <div className="ratio ratio-1x1 rounded-circle overflow-hidden">
                                    <img src="/assets/img/shop/marketplace/avatars/03.png" alt="Avatar" />
                                  </div>
                                </div>
                                MD Studio
                              </div>
                              <div className="text-body-secondary">in</div>
                              <div className="category fs-xs fw-medium text-body">Mockups</div>
                            </div>
                            {/* Visible on screens < 769px wide (md breakpoint) */}
                            <div className="fs-xs text-nowrap d-md-none mt-2 mb-1"><span className="text-body-secondary">License:</span> <span className="license">Standard</span></div>
                            <div className="fs-xs text-nowrap d-md-none"><span className="text-body-secondary">Date:</span> July 28, 2024</div>
                            {/* Visible on screens < 500px wide (sm breakpoint) */}
                            <button type="button" className="btn btn-sm btn-secondary rounded-pill animate-scale position-relative z-2 d-sm-none mt-3">
                              <i className="ci-download-cloud animate-target fs-sm ms-n1 me-1" />
                              Download
                            </button>
                          </div>
                        </div>
                      </td>
                      {/* Visible on screens > 768px wide (md breakpoint) */}
                      <td className="d-none d-md-table-cell py-3">July 28, 2024<span className="date visually-hidden">1722164400</span></td>
                      <td className="d-none d-md-table-cell py-3">Standard</td>
                      {/* Visible on screens > 500px wide (sm breakpoint) */}
                      <td className="d-none d-sm-table-cell text-end py-3 ps-0 ps-sm-3 pe-0" style={{width: '120px'}}>
                        <button type="button" className="btn btn-sm btn-secondary rounded-pill animate-scale">
                          <i className="ci-download-cloud animate-target fs-sm ms-n1 me-1" />
                          Download
                        </button>
                      </td>
                    </tr>
                    {/* Item */}
                    <tr>
                      <td className="py-3 px-0 pe-sm-2">
                        <div className="d-none d-md-block d-xl-none" style={{width: '350px'}} />
                        <div className="d-none d-xl-block" style={{width: '450px'}} />
                        <div className="d-flex align-items-start align-items-md-center hover-effect-scale position-relative py-1">
                          <div className="ratio bg-body-secondary rounded overflow-hidden flex-shrink-sm-0" style={{"--cz-aspect-ratio": 'calc(110 / 142 * 100%)', maxWidth: '142px'}}>
                            <img src="/assets/img/account/products/14.jpg" className="hover-effect-target" alt="Image" />
                          </div>
                          <div className="ps-2 ps-sm-3 ms-1">
                            <h6 className="product mb-2">
                              <a className="fs-sm fw-medium hover-effect-underline stretched-link" href="/products/slug">Gradient glassmorphism icons set</a>
                            </h6>
                            <div className="d-flex align-items-center flex-wrap gap-1 fs-xs">
                              <div className="author d-flex align-items-center fs-xs fw-medium text-body gap-1 p-0">
                                <div className="flex-shrink-0 border rounded-circle" style={{width: '22px'}}>
                                  <div className="ratio ratio-1x1 rounded-circle overflow-hidden">
                                    <img src="/assets/img/shop/marketplace/avatars/02.png" alt="Avatar" />
                                  </div>
                                </div>
                                Magic FS
                              </div>
                              <div className="text-body-secondary">in</div>
                              <div className="category fs-xs fw-medium text-body">Vectors</div>
                            </div>
                            {/* Visible on screens < 769px wide (md breakpoint) */}
                            <div className="fs-xs text-nowrap d-md-none mt-2 mb-1"><span className="text-body-secondary">License:</span> <span className="license">Standard</span></div>
                            <div className="fs-xs text-nowrap d-md-none"><span className="text-body-secondary">Date:</span> July 5, 2024</div>
                            {/* Visible on screens < 500px wide (sm breakpoint) */}
                            <button type="button" className="btn btn-sm btn-secondary rounded-pill animate-scale position-relative z-2 d-sm-none mt-3">
                              <i className="ci-download-cloud animate-target fs-sm ms-n1 me-1" />
                              Download
                            </button>
                          </div>
                        </div>
                      </td>
                      {/* Visible on screens > 768px wide (md breakpoint) */}
                      <td className="d-none d-md-table-cell py-3">July 5, 2024<span className="date visually-hidden">1720177200</span></td>
                      <td className="d-none d-md-table-cell py-3">Standard</td>
                      {/* Visible on screens > 500px wide (sm breakpoint) */}
                      <td className="d-none d-sm-table-cell text-end py-3 ps-0 ps-sm-3 pe-0" style={{width: '120px'}}>
                        <button type="button" className="btn btn-sm btn-secondary rounded-pill animate-scale">
                          <i className="ci-download-cloud animate-target fs-sm ms-n1 me-1" />
                          Download
                        </button>
                      </td>
                    </tr>
                    {/* Item */}
                    <tr>
                      <td className="py-3 px-0 pe-sm-2">
                        <div className="d-none d-md-block d-xl-none" style={{width: '350px'}} />
                        <div className="d-none d-xl-block" style={{width: '450px'}} />
                        <div className="d-flex align-items-start align-items-md-center hover-effect-scale position-relative py-1">
                          <div className="ratio bg-body-secondary rounded overflow-hidden flex-shrink-sm-0" style={{"--cz-aspect-ratio": 'calc(110 / 142 * 100%)', maxWidth: '142px'}}>
                            <img src="/assets/img/account/products/15.jpg" className="hover-effect-target" alt="Image" />
                          </div>
                          <div className="ps-2 ps-sm-3 ms-1">
                            <h6 className="product mb-2">
                              <a className="fs-sm fw-medium hover-effect-underline stretched-link" href="/products/slug">A stunning set of tablet pro mockups</a>
                            </h6>
                            <div className="d-flex align-items-center flex-wrap gap-1 fs-xs">
                              <div className="author d-flex align-items-center fs-xs fw-medium text-body gap-1 p-0">
                                <div className="flex-shrink-0 border rounded-circle" style={{width: '22px'}}>
                                  <div className="ratio ratio-1x1 rounded-circle overflow-hidden">
                                    <img src="/assets/img/shop/marketplace/avatars/04.png" alt="Avatar" />
                                  </div>
                                </div>
                                Fireby
                              </div>
                              <div className="text-body-secondary">in</div>
                              <div className="category fs-xs fw-medium text-body">Mockups</div>
                            </div>
                            {/* Visible on screens < 769px wide (md breakpoint) */}
                            <div className="fs-xs text-nowrap d-md-none mt-2 mb-1"><span className="text-body-secondary">License:</span> <span className="license">Extended</span></div>
                            <div className="fs-xs text-nowrap d-md-none"><span className="text-body-secondary">Date:</span> May 30, 2024</div>
                            {/* Visible on screens < 500px wide (sm breakpoint) */}
                            <button type="button" className="btn btn-sm btn-secondary rounded-pill animate-scale position-relative z-2 d-sm-none mt-3">
                              <i className="ci-download-cloud animate-target fs-sm ms-n1 me-1" />
                              Download
                            </button>
                          </div>
                        </div>
                      </td>
                      {/* Visible on screens > 768px wide (md breakpoint) */}
                      <td className="d-none d-md-table-cell py-3">May 30, 2024<span className="date visually-hidden">1717066800</span></td>
                      <td className="d-none d-md-table-cell py-3">Extended</td>
                      {/* Visible on screens > 500px wide (sm breakpoint) */}
                      <td className="d-none d-sm-table-cell text-end py-3 ps-0 ps-sm-3 pe-0" style={{width: '120px'}}>
                        <button type="button" className="btn btn-sm btn-secondary rounded-pill animate-scale">
                          <i className="ci-download-cloud animate-target fs-sm ms-n1 me-1" />
                          Download
                        </button>
                      </td>
                    </tr>
                    {/* Item */}
                    <tr>
                      <td className="py-3 px-0 pe-sm-2">
                        <div className="d-none d-md-block d-xl-none" style={{width: '350px'}} />
                        <div className="d-none d-xl-block" style={{width: '450px'}} />
                        <div className="d-flex align-items-start align-items-md-center hover-effect-scale position-relative py-1">
                          <div className="ratio bg-body-secondary rounded overflow-hidden flex-shrink-sm-0" style={{"--cz-aspect-ratio": 'calc(110 / 142 * 100%)', maxWidth: '142px'}}>
                            <img src="/assets/img/account/products/16.jpg" className="hover-effect-target" alt="Image" />
                          </div>
                          <div className="ps-2 ps-sm-3 ms-1">
                            <h6 className="product mb-2">
                              <a className="fs-sm fw-medium hover-effect-underline stretched-link" href="/products/slug">Isometric smartphone mockups</a>
                            </h6>
                            <div className="d-flex align-items-center flex-wrap gap-1 fs-xs">
                              <div className="author d-flex align-items-center fs-xs fw-medium text-body gap-1 p-0">
                                <div className="flex-shrink-0 border rounded-circle" style={{width: '22px'}}>
                                  <div className="ratio ratio-1x1 rounded-circle overflow-hidden">
                                    <img src="/assets/img/shop/marketplace/avatars/03.png" alt="Avatar" />
                                  </div>
                                </div>
                                MD Studio
                              </div>
                              <div className="text-body-secondary">in</div>
                              <div className="category fs-xs fw-medium text-body">Mockups</div>
                            </div>
                            {/* Visible on screens < 769px wide (md breakpoint) */}
                            <div className="fs-xs text-nowrap d-md-none mt-2 mb-1"><span className="text-body-secondary">License:</span> <span className="license">Standard</span></div>
                            <div className="fs-xs text-nowrap d-md-none"><span className="text-body-secondary">Date:</span> April 19, 2024</div>
                            {/* Visible on screens < 500px wide (sm breakpoint) */}
                            <button type="button" className="btn btn-sm btn-secondary rounded-pill animate-scale position-relative z-2 d-sm-none mt-3">
                              <i className="ci-download-cloud animate-target fs-sm ms-n1 me-1" />
                              Download
                            </button>
                          </div>
                        </div>
                      </td>
                      {/* Visible on screens > 768px wide (md breakpoint) */}
                      <td className="d-none d-md-table-cell py-3">April 19, 2024<span className="date visually-hidden">1713524400</span></td>
                      <td className="d-none d-md-table-cell py-3">Standard</td>
                      {/* Visible on screens > 500px wide (sm breakpoint) */}
                      <td className="d-none d-sm-table-cell text-end py-3 ps-0 ps-sm-3 pe-0" style={{width: '120px'}}>
                        <button type="button" className="btn btn-sm btn-secondary rounded-pill animate-scale">
                          <i className="ci-download-cloud animate-target fs-sm ms-n1 me-1" />
                          Download
                        </button>
                      </td>
                    </tr>
                    {/* Item */}
                    <tr>
                      <td className="py-3 px-0 pe-sm-2">
                        <div className="d-none d-md-block d-xl-none" style={{width: '350px'}} />
                        <div className="d-none d-xl-block" style={{width: '450px'}} />
                        <div className="d-flex align-items-start align-items-md-center hover-effect-scale position-relative py-1">
                          <div className="ratio bg-body-secondary rounded overflow-hidden flex-shrink-sm-0" style={{"--cz-aspect-ratio": 'calc(110 / 142 * 100%)', maxWidth: '142px'}}>
                            <img src="/assets/img/account/products/17.jpg" className="hover-effect-target" alt="Image" />
                          </div>
                          <div className="ps-2 ps-sm-3 ms-1">
                            <h6 className="product mb-2">
                              <a className="fs-sm fw-medium hover-effect-underline stretched-link" href="/products/slug">House plants website template</a>
                            </h6>
                            <div className="d-flex align-items-center flex-wrap gap-1 fs-xs">
                              <div className="author d-flex align-items-center fs-xs fw-medium text-body gap-1 p-0">
                                <div className="flex-shrink-0 border rounded-circle" style={{width: '22px'}}>
                                  <div className="ratio ratio-1x1 rounded-circle overflow-hidden">
                                    <img src="/assets/img/shop/marketplace/avatars/02.png" alt="Avatar" />
                                  </div>
                                </div>
                                Magic FS
                              </div>
                              <div className="text-body-secondary">in</div>
                              <div className="category fs-xs fw-medium text-body">Templates</div>
                            </div>
                            {/* Visible on screens < 769px wide (md breakpoint) */}
                            <div className="fs-xs text-nowrap d-md-none mt-2 mb-1"><span className="text-body-secondary">License:</span> <span className="license">Extended</span></div>
                            <div className="fs-xs text-nowrap d-md-none"><span className="text-body-secondary">Date:</span> April 12, 2024</div>
                            {/* Visible on screens < 500px wide (sm breakpoint) */}
                            <button type="button" className="btn btn-sm btn-secondary rounded-pill animate-scale position-relative z-2 d-sm-none mt-3">
                              <i className="ci-download-cloud animate-target fs-sm ms-n1 me-1" />
                              Download
                            </button>
                          </div>
                        </div>
                      </td>
                      {/* Visible on screens > 768px wide (md breakpoint) */}
                      <td className="d-none d-md-table-cell py-3">April 12, 2024<span className="date visually-hidden">1712919600</span></td>
                      <td className="d-none d-md-table-cell py-3">Extended</td>
                      {/* Visible on screens > 500px wide (sm breakpoint) */}
                      <td className="d-none d-sm-table-cell text-end py-3 ps-0 ps-sm-3 pe-0" style={{width: '120px'}}>
                        <button type="button" className="btn btn-sm btn-secondary rounded-pill animate-scale">
                          <i className="ci-download-cloud animate-target fs-sm ms-n1 me-1" />
                          Download
                        </button>
                      </td>
                    </tr>
                    {/* Item */}
                    <tr>
                      <td className="py-3 px-0 pe-sm-2">
                        <div className="d-none d-md-block d-xl-none" style={{width: '350px'}} />
                        <div className="d-none d-xl-block" style={{width: '450px'}} />
                        <div className="d-flex align-items-start align-items-md-center hover-effect-scale position-relative py-1">
                          <div className="ratio bg-body-secondary rounded overflow-hidden flex-shrink-sm-0" style={{"--cz-aspect-ratio": 'calc(110 / 142 * 100%)', maxWidth: '142px'}}>
                            <img src="/assets/img/account/products/18.jpg" className="hover-effect-target" alt="Image" />
                          </div>
                          <div className="ps-2 ps-sm-3 ms-1">
                            <h6 className="product mb-2">
                              <a className="fs-sm fw-medium hover-effect-underline stretched-link" href="/products/slug">A collection of colorful items</a>
                            </h6>
                            <div className="d-flex align-items-center flex-wrap gap-1 fs-xs">
                              <div className="author d-flex align-items-center fs-xs fw-medium text-body gap-1 p-0">
                                <div className="flex-shrink-0 border rounded-circle" style={{width: '22px'}}>
                                  <div className="ratio ratio-1x1 rounded-circle overflow-hidden">
                                    <img src="/assets/img/shop/marketplace/avatars/04.png" alt="Avatar" />
                                  </div>
                                </div>
                                Fireby
                              </div>
                              <div className="text-body-secondary">in</div>
                              <div className="category fs-xs fw-medium text-body">3D illustration</div>
                            </div>
                            {/* Visible on screens < 769px wide (md breakpoint) */}
                            <div className="fs-xs text-nowrap d-md-none mt-2 mb-1"><span className="text-body-secondary">License:</span> <span className="license">Standard</span></div>
                            <div className="fs-xs text-nowrap d-md-none"><span className="text-body-secondary">Date:</span> March 3, 2024</div>
                            {/* Visible on screens < 500px wide (sm breakpoint) */}
                            <button type="button" className="btn btn-sm btn-secondary rounded-pill animate-scale position-relative z-2 d-sm-none mt-3">
                              <i className="ci-download-cloud animate-target fs-sm ms-n1 me-1" />
                              Download
                            </button>
                          </div>
                        </div>
                      </td>
                      {/* Visible on screens > 768px wide (md breakpoint) */}
                      <td className="d-none d-md-table-cell py-3">March 3, 2024<span className="date visually-hidden">1709467200</span></td>
                      <td className="d-none d-md-table-cell py-3">Standard</td>
                      {/* Visible on screens > 500px wide (sm breakpoint) */}
                      <td className="d-none d-sm-table-cell text-end py-3 ps-0 ps-sm-3 pe-0" style={{width: '120px'}}>
                        <button type="button" className="btn btn-sm btn-secondary rounded-pill animate-scale">
                          <i className="ci-download-cloud animate-target fs-sm ms-n1 me-1" />
                          Download
                        </button>
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

export default Purchases
