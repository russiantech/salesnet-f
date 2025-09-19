
// v4
// Updated ReviewDetails with Toast Notifications
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../../../utils/dateUtils';
import ReviewAxiosService from '../../../services/net/ReviewsAxiosService';
import { NotificationService } from '../../../services/local/NotificationService';

interface Review {
  id: number;
  comment: string;
  rating: number;
  recommend: boolean;
  created_at: string;
  updated_at: string;
  product: {
    id: number;
    name: string;
    slug: string;
    price: string;
    image_url?: string;
    image_urls?: string[];
  };
  user: {
    id: number;
    name: string;
    username: string;
    avatar?: string;
  };
}

interface ReviewDetailsProps {
  review: Review | null;
  onReviewUpdated?: () => void;
  onReviewDeleted?: () => void;
}

interface EditFormData {
  rating: string;
  comment: string;
  recommend: string;
}

const ReviewDetails: React.FC<ReviewDetailsProps> = ({ 
  review, 
  onReviewUpdated = () => {},
  onReviewDeleted = () => {}
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [notificationState, setNotificationState] = useState({ show: false, message: '', type: '' });

  const [editFormData, setEditFormData] = useState<EditFormData>({
    rating: '',
    comment: '',
    recommend: 'true'
  });

  // Setup notification subscription
  useEffect(() => {
    const observer = (data: any) => {
      setNotificationState(data);
    };

    NotificationService.subscribe(observer);
    return () => {
      NotificationService.unsubscribe(observer);
    };
  }, []);

  const initEditForm = () => {
    if (review) {
      setEditFormData({
        rating: review.rating.toString(),
        comment: review.comment,
        recommend: review.recommend.toString()
      });
      setValidationErrors({});
      setIsEditing(true);
    }
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setValidationErrors({});
  };

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};

    if (!editFormData.rating) {
      errors.rating = 'Please select a rating';
    }

    if (!editFormData.comment.trim()) {
      errors.comment = 'Please write a review';
    } else if (editFormData.comment.trim().length < 10) {
      errors.comment = 'Review must be at least 50 characters long';
    } else if (editFormData.comment.trim().length > 1000) {
      errors.comment = 'Review must not exceed 1000 characters';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (field: keyof EditFormData, value: string) => {
    setEditFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear validation error when user starts typing
    if (validationErrors[field]) {
      setValidationErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleUpdateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!review || !validateForm()) return;

    setIsSubmitting(true);
    NotificationService.showDialog("Updating review...", "primary");

    try {
      const response = await ReviewAxiosService.updateReview(review.id, {
        comment: editFormData.comment.trim(),
        rating: parseInt(editFormData.rating),
        recommend: editFormData.recommend === 'true'
      });

      if (response.data.success) {
        const successMessage = Array.isArray(response.data.message)
          ? response.data.message[0]
          : response.data.message || 'Review updated successfully!';

        NotificationService.showDialog(successMessage, 'success');
        setIsEditing(false);
        onReviewUpdated && onReviewUpdated();

        // Close offcanvas after success
        setTimeout(() => {
          const offcanvasElement = document.getElementById('reviewDetails');
          if (offcanvasElement) {
            const offcanvas = (window as any).bootstrap.Offcanvas.getInstance(offcanvasElement);
            if (offcanvas) {
              offcanvas.hide();
            }
          }
        }, 1500);
      } else {
        throw new Error(response.data.error || 'Update failed');
      }
      
    } catch (error: any) {
      console.error('Error updating review:', error);
      
      const errorMessage = (
        error?.response?.data?.error ||
        error?.response?.data?.message ||
        error?.message ||
        'Failed to update review. Please try again.'
      );
      
      const displayMessage = Array.isArray(errorMessage)
        ? errorMessage[0]
        : errorMessage;

      NotificationService.showDialog(displayMessage, 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!review) return;

    setIsSubmitting(true);
    NotificationService.showDialog("Deleting review...", "primary");

    try {
      const response = await ReviewAxiosService.deleteReview(review.id);

      if (response.data.success) {
        const successMessage = Array.isArray(response.data.message)
          ? response.data.message[0]
          : response.data.message || 'Review deleted successfully!';

        NotificationService.showDialog(successMessage, 'success');
        onReviewDeleted && onReviewDeleted();
        setShowDeleteConfirm(false);
        
        // Close offcanvas after success
        setTimeout(() => {
          const offcanvasElement = document.getElementById('reviewDetails');
          if (offcanvasElement) {
            const offcanvas = (window as any).bootstrap.Offcanvas.getInstance(offcanvasElement);
            if (offcanvas) {
              offcanvas.hide();
            }
          }
        }, 1500);
      } else {
        throw new Error(response.data.error || 'Delete failed');
      }
    } catch (error: any) {
      console.error('Error deleting review:', error);
      
      const errorMessage = (
        error?.response?.data?.error ||
        error?.response?.data?.message ||
        error?.message ||
        'Failed to delete review. Please try again.'
      );
      
      const displayMessage = Array.isArray(errorMessage)
        ? errorMessage[0]
        : errorMessage;

      NotificationService.showDialog(displayMessage, 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={`ci-star${index < rating ? '-filled text-warning' : ' text-body-tertiary opacity-75'}`}
      />
    ));
  };

  if (!review) {
    return (
      <div className="offcanvas offcanvas-end pb-sm-2 px-sm-2" id="reviewDetails" tabIndex={-1} style={{ width: '500px' }}>
        <div className="offcanvas-header py-3 pt-lg-4">
          <h4 className="offcanvas-title">Review Details</h4>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div className="offcanvas-body pt-2">
          <div className="text-center py-5">
            <i className="ci-comment display-4 text-body-tertiary mb-3"></i>
            <p className="text-body-secondary">No review selected</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="offcanvas offcanvas-end pb-sm-2 px-sm-2" id="reviewDetails" tabIndex={-1} style={{ width: '500px' }}>
        {/* Header */}
        <div className="offcanvas-header py-3 pt-lg-4">
          <h4 className="offcanvas-title">
            {isEditing ? 'Edit Review' : 'My Review'}
          </h4>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        
        {/* Body */}
        <div className="offcanvas-body pt-2">
          {/* Product */}
          <div className="d-flex align-items-center mb-4">
            <Link className="flex-shrink-0" to={`/products/${review.product.slug}`}>
              <img 
                src={review.product?.image_url || '/assets/img/placeholder.jpg'}
                className='rounded'
                width={110}
                alt={review.product.name}
                onError={(e) => {
                  e.currentTarget.src = '/assets/img/placeholder.jpg';
                }}
              />
            </Link>
            <div className="w-100 min-w-0 ps-2 ps-sm-3">
              <h5 className="d-flex animate-underline mb-2">
                <Link 
                  className="d-block fs-sm fw-medium text-truncate animate-target" 
                  to={`/products/${review.product.slug}`}
                >
                  {review.product.name}
                </Link>
              </h5>
              <div className="h6 mb-0">₦{review.product.price}</div>
            </div>
          </div>
          
          {isEditing ? (
            /* Edit Form */
            <form onSubmit={handleUpdateSubmit}>
              {/* Rating */}
              <div className="mb-3">
                <label className="form-label">
                  Rating <span className="text-danger">*</span>
                </label>
                <select
                  className={`form-select ${validationErrors.rating ? 'is-invalid' : ''}`}
                  value={editFormData.rating}
                  onChange={(e) => handleInputChange('rating', e.target.value)}
                  required
                >
                  <option value="">Choose rating</option>
                  {[5, 4, 3, 2, 1].map((num) => (
                    <option key={num} value={num}>
                      {num} star{num !== 1 ? 's' : ''}
                    </option>
                  ))}
                </select>
                {validationErrors.rating && (
                  <div className="invalid-feedback">{validationErrors.rating}</div>
                )}
              </div>

              {/* Review Text */}
              <div className="mb-3">
                <label className="form-label">
                  Review <span className="text-danger">*</span>
                </label>
                <textarea
                  className={`form-control ${validationErrors.comment ? 'is-invalid' : ''}`}
                  rows={4}
                  value={editFormData.comment}
                  onChange={(e) => handleInputChange('comment', e.target.value)}
                  placeholder="Share your experience with this product..."
                  minLength={10}
                  maxLength={1000}
                  required
                />
                {validationErrors.comment && (
                  <div className="invalid-feedback">{validationErrors.comment}</div>
                )}
                <small className="form-text text-muted">
                  {editFormData.comment.length}/1000 characters (minimum 10 required)
                </small>
              </div>

              {/* Recommendation */}
              <div className="mb-4">
                <label className="form-label">
                  Would you recommend this product? <span className="text-danger">*</span>
                </label>
                <div className="btn-group w-100" role="group">
                  <input
                    type="radio"
                    className="btn-check"
                    name="editRecommend"
                    id="edit-recommend-yes"
                    checked={editFormData.recommend === 'true'}
                    onChange={() => handleInputChange('recommend', 'true')}
                  />
                  <label className="btn btn-outline-success rounded-pill" htmlFor="edit-recommend-yes">
                    <i className="ci-check-circle me-2"></i>Yes
                  </label>

                  <input
                    type="radio"
                    className="btn-check"
                    name="editRecommend"
                    id="edit-recommend-no"
                    checked={editFormData.recommend === 'false'}
                    onChange={() => handleInputChange('recommend', 'false')}
                  />
                  <label className="btn btn-outline-danger rounded-pill" htmlFor="edit-recommend-no">
                    <i className="ci-close-circle me-2"></i>No
                  </label>
                </div>
              </div>

              {/* Edit Form Actions */}
              <div className="d-flex gap-2 mb-4">
                <button
                  type="button"
                  className="btn btn-outline-secondary flex-fill"
                  onClick={cancelEdit}
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary flex-fill"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner-grow spinner-grow-sm me-2" role="status" aria-hidden="true"></span>
                      Updating...
                    </>
                  ) : (
                    'Update Review'
                  )}
                </button>
              </div>
            </form>
          ) : (
            /* Review Display */
            <>
              {/* Review */}
              <div className="d-flex align-items-center justify-content-between mb-3">
                <div className="d-flex gap-1 fs-sm me-2 me-sm-3">
                  {renderStars(review.rating)}
                </div>
                <div className="fs-sm text-body-secondary">
                  {formatDate(review.created_at)}
                </div>
              </div>
              
              {/* Recommendation */}
              {review.recommend !== null && (
                <div className="d-flex gap-2 pb-2 mb-1">
                  <div className="d-flex fs-sm">
                    <span className="text-dark-emphasis fw-medium me-2">Recommendation:</span>
                    <span className={`badge rounded-pill ${review.recommend ? 'bg-success' : 'bg-danger'}`}>
                      {review.recommend ? 'Recommended' : 'Not Recommended'}
                    </span>
                  </div>
                </div>
              )}
              
              {/* Review Text */}
              <p className="fs-sm mb-4">{review.comment}</p>
              
              {/* Review Actions */}
              <div className="nav align-items-center mb-4">
                <button 
                  className="nav-link text-body-secondary px-0 ms-auto me-n1 pe-none"
                  disabled
                >
                  <i className="ci-thumbs-up fs-base me-1" />
                  0
                </button>
                <hr className="vr my-2 mx-3" />
                <button 
                  className="nav-link text-body-secondary px-0 ms-n1 pe-none"
                  disabled
                >
                  <i className="ci-thumbs-down fs-base me-1" />
                  0
                </button>
              </div>
              
              {/* Bonus Points */}
              <div className="pt-4 mt-2 mt-md-3">
                <div className="d-flex align-items-center bg-body-tertiary text-dark-emphasis fs-sm rounded p-3 px-sm-4">
                  <svg 
                    className="text-warning flex-shrink-0 me-3" 
                    xmlns="http://www.w3.org/2000/svg" 
                    width={16} 
                    height={16} 
                    fill="currentColor"
                  >
                    <path d="M1.333 9.667H7.5V16h-5c-.64 0-1.167-.527-1.167-1.167V9.667zm13.334 0v5.167c0 .64-.527 1.167-1.167 1.167h-5V9.667h6.167zM0 5.833V7.5c0 .64.527 1.167 1.167 1.167h.167H7.5v-1-3H1.167C.527 4.667 0 5.193 0 5.833zm14.833-1.166H8.5v3 1h6.167.167C15.473 8.667 16 8.14 16 7.5V5.833c0-.64-.527-1.167-1.167-1.167z" />
                  </svg>
                  You have earned <span className="fw-semibold"> +1.0 bonuses</span>
                </div>
              </div>
              
              {/* Review Management Actions */}
              <div className="pt-4 mt-3 border-top">
                <div className="d-flex gap-2">
                  <button 
                    className="btn btn-outline-primary btn-sm rounded-pill"
                    onClick={initEditForm}
                    disabled={isSubmitting}
                  >
                    <i className="ci-edit me-1"></i>
                    Edit Review
                  </button>
                  <button 
                    className="btn btn-outline-danger btn-sm rounded-pill"
                    onClick={() => setShowDeleteConfirm(true)}
                    disabled={isSubmitting}
                  >
                    <i className="ci-trash me-1"></i>
                    Delete
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Delete</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setShowDeleteConfirm(false)}
                  disabled={isSubmitting}
                ></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete this review? This action cannot be undone.</p>
                <div className="alert alert-warning">
                  <i className="ci-info me-2"></i>
                  You will lose the 100 bonus points earned from this review.
                </div>
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary"
                  onClick={() => setShowDeleteConfirm(false)}
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button 
                  type="button" 
                  className="btn btn-danger"
                  onClick={handleDelete}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner-grow spinner-grow-sm me-2" role="status" aria-hidden="true"></span>
                      Deleting...
                    </>
                  ) : (
                    <>
                      <i className="ci-trash me-1"></i>
                      Delete Review
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReviewDetails;