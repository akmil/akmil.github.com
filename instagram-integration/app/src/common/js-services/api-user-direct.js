// import $ from 'jquery';
import {CONST} from './consts';
import Network from './network';
import CookieStorage from './cookie';

class UserConversation {

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

    getMetadata(token, cbError) {
        return this.network.sendRequest(`${CONST.getPath('instagramDirect_getMetaData')}`, {headers: {token}}, cbError);
    }

    getMetadataDetailConversation(token, details, cbError) {
        return this.network.sendRequest(`${CONST.getPath('instagramDirect_getMetaData')}/${details.userName}/${details.conversationId}`,
            {headers: {token}}, cbError);
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
    userInstance = new UserConversation();
}

export default userInstance;
