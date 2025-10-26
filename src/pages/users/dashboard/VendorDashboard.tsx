import React, { useState, useEffect } from 'react';
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, DollarSign, ShoppingCart, Package, Users, Calendar, AlertCircle, RefreshCw } from 'lucide-react';
import { AxiosService } from '../../../services/net/base/AxiosService';
import { VendorAxiosService } from '../../../services/net/VendorAxiosService';
import LoadingSpinner from '../../../components/shared/LoadingSpinner';
import { formatCurrency } from '../../../utils/currencyUtils';
import { Link } from 'react-router-dom';
// import AxiosService from '../../../services/AxiosService';

// // API Service
// const VendorService1= {
//   getDashboardOverview: async (timeframe: string) => {
//     const response = await AxiosService.json.get(`/vendors/dashboard/overview?timeframe=${timeframe}&compare_previous=true`);
//     return response.data;
//   },
  
//   getAnalytics: async (timeframe: string) => {
//     const response = await AxiosService.json.get(`/vendors/dashboard/analytics?timeframe=${timeframe}`);
//     return response.data;
//   },
  
//   getProductsStats: async () => {
//     const response = await AxiosService.json.get('/vendors/dashboard/products-stats');
//     return response.data;
//   }
// };

// Types
interface SummaryCards {
  earnings: {
    gross: number;
    net: number;
    platform_fees: number;
    currency: string;
    change_percent?: number;
  };
  orders: {
    total: number;
    average_value: number;
    change_percent?: number;
  };
  products: {
    items_sold: number;
    change_percent?: number;
  };
}

interface EarningsHistory {
  date: string;
  gross_revenue: number;
  net_earnings: number;
  platform_fee: number;
  order_count: number;
}

interface RecentSale {
  id: number;
  tracking_number: string;
  customer: {
    name: string;
    avatar: string | null;
  };
  status: string;
  gross_amount: number;
  net_earnings: number;
  items_count: number;
  created_at: string;
}

interface TopProduct {
  id: number;
  name: string;
  slug: string;
  image: string | null;
  total_sold: number;
  total_revenue: number;
}

interface SalesByStatus {
  [key: string]: {
    count: number;
    total: number;
  };
}

interface DashboardData {
  timeframe: string;
  summary_cards: SummaryCards;
  earnings_history: EarningsHistory[];
  recent_sales: RecentSale[];
  top_products: TopProduct[];
  sales_by_status: SalesByStatus;
  has_comparison: boolean;
}

// Stat Card Component
const StatCard: React.FC<{
  title: string;
  value: string | number;
  subtitle?: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  trend?: number;
  bgColor: string;
  iconColor: string;
}> = ({ title, value, subtitle, icon: Icon, trend, bgColor, iconColor }) => (
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

// Status Badge Component
const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  const variants: { [key: string]: string } = {
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

// Main Dashboard Component
export const VendorDashboard: React.FC = () => {
  const [timeframe, setTimeframe] = useState<string>('this-month');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  useEffect(() => {
    loadDashboardData();
  }, [timeframe]);

  /* const loadDashboardData = async () => {
    try {
      setLoading(true);
      setError(null);
    //   const response = await VendorService.getDashboardOverview(timeframe);
      const response = await VendorAxiosService.getDashboardOverview(timeframe);

      if (response?.data?.success) {
        setDashboardData(response.data);
        console.log('timeframe:', timeframe);
      } else {
        setError(response?.data?.message || 'Failed to load dashboard data');
      }
    } catch (err: any) {
      console.error('Error loading dashboard:', err);
      setError(err.response?.data?.message || 'An error occurred while loading dashboard data');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }; */

  const loadDashboardData = async () => {
  try {
    setLoading(true);
    setError(null);
    
    // Pass timeframe as an object property
    const response = await VendorAxiosService.getDashboardOverview({
      timeframe: timeframe,
      compare_previous: true
    });
    
    if (response?.data?.success) {
      setDashboardData(response.data);
      console.log('timeframe:', timeframe);
    } else {
      setError(response?.data?.message || 'Failed to load dashboard data');
    }
  } catch (err: any) {
    console.error('Error loading dashboard:', err);
    setError(err.response?.data?.message || 'An error occurred while loading dashboard data');
  } finally {
    setLoading(false);
    setRefreshing(false);
  }
};

  const handleRefresh = () => {
    setRefreshing(true);
    loadDashboardData();
  };

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatDateTime = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading && !refreshing) {
    return (
      <div className="container pt-5">
        <div className="text-center py-5">
          <LoadingSpinner size="md" className="text-body-secondary mb-3" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container pt-5">
        <div className="alert alert-danger rounded-4" role="alert">
          <div className="d-flex align-items-center gap-2">
            <AlertCircle size={20} />
            <div>
              <strong>Error Loading Dashboard</strong>
              <p className="mb-0 mt-1">{error}</p>
            </div>
          </div>
          <button 
            className="btn btn-danger mt-3"
            onClick={loadDashboardData}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!dashboardData) {
    return (
      <div className="container pt-5">
        <div className="text-center py-5">
          <Package size={48} className="text-body-secondary mb-3" />
          <h3>No Data Available</h3>
          <p className="text-body-secondary">Start selling to see your dashboard statistics</p>
        </div>
      </div>
    );
  }

  const { summary_cards, earnings_history, recent_sales, top_products, sales_by_status } = dashboardData;

  // Prepare chart data
  const earningsChartData = earnings_history.map(item => ({
    date: formatDate(item.date),
    'Net Earnings': item.net_earnings,
    'Gross Revenue': item.gross_revenue,
    'Orders': item.order_count
  }));

  const statusChartData = Object.entries(sales_by_status).map(([status, data]) => ({
    name: status.charAt(0).toUpperCase() + status.slice(1),
    value: data.count,
    amount: data.total
  }));

  const COLORS = ['#33b36b', '#3b82f6', '#f59e0b', '#8b5cf6', '#ef4444', '#10b981', '#6366f1'];

  return (
    <div className="container pt-4 pt-lg-5 pb-5 overflow-y-auto pe-3" data-simplebar data-simplebar-auto-hide="false" style={{ maxWidth: '100%', maxHeight: '500px' }}>
      <div className="row pt-2 pb-2">
        {/* Header */}
        <div className="col-12">
          <div className="d-flex align-items-center justify-content-between gap-3 pb-3 mb-3 border-bottom">
            <div>
              <h1 className="h2 mb-1">Vendor Dashboard</h1>
              <p className="text-body-secondary mb-0">Track your sales, earnings, and business performance</p>
            </div>
            <div className="d-flex gap-2 align-items-center">
              <button 
                className="btn btn-outline-secondary rounded-pill"
                onClick={handleRefresh}
                disabled={refreshing}
              >
                <RefreshCw size={16} className={refreshing ? 'spinner-border spinner-border-sm' : ''} />
              </button>
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
        </div>

        {/* Summary Stats Cards */}
        <div className="col-12">
          <div className="row g-3 g-xl-4 pb-4">
            {/* Earnings Card */}
            <div className="col-md-4">
              <StatCard
                title="Net Earnings"
                value={formatCurrency(summary_cards.earnings.net, 'NGN', {'short':true})}
                subtitle={`Gross: ${formatCurrency(summary_cards.earnings.gross, 'NGN', {'short':true})} | Fees: ${formatCurrency(summary_cards.earnings.platform_fees, 'NGN', {'short':true}   )}`}
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
                subtitle={`Avg: ${formatCurrency(summary_cards.orders.average_value, 'NGN')}`}
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
        {earnings_history.length > 0 && (
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
                    } as any}
                    formatter={(value: any) => formatCurrency(Number(value), 'NGN')}
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
        )}

        {/* Sales by Status & Top Products */}
        <div className="col-12 pb-4">
          <div className="row g-3 g-xl-4">
            {/* Sales by Status */}
            {statusChartData.length > 0 && (
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
                        // fontSize={12}
                        label={({ name, percent }: { name: string; percent?: number }) => `${name} ${((percent ?? 0) * 100).toFixed(0)}%`}
                        outerRadius={90}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {statusChartData.map((_entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: '#fff',
                          border: '1px solid #ddd',
                          borderRadius: '8px'
                        } as any}
                        formatter={(value: any, name: any, props: any) => [
                          `${value} orders (${formatCurrency(props.payload.amount, 'NGN')})`,
                          name
                        ]}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {/* Top Products */}
            {top_products.length > 0 && (
              <div className={statusChartData.length > 0 ? "col-lg-7" : "col-12"}>
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
                        {top_products.map((product) => (
                          <tr key={product.id}>
                            <td className="ps-0">
                              <div className="d-flex align-items-center gap-2">
                                <div 
                                  className="bg-secondary-subtle rounded-2 d-flex align-items-center justify-content-center overflow-hidden"
                                  style={{ width: '40px', height: '40px', minWidth: '40px' }}
                                >
                                  {product.image ? (
                                    <img src={product.image} alt={product.name} className="w-100 h-100 object-fit-cover" />
                                  ) : (
                                    <Package size={20} className="text-secondary" />
                                  )}
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
                              {formatCurrency(product.total_revenue, 'NGN')}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Recent Sales */}
        {recent_sales.length > 0 && (
          <div className="col-12">
            <div className="border rounded-4 p-4">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h2 className="h5 mb-0">Recent Sales</h2>
                <Link to="/users/orders" className="btn btn-sm btn-outline-primary rounded-pill">
                  View All Sales
                </Link  >
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
                            {sale.customer.avatar ? (
                              <img 
                                src={sale.customer.avatar} 
                                alt={sale.customer.name}
                                className="rounded-circle"
                                style={{ width: '32px', height: '32px', objectFit: 'cover' }}
                              />
                            ) : (
                              <div 
                                className="bg-primary-subtle rounded-circle d-flex align-items-center justify-content-center"
                                style={{ width: '32px', height: '32px', minWidth: '32px' }}
                              >
                                <Users size={16} className="text-primary" />
                              </div>
                            )}
                            <span>{sale.customer.name}</span>
                          </div>
                        </td>
                        <td>
                          <StatusBadge status={sale.status} />
                        </td>
                        <td className="text-end">
                          {formatCurrency(sale.gross_amount, 'NGN')}
                        </td>
                        <td className="text-end fw-semibold text-success">
                          {formatCurrency(sale.net_earnings, 'NGN')}
                        </td>
                        <td className="text-end pe-0 text-body-secondary">
                          {formatDateTime(sale.created_at)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="col-12 pt-3">
          <div className="row g-3">
            <div className="col-md-3">
              {/* <button className="btn btn-primary w-100 rounded-pill" >
                <Package size={18} className="me-2" />
                Add New Product
              </button> */}
              <button className="btn btn-primary rounded-pill" data-bs-toggle="modal" data-bs-target="#PublishPage" aria-current="page">
                    <i className="ci-click  me-1 animate-target text-white"></i>
                Create Product
            </button>
            </div>
            <div className="col-md-3">
              <Link to="/users/orders" className="btn btn-outline-primary w-100 rounded-pill">
                <ShoppingCart size={18} className="me-2" />
                Manage Sales
              </Link>
            </div>
            <div className="col-md-3">
              <Link to="#" className="btn btn-outline-secondary w-100 rounded-pill disabled">
                <TrendingUp size={18} className="me-2" />
                View Analytics
              </Link>
            </div>
            <div className="col-md-3">
              <Link to="/users/personal" className="btn btn-outline-secondary w-100 rounded-pill">
                <AlertCircle size={18} className="me-2" />
                Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorDashboard;