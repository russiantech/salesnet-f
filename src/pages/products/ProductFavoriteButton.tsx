// src/components/product/ProductFavoriteButton.tsx
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { ProductInteractionService } from '../../services/net/ProductInteractionService';
import { NotificationService } from '../../services/local/NotificationService';
import { LoadingZoom } from '../../components/shared/LoadingSpinner';
// import { LoadingZoom } from '../shared/LoadingSpinner';

export const ProductFavoriteButton = ({ productId, initialFavorite }: { productId: string, initialFavorite: boolean }) => {
  const [isFavorite, setIsFavorite] = useState(initialFavorite);
  const [isLoading, setIsLoading] = useState(false);
  const { isAuthenticated, showLoginModal } = useAuth();

  const toggleFavorite = async () => {
    if (!isAuthenticated) {
    //   showLoginModal();
    //   return;
    }
  
    setIsLoading(true);
    try {
      const response = await ProductInteractionService.favorites.toggle(productId);
      if (response.success) {
        setIsFavorite(!isFavorite);
        NotificationService.showDialog(
          `Product ${!isFavorite ? 'added to' : 'removed from'} favorites`,
          'success'
        );
      }
    } catch (error) {
      NotificationService.showDialog('Failed to update favorites', 'error');
    } finally {
      setIsLoading(false);
    }
  

  return (
    <button
      className={`btn btn-icon btn-secondary animate-pulse${isFavorite ? ' active' : ''}`}
      onClick={toggleFavorite}
      disabled={isLoading}
      aria-label={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
    >
      {isLoading ? <LoadingZoom /> : <i className={`ci-heart${isFavorite ? '-filled' : ''} fs-base`} />}
    </button>
  )
}};
