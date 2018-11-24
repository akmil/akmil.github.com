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
    }

    isLoggedIn() {
        return !!this.cookieStorage.read('CTC.COOKIES.SESSION_ALIVE');
    }

    signup(formData) {
        const setting = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        };
        console.log('consts', this.loginUrl);
        return this.network.sendRequest(this.loginUrl, setting)
            .then(function(data) {
                console.log('request succeeded with JSON response', data);
            });

    }

    register(formData) {
        const setting = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        };
        console.log('consts', this.regUrl);
        return this.network.sendRequest(CONST.getPath('registration'), setting);
    }
}
