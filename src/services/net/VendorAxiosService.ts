// services/VendorAxiosService.ts
import { AxiosResponse } from "axios";
import { AxiosService } from "./base/AxiosService";

export interface DashboardOverview {
  message: string;
  success: any;
  timeframe: string;
  summary_cards: {
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
  };
  earnings_history: Array<{
    date: string;
    gross_revenue: number;
    net_earnings: number;
    platform_fee: number;
    order_count: number;
  }>;
  recent_sales: Array<{
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
  }>;
  top_products: Array<{
    id: number;
    name: string;
    slug: string;
    image: string | null;
    total_sold: number;
    total_revenue: number;
  }>;
  sales_by_status: Record<string, {
    count: number;
    total: number;
  }>;
  has_comparison: boolean;
}

export interface VendorAnalytics {
  timeframe: string;
  sales_trend: {
    growth_rate: number;
    trend: 'up' | 'down' | 'stable';
    forecast: Array<any>;
  };
  customer_insights: {
    total_customers: number;
    repeat_customers: number;
    repeat_rate: number;
  };
  product_performance: {
    total_products: number;
    products_sold: number;
    sell_through_rate: number;
  };
  revenue_breakdown: {
    gross_revenue: number;
    platform_fees: number;
    net_earnings: number;
    commission_rate: number;
    earnings_rate: number;
  };
}

export interface ProductsStats {
  total_products: number;
  active_products: number;
  inactive_products: number;
  low_stock?: number;
}

// export const VendorAxiosService = {
//   // Get dashboard overview with timeframe filtering
//   getDashboardOverview: (params: {
//     timeframe?: string;
//     compare_previous?: boolean;
//   } = {}) => {
//     const query = {
//       timeframe: params.timeframe || 'this-month',
//       compare_previous: params.compare_previous !== false
//     };

//     // console.log(query);

//     // const response =  AxiosService.json.get('/vendors/dashboard/overview', { params: query }) as Promise<AxiosResponse<DashboardOverview>>;
//     const response = AxiosService.json.get('/vendors/dashboard/overview', { params: query });

//     // return response.data as DashboardOverview;

//     return response;

//   },

//   // Get detailed analytics
//   getAnalytics: (params: { timeframe?: string } = {}) => {
//     const query = {
//       timeframe: params.timeframe || 'this-month'
//     };
//     const response = AxiosService.json.get('/vendors/dashboard/analytics', { params: query }) as Promise<AxiosResponse<VendorAnalytics>>;
//     return response;
//   },

//   // Get products statistics
//   getProductsStats: () => {
//     const response = AxiosService.json.get('/vendors/dashboard/products-stats') as Promise<AxiosResponse<ProductsStats>>;
//     return response;
//   },

//   // Get sales (reusing from sales endpoints)
//   getMySales: (params: {
//     page?: number;
//     page_size?: number;
//     status?: string;
//     timeframe?: string;
//   } = {}) => {
//     const query = {
//       page: params.page || 1,
//       page_size: params.page_size || 10,
//       status: params.status || '',
//       timeframe: params.timeframe || 'all-time'
//     };
//     return AxiosService.json.get('/sales/my-sales', { params: query });
//   },

//   // Get sale details
//   getSaleDetails: (saleId: number) => {
//     return AxiosService.json.get(`/sales/${saleId}`);
//   },

//   // Update sale status
//   updateSaleStatus: (saleId: number, status: string) => {
//     return AxiosService.json.patch(`/sales/${saleId}/status`, { status });
//   },

//   // Notify customer
//   notifyCustomer: (saleId: number, notification: {
//     message: string;
//     type: string;
//   }) => {
//     return AxiosService.json.post(`/sales/${saleId}/notify`, { notification });
//   },

//   // Update sale delivery
//   updateSaleDelivery: (saleId: number, delivery: {
//     deliveryDate?: string;
//     deliveryTimeSlot?: string;
//     shippingMethod?: string;
//     trackingNumber?: string;
//   }, notifyCustomer = true) => {
//     return AxiosService.json.patch(`/sales/${saleId}/delivery`, {
//       delivery,
//       notify_customer: notifyCustomer
//     });
//   },

//   // Add note to sale
//   addSaleNote: (saleId: number, note: {
//     note: string;
//     type?: string;
//     priority?: string;
//   }) => {
//     return AxiosService.json.post(`/sales/${saleId}/notes`, note);
//   },

//   // Bulk update sales
//   bulkUpdateSales: (saleIds: number[], status: string, notes?: string, notifyCustomers = false) => {
//     return AxiosService.json.patch('/sales/bulk-update', {
//       sale_ids: saleIds,
//       status,
//       notes,
//       notify_customers: notifyCustomers
//     });
//   },

//   // Export sales data
//   exportSales: (params: {
//     format?: 'csv' | 'xlsx' | 'json';
//     timeframe?: string;
//     status?: string;
//   } = {}) => {
//     const query = {
//       format: params.format || 'csv',
//       timeframe: params.timeframe || 'this-month',
//       status: params.status || ''
//     };
//     return AxiosService.json.get('/sales/export', { params: query });
//   },

//   // Get sales summary
//   getSalesSummary: (timeframe = 'month') => {
//     return AxiosService.json.get('/sales/summary', { params: { timeframe } });
//   },

//   // Get status options
//   getStatusOptions: () => {
//     return AxiosService.json.get('/sales/status-options');
//   },

//   // Delete sale
//   deleteSale: (saleId: number) => {
//     return AxiosService.json.delete(`/sales/${saleId}`);
//   }
// };

// v2
import { AxiosResponse } from "axios";
import { AxiosService } from "./base/AxiosService";

// Type definitions (from your original code)
export interface DashboardOverview {
  message: string;
  success: any;
  timeframe: string;
  summary_cards: {
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
  };
  earnings_history: Array<{
    date: string;
    gross_revenue: number;
    net_earnings: number;
    platform_fee: number;
    order_count: number;
  }>;
  recent_sales: Array<{
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
  }>;
  top_products: Array<{
    id: number;
    name: string;
    slug: string;
    image: string | null;
    total_sold: number;
    total_revenue: number;
  }>;
  sales_by_status: Record<string, {
    count: number;
    total: number;
  }>;
  has_comparison: boolean;
}

export interface VendorAnalytics {
  timeframe: string;
  sales_trend: {
    growth_rate: number;
    trend: 'up' | 'down' | 'stable';
    forecast: Array<any>;
  };
  customer_insights: {
    total_customers: number;
    repeat_customers: number;
    repeat_rate: number;
  };
  product_performance: {
    total_products: number;
    products_sold: number;
    sell_through_rate: number;
  };
  revenue_breakdown: {
    gross_revenue: number;
    platform_fees: number;
    net_earnings: number;
    commission_rate: number;
    earnings_rate: number;
  };
}

export interface ProductsStats {
  total_products: number;
  active_products: number;
  inactive_products: number;
  low_stock?: number;
}

export const VendorAxiosService = {
  /**
   * Get dashboard overview with timeframe filtering
   */
  async getDashboardOverview(options?: {
    timeframe?: string;
    compare_previous?: boolean;
  }): Promise<AxiosResponse<DashboardOverview>> {
    const params: Record<string, any> = {
      timeframe: options?.timeframe ?? 'this-month',
      compare_previous: options?.compare_previous ?? true,
    };
    console.log('Dashboard Overview Params:', params );
    return AxiosService.json.get('/vendors/dashboard/overview', { params });
  },

  /**
   * Get detailed analytics
   */
  async getAnalytics(options?: {
    timeframe?: string;
  }): Promise<AxiosResponse<VendorAnalytics>> {
    const params: Record<string, any> = {
      timeframe: options?.timeframe ?? 'this-month',
    };

    return AxiosService.json.get('/vendors/dashboard/analytics', { params });
  },

  /**
   * Get products statistics
   */
  async getProductsStats(): Promise<AxiosResponse<ProductsStats>> {
    return AxiosService.json.get('/vendors/dashboard/products-stats');
  },

  /**
   * Get vendor sales with optional pagination and filtering
   */
  async getMySales(options?: {
    page?: number;
    page_size?: number;
    status?: string;
    timeframe?: string;
  }): Promise<AxiosResponse<any>> {
    const params: Record<string, any> = {
      page: options?.page ?? 1,
      page_size: options?.page_size ?? 10,
      status: options?.status ?? '',
      timeframe: options?.timeframe ?? 'all-time',
    };

    return AxiosService.json.get('/sales/my-sales', { params });
  },

  /**
   * Get sale details
   */
  async getSaleDetails(saleId: number): Promise<AxiosResponse<any>> {
    return AxiosService.json.get(`/sales/${saleId}`);
  },

  /**
   * Update sale status
   */
  async updateSaleStatus(saleId: number, status: string): Promise<AxiosResponse<any>> {
    return AxiosService.json.patch(`/sales/${saleId}/status`, { status });
  },

  /**
   * Notify customer
   */
  async notifyCustomer(
    saleId: number,
    notification: { message: string; type: string }
  ): Promise<AxiosResponse<any>> {
    return AxiosService.json.post(`/sales/${saleId}/notify`, { notification });
  },

  /**
   * Update sale delivery
   */
  async updateSaleDelivery(
    saleId: number,
    delivery: {
      deliveryDate?: string;
      deliveryTimeSlot?: string;
      shippingMethod?: string;
      trackingNumber?: string;
    },
    notifyCustomer = true
  ): Promise<AxiosResponse<any>> {
    const payload = {
      delivery,
      notify_customer: notifyCustomer,
    };
    return AxiosService.json.patch(`/sales/${saleId}/delivery`, payload);
  },

  /**
   * Add a note to a sale
   */
  async addSaleNote(
    saleId: number,
    note: {
      note: string;
      type?: string;
      priority?: string;
    }
  ): Promise<AxiosResponse<any>> {
    return AxiosService.json.post(`/sales/${saleId}/notes`, note);
  },

  /**
   * Bulk update multiple sales
   */
  async bulkUpdateSales(
    saleIds: number[],
    status: string,
    notes?: string,
    notifyCustomers = false
  ): Promise<AxiosResponse<any>> {
    const payload = {
      sale_ids: saleIds,
      status,
      notes,
      notify_customers: notifyCustomers,
    };

    return AxiosService.json.patch('/sales/bulk-update', payload);
  },

  /**
   * Export sales data
   */
  async exportSales(options?: {
    format?: 'csv' | 'xlsx' | 'json';
    timeframe?: string;
    status?: string;
  }): Promise<AxiosResponse<any>> {
    const params: Record<string, any> = {
      format: options?.format ?? 'csv',
      timeframe: options?.timeframe ?? 'this-month',
      status: options?.status ?? '',
    };

    return AxiosService.json.get('/sales/export', { params });
  },

  /**
   * Get sales summary
   */
  async getSalesSummary(timeframe = 'month'): Promise<AxiosResponse<any>> {
    const params = { timeframe };
    return AxiosService.json.get('/sales/summary', { params });
  },

  /**
   * Get available sales status options
   */
  async getStatusOptions(): Promise<AxiosResponse<any>> {
    return AxiosService.json.get('/sales/status-options');
  },

  /**
   * Delete a sale
   */
  async deleteSale(saleId: number): Promise<AxiosResponse<any>> {
    return AxiosService.json.delete(`/sales/${saleId}`);
  },
};


// Type guards and helpers
export const isValidTimeframe = (timeframe: string): boolean => {
  const validTimeframes = [
    'today', 'yesterday', 'this-week', 'last-week',
    'this-month', 'last-month', 'last-3-months',
    'this-year', 'all-time'
  ];
  return validTimeframes.includes(timeframe);
};

export const isValidStatus = (status: string): boolean => {
  const validStatuses = [
    'pending', 'confirmed', 'processing', 'shipped',
    'delivered', 'cancelled', 'returned', 'refunded', 'completed'
  ];
  return validStatuses.includes(status);
};

// Utility functions for data formatting
// export const formatCurrency = (amount: number, currency = 'NGN'): string => {
//   return new Intl.NumberFormat('en-NG', {
//     style: 'currency',
//     currency: currency,
//     minimumFractionDigits: 2,
//     maximumFractionDigits: 2
//   }).format(amount);
// };

export const formatDate = (dateString: string, options?: Intl.DateTimeFormatOptions): string => {
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    ...options
  };
  return new Date(dateString).toLocaleDateString('en-US', defaultOptions);
};

export const formatDateTime = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

export const calculatePercentageChange = (current: number, previous: number): number => {
  if (previous === 0) {
    return current > 0 ? 100 : 0;
  }
  return parseFloat((((current - previous) / previous) * 100).toFixed(1));
};

export const getStatusColor = (status: string): string => {
  const statusColors: Record<string, string> = {
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
  return statusColors[status] || 'secondary';
};

export const getTrendIcon = (changePercent: number): 'up' | 'down' | 'stable' => {
  if (changePercent > 0) return 'up';
  if (changePercent < 0) return 'down';
  return 'stable';
};

// Chart color palettes
export const CHART_COLORS = {
  primary: '#3b82f6',
  success: '#33b36b',
  warning: '#f59e0b',
  danger: '#ef4444',
  info: '#06b6d4',
  secondary: '#8b5cf6',
  dark: '#1f2937',
  light: '#e5e7eb'
};

export const STATUS_COLORS = [
  '#33b36b', // green
  '#3b82f6', // blue
  '#f59e0b', // orange
  '#8b5cf6', // purple
  '#ef4444', // red
  '#06b6d4', // cyan
  '#ec4899', // pink
  '#14b8a6'  // teal
];
