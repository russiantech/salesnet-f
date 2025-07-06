import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DeliveryDetails {
  address: any | null;
  schedule: { date: string; timeSlot: string } | null;
  option: 'delivery' | 'pickup';
}

interface DeliveryContextType {
  deliveryDetails: DeliveryDetails;
  setDeliveryDetails: (details: Partial<DeliveryDetails>) => void;
}

const DeliveryContext = createContext<DeliveryContextType | undefined>(undefined);

export const DeliveryProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [deliveryDetails, setDetails] = useState<DeliveryDetails>({
    address: null,
    schedule: null,
    option: 'delivery',
  });

  // Allows partial updates to delivery details
  const setDeliveryDetails = (update: Partial<DeliveryDetails>) => {
    setDetails(prev => ({ ...prev, ...update }));
  };

  return (
    <DeliveryContext.Provider value={{ deliveryDetails, setDeliveryDetails }}>
      {children}
    </DeliveryContext.Provider>
  );
};

export const useDelivery = () => {
  const context = useContext(DeliveryContext);
  if (!context) {
    throw new Error('useDelivery must be used within a DeliveryProvider');
  } 
  return context;
};