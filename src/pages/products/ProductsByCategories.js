import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState, useCallback } from 'react';
// import ProductSummary from "./ProductSummary_0";
import { ProductAxiosService } from '../../services/net/ProductAxiosService';
import { NotificationService } from "../../services/local/NotificationService";
import { Link } from 'react-router-dom';
import './Products.css'; // Import custom CSS for loading animation
import LoadingCard from '../../components/shared/LoadingCard';
import ProductSummary from './ProductSummary';
const ProductsByCategories = () => {
    const [categories, setCategories] = useState([]);
    const [pageMeta, setPageMeta] = useState({});
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    useEffect(() => {
        fetchCategories();
    }, [page]);
    const fetchCategories = async () => {
        if (!hasMore)
            return;
        setLoading(true);
        try {
            const res = await ProductAxiosService.fetchProductsByCategories(page, 1);
            // console.log('API Response:', res); // Log the response
            const data = res.data;
            // Map categories and their products
            const newCategories = data.categories.map(category => ({
                id: category.id,
                name: category.name,
                slug: category.slug,
                products: category.products,
                subcategories: category.subcategories || []
            }));
            // setCategories(prevCategories => [...prevCategories, ...newCategories]);
            // use set() toremove duplicates
            setCategories(prev => {
                const existingIds = new Set(prev.map(cat => cat.id));
                const filteredCategories = newCategories.filter(cat => !existingIds.has(cat.id));
                return [...prev, ...filteredCategories];
            });
            // 
            setPageMeta(data.page_meta);
            setHasMore(data.page_meta.has_next_page);
        }
        catch (err) {
            console.error('Failed to fetch categories:', err); // Log the error
            NotificationService.showDialog(err.message);
            // <ResponseModal
            //     show={true}
            //     message={err.message}
            //     success={false}
            //     onClose={() => true}
            //   />
        }
        finally {
            setLoading(false);
        }
    };
    const handleScroll = useCallback(() => {
        const scrollPosition = window.innerHeight + document.documentElement.scrollTop;
        const threshold = document.documentElement.offsetHeight - 200; // Trigger before reaching the bottom
        if (loading || scrollPosition < threshold)
            return;
        setPage(prevPage => prevPage + 1);
    }, [loading]);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);
    return (_jsx("section", { className: "container pb-2 pb-sm-3 pb-md-4 pb-lg-5 mb-xxl-3", children: categories.map((category) => (_jsxs("div", { className: "mb-5", children: [_jsx("div", { className: "d-flex align-items-start justify-content-between border-bottom pb-3 pb-md-4", children: _jsxs("div", { className: "d-flex align-items-center", children: [_jsx("h2", { className: "h3 pe-3 me-3 mb-0", children: category.name }), _jsx(Link, { to: `/categories/${category.slug}`, className: "product-card-button btn btn-icon btn-dark animate-slide-end ms-2 border-2", "aria-label": `View all ${category.name} products`, children: _jsx("i", { className: "ci-arrow-up-right fs-base animate-target" }) })] }) }), _jsxs("div", { className: "row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 pt-4", children: [category.products.map((product) => (_jsx(ProductSummary, { product: product, showDetails: true }, product.id))), loading && Array.from({ length: 4 }).map((_, index) => (_jsx(LoadingCard, {}, `loading-${index}`)))] })] }, category.slug))) }));
};
export default ProductsByCategories;
