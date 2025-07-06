
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
//           currency: 'USD',
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
//           currency: 'USD',
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

// V7 - Enhanced with unified order/payment processing - FIXED PICKUP HANDLING
import React, { useState, useEffect, useCallback } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import DeliveryDateOffCanvas from './DeliveryDateOffCanvas';
import DeliveryOptionsOffCanvas from './DeliveryOptionsOffCanvas';
import { useOrder } from '../../../hooks/useOrder';
import { usePayment } from '../../../hooks/usePaymentVerification';
import { useBasket } from '../../../hooks/useBasket';
import { NotificationService } from '../../../services/local/NotificationService';
import Breadcrumb from '../../../components/shared/Breadcrumb';
import OrderSummary from '../shared/OrderSummary';
import { paymentConfig } from '../../../utils/env';
import { useAuth } from '../../../context/AuthContext';
import { AxiosAddressesService } from '../../../services/net/AxiosAddressesService';

const Checkout = () => {
  const navigate = useNavigate();
  const { basket, loading: basketLoading } = useBasket();
  const { user } = useAuth();
  const [paymentMethod, setPaymentMethod] = useState('paypal');
  const [isProcessing, setIsProcessing] = useState(false);
  const [addresses, setAddresses] = useState<any[]>([]);
  const [stores, setStores] = useState<any[]>([]);
  const [selectedStore, setSelectedStore] = useState<any>(null);
  const [addressesLoading, setAddressesLoading] = useState(true);

  const [deliveryDetails, setDeliveryDetails] = useState<{
    address: any | null;
    schedule: { date: string; timeSlot: string } | null;
    option: 'delivery' | 'pickup';
  }>({
    address: null,
    schedule: null,
    option: 'pickup',
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
      
      // Set primary address as default for delivery
      const primaryAddress = userAddresses.find((addr: any) => addr.is_primary);
      const defaultAddress = primaryAddress || userAddresses[0] || null;
      
      if (defaultAddress && deliveryDetails.option === 'delivery') {
        setDeliveryDetails(prev => ({
          ...prev,
          address: defaultAddress,
        }));
      }
    } catch (err: any) {
      const message = err.response?.data?.message || 'Failed to load addresses';
      console.error('Address fetch error:', message);
    } finally {
      setAddressesLoading(false);
    }
  }, [deliveryDetails.option]);

  // Set default address and schedule on component mount
  useEffect(() => {
    fetchAddresses();

    // Set default schedule to next day
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

  // Handle payment method change
  const handlePaymentMethodChange = (method: string) => {
    setPaymentMethod(method);
  };

  // // FIXED: Updated delivery option handler with proper store handling
  // const handleDeliveryOptionSelect = (details: {
  //   address: any;
  //   store: any;
  //   option: 'delivery' | 'pickup';
  // }) => {
  //   console.log('Delivery option selected:', details); // Debug log
    
  //   if (details.option === 'pickup') {
  //     // For pickup: set the store and use store's address
  //     setSelectedStore(details.store);
  //     setDeliveryDetails(prev => ({
  //       ...prev,
  //       address: details.store?.address || details.address, // Use store's address
  //       option: details.option,
  //     }));
  //   } else {
  //     // For delivery: clear store and use user's address
  //     setSelectedStore(null);
  //     setDeliveryDetails(prev => ({
  //       ...prev,
  //       address: details.address,
  //       option: details.option,
  //     }));
  //   }
  // };

  const handleDeliveryOptionSelect = (details: {
    address: any;
    store: any;  // This now contains full store object
    option: 'delivery' | 'pickup';
  }) => {
    // console.log('Delivery option selected:', details);
    console.log('Delivery option details:', {
  address: details.address,
  store: details.store,
  option: details.option
});

    
    if (details.option === 'pickup' && details.store) {
      // For pickup: set the store and use store's address
      setSelectedStore(details.store);
      setDeliveryDetails(prev => ({
        ...prev,
        address: details.store.address,  // Use store's address
        option: details.option,
      }));
    } else {
      // For delivery: clear store and use user's address
      setSelectedStore(null);
      setDeliveryDetails(prev => ({
        ...prev,
        address: details.address,
        option: details.option,
      }));
    }
  };

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
    if (!deliveryDetails.address && !selectedStore) {
      NotificationService.showDialog('Please select a delivery address or pickup location');
      return;
    }

    if (deliveryDetails.option === 'delivery' && !deliveryDetails.schedule) {
      NotificationService.showDialog('Please select a delivery schedule');
      return;
    }

    if (deliveryDetails.option === 'pickup' && !selectedStore) {
      NotificationService.showDialog('Please select a pickup store');
      return;
    }

    if (!basket || basket.itemCount === 0) {
      NotificationService.showDialog('Your basket is empty');
      return;
    }

    setIsProcessing(true);
    
    try {
      console.log('Selected store:', selectedStore); // Debug log
      console.log('Delivery details:', deliveryDetails); // Debug log
      
      // FIXED: Prepare order data with proper store handling
      // const orderData = {
      //   delivery_option: deliveryDetails.option,
      //   // For delivery: use address_id, for pickup: use store's address if available
      //   address_id: deliveryDetails.option === 'delivery' 
      //     ? deliveryDetails.address?.id 
      //     : (selectedStore?.address?.id || deliveryDetails.address?.id),
      //   // For pickup: always include store_id
      //   store_id: deliveryDetails.option === 'pickup' ? selectedStore?.id : null,
      //   delivery_date: deliveryDetails.schedule?.date,
      //   delivery_time_slot: deliveryDetails.schedule?.timeSlot,
      //   payment_method: paymentMethod,
      //   basket_items: basket.items.map(item => ({
      //     product_id: item.product_id,
      //     quantity: item.quantity
      //   })),
      //   customer_email: user?.email || 'customer@salesnet.co',
      //   customer_phone: user?.phone || deliveryDetails.address?.phone_number || selectedStore?.phone
      // };

//       const orderData = {
//   delivery_option: deliveryDetails.option,
//   // For delivery: use user's address ID
//   // For pickup: use store's address ID as address_id (some systems require this)
//   address_id: deliveryDetails.option === 'delivery' 
//     ? deliveryDetails.address?.id 
//     : selectedStore?.address?.id,
//   // For pickup: send store ID
//   store_id: deliveryDetails.option === 'pickup' ? selectedStore?.id : null,
//   delivery_date: deliveryDetails.schedule?.date,
//   delivery_time_slot: deliveryDetails.schedule?.timeSlot,
//   payment_method: paymentMethod,
//   basket_items: basket.items.map(item => ({
//     product_id: item.product_id,
//     quantity: item.quantity
//   })),
//   customer_email: user?.email || 'customer@salesnet.co',
//   customer_phone: user?.phone || deliveryDetails.address?.phone_number || selectedStore?.phone
// };
//       console.log('Order data being sent:', orderData); // Debug log

// FIXED: Prepare order data with proper store handling
      const orderData = {
        delivery_option: deliveryDetails.option,
        // For both delivery and pickup, use address ID from the address object
        address_id: deliveryDetails.address?.id,
        // For pickup: include store ID
        store_id: deliveryDetails.option === 'pickup' && selectedStore ? selectedStore.id : null,
        delivery_date: deliveryDetails.schedule?.date,
        delivery_time_slot: deliveryDetails.schedule?.timeSlot,
        payment_method: paymentMethod,
        basket_items: basket.items.map(item => ({
          product_id: item.product_id,
          quantity: item.quantity
        })),
        customer_email: user?.email || 'customer@salesnet.co',
        // Use store phone for pickup, address phone for delivery, or user phone as fallback
        customer_phone: deliveryDetails.option === 'pickup' && selectedStore?.phone 
          ? selectedStore.phone 
          : deliveryDetails.address?.phone_number || user?.phone
      };

      // console.log('Order data being sent:', orderData);
      console.log('Order data:', {
  address_id: orderData.address_id,
  store_id: orderData.store_id,
  // ... other fields
});


      // Create order first
      const order = await createOrder(orderData);

      // Process payment based on selected method
      if (paymentMethod === 'pay_on_delivery') {
        navigate('/checkout/success', { 
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

  // Process payment based on selected method
  const processPaymentMethod = async (order: any) => {
    const amount = order.total;
    const customerEmail = order.customerEmail;
    const customerPhone = deliveryDetails.address?.phone_number || selectedStore?.phone;

    switch (paymentMethod) {
      case 'paypal':
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
          amount: amount * 100,
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

  // FIXED: Updated address display logic
  // const formatDisplayAddress = (address: any) => {
  //   if (deliveryDetails.option === 'pickup' && selectedStore) {
  //     // For pickup, show store name and address
  //     const storeAddress = selectedStore.address || address;
  //     return `${selectedStore.name}, ${storeAddress?.street_address || 'Address not available'}, ${storeAddress?.city?.name || storeAddress?.city || 'City not available'}`;
  //   }
    
  //   if (!address) return '';
    
  //   // For delivery, show user address
  //   return `${address.street_address}, ${address.city?.name || address.city}${
  //     address.state ? `, ${address.state.name}` : ''
  //   }${address.zip_code ? `, ${address.zip_code}` : ''}${
  //     address?.state?.country ? `, ${address?.state?.country.name}` : ''
  //   }`;
  // };

  // FIXED: Updated address display logic
  const formatDisplayAddress = (address: any) => {
    if (deliveryDetails.option === 'pickup' && selectedStore) {
      // For pickup, show store name and address
      return `${selectedStore.name}, ${address?.street_address || 'Address not available'}, ${address?.city?.name || address?.city || 'City not available'}`;
    }
    
    if (!address) return '';
    
    // For delivery, show user address
    return `${address.street_address}, ${address.city?.name || address.city}${
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

  // FIXED: Updated validation logic
  const canPlaceOrder = () => {
    const hasAddress = deliveryDetails.option === 'delivery' 
      ? !!deliveryDetails.address 
      : !!selectedStore;
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
                {(deliveryDetails.address || selectedStore) ? (
                  <div className="d-flex flex-column fs-sm text-dark-emphasis me-3">
                    <div className="d-flex align-items-center">
                      <i className="ci-map-pin fs-base text-primary me-2" />
                      <span>{formatDisplayAddress(deliveryDetails.address)}</span>
                    </div>

                    {/* Show phone number from appropriate source */}
                    {/* {((deliveryDetails.option === 'pickup' && selectedStore?.phone) || 
                      (deliveryDetails.option === 'delivery' && deliveryDetails.address?.phone_number)) && (
                      <div className="text-muted ms-4 mt-1">
                        Phone: {deliveryDetails.option === 'pickup' 
                          ? selectedStore?.phone 
                          : deliveryDetails.address?.phone_number}
                      </div>
                    )} */}
                    {deliveryDetails.option === 'pickup' && selectedStore?.phone && (
                        <div className="text-muted ms-4 mt-1">
                          Phone: {selectedStore.phone}
                        </div>
                      )}
                      {deliveryDetails.option === 'delivery' && deliveryDetails.address?.phone_number && (
                        <div className="text-muted ms-4 mt-1">
                          Phone: {deliveryDetails.address.phone_number}
                        </div>
                      )}
                  </div>
                ) : (
                  <div className="text-muted">
                    No {deliveryDetails.option === 'delivery' ? 'address' : 'location'} selected
                  </div>
                )}
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