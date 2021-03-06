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
    // /v1/registration/basic/password/recovering
    recovering(formData, cbError) {
        const setting = {...this.settingPost, body: JSON.stringify(formData)};
        return this.network.sendRequest(CONST.getPath('recovering'), setting, cbError);
    }

    addInstagramAccount(formData, slotIndex, cbError) {
        const {username, password, ip, port, usernameProxy, passwordProxy} = formData;

        // TODO: del proxyTMP after beta-testing
        const proxyTMP = {
            'proxy': {
                'host': ip,
                port,
                username: usernameProxy,
                password: passwordProxy
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

        return this.network.sendRequest(CONST.getPath('instagram_addAccount', slotIndex), setting, cbError);
    }
    editInstagramAccount(slotindex, body) {
        const setting = {
            method: 'PUT',
            headers: {
                ...this.settingPost.headers,
                'token': this.getToken()
            },
            body
        };
        const url = `${CONST.getPath('instagram_modifyAccount', slotindex)}`;
        console.log(url);
        return this.network.sendRequest(`${CONST.getPath('instagram_modifyAccount', slotindex)}`, setting);
    }
    updateInstagramAccount(slotIndex, body, cbError) {
        const setting = {
            headers: {
                ...this.settingPost.headers,
                'token': this.getToken()
            },
            body
        };
        // const url = `${CONST.getPath('instagram_modifyAccount', username)}`;
        // console.log(url);
        return this.network.sendRequest(`${CONST.getPath('instagram_getMetaDataBySlot', slotIndex)}`, setting, cbError);
    }
    delInstagramAccount(username) {
        const setting = {
            method: 'DELETE',
            headers: {
                ...this.settingPost.headers,
                'token': this.getToken()
            }
        };
        return this.network.sendRequest(`${CONST.getPath('instagram_modifyAccount', username)}`, setting);
    }

    // getInstagramAccount() {
    //     const setting = {
    //         ...this.settingPost,
    //         method: 'GET',
    //         headers: {
    //             ...this.settingPost.headers,
    //             token: this.getToken()
    //         }
    //     };
    //     return this.network.sendRequest(CONST.getPath('instagram_addAccount'), setting);
    // }

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
    getMetadata(cbError) {
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

    postSlotAdd(slotIndex, body, cbError) {
        const setting = {
            ...this.settingPost,
            body: JSON.stringify(body),
            headers: {
                ...this.settingPost.headers,
                'token': this.getToken()
            }
        };
        return this.network.sendRequest(CONST.getPath('slots_buySlotByIndex', slotIndex), setting);
    }
    postSlotAddAccount(slotIndex, body, cbError) {
        const setting = {
            ...this.settingPost,
            body: JSON.stringify(body),
            headers: {
                ...this.settingPost.headers,
                'token': this.getToken()
            }
        };
        return this.network.sendRequest(CONST.getPath('slots_buySlotByIndex', slotIndex), setting);
    }
}

let userInstance = null;

if (!userInstance) {
    userInstance = new User();
}

export default userInstance;
