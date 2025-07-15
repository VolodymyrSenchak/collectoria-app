import api from './api.ts';
import type {
  IAuthCommand,
  IAuthResult,
  IAuthSession,
  ILoginCommand,
  IPasswordResetCommand,
  IRegisterCommand
} from '../../models/auth.ts';
import {authStore} from '../authStore.ts';
import type {AxiosResponse} from 'axios';

class AuthApi {
  async login(command: ILoginCommand): Promise<IAuthResult> {
    const authResultResponse = await api.post<IAuthCommand, AxiosResponse<IAuthResult>>('/auth/login', command);
    this.persistAuthResult(authResultResponse.data);
    return authResultResponse.data;
  }

  async register(command: IRegisterCommand): Promise<IAuthResult> {
    const authResultResponse = await api.post<IAuthCommand, AxiosResponse<IAuthResult>>('/auth/register', {
      ...command,
      emailRedirectTo: `${location.origin}/auth/emailConfirmation`
    });
    return authResultResponse.data;
  }

  async refreshToken(refreshToken: string): Promise<IAuthSession> {
    const sessionResponse = await api.post<never, AxiosResponse<IAuthSession>>('/auth/refreshToken', { refreshToken });
    authStore.saveAuthInfo(sessionResponse.data);
    return sessionResponse.data;
  }

  async resetPassword(command: IPasswordResetCommand): Promise<void> {
    await api.post<IPasswordResetCommand, void>('/auth/resetPassword', command);
  }

  async changePassword(password: string): Promise<void> {
    await api.post<never, void>('/auth/changePassword', { password });
  }

  private persistAuthResult(authResult: IAuthResult): void {
    authStore.saveAuthInfo(authResult.session);
    authStore.saveUserInfo(authResult.user);
  }
}

export const authApi = new AuthApi();