import { LocalStorageService } from "./base/LocalStorageService";

// Type definitions
type UserObserver = (user: any) => void;
type TokenType = 'access' | 'refresh';

interface User {
  access_token?: string;
  refresh_token?: string;
  [key: string]: any;
}

let observers: UserObserver[] = [];
const USER_KEY = 'currentUser';

function notifyObservers(user: any): void {
  observers.forEach((observer) => {
    observer(user);
  });
}

export const UsersService = {
  subscribe(observer: UserObserver, receiveFirstState: boolean = true): void {
    // Ensure no more than one subscription
    if (!observers.includes(observer)) {
      observers.push(observer);
      if (receiveFirstState) {
        const userData = LocalStorageService.get(USER_KEY);
        let user: any = {};

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

  unsubscribe(observer: UserObserver): void {
    const index = observers.indexOf(observer);
    if (index > -1) {
      observers.splice(index, 1);
    }
  },

  isAuthenticated(): boolean {
    if (typeof window === "undefined") {
      return false;
    }
    const user = LocalStorageService.get(USER_KEY);
    return !!user;
  },

  authenticate(userObj: User): void {
    if (typeof window !== 'undefined') {
      LocalStorageService.set(USER_KEY, JSON.stringify(userObj));
    }
    notifyObservers(userObj);
  },

  // Method to retrieve the specified token
  getToken(tokenType: TokenType = 'access'): string | null {
    try {
      // Get user from localStorage
      const userData = LocalStorageService.get(USER_KEY);
      let user: User | null = null;
      
      if (userData) {
        try {
          user = JSON.parse(userData);
        } catch (error) {
          console.error('Error parsing user data for token:', error);
          return null;
        }
      }

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

  saveUser(user: User): void {
    LocalStorageService.set(USER_KEY, JSON.stringify(user));
    notifyObservers(user);
  },

  getUser(): User | null {
    try {
      const userData = LocalStorageService.get(USER_KEY);
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      console.error('Error parsing user data:', error);
      return null;
    }
  },

  clearSession(): void {
    LocalStorageService.remove(USER_KEY);
    notifyObservers({});
  },

  isNotAuthenticated(): boolean {
    return !this.isAuthenticated();
  },

  getCurrentUser(): User | null {
    try {
      const userData = LocalStorageService.get(USER_KEY);
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      console.error('Error getting current user:', error);
      return null;
    }
  },

  signout(): void {
    LocalStorageService.remove(USER_KEY);
    notifyObservers({});
  },

  updateLocalUser(updatedData: Partial<User>): User | null {
    const currentUser = UsersService.getCurrentUser();
    if (currentUser) {
      const updatedUser = { ...currentUser, ...updatedData };
      LocalStorageService.set(USER_KEY, JSON.stringify(updatedUser));
      notifyObservers(updatedUser);
      return updatedUser;
    }
    return null;
  }
};