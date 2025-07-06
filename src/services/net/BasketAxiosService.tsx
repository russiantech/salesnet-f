// // src/services/BasketService.ts
// import { UsersService } from "../local/UsersService";
// import { AxiosService } from "./base/AxiosService";
// import { ProductAxiosService } from "./ProductAxiosService";

// interface BasketItem {
//   id: string | number;
//   product_id: string | number;
//   name: string;
//   price: number;
//   quantity: number;
//   image?: string;
//   slug?: string;
//   created_at?: string;
//   updated_at?: string;
// }

// interface BasketResponse {
//   success: boolean;
//   message: string;
//   basket_items?: Array<{
//     id: number;
//     product_id: number;
//     name: string;
//     image: string;
//     price: string;
//     quantity: number;
//     created_at: string;
//     updated_at: string;
//   }>;
//   page_meta?: {
//     current_page_number: number;
//     total_items_count: number;
//     total_pages_count: number;
//   };
// }

// interface BasketData {
//   items: BasketItem[];
//   subtotal: number;
//   itemCount: number;
//   pageMeta?: {
//     currentPage: number;
//     totalItems: number;
//     totalPages: number;
//   };
// }

// type BasketObserver = (basketData: BasketData) => void;

// class BasketService {
//   private static instance: BasketService;
//   private observers: BasketObserver[] = [];
//   private basketData: BasketData = {
//     items: [],
//     subtotal: 0,
//     itemCount: 0
//   };

//   private readonly STORAGE_KEY = 'shopping_basket';

//   private constructor() {
//     this.initialize();
//   }

//   public static getInstance(): BasketService {
//     if (!BasketService.instance) {
//       BasketService.instance = new BasketService();
//     }
//     return BasketService.instance;
//   }

//   private async initialize(): Promise<void> {
//     UsersService.subscribe(() => this.handleAuthChange());
//     await this.loadBasket();
//   }

//   private async handleAuthChange(): Promise<void> {
//     if (UsersService.isAuthenticated()) {
//       await this.migrateToServer();
//     }
//     await this.loadBasket();
//   }

//   // Public API
//   public subscribe(observer: BasketObserver): () => void {
//     this.observers.push(observer);
//     observer(this.basketData);
//     return () => {
//       this.observers = this.observers.filter(obs => obs !== observer);
//     };
//   }

//   public async loadBasket(): Promise<void> {
//     try {
//       if (UsersService.isAuthenticated()) {
//         await this.loadFromServer();
//       } else {
//         this.loadFromLocalStorage();
//       }
//     } catch (error) {
//       console.error('Failed to load basket:', error);
//       this.loadFromLocalStorage();
//     }
//   }

//   public async addItem(productId: string | number, quantity: number = 1): Promise<void> {
//     if (UsersService.isAuthenticated()) {
//       await this.addItemToServer(productId, quantity);
//     } else {
//       await this.addItemToLocalStorage(productId, quantity);
//     }
//     await this.loadBasket();
//   }

//   public async updateQuantity(itemId: string | number, newQuantity: number): Promise<void> {
//     if (newQuantity < 1) {
//       await this.removeItem(itemId);
//       return;
//     }

//     if (UsersService.isAuthenticated()) {
//       await this.updateQuantityOnServer(itemId, newQuantity);
//     } else {
//       this.updateQuantityInLocalStorage(itemId, newQuantity);
//     }
//     await this.loadBasket();
//   }

//   public async removeItem(itemId: string | number): Promise<void> {
//     if (UsersService.isAuthenticated()) {
//       await this.removeItemFromServer(itemId);
//     } else {
//       this.removeItemFromLocalStorage(itemId);
//     }
//     await this.loadBasket();
//   }

//   public async clearBasket(): Promise<void> {
//     if (UsersService.isAuthenticated()) {
//       await this.clearServerBasket();
//     } else {
//       this.clearLocalBasket();
//     }
//     await this.loadBasket();
//   }

//   public getBasketData(): BasketData {
//     return { ...this.basketData };
//   }

//   public getItemCount(): number {
//     return this.basketData.itemCount;
//   }

//   public hasItem(productId: string | number): boolean {
//     return this.basketData.items.some(item => item.product_id === productId);
//   }

//   public getItemQuantity(productId: string | number): number {
//     const item = this.basketData.items.find(item => item.product_id === productId);
//     return item ? item.quantity : 0;
//   }

//   // Private methods
//   private notifyObservers(): void {
//     this.observers.forEach(observer => observer(this.basketData));
//   }

//   private async loadFromServer(): Promise<void> {
//     try {
//       const response = await AxiosService.json.get<BasketResponse>('/basket');
//       this.updateBasketData(this.transformServerResponse(response.data));
//     } catch (error) {
//       console.error('Failed to load basket from server:', error);
//       throw error;
//     }
//   }

//   private loadFromLocalStorage(): void {
//     try {
//       const stored = localStorage.getItem(this.STORAGE_KEY);
//       const data = stored ? JSON.parse(stored) : { items: [], subtotal: 0, itemCount: 0 };
//       this.updateBasketData(data);
//     } catch (error) {
//       console.error('Failed to load basket from localStorage:', error);
//       this.updateBasketData({ items: [], subtotal: 0, itemCount: 0 });
//     }
//   }

//   private transformServerResponse(response: BasketResponse): BasketData {
//     if (!response.basket_items) {
//       return { items: [], subtotal: 0, itemCount: 0 };
//     }

//     const items = response.basket_items.map(item => ({
//       id: item.id,
//       product_id: item.product_id,
//       name: item.name,
//       image: item.image,
//       price: parseFloat(item.price),
//       quantity: item.quantity,
//       created_at: item.created_at,
//       updated_at: item.updated_at
//     }));
 
//     const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
//     const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

//     return {
//       items,
//       subtotal,
//       itemCount,
//       pageMeta: response.page_meta ? {
//         currentPage: response.page_meta.current_page_number,
//         totalItems: response.page_meta.total_items_count,
//         totalPages: response.page_meta.total_pages_count
//       } : undefined
//     };
//   }

//   private async addItemToServer(productId: string | number, quantity: number): Promise<void> {
//     try {
//       await AxiosService.json.post('/basket', {
//         product_id: productId,
//         quantity
//       });
//     } catch (error) {
//       console.error('Failed to add item to server basket:', error);
//       throw error;
//     }
//   }

//   private async addItemToLocalStorage(productId: string | number, quantity: number): Promise<void> {
//     try {
//       const existingItemIndex = this.basketData.items.findIndex(
//         item => item.product_id === productId
//       );

//       if (existingItemIndex >= 0) {
//         this.basketData.items[existingItemIndex].quantity += quantity;
//       } else {
//         // Fetch product details if available
//         const productDetails = await ProductAxiosService.fetchPage(productId.toString());
//         const newItem: BasketItem = {
//           id: `local_${Date.now()}`,
//           product_id: productId,
//           name: productDetails?.name || `Product ${productId}`,
//           price: productDetails?.price || 0,
//           quantity,
//           image: productDetails?.image,
//           slug: productDetails?.slug
//         };
//         this.basketData.items.push(newItem);
//       }

//       this.recalculateBasket();
//       this.saveToLocalStorage();
//     } catch (error) {
//       console.error('Failed to add item to local basket:', error);
//       throw error;
//     }
//   }

//   private async updateQuantityOnServer(itemId: string | number, quantity: number): Promise<void> {
//     try {
//       await AxiosService.json.put(`/basket/${itemId}`, { quantity });
//     } catch (error) {
//       console.error('Failed to update quantity on server:', error);
//       throw error;
//     }
//   }

//   private updateQuantityInLocalStorage(itemId: string | number, quantity: number): void {
//     const itemIndex = this.basketData.items.findIndex(item => item.id === itemId);
//     if (itemIndex >= 0) {
//       this.basketData.items[itemIndex].quantity = quantity;
//       this.recalculateBasket();
//       this.saveToLocalStorage();
//     }
//   }

//   // private async removeItemFromServer(itemId: string | number): Promise<void> {
//   //   try {
//   //     await AxiosService.json.delete(`/basket/${itemId}`);
//   //   } catch (error) {
//   //     console.error('Failed to remove item from server:', error);
//   //     throw error;
//   //   }
//   // }
  
//   private async removeItemFromServer(itemId: string | number): Promise<void> {
//     try {
//       // Find the item to get its product_id
//       const item = this.basketData.items.find(item => item.id === itemId);
//       if (!item) {
//         throw new Error('Item not found in basket');
//       }

//       // Use the main DELETE /basket endpoint with product_id
//       await AxiosService.json.delete('/basket', {
//         data: { product_id: item.product_id }
//       });
//     } catch (error) {
//       console.error('Failed to remove item from server:', error);
//       throw error;
//     }
//   }

//   // Enhanced local storage methods
//   private removeItemFromLocalStorage(itemId: string | number): void {
//     const initialLength = this.basketData.items.length;
//     this.basketData.items = this.basketData.items.filter(item => item.id !== itemId);
    
//     if (this.basketData.items.length < initialLength) {
//       this.recalculateBasket();
//       this.saveToLocalStorage();
//     }
//   }

//   // private removeItemFromLocalStorage(itemId: string | number): void {
//   //   this.basketData.items = this.basketData.items.filter(item => item.id !== itemId);
//   //   this.recalculateBasket();
//   //   this.saveToLocalStorage();
//   // }

//   // private async clearServerBasket(): Promise<void> {
//   //   try {
//   //     await AxiosService.json.delete('/basket');
//   //   } catch (error) {
//   //     console.error('Failed to clear server basket:', error);
//   //     throw error;
//   //   }
//   // }

//   private async clearServerBasket(): Promise<void> {
//     try {
//       // Send empty payload to clear entire basket
//       await AxiosService.json.delete('/basket', {
//         data: {}
//       });
//     } catch (error) {
//       console.error('Failed to clear server basket:', error);
//       throw error;
//     }
//   }

  
//   // Alternative method if you prefer the individual endpoint approach
//   // @ts-ignore -> this directive surpresses typescript warnings when 
//   // function is'nt being used just yet.
//   private async removeItemFromServerAlternative(itemId: string | number): Promise<void> {
//     try {
//       // Find the item to get its product_id
//       const item = this.basketData.items.find(item => item.id === itemId);
//       if (!item) {
//         throw new Error('Item not found in basket');
//       }

//       // Use the individual product endpoint
//       await AxiosService.json.delete(`/basket/${item.product_id}`);
//     } catch (error) {
//       console.error('Failed to remove item from server:', error);
//       throw error;
//     }
//   }

//     // Batch removal method for multiple items
//   public async removeMultipleItems(itemIds: (string | number)[]): Promise<void> {
//     if (UsersService.isAuthenticated()) {
//       await this.removeMultipleItemsFromServer(itemIds);
//     } else {
//       itemIds.forEach(itemId => this.removeItemFromLocalStorage(itemId));
//     }
//     await this.loadBasket();
//   }

//   private async removeMultipleItemsFromServer(itemIds: (string | number)[]): Promise<void> {
//     try {
//       // Convert item IDs to product IDs
//       const items = itemIds.map(itemId => {
//         const item = this.basketData.items.find(item => item.id === itemId);
//         if (!item) {
//           throw new Error(`Item with ID ${itemId} not found in basket`);
//         }
//         return { product_id: item.product_id };
//       });

//       // Use the main DELETE /basket endpoint with multiple items
//       await AxiosService.json.delete('/basket', {
//         data: { items }
//       });
//     } catch (error) {
//       console.error('Failed to remove multiple items from server:', error);
//       throw error;
//     }
//   }

//   // 

//   // private clearLocalBasket(): void {
//   //   localStorage.removeItem(this.STORAGE_KEY);
//   // }
//   private clearLocalBasket(): void {
//     this.basketData = {
//       items: [],
//       subtotal: 0,
//       itemCount: 0
//     };
//     localStorage.removeItem(this.STORAGE_KEY);
//     this.notifyObservers();
//   }

//   private async migrateToServer(): Promise<void> {
//     if (this.basketData.items.length === 0) return;

//     try {
//       const items = this.basketData.items.map(item => ({
//         product_id: item.product_id,
//         quantity: item.quantity
//       }));

//       await AxiosService.json.post('/basket', { items });
//       localStorage.removeItem(this.STORAGE_KEY);
//     } catch (error) {
//       console.error('Failed to migrate basket to server:', error);
//       throw error;
//     }
//   }

//   private updateBasketData(newData: Partial<BasketData>): void {
//     this.basketData = {
//       ...this.basketData,
//       ...newData
//     };
//     this.recalculateBasket();
//     this.notifyObservers();
//   }

//   private recalculateBasket(): void {
//     this.basketData.subtotal = this.basketData.items.reduce(
//       (sum, item) => sum + (item.price * item.quantity), 0
//     );
//     this.basketData.itemCount = this.basketData.items.reduce(
//       (sum, item) => sum + item.quantity, 0
//     );
//     this.saveToLocalStorage();
//   }

//   private saveToLocalStorage(): void {
//     if (!UsersService.isAuthenticated()) {
//       localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.basketData));
//     }
//   }
// }

// export const BasketAxiosService = BasketService.getInstance();


// 

// src/services/BasketService.ts
import { UsersService } from "../local/UsersService";
import { AxiosService } from "./base/AxiosService";
import { ProductAxiosService } from "./ProductAxiosService";

interface BasketItem {
  id: string | number;
  product_id: string | number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  slug?: string;
  created_at?: string;
  updated_at?: string;
}

interface BasketResponse {
  success: boolean;
  message: string;
  basket_items?: Array<{
    id: number;
    product_id: number;
    name: string;
    image: string;
    slug: string;
    price: string;
    quantity: number;
    created_at: string;
    updated_at: string;
  }>;
  page_meta?: {
    current_page_number: number;
    total_items_count: number;
    total_pages_count: number;
  };
}

interface BasketData {
  items: BasketItem[];
  subtotal: number;
  itemCount: number;
  pageMeta?: {
    currentPage: number;
    totalItems: number;
    totalPages: number;
  };
}

interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
}

type BasketObserver = (basketData: BasketData) => void;

/**
 * Professional BasketService with comprehensive error handling and API alignment
 * Supports both authenticated (server-side) and non-authenticated (localStorage) operations
 */
class BasketService {
  private static instance: BasketService;
  private observers: BasketObserver[] = [];
  private basketData: BasketData = {
    items: [],
    subtotal: 0,
    itemCount: 0
  };
  private isLoading = false;
  private isInitialized = false;

  private readonly STORAGE_KEY = 'shopping_basket';
  private readonly MAX_RETRIES = 3;
  private readonly RETRY_DELAY = 1000; // 1 second

  private constructor() {
    this.initialize();
  }

  public static getInstance(): BasketService {
    if (!BasketService.instance) {
      BasketService.instance = new BasketService();
    }
    return BasketService.instance;
  }

  /**
   * Initialize the service and set up authentication change listeners
   */
  private async initialize(): Promise<void> {
    try {
      UsersService.subscribe(() => this.handleAuthChange());
      await this.loadBasket();
      this.isInitialized = true;
    } catch (error) {
      console.error('Failed to initialize BasketService:', error);
      this.loadFromLocalStorage(); // Fallback to localStorage
      this.isInitialized = true;
    }
  }

  /**
   * Handle authentication state changes
   */
  private async handleAuthChange(): Promise<void> {
    if (!this.isInitialized) return;
    
    try {
      if (UsersService.isAuthenticated()) {
        await this.migrateToServer();
      }
      await this.loadBasket();
    } catch (error) {
      console.error('Failed to handle auth change:', error);
      // Don't throw - continue with current state
    }
  }

  // ========== PUBLIC API METHODS ==========

  /**
   * Subscribe to basket changes
   */
  public subscribe(observer: BasketObserver): () => void {
    this.observers.push(observer);
    // Immediately notify with current data
    observer(this.getBasketData());
    
    return () => {
      this.observers = this.observers.filter(obs => obs !== observer);
    };
  }

  /**
   * Load basket data from appropriate source
   */
  public async loadBasket(): Promise<void> {
    if (this.isLoading) return;
    
    this.isLoading = true;
    try {
      if (UsersService.isAuthenticated()) {
        await this.loadFromServer();
      } else {
        this.loadFromLocalStorage();
      }
    } catch (error) {
      console.error('Failed to load basket:', error);
      this.loadFromLocalStorage(); // Fallback
      throw error;
    } finally {
      this.isLoading = false;
    }
  }

  /**
   * Add item to basket with proper quantity handling
   */
  public async addItem(productId: string | number, quantity: number = 1): Promise<void> {
    if (quantity <= 0) {
      throw new Error('Quantity must be greater than 0');
    }

    try {
      if (UsersService.isAuthenticated()) {
        await this.addItemToServer(productId, quantity);
      } else {
        await this.addItemToLocalStorage(productId, quantity);
      }
      await this.loadBasket();
    } catch (error) {
      console.error('Failed to add item:', error);
      throw error;
    }
  }

  /**
   * Add multiple items to basket
   */
  public async addMultipleItems(items: Array<{ product_id: string | number; quantity: number }>): Promise<void> {
    // Validate all items first
    for (const item of items) {
      if (item.quantity <= 0) {
        throw new Error(`Invalid quantity ${item.quantity} for product ${item.product_id}`);
      }
    }

    try {
      if (UsersService.isAuthenticated()) {
        await this.addMultipleItemsToServer(items);
      } else {
        for (const item of items) {
          await this.addItemToLocalStorage(item.product_id, item.quantity);
        }
      }
      await this.loadBasket();
    } catch (error) {
      console.error('Failed to add multiple items:', error);
      throw error;
    }
  }

  /**
   * Update item quantity with validation
   */
  public async updateQuantity(itemId: string | number, newQuantity: number): Promise<void> {
    if (newQuantity < 0) {
      throw new Error('Quantity cannot be negative');
    }

    if (newQuantity === 0) {
      await this.removeItem(itemId);
      return;
    }

    try {
      if (UsersService.isAuthenticated()) {
        await this.updateQuantityOnServer(itemId, newQuantity);
      } else {
        this.updateQuantityInLocalStorage(itemId, newQuantity);
      }
      await this.loadBasket();
    } catch (error) {
      console.error('Failed to update quantity:', error);
      throw error;
    }
  }

  /**
   * Remove single item from basket
   */
  public async removeItem(itemId: string | number): Promise<void> {
    try {
      if (UsersService.isAuthenticated()) {
        await this.removeItemFromServer(itemId);
      } else {
        this.removeItemFromLocalStorage(itemId);
      }
      await this.loadBasket();
    } catch (error) {
      console.error('Failed to remove item:', error);
      throw error;
    }
  }

  /**
   * Remove multiple items from basket
   */
  public async removeMultipleItems(itemIds: (string | number)[]): Promise<void> {
    if (itemIds.length === 0) return;

    try {
      if (UsersService.isAuthenticated()) {
        await this.removeMultipleItemsFromServer(itemIds);
      } else {
        itemIds.forEach(itemId => this.removeItemFromLocalStorage(itemId));
      }
      await this.loadBasket();
    } catch (error) {
      console.error('Failed to remove multiple items:', error);
      throw error;
    }
  }

  /**
   * Reduce item quantity by specified amount
   */
  public async reduceQuantity(itemId: string | number, quantityToReduce: number): Promise<void> {
    if (quantityToReduce <= 0) {
      throw new Error('Quantity to reduce must be greater than 0');
    }

    const item = this.basketData.items.find(item => item.id === itemId);
    if (!item) {
      throw new Error('Item not found in basket');
    }

    const newQuantity = item.quantity - quantityToReduce;
    if (newQuantity <= 0) {
      await this.removeItem(itemId);
    } else {
      await this.updateQuantity(itemId, newQuantity);
    }
  }

  /**
   * Clear entire basket
   */
  public async clearBasket(): Promise<void> {
    try {
      if (UsersService.isAuthenticated()) {
        await this.clearServerBasket();
      } else {
        this.clearLocalBasket();
      }
      await this.loadBasket();
    } catch (error) {
      console.error('Failed to clear basket:', error);
      throw error;
    }
  }

  /**
   * Get current basket data (immutable copy)
   */
  public getBasketData(): BasketData {
    return {
      items: [...this.basketData.items],
      subtotal: this.basketData.subtotal,
      itemCount: this.basketData.itemCount,
      pageMeta: this.basketData.pageMeta ? { ...this.basketData.pageMeta } : undefined
    };
  }

  /**
   * Get total item count
   */
  public getItemCount(): number {
    return this.basketData.itemCount;
  }

  /**
   * Check if product exists in basket
   */
  public hasItem(productId: string | number): boolean {
    return this.basketData.items.some(item => 
      item.product_id.toString() === productId.toString()
    );
  }

  /**
   * Get quantity of specific product in basket
   */
  public getItemQuantity(productId: string | number): number {
    const item = this.basketData.items.find(item => 
      item.product_id.toString() === productId.toString()
    );
    return item ? item.quantity : 0;
  }

  /**
   * Get specific item by product ID
   */
  public getItem(productId: string | number): BasketItem | null {
    const item = this.basketData.items.find(item => 
      item.product_id.toString() === productId.toString()
    );
    return item ? { ...item } : null;
  }

  /**
   * Check if basket is empty
   */
  public isEmpty(): boolean {
    return this.basketData.items.length === 0;
  }

  /**
   * Get basket subtotal
   */
  public getSubtotal(): number {
    return this.basketData.subtotal;
  }

  // ========== PRIVATE SERVER METHODS ==========

  /**
   * Load basket from server with retry logic
   */
  private async loadFromServer(): Promise<void> {
    let retries = 0;
    while (retries < this.MAX_RETRIES) {
      try {
        const response = await AxiosService.json.get<BasketResponse>('/basket');
        if (response.data.success) {
          this.updateBasketData(this.transformServerResponse(response.data));
          return;
        } else {
          throw new Error(response.data.message || 'Failed to load basket');
        }
      } catch (error) {
        retries++;
        if (retries >= this.MAX_RETRIES) {
          throw error;
        }
        await this.delay(this.RETRY_DELAY * retries);
      }
    }
  }

  /**
   * Add single item to server
   */
  private async addItemToServer(productId: string | number, quantity: number): Promise<void> {
    const response = await AxiosService.json.post<ApiResponse>('/basket', {
      product_id: productId,
      quantity
    });

    if (!response.data.success) {
      throw new Error(response.data.message || 'Failed to add item to basket');
    }
  }

  /**
   * Add multiple items to server
   */
  private async addMultipleItemsToServer(items: Array<{ product_id: string | number; quantity: number }>): Promise<void> {
    const response = await AxiosService.json.post<ApiResponse>('/basket', {
      items: items.map(item => ({
        product_id: item.product_id,
        quantity: item.quantity
      }))
    });

    if (!response.data.success) {
      throw new Error(response.data.message || 'Failed to add items to basket');
    }
  }

  /**
   * Update item quantity on server
   */
  private async updateQuantityOnServer(itemId: string | number, quantity: number): Promise<void> {
    const item = this.basketData.items.find(item => item.id === itemId);
    if (!item) {
      throw new Error('Item not found in basket');
    }

    // Calculate the difference and use the appropriate method
    const currentQuantity = item.quantity;
    const difference = quantity - currentQuantity;

    if (difference > 0) {
      // Add more items
      await this.addItemToServer(item.product_id, difference);
    } else if (difference < 0) {
      // Reduce items
      await this.reduceItemOnServer(item.product_id, Math.abs(difference));
    }
    // If difference is 0, no action needed
  }

  /**
   * Reduce item quantity on server
   */
  private async reduceItemOnServer(productId: string | number, quantityToReduce: number): Promise<void> {
    const response = await AxiosService.json.delete<ApiResponse>('/basket', {
      data: { 
        product_id: productId, 
        quantity: quantityToReduce 
      }
    });

    if (!response.data.success) {
      throw new Error(response.data.message || 'Failed to reduce item quantity');
    }
  }

  /**
   * Remove item from server
   */
  private async removeItemFromServer(itemId: string | number): Promise<void> {
    const item = this.basketData.items.find(item => item.id === itemId);
    if (!item) {
      throw new Error('Item not found in basket');
    }

    const response = await AxiosService.json.delete<ApiResponse>('/basket', {
      data: { product_id: item.product_id }
    });

    if (!response.data.success) {
      throw new Error(response.data.message || 'Failed to remove item from basket');
    }
  }

  /**
   * Remove multiple items from server
   */
  private async removeMultipleItemsFromServer(itemIds: (string | number)[]): Promise<void> {
    const items = itemIds.map(itemId => {
      const item = this.basketData.items.find(item => item.id === itemId);
      if (!item) {
        throw new Error(`Item with ID ${itemId} not found in basket`);
      }
      return { product_id: item.product_id };
    });

    const response = await AxiosService.json.delete<ApiResponse>('/basket', {
      data: { items }
    });

    if (!response.data.success) {
      throw new Error(response.data.message || 'Failed to remove items from basket');
    }
  }

  /**
   * Clear server basket
   */
  private async clearServerBasket(): Promise<void> {
    const response = await AxiosService.json.delete<ApiResponse>('/basket', {
      data: {}
    });

    if (!response.data.success) {
      throw new Error(response.data.message || 'Failed to clear basket');
    }
  }

  // ========== PRIVATE LOCAL STORAGE METHODS ==========

  /**
   * Load basket from localStorage
   */
  private loadFromLocalStorage(): void {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      const data = stored ? JSON.parse(stored) : { items: [], subtotal: 0, itemCount: 0 };
      
      // Validate stored data structure
      if (!data.items || !Array.isArray(data.items)) {
        data.items = [];
      }
      
      this.updateBasketData(data);
    } catch (error) {
      console.error('Failed to load basket from localStorage:', error);
      this.updateBasketData({ items: [], subtotal: 0, itemCount: 0 });
    }
  }

  /**
   * Add item to localStorage
   */
  private async addItemToLocalStorage(productId: string | number, quantity: number): Promise<void> {
    try {
      const existingItemIndex = this.basketData.items.findIndex(
        item => item.product_id.toString() === productId.toString()
      );

      if (existingItemIndex >= 0) {
        // Update existing item
        this.basketData.items[existingItemIndex].quantity += quantity;
      } else {
        // Add new item - fetch product details
        let productDetails: any = null;
        try {
          productDetails = await ProductAxiosService.fetchPage(productId.toString());
        } catch (error) {
          console.warn('Failed to fetch product details:', error);
        }

        const newItem: BasketItem = {
          id: `local_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          product_id: productId,
          name: productDetails?.name || `Product ${productId}`,
          price: productDetails?.price || 0,
          quantity,
          image: productDetails?.image,
          slug: productDetails?.slug,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        };
        
        this.basketData.items.push(newItem);
      }

      this.recalculateBasket();
      this.saveToLocalStorage();
    } catch (error) {
      console.error('Failed to add item to local basket:', error);
      throw error;
    }
  }

  /**
   * Update quantity in localStorage
   */
  private updateQuantityInLocalStorage(itemId: string | number, quantity: number): void {
    const itemIndex = this.basketData.items.findIndex(item => 
      item.id.toString() === itemId.toString()
    );
    
    if (itemIndex >= 0) {
      this.basketData.items[itemIndex].quantity = quantity;
      this.basketData.items[itemIndex].updated_at = new Date().toISOString();
      this.recalculateBasket();
      this.saveToLocalStorage();
    } else {
      throw new Error('Item not found in local basket');
    }
  }

  /**
   * Remove item from localStorage
   */
  private removeItemFromLocalStorage(itemId: string | number): void {
    const initialLength = this.basketData.items.length;
    this.basketData.items = this.basketData.items.filter(item => 
      item.id.toString() !== itemId.toString()
    );
    
    if (this.basketData.items.length < initialLength) {
      this.recalculateBasket();
      this.saveToLocalStorage();
    } else {
      throw new Error('Item not found in local basket');
    }
  }

  /**
   * Clear local basket
   */
  private clearLocalBasket(): void {
    this.basketData = {
      items: [],
      subtotal: 0,
      itemCount: 0
    };
    localStorage.removeItem(this.STORAGE_KEY);
    this.notifyObservers();
  }

  // ========== PRIVATE UTILITY METHODS ==========

  /**
   * Transform server response to internal format
   */
  private transformServerResponse(response: BasketResponse): BasketData {
    if (!response.basket_items || !Array.isArray(response.basket_items)) {
      return { items: [], subtotal: 0, itemCount: 0 };
    }

    const items = response.basket_items.map(item => ({
      id: item.id,
      product_id: item.product_id,
      name: item.name,
      slug: item.slug,
      image: item.image,
      price: typeof item.price === 'string' ? parseFloat(item.price) : item.price,
      quantity: item.quantity,
      created_at: item.created_at,
      updated_at: item.updated_at
    }));

    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

    return {
      items,
      subtotal: Math.round(subtotal * 100) / 100, // Round to 2 decimal places
      itemCount,
      pageMeta: response.page_meta ? {
        currentPage: response.page_meta.current_page_number,
        totalItems: response.page_meta.total_items_count,
        totalPages: response.page_meta.total_pages_count
      } : undefined
    };
  }

  /**
   * Migrate localStorage basket to server
   */
  private async migrateToServer(): Promise<void> {
    if (this.basketData.items.length === 0) return;

    try {
      const items = this.basketData.items.map(item => ({
        product_id: item.product_id,
        quantity: item.quantity
      }));

      await this.addMultipleItemsToServer(items);
      localStorage.removeItem(this.STORAGE_KEY);
      console.log('Successfully migrated basket to server');
    } catch (error) {
      console.error('Failed to migrate basket to server:', error);
      // Don't throw - allow the user to continue with localStorage
    }
  }

  /**
   * Update basket data and notify observers
   */
  private updateBasketData(newData: Partial<BasketData>): void {
    this.basketData = {
      ...this.basketData,
      ...newData
    };
    this.recalculateBasket();
    this.notifyObservers();
  }

  /**
   * Recalculate basket totals
   */
  private recalculateBasket(): void {
    this.basketData.subtotal = Math.round(
      this.basketData.items.reduce((sum, item) => sum + (item.price * item.quantity), 0) * 100
    ) / 100;
    
    this.basketData.itemCount = this.basketData.items.reduce(
      (sum, item) => sum + item.quantity, 0
    );
    
    if (!UsersService.isAuthenticated()) {
      this.saveToLocalStorage();
    }
  }

  /**
   * Save basket to localStorage
   */
  private saveToLocalStorage(): void {
    try {
      if (!UsersService.isAuthenticated()) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify({
          items: this.basketData.items,
          subtotal: this.basketData.subtotal,
          itemCount: this.basketData.itemCount,
          lastUpdated: new Date().toISOString()
        }));
      }
    } catch (error) {
      console.error('Failed to save basket to localStorage:', error);
    }
  }

  /**
   * Notify all observers of basket changes
   */
  private notifyObservers(): void {
    const basketData = this.getBasketData();
    this.observers.forEach(observer => {
      try {
        observer(basketData);
      } catch (error) {
        console.error('Error in basket observer:', error);
      }
    });
  }

  /**
   * Utility method for delays
   */
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // ========== PUBLIC UTILITY METHODS ==========

  /**
   * Refresh basket data from source
   */
  public async refresh(): Promise<void> {
    await this.loadBasket();
  }

  /**
   * Get loading state
   */
  public isLoadingBasket(): boolean {
    return this.isLoading;
  }

  /**
   * Validate basket integrity
   */
  public validateBasket(): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    // Check for duplicate items
    const productIds = this.basketData.items.map(item => item.product_id.toString());
    const uniqueProductIds = new Set(productIds);
    if (productIds.length !== uniqueProductIds.size) {
      errors.push('Duplicate items found in basket');
    }

    // Check for invalid quantities
    this.basketData.items.forEach(item => {
      if (item.quantity <= 0) {
        errors.push(`Invalid quantity for item ${item.name}: ${item.quantity}`);
      }
      if (item.price < 0) {
        errors.push(`Invalid price for item ${item.name}: ${item.price}`);
      }
    });

    // Check subtotal calculation
    const calculatedSubtotal = Math.round(
      this.basketData.items.reduce((sum, item) => sum + (item.price * item.quantity), 0) * 100
    ) / 100;
    
    if (Math.abs(calculatedSubtotal - this.basketData.subtotal) > 0.01) {
      errors.push('Subtotal calculation mismatch');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }
}

// Export singleton instance
export const BasketAxiosService = BasketService.getInstance();