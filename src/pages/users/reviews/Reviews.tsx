
// V3
// Fixed Frontend Code
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aside from "../shared/Aside";
import ReviewDetails from "./ReviewDetails";
import ReviewForm from "./ReviewForm";
import LoadingSpinner from '../../../components/shared/LoadingSpinner';
import ReviewAxiosService from '../../../services/net/ReviewsAxiosService';
import { formatRelativeTime } from '../../../utils/dateUtils';
import { UsersService } from '../../../services/local/UsersService';

interface Product {
  id: number;
  name: string;
  slug: string;
  price: string;
  image_url?: string;
  image_urls?: string[];
}

interface Review {
  id: number;
  comment: string;
  rating: number;
  recommend: boolean;
  created_at: string;
  product: Product;
  user: {
    id: number;
    name: string;
    username: string;
    avatar?: string;
  };
}

interface ReviewsData {
  reviews?: Review[];
  products?: Product[];
  pagination: {
    current_page: number;
    total_pages: number;
    per_page: number;
    total_items: number;
    has_next: boolean;
    has_prev: boolean;
  };
}

const Reviews: React.FC = () => {
  
  const [reviewsData, setReviewsData] = useState<ReviewsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterType, setFilterType] = useState('products-reviews');
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const user = UsersService.getCurrentUser();

  useEffect(() => {
    fetchReviews();
  }, [currentPage, filterType]);

  const fetchReviews = async () => {
    try {
      setLoading(true);
      setError(null);
      
      let response;
      
      if (filterType === 'products') {
        // Fetch products awaiting review
        response = await ReviewAxiosService.getUserReviews(user?.id, {
          page: currentPage,
          page_size: 5,
          filter: 'products'
        });
      } else if (filterType === 'reviews') {
        // Fetch only existing reviews
        response = await ReviewAxiosService.getUserReviews(user?.id, {
          page: currentPage,
          page_size: 5,
          filter: 'reviews'
        });
      } else {
        // For 'products-reviews', we need to handle this differently
        // For now, default to reviews
        response = await ReviewAxiosService.getUserReviews(user?.id, {
          page: currentPage,
          page_size: 5,
          filter: 'reviews'
        });
      }

      // console.log('API Response:', response.data);

      if (response.data.success) {
        // Handle different response structures
        if (response.data.data) {
          // Structure: { success: true, data: { reviews/products: [], pagination: {} } }
          setReviewsData({
            reviews: response.data.data.reviews,
            products: response.data.data.products,
            pagination: response.data.data.pagination
          });
        } else {
          // Direct structure: { success: true, reviews/products: [], pagination: {} }
          setReviewsData({
            reviews: response.data.reviews,
            products: response.data.products,
            pagination: response.data.pagination
          });
        }
      } else {
        setError(response.data.error || 'Failed to fetch reviews');
      }
    } catch (err: any) {
      console.error('Error fetching reviews:', err);
      setError(err.response?.data?.message || 'Failed to fetch reviews');
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterType(event.target.value);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReviewClick = (review: Review) => {
    setSelectedReview(review);
  };

  const handleLeaveReview = (product: any) => {
    setSelectedProduct(product);
  };

  const onReviewSubmitted = () => {
    fetchReviews(); // Refresh the reviews list
    setSelectedProduct(null);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={`ci-star${index < rating ? '-filled text-warning' : ' text-body-tertiary opacity-75'}`}
      />
    ));
  };

  const renderReviewItem = (item: Review | Product) => {
    // Check if this is a review or just a product awaiting review
    const isReview = 'comment' in item && 'rating' in item;
    const product = isReview ? (item as Review).product : (item as Product);
    
    return (
      <div key={isReview ? `review-${(item as Review).id}` : `product-${(item as Product).id}`} 
           className="d-md-flex align-items-center justify-content-between gap-4 border-bottom py-3">
        <div className="nav flex-nowrap position-relative align-items-center">
          <img 
            src={product?.image_url || '/assets/img/placeholder.png'}
            className="d-block my-xl-1 rounded"
            width={64}
            alt={product?.name}
            onError={(e) => {
              e.currentTarget.src = '/assets/img/placeholder.jpg';
            }}
          />
          <Link
            className="nav-link stretched-link hover-effect-underline ps-3 p-0"
            to={`/products/${product?.slug}`}
          >
            {product?.name}
          </Link>
        </div>

        {isReview ? (
          <div className="position-relative d-flex align-items-center text-decoration-none min-w-0 pt-1 pt-md-0 ps-3 ps-md-0 mb-2 mb-md-0">
            <div className="flex-shrink-0 d-md-none" style={{ width: '64px' }} />
            <div className="h6 fs-sm text-body-secondary text-truncate p-0 me-3 me-sm-4 mb-0">
              Reviewed {formatRelativeTime((item as Review).created_at)}
            </div>
            <div className="d-flex gap-1 fs-sm me-2 me-sm-3">
              {renderStars((item as Review).rating)}
            </div>
            <button
              className="btn btn-icon btn-ghost btn-secondary stretched-link border-0"
              onClick={() => handleReviewClick(item as Review)}
              data-bs-toggle="offcanvas"
              data-bs-target="#reviewDetails"
              aria-controls="reviewDetails"
              aria-label="Show review details"
            >
              <i className="ci-chevron-right fs-lg" />
            </button>
          </div>
        ) : (
          <>
            <div className="d-flex h6 fs-sm pt-2 pt-md-0 ps-3 ps-md-0 mb-2 mb-md-0">
              <div className="flex-shrink-0 d-md-none" style={{ width: '64px' }} />
              <svg
                className="text-warning flex-shrink-0 me-2"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
              >
                <path d="M1.333 9.667H7.5V16h-5c-.64 0-1.167-.527-1.167-1.167V9.667zm13.334 0v5.167c0 .64-.527 1.167-1.167 1.167h-5V9.667h6.167zM0 5.833V7.5c0 .64.527 1.167 1.167 1.167h.167H7.5v-1-3H1.167C.527 4.667 0 5.193 0 5.833zm14.833-1.166H8.5v3 1h6.167.167C15.473 8.667 16 8.14 16 7.5V5.833c0-.64-.527-1.167-1.167-1.167z" />
              </svg>
              +100 bonuses for a review
            </div>
            <div className="d-flex pt-2 pt-md-0 ps-3 ps-md-0 mb-2 mb-md-0">
              <div className="d-md-none" style={{ width: '64px' }} />
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => handleLeaveReview(product)}
                data-bs-toggle="modal"
                data-bs-target="#reviewForm"
              >
                Leave a review
              </button>
            </div>
          </>
        )}
      </div>
    );
  };

  const renderPagination = () => {
    if (!reviewsData?.pagination || reviewsData.pagination.total_pages <= 1) {
      return null;
    }

    const { current_page, total_pages, has_prev, has_next } = reviewsData.pagination;
    const pages = [];

    // Calculate which pages to show
    const maxVisiblePages = 5;
    let startPage = Math.max(1, current_page - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(total_pages, startPage + maxVisiblePages - 1);
    
    // Adjust start page if we're near the end
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return (
      <nav className="pt-3 pb-2 pb-sm-0 mt-2 mt-md-3" aria-label="Reviews pagination">
        <ul className="pagination">
          {has_prev && (
            <li className="page-item">
              <button 
                className="page-link" 
                onClick={() => handlePageChange(current_page - 1)}
                aria-label="Previous page"
              >
                <i className="ci-chevron-left" />
              </button>
            </li>
          )}
          
          {startPage > 1 && (
            <>
              <li className="page-item">
                <button className="page-link" onClick={() => handlePageChange(1)}>
                  1
                </button>
              </li>
              {startPage > 2 && (
                <li className="page-item disabled">
                  <span className="page-link">...</span>
                </li>
              )}
            </>
          )}
          
          {pages.map((page) => (
            <li key={page} className={`page-item ${current_page === page ? 'active' : ''}`}>
              {current_page === page ? (
                <span className="page-link" aria-current="page">
                  {page}
                  <span className="visually-hidden">(current)</span>
                </span>
              ) : (
                <button
                  className="page-link"
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              )}
            </li>
          ))}
          
          {endPage < total_pages && (
            <>
              {endPage < total_pages - 1 && (
                <li className="page-item disabled">
                  <span className="page-link">...</span>
                </li>
              )}
              <li className="page-item">
                <button className="page-link" onClick={() => handlePageChange(total_pages)}>
                  {total_pages}
                </button>
              </li>
            </>
          )}
          
          {has_next && (
            <li className="page-item">
              <button 
                className="page-link" 
                onClick={() => handlePageChange(current_page + 1)}
                aria-label="Next page"
              >
                <i className="ci-chevron-right" />
              </button>
            </li>
          )}
        </ul>
      </nav>
    );
  };

  // Get the current items to display
  const getCurrentItems = () => {
    if (!reviewsData) return [];
    
    if (filterType === 'products') {
      return reviewsData.products || [];
    } else {
      return reviewsData.reviews || [];
    }
  };

  const currentItems = getCurrentItems();

  if (loading) {
    return <LoadingSpinner />;
  }

  // Handle review updates and deletions
  
  const handleReviewUpdated = () => {
  fetchReviews(); // Refresh reviews list
  setSelectedReview(null); // Clear selected review
};

const handleReviewDeleted = () => {
  fetchReviews();
  setSelectedReview(null);
};

  return (
    <>
      {/* Review details offcanvas */}
      {/* <ReviewDetails review={selectedReview} /> */}
      <ReviewDetails 
        review={selectedReview} 
        onReviewUpdated={handleReviewUpdated}
        onReviewDeleted={handleReviewDeleted}
      />

      {/* Review form modal */}
      <ReviewForm 
        product={selectedProduct}
        onReviewSubmitted={onReviewSubmitted}
      />

      {/* Page content */}
      <main className="content-wrapper">
        <div className="container py-5 mt-n2 mt-sm-0">
          <div className="row pt-md-2 pt-lg-3 pb-sm-2 pb-md-3 pb-lg-4 pb-xl-5">
            
            {/* Sidebar navigation */}
            <Aside />

            {/* Reviews content */}
            <div className="col-lg-9">
              <div className="ps-lg-3 ps-xl-0">
                {/* Page title + Sorting select */}
                <div className="row align-items-center pb-2 mb-sm-1">
                  <div className="col-sm-6 col-md-7 col-xxl-8 mb-3 mb-md-0">
                    <h1 className="h2 me-3 mb-0">My reviews</h1>
                  </div>
                  <div className="col-sm-6 col-md-5 col-xxl-4">
                    <select 
                      className="form-select"
                      value={filterType} 
                      onChange={handleFilterChange}
                      aria-label="Review filtering"
                    >
                      <option value="products-reviews">Products and reviews</option>
                      <option value="reviews">My reviews</option>
                      <option value="products">Products awaiting reviews</option>
                    </select>
                  </div>
                </div>

                {/* Review items */}
                {error ? (
                  <div className="alert alert-danger" role="alert">
                    <i className="ci-info me-2"></i>
                    {error}
                  </div>
                ) : currentItems.length === 0 ? (
                  <div className="text-center py-5">
                    <div className="mb-4">
                      <i className="ci-comment display-4 text-body-tertiary"></i>
                    </div>
                    <h3 className="h4">No {filterType === 'products' ? 'products' : 'reviews'} yet</h3>
                    <p className="text-body-secondary mb-4">
                      {filterType === 'reviews' 
                        ? "You haven't written any reviews yet."
                        : filterType === 'products'
                        ? "No products available for review at the moment."
                        : "No items found."
                      }
                    </p>
                    <Link to="/products" className="btn btn-primary">
                      Browse Products
                    </Link>
                  </div>
                ) : (
                  <>
                    {currentItems.map(renderReviewItem)}
                    {renderPagination()}
                  </>
                )}

              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );

};

export default Reviews;