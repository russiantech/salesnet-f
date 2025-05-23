import { AxiosService } from "../net/base/AxiosService";
import { AuthStore } from "./AuthStore";
export const AuthService = {
    async signin(credentials) {
        const response = await AxiosService.json.post('/auth/signinn', credentials);
        AuthStore.setState({
            user: response.data.user,
            tokens: {
                access_token: response.data.access_token,
                refresh_token: response.data.refresh_token
            }
        });
        return response.data;
    },
    async refreshToken() {
        const refreshToken = AuthStore.getState().tokens?.refresh_token;
        if (!refreshToken)
            throw new Error('No refresh token available');
        const response = await AxiosService.json.post('/auth/refresh-token', {
            refresh_token: refreshToken
        });
        AuthStore.setState({
            ...AuthStore.getState(),
            tokens: {
                access_token: response.data.access_token,
                refresh_token: response.data.refresh_token
            }
        });
        return response.data;
    },
    async logout() {
        await AxiosService.json.post('/auth/signout');
        AuthStore.clear();
    }
};
