// import { useState } from 'react';
// import { NotificationService } from '../services/local/NotificationService';

// export const usePayment = () => {
//   const [isProcessing, setIsProcessing] = useState(false);

//   const processPayment = async (paymentData: {
//     orderId: string;
//     amount: number;
//     paymentMethod: string;
//     customerEmail: string;
//     paymentReference: string;
//   }) => {
//     setIsProcessing(true);
//     try {
//       // Here you would integrate with your payment gateway APIs
//       // This is a mock implementation
      
//       let result;
      
//       switch(paymentData.paymentMethod) {
//         case 'paypal':
//           // PayPal integration would go here
//           result = { success: true, transactionId: `PAYPAL_${Date.now()}` };
//           break;
          
//         case 'paystack':
//           // Paystack integration would go here
//           result = { success: true, transactionId: `PAYSTACK_${Date.now()}` };
//           break;
          
//         case 'flutterwave':
//           // Flutterwave integration would go here
//           result = { success: true, transactionId: `FLUTTERWAVE_${Date.now()}` };
//           break;
          
//         case 'opay':
//           // OPay integration would go here
//           result = { success: true, transactionId: `OPAY_${Date.now()}` };
//           break;
          
//         case 'card':
//         default:
//           // Stripe integration would go here
//           result = { success: true, transactionId: `STRIPE_${Date.now()}` };
//       }
      
//       NotificationService.showDialog('Payment processed successfully');
//       return result;
      
//     } catch (error) {
//       console.error('Payment processing error:', error);
//       NotificationService.showDialog('Failed to process payment');
//       return { success: false, message: 'Payment failed' };
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   return { processPayment, isProcessing };
// };

// v2
// Frontend Payment Verification Service
// import { AxiosService } from './AxiosService'; // Using your existing AxiosService

import { useState, useCallback } from 'react';
import { AxiosService } from '../services/net/base/AxiosService';

interface VerifyPaymentRequest {
  paymentMethod: 'paystack' | 'flutterwave' | 'opay';
  transactionId: string;
  paymentReference: string;
  orderId: string | number;
}

interface PaymentData {
  id: string | number;
  reference: string;
  status: string;
  amount: number;
  currency: string;
}

interface OrderData {
  id: string | number;
  status: string;
  payment_status: string;
}

interface VerifyPaymentResponse {
  success: boolean;
  message: string;
  data?: {
    payment: PaymentData;
    order: OrderData;
    gateway_data: any;
  };
}

/**
 * Professional payment verification service
 * Handles verification for all supported payment gateways
 */
export const verifyPayment = async (
  params: VerifyPaymentRequest
): Promise<VerifyPaymentResponse> => {
  try {
    // Validate required parameters
    const { paymentMethod, transactionId, paymentReference, orderId } = params;
    
    if (!paymentMethod || !transactionId || !paymentReference || !orderId) {
      throw new Error('Missing required payment verification parameters');
    }

    // Validate payment method
    const supportedMethods = ['paystack', 'flutterwave', 'opay'];
    if (!supportedMethods.includes(paymentMethod)) {
      throw new Error('Unsupported payment method');
    }

    console.log(`Verifying ${paymentMethod} payment:`, {
      transactionId,
      paymentReference,
      orderId
    });

    // Make API call to backend verification endpoint using AxiosService
    const response = await AxiosService.json.post('/payments/verify', params);
    // const response = await AxiosService.json.post('/payments/verify', {
    //   paymentMethod,
    //   transactionId,
    //   paymentReference,
    //   orderId
    // });

    console.log('Payment verification successful:', response);
    console.log('Payment verification successful:', response.data);
    console.log('Payment verification successful:', response.data);
    return response.data;

  } catch (err: any) {
    console.error('Payment verification error:', err);
    
    // Extract error message following your pattern
    const message = err.response?.data?.error || err.message || 'Payment verification failed';
    throw new Error(message);
  }
};

/**
 * Utility function to get payment gateway specific transaction ID
 * Different gateways may use different field names for transaction references
 */
export const getTransactionId = (
  paymentMethod: string,
  response: any
): string => {
  switch (paymentMethod) {
    case 'paystack':
      return response.reference || response.trans || response.transaction;
    
    case 'flutterwave':
      return response.transaction_id || response.flw_ref;
    
    case 'opay':
      return response.orderNo || response.reference;
    
    default:
      return response.reference || response.transaction_id || response.id;
  }
};

/**
 * Enhanced payment verification with retry logic
 * Useful for handling temporary network issues
 */
export const verifyPaymentWithRetry = async (
  params: VerifyPaymentRequest,
  maxRetries: number = 3,
  retryDelay: number = 1000
): Promise<VerifyPaymentResponse> => {
  let lastError: Error | null = null;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const result = await verifyPayment(params);
      return result;
      
    } catch (error: any) {
      lastError = error;
      
      // Don't retry on client errors (4xx)
      if (error.response?.status >= 400 && error.response?.status < 500) {
        throw error;
      }
      
      // Wait before retrying (except on last attempt)
      if (attempt < maxRetries) {
        await new Promise(resolve => setTimeout(resolve, retryDelay * attempt));
      }
    }
  }

  throw lastError || new Error('Payment verification failed after multiple attempts');
};

// Export types for use in other modules
export type {
  VerifyPaymentRequest,
  VerifyPaymentResponse,
  PaymentData,
  OrderData
};

/**
 * Hook for payment verification (following your pattern)
 * Usage example:
 * 
 * const { verifyPayment, isLoading, error } = usePaymentVerification();
 * 
 * const handleVerification = async () => {
 *   try {
 *     const result = await verifyPayment({
 *       paymentMethod: 'paystack',
 *       transactionId: response.reference,
 *       paymentReference: order.payment_reference,
 *       orderId: order.id
 *     });
 *     // Handle success
 *   } catch (error) {
 *     // Handle error
 *   }
 * };
 */
export const usePaymentVerification = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const verifyPaymentHook = useCallback(async (params: VerifyPaymentRequest) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await verifyPayment(params);
      console.log(`verify-response: ${response}`)
      return response;
    } catch (err: any) {
      const message = err.response?.data?.error || err.message || 'Payment verification failed';
      setError(message);
      throw new Error(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    verifyPayment: verifyPaymentHook,
    isLoading,
    error
  };
};