// ================================
// FILE: utils/pwaManager.js
// Create this file in src/utils/pwaManager.tsx
// ================================
class PWAManager {
    constructor() {
        this.deferredPrompt = null;
        this.isInstalled = false;
        this.isStandalone = false;
        this.callbacks = {
            onInstallPromptReady: [],
            onInstalled: [],
            onUpdateAvailable: []
        };
        // Only initialize if we're in the browser
        if (typeof window !== 'undefined') {
            this.init();
        }
    }
    init() {
        // Check if app is already installed/standalone
        this.isStandalone = window.matchMedia('(display-mode: standalone)').matches ||
            window.navigator.standalone === true;
        // Listen for beforeinstallprompt event
        window.addEventListener('beforeinstallprompt', (e) => {
            console.log('PWA: beforeinstallprompt event fired');
            e.preventDefault();
            this.deferredPrompt = e;
            this.notifyCallbacks('onInstallPromptReady', true);
        });
        // Listen for app installed event
        window.addEventListener('appinstalled', () => {
            console.log('PWA: App installed successfully');
            this.isInstalled = true;
            this.deferredPrompt = null;
            this.notifyCallbacks('onInstalled', true);
        });
        // Register service worker if supported
        this.registerServiceWorker();
    }
    registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            // Use different URLs based on environment
            const swUrl = process.env.NODE_ENV === 'production'
                ? '/service-worker.js'
                : '/sw.js'; // For development
            navigator.serviceWorker.register(swUrl)
                .then((registration) => {
                console.log('PWA: Service Worker registered successfully:', registration);
                // Check for updates
                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
                    if (newWorker) {
                        newWorker.addEventListener('statechange', () => {
                            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                console.log('PWA: New content available');
                                this.notifyCallbacks('onUpdateAvailable', registration);
                            }
                        });
                    }
                });
            })
                .catch((registrationError) => {
                console.log('PWA: Service Worker registration failed:', registrationError);
            });
        }
        else {
            console.log('PWA: Service Worker not supported');
        }
    }
    async showInstallPrompt() {
        if (!this.deferredPrompt) {
            console.log('PWA: No install prompt available');
            return { outcome: 'no-prompt' };
        }
        console.log('PWA: Showing install prompt');
        const result = await this.deferredPrompt.prompt();
        console.log('PWA: Install prompt result:', result);
        this.deferredPrompt = null;
        return result;
    }
    canInstall() {
        const canInstall = this.deferredPrompt !== null && !this.isStandalone;
        console.log('PWA: Can install?', canInstall, {
            hasDeferredPrompt: !!this.deferredPrompt,
            isStandalone: this.isStandalone
        });
        return canInstall;
    }
    isAppInstalled() {
        return this.isInstalled || this.isStandalone;
    }
    subscribe(event, callback) {
        if (this.callbacks[event]) {
            this.callbacks[event].push(callback);
        }
    }
    unsubscribe(event, callback) {
        if (this.callbacks[event]) {
            this.callbacks[event] = this.callbacks[event].filter(cb => cb !== callback);
        }
    }
    notifyCallbacks(event, data) {
        if (this.callbacks[event]) {
            this.callbacks[event].forEach(callback => callback(data));
        }
    }
}
// Singleton instance
export const pwaManager = new PWAManager();
