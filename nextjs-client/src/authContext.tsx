"use client"

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface AuthContextType {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
  }
  

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authCookie = document.cookie.split('; ').find(row => row.startsWith('Authorization='));
    setIsAuthenticated(!!authCookie);
  }, []);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    document.cookie = "Authorization=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;";
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
