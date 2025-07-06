import { 
  PaymentMethod, PaymentRequest, Order, 
  User, DeliveryDetails, Store 
} from '@/types/payment';

// import processPayment from 

// Mock API call (replace with actual implementation)
// const processPayment = async (data: PaymentRequest) => {
//   // Actual implementation would call your backend API
//   return { success: true, message: 'Payment processed' };
// };

// PayPal processor
export const processPayPalPayment = async (
  order: Order,
  amount: number,
  customerEmail: string
) => {
  const result = await processPayment({
    orderId: order.id,
    amount,
    paymentMethod: 'paypal',
    customerEmail,
    paymentReference: order.tracking_number
  });
  
  if (!result.success) {
    throw new Error(result.message || 'PayPal payment failed');
  }
  
  return result;
};

// Paystack processor
export const processPaystackPayment = (
  order: Order,
  amount: number,
  customerEmail: string,
  publicKey: string
): Promise<void> => {
  if (!window.PaystackPop) {
    throw new Error('Paystack payment system not available');
  }

  return new Promise((resolve, reject) => {
    const handler = window.PaystackPop.setup({
      key: publicKey,
      email: customerEmail,
      amount: amount * 100,
      currency: 'NGN',
      reference: `order_${order.id}_${Date.now()}`,
      onClose: () => reject(new Error('Payment cancelled by user')),
      callback: async (response: any) => {
        try {
          const paymentResult = await processPayment({
            orderId: order.id,
            amount,
            paymentMethod: 'paystack',
            customerEmail,
            paymentReference: response.reference
          });

          if (!paymentResult.success) {
            throw new Error(paymentResult.message || 'Payment verification failed');
          }
          resolve();
        } catch (error) {
          reject(error);
        }
      }
    });
    handler.openIframe();
  });
};

// Flutterwave processor
export const processFlutterwavePayment = (
  order: Order,
  amount: number,
  customerEmail: string,
  customerPhone: string,
  user: User,
  publicKey: string
): Promise<void> => {
  if (!window.FlutterwaveCheckout) {
    throw new Error('Flutterwave payment system not available');
  }

  return new Promise((resolve, reject) => {
    window.FlutterwaveCheckout({
      public_key: publicKey,
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

          if (!paymentResult.success) {
            throw new Error(paymentResult.message || 'Payment verification failed');
          }
          resolve();
        } catch (error) {
          reject(error);
        }
      },
      onclose: () => reject(new Error('Payment cancelled by user')),
    });
  });
};

// OPay processor
export const processOpayPayment = (
  order: Order,
  amount: number,
  customerEmail: string,
  customerPhone: string,
  user: User,
  merchantId: string
): Promise<void> => {
  if (!window.OPayCheckout) {
    throw new Error('OPay payment system not available');
  }

  return new Promise((resolve, reject) => {
    window.OPayCheckout({
      merchantId,
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

          if (!paymentResult.success) {
            throw new Error(paymentResult.message || 'Payment verification failed');
          }
          resolve();
        } catch (error) {
          reject(error);
        }
      },
      onClose: () => reject(new Error('Payment cancelled by user')),
    });
  });
};