import { jsx as _jsx } from "react/jsx-runtime";
// src/context/AuthContext.tsx
import { createContext, useContext, useState, useEffect } from 'react';
import { UsersService } from '../services/local/UsersService';
const AuthContext = createContext(undefined);
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const initializeAuth = async () => {
            const currentUser = UsersService.getCurrentUser();
            setUser(currentUser);
            setIsLoading(false);
        };
        initializeAuth();
    }, []);
    const signin = (userData) => {
        UsersService.authenticate(userData);
        setUser(userData);
    };
    const signout = () => {
        UsersService.signout();
        setUser(null);
    };
    const value = {
        isAuthenticated: !!user?.access_token,
        isLoading,
        user,
        signin,
        signout
    };
    return _jsx(AuthContext.Provider, { value: value, children: children });
};
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
