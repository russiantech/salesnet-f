import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState, useCallback } from 'react';
// import ProductSummary from "./ProductSummary_0";
import { ProductAxiosService } from '../../services/net/ProductAxiosService';
import { NotificationService } from "../../services/local/NotificationService";
import { Link } from 'react-router-dom';
import './Products.css'; // Import custom CSS for loading animation
import LoadingCard from '../../components/shared/LoadingCard';
import ProductSummary from './ProductSummary';
const ProductRecommendations = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    useEffect(() => {
        fetchProducts();
    }, [page]);
    const fetchProducts = async () => {
        if (!hasMore)
            return;
        setLoading(true);
        try {
            const res = await ProductAxiosService.fetchPage({ page, page_size: 5 });
            console.log('API Response:', res); // Log the response
            setProducts(prevProducts => [...prevProducts, ...res.data.products]);
            setHasMore(res.data.page_meta.has_next_page);
        }
        catch (err) {
            console.error('Failed to fetch products:', err); // Log the error
            NotificationService.showDialog(err.message);
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
    return (_jsx(_Fragment, { children: _jsx("main", { className: "content-wrapper", children: _jsxs("section", { className: "container pb-2 pb-sm-3 pb-md-4 pb-lg-5 mb-xxl-3", children: [_jsx("div", { className: "row g-4 pt-4", children: _jsx("div", { className: "d-flex align-items-start justify-content-between border-bottom pb-3 pb-md-4", children: _jsxs("div", { className: "d-flex align-items-center", children: [_jsx("h2", { className: "h3 pe-3 me-3 mb-0", children: "Recommended Products" }), _jsx("div", { className: "d-flex align-items-center", "data-countdown-date": "demoDate", children: _jsx(Link, { to: "/products", className: "product-card-button btn btn-icon btn-dark animate-slide-end ms-2 border-2", children: _jsx("i", { className: "ci-arrow-up-right fs-base animate-target" }) }) })] }) }) }), _jsxs("div", { className: "row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 pt-4", children: [products.map((product) => (
                            // <ProductSummary
                            //     key={product.id}
                            //     image={product.image_urls.length > 0 ? product.image_urls[0] : ''}
                            //     name={product.name}
                            //     slug={product.slug}
                            //     price={product.price}
                            //     id={product.id}
                            //     url={`/products/${product.slug}`}
                            // />
                            // <ProductSummary key={product.id} product={product} />
                            _jsx(ProductSummary, { product: product }))), loading && (Array.from({ length: 8 }).map((_, index) => (_jsx(LoadingCard, {}, index))))] })] }) }) }));
};
export default ProductRecommendations;
