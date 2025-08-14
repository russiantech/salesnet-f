// ================================
// FILE: components/Installer.tsx
// Purpose: Smart PWA installer with controlled timing and user experience
// ================================

import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { usePWA } from '../../hooks/usePWA';

type InstallOutcome = 'accepted' | 'dismissed' | 'error';

interface InstallResult {
  outcome: InstallOutcome;
  error?: Error;
}

const Installer = () => {
  // Hooks and refs
  const { canInstall, isInstalling, install } = usePWA();
  const [hasBeenShown, setHasBeenShown] = useState(false);
  const [userDismissed, setUserDismissed] = useState(false);
  const [showInstaller, setShowInstaller] = useState(false);
  const offcanvasRef = useRef<HTMLDivElement>(null);

  // Debug logging (remove in production)
  useEffect(() => {
    console.debug('Installer state:', { 
      canInstall, 
      showInstaller, 
      hasBeenShown, 
      userDismissed,
      isInstalling
    });
  }, [canInstall, showInstaller, hasBeenShown, userDismissed, isInstalling]);

  // Installation control logic
  useEffect(() => {
    if (!canInstall || hasBeenShown || userDismissed) return;

    const dismissCount = parseInt(sessionStorage.getItem('pwa-dismiss-count') || '0', 10);
    const lastDismissed = sessionStorage.getItem('pwa-last-dismissed');
    const today = new Date().toDateString();

    if (dismissCount >= 2 || lastDismissed === today) return;

    const timer = setTimeout(() => {
      setShowInstaller(true);
      setHasBeenShown(true);
      
      // Initialize offcanvas after state update
      setTimeout(() => {
        if (offcanvasRef.current && window.bootstrap?.Offcanvas) {
          const BootstrapOffcanvas = window.bootstrap.Offcanvas as any;
          new BootstrapOffcanvas(offcanvasRef.current).show();
        }
      }, 100);
    }, 5000); // Show after 5 seconds (adjust as needed)

    return () => clearTimeout(timer);
  }, [canInstall, hasBeenShown, userDismissed]);

  const handleInstall = async (): Promise<void> => {
    if (!install) return;

    try {
      const result = await install() as InstallResult;
      if (result.outcome === 'accepted') {
        setShowInstaller(false);
        sessionStorage.removeItem('pwa-dismiss-count');
        sessionStorage.removeItem('pwa-last-dismissed');
      }
    } catch (error) {
      console.error('Installation failed:', error);
    }
  };

  const handleClose = (): void => {
    setUserDismissed(true);
    setShowInstaller(false);
    
    const currentCount = parseInt(sessionStorage.getItem('pwa-dismiss-count') || '0', 10);
    sessionStorage.setItem('pwa-dismiss-count', (currentCount + 1).toString());
    sessionStorage.setItem('pwa-last-dismissed', new Date().toDateString());
    
    if (offcanvasRef.current && window.bootstrap?.Offcanvas) {
      const offcanvas = window.bootstrap.Offcanvas.getInstance(offcanvasRef.current);
      offcanvas?.hide();
    }
  };

  const shouldShow = canInstall && (showInstaller || hasBeenShown);

  if (!shouldShow) return null;

  return (
    <div 
      ref={offcanvasRef}
      className="offcanvas offcanvas-bottom" 
      id="pwa-installer-offcanvas"
      tabIndex={-1}
      aria-labelledby="pwa-installer-label"
      data-bs-backdrop="true"
      data-bs-keyboard="true"
    >
      <div className="offcanvas-header border-bottom">
        <h5 className="offcanvas-title" id="pwa-installer-label">
          <Link className="navbar-brand pt-0" to="/" aria-label="Salesnet Home">
            <span className="d-flex flex-shrink-0 text-primary rtl-flip me-2">
              <div className="flex-shrink-0 rounded-circle" style={{ width: '40px' }}>
                <div className="ratio ratio-1x1 rounded-circle">
                  <img 
                    src="/assets/img/us/logos/favicon.svg" 
                    alt="Salesnet Logo" 
                    width="40"
                    height="40"
                    loading="lazy"
                  />
                </div>
              </div>
            </span>
            Salesnet
          </Link>
        </h5>
        <button 
          type="button" 
          className="btn-close" 
          data-bs-dismiss="offcanvas" 
          aria-label="Close installer"
          onClick={handleClose}
        />
      </div>

      <div className="offcanvas-body text-center">
        <p className="lead mb-4">Install Salesnet - Internet of Sales</p>
        
        <div className="row mb-4 d-none d-md-flex">
          {[
            { icon: 'ci-zap', text: 'Faster Loading' },
            { icon: 'ci-wifi-off', text: 'Works Offline' },
            { icon: 'ci-home', text: 'Home Screen' }
          ].map((feature, index) => (
            <div key={index} className="col">
              <small className="text-muted">
                <i className={`${feature.icon} me-1`} />
                {feature.text}
              </small>
            </div>
          ))}
        </div>

        <div className="d-flex flex-column align-items-center gap-3 pb-4">
          <button 
            type="button"
            className="btn btn-dark btn-lg rounded-pill px-4 py-2"
            style={{ maxWidth: '250px' }}
            onClick={handleInstall}
            disabled={isInstalling}
            aria-busy={isInstalling}
          >
            {isInstalling ? (
              <>
                <span 
                  className="spinner-border spinner-border-sm me-2" 
                  role="status" 
                  aria-hidden="true"
                />
                Installing...
              </>
            ) : (
              <>
                <i className="ci-download me-2" aria-hidden="true" />
                Add to Home Screen
              </>
            )}
          </button>
          
          <button 
            type="button" 
            className="btn btn-link text-muted btn-sm"
            onClick={handleClose}
            aria-label="Dismiss installation prompt"
          >
            Maybe later
          </button>
        </div>

        <small className="text-muted d-block mt-2">
          You can always install later from your browser menu
        </small>
      </div>
    </div>
  );
};

export default Installer;