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
import { CompareButton } from './interactions/CompareButton';
import { FavoriteButton } from './interactions/FavoriteButton';

/**
 * Enhanced Product Card component with loading animations for all interactions
 * @param {Object} props - Component props
 * @param {Object} props.product - Product data
 * @param {boolean} props.showDetails - Whether to show additional details
 * @param {boolean} props.showBadge - Whether to show product badge
 */


export const ProductCard = ({
  product,
  showDetails = false,
  showBadge = true
}) => {
  const signinCanvasRef = useRef<HTMLDivElement>(null);
  const [loadingState, setLoadingState] = useState({
    favorites: false,
    compare: false,
    basket: false
  });

  const [inFavorites, setInFavorites] = useState(product.is_favorite || false);
  const [inCompare, setInCompare] = useState(product.is_compared || false);

  const isAuthenticated = UsersService.isAuthenticated();

  const {
    toggleFavorites,
    addToBasket
  } = useProductInteractions(product.id, isAuthenticated);

  const handleInteraction = async (action: () => Promise<void>, type: 'favorites' | 'compare' | 'basket') => {
    setLoadingState(prev => ({ ...prev, [type]: true }));
    try {
      await action();
      if (type === 'favorites') setInFavorites(!inFavorites);
      if (type === 'compare') setInCompare(!inCompare);
    } finally {
      setLoadingState(prev => ({ ...prev, [type]: false }));
    }
  };

  const badgeType = () => {
    if (product.metrics?.orders > 10) return 'hot';
    if (product.is_new) return 'new';
    if (product.discount_price) return 'sale';
    if (product.stock < 5) return 'limited';
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
      NotificationService.showDialog(
        `Product ${!inFavorites ? 'added to' : 'removed from'} favorites`,
        'success'
      );
    } catch (error) {
      NotificationService.showDialog('Failed to update favorites', 'error');
    } finally {
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
      NotificationService.showDialog(
        `Product ${!inCompare ? 'added to' : 'removed from'} compare list`,
        'success'
      );
    } catch (error) {
      NotificationService.showDialog('Failed to update compare list', 'error');
    } finally {
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
    } catch (error) {
      NotificationService.showDialog('Failed to add product to basket', 'error');
    } finally {
      setLoadingState(prev => ({ ...prev, basket: false }));
    }

  };

  return (
    <>
      <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
        {/* ... other product card code ... */}
        <div className="position-relative">

          {/* Desktop action buttons */}
          <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
            <div className="d-flex flex-column gap-2">
              {/* <button
                type="button"
                className={`btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex${inFavorites ? ' active' : ''}`}
                aria-label={inFavorites ? "Remove from Favorites" : "Add to Favorites"}
                // onClick={() => handleInteraction(toggleWishlist, 'favorites')}
                onClick={() => handleInteraction(() => handleToggleFavorite(), 'favorites')}
                disabled={loadingState.favorites}
                data-bs-toggle="offcanvas"
                data-bs-target="#quickSigninCanvas"
                aria-controls="quickSigninCanvas"
              >
                {loadingState.favorites ? (
                  <LoadingZoom />
                ) : (
                  <i className={`ci-heart${inFavorites ? '-filled' : ''} fs-base animate-target`} />
                )}
              </button>

              <button
                type="button"
                className={`btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex${inCompare ? ' active' : ''}`}
                aria-label={inCompare ? "Remove from Compare" : "Add to Compare"}
                onClick={() => handleInteraction(() => handleToggleCompare(), 'compare')} // Replace with actual compare function
                disabled={loadingState.compare}
                data-bs-toggle="offcanvas"
                data-bs-target="#quickSigninCanvas"
                aria-controls="quickSigninCanvas"
              >
                {loadingState.compare ? (
                  <LoadingZoom />
                ) : (
                  <i className="ci-refresh-cw fs-base animate-target" />
                )}
              </button> */}

{/* <div className="product-actions"> */}
      <FavoriteButton 
        productId={product.id}
        productName={product.name}
        initialFavorite={product.is_favorite}
        className="d-none d-lg-inline-flex"
      />
      <CompareButton 
        productId={product.id}
        productName={product.name}
        initialCompared={product.is_compared}
        className="d-none d-lg-inline-flex"
      />
    {/* </div> */}
              
            </div>
          </div>


          {/* Mobile dropdown menu */}
          <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
            <button
              type="button"
              className="btn btn-icon btn-sm btn-secondary bg-body"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              aria-label="More actions"
            >
              <i className="ci-more-vertical fs-lg" />
            </button>
            <ul className="dropdown-menu dropdown-menu-end fs-xs p-2" style={{ minWidth: 'auto' }}>
              <li>

                {/* <button
                  className="dropdown-item d-flex align-items-center"
                  // onClick={handleToggleFavorite}
                  onClick={() => handleInteraction(() => handleToggleFavorite(), 'favorites')}
                  disabled={loadingState.favorites}
                  data-bs-toggle="offcanvas"
                  data-bs-target="#quickSigninCanvas"
                  aria-controls="quickSigninCanvas"
                >
                  {loadingState.favorites ? (
                    <LoadingZoom />
                  ) : (
                    <i className={`ci-heart${inFavorites ? '-filled' : ''} fs-sm ms-n1 me-2`} />
                  )}
                  {inFavorites ? 'Remove from Favorites' : 'Add to Favorites'}
                </button> */}
                <FavoriteButton 
                productId={product.id}
                productName={product.name}
                initialFavorite={product.is_favorite}
                className="dropdown-item d-flex align-items-center"
              />
      
              </li>
              <li>
                {/* <button
                  className="dropdown-item d-flex align-items-center"
                  // onClick={handleToggleCompare}
                  onClick={() => handleInteraction(() => handleToggleCompare(), 'compare')}
                  disabled={loadingState.compare}
                  data-bs-toggle="offcanvas"
                  data-bs-target="#quickSigninCanvas"
                  aria-controls="quickSigninCanvas"
                >
                  {loadingState.compare ? (
                    <LoadingZoom />
                  ) : (
                    <i className="ci-refresh-cw fs-sm ms-n1 me-2" />
                  )}
                  {inCompare ? 'Remove from Compare' : 'Add to Compare'}
                </button> */}

              <CompareButton 
                productId={product.id}
                productName={product.name}
                initialCompared={product.is_compared}
                className="dropdown-item d-flex align-items-center"
              />

              </li>
            </ul>
          </div>

          {/* Product image link */}
          <Link className="d-block rounded-top overflow-hidden p-3 p-sm-4" to={`/products/${product.slug}`}>
            {showBadge && badgeType() && <ProductBadge type={badgeType()} />}
            <div className="ratio" style={{ '--cz-aspect-ratio': 'calc(240 / 258 * 100%)' }}>
              <img src={product.image_urls?.[0] || '/images/placeholder-product.jpg'}
                alt={product.name}
                className="img-fluid object-fit-cover"
                onError={(e) => {
                  e.target.src = '/images/placeholder-product.jpg';
                }}
              />
            </div>
          </Link>


        </div>

        {/* ... rest of product card ... */}
        {/* Product info */}
        <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
          {/* Rating display */}
          <ProductRating
            averageRating={product.average_rating}
            reviewsCount={product.reviews_count}
          />

          {/* Product name */}
          <h3 className="pb-1 mb-2">
            <Link className="d-block fs-sm fw-medium text-truncate" to={`/products/${product.slug}`}>
              <span className="animate-target">{product.name}</span>
            </Link>
          </h3>

          {/* Price and basket button */}
          <div className="d-flex align-items-center justify-content-between">
            <div className="h5 lh-1 mb-0">
              {product.discount_price ? (
                <>
                  <span className="text-danger">{formatPrice(product.discount_price)}</span>
                  <span className="text-decoration-line-through text-body-tertiary fs-sm ms-2">
                    {formatPrice(product.price)}
                  </span>
                </>
              ) : (
                formatPrice(product.price)
              )}
            </div>

            <BasketButton productId={product.id} productName={product.name} />

          </div>
        </div>

        {/* Additional product details */}
        {showDetails && (
          <div className="product-card-details position-absolute top-100 start-0 w-100 bg-body rounded-bottom shadow mt-n2 p-3 pt-1">
            <span className="position-absolute top-0 start-0 w-100 bg-body mt-n2 py-2" />
            <ul className="list-unstyled d-flex flex-column gap-2 m-0">
              <li className="d-flex align-items-center">
                <span className="fs-xs">Category:</span>
                <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                <span className="text-dark-emphasis fs-xs fw-medium text-end">
                  {product.categories?.[0]?.name || 'Uncategorized'}
                </span>
              </li>
              {product.metrics?.orders && (
                <li className="d-flex align-items-center">
                  <span className="fs-xs">Orders:</span>
                  <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                  <span className="text-dark-emphasis fs-xs fw-medium text-end">
                    {product.metrics.orders}
                  </span>
                </li>
              )}
              <li className="d-flex align-items-center">
                <span className="fs-xs">Stock:</span>
                <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                <span className="text-dark-emphasis fs-xs fw-medium text-end">
                  {product.stock} available
                </span>
              </li>
              {product.trend_score && (
                <li className="d-flex align-items-center">
                  <span className="fs-xs">Trend Score:</span>
                  <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                  <span className="text-dark-emphasis fs-xs fw-medium text-end">
                    {product.trend_score.toFixed(1)}
                  </span>
                </li>
              )}
            </ul>
          </div>
        )}

      </div>

    </>
  );
};


export default ProductCard;
