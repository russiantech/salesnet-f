// src/services/local/SocialAuthService.ts
// Social authentication service that handles provider-specific logic

import { UsersAxiosService } from '../net/UsersAxiosService';
import { UsersService } from './UsersService';
import { NotificationService } from './NotificationService';

type ProviderKey = 'google' | 'facebook' | 'apple';

interface ProviderConfig {
    name: string;
    icon: string;
    enabled: boolean;
    color: string;
}

interface OAuthStateData {
    state: string;
    provider: ProviderKey;
    timestamp: number;
}

export const SocialAuthService = {
    /**
     * Supported OAuth providers configuration
     */
    providers: {

        google: {
            name: 'Google',
            icon: 'ci-google',
            enabled: true,
            color: 'btn-outline-secondary'
        },
        facebook: {
            name: 'Facebook', 
            icon: 'ci-facebook',
            enabled: true,
            color: 'btn-outline-secondary'
        },
        apple: {
            name: 'Apple',
            icon: 'ci-apple', 
            enabled: false,
            color: 'btn-outline-secondary'
        }
    } as Record<ProviderKey, ProviderConfig>,
    
    /**
     * Authenticate with a social provider
     */
    async authenticate(provider: ProviderKey, options: { context?: string; redirectTo?: string } = {}): Promise<any> {
        try {
            // Check if user is already authenticated
            if (UsersService.isAuthenticated()) {
                throw new Error('Already signed in. Please sign out first.');
            }

            // Validate provider
            if (!this.providers[provider] || !this.providers[provider].enabled) {
                throw new Error(`${provider} authentication is currently unavailable.`);
            }

            NotificationService.showDialog(`Authenticating with ${this.providers[provider].name}...`, 'warning');

            // Get current URL for callback
            // const callbackUrl = `${window.location.origin}${window.location.pathname}`;
            const callbackUrl = `${window.location.origin}/auth/oauth/callback/${provider}`;
            
            // Set custom headers for backend context awareness
            const headers: Record<string, string> = {
                'Client-Callback-Url': callbackUrl
            };
            
            if (options.context) {
                headers['Auth-Context'] = options.context;
            }
            if (options.redirectTo) {
                headers['Redirect-To'] = options.redirectTo;
            }
            if (document.referrer) {
                headers['Client-Referrer'] = document.referrer;
            }

            // Call backend to initiate OAuth flow
            const response = await UsersAxiosService.initiateSocialAuth(provider, headers);

            if (response.data && response.data.success && response.data.redirect) {
                // Store the OAuth state for security
                this.storeOAuthState(response.data.state, provider);
                
                // Redirect to provider's authorization URL
                window.location.href = response.data.redirect;
                
            } else {
                throw new Error(response.data?.error || 'Failed to initialize authentication');
            }

        } catch (error: any) {
            console.error(`${provider} authentication error:`, error);
            const errorMessage = error.response?.data?.error || error.message || 'Authentication failed';
            NotificationService.showDialog(errorMessage, 'error');
            throw error;
        }
    },

    /**
     * Handle OAuth callback (for client-side processing if needed)
     * This method can be called when the OAuth provider redirects back
     */
    handleCallback(urlParams: URLSearchParams): boolean {
        const code = urlParams.get('code');
        const state = urlParams.get('state');
        const error = urlParams.get('error');

        if (error) {
            const errorDescription = urlParams.get('error_description') || 'Authentication was cancelled or failed';
            NotificationService.showDialog(errorDescription, 'error');
            return false;
        }

        if (code && state) {
            // Validate state matches what we stored
            const storedState = this.getStoredOAuthState();
            if (storedState && storedState.state === state) {
                // Clear stored state
                this.clearOAuthState();
                return true;
            } else {
                NotificationService.showDialog('Invalid authentication state', 'error');
                return false;
            }
        }

        return false;
    },

    /**
     * Store OAuth state in sessionStorage for security validation
     */
    storeOAuthState(state: string, provider: ProviderKey): void {
        const stateData: OAuthStateData = {
            state: state,
            provider: provider,
            timestamp: Date.now()
        };
        sessionStorage.setItem('oauth_state', JSON.stringify(stateData));
    },

    /**
     * Retrieve stored OAuth state
     */
    getStoredOAuthState(): OAuthStateData | null {
        try {
            const stored = sessionStorage.getItem('oauth_state');
            if (stored) {
                const stateData: OAuthStateData = JSON.parse(stored);
                // Check if state is not older than 10 minutes
                if (Date.now() - stateData.timestamp < 10 * 60 * 1000) {
                    return stateData;
                }
            }
        } catch (error) {
            console.error('Error retrieving OAuth state:', error);
        }
        return null;
    },

    /**
     * Clear stored OAuth state
     */
    clearOAuthState(): void {
        sessionStorage.removeItem('oauth_state');
    },

    /**
     * Get linked social accounts for current user
     */
    async getLinkedAccounts(): Promise<any> {
        try {
            const response = await UsersAxiosService.getLinkedAccounts();
            return response.data;
        } catch (error: any) {
            console.error('Error getting linked accounts:', error);
            const errorMessage = error.response?.data?.error || error.message || 'Failed to get linked accounts';
            NotificationService.showDialog(errorMessage, 'error');
            throw error;
        }
    },

    /**
     * Unlink a social account from the current user
     */
    async unlinkAccount(provider: ProviderKey): Promise<boolean> {
        try {
            const response = await UsersAxiosService.unlinkSocialAccount(provider);
            if (response.data && response.data.success) {
                NotificationService.showDialog(`${this.providers[provider]?.name || provider} account unlinked successfully`, 'success');
                return true;
            } else {
                throw new Error(response.data?.error || 'Failed to unlink account');
            }
        } catch (error: any) {
            console.error(`Error unlinking ${provider}:`, error);
            const errorMessage = error.response?.data?.error || error.message || 'Failed to unlink account';
            NotificationService.showDialog(errorMessage, 'error');
            return false;
        }
    },

    /**
     * Check if a provider is enabled
     */
    isProviderEnabled(provider: ProviderKey): boolean {
        return this.providers[provider] && this.providers[provider].enabled;
    },

    /**
     * Get provider configuration
     */
    getProvider(provider: ProviderKey): ProviderConfig | null {
        return this.providers[provider] || null;
    }
};