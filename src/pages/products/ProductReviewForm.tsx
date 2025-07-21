// import React from 'react';

// const ProductReviewForm = () => {
//     return (
//         <div>
//             <div className="modal fade" id="reviewForm" data-bs-backdrop="static" tabIndex={-1} aria-labelledby="reviewFormLabel" aria-hidden="true">
//                 <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
//                     <form className="modal-content needs-validation" noValidate>
//                         <div className="modal-header border-0">
//                             <h5 className="modal-title" id="reviewFormLabel">Leave a review</h5>
//                             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                         </div>
//                         <div className="modal-body pb-3 pt-0">
//                             <div className="mb-3">
//                                 <label htmlFor="review-name" className="form-label">Your name <span className="text-danger">*</span></label>
//                                 <input type="text" className="form-control" id="review-name" required />
//                                 <div className="invalid-feedback">Please enter your name!</div>
//                                 <small className="form-text">Will be displayed on the comment.</small>
//                             </div>
//                             <div className="mb-3">
//                                 <label htmlFor="review-email" className="form-label">Your email <span className="text-danger">*</span></label>
//                                 <input type="email" className="form-control" id="review-email" required />
//                                 <div className="invalid-feedback">Please provide a valid email address!</div>
//                                 <small className="form-text">Authentication only - we won't spam you.</small>
//                             </div>
//                             <div className="mb-3">
//                                 <label className="form-label">Rating <span className="text-danger">*</span></label>
//                                 <select className="form-select" id="review-rating" required>
//                                     <option value="">Choose a rating...</option>
//                                     <option value="1">1</option>
//                                     <option value="2">2</option>
//                                     <option value="3">3</option>
//                                     <option value="4">4</option>
//                                     <option value="5">5</option>
//                                 </select>
//                                 <div className="invalid-feedback">Please choose your rating!</div>
//                             </div>
//                             <div className="mb-3">
//                                 <label htmlFor="review-text" className="form-label">Review <span className="text-danger">*</span></label>
//                                 <textarea className="form-control" rows="4" id="review-text" required></textarea>
//                                 <div className="invalid-feedback">Please write a review!</div>
//                                 <small className="form-text">Your review must be at least 50 characters.</small>
//                             </div>
//                             <div className="mb-3">
//                                 <div className="form-check form-check-inline">
//                                 <input type="radio" className="form-check-input" id="yes" name="recommend" defaultChecked />
//                                 <label htmlFor="yes" className="form-check-label">Yes, I recommend</label>
//                                 </div>
//                                 <div className="form-check form-check-inline">
//                                 <input type="radio" className="form-check-input" id="no" name="recommend" />
//                                 <label htmlFor="no" className="form-check-label">No, I don't recommend</label>
//                                 </div>
//                             </div>
 
//                         </div>
//                         <div className="modal-footer flex-nowrap gap-3 border-0 px-4">
//                             <button type="reset" className="btn btn-secondary w-100 m-0" data-bs-dismiss="modal">Cancel</button>
//                             <button type="submit" className="btn btn-dark w-100 m-0">Submit review</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductReviewForm;

// 

// src/components/products/ProductReviewForm.tsx
// import React, { useState } from 'react';
// import { ReviewAxiosService } from '../../services/net/ReviewAxiosService';
// // import { useNotification } from '../common/NotificationContext';

// interface ProductReviewFormProps {
//   productSlug: string;
//   onSuccess: () => void;
// }

// const ProductReviewForm: React.FC<ProductReviewFormProps> = ({ productSlug, onSuccess }) => {
//   const [formState, setFormState] = useState({
//     rating: 0,
//     .comment: '',
//     recommend: true,
//     isSubmitting: false
//   });
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const { showNotification } = useNotification();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setErrors({});
//     setFormState(prev => ({ ...prev, isSubmitting: true }));

//     try {
//       await ReviewAxiosService.createComment(productSlug, {
//         .comment: formState.comment,
//         rating: formState.rating,
//         recommend: formState.recommend
//       });

//       showNotification({
//         type: 'success',
//         message: 'Review submitted successfully!',
//         duration: 3000
//       });
      
//       onSuccess();
//       (document.getElementById('reviewForm') as HTMLFormElement)?.reset();
//     } catch (error) {
//       if (error.response?.data?.errors) {
//         setErrors(error.response.data.errors);
//       } else {
//         showNotification({
//           type: 'error',
//           message: error.response?.data?.message || 'Failed to submit review',
//           duration: 5000
//         });
//       }
//     } finally {
//       setFormState(prev => ({ ...prev, isSubmitting: false }));
//     }
//   };

//   return (
//     <div className="modal fade" id="reviewForm">
//       {/* Modal structure remains similar, update form controls */}
//       <form onSubmit={handleSubmit}>
//         {/* Rating Input */}
//         <div className="mb-3">
//           <label className="form-label">Rating</label>
//           <select
//             className={`form-select ${errors.rating ? 'is-invalid' : ''}`}
//             value={formState.rating}
//             onChange={e => setFormState(prev => ({
//               ...prev,
//               rating: parseInt(e.target.value)
//             }))}
//             required
//           >
//             <option value={0}>Select rating...</option>
//             {[5, 4, 3, 2, 1].map(num => (
//               <option key={num} value={num}>{num} Stars</option>
//             ))}
//           </select>
//           {errors.rating && (
//             <div className="invalid-feedback">{errors.rating}</div>
//           )}
//         </div>

//         {/* Recommendation */}
//         <div className="mb-3">
//           <label className="form-label">Recommendation</label>
//           <div className="btn-group" role="group">
//             <button
//               type="button"
//               className={`btn ${formState.recommend ? 'btn-primary' : 'btn-outline-primary'}`}
//               onClick={() => setFormState(prev => ({ ...prev, recommend: true }))}
//             >
//               Yes
//             </button>
//             <button
//               type="button"
//               className={`btn ${!formState.recommend ? 'btn-primary' : 'btn-outline-primary'}`}
//               onClick={() => setFormState(prev => ({ ...prev, recommend: false }))}
//             >
//               No
//             </button>
//           </div>
//         </div>

//         {/* Submit Button */}
//         <button 
//           type="submit" 
//           className="btn btn-primary"
//           disabled={formState.isSubmitting}
//         >
//           {formState.isSubmitting ? (
//             <>
//               <span className="spinner-border spinner-border-sm me-2"></span>
//               Submitting...
//             </>
//           ) : 'Submit Review'}
//         </button>
//       </form>
//     </div>
//   );
// };


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

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setValidationErrors({});

//     try {
//       const response = await ReviewAxiosService.createComment(
//         productSlug, {
//         .comment: formData.comment,
//         rating: parseInt(formData.rating),
//         recommend: formData.recommend === 'true'
//       });
//       console.log(JSON.stringify(response))
//       setResponseModal({
//         show: true,
//         message: response?.data?.message || 'Review submitted successfully!',
//         success: true
//       });

//       onReviewSubmitted();
//       (document.getElementById('reviewForm') as HTMLFormElement)?.reset();
//       setTimeout(() => {
//         (window as any).bootstrap.Modal.getInstance(document.getElementById('reviewForm')).hide();
//       }, 1500);
//     } catch (error) {
//         // console.log(error)
//         // console.log(JSON.stringify(error))
//       if (error.response?.data?.errors) {
//         setValidationErrors(error.response.data.errors);
//       } else {
//         setResponseModal({
//           show: true,
//           message: error.response?.data?.message || 'Failed to submit review',
//           success: false
//         });
//       }
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

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
        // setResponseModal({
        //     show: true,
        //     message: response?.data?.message || 'Review submitted successfully!',
        //     success: true
        // });


        // Trigger any additional actions after submission
        // onReviewSubmitted();

        // // Reset the form
        // (document.getElementById('reviewForm') as HTMLFormElement)?.reset();

        // // Hide the modal after a delay
        // setTimeout(() => {
        //     (window as any).bootstrap.Modal.getInstance(document.getElementById('reviewForm')).hide();
        // }, 1500);

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
        // const form = document.getElementById('reviewForm');
        // if (form instanceof HTMLFormElement) {
        //     form.reset();
        //  }
      
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
