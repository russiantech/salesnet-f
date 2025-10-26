
// v2
// pages/vendor/Dashboard.tsx
import React from 'react';
import Navigation from '../../../components/shared/Navigation';
import SeoConfig from '../../../utils/SeoManager';
// import VendorAside from '../shared/VendorAside';
// import VendorDashboard from '../../../components/vendor/VendorDashboard';
import Aside from '../../users/shared/Aside';

const Dashboard = () => {
  return (
    <>
      <SeoConfig 
        title={'Vendor Dashboard - Salesnet'}
        description={'Manage your sales, products, and earnings on Salesnet'}
        keywords={'vendor, dashboard, sales, earnings, analytics'}
        canonical={'/vendor/dashboard'}
      />

      <Navigation />
      
      <main className="content-wrapper">
        <div className="container pt-4 pt-lg-5 pb-5">
          <div className="row pt-sm-2 pt-md-3 pt-lg-0 pb-2 pb-sm-3 pb-md-4 pb-lg-5">
            {/* Sidebar navigation */}
            <Aside />

            {/* Dashboard content */}
            <div className="col-lg-9">
              <VendorDashboard />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;

// v3
// import React, { useState, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, DollarSign, ShoppingCart, Package, Users, Calendar, AlertCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

// Mock service (replace with actual AxiosService)
const VendorService = {
  getDashboardOverview: async (timeframe) => {
    // Simulate API call
    return {
      data: {
        timeframe,
        summary_cards: {
          earnings: {
            gross: 9156.74,
            net: 8882.04,
            platform_fees: 274.70,
            currency: 'NGN',
            change_percent: 12.5
          },
          orders: {
            total: 48,
            average_value: 190.76,
            change_percent: 8.3
          },
          products: {
            items_sold: 127,
            change_percent: 15.2
          }
        },
        earnings_history: [
          { date: '2024-09-01', gross_revenue: 200, net_earnings: 194, order_count: 2 },
          { date: '2024-09-03', gross_revenue: 175, net_earnings: 170, order_count: 3 },
          { date: '2024-09-05', gross_revenue: 100, net_earnings: 97, order_count: 1 },
          { date: '2024-09-07', gross_revenue: 75, net_earnings: 73, order_count: 2 },
          { date: '2024-09-09', gross_revenue: 50, net_earnings: 49, order_count: 1 },
          { date: '2024-09-11', gross_revenue: 50, net_earnings: 49, order_count: 1 },
          { date: '2024-09-13', gross_revenue: 100, net_earnings: 97, order_count: 2 }
        ],
        recent_sales: [
          {
            id: 1,
            tracking_number: 'ORD-2024-001',
            customer: { name: 'John Doe', avatar: null },
            status: 'pending',
            gross_amount: 19.00,
            net_earnings: 14.25,
            items_count: 1,
            created_at: '2024-09-13T10:30:00'
          },
          {
            id: 2,
            tracking_number: 'ORD-2024-002',
            customer: { name: 'Jane Smith', avatar: null },
            status: 'completed',
            gross_amount: 21.00,
            net_earnings: 15.75,
            items_count: 2,
            created_at: '2024-09-12T14:20:00'
          }
        ],
        top_products: [
          { id: 1, name: 'iPhone 15 Pro Mockups', slug: 'iphone-15-pro', image: null, total_sold: 25, total_revenue: 475.00 },
          { id: 2, name: 'House Plants Template', slug: 'house-plants', image: null, total_sold: 18, total_revenue: 630.00 },
          { id: 3, name: 'Colorful Items Collection', slug: 'colorful-items', image: null, total_sold: 15, total_revenue: 315.00 }
        ],
        sales_by_status: {
          pending: { count: 1, total: 19.00 },
          completed: { count: 35, total: 7350.00 },
          processing: { count: 8, total: 1520.00 },
          shipped: { count: 4, total: 760.00 }
        }
      }
    };
  }
};

const StatCard = ({ title, value, subtitle, icon: Icon, trend, bgColor, iconColor }) => (
  <div className={`${bgColor} rounded-4 p-4 h-100`}>
    <div className="d-flex align-items-start justify-content-between mb-3">
      <div className="flex-grow-1">
        <h6 className="fs-sm fw-normal text-body-secondary mb-2">{title}</h6>
        <div className="h2 mb-1">{value}</div>
        {subtitle && <p className="fs-sm text-body-secondary mb-0">{subtitle}</p>}
      </div>
      <div className={`${iconColor} rounded-circle p-3`} style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}>
        <Icon size={24} />
      </div>
    </div>
    {trend !== undefined && (
      <div className="d-flex align-items-center gap-1">
        {trend > 0 ? (
          <>
            <TrendingUp size={16} className="text-success" />
            <span className="fs-sm text-success fw-semibold">+{trend}%</span>
          </>
        ) : trend < 0 ? (
          <>
            <TrendingDown size={16} className="text-danger" />
            <span className="fs-sm text-danger fw-semibold">{trend}%</span>
          </>
        ) : (
          <span className="fs-sm text-body-secondary">No change</span>
        )}
        <span className="fs-sm text-body-secondary ms-1">from last period</span>
      </div>
    )}
  </div>
);

const StatusBadge = ({ status }) => {
  const variants = {
    pending: 'info',
    confirmed: 'primary',
    processing: 'warning',
    shipped: 'secondary',
    delivered: 'success',
    completed: 'success',
    cancelled: 'danger',
    returned: 'warning',
    refunded: 'danger'
  };
  
  const variant = variants[status] || 'secondary';
  
  return (
    <span className={`badge bg-${variant}-subtle text-${variant} rounded-pill fs-xs`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

export const VendorDashboard = () => {
  const [timeframe, setTimeframe] = useState('this-month');
  const [loading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    loadDashboardData();
  }, [timeframe]);

  const loadDashboardData = async () => {
    try {
      setLoading(true);
      const response = await VendorService.getDashboardOverview(timeframe);
      setDashboardData(response.data);
    } catch (error) {
      console.error('Error loading dashboard:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading || !dashboardData) {
    return (
      <div className="container pt-5">
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  const { summary_cards, earnings_history, recent_sales, top_products, sales_by_status } = dashboardData;

  // Prepare chart data
  const earningsChartData = earnings_history.map(item => ({
    date: new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    'Net Earnings': item.net_earnings,
    'Gross Revenue': item.gross_revenue,
    'Platform Fee': item.platform_fee
  }));

  const statusChartData = Object.entries(sales_by_status).map(([status, data]) => ({
    name: status.charAt(0).toUpperCase() + status.slice(1),
    value: data.count,
    amount: data.total
  }));

  const COLORS = ['#33b36b', '#3b82f6', '#f59e0b', '#8b5cf6', '#ef4444'];

  return (
    <div className="container pt-4 pt-lg-5 pb-5">
      <div className="row pt-sm-2 pt-md-3 pb-2 pb-sm-3">
        {/* Header */}
        <div className="col-12">
          <div className="d-flex align-items-center justify-content-between gap-3 pb-3 mb-3">
            <div>
              <h1 className="h2 mb-1">Vendor Dashboard</h1>
              <p className="text-body-secondary mb-0">Track your sales, earnings, and business performance</p>
            </div>
            <div className="position-relative" style={{ width: '200px' }}>
              <Calendar className="position-absolute top-50 start-0 translate-middle-y z-1 ms-3" size={18} />
              <select 
                className="form-select form-icon-start rounded-pill"
                value={timeframe}
                onChange={(e) => setTimeframe(e.target.value)}
              >
                <option value="today">Today</option>
                <option value="yesterday">Yesterday</option>
                <option value="this-week">This Week</option>
                <option value="last-week">Last Week</option>
                <option value="this-month">This Month</option>
                <option value="last-month">Last Month</option>
                <option value="last-3-months">Last 3 Months</option>
                <option value="this-year">This Year</option>
                <option value="all-time">All Time</option>
              </select>
            </div>
          </div>
        </div>

        {/* Summary Stats Cards */}
        <div className="col-12">
          <div className="row g-3 g-xl-4 pb-4">
            {/* Earnings Card */}
            <div className="col-md-4">
              <StatCard
                title="Net Earnings"
                value={`₦${summary_cards.earnings.net.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
                subtitle={`Gross: ₦${summary_cards.earnings.gross.toLocaleString()} | Fees: ₦${summary_cards.earnings.platform_fees.toLocaleString()}`}
                icon={DollarSign}
                trend={summary_cards.earnings.change_percent}
                bgColor="bg-success-subtle"
                iconColor="text-success"
              />
            </div>

            {/* Orders Card */}
            <div className="col-md-4">
              <StatCard
                title="Total Orders"
                value={summary_cards.orders.total}
                subtitle={`Avg: ₦${summary_cards.orders.average_value.toLocaleString('en-US', { minimumFractionDigits: 2 })}`}
                icon={ShoppingCart}
                trend={summary_cards.orders.change_percent}
                bgColor="bg-info-subtle"
                iconColor="text-info"
              />
            </div>

            {/* Items Sold Card */}
            <div className="col-md-4">
              <StatCard
                title="Items Sold"
                value={summary_cards.products.items_sold}
                subtitle="Across all products"
                icon={Package}
                trend={summary_cards.products.change_percent}
                bgColor="bg-warning-subtle"
                iconColor="text-warning"
              />
            </div>
          </div>
        </div>

        {/* Earnings History Chart */}
        <div className="col-12 pb-4">
          <div className="border rounded-4 p-4">
            <h2 className="h5 mb-4">Earnings History</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={earningsChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(133,140,151,.18)" />
                <XAxis dataKey="date" style={{ fontSize: '12px' }} />
                <YAxis style={{ fontSize: '12px' }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '13px'
                  }}
                  formatter={(value) => `₦${value.toFixed(2)}`}
                />
                <Legend wrapperStyle={{ fontSize: '13px' }} />
                <Line 
                  type="monotone" 
                  dataKey="Net Earnings" 
                  stroke="#33b36b" 
                  strokeWidth={2}
                  dot={{ fill: '#33b36b', r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="Gross Revenue" 
                  stroke="#3b82f6" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={{ fill: '#3b82f6', r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Sales by Status & Top Products */}
        <div className="col-12 pb-4">
          <div className="row g-3 g-xl-4">
            {/* Sales by Status */}
            <div className="col-lg-5">
              <div className="border rounded-4 p-4 h-100">
                <h2 className="h5 mb-4">Sales by Status</h2>
                <ResponsiveContainer width="100%" height={280}>
                  <PieChart>
                    <Pie
                      data={statusChartData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={90}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {statusChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value, name, props) => [
                        `${value} orders (₦${props.payload.amount.toFixed(2)})`,
                        name
                      ]}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Top Products */}
            <div className="col-lg-7">
              <div className="border rounded-4 p-4 h-100">
                <h2 className="h5 mb-3">Top Selling Products</h2>
                <div className="table-responsive">
                  <table className="table align-middle mb-0">
                    <thead>
                      <tr>
                        <th className="border-0 ps-0">Product</th>
                        <th className="border-0 text-end">Sold</th>
                        <th className="border-0 text-end pe-0">Revenue</th>
                      </tr>
                    </thead>
                    <tbody>
                      {top_products.map((product, index) => (
                        <tr key={product.id}>
                          <td className="ps-0">
                            <div className="d-flex align-items-center gap-2">
                              <div 
                                className="bg-secondary-subtle rounded-2 d-flex align-items-center justify-content-center"
                                style={{ width: '40px', height: '40px', minWidth: '40px' }}
                              >
                                <Package size={20} className="text-secondary" />
                              </div>
                              <div>
                                <div className="fw-medium">{product.name}</div>
                                <div className="fs-sm text-body-secondary">{product.slug}</div>
                              </div>
                            </div>
                          </td>
                          <td className="text-end">
                            <span className="badge bg-primary-subtle text-primary rounded-pill">
                              {product.total_sold}
                            </span>
                          </td>
                          <td className="text-end pe-0 fw-semibold">
                            ₦{product.total_revenue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Sales */}
        <div className="col-12">
          <div className="border rounded-4 p-4">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <h2 className="h5 mb-0">Recent Sales</h2>
              <a href="/vendor/sales" className="btn btn-sm btn-outline-primary rounded-pill">
                View All Sales
              </a>
            </div>
            <div className="table-responsive">
              <table className="table align-middle mb-0">
                <thead>
                  <tr>
                    <th className="border-0 ps-0">Order</th>
                    <th className="border-0">Customer</th>
                    <th className="border-0">Status</th>
                    <th className="border-0 text-end">Gross</th>
                    <th className="border-0 text-end">Net Earnings</th>
                    <th className="border-0 text-end pe-0">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {recent_sales.map((sale) => (
                    <tr key={sale.id}>
                      <td className="ps-0">
                        <div>
                          <div className="fw-medium">{sale.tracking_number}</div>
                          <div className="fs-sm text-body-secondary">
                            {sale.items_count} item{sale.items_count !== 1 ? 's' : ''}
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <div 
                            className="bg-primary-subtle rounded-circle d-flex align-items-center justify-content-center"
                            style={{ width: '32px', height: '32px', minWidth: '32px' }}
                          >
                            <Users size={16} className="text-primary" />
                          </div>
                          <span>{sale.customer.name}</span>
                        </div>
                      </td>
                      <td>
                        <StatusBadge status={sale.status} />
                      </td>
                      <td className="text-end">
                        ₦{sale.gross_amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </td>
                      <td className="text-end fw-semibold text-success">
                        ₦{sale.net_earnings.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </td>
                      <td className="text-end pe-0 text-body-secondary">
                        {new Date(sale.created_at).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="col-12 pt-3">
          <div className="row g-3">
            <div className="col-md-3">
              <a href="/vendor/products/create" className="btn btn-primary w-100 rounded-pill">
                <Package size={18} className="me-2" />
                Add New Product
              </a>
            </div>
            <div className="col-md-3">
              <a href="/vendor/sales" className="btn btn-outline-primary w-100 rounded-pill">
                <ShoppingCart size={18} className="me-2" />
                Manage Sales
              </a>
            </div>
            <div className="col-md-3">
              <a href="/vendor/analytics" className="btn btn-outline-secondary w-100 rounded-pill">
                <TrendingUp size={18} className="me-2" />
                View Analytics
              </a>
            </div>
            <div className="col-md-3">
              <a href="/vendor/settings" className="btn btn-outline-secondary w-100 rounded-pill">
                <AlertCircle size={18} className="me-2" />
                Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default VendorDashboard;