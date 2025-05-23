import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState, useCallback } from 'react';
import { NotificationService } from "../../services/local/NotificationService";
import { Link } from 'react-router-dom';
import LoadingCard from '../../components/shared/LoadingCard';
import ProductSummary from '../products/ProductSummary';
import { OffersAxiosService } from '../../services/net/OffersAxiosService';
import Breadcrumb from '../../components/shared/Breadcrumb';
import './ProductsByOffers.css';
const ProductsByOffers = () => {
    const [offers, setOffers] = useState([]);
    const [pageMeta, setPageMeta] = useState({});
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [now, setNow] = useState(Date.now());
    // Update current time every second for countdown
    useEffect(() => {
        const timer = setInterval(() => setNow(Date.now()), 1000);
        return () => clearInterval(timer);
    }, []);
    useEffect(() => {
        fetchOffers();
    }, [page]);
    const calculateTimeLeft = (endDate) => {
        const difference = new Date(endDate) - now;
        if (difference <= 0)
            return null;
        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        };
    };
    const fetchOffers = async () => {
        if (!hasMore)
            return;
        setLoading(true);
        try {
            const res = await OffersAxiosService.fetchOffers({
                page,
                page_size: 3,
                status: 'active',
                include_products: true
            });
            const data = res.data;
            const newOffers = data.offers.map(offer => ({
                ...offer,
                id: offer.id,
                name: offer.name,
                slug: offer.slug,
                end_date: offer.dates.end,
                banner_image: offer.banner_image,
                discount: offer.discount,
                products: offer.products || []
            }));
            setOffers(prev => {
                const existingIds = new Set(prev.map(offer => offer.id));
                const filteredOffers = newOffers.filter(offer => !existingIds.has(offer.id));
                return [...prev, ...filteredOffers];
            });
            setPageMeta(data.page_meta);
            setHasMore(data.page_meta.has_next_page);
        }
        catch (err) {
            console.error('Failed to fetch offers:', err);
            NotificationService.showDialog(err.message);
        }
        finally {
            setLoading(false);
        }
    };
    const handleScroll = useCallback(() => {
        const scrollPosition = window.innerHeight + document.documentElement.scrollTop;
        const threshold = document.documentElement.offsetHeight - 200;
        if (loading || scrollPosition < threshold)
            return;
        setPage(prevPage => prevPage + 1);
    }, [loading]);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);
    const CountdownTimer = ({ endDate }) => {
        const timeLeft = calculateTimeLeft(endDate);
        if (!timeLeft)
            return (_jsxs("div", { className: "badge bg-danger rounded-pill bg-opacity-15 text-danger fs-sm ms-3", children: [_jsx("i", { className: "ci-time me-1" }), " Expired"] }));
        return (_jsx("div", { className: "d-flex align-items-center gap-2 ms-md-3", children: Object.entries(timeLeft).map(([unit, value], idx) => (_jsxs("div", { className: "d-flex align-items-center gap-1", children: [_jsxs("div", { className: "badge bg-dark bg-opacity-10 text-danger px-2 py-1 rounded-pill", children: [_jsx("span", { className: "fs-sm fw-medium", children: value.toString().padStart(2, '0') }), _jsx("span", { className: "ms-1 fs-xs text-muted rounded-pill", children: unit.charAt(0) })] }), idx < 3 && _jsx("span", { className: "text-muted fs-xs", children: ":" })] }, unit))) }));
    };
    return (_jsx("main", { className: "content-wrapper", children: _jsxs("section", { className: "container pb-2 pb-sm-3 pb-md-4 pb-lg-5 mb-xxl-3", children: [_jsx(Breadcrumb, { items: [
                        { label: 'Home', path: '/' },
                        { label: 'Offers', path: '/offers' }
                    ] }), _jsx("div", { className: "sticky-header bg-white zindex-sticky pt-2 pt-md-3", children: _jsx("div", { className: "container", children: _jsxs("div", { className: "d-flex align-items-center justify-content-between py-2 border-bottom", children: [_jsxs("div", { className: "d-flex align-items-center", children: [_jsxs("h1", { className: "h4 mb-0", children: [_jsx("i", { className: "ci-gift text-warning me-2" }), "Active Offers"] }), _jsxs("span", { className: "badge bg-primary rounded-pill bg-opacity-10 text-primary ms-3", children: [offers.length, " Ongoing"] })] }), _jsxs("div", { className: "d-flex align-items-center gap-3", children: [_jsxs("button", { className: "btn btn-sm btn-outline-secondary", children: [_jsx("i", { className: "ci-filter me-2" }), "Filter"] }), _jsx("div", { className: "vr d-none d-md-inline-block" }), _jsxs("button", { className: "btn btn-sm btn-outline-secondary", children: [_jsx("i", { className: "ci-sort-asc me-2" }), "Sort"] })] })] }) }) }), _jsx("div", { className: "container mt-4", children: offers.map((offer) => (_jsxs("div", { className: "mb-5", children: [_jsx("div", { className: "sticky-top bg-white zindex-sticky py-3 border-bottom", children: _jsxs("div", { className: "d-flex align-items-center justify-content-between", children: [_jsxs("div", { className: "d-flex align-items-center", children: [_jsx("h3", { className: "h5 mb-0 me-3", children: offer.name }), _jsxs("span", { className: "badge bg-danger bg-opacity-15 rounded-pill ", children: [offer.discount.value, offer.discount.type === 'percentage' ? '%' : '$', " OFF"] }), _jsx(CountdownTimer, { endDate: offer.end_date })] }), _jsxs(Link, { to: `/offers/${offer.slug}`, className: "btn btn-sm btn-outline-dark", children: ["View Details", _jsx("i", { className: "ci-arrow-right ms-2" })] })] }) }), _jsxs("div", { className: "row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 pt-4", children: [offer.products.map((product) => (_jsx(ProductSummary, { product: product, showDetails: true }, product.id))), loading && Array.from({ length: 4 }).map((_, index) => (_jsx(LoadingCard, {}, `loading-${index}`)))] })] }, offer.slug))) })] }) }));
};
export default ProductsByOffers;
const ProductsByOffersFORMER = () => {
    const [offers, setOffers] = useState([]);
    const [pageMeta, setPageMeta] = useState({});
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [now, setNow] = useState(Date.now());
    // Update current time every second for countdown
    useEffect(() => {
        const timer = setInterval(() => setNow(Date.now()), 1000);
        return () => clearInterval(timer);
    }, []);
    useEffect(() => {
        fetchOffers();
    }, [page]);
    const calculateTimeLeft = (endDate) => {
        const difference = new Date(endDate) - now;
        if (difference <= 0)
            return null;
        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        };
    };
    const fetchOffers = async () => {
        if (!hasMore)
            return;
        setLoading(true);
        try {
            const res = await OffersAxiosService.fetchOffers({
                page,
                page_size: 3,
                status: 'active',
                include_products: true
            });
            const data = res.data;
            const newOffers = data.offers.map(offer => ({
                ...offer,
                id: offer.id,
                name: offer.name,
                slug: offer.slug,
                end_date: offer.dates.end,
                banner_image: offer.banner_image,
                discount: offer.discount,
                products: offer.products || []
            }));
            setOffers(prev => {
                const existingIds = new Set(prev.map(offer => offer.id));
                const filteredOffers = newOffers.filter(offer => !existingIds.has(offer.id));
                return [...prev, ...filteredOffers];
            });
            setPageMeta(data.page_meta);
            setHasMore(data.page_meta.has_next_page);
        }
        catch (err) {
            console.error('Failed to fetch offers:', err);
            NotificationService.showDialog(err.message);
        }
        finally {
            setLoading(false);
        }
    };
    const handleScroll = useCallback(() => {
        const scrollPosition = window.innerHeight + document.documentElement.scrollTop;
        const threshold = document.documentElement.offsetHeight - 200;
        if (loading || scrollPosition < threshold)
            return;
        setPage(prevPage => prevPage + 1);
    }, [loading]);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);
    const CountdownTimer = ({ endDate }) => {
        const timeLeft = calculateTimeLeft(endDate);
        if (!timeLeft)
            return (_jsx("div", { className: "badge bg-danger ms-3", children: "Offer Expired" }));
        return (_jsxs("div", { className: "d-flex align-items-center ms-md-4 mt-2 mt-md-0", children: [_jsxs("div", { className: "btn btn-success pe-none px-2 rounded-pill", children: [_jsx("span", { children: timeLeft.days.toString().padStart(2, '0') }), _jsx("span", { className: "ms-1", children: "d" })] }), _jsx("div", { className: "animate-blinking text-body-tertiary fs-lg fw-medium mx-2", children: ":" }), _jsxs("div", { className: "btn btn-outline-warning pe-none px-2 rounded-pill", children: [_jsx("span", { children: timeLeft.hours.toString().padStart(2, '0') }), _jsx("span", { className: "ms-1", children: "h" })] }), _jsx("div", { className: "animate-blinking text-body-tertiary fs-lg fw-medium mx-2", children: ":" }), _jsxs("div", { className: "btn btn-outline-danger pe-none px-2 rounded-pill", children: [_jsx("span", { children: timeLeft.minutes.toString().padStart(2, '0') }), _jsx("span", { className: "ms-1", children: "m" })] }), _jsx("div", { className: "animate-blinking text-body-tertiary fs-lg fw-medium mx-2", children: ":" }), _jsxs("div", { className: "btn btn-outline-info pe-none px-2 rounded-pill", children: [_jsx("span", { children: timeLeft.seconds.toString().padStart(2, '0') }), _jsx("span", { className: "ms-1", children: "s" })] })] }));
    };
    return (_jsxs("main", { className: "content-wrapper", children: [_jsxs("section", { className: "container pb-2 pb-sm-3 pb-md-4 pb-lg-5 mb-xxl-3", children: [_jsx(Breadcrumb, { items: [
                            { label: 'Home', path: '/' },
                            { label: 'Offers', path: '/offers' }
                        ] }), _jsx("div", { className: "row", children: _jsx("div", { className: "col-lg-8 col-xl-12", children: _jsxs("div", { className: "d-flex flex-column flex-md-row align-items-md-center gap-3 gap-md-4", children: [_jsx("div", { className: "nav align-items-center gap-2 fs-sm", children: _jsxs(Link, { className: "nav-link text-body gap-1 p-0", to: "/", children: [_jsx("div", { className: "flex-shrink-0 border rounded-circle", style: { width: "32px" }, children: _jsx("div", { className: "ratio ratio-1x1 rounded-circle overflow-hidden", children: _jsx("img", { alt: "Avatar", src: "/assets/img/us/logos/favicon.svg" }) }) }), _jsxs("span", { className: 'badge rounded-pill text-body bg-grey-subtle fs-lg', children: ["Special Offers 4 You ", _jsx("i", { className: "ci-gift text-warning" }), " :"] })] }) }), _jsxs("div", { className: "d-flex justify-content-between flex-grow-1 gap-4", children: [_jsx("span", { className: "badge rounded-pill text-info bg-info-subtle1 d-inline-flex align-items-center fs-sm visibility-hidden" }), _jsxs("div", { className: "d-flex gap-2", children: [_jsxs("button", { className: "btn btn-sm btn-info rounded-pill animate-pulse text-info bg-info-subtle", type: "button", children: [_jsx("i", { className: "ci-shopping-cart animate-target fs-sm ms-n1 me-1" }), "Basket"] }), _jsxs("button", { className: "btn btn-sm btn-secondary rounded-pill animate-pulse", type: "button", children: [_jsx("i", { className: "ci-heart animate-target fs-sm ms-n1 me-1" }), "12"] }), _jsxs("a", { className: "btn btn-sm btn-secondary rounded-pill animate-scale", href: "#comments", children: [_jsx("i", { className: "ci-message-circle animate-target fs-sm ms-n1 me-1" }), "3"] }), _jsxs("div", { className: "dropdown", children: [_jsx("button", { "aria-expanded": "false", "aria-label": "Share", className: "btn btn-icon btn-sm btn-secondary animate-scale rounded-circle", "data-bs-toggle": "dropdown", type: "button", children: _jsx("i", { className: "ci-share-2 animate-target fs-sm" }) }), _jsxs("ul", { className: "dropdown-menu dropdown-menu-end", style: { "--cz-dropdown-min-width": "8.5rem" }, children: [_jsx("li", { children: _jsxs("a", { className: "dropdown-item", href: "#!", children: [_jsx("i", { className: "ci-facebook fs-base me-2" }), "Facebook"] }) }), _jsx("li", { children: _jsxs("a", { className: "dropdown-item", href: "#!", children: [_jsx("i", { className: "ci-instagram fs-base me-2" }), "Instagram"] }) }), _jsx("li", { children: _jsxs("a", { className: "dropdown-item", href: "#", children: [_jsx("i", { className: "ci-linkedin fs-base me-2" }), "LinkedIn"] }) })] })] })] })] })] }) }) })] }), _jsx("section", { className: "container pb-2 pb-sm-3 pb-md-4 pb-lg-5 mb-xxl-3", children: offers.map((offer) => {
                    const timeLeft = calculateTimeLeft(offer.end_date);
                    return (_jsxs("div", { className: "mb-5", children: [_jsxs("div", { className: "d-flex flex-wrap align-items-center justify-content-between border-bottom pb-3 pb-md-4", children: [_jsxs("div", { className: "d-flex align-items-center flex-wrap", children: [_jsx("h3", { className: "h4 pe-3 me-3 mb-2 mb-md-0", children: offer.name }), _jsxs("span", { className: "badge bg-danger me-3 mb-2 mb-md-0", children: [offer.discount.value, offer.discount.type === 'percentage' ? '%' : '$', " OFF"] }), _jsx(CountdownTimer, { endDate: offer.end_date })] }), _jsx(Link, { to: `/offers/${offer.slug}`, className: "btn btn-icon btn-dark ms-auto mt-2 mt-md-0 animate-scale", "aria-label": `View ${offer.name} details`, children: _jsx("i", { className: "ci-arrow-up-right fs-base animate-target" }) })] }), _jsxs("div", { className: "row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 pt-4", children: [offer.products.map((product) => (_jsx(ProductSummary, { product: product, showDetails: true }, product.id))), loading && Array.from({ length: 4 }).map((_, index) => (_jsx(LoadingCard, {}, `loading-${index}`)))] })] }, offer.slug));
                }) })] }));
};
