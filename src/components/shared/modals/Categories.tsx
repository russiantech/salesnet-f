// import React, { useEffect, useState } from 'react';
// import { CategoriesAxiosService } from '../../../services/net/CategoriesAxiosService';
// import LoadingSpinner from '../LoadingSpinner';
// import { Link } from 'react-router-dom';

// // Type definitions
// interface Category {
//   id: string | number;
//   name: string;
//   slug: string;
//   children?: Category[];
//   image_urls?: string[];
// }

// interface CategoriesResponse {
//   data: {
//     categories: Category[];
//   };
// }

// interface GetCategoriesParams {
//   include_products: boolean;
// }

// // Icon mapping type
// type IconMapping = Record<string, string>;

// const Categories: React.FC = () => {
//   const [categories, setCategories] = useState<Category[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchCategories = async (): Promise<void> => {
//       try {
//         const params: GetCategoriesParams = {
//           include_products: false
//         };
//         const response: CategoriesResponse = await CategoriesAxiosService.getCategories(params);
//         setCategories(response.data.categories);
//       } catch (err) {
//         const errorMessage = err instanceof Error ? err.message : 'Failed to fetch categories';
//         setError(errorMessage);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCategories();
//   }, []);

//   // Get icon based on category name
//   const getCategoryIcon = (categoryName: string): string => {
//     const icons: IconMapping = {
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

//   const handleRetry = (): void => {
//     window.location.reload();
//   };

//   return (
//     <>
//       <div 
//         className="offcanvas offcanvas-start d-flex h-100" 
//         id="SideCategory" 
//         tabIndex={-1} 
//         aria-labelledby="offcanvasLeftLabel"
//       >
//         <div className="offcanvas-header border-bottom">
//           <h5 className="offcanvas-title" id="offcanvasLeftLabel">
//             Browse Salessnet.
//           </h5>
//           <button 
//             className="btn-close" 
//             type="button" 
//             data-bs-dismiss="offcanvas" 
//             aria-label="Close"
//           />
//         </div>

//         <div 
//           className="offcanvas-body py-3 py-lg-0" 
//           style={{ 
//             paddingLeft: 0, 
//             overflow: 'visible', 
//             display: 'flex' 
//           }}
//         >
//           <header className="navbar navbar-expand-lg d-block z-fixed p-0" data-sticky-navbar='{"offset": 500}'>
//             <div className="container px-0 px-lg-1">
//               <div className="row">

//                   {loading && <LoadingSpinner />}
                  
//                   {error && (
//                     <div className="d-flex justify-content-center align-items-center h-100">
//                       <div className="text-center py-4 text-danger">
//                         <i className="ci-close-circle fs-3" />
//                         <p className="mt-2">Error: {error}</p>
//                         <button 
//                           className="btn btn-sm btn-outline-primary mt-2"
//                           onClick={handleRetry}
//                           type="button"
//                         >
//                           Try Again
//                         </button>
//                       </div>
//                     </div>
//                   )}

//                 <div className="col-lg-6 col-12">

//                   <div className="navbar-nav">
//                     <div className="dropdown w-100">
//                       <ul className="dropdown-menu dropdown-menu-static w-100 rounded-bottom-4 py-1 p-lg-1 show" data-bs-popper="static">
//                         {categories.map((category: Category) => {
//                           const hasChildren = category.children && category.children.length > 0;
                          
//                           return (
//                             <li 
//                               className={hasChildren ? 'dropend position-static' : ''} 
//                               key={category.id}
//                             >
//                               {hasChildren ? (
//                                 <>
//                                   <div 
//                                     className="position-relative rounded pt-2 pb-1 px-lg-2" 
//                                     data-bs-toggle="dropdown"
//                                     data-bs-trigger="hover"
//                                   >
//                                     <Link 
//                                       className="dropdown-item fw-medium stretched-link d-none d-lg-flex" 
//                                       to={`/categories/${category.slug}`}
//                                     >
//                                       <i className={`${getCategoryIcon(category.name)} fs-xl opacity-60 pe-1 me-2`} />
//                                       <span className="text-truncate">{category.name}</span>
//                                       <i className="ci-chevron-right fs-base ms-auto me-n1" />
//                                     </Link>
//                                     <div className="dropdown-item fw-medium text-wrap stretched-link d-lg-none">
//                                       <i className={`${getCategoryIcon(category.name)} fs-xl opacity-60 pe-1 me-2`} />
//                                       {category.name}
//                                       <i className="ci-chevron-down fs-base ms-auto me-n1" />
//                                     </div>
//                                   </div>
//                                   <div 
//                                     className="dropdown-menu rounded-4 p-4"
//                                     style={{ 
//                                       top: "1rem", 
//                                       height: "calc(100% - .1875rem)", 
//                                       "--cz-dropdownpacer": ".3125rem" as any, 
//                                       animation: "none" 
//                                     }}
//                                   >
//                                     <div className="d-flex flex-column flex-lg-row h-100 gap-4">
//                                       <div style={{ minWidth: "194px" }}>
//                                         <div className="d-flex w-100">
//                                           <Link 
//                                             className="animate-underline animate-target d-inline h6 text-dark-emphasis text-decoration-none text-truncate"
//                                             to={`/categories/${category.slug}`}
//                                           >
//                                             {category.name}
//                                           </Link>
//                                         </div>
//                                         <ul className="nav flex-column gap-2 mt-n2">
//                                           {category.children?.map((child: Category) => (
//                                             <li className="d-flex w-100 pt-1" key={child.id}>
//                                               <Link 
//                                                 className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
//                                                 to={`/categories/${child.slug || child.id}`}
//                                               >
//                                                 {child.name}
//                                               </Link>
//                                             </li>
//                                           ))}
//                                         </ul>
//                                       </div>
//                                       {category.image_urls && category.image_urls.length > 0 && (
//                                         <div className="d-none d-lg-block">
//                                           <div className="d-none d-xl-block" style={{ width: "284px" }} />
//                                           <div className="d-xl-none" style={{ width: "240px" }} />
//                                           <div className="position-relative d-flex flex-column justify-content-center h-100 bg-body-secondary rounded-5 py-4 px-3">
//                                             <div className="text-center px-2">
//                                               <span className="badge bg-danger bg-opacity-10 text-danger fs-sm rounded-pill mb-2">
//                                                 Featured
//                                               </span>
//                                               <div className="h2 mb-4">{category.name}</div>
//                                             </div>
//                                             <img 
//                                               src={category.image_urls[0]} 
//                                               width="252" 
//                                               alt={category.name} 
//                                             />
//                                             <div className="text-center mt-4">
//                                               <Link 
//                                                 className="btn btn-sm btn-primary stretched-link" 
//                                                 to={`/categories/${category.slug}`}
//                                               >
//                                                 Shop now
//                                               </Link>
//                                             </div>
//                                           </div>
//                                         </div>
//                                       )}
//                                     </div>
//                                   </div>
//                                 </>
//                               ) : (
//                                 <Link 
//                                   className="dropdown-item fw-medium" 
//                                   to={`/categories/${category.slug}`}
//                                 >
//                                   <i className={`${getCategoryIcon(category.name)} fs-xl opacity-60 pe-1 me-2`} />
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

// export default Categories;

// 

import React, { useEffect, useState } from 'react';
import { CategoriesAxiosService } from '../../../services/net/CategoriesAxiosService';
import LoadingSpinner from '../LoadingSpinner';
import { Link } from 'react-router-dom';

// Type definitions
interface Category {
  id: string | number;
  name: string;
  slug: string;
  children?: Category[];
  image_urls?: string[];
}

interface CategoriesResponse {
  data: {
    categories: Category[];
  };
}

interface GetCategoriesParams {
  include_products: boolean;
}

// Icon mapping type
type IconMapping = Record<string, string>;

// Extend CSSProperties to include CSS custom properties
interface CustomCSSProperties extends React.CSSProperties {
  [key: `--${string}`]: string | number;
}

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async (): Promise<void> => {
      try {
        const params: GetCategoriesParams = {
          include_products: false
        };
        const response: CategoriesResponse = await CategoriesAxiosService.getCategories(params);
        setCategories(response.data.categories);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to fetch categories';
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Get icon based on category name
  const getCategoryIcon = (categoryName: string): string => {
    const icons: IconMapping = {
      'Services': 'ci-computer',
      'Home & Garden': 'ci-home',
      'Entertainment': 'ci-game',
      'Fashion & Accessories': 'ci-apparel',
      'Family': 'ci-heart',
      'Electronics': 'ci-powerbank',
      'Hobbies': 'ci-puzzle',
      'Classifieds': 'ci-tag',
      'Vehicles': 'ci-car',
      'Property': 'ci-building',
      'Apparrel': 'ci-apparel',
      'Office Supplies': 'ci-briefcase',
      'Free Stuffs': 'ci-gift',
      'IT': 'ci-server',
      'Automotive': 'ci-car',
      'Building & Trading': 'ci-hammer',
      'Childcare & Education': 'ci-book',
      'Classes & Courses': 'ci-notebook',
      'Recruitment': 'ci-users',
      'Fitness & Personal Training': 'ci-dumbbell',
      'Health & Beauty': 'ci-mirror',
      'Tax & Financial': 'ci-calculator',
      'Legal': 'ci-scale',
      'Landscaping & Gardening': 'ci-flower',
      'Manufacturing': 'ci-factory',
      'Weddings & Venues': 'ci-ring',
      'Printing': 'ci-printer',
      'Travel & Tours': 'ci-plane',
      'Rental': 'ci-home',
      'Repairs': 'ci-settings',
      'Tools': 'ci-tool',
      'Furniture': 'ci-sofa',
      'Household': 'ci-basket',
      'Garden': 'ci-grass',
      'Appliances': 'ci-fridge',
      'Video Games': 'ci-gamepad',
      'Books': 'ci-book',
      'Movies & Music': 'ci-music',
      'Bags & Luggage': 'ci-bag',
      'Women\'s Clothing & Shoes': 'ci-dress',
      'Men\'s Clothing & Shoes': 'ci-tshirt',
      'Jewelry & Accessories': 'ci-jewelry',
      'Home Goods': 'ci-lamp',
      'Pets Supply': 'ci-paw',
      'Baby & Kids': 'ci-baby-carriage',
      'Toys & Games': 'ci-toy',
      'Electronics & Computers': 'ci-laptop',
      'Mobile Phones': 'ci-mobile',
      'Softwares': 'ci-software',
      'Power Supply': 'ci-bolt',
      'Bicycles': 'ci-bike',
      'Arts & Crafts': 'ci-palette',
      'Sports & Outdoors': 'ci-ball',
      'Auto parts': 'ci-car',
      'Musical Instruments': 'ci-mic',
      'Antiques & Collections': 'ci-collection',
      'Garage Sale': 'ci-tag',
      'Miscellaneous': 'ci-layers',
      'Industrial Cleaning': 'ci-clean',
      'Interior & Home Cleaning': 'ci-broom'
    };
    
    return icons[categoryName] || 'ci-layers';
  };

  const handleRetry = (): void => {
    window.location.reload();
  };

  return (
    <>
      <div 
        className="offcanvas offcanvas-start d-flex h-100" 
        id="SideCategory" 
        tabIndex={-1} 
        aria-labelledby="offcanvasLeftLabel"
      >
        <div className="offcanvas-header border-bottom">
          <h5 className="offcanvas-title" id="offcanvasLeftLabel">
            Browse Salessnet.
          </h5>
          <button 
            className="btn-close" 
            type="button" 
            data-bs-dismiss="offcanvas" 
            aria-label="Close"
          />
        </div>

        <div 
          className="offcanvas-body py-3 py-lg-0" 
          style={{ 
            paddingLeft: 0, 
            overflow: 'visible', 
            display: 'flex' 
          }}
        >
          <header className="navbar navbar-expand-lg d-block z-fixed p-0" data-sticky-navbar='{"offset": 500}'>
            <div className="container px-0 px-lg-1">
              <div className="row">

                  {loading && <LoadingSpinner />}
                  
                  {error && (
                    <div className="d-flex justify-content-center align-items-center h-100">
                      <div className="text-center py-4 text-danger">
                        <i className="ci-close-circle fs-3" />
                        <p className="mt-2">Error: {error}</p>
                        <button 
                          className="btn btn-sm btn-outline-primary mt-2"
                          onClick={handleRetry}
                          type="button"
                        >
                          Try Again
                        </button>
                      </div>
                    </div>
                  )}

                <div className="col-lg-6 col-12">

                  <div className="navbar-nav">
                    <div className="dropdown w-100">
                      <ul className="dropdown-menu dropdown-menu-static w-100 rounded-bottom-4 py-1 p-lg-1 show" data-bs-popper="static">
                        {categories.map((category: Category) => {
                          const hasChildren = category.children && category.children.length > 0;
                          
                          return (
                            <li 
                              className={hasChildren ? 'dropend position-static' : ''} 
                              key={category.id}
                            >
                              {hasChildren ? (
                                <>
                                  <div 
                                    className="position-relative rounded pt-2 pb-1 px-lg-2" 
                                    data-bs-toggle="dropdown"
                                    data-bs-trigger="hover"
                                  >
                                    <Link 
                                      className="dropdown-item fw-medium stretched-link d-none d-lg-flex" 
                                      to={`/categories/${category.slug}`}
                                    >
                                      <i className={`${getCategoryIcon(category.name)} fs-xl opacity-60 pe-1 me-2`} />
                                      <span className="text-truncate">{category.name}</span>
                                      <i className="ci-chevron-right fs-base ms-auto me-n1" />
                                    </Link>
                                    <div className="dropdown-item fw-medium text-wrap stretched-link d-lg-none">
                                      <i className={`${getCategoryIcon(category.name)} fs-xl opacity-60 pe-1 me-2`} />
                                      {category.name}
                                      <i className="ci-chevron-down fs-base ms-auto me-n1" />
                                    </div>
                                  </div>
                                  <div 
                                    className="dropdown-menu rounded-4 p-4"
                                    style={{ 
                                      top: "1rem", 
                                      height: "calc(100% - .1875rem)", 
                                      "--cz-dropdownpacer": ".3125rem",
                                      animation: "none" 
                                    } as CustomCSSProperties}
                                  >
                                    <div className="d-flex flex-column flex-lg-row h-100 gap-4">
                                      <div style={{ minWidth: "194px" }}>
                                        <div className="d-flex w-100">
                                          <Link 
                                            className="animate-underline animate-target d-inline h6 text-dark-emphasis text-decoration-none text-truncate"
                                            to={`/categories/${category.slug}`}
                                          >
                                            {category.name}
                                          </Link>
                                        </div>
                                        <ul className="nav flex-column gap-2 mt-n2">
                                          {category.children?.map((child: Category) => (
                                            <li className="d-flex w-100 pt-1" key={child.id}>
                                              <Link 
                                                className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                                to={`/categories/${child.slug || child.id}`}
                                              >
                                                {child.name}
                                              </Link>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                      {category.image_urls && category.image_urls.length > 0 && (
                                        <div className="d-none d-lg-block">
                                          <div className="d-none d-xl-block" style={{ width: "284px" }} />
                                          <div className="d-xl-none" style={{ width: "240px" }} />
                                          <div className="position-relative d-flex flex-column justify-content-center h-100 bg-body-secondary rounded-5 py-4 px-3">
                                            <div className="text-center px-2">
                                              <span className="badge bg-danger bg-opacity-10 text-danger fs-sm rounded-pill mb-2">
                                                Featured
                                              </span>
                                              <div className="h2 mb-4">{category.name}</div>
                                            </div>
                                            <img 
                                              src={category.image_urls[0]} 
                                              width="252" 
                                              alt={category.name} 
                                            />
                                            <div className="text-center mt-4">
                                              <Link 
                                                className="btn btn-sm btn-primary stretched-link" 
                                                to={`/categories/${category.slug}`}
                                              >
                                                Shop now
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </>
                              ) : (
                                <Link 
                                  className="dropdown-item fw-medium" 
                                  to={`/categories/${category.slug}`}
                                >
                                  <i className={`${getCategoryIcon(category.name)} fs-xl opacity-60 pe-1 me-2`} />
                                  <span className="text-truncate">{category.name}</span>
                                </Link>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
    </>
  );
};

export default Categories;