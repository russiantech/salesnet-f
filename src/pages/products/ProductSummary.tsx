import { useState } from "react";
import { FavoriteButton } from "./interactions/FavoriteButton";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/currencyUtils";
import { BasketButton } from "./interactions/BasketButton";
import { CompareButton } from "./interactions/CompareButton";
import { ProductBadge, ProductRating } from "./ProductFeatures";

export const ProductSummary = ({
  product,
  showDetails = false,
  showMetrics= false,
  showBadge = true,
  discountBadge = true,
  showCheckbox = false,
  isChecked = false,
  onCheckChange = () => {}
}) => {
  const [loadingState, setLoadingState] = useState({
    favorites: false,
    compare: false,
    basket: false
  });

  const [inFavorites, setInFavorites] = useState(product.is_favorite || false);
  const [inCompare, setInCompare] = useState(product.is_compared || false);


  // useProductInteractions(product.id, isAuthenticated);

  // Calculate discount percentage if available

  const badgeType = () => {
    if (product.metrics?.orders > 10) return 'hot';
    if (product.is_new) return 'new';
    if (product.discount_price || product.discount) return 'sale';
    if (product.stock < 5) return 'limited';
    return null;
  };

  const renderPrice = () => {
    const hasDiscount = product.discount_price || product.discount;
    const discountedPrice = product.discount_price || 
                          (product.discount ? product.discount.calculated_price : null);
    
    return (
      <div className="h5 lh-1 mb-0">
        {hasDiscount ? (
          <>
            <span className="text-danger">{formatCurrency(discountedPrice)}</span>
            <span className="text-decoration-line-through text-body-tertiary fs-sm ms-2">
              {formatCurrency(product.price)}
            </span>
            {discountBadge && product.discount && (
              <span className="badge bg-danger bg-opacity-10 text-danger fs-xs ms-2">
                {product.discount.discount_type === 'percentage'
                  ? `${product.discount.discount_value}% OFF`
                  : `${formatCurrency(product.discount.discount_value)} OFF`}
              </span>
            )}
          </>
        ) : (
          formatCurrency(product.price)
        )}
      </div>
    );
  };

  const handleCheckboxChange = (e) => {
    if (onCheckChange) {
      onCheckChange(e.target.checked);
    }
  };

  return (
    <div className='col' key={product.id}>
      <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
        <div className="position-relative">
          {/* Checkbox for selection */}
          {showCheckbox && (
            <div className="position-absolute top-0 end-0 z-3 pt-1 pe-1 mt-2 me-2">
              <div className="form-check fs-lg">
                <input 
                  type="checkbox" 
                  className="form-check-input select-card-check" 
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
              </div>
            </div>
          )}

          {/* Desktop action buttons - hide when checkbox is shown */}
          {!showCheckbox && (
            <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
              <div className="d-flex flex-column gap-2">
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
              </div>
            </div>
          )}

          {/* Mobile dropdown menu - hide when checkbox is shown */}
          {!showCheckbox && (
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
                  <FavoriteButton 
                    productId={product.id}
                    productName={product.name}
                    initialFavorite={product.is_favorite}
                    className="dropdown-item d-flex align-items-center"
                  />
                </li>
                <li>
                  <CompareButton 
                    productId={product.id}
                    productName={product.name}
                    initialCompared={product.is_compared}
                    showText={false}
                    className="dropdown-item d-flex align-items-center"
                  />
                </li>
              </ul>
            </div>
          )}

          {/* Product image link */}
          <Link className="d-block rounded-top overflow-hidden p-3 p-sm-4" to={`/products/${product.slug}`}>
            {showBadge && badgeType() && <ProductBadge type={badgeType()} />}
            <div className="ratio" style={{ '--cz-aspect-ratio': 'calc(240 / 258 * 100%)' }}>
              <img 
                src={product.image_urls?.[0] || product.image || '/assets/img/placeholder.jpg'}
                alt={product.name}
                className="img-fluid object-fit-cover rounded"
                onError={(e) => {
                  e.target.src = '/assets/img/placeholder.jpg';
                }}
              />
            </div>
          </Link>
        </div>

        {/* Product info */}
        <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
          <ProductRating
            averageRating={product.average_rating}
            reviewsCount={product.reviews_count}
          />

          <h3 className="pb-1 mb-2">
            <Link className="d-block fs-sm fw-medium text-truncate" to={`/products/${product.slug}`}>
              <span className="animate-target">{product.name}</span>
            </Link>
          </h3>

          <div className="d-flex align-items-center justify-content-between">
            {renderPrice()}
            {/* {!showCheckbox && <BasketButton productId={product.id} productName={product.name} />} */}
            <BasketButton productId={product.id} productName={product.name} />
          </div>
        </div>

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
    </div>
  );
};

export default ProductSummary;