// src/context/AuthContext.tsx
import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { UsersService } from '../services/local/UsersService';

type AuthContextType = {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: any | null;
  login: (userData: any) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      const currentUser = UsersService.getCurrentUser();
      setUser(currentUser);
      setIsLoading(false);
    };
    initializeAuth();
  }, []);

  const login = (userData: any) => {
    UsersService.authenticate(userData);
    setUser(userData);
  };

  const logout = () => {
    UsersService.logout();
    setUser(null);
  };

  const value = {
    isAuthenticated: !!user?.access_token,
    isLoading,
    user,
    login,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};