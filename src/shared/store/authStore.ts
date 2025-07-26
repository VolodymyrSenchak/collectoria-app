import type {IAuthSession, IUser} from '../models';

class AuthStore {
  saveAuthInfo(userInfo: IAuthSession | null): void {
    if (userInfo) {
      localStorage.setItem('authInfo', JSON.stringify(userInfo));
    } else {
      localStorage.removeItem('authInfo');
    }
  }

  getAuthInfo(): IAuthSession | null {
    const authInfo = localStorage.getItem('authInfo');
    return authInfo ? JSON.parse(authInfo) : null;
  }

  saveUserInfo(userInfo: IUser | null): void {
    if (userInfo) {
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
    } else {
      localStorage.removeItem('userInfo');
    }
  }

  getUserInfo(): IUser | null {
    const userInfo = localStorage.getItem('userInfo');
    return userInfo ? JSON.parse(userInfo) : null;
  }

  logout(): void {
    this.saveAuthInfo(null);
    this.saveUserInfo(null);
  }
}

export const authStore = new AuthStore();
