import {Navigate } from 'react-router';
import { authStore } from '../shared/store';

export const EmailConfirmationPage = () => {
  const hash = window.location.hash.substring(1); // Remove the leading '#'
  const params = new URLSearchParams(hash);
  const access_token = params.get('access_token');
  const refresh_token = params.get('refresh_token');

  if (access_token && refresh_token) {
    authStore.saveAuthInfo({ access_token, refresh_token });
    return <Navigate to="/app/collections" replace />;
  } else {
    return <Navigate to="/auth/login" replace />;
  }
}