import { jsx as _jsx } from "react/jsx-runtime";
// src/components/PrivateRoute.tsx
// import { Navigate, Outlet, useLocation } from "react-router-dom";
// import { UsersService } from "../local/UsersService";
// import { useState, useEffect } from "react";
// // import { NotificationService } from "../local/NotificationService";
// 
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UsersService } from "../local/UsersService";
import { useState, useEffect } from "react";
import LoadingSpinner from "../../components/shared/LoadingSpinner";
export const PrivateRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const location = useLocation();
    useEffect(() => {
        setIsAuthenticated(UsersService.isAuthenticated());
    }, []);
    if (isAuthenticated === null) {
        return _jsx(LoadingSpinner, {});
    }
    return isAuthenticated ? (children) : (_jsx(Navigate, { to: "/auth/signin", state: { from: location }, replace: true }));
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
// 
// VERSION 02
const ProtectedLayout = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const location = useLocation();
    useEffect(() => {
        setIsAuthenticated(UsersService.isAuthenticated());
    }, []);
    // Show loading state without calling NotificationService during render
    if (isAuthenticated === null) {
        return (_jsx(LoadingSpinner, {}));
    }
    return isAuthenticated ? (_jsx(Outlet, {})) : (_jsx(Navigate, { to: "/auth/signin", state: { from: location }, replace: true }));
};
export default ProtectedLayout;
