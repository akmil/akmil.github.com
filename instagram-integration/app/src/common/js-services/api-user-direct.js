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
        return this.network.sendRequest(`${CONST.getPath('instagramDirect_getMetaData')}`, {headers: {'token': this.getToken()}}, cbError);
    }

    getMetadataDetailUsers(details, cbError) {
        const cursor = (details.cursor) ? `?cursor=${details.cursor}` : '';
        return this.network.sendRequest(`${CONST.getPath('instagramDirect_getMetaData')}/${details.username}${cursor}`,
         {headers: {'token': this.getToken()}}, cbError);
    }

    getMetadataDetailConversation(token, details, cbError) {
        const cursor = (details.cursor) ? `?cursor=${details.cursor}` : '';
        return this.network.sendRequest(`${CONST.getPath('instagramDirect_getMetaData')}/${details.username}/${details.conversationId}${cursor}`,
            {headers: {token}}, cbError);
    }
    postMetadataDetailConversation(token, details, cbError) {
        const setting = {
            ...this.settingPost,
            body: JSON.stringify({'value': details.value}),
            headers: {
                ...this.settingPost.headers,
                'token': this.getToken()
            }
        };
        return this.network.sendRequest(`${CONST.getPath('instagramDirect_postMessage')}/${details.username}/${details.conversationId}/text`,
            setting, cbError);
    }
    getRequestPending(username, cbError) {
        // const cursor = (details.cursor) ? `?cursor=${details.cursor}` : '';
        return this.network.sendRequest(`${CONST.getPath('instagramDirect_RequestPending')}/${username}`,
        {headers: {'token': this.getToken()}}, cbError);
    }

}

let userInstance = null;

if (!userInstance) {
    userInstance = new UserConversation();
}

export default userInstance;
