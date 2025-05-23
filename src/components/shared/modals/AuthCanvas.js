import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { NotificationService } from "../../../services/local/NotificationService";
import { UsersService } from "../../../services/local/UsersService";
import { AxiosUsersService } from "../../../services/net/AxiosUsersService";
import ResponseModal from "./ResponseModal";
const AuthCanvas = () => {
    return (_jsxs(_Fragment, { children: [_jsx(QuickSignin, {}), _jsx(QuickSignup, {})] }));
};
export default AuthCanvas;
const QuickSignup = () => {
    const navigate = useNavigate(); // Initialize useNavigate
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        password: '',
    });
    const [modalState, setModalState] = useState({ show: false, message: '', type: '' });
    const [isLoading, setIsLoading] = useState(false); // Loading state for the button
    useEffect(() => {
        const observer = (data) => {
            setModalState(data);
        };
        NotificationService.subscribe(observer);
        return () => {
            NotificationService.unsubscribe(observer);
        };
    }, []);
    const onSubmitForm = (evt) => {
        evt.preventDefault();
        setIsLoading(true); // Set loading state to true
        // Show loading message
        NotificationService.showDialog("Submitting form...", "primary");
        if (!formData.username || !formData.phone || !formData.email || !formData.password) {
            NotificationService.showDialog("Must provide ('username', 'phone', 'email', 'password')", "danger");
            setIsLoading(false); // Reset loading state
            return;
        }
        AxiosUsersService.signup(formData).then(res => {
            const message = res.data.full_messages && res.data.full_messages.length > 0
                ? res.data.full_messages[0]
                : res.data.message || res.data.error;
            if (res.data && res.data.success) {
                NotificationService.showDialog(message || 'You registered successfully', 'success');
                // navigate('/auth/signin');
                // navigate('/user/personal'); 
            }
            else {
                NotificationService.showDialog(message || 'Unknown error occurred', 'error');
            }
        }).catch(err => {
            // Check if the error response exists
            const errorMessage = err.response?.data?.error || err.message || 'An unknown error occurred';
            NotificationService.showDialog(errorMessage, 'error');
        }).finally(() => {
            setIsLoading(false); // Reset loading state after completion
        });
    };
    const onInputChange = (key, evt) => {
        setFormData({ ...formData, [key]: evt.target.value });
    };
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "offcanvas offcanvas-end pb-sm-2 px-sm-2", id: "quickSignupCanvas", tabIndex: "-1", "aria-labelledby": "signinLabel", style: { width: '500px' }, children: [_jsx("div", { className: "offcanvas-header flex-column align-items-start py-3 pt-lg-4", children: _jsxs("div", { className: "d-flex align-items-center justify-content-between w-100 mb-3 mb-lg-4", children: [_jsxs(NavLink, { className: "navbar-brand d-flex align-items-center", to: "/", children: [_jsx("img", { src: "/assets/img/us/logos/favicon.svg", alt: "Logo", className: "me-2", style: { width: '32px', height: '32px' } }), _jsx("h4", { className: "offcanvas-title", id: "signinLabel", children: "Quick sign up to continue" })] }), _jsx("button", { type: "button", className: "btn-close", "data-bs-dismiss": "offcanvas", "aria-label": "Close" })] }) }), _jsxs("div", { className: "offcanvas-body d-flex flex-column gap-4 pt-2", children: [_jsxs("div", { className: "nav fs-sm mb-3 mb-lg-2 animate-scale", children: ["I already have an account", _jsx("button", { className: "animate-scale badge rounded-pill p-1 ml-1 text-bg-info", "data-bs-toggle": "offcanvas", "data-bs-target": "#quickSigninCanvas", "aria-controls": "signinCanvas", "aria-label": "Sign in Canvas", children: "Sign in" })] }), _jsxs("form", { className: "needs-validation", id: "signup_form", onSubmit: onSubmitForm, noValidate: true, children: [_jsxs("div", { className: "position-relative mb-4", children: [_jsx("label", { htmlFor: "username", className: "form-label", children: "Username" }), _jsx("input", { type: "text", name: "username", value: formData.username, onChange: (evt) => onInputChange('username', evt), placeholder: "enter/choose your username", className: "form-control form-control-lg", id: "username", required: true }), _jsx("div", { className: "invalid-tooltip bg-transparent py-0", children: "Must enter/choose your username!" })] }), _jsxs("div", { className: "position-relative mb-4", children: [_jsx("label", { htmlFor: "email", className: "form-label", children: "Email" }), _jsx("input", { type: "email", name: "email", value: formData.email, onChange: (evt) => onInputChange('email', evt), placeholder: "valid email address", className: "form-control form-control-lg", id: "email", required: true }), _jsx("div", { className: "invalid-tooltip bg-transparent py-0", children: "Enter a valid email address!" })] }), _jsxs("div", { className: "position-relative mb-4", children: [_jsx("label", { htmlFor: "phone", className: "form-label", children: "Phone" }), _jsx("input", { type: "tel", name: "phone", value: formData.phone, onChange: (evt) => onInputChange('phone', evt), placeholder: "active phone number", className: "form-control form-control-lg", id: "phone", required: true }), _jsx("div", { className: "invalid-tooltip bg-transparent py-0", children: "Enter a valid phone number!" })] }), _jsxs("div", { className: "mb-4", children: [_jsx("label", { htmlFor: "password", className: "form-label", children: "Password" }), _jsxs("div", { className: "password-toggle", children: [_jsx("input", { type: "password", name: "password", value: formData.password, onChange: (evt) => onInputChange('password', evt), className: "form-control form-control-lg", id: "password", minLength: 4, placeholder: "Minimum 4 characters", required: true }), _jsx("div", { className: "invalid-tooltip bg-transparent py-0", children: "Password does not meet the required criteria!" }), _jsx("label", { className: "password-toggle-button fs-lg", "aria-label": "Show/hide password", children: _jsx("input", { type: "checkbox", className: "btn-check" }) })] })] }), _jsx("div", { className: "d-flex flex-column gap-2 mb-4", children: _jsxs("div", { className: "form-check", children: [_jsx("input", { type: "checkbox", defaultChecked: true, className: "form-check-input", id: "privacy", required: true }), _jsxs("label", { htmlFor: "privacy", className: "form-check-label", children: ["I have read and accept the ", _jsx(NavLink, { className: "text-dark-emphasis", to: "#!", children: " Privacy Policy" })] })] }) }), _jsx(ResponseModal, { show: modalState.show, message: modalState.message, type: modalState.type }), _jsx("button", { type: "submit", className: `btn btn-lg bg-dark text-white w-100 ${isLoading ? 'disabled' : ''}`, disabled: isLoading, children: isLoading ? (
                                    // <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    _jsx("div", { className: "spinner-grow spinner-grow-sm", role: "status", children: _jsx("span", { className: "visually-hidden", children: "Loading..." }) })) : ('Sign up Now.') })] }), _jsxs("div", { className: "d-flex align-items-center my-4", children: [_jsx("hr", { className: "w-100 m-0" }), _jsx("span", { className: "text-body-emphasis fw-medium text-nowrap mx-4", children: "or continue with" }), _jsx("hr", { className: "w-100 m-0" })] }), _jsxs("div", { className: "d-flex flex-column flex-sm-row gap-3 pb-4 mb-3 mb-lg-4", children: [_jsxs("button", { type: "button", className: "btn btn-lg btn-outline-secondary w-100 px-2", children: [_jsx("i", { className: "fi-google ms-1 me-1" }), "Google"] }), _jsxs("button", { type: "button", className: "btn disabled btn-lg btn-outline-secondary w-100 px-2", children: [_jsx("i", { className: "fi-facebook ms-1 me-1" }), "Facebook"] }), _jsxs("button", { type: "button", className: "btn disabled btn-lg btn-outline-secondary w-100 px-2", children: [_jsx("i", { className: "fi-apple ms-1 me-1" }), "Apple"] })] })] })] }) }));
};
// Quick Sign-in Component
// const QuickSignin1 = () => {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const from = location.state?.from || '/user/personal'; // Default redirect path
//     const [formData, setFormData] = useState({
//         username: '',
//         password: '',
//     });
//     const [modalState, setModalState] = useState({ show: false, message: '', type: '' });
//     const [isLoading, setIsLoading] = useState(false);
//     useEffect(() => {
//         const observer = (data) => {
//             setModalState(data);
//         };
//         NotificationService.subscribe(observer);
//         return () => {
//             NotificationService.unsubscribe(observer);
//         };
//     }, []);
//     const onSubmitForm = (evt) => {
//         evt.preventDefault();
//         setIsLoading(true);
//         NotificationService.showDialog("Sending...", "primary");
//         if (!formData.username || !formData.password) {
//             NotificationService.showDialog("Must provide both username and password.", "danger");
//             setIsLoading(false);
//             return;
//         }
//         AxiosUsersService.signin(formData)
//             .then(res => {
//                 const message = res.data.full_messages?.[0] || res.data.message || res.data.error || 'Login successful';
//                 if (res.data.success) {
//                     const user = res.data;
//                     const user_data = {
//                         ...user,
//                         access_token: user.access_token,
//                         refresh_token: user.refresh_token
//                     };
//                     UsersService.authenticate(user_data);
//                     NotificationService.showDialog(message, 'success');
//                     navigate(from, { replace: true });
//                 } else {
//                     NotificationService.showDialog(message, 'error');
//                 }
//             })
//             .catch(err => {
//                 const errorMessage = err.response?.data?.error || err.message || 'An unknown error occurred';
//                 NotificationService.showDialog(errorMessage, 'error');
//             })
//             .finally(() => {
//                 setIsLoading(false);
//             });
//     };
//     const onInputChange = (key, evt) => {
//         setFormData({ ...formData, [key]: evt.target.value });
//     };
//     return (
//         <div 
//             className="offcanvas offcanvas-end pb-sm-2 px-sm-2"
//             id="quickSigninCanvas"
//             tabIndex={-1}
//             aria-labelledby="signinLabel"
//             style={{ width: '500px' }}
//         >
//             {/* Header */}
//             <div className="offcanvas-header flex-column align-items-start py-3 pt-lg-4">
//                 <div className="d-flex align-items-center justify-content-between w-100 mb-3 mb-lg-4">
//                     <NavLink className="navbar-brand d-flex align-items-center" to="/">
//                         <img src="/assets/img/us/logos/favicon.svg" alt="Logo" className="me-2" style={{ width: '32px', height: '32px' }} />
//                         <h4 className="offcanvas-title" id="signinLabel">Quick Sign-in to Continue</h4>
//                     </NavLink>
//                     <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//                 </div>
//             </div>
//             {/* Body */}
//             <div className="offcanvas-body d-flex flex-column gap-4 pt-2">
//                 {/* <h1 className="h2 mt-auto">Welcome back</h1> */}
//                 <div className="nav fs-sm mb-2 animate-scale">
//                     Don't have an account? 
//                     <button className="animate-target p-1 ms-2 badge rounded-pill text-bg-info" data-bs-toggle="offcanvas" data-bs-target="#quickSignupCanvas"
//                         aria-controls="signupCanvas" aria-label="Sign up Canvas">Create an account</button>
//                 </div>
//                 {/* Sign-in Form */}
//                 <form className="needs-validation" id="signin_form" onSubmit={onSubmitForm} noValidate>
//                     <div className="position-relative mb-4">
//                         <label htmlFor="username" className="form-label">Username</label>
//                         <input type="text"
//                             name="username"
//                             value={formData.username}
//                             onChange={(evt) => onInputChange('username', evt)}
//                             placeholder="Enter your username"
//                             className="form-control form-control-lg"
//                             id="username"
//                             required />
//                         <div className="invalid-tooltip bg-transparent py-0">Must enter your username!</div>
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="password" className="form-label">Password</label>
//                         <input type="password"
//                             name="password"
//                             value={formData.password}
//                             onChange={(evt) => onInputChange('password', evt)}
//                             className="form-control form-control-lg"
//                             id="password"
//                             minLength={4}
//                             placeholder="Minimum 4 characters"
//                             required />
//                         <div className="invalid-tooltip bg-transparent py-0">Password does not meet the required criteria!</div>
//                     </div>
//                     <ResponseModal show={modalState.show} message={modalState.message} type={modalState.type} />
//                     <button type="submit" className={`btn btn-lg bg-dark text-white w-100 ${isLoading ? 'disabled' : ''}`} disabled={isLoading}>
//                         {isLoading ? (
//                             <div className="spinner-grow spinner-grow-sm" role="status">
//                                 <span className="visually-hidden">Loading...</span>
//                             </div>
//                         ) : (
//                             'Sign in'
//                         )}
//                     </button>
//                 </form>
//                 {/* Divider */}
//                 <div className="d-flex align-items-center my-4">
//                     <hr className="w-100 m-0" />
//                     <span className="text-body-emphasis fw-medium text-nowrap mx-4">or continue with</span>
//                     <hr className="w-100 m-0" />
//                 </div>
//                 {/*  */}
//                 <div className="d-flex flex-column flex-sm-row gap-3 pb-4 mb-3 mb-lg-4">
//                     <button id="google-signin-btn" type="button" className="btn btn-lg btn-outline-secondary w-100 px-2">
//                         <i className="ci-google ms-1 me-1" />
//                         Google
//                     </button>
//                     <button type="button" disabled className="btn btn-lg btn-outline-secondary w-100 px-2">
//                         <i className="ci-facebook ms-1 me-1" />
//                         Facebook
//                     </button>
//                     <button type="button" disabled className="btn btn-lg btn-outline-secondary w-100 px-2">
//                         <i className="ci-apple ms-1 me-1" />
//                         Apple
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };
// 
// src/components/auth/QuickSignin.tsx
const QuickSignin = () => {
    const signinCanvasRef = useRef(null); // Moved ref inside component
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || '/user/personal';
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [modalState, setModalState] = useState({ show: false, message: '', type: '' });
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const observer = (data) => {
            setModalState(data);
        };
        NotificationService.subscribe(observer);
        return () => {
            NotificationService.unsubscribe(observer);
        };
    }, []);
    const onSubmitForm = (evt) => {
        evt.preventDefault();
        setIsLoading(true);
        NotificationService.showDialog("Sending...", "primary");
        if (!formData.username || !formData.password) {
            NotificationService.showDialog("Must provide both username and password.", "danger");
            setIsLoading(false);
            return;
        }
        AxiosUsersService.signin(formData)
            .then(res => {
            const message = res.data.full_messages?.[0] || res.data.message || res.data.error || 'Login successful';
            if (res.data.success) {
                if (res.data.access_token) {
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
                if (signinCanvasRef.current) {
                    const offcanvas = bootstrap.Offcanvas.getInstance(signinCanvasRef.current);
                    offcanvas?.hide();
                }
                // navigate(from, { replace: true });
            }
            else {
                NotificationService.showDialog(message, 'danger');
            }
        })
            .catch(err => {
            const errorMessage = err.response?.data?.error || err.message || 'An unknown error occurred';
            NotificationService.showDialog(errorMessage, 'error');
        })
            .finally(() => {
            setIsLoading(false);
        });
    };
    const onInputChange = (key, evt) => {
        setFormData({ ...formData, [key]: evt.target.value });
    };
    return (_jsxs("div", { ref: signinCanvasRef, className: "offcanvas offcanvas-end pb-sm-2 px-sm-2", id: "quickSigninCanvas", tabIndex: -1, "aria-labelledby": "signinLabel", style: { width: '500px' }, children: [_jsx("div", { className: "offcanvas-header flex-column align-items-start py-3 pt-lg-4", children: _jsxs("div", { className: "d-flex align-items-center justify-content-between w-100 mb-3 mb-lg-4", children: [_jsxs(NavLink, { className: "navbar-brand d-flex align-items-center", to: "/", children: [_jsx("img", { src: "/assets/img/us/logos/favicon.svg", alt: "Logo", className: "me-2", style: { width: '32px', height: '32px' } }), _jsx("h4", { className: "offcanvas-title", id: "signinLabel", children: "Quick Sign-in to Continue" })] }), _jsx("button", { type: "button", className: "btn-close", "data-bs-dismiss": "offcanvas", "aria-label": "Close" })] }) }), _jsxs("div", { className: "offcanvas-body d-flex flex-column gap-4 pt-2", children: [_jsxs("div", { className: "nav fs-sm mb-2 animate-scale", children: ["Don't have an account?", _jsx("button", { className: "animate-target p-1 ms-2 badge rounded-pill text-bg-info", "data-bs-toggle": "offcanvas", "data-bs-target": "#quickSignupCanvas", "aria-controls": "signupCanvas", "aria-label": "Sign up Canvas", children: "Create an account" })] }), _jsxs("form", { className: "needs-validation", id: "signin_form", onSubmit: onSubmitForm, noValidate: true, children: [_jsxs("div", { className: "position-relative mb-4", children: [_jsx("label", { htmlFor: "username", className: "form-label", children: "Username" }), _jsx("input", { type: "text", name: "username", value: formData.username, onChange: (evt) => onInputChange('username', evt), placeholder: "Enter your username", className: "form-control form-control-lg", id: "username", required: true }), _jsx("div", { className: "invalid-tooltip bg-transparent py-0", children: "Must enter your username!" })] }), _jsxs("div", { className: "mb-4", children: [_jsx("label", { htmlFor: "password", className: "form-label", children: "Password" }), _jsx("input", { type: "password", name: "password", value: formData.password, onChange: (evt) => onInputChange('password', evt), className: "form-control form-control-lg", id: "password", minLength: 4, placeholder: "Minimum 4 characters", required: true }), _jsx("div", { className: "invalid-tooltip bg-transparent py-0", children: "Password does not meet the required criteria!" })] }), _jsx(ResponseModal, { show: modalState.show, message: modalState.message, type: modalState.type }), _jsx("button", { type: "submit", className: `btn btn-lg bg-dark text-white w-100 ${isLoading ? 'disabled' : ''}`, disabled: isLoading, children: isLoading ? (_jsx("div", { className: "spinner-grow spinner-grow-sm", role: "status", children: _jsx("span", { className: "visually-hidden", children: "Loading..." }) })) : ('Sign in') })] }), _jsxs("div", { className: "d-flex align-items-center my-4", children: [_jsx("hr", { className: "w-100 m-0" }), _jsx("span", { className: "text-body-emphasis fw-medium text-nowrap mx-4", children: "or continue with" }), _jsx("hr", { className: "w-100 m-0" })] }), _jsxs("div", { className: "d-flex flex-column flex-sm-row gap-3 pb-4 mb-3 mb-lg-4", children: [_jsxs("button", { id: "google-signin-btn", type: "button", className: "btn btn-lg btn-outline-secondary w-100 px-2", children: [_jsx("i", { className: "ci-google ms-1 me-1" }), "Google"] }), _jsxs("button", { type: "button", disabled: true, className: "btn btn-lg btn-outline-secondary w-100 px-2", children: [_jsx("i", { className: "ci-facebook ms-1 me-1" }), "Facebook"] }), _jsxs("button", { type: "button", disabled: true, className: "btn btn-lg btn-outline-secondary w-100 px-2", children: [_jsx("i", { className: "ci-apple ms-1 me-1" }), "Apple"] })] })] })] }));
};
