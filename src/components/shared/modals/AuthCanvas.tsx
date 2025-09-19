
// components/shared/modals/AuthCanvas.tsx
import { NavLink } from "react-router-dom";
import AuthForm from "../../auth/AuthForm";
import { UsersService } from "../../../services/local/UsersService";
import { useEffect, useState } from "react";

const AuthCanvas = () => {
    return (
        <>
            <QuickSignin />
            <QuickSignup />
        </>
    );
};

const QuickSignup = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Monitor authentication status
    useEffect(() => {
        const checkAuth = () => {
            setIsAuthenticated(UsersService.isAuthenticated());
        };

        checkAuth();
        
        // Listen for storage changes (when user logs in/out)
        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === 'access_token' || e.key === 'user_data') {
                checkAuth();
            }
        };

        window.addEventListener('storage', handleStorageChange);
        
        // Also listen for custom auth events if your UsersService dispatches them
        const handleAuthChange = () => checkAuth();
        window.addEventListener('userAuthenticated', handleAuthChange);
        window.addEventListener('userLoggedOut', handleAuthChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('userAuthenticated', handleAuthChange);
            window.removeEventListener('userLoggedOut', handleAuthChange);
        };
    }, []);

    // Don't render signup canvas if user is already authenticated
    if (isAuthenticated) {
        return null;
    }

    return (
        <div
            className="offcanvas offcanvas-end pb-sm-2 px-sm-2"
            id="quickSignupCanvas"
            tabIndex={-1}
            aria-labelledby="signupLabel"
            style={{ width: '500px' }}
        >
            <div className="offcanvas-header flex-column align-items-start py-3 pt-lg-4">
                <div className="d-flex align-items-center justify-content-between w-100 mb-3 mb-lg-4">
                    <NavLink className="navbar-brand d-flex align-items-center" to="/">
                        <img 
                            src="/assets/img/us/logos/favicon.svg" 
                            alt="Logo" 
                            className="me-2" 
                            style={{ width: '32px', height: '32px' }} 
                        />
                        <h4 className="offcanvas-title" id="signupLabel">
                            Quick sign up to continue
                        </h4>
                    </NavLink>
                    <button 
                        type="button" 
                        className="btn-close" 
                        data-bs-dismiss="offcanvas" 
                        aria-label="Close"
                    ></button>
                </div>
            </div>

            <div className="offcanvas-body">
                <AuthForm 
                    variant="canvas"
                    formType="signup"
                    showSocialAuth={true}
                    showLogo={false}
                    onSuccess={(data) => {
                        // Close canvas on successful signup
                        const canvas = document.getElementById('quickSignupCanvas');
                        if (canvas && (window as any).bootstrap) {
                            const offcanvas = (window as any).bootstrap.Offcanvas.getInstance(canvas);
                            offcanvas?.hide();
                        }
                        // Don't redirect here, just close the modal
                    }}
                />
            </div>
        </div>
    );
};

const QuickSignin = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Monitor authentication status
    useEffect(() => {
        const checkAuth = () => {
            setIsAuthenticated(UsersService.isAuthenticated());
        };

        checkAuth();
        
        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === 'access_token' || e.key === 'user_data') {
                checkAuth();
            }
        };

        window.addEventListener('storage', handleStorageChange);
        
        const handleAuthChange = () => checkAuth();
        window.addEventListener('userAuthenticated', handleAuthChange);
        window.addEventListener('userLoggedOut', handleAuthChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('userAuthenticated', handleAuthChange);
            window.removeEventListener('userLoggedOut', handleAuthChange);
        };
    }, []);

    // Don't render signin canvas if user is already authenticated
    if (isAuthenticated) {
        return null;
    }

    return (
        <div 
            className="offcanvas offcanvas-end pb-sm-2 px-sm-2"
            id="quickSigninCanvas"
            tabIndex={-1}
            aria-labelledby="signinLabel"
            style={{ width: '500px' }}
        >
            <div className="offcanvas-header flex-column align-items-start py-3 pt-lg-4">
                <div className="d-flex align-items-center justify-content-between w-100 mb-3 mb-lg-4">
                    <NavLink className="navbar-brand d-flex align-items-center" to="/">
                        <img 
                            src="/assets/img/us/logos/favicon.svg" 
                            alt="Logo" 
                            className="me-2" 
                            style={{ width: '32px', height: '32px' }} 
                        />
                        <h4 className="offcanvas-title" id="signinLabel">
                            Quick Sign-in to Continue
                        </h4>
                    </NavLink>
                    <button 
                        type="button" 
                        className="btn-close" 
                        data-bs-dismiss="offcanvas" 
                        aria-label="Close"
                    ></button>
                </div>
            </div>

            <div className="offcanvas-body">
                <AuthForm 
                    variant="canvas"
                    formType="signin"
                    showSocialAuth={true}
                    showLogo={false}
                    onSuccess={(data) => {
                        // Close canvas on successful signin
                        const canvas = document.getElementById('quickSigninCanvas');
                        if (canvas && (window as any).bootstrap) {
                            const offcanvas = (window as any).bootstrap.Offcanvas.getInstance(canvas);
                            offcanvas?.hide();
                        }
                        // Don't redirect here - user stays on current page but now authenticated
                        
                        // Optionally refresh the page or trigger a re-render
                        // window.location.reload(); // Only if needed
                    }}
                />
            </div>
        </div>
    );
};

export default AuthCanvas;