
// Updated RecoverPassword.tsx with proper callback handling

import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
// import AuthForm from '../components/auth/AuthForm';
import AuthForm from "../../components/auth/AuthForm";
const RecoverPassword = () => {
    const navigate = useNavigate();
    
    return (
        <main className="content-wrapper w-100 px-3 ps-lg-5 pe-lg-4 mx-auto" style={{ maxWidth: "1920px" }}>
            <div className="d-lg-flex">
                <div className="d-flex flex-column min-vh-100 w-100 py-4 mx-auto me-lg-5" style={{ maxWidth: '416px' }}>
                    <AuthForm 
                        variant="page"
                        formType="recover-password"
                        showSocialAuth={true}
                        showLogo={true}

                    onSuccess={(data: any) => {
                    const token = data?.data?.token;
                    const recoveryLink = data?.data?.recovery_link;
                    const message = data?.message;

                    if (!token || !recoveryLink) {
                        console.error("Recovery data missing:", data);
                        // Optionally show an error alert here
                        return;
                    }

                    navigate('/auth/verify-recovery', { 
                        state: { 
                        token,
                        message,
                        recovery_link: recoveryLink
                        } 
                    });
                    }}

                    />
                    
                    <footer className="mt-auto">
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
                
                <div className="d-none d-lg-block w-100 py-4 ms-auto" style={{ maxWidth: '1034px' }}>
                    <div className="d-flex flex-column justify-content-end h-100 rounded-5 overflow-hidden">
                        <span className="position-absolute top-0 start-0 w-100 h-100 d-none-dark" 
                              style={{ background: 'linear-gradient(-90deg, #accbee 0%, #e7f0fd 100%)' }} />
                        <span className="position-absolute top-0 start-0 w-100 h-100 d-none d-block-dark" 
                              style={{ background: 'linear-gradient(-90deg, #1b273a 0%, #1f2632 100%)' }} />
                        <div className="ratio h-100">
                            <img src="/assets/img/us/pages/delivery_walk.jpg" alt="Recovery" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default RecoverPassword;
