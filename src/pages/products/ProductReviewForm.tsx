
import React, { useState } from 'react';
import ReviewAxiosService from '../../services/net/ReviewsAxiosService';
import ResponseModal from '../../components/shared/modals/ResponseModal';

interface ProductReviewFormProps {
  productSlug: string;
  onReviewSubmitted: () => void;
}

interface FormData {
  rating: string;
  comment: string;
  recommend: string;
}

const ProductReviewForm: React.FC<ProductReviewFormProps> = ({ productSlug, onReviewSubmitted }) => {

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

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setValidationErrors({}); // Reset validation errors

    try {
        // Prepare the comment data
        const response = await ReviewAxiosService.createReview(productSlug, {
            comment: formData.comment,
            rating: parseInt(formData.rating),
            recommend: formData.recommend === 'true'
        });

        // Show success message

        if (response.data.success) {
            // Handle array messages
            const successMessage = Array.isArray(response.data.message)
              ? response.data.message[0]
              : response.data.message;
      
            setResponseModal({  
              show: true,
              message: successMessage || 'Product published successfully! Redirecting...',
              success: true
            });

            
        // Trigger any additional actions after submission
        onReviewSubmitted();

        // // Reset the form
        (document.getElementById('reviewFormTag') as HTMLFormElement)?.reset();
      
            setTimeout(() => {
              (window as any).bootstrap.Modal.getInstance(document.getElementById('reviewForm')).hide();
            }, 1500);
          } else {

            // Handle array errors
            const errorMessage = Array.isArray(response.data.error)
              ? response.data.error[0]
              : response.data.error || response.data.message;
      
            throw new Error(errorMessage || 'Submission failed');
          }

    } catch (error) {
        console.log(error)
        // Extract error message from different error formats
          const errorMessage = (
            error?.response?.data?.error ||
            error?.response?.data?.message ||
            error?.message ||
            'Failed to publish product. Please try again.'
          );
          
          // Handle array error messages
          const displayMessage = Array.isArray(errorMessage)
            ? errorMessage[0]
            : errorMessage;
      
          setResponseModal({
            show: true,
            message: displayMessage,
            success: false
          });

    } finally {
        setIsSubmitting(false); // Reset the submitting state
    }
};

  return (
    <div className="modal fade" id="reviewForm" data-bs-backdrop="static" tabIndex={-1}>
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <form id="reviewFormTag" className="modal-content" onSubmit={handleSubmit}>
          <div className="modal-header border-0">
            <h5 className="modal-title">Leave a review</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body pb-3 pt-0">
            <div className="mb-3">
              <label className="form-label">Rating <span className="text-danger">*</span></label>
              <select
                className={`form-select ${validationErrors.rating ? 'is-invalid' : ''}`}
                value={formData.rating}
                onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                required
              >
                <option value="">Choose a rating...</option>
                {[5, 4, 3, 2, 1].map((num) => (
                  <option key={num} value={num}>{num} Stars</option>
                ))}
              </select>
              {validationErrors.rating && (
                <div className="invalid-feedback">{validationErrors.rating}</div>
              )}
            </div>
            
            <div className="mb-3">
              <label className="form-label">Review <span className="text-danger">*</span></label>
              <textarea
                className={`form-control ${validationErrors.comment ? 'is-invalid' : ''}`}
                rows={4}
                value={formData.comment}
                onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                minLength={50}
                maxLength={1000}
                required
              ></textarea>
              {validationErrors.comment && (
                <div className="invalid-feedback">{validationErrors.comment}</div>
              )}
              <small className="form-text">Your review must be at least 50 characters</small>
            </div>

            <div className="mb-3">
              <label className="form-label">Would you recommend this product?</label>
              <div className="d-flex gap-3">
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="recommend-yes"
                    name="recommend"
                    value="true"
                    checked={formData.recommend === 'true'}
                    onChange={(e) => setFormData({ ...formData, recommend: e.target.value })}
                  />
                  <label className="form-check-label" htmlFor="recommend-yes">Yes</label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="recommend-no"
                    name="recommend"
                    value="false"
                    checked={formData.recommend === 'false'}
                    onChange={(e) => setFormData({ ...formData, recommend: e.target.value })}
                  />
                  <label className="form-check-label" htmlFor="recommend-no">No</label>
                </div>
              </div>
            </div>
            {/*  */}
        <ResponseModal
            show={responseModal.show}
            message={responseModal.message}
            success={responseModal.success}
            onClose={() => setResponseModal(prev => ({ ...prev, show: false }))}
        />
          </div>

          <div className="modal-footer flex-nowrap gap-3 border-0">
            <button
              type="button"
              className="btn btn-secondary w-100 rounded-pill"
              data-bs-dismiss="modal"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-dark w- rounded-pill"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div style={{height:'8px', width:'8px'}} className="spinner-border spinner-border-sm" role="status">
                  <span className="visually-hidden">Submitting...</span>
                </div>
              ) : (
                'Submit Review'
              )}
            </button>
          </div>
        </form>
      </div>

      
    </div>
  );
};

export default ProductReviewForm;
