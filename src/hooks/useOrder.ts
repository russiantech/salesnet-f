// import { useState } from 'react';
// import { NotificationService } from '../services/local/NotificationService';

// export const useOrder = () => {
//   const [isCreating, setIsCreating] = useState(false);

//   const createOrder = async (orderData: {
//     deliveryAddress: any;
//     deliveryTime: any;
//     paymentMethod: string;
//   }) => {
//     setIsCreating(true);
//     try {
//       // Mock API call to create order
//       const response = await new Promise((resolve) => {
//         setTimeout(() => {
//           resolve({
//             id: `ORD_${Date.now()}`,
//             ...orderData,
//             total: 68.91,
//             status: 'pending',
//             createdAt: new Date().toISOString(),
//             customerEmail: 'customer@example.com'
//           });
//         }, 1000);
//       });
      
//       NotificationService.showDialog('Order created successfully');
//       return response;
      
//     } catch (error) {
//       console.error('Order creation error:', error);
//       NotificationService.showDialog('Failed to create order');
//       throw error;
//     } finally {
//       setIsCreating(false);
//     }
//   };

//   return { createOrder, isCreating };
// };

// v2
// import { useMutation } from 'react-query';
// import { AxiosService } from '@/services/net/base/AxiosService';

// export const useOrder = () => {
//   const createOrder = useMutation(async (orderData: any) => {
//     try {
//       const response = await AxiosService.json.post('/orders', orderData);
//       return response.data.order;
//     } catch (error: any) {
//       throw new Error(error.response?.data?.message || 'Failed to create order');
//     }
//   });

//   return {
//     createOrder: createOrder.mutateAsync,
//     isLoading: createOrder.isLoading,
//     error: createOrder.error,
//   };
// };

// v3 - using vanilla react
import { useState, useCallback } from 'react';
import { AxiosService } from '@/services/net/base/AxiosService';

export const useOrder = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createOrder = useCallback(async (orderData: any) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await AxiosService.json.post('/orders', orderData);
      return response.data;
    } catch (err: any) {
      const message = err.response?.data?.error || 'Failed to create order';
      setError(message);
      throw new Error(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    createOrder,
    isLoading,
    error,
  };
};