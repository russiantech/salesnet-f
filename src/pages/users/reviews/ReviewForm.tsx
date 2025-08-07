// import React from 'react'

// const ReviewForm = () => {
//   return (
//     <>
//       <div className="modal fade" id="reviewForm" data-bs-backdrop="static" tabIndex={-1} aria-labelledby="reviewFormLabel" aria-hidden="true">
//           <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
//             <form className="modal-content needs-validation" noValidate>
//               <div className="modal-header d-block pb-3">
//                 <div className="d-flex align-items-center mb-3">
//                   <h5 className="modal-title" id="reviewFormLabel">Leave a review for:</h5>
//                   <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
//                 </div>
//                 <div className="d-flex align-items-center">
//                   <a className="flex-shrink-0" href="shop-product-general-electronics.html">
//                     <img src="/assets/img/shop/electronics/thumbs/10.png" width={110} alt="MacBook" />
//                   </a>
//                   <div className="w-100 min-w-0 ps-2 ps-sm-3">
//                     <h5 className="d-flex animate-underline mb-2">
//                       <a className="d-block fs-sm fw-medium text-truncate animate-target" href="shop-product-general-electronics.html">Apple iPhone 14 Plus 128GB Blue</a>
//                     </h5>
//                     <div className="h6 mb-0">$940.00</div>
//                   </div>
//                 </div>
//               </div>
//               <div className="modal-body pb-3">
//                 <div className="mb-3">
//                   <label htmlFor="review-name" className="form-label">Your name</label>
//                   <input type="text" className="form-control" id="review-name" defaultValue="Susan Gardner" readOnly />
//                   <div className="invalid-feedback">Please enter your name!</div>
//                   <small className="form-text">Will be displayed on the comment.</small>
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label">Rating <span className="text-danger">*</span></label>
//                   <select className="form-select" data-select="{
//                     &quot;placeholderValue&quot;: &quot;Choose rating&quot;,
//                     &quot;choices&quot;: [
//                       {
//                         &quot;value&quot;: &quot;&quot;,
//                         &quot;label&quot;: &quot;Choose rating&quot;,
//                         &quot;placeholder&quot;: true
//                       },
//                       {
//                         &quot;value&quot;: &quot;1&quot;,
//                         &quot;label&quot;: &quot;<span class=\&quot;visually-hidden\&quot;>1 star</span>&quot;,
//                         &quot;customProperties&quot;: {
//                           &quot;icon&quot;: &quot;<span class=\&quot;d-flex gap-1 py-1\&quot;><i class=\&quot;ci-star-filled text-warning\&quot;></i></span>&quot;,
//                           &quot;selected&quot;: &quot;1 star&quot;
//                         }
//                       },
//                       {
//                         &quot;value&quot;: &quot;2&quot;,
//                         &quot;label&quot;: &quot;<span class=\&quot;visually-hidden\&quot;>2 stars</span>&quot;,
//                         &quot;customProperties&quot;: {
//                           &quot;icon&quot;: &quot;<span class=\&quot;d-flex gap-1 py-1\&quot;><i class=\&quot;ci-star-filled text-warning\&quot;></i><i class=\&quot;ci-star-filled text-warning\&quot;></i></span>&quot;,
//                           &quot;selected&quot;: &quot;2 stars&quot;
//                         }
//                       },
//                       {
//                         &quot;value&quot;: &quot;3&quot;,
//                         &quot;label&quot;: &quot;<span class=\&quot;visually-hidden\&quot;>3 stars</span>&quot;,
//                         &quot;customProperties&quot;: {
//                           &quot;icon&quot;: &quot;<span class=\&quot;d-flex gap-1 py-1\&quot;><i class=\&quot;ci-star-filled text-warning\&quot;></i><i class=\&quot;ci-star-filled text-warning\&quot;></i><i class=\&quot;ci-star-filled text-warning\&quot;></i></span>&quot;,
//                           &quot;selected&quot;: &quot;3 stars&quot;
//                         }
//                       },
//                       {
//                         &quot;value&quot;: &quot;4&quot;,
//                         &quot;label&quot;: &quot;<span class=\&quot;visually-hidden\&quot;>4 stars</span>&quot;,
//                         &quot;customProperties&quot;: {
//                           &quot;icon&quot;: &quot;<span class=\&quot;d-flex gap-1 py-1\&quot;><i class=\&quot;ci-star-filled text-warning\&quot;></i><i class=\&quot;ci-star-filled text-warning\&quot;></i><i class=\&quot;ci-star-filled text-warning\&quot;></i><i class=\&quot;ci-star-filled text-warning\&quot;></i></span>&quot;,
//                           &quot;selected&quot;: &quot;4 stars&quot;
//                         }
//                       },
//                       {
//                         &quot;value&quot;: &quot;5&quot;,
//                         &quot;label&quot;: &quot;<span class=\&quot;visually-hidden\&quot;>5 stars</span>&quot;,
//                         &quot;customProperties&quot;: {
//                           &quot;icon&quot;: &quot;<span class=\&quot;d-flex gap-1 py-1\&quot;><i class=\&quot;ci-star-filled text-warning\&quot;></i><i class=\&quot;ci-star-filled text-warning\&quot;></i><i class=\&quot;ci-star-filled text-warning\&quot;></i><i class=\&quot;ci-star-filled text-warning\&quot;></i><i class=\&quot;ci-star-filled text-warning\&quot;></i></span>&quot;,
//                           &quot;selected&quot;: &quot;5 stars&quot;
//                         }
//                       }
//                     ]
//                   }" data-select-template="true" required />
//                   <div className="invalid-feedback">Please choose your rating!</div>
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label" htmlFor="review-text">Review <span className="text-danger">*</span></label>
//                   <textarea className="form-control" rows={4} id="review-text" required defaultValue={""} />
//                   <div className="invalid-feedback">Please write a review!</div>
//                   <small className="form-text">Your review must be at least 50 characters.</small>
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label">Pros</label>
//                   <input type="text" className="form-select" data-select="{&quot;placeholderValue&quot;: &quot;Type and hit \&quot;Enter\&quot;&quot;}" />
//                 </div>
//                 <div>
//                   <label className="form-label">Cons</label>
//                   <input type="text" className="form-select" data-select="{&quot;placeholderValue&quot;: &quot;Type and hit \&quot;Enter\&quot;&quot;}" />
//                 </div>
//               </div>
//               <div className="modal-footer flex-nowrap gap-3 border-0 px-4">
//                 <button type="reset" className="btn btn-secondary w-100 m-0" data-bs-dismiss="modal">Cancel</button>
//                 <button type="submit" className="btn btn-primary w-100 m-0">Submit review</button>
//               </div>
//             </form>
//           </div>
//         </div>
//     </>
//   )
// }

// export default ReviewForm

// v2
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReviewAxiosService from '../../../services/net/ReviewsAxiosService';
import ResponseModal from '../../../components/shared/modals/ResponseModal';
// import { ReviewAxiosService } from '../../services/net/ReviewsAxiosService';
// import ResponseModal from '../../components/shared/modals/ResponseModal';

interface Product {
  id: number;
  name: string;
  slug: string;
  price: string;
  image_urls: string[];
}

interface ReviewFormProps {
  product: Product | null;
  onReviewSubmitted: () => void;
}

interface FormData {
  rating: string;
  comment: string;
  recommend: string;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ product, onReviewSubmitted }) => {
  const [formData, setFormData] = useState<FormData>({
    rating: '',
    comment: '',
    recommend: 'true'
  });
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [responseModal, setResponseModal] = useState({
    show: false,
    message: '',
    success: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reset form when product changes
  useEffect(() => {
    if (product) {
      setFormData({
        rating: '',
        comment: '',
        recommend: 'true'
      });
      setValidationErrors({});
    }
  }, [product]);

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};

    if (!formData.rating) {
      errors.rating = 'Please select a rating';
    }

    if (!formData.comment.trim()) {
      errors.comment = 'Please write a review';
    } else if (formData.comment.trim().length < 10) {
      errors.comment = 'Review must be at least 10 characters long';
    } else if (formData.comment.trim().length > 1000) {
      errors.comment = 'Review must not exceed 1000 characters';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!product) {
      console.error('No product selected for review');
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await ReviewAxiosService.createReview(product.slug, {
        comment: formData.comment.trim(),
        rating: parseInt(formData.rating),
        recommend: formData.recommend === 'true'
      });

      if (response.data.success) {
        const successMessage = Array.isArray(response.data.message)
          ? response.data.message[0]
          : response.data.message;

        setResponseModal({
          show: true,
          message: successMessage || 'Review submitted successfully!',
          success: true
        });

        // Reset form
        setFormData({
          rating: '',
          comment: '',
          recommend: 'true'
        });
        setValidationErrors({});

        // Trigger callback
        onReviewSubmitted();

        // Close modal after success
        setTimeout(() => {
          const modalElement = document.getElementById('reviewForm');
          if (modalElement) {
            const modal = (window as any).bootstrap.Modal.getInstance(modalElement);
            if (modal) {
              modal.hide();
            }
          }
        }, 1500);
      } else {
        const errorMessage = Array.isArray(response.data.error)
          ? response.data.error[0]
          : response.data.error || response.data.message;

        throw new Error(errorMessage || 'Submission failed');
      }
    } catch (error: any) {
      console.error('Error submitting review:', error);
      
      const errorMessage = (
        error?.response?.data?.error ||
        error?.response?.data?.message ||
        error?.message ||
        'Failed to submit review. Please try again.'
      );
      
      const displayMessage = Array.isArray(errorMessage)
        ? errorMessage[0]
        : errorMessage;

      setResponseModal({
        show: true,
        message: displayMessage,
        success: false
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear validation error when user starts typing
    if (validationErrors[field]) {
      setValidationErrors(prev => ({ ...prev, [field]: '' }));
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

  if (!product) {
    return (
      <div className="modal fade" id="reviewForm" data-bs-backdrop="static" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header d-block pb-3">
              <div className="d-flex align-items-center">
                <h5 className="modal-title">Leave a review</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
            </div>
            <div className="modal-body text-center py-5">
              <i className="ci-comment display-4 text-body-tertiary mb-3"></i>
              <p className="text-body-secondary">No product selected for review</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="modal fade" id="reviewForm" data-bs-backdrop="static" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <form className="modal-content" onSubmit={handleSubmit}>
            <div className="modal-header d-block pb-3">
              <div className="d-flex align-items-center mb-3">
                <h5 className="modal-title">Leave a review for:</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="d-flex align-items-center">
                <Link className="flex-shrink-0" to={`/products/${product.slug}`}>
                  <img src={product?.image_url || '/assets/img/placeholder.jpg'}
                    // src={product.image_urls?.[0] || '/assets/img/placeholder.jpg'}
                    className='rounded'
                    width={110}
                    alt={product.name}
                    onError={(e) => {
                      e.currentTarget.src = '/assets/img/placeholder.png';
                    }}
                  />
                </Link>
                <div className="w-100 min-w-0 ps-2 ps-sm-3">
                  <h5 className="d-flex animate-underline mb-2">
                    <Link
                      className="d-block fs-sm fw-medium text-truncate animate-target"
                      to={`/products/${product.slug}`}
                    >
                      {product.name}
                    </Link>
                  </h5>
                  <div className="h6 mb-0">₦{product.price}</div>
                </div>
              </div>
            </div>
            
            <div className="modal-body pb-3">
              {/* Rating */}
              <div className="mb-3">
                <label className="form-label">
                  Rating <span className="text-danger">*</span>
                </label>
                <select
                  className={`form-select ${validationErrors.rating ? 'is-invalid' : ''}`}
                  value={formData.rating}
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
                <label className="form-label" htmlFor="review-text">
                  Review <span className="text-danger">*</span>
                </label>
                <textarea
                  className={`form-control ${validationErrors.comment ? 'is-invalid' : ''}`}
                  rows={4}
                  id="review-text"
                  value={formData.comment}
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
                  {formData.comment.length}/1000 characters (minimum 10 required)
                </small>
              </div>

              {/* Recommendation */}
              <div className="mb-3">
                <label className="form-label">
                  Would you recommend this product? <span className="text-danger">*</span>
                </label>
                <div className="btn-group w-100" role="group">
                  <input
                    type="radio"
                    className="btn-check"
                    name="recommend"
                    id="recommend-yes"
                    checked={formData.recommend === 'true'}
                    onChange={() => handleInputChange('recommend', 'true')}
                  />
                  <label className="btn btn-outline-success" htmlFor="recommend-yes">
                    <i className="ci-check-circle me-2"></i>Yes
                  </label>

                  <input
                    type="radio"
                    className="btn-check"
                    name="recommend"
                    id="recommend-no"
                    checked={formData.recommend === 'false'}
                    onChange={() => handleInputChange('recommend', 'false')}
                  />
                  <label className="btn btn-outline-danger" htmlFor="recommend-no">
                    <i className="ci-close-circle me-2"></i>No
                  </label>
                </div>
              </div>
            </div>

            <div className="modal-footer flex-nowrap gap-3 border-0 px-4">
              <button
                type="button"
                className="btn btn-secondary w-100 m-0"
                data-bs-dismiss="modal"
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary w-100 m-0"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Submitting...
                  </>
                ) : (
                  'Submit review'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      <ResponseModal
        show={responseModal.show}
        message={responseModal.message}
        success={responseModal.success}
        onHide={() => setResponseModal(prev => ({ ...prev, show: false }))}
      />
    </>
  );
};

export default ReviewForm;