// // components/auth/VerifyRecoveryCode.tsx
// import React, { useState, useEffect, useRef } from 'react';
// import { NavLink, useLocation, useNavigate } from 'react-router-dom';
// import { UsersAxiosService } from '../../services/net/UsersAxiosService';
// import { NotificationService } from '../../services/local/NotificationService';
// import ResponseModal from '../shared/modals/ResponseModal';
// import { LoadingZoom } from '../shared/LoadingSpinner';
// import { VerifyRecoveryFormData, CompleteResetFormData, ModalState } from '../../types/auth.types';

// interface LocationState {
//     token?: string;
//     message?: string;
// }

// const VerifyRecoveryCode: React.FC = () => {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const state = location.state as LocationState;
//     console.log(state);
//     const [step, setStep] = useState<'verify' | 'reset'>('verify');
//     const [token] = useState<string>(state?.token || '');
//     const [verificationCode, setVerificationCode] = useState<string>('');
//     const [passwords, setPasswords] = useState({
//         new_password: '',
//         confirm_password: ''
//     });
    
//     const [modalState, setModalState] = useState<ModalState>({ 
//         show: false, 
//         message: '', 
//         type: '' 
//     });
//     const [isLoading, setIsLoading] = useState<boolean>(false);
//     const [timeLeft, setTimeLeft] = useState<number>(3600); // 1 hour in seconds
    
//     const codeInputRefs = useRef<(HTMLInputElement | null)[]>([]);

//     // Redirect if no token
//     useEffect(() => {
//         if (!token) {
//             alert(token)
//             navigate('/auth/recover-password', { replace: true });
//             return;
//         }
//     }, [token, navigate]);

//     // Notification subscription
//     useEffect(() => {
//         const observer = (data: ModalState) => {
//             setModalState(data);
//         };

//         NotificationService.subscribe(observer);
//         return () => {
//             NotificationService.unsubscribe(observer);
//         };
//     }, []);

//     // Countdown timer
//     useEffect(() => {
//         if (timeLeft > 0) {
//             const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
//             return () => clearTimeout(timer);
//         } else {
//             // Token expired, redirect back
//             NotificationService.showDialog(
//                 'Recovery session expired. Please start the recovery process again.',
//                 'warning'
//             );
//             setTimeout(() => navigate('/auth/recover-password'), 2000);
//         }
//     }, [timeLeft, navigate]);

//     // Format time display
//     const formatTime = (seconds: number): string => {
//         const mins = Math.floor(seconds / 60);
//         const secs = seconds % 60;
//         return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
//     };

//     // Handle code input with auto-focus
//     const handleCodeChange = (index: number, value: string) => {
//         if (value.length > 1) return; // Prevent multiple characters
        
//         const newCode = verificationCode.split('');
//         newCode[index] = value.toUpperCase();
//         const updatedCode = newCode.join('');
        
//         setVerificationCode(updatedCode);
        
//         // Auto-focus next input
//         if (value && index < 4) {
//             codeInputRefs.current[index + 1]?.focus();
//         }
        
//         // Auto-submit when code is complete
//         if (updatedCode.length === 5 && !isLoading) {
//             handleVerifyCode(updatedCode);
//         }
//     };

//     // Handle backspace for better UX
//     const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
//         if (e.key === 'Backspace' && !verificationCode[index] && index > 0) {
//             codeInputRefs.current[index - 1]?.focus();
//         }
//     };

//     // Handle paste for verification code
//     const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
//         e.preventDefault();
//         const pastedText = e.clipboardData.getData('text').toUpperCase().slice(0, 5);
//         if (/^[A-Z0-9]{5}$/.test(pastedText)) {
//             setVerificationCode(pastedText);
//             // Focus last input
//             codeInputRefs.current[4]?.focus();
//             // Auto-submit
//             setTimeout(() => handleVerifyCode(pastedText), 100);
//         }
//     };

//     const handleVerifyCode = async (code: string = verificationCode) => {
//         if (code.length !== 5) {
//             NotificationService.showDialog('Please enter the complete 5-digit code.', 'warning');
//             return;
//         }

//         setIsLoading(true);
//         NotificationService.showDialog('Verifying code...', 'primary');

//         try {
//             const verifyData: VerifyRecoveryFormData = {
//                 token,
//                 verification_code: code
//             };

//             const response = await UsersAxiosService.verifyRecoveryCode(verifyData);

//             if (response.data.success) {
//                 NotificationService.showDialog(response.data.message, 'success');
//                 setStep('reset');
//             } else {
//                 NotificationService.showDialog(response.data.message || 'Invalid verification code.', 'error');
//                 setVerificationCode('');
//                 codeInputRefs.current[0]?.focus();
//             }
//         } catch (err: any) {
//             const errorMessage = err.response?.data?.message || 
//                                err.response?.data?.error || 
//                                'Verification failed. Please try again.';
//             NotificationService.showDialog(errorMessage, 'error');
//             setVerificationCode('');
//             codeInputRefs.current[0]?.focus();
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     const handlePasswordReset = async (e: React.FormEvent) => {
//         e.preventDefault();
        
//         if (!passwords.new_password || !passwords.confirm_password) {
//             NotificationService.showDialog('Please fill in both password fields.', 'warning');
//             return;
//         }

//         if (passwords.new_password !== passwords.confirm_password) {
//             NotificationService.showDialog('Passwords do not match.', 'warning');
//             return;
//         }

//         if (passwords.new_password.length < 4) {
//             NotificationService.showDialog('Password must be at least 4 characters long.', 'warning');
//             return;
//         }

//         setIsLoading(true);
//         NotificationService.showDialog('Resetting password...', 'primary');

//         try {
//             const resetData: CompleteResetFormData = {
//                 token,
//                 verification_code: verificationCode,
//                 new_password: passwords.new_password,
//                 confirm_password: passwords.confirm_password
//             };

//             const response = await UsersAxiosService.completePasswordReset(resetData);

//             if (response.data.success) {
//                 NotificationService.showDialog(
//                     'Password successfully reset! Redirecting to sign in...',
//                     'success'
//                 );
//                 setTimeout(() => {
//                     navigate('/auth/signin', { 
//                         state: { 
//                             message: 'Password reset successful. Please sign in with your new password.' 
//                         } 
//                     });
//                 }, 2000);
//             } else {
//                 NotificationService.showDialog(
//                     response.data.message || 'Failed to reset password.',
//                     'error'
//                 );
//             }
//         } catch (err: any) {
//             const errorMessage = err.response?.data?.message || 
//                                err.response?.data?.error || 
//                                'Failed to reset password. Please try again.';
//             NotificationService.showDialog(errorMessage, 'error');
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     const resendCode = async () => {
//         // Would trigger a new recovery request
//         navigate('/auth/recover-password');
//     };

//     const renderVerificationStep = () => (
//         <div className="w-100">
//             <h1 className="h2 mt-1 mb-3">Enter Verification Code</h1>
//             <p className="text-muted mb-4">
//                 We've sent a 5-digit verification code to your email. 
//                 Enter it below to verify your identity.
//             </p>

//             <div className="mb-4">
//                 <label className="form-label d-block text-center mb-3">
//                     Verification Code
//                 </label>
//                 <div className="d-flex justify-content-center gap-2 mb-3">
//                     {[0, 1, 2, 3, 4].map((index) => (
//                         <input
//                             key={index}
//                             ref={(el) => (codeInputRefs.current[index] = el)}
//                             type="text"
//                             className="form-control text-center fw-bold"
//                             style={{ 
//                                 width: '50px', 
//                                 height: '50px', 
//                                 fontSize: '18px',
//                                 letterSpacing: '2px'
//                             }}
//                             maxLength={1}
//                             value={verificationCode[index] || ''}
//                             onChange={(e) => handleCodeChange(index, e.target.value)}
//                             onKeyDown={(e) => handleKeyDown(index, e)}
//                             onPaste={index === 0 ? handlePaste : undefined}
//                             disabled={isLoading}
//                             autoFocus={index === 0}
//                         />
//                     ))}
//                 </div>
//                 <div className="text-center">
//                     <small className="text-muted">
//                         Code expires in: <span className="fw-bold text-warning">{formatTime(timeLeft)}</span>
//                     </small>
//                 </div>
//             </div>

//             <div className="d-flex gap-3 mb-4">
//                 <button
//                     type="button"
//                     onClick={() => handleVerifyCode()}
//                     disabled={verificationCode.length !== 5 || isLoading}
//                     className="btn btn-lg bg-dark text-white flex-fill"
//                 >
//                     {isLoading ? (
//                         <>
//                             <LoadingZoom size="sm" />
//                             <span className="ms-2">Verifying...</span>
//                         </>
//                     ) : (
//                         'Verify Code'
//                     )}
//                 </button>
//             </div>

//             <div className="text-center">
//                 <p className="text-muted mb-2">Didn't receive the code?</p>
//                 <button
//                     type="button"
//                     onClick={resendCode}
//                     className="btn btn-link p-0 text-decoration-none"
//                     disabled={isLoading}
//                 >
//                     Request new recovery code
//                 </button>
//             </div>
//         </div>
//     );

//     const renderPasswordResetStep = () => (
//         <div className="w-100">
//             <h1 className="h2 mt-1 mb-3">Set New Password</h1>
//             <p className="text-muted mb-4">
//                 Your identity has been verified. Please enter your new password below.
//             </p>

//             <form onSubmit={handlePasswordReset}>
//                 <div className="mb-4">
//                     <label htmlFor="new_password" className="form-label">New Password</label>
//                     <div className="password-toggle">
//                         <input
//                             type="password"
//                             id="new_password"
//                             className="form-control form-control-lg"
//                             value={passwords.new_password}
//                             onChange={(e) => setPasswords(prev => ({ 
//                                 ...prev, 
//                                 new_password: e.target.value 
//                             }))}
//                             placeholder="Enter new password"
//                             minLength={4}
//                             disabled={isLoading}
//                             required
//                         />
//                         <label className="password-toggle-button fs-lg" aria-label="Show/hide password">
//                             <input type="checkbox" className="btn-check" disabled={isLoading} />
//                         </label>
//                     </div>
//                     <div className="form-text">
//                         Password must be at least 4 characters long
//                     </div>
//                 </div>

//                 <div className="mb-4">
//                     <label htmlFor="confirm_password" className="form-label">Confirm New Password</label>
//                     <div className="password-toggle">
//                         <input
//                             type="password"
//                             id="confirm_password"
//                             className="form-control form-control-lg"
//                             value={passwords.confirm_password}
//                             onChange={(e) => setPasswords(prev => ({ 
//                                 ...prev, 
//                                 confirm_password: e.target.value 
//                             }))}
//                             placeholder="Confirm new password"
//                             minLength={4}
//                             disabled={isLoading}
//                             required
//                         />
//                         <label className="password-toggle-button fs-lg" aria-label="Show/hide password">
//                             <input type="checkbox" className="btn-check" disabled={isLoading} />
//                         </label>
//                     </div>
//                     {passwords.confirm_password && passwords.new_password !== passwords.confirm_password && (
//                         <div className="form-text text-danger">
//                             Passwords do not match
//                         </div>
//                     )}
//                 </div>

//                 <button
//                     type="submit"
//                     disabled={
//                         !passwords.new_password || 
//                         !passwords.confirm_password || 
//                         passwords.new_password !== passwords.confirm_password ||
//                         isLoading
//                     }
//                     className="btn btn-lg bg-dark text-white w-100"
//                 >
//                     {isLoading ? (
//                         <>
//                             <LoadingZoom size="sm" />
//                             <span className="ms-2">Resetting Password...</span>
//                         </>
//                     ) : (
//                         'Reset Password'
//                     )}
//                 </button>
//             </form>
//         </div>
//     );

//     return (
//         <main className="content-wrapper w-100 px-3 ps-lg-5 pe-lg-4 mx-auto" style={{ maxWidth: "1920px" }}>
//             <div className="d-lg-flex">
//                 <div className="d-flex flex-column min-vh-100 w-100 py-4 mx-auto me-lg-5" style={{ maxWidth: '416px' }}>
//                     {/* Logo */}
//                     <header className="navbar px-0 pb-4 mt-n2 mt-sm-0 mb-2 mb-md-3 mb-lg-4">
//                         <NavLink className="navbar-brand pt-0" to="/">
//                             <span className="d-flex flex-shrink-0 text-primary rtl-flip me-2">
//                                 <div className="flex-shrink-0" style={{ width: '32px' }}>
//                                     <div className="ratio ratio-1x1 overflow-hidden">
//                                         <img src="/assets/img/us/logos/favicon.svg" alt="Avatar" />
//                                     </div>
//                                 </div>
//                             </span>
//                             Salesnet
//                         </NavLink>
//                         <div className="nav">
//                             <NavLink className="nav-link fs-base animate-underline p-0" to="/auth/recover-password">
//                                 <i className="ci-chevron-left fs-lg ms-n1 me-1"></i>
//                                 <span className="animate-target">Start Over</span>
//                             </NavLink>
//                         </div>
//                     </header>

//                     {step === 'verify' ? renderVerificationStep() : renderPasswordResetStep()}

//                     <ResponseModal 
//                         show={modalState.show} 
//                         message={modalState.message} 
//                         type={modalState.type} 
//                     />

//                     {/* Footer */}
//                     <footer className="mt-auto">
//                         <p className="fs-xs mb-0">
//                             © All rights reserved.{' '}
//                             <span className="animate-underline">
//                                 <NavLink 
//                                     className="animate-target text-dark-emphasis text-decoration-none" 
//                                     to="https://techa.salesnet.ng" 
//                                     target="_blank" 
//                                     rel="noreferrer"
//                                 >
//                                     Techa - Russian Developers.
//                                 </NavLink>
//                             </span>
//                         </p>
//                     </footer>
//                 </div>
                
//                 {/* Cover image section */}
//                 <div className="d-none d-lg-block w-100 py-4 ms-auto" style={{ maxWidth: '1034px' }}>
//                     <div className="d-flex flex-column justify-content-end h-100 rounded-5 overflow-hidden">
//                         <span className="position-absolute top-0 start-0 w-100 h-100 d-none-dark" 
//                               style={{ background: 'linear-gradient(-90deg, #accbee 0%, #e7f0fd 100%)' }} />
//                         <span className="position-absolute top-0 start-0 w-100 h-100 d-none d-block-dark" 
//                               style={{ background: 'linear-gradient(-90deg, #1b273a 0%, #1f2632 100%)' }} />
//                         <div className="ratio h-100">
//                             <img src="/assets/img/us/pages/verification.jpg" alt="Verification" />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </main>
//     );
// };

// export default VerifyRecoveryCode;

// v2
import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { UsersAxiosService } from '../../services/net/UsersAxiosService';
import { NotificationService } from '../../services/local/NotificationService';
import ResponseModal from '../shared/modals/ResponseModal';
import { LoadingZoom } from '../shared/LoadingSpinner';
import { VerifyRecoveryFormData, CompleteResetFormData, ModalState } from '../../types/auth.types';

interface LocationState {
    token?: string;
    message?: string;
    recovery_link?: string;
}

const VerifyRecoveryCode: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const state = location.state as LocationState;
    
    // Get token from URL params (email link) or navigation state (form submission)
    const getToken = (): string => {
        const urlToken = searchParams.get('token');
        const stateToken = state?.token;
        return urlToken || stateToken || '';
    };
    
    const [step, setStep] = useState<'verify' | 'reset'>('verify');
    const [token] = useState<string>(getToken());
    const [verificationCode, setVerificationCode] = useState<string>('');
    const [passwords, setPasswords] = useState({
        new_password: '',
        confirm_password: ''
    });
    
    const [modalState, setModalState] = useState<ModalState>({ 
        show: false, 
        message: '', 
        type: '' 
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [timeLeft, setTimeLeft] = useState<number>(3600); // 1 hour in seconds
    
    const codeInputRefs = useRef<(HTMLInputElement | null)[]>([]);

    // Debug logging
    useEffect(() => {
        console.log('Token sources:', {
            urlToken: searchParams.get('token'),
            stateToken: state?.token,
            finalToken: token,
            searchParams: Object.fromEntries(searchParams.entries()),
            locationState: state
        });
    }, [searchParams, state, token]);

    // Redirect if no token
    useEffect(() => {
        if (!token) {
            NotificationService.showDialog(
                'Invalid recovery link. Please start the recovery process again.',
                'warning'
            );
            setTimeout(() => {
                navigate('/auth/recover-password', { replace: true });
            }, 1500);
            return;
        }
    }, [token, navigate]);

    // Show welcome message if coming from email link
    useEffect(() => {
        if (token && searchParams.get('token')) {
            // Coming from email link
            NotificationService.showDialog(
                'Please enter the verification code sent to your email.',
                'info'
            );
        } else if (state?.message) {
            // Coming from form submission
            NotificationService.showDialog(state.message, 'success');
        }
    }, [token, searchParams, state]);

    // Notification subscription
    useEffect(() => {
        const observer = (data: ModalState) => {
            setModalState(data);
        };

        NotificationService.subscribe(observer);
        return () => {
            NotificationService.unsubscribe(observer);
        };
    }, []);

    // Countdown timer
    useEffect(() => {
        if (timeLeft > 0 && token) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else if (timeLeft <= 0 && token) {
            // Token expired, redirect back
            NotificationService.showDialog(
                'Recovery session expired. Please start the recovery process again.',
                'warning'
            );
            setTimeout(() => navigate('/auth/recover-password'), 2000);
        }
    }, [timeLeft, navigate, token]);

    // Format time display
    const formatTime = (seconds: number): string => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    // Handle code input with auto-focus
    const handleCodeChange = (index: number, value: string) => {
        if (value.length > 1) return; // Prevent multiple characters
        
        const newCode = verificationCode.split('');
        newCode[index] = value.toUpperCase();
        const updatedCode = newCode.join('');
        
        setVerificationCode(updatedCode);
        
        // Auto-focus next input
        if (value && index < 4) {
            codeInputRefs.current[index + 1]?.focus();
        }
        
        // Auto-submit when code is complete
        if (updatedCode.length === 5 && !isLoading) {
            handleVerifyCode(updatedCode);
        }
    };

    // Handle backspace for better UX
    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && !verificationCode[index] && index > 0) {
            codeInputRefs.current[index - 1]?.focus();
        }
    };

    // Handle paste for verification code
    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const pastedText = e.clipboardData.getData('text').toUpperCase().slice(0, 5);
        if (/^[A-Z0-9]{5}$/.test(pastedText)) {
            setVerificationCode(pastedText);
            // Focus last input
            codeInputRefs.current[4]?.focus();
            // Auto-submit
            setTimeout(() => handleVerifyCode(pastedText), 100);
        }
    };

    const handleVerifyCode = async (code: string = verificationCode) => {
        if (code.length !== 5) {
            NotificationService.showDialog('Please enter the complete 5-digit code.', 'warning');
            return;
        }

        setIsLoading(true);
        NotificationService.showDialog('Verifying code...', 'primary');

        try {
            const verifyData: VerifyRecoveryFormData = {
                token,
                verification_code: code
            };

            const response = await UsersAxiosService.verifyRecoveryCode(verifyData);

            if (response.data.success) {
                NotificationService.showDialog(response.data.message, 'success');
                setStep('reset');
            } else {
                NotificationService.showDialog(response.data.message || 'Invalid verification code.', 'error');
                setVerificationCode('');
                codeInputRefs.current[0]?.focus();
            }
        } catch (err: any) {
            console.error('Verification error:', err);
            const errorMessage = err.response?.data?.message || 
                               err.response?.data?.error || 
                               'Verification failed. Please try again.';
            NotificationService.showDialog(errorMessage, 'error');
            setVerificationCode('');
            codeInputRefs.current[0]?.focus();
        } finally {
            setIsLoading(false);
        }
    };

    const handlePasswordReset = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!passwords.new_password || !passwords.confirm_password) {
            NotificationService.showDialog('Please fill in both password fields.', 'warning');
            return;
        }

        if (passwords.new_password !== passwords.confirm_password) {
            NotificationService.showDialog('Passwords do not match.', 'warning');
            return;
        }

        if (passwords.new_password.length < 4) {
            NotificationService.showDialog('Password must be at least 4 characters long.', 'warning');
            return;
        }

        setIsLoading(true);
        NotificationService.showDialog('Resetting password...', 'primary');

        try {
            const resetData: CompleteResetFormData = {
                token,
                verification_code: verificationCode,
                new_password: passwords.new_password,
                confirm_password: passwords.confirm_password
            };

            const response = await UsersAxiosService.completePasswordReset(resetData);

            if (response.data.success) {
                NotificationService.showDialog(
                    'Password successfully reset! Redirecting to sign in...',
                    'success'
                );
                setTimeout(() => {
                    navigate('/auth/signin', { 
                        state: { 
                            message: 'Password reset successful. Please sign in with your new password.' 
                        } 
                    });
                }, 2000);
            } else {
                NotificationService.showDialog(
                    response.data.message || 'Failed to reset password.',
                    'error'
                );
            }
        } catch (err: any) {
            console.error('Password reset error:', err);
            const errorMessage = err.response?.data?.message || 
                               err.response?.data?.error || 
                               'Failed to reset password. Please try again.';
            NotificationService.showDialog(errorMessage, 'error');
        } finally {
            setIsLoading(false);
        }
    };

    const resendCode = async () => {
        // Would trigger a new recovery request
        navigate('/auth/recover-password');
    };

    const renderVerificationStep = () => (
        <div className="w-100">
            <h1 className="h2 mt-1 mb-3">Enter Verification Code</h1>
            <p className="text-muted mb-4">
                We've sent a 5-digit verification code to your email. 
                Enter it below to verify your identity and proceed with password reset.
            </p>

            {/* Show token info for debugging (remove in production) */}
            <div className="mb-3 p-2 bg-light rounded" style={{ fontSize: '12px', color: '#666' }}>
                <strong>Debug Info:</strong> Token source: {searchParams.get('token') ? 'Email Link' : 'Form Navigation'}
            </div>

            <div className="mb-4">
                <label className="form-label d-block text-center mb-3">
                    Verification Code
                </label>
                <div className="d-flex justify-content-center gap-2 mb-3">
                    {[0, 1, 2, 3, 4].map((index) => (
                        <input
                            key={index}
                            ref={(el) => (codeInputRefs.current[index] = el)}
                            type="text"
                            className="form-control text-center fw-bold"
                            style={{ 
                                width: '50px', 
                                height: '50px', 
                                fontSize: '18px',
                                letterSpacing: '2px'
                            }}
                            maxLength={1}
                            value={verificationCode[index] || ''}
                            onChange={(e) => handleCodeChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            onPaste={index === 0 ? handlePaste : undefined}
                            disabled={isLoading}
                            autoFocus={index === 0}
                        />
                    ))}
                </div>
                <div className="text-center">
                    <small className="text-muted">
                        Code expires in: <span className="fw-bold text-warning">{formatTime(timeLeft)}</span>
                    </small>
                </div>
            </div>

            <div className="d-flex gap-3 mb-4">
                <button
                    type="button"
                    onClick={() => handleVerifyCode()}
                    disabled={verificationCode.length !== 5 || isLoading}
                    className="btn btn-lg bg-dark text-white flex-fill"
                >
                    {isLoading ? (
                        <>
                            <LoadingZoom size="sm" />
                            <span className="ms-2">Verifying...</span>
                        </>
                    ) : (
                        'Verify Code'
                    )}
                </button>
            </div>

            <div className="text-center">
                <p className="text-muted mb-2">Didn't receive the code?</p>
                <button
                    type="button"
                    onClick={resendCode}
                    className="btn btn-link p-0 text-decoration-none"
                    disabled={isLoading}
                >
                    Request new recovery code
                </button>
            </div>
        </div>
    );

    const renderPasswordResetStep = () => (
        <div className="w-100">
            <h1 className="h2 mt-1 mb-3">Set New Password</h1>
            <p className="text-muted mb-4">
                Your identity has been verified. Please enter your new password below.
            </p>

            <form onSubmit={handlePasswordReset}>
                <div className="mb-4">
                    <label htmlFor="new_password" className="form-label">New Password</label>
                    <div className="password-toggle">
                        <input
                            type="password"
                            id="new_password"
                            className="form-control form-control-lg"
                            value={passwords.new_password}
                            onChange={(e) => setPasswords(prev => ({ 
                                ...prev, 
                                new_password: e.target.value 
                            }))}
                            placeholder="Enter new password"
                            minLength={4}
                            disabled={isLoading}
                            required
                        />
                        <label className="password-toggle-button fs-lg" aria-label="Show/hide password">
                            <input type="checkbox" className="btn-check" disabled={isLoading} />
                        </label>
                    </div>
                    <div className="form-text">
                        Password must be at least 4 characters long
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="confirm_password" className="form-label">Confirm New Password</label>
                    <div className="password-toggle">
                        <input
                            type="password"
                            id="confirm_password"
                            className="form-control form-control-lg"
                            value={passwords.confirm_password}
                            onChange={(e) => setPasswords(prev => ({ 
                                ...prev, 
                                confirm_password: e.target.value 
                            }))}
                            placeholder="Confirm new password"
                            minLength={4}
                            disabled={isLoading}
                            required
                        />
                        <label className="password-toggle-button fs-lg" aria-label="Show/hide password">
                            <input type="checkbox" className="btn-check" disabled={isLoading} />
                        </label>
                    </div>
                    {passwords.confirm_password && passwords.new_password !== passwords.confirm_password && (
                        <div className="form-text text-danger">
                            Passwords do not match
                        </div>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={
                        !passwords.new_password || 
                        !passwords.confirm_password || 
                        passwords.new_password !== passwords.confirm_password ||
                        isLoading
                    }
                    className="btn btn-lg bg-dark text-white w-100"
                >
                    {isLoading ? (
                        <>
                            <LoadingZoom size="sm" />
                            <span className="ms-2">Resetting Password...</span>
                        </>
                    ) : (
                        'Reset Password'
                    )}
                </button>
            </form>
        </div>
    );

    // Don't render anything if no token (will redirect)
    if (!token) {
        return (
            <div className="d-flex justify-content-center align-items-center min-vh-100">
                <div className="text-center">
                    <LoadingZoom size="lg" />
                    <p className="mt-3">Validating recovery link...</p>
                </div>
            </div>
        );
    }

    return (
        <main className="content-wrapper w-100 px-3 ps-lg-5 pe-lg-4 mx-auto" style={{ maxWidth: "1920px" }}>
            <div className="d-lg-flex">
                <div className="d-flex flex-column min-vh-100 w-100 py-4 mx-auto me-lg-5" style={{ maxWidth: '416px' }}>
                    {/* Logo */}
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
                        <div className="nav">
                            <NavLink className="nav-link fs-base animate-underline p-0" to="/auth/recover-password">
                                <i className="ci-chevron-left fs-lg ms-n1 me-1"></i>
                                <span className="animate-target">Start Over</span>
                            </NavLink>
                        </div>
                    </header>

                    {step === 'verify' ? renderVerificationStep() : renderPasswordResetStep()}

                    <ResponseModal 
                        show={modalState.show} 
                        message={modalState.message} 
                        type={modalState.type} 
                    />

                    {/* Footer */}
                    <footer className="mt-auto">
                        <p className="fs-xs mb-0">
                            © All rights reserved.{' '}
                            <span className="animate-underline">
                                <NavLink 
                                    className="animate-target text-dark-emphasis text-decoration-none" 
                                    to="https://techa.salesnet.ng" 
                                    target="_blank" 
                                    rel="noreferrer"
                                >
                                    Techa - Russian Developers.
                                </NavLink>
                            </span>
                        </p>
                    </footer>
                </div>
                
                {/* Cover image section */}
                <div className="d-none d-lg-block w-100 py-4 ms-auto" style={{ maxWidth: '1034px' }}>
                    <div className="d-flex flex-column justify-content-end h-100 rounded-5 overflow-hidden">
                        <span className="position-absolute top-0 start-0 w-100 h-100 d-none-dark" 
                              style={{ background: 'linear-gradient(-90deg, #accbee 0%, #e7f0fd 100%)' }} />
                        <span className="position-absolute top-0 start-0 w-100 h-100 d-none d-block-dark" 
                              style={{ background: 'linear-gradient(-90deg, #1b273a 0%, #1f2632 100%)' }} />
                        <div className="ratio h-100">
                            <img src="/assets/img/us/pages/on_phone.jpg" alt="Verification" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default VerifyRecoveryCode;