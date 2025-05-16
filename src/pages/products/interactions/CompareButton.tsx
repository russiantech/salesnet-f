// src/components/product/CompareButton.tsx
import { useState, useEffect } from 'react';
import { LoadingZoom } from '../../../components/shared/LoadingSpinner';
import { NotificationService } from '../../../services/local/NotificationService';
import { UsersService } from '../../../services/local/UsersService';
import { ProductInteractionService } from '../../../services/net/ProductAxiosService';
import { ShowSigninCanvas } from '../../../utils/ShowSigninCanvas';

interface CompareButtonProps {
  productId: string;
  productName: string;
  initialCompared?: boolean;
  className?: string;
  showText?: boolean; // ← new prop
}

export const CompareButton = ({ 
  productId, 
  productName, 
  initialCompared = false,
  className = '' ,
  showText = false
}: CompareButtonProps) => {
  const [isCompared, setIsCompared] = useState(initialCompared);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const authStatus = UsersService.isAuthenticated();
      setIsAuthenticated(authStatus);
      if (authStatus) {
        checkCompareStatus();
      }
    };
    
    checkAuth();
    UsersService.subscribe(checkAuth);
    
    return () => UsersService.unsubscribe(checkAuth);
  }, [productId]);

  const checkCompareStatus = async () => {
    try {
      const response = await ProductInteractionService.compare.check(productId);
      setIsCompared(response.data?.is_compared || false);
    } catch (error) {
      console.error('Error checking compare status:', error);
    }
  };

  const handleCompareAction = async (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (!isAuthenticated) {
      NotificationService.showDialog('Please sign in to compare products', 'info');
      ShowSigninCanvas();
      return;
    }
    
    setIsLoading(true);
    try {
      const response = await ProductInteractionService.compare.toggle(productId);
      if (response.data?.success) {
        setIsCompared(!isCompared);
        NotificationService.showDialog(
          response.data.message || 
          `${productName} ${isCompared ? 'removed from' : 'added to'} compare`,
          'success'
        );
      }
    } catch (error) {
      NotificationService.showDialog(
        error.response?.data?.message || 'Failed to update compare list',
        'danger'
      );
    } finally {
      setIsLoading(false);
    }
  };

  // const ShowSigninCanvas = () => {
  //   const canvasElement = document.getElementById('quickSigninCanvas');
  //   if (canvasElement) {
  //     const existingBackdrops = document.querySelectorAll('.offcanvas-backdrop');
  //     existingBackdrops.forEach(backdrop => backdrop.remove());
      
  //     const offcanvas = new window.bootstrap.Offcanvas(canvasElement);
  //     offcanvas.show();
  //   }
  // };

  return (
    <button
      type="button"
      className={`btn btn-icon btn-secondary animate-rotate ${className} ${isCompared ? 'active' : ''}`}
      aria-label={isCompared ? "Remove from Compare" : "Add to Compare"}
      onClick={handleCompareAction}
      disabled={isLoading}
      data-bs-toggle={!isAuthenticated ? "offcanvas" : undefined}
      data-bs-target={!isAuthenticated ? "#quickSigninCanvas" : undefined}
      aria-controls={!isAuthenticated ? "quickSigninCanvas" : undefined}
    >
      {/* {isLoading ? (
        <LoadingZoom />
      ) : (
        <i className="ci-refresh-cw fs-base animate-target" />
      )} */}

      {isLoading ? (
            <LoadingZoom />
          ) : (
            <>
              <i className="ci-refresh-cw fs-base animate-target me-2" />
              {showText && (
                <span>{isCompared ? 'Remove from Compare' : 'Add to Compare'}</span>
              )}
            </>
          )}
      
    </button>
  );
};