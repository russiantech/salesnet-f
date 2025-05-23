import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState, useCallback } from 'react';
import { ProductAxiosService } from '../../services/net/ProductAxiosService';
import { Link } from 'react-router-dom';
import { NotificationService } from '../../services/local/NotificationService';
import Breadcrumb from '../../components/shared/Breadcrumb';
import CategoriesProducts from './CategoriesProducts';
// import ProductsByCategories from './CategoriesProducts';
// import ProductsByCategories from '../products/ProductsByCategories';
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
            const res = await ProductAxiosService.fetchPage({ page, page_size: 5 });
            console.log('API Response:', res); // Log the response
            setProducts(prevProducts => [...prevProducts, ...res.data.products]);
            setPageMeta(res.data.page_meta);
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
    return (_jsxs("main", { className: "content-wrapper", children: [_jsxs("section", { className: "container pb-2 pb-sm-3 pb-md-4 pb-lg-5 mb-xxl-3", children: [_jsx(Breadcrumb, { items: [
                            { label: 'Home', path: '/' },
                            { label: 'Categories', path: '/categories' }
                        ] }), _jsx("div", { className: "row", children: _jsx("div", { className: "col-lg-8 col-xl-12", children: _jsxs("div", { className: "d-flex flex-column flex-md-row align-items-md-center gap-3 gap-md-4", children: [_jsx("div", { className: "nav align-items-center gap-2 fs-sm", children: _jsxs(Link, { className: "nav-link text-body gap-1 p-0", to: "/", children: [_jsx("div", { className: "flex-shrink-0 border rounded-circle", style: { width: "32px" }, children: _jsx("div", { className: "ratio ratio-1x1 rounded-circle overflow-hidden", children: _jsx("img", { alt: "Avatar", src: "/assets/img/us/logos/favicon.svg" }) }) }), _jsx("span", { className: 'badge rounded-pill text-info bg-grey-subtle fs-sm', children: "Home" })] }) }), _jsxs("div", { className: "d-flex justify-content-between flex-grow-1 gap-4", children: [_jsx("span", { className: "badge rounded-pill text-info bg-info-subtle1 d-inline-flex align-items-center fs-sm", children: "." }), _jsxs("div", { className: "d-flex gap-2", children: [_jsxs("button", { className: "btn btn-sm btn-info rounded-pill animate-pulse text-info bg-info-subtle", type: "button", children: [_jsx("i", { className: "ci-shopping-cart animate-target fs-sm ms-n1 me-1" }), "Basket"] }), _jsxs("button", { className: "btn btn-sm btn-secondary rounded-pill animate-pulse", type: "button", children: [_jsx("i", { className: "ci-heart animate-target fs-sm ms-n1 me-1" }), "12"] }), _jsxs("a", { className: "btn btn-sm btn-secondary rounded-pill animate-scale", href: "#comments", children: [_jsx("i", { className: "ci-message-circle animate-target fs-sm ms-n1 me-1" }), "3"] }), _jsxs("div", { className: "dropdown", children: [_jsx("button", { "aria-expanded": "false", "aria-label": "Share", className: "btn btn-icon btn-sm btn-secondary animate-scale rounded-circle", "data-bs-toggle": "dropdown", type: "button", children: _jsx("i", { className: "ci-share-2 animate-target fs-sm" }) }), _jsxs("ul", { className: "dropdown-menu dropdown-menu-end", style: { "--cz-dropdown-min-width": "8.5rem" }, children: [_jsx("li", { children: _jsxs("a", { className: "dropdown-item", href: "#!", children: [_jsx("i", { className: "ci-facebook fs-base me-2" }), "Facebook"] }) }), _jsx("li", { children: _jsxs("a", { className: "dropdown-item", href: "#!", children: [_jsx("i", { className: "ci-instagram fs-base me-2" }), "Instagram"] }) }), _jsx("li", { children: _jsxs("a", { className: "dropdown-item", href: "#", children: [_jsx("i", { className: "ci-linkedin fs-base me-2" }), "LinkedIn"] }) })] })] })] })] })] }) }) })] }), _jsx(CategoriesProducts, {})] }));
};
export default Products;
