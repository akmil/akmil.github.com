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

    getToken(asHeader) {
        const cookieToken = this.cookieStorage.get(CONST.cookieStorage.token);
        return (asHeader) ? {headers: {token: cookieToken}} : cookieToken;
    }

    getMetadata(slotIndex, cbError) {
        // const getPath = CONST.getPath;
        const url = CONST.getPath('instagramDirect_getMetaData');
        return this.network.sendRequest(url, this.getToken('asHeader'), cbError);
    }

    getMetadataDetailUsers(details, cbError) {
        const cursor = (details.cursor) ? `?cursor=${details.cursor}` : '';
        return this.network.sendRequest(`${CONST.getPath('instagramDirect_getMetaData')}/${details.slotindex}${cursor}`,
            this.getToken('asHeader'), cbError);
    }

    getMetadataDetailConversation(token, details, cbError) {
        const cursor = (details.cursor) ? `?cursor=${details.cursor}` : '';
        return this.network.sendRequest(`${CONST.getPath('instagramDirect_getMetaDataConversation', details.slotindex)}/meta/${details.conversationId}${cursor}`,
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
        return this.network.sendRequest(`${CONST.getPath('instagramDirect_postMessage')}/${details.slotindex}/${details.conversationId}/text`,
            setting, cbError);
    }
    // --- Request Pending
    getRequestPending(username, cbError) {
        // const cursor = (details.cursor) ? `?cursor=${details.cursor}` : '';
        return this.network.sendRequest(`${CONST.getPath('instagramDirect_RequestPending')}/${username}`,
        this.getToken('asHeader'), cbError);
    }
    putRequestPending(confirmUserData, cbError) {
        const setting = {
            ...this.settingPost,
            method: 'PUT',
            headers: {
                ...this.settingPost.headers,
                'token': this.getToken()
            }
        };
        const {username, conversationId} = confirmUserData;
        return this.network.sendRequest(`${CONST.getPath('instagramDirect_RequestPending')}/${username}/${conversationId}`,
            setting, cbError);
    }
    delRequestPending(confirmUserData, cbError) {
        const setting = {
            method: 'DELETE',
            headers: {
                ...this.settingPost.headers,
                'token': this.getToken()
            }
        };
        const {username, conversationId} = confirmUserData;
        return this.network.sendRequest(`${CONST.getPath('instagramDirect_RequestPending')}/${username}/${conversationId}`,
            setting, cbError);
    }

}

let userInstance = null;

if (!userInstance) {
    userInstance = new UserConversation();
}

export default userInstance;
