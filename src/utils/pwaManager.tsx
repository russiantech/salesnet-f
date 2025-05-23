// FILE: src/utils/pwaManager.tsx

type PWAEvent = 'onInstallPromptReady' | 'onInstalled' | 'onUpdateAvailable';

type PWAEventCallbacks = {
  [K in PWAEvent]: ((data: any) => void)[];
};

class PWAManager {
  private deferredPrompt: any | null = null;
  private isInstalled: boolean = false;
  private isStandalone: boolean = false;
  private callbacks: PWAEventCallbacks = {
    onInstallPromptReady: [],
    onInstalled: [],
    onUpdateAvailable: [],
  };

  constructor() {
    if (typeof window !== 'undefined') {
      this.init();
    }
  }

  private init(): void {
    this.isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone === true;

    window.addEventListener('beforeinstallprompt', (e: Event) => {
      console.log('PWA: beforeinstallprompt event fired');
      e.preventDefault();
      this.deferredPrompt = e;
      this.notifyCallbacks('onInstallPromptReady', true);
    });

    window.addEventListener('appinstalled', () => {
      console.log('PWA: App installed successfully');
      this.isInstalled = true;
      this.deferredPrompt = null;
      this.notifyCallbacks('onInstalled', true);
    });

    this.registerServiceWorker();
  }

  private registerServiceWorker(): void {
    if ('serviceWorker' in navigator) {
      const swUrl =
        process.env.NODE_ENV === 'production' ? '/service-worker.js' : '/sw.js';

      navigator.serviceWorker
        .register(swUrl)
        .then((registration) => {
          console.log('PWA: Service Worker registered:', registration);

          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (
                  newWorker.state === 'installed' &&
                  navigator.serviceWorker.controller
                ) {
                  console.log('PWA: New content available');
                  this.notifyCallbacks('onUpdateAvailable', registration);
                }
              });
            }
          });
        })
        .catch((err) => {
          console.log('PWA: Service Worker registration failed:', err);
        });
    }
  }

  public async showInstallPrompt(): Promise<{ outcome: string }> {
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

  public canInstall(): boolean {
    const canInstall = this.deferredPrompt !== null && !this.isStandalone;
    console.log('PWA: Can install?', canInstall);
    return canInstall;
  }

  public isAppInstalled(): boolean {
    return this.isInstalled || this.isStandalone;
  }

  public subscribe(event: PWAEvent, callback: (data: any) => void): void {
    if (this.callbacks[event]) {
      this.callbacks[event].push(callback);
    }
  }

  public unsubscribe(event: PWAEvent, callback: (data: any) => void): void {
    if (this.callbacks[event]) {
      this.callbacks[event] = this.callbacks[event].filter((cb) => cb !== callback);
    }
  }

  private notifyCallbacks(event: PWAEvent, data: any): void {
    this.callbacks[event].forEach((cb) => cb(data));
  }
}

export const pwaManager = new PWAManager();
