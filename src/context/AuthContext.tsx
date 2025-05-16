// src/context/AuthContext.tsx
import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { UsersService } from '../services/local/UsersService';

type AuthContextType = {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: any | null;
  signin: (userData: any) => void;
  signout: () => void;
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

  const signin = (userData: any) => {
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

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};