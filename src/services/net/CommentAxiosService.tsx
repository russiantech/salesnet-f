import { AxiosService } from "./base/AxiosService";

export const CommentAxiosService = {
  // Create a new comment
  createComment: (productSlug: string, data: {
    content: string;
    rating: number;
    recommend?: boolean;
  }) => AxiosService.json.post(`/comments/${productSlug}/products`, data),

  // Get comments for a product
  getProductComments: (productSlug: string, queryParams = {}) => 
    AxiosService.json.get(`/comments/products/${productSlug}`, { params: queryParams }),

  // Update a comment
  updateComment: (commentId: number, data: {
    content?: string;
    rating?: number;
    recommend?: boolean;
  }) => AxiosService.json.put(`/comments/${commentId}`, data),

  // Delete a comment
  deleteComment: (commentId: number) => 
    AxiosService.json.delete(`/comments/${commentId}`),

  // List all comments (admin only)
  listAllComments: (queryParams = {}) => 
    AxiosService.json.get('/comments/products', { params: queryParams }),
  
};

export default CommentAxiosService;