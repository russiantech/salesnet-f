import { AxiosService } from "./base/AxiosService";
export const ReviewAxiosService = {
    // Create a new comment
    createReview: (productSlug, data) => AxiosService.json.post(`/reviews/${productSlug}/products`, data),
    // Get Reviews for a product
    getProductReviews: (productSlug, queryParams = {}) => AxiosService.json.get(`/reviews/products/${productSlug}`, { params: queryParams }),
    // Update a comment
    updateReview: (review_id, data) => AxiosService.json.put(`/reviews/${review_id}`, data),
    // Delete a comment
    deleteReview: (review_id) => AxiosService.json.delete(`/reviews/${review_id}`),
    // List all Reviews (admin only)
    listAllReviews: (queryParams = {}) => AxiosService.json.get('/reviews/products', { params: queryParams }),
};
export default ReviewAxiosService;
