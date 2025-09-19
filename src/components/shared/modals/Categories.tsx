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

  const fetchCategories = async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
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

  useEffect(() => {
    fetchCategories();
  }, []);

  // Enhanced icon mapping with various colors
  const getCategoryIcon = (categoryName: string): { icon: string; color: string } => {
    const iconMap: Record<string, { icon: string; color: string }> = {
      'Services': { icon: 'ci-computer', color: 'text-primary' },
      'Home & Garden': { icon: 'ci-home', color: 'text-success' },
      'Entertainment': { icon: 'ci-game', color: 'text-warning' },
      'Fashion & Accessories': { icon: 'ci-apparel', color: 'text-danger' },
      'Family': { icon: 'ci-heart', color: 'text-pink' },
      'Electronics': { icon: 'ci-powerbank', color: 'text-info' },
      'Hobbies': { icon: 'ci-puzzle', color: 'text-purple' },
      'Classifieds': { icon: 'ci-tag', color: 'text-dark' },
      'Vehicles': { icon: 'ci-car', color: 'text-secondary' },
      'Property': { icon: 'ci-building', color: 'text-primary' },
      'Apparrel': { icon: 'ci-apparel', color: 'text-danger' },
      'Office Supplies': { icon: 'ci-briefcase', color: 'text-dark' },
      'Free Stuffs': { icon: 'ci-gift', color: 'text-success' },
      'IT': { icon: 'ci-server', color: 'text-info' },
      'Automotive': { icon: 'ci-car', color: 'text-secondary' },
      'Building & Trading': { icon: 'ci-hammer', color: 'text-warning' },
      'Childcare & Education': { icon: 'ci-book', color: 'text-primary' },
      'Classes & Courses': { icon: 'ci-notebook', color: 'text-success' },
      'Recruitment': { icon: 'ci-users', color: 'text-info' },
      'Fitness & Personal Training': { icon: 'ci-dumbbell', color: 'text-danger' },
      'Health & Beauty': { icon: 'ci-mirror', color: 'text-pink' },
      'Tax & Financial': { icon: 'ci-calculator', color: 'text-success' },
      'Legal': { icon: 'ci-scale', color: 'text-dark' },
      'Landscaping & Gardening': { icon: 'ci-flower', color: 'text-success' },
      'Manufacturing': { icon: 'ci-factory', color: 'text-secondary' },
      'Weddings & Venues': { icon: 'ci-ring', color: 'text-pink' },
      'Printing': { icon: 'ci-printer', color: 'text-dark' },
      'Travel & Tours': { icon: 'ci-plane', color: 'text-info' },
      'Rental': { icon: 'ci-home', color: 'text-warning' },
      'Repairs': { icon: 'ci-settings', color: 'text-secondary' },
      'Tools': { icon: 'ci-tool', color: 'text-warning' },
      'Furniture': { icon: 'ci-sofa', color: 'text-primary' },
      'Household': { icon: 'ci-basket', color: 'text-success' },
      'Garden': { icon: 'ci-grass', color: 'text-success' },
      'Appliances': { icon: 'ci-fridge', color: 'text-info' },
      'Video Games': { icon: 'ci-gamepad', color: 'text-warning' },
      'Books': { icon: 'ci-book', color: 'text-primary' },
      'Movies & Music': { icon: 'ci-music', color: 'text-danger' },
      'Bags & Luggage': { icon: 'ci-bag', color: 'text-secondary' },
      'Women\'s Clothing & Shoes': { icon: 'ci-dress', color: 'text-pink' },
      'Men\'s Clothing & Shoes': { icon: 'ci-tshirt', color: 'text-info' },
      'Jewelry & Accessories': { icon: 'ci-jewelry', color: 'text-warning' },
      'Home Goods': { icon: 'ci-lamp', color: 'text-primary' },
      'Pets Supply': { icon: 'ci-paw', color: 'text-success' },
      'Baby & Kids': { icon: 'ci-baby-carriage', color: 'text-pink' },
      'Toys & Games': { icon: 'ci-toy', color: 'text-warning' },
      'Electronics & Computers': { icon: 'ci-laptop', color: 'text-info' },
      'Mobile Phones': { icon: 'ci-mobile', color: 'text-secondary' },
      'Softwares': { icon: 'ci-software', color: 'text-primary' },
      'Power Supply': { icon: 'ci-bolt', color: 'text-warning' },
      'Bicycles': { icon: 'ci-bike', color: 'text-success' },
      'Arts & Crafts': { icon: 'ci-palette', color: 'text-danger' },
      'Sports & Outdoors': { icon: 'ci-ball', color: 'text-success' },
      'Auto parts': { icon: 'ci-car', color: 'text-secondary' },
      'Musical Instruments': { icon: 'ci-mic', color: 'text-danger' },
      'Antiques & Collections': { icon: 'ci-collection', color: 'text-dark' },
      'Garage Sale': { icon: 'ci-tag', color: 'text-warning' },
      'Miscellaneous': { icon: 'ci-layers', color: 'text-secondary' },
      'Industrial Cleaning': { icon: 'ci-clean', color: 'text-info' },
      'Interior & Home Cleaning': { icon: 'ci-broom', color: 'text-success' }
    };
    
    return iconMap[categoryName] || { icon: 'ci-layers', color: 'text-secondary' };
  };

  const toggleCategory = (categoryId: string | number): void => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const handleRetry = (): void => {
    fetchCategories();
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
          <div className="d-flex justify-content-center align-items-center">
          <LoadingSpinner size='sm' />
          <span className="ms-2">Getting top categories ready...</span>
        </div>
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
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Retrying...
                </>
              ) : (
                'Try Again'
              )}
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
            const categoryIcon = getCategoryIcon(category.name);
            
            return (
              <div key={category.id} className="category-item border-bottom">
                <div className="category-main p-3 w-100">
                  <div className="d-flex align-items-center w-100">
                    <Link 
                      className="d-flex align-items-center text-decoration-none text-dark flex-grow-1"
                      to={`/categories/${category.slug}`}
                    >
                      <i className={`${categoryIcon.icon} fs-4 ${categoryIcon.color} me-3`} />
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

      <style jsx="true">{`
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
        
        /* Additional color classes */
        .text-pink {
          color: #e91e63 !important;
        }
        
        .text-purple {
          color: #9c27b0 !important;
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