import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { NotificationService } from "../../../services/local/NotificationService";
import { UsersService } from "../../../services/local/UsersService";
import { AxiosUsersService } from "../../../services/net/AxiosUsersService";
import ResponseModal from "./ResponseModal";
// import NewArrivals from "../../../pages/home/NewArrivals";
const Canvas = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Basket, {}), _jsx(QuickSignin, {}), _jsx(QuickSignup, {}), _jsx(Installer, {})] }));
};
export default Canvas;
// // Quick signin
// const QuickSignin = () => {
//   return (
//     <>
//       {/* Shopping cart offcanvas */}
//       <div
//         className="offcanvas offcanvas-end pb-sm-2 px-sm-2"
//         id="quickSigninCanvas"
//         tabIndex="-1"
//         aria-labelledby="signinLabel"
//         style={{ width: '500px' }}
//       >
//         {/* Header */}
//         <div className="offcanvas-header flex-column align-items-start py-3 pt-lg-4">
//           <div className="d-flex align-items-center justify-content-between w-100 mb-3 mb-lg-4">
//             <h4 className="offcanvas-title" id="signinLabel">
//               Quickly Signin To Continue..
//             </h4>
//             <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//           </div>
//         </div>
//         {/* Items */}
//         <div className="offcanvas-body d-flex flex-column gap-4 pt-2">
//           {/* Item */}
//           <Signin />
//           {/* Additional items */}
//         </div>
//         {/* Footer */}
//         <div className="offcanvas-header flex-column align-items-start">
//           <div className="d-flex align-items-center justify-content-between w-100 mb-3 mb-md-4">
//             <span className="text-light-emphasis">Subtotal:</span>
//             <span className="h6 mb-0">$2,317.00</span>
//           </div>
//           <div className="d-flex w-100 gap-3">
//             <NavLink className="btn btn-lg btn-secondary w-100" to='/user/basket'>
//              Back
//             </NavLink>
//             <Link className="btn btn-lg btn-primary w-100" to="/user/checkout">
//               Signin
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// // Quick Sign-in Component
// const QuickSignin = () => {
//   return (
//     <>
//       {/* Shopping Cart Offcanvas */}
//       <div
//         className="offcanvas offcanvas-end pb-sm-2 px-sm-2"
//         id="quickSigninCanvas"
//         tabIndex="-1"
//         aria-labelledby="signinLabel"
//         style={{ width: '500px' }}
//       >
//         {/* Header */}
//         <div className="offcanvas-header flex-column align-items-start py-3 pt-lg-4">
//           <div className="d-flex align-items-center justify-content-between w-100 mb-3 mb-lg-4">
//             <h4 className="offcanvas-title" id="signinLabel">
//               Quick Sign-in to Continue
//             </h4>
//             <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//           </div>
//         </div>
//         {/* Body */}
//         <div className="offcanvas-body d-flex flex-column gap-4 pt-2">
//           {/* Sign-in Form */}
//           <Signin />
//           {/* Additional items can be added here */}
//         </div>
//         {/* Footer */}
//         <div className="offcanvas-footer flex-column align-items-start">
//           <div className="d-flex align-items-center justify-content-between w-100 mb-3 mb-md-4">
//             <span className="text-light-emphasis">Subtotal:</span>
//             <span className="h6 mb-0">$2,317.00</span>
//           </div>
//           <div className="d-flex w-100 gap-3">
//             <NavLink className="btn btn-lg btn-secondary w-100" to='/user/basket'>
//               Back
//             </NavLink>
//             <Link className="btn btn-lg btn-primary w-100" to="/user/checkout">
//               Sign In
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
//   import { AxiosUsersService } from "../../services/net/AxiosUsersService";
// import { NotificationService } from "../../services/local/NotificationService";
// import ResponseModal from "../../components/shared/modals/ResponseModal";
// import { NavLink, useNavigate, useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { UsersService } from "../../services/local/UsersService";
// 
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
                navigate('/auth/signin');
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
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "offcanvas offcanvas-end pb-sm-2 px-sm-2", id: "quickSignupCanvas", tabIndex: "-1", "aria-labelledby": "signinLabel", style: { width: '500px' }, children: [_jsx("div", { className: "offcanvas-header flex-column align-items-start py-3 pt-lg-4", children: _jsxs("div", { className: "d-flex align-items-center justify-content-between w-100 mb-3 mb-lg-4", children: [_jsxs(NavLink, { className: "navbar-brand d-flex align-items-center", to: "/", children: [_jsx("img", { src: "/assets/img/us/logos/favicon.svg", alt: "Logo", className: "me-2", style: { width: '32px', height: '32px' } }), _jsx("h4", { className: "offcanvas-title", id: "signinLabel", children: "Quick Sign-up to Continue" })] }), _jsx("button", { type: "button", className: "btn-close", "data-bs-dismiss": "offcanvas", "aria-label": "Close" })] }) }), _jsxs("div", { className: "offcanvas-body d-flex flex-column gap-4 pt-2", children: [_jsxs("div", { className: "nav fs-sm mb-3 mb-lg-4", children: ["I already have an account", _jsx("button", { className: "nav-link badge text-decoration-none rounded-pill p-1 ml-1 text-bg-info", "data-bs-toggle": "offcanvas", "data-bs-target": "#quickSigninCanvas", "aria-controls": "signinCanvas", "aria-label": "Sign in Canvas", children: "Sign in" })] }), _jsxs("form", { className: "needs-validation", id: "signup_form", onSubmit: onSubmitForm, noValidate: true, children: [_jsxs("div", { className: "position-relative mb-4", children: [_jsx("label", { htmlFor: "username", className: "form-label", children: "Username" }), _jsx("input", { type: "text", name: "username", value: formData.username, onChange: (evt) => onInputChange('username', evt), placeholder: "enter/choose your username", className: "form-control form-control-lg", id: "username", required: true }), _jsx("div", { className: "invalid-tooltip bg-transparent py-0", children: "Must enter/choose your username!" })] }), _jsxs("div", { className: "position-relative mb-4", children: [_jsx("label", { htmlFor: "email", className: "form-label", children: "Email" }), _jsx("input", { type: "email", name: "email", value: formData.email, onChange: (evt) => onInputChange('email', evt), placeholder: "valid email address", className: "form-control form-control-lg", id: "email", required: true }), _jsx("div", { className: "invalid-tooltip bg-transparent py-0", children: "Enter a valid email address!" })] }), _jsxs("div", { className: "position-relative mb-4", children: [_jsx("label", { htmlFor: "phone", className: "form-label", children: "Phone" }), _jsx("input", { type: "tel", name: "phone", value: formData.phone, onChange: (evt) => onInputChange('phone', evt), placeholder: "active phone number", className: "form-control form-control-lg", id: "phone", required: true }), _jsx("div", { className: "invalid-tooltip bg-transparent py-0", children: "Enter a valid phone number!" })] }), _jsxs("div", { className: "mb-4", children: [_jsx("label", { htmlFor: "password", className: "form-label", children: "Password" }), _jsxs("div", { className: "password-toggle", children: [_jsx("input", { type: "password", name: "password", value: formData.password, onChange: (evt) => onInputChange('password', evt), className: "form-control form-control-lg", id: "password", minLength: 4, placeholder: "Minimum 4 characters", required: true }), _jsx("div", { className: "invalid-tooltip bg-transparent py-0", children: "Password does not meet the required criteria!" }), _jsx("label", { className: "password-toggle-button fs-lg", "aria-label": "Show/hide password", children: _jsx("input", { type: "checkbox", className: "btn-check" }) })] })] }), _jsx("div", { className: "d-flex flex-column gap-2 mb-4", children: _jsxs("div", { className: "form-check", children: [_jsx("input", { type: "checkbox", defaultChecked: true, className: "form-check-input", id: "privacy", required: true }), _jsxs("label", { htmlFor: "privacy", className: "form-check-label", children: ["I have read and accept the ", _jsx(NavLink, { className: "text-dark-emphasis", to: "#!", children: " Privacy Policy" })] })] }) }), _jsx(ResponseModal, { show: modalState.show, message: modalState.message, type: modalState.type }), _jsx("button", { type: "submit", className: `btn btn-lg bg-dark text-white w-100 ${isLoading ? 'disabled' : ''}`, disabled: isLoading, children: isLoading ? (
                                    // <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    _jsx("div", { className: "spinner-grow spinner-grow-sm", role: "status", children: _jsx("span", { className: "visually-hidden", children: "Loading..." }) })) : ('Sign up Now.') })] }), _jsxs("div", { className: "d-flex align-items-center my-4", children: [_jsx("hr", { className: "w-100 m-0" }), _jsx("span", { className: "text-body-emphasis fw-medium text-nowrap mx-4", children: "or continue with" }), _jsx("hr", { className: "w-100 m-0" })] }), _jsxs("div", { className: "d-flex flex-column flex-sm-row gap-3 pb-4 mb-3 mb-lg-4", children: [_jsxs("button", { type: "button", className: "btn btn-lg btn-outline-secondary w-100 px-2", children: [_jsx("i", { className: "fi-google ms-1 me-1" }), "Google"] }), _jsxs("button", { type: "button", className: "btn disabled btn-lg btn-outline-secondary w-100 px-2", children: [_jsx("i", { className: "fi-facebook ms-1 me-1" }), "Facebook"] }), _jsxs("button", { type: "button", className: "btn disabled btn-lg btn-outline-secondary w-100 px-2", children: [_jsx("i", { className: "fi-apple ms-1 me-1" }), "Apple"] })] })] })] }) }));
};
// Quick Sign-in Component
const QuickSignin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || '/user/personal'; // Default redirect path
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
                const user = res.data;
                const user_data = {
                    ...user,
                    access_token: user.access_token,
                    refresh_token: user.refresh_token
                };
                UsersService.authenticate(user_data);
                NotificationService.showDialog(message, 'success');
                navigate(from, { replace: true });
            }
            else {
                NotificationService.showDialog(message, 'error');
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
    return (_jsxs("div", { className: "offcanvas offcanvas-end pb-sm-2 px-sm-2", id: "quickSigninCanvas", tabIndex: "-1", "aria-labelledby": "signinLabel", style: { width: '500px' }, children: [_jsx("div", { className: "offcanvas-header flex-column align-items-start py-3 pt-lg-4", children: _jsxs("div", { className: "d-flex align-items-center justify-content-between w-100 mb-3 mb-lg-4", children: [_jsxs(NavLink, { className: "navbar-brand d-flex align-items-center", to: "/", children: [_jsx("img", { src: "/assets/img/us/logos/favicon.svg", alt: "Logo", className: "me-2", style: { width: '32px', height: '32px' } }), _jsx("h4", { className: "offcanvas-title", id: "signinLabel", children: "Quick Sign-in to Continue" })] }), _jsx("button", { type: "button", className: "btn-close", "data-bs-dismiss": "offcanvas", "aria-label": "Close" })] }) }), _jsxs("div", { className: "offcanvas-body d-flex flex-column gap-4 pt-2", children: [_jsx("h1", { className: "h2 mt-auto", children: "Welcome back" }), _jsxs("div", { className: "nav fs-sm mb-4", children: ["Don't have an account?", _jsx(NavLink, { className: "nav-link text-decoration-underline p-0 ms-2", "data-bs-toggle": "offcanvas", "data-bs-target": "#quickSignupCanvas", "aria-controls": "signupCanvas", "aria-label": "Sign up Canvas", children: "Create an account" })] }), _jsxs("form", { className: "needs-validation", id: "signin_form", onSubmit: onSubmitForm, noValidate: true, children: [_jsxs("div", { className: "position-relative mb-4", children: [_jsx("label", { htmlFor: "username", className: "form-label", children: "Username" }), _jsx("input", { type: "text", name: "username", value: formData.username, onChange: (evt) => onInputChange('username', evt), placeholder: "Enter your username", className: "form-control form-control-lg", id: "username", required: true }), _jsx("div", { className: "invalid-tooltip bg-transparent py-0", children: "Must enter your username!" })] }), _jsxs("div", { className: "mb-4", children: [_jsx("label", { htmlFor: "password", className: "form-label", children: "Password" }), _jsx("input", { type: "password", name: "password", value: formData.password, onChange: (evt) => onInputChange('password', evt), className: "form-control form-control-lg", id: "password", minLength: 4, placeholder: "Minimum 4 characters", required: true }), _jsx("div", { className: "invalid-tooltip bg-transparent py-0", children: "Password does not meet the required criteria!" })] }), _jsx(ResponseModal, { show: modalState.show, message: modalState.message, type: modalState.type }), _jsx("button", { type: "submit", className: `btn btn-lg bg-dark text-white w-100 ${isLoading ? 'disabled' : ''}`, disabled: isLoading, children: isLoading ? (_jsx("div", { className: "spinner-grow spinner-grow-sm", role: "status", children: _jsx("span", { className: "visually-hidden", children: "Loading..." }) })) : ('Sign in') })] }), _jsxs("div", { className: "d-flex align-items-center my-4", children: [_jsx("hr", { className: "w-100 m-0" }), _jsx("span", { className: "text-body-emphasis fw-medium text-nowrap mx-4", children: "or continue with" }), _jsx("hr", { className: "w-100 m-0" })] }), _jsxs("div", { className: "d-flex flex-column flex-sm-row gap-3 pb-4 mb-3 mb-lg-4", children: [_jsxs("button", { id: "google-signin-btn", type: "button", className: "btn btn-lg btn-outline-secondary w-100 px-2", children: [_jsx("i", { className: "ci-google ms-1 me-1" }), "Google"] }), _jsxs("button", { type: "button", disabled: true, className: "btn btn-lg btn-outline-secondary w-100 px-2", children: [_jsx("i", { className: "ci-facebook ms-1 me-1" }), "Facebook"] }), _jsxs("button", { type: "button", disabled: true, className: "btn btn-lg btn-outline-secondary w-100 px-2", children: [_jsx("i", { className: "ci-apple ms-1 me-1" }), "Apple"] })] })] })] }));
};
// Quick Sign-in Component
// const QuickSignin = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const from = location.state?.from || '/user/personal'; // Default redirect path
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//   });
//   const [modalState, setModalState] = useState({ show: false, message: '', type: '' });
//   const [isLoading, setIsLoading] = useState(false);
//   useEffect(() => {
//     const observer = (data) => {
//       setModalState(data);
//     };
//     NotificationService.subscribe(observer);
//     return () => {
//       NotificationService.unsubscribe(observer);
//     };
//   }, []);
//   const onSubmitForm = (evt) => {
//     evt.preventDefault();
//     setIsLoading(true);
//     NotificationService.showDialog("Sending...", "primary");
//     if (!formData.username || !formData.password) {
//       NotificationService.showDialog("Must provide both username and password.", "danger");
//       setIsLoading(false);
//       return;
//     }
//     AxiosUsersService.signin(formData)
//       .then(res => {
//         const message = res.data.full_messages?.[0] || res.data.message || res.data.error || 'Login successful';
//         if (res.data.success) {
//           const user = res.data;
//           const user_data = {
//             ...user,
//             access_token: user.access_token,
//             refresh_token: user.refresh_token
//           };
//           UsersService.authenticate(user_data);
//           NotificationService.showDialog(message, 'success');
//           navigate(from, { replace: true });
//         } else {
//           NotificationService.showDialog(message, 'error');
//         }
//       })
//       .catch(err => {
//         const errorMessage = err.response?.data?.error || err.message || 'An unknown error occurred';
//         NotificationService.showDialog(errorMessage, 'error');
//       })
//       .finally(() => {
//         setIsLoading(false);
//       });
//   };
//   const onInputChange = (key, evt) => {
//     setFormData({ ...formData, [key]: evt.target.value });
//   };
//   return (
//     <div
//       className="offcanvas offcanvas-end pb-sm-2 px-sm-2"
//       id="quickSigninCanvas"
//       tabIndex="-1"
//       aria-labelledby="signinLabel"
//       style={{ width: '500px' }}
//     >
//       {/* Header */}
//       <div className="offcanvas-header flex-column align-items-start py-3 pt-lg-4">
//         <div className="d-flex align-items-center justify-content-between w-100 mb-3 mb-lg-4">
//           <NavLink className="navbar-brand d-flex align-items-center" to="/">
//             <img src="/assets/img/us/logos/favicon.svg" alt="Logo" className="me-2" style={{ width: '32px', height: '32px' }} />
//             <h4 className="offcanvas-title" id="signinLabel">Quick Sign-in to Continue</h4>
//           </NavLink>
//           <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//         </div>
//       </div>
//       {/* Body */}
//       <div className="offcanvas-body d-flex flex-column gap-4 pt-2">
//         <h1 className="h2 mt-auto">Welcome back</h1>
//                     <div className="nav fs-sm mb-4">
//                       Don't have an account?
//                       <NavLink className="nav-link text-decoration-underline p-0 ms-2" to="/auth/signup">Create an account</NavLink>
//                     </div>
//         {/* Sign-in Form */}
//         <form className="needs-validation" id="signin_form" onSubmit={onSubmitForm} noValidate>
//           <div className="position-relative mb-4">
//             <label htmlFor="username" className="form-label">Username</label>
//             <input type="text"
//               name="username"
//               value={formData.username}
//               onChange={(evt) => onInputChange('username', evt)}
//               placeholder="Enter your username"
//               className="form-control form-control-lg"
//               id="username"
//               required />
//             <div className="invalid-tooltip bg-transparent py-0">Must enter your username!</div>
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="form-label">Password</label>
//             <input type="password"
//               name="password"
//               value={formData.password}
//               onChange={(evt) => onInputChange('password', evt)}
//               className="form-control form-control-lg"
//               id="password"
//               minLength={4}
//               placeholder="Minimum 4 characters"
//               required />
//             <div className="invalid-tooltip bg-transparent py-0">Password does not meet the required criteria!</div>
//           </div>
//           <ResponseModal show={modalState.show} message={modalState.message} type={modalState.type} />
//           <button type="submit" className={`btn btn-lg bg-dark text-white w-100 ${isLoading ? 'disabled' : ''}`} disabled={isLoading}>
//             {isLoading ? (
//               <div className="spinner-grow spinner-grow-sm" role="status">
//                 <span className="visually-hidden">Loading...</span>
//               </div>
//             ) : (
//               'Sign in'
//             )}
//           </button>
//         </form>
//       </div>
//       {/* Footer */}
//       <div className="offcanvas-footer flex-column align-items-center d-flex">
//       <div className="d-flex align-items-center my-2">
//               <hr className="w-100 m-0" />
//               <span className="text-body-emphasis fw-medium text-nowrap mx-4">or continue with</span>
//               <hr className="w-100 m-0" />
//             </div>
//         <div className="d-flex gap-2 - align-items-center">
//           <div className="d-flex flex-column flex-sm-row gap-2 pb-2 mb-2 mb-lg-2">
//               <button id="google-signin-btn" type="button" className="btn btn-lg btn-outline-secondary w-100 px-2">
//                 <i className="ci-google ms-1 me-1" />
//                 Google
//               </button>
//               <button type="button" disabled className="btn btn-lg btn-outline-secondary w-100 px-2">
//                 <i className="ci-facebook ms-1 me-1" />
//                 Facebook
//               </button>
//               <button type="button" disabled className="btn btn-lg btn-outline-secondary w-100 px-2">
//                 <i className="ci-apple ms-1 me-1" />
//                 Apple
//               </button>
//             </div>
//         </div>
//       </div>
//     </div>
//   );
// };
const Basket = () => {
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "offcanvas offcanvas-end pb-sm-2 px-sm-2 d-none", id: "shoppingCart_01", tabIndex: "-1", "aria-labelledby": "shoppingCartLabel", style: { width: '500px' }, "aria-modal": "true", role: "dialog", children: [_jsxs("div", { className: "offcanvas-header py-3 pt-lg-4", children: [_jsx("h4", { className: "offcanvas-title", id: "shoppingCartLabel", children: "Shopping Basket" }), _jsx("button", { type: "button", className: "btn-close", "data-bs-dismiss": "offcanvas", "aria-label": "Close" })] }), _jsxs("div", { className: "offcanvas-body text-center", children: [_jsx("svg", { className: "d-block mx-auto mb-4", xmlns: "http://www.w3.org/2000/svg", width: "60", viewBox: "0 0 29.5 30" }), _jsx("h6", { className: "mb-2", children: "Your shopping basket is currently empty!" }), _jsx("p", { className: "fs-sm mb-4", children: "Add item(s) to the cart to proceed with your purchase." }), _jsx("button", { type: "button", className: "btn btn-dark rounded-pill", "data-bs-dismiss": "offcanvas", "aria-label": "Close", children: "Continue shopping" })] })] }), _jsxs("div", { className: "offcanvas offcanvas-end pb-sm-2 px-sm-2", id: "shoppingCart", tabIndex: "-1", "aria-labelledby": "shoppingCartLabel", style: { width: '500px' }, children: [_jsxs("div", { className: "offcanvas-header flex-column align-items-start py-3 pt-lg-4", children: [_jsxs("div", { className: "d-flex align-items-center justify-content-between w-100 mb-3 mb-lg-4", children: [_jsx("h4", { className: "offcanvas-title", id: "shoppingCartLabel", children: "Basket" }), _jsx("button", { type: "button", className: "btn-close", "data-bs-dismiss": "offcanvas", "aria-label": "Close" })] }), _jsxs("div", { className: "alert alert-success text-dark-emphasis fs-sm border-0 rounded-4 mb-0", role: "alert", children: ["Congratulations \uD83C\uDF89 You have added more than ", _jsx("span", { className: "fw-semibold", children: "$50" }), " to your cart.", _jsx("span", { className: "fw-semibold", children: "Delivery is free" }), " for you!"] }), _jsxs("p", { className: "fs-sm", children: ["Buy ", _jsx("span", { className: "text-dark-emphasis fw-semibold", children: "$183" }), " more to get", ' ', _jsx("span", { className: "text-dark-emphasis fw-semibold", children: "Free Shipping" })] }), _jsx("div", { className: "progress w-100", role: "progressbar", "aria-label": "Free shipping progress", "aria-valuenow": "75", "aria-valuemin": "0", "aria-valuemax": "100", style: { height: '4px' }, children: _jsx("div", { className: "progress-bar bg-warning rounded-pill", style: { width: '75%' } }) })] }), _jsxs("div", { className: "offcanvas-body d-flex flex-column gap-4 pt-2", children: [_jsxs("div", { className: "d-flex align-items-center", children: [_jsx("a", { className: "flex-shrink-0", href: "/products/techa-products-slug", children: _jsx("img", { src: "/assets/img/shop/electronics/thumbs/08.png", width: "110", alt: "iPhone 14" }) }), _jsxs("div", { className: "w-100 min-w-0 ps-2 ps-sm-3", children: [_jsx("h5", { className: "d-flex animate-underline mb-2", children: _jsx("a", { className: "d-block fs-sm fw-medium text-truncate animate-target", href: "/products/techa-products-slug", children: "Apple iPhone 14 128GB White" }) }), _jsx("div", { className: "h6 pb-1 mb-2", children: "$899.00" }), _jsxs("div", { className: "d-flex align-items-center justify-content-between", children: [_jsxs("div", { className: "count-input rounded-2", children: [_jsx("button", { type: "button", className: "btn btn-icon btn-sm", "data-decrement": "", "aria-label": "Decrement quantity", children: _jsx("i", { className: "ci-minus" }) }), _jsx("input", { type: "number", className: "form-control form-control-sm", value: "1", readOnly: true }), _jsx("button", { type: "button", className: "btn btn-icon btn-sm", "data-increment": "", "aria-label": "Increment quantity", children: _jsx("i", { className: "ci-plus" }) })] }), _jsx("button", { type: "button", className: "btn-close fs-sm", "data-bs-toggle": "tooltip", "data-bs-custom-class": "tooltip-sm", "data-bs-title": "Remove", "aria-label": "Remove from cart" })] })] })] }), _jsxs("div", { className: "d-flex align-items-center", children: [_jsx("a", { className: "flex-shrink-0", href: "/products/techa-products-slug", children: _jsx("img", { src: "/assets/img/shop/electronics/thumbs/08.png", width: "110", alt: "iPhone 14" }) }), _jsxs("div", { className: "w-100 min-w-0 ps-2 ps-sm-3", children: [_jsx("h5", { className: "d-flex animate-underline mb-2", children: _jsx("a", { className: "d-block fs-sm fw-medium text-truncate animate-target", href: "/products/techa-products-slug", children: "Apple iPhone 14 128GB White" }) }), _jsx("div", { className: "h6 pb-1 mb-2", children: "$899.00" }), _jsxs("div", { className: "d-flex align-items-center justify-content-between", children: [_jsxs("div", { className: "count-input rounded-2", children: [_jsx("button", { type: "button", className: "btn btn-icon btn-sm", "data-decrement": "", "aria-label": "Decrement quantity", children: _jsx("i", { className: "ci-minus" }) }), _jsx("input", { type: "number", className: "form-control form-control-sm", value: "1", readOnly: true }), _jsx("button", { type: "button", className: "btn btn-icon btn-sm", "data-increment": "", "aria-label": "Increment quantity", children: _jsx("i", { className: "ci-plus" }) })] }), _jsx("button", { type: "button", className: "btn-close fs-sm", "data-bs-toggle": "tooltip", "data-bs-custom-class": "tooltip-sm", "data-bs-title": "Remove", "aria-label": "Remove from cart" })] })] })] })] }), _jsxs("div", { className: "offcanvas-header flex-column align-items-start", children: [_jsxs("div", { className: "d-flex align-items-center justify-content-between w-100 mb-3 mb-md-4", children: [_jsx("span", { className: "text-light-emphasis", children: "Subtotal:" }), _jsx("span", { className: "h6 mb-0", children: "$2,317.00" })] }), _jsxs("div", { className: "d-flex w-100 gap-3", children: [_jsx(NavLink, { className: "btn btn-lg btn-secondary w-100", to: '/user/basket', children: "View cart" }), _jsx(Link, { className: "btn btn-lg btn-primary w-100", to: "/user/checkout", children: "Checkout" })] })] })] })] }));
};
const Installer = () => {
    return (_jsxs("div", { className: "offcanvas offcanvas-bottom", id: "offcanvasBottom", tabIndex: "-1", "aria-labelledby": "offcanvasBottomLabel", children: [_jsxs("div", { className: "offcanvas-header border-bottom", children: [_jsx("h5", { className: "offcanvas-title", id: "offcanvasBottomLabel", children: _jsxs("a", { className: "navbar-brand pt-0", href: "/", children: [_jsx("span", { className: "d-flex flex-shrink-0 text-primary rtl-flip me-2", children: _jsx("div", { className: "flex-shrink-0 border rounded-circle", style: { width: '40px' }, children: _jsx("div", { className: "ratio ratio-1x1 rounded-circle overflow-hidden", children: _jsx("img", { src: "/assets/img/us/logos/favicon.svg", alt: "Avatar" }) }) }) }), "Salesnet"] }) }), _jsx("button", { className: "btn-close", type: "button", "data-bs-dismiss": "offcanvas", "aria-label": "Close" })] }), _jsxs("div", { className: "offcanvas-body d-flex flex-column align-items-center justify-content-center text-center", children: [_jsx("p", { className: 'lead', children: "Install Salesnet - Internet of sales - Sell like crazy charm." }), _jsx("div", { className: "d-flex flex-column align-items-center gap-3 pb-4 mb-3 mb-lg-4", children: _jsxs("button", { id: "install", type: "button", className: "btn btn-dark rounded w-100 px-3 py-2 btn-lg btn-info rounded-pill", style: { maxWidth: '250px', fontSize: '1rem' }, children: [_jsx("i", { className: "ci-download ms-2 me-2" }), "Add to Home Screen"] }) })] })] }));
};
