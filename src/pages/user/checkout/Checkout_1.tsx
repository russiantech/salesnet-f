
// V4

// V3 - Fixed
import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
// import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import DeliveryDateOffCanvas from './DeliveryDateOffCanvas';
import DeliveryOptionsOffCanvas from './DeliveryOptionsOffCanvas';
// import AsideOrderSummary from './AsideOrderSummary';
import { useOrder } from '../../../hooks/useOrder';
import { usePayment } from '../../../hooks/usePaymentVerification';
import { useBasket } from '../../../hooks/useBasket'; // Add this import
import { NotificationService } from '../../../services/local/NotificationService';
import Breadcrumb from '../../../components/shared/Breadcrumb';
import OrderSummary from '../shared/OrderSummary';
import { paymentConfig } from '../../../utils/env';

const Checkout = () => {
  const navigate = useNavigate();
  // const { basket } = useBasket(); // Add this hook to get basket state
  const { basket, loading: basketLoading } = useBasket();
  const [deliveryAddress, setDeliveryAddress] = useState({
    house: '',
    floor: '',
    phoneNumber: '',
  });

  const [deliveryTime, setDeliveryTime] = useState({
    date: 'today',
    timeSlot: '10:00 - 12:00',
  });
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);

  // ===============================
  const [deliveryDetails, setDeliveryDetails] = useState<{
      address: any | null;
      schedule: { date: string; timeSlot: string } | null;
      option: 'delivery' | 'pickup';
    }>({
      address: null,
      schedule: null,
      option: 'delivery',
    });
  // ===============================

  const { processPayment } = usePayment();
  const { createOrder } = useOrder();

  // Handle address change
  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDeliveryAddress(prev => ({ ...prev, [name]: value }));
  };

  // Handle delivery time change
  const handleDeliveryTimeChange = (date: string, timeSlot: string) => {
    setDeliveryTime({ date, timeSlot });
  };

  // Handle payment method change
  const handlePaymentMethodChange = (method: string) => {
    setPaymentMethod(method);
  };

  // Process order submission
  const handleOrderSubmit = async () => {
    if (!deliveryAddress.house || !deliveryAddress.phoneNumber) {
      NotificationService.showDialog('Please fill in all required address fields');
      return;
    }

    setIsProcessing(true);
    
    try {
      // Create order first
      const order = await createOrder({
        deliveryAddress,
        deliveryTime,
        paymentMethod
      });

      // Process payment based on selected method
      const paymentResult = await processPayment({
        orderId: order.id,
        amount: order.total,
        paymentMethod,
        customerEmail: order.customerEmail
      });

      if (paymentResult.success) {
        navigate('/checkout/success', { state: { order } });
      } else {
        NotificationService.showDialog(paymentResult.message || 'Payment failed');
      }
    } catch (error) {
      console.error('Order processing error:', error);
      NotificationService.showDialog('Failed to process order');
    } finally {
      setIsProcessing(false);
    }
  };

  // Payment method components
  const renderPaymentMethod = () => {
    switch (paymentMethod) {
      case 'paypal':
        return (
//           <PayPalScriptProvider options={{ 
//   'client-id': paymentConfig.paypal.clientId,
//   currency: 'USD'
// }}>
          <PayPalScriptProvider options={{ 
            'client-id': paymentConfig.paypal.clientId || '',
            currency: 'USD',
            
          }}>
            <PayPalButtons 
              style={{ layout: 'vertical' }}
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [{
                    amount: {
                      value: basket?.subtotal?.toString() || '0'
                    }
                  }]
                });
              }}
              onApprove={(data, actions) => {
                return actions.order!.capture().then(() => {
                  handleOrderSubmit();
                });
              }}
            />
          </PayPalScriptProvider>
        );
      
      case 'paystack':
        return (
          <button 
            className="btn btn-primary w-100"
            onClick={() => {
              const handler = (window as any).PaystackPop.setup({
                key: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY,
                email: 'customer@salesnet.co',
                amount: (basket?.subtotal || 0) * 100, // in kobo
                currency: 'NGN',
                onClose: () => NotificationService.showDialog('Payment window closed', 'info'),
                callback: (response: any) => {
                  handleOrderSubmit();
                }
              });
              handler.openIframe();
            }}
          >
            Pay with Paystack
          </button>
        );
      
      case 'flutterwave':
        return (
          <button
            className="btn btn-primary w-100"
            onClick={() => {
              (window as any).FlutterwaveCheckout({
                public_key: paymentConfig.flutterwave.publicKey,
                tx_ref: Date.now().toString(),
                amount: basket?.subtotal || 0,
                currency: 'USD',
                payment_options: 'card,mobilemoney,ussd',
                customer: {
                  email: 'customer@salesnet.co',
                  phone_number: deliveryAddress.phoneNumber,
                },
                callback: (response: any) => {
                  handleOrderSubmit();
                },
                onclose: () => NotificationService.showDialog('Payment window closed', 'info'),
              });
            }}
          >
            Pay with Flutterwave
          </button>
        );
      
      case 'opay':
        return (
          <button
            className="btn btn-primary w-100"
            onClick={() => {
              (window as any).OPayCheckout({
                merchantId: paymentConfig.opay.merchantId,
                reference: Date.now().toString(),
                amount: basket?.subtotal || 0,
                currency: 'USD',
                callbackUrl: `${window.location.origin}/checkout/callback`,
                customerEmail: 'customer@salesnet.co',
                customerPhone: deliveryAddress.phoneNumber,
                onSuccess: () => {
                  handleOrderSubmit();
                },
                onClose: () => NotificationService.showDialog('Payment window closed', 'info'),
              });
            }}
          >
            Pay with OPay
          </button>
        );
      
      case 'card':
      default:
        return (
          <form className="needs-validation pt-4 pb-2 ps-3 ms-2 ms-sm-3">
            <div className="position-relative mb-3 mb-sm-4">
              <input
                type="text"
                className="form-control form-icon-end"
                placeholder="Card number"
                required
              />
              <span className="position-absolute d-flex top-50 end-0 translate-middle-y fs-5 text-body-tertiary me-3" />
            </div>
            <div className="row row-cols-1 row-cols-sm-2 g-3 g-sm-4">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="MM/YY"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  maxLength={4}
                  placeholder="CVC"
                />
              </div>
            </div>
            <button
              type="button"
              className="btn btn-primary w-100 mt-4"
              onClick={handleOrderSubmit}
              disabled={isProcessing}
            >
              {isProcessing ? 'Processing...' : 'Confirm Payment'}
            </button>
          </form>
        );
    }
  };

  // =================
    // Handle delivery option selection
  const handleDeliveryOptionSelect = (details: {
    address: any;
    option: 'delivery' | 'pickup';
  }) => {
    setDeliveryDetails(prev => ({
      ...prev,
      address: details.address,
      option: details.option,
    }));
  };

  // Handle schedule selection
  const handleScheduleSelect = (date: string, timeSlot: string) => {
    setDeliveryDetails(prev => ({
      ...prev,
      schedule: { date, timeSlot },
    }));
  };

  // Format address for display
  const formatDisplayAddress = (address: any) => {
    if (!address) return '';
    return `${address.street_address}, ${address.city}${
      address.state ? `, ${address.state.name}` : ''
    }${address.zip_code ? `, ${address.zip_code}` : ''}${
      address?.state?.country ? `, ${address?.state?.country.name}` : ''
    }`;
  };

  // Format schedule for display
  const formatDisplaySchedule = (schedule: { date: string; timeSlot: string } | null) => {
    if (!schedule) return '';
    
    // Convert date string to readable format
    const dateObj = new Date(schedule.date);
    const formattedDate = dateObj.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
    });
    
    return `${formattedDate} | ${schedule.timeSlot}`;
  };

  return (
    <>
      {/* Delivery options offcanvas */}
       {/* <DeliveryOptionsOffCanvas /> */}
      
      {/* Delivery date and time offcanvas */}
      {/* <DeliveryDateOffCanvas onSelect={handleDeliveryTimeChange} /> */}

       <DeliveryOptionsOffCanvas 
        onOptionSelect={handleDeliveryOptionSelect}
      />
      
      <DeliveryDateOffCanvas 
        onSelect={handleScheduleSelect} 
      />


      {/* Page content */}
      <main className="content-wrapper">
        {/* Breadcrumb */}
        <Breadcrumb 
          items={[
            { label: 'Home', path: '/' },
            { label: 'User', path: '/user/personal' },
            { label: 'Basket', path: '/user/basket' },
            { label: 'Checkout', path: `/user/checkout` }
          ]} 
        />
                
        {/* Checkout form + Order summary */}
        <section className="container pb-5 mb-2 mb-md-3 mb-lg-4 mb-xl-5">
          <h1 className="h3 mb-4">Checkout</h1>
          <div className="row">
            {/* Checkout form */}
            <div className="col-lg-8 col-xl-7 mb-5 mb-lg-0">
              
              {/* Delivery address section */}
              {/* <h2 className="h5 mb-4">Delivery address</h2>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="d-flex align-items-center fs-sm text-dark-emphasis me-3">
                  <i className="ci-map-pin fs-base text-primary me-2" />
                  567 Cherry Souse Lane Sacramento, 95829
                </div>
                <div className="nav animate-scale">
                  <a
                    className="badge text-bg-info rounded-pill animate-target text-nowrap p-1"
                    href="#deliveryOptions"
                    data-bs-toggle="offcanvas"
                    aria-controls="deliveryOptions"
                  >
                    Change address
                  </a>
                </div>
              </div> */}

            {/* Delivery date and time section */}
            {/* <h2 className="h5 mb-4">Delivery Schedule</h2>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="align-items-center fs-sm">
                     <i className="ci-clock fs-base text-primary me-2" />
                        Monday, 13 <span className="opacity-40 mx-2">|</span>
                        12:00 - 16:00
                      </div>  
                <div className="nav animate-scale">
                  <a
                    className="badge text-bg-info rounded-pill animate-target text-nowrap p-1"
                    href="#deliveryDateTime"
                    data-bs-toggle="offcanvas"
                    aria-controls="deliveryDateTime"
                  >
                    Change Schedules
                  </a>

                </div>
              </div> */}

              {/*  */}
               {/* Delivery address section */}
      <h2 className="h5 mb-4">
        {deliveryDetails.option === 'delivery' ? 'Delivery Address' : 'Pickup Location'}
      </h2>
      <div className="d-flex align-items-center justify-content-between mb-4">
        {deliveryDetails.address ? (
          <div className="d-flex flex-column fs-sm text-dark-emphasis me-3">
            <div className="d-flex align-items-center">
              <i className="ci-map-pin fs-base text-primary me-2" />
              <span>{formatDisplayAddress(deliveryDetails.address)}</span>
            </div>
            {deliveryDetails.address.phone_number && (
              <div className="text-muted ms-4 mt-1">Phone: {deliveryDetails.address.phone_number}</div>
            )}
            {deliveryDetails.option === 'pickup' && (
              <div className="text-muted ms-4 mt-1">
                Hours: {stores.find(s => s.id === deliveryDetails.address?.id)?.hours}
              </div>
            )}
          </div>
        ) : (
          <div className="text-muted">No {deliveryDetails.option === 'delivery' ? 'address' : 'location'} selected</div>
        )}
        <div className="nav animate-scale">
          <a
            className="badge text-bg-info text-decoration-none rounded-pill animate-target text-nowrap p-1"
            href="#deliveryOptions"
            data-bs-toggle="offcanvas"
            aria-controls="deliveryOptions"
          >
            {deliveryDetails.address ? "Change" : "Select"}
          </a>
        </div>
      </div>

      {/* Delivery date and time section */}
      {deliveryDetails.option === 'delivery' && (
        <>
          <h2 className="h5 mb-4">Delivery Schedule</h2>
          <div className="d-flex align-items-center justify-content-between mb-4">
            {deliveryDetails.schedule ? (
              <div className="align-items-center fs-sm">
                <i className="ci-clock fs-base text-primary me-2" />
                {formatDisplaySchedule(deliveryDetails.schedule)}
              </div>
            ) : (
              <div className="text-muted">No schedule selected</div>
            )}
            <div className="nav animate-scale">
              <a
                className="badge text-bg-info text-decoration-none rounded-pill animate-target text-nowrap p-1"
                href="#deliveryDateTime"
                data-bs-toggle="offcanvas"
                aria-controls="deliveryDateTime"
              >
                {deliveryDetails.schedule ? "Change" : "Select"}
              </a>
            </div>
          </div>
        </>
      )}



              {/* Payment method section */}
              <h2 className="h5 mt-5 mb-4">Payment method</h2>
              <div id="paymentMethod" role="list">
                {/* Payment method pills */}
                <div className="d-flex flex-wrap gap-3 mb-4">
                  {/* Credit/Debit Card */}
                  <div>
                    <input
                      type="radio"
                      className="btn-check"
                      name="payment-method"
                      id="card"
                      checked={paymentMethod === 'card'}
                      onChange={() => handlePaymentMethodChange('card')}
                    />
                    <label
                      className={`btn btn-outline-secondary rounded-pill d-flex align-items-center ${
                        paymentMethod === 'card' ? 'active' : ''
                      }`}
                      htmlFor="card"
                    >
                      <i className="ci-credit-card fs-base me-2" />
                      Credit/Debit
                      <span className="d-none d-sm-flex gap-1 ms-2">
                        <img src="/assets/img/payment-methods/visa-light-mode.svg" width={20} alt="Visa" />
                        <img src="/assets/img/payment-methods/mastercard.svg" width={20} alt="Mastercard" />
                      </span>
                    </label>
                  </div>

                  {/* PayPal */}
                  <div>
                    <input
                      type="radio"
                      className="btn-check"
                      name="payment-method"
                      id="paypal"
                      checked={paymentMethod === 'paypal'}
                      onChange={() => handlePaymentMethodChange('paypal')}
                    />
                    <label
                      className={`btn btn-outline-secondary rounded-pill d-flex align-items-center ${
                        paymentMethod === 'paypal' ? 'active' : ''
                      }`}
                      htmlFor="paypal"
                    >
                      <img src="/assets/img/payment-methods/paypal-icon.svg" width={20} alt="PayPal" className="me-2" />
                      PayPal
                    </label>
                  </div>

                  {/* Paystack */}
                  <div>
                    <input
                      type="radio"
                      className="btn-check"
                      name="payment-method"
                      id="paystack"
                      checked={paymentMethod === 'paystack'}
                      onChange={() => handlePaymentMethodChange('paystack')}
                    />
                    <label
                      className={`btn btn-outline-secondary rounded-pill d-flex align-items-center ${
                        paymentMethod === 'paystack' ? 'active' : ''
                      }`}
                      htmlFor="paystack"
                    >
                      <img src="/assets/img/payment-methods/paystack-icon.svg" width={20} alt="Paystack" className="me-2" />
                      Paystack
                    </label>
                  </div>

                  {/* Flutterwave */}
                  <div>
                    <input
                      type="radio"
                      className="btn-check"
                      name="payment-method"
                      id="flutterwave"
                      checked={paymentMethod === 'flutterwave'}
                      onChange={() => handlePaymentMethodChange('flutterwave')}
                    />
                    <label
                      className={`btn btn-outline-secondary rounded-pill d-flex align-items-center ${
                        paymentMethod === 'flutterwave' ? 'active' : ''
                      }`}
                      htmlFor="flutterwave"
                    >
                      <img src="/assets/img/payment-methods/flutterwave-icon.svg" width={20} alt="Flutterwave" className="me-2" />
                      Flutterwave
                    </label>
                  </div>

                  {/* OPay */}
                  <div>
                    <input
                      type="radio"
                      className="btn-check"
                      name="payment-method"
                      id="opay"
                      checked={paymentMethod === 'opay'}
                      onChange={() => handlePaymentMethodChange('opay')}
                    />
                    <label
                      className={`btn btn-outline-secondary rounded-pill d-flex align-items-center ${
                        paymentMethod === 'opay' ? 'active' : ''
                      }`}
                      htmlFor="opay"
                    >
                      <img src="/assets/img/payment-methods/opay-icon.svg" width={20} alt="OPay" className="me-2" />
                      OPay
                    </label>
                  </div>
                </div>

                {/* Payment method details (shown based on selection) */}
                <div className="payment-method-details mt-4">
                  {paymentMethod === 'card' && (
                    <div className="card p-4">
                      <form className="needs-validation" noValidate>
                        <div className="mb-3">
                          <label htmlFor="cardNumber" className="form-label">Card number</label>
                          <input
                            type="text"
                            className="form-control"
                            id="cardNumber"
                            placeholder="1234 5678 9012 3456"
                            required
                          />
                        </div>
                        <div className="row g-3">
                          <div className="col-md-6">
                            <label htmlFor="expiryDate" className="form-label">Expiry date</label>
                            <input
                              type="text"
                              className="form-control"
                              id="expiryDate"
                              placeholder="MM/YY"
                              required
                            />
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="cvv" className="form-label">CVV</label>
                            <input
                              type="text"
                              className="form-control"
                              id="cvv"
                              placeholder="123"
                              required
                            />
                          </div>
                        </div>
                        <div className="mt-4">
                          <button 
                            type="button" 
                            className="btn btn-primary w-100"
                            onClick={handleOrderSubmit}
                            disabled={isProcessing}
                          >
                            {isProcessing ? 'Processing...' : 'Pay Now'}
                          </button>
                        </div>
                      </form>
                    </div>
                  )}

                  {paymentMethod === 'paypal' && (
                    <div className="card p-4 text-center">
                      {renderPaymentMethod()}
                    </div>
                  )}

                  {paymentMethod === 'paystack' && (
                    <div className="card p-4 text-center">
                      {renderPaymentMethod()}
                    </div>
                  )}

                  {paymentMethod === 'flutterwave' && (
                    <div className="card p-4 text-center">
                      {renderPaymentMethod()}
                    </div>
                  )}

                  {paymentMethod === 'opay' && (
                    <div className="card p-4 text-center">
                      {renderPaymentMethod()}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Order summary (sticky sidebar) */}
            {!basketLoading && basket && (
              <OrderSummary
                context="checkout"
                itemCount={basket?.itemCount || 0}
                subtotal={basket?.subtotal || 0}
                total={basket?.estimatedTotal }
                discount={basket?.savings || 0}
                deliveryFee={0} // Free shipping
                qualifiesForFreeShipping={basket.subtotal >= basket.freeShippingThreshold}
                isLoading={isProcessing}
                onConfirmOrder={handleOrderSubmit}
              />
            )}

          </div>
        </section>
      </main>
    </>
  );
};

export default Checkout;