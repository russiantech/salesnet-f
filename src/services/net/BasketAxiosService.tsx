// // src/services/net/BasketAxiosService.ts
// import { AxiosService } from "./base/AxiosService";

import { UsersService } from "../local/UsersService";

// export const BasketAxiosService = {
//     /**
//      * Add multiple items to cart
//      * @param productIds Array of product IDs to add
//      * @param quantities Optional array of quantities (defaults to 1 for each)
//      */
//     addMultipleToBasket: (productIds: string[], quantities?: number[]) => {
//         const items = productIds.map((id, index) => ({
//             product_id: id,
//             quantity: quantities?.[index] || 1
//         }));
        
//         // return AxiosService.json.post('/cart/items/batch', { items });
//         return AxiosService.json.post('/basket ', { items });
//     }, 

//     // ... other cart-related methods
// };

// 

// src/services/BasketService.tsx
// import { UsersService } from "./UsersService";
// import { BasketAxiosService } from "./net/BasketAxiosService";

interface BasketItem {
  id: string;
  product_id: string;
  name: string;
  price: number;
  quantity: number;
  image_url: string;
  slug: string;
}

interface BasketData {
  items: BasketItem[];
  total_items: number;
  subtotal: number;
}

interface LocalStorageBasketItem {
  product_id: string;
  quantity: number;
  added_at: string;
}

class BasketServiceClass {
  private readonly STORAGE_KEY = 'salesnet_basket';
  private readonly STORAGE_EXPIRY_DAYS = 30;

  /**
   * Get basket items (from DB if logged in, localStorage if not)
   */
  async getBasket(): Promise<BasketData> {
    if (UsersService.isAuthenticated()) {
      return await this.getDatabaseBasket();
    } else {
      return await this.getLocalStorageBasket();
    }
  }

  /**
   * Add item to basket
   */
  async addToBasket(productId: string, quantity: number = 1): Promise<void> {
    if (UsersService.isAuthenticated()) {
      await this.addToDatabaseBasket(productId, quantity);
    } else {
      await this.addToLocalStorageBasket(productId, quantity);
    }
  }

  /**
   * Update item quantity in basket
   */
  async updateQuantity(itemId: string, quantity: number): Promise<void> {
    if (UsersService.isAuthenticated()) {
      await this.updateDatabaseQuantity(itemId, quantity);
    } else {
      await this.updateLocalStorageQuantity(itemId, quantity);
    }
  }

  /**
   * Remove item from basket
   */
  async removeItem(itemId: string): Promise<void> {
    if (UsersService.isAuthenticated()) {
      await this.removeDatabaseItem(itemId);
    } else {
      await this.removeLocalStorageItem(itemId);
    }
  }

  /**
   * Clear entire basket
   */
  async clearBasket(): Promise<void> {
    if (UsersService.isAuthenticated()) {
      await this.clearDatabaseBasket();
    } else {
      await this.clearLocalStorageBasket();
    }
  }

  /**
   * Sync local storage basket to database when user logs in
   */
  async syncLocalBasketToDatabase(): Promise<void> {
    try {
      const localBasket = this.getLocalStorageItems();
      if (localBasket.length === 0) return;

      // Add local items to database
      for (const item of localBasket) {
        await BasketAxiosService.addToBasket(item.product_id, item.quantity);
      }

      // Clear local storage after successful sync
      this.clearLocalStorage();
      
      console.log('Local basket synced to database successfully');
    } catch (error) {
      console.error('Failed to sync local basket to database:', error);
      throw error;
    }
  }

  /**
   * Get basket count for UI display
   */
  async getBasketCount(): Promise<number> {
    try {
      const basket = await this.getBasket();
      return basket.total_items;
    } catch (error) {
      console.error('Failed to get basket count:', error);
      return 0;
    }
  }

  // =============================================================================
  // DATABASE OPERATIONS (Logged-in users)
  // =============================================================================

  private async getDatabaseBasket(): Promise<BasketData> {
    try {
      const response = await BasketAxiosService.getBasket();
      return response.data;
    } catch (error) {
      console.error('Failed to fetch database basket:', error);
      throw new Error('Failed to fetch basket from server');
    }
  }

  private async addToDatabaseBasket(productId: string, quantity: number): Promise<void> {
    try {
      await BasketAxiosService.addToBasket(productId, quantity);
    } catch (error) {
      console.error('Failed to add item to database basket:', error);
      throw new Error('Failed to add item to basket');
    }
  }

  private async updateDatabaseQuantity(itemId: string, quantity: number): Promise<void> {
    try {
      await BasketAxiosService.updateQuantity(itemId, quantity);
    } catch (error) {
      console.error('Failed to update database basket quantity:', error);
      throw new Error('Failed to update item quantity');
    }
  }

  private async removeDatabaseItem(itemId: string): Promise<void> {
    try {
      await BasketAxiosService.removeItem(itemId);
    } catch (error) {
      console.error('Failed to remove item from database basket:', error);
      throw new Error('Failed to remove item from basket');
    }
  }

  private async clearDatabaseBasket(): Promise<void> {
    try {
      await BasketAxiosService.clearBasket();
    } catch (error) {
      console.error('Failed to clear database basket:', error);
      throw new Error('Failed to clear basket');
    }
  }

  // =============================================================================
  // LOCAL STORAGE OPERATIONS (Non-logged-in users)
  // =============================================================================

  private async getLocalStorageBasket(): Promise<BasketData> {
    try {
      const localItems = this.getLocalStorageItems();
      const items: BasketItem[] = [];
      let subtotal = 0;
      let totalItems = 0;

      // Fetch product details for each item
      for (const localItem of localItems) {
        try {
          // This would need to be implemented to fetch product details
          const productDetails = await this.fetchProductDetails(localItem.product_id);
          
          const basketItem: BasketItem = {
            id: localItem.product_id, // Use product_id as id for localStorage items
            product_id: localItem.product_id,
            name: productDetails.name,
            price: productDetails.price,
            quantity: localItem.quantity,
            image_url: productDetails.image_url,
            slug: productDetails.slug
          };

          items.push(basketItem);
          subtotal += basketItem.price * basketItem.quantity;
          totalItems += basketItem.quantity;
        } catch (error) {
          console.warn(`Failed to fetch details for product ${localItem.product_id}:`, error);
          // Remove invalid items from localStorage
          this.removeLocalStorageItem(localItem.product_id);
        }
      }

      return {
        items,
        total_items: totalItems,
        subtotal
      };
    } catch (error) {
      console.error('Failed to get localStorage basket:', error);
      return { items: [], total_items: 0, subtotal: 0 };
    }
  }

  private async addToLocalStorageBasket(productId: string, quantity: number): Promise<void> {
    const items = this.getLocalStorageItems();
    const existingItemIndex = items.findIndex(item => item.product_id === productId);

    if (existingItemIndex >= 0) {
      // Update existing item quantity
      items[existingItemIndex].quantity += quantity;
    } else {
      // Add new item
      items.push({
        product_id: productId,
        quantity,
        added_at: new Date().toISOString()
      });
    }

    this.saveLocalStorageItems(items);
  }

  private async updateLocalStorageQuantity(itemId: string, quantity: number): Promise<void> {
    const items = this.getLocalStorageItems();
    const itemIndex = items.findIndex(item => item.product_id === itemId);

    if (itemIndex >= 0) {
      if (quantity > 0) {
        items[itemIndex].quantity = quantity;
      } else {
        items.splice(itemIndex, 1);
      }
      this.saveLocalStorageItems(items);
    }
  }

  private async removeLocalStorageItem(itemId: string): Promise<void> {
    const items = this.getLocalStorageItems();
    const filteredItems = items.filter(item => item.product_id !== itemId);
    this.saveLocalStorageItems(filteredItems);
  }

  private async clearLocalStorageBasket(): Promise<void> {
    this.clearLocalStorage();
  }

  // =============================================================================
  // LOCAL STORAGE HELPERS
  // =============================================================================

  private getLocalStorageItems(): LocalStorageBasketItem[] {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (!stored) return [];

      const parsed = JSON.parse(stored);
      
      // Check if data is expired
      if (this.isStorageExpired(parsed.timestamp)) {
        this.clearLocalStorage();
        return [];
      }

      return parsed.items || [];
    } catch (error) {
      console.error('Failed to parse localStorage basket:', error);
      this.clearLocalStorage();
      return [];
    }
  }

  private saveLocalStorageItems(items: LocalStorageBasketItem[]): void {
    try {
      const data = {
        items,
        timestamp: Date.now(),
        version: '1.0'
      };
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.error('Failed to save to localStorage:', error);
      throw new Error('Failed to save basket data');
    }
  }

  private clearLocalStorage(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }

  private isStorageExpired(timestamp: number): boolean {
    const expiryTime = this.STORAGE_EXPIRY_DAYS * 24 * 60 * 60 * 1000; // Convert days to milliseconds
    return Date.now() - timestamp > expiryTime;
  }

  private async fetchProductDetails(productId: string): Promise<any> {
    // This should call your ProductAxiosService to get product details
    // For now, returning mock data - implement actual API call
    try {
      // const response = await ProductAxiosService.getProduct(productId);
      // return response.data;
      
      // Mock implementation
      return {
        name: `Product ${productId}`,
        price: 99.99,
        image_url: '/assets/img/shop/placeholder.png',
        slug: `product-${productId}`
      };
    } catch (error) {
      throw new Error(`Product ${productId} not found`);
    }
  }
}

export const BasketService = new BasketServiceClass();