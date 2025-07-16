import axios, {type AxiosResponse} from 'axios';
import { authStore } from '../authStore.ts';
import type {IAuthResult} from '../../models';

const BASE_URL = import.meta.env.VITE_API_URL;
const api = axios.create({ baseURL: BASE_URL });

// Add a request interceptor
api.interceptors.request.use(
  config => {
    if (config.url?.startsWith('/auth')) return config;
    const token = authStore.getAuthInfo()?.access_token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

api.interceptors.response.use(
  response => response,
  async error => {
    if (error.config.url?.startsWith('/auth')) return Promise.reject(error);

    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = authStore.getAuthInfo()?.refresh_token;
        const { data } = await axios.post<never, AxiosResponse<IAuthResult>>(
          `${BASE_URL}/auth/refreshToken`,
          {refreshToken}
        );
        authStore.saveAuthInfo(data.session);
        authStore.saveUserInfo(data.user);
        originalRequest.headers.Authorization = `Bearer ${data.session.access_token}`;
        return api(originalRequest);
      } catch (refreshError) {
        authStore.saveAuthInfo(null);
        window.location.href = '/auth/login';
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default api;