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
  // async fetchAll(): Promise<AxiosResponse<Address[]>> {
  //   return AxiosService.json.get('/addresses');
  // },

  /**
 * Fetch all addresses with optional inclusions
 */
async fetchAll(options?: {
  include_city?: boolean;
  include_state?: boolean;
  include_country?: boolean;
  include_user?: boolean;
  include_store?: boolean;
}): Promise<AxiosResponse<Address[]>> {
  const params = {
    include_city: options?.include_city ?? true,
    include_state: options?.include_state ?? false,
    include_country: options?.include_country ?? false,
    include_user: options?.include_user ?? false,
  };

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