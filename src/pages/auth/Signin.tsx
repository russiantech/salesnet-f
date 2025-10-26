
// Updated Signin.tsx
import { NavLink } from "react-router-dom";
import AuthForm from "../../components/auth/AuthForm";
import { UsersService } from "../../services/local/UsersService";

const Signin = () => {
    return (
        <main className="content-wrapper w-100 px-3 ps-lg-5 pe-lg-4 mx-auto" style={{ maxWidth: "1920px" }}>
            <div className="d-lg-flex">
                <div className="d-flex flex-column min-vh-100 w-100 py-4 mx-auto me-lg-5" style={{ maxWidth: '416px' }}>
                    {/* <AuthForm 
                        variant="page"
                        formType="signin"
                        showSocialAuth={true}
                        showLogo={true}
                    /> */}

                    <AuthForm 
                    variant="page"
                    formType="signin"
                    showSocialAuth={true}
                    showLogo={true}
                    onSuccess={(data) => {
                        const userData = {
                        ...data,
                        access_token: data.access_token,
                        refresh_token: data.refresh_token,
                        };

                        UsersService.authenticate(userData);
                    }}
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
                
                {/* Cover image section - keep existing implementation */}
                {/* Cover image visible on screens > 992px wide (lg breakpoint) */}
                    <div className="d-none d-lg-block w-100 py-4 ms-auto" style={{ maxWidth: '1034px' }}>
                        <div className="d-flex flex-column justify-content-end h-100 rounded-5 overflow-hidden">
                            <span className="position-absolute top-0 start-0 w-100 h-100 d-none-dark" style={{ background: 'linear-gradient(-90deg, #accbee 0%, #e7f0fd 100%)' }} />
                            <span className="position-absolute top-0 start-0 w-100 h-100 d-none d-block-dark" style={{ background: 'linear-gradient(-90deg, #1b273a 0%, #1f2632 100%)' }} />
                            <div className="ratio h-100">
                                <img src="/assets/img/us/pages/sofa.png" alt="Sales Girl" />
                            </div>
                        </div>
                    </div>

            </div>
        </main>
    );
};

export default Signin;