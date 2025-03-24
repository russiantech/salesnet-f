import React from "react";
import Layout from "../partials/Layout";
import NavigationMenu from "../partials/NavigationMenu";
import {UsersService} from "../../services/local/UsersService";
import {AxiosUsersService} from "../../services/net/AxiosUsersService";
import {NotificationService} from "../../services/local/NotificationService";
import { NavLink } from "react-router-dom";

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            message: '',
            show_message: false,
            classNameForMessage: '',
        }
    }

    onUserStateUpdate(user) {
        // TODO: redirect the user
        console.log('Login::onUserStateUpdate()')
    }

    componentWillMount() {
        UsersService.subscribe(this.onUserStateUpdate.bind(this))
    }

    componentWillUnmount() {
        UsersService.unsubscribe(this.onUserStateUpdate);
    }

    onSubmitForm(evt) {
        AxiosUsersService.login(this.state).then(res => {
            if (res.data && res.data.success) {
                this.setState({
                    show_message: true,
                    message: res.data.full_messages && res.data.full_messages.length > 0 ? res.data.full_messages[0] : 'I guess You logged In successfully',
                    classMessage: 'text-success'
                });
                res.data.user.token = res.data.token;
                UsersService.authenticate(res.data.user);
                NotificationService.showToastSuccess('Logged in successfully');
                this.props.history.push('/');
            }
        }).catch(err => {
            this.setState({
                show_message: true,
                message: err,
                classMessage: 'text-danger'
            });
            NotificationService.showDialogError(err.message);
        });
    }

    onInputChange(key, evt) {
        this.setState({[key]: evt.target.value});
    }

    render() {
        return (
          <main className="content-wrapper w-100 px-3 ps-lg-5 pe-lg-4 mx-auto" style={{"maxWidth": "1920px"}}>    
            <div className="d-lg-flex">
        {/* Login form + Footer */}
        <div className="d-flex flex-column min-vh-100 w-100 py-4 mx-auto me-lg-5" style={{maxWidth: '416px'}}>
          {/* Logo */}
          <header className="navbar px-0 pb-4 mt-n2 mt-sm-0 mb-2 mb-md-3 mb-lg-4">
            <NavLink className="navbar-brand pt-0" to="/">
              <span className="d-flex flex-shrink-0 text-primary rtl-flip me-2">
                <div className="flex-shrink-0 border rounded-circle" style={{width: '32px'}}>
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
          <form className="needs-validation" id="signin_form" action="/user/personal" method="post" noValidate>
            <div className="position-relative mb-4">
              <input type="username" name="username" className="form-control form-control-lg" placeholder="Email or Username or Phone" required />
              <div className="invalid-tooltip bg-transparent py-0">use email or username or phone!</div>
            </div>
            <div className="mb-4">
              <div className="password-toggle">
                <input type="password" name="password" className="form-control form-control-lg" placeholder="Password" required />
                <div className="invalid-tooltip bg-transparent py-0">Password is incorrect!</div>
                <label className="password-toggle-button fs-lg" aria-label="Show/hide password">
                  <input type="checkbox" className="btn-check" />
                </label>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-4">
              <div className="form-check me-2">
                <input type="checkbox" className="form-check-input" id="remember-30" />
                <label htmlFor="remember-30" className="form-check-label">Remember for 30 days</label>
              </div>
              <div className="nav">
                <NavLink className="nav-link animate-underline p-0" to="/auth/recover-password">
                  <span className="animate-target">Forgot password?</span>
                </NavLink>
              </div>
            </div>
            <button type="submit" className="btn btn-lg bg-dark text-white w-100">Sign me into Salesnet.</button>
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
        <div className="d-none d-lg-block w-100 py-4 ms-auto" style={{maxWidth: '1034px'}}>
          <div className="d-flex flex-column justify-content-end h-100 rounded-5 overflow-hidden">
            <span className="position-absolute top-0 start-0 w-100 h-100 d-none-dark" style={{background: 'linear-gradient(-90deg, #accbee 0%, #e7f0fd 100%)'}} />
            <span className="position-absolute top-0 start-0 w-100 h-100 d-none d-block-dark" style={{background: 'linear-gradient(-90deg, #1b273a 0%, #1f2632 100%)'}} />
            <div className="ratio position-relative z-2" style={{'--cz-aspect-ratio': 'calc(1030 / 1032 * 100%)'}}>
              <img src="/assets/img/us/pages/7.jpg" alt="Girl" />
            </div>
          </div>
        </div>
      </div>
      </main>

        );
    }
}

export default Signin;
