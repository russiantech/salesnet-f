import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { NotificationService } from "../../../services/local/NotificationService";
import { UsersService } from "../../../services/local/UsersService";
import { AxiosUsersService } from "../../../services/net/AxiosUsersService";
import ResponseModal from "./ResponseModal";

// TypeScript interfaces
interface FormData {
    username: string;
    email?: string;
    phone?: string;
    password: string;
}

interface ModalState {
    show: boolean;
    message: string;
    type: string;
}

interface Observer {
    (data: ModalState): void;
}

// Extend Window interface to include bootstrap
// declare global {
//     interface Window {
//         bootstrap: {
//             Offcanvas: {
//                 getInstance: (element: HTMLElement) => {
//                     hide: () => void;
//                 } | null;
//             };
//         };
//     }
// }

const AuthCanvas = () => {
    return (
        <>
            <QuickSignin />
            <QuickSignup />
        </>
    )
}

export default AuthCanvas

const QuickSignup = () => {

    // const navigate = useNavigate(); // Initialize useNavigate

    const [formData, setFormData] = useState<FormData>({
        username: '',
        email: '',
        phone: '',
        password: '',
    });

    const [modalState, setModalState] = useState<ModalState>({ show: false, message: '', type: '' });
    const [isLoading, setIsLoading] = useState<boolean>(false); // Loading state for the button

    useEffect(() => {

        const observer: Observer = (data: ModalState) => {
            setModalState(data);
        };

        NotificationService.subscribe(observer);
        return () => {
            NotificationService.unsubscribe(observer);
        };
    }, []);

    const onSubmitForm = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        setIsLoading(true); // Set loading state to true

        // Show loading message
        NotificationService.showDialog("Submitting form...", "primary");

        if (!formData.username || !formData.phone || !formData.email || !formData.password) {
            NotificationService.showDialog("Must provide ('username', 'phone', 'email', 'password')", "danger");
            setIsLoading(false); // Reset loading state
            return;
        }

        AxiosUsersService.signup(formData).then((res: any) => {
            const message = res.data.full_messages && res.data.full_messages.length > 0
                ? res.data.full_messages[0]
                : res.data.message || res.data.error;

            if (res.data && res.data.success) {
                NotificationService.showDialog(message || 'You registered successfully', 'success');
                // navigate('/auth/signin');
                // navigate('/user/personal'); 
            } else {
                NotificationService.showDialog(message || 'Unknown error occurred', 'error');
            }
        }).catch((err: any) => {
            // Check if the error response exists
            const errorMessage = err.response?.data?.error || err.message || 'An unknown error occurred';
            NotificationService.showDialog(errorMessage, 'error');
        }).finally(() => {
            setIsLoading(false); // Reset loading state after completion
        });
    };

    const onInputChange = (key: keyof FormData, evt: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [key]: evt.target.value });
    };

    return (
        <>
            <div
                className="offcanvas offcanvas-end pb-sm-2 px-sm-2"
                id="quickSignupCanvas"
                tabIndex={-1}
                aria-labelledby="signinLabel"
                style={{ width: '500px' }}
            >
                {/* Header */}
                <div className="offcanvas-header flex-column align-items-start py-3 pt-lg-4">
                    <div className="d-flex align-items-center justify-content-between w-100 mb-3 mb-lg-4">
                        <NavLink className="navbar-brand d-flex align-items-center" to="/">
                            <img src="/assets/img/us/logos/favicon.svg" alt="Logo" className="me-2" style={{ width: '32px', height: '32px' }} />
                            <h4 className="offcanvas-title" id="signinLabel">Quick sign up to continue</h4>
                        </NavLink>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                </div>

                {/* Body */}
                <div className="offcanvas-body d-flex flex-column gap-4 pt-2">

                    {/* <h2 className="h2 mt-auto">Create an account</h2> */}
                    <div className="nav fs-sm mb-3 mb-lg-2 animate-scale">
                        I already have an account
                        <button className="animate-scale badge rounded-pill p-1 ml-1 text-bg-info" data-bs-toggle="offcanvas" data-bs-target="#quickSigninCanvas"
                            aria-controls="signinCanvas" aria-label="Sign in Canvas">Sign in</button>
                    </div>
                    {/* Form */}
                    <form className="needs-validation" id="signup_form" onSubmit={onSubmitForm} noValidate>
                        <div className="position-relative mb-4">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text"
                                name="username"
                                value={formData.username}
                                onChange={(evt) => onInputChange('username', evt)}
                                placeholder="enter/choose your username"
                                className="form-control form-control-lg"
                                id="username"
                                required />
                            <div className="invalid-tooltip bg-transparent py-0">Must enter/choose your username!</div>
                        </div>
                        <div className="position-relative mb-4">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email"
                                name="email"
                                value={formData.email || ''}
                                onChange={(evt) => onInputChange('email', evt)}
                                placeholder="valid email address"
                                className="form-control form-control-lg"
                                id="email"
                                required />
                            <div className="invalid-tooltip bg-transparent py-0">Enter a valid email address!</div>
                        </div>
                        <div className="position-relative mb-4">
                            <label htmlFor="phone" className="form-label">Phone</label>
                            <input type="tel"
                                name="phone"
                                value={formData.phone || ''}
                                onChange={(evt) => onInputChange('phone', evt)}
                                placeholder="active phone number"
                                className="form-control form-control-lg"
                                id="phone"
                                required />
                            <div className="invalid-tooltip bg-transparent py-0">Enter a valid phone number!</div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="form-label">Password</label>
                            <div className="password-toggle">
                                <input type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={(evt) => onInputChange('password', evt)}
                                    className="form-control form-control-lg"
                                    id="password"
                                    minLength={4}
                                    placeholder="Minimum 4 characters"
                                    required />
                                <div className="invalid-tooltip bg-transparent py-0">Password does not meet the required criteria!</div>
                                <label className="password-toggle-button fs-lg" aria-label="Show/hide password">
                                    <input type="checkbox" className="btn-check" />
                                </label>
                            </div>
                        </div>
                        <div className="d-flex flex-column gap-2 mb-4">
                            <div className="form-check">
                                <input type="checkbox" defaultChecked className="form-check-input" id="privacy" required />
                                <label htmlFor="privacy" className="form-check-label">
                                    I have read and accept the <NavLink className="text-dark-emphasis" to="#!"> Privacy Policy</NavLink></label>
                            </div>
                        </div>

                        <ResponseModal show={modalState.show} message={modalState.message} type={modalState.type} />

                        <button type="submit" className={`btn btn-lg bg-dark text-white w-100 ${isLoading ? 'disabled' : ''}`} disabled={isLoading}>
                            {isLoading ? (
                                // <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                <div className="spinner-grow spinner-grow-sm" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>

                            ) : (
                                'Sign up Now.'
                            )}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="d-flex align-items-center my-4">
                        <hr className="w-100 m-0" />
                        <span className="text-body-emphasis fw-medium text-nowrap mx-4">or continue with</span>
                        <hr className="w-100 m-0" />
                    </div>
                    {/* Social login */}
                    <div className="d-flex flex-column flex-sm-row gap-3 pb-4 mb-3 mb-lg-4">
                        <button type="button" className="btn btn-lg btn-outline-secondary w-100 px-2">
                            <i className="fi-google ms-1 me-1" />
                            Google
                        </button>
                        <button type="button" className="btn disabled btn-lg btn-outline-secondary w-100 px-2">
                            <i className="fi-facebook ms-1 me-1" />
                            Facebook
                        </button>
                        <button type="button" className="btn disabled btn-lg btn-outline-secondary w-100 px-2">
                            <i className="fi-apple ms-1 me-1" />
                            Apple
                        </button>
                    </div>

                </div>

            </div>
        </>
    );
}

const QuickSignin = () => {
    const signinCanvasRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || '/user/personal';

    const [formData, setFormData] = useState<Omit<FormData, 'email' | 'phone'>>({
        username: '',
        password: '',
    });

    const [modalState, setModalState] = useState<ModalState>({ show: false, message: '', type: '' });
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const observer: Observer = (data: ModalState) => {
            setModalState(data);
        };

        NotificationService.subscribe(observer);
        return () => {
            NotificationService.unsubscribe(observer);
        };
    }, []);

    const onSubmitForm = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        setIsLoading(true);

        NotificationService.showDialog("Sending...", "primary");

        if (!formData.username || !formData.password) {
            NotificationService.showDialog("Must provide both username and password.", "danger");
            setIsLoading(false);
            return;
        }

        AxiosUsersService.signin(formData)
            .then((res: any) => {
                const message = res.data.full_messages?.[0] || res.data.message || res.data.error || 'Login successful';

                if (res.data.success) {
                    if(res.data.access_token){
                        const user = res.data;
                        const user_data = {
                            ...user,
                            access_token: user.access_token,
                            refresh_token: user.refresh_token
                        };

                        UsersService.authenticate(user_data);
                        NotificationService.showDialog(message, 'success');
                    }
                    // Close the offcanvas after successful login
                    if (signinCanvasRef.current && typeof window !== 'undefined' && window.bootstrap) {
                        const offcanvas = window.bootstrap.Offcanvas.getInstance(signinCanvasRef.current);
                        offcanvas?.hide();
                    }
                    
                    // navigate(from, { replace: true });
                } else {
                    NotificationService.showDialog(message, 'danger');
                }
            })
            .catch((err: any) => {
                const errorMessage = err.response?.data?.error || err.message || 'An unknown error occurred';
                NotificationService.showDialog(errorMessage, 'error');
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const onInputChange = (key: keyof Omit<FormData, 'email' | 'phone'>, evt: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [key]: evt.target.value });
    };

    return (
        <div 
            ref={signinCanvasRef}
            className="offcanvas offcanvas-end pb-sm-2 px-sm-2"
            id="quickSigninCanvas"
            tabIndex={-1}
            aria-labelledby="signinLabel"
            style={{ width: '500px' }}
        >
        {/* Header */}
        <div className="offcanvas-header flex-column align-items-start py-3 pt-lg-4">
            <div className="d-flex align-items-center justify-content-between w-100 mb-3 mb-lg-4">
                <NavLink className="navbar-brand d-flex align-items-center" to="/">
                    <img src="/assets/img/us/logos/favicon.svg" alt="Logo" className="me-2" style={{ width: '32px', height: '32px' }} />
                    <h4 className="offcanvas-title" id="signinLabel">Quick Sign-in to Continue</h4>
                </NavLink>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
        </div>

        {/* Body */}
        <div className="offcanvas-body d-flex flex-column gap-4 pt-2">
            {/* <h1 className="h2 mt-auto">Welcome back</h1> */}
            <div className="nav fs-sm mb-2 animate-scale">
                Don't have an account? 
                <button className="animate-target p-1 ms-2 badge rounded-pill text-bg-info" data-bs-toggle="offcanvas" data-bs-target="#quickSignupCanvas"
                    aria-controls="signupCanvas" aria-label="Sign up Canvas">Create an account</button>
            </div>
            {/* Sign-in Form */}
            <form className="needs-validation" id="signin_form" onSubmit={onSubmitForm} noValidate>
                <div className="position-relative mb-4">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text"
                        name="username"
                        value={formData.username}
                        onChange={(evt) => onInputChange('username', evt)}
                        placeholder="Enter your username"
                        className="form-control form-control-lg"
                        id="username"
                        required />
                    <div className="invalid-tooltip bg-transparent py-0">Must enter your username!</div>
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password"
                        name="password"
                        value={formData.password}
                        onChange={(evt) => onInputChange('password', evt)}
                        className="form-control form-control-lg"
                        id="password"
                        minLength={4}
                        placeholder="Minimum 4 characters"
                        required />
                    <div className="invalid-tooltip bg-transparent py-0">Password does not meet the required criteria!</div>
                </div>

                <ResponseModal show={modalState.show} message={modalState.message} type={modalState.type} />

                <button type="submit" className={`btn btn-lg bg-dark text-white w-100 ${isLoading ? 'disabled' : ''}`} disabled={isLoading}>
                    {isLoading ? (
                        <div className="spinner-grow spinner-grow-sm" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    ) : (
                        'Sign in'
                    )}
                </button>
            </form>
            {/* Divider */}
            <div className="d-flex align-items-center my-4">
                <hr className="w-100 m-0" />
                <span className="text-body-emphasis fw-medium text-nowrap mx-4">or continue with</span>
                <hr className="w-100 m-0" />
            </div>
            {/*  */}
            <div className="d-flex flex-column flex-sm-row gap-3 pb-4 mb-3 mb-lg-4">
                <button id="google-signin-btn" type="button" className="btn btn-lg btn-outline-secondary w-100 px-2">
                    <i className="ci-google ms-1 me-1" />
                    Google
                </button>
                <button type="button" disabled className="btn btn-lg btn-outline-secondary w-100 px-2">
                    <i className="ci-facebook ms-1 me-1" />
                    Facebook
                </button>
                <button type="button" disabled className="btn btn-lg btn-outline-secondary w-100 px-2">
                    <i className="ci-apple ms-1 me-1" />
                    Apple
                </button>
            </div>

        </div>

    </div>

    );
};