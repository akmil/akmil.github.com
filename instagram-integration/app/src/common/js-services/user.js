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
        return !!this.getToken();
    }

    isEmailConfirmed() {
        return (this.cookieStorage.get(CONST.cookieStorage.emailConfirmed) === 'true');
    }

    getToken() {
        const cookieToken = this.cookieStorage.get(CONST.cookieStorage.token);
        // const token = cookieToken.substring(1, cookieToken.length - 1);
        // console.log(cookieToken);
        // console.log(token);
        return cookieToken;
    }

    login(formData, cbError) {
        const setting = {...this.settingPost, body: JSON.stringify(formData)};
        return this.network.sendRequest(CONST.getPath('login'), setting, cbError);
    }

    addInstagramAccount(formData, cbError) {
        const setting = {
            ...this.settingPost,
            body: JSON.stringify(formData),
            headers: {
                ...this.settingPost.headers,
                token: this.getToken()
            }
        };
        return this.network.sendRequest(CONST.getPath('instagram_addAccount'), setting, cbError);
    }

    getInstagramAccount(formData) {
        const setting = {
            ...this.settingPost,
            method: 'GET',
            headers: {
                ...this.settingPost.headers,
                token: this.getToken()
            }
        };
        return this.network.sendRequest(CONST.getPath('instagram_addAccount'), setting);
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
