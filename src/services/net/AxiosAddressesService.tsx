import { AxiosService } from "./base/AxiosService";
import type { AxiosResponse } from "axios";

interface Address {
  id: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  // Add other address fields as needed
}

export const AxiosAddressesService = {
  /**
   * Fetch all addresses
   */
  async fetchAll(): Promise<AxiosResponse<Address[]>> {
    return AxiosService.json.get('/addresses');
  },

  /**
   * Create a new address
   */
  async create(addressData: Omit<Address, 'id'>): Promise<AxiosResponse<Address>> {
    return AxiosService.json.post('/addresses', addressData);
  },

  /**
   * Fetch a single address by ID
   */
  async fetchById(id: string): Promise<AxiosResponse<Address>> {
    return AxiosService.json.get(`/addresses/${id}`);
  },

  /**
   * Update an existing address
   */
  async update(id: string, addressData: Partial<Address>): Promise<AxiosResponse<Address>> {
    return AxiosService.json.put(`/addresses/${id}`, addressData);
  },

  /**
   * Delete an address
   */
  async delete(id: string): Promise<AxiosResponse<void>> {
    return AxiosService.json.delete(`/addresses/${id}`);
  }
};