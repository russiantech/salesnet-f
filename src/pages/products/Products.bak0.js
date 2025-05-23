import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState, useCallback } from 'react';
import ProductSummary from "./ProductSummary_0";
import { ProductAxiosService } from '../../services/net/ProductAxiosService';
import { NotificationService } from "../../services/local/NotificationService";
import { Link } from 'react-router-dom';
import './Products.css'; // Import custom CSS for loading animation
const Products = () => {
    const [products, setProducts] = useState([]);
    const [pageMeta, setPageMeta] = useState({});
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
            const res = await ProductAxiosService.fetchPage({ page });
            console.log('API Response:', res);
            setProducts(prevProducts => [...prevProducts, ...res.data.products]);
            setPageMeta(res.data.page_meta);
            setHasMore(res.data.page_meta.has_next_page);
        }
        catch (err) {
            console.error('Failed to fetch products:', err);
            NotificationService.showDialogError(err.message);
        }
        finally {
            setLoading(false);
        }
    };
    const handleScroll = useCallback(() => {
        if (loading || window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight)
            return;
        setPage(prevPage => prevPage + 1);
    }, [loading]);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);
    return (_jsx(_Fragment, { children: _jsx("main", { className: "content-wrapper", children: _jsxs("section", { className: "container pb-2 pb-sm-3 pb-md-4 pb-lg-5 mb-xxl-3", children: [_jsxs("ol", { className: "breadcrumb pt-3 mt-2 mt-md-3 mb-md-4", children: [_jsx("li", { className: "breadcrumb-item", children: _jsx("a", { href: "/", children: "Home" }) }), _jsx("li", { className: "breadcrumb-item", children: _jsx("a", { href: "/pages", children: "Pages" }) }), _jsx("li", { "aria-current": "page", className: "breadcrumb-item active", children: "Products" })] }), _jsx("div", { className: "row", children: _jsx("div", { className: "col-lg-8 col-xl-9", children: _jsx("h1", { className: "h3 mb-sm-4", children: "A stunning Techa pro mockups for products." }) }) }), _jsxs("div", { className: "row g-4 pt-4", children: [_jsx("div", { className: "d-flex align-items-start justify-content-between border-bottom pb-3 pb-md-4", children: _jsxs("div", { className: "d-flex align-items-center", children: [_jsx("h2", { className: "h3 pe-3 me-3 mb-0", children: "African Ankaras" }), _jsx(Link, { to: "/categories/slug", className: "product-card-button btn btn-icon btn-dark animate-slide-end ms-2 border-2", children: _jsx("i", { className: "ci-arrow-up-right fs-base animate-target" }) })] }) }), loading ? (Array.from({ length: 8 }).map((_, index) => (_jsx("div", { className: "col", children: _jsxs("div", { className: "product-card placeholder-wave", children: [_jsx("div", { className: "position-relative", children: _jsx("div", { className: "placeholder-img" }) }), _jsxs("div", { className: "w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3", children: [_jsx("div", { className: "placeholder-text" }), _jsxs("div", { className: "d-flex align-items-center justify-content-between", children: [_jsx("div", { className: "placeholder-price" }), _jsx("div", { className: "placeholder-button" })] })] })] }) }, index)))) : (products.map((product) => (_jsx(ProductSummary, { image: product.image_urls.length > 0 ? product.image_urls[0] : '', name: product.name, slug: product.slug, price: product.price, id: product.id, url: `/products/${product.slug}` }, product.id)))), loading && _jsx("h2", { children: "Loading more products..." })] })] }) }) }));
};
export default Products;
