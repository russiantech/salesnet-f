import React from 'react';
import { PaymentMethod } from '../../../types';

interface PaymentMethodSelectorProps {
  value: string;
  onChange: (method: string) => void;
}

const paymentMethods: PaymentMethod[] = [
  {
    id: 'card',
    name: 'Credit/Debit Card',
    icon: 'credit-card',
    supportedCurrencies: ['USD', 'EUR', 'GBP']
  },
  {
    id: 'paypal',
    name: 'PayPal',
    icon: 'paypal',
    supportedCurrencies: ['USD', 'EUR', 'GBP']
  },
  {
    id: 'paystack',
    name: 'Paystack',
    icon: 'paystack',
    supportedCurrencies: ['NGN', 'GHS', 'ZAR']
  },
  {
    id: 'flutterwave',
    name: 'Flutterwave',
    icon: 'flutterwave',
    supportedCurrencies: ['NGN', 'KES', 'GHS', 'USD']
  },
  {
    id: 'opay',
    name: 'OPay',
    icon: 'opay',
    supportedCurrencies: ['NGN']
  },
  {
    id: 'cash',
    name: 'Cash on Delivery',
    icon: 'money-bill-wave',
    supportedCurrencies: ['USD', 'EUR', 'GBP', 'NGN']
  }
];

const PaymentMethodSelector: React.FC<PaymentMethodSelectorProps> = ({ value, onChange }) => {
  return (
    <div className="payment-methods">
      {paymentMethods.map(method => (
        <div 
          key={method.id}
          className={`payment-method ${value === method.id ? 'active' : ''}`}
          onClick={() => onChange(method.id)}
        >
          <div className="method-icon">
            <i className={`fa fa-${method.icon}`} />
          </div>
          <div className="method-name">{method.name}</div>
        </div>
      ))}
    </div>
  );
};

export default PaymentMethodSelector;