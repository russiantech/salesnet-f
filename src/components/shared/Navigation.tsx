// import React, { useState } from 'react'
// import { NavLink, useLocation } from 'react-router-dom'
// import Categories from './modals/Categories'
// // import { useModal } from '../../context/ModalProvider'

// const Navigation = () => {
//     return (
//         <>  <Categories/>
//             <TopNav />
//             {/* <TopNav2 /> */}
//             <BottomNav />
//         </>
//     )
// }

// export default Navigation

// const TopNav = () => {
//     const location = useLocation();
//     const { pathname } = location;
//     // const { showModal } = useModal();
//     const [userRole, setUserRole] = useState<'user' | 'vendor' | null>(null);

//     // Determine if we're on a user/vendor profile page
//     const isProfileRoute = pathname.startsWith('/user/') || pathname.startsWith('/vendor/');
    
//     // Get appropriate dashboard link based on role
//     const getDashboardLink = () => {
//         if (userRole === 'vendor') return '/vendor/dashboard';
//         if (userRole === 'user') return '/user/personal';
//         return '/auth/signin'; // Fallback for logged out users
//     };

//     // Unified sidebar toggle button
//     const renderProfileButton = () => (
//         <NavLink
//             to={isProfileRoute ? '#' : getDashboardLink()}
//             className="btn btn-icon btn-lg text-white position-relative rounded-circle animate-shake ms-2"
//             {...(isProfileRoute && {
//                 'data-bs-toggle': 'offcanvas',
//                 'data-bs-target': '#accountSidebar',
//                 'aria-controls': 'accountSidebar'
//             })}
//             data-bs-theme="light"
//             aria-label="Account menu"
//         >
//             <span className="position-absolute top-0 start-0 d-flex bg-success align-items-center justify-content-center w-100 h-100 rounded-circle animate-scale fs-lg">
//                 <i className="ci-user animate-target fs-4 m-1"/>
//             </span>
//         </NavLink>
//     );
    
//     {/* Navigation bar (Page header) */ }
//     return (
//         <header className="navbar navbar-expand-lg navbar-dark bg-dark d-block z-fixed p-0 fixed-top navbar-stuck" 
//         data-sticky-navbar="{'offset': 500}" 
//         style={{position: 'sticky',
//             top: 0,
//             zIndex: 1000,
//             backgroundColor: 'rgba(0, 0, 0, 0.9)', // Semi-transparent background
//             transition: 'background-color 0.3s ease',}}
//             >
//             <div className="container d-block py-1 py-lg-3 d-lg-none d-md-none1" data-bs-theme="dark">
//                 <div className="navbar-stuck-hide pt-1" />
//                 <div className="row flex-nowrap align-items-center g-0">
//                     <div className="col col-lg-3 d-flex align-items-center">
//                         {/* Mobile offcanvas menu toggler (Hamburger) */}
//                         {/* Navbar brand (Logo) */}
//                         <NavLink to="/" className="navbar-brand me-0">
//                             <span className="d-sm-flex flex-shrink-0 text-primary me-2">
//                                 <img width={36} height={36} src="/assets/img/us/logos/favicon.ico" alt="Logo" />
//                             </span>
//                             <span className='d-none d-md-block d-lg-block'> Salesnet </span>
//                         </NavLink>
//                     </div>
//                     <div className="col col-lg-9 d-flex align-items-center justify-content-end">
//                         {/* Publish Button */}
//                         <NavLink to="!#" data-bs-toggle="modal" data-bs-target="#PublishPage"
//                             className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle ms-2">
//                             {/* <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success border border-3 border-dark rounded-pill">3</span> */}
//                             <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-slide-end fs-lg">
//                                 <i className="ci-powerbank animate-target text-white" />
//                             </span>
//                         </NavLink>

//                         {/* <li className="nav-item">
//                         <button
//                         onClick={() => showModal('publish')}
//                         className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle ms-2"
//                         >
//                         <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-scale fs-lg">
//                             <i className="ci-send animate-target fs-4 m-1" />
//                         </span>
//                         </button>
//                     </li> */}

//                         <NavLink to="!#" className="btn btn-icon btn-lg btn-outline-success position-relative rounded-circle animate-shake ms-2" data-bs-toggle="offcanvas" data-bs-target="#searchBox" aria-controls="searchBox" aria-label="Toggle search bar">
//                             <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success border border-3 border-dark rounded-pill">3</span>
//                             <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-scale fs-lg">
//                                 <i className="ci-search animate-target" />
//                             </span>
//                         </NavLink>

//                         {renderProfileButton()}
                        
//                         {/* Go to profile */}
//                         {/* <NavLink to="/vendor/dashboard" className="btn btn-icon hover-effect-scale position-relative border rounded-circle overflow-hidden">
//                             <img src="/assets/img/account/avatar-sm.png" className="hover-effect-target position-absolute top-0 start-0 w-100 h-100 object-fit-cover" alt="Avatar" />
//                         </NavLink> */}

//                         {/* <NavLink to="/auth/signin" className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle ms-2">
//                             <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success border border-3 border-dark rounded-pill">3</span>
//                             <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-slide-end fs-lg">
//                                 <i className="ci-user animate-target ms-n1" />
//                             </span>
//                         </NavLink> */}
//                         {/* <NavLink to="/user/personal" className="btn btn-icon btn-lg btn-outline-success position-relative rounded-circle animate-shake ms-2" 
//                         data-bs-toggle="offcanvas" data-bs-target="#accountSidebar" aria-controls="accountSidebar" data-bs-theme="light" aria-label="Toggle search bar">
//                             <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success border border-3 border-dark rounded-pill" 
//                            ><i className="ci-chevron-left animate-target" /></span>
//                             <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-scale fs-lg">
//                                 <i className="ci-user animate-target" /> 0x
//                             </span>
//                         </NavLink> */}
// {/* 
//                         <div className="d-flex justify-content-center flex-grow-1">
//                             {renderProfileButton()}
//                         </div> */}

//                     </div>
//                 </div >
//             </div >
//             <div className="navbar-stuck-hide pb-1" />

//             {/* Main navigation that turns into offcanvas on screens < 992px wide (lg breakpoint) */}
//             <div className="collapse d-md-block navbar-stuck-hide">
//                 <nav className="offcanvas offcanvas-start" id="navbarNav" tabIndex={-1} aria-labelledby="navbarNavLabel">
//                     <div className="offcanvas-header py-3">
//                         <h5 className="offcanvas-title" id="navbarNavLabel">Browse Salesnet</h5>
//                         <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
//                     </div>
//                     <div className="offcanvas-body py-3 py-lg-0">
//                         <div className="container px-0 px-lg-3">
//                             <div className="row">
//                                 {/* Categories mega menu */}
//                                 <div className="col-lg-3 d-flex">
//                                     <div className="navbar-nav">
//                                         <div className="col col-lg-3 d-flex gap-4 align-items-center">
//                                             {/* Mobile offcanvas menu toggler (Hamburger) */}
//                                             {/* Navbar brand (Logo) */}
//                                             <NavLink to="/" className="navbar-brand me-0">
//                                                 <span className="d-sm-flex flex-shrink-0 text-primary me-2">
//                                                     <img width={36} height={36} src="/assets/img/us/logos/favicon.ico" alt="Logo" />
//                                                 </span>
//                                                 <span className='d-none d-md-block d-lg-block'> Salesnet </span>
//                                             </NavLink>
//                                             {/*  */}
//                                             <button type="button" className="btn btn-icon btn-lg btn-outline-secondary position-relative rounded-circle text-white" 
//                                             data-bs-toggle="offcanvas" data-bs-target="#SideCategory" aria-controls="SideCategory" aria-label="Toggle navigation">
//                                                 <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-scale fs-lg">
//                                                     <i className="ci-grid-2 fs-xl animate-target"></i></span>
//                                                     </button>
//                                             {/*  */}
//                                         </div>
//                                     </div >
//                                 </div>

//                                 {/** WIDER/LARGE SCREEN NAVIGATION */}
//                                 <div className="col-lg-9 d-lg-flex pt-3 pt-lg-0 ps-lg-0" >
//                                     <ul className="navbar-nav position-relative">

//                                         <li className="nav-item">
//                                             <NavLink className="nav-link animate-scale" to="/">
//                                                 <i className="ci-home fs-2 m-1 animate-target" />
//                                                 Home</NavLink>
//                                         </li>
//                                         <li className="nav-item">
//                                             <NavLink className="nav-link animate-scale" data-bs-toggle="modal" data-bs-target="#NotImplimentedPage" to="/chatme">
//                                                 <i className="ci-chat fs-2 m-1 animate-target" />
//                                                 Chat-me</NavLink>
//                                         </li>

//                                         <li className="nav-item">
//                                             <NavLink className="nav-link  animate-scale" to="/user/favorites">
//                                                 <i className="ci-heart fs-2 m-1 animate-target" />
//                                                 Favorites</NavLink>
//                                         </li>
//                                         <li className="nav-item">
//                                             <NavLink className="nav-link animate-scale" to="/user/basket" data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" 
//                                             aria-controls="shoppingCart" aria-label="Shopping cart">
//                                                 <i className="ci-shopping-cart fs-2 m-1 animate-target" />
//                                                  <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success border border-3 border-dark rounded-pill"
//                                                    >3 Basket</span>
//                                                 </NavLink>
//                                         </li>
//                                     </ul>
//                                     <hr className="d-lg-none my-3" />
//                                     <ul className="navbar-nav ms-auto position-relative">

//                                         <li className="nav-item ">
//                                             <NavLink to="!#" data-bs-toggle="modal" data-bs-target="#PublishPage"
//                                                 // className="btn btn-icon btn-lg text-bg-success1 text-white position-relative rounded-circle ms-2">
//                                                 className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle ms-2">
//                                                 <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-scale fs-lg">
//                                                     <i className="ci-powerbank animate-target fs-4 m-1" />
//                                                 </span>
//                                             </NavLink>
//                                         </li >

//                                         <li className="nav-item ">
//                                             {/* <NavLink type="button" className="btn btn-icon btn-lg btn-outline-success text-white position-relative rounded-circle animate-shake ms-2"  */}
//                                             <NavLink type="button" className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle ms-2" 
//                                             data-bs-toggle="offcanvas" data-bs-target="#searchBox" aria-controls="searchBox" aria-label="Toggle search bar">
//                                                 <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success border border-3 border-dark rounded-pill"
//                                                    >3</span>
//                                                 <span className="position-absolute top-0 start-0 d-flex bg-success1 align-items-center justify-content-center w-100 h-100 rounded-circle animate-scale fs-lg">
//                                                 <i className="ci-search animate-target fs-4 m-1" />
//                                                 </span>
//                                             </NavLink>

//                                         </li >
//                                         <li className="nav-item">
                                            
//                                             {renderProfileButton()}

//                                         </li >
//                                     </ul >
//                                 </div>

//                             </div >
//                         </div >
//                     </div >

//                 </nav >
//             </div >
//         </header >
//     )
// }

// const TopNav3 = () => {
//     const location = useLocation();
//     const { pathname } = location;
//     // const { showModal } = useModal();
//     const [userRole, setUserRole] = useState<'user' | 'vendor' | null>(null);

//     // Determine if we're on a user/vendor profile page
//     const isProfileRoute = pathname.startsWith('/user/') || pathname.startsWith('/vendor/');
    
//     // Get appropriate dashboard link based on role
//     const getDashboardLink = () => {
//         if (userRole === 'vendor') return '/vendor/dashboard';
//         if (userRole === 'user') return '/user/personal';
//         return '/auth/signin'; // Fallback for logged out users
//     };

//     // Unified sidebar toggle button
//     const renderProfileButton = () => (
//         <NavLink
//             to={isProfileRoute ? '#' : getDashboardLink()}
//             className="btn btn-icon btn-lg text-white position-relative rounded-circle animate-shake ms-2"
//             {...(isProfileRoute && {
//                 'data-bs-toggle': 'offcanvas',
//                 'data-bs-target': '#accountSidebar',
//                 'aria-controls': 'accountSidebar'
//             })}
//             data-bs-theme="light"
//             aria-label="Account menu"
//         >
//             <span className="position-absolute top-0 start-0 d-flex bg-success align-items-center justify-content-center w-100 h-100 rounded-circle animate-scale fs-lg">
//                 <i className="ci-user animate-target fs-4 m-1"/>
//             </span>
//         </NavLink>
//     );
    
//     {/* Navigation bar (Page header) */ }
//     return (
//         <header className="navbar navbar-expand-lg navbar-dark bg-dark d-block z-fixed p-0 fixed-top navbar-stuck" 
//         data-sticky-navbar="{'offset': 500}" style={{position: 'sticky',
//             top: 0,
//             zIndex: 1000,
//             backgroundColor: 'rgba(0, 0, 0, 0.9)', // Semi-transparent background
//             transition: 'background-color 0.3s ease',}}
//             >
//             <div className="container d-block py-1 py-lg-3 d-lg-none d-md-none1" data-bs-theme="dark">
//                 <div className="navbar-stuck-hide pt-1" />
//                 <div className="row flex-nowrap align-items-center g-0">
//                     <div className="col col-lg-3 d-flex align-items-center">
//                         {/* Mobile offcanvas menu toggler (Hamburger) */}
//                         {/* Navbar brand (Logo) */}
//                         <NavLink to="/" className="navbar-brand me-0">
//                             <span className="d-sm-flex flex-shrink-0 text-primary me-2">
//                                 <img width={36} height={36} src="/assets/img/us/logos/favicon.ico" alt="Logo" />
//                             </span>
//                             <span className='d-none d-md-block d-lg-block'> Salesnet </span>
//                         </NavLink>
//                     </div>
//                     <div className="col col-lg-9 d-flex align-items-center justify-content-end">
//                         {/* Publish Button */}
//                         <NavLink to="!#" data-bs-toggle="modal" data-bs-target="#PublishPage"
//                             className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle ms-2">
//                             {/* <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success border border-3 border-dark rounded-pill">3</span> */}
//                             <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-slide-end fs-lg">
//                                 <i className="ci-powerbank animate-target text-white" />
//                             </span>
//                         </NavLink>

//                         {/* <li className="nav-item">
//                         <button
//                         onClick={() => showModal('publish')}
//                         className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle ms-2"
//                         >
//                         <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-scale fs-lg">
//                             <i className="ci-send animate-target fs-4 m-1" />
//                         </span>
//                         </button>
//                     </li> */}

//                         <NavLink to="!#" className="btn btn-icon btn-lg btn-outline-success position-relative rounded-circle animate-shake ms-2" data-bs-toggle="offcanvas" data-bs-target="#searchBox" aria-controls="searchBox" aria-label="Toggle search bar">
//                             <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success border border-3 border-dark rounded-pill">3</span>
//                             <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-scale fs-lg">
//                                 <i className="ci-search animate-target" />
//                             </span>
//                         </NavLink>

//                         {renderProfileButton()}
                        
//                         {/* Go to profile */}
//                         {/* <NavLink to="/vendor/dashboard" className="btn btn-icon hover-effect-scale position-relative border rounded-circle overflow-hidden">
//                             <img src="/assets/img/account/avatar-sm.png" className="hover-effect-target position-absolute top-0 start-0 w-100 h-100 object-fit-cover" alt="Avatar" />
//                         </NavLink> */}

//                         {/* <NavLink to="/auth/signin" className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle ms-2">
//                             <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success border border-3 border-dark rounded-pill">3</span>
//                             <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-slide-end fs-lg">
//                                 <i className="ci-user animate-target ms-n1" />
//                             </span>
//                         </NavLink> */}
//                         {/* <NavLink to="/user/personal" className="btn btn-icon btn-lg btn-outline-success position-relative rounded-circle animate-shake ms-2" 
//                         data-bs-toggle="offcanvas" data-bs-target="#accountSidebar" aria-controls="accountSidebar" data-bs-theme="light" aria-label="Toggle search bar">
//                             <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success border border-3 border-dark rounded-pill" 
//                            ><i className="ci-chevron-left animate-target" /></span>
//                             <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-scale fs-lg">
//                                 <i className="ci-user animate-target" /> 0x
//                             </span>
//                         </NavLink> */}
// {/* 
//                         <div className="d-flex justify-content-center flex-grow-1">
//                             {renderProfileButton()}
//                         </div> */}

//                     </div>
//                 </div >
//             </div >
//             <div className="navbar-stuck-hide pb-1" />

//             {/* Main navigation that turns into offcanvas on screens < 992px wide (lg breakpoint) */}
//             <div className="collapse d-md-block navbar-stuck-hide">
//                 <nav className="offcanvas offcanvas-start" id="navbarNav" tabIndex={-1} aria-labelledby="navbarNavLabel">
//                     <div className="offcanvas-header py-3">
//                         <h5 className="offcanvas-title" id="navbarNavLabel">Browse Salesnet</h5>
//                         <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
//                     </div>
//                     <div className="offcanvas-body py-3 py-lg-0">
//                         <div className="container px-0 px-lg-3">
//                             <div className="row">
//                                 {/* Categories mega menu */}
//                                 <div className="col-lg-3 d-flex">
//                                     <div className="navbar-nav">
//                                         <div className="col col-lg-3 d-flex gap-4 align-items-center">
//                                             {/* Mobile offcanvas menu toggler (Hamburger) */}
//                                             {/* Navbar brand (Logo) */}
//                                             <NavLink to="/" className="navbar-brand me-0">
//                                                 <span className="d-sm-flex flex-shrink-0 text-primary me-2">
//                                                     <img width={36} height={36} src="/assets/img/us/logos/favicon.ico" alt="Logo" />
//                                                 </span>
//                                                 <span className='d-none d-md-block d-lg-block'> Salesnet </span>
//                                             </NavLink>
//                                             {/*  */}
//                                             <button type="button" className="btn btn-icon btn-lg btn-outline-secondary position-relative rounded-circle text-white" 
//                                             data-bs-toggle="offcanvas" data-bs-target="#SideCategory" aria-controls="SideCategory" aria-label="Toggle navigation">
//                                                 <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-scale fs-lg">
//                                                     <i className="ci-grid-2 fs-xl animate-target"></i></span>
//                                                     </button>
//                                             {/*  */}
//                                         </div>
//                                     </div >
//                                 </div>

//                                 {/** WIDER/LARGE SCREEN NAVIGATION */}
//                                 <div className="col-lg-9 d-lg-flex pt-3 pt-lg-0 ps-lg-0" >
//                                     <ul className="navbar-nav position-relative">

//                                         <li className="nav-item">
//                                             <NavLink className="nav-link animate-scale" to="/">
//                                                 <i className="ci-home fs-2 m-1 animate-target" />
//                                                 Home</NavLink>
//                                         </li>
//                                         <li className="nav-item">
//                                             <NavLink className="nav-link animate-scale" data-bs-toggle="modal" data-bs-target="#NotImplimentedPage" to="/chatme">
//                                                 <i className="ci-chat fs-2 m-1 animate-target" />
//                                                 Chat-me</NavLink>
//                                         </li>

//                                         <li className="nav-item">
//                                             <NavLink className="nav-link  animate-scale" to="/user/favorites">
//                                                 <i className="ci-heart fs-2 m-1 animate-target" />
//                                                 Favorites</NavLink>
//                                         </li>
//                                         <li className="nav-item">
//                                             <NavLink className="nav-link animate-scale" to="/user/basket" data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" 
//                                             aria-controls="shoppingCart" aria-label="Shopping cart">
//                                                 <i className="ci-shopping-cart fs-2 m-1 animate-target" />
//                                                  <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success border border-3 border-dark rounded-pill"
//                                                    >3 Basket</span>
//                                                 </NavLink>
//                                         </li>
//                                     </ul>
//                                     <hr className="d-lg-none my-3" />
//                                     <ul className="navbar-nav ms-auto position-relative">

//                                         <li className="nav-item ">
//                                             <NavLink to="!#" data-bs-toggle="modal" data-bs-target="#PublishPage"
//                                                 // className="btn btn-icon btn-lg text-bg-success1 text-white position-relative rounded-circle ms-2">
//                                                 className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle ms-2">
//                                                 <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-scale fs-lg">
//                                                     <i className="ci-powerbank animate-target fs-4 m-1" />
//                                                 </span>
//                                             </NavLink>
//                                         </li >

//                                         <li className="nav-item ">
//                                             {/* <NavLink type="button" className="btn btn-icon btn-lg btn-outline-success text-white position-relative rounded-circle animate-shake ms-2"  */}
//                                             <NavLink type="button" className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle ms-2" 
//                                             data-bs-toggle="offcanvas" data-bs-target="#searchBox" aria-controls="searchBox" aria-label="Toggle search bar">
//                                                 <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success border border-3 border-dark rounded-pill"
//                                                    >3</span>
//                                                 <span className="position-absolute top-0 start-0 d-flex bg-success1 align-items-center justify-content-center w-100 h-100 rounded-circle animate-scale fs-lg">
//                                                 <i className="ci-search animate-target fs-4 m-1" />
//                                                 </span>
//                                             </NavLink>

//                                         </li >
//                                         <li className="nav-item">
                                            
//                                             {renderProfileButton()}

//                                         </li >
//                                     </ul >
//                                 </div>

//                             </div >
//                         </div >
//                     </div >

//                 </nav >
//             </div >
//         </header >
//     )
// }

// const TopNav2 = () => {
//     const location = useLocation();
//     const { pathname } = location;
//     const [userRole, setUserRole] = useState<'user' | 'vendor' | null>(null);

//     // Determine if we're on a user/vendor profile page
//     const isProfileRoute = pathname.startsWith('/user/') || pathname.startsWith('/vendor/');
    
//     // Get appropriate dashboard link based on role
//     const getDashboardLink = () => {
//         if (userRole === 'vendor') return '/vendor/dashboard';
//         if (userRole === 'user') return '/user/personal';
//         return '/auth/signin'; // Fallback for logged out users
//     };

//     // Unified sidebar toggle button
//     const renderProfileButton = () => (
//         <NavLink
//             to={isProfileRoute ? '#' : getDashboardLink()}
//             className="btn btn-icon btn-lg btn-outline-success position-relative rounded-circle animate-shake ms-2"
//             {...(isProfileRoute && {
//                 'data-bs-toggle': 'offcanvas',
//                 'data-bs-target': '#accountSidebar',
//                 'aria-controls': 'accountSidebar'
//             })}
//             data-bs-theme="light"
//             aria-label="Account menu"
//         >
//             <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success border border-3 border-dark rounded-pill" 
//                >
//                 <i className="ci-chevron-left animate-target" />
//             </span>
//             <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-scale fs-lg">
//                 <i className="ci-user animate-target" />
//             </span>
//         </NavLink>
//     );

//     return (
//         <header className="navbar navbar-expand-lg navbar-dark bg-dark d-block z-fixed p-0 navbar-stuck" data-sticky-navbar="{'offset': 500}">
//             <div className="container d-block py-1 py-lg-3 d-lg-none d-md-none1" data-bs-theme="dark">
//                 <div className="navbar-stuck-hide pt-1" />
//                 <div className="row flex-nowrap align-items-center g-0">
//                     {/* Logo and other elements... */}
//                     <NavLink to="/" className="navbar-brand me-0">
//                             <span className="d-sm-flex flex-shrink-0 text-primary me-2">
//                                 <img width={36} height={36} src="/assets/img/us/logos/favicon.ico" alt="Logo" />
//                             </span>
//                             <span className='d-none d-md-block d-lg-block'> Salesnet </span>
//                         </NavLink>

//                     <div className="col col-lg-9 d-flex align-items-center justify-content-end">
//                         {/* Other navigation elements... */}
//                         <NavLink to="!#" data-bs-toggle="modal" data-bs-target="#PublishPage"
//                             className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle ms-2">
//                             {/* <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success border border-3 border-dark rounded-pill">3</span> */}
//                             <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-slide-end fs-lg">
//                                 <i className="ci-powerbank animate-target text-white" />
//                                 {/* <i className="ci-send animate-target text-white" /> */}
//                             </span>
//                         </NavLink>

//                         <button type="button" className="btn btn-icon btn-lg btn-outline-success position-relative rounded-circle animate-shake ms-2" data-bs-toggle="offcanvas" data-bs-target="#searchBox" aria-controls="searchBox" aria-label="Toggle search bar">
//                             <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success border border-3 border-dark rounded-pill">3</span>
//                             <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-scale fs-lg">
//                                 <i className="ci-search animate-target" />
//                             </span>
//                         </button>
//                         {/* Centralized Profile Button */}
//                         <div className="d-flex justify-content-center flex-grow-1">
//                             {renderProfileButton()}
//                         </div>

//                     </div>
//                 </div>
//             </div>
            
//             {/* Rest of the navigation structure... */}
//         </header>
//     );
// };

// const BottomNav = () => {
//     // Styles for the navigation
//     const styles = {
//         nav_div: {
//             // paddingLeft: '15px',
//             // paddingRight: '15px',
//             display: 'flex',
//             maxWidth: '600px',
//             marginRight: 'auto',
//             marginLeft: 'auto',
//             alignItems: 'center',
//             justifyContent: 'space-between', // Space between buttons
//             overflow: 'hidden', // Prevent overflow
//             whiteSpace: 'nowrap', // Prevent wrapping
//             flexWrap: 'nowrap' // Prevent wrapping
//         }
//     };

//     return (
//         <header className="navbar navbar-expand-lg bg-body shadow px-0 fixed-bottom align-items-center">
//             <div className="container-fluid">
//                 <div style={styles.nav_div} className="d-flex py-lg-1">
                    
//                     <button type="button" className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle mx-2" data-bs-toggle="offcanvas" data-bs-target="#SideCategory" aria-controls="SideCategory" aria-label="Toggle navigation">
//                         <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-scale fs-lg">
//                             <i className="ci-grid-2 fs-2 m-1 animate-target" />
//                         </span>
//                     </button>

//                     <NavLink type="button" className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle mx-2" data-bs-toggle="modal" data-bs-target="#NotImplimentedPage" to="#NotImplimentedPage">
//                         <span className="position-absolute top-50 right-100 start-100 mt-n1 ms-n3 badge text-bg-success rounded-pill animate-target">3</span>
//                         <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-scale fs-lg">
//                             <i className="ci-chat fs-2 m-1 animate-target" />
//                         </span>
//                     </NavLink>

//                     <NavLink to="/" className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle mx-2">
//                         <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-scale fs-lg">
//                             <i className="ci-home fs-2 m-1 animate-target" />
//                         </span>
//                     </NavLink>

//                     <NavLink className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle mx-2" 
//                     to="/user/favorites">
//                         <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success rounded-pill">3</span>
//                         <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-scale fs-lg">
//                             <i className="ci-heart fs-2 m-1 animate-target" />
//                         </span>
//                     </NavLink>

//                     <NavLink className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle mx-2" to="#shoppingCart" data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCart" aria-label="Shopping cart">
//                         <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success rounded-pill">3</span>
//                         <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-scale fs-lg">
//                             <i className="ci-shopping-cart fs-2 m-1 animate-target" />
//                         </span>
//                     </NavLink>
//                 </div>
//             </div>
//         </header>
//     );
// };
// function useEffect(arg0: () => () => void, arg1: never[]) {
//     throw new Error('Function not implemented.')
// }



// VERSION 02

// import { useState } from 'react';
// import { NavLink, useLocation } from 'react-router-dom';
// import Categories from './modals/Categories';

// const Navigation = () => {
//     return (
//         <>
//             <Categories />
//             <TopNav />
//             <BottomNav />
//         </>
//     );
// };

// export default Navigation;

// // ========================
// // Top Navigation Component
// // ========================
// interface TopNavProps {
//     userRole?: 'user' | 'vendor';
// }

// const TopNav = ({ userRole }: TopNavProps) => {
//     const location = useLocation();
//     const { pathname } = location;
//     const isProfileRoute = pathname.startsWith('/user/') || pathname.startsWith('/vendor/');

//     const getDashboardLink = () => {
//         if (userRole === 'vendor') return '/vendor/dashboard';
//         if (userRole === 'user') return '/user/personal';
//         return '/auth/signin';
//     };

//     const renderProfileButton = () => (
//         <NavLink
//             to={isProfileRoute ? '#' : getDashboardLink()}
//             className="btn btn-icon btn-lg text-white position-relative rounded-circle animate-shake ms-2"
//             {...(isProfileRoute && {
//                 'data-bs-toggle': 'offcanvas',
//                 'data-bs-target': '#accountSidebar',
//                 'aria-controls': 'accountSidebar'
//             })}
//             data-bs-theme="light"
//             aria-label="Account menu"
//         >
//             <span className="position-absolute top-0 start-0 d-flex bg-success align-items-center justify-content-center w-100 h-100 rounded-circle animate-scale fs-lg">
//                 <i className="ci-user animate-target fs-4 m-1" />
//             </span>
//         </NavLink>
//     );

//     return (
//         <header className="navbar navbar-expand-lg navbar-dark bg-dark d-block z-fixed p-0 fixed-top navbar-stuck" 
//             data-sticky-navbar="{'offset': 500}" 
//             style={{
//                 position: 'sticky',
//                 top: 0,
//                 zIndex: 1000,
//                 backgroundColor: 'rgba(0, 0, 0, 0.9)',
//                 transition: 'background-color 0.3s ease'
//             }}>
            
//             {/* Mobile Header */}
//             <div className="container d-block py-1 py-lg-3 d-lg-none d-md-none1" data-bs-theme="dark">
//                 <div className="navbar-stuck-hide pt-1" />
//                 <div className="row flex-nowrap align-items-center g-0">
//                     <div className="col col-lg-3 d-flex align-items-center">
//                         <NavLink to="/" className="navbar-brand me-0">
//                             <span className="d-sm-flex flex-shrink-0 text-primary me-2">
//                                 <img width={36} height={36} src="/assets/img/us/logos/favicon.ico" alt="Logo" />
//                             </span>
//                             <span className='d-none d-md-block d-lg-block'>Salesnet</span>
//                         </NavLink>
//                     </div>
//                     <div className="col col-lg-9 d-flex align-items-center justify-content-end">
//                         <NavLink 
//                             to="#" 
//                             data-bs-toggle="modal" 
//                             data-bs-target="#PublishPage"
//                             className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle ms-2"
//                             aria-label="Publish"
//                         >
//                             <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-slide-end fs-lg">
//                                 <i className="ci-powerbank animate-target text-white" />
//                             </span>
//                         </NavLink>

//                         <NavLink 
//                             to="#" 
//                             className="btn btn-icon btn-lg btn-outline-success position-relative rounded-circle animate-shake ms-2" 
//                             data-bs-toggle="offcanvas" 
//                             data-bs-target="#searchBox" 
//                             aria-controls="searchBox" 
//                             aria-label="Search"
//                         >
//                             <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success border border-3 border-dark rounded-pill">3</span>
//                             <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-scale fs-lg">
//                                 <i className="ci-search animate-target" />
//                             </span>
//                         </NavLink>

//                         {renderProfileButton()}
//                     </div>
//                 </div>
//             </div>
//             <div className="navbar-stuck-hide pb-1" />

//             {/* Desktop Navigation */}
//             <div className="collapse d-md-block navbar-stuck-hide">
//                 <nav className="offcanvas offcanvas-start" id="navbarNav" tabIndex={-1} aria-labelledby="navbarNavLabel">
//                     <div className="offcanvas-header py-3">
//                         <h5 className="offcanvas-title" id="navbarNavLabel">Browse Salesnet</h5>
//                         <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
//                     </div>
//                     <div className="offcanvas-body py-3 py-lg-0">
//                         <div className="container px-0 px-lg-3">
//                             <div className="row">
//                                 <div className="col-lg-3 d-flex">
//                                     <div className="navbar-nav">
//                                         <div className="col col-lg-3 d-flex gap-4 align-items-center">
//                                             <NavLink to="/" className="navbar-brand me-0">
//                                                 <span className="d-sm-flex flex-shrink-0 text-primary me-2">
//                                                     <img width={36} height={36} src="/assets/img/us/logos/favicon.ico" alt="Logo" />
//                                                 </span>
//                                                 <span className='d-none d-md-block d-lg-block'>Salesnet</span>
//                                             </NavLink>
//                                             <button 
//                                                 type="button" 
//                                                 className="btn btn-icon btn-lg btn-outline-secondary position-relative rounded-circle text-white" 
//                                                 data-bs-toggle="offcanvas" 
//                                                 data-bs-target="#SideCategory" 
//                                                 aria-controls="SideCategory" 
//                                                 aria-label="Categories"
//                                             >
//                                                 <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-scale fs-lg">
//                                                     <i className="ci-grid-2 fs-xl animate-target" />
//                                                 </span>
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="col-lg-9 d-lg-flex pt-3 pt-lg-0 ps-lg-0">
//                                     <ul className="navbar-nav position-relative">
//                                         <NavItem to="/" icon="ci-home" label="Home" />
//                                         <NavItem 
//                                             to="/chatme" 
//                                             icon="ci-chat" 
//                                             label="Chat-me" 
//                                             modalTarget="#NotImplimentedPage" 
//                                         />
//                                         <NavItem to="/user/favorites" icon="ci-heart" label="Favorites" />
//                                         <NavItem 
//                                             to="/user/basket" 
//                                             icon="ci-shopping-cart" 
//                                             label="Basket"
//                                             offcanvasTarget="#shoppingCart"
//                                             badgeCount={3}
//                                         />
//                                     </ul>
//                                     <hr className="d-lg-none my-3" />
//                                     <ul className="navbar-nav ms-auto position-relative">
//                                         <NavIconButton 
//                                             to="#" 
//                                             icon="ci-powerbank" 
//                                             modalTarget="#PublishPage"
//                                             className="ms-2"
//                                         />
//                                         <NavIconButton 
//                                             to="#" 
//                                             icon="ci-search" 
//                                             offcanvasTarget="#searchBox"
//                                             ariaLabel="Search"
//                                             badgeCount={3}
//                                             className="ms-2"
//                                         />
//                                         <li className="nav-item">
//                                             {renderProfileButton()}
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </nav>
//             </div>
//         </header>
//     );
// };

// // ==========================
// // Bottom Navigation Component
// // ==========================
// const BottomNav = () => {
//     const navStyle = {
//         display: 'flex',
//         maxWidth: '600px',
//         margin: '0 auto',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         overflow: 'hidden',
//         whiteSpace: 'nowrap',
//         flexWrap: 'nowrap'
//     };

//     return (
//         <header className="navbar navbar-expand-lg bg-body shadow px-0 fixed-bottom align-items-center">
//             <div className="container-fluid">
//                 <div style={{navStyle}} className="d-flex py-lg-1">
//                     <NavIconButton 
//                         icon="ci-grid-2" 
//                         offcanvasTarget="#SideCategory" 
//                         ariaLabel="Categories"
//                         className="mx-2"
//                     />
//                     <NavIconButton 
//                         to="#" 
//                         icon="ci-chat" 
//                         modalTarget="#NotImplimentedPage"
//                         badgeCount={3}
//                         className="mx-2"
//                     />
//                     <NavIconButton 
//                         to="/" 
//                         icon="ci-home" 
//                         className="mx-2"
//                     />
//                     <NavIconButton 
//                         to="/user/favorites" 
//                         icon="ci-heart" 
//                         badgeCount={3}
//                         className="mx-2"
//                     />
//                     <NavIconButton 
//                         to="#shoppingCart" 
//                         icon="ci-shopping-cart" 
//                         offcanvasTarget="#shoppingCart"
//                         badgeCount={3}
//                         ariaLabel="Shopping cart"
//                         className="mx-2"
//                     />
//                 </div>
//             </div>
//         </header>
//     );
// };

// // =====================
// // Helper Components
// // =====================
// interface NavItemProps {
//     to: string;
//     icon: string;
//     label: string;
//     modalTarget?: string;
//     offcanvasTarget?: string;
//     badgeCount?: number;
// }

// const NavItem = ({ to, icon, label, modalTarget, offcanvasTarget, badgeCount }: NavItemProps) => (
//     <li className="nav-item">
//         <NavLink 
//             className="nav-link animate-scale" 
//             to={to}
//             {...(modalTarget && { 'data-bs-toggle': 'modal', 'data-bs-target': modalTarget })}
//             {...(offcanvasTarget && { 'data-bs-toggle': 'offcanvas', 'data-bs-target': offcanvasTarget })}
//             aria-controls={offcanvasTarget}
//             aria-label={label}
//         >
//             <i className={`${icon} fs-2 m-1 animate-target`} />
//             {label}
//             {badgeCount && (
//                 <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success border border-3 border-dark rounded-pill">
//                     {badgeCount}
//                 </span>
//             )}
//         </NavLink>
//     </li>
// );

// interface NavIconButtonProps {
//     to?: string;
//     icon: string;
//     modalTarget?: string;
//     offcanvasTarget?: string;
//     badgeCount?: number;
//     ariaLabel?: string;
//     className?: string;
// }

// const NavIconButton = ({ 
//     to = "#", 
//     icon, 
//     modalTarget, 
//     offcanvasTarget, 
//     badgeCount, 
//     ariaLabel, 
//     className = "" 
// }: NavIconButtonProps) => (
//     <NavLink 
//         to={to}
//         className={`btn btn-icon btn-lg btn-secondary position-relative rounded-circle ${className}`}
//         {...(modalTarget && { 'data-bs-toggle': 'modal', 'data-bs-target': modalTarget })}
//         {...(offcanvasTarget && { 'data-bs-toggle': 'offcanvas', 'data-bs-target': offcanvasTarget })}
//         aria-controls={offcanvasTarget}
//         aria-label={ariaLabel}
//     >
//         {badgeCount && (
//             <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success rounded-pill">
//                 {badgeCount}
//             </span>
//         )}
//         <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-scale fs-lg">
//             <i className={`${icon} fs-2 m-1 animate-target`} />
//         </span>
//     </NavLink>
// );


// VERSION 03

// import { useState } from 'react';
// import { NavLink, useLocation } from 'react-router-dom';
// import Categories from './modals/Categories';

// const Navigation = () => {
//     return (
//         <>
//             <Categories />
//             <TopNav />
//             <BottomNav />
//         </>
//     );
// };

// export default Navigation;

// const TopNav = () => {
//     const location = useLocation();
//     const { pathname } = location;
//     const [userRole] = useState<'user' | 'vendor' | null>(null);

//     const isProfileRoute = pathname.startsWith('/user/') || pathname.startsWith('/vendor/');
    
//     const getDashboardLink = () => {
//         if (userRole === 'vendor') return '/vendor/dashboard';
//         if (userRole === 'user') return '/user/personal';
//         return '/auth/signin';
//     };

//     const renderProfileButton = () => (
//         <NavLink
//             to={isProfileRoute ? '#' : getDashboardLink()}
//             className="btn btn-icon btn-lg text-white position-relative rounded-circle animate-shake ms-2"
//             {...(isProfileRoute && {
//                 'data-bs-toggle': 'offcanvas',
//                 'data-bs-target': '#accountSidebar',
//                 'aria-controls': 'accountSidebar'
//             })}
//             data-bs-theme="light"
//             aria-label="Account menu"
//         >
//             <span className="position-absolute top-0 start-0 d-flex bg-success align-items-center justify-content-center w-100 h-100 rounded-circle animate-scale fs-lg">
//                 <i className="ci-user animate-target fs-4 m-1"/>
//             </span>
//         </NavLink>
//     );
    
//     return (
//         <header 
//             className="navbar navbar-expand-lg navbar-dark bg-dark d-block z-fixed p-0 fixed-top navbar-stuck" 
             
//             style={{
//                 position: 'sticky',
//                 top: 0,
//                 zIndex: 1000,
//                 backgroundColor: 'rgba(0, 0, 0, 0.9)',
//                 transition: 'background-color 0.3s ease'
//             }}
//         >
//             <div className="container d-block py-1 py-lg-3 d-lg-none d-md-none1" data-bs-theme="dark">
//                 <div className="navbar-stuck-hide pt-1" />
//                 <div className="row flex-nowrap align-items-center g-0">
//                     <div className="col col-lg-3 d-flex align-items-center">
//                         <NavLink to="/" className="navbar-brand me-0">
//                             <span className="d-sm-flex flex-shrink-0 text-primary me-2">
//                                 <img width={36} height={36} src="/assets/img/us/logos/favicon.ico" alt="Logo" />
//                             </span>
//                             <span className='d-none d-md-block d-lg-block'>Salesnet</span>
//                         </NavLink>
//                     </div>
//                     <div className="col col-lg-9 d-flex align-items-center justify-content-end">
//                         <NavLink 
//                             to="#" 
//                             data-bs-toggle="modal" 
//                             data-bs-target="#PublishPage"
//                             className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle ms-2"
//                         >
//                             <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-slide-end fs-lg">
//                                 <i className="ci-powerbank animate-target text-white" />
//                             </span>
//                         </NavLink>

//                         <NavLink 
//                             to="#" 
//                             className="btn btn-icon btn-lg btn-outline-success position-relative rounded-circle animate-shake ms-2" 
//                             data-bs-toggle="offcanvas" 
//                             data-bs-target="#searchBox" 
//                             aria-controls="searchBox" 
//                             aria-label="Toggle search bar"
//                         >
//                             <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success border border-3 border-dark rounded-pill">3</span>
//                             <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-scale fs-lg">
//                                 <i className="ci-search animate-target" />
//                             </span>
//                         </NavLink>

//                         {renderProfileButton()}
//                     </div>
//                 </div>
//             </div>
//             <div className="navbar-stuck-hide pb-1" />

//             <div className="collapse d-md-block navbar-stuck-hide">
//                 <nav className="offcanvas offcanvas-start" id="navbarNav" tabIndex={-1} aria-labelledby="navbarNavLabel">
//                     <div className="offcanvas-header py-3">
//                         <h5 className="offcanvas-title" id="navbarNavLabel">Browse Salesnet</h5>
//                         <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
//                     </div>
//                     <div className="offcanvas-body py-3 py-lg-0">
//                         <div className="container px-0 px-lg-3">
//                             <div className="row">
//                                 <div className="col-lg-3 d-flex">
//                                     <div className="navbar-nav">
//                                         <div className="col col-lg-3 d-flex gap-4 align-items-center">
//                                             <NavLink to="/" className="navbar-brand me-0">
//                                                 <span className="d-sm-flex flex-shrink-0 text-primary me-2">
//                                                     <img width={36} height={36} src="/assets/img/us/logos/favicon.ico" alt="Logo" />
//                                                 </span>
//                                                 <span className='d-none d-md-block d-lg-block'>Salesnet</span>
//                                             </NavLink>
//                                             <button 
//                                                 type="button" 
//                                                 className="btn btn-icon btn-lg btn-outline-secondary position-relative rounded-circle text-white" 
//                                                 data-bs-toggle="offcanvas" 
//                                                 data-bs-target="#SideCategory" 
//                                                 aria-controls="SideCategory" 
//                                                 aria-label="Toggle navigation"
//                                             >
//                                                 <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-scale fs-lg">
//                                                     <i className="ci-grid-2 fs-xl animate-target"></i>
//                                                 </span>
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="col-lg-9 d-lg-flex pt-3 pt-lg-0 ps-lg-0">
//                                     <ul className="navbar-nav position-relative">
//                                         <li className="nav-item">
//                                             <NavLink className="nav-link animate-scale" to="/">
//                                                 <i className="ci-home fs-2 m-1 animate-target" />
//                                                 Home
//                                             </NavLink>
//                                         </li>
//                                         <li className="nav-item">
//                                             <NavLink 
//                                                 className="nav-link animate-scale" 
//                                                 data-bs-toggle="modal" 
//                                                 data-bs-target="#NotImplimentedPage" 
//                                                 to="/chatme"
//                                             >
//                                                 <i className="ci-chat fs-2 m-1 animate-target" />
//                                                 Chat-me
//                                             </NavLink>
//                                         </li>
//                                         <li className="nav-item">
//                                             <NavLink className="nav-link animate-scale" to="/user/favorites">
//                                                 <i className="ci-heart fs-2 m-1 animate-target" />
//                                                 Favorites
//                                             </NavLink>
//                                         </li>
//                                         <li className="nav-item">
//                                             <NavLink 
//                                                 className="nav-link animate-scale" 
//                                                 to="/user/basket" 
//                                                 data-bs-toggle="offcanvas" 
//                                                 data-bs-target="#shoppingCart" 
//                                                 aria-controls="shoppingCart" 
//                                                 aria-label="Shopping cart"
//                                             >
//                                                 <i className="ci-shopping-cart fs-2 m-1 animate-target" />
//                                                 <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success border border-3 border-dark rounded-pill">
//                                                     3 Basket
//                                                 </span>
//                                             </NavLink>
//                                         </li>
//                                     </ul>
//                                     <hr className="d-lg-none my-3" />
//                                     <ul className="navbar-nav ms-auto position-relative">
//                                         <li className="nav-item">
//                                             <NavLink 
//                                                 to="#" 
//                                                 data-bs-toggle="modal" 
//                                                 data-bs-target="#PublishPage"
//                                                 className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle ms-2"
//                                             >
//                                                 <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-scale fs-lg">
//                                                     <i className="ci-powerbank animate-target fs-4 m-1" />
//                                                 </span>
//                                             </NavLink>
//                                         </li>
//                                         <li className="nav-item">
//                                             <NavLink 
//                                                 to={'#'}
//                                                 type="button" 
//                                                 className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle ms-2" 
//                                                 data-bs-toggle="offcanvas" 
//                                                 data-bs-target="#searchBox" 
//                                                 aria-controls="searchBox" 
//                                                 aria-label="Toggle search bar"
//                                             >
//                                                 <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success border border-3 border-dark rounded-pill">
//                                                     3
//                                                 </span>
//                                                 <span className="position-absolute top-0 start-0 d-flex bg-success1 align-items-center justify-content-center w-100 h-100 rounded-circle animate-scale fs-lg">
//                                                     <i className="ci-search animate-target fs-4 m-1" />
//                                                 </span>
//                                             </NavLink>
//                                         </li>
//                                         <li className="nav-item">
//                                             {renderProfileButton()}
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </nav>
//             </div>
//         </header>
//     );
// };

// const BottomNav = () => {
//     return (
//         <header className="navbar navbar-expand-lg bg-body shadow px-0 fixed-bottom align-items-center">
//             <div className="container-fluid">
//                 <div 
//                     className="d-flex py-lg-1" 
//                     style={{
//                         display: 'flex',
//                         maxWidth: '600px',
//                         margin: '0 auto',
//                         alignItems: 'center',
//                         justifyContent: 'space-between',
//                         overflow: 'hidden',
//                         whiteSpace: 'nowrap',
//                         flexWrap: 'nowrap'
//                     }}
//                 >
//                     <button 
//                         type="button" 
//                         className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle mx-2" 
//                         data-bs-toggle="offcanvas" 
//                         data-bs-target="#SideCategory" 
//                         aria-controls="SideCategory" 
//                         aria-label="Toggle navigation"
//                     >
//                         <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-scale fs-lg">
//                             <i className="ci-grid-2 fs-2 m-1 animate-target" />
//                         </span>
//                     </button>

//                     <NavLink 
//                         type="button" 
//                         className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle mx-2" 
//                         data-bs-toggle="modal" 
//                         data-bs-target="#NotImplimentedPage" 
//                         to="#NotImplimentedPage"
//                     >
//                         <span className="position-absolute top-50 right-100 start-100 mt-n1 ms-n3 badge text-bg-success rounded-pill animate-target">3</span>
//                         <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-scale fs-lg">
//                             <i className="ci-chat fs-2 m-1 animate-target" />
//                         </span>
//                     </NavLink>

//                     <NavLink to="/" className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle mx-2">
//                         <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-scale fs-lg">
//                             <i className="ci-home fs-2 m-1 animate-target" />
//                         </span>
//                     </NavLink>

//                     <NavLink 
//                         className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle mx-2" 
//                         to="/user/favorites"
//                     >
//                         <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success rounded-pill">3</span>
//                         <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-scale fs-lg">
//                             <i className="ci-heart fs-2 m-1 animate-target" />
//                         </span>
//                     </NavLink>

//                     <NavLink 
//                         className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle mx-2" 
//                         to="#shoppingCart" 
//                         data-bs-toggle="offcanvas" 
//                         data-bs-target="#shoppingCart" 
//                         aria-controls="shoppingCart" 
//                         aria-label="Shopping cart"
//                     >
//                         <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success rounded-pill">3</span>
//                         <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-scale fs-lg">
//                             <i className="ci-shopping-cart fs-2 m-1 animate-target" />
//                         </span>
//                     </NavLink>
//                 </div>
//             </div>
//         </header>
//     );
// };

// VERSION 04

import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Categories from './modals/Categories';

const Navigation = () => {
    return (
        <>
            <Categories />
            <TopNav />
            <BottomNav />
        </>
    );
};

export default Navigation;

const TopNav = () => {
    const location = useLocation();
    const { pathname } = location;
    const [userRole] = useState<'user' | 'vendor' | null>(null);

    const isProfileRoute = pathname.startsWith('/user/') || pathname.startsWith('/vendor/');
    
    const getDashboardLink = () => {
        if (userRole === 'vendor') return '/vendor/dashboard';
        if (userRole === 'user') return '/user/personal';
        return '/auth/signin';
    };

    const renderProfileButton = () => (
        <NavLink
            to={isProfileRoute ? '#' : getDashboardLink()}
            className="btn btn-icon btn-lg text-white position-relative rounded-circle animate-shake ms-2"
            {...(isProfileRoute && {
                'data-bs-toggle': 'offcanvas',
                'data-bs-target': '#accountSidebar',
                'aria-controls': 'accountSidebar'
            })}
            data-bs-theme="light"
            aria-label="Account menu"
        >
            <span className="position-absolute top-0 start-0 d-flex bg-success align-items-center justify-content-center w-100 h-100 rounded-circle animate-scale fs-lg">
                <i className="ci-user animate-target fs-4 m-1"/>
            </span>
        </NavLink>
    );
    
    return (
        <header  className="navbar navbar-expand-lg navbar-dark bg-dark d-block z-fixed p-0 fixed-top navbar-stuck"
            style={{
                position: 'sticky !important',
                top: 0,
                zIndex: 1030,
                backgroundColor: 'rgba(0, 0, 0, 0.95)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
            }}
        >
            <div className="container d-block py-1 py-lg-3 d-lg-none d-md-none1" data-bs-theme="dark">
                <div className="navbar-stuck-hide pt-1" />
                <div className="row flex-nowrap align-items-center g-0">
                    <div className="col col-lg-3 d-flex align-items-center">
                        <NavLink to="/" className="navbar-brand me-0">
                            <span className="d-sm-flex flex-shrink-0 text-primary me-2">
                                <img width={36} height={36} src="/assets/img/us/logos/favicon.ico" alt="Logo" />
                            </span>
                            <span className='d-none d-md-block d-lg-block'>Salesnet</span>
                        </NavLink>
                    </div>
                    <div className="col col-lg-9 d-flex align-items-center justify-content-end">
                        <NavLink 
                            to="#" 
                            data-bs-toggle="modal" 
                            data-bs-target="#PublishPage"
                            className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle ms-2"
                        >
                            <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-slide-end fs-lg">
                                <i className="ci-powerbank animate-target text-white" />
                            </span>
                        </NavLink>

                        <NavLink 
                            to="#" 
                            className="btn btn-icon btn-lg btn-outline-success position-relative rounded-circle animate-shake ms-2" 
                            data-bs-toggle="offcanvas" 
                            data-bs-target="#searchBox" 
                            aria-controls="searchBox" 
                            aria-label="Toggle search bar"
                        >
                            <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success border border-3 border-dark rounded-pill">3</span>
                            <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-scale fs-lg">
                                <i className="ci-search animate-target" />
                            </span>
                        </NavLink>

                        {renderProfileButton()}
                    </div>
                </div>
            </div>
            <div className="navbar-stuck-hide pb-1" />

            <div className="collapse d-md-block navbar-stuck-hide">
                <nav className="offcanvas offcanvas-start" id="navbarNav" tabIndex={-1} aria-labelledby="navbarNavLabel">
                    <div className="offcanvas-header py-3">
                        <h5 className="offcanvas-title" id="navbarNavLabel">Browse Salesnet</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                    </div>
                    <div className="offcanvas-body py-3 py-lg-0">
                        <div className="container px-0 px-lg-3">
                            <div className="row">
                                <div className="col-lg-3 d-flex">
                                    <div className="navbar-nav">
                                        <div className="col col-lg-3 d-flex gap-4 align-items-center">
                                            <NavLink to="/" className="navbar-brand me-0">
                                                <span className="d-sm-flex flex-shrink-0 text-primary me-2">
                                                    <img width={36} height={36} src="/assets/img/us/logos/favicon.ico" alt="Logo" />
                                                </span>
                                                <span className='d-none d-md-block d-lg-block'>Salesnet</span>
                                            </NavLink>
                                            <button 
                                                type="button" 
                                                className="btn btn-icon btn-lg btn-outline-secondary position-relative rounded-circle text-white" 
                                                data-bs-toggle="offcanvas" 
                                                data-bs-target="#SideCategory" 
                                                aria-controls="SideCategory" 
                                                aria-label="Toggle navigation"
                                            >
                                                <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-scale fs-lg">
                                                    <i className="ci-grid-2 fs-xl animate-target"></i>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-9 d-lg-flex pt-3 pt-lg-0 ps-lg-0">
                                    <ul className="navbar-nav position-relative">
                                        <li className="nav-item">
                                            <NavLink className="nav-link animate-scale" to="/">
                                                <i className="ci-home fs-2 m-1 animate-target" />
                                                Home
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink 
                                                className="nav-link animate-scale" 
                                                data-bs-toggle="modal" 
                                                data-bs-target="#NotImplimentedPage" 
                                                to="/chatme"
                                            >
                                                <i className="ci-chat fs-2 m-1 animate-target" />
                                                Chat-me
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link animate-scale" to="/user/favorites">
                                                <i className="ci-heart fs-2 m-1 animate-target" />
                                                Favorites
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink 
                                                className="nav-link animate-scale" 
                                                to="/user/basket" 
                                                data-bs-toggle="offcanvas" 
                                                data-bs-target="#shoppingCart" 
                                                aria-controls="shoppingCart" 
                                                aria-label="Shopping cart"
                                            >
                                                <i className="ci-shopping-cart fs-2 m-1 animate-target" />
                                                <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success border border-3 border-dark rounded-pill">
                                                    3 Basket
                                                </span>
                                            </NavLink>
                                        </li>
                                    </ul>
                                    <hr className="d-lg-none my-3" />
                                    <ul className="navbar-nav ms-auto position-relative">
                                        <li className="nav-item">
                                            <NavLink 
                                                to="#" 
                                                data-bs-toggle="modal" 
                                                data-bs-target="#PublishPage"
                                                className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle ms-2"
                                            >
                                                <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-scale fs-lg">
                                                    <i className="ci-powerbank animate-target fs-4 m-1" />
                                                </span>
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink 
                                                to={'#'}
                                                type="button" 
                                                className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle ms-2" 
                                                data-bs-toggle="offcanvas" 
                                                data-bs-target="#searchBox" 
                                                aria-controls="searchBox" 
                                                aria-label="Toggle search bar"
                                            >
                                                <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success border border-3 border-dark rounded-pill">
                                                    3
                                                </span>
                                                <span className="position-absolute top-0 start-0 d-flex bg-success1 align-items-center justify-content-center w-100 h-100 rounded-circle animate-scale fs-lg">
                                                    <i className="ci-search animate-target fs-4 m-1" />
                                                </span>
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            {renderProfileButton()}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

const BottomNav = () => {
    return (
        <header 
            className="navbar navbar-expand-lg bg-body shadow px-0 align-items-center"
            style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 1020,
                borderTop: '1px solid rgba(0, 0, 0, 0.1)',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)'
            }}
        >
            <div className="container-fluid">
                <div 
                    className="d-flex py-lg-1" 
                    style={{
                        display: 'flex',
                        maxWidth: '600px',
                        margin: '0 auto',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        flexWrap: 'nowrap'
                    }}
                >
                    <button 
                        type="button" 
                        className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle mx-2" 
                        data-bs-toggle="offcanvas" 
                        data-bs-target="#SideCategory" 
                        aria-controls="SideCategory" 
                        aria-label="Toggle navigation"
                    >
                        <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-scale fs-lg">
                            <i className="ci-grid-2 fs-2 m-1 animate-target" />
                        </span>
                    </button>

                    <NavLink 
                        type="button" 
                        className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle mx-2" 
                        data-bs-toggle="modal" 
                        data-bs-target="#NotImplimentedPage" 
                        to="#NotImplimentedPage"
                    >
                        <span className="position-absolute top-50 right-100 start-100 mt-n1 ms-n3 badge text-bg-success rounded-pill animate-target">3</span>
                        <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-scale fs-lg">
                            <i className="ci-chat fs-2 m-1 animate-target" />
                        </span>
                    </NavLink>

                    <NavLink to="/" className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle mx-2">
                        <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-scale fs-lg">
                            <i className="ci-home fs-2 m-1 animate-target" />
                        </span>
                    </NavLink>

                    <NavLink 
                        className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle mx-2" 
                        to="/user/favorites"
                    >
                        <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success rounded-pill">3</span>
                        <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-scale fs-lg">
                            <i className="ci-heart fs-2 m-1 animate-target" />
                        </span>
                    </NavLink>

                    <NavLink 
                        className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle mx-2" 
                        to="#shoppingCart" 
                        data-bs-toggle="offcanvas" 
                        data-bs-target="#shoppingCart" 
                        aria-controls="shoppingCart" 
                        aria-label="Shopping cart"
                    >
                        <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success rounded-pill">3</span>
                        <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-scale fs-lg">
                            <i className="ci-shopping-cart fs-2 m-1 animate-target" />
                        </span>
                    </NavLink>
                </div>
            </div>
        </header>
    );
};
