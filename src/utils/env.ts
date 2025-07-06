// Helper to safely access environment variables
export const getEnv = (key: string): string => {
  // For Vite (vite-env.d.ts should declare import.meta.env)
  if (typeof import.meta.env !== 'undefined') {
    return import.meta.env[key] || '';
  }
  
  // For Create React App
  if (typeof process !== 'undefined' && process.env) {
    return process.env[key] || '';
  }
  
  // Fallback to window variable (if injected via HTML)
  if (typeof window !== 'undefined' && (window as any).__env) {
    return (window as any).__env[key] || '';
  }
  
  return '';
};

// NOTE -> Depending on your build tool, prefix env names with VITE_ for vite apps, use REACT_APP_ for Create react app, etc.
export const paymentConfig = {
  paypal: {
    clientId: getEnv('VITE_APP_PAYPAL_CLIENT_ID') || 'default_paypal_client_id'
  },
  paystack: {
    publicKey: getEnv('VITE_APP_PAYSTACK_PUBLIC_KEY') || 'default_paystack_key'
  },
  flutterwave: {
    // publicKey: getEnv('REACT_APP_FLUTTERWAVE_PUBLIC_KEY') || 'default_flutterwave_key'
    publicKey: getEnv('VITE_FLUTTERWAVE_PUBLIC_KEY') || 'default_flutterwave_key'
  },
  opay: {
    merchantId: getEnv('VITE_APP_OPAY_MERCHANT_ID') || 'default_opay_merchant'
  }
};
