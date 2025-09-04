
// // Enhanced Navigation components with basket state management
// import { useState, useEffect } from 'react';
// import { NavLink, useLocation } from 'react-router-dom';
// import Categories from './modals/Categories';
// import { BasketEventService } from '../../services/local/BasketEventService';
// // import { BasketEventService } from '../services/local/BasketEventService';

import { v3 } from "uuid";

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
//     const [basketCount, setBasketCount] = useState(0);

//     // Listen for basket updates
//     useEffect(() => {
//         const unsubscribe = BasketEventService.subscribe((basketData) => {
//             setBasketCount(basketData.itemCount || 0);
//         });

//         return unsubscribe;
//     }, []);

//     const isProfileRoute = pathname.startsWith('/users/') || pathname.startsWith('/vendor/');
    
//     const getDashboardLink = () => {
//         if (userRole === 'vendor') return '/vendor/dashboard';
//         if (userRole === 'user') return '/users/personal';
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
//         <header className="navbar navbar-expand-lg navbar-dark bg-dark d-block z-fixed p-0 fixed-top navbar-stuck"
//             style={{
//                 position: 'sticky',
//                 top: 0,
//                 zIndex: 1030,
//                 backgroundColor: 'rgba(0, 0, 0, 0.95)',
//                 backdropFilter: 'blur(10px)',
//                 WebkitBackdropFilter: 'blur(10px)',
//                 transition: 'all 0.3s ease',
//                 borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
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
//                                 <i className="ci-click animate-target text-white" />
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
//                             {basketCount > 0 && (
//                                 <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success border border-3 border-dark rounded-pill">
//                                     {basketCount}
//                                 </span>
//                             )}
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
//                                             <NavLink className="nav-link animate-scale" to="/users/favorites">
//                                                 <i className="ci-heart fs-2 m-1 animate-target" />
//                                                 Favorites
//                                             </NavLink>
//                                         </li>
//                                         <li className="nav-item">
//                                             <NavLink 
//                                                 className="nav-link animate-scale" 
//                                                 to="/users/basket" 
//                                                 data-bs-toggle="offcanvas" 
//                                                 data-bs-target="#shoppingCart" 
//                                                 aria-controls="shoppingCart" 
//                                                 aria-label="Shopping cart"
//                                             >
//                                                 <i className="ci-shopping-cart fs-2 m-1 animate-target" />
//                                                 {basketCount > 0 && (
//                                                     <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success border border-3 border-dark rounded-pill">
//                                                         {basketCount} Basket
//                                                     </span>
//                                                 )}
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
//                                                     {/* <i className="ci-powerbank animate-target fs-4 m-1" /> */}
//                                                     <i className="ci-click animate-target fs-4 m-1"></i>
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
//                                                 {basketCount > 0 && (
//                                                     <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success border border-3 border-dark rounded-pill">
//                                                         {basketCount}
//                                                     </span>
//                                                 )}
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
//     const [basketCount, setBasketCount] = useState(0);

//     // Listen for basket updates
//     useEffect(() => {
//         const unsubscribe = BasketEventService.subscribe((basketData) => {
//             setBasketCount(basketData.itemCount || 0);
//         });

//         return unsubscribe;
//     }, []);

//     return (
//         <header 
//             className="navbar navbar-expand-lg bg-body shadow px-0 align-items-center"
//             style={{
//                 position: 'fixed',
//                 bottom: 0,
//                 left: 0,
//                 right: 0,
//                 zIndex: 1020,
//                 borderTop: '1px solid rgba(0, 0, 0, 0.1)',
//                 backgroundColor: 'rgba(255, 255, 255, 0.95)',
//                 backdropFilter: 'blur(10px)',
//                 WebkitBackdropFilter: 'blur(10px)'
//             }}
//         >
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
//                         {basketCount > 0 && (
//                             <span className="position-absolute top-50 right-100 start-100 mt-n1 ms-n3 badge text-bg-success rounded-pill animate-target">
//                                 {basketCount}
//                             </span>
//                         )}
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
//                         to="/users/favorites"
//                     >
//                         {basketCount > 0 && (
//                             <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success rounded-pill">
//                                 {basketCount}
//                             </span>
//                         )}
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
//                         {basketCount > 0 && (
//                             <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success rounded-pill">
//                                 {basketCount}
//                             </span>
//                         )}
//                         <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-scale fs-lg">
//                             <i className="ci-shopping-cart fs-2 m-1 animate-target" />
//                         </span>
//                     </NavLink>
//                 </div>
//             </div>
//         </header>
//     );
// };

// v2
// v3 - True sticky navigation with scroll detection
// import { useState, useEffect } from 'react';
// import { NavLink, useLocation } from 'react-router-dom';
// import Categories from './modals/Categories';
// import { BasketEventService } from '../../services/local/BasketEventService';
// import { useBootstrapPopovers } from '../../hooks/useBootstrapPopovers';

// const Navigation = () => {
//     return (
//         <>
//             {/* Global styles for sticky navigation and tooltip */}
//             <style>{`
//                 @keyframes fadeInUp {
//                     from {
//                         opacity: 0;
//                         transform: translateX(-50%) translateY(10px);
//                     }
//                     to {
//                         opacity: 1;
//                         transform: translateX(-50%) translateY(0);
//                     }
//                 }

//                 /* Top navigation - sticky behavior */
//                 .top-nav-sticky {
//                     position: sticky !important;
//                     top: 0 !important;
//                     z-index: 1030 !important;
//                     width: 100% !important;
//                     transition: all 0.3s ease !important;
//                 }

//                 .top-nav-stuck {
//                     box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1) !important;
//                     backdrop-filter: blur(15px) !important;
//                     -webkit-backdrop-filter: blur(15px) !important;
//                 }

//                 /* Bottom navigation - fixed at bottom */
//                 .bottom-nav-fixed {
//                     position: fixed !important;
//                     bottom: 0 !important;
//                     left: 0 !important;
//                     right: 0 !important;
//                     z-index: 1020 !important;
//                     width: 100% !important;
//                 }

//                 /* Override Bootstrap navbar positioning for top nav only */
//                 .top-nav-sticky.navbar-expand-lg {
//                     position: sticky !important;
//                     top: 0 !important;
//                 }

//                 /* Override Bootstrap navbar positioning for bottom nav */
//                 .bottom-nav-fixed.navbar-expand-lg {
//                     position: fixed !important;
//                     bottom: 0 !important;
//                 }

//                 /* Add bottom padding to body to account for fixed bottom nav */
//                 body {
//                     padding-bottom: 70px !important;
//                 }
//             `}</style>
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
//     const [basketCount, setBasketCount] = useState(0);
//     const [isStuck, setIsStuck] = useState(false);

//     // Listen for basket updates
//     useEffect(() => {
//         const unsubscribe = BasketEventService.subscribe((basketData) => {
//             setBasketCount(basketData.itemCount || 0);
//         });

//         return unsubscribe;
//     }, []);

//     // Scroll detection for stuck state
//     useEffect(() => {
//         const handleScroll = () => {
//             const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//             const shouldBeStuck = scrollTop > 100; // Becomes sticky after scrolling 100px
            
//             if (shouldBeStuck !== isStuck) {
//                 setIsStuck(shouldBeStuck);
//             }
//         };

//         window.addEventListener('scroll', handleScroll, { passive: true });
        
//         // Check initial scroll position
//         handleScroll();

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, [isStuck]);

//     const isProfileRoute = pathname.startsWith('/users/') || pathname.startsWith('/vendor/');
    
//     const getDashboardLink = () => {
//         if (userRole === 'vendor') return '/vendor/dashboard';
//         if (userRole === 'user') return '/users/personal';
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

//     const renderPublishButton = (extraClasses = "") => (
//         <div 
//             className="position-relative d-inline-block"
//             data-bs-toggle="popover"
//             data-bs-trigger="hover"
//             data-bs-custom-class="popover-sm"
//             data-bs-content="Click here to publish and list your products for sale"
//             data-bs-placement="top"
//             title="Publish Products"
//         >
//             <NavLink 
//                 to="#" 
//                 data-bs-toggle="modal" 
//                 data-bs-target="#PublishPage"
//                 className={`btn btn-icon btn-lg btn-secondary position-relative rounded-circle ${extraClasses}`}
//                 style={{ cursor: 'pointer' }}
//             >
//                 <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-slide-end fs-lg">
//                     <i className="ci-click animate-target text-white" />
//                 </span>
//             </NavLink>
//         </div>
//     );
    
//     useBootstrapPopovers();
    
//     return (
//         <>
//         <header className="navbar navbar-expand-lg navbar-dark bg-dark d-block z-fixed p-0 fixed-top top-nav-sticky9 navbar-stuck" data-sticky-navbar={{"offset": 200}}>
//         {/* <header className="navbar navbar-expand-lg navbar-dark bg-dark d-block z-fixed p-0 fixed-top navbar-stuck" data-sticky-navbar="{&quot;offset&quot;: 200}"> */}
//         {/* <header 
//             className={`navbar navbar-expand-lg navbar-dark bg-dark d-block fixed top-nav-sticky p-0 ${isStuck ? 'top-nav-stuck' : ''}`}
//             style={{
//                 backgroundColor: isStuck ? 'rgba(0, 0, 0, 0.98)' : 'rgba(0, 0, 0, 0.95)',
//                 backdropFilter: isStuck ? 'blur(15px)' : 'blur(10px)',
//                 WebkitBackdropFilter: isStuck ? 'blur(15px)' : 'blur(10px)',
//                 transition: 'all 0.3s ease',
//                 borderBottom: isStuck ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(255, 255, 255, 0.1)'
//             }}
//         > */}
//             <div className="container d-block py-1 py-lg-3 d-lg-none d-md-none" data-bs-theme="dark">
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
//                         {renderPublishButton("ms-2")}

//                         <NavLink 
//                             to="#" 
//                             className="btn btn-icon btn-lg btn-outline-success position-relative rounded-circle animate-shake ms-2" 
//                             data-bs-toggle="offcanvas" 
//                             data-bs-target="#searchBox" 
//                             aria-controls="searchBox" 
//                             aria-label="Toggle search bar"
//                         >
//                             {basketCount > 0 && (
//                                 <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success border border-3 border-dark rounded-pill">
//                                     {basketCount}
//                                 </span>
//                             )}
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
//                                             <NavLink className="nav-link animate-scale" to="/users/favorites">
//                                                 <i className="ci-heart fs-2 m-1 animate-target" />
//                                                 Favorites
//                                             </NavLink>
//                                         </li>
//                                         <li className="nav-item">
//                                             <NavLink 
//                                                 className="nav-link animate-scale" 
//                                                 to="/users/basket" 
//                                                 data-bs-toggle="offcanvas" 
//                                                 data-bs-target="#shoppingCart" 
//                                                 aria-controls="shoppingCart" 
//                                                 aria-label="Shopping cart"
//                                             >
//                                                 <i className="ci-shopping-cart fs-2 m-1 animate-target" />
//                                                 {basketCount > 0 && (
//                                                     <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success border border-3 border-dark rounded-pill">
//                                                         {basketCount} Basket
//                                                     </span>
//                                                 )}
//                                             </NavLink>
//                                         </li>
//                                     </ul>
//                                     <hr className="d-lg-none my-3" />
//                                     <ul className="navbar-nav ms-auto position-relative">
//                                         <li className="nav-item">
//                                             {renderPublishButton("ms-2")}
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
//                                                 {basketCount > 0 && (
//                                                     <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success border border-3 border-dark rounded-pill">
//                                                         {basketCount}
//                                                     </span>
//                                                 )}
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

//         </>
//     );
// };

// const BottomNav = () => {
//     const [basketCount, setBasketCount] = useState(0);

//     // Listen for basket updates
//     useEffect(() => {
//         const unsubscribe = BasketEventService.subscribe((basketData) => {
//             setBasketCount(basketData.itemCount || 0);
//         });

//         return unsubscribe;
//     }, []);

//     return (
//         <header 
//             className="navbar navbar-expand-lg bg-body shadow px-0 align-items-center bottom-nav-fixed"
//             style={{
//                 borderTop: '1px solid rgba(0, 0, 0, 0.1)',
//                 backgroundColor: 'rgba(255, 255, 255, 0.95)',
//                 backdropFilter: 'blur(10px)',
//                 WebkitBackdropFilter: 'blur(10px)'
//             }}
//         >
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
//                         {basketCount > 0 && (
//                             <span className="position-absolute top-50 right-100 start-100 mt-n1 ms-n3 badge text-bg-success rounded-pill animate-target">
//                                 {basketCount}
//                             </span>
//                         )}
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
//                         to="/users/favorites"
//                     >
//                         {basketCount > 0 && (
//                             <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success rounded-pill">
//                                 {basketCount}
//                             </span>
//                         )}
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
//                         {basketCount > 0 && (
//                             <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success rounded-pill">
//                                 {basketCount}
//                             </span>
//                         )}
//                         <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-scale fs-lg">
//                             <i className="ci-shopping-cart fs-2 m-1 animate-target" />
//                         </span>
//                     </NavLink>
//                 </div>
//             </div>
//         </header>
//     );
// };

// v3
// v3 - True sticky navigation with scroll detection
import { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Categories from './modals/Categories';
import { BasketEventService } from '../../services/local/BasketEventService';
import { useBootstrapPopovers } from '../../hooks/useBootstrapPopovers';

const Navigation = () => {
    return (
        <>
            {/* Global styles */}
            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateX(-50%) translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(-50%) translateY(0);
                    }
                }

                /* Bottom nav sticky positioning */
                .bottom-nav-sticky {
                    position: fixed !important;
                    bottom: 0 !important;
                    z-index: 1020 !important;
                    width: 100% !important;
                    transition: all 0.3s ease !important;
                }
                
                /* Add padding to main content to prevent overlap */
                main {
                    padding-top: 76px; /* Height of top nav */
                    padding-bottom: 76px; /* Height of bottom nav */
                }
                
                /* Ensure proper stacking context */
                .top-nav-container {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    z-index: 1030;
                }
            `}</style>
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
    const [basketCount, setBasketCount] = useState(0);
    const topNavRef = useRef<HTMLElement>(null);

    // Listen for basket updates
    useEffect(() => {
        const unsubscribe = BasketEventService.subscribe((basketData) => {
            setBasketCount(basketData.itemCount || 0);
        });

        return unsubscribe;
    }, []);

    // Calculate and set the top nav height for content padding
    useEffect(() => {
        if (topNavRef.current) {
            const height = topNavRef.current.offsetHeight;
            document.documentElement.style.setProperty('--top-nav-height', `${height}px`);
        }
    }, []);

    const isProfileRoute = pathname.startsWith('/users/') || pathname.startsWith('/vendor/');
    
    const getDashboardLink = () => {
        if (userRole === 'vendor') return '/vendor/dashboard';
        if (userRole === 'user') return '/users/personal';
        return '/auth/signin';
    };

    const renderProfileButton = () => (
        <NavLink
            to={isProfileRoute ? '#' : getDashboardLink()}
            // className="btn btn-icon btn-lg text-white position-relative rounded-circle animate-shake border ms-2"
            className="btn btn-icon border position-relative rounded-circle ms-2 text-white"
            {...(isProfileRoute && {
                'data-bs-toggle': 'offcanvas',
                'data-bs-target': '#accountSidebar',
                'aria-controls': 'accountSidebar'
            })}
            data-bs-theme="light"
            aria-label="Account menu"
        >
            <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-scale fs-lg">
                <i className="ci-user animate-target fs-4"/>
            </span>
        </NavLink>
    );

    const renderPublishButton = (extraClasses = "") => (
        <div 
            className="position-relative d-inline-block"
            data-bs-toggle="popover"
            data-bs-trigger="hover"
            data-bs-custom-class="popover-sm"
            data-bs-content="Click here to publish and list your products for sale"
            data-bs-placement="top"
            title="Publish Products"
        >
            <NavLink 
                to="#" 
                data-bs-toggle="modal" 
                data-bs-target="#PublishPage"
                className={`btn btn-icon border position-relative rounded-circle ${extraClasses}`}
                style={{ cursor: 'pointer' }}
            >
                <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-slide-end fs-lg">
                    <i className="ci-click animate-target text-white" />
                </span>
            </NavLink>
        </div>
    );
    
    useBootstrapPopovers();
    
    return (
        <div className="top-nav-container">
            <header 
                ref={topNavRef}
                className="navbar navbar-expand-lg navbar-dark bg-dark d-block z-fixed p-0 fixed-top navbar-stuck"
                data-sticky-navbar={{"offset": 200}}
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.95)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                }}
            >
                <div className="container d-block py-1 py-lg-3 d-lg-none d-md-none" data-bs-theme="dark">
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
                            {renderPublishButton("ms-2")}

                            <NavLink 
                                to="#" 
                                // className="btn btn-icon border position-relative rounded-circle animate-shake ms-2" 
                                className="btn btn-icon border position-relative rounded-circle animate-shake ms-2 text-white"
                                data-bs-toggle="offcanvas" 
                                data-bs-target="#searchBox" 
                                aria-controls="searchBox" 
                                aria-label="Toggle search bar"
                            >
                                {basketCount > 0 && (
                                    <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success border border-3 border-dark rounded-pill">
                                        {basketCount}
                                    </span>
                                )}
                                <span className="position-absolute text-white top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-scale fs-lg">
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
                                                <NavLink className="nav-link animate-scale" to="/users/favorites">
                                                    <i className="ci-heart fs-2 m-1 animate-target" />
                                                    Favorites
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink 
                                                    className="nav-link animate-scale" 
                                                    to="/users/basket" 
                                                    data-bs-toggle="offcanvas" 
                                                    data-bs-target="#shoppingCart" 
                                                    aria-controls="shoppingCart" 
                                                    aria-label="Shopping cart"
                                                >
                                                    <i className="ci-shopping-cart fs-2 m-1 animate-target" />
                                                    {basketCount > 0 && (
                                                        <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success border border-3 border-dark rounded-pill">
                                                            {basketCount} Basket
                                                        </span>
                                                    )}
                                                </NavLink>
                                            </li>
                                        </ul>
                                        <hr className="d-lg-none my-3" />
                                        {/* For Desktop */}
                                        <ul className="navbar-nav ms-auto position-relative align-items-center">
                                            <li className="nav-item">
                                                {renderPublishButton("ms-2")}
                                            </li>
                                            <li className="nav-item">
                                                <NavLink 
                                                    to={'#'}
                                                    type="button" 
                                                    // className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle ms-2" 
                                                    className="btn btn-icon border position-relative rounded-circle animate-shake ms-2 text-white"
                                                    data-bs-toggle="offcanvas" 
                                                    data-bs-target="#searchBox" 
                                                    aria-controls="searchBox" 
                                                    aria-label="Toggle search bar"
                                                >
                                                    {basketCount > 0 && (
                                                        <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success border border-3 border-dark rounded-pill">
                                                            {basketCount}
                                                        </span>
                                                    )}
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
        </div>
    );
};

const BottomNav = () => {
    const [basketCount, setBasketCount] = useState(0);
    const bottomNavRef = useRef<HTMLElement>(null);

    // Listen for basket updates
    useEffect(() => {
        const unsubscribe = BasketEventService.subscribe((basketData) => {
            setBasketCount(basketData.itemCount || 0);
        });

        return unsubscribe;
    }, []);

    // Calculate and set the bottom nav height for content padding
    useEffect(() => {
        if (bottomNavRef.current) {
            const height = bottomNavRef.current.offsetHeight;
            document.documentElement.style.setProperty('--bottom-nav-height', `${height}px`);
        }
    }, []);

    return (
        <header 
            ref={bottomNavRef}
            className="navbar navbar-expand-lg bg-body shadow px-0 align-items-center bottom-nav-sticky"
            style={{
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
                        {basketCount > 0 && (
                            <span className="position-absolute top-50 right-100 start-100 mt-n1 ms-n3 badge text-bg-success rounded-pill animate-target">
                                {basketCount}
                            </span>
                        )}
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
                        to="/users/favorites"
                    >
                        {basketCount > 0 && (
                            <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success rounded-pill">
                                {basketCount}
                            </span>
                        )}
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
                        {basketCount > 0 && (
                            <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success rounded-pill">
                                {basketCount}
                            </span>
                        )}
                        <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-scale fs-lg">
                            <i className="ci-shopping-cart fs-2 m-1 animate-target" />
                        </span>
                    </NavLink>
                </div>
            </div>
        </header>
    );
};