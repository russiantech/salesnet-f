import Navigation from "../../../components/shared/Navigation"
import Aside from "../shared/Aside"

const Payouts = () => {
  return (
    <>

        <Navigation />

      {/* Page content */}
      <main className="content-wrapper">
        <div className="container pt-4 pt-lg-5 pb-5">
          <div className="row pt-sm-2 pt-md-3 pt-lg-0 pb-2 pb-sm-3 pb-md-4 pb-lg-5">
            {/* Sidebar navigation that turns into offcanvas on screens < 992px wide (lg breakpoint) */}
            
            <Aside />

            {/* Payouts content */}

      <div className="col-lg-9 pt-2 pt-xl-3">
        {/* Page title */}
        <h1 className="h2 pb-3 mb-2 mb-md-3">Payouts</h1>
        {/* Info alert */}
        <div className="alert alert-info mb-2 mb-sm-3 mb-md-4" role="alert">
          <div className="fw-semibold mb-2">Upcoming payout</div>
          <p className="fs-sm mb-0">Your current earnings of <span className="fw-semibold">$735.00</span> will be sent to you on September 2, 2024</p>
        </div>
        {/* Payouts table */}
        <div className="table-responsive" data-filter-list="{&quot;listClass&quot;: &quot;payouts-list&quot;, &quot;sortClass&quot;: &quot;payouts-sort&quot;, &quot;valueNames&quot;: [&quot;amount&quot;, &quot;date&quot;]}">
          <table className="table align-middle fs-sm">
            <thead>
              <tr>
                <th className="ps-0" scope="col">
                  <button type="button" className="btn fw-normal text-body payouts-sort p-0" data-sort="amount">Amount</button>
                </th>
                <th scope="col">
                  <span className="fw-normal text-body">Payout method</span>
                </th>
                <th scope="col">
                  <button type="button" className="btn fw-normal text-body payouts-sort p-0" data-sort="date">Date processed</button>
                </th>
                <th scope="col">
                  <span className="fw-normal text-body">Status</span>
                </th>
                <th className="pe-0" scope="col" />
              </tr>
            </thead>
            <tbody className="payouts-list"><tr>
                <td className="fw-medium py-3 ps-0">$1,233.84<span className="amount visually-hidden">123384</span></td>
                <td className="py-3">PayPal</td>
                <td className="py-3">August 16, 2024<span className="date visually-hidden">1723838358</span></td>
                <td className="py-3">
                  <span className="badge fs-xs text-info bg-info-subtle rounded-pill">In transit</span>
                </td>
                <td className="py-3 pe-0">
                  <div className="nav justify-content-end">
                    <a className="nav-link position-relative text-nowrap animate-underline py-1 px-0" href="#!">
                      <i className="ci-file ms-n1 me-1" />
                      <span className="fs-xs animate-target">Export to CVS</span>
                    </a>
                  </div>
                </td>
              </tr><tr>
                <td className="fw-medium py-3 ps-0">$805.79<span className="amount visually-hidden">80579</span></td>
                <td className="py-3">PayPal</td>
                <td className="py-3">August 2, 2024<span className="date visually-hidden">1722628758</span></td>
                <td className="py-3">
                  <span className="badge fs-xs text-success bg-success-subtle rounded-pill">Deposited</span>
                </td>
                <td className="fpy-3 pe-0">
                  <div className="nav justify-content-end">
                    <a className="nav-link position-relative text-nowrap animate-underline py-1 px-0" href="#!">
                      <i className="ci-file ms-n1 me-1" />
                      <span className="fs-xs animate-target">Export to CVS</span>
                    </a>
                  </div>
                </td>
              </tr><tr>
                <td className="fw-medium py-3 ps-0">$1,564.98<span className="amount visually-hidden">156498</span></td>
                <td className="py-3">Payoneer</td>
                <td className="py-3">July 16, 2024<span className="date visually-hidden">1721159958</span></td>
                <td className="py-3">
                  <span className="badge fs-xs text-success bg-success-subtle rounded-pill">Deposited</span>
                </td>
                <td className="fpy-3 pe-0">
                  <div className="nav justify-content-end">
                    <a className="nav-link position-relative text-nowrap animate-underline py-1 px-0" href="#!">
                      <i className="ci-file ms-n1 me-1" />
                      <span className="fs-xs animate-target">Export to CVS</span>
                    </a>
                  </div>
                </td>
              </tr><tr>
                <td className="fw-medium py-3 ps-0">$942.50<span className="amount visually-hidden">94250</span></td>
                <td className="py-3">PayPal</td>
                <td className="py-3">July 2, 2024<span className="date visually-hidden">1719950358</span></td>
                <td className="py-3">
                  <span className="badge fs-xs text-success bg-success-subtle rounded-pill">Deposited</span>
                </td>
                <td className="fpy-3 pe-0">
                  <div className="nav justify-content-end">
                    <a className="nav-link position-relative text-nowrap animate-underline py-1 px-0" href="#!">
                      <i className="ci-file ms-n1 me-1" />
                      <span className="fs-xs animate-target">Export to CVS</span>
                    </a>
                  </div>
                </td>
              </tr><tr>
                <td className="fw-medium py-3 ps-0">$1,759.35<span className="amount visually-hidden">175935</span></td>
                <td className="py-3">Payoneer</td>
                <td className="py-3">June 16, 2024<span className="date visually-hidden">1718567958</span></td>
                <td className="py-3">
                  <span className="badge fs-xs text-success bg-success-subtle rounded-pill">Deposited</span>
                </td>
                <td className="fpy-3 pe-0">
                  <div className="nav justify-content-end">
                    <a className="nav-link position-relative text-nowrap animate-underline py-1 px-0" href="#!">
                      <i className="ci-file ms-n1 me-1" />
                      <span className="fs-xs animate-target">Export to CVS</span>
                    </a>
                  </div>
                </td>
              </tr><tr>
                <td className="fw-medium text-danger py-3 ps-0">$2,060.80<span className="amount visually-hidden">206080</span></td>
                <td className="py-3">Payoneer</td>
                <td className="py-3">June 2, 2024<span className="date visually-hidden">1717358358</span></td>
                <td className="py-3">
                  <span className="badge fs-xs text-danger bg-danger-subtle rounded-pill">Returned</span>
                </td>
                <td className="fpy-3 pe-0">
                  <div className="nav justify-content-end">
                    <a className="nav-link position-relative text-nowrap animate-underline py-1 px-0" href="#!">
                      <i className="ci-file ms-n1 me-1" />
                      <span className="fs-xs animate-target">Export to CVS</span>
                    </a>
                  </div>
                </td>
              </tr><tr>
                <td className="fw-medium py-3 ps-0">$493.26<span className="amount visually-hidden">49326</span></td>
                <td className="py-3">SWIFT</td>
                <td className="py-3">May 16, 2024<span className="date visually-hidden">1715889558</span></td>
                <td className="py-3">
                  <span className="badge fs-xs text-success bg-success-subtle rounded-pill">Deposited</span>
                </td>
                <td className="fpy-3 pe-0">
                  <div className="nav justify-content-end">
                    <a className="nav-link position-relative text-nowrap animate-underline py-1 px-0" href="#!">
                      <i className="ci-file ms-n1 me-1" />
                      <span className="fs-xs animate-target">Export to CVS</span>
                    </a>
                  </div>
                </td>
              </tr><tr>
                <td className="fw-medium py-3 ps-0">$654.75<span className="amount visually-hidden">65475</span></td>
                <td className="py-3">SWIFT</td>
                <td className="py-3">May 2, 2024<span className="date visually-hidden">1714679958</span></td>
                <td className="py-3">
                  <span className="badge fs-xs text-success bg-success-subtle rounded-pill">Deposited</span>
                </td>
                <td className="fpy-3 pe-0">
                  <div className="nav justify-content-end">
                    <a className="nav-link position-relative text-nowrap animate-underline py-1 px-0" href="#!">
                      <i className="ci-file ms-n1 me-1" />
                      <span className="fs-xs animate-target">Export to CVS</span>
                    </a>
                  </div>
                </td>
              </tr></tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="d-flex align-items-center justify-content-between pt-2  gap-3">
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
      </main>

    </>
  )
}

export default Payouts
