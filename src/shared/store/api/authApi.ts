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

class AuthApi {
  async login(command: ILoginCommand): Promise<IAuthResult> {
    const authResult = await api.post<IAuthCommand, IAuthResult>('/auth/login', command);
    this.persistAuthResult(authResult);
    return authResult;
  }

  async register(command: IRegisterCommand): Promise<IAuthResult> {
    const authResult = await api.post<IAuthCommand, IAuthResult>('/auth/register', {
      ...command,
      emailRedirectTo: `${location.origin}/auth/emailConfirmation`
    });
    this.persistAuthResult(authResult);
    return authResult;
  }

  async refreshToken(refreshToken: string): Promise<IAuthSession> {
    const session = await api.post<never, IAuthSession>('/auth/refreshToken', { refreshToken });
    authStore.saveAuthInfo(session);
    return session;
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