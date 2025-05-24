// VERSION 04
// services/OrderService.tsx
import { AxiosService } from "./base/AxiosService";

// Default order statuses with their display properties
// pending', 'processing', 'shipped', 'delivered', 'cancelled', 'returned
export const ORDER_STATUSES = {
  PENDING: {
    id: 0,
    value: "pending",
    label: "Still Pending",
    color: "danger"
  },
  PROCESSING: {
    id: 1,
    value: "processing",
    label: "In Progress",
    color: "info"
  },
  SHIPPED: {
    id: 2,
    value: "shipped",
    label: "Shipped Order",
    color: "success"
  },

  DELIVERED: {
    id: 3,
    value: "delivered",
    label: "Delivered",
    color: "success"
  },
  CANCELED: {
    id: 4,
    value: "canceled",
    label: "Canceled",
    color: "danger"
  },
  RETURNED: {
    id: 5,
    value: "returned",
    label: "Returned",
    color: "warning"
  }
  
} as const;

// Timeframe options for filtering
export const TIMEFRAMES = [
  { value: "all-time", label: "For all time" },
  { value: "last-year", label: "For last year" },
  { value: "last-3-months", label: "For last 3 months" },
  { value: "last-30-days", label: "For last 30 days" },
  { value: "last-week", label: "For last week" }
] as const;

type OrderStatus = keyof typeof ORDER_STATUSES;
type OrderStatusValue = typeof ORDER_STATUSES[OrderStatus]['value'];
type Timeframe = typeof TIMEFRAMES[number]['value'];

interface Order {
  id: string;
  status: OrderStatusValue;
  // ... other order fields
  [key: string]: any;
}

interface PaginatedOrders {
  data: Order[];
  total: number;
  page: number;
  limit: number;
}

interface DeliveryDetails {
  address: string;
  trackingNumber?: string;
  estimatedDelivery?: string;
}

export const OrdersAxiosService = {
  /**
   * Get all orders with optional filters and pagination
   * @param filters Filter parameters for fetching orders
   * @returns Promise with paginated orders
   */
  getOrders: async (filters: {
    status?: OrderStatusValue;
    timeframe?: Timeframe;
    page?: number;
    limit?: number;
    [key: string]: any;
  } = {}): Promise<PaginatedOrders> => {
    const defaultParams = {
      page: 1,
      limit: 10,
      ...filters
    };
    
    const response = await AxiosService.json.get('/orders', { params: defaultParams });
    return response.data;
  },

  /**
   * Get a specific order by ID
   * @param orderId The ID of the order
   * @returns Promise with order details
   */
  getOrderById: async (orderId: string): Promise<Order> => {
    const response = await AxiosService.json.get(`/orders/${orderId}?include_order_items=1`);
    return response.data;
  },

  /**
   * Update the status of an order
   * @param orderId Order ID
   * @param newStatus New status to set
   * @returns Promise with updated order
   */
  updateOrderStatus: async (
    orderId: string,
    newStatus: OrderStatusValue
  ): Promise<Order> => {
    const response = await AxiosService.json.put(`/orders/${orderId}/status`, { status: newStatus });
    return response.data;
  },

  /**
   * Update delivery details for an order
   * @param orderId Order ID
   * @param deliveryDetails Object with delivery details
   * @returns Promise with updated order
   */
  updateDeliveryDetails: async (
    orderId: string,
    deliveryDetails: DeliveryDetails
  ): Promise<Order> => {
    const response = await AxiosService.json.put(`/orders/${orderId}/delivery`, deliveryDetails);
    return response.data;
  },

  /**
   * Cancel an order with a reason
   * @param orderId Order ID
   * @param reason Reason for cancellation
   * @returns Promise with cancellation result
   */
  cancelOrder: async (
    orderId: string,
    reason: string
  ): Promise<{ success: boolean; message: string }> => {
    const response = await AxiosService.json.post(`/orders/${orderId}/cancel`, { reason });
    return response.data;
  },

  /**
   * Delete an order
   * @param orderId Order ID
   * @returns Promise with deletion result
   */
  deleteOrder: async (orderId: string): Promise<{ success: boolean }> => {
    const response = await AxiosService.json.delete(`/orders/${orderId}`);
    return response.data;
  },

  /**
   * Get order status meta info (label and color)
   * @param status Order status value
   * @returns Status display info
   */
  getStatusDisplayInfo: (status: string) => {
    const statusEntry = Object.values(ORDER_STATUSES).find(
      s => s.value === status
    );
    return statusEntry || { value: status, label: status, color: "secondary" };
  },

  /**
   * Get all available status options 
   * @returns Array of status options
   */
  getStatusOptions: () => {
    return Object.values(ORDER_STATUSES);
  },

  /**
   * Get all available timeframe options
   * @returns Array of timeframe options
   */
  getTimeframeOptions: () => {
    return TIMEFRAMES;
  }
};

// Export types for external use
export type { OrderStatusValue as OrderStatus, Timeframe, Order, PaginatedOrders, DeliveryDetails };