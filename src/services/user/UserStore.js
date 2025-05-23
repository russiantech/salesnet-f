import { LocalStorageService } from "./base/LocalStorageService";
let observers = [];
// const USER_KEY = 'user';
const USER_KEY = 'currentUser';
function notifyObservers(user) {
    // const cart = JSON.parse(StorageService.get(CART_KEY));
    observers.forEach(o => {
        o(user);
    });
}
export const UserStore = {
    subscribe(observer, receiveFirstState = true) {
        // no more than one subscription
        if (!observers.includes(observer)) {
            observers.push(observer);
            if (receiveFirstState) {
                const user = JSON.parse(LocalStorageService.get(USER_KEY) || {});
                observer(user);
            }
        }
    },
    unsubscribe(observer) {
        const index = observers.indexOf(observer);
        if (index > -1)
            observers.splice(index, 1);
    },
    isAuthenticated() {
        if (typeof window === "undefined")
            return false;
        const user = LocalStorageService.get(USER_KEY);
        return !!user;
    },
    authenticate(userObj) {
        if (typeof window !== 'undefined') {
            LocalStorageService.set(USER_KEY, JSON.stringify(userObj));
        }
        notifyObservers(userObj);
    },
    getToken() {
        const user = LocalStorageService.get(USER_KEY);
        return user ? user.token : null;
    },
    saveUser(user) {
        LocalStorageService.save(USER_KEY, JSON.stringify(user));
        notifyObservers(user);
    },
    getUser() {
        return JSON.parse(LocalStorageService.get(USER_KEY));
    },
    clearSession() {
        LocalStorageService.clear(USER_KEY);
        notifyObservers({});
    },
    isNotAuthenticated() {
        return !this.isAuthenticated();
    },
    // 
    getCurrentUser: () => {
        const user = LocalStorageService.get(USER_KEY);
        return user ? JSON.parse(user) : null;
    },
    logout: () => {
        LocalStorageService.remove(USER_KEY);
    },
    updateLocalUser: (updatedData) => {
        const currentUser = UsersService.getCurrentUser();
        if (currentUser) {
            const updatedUser = { ...currentUser, ...updatedData };
            LocalStorageService.set(USER_KEY, JSON.stringify(updatedUser));
            return updatedUser;
        }
        return null;
    }
};
// 
