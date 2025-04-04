import { UsersService } from './../local/UsersService';
import { AxiosService } from "./base/AxiosService";

export const AxiosUsersService = {
    signin(user) {
        return AxiosService.post('/users/signin', user);
    },

    logout() {
        UsersService.logout();
    },

    signup(user) {
        return AxiosService.post('/users/signup', user);
    },

    getProfile() {
        return AxiosService.get(`/users/current`);
    },

    updateProfile(data) {
        return AxiosService.put('/users', data);
    },

    refreshToken() {
        return AxiosService.post('/auth/refresh-token', {
            refresh_token: UsersService.getCurrentUser()?.refresh_token
        });
    },

    changePassword(data) {
        return AxiosService.put('/users/change-password', data);
    },

    deleteAccount() {
        return AxiosService.delete('/users/account');
    },

    fetchAll(pagination = { page: 1, page_size: 10 }) {
        return AxiosService.fetchPage('/users', pagination);
    }
};