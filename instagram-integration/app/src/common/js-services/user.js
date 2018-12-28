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
        return (this.cookieStorage.get(CONST.cookieStorage.emailConfirmed) === 'confirmed');
    }

    getToken() {
        const cookieToken = this.cookieStorage.get(CONST.cookieStorage.token);
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

    getInstagramAccount() {
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

    getMetadata(token, cbError) {
        return this.network.sendRequest(`${CONST.getPath('instagramAccount_getMetaData')}`, {headers: {token}}, cbError);
    }

    getSecurityKey(username, checkpointType) {
        const setting = {
            ...this.settingPost,
            body: JSON.stringify({'type': checkpointType}), // todo: tmp set, it should be 'type'
            headers: {
                ...this.settingPost.headers,
                'token': '3e321e60029711e99264a0481c8e17d4' // todo: this.getToken()
            }
        };
        return this.network.sendRequest(`${CONST.getPath('instagramAccount_checkpoint')}${username}`, setting);
    }

    confirmSecurityKey(key, username) {
        const setting = {
            method: 'DELETE',
            body: JSON.stringify({'security_code': key}),
            headers: {
                ...this.settingPost.headers,
                'token': '3e321e60029711e99264a0481c8e17d4' // todo: this.getToken()
            }
        };
        return this.network.sendRequest(`${CONST.getPath('instagramAccount_confirmKey')}${username}`, setting);
    }

}

let userInstance = null;

if (!userInstance) {
    userInstance = new User();
}

export default userInstance;
