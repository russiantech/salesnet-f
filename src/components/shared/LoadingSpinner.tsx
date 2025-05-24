interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const LoadingSpinner = ({ size = 'md', className }: LoadingSpinnerProps) => {
  return (
    <div className={`loading-spinner ${className || ''}`}>
      <div className="spinner"></div>
    </div>
  );
};

interface LoadingZoomProps {
  size?: 'sm' | 'md' | 'lg';
}

export const LoadingZoom = ({ size = 'sm' }: LoadingZoomProps) => (
  <span className="loading-zoom">
    <span className={`spinner-grow spinner-grow-${size}`} role="status" aria-hidden="true"></span>
    <span className="visually-hidden">Loading...</span>
  </span>
);

export default LoadingSpinner;