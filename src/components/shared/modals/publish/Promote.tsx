
// import React, { useEffect } from 'react';
// import { useBootstrapPopovers } from '../../../../hooks/useBootstrapPopovers';
// import { useMemo } from 'react';
// // import { Tooltip } from 'bootstrap';

// interface SubscriptionPlan {
//   id: string;
//   name: string;
//   price: string;
//   duration: string;
//   badge?: string;
//   badgeColor?: string;
//   icon: string;
//   features: {
//     text: string;
//     tooltip?: string;
//   }[];
// }

// export const SubscriptionPlans = () => {
//   const plans: SubscriptionPlan[] = useMemo(() => [
//     {
//       id: "easy-start",
//       name: "Easy Start",
//       price: "₦3,000",
//       duration: "7 days",
//       icon: "ci-zap",
//       badge: "Popular",
//       badgeColor: "info",
//       features: [
//         { 
//           text: "7-Day Ad Visibility", 
//           tooltip: "Your ad will be prominently displayed for a full week" 
//         },
//         { 
//           text: "Basic Engagement Metrics", 
//           tooltip: "Track views, clicks, and basic interaction data" 
//         },
//         { 
//           text: "Standard Placement", 
//           tooltip: "Appears in category listings and search results" 
//         }
//       ]
//     },
//     {
//       id: "fast-sale",
//       name: "Fast Sale",
//       price: "₦6,500",
//       duration: "14 days",
//       icon: "ci-cloud-lightning",
//       badge: "Recommended",
//       badgeColor: "warning",
//       features: [
//         { 
//           text: "14-Day Priority Visibility", 
//           tooltip: "Extended visibility with priority placement in listings" 
//         },
//         { 
//           text: "Enhanced Analytics Dashboard", 
//           tooltip: "Detailed insights into viewer demographics and behavior" 
//         },
//         { 
//           text: "Email Notification Alerts", 
//           tooltip: "Get notified when users show interest in your listing" 
//         },
//         { 
//           text: "Dedicated Support", 
//           tooltip: "Priority access to our customer support team" 
//         }
//       ]
//     },
//     {
//       id: "turbo-boost",
//       name: "Turbo Boost",
//       price: "₦12,000",
//       duration: "30 days",
//       icon: "ci-rocket",
//       badge: "Premium",
//       badgeColor: "danger",
//       features: [
//         { 
//           text: "30-Day Premium Placement in sales pages", 
//           tooltip: "Top positioning in search results and category pages" 
//         },
//         { 
//           text: "Maximum visibility in all listings", 
//           tooltip: "Top positioning in search results and category pages" 
//         },
//         { 
//           text: "24/7 priority support", 
//           tooltip: "Top positioning in search results and category pages" 
//         },
//         { 
//           text: "Advanced Performance Analytics", 
//           tooltip: "In-depth reports with conversion tracking and ROI metrics" 
//         },
//         { 
//           text: "Social Media Cross-Promotion", 
//           tooltip: "Featured in our social media channels and newsletters" 
//         },
//         { 
//           text: "Personal Account Manager", 
//           tooltip: "Dedicated expert to optimize your listing performance" 
//         },
//         { 
//           text: "Urgent Sale Badge", 
//           tooltip: "Special badge to highlight your listing as a hot deal" 
//         }
//       ]
//     }
//   ], []);

//   // Helper function to format features as a professional flat string
//   const formatFeaturesForTooltip = (features) => {
//     return features.map(feature => `• ${feature.text}`).join(' | ');
//   };

//   // Prepare popover data for the hook
//   const popoverData = useMemo(() => 
//     plans.map(plan => ({
//       selector: `#features-popover-${plan.id}`,
//       content: formatFeaturesForTooltip(plan.features),
//       customClass: "popover-sm"
//     }))
//   , [plans]);

//   // Initialize popovers
//   useBootstrapPopovers(popoverData);

//   return (
//     <>
//       <div className="row g-4 pt-2">
//         {plans.map((plan) => (
//           <div className="col" key={plan.id}>
//             <div className="card h-100">
//               <div className="card-body pb-3">
//                 <div className="d-flex align-items-start justify-content-between mb-4">
//                   <div className={`bg-${plan.badgeColor?.replace('bg-', '')}-subtle rounded-pill badge`}>
//                     <i className={`${plan.icon} fs-5 text-${plan.badgeColor?.replace('bg-', '')}`}></i>
//                   </div>

//                   <span className={`bg-${plan.badgeColor?.replace('bg-', '')}-subtle text-bg-subtle rounded-pill cursor-pointer`}>
//                     <i className="ci-info fs-base text-warning position-absolute end-4.. translate-middle-y" 
//                       data-bs-toggle="popover" 
//                       data-bs-trigger="hover" 
//                       data-bs-custom-class="popover-sm" 
//                       data-bs-content={formatFeaturesForTooltip(plan.features)}
//                     />
//                   </span>
//                 </div>
//                 <div className="h6 mb-1">
//                   {plan.name}  {plan.badge == "Recommended" ? <span className={`badge bg-${plan.badgeColor?.replace('bg-', '')} rounded-pill`}>{plan.badge}</span> : null}
//                 </div>
//                 <div className="text-success fs-xs fw-bold">{plan.price}</div>
//               </div>
//               <div className="card-footer d-flex gap-3 bg-transparent border-0 pt-0 pb-4">
//                 <button 
//                   type="button" 
//                   className="btn btn-sm btn-outline-secondary rounded-pill">
//                   {plan.duration}
//                 </button>
//                 <button 
//                   type="button" 
//                   className={`btn btn-sm rounded-pill bg-${plan.badgeColor?.replace('bg-', '')} text-white`}>
//                   <i className={`ci-${plan.icon} me-1`}></i>
//                   {plan.duration === "7 days" ? "Start easy" : plan.duration === "14 days" ? "Go fast" : "Boast now"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
      
//     </>
//   );

// };

// // export const PromotePage = () => {
// //   return (
// //     <section className="container5">
      
// //       <div className="text-center1 mb-5">
// //         <h2 className="h1 mb-2">Boost Your Listing Visibility</h2>
// //         <p className="text-muted fs-lg">
// //           Premium placement options to get your listing noticed by more buyers
// //         </p>
// //       </div>
      
// //       <SubscriptionPlans />
      
// //       <div className="text-center mt-5 pt-3">
// //         <p className="text-muted mb-2">
// //           <i className="ci-security-check fs-lg text-success me-2"></i>
// //           All plans include secure payment processing and 24/7 support
// //         </p>
// //         <p className="text-muted mb-0">
// //           Need help choosing? <a href="#contact">Contact our sales team</a>
// //         </p>
// //       </div>
// //     </section>
// //   );
// // };

// export default SubscriptionPlans;


// // v2
// import React, { useEffect } from 'react';
// import { useBootstrapPopovers } from '../../../../hooks/useBootstrapPopovers';
// import { useMemo } from 'react';


// interface SubscriptionPlan {
//   id: string;
//   name: string;
//   price: string;
//   duration: string;
//   badge?: string;
//   badgeColor?: string;
//   icon: string;
//   features: {
//     text: string;
//     tooltip?: string;
//   }[];
// }

// export const SubscriptionPlans: React.FC = () => {
//   const plans: SubscriptionPlan[] = useMemo(() => [
//     {
//       id: "easy-start",
//       name: "Easy Start",
//       price: "₦3,000",
//       duration: "7 days",
//       icon: "ci-zap",
//       badge: "Popular",
//       badgeColor: "info",
//       features: [
//         { text: "7-Day Ad Visibility", tooltip: "Your ad will be prominently displayed for a full week" },
//         { text: "Basic Engagement Metrics", tooltip: "Track views, clicks, and basic interaction data" },
//         { text: "Standard Placement", tooltip: "Appears in category listings and search results" }
//       ]
//     },
//     {
//       id: "fast-sale",
//       name: "Fast Sale",
//       price: "₦6,500",
//       duration: "14 days",
//       icon: "ci-cloud-lightning",
//       badge: "Recommended",
//       badgeColor: "warning",
//       features: [
//         { text: "14-Day Priority Visibility", tooltip: "Extended visibility with priority placement in listings" },
//         { text: "Enhanced Analytics Dashboard", tooltip: "Detailed insights into viewer demographics and behavior" },
//         { text: "Email Notification Alerts", tooltip: "Get notified when users show interest in your listing" },
//         { text: "Dedicated Support", tooltip: "Priority access to our customer support team" }
//       ]
//     },
//     {
//       id: "turbo-boost",
//       name: "Turbo Boost",
//       price: "₦12,000",
//       duration: "30 days",
//       icon: "ci-rocket",
//       badge: "Premium",
//       badgeColor: "danger",
//       features: [
//         { text: "30-Day Premium Placement in sales pages", tooltip: "Top positioning in search results and category pages" },
//         { text: "Maximum visibility in all listings", tooltip: "Top positioning in search results and category pages" },
//         { text: "24/7 priority support", tooltip: "Top positioning in search results and category pages" },
//         { text: "Advanced Performance Analytics", tooltip: "In-depth reports with conversion tracking and ROI metrics" },
//         { text: "Social Media Cross-Promotion", tooltip: "Featured in our social media channels and newsletters" },
//         { text: "Personal Account Manager", tooltip: "Dedicated expert to optimize your listing performance" },
//         { text: "Urgent Sale Badge", tooltip: "Special badge to highlight your listing as a hot deal" }
//       ]
//     }
//   ], []);

//   const formatFeaturesForTooltip = (features: SubscriptionPlan['features']) => {
//     return features.map(feature => `• ${feature.text}`).join(' | ');
//   };

//   const popoverData = useMemo(() => 
//     plans.map(plan => ({
//       selector: `#features-popover-${plan.id}`,
//       content: formatFeaturesForTooltip(plan.features),
//       customClass: "popover-sm"
//     })), [plans]);

//   useBootstrapPopovers(popoverData);

//   return (
//     <div className="row g-4 pt-2">
//       {plans.map((plan) => (
//         <div className="col" key={plan.id}>
//           <div className="card h-100">
//             <div className="card-body pb-3">
//               <div className="d-flex align-items-start justify-content-between mb-4">
//                 <div className={`bg-${plan.badgeColor}-subtle rounded-pill badge`}>
//                   <i className={`${plan.icon} fs-5 text-${plan.badgeColor}`}></i>
//                 </div>
//                 <span className={`bg-${plan.badgeColor}-subtle text-bg-subtle rounded-pill cursor-pointer`}>
//                   <i
//                     className="ci-info fs-base text-warning position-absolute"
//                     data-bs-toggle="popover"
//                     data-bs-trigger="hover"
//                     data-bs-custom-class="popover-sm"
//                     data-bs-content={formatFeaturesForTooltip(plan.features)}
//                   />
//                 </span>
//               </div>
//               <div className="h6 mb-1">
//                 {plan.name} {plan.badge === "Recommended" && <span className={`badge bg-${plan.badgeColor} rounded-pill`}>{plan.badge}</span>}
//               </div>
//               <div className="text-success fs-xs fw-bold">{plan.price}</div>
//             </div>
//             <div className="card-footer d-flex gap-3 bg-transparent border-0 pt-0 pb-4">
//               <button type="button" className="btn btn-sm btn-outline-secondary rounded-pill">
//                 {plan.duration}
//               </button>
//               <button
//                 type="button"
//                 className={`btn btn-sm rounded-pill bg-${plan.badgeColor} text-white`}
//               >
//                 <i className={`ci-${plan.icon} me-1`}></i>
//                 {plan.duration === "7 days" ? "Start easy" : plan.duration === "14 days" ? "Go fast" : "Boost now"}
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SubscriptionPlans;


// v3 - now fetches plans from backend and handles payments:
import React, { useEffect, useState, useMemo } from 'react';
import { useBootstrapPopovers } from '../../../../hooks/useBootstrapPopovers';
// import { AxiosService } from '../../../../services/AxiosService';
// import { NotificationService } from '../../../../services/NotificationService';
// import { PaymentService } from '../../../../services/PaymentService';
import { useNavigate } from 'react-router-dom';
import { NotificationService } from '../../../../services/local/NotificationService';
import { AxiosService } from '../../../../services/net/base/AxiosService';
import { paymentConfig } from '../../../../utils/env';
import { LoadingZoom } from '../../LoadingSpinner';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from 'react';

interface PlanFeature {
  text: string;
  tooltip: string;
}

interface SubscriptionPlan {
  id: number;
  slug: string;
  name: string;
  price: number;
  formatted_price: string;
  currency: string;
  duration_days: number;
  duration_text: string;
  description: string;
  badge?: string;
  badge_color: string;
  icon: string;
  features: PlanFeature[];
  analytics_enabled: boolean;
  social_media_promotion: boolean;
  support_level: string;
  priority_level: number;
  max_boost_count: number;
  is_active: boolean;
}

interface SubscriptionPlansProps {
  entityType: 'user' | 'page' | 'product';
  entityId?: string | number;
  onSubscriptionSuccess?: (subscription: any) => void;
}

interface PaymentConfig {
  paystack: { publicKey: string };
  flutterwave: { publicKey: string };
  opay: { merchantId: string };
  paypal: { clientId: string };
}

export const SubscriptionPlans: React.FC<SubscriptionPlansProps> = ({
  entityType,
  entityId,
  onSubscriptionSuccess
}) => {
  const navigate = useNavigate();
  const [plans, setPlans] = useState<SubscriptionPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlan | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<'paystack' | 'flutterwave' | 'opay' | 'paypal'>('paystack');
  // const [paymentConfig, setPaymentConfig] = useState<PaymentConfig | null>(null);
  const [scriptsLoaded, setScriptsLoaded] = useState({
    paystack: false,
    flutterwave: false,
    opay: false,
    paypal: false
  });
  const [user, setUser] = useState<any>(null);

  // Payment script URLs
  const paymentScripts = {
    paystack: 'https://js.paystack.co/v1/inline.js',
    flutterwave: 'https://checkout.flutterwave.com/v3.js',
    opay: 'https://cdnjs.cloudflare.com/ajax/libs/opay-checkout/1.0.0/opay-checkout.min.js',
    paypal: 'https://www.paypal.com/sdk/js?client-id='
  };

  useEffect(() => {
    fetchPlans();
    // fetchPaymentConfig();
    fetchUserData();
  }, []);

  const fetchPlans = async () => {
    try {
      setLoading(true);
      const response = await AxiosService.json.get('/promotion-plans');
      
      if (response.data.success) {
        setPlans(response.data.plans);
      } else {
        NotificationService.showDialog(response.data.error || 'Failed to fetch plans', 'error');
      }
    } catch (error) {
      console.error('Error fetching plans:', error);
      NotificationService.showDialog('Failed to load subscription plans', 'error');
    } finally {
      setLoading(false);
    }
  };

  // const fetchPaymentConfig = async () => {
  //   try {
  //     const response = await AxiosService.json.get('/payment-config');
  //     if (response.data.success) {
  //       setPaymentConfig(response.data.config);
  //     }
  //   } catch (error) {
  //     console.error('Error fetching payment config:', error);
  //   }
  // };

  const fetchUserData = async () => {
    try {
      const response = await AxiosService.json.get('/user/current');
      if (response.data.success) {
        setUser(response.data.user);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const ensureScriptLoaded = async (provider: keyof typeof paymentScripts): Promise<void> => {
    if (scriptsLoaded[provider]) return;

    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      let src = paymentScripts[provider];
      
      if (provider === 'paypal' && paymentConfig?.paypal?.clientId) {
        src += paymentConfig.paypal.clientId;
      }
      
      script.src = src;
      script.async = true;
      
      script.onload = () => {
        setScriptsLoaded((prev: any) => ({ ...prev, [provider]: true }));
        resolve();
      };
      
      script.onerror = () => {
        reject(new Error(`Failed to load ${provider} script`));
      };
      
      document.head.appendChild(script);
      
    });
  };

  const formatFeaturesForTooltip = (features: PlanFeature[]) => {
    return features.map(feature => `• ${feature.text}`).join(' | ');
  };

  const popoverData = useMemo(() => 
    plans.map((plan: { slug: any; features: PlanFeature[]; }) => ({
      selector: `#features-popover-${plan.slug}`,
      content: formatFeaturesForTooltip(plan.features),
      customClass: "popover-sm"
    })), [plans]);

  useBootstrapPopovers(popoverData);

  const createSubscription = async (plan: SubscriptionPlan) => {
    try {
      const subscriptionData = {
        promotion_plan_id: plan.id,
        entity_type: entityType,
        entity_id: entityId,
        payment_method: paymentMethod
      };

      const response = await AxiosService.json.post('/subscriptions', JSON.stringify(subscriptionData));
      console.log(`response -- ${JSON.stringify(response)}`);
      if (response.data.success) {
        // return response.data.subscription;
        return response.data;
      } else {
        throw new Error(response.data.message || 'Failed to create subscription');
      }
    } catch (error) {
      console.error('Error creating subscription:', error);
      throw error;
    }
  };

  const verifyPayment = async (data: {
    paymentMethod: string;
    transactionId: string;
    subscriptionId: string;
  }) => {
    try {
      // const response = await AxiosService.json.post('/subscriptions/verify-payment', JSON.stringify(data));
      const response = await AxiosService.json.post('/payments/verify', JSON.stringify(data));
      return response;
    } catch (error) {
      console.error('Payment verification error:', error);
      throw error;
    }
  };

  const processPaymentMethod = async (subscription: any) => {
    const amount = subscription.total_amount || subscription.amount;
    const customerEmail = subscription.customer_email || user?.email;
    const customerPhone = user?.phone;

    try {
      switch (paymentMethod) {
        case 'paypal':
          await ensureScriptLoaded('paypal');
          await processPaypalPayment(subscription, amount, customerEmail);
          break;

        case 'paystack':
          await ensureScriptLoaded('paystack');
          await processPaystackPayment(subscription, amount, customerEmail);
          break;

        case 'flutterwave':
          await ensureScriptLoaded('flutterwave');
          await processFlutterwavePayment(subscription, amount, customerEmail, customerPhone);
          break;

        case 'opay':
          await ensureScriptLoaded('opay');
          await processOpayPayment(subscription, amount, customerEmail, customerPhone);
          break;

        default:
          throw new Error('Invalid payment method selected');
      }
    } catch (error) {
      console.error('Payment processing error:', error);
      throw error;
    }
  };

  const processPaypalPayment = async (subscription: any, amount: number, customerEmail: string) => {
    try {
      const paypalResult = await AxiosService.json.post('/subscriptions/paypal/process', JSON.stringify({
        subscriptionId: subscription.id,
        amount,
        customerEmail,
        paymentReference: subscription.payment_reference
      }));
      
      if (paypalResult.data.success) {
        onSubscriptionSuccess?.(subscription);
        NotificationService.showDialog('Subscription activated successfully!', 'success');
      } else {
        throw new Error(paypalResult.data.message || 'PayPal payment failed');
      }
    } catch (error) {
      console.error('PayPal payment error:', error);
      throw error;
    }
  };

  const processPaystackPayment = async (subscription: any, amount: number, customerEmail: string) => {
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
              subscriptionId: subscription.id
            });

            if (verificationResult.data.success) {
              onSubscriptionSuccess?.(subscription);
              NotificationService.showDialog('Subscription activated successfully!', 'success');
              resolve();
            } else {
              throw new Error(verificationResult.data.message || 'Payment verification failed');
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
        key: paymentConfig?.paystack?.publicKey,
        email: customerEmail,
        amount: amount * 100,
        currency: 'NGN',
        reference: subscription.payment_reference,
        metadata: {
          subscription_id: subscription.id,
          entity_type: entityType,
          entity_id: entityId,
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

  const processFlutterwavePayment = async (
    subscription: any, 
    amount: number, 
    customerEmail: string, 
    customerPhone: string
  ) => {
    if (!scriptsLoaded.flutterwave) {
      throw new Error('Flutterwave payment system not available');
    }

    return new Promise<void>((resolve, reject) => {
      (window as any).FlutterwaveCheckout({
        public_key: paymentConfig?.flutterwave?.publicKey,
        tx_ref: subscription.payment_reference,
        amount,
        currency: 'NGN',
        customer: {
          email: customerEmail,
          phone_number: customerPhone,
          name: user?.full_name || 'Customer'
        },
        customizations: {
          title: 'Subscription Payment',
          description: `Payment for ${selectedPlan?.name} subscription`,
          logo: '/assets/img/logo.png'
        },
        metadata: {
          subscription_id: subscription.id,
          entity_type: entityType,
          entity_id: entityId,
          customer_email: customerEmail
        },
        
        callback: async (response: any) => {
          try {
            const verificationResult = await verifyPayment({
              paymentMethod: 'flutterwave',
              transactionId: response.transaction_id,
              subscriptionId: subscription.id
            });

            if (verificationResult.data.success) {
              onSubscriptionSuccess?.(subscription);
              NotificationService.showDialog('Subscription activated successfully!', 'success');
              resolve();
            } else {
              throw new Error(verificationResult.data.message || 'Payment verification failed');
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
    subscription: any, 
    amount: number, 
    customerEmail: string, 
    customerPhone: string
  ) => {
    if (!scriptsLoaded.opay) {
      throw new Error('OPay payment system not available');
    }

    return new Promise<void>((resolve, reject) => {
      (window as any).OPayCheckout({
        merchantId: paymentConfig?.opay?.merchantId,
        reference: subscription.payment_reference,
        amount,
        currency: 'NGN',
        callbackUrl: `${window.location.origin}/subscription/callback`,
        customerEmail,
        customerPhone,
        customerName: user?.full_name || 'Customer',
        
        onSuccess: async (response: any) => {
          try {
            const verificationResult = await verifyPayment({
              paymentMethod: 'opay',
              transactionId: response.reference || response.transaction_id,
              subscriptionId: subscription.id
            });

            if (verificationResult.data.success) {
              onSubscriptionSuccess?.(subscription);
              NotificationService.showDialog('Subscription activated successfully!', 'success');
              resolve();
            } else {
              throw new Error(verificationResult.data.message || 'Payment verification failed');
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

  const handleSubscribe = async (plan: SubscriptionPlan) => {
    if (isProcessing) return;

    try {
      setIsProcessing(true);
      setSelectedPlan(plan);

      // Create subscription record
      const subscription = await createSubscription(plan);
      
      // Process payment
      await processPaymentMethod(subscription);

    } catch (error) {
      console.error('Subscription error:', error);
      NotificationService.showDialog(
        error instanceof Error
          ? ((error as any)?.response?.data?.error || error.message)
          : 'Subscription failed'
      );
    } finally {
      setIsProcessing(false);
      setSelectedPlan(null);
    }
  };

  const getActionButtonText = (plan: SubscriptionPlan) => {
    if (isProcessing && selectedPlan?.id === plan.id) {
      return 'Processing...';
    }
    
    switch (plan.slug) {
      case 'easy-start':
        return 'Start Easy';
      case 'fast-sale':
        return 'Go Fast';
      case 'turbo-boost':
        return 'Boost Now';
      default:
        return 'Subscribe';
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading plans...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="subscription-plans">
      {/* Payment Method Selection */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title mb-3">Select Payment Method</h6>
              <div className="row g-2">
                {(['paystack', 'flutterwave', 'opay', 'paypal'] as const).map((method) => (
                  <div className="col-6 col-md-3" key={method}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="paymentMethod"
                        id={`payment-${method}`}
                        value={method}
                        checked={paymentMethod === method}
                        onChange={(e) => setPaymentMethod(e.target.value as any)}
                      />
                      <label className="form-check-label text-capitalize" htmlFor={`payment-${method}`}>
                        {method}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subscription Plans */}
      <div className="row g-4 pt-2">
        {plans.map((plan: SubscriptionPlan) => (
          <div className="col-12 col-md-4" key={plan.id}>
            <div className="card h-100 position-relative">
              {plan.badge && (
                <div className="position-absolute top-0 start-50 translate-middle">
                  <span className={`badge bg-${plan.badge_color} rounded-pill px-3`}>
                    {plan.badge}
                  </span>
                </div>
              )}
              
              <div className="card-body pb-3 pt-4">
                <div className="d-flex align-items-start justify-content-between mb-4">
                  <div className={`bg-${plan.badge_color}-subtle rounded-pill p-2`}>
                    <i className={`ci-${plan.icon} fs-4 text-${plan.badge_color}`}></i>
                  </div>
                  <span 
                    className={`bg-${plan.badge_color}-subtle rounded-pill p-2 cursor-pointer`}
                    id={`features-popover-${plan.slug}`}
                    data-bs-toggle="popover"
                    data-bs-trigger="hover"
                    data-bs-custom-class="popover-sm"
                    data-bs-content={formatFeaturesForTooltip(plan.features)}
                  >
                    <i className="ci-info fs-base text-warning"></i>
                  </span>
                </div>

                <div className="text-center mb-4">
                  <h5 className="mb-2">{plan.name}</h5>
                  <div className="text-success fs-2 fw-bold mb-1">{plan.formatted_price}</div>
                  <small className="text-muted">{plan.duration_text}</small>
                </div>

                <p className="text-muted text-center mb-4">{plan.description}</p>

                {/* Features List */}
                <ul className="list-unstyled mb-4">
                  {plan.features.slice(0, 4).map((feature: { text: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }, index: Key | null | undefined) => (
                    <li key={index} className="d-flex align-items-start mb-2">
                      <i className={`ci-check text-${plan.badge_color} me-2 mt-1`}></i>
                      <span className="small">{feature.text}</span>
                    </li>
                  ))}
                  {plan.features.length > 4 && (
                    <li className="text-muted small">
                      +{plan.features.length - 4} more features
                    </li>
                  )}
                </ul>
              </div>

              <div className="card-footer bg-transparent border-0 pt-0 pb-4">
                <div className="d-grid gap-2">
                  <button
                    type="button"
                    className={`btn btn-${plan.badge_color} rounded-pill ${
                      isProcessing && selectedPlan?.id === plan.id ? 'disabled' : ''
                    }`}
                    onClick={() => handleSubscribe(plan)}
                    disabled={isProcessing}
                  >
                    {isProcessing && selectedPlan?.id === plan.id && (
                      // <span className="spinner-border spinner-border-sm me-2" role="status">
                      //   <span className="visually-hidden">Loading...</span>
                      // </span>
                      <LoadingZoom size='sm'/>

                    )}
                    <i className={`ci-${plan.icon} me-2`}></i>
                    {getActionButtonText(plan)}
                  </button>
                  <small className="text-center text-muted">
                    {plan.duration_text} • Up to {plan.max_boost_count} boosts
                  </small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {plans.length === 0 && !loading && (
        <div className="text-center py-5">
          <i className="ci-package fs-1 text-muted mb-3"></i>
          <h5 className="text-muted">No subscription plans available</h5>
          <p className="text-muted">Please check back later for available plans.</p>
        </div>
      )}
    </div>
  );
};

export default SubscriptionPlans;