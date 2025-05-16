import {LocalStorageService} from "./base/LocalStorageService";

let observers = [];
// const USER_KEY = 'user';
const USER_KEY = 'currentUser';

function notifyObservers(user) {
    // const cart = JSON.parse(StorageService.get(CART_KEY));
    observers.forEach(o => {
        o(user);
    });
}

export const UsersService = {

    // subscribe(observer, receiveFirstState = true) {
    //     // no more than one subscription
    //     if (!observers.includes(observer)) {
    //         observers.push(observer);
    //         if (receiveFirstState) {
    //             const user = user? JSON.parse(LocalStorageService.get(USER_KEY)) : {};
    //             // const user = LocalStorageService.get(USER_KEY) || {};
    //             // const user = JSON.parse(LocalStorageService.get(USER_KEY)) || {};
    //             observer(user);
    //         }
    //     }
    // },

    subscribe(observer, receiveFirstState = true) {
        // Ensure no more than one subscription
        if (!observers.includes(observer)) {
            observers.push(observer);
            if (receiveFirstState) {

                const userData = LocalStorageService.get(USER_KEY);
                let user = {};
    
                // Check if userData is available and parse it
                if (userData) {
                    try {
                        user = JSON.parse(userData);
                    } catch (error) {
                        console.error('Error parsing user data:', error);
                        user = {}; // Fallback to empty object in case of error
                    }
                }
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

    // Method to retrieve the specified token
    getToken(tokenType = 'access' || null){
        try {
            // Get user from localStorage
            const user = LocalStorageService.get(USER_KEY);
            
            // Determine token source priority: 1. User object 2. Direct localStorage
            const token = tokenType === 'refresh' 
                ? user?.refresh_token || LocalStorageService.get('refresh_token')
                : user?.access_token || LocalStorageService.get('access_token');

            return token || null;
        } catch (error) {
            console.error('Error retrieving token:', error);
            return null;
        }
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
    
    signout: () => {
        LocalStorageService.remove(USER_KEY);
    },
    
    updateLocalUser: (updatedData: any) => {
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
