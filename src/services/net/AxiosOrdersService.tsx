import { AxiosService } from "./base/AxiosService";
import type { AxiosResponse } from "axios";

// Define TypeScript interfaces for your data structures
interface Order {
  id: string;
  // Add other order properties as needed
}

interface Address {
  id?: string;
  // Add address properties
}

interface CartItem {
  id: string;
  quantity: number;
  // Add other cart item properties
}

export const AxiosOrdersService = {
  async fetchAll(): Promise<AxiosResponse<Order[]>> {
    return AxiosService.json.get('/orders');
  },

  async fetchOne(orderId: string): Promise<AxiosResponse<Order>> {
    return AxiosService.json.get(`/orders/${orderId}`);
  },

  async checkoutWithNewAddress(
    cartItems: CartItem[],
    addressObj: Address
  ): Promise<AxiosResponse<Order>> {
    return AxiosService.json.post('/orders', {
      ...addressObj,
      cart_items: cartItems,
    });
  },

  async checkoutReusingAddress(
    cartItems: CartItem[],
    addressId: string
  ): Promise<AxiosResponse<Order>> {
    return AxiosService.json.post('/orders', {
      address_id: addressId,
      cart_items: cartItems,
    });
  },

  async create(): Promise<AxiosResponse<Order>> {
    // Implement your create logic here
    throw new Error("Not implemented yet");
  },
};