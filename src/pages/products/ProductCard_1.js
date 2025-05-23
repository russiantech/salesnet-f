import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// components/product/ProductCard.jsx
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../utils/currencyUtils';
import { ProductBadge, ProductRating } from './ProductFeatures';
import { useProductInteractions } from '../../hooks/useProductInteractions';
import { NotificationService } from '../../services/local/NotificationService';
import { UsersService } from '../../services/local/UsersService';
import { LoadingZoom } from '../../components/shared/LoadingSpinner';
import { BasketButton } from './interactions/BasketButton';
/**
 * Enhanced Product Card component with loading animations for all interactions
 * @param {Object} props - Component props
 * @param {Object} props.product - Product data
 * @param {boolean} props.showDetails - Whether to show additional details
 * @param {boolean} props.showBadge - Whether to show product badge
 */
export const ProductCard = ({ product, showDetails = false, showBadge = true }) => {
    const signinCanvasRef = useRef(null);
    const [loadingState, setLoadingState] = useState({
        favorites: false,
        compare: false,
        basket: false
    });
    const [inFavorites, setInFavorites] = useState(product.is_favorite || false);
    const [inCompare, setInCompare] = useState(product.is_compared || false);
    const isAuthenticated = UsersService.isAuthenticated();
    const { toggleFavorites, addToBasket } = useProductInteractions(product.id, isAuthenticated);
    const handleInteraction = async (action, type) => {
        setLoadingState(prev => ({ ...prev, [type]: true }));
        try {
            await action();
            if (type === 'favorites')
                setInFavorites(!inFavorites);
            if (type === 'compare')
                setInCompare(!inCompare);
        }
        finally {
            setLoadingState(prev => ({ ...prev, [type]: false }));
        }
    };
    const badgeType = () => {
        if (product.metrics?.orders > 10)
            return 'hot';
        if (product.is_new)
            return 'new';
        if (product.discount_price)
            return 'sale';
        if (product.stock < 5)
            return 'limited';
        return null;
    };
    // Handle adding/removing from favorites
    const handleToggleFavorite = async () => {
        if (!isAuthenticated) {
            NotificationService.showDialog('Please sign in to add items to favorites', 'info');
            return;
        }
        setLoadingState(prev => ({ ...prev, favorites: true }));
        try {
            await toggleFavorites();
            setInFavorites(!inFavorites);
            NotificationService.showDialog(`Product ${!inFavorites ? 'added to' : 'removed from'} favorites`, 'success');
        }
        catch (error) {
            NotificationService.showDialog('Failed to update favorites', 'error');
        }
        finally {
            setLoadingState(prev => ({ ...prev, favorites: false }));
        }
    };
    // Handle adding/removing from compare
    const handleToggleCompare = async () => {
        if (!isAuthenticated) {
            NotificationService.showDialog('Please sign in to add items to compare', 'info');
            return;
        }
        setLoadingState(prev => ({ ...prev, compare: true }));
        try {
            // Here you would call your comparison service
            // We'll simulate an API call
            await new Promise(resolve => setTimeout(resolve, 500));
            setInCompare(!inCompare);
            NotificationService.showDialog(`Product ${!inCompare ? 'added to' : 'removed from'} compare list`, 'success');
        }
        catch (error) {
            NotificationService.showDialog('Failed to update compare list', 'error');
        }
        finally {
            setLoadingState(prev => ({ ...prev, compare: false }));
        }
    };
    // Handle adding to basket
    const handleAddToBasket = async () => {
        if (!isAuthenticated) {
            NotificationService.showDialog('Please sign in to add items to basket', 'info');
            return;
        }
        setLoadingState(prev => ({ ...prev, basket: true }));
        try {
            await addToBasket(1);
            NotificationService.showDialog('Product added to basket', 'success');
        }
        catch (error) {
            NotificationService.showDialog('Failed to add product to basket', 'error');
        }
        finally {
            setLoadingState(prev => ({ ...prev, basket: false }));
        }
    };
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "product-card animate-underline hover-effect-opacity bg-body rounded", children: [_jsxs("div", { className: "position-relative", children: [_jsx("div", { className: "position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3", children: _jsxs("div", { className: "d-flex flex-column gap-2", children: [_jsx("button", { type: "button", className: `btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex${inFavorites ? ' active' : ''}`, "aria-label": inFavorites ? "Remove from Favorites" : "Add to Favorites", 
                                        // onClick={() => handleInteraction(toggleWishlist, 'favorites')}
                                        onClick: () => handleInteraction(() => handleToggleFavorite(), 'favorites'), disabled: loadingState.favorites, "data-bs-toggle": "offcanvas", "data-bs-target": "#quickSigninCanvas", "aria-controls": "quickSigninCanvas", children: loadingState.favorites ? (_jsx(LoadingZoom, {})) : (_jsx("i", { className: `ci-heart${inFavorites ? '-filled' : ''} fs-base animate-target` })) }), _jsx("button", { type: "button", className: `btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex${inCompare ? ' active' : ''}`, "aria-label": inCompare ? "Remove from Compare" : "Add to Compare", onClick: () => handleInteraction(() => handleToggleCompare(), 'compare'), disabled: loadingState.compare, "data-bs-toggle": "offcanvas", "data-bs-target": "#quickSigninCanvas", "aria-controls": "quickSigninCanvas", children: loadingState.compare ? (_jsx(LoadingZoom, {})) : (_jsx("i", { className: "ci-refresh-cw fs-base animate-target" })) })] }) }), _jsxs("div", { className: "dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2", children: [_jsx("button", { type: "button", className: "btn btn-icon btn-sm btn-secondary bg-body", "data-bs-toggle": "dropdown", "aria-expanded": "false", "aria-label": "More actions", children: _jsx("i", { className: "ci-more-vertical fs-lg" }) }), _jsxs("ul", { className: "dropdown-menu dropdown-menu-end fs-xs p-2", style: { minWidth: 'auto' }, children: [_jsx("li", { children: _jsxs("button", { className: "dropdown-item d-flex align-items-center", 
                                                // onClick={handleToggleFavorite}
                                                onClick: () => handleInteraction(() => handleToggleFavorite(), 'favorites'), disabled: loadingState.favorites, "data-bs-toggle": "offcanvas", "data-bs-target": "#quickSigninCanvas", "aria-controls": "quickSigninCanvas", children: [loadingState.favorites ? (_jsx(LoadingZoom, {})) : (_jsx("i", { className: `ci-heart${inFavorites ? '-filled' : ''} fs-sm ms-n1 me-2` })), inFavorites ? 'Remove from Favorites' : 'Add to Favorites'] }) }), _jsx("li", { children: _jsxs("button", { className: "dropdown-item d-flex align-items-center", 
                                                // onClick={handleToggleCompare}
                                                onClick: () => handleInteraction(() => handleToggleCompare(), 'compare'), disabled: loadingState.compare, "data-bs-toggle": "offcanvas", "data-bs-target": "#quickSigninCanvas", "aria-controls": "quickSigninCanvas", children: [loadingState.compare ? (_jsx(LoadingZoom, {})) : (_jsx("i", { className: "ci-refresh-cw fs-sm ms-n1 me-2" })), inCompare ? 'Remove from Compare' : 'Add to Compare'] }) })] })] }), _jsxs(Link, { className: "d-block rounded-top overflow-hidden p-3 p-sm-4", to: `/products/${product.slug}`, children: [showBadge && badgeType() && _jsx(ProductBadge, { type: badgeType() }), _jsx("div", { className: "ratio", style: { '--cz-aspect-ratio': 'calc(240 / 258 * 100%)' }, children: _jsx("img", { src: product.image_urls?.[0] || '/images/placeholder-product.jpg', alt: product.name, className: "img-fluid object-fit-cover", onError: (e) => {
                                            e.target.src = '/images/placeholder-product.jpg';
                                        } }) })] })] }), _jsxs("div", { className: "w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3", children: [_jsx(ProductRating, { averageRating: product.average_rating, reviewsCount: product.reviews_count }), _jsx("h3", { className: "pb-1 mb-2", children: _jsx(Link, { className: "d-block fs-sm fw-medium text-truncate", to: `/products/${product.slug}`, children: _jsx("span", { className: "animate-target", children: product.name }) }) }), _jsxs("div", { className: "d-flex align-items-center justify-content-between", children: [_jsx("div", { className: "h5 lh-1 mb-0", children: product.discount_price ? (_jsxs(_Fragment, { children: [_jsx("span", { className: "text-danger", children: formatPrice(product.discount_price) }), _jsx("span", { className: "text-decoration-line-through text-body-tertiary fs-sm ms-2", children: formatPrice(product.price) })] })) : (formatPrice(product.price)) }), _jsx("button", { type: "button", className: "product-card-button btn btn-icon btn-secondary animate-slide-end ms-2", "aria-label": "Add to Basket", onClick: () => handleInteraction(() => handleAddToBasket(), 'basket'), disabled: loadingState.basket, "data-bs-toggle": "offcanvas", "data-bs-target": "#quickSigninCanvas", "aria-controls": "quickSigninCanvas", children: loadingState.basket ? (_jsx(LoadingZoom, {})) : (_jsx("i", { className: "ci-shopping-cart fs-base animate-target" })) }), _jsx(BasketButton, { productId: product.id, productName: product.name })] })] }), showDetails && (_jsxs("div", { className: "product-card-details position-absolute top-100 start-0 w-100 bg-body rounded-bottom shadow mt-n2 p-3 pt-1", children: [_jsx("span", { className: "position-absolute top-0 start-0 w-100 bg-body mt-n2 py-2" }), _jsxs("ul", { className: "list-unstyled d-flex flex-column gap-2 m-0", children: [_jsxs("li", { className: "d-flex align-items-center", children: [_jsx("span", { className: "fs-xs", children: "Category:" }), _jsx("span", { className: "d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" }), _jsx("span", { className: "text-dark-emphasis fs-xs fw-medium text-end", children: product.categories?.[0]?.name || 'Uncategorized' })] }), product.metrics?.orders && (_jsxs("li", { className: "d-flex align-items-center", children: [_jsx("span", { className: "fs-xs", children: "Orders:" }), _jsx("span", { className: "d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" }), _jsx("span", { className: "text-dark-emphasis fs-xs fw-medium text-end", children: product.metrics.orders })] })), _jsxs("li", { className: "d-flex align-items-center", children: [_jsx("span", { className: "fs-xs", children: "Stock:" }), _jsx("span", { className: "d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" }), _jsxs("span", { className: "text-dark-emphasis fs-xs fw-medium text-end", children: [product.stock, " available"] })] }), product.trend_score && (_jsxs("li", { className: "d-flex align-items-center", children: [_jsx("span", { className: "fs-xs", children: "Trend Score:" }), _jsx("span", { className: "d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" }), _jsx("span", { className: "text-dark-emphasis fs-xs fw-medium text-end", children: product.trend_score.toFixed(1) })] }))] })] }))] }) }));
};
export default ProductCard;
