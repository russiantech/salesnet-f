import React from 'react'

const LoadingSpinner_0 = ({ size = 'md' }) => (
  <div className={`spinner-border text-primary spinner-border-${size}`} role="status">
      <span className="visually-hidden">Loading...</span>
  </div>
);

const LoadingSpinner = ({ size = 'md' }) => (
  <div className="loading-spinner">
      <div className="spinner"></div>
  </div>
);

export const LoadingZoom = ({ size = 'sm' }) => (
  <span className="loading-zoom">
      <span className={`spinner-grow spinner-grow-${size}`} role="status" aria-hidden="true"></span>
      <span className="visually-hidden">Loading...</span>
  </span>
);


// Export all components as default
// const LoadingComponents = {
//   LoadingSpinner_0,
//   LoadingSpinner,
//   LoadingZoom,
// };
// export default LoadingComponents;

export default LoadingSpinner
// export default { LoadingSpinner, LoadingZoom }
