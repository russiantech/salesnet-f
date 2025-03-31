import React from 'react'
import AddressSelector from './PickUpSelector'
import { Link } from 'react-router-dom'
import NewAddess from '../addresses/NewAddess'
import PickUpSelector from './PickUpSelector'

const Checkout = () => {

    return (
        <>

            <NewAddess />
            <PickUpSelector />


            {/* Order preview offcanvas */}
            <div className="offcanvas offcanvas-end pb-sm-2 px-sm-2" id="orderPreview" tabIndex={-1} aria-labelledby="orderPreviewLabel" style={{ width: '500px' }}>
                <div className="offcanvas-header py-3 pt-lg-4">
                    <h4 className="offcanvas-title" id="orderPreviewLabel">Your order</h4>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                <div className="offcanvas-body d-flex flex-column gap-3 py-2">
                    {/* Item */}
                    <div className="d-flex align-items-center">
                        <a className="flex-shrink-0" href="shop-product-general-electronics.html">
                            <img src="/assets/img/shop/electronics/thumbs/08.png" width={110} alt="iPhone 14" />
                        </a>
                        <div className="w-100 min-w-0 ps-2 ps-sm-3">
                            <h5 className="d-flex animate-underline mb-2">
                                <a className="d-block fs-sm fw-medium text-truncate animate-target" href="shop-product-general-electronics.html">Apple iPhone 14 128GB White</a>
                            </h5>
                            <div className="h6 mb-0">$899.00</div>
                            <div className="fs-xs pt-2">Qty: 1</div>
                        </div>
                    </div>
                    {/* Item */}
                    <div className="d-flex align-items-center">
                        <a className="position-relative flex-shrink-0" href="shop-product-general-electronics.html">
                            <span className="badge text-bg-danger position-absolute top-0 start-0">-10%</span>
                            <img src="/assets/img/shop/electronics/thumbs/09.png" width={110} alt="iPad Pro" />
                        </a>
                        <div className="w-100 min-w-0 ps-2 ps-sm-3">
                            <h5 className="d-flex animate-underline mb-2">
                                <a className="d-block fs-sm fw-medium text-truncate animate-target" href="shop-product-general-electronics.html">Tablet Apple iPad Pro M2</a>
                            </h5>
                            <div className="h6 mb-0">$989.00 <del className="text-body-tertiary fs-xs fw-normal">$1,099.00</del></div>
                            <div className="fs-xs pt-2">Qty: 1</div>
                        </div>
                    </div>
                    {/* Item */}
                    <div className="d-flex align-items-center">
                        <a className="flex-shrink-0" href="shop-product-general-electronics.html">
                            <img src="/assets/img/shop/electronics/thumbs/01.png" width={110} alt="Smart Watch" />
                        </a>
                        <div className="w-100 min-w-0 ps-2 ps-sm-3">
                            <h5 className="d-flex animate-underline mb-2">
                                <a className="d-block fs-sm fw-medium text-truncate animate-target" href="shop-product-general-electronics.html">Smart Watch Series 7, White</a>
                            </h5>
                            <div className="h6 mb-0">$429.00</div>
                            <div className="fs-xs pt-2">Qty: 1</div>
                        </div>
                    </div>
                </div>
                <div className="offcanvas-header">
                    <a className="btn btn-lg btn-outline-secondary w-100" href="checkout-v1-cart.html">Edit cart</a>
                </div>
            </div>
            {/* Page content */}
            <main className="content-wrapper">
                <div className="container py-5">
                    <div className="row pt-1 pt-sm-3 pt-lg-4 pb-2 pb-md-3 pb-lg-4 pb-xl-5">
                        {/* Delivery info (Step 1) */}
                        <div className="col-lg-8 col-xl-7 mb-5 mb-lg-0">
                            <div className="d-flex flex-column gap-5 pe-lg-4 pe-xl-0">
                                <div className="d-flex align-items-start">
                                    <div className="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle fs-sm fw-semibold lh-1 flex-shrink-0" style={{ width: '2rem', height: '2rem', marginTop: '-.125rem' }}>1</div>
                                    <div className="flex-grow-0 flex-shrink-0 ps-3 ps-md-4" style={{ width: 'calc(100% - 2rem)' }}>
                                        <h1 className="h5 mb-md-4">Delivery information</h1>
                                        <div className="ms-n5 ms-sm-0">

                                            <AddressSelector />

                                            {/* <h3 className="h6 border-bottom pb-4 mb-0">Choose shipping method</h3> */}
                                            <div className="mb-lg-4" id="shippingMethod" role="list">
                                                {/* Courier delivery option */}
                                                <div className="border-bottom">
                                                    <div className="form-check mb-0" role="listitem">
                                                        <label className="form-check-label d-flex align-items-center text-dark-emphasis fw-semibold py-4">
                                                            <input type="radio" className="form-check-input fs-base me-2 me-sm-3" name="delivery_options" defaultChecked />
                                                            <div className="d-flex align-items-center gap-3">
                                                                <h3 className="h6 mb-1">Abraham Adesanya, Lekki lagos Nigeria.</h3>
                                                            </div>
                                                            <span className="fw-normal ms-auto">$16.50
                                                                <Link className="nav-link px-0 py-1 py-ms-2" to="#newAddressModal" data-bs-toggle="modal">
                                                                    <i className="ci-plus fs-base me-1"></i><span className="animate-target badge text-bg-dark rounded-pill">
                                                                        Change Address</span></Link>
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="border-bottom">
                                                    <div className="form-check mb-0" role="listitem">
                                                        <label className="form-check-label d-flex align-items-center text-dark-emphasis fw-semibold py-4">
                                                            <input type="radio" className="form-check-input fs-base me-2 me-sm-3" name="delivery_options" defaultChecked />
                                                            <div className="d-flex align-items-center gap-3">
                                                                <h3 className="h6 mb-1">Pick-up from store instead</h3>
                                                            </div>
                                                            <span className="fw-normal ms-auto">$Free
                                                                <Link className="nav-link px-0 py-1 py-ms-2" to="#PickUpSelectorModal" data-bs-toggle="modal">
                                                                    <i className="ci-plus fs-base me-1"></i><span className="animate-target badge text-bg-dark rounded-pill">
                                                                        Choose Pickup Station</span></Link>
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>

                                                {/* Local shipping option */}
                                                <div className="border-bottom">
                                                    <div className="form-check mb-0" role="listitem" data-bs-toggle="collapse" data-bs-target="#shipping" aria-expanded="false" aria-controls="shipping">
                                                        <label className="form-check-label d-flex align-items-center text-dark-emphasis fw-semibold py-4">
                                                            <input type="radio" className="form-check-input fs-base me-2 me-sm-3 disabled" name="delivery_options" />
                                                            Local shipping
                                                            <span className="fw-normal ms-auto">$23.40</span>
                                                        </label>
                                                    </div>
                                                    <div className="collapse" id="shipping" data-bs-parent="#shippingMethod">
                                                        <div className="pb-4 ps-3 ms-2 ms-sm-3">
                                                            <div className="alert d-flex align-items-center alert-info mb-3" role="alert">
                                                                <i className="ci-info fs-lg me-2" />
                                                                <div className="fs-sm">Local shipping can take up to <span className="text-info-emphasis fw-semibold">5</span> business days.</div>
                                                            </div>
                                                            <p className="fs-sm mb-0">Estimated date of delivery - <span className="text-body-emphasis fw-medium">March 15, 2024</span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <>
                                    {/* Payment method */}
                                    <div className="d-flex align-items-start">
                                        <div
                                            className="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle fs-sm fw-semibold lh-1 flex-shrink-0"
                                            style={{ width: "2rem", height: "2rem", marginTop: "-.125rem" }}
                                        >
                                            2
                                        </div>
                                        <div className="w-100 ps-3 ps-md-4">
                                            <h2 className="h5 mb-0">Payment</h2>
                                            <div className="mb-4" id="paymentMethod" role="list">
                                                {/* Cash on delivery */}
                                                <div className="mt-4">
                                                    <div
                                                        className="form-check mb-0"
                                                        role="listitem"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#cash"
                                                        aria-expanded="false"
                                                        aria-controls="cash"
                                                    >
                                                        <label className="form-check-label w-100 text-dark-emphasis fw-semibold">
                                                            <input
                                                                type="radio"
                                                                className="form-check-input fs-base me-2 me-sm-3"
                                                                name="payment-method"
                                                            />
                                                            Cash on delivery
                                                        </label>
                                                    </div>
                                                    <div className="collapse" id="cash" data-bs-parent="#paymentMethod">
                                                        <div className="d-sm-flex align-items-center pt-3 pt-sm-4 pb-2 ps-3 ms-2 ms-sm-3">
                                                            <span className="fs-sm me-3">I would require a change from:</span>
                                                            <div
                                                                className="input-group mt-2 mt-sm-0"
                                                                style={{ maxWidth: 150 }}
                                                            >
                                                                <span className="input-group-text">
                                                                    <i className="ci-dollar-sign" />
                                                                </span>
                                                                <input
                                                                    type="number"
                                                                    className="form-control"
                                                                    aria-label="Amount (to the nearest dollar)"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Credit card */}
                                                <div className="mt-4">
                                                    <div
                                                        className="form-check mb-0"
                                                        role="listitem"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#card"
                                                        aria-expanded="true"
                                                        aria-controls="card"
                                                    >
                                                        <label className="form-check-label d-flex align-items-center text-dark-emphasis fw-semibold">
                                                            <input
                                                                type="radio"
                                                                className="form-check-input fs-base me-2 me-sm-3"
                                                                name="payment-method"
                                                                defaultChecked=""
                                                            />
                                                            Credit or debit card
                                                            <span className="d-none d-sm-flex gap-2 ms-3">
                                                                <img
                                                                    src="/assets/img/payment-methods/amex.svg"
                                                                    className="d-block bg-info rounded-1"
                                                                    width={36}
                                                                    alt="Amex"
                                                                />
                                                                <img
                                                                    src="/assets/img/payment-methods/visa-light-mode.svg"
                                                                    className="d-none-dark"
                                                                    width={36}
                                                                    alt="Visa"
                                                                />
                                                                <img
                                                                    src="/assets/img/payment-methods/visa-dark-mode.svg"
                                                                    className="d-none d-block-dark"
                                                                    width={36}
                                                                    alt="Visa"
                                                                />
                                                                <img
                                                                    src="/assets/img/payment-methods/mastercard.svg"
                                                                    width={36}
                                                                    alt="Mastercard"
                                                                />
                                                                <img
                                                                    src="/assets/img/payment-methods/maestro.svg"
                                                                    width={36}
                                                                    alt="Maestro"
                                                                />
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div
                                                        className="collapse show"
                                                        id="card"
                                                        data-bs-parent="#paymentMethod"
                                                    >
                                                        <form
                                                            className="needs-validation pt-4 pb-2 ps-3 ms-2 ms-sm-3"
                                                            noValidate=""
                                                        >
                                                            <div
                                                                className="position-relative mb-3 mb-sm-4"
                                                                data-input-format='{"creditCard": true}'
                                                            >
                                                                <input
                                                                    type="text"
                                                                    className="form-control form-control-lg form-icon-end"
                                                                    placeholder="Card number"
                                                                    required=""
                                                                />
                                                                <span
                                                                    className="position-absolute d-flex top-50 end-0 translate-middle-y fs-5 text-body-tertiary me-3"
                                                                    data-card-icon=""
                                                                />
                                                            </div>
                                                            <div className="row row-cols-1 row-cols-sm-2 g-3 g-sm-4">
                                                                <div className="col">
                                                                    <input
                                                                        type="text"
                                                                        className="form-control form-control-lg"
                                                                        data-input-format='{"date": true, "datePattern": ["m", "y"]}'
                                                                        placeholder="MM/YY"
                                                                    />
                                                                </div>
                                                                <div className="col">
                                                                    <input
                                                                        type="text"
                                                                        className="form-control form-control-lg"
                                                                        maxLength={4}
                                                                        data-input-format='{"numeral": true, "numeralPositiveOnly": true, "numeralThousandsGroupStyle": "none"}'
                                                                        placeholder="CVC"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                {/* PayPal */}
                                                <div className="mt-4">
                                                    <div
                                                        className="form-check mb-0"
                                                        role="listitem"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#paypal"
                                                        aria-expanded="false"
                                                        aria-controls="paypal"
                                                    >
                                                        <label className="form-check-label d-flex align-items-center text-dark-emphasis fw-semibold">
                                                            <input
                                                                type="radio"
                                                                className="form-check-input fs-base me-2 me-sm-3"
                                                                name="payment-method"
                                                            />
                                                            PayPal
                                                            <img
                                                                src="/assets/img/payment-methods/paypal-icon.svg"
                                                                className="ms-3"
                                                                width={16}
                                                                alt="PayPal"
                                                            />
                                                        </label>
                                                    </div>
                                                    <div
                                                        className="collapse"
                                                        id="paypal"
                                                        data-bs-parent="#paymentMethod"
                                                    />
                                                </div>
                                                {/* Google Pay */}
                                                <div className="mt-4">
                                                    <div
                                                        className="form-check mb-0"
                                                        role="listitem"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#googlepay"
                                                        aria-expanded="false"
                                                        aria-controls="googlepay"
                                                    >
                                                        <label className="form-check-label d-flex align-items-center text-dark-emphasis fw-semibold">
                                                            <input
                                                                type="radio"
                                                                className="form-check-input fs-base me-2 me-sm-3"
                                                                name="payment-method"
                                                            />
                                                            Google Pay
                                                            <img
                                                                src="/assets/img/payment-methods/google-icon.svg"
                                                                className="ms-3"
                                                                width={20}
                                                                alt="Google Pay"
                                                            />
                                                        </label>
                                                    </div>
                                                    <div
                                                        className="collapse"
                                                        id="googlepay"
                                                        data-bs-parent="#paymentMethod"
                                                    />
                                                </div>
                                            </div>
                                            {/* Add promo code button */}
                                            <div className="nav pb-3 mb-2 mb-sm-3">
                                                <a className="nav-link animate-underline p-0" href="#!">
                                                    <i className="ci-plus-circle fs-xl ms-a me-2" />
                                                    <span className="animate-target">
                                                        Add a promo code or a gift card
                                                    </span>
                                                </a>
                                            </div>
                                            {/* Additional comments */}
                                            <textarea
                                                className="form-control form-control-lg mb-4"
                                                rows={3}
                                                placeholder="Additional comments"
                                                defaultValue={""}
                                            />
                                            <div className="form-check mb-lg-4">
                                                <input type="checkbox" className="form-check-input" id="accept-terms" />
                                                <label
                                                    htmlFor="accept-terms"
                                                    className="form-check-label nav align-items-center"
                                                >
                                                    I accept the
                                                    <a
                                                        className="nav-link text-decoration-underline fw-normal ms-1 p-0"
                                                        href="terms-and-conditions.html"
                                                    >
                                                        Terms and Conditions
                                                    </a>
                                                </label>
                                            </div>
                                            {/* Pay button visible on screens > 991px wide (lg breakpoint) */}
                                            <a
                                                className="btn btn-lg btn-primary w-100 d-none d-lg-flex"
                                                href="checkout-v1-thankyou.html"
                                            >
                                                Pay $2,406.90 <i className="ci-chevron-right fs-lg ms-1 me-n1" />
                                            </a>
                                        </div>
                                    </div>
                                </>

                            </div>
                        </div>
                        {/* Order summary (sticky sidebar) */}
                        <aside className="col-lg-4 offset-xl-1" style={{ marginTop: '-100px' }}>
                            <div className="position-sticky top-0" style={{ paddingTop: '100px' }}>
                                <div className="bg-body-tertiary rounded-5 p-4 mb-3">
                                    <div className="p-sm-2 p-lg-0 p-xl-2">
                                        <div className="border-bottom pb-4 mb-4">
                                            <div className="d-flex align-items-center justify-content-between mb-4">
                                                <h5 className="mb-0">Order summary</h5>
                                                <div className="nav">
                                                    <a className="nav-link text-decoration-underline p-0" href="checkout-v1-cart.html">Edit</a>
                                                </div>
                                            </div>
                                            <a className="d-flex align-items-center gap-2 text-decoration-none" href="#orderPreview" data-bs-toggle="offcanvas">
                                                <div className="ratio ratio-1x1" style={{ maxWidth: '64px' }}>
                                                    <img src="/assets/img/shop/electronics/thumbs/08.png" className="d-block p-1" alt="iPhone" />
                                                </div>
                                                <div className="ratio ratio-1x1" style={{ maxWidth: '64px' }}>
                                                    <img src="/assets/img/shop/electronics/thumbs/09.png" className="d-block p-1" alt="iPad Pro" />
                                                </div>
                                                <div className="ratio ratio-1x1" style={{ maxWidth: '64px' }}>
                                                    <img src="/assets/img/shop/electronics/thumbs/01.png" className="d-block p-1" alt="Smart Watch" />
                                                </div>
                                                <i className="ci-chevron-right text-body fs-xl p-0 ms-auto" />
                                            </a>
                                        </div>
                                        <ul className="list-unstyled fs-sm gap-3 mb-0">
                                            <li className="d-flex justify-content-between">
                                                Subtotal (3 items):
                                                <span className="text-dark-emphasis fw-medium">$2,427.00</span>
                                            </li>
                                            <li className="d-flex justify-content-between">
                                                Saving:
                                                <span className="text-danger fw-medium">-$110.00</span>
                                            </li>
                                            <li className="d-flex justify-content-between">
                                                Tax collected:
                                                <span className="text-dark-emphasis fw-medium">$73.40</span>
                                            </li>
                                            <li className="d-flex justify-content-between">
                                                Shipping:
                                                <span className="text-dark-emphasis fw-medium">$16.50</span>
                                            </li>
                                        </ul>
                                        <div className="border-top pt-4 mt-4">
                                            <div className="d-flex justify-content-between mb-3">
                                                <span className="fs-sm">Estimated total:</span>
                                                <span className="h5 mb-0">$2,406.90</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-body-tertiary rounded-5 p-4">
                                    <div className="d-flex align-items-center px-sm-2 px-lg-0 px-xl-2">
                                        <svg className="text-warning flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor">
                                            <path d="M1.333 9.667H7.5V16h-5c-.64 0-1.167-.527-1.167-1.167V9.667zm13.334 0v5.167c0 .64-.527 1.167-1.167 1.167h-5V9.667h6.167zM0 5.833V7.5c0 .64.527 1.167 1.167 1.167h.167H7.5v-1-3H1.167C.527 4.667 0 5.193 0 5.833zm14.833-1.166H8.5v3 1h6.167.167C15.473 8.667 16 8.14 16 7.5V5.833c0-.64-.527-1.167-1.167-1.167z">
                                            </path>
                                            <path d="M8 5.363a.5.5 0 0 1-.495-.573C7.752 3.123 9.054-.03 12.219-.03c1.807.001 2.447.977 2.447 1.813 0 1.486-2.069 3.58-6.667 3.58zM12.219.971c-2.388 0-3.295 2.27-3.595 3.377 1.884-.088 3.072-.565 3.756-.971.949-.563 1.287-1.193 1.287-1.595 0-.599-.747-.811-1.447-.811z">
                                            </path>
                                            <path d="M8.001 5.363c-4.598 0-6.667-2.094-6.667-3.58 0-.836.641-1.812 2.448-1.812 3.165 0 4.467 3.153 4.713 4.819a.5.5 0 0 1-.495.573zM3.782.971c-.7 0-1.448.213-1.448.812 0 .851 1.489 2.403 5.042 2.566C7.076 3.241 6.169.971 3.782.971z">
                                            </path>
                                        </svg>
                                        <div className="text-dark-emphasis fs-sm ps-2 ms-1">Congratulations! You have earned <span className="fw-semibold">240 bonuses</span></div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>

            <>
                {/* Fixed positioned pay button that is visible on screens < 992px wide (lg breakpoint) */}
                <div className="fixed-bottom z-sticky w-100 py-2 px-3 bg-body border-top shadow d-lg-none1">
                    <a
                        className="btn btn-lg btn-primary w-100"
                        href="checkout-v1-shipping.html"
                    >
                        Continue
                        <i className="ci-chevron-right fs-lg ms-1 me-n1" />
                    </a>
                </div>
            </>

        </>
    )
}

export default Checkout
