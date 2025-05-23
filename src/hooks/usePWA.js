// ================================
// FILE 2: hooks/usePWA.tsx
// Purpose: React hook to easily use PWA functionality in components
// ================================
import { useState, useEffect } from 'react';
import { pwaManager } from '../utils/pwaManager';
export const usePWA = () => {
    const [canInstall, setCanInstall] = useState(false);
    const [isInstalled, setIsInstalled] = useState(false);
    const [isInstalling, setIsInstalling] = useState(false);
    useEffect(() => {
        // Initial state
        setCanInstall(pwaManager.canInstall());
        setIsInstalled(pwaManager.isAppInstalled());
        const handleInstallPromptReady = (ready) => {
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
    const install = async () => {
        setIsInstalling(true);
        try {
            const result = await pwaManager.showInstallPrompt();
            return result;
        }
        catch (error) {
            console.error('PWA Hook: Installation failed:', error);
            throw error;
        }
        finally {
            setIsInstalling(false);
        }
    };
    return {
        canInstall,
        isInstalled,
        isInstalling,
        install,
        manager: pwaManager
    };
};
