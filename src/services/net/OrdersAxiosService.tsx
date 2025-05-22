// // services/OrderService.js
// import { AxiosService } from "./base/AxiosService";

// // Default order statuses with their display properties
// const ORDER_STATUSES = {
//   PROCESSING: {
//     value: "inprogress",
//     label: "In progress",
//     color: "info"
//   },
//   DELIVERED: {
//     value: "delivered",
//     label: "Delivered",
//     color: "success"
//   },
//   CANCELED: {
//     value: "canceled",
//     label: "Canceled",
//     color: "danger"
//   },
//   DELAYED: {
//     value: "delayed",
//     label: "Delayed",
//     color: "warning"
//   }
// };

// // Timeframe options for filtering
// const TIMEFRAMES = [
//   { value: "all-time", label: "For all time" },
//   { value: "last-year", label: "For last year" },
//   { value: "last-3-months", label: "For last 3 months" },
//   { value: "last-30-days", label: "For last 30 days" },
//   { value: "last-week", label: "For last week" }
// ];

// class OrderService {
//   constructor() {
//     this.apiUrl = process.env.NEXT_PUBLIC_API_URL || "/api";
//     this.endpoint = `${this.apiUrl}/orders`;
//   }

//   // Get all orders with optional filters
//   async getOrders(filters = {}) {
//     try {
//       const queryParams = new URLSearchParams();
      
//       // Add filters to query params
//       if (filters.status) {
//         queryParams.append('status', filters.status);
//       }
      
//       if (filters.timeframe) {
//         queryParams.append('timeframe', filters.timeframe);
//       }
      
//       if (filters.page) {
//         queryParams.append('page', filters.page);
//       }
      
//       if (filters.limit) {
//         queryParams.append('limit', filters.limit);
//       }
      
//       const queryString = queryParams.toString();
//       const url = queryString ? `${this.endpoint}?${queryString}` : this.endpoint;
      
//       const response = await fetch(url);
      
//       if (!response.ok) {
//         throw new Error(`Error fetching orders: ${response.statusText}`);
//       }
      
//       return await response.json();
//     } catch (error) {
//       console.error("Failed to fetch orders:", error);
//       throw error;
//     }
//   }

//   // Get a specific order by its ID
//   async getOrderById(orderId) {
//     try {
//       const response = await fetch(`${this.endpoint}/${orderId}`);
      
//       if (!response.ok) {
//         throw new Error(`Error fetching order ${orderId}: ${response.statusText}`);
//       }
      
//       return await response.json();
//     } catch (error) {
//       console.error(`Failed to fetch order ${orderId}:`, error);
//       throw error;
//     }
//   }

//   // Update the status of an order
//   async updateOrderStatus(orderId, newStatus) {
//     try {
//       const response = await fetch(`${this.endpoint}/${orderId}/status`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ status: newStatus }),
//       });
      
//       if (!response.ok) {
//         throw new Error(`Error updating order status: ${response.statusText}`);
//       }
      
//       return await response.json();
//     } catch (error) {
//       console.error("Failed to update order status:", error);
//       throw error;
//     }
//   }

//   // Update delivery details for an order
//   async updateDeliveryDetails(orderId, deliveryDetails) {
//     try {
//       const response = await fetch(`${this.endpoint}/${orderId}/delivery`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(deliveryDetails),
//       });
      
//       if (!response.ok) {
//         throw new Error(`Error updating delivery details: ${response.statusText}`);
//       }
      
//       return await response.json();
//     } catch (error) {
//       console.error("Failed to update delivery details:", error);
//       throw error;
//     }
//   }

//   // Cancel an order
//   async cancelOrder(orderId, reason) {
//     try {
//       const response = await fetch(`${this.endpoint}/${orderId}/cancel`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ reason }),
//       });
      
//       if (!response.ok) {
//         throw new Error(`Error canceling order: ${response.statusText}`);
//       }
      
//       return await response.json();
//     } catch (error) {
//       console.error("Failed to cancel order:", error);
//       throw error;
//     }
//   }

//   // Helper method to get status display info
//   getStatusDisplayInfo(statusValue) {
//     // Find the status object that matches the provided value
//     const statusKey = Object.keys(ORDER_STATUSES).find(
//       key => ORDER_STATUSES[key].value === statusValue
//     );
    
//     // Return the status info or a default
//     return statusKey 
//       ? ORDER_STATUSES[statusKey] 
//       : { value: statusValue, label: statusValue, color: "secondary" };
//   }

//   // Get all available status options 
//   getStatusOptions() {
//     return Object.values(ORDER_STATUSES);
//   }

//   // Get all available timeframe options
//   getTimeframeOptions() {
//     return TIMEFRAMES;
//   }
// }

// // Create singleton instance
// const orderService = new OrderService();
// export default orderService;

// VERSION 02
// 
// export const ORDER_STATUSES = {
//   inprogress: { label: 'In Progress', color: 'info' },
//   delivered: { label: 'Delivered', color: 'success' },
//   canceled: { label: 'Canceled', color: 'danger' },
//   delayed: { label: 'Delayed', color: 'warning' }
// };

// export const TIMEFRAMES = [
//   { value: "all-time", label: "For all time" },
//   { value: "last-year", label: "For last year" },
//   { value: "last-3-months", label: "For last 3 months" },
//   { value: "last-30-days", label: "For last 30 days" },
//   { value: "last-week", label: "For last week" }
// ];

// import { AxiosService } from "./base/AxiosService";

// export const OrdersAxiosService = {
//   /**
//    * Get all orders with optional filters and pagination
//    * @param filters Filter parameters for fetching orders
//    * @returns Promise with list of orders
//    */
//   getOrders: (filters: {
//     status?: 'inprogress' | 'delivered' | 'canceled' | 'delayed';
//     timeframe?: 'all-time' | 'last-year' | 'last-3-months' | 'last-30-days' | 'last-week';
//     page?: number;
//     limit?: number;
//     [key: string]: any;
//   } = {}) => {
//     const defaultParams = {
//       page: 1,
//       limit: 10
//     };
//     return AxiosService.json.get('/orders', {
//       params: { ...defaultParams, ...filters }
//     });
//   },

//   /**
//    * Get a specific order by ID
//    * @param orderId The ID of the order
//    * @returns Promise with order details
//    */
//   getOrderById: (orderId: number | string) => {
//     return AxiosService.json.get(`/orders/${orderId}`);
//   },

//   /**
//    * Update the status of an order
//    * @param orderId Order ID
//    * @param newStatus New status to set
//    * @returns Promise with updated order
//    */
  
// //   updateOrderStatus: (orderId: number | string, newStatus: string) => {
//     updateOrderStatus: (
//         orderId: number | string,
//         newStatus: keyof typeof ORDER_STATUSES
//         ) => {

//     return AxiosService.json.put(`/orders/${orderId}/status`, {
//       status: newStatus
//     });
//   },

//   /**
//    * Update delivery details for an order
//    * @param orderId Order ID
//    * @param deliveryDetails Object with delivery details
//    * @returns Promise with updated delivery info
//    */
//   updateDeliveryDetails: (orderId: number | string, deliveryDetails: Record<string, any>) => {
//     return AxiosService.json.put(`/orders/${orderId}/delivery`, deliveryDetails);
//   },

//   /**
//    * Cancel an order with a reason
//    * @param orderId Order ID
//    * @param reason Reason for cancellation
//    * @returns Promise with cancellation result
//    */
//   cancelOrder: (orderId: number | string, reason: string) => {
//     return AxiosService.json.post(`/orders/${orderId}/cancel`, {
//       reason
//     });
//   },

//   deleteOrder: (orderId: number | string) => {
//     return AxiosService.json.delete(`/orders/${orderId}`);
//     },

//   /**
//    * Get order status meta info (label and color)
//    * @param status Order status value
//    * @returns Status display info
//    */
//   getStatusDisplayInfo: (status: string) => {
//     // const ORDER_STATUSES = {
//     //   inprogress: { label: 'In Progress', color: 'info' },
//     //   delivered: { label: 'Delivered', color: 'success' },
//     //   canceled: { label: 'Canceled', color: 'danger' },
//     //   delayed: { label: 'Delayed', color: 'warning' }
//     // };
//     return ORDER_STATUSES[status] || { label: status, color: 'secondary' };
//   }
// };

// VERSION 03
// services/OrderService.js

// Default order statuses with their display properties
// const ORDER_STATUSES = {
//   PROCESSING: {
//     value: "inprogress",
//     label: "In progress",
//     color: "info"
//   },
//   DELIVERED: {
//     value: "delivered",
//     label: "Delivered",
//     color: "success"
//   },
//   CANCELED: {
//     value: "canceled",
//     label: "Canceled",
//     color: "danger"
//   },
//   DELAYED: {
//     value: "delayed",
//     label: "Delayed",
//     color: "warning"
//   }
// };

// // Timeframe options for filtering
// const TIMEFRAMES = [
//   { value: "all-time", label: "For all time" },
//   { value: "last-year", label: "For last year" },
//   { value: "last-3-months", label: "For last 3 months" },
//   { value: "last-30-days", label: "For last 30 days" },
//   { value: "last-week", label: "For last week" }
// ];

// class OrdersAxiosService {
//   constructor() {
//     this.apiUrl = process.env.NEXT_PUBLIC_API_URL || "/api";
//     this.endpoint = `${this.apiUrl}/orders`;
//   }

//   // Get all orders with optional filters
//   async getOrders(filters = {}) {
//     try {
//       const queryParams = new URLSearchParams();
      
//       // Add filters to query params
//       if (filters.status) {
//         queryParams.append('status', filters.status);
//       }
      
//       if (filters.timeframe) {
//         queryParams.append('timeframe', filters.timeframe);
//       }
      
//       if (filters.page) {
//         queryParams.append('page', filters.page);
//       }
      
//       if (filters.limit) {
//         queryParams.append('limit', filters.limit);
//       }
      
//       const queryString = queryParams.toString();
//       const url = queryString ? `${this.endpoint}?${queryString}` : this.endpoint;
      
//       const response = await fetch(url);
      
//       if (!response.ok) {
//         throw new Error(`Error fetching orders: ${response.statusText}`);
//       }
      
//       return await response.json();
//     } catch (error) {
//       console.error("Failed to fetch orders:", error);
//       throw error;
//     }
//   }

//   // Get a specific order by its ID
//   async getOrderById(orderId) {
//     try {
//       const response = await fetch(`${this.endpoint}/${orderId}`);
      
//       if (!response.ok) {
//         throw new Error(`Error fetching order ${orderId}: ${response.statusText}`);
//       }
      
//       return await response.json();
//     } catch (error) {
//       console.error(`Failed to fetch order ${orderId}:`, error);
//       throw error;
//     }
//   }

//   // Update the status of an order
//   async updateOrderStatus(orderId, newStatus) {
//     try {
//       const response = await fetch(`${this.endpoint}/${orderId}/status`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ status: newStatus }),
//       });
      
//       if (!response.ok) {
//         throw new Error(`Error updating order status: ${response.statusText}`);
//       }
      
//       return await response.json();
//     } catch (error) {
//       console.error("Failed to update order status:", error);
//       throw error;
//     }
//   }

//   // Update delivery details for an order
//   async updateDeliveryDetails(orderId, deliveryDetails) {
//     try {
//       const response = await fetch(`${this.endpoint}/${orderId}/delivery`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(deliveryDetails),
//       });
      
//       if (!response.ok) {
//         throw new Error(`Error updating delivery details: ${response.statusText}`);
//       }
      
//       return await response.json();
//     } catch (error) {
//       console.error("Failed to update delivery details:", error);
//       throw error;
//     }
//   }

//   // Cancel an order
//   async cancelOrder(orderId, reason) {
//     try {
//       const response = await fetch(`${this.endpoint}/${orderId}/cancel`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ reason }),
//       });
      
//       if (!response.ok) {
//         throw new Error(`Error canceling order: ${response.statusText}`);
//       }
      
//       return await response.json();
//     } catch (error) {
//       console.error("Failed to cancel order:", error);
//       throw error;
//     }
//   }

//   // Helper method to get status display info
//   getStatusDisplayInfo(statusValue) {
//     // Find the status object that matches the provided value
//     const statusKey = Object.keys(ORDER_STATUSES).find(
//       key => ORDER_STATUSES[key].value === statusValue
//     );
    
//     // Return the status info or a default
//     return statusKey 
//       ? ORDER_STATUSES[statusKey] 
//       : { value: statusValue, label: statusValue, color: "secondary" };
//   }

//   // Get all available status options 
//   getStatusOptions() {
//     return Object.values(ORDER_STATUSES);
//   }

//   // Get all available timeframe options
//   getTimeframeOptions() {
//     return TIMEFRAMES;
//   }
// }

// // Create singleton instance
// const OrdersAxiosService = new OrderService();
// export default OrdersAxiosService;

// VERSION 04
// services/OrderService.ts
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
    
    return AxiosService.json.get('/orders', { params: defaultParams });
  },

  /**
   * Get a specific order by ID
   * @param orderId The ID of the order
   * @returns Promise with order details
   */
  getOrderById: async (orderId: string): Promise<Order> => {
    return AxiosService.json.get(`/orders/${orderId}?include_order_items=1`);
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
    return AxiosService.json.put(`/orders/${orderId}/status`, { status: newStatus });
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
    return AxiosService.json.put(`/orders/${orderId}/delivery`, deliveryDetails);
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
    return AxiosService.json.post(`/orders/${orderId}/cancel`, { reason });
  },

  /**
   * Delete an order
   * @param orderId Order ID
   * @returns Promise with deletion result
   */
  deleteOrder: async (orderId: string): Promise<{ success: boolean }> => {
    return AxiosService.json.delete(`/orders/${orderId}`);
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