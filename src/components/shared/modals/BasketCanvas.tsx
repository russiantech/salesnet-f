
// src/components/Basket/BasketCanvas.tsx
import React, { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { UsersService } from "../../../services/local/UsersService";
import { BasketAxiosService } from "../../../services/net/BasketAxiosService";
import LoadingSpinner, { LoadingZoom } from "../LoadingSpinner";
import { NotificationService } from "../../../services/local/NotificationService";
import { formatCurrency } from "../../../utils/currencyUtils";
import { tr } from "framer-motion/client";

interface BasketItem {
  id: string | number;
  product_id: string | number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  slug?: string;
}

interface BasketState {
  items: BasketItem[];
  subtotal: number;
  itemCount: number;
  freeShippingThreshold: number;
  isLoading: boolean;
}

const BasketCanvas: React.FC = () => {

  const navigate = useNavigate();

  const [basketState, setBasketState] = useState<BasketState>({
    items: [],
    subtotal: 0,
    itemCount: 0,
    freeShippingThreshold: 50,
    isLoading: true
  });

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [itemLoadingStates, setItemLoadingStates] = useState<Record<string | number, boolean>>({});

  useEffect(() => {
    const handleAuthChange = () => {
      setIsAuthenticated(UsersService.isAuthenticated());
    };

    // Initial check
    handleAuthChange();
    
    // Subscribe to auth changes
    const unsubscribeAuth = UsersService.subscribe(handleAuthChange);
    
    // Subscribe to basket changes
    const unsubscribeBasket = BasketAxiosService.subscribe((basketData) => {
      setBasketState(prev => ({
        ...prev,
        items: basketData.items,
        subtotal: basketData.subtotal,
        itemCount: basketData.itemCount,
        isLoading: false
      }));
      
      // Trigger global basket update event for nav/header components
      window.dispatchEvent(new CustomEvent('basketUpdated', { 
        detail: { 
          itemCount: basketData.itemCount,
          subtotal: basketData.subtotal,
          items: basketData.items
        } 
      }));
    });

    // Load initial basket data
    BasketAxiosService.loadBasket();

    return () => {
      unsubscribeAuth;
      unsubscribeBasket();
    };
  }, []);

  const setItemLoading = (itemId: string | number, loading: boolean) => {
    setItemLoadingStates(prev => ({
      ...prev,
      [itemId]: loading
    }));
  };

  const handleQuantityChange = async (itemId: string | number, newQuantity: number) => {
    if (newQuantity < 1) {
      // If quantity is 0 or less, remove the item instead
      handleRemoveItem(itemId);
      return;
    }

    const item = basketState.items.find(item => item.id === itemId);
    const itemName = item?.name || 'Item';

    try {
      setItemLoading(itemId, true);
      const response = await BasketAxiosService.updateQuantity(itemId, newQuantity);
      
      // Show success notification
      const message = response?.data?.message || `${itemName} quantity updated to ${newQuantity}`;
      NotificationService.showDialog(message, 'success');
      
    } catch (error: any) {
      console.error('Failed to update quantity:', error);
      
      // Show error notification
      const errorMessage = error.response?.data?.error || 
                        error.response?.data?.message || 
                        error.message || 
                        `Failed to update ${itemName} quantity`;
      NotificationService.showDialog(errorMessage, 'error');
      
    } finally {
      setItemLoading(itemId, false);
    }
  };

  const handleRemoveItem = async (itemId: string | number) => {
    const item = basketState.items.find(item => item.id === itemId);
    const itemName = item?.name || 'Item';

    try {
      setItemLoading(itemId, true);
      const response = await BasketAxiosService.removeItem(itemId);
      
      // Show success notification
      const message = response?.data?.message || `${itemName} removed from basket`;
      NotificationService.showDialog(message, 'success');
      
    } catch (error: any) {
      console.error('Failed to remove item:', error);
      setItemLoading(itemId, false);
      
      // Show error notification
      const errorMessage = error.response?.data?.error || 
                          error.response?.data?.message || 
                          error.message || 
                          `Failed to remove ${itemName} from basket`;
      NotificationService.showDialog(errorMessage, 'error');
    }
    // Note: Don't need to set loading to false on success since item will be removed from basket
  };

  const handleClearBasket = async () => {
    // Show confirmation dialog
    const confirmed = window.confirm('Are you sure you want to clear all items from your basket?');
    if (!confirmed) return;

    try {
      setBasketState(prev => ({ ...prev, isLoading: true }));
      const response = await BasketAxiosService.clearBasket();
      
      // Show success notification
      const message = response?.data?.message || 'Basket cleared successfully';
      NotificationService.showDialog(message, 'success');
      
    } catch (error: any) {
      console.error('Failed to clear basket:', error);
      setBasketState(prev => ({ ...prev, isLoading: false }));
      
      // Show error notification
      const errorMessage = error.response?.data?.error || 
                          error.response?.data?.message || 
                          error.message || 
                          'Failed to clear basket';
      NotificationService.showDialog(errorMessage, 'error');
    }
  };

  // Helper function to generate product URL with slug preference
  const getProductUrl = (item: BasketItem): string => {
    // console.log(item);
    if (item.slug && item.slug.trim() !== '') {
      return `/products/${item.slug}`;
    }
    return `/products/${item.product_id}`;
  };

  const remainingForFreeShipping = Math.max(0, basketState.freeShippingThreshold - basketState.subtotal);
  const freeShippingProgress = Math.min(100, (basketState.subtotal / basketState.freeShippingThreshold) * 100);
  const qualifiesForFreeShipping = basketState.subtotal >= basketState.freeShippingThreshold;
  console.log(`basketState: ${basketState}`);
  //   `basketState.freeShippingThreshold: ${basketState.freeShippingThreshold},
  //   remainingForFreeShipping: ${remainingForFreeShipping}, freeShippingProgress: ${freeShippingProgress}, qualifiesForFreeShipping: ${qualifiesForFreeShipping} `
  // )
  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  const renderEmptyBasket = () => (
    <div 
      className="offcanvas offcanvas-end pb-sm-2 px-sm-2"
      id="shoppingCart"
      tabIndex={-1}
      aria-labelledby="shoppingCartLabel"
      style={{ width: '500px' }}
      aria-modal="true"
      role="dialog"
    >
      <div className="offcanvas-header py-3 pt-lg-4">
        <h4 className="offcanvas-title" id="shoppingCartLabel">
          Shopping Basket
        </h4>
        <button 
          type="button" 
          className="btn-close" 
          data-bs-dismiss="offcanvas" 
          aria-label="Close"
        />
      </div>
      <div className="offcanvas-body text-center animate-scale">
        <i className="ci-shopping-cart fs-2 m-1 mx-auto mb-4 animate-target"></i>

        <h6 className="mb-2">Your shopping basket is currently empty!</h6>
        <p className="fs-sm mb-4">
          {isAuthenticated 
            ? "Add items to your basket to proceed with your purchase."
            : "Sign in to sync your basket across devices, or continue shopping as a guest."
          }
        </p>
        <button
          type="button"
          className="btn btn-dark rounded-pill"
          data-bs-dismiss="offcanvas"
          aria-label="Continue shopping"
        >
          Continue shopping
        </button>
      </div>
    </div>
  );

  const renderBasketItem = (item: BasketItem) => {
    const isItemLoading = itemLoadingStates[item.id] || false;
    const productUrl = getProductUrl(item);
    
    return (
      <div key={`${item.id}-${item.product_id}`} className={`d-flex align-items-center ${isItemLoading ? 'opacity-50' : ''}`}>
        <Link 
          className="flex-shrink-0" 
          to={productUrl}
          aria-label={`View ${item.name}`}
        >
          <img 
            src={item.image || "/assets/img/placeholder.jpg"} 
            width="110" 
            height="110"
            style={{ objectFit: 'cover', maxWidth: '110px', maxHeight: '110px' }}
            alt={item.name}
            className="img-thumbnail"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/assets/img/placeholder.jpg';
            }}
            loading="lazy"
            aria-hidden={!item.image}
          />
        </Link>
        <div className="w-100 min-w-0 ps-2 ps-sm-3">
          <h5 className="d-flex animate-underline mb-2">
            <Link
              className="d-block fs-sm fw-medium text-truncate animate-target"
              to={productUrl}
              title={item.name}
              aria-label={`View details of ${item.name}`}
            >
              {item.name}
            </Link>
          </h5>
          <div className="h6 pb-1 mb-2">{formatCurrency(item.price, 'NGN', {short:true})}</div>
          <div className="d-flex align-items-center justify-content-between">
            <div className="count-input rounded-2 position-relative">
              {isItemLoading && (
                <div className="position-absolute top-50 start-50 translate-middle" style={{ zIndex: 10 }}>
                  <LoadingZoom size="sm"/>
                </div>
              )}
              <button
                type="button"
                className="btn btn-icon btn-sm"
                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                disabled={isItemLoading}
                aria-label={`Decrease quantity of ${item.name}`}
              >
                <i className="ci-minus" aria-hidden="true" />
              </button>
              <input
                type="number"
                className="form-control form-control-sm"
                value={item.quantity}
                onChange={(e) => {
                  const newQuantity = parseInt(e.target.value) || 1;
                  handleQuantityChange(item.id, newQuantity);
                }}
                min="1"
                disabled={isItemLoading}
                aria-label={`Quantity of ${item.name}`}
              />
              <button
                type="button"
                className="btn btn-icon btn-sm"
                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                disabled={isItemLoading}
                aria-label={`Increase quantity of ${item.name}`}
              >
                <i className="ci-plus" aria-hidden="true" />
              </button>
            </div>
            <button
              type="button"
              className="btn-close fs-sm position-relative"
              onClick={() => handleRemoveItem(item.id)}
              disabled={isItemLoading}
              aria-label={`Remove ${item.name} from basket`}
            >
              {isItemLoading && (
                <div className="position-absolute top-50 start-50 translate-middle" style={{ zIndex: 10 }}>
                  <LoadingZoom size="sm"/>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    );
  };

  if (basketState.items.length === 0 && !basketState.isLoading) {
    return renderEmptyBasket();
  }

  const closeOffcanvas = (): Promise<void> => {
  return new Promise((resolve) => {
    const offcanvasElement = document.getElementById('shoppingCart');
    if (offcanvasElement) {
      const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
      if (bsOffcanvas) {
        // Listen for hidden event to resolve the promise
        offcanvasElement.addEventListener('hidden.bs.offcanvas', () => resolve(), { once: true });
        bsOffcanvas.hide();
        return;
      }
    }
    resolve(); // Resolve immediately if no offcanvas found
  });
};

  return (
    <div
      className="offcanvas offcanvas-end pb-sm-2 px-sm-2"
      id="shoppingCart"
      tabIndex={-1}
      aria-labelledby="shoppingCartLabel"
      style={{ width: '500px' }}
    >
      {/* Header */}
      <div className="offcanvas-header flex-column align-items-start py-3 pt-lg-4">
        <div className="d-flex align-items-center justify-content-between w-100 mb-3 mb-lg-4">
          <h4 className="offcanvas-title" id="shoppingCartLabel">
            Basket ({basketState.itemCount} {basketState.itemCount === 1 ? 'item' : 'items'})
          </h4>
          <button 
            type="button" 
            className="btn-close" 
            data-bs-dismiss="offcanvas" 
            aria-label="Close basket"
          />
        </div>

        {/* Free Shipping Alert */}
        {qualifiesForFreeShipping ? (
          <div className="alert alert-success text-dark-emphasis fs-sm border-0 rounded-4 mb-3" role="alert">
            <span aria-hidden="true">🎉</span> Congratulations! You qualify for{' '}
            <span className="fw-semibold">free shipping</span>!
          </div>
        ) : (
          <>
            <p className="fs-sm mb-2">
              Add <span className="text-dark-emphasis fw-semibold">{formatPrice(remainingForFreeShipping)}</span> more to get{' '}
              <span className="text-dark-emphasis fw-semibold">Free Shipping</span>
            </p>
            <div
              className="progress w-100 mb-3"
              role="progressbar"
              aria-valuenow={freeShippingProgress}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Free shipping progress"
              style={{ height: '4px' }}
            >
              <div 
                className="progress-bar bg-warning rounded-pill" 
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </>
        )}

        {/* Storage indicator for non-authenticated users */}
        {!isAuthenticated && (
          <div className="alert alert-info fs-sm border-0 rounded-4 mb-0" role="alert">
            <i className="ci-info-circle me-2" aria-hidden="true" />
            Items stored locally.{' '}
            <Link to="/auth/signin" className="alert-link">
              Sign in
            </Link>{' '}
            to save across devices.
          </div>
        )}
      </div>

      {/* Items */}
      <div className="offcanvas-body d-flex flex-column gap-4 pt-2">
        {basketState.isLoading ? (
          <div className="text-center py-4">
            <LoadingSpinner />
          </div>
        ) : (
          basketState.items.map(renderBasketItem)
        )}
      </div>

      {/* Footer */}
      <div className="offcanvas-header flex-column align-items-start">
        <div className="d-flex align-items-center justify-content-between w-100 mb-2">
          <span className="text-light-emphasis">Subtotal:</span>
          <span className="h6 mb-0">{formatCurrency(basketState.subtotal, 'NGN', { short: false })}</span>
        </div>
        
        {qualifiesForFreeShipping && (
          <div className="d-flex align-items-center justify-content-between w-100 mb-3">
            <span className="text-success fs-sm">Shipping:</span>
            <span className="text-success fs-sm fw-semibold">Free</span>
          </div>
        )}

        {/* <div className="d-flex w-100 gap-3 mb-3">
          <NavLink data-bs-dismiss="offcanvas" className="btn btn-lg btn-secondary w-100" to="/users/basket">
            View cart
          </NavLink>
          <Link 
            className="btn btn-lg btn-primary w-100" 
            to={isAuthenticated ? "/users/checkout" : "/login?redirect=checkout"}
            data-bs-dismiss="offcanvas"
            aria-label="Proceed to checkout"
          >
            Checkout
          </Link>
        </div> */}
         <div className="d-flex w-100 gap-3 mb-3">
    <NavLink 
      className="btn btn-lg btn-secondary w-100 rounded-pill"
      to="/users/basket"
      onClick={async (e) => {
        e.preventDefault();
        await closeOffcanvas();
        navigate('/users/basket');
      }}
      aria-label="View cart"
    >
      View cart
    </NavLink>
    <Link 
      className="btn btn-lg btn-primary w-100 rounded-pill"
      to={isAuthenticated ? "/users/checkout" : "/login?redirect=checkout"}
      onClick={async (e) => {
        e.preventDefault();
        const targetPath = isAuthenticated ? "/users/checkout" : "/login?redirect=checkout";
        await closeOffcanvas();
        navigate(targetPath);
      }}
      aria-label="Proceed to checkout"
    >
      Checkout
    </Link>

    {/*  */}
    <button type="button" className="btn btn-outline-danger w-100 rounded-pill"
          onClick={handleClearBasket} disabled={basketState.isLoading}
          aria-label="Clear all items from basket">
          Clear Basket
        </button>

  </div>

        {/* <button type="button" className="btn btn-outline-danger btn-sm w-100"
          onClick={handleClearBasket} disabled={basketState.isLoading}
          aria-label="Clear all items from basket">
          Clear Basket
        </button> */}
      </div>
    </div>
  );
};

export default BasketCanvas;