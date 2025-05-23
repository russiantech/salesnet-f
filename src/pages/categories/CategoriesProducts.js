import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState, useCallback } from 'react';
import { ProductAxiosService } from '../../services/net/ProductAxiosService';
import { Link } from 'react-router-dom';
import LoadingCard from '../../components/shared/LoadingCard';
import { NotificationService } from '../../services/local/NotificationService';
import ProductSummary from '../products/ProductSummary';
const CategoriesProducts = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [error, setError] = useState(null);
    const fetchCategories = useCallback(async () => {
        if (!hasMore)
            return;
        try {
            page === 1 ? setLoading(true) : setLoadingMore(true);
            const res = await ProductAxiosService.fetchProductsByCategories(page, 12); // Using 12 items per page
            const data = res.data;
            console.log(data);
            setCategories(prev => {
                const existingIds = new Set(prev.map(cat => cat.id));
                const filteredCategories = data.categories.filter(cat => !existingIds.has(cat.id));
                return [...prev, ...filteredCategories.map(category => ({
                        id: category.id,
                        name: category.name,
                        slug: category.slug,
                        products: category.products || [],
                        subcategories: category.subcategories || []
                    }))];
            });
            setHasMore(data.page_meta?.has_next_page || false);
            setError(null);
        }
        catch (err) {
            console.error('Failed to fetch categories:', err);
            setError(err.message);
            NotificationService.showDialog(err.message || 'Failed to load categories');
        }
        finally {
            page === 1 ? setLoading(false) : setLoadingMore(false);
        }
    }, [page, hasMore]);
    useEffect(() => {
        fetchCategories();
    }, [fetchCategories]);
    const handleScroll = useCallback(() => {
        if (loading || loadingMore || !hasMore)
            return;
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        const threshold = 200; // Load more when 200px from bottom
        if (scrollTop + clientHeight >= scrollHeight - threshold) {
            setPage(prev => prev + 1);
        }
    }, [loading, loadingMore, hasMore]);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);
    if (loading && page === 1 && categories.length === 0) {
        return (_jsx("main", { className: "content-wrapper", children: _jsx("section", { className: "container pb-5", children: _jsx("div", { className: "row", children: Array.from({ length: 4 }).map((_, i) => (_jsxs("div", { className: "col-12 mb-5", children: [_jsx("div", { className: "d-flex align-items-start justify-content-between border-bottom pb-3", children: _jsx("div", { className: "placeholder-glow", children: _jsx("h2", { className: "h3 placeholder pe-3 me-3 mb-0", style: { width: '200px' } }) }) }), _jsx("div", { className: "row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 pt-4", children: Array.from({ length: 4 }).map((_, j) => (_jsx("div", { className: "col", children: _jsx(LoadingCard, {}) }, `product-loading-${j}`))) })] }, `loading-${i}`))) }) }) }));
    }
    if (error && categories.length === 0) {
        return (_jsx("main", { className: "content-wrapper", children: _jsxs("section", { className: "container py-5 text-center", children: [_jsx("h2", { children: "Failed to load categories" }), _jsx("p", { className: "text-muted mb-4", children: error }), _jsx("button", { onClick: () => {
                            setError(null);
                            fetchCategories();
                        }, className: "btn btn-primary", children: "Retry" })] }) }));
    }
    return (_jsx(_Fragment, { children: _jsx("main", { className: "content-wrapper", children: _jsx("section", { className: "container pb-2 pb-sm-3 pb-md-4 pb-lg-5 mb-xxl-3", children: categories.map((category, index) => (_jsxs("div", { className: "mb-5", children: [_jsx("div", { className: "d-flex align-items-start justify-content-between border-bottom pb-3 pb-md-4", children: _jsxs("div", { className: "d-flex align-items-center", children: [_jsx("h2", { className: "h3 pe-3 me-3 mb-0", children: category.name }), _jsx(Link, { to: `/categories/${category.slug}`, className: "product-card-button btn btn-icon btn-dark animate-slide-end ms-2 border-2", children: _jsx("i", { className: "ci-arrow-up-right fs-base animate-target" }) })] }) }), _jsxs("div", { className: "row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 pt-4", children: [category.products.map((product) => (
                                // <ProductSummary
                                //     key={product.id}
                                //     image={product.image_urls.length > 0 ? product.image_urls[0] : ''}
                                //     name={product.name}
                                //     slug={product.slug}
                                //     price={product.price}
                                //     id={product.id}
                                //     url={`/products/${product.slug}`}
                                // />
                                _jsx(ProductSummary, { product: product, showDetails: true }, product.id))), loading && hasMore && (Array.from({ length: 4 }).map((_, index) => (_jsx("div", { className: "col", children: _jsx(LoadingCard, {}) }, `loading-${index}`))))] })] }, category.slug))) }) }) }));
};
export default CategoriesProducts;
