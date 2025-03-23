import React from 'react'
import { NavLink } from 'react-router-dom'
import Aside from './shared/Aside'
import Navigation from '../../../components/shared/Navigation2'
import Categories from '../../../components/shared/modals/Categories'

const Personal = () => {
    return (
        <>
            <Categories />
            <Navigation />

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
                                        <NavLink
                                            className="nav-link hiding-collapse-toggle text-decoration-underline p-0 collapsed"
                                            to=".basic-info"
                                            data-bs-toggle="collapse"
                                            aria-expanded="false"
                                            aria-controls="basicInfoPreview basicInfoEdit"
                                        >
                                            Edit
                                        </NavLink>
                                    </div>
                                    <div
                                        className="basic-info collapse show"
                                        id="basicInfoPreview"
                                        style={{}}
                                    >
                                        <ul className="list-unstyled fs-sm m-0">
                                            <li>Susan Gardner</li>
                                            <li>May 12, 1996</li>
                                            <li>English</li>
                                        </ul>
                                    </div>
                                    <div className="basic-info collapse" id="basicInfoEdit" style={{}}>
                                        <form className="row g-3 g-sm-4 needs-validation" noValidate="">
                                            <div className="col-sm-6">
                                                <label htmlFor="fn" className="form-label">
                                                    First name
                                                </label>
                                                <div className="position-relative">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="fn"
                                                        defaultValue="Susan"
                                                        required=""
                                                    />
                                                    <div className="invalid-feedback">
                                                        Please enter your first name!
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <label htmlFor="ln" className="form-label">
                                                    Last name
                                                </label>
                                                <div className="position-relative">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="ln"
                                                        defaultValue="Gardner"
                                                        required=""
                                                    />
                                                    <div className="invalid-feedback">
                                                        Please enter your last name!
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <label htmlFor="birthdate" className="form-label">
                                                    Date of birth
                                                </label>
                                                <div className="position-relative">
                                                    <input
                                                        type="text"
                                                        className="form-control form-icon-end flatpickr-input"
                                                        id="birthdate"
                                                        data-datepicker='{
                        "dateFormat": "F j, Y",
                        "defaultDate": "May 15, 1996"
                    }'
                                                        placeholder="Choose date"
                                                        readOnly="readonly"
                                                    />
                                                    <i className="ci-calendar position-absolute top-50 end-0 translate-middle-y me-3" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <label className="form-label">Language</label>
                                                <div
                                                    className="choices"
                                                    data-type="select-one"
                                                    tabIndex={0}
                                                    role="listbox"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    <div className="form-select">
                                                        <select
                                                            className="form-select choices__input"
                                                            data-select='{
                    "placeholderValue": "Select language",
                    "choices": [
                        {
                        "value": "",
                        "label": "Select language",
                        "placeholder": true
                        },
                        {
                        "value": "English",
                        "label": "<div class=\"d-flex align-items-center\"><img src=\"assets/img/flags/en-us.png\" class=\"flex-shrink-0 me-2\" width=\"20\" alt=\"English\"> English</div>",
                        "selected": true
                        },
                        {
                        "value": "Français",
                        "label": "<div class=\"d-flex align-items-center\"><img src=\"assets/img/flags/fr.png\" class=\"flex-shrink-0 me-2\" width=\"20\" alt=\"Français\"> Français</div>"
                        },
                        {
                        "value": "Deutsch",
                        "label": "<div class=\"d-flex align-items-center\"><img src=\"assets/img/flags/de.png\" class=\"flex-shrink-0 me-2\" width=\"20\" alt=\"Deutsch\"> Deutsch</div>"
                        },
                        {
                        "value": "Italiano",
                        "label": "<div class=\"d-flex align-items-center\"><img src=\"assets/img/flags/it.png\" class=\"flex-shrink-0 me-2\" width=\"20\" alt=\"Italiano\"> Italiano</div>"
                        }
                    ]
                    }'
                                                            data-select-template="true"
                                                            hidden=""
                                                            tabIndex={-1}
                                                            data-choice="active"
                                                        >
                                                            <option value="">Select language</option>
                                                            <option value="English" selected="">
                                                                &lt;div class="d-flex align-items-center"&gt;&lt;img
                                                                src="assets/img/flags/en-us.png" class="flex-shrink-0
                                                                me-2" width="20" alt="English"&gt; English&lt;/div&gt;
                                                            </option>
                                                            <option value="Français">
                                                                &lt;div class="d-flex align-items-center"&gt;&lt;img
                                                                src="assets/img/flags/fr.png" class="flex-shrink-0
                                                                me-2" width="20" alt="Français"&gt;
                                                                Français&lt;/div&gt;
                                                            </option>
                                                            <option value="Deutsch">
                                                                &lt;div class="d-flex align-items-center"&gt;&lt;img
                                                                src="assets/img/flags/de.png" class="flex-shrink-0
                                                                me-2" width="20" alt="Deutsch"&gt; Deutsch&lt;/div&gt;
                                                            </option>
                                                            <option value="Italiano">
                                                                &lt;div class="d-flex align-items-center"&gt;&lt;img
                                                                src="assets/img/flags/it.png" class="flex-shrink-0
                                                                me-2" width="20" alt="Italiano"&gt;
                                                                Italiano&lt;/div&gt;
                                                            </option>
                                                        </select>
                                                        <div className="choices__list choices__list--single">
                                                            <div
                                                                className="choices__item choices__item--selectable "
                                                                data-item=""
                                                                data-id={2}
                                                                data-value="English"
                                                                aria-selected="true"
                                                            >
                                                                <div className="d-flex align-items-center">
                                                                    <img
                                                                        src="assets/img/flags/en-us.png"
                                                                        className="flex-shrink-0 me-2"
                                                                        width={20}
                                                                        alt="English"
                                                                    />{" "}
                                                                    English
                                                                </div>
                                                                <button
                                                                    type="button"
                                                                    className="choices__button"
                                                                    aria-label="Remove item"
                                                                    data-button=""
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="choices__list choices__list--dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        <div className="choices__list" role="listbox">
                                                            <div
                                                                className="choices__item choices__item--choice choices__item--selectable is-highlighted"
                                                                data-select-text=""
                                                                data-choice=""
                                                                data-choice-selectable=""
                                                                data-id={2}
                                                                data-value="English"
                                                                role="option"
                                                                aria-selected="true"
                                                            >
                                                                <div>
                                                                    <div className="d-flex align-items-center">
                                                                        <img
                                                                            src="assets/img/flags/en-us.png"
                                                                            className="flex-shrink-0 me-2"
                                                                            width={20}
                                                                            alt="English"
                                                                        />{" "}
                                                                        English
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="choices__item choices__item--choice choices__item--selectable "
                                                                data-select-text=""
                                                                data-choice=""
                                                                data-choice-selectable=""
                                                                data-id={3}
                                                                data-value="Français"
                                                                role="option"
                                                            >
                                                                <div>
                                                                    <div className="d-flex align-items-center">
                                                                        <img
                                                                            src="assets/img/flags/fr.png"
                                                                            className="flex-shrink-0 me-2"
                                                                            width={20}
                                                                            alt="Français"
                                                                        />{" "}
                                                                        Français
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="choices__item choices__item--choice choices__item--selectable "
                                                                data-select-text=""
                                                                data-choice=""
                                                                data-choice-selectable=""
                                                                data-id={4}
                                                                data-value="Deutsch"
                                                                role="option"
                                                            >
                                                                <div>
                                                                    <div className="d-flex align-items-center">
                                                                        <img
                                                                            src="assets/img/flags/de.png"
                                                                            className="flex-shrink-0 me-2"
                                                                            width={20}
                                                                            alt="Deutsch"
                                                                        />{" "}
                                                                        Deutsch
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="choices__item choices__item--choice choices__item--selectable "
                                                                data-select-text=""
                                                                data-choice=""
                                                                data-choice-selectable=""
                                                                data-id={5}
                                                                data-value="Italiano"
                                                                role="option"
                                                            >
                                                                <div>
                                                                    <div className="d-flex align-items-center">
                                                                        <img
                                                                            src="assets/img/flags/it.png"
                                                                            className="flex-shrink-0 me-2"
                                                                            width={20}
                                                                            alt="Italiano"
                                                                        />{" "}
                                                                        Italiano
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="d-flex gap-3 pt-2 pt-sm-0">
                                                    <button type="submit" className="btn btn-primary">
                                                        Save changes
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-secondary collapsed"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target=".basic-info"
                                                        aria-expanded="false"
                                                        aria-controls="basicInfoPreview basicInfoEdit"
                                                    >
                                                        Close
                                                    </button>
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
                                        <NavLink
                                            className="nav-link hiding-collapse-toggle text-decoration-underline p-0 collapsed"
                                            to=".contact-info"
                                            data-bs-toggle="collapse"
                                            aria-expanded="false"
                                            aria-controls="contactInfoPreview contactInfoEdit"
                                        >
                                            Edit
                                        </NavLink>
                                    </div>
                                    <div
                                        className="contact-info collapse show"
                                        id="contactInfoPreview"
                                        style={{}}
                                    >
                                        <ul className="list-unstyled fs-sm m-0">
                                            <li className="mb-1">susan.gardner@email.com</li>
                                            <li>
                                                +1 (805) 348 95 72{" "}
                                                <span className="text-success ms-1">Verified</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div
                                        className="contact-info collapse"
                                        id="contactInfoEdit"
                                        style={{}}
                                    >
                                        <form className="row g-3 g-sm-4 needs-validation" noValidate="">
                                            <div className="col-sm-6">
                                                <label htmlFor="email" className="form-label">
                                                    Email address
                                                </label>
                                                <div className="position-relative">
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="email"
                                                        defaultValue="susan.gardner@email.com"
                                                        required=""
                                                    />
                                                    <div className="invalid-feedback">
                                                        Please enter a valid email address!
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <label htmlFor="phone" className="form-label">
                                                    Phone number
                                                </label>
                                                <div className="position-relative">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="phone"
                                                        data-input-format='{"numericOnly": true, "delimiters": ["+1 (", ")", " "], "blocks": [0, 3, 0, 3, 2, 2]}'
                                                        placeholder="+1 (___) ___ __ __"
                                                        defaultValue="+1 (805) 348 95 72"
                                                        required=""
                                                    />
                                                    <div className="invalid-feedback">
                                                        Please enter your phone number!
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="d-flex gap-3 pt-2 pt-sm-0">
                                                    <button type="submit" className="btn btn-primary">
                                                        Save changes
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-secondary collapsed"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target=".contact-info"
                                                        aria-expanded="false"
                                                        aria-controls="contactInfoPreview contactInfoEdit"
                                                    >
                                                        Close
                                                    </button>
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
                                        <NavLink
                                            className="nav-link hiding-collapse-toggle text-decoration-underline p-0 collapsed"
                                            to=".password-change"
                                            data-bs-toggle="collapse"
                                            aria-expanded="false"
                                            aria-controls="passChangePreview passChangeEdit"
                                        >
                                            Edit
                                        </NavLink>
                                    </div>
                                    <div
                                        className="collapse password-change show"
                                        id="passChangePreview"
                                    >
                                        <ul className="list-unstyled fs-sm m-0">
                                            <li>**************</li>
                                        </ul>
                                    </div>
                                    <div className="collapse password-change" id="passChangeEdit">
                                        <form className="row g-3 g-sm-4 needs-validation" noValidate="">
                                            <div className="col-sm-6">
                                                <label htmlFor="current-password" className="form-label">
                                                    Current password
                                                </label>
                                                <div className="password-toggle">
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        id="current-password"
                                                        placeholder="Enter your current password"
                                                        required=""
                                                    />
                                                    <label
                                                        className="password-toggle-button"
                                                        aria-label="Show/hide password"
                                                    >
                                                        <input type="checkbox" className="btn-check" />
                                                        <span className="password-toggle-button-icon d-flex">
                                                            <svg
                                                                width="1em"
                                                                height="1em"
                                                                viewBox="0 0 24 24"
                                                                fill="currentColor"
                                                            >
                                                                <path d="M23.8 11.6c-.1-.1-.1-.3-.2-.4-.8-1.4-1.7-2.7-2.8-3.8-1.9-2.1-4.9-4.3-8.8-4.3S5.2 5.3 3.2 7.4c-1.1 1.2-2 2.4-2.8 3.8-.1.1-.1.2-.2.4s-.1.5 0 .8v.1c.2.4.5.8.7 1.2.7 1 1.4 2 2.2 2.9 1.9 2.1 4.9 4.3 8.8 4.3 3.9 0 6.8-2.2 8.8-4.3 1.1-1.2 2-2.4 2.8-3.8.1-.1.1-.2.2-.4.2-.3.2-.6.1-.8zm-4.3 3.8c-1.8 1.9-4.3 3.7-7.5 3.7s-5.7-1.8-7.5-3.7c-1-1-1.8-2.2-2.5-3.4.7-1.2 1.5-2.4 2.5-3.4C6.3 6.7 8.8 4.9 12 4.9s5.7 1.8 7.5 3.7c1 1 1.8 2.2 2.5 3.4-.7 1.2-1.5 2.4-2.5 3.4z" />
                                                                <path d="M12 8.1c-2.2 0-3.9 1.8-3.9 3.9s1.7 3.9 3.9 3.9 3.9-1.7 3.9-3.9-1.7-3.9-3.9-3.9zm0 6c-1.1 0-2.1-1-2.1-2.1s.9-2.1 2.1-2.1 2.1 1 2.1 2.1-1 2.1-2.1 2.1z" />
                                                            </svg>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <label htmlFor="new-password" className="form-label">
                                                    New password
                                                </label>
                                                <div className="password-toggle">
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        id="new-password"
                                                        placeholder="Create new password"
                                                        required=""
                                                    />
                                                    <label
                                                        className="password-toggle-button"
                                                        aria-label="Show/hide password"
                                                    >
                                                        <input type="checkbox" className="btn-check" />
                                                        <span className="password-toggle-button-icon d-flex">
                                                            <svg
                                                                width="1em"
                                                                height="1em"
                                                                viewBox="0 0 24 24"
                                                                fill="currentColor"
                                                            >
                                                                <path d="M23.8 11.6c-.1-.1-.1-.3-.2-.4-.8-1.4-1.7-2.7-2.8-3.8-1.9-2.1-4.9-4.3-8.8-4.3S5.2 5.3 3.2 7.4c-1.1 1.2-2 2.4-2.8 3.8-.1.1-.1.2-.2.4s-.1.5 0 .8v.1c.2.4.5.8.7 1.2.7 1 1.4 2 2.2 2.9 1.9 2.1 4.9 4.3 8.8 4.3 3.9 0 6.8-2.2 8.8-4.3 1.1-1.2 2-2.4 2.8-3.8.1-.1.1-.2.2-.4.2-.3.2-.6.1-.8zm-4.3 3.8c-1.8 1.9-4.3 3.7-7.5 3.7s-5.7-1.8-7.5-3.7c-1-1-1.8-2.2-2.5-3.4.7-1.2 1.5-2.4 2.5-3.4C6.3 6.7 8.8 4.9 12 4.9s5.7 1.8 7.5 3.7c1 1 1.8 2.2 2.5 3.4-.7 1.2-1.5 2.4-2.5 3.4z" />
                                                                <path d="M12 8.1c-2.2 0-3.9 1.8-3.9 3.9s1.7 3.9 3.9 3.9 3.9-1.7 3.9-3.9-1.7-3.9-3.9-3.9zm0 6c-1.1 0-2.1-1-2.1-2.1s.9-2.1 2.1-2.1 2.1 1 2.1 2.1-1 2.1-2.1 2.1z" />
                                                            </svg>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="d-flex gap-3 pt-2 pt-sm-0">
                                                    <button type="submit" className="btn btn-primary">
                                                        Save changes
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-secondary"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target=".password-change"
                                                        aria-expanded="true"
                                                        aria-controls="passChangePreview passChangeEdit"
                                                    >
                                                        Close
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                {/* Delete account */}
                                <div className="pt-3 mt-2 mt-sm-3">
                                    <h2 className="h6">Delete account</h2>
                                    <p className="fs-sm">
                                        When you delete your account, your public profile will be
                                        deactivated immediately. If you change your mind before the 14
                                        days are up, sign in with your email and password, and we'll send
                                        you a link to reactivate your account.
                                    </p>
                                    <NavLink className="text-danger fs-sm fw-medium" to="#!">
                                        Delete account
                                    </NavLink>
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
