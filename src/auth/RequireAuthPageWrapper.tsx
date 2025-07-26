import { Navigate, useLocation } from 'react-router';
import * as React from 'react';
import { authStore } from '../shared/store';

export const RequireAuthPageWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const authInfo = authStore.getAuthInfo();

  if (!authInfo?.access_token) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }
  return <>{children}</>;
};