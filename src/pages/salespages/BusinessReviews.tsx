import React, { useState, useEffect } from 'react';
import ReviewAxiosService from '../../services/net/ReviewsAxiosService';
// import { ReviewAxiosService } from '../../services/net/ReviewAxiosService';

const BusinessReviews = ({ businessId, type }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await ReviewAxiosService.getForBusiness(businessId, type);
        setReviews(response.data.reviews);
        setAverageRating(response.data.average_rating);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchReviews();
  }, [businessId, type]);

  if (loading) {
    return <div>Loading reviews...</div>;
  }

  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="h4 mb-0">Customer Reviews</h2>
          <div className="rating-badge bg-primary text-white rounded-pill px-3 py-1">
            {averageRating.toFixed(1)} <i className="ci-star"></i>
          </div>
        </div>
        
        {reviews.length === 0 ? (
          <div className="text-center py-4">
            <i className="ci-star fs-1 text-muted mb-3"></i>
            <p>No reviews yet</p>
          </div>
        ) : (
          <div className="review-list">
            {reviews.map(review => (
              <div key={review.id} className="review-item border-bottom pb-4 mb-4">
                <div className="d-flex align-items-center mb-2">
                  <img 
                    src={review.user.avatar || '/assets/img/us/logos/avatar.png'} 
                    alt={review.user.name} 
                    className="rounded-circle me-2" 
                    width="40"
                  />
                  <div>
                    <strong>{review.user.name}</strong>
                    <div className="text-muted small">
                      {new Date(review.created_at).toLocaleDateString()}
                    </div>
                  </div>
                </div>
                
                <div className="rating mb-2">
                  {[...Array(5)].map((_, i) => (
                    <i 
                      key={i} 
                      className={`ci-star${i < review.rating ? '-filled' : ''} text-warning`}
                    ></i>
                  ))}
                </div>
                
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BusinessReviews;