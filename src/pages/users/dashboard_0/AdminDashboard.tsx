// pages/users/dashboard/components/AdminDashboard.jsx
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { formatCurrency } from '../../../utils/currencyUtils';

const AdminDashboard = ({ data }) => {
  const { statistics, revenue_history, recent_orders } = data;

  const getStatusBadgeClass = (status) => {
    const statusClasses = {
      'pending': 'text-info bg-info-subtle',
      'confirmed': 'text-primary bg-primary-subtle',
      'processing': 'text-warning bg-warning-subtle',
      'shipped': 'text-info bg-info-subtle',
      'delivered': 'text-success bg-success-subtle',
      'cancelled': 'text-danger bg-danger-subtle'
    };
    return statusClasses[status] || 'text-secondary bg-secondary-subtle';
  };

  return (
    <>
      {/* Main Stats Grid */}
      <div className="row g-3 g-xl-4 pb-3 mb-2 mb-sm-3">
        <div className="col-md-3 col-sm-6">
          <div className="h-100 bg-success-subtle rounded-4 text-center p-4">
            <h2 className="fs-sm pb-2 mb-1">Total Revenue</h2>
            <div className="h2 pb-1 mb-2">{formatCurrency(statistics.total_revenue)}</div>
            <p className="fs-sm text-body-secondary mb-0">Platform earnings</p>
          </div>
        </div>
        
        <div className="col-md-3 col-sm-6">
          <div className="h-100 bg-primary-subtle rounded-4 text-center p-4">
            <h2 className="fs-sm pb-2 mb-1">Total Orders</h2>
            <div className="h2 pb-1 mb-2">{statistics.total_orders}</div>
            <p className="fs-sm text-body-secondary mb-0">All transactions</p>
          </div>
        </div>
        
        <div className="col-md-3 col-sm-6">
          <div className="h-100 bg-info-subtle rounded-4 text-center p-4">
            <h2 className="fs-sm pb-2 mb-1">Total Users</h2>
            <div className="h2 pb-1 mb-2">{statistics.total_users}</div>
            <p className="fs-sm text-body-secondary mb-0">Registered users</p>
          </div>
        </div>
        
        <div className="col-md-3 col-sm-6">
          <div className="h-100 bg-warning-subtle rounded-4 text-center p-4">
            <h2 className="fs-sm pb-2 mb-1">Active Stores</h2>
            <div className="h2 pb-1 mb-2">{statistics.active_stores}</div>
            <p className="fs-sm text-body-secondary mb-0">Vendor stores</p>
          </div>
        </div>
      </div>

      {/* User Breakdown */}
      <div className="row g-3 g-xl-4 pb-3 mb-2 mb-sm-3">
        <div className="col-md-4">
          <div className="border rounded-4 text-center p-4">
            <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
              <i className="ci-user fs-4 text-primary"></i>
              <h3 className="h6 mb-0">Buyers</h3>
            </div>
            <div className="h3 text-primary mb-1">{statistics.total_buyers}</div>
            <p className="fs-sm text-body-secondary mb-0">Active customers</p>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="border rounded-4 text-center p-4">
            <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
              <i className="ci-store fs-4 text-success"></i>
              <h3 className="h6 mb-0">Vendors</h3>
            </div>
            <div className="h3 text-success mb-1">{statistics.total_vendors}</div>
            <p className="fs-sm text-body-secondary mb-0">Registered sellers</p>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="border rounded-4 text-center p-4">
            <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
              <i className="ci-delivery fs-4 text-warning"></i>
              <h3 className="h6 mb-0">Riders</h3>
            </div>
            <div className="h3 text-warning mb-1">{statistics.total_riders}</div>
            <p className="fs-sm text-body-secondary mb-0">Delivery partners</p>
          </div>
        </div>
      </div>

      {/* Order Status Breakdown */}
      <div className="row g-3 g-xl-4 pb-3 mb-2 mb-sm-3">
        <div className="col-md-4">
          <div className="border rounded-4 p-4">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <span className="text-body-secondary">Pending Orders</span>
              <span className="badge bg-warning-subtle text-warning">{statistics.pending_orders}</span>
            </div>
            <div className="progress" style={{ height: '6px' }}>
              <div 
                className="progress-bar bg-warning" 
                style={{ width: `${statistics.total_orders > 0 ? (statistics.pending_orders / statistics.total_orders * 100) : 0}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="border rounded-4 p-4">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <span className="text-body-secondary">Completed Orders</span>
              <span className="badge bg-success-subtle text-success">{statistics.completed_orders}</span>
            </div>
            <div className="progress" style={{ height: '6px' }}>
              <div 
                className="progress-bar bg-success" 
                style={{ width: `${statistics.total_orders > 0 ? (statistics.completed_orders / statistics.total_orders * 100) : 0}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="border rounded-4 p-4">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <span className="text-body-secondary">Total Products</span>
              <span className="badge bg-info-subtle text-info">{statistics.total_products}</span>
            </div>
            <div className="progress" style={{ height: '6px' }}>
              <div className="progress-bar bg-info" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Revenue History Chart */}
      <div className="pb-3 mb-2 mb-sm-3">
        <div className="border rounded-4 py-4 px-3 px-sm-4">
          <h2 className="h5 text-center text-sm-start mb-4">Revenue History</h2>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={revenue_history}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(133,140,151,.18)" />
              <XAxis 
                dataKey="date" 
                stroke="rgba(133,140,151,.6)"
                style={{ fontSize: '12px' }}
              />
              <YAxis 
                stroke="rgba(133,140,151,.6)"
                style={{ fontSize: '12px' }}
                tickFormatter={(value) => `₦${value}`}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #ddd',
                  borderRadius: '8px'
                }}
                formatter={(value) => [formatCurrency(value), 'Revenue']}
              />
              <Line 
                type="monotone" 
                dataKey="revenue" 
                stroke="#33b36b" 
                strokeWidth={3}
                fill="rgba(51,179,107,.1)"
                dot={{ fill: '#33b36b', r: 5 }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="border rounded-4 py-4 px-3 px-sm-4">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h2 className="h5 mb-0">Recent Platform Activity</h2>
          <Link to="/admin/orders" className="btn btn-sm btn-outline-primary rounded-pill">
            View All Orders
          </Link>
        </div>
        
        {recent_orders && recent_orders.length > 0 ? (
          <div className="table-responsive">
            <table className="table align-middle fs-sm mb-0">
              <thead>
                <tr>
                  <th className="ps-0">Order ID</th>
                  <th className="d-none d-md-table-cell">Customer</th>
                  <th className="d-none d-sm-table-cell">Date</th>
                  <th className="d-none d-lg-table-cell">Items</th>
                  <th className="text-end d-none d-sm-table-cell">Amount</th>
                  <th className="text-end pe-0">Status</th>
                </tr>
              </thead>
              <tbody>
                {recent_orders.map((order) => (
                  <tr key={order.id}>
                    <td className="ps-0 py-3">
                      <Link 
                        to={`/admin/orders/${order.id}`}
                        className="fw-medium text-decoration-none"
                      >
                        #{order.tracking_number?.slice(0, 8)}
                      </Link>
                    </td>
                    <td className="d-none d-md-table-cell py-3">
                      {order.users?.first_name || 'Guest'} {order.users?.last_name || ''}
                    </td>
                    <td className="d-none d-sm-table-cell py-3">
                      {new Date(order.created_at).toLocaleDateString()}
                    </td>
                    <td className="d-none d-lg-table-cell py-3">
                      {order.order_items?.length || 0} items
                    </td>
                    <td className="text-end d-none d-sm-table-cell py-3 fw-medium">
                      {formatCurrency(order.total_amount)}
                    </td>
                    <td className="text-end py-3 pe-0">
                      <span className={`badge fs-xs ${getStatusBadgeClass(order.status)} rounded-pill`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-5">
            <i className="ci-package fs-1 text-muted mb-3 d-block"></i>
            <p className="text-muted">No recent orders</p>
          </div>
        )}
        
        {/* Quick Actions */}
        <div className="border-top mt-4 pt-4">
          <h3 className="h6 mb-3">Quick Actions</h3>
          <div className="d-flex flex-wrap gap-2">
            <Link to="/admin/users" className="btn btn-sm btn-outline-primary rounded-pill">
              <i className="ci-user me-1"></i>
              Manage Users
            </Link>
            <Link to="/admin/products" className="btn btn-sm btn-outline-success rounded-pill">
              <i className="ci-package me-1"></i>
              Manage Products
            </Link>
            <Link to="/admin/stores" className="btn btn-sm btn-outline-info rounded-pill">
              <i className="ci-store me-1"></i>
              Manage Stores
            </Link>
            <Link to="/admin/reports" className="btn btn-sm btn-outline-warning rounded-pill">
              <i className="ci-pie-chart me-1"></i>
              View Reports
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;