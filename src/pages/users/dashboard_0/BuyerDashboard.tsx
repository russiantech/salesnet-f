
// pages/users/dashboard/BuyerDashboard.jsx
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { formatCurrency } from '../../../utils/currencyUtils';

const BuyerDashboard = ({ data }) => {
  const { statistics, recent_orders, order_history_chart, favorite_products } = data;

  const getStatusBadgeClass = (status) => {
    const statusClasses = {
      'pending': 'badge-info',
      'confirmed': 'badge-primary',
      'processing': 'badge-warning',
      'shipped': 'badge-info',
      'delivered': 'badge-success',
      'cancelled': 'badge-danger'
    };
    return statusClasses[status] || 'badge-secondary';
  };

  return (
    <>
      {/* Stats Cards */}
      <div className="row g-3 g-xl-4 pb-3 mb-2 mb-sm-3">
        <div className="col-md-3 col-sm-6">
          <div className="h-100 bg-primary-subtle rounded-4 text-center p-4">
            <h2 className="fs-sm pb-2 mb-1">Total Orders</h2>
            <div className="h2 pb-1 mb-2">{statistics.total_orders}</div>
            <p className="fs-sm text-body-secondary mb-0">All time</p>
          </div>
        </div>
        
        <div className="col-md-3 col-sm-6">
          <div className="h-100 bg-warning-subtle rounded-4 text-center p-4">
            <h2 className="fs-sm pb-2 mb-1">Pending Orders</h2>
            <div className="h2 pb-1 mb-2">{statistics.pending_orders}</div>
            <p className="fs-sm text-body-secondary mb-0">In progress</p>
          </div>
        </div>
        
        <div className="col-md-3 col-sm-6">
          <div className="h-100 bg-success-subtle rounded-4 text-center p-4">
            <h2 className="fs-sm pb-2 mb-1">Completed</h2>
            <div className="h2 pb-1 mb-2">{statistics.completed_orders}</div>
            <p className="fs-sm text-body-secondary mb-0">Delivered</p>
          </div>
        </div>
        
        <div className="col-md-3 col-sm-6">
          <div className="h-100 bg-info-subtle rounded-4 text-center p-4">
            <h2 className="fs-sm pb-2 mb-1">Total Spent</h2>
            <div className="h2 pb-1 mb-2">{formatCurrency(statistics.total_spent, 'NGN', {'short':false})}</div>
            <p className="fs-sm text-body-secondary mb-0">Lifetime</p>
          </div>
        </div>
      </div>

      {/* Orders History Chart */}
      <div className="pb-3 mb-2 mb-sm-3">
        <div className="border rounded-4 py-4 px-3 px-sm-4">
          <h2 className="h5 text-center text-sm-start mb-4">Orders History</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={order_history_chart}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(133,140,151,.18)" />
              <XAxis 
                dataKey="date" 
                stroke="rgba(133,140,151,.6)"
                style={{ fontSize: '12px' }}
              />
              <YAxis 
                stroke="rgba(133,140,151,.6)"
                style={{ fontSize: '12px' }}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #ddd',
                  borderRadius: '8px'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="orders" 
                stroke="#0d6efd" 
                strokeWidth={2}
                dot={{ fill: '#0d6efd', r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="border rounded-4 py-4 px-3 px-sm-4 mb-3">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h2 className="h5 mb-0">Recent Orders</h2>
          <Link to="/account/orders" className="btn btn-sm btn-outline-primary rounded-pill">
            View All
          </Link>
        </div>
        
        {recent_orders && recent_orders.length > 0 ? (
          <div className="table-responsive">
            <table className="table align-middle fs-sm mb-0">
              <thead>
                <tr>
                  <th className="ps-0">Order ID</th>
                  <th>Date</th>
                  <th>Items</th>
                  <th>Total</th>
                  <th className="text-end pe-0">Status</th>
                </tr>
              </thead>
              <tbody>
                {recent_orders.map((order) => (
                  <tr key={order.id}>
                    <td className="ps-0">
                      <Link 
                        to={`/account/orders/${order.id}`}
                        className="fw-medium text-decoration-none"
                      >
                        #{order.tracking_number?.slice(0, 8)}
                      </Link>
                    </td>
                    <td>{new Date(order.created_at).toLocaleDateString()}</td>
                    <td>{order.order_items?.length || 0} items</td>
                    <td className="fw-medium">{formatCurrency(order.total_amount)}</td>
                    <td className="text-end pe-0">
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
            <i className="ci-shopping-bag fs-1 text-muted mb-3 d-block"></i>
            <p className="text-muted">No orders yet</p>
            <Link to="/products" className="btn btn-primary rounded-pill">
              Start Shopping
            </Link>
          </div>
        )}
      </div>

      {/* Favorite Products */}
      {favorite_products && favorite_products.length > 0 && (
        <div className="border rounded-4 py-4 px-3 px-sm-4">
          <h2 className="h5 mb-4">Your Favorite Products</h2>
          <div className="row g-3">
            {favorite_products.map((product) => (
              <div key={product.id} className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h6 className="card-title mb-2">
                      <Link 
                        to={`/products/${product.slug}`}
                        className="text-decoration-none"
                      >
                        {product.name}
                      </Link>
                    </h6>
                    <p className="text-muted fs-sm mb-0">
                      Ordered {product.times_ordered} time{product.times_ordered !== 1 ? 's' : ''}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default BuyerDashboard;