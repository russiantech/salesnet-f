import { AxiosService } from "./base/AxiosService";

export const ProductAxiosService = {

    // Fetch a paginated list of products
    fetchPage: (query = {}, username: string) => {
        const finalQuery = { location: '/products', page: 1, page_size: 5, username, ...query };
        return AxiosService.fetchPage(finalQuery.location, finalQuery);
    },

    // Fetch a paginated list of recommended products 
    getRecommended: (query = {}, username: string) => {
        const finalQuery = { location: '/products/recommendations', page: 1, page_size: 5, username, ...query };
        return AxiosService.fetchPage(finalQuery.location, finalQuery);
    },

    // Fetch a product by its slug
    getBySlug: (slug: string) => {
        if (typeof slug !== "string") {
            throw new Error("Slug must be a string");
        }
        return AxiosService.json.get(`/products/${slug}`);
    },

    // Fetch all categories
    fetchCategories: () => AxiosService.json.get('/categories?page_size=200'),

    // fetchProductsByCategories: () => AxiosService.json.get('/by-categories'),
    fetchProductsByCategories: () => AxiosService.fetchPage('/by-categories'),

    // Fetch products by category ID with pagination
    fetchProductsByCategory: (categoryId: any, query = {}) => {
        const finalQuery = { page: 1, page_size: 5, ...query };
        return AxiosService.json.get(`/categories/${categoryId}/products`, finalQuery);
    },

    createProduct: (data: FormData) =>  AxiosService.multipart.post('/products', data),
    
    updateProduct: (id: string, data: FormData) => AxiosService.multipart.put(`/products/${id}`, data),
    
    // For JSON data
    updateProductMetadata: (id: string, data: object) => AxiosService.json.put(`/products/${id}/metadata`, data),

    // Delete a product
    deleteProduct: (slug: string) => AxiosService.json.delete(`/products/${slug}`),

    // Create a comment for a product
    createComment: (slug: string, payload: any) => AxiosService.multipart.post(`/products/${slug}/comments`, { comment: { body: payload } }),

    // Delete a comment for a product
    deleteComment: (slug: string, commentId: any) => AxiosService.json.delete(`/products/${slug}/comments/${commentId}`),

};
