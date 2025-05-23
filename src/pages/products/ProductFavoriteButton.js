import { jsx as _jsx } from "react/jsx-runtime";
// src/components/product/ProductFavoriteButton.tsx
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { ProductInteractionService } from '../../services/net/ProductInteractionService';
import { NotificationService } from '../../services/local/NotificationService';
import { LoadingZoom } from '../../components/shared/LoadingSpinner';
// import { LoadingZoom } from '../shared/LoadingSpinner';
export const ProductFavoriteButton = ({ productId, initialFavorite }) => {
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
                NotificationService.showDialog(`Product ${!isFavorite ? 'added to' : 'removed from'} favorites`, 'success');
            }
        }
        catch (error) {
            NotificationService.showDialog('Failed to update favorites', 'error');
        }
        finally {
            setIsLoading(false);
        }
        return (_jsx("button", { className: `btn btn-icon btn-secondary animate-pulse${isFavorite ? ' active' : ''}`, onClick: toggleFavorite, disabled: isLoading, "aria-label": isFavorite ? "Remove from Favorites" : "Add to Favorites", children: isLoading ? _jsx(LoadingZoom, {}) : _jsx("i", { className: `ci-heart${isFavorite ? '-filled' : ''} fs-base` }) }));
    };
};
