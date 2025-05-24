
// src/services/base/LocalStorageService.tsx
export const LocalStorageService = {
    
    get(key: string): string | null {
        if (typeof window === 'undefined') return null;
        return localStorage.getItem(key);
    },
    
    set(key: string, value: string): void {
        if (typeof window !== 'undefined') {
            localStorage.setItem(key, value);
        }
    },
    
    remove(key: string): void {
        if (typeof window !== 'undefined') {
            localStorage.removeItem(key);
        }
    },

    clear(key: string): void {
        if (typeof window !== 'undefined') {
            localStorage.removeItem(key);
        }
    },

};