import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthenticWrapper'; 


const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <>{children}</>
  ) : (
    <Navigate to="/" replace />
  );
};

export default ProtectedRoute;
