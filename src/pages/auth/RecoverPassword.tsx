// import React from "react";
// import Layout from "../partials/Layout";
// import NavigationMenu from "../partials/NavigationMenu";
// import { UsersService } from "../../services/local/UsersService";
// import { UsersAxiosService } from "../../services/net/UsersAxiosService";
// import { NotificationService } from "../../services/local/NotificationService";
// import { Link } from "react-router-dom";

// import { NavLink } from "react-router-dom";
// import AuthForm from "../../components/auth/AuthForm";

// class RecoverPassword extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: '',
//       password: '',
//       message: '',
//       show_message: false,
//       classNameForMessage: '',
//     }
//   }

//   onUserStateUpdate(user) {
//     // TODO: redirect the user
//     console.log('Login::onUserStateUpdate()')
//   }

//   componentWillMount() {
//     UsersService.subscribe(this.onUserStateUpdate.bind(this))
//   }

//   componentWillUnmount() {
//     UsersService.unsubscribe(this.onUserStateUpdate);
//   }

//   onSubmitForm(evt) {
//     UsersAxiosService.login(this.state).then(res => {
//       if (res.data && res.data.success) {
//         this.setState({
//           show_message: true,
//           message: res.data.full_messages && res.data.full_messages.length > 0 ? res.data.full_messages[0] : 'I guess You logged In successfully',
//           classMessage: 'text-success'
//         });
//         res.data.user.token = res.data.token;
//         UsersService.authenticate(res.data.user);
//         NotificationService.showToastSuccess('Logged in successfully');
//         this.props.history.push('/');
//       }
//     }).catch(err => {
//       this.setState({
//         show_message: true,
//         message: err,
//         classMessage: 'text-danger'
//       });
//       NotificationService.showDialogError(err.message);
//     });
//   }

//   onInputChange(key, evt) {
//     this.setState({ [key]: evt.target.value });
//   }

//   render() {
//     return (
//       <main className="content-wrapper w-100 px-3 ps-lg-5 pe-lg-4 mx-auto" style={{ "maxWidth": "1920px" }}>
//         <div className="d-lg-flex">
//           {/* Login form + Footer */}
//           <div className="d-flex flex-column min-vh-100 w-100 py-4 mx-auto me-lg-5" style={{ maxWidth: '416px' }}>
//             {/* Logo */}
//             <header className="navbar px-0 pb-4 mt-n2 mt-sm-0 mb-2 mb-md-3 mb-lg-4">
//               <a className="navbar-brand pt-0" href="/">
//                 <span className="d-flex flex-shrink-0 text-primary rtl-flip me-2">
//                   <div className="flex-shrink-0 border rounded-circle" style={{ width: '32px' }}>
//                     <div className="ratio ratio-1x1 rounded-circle overflow-hidden">
//                       <img src="/assets/img/us/logos/favicon.svg" alt="Avatar" />
//                     </div>
//                   </div>
//                 </span>
//                 Salesnet
//               </a>
//               <div class="nav">
//                 <a class="nav-link fs-base animate-underline p-0" href="/auth/signin">
//                   <i class="ci-chevron-left fs-lg ms-n1 me-1"></i>
//                   <span class="animate-target">Back to Sign In</span>
//                 </a>
//               </div>
//             </header>
//             <h1 className="h2 mt-auto">Forgot password?</h1>
//             <small className="nav fs-sm mb-4 text-warning">
//               Enter any contact detail you used when you joined and we’ll send you instructions to reset your password.
//             </small>
//             {/* Form */}
//             <form className="needs-validation" id="signin_form" action="/auth/signin" method="post" noValidate>

//               <div className="position-relative mb-4">
//                 <input type="username" name="username" className="form-control form-control-lg" placeholder="Email or Username or Phone" required />
//                 <div className="invalid-tooltip bg-transparent py-0">Enter Your Logins any of email-or-username-or-phone!</div>
//               </div>

//               <div className="d-flex align-items-center justify-content-between mb-4">
//                 <div className="form-check me-2">
//                   <input type="checkbox" className="form-check-input" id="remember-30" />
//                   <label htmlFor="remember-30" className="form-check-label">Remember for 30 days</label>
//                 </div>
//               </div>
//               <button type="submit" className="btn btn-lg bg-dark text-white w-100">Recover Password.</button>
//             </form>
//             {/* Divider */}
//             <div className="d-flex align-items-center my-4">
//               <hr className="w-100 m-0" />
//               <span className="text-body-emphasis fw-medium text-nowrap mx-4">or continue with</span>
//               <hr className="w-100 m-0" />
//             </div>
//             {/* Social login */}
//             <div className="d-flex flex-column flex-sm-row gap-3 pb-4 mb-3 mb-lg-4">
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
//             {/* Footer */}
//             <footer className="mt-auto">
//               <p className="fs-xs mb-0">
//                 © All rights reserved. <span className="animate-underline">
//                   <Link className="animate-target text-dark-emphasis text-decoration-none" to="/" target="_blank" rel="noreferrer">
//                   Techa - Russian Developers.</Link></span>
//               </p>
//             </footer>
//           </div>
//           {/* Cover image visible on screens > 992px wide (lg breakpoint) */}
//           <div className="d-none d-lg-block w-100 py-4 ms-auto" style={{ maxWidth: '1034px' }}>
//             <div className="d-flex flex-column justify-content-end h-100 rounded-5 overflow-hidden">
//               <span className="position-absolute top-0 start-0 w-100 h-100 d-none-dark" style={{ background: 'linear-gradient(-90deg, #accbee 0%, #e7f0fd 100%)' }} />
//               <span className="position-absolute top-0 start-0 w-100 h-100 d-none d-block-dark" style={{ background: 'linear-gradient(-90deg, #1b273a 0%, #1f2632 100%)' }} />
//               <div className="ratio position-relative z-2" style={{ '--cz-aspect-ratio': 'calc(1030 / 1032 * 100%)' }}>
//                 <img src="../assets/img/us/pages/7.jpg" alt="Girl" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>

//     );
//   }
// }

// export default RecoverPassword;

// // RecoverPassword.tsx - Updated implementation
// import React from "react";
// import { NavLink } from "react-router-dom";
// import AuthForm from "../../components/auth/AuthForm";

// const RecoverPassword = () => {
//     return (
//         <main className="content-wrapper w-100 px-3 ps-lg-5 pe-lg-4 mx-auto" style={{ maxWidth: "1920px" }}>
//             <div className="d-lg-flex">
//                 <div className="d-flex flex-column min-vh-100 w-100 py-4 mx-auto me-lg-5" style={{ maxWidth: '416px' }}>
//                     <AuthForm 
//                         variant="page"
//                         formType="recover-password"
//                         showSocialAuth={true}
//                         showLogo={true}
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
//                         <span className="position-absolute top-0 start-0 w-100 h-100 d-none-dark" style={{ background: 'linear-gradient(-90deg, #accbee 0%, #e7f0fd 100%)' }} />
//                         <span className="position-absolute top-0 start-0 w-100 h-100 d-none d-block-dark" style={{ background: 'linear-gradient(-90deg, #1b273a 0%, #1f2632 100%)' }} />
//                         <div className="ratio h-100">
//                             <img src="/assets/img/account/white-sofa.png" alt="Recovery" />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </main>
//     );
// };

// export default RecoverPassword;

// // 
// const RecoverPassword = () => {
//     return (
//         <main className="content-wrapper w-100 px-3 ps-lg-5 pe-lg-4 mx-auto" style={{ maxWidth: "1920px" }}>
//             <div className="d-lg-flex">
//                 <div className="d-flex flex-column min-vh-100 w-100 py-4 mx-auto me-lg-5" style={{ maxWidth: '416px' }}>
//                     <AuthForm 
//                         variant="page"
//                         formType="recover-password"
//                         showSocialAuth={true}
//                         showLogo={true}
//                         onSuccess={(data) => {
//                             // Custom handling if needed
//                             console.log('Recovery initiated:', data);
//                         }}
//                     />
                    
//                     <footer className="mt-auto">
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
                
//                 <div className="d-none d-lg-block w-100 py-4 ms-auto" style={{ maxWidth: '1034px' }}>
//                     <div className="d-flex flex-column justify-content-end h-100 rounded-5 overflow-hidden">
//                         <span className="position-absolute top-0 start-0 w-100 h-100 d-none-dark" 
//                               style={{ background: 'linear-gradient(-90deg, #accbee 0%, #e7f0fd 100%)' }} />
//                         <span className="position-absolute top-0 start-0 w-100 h-100 d-none d-block-dark" 
//                               style={{ background: 'linear-gradient(-90deg, #1b273a 0%, #1f2632 100%)' }} />
//                         <div className="ratio h-100">
//                             <img src="/assets/img/us/pages/recover.jpg" alt="Recovery" />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </main>
//     );
// };

// export default RecoverPassword;


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
                        
                        // onSuccess={(data: { data: { token: any; recovery_link: any; }; message: any; }) => {
                        //     // Navigate to verification with token
                        //     navigate('/auth/verify-recovery', { 
                        //         state: { 
                        //             token: data?.data?.token,
                        //             message: data.message,
                        //             recovery_link: data.data.recovery_link
                        //         } 
                        //     });
                        // }}
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

// v2
// Updated Signin.tsx
// import { NavLink } from "react-router-dom";
// import AuthForm from "../../components/auth/AuthForm";

// const RecoverPassword = () => {
//     return (
//         <main className="content-wrapper w-100 px-3 ps-lg-5 pe-lg-4 mx-auto" style={{ maxWidth: "1920px" }}>
//             <div className="d-lg-flex">
//                 <div className="d-flex flex-column min-vh-100 w-100 py-4 mx-auto me-lg-5" style={{ maxWidth: '416px' }}>
//                     <AuthForm 
//                         variant="page"
//                         formType="recoverpassword"
//                         showSocialAuth={true}
//                         showLogo={true}
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
                
//                 {/* Cover image section - keep existing implementation */}
//                 {/* Cover image visible on screens > 992px wide (lg breakpoint) */}
//                     <div className="d-none d-lg-block w-100 py-4 ms-auto" style={{ maxWidth: '1034px' }}>
//                         <div className="d-flex flex-column justify-content-end h-100 rounded-5 overflow-hidden">
//                             <span className="position-absolute top-0 start-0 w-100 h-100 d-none-dark" style={{ background: 'linear-gradient(-90deg, #accbee 0%, #e7f0fd 100%)' }} />
//                             <span className="position-absolute top-0 start-0 w-100 h-100 d-none d-block-dark" style={{ background: 'linear-gradient(-90deg, #1b273a 0%, #1f2632 100%)' }} />
//                             <div className="ratio h-100">
//                                 <img src="/assets/img/us/pages/shopping_bag.jpg" alt="Sales Girl" />
//                             </div>
//                         </div>
//                     </div>

//             </div>
//         </main>
//     );
// };

// export default RecoverPassword;