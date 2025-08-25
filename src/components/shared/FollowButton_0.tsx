// import { useState, useEffect } from 'react';
// import { NotificationService } from '../../services/local/NotificationService';
// import { UsersService } from '../../services/local/UsersService';
// import { LoadingZoom } from './LoadingSpinner';
// import { FollowAxioService } from '../../services/net/FollowAxioService';

// interface FollowButtonProps {
//   targetId: string;
//   targetName: string;
//   targetType: 'user' | 'page'; // Specify whether following a user or page
//   initialFollowing?: boolean;
//   className?: string;
//   showCount?: boolean;
//   initialFollowersCount?: number;
// }

// export const FollowButton = ({ 
//   targetId, 
//   targetName, 
//   targetType,
//   initialFollowing = false,
//   className = '',
//   showCount = false,
//   initialFollowersCount = 0
// }: FollowButtonProps) => {
//   const [isFollowing, setIsFollowing] = useState(initialFollowing);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [followersCount, setFollowersCount] = useState(initialFollowersCount);

//   // Check auth status on mount and subscribe to changes
//   useEffect(() => {
//     const checkAuth = () => {
//       setIsAuthenticated(UsersService.isAuthenticated());
//     };
    
//     checkAuth();
//     UsersService.subscribe(checkAuth);
    
//     return () => UsersService.unsubscribe(checkAuth);
//   }, []);

//   const handleFollowAction = async (e: React.MouseEvent) => {
//     // Prevent default Bootstrap behavior
//     e.preventDefault();
    
//     if (!isAuthenticated) {
//       const entityType = targetType === 'user' ? 'users' : 'pages';
//       NotificationService.showDialog(`Please sign in to follow ${entityType}`, 'info');
//       showSigninCanvas();
//       return;
//     }
    
//     setIsLoading(true);
//     try {
//       const response = isFollowing 
//         ? await FollowAxioService.unfollow(targetId, targetType)
//         : await FollowAxioService.follow(targetId, targetType);

//       if (response?.data?.success) {
//         const newFollowingStatus = !isFollowing;
//         setIsFollowing(newFollowingStatus);
        
//         // Update followers count
//         setFollowersCount(prev => newFollowingStatus ? prev + 1 : prev - 1);
        
//         const actionText = newFollowingStatus ? 'Now following' : 'Unfollowed';
//         NotificationService.showDialog(
//           response.data.message || `${actionText} ${targetName}`,
//           'success'
//         );
//       } else {
//         NotificationService.showDialog(
//           response.error || 'Failed to update follow status',
//           'warning'
//         );
//       }
//     } catch (error) {
//       console.error('Follow action error:', error);
//       NotificationService.showDialog(
//         error.response?.data?.message || 'Failed to update follow status',
//         'danger'
//       );
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const showSigninCanvas = () => {
//     const canvasElement = document.getElementById('quickSigninCanvas');
//     if (canvasElement) {
//       // Clean up any existing backdrops
//       const existingBackdrops = document.querySelectorAll('.offcanvas-backdrop');
//       existingBackdrops.forEach(backdrop => backdrop.remove());
      
//       const offcanvas = new window.bootstrap.Offcanvas(canvasElement);
//       offcanvas.show();
//     }
//   };

//   // Get appropriate icon based on target type
//   const getIcon = () => {
//     if (targetType === 'user') {
//       return `ci-user${isFollowing ? '-check' : '-plus'}`;
//     } else {
//       return `ci-heart${isFollowing ? '-filled' : ''}`;
//     }
//   };

//   // Get appropriate text based on target type and state
//   const getButtonText = () => {
//     if (targetType === 'user') {
//       return isFollowing ? 'Following' : 'Follow';
//     } else {
//       return isFollowing ? 'Following' : 'Follow';
//     }
//   };

//   return (
//     <button
//       type="button"
//       className={`btn btn-primary rounded-pill ${className} ${isFollowing ? 'btn-outline-primary' : ''}`}
//       aria-label={isFollowing ? `Unfollow ${targetName}` : `Follow ${targetName}`}
//       onClick={handleFollowAction}
//       disabled={isLoading}
//       data-bs-toggle={!isAuthenticated ? "offcanvas" : undefined}
//       data-bs-target={!isAuthenticated ? "#quickSigninCanvas" : undefined}
//       aria-controls={!isAuthenticated ? "quickSigninCanvas" : undefined}
//     >
//       {isLoading ? (
//         <LoadingZoom />
//       ) : (
//         <>
//           <i className={`${getIcon()} me-1`}></i>
//           {getButtonText()}
//           {showCount && (
//             <span className="badge rounded-pill bg-info1 ms-2 fw-bold">
//               {followersCount}
//             </span>
//           )}
//         </>
//       )}
//     </button>
//   );
// };


// /* 
// USAGE:
// // For following a user:
// <FollowButton 
//   targetId={user.id}
//   targetName={user.name}
//   targetType="user"
//   initialFollowing={user.is_following}
//   showCount={true}
//   initialFollowersCount={stats.followers_count}
//   className="your-custom-classes"
// />

// // For following a page:
// <FollowButton 
//   targetId={page.id}
//   targetName={page.name}
//   targetType="page"
//   initialFollowing={page.is_following}
//   showCount={true}
//   initialFollowersCount={stats.followers_count}
//   className="your-custom-classes"
// />

// // Without count (minimal version):
// <FollowButton 
//   targetId={user.id}
//   targetName={user.name}
//   targetType="user"
//   initialFollowing={user.is_following}
// />

// // You can also use different styling for different types:
// <FollowButton 
//   targetId={page.id}
//   targetName={page.name}
//   targetType="page"
//   initialFollowing={page.is_following}
//   className="btn-lg" // Larger button for pages
//   showCount={true}
//   initialFollowersCount={stats.followers_count}
// />
// */

// 
// FollowButton.tsx
// import { useState, useEffect } from 'react';
// import { NotificationService } from '../../services/local/NotificationService';
// import { UsersService } from '../../services/local/UsersService';
// import { LoadingZoom } from './LoadingSpinner';
// import { PagesAxiosService } from '../../services/net/PagesAxiosService';
// import { UsersAxiosService } from '../../services/net/UsersAxiosService';

// interface FollowButtonProps {
//   businessId: string;
//   businessType: 'user' | 'page';
//   businessName: string;
//   initialFollowing?: boolean;
//   initialFollowersCount?: number;
//   className?: string;
// }

// export const FollowButton = ({ 
//   businessId, 
//   businessType,
//   businessName,
//   initialFollowing = false,
//   initialFollowersCount = 0,
//   className = ''
// }: FollowButtonProps) => {
//   const [isFollowing, setIsFollowing] = useState(initialFollowing);
//   const [followersCount, setFollowersCount] = useState(initialFollowersCount);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   // Check auth status on mount and subscribe to changes
//   useEffect(() => {
//     const checkAuth = () => {
//       setIsAuthenticated(UsersService.isAuthenticated());
//     };
    
//     checkAuth();
//     UsersService.subscribe(checkAuth);
    
//     return () => UsersService.unsubscribe(checkAuth);
//   }, []);

//   // Initialize state from props
//   useEffect(() => {
//     setIsFollowing(initialFollowing);
//     setFollowersCount(initialFollowersCount);
//   }, [initialFollowing, initialFollowersCount]);

//   const handleFollowAction = async (e: React.MouseEvent) => {
//     e.preventDefault();
    
//     if (!isAuthenticated) {
//       NotificationService.showDialog('Please sign in to follow', 'info');
//       showSigninCanvas();
//       return;
//     }
    
//     setIsLoading(true);
//     try {
//       let response;
//       const newFollowingStatus = !isFollowing;
      
//       if (businessType === 'user') {
//         response = newFollowingStatus 
//           ? await UsersAxiosService.followUser(businessId)
//           : await UsersAxiosService.unfollowUser(businessId);
//       } else {
//         response = newFollowingStatus 
//           ? await PagesAxiosService.followPage(businessId)
//           : await PagesAxiosService.unfollowPage(businessId);
//       }

//       if (response?.data?.success) {
//         setIsFollowing(newFollowingStatus);
//         setFollowersCount(prev => newFollowingStatus ? prev + 1 : prev - 1);
        
//         NotificationService.showDialog(
//           `${businessName} ${newFollowingStatus ? 'followed' : 'unfollowed'}`,
//           'success'
//         );
//       } else {

//         NotificationService.showDialog(
//           response?.data?.error || 'Failed to update follow status',
//           'warning'
//         );

//       }
//     } catch (error) {
//       NotificationService.showDialog(
//         error.response?.data?.error || 'Failed to update follow status',
//         'danger'
//       );
//       // NotificationService.showDialog(
//       //   error.response?.data?.message || 'Failed to update follow status',
//       //   'danger'
//       // );
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const showSigninCanvas = () => {
//     const canvasElement = document.getElementById('quickSigninCanvas');
//     if (canvasElement) {
//       // Clean up any existing backdrops
//       const existingBackdrops = document.querySelectorAll('.offcanvas-backdrop');
//       existingBackdrops.forEach(backdrop => backdrop.remove());
      
//       const offcanvas = new window.bootstrap.Offcanvas(canvasElement);
//       offcanvas.show();
//     }
//   };

//   return (
//     <button
//       type="button"
//       className={`btn ${isFollowing ? 'btn-secondary' : 'btn-primary'} rounded-pill ${className}`}
//       aria-label={isFollowing ? "Unfollow" : "Follow"}
//       onClick={handleFollowAction}
//       disabled={isLoading}
//       data-bs-toggle={!isAuthenticated ? "offcanvas" : undefined}
//       data-bs-target={!isAuthenticated ? "#quickSigninCanvas" : undefined}
//       aria-controls={!isAuthenticated ? "quickSigninCanvas" : undefined}
//     >
//       {isLoading ? (
//         <LoadingZoom />
//       ) : (
//         <>
//           <i className={`ci-${isFollowing ? 'user-check' : 'user'} me-1`} />
//           {isFollowing ? 'Following' : 'Follow'}
//         </>
//       )}
      
//       <span className="badge rounded-pill bg-info1 ms-2 fw-bold">
//         {followersCount}
//       </span>
//     </button>
//   );
// };

//
// FollowButton.tsx
import { useState, useEffect, useRef } from 'react';
import { NotificationService } from '../../services/local/NotificationService';
import { UsersService } from '../../services/local/UsersService';
import { LoadingZoom } from './LoadingSpinner';
import { PagesAxiosService } from '../../services/net/PagesAxiosService';
import { UsersAxiosService } from '../../services/net/UsersAxiosService';

// interface FollowButtonProps {
//   businessId: string;
//   businessType: 'user' | 'page';
//   businessName: string;
//   initialFollowing?: boolean;
//   initialFollowersCount?: number;
//   className?: string;
//   onFollowChange?: (isFollowing: boolean, newCount: number) => void;
// }
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
    // const newFollowingStatus = !isFollowing;
    // // const newFollowersCount = newFollowingStatus ? followersCount + 1 : followersCount - 1;
    // const newFollowersCount = followersCount;
    
    // setIsFollowing(newFollowingStatus);
    // setFollowersCount(newFollowersCount);
    // onFollowChange?.(newFollowingStatus, newFollowersCount);

    
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
        // Revert on failure
        // setIsFollowing(!newFollowingStatus);
        // setFollowersCount(newFollowingStatus ? followersCount - 1 : followersCount + 1);
        // onFollowChange?.(!newFollowingStatus, newFollowingStatus ? followersCount - 1 : followersCount + 1);
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