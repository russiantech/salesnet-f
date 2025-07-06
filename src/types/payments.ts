// Payment method types
export type PaymentMethod = 'paypal' | 'paystack' | 'flutterwave' | 'opay';

// Payment configuration interface
export interface PaymentConfig {
  paystack: { publicKey: string };
  flutterwave: { publicKey: string };
  opay: { merchantId: string };
}

// User information
export interface User {
  id: string;
  full_name: string;
  email: string;
  phone?: string;
}

// Order information
export interface Order {
  id: string;
  total_amount: number;
  email: string;
  phone?: string;
  tracking_number: string;
}

// Delivery details
export interface DeliveryDetails {
  option: 'pickup' | 'delivery';
  address?: {
    phone_number: string;
  };
}

// Store information
export interface Store {
  id: string;
  phone?: string;
}

// Payment request payload
export interface PaymentRequest {
  orderId: string;
  amount: number;
  paymentMethod: PaymentMethod;
  customerEmail: string;
  paymentReference: string;
}

// Script loading status
export interface ScriptStatus {
  paystack: boolean;
  flutterwave: boolean;
  opay: boolean;
}