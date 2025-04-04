import { LocalStorageService } from "../base/LocalStorageService";

const AUTH_KEY = 'auth';

type AuthState = {
  user: null | {
    id: string;
    email: string;
  };
  tokens: null | {
    access_token: string;
    refresh_token: string;
  };
};

export const AuthStore = {
  getState(): AuthState {
    return LocalStorageService.get(AUTH_KEY) || {
      user: null,
      tokens: null
    };
  },

  setState(state: AuthState): void {
    LocalStorageService.set(AUTH_KEY, state);
  },

  clear(): void {
    LocalStorageService.remove(AUTH_KEY);
  },

  getAccessToken(): string | null {
    return this.getState().tokens?.access_token || null;
  }
};