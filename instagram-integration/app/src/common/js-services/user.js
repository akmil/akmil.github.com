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

export default class User {
    constructor() {
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
    }

    isLoggedIn() {
        return !!this.cookieStorage.read('CTC.COOKIES.SESSION_ALIVE');
    }

    login(formData) {
        const setting = {...this.settingPost, body: JSON.stringify(formData)};
        return this.network.sendRequest(this.loginUrl, setting);
    }

    confirm(token) {
        const setting = {
            ...this.settingPost,
            method: 'GET'
        };
        const confirmUrl = CONST.getPath('confirmation');
        return this.network.sendRequest(`${confirmUrl}?${token}`, setting);
    }

    register(formData) {
        const setting = {
            ...this.settingPost,
            body: JSON.stringify(formData)
        };
        return this.network.sendRequest(CONST.getPath('registration'), setting);
    }
}
