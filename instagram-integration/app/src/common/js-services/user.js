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

    getToken(asHeader) {
        const cookieToken = this.cookieStorage.get(CONST.cookieStorage.token);
        return (asHeader) ? {headers: {token: cookieToken}} : cookieToken;
    }

    login(formData, cbError) {
        const setting = {...this.settingPost, body: JSON.stringify(formData)};
        return this.network.sendRequest(CONST.getPath('login'), setting, cbError);
    }

    addInstagramAccount(formData, cbError) {
        const {username, password} = formData;

        // TODO: del proxyTMP after beta-testing
        const proxyTMP = {
            'proxy': {
                'host': '192.168.0.1',
                'port': 8080,
                username,
                password
            }
        };
        const body = JSON.stringify({username,
            password,
            ...proxyTMP // TODO: del proxyTMP after beta-testing
        });
        const setting = {
            ...this.settingPost,
            body,
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

    // todo: move to account-list
    getMetadata(token, cbError) {
        return this.network.sendRequest(`${CONST.getPath('instagramAccount_getMetaData')}`,
            this.getToken('asHeader'), cbError);
    }
    getMetadataLazy(cbError) {
        return this.network.sendRequest(`${CONST.getPath('instagramAccount_getMetaData')}?lazy=true`,
            this.getToken('asHeader'), cbError);
    }

    getSecurityKey(username, checkpointType) {
        const setting = {
            ...this.settingPost,
            body: JSON.stringify({'type': checkpointType}), // todo: tmp set, it should be 'type'
            headers: {
                ...this.settingPost.headers,
                'token': this.getToken()
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
                'token': this.getToken()
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
