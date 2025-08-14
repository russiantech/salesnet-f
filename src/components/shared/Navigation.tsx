
// VERSION 04

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
//         <header  className="navbar navbar-expand-lg navbar-dark bg-dark d-block z-fixed p-0 fixed-top navbar-stuck"
//             style={{
//                 // position: 'sticky !important',
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
//                         to="/users/favorites"
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


// 
// Enhanced Navigation components with basket state management
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Categories from './modals/Categories';
import { BasketEventService } from '../../services/local/BasketEventService';
// import { BasketEventService } from '../services/local/BasketEventService';

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
    const [basketCount, setBasketCount] = useState(0);

    // Listen for basket updates
    useEffect(() => {
        const unsubscribe = BasketEventService.subscribe((basketData) => {
            setBasketCount(basketData.itemCount || 0);
        });

        return unsubscribe;
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
        <header className="navbar navbar-expand-lg navbar-dark bg-dark d-block z-fixed p-0 fixed-top navbar-stuck"
            style={{
                position: 'sticky',
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
                                <i className="ci-click animate-target text-white" />
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
                            {basketCount > 0 && (
                                <span className="position-absolute top-50 start-100 mt-n1 ms-n3 badge text-bg-success border border-3 border-dark rounded-pill">
                                    {basketCount}
                                </span>
                            )}
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
                                    <ul className="navbar-nav ms-auto position-relative">
                                        <li className="nav-item">
                                            <NavLink 
                                                to="#" 
                                                data-bs-toggle="modal" 
                                                data-bs-target="#PublishPage"
                                                className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle ms-2"
                                            >
                                                <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-scale fs-lg">
                                                    {/* <i className="ci-powerbank animate-target fs-4 m-1" /> */}
                                                    <i className="ci-click animate-target fs-4 m-1"></i>
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
    );
};

const BottomNav = () => {
    const [basketCount, setBasketCount] = useState(0);

    // Listen for basket updates
    useEffect(() => {
        const unsubscribe = BasketEventService.subscribe((basketData) => {
            setBasketCount(basketData.itemCount || 0);
        });

        return unsubscribe;
    }, []);

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