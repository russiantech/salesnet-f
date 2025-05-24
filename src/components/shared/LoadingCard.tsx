import { Link } from 'react-router-dom';

interface LoadingCardProps {
  className?: string;
  message?: string;
  itemCount?: number;
}

const LoadingCard = ({ 
  className = '', 
  message = 'Loading content...',
  itemCount = 1 
}: LoadingCardProps) => {
  // Create array of loading items based on itemCount
  const loadingItems = Array.from({ length: itemCount }, (_, index) => (
    <div key={index} className={`col ${className}`} aria-hidden="true">
      <div className="position-relative placeholder-wave">
        <div className="card-img-top placeholder ratio ratio-16x9" />
        <i className="ci-image position-absolute top-50 start-50 translate-middle fs-1 opacity-40" />
      </div>
      <div className="card-body">
        <h5 className="card-title placeholder-glow">
          <span className="placeholder col-6" />
          <span className="visually-hidden">{message}</span>
        </h5>
        <p className="card-text placeholder-glow">
          <span className="placeholder placeholder-sm col-7 me-2" />
          <span className="placeholder placeholder-sm col-4" />
          <span className="placeholder placeholder-sm col-4 me-2" />
          <span className="placeholder placeholder-sm col-6" />
          <span className="placeholder placeholder-sm col-8" />
        </p>
        <Link 
          to="#" 
          className="btn btn-primary disabled placeholder col-6 placeholder-wave" 
          tabIndex={-1}
          aria-hidden="true"
        >
          &nbsp;
        </Link>
      </div>
    </div>
  ));

  return <>{loadingItems}</>;
};


// USAGE:
// Single loading card with default message
{/* <LoadingCard />

// Multiple loading cards with custom message
<LoadingCard itemCount={3} message="Loading products..." />

// Styled loading card
<LoadingCard className="mb-4" /> */}

export default LoadingCard;