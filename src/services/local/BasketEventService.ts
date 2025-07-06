// src/services/local/BasketEventService.ts
export class BasketEventService {
  private static readonly BASKET_UPDATED_EVENT = 'basketUpdated';
  
  /**
   * Dispatch a basket update event with latest basket data
   */
  static dispatchBasketUpdate(basketData: {
    itemCount: number;
    subtotal: number;
    items: any[];
  }) {
    const event = new CustomEvent(this.BASKET_UPDATED_EVENT, {
      detail: basketData
    });
    window.dispatchEvent(event);
  }

  /**
   * Subscribe to basket update events
   */
  static subscribe(callback: (basketData: any) => void): () => void {
    const handleBasketUpdate = (event: CustomEvent) => {
      callback(event.detail);
    };

    window.addEventListener(this.BASKET_UPDATED_EVENT, handleBasketUpdate as EventListener);
    
    // Return unsubscribe function
    return () => {
      window.removeEventListener(this.BASKET_UPDATED_EVENT, handleBasketUpdate as EventListener);
    };
  }

  /**
   * Trigger basket reload across all components
   */
  static async triggerBasketReload() {
    // Import dynamically to avoid circular dependencies
    const { BasketAxiosService } = await import('../net/BasketAxiosService');
    await BasketAxiosService.loadBasket();
  }
  
}
