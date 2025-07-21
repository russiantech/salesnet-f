 
import { LocalStorageService } from "../local/base/LocalStorageService";

// Define interfaces for better type safety
interface User {
    id?: string;
    name?: string;
    email?: string;
    token?: string;
    [key: string]: any; // Allow additional properties
}

type Observer = (user: User | null) => void;

let observers: Observer[] = [];
const USER_KEY = 'currentUser';

function notifyObservers(user: User | null): void {
    observers.forEach((o: Observer) => {
        o(user);
    });
}

export const UserStore = {

    subscribe(observer: Observer, receiveFirstState: boolean = true): void {
        // no more than one subscription
        if (!observers.includes(observer)) {
            observers.push(observer);
            if (receiveFirstState) {
                const userString = LocalStorageService.get(USER_KEY);
                const user: User | null = userString ? JSON.parse(userString) : null;
                observer(user);
            }
        }
    },

    unsubscribe(observer: Observer): void {
        const index = observers.indexOf(observer);
        if (index > -1)
            observers.splice(index, 1);
    },

    isAuthenticated(): boolean {
        if (typeof window === "undefined")
            return false;
        const user = LocalStorageService.get(USER_KEY);
        return !!user;
    },

    authenticate(userObj: User): void {
        if (typeof window !== 'undefined') {
            LocalStorageService.set(USER_KEY, JSON.stringify(userObj));
        }
        notifyObservers(userObj);
    },

    getToken(): string | null {
        const userString = LocalStorageService.get(USER_KEY);
        if (!userString) return null;
        
        try {
            const user: User = JSON.parse(userString);
            return user?.token || null;
        } catch {
            return null;
        }
    },

    saveUser(user: User): void {
        LocalStorageService.set(USER_KEY, JSON.stringify(user)); // Changed from save to set
        notifyObservers(user);
    },

    getUser(): User | null {
        const userString = LocalStorageService.get(USER_KEY);
        if (!userString) return null;
        
        try {
            return JSON.parse(userString);
        } catch {
            return null;
        }
    },

    clearSession(): void {
        LocalStorageService.remove(USER_KEY); // Changed from clear to remove
        notifyObservers(null);
    },

    isNotAuthenticated(): boolean {
        return !this.isAuthenticated();
    },

    getCurrentUser: (): User | null => {
        const userString = LocalStorageService.get(USER_KEY);
        return userString ? JSON.parse(userString) : null;
    },
    
    logout: (): void => {
        LocalStorageService.remove(USER_KEY);
        notifyObservers(null);
    },
    
    updateLocalUser: (updatedData: Partial<User>): User | null => {
        const currentUser = UserStore.getCurrentUser(); // Fixed: Use UserStore instead of UsersService
        if (currentUser) {
            const updatedUser = { ...currentUser, ...updatedData };
            LocalStorageService.set(USER_KEY, JSON.stringify(updatedUser));
            notifyObservers(updatedUser); // Notify observers of the update
            return updatedUser;
        }
        return null;
    }
};