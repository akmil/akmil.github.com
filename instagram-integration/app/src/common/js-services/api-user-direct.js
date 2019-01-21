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
