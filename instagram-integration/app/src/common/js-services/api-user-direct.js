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
        return this.network.sendRequest(`${CONST.getPath('instagramDirect_getMetaData')}/${details.username}/${details.conversationId}`,
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
        return this.network.sendRequest(`${CONST.getPath('instagramDirect_getMetaData')}/${details.username}/${details.conversationId}/text`,
            setting, cbError);
    }

    getFormattedDateUtil(tStamp, showFullTime) {
        const date = new Date(tStamp);

        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hour = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();

        month = (month < 10 ? '0' : '') + month;
        day = (day < 10 ? '0' : '') + day;
        hour = (hour < 10 ? '0' : '') + hour;
        min = (min < 10 ? '0' : '') + min;
        sec = (sec < 10 ? '0' : '') + sec;

        let str = '';
        if (!showFullTime) {
            str = `${hour}:${min}`;
        } else {
            str = `${date.getFullYear()}-${month}-${day}_${hour}:${min}:${sec}`;
        }

        return str;
    }

}

let userInstance = null;

if (!userInstance) {
    userInstance = new UserConversation();
}

export default userInstance;
