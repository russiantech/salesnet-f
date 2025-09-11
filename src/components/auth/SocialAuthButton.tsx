// src/components/auth/SocialAuthButton.tsx
// Reusable social authentication button component

import { useState } from 'react';
import { SocialAuthService } from '../../services/local/SocialAuthService';

const SocialAuthButton = ({
    provider, 
    className = '', 
    size = 'lg',
    disabled = false,
    children 
}) => {
    const [isLoading, setIsLoading] = useState(false);
    
    const providerConfig = SocialAuthService.getProvider(provider);
    
    if (!providerConfig) {
        console.warn(`Unknown provider: ${provider}`);
        return null;
    }

    const isEnabled = providerConfig.enabled && !disabled;

    const handleSocialAuth = async (e) => {
        e.preventDefault();
        
        if (!isEnabled || isLoading) return;

        setIsLoading(true);
        
        try {
            await SocialAuthService.authenticate(provider);
        } catch (error) {
            console.error(`${provider} authentication failed:`, error);
        } finally {
            setIsLoading(false);
        }
    };

    const buttonClasses = [
        'btn',
        `btn-${size}`,
        providerConfig.color,
        'w-100',
        'px-2',
        className,
        isLoading && 'disabled',
        !isEnabled && 'disabled'
    ].filter(Boolean).join(' ');

    return (
        <button 
            type="button"
            className={buttonClasses}
            onClick={handleSocialAuth}
            disabled={!isEnabled || isLoading}
            title={!providerConfig.enabled ? `${providerConfig.name} authentication is currently unavailable` : undefined}
        >
            {isLoading ? (
                <>
                    <div className="spinner-grow spinner-grow-sm me-2" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    Connecting...
                </>
            ) : (
                <>
                    <i className={`${providerConfig.icon} ms-1 me-1`} />
                    {children || providerConfig.name}
                </>
            )}
        </button>
    );
};

export default SocialAuthButton;