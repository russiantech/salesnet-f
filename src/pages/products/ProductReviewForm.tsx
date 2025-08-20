
// import React, { useState } from 'react';
// import ReviewAxiosService from '../../services/net/ReviewsAxiosService';
// import ResponseModal from '../../components/shared/modals/ResponseModal';

// interface ProductReviewFormProps {
//   productSlug: string;
//   onReviewSubmitted: () => void;
// }

// interface FormData {
//   rating: string;
//   comment: string;
//   recommend: string;
// }

// const ProductReviewForm: React.FC<ProductReviewFormProps> = ({ productSlug, onReviewSubmitted }) => {

//     const [formData, setFormData] = useState<FormData>({
//     rating: '',
//     comment: '',
//     recommend: 'true'
//   });
//   const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
//   const [responseModal, setResponseModal] = useState({
//     show: false,
//     message: '',
//     success: false
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

// const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setValidationErrors({}); // Reset validation errors

//     try {
//         // Prepare the comment data
//         const response = await ReviewAxiosService.createReview(productSlug, {
//             comment: formData.comment,
//             rating: parseInt(formData.rating),
//             recommend: formData.recommend === 'true'
//         });

//         // Show success message

//         if (response.data.success) {
//             // Handle array messages
//             const successMessage = Array.isArray(response.data.message)
//               ? response.data.message[0]
//               : response.data.message;
      
//             setResponseModal({  
//               show: true,
//               message: successMessage || 'Product published successfully! Redirecting...',
//               success: true
//             });

            
//         // Trigger any additional actions after submission
//         onReviewSubmitted();

//         // // Reset the form
//         (document.getElementById('reviewFormTag') as HTMLFormElement)?.reset();
      
//             setTimeout(() => {
//               (window as any).bootstrap.Modal.getInstance(document.getElementById('reviewForm')).hide();
//             }, 1500);
//           } else {

//             // Handle array errors
//             const errorMessage = Array.isArray(response.data.error)
//               ? response.data.error[0]
//               : response.data.error || response.data.message;
      
//             throw new Error(errorMessage || 'Submission failed');
//           }

//     } catch (error) {
//         console.log(error)
//         // Extract error message from different error formats
//           const errorMessage = (
//             error?.response?.data?.error ||
//             error?.response?.data?.message ||
//             error?.message ||
//             'Failed to publish product. Please try again.'
//           );
          
//           // Handle array error messages
//           const displayMessage = Array.isArray(errorMessage)
//             ? errorMessage[0]
//             : errorMessage;
      
//           setResponseModal({
//             show: true,
//             message: displayMessage,
//             success: false
//           });

//     } finally {
//         setIsSubmitting(false); // Reset the submitting state
//     }
// };

//   return (
//     <div className="modal fade" id="reviewForm" data-bs-backdrop="static" tabIndex={-1}>
//       <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
//         <form id="reviewFormTag" className="modal-content" onSubmit={handleSubmit}>
//           <div className="modal-header border-0">
//             <h5 className="modal-title">Leave a review</h5>
//             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//           </div>
//           <div className="modal-body pb-3 pt-0">
//             <div className="mb-3">
//               <label className="form-label">Rating <span className="text-danger">*</span></label>
//               <select
//                 className={`form-select ${validationErrors.rating ? 'is-invalid' : ''}`}
//                 value={formData.rating}
//                 onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
//                 required
//               >
//                 <option value="">Choose a rating...</option>
//                 {[5, 4, 3, 2, 1].map((num) => (
//                   <option key={num} value={num}>{num} Stars</option>
//                 ))}
//               </select>
//               {validationErrors.rating && (
//                 <div className="invalid-feedback">{validationErrors.rating}</div>
//               )}
//             </div>
            
//             <div className="mb-3">
//               <label className="form-label">Review <span className="text-danger">*</span></label>
//               <textarea
//                 className={`form-control ${validationErrors.comment ? 'is-invalid' : ''}`}
//                 rows={4}
//                 value={formData.comment}
//                 onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
//                 minLength={50}
//                 maxLength={1000}
//                 required
//               ></textarea>
//               {validationErrors.comment && (
//                 <div className="invalid-feedback">{validationErrors.comment}</div>
//               )}
//               <small className="form-text">Your review must be at least 50 characters</small>
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Would you recommend this product?</label>
//               <div className="d-flex gap-3">
//                 <div className="form-check">
//                   <input
//                     type="radio"
//                     className="form-check-input"
//                     id="recommend-yes"
//                     name="recommend"
//                     value="true"
//                     checked={formData.recommend === 'true'}
//                     onChange={(e) => setFormData({ ...formData, recommend: e.target.value })}
//                   />
//                   <label className="form-check-label" htmlFor="recommend-yes">Yes</label>
//                 </div>
//                 <div className="form-check">
//                   <input
//                     type="radio"
//                     className="form-check-input"
//                     id="recommend-no"
//                     name="recommend"
//                     value="false"
//                     checked={formData.recommend === 'false'}
//                     onChange={(e) => setFormData({ ...formData, recommend: e.target.value })}
//                   />
//                   <label className="form-check-label" htmlFor="recommend-no">No</label>
//                 </div>
//               </div>
//             </div>
//             {/*  */}
//         <ResponseModal
//             show={responseModal.show}
//             message={responseModal.message}
//             success={responseModal.success}
//             onClose={() => setResponseModal(prev => ({ ...prev, show: false }))}
//         />
//           </div>

//           <div className="modal-footer flex-nowrap gap-3 border-0">
//             <button
//               type="button"
//               className="btn btn-secondary w-100 rounded-pill"
//               data-bs-dismiss="modal"
//               disabled={isSubmitting}
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="btn btn-dark w- rounded-pill"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? (
//                 <div style={{height:'8px', width:'8px'}} className="spinner-border spinner-border-sm" role="status">
//                   <span className="visually-hidden">Submitting...</span>
//                 </div>
//               ) : (
//                 'Submit Review'
//               )}
//             </button>
//           </div>
//         </form>
//       </div>

      
//     </div>
//   );
// };

// export default ProductReviewForm;

// // v2
// import React, { useState } from 'react';
// import { NotificationService } from '../../services/local/NotificationService';
// import ReviewAxiosService from '../../services/net/ReviewsAxiosService';
// // import ReviewAxiosService from '../../services/net/ReviewsAxiosService';
// // import NotificationService from '../../services/shared/NotificationService';

// interface ProductReviewFormProps {
//   productSlug: string;
//   onReviewSubmitted: () => void;
// }

// interface FormData {
//   rating: string;
//   comment: string;
//   recommend: string;
// }

// const ProductReviewForm: React.FC<ProductReviewFormProps> = ({ 
//   productSlug, 
//   onReviewSubmitted 
// }) => {
//   const [formData, setFormData] = useState<FormData>({
//     rating: '',
//     comment: '',
//     recommend: 'true'
//   });
//   const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const resetForm = () => {
//     setFormData({
//       rating: '',
//       comment: '',
//       recommend: 'true'
//     });
//     setValidationErrors({});
    
//     const formElement = document.getElementById('reviewFormTag') as HTMLFormElement;
//     formElement?.reset();
//   };

//   const closeModal = () => {
//     const modalElement = document.getElementById('reviewForm');
//     const modalInstance = (window as any).bootstrap?.Modal?.getInstance(modalElement);
//     modalInstance?.hide();
//   };

//   const validateForm = (): boolean => {
//     const errors: Record<string, string> = {};
    
//     if (!formData.rating) {
//       errors.rating = 'Please select a rating';
//     }
    
//     if (!formData.comment.trim()) {
//       errors.comment = 'Please enter a review comment';
//     } else if (formData.comment.trim().length < 50) {
//       errors.comment = 'Review must be at least 50 characters long';
//     } else if (formData.comment.trim().length > 1000) {
//       errors.comment = 'Review must not exceed 1000 characters';
//     }

//     setValidationErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (!validateForm()) {
//       return;
//     }

//     setIsSubmitting(true);
//     setValidationErrors({});

//     try {
//       const reviewData = {
//         comment: formData.comment.trim(),
//         rating: parseInt(formData.rating, 10),
//         recommend: formData.recommend === 'true'
//       };

//       const response = await ReviewAxiosService.createReview(productSlug, reviewData);

//       if (response.data.success) {
//         const successMessage = Array.isArray(response.data.message)
//           ? response.data.message[0]
//           : response.data.message || 'Review submitted successfully!';

//         NotificationService.showDialog(successMessage, 'success');
        
//         // Reset form and trigger callback
//         resetForm();
//         onReviewSubmitted();

//         // Close modal after a short delay
//         setTimeout(() => {
//           closeModal();
//         }, 1500);
//       } else {
//         const errorMessage = Array.isArray(response.data.error)
//           ? response.data.error[0]
//           : response.data.error || response.data.message || 'Failed to submit review';

//         throw new Error(errorMessage);
//       }
//     } catch (error: any) {
//       console.error('Error submitting review:', error);
      
//       const errorMessage = 
//         error?.response?.data?.error ||
//         error?.response?.data?.message ||
//         error?.message ||
//         'Failed to submit review. Please try again.';

//       const displayMessage = Array.isArray(errorMessage)
//         ? errorMessage[0]
//         : errorMessage;

//       NotificationService.showDialog(displayMessage, 'error');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleInputChange = (field: keyof FormData, value: string) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
    
//     // Clear validation error when user starts typing
//     if (validationErrors[field]) {
//       setValidationErrors(prev => {
//         const newErrors = { ...prev };
//         delete newErrors[field];
//         return newErrors;
//       });
//     }
//   };

//   return (
//     <div className="modal fade" id="reviewForm" data-bs-backdrop="static" tabIndex={-1}>
//       <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
//         <form id="reviewFormTag" className="modal-content" onSubmit={handleSubmit}>
//           <div className="modal-header border-0">
//             <h5 className="modal-title">Leave a Review</h5>
//             <button 
//               type="button" 
//               className="btn-close" 
//               data-bs-dismiss="modal" 
//               aria-label="Close"
//               disabled={isSubmitting}
//             />
//           </div>
          
//           <div className="modal-body pb-3 pt-0">
//             {/* Rating Selection */}
//             <div className="mb-3">
//               <label className="form-label">
//                 Rating <span className="text-danger">*</span>
//               </label>
//               <select
//                 className={`form-select ${validationErrors.rating ? 'is-invalid' : ''}`}
//                 value={formData.rating}
//                 onChange={(e) => handleInputChange('rating', e.target.value)}
//                 disabled={isSubmitting}
//                 required
//                 aria-describedby="rating-error"
//               >
//                 <option value="">Choose a rating...</option>
//                 {[5, 4, 3, 2, 1].map((num) => (
//                   <option key={num} value={num}>
//                     {num} Star{num !== 1 ? 's' : ''}
//                   </option>
//                 ))}
//               </select>
//               {validationErrors.rating && (
//                 <div id="rating-error" className="invalid-feedback">
//                   {validationErrors.rating}
//                 </div>
//               )}
//             </div>
            
//             {/* Review Comment */}
//             <div className="mb-3">
//               <label className="form-label">
//                 Review <span className="text-danger">*</span>
//               </label>
//               <textarea
//                 className={`form-control ${validationErrors.comment ? 'is-invalid' : ''}`}
//                 rows={4}
//                 value={formData.comment}
//                 onChange={(e) => handleInputChange('comment', e.target.value)}
//                 minLength={3}
//                 maxLength={1000}
//                 disabled={isSubmitting}
//                 placeholder="Share your experience with this product..."
//                 required
//                 aria-describedby="comment-error comment-help"
//               />
//               {validationErrors.comment && (
//                 <div id="comment-error" className="invalid-feedback">
//                   {validationErrors.comment}
//                 </div>
//               )}
//               <div id="comment-help" className="form-text">
//                 Your review must be between 50-1000 characters ({formData.comment.length}/1000)
//               </div>
//             </div>

//             {/* Recommendation */}
//             <div className="mb-3">
//               <fieldset disabled={isSubmitting}>
//                 <legend className="form-label">Would you recommend this product?</legend>
//                 <div className="d-flex gap-3">
//                   <div className="form-check">
//                     <input
//                       type="radio"
//                       className="form-check-input"
//                       id="recommend-yes"
//                       name="recommend"
//                       value="true"
//                       checked={formData.recommend === 'true'}
//                       onChange={(e) => handleInputChange('recommend', e.target.value)}
//                     />
//                     <label className="form-check-label" htmlFor="recommend-yes">
//                       Yes
//                     </label>
//                   </div>
//                   <div className="form-check">
//                     <input
//                       type="radio"
//                       className="form-check-input"
//                       id="recommend-no"
//                       name="recommend"
//                       value="false"
//                       checked={formData.recommend === 'false'}
//                       onChange={(e) => handleInputChange('recommend', e.target.value)}
//                     />
//                     <label className="form-check-label" htmlFor="recommend-no">
//                       No
//                     </label>
//                   </div>
//                 </div>
//               </fieldset>
//             </div>
//           </div>

//           {/* Modal Footer */}
//           <div className="modal-footer flex-nowrap gap-3 border-0">
//             <button
//               type="button"
//               className="btn btn-secondary w-100 rounded-pill"
//               data-bs-dismiss="modal"
//               disabled={isSubmitting}
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="btn btn-dark w-100 rounded-pill"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? (
//                 <>
//                   <div 
//                     style={{ height: '16px', width: '16px' }} 
//                     className="spinner-border spinner-border-sm me-2" 
//                     role="status"
//                     aria-hidden="true"
//                   />
//                   Submitting...
//                 </>
//               ) : (
//                 'Submit Review'
//               )}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ProductReviewForm;

// v3
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

const ProductReviewForm: React.FC<ProductReviewFormProps> = ({ 
  productSlug, 
  onReviewSubmitted 
}) => {
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

  const resetForm = () => {
    setFormData({
      rating: '',
      comment: '',
      recommend: 'true'
    });
    setValidationErrors({});
    
    const formElement = document.getElementById('reviewFormTag') as HTMLFormElement;
    formElement?.reset();
  };

  const closeModal = () => {
    const modalElement = document.getElementById('reviewForm');
    const modalInstance = (window as any).bootstrap?.Modal?.getInstance(modalElement);
    modalInstance?.hide();
  };

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};
    
    if (!formData.rating) {
      errors.rating = 'Please select a rating';
    }
    
    if (!formData.comment.trim()) {
      errors.comment = 'Please enter a review comment';
    } else if (formData.comment.trim().length < 3) {
      errors.comment = 'Review must be at least 3 characters long';
    } else if (formData.comment.trim().length > 1000) {
      errors.comment = 'Review must not exceed 1000 characters';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setValidationErrors({});

    try {
      const reviewData = {
        comment: formData.comment.trim(),
        rating: parseInt(formData.rating, 10),
        recommend: formData.recommend === 'true'
      };

      const response = await ReviewAxiosService.createReview(productSlug, reviewData);

      if (response.data.success) {
        const successMessage = Array.isArray(response.data.message)
          ? response.data.message[0]
          : response.data.message || 'Review submitted successfully!';

        setResponseModal({
          show: true,
          message: successMessage,
          success: true
        });
        
        // Reset form and trigger callback
        resetForm();
        onReviewSubmitted();

        // Close modal after a short delay
        setTimeout(() => {
          closeModal();
        }, 1500);
      } else {
        const errorMessage = Array.isArray(response.data.error)
          ? response.data.error[0]
          : response.data.error || response.data.message || 'Failed to submit review';

        throw new Error(errorMessage);
      }
    } catch (error: any) {
      console.error('Error submitting review:', error);
      
      const errorMessage = 
        error?.response?.data?.error ||
        error?.response?.data?.message ||
        error?.message ||
        'Failed to submit review. Please try again.';

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
      setValidationErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  return (
    <div className="modal fade" id="reviewForm" data-bs-backdrop="static" tabIndex={-1}>
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <form id="reviewFormTag" className="modal-content" onSubmit={handleSubmit}>
          <div className="modal-header border-0">
            <h5 className="modal-title">Leave a Review</h5>
            <button 
              type="button" 
              className="btn-close" 
              data-bs-dismiss="modal" 
              aria-label="Close"
              disabled={isSubmitting}
            />
          </div>
          
          <div className="modal-body pb-3 pt-0">
            {/* Rating Selection */}
            <div className="mb-3">
              <label className="form-label">
                Rating <span className="text-danger">*</span>
              </label>
              <select
                className={`form-select ${validationErrors.rating ? 'is-invalid' : ''}`}
                value={formData.rating}
                onChange={(e) => handleInputChange('rating', e.target.value)}
                disabled={isSubmitting}
                required
                aria-describedby="rating-error"
              >
                <option value="">Choose a rating...</option>
                {[5, 4, 3, 2, 1].map((num) => (
                  <option key={num} value={num}>
                    {num} Star{num !== 1 ? 's' : ''}
                  </option>
                ))}
              </select>
              {validationErrors.rating && (
                <div id="rating-error" className="invalid-feedback">
                  {validationErrors.rating}
                </div>
              )}
            </div>
            
            {/* Review Comment */}
            <div className="mb-3">
              <label className="form-label">
                Review <span className="text-danger">*</span>
              </label>
              <textarea
                className={`form-control ${validationErrors.comment ? 'is-invalid' : ''}`}
                rows={4}
                value={formData.comment}
                onChange={(e) => handleInputChange('comment', e.target.value)}
                minLength={3}
                maxLength={1000}
                disabled={isSubmitting}
                placeholder="Share your experience with this product..."
                required
                aria-describedby="comment-error comment-help"
              />
              {validationErrors.comment && (
                <div id="comment-error" className="invalid-feedback">
                  {validationErrors.comment}
                </div>
              )}
              <div id="comment-help" className="form-text">
                Your review must be at least 3 characters ({formData.comment.length}/1000)
              </div>
            </div>

            {/* Recommendation */}
            <div className="mb-3">
              <fieldset disabled={isSubmitting}>
                <legend className="form-label">Would you recommend this product?</legend>
                <div className="d-flex gap-3">
                  <div className="form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="recommend-yes"
                      name="recommend"
                      value="true"
                      checked={formData.recommend === 'true'}
                      onChange={(e) => handleInputChange('recommend', e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="recommend-yes">
                      Yes
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="recommend-no"
                      name="recommend"
                      value="false"
                      checked={formData.recommend === 'false'}
                      onChange={(e) => handleInputChange('recommend', e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="recommend-no">
                      No
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>

            {/* Response Modal */}
            <ResponseModal
              show={responseModal.show}
              message={responseModal.message}
              success={responseModal.success}
              onClose={() => setResponseModal(prev => ({ ...prev, show: false }))}
            />
          </div>

          {/* Modal Footer */}
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
              className="btn btn-dark w-100 rounded-pill"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div 
                    style={{ height: '16px', width: '16px' }} 
                    className="spinner-border spinner-border-sm me-2" 
                    role="status"
                    aria-hidden="true"
                  />
                  Submitting...
                </>
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