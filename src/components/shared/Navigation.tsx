import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <>
            <TopNav />
            <BottomNav />
        </>
    )
}

export default Navigation

const TopNav = () => {
    {/* Navigation bar (Page header) */ }
    return (
        <header className="navbar navbar-expand-lg navbar-dark bg-dark d-block z-fixed p-0" data-sticky-navbar="{'offset': 500}">
            <div className="container d-block py-1 py-lg-3" data-bs-theme="dark">
                <div className="navbar-stuck-hide pt-1" />
                <div className="row flex-nowrap align-items-center g-0">
                    <div className="col col-lg-3 d-flex align-items-center">
                        {/* Mobile offcanvas menu toggler (Hamburger) */}
                        {/* Navbar brand (Logo) */}
                        <a href="!#" className="navbar-brand me-0">
                            <span className="d-sm-flex flex-shrink-0 text-primary me-2">
                                 <img width={36} height={36} src="/assets/img/us/logos/favicon.ico" alt="Logo" />
                            </span>
                             <span className='d-none d-md-block d-lg-block'> Salesnet </span>
                        </a>
                    </div>
                    <div className="col col-lg-9 d-flex align-items-center justify-content-end">
                        {/* Button group */}
                        <a href="!#" data-bs-toggle="modal" data-bs-target="#PublishPage"
                            className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle ms-2">
                            <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success border border-3 border-dark rounded-pill" style={{ '--czBadgePaddingY': '.25em', 'CzBadgePaddingX': '.42em' }}>3</span>
                            <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-slide-end fs-lg">
                                <i className="ci-send animate-target text-white" />
                            </span>
                        </a>
                        <button type="button" className="btn btn-icon btn-lg btn-outline-success position-relative rounded-circle animate-shake ms-2" data-bs-toggle="offcanvas" data-bs-target="#searchBox" aria-controls="searchBox" aria-label="Toggle search bar">
                            <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success border border-3 border-dark rounded-pill" style={{ '--czBadgePaddingY': '.25em', 'CzBadgePaddingX': '.42em' }}>3</span>
                            <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-slide-end fs-lg">
                                <i className="ci-search animate-target" />
                            </span>
                        </button>
                        {/* Cart button */}
                        <a href="/auth/signin" className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle ms-2">
                            <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success border border-3 border-dark rounded-pill" style={{ '--czBadgePaddingY': '.25em', 'CzBadgePaddingX': '.42em' }}>3</span>
                            <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-slide-end fs-lg">
                                <i className="ci-user animate-target ms-n1" />
                            </span>
                        </a>
                    </div>
                </div >
            </div >
            <div className="navbar-stuck-hide pb-1" />
            {/* Search visible on screens < 992px wide (lg breakpoint). It is hidden inside collapse by default */}
            <div className="collapse position-absolute top-100 z-2 w-100 bg-dark d-lg-none" id="searchBar">
                <div className="container position-relative my-3" data-bs-theme="dark">
                    <i className="ci-search position-absolute top-50 translate-middle-y d-flex fs-lg text-white ms-3" />
                    <input type="search" className="form-control form-icon-start border-white rounded-pill" placeholder="Search the products" data-autofocus="collapse" />
                </div>
            </div>
            {/*  */}
            {/* Main navigation that turns into offcanvas on screens < 992px wide (lg breakpoint) */}
            <div className="collapse d-md-block navbar-stuck-hide" id="stuckNav">
                <nav className="offcanvas offcanvas-start" id="navbarNav" tabIndex={-1} aria-labelledby="navbarNavLabel">
                    <div className="offcanvas-header py-3">
                        <h5 className="offcanvas-title" id="navbarNavLabel">Browse Salesnet</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                    </div>
                    <div className="offcanvas-body py-3 py-lg-0">
                        <div className="container px-0 px-lg-3">
                            <div className="row">
                                {/* Categories mega menu */}
                                <div className="col-lg-3">
                                    <div className="navbar-nav">
                                        <div className="dropdown w-100">
                                            {/* Buttton visible on screens > 991px wide (lg breakpoint) */}
                                            <div className="cursor-pointer d-none d-lg-block" data-bs-toggle="dropdown" data-bs-trigger="hover" data-bs-theme="dark">
                                                <a className="position-absolute top-0 start-0 w-100 h-100" href="shop-categories-electronics.html">
                                                    <span className="visually-hidden">Categories</span>
                                                </a>
                                                <button type="button" className="btn btn-lg btn-secondary dropdown-toggle w-100 rounded-bottom-0 justify-content-start pe-none">
                                                    <i className="ci-grid fs-lg" />
                                                    <span className="ms-2 me-auto">Categories</span>
                                                </button>
                                            </div>
                                            {/* Buttton visible on screens < 992px wide (lg breakpoint) */}
                                            <button type="button" className="btn btn-lg btn-secondary dropdown-toggle w-100 justify-content-start d-lg-none mb-2" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                                <i className="ci-grid fs-lg" />
                                                <span className="ms-2 me-auto">Categories</span>
                                            </button>
                                            {/* Mega menu */}
                                            <ul className="dropdown-menu dropdown-menu-static w-100 rounded-top-0 rounded-bottom-4 py-1 p-lg-1" style={{ CzDropdownSpacer: 0, '--czDropdownItemPaddingY': '.625rem', '--czDropdownItemSpacer': 0 }}>
                                                <li className="d-lg-none1 pt-2">
                                                    <a className="dropdown-item fw-medium" href="shop-categories-electronics.html">
                                                        <i className="ci-grid fs-xl opacity-60 pe-1 me-2" />
                                                        All Categories
                                                        <i className="ci-chevron-right fs-base ms-auto me-n1" />
                                                    </a>
                                                </li>
                                                <li className="dropend position-static">
                                                    <div className="position-relative rounded pt-2 pb-1 px-lg-2" data-bs-toggle="dropdown" data-bs-trigger="hover">
                                                        <a className="dropdown-item fw-medium stretched-link d-none d-lg-flex" href="shop-catalog-electronics.html">
                                                            <i className="ci-computer fs-xl opacity-60 pe-1 me-2" />
                                                            <span className="text-truncate">Computers &amp; Accessories</span>
                                                            <i className="ci-chevron-right fs-base ms-auto me-n1" />
                                                        </a>
                                                        <div className="dropdown-item fw-medium text-wrap stretched-link d-lg-none">
                                                            <i className="ci-computer fs-xl opacity-60 pe-1 me-2" />
                                                            Computers &amp; Accessories
                                                            <i className="ci-chevron-down fs-base ms-auto me-n1" />
                                                        </div>
                                                    </div>
                                                    <div className="dropdown-menu rounded-4 p-4" style={{ top: '1rem', height: 'calc(100% - .1875rem)', CzDropdownSpacer: '.3125rem', animation: 'none' }}>
                                                        <div className="d-flex flex-column flex-lg-row h-100 gap-4">
                                                            <div style={{ minWidth: '194px' }}>
                                                                <div className="d-flex w-100">
                                                                    <a className="animate-underline animate-target d-inline h6 text-dark-emphasis text-decoration-none text-truncate" href="shop-catalog-electronics.html">Computers</a>
                                                                </div>
                                                                <ul className="nav flex-column gap-2 mt-n2">
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Laptops &amp; Tablets</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Desktop Computers</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">External Components</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Interal Components</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Networking Products (NAS)</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Single Board Computers</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Desktop Barebones</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div style={{ minWidth: '194px' }}>
                                                                <div className="d-flex w-100">
                                                                    <a className="animate-underline animate-target d-inline h6 text-dark-emphasis text-decoration-none text-truncate" href="shop-catalog-electronics.html">Accessories</a>
                                                                </div>
                                                                <ul className="nav flex-column gap-2 mt-n2">
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Monitors</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Bags, Cases &amp; Sleeves</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Batteries</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Charges &amp; Adapters</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Cooling Pads</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Mounts</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Replacement Screens</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Security Locks</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Stands</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="d-none d-lg-block">
                                                                <div className="d-none d-xl-block" style={{ width: '284px' }} />
                                                                <div className="d-xl-none" style={{ width: '240px' }} />
                                                                <div className="position-relative d-flex flex-column justify-content-center h-100 bg-body-secondary rounded-5 py-4 px-3">
                                                                    <div className="text-center px-2">
                                                                        <span className="badge bg-danger bg-opacity-10 text-danger fs-sm rounded-pill mb-2">Save up to $400</span>
                                                                        <div className="fs-sm text-light-emphasis mb-2">Starts from <del>$1,599.00</del> $1,399.00</div>
                                                                        <div className="h2 mb-4">Surface Laptop Studio</div>
                                                                    </div>
                                                                    <img src="assets/img/mega-menu/electronics/01.png" width={252} alt="Surface Laptop Studio" />
                                                                    <div className="text-center mt-4">
                                                                        <a className="btn btn-sm btn-primary stretched-link" href="shop-catalog-electronics.html">Shop now</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="dropend position-static">
                                                    <div className="position-relative rounded pb-1 px-lg-2" tabIndex={0} data-bs-toggle="dropdown" data-bs-trigger="hover">
                                                        <a className="dropdown-item fw-medium stretched-link d-none d-lg-flex" href="shop-catalog-electronics.html">
                                                            <i className="ci-smartphone-2 fs-xl opacity-60 pe-1 me-2" />
                                                            <span className="text-truncate">Smartphones &amp; Tablets</span>
                                                            <i className="ci-chevron-right fs-base ms-auto me-n1" />
                                                        </a>
                                                        <div className="dropdown-item fw-medium stretched-link d-lg-none">
                                                            <i className="ci-smartphone-2 fs-xl opacity-60 pe-1 me-2" />
                                                            Smartphones &amp; Tablets
                                                            <i className="ci-chevron-down fs-base ms-auto me-n1" />
                                                        </div>
                                                    </div>
                                                    <div className="dropdown-menu rounded-4 p-4" style={{ top: '1rem', height: 'calc(100% - .1875rem)', CzDropdownSpacer: '.3125rem', animation: 'none' }}>
                                                        <div className="d-flex flex-column flex-lg-row h-100 gap-4">
                                                            <div style={{ minWidth: '194px' }}>
                                                                <div className="d-flex w-100">
                                                                    <a className="animate-underline animate-target d-inline h6 text-dark-emphasis text-decoration-none text-truncate" href="shop-catalog-electronics.html">Smartphones</a>
                                                                </div>
                                                                <ul className="nav flex-column gap-2 mt-n2">
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Apple iPhone</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Google Pixel</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Android Smartphones</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Phablets</a>
                                                                    </li>
                                                                </ul>
                                                                <div className="d-flex w-100 pt-4">
                                                                    <a className="animate-underline animate-target d-inline h6 text-dark-emphasis text-decoration-none text-truncate" href="shop-catalog-electronics.html">Tablets</a>
                                                                </div>
                                                                <ul className="nav flex-column gap-2 mt-n2">
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Apple iPad</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Android Tablets</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Tablets with Keyboard</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div style={{ minWidth: '194px' }}>
                                                                <div className="d-flex w-100">
                                                                    <a className="animate-underline animate-target d-inline h6 text-dark-emphasis text-decoration-none text-truncate" href="shop-catalog-electronics.html">Accessories</a>
                                                                </div>
                                                                <ul className="nav flex-column gap-2 mt-n2">
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Accessory Kits</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Batteries &amp; Battery Packs</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Bags &amp; Cases</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Cables</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Car Accessories</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Charges &amp; Power Adapters</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">FM Transmitters</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Lens Attachments</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Mounts &amp; Standsv</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Repair Kits</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Replacement Parts</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Styluses</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="d-none d-lg-block">
                                                                <div className="d-none d-xl-block" style={{ width: '284px' }} />
                                                                <div className="d-xl-none" style={{ width: '240px' }} />
                                                                <div className="position-relative d-flex flex-column justify-content-center h-100 bg-body-secondary rounded-5 py-4 px-3">
                                                                    <div className="text-center px-2">
                                                                        <i className="ci-apple fs-1 text-dark-emphasis mb-2" />
                                                                        <div className="fs-sm text-light-emphasis mb-2">Deal of the week</div>
                                                                        <div className="h2 mb-4">iPad Pro M1</div>
                                                                    </div>
                                                                    <img src="assets/img/mega-menu/electronics/02.png" width={252} alt="iPad Pro" />
                                                                    <div className="text-center mt-4">
                                                                        <a className="btn btn-sm btn-primary stretched-link" href="shop-catalog-electronics.html">Shop now</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="dropend position-static">
                                                    <div className="position-relative rounded pb-1 px-lg-2" tabIndex={0} data-bs-toggle="dropdown" data-bs-trigger="hover">
                                                        <a className="dropdown-item fw-medium stretched-link d-none d-lg-flex" href="shop-catalog-electronics.html">
                                                            <i className="ci-monitor-2 fs-xl opacity-60 pe-1 me-2" />
                                                            <span className="text-truncate">TV, Video &amp; Audio</span>
                                                            <i className="ci-chevron-right fs-base ms-auto me-n1" />
                                                        </a>
                                                        <div className="dropdown-item fw-medium stretched-link d-lg-none">
                                                            <i className="ci-monitor-2 fs-xl opacity-60 pe-1 me-2" />
                                                            TV, Video &amp; Audio
                                                            <i className="ci-chevron-down fs-base ms-auto me-n1" />
                                                        </div>
                                                    </div>
                                                    <div className="dropdown-menu rounded-4 p-4" style={{ top: '1rem', height: 'calc(100% - .1875rem)', CzDropdownSpacer: '.3125rem', animation: 'none' }}>
                                                        <div className="d-flex flex-column flex-lg-row h-100 gap-lg-4">
                                                            <div style={{ minWidth: '194px' }}>
                                                                <div className="d-flex w-100">
                                                                    <a className="animate-underline animate-target d-inline h6 text-dark-emphasis text-decoration-none text-truncate" href="shop-catalog-electronics.html">TV, Video &amp; Audio</a>
                                                                </div>
                                                                <ul className="nav flex-column gap-2 mt-n2">
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">TV Stes</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Home Theater Systems</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">DVD Players &amp; Recorders</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Blue-ray Players &amp; Recorders</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">HD DVD Players &amp; Recorders</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">DVD-VCR Combos</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">DTV Converters</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">AV Receivers</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">AV Amplifiers</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Projectors</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Projection Screens</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Satelite Television</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">TV-DTD Combos</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Sound Systems</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div style={{ minWidth: '194px' }}>
                                                                <ul className="nav flex-column gap-2 mt-2 mt-lg-0">
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Home Cinema Systems</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Streaming Media Players</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">VCRs</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Video Glasses</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Lens Attachments</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Subwoofers</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Sound Boosters</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="d-none d-lg-block">
                                                                <div className="d-none d-xl-block" style={{ width: '284px' }} />
                                                                <div className="d-xl-none" style={{ width: '240px' }} />
                                                                <div className="position-relative d-flex flex-column justify-content-center h-100 bg-body-secondary rounded-5 py-4 px-3">
                                                                    <div className="text-center px-2">
                                                                        <div className="fs-sm text-light-emphasis mb-2">Best deal! Save up to <span className="fw-semibold">$500</span></div>
                                                                        <div className="h2 mb-4">LG OLED 4K Smart TV</div>
                                                                    </div>
                                                                    <img src="assets/img/mega-menu/electronics/03.png" width={252} alt="Smart TV" />
                                                                    <div className="text-center mt-4">
                                                                        <a className="btn btn-sm btn-primary stretched-link" href="shop-catalog-electronics.html">Shop now</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="dropend position-static">
                                                    <div className="position-relative rounded pb-1 px-lg-2" tabIndex={0} data-bs-toggle="dropdown" data-bs-trigger="hover">
                                                        <a className="dropdown-item fw-medium stretched-link d-none d-lg-flex" href="shop-catalog-electronics.html">
                                                            <i className="ci-speaker-2 fs-xl opacity-60 pe-1 me-2" />
                                                            <span className="text-truncate">Speakers &amp; Home Music</span>
                                                            <i className="ci-chevron-right fs-base ms-auto me-n1" />
                                                        </a>
                                                        <div className="dropdown-item fw-medium stretched-link d-lg-none">
                                                            <i className="ci-speaker-2 fs-xl opacity-60 pe-1 me-2" />
                                                            Speakers &amp; Home Music
                                                            <i className="ci-chevron-down fs-base ms-auto me-n1" />
                                                        </div>
                                                    </div>
                                                    <div className="dropdown-menu rounded-4 p-4" style={{ top: '1rem', height: 'calc(100% - .1875rem)', CzDropdownSpacer: '.3125rem', animation: 'none' }}>
                                                        <div className="d-flex flex-column flex-lg-row h-100 gap-4">
                                                            <div style={{ minWidth: '194px' }}>
                                                                <div className="d-flex w-100">
                                                                    <a className="animate-underline animate-target d-inline h6 text-dark-emphasis text-decoration-none text-truncate" href="shop-catalog-electronics.html">Speakers</a>
                                                                </div>
                                                                <ul className="nav flex-column gap-2 mt-n2">
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Smart Speakers</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Bluetooth Speakers</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Bookshelf Speakers</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Ceiling &amp; In-Wall Speakers</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Center-Channel Speakers</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Floorstanding Speakers</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Outdoor Speakers</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Satellite Speakers</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Sound Bars</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Surround Sound Systems</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div style={{ minWidth: '194px' }}>
                                                                <div className="d-flex w-100">
                                                                    <a className="animate-underline animate-target d-inline h6 text-dark-emphasis text-decoration-none text-truncate" href="shop-catalog-electronics.html">Home Audio</a>
                                                                </div>
                                                                <ul className="nav flex-column gap-2 mt-n2">
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Home Theater</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Wireless &amp; Streaming Audio</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Stereo System Components</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Compact Radios &amp; Stereos</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Home Audio Accessories</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Subwoofers</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="d-none d-lg-block">
                                                                <div className="d-none d-xl-block" style={{ width: '284px' }} />
                                                                <div className="d-xl-none" style={{ width: '240px' }} />
                                                                <div className="position-relative d-flex flex-column justify-content-center h-100 bg-body-secondary rounded-5 py-4 px-3">
                                                                    <div className="text-center px-2">
                                                                        <i className="ci-google fs-2 text-dark-emphasis mb-3" />
                                                                        <div className="fs-sm text-light-emphasis mb-2">Deal of the week</div>
                                                                        <div className="h2 mb-4">Nest Audio</div>
                                                                    </div>
                                                                    <img src="assets/img/mega-menu/electronics/04.png" width={252} alt="Nest Audio" />
                                                                    <div className="text-center mt-4">
                                                                        <a className="btn btn-sm btn-primary stretched-link" href="shop-catalog-electronics.html">Shop now</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="dropend position-static">
                                                    <div className="position-relative rounded pb-1 px-lg-2" tabIndex={0} data-bs-toggle="dropdown" data-bs-trigger="hover">
                                                        <a className="dropdown-item fw-medium stretched-link d-none d-lg-flex" href="shop-catalog-electronics.html">
                                                            <i className="ci-camera-2 fs-xl opacity-60 pe-1 me-2" />
                                                            <span className="text-truncate">Cameras, Photo &amp; Video</span>
                                                            <i className="ci-chevron-right fs-base ms-auto me-n1" />
                                                        </a>
                                                        <div className="dropdown-item fw-medium stretched-link d-lg-none">
                                                            <i className="ci-camera-2 fs-xl opacity-60 pe-1 me-2" />
                                                            Cameras, Photo &amp; Video
                                                            <i className="ci-chevron-down fs-base ms-auto me-n1" />
                                                        </div>
                                                    </div>
                                                    <div className="dropdown-menu rounded-4 p-4" style={{ top: '1rem', height: 'calc(100% - .1875rem)', CzDropdownSpacer: '.3125rem', animation: 'none' }}>
                                                        <div className="d-flex flex-column flex-lg-row h-100 gap-4">
                                                            <div style={{ minWidth: '194px' }}>
                                                                <div className="d-flex w-100">
                                                                    <a className="animate-underline animate-target d-inline h6 text-dark-emphasis text-decoration-none text-truncate" href="shop-catalog-electronics.html">Cameras &amp; Lenses</a>
                                                                </div>
                                                                <ul className="nav flex-column gap-2 mt-n2">
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Point &amp; Shoot Cameras</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">DSLR Cameras</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Mirrorless Cameras</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Body Mounted Cameras</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Camcorders</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Camcorder Lenses</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Camera Lenses</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Macro &amp; Ringlight Flashes</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Shoe Mount Flashes</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Tripods &amp; Monopods</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Video Studio</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div style={{ minWidth: '194px' }}>
                                                                <div className="d-flex w-100">
                                                                    <a className="animate-underline animate-target d-inline h6 text-dark-emphasis text-decoration-none text-truncate" href="shop-catalog-electronics.html">Accessories</a>
                                                                </div>
                                                                <ul className="nav flex-column gap-2 mt-n2">
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Bags &amp; Cases</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Binoculars &amp; Scopes</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Batteries &amp; Chargers</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Cables &amp; Cords</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Camcorder Accessories</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Cleaning Equipment</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Protector Foils</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Filters &amp; Accessories</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Remote Controls</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Rain Covers</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Viewfinders</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="d-none d-lg-block">
                                                                <div className="d-none d-xl-block" style={{ width: '284px' }} />
                                                                <div className="d-xl-none" style={{ width: '240px' }} />
                                                                <div className="position-relative d-flex flex-column justify-content-center h-100 bg-body-secondary rounded-5 py-4 px-3">
                                                                    <div className="text-center px-2">
                                                                        <span className="badge bg-danger bg-opacity-10 text-danger fs-sm rounded-pill mb-2">Save up to $300</span>
                                                                        <div className="fs-sm text-light-emphasis mb-2">Starts from <del>$1,100.00</del> 899.00</div>
                                                                        <div className="h2 mb-4">Canon Digital Cameras</div>
                                                                    </div>
                                                                    <img src="assets/img/mega-menu/electronics/05.png" width={252} alt="Canon Camera" />
                                                                    <div className="text-center mt-4">
                                                                        <a className="btn btn-sm btn-primary stretched-link" href="shop-catalog-electronics.html">Shop now</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li >
                                                <li className="dropend position-static">
                                                    <div className="position-relative rounded pb-1 px-lg-2" tabIndex={0} data-bs-toggle="dropdown" data-bs-trigger="hover">
                                                        <a className="dropdown-item fw-medium stretched-link d-none d-lg-flex" href="shop-catalog-electronics.html">
                                                            <i className="ci-printer-2 fs-xl opacity-60 pe-1 me-2" />
                                                            <span className="text-truncate">Printers &amp; Ink</span>
                                                            <i className="ci-chevron-right fs-base ms-auto me-n1" />
                                                        </a>
                                                        <div className="dropdown-item fw-medium stretched-link d-lg-none">
                                                            <i className="ci-printer-2 fs-xl opacity-60 pe-1 me-2" />
                                                            Printers &amp; Ink
                                                            <i className="ci-chevron-down fs-base ms-auto me-n1" />
                                                        </div>
                                                    </div>
                                                    <div className="dropdown-menu rounded-4 p-4" style={{ top: '1rem', height: 'calc(100% - .1875rem)', CzDropdownSpacer: '.3125rem', animation: 'none' }}>
                                                        <div className="d-flex flex-column flex-lg-row h-100 gap-4">
                                                            <div style={{ minWidth: '194px' }}>
                                                                <div className="d-flex w-100">
                                                                    <a className="animate-underline animate-target d-inline h6 text-dark-emphasis text-decoration-none text-truncate" href="shop-catalog-electronics.html">By type</a>
                                                                </div>
                                                                <ul className="nav flex-column gap-2 mt-n2">
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">All-in-One</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Copying</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Faxing</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Photo Printing</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Printing Only</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Scanning</a>
                                                                    </li>
                                                                </ul>
                                                                <div className="d-flex w-100 pt-4">
                                                                    <a className="animate-underline animate-target d-inline h6 text-dark-emphasis text-decoration-none text-truncate" href="shop-catalog-electronics.html">Scanners</a>
                                                                </div>
                                                                <ul className="nav flex-column gap-2 mt-n2">
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Business Card Scanners</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Document Scanners</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Flatbed &amp; Photo Scanners</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Slide &amp; Negative Scanners</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div style={{ minWidth: '194px' }}>
                                                                <div className="d-flex w-100">
                                                                    <a className="animate-underline animate-target d-inline h6 text-dark-emphasis text-decoration-none text-truncate" href="shop-catalog-electronics.html">Printers</a>
                                                                </div>
                                                                <ul className="nav flex-column gap-2 mt-n2">
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Dot Matrix Printers</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Inkjet Printers</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Label Printers</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Laser Printers</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Photo Printers</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Wide Format Printers</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Plotter Printers</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="d-none d-lg-block">
                                                                <div className="d-none d-xl-block" style={{ width: '284px' }} />
                                                                <div className="d-xl-none" style={{ width: '240px' }} />
                                                                <div className="position-relative d-flex flex-column justify-content-center h-100 bg-body-secondary rounded-5 py-4 px-3">
                                                                    <div className="text-center px-2">
                                                                        <div className="fs-sm text-light-emphasis mb-2">Best deal! Save up to <span className="fw-semibold">$200</span></div>
                                                                        <div className="h2 mb-4">Epson Color Printers</div>
                                                                    </div>
                                                                    <img src="assets/img/mega-menu/electronics/06.png" width={252} alt="Epson Printer" />
                                                                    <div className="text-center mt-4">
                                                                        <a className="btn btn-sm btn-primary stretched-link" href="shop-catalog-electronics.html">Shop now</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li >
                                                <li className="dropend position-static">
                                                    <div className="position-relative rounded pb-1 px-lg-2" tabIndex={0} data-bs-toggle="dropdown" data-bs-trigger="hover">
                                                        <a className="dropdown-item fw-medium stretched-link d-none d-lg-flex" href="shop-catalog-electronics.html">
                                                            <i className="ci-battery-2 fs-xl opacity-60 pe-1 me-2" />
                                                            <span className="text-truncate">Charging Stations</span>
                                                            <i className="ci-chevron-right fs-base ms-auto me-n1" />
                                                        </a>
                                                        <div className="dropdown-item fw-medium stretched-link d-lg-none">
                                                            <i className="ci-battery-2 fs-xl opacity-60 pe-1 me-2" />
                                                            Charging Stations
                                                            <i className="ci-chevron-down fs-base ms-auto me-n1" />
                                                        </div>
                                                    </div>
                                                    <div className="dropdown-menu rounded-4 p-4" style={{ top: '1rem', height: 'calc(100% - .1875rem)', CzDropdownSpacer: '.3125rem', animation: 'none' }}>
                                                        <div className="d-flex flex-column flex-lg-row h-100 gap-4">
                                                            <div style={{ minWidth: '194px' }}>
                                                                <div className="d-flex w-100">
                                                                    <a className="animate-underline animate-target d-inline h6 text-dark-emphasis text-decoration-none text-truncate" href="shop-catalog-electronics.html">Charging Stations</a>
                                                                </div>
                                                                <ul className="nav flex-column gap-2 mt-n2">
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Portable Power Stations</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Inverter Power Stations</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Outdoor Generators</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Gasoline Generators</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Cell Phone Chargers</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Power Strips</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Wall Charges</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="d-none d-lg-block">
                                                                <div className="d-none d-xl-block" style={{ width: '284px' }} />
                                                                <div className="d-xl-none" style={{ width: '240px' }} />
                                                                <div className="position-relative d-flex flex-column justify-content-center h-100 bg-body-secondary rounded-5 py-4 px-3">
                                                                    <div className="text-center px-2">
                                                                        <span className="badge bg-danger bg-opacity-10 text-danger fs-sm rounded-pill mb-2">Huge sale!</span>
                                                                        <div className="fs-sm text-light-emphasis mb-2">Save up to <span className="fw-semibold">$350</span></div>
                                                                        <div className="h2 mb-4">Portable Power Stations</div>
                                                                    </div>
                                                                    <img src="assets/img/mega-menu/electronics/07.png" width={252} alt="Epson Printer" />
                                                                    <div className="text-center mt-4">
                                                                        <a className="btn btn-sm btn-primary stretched-link" href="shop-catalog-electronics.html">Shop now</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li >
                                                <li className="dropend position-static">
                                                    <div className="position-relative rounded pb-1 px-lg-2" tabIndex={0} data-bs-toggle="dropdown" data-bs-trigger="hover">
                                                        <a className="dropdown-item fw-medium stretched-link d-none d-lg-flex" href="shop-catalog-electronics.html">
                                                            <i className="ci-headphones-2 fs-xl opacity-60 pe-1 me-2" />
                                                            <span className="text-truncate">Headphones</span>
                                                            <i className="ci-chevron-right fs-base ms-auto me-n1" />
                                                        </a>
                                                        <div className="dropdown-item fw-medium stretched-link d-lg-none">
                                                            <i className="ci-headphones-2 fs-xl opacity-60 pe-1 me-2" />
                                                            Headphones
                                                            <i className="ci-chevron-down fs-base ms-auto me-n1" />
                                                        </div>
                                                    </div>
                                                    <div className="dropdown-menu rounded-4 p-4" style={{ top: '1rem', height: 'calc(100% - .1875rem)', CzDropdownSpacer: '.3125rem', animation: 'none' }}>
                                                        <div className="d-flex flex-column flex-lg-row h-100 gap-4">
                                                            <div style={{ minWidth: '194px' }}>
                                                                <div className="d-flex w-100">
                                                                    <a className="animate-underline animate-target d-inline h6 text-dark-emphasis text-decoration-none text-truncate" href="shop-catalog-electronics.html">Headphones</a>
                                                                </div>
                                                                <ul className="nav flex-column gap-2 mt-n2">
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Earbud Headphones</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Over-Ear Headphones</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">On-Ear Headphones</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Bluetooth Headphones</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Sports &amp; Fitness</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Noise-Cancelling</a>
                                                                    </li>
                                                                </ul>
                                                                <div className="d-flex w-100 pt-4">
                                                                    <a className="animate-underline animate-target d-inline h6 text-dark-emphasis text-decoration-none text-truncate" href="shop-catalog-electronics.html">Accessories</a>
                                                                </div>
                                                                <ul className="nav flex-column gap-2 mt-n2">
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Cases &amp; Sleeves</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Cables &amp; Cords</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Ear Pads</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Repair Kits</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Cleaning Equipment</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="d-none d-lg-block">
                                                                <div className="d-none d-xl-block" style={{ width: '284px' }} />
                                                                <div className="d-xl-none" style={{ width: '240px' }} />
                                                                <div className="position-relative d-flex flex-column justify-content-center h-100 bg-body-secondary rounded-5 py-4 px-3">
                                                                    <div className="text-center px-2">
                                                                        <span className="badge bg-danger bg-opacity-10 text-danger fs-sm rounded-pill mb-2">Save up to $200</span>
                                                                        <div className="fs-sm text-light-emphasis mb-2">Starts from $119.99</div>
                                                                        <div className="h2 mb-4">Wireless Headphones</div>
                                                                    </div>
                                                                    <img src="assets/img/mega-menu/electronics/08.png" width={252} alt="Wireless Headphones" />
                                                                    <div className="text-center mt-4">
                                                                        <a className="btn btn-sm btn-primary stretched-link" href="shop-catalog-electronics.html">Shop now</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li >
                                                <li className="dropend position-static">
                                                    <div className="position-relative rounded pb-1 px-lg-2" tabIndex={0} data-bs-toggle="dropdown" data-bs-trigger="hover">
                                                        <a className="dropdown-item fw-medium stretched-link d-none d-lg-flex" href="shop-catalog-electronics.html">
                                                            <i className="ci-watch-2 fs-xl opacity-60 pe-1 me-2" />
                                                            <span className="text-truncate">Wearable Electronics</span>
                                                            <i className="ci-chevron-right fs-base ms-auto me-n1" />
                                                        </a>
                                                        <div className="dropdown-item fw-medium stretched-link d-lg-none">
                                                            <i className="ci-watch-2 fs-xl opacity-60 pe-1 me-2" />
                                                            Wearable Electronics
                                                            <i className="ci-chevron-down fs-base ms-auto me-n1" />
                                                        </div>
                                                    </div>
                                                    <div className="dropdown-menu rounded-4 p-4" style={{ top: '1rem', height: 'calc(100% - .1875rem)', CzDropdownSpacer: '.3125rem', animation: 'none' }}>
                                                        <div className="d-flex flex-column flex-lg-row h-100 gap-4">
                                                            <div style={{ minWidth: '194px' }}>
                                                                <div className="d-flex w-100">
                                                                    <a className="animate-underline animate-target d-inline h6 text-dark-emphasis text-decoration-none text-truncate" href="shop-catalog-electronics.html">Wearable Gadgets</a>
                                                                </div>
                                                                <ul className="nav flex-column gap-2 mt-n2">
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Smartwatches</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Fitness Trackers</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Smart Glasses</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Rings</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Virtual Reality</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Clips, Arm &amp; Wristbands</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Accessories</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="d-none d-lg-block">
                                                                <div className="d-none d-xl-block" style={{ width: '284px' }} />
                                                                <div className="d-xl-none" style={{ width: '240px' }} />
                                                                <div className="position-relative d-flex flex-column justify-content-center h-100 bg-body-secondary rounded-5 py-4 px-3">
                                                                    <div className="text-center px-2">
                                                                        <i className="ci-google fs-2 text-dark-emphasis mb-3" />
                                                                        <div className="fs-sm text-light-emphasis mb-2">Deal of the week</div>
                                                                        <div className="h2 mb-4">Pixel Watch</div>
                                                                    </div>
                                                                    <img src="assets/img/mega-menu/electronics/09.png" width={252} alt="Pixel Watch" />
                                                                    <div className="text-center mt-4">
                                                                        <a className="btn btn-sm btn-primary stretched-link" href="shop-catalog-electronics.html">Shop now</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li >
                                                <li className="dropend position-static">
                                                    <div className="position-relative rounded pb-1 px-lg-2" tabIndex={0} data-bs-toggle="dropdown" data-bs-trigger="hover">
                                                        <a className="dropdown-item fw-medium stretched-link d-none d-lg-flex" href="shop-catalog-electronics.html">
                                                            <i className="ci-powerbank fs-xl opacity-60 pe-1 me-2" />
                                                            <span className="text-truncate">Powerbanks</span>
                                                            <i className="ci-chevron-right fs-base ms-auto me-n1" />
                                                        </a>
                                                        <div className="dropdown-item fw-medium stretched-link d-lg-none">
                                                            <i className="ci-powerbank fs-xl opacity-60 pe-1 me-2" />
                                                            Powerbanks
                                                            <i className="ci-chevron-down fs-base ms-auto me-n1" />
                                                        </div>
                                                    </div>
                                                    <div className="dropdown-menu rounded-4 p-4" style={{ top: '1rem', height: 'calc(100% - .1875rem)', CzDropdownSpacer: '.3125rem', animation: 'none' }}>
                                                        <div className="d-flex flex-column flex-lg-row h-100 gap-4">
                                                            <div style={{ minWidth: '194px' }}>
                                                                <div className="d-flex w-100">
                                                                    <a className="animate-underline animate-target d-inline h6 text-dark-emphasis text-decoration-none text-truncate" href="shop-catalog-electronics.html">Powerbanks</a>
                                                                </div>
                                                                <ul className="nav flex-column gap-2 mt-n2">
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Fast Charging</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Built In Cable</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Built In Wall Plug</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">LED Indicator Lights</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Pocket Size</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Wireless Charging</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Short Circuit Protection</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Scratch Resistant</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Flashlight</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Lightweight</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="d-none d-lg-block">
                                                                <div className="d-none d-xl-block" style={{ width: '284px' }} />
                                                                <div className="d-xl-none" style={{ width: '240px' }} />
                                                                <div className="position-relative d-flex flex-column justify-content-center h-100 bg-body-secondary rounded-5 py-4 px-3">
                                                                    <div className="text-center px-2">
                                                                        <div className="fs-sm text-light-emphasis mb-2">Save up to <span className="fw-semibold">$50</span> on our</div>
                                                                        <div className="h2 mb-4">Powerbanks Deals</div>
                                                                    </div>
                                                                    <img src="assets/img/mega-menu/electronics/10.png" width={252} alt="Powerbank" />
                                                                    <div className="text-center mt-4">
                                                                        <a className="btn btn-sm btn-primary stretched-link" href="shop-catalog-electronics.html">Shop now</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li >
                                                <li className="dropend position-static">
                                                    <div className="position-relative rounded pb-1 px-lg-2" tabIndex={0} data-bs-toggle="dropdown" data-bs-trigger="hover">
                                                        <a className="dropdown-item fw-medium stretched-link d-none d-lg-flex" href="shop-catalog-electronics.html">
                                                            <i className="ci-hard-drive-2 fs-xl opacity-60 pe-1 me-2" />
                                                            <span className="text-truncate">HDD/SSD Data Storage</span>
                                                            <i className="ci-chevron-right fs-base ms-auto me-n1" />
                                                        </a>
                                                        <div className="dropdown-item fw-medium stretched-link d-lg-none">
                                                            <i className="ci-hard-drive-2 fs-xl opacity-60 pe-1 me-2" />
                                                            HDD/SSD Data Storage
                                                            <i className="ci-chevron-down fs-base ms-auto me-n1" />
                                                        </div>
                                                    </div>
                                                    <div className="dropdown-menu rounded-4 p-4" style={{ top: '1rem', height: 'calc(100% - .1875rem)', CzDropdownSpacer: '.3125rem', animation: 'none' }}>
                                                        <div className="d-flex flex-column flex-lg-row h-100 gap-4">
                                                            <div style={{ minWidth: '194px' }}>
                                                                <div className="d-flex w-100">
                                                                    <a className="animate-underline animate-target d-inline h6 text-dark-emphasis text-decoration-none text-truncate" href="shop-catalog-electronics.html">Data Storage</a>
                                                                </div>
                                                                <ul className="nav flex-column gap-2 mt-n2">
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">External Hard Drives</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">External SSD</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">External Zip Drives</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Floppy &amp; Tape Drives</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Internal Hard Drives</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Internal SSD</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Network Attached Storage</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">USB Flash Drives</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="d-none d-lg-block">
                                                                <div className="d-none d-xl-block" style={{ width: '284px' }} />
                                                                <div className="d-xl-none" style={{ width: '240px' }} />
                                                                <div className="position-relative d-flex flex-column justify-content-center h-100 bg-body-secondary rounded-5 py-4 px-3">
                                                                    <div className="text-center px-2">
                                                                        <span className="badge bg-danger bg-opacity-10 text-danger fs-sm rounded-pill mb-2">Save up to $100</span>
                                                                        <div className="fs-sm text-light-emphasis mb-2">Starts from $89.99</div>
                                                                        <div className="h2 mb-4">Samsung SSD Deals</div>
                                                                    </div>
                                                                    <img src="assets/img/mega-menu/electronics/11.png" width={252} alt="SSD" />
                                                                    <div className="text-center mt-4">
                                                                        <a className="btn btn-sm btn-primary stretched-link" href="shop-catalog-electronics.html">Shop now</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li >
                                                <li className="dropend position-static">
                                                    <div className="position-relative rounded pb-2 px-lg-2" tabIndex={0} data-bs-toggle="dropdown" data-bs-trigger="hover">
                                                        <a className="dropdown-item fw-medium stretched-link d-none d-lg-flex" href="shop-catalog-electronics.html">
                                                            <i className="ci-game fs-xl opacity-60 pe-1 me-2" />
                                                            <span className="text-truncate">Video Games</span>
                                                            <i className="ci-chevron-right fs-base ms-auto me-n1" />
                                                        </a>
                                                        <div className="dropdown-item fw-medium stretched-link d-lg-none">
                                                            <i className="ci-game fs-xl opacity-60 pe-1 me-2" />
                                                            Video Games
                                                            <i className="ci-chevron-down fs-base ms-auto me-n1" />
                                                        </div>
                                                    </div>
                                                    <div className="dropdown-menu rounded-4 p-4" style={{ top: '1rem', height: 'calc(100% - .1875rem)', CzDropdownSpacer: '.3125rem', animation: 'none' }}>
                                                        <div className="d-flex flex-column flex-lg-row h-100 gap-lg-4">
                                                            <div style={{ minWidth: '194px' }}>
                                                                <div className="d-flex w-100">
                                                                    <a className="animate-underline animate-target d-inline h6 text-dark-emphasis text-decoration-none text-truncate" href="shop-catalog-electronics.html">Games &amp; Hardware</a>
                                                                </div>
                                                                <ul className="nav flex-column gap-2 mt-n2">
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Video Games</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">PlayStation 5</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">PlayStation 4</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Xbox Series X</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Xbox Series S</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Nintendo Switch</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Gaming PC</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Gaming Laptops</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Wii U</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Wii</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Nintendo 3DS</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Nintendo 2DS</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Nintendo DS</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Wii</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div style={{ minWidth: '194px' }}>
                                                                <ul className="nav flex-column gap-2 mt-2 mt-lg-0">
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Mac</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">PlayStation Vita</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Sony PSP</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Retro Gaming</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Microconsoles</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Controllers</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Accessories</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Digital Games Screens</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Game Pass</a>
                                                                    </li>
                                                                    <li className="d-flex w-100 pt-1">
                                                                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">PlayStation Plus</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="d-none d-lg-block">
                                                                <div className="d-none d-xl-block" style={{ width: '284px' }} />
                                                                <div className="d-xl-none" style={{ width: '240px' }} />
                                                                <div className="position-relative d-flex flex-column justify-content-center h-100 bg-body-secondary rounded-5 py-4 px-3">
                                                                    <div className="text-center px-2">
                                                                        <span className="badge bg-danger bg-opacity-10 text-danger fs-sm rounded-pill mb-2">Save $100</span>
                                                                        <div className="fs-sm text-light-emphasis mb-2">Starts from <del>$599.00</del> $499.00</div>
                                                                        <div className="h2 mb-4">Xbox Series X</div>
                                                                    </div>
                                                                    <img src="assets/img/mega-menu/electronics/12.png" width={252} alt="Xbox" />
                                                                    <div className="text-center mt-4">
                                                                        <a className="btn btn-sm btn-primary stretched-link" href="shop-catalog-electronics.html">Shop now</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li >
                                            </ul >
                                        </div >
                                    </div >
                                </div >
                                {/* Navbar nav */}
                                < div className="col-lg-9 d-lg-flex pt-3 pt-lg-0 ps-lg-0" >
                                    <ul className="navbar-nav position-relative">
                                        <li className="nav-item me-lg-n2 me-xl-0 rounded-pill badge text-bg-orange ">
                                            <a className="nav-link" href="./">
                                                <i className="ci-home fs-2 m-1" />
                                                Home</a>
                                        </li>
                                        <li className="nav-item me-lg-n2 me-xl-0 rounded-pill badge text-bg-orange ">
                                            <a className="nav-link" data-bs-toggle="modal" data-bs-target="#NotImplimentedPage" href="!#">
                                                <i className="ci-chat fs-2 m-1" />
                                                Chat-me</a>
                                        </li>

                                        <li className="nav-item me-lg-n2 me-xl-0 rounded-pill badge text-bg-orange ">
                                            <a className="nav-link" href="!#">
                                                <i className="ci-heart fs-2 m-1" />
                                                Saved.</a>
                                        </li>
                                        <li className="nav-item me-lg-n2 me-xl-0 rounded-pill badge text-bg-orange ">
                                            <a className="nav-link" href="!#" data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCart" aria-label="Shopping cart">
                                                <i className="ci-shopping-cart fs-2 m-1" />
                                                Basket.</a>
                                        </li>
                                    </ul>
                                    <hr className="d-lg-none my-3" />
                                    <ul className="navbar-nav ms-auto">
                                        <li className="nav-item dropdown me-lg-n2 me-xl-n1">
                                            <a className="nav-link dropdown-toggle fs-sm px-3 badge rounded-pill text-bg-success" href="#!" role="button" data-bs-toggle="dropdown" data-bs-trigger="hover" aria-expanded="false">Eng</a>
                                            <ul className="dropdown-menu fs-sm" style={{ czDropdownMinWidth: '7.5rem', CzDropdownSpacer: '.25rem' }}>
                                                <li><a className="dropdown-item" href="#!">Français</a></li>
                                                <li><a className="dropdown-item" href="#!">Deutsch</a></li>
                                                <li><a className="dropdown-item" href="#!">Italiano</a></li>
                                            </ul>
                                        </li >
                                        <li className="nav-item dropdown me-lg-n1">
                                            <a className="nav-link dropdown-toggle fs-sm px-3 badge rounded-pill text-bg-success" href="#!" role="button" data-bs-toggle="dropdown" data-bs-trigger="hover" aria-expanded="false">USD ($)</a>
                                            <ul className="dropdown-menu dropdown-menu-end fs-sm" style={{ CzDropdownMinWidth: '7rem', CzDropdownSpacer: '.25rem' }}>
                                                <li><a className="dropdown-item" href="#!">€ EUR</a></li>
                                                <li><a className="dropdown-item" href="#!">£ UKP</a></li>
                                                <li><a className="dropdown-item" href="#!">¥ JPY</a></li>
                                            </ul>
                                        </li >
                                    </ul >
                                    {/* <button type="submit" class="btn btn-md btn-light rounded-pill">1890</button> */}
                                </div >
                            </div >
                        </div >
                    </div >
                </nav >
            </div >
        </header >
    )
}

// export default TopNav

// const BottomNav = () => {
//     {/* Navbar with simple navigation + Action buttons group */ }
//     // const styles = {
//         const styles = {
//             nav_div: {
//                 paddingLeft: '15px', // Use quotes for pixel values
//                 paddingRight: '15px', // Use quotes for pixel values
//                 display: 'flex', // Use quotes for CSS property values
//                 maxWidth: '600px', // Use quotes for pixel values
//                 marginRight: 'auto', // Use quotes for CSS property values
//                 marginLeft: 'auto', // Use quotes for CSS property values
//                 alignItems: 'center' // Use quotes for CSS property values
//             }
//         };
        
//     return (
//         <header className="navbar navbar-expand-lg bg-body shadow px-0 fixed-bottom align-items-center">
//     <div className="container-fluid">
//         <div style={styles.nav_div} className="d-flex justify-content-between align-items-center flex-wrap py-lg-1">
//             <button type="button" className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle mx-2" data-bs-toggle="offcanvas" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-label="Toggle navigation">
//                 <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-slide-end fs-lg">
//                     <i className="ci-grid-2 fs-xl" />
//                 </span>
//             </button>

//             <button type="button" className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle mx-2" data-bs-toggle="modal" data-bs-target="#NotImplimentedPage" href="!#">
//                 <span className="position-absolute top-50 right-100 start-100 mt-n1 ms-n3 badge text-bg-success rounded-pill" style={{ '--czBadgePaddingY': '.25em', 'CzBadgePaddingX': '.42em' }}>3</span>
//                 <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-slide-end fs-lg">
//                     <i className="ci-chat fs-2 m-1" />
//                 </span>
//             </button>

//             <Link to="/" className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle mx-2">
//                 <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-slide-end fs-lg">
//                     <i className="ci-home fs-xl" />
//                 </span>
//             </Link>

//             <button type="button" className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle mx-2" data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCart" aria-label="Shopping cart">
//                 <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success rounded-pill" style={{ '--czBadgePaddingY': '.25em', 'CzBadgePaddingX': '.42em' }}>3</span>
//                 <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-slide-end fs-lg">
//                     <i className="ci-heart animate-target" />
//                 </span>
//             </button>

//             <button type="button" className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle mx-2" data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCart" aria-label="Shopping cart">
//                 <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success rounded-pill" style={{ '--czBadgePaddingY': '.25em', 'CzBadgePaddingX': '.42em' }}>3</span>
//                 <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-slide-end fs-lg">
//                     <i className="ci-shopping-cart animate-target ms-n1" />
//                 </span>
//             </button>
//         </div>
//     </div>
// </header>

//     )
// }

// export default BottomNav


const BottomNav = () => {
    // Styles for the navigation
    const styles = {
        nav_div: {
            // paddingLeft: '15px',
            // paddingRight: '15px',
            display: 'flex',
            maxWidth: '600px',
            marginRight: 'auto',
            marginLeft: 'auto',
            alignItems: 'center',
            justifyContent: 'space-between', // Space between buttons
            overflow: 'hidden', // Prevent overflow
            whiteSpace: 'nowrap', // Prevent wrapping
            flexWrap: 'nowrap' // Prevent wrapping
        }
    };
    
    return (
        <header className="navbar navbar-expand-lg bg-body shadow px-0 fixed-bottom align-items-center">
            <div className="container-fluid">
                <div style={styles.nav_div} className="d-flex py-lg-1">
                    <button type="button" className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle mx-2" data-bs-toggle="offcanvas" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-label="Toggle navigation">
                        <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-slide-end fs-lg">
                            <i className="ci-grid-2 fs-xl" />
                        </span>
                    </button>

                    <button type="button" className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle mx-2" data-bs-toggle="modal" data-bs-target="#NotImplimentedPage" href="!#">
                        <span className="position-absolute top-50 right-100 start-100 mt-n1 ms-n3 badge text-bg-success rounded-pill" style={{ '--czBadgePaddingY': '.25em', 'CzBadgePaddingX': '.42em' }}>3</span>
                        <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-slide-end fs-lg">
                            <i className="ci-chat fs-2 m-1" />
                        </span>
                    </button>

                    <Link to="/" className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle mx-2">
                        <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-slide-end fs-lg">
                            <i className="ci-home fs-xl" />
                        </span>
                    </Link>

                    <button type="button" className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle mx-2" data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCart" aria-label="Shopping cart">
                        <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success rounded-pill" style={{ '--czBadgePaddingY': '.25em', 'CzBadgePaddingX': '.42em' }}>3</span>
                        <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-slide-end fs-lg">
                            <i className="ci-heart animate-target" />
                        </span>
                    </button>

                    <button type="button" className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle mx-2" data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCart" aria-label="Shopping cart">
                        <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success rounded-pill" style={{ '--czBadgePaddingY': '.25em', 'CzBadgePaddingX': '.42em' }}>3</span>
                        <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-slide-end fs-lg">
                            <i className="ci-shopping-cart animate-target ms-n1" />
                        </span>
                    </button>
                </div>
            </div>
        </header>
    );
};
