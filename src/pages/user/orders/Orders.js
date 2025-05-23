import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
// import Navigation from "../../../components/shared/Navigation"
// import Aside from "../shared/Aside"
// import OrderItems from "./OrderItems"
// const Orders = () => {
//     return (
//         <>
//             <OrderItems />
//             {/* <Navigation /> */}
//             {/* Page content */}
//             <main className="content-wrapper">
//                 <div className="container py-5 mt-n2 mt-sm-0">
//                     <div className="row pt-md-2 pt-lg-3 pb-sm-2 pb-md-3 pb-lg-4 pb-xl-5">
//                         {/* Sidebar navigation that turns into offcanvas on screens < 992px wide (lg breakpoint) */}
//                         <Aside />
//                         {/* Orders content */}
//                         <div className="col-lg-9">
//                             <div className="ps-lg-3 ps-xl-0">
//                                 {/* Page title + Sorting selects */}
//                                 <div className="row align-items-center pb-3 pb-md-4 mb-md-1 mb-lg-2">
//                                     <div className="col-md-4 col-xl-6 mb-3 mb-md-0">
//                                         <h1 className="h2 me-3 mb-0">Orders</h1>
//                                     </div>
//                                     <div className="col-md-8 col-xl-6">
//                                         <div className="row row-cols-1 row-cols-sm-2 g-3 g-xxl-4">
//                                             <div className="col">
//                                                 <select className="form-select" data-select="{
//                   &quot;placeholderValue&quot;: &quot;Select status&quot;,
//                   &quot;choices&quot;: [
//                     {
//                       &quot;value&quot;: &quot;&quot;,
//                       &quot;label&quot;: &quot;Select status&quot;,
//                       &quot;placeholder&quot;: true
//                     },
//                     {
//                       &quot;value&quot;: &quot;inprogress&quot;,
//                       &quot;label&quot;: &quot;<div class=\&quot;d-flex align-items-center text-nowrap\&quot;><span class=\&quot;bg-info rounded-circle p-1 me-2\&quot;></span>In progress</div>&quot;
//                     },
//                     {
//                       &quot;value&quot;: &quot;delivered&quot;,
//                       &quot;label&quot;: &quot;<div class=\&quot;d-flex align-items-center text-nowrap\&quot;><span class=\&quot;bg-success rounded-circle p-1 me-2\&quot;></span>Delivered</div>&quot;
//                     },
//                     {
//                       &quot;value&quot;: &quot;canceled&quot;,
//                       &quot;label&quot;: &quot;<div class=\&quot;d-flex align-items-center text-nowrap\&quot;><span class=\&quot;bg-danger rounded-circle p-1 me-2\&quot;></span>Canceled</div>&quot;
//                     },
//                     {
//                       &quot;value&quot;: &quot;delayed&quot;,
//                       &quot;label&quot;: &quot;<div class=\&quot;d-flex align-items-center text-nowrap\&quot;><span class=\&quot;bg-warning rounded-circle p-1 me-2\&quot;></span>Delayed</div>&quot;
//                     }
//                   ]
//                 }" data-select-template="true" aria-label="Status sorting" />
//                                             </div>
//                                             <div className="col">
//                                                 <select className="form-select" data-select="{&quot;removeItemButton&quot;: false}" aria-label="Timeframe sorting">
//                                                     <option value="all-time">For all time</option>
//                                                     <option value="last-year">For last year</option>
//                                                     <option value="last-3-months">For last 3 months</option>
//                                                     <option value="last-30-days">For last 30 days</option>
//                                                     <option value="last-week">For last week</option>
//                                                 </select>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 {/* Sortable orders table */}
//                                 <div data-filter-list="{&quot;listClass&quot;: &quot;orders-list&quot;, &quot;sortClass&quot;: &quot;orders-sort&quot;, &quot;valueNames&quot;: [&quot;date&quot;, &quot;total&quot;]}">
//                                     <table className="table align-middle fs-sm text-nowrap">
//                                         <thead>
//                                             <tr>
//                                                 <th scope="col" className="py-3 ps-0">
//                                                     <span className="text-body fw-normal">Order <span className="d-none d-md-inline">#</span></span>
//                                                 </th>
//                                                 <th scope="col" className="py-3 d-none d-md-table-cell">
//                                                     <button type="button" className="btn orders-sort fw-normal text-body p-0" data-sort="date">Order date</button>
//                                                 </th>
//                                                 <th scope="col" className="py-3 d-none d-md-table-cell">
//                                                     <span className="text-body fw-normal">Status</span>
//                                                 </th>
//                                                 <th scope="col" className="py-3 d-none d-md-table-cell">
//                                                     <button type="button" className="btn orders-sort fw-normal text-body p-0" data-sort="total">Total</button>
//                                                 </th>
//                                                 <th scope="col" className="py-3">&nbsp;</th>
//                                             </tr>
//                                         </thead>
//                                         <tbody className="text-body-emphasis orders-list">
//                                             {/* Item */}
//                                             <tr>
//                                                 <td className="fw-medium pt-2 pb-3 py-md-2 ps-0">
//                                                     <a className="d-inline-block animate-underline text-body-emphasis text-decoration-none py-2" href="#orderDetails" data-bs-toggle="offcanvas" aria-controls="orderDetails" aria-label="Show order details">
//                                                         <span className="animate-target">78A6431D409</span>
//                                                     </a>
//                                                     <ul className="list-unstyled fw-normal text-body m-0 d-md-none">
//                                                         <li>Feb 6, 2025</li>
//                                                         <li className="d-flex align-items-center">
//                                                             <span className="bg-info rounded-circle p-1 me-2" />
//                                                             In progress
//                                                         </li>
//                                                         <li className="fw-medium text-body-emphasis">$2,105.90</li>
//                                                     </ul>
//                                                 </td>
//                                                 <td className="fw-medium py-3 d-none d-md-table-cell">
//                                                     Feb 6, 2025
//                                                     <span className="date d-none">25-02-06</span>
//                                                 </td>
//                                                 <td className="fw-medium py-3 d-none d-md-table-cell">
//                                                     <span className="d-flex align-items-center">
//                                                         <span className="bg-info rounded-circle p-1 me-2" />
//                                                         In progress
//                                                     </span>
//                                                 </td>
//                                                 <td className="fw-medium py-3 d-none d-md-table-cell">
//                                                     $2,105.90
//                                                     <span className="total d-none">210590</span>
//                                                 </td>
//                                                 <td className="py-3 pe-0">
//                                                     <span className="d-flex align-items-center justify-content-end position-relative gap-1 gap-sm-2 ms-n2 ms-sm-0">
//                                                         <span><img src="/assets/img/shop/electronics/thumbs/20.png" width={64} alt="Thumbnail" /></span>
//                                                         <span><img src="/assets/img/shop/electronics/thumbs/16.png" width={64} alt="Thumbnail" /></span>
//                                                         <span><img src="/assets/img/shop/electronics/thumbs/15.png" width={64} alt="Thumbnail" /></span>
//                                                         <a className="btn btn-icon btn-ghost btn-secondary stretched-link border-0" href="#orderDetails" data-bs-toggle="offcanvas" aria-controls="orderDetails" aria-label="Show order details">
//                                                             <i className="ci-chevron-right fs-lg" />
//                                                         </a>
//                                                     </span>
//                                                 </td>
//                                             </tr>
//                                             {/* Item */}
//                                             <tr>
//                                                 <td className="fw-medium pt-2 pb-3 py-md-2 ps-0">
//                                                     <a className="d-inline-block animate-underline text-body-emphasis text-decoration-none py-2" href="#orderDetails" data-bs-toggle="offcanvas" aria-controls="orderDetails" aria-label="Show order details">
//                                                         <span className="animate-target">47H76G09F33</span>
//                                                     </a>
//                                                     <ul className="list-unstyled fw-normal text-body m-0 d-md-none">
//                                                         <li>Dec 12, 2024</li>
//                                                         <li className="d-flex align-items-center">
//                                                             <span className="bg-success rounded-circle p-1 me-2" />
//                                                             Delivered
//                                                         </li>
//                                                         <li className="fw-medium text-body-emphasis">$360.75</li>
//                                                     </ul>
//                                                 </td>
//                                                 <td className="fw-medium py-3 d-none d-md-table-cell">
//                                                     Dec 12, 2024
//                                                     <span className="date d-none">24-12-12</span>
//                                                 </td>
//                                                 <td className="fw-medium py-3 d-none d-md-table-cell">
//                                                     <span className="d-flex align-items-center">
//                                                         <span className="bg-success rounded-circle p-1 me-2" />
//                                                         Delivered
//                                                     </span>
//                                                 </td>
//                                                 <td className="fw-medium py-3 d-none d-md-table-cell">
//                                                     $360.75
//                                                     <span className="total d-none">36075</span>
//                                                 </td>
//                                                 <td className="py-3 pe-0">
//                                                     <span className="d-flex align-items-center justify-content-end position-relative gap-1 gap-sm-2 ms-n2 ms-sm-0">
//                                                         <span><img src="/assets/img/shop/electronics/thumbs/14.png" width={64} alt="Thumbnail" /></span>
//                                                         <a className="btn btn-icon btn-ghost btn-secondary stretched-link border-0" href="#orderDetails" data-bs-toggle="offcanvas" aria-controls="orderDetails" aria-label="Show order details">
//                                                             <i className="ci-chevron-right fs-lg" />
//                                                         </a>
//                                                     </span>
//                                                 </td>
//                                             </tr>
//                                             {/* Item */}
//                                             <tr>
//                                                 <td className="fw-medium pt-2 pb-3 py-md-2 ps-0">
//                                                     <a className="d-inline-block animate-underline text-body-emphasis text-decoration-none py-2" href="#orderDetails" data-bs-toggle="offcanvas" aria-controls="orderDetails" aria-label="Show order details">
//                                                         <span className="animate-target">502TR872W2</span>
//                                                     </a>
//                                                     <ul className="list-unstyled fw-normal text-body m-0 d-md-none">
//                                                         <li>Nov 7, 2024</li>
//                                                         <li className="d-flex align-items-center">
//                                                             <span className="bg-success rounded-circle p-1 me-2" />
//                                                             Delivered
//                                                         </li>
//                                                         <li className="fw-medium text-body-emphasis">$4,268.00</li>
//                                                     </ul>
//                                                 </td>
//                                                 <td className="fw-medium py-3 d-none d-md-table-cell">
//                                                     Nov 7, 2024
//                                                     <span className="date d-none">24-11-07</span>
//                                                 </td>
//                                                 <td className="fw-medium py-3 d-none d-md-table-cell">
//                                                     <span className="d-flex align-items-center">
//                                                         <span className="bg-success rounded-circle p-1 me-2" />
//                                                         Delivered
//                                                     </span>
//                                                 </td>
//                                                 <td className="fw-medium py-3 d-none d-md-table-cell">
//                                                     $4,268.00
//                                                     <span className="total d-none">426800</span>
//                                                 </td>
//                                                 <td className="py-3 pe-0">
//                                                     <span className="d-flex align-items-center justify-content-end position-relative gap-1 gap-sm-2 ms-n2 ms-sm-0">
//                                                         <span><img src="/assets/img/shop/electronics/thumbs/12.png" width={64} alt="Thumbnail" /></span>
//                                                         <span><img src="/assets/img/shop/electronics/thumbs/13.png" width={64} alt="Thumbnail" /></span>
//                                                         <span><img src="/assets/img/shop/electronics/thumbs/18.png" width={64} alt="Thumbnail" /></span>
//                                                         <span className="fw-medium me-1">+3</span>
//                                                         <a className="btn btn-icon btn-ghost btn-secondary stretched-link border-0" href="#orderDetails" data-bs-toggle="offcanvas" aria-controls="orderDetails" aria-label="Show order details">
//                                                             <i className="ci-chevron-right fs-lg" />
//                                                         </a>
//                                                     </span>
//                                                 </td>
//                                             </tr>
//                                             {/* Item */}
//                                             <tr>
//                                                 <td className="fw-medium pt-2 pb-3 py-md-2 ps-0">
//                                                     <a className="d-inline-block animate-underline text-body-emphasis text-decoration-none py-2" href="#orderDetails" data-bs-toggle="offcanvas" aria-controls="orderDetails" aria-label="Show order details">
//                                                         <span className="animate-target">34VB5540K83</span>
//                                                     </a>
//                                                     <ul className="list-unstyled fw-normal text-body m-0 d-md-none">
//                                                         <li>Sep 15, 2024</li>
//                                                         <li className="d-flex align-items-center">
//                                                             <span className="bg-danger rounded-circle p-1 me-2" />
//                                                             Canceled
//                                                         </li>
//                                                         <li className="fw-medium text-body-emphasis">$987.50</li>
//                                                     </ul>
//                                                 </td>
//                                                 <td className="fw-medium py-3 d-none d-md-table-cell">
//                                                     Sep 15, 2024
//                                                     <span className="date d-none">24-09-15</span>
//                                                 </td>
//                                                 <td className="fw-medium py-3 d-none d-md-table-cell">
//                                                     <span className="d-flex align-items-center">
//                                                         <span className="bg-danger rounded-circle p-1 me-2" />
//                                                         Canceled
//                                                     </span>
//                                                 </td>
//                                                 <td className="fw-medium py-3 d-none d-md-table-cell">
//                                                     $987.50
//                                                     <span className="total d-none">98750</span>
//                                                 </td>
//                                                 <td className="py-3 pe-0">
//                                                     <span className="d-flex align-items-center justify-content-end position-relative gap-1 gap-sm-2 ms-n2 ms-sm-0">
//                                                         <span><img src="/assets/img/shop/electronics/thumbs/21.png" width={64} alt="Thumbnail" /></span>
//                                                         <span><img src="/assets/img/shop/electronics/thumbs/11.png" width={64} alt="Thumbnail" /></span>
//                                                         <a className="btn btn-icon btn-ghost btn-secondary stretched-link border-0" href="#orderDetails" data-bs-toggle="offcanvas" aria-controls="orderDetails" aria-label="Show order details">
//                                                             <i className="ci-chevron-right fs-lg" />
//                                                         </a>
//                                                     </span>
//                                                 </td>
//                                             </tr>
//                                             {/* Item */}
//                                             <tr>
//                                                 <td className="fw-medium pt-2 pb-3 py-md-2 ps-0">
//                                                     <a className="d-inline-block animate-underline text-body-emphasis text-decoration-none py-2" href="#orderDetails" data-bs-toggle="offcanvas" aria-controls="orderDetails" aria-label="Show order details">
//                                                         <span className="animate-target">112P45A90V2</span>
//                                                     </a>
//                                                     <ul className="list-unstyled fw-normal text-body m-0 d-md-none">
//                                                         <li>May 12, 2024</li>
//                                                         <li className="d-flex align-items-center">
//                                                             <span className="bg-success rounded-circle p-1 me-2" />
//                                                             Delivered
//                                                         </li>
//                                                         <li className="fw-medium text-body-emphasis">$53.00</li>
//                                                     </ul>
//                                                 </td>
//                                                 <td className="fw-medium py-3 d-none d-md-table-cell">
//                                                     May 12, 2024
//                                                     <span className="date d-none">24-05-12</span>
//                                                 </td>
//                                                 <td className="fw-medium py-3 d-none d-md-table-cell">
//                                                     <span className="d-flex align-items-center">
//                                                         <span className="bg-success rounded-circle p-1 me-2" />
//                                                         Delivered
//                                                     </span>
//                                                 </td>
//                                                 <td className="fw-medium py-3 d-none d-md-table-cell">
//                                                     $53.00
//                                                     <span className="total d-none">5300</span>
//                                                 </td>
//                                                 <td className="py-3 pe-0">
//                                                     <span className="d-flex align-items-center justify-content-end position-relative gap-1 gap-sm-2 ms-n2 ms-sm-0">
//                                                         <span><img src="/assets/img/shop/electronics/thumbs/17.png" width={64} alt="Thumbnail" /></span>
//                                                         <a className="btn btn-icon btn-ghost btn-secondary stretched-link border-0" href="#orderDetails" data-bs-toggle="offcanvas" aria-controls="orderDetails" aria-label="Show order details">
//                                                             <i className="ci-chevron-right fs-lg" />
//                                                         </a>
//                                                     </span>
//                                                 </td>
//                                             </tr>
//                                             {/* Item */}
//                                             <tr>
//                                                 <td className="fw-medium pt-2 pb-3 py-md-2 ps-0">
//                                                     <a className="d-inline-block animate-underline text-body-emphasis text-decoration-none py-2" href="#orderDetails" data-bs-toggle="offcanvas" aria-controls="orderDetails" aria-label="Show order details">
//                                                         <span className="animate-target">28BA67U0981</span>
//                                                     </a>
//                                                     <ul className="list-unstyled fw-normal text-body m-0 d-md-none">
//                                                         <li>Apr 20, 2024</li>
//                                                         <li className="d-flex align-items-center">
//                                                             <span className="bg-danger rounded-circle p-1 me-2" />
//                                                             Canceled
//                                                         </li>
//                                                         <li className="fw-medium text-body-emphasis">$1,029.50</li>
//                                                     </ul>
//                                                 </td>
//                                                 <td className="fw-medium py-3 d-none d-md-table-cell">
//                                                     Apr 20, 2024
//                                                     <span className="date d-none">24-04-20</span>
//                                                 </td>
//                                                 <td className="fw-medium py-3 d-none d-md-table-cell">
//                                                     <span className="d-flex align-items-center">
//                                                         <span className="bg-danger rounded-circle p-1 me-2" />
//                                                         Canceled
//                                                     </span>
//                                                 </td>
//                                                 <td className="fw-medium py-3 d-none d-md-table-cell">
//                                                     $1,029.50
//                                                     <span className="total d-none">102950</span>
//                                                 </td>
//                                                 <td className="py-3 pe-0">
//                                                     <span className="d-flex align-items-center justify-content-end position-relative gap-1 gap-sm-2 ms-n2 ms-sm-0">
//                                                         <span><img src="/assets/img/shop/electronics/thumbs/19.png" width={64} alt="Thumbnail" /></span>
//                                                         <span><img src="/assets/img/shop/electronics/thumbs/22.png" width={64} alt="Thumbnail" /></span>
//                                                         <a className="btn btn-icon btn-ghost btn-secondary stretched-link border-0" href="#orderDetails" data-bs-toggle="offcanvas" aria-controls="orderDetails" aria-label="Show order details">
//                                                             <i className="ci-chevron-right fs-lg" />
//                                                         </a>
//                                                     </span>
//                                                 </td>
//                                             </tr>
//                                         </tbody>
//                                     </table>
//                                 </div>
//                                 {/* Pagination */}
//                                 <nav className="pt-3 pb-2 pb-sm-0 mt-2 mt-md-3" aria-label="Page navigation example">
//                                     <ul className="pagination">
//                                         <li className="page-item active" aria-current="page">
//                                             <span className="page-link">
//                                                 1
//                                                 <span className="visually-hidden">(current)</span>
//                                             </span>
//                                         </li>
//                                         <li className="page-item">
//                                             <a className="page-link" href="#">2</a>
//                                         </li>
//                                         <li className="page-item">
//                                             <a className="page-link" href="#">3</a>
//                                         </li>
//                                         <li className="page-item">
//                                             <a className="page-link" href="#">4</a>
//                                         </li>
//                                     </ul>
//                                 </nav>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </main>
//         </>
//     )
// }
// export default Orders
// VERSION 02
import { useState, useEffect } from 'react';
import Aside from "../shared/Aside";
import OrderItems from "./OrderItems";
// import { Pagination } from 'swiper/modules';
import { OrdersAxiosService } from '../../../services/net/OrdersAxiosService';
import OrderListItem from './OrderListItem';
import Pagination from '../../../components/shared/Pagination';
import LoadingSpinner from '../../../components/shared/LoadingSpinner';
// import  OrdersAxiosService.from '../../services/OrderService';
// import { Spinner } from '../ui/Spinner';
// import OrderListItem from './OrderListItem';
// import Pagination from '../ui/Pagination';
const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [statusFilter, setStatusFilter] = useState('');
    const [timeframeFilter, setTimeframeFilter] = useState('all-time');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [selectedOrder, setSelectedOrder] = useState(null);
    // Fetch orders based on current filters
    const fetchOrders = async () => {
        try {
            setLoading(true);
            const response = await OrdersAxiosService.getOrders({
                status: statusFilter,
                timeframe: timeframeFilter,
                page: currentPage,
                limit: 10
            });
            console.log(`response.data for orders:-`, response.data);
            setOrders(response.data.orders || []);
            setTotalPages(response.data.page_meta.total_pages_count || 1);
            setLoading(false);
        }
        catch (err) {
            setError('Failed to load orders. Please try again later.');
            setLoading(false);
        }
    };
    // Fetch order details for the offcanvas
    const fetchOrderDetails = async (orderId) => {
        try {
            const orderDetails = await OrdersAxiosService.getOrderById(orderId);
            setSelectedOrder(orderDetails.data);
        }
        catch (err) {
            console.error('Failed to fetch order details:', err);
        }
    };
    // Handle changing status filter
    const handleStatusChange = (e) => {
        setStatusFilter(e.target.value);
        setCurrentPage(1); // Reset page when filter changes
    };
    // Handle changing timeframe filter
    const handleTimeframeChange = (e) => {
        setTimeframeFilter(e.target.value);
        setCurrentPage(1); // Reset page when filter changes
    };
    // Handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    // Handle clicking on an order to view details
    const handleOrderClick = (orderId) => {
        fetchOrderDetails(orderId);
    };
    // Load orders when component mounts or filters change
    useEffect(() => {
        fetchOrders();
    }, [statusFilter, timeframeFilter, currentPage]);
    // Prepare status options for the select dropdown
    const statusOptions = [
        { value: '', id: '', label: 'Select status', placeholder: true },
        ...OrdersAxiosService.getStatusOptions().map(status => ({
            id: status.id,
            value: status.value,
            label: `<div class="d-flex align-items-center text-nowrap"><span class="bg-${status.color} rounded-circle p-1 me-2"></span>${status.label}</div>`
        }))
    ];
    // Get timeframe options from service
    const timeframeOptions = OrdersAxiosService.getTimeframeOptions();
    return (_jsxs(_Fragment, { children: [_jsx(OrderItems, { selectedOrder: selectedOrder }), _jsx("main", { className: "content-wrapper", children: _jsx("div", { className: "container py-5 mt-n2 mt-sm-0", children: _jsxs("div", { className: "row pt-md-2 pt-lg-3 pb-sm-2 pb-md-3 pb-lg-4 pb-xl-5", children: [_jsx(Aside, {}), _jsx("div", { className: "col-lg-9", children: _jsxs("div", { className: "ps-lg-3 ps-xl-0", children: [_jsxs("div", { className: "row align-items-center pb-3 pb-md-4 mb-md-1 mb-lg-2", children: [_jsx("div", { className: "col-md-4 col-xl-6 mb-3 mb-md-0", children: _jsx("h1", { className: "h2 me-3 mb-0", children: "Orders" }) }), _jsx("div", { className: "col-md-8 col-xl-6", children: _jsxs("div", { className: "row row-cols-1 row-cols-sm-2 g-3 g-xxl-4", children: [_jsx("div", { className: "col", children: _jsx("select", { className: "form-select", "aria-label": "Status sorting", value: statusFilter, onChange: handleStatusChange, children: statusOptions.map((option, index) => (_jsx(_Fragment, { children: _jsx("option", { value: option.id, dangerouslySetInnerHTML: { __html: option.label } }, index) }))) }) }), _jsx("div", { className: "col", children: _jsx("select", { className: "form-select", "aria-label": "Timeframe sorting", value: timeframeFilter, onChange: handleTimeframeChange, children: timeframeOptions.map((option, index) => (_jsx("option", { value: option.value, children: option.label }, index))) }) })] }) })] }), loading ? (_jsx("div", { className: "text-center py-5", children: _jsx(LoadingSpinner, {}) })) : error ? (_jsx("div", { className: "alert alert-danger", role: "alert", children: error })) : (_jsxs(_Fragment, { children: [_jsx("div", { "data-filter-list": '{"listClass": "orders-list", "sortClass": "orders-sort", "valueNames": ["date", "total"]}', children: _jsxs("table", { className: "table align-middle fs-sm text-nowrap", children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { scope: "col", className: "py-3 ps-0", children: _jsxs("span", { className: "text-body fw-normal", children: ["Order ", _jsx("span", { className: "d-none d-md-inline", children: "#" })] }) }), _jsx("th", { scope: "col", className: "py-3 d-none d-md-table-cell", children: _jsx("button", { type: "button", className: "btn orders-sort fw-normal text-body p-0", "data-sort": "date", children: "Order date" }) }), _jsx("th", { scope: "col", className: "py-3 d-none d-md-table-cell", children: _jsx("span", { className: "text-body fw-normal", children: "Status" }) }), _jsx("th", { scope: "col", className: "py-3 d-none d-md-table-cell", children: _jsx("button", { type: "button", className: "btn orders-sort fw-normal text-body p-0", "data-sort": "total", children: "Total" }) }), _jsx("th", { scope: "col", className: "py-3", children: "\u00A0" })] }) }), _jsx("tbody", { className: "text-body-emphasis orders-list", children: orders.length > 0 ? (orders.map(order => (_jsx(OrderListItem, { order: order, onOrderClick: handleOrderClick }, order.id)))) : (_jsx("tr", { children: _jsx("td", { colSpan: "5", className: "text-center py-4", children: "No orders found matching your criteria." }) })) })] }) }), totalPages > 1 && (_jsx(Pagination, { currentPage: currentPage, totalPages: totalPages, onPageChange: handlePageChange }))] }))] }) })] }) }) })] }));
};
export default Orders;
