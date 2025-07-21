// src/components/PrivateRoute.tsx
// import { Navigate, Outlet, useLocation } from "react-router-dom";
// import { UsersService } from "../local/UsersService";
// import { useState, useEffect } from "react";
// import { NotificationService } from "../local/NotificationService";

// const ProtectedLayout = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
//   const location = useLocation();

//   useEffect(() => {
//     setIsAuthenticated(UsersService.isAuthenticated());
//   }, []);

//   if (isAuthenticated === null) {
//     return NotificationService.showDialog('authenticating', 'info');
//   }

//   return isAuthenticated ? (
//     <Outlet />
//   ) : (
//     <Navigate to="/auth/signin" state={{ from: location }} replace />
//   );
// };

// export default ProtectedLayout;

// v2
// import { Navigate, Outlet } from 'react-router-dom';
// // import { useAuth } from '../context/AuthContext'; // Adjust import path as needed
// // Or if you're using a different auth system:
// // import { useSelector } from 'react-redux';
// // import { selectAuth } from '../store/authSlice';

// const ProtectedLayout = () => {
//     // Replace this with your actual authentication check
//     const { isAuthenticated, loading } = useAuth();
    
//     // Alternative for Redux:
//     // const { isAuthenticated, loading } = useSelector(selectAuth);
    
//     // Alternative for localStorage/sessionStorage:
//     // const isAuthenticated = localStorage.getItem('token') !== null;
//     // const loading = false;

//     if (loading) {
//         return (
//             <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
//                 <div className="spinner-border text-primary" role="status">
//                     <span className="visually-hidden">Loading...</span>
//                 </div>
//             </div>
//         );
//     }

//     return isAuthenticated ? <Outlet /> : <Navigate to="/auth/login" replace />;
// };

// export default ProtectedLayout;

// function useAuth(): { isAuthenticated: any; loading: any; } {
//   throw new Error('Function not implemented.');
// }

// v3
// src/components/PrivateRoute.tsx
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import LoadingSpinner from "../../components/shared/LoadingSpinner";
import { UsersService } from "../local/UsersService";

const ProtectedLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Replace with your actual authentication check
        const authenticated = UsersService.isAuthenticated();
        setIsAuthenticated(authenticated);
      } catch (error) {
        console.error("Authentication check failed:", error);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <LoadingSpinner />
      </div>
    );
  }

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/auth/signin" state={{ from: location }} replace />
  );
};

export default ProtectedLayout;