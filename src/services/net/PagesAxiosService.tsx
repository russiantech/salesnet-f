import {AxiosService} from "./base/AxiosService";

export const PagesAxiosService = {
    getHome() {
        return AxiosService.json.get('/');
    },
    
    getAbout() {

    }
};
