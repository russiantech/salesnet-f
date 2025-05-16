// src/components/product/FavoriteButton.tsx
import { useState, useEffect } from 'react';
import { LoadingZoom } from '../../../components/shared/LoadingSpinner';
import { NotificationService } from '../../../services/local/NotificationService';
import { UsersService } from '../../../services/local/UsersService';
import { ProductInteractionService } from '../../../services/net/ProductAxiosService';
// import { ProductInteractionService } from '../../services/net/ProductInteractionService';
// import { NotificationService } from '../../services/local/NotificationService';
// import { LoadingZoom } from '../shared/LoadingSpinner';
// import { UsersService } from '../../services/local/UsersService';

interface FavoriteButtonProps {
  productId: string;
  productName: string;
  initialFavorite?: boolean;
  className?: string;
}

export const FavoriteButton = ({ 
  productId, 
  productName, 
  initialFavorite = false,
  className = '' 
}: FavoriteButtonProps) => {
  const [isFavorite, setIsFavorite] = useState(initialFavorite);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check auth status and initial favorite state
  useEffect(() => {
    const checkAuth = () => {
      const authStatus = UsersService.isAuthenticated();
      setIsAuthenticated(authStatus);
      if (authStatus) {
        checkFavoriteStatus();
      }
    };
    
    checkAuth();
    UsersService.subscribe(checkAuth);
    
    return () => UsersService.unsubscribe(checkAuth);
  }, [productId]);

  const checkFavoriteStatus = async () => {
    try {
      const response = await ProductInteractionService.favorites.check(productId);
      setIsFavorite(response.data?.is_favorite || false);
    } catch (error) {
      console.error('Error checking favorite status:', error);
    }
  };

  const handleFavoriteAction = async (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (!isAuthenticated) {
      NotificationService.showDialog('Please sign in to manage favorites', 'info');
      showSigninCanvas();
      return;
    }
    
    setIsLoading(true);
    try {
      const response = await ProductInteractionService.favorites.toggle(productId);
      if (response.data?.success) {
        setIsFavorite(!isFavorite);
        NotificationService.showDialog(
          response.data.message || 
          `${productName} ${isFavorite ? 'removed from' : 'added to'} favorites`,
          'success'
        );
      }
    } catch (error) {
      NotificationService.showDialog(
        error.response?.data?.message || 'Failed to update favorites',
        'danger'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const showSigninCanvas = () => {
    const canvasElement = document.getElementById('quickSigninCanvas');
    if (canvasElement) {
      const existingBackdrops = document.querySelectorAll('.offcanvas-backdrop');
      existingBackdrops.forEach(backdrop => backdrop.remove());
      
      const offcanvas = new window.bootstrap.Offcanvas(canvasElement);
      offcanvas.show();
    }
  };

  return (
    <button
      type="button"
      className={`btn btn-icon btn-secondary animate-pulse ${className} ${isFavorite ? 'active' : ''}`}
      aria-label={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      onClick={handleFavoriteAction}
      disabled={isLoading}
      data-bs-toggle={!isAuthenticated ? "offcanvas" : undefined}
      data-bs-target={!isAuthenticated ? "#quickSigninCanvas" : undefined}
      aria-controls={!isAuthenticated ? "quickSigninCanvas" : undefined}
    >
      {isLoading ? (
        <LoadingZoom />
      ) : (
        <i className={`ci-heart${isFavorite ? '-filled text-danger' : ''} fs-base animate-target`} />
      )}
    </button>
  );
};