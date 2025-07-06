// import { useBasket } from '../hooks/useBasket';
export * from '../hooks/useBasket';


export interface Address {
  id?: string;
  userId?: string;
  type: 'delivery' | 'pickup';
  name?: string;
  house: string;
  floor?: string;
  street: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
  phoneNumber: string;
  isDefault?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface DeliveryTime {
  date: string; // ISO format
  timeSlot: string;
  type: 'delivery' | 'pickup';
}

export interface PaymentMethod {
  id: string;
  name: string;
  icon: string;
  supportedCurrencies: string[];
}

export interface OrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  subtotal: number;
  discount: number;
  deliveryFee: number;
  total: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  paymentMethod: string;
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  deliveryAddress?: Address;
  pickupAddress?: Address;
  deliveryTime?: DeliveryTime;
  note?: string;
  createdAt: string;
  updatedAt: string;
}

export interface PaymentIntent {
  id: string;
  orderId: string;
  amount: number;
  currency: string;
  status: string;
  paymentMethod: string;
  clientSecret?: string;
  createdAt: string;
}

export interface BasketItem {
  id: string | number;
  product_id: string | number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  slug?: string;
}

export interface BasketState {
  items: BasketItem[];
  subtotal: number;
  itemCount: number;
  freeShippingThreshold: number;
  isLoading: boolean;
  deliveryFee?: number;
  discount?: number;
  total?: number;
}