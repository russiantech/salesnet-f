
// // V7 - Enhanced with unified order/payment processing
// import React, { useState, useEffect, useCallback } from 'react';
// import { Link, NavLink, useNavigate } from 'react-router-dom';
// import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
// import DeliveryDateOffCanvas from './DeliveryDateOffCanvas';
// import DeliveryOptionsOffCanvas from './DeliveryOptionsOffCanvas';
// import { useOrder } from '../../../hooks/useOrder';
// import { usePayment } from '../../../hooks/usePayment';
// import { useBasket } from '../../../hooks/useBasket';
// import { NotificationService } from '../../../services/local/NotificationService';
// import Breadcrumb from '../../../components/shared/Breadcrumb';
// import OrderSummary from '../shared/OrderSummary';
// import { paymentConfig } from '../../../utils/env';
// import { useAuth } from '../../../context/AuthContext'; // Add this for user data
// import { AxiosAddressesService } from '../../../services/net/AxiosAddressesService';

// const Checkout = () => {
//   const navigate = useNavigate();
//   const { basket, loading: basketLoading } = useBasket();
//   const { user } = useAuth(); // Get user data for default address
//   const [paymentMethod, setPaymentMethod] = useState('paypal'); // Default to PayPal
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [addresses, setAddresses] = useState<any[]>([]);
//   // 
//   const [stores, setStores] = useState<any[]>([]); // Add stores state
//   const [selectedStore, setSelectedStore] = useState<any>(null); // Track selected store
//   // 
//   const [addressesLoading, setAddressesLoading] = useState(true);

//   const [deliveryDetails, setDeliveryDetails] = useState<{
//     address: any | null;
//     schedule: { date: string; timeSlot: string } | null;
//     option: 'delivery' | 'pickup';
//   }>({
//     address: null,
//     schedule: null,
//     option: 'delivery',
//   });

//   const { processPayment } = usePayment();
//   const { createOrder } = useOrder();

//   // Fetch user addresses
//   const fetchAddresses = useCallback(async () => {
//     try {
//       setAddressesLoading(true);
//       const response = await AxiosAddressesService.fetchAll({
//         include_city: true,
//         include_state: true,
//         include_country: true
//       });
//       const userAddresses = response.data.addresses || [];
//       setAddresses(userAddresses);

//       // console.log('userAddresses', userAddresses[0])
      
//       // Set primary address as default
//       const primaryAddress = userAddresses.find((addr: any) => addr.is_primary);
//       const defaultAddress = primaryAddress || userAddresses[0] || null;
      
//       if (defaultAddress) {
//         setDeliveryDetails(prev => ({
//           ...prev,
//           address: defaultAddress,
//         }));
//       }
//     } catch (err: any) {
//       const message = err.response?.data?.message || 'Failed to load addresses';
//       console.error('Address fetch error:', message);
//       // Don't show error dialog here as it might interrupt the checkout flow
//     } finally {
//       setAddressesLoading(false);
//     }
//   }, []);

//   // Set default address and schedule on component mount
//   useEffect(() => {
//     // Fetch addresses first
//     fetchAddresses();

//     // Set default schedule to next day
//     const tomorrow = new Date();
//     tomorrow.setDate(tomorrow.getDate() + 1);
//     const defaultSchedule = {
//       date: tomorrow.toISOString().split('T')[0], // YYYY-MM-DD format
//       timeSlot: '10:00 - 12:00'
//     };
    
//     setDeliveryDetails(prev => ({
//       ...prev,
//       schedule: defaultSchedule,
//     }));
//   }, [fetchAddresses]);

//   // Handle payment method change
//   const handlePaymentMethodChange = (method: string) => {
//     setPaymentMethod(method);
//   };

//   // Handle delivery option selection
//   // const handleDeliveryOptionSelect = (details: {
//   //   address: any;
//   //   option: 'delivery' | 'pickup';
//   // }) => {
//   //   setDeliveryDetails(prev => ({
//   //     ...prev,
//   //     address: details.address,
//   //     option: details.option,
//   //   }));
//   // };

//   // Updated delivery option handler
//   // const handleDeliveryOptionSelect = (details: {
//   //   address: any;
//   //   store: any; // Add store to params
//   //   option: 'delivery' | 'pickup';
//   // }) => {
//   //   setDeliveryDetails(prev => ({
//   //     ...prev,
//   //     address: details.option === 'delivery' ? details.address : details.store?.addresses,
//   //     option: details.option,
//   //   }));
    
//   //   // Set selected store for pickup
//   //   if (details.option === 'pickup') {
//   //     setSelectedStore(details.store);
//   //   } else {
//   //     setSelectedStore(null);
//   //   }
//   // };

//   // Update delivery option handler
//   const handleDeliveryOptionSelect = (details: {
//     address: any;
//     store: any;  // Add store to the details
//     option: 'delivery' | 'pickup';
//   }) => {
//     setDeliveryDetails(prev => ({
//       ...prev,
//       address: details.address,
//       option: details.option,
//     }));
    
//     // Set selected store for pickup
//     if (details.option === 'pickup') {
//       setSelectedStore(details.store);
//     } else {
//       setSelectedStore(null);
//     }
//   };

//   // Handle schedule selection
//   const handleScheduleSelect = (date: string, timeSlot: string) => {
//     setDeliveryDetails(prev => ({
//       ...prev,
//       schedule: { date, timeSlot },
//     }));
//   };

//   // Unified order processing function
//   const handleOrderSubmit = async () => {
//     // Validation
//     if (!deliveryDetails.address) {
//       NotificationService.showDialog('Please select a delivery address or pickup location');
//       return;
//     }

//     if (deliveryDetails.option === 'delivery' && !deliveryDetails.schedule) {
//       NotificationService.showDialog('Please select a delivery schedule');
//       return;
//     }

//     if (!basket || basket.itemCount === 0) {
//       NotificationService.showDialog('Your basket is empty');
//       return;
//     }

//     setIsProcessing(true);
    
//     try {
//       // Prepare order data
//       // const orderData1 = {
//       //   deliveryAddress: deliveryDetails.address,
//       //   deliverySchedule: deliveryDetails.schedule,
//       //   deliveryOption: deliveryDetails.option,
//       //   paymentMethod,
//       //   items: basket.items,
//       //   subtotal: basket.subtotal,
//       //   total: basket.estimatedTotal || basket.subtotal,
//       //   customerEmail: user?.email || 'customer@salesnet.co',
//       //   customerPhone: deliveryDetails.address?.phone_number || user?.phone
//       // };

//       // const orderData = {
//       //   delivery_option: deliveryDetails.option,
//       //   address_id: deliveryDetails.address?.id,  // Send address ID if available
//       //   // address_id: selectedAddressId,  // Send address ID if available
//       //   store_id: deliveryDetails.option === 'pickup' ? deliveryDetails.address?.id : null,
//       //   delivery_date: deliveryDetails.schedule?.date,
//       //   delivery_time_slot: deliveryDetails.schedule?.timeSlot,
//       //   payment_method: paymentMethod,
//       //   basket_items: basket.items.map(item => ({
//       //     product_id: item.product_id,
//       //     quantity: item.quantity
//       //   })),
//       //   customer_email: user?.email || 'customer@salesnet.co',
//       //   customer_phone: deliveryDetails.address?.phone_number || user?.phone
//       // };

//       // const orderData = {
//       //   delivery_option: deliveryDetails.option,
//       //   // Use address ID only for delivery
//       //   address_id: deliveryDetails.option === 'delivery' ? deliveryDetails.address?.id : null,
//       //   // Use store ID for pickup
//       //   store_id: deliveryDetails.option === 'pickup' ? selectedStore?.id : null,
//       //   delivery_date: deliveryDetails.schedule?.date,
//       //   delivery_time_slot: deliveryDetails.schedule?.timeSlot,
//       //   payment_method: paymentMethod,
//       //   basket_items: basket.items.map(item => ({
//       //     product_id: item.product_id,
//       //     quantity: item.quantity
//       //   })),
//       //   customer_email: user?.email || 'customer@salesnet.co',
//       //   customer_phone: user?.phone || deliveryDetails.address?.phone_number
//       // };
//       console.log(selectedStore);
//       const orderData = {
//         delivery_option: deliveryDetails.option,
//         // Use address ID for both delivery and pickup
//         address_id: deliveryDetails.address?.id,
//         // For pickup, use store ID (from selectedStore)
//         store_id: deliveryDetails.option === 'pickup' ? selectedStore?.id : null,
//         delivery_date: deliveryDetails.schedule?.date,
//         delivery_time_slot: deliveryDetails.schedule?.timeSlot,
//         payment_method: paymentMethod,
//         basket_items: basket.items.map(item => ({
//           product_id: item.product_id,
//           quantity: item.quantity
//         })),
//         customer_email: user?.email || 'customer@salesnet.co',
//         customer_phone: user?.phone || deliveryDetails.address?.phone_number
//   };

//       // Create order first
//       const order = await createOrder(orderData);

//       // Process payment based on selected method
//       if (paymentMethod === 'pay_on_delivery') {
//         // For pay on delivery, just mark order as pending payment
//         navigate('/checkout/success', { 
//           state: { 
//             order: { ...order, paymentStatus: 'pending' },
//             message: 'Order placed successfully! Pay on delivery.' 
//           } 
//         });
//       } else {
//         // Process payment for other methods
//         await processPaymentMethod(order);
//       }
//     } catch (error) {
//       console.error('Order processing error:', error);
//       NotificationService.showDialog('Failed to process order. Please try again.');
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   // Process payment based on selected method
//   const processPaymentMethod = async (order: any) => {
//     const amount = order.total;
//     const customerEmail = order.customerEmail;
//     const customerPhone = deliveryDetails.address?.phone_number;

//     switch (paymentMethod) {
//       case 'paypal':
//         // PayPal will be handled separately through PayPal buttons
//         // This is just for direct PayPal API integration if needed
//         const paypalResult = await processPayment({
//           orderId: order.id,
//           amount,
//           paymentMethod: 'paypal',
//           customerEmail
//         });
        
//         if (paypalResult.success) {
//           navigate('/checkout/success', { state: { order } });
//         } else {
//           throw new Error(paypalResult.message || 'PayPal payment failed');
//         }
//         break;

//       case 'paystack':
//         const handler = (window as any).PaystackPop.setup({
//           key: paymentConfig.paystack.publicKey,
//           email: customerEmail,
//           amount: amount * 100, // Convert to kobo
//           currency: 'NGN',
//           reference: `order_${order.id}_${Date.now()}`,
//           onClose: () => {
//             setIsProcessing(false);
//             NotificationService.showDialog('Payment cancelled', 'info');
//           },
//           callback: async (response: any) => {
//             try {
//               const paymentResult = await processPayment({
//                 orderId: order.id,
//                 amount,
//                 paymentMethod: 'paystack',
//                 customerEmail,
//                 paymentReference: response.reference
//               });

//               if (paymentResult.success) {
//                 navigate('/checkout/success', { state: { order } });
//               } else {
//                 throw new Error(paymentResult.message || 'Payment verification failed');
//               }
//             } catch (error) {
//               console.error('Payment processing error:', error);
//               NotificationService.showDialog('Payment verification failed');
//             }
//           }
//         });
//         handler.openIframe();
//         break;

//       case 'flutterwave':
//         (window as any).FlutterwaveCheckout({
//           public_key: paymentConfig.flutterwave.publicKey,
//           tx_ref: `order_${order.id}_${Date.now()}`,
//           amount,
//           currency: 'NGN',
//           payment_options: 'card,mobilemoney,ussd',
//           customer: {
//             email: customerEmail,
//             phone_number: customerPhone,
//             name: user?.full_name || 'Customer'
//           },
//           customizations: {
//             title: 'Order Payment',
//             description: `Payment for order #${order.id}`,
//             logo: '/assets/img/logo.png'
//           },
//           callback: async (response: any) => {
//             try {
//               const paymentResult = await processPayment({
//                 orderId: order.id,
//                 amount,
//                 paymentMethod: 'flutterwave',
//                 customerEmail,
//                 paymentReference: response.transaction_id
//               });

//               if (paymentResult.success) {
//                 navigate('/checkout/success', { state: { order } });
//               } else {
//                 throw new Error(paymentResult.message || 'Payment verification failed');
//               }
//             } catch (error) {
//               console.error('Payment processing error:', error);
//               NotificationService.showDialog('Payment verification failed');
//             }
//           },
//           onclose: () => {
//             setIsProcessing(false);
//             NotificationService.showDialog('Payment cancelled', 'info');
//           },
//         });
//         break;

//       case 'opay':
//         (window as any).OPayCheckout({
//           merchantId: paymentConfig.opay.merchantId,
//           reference: `order_${order.id}_${Date.now()}`,
//           amount,
//           currency: 'NGN',
//           callbackUrl: `${window.location.origin}/checkout/callback`,
//           customerEmail,
//           customerPhone,
//           customerName: user?.full_name || 'Customer',
//           onSuccess: async (response: any) => {
//             try {
//               const paymentResult = await processPayment({
//                 orderId: order.id,
//                 amount,
//                 paymentMethod: 'opay',
//                 customerEmail,
//                 paymentReference: response.reference
//               });

//               if (paymentResult.success) {
//                 navigate('/checkout/success', { state: { order } });
//               } else {
//                 throw new Error(paymentResult.message || 'Payment verification failed');
//               }
//             } catch (error) {
//               console.error('Payment processing error:', error);
//               NotificationService.showDialog('Payment verification failed');
//             }
//           },
//           onClose: () => {
//             setIsProcessing(false);
//             NotificationService.showDialog('Payment cancelled', 'info');
//           },
//         });
//         break;

//       default:
//         throw new Error('Invalid payment method selected');
//     }
//   };

//   // Format address for display
//   // const formatDisplayAddress = (address: any) => {
//   //   if (!address) return '';
//   //   return `${address.street_address}, ${address.city}${
//   //     address.state ? `, ${address.state.name}` : ''
//   //   }${address.zip_code ? `, ${address.zip_code}` : ''}${
//   //     address?.state?.country ? `, ${address?.state?.country.name}` : ''
//   //   }`;
//   // };

//     // Updated address display
//   // const formatDisplayAddress = (address: any) => {
//   //   if (!address) return '';
    
//   //   // Handle store addresses
//   //   if (selectedStore) {
//   //     return `${selectedStore.name}, ${address.street_address}, ${address.city}${
//   //       address.state ? `, ${address.state.name}` : ''
//   //     }`;
//   //   }
    
//   //   // User addresses
//   //   return `${address.street_address}, ${address.city}${
//   //     address.state ? `, ${address.state.name}` : ''
//   //   }${address.zip_code ? `, ${address.zip_code}` : ''}`;
//   // };

//    // Update display for pickup locations
//   const formatDisplayAddress = (address: any) => {
//     if (!address && deliveryDetails.option === 'pickup' && selectedStore) {
//       return `${selectedStore.name}, ${selectedStore.address?.street_address}, ${selectedStore.address?.city?.name}`;
//     }
//     if (!address) return '';
//     return `${address.street_address}, ${address.city?.name}${
//       address.state ? `, ${address.state.name}` : ''
//     }${address.zip_code ? `, ${address.zip_code}` : ''}${
//       address?.state?.country ? `, ${address?.state?.country.name}` : ''
//     }`;
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

//   // Check if order can be placed
//   const canPlaceOrder = () => {
//     const hasAddress = !!deliveryDetails.address;
//     const hasSchedule = deliveryDetails.option === 'pickup' || !!deliveryDetails.schedule;
//     const hasItems = basket && basket.itemCount > 0;
//     const notProcessing = !isProcessing;
//     const addressesLoaded = !addressesLoading;
    
//     return hasAddress && hasSchedule && hasItems && notProcessing && addressesLoaded;
//   };

//   return (
//     <>
//       <DeliveryOptionsOffCanvas 
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

//               {/* Delivery address section */}
//               <h2 className="h5 mb-4">
//                 {deliveryDetails.option === 'delivery' ? 'Delivery Address' : 'Pickup Location'}
//               </h2>
//               <div className="d-flex align-items-center justify-content-between mb-4">
//                 {deliveryDetails.address ? (
//                   <div className="d-flex flex-column fs-sm text-dark-emphasis me-3">
//                     <div className="d-flex align-items-center">
//                       <i className="ci-map-pin fs-base text-primary me-2" />
//                       <span>{formatDisplayAddress(deliveryDetails.address)}</span>
//                     </div>
//                     {deliveryDetails.address.phone_number && (
//                       <div className="text-muted ms-4 mt-1">Phone: {deliveryDetails.address.phone_number}</div>
//                     )}
//                   </div>
//                 ) : (
//                   <div className="text-muted">No {deliveryDetails.option === 'delivery' ? 'address' : 'location'} selected</div>
//                 )}
//                 <div className="nav animate-scale">
//                   <a
//                     className="badge text-bg-info text-decoration-none rounded-pill animate-target text-nowrap p-1"
//                     href="#deliveryOptions"
//                     data-bs-toggle="offcanvas"
//                     aria-controls="deliveryOptions"
//                   >
//                     {deliveryDetails.address ? "Change" : "Select"}
//                   </a>
//                 </div>
//               </div>

//               {/* Delivery date and time section */}
//               {deliveryDetails.option === 'delivery' && (
//                 <>
//                   <h2 className="h5 mb-4">Delivery Schedule</h2>
//                   <div className="d-flex align-items-center justify-content-between mb-4">
//                     {deliveryDetails.schedule ? (
//                       <div className="align-items-center fs-sm">
//                         <i className="ci-clock fs-base text-primary me-2" />
//                         {formatDisplaySchedule(deliveryDetails.schedule)}
//                       </div>
//                     ) : (
//                       <div className="text-muted">No schedule selected</div>
//                     )}
//                     <div className="nav animate-scale">
//                       <a
//                         className="badge text-bg-info text-decoration-none rounded-pill animate-target text-nowrap p-1"
//                         href="#deliveryDateTime"
//                         data-bs-toggle="offcanvas"
//                         aria-controls="deliveryDateTime"
//                       >
//                         {deliveryDetails.schedule ? "Change" : "Select"}
//                       </a>
//                     </div>
//                   </div>
//                 </>
//               )}

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

//                   {/* Pay on Delivery */}
//                   <div>
//                     <input
//                       type="radio"
//                       className="btn-check"
//                       name="payment-method"
//                       id="pay_on_delivery"
//                       checked={paymentMethod === 'pay_on_delivery'}
//                       onChange={() => handlePaymentMethodChange('pay_on_delivery')}
//                     />
//                     <label
//                       className={`btn btn-outline-secondary rounded-pill d-flex align-items-center ${
//                         paymentMethod === 'pay_on_delivery' ? 'active' : ''
//                       }`}
//                       htmlFor="pay_on_delivery"
//                     >
//                       <i className="ci-cash fs-base me-2" />
//                       Pay on Delivery
//                     </label>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Order summary (sticky sidebar) */}
//             {!basketLoading && basket && (
//               <OrderSummary
//                 context="checkout"
//                 itemCount={basket?.itemCount || 0}
//                 subtotal={basket?.subtotal || 0}
//                 total={basket?.estimatedTotal || basket?.subtotal}
//                 discount={basket?.savings || 0}
//                 deliveryFee={0} // Free shipping
//                 qualifiesForFreeShipping={basket.subtotal >= (basket.freeShippingThreshold || 0)}
//                 isLoading={isProcessing}
//                 onConfirmOrder={handleOrderSubmit}
//                 canPlaceOrder={canPlaceOrder()}
//                 buttonText={isProcessing ? 'Processing...' : 'Confirm Order'}
//               />
//             )}

//           </div>
//         </section>
//       </main>
//     </>
//   );
// };

// export default Checkout;

// v8

// // V7 - Enhanced with unified order/payment processing - FIXED PICKUP HANDLING
// import React, { useState, useEffect, useCallback } from 'react';
// import { Link, NavLink, useNavigate } from 'react-router-dom';
// import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
// import DeliveryDateOffCanvas from './DeliveryDateOffCanvas';
// import DeliveryOptionsOffCanvas from './DeliveryOptionsOffCanvas';
// import { useOrder } from '../../../hooks/useOrder';
// import { usePayment } from '../../../hooks/usePayment';
// import { useBasket } from '../../../hooks/useBasket';
// import { NotificationService } from '../../../services/local/NotificationService';
// import Breadcrumb from '../../../components/shared/Breadcrumb';
// import OrderSummary from '../shared/OrderSummary';
// import { paymentConfig } from '../../../utils/env';
// import { useAuth } from '../../../context/AuthContext';
// import { AxiosAddressesService } from '../../../services/net/AxiosAddressesService';

// const Checkout = () => {
//   const navigate = useNavigate();
//   const { basket, loading: basketLoading } = useBasket();
//   const { user } = useAuth();
//   const [paymentMethod, setPaymentMethod] = useState('paypal');
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [addresses, setAddresses] = useState<any[]>([]);
//   const [stores, setStores] = useState<any[]>([]);
//   const [selectedStore, setSelectedStore] = useState<any>(null);
//   const [addressesLoading, setAddressesLoading] = useState(true);

//   const [deliveryDetails, setDeliveryDetails] = useState<{
//     address: any | null;
//     schedule: { date: string; timeSlot: string } | null;
//     option: 'delivery' | 'pickup';
//   }>({
//     address: null,
//     schedule: null,
//     option: 'delivery',
//   });

//   const { processPayment } = usePayment();
//   const { createOrder } = useOrder();

//   // Fetch user addresses
//   const fetchAddresses = useCallback(async () => {
//     try {
//       setAddressesLoading(true);
//       const response = await AxiosAddressesService.fetchAll({
//         include_city: true,
//         include_state: true,
//         include_country: true
//       });
//       const userAddresses = response.data.addresses || [];
//       setAddresses(userAddresses);
      
//       // Set primary address as default for delivery
//       const primaryAddress = userAddresses.find((addr: any) => addr.is_primary);
//       const defaultAddress = primaryAddress || userAddresses[0] || null;
      
//       if (defaultAddress && deliveryDetails.option === 'delivery') {
//         setDeliveryDetails(prev => ({
//           ...prev,
//           address: defaultAddress,
//         }));
//       }
//     } catch (err: any) {
//       const message = err.response?.data?.message || 'Failed to load addresses';
//       console.error('Address fetch error:', message);
//     } finally {
//       setAddressesLoading(false);
//     }
//   }, [deliveryDetails.option]);

//   // Set default address and schedule on component mount
//   useEffect(() => {
//     fetchAddresses();

//     // Set default schedule to next day
//     const tomorrow = new Date();
//     tomorrow.setDate(tomorrow.getDate() + 1);
//     const defaultSchedule = {
//       date: tomorrow.toISOString().split('T')[0],
//       timeSlot: '10:00 - 12:00'
//     };
    
//     setDeliveryDetails(prev => ({
//       ...prev,
//       schedule: defaultSchedule,
//     }));
    
//   }, [fetchAddresses]);

//   // Handle payment method change
//   const handlePaymentMethodChange = (method: string) => {
//     setPaymentMethod(method);
//   };

//   // FIXED: Updated delivery option handler with proper store handling
//   const handleDeliveryOptionSelect = (details: {
//     address: any;
//     store: any;
//     option: 'delivery' | 'pickup';
//   }) => {
//     console.log('Delivery option selected:', details); // Debug log
    
//     if (details.option === 'pickup') {
//       alert(details.option);
//       // For pickup: set the store and use store's address
//       setSelectedStore(details.store);
//       setDeliveryDetails(prev => ({
//         ...prev,
//         address: details.store?.address || details.address, // Use store's address
//         option: details.option,
//       }));

//       // alert(JSON.stringify(details));

//     } else {
//       // For delivery: clear store and use user's address
//       setSelectedStore(null);
//       setDeliveryDetails(prev => ({
//         ...prev,
//         address: details.address,
//         option: details.option,
//       }));
//     }
//   };

//   // Handle schedule selection
//   const handleScheduleSelect = (date: string, timeSlot: string) => {
//     setDeliveryDetails(prev => ({
//       ...prev,
//       schedule: { date, timeSlot },
//     }));
//   };

//   // Unified order processing function
//   const handleOrderSubmit = async () => {
//     // Validation
//     if (!deliveryDetails.address && !selectedStore) {
//       NotificationService.showDialog('Please select a delivery address or pickup location');
//       return;
//     }

//     if (deliveryDetails.option === 'delivery' && !deliveryDetails.schedule) {
//       NotificationService.showDialog('Please select a delivery schedule');
//       return;
//     }

//     if (deliveryDetails.option === 'pickup' && !selectedStore) {
//       NotificationService.showDialog('Please select a pickup store');
//       return;
//     }

//     if (!basket || basket.itemCount === 0) {
//       NotificationService.showDialog('Your basket is empty');
//       return;
//     }

//     setIsProcessing(true);
    
//     try {
//       console.log('Selected store:', selectedStore); // Debug log
//       console.log('Delivery details:', deliveryDetails); // Debug log
      
//       // FIXED: Prepare order data with proper store handling
//       const orderData = {
//         delivery_option: deliveryDetails.option,
//         // For delivery: use address_id, for pickup: use store's address if available
//         address_id: deliveryDetails.option === 'delivery' 
//           ? deliveryDetails.address?.id 
//           : (selectedStore?.address?.id || deliveryDetails.address?.id),
//         // For pickup: always include store_id
//         store_id: deliveryDetails.option === 'pickup' ? selectedStore?.id : null,
//         delivery_date: deliveryDetails.schedule?.date,
//         delivery_time_slot: deliveryDetails.schedule?.timeSlot,
//         payment_method: paymentMethod,
//         basket_items: basket.items.map(item => ({
//           product_id: item.product_id,
//           quantity: item.quantity
//         })),
//         customer_email: user?.email || 'customer@salesnet.co',
//         customer_phone: user?.phone || deliveryDetails.address?.phone_number || selectedStore?.phone
//       };

//       console.log('Order data being sent:', orderData); // Debug log

//       // Create order first
//       const order = await createOrder(orderData);

//       // Process payment based on selected method
//       if (paymentMethod === 'pay_on_delivery') {
//         navigate('/checkout/success', { 
//           state: { 
//             order: { ...order, paymentStatus: 'pending' },
//             message: 'Order placed successfully! Pay on delivery.' 
//           } 
//         });
//       } else {
//         await processPaymentMethod(order);
//       }
//     } catch (error) {
//       console.error('Order processing error:', error);
//       NotificationService.showDialog('Failed to process order. Please try again.');
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   // Process payment based on selected method
//   const processPaymentMethod = async (order: any) => {
//     const amount = order.total;
//     const customerEmail = order.customerEmail;
//     const customerPhone = deliveryDetails.address?.phone_number || selectedStore?.phone;

//     switch (paymentMethod) {
//       case 'paypal':
//         const paypalResult = await processPayment({
//           orderId: order.id,
//           amount,
//           paymentMethod: 'paypal',
//           customerEmail
//         });
        
//         if (paypalResult.success) {
//           navigate('/checkout/success', { state: { order } });
//         } else {
//           throw new Error(paypalResult.message || 'PayPal payment failed');
//         }
//         break;

//       case 'paystack':
//         const handler = (window as any).PaystackPop.setup({
//           key: paymentConfig.paystack.publicKey,
//           email: customerEmail,
//           amount: amount * 100,
//           currency: 'NGN',
//           reference: `order_${order.id}_${Date.now()}`,
//           onClose: () => {
//             setIsProcessing(false);
//             NotificationService.showDialog('Payment cancelled', 'info');
//           },
//           callback: async (response: any) => {
//             try {
//               const paymentResult = await processPayment({
//                 orderId: order.id,
//                 amount,
//                 paymentMethod: 'paystack',
//                 customerEmail,
//                 paymentReference: response.reference
//               });

//               if (paymentResult.success) {
//                 navigate('/checkout/success', { state: { order } });
//               } else {
//                 throw new Error(paymentResult.message || 'Payment verification failed');
//               }
//             } catch (error) {
//               console.error('Payment processing error:', error);
//               NotificationService.showDialog('Payment verification failed');
//             }
//           }
//         });
//         handler.openIframe();
//         break;

//       case 'flutterwave':
//         (window as any).FlutterwaveCheckout({
//           public_key: paymentConfig.flutterwave.publicKey,
//           tx_ref: `order_${order.id}_${Date.now()}`,
//           amount,
//           currency: 'NGN',
//           payment_options: 'card,mobilemoney,ussd',
//           customer: {
//             email: customerEmail,
//             phone_number: customerPhone,
//             name: user?.full_name || 'Customer'
//           },
//           customizations: {
//             title: 'Order Payment',
//             description: `Payment for order #${order.id}`,
//             logo: '/assets/img/logo.png'
//           },
//           callback: async (response: any) => {
//             try {
//               const paymentResult = await processPayment({
//                 orderId: order.id,
//                 amount,
//                 paymentMethod: 'flutterwave',
//                 customerEmail,
//                 paymentReference: response.transaction_id
//               });

//               if (paymentResult.success) {
//                 navigate('/checkout/success', { state: { order } });
//               } else {
//                 throw new Error(paymentResult.message || 'Payment verification failed');
//               }
//             } catch (error) {
//               console.error('Payment processing error:', error);
//               NotificationService.showDialog('Payment verification failed');
//             }
//           },
//           onclose: () => {
//             setIsProcessing(false);
//             NotificationService.showDialog('Payment cancelled', 'info');
//           },
//         });
//         break;

//       case 'opay':
//         (window as any).OPayCheckout({
//           merchantId: paymentConfig.opay.merchantId,
//           reference: `order_${order.id}_${Date.now()}`,
//           amount,
//           currency: 'NGN',
//           callbackUrl: `${window.location.origin}/checkout/callback`,
//           customerEmail,
//           customerPhone,
//           customerName: user?.full_name || 'Customer',
//           onSuccess: async (response: any) => {
//             try {
//               const paymentResult = await processPayment({
//                 orderId: order.id,
//                 amount,
//                 paymentMethod: 'opay',
//                 customerEmail,
//                 paymentReference: response.reference
//               });

//               if (paymentResult.success) {
//                 navigate('/checkout/success', { state: { order } });
//               } else {
//                 throw new Error(paymentResult.message || 'Payment verification failed');
//               }
//             } catch (error) {
//               console.error('Payment processing error:', error);
//               NotificationService.showDialog('Payment verification failed');
//             }
//           },
//           onClose: () => {
//             setIsProcessing(false);
//             NotificationService.showDialog('Payment cancelled', 'info');
//           },
//         });
//         break;

//       default:
//         throw new Error('Invalid payment method selected');
//     }
//   };

//   // FIXED: Updated address display logic
//   const formatDisplayAddress = (address: any) => {
//     if (deliveryDetails.option === 'pickup' && selectedStore) {
//       // For pickup, show store name and address
//       const storeAddress = selectedStore.address || address;
//       return `${selectedStore.name}, ${storeAddress?.street_address || 'Address not available'}, ${storeAddress?.city?.name || storeAddress?.city || 'City not available'}`;
//     }
    
//     if (!address) return '';
    
//     // For delivery, show user address
//     return `${address.street_address}, ${address.city?.name || address.city}${
//       address.state ? `, ${address.state.name}` : ''
//     }${address.zip_code ? `, ${address.zip_code}` : ''}${
//       address?.state?.country ? `, ${address?.state?.country.name}` : ''
//     }`;
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

//   // FIXED: Updated validation logic
//   const canPlaceOrder = () => {
//     const hasAddress = deliveryDetails.option === 'delivery' 
//       ? !!deliveryDetails.address 
//       : !!selectedStore;
//     const hasSchedule = deliveryDetails.option === 'pickup' || !!deliveryDetails.schedule;
//     const hasItems = basket && basket.itemCount > 0;
//     const notProcessing = !isProcessing;
//     const addressesLoaded = !addressesLoading;
    
//     return hasAddress && hasSchedule && hasItems && notProcessing && addressesLoaded;
//   };

//   return (
//     <>
//       <DeliveryOptionsOffCanvas 
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

//               {/* Delivery address section */}
//               <h2 className="h5 mb-4">
//                 {deliveryDetails.option === 'delivery' ? 'Delivery Address' : 'Pickup Location'}
//               </h2>
//               <div className="d-flex align-items-center justify-content-between mb-4">
//                 {(deliveryDetails.address || selectedStore) ? (
//                   <div className="d-flex flex-column fs-sm text-dark-emphasis me-3">
//                     <div className="d-flex align-items-center">
//                       <i className="ci-map-pin fs-base text-primary me-2" />
//                       <span>{formatDisplayAddress(deliveryDetails.address)}</span>
//                     </div>
//                     {/* Show phone number from appropriate source */}
//                     {((deliveryDetails.option === 'pickup' && selectedStore?.phone) || 
//                       (deliveryDetails.option === 'delivery' && deliveryDetails.address?.phone_number)) && (
//                       <div className="text-muted ms-4 mt-1">
//                         Phone: {deliveryDetails.option === 'pickup' 
//                           ? selectedStore?.phone 
//                           : deliveryDetails.address?.phone_number}
//                       </div>
//                     )}
//                   </div>
//                 ) : (
//                   <div className="text-muted">
//                     No {deliveryDetails.option === 'delivery' ? 'address' : 'location'} selected
//                   </div>
//                 )}
//                 <div className="nav animate-scale">
//                   <a
//                     className="badge text-bg-info text-decoration-none rounded-pill animate-target text-nowrap p-1"
//                     href="#deliveryOptions"
//                     data-bs-toggle="offcanvas"
//                     aria-controls="deliveryOptions"
//                   >
//                     {(deliveryDetails.address || selectedStore) ? "Change" : "Select"}
//                   </a>
//                 </div>
//               </div>

//               {/* Delivery date and time section */}
//               {deliveryDetails.option === 'delivery' && (
//                 <>
//                   <h2 className="h5 mb-4">Delivery Schedule</h2>
//                   <div className="d-flex align-items-center justify-content-between mb-4">
//                     {deliveryDetails.schedule ? (
//                       <div className="align-items-center fs-sm">
//                         <i className="ci-clock fs-base text-primary me-2" />
//                         {formatDisplaySchedule(deliveryDetails.schedule)}
//                       </div>
//                     ) : (
//                       <div className="text-muted">No schedule selected</div>
//                     )}
//                     <div className="nav animate-scale">
//                       <a
//                         className="badge text-bg-info text-decoration-none rounded-pill animate-target text-nowrap p-1"
//                         href="#deliveryDateTime"
//                         data-bs-toggle="offcanvas"
//                         aria-controls="deliveryDateTime"
//                       >
//                         {deliveryDetails.schedule ? "Change" : "Select"}
//                       </a>
//                     </div>
//                   </div>
//                 </>
//               )}

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

//                   {/* Pay on Delivery */}
//                   <div>
//                     <input
//                       type="radio"
//                       className="btn-check"
//                       name="payment-method"
//                       id="pay_on_delivery"
//                       checked={paymentMethod === 'pay_on_delivery'}
//                       onChange={() => handlePaymentMethodChange('pay_on_delivery')}
//                     />
//                     <label
//                       className={`btn btn-outline-secondary rounded-pill d-flex align-items-center ${
//                         paymentMethod === 'pay_on_delivery' ? 'active' : ''
//                       }`}
//                       htmlFor="pay_on_delivery"
//                     >
//                       <i className="ci-cash fs-base me-2" />
//                       Pay on Delivery
//                     </label>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Order summary (sticky sidebar) */}
//             {!basketLoading && basket && (
//               <OrderSummary
//                 context="checkout"
//                 itemCount={basket?.itemCount || 0}
//                 subtotal={basket?.subtotal || 0}
//                 total={basket?.estimatedTotal || basket?.subtotal}
//                 discount={basket?.savings || 0}
//                 deliveryFee={0}
//                 qualifiesForFreeShipping={basket.subtotal >= (basket.freeShippingThreshold || 0)}
//                 isLoading={isProcessing}
//                 onConfirmOrder={handleOrderSubmit}
//                 canPlaceOrder={canPlaceOrder()}
//                 buttonText={isProcessing ? 'Processing...' : 'Confirm Order'}
//               />
//             )}

//           </div>
//         </section>
//       </main>
//     </>
//   );
// };

// export default Checkout;

// 

// // V7 - Enhanced with unified order/payment processing - FIXED PICKUP HANDLING
// import React, { useState, useEffect, useCallback } from 'react';
// import { Link, NavLink, useNavigate } from 'react-router-dom';
// import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
// import DeliveryDateOffCanvas from './DeliveryDateOffCanvas';
// import DeliveryOptionsOffCanvas from './DeliveryOptionsOffCanvas';
// import { useOrder } from '../../../hooks/useOrder';
// import { usePayment } from '../../../hooks/usePayment';
// import { useBasket } from '../../../hooks/useBasket';
// import { NotificationService } from '../../../services/local/NotificationService';
// import Breadcrumb from '../../../components/shared/Breadcrumb';
// import OrderSummary from '../shared/OrderSummary';
// import { paymentConfig } from '../../../utils/env';
// import { useAuth } from '../../../context/AuthContext';
// import { AxiosAddressesService } from '../../../services/net/AxiosAddressesService';

// const Checkout = () => {
//   const navigate = useNavigate();
//   const { basket, loading: basketLoading } = useBasket();
//   const { user } = useAuth();
//   const [paymentMethod, setPaymentMethod] = useState('paypal');
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [addresses, setAddresses] = useState<any[]>([]);
//   const [stores, setStores] = useState<any[]>([]);
//   const [selectedStore, setSelectedStore] = useState<any>(null);
//   const [addressesLoading, setAddressesLoading] = useState(true);

//   // FIXED: Simplified delivery details state
//   const [deliveryDetails, setDeliveryDetails] = useState<{
//     address: any | null;
//     schedule: { date: string; timeSlot: string } | null;
//     option: 'delivery' | 'pickup';
//   }>({
//     address: null,
//     schedule: null,
//     option: 'delivery',
//   });

//   const { processPayment } = usePayment();
//   const { createOrder } = useOrder();

//   // FIXED: Removed deliveryDetails.option dependency from fetchAddresses
//   const fetchAddresses = useCallback(async () => {
//     try {
//       setAddressesLoading(true);
//       const response = await AxiosAddressesService.fetchAll({
//         include_city: true,
//         include_state: true,
//         include_country: true
//       });
//       const userAddresses = response.data.addresses || [];
//       setAddresses(userAddresses);
      
//       // Set primary address as default only if no address is currently selected
//       const primaryAddress = userAddresses.find((addr: any) => addr.is_primary);
//       const defaultAddress = primaryAddress || userAddresses[0] || null;
      
//       if (defaultAddress && !deliveryDetails.address) {
//         setDeliveryDetails(prev => ({
//           ...prev,
//           address: defaultAddress,
//         }));
//       }
//     } catch (err: any) {
//       const message = err.response?.data?.message || 'Failed to load addresses';
//       console.error('Address fetch error:', message);
//     } finally {
//       setAddressesLoading(false);
//     }
//   }, []); // Removed dependency

//   // Set default address and schedule on component mount
//   useEffect(() => {
//     fetchAddresses();

//     // Set default schedule to next day
//     const tomorrow = new Date();
//     tomorrow.setDate(tomorrow.getDate() + 1);
//     const defaultSchedule = {
//       date: tomorrow.toISOString().split('T')[0],
//       timeSlot: '10:00 - 12:00'
//     };
    
//     setDeliveryDetails(prev => ({
//       ...prev,
//       schedule: defaultSchedule,
//     }));
    
//   }, [fetchAddresses]);

//   // Handle payment method change
//   const handlePaymentMethodChange = (method: string) => {
//     setPaymentMethod(method);
//   };

//   // FIXED: Completely rewritten delivery option handler
//   const handleDeliveryOptionSelect = (details: {
//     address: any;
//     store: any;
//     option: 'delivery' | 'pickup';
//   }) => {
//     console.log('Delivery option selected:', details);
    
//     // FIXED: Update state in a single setState call to avoid timing issues
//     if (details.option === 'pickup') {
//       console.log('Setting pickup option with store:', details.store);
      
//       // For pickup: set the store and use store's address, clear user address
//       setSelectedStore(details.store);
//       setDeliveryDetails(prev => ({
//         ...prev,
//         address: details.store?.address || null,
//         option: 'pickup',
//         // Keep schedule for pickup if needed, or clear it
//         schedule: prev.schedule, // You might want to clear this: schedule: null
//       }));
      
//     } else {
//       console.log('Setting delivery option with address:', details.address);
      
//       // For delivery: clear store and use user's selected address
//       setSelectedStore(null);
//       setDeliveryDetails(prev => ({
//         ...prev,
//         address: details.address,
//         option: 'delivery',
//         // Restore schedule for delivery
//         schedule: prev.schedule || {
//           date: new Date(Date.now() + 86400000).toISOString().split('T')[0], // tomorrow
//           timeSlot: '10:00 - 12:00'
//         },
//       }));
//     }
//   };

//   // Handle schedule selection
//   const handleScheduleSelect = (date: string, timeSlot: string) => {
//     setDeliveryDetails(prev => ({
//       ...prev,
//       schedule: { date, timeSlot },
//     }));
//   };

//   // FIXED: Enhanced validation with better logging
//   const validateOrderData = () => {
//     console.log('Validating order data:');
//     console.log('- Delivery option:', deliveryDetails.option);
//     console.log('- Selected store:', selectedStore);
//     console.log('- Delivery address:', deliveryDetails.address);
//     console.log('- Schedule:', deliveryDetails.schedule);
//     console.log('- Basket:', basket);

//     // Check if we have either an address or a store depending on option
//     if (deliveryDetails.option === 'pickup') {
//       if (!selectedStore) {
//         NotificationService.showDialog('Please select a pickup store');
//         return false;
//       }
//     } else {
//       if (!deliveryDetails.address) {
//         NotificationService.showDialog('Please select a delivery address');
//         return false;
//       }
//       if (!deliveryDetails.schedule) {
//         NotificationService.showDialog('Please select a delivery schedule');
//         return false;
//       }
//     }

//     if (!basket || basket.itemCount === 0) {
//       NotificationService.showDialog('Your basket is empty');
//       return false;
//     }

//     return true;
//   };

//   // Unified order processing function
//   const handleOrderSubmit = async () => {
//     if (!validateOrderData()) {
//       return;
//     }

//     setIsProcessing(true);
    
//     try {
//       console.log('Processing order with:');
//       console.log('- Selected store:', selectedStore);
//       console.log('- Delivery details:', deliveryDetails);
      
//       // FIXED: Improved order data preparation
//       const orderData = {
//         delivery_option: deliveryDetails.option,
//         // For delivery: use user's address_id, for pickup: use store's address_id or fallback
//         address_id: deliveryDetails.option === 'delivery' 
//           ? deliveryDetails.address?.id 
//           : (selectedStore?.address?.id || deliveryDetails.address?.id),
//         // For pickup: always include store_id
//         store_id: deliveryDetails.option === 'pickup' ? selectedStore?.id : null,
//         // Schedule is only required for delivery
//         delivery_date: deliveryDetails.option === 'delivery' ? deliveryDetails.schedule?.date : null,
//         delivery_time_slot: deliveryDetails.option === 'delivery' ? deliveryDetails.schedule?.timeSlot : null,
//         payment_method: paymentMethod,
//         basket_items: basket.items.map(item => ({
//           product_id: item.product_id,
//           quantity: item.quantity
//         })),
//         customer_email: user?.email || 'customer@salesnet.co',
//         customer_phone: user?.phone || 
//           (deliveryDetails.option === 'pickup' ? selectedStore?.phone : deliveryDetails.address?.phone_number)
//       };

//       console.log('Order data being sent:', orderData);

//       // Create order first
//       const order = await createOrder(orderData);

//       // Process payment based on selected method
//       if (paymentMethod === 'pay_on_delivery') {
//         navigate('/checkout/success', { 
//           state: { 
//             order: { ...order, paymentStatus: 'pending' },
//             message: 'Order placed successfully! Pay on delivery.' 
//           } 
//         });
//       } else {
//         await processPaymentMethod(order);
//       }
//     } catch (error) {
//       console.error('Order processing error:', error);
//       NotificationService.showDialog('Failed to process order. Please try again.');
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   // Process payment based on selected method
//   const processPaymentMethod = async (order: any) => {
//     const amount = order.total;
//     const customerEmail = order.customerEmail;
//     const customerPhone = deliveryDetails.option === 'pickup' ? selectedStore?.phone : deliveryDetails.address?.phone_number;

//     switch (paymentMethod) {
//       case 'paypal':
//         const paypalResult = await processPayment({
//           orderId: order.id,
//           amount,
//           paymentMethod: 'paypal',
//           customerEmail
//         });
        
//         if (paypalResult.success) {
//           navigate('/checkout/success', { state: { order } });
//         } else {
//           throw new Error(paypalResult.message || 'PayPal payment failed');
//         }
//         break;

//       case 'paystack':
//         const handler = (window as any).PaystackPop.setup({
//           key: paymentConfig.paystack.publicKey,
//           email: customerEmail,
//           amount: amount * 100,
//           currency: 'NGN',
//           reference: `order_${order.id}_${Date.now()}`,
//           onClose: () => {
//             setIsProcessing(false);
//             NotificationService.showDialog('Payment cancelled', 'info');
//           },
//           callback: async (response: any) => {
//             try {
//               const paymentResult = await processPayment({
//                 orderId: order.id,
//                 amount,
//                 paymentMethod: 'paystack',
//                 customerEmail,
//                 paymentReference: response.reference
//               });

//               if (paymentResult.success) {
//                 navigate('/checkout/success', { state: { order } });
//               } else {
//                 throw new Error(paymentResult.message || 'Payment verification failed');
//               }
//             } catch (error) {
//               console.error('Payment processing error:', error);
//               NotificationService.showDialog('Payment verification failed');
//             }
//           }
//         });
//         handler.openIframe();
//         break;

//       case 'flutterwave':
//         (window as any).FlutterwaveCheckout({
//           public_key: paymentConfig.flutterwave.publicKey,
//           tx_ref: `order_${order.id}_${Date.now()}`,
//           amount,
//           currency: 'NGN',
//           payment_options: 'card,mobilemoney,ussd',
//           customer: {
//             email: customerEmail,
//             phone_number: customerPhone,
//             name: user?.full_name || 'Customer'
//           },
//           customizations: {
//             title: 'Order Payment',
//             description: `Payment for order #${order.id}`,
//             logo: '/assets/img/logo.png'
//           },
//           callback: async (response: any) => {
//             try {
//               const paymentResult = await processPayment({
//                 orderId: order.id,
//                 amount,
//                 paymentMethod: 'flutterwave',
//                 customerEmail,
//                 paymentReference: response.transaction_id
//               });

//               if (paymentResult.success) {
//                 navigate('/checkout/success', { state: { order } });
//               } else {
//                 throw new Error(paymentResult.message || 'Payment verification failed');
//               }
//             } catch (error) {
//               console.error('Payment processing error:', error);
//               NotificationService.showDialog('Payment verification failed');
//             }
//           },
//           onclose: () => {
//             setIsProcessing(false);
//             NotificationService.showDialog('Payment cancelled', 'info');
//           },
//         });
//         break;

//       case 'opay':
//         (window as any).OPayCheckout({
//           merchantId: paymentConfig.opay.merchantId,
//           reference: `order_${order.id}_${Date.now()}`,
//           amount,
//           currency: 'NGN',
//           callbackUrl: `${window.location.origin}/checkout/callback`,
//           customerEmail,
//           customerPhone,
//           customerName: user?.full_name || 'Customer',
//           onSuccess: async (response: any) => {
//             try {
//               const paymentResult = await processPayment({
//                 orderId: order.id,
//                 amount,
//                 paymentMethod: 'opay',
//                 customerEmail,
//                 paymentReference: response.reference
//               });

//               if (paymentResult.success) {
//                 navigate('/checkout/success', { state: { order } });
//               } else {
//                 throw new Error(paymentResult.message || 'Payment verification failed');
//               }
//             } catch (error) {
//               console.error('Payment processing error:', error);
//               NotificationService.showDialog('Payment verification failed');
//             }
//           },
//           onClose: () => {
//             setIsProcessing(false);
//             NotificationService.showDialog('Payment cancelled', 'info');
//           },
//         });
//         break;

//       default:
//         throw new Error('Invalid payment method selected');
//     }
//   };

//   // FIXED: Improved address display logic with better fallbacks
//   const formatDisplayAddress = (address: any) => {
//     if (deliveryDetails.option === 'pickup' && selectedStore) {
//       // For pickup, show store name and address
//       const storeAddress = selectedStore.address || address;
//       const storeName = selectedStore.name || 'Store';
//       const storeStreet = storeAddress?.street_address || 'Address not available';
//       const storeCity = storeAddress?.city?.name || storeAddress?.city || 'City not available';
//       return `${storeName}, ${storeStreet}, ${storeCity}`;
//     }
    
//     if (!address) return 'No address selected';
    
//     // For delivery, show user address
//     return `${address.street_address || ''}, ${address.city?.name || address.city || ''}${
//       address.state ? `, ${address.state.name}` : ''
//     }${address.zip_code ? `, ${address.zip_code}` : ''}${
//       address?.state?.country ? `, ${address?.state?.country.name}` : ''
//     }`;
//   };

//   // Format schedule for display
//   const formatDisplaySchedule = (schedule: { date: string; timeSlot: string } | null) => {
//     if (!schedule) return 'No schedule selected';
    
//     const dateObj = new Date(schedule.date);
//     const formattedDate = dateObj.toLocaleDateString('en-US', {
//       weekday: 'long',
//       month: 'short',
//       day: 'numeric',
//     });
    
//     return `${formattedDate} | ${schedule.timeSlot}`;
//   };

//   // FIXED: Enhanced validation logic
//   const canPlaceOrder = () => {
//     const hasValidSetup = deliveryDetails.option === 'delivery' 
//       ? (!!deliveryDetails.address && !!deliveryDetails.schedule)
//       : !!selectedStore;
    
//     const hasItems = basket && basket.itemCount > 0;
//     const notProcessing = !isProcessing;
//     const addressesLoaded = !addressesLoading;
    
//     console.log('Can place order check:', {
//       hasValidSetup,
//       hasItems,
//       notProcessing,
//       addressesLoaded,
//       deliveryOption: deliveryDetails.option,
//       selectedStore: !!selectedStore,
//       address: !!deliveryDetails.address,
//       schedule: !!deliveryDetails.schedule
//     });
    
//     return hasValidSetup && hasItems && notProcessing && addressesLoaded;
//   };

//   return (
//     <>
//       <DeliveryOptionsOffCanvas 
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

//               {/* FIXED: Better conditional rendering */}
//               <h2 className="h5 mb-4">
//                 {deliveryDetails.option === 'delivery' ? 'Delivery Address' : 'Pickup Location'}
//               </h2>
//               <div className="d-flex align-items-center justify-content-between mb-4">
//                 <div className="d-flex flex-column fs-sm text-dark-emphasis me-3">
//                   <div className="d-flex align-items-center">
//                     <i className="ci-map-pin fs-base text-primary me-2" />
//                     <span>{formatDisplayAddress(deliveryDetails.address)}</span>
//                   </div>
//                   {/* FIXED: Show phone number from appropriate source */}
//                   {((deliveryDetails.option === 'pickup' && selectedStore?.phone) || 
//                     (deliveryDetails.option === 'delivery' && deliveryDetails.address?.phone_number)) && (
//                     <div className="text-muted ms-4 mt-1">
//                       Phone: {deliveryDetails.option === 'pickup' 
//                         ? selectedStore?.phone 
//                         : deliveryDetails.address?.phone_number}
//                     </div>
//                   )}
//                   {/* FIXED: Debug info - remove in production */}
//                   <div className="text-muted ms-4 mt-1 small">
//                     Current option: <strong>{deliveryDetails.option}</strong>
//                     {selectedStore && ` | Store: ${selectedStore.name}`}
//                   </div>
//                 </div>
//                 <div className="nav animate-scale">
//                   <a
//                     className="badge text-bg-info text-decoration-none rounded-pill animate-target text-nowrap p-1"
//                     href="#deliveryOptions"
//                     data-bs-toggle="offcanvas"
//                     aria-controls="deliveryOptions"
//                   >
//                     {(deliveryDetails.address || selectedStore) ? "Change" : "Select"}
//                   </a>
//                 </div>
//               </div>

//               {/* FIXED: Only show delivery schedule for delivery option */}
//               {deliveryDetails.option === 'delivery' && (
//                 <>
//                   <h2 className="h5 mb-4">Delivery Schedule</h2>
//                   <div className="d-flex align-items-center justify-content-between mb-4">
//                     <div className="align-items-center fs-sm">
//                       <i className="ci-clock fs-base text-primary me-2" />
//                       {formatDisplaySchedule(deliveryDetails.schedule)}
//                     </div>
//                     <div className="nav animate-scale">
//                       <a
//                         className="badge text-bg-info text-decoration-none rounded-pill animate-target text-nowrap p-1"
//                         href="#deliveryDateTime"
//                         data-bs-toggle="offcanvas"
//                         aria-controls="deliveryDateTime"
//                       >
//                         {deliveryDetails.schedule ? "Change" : "Select"}
//                       </a>
//                     </div>
//                   </div>
//                 </>
//               )}

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

//                   {/* Pay on Delivery */}
//                   <div>
//                     <input
//                       type="radio"
//                       className="btn-check"
//                       name="payment-method"
//                       id="pay_on_delivery"
//                       checked={paymentMethod === 'pay_on_delivery'}
//                       onChange={() => handlePaymentMethodChange('pay_on_delivery')}
//                     />
//                     <label
//                       className={`btn btn-outline-secondary rounded-pill d-flex align-items-center ${
//                         paymentMethod === 'pay_on_delivery' ? 'active' : ''
//                       }`}
//                       htmlFor="pay_on_delivery"
//                     >
//                       <i className="ci-cash fs-base me-2" />
//                       Pay on Delivery
//                     </label>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Order summary (sticky sidebar) */}
//             {!basketLoading && basket && (
//               <OrderSummary
//                 context="checkout"
//                 itemCount={basket?.itemCount || 0}
//                 subtotal={basket?.subtotal || 0}
//                 total={basket?.estimatedTotal || basket?.subtotal}
//                 discount={basket?.savings || 0}
//                 deliveryFee={0}
//                 qualifiesForFreeShipping={basket.subtotal >= (basket.freeShippingThreshold || 0)}
//                 isLoading={isProcessing}
//                 onConfirmOrder={handleOrderSubmit}
//                 canPlaceOrder={canPlaceOrder()}
//                 buttonText={isProcessing ? 'Processing...' : 'Confirm Order'}
//               />
//             )}

//           </div>
//         </section>
//       </main>
//     </>
//   );
// };

// export default Checkout;


// V8 - Enhanced with unified order/payment processing - FIXED PICKUP HANDLING & COMPONENT SYNC

// import React, { useState, useEffect, useCallback } from 'react';
// import { Link, NavLink, useNavigate } from 'react-router-dom';
// import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
// import DeliveryDateOffCanvas from './DeliveryDateOffCanvas';
// import DeliveryOptionsOffCanvas from './DeliveryOptionsOffCanvas';
// import { useOrder } from '../../../hooks/useOrder';
// import { usePayment } from '../../../hooks/usePayment';
// import { useBasket } from '../../../hooks/useBasket';
// import { NotificationService } from '../../../services/local/NotificationService';
// import Breadcrumb from '../../../components/shared/Breadcrumb';
// import OrderSummary from '../shared/OrderSummary';
// import { paymentConfig } from '../../../utils/env';
// import { useAuth } from '../../../context/AuthContext';
// import { AxiosAddressesService } from '../../../services/net/AxiosAddressesService';

// const Checkout = () => {
//   const navigate = useNavigate();
//   const { basket, loading: basketLoading } = useBasket();
//   const { user } = useAuth();
//   const [paymentMethod, setPaymentMethod] = useState('paypal');
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [addresses, setAddresses] = useState<any[]>([]);
//   const [stores, setStores] = useState<any[]>([]);
//   const [selectedStore, setSelectedStore] = useState<any>(null);
//   const [addressesLoading, setAddressesLoading] = useState(true);

//   // FIXED: Simplified delivery details state
//   const [deliveryDetails, setDeliveryDetails] = useState<{
//     address: any | null;
//     schedule: { date: string; timeSlot: string } | null;
//     option: 'delivery' | 'pickup';
//   }>({
//     address: null,
//     schedule: null,
//     option: 'delivery',
//   });

//   const { processPayment } = usePayment();
//   const { createOrder } = useOrder();

//   // FIXED: Removed deliveryDetails.option dependency from fetchAddresses
//   const fetchAddresses = useCallback(async () => {
//     try {
//       setAddressesLoading(true);
//       const response = await AxiosAddressesService.fetchAll({
//         include_city: true,
//         include_state: true,
//         include_country: true,
//         include_store: true  // Include store addresses
//       });
//       const allAddresses = response.data.addresses || [];
//       setAddresses(allAddresses);
      
//       // Separate user addresses and store addresses
//       const userAddresses = allAddresses.filter((addr: any) => !addr.is_store);
//       const storeAddresses = allAddresses.filter((addr: any) => addr.is_store);
      
//       // Set primary address as default only if no address is currently selected
//       const primaryAddress = userAddresses.find((addr: any) => addr.is_primary);
//       const defaultAddress = primaryAddress || userAddresses[0] || null;
      
//       if (defaultAddress && !deliveryDetails.address) {
//         setDeliveryDetails(prev => ({
//           ...prev,
//           address: defaultAddress,
//         }));
//       }
      
//       // Set first store as default pickup option
//       if (storeAddresses.length > 0 && !selectedStore) {
//         const firstStore = storeAddresses[0];
//         setSelectedStore(firstStore.stores || firstStore);
//       }
//     } catch (err: any) {
//       const message = err.response?.data?.message || 'Failed to load addresses';
//       console.error('Address fetch error:', message);
//     } finally {
//       setAddressesLoading(false);
//     }
//   }, []); // Removed dependency

//   // Set default address and schedule on component mount
//   useEffect(() => {
//     fetchAddresses();

//     // Set default schedule to next day
//     const tomorrow = new Date();
//     tomorrow.setDate(tomorrow.getDate() + 1);
//     const defaultSchedule = {
//       date: tomorrow.toISOString().split('T')[0],
//       timeSlot: '10:00 - 12:00'
//     };
    
//     setDeliveryDetails(prev => ({
//       ...prev,
//       schedule: defaultSchedule,
//     }));
    
//   }, [fetchAddresses]);

//   // Handle payment method change
//   const handlePaymentMethodChange = (method: string) => {
//     setPaymentMethod(method);
//   };

//   // FIXED: Completely rewritten delivery option handler
//   const handleDeliveryOptionSelect = (details: {
//     address: any;
//     store?: any;
//     option: 'delivery' | 'pickup';
//     type?: 'user' | 'store';
//   }) => {
//     console.log('Delivery option selected:', details);
    
//     // FIXED: Update state in a single setState call to avoid timing issues
//     if (details.option === 'pickup') {
//       console.log('Setting pickup option with store:', details.store);
      
//       // For pickup: set the store and use store's address, clear user address
//       setSelectedStore(details.store);
//       setDeliveryDetails(prev => ({
//         ...prev,
//         address: details.address, // This is the store address
//         option: 'pickup',
//         // Keep schedule for pickup if needed, or clear it
//         schedule: null, // Clear schedule for pickup
//       }));
      
//     } else {
//       console.log('Setting delivery option with address:', details.address);
      
//       // For delivery: clear store and use user's selected address
//       setSelectedStore(null);
//       setDeliveryDetails(prev => ({
//         ...prev,
//         address: details.address,
//         option: 'delivery',
//         // Restore schedule for delivery
//         schedule: prev.schedule || {
//           date: new Date(Date.now() + 86400000).toISOString().split('T')[0], // tomorrow
//           timeSlot: '10:00 - 12:00'
//         },
//       }));
//     }
//   };

//   // Handle schedule selection
//   const handleScheduleSelect = (date: string, timeSlot: string) => {
//     setDeliveryDetails(prev => ({
//       ...prev,
//       schedule: { date, timeSlot },
//     }));
//   };

//   // FIXED: Enhanced validation with better logging
//   const validateOrderData = () => {
//     console.log('Validating order data:');
//     console.log('- Delivery option:', deliveryDetails.option);
//     console.log('- Selected store:', selectedStore);
//     console.log('- Delivery address:', deliveryDetails.address);
//     console.log('- Schedule:', deliveryDetails.schedule);
//     console.log('- Basket:', basket);

//     // Check if we have either an address or a store depending on option
//     if (deliveryDetails.option === 'pickup') {
//       if (!selectedStore || !deliveryDetails.address) {
//         NotificationService.showDialog('Please select a pickup store');
//         return false;
//       }
//     } else {
//       if (!deliveryDetails.address) {
//         NotificationService.showDialog('Please select a delivery address');
//         return false;
//       }
//       if (!deliveryDetails.schedule) {
//         NotificationService.showDialog('Please select a delivery schedule');
//         return false;
//       }
//     }

//     if (!basket || basket.itemCount === 0) {
//       NotificationService.showDialog('Your basket is empty');
//       return false;
//     }

//     return true;
//   };

//   // Unified order processing function
//   const handleOrderSubmit = async () => {
//     if (!validateOrderData()) {
//       return;
//     }

//     setIsProcessing(true);
    
//     try {
//       console.log('Processing order with:');
//       console.log('- Selected store:', selectedStore);
//       console.log('- Delivery details:', deliveryDetails);
      
//       // FIXED: Improved order data preparation
//       const orderData = {
//         delivery_option: deliveryDetails.option,
//         // For delivery: use user's address_id, for pickup: use store's address_id
//         address_id: deliveryDetails.address?.id,
//         // For pickup: always include store_id
//         store_id: deliveryDetails.option === 'pickup' ? selectedStore?.id : null,
//         // Schedule is only required for delivery
//         delivery_date: deliveryDetails.option === 'delivery' ? deliveryDetails.schedule?.date : null,
//         delivery_time_slot: deliveryDetails.option === 'delivery' ? deliveryDetails.schedule?.timeSlot : null,
//         payment_method: paymentMethod,
//         basket_items: basket.items.map(item => ({
//           product_id: item.product_id,
//           quantity: item.quantity
//         })),
//         customer_email: user?.email || 'customer@salesnet.co',
//         customer_phone: user?.phone || 
//           (deliveryDetails.option === 'pickup' ? selectedStore?.phone : deliveryDetails.address?.phone_number)
//       };

//       console.log('Order data being sent:', orderData);

//       // Create order first
//       const order = await createOrder(orderData);

//       // Process payment based on selected method
//       if (paymentMethod === 'pay_on_delivery') {
//         navigate('/checkout/success', { 
//           state: { 
//             order: { ...order, paymentStatus: 'pending' },
//             message: 'Order placed successfully! Pay on delivery.' 
//           } 
//         });
//       } else {
//         await processPaymentMethod(order);
//       }
//     } catch (error) {
//       console.error('Order processing error:', error);
//       NotificationService.showDialog('Failed to process order. Please try again.');
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   // Process payment based on selected method
//   const processPaymentMethod = async (order: any) => {
//     const amount = order.total;
//     const customerEmail = order.customerEmail;
//     const customerPhone = deliveryDetails.option === 'pickup' ? selectedStore?.phone : deliveryDetails.address?.phone_number;

//     switch (paymentMethod) {
//       case 'paypal':
//         const paypalResult = await processPayment({
//           orderId: order.id,
//           amount,
//           paymentMethod: 'paypal',
//           customerEmail
//         });
        
//         if (paypalResult.success) {
//           navigate('/checkout/success', { state: { order } });
//         } else {
//           throw new Error(paypalResult.message || 'PayPal payment failed');
//         }
//         break;

//       case 'paystack':
//         const handler = (window as any).PaystackPop.setup({
//           key: paymentConfig.paystack.publicKey,
//           email: customerEmail,
//           amount: amount * 100,
//           currency: 'NGN',
//           reference: `order_${order.id}_${Date.now()}`,
//           onClose: () => {
//             setIsProcessing(false);
//             NotificationService.showDialog('Payment cancelled', 'info');
//           },
//           callback: async (response: any) => {
//             try {
//               const paymentResult = await processPayment({
//                 orderId: order.id,
//                 amount,
//                 paymentMethod: 'paystack',
//                 customerEmail,
//                 paymentReference: response.reference
//               });

//               if (paymentResult.success) {
//                 navigate('/checkout/success', { state: { order } });
//               } else {
//                 throw new Error(paymentResult.message || 'Payment verification failed');
//               }
//             } catch (error) {
//               console.error('Payment processing error:', error);
//               NotificationService.showDialog('Payment verification failed');
//             }
//           }
//         });
//         handler.openIframe();
//         break;

//       case 'flutterwave':
//         (window as any).FlutterwaveCheckout({
//           public_key: paymentConfig.flutterwave.publicKey,
//           tx_ref: `order_${order.id}_${Date.now()}`,
//           amount,
//           currency: 'NGN',
//           payment_options: 'card,mobilemoney,ussd',
//           customer: {
//             email: customerEmail,
//             phone_number: customerPhone,
//             name: user?.full_name || 'Customer'
//           },
//           customizations: {
//             title: 'Order Payment',
//             description: `Payment for order #${order.id}`,
//             logo: '/assets/img/logo.png'
//           },
//           callback: async (response: any) => {
//             try {
//               const paymentResult = await processPayment({
//                 orderId: order.id,
//                 amount,
//                 paymentMethod: 'flutterwave',
//                 customerEmail,
//                 paymentReference: response.transaction_id
//               });

//               if (paymentResult.success) {
//                 navigate('/checkout/success', { state: { order } });
//               } else {
//                 throw new Error(paymentResult.message || 'Payment verification failed');
//               }
//             } catch (error) {
//               console.error('Payment processing error:', error);
//               NotificationService.showDialog('Payment verification failed');
//             }
//           },
//           onclose: () => {
//             setIsProcessing(false);
//             NotificationService.showDialog('Payment cancelled', 'info');
//           },
//         });
//         break;

//       case 'opay':
//         (window as any).OPayCheckout({
//           merchantId: paymentConfig.opay.merchantId,
//           reference: `order_${order.id}_${Date.now()}`,
//           amount,
//           currency: 'NGN',
//           callbackUrl: `${window.location.origin}/checkout/callback`,
//           customerEmail,
//           customerPhone,
//           customerName: user?.full_name || 'Customer',
//           onSuccess: async (response: any) => {
//             try {
//               const paymentResult = await processPayment({
//                 orderId: order.id,
//                 amount,
//                 paymentMethod: 'opay',
//                 customerEmail,
//                 paymentReference: response.reference
//               });

//               if (paymentResult.success) {
//                 navigate('/checkout/success', { state: { order } });
//               } else {
//                 throw new Error(paymentResult.message || 'Payment verification failed');
//               }
//             } catch (error) {
//               console.error('Payment processing error:', error);
//               NotificationService.showDialog('Payment verification failed');
//             }
//           },
//           onClose: () => {
//             setIsProcessing(false);
//             NotificationService.showDialog('Payment cancelled', 'info');
//           },
//         });
//         break;

//       default:
//         throw new Error('Invalid payment method selected');
//     }
//   };

//   // FIXED: Improved address display logic with better fallbacks
//   const formatDisplayAddress = (address: any) => {
//     if (deliveryDetails.option === 'pickup' && selectedStore) {
//       // For pickup, show store name and address
//       const storeAddress = deliveryDetails.address || address;
//       const storeName = selectedStore.name || 'Store';
//       const storeStreet = storeAddress?.street_address || 'Address not available';
//       const storeCity = storeAddress?.city?.name || storeAddress?.city || 'City not available';
//       return `${storeName}, ${storeStreet}, ${storeCity}`;
//     }
    
//     if (!address) return 'No address selected';
    
//     // For delivery, show user address
//     return `${address.street_address || ''}, ${address.city?.name || address.city || ''}${
//       address.state ? `, ${address.state.name}` : ''
//     }${address.zip_code ? `, ${address.zip_code}` : ''}${
//       address?.state?.country ? `, ${address?.state?.country.name}` : ''
//     }`;
//   };

//   // Format schedule for display
//   const formatDisplaySchedule = (schedule: { date: string; timeSlot: string } | null) => {
//     if (!schedule) return 'No schedule selected';
    
//     const dateObj = new Date(schedule.date);
//     const formattedDate = dateObj.toLocaleDateString('en-US', {
//       weekday: 'long',
//       month: 'short',
//       day: 'numeric',
//     });
    
//     return `${formattedDate} | ${schedule.timeSlot}`;
//   };

//   // FIXED: Enhanced validation logic
//   const canPlaceOrder = () => {
//     const hasValidSetup = deliveryDetails.option === 'delivery' 
//       ? (!!deliveryDetails.address && !!deliveryDetails.schedule)
//       : (!!selectedStore && !!deliveryDetails.address);
    
//     const hasItems = basket && basket.itemCount > 0;
//     const notProcessing = !isProcessing;
//     const addressesLoaded = !addressesLoading;
    
//     console.log('Can place order check:', {
//       hasValidSetup,
//       hasItems,
//       notProcessing,
//       addressesLoaded,
//       deliveryOption: deliveryDetails.option,
//       selectedStore: !!selectedStore,
//       address: !!deliveryDetails.address,
//       schedule: !!deliveryDetails.schedule
//     });
    
//     return hasValidSetup && hasItems && notProcessing && addressesLoaded;
//   };

//   return (
//     <>
//       <DeliveryOptionsOffCanvas 
//         onOptionSelect={handleDeliveryOptionSelect}
//         currentOption={deliveryDetails.option}
//         selectedAddress={deliveryDetails.address}
//         selectedStore={selectedStore}
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

//               {/* FIXED: Better conditional rendering */}
//               <h2 className="h5 mb-4">
//                 {deliveryDetails.option === 'delivery' ? 'Delivery Address' : 'Pickup Location'}
//               </h2>
//               <div className="d-flex align-items-center justify-content-between mb-4">
//                 <div className="d-flex flex-column fs-sm text-dark-emphasis me-3">
//                   <div className="d-flex align-items-center">
//                     <i className="ci-map-pin fs-base text-primary me-2" />
//                     <span>{formatDisplayAddress(deliveryDetails.address)}</span>
//                   </div>
//                   {/* FIXED: Show phone number from appropriate source */}
//                   {((deliveryDetails.option === 'pickup' && selectedStore?.phone) || 
//                     (deliveryDetails.option === 'delivery' && deliveryDetails.address?.phone_number)) && (
//                     <div className="text-muted ms-4 mt-1">
//                       Phone: {deliveryDetails.option === 'pickup' 
//                         ? selectedStore?.phone 
//                         : deliveryDetails.address?.phone_number}
//                     </div>
//                   )}
//                   {/* FIXED: Debug info - remove in production */}
//                   <div className="text-muted ms-4 mt-1 small">
//                     Current option: <strong className=" badge text-bg-success rounded-pill">{deliveryDetails.option}</strong>
//                     {selectedStore && ` | Store: ${selectedStore.name}`}
//                   </div>
//                 </div>
//                 <div className="nav animate-scale">
//                   <a
//                     className="badge text-bg-info text-decoration-none rounded-pill animate-target text-nowrap p-1"
//                     href="#deliveryOptions"
//                     data-bs-toggle="offcanvas"
//                     aria-controls="deliveryOptions"
//                   >
//                     {(deliveryDetails.address || selectedStore) ? "Change" : "Select"}
//                   </a>
//                 </div>
//               </div>

//               {/* FIXED: Only show delivery schedule for delivery option */}
//               {deliveryDetails.option === 'delivery' && (
//                 <>
//                   <h2 className="h5 mb-4">Delivery Schedule</h2>
//                   <div className="d-flex align-items-center justify-content-between mb-4">
//                     <div className="align-items-center fs-sm">
//                       <i className="ci-clock fs-base text-primary me-2" />
//                       {formatDisplaySchedule(deliveryDetails.schedule)}
//                     </div>
//                     <div className="nav animate-scale">
//                       <a
//                         className="badge text-bg-info text-decoration-none rounded-pill animate-target text-nowrap p-1"
//                         href="#deliveryDateTime"
//                         data-bs-toggle="offcanvas"
//                         aria-controls="deliveryDateTime"
//                       >
//                         {deliveryDetails.schedule ? "Change" : "Select"}
//                       </a>
//                     </div>
//                   </div>
//                 </>
//               )}

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

//                   {/* Pay on Delivery */}
//                   <div>
//                     <input
//                       type="radio"
//                       className="btn-check"
//                       name="payment-method"
//                       id="pay_on_delivery"
//                       checked={paymentMethod === 'pay_on_delivery'}
//                       onChange={() => handlePaymentMethodChange('pay_on_delivery')}
//                     />
//                     <label
//                       className={`btn btn-outline-secondary rounded-pill d-flex align-items-center ${
//                         paymentMethod === 'pay_on_delivery' ? 'active' : ''
//                       }`}
//                       htmlFor="pay_on_delivery"
//                     >
//                       <i className="ci-cash fs-base me-2" />
//                       Pay on Delivery
//                     </label>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Order summary (sticky sidebar) */}
//             {!basketLoading && basket && (
//               <OrderSummary
//                 context="checkout"
//                 itemCount={basket?.itemCount || 0}
//                 subtotal={basket?.subtotal || 0}
//                 total={basket?.estimatedTotal || basket?.subtotal}
//                 discount={basket?.savings || 0}
//                 deliveryFee={0}
//                 qualifiesForFreeShipping={basket.subtotal >= (basket.freeShippingThreshold || 0)}
//                 isLoading={isProcessing}
//                 onConfirmOrder={handleOrderSubmit}
//                 canPlaceOrder={canPlaceOrder()}
//                 buttonText={isProcessing ? 'Processing...' : 'Confirm Order'}
//               />
//             )}

//           </div>
//         </section>
//       </main>
//     </>
//   );
// };

// export default Checkout;

// // v9
// import React, { useState, useEffect, useCallback } from 'react';
// import { Link, NavLink, useNavigate } from 'react-router-dom';
// import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
// import DeliveryDateOffCanvas from './DeliveryDateOffCanvas';
// import DeliveryOptionsOffCanvas from './DeliveryOptionsOffCanvas';
// import { useOrder } from '../../../hooks/useOrder';
// import { usePayment } from '../../../hooks/usePayment';
// import { useBasket } from '../../../hooks/useBasket';
// import { NotificationService } from '../../../services/local/NotificationService';
// import Breadcrumb from '../../../components/shared/Breadcrumb';
// import OrderSummary from '../shared/OrderSummary';
// import { paymentConfig } from '../../../utils/env';
// import { useAuth } from '../../../context/AuthContext';
// import { AxiosAddressesService } from '../../../services/net/AxiosAddressesService';

// const Checkout = () => {
//   const navigate = useNavigate();
//   const { basket, loading: basketLoading } = useBasket();
//   const { user } = useAuth();
//   const [paymentMethod, setPaymentMethod] = useState('paypal');
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [addresses, setAddresses] = useState<any[]>([]);
//   const [stores, setStores] = useState<any[]>([]);
//   const [selectedStore, setSelectedStore] = useState<any>(null);
//   const [addressesLoading, setAddressesLoading] = useState(true);

//   // UPDATED: Always include schedule for both delivery and pickup
//   const [deliveryDetails, setDeliveryDetails] = useState<{
//     address: any | null;
//     schedule: { date: string; timeSlot: string } | null;
//     option: 'delivery' | 'pickup';
//   }>({
//     address: null,
//     schedule: null,
//     option: 'delivery',
//   });

//   const { processPayment } = usePayment();
//   const { createOrder } = useOrder();

//   const fetchAddresses = useCallback(async () => {
//     try {
//       setAddressesLoading(true);
//       const response = await AxiosAddressesService.fetchAll({
//         include_city: true,
//         include_state: true,
//         include_country: true,
//         include_store: true
//       });
//       const allAddresses = response.data.addresses || [];
//       setAddresses(allAddresses);
      
//       const userAddresses = allAddresses.filter((addr: any) => !addr.is_store);
//       const storeAddresses = allAddresses.filter((addr: any) => addr.is_store);
      
//       const primaryAddress = userAddresses.find((addr: any) => addr.is_primary);
//       const defaultAddress = primaryAddress || userAddresses[0] || null;
      
//       if (defaultAddress && !deliveryDetails.address) {
//         setDeliveryDetails(prev => ({
//           ...prev,
//           address: defaultAddress,
//         }));
//       }
      
//       if (storeAddresses.length > 0 && !selectedStore) {
//         const firstStore = storeAddresses[0];
//         setSelectedStore(firstStore.stores || firstStore);
//       }
//     } catch (err: any) {
//       const message = err.response?.data?.message || 'Failed to load addresses';
//       console.error('Address fetch error:', message);
//     } finally {
//       setAddressesLoading(false);
//     }
//   }, []);

//   // Set default address and schedule on component mount
//   useEffect(() => {
//     fetchAddresses();

//     // UPDATED: Always set default schedule regardless of delivery option
//     const tomorrow = new Date();
//     tomorrow.setDate(tomorrow.getDate() + 1);
//     const defaultSchedule = {
//       date: tomorrow.toISOString().split('T')[0],
//       timeSlot: '10:00 - 12:00'
//     };
    
//     setDeliveryDetails(prev => ({
//       ...prev,
//       schedule: defaultSchedule,
//     }));
    
//   }, [fetchAddresses]);

//   const handlePaymentMethodChange = (method: string) => {
//     setPaymentMethod(method);
//   };

//   // UPDATED: Modified to maintain schedule for both options
//   const handleDeliveryOptionSelect = (details: {
//     address: any;
//     store?: any;
//     option: 'delivery' | 'pickup';
//     type?: 'user' | 'store';
//   }) => {
//     console.log('Delivery option selected:', details);
    
//     if (details.option === 'pickup') {
//       console.log('Setting pickup option with store:', details.store);
      
//       setSelectedStore(details.store);
//       setDeliveryDetails(prev => ({
//         ...prev,
//         address: details.address,
//         option: 'pickup',
//         // UPDATED: Keep schedule for pickup as well
//         schedule: prev.schedule || {
//           date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
//           timeSlot: '10:00 - 12:00'
//         },
//       }));
      
//     } else {
//       console.log('Setting delivery option with address:', details.address);
      
//       setSelectedStore(null);
//       setDeliveryDetails(prev => ({
//         ...prev,
//         address: details.address,
//         option: 'delivery',
//         // Keep existing schedule
//         schedule: prev.schedule || {
//           date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
//           timeSlot: '10:00 - 12:00'
//         },
//       }));
//     }
//   };

//   const handleScheduleSelect = (date: string, timeSlot: string) => {
//     setDeliveryDetails(prev => ({
//       ...prev,
//       schedule: { date, timeSlot },
//     }));
//   };

//   // UPDATED: Modified validation to require schedule for both options
//   const validateOrderData = () => {
//     console.log('Validating order data:');
//     console.log('- Delivery option:', deliveryDetails.option);
//     console.log('- Selected store:', selectedStore);
//     console.log('- Delivery address:', deliveryDetails.address);
//     console.log('- Schedule:', deliveryDetails.schedule);
//     console.log('- Basket:', basket);

//     // UPDATED: Always require schedule
//     if (!deliveryDetails.schedule) {
//       NotificationService.showDialog(`Please select a ${deliveryDetails.option} schedule`);
//       return false;
//     }

//     if (deliveryDetails.option === 'pickup') {
//       if (!selectedStore || !deliveryDetails.address) {
//         NotificationService.showDialog('Please select a pickup store');
//         return false;
//       }
//     } else {
//       if (!deliveryDetails.address) {
//         NotificationService.showDialog('Please select a delivery address');
//         return false;
//       }
//     }

//     if (!basket || basket.itemCount === 0) {
//       NotificationService.showDialog('Your basket is empty');
//       return false;
//     }

//     return true;
//   };

//   const handleOrderSubmit = async () => {
//     if (!validateOrderData()) {
//       return;
//     }

//     setIsProcessing(true);
    
//     try {
//       console.log('Processing order with:');
//       console.log('- Selected store:', selectedStore);
//       console.log('- Delivery details:', deliveryDetails);
      
//       // UPDATED: Always include schedule data
//       const orderData = {
//         delivery_option: deliveryDetails.option,
//         address_id: deliveryDetails.address?.id,
//         store_id: deliveryDetails.option === 'pickup' ? selectedStore?.id : null,
//         // UPDATED: Always include delivery date and time slot
//         delivery_date: deliveryDetails.schedule?.date,
//         delivery_time_slot: deliveryDetails.schedule?.timeSlot,
//         payment_method: paymentMethod,
//         basket_items: basket.items.map(item => ({
//           product_id: item.product_id,
//           quantity: item.quantity
//         })),
//         customer_email: user?.email || 'customer@salesnet.co',
//         customer_phone: user?.phone || 
//           (deliveryDetails.option === 'pickup' ? selectedStore?.phone : deliveryDetails.address?.phone_number)
//       };

//       console.log('Order data being sent:', orderData);

//       const order = await createOrder(orderData);
//       console.log(`order: ${JSON.stringify(order)}`)

//       if (paymentMethod === 'pay_on_delivery') {
//         navigate('/checkout/success', { 
//           state: { 
//             order: { ...order, paymentStatus: 'pending' },
//             message: 'Order placed successfully! Pay on delivery.' 
//           } 
//         });
//       } else {
//         await processPaymentMethod(order);
//       }
//     } catch (error) {
//       console.error('Order processing error:', error);
//       NotificationService.showDialog('Failed to process order. Please try again.');
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   const processPaymentMethod = async (order: any) => {
//     const amount = order.total_amount;
//     const customerEmail = order.email;
//     const customerPhone = order.phone || deliveryDetails.option === 'pickup' ? selectedStore?.phone : deliveryDetails.address?.phone_number;

//     switch (paymentMethod) {
//       case 'paypal':
//         const paypalResult = await processPayment({
//           orderId: order.id,
//           amount,
//           paymentMethod: 'paypal',
//           customerEmail,
//           paymentReference: order.tracking_number
//         });
        
//         if (paypalResult.success) {
//           navigate('/checkout/success', { state: { order } });
//         } else {
//           throw new Error(paypalResult.message || 'PayPal payment failed');
//         }
//         break;

//       case 'paystack':
//         const handler = (window as any).PaystackPop.setup({
//           key: paymentConfig.paystack.publicKey,
//           email: customerEmail,
//           amount: amount * 100,
//           currency: 'NGN',
//           reference: `order_${order.id}_${Date.now()}`,
//           onClose: () => {
//             setIsProcessing(false);
//             NotificationService.showDialog('Payment cancelled', 'info');
//           },
//           callback: async (response: any) => {
//             try {
//               const paymentResult = await processPayment({
//                 orderId: order.id,
//                 amount,
//                 paymentMethod: 'paystack',
//                 customerEmail,
//                 paymentReference: response.reference
//               });

//               if (paymentResult.success) {
//                 navigate('/checkout/success', { state: { order } });
//               } else {
//                 throw new Error(paymentResult.message || 'Payment verification failed');
//               }
//             } catch (error) {
//               console.error('Payment processing error:', error);
//               NotificationService.showDialog('Payment verification failed');
//             }
//           }
//         });
//         handler.openIframe();
//         break;

//       case 'flutterwave':
//         (window as any).FlutterwaveCheckout({
//           public_key: paymentConfig.flutterwave.publicKey,
//           tx_ref: `order_${order.id}_${Date.now()}`,
//           amount,
//           currency: 'NGN',
//           payment_options: 'card,mobilemoney,ussd',
//           customer: {
//             email: customerEmail,
//             phone_number: customerPhone,
//             name: user?.full_name || 'Customer'
//           },
//           customizations: {
//             title: 'Order Payment',
//             description: `Payment for order #${order.id}`,
//             logo: '/assets/img/logo.png'
//           },
//           callback: async (response: any) => {
//             try {
//               const paymentResult = await processPayment({
//                 orderId: order.id,
//                 amount,
//                 paymentMethod: 'flutterwave',
//                 customerEmail,
//                 paymentReference: response.transaction_id
//               });

//               if (paymentResult.success) {
//                 navigate('/checkout/success', { state: { order } });
//               } else {
//                 throw new Error(paymentResult.message || 'Payment verification failed');
//               }
//             } catch (error) {
//               console.error('Payment processing error:', error);
//               NotificationService.showDialog('Payment verification failed');
//             }
//           },
//           onclose: () => {
//             setIsProcessing(false);
//             NotificationService.showDialog('Payment cancelled', 'info');
//           },
//         });
//         break;

//       case 'opay':
//         (window as any).OPayCheckout({
//           merchantId: paymentConfig.opay.merchantId,
//           reference: `order_${order.id}_${Date.now()}`,
//           amount,
//           currency: 'NGN',
//           callbackUrl: `${window.location.origin}/checkout/callback`,
//           customerEmail,
//           customerPhone,
//           customerName: user?.full_name || 'Customer',
//           onSuccess: async (response: any) => {
//             try {
//               const paymentResult = await processPayment({
//                 orderId: order.id,
//                 amount,
//                 paymentMethod: 'opay',
//                 customerEmail,
//                 paymentReference: response.reference
//               });

//               if (paymentResult.success) {
//                 navigate('/checkout/success', { state: { order } });
//               } else {
//                 throw new Error(paymentResult.message || 'Payment verification failed');
//               }
//             } catch (error) {
//               console.error('Payment processing error:', error);
//               NotificationService.showDialog('Payment verification failed');
//             }
//           },
//           onClose: () => {
//             setIsProcessing(false);
//             NotificationService.showDialog('Payment cancelled', 'info');
//           },
//         });
//         break;

//       default:
//         throw new Error('Invalid payment method selected');
//     }
//   };

//   const formatDisplayAddress = (address: any) => {
//     if (deliveryDetails.option === 'pickup' && selectedStore) {
//       const storeAddress = deliveryDetails.address || address;
//       const storeName = selectedStore.name || 'Store';
//       const storeStreet = storeAddress?.street_address || 'Address not available';
//       const storeCity = storeAddress?.city?.name || storeAddress?.city || 'City not available';
//       return `${storeName}, ${storeStreet}, ${storeCity}`;
//     }
    
//     if (!address) return 'No address selected';
    
//     return `${address.street_address || ''}, ${address.city?.name || address.city || ''}${
//       address.state ? `, ${address.state.name}` : ''
//     }${address.zip_code ? `, ${address.zip_code}` : ''}${
//       address?.state?.country ? `, ${address?.state?.country.name}` : ''
//     }`;
//   };

//   const formatDisplaySchedule = (schedule: { date: string; timeSlot: string } | null) => {
//     if (!schedule) return 'No schedule selected';
    
//     const dateObj = new Date(schedule.date);
//     const formattedDate = dateObj.toLocaleDateString('en-US', {
//       weekday: 'long',
//       month: 'short',
//       day: 'numeric',
//     });
    
//     return `${formattedDate} | ${schedule.timeSlot}`;
//   };

//   // UPDATED: Modified validation to always require schedule
//   const canPlaceOrder = () => {
//     const hasValidSetup = deliveryDetails.option === 'delivery' 
//       ? (!!deliveryDetails.address && !!deliveryDetails.schedule)
//       : (!!selectedStore && !!deliveryDetails.address && !!deliveryDetails.schedule); // Added schedule requirement for pickup
    
//     const hasItems = basket && basket.itemCount > 0;
//     const notProcessing = !isProcessing;
//     const addressesLoaded = !addressesLoading;
    
//     console.log('Can place order check:', {
//       hasValidSetup,
//       hasItems,
//       notProcessing,
//       addressesLoaded,
//       deliveryOption: deliveryDetails.option,
//       selectedStore: !!selectedStore,
//       address: !!deliveryDetails.address,
//       schedule: !!deliveryDetails.schedule
//     });
    
//     return hasValidSetup && hasItems && notProcessing && addressesLoaded;
//   };

//   return (
//     <>
//       <DeliveryOptionsOffCanvas 
//         onOptionSelect={handleDeliveryOptionSelect}
//         currentOption={deliveryDetails.option}
//         selectedAddress={deliveryDetails.address}
//         selectedStore={selectedStore}
//       />
      
//       <DeliveryDateOffCanvas 
//         onSelect={handleScheduleSelect} 
//       />

//       <main className="content-wrapper">
//         <Breadcrumb 
//           items={[
//             { label: 'Home', path: '/' },
//             { label: 'User', path: '/user/personal' },
//             { label: 'Basket', path: '/user/basket' },
//             { label: 'Checkout', path: `/user/checkout` }
//           ]} 
//         />
                
//         <section className="container pb-5 mb-2 mb-md-3 mb-lg-4 mb-xl-5">
//           <h1 className="h3 mb-4">Checkout</h1>
//           <div className="row">
//             <div className="col-lg-8 col-xl-7 mb-5 mb-lg-0">

//               <h2 className="h5 mb-4">
//                 {deliveryDetails.option === 'delivery' ? 'Delivery Address' : 'Pickup Location'}
//               </h2>
//               <div className="d-flex align-items-center justify-content-between mb-4">
//                 <div className="d-flex flex-column fs-sm text-dark-emphasis me-3">
//                   <div className="d-flex align-items-center">
//                     <i className="ci-map-pin fs-base text-primary me-2" />
//                     <span>{formatDisplayAddress(deliveryDetails.address)}</span>
//                   </div>
//                   {((deliveryDetails.option === 'pickup' && selectedStore?.phone) || 
//                     (deliveryDetails.option === 'delivery' && deliveryDetails.address?.phone_number)) && (
//                     <div className="text-muted ms-4 mt-1">
//                       Phone: {deliveryDetails.option === 'pickup' 
//                         ? selectedStore?.phone 
//                         : deliveryDetails.address?.phone_number}
//                     </div>
//                   )}
//                   <div className="text-muted ms-4 mt-1 small">
//                     Current option: <strong className="badge text-bg-success rounded-pill">{deliveryDetails.option}</strong>
//                     {selectedStore && ` | Store: ${selectedStore.name}`}
//                   </div>
//                 </div>
//                 <div className="nav animate-scale">
//                   <a
//                     className="badge text-bg-info text-decoration-none rounded-pill animate-target text-nowrap p-1"
//                     href="#deliveryOptions"
//                     data-bs-toggle="offcanvas"
//                     aria-controls="deliveryOptions"
//                   >
//                     {(deliveryDetails.address || selectedStore) ? "Change" : "Select"}
//                   </a>
//                 </div>
//               </div>

//               {/* UPDATED: Always show schedule section for both delivery and pickup */}
//               <h2 className="h5 mb-4">
//                 {deliveryDetails.option === 'delivery' ? 'Delivery Schedule' : 'Pickup Schedule'}
//               </h2>
//               <div className="d-flex align-items-center justify-content-between mb-4">
//                 <div className="align-items-center fs-sm">
//                   <i className="ci-clock fs-base text-primary me-2" />
//                   {formatDisplaySchedule(deliveryDetails.schedule)}
//                 </div>
//                 <div className="nav animate-scale">
//                   <a
//                     className="badge text-bg-info text-decoration-none rounded-pill animate-target text-nowrap p-1"
//                     href="#deliveryDateTime"
//                     data-bs-toggle="offcanvas"
//                     aria-controls="deliveryDateTime"
//                   >
//                     {deliveryDetails.schedule ? "Change" : "Select"}
//                   </a>
//                 </div>
//               </div>

//               {/* Payment method section */}
//               <h2 className="h5 mt-5 mb-4">Payment method</h2>
//               <div id="paymentMethod" role="list">
//                 <div className="d-flex flex-wrap gap-3 mb-4">

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
//                       <img src="/assets/img/payment-methods/paypal.png" width={20} alt="PayPal" className="me-2" />
//                       PayPal
//                     </label>
//                   </div>

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
//                       <img src="/assets/img/payment-methods/paystack.png" width={20} alt="Paystack" className="me-2" />
//                       Paystack
//                     </label>
//                   </div>

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
//                       <img src="/assets/img/payment-methods/flutterwave.png" width={20} alt="Flutterwave" className="me-2" />
//                       Flutterwave
//                     </label>
//                   </div>

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
//                       <img src="/assets/img/payment-methods/opay.png" width={20} alt="OPay" className="me-2" />
                      
//                       OPay
//                     </label>
//                   </div>

//                   <div>
//                     <input
//                       type="radio"
//                       className="btn-check"
//                       name="payment-method"
//                       id="pay_on_delivery"
//                       checked={paymentMethod === 'pay_on_delivery'}
//                       onChange={() => handlePaymentMethodChange('pay_on_delivery')}
//                     />
//                     <label
//                       className={`btn btn-outline-secondary rounded-pill d-flex align-items-center ${
//                         paymentMethod === 'pay_on_delivery' ? 'active' : ''
//                       }`}
//                       htmlFor="pay_on_delivery"
//                     >
//                       <img src="/assets/img/payment-methods/on_delivery.png" width={20} alt="OPay" className="me-2" />
//                       Pay on Delivery
//                     </label>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {!basketLoading && basket && (
//               <OrderSummary
//                 context="checkout"
//                 itemCount={basket?.itemCount || 0}
//                 subtotal={basket?.subtotal || 0}
//                 total={basket?.estimatedTotal || basket?.subtotal}
//                 discount={basket?.savings || 0}
//                 deliveryFee={0}
//                 qualifiesForFreeShipping={basket.subtotal >= (basket.freeShippingThreshold || 0)}
//                 isLoading={isProcessing}
//                 onConfirmOrder={handleOrderSubmit}
//                 canPlaceOrder={canPlaceOrder()}
//                 buttonText={isProcessing ? 'Processing...' : 'Confirm Order'}
//               />
//             )}

//           </div>
//         </section>
//       </main>
//     </>
//   );
// };

// export default Checkout;


// v10 - Fixed Payment Script Loading
// import React, { useState, useEffect, useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';
// import DeliveryDateOffCanvas from './DeliveryDateOffCanvas';
// import DeliveryOptionsOffCanvas from './DeliveryOptionsOffCanvas';
// import { useOrder } from '../../../hooks/useOrder';
// import { usePayment } from '../../../hooks/usePayment';
// import { useBasket } from '../../../hooks/useBasket';
// import { NotificationService } from '../../../services/local/NotificationService';
// import Breadcrumb from '../../../components/shared/Breadcrumb';
// import OrderSummary from '../shared/OrderSummary';
// import { paymentConfig } from '../../../utils/env';
// import { useAuth } from '../../../context/AuthContext';
// import { AxiosAddressesService } from '../../../services/net/AxiosAddressesService';
// import { usePaymentScripts } from '../../../hooks/usePaymentScripts';

// const Checkout = () => {
//   const navigate = useNavigate();
//   const { basket, loading: basketLoading } = useBasket();
//   const { user } = useAuth();
//   const [paymentMethod, setPaymentMethod] = useState('paypal');
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [addresses, setAddresses] = useState<any[]>([]);
//   const [stores, setStores] = useState<any[]>([]);
//   const [selectedStore, setSelectedStore] = useState<any>(null);
//   const [addressesLoading, setAddressesLoading] = useState(true);

//   const { processPayment } = usePayment();
//   const { createOrder } = useOrder();

//   // Payment script management
//   const {
//     scriptsLoaded,
//     ensureScriptLoaded,
//     isScriptLoading,
//     scriptLoadError
//   } = usePaymentScripts();

//   // UPDATED: Always include schedule for both delivery and pickup
//   const [deliveryDetails, setDeliveryDetails] = useState<{
//     address: any | null;
//     schedule: { date: string; timeSlot: string } | null;
//     option: 'delivery' | 'pickup';
//   }>({
//     address: null,
//     schedule: null,
//     option: 'delivery',
//   });

//   const fetchAddresses = useCallback(async () => {
//     try {
//       setAddressesLoading(true);
//       const response = await AxiosAddressesService.fetchAll({
//         include_city: true,
//         include_state: true,
//         include_country: true,
//         include_store: true
//       });
//       const allAddresses = response.data.addresses || [];
//       setAddresses(allAddresses);
      
//       const userAddresses = allAddresses.filter((addr: any) => !addr.is_store);
//       const storeAddresses = allAddresses.filter((addr: any) => addr.is_store);
      
//       const primaryAddress = userAddresses.find((addr: any) => addr.is_primary);
//       const defaultAddress = primaryAddress || userAddresses[0] || null;
      
//       if (defaultAddress && !deliveryDetails.address) {
//         setDeliveryDetails(prev => ({
//           ...prev,
//           address: defaultAddress,
//         }));
//       }
      
//       if (storeAddresses.length > 0 && !selectedStore) {
//         const firstStore = storeAddresses[0];
//         setSelectedStore(firstStore.stores || firstStore);
//       }
//     } catch (err: any) {
//       const message = err.response?.data?.message || 'Failed to load addresses';
//       console.error('Address fetch error:', message);
//     } finally {
//       setAddressesLoading(false);
//     }
//   }, []);

//   // Set default address and schedule on component mount
//   useEffect(() => {
//     fetchAddresses();

//     // UPDATED: Always set default schedule regardless of delivery option
//     const tomorrow = new Date();
//     tomorrow.setDate(tomorrow.getDate() + 1);
//     const defaultSchedule = {
//       date: tomorrow.toISOString().split('T')[0],
//       timeSlot: '10:00 - 12:00'
//     };
    
//     setDeliveryDetails(prev => ({
//       ...prev,
//       schedule: defaultSchedule,
//     }));
    
//   }, [fetchAddresses]);

//   const handlePaymentMethodChange = async (method: string) => {
//     setPaymentMethod(method);
    
//     // Preload payment scripts when method is selected
//     if (method === 'paystack') {
//       await ensureScriptLoaded('paystack');
//     } else if (method === 'flutterwave') {
//       await ensureScriptLoaded('flutterwave');
//     } else if (method === 'opay') {
//       await ensureScriptLoaded('opay');
//     }
//   };

//   // UPDATED: Modified to maintain schedule for both options
//   const handleDeliveryOptionSelect = (details: {
//     address: any;
//     store?: any;
//     option: 'delivery' | 'pickup';
//     type?: 'user' | 'store';
//   }) => {
//     if (details.option === 'pickup') {
//       setSelectedStore(details.store);
//       setDeliveryDetails(prev => ({
//         ...prev,
//         address: details.address,
//         option: 'pickup',
//         schedule: prev.schedule || {
//           date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
//           timeSlot: '10:00 - 12:00'
//         },
//       }));
//     } else {
//       setSelectedStore(null);
//       setDeliveryDetails(prev => ({
//         ...prev,
//         address: details.address,
//         option: 'delivery',
//         schedule: prev.schedule || {
//           date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
//           timeSlot: '10:00 - 12:00'
//         },
//       }));
//     }
//   };

//   const handleScheduleSelect = (date: string, timeSlot: string) => {
//     setDeliveryDetails(prev => ({
//       ...prev,
//       schedule: { date, timeSlot },
//     }));
//   };

//   // UPDATED: Modified validation to require schedule for both options
//   const validateOrderData = () => {
//     if (!deliveryDetails.schedule) {
//       NotificationService.showDialog(`Please select a ${deliveryDetails.option} schedule`);
//       return false;
//     }

//     if (deliveryDetails.option === 'pickup') {
//       if (!selectedStore || !deliveryDetails.address) {
//         NotificationService.showDialog('Please select a pickup store');
//         return false;
//       }
//     } else {
//       if (!deliveryDetails.address) {
//         NotificationService.showDialog('Please select a delivery address');
//         return false;
//       }
//     }

//     if (!basket || basket.itemCount === 0) {
//       NotificationService.showDialog('Your basket is empty');
//       return false;
//     }

//     return true;
//   };

//   const handleOrderSubmit = async () => {
//     if (!validateOrderData()) {
//       return;
//     }

//     setIsProcessing(true);
    
//     try {
//       const orderData = {
//         delivery_option: deliveryDetails.option,
//         address_id: deliveryDetails.address?.id,
//         store_id: deliveryDetails.option === 'pickup' ? selectedStore?.id : null,
//         delivery_date: deliveryDetails.schedule?.date,
//         delivery_time_slot: deliveryDetails.schedule?.timeSlot,
//         payment_method: paymentMethod,
//         basket_items: basket.items.map(item => ({
//           product_id: item.product_id,
//           quantity: item.quantity
//         })),
//         customer_email: user?.email || 'customer@salesnet.co',
//         customer_phone: user?.phone || 
//           (deliveryDetails.option === 'pickup' ? selectedStore?.phone : deliveryDetails.address?.phone_number)
//       };

//       const order = await createOrder(orderData);
//       console.log(order);

//       if (paymentMethod === 'pay_on_delivery') {
//         navigate('/checkout/success', { 
//           state: { 
//             order: { ...order, paymentStatus: 'pending' },
//             message: 'Order placed successfully! Pay on delivery.' 
//           } 
//         });
//       } else {
//         await processPaymentMethod(order);
//       }
//     } catch (error) {
//       console.error('Order processing error:', error);
//       NotificationService.showDialog('Failed to process order. Please try again.');
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   const processPaymentMethod = async (order: any) => {
//     const amount = order.total_amount;
//     const customerEmail = order.email;
//     const customerPhone = order.phone || 
//       (deliveryDetails.option === 'pickup' ? selectedStore?.phone : deliveryDetails.address?.phone_number);

//     try {
//       switch (paymentMethod) {
//         case 'paypal':
//           await processPaypalPayment(order, amount, customerEmail);
//           break;

//         case 'paystack':
//           await ensureScriptLoaded('paystack');
//           await processPaystackPayment(order, amount, customerEmail);
//           break;

//         case 'flutterwave':
//           await ensureScriptLoaded('flutterwave');
//           await processFlutterwavePayment(order, amount, customerEmail, customerPhone);
//           break;

//         case 'opay':
//           await ensureScriptLoaded('opay');
//           await processOpayPayment(order, amount, customerEmail, customerPhone);
//           break;

//         default:
//           throw new Error('Invalid payment method selected');
//       }
//     } catch (error) {
//       console.error('Payment processing error:', error);
//       throw error;
//     }
//   };

//   const processPaypalPayment = async (order: any, amount: number, customerEmail: string) => {
//     const paypalResult = await processPayment({
//       orderId: order.id,
//       amount,
//       paymentMethod: 'paypal',
//       customerEmail,
//       paymentReference: order.payment_reference
//       // paymentReference: order.tracking_number
//     });
    
//     if (paypalResult.success) {
//       navigate('/checkout/success', { state: { order } });
//     } else {
//       throw new Error(paypalResult.message || 'PayPal payment failed');
//     }
//   };

//   const processPaystackPayment = async (order: any, amount: number, customerEmail: string) => {
//     if (!scriptsLoaded.paystack) { 
//       throw new Error('Paystack payment system not available');
//     }

//     return new Promise<void>((resolve, reject) => {
//       const handler = (window as any).PaystackPop.setup({
//         key: paymentConfig.paystack.publicKey,
//         email: customerEmail,
//         amount: amount * 100,
//         currency: 'NGN',
//         reference:order.payment_reference,
//         // reference: `order_${order.id}_${Date.now()}`,
//         onClose: () => {
//           setIsProcessing(false);
//           NotificationService.showDialog('Payment cancelled', 'info');
//           reject(new Error('Payment cancelled by user'));
//         },

//         callback: async (response: any) => {
//           try {
//             const paymentResult = await processPayment({
//               orderId: order.id,
//               amount,
//               paymentMethod: 'paystack',
//               customerEmail,
//               paymentReference: response.reference
//             });

//             if (paymentResult.success) {
//               navigate('/checkout/success', { state: { order } });
//               resolve();
//             } else {
//               reject(new Error(paymentResult.message || 'Payment verification failed'));
//             }
//           } catch (error) {
//             reject(error);
//           }
//         }
//       });
//       handler.openIframe();
//     });
//   };

//   const processFlutterwavePayment = async (
//     order: any, 
//     amount: number, 
//     customerEmail: string, 
//     customerPhone: string
//   ) => {
//     if (!scriptsLoaded.flutterwave) {
//       throw new Error('Flutterwave payment system not available');
//     }

//     return new Promise<void>((resolve, reject) => {
      
//       (window as any).FlutterwaveCheckout({
//         public_key: paymentConfig.flutterwave.publicKey,
//         // tx_ref: `order_${order.id}_${Date.now()}`,
//         tx_ref: order.payment_reference,
//         amount,
//         currency: 'NGN',
//         // payment_options: 'card,mobilemoney,ussd',
//         customer: {
//           email: customerEmail,
//           phone_number: customerPhone,
//           name: user?.full_name || 'Customer'
//         },
//         customizations: {
//           title: 'Order Payment - 3D Payment Security.',
//           description: `Payment for order #${order.id}`,
//           logo: '/assets/img/logo.png'
//         },
//         callback: async (response: any) => {
//           try {
//             const paymentResult = await processPayment({
//               orderId: order.id,
//               amount,
//               paymentMethod: 'flutterwave',
//               customerEmail,
//               paymentReference: response.transaction_id
//             });

//             if (paymentResult.success) {
//               navigate('/checkout/success', { state: { order } });
//               resolve();
//             } else {
//               reject(new Error(paymentResult.message || 'Payment verification failed'));
//             }
//           } catch (error) {
//             reject(error);
//           }
//         },
//         onclose: () => {
//           setIsProcessing(false);
//           NotificationService.showDialog('Payment cancelled', 'info');
//           reject(new Error('Payment cancelled by user'));
//         },
//       });
//     });
//   };

//   const processOpayPayment = async (
//     order: any, 
//     amount: number, 
//     customerEmail: string, 
//     customerPhone: string
//   ) => {
//     if (!scriptsLoaded.opay) {
//       throw new Error('OPay payment system not available');
//     }

//     return new Promise<void>((resolve, reject) => {
//       (window as any).OPayCheckout({
//         merchantId: paymentConfig.opay.merchantId,
//         reference: order.payment_reference,
//         // reference: `order_${order.id}_${Date.now()}`,
//         amount,
//         currency: 'NGN',
//         callbackUrl: `${window.location.origin}/checkout/callback`,
//         customerEmail,
//         customerPhone,
//         customerName: user?.full_name || 'Customer',
//         onSuccess: async (response: any) => {
//           try {
//             const paymentResult = await processPayment({
//               orderId: order.id,
//               amount,
//               paymentMethod: 'opay',
//               customerEmail,
//               paymentReference: response.reference
//             });

//             if (paymentResult.success) {
//               navigate('/checkout/success', { state: { order } });
//               resolve();
//             } else {
//               reject(new Error(paymentResult.message || 'Payment verification failed'));
//             }
//           } catch (error) {
//             reject(error);
//           }
//         },
//         onClose: () => {
//           setIsProcessing(false);
//           NotificationService.showDialog('Payment cancelled', 'info');
//           reject(new Error('Payment cancelled by user'));
//         },
//       });
//     });
//   };

//   const formatDisplayAddress = (address: any) => {
//     if (deliveryDetails.option === 'pickup' && selectedStore) {
//       const storeAddress = deliveryDetails.address || address;
//       const storeName = selectedStore.name || 'Store';
//       const storeStreet = storeAddress?.street_address || 'Address not available';
//       const storeCity = storeAddress?.city?.name || storeAddress?.city || 'City not available';
//       return `${storeName}, ${storeStreet}, ${storeCity}`;
//     }
    
//     if (!address) return 'No address selected';
    
//     return `${address.street_address || ''}, ${address.city?.name || address.city || ''}${
//       address.state ? `, ${address.state.name}` : ''
//     }${address.zip_code ? `, ${address.zip_code}` : ''}${
//       address?.state?.country ? `, ${address?.state?.country.name}` : ''
//     }`;
//   };

//   const formatDisplaySchedule = (schedule: { date: string; timeSlot: string } | null) => {
//     if (!schedule) return 'No schedule selected';
    
//     const dateObj = new Date(schedule.date);
//     const formattedDate = dateObj.toLocaleDateString('en-US', {
//       weekday: 'long',
//       month: 'short',
//       day: 'numeric',
//     });
    
//     return `${formattedDate} | ${schedule.timeSlot}`;
//   };

//   // UPDATED: Modified validation to always require schedule
//   const canPlaceOrder = () => {
//     const hasValidSetup = deliveryDetails.option === 'delivery' 
//       ? (!!deliveryDetails.address && !!deliveryDetails.schedule)
//       : (!!selectedStore && !!deliveryDetails.address && !!deliveryDetails.schedule);
    
//     const hasItems = basket && basket.itemCount > 0;
//     const notProcessing = !isProcessing;
//     const addressesLoaded = !addressesLoading;
    
//     return hasValidSetup && hasItems && notProcessing && addressesLoaded;
//   };

//   return (
//     <>
//       <DeliveryOptionsOffCanvas 
//         onOptionSelect={handleDeliveryOptionSelect}
//         currentOption={deliveryDetails.option}
//         selectedAddress={deliveryDetails.address}
//         selectedStore={selectedStore}
//       />
      
//       <DeliveryDateOffCanvas 
//         onSelect={handleScheduleSelect} 
//       />

//       <main className="content-wrapper">
//         <Breadcrumb 
//           items={[
//             { label: 'Home', path: '/' },
//             { label: 'User', path: '/user/personal' },
//             { label: 'Basket', path: '/user/basket' },
//             { label: 'Checkout', path: `/user/checkout` }
//           ]} 
//         />
                
//         <section className="container pb-5 mb-2 mb-md-3 mb-lg-4 mb-xl-5">
//           <h1 className="h3 mb-4">Checkout</h1>
//           <div className="row">
//             <div className="col-lg-8 col-xl-7 mb-5 mb-lg-0">

//               <h2 className="h5 mb-4">
//                 {deliveryDetails.option === 'delivery' ? 'Delivery Address' : 'Pickup Location'}
//               </h2>
//               <div className="d-flex align-items-center justify-content-between mb-4">
//                 <div className="d-flex flex-column fs-sm text-dark-emphasis me-3">
//                   <div className="d-flex align-items-center">
//                     <i className="ci-map-pin fs-base text-primary me-2" />
//                     <span>{formatDisplayAddress(deliveryDetails.address)}</span>
//                   </div>
//                   {((deliveryDetails.option === 'pickup' && selectedStore?.phone) || 
//                     (deliveryDetails.option === 'delivery' && deliveryDetails.address?.phone_number)) && (
//                     <div className="text-muted ms-4 mt-1">
//                       Phone: {deliveryDetails.option === 'pickup' 
//                         ? selectedStore?.phone 
//                         : deliveryDetails.address?.phone_number}
//                     </div>
//                   )}
//                   <div className="text-muted ms-4 mt-1 small">
//                     Current option: <strong className="badge text-bg-success rounded-pill">{deliveryDetails.option}</strong>
//                     {selectedStore && ` | Store: ${selectedStore.name}`}
//                   </div>
//                 </div>
//                 <div className="nav animate-scale">
//                   <a
//                     className="badge text-bg-info text-decoration-none rounded-pill animate-target text-nowrap p-1"
//                     href="#deliveryOptions"
//                     data-bs-toggle="offcanvas"
//                     aria-controls="deliveryOptions"
//                   >
//                     {(deliveryDetails.address || selectedStore) ? "Change" : "Select"}
//                   </a>
//                 </div>
//               </div>

//               <h2 className="h5 mb-4">
//                 {deliveryDetails.option === 'delivery' ? 'Delivery Schedule' : 'Pickup Schedule'}
//               </h2>
//               <div className="d-flex align-items-center justify-content-between mb-4">
//                 <div className="align-items-center fs-sm">
//                   <i className="ci-clock fs-base text-primary me-2" />
//                   {formatDisplaySchedule(deliveryDetails.schedule)}
//                 </div>
//                 <div className="nav animate-scale">
//                   <a
//                     className="badge text-bg-info text-decoration-none rounded-pill animate-target text-nowrap p-1"
//                     href="#deliveryDateTime"
//                     data-bs-toggle="offcanvas"
//                     aria-controls="deliveryDateTime"
//                   >
//                     {deliveryDetails.schedule ? "Change" : "Select"}
//                   </a>
//                 </div>
//               </div>

//               <h2 className="h5 mt-5 mb-4">Payment method</h2>
//               <div id="paymentMethod" role="list">
//                 <div className="d-flex flex-wrap gap-3 mb-4">
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
//                       <img src="/assets/img/payment-methods/paypal.png" width={20} alt="PayPal" className="me-2" />
//                       PayPal
//                     </label>
//                   </div>

//                   <div>
//                     <input
//                       type="radio"
//                       className="btn-check"
//                       name="payment-method"
//                       id="paystack"
//                       checked={paymentMethod === 'paystack'}
//                       onChange={() => handlePaymentMethodChange('paystack')}
//                       disabled={isScriptLoading('paystack') || scriptLoadError.paystack}
//                     />
//                     <label
//                       className={`btn btn-outline-secondary rounded-pill d-flex align-items-center ${
//                         paymentMethod === 'paystack' ? 'active' : ''
//                       } ${isScriptLoading('paystack') ? 'opacity-50' : ''}`}
//                       htmlFor="paystack"
//                     >
//                       <img src="/assets/img/payment-methods/paystack.png" width={20} alt="Paystack" className="me-2" />
//                       {isScriptLoading('paystack') ? 'Loading...' : 
//                        scriptLoadError.paystack ? 'Unavailable' : 'Paystack'}
//                     </label>
//                   </div>

//                   <div>
//                     <input
//                       type="radio"
//                       className="btn-check"
//                       name="payment-method"
//                       id="flutterwave"
//                       checked={paymentMethod === 'flutterwave'}
//                       onChange={() => handlePaymentMethodChange('flutterwave')}
//                       disabled={isScriptLoading('flutterwave') || scriptLoadError.flutterwave}
//                     />
//                     <label
//                       className={`btn btn-outline-secondary rounded-pill d-flex align-items-center ${
//                         paymentMethod === 'flutterwave' ? 'active' : ''
//                       } ${isScriptLoading('flutterwave') ? 'opacity-50' : ''}`}
//                       htmlFor="flutterwave"
//                     >
//                       <img src="/assets/img/payment-methods/flutterwave.png" width={20} alt="Flutterwave" className="me-2" />
//                       {isScriptLoading('flutterwave') ? 'Loading...' : 
//                        scriptLoadError.flutterwave ? 'Unavailable' : 'Flutterwave'}
//                     </label>
//                   </div>

//                   <div>
//                     <input
//                       type="radio"
//                       className="btn-check"
//                       name="payment-method"
//                       id="opay"
//                       checked={paymentMethod === 'opay'}
//                       onChange={() => handlePaymentMethodChange('opay')}
//                       disabled={isScriptLoading('opay') || scriptLoadError.opay}
//                     />
//                     <label
//                       className={`btn btn-outline-secondary rounded-pill d-flex align-items-center ${
//                         paymentMethod === 'opay' ? 'active' : ''
//                       } ${isScriptLoading('opay') ? 'opacity-50' : ''}`}
//                       htmlFor="opay"
//                     >
//                       <img src="/assets/img/payment-methods/opay.png" width={20} alt="OPay" className="me-2" />
//                       {isScriptLoading('opay') ? 'Loading...' : 
//                        scriptLoadError.opay ? 'Unavailable' : 'OPay'}
//                     </label>
//                   </div>

//                   <div>
//                     <input
//                       type="radio"
//                       className="btn-check"
//                       name="payment-method"
//                       id="pay_on_delivery"
//                       checked={paymentMethod === 'pay_on_delivery'}
//                       onChange={() => handlePaymentMethodChange('pay_on_delivery')}
//                     />
//                     <label
//                       className={`btn btn-outline-secondary rounded-pill d-flex align-items-center ${
//                         paymentMethod === 'pay_on_delivery' ? 'active' : ''
//                       }`}
//                       htmlFor="pay_on_delivery"
//                     >
//                       <img src="/assets/img/payment-methods/on_delivery.png" width={20} alt="OPay" className="me-2" />
//                       Pay on Delivery
//                     </label>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {!basketLoading && basket && (
//               <OrderSummary
//                 context="checkout"
//                 itemCount={basket?.itemCount || 0}
//                 subtotal={basket?.subtotal || 0}
//                 total={basket?.estimatedTotal || basket?.subtotal}
//                 discount={basket?.savings || 0}
//                 deliveryFee={0}
//                 qualifiesForFreeShipping={basket.subtotal >= (basket.freeShippingThreshold || 0)}
//                 isLoading={isProcessing}
//                 onConfirmOrder={handleOrderSubmit}
//                 canPlaceOrder={canPlaceOrder()}
//                 buttonText={isProcessing ? 'Processing...' : 'Confirm Order'}
//               />
//             )}

//           </div>
//         </section>
//       </main>
//     </>
//   );
// };

// export default Checkout;

// 

// v11 - Corrected Payment Verification
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import DeliveryDateOffCanvas from './DeliveryDateOffCanvas';
import DeliveryOptionsOffCanvas from './DeliveryOptionsOffCanvas';
import { useOrder } from '../../../hooks/useOrder';
// import { usePayment, usePaymentVerification } from '../../../hooks/usePayment';
import { useBasket } from '../../../hooks/useBasket';
import { NotificationService } from '../../../services/local/NotificationService';
import Breadcrumb from '../../../components/shared/Breadcrumb';
import OrderSummary from '../shared/OrderSummary';
import { paymentConfig } from '../../../utils/env';
import { useAuth } from '../../../context/AuthContext';
import { AxiosAddressesService } from '../../../services/net/AxiosAddressesService';
import { usePaymentScripts } from '../../../hooks/usePaymentScripts';
import { usePaymentVerification } from '../../../hooks/usePaymentVerification';
import { AxiosService } from '../../../services/net/base/AxiosService';

const Checkout = () => {
  const navigate = useNavigate();
  const { basket, loading: basketLoading } = useBasket();
  const { user } = useAuth();
  const [paymentMethod, setPaymentMethod] = useState('flutterwave');
  const [isProcessing, setIsProcessing] = useState(false);
  const [addresses, setAddresses] = useState<any[]>([]);
  const [stores, setStores] = useState<any[]>([]);
  const [selectedStore, setSelectedStore] = useState<any>(null);
  const [addressesLoading, setAddressesLoading] = useState(true);

  const [isPaymentLocked, setIsPaymentLocked] = useState(false);
  const [lockReason, setLockReason] = useState('');

  // const { processPayment, verifyPayment } = usePayment();
  const { verifyPayment, isLoading, error } = usePaymentVerification();
  const { createOrder } = useOrder();

  // Payment script management
  const {
    scriptsLoaded,
    ensureScriptLoaded,
    isScriptLoading,
    scriptLoadError
  } = usePaymentScripts();

  // Always include schedule for both delivery and pickup
  const [deliveryDetails, setDeliveryDetails] = useState<{
    address: any | null;
    schedule: { date: string; timeSlot: string } | null;
    option: 'delivery' | 'pickup';
  }>({
    address: null,
    schedule: null,
    option: 'delivery',
  });

  const fetchAddresses = useCallback(async () => {
    try {
      setAddressesLoading(true);
      const response = await AxiosAddressesService.fetchAll({
        include_city: true,
        include_state: true,
        include_country: true,
        include_store: true
      });
      const allAddresses = response.data.addresses || [];
      setAddresses(allAddresses);
      
      const userAddresses = allAddresses.filter((addr: any) => !addr.is_store);
      const storeAddresses = allAddresses.filter((addr: any) => addr.is_store);
      
      const primaryAddress = userAddresses.find((addr: any) => addr.is_primary);
      const defaultAddress = primaryAddress || userAddresses[0] || null;
      
      if (defaultAddress && !deliveryDetails.address) {
        setDeliveryDetails(prev => ({
          ...prev,
          address: defaultAddress,
        }));
      }
      
      if (storeAddresses.length > 0 && !selectedStore) {
        const firstStore = storeAddresses[0];
        setSelectedStore(firstStore.stores || firstStore);
      }
    } catch (err: any) {
      const message = err.response?.data?.message || 'Failed to load addresses';
      console.error('Address fetch error:', message);
    } finally {
      setAddressesLoading(false);
    }
  }, []);

  // Set default address and schedule on component mount
  useEffect(() => {
    fetchAddresses();

    // Always set default schedule regardless of delivery option
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const defaultSchedule = {
      date: tomorrow.toISOString().split('T')[0],
      timeSlot: '10:00 - 12:00'
    };
    
    setDeliveryDetails(prev => ({
      ...prev,
      schedule: defaultSchedule,
    }));
    
  }, [fetchAddresses]);

  const handlePaymentMethodChange = async (method: string) => {
    setPaymentMethod(method);
    
    // Preload payment scripts when method is selected
    if (method === 'paystack') {
      await ensureScriptLoaded('paystack');
    } else if (method === 'flutterwave') {
      await ensureScriptLoaded('flutterwave');
    } else if (method === 'opay') {
      await ensureScriptLoaded('opay');
    }
  };

  // Modified to maintain schedule for both options
  const handleDeliveryOptionSelect = (details: {
    address: any;
    store?: any;
    option: 'delivery' | 'pickup';
    type?: 'user' | 'store';
  }) => {
    if (details.option === 'pickup') {
      setSelectedStore(details.store);
      setDeliveryDetails(prev => ({
        ...prev,
        address: details.address,
        option: 'pickup',
        schedule: prev.schedule || {
          date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
          timeSlot: '10:00 - 12:00'
        },
      }));
    } else {
      setSelectedStore(null);
      setDeliveryDetails(prev => ({
        ...prev,
        address: details.address,
        option: 'delivery',
        schedule: prev.schedule || {
          date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
          timeSlot: '10:00 - 12:00'
        },
      }));
    }
  };

  const handleScheduleSelect = (date: string, timeSlot: string) => {
    setDeliveryDetails(prev => ({
      ...prev,
      schedule: { date, timeSlot },
    }));
  };

  // Modified validation to require schedule for both options
  const validateOrderData = () => {
    if (!deliveryDetails.schedule) {
      NotificationService.showDialog(`Please select a ${deliveryDetails.option} schedule`);
      return false;
    }

    if (deliveryDetails.option === 'pickup') {
      if (!selectedStore || !deliveryDetails.address) {
        NotificationService.showDialog('Please select a pickup store');
        return false;
      }
    } else {
      if (!deliveryDetails.address) {
        NotificationService.showDialog('Please select a delivery address');
        return false;
      }
    }

    if (!basket || basket.itemCount === 0) {
      NotificationService.showDialog('Your basket is empty');
      return false;
    }

    return true;
  };

  const handleOrderSubmit = async () => {
    if (!validateOrderData()) {
      return;
    }

    setIsProcessing(true);
    
    try {
      const orderData = {
        delivery_option: deliveryDetails.option,
        address_id: deliveryDetails.address?.id,
        store_id: deliveryDetails.option === 'pickup' ? selectedStore?.id : null,
        delivery_date: deliveryDetails.schedule?.date,
        delivery_time_slot: deliveryDetails.schedule?.timeSlot,
        payment_method: paymentMethod,
        basket_items: basket.items.map(item => ({
          product_id: item.product_id,
          quantity: item.quantity
        })),
        customer_email: user?.email || 'customer@salesnet.co',
        customer_phone: user?.phone || 
          (deliveryDetails.option === 'pickup' ? selectedStore?.phone : deliveryDetails.address?.phone_number),

        is_payment_locked: isPaymentLocked,
        lock_reason: isPaymentLocked ? lockReason : '',
      };

      const order = await createOrder(orderData);
      console.log('Order created:', order);

      if (paymentMethod === 'pay_on_delivery') {
        navigate('/user/checkout/success', { 
          state: { 
            order: { ...order, paymentStatus: 'pending' },
            message: 'Order placed successfully! Pay on delivery.' 
          } 
        });
      } else {
        await processPaymentMethod(order);
      }
    } catch (error) {
      console.error('Order processing error:', error);
      NotificationService.showDialog('Failed to process order. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const processPaymentMethod = async (order: any) => {
    const amount = order.total_amount;
    const customerEmail = order.email;
    const customerPhone = order.phone || 
      (deliveryDetails.option === 'pickup' ? selectedStore?.phone : deliveryDetails.address?.phone_number);

    try {
      switch (paymentMethod) {
        case 'paypal':
          await ensureScriptLoaded('paypal');
          await processPaypalPayment(order, amount, customerEmail);
          break;

        case 'paystack':
          await ensureScriptLoaded('paystack');
          await processPaystackPayment(order, amount, customerEmail);
          break;

        case 'flutterwave':
          await ensureScriptLoaded('flutterwave');
          await processFlutterwavePayment(order, amount, customerEmail, customerPhone);
          break;

        case 'opay':
          await ensureScriptLoaded('opay');
          await processOpayPayment(order, amount, customerEmail, customerPhone);
          break;

        default:
          throw new Error('Invalid payment method selected');
      }
    } catch (error) {
      console.error('Payment processing error:', error);
      throw error;
    }
  };

  // const processPaypalPayment = async (order: any, amount: number, customerEmail: string) => {
  //   try {
  //     const paypalResult = await processPaymentMethod({
  //       orderId: order.id,
  //       amount,
  //       paymentMethod: 'paypal',
  //       customerEmail,
  //       paymentReference: order.payment_reference
  //     });
      
  //     if (paypalResult.success) {
  //       navigate('/user/checkout/success', { state: { order } });
  //     } else {
  //       throw new Error(paypalResult.message || 'PayPal payment failed');
  //     }
  //   } catch (error) {
  //     console.error('PayPal payment error:', error);
  //     throw error;
  //   }
  // };

  // Replace the processPaypalPayment function with this corrected version:

const processPaypalPayment = async (order: any, amount: number, customerEmail: string) => {
  try {
    // You need to implement actual PayPal payment processing here
    // This should integrate with your PayPal SDK or API
    
    // Example using PayPal JavaScript SDK (you'll need to adapt this to your setup):
    if (typeof window !== 'undefined' && (window as any).paypal) {
      return new Promise<void>((resolve, reject) => {
        (window as any).paypal.Buttons({
          createOrder: (_: any, actions: any) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: amount.toString(),
                  currency_code: 'NGN' // or your preferred currency
                },
                reference_id: order.payment_reference
              }]
            });
          },
          
          onApprove: async (_: any, actions: any) => {
            try {
              const details = await actions.order.capture();
              console.log('PayPal payment completed:', details);
              
              // Verify payment with your backend
              const verificationResult = await verifyPayment({
                paymentMethod: 'paypal',
                transactionId: details.id,
                paymentReference: order.payment_reference,
                orderId: order.id
              });

              if (verificationResult.success) {
                navigate('/user/checkout/success', { 
                  state: { 
                    order: { ...order, paymentStatus: 'completed' },
                    paymentData: verificationResult.data 
                  } 
                });
                resolve();
              } else {
                throw new Error(verificationResult.message || 'Payment verification failed');
              }
            } catch (error) {
              console.error('PayPal verification error:', error);
              NotificationService.showDialog(
                error instanceof Error ? error.message : 'Payment verification failed'
              );
              reject(error);
            }
          },
          
          onError: (err: any) => {
            console.error('PayPal payment error:', err);
            NotificationService.showDialog('PayPal payment failed');
            reject(new Error('PayPal payment failed'));
          },
          
          onCancel: () => {
            setIsProcessing(false);
            NotificationService.showDialog('Payment cancelled', 'info');
            reject(new Error('Payment cancelled by user'));
          }
        }).render('#paypal-button-container'); // You'll need a container in your JSX
      });
    } else {
      // Alternative: Direct API call to my backend for PayPal processing
      // const paypalResult = await fetch('/payments/paypal/process', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': `Bearer ${localStorage.getItem('token')}` // if using auth
      //   },
      //   body: JSON.stringify({
      //     orderId: order.id,
      //     amount,
      //     customerEmail,
      //     paymentReference: order.payment_reference
      //   })
      // });
      const paypalResult = await AxiosService.json.post('/payments/paypal/process', JSON.stringify({
          orderId: order.id,
          amount,
          customerEmail,
          paymentReference: order.payment_reference
        })
      );
      
      // const result = await paypalResult.json();
      const result = paypalResult;
      
      if (result.success) {
        // If your backend handles the full PayPal flow and returns success
        navigate('/user/checkout/success', { 
          state: { 
            order: { ...order, paymentStatus: 'completed' },
            paymentData: result.data 
          } 
        });
      } else {
        throw new Error(result.message || 'PayPal payment failed');
      }
    }
  } catch (error) {
    console.error('PayPal payment error:', error);
    throw error;
  }
};

  // const processPaystackPayment = async (order: any, amount: number, customerEmail: string) => {
  //   if (!scriptsLoaded.paystack) { 
  //     throw new Error('Paystack payment system not available');
  //   }

  //   return new Promise<void>((resolve, reject) => {
  //     const handler = (window as any).PaystackPop.setup({
  //       key: paymentConfig.paystack.publicKey,
  //       email: customerEmail,
  //       amount: amount * 100, // Convert to kobo
  //       currency: 'NGN',
  //       reference: order.payment_reference,
        
  //       onClose: () => {
  //         setIsProcessing(false);
  //         NotificationService.showDialog('Payment cancelled', 'info');
  //         reject(new Error('Payment cancelled by user'));
  //       },

  //       callback: async (response: any) => {
  //         try {
  //           console.log('Paystack callback response:', response);
            
  //           // Verify payment with backend
  //           const verificationResult = await verifyPayment({
  //             paymentMethod: 'paystack',
  //             transactionId: response.reference, // Paystack uses reference as transaction ID
  //             paymentReference: order.payment_reference,
  //             orderId: order.id
  //           });

  //           if (verificationResult.success) {
  //             navigate('/checkout/success', { 
  //               state: { 
  //                 order: { ...order, paymentStatus: 'completed' },
  //                 paymentData: verificationResult.data 
  //               } 
  //             });
  //             resolve();
  //           } else {
  //             throw new Error(verificationResult.message || 'Payment verification failed');
  //           }
  //         } catch (error) {
  //           console.error('Paystack verification error:', error);
  //           NotificationService.showDialog(
  //             error instanceof Error ? error.message : 'Payment verification failed'
  //           );
  //           reject(error);
  //         }
  //       }
  //     });
      
  //     handler.openIframe();
  //   });
  // };

  const processPaystackPayment = async (order: any, amount: number, customerEmail: string) => {
  if (!scriptsLoaded.paystack) { 
    throw new Error('Paystack payment system not available');
  }

  return new Promise<void>((resolve, reject) => {
    // Create a synchronous callback wrapper
    const callback = (response: any) => {
      (async () => {
        try {
          // console.log('Paystack callback response:', response);
          
          // Verify payment with backend
          const verificationResult = await verifyPayment({
            paymentMethod: 'paystack',
            transactionId: response.reference,
            paymentReference: order.payment_reference,
            orderId: order.id
          });

          if (verificationResult.success) {
            navigate('/user/checkout/success', { 
              state: { 
                order: { ...order, paymentStatus: 'completed' },
                paymentData: verificationResult.data 
              } 
            });
            resolve();
          } else {
            throw new Error(verificationResult.message || 'Payment verification failed');
          }
        } catch (error) {
          console.error('Paystack verification error:', error);
          NotificationService.showDialog(
            error instanceof Error ? error.message : 'Payment verification failed'
          );
          reject(error);
        }
      })();
    };

    const handler = (window as any).PaystackPop.setup({
      // key: paymentConfig.paystack.publicKey,
      // email: customerEmail,
      // amount: amount * 100,
      // currency: 'NGN',
      // reference: order.payment_reference,

      key: paymentConfig.paystack.publicKey,
      email: customerEmail,
      amount: amount * 100,
      currency: 'NGN',
      reference: order.payment_reference,
      metadata: {
        merchant_reference: order.payment_reference,  // Add this line
        order_id: order.id,
        customer_email: customerEmail
      },
      onClose: () => {
        setIsProcessing(false);
        NotificationService.showDialog('Payment cancelled', 'info');
        reject(new Error('Payment cancelled by user'));
      },
      callback // Pass the synchronous wrapper
    });
    
    handler.openIframe();
  });
};


  // const processFlutterwavePayment = async (
  //   order: any, 
  //   amount: number, 
  //   customerEmail: string, 
  //   customerPhone: string
  // ) => {
  //   if (!scriptsLoaded.flutterwave) {
  //     throw new Error('Flutterwave payment system not available');
  //   }

  //   return new Promise<void>((resolve, reject) => {
  //     (window as any).FlutterwaveCheckout({
  //       public_key: paymentConfig.flutterwave.publicKey,
  //       tx_ref: order.payment_reference,
  //       amount,
  //       currency: 'NGN',
  //       customer: {
  //         email: customerEmail,
  //         phone_number: customerPhone,
  //         name: user?.full_name || 'Customer'
  //       },
  //       customizations: {
  //         title: 'Order Payment - 3D Payment Security.',
  //         description: `Payment for order #${order.id}`,
  //         logo: '/assets/img/logo.png'
  //       },
  //       metadata: {
  //         merchant_reference: order.payment_reference,  // Add this line
  //         order_id: order.id,
  //         customer_email: customerEmail
  //       },
  //       //
          
  //       callback: async (response: any) => {
  //         try {
  //           console.log('Flutterwave callback response:', response);
            
  //           // Verify payment with backend
  //           const verificationResult = await verifyPayment({
  //             paymentMethod: 'flutterwave',
  //             transactionId: response.transaction_id,
  //             paymentReference: order.payment_reference,
  //             orderId: order.id
  //           });

  //           console.log(`verificationResult ${verificationResult}`)

  //         //    const verificationResult = await verifyPayment({
  //         //   paymentMethod: 'paystack',
  //         //   transactionId: response.reference,
  //         //   paymentReference: order.payment_reference,
  //         //   orderId: order.id
  //         // });

  //           if (verificationResult.success) {
  //             navigate('/user/checkout/success', { 
  //               state: { 
  //                 order: { ...order, paymentStatus: 'completed' },
  //                 paymentData: verificationResult.data 
  //               } 
  //             });
  //             resolve();
  //           } else {
  //             throw new Error(verificationResult.message || 'Payment verification failed');
  //           }
  //         } catch (error) {
  //           console.error('Flutterwave verification error:', error);
  //           NotificationService.showDialog(
  //             error instanceof Error ? error.message : 'Payment verification failed'
  //           );
  //           reject(error);
  //         }
  //       },
        
  //       onclose: () => {
  //         setIsProcessing(false);
  //         NotificationService.showDialog('Payment cancelled', 'info');
  //         reject(new Error('Payment cancelled by user'));
  //       },
  //     });
  //   });
  // };

  const processFlutterwavePayment = async (
  order: any, 
  amount: number, 
  customerEmail: string, 
  customerPhone: string
) => {
  if (!scriptsLoaded.flutterwave) {
    throw new Error('Flutterwave payment system not available');
  }

  return new Promise<void>((resolve, reject) => {
    (window as any).FlutterwaveCheckout({
      public_key: paymentConfig.flutterwave.publicKey,
      tx_ref: order.payment_reference,
      amount,
      currency: 'NGN',
      customer: {
        email: customerEmail,
        phone_number: customerPhone,
        name: user?.full_name || 'Customer'
      },
      customizations: {
        title: 'Order Payment - 3D Payment Security.',
        description: `Payment for order #${order.id}`,
        logo: '/assets/img/logo.png'
      },
      metadata: {
        merchant_reference: order.payment_reference,
        order_id: order.id,
        customer_email: customerEmail
      },
      
      callback: async (response: any) => {
        try {

          console.log('Flutterwave callback response:', response);
          
          // Use flw_ref for verification instead of transaction_id
          const verificationResult = await verifyPayment({
            paymentMethod: 'flutterwave',
            transactionId: response.transaction_id,  // Changed to flw_ref
            paymentReference: order.payment_reference,
            // paymentReference: response.transaction_id,
            orderId: order.id
          });

          console.log(` Flutterwave verificationResult - ${verificationResult}`)

          if (verificationResult.success) {
            navigate('/user/checkout/success', { 
              state: { 
                order: { ...order, paymentStatus: 'completed' },
                paymentData: verificationResult.data 
              } 
            });
            resolve();
          } else {
            throw new Error(verificationResult.message || 'Payment verification failed');
          }
        } catch (error) {
          console.error('Flutterwave verification error:', error);
          NotificationService.showDialog(
            error instanceof Error ? error.message : 'Payment verification failed'
          );
          reject(error);
        }
      },
      
      onclose: () => {
        setIsProcessing(false);
        NotificationService.showDialog('Payment cancelled', 'info');
        reject(new Error('Payment cancelled by user'));
      },
    });
  });
};


  const processOpayPayment = async (
    order: any, 
    amount: number, 
    customerEmail: string, 
    customerPhone: string
  ) => {
    if (!scriptsLoaded.opay) {
      throw new Error('OPay payment system not available');
    }

    return new Promise<void>((resolve, reject) => {
      (window as any).OPayCheckout({
        merchantId: paymentConfig.opay.merchantId,
        reference: order.payment_reference,
        amount,
        currency: 'NGN',
        callbackUrl: `${window.location.origin}/checkout/callback`,
        customerEmail,
        customerPhone,
        customerName: user?.full_name || 'Customer',
        
        onSuccess: async (response: any) => {
          try {
            console.log('OPay success response:', response);
            
            // Verify payment with backend
            const verificationResult = await verifyPayment({
              paymentMethod: 'opay',
              transactionId: response.reference || response.transaction_id,
              paymentReference: order.payment_reference,
              orderId: order.id
            });

            if (verificationResult.success) {
              navigate('/user/checkout/success', { 
                state: { 
                  order: { ...order, paymentStatus: 'completed' },
                  paymentData: verificationResult.data 
                } 
              });
              resolve();
            } else {
              throw new Error(verificationResult.message || 'Payment verification failed');
            }
          } catch (error) {
            console.error('OPay verification error:', error);
            NotificationService.showDialog(
              error instanceof Error ? error.message : 'Payment verification failed'
            );
            reject(error);
          }
        },
        
        onClose: () => {
          setIsProcessing(false);
          NotificationService.showDialog('Payment cancelled', 'info');
          reject(new Error('Payment cancelled by user'));
        },
      });
    });
  };

  const formatDisplayAddress = (address: any) => {
    if (deliveryDetails.option === 'pickup' && selectedStore) {
      const storeAddress = deliveryDetails.address || address;
      const storeName = selectedStore.name || 'Store';
      const storeStreet = storeAddress?.street_address || 'Address not available';
      const storeCity = storeAddress?.city?.name || storeAddress?.city || 'City not available';
      return `${storeName}, ${storeStreet}, ${storeCity}`;
    }
    
    if (!address) return 'No address selected';
    
    return `${address.street_address || ''}, ${address.city?.name || address.city || ''}${
      address.state ? `, ${address.state.name}` : ''
    }${address.zip_code ? `, ${address.zip_code}` : ''}${
      address?.state?.country ? `, ${address?.state?.country.name}` : ''
    }`;
  };

  const formatDisplaySchedule = (schedule: { date: string; timeSlot: string } | null) => {
    if (!schedule) return 'No schedule selected';
    
    const dateObj = new Date(schedule.date);
    const formattedDate = dateObj.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
    });
    
    return `${formattedDate} | ${schedule.timeSlot}`;
  };

  // Modified validation to always require schedule
  const canPlaceOrder = () => {
    const hasValidSetup = deliveryDetails.option === 'delivery' 
      ? (!!deliveryDetails.address && !!deliveryDetails.schedule)
      : (!!selectedStore && !!deliveryDetails.address && !!deliveryDetails.schedule);
    
    const hasItems = basket && basket.itemCount > 0;
    const notProcessing = !isProcessing;
    const addressesLoaded = !addressesLoading;
    
    return hasValidSetup && hasItems && notProcessing && addressesLoaded;
  };

  return (
    <>
      <DeliveryOptionsOffCanvas 
        onOptionSelect={handleDeliveryOptionSelect}
        currentOption={deliveryDetails.option}
        selectedAddress={deliveryDetails.address}
        selectedStore={selectedStore}
      />
      
      <DeliveryDateOffCanvas 
        onSelect={handleScheduleSelect} 
      />

      <main className="content-wrapper">
        <Breadcrumb 
          items={[
            { label: 'Home', path: '/' },
            { label: 'User', path: '/user/personal' },
            { label: 'Basket', path: '/user/basket' },
            { label: 'Checkout', path: `/user/checkout` }
          ]} 
        />
                
        <section className="container pb-5 mb-2 mb-md-3 mb-lg-4 mb-xl-5 ">
          <h1 className="h3 mb-4">Checkout</h1>
          <div className="row">
            <div className="col-lg-8 col-xl-7 mb-5 mb-lg-0">

              <h2 className="h5 mb-4">
                {deliveryDetails.option === 'delivery' ? 'Delivery Address' : 'Pickup Location'}
              </h2>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="d-flex flex-column fs-sm text-dark-emphasis me-3">
                  <div className="d-flex align-items-center">
                    <i className="ci-map-pin fs-base text-primary me-2" />
                    <span>{formatDisplayAddress(deliveryDetails.address)}</span>
                  </div>
                  {((deliveryDetails.option === 'pickup' && selectedStore?.phone) || 
                    (deliveryDetails.option === 'delivery' && deliveryDetails.address?.phone_number)) && (
                    <div className="text-muted ms-4 mt-1">
                      Phone: {deliveryDetails.option === 'pickup' 
                        ? selectedStore?.phone 
                        : deliveryDetails.address?.phone_number}
                    </div>
                  )}
                  <div className="text-muted ms-4 mt-1 small">
                    Current option: <strong className="badge text-bg-success rounded-pill">{deliveryDetails.option}</strong>
                    {selectedStore && ` | Store: ${selectedStore.name}`}
                  </div>
                </div>
                <div className="nav animate-scale">
                  <a
                    className="badge text-bg-info text-decoration-none rounded-pill animate-target text-nowrap p-1"
                    href="#deliveryOptions"
                    data-bs-toggle="offcanvas"
                    aria-controls="deliveryOptions"
                  >
                    {(deliveryDetails.address || selectedStore) ? "Change" : "Select"}
                  </a>
                </div>
              </div>

              <h2 className="h5 mb-4 - border-top pt-3">
                {deliveryDetails.option === 'delivery' ? 'Delivery Schedule' : 'Pickup Schedule'}
              </h2>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="align-items-center fs-sm">
                  <i className="ci-clock fs-base text-primary me-2" />
                  {formatDisplaySchedule(deliveryDetails.schedule)}
                </div>
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

              <h2 className="h5 mt-5 mb-4 - mt-4 border-top pt-3">Payment method</h2>
              <div id="paymentMethod" role="list">
                <div className="d-flex flex-wrap gap-3 mb-4">
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
                      <img src="/assets/img/payment-methods/paypal.png" width={20} alt="PayPal" className="me-2" />
                      PayPal
                    </label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      className="btn-check"
                      name="payment-method"
                      id="paystack"
                      checked={paymentMethod === 'paystack'}
                      onChange={() => handlePaymentMethodChange('paystack')}
                      disabled={isScriptLoading('paystack') || scriptLoadError.paystack}
                    />
                    <label
                      className={`btn btn-outline-secondary rounded-pill d-flex align-items-center ${
                        paymentMethod === 'paystack' ? 'active' : ''
                      } ${isScriptLoading('paystack') ? 'opacity-50' : ''}`}
                      htmlFor="paystack"
                    >
                      <img src="/assets/img/payment-methods/paystack.png" width={20} alt="Paystack" className="me-2" />
                      {isScriptLoading('paystack') ? 'Loading...' : 
                       scriptLoadError.paystack ? 'Unavailable' : 'Paystack'}
                    </label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      className="btn-check"
                      name="payment-method"
                      id="flutterwave"
                      checked={paymentMethod === 'flutterwave'}
                      onChange={() => handlePaymentMethodChange('flutterwave')}
                      disabled={isScriptLoading('flutterwave') || scriptLoadError.flutterwave}
                    />
                    <label
                      className={`btn btn-outline-secondary rounded-pill d-flex align-items-center ${
                        paymentMethod === 'flutterwave' ? 'active' : ''
                      } ${isScriptLoading('flutterwave') ? 'opacity-50' : ''}`}
                      htmlFor="flutterwave"
                    >
                      <img src="/assets/img/payment-methods/flutterwave.png" width={20} alt="Flutterwave" className="me-2" />
                      {isScriptLoading('flutterwave') ? 'Loading...' : 
                       scriptLoadError.flutterwave ? 'Unavailable' : 'Flutterwave'}
                    </label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      className="btn-check"
                      name="payment-method"
                      id="opay"
                      checked={paymentMethod === 'opay'}
                      onChange={() => handlePaymentMethodChange('opay')}
                      disabled={isScriptLoading('opay') || scriptLoadError.opay}
                    />
                    <label
                      className={`btn btn-outline-secondary rounded-pill d-flex align-items-center ${
                        paymentMethod === 'opay' ? 'active' : ''
                      } ${isScriptLoading('opay') ? 'opacity-50' : ''}`}
                      htmlFor="opay"
                    >
                      <img src="/assets/img/payment-methods/opay.png" width={20} alt="OPay" className="me-2" />
                      {isScriptLoading('opay') ? 'Loading...' : 
                       scriptLoadError.opay ? 'Unavailable' : 'OPay'}
                    </label>
                  </div>

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
                      <img src="/assets/img/payment-methods/on_delivery.png" width={20} alt="OPay" className="me-2" />
                      Pay on Delivery
                    </label>
                  </div>
                </div>

                {/* Payment Locking Feature */}
                {paymentMethod !== 'pay_on_delivery' && (
                  <div className="mt-4 border-top pt-3">
                    <h3 className="h6 mb-3">Payment Security</h3>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="lockPayment"
                        checked={isPaymentLocked}
                        onChange={() => setIsPaymentLocked(!isPaymentLocked)}
                      />
                      
                      <label className="form-check-label" htmlFor="lockPayment">
                        <span className="d-flex align-items-center">
                          {/* <i className="ci-shield-check text-success me-2" /> */}
                          <i className="ci-check-shield text-success me-2"></i>
                          Lock this payment
                        </span>
                        <small className="form-text text-muted">
                          <i className="ci-info text-warning me-2"></i> Funds will be held securely until you release them to the seller
                        </small>
                      </label>
                    </div>
                    
                    {isPaymentLocked && (
                      <div className="mt-3 animate-fade-in">
                        <label htmlFor="lockReason" className="form-label small">
                          Why are you locking this payment? (Optional)
                        </label>
                        <textarea
                          id="lockReason"
                          className="form-control form-control-sm"
                          rows={2}
                          placeholder="e.g., I want to inspect goods before release"
                          value={lockReason}
                          onChange={(e) => setLockReason(e.target.value)}
                        />
                      </div>
                    )}
                  </div>
                )}
  
              </div>
              
            </div>

            {!basketLoading && basket && (
              <OrderSummary
                context="checkout"
                itemCount={basket?.itemCount || 0}
                subtotal={basket?.subtotal || 0}
                total={basket?.estimatedTotal || basket?.subtotal}
                discount={basket?.savings || 0}
                deliveryFee={0}
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