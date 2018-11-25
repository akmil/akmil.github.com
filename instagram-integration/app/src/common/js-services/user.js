import $ from 'jquery';
import {CONST} from './consts';
import Network from './network';

class CookieStorage {
    read(key) {
        const value = $.cookie(key);
        return value === undefined ? null : value;

        /*
        if (CTC.COOKIES.DSS_SESSION_EXPIRATION === key) {
            return value === undefined ? null : this._modifySessionExpirationValue(value);
        } else {
            return value === undefined ? null : value;
        }*/
    }
}

// let instance = null;

class User {
    static instance = 'instance';

    constructor() {
        // // eslint-disable-next-line no-undef
        // if (!instance) {
        //     instance = this;
        // }
        this.instance1 = this;
        this.network = new Network();
        this.cookieStorage = new CookieStorage();
        this.regUrl = CONST.getPath('registration');
        this.loginUrl = CONST.getPath('login');
        this.settingPost = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };
        // eslint-disable-next-line no-undef
        // console.log(instance);
        // return instance;
    }

    isLoggedIn() {
        // sessionStorage.getItem('user_logged')
        return !!this.cookieStorage.read('user_logged');
    }

    login(formData) {
        const setting = {...this.settingPost, body: JSON.stringify(formData)};
        return this.network.sendRequest(this.loginUrl, setting);
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

export default User;