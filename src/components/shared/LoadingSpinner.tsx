import React from 'react'

// const LoadingSpinner = () => {
//     return (
//         <span>
//         <div style={{height:'20px', width:'20px'}} className="spinner-border spinner-border-sm" role="status">
//             <span className="visually-hidden">Loading...</span>
//         </div>
//         </span>
//     )
// }

const LoadingSpinner_0 = ({ size = 'md' }) => (
    <div className={`spinner-border text-primary spinner-border-${size}`} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );

const LoadingSpinner = ({ size = 'md' }) => (
  <div className="loading-spinner"><div className="spinner"></div></div>
);

export default LoadingSpinner
