import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { UsersService } from "../../services/local/UsersService";
import { AxiosUsersService } from "../../services/net/AxiosUsersService";
import { NotificationService } from "../../services/local/NotificationService";
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
        };
    }
    onUserStateUpdate(user) {
        // TODO: redirect the user
        console.log('Login::onUserStateUpdate()');
    }
    componentWillMount() {
        UsersService.subscribe(this.onUserStateUpdate.bind(this));
    }
    componentWillUnmount() {
        UsersService.unsubscribe(this.onUserStateUpdate);
    }
    onSubmitForm(evt) {
        AxiosUsersService.signin(this.state).then(res => {
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
        this.setState({ [key]: evt.target.value });
    }
    render() {
        return (_jsx("main", { className: "content-wrapper w-100 px-3 ps-lg-5 pe-lg-4 mx-auto", style: { "maxWidth": "1920px" }, children: _jsxs("div", { className: "d-lg-flex", children: [_jsxs("div", { className: "d-flex flex-column min-vh-100 w-100 py-4 mx-auto me-lg-5", style: { maxWidth: '416px' }, children: [_jsx("header", { className: "navbar px-0 pb-4 mt-n2 mt-sm-0 mb-2 mb-md-3 mb-lg-4", children: _jsxs(NavLink, { className: "navbar-brand pt-0", to: "/", children: [_jsx("span", { className: "d-flex flex-shrink-0 text-primary rtl-flip me-2", children: _jsx("div", { className: "flex-shrink-0 border rounded-circle", style: { width: '32px' }, children: _jsx("div", { className: "ratio ratio-1x1 rounded-circle overflow-hidden", children: _jsx("img", { src: "/assets/img/us/logos/favicon.svg", alt: "Avatar" }) }) }) }), "Salesnet"] }) }), _jsx("h1", { className: "h2 mt-auto", children: "Welcome back" }), _jsxs("div", { className: "nav fs-sm mb-4", children: ["Don't have an account?", _jsx(NavLink, { className: "nav-link text-decoration-underline p-0 ms-2", to: "/auth/signup", children: "Create an account" })] }), _jsxs("form", { className: "needs-validation", id: "signin_form", action: "/user/personal", method: "post", noValidate: true, children: [_jsxs("div", { className: "position-relative mb-4", children: [_jsx("input", { type: "username", name: "username", className: "form-control form-control-lg", placeholder: "Email or Username or Phone", required: true }), _jsx("div", { className: "invalid-tooltip bg-transparent py-0", children: "use email or username or phone!" })] }), _jsx("div", { className: "mb-4", children: _jsxs("div", { className: "password-toggle", children: [_jsx("input", { type: "password", name: "password", className: "form-control form-control-lg", placeholder: "Password", required: true }), _jsx("div", { className: "invalid-tooltip bg-transparent py-0", children: "Password is incorrect!" }), _jsx("label", { className: "password-toggle-button fs-lg", "aria-label": "Show/hide password", children: _jsx("input", { type: "checkbox", className: "btn-check" }) })] }) }), _jsxs("div", { className: "d-flex align-items-center justify-content-between mb-4", children: [_jsxs("div", { className: "form-check me-2", children: [_jsx("input", { type: "checkbox", className: "form-check-input", id: "remember" }), _jsx("label", { htmlFor: "remember", className: "form-check-label", children: "Remember for 30 days" })] }), _jsx("div", { className: "nav", children: _jsx(NavLink, { className: "nav-link animate-underline p-0", to: "/auth/recover-password", children: _jsx("span", { className: "animate-target", children: "Forgot password?" }) }) })] }), _jsx("button", { type: "submit", className: "btn btn-lg bg-dark text-white w-100", children: "Sign me into Salesnet." })] }), _jsxs("div", { className: "d-flex align-items-center my-4", children: [_jsx("hr", { className: "w-100 m-0" }), _jsx("span", { className: "text-body-emphasis fw-medium text-nowrap mx-4", children: "or continue with" }), _jsx("hr", { className: "w-100 m-0" })] }), _jsxs("div", { className: "d-flex flex-column flex-sm-row gap-3 pb-4 mb-3 mb-lg-4", children: [_jsxs("button", { id: "google-signin-btn", type: "button", className: "btn btn-lg btn-outline-secondary w-100 px-2", children: [_jsx("i", { className: "ci-google ms-1 me-1" }), "Google"] }), _jsxs("button", { type: "button", disabled: true, className: "btn btn-lg btn-outline-secondary w-100 px-2", children: [_jsx("i", { className: "ci-facebook ms-1 me-1" }), "Facebook"] }), _jsxs("button", { type: "button", disabled: true, className: "btn btn-lg btn-outline-secondary w-100 px-2", children: [_jsx("i", { className: "ci-apple ms-1 me-1" }), "Apple"] })] }), _jsx("footer", { className: "mt-auto", children: _jsxs("p", { className: "fs-xs mb-0", children: ["\u00A9 All rights reserved. ", _jsx("span", { className: "animate-underline", children: _jsx(NavLink, { className: "animate-target text-dark-emphasis text-decoration-none", to: "https://techa.onrender.com", target: "_blank", rel: "noreferrer", children: "Techa - Russian Developers." }) })] }) })] }), _jsx("div", { className: "d-none d-lg-block w-100 py-4 ms-auto", style: { maxWidth: '1034px' }, children: _jsxs("div", { className: "d-flex flex-column justify-content-end h-100 rounded-5 overflow-hidden", children: [_jsx("span", { className: "position-absolute top-0 start-0 w-100 h-100 d-none-dark", style: { background: 'linear-gradient(-90deg, #accbee 0%, #e7f0fd 100%)' } }), _jsx("span", { className: "position-absolute top-0 start-0 w-100 h-100 d-none d-block-dark", style: { background: 'linear-gradient(-90deg, #1b273a 0%, #1f2632 100%)' } }), _jsx("div", { className: "ratio position-relative z-2", style: { '--cz-aspect-ratio': 'calc(1030 / 1032 * 100%)' }, children: _jsx("img", { src: "/assets/img/us/pages/7.jpg", alt: "Girl" }) })] }) })] }) }));
    }
}
export default Signin;
