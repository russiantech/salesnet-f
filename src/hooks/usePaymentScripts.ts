// hooks/usePaymentScripts.ts
import { useState, useEffect, useCallback } from 'react';
import { paymentConfig } from '../utils/env';

type ScriptStatus = 'idle' | 'loading' | 'ready' | 'error';

export const usePaymentScripts = () => {
  const [scriptsLoaded, setScriptsLoaded] = useState({
    paypal: false,
    paystack: false,
    flutterwave: false,
    opay: false
  });
  
  const [scriptLoadError, setScriptLoadError] = useState({
    paypal: false,
    paystack: false,
    flutterwave: false,
    opay: false
  });
  
  const [loadingStates, setLoadingStates] = useState({
    paypal: false,
    paystack: false,
    flutterwave: false,
    opay: false
  });

  const loadScript = useCallback((provider: keyof typeof scriptsLoaded) => {
    if (scriptsLoaded[provider]) return;
    if (loadingStates[provider]) return;
    
    setLoadingStates(prev => ({ ...prev, [provider]: true }));
    
    const script = document.createElement('script');
    script.async = true;
    
    switch (provider) {
      case 'paypal':
        script.src = `https://www.paypal.com/sdk/js?client-id=${paymentConfig.paypal.clientId}&currency=USD`;
        break;
      case 'paystack':
        script.src = 'https://js.paystack.co/v1/inline.js';
        break;
      case 'flutterwave':
        script.src = 'https://checkout.flutterwave.com/v3.js';
        break;
      case 'opay':
        // script.src = 'https://sdk.oppwa.com/v1/integration.js';
        // script.src = 'https://checkout-v3.opaycheckout.com/opay.min.js';
        script.src = 'https://checkout.opaycheckout.com/opay.js';
        break;
    }
    
    script.onload = () => {
      setScriptsLoaded(prev => ({ ...prev, [provider]: true }));
      setLoadingStates(prev => ({ ...prev, [provider]: false }));
    };
    
    script.onerror = () => {
      setScriptLoadError(prev => ({ ...prev, [provider]: true }));
      setLoadingStates(prev => ({ ...prev, [provider]: false }));
    };
    
    document.head.appendChild(script);
  }, [scriptsLoaded, loadingStates]);

  const ensureScriptLoaded = useCallback(async (provider: keyof typeof scriptsLoaded) => {
    if (scriptsLoaded[provider]) return;
    if (scriptLoadError[provider]) {
      throw new Error(`Payment script failed to load: ${provider}`);
    }
    
    if (!loadingStates[provider]) {
      loadScript(provider);
    }
    
    // Wait for script to load (max 5 seconds)
    return new Promise<void>((resolve, reject) => {
      const start = Date.now();
      const interval = setInterval(() => {
        if (scriptsLoaded[provider]) {
          clearInterval(interval);
          resolve();
        } else if (scriptLoadError[provider]) {
          clearInterval(interval);
          reject(new Error(`Payment script failed to load: ${provider}`));
        } else if (Date.now() - start > 5000) {
          clearInterval(interval);
          reject(new Error(`Payment script timed out: ${provider}`));
        }
      }, 100);
    });
  }, [scriptsLoaded, scriptLoadError, loadingStates, loadScript]);

  const isScriptLoading = (provider: keyof typeof scriptsLoaded) => {
    return loadingStates[provider];
  };

  // Preload scripts on component mount
  useEffect(() => {
    // Only preload if the user hasn't selected a method yet
    if (Object.values(scriptsLoaded).every(status => !status)) {
      loadScript('paypal');
      loadScript('paystack');
      loadScript('flutterwave');
      loadScript('opay');
    }
  }, []);

  return {
    scriptsLoaded,
    scriptLoadError,
    ensureScriptLoaded,
    isScriptLoading,
    loadScript
  };
};