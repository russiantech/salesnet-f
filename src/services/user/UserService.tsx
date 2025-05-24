import { UsersService } from "../local/UsersService";
import { AxiosService} from "../net/base/AxiosService";

// Define interfaces for the data structures
interface User {
    email: string;
    password: string;
    name?: string;
    refresh_token?: string;
}

interface SignupUser {
    email: string;
    password: string;
    name: string;
    confirmPassword?: string;
}

interface UpdateProfileData {
    name?: string;
    email?: string;
    // Add other profile fields as needed
}

interface ChangePasswordData {
    currentPassword: string;
    newPassword: string;
    confirmPassword?: string;
}

interface Pagination {
    page: number;
    page_size: number;
}

export const AxiosUsersService = {
    signin(user: User) {
        return AxiosService.json.post('/users/signin', user);
    },

    signout(): void {
        UsersService.signout();
    },

    signup(user: SignupUser) {
        return AxiosService.json.post('/users/signup', user);
    },

    getProfile() {
        return AxiosService.json.get(`/users/current`);
    },

    updateProfile(data: UpdateProfileData) {
        return AxiosService.json.put('/users', data);
    },

    refreshToken() {
        return AxiosService.json.post('/auth/refresh-token', {
            refresh_token: UsersService.getCurrentUser()?.refresh_token
        });
    },

    changePassword(data: ChangePasswordData) {
        return AxiosService.json.put('/users/change-password', data);
    },

    deleteAccount() {
        return AxiosService.json.delete('/users/account');
    },

    fetchAll(pagination: Pagination = { page: 1, page_size: 10 }) {
        return AxiosService.json.get('/users');
    },
};