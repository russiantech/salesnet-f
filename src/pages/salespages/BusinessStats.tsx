import React from 'react';

export const BusinessStats = ({ productsCount, followersCount, rating }) => {
  return (
    <div className="d-flex flex-wrap gap-4">
      <div className="stat-item">
        <span className="stat-value">{productsCount}</span>
        <span className="stat-label">Products</span>
      </div>
      <div className="stat-item">
        <span className="stat-value">{followersCount}</span>
        <span className="stat-label">Followers</span>
      </div>
      <div className="stat-item">
        <span className="stat-value">{rating.toFixed(1)}</span>
        <span className="stat-label">Rating</span>
      </div>
    </div>

    // <div className="d-flex flex-wrap gap-3 mb-3 text-muted small">
    //     <div className='badge border rounded-pill'><i className="ci-star me-1 text-warning"></i> {rating || '0.0'} Rating</div>
    //     <div className='badge border rounded-pill'><i className="ci-heart me-1 text-danger"></i> {followersCount || 0} Followers</div>
    //     <div className='badge border rounded-pill'><i className="ci-shopping-cart me-1 text-warning"></i> {productsCount || 0} Products</div>
    //   </div>
  );
};

export const BusinessStats2 = ({ productsCount, followersCount, rating }) => {
  return (

    <div className="d-flex flex-wrap gap-3 mb-3 text-muted small">
        <div className='badge border rounded-pill text-warning'><i className="ci-star me-1"></i> {rating || '0.0'} Ratings</div>
        <div className='badge border rounded-pill text-danger'><i className="ci-heart me-1"></i> {followersCount || 0} Followers</div>
        <div className='badge border rounded-pill text-success'><i className="ci-shopping-cart me-1"></i> {productsCount || 0} Products</div>
      </div>
  );
};

// export default {BusinessStats, };