import React from 'react';

const ProductReviewForm = () => {
    return (
        <div>
            <div className="modal fade" id="reviewForm" data-bs-backdrop="static" tabIndex="-1" aria-labelledby="reviewFormLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <form className="modal-content needs-validation" noValidate>
                        <div className="modal-header border-0">
                            <h5 className="modal-title" id="reviewFormLabel">Leave a review</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body pb-3 pt-0">
                            <div className="mb-3">
                                <label htmlFor="review-name" className="form-label">Your name <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" id="review-name" required />
                                <div className="invalid-feedback">Please enter your name!</div>
                                <small className="form-text">Will be displayed on the comment.</small>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="review-email" className="form-label">Your email <span className="text-danger">*</span></label>
                                <input type="email" className="form-control" id="review-email" required />
                                <div className="invalid-feedback">Please provide a valid email address!</div>
                                <small className="form-text">Authentication only - we won't spam you.</small>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Rating <span className="text-danger">*</span></label>
                                <select className="form-select" id="review-rating" required>
                                    <option value="">Choose a rating...</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                <div className="invalid-feedback">Please choose your rating!</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="review-text" className="form-label">Review <span className="text-danger">*</span></label>
                                <textarea className="form-control" rows="4" id="review-text" required></textarea>
                                <div className="invalid-feedback">Please write a review!</div>
                                <small className="form-text">Your review must be at least 50 characters.</small>
                            </div>
                            <div className="mb-3">
                                <div className="form-check form-check-inline">
                                <input type="radio" className="form-check-input" id="yes" name="recommend" defaultChecked />
                                <label htmlFor="yes" className="form-check-label">Yes, I recommend</label>
                                </div>
                                <div className="form-check form-check-inline">
                                <input type="radio" className="form-check-input" id="no" name="recommend" />
                                <label htmlFor="no" className="form-check-label">No, I don't recommend</label>
                                </div>
                            </div>
 
                        </div>
                        <div className="modal-footer flex-nowrap gap-3 border-0 px-4">
                            <button type="reset" className="btn btn-secondary w-100 m-0" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" className="btn btn-dark w-100 m-0">Submit review</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProductReviewForm;
