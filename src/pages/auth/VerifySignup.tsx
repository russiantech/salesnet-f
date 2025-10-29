
// // pages/auth/VerifySignup.tsx
// import React, { useState, useEffect } from 'react';
// import { NavLink, useNavigate, useLocation } from 'react-router-dom';
// import { UsersAxiosService } from '../../services/net/UsersAxiosService';
// import { NotificationService } from '../../services/local/NotificationService';
// import ResponseModal from '../../components/shared/modals/ResponseModal';
// import { LoadingZoom } from '../../components/shared/LoadingSpinner';

// interface VerificationState {
//     email: string;
//     phone: string;
//     token: string;
// }

// const VerifySignup = () => {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const state = location.state as VerificationState ;

//     const [emailCode, setEmailCode] = useState('');
//     const [phoneCode, setPhoneCode] = useState('');
//     const [isLoading, setIsLoading] = useState(false);
//     const [resendLoading, setResendLoading] = useState<'email' | 'phone' | null>(null);
//     const [modalState, setModalState] = useState({
//         show: false,
//         message: '',
//         type: 'success' as 'success' | 'error'
//     });
//     const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
//     const [canResend, setCanResend] = useState(false);

//     useEffect(() => {
//         // Redirect if no verification data
//         if (!state?.token || !state?.email) {
//             NotificationService.showDialog('Invalid verification session. Please sign up again.', 'error');
//             navigate('/auth/signup', { replace: true });
//             return;
//         }

//         // Countdown timer
//         const timer = setInterval(() => {
//             setTimeLeft((prev) => {
//                 if (prev <= 1) {
//                     clearInterval(timer);
//                     NotificationService.showDialog('Verification codes expired. Please sign up again.', 'error');
//                     setTimeout(() => navigate('/auth/signup'), 3000);
//                     return 0;
//                 }
//                 return prev - 1;
//             });
//         }, 1000);

//         // Enable resend after 60 seconds
//         const resendTimer = setTimeout(() => setCanResend(true), 60000);

//         return () => {
//             clearInterval(timer);
//             clearTimeout(resendTimer);
//         };
//     }, [state, navigate]);

//     const showModal = (message: string, type: 'success' | 'error') => {
//         setModalState({ show: true, message, type });
//         setTimeout(() => setModalState({ show: false, message: '', type: 'success' }), 3000);
//     };

//     const formatTime = (seconds: number) => {
//         const mins = Math.floor(seconds / 60);
//         const secs = seconds % 60;
//         return `${mins}:${secs.toString().padStart(2, '0')}`;
//     };

//     const handleVerify = async (e: React.FormEvent) => {
//         e.preventDefault();

//         if (!emailCode && !phoneCode) {
//             showModal('Please enter at least one verification code', 'error');
//             return;
//         }

//         if (emailCode.length !== 5 || phoneCode.length !== 5) {
//             showModal('Verification codes must be 5 characters', 'error');
//             return;
//         }

//         setIsLoading(true);

//         try {
//             const response = await UsersAxiosService.verifySignup({
//                 token: state.token,
//                 email_code: emailCode.toUpperCase(),
//                 phone_code: phoneCode.toUpperCase()
//             });

//             if (response.data.success) {
//                 NotificationService.showDialog('Account created successfully! Redirecting to sign in...', 'success');
//                 setTimeout(() => {
//                     navigate('/auth/signin', {
//                         state: { message: 'Account verified! Please sign in.' }
//                     });
//                 }, 2000);
//             }
            
//         } catch (error: any) {
//             const message = error.response?.data?.error || 'Verification failed. Please try again.';
//             showModal(message, 'error');
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     const handleResend = async (type: 'email' | 'phone') => {
//         if (!canResend) {
//             showModal('Please wait before requesting a new code', 'error');
//             return;
//         }

//         setResendLoading(type);

//         try {
//             const response = await UsersAxiosService.resendVerificationCode({
//                 token: state.token,
//                 type
//             });

//             if (response.data.success) {
//                 showModal(`New ${type} code sent successfully`, 'success');
//                 setCanResend(false);
//                 setTimeout(() => setCanResend(true), 60000);
//             }
//         } catch (error: any) {
//             const message = error.response?.data?.error || `Failed to resend ${type} code`;
//             showModal(message, 'error');
//         } finally {
//             setResendLoading(null);
//         }
//     };

//     const handleInputChange = (
//         e: React.ChangeEvent<HTMLInputElement>,
//         setter: (value: string) => void
//     ) => {
//         const value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
//         if (value.length <= 5) {
//             setter(value);
//         }
//     };

//     if (!state?.token) {
//         return null;
//     }

//     return (
//         <main className="content-wrapper w-100 px-3 ps-lg-5 pe-lg-4 mx-auto" style={{ maxWidth: "1920px" }}>
//             <div className="d-lg-flex">
//                 <div className="d-flex flex-column min-vh-100 w-100 py-4 mx-auto me-lg-5" style={{ maxWidth: '416px' }}>
//                     {/* Header */}
//                     <header className="navbar px-0 pb-4 mt-n2 mt-sm-0 mb-2 mb-md-3 mb-lg-4">
//                         <NavLink className="navbar-brand pt-0" to="/">
//                             <span className="d-flex flex-shrink-0 text-primary rtl-flip me-2">
//                                 <div className="flex-shrink-0" style={{ width: '32px' }}>
//                                     <div className="ratio ratio-1x1 overflow-hidden">
//                                         <img src="/assets/img/us/logos/favicon.svg" alt="Salesnet" />
//                                     </div>
//                                 </div>
//                             </span>
//                             Salesnet
//                         </NavLink>
//                         <div className="nav">
//                             <NavLink className="nav-link fs-base animate-underline p-0" to="/auth/signup">
//                                 <i className="ci-chevron-left fs-lg ms-n1 me-1"></i>
//                                 <span className="animate-target">Back to Sign Up</span>
//                             </NavLink>
//                         </div>
//                     </header>

//                     <h1 className="h2 mt-1 mb-3">Verify Your Account</h1>
                    
//                     <div className="alert alert-info border-0 mb-4">
//                         <div className="d-flex align-items-start">
//                             <i className="ci-mail fs-xl me-2 mt-1"></i>
//                             <div className="flex-grow-1">
//                                 <p className="mb-2 fw-medium">Verification codes sent to:</p>
//                                 <p className="mb-1 small">{state.email}</p>
//                                 <p className="mb-0 small">{state.phone}</p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Timer */}
//                     <div className="text-center mb-4">
//                         <span className="badge bg-warning text-dark fs-6 py-2 px-3">
//                             <i className="ci-time me-2"></i>
//                             Expires in: {formatTime(timeLeft)}
//                         </span>
//                     </div>

//                     <form onSubmit={handleVerify} className="needs-validation" noValidate>

//                         {/* Email Code */}
//                         {state?.email && (
//                         <div className="mb-4">
//                             <label htmlFor="emailCode" className="form-label fw-medium">
//                                 Email Verification Code
//                             </label>
//                             <div className="input-group input-group-lg">
//                                 <input
//                                     type="text"
//                                     className="form-control text-center"
//                                     id="emailCode"
//                                     value={emailCode}
//                                     onChange={(e) => handleInputChange(e, setEmailCode)}
//                                     placeholder="ABC12"
//                                     maxLength={5}
//                                     disabled={isLoading}
//                                     required
//                                     style={{ 
//                                         letterSpacing: '0.5em', 
//                                         fontSize: '1.5rem', 
//                                         fontWeight: '600',
//                                         fontFamily: 'monospace'
//                                     }}
//                                 />
//                                 <button
//                                     type="button"
//                                     className="btn btn-outline-secondary"
//                                     onClick={() => handleResend('email')}
//                                     disabled={!canResend || resendLoading === 'email' || isLoading}
//                                     title="Resend email code"
//                                 >
//                                     {resendLoading === 'email' ? (
//                                         <LoadingZoom size="sm" />
//                                     ) : (
//                                         <i className="ci-refresh-cw"></i>
//                                     )}
//                                 </button>
//                             </div>
//                             <small className="text-muted">Check your email inbox and spam folder</small>
//                         </div>
//                         )}

//                         {/* Phone Code */}
//                         {state?.phone && (
//                         <div className="mb-4">
//                             <label htmlFor="phoneCode" className="form-label fw-medium">
//                                 Phone Verification Code
//                             </label>
//                             <div className="input-group input-group-lg">
//                                 <input
//                                     type="text"
//                                     className="form-control text-center"
//                                     id="phoneCode"
//                                     value={phoneCode}
//                                     onChange={(e) => handleInputChange(e, setPhoneCode)}
//                                     placeholder="XYZ89"
//                                     maxLength={5}
//                                     disabled={isLoading}
//                                     required
//                                     style={{ 
//                                         letterSpacing: '0.5em', 
//                                         fontSize: '1.5rem', 
//                                         fontWeight: '600',
//                                         fontFamily: 'monospace'
//                                     }}
//                                 />
//                                 <button
//                                     type="button"
//                                     className="btn btn-outline-secondary"
//                                     onClick={() => handleResend('phone')}
//                                     disabled={!canResend || resendLoading === 'phone' || isLoading}
//                                     title="Resend phone code"
//                                 >
//                                     {resendLoading === 'phone' ? (
//                                         <LoadingZoom size="sm" />
//                                     ) : (
//                                         <i className="ci-refresh-cw"></i>
//                                     )}
//                                 </button>
//                             </div>
//                             <small className="text-muted">Check your SMS messages</small>
//                         </div>
//                         )}

//                         {!canResend && (
//                             <div className="alert alert-light border-0 mb-4">
//                                 <small className="text-muted">
//                                     <i className="ci-info-circle me-1"></i>
//                                     Didn't receive codes? You can request new ones in 60 seconds.
//                                 </small>
//                             </div>
//                         )}

//                         <ResponseModal 
//                             show={modalState.show} 
//                             message={modalState.message} 
//                             type={modalState.type} 
//                         />

//                         <button
//                             type="submit"
//                             className={`btn btn-lg bg-dark text-white w-100 ${isLoading || !emailCode || !phoneCode ? 'disabled' : ''}`}
//                             disabled={isLoading || !emailCode || !phoneCode}
//                         >
//                             {isLoading ? (
//                                 <>
//                                     <LoadingZoom size="sm" />
//                                     {' '}Verifying...
//                                 </>
//                             ) : (
//                                 <>
//                                     <i className="ci-check-circle me-2"></i>
//                                     Verify & Complete Signup
//                                 </>
//                             )}
//                         </button>
//                     </form>

//                     <div className="text-center mt-4">
//                         <p className="text-muted mb-0">
//                             Having trouble? <NavLink to="/customer-service/contact-us" className="text-decoration-none">Contact Support</NavLink>
//                         </p>
//                     </div>

//                     <footer className="mt-auto pt-4">
//                         <p className="fs-xs mb-0">
//                             © All rights reserved.{' '}
//                             <NavLink 
//                                 className="animate-target text-dark-emphasis text-decoration-none" 
//                                 to="https://techa.salesnet.ng" 
//                                 target="_blank" 
//                                 rel="noreferrer"
//                             >
//                                 Techa - Russian Developers.
//                             </NavLink>
//                         </p>
//                     </footer>
//                 </div>

//                 {/* Right side visual */}
//                 <div className="d-none d-lg-block w-100 py-4 ms-auto" style={{ maxWidth: '1034px' }}>
//                     <div className="d-flex flex-column justify-content-center align-items-center h-100 rounded-5 overflow-hidden position-relative">
//                         <span className="position-absolute top-0 start-0 w-100 h-100 d-none-dark" 
//                               style={{ background: 'linear-gradient(-90deg, #accbee 0%, #e7f0fd 100%)' }} />
//                         <span className="position-absolute top-0 start-0 w-100 h-100 d-none d-block-dark" 
//                               style={{ background: 'linear-gradient(-90deg, #1b273a 0%, #1f2632 100%)' }} />
//                         <div className="position-relative z-2 text-center p-5">
//                             <div className="mb-4">
//                                 <i className="ci-mail-open" style={{ fontSize: '120px', opacity: 0.2 }}></i>
//                             </div>
//                             <h2 className="h3 mb-3">Almost There!</h2>
//                             <p className="lead text-muted mb-0">
//                                 Just verify your email and phone to<br />complete your registration
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </main>
//     );
// };

// export default VerifySignup;


// V2
// pages/auth/VerifySignup.tsx
import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { UsersAxiosService } from '../../services/net/UsersAxiosService';
import { NotificationService } from '../../services/local/NotificationService';
import ResponseModal from '../../components/shared/modals/ResponseModal';
import { LoadingZoom } from '../../components/shared/LoadingSpinner';

interface VerificationState {
    email: string;
    phone: string;
    token: string;
}

const VerifySignup = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state as VerificationState ;

    const [emailCode, setEmailCode] = useState('');
    const [phoneCode, setPhoneCode] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [resendLoading, setResendLoading] = useState<'email' | 'phone' | null>(null);
    const [modalState, setModalState] = useState({
        show: false,
        message: '',
        type: 'success' as 'success' | 'error'
    });
    const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
    const [canResend, setCanResend] = useState(false);

    useEffect(() => {
        // Redirect if no verification data
        if (!state?.token || !state?.email) {
            NotificationService.showDialog('Invalid verification session. Please sign up again.', 'error');
            navigate('/auth/signup', { replace: true });
            return;
        }

        // Countdown timer
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    NotificationService.showDialog('Verification codes expired. Please sign up again.', 'error');
                    setTimeout(() => navigate('/auth/signup'), 3000);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        // Enable resend after 60 seconds
        const resendTimer = setTimeout(() => setCanResend(true), 60000);

        return () => {
            clearInterval(timer);
            clearTimeout(resendTimer);
        };
    }, [state, navigate]);

    const showModal = (message: string, type: 'success' | 'error') => {
        setModalState({ show: true, message, type });
        setTimeout(() => setModalState({ show: false, message: '', type: 'success' }), 3000);
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const handleVerify = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!emailCode && !phoneCode) {
            showModal('Please enter at least one verification code', 'error');
            return;
        }

        /*if (emailCode.length !== 5 || phoneCode.length !== 5) {
            showModal('Verification codes must be 5 characters', 'error');
            return;
        }*/
       
       // If one is provided, only validate that one
        if ((emailCode && emailCode.length !== 5) || (phoneCode && phoneCode.length !== 5)) {
            showModal('Verification codes must be 5 characters', 'error');
            return;
        }

        setIsLoading(true);

        try {
            const response = await UsersAxiosService.verifySignup({
                token: state.token,
                email_code: emailCode.toUpperCase(),
                phone_code: phoneCode.toUpperCase()
            });

            if (response.data.success) {
                NotificationService.showDialog('Account created successfully! Redirecting to sign in...', 'success');
                setTimeout(() => {
                    navigate('/auth/signin', {
                        state: { message: 'Account verified! Please sign in.' }
                    });
                }, 2000);
            }
            
        } catch (error: any) {
            const message = error.response?.data?.error || 'Verification failed. Please try again.';
            showModal(message, 'error');
        } finally {
            setIsLoading(false);
        }
    };

    const handleResend = async (type: 'email' | 'phone') => {
        if (!canResend) {
            showModal('Please wait before requesting a new code', 'error');
            return;
        }

        setResendLoading(type);

        try {
            const response = await UsersAxiosService.resendVerificationCode({
                token: state.token,
                type
            });

            if (response.data.success) {
                showModal(`New ${type} code sent successfully`, 'success');
                setCanResend(false);
                setTimeout(() => setCanResend(true), 60000);
            }
        } catch (error: any) {
            const message = error.response?.data?.error || `Failed to resend ${type} code`;
            showModal(message, 'error');
        } finally {
            setResendLoading(null);
        }
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        setter: (value: string) => void
    ) => {
        const value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
        if (value.length <= 5) {
            setter(value);
        }
    };

    if (!state?.token) {
        return null;
    }

    return (
        <main className="content-wrapper w-100 px-3 ps-lg-5 pe-lg-4 mx-auto" style={{ maxWidth: "1920px" }}>
            <div className="d-lg-flex">
                <div className="d-flex flex-column min-vh-100 w-100 py-4 mx-auto me-lg-5" style={{ maxWidth: '416px' }}>
                    {/* Header */}
                    <header className="navbar px-0 pb-4 mt-n2 mt-sm-0 mb-2 mb-md-3 mb-lg-4">
                        <NavLink className="navbar-brand pt-0" to="/">
                            <span className="d-flex flex-shrink-0 text-primary rtl-flip me-2">
                                <div className="flex-shrink-0" style={{ width: '32px' }}>
                                    <div className="ratio ratio-1x1 overflow-hidden">
                                        <img src="/assets/img/us/logos/favicon.svg" alt="Salesnet" />
                                    </div>
                                </div>
                            </span>
                            Salesnet
                        </NavLink>
                        <div className="nav">
                            <NavLink className="nav-link fs-base animate-underline p-0" to="/auth/signup">
                                <i className="ci-chevron-left fs-lg ms-n1 me-1"></i>
                                <span className="animate-target">Back to Sign Up</span>
                            </NavLink>
                        </div>
                    </header>

                    <h1 className="h2 mt-1 mb-3">Verify Your Account</h1>
                    
                    <div className="alert alert-info border-0 mb-4">
                        <div className="d-flex align-items-start">
                            <i className="ci-mail fs-xl me-2 mt-1"></i>
                            <div className="flex-grow-1">
                                <p className="mb-2 fw-medium">Verification codes sent to:</p>
                                <p className="mb-1 small">{state.email}</p>
                                <p className="mb-0 small">{state.phone}</p>
                            </div>
                        </div>
                    </div>

                    {/* Timer */}
                    <div className="text-center mb-4">
                        <span className="badge bg-warning text-dark fs-6 py-2 px-3">
                            <i className="ci-time me-2"></i>
                            Expires in: {formatTime(timeLeft)}
                        </span>
                    </div>

                    <form onSubmit={handleVerify} className="needs-validation" noValidate>

                        {/* Email Code */}
                        {state?.email && (
                        <div className="mb-4">
                            <label htmlFor="emailCode" className="form-label fw-medium">
                                Email Verification Code
                            </label>
                            <div className="input-group input-group-lg">
                                <input
                                    type="text"
                                    className="form-control text-center"
                                    id="emailCode"
                                    value={emailCode}
                                    onChange={(e) => handleInputChange(e, setEmailCode)}
                                    placeholder="ABC12"
                                    maxLength={5}
                                    disabled={isLoading}
                                    required
                                    style={{ 
                                        letterSpacing: '0.5em', 
                                        fontSize: '1.5rem', 
                                        fontWeight: '600',
                                        fontFamily: 'monospace'
                                    }}
                                />
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary"
                                    onClick={() => handleResend('email')}
                                    disabled={!canResend || resendLoading === 'email' || isLoading}
                                    title="Resend email code"
                                >
                                    {resendLoading === 'email' ? (
                                        <LoadingZoom size="sm" />
                                    ) : (
                                        <i className="ci-refresh-cw"></i>
                                    )}
                                </button>
                            </div>
                            <small className="text-muted">Check your email inbox and spam folder</small>
                        </div>
                        )}

                        {/* Phone Code */}
                        {state?.phone && (
                        <div className="mb-4">
                            <label htmlFor="phoneCode" className="form-label fw-medium">
                                Phone Verification Code
                            </label>
                            <div className="input-group input-group-lg">
                                <input
                                    type="text"
                                    className="form-control text-center"
                                    id="phoneCode"
                                    value={phoneCode}
                                    onChange={(e) => handleInputChange(e, setPhoneCode)}
                                    placeholder="XYZ89"
                                    maxLength={5}
                                    disabled={isLoading}
                                    required
                                    style={{ 
                                        letterSpacing: '0.5em', 
                                        fontSize: '1.5rem', 
                                        fontWeight: '600',
                                        fontFamily: 'monospace'
                                    }}
                                />
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary"
                                    onClick={() => handleResend('phone')}
                                    disabled={!canResend || resendLoading === 'phone' || isLoading}
                                    title="Resend phone code"
                                >
                                    {resendLoading === 'phone' ? (
                                        <LoadingZoom size="sm" />
                                    ) : (
                                        <i className="ci-refresh-cw"></i>
                                    )}
                                </button>
                            </div>
                            <small className="text-muted">Check your SMS messages</small>
                        </div>
                        )}

                        {!canResend && (
                            <div className="alert alert-light border-0 mb-4">
                                <small className="text-muted">
                                    <i className="ci-info-circle me-1"></i>
                                    Didn't receive codes? You can request new ones in 60 seconds.
                                </small>
                            </div>
                        )}

                        <ResponseModal 
                            show={modalState.show} 
                            message={modalState.message} 
                            type={modalState.type} 
                        />

                        {/* <button
                            type="submit"
                            className={`btn btn-lg bg-dark text-white w-100 ${isLoading || !emailCode || !phoneCode ? 'disabled' : ''}`}
                            disabled={isLoading || !emailCode || !phoneCode}
                        > */}
                            
                        <button
                            type="submit"
                            className={`btn btn-lg bg-dark text-white w-100 ${isLoading || (!emailCode && !phoneCode) ? 'disabled' : ''}`}
                            disabled={isLoading || (!emailCode && !phoneCode)}
                        >
                            {isLoading ? (
                                <>
                                    <LoadingZoom size="sm" />
                                    {' '}Verifying...
                                </>
                            ) : (
                                <>
                                    <i className="ci-check-circle me-2"></i>
                                    Verify & Complete Signup
                                </>
                            )}
                        </button>
                    </form>

                    <div className="text-center mt-4">
                        <p className="text-muted mb-0">
                            Having trouble? <NavLink to="/customer-service/contact-us" className="text-decoration-none">Contact Support</NavLink>
                        </p>
                    </div>

                    <footer className="mt-auto pt-4">
                        <p className="fs-xs mb-0">
                            © All rights reserved.{' '}
                            <NavLink 
                                className="animate-target text-dark-emphasis text-decoration-none" 
                                to="https://techa.salesnet.ng" 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                Techa - Russian Developers.
                            </NavLink>
                        </p>
                    </footer>
                </div>

                {/* Right side visual */}
                <div className="d-none d-lg-block w-100 py-4 ms-auto" style={{ maxWidth: '1034px' }}>
                    <div className="d-flex flex-column justify-content-center align-items-center h-100 rounded-5 overflow-hidden position-relative">
                        <span className="position-absolute top-0 start-0 w-100 h-100 d-none-dark" 
                              style={{ background: 'linear-gradient(-90deg, #accbee 0%, #e7f0fd 100%)' }} />
                        <span className="position-absolute top-0 start-0 w-100 h-100 d-none d-block-dark" 
                              style={{ background: 'linear-gradient(-90deg, #1b273a 0%, #1f2632 100%)' }} />
                        <div className="position-relative z-2 text-center p-5">
                            <div className="mb-4">
                                <i className="ci-mail-open" style={{ fontSize: '120px', opacity: 0.2 }}></i>
                            </div>
                            <h2 className="h3 mb-3">Almost There!</h2>
                            {/* <p className="lead text-muted mb-0">
                                Just verify your email and phone to<br />complete your registration
                            </p> */}
                            <p className="lead text-muted mb-0">
                                Verify your email or phone to<br />complete your registration
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default VerifySignup;