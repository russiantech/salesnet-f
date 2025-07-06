import { useEffect, useState } from 'react';
import { loadScript } from '@/utils/scriptLoader';
import { 
  PaymentMethod, PaymentConfig, Order, 
  User, DeliveryDetails, Store, ScriptStatus 
} from '@/types/payment';

import * as processors from '@/utils/paymentProcessors';

const usePaymentProcessor = () => {
  const [scriptsLoaded, setScriptsLoaded] = useState<ScriptStatus>({
    paystack: false,
    flutterwave: false,
    opay: false
  });
  
  // Load payment scripts on mount
  useEffect(() => {
    const loadPaymentScripts = async () => {
      try {
        const results = await Promise.allSettled([
          !window.PaystackPop ? loadScript('https://js.paystack.co/v1/inline.js') : Promise.resolve(),
          !window.FlutterwaveCheckout ? loadScript('https://checkout.flutterwave.com/v3.js') : Promise.resolve(),
          !window.OPayCheckout ? loadScript('https://sdk.oppwa.com/v1/integration.js') : Promise.resolve(),
        ]);

        setScriptsLoaded({
          paystack: results[0].status === 'fulfilled' || !!window.PaystackPop,
          flutterwave: results[1].status === 'fulfilled' || !!window.FlutterwaveCheckout,
          opay: results[2].status === 'fulfilled' || !!window.OPayCheckout
        });
      } catch (error) {
        console.error('Payment script loading error:', error);
      }
    };

    loadPaymentScripts();
  }, []);

  // Process payment with robust error handling
  const processPayment = async (
    order: Order,
    paymentMethod: PaymentMethod,
    paymentConfig: PaymentConfig,
    user: User,
    deliveryDetails: DeliveryDetails,
    selectedStore: Store
  ) => {
    const amount = order.total_amount;
    const customerEmail = order.email;
    const customerPhone = order.phone || 
      (deliveryDetails.option === 'pickup' 
        ? selectedStore?.phone 
        : deliveryDetails.address?.phone_number);

    try {
      switch (paymentMethod) {
        case 'paypal':
          return await processors.processPayPalPayment(order, amount, customerEmail);

        case 'paystack':
          return await processors.processPaystackPayment(
            order, 
            amount, 
            customerEmail,
            paymentConfig.paystack.publicKey
          );

        case 'flutterwave':
          return await processors.processFlutterwavePayment(
            order,
            amount,
            customerEmail,
            customerPhone || '',
            user,
            paymentConfig.flutterwave.publicKey
          );

        case 'opay':
          return await processors.processOpayPayment(
            order,
            amount,
            customerEmail,
            customerPhone || '',
            user,
            paymentConfig.opay.merchantId
          );

        default:
          throw new Error('Invalid payment method selected');
      }
    } catch (error) {
      console.error('Payment processing error:', error);
      throw error;
    }
  };

  return { processPayment, scriptsLoaded };
};

export default usePaymentProcessor;