
// Updated Signup.tsx
import AuthForm from "../../components/auth/AuthForm";
import useSocialAuth from "../../hooks/useSocialAuth";
import { useNavigate } from "react-router-dom";
import { NotificationService } from "../../services/users/NotificationService";

const Signup = () => {
    
    useSocialAuth();
    const navigate = useNavigate();
    
    return (
        <main className="content-wrapper w-100 px-3 ps-lg-5 pe-lg-4 mx-auto" style={{ maxWidth: "1920px" }}>
            <div className="d-lg-flex">
                <div className="d-flex flex-column min-vh-100 w-100 py-4 mx-auto me-lg-5" style={{ maxWidth: '416px' }}>
                   {/*  <AuthForm 
                        variant="page"
                        formType="signup"
                        showSocialAuth={true}
                        showLogo={true}
                        showBenefits={true}
                    /> */}

                   {/*  <AuthForm 
                        variant="page"
                        formType="signup"
                        showSocialAuth={true}
                        showLogo={true}
                        showBenefits={true}
                        onSuccess={(data: any) => {
                            console.log("Signup Success Data:", data);
                            const token = data?.data?.token;
                            const email = data?.data?.email;
                            const phone = data?.data?.phone;

                            if (token && email && phone) {
                                navigate('/auth/verify-signup', {
                                    state: { token, email, phone } 
                                });
                            }
                        }}
                    /> */}

                    {/* <AuthForm 
                    variant="page"
                    formType="signup"
                    showSocialAuth={true}
                    showLogo={true}
                    showBenefits={true}
                    onSuccess={(data: any) => {
                        console.log("Signup Success Data:", data);
                        
                        // Read from root level instead, not data.data
                        const token = data?.token;   
                        const email = data?.email;   
                        const phone = data?.phone;   

                        if (token && email && phone) {
                            navigate('/auth/verify-signup', {
                                state: { token, email, phone } 
                            });
                        } else {
                            console.error("Missing verification data:", { token, email, phone });
                        }
                    }}
                /> */}

                {/* Atleast one of email/phone must be  */}
                <AuthForm 
                    variant="page"
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
                />

                </div>
                
                {/* Benefits section - keep existing implementation */}
                {/* Benefits section that turns into offcanvas on screens < 992px wide (lg breakpoint) */}
                    <div className="offcanvas-lg offcanvas-end w-100 py-lg-4 ms-auto" id="benefits" style={{ maxWidth: '1034px' }}>
                        <div className="offcanvas-header justify-content-end position-relative z-2 p-3">
                            <button type="button" className="btn btn-icon btn-outline-danger text-danger border-dark bg-transparent rounded-circle d-none-danger" data-bs-dismiss="offcanvas" data-bs-target="#benefits" aria-label="Close">
                                <i className="ci-close fs-lg" />
                            </button>
                            <button type="button" className="btn btn-icon btn-outline-dark text-light border-light bg-transparent rounded-circle d-none d-inline-flex-dark" data-bs-dismiss="offcanvas" data-bs-target="#benefits" aria-label="Close">
                                <i className="ci-close fs-lg" />
                            </button>
                        </div>
                        <span className="position-absolute top-0 start-0 w-100 h-100 bg-info-subtle d-lg-none" />
                        <div className="offcanvas-body position-relative z-2 d-lg-flex flex-column align-items-center justify-content-center h-100 pt-2 px-3 p-lg-0">
                            <span className="position-absolute top-0 start-0 w-100 h-100 bg-info-subtle rounded-5 d-none d-lg-block" />
                            <div className="position-relative z-2 w-100 text-center px-md-2 p-lg-5">
                                <h2 className="h4 pb-3">Salesnet account benefits</h2>
                                <div className="mx-auto" style={{ maxWidth: '790px' }}>
                                    <div className="row row-cols-1 row-cols-sm-2 g-3 g-md-4 g-lg-3 g-xl-4">
                                        <div className="col">
                                            <div className="card h-100 bg-transparent border-0">
                                                <span className="position-absolute top-0 start-0 w-100 h-100 bg-white border border-white border-opacity-75 rounded-4 d-none-dark" style={{ aspectRatio: '.3' }} />
                                                <span className="position-absolute top-0 start-0 w-100 h-100 bg-white border rounded-4 d-none d-block-dark" style={{ aspectRatio: '.05' }} />
                                                <div className="card-body position-relative z-2">
                                                    <div className="d-inline-flex position-relative text-info p-3">
                                                        <span className="position-absolute top-0 start-0 w-100 h-100 bg-white rounded-pill d-none-dark" />
                                                        <span className="position-absolute top-0 start-0 w-100 h-100 bg-body-secondary rounded-pill d-none d-block-dark" />
                                                        <i className="fi-mail position-relative z-2 fs-4 m-1" />
                                                    </div>
                                                    <h3 className="h6 pt-2 my-2">Get discount updates</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card h-100 bg-transparent border-0">
                                                <span className="position-absolute top-0 start-0 w-100 h-100 bg-white border border-white border-opacity-75 rounded-4 d-none-dark" style={{ aspectRatio: '.3' }} />
                                                <span className="position-absolute top-0 start-0 w-100 h-100 bg-white border rounded-4 d-none d-block-dark" style={{ aspectRatio: '.05' }} />
                                                <div className="card-body position-relative z-2">
                                                    <div className="d-inline-flex position-relative text-info p-3">
                                                        <span className="position-absolute top-0 start-0 w-100 h-100 bg-white rounded-pill d-none-dark" />
                                                        <span className="position-absolute top-0 start-0 w-100 h-100 bg-body-secondary rounded-pill d-none d-block-dark" />
                                                        <i className="fi-settings position-relative z-2 fs-4 m-1" />
                                                    </div>
                                                    <h3 className="h6 pt-2 my-2">Promotional activities</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card h-100 bg-transparent border-0">
                                                <span className="position-absolute top-0 start-0 w-100 h-100 bg-white border border-white border-opacity-75 rounded-4 d-none-dark" style={{ aspectRatio: '.3' }} />
                                                <span className="position-absolute top-0 start-0 w-100 h-100 bg-white border rounded-4 d-none d-block-dark" style={{ aspectRatio: '.05' }} />
                                                <div className="card-body position-relative z-2">
                                                    <div className="d-inline-flex position-relative text-info p-3">
                                                        <span className="position-absolute top-0 start-0 w-100 h-100 bg-white rounded-pill d-none-dark" />
                                                        <span className="position-absolute top-0 start-0 w-100 h-100 bg-body-secondary rounded-pill d-none d-block-dark" />
                                                        <i className="fi-gift position-relative z-2 fs-4 m-1" />
                                                    </div>
                                                    <h3 className="h6 pt-2 my-2">Subscribe to a service on the go</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card h-100 bg-transparent border-0">
                                                <span className="position-absolute top-0 start-0 w-100 h-100 bg-white border border-white border-opacity-75 rounded-4 d-none-dark" style={{ aspectRatio: '.3' }} />
                                                <span className="position-absolute top-0 start-0 w-100 h-100 bg-white border rounded-4 d-none d-block-dark" style={{ aspectRatio: '.05' }} />
                                                <div className="card-body position-relative z-2">
                                                    <div className="d-inline-flex position-relative text-info p-3">
                                                        <span className="position-absolute top-0 start-0 w-100 h-100 bg-white rounded-pill d-none-dark" />
                                                        <span className="position-absolute top-0 start-0 w-100 h-100 bg-body-secondary rounded-pill d-none d-block-dark" />
                                                        <i className="fi-percent position-relative z-2 fs-4 m-1" />
                                                    </div>
                                                    <h3 className="h6 pt-2 my-2">Sales statistics</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card h-100 bg-transparent border-0">
                                                <span className="position-absolute top-0 start-0 w-100 h-100 bg-white border border-white border-opacity-75 rounded-4 d-none-dark" style={{ aspectRatio: '.3' }} />
                                                <span className="position-absolute top-0 start-0 w-100 h-100 bg-white border rounded-4 d-none d-block-dark" style={{ aspectRatio: '.05' }} />
                                                <div className="card-body position-relative z-2">
                                                    <div className="d-inline-flex position-relative text-info p-3">
                                                        <span className="position-absolute top-0 start-0 w-100 h-100 bg-white rounded-pill d-none-dark" />
                                                        <span className="position-absolute top-0 start-0 w-100 h-100 bg-body-secondary rounded-pill d-none d-block-dark" />
                                                        <i className="fi-heart position-relative z-2 fs-4 m-1" />
                                                    </div>
                                                    <h3 className="h6 pt-2 my-2">Get support as soon as possible</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card h-100 bg-transparent border-0">
                                                <span className="position-absolute top-0 start-0 w-100 h-100 bg-white border border-white border-opacity-75 rounded-4 d-none-dark" style={{ aspectRatio: '.3' }} />
                                                <span className="position-absolute top-0 start-0 w-100 h-100 bg-white border rounded-4 d-none d-block-dark" style={{ aspectRatio: '.05' }} />
                                                <div className="card-body position-relative z-2">
                                                    <div className="d-inline-flex position-relative text-info p-3">
                                                        <span className="position-absolute top-0 start-0 w-100 h-100 bg-white rounded-pill d-none-dark" />
                                                        <span className="position-absolute top-0 start-0 w-100 h-100 bg-body-secondary rounded-pill d-none d-block-dark" />
                                                        <i className="fi-pie-chart position-relative z-2 fs-4 m-1" />
                                                    </div>
                                                    <h3 className="h6 pt-2 my-2">Easy access to services</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
            </div>
        </main>
    );
};

export default Signup;