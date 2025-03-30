import React from 'react'
import { NavLink } from 'react-router-dom'
import Categories from './modals/Categories'

const Navigation = () => {
    return (
        <>  <Categories/>
            <TopNav />
            <BottomNav />
        </>
    )
}

export default Navigation

const TopNav = () => {
    {/* Navigation bar (Page header) */ }
    return (
        // <header className="navbar navbar-expand-lg navbar-dark bg-dark d-block z-fixed p-0 fixed-top navbar-stuck" data-sticky-navbar="{'offset': 500}">
        <header className="navbar navbar-expand-lg navbar-dark bg-dark d-block z-fixed p-0 navbar-stuck" data-sticky-navbar="{'offset': 500}">
            <div className="container d-block py-1 py-lg-3 d-lg-none d-md-none1" data-bs-theme="dark">
                <div className="navbar-stuck-hide pt-1" />
                <div className="row flex-nowrap align-items-center g-0">
                    <div className="col col-lg-3 d-flex align-items-center">
                        {/* Mobile offcanvas menu toggler (Hamburger) */}
                        {/* Navbar brand (Logo) */}
                        <NavLink to="!#" className="navbar-brand me-0">
                            <span className="d-sm-flex flex-shrink-0 text-primary me-2">
                                <img width={36} height={36} src="/assets/img/us/logos/favicon.ico" alt="Logo" />
                            </span>
                            <span className='d-none d-md-block d-lg-block'> Salesnet </span>
                        </NavLink>
                    </div>
                    <div className="col col-lg-9 d-flex align-items-center justify-content-end">
                        {/* Button group */}
                        <NavLink to="!#" data-bs-toggle="modal" data-bs-target="#PublishPage"
                            className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle ms-2">
                            {/* <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success border border-3 border-dark rounded-pill" style={{ '--czBadgePaddingY': '.25em', 'CzBadgePaddingX': '.42em' }}>3</span> */}
                            <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-slide-end fs-lg">
                                <i className="ci-powerbank animate-target text-white" />
                                {/* <i className="ci-send animate-target text-white" /> */}
                            </span>
                        </NavLink>
                        <button type="button" className="btn btn-icon btn-lg btn-outline-success position-relative rounded-circle animate-shake ms-2" data-bs-toggle="offcanvas" data-bs-target="#searchBox" aria-controls="searchBox" aria-label="Toggle search bar">
                            <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success border border-3 border-dark rounded-pill" style={{ '--czBadgePaddingY': '.25em', 'CzBadgePaddingX': '.42em' }}>3</span>
                            <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-slide-end fs-lg">
                                <i className="ci-search animate-target" />
                            </span>
                        </button>

                        {/* Go to profile */}
                        {/* <NavLink to="/vendor/dashboard" className="btn btn-icon hover-effect-scale position-relative border rounded-circle overflow-hidden">
                            <img src="/assets/img/account/avatar-sm.png" className="hover-effect-target position-absolute top-0 start-0 w-100 h-100 object-fit-cover" alt="Avatar" />
                        </NavLink> */}

                        {/* <NavLink to="/auth/signin" className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle ms-2">
                            <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success border border-3 border-dark rounded-pill" style={{ '--czBadgePaddingY': '.25em', 'CzBadgePaddingX': '.42em' }}>3</span>
                            <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-slide-end fs-lg">
                                <i className="ci-user animate-target ms-n1" />
                            </span>
                        </NavLink> */}
                        <NavLink to="/user/personal" type="button" className="btn btn-icon btn-lg btn-outline-success position-relative rounded-circle animate-shake ms-2" 
                        data-bs-toggle="offcanvas" data-bs-target="#accountSidebar" aria-controls="accountSidebar" data-bs-theme="light" aria-label="Toggle search bar">
                            <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success border border-3 border-dark rounded-pill" 
                            style={{ '--czBadgePaddingY': '.25em', 'CzBadgePaddingX': '.42em' }}><i className="ci-chevron-left animate-target" /></span>
                            <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-slide-end fs-lg">
                                <i className="ci-user animate-target" />
                            </span>
                        </NavLink>
                    </div>
                </div >
            </div >
            <div className="navbar-stuck-hide pb-1" />

            {/* Main navigation that turns into offcanvas on screens < 992px wide (lg breakpoint) */}
            <div className="collapse d-md-block navbar-stuck-hide">
                <nav className="offcanvas offcanvas-start" id="navbarNav" tabIndex={-1} aria-labelledby="navbarNavLabel">
                    <div className="offcanvas-header py-3">
                        <h5 className="offcanvas-title" id="navbarNavLabel">Browse Salesnet</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                    </div>
                    <div className="offcanvas-body py-3 py-lg-0">
                        <div className="container px-0 px-lg-3">
                            <div className="row">
                                {/* Categories mega menu */}
                                <div className="col-lg-3 d-flex">
                                    <div className="navbar-nav">
                                        <div className="col col-lg-3 d-flex gap-4 align-items-center">
                                            {/* Mobile offcanvas menu toggler (Hamburger) */}
                                            {/* Navbar brand (Logo) */}
                                            <NavLink to="/" className="navbar-brand me-0">
                                                <span className="d-sm-flex flex-shrink-0 text-primary me-2">
                                                    <img width={36} height={36} src="/assets/img/us/logos/favicon.ico" alt="Logo" />
                                                </span>
                                                <span className='d-none d-md-block d-lg-block'> Salesnet </span>
                                            </NavLink>
                                            {/*  */}
                                            <button type="button" className="btn btn-icon btn-lg btn-outline-secondary position-relative rounded-circle text-white" 
                                            data-bs-toggle="offcanvas" data-bs-target="#SideCategory" aria-controls="SideCategory" aria-label="Toggle navigation">
                                                <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-slide-end fs-lg">
                                                    <i className="ci-grid-2 fs-xl"></i></span>
                                                    </button>
                                            {/*  */}
                                        </div>
                                    </div >
                                </div >

                                < div className="col-lg-9 d-lg-flex pt-3 pt-lg-0 ps-lg-0" >
                                    <ul className="navbar-nav position-relative">

                                        <li className="nav-item me-lg-n2 me-xl-0 rounded-pill badge text-bg-orange ">
                                            <NavLink className="nav-link" to="/">
                                                <i className="ci-home fs-2 m-1" />
                                                Home</NavLink>
                                        </li>
                                        <li className="nav-item me-lg-n2 me-xl-0 rounded-pill badge text-bg-orange ">
                                            <NavLink className="nav-link" data-bs-toggle="modal" data-bs-target="#NotImplimentedPage" to="/chatme">
                                                <i className="ci-chat fs-2 m-1" />
                                                Chat-me</NavLink>
                                        </li>

                                        <li className="nav-item me-lg-n2 me-xl-0 rounded-pill badge text-bg-orange ">
                                            <NavLink className="nav-link" to="/user/favorites">
                                                <i className="ci-heart fs-2 m-1" />
                                                Favorites</NavLink>
                                        </li>
                                        <li className="nav-item me-lg-n2 me-xl-0 rounded-pill badge text-bg-orange ">
                                            <NavLink className="nav-link" to="!#" data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCart" aria-label="Shopping cart">
                                                <i className="ci-shopping-cart fs-2 m-1" />
                                                Basket.</NavLink>
                                        </li>
                                    </ul>
                                    <hr className="d-lg-none my-3" />
                                    <ul className="navbar-nav ms-auto d-flex">

                                        <li className="nav-item me-lg-n2 me-xl-n1">
                                            <NavLink to="!#" data-bs-toggle="modal" data-bs-target="#PublishPage"
                                                className="btn btn-icon btn-lg text-bg-success position-relative rounded-circle ms-2">
                                                <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-slide-end fs-lg">
                                                    <i className="ci-powerbank animate-target text-white" />
                                                </span>
                                            </NavLink>
                                        </li >

                                        <li className="nav-item me-lg-n2 me-xl-n1">
                                            <NavLink type="button" className="btn btn-icon btn-lg btn-outline-success position-relative rounded-circle animate-shake ms-2" data-bs-toggle="offcanvas" data-bs-target="#searchBox" aria-controls="searchBox" aria-label="Toggle search bar">
                                                <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success border border-3 border-dark rounded-pill"
                                                    style={{ '--czBadgePaddingY': '.25em', 'CzBadgePaddingX': '.42em' }}>3</span>
                                                <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100
                                                rounded-circle animate-slide-end fs-lg">
                                                    <i className="ci-search animate-target" />
                                                </span>
                                            </NavLink>

                                        </li >
                                        <li className="nav-item me-lg-n1">
                                            {/* <NavLink to="/auth/signin" className="btn btn-icon btn-lg btn-outline-success position-relative rounded-circle ms-2">
                                                <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success border border-3 border-dark rounded-pill" style={{ '--czBadgePaddingY': '.25em', 'CzBadgePaddingX': '.42em' }}>3</span>
                                                <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-slide-end fs-lg">
                                                    <i className="ci-user animate-target ms-n1" />
                                                </span>
                                            </NavLink> */}
                                            <NavLink to="/user/personal" type="button" className="btn btn-icon btn-lg btn-outline-success position-relative rounded-circle animate-shake ms-2" 
                        data-bs-toggle="offcanvas" data-bs-target="#accountSidebar" aria-controls="accountSidebar" data-bs-theme="light" aria-label="Toggle search bar">
                            <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success border border-3 border-dark rounded-pill" 
                            style={{ '--czBadgePaddingY': '.25em', 'CzBadgePaddingX': '.42em' }}><i className="ci-chevron-left animate-target" /></span>
                            <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-slide-end fs-lg">
                                <i className="ci-user animate-target ms-n1" />
                            </span>
                        </NavLink>
                                        </li >
                                    </ul >
                                </div >
                            </div >
                        </div >
                    </div >
                </nav >
            </div >
        </header >
    )
}

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
                    
                    <button type="button" className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle mx-2" data-bs-toggle="offcanvas" data-bs-target="#SideCategory" aria-controls="SideCategory" aria-label="Toggle navigation">
                        <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-slide-end fs-lg">
                            <i className="ci-grid-2 fs-xl" />
                        </span>
                    </button>

                    <button type="button" className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle mx-2" data-bs-toggle="modal" data-bs-target="#NotImplimentedPage" to="!#">
                        <span className="position-absolute top-50 right-100 start-100 mt-n1 ms-n3 badge text-bg-success rounded-pill" style={{ '--czBadgePaddingY': '.25em', 'CzBadgePaddingX': '.42em' }}>3</span>
                        <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-slide-end fs-lg">
                            <i className="ci-chat fs-2 m-1" />
                        </span>
                    </button>

                    <NavLink to="/" className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle mx-2">
                        <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-slide-end fs-lg">
                            <i className="ci-home fs-xl" />
                        </span>
                    </NavLink>

                    <NavLink type="button" className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle mx-2" 
                    to="/user/favorites">
                        <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success rounded-pill" style={{ '--czBadgePaddingY': '.25em', 'CzBadgePaddingX': '.42em' }}>3</span>
                        <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-slide-end fs-lg">
                            <i className="ci-heart animate-target" />
                        </span>
                    </NavLink>

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
