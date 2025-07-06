// // V3 - Fixed
// import React, { useState, useEffect } from 'react';
// import { Link, NavLink, useNavigate } from 'react-router-dom';
// // import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
// import DeliveryDateOffCanvas from './DeliveryDateOffCanvas';
// import DeliveryOptionsOffCanvas from './DeliveryOptionsOffCanvas';
// // import AsideOrderSummary from './AsideOrderSummary';
// import { useOrder } from '../../../hooks/useOrder';
// import { usePayment } from '../../../hooks/usePayment';
// import { useBasket } from '../../../hooks/useBasket'; // Add this import
// import { NotificationService } from '../../../services/local/NotificationService';
// import Breadcrumb from '../../../components/shared/Breadcrumb';
// import OrderSummary from '../shared/OrderSummary';
// import { paymentConfig } from '../../../utils/env';

// const Checkout = () => {
//   const navigate = useNavigate();
//   // const { basket } = useBasket(); // Add this hook to get basket state
//   const { basket, loading: basketLoading } = useBasket();
//   const [deliveryAddress, setDeliveryAddress] = useState({
//     house: '',
//     floor: '',
//     phoneNumber: '',
//   });

//   const [deliveryTime, setDeliveryTime] = useState({
//     date: 'today',
//     timeSlot: '10:00 - 12:00',
//   });
//   const [paymentMethod, setPaymentMethod] = useState('card');
//   const [isProcessing, setIsProcessing] = useState(false);

//   // ===============================
//   const [deliveryDetails, setDeliveryDetails] = useState<{
//       address: any | null;
//       schedule: { date: string; timeSlot: string } | null;
//       option: 'delivery' | 'pickup';
//     }>({
//       address: null,
//       schedule: null,
//       option: 'delivery',
//     });
//   // ===============================

//   const { processPayment } = usePayment();
//   const { createOrder } = useOrder();

//   // Handle address change
//   const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setDeliveryAddress(prev => ({ ...prev, [name]: value }));
//   };

//   // Handle delivery time change
//   const handleDeliveryTimeChange = (date: string, timeSlot: string) => {
//     setDeliveryTime({ date, timeSlot });
//   };

//   // Handle payment method change
//   const handlePaymentMethodChange = (method: string) => {
//     setPaymentMethod(method);
//   };

//   // Process order submission
//   const handleOrderSubmit = async () => {
//     if (!deliveryAddress.house || !deliveryAddress.phoneNumber) {
//       NotificationService.showDialog('Please fill in all required address fields');
//       return;
//     }

//     setIsProcessing(true);
    
//     try {
//       // Create order first
//       const order = await createOrder({
//         deliveryAddress,
//         deliveryTime,
//         paymentMethod
//       });

//       // Process payment based on selected method
//       const paymentResult = await processPayment({
//         orderId: order.id,
//         amount: order.total,
//         paymentMethod,
//         customerEmail: order.customerEmail
//       });

//       if (paymentResult.success) {
//         navigate('/checkout/success', { state: { order } });
//       } else {
//         NotificationService.showDialog(paymentResult.message || 'Payment failed');
//       }
//     } catch (error) {
//       console.error('Order processing error:', error);
//       NotificationService.showDialog('Failed to process order');
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   // Payment method components
//   const renderPaymentMethod = () => {
//     switch (paymentMethod) {
//       case 'paypal':
//         return (

//           <PayPalScriptProvider options={{ 
//             'client-id': paymentConfig.paypal.clientId || '',
//             currency: 'USD',
            
//           }}>
//             <PayPalButtons 
//               style={{ layout: 'vertical' }}
//               createOrder={(data, actions) => {
//                 return actions.order.create({
//                   purchase_units: [{
//                     amount: {
//                       value: basket?.subtotal?.toString() || '0'
//                     }
//                   }]
//                 });
//               }}
//               onApprove={(data, actions) => {
//                 return actions.order!.capture().then(() => {
//                   handleOrderSubmit();
//                 });
//               }}
//             />
//           </PayPalScriptProvider>
//         );
      
//       case 'paystack':
//         return (
//           <button 
//             className="btn btn-primary w-100"
//             onClick={() => {
//               const handler = (window as any).PaystackPop.setup({
//                 key: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY,
//                 email: 'customer@salesnet.co',
//                 amount: (basket?.subtotal || 0) * 100, // in kobo
//                 currency: 'NGN',
//                 onClose: () => NotificationService.showDialog('Payment window closed', 'info'),
//                 callback: (response: any) => {
//                   handleOrderSubmit();
//                 }
//               });
//               handler.openIframe();
//             }}
//           >
//             Pay with Paystack
//           </button>
//         );
      
//       case 'flutterwave':
//         return (
//           <button
//             className="btn btn-primary w-100"
//             onClick={() => {
//               (window as any).FlutterwaveCheckout({
//                 public_key: paymentConfig.flutterwave.publicKey,
//                 tx_ref: Date.now().toString(),
//                 amount: basket?.subtotal || 0,
//                 currency: 'USD',
//                 payment_options: 'card,mobilemoney,ussd',
//                 customer: {
//                   email: 'customer@salesnet.co',
//                   phone_number: deliveryAddress.phoneNumber,
//                 },
//                 callback: (response: any) => {
//                   handleOrderSubmit();
//                 },
//                 onclose: () => NotificationService.showDialog('Payment window closed', 'info'),
//               });
//             }}
//           >
//             Pay with Flutterwave
//           </button>
//         );
      
//       case 'opay':
//         return (
//           <button
//             className="btn btn-primary w-100"
//             onClick={() => {
//               (window as any).OPayCheckout({
//                 merchantId: paymentConfig.opay.merchantId,
//                 reference: Date.now().toString(),
//                 amount: basket?.subtotal || 0,
//                 currency: 'USD',
//                 callbackUrl: `${window.location.origin}/checkout/callback`,
//                 customerEmail: 'customer@salesnet.co',
//                 customerPhone: deliveryAddress.phoneNumber,
//                 onSuccess: () => {
//                   handleOrderSubmit();
//                 },
//                 onClose: () => NotificationService.showDialog('Payment window closed', 'info'),
//               });
//             }}
//           >
//             Pay with OPay
//           </button>
//         );
      
//       case 'pay_on_delivery':
//       default:
//         return (
//           <button
//             className="btn btn-primary w-100"
//             onClick={() => {
//               (window as any).FlutterwaveCheckout({
//                 public_key: paymentConfig.flutterwave.publicKey,
//                 tx_ref: Date.now().toString(),
//                 amount: basket?.subtotal || 0,
//                 currency: 'USD',
//                 payment_options: 'card,mobilemoney,ussd',
//                 customer: {
//                   email: 'customer@salesnet.co',
//                   phone_number: deliveryAddress.phoneNumber,
//                 },
//                 callback: (response: any) => {
//                   handleOrderSubmit();
//                 },
//                 onclose: () => NotificationService.showDialog('Payment window closed', 'info'),
//               });
//             }}
//           >
//             Pay on delivery
//           </button>
//         );
//     }
//   };

//   // =================
//     // Handle delivery option selection
//   const handleDeliveryOptionSelect = (details: {
//     address: any;
//     option: 'delivery' | 'pickup';
//   }) => {
//     setDeliveryDetails(prev => ({
//       ...prev,
//       address: details.address,
//       option: details.option,
//     }));
//   };

//   // Handle schedule selection
//   const handleScheduleSelect = (date: string, timeSlot: string) => {
//     setDeliveryDetails(prev => ({
//       ...prev,
//       schedule: { date, timeSlot },
//     }));
//   };

//   // Format address for display
//   const formatDisplayAddress = (address: any) => {
//     if (!address) return '';
//     return `${address.street_address}, ${address.city}${
//       address.state ? `, ${address.state.name}` : ''
//     }${address.zip_code ? `, ${address.zip_code}` : ''}${
//       address?.state?.country ? `, ${address?.state?.country.name}` : ''
//     }`;
//   };

//   // Format schedule for display
//   const formatDisplaySchedule = (schedule: { date: string; timeSlot: string } | null) => {
//     if (!schedule) return '';
    
//     // Convert date string to readable format
//     const dateObj = new Date(schedule.date);
//     const formattedDate = dateObj.toLocaleDateString('en-US', {
//       weekday: 'long',
//       month: 'short',
//       day: 'numeric',
//     });
    
//     return `${formattedDate} | ${schedule.timeSlot}`;
//   };

//   return (
//     <>
//       {/* Delivery options offcanvas */}
//        {/* <DeliveryOptionsOffCanvas /> */}
      
//       {/* Delivery date and time offcanvas */}
//       {/* <DeliveryDateOffCanvas onSelect={handleDeliveryTimeChange} /> */}

//        <DeliveryOptionsOffCanvas 
//         onOptionSelect={handleDeliveryOptionSelect}
//       />
      
//       <DeliveryDateOffCanvas 
//         onSelect={handleScheduleSelect} 
//       />


//       {/* Page content */}
//       <main className="content-wrapper">
//         {/* Breadcrumb */}
//         <Breadcrumb 
//           items={[
//             { label: 'Home', path: '/' },
//             { label: 'User', path: '/user/personal' },
//             { label: 'Basket', path: '/user/basket' },
//             { label: 'Checkout', path: `/user/checkout` }
//           ]} 
//         />
                
//         {/* Checkout form + Order summary */}
//         <section className="container pb-5 mb-2 mb-md-3 mb-lg-4 mb-xl-5">
//           <h1 className="h3 mb-4">Checkout</h1>
//           <div className="row">
//             {/* Checkout form */}
//             <div className="col-lg-8 col-xl-7 mb-5 mb-lg-0">

//                {/* Delivery address section */}
//       <h2 className="h5 mb-4">
//         {deliveryDetails.option === 'delivery' ? 'Delivery Address' : 'Pickup Location'}
//       </h2>
//       <div className="d-flex align-items-center justify-content-between mb-4">
//         {deliveryDetails.address ? (
//           <div className="d-flex flex-column fs-sm text-dark-emphasis me-3">
//             <div className="d-flex align-items-center">
//               <i className="ci-map-pin fs-base text-primary me-2" />
//               <span>{formatDisplayAddress(deliveryDetails.address)}</span>
//             </div>
//             {deliveryDetails.address.phone_number && (
//               <div className="text-muted ms-4 mt-1">Phone: {deliveryDetails.address.phone_number}</div>
//             )}
//             {deliveryDetails.option === 'pickup' && (
//               <div className="text-muted ms-4 mt-1">
//                 Hours: {stores.find(s => s.id === deliveryDetails.address?.id)?.hours}
//               </div>
//             )}
//           </div>
//         ) : (
//           <div className="text-muted">No {deliveryDetails.option === 'delivery' ? 'address' : 'location'} selected</div>
//         )}
//         <div className="nav animate-scale">
//           <a
//             className="badge text-bg-info text-decoration-none rounded-pill animate-target text-nowrap p-1"
//             href="#deliveryOptions"
//             data-bs-toggle="offcanvas"
//             aria-controls="deliveryOptions"
//           >
//             {deliveryDetails.address ? "Change" : "Select"}
//           </a>
//         </div>
//       </div>

//       {/* Delivery date and time section */}
//       {deliveryDetails.option === 'delivery' && (
//         <>
//           <h2 className="h5 mb-4">Delivery Schedule</h2>
//           <div className="d-flex align-items-center justify-content-between mb-4">
//             {deliveryDetails.schedule ? (
//               <div className="align-items-center fs-sm">
//                 <i className="ci-clock fs-base text-primary me-2" />
//                 {formatDisplaySchedule(deliveryDetails.schedule)}
//               </div>
//             ) : (
//               <div className="text-muted">No schedule selected</div>
//             )}
//             <div className="nav animate-scale">
//               <a
//                 className="badge text-bg-info text-decoration-none rounded-pill animate-target text-nowrap p-1"
//                 href="#deliveryDateTime"
//                 data-bs-toggle="offcanvas"
//                 aria-controls="deliveryDateTime"
//               >
//                 {deliveryDetails.schedule ? "Change" : "Select"}
//               </a>
//             </div>
//           </div>
//         </>
//       )}

//               {/* Payment method section */}
//               <h2 className="h5 mt-5 mb-4">Payment method</h2>
//               <div id="paymentMethod" role="list">
//                 {/* Payment method pills */}
//                 <div className="d-flex flex-wrap gap-3 mb-4">

//                   {/* PayPal */}
//                   <div>
//                     <input
//                       type="radio"
//                       className="btn-check"
//                       name="payment-method"
//                       id="paypal"
//                       checked={paymentMethod === 'paypal'}
//                       onChange={() => handlePaymentMethodChange('paypal')}
//                     />
//                     <label
//                       className={`btn btn-outline-secondary rounded-pill d-flex align-items-center ${
//                         paymentMethod === 'paypal' ? 'active' : ''
//                       }`}
//                       htmlFor="paypal"
//                     >
//                       <img src="/assets/img/payment-methods/paypal-icon.svg" width={20} alt="PayPal" className="me-2" />
//                       PayPal
//                     </label>
//                   </div>

//                   {/* Paystack */}
//                   <div>
//                     <input
//                       type="radio"
//                       className="btn-check"
//                       name="payment-method"
//                       id="paystack"
//                       checked={paymentMethod === 'paystack'}
//                       onChange={() => handlePaymentMethodChange('paystack')}
//                     />
//                     <label
//                       className={`btn btn-outline-secondary rounded-pill d-flex align-items-center ${
//                         paymentMethod === 'paystack' ? 'active' : ''
//                       }`}
//                       htmlFor="paystack"
//                     >
//                       <img src="/assets/img/payment-methods/paystack-icon.svg" width={20} alt="Paystack" className="me-2" />
//                       Paystack
//                     </label>
//                   </div>

//                   {/* Flutterwave */}
//                   <div>
//                     <input
//                       type="radio"
//                       className="btn-check"
//                       name="payment-method"
//                       id="flutterwave"
//                       checked={paymentMethod === 'flutterwave'}
//                       onChange={() => handlePaymentMethodChange('flutterwave')}
//                     />
//                     <label
//                       className={`btn btn-outline-secondary rounded-pill d-flex align-items-center ${
//                         paymentMethod === 'flutterwave' ? 'active' : ''
//                       }`}
//                       htmlFor="flutterwave"
//                     >
//                       <img src="/assets/img/payment-methods/flutterwave-icon.svg" width={20} alt="Flutterwave" className="me-2" />
//                       Flutterwave
//                     </label>
//                   </div>

//                   {/* OPay */}
//                   <div>
//                     <input
//                       type="radio"
//                       className="btn-check"
//                       name="payment-method"
//                       id="opay"
//                       checked={paymentMethod === 'opay'}
//                       onChange={() => handlePaymentMethodChange('opay')}
//                     />
//                     <label
//                       className={`btn btn-outline-secondary rounded-pill d-flex align-items-center ${
//                         paymentMethod === 'opay' ? 'active' : ''
//                       }`}
//                       htmlFor="opay"
//                     >
//                       <img src="/assets/img/payment-methods/opay-icon.svg" width={20} alt="OPay" className="me-2" />
//                       OPay
//                     </label>
//                   </div>
//                 </div>

//                 {/* Payment method details (shown based on selection) */}
//                 <div className="payment-method-details mt-4">

//                   {paymentMethod === 'paypal' && (
//                     <div className="card p-4 text-center">
//                       {renderPaymentMethod()}
//                     </div>
//                   )}

//                   {paymentMethod === 'paystack' && (
//                     <div className="card p-4 text-center">
//                       {renderPaymentMethod()}
//                     </div>
//                   )}

//                   {paymentMethod === 'flutterwave' && (
//                     <div className="card p-4 text-center">
//                       {renderPaymentMethod()}
//                     </div>
//                   )}

//                   {paymentMethod === 'opay' && (
//                     <div className="card p-4 text-center">
//                       {renderPaymentMethod()}
//                     </div>
//                   )}

//                   {paymentMethod === 'pay_on_delivery' && (
//                     <div className="card p-4 text-center">
//                       {renderPaymentMethod()}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Order summary (sticky sidebar) */}
//             {!basketLoading && basket && (
//               <OrderSummary
//                 context="checkout"
//                 itemCount={basket?.itemCount || 0}
//                 subtotal={basket?.subtotal || 0}
//                 total={basket?.estimatedTotal }
//                 discount={basket?.savings || 0}
//                 deliveryFee={0} // Free shipping
//                 qualifiesForFreeShipping={basket.subtotal >= basket.freeShippingThreshold}
//                 isLoading={isProcessing}
//                 onConfirmOrder={handleOrderSubmit}
//               />
//             )}

//           </div>
//         </section>
//       </main>
//     </>
//   );
// };

// export default Checkout;


// v5

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import DeliveryDateOffCanvas from './DeliveryDateOffCanvas';
// import DeliveryOptionsOffCanvas from './DeliveryOptionsOffCanvas';
// import { useOrder } from '../../../hooks/useOrder';
// import { usePayment } from '../../../hooks/usePayment';
// import { useBasket } from '../../../hooks/useBasket';
// import { useUser } from '@/context/UserContext';
// import { NotificationService } from '../../../services/local/NotificationService';
// import Breadcrumb from '../../../components/shared/Breadcrumb';
// import OrderSummary from '../shared/OrderSummary';
// import { paymentConfig } from '../../../utils/env';

// const Checkout = () => {
//   const navigate = useNavigate();
//   const { user } = useUser();
//   const { basket, loading: basketLoading } = useBasket();
//   const { processPayment } = usePayment();
//   const { createOrder } = useOrder();
  
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [paymentMethod, setPaymentMethod] = useState('paypal'); // Default to PayPal

//   // Default delivery details
//   const [deliveryDetails, setDeliveryDetails] = useState({
//     address: null as any,
//     schedule: { 
//       date: new Date(Date.now() + 86400000).toISOString().split('T')[0], // Tomorrow
//       timeSlot: '10:00 - 12:00' 
//     },
//     option: 'delivery'
//   });

//   // Set user's primary address on load
//   useEffect(() => {
//     if (user?.addresses) {
//       const primaryAddress = user.addresses.find(addr => addr.is_primary);
//       if (primaryAddress) {
//         setDeliveryDetails(prev => ({
//           ...prev,
//           address: primaryAddress
//         }));
//       }
//     }
//   }, [user]);

//   // Handle delivery option selection
//   const handleDeliveryOptionSelect = (details: {
//     address: any;
//     option: 'delivery' | 'pickup';
//   }) => {
//     setDeliveryDetails(prev => ({
//       ...prev,
//       address: details.address,
//       option: details.option
//     }));
//   };

//   // Handle schedule selection
//   const handleScheduleSelect = (date: string, timeSlot: string) => {
//     setDeliveryDetails(prev => ({
//       ...prev,
//       schedule: { date, timeSlot }
//     }));
//   };

//   // Handle payment method change
//   const handlePaymentMethodChange = (method: string) => {
//     setPaymentMethod(method);
//   };

//   // Format address for display
//   const formatDisplayAddress = (address: any) => {
//     if (!address) return '';
//     return `${address.street_address}, ${address.city?.name}, ${address.zip_code}`;
//   };

//   // Format schedule for display
//   const formatDisplaySchedule = (schedule: { date: string; timeSlot: string } | null) => {
//     if (!schedule) return '';
    
//     const dateObj = new Date(schedule.date);
//     const formattedDate = dateObj.toLocaleDateString('en-US', {
//       weekday: 'long',
//       month: 'short',
//       day: 'numeric',
//     });
    
//     return `${formattedDate} | ${schedule.timeSlot}`;
//   };

//   // Validate checkout form
//   const validateCheckout = (): boolean => {
//     if (!deliveryDetails.address) {
//       NotificationService.showDialog(
//         `Please select a ${deliveryDetails.option === 'delivery' ? 'delivery address' : 'pickup location'}`
//       );
//       return false;
//     }

//     if (deliveryDetails.option === 'delivery' && !deliveryDetails.schedule) {
//       NotificationService.showDialog('Please select a delivery schedule');
//       return false;
//     }

//     return true;
//   };

//   // Process order submission
//   const handleOrderSubmit = async () => {
//     if (!validateCheckout()) return;

//     setIsProcessing(true);
    
//     try {
//       // Prepare order data
//       const orderData = {
//         deliveryOption: deliveryDetails.option,
//         address: deliveryDetails.address,
//         schedule: deliveryDetails.schedule,
//         paymentMethod,
//         basketItems: basket?.items || [],
//         totalAmount: basket?.subtotal || 0
//       };

//       // Create order
//       const order = await createOrder(orderData);

//       // Process payment
//       const paymentResult = await processPayment({
//         orderId: order.id,
//         amount: order.totalAmount,
//         paymentMethod,
//         customerEmail: user?.email || 'customer@example.com'
//       });

//       if (paymentResult.success) {
//         navigate('/checkout/success', { state: { order } });
//       } else {
//         NotificationService.showDialog(paymentResult.message || 'Payment failed');
//       }
//     } catch (error: any) {
//       console.error('Order processing error:', error);
//       NotificationService.showDialog(error.message || 'Failed to process order');
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   return (
//     <>
//       <DeliveryOptionsOffCanvas 
//         onOptionSelect={handleDeliveryOptionSelect}
//       />
      
//       <DeliveryDateOffCanvas 
//         onSelect={handleScheduleSelect} 
//       />

//       <main className="content-wrapper">
//         <Breadcrumb 
//           items={[
//             { label: 'Home', path: '/' },
//             { label: 'Basket', path: '/basket' },
//             { label: 'Checkout', path: '/checkout' }
//           ]} 
//         />
                
//         <section className="container pb-5 mb-2 mb-md-3 mb-lg-4 mb-xl-5">
//           <h1 className="h3 mb-4">Checkout</h1>
//           <div className="row">
//             <div className="col-lg-8 col-xl-7 mb-5 mb-lg-0">
//               {/* Address/Location Section */}
//               <div className="card border-0 shadow-sm mb-4">
//                 <div className="card-body">
//                   <h2 className="h5 mb-4">
//                     {deliveryDetails.option === 'delivery' ? 'Delivery Address' : 'Pickup Location'}
//                   </h2>
                  
//                   {deliveryDetails.address ? (
//                     <div className="d-flex justify-content-between align-items-start">
//                       <div>
//                         <div className="d-flex align-items-center mb-2">
//                           <i className="ci-map-pin fs-base text-primary me-2"></i>
//                           <span className="fw-medium">
//                             {formatDisplayAddress(deliveryDetails.address)}
//                           </span>
//                         </div>
//                         {deliveryDetails.address.phone_number && (
//                           <div className="text-muted small ms-4">
//                             <i className="ci-phone me-1"></i> 
//                             {deliveryDetails.address.phone_number}
//                           </div>
//                         )}
//                         {deliveryDetails.option === 'pickup' && (
//                           <div className="text-muted small ms-4">
//                             <i className="ci-time me-1"></i> 
//                             Hours: {deliveryDetails.address.store?.hours || 'Mon-Sat 9am-6pm'}
//                           </div>
//                         )}
//                       </div>
//                       <a
//                         className="btn btn-sm btn-outline-primary"
//                         href="#deliveryOptions"
//                         data-bs-toggle="offcanvas"
//                         aria-controls="deliveryOptions"
//                       >
//                         Change
//                       </a>
//                     </div>
//                   ) : (
//                     <div className="d-flex justify-content-between align-items-center">
//                       <div className="text-muted">
//                         No {deliveryDetails.option === 'delivery' ? 'address' : 'location'} selected
//                       </div>
//                       <a
//                         className="btn btn-sm btn-primary"
//                         href="#deliveryOptions"
//                         data-bs-toggle="offcanvas"
//                         aria-controls="deliveryOptions"
//                       >
//                         Select
//                       </a>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Delivery Schedule Section */}
//               {deliveryDetails.option === 'delivery' && (
//                 <div className="card border-0 shadow-sm mb-4">
//                   <div className="card-body">
//                     <h2 className="h5 mb-4">Delivery Schedule</h2>
                    
//                     {deliveryDetails.schedule ? (
//                       <div className="d-flex justify-content-between align-items-center">
//                         <div className="d-flex align-items-center">
//                           <i className="ci-clock fs-base text-primary me-2"></i>
//                           <span className="fw-medium">
//                             {formatDisplaySchedule(deliveryDetails.schedule)}
//                           </span>
//                         </div>
//                         <a
//                           className="btn btn-sm btn-outline-primary"
//                           href="#deliveryDateTime"
//                           data-bs-toggle="offcanvas"
//                           aria-controls="deliveryDateTime"
//                         >
//                           Change
//                         </a>
//                       </div>
//                     ) : (
//                       <div className="d-flex justify-content-between align-items-center">
//                         <div className="text-muted">No schedule selected</div>
//                         <a
//                           className="btn btn-sm btn-primary"
//                           href="#deliveryDateTime"
//                           data-bs-toggle="offcanvas"
//                           aria-controls="deliveryDateTime"
//                         >
//                           Select
//                         </a>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               )}

//               {/* Payment Method Section */}
//               <div className="card border-0 shadow-sm">
//                 <div className="card-body">
//                   <h2 className="h5 mb-4">Payment Method</h2>
                  
//                   <div className="d-flex flex-wrap gap-2 mb-4">
//                     {['paypal', 'paystack', 'flutterwave', 'opay', 'pay_on_delivery'].map(method => (
//                       <div key={method}>
//                         <input
//                           type="radio"
//                           className="btn-check"
//                           name="payment-method"
//                           id={method}
//                           checked={paymentMethod === method}
//                           onChange={() => handlePaymentMethodChange(method)}
//                         />
//                         <label
//                           className={`btn btn-outline-secondary btn-sm ${
//                             paymentMethod === method ? 'active' : ''
//                           }`}
//                           htmlFor={method}
//                         >
//                           {method === 'paypal' ? 'PayPal' : 
//                            method === 'paystack' ? 'Paystack' : 
//                            method === 'flutterwave' ? 'Flutterwave' : 
//                            method === 'opay' ? 'OPay' : 'Pay on Delivery'}
//                         </label>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Order Summary */}
//             {!basketLoading && basket && (
//               <div className="col-lg-4 col-xl-5 ps-xl-4">
//                 <OrderSummary
//                   context="checkout"
//                   itemCount={basket.itemCount}
//                   subtotal={basket.subtotal}
//                   total={basket.estimatedTotal}
//                   discount={basket.savings}
//                   deliveryFee={0}
//                   qualifiesForFreeShipping={basket.subtotal >= basket.freeShippingThreshold}
//                 >
//                   <button
//                     className={`btn btn-primary w-100 mt-4 ${isProcessing ? 'disabled1' : ''}`}
//                     onClick={handleOrderSubmit}
//                     disabled={isProcessing}
//                   >
//                     {isProcessing ? (
//                       <>
//                         <span className="spinner-border spinner-border-sm me-2" role="status"></span>
//                         Processing Order...
//                       </>
//                     ) : (
//                       'Place Order'
//                     )}
//                   </button>
//                 </OrderSummary>
//               </div>
//             )}
//           </div>
//         </section>
//       </main>
//     </>
//   );
// };

// export default Checkout;


// v6

// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import DeliveryDateOffCanvas from './DeliveryDateOffCanvas';
// import DeliveryOptionsOffCanvas from './DeliveryOptionsOffCanvas';
// import { useOrder } from '../../../hooks/useOrder';
// import { usePayment } from '../../../hooks/usePayment';
// import { useBasket } from '../../../hooks/useBasket';
// import { useUser } from '@/context/UserContext';
// import { NotificationService } from '../../../services/local/NotificationService';
// import Breadcrumb from '../../../components/shared/Breadcrumb';
// import OrderSummary from '../shared/OrderSummary';
// import { paymentConfig } from '../../../utils/env';

// const Checkout = () => {
//   const navigate = useNavigate();
//   const { user } = useUser();
//   const { basket, loading: basketLoading } = useBasket();
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [paymentMethod, setPaymentMethod] = useState('paypal'); // Default to PayPal
//   const paypalButtonRef = useRef<any>(null);

//   // Delivery details state
//   const [deliveryDetails, setDeliveryDetails] = useState({
//     address: null as any,
//     schedule: null as { date: string; timeSlot: string } | null,
//     option: 'delivery' as 'delivery' | 'pickup',
//   });

//   const { processPayment } = usePayment();
//   const { createOrder } = useOrder();

//   // Set default address and schedule on load
//   useEffect(() => {
//     // Set default address to user's primary address
//     if (user?.addresses?.length) {
//       const primaryAddress = user.addresses.find(addr => addr.is_primary) || user.addresses[0];
//       if (primaryAddress) {
//         setDeliveryDetails(prev => ({ ...prev, address: primaryAddress }));
//       }
//     }

//     // Set default schedule to next day
//     const tomorrow = new Date();
//     tomorrow.setDate(tomorrow.getDate() + 1);
//     const dateStr = tomorrow.toISOString().split('T')[0];
//     setDeliveryDetails(prev => ({
//       ...prev,
//       schedule: { date: dateStr, timeSlot: '10:00 - 12:00' }
//     }));
//   }, [user]);

//   // Handle delivery option selection
//   const handleDeliveryOptionSelect = (details: {
//     address: any;
//     option: 'delivery' | 'pickup';
//   }) => {
//     setDeliveryDetails(prev => ({
//       ...prev,
//       address: details.address,
//       option: details.option,
//     }));
//   };

//   // Handle schedule selection
//   const handleScheduleSelect = (date: string, timeSlot: string) => {
//     setDeliveryDetails(prev => ({
//       ...prev,
//       schedule: { date, timeSlot },
//     }));
//   };

//   // Format address for display
//   const formatDisplayAddress = (address: any) => {
//     if (!address) return '';
//     return `${address.street_address}, ${address.city?.name}, ${address.zip_code}`;
//   };

//   // Format schedule for display
//   const formatDisplaySchedule = (schedule: { date: string; timeSlot: string } | null) => {
//     if (!schedule) return '';
    
//     const dateObj = new Date(schedule.date);
//     const formattedDate = dateObj.toLocaleDateString('en-US', {
//       weekday: 'long',
//       month: 'short',
//       day: 'numeric',
//     });
    
//     return `${formattedDate} | ${schedule.timeSlot}`;
//   };

//   // Validate checkout form
//   const validateCheckout = (): boolean => {
//     if (!deliveryDetails.address) {
//       NotificationService.showDialog(
//         `Please select a ${deliveryDetails.option === 'delivery' ? 'delivery address' : 'pickup location'}`
//       );
//       return false;
//     }

//     if (deliveryDetails.option === 'delivery' && !deliveryDetails.schedule) {
//       NotificationService.showDialog('Please select a delivery schedule');
//       return false;
//     }

//     return true;
//   };

//   // Process payment based on selected method
//   const processSelectedPayment = async (orderId: string, amount: number) => {
//     switch (paymentMethod) {
//       case 'paypal':
//         // For PayPal, we'll trigger the button programmatically
//         if (paypalButtonRef.current) {
//           paypalButtonRef.current.click();
//         }
//         return true;
      
//       case 'paystack':
//         return new Promise((resolve) => {
//           const handler = (window as any).PaystackPop?.setup({
//             key: paymentConfig.paystack?.publicKey,
//             email: user?.email || 'customer@example.com',
//             amount: amount * 100,
//             currency: 'NGN',
//             onClose: () => {
//               NotificationService.showDialog('Payment window closed', 'info');
//               resolve(false);
//             },
//             callback: (response: any) => {
//               resolve(true);
//             }
//           });
//           handler?.openIframe();
//         });
      
//       case 'flutterwave':
//         return new Promise((resolve) => {
//           (window as any).FlutterwaveCheckout?.({
//             public_key: paymentConfig.flutterwave?.publicKey,
//             tx_ref: `${orderId}-${Date.now()}`,
//             amount,
//             currency: 'USD',
//             payment_options: 'card',
//             customer: {
//               email: user?.email || 'customer@example.com',
//               phone_number: deliveryDetails.address?.phone_number || '',
//             },
//             callback: (response: any) => {
//               resolve(response.status === 'successful');
//             },
//             onclose: () => {
//               NotificationService.showDialog('Payment window closed', 'info');
//               resolve(false);
//             },
//           });
//         });
      
//       case 'opay':
//         return new Promise((resolve) => {
//           (window as any).OPayCheckout?.({
//             merchantId: paymentConfig.opay?.merchantId,
//             reference: `${orderId}-${Date.now()}`,
//             amount,
//             currency: 'USD',
//             callbackUrl: `${window.location.origin}/checkout/callback`,
//             customerEmail: user?.email || 'customer@example.com',
//             customerPhone: deliveryDetails.address?.phone_number || '',
//             onSuccess: () => {
//               resolve(true);
//             },
//             onClose: () => {
//               NotificationService.showDialog('Payment window closed', 'info');
//               resolve(false);
//             },
//           });
//         });
      
//       case 'pay_on_delivery':
//         // No payment processing needed
//         return true;
      
//       default:
//         // Card payment would need a gateway integration
//         return true;
//     }
//   };

//   // Handle complete order submission
//   const handleCompleteOrder = async () => {
//     if (!validateCheckout()) return;

//     setIsProcessing(true);
    
//     try {
//       // Prepare order data
//       const orderData = {
//         deliveryOption: deliveryDetails.option,
//         address: deliveryDetails.address,
//         schedule: deliveryDetails.schedule,
//         paymentMethod,
//         basketItems: basket?.items || [],
//       };

//       // Create order
//       const order = await createOrder(orderData);

//       // Process payment
//       const paymentResult = await processSelectedPayment(order.id, order.totalAmount);
      
//       if (paymentResult) {
//         navigate('/checkout/success', { state: { order } });
//       } else {
//         NotificationService.showDialog('Payment was not completed', 'warning');
//       }
//     } catch (error: any) {
//       console.error('Order processing error:', error);
//       NotificationService.showDialog(error.message || 'Failed to process order');
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   // Check if order button should be enabled
//   const isOrderButtonEnabled = () => {
//     return deliveryDetails.address && 
//            (deliveryDetails.option === 'pickup' || deliveryDetails.schedule);
//   };

//   return (
//     <>
//       <DeliveryOptionsOffCanvas 
//         onOptionSelect={handleDeliveryOptionSelect}
//       />
      
//       <DeliveryDateOffCanvas 
//         onSelect={handleScheduleSelect} 
//       />

//       <main className="content-wrapper">
//         <Breadcrumb 
//           items={[
//             { label: 'Home', path: '/' },
//             { label: 'Basket', path: '/basket' },
//             { label: 'Checkout', path: '/checkout' }
//           ]} 
//         />
                
//         <section className="container pb-5 mb-2 mb-md-3 mb-lg-4 mb-xl-5">
//           <h1 className="h3 mb-4">Checkout</h1>
//           <div className="row">
//             <div className="col-lg-8 col-xl-7 mb-5 mb-lg-0">
//               {/* Address/Location Section */}
//               <div className="card border-0 shadow-sm mb-4">
//                 <div className="card-body">
//                   <h2 className="h5 mb-4">
//                     {deliveryDetails.option === 'delivery' ? 'Delivery Address' : 'Pickup Location'}
//                   </h2>
                  
//                   {deliveryDetails.address ? (
//                     <div className="d-flex justify-content-between align-items-start">
//                       <div>
//                         <div className="d-flex align-items-center mb-2">
//                           <i className="ci-map-pin fs-base text-primary me-2"></i>
//                           <span className="fw-medium">
//                             {formatDisplayAddress(deliveryDetails.address)}
//                           </span>
//                         </div>
//                         {deliveryDetails.address.phone_number && (
//                           <div className="text-muted small ms-4">
//                             <i className="ci-phone me-1"></i> 
//                             {deliveryDetails.address.phone_number}
//                           </div>
//                         )}
//                       </div>
//                       <a
//                         className="btn btn-sm btn-outline-primary"
//                         href="#deliveryOptions"
//                         data-bs-toggle="offcanvas"
//                         aria-controls="deliveryOptions"
//                       >
//                         Change
//                       </a>
//                     </div>
//                   ) : (
//                     <div className="d-flex justify-content-between align-items-center">
//                       <div className="text-muted">
//                         No {deliveryDetails.option === 'delivery' ? 'address' : 'location'} selected
//                       </div>
//                       <a
//                         className="btn btn-sm btn-primary"
//                         href="#deliveryOptions"
//                         data-bs-toggle="offcanvas"
//                         aria-controls="deliveryOptions"
//                       >
//                         Select
//                       </a>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Delivery Schedule Section */}
//               {deliveryDetails.option === 'delivery' && (
//                 <div className="card border-0 shadow-sm mb-4">
//                   <div className="card-body">
//                     <h2 className="h5 mb-4">Delivery Schedule</h2>
                    
//                     {deliveryDetails.schedule ? (
//                       <div className="d-flex justify-content-between align-items-center">
//                         <div className="d-flex align-items-center">
//                           <i className="ci-clock fs-base text-primary me-2"></i>
//                           <span className="fw-medium">
//                             {formatDisplaySchedule(deliveryDetails.schedule)}
//                           </span>
//                         </div>
//                         <a
//                           className="btn btn-sm btn-outline-primary"
//                           href="#deliveryDateTime"
//                           data-bs-toggle="offcanvas"
//                           aria-controls="deliveryDateTime"
//                         >
//                           Change
//                         </a>
//                       </div>
//                     ) : (
//                       <div className="d-flex justify-content-between align-items-center">
//                         <div className="text-muted">No schedule selected</div>
//                         <a
//                           className="btn btn-sm btn-primary"
//                           href="#deliveryDateTime"
//                           data-bs-toggle="offcanvas"
//                           aria-controls="deliveryDateTime"
//                         >
//                           Select
//                         </a>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               )}

//               {/* Payment Method Section */}
//               <div className="card border-0 shadow-sm">
//                 <div className="card-body">
//                   <h2 className="h5 mb-4">Payment Method</h2>
                  
//                   <div className="d-flex flex-wrap gap-2 mb-4">
//                     {['paypal', 'paystack', 'flutterwave', 'opay', 'pay_on_delivery'].map(method => (
//                       <div key={method}>
//                         <input
//                           type="radio"
//                           className="btn-check"
//                           name="payment-method"
//                           id={method}
//                           checked={paymentMethod === method}
//                           onChange={() => setPaymentMethod(method)}
//                         />
//                         <label
//                           className={`btn btn-outline-secondary btn-sm ${
//                             paymentMethod === method ? 'active' : ''
//                           }`}
//                           htmlFor={method}
//                         >
//                           {method === 'paypal' ? 'PayPal' : 
//                            method === 'paystack' ? 'Paystack' : 
//                            method === 'flutterwave' ? 'Flutterwave' : 
//                            method === 'opay' ? 'OPay' : 'Pay on Delivery'}
//                         </label>
//                       </div>
//                     ))}
//                   </div>

//                   {/* Hidden PayPal button for programmatic triggering */}
//                   {paymentMethod === 'paypal' && (
//                     <div style={{ display: 'none' }}>
//                       <button
//                         ref={paypalButtonRef}
//                         id="hidden-paypal-button"
//                         onClick={(e) => e.preventDefault()}
//                       >
//                         Hidden PayPal
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Order Summary */}
//             {!basketLoading && basket && (
//               <div className="col-lg-4 col-xl-5 ps-xl-4">
//                 <OrderSummary
//                   context="checkout"
//                   itemCount={basket.itemCount}
//                   subtotal={basket.subtotal}
//                   total={basket.estimatedTotal}
//                   discount={basket.savings}
//                   deliveryFee={0}
//                   qualifiesForFreeShipping={basket.subtotal >= basket.freeShippingThreshold}
//                   deliveryOption={deliveryDetails.option}
//                   onConfirmOrder={handleCompleteOrder}
//                   isProcessing={isProcessing}
//                   isDisabled={!isOrderButtonEnabled()}
//                 />
//               </div>
//             )}
//           </div>
//         </section>
//       </main>
//     </>
//   );
// };

// export default Checkout;

// v6

// V7 - Enhanced with unified order/payment processing
import React, { useState, useEffect, useCallback } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import DeliveryDateOffCanvas from './DeliveryDateOffCanvas';
import DeliveryOptionsOffCanvas from './DeliveryOptionsOffCanvas';
import { useOrder } from '../../../hooks/useOrder';
import { usePayment } from '../../../hooks/usePaymentVerification';
import { useBasket } from '../../../hooks/useBasket';
// import { useAuth } from '../../../hooks/useAuth'; // Add this for user data
// import { AxiosAddressesService } from '../../../services/api/AxiosAddressesService'; // Add this for fetching addresses
import { NotificationService } from '../../../services/local/NotificationService';
import Breadcrumb from '../../../components/shared/Breadcrumb';
import OrderSummary from '../shared/OrderSummary';
import { paymentConfig } from '../../../utils/env';
import { useAuth } from '../../../context/AuthContext';
import { AxiosAddressesService } from '../../../services/net/AxiosAddressesService';

const Checkout = () => {
  const navigate = useNavigate();
  const { basket, loading: basketLoading } = useBasket();
  const { user } = useAuth(); // Get user data for default address
  const [paymentMethod, setPaymentMethod] = useState('paypal'); // Default to PayPal
  const [isProcessing, setIsProcessing] = useState(false);
  const [addresses, setAddresses] = useState<any[]>([]);
  const [addressesLoading, setAddressesLoading] = useState(true);

  const [deliveryDetails, setDeliveryDetails] = useState<{
    address: any | null;
    schedule: { date: string; timeSlot: string } | null;
    option: 'delivery' | 'pickup';
  }>({
    address: null,
    schedule: null,
    option: 'delivery',
  });

  const { processPayment } = usePayment();
  const { createOrder } = useOrder();

  // Fetch user addresses
  const fetchAddresses = useCallback(async () => {
    try {
      setAddressesLoading(true);
      const response = await AxiosAddressesService.fetchAll({
        include_city: true,
        include_state: true,
        include_country: true
      });
      const userAddresses = response.data.addresses || [];
      setAddresses(userAddresses);

      // console.log('userAddresses', userAddresses[0])
      
      // Set primary address as default
      const primaryAddress = userAddresses.find((addr: any) => addr.is_primary);
      const defaultAddress = primaryAddress || userAddresses[0] || null;
      
      if (defaultAddress) {
        setDeliveryDetails(prev => ({
          ...prev,
          address: defaultAddress,
        }));
      }
    } catch (err: any) {
      const message = err.response?.data?.message || 'Failed to load addresses';
      console.error('Address fetch error:', message);
      // Don't show error dialog here as it might interrupt the checkout flow
    } finally {
      setAddressesLoading(false);
    }
  }, []);

  // Set default address and schedule on component mount
  useEffect(() => {
    // Fetch addresses first
    fetchAddresses();

    // Set default schedule to next day
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const defaultSchedule = {
      date: tomorrow.toISOString().split('T')[0], // YYYY-MM-DD format
      timeSlot: '10:00 - 12:00'
    };
    
    setDeliveryDetails(prev => ({
      ...prev,
      schedule: defaultSchedule,
    }));
  }, [fetchAddresses]);

  // Handle payment method change
  const handlePaymentMethodChange = (method: string) => {
    setPaymentMethod(method);
  };

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

  // Enhanced address handling in Checkout
// const handleDeliveryOptionSelect = (details: {
//   address: any;
//   option: 'delivery' | 'pickup';
// }) => {
//   setDeliveryDetails(prev => ({
//     ...prev,
//     address: details.address,
//     option: details.option,
//   }));
  
//   // For API submission
//   setSelectedAddressId(details.address?.id || null);
// };

  // Handle schedule selection
  const handleScheduleSelect = (date: string, timeSlot: string) => {
    setDeliveryDetails(prev => ({
      ...prev,
      schedule: { date, timeSlot },
    }));
  };

  // Unified order processing function
  const handleOrderSubmit = async () => {
    // Validation
    if (!deliveryDetails.address) {
      NotificationService.showDialog('Please select a delivery address or pickup location');
      return;
    }

    if (deliveryDetails.option === 'delivery' && !deliveryDetails.schedule) {
      NotificationService.showDialog('Please select a delivery schedule');
      return;
    }

    if (!basket || basket.itemCount === 0) {
      NotificationService.showDialog('Your basket is empty');
      return;
    }

    setIsProcessing(true);
    
    try {
      // Prepare order data
      const orderData1 = {
        deliveryAddress: deliveryDetails.address,
        deliverySchedule: deliveryDetails.schedule,
        deliveryOption: deliveryDetails.option,
        paymentMethod,
        items: basket.items,
        subtotal: basket.subtotal,
        total: basket.estimatedTotal || basket.subtotal,
        customerEmail: user?.email || 'customer@salesnet.co',
        customerPhone: deliveryDetails.address?.phone_number || user?.phone
      };

      const orderData = {
        delivery_option: deliveryDetails.option,
        address_id: deliveryDetails.address?.id,  // Send address ID if available
        // address_id: selectedAddressId,  // Send address ID if available
        store_id: deliveryDetails.option === 'pickup' ? deliveryDetails.address?.id : null,
        delivery_date: deliveryDetails.schedule?.date,
        delivery_time_slot: deliveryDetails.schedule?.timeSlot,
        payment_method: paymentMethod,
        basket_items: basket.items.map(item => ({
          product_id: item.product_id,
          quantity: item.quantity
        })),
        customer_email: user?.email || 'customer@salesnet.co',
        customer_phone: deliveryDetails.address?.phone_number || user?.phone
      };
      

      // Create order first
      const order = await createOrder(orderData);

      // Process payment based on selected method
      if (paymentMethod === 'pay_on_delivery') {
        // For pay on delivery, just mark order as pending payment
        navigate('/checkout/success', { 
          state: { 
            order: { ...order, paymentStatus: 'pending' },
            message: 'Order placed successfully! Pay on delivery.' 
          } 
        });
      } else {
        // Process payment for other methods
        await processPaymentMethod(order);
      }
    } catch (error) {
      console.error('Order processing error:', error);
      NotificationService.showDialog('Failed to process order. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  // Process payment based on selected method
  const processPaymentMethod = async (order: any) => {
    const amount = order.total;
    const customerEmail = order.customerEmail;
    const customerPhone = deliveryDetails.address?.phone_number;

    switch (paymentMethod) {
      case 'paypal':
        // PayPal will be handled separately through PayPal buttons
        // This is just for direct PayPal API integration if needed
        const paypalResult = await processPayment({
          orderId: order.id,
          amount,
          paymentMethod: 'paypal',
          customerEmail
        });
        
        if (paypalResult.success) {
          navigate('/checkout/success', { state: { order } });
        } else {
          throw new Error(paypalResult.message || 'PayPal payment failed');
        }
        break;

      case 'paystack':
        const handler = (window as any).PaystackPop.setup({
          key: paymentConfig.paystack.publicKey,
          email: customerEmail,
          amount: amount * 100, // Convert to kobo
          currency: 'NGN',
          reference: `order_${order.id}_${Date.now()}`,
          onClose: () => {
            setIsProcessing(false);
            NotificationService.showDialog('Payment cancelled', 'info');
          },
          callback: async (response: any) => {
            try {
              const paymentResult = await processPayment({
                orderId: order.id,
                amount,
                paymentMethod: 'paystack',
                customerEmail,
                paymentReference: response.reference
              });

              if (paymentResult.success) {
                navigate('/checkout/success', { state: { order } });
              } else {
                throw new Error(paymentResult.message || 'Payment verification failed');
              }
            } catch (error) {
              console.error('Payment processing error:', error);
              NotificationService.showDialog('Payment verification failed');
            }
          }
        });
        handler.openIframe();
        break;

      case 'flutterwave':
        (window as any).FlutterwaveCheckout({
          public_key: paymentConfig.flutterwave.publicKey,
          tx_ref: `order_${order.id}_${Date.now()}`,
          amount,
          currency: 'USD',
          payment_options: 'card,mobilemoney,ussd',
          customer: {
            email: customerEmail,
            phone_number: customerPhone,
            name: user?.full_name || 'Customer'
          },
          customizations: {
            title: 'Order Payment',
            description: `Payment for order #${order.id}`,
            logo: '/assets/img/logo.png'
          },
          callback: async (response: any) => {
            try {
              const paymentResult = await processPayment({
                orderId: order.id,
                amount,
                paymentMethod: 'flutterwave',
                customerEmail,
                paymentReference: response.transaction_id
              });

              if (paymentResult.success) {
                navigate('/checkout/success', { state: { order } });
              } else {
                throw new Error(paymentResult.message || 'Payment verification failed');
              }
            } catch (error) {
              console.error('Payment processing error:', error);
              NotificationService.showDialog('Payment verification failed');
            }
          },
          onclose: () => {
            setIsProcessing(false);
            NotificationService.showDialog('Payment cancelled', 'info');
          },
        });
        break;

      case 'opay':
        (window as any).OPayCheckout({
          merchantId: paymentConfig.opay.merchantId,
          reference: `order_${order.id}_${Date.now()}`,
          amount,
          currency: 'USD',
          callbackUrl: `${window.location.origin}/checkout/callback`,
          customerEmail,
          customerPhone,
          customerName: user?.full_name || 'Customer',
          onSuccess: async (response: any) => {
            try {
              const paymentResult = await processPayment({
                orderId: order.id,
                amount,
                paymentMethod: 'opay',
                customerEmail,
                paymentReference: response.reference
              });

              if (paymentResult.success) {
                navigate('/checkout/success', { state: { order } });
              } else {
                throw new Error(paymentResult.message || 'Payment verification failed');
              }
            } catch (error) {
              console.error('Payment processing error:', error);
              NotificationService.showDialog('Payment verification failed');
            }
          },
          onClose: () => {
            setIsProcessing(false);
            NotificationService.showDialog('Payment cancelled', 'info');
          },
        });
        break;

      default:
        throw new Error('Invalid payment method selected');
    }
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
    
    const dateObj = new Date(schedule.date);
    const formattedDate = dateObj.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
    });
    
    return `${formattedDate} | ${schedule.timeSlot}`;
  };

  // Check if order can be placed
  const canPlaceOrder = () => {
    const hasAddress = !!deliveryDetails.address;
    const hasSchedule = deliveryDetails.option === 'pickup' || !!deliveryDetails.schedule;
    const hasItems = basket && basket.itemCount > 0;
    const notProcessing = !isProcessing;
    const addressesLoaded = !addressesLoading;
    
    return hasAddress && hasSchedule && hasItems && notProcessing && addressesLoaded;
  };

  return (
    <>
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

                  {/* Pay on Delivery */}
                  <div>
                    <input
                      type="radio"
                      className="btn-check"
                      name="payment-method"
                      id="pay_on_delivery"
                      checked={paymentMethod === 'pay_on_delivery'}
                      onChange={() => handlePaymentMethodChange('pay_on_delivery')}
                    />
                    <label
                      className={`btn btn-outline-secondary rounded-pill d-flex align-items-center ${
                        paymentMethod === 'pay_on_delivery' ? 'active' : ''
                      }`}
                      htmlFor="pay_on_delivery"
                    >
                      <i className="ci-cash fs-base me-2" />
                      Pay on Delivery
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Order summary (sticky sidebar) */}
            {!basketLoading && basket && (
              <OrderSummary
                context="checkout"
                itemCount={basket?.itemCount || 0}
                subtotal={basket?.subtotal || 0}
                total={basket?.estimatedTotal || basket?.subtotal}
                discount={basket?.savings || 0}
                deliveryFee={0} // Free shipping
                qualifiesForFreeShipping={basket.subtotal >= (basket.freeShippingThreshold || 0)}
                isLoading={isProcessing}
                onConfirmOrder={handleOrderSubmit}
                canPlaceOrder={canPlaceOrder()}
                buttonText={isProcessing ? 'Processing...' : 'Confirm Order'}
              />
            )}

          </div>
        </section>
      </main>
    </>
  );
};

export default Checkout;