// src/components/auth/OAuthCallbackHandler.tsx
// Component to handle OAuth callback processing

import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import { SocialAuthService } from '../../services/local/SocialAuthService';
import { UsersService } from '../../services/local/UsersService';
import { NotificationService } from '../../services/local/NotificationService';

const OAuthCallbackHandler = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const location = useLocation();
    const [status, setStatus] = useState('processing'); // processing, success, error
    const [message, setMessage] = useState('Processing authentication...');

    useEffect(() => {
        const processCallback = async () => {
            try {
                // Extract parameters from URL
                const code = searchParams.get('code');
                const state = searchParams.get('state');
                const error = searchParams.get('error');
                const errorDescription = searchParams.get('error_description');
                const accessToken = searchParams.get('access_token');
                const refreshToken = searchParams.get('refresh_token');
                const provider = searchParams.get('provider');

                // Handle OAuth errors
                if (error) {
                    throw new Error(errorDescription || `Authentication failed: ${error}`);
                }

                // If we have tokens directly (from successful OAuth flow)
                if (accessToken && refreshToken) {
                    const user = searchParams.get('user');
                    
                    let userData = {
                        access_token: accessToken,
                        refresh_token: refreshToken,
                        success: true
                    };

                    // Parse user data if provided
                    if (user) {
                        try {
                            const parsedUser = JSON.parse(decodeURIComponent(user));
                            console.log(`parsedUser: ${parsedUser}`);
                            userData = { ...userData, ...parsedUser };
                            console.log(`userData: ${userData}`);
                        } catch (parseError) {
                            console.warn('Could not parse user data:', parseError);
                        }
                    }else{
                        
                    }

                    console.log(`userData: ${JSON.stringify(userData)}`);

                    // Authenticate user locally
                    UsersService.authenticate(userData);
                    
                    setStatus('success');
                    setMessage(`${provider || 'Social'} authentication successful! Redirecting...`);
                    
                    NotificationService.showDialog(
                        `Successfully signed in with ${provider || 'social account'}!`, 
                        'success'
                    );

                    // Redirect after a short delay
                    setTimeout(() => {
                        const redirectTo = location.state?.from || '/users/personal';
                        navigate(redirectTo, { replace: true });
                    }, 2000);

                    return;
                }

                // Handle OAuth callback with authorization code
                if (code && state) {
                    const isValidCallback = SocialAuthService.handleCallback(searchParams);
                    
                    if (isValidCallback) {
                        setStatus('success');
                        setMessage('Authentication successful! Please wait...');
                        
                        // The backend should handle the code exchange and redirect
                        // If we reach here, it means the backend process completed
                        setTimeout(() => {
                            // Check if user was authenticated during the process
                            if (UsersService.isAuthenticated()) {
                                const redirectTo = location.state?.from || '/users/personal';
                                navigate(redirectTo, { replace: true });
                            } else {
                                // Fallback - redirect to signin if not authenticated
                                navigate('/auth/signin', { replace: true });
                            }
                        }, 2000);
                    } else {
                        throw new Error('Invalid authentication state');
                    }
                    return;
                }

                // If we don't have expected parameters, this might be an error
                throw new Error('Invalid authentication response');

            } catch (error) {
                console.error('OAuth callback error:', error);
                
                setStatus('error');
                setMessage(error?.message || 'Authentication failed');
                
                NotificationService.showDialog(
                    error?.message || 'Authentication failed. Please try again.',
                    'error'
                );

                // Redirect to signin after error
                setTimeout(() => {
                    navigate('/auth/signin', { replace: true });
                }, 3000);
            }
        };

        processCallback();
    }, [searchParams, navigate, location]);

    return (
        <main className="content-wrapper w-100 px-3 ps-lg-5 pe-lg-4 mx-auto" style={{ maxWidth: "1920px" }}>
            <div className="d-flex justify-content-center align-items-center min-vh-100">
                <div className="text-center">
                    <div className="mb-4">
                        {status === 'processing' && (
                            <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        )}
                        
                        {status === 'success' && (
                            <div className="text-success">
                                <i className="ci-check-circle fs-1"></i>
                            </div>
                        )}
                        
                        {status === 'error' && (
                            <div className="text-danger">
                                <i className="ci-close-circle fs-1"></i>
                            </div>
                        )}
                    </div>
                    
                    <h2 className="h4 mb-3">
                        {status === 'processing' && 'Authenticating...'}
                        {status === 'success' && 'Success!'}
                        {status === 'error' && 'Authentication Failed'}
                    </h2>
                    
                    <p className="text-muted mb-4">{message}</p>
                    
                    {status === 'error' && (
                        <button 
                            className="btn btn-primary"
                            onClick={() => navigate('/auth/signin', { replace: true })}
                        >
                            Back to Sign In
                        </button>
                    )}
                </div>
            </div>
        </main>
    );
};

export default OAuthCallbackHandler;
