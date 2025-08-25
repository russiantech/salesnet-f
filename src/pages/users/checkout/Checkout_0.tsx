// import React from 'react'
// import { Link, NavLink } from 'react-router-dom'
// import DeliveryDateOffCanvas from './DeliveryDateOffCanvas'
// import DeliveryOptionsOffCanvas from './DeliveryOptionsOffCanvas'
// import AsideOrderSummary from './AsideOrderSummary'

// const Checkout = () => {
//   return (
//     <>

//       {/* Delivey options offcanvas */}
//       <DeliveryOptionsOffCanvas />
      
//       {/* Delivery date and time offcanvas */}
//       <DeliveryDateOffCanvas />

//       {/* Page content */}
//       <main className="content-wrapper">
//         {/* Breadcrumb */}
//         <nav className="container pt-1 pt-md-0 my-3 my-md-4" aria-label="breadcrumb">
//           <ol className="breadcrumb mb-0">
//             <li className="breadcrumb-item">
//               <NavLink to="/">Home</NavLink>
//             </li>
//             <li className="breadcrumb-item">
//               <Link to="/users/personnal">User</Link>
//             </li>
//             <li className="breadcrumb-item">
//               <NavLink to="/basket">Basket</NavLink>
//             </li>
//             <li className="breadcrumb-item active" aria-current="page">
//               Checkout
//             </li>
//           </ol>
//         </nav>
//         {/* Checkout form + Order summary */}
//         <section className="container pb-5 mb-2 mb-md-3 mb-lg-4 mb-xl-5">
//           <h1 className="h3 mb-4">Checkout</h1>
//           <div className="row">
//             {/* Checkout form */}
//             <div className="col-lg-8 col-xl-7 mb-5 mb-lg-0">
//               {/* Delivery address section */}
//               <h2 className="h5 mb-4">Delivery address</h2>
//               <div className="d-flex align-items-center justify-content-between mb-4">
//                 <div className="d-flex align-items-center fs-sm text-dark-emphasis me-3">
//                   <i className="ci-map-pin fs-base text-primary me-2" />
//                   567 Cherry Souse Lane Sacramento, 95829
//                 </div>
//                 <div className="nav animate-scale">
//                   <a
//                     className="badge text-bg-info rounded-pill animate-target text-nowrap p-1"
//                     href="#deliveryOptions"
//                     data-bs-toggle="offcanvas"
//                     aria-controls="deliveryOptions"
//                   >
//                     Change address
//                   </a>
//                 </div>
//               </div>
//               <div className="row row-cols-1 row-cols-sm-2 g-3 g-ms-4 mb-3 mb-sm-4">
//                 <div className="col">
//                   <label htmlFor="house" className="form-label">
//                     House / Flat*
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="house"
//                     name="house"
//                   />
//                 </div>
//                 <div className="col">
//                   <label htmlFor="floor" className="form-label">
//                     Floor{" "}
//                     <span className="fw-normal text-body-secondary">
//                       (optional)
//                     </span>
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="floor"
//                     name="floor"
//                   />
//                 </div>
//               </div>
//               <label htmlFor="phone-number" className="form-label">
//                 Phone number *{" "}
//                 <span className="fw-normal text-body-secondary">
//                   (We'll contact you in case anything comes up with your order)
//                 </span>
//               </label>
//               <input
//                 type="tel"
//                 className="form-control"
//                 id="phone-number"
//                 name="phone_number"
//                 data-input-format='{"numericOnly": true, "delimiters": ["+1 ", " ", " "], "blocks": [0, 3, 3, 2]}'
//                 placeholder="+234 ___ ___ __"
//               />
//               {/* Delivery date and time section */}
//               <h2 className="h5 mt-5 mb-4">Delivery date and time</h2>
//               <div className="d-flex flex-wrap gap-3">
//                 <div>
//                   <input
//                     type="radio"
//                     className="btn-check"
//                     name="date"
//                     id="today"
//                     defaultChecked=""
//                   />
//                   <label
//                     className="btn btn-outline-secondary rounded-pill"
//                     htmlFor="today"
//                   >
//                     Today
//                   </label>
//                 </div>
//                 <div>
//                   <input
//                     type="radio"
//                     className="btn-check"
//                     name="date"
//                     id="tomorrow"
//                   />
//                   <label
//                     className="btn btn-outline-secondary rounded-pill"
//                     htmlFor="tomorrow"
//                   >
//                     Tomorrow
//                   </label>
//                 </div>
//                 <div>
//                   <input
//                     type="radio"
//                     className="btn-check"
//                     name="date"
//                     id="other-date"
//                   />
//                   <label
//                     className="btn btn-outline-secondary rounded-pill"
//                     htmlFor="other-date"
//                     data-bs-toggle="offcanvas"
//                     data-bs-target="#deliveryDateTime"
//                     aria-controls="deliveryDateTime"
//                   >
//                     Other date
//                   </label>
//                 </div>
//               </div>
//               <div className="fs-sm mt-4">
//                 The cost of delivery:{" "}
//                 <span className="fw-semibold text-dark-emphasis">Free</span>
//               </div>
//               <div className="d-flex flex-wrap gap-3 mt-3">
//                 <div>
//                   <input
//                     type="radio"
//                     className="btn-check"
//                     name="time"
//                     id="time-1"
//                     defaultChecked=""
//                   />
//                   <label
//                     className="btn btn-outline-secondary rounded-pill"
//                     htmlFor="time-1"
//                   >
//                     10:00 - 12:00
//                   </label>
//                 </div>
//                 <div>
//                   <input
//                     type="radio"
//                     className="btn-check"
//                     name="time"
//                     id="time-2"
//                   />
//                   <label
//                     className="btn btn-outline-secondary rounded-pill"
//                     htmlFor="time-2"
//                   >
//                     12:00 - 14:00
//                   </label>
//                 </div>
//                 <div>
//                   <input
//                     type="radio"
//                     className="btn-check"
//                     name="time"
//                     id="time-3"
//                   />
//                   <label
//                     className="btn btn-outline-secondary rounded-pill"
//                     htmlFor="time-3"
//                   >
//                     14:00 - 16:00
//                   </label>
//                 </div>
//                 <div>
//                   <input
//                     type="radio"
//                     className="btn-check"
//                     name="time"
//                     id="time-4"
//                   />
//                   <label
//                     className="btn btn-outline-secondary rounded-pill"
//                     htmlFor="time-4"
//                   >
//                     16:00 - 18:00
//                   </label>
//                 </div>
//                 <div>
//                   <input
//                     type="radio"
//                     className="btn-check"
//                     name="time"
//                     id="time-5"
//                   />
//                   <label
//                     className="btn btn-outline-secondary rounded-pill"
//                     htmlFor="time-5"
//                   >
//                     18:00 - 20:00
//                   </label>
//                 </div>
//               </div>
//               {/* Payment method section */}
//               <h2 className="h5 mt-5 mb-0">Payment method</h2>
//               <div id="paymentMethod" role="list">
//                 {/* Credit card */}
//                 <div className="mt-4">
//                   <div
//                     className="form-check mb-0"
//                     role="listitem"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#card"
//                     aria-expanded="true"
//                     aria-controls="card"
//                   >
//                     <label className="form-check-label d-flex align-items-center text-dark-emphasis fw-semibold">
//                       <input
//                         type="radio"
//                         className="form-check-input fs-base me-2 me-sm-3"
//                         name="payment-method"
//                         defaultChecked=""
//                       />
//                       Credit or debit card
//                       <span className="d-none d-sm-flex gap-2 ms-3">
//                         <img
//                           src="/assets/img/payment-methods/amex.svg"
//                           className="d-block bg-info rounded-1"
//                           width={36}
//                           alt="Amex"
//                         />
//                         <img
//                           src="/assets/img/payment-methods/visa-light-mode.svg"
//                           className="d-none-dark"
//                           width={36}
//                           alt="Visa"
//                         />
//                         <img
//                           src="/assets/img/payment-methods/visa-dark-mode.svg"
//                           className="d-none d-block-dark"
//                           width={36}
//                           alt="Visa"
//                         />
//                         <img
//                           src="/assets/img/payment-methods/mastercard.svg"
//                           width={36}
//                           alt="Mastercard"
//                         />
//                         <img
//                           src="/assets/img/payment-methods/maestro.svg"
//                           width={36}
//                           alt="Maestro"
//                         />
//                       </span>
//                     </label>
//                   </div>
//                   <div
//                     className="collapse show"
//                     id="card"
//                     data-bs-parent="#paymentMethod"
//                   >
//                     <form
//                       className="needs-validation pt-4 pb-2 ps-3 ms-2 ms-sm-3"
//                       noValidate=""
//                     >
//                       <div
//                         className="position-relative mb-3 mb-sm-4"
//                         data-input-format='{"creditCard": true}'
//                       >
//                         <input
//                           type="text"
//                           className="form-control form-icon-end"
//                           placeholder="Card number"
//                           required=""
//                         />
//                         <span
//                           className="position-absolute d-flex top-50 end-0 translate-middle-y fs-5 text-body-tertiary me-3"
//                           data-card-icon=""
//                         />
//                       </div>
//                       <div className="row row-cols-1 row-cols-sm-2 g-3 g-sm-4">
//                         <div className="col">
//                           <input
//                             type="text"
//                             className="form-control "
//                             data-input-format='{"date": true, "datePattern": ["m", "y"]}'
//                             placeholder="MM/YY"
//                           />
//                         </div>
//                         <div className="col">
//                           <input
//                             type="text"
//                             className="form-control "
//                             maxLength={4}
//                             data-input-format='{"numeral": true, "numeralPositiveOnly": true, "numeralThousandsGroupStyle": "none"}'
//                             placeholder="CVC"
//                           />
//                         </div>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//                 {/* PayPal */}
//                 <div className="mt-4">
//                   <div
//                     className="form-check mb-0"
//                     role="listitem"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#paypal"
//                     aria-expanded="false"
//                     aria-controls="paypal"
//                   >
//                     <label className="form-check-label d-flex align-items-center text-dark-emphasis fw-semibold">
//                       <input
//                         type="radio"
//                         className="form-check-input fs-base me-2 me-sm-3"
//                         name="payment-method"
//                       />
//                       PayPal
//                       <img
//                         src="/assets/img/payment-methods/paypal-icon.svg"
//                         className="ms-3"
//                         width={16}
//                         alt="PayPal"
//                       />
//                     </label>
//                   </div>
//                   <div
//                     className="collapse"
//                     id="paypal"
//                     data-bs-parent="#paymentMethod"
//                   />
//                 </div>
//                 {/* Google Pay */}
//                 <div className="mt-4">
//                   <div
//                     className="form-check mb-0"
//                     role="listitem"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#googlepay"
//                     aria-expanded="false"
//                     aria-controls="googlepay"
//                   >
//                     <label className="form-check-label d-flex align-items-center text-dark-emphasis fw-semibold">
//                       <input
//                         type="radio"
//                         className="form-check-input fs-base me-2 me-sm-3"
//                         name="payment-method"
//                       />
//                       Google Pay
//                       <img
//                         src="/assets/img/payment-methods/google-icon.svg"
//                         className="ms-3"
//                         width={20}
//                         alt="Google Pay"
//                       />
//                     </label>
//                   </div>
//                   <div
//                     className="collapse"
//                     id="googlepay"
//                     data-bs-parent="#paymentMethod"
//                   />
//                 </div>

//                 {/* Card on delivery */}
//                 <div className="mt-4">
//                   <div
//                     className="form-check mb-0"
//                     role="listitem"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#card-on-delivery"
//                     aria-expanded="false"
//                     aria-controls="card-on-delivery"
//                   >
//                     <label className="form-check-label text-dark-emphasis fw-semibold">
//                       <input
//                         type="radio"
//                         className="form-check-input fs-base me-2 me-sm-3"
//                         name="payment-method"
//                       />
//                       Payment on delivery
//                     </label>
//                   </div>
//                   <div
//                     className="collapse"
//                     id="card-on-delivery"
//                     data-bs-parent="#paymentMethod"
//                   />
//                 </div>
//               </div>

//             </div>
//             {/* Order summary (sticky sidebar) */}
//             <AsideOrderSummary />

//           </div>
//         </section>

//       </main>

//       </>
//   )
// }

// export default Checkout

// 
// V2
// import React, { useState, useEffect } from 'react';
// import { Link, NavLink, useNavigate } from 'react-router-dom';
// import DeliveryDateOffCanvas from './DeliveryDateOffCanvas';
// import DeliveryOptionsOffCanvas from './DeliveryOptionsOffCanvas';
// import AsideOrderSummary from './AsideOrderSummary';
// import { usePayment } from '../../../hooks/usePayment';
// import { useOrder } from '../../../hooks/useOrder';
// import { NotificationService } from '../../../services/local/NotificationService';

// const Checkout = () => {
//   const navigate = useNavigate();
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
//             'client-id': process.env.REACT_APP_PAYPAL_CLIENT_ID || '',
//             currency: 'USD'
//           }}>
//             <PayPalButtons 
//               style={{ layout: 'vertical' }}
//               createOrder={(data, actions) => {
//                 return actions.order.create({
//                   purchase_units: [{
//                     amount: {
//                       value: '68.91' // Should come from order total
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
//               // Initialize Paystack payment
//               const handler = (window as any).PaystackPop.setup({
//                 key: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY,
//                 email: 'customer@salesnet.co', // Should come from user data
//                 amount: 6891 * 100, // in kobo
//                 currency: 'NGN',
//                 onClose: () => NotificationService.showInfo('Payment window closed'),
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
//               // Initialize Flutterwave payment
//               (window as any).FlutterwaveCheckout({
//                 public_key: process.env.REACT_APP_FLUTTERWAVE_PUBLIC_KEY,
//                 tx_ref: Date.now().toString(),
//                 amount: 68.91,
//                 currency: 'USD',
//                 payment_options: 'card,mobilemoney,ussd',
//                 customer: {
//                   email: 'customer@salesnet.co',
//                   phone_number: deliveryAddress.phoneNumber,
//                 },
//                 callback: (response: any) => {
//                   handleOrderSubmit();
//                 },
//                 onclose: () => NotificationService.showInfo('Payment window closed'),
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
//               // Initialize OPay payment
//               (window as any).OPayCheckout({
//                 merchantId: process.env.REACT_APP_OPAY_MERCHANT_ID,
//                 reference: Date.now().toString(),
//                 amount: 68.91,
//                 currency: 'USD',
//                 callbackUrl: `${window.location.origin}/checkout/callback`,
//                 customerEmail: 'customer@salesnet.co',
//                 customerPhone: deliveryAddress.phoneNumber,
//                 onSuccess: () => {
//                   handleOrderSubmit();
//                 },
//                 onClose: () => NotificationService.showInfo('Payment window closed'),
//               });
//             }}
//           >
//             Pay with OPay
//           </button>
//         );
      
//       case 'card':
//       default:
//         return (
//           <form className="needs-validation pt-4 pb-2 ps-3 ms-2 ms-sm-3">
//             <div className="position-relative mb-3 mb-sm-4">
//               <input
//                 type="text"
//                 className="form-control form-icon-end"
//                 placeholder="Card number"
//                 required
//               />
//               <span className="position-absolute d-flex top-50 end-0 translate-middle-y fs-5 text-body-tertiary me-3" />
//             </div>
//             <div className="row row-cols-1 row-cols-sm-2 g-3 g-sm-4">
//               <div className="col">
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="MM/YY"
//                 />
//               </div>
//               <div className="col">
//                 <input
//                   type="text"
//                   className="form-control"
//                   maxLength={4}
//                   placeholder="CVC"
//                 />
//               </div>
//             </div>
//             <button
//               type="button"
//               className="btn btn-primary w-100 mt-4"
//               onClick={handleOrderSubmit}
//               disabled={isProcessing}
//             >
//               {isProcessing ? 'Processing...' : 'Confirm Payment'}
//             </button>
//           </form>
//         );
//     }
//   };

//   return (
//     <>
//       {/* Delivery options offcanvas */}
//       <DeliveryOptionsOffCanvas />
      
//       {/* Delivery date and time offcanvas */}
//       <DeliveryDateOffCanvas onSelect={handleDeliveryTimeChange} />

//       {/* Page content */}
//       <main className="content-wrapper">
//         {/* Breadcrumb */}
//         <nav className="container pt-1 pt-md-0 my-3 my-md-4" aria-label="breadcrumb">
//           <ol className="breadcrumb mb-0">
//             <li className="breadcrumb-item">
//               <NavLink to="/">Home</NavLink>
//             </li>
//             <li className="breadcrumb-item">
//               <Link to="/users/personal">User</Link>
//             </li>
//             <li className="breadcrumb-item">
//               <NavLink to="/basket">Basket</NavLink>
//             </li>
//             <li className="breadcrumb-item active" aria-current="page">
//               Checkout
//             </li>
//           </ol>
//         </nav>
        
//         {/* Checkout form + Order summary */}
//         <section className="container pb-5 mb-2 mb-md-3 mb-lg-4 mb-xl-5">
//           <h1 className="h3 mb-4">Checkout</h1>
//           <div className="row">
//             {/* Checkout form */}
//             <div className="col-lg-8 col-xl-7 mb-5 mb-lg-0">
//               {/* Delivery address section */}
//               <h2 className="h5 mb-4">Delivery address</h2>
//               <div className="d-flex align-items-center justify-content-between mb-4">
//                 <div className="d-flex align-items-center fs-sm text-dark-emphasis me-3">
//                   <i className="ci-map-pin fs-base text-primary me-2" />
//                   567 Cherry Souse Lane Sacramento, 95829
//                 </div>
//                 <div className="nav animate-scale">
//                   <a
//                     className="badge text-bg-info rounded-pill animate-target text-nowrap p-1"
//                     href="#deliveryOptions"
//                     data-bs-toggle="offcanvas"
//                     aria-controls="deliveryOptions"
//                   >
//                     Change address
//                   </a>
//                 </div>
//               </div>
//               <div className="row row-cols-1 row-cols-sm-2 g-3 g-ms-4 mb-3 mb-sm-4">
//                 <div className="col">
//                   <label htmlFor="house" className="form-label">
//                     House / Flat*
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="house"
//                     name="house"
//                     value={deliveryAddress.house}
//                     onChange={handleAddressChange}
//                     required
//                   />
//                 </div>
//                 <div className="col">
//                   <label htmlFor="floor" className="form-label">
//                     Floor <span className="fw-normal text-body-secondary">(optional)</span>
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="floor"
//                     name="floor"
//                     value={deliveryAddress.floor}
//                     onChange={handleAddressChange}
//                   />
//                 </div>
//               </div>
//               <label htmlFor="phone-number" className="form-label">
//                 Phone number * <span className="fw-normal text-body-secondary">
//                   (We'll contact you in case anything comes up with your order)
//                 </span>
//               </label>
//               <input
//                 type="tel"
//                 className="form-control"
//                 id="phone-number"
//                 name="phoneNumber"
//                 value={deliveryAddress.phoneNumber}
//                 onChange={handleAddressChange}
//                 required
//                 placeholder="+234 ___ ___ __"
//               />

//               {/* Delivery date and time section */}
//               <h2 className="h5 mt-5 mb-4">Delivery date and time</h2>
//               <div className="d-flex flex-wrap gap-3">
//                 <div>
//                   <input
//                     type="radio"
//                     className="btn-check"
//                     name="date"
//                     id="today"
//                     checked={deliveryTime.date === 'today'}
//                     onChange={() => handleDeliveryTimeChange('today', deliveryTime.timeSlot)}
//                   />
//                   <label className="btn btn-outline-secondary rounded-pill" htmlFor="today">
//                     Today
//                   </label>
//                 </div>
//                 <div>
//                   <input
//                     type="radio"
//                     className="btn-check"
//                     name="date"
//                     id="tomorrow"
//                     checked={deliveryTime.date === 'tomorrow'}
//                     onChange={() => handleDeliveryTimeChange('tomorrow', deliveryTime.timeSlot)}
//                   />
//                   <label className="btn btn-outline-secondary rounded-pill" htmlFor="tomorrow">
//                     Tomorrow
//                   </label>
//                 </div>
//                 <div>
//                   <input
//                     type="radio"
//                     className="btn-check"
//                     name="date"
//                     id="other-date"
//                     checked={deliveryTime.date === 'other'}
//                     onChange={() => handleDeliveryTimeChange('other', deliveryTime.timeSlot)}
//                   />
//                   <label
//                     className="btn btn-outline-secondary rounded-pill"
//                     htmlFor="other-date"
//                     data-bs-toggle="offcanvas"
//                     data-bs-target="#deliveryDateTime"
//                     aria-controls="deliveryDateTime"
//                   >
//                     Other date
//                   </label>
//                 </div>
//               </div>
//               <div className="fs-sm mt-4">
//                 The cost of delivery: <span className="fw-semibold text-dark-emphasis">Free</span>
//               </div>
//               <div className="d-flex flex-wrap gap-3 mt-3">
//                 {['10:00 - 12:00', '12:00 - 14:00', '14:00 - 16:00', '16:00 - 18:00', '18:00 - 20:00'].map((time) => (
//                   <div key={time}>
//                     <input
//                       type="radio"
//                       className="btn-check"
//                       name="time"
//                       id={`time-${time}`}
//                       checked={deliveryTime.timeSlot === time}
//                       onChange={() => handleDeliveryTimeChange(deliveryTime.date, time)}
//                     />
//                     <label className="btn btn-outline-secondary rounded-pill" htmlFor={`time-${time}`}>
//                       {time}
//                     </label>
//                   </div>
//                 ))}
//               </div>

//               {/* Payment method section */}
//               <h2 className="h5 mt-5 mb-0">Payment method</h2>
//               <div id="paymentMethod" role="list">
//                 {/* Credit card */}
//                 <div className="mt-4">
//                   <div
//                     className="form-check mb-0"
//                     role="listitem"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#card"
//                     aria-expanded={paymentMethod === 'card'}
//                     aria-controls="card"
//                     onClick={() => handlePaymentMethodChange('card')}
//                   >
//                     <label className="form-check-label d-flex align-items-center text-dark-emphasis fw-semibold">
//                       <input
//                         type="radio"
//                         className="form-check-input fs-base me-2 me-sm-3"
//                         name="payment-method"
//                         checked={paymentMethod === 'card'}
//                         onChange={() => {}}
//                       />
//                       Credit or debit card
//                       <span className="d-none d-sm-flex gap-2 ms-3">
//                         <img src="/assets/img/payment-methods/amex.svg" className="d-block bg-info rounded-1" width={36} alt="Amex" />
//                         <img src="/assets/img/payment-methods/visa-light-mode.svg" className="d-none-dark" width={36} alt="Visa" />
//                         <img src="/assets/img/payment-methods/visa-dark-mode.svg" className="d-none d-block-dark" width={36} alt="Visa" />
//                         <img src="/assets/img/payment-methods/mastercard.svg" width={36} alt="Mastercard" />
//                         <img src="/assets/img/payment-methods/maestro.svg" width={36} alt="Maestro" />
//                       </span>
//                     </label>
//                   </div>
//                   <div
//                     className={`collapse ${paymentMethod === 'card' ? 'show' : ''}`}
//                     id="card"
//                     data-bs-parent="#paymentMethod"
//                   >
//                     {renderPaymentMethod()}
//                   </div>
//                 </div>
                
//                 {/* PayPal */}
//                 <div className="mt-4">
//                   <div
//                     className="form-check mb-0"
//                     role="listitem"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#paypal"
//                     aria-expanded={paymentMethod === 'paypal'}
//                     aria-controls="paypal"
//                     onClick={() => handlePaymentMethodChange('paypal')}
//                   >
//                     <label className="form-check-label d-flex align-items-center text-dark-emphasis fw-semibold">
//                       <input
//                         type="radio"
//                         className="form-check-input fs-base me-2 me-sm-3"
//                         name="payment-method"
//                         checked={paymentMethod === 'paypal'}
//                         onChange={() => {}}
//                       />
//                       PayPal
//                       <img src="/assets/img/payment-methods/paypal-icon.svg" className="ms-3" width={16} alt="PayPal" />
//                     </label>
//                   </div>
//                   <div
//                     className={`collapse ${paymentMethod === 'paypal' ? 'show' : ''}`}
//                     id="paypal"
//                     data-bs-parent="#paymentMethod"
//                   >
//                     {renderPaymentMethod()}
//                   </div>
//                 </div>
                
//                 {/* Paystack */}
//                 <div className="mt-4">
//                   <div
//                     className="form-check mb-0"
//                     role="listitem"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#paystack"
//                     aria-expanded={paymentMethod === 'paystack'}
//                     aria-controls="paystack"
//                     onClick={() => handlePaymentMethodChange('paystack')}
//                   >
//                     <label className="form-check-label d-flex align-items-center text-dark-emphasis fw-semibold">
//                       <input
//                         type="radio"
//                         className="form-check-input fs-base me-2 me-sm-3"
//                         name="payment-method"
//                         checked={paymentMethod === 'paystack'}
//                         onChange={() => {}}
//                       />
//                       Paystack
//                       <img src="/assets/img/payment-methods/paystack-icon.svg" className="ms-3" width={20} alt="Paystack" />
//                     </label>
//                   </div>
//                   <div
//                     className={`collapse ${paymentMethod === 'paystack' ? 'show' : ''}`}
//                     id="paystack"
//                     data-bs-parent="#paymentMethod"
//                   >
//                     {renderPaymentMethod()}
//                   </div>
//                 </div>
                
//                 {/* Flutterwave */}
//                 <div className="mt-4">
//                   <div
//                     className="form-check mb-0"
//                     role="listitem"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#flutterwave"
//                     aria-expanded={paymentMethod === 'flutterwave'}
//                     aria-controls="flutterwave"
//                     onClick={() => handlePaymentMethodChange('flutterwave')}
//                   >
//                     <label className="form-check-label d-flex align-items-center text-dark-emphasis fw-semibold">
//                       <input
//                         type="radio"
//                         className="form-check-input fs-base me-2 me-sm-3"
//                         name="payment-method"
//                         checked={paymentMethod === 'flutterwave'}
//                         onChange={() => {}}
//                       />
//                       Flutterwave
//                       <img src="/assets/img/payment-methods/flutterwave-icon.svg" className="ms-3" width={20} alt="Flutterwave" />
//                     </label>
//                   </div>
//                   <div
//                     className={`collapse ${paymentMethod === 'flutterwave' ? 'show' : ''}`}
//                     id="flutterwave"
//                     data-bs-parent="#paymentMethod"
//                   >
//                     {renderPaymentMethod()}
//                   </div>
//                 </div>
                
//                 {/* OPay */}
//                 <div className="mt-4">
//                   <div
//                     className="form-check mb-0"
//                     role="listitem"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#opay"
//                     aria-expanded={paymentMethod === 'opay'}
//                     aria-controls="opay"
//                     onClick={() => handlePaymentMethodChange('opay')}
//                   >
//                     <label className="form-check-label d-flex align-items-center text-dark-emphasis fw-semibold">
//                       <input
//                         type="radio"
//                         className="form-check-input fs-base me-2 me-sm-3"
//                         name="payment-method"
//                         checked={paymentMethod === 'opay'}
//                         onChange={() => {}}
//                       />
//                       OPay
//                       <img src="/assets/img/payment-methods/opay-icon.svg" className="ms-3" width={20} alt="OPay" />
//                     </label>
//                   </div>
//                   <div
//                     className={`collapse ${paymentMethod === 'opay' ? 'show' : ''}`}
//                     id="opay"
//                     data-bs-parent="#paymentMethod"
//                   >
//                     {renderPaymentMethod()}
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Order summary (sticky sidebar) */}
//             <AsideOrderSummary />
//           </div>
//         </section>
//       </main>
//     </>
//   );
// };

// export default Checkout;

// V3
// import React, { useState, useEffect } from 'react';
// import { Link, NavLink, useNavigate } from 'react-router-dom';
// import DeliveryDateOffCanvas from './DeliveryDateOffCanvas';
// import DeliveryOptionsOffCanvas from './DeliveryOptionsOffCanvas';
// import AsideOrderSummary from './AsideOrderSummary';
// import { useOrder } from '../../../hooks/useOrder';
// import { usePayment } from '../../../hooks/usePayment';
// import { NotificationService } from '../../../services/local/NotificationService';
// import Breadcrumb from '../../../components/shared/Breadcrumb';
// import OrderSummary from '../shared/OrderSummary';

// const Checkout = () => {
//   const navigate = useNavigate();
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
//             'client-id': process.env.REACT_APP_PAYPAL_CLIENT_ID || '',
//             currency: 'USD'
//           }}>
//             <PayPalButtons 
//               style={{ layout: 'vertical' }}
//               createOrder={(data, actions) => {
//                 return actions.order.create({
//                   purchase_units: [{
//                     amount: {
//                       value: '68.91' // Should come from order total
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
//               // Initialize Paystack payment
//               const handler = (window as any).PaystackPop.setup({
//                 key: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY,
//                 email: 'customer@salesnet.co', // Should come from user data
//                 amount: 6891 * 100, // in kobo
//                 currency: 'NGN',
//                 onClose: () => NotificationService.showInfo('Payment window closed'),
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
//               // Initialize Flutterwave payment
//               (window as any).FlutterwaveCheckout({
//                 public_key: process.env.REACT_APP_FLUTTERWAVE_PUBLIC_KEY,
//                 tx_ref: Date.now().toString(),
//                 amount: 68.91,
//                 currency: 'USD',
//                 payment_options: 'card,mobilemoney,ussd',
//                 customer: {
//                   email: 'customer@salesnet.co',
//                   phone_number: deliveryAddress.phoneNumber,
//                 },
//                 callback: (response: any) => {
//                   handleOrderSubmit();
//                 },
//                 onclose: () => NotificationService.showInfo('Payment window closed'),
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
//               // Initialize OPay payment
//               (window as any).OPayCheckout({
//                 merchantId: process.env.REACT_APP_OPAY_MERCHANT_ID,
//                 reference: Date.now().toString(),
//                 amount: 68.91,
//                 currency: 'USD',
//                 callbackUrl: `${window.location.origin}/checkout/callback`,
//                 customerEmail: 'customer@salesnet.co',
//                 customerPhone: deliveryAddress.phoneNumber,
//                 onSuccess: () => {
//                   handleOrderSubmit();
//                 },
//                 onClose: () => NotificationService.showInfo('Payment window closed'),
//               });
//             }}
//           >
//             Pay with OPay
//           </button>
//         );
      
//       case 'card':
//       default:
//         return (
//           <form className="needs-validation pt-4 pb-2 ps-3 ms-2 ms-sm-3">
//             <div className="position-relative mb-3 mb-sm-4">
//               <input
//                 type="text"
//                 className="form-control form-icon-end"
//                 placeholder="Card number"
//                 required
//               />
//               <span className="position-absolute d-flex top-50 end-0 translate-middle-y fs-5 text-body-tertiary me-3" />
//             </div>
//             <div className="row row-cols-1 row-cols-sm-2 g-3 g-sm-4">
//               <div className="col">
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="MM/YY"
//                 />
//               </div>
//               <div className="col">
//                 <input
//                   type="text"
//                   className="form-control"
//                   maxLength={4}
//                   placeholder="CVC"
//                 />
//               </div>
//             </div>
//             <button
//               type="button"
//               className="btn btn-primary w-100 mt-4"
//               onClick={handleOrderSubmit}
//               disabled={isProcessing}
//             >
//               {isProcessing ? 'Processing...' : 'Confirm Payment'}
//             </button>
//           </form>
//         );
//     }
//   };

//   return (
//     <>
//       {/* Delivery options offcanvas */}
//       <DeliveryOptionsOffCanvas />
      
//       {/* Delivery date and time offcanvas */}
//       <DeliveryDateOffCanvas onSelect={handleDeliveryTimeChange} />

//       {/* Page content */}
//       <main className="content-wrapper">
//         {/* Breadcrumb */}
        
//         <Breadcrumb 
//             items={[
//             { label: 'Home', path: '/' },
//             { label: 'User', path: '/users/personal' },
//             { label: 'Basket', path: '/users/basket' },
//             { label: 'Checkout', path: `/users/checkout` }
//             ]} 
//         />
                
//         {/* Checkout form + Order summary */}
//         <section className="container pb-5 mb-2 mb-md-3 mb-lg-4 mb-xl-5">
//           <h1 className="h3 mb-4">Checkout</h1>
//           <div className="row">
//             {/* Checkout form */}
//             <div className="col-lg-8 col-xl-7 mb-5 mb-lg-0">
//               {/* Delivery address section */}
//               <h2 className="h5 mb-4">Delivery address</h2>
//               <div className="d-flex align-items-center justify-content-between mb-4">
//                 <div className="d-flex align-items-center fs-sm text-dark-emphasis me-3">
//                   <i className="ci-map-pin fs-base text-primary me-2" />
//                   567 Cherry Souse Lane Sacramento, 95829
//                 </div>
//                 <div className="nav animate-scale">
//                   <a
//                     className="badge text-bg-info rounded-pill animate-target text-nowrap p-1"
//                     href="#deliveryOptions"
//                     data-bs-toggle="offcanvas"
//                     aria-controls="deliveryOptions"
//                   >
//                     Change address
//                   </a>
//                 </div>
//               </div>
//               <div className="row row-cols-1 row-cols-sm-2 g-3 g-ms-4 mb-3 mb-sm-4">
//                 <div className="col">
//                   <label htmlFor="house" className="form-label">
//                     House / Flat*
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="house"
//                     name="house"
//                     value={deliveryAddress.house}
//                     onChange={handleAddressChange}
//                     required
//                   />
//                 </div>
//                 <div className="col">
//                   <label htmlFor="floor" className="form-label">
//                     Floor <span className="fw-normal text-body-secondary">(optional)</span>
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="floor"
//                     name="floor"
//                     value={deliveryAddress.floor}
//                     onChange={handleAddressChange}
//                   />
//                 </div>
//               </div>
//               <label htmlFor="phone-number" className="form-label">
//                 Phone number * <span className="fw-normal text-body-secondary">
//                   (We'll contact you in case anything comes up with your order)
//                 </span>
//               </label>
//               <input
//                 type="tel"
//                 className="form-control"
//                 id="phone-number"
//                 name="phoneNumber"
//                 value={deliveryAddress.phoneNumber}
//                 onChange={handleAddressChange}
//                 required
//                 placeholder="+234 ___ ___ __"
//               />

//               {/* Delivery date and time section */}
//               <h2 className="h5 mt-5 mb-4">Delivery date and time</h2>
//               <div className="d-flex flex-wrap gap-3">
//                 <div>
//                   <input
//                     type="radio"
//                     className="btn-check"
//                     name="date"
//                     id="today"
//                     checked={deliveryTime.date === 'today'}
//                     onChange={() => handleDeliveryTimeChange('today', deliveryTime.timeSlot)}
//                   />
//                   <label className="btn btn-outline-secondary rounded-pill" htmlFor="today">
//                     Today
//                   </label>
//                 </div>
//                 <div>
//                   <input
//                     type="radio"
//                     className="btn-check"
//                     name="date"
//                     id="tomorrow"
//                     checked={deliveryTime.date === 'tomorrow'}
//                     onChange={() => handleDeliveryTimeChange('tomorrow', deliveryTime.timeSlot)}
//                   />
//                   <label className="btn btn-outline-secondary rounded-pill" htmlFor="tomorrow">
//                     Tomorrow
//                   </label>
//                 </div>
//                 <div>
//                   <input
//                     type="radio"
//                     className="btn-check"
//                     name="date"
//                     id="other-date"
//                     checked={deliveryTime.date === 'other'}
//                     onChange={() => handleDeliveryTimeChange('other', deliveryTime.timeSlot)}
//                   />
//                   <label
//                     className="btn btn-outline-secondary rounded-pill"
//                     htmlFor="other-date"
//                     data-bs-toggle="offcanvas"
//                     data-bs-target="#deliveryDateTime"
//                     aria-controls="deliveryDateTime"
//                   >
//                     Other date
//                   </label>
//                 </div>
//               </div>
//               <div className="fs-sm mt-4">
//                 The cost of delivery: <span className="fw-semibold text-dark-emphasis">Free</span>
//               </div>
//               <div className="d-flex flex-wrap gap-3 mt-3">
//                 {['10:00 - 12:00', '12:00 - 14:00', '14:00 - 16:00', '16:00 - 18:00', '18:00 - 20:00'].map((time) => (
//                   <div key={time}>
//                     <input
//                       type="radio"
//                       className="btn-check"
//                       name="time"
//                       id={`time-${time}`}
//                       checked={deliveryTime.timeSlot === time}
//                       onChange={() => handleDeliveryTimeChange(deliveryTime.date, time)}
//                     />
//                     <label className="btn btn-outline-secondary rounded-pill" htmlFor={`time-${time}`}>
//                       {time}
//                     </label>
//                   </div>
//                 ))}
//               </div>

//               {/* Payment method section */}
//               {/* <h2 className="h5 mt-5 mb-0">Payment method</h2>
//               <div id="paymentMethod" role="list">

//                 <div className="mt-4">
//                   <div
//                     className="form-check mb-0"
//                     role="listitem"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#card"
//                     aria-expanded={paymentMethod === 'card'}
//                     aria-controls="card"
//                     onClick={() => handlePaymentMethodChange('card')}
//                   >
//                     <label className="form-check-label d-flex align-items-center text-dark-emphasis fw-semibold">
//                       <input
//                         type="radio"
//                         className="form-check-input fs-base me-2 me-sm-3"
//                         name="payment-method"
//                         checked={paymentMethod === 'card'}
//                         onChange={() => {}}
//                       />
//                       Credit or debit card
//                       <span className="d-none d-sm-flex gap-2 ms-3">
//                         <img src="/assets/img/payment-methods/amex.svg" className="d-block bg-info rounded-1" width={36} alt="Amex" />
//                         <img src="/assets/img/payment-methods/visa-light-mode.svg" className="d-none-dark" width={36} alt="Visa" />
//                         <img src="/assets/img/payment-methods/visa-dark-mode.svg" className="d-none d-block-dark" width={36} alt="Visa" />
//                         <img src="/assets/img/payment-methods/mastercard.svg" width={36} alt="Mastercard" />
//                         <img src="/assets/img/payment-methods/maestro.svg" width={36} alt="Maestro" />
//                       </span>
//                     </label>
//                   </div>
//                   <div
//                     className={`collapse ${paymentMethod === 'card' ? 'show' : ''}`}
//                     id="card"
//                     data-bs-parent="#paymentMethod"
//                   >
//                     {renderPaymentMethod()}
//                   </div>
//                 </div>
                
//                 <div className="mt-4">
//                   <div
//                     className="form-check mb-0"
//                     role="listitem"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#paypal"
//                     aria-expanded={paymentMethod === 'paypal'}
//                     aria-controls="paypal"
//                     onClick={() => handlePaymentMethodChange('paypal')}
//                   >
//                     <label className="form-check-label d-flex align-items-center text-dark-emphasis fw-semibold">
//                       <input
//                         type="radio"
//                         className="form-check-input fs-base me-2 me-sm-3"
//                         name="payment-method"
//                         checked={paymentMethod === 'paypal'}
//                         onChange={() => {}}
//                       />
//                       PayPal
//                       <img src="/assets/img/payment-methods/paypal-icon.svg" className="ms-3" width={16} alt="PayPal" />
//                     </label>
//                   </div>
//                   <div
//                     className={`collapse ${paymentMethod === 'paypal' ? 'show' : ''}`}
//                     id="paypal"
//                     data-bs-parent="#paymentMethod"
//                   >
//                     {renderPaymentMethod()}
//                   </div>
//                 </div>
                
//                 <div className="mt-4">
//                   <div
//                     className="form-check mb-0"
//                     role="listitem"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#paystack"
//                     aria-expanded={paymentMethod === 'paystack'}
//                     aria-controls="paystack"
//                     onClick={() => handlePaymentMethodChange('paystack')}
//                   >
//                     <label className="form-check-label d-flex align-items-center text-dark-emphasis fw-semibold">
//                       <input
//                         type="radio"
//                         className="form-check-input fs-base me-2 me-sm-3"
//                         name="payment-method"
//                         checked={paymentMethod === 'paystack'}
//                         onChange={() => {}}
//                       />
//                       Paystack
//                       <img src="/assets/img/payment-methods/paystack-icon.svg" className="ms-3" width={20} alt="Paystack" />
//                     </label>
//                   </div>
//                   <div
//                     className={`collapse ${paymentMethod === 'paystack' ? 'show' : ''}`}
//                     id="paystack"
//                     data-bs-parent="#paymentMethod"
//                   >
//                     {renderPaymentMethod()}
//                   </div>
//                 </div>
                
//                 <div className="mt-4">
//                   <div
//                     className="form-check mb-0"
//                     role="listitem"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#flutterwave"
//                     aria-expanded={paymentMethod === 'flutterwave'}
//                     aria-controls="flutterwave"
//                     onClick={() => handlePaymentMethodChange('flutterwave')}
//                   >
//                     <label className="form-check-label d-flex align-items-center text-dark-emphasis fw-semibold">
//                       <input
//                         type="radio"
//                         className="form-check-input fs-base me-2 me-sm-3"
//                         name="payment-method"
//                         checked={paymentMethod === 'flutterwave'}
//                         onChange={() => {}}
//                       />
//                       Flutterwave
//                       <img src="/assets/img/payment-methods/flutterwave-icon.svg" className="ms-3" width={20} alt="Flutterwave" />
//                     </label>
//                   </div>
//                   <div
//                     className={`collapse ${paymentMethod === 'flutterwave' ? 'show' : ''}`}
//                     id="flutterwave"
//                     data-bs-parent="#paymentMethod"
//                   >
//                     {renderPaymentMethod()}
//                   </div>
//                 </div>
                
//                 <div className="mt-4">
//                   <div
//                     className="form-check mb-0"
//                     role="listitem"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#opay"
//                     aria-expanded={paymentMethod === 'opay'}
//                     aria-controls="opay"
//                     onClick={() => handlePaymentMethodChange('opay')}
//                   >
//                     <label className="form-check-label d-flex align-items-center text-dark-emphasis fw-semibold">
//                       <input
//                         type="radio"
//                         className="form-check-input fs-base me-2 me-sm-3"
//                         name="payment-method"
//                         checked={paymentMethod === 'opay'}
//                         onChange={() => {}}
//                       />
//                       OPay
//                       <img src="/assets/img/payment-methods/opay-icon.svg" className="ms-3" width={20} alt="OPay" />
//                     </label>
//                   </div>
//                   <div
//                     className={`collapse ${paymentMethod === 'opay' ? 'show' : ''}`}
//                     id="opay"
//                     data-bs-parent="#paymentMethod"
//                   >
//                     {renderPaymentMethod()}
//                   </div>
//                 </div>
//               </div> */}








//               {/*  */}
//                           {/* Payment method section */}
// <h2 className="h5 mt-5 mb-4">Payment method</h2>
// <div id="paymentMethod" role="list">
//   {/* Payment method pills */}
//   <div className="d-flex flex-wrap gap-3 mb-4">
//     {/* Credit/Debit Card */}
//     <div>
//       <input
//         type="radio"
//         className="btn-check"
//         name="payment-method"
//         id="card"
//         checked={paymentMethod === 'card'}
//         onChange={() => handlePaymentMethodChange('card')}
//       />
//       <label
//         className={`btn btn-outline-secondary rounded-pill d-flex align-items-center ${
//           paymentMethod === 'card' ? 'active' : ''
//         }`}
//         htmlFor="card"
//       >
//         <i className="ci-credit-card fs-base me-2" />
//         Credit/Debit
//         <span className="d-none d-sm-flex gap-1 ms-2">
//           <img src="/assets/img/payment-methods/visa-light-mode.svg" width={20} alt="Visa" />
//           <img src="/assets/img/payment-methods/mastercard.svg" width={20} alt="Mastercard" />
//         </span>
//       </label>
//     </div>

//     {/* PayPal */}
//     <div>
//       <input
//         type="radio"
//         className="btn-check"
//         name="payment-method"
//         id="paypal"
//         checked={paymentMethod === 'paypal'}
//         onChange={() => handlePaymentMethodChange('paypal')}
//       />
//       <label
//         className={`btn btn-outline-secondary rounded-pill d-flex align-items-center ${
//           paymentMethod === 'paypal' ? 'active' : ''
//         }`}
//         htmlFor="paypal"
//       >
//         <img src="/assets/img/payment-methods/paypal-icon.svg" width={20} alt="PayPal" className="me-2" />
//         PayPal
//       </label>
//     </div>

//     {/* Paystack */}
//     <div>
//       <input
//         type="radio"
//         className="btn-check"
//         name="payment-method"
//         id="paystack"
//         checked={paymentMethod === 'paystack'}
//         onChange={() => handlePaymentMethodChange('paystack')}
//       />
//       <label
//         className={`btn btn-outline-secondary rounded-pill d-flex align-items-center ${
//           paymentMethod === 'paystack' ? 'active' : ''
//         }`}
//         htmlFor="paystack"
//       >
//         <img src="/assets/img/payment-methods/paystack-icon.svg" width={20} alt="Paystack" className="me-2" />
//         Paystack
//       </label>
//     </div>

//     {/* Flutterwave */}
//     <div>
//       <input
//         type="radio"
//         className="btn-check"
//         name="payment-method"
//         id="flutterwave"
//         checked={paymentMethod === 'flutterwave'}
//         onChange={() => handlePaymentMethodChange('flutterwave')}
//       />
//       <label
//         className={`btn btn-outline-secondary rounded-pill d-flex align-items-center ${
//           paymentMethod === 'flutterwave' ? 'active' : ''
//         }`}
//         htmlFor="flutterwave"
//       >
//         <img src="/assets/img/payment-methods/flutterwave-icon.svg" width={20} alt="Flutterwave" className="me-2" />
//         Flutterwave
//       </label>
//     </div>

//     {/* OPay */}
//     <div>
//       <input
//         type="radio"
//         className="btn-check"
//         name="payment-method"
//         id="opay"
//         checked={paymentMethod === 'opay'}
//         onChange={() => handlePaymentMethodChange('opay')}
//       />
//       <label
//         className={`btn btn-outline-secondary rounded-pill d-flex align-items-center ${
//           paymentMethod === 'opay' ? 'active' : ''
//         }`}
//         htmlFor="opay"
//       >
//         <img src="/assets/img/payment-methods/opay-icon.svg" width={20} alt="OPay" className="me-2" />
//         OPay
//       </label>
//     </div>
//   </div>

//   {/* Payment method details (shown based on selection) */}
//   <div className="payment-method-details mt-4">
//     {paymentMethod === 'card' && (
//       <div className="card p-4">
//         <form className="needs-validation" noValidate>
//           <div className="mb-3">
//             <label htmlFor="cardNumber" className="form-label">Card number</label>
//             <input
//               type="text"
//               className="form-control"
//               id="cardNumber"
//               placeholder="1234 5678 9012 3456"
//               required
//             />
//           </div>
//           <div className="row g-3">
//             <div className="col-md-6">
//               <label htmlFor="expiryDate" className="form-label">Expiry date</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="expiryDate"
//                 placeholder="MM/YY"
//                 required
//               />
//             </div>
//             <div className="col-md-6">
//               <label htmlFor="cvv" className="form-label">CVV</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="cvv"
//                 placeholder="123"
//                 required
//               />
//             </div>
//           </div>
//           <div className="mt-4">
//             <button type="submit" className="btn btn-primary w-100">
//               Pay Now
//             </button>
//           </div>
//         </form>
//       </div>
//     )}

//     {paymentMethod === 'paypal' && (
//       <div className="card p-4 text-center">
//         <PayPalScriptProvider options={{ "client-id": "your-paypal-client-id" }}>
//           <PayPalButtons style={{ layout: "vertical" }} />
//         </PayPalScriptProvider>
//       </div>
//     )}

//     {paymentMethod === 'paystack' && (
//       <div className="card p-4 text-center">
//         <button 
//           className="btn btn-primary"
//           onClick={() => {
//             // Initialize Paystack payment
//             const handler = (window as any).PaystackPop.setup({
//               key: 'your-paystack-key',
//               email: 'customer@salesnet.co',
//               amount: 10000, // in kobo
//               currency: 'NGN',
//               callback: function(response: any) {
//                 // Handle payment success
//               },
//               onClose: function() {
//                 // Handle payment window closed
//               }
//             });
//             handler.openIframe();
//           }}
//         >
//           Pay with Paystack
//         </button>
//       </div>
//     )}

//     {paymentMethod === 'flutterwave' && (
//       <div className="card p-4 text-center">
//         <button 
//           className="btn btn-primary"
//           onClick={() => {
//             // Initialize Flutterwave payment
//             (window as any).FlutterwaveCheckout({
//               public_key: 'your-flutterwave-key',
//               tx_ref: Date.now().toString(),
//               amount: 100,
//               currency: 'NGN',
//               payment_options: 'card,mobilemoney,ussd',
//               customer: {
//                 email: 'customer@salesnet.co',
//                 phone_number: '08123456789',
//               },
//               callback: function(response: any) {
//                 // Handle payment success
//               },
//               onclose: function() {
//                 // Handle payment window closed
//               }
//             });
//           }}
//         >
//           Pay with Flutterwave
//         </button>
//       </div>
//     )}

//     { paymentMethod === 'opay' && (
//       <div className="card p-4 text-center">
//         <button 
//           className="btn btn-primary"
//           onClick={() => {
//             // Initialize OPay payment
//             (window as any).OPayCheckout({
//               merchantId: 'your-opay-merchant-id',
//               reference: Date.now().toString(),
//               amount: 100,
//               currency: 'NGN',
//               callbackUrl: `${window.location.origin}/checkout/callback`,
//               customerEmail: 'customer@salesnet.co',
//               customerPhone: '08123456789',
//               onSuccess: function() {
//                 // Handle payment success
//               },
//               onClose: function() {
//                 // Handle payment window closed
//               }
//             });
//           }}
//         >
//           Pay with OPay
//         </button>
//       </div>
//     )}
//   </div>
// </div>
//               {/*  */}

//             </div>
            
//             {/* Order summary (sticky sidebar) */}
//             {/* <AsideOrderSummary /> */}

//             {/* // In Checkout.tsx
//               import OrderSummary from './OrderSummary';

//               // Inside your Checkout component */}
//               {/* Order summary (sticky sidebar) */}
//               <OrderSummary
//                 context="checkout"
//                 itemCount={basketState.itemCount}
//                 subtotal={basketState.subtotal}
//                 total={basketState.total} // Make sure to calculate this in your basket state
//                 discount={basketState.discount}
//                 deliveryFee={basketState.deliveryFee}
//                 isLoading={isProcessing}
//                 onConfirmOrder={handleOrderSubmit}
//               />

//           </div>
//         </section>
//       </main>
//     </>
//   );
// };

// export default Checkout;

// V4

// V3 - Fixed
// import React, { useState, useEffect } from 'react';
// import { Link, NavLink, useNavigate } from 'react-router-dom';
// import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
// import DeliveryDateOffCanvas from './DeliveryDateOffCanvas';
// import DeliveryOptionsOffCanvas from './DeliveryOptionsOffCanvas';
// // import AsideOrderSummary from './AsideOrderSummary';
// import { useOrder } from '../../../hooks/useOrder';
// import { usePayment } from '../../../hooks/usePayment';
// import { useBasket } from '../../../hooks/useBasket'; // Add this import
// import { NotificationService } from '../../../services/local/NotificationService';
// import Breadcrumb from '../../../components/shared/Breadcrumb';
// import OrderSummary from '../shared/OrderSummary';

// const Checkout = () => {
//   const navigate = useNavigate();
//   const { basketState } = useBasket(); // Add this hook to get basket state
  
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
//             'client-id': process.env.REACT_APP_PAYPAL_CLIENT_ID || '',
//             currency: 'USD'
//           }}>
//             <PayPalButtons 
//               style={{ layout: 'vertical' }}
//               createOrder={(data, actions) => {
//                 return actions.order.create({
//                   purchase_units: [{
//                     amount: {
//                       value: basketState?.total?.toString() || '0'
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
//                 amount: (basketState?.total || 0) * 100, // in kobo
//                 currency: 'NGN',
//                 onClose: () => NotificationService.showInfo('Payment window closed'),
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
//                 public_key: process.env.REACT_APP_FLUTTERWAVE_PUBLIC_KEY,
//                 tx_ref: Date.now().toString(),
//                 amount: basketState?.total || 0,
//                 currency: 'USD',
//                 payment_options: 'card,mobilemoney,ussd',
//                 customer: {
//                   email: 'customer@salesnet.co',
//                   phone_number: deliveryAddress.phoneNumber,
//                 },
//                 callback: (response: any) => {
//                   handleOrderSubmit();
//                 },
//                 onclose: () => NotificationService.showInfo('Payment window closed'),
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
//                 merchantId: process.env.REACT_APP_OPAY_MERCHANT_ID,
//                 reference: Date.now().toString(),
//                 amount: basketState?.total || 0,
//                 currency: 'USD',
//                 callbackUrl: `${window.location.origin}/checkout/callback`,
//                 customerEmail: 'customer@salesnet.co',
//                 customerPhone: deliveryAddress.phoneNumber,
//                 onSuccess: () => {
//                   handleOrderSubmit();
//                 },
//                 onClose: () => NotificationService.showInfo('Payment window closed'),
//               });
//             }}
//           >
//             Pay with OPay
//           </button>
//         );
      
//       case 'card':
//       default:
//         return (
//           <form className="needs-validation pt-4 pb-2 ps-3 ms-2 ms-sm-3">
//             <div className="position-relative mb-3 mb-sm-4">
//               <input
//                 type="text"
//                 className="form-control form-icon-end"
//                 placeholder="Card number"
//                 required
//               />
//               <span className="position-absolute d-flex top-50 end-0 translate-middle-y fs-5 text-body-tertiary me-3" />
//             </div>
//             <div className="row row-cols-1 row-cols-sm-2 g-3 g-sm-4">
//               <div className="col">
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="MM/YY"
//                 />
//               </div>
//               <div className="col">
//                 <input
//                   type="text"
//                   className="form-control"
//                   maxLength={4}
//                   placeholder="CVC"
//                 />
//               </div>
//             </div>
//             <button
//               type="button"
//               className="btn btn-primary w-100 mt-4"
//               onClick={handleOrderSubmit}
//               disabled={isProcessing}
//             >
//               {isProcessing ? 'Processing...' : 'Confirm Payment'}
//             </button>
//           </form>
//         );
//     }
//   };

//   return (
//     <>
//       {/* Delivery options offcanvas */}
//       <DeliveryOptionsOffCanvas />
      
//       {/* Delivery date and time offcanvas */}
//       <DeliveryDateOffCanvas onSelect={handleDeliveryTimeChange} />

//       {/* Page content */}
//       <main className="content-wrapper">
//         {/* Breadcrumb */}
//         <Breadcrumb 
//           items={[
//             { label: 'Home', path: '/' },
//             { label: 'User', path: '/users/personal' },
//             { label: 'Basket', path: '/users/basket' },
//             { label: 'Checkout', path: `/users/checkout` }
//           ]} 
//         />
                
//         {/* Checkout form + Order summary */}
//         <section className="container pb-5 mb-2 mb-md-3 mb-lg-4 mb-xl-5">
//           <h1 className="h3 mb-4">Checkout</h1>
//           <div className="row">
//             {/* Checkout form */}
//             <div className="col-lg-8 col-xl-7 mb-5 mb-lg-0">
//               {/* Delivery address section */}
//               <h2 className="h5 mb-4">Delivery address</h2>
//               <div className="d-flex align-items-center justify-content-between mb-4">
//                 <div className="d-flex align-items-center fs-sm text-dark-emphasis me-3">
//                   <i className="ci-map-pin fs-base text-primary me-2" />
//                   567 Cherry Souse Lane Sacramento, 95829
//                 </div>
//                 <div className="nav animate-scale">
//                   <a
//                     className="badge text-bg-info rounded-pill animate-target text-nowrap p-1"
//                     href="#deliveryOptions"
//                     data-bs-toggle="offcanvas"
//                     aria-controls="deliveryOptions"
//                   >
//                     Change address
//                   </a>
//                 </div>
//               </div>
//               <div className="row row-cols-1 row-cols-sm-2 g-3 g-ms-4 mb-3 mb-sm-4">
//                 <div className="col">
//                   <label htmlFor="house" className="form-label">
//                     House / Flat*
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="house"
//                     name="house"
//                     value={deliveryAddress.house}
//                     onChange={handleAddressChange}
//                     required
//                   />
//                 </div>
//                 <div className="col">
//                   <label htmlFor="floor" className="form-label">
//                     Floor <span className="fw-normal text-body-secondary">(optional)</span>
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="floor"
//                     name="floor"
//                     value={deliveryAddress.floor}
//                     onChange={handleAddressChange}
//                   />
//                 </div>
//               </div>
//               <label htmlFor="phone-number" className="form-label">
//                 Phone number * <span className="fw-normal text-body-secondary">
//                   (We'll contact you in case anything comes up with your order)
//                 </span>
//               </label>
//               <input
//                 type="tel"
//                 className="form-control"
//                 id="phone-number"
//                 name="phoneNumber"
//                 value={deliveryAddress.phoneNumber}
//                 onChange={handleAddressChange}
//                 required
//                 placeholder="+234 ___ ___ __"
//               />

//               {/* Delivery date and time section */}
//               <h2 className="h5 mt-5 mb-4">Delivery date and time</h2>
//               <div className="d-flex flex-wrap gap-3">
//                 <div>
//                   <input
//                     type="radio"
//                     className="btn-check"
//                     name="date"
//                     id="today"
//                     checked={deliveryTime.date === 'today'}
//                     onChange={() => handleDeliveryTimeChange('today', deliveryTime.timeSlot)}
//                   />
//                   <label className="btn btn-outline-secondary rounded-pill" htmlFor="today">
//                     Today
//                   </label>
//                 </div>
//                 <div>
//                   <input
//                     type="radio"
//                     className="btn-check"
//                     name="date"
//                     id="tomorrow"
//                     checked={deliveryTime.date === 'tomorrow'}
//                     onChange={() => handleDeliveryTimeChange('tomorrow', deliveryTime.timeSlot)}
//                   />
//                   <label className="btn btn-outline-secondary rounded-pill" htmlFor="tomorrow">
//                     Tomorrow
//                   </label>
//                 </div>
//                 <div>
//                   <input
//                     type="radio"
//                     className="btn-check"
//                     name="date"
//                     id="other-date"
//                     checked={deliveryTime.date === 'other'}
//                     onChange={() => handleDeliveryTimeChange('other', deliveryTime.timeSlot)}
//                   />
//                   <label
//                     className="btn btn-outline-secondary rounded-pill"
//                     htmlFor="other-date"
//                     data-bs-toggle="offcanvas"
//                     data-bs-target="#deliveryDateTime"
//                     aria-controls="deliveryDateTime"
//                   >
//                     Other date
//                   </label>
//                 </div>
//               </div>
//               <div className="fs-sm mt-4">
//                 The cost of delivery: <span className="fw-semibold text-dark-emphasis">Free</span>
//               </div>
//               <div className="d-flex flex-wrap gap-3 mt-3">
//                 {['10:00 - 12:00', '12:00 - 14:00', '14:00 - 16:00', '16:00 - 18:00', '18:00 - 20:00'].map((time) => (
//                   <div key={time}>
//                     <input
//                       type="radio"
//                       className="btn-check"
//                       name="time"
//                       id={`time-${time}`}
//                       checked={deliveryTime.timeSlot === time}
//                       onChange={() => handleDeliveryTimeChange(deliveryTime.date, time)}
//                     />
//                     <label className="btn btn-outline-secondary rounded-pill" htmlFor={`time-${time}`}>
//                       {time}
//                     </label>
//                   </div>
//                 ))}
//               </div>

//               {/* Payment method section */}
//               <h2 className="h5 mt-5 mb-4">Payment method</h2>
//               <div id="paymentMethod" role="list">
//                 {/* Payment method pills */}
//                 <div className="d-flex flex-wrap gap-3 mb-4">
//                   {/* Credit/Debit Card */}
//                   <div>
//                     <input
//                       type="radio"
//                       className="btn-check"
//                       name="payment-method"
//                       id="card"
//                       checked={paymentMethod === 'card'}
//                       onChange={() => handlePaymentMethodChange('card')}
//                     />
//                     <label
//                       className={`btn btn-outline-secondary rounded-pill d-flex align-items-center ${
//                         paymentMethod === 'card' ? 'active' : ''
//                       }`}
//                       htmlFor="card"
//                     >
//                       <i className="ci-credit-card fs-base me-2" />
//                       Credit/Debit
//                       <span className="d-none d-sm-flex gap-1 ms-2">
//                         <img src="/assets/img/payment-methods/visa-light-mode.svg" width={20} alt="Visa" />
//                         <img src="/assets/img/payment-methods/mastercard.svg" width={20} alt="Mastercard" />
//                       </span>
//                     </label>
//                   </div>

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
//                   {paymentMethod === 'card' && (
//                     <div className="card p-4">
//                       <form className="needs-validation" noValidate>
//                         <div className="mb-3">
//                           <label htmlFor="cardNumber" className="form-label">Card number</label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             id="cardNumber"
//                             placeholder="1234 5678 9012 3456"
//                             required
//                           />
//                         </div>
//                         <div className="row g-3">
//                           <div className="col-md-6">
//                             <label htmlFor="expiryDate" className="form-label">Expiry date</label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               id="expiryDate"
//                               placeholder="MM/YY"
//                               required
//                             />
//                           </div>
//                           <div className="col-md-6">
//                             <label htmlFor="cvv" className="form-label">CVV</label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               id="cvv"
//                               placeholder="123"
//                               required
//                             />
//                           </div>
//                         </div>
//                         <div className="mt-4">
//                           <button 
//                             type="button" 
//                             className="btn btn-primary w-100"
//                             onClick={handleOrderSubmit}
//                             disabled={isProcessing}
//                           >
//                             {isProcessing ? 'Processing...' : 'Pay Now'}
//                           </button>
//                         </div>
//                       </form>
//                     </div>
//                   )}

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
//                 </div>
//               </div>
//             </div>
            
//             {/* Order summary (sticky sidebar) */}
//             <OrderSummary
//               context="checkout"
//               itemCount={basketState?.itemCount || 0}
//               subtotal={basketState?.subtotal || 0}
//               total={basketState?.total || 0}
//               discount={basketState?.discount || 0}
//               deliveryFee={basketState?.deliveryFee || 0}
//               isLoading={isProcessing}
//               onConfirmOrder={handleOrderSubmit}
//             />
//           </div>
//         </section>
//       </main>
//     </>
//   );
// };

// export default Checkout;

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

  return (
    <>
      {/* Delivery options offcanvas */}
      <DeliveryOptionsOffCanvas />
      
      {/* Delivery date and time offcanvas */}
      <DeliveryDateOffCanvas onSelect={handleDeliveryTimeChange} />

      {/* Page content */}
      <main className="content-wrapper">
        {/* Breadcrumb */}
        <Breadcrumb 
          items={[
            { label: 'Home', path: '/' },
            { label: 'User', path: '/users/personal' },
            { label: 'Basket', path: '/users/basket' },
            { label: 'Checkout', path: `/users/checkout` }
          ]} 
        />
                
        {/* Checkout form + Order summary */}
        <section className="container pb-5 mb-2 mb-md-3 mb-lg-4 mb-xl-5">
          <h1 className="h3 mb-4">Checkout</h1>
          <div className="row">
            {/* Checkout form */}
            <div className="col-lg-8 col-xl-7 mb-5 mb-lg-0">
              {/* Delivery address section */}
              <h2 className="h5 mb-4">Delivery address</h2>
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
              </div>
              <div className="row row-cols-1 row-cols-sm-2 g-3 g-ms-4 mb-3 mb-sm-4">
                <div className="col">
                  <label htmlFor="house" className="form-label">
                    House / Flat*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="house"
                    name="house"
                    value={deliveryAddress.house}
                    onChange={handleAddressChange}
                    required
                  />
                </div>
                <div className="col">
                  <label htmlFor="floor" className="form-label">
                    Floor <span className="fw-normal text-body-secondary">(optional)</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="floor"
                    name="floor"
                    value={deliveryAddress.floor}
                    onChange={handleAddressChange}
                  />
                </div>
              </div>
              <label htmlFor="phone-number" className="form-label">
                Phone number * <span className="fw-normal text-body-secondary">
                  (We'll contact you in case anything comes up with your order)
                </span>
              </label>
              <input
                type="tel"
                className="form-control"
                id="phone-number"
                name="phoneNumber"
                value={deliveryAddress.phoneNumber}
                onChange={handleAddressChange}
                required
                placeholder="+234 ___ ___ __"
              />

              {/* Delivery date and time section */}
              <h2 className="h5 mt-5 mb-4">Delivery date and time</h2>
              <div className="d-flex flex-wrap gap-3">
                <div>
                  <input
                    type="radio"
                    className="btn-check"
                    name="date"
                    id="today"
                    checked={deliveryTime.date === 'today'}
                    onChange={() => handleDeliveryTimeChange('today', deliveryTime.timeSlot)}
                  />
                  <label className="btn btn-outline-secondary rounded-pill" htmlFor="today">
                    Today
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    className="btn-check"
                    name="date"
                    id="tomorrow"
                    checked={deliveryTime.date === 'tomorrow'}
                    onChange={() => handleDeliveryTimeChange('tomorrow', deliveryTime.timeSlot)}
                  />
                  <label className="btn btn-outline-secondary rounded-pill" htmlFor="tomorrow">
                    Tomorrow
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    className="btn-check"
                    name="date"
                    id="other-date"
                    checked={deliveryTime.date === 'other'}
                    onChange={() => handleDeliveryTimeChange('other', deliveryTime.timeSlot)}
                  />
                  <label
                    className="btn btn-outline-secondary rounded-pill"
                    htmlFor="other-date"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#deliveryDateTime"
                    aria-controls="deliveryDateTime"
                  >
                    Other date
                  </label>
                </div>
              </div>
              <div className="fs-sm mt-4">
                The cost of delivery: <span className="fw-semibold text-dark-emphasis">Free</span>
              </div>
              <div className="d-flex flex-wrap gap-3 mt-3">
                {['10:00 - 12:00', '12:00 - 14:00', '14:00 - 16:00', '16:00 - 18:00', '18:00 - 20:00'].map((time) => (
                  <div key={time}>
                    <input
                      type="radio"
                      className="btn-check"
                      name="time"
                      id={`time-${time}`}
                      checked={deliveryTime.timeSlot === time}
                      onChange={() => handleDeliveryTimeChange(deliveryTime.date, time)}
                    />
                    <label className="btn btn-outline-secondary rounded-pill" htmlFor={`time-${time}`}>
                      {time}
                    </label>
                  </div>
                ))}
              </div>

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
            {/* <OrderSummary
              context="checkout"
              itemCount={basket?.itemCount || 0}
              subtotal={basket?.subtotal || 0}
              total={basket?.subtotal || 0} // Using subtotal as total since your basket doesn't have total
              discount={0} // Your basket doesn't have discount, so setting to 0
              deliveryFee={0} // Your basket doesn't have deliveryFee, so setting to 0 (Free delivery)
              isLoading={isProcessing}
              onConfirmOrder={handleOrderSubmit}
            /> */}

            {/*  */}
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