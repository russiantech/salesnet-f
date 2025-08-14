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

// // v2
// // Frontend Payment Verification Service
// // import { AxiosService } from './AxiosService'; // Using your existing AxiosService

// import { useState, useCallback } from 'react';
// import { AxiosService } from '../services/net/base/AxiosService';

// interface VerifyPaymentRequest {
//   paymentMethod: 'paystack' | 'flutterwave' | 'opay';
//   transactionId: string;
//   paymentReference: string;
//   orderId: string | number;
// }

// interface PaymentData {
//   id: string | number;
//   reference: string;
//   status: string;
//   amount: number;
//   currency: string;
// }

// interface OrderData {
//   id: string | number;
//   status: string;
//   payment_status: string;
// }

// interface VerifyPaymentResponse {
//   success: boolean;
//   message: string;
//   data?: {
//     payment: PaymentData;
//     order: OrderData;
//     gateway_data: any;
//   };
// }

// /**
//  * Professional payment verification service
//  * Handles verification for all supported payment gateways
//  */
// export const verifyPayment = async (
//   params: VerifyPaymentRequest
// ): Promise<VerifyPaymentResponse> => {
//   try {
//     // Validate required parameters
//     const { paymentMethod, transactionId, paymentReference, orderId } = params;
    
//     if (!paymentMethod || !transactionId || !paymentReference || !orderId) {
//       throw new Error('Missing required payment verification parameters');
//     }

//     // Validate payment method
//     const supportedMethods = ['paystack', 'flutterwave', 'opay'];
//     if (!supportedMethods.includes(paymentMethod)) {
//       throw new Error('Unsupported payment method');
//     }

//     console.log(`Verifying ${paymentMethod} payment:`, {
//       transactionId,
//       paymentReference,
//       orderId
//     });

//     // Make API call to backend verification endpoint using AxiosService
//     const response = await AxiosService.json.post('/payments/verify', params);
//     // const response = await AxiosService.json.post('/payments/verify', {
//     //   paymentMethod,
//     //   transactionId,
//     //   paymentReference,
//     //   orderId
//     // });

//     console.log('Payment verification successful:', response);
//     console.log('Payment verification successful:', response.data);
//     console.log('Payment verification successful:', response.data);
//     return response.data;

//   } catch (err: any) {
//     console.error('Payment verification error:', err);
    
//     // Extract error message following your pattern
//     const message = err.response?.data?.error || err.message || 'Payment verification failed';
//     throw new Error(message);
//   }
// };

// /**
//  * Utility function to get payment gateway specific transaction ID
//  * Different gateways may use different field names for transaction references
//  */
// export const getTransactionId = (
//   paymentMethod: string,
//   response: any
// ): string => {
//   switch (paymentMethod) {
//     case 'paystack':
//       return response.reference || response.trans || response.transaction;
    
//     case 'flutterwave':
//       return response.transaction_id || response.flw_ref;
    
//     case 'opay':
//       return response.orderNo || response.reference;
    
//     default:
//       return response.reference || response.transaction_id || response.id;
//   }
// };

// /**
//  * Enhanced payment verification with retry logic
//  * Useful for handling temporary network issues
//  */
// export const verifyPaymentWithRetry = async (
//   params: VerifyPaymentRequest,
//   maxRetries: number = 3,
//   retryDelay: number = 1000
// ): Promise<VerifyPaymentResponse> => {
//   let lastError: Error | null = null;

//   for (let attempt = 1; attempt <= maxRetries; attempt++) {
//     try {
//       const result = await verifyPayment(params);
//       return result;
      
//     } catch (error: any) {
//       lastError = error;
      
//       // Don't retry on client errors (4xx)
//       if (error.response?.status >= 400 && error.response?.status < 500) {
//         throw error;
//       }
      
//       // Wait before retrying (except on last attempt)
//       if (attempt < maxRetries) {
//         await new Promise(resolve => setTimeout(resolve, retryDelay * attempt));
//       }
//     }
//   }

//   throw lastError || new Error('Payment verification failed after multiple attempts');
// };

// // Export types for use in other modules
// export type {
//   VerifyPaymentRequest,
//   VerifyPaymentResponse,
//   PaymentData,
//   OrderData
// };

// /**
//  * Hook for payment verification (following your pattern)
//  * Usage example:
//  * 
//  * const { verifyPayment, isLoading, error } = usePaymentVerification();
//  * 
//  * const handleVerification = async () => {
//  *   try {
//  *     const result = await verifyPayment({
//  *       paymentMethod: 'paystack',
//  *       transactionId: response.reference,
//  *       paymentReference: order.payment_reference,
//  *       orderId: order.id
//  *     });
//  *     // Handle success
//  *   } catch (error) {
//  *     // Handle error
//  *   }
//  * };
//  */
// export const usePaymentVerification = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const verifyPaymentHook = useCallback(async (params: VerifyPaymentRequest) => {
//     setIsLoading(true);
//     setError(null);
    
//     try {
//       const response = await verifyPayment(params);
//       // console.log(`verify-response: ${response}`);
//       return response;
//     } catch (err: any) {
//       const message = err.response?.data?.error || err.message || 'Payment verification failed';
//       setError(message);
//       throw new Error(message);
//     } finally {
//       setIsLoading(false);
//     }
//   }, []);

//   return {
//     verifyPayment: verifyPaymentHook,
//     isLoading,
//     error
//   };
// };

// v3 - now allow both orders and subscrription

// Enhanced Frontend Payment Verification Service
import { useState, useCallback } from 'react';
import { AxiosService } from '../services/net/base/AxiosService';

// Updated interface to support both orders and subscriptions
interface VerifyPaymentRequest {
  paymentMethod: 'paystack' | 'flutterwave' | 'opay' | 'paypal';
  transactionId: string;
  paymentReference?: string; // Optional for subscriptions
  orderId?: string | number; // Optional - for order payments
  subscriptionId?: string | number; // Optional - for subscription payments
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

interface SubscriptionData {
  id: string | number;
  status: string;
  plan_name: string;
  start_date: string;
  end_date: string;
}

interface VerifyPaymentResponse {
  success: boolean;
  message: string;
  data?: {
    type: 'order' | 'subscription';
    payment: PaymentData;
    order?: OrderData;
    subscription?: SubscriptionData;
    gateway_data?: any;
  };
}

/**
 * Professional payment verification service
 * Handles verification for all supported payment gateways and payment types
 */
export const verifyPayment = async (
  params: VerifyPaymentRequest
): Promise<VerifyPaymentResponse> => {
  try {
    // Validate required parameters
    const { paymentMethod, transactionId, paymentReference, orderId, subscriptionId } = params;
    
    if (!paymentMethod || !transactionId) {
      throw new Error('Missing required payment verification parameters (paymentMethod, transactionId)');
    }

    // Must have either orderId or subscriptionId
    if (!orderId && !subscriptionId) {
      throw new Error('Either orderId or subscriptionId must be provided');
    }

    // Validate payment method
    const supportedMethods = ['paystack', 'flutterwave', 'opay', 'paypal'];
    if (!supportedMethods.includes(paymentMethod)) {
      throw new Error('Unsupported payment method');
    }

    // Determine payment type
    const paymentType = orderId ? 'order' : 'subscription';

    console.log(`Verifying ${paymentMethod} ${paymentType} payment:`, {
      transactionId,
      paymentReference,
      orderId,
      subscriptionId
    });

    // Build request payload - only include defined values
    const requestPayload: any = {
      paymentMethod,
      transactionId
    };

    if (paymentReference) requestPayload.paymentReference = paymentReference;
    if (orderId) requestPayload.orderId = orderId;
    if (subscriptionId) requestPayload.subscriptionId = subscriptionId;

    // Make API call to backend verification endpoint using AxiosService
    const response = await AxiosService.json.post('/payments/verify', requestPayload);

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
 * Specific function for verifying order payments
 */
export const verifyOrderPayment = async (
  paymentMethod: 'paystack' | 'flutterwave' | 'opay' | 'paypal',
  transactionId: string,
  paymentReference: string,
  orderId: string | number
): Promise<VerifyPaymentResponse> => {
  return verifyPayment({
    paymentMethod,
    transactionId,
    paymentReference,
    orderId
  });
};

/**
 * Specific function for verifying subscription payments
 */
export const verifySubscriptionPayment = async (
  paymentMethod: 'paystack' | 'flutterwave' | 'opay' | 'paypal',
  transactionId: string,
  subscriptionId: string | number,
  paymentReference?: string
): Promise<VerifyPaymentResponse> => {
  return verifyPayment({
    paymentMethod,
    transactionId,
    subscriptionId,
    paymentReference
  });
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
    
    case 'paypal':
      return response.id || response.payment_id;
    
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
  OrderData,
  SubscriptionData
};

/**
 * Enhanced hook for payment verification supporting both orders and subscriptions
 * Usage examples:
 * 
 * // For order payments:
 * const result = await verifyPayment({
 *   paymentMethod: 'paystack',
 *   transactionId: response.reference,
 *   paymentReference: order.payment_reference,
 *   orderId: order.id
 * });
 * 
 * // For subscription payments:
 * const result = await verifyPayment({
 *   paymentMethod: 'paystack',
 *   transactionId: response.reference,
 *   subscriptionId: subscription.id
 * });
 */
export const usePaymentVerification = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const verifyPaymentHook = useCallback(async (params: VerifyPaymentRequest) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await verifyPayment(params);
      console.log(`Verification successful for ${response.data?.type}:`, response.data);
      return response;
    } catch (err: any) {
      const message = err.response?.data?.error || err.message || 'Payment verification failed';
      setError(message);
      throw new Error(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Specific hook methods for convenience
  const verifyOrder = useCallback(async (
    paymentMethod: 'paystack' | 'flutterwave' | 'opay' | 'paypal',
    transactionId: string,
    paymentReference: string,
    orderId: string | number
  ) => {
    return verifyPaymentHook({
      paymentMethod,
      transactionId,
      paymentReference,
      orderId
    });
  }, [verifyPaymentHook]);

  const verifySubscription = useCallback(async (
    paymentMethod: 'paystack' | 'flutterwave' | 'opay' | 'paypal',
    transactionId: string,
    subscriptionId: string | number,
    paymentReference?: string
  ) => {
    return verifyPaymentHook({
      paymentMethod,
      transactionId,
      subscriptionId,
      paymentReference
    });
  }, [verifyPaymentHook]);

  return {
    verifyPayment: verifyPaymentHook,
    verifyOrder,
    verifySubscription,
    isLoading,
    error
  };
};

/**
 * Payment verification status checker
 * Useful for polling payment status
 */
export const checkPaymentStatus = async (paymentReference: string): Promise<any> => {
  try {
    const response = await AxiosService.json.get(`/payments/status/${paymentReference}`);
    return response.data;
  } catch (err: any) {
    console.error('Payment status check error:', err);
    const message = err.response?.data?.error || err.message || 'Payment status check failed';
    throw new Error(message);
  }
};
