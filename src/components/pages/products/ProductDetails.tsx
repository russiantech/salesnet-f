import React from 'react'

const ProductDetails = () => {
    return (
        <>
            <div>
                <main className="content-wrapper">
                    <section className="container pb-2 pb-sm-3 pb-md-4 pb-lg-5 mb-xxl-3">
                        <ol className="breadcrumb pt-3 mt-2 mt-md-3 mb-md-4">
                            <li className="breadcrumb-item">
                                <a href="home-marketplace.html">Home</a>
                            </li>
                            <li className="breadcrumb-item">
                                <a href="shop-catalog-marketplace.html">Pages</a>
                            </li>
                            <li aria-current="page" className="breadcrumb-item active">
                                products
                            </li>
                        </ol>
                        <div className="row">
                            <div className="col-lg-8 col-xl-9">
                                <h1 className="h3 mb-sm-4">
                                    A stunning Techa pro mockups for products.
                                </h1>
                                <div className="d-flex flex-column flex-md-row align-items-md-center gap-3 gap-md-4">
                                    <div className="nav align-items-center gap-2 fs-sm">
                                        <a
                                            className="nav-link text-body gap-1 p-0"
                                            href="shop-catalog-marketplace.html">
                                            <div
                                                className="flex-shrink-0 border rounded-circle"
                                                style={{
                                                    width: "32px",
                                                }}>
                                                <div className="ratio ratio-1x1 rounded-circle overflow-hidden">
                                                    <img alt="Avatar" src="assets/img/us/logos/favicon.svg" />
                                                </div>
                                            </div>
                                            Salesnet
                                        </a>
                                        <div className="text-body-secondary">in</div>
                                        <a
                                            className="nav-link text-body p-0"
                                            href="shop-catalog-marketplace.html">
                                            development
                                        </a>
                                    </div>
                                    <div className="d-flex justify-content-between flex-grow-1 gap-4">
                                        <span className="badge rounded-pill text-info bg-info-subtle d-inline-flex align-items-center fs-sm">
                                            65 sales
                                        </span>
                                        <div className="d-flex gap-2">
                                            <button
                                                className="btn btn-sm btn-info rounded-pill animate-pulse text-info bg-info-subtle "
                                                type="button">
                                                <i className="ci-shopping-cart animate-target fs-sm ms-n1 me-1" />
                                                Basket
                                            </button>
                                            <button
                                                className="btn btn-sm btn-secondary rounded-pill animate-pulse"
                                                type="button">
                                                <i className="ci-heart animate-target fs-sm ms-n1 me-1" />
                                                12
                                            </button>
                                            <a
                                                className="btn btn-sm btn-secondary rounded-pill animate-scale"
                                                href="#comments">
                                                <i className="ci-message-circle animate-target fs-sm ms-n1 me-1" />
                                                3
                                            </a>
                                            <div className="dropdown">
                                                <button
                                                    aria-expanded="false"
                                                    aria-label="Share"
                                                    className="btn btn-icon btn-sm btn-secondary animate-scale rounded-circle"
                                                    data-bs-toggle="dropdown"
                                                    type="button">
                                                    <i className="ci-share-2 animate-target fs-sm" />
                                                </button>
                                                <ul
                                                    className="dropdown-menu dropdown-menu-end"
                                                    style={{
                                                        "--cz-dropdown-min-width": "8.5rem",
                                                    }}>
                                                    <li>
                                                        <a className="dropdown-item" href="#!">
                                                            <i className="ci-facebook fs-base me-2" />
                                                            Facebook
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#!">
                                                            <i className="ci-instagram fs-base me-2" />
                                                            Instagram
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            <i className="ci-linkedin fs-base me-2" />
                                                            LinkedIn
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row pb-5 pt-4">
                            <div className="col-lg-8 col-xl-9">
                                <div className="vstack gap-3">
                                    <a
                                        className="hover-effect-scale hover-effect-opacity position-relative d-flex rounded-4 overflow-hidden"
                                        data-gallery="product-gallery"
                                        data-glightbox=""
                                        href="assets/img/pages/products/01.jpg">
                                        <i className="ci-zoom-in hover-effect-target fs-3 text-white position-absolute top-50 start-50 translate-middle opacity-0 z-2" />
                                        <div
                                            className="ratio hover-effect-target bg-body-tertiary"
                                            style={{
                                                "--cz-aspect-ratio": "calc(640 / 966 * 100%)",
                                            }}>
                                            <img alt="Image" src="assets/img/pages/products/01.jpg" />
                                        </div>
                                    </a>
                                    <div className="row row-cols-2 g-3">
                                        <div className="col">
                                            <a
                                                className="hover-effect-scale hover-effect-opacity position-relative d-flex rounded-4 overflow-hidden"
                                                data-gallery="product-gallery"
                                                data-glightbox=""
                                                href="assets/img/pages/products/02.jpg">
                                                <i className="ci-zoom-in hover-effect-target fs-3 text-white position-absolute top-50 start-50 translate-middle opacity-0 z-2" />
                                                <div className="ratio ratio-1x1 hover-effect-target bg-body-tertiary">
                                                    <img alt="Image" src="assets/img/pages/products/th02.jpg" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a
                                                className="hover-effect-scale hover-effect-opacity position-relative d-flex rounded-4 overflow-hidden"
                                                data-gallery="product-gallery"
                                                data-glightbox=""
                                                href="assets/img/pages/products/03.jpg">
                                                <i className="ci-zoom-in hover-effect-target fs-3 text-white position-absolute top-50 start-50 translate-middle opacity-0 z-2" />
                                                <div className="ratio ratio-1x1 hover-effect-target bg-body-tertiary">
                                                    <img alt="Image" src="assets/img/pages/products/th03.jpg" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <a
                                        className="hover-effect-scale hover-effect-opacity position-relative d-flex rounded-4 overflow-hidden"
                                        data-gallery="product-gallery"
                                        data-glightbox=""
                                        href="assets/img/pages/products/04.jpg">
                                        <i className="ci-zoom-in hover-effect-target fs-3 text-white position-absolute top-50 start-50 translate-middle opacity-0 z-2" />
                                        <div
                                            className="ratio hover-effect-target bg-body-tertiary"
                                            style={{
                                                "--cz-aspect-ratio": "calc(640 / 966 * 100%)",
                                            }}>
                                            <img alt="Image" src="assets/img/pages/products/04.jpg" />
                                        </div>
                                    </a>
                                </div>
                                <section className="container pt-5 mt-2 mt-sm-3 mt-lg-4 mt-xl-5">
                                    <ul
                                        className="nav nav-underline flex-nowrap border-bottom"
                                        role="tablist">
                                        <li className="nav-item me-md-1" role="presentation">
                                            <button
                                                aria-controls="description-tab-pane"
                                                aria-selected="true"
                                                className="nav-link active badge rounded-pill text-info bg-info-subtle p-2"
                                                data-bs-target="#description-tab-pane"
                                                data-bs-toggle="tab"
                                                id="description-tab"
                                                role="tab"
                                                type="button">
                                                Description
                                            </button>
                                        </li>
                                        <li className="nav-item me-md-1" role="presentation">
                                            <button
                                                aria-controls="delivery-tab-pane"
                                                aria-selected="false"
                                                className="nav-link badge rounded-pill text-info bg-info-subtle p-2"
                                                data-bs-target="#delivery-tab-pane"
                                                data-bs-toggle="tab"
                                                id="delivery-tab"
                                                role="tab"
                                                tabIndex="-1"
                                                type="button">
                                                Delivery
                                                <span className="d-none d-md-inline"> and returns</span>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                aria-controls="reviews-tab-pane"
                                                aria-selected="false"
                                                className="nav-link badge rounded-pill text-info bg-info-subtle p-2"
                                                data-bs-target="#reviews-tab-pane"
                                                data-bs-toggle="tab"
                                                id="reviews-tab"
                                                role="tab"
                                                tabIndex="-1"
                                                type="button">
                                                Reviews
                                                <span className="d-none d-md-inline"> (23)</span>
                                            </button>
                                        </li>
                                    </ul>
                                    <div className="tab-content pt-4 mt-sm-1 mt-md-3">
                                        <div
                                            aria-labelledby="description-tab"
                                            className="tab-pane fade active show"
                                            id="description-tab-pane"
                                            role="tabpanel">
                                            <div className="row">
                                                <h2 className="h4 pt-2 mt-md-2 mb-lg-2">Overview</h2>
                                                <p>
                                                    Elevate your presentations and design projects with this
                                                    meticulously crafted set of Tablet Pro Mockups. Designed
                                                    with professionals in mind, these mockups are perfect for
                                                    showcasing your apps, websites, or digital products in a
                                                    sleek and modern way. Here's what makes this set stand out.
                                                </p>
                                                <p className="mb-0">
                                                    This Tablet Pro Mockup Set is an essential tool for
                                                    designers who want to present their work professionally and
                                                    impress clients or audiences with stunning, high-quality
                                                    visuals.
                                                </p>
                                                <h2 className="h4 pt-5 mt-md-2 mb-lg-4">Highlights</h2>
                                                <ul className="mb-0">
                                                    <li>
                                                        The set includes a variety of angles and perspectives
                                                    </li>
                                                    <li>
                                                        Easily insert your designs into the mockups using smart
                                                        objects in Adobe Photoshop
                                                    </li>
                                                    <li>
                                                        These mockups feature professionally crafted lighting and
                                                        shadow effects
                                                    </li>
                                                    <li>
                                                        The backgrounds of these mockups are fully customizable
                                                    </li>
                                                    <li>
                                                        Choose from different color options for the tablet device
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div
                                            aria-labelledby="delivery-tab"
                                            className="tab-pane fade fs-sm"
                                            id="delivery-tab-pane"
                                            role="tabpanel">
                                            <div className="row row-cols-1 row-cols-md-2">
                                                <div className="col mb-3 mb-md-0">
                                                    <div className="pe-lg-2 pe-xl-3">
                                                        <h6>Delivery</h6>
                                                        <p>
                                                            We strive to deliver your denim midi skirt with pockets
                                                            to you as quickly as possible. Our estimated delivery
                                                            times are as follows:
                                                        </p>
                                                        <ul className="list-unstyled">
                                                            <li>
                                                                Standard delivery:{" "}
                                                                <span className="text-dark-emphasis fw-semibold">
                                                                    Within 3-7 business days
                                                                </span>
                                                            </li>
                                                            <li>
                                                                Express delivery:{" "}
                                                                <span className="text-dark-emphasis fw-semibold">
                                                                    Within 1-3 business days
                                                                </span>
                                                            </li>
                                                        </ul>
                                                        <p>
                                                            Please note that delivery times may vary depending on
                                                            your location and any ongoing promotions or holidays.
                                                            You can track your order using the provided tracking
                                                            number once your package has been dispatched.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="ps-lg-2 ps-xl-3">
                                                        <h6>Returns</h6>
                                                        <p>
                                                            We want you to be completely satisfied with your denim
                                                            midi skirt with pockets. If for any reason you are not
                                                            happy with your purchase, you can return it within 30
                                                            days of receiving your order for a full refund or
                                                            exchange.
                                                        </p>
                                                        <p>
                                                            To be eligible for a return, the skirt must be unused,
                                                            unwashed, and in its original condition with tags
                                                            attached. Please ensure that all packaging is intact
                                                            when returning the item.
                                                        </p>
                                                        <p className="mb-0">
                                                            To initiate a return, please contact our customer
                                                            service team with your order number and reason for the
                                                            return. We will provide you with a return shipping label
                                                            and instructions on how to proceed. Please note that
                                                            shipping fees are non-refundable.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            aria-labelledby="reviews-tab"
                                            className="tab-pane fade"
                                            id="reviews-tab-pane"
                                            role="tabpanel">
                                            <div className="d-sm-flex align-items-center justify-content-between border-bottom pb-2 pb-sm-3">
                                                <div className="mb-3 me-sm-3">
                                                    <h2 className="h5 pb-2 mb-1">Customer reviews</h2>
                                                    <div className="d-flex align-items-center text-body-secondary fs-sm">
                                                        <div className="d-flex gap-1 me-2">
                                                            <i className="ci-star-filled text-warning" />
                                                            <i className="ci-star-filled text-warning" />
                                                            <i className="ci-star-filled text-warning" />
                                                            <i className="ci-star-filled text-warning" />
                                                            <i className="ci-star text-body-tertiary opacity-75" />
                                                        </div>
                                                        Based on 23 reviews
                                                    </div>
                                                </div>
                                                <button
                                                    className="btn btn-outline-dark mb-3"
                                                    data-bs-target="#reviewForm"
                                                    data-bs-toggle="modal"
                                                    type="button">
                                                    Leave a review
                                                </button>
                                            </div>
                                            <div className="bg-body-tertiary rounded-4 p-4 p-sm-5">
                                                <div className="vstack gap-3 gap-md-4 mt-n3">
                                                    <div className="mt-3">
                                                        <div className="d-flex align-items-center justify-content-between gap-3 mb-3">
                                                            <div className="d-flex align-items-center">
                                                                <div
                                                                    className="ratio ratio-1x1 flex-shrink-0 bg-body-secondary rounded-circle overflow-hidden"
                                                                    style={{
                                                                        width: "40px",
                                                                    }}>
                                                                    <img
                                                                        alt="Avatar"
                                                                        src="assets/img/pages/products/comments/01.jpg"
                                                                    />
                                                                </div>
                                                                <div className="ps-2 ms-1">
                                                                    <div className="fs-sm fw-semibold text-dark-emphasis mb-1">
                                                                        Randy Walker
                                                                    </div>
                                                                    <div className="fs-xs text-body-secondary">
                                                                        October 28, 2024
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex gap-2">
                                                                <button
                                                                    className="btn btn-sm btn-secondary bg-body border-0 animate-pulse rounded-pill"
                                                                    type="button">
                                                                    <i className="ci-heart animate-target fs-sm ms-n1 me-1" />
                                                                    12
                                                                </button>
                                                                <button
                                                                    aria-label="Reply"
                                                                    className="btn btn-icon btn-sm btn-secondary bg-body border-0 animate-slide-end rounded-circle"
                                                                    type="button">
                                                                    <i className="ci-corner-up-right animate-target fs-sm" />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <p className="fs-sm mb-0">
                                                            This set of Tablet Pro mockups exceeded my expectations!
                                                            The high resolution and attention to detail make my
                                                            designs look incredibly polished. The smart objects make
                                                            editing a breeze, and the realistic lighting adds a
                                                            professional touch to all my presentations. Highly
                                                            recommend it for anyone serious about their design work.
                                                        </p>
                                                    </div>
                                                    <div className="mt-3">
                                                        <div className="d-flex align-items-center justify-content-between gap-3 mb-3">
                                                            <div className="d-flex align-items-center">
                                                                <div
                                                                    className="ratio ratio-1x1 flex-shrink-0 bg-body-secondary rounded-circle overflow-hidden"
                                                                    style={{
                                                                        width: "40px",
                                                                    }}>
                                                                    <img
                                                                        alt="Avatar"
                                                                        src="assets/img/pages/products/comments/02.jpg"
                                                                    />
                                                                </div>
                                                                <div className="ps-2 ms-1">
                                                                    <div className="fs-sm fw-semibold text-dark-emphasis mb-1">
                                                                        Daniel Adams
                                                                    </div>
                                                                    <div className="fs-xs text-body-secondary">
                                                                        August 15, 2024
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex gap-2">
                                                                <button
                                                                    className="btn btn-sm btn-secondary bg-body border-0 animate-pulse rounded-pill"
                                                                    type="button">
                                                                    <i className="ci-heart animate-target fs-sm ms-n1 me-1" />
                                                                    6
                                                                </button>
                                                                <button
                                                                    aria-label="Reply"
                                                                    className="btn btn-icon btn-sm btn-secondary bg-body border-0 animate-slide-end rounded-circle"
                                                                    type="button">
                                                                    <i className="ci-corner-up-right animate-target fs-sm" />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <p className="fs-sm mb-0">
                                                            I've used a lot of mockups, but these are some of the
                                                            best. The variety of angles and perspectives really
                                                            helped me showcase my app from different viewpoints.
                                                            Plus, the customizable backgrounds are a fantastic
                                                            feature—I could easily match the mockups to my brand
                                                            colors. A must-have for designers!
                                                        </p>
                                                    </div>
                                                    <div className="mt-3">
                                                        <div className="d-flex align-items-center justify-content-between gap-3 mb-3">
                                                            <div className="d-flex align-items-center">
                                                                <div
                                                                    className="ratio ratio-1x1 flex-shrink-0 bg-body-secondary rounded-circle overflow-hidden"
                                                                    style={{
                                                                        width: "40px",
                                                                    }}>
                                                                    <img
                                                                        alt="Avatar"
                                                                        src="assets/img/pages/products/comments/03.jpg"
                                                                    />
                                                                </div>
                                                                <div className="ps-2 ms-1">
                                                                    <div className="fs-sm fw-semibold text-dark-emphasis mb-1">
                                                                        Darrell Steward
                                                                    </div>
                                                                    <div className="fs-xs text-body-secondary">
                                                                        June 2, 2024
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex gap-2">
                                                                <button
                                                                    className="btn btn-sm btn-secondary bg-body border-0 animate-pulse rounded-pill"
                                                                    type="button">
                                                                    <i className="ci-heart animate-target fs-sm ms-n1 me-1" />
                                                                    19
                                                                </button>
                                                                <button
                                                                    aria-label="Reply"
                                                                    className="btn btn-icon btn-sm btn-secondary bg-body border-0 animate-slide-end rounded-circle"
                                                                    type="button">
                                                                    <i className="ci-corner-up-right animate-target fs-sm" />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <p className="fs-sm mb-0">
                                                            The quality of these mockups is superb, and they're
                                                            incredibly easy to use. The only thing I'd love to see
                                                            is a few more device color options to match different
                                                            product lines. Other than that, it's a fantastic set
                                                            that's well worth the investment.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <nav
                                                aria-label="Reviews pagination"
                                                className="mt-3 pt-2 pt-md-3">
                                                <ul className="pagination">
                                                    <li aria-current="page" className="page-item active">
                                                        <span className="page-link">
                                                            1<span className="visually-hidden">(current)</span>
                                                        </span>
                                                    </li>
                                                    <li className="page-item">
                                                        <a className="page-link" href="#!">
                                                            2
                                                        </a>
                                                    </li>
                                                    <li className="page-item">
                                                        <a className="page-link" href="#!">
                                                            3
                                                        </a>
                                                    </li>
                                                    <li className="page-item">
                                                        <a className="page-link" href="#!">
                                                            4
                                                        </a>
                                                    </li>
                                                    <li className="page-item">
                                                        <span className="page-link pe-none">...</span>
                                                    </li>
                                                    <li className="page-item">
                                                        <a className="page-link" href="#!">
                                                            6
                                                        </a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </section>
                                <h2 className="h4 d-lg-none pt-5 mt-md-2 mb-lg-4">Tags</h2>
                                <div className="d-flex d-lg-none flex-wrap gap-2 mt-n1">
                                    <a
                                        className="badge fs-sm text-body-emphasis bg-body-secondary text-decoration-none mt-1 me-1"
                                        href="#!">
                                        mockup tablet
                                    </a>
                                    <a
                                        className="badge fs-sm text-body-emphasis bg-body-secondary text-decoration-none mt-1 me-1"
                                        href="#!">
                                        device mockup
                                    </a>
                                    <a
                                        className="badge fs-sm text-body-emphasis bg-body-secondary text-decoration-none mt-1 me-1"
                                        href="#!">
                                        screen
                                    </a>
                                    <a
                                        className="badge fs-sm text-body-emphasis bg-body-secondary text-decoration-none mt-1 me-1"
                                        href="#!">
                                        application
                                    </a>
                                    <a
                                        className="badge fs-sm text-body-emphasis bg-body-secondary text-decoration-none mt-1 me-1"
                                        href="#!">
                                        app mockup
                                    </a>
                                    <a
                                        className="badge fs-sm text-body-emphasis bg-body-secondary text-decoration-none mt-1 me-1"
                                        href="#!">
                                        mobile
                                    </a>
                                    <a
                                        className="badge fs-sm text-body-emphasis bg-body-secondary text-decoration-none mt-1 me-1"
                                        href="#!">
                                        ui/ux
                                    </a>
                                    <a
                                        className="badge fs-sm text-body-emphasis bg-body-secondary text-decoration-none mt-1 me-1"
                                        href="#!">
                                        placeholder
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="container pb-4 pb-md-5 mb-2 mb-sm-0 mb-lg-2 mb-xl-4">
                        <h2 className="h3 border-bottom pb-4 mb-0">Viewed products</h2>
                        <div className="position-relative mx-md-1">
                            <button
                                aria-controls="swiper-wrapper-2679edeb69713639"
                                aria-label="Previous slide"
                                className="viewed-prev btn btn-prev btn-icon btn-outline-secondary bg-body rounded-circle animate-slide-start position-absolute top-50 start-0 z-2 translate-middle-y ms-n1 d-none d-sm-inline-flex"
                                tabIndex="0"
                                type="button">
                                <i className="ci-chevron-left fs-lg animate-target" />
                            </button>
                            <button
                                aria-controls="swiper-wrapper-2679edeb69713639"
                                aria-label="Next slide"
                                className="viewed-next btn btn-next btn-icon btn-outline-secondary bg-body rounded-circle animate-slide-end position-absolute top-50 end-0 z-2 translate-middle-y me-n1 d-none d-sm-inline-flex"
                                tabIndex="0"
                                type="button">
                                <i className="ci-chevron-right fs-lg animate-target" />
                            </button>
                            <div
                                className="swiper py-4 px-sm-3 swiper-initialized swiper-horizontal swiper-backface-hidden"
                                data-swiper='{                "slidesPerView": 2,                "spaceBetween": 24,                "loop": true,                "navigation": {                  "prevEl": ".viewed-prev",                  "nextEl": ".viewed-next"                },                "breakpoints": {                  "768": {                    "slidesPerView": 3                  },                  "992": {                    "slidesPerView": 4                  }                }              }'>
                                <div
                                    aria-live="polite"
                                    className="swiper-wrapper"
                                    id="swiper-wrapper-2679edeb69713639"
                                    style={{
                                        transform: "translate3d(-274px, 0px, 0px)",
                                        transitionDelay: "0ms",
                                        transitionDuration: "0ms",
                                    }}>
                                    <div
                                        aria-label="1 / 5"
                                        className="swiper-slide swiper-slide-prev"
                                        data-swiper-slide-index="0"
                                        role="group"
                                        style={{
                                            marginRight: "24px",
                                            width: "250px",
                                        }}>
                                        <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
                                            <div className="position-relative">
                                                <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
                                                    <div className="d-flex flex-column gap-2">
                                                        <button
                                                            aria-label="Add to Wishlist"
                                                            className="btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex"
                                                            type="button">
                                                            <i className="ci-heart fs-base animate-target" />
                                                        </button>
                                                        <button
                                                            aria-label="Compare"
                                                            className="btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex"
                                                            type="button">
                                                            <i className="ci-refresh-cw fs-base animate-target" />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
                                                    <button
                                                        aria-expanded="false"
                                                        aria-label="More actions"
                                                        className="btn btn-icon btn-sm btn-secondary bg-body"
                                                        data-bs-toggle="dropdown"
                                                        type="button">
                                                        <i className="ci-more-vertical fs-lg" />
                                                    </button>
                                                    <ul
                                                        className="dropdown-menu dropdown-menu-end fs-xs p-2"
                                                        style={{
                                                            minWidth: "auto",
                                                        }}>
                                                        <li>
                                                            <a className="dropdown-item" href="#!">
                                                                <i className="ci-heart fs-sm ms-n1 me-2" />
                                                                Add to Wishlist
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="#!">
                                                                <i className="ci-refresh-cw fs-sm ms-n1 me-2" />
                                                                Compare
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <a
                                                    className="d-block rounded-top overflow-hidden p-3 p-sm-4"
                                                    href="#!">
                                                    <div
                                                        className="ratio"
                                                        style={{
                                                            "--cz-aspect-ratio": "calc(240 / 258 * 100%)",
                                                        }}>
                                                        <img
                                                            alt="Dualsense Edge"
                                                            src="assets/img/shop/electronics/13.png"
                                                        />
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
                                                <div className="d-flex align-items-center gap-2 mb-2">
                                                    <div className="d-flex gap-1 fs-xs">
                                                        <i className="ci-star-filled text-warning" />
                                                        <i className="ci-star-filled text-warning" />
                                                        <i className="ci-star-filled text-warning" />
                                                        <i className="ci-star-filled text-warning" />
                                                        <i className="ci-star-filled text-warning" />
                                                    </div>
                                                    <span className="text-body-tertiary fs-xs">(187)</span>
                                                </div>
                                                <h3 className="pb-1 mb-2">
                                                    <a
                                                        className="d-block fs-sm fw-medium text-truncate"
                                                        href="#!">
                                                        <span className="animate-target">
                                                            Sony Dualsense Edge Controller
                                                        </span>
                                                    </a>
                                                </h3>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="h5 lh-1 mb-0">$200.00</div>
                                                    <button
                                                        aria-label="Add to Cart"
                                                        className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2"
                                                        type="button">
                                                        <i className="ci-shopping-cart fs-base animate-target" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        aria-label="2 / 5"
                                        className="swiper-slide swiper-slide-active"
                                        data-swiper-slide-index="1"
                                        role="group"
                                        style={{
                                            marginRight: "24px",
                                            width: "250px",
                                        }}>
                                        <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
                                            <div className="position-relative">
                                                <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
                                                    <div className="d-flex flex-column gap-2">
                                                        <button
                                                            aria-label="Add to Wishlist"
                                                            className="btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex"
                                                            type="button">
                                                            <i className="ci-heart fs-base animate-target" />
                                                        </button>
                                                        <button
                                                            aria-label="Compare"
                                                            className="btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex"
                                                            type="button">
                                                            <i className="ci-refresh-cw fs-base animate-target" />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
                                                    <button
                                                        aria-expanded="false"
                                                        aria-label="More actions"
                                                        className="btn btn-icon btn-sm btn-secondary bg-body"
                                                        data-bs-toggle="dropdown"
                                                        type="button">
                                                        <i className="ci-more-vertical fs-lg" />
                                                    </button>
                                                    <ul
                                                        className="dropdown-menu dropdown-menu-end fs-xs p-2"
                                                        style={{
                                                            minWidth: "auto",
                                                        }}>
                                                        <li>
                                                            <a className="dropdown-item" href="#!">
                                                                <i className="ci-heart fs-sm ms-n1 me-2" />
                                                                Add to Wishlist
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="#!">
                                                                <i className="ci-refresh-cw fs-sm ms-n1 me-2" />
                                                                Compare
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <a
                                                    className="d-block rounded-top overflow-hidden p-3 p-sm-4"
                                                    href="#!">
                                                    <span className="badge bg-danger position-absolute top-0 start-0 mt-2 ms-2 mt-lg-3 ms-lg-3">
                                                        -17%
                                                    </span>
                                                    <div
                                                        className="ratio"
                                                        style={{
                                                            "--cz-aspect-ratio": "calc(240 / 258 * 100%)",
                                                        }}>
                                                        <img
                                                            alt="Nikon Camera"
                                                            src="assets/img/shop/electronics/11.png"
                                                        />
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
                                                <div className="d-flex align-items-center gap-2 mb-2">
                                                    <div className="d-flex gap-1 fs-xs">
                                                        <i className="ci-star-filled text-warning" />
                                                        <i className="ci-star-filled text-warning" />
                                                        <i className="ci-star-filled text-warning" />
                                                        <i className="ci-star-filled text-warning" />
                                                        <i className="ci-star-filled text-warning" />
                                                    </div>
                                                    <span className="text-body-tertiary fs-xs">(14)</span>
                                                </div>
                                                <h3 className="pb-1 mb-2">
                                                    <a
                                                        className="d-block fs-sm fw-medium text-truncate"
                                                        href="#!">
                                                        <span className="animate-target">
                                                            VRB01 Camera Nikon Max
                                                        </span>
                                                    </a>
                                                </h3>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="h5 lh-1 mb-0">
                                                        $652.00{" "}
                                                        <del className="text-body-tertiary fs-sm fw-normal">
                                                            $785.00
                                                        </del>
                                                    </div>
                                                    <button
                                                        aria-label="Add to Cart"
                                                        className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2"
                                                        type="button">
                                                        <i className="ci-shopping-cart fs-base animate-target" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        aria-label="3 / 5"
                                        className="swiper-slide swiper-slide-next"
                                        data-swiper-slide-index="2"
                                        role="group"
                                        style={{
                                            marginRight: "24px",
                                            width: "250px",
                                        }}>
                                        <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
                                            <div className="position-relative">
                                                <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
                                                    <div className="d-flex flex-column gap-2">
                                                        <button
                                                            aria-label="Add to Wishlist"
                                                            className="btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex"
                                                            type="button">
                                                            <i className="ci-heart fs-base animate-target" />
                                                        </button>
                                                        <button
                                                            aria-label="Compare"
                                                            className="btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex"
                                                            type="button">
                                                            <i className="ci-refresh-cw fs-base animate-target" />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
                                                    <button
                                                        aria-expanded="false"
                                                        aria-label="More actions"
                                                        className="btn btn-icon btn-sm btn-secondary bg-body"
                                                        data-bs-toggle="dropdown"
                                                        type="button">
                                                        <i className="ci-more-vertical fs-lg" />
                                                    </button>
                                                    <ul
                                                        className="dropdown-menu dropdown-menu-end fs-xs p-2"
                                                        style={{
                                                            minWidth: "auto",
                                                        }}>
                                                        <li>
                                                            <a className="dropdown-item" href="#!">
                                                                <i className="ci-heart fs-sm ms-n1 me-2" />
                                                                Add to Wishlist
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="#!">
                                                                <i className="ci-refresh-cw fs-sm ms-n1 me-2" />
                                                                Compare
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <a
                                                    className="d-block rounded-top overflow-hidden p-3 p-sm-4"
                                                    href="#!">
                                                    <div
                                                        className="ratio"
                                                        style={{
                                                            "--cz-aspect-ratio": "calc(240 / 258 * 100%)",
                                                        }}>
                                                        <img
                                                            alt="iPhone 14"
                                                            src="assets/img/shop/electronics/10.png"
                                                        />
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
                                                <div className="d-flex align-items-center gap-2 mb-2">
                                                    <div className="d-flex gap-1 fs-xs">
                                                        <i className="ci-star-filled text-warning" />
                                                        <i className="ci-star-filled text-warning" />
                                                        <i className="ci-star-filled text-warning" />
                                                        <i className="ci-star-filled text-warning" />
                                                        <i className="ci-star-half text-warning" />
                                                    </div>
                                                    <span className="text-body-tertiary fs-xs">(335)</span>
                                                </div>
                                                <h3 className="pb-1 mb-2">
                                                    <a
                                                        className="d-block fs-sm fw-medium text-truncate"
                                                        href="#!">
                                                        <span className="animate-target">
                                                            Apple iPhone 14 128GB Blue
                                                        </span>
                                                    </a>
                                                </h3>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="h5 lh-1 mb-0">$899.00</div>
                                                    <button
                                                        aria-label="Add to Cart"
                                                        className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2"
                                                        type="button">
                                                        <i className="ci-shopping-cart fs-base animate-target" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        aria-label="4 / 5"
                                        className="swiper-slide"
                                        data-swiper-slide-index="3"
                                        role="group"
                                        style={{
                                            marginRight: "24px",
                                            width: "250px",
                                        }}>
                                        <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
                                            <div className="posittion-relative">
                                                <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
                                                    <div className="d-flex flex-column gap-2">
                                                        <button
                                                            aria-label="Add to Wishlist"
                                                            className="btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex"
                                                            type="button">
                                                            <i className="ci-heart fs-base animate-target" />
                                                        </button>
                                                        <button
                                                            aria-label="Compare"
                                                            className="btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex"
                                                            type="button">
                                                            <i className="ci-refresh-cw fs-base animate-target" />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
                                                    <button
                                                        aria-expanded="false"
                                                        aria-label="More actions"
                                                        className="btn btn-icon btn-sm btn-secondary bg-body"
                                                        data-bs-toggle="dropdown"
                                                        type="button">
                                                        <i className="ci-more-vertical fs-lg" />
                                                    </button>
                                                    <ul
                                                        className="dropdown-menu dropdown-menu-end fs-xs p-2"
                                                        style={{
                                                            minWidth: "auto",
                                                        }}>
                                                        <li>
                                                            <a className="dropdown-item" href="#!">
                                                                <i className="ci-heart fs-sm ms-n1 me-2" />
                                                                Add to Wishlist
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="#!">
                                                                <i className="ci-refresh-cw fs-sm ms-n1 me-2" />
                                                                Compare
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <a
                                                    className="d-block rounded-top overflow-hidden p-3 p-sm-4"
                                                    href="#!">
                                                    <div
                                                        className="ratio"
                                                        style={{
                                                            "--cz-aspect-ratio": "calc(240 / 258 * 100%)",
                                                        }}>
                                                        <img
                                                            alt="iPad Pro"
                                                            src="assets/img/shop/electronics/07.png"
                                                        />
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
                                                <div className="d-flex align-items-center gap-2 mb-2">
                                                    <div className="d-flex gap-1 fs-xs">
                                                        <i className="ci-star-filled text-warning" />
                                                        <i className="ci-star-filled text-warning" />
                                                        <i className="ci-star-filled text-warning" />
                                                        <i className="ci-star-filled text-warning" />
                                                        <i className="ci-star-half text-warning" />
                                                    </div>
                                                    <span className="text-body-tertiary fs-xs">(49)</span>
                                                </div>
                                                <h3 className="pb-1 mb-2">
                                                    <a
                                                        className="d-block fs-sm fw-medium text-truncate"
                                                        href="#!">
                                                        <span className="animate-target">
                                                            Tablet Apple iPad Pro M1
                                                        </span>
                                                    </a>
                                                </h3>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="h5 lh-1 mb-0">$739.00</div>
                                                    <button
                                                        aria-label="Add to Cart"
                                                        className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2"
                                                        type="button">
                                                        <i className="ci-shopping-cart fs-base animate-target" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        aria-label="5 / 5"
                                        className="swiper-slide"
                                        data-swiper-slide-index="4"
                                        role="group"
                                        style={{
                                            marginRight: "24px",
                                            width: "250px",
                                        }}>
                                        <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
                                            <div className="position-relative">
                                                <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
                                                    <div className="d-flex flex-column gap-2">
                                                        <button
                                                            aria-label="Add to Wishlist"
                                                            className="btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex"
                                                            type="button">
                                                            <i className="ci-heart fs-base animate-target" />
                                                        </button>
                                                        <button
                                                            aria-label="Compare"
                                                            className="btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex"
                                                            type="button">
                                                            <i className="ci-refresh-cw fs-base animate-target" />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
                                                    <button
                                                        aria-expanded="false"
                                                        aria-label="More actions"
                                                        className="btn btn-icon btn-sm btn-secondary bg-body"
                                                        data-bs-toggle="dropdown"
                                                        type="button">
                                                        <i className="ci-more-vertical fs-lg" />
                                                    </button>
                                                    <ul
                                                        className="dropdown-menu dropdown-menu-end fs-xs p-2"
                                                        style={{
                                                            minWidth: "auto",
                                                        }}>
                                                        <li>
                                                            <a className="dropdown-item" href="#!">
                                                                <i className="ci-heart fs-sm ms-n1 me-2" />
                                                                Add to Wishlist
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="#!">
                                                                <i className="ci-refresh-cw fs-sm ms-n1 me-2" />
                                                                Compare
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <a
                                                    className="d-block rounded-top overflow-hidden p-3 p-sm-4"
                                                    href="#!">
                                                    <div
                                                        className="ratio"
                                                        style={{
                                                            "--cz-aspect-ratio": "calc(240 / 258 * 100%)",
                                                        }}>
                                                        <img
                                                            alt="AirPods 2"
                                                            src="assets/img/shop/electronics/06.png"
                                                        />
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
                                                <div className="d-flex align-items-center gap-2 mb-2">
                                                    <div className="d-flex gap-1 fs-xs">
                                                        <i className="ci-star-filled text-warning" />
                                                        <i className="ci-star-filled text-warning" />
                                                        <i className="ci-star-filled text-warning" />
                                                        <i className="ci-star-filled text-warning" />
                                                        <i className="ci-star text-body-tertiary opacity-75" />
                                                    </div>
                                                    <span className="text-body-tertiary fs-xs">(78)</span>
                                                </div>
                                                <h3 className="pb-1 mb-2">
                                                    <a
                                                        className="d-block fs-sm fw-medium text-truncate"
                                                        href="#!">
                                                        <span className="animate-target">
                                                            Headphones Apple AirPods 2 Pro
                                                        </span>
                                                    </a>
                                                </h3>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="h5 lh-1 mb-0">$224.00</div>
                                                    <button
                                                        aria-label="Add to Cart"
                                                        className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2"
                                                        type="button">
                                                        <i className="ci-shopping-cart fs-base animate-target" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span
                                    aria-atomic="true"
                                    aria-live="assertive"
                                    className="swiper-notification"
                                />
                            </div>
                            <div className="d-flex justify-content-center gap-2 mt-n2 mb-3 pb-1 d-sm-none">
                                <button
                                    aria-controls="swiper-wrapper-2679edeb69713639"
                                    aria-label="Previous slide"
                                    className="viewed-prev btn btn-prev btn-icon btn-outline-secondary bg-body rounded-circle animate-slide-start me-1"
                                    tabIndex="0"
                                    type="button">
                                    <i className="ci-chevron-left fs-lg animate-target" />
                                </button>
                                <button
                                    aria-controls="swiper-wrapper-2679edeb69713639"
                                    aria-label="Next slide"
                                    className="viewed-next btn btn-next btn-icon btn-outline-secondary bg-body rounded-circle animate-slide-end"
                                    tabIndex="0"
                                    type="button">
                                    <i className="ci-chevron-right fs-lg animate-target" />
                                </button>
                            </div>
                        </div>
                    </section>
                </main>
                <div className="floating-buttons position-fixed top-50 end-0 z-sticky me-3 me-xl-4 pb-4">
                    <a
                        className="btn-scroll-top btn btn-sm bg-body border-0 rounded-pill shadow animate-slide-end"
                        href="#top">
                        Top
                        <i className="ci-arrow-right fs-base ms-1 me-n1 animate-target" />
                        <span className="position-absolute top-0 start-0 w-100 h-100 border rounded-pill z-0" />
                        <svg
                            className="position-absolute top-0 start-0 w-100 h-100 z-1"
                            fill="none"
                            viewBox="0 0 62 32"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect
                                height="30.5"
                                rx="15.25"
                                stroke="currentColor"
                                strokeMiterlimit="10"
                                strokeWidth="1.5"
                                width="60.5"
                                x=".75"
                                y=".75"
                            />
                        </svg>
                    </a>
                </div>
            </div>;

        </>
    )
}

export default ProductDetails
