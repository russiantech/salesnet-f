
//
// FollowButton.tsx
import { useState, useEffect, useRef } from 'react';
import { NotificationService } from '../../services/local/NotificationService';
import { UsersService } from '../../services/local/UsersService';
import { LoadingZoom } from './LoadingSpinner';
import { PagesAxiosService } from '../../services/net/PagesAxiosService';
import { UsersAxiosService } from '../../services/net/UsersAxiosService';

interface FollowButtonProps {
  businessId: string;
  businessType: 'user' | 'page';
  businessName: string;
  initialFollowing?: boolean;
  initialFollowersCount?: number;
  isOwnProfile?: boolean; // New
  className?: string;
  onFollowChange?: (isFollowing: boolean, newCount: number) => void;
}


export const FollowButton = ({ 
  businessId, 
  businessType,
  businessName,
  initialFollowing = false,
  initialFollowersCount = 0,
  className = '',
  isOwnProfile = false,
  onFollowChange
}: FollowButtonProps) => {
  const [isFollowing, setIsFollowing] = useState(initialFollowing);
  const [followersCount, setFollowersCount] = useState(initialFollowersCount);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(UsersService.isAuthenticated());
  const initialPropsRef = useRef({ initialFollowing, initialFollowersCount });

  // Sync state with props changes
  useEffect(() => {
    setIsFollowing(initialFollowing);
    setFollowersCount(initialFollowersCount);
    
    // Update ref to track initial props
    initialPropsRef.current = { 
      initialFollowing, 
      initialFollowersCount 
    };
  }, [initialFollowing, initialFollowersCount]);

  // Listen for authentication changes
  useEffect(() => {
    const handleAuthChange = () => {
      const authStatus = UsersService.isAuthenticated();
      setIsAuthenticated(authStatus);
      
      // Reset to initial state when auth status changes
      if (!authStatus) {
        setIsFollowing(initialPropsRef.current.initialFollowing);
        setFollowersCount(initialPropsRef.current.initialFollowersCount);
      }
    };
    
    UsersService.subscribe(handleAuthChange);
    return () => UsersService.unsubscribe(handleAuthChange);
  }, []);

  const handleFollowAction = async (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (!isAuthenticated) {
      NotificationService.showDialog('Please sign in to follow', 'info');
      showSigninCanvas();
      return;
    }

    if (isOwnProfile) {
      NotificationService.showDialog('You cannot follow yourself', 'info');
      return;
    }

    // Optimistic UI update
    const newFollowingStatus = !isFollowing;
    const newFollowersCount = newFollowingStatus ? followersCount + 1 : followersCount - 1;

    setIsFollowing(newFollowingStatus);
    setFollowersCount(newFollowersCount);
    onFollowChange?.(newFollowingStatus, newFollowersCount);
        
    setIsLoading(true);
    
    try {
      let response;
      
      if (businessType === 'user') {
        response = newFollowingStatus 
          ? await UsersAxiosService.followUser(businessId)
          : await UsersAxiosService.unfollowUser(businessId);
      } else {
        response = newFollowingStatus 
          ? await PagesAxiosService.followPage(businessId)
          : await PagesAxiosService.unfollowPage(businessId);
      }
      
      if (response?.data?.success) {
        NotificationService.showDialog(
          `${businessName} ${newFollowingStatus ? 'followed' : 'unfollowed'}`,
          'success'
        );
      } else {
      
      setIsFollowing(newFollowingStatus);
      setFollowersCount(newFollowersCount);
      onFollowChange?.(newFollowingStatus, newFollowersCount);
      
        NotificationService.showDialog(
          response?.data?.error || 'Failed to update follow status',
          'warning'
        );
      }
    } catch (error: any) {
      // Revert on error
      // setIsFollowing(!newFollowingStatus);
      // setFollowersCount(newFollowingStatus ? followersCount - 1 : followersCount + 1);
      // onFollowChange?.(!newFollowingStatus, newFollowingStatus ? followersCount - 1 : followersCount + 1);
      setIsFollowing(newFollowingStatus);
      setFollowersCount(newFollowersCount);
      onFollowChange?.(newFollowingStatus, newFollowersCount);
      
      NotificationService.showDialog(
        error.response?.data?.error || 'Failed to update follow status',
        'danger'
      );
    } finally {
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

  return (
    <button
      type="button"
      className={`btn ${isFollowing ? 'btn-secondary' : 'btn-primary'} rounded-pill ${className}`}
      aria-label={isFollowing ? "Unfollow" : "Follow"}
      onClick={handleFollowAction}
      disabled={isLoading}
      data-bs-toggle={!isAuthenticated ? "offcanvas" : undefined}
      data-bs-target={!isAuthenticated ? "#quickSigninCanvas" : undefined}
      aria-controls={!isAuthenticated ? "quickSigninCanvas" : undefined}
    >
      {isLoading ? (
        <LoadingZoom />
      ) : (
        <>
          <i className={`ci-${isFollowing ? 'user-check' : 'user'} me-1`} />
          {isFollowing ? 'Following' : 'Follow'}
        </>
      )}
      
      <span className="badge rounded-pill bg-info1 ms-2 fw-bold">
        {followersCount}
      </span>
    </button>
  );
};