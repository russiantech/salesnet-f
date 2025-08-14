// v4
// Quick fix version - simplified button disable logic
import React, { useEffect, useState, useMemo } from 'react';
import { useBootstrapPopovers } from '../../../../hooks/useBootstrapPopovers';
import { useNavigate } from 'react-router-dom';
import { NotificationService } from '../../../../services/local/NotificationService';
import { AxiosService } from '../../../../services/net/base/AxiosService';
import { paymentConfig } from '../../../../utils/env';
import LoadingSpinner, { LoadingZoom } from '../../LoadingSpinner';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from 'react';
import { usePaymentScripts } from '../../../../hooks/usePaymentScripts';
import { usePaymentVerification } from '../../../../hooks/usePaymentVerification';

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
  const [user, setUser] = useState<any>(null);
  
  const { verifyPayment } = usePaymentVerification();

  // Use the payment scripts hook
  const {
    scriptsLoaded,
    scriptLoadError,
    ensureScriptLoaded,
    isScriptLoading
  } = usePaymentScripts();

  useEffect(() => {
    fetchPlans();
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

  const fetchUserData = async () => {
    try {
      const response = await AxiosService.json.get('/users/current');
      // console.log(`user respo in pay ${JSON.stringify(response.data)}`);
      if (response.data.success) {
        setUser(response.data);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      // Don't show error for user data - might not be logged in
    }
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
      if (response.data.success){
        return response.data;
      } else {
        throw new Error(response.data.message || 'Failed to create subscription');
      }
    } catch (error) {
      console.error('Error creating subscription:', error);
      throw error;
    }
  };
  
  // Updated Paystack payment handler
  const processPaystackPayment = async (subscription: any, amount: number, customerEmail: string) => {
    if (!scriptsLoaded.paystack) { 
      throw new Error('Paystack payment system not available');
    }

      // Generate a unique transaction reference if not provided
  const generateTxRef = () => {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    return `SUB_${subscription.id || 'UNKNOWN'}_${timestamp}_${random}`;
  };

  // Use existing payment_reference or generate a new one
  const txRef = subscription.payment_reference || generateTxRef();

    return new Promise<void>((resolve, reject) => {
      const callback = (response: any) => {
        (async () => {
          try {
            const verificationResult = await verifyPayment({
              paymentMethod: 'paystack',
              transactionId: response.reference,
              paymentReference: subscription.payment_reference || txRef,
              subscriptionId: subscription.id
            });

            // const verificationResult = await verifyPayment({
            //   paymentMethod: 'paystack',
            //   transactionId: response.reference,
            //   paymentReference: order.payment_reference,
            //   orderId: order.id
            // });

            if (verificationResult?.success) {
              onSubscriptionSuccess?.(verificationResult?.subscription);
              resolve();
            } else {
              throw new Error(verificationResult.data.message || verificationResult.error || 'Payment verification failed');
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
          merchant_reference: subscription.payment_reference,
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

  // Generate a unique transaction reference if not provided
  const generateTxRef = () => {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    return `SUB_${subscription.id || 'UNKNOWN'}_${timestamp}_${random}`;
  };

  // Use existing payment_reference or generate a new one
  const txRef = subscription.payment_reference || generateTxRef();

  // Debug log to check the reference
  console.log('Transaction Reference:', txRef);
  console.log('Subscription object:', subscription);

  return new Promise<void>((resolve, reject) => {
    (window as any).FlutterwaveCheckout({
      public_key: paymentConfig?.flutterwave?.publicKey,
      tx_ref: txRef, // Use the generated or existing reference
      
      amount,
      currency: 'NGN',
      customer: {
        email: customerEmail,
        phone_number: customerPhone,
        name: user?.username || 'Customer'
      },
      customizations: {
        title: 'Subscription Payment - 3D Payment Security.',
        description: `Payment for ${subscription.plan_name} subscription`,
        logo: '/assets/img/us/logos/favicon.ico'
      },
      metadata: {
        merchant_reference: txRef, // Use the same reference
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
            paymentReference: txRef, // Use the same reference for verification
            subscriptionId: subscription.id
          });

          if (verificationResult.success || verificationResult.data.success) {
            onSubscriptionSuccess?.(verificationResult.subscription || verificationResult.data.subscription);
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


  const processPaypalPayment = async (
    subscription: any, 
    amount: number, 
    customerEmail: string,
    customerName: string
  ) => {
    try {
      await ensureScriptLoaded('paypal');
      
      if (!(window as any).paypal) {
        throw new Error('PayPal SDK not loaded');
      }

      const paypalResult = await AxiosService.json.post('/subscriptions/paypal/process', JSON.stringify({
        subscriptionId: subscription.id,
        amount,
        customerEmail,
        customerName,
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

  const processOpayPayment = async (
    subscription: any, 
    amount: number, 
    customerEmail: string, 
    customerPhone: string,
    customerName: string
  ) => {
    await ensureScriptLoaded('opay');
    
    if (!(window as any).OPay) {
      throw new Error('OPay payment system not available');
    }

    return new Promise<void>((resolve, reject) => {
      try {
        (window as any).OPay.open({
          amount: amount,
          currency: 'NGN',
          reference: subscription.payment_reference,
          publicKey: paymentConfig?.opay?.merchantId || paymentConfig?.opay?.merchantId,
          customer: {
            name: customerName,
            email: customerEmail,
            phone: customerPhone || ''
          },
          customization: {
            title: 'Subscription Payment',
            description: `Payment for ${selectedPlan?.name} subscription`
          },
          onSuccess: async (response: any) => {
            try {
              const verificationResult = await verifyPayment({
                paymentMethod: 'opay',
                transactionId: response.reference || response.transaction_id || response.orderNo,
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
                error instanceof Error ? error.message : 'Payment verification failed',
                'error'
              );
              reject(error);
            }
          },
          onError: (error: any) => {
            console.error('OPay payment error:', error);
            setIsProcessing(false);
            NotificationService.showDialog(error?.message || 'Payment failed', 'error');
            reject(error);
          },
          onClose: () => {
            setIsProcessing(false);
            NotificationService.showDialog('Payment cancelled', 'info');
            reject(new Error('Payment cancelled by user'));
          }
        });
      } catch (error) {
        console.error('OPay initialization error:', error);
        setIsProcessing(false);
        NotificationService.showDialog('Failed to initialize payment', 'error');
        reject(error);
      }
    });
  };

  const handleSubscribe = async (plan: SubscriptionPlan) => {
    if (isProcessing) return;

    // Simple user check - only require email
    if (!user?.email) {
      NotificationService.showDialog('Please log in to subscribe', 'error');
      return;
    }

    try {
      setIsProcessing(true);
      setSelectedPlan(plan);

      // Create subscription record
      const subscription = await createSubscription(plan);
      
      // Get user details
      const amount = subscription.total_amount || subscription.amount;
      const customerEmail = subscription.customer_email || user?.email;
      const customerPhone = user?.phone;
      const customerName = user?.full_name || user?.name || 'Customer';

      // Process payment based on method
      switch (paymentMethod) {
        case 'paystack':
          await processPaystackPayment(subscription, amount, customerEmail, customerName);
          break;
        case 'flutterwave':
          await processFlutterwavePayment(subscription, amount, customerEmail, customerPhone, customerName);
          break;
        case 'paypal':
          await processPaypalPayment(subscription, amount, customerEmail, customerName);
          break;
        case 'opay':
          await processOpayPayment(subscription, amount, customerEmail, customerPhone, customerName);
          break;
        default:
          throw new Error('Invalid payment method selected');
      }

    } catch (error) {
      console.error('Subscription error:', error);
      NotificationService.showDialog(
        error instanceof Error
          ? ((error as any)?.response?.data?.error || error.message)
          : 'Subscription failed',
        'error'
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

  // Simplified button disabled logic - only essential checks
  const isButtonDisabled = (_plan: SubscriptionPlan) => {
    return isProcessing || !user?.email;
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center py-5">
        <LoadingSpinner size='sm' />
          <span className="visually-hidden">Loading plans...</span>
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
                        {scriptsLoaded[method] && (
                          <small className="text-success ms-1">✓</small>
                        )}
                        {isScriptLoading(method) && (
                          <small className="text-muted ms-1">(Loading...)</small>
                        )}
                        {scriptLoadError[method] && (
                          <small className="text-danger ms-1">(Failed)</small>
                        )}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
              {!user?.email && (
                <div className="alert alert-warning mt-3 mb-0">
                  <i className="ci-info me-2"></i>
                  Please log in to subscribe to a plan.
                </div>
              )}
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
                    className={`btn btn-${plan.badge_color} rounded-pill`}
                    onClick={() => handleSubscribe(plan)}
                    disabled={isButtonDisabled(plan)}
                  >
                    {isProcessing && selectedPlan?.id === plan.id && (
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