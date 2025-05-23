import { jsx as _jsx } from "react/jsx-runtime";
// src/components/PrivateRoute.tsx
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UsersService } from "../local/UsersService";
import { useState, useEffect } from "react";
import { NotificationService } from "../local/NotificationService";
const ProtectedLayout = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const location = useLocation();
    useEffect(() => {
        setIsAuthenticated(UsersService.isAuthenticated());
    }, []);
    if (isAuthenticated === null) {
        return NotificationService.showDialog('authenticating', 'info');
    }
    return isAuthenticated ? (_jsx(Outlet, {})) : (_jsx(Navigate, { to: "/auth/signin", state: { from: location }, replace: true }));
};
export default ProtectedLayout;
