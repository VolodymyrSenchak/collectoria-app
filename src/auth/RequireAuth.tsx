import { Navigate, useLocation } from 'react-router';
import * as React from 'react'; // adjust import to your auth hook/store
import { authStore } from '../shared/store';

export const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const authInfo = authStore.getAuthInfo();

  if (!authInfo?.access_token) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }
  return <>{children}</>;
};