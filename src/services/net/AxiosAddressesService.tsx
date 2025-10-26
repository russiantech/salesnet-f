
// v2
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
   * Fetch all addresses with optional inclusions and pagination
   */
  async fetchAll(options?: {
    include_city?: boolean;
    include_state?: boolean;
    include_country?: boolean;
    include_user?: boolean;
    include_store?: boolean;
    page?: number;
    page_size?: number;
  }): Promise<AxiosResponse<Address[]>> {
    const params: Record<string, any> = {
      include_city: options?.include_city ?? true,
      include_state: options?.include_state ?? false,
      include_country: options?.include_country ?? false,
      include_user: options?.include_user ?? false,
      include_store: options?.include_store ?? false,
    };

    // Only add pagination params if they are provided
    if (options?.page !== undefined) {
      params.page = options.page;
    }
    
    if (options?.page_size !== undefined) {
      params.page_size = options.page_size;
    }

    return AxiosService.json.get('/addresses', { params });
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