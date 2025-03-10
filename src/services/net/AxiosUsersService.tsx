import {UsersService} from './../local/UsersService'
import {AxiosService} from "./base/AxiosService";


export const AxiosUsersService = {


    login(user) {
        return AxiosService.post('/users/signin', user);
    },

    logout() {
        if (typeof window !== "undefined")
            UsersService.clearSession();
    },

    create(user) {
        // console.log(user);
        return AxiosService.post('/users/signup', user);
    },

    fetchAll() {

    },
};
