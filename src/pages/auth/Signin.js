import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { AxiosUsersService } from "../../services/net/AxiosUsersService";
import { NotificationService } from "../../services/local/NotificationService";
import ResponseModal from "../../components/shared/modals/ResponseModal";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
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
            // if (res.data.success && res.data.user) {
            if (res.data.success) {
                // re-authenticate only if logged in again, so it won't update the user info.
                if (res.data.access_token) {
                    // Create user object with tokens
                    const user = res.data;
                    console.log(`user is: ${JSON.stringify(user)}`);
                    const user_data = {
                        ...user, // If user data comes nested
                        access_token: user.access_token,
                        refresh_token: user.refresh_token
                    };
                    console.log(`user_data: ${JSON.stringify(user_data)}`);
                    UsersService.authenticate(user_data);
                    NotificationService.showDialog(message, 'success');
                }
                // navigate('/user/personal');
                // Redirect to referrer or default to '/user/personal'
                // const referrer = document.referrer || '/user/personal';
                navigate(from, { replace: true });
            }
            else {
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
    return (_jsx(_Fragment, { children: _jsx("main", { className: "content-wrapper w-100 px-3 ps-lg-5 pe-lg-4 mx-auto", style: { "maxWidth": "1920px" }, children: _jsxs("div", { className: "d-lg-flex", children: [_jsxs("div", { className: "d-flex flex-column min-vh-100 w-100 py-4 mx-auto me-lg-5", style: { maxWidth: '416px' }, children: [_jsx("header", { className: "navbar px-0 pb-4 mt-n2 mt-sm-0 mb-2 mb-md-3 mb-lg-4", children: _jsxs(NavLink, { className: "navbar-brand pt-0", to: "/", children: [_jsx("span", { className: "d-flex flex-shrink-0 text-primary rtl-flip me-2", children: _jsx("div", { className: "flex-shrink-0 border rounded-circle", style: { width: '32px' }, children: _jsx("div", { className: "ratio ratio-1x1 rounded-circle overflow-hidden", children: _jsx("img", { src: "/assets/img/us/logos/favicon.svg", alt: "Avatar" }) }) }) }), "Salesnet"] }) }), _jsx("h1", { className: "h2 mt-auto", children: "Welcome back" }), _jsxs("div", { className: "nav fs-sm mb-4", children: ["Don't have an account?", _jsx(NavLink, { className: "nav-link text-decoration-underline p-0 ms-2", to: "/auth/signup", children: "Create an account" })] }), _jsxs("form", { className: "needs-validation", id: "signin_form", onSubmit: onSubmitForm, noValidate: true, children: [_jsxs("div", { className: "position-relative mb-4", children: [_jsx("label", { htmlFor: "username", className: "form-label", children: "Username" }), _jsx("input", { type: "text", name: "username", value: formData.username, onChange: (evt) => onInputChange('username', evt), placeholder: "Enter your username", className: "form-control form-control-lg", id: "username", required: true }), _jsx("div", { className: "invalid-tooltip bg-transparent py-0", children: "Must enter your username!" })] }), _jsxs("div", { className: "mb-4", children: [_jsx("label", { htmlFor: "password", className: "form-label", children: "Password" }), _jsxs("div", { className: "password-toggle", children: [_jsx("input", { type: "password", name: "password", value: formData.password, onChange: (evt) => onInputChange('password', evt), className: "form-control form-control-lg", id: "password", minLength: 4, placeholder: "Minimum 4 characters", required: true }), _jsx("div", { className: "invalid-tooltip bg-transparent py-0", children: "Password does not meet the required criteria!" }), _jsx("label", { className: "password-toggle-button fs-lg", "aria-label": "Show/hide password", children: _jsx("input", { type: "checkbox", className: "btn-check" }) })] })] }), _jsx(ResponseModal, { show: modalState.show, message: modalState.message, type: modalState.type }), _jsx("button", { type: "submit", className: `btn btn-lg bg-dark text-white w-100 ${isLoading ? 'disabled' : ''}`, disabled: isLoading, children: isLoading ? (_jsx("div", { className: "spinner-grow spinner-grow-sm", role: "status", children: _jsx("span", { className: "visually-hidden", children: "Loading..." }) })) : ('Sign in') })] }), _jsxs("div", { className: "d-flex align-items-center my-4", children: [_jsx("hr", { className: "w-100 m-0" }), _jsx("span", { className: "text-body-emphasis fw-medium text-nowrap mx-4", children: "or continue with" }), _jsx("hr", { className: "w-100 m-0" })] }), _jsxs("div", { className: "d-flex flex-column flex-sm-row gap-3 pb-4 mb-3 mb-lg-4", children: [_jsxs("button", { id: "google-signin-btn", type: "button", className: "btn btn-lg btn-outline-secondary w-100 px-2", children: [_jsx("i", { className: "ci-google ms-1 me-1" }), "Google"] }), _jsxs("button", { type: "button", disabled: true, className: "btn btn-lg btn-outline-secondary w-100 px-2", children: [_jsx("i", { className: "ci-facebook ms-1 me-1" }), "Facebook"] }), _jsxs("button", { type: "button", disabled: true, className: "btn btn-lg btn-outline-secondary w-100 px-2", children: [_jsx("i", { className: "ci-apple ms-1 me-1" }), "Apple"] })] }), _jsx("footer", { className: "mt-auto", children: _jsxs("p", { className: "fs-xs mb-0", children: ["\u00A9 All rights reserved. ", _jsx("span", { className: "animate-underline", children: _jsx(NavLink, { className: "animate-target text-dark-emphasis text-decoration-none", to: "https://techa.onrender.com", target: "_blank", rel: "noreferrer", children: "Techa - Russian Developers." }) })] }) })] }), _jsx("div", { className: "d-none d-lg-block w-100 py-4 ms-auto", style: { maxWidth: '1034px' }, children: _jsxs("div", { className: "d-flex flex-column justify-content-end h-100 rounded-5 overflow-hidden", children: [_jsx("span", { className: "position-absolute top-0 start-0 w-100 h-100 d-none-dark", style: { background: 'linear-gradient(-90deg, #accbee 0%, #e7f0fd 100%)' } }), _jsx("span", { className: "position-absolute top-0 start-0 w-100 h-100 d-none d-block-dark", style: { background: 'linear-gradient(-90deg, #1b273a 0%, #1f2632 100%)' } }), _jsx("div", { className: "ratio h-100", style: { '--cz-aspect-ratio': 'calc(1030 / 1032 * 100%)' }, children: _jsx("img", { src: "/assets/img/us/pages/7.jpg", alt: "Girl" }) })] }) })] }) }) }));
};
export default Signin;
