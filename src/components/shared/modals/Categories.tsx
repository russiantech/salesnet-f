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

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedCategory, setExpandedCategory] = useState<string | number | null>(null);

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

  // Enhanced icon mapping with fallback
  const getCategoryIcon = (categoryName: string): string => {
    const icons: Record<string, string> = {
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

  const toggleCategory = (categoryId: string | number): void => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const handleRetry = (): void => {
    window.location.reload();
  };

  const renderSubcategories = (children: Category[]): JSX.Element => (
    <div className="subcategories mt-2 ms-4">
      {children.map((child) => (
        <Link 
          key={child.id}
          className="d-block py-2 px-3 text-decoration-none text-muted hover-bg-light rounded"
          to={`/categories/${child.slug || child.id}`}
        >
          <small>{child.name}</small>
        </Link>
      ))}
    </div>
  );

  if (loading) {
    return (
      <div className="offcanvas offcanvas-start" id="SideCategory" tabIndex={-1}>
        <div className="offcanvas-header border-bottom">
          <h5 className="offcanvas-title">Browse Salessnet.</h5>
          <button 
            className="btn-close" 
            type="button" 
            data-bs-dismiss="offcanvas" 
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body d-flex justify-content-center align-items-center">
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="offcanvas offcanvas-start" id="SideCategory" tabIndex={-1}>
        <div className="offcanvas-header border-bottom">
          <h5 className="offcanvas-title">Browse Salessnet.</h5>
          <button 
            className="btn-close" 
            type="button" 
            data-bs-dismiss="offcanvas" 
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body d-flex justify-content-center align-items-center">
          <div className="text-center py-4">
            <i className="ci-close-circle fs-1 text-danger mb-3" />
            <h6 className="text-danger mb-3">Error Loading Categories</h6>
            <p className="text-muted mb-3">{error}</p>
            <button 
              className="btn btn-outline-primary"
              onClick={handleRetry}
              type="button"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="offcanvas offcanvas-start" id="SideCategory" tabIndex={-1}>
      <div className="offcanvas-header border-bottom">
        <h5 className="offcanvas-title">Browse Salessnet.</h5>
        <button 
          className="btn-close" 
          type="button" 
          data-bs-dismiss="offcanvas" 
          aria-label="Close"
        />
      </div>

      <div className="offcanvas-body p-0" style={{ overflowY: 'auto' }}>
        <div className="categories-list w-100">
          {categories.map((category) => {
            const hasChildren = category.children && category.children.length > 0;
            const isExpanded = expandedCategory === category.id;
            
            return (
              <div key={category.id} className="category-item border-bottom">
                <div className="category-main p-3 w-100">
                  <div className="d-flex align-items-center w-100">
                    <Link 
                      className="d-flex align-items-center text-decoration-none text-dark flex-grow-1"
                      to={`/categories/${category.slug}`}
                    >
                      <i className={`${getCategoryIcon(category.name)} fs-4 text-primary me-3`} />
                      <span className="fw-medium">{category.name}</span>
                    </Link>
                    
                    {hasChildren && (
                      <button
                        className="btn btn-link p-0 border-0 text-muted"
                        onClick={() => toggleCategory(category.id)}
                        aria-expanded={isExpanded}
                        aria-label={`Toggle ${category.name} subcategories`}
                      >
                        <i className={`ci-chevron-${isExpanded ? 'up' : 'down'} fs-5`} />
                      </button>
                    )}
                  </div>
                </div>

                {hasChildren && isExpanded && (
                  <div className="subcategories bg-light">
                    <div className="p-2">
                      <div className="row g-0">
                        {category.children!.map((child) => (
                          <div key={child.id} className="col-12 col-sm-6 col-lg-12">
                            <Link 
                              className="d-block py-2 px-3 text-decoration-none text-muted rounded hover-bg-white transition"
                              to={`/categories/${child.slug || child.id}`}
                            >
                              <small className="fw-normal">{child.name}</small>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Featured category image on larger screens */}
                {category.image_urls && category.image_urls.length > 0 && (
                  <div className="d-none d-lg-block category-featured bg-light">
                    <div className="p-3">
                      <div className="text-center">
                        <span className="badge bg-primary bg-opacity-10 text-primary rounded-pill mb-2">
                          Featured
                        </span>
                        <img 
                          src={category.image_urls[0]} 
                          alt={category.name}
                          className="img-fluid rounded mb-3"
                          style={{ maxHeight: '120px', objectFit: 'cover' }}
                        />
                        <Link 
                          className="btn btn-sm btn-primary w-100" 
                          to={`/categories/${category.slug}`}
                        >
                          Explore {category.name}
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .category-item:hover .category-main {
          background-color: #f8f9fa;
        }
        
        .hover-bg-light:hover {
          background-color: #f8f9fa !important;
        }
        
        .hover-bg-white:hover {
          background-color: #ffffff !important;
        }
        
        .transition {
          transition: all 0.2s ease-in-out;
        }
        
        .categories-list {
          max-height: calc(100vh - 120px);
        }
        
        .subcategories {
          border-top: 1px solid #e9ecef;
          animation: slideDown 0.3s ease-out;
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 500px;
          }
        }
        
        .offcanvas-body::-webkit-scrollbar {
          width: 6px;
        }
        
        .offcanvas-body::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        .offcanvas-body::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 3px;
        }
        
        .offcanvas-body::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }
        
        @media (max-width: 575.98px) {
          .category-main {
            padding: 1rem 0.75rem !important;
          }
          
          .subcategories .col-12 {
            padding: 0.25rem 0 !important;
          }
        }
        
        @media (min-width: 576px) and (max-width: 991.98px) {
          .subcategories .row {
            display: flex;
            flex-wrap: wrap;
          }
          
          .subcategories .col-sm-6 {
            flex: 0 0 50%;
            max-width: 50%;
          }
        }
        
        @media (min-width: 992px) {
          .category-item {
            border-radius: 0.5rem;
            margin-bottom: 0.25rem;
          }
          
          .category-featured {
            margin-top: 0.5rem;
            border-radius: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Categories;