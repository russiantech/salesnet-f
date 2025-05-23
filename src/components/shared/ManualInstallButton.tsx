// ================================
// FILE: components/ManualInstallButton.js (Optional)
// Purpose: Manual trigger button for users who want to install immediately
// ================================


import React from 'react';
import { usePWA } from '../../hooks/usePWA';

const ManualInstallButton = ({ 
  className = "btn btn-outline-primary btn-sm position-fixed",
  style = { top: '20px', right: '20px', zIndex: 1000 },
  children = "Install App" 
}) => {
  const { canInstall, isInstalling, install } = usePWA();

  console.log('ManualInstallButton render:', { canInstall, isInstalling });

  if (!canInstall) return null;

  const handleClick = async () => {
    console.log('ManualInstallButton: Clicked');
    try {
      const result = await install();
      console.log('ManualInstallButton: Install result:', result);
    } catch (error) {
      console.error('ManualInstallButton: Installation failed:', error);
    }
  };

  return (
    <button 
      className={className}
      style={style}
      onClick={handleClick}
      disabled={isInstalling}
      title="Install Salesnet as an app"
    >
      {isInstalling ? (
        <>
          <span className="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
          Installing...
        </>
      ) : (
        <>
          <i className="ci-download me-1"></i>
          {children}
        </>
      )}
    </button>
  );
};

export default ManualInstallButton;
