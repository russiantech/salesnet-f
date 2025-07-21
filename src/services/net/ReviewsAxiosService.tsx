import { AxiosService } from "./base/AxiosService";

export const ReviewAxiosService = {
  // Create a new comment
  createReview: (productSlug: string, data: {
    content: string;
    rating: number;
    recommend?: boolean;
  }) => AxiosService.json.post(`/reviews/${productSlug}/products`, data),

  // Get Reviews for a product
  getProductReviews: (productSlug: string, queryParams = {}) => 
    AxiosService.json.get(`/reviews/products/${productSlug}`, { params: queryParams }),

  // Update a comment
  updateReview: (review_id: number, data: {
    content?: string;
    rating?: number;
    recommend?: boolean;
  }) => AxiosService.json.put(`/reviews/${review_id}`, data),

  // Delete a comment
  deleteReview: (review_id: number) => 
    AxiosService.json.delete(`/reviews/${review_id}`),

  // List all Reviews (admin only)
  listAllReviews: (queryParams = {}) => 
    AxiosService.json.get('/reviews/products', { params: queryParams }),
  


  
  // NEW

  // Get reviews for a business
    getForBusiness: (businessId: string, businessType: 'user' | 'page') => {
        return AxiosService.json.get(`/reviews/business/${businessId}`, {
            params: { type: businessType }
        });
    },

    // Create a review for a business
    createBusinessReview: (data: {
        businessId: string;
        businessType: 'user' | 'page';
        rating: number;
        comment: string;
    }) => {
        return AxiosService.json.post('/reviews/business', data);
    },

    // Get reviews by user
    getByUser: (userId: string, query = {}) => {
        const finalQuery = { 
            location: `/users/${userId}/reviews`, 
            page: 1, 
            page_size: 10,
            ...query 
        };
        return AxiosService.fetchPage(finalQuery.location, finalQuery);
    },



};

export default ReviewAxiosService;