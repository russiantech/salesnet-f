// src/components/PrivateRoute.tsx
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UsersService } from "../local/UsersService";
import { useState, useEffect } from "react";
import { NotificationService } from "../local/NotificationService";

interface PrivateRouteProps {
  children: React.ReactElement;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const location = useLocation();

  useEffect(() => {
    setIsAuthenticated(UsersService.isAuthenticated());
  }, []);

  if (isAuthenticated === null) {
    return <div className="flex justify-center items-center h-screen">
      <span className="loading loading-spinner loading-lg"></span>
    </div>;
  }

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/auth/signin" state={{ from: location }} replace />
  );
};

// export default PrivateRoute;

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



// [=======FOR PROTECTING A GROUP OF ROUTES ALL AT ONCE ]
// src/components/PrivateRoute.tsx
// import { Navigate, Outlet, useLocation } from "react-router-dom";
// import { UsersService } from "../local/UsersService";
// import { useState, useEffect } from "react";
// import { NotificationService } from "../local/NotificationService";

const ProtectedLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const location = useLocation();

  useEffect(() => {
    setIsAuthenticated(UsersService.isAuthenticated());
  }, []);

  if (isAuthenticated === null) {
    return NotificationService.showDialog('authenticating', 'info');
  }

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/auth/signin" state={{ from: location }} replace />
  );
};

export default ProtectedLayout;