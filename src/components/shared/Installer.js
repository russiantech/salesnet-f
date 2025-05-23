import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// ================================
// FILE: components/Installer.tsx
// Purpose: Smart PWA installer that handles its own timing and user experience
// ================================
// ================================
// FILE: components/shared/Installer.js
// Update your existing file at src/components/shared/Installer.tsx
// ================================
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { usePWA } from '../../hooks/usePWA';
const Installer = () => {
    const { canInstall, isInstalling, install } = usePWA();
    const [hasBeenShown, setHasBeenShown] = useState(false);
    const [userDismissed, setUserDismissed] = useState(false);
    const [showInstaller, setShowInstaller] = useState(false);
    const offcanvasRef = useRef(null);
    // Debug logging
    console.log('Installer render:', { canInstall, showInstaller, hasBeenShown, userDismissed });
    // Smart timing logic
    useEffect(() => {
        if (!canInstall || hasBeenShown || userDismissed) {
            console.log('Installer: Not showing due to conditions:', { canInstall, hasBeenShown, userDismissed });
            return;
        }
        // Check dismiss history
        const dismissCount = parseInt(sessionStorage.getItem('pwa-dismiss-count') || '0');
        const lastDismissed = sessionStorage.getItem('pwa-last-dismissed');
        const today = new Date().toDateString();
        if (dismissCount >= 2) {
            console.log('Installer: Too many dismissals');
            return;
        }
        if (lastDismissed === today) {
            console.log('Installer: Already dismissed today');
            return;
        }
        console.log('Installer: Setting up timing logic');
        const showInstaller = () => {
            console.log('Installer: Showing installer');
            setShowInstaller(true);
            setHasBeenShown(true);
            // Trigger Bootstrap offcanvas
            setTimeout(() => {
                if (offcanvasRef.current && window.bootstrap) {
                    console.log('Installer: Triggering Bootstrap offcanvas');
                    const offcanvas = new window.bootstrap.Offcanvas(offcanvasRef.current);
                    offcanvas.show();
                }
                else {
                    console.warn('Installer: Bootstrap not available or ref not set');
                }
            }, 100);
        };
        // Simple timing for testing - show after 5 seconds
        const timer = setTimeout(() => {
            console.log('Installer: Timer triggered');
            showInstaller();
        }, 5000);
        return () => {
            clearTimeout(timer);
        };
    }, [canInstall, hasBeenShown, userDismissed]);
    const handleInstall = async () => {
        console.log('Installer: Install button clicked');
        try {
            const result = await install();
            console.log('Installer: Install result:', result);
            if (result.outcome === 'accepted') {
                setShowInstaller(false);
                sessionStorage.removeItem('pwa-dismiss-count');
                sessionStorage.removeItem('pwa-last-dismissed');
            }
        }
        catch (error) {
            console.error('Installer: Installation error:', error);
        }
    };
    const handleClose = () => {
        console.log('Installer: Close button clicked');
        setUserDismissed(true);
        setShowInstaller(false);
        const currentCount = parseInt(sessionStorage.getItem('pwa-dismiss-count') || '0');
        sessionStorage.setItem('pwa-dismiss-count', (currentCount + 1).toString());
        sessionStorage.setItem('pwa-last-dismissed', new Date().toDateString());
        if (offcanvasRef.current && window.bootstrap) {
            const offcanvas = window.bootstrap.Offcanvas.getInstance(offcanvasRef.current);
            if (offcanvas) {
                offcanvas.hide();
            }
        }
    };
    // Always render the component for testing, just hide it conditionally
    const shouldShow = canInstall && (showInstaller || hasBeenShown);
    return (_jsxs("div", { ref: offcanvasRef, className: "offcanvas offcanvas-bottom", id: "offcanvasBottom", tabIndex: "-1", "aria-labelledby": "offcanvasBottomLabel", "data-bs-backdrop": "true", "data-bs-keyboard": "true", style: { display: shouldShow ? 'block' : 'none' }, children: [_jsxs("div", { className: "offcanvas-header border-bottom", children: [_jsx("h5", { className: "offcanvas-title", id: "offcanvasBottomLabel", children: _jsxs(Link, { className: "navbar-brand pt-0", to: "#", children: [_jsx("span", { className: "d-flex flex-shrink-0 text-primary rtl-flip me-2", children: _jsx("div", { className: "flex-shrink-0 border rounded-circle", style: { width: '40px' }, children: _jsx("div", { className: "ratio ratio-1x1 rounded-circle overflow-hidden", children: _jsx("img", { src: "/assets/img/us/logos/favicon.svg", alt: "Avatar" }) }) }) }), "Salesnet"] }) }), _jsx("button", { className: "btn-close", type: "button", "data-bs-dismiss": "offcanvas", "aria-label": "Close", onClick: handleClose })] }), _jsxs("div", { className: "offcanvas-body d-flex flex-column align-items-center justify-content-center text-center", children: [_jsx("p", { className: 'lead', children: "Install Salesnet - Internet of sales - Sell like crazy charm." }), _jsxs("div", { className: "row text-center mb-3 d-none d-md-flex", children: [_jsx("div", { className: "col", children: _jsxs("small", { className: "text-muted", children: [_jsx("i", { className: "ci-zap me-1" }), "Faster Loading"] }) }), _jsx("div", { className: "col", children: _jsxs("small", { className: "text-muted", children: [_jsx("i", { className: "ci-wifi-off me-1" }), "Works Offline"] }) }), _jsx("div", { className: "col", children: _jsxs("small", { className: "text-muted", children: [_jsx("i", { className: "ci-home me-1" }), "Home Screen"] }) })] }), _jsxs("div", { className: "d-flex flex-column align-items-center gap-3 pb-4 mb-3 mb-lg-4", children: [_jsx("button", { id: "install", type: "button", className: "btn btn-dark rounded w-100 px-3 py-2 btn-lg btn-info rounded-pill", style: { maxWidth: '250px', fontSize: '1rem' }, onClick: handleInstall, disabled: isInstalling, children: isInstalling ? (_jsxs(_Fragment, { children: [_jsx("span", { className: "spinner-border spinner-border-sm me-2", role: "status", "aria-hidden": "true" }), "Installing..."] })) : (_jsxs(_Fragment, { children: [_jsx("i", { className: "ci-download ms-2 me-2" }), "Add to Home Screen"] })) }), _jsx("button", { type: "button", className: "btn btn-link text-muted btn-sm", onClick: handleClose, children: "Maybe later" })] }), _jsx("small", { className: "text-muted", children: "You can always install later from your browser menu" })] })] }));
};
export default Installer;
