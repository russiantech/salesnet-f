
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