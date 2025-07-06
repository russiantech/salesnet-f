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

// Enhanced BasketButton with event-driven updates
// src/components/product/BasketButton.tsx
import { useState, useEffect } from 'react';
import { LoadingZoom } from '../../../components/shared/LoadingSpinner';
import { NotificationService } from '../../../services/local/NotificationService';
import { UsersService } from '../../../services/local/UsersService';
import { ProductInteractionService } from '../../../services/net/ProductAxiosService';
import { BasketEventService } from '../../../services/local/BasketEventService';

interface BasketButtonProps {
  productId: string;
  productName: string;
  className?: string;
}

export const BasketButton = ({ productId, productName, className = '' }: BasketButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      setIsAuthenticated(UsersService.isAuthenticated());
    };
        
    checkAuth();
    const unsubscribe = UsersService.subscribe(checkAuth);
        
    return () => unsubscribe();
  }, []);

  const handleBasketAction = async (e: React.MouseEvent) => {
    e.preventDefault();
        
    if (!isAuthenticated) {
      NotificationService.showDialog('Please sign in to add items to basket', 'info');
      showSigninCanvas();
      return;
    }
        
    setIsLoading(true);
    try {
      const response = await ProductInteractionService.basket.add(productId, 1);
      
      if (response?.data?.success) {
        NotificationService.showDialog(
          response.data.message || `${productName} added to basket`,
          'success'
        );
        
        // 🔥 Trigger global basket update using event service
        await BasketEventService.triggerBasketReload();
        
      } else {
        NotificationService.showDialog(
          response.error || `${productName} not added to basket`,
          'warning'
        );
      }
    } catch (error: any) {
      console.error('Basket add error:', error);
      NotificationService.showDialog(
        error.response?.data?.message || 'Failed to add to basket',
        'danger'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const showSigninCanvas = () => {
    const canvasElement = document.getElementById('quickSigninCanvas');
    if (canvasElement) {
      const existingBackdrops = document.querySelectorAll('.offcanvas-backdrop');
      existingBackdrops.forEach(backdrop => backdrop.remove());
            
      const offcanvas = new (window as any).bootstrap.Offcanvas(canvasElement);
      offcanvas.show();
    }
  };

  return (
    <button
      type="button"
      className={`product-card-button btn btn-icon btn-secondary animate-slide-end ms-2 ${className}`}
      aria-label="Add to Basket"
      onClick={handleBasketAction}
      disabled={isLoading}
      data-bs-toggle={!isAuthenticated ? "offcanvas" : undefined}
      data-bs-target={!isAuthenticated ? "#quickSigninCanvas" : undefined}
      aria-controls={!isAuthenticated ? "quickSigninCanvas" : undefined}
    >
      {isLoading ? (
        <LoadingZoom />
      ) : (
        <i className="ci-shopping-cart fs-base animate-target" />
      )}
    </button>
  );
};