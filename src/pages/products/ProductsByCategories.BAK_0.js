import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState, useRef } from 'react';
import ProductSummary from "./ProductSummary_0";
import { ProductAxiosService } from '../../services/net/ProductAxiosService';
import { NotificationService } from "../../services/local/NotificationService";
import { Link } from 'react-router-dom';
import './Products.css';
const ProductsByCategory = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const observerRef = useRef(null);
    useEffect(() => {
        fetchCategories();
    }, []);
    const fetchCategories = async () => {
        setLoading(true);
        try {
            const res = await ProductAxiosService.fetchProductsByCategories();
            const categoriesWithProducts = res.data.categories
                .filter(category => category.products.products.length > 0)
                .map(category => ({
                name: category.name,
                slug: category.slug,
                products: category.products.products.slice(0, 4),
                hasMore: category.products.page_meta.has_next_page
            }));
            setCategories(categoriesWithProducts);
        }
        catch (err) {
            console.error('Failed to fetch categories:', err);
            NotificationService.showDialogError(err.message);
        }
        finally {
            setLoading(false);
        }
    };
    const fetchMoreProducts = async (categorySlug, page) => {
        try {
            const res = await ProductAxiosService.fetchProductsByCategory(categorySlug, { page, page_size: 4 });
            return res.data.products;
        }
        catch (err) {
            console.error('Failed to fetch more products:', err);
            NotificationService.showDialogError(err.message);
            return [];
        }
    };
    const handleLoadMore = async (categorySlug, index) => {
        if (loadingMore)
            return;
        setLoadingMore(true);
        const nextPage = Math.ceil(categories[index].products.length / 4) + 1;
        const newProducts = await fetchMoreProducts(categorySlug, nextPage);
        setCategories(prevCategories => {
            const updatedCategories = [...prevCategories];
            updatedCategories[index].products = [...updatedCategories[index].products, ...newProducts];
            updatedCategories[index].hasMore = newProducts.length > 0;
            return updatedCategories;
        });
        setLoadingMore(false);
    };
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                categories.forEach((category, index) => {
                    if (category.hasMore) {
                        handleLoadMore(category.slug, index);
                    }
                });
            }
        }, { threshold: 1.0 });
        if (observerRef.current) {
            observer.observe(observerRef.current);
        }
        return () => {
            if (observerRef.current) {
                observer.unobserve(observerRef.current);
            }
        };
    }, [categories]);
    return (_jsx(_Fragment, { children: _jsx("main", { className: "content-wrapper", children: _jsxs("section", { className: "container pb-2 pb-sm-3 pb-md-4 pb-lg-5 mb-xxl-3", children: [_jsxs("ol", { className: "breadcrumb pt-3 mt-2 mt-md-3 mb-md-4", children: [_jsx("li", { className: "breadcrumb-item", children: _jsx("a", { href: "/", children: "Home" }) }), _jsx("li", { className: "breadcrumb-item", children: _jsx("a", { href: "/pages", children: "Pages" }) }), _jsx("li", { "aria-current": "page", className: "breadcrumb-item active", children: "Products by Category" })] }), loading ? (_jsx("div", { className: "text-center", children: _jsx("div", { className: "spinner-border text-primary", role: "status", children: _jsx("span", { className: "visually-hidden", children: "Loading..." }) }) })) : (categories.map((category, index) => (_jsxs("div", { className: "mb-5", children: [_jsx("div", { className: "d-flex align-items-start justify-content-between border-bottom pb-3 pb-md-4", children: _jsxs("div", { className: "d-flex align-items-center", children: [_jsx("h2", { className: "h3 pe-3 me-3 mb-0", children: category.name }), _jsx(Link, { to: `/categories/${category.slug}`, className: "product-card-button btn btn-icon btn-dark animate-slide-end ms-2 border-2", children: _jsx("i", { className: "ci-arrow-up-right fs-base animate-target" }) })] }) }), _jsx("div", { className: "row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 pt-4", children: category.products.map((product) => (_jsx(ProductSummary, { image: product.image_urls.length > 0 ? product.image_urls[0] : '', name: product.name, slug: product.slug, price: product.price, id: product.id, url: `/products/${product.slug}` }, product.id))) }), category.hasMore && (_jsx("div", { ref: observerRef, className: "text-center mt-4", children: _jsx("div", { className: "spinner-border text-primary", role: "status", children: _jsx("span", { className: "visually-hidden", children: "Loading..." }) }) }))] }, category.slug))))] }) }) }));
};
export default ProductsByCategory;
