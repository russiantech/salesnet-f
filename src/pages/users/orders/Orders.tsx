
// v3
import React, { useState, useEffect } from 'react';
import Aside from "../shared/Aside";
import OrderItems from "./OrderItems";
import { OrdersAxiosService } from '../../../services/net/OrdersAxiosService';
import { SalesAxiosService } from '../../../services/net/SalesAxiosService'; // New service for sales
import OrderListItem from './OrderListItem';
import Pagination from '../../../components/shared/Pagination';
import LoadingSpinner from '../../../components/shared/LoadingSpinner';

// 
import SalesListItem from '../sales/SalesListItem';
import SalesItems from '../sales/SalesItems';
import { Link } from 'react-router-dom';
import { OrderEventService } from '../../../services/local/OrderEventService';

const Orders = () => {
  // Common states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('orders'); // 'orders' or 'sales'
  
  // Orders states
  const [orders, setOrders] = useState<any[]>([]);
  const [orderStatusFilter, setOrderStatusFilter] = useState('');
  const [orderTimeframeFilter, setOrderTimeframeFilter] = useState('all-time');
  const [orderCurrentPage, setOrderCurrentPage] = useState(1);
  const [orderTotalPages, setOrderTotalPages] = useState(1);
  const [selectedOrder, setSelectedOrder] = useState<any | null>(null);
  
  // Sales states  
  const [sales, setSales] = useState<any[]>([]);
  const [salesStatusFilter, setSalesStatusFilter] = useState('');
  const [salesTimeframeFilter, setSalesTimeframeFilter] = useState('all-time');
  const [salesCurrentPage, setSalesCurrentPage] = useState(1);
  const [salesTotalPages, setSalesTotalPages] = useState(1);
  const [selectedSale, setSelectedSale] = useState<any | null>(null);

  // Fetch orders (customer's orders)
  const fetchOrders = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await OrdersAxiosService.getMyOrders({
        status: orderStatusFilter,
        timeframe: orderTimeframeFilter,
        page: orderCurrentPage,
        limit: 10
      });

      setOrders(response?.orders || []);
      // Handle different pagination field names for orders
      setOrderTotalPages(
        response.page_meta?.total_pages_count || 
        response.page_meta?.total_pages || 1
      );

    } catch (err) {
      // Error fetching orders
      setError('Failed to load orders. Please try again later.');
      setOrders([]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch sales (incoming orders to user's store)
  const fetchSales = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await SalesAxiosService.getMySales({
        status: salesStatusFilter,
        timeframe: salesTimeframeFilter,
        page: salesCurrentPage,
        limit: 10
      });

      setSales(response?.sales || []);

      // Count unattended sales
      const unattendedCount = response?.sales?.filter((s: any) => s.status === 'pending').length || 0;
      // 🔔 Notify the global event service
      OrderEventService.publish({ unattendedCount });

      // Handle different pagination field names for sales
      setSalesTotalPages(
        response.page_meta?.total_pages || 
        response.page_meta?.total_pages_count || 1
      );
    } catch (err) {
      // Error fetching sales
      setError('Failed to load sales. Please try again later.');
      setSales([]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch order details
  const fetchOrderDetails = async (orderId: number) => {
    try {
      const orderDetails = await OrdersAxiosService.getOrderById(orderId);
      setSelectedOrder(orderDetails);
    } catch (err) {
      // Failed to fetch order details
    }
  };

  // Fetch sale details
  const fetchSaleDetails = async (saleId: number) => {
    try {
      const saleDetails = await SalesAxiosService.getSaleById(saleId);
      setSelectedSale(saleDetails);
    } catch (err) {
      // Failed to fetch sale details
    }
  };

  // Update sale status
  const updateSaleStatus = async (saleId: number, newStatus: string) => {
    try {
      await SalesAxiosService.updateSaleStatus(saleId, newStatus);
      // Refresh sales data
      fetchSales();
      // Update selected sale if it's the one being updated
      if (selectedSale && selectedSale.id === saleId) {
        fetchSaleDetails(saleId);
      }
    } catch (err) {
      console.error('Failed to update sale status:', err);
      setError('Failed to update sale status. Please try again.');
    }
  };

  // Delete sale
  const deleteSale = async (saleId: number) => {
    if (window.confirm('Are you sure you want to delete this sale?')) {
      try {
        await SalesAxiosService.deleteSale(saleId);
        fetchSales();
        // Close offcanvas if this sale was selected
        if (selectedSale && selectedSale.id === saleId) {
          setSelectedSale(null);
        }
      } catch (err) {
        console.error('Failed to delete sale:', err);
        setError('Failed to delete sale. Please try again.');
      }
    }
  };

  // Event handlers for orders
  const handleOrderStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOrderStatusFilter(e.target.value);
    setOrderCurrentPage(1);
  };

  const handleOrderTimeframeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOrderTimeframeFilter(e.target.value);
    setOrderCurrentPage(1);
  };

  const handleOrderPageChange = (page: number) => {
    setOrderCurrentPage(page);
  };

  const handleOrderClick = (orderId: number) => {
    fetchOrderDetails(orderId);
  };

  // Event handlers for sales
  const handleSalesStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSalesStatusFilter(e.target.value);
    setSalesCurrentPage(1);
  };

  const handleSalesTimeframeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSalesTimeframeFilter(e.target.value);
    setSalesCurrentPage(1);
  };

  const handleSalesPageChange = (page: number) => {
    setSalesCurrentPage(page);
  };

  const handleSaleClick = (saleId: number) => {
    fetchSaleDetails(saleId);
  };

  // Tab change handler
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setError(null); // Clear any existing errors
  };

  // Load data based on active tab
  useEffect(() => {
    if (activeTab === 'orders') {
      fetchOrders();
    } else {
      fetchSales();
    }
  }, [
    activeTab,
    orderStatusFilter, orderTimeframeFilter, orderCurrentPage,
    salesStatusFilter, salesTimeframeFilter, salesCurrentPage
  ]);

  // Options for dropdowns
  const statusOptions = [
    { value: '', label: 'Select status', color: 'secondary' },
    ...OrdersAxiosService.getStatusOptions()
  ];

  const timeframeOptions = OrdersAxiosService.getTimeframeOptions();

  // Get current filters and pagination based on active tab
  const currentFilters = activeTab === 'orders' 
    ? { status: orderStatusFilter, timeframe: orderTimeframeFilter }
    : { status: salesStatusFilter, timeframe: salesTimeframeFilter };
    
  const currentPage = activeTab === 'orders' ? orderCurrentPage : salesCurrentPage;
  const totalPages = activeTab === 'orders' ? orderTotalPages : salesTotalPages;
  const currentData = activeTab === 'orders' ? orders : sales;

  return (
    <>
      {/* Offcanvas components */}
      <OrderItems selectedOrder={selectedOrder} />
      <SalesItems 
        selectedSale={selectedSale} 
        onStatusUpdate={updateSaleStatus}
        onDelete={deleteSale}
      />

      <main className="content-wrapper">
        <div className="container py-5 mt-n2 mt-sm-0">
          <div className="row pt-md-2 pt-lg-3 pb-sm-2 pb-md-3 pb-lg-4 pb-xl-5">

            {/* Sidebar navigation */}
            <Aside />

            {/* Orders/Sales content */}
            <div className="col-lg-9">
              <div className="ps-lg-3 ps-xl-0">

                {/* Title + Tabs */}
                <div className="row align-items-center pb-3 pb-md-4 mb-md-1 mb-lg-2">
                  <div className="col-12 mb-3">
                    <h1 className="h2 me-3 mb-3">Order Management</h1>
                    
                    {/* Navigation Tabs */}
                    <ul className="nav nav-pills nav-fill gap-2" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className={`nav-link ${activeTab === 'orders' ? 'active' : ''}`}
                          onClick={() => handleTabChange('orders')}
                          type="button"
                          role="tab"
                        >
                          <i className="ci-shopping-bag me-2"></i>
                          My Orders
                          {orders.length > 0 && (
                            <span className="badge bg-primary rounded-pill ms-2">
                              {orders.length}
                            </span>
                          )}
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className={`nav-link ${activeTab === 'sales' ? 'active' : ''}`}
                          onClick={() => handleTabChange('sales')}
                          type="button"
                          role="tab"
                        >
                          <i className="ci-store me-2"></i>
                          Sales & Orders
                          {sales.length > 0 && (
                            <span className="badge bg-success rounded-pill ms-2">
                              {sales.length}
                            </span>
                          )}
                        </button>
                      </li>
                    </ul>
                  </div>

                  {/* Filters */}
                  <div className="col-12">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3">
                      <div className="col">
                        <select
                          className="form-select rounded-pill"
                          aria-label="Status filter"
                          value={currentFilters.status}
                          onChange={activeTab === 'orders' ? handleOrderStatusChange : handleSalesStatusChange}
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
                          className="form-select rounded-pill"
                          aria-label="Timeframe filter"
                          value={currentFilters.timeframe}
                          onChange={activeTab === 'orders' ? handleOrderTimeframeChange : handleSalesTimeframeChange}
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
                      <div className="col">
                        <button
                          className="btn btn-outline-primary w-100 rounded-pill"
                          onClick={() => activeTab === 'orders' ? fetchOrders() : fetchSales()}
                        >
                          <i className="ci-refresh-cw me-2"></i>
                          Refresh
                        </button>
                      </div>
                      {activeTab === 'sales' && (
                        <div className="col">
                          <div className="dropdown w-100">
                            <button 
                              className="btn btn-outline-secondary dropdown-toggle w-100 rounded-pill" 
                              type="button" 
                              data-bs-toggle="dropdown"
                            >
                              <i className="ci-settings me-2"></i>
                              Actions
                            </button>
                            <ul className="dropdown-menu">
                              <li>
                                <a className="dropdown-item" href="#" onClick={() => fetchSales()}>
                                  <i className="ci-download me-2"></i>
                                  Export Sales
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="ci-bell me-2"></i>
                                  Notification Settings
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                {loading ? (
                  <div className="text-center py-5">
                    <LoadingSpinner size="md" />
                    <p className="mt-3 text-muted">
                      Loading {activeTab === 'orders' ? 'orders' : 'sales'}...
                    </p>
                  </div>
                ) : error ? (
                  <div className="alert alert-danger d-flex align-items-center" role="alert">
                    <i className="ci-exclamation-triangle me-2"></i>
                    {error}
                    <button 
                      className="btn btn-sm btn-outline-danger ms-auto"
                      onClick={() => activeTab === 'orders' ? fetchOrders() : fetchSales()}
                    >
                      Try Again
                    </button>
                  </div>
                ) : currentData.length === 0 ? (
                  <div className="text-center py-5">
                    <div className="mb-4">
                      <i className={`ci-${activeTab === 'orders' ? 'shopping-bag' : 'store'} fs-1 text-muted`}></i>
                    </div>
                    <h3 className="h4 mb-2">
                      No {activeTab === 'orders' ? 'orders' : 'sales'} found
                    </h3>
                    <p className="text-muted mb-4">
                      {activeTab === 'orders' 
                        ? 'You haven\'t placed any orders yet matching your criteria.'
                        : 'No sales have been made to your sales page yet matching your criteria.'
                      }
                    </p>
                    {/* {activeTab === 'orders' ? (
                      <a href="/products" className="btn btn-primary">
                        <i className="ci-shopping-cart me-2"></i>
                        Start Shopping
                      </a>
                    ) : (
                      <>
                      <button className="btn btn-success">
                        <i className="ci-plus me-2"></i>
                        Add Products
                      </button>

                      <button data-bs-toggle="modal" data-bs-target="#PublishPage" aria-current="page" className="btn btn-icon border position-relative rounded-circle ms-2 active" data-discover="true" 
                      style="cursor: pointer;">
                        <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-slide-end fs-lg">
                          <i className="ci-click animate-target text-white"></i></span></button>

                      </>
                    )} */}
                    {activeTab === 'orders' ? (
                <a href="/products" className="btn btn-primary">
                  <i className="ci-shopping-cart me-2"></i>
                  Start Shopping
                </a>
              ) : (
                <>
                  <Link to="/products" className="btn btn-secondary rounded-pill">
                    <i className="ci-eye me-2"></i>
                    Explore Intereststs
                  </Link>

                  <Link
                    to="#"
                    data-bs-toggle="modal"
                    data-bs-target="#PublishPage"
                    className="btn btn-primary ms-2 rounded-pill"
                  >
                    <i className="ci-click me-2"></i>
                    Add Product
                  </Link>
                </>
              )}

                  </div>
                ) : (
                  <>
                    {/* Data table */}
                    <div className="table-responsive">
                {/* <div className="table-responsive overflow-x-auto" data-simplebar data-simplebar-auto-hide="false"> */}
                      <table className="table align-middle fs-sm text-nowrap">
                        <thead>
                          <tr>
                            <th className="py-3 ps-0">
                              {activeTab === 'orders' ? 'Order' : 'Sale'} #
                            </th>
                            <th className="py-3 d-none d-md-table-cell">Date</th>
                            <th className="py-3 d-none d-md-table-cell">Status</th>
                            {activeTab === 'sales' && (
                              <th className="py-3 d-none d-lg-table-cell">Customer</th>
                            )}
                            <th className="py-3 d-none d-md-table-cell">Total</th>
                            <th className="py-3">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="text-body-emphasis">
                          {currentData.map(item => 
                            activeTab === 'orders' ? (
                              <OrderListItem
                                key={item.id}
                                order={item}
                                onOrderClick={handleOrderClick}
                              />
                            ) : (
                              <SalesListItem
                                key={item.id}
                                sale={item}
                                onSaleClick={handleSaleClick}
                                onStatusUpdate={updateSaleStatus}
                                onDelete={deleteSale}
                              />
                            )
                          )}
                        </tbody>
                      </table>
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                      <div className="d-flex justify-content-center mt-4">
                        <Pagination
                          currentPage={currentPage}
                          totalPages={totalPages}
                          onPageChange={activeTab === 'orders' ? handleOrderPageChange : handleSalesPageChange}
                        />
                      </div>
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