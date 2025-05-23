import { jsx as _jsx } from "react/jsx-runtime";
// // src/components/product/FavoriteButton.tsx
// import { useState, useEffect } from 'react';
// import { LoadingZoom } from '../../../components/shared/LoadingSpinner';
// import { NotificationService } from '../../../services/local/NotificationService';
// import { UsersService } from '../../../services/local/UsersService';
// import { ProductInteractionService } from '../../../services/net/ProductAxiosService';
// interface FavoriteButtonProps {
//   productId: string;
//   productName: string;
//   initialFavorite?: boolean;
//   className?: string;
//   listId?: string;
// }
// export const FavoriteButton = ({ 
//   productId, 
//   productName, 
//   initialFavorite = false,
//   className = '',
//   listId = null
// }: FavoriteButtonProps) => {
//   const [isFavorite, setIsFavorite] = useState(initialFavorite);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   // Check auth status and initial favorite state
//   useEffect(() => {
//     const checkAuth = () => {
//       const authStatus = UsersService.isAuthenticated();
//       setIsAuthenticated(authStatus);
//       if (authStatus) {
//         checkFavoriteStatus();
//       }
//     };
//     checkAuth();
//     UsersService.subscribe(checkAuth);
//     return () => UsersService.unsubscribe(checkAuth);
//   }, [productId]);
//   const checkFavoriteStatus = async () => {
//     try {
//       const response = await ProductInteractionService.favorites.check(productId);
//       setIsFavorite(response.data?.is_favorite || false);
//     } catch (error) {
//       console.error('Error checking favorite status:', error);
//     }
//   };
//   const handleFavoriteAction = async (e: React.MouseEvent) => {
//     e.preventDefault();
//     if (!isAuthenticated) {
//       NotificationService.showDialog('Please sign in to manage favorites', 'info');
//       showSigninCanvas();
//       return;
//     }
//     setIsLoading(true);
//     try {
//       const response = await ProductInteractionService.favorites.toggle(productId);
//       if (response.data?.success) {
//         setIsFavorite(!isFavorite);
//         NotificationService.showDialog(
//           response.data.message || 
//           `${productName} ${isFavorite ? 'removed from' : 'added to'} favorites`,
//           'success'
//         );
//       }
//     } catch (error) {
//       NotificationService.showDialog(
//         error.response?.data?.message || 'Failed to update favorites',
//         'danger'
//       );
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   const showSigninCanvas = () => {
//     const canvasElement = document.getElementById('quickSigninCanvas');
//     if (canvasElement) {
//       const existingBackdrops = document.querySelectorAll('.offcanvas-backdrop');
//       existingBackdrops.forEach(backdrop => backdrop.remove());
//       const offcanvas = new window.bootstrap.Offcanvas(canvasElement);
//       offcanvas.show();
//     }
//   };
//   return (
//     <button
//       type="button"
//       className={`btn btn-icon btn-secondary animate-pulse ${className} ${isFavorite ? 'active' : ''}`}
//       aria-label={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
//       onClick={handleFavoriteAction}
//       disabled={isLoading}
//       data-bs-toggle={!isAuthenticated ? "offcanvas" : undefined}
//       data-bs-target={!isAuthenticated ? "#quickSigninCanvas" : undefined}
//       aria-controls={!isAuthenticated ? "quickSigninCanvas" : undefined}
//     >
//       {isLoading ? (
//         <LoadingZoom />
//       ) : (
//         <i className={`ci-heart${isFavorite ? '-filled text-danger' : ''} fs-base animate-target`} />
//       )}
//     </button>
//   );
// };
// 
// VERSION 02
// import { useState, useEffect } from 'react';
// import { LoadingZoom } from '../../../components/shared/LoadingSpinner';
// import { NotificationService } from '../../../services/local/NotificationService';
// import { UsersService } from '../../../services/local/UsersService';
// import { FavoritesAxiosService } from '../../../services/net/FavoritesAxiosService';
// interface FavoriteButtonProps {
//   productId: string;
//   productName: string;
//   initialFavorite?: boolean;
//   className?: string;
//   listId?: string; // Optional list ID for direct addition
// }
// export const FavoriteButton = ({ 
//   productId, 
//   productName, 
//   initialFavorite = false,
//   className = '',
//   listId = null
// }: FavoriteButtonProps) => {
//   const [isFavorite, setIsFavorite] = useState(initialFavorite);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   useEffect(() => {
//     const checkAuth = () => {
//       const authStatus = UsersService.isAuthenticated();
//       setIsAuthenticated(authStatus);
//       if (authStatus) {
//         checkFavoriteStatus();
//       }
//     };
//     checkAuth();
//     UsersService.subscribe(checkAuth);
//     return () => UsersService.unsubscribe(checkAuth);
//   }, [productId]);
//   const checkFavoriteStatus = async () => {
//     try {
//       const response = await FavoritesAxiosService.checkFavoriteStatus(productId);
//       setIsFavorite(response.data?.is_favorite || false);
//     } catch (error) {
//       console.error('Error checking favorite status:', error);
//     }
//   };
//   const handleFavoriteAction = async (e: React.MouseEvent) => {
//     e.preventDefault();
//     if (!isAuthenticated) {
//       NotificationService.showDialog('Please sign in to manage favorites', 'info');
//       showSigninCanvas();
//       return;
//     }
//     setIsLoading(true);
//     try {
//       // let response;
//       // if (listId) {
//       //   // Add directly to specific list
//       //   response = await FavoritesAxiosService.addFavoriteItem(listId, productId);
//       // } 
//       // else {
//       //   // Toggle favorite status
//       //   response = await FavoritesAxiosService.toggleFavorite(productId);
//       // }
//       const response = await FavoritesAxiosService.addFavoriteItem(listId, productId);
//       if (response.data?.success) {
//         const newFavoriteStatus = listId ? true : !isFavorite;
//         setIsFavorite(newFavoriteStatus);
//         NotificationService.showDialog(
//           response.data.message || 
//           `${productName} ${newFavoriteStatus ? 'added to' : 'removed from'} favorites`,
//           'success'
//         );
//       }
//     } catch (error) {
//       console.error('Favorite action error:', error);
//       NotificationService.showDialog(
//         error.response?.data?.message || 'Failed to update favorites',
//         'danger'
//       );
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   const showSigninCanvas = () => {
//     const canvasElement = document.getElementById('quickSigninCanvas');
//     if (canvasElement) {
//       const existingBackdrops = document.querySelectorAll('.offcanvas-backdrop');
//       existingBackdrops.forEach(backdrop => backdrop.remove());
//       const offcanvas = new window.bootstrap.Offcanvas(canvasElement);
//       offcanvas.show();
//     }
//   };
//   return (
//     <button
//       type="button"
//       className={`btn btn-icon btn-secondary animate-pulse ${className} ${isFavorite ? 'active' : ''}`}
//       aria-label={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
//       onClick={handleFavoriteAction}
//       disabled={isLoading}
//       data-bs-toggle={!isAuthenticated ? "offcanvas" : undefined}
//       data-bs-target={!isAuthenticated ? "#quickSigninCanvas" : undefined}
//       aria-controls={!isAuthenticated ? "quickSigninCanvas" : undefined}
//     >
//       {isLoading ? (
//         <LoadingZoom />
//       ) : (
//         <i className={`ci-heart${isFavorite ? '-filled text-danger' : ''} fs-base animate-target`} />
//       )}
//     </button>
//   );
// };
// 
// VERSION 03
import { useState, useEffect } from 'react';
import { LoadingZoom } from '../../../components/shared/LoadingSpinner';
import { NotificationService } from '../../../services/local/NotificationService';
import { UsersService } from '../../../services/local/UsersService';
import { FavoritesAxiosService } from '../../../services/net/FavoritesAxiosService';
export const FavoriteButton = ({ productId, productName, initialFavorite = false, className = '', listId = null }) => {
    const [isFavorite, setIsFavorite] = useState(initialFavorite);
    const [isLoading, setIsLoading] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    // Check auth status on mount and subscribe to changes
    useEffect(() => {
        const checkAuth = () => {
            setIsAuthenticated(UsersService.isAuthenticated());
        };
        checkAuth();
        UsersService.subscribe(checkAuth);
        return () => UsersService.unsubscribe(checkAuth);
    }, []);
    const handleFavoriteAction = async (e) => {
        // Prevent default Bootstrap behavior
        e.preventDefault();
        if (!isAuthenticated) {
            NotificationService.showDialog('Please sign in to manage favorites', 'info');
            showSigninCanvas();
            return;
        }
        setIsLoading(true);
        try {
            const response = await FavoritesAxiosService.addFavoriteItem(listId, productId);
            if (response?.data?.success) {
                const newFavoriteStatus = listId ? true : !isFavorite;
                setIsFavorite(newFavoriteStatus);
                NotificationService.showDialog(response.data.message ||
                    `${productName} ${newFavoriteStatus ? 'added to' : 'removed from'} favorites`, 'success');
            }
            else {
                NotificationService.showDialog(response.error || 'Failed to update favorites', 'warning');
            }
        }
        catch (error) {
            console.error('Favorite action error:', error);
            NotificationService.showDialog(error.response?.data?.message || 'Failed to update favorites', 'danger');
        }
        finally {
            setIsLoading(false);
        }
    };
    const showSigninCanvas = () => {
        const canvasElement = document.getElementById('quickSigninCanvas');
        if (canvasElement) {
            // Clean up any existing backdrops
            const existingBackdrops = document.querySelectorAll('.offcanvas-backdrop');
            existingBackdrops.forEach(backdrop => backdrop.remove());
            const offcanvas = new window.bootstrap.Offcanvas(canvasElement);
            offcanvas.show();
        }
    };
    return (_jsx("button", { type: "button", className: `btn btn-icon btn-secondary animate-pulse ${className} ${isFavorite ? 'active' : ''}`, "aria-label": isFavorite ? "Remove from Favorites" : "Add to Favorites", onClick: handleFavoriteAction, disabled: isLoading, "data-bs-toggle": !isAuthenticated ? "offcanvas" : undefined, "data-bs-target": !isAuthenticated ? "#quickSigninCanvas" : undefined, "aria-controls": !isAuthenticated ? "quickSigninCanvas" : undefined, children: isLoading ? (_jsx(LoadingZoom, {})) : (_jsx("i", { className: `ci-heart${isFavorite ? '-filled text-danger' : ''} fs-base animate-target` })) }));
};
