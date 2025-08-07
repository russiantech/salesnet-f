// contexts/UserContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import { UsersAxiosService } from '@/services/net/UsersAxiosService';
import { UsersService } from '@/services/local/UsersService';

interface User {
  id: number;
  email: string;
  name: string;
  refresh_token?: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  refreshUser: () => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
  isAuthenticated: false,
  refreshUser: async () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUser = async () => {
    try {
      setIsLoading(true);
      const response = await UsersAxiosService.getProfile();
      // UsersService.setUser(response.data);
      setUser(response.data);
    } catch (error) {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    UsersAxiosService.signout();
    setUser(null);
  };

  useEffect(() => {
    // Check if we have a valid token before fetching
    if (UsersService.getAccessToken()) {
      fetchUser();
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        refreshUser: fetchUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useUser = () => useContext(AuthContext);