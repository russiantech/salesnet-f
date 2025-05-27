// src/services/BasketService.tsx
import { UsersService } from "./local/UsersService";
import { BasketAxiosService } from "./net/BasketAxiosService";
// import { UserService } from "./UserService";

interface BasketItem {
  id: string;
  product_id: string;
  product_name: string;
  product_image: string;
  price: number;
  quantity: number;
  total: number;
}

interface BasketData {
  items: BasketItem[];
  subtotal: number;
  itemCount: number;
  tax?: number;
  shipping?: number;
  total?: number;
}

type BasketObserver = (basketData: BasketData) => void;

class BasketServiceClass {
  private observers: BasketObserver[] = [];
  private basketData: BasketData = {
    items: [],
    subtotal: 0,
    itemCount: 0
  };

  private readonly STORAGE_KEY = 'shopping_basket';

  constructor() {
    // Load initial basket data
    this.loadBasket();
  }

  // Observer pattern methods
  public subscribe(observer: BasketObserver): () => void {
    this.observers.push(observer);
    // Send current state immediately
    observer(this.basketData);
    
    // Return unsubscribe function
    return () => {
      this.observers = this.observers.filter(obs => obs !== observer);
    };
  }

  private notifyObservers(): void {
    this.observers.forEach(observer => observer(this.basketData));
  }

  // Load basket data based on authentication status
  public async loadBasket(): Promise<void> {
    try {
      if (UsersService.isAuthenticated()) {
        // Load from database for authenticated users
        await this.loadFromDatabase();
      } else {
        // Load from localStorage for guests
        this.loadFromStorage();
      }
    } catch (error) {
      console.error('Failed to load basket:', error);
      // Fallback to localStorage on error
      this.loadFromStorage();
    }
  }

  // Load basket from database (authenticated users)
  private async loadFromDatabase(): Promise<void> {
    try {
      const response = await BasketAxiosService.getBasket();
      this.basketData = {
        items: response.data.items || [],
        subtotal: response.data.subtotal || 0,
        itemCount: response.data.item_count || 0,
        tax: response.data.tax,
        shipping: response.data.shipping,
        total: response.data.total
      };
      this.notifyObservers();
    } catch (error) {
      console.error('Failed to load basket from database:', error);
      throw error;
    }
  }

  // Load basket from localStorage (guest users)
  private loadFromStorage(): void {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        this.basketData = JSON.parse(stored);
      } else {
        this.basketData = { items: [], subtotal: 0, itemCount: 0 };
      }
      this.notifyObservers();
    } catch (error) {
      console.error('Failed to load basket from storage:', error);
      this.basketData = { items: [], subtotal: 0, itemCount: 0 };
      this.notifyObservers();
    }
  }

  // Save basket to localStorage
  private saveToStorage(): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.basketData));
    } catch (error) {
      console.error('Failed to save basket to storage:', error);
    }
  }

  // Add item to basket
  public async addItem(productId: string, quantity: number = 1): Promise<void> {
    try {
      if (UserService.isAuthenticated()) {
        await BasketAxiosService.addToBasket(productId, quantity);
        await this.loadFromDatabase();
      } else {
        await this.addItemToStorage(productId, quantity);
      }
    } catch (error) {
      console.error('Failed to add item to basket:', error);
      throw error;
    }
  }

  // Add item to localStorage basket
  private async addItemToStorage(productId: string, quantity: number): Promise<void> {
    try {
      // Get product details (you'll need a product service for this)
      // For now, using placeholder data
      const existingItemIndex = this.basketData.items.findIndex(
        item => item.product_id === productId
      );

      if (existingItemIndex >= 0) {
        // Update existing item
        this.basketData.items[existingItemIndex].quantity += quantity;
        this.basketData.items[existingItemIndex].total = 
          this.basketData.items[existingItemIndex].price * 
          this.basketData.items[existingItemIndex].quantity;
      } else {
        // Add new item (you'd fetch product details here)
        const newItem: BasketItem = {
          id: `local_${Date.now()}`,
          product_id: productId,
          product_name: `Product ${productId}`, // Fetch from product service
          product_image: '/assets/img/shop/electronics/thumbs/08.png',
          price: 99.99, // Fetch from product service
          quantity: quantity,
          total: 99.99 * quantity
        };
        this.basketData.items.push(newItem);
      }

      this.recalculateBasket();
      this.saveToStorage();
      this.notifyObservers();
    } catch (error) {
      console.error('Failed to add item to storage basket:', error);
      throw error;
    }
  }

  // Update item quantity
  public async updateQuantity(itemId: string, newQuantity: number): Promise<void> {
    try {
      if (UserService.isAuthenticated()) {
        await BasketAxiosService.updateQuantity(itemId, newQuantity);
        await this.loadFromDatabase();
      } else {
        this.updateQuantityInStorage(itemId, newQuantity);
      }
    } catch (error) {
      console.error('Failed to update quantity:', error);
      throw error;
    }
  }

  // Update quantity in localStorage
  private updateQuantityInStorage(itemId: string, newQuantity: number): void {
    const itemIndex = this.basketData.items.findIndex(item => item.id === itemId);
    if (itemIndex >= 0) {
      this.basketData.items[itemIndex].quantity = newQuantity;
      this.basketData.items[itemIndex].total = 
        this.basketData.items[itemIndex].price * newQuantity;
      
      this.recalculateBasket();
      this.saveToStorage();
      this.notifyObservers();
    }
  }

  // Remove item from basket
  public async removeItem(itemId: string): Promise<void> {
    try {
      if (UserService.isAuthenticated()) {
        await BasketAxiosService.removeFromBasket(itemId);
        await this.loadFromDatabase();
      } else {
        this.removeItemFromStorage(itemId);
      }
    } catch (error) {
      console.error('Failed to remove item:', error);
      throw error;
    }
  }

  // Remove item from localStorage
  private removeItemFromStorage(itemId: string): void {
    this.basketData.items = this.basketData.items.filter(item => item.id !== itemId);
    this.recalculateBasket();
    this.saveToStorage();
    this.notifyObservers();
  }

  // Clear entire basket
  public async clearBasket(): Promise<void> {
    try {
      if (UserService.isAuthenticated()) {
        await BasketAxiosService.clearBasket();
      } else {
        localStorage.removeItem(this.STORAGE_KEY);
      }
      
      this.basketData = { items: [], subtotal: 0, itemCount: 0 };
      this.notifyObservers();
    } catch (error) {
      console.error('Failed to clear basket:', error);
      throw error;
    }
  }

  // Migrate localStorage basket to database when user logs in
  public async migrateToDatabase(): Promise<void> {
    if (this.basketData.items.length === 0) return;

    try {
      const localItems = this.basketData.items.map(item => ({
        product_id: item.product_id,
        quantity: item.quantity
      }));

      await BasketAxiosService.addMultipleToBasket(
        localItems.map(item => item.product_id),
        localItems.map(item => item.quantity)
      );

      // Clear local storage after successful migration
      localStorage.removeItem(this.STORAGE_KEY);
      
      // Reload from database
      await this.loadFromDatabase();
    } catch (error) {
      console.error('Failed to migrate basket to database:', error);
      throw error;
    }
  }

  // Recalculate basket totals
  private recalculateBasket(): void {
    this.basketData.subtotal = this.basketData.items.reduce(
      (sum, item) => sum + item.total, 0
    );
    this.basketData.itemCount = this.basketData.items.reduce(
      (sum, item) => sum + item.quantity, 0
    );
  }

  // Get current basket data
  public getBasketData(): BasketData {
    return { ...this.basketData };
  }

  // Get item count for badge display
  public getItemCount(): number {
    return this.basketData.itemCount;
  }

  // Check if item is in basket
  public hasItem(productId: string): boolean {
    return this.basketData.items.some(item => item.product_id === productId);
  }

  // Get item quantity
  public getItemQuantity(productId: string): number {
    const item = this.basketData.items.find(item => item.product_id === productId);
    return item ? item.quantity : 0;
  }
}

export const BasketService = new BasketServiceClass();