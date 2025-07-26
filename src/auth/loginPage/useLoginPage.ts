import {useNavigate} from "react-router";
import {type SubmitHandler, useForm} from "react-hook-form";
import {authApi} from "../../shared/api/authApi.ts";
import {NAV_LINKS} from "../../shared/utils";
import {useEffect, useRef} from "react";

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

export interface LoginFormData {
  email: string;
  password: string;
}

export const useLoginPage = () => {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm<LoginFormData>();
  const googleButtonRef = useRef(null);

  const loginWithCredentials: SubmitHandler<LoginFormData> = async (data) => {
    try {
      await authApi.login(data);
      navigate(NAV_LINKS.collections);
    } catch (error) {
      console.error(error);
      control.setError('password', { message: 'Invalid login or password' });
    }
  };

  useEffect(() => {
    const google = (window as any).google;

    if (!google || !googleButtonRef.current) return;

    const handleGoogleResponse = async (response: { credential: string }) => {
      await authApi.loginWithGoogle({ credential: response.credential });
      navigate(NAV_LINKS.collections);
    };

    google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback: handleGoogleResponse,
    });

    google.accounts.id.renderButton(googleButtonRef.current, {
      theme: 'outline',
      size: 'large',
      type: 'standard',
    });
  }, []);

  return {
    googleButtonRef,
    handleSubmit,
    control,
    loginWithCredentials,
  }
}