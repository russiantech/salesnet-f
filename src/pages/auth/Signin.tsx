import { AxiosUsersService } from "../../services/net/AxiosUsersService";
import { NotificationService } from "../../services/local/NotificationService";
import ResponseModal from "../../components/shared/modals/ResponseModal";
import { NavLink, useNavigate, useHref, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { UsersService } from "../../services/local/UsersService";

const Signin = () => {
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

    // const onSubmitForm = (evt) => {
    //     evt.preventDefault();
    //     setIsLoading(true);

    //     NotificationService.showDialog("Submitting form...", "primary");

    //     if (!formData.username || !formData.password) {
    //         NotificationService.showDialog("Must provide both username and password.", "danger");
    //         setIsLoading(false);
    //         return;
    //     }

    //     AxiosUsersService.signin(formData).then(res => {

    //         const message = res.data.data.full_messages && res.data.data.full_messages.length > 0
    //             ? res.data.data.full_messages[0]
    //             : res.data.data.message || res.data.data.error;

    //         if (res.data.data.&& res.data.data.success) {
              
    //             // res.data.data.user.access_token = res.data.data.access_token;
    //             // res.data.data.user.refresh_token = res.data.data.refresh_token;

    //             UsersService.authenticate(res.data.data.user);

    //             NotificationService.showDialog(message || 'Successfully logged in', 'success');
    //             // navigate('/user/personal'); 
    //         } else {
    //             NotificationService.showDialog(message || 'Unknown error occurred', 'error');
    //         }
    //     }).catch(err => {
    //         const errorMessage = err.response?.data?.error || err.message || 'An unknown error occurred';
    //         NotificationService.showDialog(errorMessage, 'error');
    //     }).finally(() => {
    //         setIsLoading(false);
    //     });
    // };

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
            // console.log(res);
              if (!res.data) {
                  throw new Error('No response data received');
              }
  
              const message = res.data.full_messages?.[0] || res.data.message || res.data.error || 'Login successful';
              
              if (res.data.success) {
                  // Create user object with tokens
                  const user = res.data;
                  console.log(`user is: ${user}`)
                  const user_data = {
                      ...user,  // If user data comes nested
                      access_token: user.access_token,
                      refresh_token: user.refresh_token
                  };


                  UsersService.authenticate(user_data);
                  
                  NotificationService.showDialog(message, 'success');
                  // navigate('/user/personal');
                  // Redirect to referrer or default to '/user/personal'
                  // const referrer = document.referrer || '/user/personal';
                  navigate(from, { replace: true });
                  
              } else {
                  NotificationService.showDialog(message, 'error');
              }
          })
          .catch(err => {
              const errorMessage = err.response?.data?.error || err.message || 'An unknown error occurred';
              console.log(err);
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
        <> 
      <main className="content-wrapper w-100 px-3 ps-lg-5 pe-lg-4 mx-auto" style={{ "maxWidth": "1920px" }}>
        <div className="d-lg-flex">
          {/* Login form + Footer */}
          <div className="d-flex flex-column min-vh-100 w-100 py-4 mx-auto me-lg-5" style={{ maxWidth: '416px' }}>
            {/* Logo */}
            <header className="navbar px-0 pb-4 mt-n2 mt-sm-0 mb-2 mb-md-3 mb-lg-4">
              <NavLink className="navbar-brand pt-0" to="/">
                <span className="d-flex flex-shrink-0 text-primary rtl-flip me-2">
                  <div className="flex-shrink-0 border rounded-circle" style={{ width: '32px' }}>
                    <div className="ratio ratio-1x1 rounded-circle overflow-hidden">
                      <img src="/assets/img/us/logos/favicon.svg" alt="Avatar" />
                    </div>
                  </div>
                </span>
                Salesnet
              </NavLink>
            </header>
            <h1 className="h2 mt-auto">Welcome back</h1>
            <div className="nav fs-sm mb-4">
              Don't have an account?
              <NavLink className="nav-link text-decoration-underline p-0 ms-2" to="/auth/signup">Create an account</NavLink>
            </div>
            {/* Form */}
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
            {/* Social login */}
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
            {/* Footer */}
            <footer className="mt-auto">
              <p className="fs-xs mb-0">
                © All rights reserved. <span className="animate-underline">
                  <NavLink className="animate-target text-dark-emphasis text-decoration-none" to="https://techa.onrender.com" target="_blank" rel="noreferrer">Techa - Russian Developers.</NavLink></span>
              </p>
            </footer>
          </div>
          {/* Cover image visible on screens > 992px wide (lg breakpoint) */}
          <div className="d-none d-lg-block w-100 py-4 ms-auto" style={{ maxWidth: '1034px' }}>
            <div className="d-flex flex-column justify-content-end h-100 rounded-5 overflow-hidden">
              <span className="position-absolute top-0 start-0 w-100 h-100 d-none-dark" style={{ background: 'linear-gradient(-90deg, #accbee 0%, #e7f0fd 100%)' }} />
              <span className="position-absolute top-0 start-0 w-100 h-100 d-none d-block-dark" style={{ background: 'linear-gradient(-90deg, #1b273a 0%, #1f2632 100%)' }} />
              <div className="ratio h-100" style={{ '--cz-aspect-ratio': 'calc(1030 / 1032 * 100%)' }}>
                <img src="/assets/img/us/pages/7.jpg" alt="Girl" />
              </div>
            </div>
          </div>
        </div>
      </main>
      </>
    );
}

export default Signin;
