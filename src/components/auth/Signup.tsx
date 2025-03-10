import React from "react";
import Layout from "../partials/Layout";
import NavigationMenu from "../partials/NavigationMenu";
import { UsersService } from "../../services/local/UsersService";
import { AxiosUsersService } from "../../services/net/AxiosUsersService";
import { NotificationService } from "../../services/local/NotificationService";


class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            password: '',
            password_confirmation: '',
            message: '',
            classMessage: 'text-info',
            show_message: false,
        }
    }

    onSubmitForm(evt) {
        // Validate that all required fields are filled
        if (!this.state.phone) {
            NotificationService.showDialogError("Phone number is required.");
            return;
        }

        AxiosUsersService.create(this.state).then(res => {
            // console.log("response", res);
            alert(JSON.stringify(res))
            const message = res.data.full_messages
                && res.data.full_messages.length > 0 ? res.data.full_messages[0] : res.data.message || res.data.error;
            if (res.data && res.data.success) {
                NotificationService.showToastSuccess(message || 'I guess You registered successfully');
                this.props.history.push('/');
            } else {
                NotificationService.showDialogError(message || 'Unknown error occurred');
            }
        }).catch(err => {
            NotificationService.showDialogError(err.message || err.error);
        });
    }

    onUserStateUpdate(user) {
        // TODO: redirect the user
    }

    componentWillMount() {
        UsersService.subscribe(this.onUserStateUpdate)
    }

    componentWillUnmount() {
        UsersService.unsubscribe(this.onUserStateUpdate);
    }

    onInputChange(key, evt) {
        this.setState({ [key]: evt.target.value });
    }

    render() {
        return (
            <>
                <div className="d-lg-flex">
                    {/* Login form + Footer */}
                    <div className="d-flex flex-column min-vh-100 w-100 py-4 mx-auto me-lg-5" style={{ maxWidth: '416px' }}>
                        {/* Logo */}
                        <header className="navbar px-0 pb-4 mt-n2 mt-sm-0 mb-2 mb-md-3 mb-lg-4">
                            <a className="navbar-brand pt-0" href="./">
                                <span className="d-flex flex-shrink-0 text-primary rtl-flip me-2">
                                    <div className="flex-shrink-0 border rounded-circle" style={{ width: '32px' }}>
                                        <div className="ratio ratio-1x1 rounded-circle overflow-hidden">
                                            <img src="../assets/img/us/logos/favicon.svg" alt="Avatar" />
                                        </div>
                                    </div>
                                </span>
                                Salesnet
                            </a>
                        </header>
                        <h1 className="h2 mt-auto">Create an account</h1>
                        <div className="nav fs-sm mb-3 mb-lg-4">
                            I already have an account
                            <a className="nav-link badge text-decoration-none rounded-pill p-1 ml-1 text-bg-info" href="./signin">Sign in</a>
                        </div>
                        <div className="nav fs-sm mb-4 d-lg-none">
                            <span className="me-2">Uncertain about creating an account?</span>
                            <a className="text-decoration-none rounded-pill p-1 text-bg-info" href="#benefits" data-bs-toggle="offcanvas" aria-controls="benefits">Explore the Benefits</a>
                        </div>
                        {/* Form */}
                        <form className="needs-validation" id="signup_form" method="post" action="/users/signup" noValidate>
                            <div className="position-relative mb-4">
                                <label htmlFor="email" className="form-label">Username</label>
                                <input type="text" 
                                name="username" value={this.state.username}
                                onChange={(evt) => this.onInputChange('username', evt)}
                                placeholder="enter/choose your username" className="form-control form-control-lg" id="username" required />
                                <div className="invalid-tooltip bg-transparent py-0">Must enter/choose your username!</div>
                            </div>
                            <div className="position-relative mb-4">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" name="email" placeholder="valid email address" className="form-control form-control-lg" id="email" required />
                                <div className="invalid-tooltip bg-transparent py-0">Enter a valid email address!</div>
                            </div>
                            <div className="position-relative mb-4">
                                <label htmlFor="phone" className="form-label">Phone</label>
                                <input type="tel" name="phone" placeholder="active phone number" className="form-control form-control-lg" id="phone" required />
                                <div className="invalid-tooltip bg-transparent py-0">Enter a valid phone number!</div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="form-label">Password</label>
                                <div className="password-toggle">
                                    <input type="password" name="password" className="form-control form-control-lg" id="password" minLength={4} placeholder="Minimum 4 characters" required />
                                    <div className="invalid-tooltip bg-transparent py-0">Password does not meet the required criteria!</div>
                                    <label className="password-toggle-button fs-lg" aria-label="Show/hide password">
                                        <input type="checkbox" className="btn-check" />
                                    </label>
                                </div>
                            </div>
                            <div className="d-flex flex-column gap-2 mb-4">
                                <div className="form-check">
                                    <input type="checkbox" defaultChecked className="form-check-input" id="privacy" required />
                                    <label htmlFor="privacy" className="form-check-label">I have read and accept the
                                        <a className="text-dark-emphasis" href="#!">Privacy Policy</a></label>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-lg bg-dark text-white w-100">
                                Sign up Now.
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
                    {/* Benefits section that turns into offcanvas on screens < 992px wide (lg breakpoint) */}
                    <div className="offcanvas-lg offcanvas-end w-100 py-lg-4 ms-auto" id="benefits" style={{ maxWidth: '1034px' }}>
                        <div className="offcanvas-header justify-content-end position-relative z-2 p-3">
                            <button type="button" className="btn btn-icon btn-outline-dark text-dark border-dark bg-transparent rounded-circle d-none-dark" data-bs-dismiss="offcanvas" data-bs-target="#benefits" aria-label="Close">
                                <i className="fi-close fs-lg" />
                            </button>
                            <button type="button" className="btn btn-icon btn-outline-dark text-light border-light bg-transparent rounded-circle d-none d-inline-flex-dark" data-bs-dismiss="offcanvas" data-bs-target="#benefits" aria-label="Close">
                                <i className="fi-close fs-lg" />
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
                                                <span className="position-absolute top-0 start-0 w-100 h-100 bg-white border border-white border-opacity-75 rounded-4 d-none-dark" style={{"--fn-bg-opacity": '.3'}} />
                                                <span className="position-absolute top-0 start-0 w-100 h-100 bg-white border rounded-4 d-none d-block-dark" style={{"--fn-bg-opacity": '.05'}} />
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
                                                <span className="position-absolute top-0 start-0 w-100 h-100 bg-white border border-white border-opacity-75 rounded-4 d-none-dark" style={{"--fn-bg-opacity": '.3'}} />
                                                <span className="position-absolute top-0 start-0 w-100 h-100 bg-white border rounded-4 d-none d-block-dark" style={{"--fn-bg-opacity": '.05'}} />
                                                <div className="card-body position-relative z-2">
                                                    <div className="d-inline-flex position-relative text-info p-3">
                                                        <span className="position-absolute top-0 start-0 w-100 h-100 bg-white rounded-pill d-none-dark" />
                                                        <span className="position-absolute top-0 start-0 w-100 h-100 bg-body-secondary rounded-pill d-none d-block-dark" />
                                                        <i className="fi-settings position-relative z-2 fs-4 m-1" />
                                                    </div>
                                                    <h3 className="h6 pt-2 my-2">Manage your subscriptions.</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card h-100 bg-transparent border-0">
                                                <span className="position-absolute top-0 start-0 w-100 h-100 bg-white border border-white border-opacity-75 rounded-4 d-none-dark" style={{"--fn-bg-opacity": '.3'}} />
                                                <span className="position-absolute top-0 start-0 w-100 h-100 bg-white border rounded-4 d-none d-block-dark" style={{"--fn-bg-opacity": '.05'}} />
                                                <div className="card-body position-relative z-2">
                                                    <div className="d-inline-flex position-relative text-info p-3">
                                                        <span className="position-absolute top-0 start-0 w-100 h-100 bg-white rounded-pill d-none-dark" />
                                                        <span className="position-absolute top-0 start-0 w-100 h-100 bg-body-secondary rounded-pill d-none d-block-dark" />
                                                        <i className="fi-gift position-relative z-2 fs-4 m-1" />
                                                    </div>
                                                    <h3 className="h6 pt-2 my-2">Subscribe to a service on the go.</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card h-100 bg-transparent border-0">
                                                <span className="position-absolute top-0 start-0 w-100 h-100 bg-white border border-white border-opacity-75 rounded-4 d-none-dark" style={{"--fn-bg-opacity": '.3'}} />
                                                <span className="position-absolute top-0 start-0 w-100 h-100 bg-white border rounded-4 d-none d-block-dark" style={{"--fn-bg-opacity": '.05'}} />
                                                <div className="card-body position-relative z-2">
                                                    <div className="d-inline-flex position-relative text-info p-3">
                                                        <span className="position-absolute top-0 start-0 w-100 h-100 bg-white rounded-pill d-none-dark" />
                                                        <span className="position-absolute top-0 start-0 w-100 h-100 bg-body-secondary rounded-pill d-none d-block-dark" />
                                                        <i className="fi-percent position-relative z-2 fs-4 m-1" />
                                                    </div>
                                                    <h3 className="h6 pt-2 my-2">Monitor and track usage.</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card h-100 bg-transparent border-0">
                                                <span className="position-absolute top-0 start-0 w-100 h-100 bg-white border border-white border-opacity-75 rounded-4 d-none-dark" style={{"--fn-bg-opacity": '.3'}} />
                                                <span className="position-absolute top-0 start-0 w-100 h-100 bg-white border rounded-4 d-none d-block-dark" style={{"--fn-bg-opacity": '.05'}} />
                                                <div className="card-body position-relative z-2">
                                                    <div className="d-inline-flex position-relative text-info p-3">
                                                        <span className="position-absolute top-0 start-0 w-100 h-100 bg-white rounded-pill d-none-dark" />
                                                        <span className="position-absolute top-0 start-0 w-100 h-100 bg-body-secondary rounded-pill d-none d-block-dark" />
                                                        <i className="fi-heart position-relative z-2 fs-4 m-1" />
                                                    </div>
                                                    <h3 className="h6 pt-2 my-2">Get support as soon as possible.</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card h-100 bg-transparent border-0">
                                                <span className="position-absolute top-0 start-0 w-100 h-100 bg-white border border-white border-opacity-75 rounded-4 d-none-dark" style={{"--fn-bg-opacity": '.3'}} />
                                                <span className="position-absolute top-0 start-0 w-100 h-100 bg-white border rounded-4 d-none d-block-dark" style={{"--fn-bg-opacity": '.05'}} />
                                                <div className="card-body position-relative z-2">
                                                    <div className="d-inline-flex position-relative text-info p-3">
                                                        <span className="position-absolute top-0 start-0 w-100 h-100 bg-white rounded-pill d-none-dark" />
                                                        <span className="position-absolute top-0 start-0 w-100 h-100 bg-body-secondary rounded-pill d-none d-block-dark" />
                                                        <i className="fi-pie-chart position-relative z-2 fs-4 m-1" />
                                                    </div>
                                                    <h3 className="h6 pt-2 my-2">Easy access to services.</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Signup;
