import {authStore} from "../../shared/store";
import {Navigate} from "react-router";
import {NAV_LINKS} from "../../shared/utils";

export const ResetPasswordValidationPage = () => {
  const hash = window.location.hash.substring(1); // Remove the leading '#'
  const params = new URLSearchParams(hash);
  const access_token = params.get('access_token');
  const refresh_token = params.get('refresh_token');

  if (access_token && refresh_token) {
    authStore.saveAuthInfo({ access_token, refresh_token });
    return <Navigate to={NAV_LINKS.auth.changePassword} replace />;
  } else {
    return <Navigate to={NAV_LINKS.auth.login} replace />;
  }
};
