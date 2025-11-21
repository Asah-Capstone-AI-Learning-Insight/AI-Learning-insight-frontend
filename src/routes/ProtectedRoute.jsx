import React from 'react';
import { Navigate } from 'react-router-dom';
import { getAccessToken } from '../utils/api';

function ProtectedRoute({ children }) {
  const isLoggedIn = getAccessToken();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
