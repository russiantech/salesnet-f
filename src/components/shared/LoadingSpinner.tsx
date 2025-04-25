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

const LoadingSpinner = ({ size = 'md' }) => (
    <div className={`spinner-border text-primary spinner-border-${size}`} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );

export default LoadingSpinner
