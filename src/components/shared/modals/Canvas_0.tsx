import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import SearchItems from "./Search/SearchItems";
import Signin from "../../../pages/auth/Signin";
import { useState, useEffect } from "react";
import { NotificationService } from "../../../services/local/NotificationService";
import { UsersService } from "../../../services/local/UsersService";
import { AxiosUsersService } from "../../../services/net/AxiosUsersService";
import ResponseModal from "./ResponseModal";
// import NewArrivals from "../../../pages/home/NewArrivals";

const Canvas = () => {
  return (
    <>
      {/* <Search /> */}
      <Basket />
      <QuickSignin/>
      <QuickSignup/>
      <Installer />
    </>
  )
}

export default Canvas

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
      } else {
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

  return (
    <>
      <div
        className="offcanvas offcanvas-end pb-sm-2 px-sm-2"
        id="quickSignupCanvas"
        tabIndex="-1"
        aria-labelledby="signinLabel"
        style={{ width: '500px' }}
      >
        {/* Header */}
        <div className="offcanvas-header flex-column align-items-start py-3 pt-lg-4">
          <div className="d-flex align-items-center justify-content-between w-100 mb-3 mb-lg-4">
            <NavLink className="navbar-brand d-flex align-items-center" to="/">
              <img src="/assets/img/us/logos/favicon.svg" alt="Logo" className="me-2" style={{ width: '32px', height: '32px' }} />
              <h4 className="offcanvas-title" id="signinLabel">Quick Sign-up to Continue</h4>
            </NavLink>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
        </div>

        {/* Body */}
        <div className="offcanvas-body d-flex flex-column gap-4 pt-2">

              {/* <h2 className="h2 mt-auto">Create an account</h2> */}
              <div className="nav fs-sm mb-3 mb-lg-4">
                I already have an account
                <button className="nav-link badge text-decoration-none rounded-pill p-1 ml-1 text-bg-info" data-bs-toggle="offcanvas" data-bs-target="#quickSigninCanvas" 
                                            aria-controls="signinCanvas" aria-label="Sign in Canvas">Sign in</button>
              </div>
              {/* Form */}
              <form className="needs-validation" id="signup_form" onSubmit={onSubmitForm} noValidate>
                <div className="position-relative mb-4">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input type="text"
                    name="username"
                    value={formData.username}
                    onChange={(evt) => onInputChange('username', evt)}
                    placeholder="enter/choose your username"
                    className="form-control form-control-lg"
                    id="username"
                    required />
                  <div className="invalid-tooltip bg-transparent py-0">Must enter/choose your username!</div>
                </div>
                <div className="position-relative mb-4">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email"
                    name="email"
                    value={formData.email}
                    onChange={(evt) => onInputChange('email', evt)}
                    placeholder="valid email address"
                    className="form-control form-control-lg"
                    id="email"
                    required />
                  <div className="invalid-tooltip bg-transparent py-0">Enter a valid email address!</div>
                </div>
                <div className="position-relative mb-4">
                  <label htmlFor="phone" className="form-label">Phone</label>
                  <input type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={(evt) => onInputChange('phone', evt)}
                    placeholder="active phone number"
                    className="form-control form-control-lg"
                    id="phone"
                    required />
                  <div className="invalid-tooltip bg-transparent py-0">Enter a valid phone number!</div>
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="form-label">Password</label>
                  <div className="password-toggle">
                    <input type="password"
                      name="password"
                      value={formData.password}
                      onChange={(evt) => onInputChange('password', evt)}
                      className="form-control form-control-lg"
                      id="password"
                      minLength={4}
                      placeholder="Minimum 4 characters"
                      required />
                    <div className="invalid-tooltip bg-transparent py-0">Password does not meet the required criteria!</div>
                    <label className="password-toggle-button fs-lg" aria-label="Show/hide password">
                      <input type="checkbox" className="btn-check" />
                    </label>
                  </div>
                </div>
                <div className="d-flex flex-column gap-2 mb-4">
                  <div className="form-check">
                    <input type="checkbox" defaultChecked className="form-check-input" id="privacy" required />
                    <label htmlFor="privacy" className="form-check-label">
                      I have read and accept the <NavLink className="text-dark-emphasis" to="#!"> Privacy Policy</NavLink></label>
                  </div>
                </div>

                <ResponseModal show={modalState.show} message={modalState.message} type={modalState.type} />

                <button type="submit" className={`btn btn-lg bg-dark text-white w-100 ${isLoading ? 'disabled' : ''}`} disabled={isLoading}>
                  {isLoading ? (
                    // <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    <div className="spinner-grow spinner-grow-sm" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>

                  ) : (
                    'Sign up Now.'
                  )}
                </button>
              </form>

              {/* Divider */}
              <div className="d-flex align-items-center my-4">
                <hr className="w-100 m-0" />
                <span className="text-body-emphasis fw-medium text-nowrap mx-4">or continue with</span>
                <hr className="w-100 m-0" />
              </div>
              {/* Social login */}
              <div className="d-flex flex-column flex-sm-row gap-3 pb-4 mb-3 mb-lg-4">
                <button type="button" className="btn btn-lg btn-outline-secondary w-100 px-2">
                  <i className="fi-google ms-1 me-1" />
                  Google
                </button>
                <button type="button" className="btn disabled btn-lg btn-outline-secondary w-100 px-2">
                  <i className="fi-facebook ms-1 me-1" />
                  Facebook
                </button>
                <button type="button" className="btn disabled btn-lg btn-outline-secondary w-100 px-2">
                  <i className="fi-apple ms-1 me-1" />
                  Apple
                </button>
              </div>

            </div>

      </div>
    </>
  );
}


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
        } else {
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

  return (
    <div
      className="offcanvas offcanvas-end pb-sm-2 px-sm-2"
      id="quickSigninCanvas"
      tabIndex="-1"
      aria-labelledby="signinLabel"
      style={{ width: '500px' }}
    >
      {/* Header */}
      <div className="offcanvas-header flex-column align-items-start py-3 pt-lg-4">
        <div className="d-flex align-items-center justify-content-between w-100 mb-3 mb-lg-4">
          <NavLink className="navbar-brand d-flex align-items-center" to="/">
            <img src="/assets/img/us/logos/favicon.svg" alt="Logo" className="me-2" style={{ width: '32px', height: '32px' }} />
            <h4 className="offcanvas-title" id="signinLabel">Quick Sign-in to Continue</h4>
          </NavLink>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
      </div>

      {/* Body */}
      <div className="offcanvas-body d-flex flex-column gap-4 pt-2">
        <h1 className="h2 mt-auto">Welcome back</h1>
                    <div className="nav fs-sm mb-4">
                      Don't have an account?
                      <NavLink className="nav-link text-decoration-underline p-0 ms-2" data-bs-toggle="offcanvas" data-bs-target="#quickSignupCanvas" 
                                            aria-controls="signupCanvas" aria-label="Sign up Canvas">Create an account</NavLink>
                    </div>
        {/* Sign-in Form */}
        <form className="needs-validation" id="signin_form" onSubmit={onSubmitForm} noValidate>
          <div className="position-relative mb-4">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text"
              name="username"
              value={formData.username}
              onChange={(evt) => onInputChange('username', evt)}
              placeholder="Enter your username"
              className="form-control form-control-lg"
              id="username"
              required />
            <div className="invalid-tooltip bg-transparent py-0">Must enter your username!</div>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password"
              name="password"
              value={formData.password}
              onChange={(evt) => onInputChange('password', evt)}
              className="form-control form-control-lg"
              id="password"
              minLength={4}
              placeholder="Minimum 4 characters"
              required />
            <div className="invalid-tooltip bg-transparent py-0">Password does not meet the required criteria!</div>
          </div>

          <ResponseModal show={modalState.show} message={modalState.message} type={modalState.type} />

          <button type="submit" className={`btn btn-lg bg-dark text-white w-100 ${isLoading ? 'disabled' : ''}`} disabled={isLoading}>
            {isLoading ? (
              <div className="spinner-grow spinner-grow-sm" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              'Sign in'
            )}
          </button>
        </form>
                    {/* Divider */}
                    <div className="d-flex align-items-center my-4">
              <hr className="w-100 m-0" />
              <span className="text-body-emphasis fw-medium text-nowrap mx-4">or continue with</span>
              <hr className="w-100 m-0" />
            </div>
        {/*  */}
        <div className="d-flex flex-column flex-sm-row gap-3 pb-4 mb-3 mb-lg-4">
              <button id="google-signin-btn" type="button" className="btn btn-lg btn-outline-secondary w-100 px-2">
                <i className="ci-google ms-1 me-1" />
                Google
              </button>
              <button type="button" disabled className="btn btn-lg btn-outline-secondary w-100 px-2">
                <i className="ci-facebook ms-1 me-1" />
                Facebook
              </button>
              <button type="button" disabled className="btn btn-lg btn-outline-secondary w-100 px-2">
                <i className="ci-apple ms-1 me-1" />
                Apple
              </button>
            </div>
            
      </div>

   

    </div>
  );
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
  return (
    <>
      {/* Empty Basket Offcanvas */}
      <div className="offcanvas offcanvas-end pb-sm-2 px-sm-2 d-none"
        id="shoppingCart_01"
        tabIndex="-1"
        aria-labelledby="shoppingCartLabel"
        style={{ width: '500px' }}
        aria-modal="true"
        role="dialog"
      >
        <div className="offcanvas-header py-3 pt-lg-4">
          <h4 className="offcanvas-title" id="shoppingCartLabel">
            Shopping Basket
          </h4>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body text-center">
          <svg
            className="d-block mx-auto mb-4"
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            viewBox="0 0 29.5 30"
          >
            {/* SVG path */}
          </svg>
          <h6 className="mb-2">Your shopping basket is currently empty!</h6>
          <p className="fs-sm mb-4">Add item(s) to the cart to proceed with your purchase.</p>
          <button
            type="button"
            className="btn btn-dark rounded-pill"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            Continue shopping
          </button>
        </div>
      </div>

      {/* Shopping cart offcanvas */}
      <div
        className="offcanvas offcanvas-end pb-sm-2 px-sm-2"
        id="shoppingCart"
        tabIndex="-1"
        aria-labelledby="shoppingCartLabel"
        style={{ width: '500px' }}
      >
        {/* Header */}
        <div className="offcanvas-header flex-column align-items-start py-3 pt-lg-4">
          <div className="d-flex align-items-center justify-content-between w-100 mb-3 mb-lg-4">
            <h4 className="offcanvas-title" id="shoppingCartLabel">
              Basket
            </h4>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>

          <div className="alert alert-success text-dark-emphasis fs-sm border-0 rounded-4 mb-0" role="alert">
              Congratulations 🎉 You have added more than <span className="fw-semibold">$50</span> to your cart. 
              <span className="fw-semibold">Delivery is free</span> for you!
          </div>

          <p className="fs-sm">
            Buy <span className="text-dark-emphasis fw-semibold">$183</span> more to get{' '}
            <span className="text-dark-emphasis fw-semibold">Free Shipping</span>
          </p>
          <div
            className="progress w-100"
            role="progressbar"
            aria-label="Free shipping progress"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ height: '4px' }}
          >
            <div className="progress-bar bg-warning rounded-pill" style={{ width: '75%' }}></div>
          </div>
        </div>
        {/* Items */}
        <div className="offcanvas-body d-flex flex-column gap-4 pt-2">
          {/* Item */}
          <div className="d-flex align-items-center">
            <a className="flex-shrink-0" href="/products/techa-products-slug">
              <img src="/assets/img/shop/electronics/thumbs/08.png" width="110" alt="iPhone 14" />
            </a>
            <div className="w-100 min-w-0 ps-2 ps-sm-3">
              <h5 className="d-flex animate-underline mb-2">
                <a
                  className="d-block fs-sm fw-medium text-truncate animate-target"
                  href="/products/techa-products-slug"
                >
                  Apple iPhone 14 128GB White
                </a>
              </h5>
              <div className="h6 pb-1 mb-2">$899.00</div>
              <div className="d-flex align-items-center justify-content-between">
                <div className="count-input rounded-2">
                  <button
                    type="button"
                    className="btn btn-icon btn-sm"
                    data-decrement=""
                    aria-label="Decrement quantity"
                  >
                    <i className="ci-minus"></i>
                  </button>
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    value="1"
                    readOnly
                  />
                  <button
                    type="button"
                    className="btn btn-icon btn-sm"
                    data-increment=""
                    aria-label="Increment quantity"
                  >
                    <i className="ci-plus"></i>
                  </button>
                </div>
                <button
                  type="button"
                  className="btn-close fs-sm"
                  data-bs-toggle="tooltip"
                  data-bs-custom-class="tooltip-sm"
                  data-bs-title="Remove"
                  aria-label="Remove from cart"
                ></button>
              </div>
            </div>
          </div>
          {/* Item */}
          <div className="d-flex align-items-center">
            <a className="flex-shrink-0" href="/products/techa-products-slug">
              <img src="/assets/img/shop/electronics/thumbs/08.png" width="110" alt="iPhone 14" />
            </a>
            <div className="w-100 min-w-0 ps-2 ps-sm-3">
              <h5 className="d-flex animate-underline mb-2">
                <a
                  className="d-block fs-sm fw-medium text-truncate animate-target"
                  href="/products/techa-products-slug"
                >
                  Apple iPhone 14 128GB White
                </a>
              </h5>
              <div className="h6 pb-1 mb-2">$899.00</div>
              <div className="d-flex align-items-center justify-content-between">
                <div className="count-input rounded-2">
                  <button
                    type="button"
                    className="btn btn-icon btn-sm"
                    data-decrement=""
                    aria-label="Decrement quantity"
                  >
                    <i className="ci-minus"></i>
                  </button>
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    value="1"
                    readOnly
                  />
                  <button
                    type="button"
                    className="btn btn-icon btn-sm"
                    data-increment=""
                    aria-label="Increment quantity"
                  >
                    <i className="ci-plus"></i>
                  </button>
                </div>
                <button
                  type="button"
                  className="btn-close fs-sm"
                  data-bs-toggle="tooltip"
                  data-bs-custom-class="tooltip-sm"
                  data-bs-title="Remove"
                  aria-label="Remove from cart"
                ></button>
              </div>
            </div>
          </div>
          {/* Additional items */}
        </div>
        {/* Footer */}
        <div className="offcanvas-header flex-column align-items-start">
          <div className="d-flex align-items-center justify-content-between w-100 mb-3 mb-md-4">
            <span className="text-light-emphasis">Subtotal:</span>
            <span className="h6 mb-0">$2,317.00</span>
          </div>
          <div className="d-flex w-100 gap-3">
            <NavLink className="btn btn-lg btn-secondary w-100" to='/user/basket'>
              View cart
            </NavLink>
            <Link className="btn btn-lg btn-primary w-100" to="/user/checkout">
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

const Installer = () => {
  return (
    <div className="offcanvas offcanvas-bottom" id="offcanvasBottom" tabIndex="-1" aria-labelledby="offcanvasBottomLabel">
      <div className="offcanvas-header border-bottom">
        <h5 className="offcanvas-title" id="offcanvasBottomLabel">
          <a className="navbar-brand pt-0" href="/">
            <span className="d-flex flex-shrink-0 text-primary rtl-flip me-2">
              <div className="flex-shrink-0 border rounded-circle" style={{ width: '40px' }}>
                <div className="ratio ratio-1x1 rounded-circle overflow-hidden">
                  <img src="/assets/img/us/logos/favicon.svg" alt="Avatar" />
                </div>
              </div>
            </span>
            Salesnet
          </a>
        </h5>
        <button className="btn-close" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body d-flex flex-column align-items-center justify-content-center text-center">
        <p className='lead'>Install Salesnet - Internet of sales - Sell like crazy charm.</p>
        <div className="d-flex flex-column align-items-center gap-3 pb-4 mb-3 mb-lg-4">
          <button id="install" type="button" className="btn btn-dark rounded w-100 px-3 py-2 btn-lg btn-info rounded-pill" style={{ maxWidth: '250px', fontSize: '1rem' }} >
            {/* <i className="ci-arrow-down-circle ms-2 me-2"></i> Click to install. */}
            <i className="ci-download ms-2 me-2"></i>Add to Home Screen
          </button>
        </div>
      </div>
    </div>
  );
};
