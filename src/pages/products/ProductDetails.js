import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ProductAxiosService } from '../../services/net/ProductAxiosService';
import './Products.css';
import ProductRecommendations from './ProductRecommendations';
import { formatDate } from '../../utils/dateUtils';
import ProductReviewForm from './ProductReviewForm';
import LoadingSpinner from '../../components/shared/LoadingSpinner';
import Breadcrumb from '../../components/shared/Breadcrumb';
const ProductDetails = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [owner, setOwner] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await ProductAxiosService.getBySlug(slug);
                const data = response.data;
                setProduct(data);
                // Determine owner (page or user)
                const ownerData = data.pages?.length > 0
                    ? { ...data.pages[0], type: 'page' }
                    : data.users?.length > 0
                        ? { ...data.users[0], type: 'user' }
                        : null;
                setOwner(ownerData ? {
                    id: ownerData.id,
                    name: ownerData.name || ownerData.username,
                    slug: ownerData.slug || ownerData.username,
                    avatar: ownerData.avatar,
                    type: ownerData.type
                } : null);
            }
            catch (err) {
                setError('Failed to load product details');
            }
            finally {
                setLoading(false);
            }
        };
        fetchProductDetails();
    }, [slug]);
    const handleSocialShare = (platform) => {
        const shareUrl = window.location.href;
        const text = `Check out ${product?.name} on our platform - ${product?.description}`;
        switch (platform) {
            case 'facebook':
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
                break;
            case 'instagram':
                alert("Instagram sharing is not supported directly. Please copy the link.");
                break;
            case 'twitter':
                window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
                break;
            case 'linkedin':
                window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(product?.name || '')}`, '_blank');
                break;
            case 'copy':
                navigator.clipboard.writeText(shareUrl);
                alert('Link copied to clipboard!');
                break;
        }
    };
    if (loading) {
        return (_jsx(LoadingSpinner, {}));
    }
    if (error) {
        return _jsx("div", { children: error }); // Error state
    }
    return (_jsx(_Fragment, { children: _jsxs("main", { className: "content-wrapper", children: [_jsxs("section", { className: "container pb-2 pb-sm-3 pb-md-4 pb-lg-5 mb-xxl-3", children: [_jsx(Breadcrumb, { items: [
                                { label: 'Home', path: '/' },
                                { label: 'Products', path: '/products' },
                                { label: product?.name || slug, path: `/products/${slug}` }
                            ] }), _jsx("div", { className: "row", children: _jsxs("div", { className: "col-lg-8 col-xl-9", children: [_jsxs("h1", { className: "h3 mb-sm-4", children: [_jsx("span", { onClick: () => navigate(-1), className: "btn btn-sm btn-dark rounded-pill animate-pulse text-dark bg-info-subtle", type: "button", children: _jsx("i", { className: "ci-arrow-up-left fs-md" }) }), product.name] }), _jsxs("div", { className: "d-flex flex-column flex-md-row align-items-md-center gap-3 gap-md-4", children: [owner && (_jsxs("div", { className: "nav align-items-center gap-2 fs-sm", children: [_jsxs(Link, { to: `/${owner.type === 'page' ? 'pages' : 'users'}/${owner.slug}`, className: "nav-link text-body gap-1 p-0", children: [_jsx("div", { className: "flex-shrink-0 border rounded-circle", style: { width: "32px" }, children: _jsx("img", { alt: owner.name, src: owner.avatar || '/assets/img/us/logos/avatar.png', className: "ratio ratio-1x1 rounded-circle" }) }), owner.name] }), _jsxs("span", { className: "text-body-secondary", children: ["Listed ", formatDate(product.created_at)] })] })), _jsxs("div", { className: "d-flex justify-content-between flex-grow-1 gap-4", children: [product.reviews_count > 0 && (_jsxs("span", { className: "badge rounded-pill text-info bg-info-subtle d-inline-flex align-items-center fs-sm", children: [product.reviews_count, " sales"] })), _jsxs("div", { className: "d-flex gap-2", children: [_jsxs("button", { className: "btn btn-sm btn-dark bg-dark rounded-pill animate-pulse fw-bold", children: ["$", product.price] }), _jsxs("button", { className: "btn btn-sm btn-info rounded-pill animate-pulse text-info bg-info-subtle ", type: "button", children: [_jsx("i", { className: "ci-shopping-cart animate-target fs-sm ms-n1 me-1" }), "Basket"] }), _jsxs("button", { className: "btn btn-sm btn-secondary rounded-pill animate-pulse", type: "button", children: [_jsx("i", { className: "ci-heart animate-target fs-sm ms-n1 me-1" }), product.reviews_count] }), _jsxs(Link, { className: "btn btn-sm btn-secondary rounded-pill animate-scale", to: "#comments", children: [_jsx("i", { className: "ci-message-circle animate-target fs-sm ms-n1 me-1" }), product.reviews_count] }), _jsxs("div", { className: "dropdown", children: [_jsx("button", { "aria-expanded": "false", "aria-label": "Share", className: "btn btn-icon btn-sm btn-secondary animate-scale rounded-circle", "data-bs-toggle": "dropdown", type: "button", children: _jsx("i", { className: "ci-share-2 animate-target fs-sm" }) }), _jsxs("ul", { className: "dropdown-menu dropdown-menu-end", style: { "--cz-dropdown-min-width": "8.5rem" }, children: [_jsx("li", { children: _jsxs("button", { className: "dropdown-item", onClick: () => handleSocialShare('facebook'), children: [_jsx("i", { className: "ci-facebook fs-base me-2 text-info" }), "Facebook"] }) }), _jsx("li", { children: _jsxs("a", { className: "dropdown-item", href: "#!", onClick: () => handleSocialShare('instagram'), children: [_jsx("i", { className: "ci-instagram fs-base me-2 text-primary" }), "Instagram"] }) }), _jsx("li", { children: _jsxs("button", { className: "dropdown-item", onClick: () => handleSocialShare('twitter'), children: [_jsx("i", { className: "ci-twitter fs-base me-2" }), "Twitter"] }) }), _jsx("li", { children: _jsxs("button", { className: "dropdown-item", onClick: () => handleSocialShare('linkedin'), children: [_jsx("i", { className: "ci-linkedin fs-base me-2 text-info" }), "LinkedIn"] }) }), _jsx("li", { children: _jsxs("button", { className: "dropdown-item", onClick: () => handleSocialShare('copy'), children: [_jsx("i", { className: "ci-copy fs-base me-2" }), "Copy Link"] }) })] })] })] })] })] })] }) }), _jsx("div", { className: "row pb-5 pt-4", children: _jsxs("div", { className: "col-lg-8 col-xl-9", children: [_jsxs("div", { className: "vstack gap-3", children: [_jsxs("a", { className: "hover-effect-scale hover-effect-opacity position-relative d-flex rounded-4 overflow-hidden", "data-gallery": "product-gallery", "data-glightbox": "", href: product.image_urls[0], children: [_jsx("i", { className: "ci-zoom-in hover-effect-target fs-3 text-white position-absolute top-50 start-50 translate-middle opacity-0 z-2" }), _jsx("div", { className: "ratio hover-effect-target bg-body-tertiary", style: { "--cz-aspect-ratio": "calc(640 / 966 * 100%)" }, children: _jsx("img", { alt: "Image", src: product.image_urls && product.image_urls[0] }) })] }), _jsx("div", { className: "row row-cols-2 g-3", children: product.image_urls.slice(1).map((url, index) => (_jsx("div", { className: "col", children: _jsxs("a", { className: "hover-effect-scale hover-effect-opacity position-relative d-flex rounded-4 overflow-hidden", "data-gallery": "product-gallery", "data-glightbox": "", href: url, children: [_jsx("i", { className: "ci-zoom-in hover-effect-target fs-3 text-white position-absolute top-50 start-50 translate-middle opacity-0 z-2" }), _jsx("div", { className: "ratio ratio-1x1 hover-effect-target bg-body-tertiary", children: _jsx("img", { alt: "Image", src: url }) })] }) }, index))) })] }), _jsxs("section", { className: "container pt-5 mt-2 mt-sm-3 mt-lg-4 mt-xl-5", children: [_jsxs("ul", { className: "nav nav-underline flex-nowrap border-bottom", role: "tablist", children: [_jsx("li", { className: "nav-item me-md-1", role: "presentation", children: _jsx("button", { "aria-controls": "description-tab-pane", "aria-selected": "true", className: "nav-link active badge rounded-pill text-info bg-info-subtle p-2", "data-bs-target": "#description-tab-pane", "data-bs-toggle": "tab", id: "description-tab", role: "tab", type: "button", children: "Description" }) }), _jsx("li", { className: "nav-item me-md-1", role: "presentation", children: _jsxs("button", { "aria-controls": "delivery-tab-pane", "aria-selected": "false", className: "nav-link badge rounded-pill text-info bg-info-subtle p-2", "data-bs-target": "#delivery-tab-pane", "data-bs-toggle": "tab", id: "delivery-tab", role: "tab", tabIndex: "-1", type: "button", children: ["Delivery", _jsx("span", { className: "d-none d-md-inline", children: "\u00A0and returns" })] }) }), _jsx("li", { className: "nav-item", role: "presentation", children: _jsxs("button", { "aria-controls": "reviews-tab-pane", "aria-selected": "false", className: "nav-link badge rounded-pill text-info bg-info-subtle p-2", "data-bs-target": "#reviews-tab-pane", "data-bs-toggle": "tab", id: "reviews-tab", role: "tab", tabIndex: "-1", type: "button", children: ["Reviews", _jsxs("span", { className: "d-none d-md-inline", children: ["\u00A0(", product.reviews_count, ")"] })] }) })] }), _jsxs("div", { className: "tab-content pt-4 mt-sm-1 mt-md-3", children: [_jsx("div", { "aria-labelledby": "description-tab", className: "tab-pane fade active show", id: "description-tab-pane", role: "tabpanel", children: _jsxs("div", { className: "row", children: [_jsx("h2", { className: "h4 pt-2 mt-md-2 mb-lg-2", children: "Overview" }), _jsx("p", { children: product?.description }), _jsx("h2", { className: "h4 pt-5 mt-md-2 mb-lg-4", children: "Highlights" }), _jsxs("ul", { className: "mb-0", children: [_jsxs("li", { children: ["If you need more details regarding this ", product.name] }), _jsx("li", { children: "Kindly get in touch with me." }), _jsx("li", { children: "I'm more than happy to help you get it." })] })] }) }), _jsx("div", { "aria-labelledby": "delivery-tab", className: "tab-pane fade fs-sm", id: "delivery-tab-pane", role: "tabpanel", children: _jsxs("div", { className: "row row-cols-1 row-cols-md-2", children: [_jsx("div", { className: "col mb-3 mb-md-0", children: _jsxs("div", { className: "pe-lg-2 pe-xl-3", children: [_jsx("h6", { children: "Delivery" }), _jsx("p", { children: "We strive to deliver your product as quickly as possible. Our estimated delivery times are as follows:" }), _jsxs("ul", { className: "list-unstyled", children: [_jsxs("li", { children: ["Standard delivery: ", _jsx("span", { className: "text-dark-emphasis fw-semibold", children: "Within 3-7 business days" })] }), _jsxs("li", { children: ["Express delivery: ", _jsx("span", { className: "text-dark-emphasis fw-semibold", children: "Within 1-3 business days" })] })] })] }) }), _jsx("div", { className: "col", children: _jsxs("div", { className: "ps-lg-2 ps-xl-3", children: [_jsx("h6", { children: "Returns" }), _jsx("p", { children: "If you are not happy with your purchase, you can return it within 30 days for a full refund or exchange." })] }) })] }) }), _jsxs("div", { "aria-labelledby": "reviews-tab", className: "tab-pane fade", id: "reviews-tab-pane", role: "tabpanel", children: [_jsxs("div", { className: "d-sm-flex align-items-center justify-content-between border-bottom pb-2 pb-sm-3", children: [_jsxs("div", { className: "mb-3 me-sm-3", children: [_jsx("h2", { className: "h5 pb-2 mb-1", children: "Customer reviews" }), _jsxs("div", { className: "d-flex align-items-center text-body-secondary fs-sm", children: [_jsxs("div", { className: "d-flex gap-1 me-2", children: [_jsx("i", { className: "ci-star-filled text-warning" }), _jsx("i", { className: "ci-star-filled text-warning" }), _jsx("i", { className: "ci-star-filled text-warning" }), _jsx("i", { className: "ci-star-filled text-warning" }), _jsx("i", { className: "ci-star text-body-tertiary opacity-75" })] }), "Based on ", product.reviews_count, " reviews"] })] }), _jsx("button", { className: "btn btn-outline-dark mb-3", "data-bs-target": "#reviewForm", "data-bs-toggle": "modal", type: "button", children: "Leave a review" }), product && (_jsx(ProductReviewForm, { productSlug: product.slug, onReviewSubmitted: () => {
                                                                            console.log('Review submitted, refresh reviews.');
                                                                        } }))] }), _jsx("div", { className: "bg-body-tertiary rounded-4 p-4 p-sm-5", children: _jsx("div", { className: "vstack gap-3 gap-md-4 mt-n3", children: product.reviews && product.reviews.length > 0 ? (product.reviews.map((review) => (_jsxs("div", { className: "mt-3", children: [_jsxs("div", { className: "d-flex align-items-center justify-content-between gap-3 mb-3", children: [_jsxs("div", { className: "d-flex align-items-center", children: [_jsx("div", { className: "ratio ratio-1x1 flex-shrink-0 bg-body-secondary rounded-circle overflow-hidden", style: { width: "40px" }, children: _jsx("img", { alt: review.username, src: review.avatar || '/assets/img/us/logos/avatar.png' }) }), _jsxs("div", { className: "ps-2 ms-1", children: [_jsx("div", { className: "fs-sm fw-semibold text-dark-emphasis mb-1", children: review.name || review.username }), _jsx("div", { className: "fs-xs text-body-secondary", children: new Date(review.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) })] })] }), _jsxs("div", { className: "d-flex gap-2", children: [_jsxs("button", { className: "btn btn-sm btn-secondary bg-body border-0 animate-pulse rounded-pill", type: "button", children: [_jsx("i", { className: "ci-heart animate-target fs-sm ms-n1 me-1" }), review.rating] }), _jsx("button", { "aria-label": "Reply", className: "btn btn-icon btn-sm btn-secondary bg-body border-0 animate-slide-end rounded-circle", type: "button", children: _jsx("i", { className: "ci-corner-up-right animate-target fs-sm" }) })] })] }), _jsx("p", { className: "fs-sm mb-0 text-break", children: review.comment })] }, review.id)))) : (_jsx("p", { className: "fs-sm text-body-secondary", children: "No comments available for this product just yet." })) }) })] })] })] }), _jsx("h2", { className: "h4 pt-5 mt-md-2 mb-lg-4", children: "Tags" }), _jsx("div", { className: "d-flex flex-wrap gap-2 mt-n1", children: product.tags && product.tags.length > 0 ? (product.tags.slice(1).map((tag, index) => (_jsx(Link, { className: "btn btn-sm btn-secondary rounded-pill fs-sm text-body-emphasis", to: `/products/${tag}`, children: tag }, index)))) : (_jsxs(_Fragment, { children: [_jsx(Link, { className: "btn btn-sm btn-secondary rounded-pill fs-sm text-body-emphasis", to: "/products", children: "New Goods" }), _jsx(Link, { className: "btn btn-sm btn-secondary rounded-pill fs-sm text-body-emphasis", to: "/products", children: "Go to products" }), _jsx(Link, { className: "btn btn-sm btn-secondary rounded-pill fs-sm text-body-emphasis", to: "/products", children: "Recharge" }), _jsx(Link, { className: "btn btn-sm btn-secondary rounded-pill fs-sm text-body-emphasis", to: "/products", children: "Digital" }), _jsx(Link, { className: "btn btn-sm btn-secondary rounded-pill fs-sm text-body-emphasis", to: "/products", children: "Physical" })] })) })] }) })] }), _jsx(ProductRecommendations, {})] }) }));
};
export default ProductDetails;
