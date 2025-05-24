
// import { useEffect, useState } from 'react';
// import { CategoriesAxiosService } from '../../../services/net/CategoriesAxiosService';
// import LoadingSpinner from '../LoadingSpinner';
// // import './Categories.css'
// import { Link } from 'react-router-dom';

// const Categories = () => {
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await CategoriesAxiosService.getCategories({
//           include_products: false
//         });
//         setCategories(response.data.categories);
//       } catch (err) {
//         setError(err.message || 'Failed to fetch categories');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCategories();
//   }, []);

//   // Get icon based on category name (you can customize this as needed)
//   const getCategoryIcon = (categoryName) => {
//     const icons = {
//       'Services': 'ci-computer',
//       'Home & Garden': 'ci-home',
//       'Entertainment': 'ci-game',
//       'Fashion & Accessories': 'ci-apparel',
//       'Family': 'ci-heart',
//       'Electronics': 'ci-powerbank',
//       'Hobbies': 'ci-puzzle',
//       'Classifieds': 'ci-tag',
//       'Vehicles': 'ci-car',
//       'Property': 'ci-building',
//       'Apparrel': 'ci-apparel',
//       'Office Supplies': 'ci-briefcase',
//       'Free Stuffs': 'ci-gift',
//       'IT': 'ci-server',
//       'Automotive': 'ci-car',
//       'Building & Trading': 'ci-hammer',
//       'Childcare & Education': 'ci-book',
//       'Classes & Courses': 'ci-notebook',
//       'Recruitment': 'ci-users',
//       'Fitness & Personal Training': 'ci-dumbbell',
//       'Health & Beauty': 'ci-mirror',
//       'Tax & Financial': 'ci-calculator',
//       'Legal': 'ci-scale',
//       'Landscaping & Gardening': 'ci-flower',
//       'Manufacturing': 'ci-factory',
//       'Weddings & Venues': 'ci-ring',
//       'Printing': 'ci-printer',
//       'Travel & Tours': 'ci-plane',
//       'Rental': 'ci-home',
//       'Repairs': 'ci-settings',
//       'Tools': 'ci-tool',
//       'Furniture': 'ci-sofa',
//       'Household': 'ci-basket',
//       'Garden': 'ci-grass',
//       'Appliances': 'ci-fridge',
//       'Video Games': 'ci-gamepad',
//       'Books': 'ci-book',
//       'Movies & Music': 'ci-music',
//       'Bags & Luggage': 'ci-bag',
//       'Women\'s Clothing & Shoes': 'ci-dress',
//       'Men\'s Clothing & Shoes': 'ci-tshirt',
//       'Jewelry & Accessories': 'ci-jewelry',
//       'Home Goods': 'ci-lamp',
//       'Pets Supply': 'ci-paw',
//       'Baby & Kids': 'ci-baby-carriage',
//       'Toys & Games': 'ci-toy',
//       'Electronics & Computers': 'ci-laptop',
//       'Mobile Phones': 'ci-mobile',
//       'Softwares': 'ci-software',
//       'Power Supply': 'ci-bolt',
//       'Bicycles': 'ci-bike',
//       'Arts & Crafts': 'ci-palette',
//       'Sports & Outdoors': 'ci-ball',
//       'Auto parts': 'ci-car',
//       'Musical Instruments': 'ci-mic',
//       'Antiques & Collections': 'ci-collection',
//       'Garage Sale': 'ci-tag',
//       'Miscellaneous': 'ci-layers',
//       'Industrial Cleaning': 'ci-clean',
//       'Interior & Home Cleaning': 'ci-broom'
//     };
    
//     return icons[categoryName] || 'ci-layers';
//   };

//   // if (loading) {
//   //   return <div className="text-center py-4">Loading categories...</div>;
//   // }

//   // if (error) {
//   //   return <div className="text-center py-4 text-danger">Error: {error}</div>;
//   // }

//   return (
//     <>
//       <div className="offcanvas offcanvas-start d-flex h-100" id="SideCategory" tabIndex={-1} aria-labelledby="offcanvasLeftLabel"
//         // style={{ paddingLeft: 0, overflowX: 'visible', display: 'flex', flexGrow:20, flexDirection: 'column', minWidth: '300px', maxWidth: '100%' }}
//         style={{
//           // width: 'auto',
//           // minWidth: '300px',
//           // maxWidth: '90vw',
//           // overflow: 'visible'
//         }}>

//         <div className="offcanvas-header border-bottom">
//           <h5 className="offcanvas-title" id="offcanvasLeftLabel">Browse Salessnet.</h5>
//           <button className="btn-close" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//         </div>

//         <div className="offcanvas-body py-3 py-lg-0" style={{ paddingLeft: 0, overflow: 'visible', display: 'flex'}}>
//         {/* <div className="offcanvas-body py-3"> */}
//           <header className="navbar navbar-expand-lg d-block z-fixed p-0" data-sticky-navbar="{&quot;offset&quot;: 500}">
//             <div className="container px-0 px-lg-1">
//               <div className="row">
//                 <div className="col-lg-6 col-12">
//                 {loading && (
//           // <div className="d-flex justify-content-center align-items-center h-100">
//           //   <div className="text-center py-4">
//           //     <div className="spinner-border text-primary" role="status">
//           //       <span className="visually-hidden">Loading...</span>
//           //     </div>
//           //     <p className="mt-2">Loading categories...</p>
//           //   </div>
//           // </div>
//           <LoadingSpinner />
//         ) }
//          { error && (
//           <div className="d-flex justify-content-center align-items-center h-100">
//             <div className="text-center py-4 text-danger">
//               <i className="ci-close-circle fs-3"></i>
//               <p className="mt-2">Error: {error}</p>
//               <button 
//                 className="btn btn-sm btn-outline-primary mt-2"
//                 onClick={() => window.location.reload()}
//               >
//                 Try Again
//               </button>
//             </div>
//           </div>
//         )}

//                   <div className="navbar-nav">
//                     <div className="dropdown w-100">
//                       <ul className="dropdown-menu dropdown-menu-static w-100 rounded-bottom-4 py-1 p-lg-1 show" data-bs-popper="static">
//                         {categories.map((category) => {
//                           const hasChildren = category.children && category.children.length > 0;
                          
//                           return (
//                             <li className={`${hasChildren ? 'dropend position-static' : ''}`} key={category.id}>
//                               {hasChildren ? (
//                                 <>
//                                   <div className="position-relative rounded pt-2 pb-1 px-lg-2" data-bs-toggle="dropdown"
//                                     data-bs-trigger="hover">
//                                     <Link className="dropdown-item fw-medium stretched-link d-none d-lg-flex" to={`/categories/${category.slug}`}>
//                                       <i className={`${getCategoryIcon(category.name)} fs-xl opacity-60 pe-1 me-2`}></i>
//                                       <span className="text-truncate">{category.name}</span>
//                                       <i className="ci-chevron-right fs-base ms-auto me-n1"></i>
//                                     </Link>
//                                     <div className="dropdown-item fw-medium text-wrap stretched-link d-lg-none">
//                                       <i className={`${getCategoryIcon(category.name)} fs-xl opacity-60 pe-1 me-2`}></i>
//                                       {category.name}
//                                       <i className="ci-chevron-down fs-base ms-auto me-n1"></i>
//                                     </div>
//                                   </div>
//                                   <div className="dropdown-menu rounded-4 p-4"
//                                     style={{ top: "1rem", height: "calc(100% - .1875rem)", "--cz-dropdownpacer": ".3125rem", animation: "none" }}>
//                                     <div className="d-flex flex-column flex-lg-row h-100 gap-4">
//                                       <div style={{ minWidth: "194px" }}>
//                                         <div className="d-flex w-100">
//                                         <Link className="animate-underline animate-target d-inline h6 text-dark-emphasis text-decoration-none text-truncate"
//                                             to={`/categories/${category.slug}`}>{category.name}</Link>
//                                         </div>
//                                         <ul className="nav flex-column gap-2 mt-n2">
//                                           {category.children.map((child) => (
//                                             <li className="d-flex w-100 pt-1" key={child.id}>
//                                               <Link className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
//                                                 to={`/categories/${child.slug || child.id}`}>
//                                                 {child.name}
//                                               </Link>
//                                             </li>
//                                           ))}
//                                         </ul>
//                                       </div>
//                                       {category.image_urls && category.image_urls.length > 0 && (
//                                         <div className="d-none d-lg-block">
//                                           <div className="d-none d-xl-block" style={{ width: "284px" }}></div>
//                                           <div className="d-xl-none" style={{ width: "240px" }}></div>
//                                           <div className="position-relative d-flex flex-column justify-content-center h-100 bg-body-secondary rounded-5 py-4 px-3">
//                                             <div className="text-center px-2">
//                                               <span className="badge bg-danger bg-opacity-10 text-danger fs-sm rounded-pill mb-2">Featured</span>
//                                               <div className="h2 mb-4">{category.name}</div>
//                                             </div>
//                                             <img src={category.image_urls[0]} width="252" alt={category.name} />
//                                             <div className="text-center mt-4">
//                                               <Link className="btn btn-sm btn-primary stretched-link" to={`/categories/${category.slug}`}>Shop now</Link>
//                                             </div>
//                                           </div>
//                                         </div>
//                                       )}
//                                     </div>
//                                   </div>
//                                 </>
//                               ) : (
//                                 <Link className="dropdown-item fw-medium" to={`/categories/${category.slug}`}>
//                                   <i className={`${getCategoryIcon(category.name)} fs-xl opacity-60 pe-1 me-2`}></i>
//                                   <span className="text-truncate">{category.name}</span>
//                                 </Link>
//                               )}
//                             </li>
//                           );
//                         })}
//                       </ul>
//                     </div>
//                   </div>
                
//                 </div>
//               </div>
//             </div>
//           </header>
//         </div>
//       </div>
//     </>
//   );
// };

// // 

// const Categories8 = () => {
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await CategoriesAxiosService.getCategories({
//           include_products: false
//         });
//         setCategories(response.data.categories);
//       } catch (err) {
//         setError(err.message || 'Failed to fetch categories');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCategories();
//   }, []);

//   // Get icon based on category name
//   const getCategoryIcon = (categoryName) => {
//     // ... (keep your existing icon mapping function)
//     const icons = {
//       'Services': 'ci-computer',
//       'Home & Garden': 'ci-home',
//       'Entertainment': 'ci-game',
//       'Fashion & Accessories': 'ci-apparel',
//       'Family': 'ci-heart',
//       'Electronics': 'ci-powerbank',
//       'Hobbies': 'ci-puzzle',
//       'Classifieds': 'ci-tag',
//       'Vehicles': 'ci-car',
//       'Property': 'ci-building',
//       'Apparrel': 'ci-apparel',
//       'Office Supplies': 'ci-briefcase',
//       'Free Stuffs': 'ci-gift',
//       'IT': 'ci-server',
//       'Automotive': 'ci-car',
//       'Building & Trading': 'ci-hammer',
//       'Childcare & Education': 'ci-book',
//       'Classes & Courses': 'ci-notebook',
//       'Recruitment': 'ci-users',
//       'Fitness & Personal Training': 'ci-dumbbell',
//       'Health & Beauty': 'ci-mirror',
//       'Tax & Financial': 'ci-calculator',
//       'Legal': 'ci-scale',
//       'Landscaping & Gardening': 'ci-flower',
//       'Manufacturing': 'ci-factory',
//       'Weddings & Venues': 'ci-ring',
//       'Printing': 'ci-printer',
//       'Travel & Tours': 'ci-plane',
//       'Rental': 'ci-home',
//       'Repairs': 'ci-settings',
//       'Tools': 'ci-tool',
//       'Furniture': 'ci-sofa',
//       'Household': 'ci-basket',
//       'Garden': 'ci-grass',
//       'Appliances': 'ci-fridge',
//       'Video Games': 'ci-gamepad',
//       'Books': 'ci-book',
//       'Movies & Music': 'ci-music',
//       'Bags & Luggage': 'ci-bag',
//       'Women\'s Clothing & Shoes': 'ci-dress',
//       'Men\'s Clothing & Shoes': 'ci-tshirt',
//       'Jewelry & Accessories': 'ci-jewelry',
//       'Home Goods': 'ci-lamp',
//       'Pets Supply': 'ci-paw',
//       'Baby & Kids': 'ci-baby-carriage',
//       'Toys & Games': 'ci-toy',
//       'Electronics & Computers': 'ci-laptop',
//       'Mobile Phones': 'ci-mobile',
//       'Softwares': 'ci-software',
//       'Power Supply': 'ci-bolt',
//       'Bicycles': 'ci-bike',
//       'Arts & Crafts': 'ci-palette',
//       'Sports & Outdoors': 'ci-ball',
//       'Auto parts': 'ci-car',
//       'Musical Instruments': 'ci-mic',
//       'Antiques & Collections': 'ci-collection',
//       'Garage Sale': 'ci-tag',
//       'Miscellaneous': 'ci-layers',
//       'Industrial Cleaning': 'ci-clean',
//       'Interior & Home Cleaning': 'ci-broom'
//     };

//     return icons[categoryName] || 'ci-layers';
//   };

//   if (loading) return <div className="text-center py-4">Loading categories...</div>;
//   if (error) return <div className="text-center py-4 text-danger">Error: {error}</div>;

//   return (
//     <div 
//       className="offcanvas offcanvas-start d-flex h-100" 
//       id="SideCategory" 
//       tabIndex={-1} 
//       aria-labelledby="offcanvasLeftLabel"
//       style={{ 
//         paddingLeft: 0, 
//         overflow: 'visible', // Changed from overflowX
//         display: 'flex', 
//         flexDirection: 'column', 
//         minWidth: '300px',
//         width: 'auto', // Allow width to grow
//         maxWidth: '90vw' // Limit maximum width
//       }}
//     >
//       <div className="offcanvas-header border-bottom">
//         <h5 className="offcanvas-title" id="offcanvasLeftLabel">Browse Salessnet.</h5>
//         <button className="btn-close" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//       </div>

//       <div 
//         className="offcanvas-body py-3 py-lg-0" 
//         style={{ 
//           paddingLeft: 0, 
//           overflow: 'visible', // Changed from overflowX
//           display: 'flex', 
//           flexDirection: 'column',
//           flexGrow: 1
//         }}
//       >
//         <header className="navbar navbar-expand-lg d-block z-fixed p-0">
//           <div className="container-fluid px-0"> {/* Changed to container-fluid */}
//             <div className="row">
//               <div className="col-12">
//                 <div className="navbar-nav">
//                   <div className="dropdown w-100">
//                     <ul className="dropdown-menu dropdown-menu-static w-100 rounded-bottom-4 py-1 p-lg-1 show">
//                       {categories.map((category) => {
//                         const hasChildren = category.children?.length > 0;
                        
//                         return (
//                           <li 
//                             className={`${hasChildren ? 'dropend position-static' : ''}`} 
//                             key={category.id}
//                           >
//                             {hasChildren ? (
//                               <>
//                                 <div 
//                                   className="position-relative rounded pt-2 pb-1 px-lg-2" 
//                                   data-bs-toggle="dropdown"
//                                   data-bs-trigger="hover"
//                                 >
//                                   <a className="dropdown-item fw-medium stretched-link d-none d-lg-flex" href={`/categories/${category.slug}`}>
//                                     <i className={`${getCategoryIcon(category.name)} fs-xl opacity-60 pe-1 me-2`}></i>
//                                     <span className="text-truncate">{category.name}</span>
//                                     <i className="ci-chevron-right fs-base ms-auto me-n1"></i>
//                                   </a>
//                                   <div className="dropdown-item fw-medium text-wrap stretched-link d-lg-none">
//                                     <i className={`${getCategoryIcon(category.name)} fs-xl opacity-60 pe-1 me-2`}></i>
//                                     {category.name}
//                                     <i className="ci-chevron-down fs-base ms-auto me-n1"></i>
//                                   </div>
//                                 </div>
//                                 <div 
//                                   className="dropdown-menu rounded-4 p-4"
//                                   style={{ 
//                                     top: "1rem", 
//                                     minHeight: "100%",
//                                     maxHeight: "80vh",
//                                     overflowY: "auto",
//                                     "--cz-dropdownpacer": ".3125rem", 
//                                     animation: "none",
//                                     width: "auto",
//                                     minWidth: "300px",
//                                     maxWidth: "min(80vw, 1200px)",
//                                     display: "flex",
//                                     flexDirection: "column"
//                                   }}
//                                 >
//                                   <div 
//                                     className="d-flex flex-column flex-lg-row flex-wrap h-100 gap-4"
//                                     style={{
//                                       flex: "1 1 auto",
//                                       overflow: "visible"
//                                     }}
//                                   >
//                                     <div style={{ minWidth: "194px", flex: "1 1 auto" }}>
//                                       <div className="d-flex w-100">
//                                         <a className="animate-underline animate-target d-inline h6 text-dark-emphasis text-decoration-none text-truncate"
//                                           href={`/categories/${category.slug}`}>{category.name}</a>
//                                       </div>
//                                       <ul className="nav flex-column gap-2 mt-n2">
//                                         {category.children.map((child) => (
//                                           <li className="d-flex w-100 pt-1" key={child.id}>
//                                             <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
//                                               href={`/categories/${child.slug || child.id}`}>
//                                               {child.name}
//                                             </a>
//                                           </li>
//                                         ))}
//                                       </ul>
//                                     </div>
//                                     {category.image_urls?.length > 0 && (
//                                       <div className="d-none d-lg-block" style={{ flex: "0 0 auto" }}>
//                                         <div className="position-relative d-flex flex-column justify-content-center h-100 bg-body-secondary rounded-5 py-4 px-3">
//                                           <div className="text-center px-2">
//                                             <span className="badge bg-danger bg-opacity-10 text-danger fs-sm rounded-pill mb-2">Featured</span>
//                                             <div className="h2 mb-4">{category.name}</div>
//                                           </div>
//                                           <img 
//                                             src={category.image_urls[0]} 
//                                             width="252" 
//                                             alt={category.name} 
//                                             style={{ maxWidth: "100%", height: "auto" }}
//                                           />
//                                           <div className="text-center mt-4">
//                                             <a className="btn btn-sm btn-primary stretched-link" href={`/categories/${category.slug}`}>Shop now</a>
//                                           </div>
//                                         </div>
//                                       </div>
//                                     )}
//                                   </div>
//                                 </div>
//                               </>
//                             ) : (
//                               <a className="dropdown-item fw-medium" href={`/categories/${category.slug}`}>
//                                 <i className={`${getCategoryIcon(category.name)} fs-xl opacity-60 pe-1 me-2`}></i>
//                                 <span className="text-truncate">{category.name}</span>
//                               </a>
//                             )}
//                           </li>
//                         );
//                       })}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </header>
//       </div>
//     </div>
//   );
// };

// export default Categories;

// 
// Categories.tsx - Fixed TypeScript errors
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

// Define proper types
interface Category {
  id: string;
  name: string;
  slug: string;
  image_urls?: string[];
  children?: Category[];
}

interface CategoryIcons {
  [key: string]: string;
}

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Define category icons with proper typing
  const categoryIcons: CategoryIcons = {
    'Services': 'ci-settings',
    'Home & Garden': 'ci-home',
    'Entertainment': 'ci-play-circle',
    'Fashion & Accessories': 'ci-shirt',
    'Family': 'ci-users',
    'Electronics': 'ci-laptop',
    'Hobbies': 'ci-palette',
    'Classifieds': 'ci-grid',
    'Vehicles': 'ci-car',
    'Property': 'ci-building',
    'Apparrel': 'ci-shirt',
    'Office Supplies': 'ci-briefcase',
    'Free Stuffs': 'ci-gift'
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      // Replace with your actual API endpoint
      const response = await fetch('/api/categories');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data: Category[] = await response.json();
      setCategories(data);
    } catch (err) {
      // Properly handle the error with type assertion
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch categories';
      setError(errorMessage);
      console.error('Error fetching categories:', err);
    } finally {
      setLoading(false);
    }
  };

  const getCategoryIcon = (categoryName: string): string => {
    return categoryIcons[categoryName] || 'ci-grid';
  };

  const renderCategoryItem = (category: Category) => {
    const iconClass = getCategoryIcon(category.name);
    
    return (
      <div key={category.id} className="col-6 col-md-4 col-lg-3 mb-3">
        <NavLink
          to={`/category/${category.slug}`}
          className="d-flex flex-column align-items-center text-decoration-none p-3 rounded hover-bg-light"
        >
          <div 
            className="d-flex align-items-center justify-content-center mb-2 rounded-circle bg-light"
            style={{
              width: '60px',
              height: '60px',
              // Fix the CSS custom property syntax
              ['--cz-dropdown-spacer' as any]: '1rem'
            }}
          >
            {category.children && category.children.length > 0 ? (
              <i className={`${iconClass} fs-2 text-primary`} />
            ) : (
              <img
                src={category.image_urls?.[0] || '/placeholder-category.jpg'}
                alt={category.name}
                className="w-100 h-100 object-fit-cover rounded-circle"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder-category.jpg';
                }}
              />
            )}
          </div>
          <span className="text-center small fw-medium">{category.name}</span>
        </NavLink>
        
        {/* Render subcategories if they exist */}
        {category.children && category.children.length > 0 && (
          <div className="mt-2 ps-3">
            {category.children.map((child: Category) => (
              <NavLink
                key={child.id}
                to={`/category/${child.slug}`}
                className="d-block small text-muted text-decoration-none py-1 hover-text-primary"
              >
                {child.name}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="modal fade" id="SideCategory" tabIndex={-1} aria-labelledby="SideCategoryLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="SideCategoryLabel">Categories</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="d-flex justify-content-center p-4">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="modal fade" id="SideCategory" tabIndex={-1} aria-labelledby="SideCategoryLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="SideCategoryLabel">Categories</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="alert alert-danger" role="alert">
                <i className="ci-warning me-2"></i>
                {error}
              </div>
              <button 
                className="btn btn-primary" 
                onClick={fetchCategories}
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="modal fade" id="SideCategory" tabIndex={-1} aria-labelledby="SideCategoryLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="SideCategoryLabel">Categories</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {categories.length === 0 ? (
              <div className="text-center p-4">
                <i className="ci-folder-open fs-1 text-muted mb-3"></i>
                <p className="text-muted">No categories available</p>
              </div>
            ) : (
              <div className="row g-3">
                {categories.map(renderCategoryItem)}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;