import {Navigate, useSearchParams} from 'react-router';
import { authStore } from '../shared/store';

export const EmailConfirmationPage = () => {
  const [searchParams] = useSearchParams();
  const access_token = searchParams.get('access_token');
  const refresh_token = searchParams.get('refresh_token');

  if (access_token && refresh_token) {
    authStore.saveAuthInfo({ access_token, refresh_token });
    return <Navigate to="/app/collections" replace />;
  } else {
    return <Navigate to="/auth/login" replace />;
  }
}