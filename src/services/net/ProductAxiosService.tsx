import { AxiosService } from "./base/AxiosService";

export const ProductAxiosService = {

    // Fetch a paginated list of products
    fetchPage(query = {}) {
        const finalQuery = { location: '/products', page: 1, page_size: 5, ...query };
        return AxiosService.fetchPage(finalQuery.location, finalQuery);
    },

    // Fetch a product by its slug
    getBySlug(slug) {
        if (typeof slug !== "string") {
            throw new Error("Slug must be a string");
        }
        return AxiosService.get(`/products/${slug}`);
    },

    // Fetch all categories
    fetchCategories() {
        return AxiosService.get('/categories');
    },

    fetchProductsByCategories() {
        return AxiosService.get('/by-categories');
    },

    // Fetch products by category ID with pagination
    fetchProductsByCategory(categoryId, query = {}) {
        const finalQuery = { page: 1, page_size: 5, ...query };
        return AxiosService.get(`/categories/${categoryId}/products`, finalQuery);
    },

    // Create a new product
    createProduct(payload) {
        return AxiosService.post('/products', payload);
    },

    // Update an existing product
    updateProduct(slug, payload) {
        return AxiosService.put(`/products/${slug}`, payload);
    },

    // Delete a product
    deleteProduct(slug) {
        return AxiosService.delete(`/products/${slug}`);
    },

    // Create a comment for a product
    createComment(slug, payload) {
        return AxiosService.post(`/products/${slug}/comments`, {
            comment: { body: payload }
        });
    },

    // Delete a comment for a product
    deleteComment(slug, commentId) {
        return AxiosService.delete(`/products/${slug}/comments/${commentId}`);
    }
};
