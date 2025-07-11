import axios from 'axios';
import { authStore } from '../authStore.ts';

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
  response => response.data,
  async error => {
    if (error.config.url?.startsWith('/auth')) return Promise.reject(error);

    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = authStore.getAuthInfo()?.refresh_token;
        const { data } = await axios.post(`${BASE_URL}/auth/refreshToken`, {
          refresh_token: refreshToken
        });

        authStore.saveAuthInfo(data);
        originalRequest.headers.Authorization = `Bearer ${data.access_token}`;
        return api(originalRequest);
      } catch (refreshError) {
        authStore.saveAuthInfo(null);
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default api;