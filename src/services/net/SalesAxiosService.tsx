// SalesAxiosService.ts
import { AxiosService } from './base/AxiosService';

interface SalesFilters {
  status?: string;
  timeframe?: string;
  page?: number;
  limit?: number;
}

interface NotificationData {
  message: string;
  type: 'status_update' | 'general' | 'reminder';
}

interface DeliveryUpdateData {
  deliveryDate?: string;
  deliveryTimeSlot?: string;
  shippingMethod?: string;
  trackingNumber?: string;
}

export class SalesAxiosService {
//   private static baseURL = process.env.REACT_APP_API_BASE_URL || '/api';

  // Get sales for the current user's store
  static async getMySales(filters: SalesFilters = {}) {
    try {
      const params = new URLSearchParams();
      
      if (filters.status) params.append('status', filters.status);
      if (filters.timeframe) params.append('timeframe', filters.timeframe);
      if (filters.page) params.append('page', filters.page.toString());
      if (filters.limit) params.append('limit', filters.limit.toString());

      const response = await AxiosService.json.get(`/sales/my-sales?${params}`);
      console.log('Fetched my sales:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching sales:', error);
      throw error;
    }
  }

  // Get specific sale details by ID
  static async getSaleById(saleId: number) {
    try {
      const response = await AxiosService.json.get(`/sales/${saleId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching sale details:', error);
      throw error;
    }
  }

  // Update sale status
  static async updateSaleStatus(saleId: number, status: string) {
    try {
      const response = await AxiosService.json.patch(`/sales/${saleId}/status`, {
        status: status,
        updated_at: new Date().toISOString()
      });
      return response.data;
    } catch (error) {
      console.error('Error updating sale status:', error);
      throw error;
    }
  }

  // Update delivery details
  static async updateDeliveryDetails(saleId: number, deliveryData: DeliveryUpdateData) {
    try {
      const response = await AxiosService.json.patch(`/sales/${saleId}/delivery`, {
        delivery: deliveryData,
        updated_at: new Date().toISOString()
      });
      return response.data;
    } catch (error) {
      console.error('Error updating delivery details:', error);
      throw error;
    }
  }

  // Delete a sale
  static async deleteSale(saleId: number) {
    try {
      const response = await AxiosService.json.delete(`/sales/${saleId}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting sale:', error);
      throw error;
    }
  }

  // Send notification to customer
  static async notifyCustomer(saleId: number, notificationData: NotificationData) {
    try {
      const response = await AxiosService.json.post(`/sales/${saleId}/notify`, {
        notification: notificationData,
        timestamp: new Date().toISOString()
      });
      return response.data;
    } catch (error) {
      console.error('Error sending customer notification:', error);
      throw error;
    }
  }

  // Bulk update sales status
  static async bulkUpdateStatus(saleIds: number[], status: string) {
    try {
      const response = await AxiosService.json.patch(`/sales/bulk-update`, {
        sale_ids: saleIds,
        status: status,
        updated_at: new Date().toISOString()
      });
      return response.data;
    } catch (error) {
      console.error('Error bulk updating sales:', error);
      throw error;
    }
  }

  // Get sales analytics/stats
  static async getSalesAnalytics(timeframe: string = 'month') {
    try {
      const response = await AxiosService.json.get(`/sales/analytics?timeframe=${timeframe}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching sales analytics:', error);
      throw error;
    }
  }

  // Export sales data
  static async exportSales(filters: SalesFilters = {}, format: 'csv' | 'xlsx' = 'csv') {
    try {
      const params = new URLSearchParams();
      
      if (filters.status) params.append('status', filters.status);
      if (filters.timeframe) params.append('timeframe', filters.timeframe);
      params.append('format', format);

      const response = await AxiosService.json.get(`/sales/export?${params}`, {
        responseType: 'blob'
      });
      
      // Create download link
      const blob = new Blob([response.data]);
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `sales_export_${new Date().toISOString().split('T')[0]}.${format}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      return response.data;
    } catch (error) {
      console.error('Error exporting sales:', error);
      throw error;
    }
  }

  // Get customer details for a sale
  static async getSaleCustomer(saleId: number) {
    try {
      const response = await AxiosService.json.get(`/sales/${saleId}/customer`);
      return response.data;
    } catch (error) {
      console.error('Error fetching sale customer:', error);
      throw error;
    }
  }

  // Add note to sale
  static async addSaleNote(saleId: number, note: string) {
    try {
      const response = await AxiosService.json.get(`/sales/${saleId}/notes`, {
        note: note,
        created_at: new Date().toISOString()
      });
      return response.data;
    } catch (error) {
      console.error('Error adding sale note:', error);
      throw error;
    }
  }

  // Get sales summary/dashboard data
  static async getSalesSummary(timeframe: string = 'week') {
    try {
        // const response = await AxiosService.json.get('/orders', { params: defaultParams });
      const response = await AxiosService.json.get(`/sales/summary?timeframe=${timeframe}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching sales summary:', error);
      throw error;
    }
  }

  // Static helper methods (similar to OrdersAxiosService)
  static getStatusOptions() {
    return [
      { value: 'pending', label: 'Pending', color: 'warning' },
      { value: 'confirmed', label: 'Confirmed', color: 'info' },
      { value: 'processing', label: 'Processing', color: 'primary' },
      { value: 'shipped', label: 'Shipped', color: 'info' },
      { value: 'delivered', label: 'Delivered', color: 'success' },
      { value: 'completed', label: 'Completed', color: 'success' },
      { value: 'cancelled', label: 'Cancelled', color: 'danger' },
      { value: 'returned', label: 'Returned', color: 'secondary' },
      { value: 'refunded', label: 'Refunded', color: 'secondary' }
    ];
  }

  static getTimeframeOptions() {
    return [
      { value: 'all-time', label: 'All time' },
      { value: 'today', label: 'Today' },
      { value: 'yesterday', label: 'Yesterday' },
      { value: 'this-week', label: 'This week' },
      { value: 'last-week', label: 'Last week' },
      { value: 'this-month', label: 'This month' },
      { value: 'last-month', label: 'Last month' },
      { value: 'last-3-months', label: 'Last 3 months' },
      { value: 'this-year', label: 'This year' }
    ];
  }

  static getStatusDisplayInfo(status: string) {
    const statusOptions = this.getStatusOptions();
    return statusOptions.find(option => option.value === status) || 
           { value: status, label: status, color: 'secondary' };
  }
}