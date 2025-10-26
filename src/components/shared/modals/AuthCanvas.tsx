
// components/shared/modals/AuthCanvas.tsx
import { NavLink, useNavigate } from "react-router-dom";
import AuthForm from "../../auth/AuthForm";
import { UsersService } from "../../../services/local/UsersService";
import { useEffect, useState } from "react";
import { NotificationService } from "../../../services/users/NotificationService";

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

    const navigate = useNavigate();

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
                            Create Account
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
                    // onSuccess={(data) => {
                        
                    // }}
                    onSuccess={(data: any) => {

                        // Close canvas on successful signup
                        const canvas = document.getElementById('quickSignupCanvas');
                        if (canvas && (window as any).bootstrap) {
                            const offcanvas = (window as any).bootstrap.Offcanvas.getInstance(canvas);
                            offcanvas?.hide();
                        }
                        // Don't redirect here, just close the modal

                        // console.log("Signup Success Data:", data);
                        
                        const token = data?.token;   
                        const email = data?.email;   
                        const phone = data?.phone;   

                        //  Require token + at least one contact method
                        if (token && (email || phone)) {
                            navigate('/auth/verify-signup', {
                                state: { 
                                    token, 
                                    email: email || null,  // Pass null if not provided
                                    phone: phone || null   // Pass null if not provided
                                } 
                            });
                        } else {
                            console.error("Missing verification data. Need token and at least one contact:", { 
                                token, 
                                email, 
                                phone 
                            });
                            NotificationService.showDialog(
                                "Verification setup failed. Please try again.",
                                "error"
                            );
                        }
                    }}
                    
                />

                {/* <AuthForm 
                    variant="canvas"
                    formType="signup"
                    showSocialAuth={true}
                    showLogo={true}
                    showBenefits={true}
                    onSuccess={(data: any) => {
                        console.log("Signup Success Data:", data);
                        
                        const token = data?.token;   
                        const email = data?.email;   
                        const phone = data?.phone;   

                        //  Require token + at least one contact method
                        if (token && (email || phone)) {
                            navigate('/auth/verify-signup', {
                                state: { 
                                    token, 
                                    email: email || null,  // Pass null if not provided
                                    phone: phone || null   // Pass null if not provided
                                } 
                            });
                        } else {
                            console.error("Missing verification data. Need token and at least one contact:", { 
                                token, 
                                email, 
                                phone 
                            });
                            NotificationService.showDialog(
                                "Verification setup failed. Please try again.",
                                "error"
                            );
                        }
                    }}
                /> */}

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
                            Login to Continue
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