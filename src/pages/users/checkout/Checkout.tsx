
// // v11 - Corrected Payment Verification
// import React, { useState, useEffect, useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';
// import DeliveryDateOffCanvas from './DeliveryDateOffCanvas';
// import DeliveryOptionsOffCanvas from './DeliveryOptionsOffCanvas';
// import { useOrder } from '../../../hooks/useOrder';
// // import { usePayment, usePaymentVerification } from '../../../hooks/usePayment';
// import { useBasket } from '../../../hooks/useBasket';
// import { NotificationService } from '../../../services/local/NotificationService';
// import Breadcrumb from '../../../components/shared/Breadcrumb';
// import OrderSummary from '../shared/OrderSummary';
// import { paymentConfig } from '../../../utils/env';
// import { useAuth } from '../../../context/AuthContext';
// import { AxiosAddressesService } from '../../../services/net/AxiosAddressesService';
// import { usePaymentScripts } from '../../../hooks/usePaymentScripts';
// import { usePaymentVerification } from '../../../hooks/usePaymentVerification';
// import { AxiosService } from '../../../services/net/base/AxiosService';
// import { calculateDeliveryCost } from '../../../services/users/deliveryService';

// const Checkout = () => {
//   const navigate = useNavigate();
//   const { basket, loading: basketLoading } = useBasket();
//   const { user } = useAuth();
//   const [paymentMethod, setPaymentMethod] = useState('flutterwave');
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [addresses, setAddresses] = useState<any[]>([]);
//   const [stores, setStores] = useState<any[]>([]);
//   const [selectedStore, setSelectedStore] = useState<any>(null);
//   const [addressesLoading, setAddressesLoading] = useState(true);

//   const [isPaymentLocked, setIsPaymentLocked] = useState(false);
//   const [lockReason, setLockReason] = useState('');

//   // const { processPayment, verifyPayment } = usePayment();
//   const { verifyPayment, isLoading, error } = usePaymentVerification();
//   const { createOrder } = useOrder();

//   // Payment script management
//   const {
//     scriptsLoaded,
//     ensureScriptLoaded,
//     isScriptLoading,
//     scriptLoadError
//   } = usePaymentScripts();

//   // Always include schedule for both delivery and pickup
//   const [deliveryDetails, setDeliveryDetails] = useState<{
//     address: any | null;
//     schedule: { date: string; timeSlot: string } | null;
//     option: 'delivery' | 'pickup';
//   }>({
//     address: null,
//     schedule: null,
//     option: 'delivery',
//   });

//   // DELIVERY COSTS CALC - 07-10-24
//   const [deliveryCost, setDeliveryCost] = useState(0);
//   const [deliveryLoading, setDeliveryLoading] = useState(false);
//   const [deliveryError, setDeliveryError] = useState<string | null>(null);

//   // Calculate delivery cost when address changes
//   useEffect(() => {
//     if (deliveryDetails.option === 'delivery' && 
//         deliveryDetails.address && 
//         basket?.items?.length > 0) {
//       calculateDelivery();
//     } else {
//       setDeliveryCost(0);
//     }
//   }, [deliveryDetails, basket]);

//   const calculateDelivery = async () => {
//     setDeliveryLoading(true);
//     setDeliveryError(null);
    
//     try {
//       // Group items by vendor
//       const vendorGroups = basket.items.reduce((groups, item) => {
//         const vendorId = item.vendorId;
//         if (!groups[vendorId]) groups[vendorId] = [];
//         groups[vendorId].push(item);
//         return groups;
//       }, {});

//       // Calculate cost per vendor
//       let totalCost = 0;
      
//       for (const vendorId in vendorGroups) {
//         const vendor = await getVendorDetails(vendorId);
//         const vendorCost = await calculateDeliveryCost(
//           {
//             lat: vendor.latitude,
//             lng: vendor.longitude,
//             zone: vendor.zone,
//             country: vendor.country
//           },
//           {
//             lat: deliveryDetails.address.latitude,
//             lng: deliveryDetails.address.longitude,
//             zone: deliveryDetails.address.zone,
//             country: deliveryDetails.address.city.state?.country?.name || 'Nigeria'
//           },
//           vendorGroups[vendorId]
//         );
//         totalCost += vendorCost;
//       }
      
//       setDeliveryCost(totalCost);
//     } catch (error) {
//       setDeliveryError('Could not calculate delivery fees');
//       console.error('Delivery calculation error:', error);
//     } finally {
//       setDeliveryLoading(false);
//     }
//   };

//   const getVendorDetails = async (vendorId: string) => {
//     // Implement API call to fetch vendor details
//     const response = await AxiosService.json.get(`/users/${vendorId}`);
//     return response.data;
//   };
//   // DELIVERY COST ENDS


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

//     // Always set default schedule regardless of delivery option
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

//   // Modified to maintain schedule for both options
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

//   // Modified validation to require schedule for both options
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
//           (deliveryDetails.option === 'pickup' ? selectedStore?.phone : deliveryDetails.address?.phone_number),

//         is_payment_locked: isPaymentLocked,
//         lock_reason: isPaymentLocked ? lockReason : '',
//       };

//       const order = await createOrder(orderData);
//       console.log('Order created:', order);

//       if (paymentMethod === 'pay_on_delivery') {
//         navigate('/users/checkout/success', { 
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
//           await ensureScriptLoaded('paypal');
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

//   // const processPaypalPayment = async (order: any, amount: number, customerEmail: string) => {
//   //   try {
//   //     const paypalResult = await processPaymentMethod({
//   //       orderId: order.id,
//   //       amount,
//   //       paymentMethod: 'paypal',
//   //       customerEmail,
//   //       paymentReference: order.payment_reference
//   //     });
      
//   //     if (paypalResult.success) {
//   //       navigate('/users/checkout/success', { state: { order } });
//   //     } else {
//   //       throw new Error(paypalResult.message || 'PayPal payment failed');
//   //     }
//   //   } catch (error) {
//   //     console.error('PayPal payment error:', error);
//   //     throw error;
//   //   }
//   // };

//   // Replace the processPaypalPayment function with this corrected version:

// const processPaypalPayment = async (order: any, amount: number, customerEmail: string) => {
//   try {
//     // You need to implement actual PayPal payment processing here
//     // This should integrate with your PayPal SDK or API
    
//     // Example using PayPal JavaScript SDK (you'll need to adapt this to your setup):
//     if (typeof window !== 'undefined' && (window as any).paypal) {
//       return new Promise<void>((resolve, reject) => {
//         (window as any).paypal.Buttons({
//           createOrder: (_: any, actions: any) => {
//             return actions.order.create({
//               purchase_units: [{
//                 amount: {
//                   value: amount.toString(),
//                   currency_code: 'NGN' // or your preferred currency
//                 },
//                 reference_id: order.payment_reference
//               }]
//             });
//           },
          
//           onApprove: async (_: any, actions: any) => {
//             try {
//               const details = await actions.order.capture();
//               console.log('PayPal payment completed:', details);
              
//               // Verify payment with your backend
//               const verificationResult = await verifyPayment({
//                 paymentMethod: 'paypal',
//                 transactionId: details.id,
//                 paymentReference: order.payment_reference,
//                 orderId: order.id
//               });

//               if (verificationResult.success) {
//                 navigate('/users/checkout/success', { 
//                   state: { 
//                     order: { ...order, paymentStatus: 'completed' },
//                     paymentData: verificationResult.data 
//                   } 
//                 });
//                 resolve();
//               } else {
//                 throw new Error(verificationResult.message || 'Payment verification failed');
//               }
//             } catch (error) {
//               console.error('PayPal verification error:', error);
//               NotificationService.showDialog(
//                 error instanceof Error ? error.message : 'Payment verification failed'
//               );
//               reject(error);
//             }
//           },
          
//           onError: (err: any) => {
//             console.error('PayPal payment error:', err);
//             NotificationService.showDialog('PayPal payment failed');
//             reject(new Error('PayPal payment failed'));
//           },
          
//           onCancel: () => {
//             setIsProcessing(false);
//             NotificationService.showDialog('Payment cancelled', 'info');
//             reject(new Error('Payment cancelled by user'));
//           }
//         }).render('#paypal-button-container'); // You'll need a container in your JSX
//       });
//     } else {
//       // Alternative: Direct API call to my backend for PayPal processing
//       // const paypalResult = await fetch('/payments/paypal/process', {
//       //   method: 'POST',
//       //   headers: {
//       //     'Content-Type': 'application/json',
//       //     'Authorization': `Bearer ${localStorage.getItem('token')}` // if using auth
//       //   },
//       //   body: JSON.stringify({
//       //     orderId: order.id,
//       //     amount,
//       //     customerEmail,
//       //     paymentReference: order.payment_reference
//       //   })
//       // });
//       const paypalResult = await AxiosService.json.post('/payments/paypal/process', JSON.stringify({
//           orderId: order.id,
//           amount,
//           customerEmail,
//           paymentReference: order.payment_reference
//         })
//       );
      
//       // const result = await paypalResult.json();
//       const result = paypalResult;
      
//       if (result.success) {
//         // If your backend handles the full PayPal flow and returns success
//         navigate('/users/checkout/success', { 
//           state: { 
//             order: { ...order, paymentStatus: 'completed' },
//             paymentData: result.data 
//           } 
//         });
//       } else {
//         throw new Error(result.message || 'PayPal payment failed');
//       }
//     }
//   } catch (error) {
//     console.error('PayPal payment error:', error);
//     throw error;
//   }
// };

//   // const processPaystackPayment = async (order: any, amount: number, customerEmail: string) => {
//   //   if (!scriptsLoaded.paystack) { 
//   //     throw new Error('Paystack payment system not available');
//   //   }

//   //   return new Promise<void>((resolve, reject) => {
//   //     const handler = (window as any).PaystackPop.setup({
//   //       key: paymentConfig.paystack.publicKey,
//   //       email: customerEmail,
//   //       amount: amount * 100, // Convert to kobo
//   //       currency: 'NGN',
//   //       reference: order.payment_reference,
        
//   //       onClose: () => {
//   //         setIsProcessing(false);
//   //         NotificationService.showDialog('Payment cancelled', 'info');
//   //         reject(new Error('Payment cancelled by user'));
//   //       },

//   //       callback: async (response: any) => {
//   //         try {
//   //           console.log('Paystack callback response:', response);
            
//   //           // Verify payment with backend
//   //           const verificationResult = await verifyPayment({
//   //             paymentMethod: 'paystack',
//   //             transactionId: response.reference, // Paystack uses reference as transaction ID
//   //             paymentReference: order.payment_reference,
//   //             orderId: order.id
//   //           });

//   //           if (verificationResult.success) {
//   //             navigate('/checkout/success', { 
//   //               state: { 
//   //                 order: { ...order, paymentStatus: 'completed' },
//   //                 paymentData: verificationResult.data 
//   //               } 
//   //             });
//   //             resolve();
//   //           } else {
//   //             throw new Error(verificationResult.message || 'Payment verification failed');
//   //           }
//   //         } catch (error) {
//   //           console.error('Paystack verification error:', error);
//   //           NotificationService.showDialog(
//   //             error instanceof Error ? error.message : 'Payment verification failed'
//   //           );
//   //           reject(error);
//   //         }
//   //       }
//   //     });
      
//   //     handler.openIframe();
//   //   });
//   // };

//   const processPaystackPayment = async (order: any, amount: number, customerEmail: string) => {
//   if (!scriptsLoaded.paystack) { 
//     throw new Error('Paystack payment system not available');
//   }

//   return new Promise<void>((resolve, reject) => {
//     // Create a synchronous callback wrapper
//     const callback = (response: any) => {
//       (async () => {
//         try {
//           // console.log('Paystack callback response:', response);
          
//           // Verify payment with backend
//           const verificationResult = await verifyPayment({
//             paymentMethod: 'paystack',
//             transactionId: response.reference,
//             paymentReference: order.payment_reference,
//             orderId: order.id
//           });

//           if (verificationResult.success) {
//             navigate('/users/checkout/success', { 
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
//       })();
//     };

//     const handler = (window as any).PaystackPop.setup({
//       // key: paymentConfig.paystack.publicKey,
//       // email: customerEmail,
//       // amount: amount * 100,
//       // currency: 'NGN',
//       // reference: order.payment_reference,

//       key: paymentConfig.paystack.publicKey,
//       email: customerEmail,
//       amount: amount * 100,
//       currency: 'NGN',
//       reference: order.payment_reference,
//       metadata: {
//         merchant_reference: order.payment_reference,  // Add this line
//         order_id: order.id,
//         customer_email: customerEmail
//       },
//       onClose: () => {
//         setIsProcessing(false);
//         NotificationService.showDialog('Payment cancelled', 'info');
//         reject(new Error('Payment cancelled by user'));
//       },
//       callback // Pass the synchronous wrapper
//     });
    
//     handler.openIframe();
//   });
// };


//   // const processFlutterwavePayment = async (
//   //   order: any, 
//   //   amount: number, 
//   //   customerEmail: string, 
//   //   customerPhone: string
//   // ) => {
//   //   if (!scriptsLoaded.flutterwave) {
//   //     throw new Error('Flutterwave payment system not available');
//   //   }

//   //   return new Promise<void>((resolve, reject) => {
//   //     (window as any).FlutterwaveCheckout({
//   //       public_key: paymentConfig.flutterwave.publicKey,
//   //       tx_ref: order.payment_reference,
//   //       amount,
//   //       currency: 'NGN',
//   //       customer: {
//   //         email: customerEmail,
//   //         phone_number: customerPhone,
//   //         name: user?.full_name || 'Customer'
//   //       },
//   //       customizations: {
//   //         title: 'Order Payment - 3D Payment Security.',
//   //         description: `Payment for order #${order.id}`,
//   //         logo: '/assets/img/logo.png'
//   //       },
//   //       metadata: {
//   //         merchant_reference: order.payment_reference,  // Add this line
//   //         order_id: order.id,
//   //         customer_email: customerEmail
//   //       },
//   //       //
          
//   //       callback: async (response: any) => {
//   //         try {
//   //           console.log('Flutterwave callback response:', response);
            
//   //           // Verify payment with backend
//   //           const verificationResult = await verifyPayment({
//   //             paymentMethod: 'flutterwave',
//   //             transactionId: response.transaction_id,
//   //             paymentReference: order.payment_reference,
//   //             orderId: order.id
//   //           });

//   //           console.log(`verificationResult ${verificationResult}`)

//   //         //    const verificationResult = await verifyPayment({
//   //         //   paymentMethod: 'paystack',
//   //         //   transactionId: response.reference,
//   //         //   paymentReference: order.payment_reference,
//   //         //   orderId: order.id
//   //         // });

//   //           if (verificationResult.success) {
//   //             navigate('/users/checkout/success', { 
//   //               state: { 
//   //                 order: { ...order, paymentStatus: 'completed' },
//   //                 paymentData: verificationResult.data 
//   //               } 
//   //             });
//   //             resolve();
//   //           } else {
//   //             throw new Error(verificationResult.message || 'Payment verification failed');
//   //           }
//   //         } catch (error) {
//   //           console.error('Flutterwave verification error:', error);
//   //           NotificationService.showDialog(
//   //             error instanceof Error ? error.message : 'Payment verification failed'
//   //           );
//   //           reject(error);
//   //         }
//   //       },
        
//   //       onclose: () => {
//   //         setIsProcessing(false);
//   //         NotificationService.showDialog('Payment cancelled', 'info');
//   //         reject(new Error('Payment cancelled by user'));
//   //       },
//   //     });
//   //   });
//   // };

//   const processFlutterwavePayment = async (
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
//         merchant_reference: order.payment_reference,
//         order_id: order.id,
//         customer_email: customerEmail
//       },
      
//       callback: async (response: any) => {
//         try {

//           console.log('Flutterwave callback response:', response);
          
//           // Use flw_ref for verification instead of transaction_id
//           const verificationResult = await verifyPayment({
//             paymentMethod: 'flutterwave',
//             transactionId: response.transaction_id,  // Changed to flw_ref
//             paymentReference: order.payment_reference,
//             // paymentReference: response.transaction_id,
//             orderId: order.id
//           });

//           console.log(` Flutterwave verificationResult - ${verificationResult}`)

//           if (verificationResult.success) {
//             navigate('/users/checkout/success', { 
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
//         amount,
//         currency: 'NGN',
//         callbackUrl: `${window.location.origin}/checkout/callback`,
//         customerEmail,
//         customerPhone,
//         customerName: user?.full_name || 'Customer',
        
//         onSuccess: async (response: any) => {
//           try {
//             console.log('OPay success response:', response);
            
//             // Verify payment with backend
//             const verificationResult = await verifyPayment({
//               paymentMethod: 'opay',
//               transactionId: response.reference || response.transaction_id,
//               paymentReference: order.payment_reference,
//               orderId: order.id
//             });

//             if (verificationResult.success) {
//               navigate('/users/checkout/success', { 
//                 state: { 
//                   order: { ...order, paymentStatus: 'completed' },
//                   paymentData: verificationResult.data 
//                 } 
//               });
//               resolve();
//             } else {
//               throw new Error(verificationResult.message || 'Payment verification failed');
//             }
//           } catch (error) {
//             console.error('OPay verification error:', error);
//             NotificationService.showDialog(
//               error instanceof Error ? error.message : 'Payment verification failed'
//             );
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

//   // Modified validation to always require schedule
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
//             { label: 'User', path: '/users/personal' },
//             { label: 'Basket', path: '/users/basket' },
//             { label: 'Checkout', path: `/users/checkout` }
//           ]} 
//         />
                
//         <section className="container pb-5 mb-2 mb-md-3 mb-lg-4 mb-xl-5 ">
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

//               <h2 className="h5 mb-4 - border-top pt-3">
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

//               <h2 className="h5 mt-5 mb-4 - mt-4 border-top pt-3">Payment method</h2>
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
//                       disabled={isScriptLoading('paypal') || scriptLoadError.paypal }
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

//                 {/* Payment Locking Feature */}
//                 {paymentMethod !== 'pay_on_delivery' && (
//                   <div className="mt-4 border-top pt-3">
//                     <h3 className="h6 mb-3">Payment Security</h3>
//                     <div className="form-check form-switch">
//                       <input
//                         className="form-check-input"
//                         type="checkbox"
//                         id="lockPayment"
//                         checked={isPaymentLocked}
//                         onChange={() => setIsPaymentLocked(!isPaymentLocked)}
//                       />
                      
//                       <label className="form-check-label" htmlFor="lockPayment">
//                         <span className="d-flex align-items-center">
//                           {/* <i className="ci-shield-check text-success me-2" /> */}
//                           <i className="ci-check-shield text-success me-2"></i>
//                           Lock this payment
//                         </span>
//                         <small className="form-text text-muted">
//                           <i className="ci-info text-warning me-2"></i> Funds will be held securely until you release them to the seller
//                         </small>
//                       </label>
//                     </div>
                    
//                     {isPaymentLocked && (
//                       <div className="mt-3 animate-fade-in">
//                         <label htmlFor="lockReason" className="form-label small">
//                           Why are you locking this payment? (Optional)
//                         </label>
//                         <textarea
//                           id="lockReason"
//                           className="form-control form-control-sm"
//                           rows={2}
//                           placeholder="e.g., I want to inspect goods before release"
//                           value={lockReason}
//                           onChange={(e) => setLockReason(e.target.value)}
//                         />
//                       </div>
//                     )}
//                   </div>
//                 )}
  
//               </div>
              
//             </div>

//             {!basketLoading && basket && (
//               <OrderSummary
//                 context="checkout"
//                 itemCount={basket?.itemCount || 0}
//                 subtotal={basket?.subtotal || 0}
//                 // total={basket?.estimatedTotal || basket?.subtotal}

//                 // 
//                 deliveryFee={deliveryCost}
//                 total={(basket?.subtotal || 0) + deliveryCost}
//                 // 
//                 discount={basket?.savings || 0}
//                 // deliveryFee={0}
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


// v12 - Fixed Vendor Details & Optimized Multi-Vendor Delivery
// import React, { useState, useEffect, useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';
// import DeliveryDateOffCanvas from './DeliveryDateOffCanvas';
// import DeliveryOptionsOffCanvas from './DeliveryOptionsOffCanvas';
// import { useOrder } from '../../../hooks/useOrder';
// import { useBasket } from '../../../hooks/useBasket';
// import { NotificationService } from '../../../services/local/NotificationService';
// import Breadcrumb from '../../../components/shared/Breadcrumb';
// import OrderSummary from '../shared/OrderSummary';
// import { paymentConfig } from '../../../utils/env';
// import { useAuth } from '../../../context/AuthContext';
// import { AxiosAddressesService } from '../../../services/net/AxiosAddressesService';
// import { usePaymentScripts } from '../../../hooks/usePaymentScripts';
// import { usePaymentVerification } from '../../../hooks/usePaymentVerification';
// import { AxiosService } from '../../../services/net/base/AxiosService';
// import { calculateDeliveryCost } from '../../../services/users/deliveryService';

// const Checkout = () => {
//   const navigate = useNavigate();
//   const { basket, loading: basketLoading } = useBasket();
//   const { user } = useAuth();
//   const [paymentMethod, setPaymentMethod] = useState('flutterwave');
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [addresses, setAddresses] = useState<any[]>([]);
//   const [stores, setStores] = useState<any[]>([]);
//   const [selectedStore, setSelectedStore] = useState<any>(null);
//   const [addressesLoading, setAddressesLoading] = useState(true);
//   const [isPaymentLocked, setIsPaymentLocked] = useState(false);
//   const [lockReason, setLockReason] = useState('');

//   const { verifyPayment } = usePaymentVerification();
//   const { createOrder } = useOrder();

//   const {
//     scriptsLoaded,
//     ensureScriptLoaded,
//     isScriptLoading,
//     scriptLoadError
//   } = usePaymentScripts();

//   const [deliveryDetails, setDeliveryDetails] = useState<{
//     address: any | null;
//     schedule: { date: string; timeSlot: string } | null;
//     option: 'delivery' | 'pickup';
//   }>({
//     address: null,
//     schedule: null,
//     option: 'delivery',
//   });

//   // DELIVERY COSTS CALC - IMPROVED MULTI-VENDOR HANDLING
//   const [deliveryCost, setDeliveryCost] = useState(0);
//   const [deliveryLoading, setDeliveryLoading] = useState(false);
//   const [deliveryError, setDeliveryError] = useState<string | null>(null);

//   // Calculate delivery cost when address changes
//   useEffect(() => {
//     if (deliveryDetails.option === 'delivery' && 
//         deliveryDetails.address && 
//         basket?.items?.length > 0) {
//       calculateDelivery();
//     } else {
//       setDeliveryCost(0);
//     }
//   }, [deliveryDetails, basket]);

//   const calculateDelivery = async () => {
//     setDeliveryLoading(true);
//     setDeliveryError(null);
    
//     try {
//       // Group items by vendor with proper vendor ID handling
//       const vendorGroups = basket.items.reduce((groups, item) => {
//         // Use page_id OR user_id as vendor identifier
//         const vendorId = item.page_id || item.user_id;
        
//         if (!vendorId) {
//           console.warn("Item missing vendor identifier:", item);
//           return groups;
//         }
        
//         if (!groups[vendorId]) groups[vendorId] = [];
//         groups[vendorId].push(item);
//         return groups;
//       }, {});

//       let totalCost = 0;
//       let vendorCount = 0;
      
//       for (const vendorId in vendorGroups) {
//         try {
//           const vendor = await getVendorDetails(vendorId);
//           vendorCount++;
          
//           const vendorCost = await calculateDeliveryCost(
//             {
//               lat: vendor.latitude,
//               lng: vendor.longitude,
//               zone: vendor.zone,
//               country: vendor.country
//             },
//             {
//               lat: deliveryDetails.address.latitude,
//               lng: deliveryDetails.address.longitude,
//               zone: deliveryDetails.address.zone,
//               country: deliveryDetails.address.city.state?.country?.name || 'Nigeria'
//             },
//             vendorGroups[vendorId]
//           );
//           totalCost += vendorCost;
//         } catch (vendorError) {
//           console.error(`Error calculating delivery for vendor ${vendorId}:`, vendorError);
//           // Continue with other vendors if one fails
//         }
//       }
      
//       if (vendorCount === 0) {
//         throw new Error('No valid vendors found for delivery calculation');
//       }
      
//       setDeliveryCost(totalCost);
//     } catch (error) {
//       setDeliveryError('Could not calculate delivery fees');
//       console.error('Delivery calculation error:', error);
//     } finally {
//       setDeliveryLoading(false);
//     }
//   };

//   const getVendorDetails = async (vendorId: string) => {
//     try {
//       const response = await AxiosService.json.get(`/users/${vendorId}`);
//       if (!response.data) {
//         throw new Error(`Vendor ${vendorId} not found`);
//       }
//       return response.data;
//     } catch (error) {
//       console.error(`Failed to fetch vendor ${vendorId}:`, error);
//       throw new Error(`Vendor details unavailable for ${vendorId}`);
//     }
//   };

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

//   useEffect(() => {
//     fetchAddresses();

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
    
//     if (method === 'paystack') {
//       await ensureScriptLoaded('paystack');
//     } else if (method === 'flutterwave') {
//       await ensureScriptLoaded('flutterwave');
//     } else if (method === 'opay') {
//       await ensureScriptLoaded('opay');
//     }
//   };

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
//           (deliveryDetails.option === 'pickup' ? selectedStore?.phone : deliveryDetails.address?.phone_number),
//         is_payment_locked: isPaymentLocked,
//         lock_reason: isPaymentLocked ? lockReason : '',
//       };

//       const order = await createOrder(orderData);
//       console.log('Order created:', order);

//       if (paymentMethod === 'pay_on_delivery') {
//         navigate('/users/checkout/success', { 
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
//           await ensureScriptLoaded('paypal');
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
//     try {
//       const paypalResult = await AxiosService.json.post('/payments/paypal/process', JSON.stringify({
//           orderId: order.id,
//           amount,
//           customerEmail,
//           paymentReference: order.payment_reference
//         })
//       );
      
//       const result = paypalResult;
      
//       if (result.success) {
//         navigate('/users/checkout/success', { 
//           state: { 
//             order: { ...order, paymentStatus: 'completed' },
//             paymentData: result.data 
//           } 
//         });
//       } else {
//         throw new Error(result.message || 'PayPal payment failed');
//       }
//     } catch (error) {
//       console.error('PayPal payment error:', error);
//       throw error;
//     }
//   };

//   const processPaystackPayment = async (order: any, amount: number, customerEmail: string) => {
//     if (!scriptsLoaded.paystack) { 
//       throw new Error('Paystack payment system not available');
//     }

//     return new Promise<void>((resolve, reject) => {
//       const callback = (response: any) => {
//         (async () => {
//           try {
//             const verificationResult = await verifyPayment({
//               paymentMethod: 'paystack',
//               transactionId: response.reference,
//               paymentReference: order.payment_reference,
//               orderId: order.id
//             });

//             if (verificationResult.success) {
//               navigate('/users/checkout/success', { 
//                 state: { 
//                   order: { ...order, paymentStatus: 'completed' },
//                   paymentData: verificationResult.data 
//                 } 
//               });
//               resolve();
//             } else {
//               throw new Error(verificationResult.message || 'Payment verification failed');
//             }
//           } catch (error) {
//             console.error('Paystack verification error:', error);
//             NotificationService.showDialog(
//               error instanceof Error ? error.message : 'Payment verification failed'
//             );
//             reject(error);
//           }
//         })();
//       };

//       const handler = (window as any).PaystackPop.setup({
//         key: paymentConfig.paystack.publicKey,
//         email: customerEmail,
//         amount: amount * 100,
//         currency: 'NGN',
//         reference: order.payment_reference,
//         metadata: {
//           merchant_reference: order.payment_reference,
//           order_id: order.id,
//           customer_email: customerEmail
//         },
//         onClose: () => {
//           setIsProcessing(false);
//           NotificationService.showDialog('Payment cancelled', 'info');
//           reject(new Error('Payment cancelled by user'));
//         },
//         callback
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
//         tx_ref: order.payment_reference,
//         amount,
//         currency: 'NGN',
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
//         metadata: {
//           merchant_reference: order.payment_reference,
//           order_id: order.id,
//           customer_email: customerEmail
//         },
        
//         callback: async (response: any) => {
//           try {
//             const verificationResult = await verifyPayment({
//               paymentMethod: 'flutterwave',
//               transactionId: response.transaction_id,
//               paymentReference: order.payment_reference,
//               orderId: order.id
//             });

//             if (verificationResult.success) {
//               navigate('/users/checkout/success', { 
//                 state: { 
//                   order: { ...order, paymentStatus: 'completed' },
//                   paymentData: verificationResult.data 
//                 } 
//               });
//               resolve();
//             } else {
//               throw new Error(verificationResult.message || 'Payment verification failed');
//             }
//           } catch (error) {
//             console.error('Flutterwave verification error:', error);
//             NotificationService.showDialog(
//               error instanceof Error ? error.message : 'Payment verification failed'
//             );
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
//         amount,
//         currency: 'NGN',
//         callbackUrl: `${window.location.origin}/checkout/callback`,
//         customerEmail,
//         customerPhone,
//         customerName: user?.full_name || 'Customer',
        
//         onSuccess: async (response: any) => {
//           try {
//             const verificationResult = await verifyPayment({
//               paymentMethod: 'opay',
//               transactionId: response.reference || response.transaction_id,
//               paymentReference: order.payment_reference,
//               orderId: order.id
//             });

//             if (verificationResult.success) {
//               navigate('/users/checkout/success', { 
//                 state: { 
//                   order: { ...order, paymentStatus: 'completed' },
//                   paymentData: verificationResult.data 
//                 } 
//               });
//               resolve();
//             } else {
//               throw new Error(verificationResult.message || 'Payment verification failed');
//             }
//           } catch (error) {
//             console.error('OPay verification error:', error);
//             NotificationService.showDialog(
//               error instanceof Error ? error.message : 'Payment verification failed'
//             );
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
//             { label: 'User', path: '/users/personal' },
//             { label: 'Basket', path: '/users/basket' },
//             { label: 'Checkout', path: `/users/checkout` }
//           ]} 
//         />
                
//         <section className="container pb-5 mb-2 mb-md-3 mb-lg-4 mb-xl-5 ">
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

//               <h2 className="h5 mb-4 border-top pt-3">
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

//               <h2 className="h5 mt-5 mb-4 border-top pt-3">Payment method</h2>
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
//                       disabled={isScriptLoading('paypal') || scriptLoadError.paypal }
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

//                 {/* Payment Locking Feature */}
//                 {paymentMethod !== 'pay_on_delivery' && (
//                   <div className="mt-4 border-top pt-3">
//                     <h3 className="h6 mb-3">Payment Security</h3>
//                     <div className="form-check form-switch">
//                       <input
//                         className="form-check-input"
//                         type="checkbox"
//                         id="lockPayment"
//                         checked={isPaymentLocked}
//                         onChange={() => setIsPaymentLocked(!isPaymentLocked)}
//                       />
                      
//                       <label className="form-check-label" htmlFor="lockPayment">
//                         <span className="d-flex align-items-center">
//                           <i className="ci-check-shield text-success me-2"></i>
//                           Lock this payment
//                         </span>
//                         <small className="form-text text-muted">
//                           <i className="ci-info text-warning me-2"></i> Funds will be held securely until you release them to the seller
//                         </small>
//                       </label>
//                     </div>
                    
//                     {isPaymentLocked && (
//                       <div className="mt-3 animate-fade-in">
//                         <label htmlFor="lockReason" className="form-label small">
//                           Why are you locking this payment? (Optional)
//                         </label>
//                         <textarea
//                           id="lockReason"
//                           className="form-control form-control-sm"
//                           rows={2}
//                           placeholder="e.g., I want to inspect goods before release"
//                           value={lockReason}
//                           onChange={(e) => setLockReason(e.target.value)}
//                         />
//                       </div>
//                     )}
//                   </div>
//                 )}
  
//               </div>
              
//             </div>

//             {!basketLoading && basket && (
//               <OrderSummary
//                 context="checkout"
//                 itemCount={basket?.itemCount || 0}
//                 subtotal={basket?.subtotal || 0}
//                 deliveryFee={deliveryCost}
//                 total={(basket?.subtotal || 0) + deliveryCost}
//                 discount={basket?.savings || 0}
//                 qualifiesForFreeShipping={deliveryDetails.option === 'delivery' && deliveryCost === 0}
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

// v12 - Fixed Vendor Details & Optimized Multi-Vendor Delivery

// // v13 - Delivery Cost Fallback Handling
// import React, { useState, useEffect, useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';
// import DeliveryDateOffCanvas from './DeliveryDateOffCanvas';
// import DeliveryOptionsOffCanvas from './DeliveryOptionsOffCanvas';
// import { useOrder } from '../../../hooks/useOrder';
// import { useBasket } from '../../../hooks/useBasket';
// import { NotificationService } from '../../../services/local/NotificationService';
// import Breadcrumb from '../../../components/shared/Breadcrumb';
// import OrderSummary from '../shared/OrderSummary';
// import { paymentConfig } from '../../../utils/env';
// import { useAuth } from '../../../context/AuthContext';
// import { AxiosAddressesService } from '../../../services/net/AxiosAddressesService';
// import { usePaymentScripts } from '../../../hooks/usePaymentScripts';
// import { usePaymentVerification } from '../../../hooks/usePaymentVerification';
// import { AxiosService } from '../../../services/net/base/AxiosService';
// import { calculateDeliveryCost } from '../../../services/users/deliveryService';

// // Fallback delivery cost configuration
// const FALLBACK_DELIVERY_COST_PER_VENDOR = 1500; // NGN
// const FALLBACK_DELIVERY_COST_GLOBAL = 2500; // NGN

// const Checkout = () => {
//   const navigate = useNavigate();
//   const { basket, loading: basketLoading } = useBasket();
//   const { user } = useAuth();
//   const [paymentMethod, setPaymentMethod] = useState('flutterwave');
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [addresses, setAddresses] = useState<any[]>([]);
//   const [stores, setStores] = useState<any[]>([]);
//   const [selectedStore, setSelectedStore] = useState<any>(null);
//   const [addressesLoading, setAddressesLoading] = useState(true);
//   const [isPaymentLocked, setIsPaymentLocked] = useState(false);
//   const [lockReason, setLockReason] = useState('');

//   const { verifyPayment } = usePaymentVerification();
//   const { createOrder } = useOrder();

//   const {
//     scriptsLoaded,
//     ensureScriptLoaded,
//     isScriptLoading,
//     scriptLoadError
//   } = usePaymentScripts();

//   const [deliveryDetails, setDeliveryDetails] = useState<{
//     address: any | null;
//     schedule: { date: string; timeSlot: string } | null;
//     option: 'delivery' | 'pickup';
//   }>({
//     address: null,
//     schedule: null,
//     option: 'delivery',
//   });

//   // DELIVERY COSTS CALC - WITH FALLBACK HANDLING
//   const [deliveryCost, setDeliveryCost] = useState(0);
//   const [deliveryLoading, setDeliveryLoading] = useState(false);
//   const [deliveryError, setDeliveryError] = useState<string | null>(null);

//   // Calculate delivery cost when address changes
//   useEffect(() => {
//     if (deliveryDetails.option === 'delivery' && 
//         deliveryDetails.address && 
//         basket?.items?.length > 0) {
//       calculateDelivery();
//     } else {
//       setDeliveryCost(0);
//     }
//   }, [deliveryDetails, basket]);

//   const calculateDelivery = async () => {
//     setDeliveryLoading(true);
//     setDeliveryError(null);
    
//     try {
//       // Group items by vendor with proper vendor ID handling
//       const vendorGroups = basket.items.reduce((groups, item) => {
//         const vendorId = item.page_id || item.user_id;
        
//         if (!vendorId) {
//           console.warn("Item missing vendor identifier:", item);
//           return groups;
//         }
        
//         if (!groups[vendorId]) groups[vendorId] = [];
//         groups[vendorId].push(item);
//         return groups;
//       }, {});

//       let totalCost = 0;
//       let vendorCount = 0;
//       let fallbackUsed = false;
      
//       for (const vendorId in vendorGroups) {
//         try {
//           const vendor = await getVendorDetails(vendorId);
//           vendorCount++;
          
//           const vendorCost = await calculateDeliveryCost(
//             {
//               lat: vendor.latitude,
//               lng: vendor.longitude,
//               zone: vendor.zone,
//               country: vendor.country
//             },
//             {
//               lat: deliveryDetails.address.latitude,
//               lng: deliveryDetails.address.longitude,
//               zone: deliveryDetails.address.zone,
//               country: deliveryDetails.address.city.state?.country?.name || 'Nigeria'
//             },
//             vendorGroups[vendorId]
//           );
//           totalCost += vendorCost;
//         } catch (vendorError) {
//           console.error(`Error calculating delivery for vendor ${vendorId}:`, vendorError);
//           // Use fallback cost for this vendor group
//           totalCost += FALLBACK_DELIVERY_COST_PER_VENDOR;
//           fallbackUsed = true;
//         }
//       }
      
//       if (vendorCount === 0) {
//         // Use global fallback if no vendors could be processed
//         totalCost = FALLBACK_DELIVERY_COST_GLOBAL;
//         fallbackUsed = true;
//       }
      
//       setDeliveryCost(totalCost);
      
//       if (fallbackUsed) {
//         console.warn("Fallback delivery cost used due to calculation issues");
//       }
//     } catch (error) {
//       setDeliveryError('Could not calculate delivery fees');
//       console.error('Delivery calculation error:', error);
//       // Set fallback global delivery cost as last resort
//       setDeliveryCost(FALLBACK_DELIVERY_COST_GLOBAL);
//     } finally {
//       setDeliveryLoading(false);
//     }
//   };

//   const getVendorDetails = async (vendorId: string) => {
//     try {
//       const response = await AxiosService.json.get(`/users/${vendorId}`);
//       if (!response.data) {
//         throw new Error(`Vendor ${vendorId} not found`);
//       }
//       return response.data;
//     } catch (error) {
//       console.error(`Failed to fetch vendor ${vendorId}:`, error);
//       throw new Error(`Vendor details unavailable for ${vendorId}`);
//     }
//   };

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

//   useEffect(() => {
//     fetchAddresses();

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
    
//     if (method === 'paystack') {
//       await ensureScriptLoaded('paystack');
//     } else if (method === 'flutterwave') {
//       await ensureScriptLoaded('flutterwave');
//     } else if (method === 'opay') {
//       await ensureScriptLoaded('opay');
//     }
//   };

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
//           (deliveryDetails.option === 'pickup' ? selectedStore?.phone : deliveryDetails.address?.phone_number),
//         is_payment_locked: isPaymentLocked,
//         lock_reason: isPaymentLocked ? lockReason : '',
//       };

//       const order = await createOrder(orderData);
//       console.log('Order created:', order);

//       if (paymentMethod === 'pay_on_delivery') {
//         navigate('/users/checkout/success', { 
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
//           await ensureScriptLoaded('paypal');
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
//     try {
//       const paypalResult = await AxiosService.json.post('/payments/paypal/process', JSON.stringify({
//           orderId: order.id,
//           amount,
//           customerEmail,
//           paymentReference: order.payment_reference
//         })
//       );
      
//       const result = paypalResult;
      
//       if (result.success) {
//         navigate('/users/checkout/success', { 
//           state: { 
//             order: { ...order, paymentStatus: 'completed' },
//             paymentData: result.data 
//           } 
//         });
//       } else {
//         throw new Error(result.message || 'PayPal payment failed');
//       }
//     } catch (error) {
//       console.error('PayPal payment error:', error);
//       throw error;
//     }
//   };

//   const processPaystackPayment = async (order: any, amount: number, customerEmail: string) => {
//     if (!scriptsLoaded.paystack) { 
//       throw new Error('Paystack payment system not available');
//     }

//     return new Promise<void>((resolve, reject) => {
//       const callback = (response: any) => {
//         (async () => {
//           try {
//             const verificationResult = await verifyPayment({
//               paymentMethod: 'paystack',
//               transactionId: response.reference,
//               paymentReference: order.payment_reference,
//               orderId: order.id
//             });

//             if (verificationResult.success) {
//               navigate('/users/checkout/success', { 
//                 state: { 
//                   order: { ...order, paymentStatus: 'completed' },
//                   paymentData: verificationResult.data 
//                 } 
//               });
//               resolve();
//             } else {
//               throw new Error(verificationResult.message || 'Payment verification failed');
//             }
//           } catch (error) {
//             console.error('Paystack verification error:', error);
//             NotificationService.showDialog(
//               error instanceof Error ? error.message : 'Payment verification failed'
//             );
//             reject(error);
//           }
//         })();
//       };

//       const handler = (window as any).PaystackPop.setup({
//         key: paymentConfig.paystack.publicKey,
//         email: customerEmail,
//         amount: amount * 100,
//         currency: 'NGN',
//         reference: order.payment_reference,
//         metadata: {
//           merchant_reference: order.payment_reference,
//           order_id: order.id,
//           customer_email: customerEmail
//         },
//         onClose: () => {
//           setIsProcessing(false);
//           NotificationService.showDialog('Payment cancelled', 'info');
//           reject(new Error('Payment cancelled by user'));
//         },
//         callback
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
//         tx_ref: order.payment_reference,
//         amount,
//         currency: 'NGN',
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
//         metadata: {
//           merchant_reference: order.payment_reference,
//           order_id: order.id,
//           customer_email: customerEmail
//         },
        
//         callback: async (response: any) => {
//           try {
//             const verificationResult = await verifyPayment({
//               paymentMethod: 'flutterwave',
//               transactionId: response.transaction_id,
//               paymentReference: order.payment_reference,
//               orderId: order.id
//             });

//             if (verificationResult.success) {
//               navigate('/users/checkout/success', { 
//                 state: { 
//                   order: { ...order, paymentStatus: 'completed' },
//                   paymentData: verificationResult.data 
//                 } 
//               });
//               resolve();
//             } else {
//               throw new Error(verificationResult.message || 'Payment verification failed');
//             }
//           } catch (error) {
//             console.error('Flutterwave verification error:', error);
//             NotificationService.showDialog(
//               error instanceof Error ? error.message : 'Payment verification failed'
//             );
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
//         amount,
//         currency: 'NGN',
//         callbackUrl: `${window.location.origin}/checkout/callback`,
//         customerEmail,
//         customerPhone,
//         customerName: user?.full_name || 'Customer',
        
//         onSuccess: async (response: any) => {
//           try {
//             const verificationResult = await verifyPayment({
//               paymentMethod: 'opay',
//               transactionId: response.reference || response.transaction_id,
//               paymentReference: order.payment_reference,
//               orderId: order.id
//             });

//             if (verificationResult.success) {
//               navigate('/users/checkout/success', { 
//                 state: { 
//                   order: { ...order, paymentStatus: 'completed' },
//                   paymentData: verificationResult.data 
//                 } 
//               });
//               resolve();
//             } else {
//               throw new Error(verificationResult.message || 'Payment verification failed');
//             }
//           } catch (error) {
//             console.error('OPay verification error:', error);
//             NotificationService.showDialog(
//               error instanceof Error ? error.message : 'Payment verification failed'
//             );
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
//             { label: 'User', path: '/users/personal' },
//             { label: 'Basket', path: '/users/basket' },
//             { label: 'Checkout', path: `/users/checkout` }
//           ]} 
//         />
                
//         <section className="container pb-5 mb-2 mb-md-3 mb-lg-4 mb-xl-5 ">
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

//               <h2 className="h5 mb-4 border-top pt-3">
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

//               <h2 className="h5 mt-5 mb-4 border-top pt-3">Payment method</h2>
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
//                       disabled={isScriptLoading('paypal') || scriptLoadError.paypal }
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

//                 {/* Payment Locking Feature */}
//                 {paymentMethod !== 'pay_on_delivery' && (
//                   <div className="mt-4 border-top pt-3">
//                     <h3 className="h6 mb-3">Payment Security</h3>
//                     <div className="form-check form-switch">
//                       <input
//                         className="form-check-input"
//                         type="checkbox"
//                         id="lockPayment"
//                         checked={isPaymentLocked}
//                         onChange={() => setIsPaymentLocked(!isPaymentLocked)}
//                       />
                      
//                       <label className="form-check-label" htmlFor="lockPayment">
//                         <span className="d-flex align-items-center">
//                           <i className="ci-check-shield text-success me-2"></i>
//                           Lock this payment
//                         </span>
//                         <small className="form-text text-muted">
//                           <i className="ci-info text-warning me-2"></i> Funds will be held securely until you release them to the seller
//                         </small>
//                       </label>
//                     </div>
                    
//                     {isPaymentLocked && (
//                       <div className="mt-3 animate-fade-in">
//                         <label htmlFor="lockReason" className="form-label small">
//                           Why are you locking this payment? (Optional)
//                         </label>
//                         <textarea
//                           id="lockReason"
//                           className="form-control form-control-sm"
//                           rows={2}
//                           placeholder="e.g., I want to inspect goods before release"
//                           value={lockReason}
//                           onChange={(e) => setLockReason(e.target.value)}
//                         />
//                       </div>
//                     )}
//                   </div>
//                 )}
  
//               </div>
              
//             </div>

//             {!basketLoading && basket && (
//               <OrderSummary
//                 context="checkout"
//                 itemCount={basket?.itemCount || 0}
//                 subtotal={basket?.subtotal || 0}
//                 deliveryFee={deliveryCost}
//                 total={(basket?.subtotal || 0) + deliveryCost}
//                 discount={basket?.savings || 0}
//                 qualifiesForFreeShipping={deliveryDetails.option === 'delivery' && deliveryCost === 0}
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


/// v14 - Advanced Vendor Location Handling
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import DeliveryDateOffCanvas from './DeliveryDateOffCanvas';
import DeliveryOptionsOffCanvas from './DeliveryOptionsOffCanvas';
import { useOrder } from '../../../hooks/useOrder';
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
import { calculateDeliveryCost } from '../../../services/users/deliveryService';

// Fallback delivery cost configuration
const FALLBACK_DELIVERY_COST_PER_VENDOR = 1500; // NGN
const FALLBACK_DELIVERY_COST_GLOBAL = 2500; // NGN

// Default location (e.g., central warehouse in Lagos)
const DEFAULT_LAT = 6.5244;
const DEFAULT_LNG = 3.3792;
const DEFAULT_ZONE = 'Lagos';
const DEFAULT_COUNTRY = 'Nigeria';

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

  const { verifyPayment } = usePaymentVerification();
  const { createOrder } = useOrder();

  const {
    scriptsLoaded,
    ensureScriptLoaded,
    isScriptLoading,
    scriptLoadError
  } = usePaymentScripts();

  const [deliveryDetails, setDeliveryDetails] = useState<{
    address: any | null;
    schedule: { date: string; timeSlot: string } | null;
    option: 'delivery' | 'pickup';
  }>({
    address: null,
    schedule: null,
    option: 'delivery',
  });

  // DELIVERY COSTS CALC - ADVANCED LOCATION HANDLING
  const [deliveryCost, setDeliveryCost] = useState(0);
  const [deliveryLoading, setDeliveryLoading] = useState(false);
  const [deliveryError, setDeliveryError] = useState<string | null>(null);

  // Calculate delivery cost when address changes
  useEffect(() => {
    if (deliveryDetails.option === 'delivery' && 
        deliveryDetails.address && 
        basket?.items?.length > 0) {
      calculateDelivery();
    } else {
      setDeliveryCost(0);
    }
  }, [deliveryDetails, basket]);

  // Get the most reliable location source for an item
  const getItemLocation = (item: any) => {
    // 1. Check if item has its own location data (highest priority)
    if (item.origin_location) {
      return {
        lat: item.origin_location.latitude,
        lng: item.origin_location.longitude,
        zone: item.origin_location.zone,
        country: item.origin_location.country
      };
    }
    
    // 2. Check if item has location properties directly
    if (item.latitude && item.longitude) {
      return {
        lat: item.latitude,
        lng: item.longitude,
        zone: item.zone || DEFAULT_ZONE,
        country: item.country || DEFAULT_COUNTRY
      };
    }
    
    // 3. Return null to indicate we need to get vendor location
    return null;
  };

  const calculateDelivery = async () => {
    setDeliveryLoading(true);
    setDeliveryError(null);
    
    try {
      // Group items by vendor with proper vendor ID handling
      const vendorGroups = basket.items.reduce((groups, item) => {
        const vendorId = item.page_id || item.user_id;
        
        if (!vendorId) {
          console.warn("Item missing vendor identifier:", item);
          return groups;
        }
        
        if (!groups[vendorId]) {
          groups[vendorId] = {
            items: [],
            // Try to get location from first item
            location: getItemLocation(item)
          };
        }
        
        groups[vendorId].items.push(item);
        return groups;
      }, {});

      let totalCost = 0;
      let vendorCount = 0;
      let fallbackUsed = false;
      
      for (const vendorId in vendorGroups) {
        try {
          const group = vendorGroups[vendorId];
          let origin = group.location;
          let vendor;
          
          // If we don't have item-level location, get vendor location
          if (!origin) {
            vendor = await getVendorDetails(vendorId);
            origin = {
              lat: vendor.latitude,
              lng: vendor.longitude,
              zone: vendor.zone,
              country: vendor.country
            };
          }
          
          vendorCount++;
          
          const vendorCost = await calculateDeliveryCost(
            origin,
            {
              lat: deliveryDetails.address.latitude,
              lng: deliveryDetails.address.longitude,
              zone: deliveryDetails.address.zone,
              country: deliveryDetails.address.city.state?.country?.name || 'Nigeria'
            },
            group.items
          );
          totalCost += vendorCost;
        } catch (vendorError) {
          console.error(`Error calculating delivery for vendor ${vendorId}:`, vendorError);
          
          // Calculate fallback based on vendor's item count
          const itemCount = vendorGroups[vendorId].items.length;
          totalCost += FALLBACK_DELIVERY_COST_PER_VENDOR * itemCount;
          fallbackUsed = true;
        }
      }
      
      if (vendorCount === 0) {
        // Use global fallback if no vendors could be processed
        totalCost = FALLBACK_DELIVERY_COST_GLOBAL;
        fallbackUsed = true;
      }
      
      setDeliveryCost(totalCost);
      
      if (fallbackUsed) {
        console.warn("Fallback delivery cost used due to calculation issues");
      }
    } catch (error) {
      setDeliveryError('Could not calculate delivery fees');
      console.error('Delivery calculation error:', error);
      // Set fallback global delivery cost as last resort
      setDeliveryCost(FALLBACK_DELIVERY_COST_GLOBAL);
    } finally {
      setDeliveryLoading(false);
    }
  };

  const getVendorDetails = async (vendorId: string) => {
    try {
      const response = await AxiosService.json.get(`/users/${vendorId}`);
      if (!response.data) {
        throw new Error(`Vendor ${vendorId} not found`);
      }
      return response.data;
    } catch (error) {
      console.error(`Failed to fetch vendor ${vendorId}:`, error);
      
      // Return default vendor details when not found
      return {
        latitude: DEFAULT_LAT,
        longitude: DEFAULT_LNG,
        zone: DEFAULT_ZONE,
        country: DEFAULT_COUNTRY
      };
    }
  };
  
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

  useEffect(() => {
    fetchAddresses();

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
    
    if (method === 'paystack') {
      await ensureScriptLoaded('paystack');
    } else if (method === 'flutterwave') {
      await ensureScriptLoaded('flutterwave');
    } else if (method === 'opay') {
      await ensureScriptLoaded('opay');
    }
  };

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
        navigate('/users/checkout/success', { 
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

  const processPaypalPayment = async (order: any, amount: number, customerEmail: string) => {
    try {
      const paypalResult = await AxiosService.json.post('/payments/paypal/process', JSON.stringify({
          orderId: order.id,
          amount,
          customerEmail,
          paymentReference: order.payment_reference
        })
      );
      
      const result = paypalResult;
      
      if (result.success) {
        navigate('/users/checkout/success', { 
          state: { 
            order: { ...order, paymentStatus: 'completed' },
            paymentData: result.data 
          } 
        });
      } else {
        throw new Error(result.message || 'PayPal payment failed');
      }
    } catch (error) {
      console.error('PayPal payment error:', error);
      throw error;
    }
  };

  const processPaystackPayment = async (order: any, amount: number, customerEmail: string) => {
    if (!scriptsLoaded.paystack) { 
      throw new Error('Paystack payment system not available');
    }

    return new Promise<void>((resolve, reject) => {
      const callback = (response: any) => {
        (async () => {
          try {
            const verificationResult = await verifyPayment({
              paymentMethod: 'paystack',
              transactionId: response.reference,
              paymentReference: order.payment_reference,
              orderId: order.id
            });

            if (verificationResult.success) {
              navigate('/users/checkout/success', { 
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
        key: paymentConfig.paystack.publicKey,
        email: customerEmail,
        amount: amount * 100,
        currency: 'NGN',
        reference: order.payment_reference,
        metadata: {
          merchant_reference: order.payment_reference,
          order_id: order.id,
          customer_email: customerEmail
        },
        onClose: () => {
          setIsProcessing(false);
          NotificationService.showDialog('Payment cancelled', 'info');
          reject(new Error('Payment cancelled by user'));
        },
        callback
      });
      
      handler.openIframe();
    });
  };
  /*
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
          name: user?.username || user?.full_name || 'Customer'
        },
        customizations: {
          title: 'Order Payment - 3D Payment Security.',
          description: `Payment for order #${order.id}`,
          logo: '/assets/img/us/logos/favicon.ico'
        },
        metadata: {
          merchant_reference: order.payment_reference,
          order_id: order.id,
          customer_email: customerEmail
        },
        
        callback: async (response: any) => {
          try {
            const verificationResult = await verifyPayment({
              paymentMethod: 'flutterwave',
              transactionId: response.transaction_id,
              paymentReference: order.payment_reference,
              orderId: order.id
            });

            if (verificationResult.success) {
              navigate('/users/checkout/success', { 
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
  };*/

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
    let paymentHandled = false; // track if payment succeeded

    (window as any).FlutterwaveCheckout({
      public_key: paymentConfig.flutterwave.publicKey,
      tx_ref: order.payment_reference,
      amount,
      currency: 'NGN',
      customer: {
        email: customerEmail,
        phone_number: customerPhone,
        name: user?.username || user?.full_name || 'Customer'
      },
      customizations: {
        title: 'Order Payment - 3D Payment Security.',
        description: `Payment for order #${order.id}`,
        logo: '/assets/img/us/logos/favicon.ico'
      },
      metadata: {
        merchant_reference: order.payment_reference,
        order_id: order.id,
        customer_email: customerEmail
      },
      
      callback: async (response: any) => {
        try {
          const verificationResult = await verifyPayment({
            paymentMethod: 'flutterwave',
            transactionId: response.transaction_id,
            paymentReference: order.payment_reference,
            orderId: order.id
          });

          if (verificationResult.success) {
            paymentHandled = true; // mark as successful
            navigate('/users/checkout/success', { 
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
        if (!paymentHandled) { // only show cancelled if no success
          NotificationService.showDialog('Payment cancelled', 'info');
          reject(new Error('Payment cancelled by user'));
        }
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
            const verificationResult = await verifyPayment({
              paymentMethod: 'opay',
              transactionId: response.reference || response.transaction_id,
              paymentReference: order.payment_reference,
              orderId: order.id
            });

            if (verificationResult.success) {
              navigate('/users/checkout/success', { 
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
            { label: 'User', path: '/users/personal' },
            { label: 'Basket', path: '/users/basket' },
            { label: 'Checkout', path: `/users/checkout` }
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

              <h2 className="h5 mb-4 border-top pt-3">
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

              <h2 className="h5 mt-5 mb-4 border-top pt-3">Payment method</h2>
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
                      disabled={isScriptLoading('paypal') || scriptLoadError.paypal }
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
                deliveryFee={deliveryCost}
                total={(basket?.subtotal || 0) + deliveryCost}
                discount={basket?.savings || 0}
                qualifiesForFreeShipping={deliveryDetails.option === 'delivery' && deliveryCost === 0}
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