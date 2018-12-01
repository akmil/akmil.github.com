// import $ from 'jquery';
import {CONST} from './consts';
import Network from './network';
import CookieStorage from './cookie';

class User {

    constructor() {
        this.network = new Network();
        this.cookieStorage = CookieStorage;
        this.settingPost = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };
    }

    isLoggedIn() {
        return !!this.cookieStorage.get('user_logged');
    }

    login(formData) {
        const setting = {...this.settingPost, body: JSON.stringify(formData)};
        return this.network.sendRequest(CONST.getPath('login'), setting);
    }

    confirm(token) {
        // const confirmUrl = CONST.getPath('confirmation');
        return this.network.sendRequest(`${CONST.getPath('confirmation') + token}`);
    }

    register(formData) {
        const setting = {
            ...this.settingPost,
            body: JSON.stringify(formData)
        };
        return this.network.sendRequest(CONST.getPath('registration'), setting);
    }
}

let userInstance = null;

if (!userInstance) {
    userInstance = new User();
}
// return instance;

export default userInstance;
