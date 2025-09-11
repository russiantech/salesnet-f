import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { NotificationService } from "../services/local/NotificationService";
import { UsersService } from "../services/local/UsersService";

// Social Authentication Hook
const useSocialAuth = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    
    useEffect(() => {
        // Handle OAuth callback parameters
        const accessToken = searchParams.get('access_token');
        const refreshToken = searchParams.get('refresh_token');
        const success = searchParams.get('success');
        const error = searchParams.get('error');

        if (success && accessToken) {
            // Store tokens and authenticate user
            const userData = {
                access_token: accessToken,
                refresh_token: refreshToken,
                success: true
            };
            
            UsersService.authenticate(userData);
            NotificationService.showDialog('Social authentication successful!', 'success');
            navigate('/users/personal', { replace: true });
        } else if (error) {
            NotificationService.showDialog(`Authentication failed: ${error}`, 'danger');
        }

    }, [searchParams, navigate]);
};

export default useSocialAuth;
// 
