import type {IUserSettings} from "../models";

class UserSettingsStore {
  saveSettings(settings: IUserSettings): void {
    localStorage.setItem('userSettings', JSON.stringify(settings));
  }

  getSettings(): IUserSettings {
    const settings = localStorage.getItem('userSettings');
    return settings ? JSON.parse(settings) : { theme: 'light' };
  }
}

export const userSettingsStore = new UserSettingsStore();
