import Navigation from "../../../components/shared/Navigation"
import Aside from "../shared/Aside"
import OrderItems from "./OrderItems"

const Orders = () => {

    return (
        <>
            <OrderItems />
            <Navigation />
            {/* Page content */}
            <main className="content-wrapper">
                <div className="container py-5 mt-n2 mt-sm-0">
                    <div className="row pt-md-2 pt-lg-3 pb-sm-2 pb-md-3 pb-lg-4 pb-xl-5">

                        {/* Sidebar navigation that turns into offcanvas on screens < 992px wide (lg breakpoint) */}

                        <Aside />

                        {/* Orders content */}
                        <div className="col-lg-9">
                            <div className="ps-lg-3 ps-xl-0">
                                {/* Page title + Sorting selects */}
                                <div className="row align-items-center pb-3 pb-md-4 mb-md-1 mb-lg-2">
                                    <div className="col-md-4 col-xl-6 mb-3 mb-md-0">
                                        <h1 className="h2 me-3 mb-0">Orders</h1>
                                    </div>
                                    <div className="col-md-8 col-xl-6">
                                        <div className="row row-cols-1 row-cols-sm-2 g-3 g-xxl-4">
                                            <div className="col">
                                                <select className="form-select" data-select="{
                  &quot;placeholderValue&quot;: &quot;Select status&quot;,
                  &quot;choices&quot;: [
                    {
                      &quot;value&quot;: &quot;&quot;,
                      &quot;label&quot;: &quot;Select status&quot;,
                      &quot;placeholder&quot;: true
                    },
                    {
                      &quot;value&quot;: &quot;inprogress&quot;,
                      &quot;label&quot;: &quot;<div class=\&quot;d-flex align-items-center text-nowrap\&quot;><span class=\&quot;bg-info rounded-circle p-1 me-2\&quot;></span>In progress</div>&quot;
                    },
                    {
                      &quot;value&quot;: &quot;delivered&quot;,
                      &quot;label&quot;: &quot;<div class=\&quot;d-flex align-items-center text-nowrap\&quot;><span class=\&quot;bg-success rounded-circle p-1 me-2\&quot;></span>Delivered</div>&quot;
                    },
                    {
                      &quot;value&quot;: &quot;canceled&quot;,
                      &quot;label&quot;: &quot;<div class=\&quot;d-flex align-items-center text-nowrap\&quot;><span class=\&quot;bg-danger rounded-circle p-1 me-2\&quot;></span>Canceled</div>&quot;
                    },
                    {
                      &quot;value&quot;: &quot;delayed&quot;,
                      &quot;label&quot;: &quot;<div class=\&quot;d-flex align-items-center text-nowrap\&quot;><span class=\&quot;bg-warning rounded-circle p-1 me-2\&quot;></span>Delayed</div>&quot;
                    }
                  ]
                }" data-select-template="true" aria-label="Status sorting" />
                                            </div>
                                            <div className="col">
                                                <select className="form-select" data-select="{&quot;removeItemButton&quot;: false}" aria-label="Timeframe sorting">
                                                    <option value="all-time">For all time</option>
                                                    <option value="last-year">For last year</option>
                                                    <option value="last-3-months">For last 3 months</option>
                                                    <option value="last-30-days">For last 30 days</option>
                                                    <option value="last-week">For last week</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Sortable orders table */}
                                <div data-filter-list="{&quot;listClass&quot;: &quot;orders-list&quot;, &quot;sortClass&quot;: &quot;orders-sort&quot;, &quot;valueNames&quot;: [&quot;date&quot;, &quot;total&quot;]}">
                                    <table className="table align-middle fs-sm text-nowrap">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="py-3 ps-0">
                                                    <span className="text-body fw-normal">Order <span className="d-none d-md-inline">#</span></span>
                                                </th>
                                                <th scope="col" className="py-3 d-none d-md-table-cell">
                                                    <button type="button" className="btn orders-sort fw-normal text-body p-0" data-sort="date">Order date</button>
                                                </th>
                                                <th scope="col" className="py-3 d-none d-md-table-cell">
                                                    <span className="text-body fw-normal">Status</span>
                                                </th>
                                                <th scope="col" className="py-3 d-none d-md-table-cell">
                                                    <button type="button" className="btn orders-sort fw-normal text-body p-0" data-sort="total">Total</button>
                                                </th>
                                                <th scope="col" className="py-3">&nbsp;</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-body-emphasis orders-list">
                                            {/* Item */}
                                            <tr>
                                                <td className="fw-medium pt-2 pb-3 py-md-2 ps-0">
                                                    <a className="d-inline-block animate-underline text-body-emphasis text-decoration-none py-2" href="#orderDetails" data-bs-toggle="offcanvas" aria-controls="orderDetails" aria-label="Show order details">
                                                        <span className="animate-target">78A6431D409</span>
                                                    </a>
                                                    <ul className="list-unstyled fw-normal text-body m-0 d-md-none">
                                                        <li>Feb 6, 2025</li>
                                                        <li className="d-flex align-items-center">
                                                            <span className="bg-info rounded-circle p-1 me-2" />
                                                            In progress
                                                        </li>
                                                        <li className="fw-medium text-body-emphasis">$2,105.90</li>
                                                    </ul>
                                                </td>
                                                <td className="fw-medium py-3 d-none d-md-table-cell">
                                                    Feb 6, 2025
                                                    <span className="date d-none">25-02-06</span>
                                                </td>
                                                <td className="fw-medium py-3 d-none d-md-table-cell">
                                                    <span className="d-flex align-items-center">
                                                        <span className="bg-info rounded-circle p-1 me-2" />
                                                        In progress
                                                    </span>
                                                </td>
                                                <td className="fw-medium py-3 d-none d-md-table-cell">
                                                    $2,105.90
                                                    <span className="total d-none">210590</span>
                                                </td>
                                                <td className="py-3 pe-0">
                                                    <span className="d-flex align-items-center justify-content-end position-relative gap-1 gap-sm-2 ms-n2 ms-sm-0">
                                                        <span><img src="/assets/img/shop/electronics/thumbs/20.png" width={64} alt="Thumbnail" /></span>
                                                        <span><img src="/assets/img/shop/electronics/thumbs/16.png" width={64} alt="Thumbnail" /></span>
                                                        <span><img src="/assets/img/shop/electronics/thumbs/15.png" width={64} alt="Thumbnail" /></span>
                                                        <a className="btn btn-icon btn-ghost btn-secondary stretched-link border-0" href="#orderDetails" data-bs-toggle="offcanvas" aria-controls="orderDetails" aria-label="Show order details">
                                                            <i className="ci-chevron-right fs-lg" />
                                                        </a>
                                                    </span>
                                                </td>
                                            </tr>
                                            {/* Item */}
                                            <tr>
                                                <td className="fw-medium pt-2 pb-3 py-md-2 ps-0">
                                                    <a className="d-inline-block animate-underline text-body-emphasis text-decoration-none py-2" href="#orderDetails" data-bs-toggle="offcanvas" aria-controls="orderDetails" aria-label="Show order details">
                                                        <span className="animate-target">47H76G09F33</span>
                                                    </a>
                                                    <ul className="list-unstyled fw-normal text-body m-0 d-md-none">
                                                        <li>Dec 12, 2024</li>
                                                        <li className="d-flex align-items-center">
                                                            <span className="bg-success rounded-circle p-1 me-2" />
                                                            Delivered
                                                        </li>
                                                        <li className="fw-medium text-body-emphasis">$360.75</li>
                                                    </ul>
                                                </td>
                                                <td className="fw-medium py-3 d-none d-md-table-cell">
                                                    Dec 12, 2024
                                                    <span className="date d-none">24-12-12</span>
                                                </td>
                                                <td className="fw-medium py-3 d-none d-md-table-cell">
                                                    <span className="d-flex align-items-center">
                                                        <span className="bg-success rounded-circle p-1 me-2" />
                                                        Delivered
                                                    </span>
                                                </td>
                                                <td className="fw-medium py-3 d-none d-md-table-cell">
                                                    $360.75
                                                    <span className="total d-none">36075</span>
                                                </td>
                                                <td className="py-3 pe-0">
                                                    <span className="d-flex align-items-center justify-content-end position-relative gap-1 gap-sm-2 ms-n2 ms-sm-0">
                                                        <span><img src="/assets/img/shop/electronics/thumbs/14.png" width={64} alt="Thumbnail" /></span>
                                                        <a className="btn btn-icon btn-ghost btn-secondary stretched-link border-0" href="#orderDetails" data-bs-toggle="offcanvas" aria-controls="orderDetails" aria-label="Show order details">
                                                            <i className="ci-chevron-right fs-lg" />
                                                        </a>
                                                    </span>
                                                </td>
                                            </tr>
                                            {/* Item */}
                                            <tr>
                                                <td className="fw-medium pt-2 pb-3 py-md-2 ps-0">
                                                    <a className="d-inline-block animate-underline text-body-emphasis text-decoration-none py-2" href="#orderDetails" data-bs-toggle="offcanvas" aria-controls="orderDetails" aria-label="Show order details">
                                                        <span className="animate-target">502TR872W2</span>
                                                    </a>
                                                    <ul className="list-unstyled fw-normal text-body m-0 d-md-none">
                                                        <li>Nov 7, 2024</li>
                                                        <li className="d-flex align-items-center">
                                                            <span className="bg-success rounded-circle p-1 me-2" />
                                                            Delivered
                                                        </li>
                                                        <li className="fw-medium text-body-emphasis">$4,268.00</li>
                                                    </ul>
                                                </td>
                                                <td className="fw-medium py-3 d-none d-md-table-cell">
                                                    Nov 7, 2024
                                                    <span className="date d-none">24-11-07</span>
                                                </td>
                                                <td className="fw-medium py-3 d-none d-md-table-cell">
                                                    <span className="d-flex align-items-center">
                                                        <span className="bg-success rounded-circle p-1 me-2" />
                                                        Delivered
                                                    </span>
                                                </td>
                                                <td className="fw-medium py-3 d-none d-md-table-cell">
                                                    $4,268.00
                                                    <span className="total d-none">426800</span>
                                                </td>
                                                <td className="py-3 pe-0">
                                                    <span className="d-flex align-items-center justify-content-end position-relative gap-1 gap-sm-2 ms-n2 ms-sm-0">
                                                        <span><img src="/assets/img/shop/electronics/thumbs/12.png" width={64} alt="Thumbnail" /></span>
                                                        <span><img src="/assets/img/shop/electronics/thumbs/13.png" width={64} alt="Thumbnail" /></span>
                                                        <span><img src="/assets/img/shop/electronics/thumbs/18.png" width={64} alt="Thumbnail" /></span>
                                                        <span className="fw-medium me-1">+3</span>
                                                        <a className="btn btn-icon btn-ghost btn-secondary stretched-link border-0" href="#orderDetails" data-bs-toggle="offcanvas" aria-controls="orderDetails" aria-label="Show order details">
                                                            <i className="ci-chevron-right fs-lg" />
                                                        </a>
                                                    </span>
                                                </td>
                                            </tr>
                                            {/* Item */}
                                            <tr>
                                                <td className="fw-medium pt-2 pb-3 py-md-2 ps-0">
                                                    <a className="d-inline-block animate-underline text-body-emphasis text-decoration-none py-2" href="#orderDetails" data-bs-toggle="offcanvas" aria-controls="orderDetails" aria-label="Show order details">
                                                        <span className="animate-target">34VB5540K83</span>
                                                    </a>
                                                    <ul className="list-unstyled fw-normal text-body m-0 d-md-none">
                                                        <li>Sep 15, 2024</li>
                                                        <li className="d-flex align-items-center">
                                                            <span className="bg-danger rounded-circle p-1 me-2" />
                                                            Canceled
                                                        </li>
                                                        <li className="fw-medium text-body-emphasis">$987.50</li>
                                                    </ul>
                                                </td>
                                                <td className="fw-medium py-3 d-none d-md-table-cell">
                                                    Sep 15, 2024
                                                    <span className="date d-none">24-09-15</span>
                                                </td>
                                                <td className="fw-medium py-3 d-none d-md-table-cell">
                                                    <span className="d-flex align-items-center">
                                                        <span className="bg-danger rounded-circle p-1 me-2" />
                                                        Canceled
                                                    </span>
                                                </td>
                                                <td className="fw-medium py-3 d-none d-md-table-cell">
                                                    $987.50
                                                    <span className="total d-none">98750</span>
                                                </td>
                                                <td className="py-3 pe-0">
                                                    <span className="d-flex align-items-center justify-content-end position-relative gap-1 gap-sm-2 ms-n2 ms-sm-0">
                                                        <span><img src="/assets/img/shop/electronics/thumbs/21.png" width={64} alt="Thumbnail" /></span>
                                                        <span><img src="/assets/img/shop/electronics/thumbs/11.png" width={64} alt="Thumbnail" /></span>
                                                        <a className="btn btn-icon btn-ghost btn-secondary stretched-link border-0" href="#orderDetails" data-bs-toggle="offcanvas" aria-controls="orderDetails" aria-label="Show order details">
                                                            <i className="ci-chevron-right fs-lg" />
                                                        </a>
                                                    </span>
                                                </td>
                                            </tr>
                                            {/* Item */}
                                            <tr>
                                                <td className="fw-medium pt-2 pb-3 py-md-2 ps-0">
                                                    <a className="d-inline-block animate-underline text-body-emphasis text-decoration-none py-2" href="#orderDetails" data-bs-toggle="offcanvas" aria-controls="orderDetails" aria-label="Show order details">
                                                        <span className="animate-target">112P45A90V2</span>
                                                    </a>
                                                    <ul className="list-unstyled fw-normal text-body m-0 d-md-none">
                                                        <li>May 12, 2024</li>
                                                        <li className="d-flex align-items-center">
                                                            <span className="bg-success rounded-circle p-1 me-2" />
                                                            Delivered
                                                        </li>
                                                        <li className="fw-medium text-body-emphasis">$53.00</li>
                                                    </ul>
                                                </td>
                                                <td className="fw-medium py-3 d-none d-md-table-cell">
                                                    May 12, 2024
                                                    <span className="date d-none">24-05-12</span>
                                                </td>
                                                <td className="fw-medium py-3 d-none d-md-table-cell">
                                                    <span className="d-flex align-items-center">
                                                        <span className="bg-success rounded-circle p-1 me-2" />
                                                        Delivered
                                                    </span>
                                                </td>
                                                <td className="fw-medium py-3 d-none d-md-table-cell">
                                                    $53.00
                                                    <span className="total d-none">5300</span>
                                                </td>
                                                <td className="py-3 pe-0">
                                                    <span className="d-flex align-items-center justify-content-end position-relative gap-1 gap-sm-2 ms-n2 ms-sm-0">
                                                        <span><img src="/assets/img/shop/electronics/thumbs/17.png" width={64} alt="Thumbnail" /></span>
                                                        <a className="btn btn-icon btn-ghost btn-secondary stretched-link border-0" href="#orderDetails" data-bs-toggle="offcanvas" aria-controls="orderDetails" aria-label="Show order details">
                                                            <i className="ci-chevron-right fs-lg" />
                                                        </a>
                                                    </span>
                                                </td>
                                            </tr>
                                            {/* Item */}
                                            <tr>
                                                <td className="fw-medium pt-2 pb-3 py-md-2 ps-0">
                                                    <a className="d-inline-block animate-underline text-body-emphasis text-decoration-none py-2" href="#orderDetails" data-bs-toggle="offcanvas" aria-controls="orderDetails" aria-label="Show order details">
                                                        <span className="animate-target">28BA67U0981</span>
                                                    </a>
                                                    <ul className="list-unstyled fw-normal text-body m-0 d-md-none">
                                                        <li>Apr 20, 2024</li>
                                                        <li className="d-flex align-items-center">
                                                            <span className="bg-danger rounded-circle p-1 me-2" />
                                                            Canceled
                                                        </li>
                                                        <li className="fw-medium text-body-emphasis">$1,029.50</li>
                                                    </ul>
                                                </td>
                                                <td className="fw-medium py-3 d-none d-md-table-cell">
                                                    Apr 20, 2024
                                                    <span className="date d-none">24-04-20</span>
                                                </td>
                                                <td className="fw-medium py-3 d-none d-md-table-cell">
                                                    <span className="d-flex align-items-center">
                                                        <span className="bg-danger rounded-circle p-1 me-2" />
                                                        Canceled
                                                    </span>
                                                </td>
                                                <td className="fw-medium py-3 d-none d-md-table-cell">
                                                    $1,029.50
                                                    <span className="total d-none">102950</span>
                                                </td>
                                                <td className="py-3 pe-0">
                                                    <span className="d-flex align-items-center justify-content-end position-relative gap-1 gap-sm-2 ms-n2 ms-sm-0">
                                                        <span><img src="/assets/img/shop/electronics/thumbs/19.png" width={64} alt="Thumbnail" /></span>
                                                        <span><img src="/assets/img/shop/electronics/thumbs/22.png" width={64} alt="Thumbnail" /></span>
                                                        <a className="btn btn-icon btn-ghost btn-secondary stretched-link border-0" href="#orderDetails" data-bs-toggle="offcanvas" aria-controls="orderDetails" aria-label="Show order details">
                                                            <i className="ci-chevron-right fs-lg" />
                                                        </a>
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/* Pagination */}
                                <nav className="pt-3 pb-2 pb-sm-0 mt-2 mt-md-3" aria-label="Page navigation example">
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

export default Orders
