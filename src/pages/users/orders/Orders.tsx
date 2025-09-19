
// // VERSION 02
// import { useState, useEffect } from 'react';
// import Aside from "../shared/Aside";
// import OrderItems from "./OrderItems";
// // import { Pagination } from 'swiper/modules';
// import { OrdersAxiosService } from '../../../services/net/OrdersAxiosService';
// import OrderListItem from './OrderListItem';
// import Pagination from '../../../components/shared/Pagination';
// import LoadingSpinner from '../../../components/shared/LoadingSpinner';
// // import  OrdersAxiosService.from '../../services/OrderService';

// const Orders = () => {
//     const [orders, setOrders] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [statusFilter, setStatusFilter] = useState('');
//     const [timeframeFilter, setTimeframeFilter] = useState('all-time');
//     const [currentPage, setCurrentPage] = useState(1);
//     const [totalPages, setTotalPages] = useState(1);
//     const [selectedOrder, setSelectedOrder] = useState(null);

//     // Fetch orders based on current filters
//     const fetchOrders = async () => {
//         try {
//             setLoading(true);
//             const response = await  OrdersAxiosService.getMyOrders({
//                 status: statusFilter,
//                 timeframe: timeframeFilter,
//                 page: currentPage,
//                 limit: 10
//             });

//            console.log(`response.data for orders:-`, response);
//             setOrders(response?.orders || []);
//             setTotalPages(response.page_meta?.total_pages_count || 1);
//             setLoading(false);
//         } catch (err) {
//             setError('Failed to load orders. Please try again later.');
//             setLoading(false);
//         }
//     };

//     // Fetch order details for the offcanvas
//     const fetchOrderDetails = async (orderId) => {
//         try {
//             const orderDetails = await  OrdersAxiosService.getOrderById(orderId);
//             setSelectedOrder(orderDetails);
//         } catch (err) {
//             console.error('Failed to fetch order details:', err);
//         }
//     };

//     // Handle changing status filter
//     const handleStatusChange = (e) => {
//         setStatusFilter(e.target.value);
//         setCurrentPage(1); // Reset page when filter changes
//     };

//     // Handle changing timeframe filter
//     const handleTimeframeChange = (e) => {
//         setTimeframeFilter(e.target.value);
//         setCurrentPage(1); // Reset page when filter changes
//     };

//     // Handle page change
//     const handlePageChange = (page) => {
//         setCurrentPage(page);
//     };

//     // Handle clicking on an order to view details
//     const handleOrderClick = (orderId) => {
//         fetchOrderDetails(orderId);
//     };

//     // Load orders when component mounts or filters change
//     useEffect(() => {
//         fetchOrders();
//     }, [statusFilter, timeframeFilter, currentPage]);

//     // Prepare status options for the select dropdown
//     const statusOptions = [
//         { value: '', id: '', label: 'Select status', placeholder: true },
//         ... OrdersAxiosService.getStatusOptions().map(status => ({
//             id: status.id,
//             value: status.value,
//             label: `<div class="d-flex align-items-center text-nowrap"><span class="bg-${status.color} rounded-circle p-1 me-2"></span>${status.label}</div>`
//         }))
//     ];

//     // Get timeframe options from service
//     const timeframeOptions =  OrdersAxiosService.getTimeframeOptions();

//     return (
//         <>
//             <OrderItems selectedOrder={selectedOrder} />
//             {/* Page content */}
//             <main className="content-wrapper">
//                 <div className="container py-5 mt-n2 mt-sm-0">
//                     <div className="row pt-md-2 pt-lg-3 pb-sm-2 pb-md-3 pb-lg-4 pb-xl-5">

//                         {/* Sidebar navigation */}
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
//                                                 <select 
//                                                     className="form-select" 
//                                                     aria-label="Status sorting"
//                                                     value={statusFilter}
//                                                     onChange={handleStatusChange}
//                                                 >
//                                                     {statusOptions.map((option, index) => (
//                                                         <>
//                                                         {/* {console.log(`index: ${index}, value: ${option.value}, option: ${option.label}`)} */}
//                                                         <option key={index} value={option.id} dangerouslySetInnerHTML={{ __html: option.label }} />
//                                                         {/* <option key={index} value={option.value} dangerouslySetInnerHTML={{ __html: option.label }} /> */}
//                                                         </>
//                                                     ))}
//                                                 </select>
//                                             </div>
//                                             <div className="col">
//                                                 <select 
//                                                     className="form-select" 
//                                                     aria-label="Timeframe sorting"
//                                                     value={timeframeFilter}
//                                                     onChange={handleTimeframeChange}
//                                                 >
//                                                     {timeframeOptions.map((option, index) => (
//                                                         <option key={index} value={option.value}>{option.label}</option>
//                                                     ))}
//                                                 </select>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
                                
//                                 {/* Show loading state, error, or orders table */}
//                                 {loading ? (
//                                     <div className="text-center py-5">
//                                         <LoadingSpinner size="md" />
//                                     </div>
//                                 ) : error ? (
//                                     <div className="alert alert-danger" role="alert">
//                                         {error}
//                                     </div>
//                                 ) : (
//                                     <>
//                                         {/* Sortable orders table */}
//                                         <div data-filter-list='{"listClass": "orders-list", "sortClass": "orders-sort", "valueNames": ["date", "total"]}'>
//                                             <table className="table align-middle fs-sm text-nowrap">
//                                                 <thead>
//                                                     <tr>
//                                                         <th scope="col" className="py-3 ps-0">
//                                                             <span className="text-body fw-normal">Order <span className="d-none d-md-inline">#</span></span>
//                                                         </th>
//                                                         <th scope="col" className="py-3 d-none d-md-table-cell">
//                                                             <button type="button" className="btn orders-sort fw-normal text-body p-0" data-sort="date">Order date</button>
//                                                         </th>
//                                                         <th scope="col" className="py-3 d-none d-md-table-cell">
//                                                             <span className="text-body fw-normal">Status</span>
//                                                         </th>
//                                                         <th scope="col" className="py-3 d-none d-md-table-cell">
//                                                             <button type="button" className="btn orders-sort fw-normal text-body p-0" data-sort="total">Total</button>
//                                                         </th>
//                                                         <th scope="col" className="py-3">&nbsp;</th>
//                                                     </tr>
//                                                 </thead>
//                                                 <tbody className="text-body-emphasis orders-list">
//                                                     {orders.length > 0 ? (
//                                                         orders.map(order => (
//                                                             <OrderListItem 
//                                                                 key={order.id} 
//                                                                 order={order} 
//                                                                 onOrderClick={handleOrderClick} 
//                                                             />
//                                                         ))
//                                                     ) : (
//                                                         <tr>
//                                                             <td colSpan="5" className="text-center py-4">
//                                                                 No orders found matching your criteria.
//                                                             </td>
//                                                         </tr>
//                                                     )}
//                                                 </tbody>
//                                             </table>
//                                         </div>
                                        
//                                         {/* Pagination */}
//                                         {totalPages > 1 && (
//                                             <Pagination 
//                                                 currentPage={currentPage} 
//                                                 totalPages={totalPages} 
//                                                 onPageChange={handlePageChange} 
//                                             />
//                                         )}
//                                     </>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </main>
//         </>
//     );
// };

// export default Orders;

// v2
import { useState, useEffect } from 'react';
import Aside from "../shared/Aside";
import OrderItems from "./OrderItems";
import { OrdersAxiosService } from '../../../services/net/OrdersAxiosService';
import OrderListItem from './OrderListItem';
import Pagination from '../../../components/shared/Pagination';
import LoadingSpinner from '../../../components/shared/LoadingSpinner';

const Orders = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState('');
  const [timeframeFilter, setTimeframeFilter] = useState('all-time');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedOrder, setSelectedOrder] = useState<any | null>(null);

  // Fetch orders based on current filters
  const fetchOrders = async () => {
    try {
      setLoading(true);
      setError(null); // reset previous errors
      const response = await OrdersAxiosService.getMyOrders({
        status: statusFilter,
        timeframe: timeframeFilter,
        page: currentPage,
        limit: 10
      });

      setOrders(response?.orders || []);
      setTotalPages(response.page_meta?.total_pages_count || 1);
    } catch (err) {
      console.error("Orders fetch error:", err);
      setError('Failed to load orders. Please try again later.');
      setOrders([]); // clear old data on error
    } finally {
      setLoading(false);
    }
  };

  // Fetch order details for the offcanvas
  const fetchOrderDetails = async (orderId: number) => {
    try {
      const orderDetails = await OrdersAxiosService.getOrderById(orderId);
      setSelectedOrder(orderDetails);
    } catch (err) {
      console.error('Failed to fetch order details:', err);
    }
  };

  // Event handlers
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatusFilter(e.target.value);
    setCurrentPage(1); 
  };

  const handleTimeframeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTimeframeFilter(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleOrderClick = (orderId: number) => {
    fetchOrderDetails(orderId);
  };

  // Load orders on mount & filters change
  useEffect(() => {
    fetchOrders();
  }, [statusFilter, timeframeFilter, currentPage]);

  // Status dropdown options
  const statusOptions = [
    { value: '', label: 'Select status', color: 'secondary' },
    ...OrdersAxiosService.getStatusOptions()
  ];

  const timeframeOptions = OrdersAxiosService.getTimeframeOptions();

  return (
    <>
      <OrderItems selectedOrder={selectedOrder} />

      <main className="content-wrapper">
        <div className="container py-5 mt-n2 mt-sm-0">
          <div className="row pt-md-2 pt-lg-3 pb-sm-2 pb-md-3 pb-lg-4 pb-xl-5">

            {/* Sidebar navigation */}
            <Aside />

            {/* Orders content */}
            <div className="col-lg-9">
              <div className="ps-lg-3 ps-xl-0">

                {/* Title + Filters */}
                <div className="row align-items-center pb-3 pb-md-4 mb-md-1 mb-lg-2">
                  <div className="col-md-4 col-xl-6 mb-3 mb-md-0">
                    <h1 className="h2 me-3 mb-0">Orders</h1>
                  </div>
                  <div className="col-md-8 col-xl-6">
                    <div className="row row-cols-1 row-cols-sm-2 g-3 g-xxl-4">
                      <div className="col">
                        <select
                          className="form-select"
                          aria-label="Status filter"
                          value={statusFilter}
                          onChange={handleStatusChange}
                        >
                          {statusOptions.map((option, index) => (
                            <option 
                              key={`status-${index}`} 
                              value={option.value}
                            >
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col">
                        <select
                          className="form-select"
                          aria-label="Timeframe filter"
                          value={timeframeFilter}
                          onChange={handleTimeframeChange}
                        >
                          {timeframeOptions.map((option, index) => (
                            <option 
                              key={`timeframe-${index}`} 
                              value={option.value}
                            >
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                {loading ? (
                  <div className="text-center py-5">
                    <LoadingSpinner size="md" />
                  </div>
                ) : error ? (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                ) : orders.length === 0 ? (
                  <div className="alert alert-info text-center py-4">
                    No orders found matching your criteria.
                  </div>
                ) : (
                  <>
                    {/* Orders table */}
                    <div>
                      <table className="table align-middle fs-sm text-nowrap">
                        <thead>
                          <tr>
                            <th className="py-3 ps-0">Order #</th>
                            <th className="py-3 d-none d-md-table-cell">Order date</th>
                            <th className="py-3 d-none d-md-table-cell">Status</th>
                            <th className="py-3 d-none d-md-table-cell">Total</th>
                            <th className="py-3">&nbsp;</th>
                          </tr>
                        </thead>
                        <tbody className="text-body-emphasis orders-list">
                          {orders.map(order => (
                            <OrderListItem
                              key={order.id}
                              order={order}
                              onOrderClick={handleOrderClick}
                            />
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                      <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                      />
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Orders;
