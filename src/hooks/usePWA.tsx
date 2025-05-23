// FILE: hooks/usePWA.tsx

import { useState, useEffect } from 'react';
import { pwaManager } from '../utils/pwaManager';

type InstallPromptResult = {
  outcome: string;
  [key: string]: any; // for additional prompt fields
};

export const usePWA = () => {
  const [canInstall, setCanInstall] = useState<boolean>(false);
  const [isInstalled, setIsInstalled] = useState<boolean>(false);
  const [isInstalling, setIsInstalling] = useState<boolean>(false);

  useEffect(() => {
    // Set initial states
    setCanInstall(pwaManager.canInstall());
    setIsInstalled(pwaManager.isAppInstalled());

    const handleInstallPromptReady = (ready: boolean) => {
      console.log('PWA Hook: Install prompt ready:', ready);
      setCanInstall(ready);
    };

    const handleInstalled = () => {
      console.log('PWA Hook: App installed');
      setIsInstalled(true);
      setCanInstall(false);
    };

    pwaManager.subscribe('onInstallPromptReady', handleInstallPromptReady);
    pwaManager.subscribe('onInstalled', handleInstalled);

    return () => {
      pwaManager.unsubscribe('onInstallPromptReady', handleInstallPromptReady);
      pwaManager.unsubscribe('onInstalled', handleInstalled);
    };
  }, []);

  const install = async (): Promise<InstallPromptResult> => {
    setIsInstalling(true);
    try {
      const result = await pwaManager.showInstallPrompt();
      return result;
    } catch (error) {
      console.error('PWA Hook: Installation failed:', error);
      throw error;
    } finally {
      setIsInstalling(false);
    }
  };

  return {
    canInstall,
    isInstalled,
    isInstalling,
    install,
    manager: pwaManager,
  };
};
