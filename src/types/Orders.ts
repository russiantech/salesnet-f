// types/order.ts - Create this file for your order type definitions

export interface OrderItem {
  id: string;
  name: string;
  slug: string;
  image_url?: string;
  price: number;
  quantity: number;
}

export interface OrderDelivery {
  estimatedDeliveryDate?: string;
  estimatedTimeSlot?: string;
  shippingMethod?: string;
  shippingCost?: number;
}

export interface OrderAddress {
  street_address?: string;
  city?: {
    name: string;
  };
}

export interface OrderPayment {
  method?: string;
  tax_amount?: number;
}

export interface Order {
  id: string;
  tracking_number: string;
  status: string;
  items: OrderItem[];
  delivery?: OrderDelivery;
  addresses?: OrderAddress;
  payment?: OrderPayment;
  tax_amount: number;
  shipping_cost: number;
  total_amount: number;
}

export interface OrderItemsProps {
  selectedOrder: Order | null;
}