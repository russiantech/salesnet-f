import axios from 'axios';
import { NotificationService } from '../local/NotificationService';
import { AxiosAddressesService } from '../net/AxiosAddressesService';
// import { NotificationService } from './NotificationService';

// const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const API_BASE_URL = import.meta.env.REACT_APP_API_BASE_URL;;

interface Address {
  id?: string;
  type: 'delivery' | 'pickup';
  house: string;
  floor?: string;
  street: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
  phoneNumber: string;
  isDefault?: boolean;
}

interface DeliveryTime {
  date: string; // ISO format
  timeSlot: string;
  type: 'delivery' | 'pickup';
}

interface PaymentIntent {
  id: string;
  clientSecret?: string;
  amount: number;
  currency: string;
  status: string;
  paymentMethod?: string;
}

interface Order {
  id: string;
  items: Array<{
    productId: string;
    name: string;
    price: number;
    quantity: number;
  }>;
  subtotal: number;
  discount: number;
  deliveryFee: number;
  total: number;
  status: string;
  paymentMethod: string;
  paymentStatus: string;
  deliveryAddress?: Address;
  pickupAddress?: Address;
  deliveryTime?: DeliveryTime;
  createdAt: string;
  updatedAt: string;
}

export const CheckoutService = {
  // Address Management
  async getAddresses(userId: string): Promise<Address[]> {
    try {
    //   const response = await axios.get(`${API_BASE_URL}/users/${userId}/addresses`);
      const response = await AxiosAddressesService.fetchAll()
      return response.data;
    } catch (error) {
      NotificationService.showDialog(
        'Failed to fetch addresses. Please try again.',
        'error'
      );
      throw error;
    }
  },

  async saveAddress(userId: string, address: Address): Promise<Address> {
    try {
      const url = address.id 
        ? `${API_BASE_URL}/users/${userId}/addresses/${address.id}`
        : `${API_BASE_URL}/users/${userId}/addresses`;
      
      const method = address.id ? 'put' : 'post';
      const response = await axios[method](url, address);
      
      NotificationService.showDialog(
        `Address ${address.id ? 'updated' : 'saved'} successfully`,
        'success'
      );
      return response.data;
    } catch (error) {
      NotificationService.showDialog(
        `Failed to ${address.id ? 'update' : 'save'} address. Please try again.`,
        'error'
      );
      throw error;
    }
  },

  async deleteAddress(userId: string, addressId: string): Promise<void> {
    try {
      await axios.delete(`${API_BASE_URL}/users/${userId}/addresses/${addressId}`);
      NotificationService.showDialog('Address deleted successfully', 'success');
    } catch (error) {
      NotificationService.showDialog(
        'Failed to delete address. Please try again.',
        'error'
      );
      throw error;
    }
  },

  // Delivery/Pickup Options
  async getAvailableTimeSlots(
    type: 'delivery' | 'pickup',
    date?: string
  ): Promise<DeliveryTime[]> {
    try {
      const params = { type, date };
      const response = await axios.get(`${API_BASE_URL}/timeslots`, { params });
      return response.data;
    } catch (error) {
      NotificationService.showDialog(
        'Failed to fetch available time slots. Please try again.',
        'error'
      );
      throw error;
    }
  },

  // Payment Processing
  async createPaymentIntent(
    amount: number,
    currency: string,
    paymentMethod: string
  ): Promise<PaymentIntent> {
    try {
      const response = await axios.post(`${API_BASE_URL}/payments/intents`, {
        amount,
        currency,
        paymentMethod
      });
      return response.data;
    } catch (error) {
      NotificationService.showDialog(
        'Failed to initialize payment. Please try again.',
        'error'
      );
      throw error;
    }
  },

  async confirmPayment(paymentIntentId: string): Promise<PaymentIntent> {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/payments/${paymentIntentId}/confirm`
      );
      NotificationService.showDialog('Payment confirmed successfully', 'success');
      return response.data;
    } catch (error) {
      NotificationService.showDialog(
        'Payment confirmation failed. Please try again.',
        'error'
      );
      throw error;
    }
  },

  // Order Processing
  async createOrder(orderData: {
    items: Array<{
      productId: string;
      quantity: number;
    }>;
    deliveryAddressId?: string;
    pickupAddressId?: string;
    deliveryTime?: DeliveryTime;
    paymentMethod: string;
    note?: string;
  }): Promise<Order> {
    try {
      const response = await axios.post(`${API_BASE_URL}/orders`, orderData);
      NotificationService.showDialog('Order created successfully', 'success');
      return response.data;
    } catch (error) {
      NotificationService.showDialog(
        'Failed to create order. Please try again.',
        'error'
      );
      throw error;
    }
  },

  async getOrder(orderId: string): Promise<Order> {
    try {
      const response = await axios.get(`${API_BASE_URL}/orders/${orderId}`);
      return response.data;
    } catch (error) {
      NotificationService.showDialog(
        'Failed to fetch order details. Please try again.',
        'error'
      );
      throw error;
    }
  },
};