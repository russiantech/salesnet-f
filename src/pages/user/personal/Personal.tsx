import { useNavigate } from 'react-router-dom';

import Aside from '../shared/Aside'
// import Navigation from '../../../components/shared/Navigation'

const Personal = () => {

    return (
        <>

            {/* Page content */}
            <main className="content-wrapper">
                <div className="container py-5 mt-n2 mt-sm-0">
                    <div className="row pt-md-2 pt-lg-3 pb-sm-2 pb-md-3 pb-lg-4 pb-xl-5">

                        {/* Sidebar navigation that turns into offcanvas on screens < 992px wide (lg breakpoint) */}
                        <Aside />

                        {/* Personal info content */}
                        <div className="col-lg-9">
                            <div className="ps-lg-3 ps-xl-0">
                                {/* Page title */}
                                <h1 className="h2 mb-1 mb-sm-2">Personal info</h1>
                                {/* Basic info */}
                                <div className="border-bottom py-4">
                                    <div className="nav flex-nowrap align-items-center justify-content-between pb-1 mb-3">
                                        <h2 className="h6 mb-0">Basic info</h2>
                                        <a className="nav-link hiding-collapse-toggle text-decoration-underline p-0 collapsed" href="#basicInfoEdit" data-bs-toggle="collapse" aria-expanded="false" aria-controls="basicInfoPreview basicInfoEdit">Edit</a>
                                    </div>
                                    <div className="collapse basic-info show" id="basicInfoPreview">
                                        <ul className="list-unstyled fs-sm m-0">
                                            <li>Russian Developer</li>
                                            <li>May 12, 1996</li>
                                            <li>English</li>
                                        </ul>
                                    </div>
                                    <div className="collapse basic-info" id="basicInfoEdit">
                                        <form className="row g-3 g-sm-4 needs-validation" noValidate>
                                            <div className="col-sm-6">
                                                <label htmlFor="fn" className="form-label">First name</label>
                                                <div className="position-relative">
                                                    <input type="text" className="form-control" id="fn" defaultValue="Chris" required />
                                                    <div className="invalid-feedback">Please enter your first name!</div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <label htmlFor="ln" className="form-label">Last name</label>
                                                <div className="position-relative">
                                                    <input type="text" className="form-control" id="ln" defaultValue="James" required />
                                                    <div className="invalid-feedback">Please enter your last name!</div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <label htmlFor="birthdate" className="form-label">Date of birth</label>
                                                <div className="position-relative">
                                                    <input type="date" className="form-control form-icon-end" id="birthdate" 
                                                     placeholder="Choose date" />
                                                    <i className="ci-calendar position-absolute top-50 end-0 translate-middle-y me-3" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <label className="form-label">Language</label>
                                                <select className="form-select" data-select-template="true">
                                                <option value="">Efik</option>
                                                <option value="">Lagos</option>
                                                <option value="">Igbo</option>
                                                </select>
                                            </div>
                                            <div className="col-12">
                                                <div className="d-flex gap-3 pt-2 pt-sm-0">
                                                    <button type="submit" className="btn btn-primary">Save changes</button>
                                                    <button type="button" className="btn btn-secondary" data-bs-toggle="collapse" data-bs-target=".basic-info" aria-expanded="true" aria-controls="basicInfoPreview basicInfoEdit">Close</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                {/* Contact */}
                                <div className="border-bottom py-4">
                                    <div className="nav flex-nowrap align-items-center justify-content-between pb-1 mb-3">
                                        <div className="d-flex align-items-center gap-3 me-4">
                                            <h2 className="h6 mb-0">Contact</h2>
                                        </div>
                                        <a className="nav-link hiding-collapse-toggle text-decoration-underline p-0 collapsed" href="#contactInfoEdit" data-bs-toggle="collapse" aria-expanded="false" aria-controls="contactInfoPreview contactInfoEdit">Edit</a>
                                    </div>
                                    <div className="collapse contact-info show" id="contactInfoPreview">
                                        <ul className="list-unstyled fs-sm m-0">
                                            <li className="mb-1">russian.techa@email.com</li>
                                            <li>+1 (805) 348 95 72 <span className="text-success ms-1">Verified</span></li>
                                        </ul>
                                    </div>
                                    <div className="collapse contact-info" id="contactInfoEdit">
                                        <form className="row g-3 g-sm-4 needs-validation" noValidate>
                                            <div className="col-sm-6">
                                                <label htmlFor="email" className="form-label">Email address</label>
                                                <div className="position-relative">
                                                    <input type="email" className="form-control" id="email" defaultValue="russian.techa@email.com" required />
                                                    <div className="invalid-feedback">Please enter a valid email address!</div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <label htmlFor="phone" className="form-label">Phone number</label>
                                                <div className="position-relative">
                                                    <input type="text" className="form-control" id="phone" data-input-format="{&quot;numericOnly&quot;: true, &quot;delimiters&quot;: [&quot;+1 (&quot;, &quot;)&quot;, &quot; &quot;], &quot;blocks&quot;: [0, 3, 0, 3, 2, 2]}" placeholder="+1 (___) ___ __ __" defaultValue="+1 (805) 348 95 72" required />
                                                    <div className="invalid-feedback">Please enter your phone number!</div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="d-flex gap-3 pt-2 pt-sm-0">
                                                    <button type="submit" className="btn btn-primary">Save changes</button>
                                                    <button type="button" className="btn btn-secondary" data-bs-toggle="collapse" data-bs-target=".contact-info" aria-expanded="true" aria-controls="contactInfoPreview contactInfoEdit">Close</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                {/* Password */}
                                <div className="border-bottom py-4">
                                    <div className="nav flex-nowrap align-items-center justify-content-between pb-1 mb-3">
                                        <div className="d-flex align-items-center gap-3 me-4">
                                            <h2 className="h6 mb-0">Password</h2>
                                        </div>
                                        <a className="nav-link hiding-collapse-toggle text-decoration-underline p-0 collapsed" href="#passChangeEdit" data-bs-toggle="collapse" aria-expanded="false" aria-controls="passChangePreview passChangeEdit">Edit</a>
                                    </div>
                                    <div className="collapse password-change show" id="passChangePreview">
                                        <ul className="list-unstyled fs-sm m-0">
                                            <li>**************</li>
                                        </ul>
                                    </div>
                                    <div className="collapse password-change" id="passChangeEdit">
                                        <form className="row g-3 g-sm-4 needs-validation" noValidate>
                                            <div className="col-sm-6">
                                                <label htmlFor="current-password" className="form-label">Current password</label>
                                                <div className="password-toggle">
                                                    <input type="password" className="form-control" id="current-password" placeholder="Enter your current password" required />
                                                    <label className="password-toggle-button" aria-label="Show/hide password">
                                                        <input type="checkbox" className="btn-check" />
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <label htmlFor="new-password" className="form-label">New password</label>
                                                <div className="password-toggle">
                                                    <input type="password" className="form-control" id="new-password" placeholder="Create new password" required />
                                                    <label className="password-toggle-button" aria-label="Show/hide password">
                                                        <input type="checkbox" className="btn-check" />
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="d-flex gap-3 pt-2 pt-sm-0">
                                                    <button type="submit" className="btn btn-primary">Save changes</button>
                                                    <button type="button" className="btn btn-secondary" data-bs-toggle="collapse" data-bs-target=".password-change" aria-expanded="true" aria-controls="passChangePreview passChangeEdit">Close</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                {/* Delete account */}
                                <div className="pt-3 mt-2 mt-sm-3">
                                    <h2 className="h6">Delete account</h2>
                                    <p className="fs-sm">When you delete your account, your public profile will be deactivated immediately. If you change your mind before the 14 days are up, sign in with your email and password, and we'll send you a link to reactivate your account.</p>
                                    <a className="text-danger fs-sm fw-medium" href="#!">Delete account</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Personal