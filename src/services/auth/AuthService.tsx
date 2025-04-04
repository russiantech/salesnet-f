import { AxiosService } from "../base/AxiosService";
import { AuthStore } from "./AuthStore";

export const AuthService = {
  async signin(credentials: { email: string; password: string }) {
    const response = await AxiosService.post('/auth/signinn', credentials);
    
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
    if (!refreshToken) throw new Error('No refresh token available');
    
    const response = await AxiosService.post('/auth/refresh-token', {
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
    await AxiosService.post('/auth/signout');
    AuthStore.clear();
  }
};