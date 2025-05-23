import { LocalStorageService } from "../local/base/LocalStorageService";
const AUTH_KEY = 'auth';
export const AuthStore = {
    getState() {
        return LocalStorageService.get(AUTH_KEY) || {
            user: null,
            tokens: null
        };
    },
    setState(state) {
        LocalStorageService.set(AUTH_KEY, state);
    },
    clear() {
        LocalStorageService.remove(AUTH_KEY);
    },
    getAccessToken() {
        return this.getState().tokens?.access_token || null;
    }
};
