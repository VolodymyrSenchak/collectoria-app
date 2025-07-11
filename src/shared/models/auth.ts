import type {IUser} from './user.ts';

export interface IAuthCommand {
  email: string;
  password: string;
}

export type ILoginCommand = IAuthCommand;
export type IRegisterCommand = IAuthCommand;

export interface IPasswordResetCommand {
  email: string;
  redirectTo: string;
}

export interface IPasswordChangeCommand {
  password: string;
}

export interface IAuthResult {
  user: IUser;
  session: IAuthSession;
}

export interface IAuthSession {
  access_token: string;
  refresh_token: string;
}