

// // components/auth/AuthForm.tsx
// import React from "react";
// import { NavLink, Link } from "react-router-dom";
// import { useAuthForm } from "../../hooks/useAuthForm";
// import { AuthFormProps, SignupFormData, SigninFormData, RecoverPasswordFormData } from "../../types/auth.types";
// import ResponseModal from "../shared/modals/ResponseModal";
// import SocialAuthButton from "./SocialAuthButton";
// import { LoadingZoom } from "../shared/LoadingSpinner";

// const AuthForm: React.FC<AuthFormProps> = ({
//     variant,
//     formType,
//     onSuccess,
//     className = "",
//     redirectPath,
//     showSocialAuth = true,
//     showLogo = true,
//     showBenefits = false
// }) => {
//     const {
//         formData,
//         modalState,
//         isLoading,
//         handleSubmit,
//         handleInputChange,
//     } = useAuthForm({ formType, onSuccess, redirectPath });

//     const isSignup = formType === 'signup';
//     // const isSignin = formType === 'signin';
//     const isRecoverPassword = formType === 'recover-password';
//     const recoverData = formData as RecoverPasswordFormData;
//     const isCanvas = variant === 'canvas';
//     const signupData = formData as SignupFormData;
//     // const signinData = formData as SigninFormData;

//     const getFormTitle = () => {
//     switch (formType) {
//         case 'signup':
//             return 'Create an account';
//         case 'signin':
//             return 'Welcome back';
//         case 'recover-password':
//             return 'Forgot password?';
//         default:
//             return '';
//     }
// };

// const getButtonText = () => {
//     if (isLoading) {
//         switch (formType) {
//             case 'signup':
//                 return ' Creating...';
//             case 'signin':
//                 return ' Signing in...';
//             case 'recover-password':
//                 return ' Sending...';
//             default:
//                 return ' Loading...';
//         }
//     }
    
//     switch (formType) {
//         case 'signup':
//             return 'Sign up Now';
//         case 'signin':
//             return 'Sign in';
//         case 'recover-password':
//             return 'Recover Password';
//         default:
//             return 'Submit';
//     }
// };

//     const renderFormFields = () => (
//         <>
//             <div className="position-relative mb-4">
//                 {/* <label htmlFor="username" className="form-label">Username</label>
//                 <input
//                     type="text"
//                     name="username"
//                     value={formData.username}
//                     onChange={(evt) => handleInputChange('username', evt)}
//                     placeholder={isSignup ? "enter/choose your username" : "Enter your username"}
//                     className="form-control form-control-lg"
//                     id="username"
//                     disabled={isLoading}
//                     required
//                 /> */}
//                 {/* // CHANGED the username field */}
//                     <label htmlFor="username" className="form-label">
//                         {isRecoverPassword ? 'Email, Username or Phone' : 'Username'} 
//                     </label>
//                     <input
//                         type="text"
//                         name="username"
//                         value={formData.username}
//                         onChange={(evt) => handleInputChange('username', evt)}
//                         placeholder={
//                             isSignup ? "enter/choose your username" : 
//                             isRecoverPassword ? "Email or Username or Phone" : 
//                             "Enter your username"
//                         }
//                     className="form-control form-control-lg"
//                     id="username"
//                     disabled={isLoading}
//                     required
//                 /> 

//                 <div className="invalid-tooltip bg-transparent py-0">
//                     Must {isSignup ? 'enter/choose' : 'enter'} your username!
//                 </div>
//             </div>

//             {isSignup && (
//                 <>
//                     <div className="position-relative mb-4">
//                         <label htmlFor="email" className="form-label">Email</label>
//                         <input
//                             type="email"
//                             name="email"
//                             value={signupData.email}
//                             onChange={(evt) => handleInputChange('email', evt)}
//                             placeholder="valid email address"
//                             className="form-control form-control-lg"
//                             id="email"
//                             disabled={isLoading}
//                             required
//                         />
//                         <div className="invalid-tooltip bg-transparent py-0">
//                             Enter a valid email address!
//                         </div>
//                     </div>

//                     <div className="position-relative mb-4">
//                         <label htmlFor="phone" className="form-label">Phone</label>
//                         <input
//                             type="tel"
//                             name="phone"
//                             value={signupData.phone}
//                             onChange={(evt) => handleInputChange('phone', evt)}
//                             placeholder="active phone number"
//                             className="form-control form-control-lg"
//                             id="phone"
//                             disabled={isLoading}
//                             required
//                         />
//                         <div className="invalid-tooltip bg-transparent py-0">
//                             Enter a valid phone number!
//                         </div>
//                     </div>
//                 </>
//             )}

//              {!isRecoverPassword && (
//             <div className="mb-4">
//                 <label htmlFor="password" className="form-label">Password</label>
//                 <div className="password-toggle">
//                     <input
//                         type="password"
//                         name="password"
//                         value={formData.password}
//                         onChange={(evt) => handleInputChange('password', evt)}
//                         className="form-control form-control-lg"
//                         id="password"
//                         minLength={4}
//                         placeholder="Minimum 4 characters"
//                         disabled={isLoading}
//                         required
//                     />
//                     <div className="invalid-tooltip bg-transparent py-0">
//                         Password does not meet the required criteria!
//                     </div>
//                     <label className="password-toggle-button fs-lg" aria-label="Show/hide password">
//                         <input type="checkbox" className="btn-check" disabled={isLoading} />
//                     </label>
//                 </div>
//             </div>
//             )}

//             {isSignup && (
//                 <div className="d-flex flex-column gap-2 mb-4">
//                     <div className="form-check">
//                         <input
//                             type="checkbox"
//                             defaultChecked
//                             className="form-check-input"
//                             id="privacy"
//                             disabled={isLoading}
//                             required
//                         />
//                         <label htmlFor="privacy" className="form-check-label">
//                             I have read and accept the{' '}
//                             <NavLink className="text-dark-emphasis" to="/customer-service/terms">
//                                 Privacy Policy
//                             </NavLink>
//                         </label>
//                     </div>
//                 </div>
//             )}

//             {/* // ADDED this entire remember checkbox section */}
//             {isRecoverPassword && (
//                 <div className="d-flex align-items-center justify-content-between mb-4">
//                     <div className="form-check me-2">
//                         <input 
//                             type="checkbox" 
//                             className="form-check-input" 
//                             id="remember-30"
//                             checked={recoverData.rememberFor30Days || false}
//                             onChange={(evt) => handleInputChange('rememberFor30Days', evt)}
//                             disabled={isLoading}
//                         />
//                         <label htmlFor="remember-30" className="form-check-label">
//                             Remember for 30 days
//                         </label>
//                     </div>
//                 </div>
//             )}

//         </>
//     );

//     const renderSocialAuth = () => {
//         if (!showSocialAuth) return null;

//         return (
//             <>
//                 <div className="d-flex align-items-center my-4">
//                     <hr className="w-100 m-0" />
//                     <span className="text-body-emphasis fw-medium text-nowrap mx-4">
//                         or {isSignup ? 'sign up' : 'continue'} with
//                     </span>
//                     <hr className="w-100 m-0" />
//                 </div>

//                 <div className="d-flex flex-row flex-sm-row gap-3 mb-4 overflow-auto pe-2">
//                     <SocialAuthButton provider="google" disabled={isLoading} />
//                     <SocialAuthButton provider="facebook" disabled={isLoading} />
//                     <SocialAuthButton provider="apple" disabled={isLoading} />
//                     <SocialAuthButton provider="salesnet" disabled={isLoading} />
//                     <Link
//                         to={isSignup ? "/auth/signin" : "/auth/signup"}
//                         className="btn btn-md btn-outline-danger w-100 px-2 flex-fill rounded-pill"
//                         title="Salesnet authentication"
//                     >
//                         <i className="ci-apple ms-1 me-1"></i>
//                         Salesnet
//                     </Link>
//                 </div>
//             </>
//         );
//     };

//     const renderToggleAuth = () => {
//         if (isCanvas) {
//             return (
//                 <div className="nav fs-sm mb-3 mb-lg-2 animate-scale">
//                     {isSignup ? "I already have an account, " : "Don't have an account? "}
//                     <button
//                         className="animate-target btn badge rounded-pill ml-1 text-bg-info"
//                         data-bs-toggle="offcanvas"
//                         data-bs-target={isSignup ? "#quickSigninCanvas" : "#quickSignupCanvas"}
//                         aria-controls={isSignup ? "signinCanvas" : "signupCanvas"}
//                         aria-label={isSignup ? "Sign in Canvas" : "Sign up Canvas"}
//                     >
//                         {/* {isSignup ? "Sign in" : "Create an account"} */}
//                         {getButtonText()}
//                     </button>
//                 </div>
//             );
//         }

//         return (
//             <div className="nav fs-sm mb-4">
//                 {isSignup ? "I already have an account" : "Don't have an account?"}
//                 <NavLink
//                     className={isSignup ? 
//                         "nav-link badge text-decoration-none rounded-pill p-1 ml-1 text-bg-info" : 
//                         "nav-link text-decoration-underline p-0 ms-2"
//                     }
//                     to={isSignup ? "/auth/signin" : "/auth/signup"}
//                 >
//                     {isSignup ? "Sign in" : "Create an account"}
//                 </NavLink>
//             </div>
//         );
//     };

//     if (isCanvas) {
//         return (
//             <div className="d-flex flex-column gap-4 pt-2">
//                 {renderToggleAuth()}
                
//                 <form 
//                     className={`needs-validation ${className}`} 
//                     onSubmit={handleSubmit} 
//                     noValidate
//                 >
//                     {renderFormFields()}
                    
//                     <ResponseModal 
//                         show={modalState.show} 
//                         message={modalState.message} 
//                         type={modalState.type} 
//                     />

//                     <button
//                         type="submit"
//                         className={`btn btn-lg bg-dark text-white w-100 ${isLoading ? 'disabled' : ''}`}
//                         disabled={isLoading}
//                     >
//                         {isLoading ? (
//                             <>
//                                 <LoadingZoom size="sm" />
//                                 {/* {isSignup ? ' Creating...' : ' Authenticating...'} */}
//                                 {getButtonText()}
//                             </>
//                         ) : (
//                             // isSignup ? 'Sign up Now' : 'Sign in'
//                             getButtonText()
//                         )}
//                     </button>
                    
//                 </form>

//                 {renderSocialAuth()}
//             </div>
//         );
//     }

//     return (
//         <div className={`w-100 ${className}`}>
//             {showLogo && (
//                 <header className="navbar px-0 pb-4 mt-n2 mt-sm-0 mb-2 mb-md-3 mb-lg-4">
//                     <NavLink className="navbar-brand pt-0" to="/">
//                         <span className="d-flex flex-shrink-0 text-primary rtl-flip me-2">
//                             <div className="flex-shrink-0" style={{ width: '32px' }}>
//                                 <div className="ratio ratio-1x1 overflow-hidden">
//                                     <img src="/assets/img/us/logos/favicon.svg" alt="Avatar" />
//                                 </div>
//                             </div>
//                         </span>
//                         Salesnet
//                     </NavLink>
//                 </header>
//             )}

//             <h1 className="h2 mt-1">
//                 {/* {isSignup ? 'Create an account' : 'Welcome back'} */}
//                 {getFormTitle()}
//             </h1>
            
//             {renderToggleAuth()}

//             {showBenefits && !isSignup && (
//                 <div className="nav fs-sm mb-4 d-lg-none">
//                     <span className="me-2">Uncertain about creating an account?</span>
//                     <NavLink
//                         className="text-decoration-none rounded-pill text-bg-info"
//                         to="#benefits"
//                         data-bs-toggle="offcanvas"
//                         aria-controls="benefits"
//                     >
//                         Benefits
//                     </NavLink>
//                 </div>
//             )}

//             {/* Social auth first for signup */}
//             {isSignup && renderSocialAuth()}

//             {/* Form wrapper with scrolling for signup */}
//             <div className={isSignup ? 
//                 "overflow-y-auto pe-2 simplebar-scrollable-y" : 
//                 ""
//             } 
//             {...(isSignup && {
//                 'data-simplebar': true,
//                 'data-simplebar-auto-hide': 'true',
//                 style: { maxHeight: '400px' }
//             })}>
//                 <form 
//                     className={`needs-validation ${className}`} 
//                     onSubmit={handleSubmit} 
//                     noValidate
//                 >
//                     {renderFormFields()}
                    
//                     <ResponseModal 
//                         show={modalState.show} 
//                         message={modalState.message} 
//                         type={modalState.type} 
//                     />

//                     <button
//                         type="submit"
//                         className={`btn btn-lg bg-dark text-white w-100 ${isLoading ? 'disabled' : ''}`}
//                         disabled={isLoading}
//                     >

//                     {isLoading ? (
//                     <>
//                         <LoadingZoom size="sm" />
//                         {isSignup ? ' Creating...' : ' Signing in...'}
//                     </>
//                     ) : (
//                         isSignup ? 'Sign up Now' : 'Sign in'
//                     )}
//                     </button>
//                 </form>
//             </div>

//             {/* Social auth after form for signin */}
//             {!isSignup && renderSocialAuth()}
//         </div>
//     );
// };

// export default AuthForm;

// v2
// components/auth/AuthForm.tsx
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuthForm } from "../../hooks/useAuthForm";
import { AuthFormProps, SignupFormData, SigninFormData, RecoverPasswordFormData } from "../../types/auth.types";
import ResponseModal from "../shared/modals/ResponseModal";
import SocialAuthButton from "./SocialAuthButton";
import { LoadingZoom } from "../shared/LoadingSpinner";

// 
const AuthForm: React.FC<AuthFormProps> = ({
    variant,
    formType,
    onSuccess,
    className = "",
    redirectPath,
    showSocialAuth = true,
    showLogo = true,
    showBenefits = false
}) => {
    const {
        formData,
        modalState,
        isLoading,
        handleSubmit,
        handleInputChange,
    } = useAuthForm({ 
        formType, 
        onSuccess, 
        redirectPath, 
        variant // Pass variant to hook
    });

    const isSignup = formType === 'signup';
    const isSignin = formType === 'signin';
    const isRecoverPassword = formType === 'recover-password';
    const isCanvas = variant === 'canvas';
    
    const signupData = formData as SignupFormData;
    const signinData = formData as SigninFormData;
    const recoverData = formData as RecoverPasswordFormData;

    const getFormTitle = () => {
        switch (formType) {
            case 'signup':
                return 'Create an account';
            case 'signin':
                return 'Welcome back';
            case 'recover-password':
                return 'Forgot password?';
            default:
                return '';
        }
    };

    const getButtonText = () => {
        if (isLoading) {
            switch (formType) {
                case 'signup':
                    return ' Creating...';
                case 'signin':
                    return ' Signing in...';
                case 'recover-password':
                    return ' Sending...';
                default:
                    return ' Loading...';
            }
        }
        
        switch (formType) {
            case 'signup':
                return 'Sign up Now';
            case 'signin':
                return 'Sign in';
            case 'recover-password':
                return 'Recover Password';
            default:
                return 'Submit';
        }
    };

    const renderFormFields = () => (
        <>

            {isSignup && (
                <div className="position-relative mb-4">
                    <label htmlFor="name" className="form-label">Surname & First-name</label>
                    <input
                        type="text"
                        name="name"
                        value={signupData.name}
                        onChange={(evt) => handleInputChange('name', evt)}
                        placeholder="Your valid true name"
                        className="form-control form-control-lg"
                        id="name"
                        disabled={isLoading}
                        required
                    />
                    <div className="invalid-tooltip bg-transparent py-0">
                        Enter a Your valid true name!
                    </div>
                </div>
            )}

            <div className="position-relative mb-4">
                <label htmlFor="username" className="form-label">
                    {isRecoverPassword ? 'Email, Username or Phone' : 'Username'} 
                </label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={(evt) => handleInputChange('username', evt)}
                    placeholder={
                        isSignup ? "Type your username" : 
                        isRecoverPassword ? "Email or Username or Phone" : 
                        "Enter your username"
                    }
                    className="form-control form-control-lg"
                    id="username"
                    disabled={isLoading}
                    required
                />
                <div className="invalid-tooltip bg-transparent py-0">
                    {isRecoverPassword ? 
                        'Enter Your Logins any of email-or-username-or-phone!' :
                        `Must ${isSignup ? 'Type' : 'enter'} your username!`
                    }
                </div>
            </div>

            {isSignup && (
                <>
                    <div className="position-relative mb-4">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={signupData.email}
                            onChange={(evt) => handleInputChange('email', evt)}
                            placeholder="valid email address"
                            className="form-control form-control-lg"
                            id="email"
                            disabled={isLoading}
                            required
                        />
                        <div className="invalid-tooltip bg-transparent py-0">
                            Enter a valid email address!
                        </div>
                    </div>

                    <div className="position-relative mb-4">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            value={signupData.phone}
                            onChange={(evt) => handleInputChange('phone', evt)}
                            placeholder="active phone number"
                            className="form-control form-control-lg"
                            id="phone"
                            disabled={isLoading}
                            required
                        />
                        <div className="invalid-tooltip bg-transparent py-0">
                            Enter a valid phone number!
                        </div>
                    </div>
                </>
            )}

            {!isRecoverPassword && (
                <div className="mb-4">
                    <label htmlFor="password" className="form-label">Password</label>
                    <div className="password-toggle">
                        <input
                            type="password"
                            name="password"
                            value={formData.password || ''}
                            onChange={(evt) => handleInputChange('password', evt)}
                            className="form-control form-control-lg"
                            id="password"
                            minLength={4}
                            placeholder="Minimum 4 characters"
                            disabled={isLoading}
                            required
                        />
                        <div className="invalid-tooltip bg-transparent py-0">
                            Password does not meet the required criteria!
                        </div>
                        <label className="password-toggle-button fs-lg" aria-label="Show/hide password">
                            <input type="checkbox" className="btn-check" disabled={isLoading} />
                        </label>
                    </div>
                </div>
            )}

            {isRecoverPassword || isSignin && (
                <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="form-check me-2">
                        <input 
                            type="checkbox" 
                            className="form-check-input" 
                            id="remember-30"
                            checked={recoverData.rememberFor30Days || false}
                            onChange={(evt) => handleInputChange('rememberFor30Days', evt)}
                            disabled={isLoading}
                        />
                        <label htmlFor="remember-30" className="form-check-label">
                            Remember for 30 days
                        </label>
                    </div>

                    {/*  */}
                    {
                    isSignin && (
                        <div className="nav">
                        <Link className="nav-link animate-underline p-0" to="/auth/recover-password">
                        <span className="animate-target">Forgot password?</span>
                        </Link>
                        </div>
                    )
                    }

                </div>
            )}

            {isSignup && (
                <div className="d-flex flex-column gap-2 mb-4">
                    <div className="form-check">
                        <input
                            type="checkbox"
                            defaultChecked
                            className="form-check-input"
                            id="privacy"
                            disabled={isLoading}
                            required
                        />
                        <label htmlFor="privacy" className="form-check-label">
                            I have read and accept the{' '}
                            <NavLink className="text-dark-emphasis" to="/customer-service/terms-conditions">
                                Privacy Policy
                            </NavLink>
                        </label>
                    </div>
                </div>
            )}
        </>
    );

    const renderSocialAuth = () => {
        if (!showSocialAuth) return null;

        return (
            <>
                <div className="d-flex align-items-center my-4">
                    <hr className="w-100 m-0" />
                    <span className="text-body-emphasis fw-medium text-nowrap mx-4">
                        or {isSignup ? 'sign up' : isRecoverPassword ? 'recover' : 'continue'} with
                    </span>
                    <hr className="w-100 m-0" />
                </div>

                {/* <div className="d-flex flex-row flex-sm-row gap-3 mb-4 overflow-auto pe-2">  */} 
                {/* Remove `overflow-auto` for opening tag below so it won't have the scroll bar which is fine with up 4 oauth buttons */}
                <div className="d-flex flex-row flex-sm-row gap-3 mb-4 pe-2 overflow-auto">
                    <SocialAuthButton provider="google" disabled={isLoading}>Google</SocialAuthButton>
                    <SocialAuthButton provider="facebook" disabled={isLoading}>Facebook</SocialAuthButton>
                    <SocialAuthButton provider="apple" disabled={isLoading}>Apple</SocialAuthButton>
                    {/* <SocialAuthButton provider="salesnet" disabled={isLoading}>Salesnet</SocialAuthButton> */}
                    <Link
                        to={isSignup ? "/auth/signin" : "/auth/signup"}
                        className={`${isLoading && 'disabled'} btn btn-md btn-outline-danger w-100 px-2 flex-fill rounded-pill`}
                        disabled={isLoading}
                        title="Salesnet authentication"
                    >
                        <i className="ci-apple ms-1 me-1"></i>
                        Salesnet
                    </Link>
                </div>
            </>
        );
    };

    const renderToggleAuth = () => {
        // For recover password, show back to signin link
        if (isRecoverPassword) {
            if (isCanvas) {
                return (
                    <div className="nav fs-sm mb-3 mb-lg-2">
                        <button
                            className="btn btn-link p-0 text-decoration-none border"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#quickSigninCanvas"
                            aria-controls="signinCanvas"
                        >
                            <i className="ci-chevron-left fs-lg ms-n1 me-1"></i>
                            <span>Back to Sign In</span>
                        </button>
                    </div>
                );
            }
            return null; // Will be handled in header for page variant
        }

        if (isCanvas) {
            return (
                <div className="nav fs-sm mb-3 mb-lg-2 animate-scale">
                    {isSignup ? "I already have an account, " : "Don't have an account? "}
                    <button
                        className="animate-target btn badge rounded-pill ml-1 text-bg-info"
                        data-bs-toggle="offcanvas"
                        data-bs-target={isSignup ? "#quickSigninCanvas" : "#quickSignupCanvas"}
                        aria-controls={isSignup ? "signinCanvas" : "signupCanvas"}
                        aria-label={isSignup ? "Sign in Canvas" : "Sign up Canvas"}
                    >
                        {isSignup ? "Sign in" : "Create an account"}
                    </button>
                </div>
            );
        }

        return (
            <div className="nav fs-sm mb-4">
                {isSignup ? "I already have an account" : "Don't have an account?"}
                <NavLink
                    className={isSignup ? 
                        "nav-link badge text-decoration-none rounded-pill p-1 ml-1 text-bg-info" : 
                        "nav-link text-decoration-underline p-0 ms-2"
                    }
                    to={isSignup ? "/auth/signin" : "/auth/signup"}
                >
                    {isSignup ? "Sign in" : "Create an account"}
                </NavLink>
            </div>
        );
    };

    if (isCanvas) {
        return (
            <div className="d-flex flex-column gap-4 pt-2">
                {/* {renderToggleAuth()} */} {/* Removed headers since Salesnet is also added as on of social auth */}
                
                <form 
                    className={`needs-validation ${className}`} 
                    onSubmit={handleSubmit} 
                    noValidate
                >
                    {renderFormFields()}
                    
                    <ResponseModal 
                        show={modalState.show} 
                        message={modalState.message} 
                        type={modalState.type} 
                    />

                    <button
                        type="submit"
                        className={`btn btn-lg bg-dark text-white w-100 ${isLoading ? 'disabled' : ''}`}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <LoadingZoom size="sm" />
                                {getButtonText()}
                            </>
                        ) : (
                            getButtonText()
                        )}
                    </button>
                </form>

                {renderSocialAuth()}
            </div>
        );
    }

    return (
        <div className={`w-100 ${className}`}>
            {showLogo && (
                <header className="navbar px-0 pb-4 mt-n2 mt-sm-0 mb-2 mb-md-3 mb-lg-4">
                    <NavLink className="navbar-brand pt-0" to="/">
                        <span className="d-flex flex-shrink-0 text-primary rtl-flip me-2">
                            <div className="flex-shrink-0" style={{ width: '32px' }}>
                                <div className="ratio ratio-1x1 overflow-hidden">
                                    <img src="/assets/img/us/logos/favicon.svg" alt="Avatar" />
                                </div>
                            </div>
                        </span>
                        Salesnet
                    </NavLink>
                    {isRecoverPassword && (
                        <div className="nav">
                            <NavLink className="nav-link fs-base animate-underline p-0" to="/auth/signin">
                                <i className="ci-chevron-left fs-lg ms-n1 me-1"></i>
                                <span className="animate-target">Back to Sign In</span>
                            </NavLink>
                        </div>
                    )}
                </header>
            )}

            <h1 className="h2 mt-1">
                {getFormTitle()}
            </h1>

            {isRecoverPassword && (
                <small className="nav fs-sm mb-4 text-warning">
                    Enter any contact detail you used when you joined and we'll send you instructions to reset your password.
                </small>
            )}
            
            {/* {renderToggleAuth()} */} {/* Removed headers since Salesnet is also already added as on of social auth */}

            {showBenefits && !isSignup && !isRecoverPassword && (
                <div className="nav fs-sm mb-4 d-lg-none">
                    <span className="me-2">Uncertain about creating an account?</span>
                    <NavLink
                        className="text-decoration-none rounded-pill text-bg-info"
                        to="#benefits"
                        data-bs-toggle="offcanvas"
                        aria-controls="benefits"
                    >
                        Benefits
                    </NavLink>
                </div>
            )}

            {/* Social auth first for signup */}
            {isSignup && renderSocialAuth()}

            {/* Form wrapper with scrolling for signup */}
            <div className={isSignup ? 
                "overflow-y-auto pe-2 simplebar-scrollable-y" : 
                ""
            } 
            {...(isSignup && {
                'data-simplebar': true,
                'data-simplebar-auto-hide': 'true',
                style: { maxHeight: '400px' }
            })}>
                <form 
                    className={`needs-validation ${className}`} 
                    onSubmit={handleSubmit} 
                    noValidate
                >
                    {renderFormFields()}
                    
                    <ResponseModal 
                        show={modalState.show} 
                        message={modalState.message} 
                        type={modalState.type} 
                    />

                    <button
                        type="submit"
                        className={`btn btn-lg bg-dark text-white w-100 ${isLoading ? 'disabled' : ''}`}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <LoadingZoom size="sm" />
                                {getButtonText()}
                            </>
                        ) : (
                            getButtonText()
                        )}
                    </button>
                </form>
            </div>

            {/* Social auth after form for signin and recover password */}
            {(isSignin || isRecoverPassword) && renderSocialAuth()}
        </div>
    );
};

export default AuthForm;