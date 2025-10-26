
// V2

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UsersService } from '../../../services/local/UsersService';
import { BasketAxiosService } from '../../../services/net/BasketAxiosService';
// import { NotificationService } from '../../../services/local/NotificationService';
// import LoadingSpinner, { LoadingZoom } from '../LoadingSpinner';
import ProductRecommendations from '../../products/ProductRecommendations';
import LoadingSpinner, { LoadingZoom } from '../../../components/shared/LoadingSpinner';
import { NotificationService } from '../../../services/local/NotificationService';
import OrderSummary from '../shared/OrderSummary';
import { formatCurrency } from '../../../utils/currencyUtils';

interface BasketItem {
  id: string | number;
  product_id: string | number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  slug?: string;
  discount?: number;
  originalPrice?: number;
  color?: string;
  model?: string;
}

interface BasketState {
  items: BasketItem[];
  subtotal: number;
  itemCount: number;
  freeShippingThreshold: number;
  isLoading: boolean;
  savings: number;
  tax: number;
  estimatedTotal: number;
}

const Basket: React.FC = () => {
  const navigate = useNavigate();
  
  const [basketState, setBasketState] = useState<BasketState>({
    items: [],
    subtotal: 0,
    itemCount: 0,
    freeShippingThreshold: 50,
    isLoading: true,
    savings: 0,
    tax: 0,
    estimatedTotal: 0
  });

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [itemLoadingStates, setItemLoadingStates] = useState<Record<string | number, boolean>>({});
  const [promoCode, setPromoCode] = useState<string>('');
  const [_promoCodeLoading, setPromoCodeLoading] = useState<boolean>(false);

  useEffect(() => {
    const handleAuthChange = () => {
      setIsAuthenticated(UsersService.isAuthenticated());
    };

    // Initial check
    handleAuthChange();
    
    // Subscribe to auth changes
    
    // Subscribe to basket changes
    const unsubscribeBasket = BasketAxiosService.subscribe((basketData) => {
      const savings = basketData.items.reduce((total: number, item: BasketItem) => {
        if (item.originalPrice && item.originalPrice > item.price) {
          return total + ((item.originalPrice - item.price) * item.quantity);
        }
        return total;
      }, 0);

      const tax = basketData.subtotal * 0.08; // 8% tax rate
      const estimatedTotal = basketData.subtotal + tax - savings;

      setBasketState(prev => ({
        ...prev,
        items: basketData.items,
        subtotal: basketData.subtotal,
        itemCount: basketData.itemCount,
        isLoading: false,
        savings,
        tax,
        estimatedTotal
      }));
    });

    // Load initial basket data
    BasketAxiosService.loadBasket();

    return () => {
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
      handleRemoveItem(itemId);
      return;
    }

    const item = basketState.items.find(item => item.id === itemId);
    const itemName = item?.name || 'Item';

    try {
      setItemLoading(itemId, true);
      const response = await BasketAxiosService.updateQuantity(itemId, newQuantity);
      
      const message = response?.data?.message || `${itemName} quantity updated to ${newQuantity}`;
      NotificationService.showDialog(message, 'success');
      
    } catch (error: any) {
      console.error('Failed to update quantity:', error);
      
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
      
      const message = response?.data?.message || `${itemName} removed from basket`;
      NotificationService.showDialog(message, 'success');
      
    } catch (error: any) {
      console.error('Failed to remove item:', error);
      setItemLoading(itemId, false);
      
      const errorMessage = error.response?.data?.error || 
                          error.response?.data?.message || 
                          error.message || 
                          `Failed to remove ${itemName} from basket`;
      NotificationService.showDialog(errorMessage, 'error');
    }
  };

  const handleClearBasket = async () => {
    const confirmed = window.confirm('Are you sure you want to clear all items from your basket?');
    if (!confirmed) return;

    try {
      setBasketState(prev => ({ ...prev, isLoading: true }));
      const response = await BasketAxiosService.clearBasket();
      
      const message = response?.data?.message || 'Basket cleared successfully';
      NotificationService.showDialog(message, 'success');
      
    } catch (error: any) {
      console.error('Failed to clear basket:', error);
      setBasketState(prev => ({ ...prev, isLoading: false }));
      
      const errorMessage = error.response?.data?.error || 
                          error.response?.data?.message || 
                          error.message || 
                          'Failed to clear basket';
      NotificationService.showDialog(errorMessage, 'error');
    }
  };

  const handlePromoCode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoCode.trim()) return;

    try {
      setPromoCodeLoading(true);
      const response = await BasketAxiosService.applyPromoCode(promoCode);
      
      const message = response?.data?.message || 'Promo code applied successfully';
      NotificationService.showDialog(message, 'success');
      setPromoCode('');
      
    } catch (error: any) {
      console.error('Failed to apply promo code:', error);
      
      const errorMessage = error.response?.data?.error || 
                          error.response?.data?.message || 
                          error.message || 
                          'Invalid promo code';
      NotificationService.showDialog(errorMessage, 'error');
    } finally {
      setPromoCodeLoading(false);
    }
  };

  const getProductUrl = (item: BasketItem): string => {
    if (item.slug && item.slug.trim() !== '') {
      return `/products/${item.slug}`;
    }
    return `/products/${item.product_id}`;
  };

  const remainingForFreeShipping = Math.max(0, basketState.freeShippingThreshold - basketState.subtotal);
  const freeShippingProgress = Math.min(100, (basketState.subtotal / basketState.freeShippingThreshold) * 100);
  const qualifiesForFreeShipping = basketState.subtotal >= basketState.freeShippingThreshold;

  const renderEmptyBasket = () => (
    <div className="text-center py-5">
      <i className="ci-shopping-cart fs-1 text-muted mb-4"></i>
      <h4 className="mb-3">Your shopping basket is empty</h4>
      <p className="text-muted mb-4">
        {isAuthenticated 
          ? "Add items to your basket to proceed with your purchase."
          : "Sign in to sync your basket across devices, or continue shopping as a guest."
        }
      </p>
      <Link to="/products" className="btn btn-primary">
        Start Shopping
      </Link>
    </div>
  );

  const renderBasketItem = (item: BasketItem) => {
    const isItemLoading = itemLoadingStates[item.id] || false;
    const productUrl = getProductUrl(item);
    const itemTotal = item.price * item.quantity;
    
    return (
      <tr key={`${item.id}-${item.product_id}`} className={isItemLoading ? 'opacity-50' : ''}>
        <td className="py-3 ps-0">
          <div className="d-flex align-items-center">
            <Link className="position-relative flex-shrink-0" to={productUrl}>
              {item.discount && (
                <span className="badge text-bg-danger position-absolute top-0 start-0">
                  -{item.discount}%
                </span>
              )}
              <img src={item.image || "/assets/img/placeholder.jpg"} 
                width={110} 
                height={110}
                alt={item.name}
                className="img-thumbnail"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/img/placeholder.jpg';
                }}
                loading="lazy"
              />
            </Link>
            <div className="w-100 min-w-0 ps-2 ps-xl-3">
              <h5 className="d-flex animate-underline mb-2">
                <Link
                  className="d-block fs-sm fw-medium text-truncate animate-target text-truncate"
                  to={productUrl}
                  title={item.name}
                >
                  {item.name}
                </Link>
              </h5>
              <ul className="list-unstyled gap-1 fs-xs mb-0">
                {item.color && (
                  <li>
                    <span className="text-body-secondary">Color:</span>{' '}
                    <span className="text-dark-emphasis fw-medium">{item.color}</span>
                  </li>
                )}
                {item.model && (
                  <li>
                    <span className="text-body-secondary">Model:</span>{' '}
                    <span className="text-dark-emphasis fw-medium">{item.model}</span>
                  </li>
                )}
                <li className="d-xl-none">
                  <span className="text-body-secondary">Price:</span>{' '}
                  <span className="text-dark-emphasis fw-medium">
                    {formatCurrency(item.price, 'NGN', { short: true })}
                    {item.originalPrice && item.originalPrice > item.price && (
                      <del className="text-body-tertiary fw-normal ms-1">
                        {formatCurrency(item.originalPrice, 'NGN', { short: true })}
                      </del>
                    )}
                  </span>
                </li>
              </ul>
              <div className="count-input rounded-pill d-md-none mt-3">
                {isItemLoading && (
                  <div className="position-absolute top-50 start-50 translate-middle" style={{ zIndex: 10 }}>
                    <LoadingZoom size="sm"/>
                  </div>
                )}
                <button
                  type="button"
                  className="btn btn-sm btn-icon"
                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                  disabled={isItemLoading}
                  aria-label={`Decrease quantity of ${item.name}`}
                >
                  <i className="ci-minus" />
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
                />
                <button
                  type="button"
                  className="btn btn-sm btn-icon"
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  disabled={isItemLoading}
                  aria-label={`Increase quantity of ${item.name}`}
                >
                  <i className="ci-plus" />
                </button>
              </div>
            </div>
          </div>
        </td>
        <td className="h6 py-3 d-none d-xl-table-cell">
          {formatCurrency(item.price, 'NGN', { short: true })}
          {item.originalPrice && item.originalPrice > item.price && (
            <del className="text-body-tertiary fs-xs fw-normal d-block">
            {formatCurrency(item.originalPrice, 'NGN', { short: true })}
            </del>
          )}
        </td>
        <td className="py-3 d-none d-md-table-cell">
          <div className="count-input rounded-pill position-relative">
            {isItemLoading && (
              <div className="position-absolute top-50 start-50 translate-middle" style={{ zIndex: 10 }}>
                <LoadingZoom size="sm"/>
              </div>
            )}
            <button
              type="button"
              className="btn btn-icon"
              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
              disabled={isItemLoading}
              aria-label={`Decrease quantity of ${item.name}`}
            >
              <i className="ci-minus" />
            </button>
            <input
              type="number"
              className="form-control"
              value={item.quantity}
              onChange={(e) => {
                const newQuantity = parseInt(e.target.value) || 1;
                handleQuantityChange(item.id, newQuantity);
              }}
              min="1"
              disabled={isItemLoading}
            />
            <button
              type="button"
              className="btn btn-icon"
              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
              disabled={isItemLoading}
              aria-label={`Increase quantity of ${item.name}`}
            >
              <i className="ci-plus" />
            </button>
          </div>
        </td>
        <td className="h6 py-3 d-none d-md-table-cell">
          {formatCurrency(itemTotal, 'NGN', { short: true })}
        </td>
        <td className="text-end py-3 px-0">
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
        </td>
      </tr>
    );
  };

  return (
    <main className="content-wrapper">
      {/* Breadcrumb */}
      <nav className="container pt-3 my-3 my-md-4" aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item"><Link to="/products">Products</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Basket</li>
        </ol>
      </nav>
      
      {/* Items in the cart + Order summary */}
      <section className="container pb-5 mb-2 mb-md-3 mb-lg-4 mb-xl-5">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0">
            Shopping Basket
            {basketState.itemCount > 0 && (
              <span className="text-muted fs-6 ms-2">
                ({basketState.itemCount} {basketState.itemCount === 1 ? 'item' : 'items'})
              </span>
            )}
          </h1>
          
          {/* Storage indicator for non-authenticated users */}
          {!isAuthenticated && basketState.itemCount > 0 && (
            <div className="alert alert-info fs-sm border-0 rounded-4 mb-0 py-2 px-3" role="alert">
              <i className="ci-info-circle me-2" />
              Items stored locally.{' '}
              <Link to="/auth/signin" className="alert-link">
                Sign in
              </Link>{' '}
              to save across devices.
            </div>
          )}
        </div>

        {basketState.isLoading ? (
          <div className="text-center py-5">
            <LoadingSpinner />
          </div>
        ) : basketState.items.length === 0 ? (
          renderEmptyBasket()
        ) : (
          <div className="row">
            {/* Items list */}
            <div className="col-lg-8">
              <div className="pe-lg-2 pe-xl-3 me-xl-3">
                {/* Free Shipping Progress */}
                {qualifiesForFreeShipping ? (
                  <div className="alert alert-success text-dark-emphasis fs-sm border-0 rounded-4 mb-4" role="alert">
                    <span aria-hidden="true">🎉</span> Congratulations! You qualify for{' '}
                    <span className="fw-semibold">free shipping</span>!
                  </div>
                ) : (
                  <>
                    <p className="fs-sm mb-2">
                      Buy <span className="text-dark-emphasis fw-semibold">{formatCurrency(remainingForFreeShipping)}</span> more to get{' '}
                      <span className="text-dark-emphasis fw-semibold">Free Shipping</span>
                    </p>
                    <div
                      className="progress w-100 overflow-visible mb-4"
                      role="progressbar"
                      aria-label="Free shipping progress"
                      aria-valuenow={freeShippingProgress}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ height: '4px' }}
                    >
                      <div
                        className="progress-bar bg-warning rounded-pill position-relative overflow-visible"
                        style={{ width: `${freeShippingProgress}%`, height: '4px' }}
                      >
                        <div
                          className="position-absolute top-50 end-0 d-flex align-items-center justify-content-center translate-middle-y bg-body border border-warning rounded-circle me-n1"
                          style={{ width: '1.5rem', height: '1.5rem' }}
                        >
                          <i className="ci-star-filled text-warning" />
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Table of items */}
                <table className="table position-relative z-2 mb-4">
                  <thead>
                    <tr>
                      <th scope="col" className="fs-sm fw-normal py-3 ps-0">
                        <span className="text-body">Product</span>
                      </th>
                      <th scope="col" className="text-body fs-sm fw-normal py-3 d-none d-xl-table-cell">
                        <span className="text-body">Price</span>
                      </th>
                      <th scope="col" className="text-body fs-sm fw-normal py-3 d-none d-md-table-cell">
                        <span className="text-body">Quantity</span>
                      </th>
                      <th scope="col" className="text-body fs-sm fw-normal py-3 d-none d-md-table-cell">
                        <span className="text-body">Total</span>
                      </th>
                      <th scope="col" className="py-0 px-0">
                        <div className="nav justify-content-end">
                          <button
                            type="button"
                            className="nav-link d-inline-block text-decoration-underline text-nowrap py-3 px-0"
                            onClick={handleClearBasket}
                            disabled={basketState.isLoading}
                          >
                            Clear cart
                          </button>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="align-middle">
                    {basketState.items.map(renderBasketItem)}
                  </tbody>
                </table>

                <div className="nav position-relative z-2 mb-4 mb-lg-0">
                  <Link
                    className="nav-link animate-underline px-0"
                    onClick={() => navigate(-1)}
                  >
                    <i className="ci-chevron-left fs-lg me-1" />
                    <span className="animate-target">Continue shopping</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Order summary (sticky sidebar) */}

            {/* // In Basket.tsx
import OrderSummary from './OrderSummary';

// Inside your Basket component */}
{/* Order summary (sticky sidebar) */}
<OrderSummary
  context="basket"
  itemCount={basketState.itemCount}
  subtotal={basketState.subtotal}
  estimatedTotal={basketState.estimatedTotal}
  savings={basketState.savings}
  tax={basketState.tax}
  qualifiesForFreeShipping={qualifiesForFreeShipping}
  remainingForFreeShipping={remainingForFreeShipping}
  freeShippingThreshold={basketState.freeShippingThreshold}
  isAuthenticated={isAuthenticated}
  onApplyPromoCode={handlePromoCode}
/>
            {/* <aside className="col-lg-4" style={{ marginTop: '-100px' }}>
              <div className="position-sticky top-0" style={{ paddingTop: '100px' }}>
                <div className="bg-body-tertiary rounded-5 p-4 mb-3">
                  <div className="p-sm-2 p-lg-0 p-xl-2">
                    <h5 className="border-bottom pb-4 mb-4">Order summary</h5>
                    <ul className="list-unstyled fs-sm gap-3 mb-0">
                      <li className="d-flex justify-content-between">
                        Subtotal ({basketState.itemCount} items):
                        <span className="text-dark-emphasis fw-medium">
                          {formatCurrency(basketState.subtotal)}
                        </span>
                      </li>
                      {basketState.savings > 0 && (
                        <li className="d-flex justify-content-between">
                          Saving:
                          <span className="text-danger fw-medium">
                            -{formatCurrency(basketState.savings)}
                          </span>
                        </li>
                      )}
                      <li className="d-flex justify-content-between">
                        Tax collected:
                        <span className="text-dark-emphasis fw-medium">
                          {formatCurrency(basketState.tax)}
                        </span>
                      </li>
                      <li className="d-flex justify-content-between">
                        Shipping:
                        <span className="text-dark-emphasis fw-medium">
                          {qualifiesForFreeShipping ? (
                            <span className="text-success">Free</span>
                          ) : (
                            'Calculated at checkout'
                          )}
                        </span>
                      </li>
                    </ul>
                    <div className="border-top pt-4 mt-4">
                      <div className="d-flex justify-content-between mb-3">
                        <span className="fs-sm">Estimated total:</span>
                        <span className="h5 mb-0">
                          {formatCurrency(basketState.estimatedTotal)}
                        </span>
                      </div>
                      <Link
                        className="btn btn-lg btn-primary w-100"
                        to={isAuthenticated ? "/users/checkout" : "/auth/signin?redirect=checkout"}
                      >
                        Proceed to checkout
                        <i className="ci-chevron-right fs-lg ms-1 me-n1" />
                      </Link>
                      {!isAuthenticated && (
                        <div className="nav justify-content-center fs-sm mt-3">
                          <Link
                            className="nav-link text-decoration-underline p-0 me-1"
                            to="/auth/signup"
                          >
                            Create an account
                          </Link>
                          and get
                          <span className="text-dark-emphasis fw-medium ms-1">
                            {Math.floor(basketState.estimatedTotal / 10)} bonuses
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="accordion bg-body-tertiary rounded-5 p-4">
                  <div className="accordion-item border-0">
                    <h3 className="accordion-header" id="promoCodeHeading">
                      <button
                        type="button"
                        className="accordion-button animate-underline collapsed py-0 ps-sm-2 ps-lg-0 ps-xl-2"
                        data-bs-toggle="collapse"
                        data-bs-target="#promoCode"
                        aria-expanded="false"
                        aria-controls="promoCode"
                      >
                        <i className="ci-percent fs-xl me-2" />
                        <span className="animate-target me-2">Apply promo code</span>
                      </button>
                    </h3>
                    <div
                      className="accordion-collapse collapse"
                      id="promoCode"
                      aria-labelledby="promoCodeHeading"
                    >
                      <div className="accordion-body pt-3 pb-2 ps-sm-2 px-lg-0 px-xl-2">
                        <form
                          className="needs-validation d-flex gap-2"
                          onSubmit={handlePromoCode}
                          noValidate
                        >
                          <div className="position-relative w-100">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter promo code"
                              value={promoCode}
                              onChange={(e) => setPromoCode(e.target.value)}
                              disabled={promoCodeLoading}
                              required
                            />
                            <div className="invalid-tooltip bg-transparent py-0">
                              Enter a valid promo code!
                            </div>
                          </div>
                          <button
                            type="submit"
                            className="btn btn-dark position-relative"
                            disabled={promoCodeLoading || !promoCode.trim()}
                          >
                            {promoCodeLoading ? (
                              <LoadingZoom size="sm" />
                            ) : (
                              'Apply'
                            )}
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
             */}
          </div>
        )}
      </section>

      {/* Trending/Recommended products */}
      {basketState.items.length > 0 && <ProductRecommendations />}
    </main>
  );
};

export default Basket;