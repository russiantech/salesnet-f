import { UsersService } from './../local/UsersService';
import { AxiosService } from "./base/AxiosService";

export const AxiosUsersService = {
    signin(user) {
        return AxiosService.json.post('/users/signin', user);
    },

    signout() {
        UsersService.logout();
    },

    signup(user) {
        return AxiosService.json.post('/users/signup', user);
    },

    getProfile() {
        return AxiosService.json.get(`/users/current`);
    },

    updateProfile(data) {
        return AxiosService.multipart.put('/users', data);
    },

    refreshToken() {
        return AxiosService.json.post('/auth/refresh-token', {
            refresh_token: UsersService.getCurrentUser()?.refresh_token
        });
    },

    changePassword(data) {
        return AxiosService.multipart.put('/users/change-password', data);
    },

    deleteAccount() {
        return AxiosService.json.delete('/users/account');
    },

    fetchAll(pagination = { page: 1, page_size: 10 }) {
        return AxiosService.fetchPage('/users', pagination);
    }
};