// v3

import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { LoadingZoom } from '../../../components/shared/LoadingSpinner';
import { formatCurrency } from '../../../utils/currencyUtils';
// import LoadingZoom from './LoadingZoom';

interface OrderSummaryProps {
  context: 'basket' | 'checkout';
  itemCount: number;
  subtotal: number;
  estimatedTotal?: number;
  total?: number;
  savings?: number;
  discount?: number;
  tax?: number;
  deliveryFee?: number;
  qualifiesForFreeShipping?: boolean;
  remainingForFreeShipping?: number;
  freeShippingThreshold?: number;
  isAuthenticated?: boolean;
  isLoading?: boolean;
  canPlaceOrder?: boolean; // Add this prop
  buttonText?: string; // Add this prop
  onConfirmOrder?: () => void;
  onApplyPromoCode?: (code: string) => void;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  context,
  itemCount,
  subtotal,
  estimatedTotal,
  total,
  savings = 0,
  discount = 0,
  tax = 0,
  deliveryFee = 0,
  qualifiesForFreeShipping = false,
  remainingForFreeShipping = 0,
  freeShippingThreshold = 50,
  isAuthenticated = false,
  isLoading = false,
  canPlaceOrder = true, // Default to true
  buttonText = 'Confirm the order', // Default text
  onConfirmOrder,
  onApplyPromoCode
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [promoCodeLoading, setPromoCodeLoading] = useState(false);
  const [ageConfirmed, setAgeConfirmed] = useState(true); // Default to true since we don't have age confirmation UI
  const [orderNote, setOrderNote] = useState('');

  const handlePromoCodeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoCode.trim() || !onApplyPromoCode) return;
    
    setPromoCodeLoading(true);
    try {
      await onApplyPromoCode(promoCode);
      setPromoCode('');
    } finally {
      setPromoCodeLoading(false);
    }
  };

  const displayTotal = context === 'basket' ? estimatedTotal : total;
  const displayShipping = context === 'basket' 
    ? (qualifiesForFreeShipping ? 'Free' : 'Calculated at checkout')
    : (deliveryFee > 0 ? formatCurrency(deliveryFee) : 'Free');

  return (
    <aside className={`${context === 'checkout' ? 'col-lg-4 offset-xl-1 mb-4' : 'col-lg-4'}`} 
          style={{ marginTop: context === 'checkout' ? "-115px" : "-100px" }}>
      <div className="position-sticky top-0" style={{ paddingTop: context === 'checkout' ? "115px" : "100px" }}>
        <div className={`${context === 'basket' ? 'bg-body-tertiary rounded-5 p-4 mb-3' : ''}`}>
          <div className={context === 'basket' ? "p-sm-2 p-lg-0 p-xl-2" : ""}>
            {/* Header */}
            <div className="d-flex align-items-center justify-content-between border-bottom pb-4 mb-4">
              <h2 className="h5 mb-0 me-3">Order summary</h2>
              {context === 'checkout' && (
                <div className="nav animate-scale">
                  <NavLink data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCart" 
                  aria-label="Shopping cart" aria-current="page" data-discover="true" 
                  className="badge text-bg-info rounded-pill animate-target text-decoration-none" to="/users/basket#shoppingCart">
                    Edit
                  </NavLink>
                </div>
              )}
            </div>
            
            {/* Order Details */}
            <ul className="list-unstyled fs-sm gap-3 mb-0">
              <li className="d-flex justify-content-between">
                Subtotal ({itemCount} items):
                <span className="text-dark-emphasis fw-medium">
                  {formatCurrency(subtotal, 'NGN', { short: true })}
                </span>
              </li>
              
              {/* Savings/Discount */}
              {(savings > 0 || discount > 0) && (
                <li className="d-flex justify-content-between">
                  {context === 'basket' ? 'Saving:' : 'Discount:'}
                  <span className="text-danger fw-medium">
                    -{formatCurrency(context === 'basket' ? savings : discount)}
                  </span>
                </li>
              )}
              
              {/* Tax */}
              {context === 'basket' && tax > 0 && (
                <li className="d-flex justify-content-between">
                  Tax collected:
                  <span className="text-dark-emphasis fw-medium">
                    {formatCurrency(tax, 'NGN', { short: true })}
                  </span>
                </li>
              )}
              
              {/* Shipping */}
              <li className="d-flex justify-content-between">
                Shipping:
                <span className="text-dark-emphasis fw-medium">
                  {context === 'basket' ? (
                    qualifiesForFreeShipping ? (
                      <span className="text-success">Free</span>
                    ) : (
                      'Calculated at checkout'
                    )
                  ) : (
                    typeof displayShipping === 'number'
                      ? formatCurrency(displayShipping, 'NGN', { short: true })
                      : displayShipping
                  )}
                </span>
              </li>
            </ul>
            
            {/* Total */}
            <div className="border-top pt-4 mt-4">
              <div className="d-flex justify-content-between mb-4">
                <span className="fs-sm">
                  {context === 'basket' ? 'Estimated total:' : 'Total:'}
                </span>
                <span className="h5 mb-0">
                  {formatCurrency(displayTotal || 0, 'NGN', { short: true })}
                </span>
              </div>
              
              {/* Context-specific content */}
              {context === 'basket' ? (
                <>
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
                        {Math.floor((displayTotal || 0) / 10)} bonuses
                      </span>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <div className="alert d-flex alert-warning fs-sm rounded-4 mb-4" role="alert">
                    <i className="ci-info fs-lg pe-1 mt-1 me-2" />
                    <div>
                      {context === 'checkout' ? 
                        "There is a weighted product in the cart. The actual amount may differ from the indicated amount." : 
                        "Items stored locally. Sign in to save across devices."}
                    </div>
                  </div>
                  
                  <button
                    className="btn btn-lg btn-primary w-100 rounded-pill"
                    onClick={onConfirmOrder}
                    disabled={isLoading || !canPlaceOrder}
                  >
                    {isLoading ? (
                      <>
                        <LoadingZoom size="sm" />
                        Processing...
                      </>
                    ) : (
                      <>
                        {buttonText}
                        <i className="ci-chevron-right fs-lg ms-1 me-n1" />
                      </>
                    )}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
        
        {/* Promo code section (only for basket) */}
        {context === 'basket' && (
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
                    onSubmit={handlePromoCodeSubmit}
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
        )}
      </div>
    </aside>
  );
};

export default OrderSummary;