// ================================
// FILE: components/ManualInstallButton.tsx
// Purpose: Manual PWA installation trigger button
// ================================

import { usePWA } from '../../hooks/usePWA';

interface ManualInstallButtonProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const ManualInstallButton = ({ 
  className = "btn btn-outline-primary btn-sm position-fixed",
  style = { top: '20px', right: '20px', zIndex: 1000 },
  children = "Install App"
}: ManualInstallButtonProps) => {
  const { canInstall, isInstalling, install } = usePWA();

  if (!canInstall) return null;

  const handleClick = async () => {
    if (!install) return;
    
    try {
      await install();
    } catch (error) {
      console.error('Installation failed:', error);
    }
  };

  return (
    <button 
      className={className}
      style={style}
      onClick={handleClick}
      disabled={isInstalling}
      title="Install Salesnet as an app"
      aria-label={isInstalling ? "Installing application" : "Install application"}
    >
      {isInstalling ? (
        <>
          <span 
            className="spinner-border spinner-border-sm me-1" 
            role="status" 
            aria-hidden="true" 
          />
          Installing...
        </>
      ) : (
        <>
          <i className="ci-download me-1" aria-hidden="true" />
          {children}
        </>
      )}
    </button>
  );
};

// SEE USAGE:
{/* <ManualInstallButton />
<ManualInstallButton className="custom-class" style={{ top: '10px' }}>
  Install Now
</ManualInstallButton> */}

export default ManualInstallButton;