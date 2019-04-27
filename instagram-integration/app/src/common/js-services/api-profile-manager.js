import {CONST} from './consts';
import Network from './network';
import CookieStorage from './cookie';

class UserProfileManager {

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

    getToken(asHeader) {
        const cookieToken = this.cookieStorage.get(CONST.cookieStorage.token);
        return (asHeader) ? {headers: {token: cookieToken}} : cookieToken;
    }

    updatePassword(body, cbError) {
        const setting = {
            ...this.settingPost,
            method: 'PUT',
            headers: {
                ...this.settingPost.headers,
                'token': this.getToken()
            },
            body
        };
        const url = CONST.getPath('editProfile');
        return this.network.sendRequest(url,
            setting, cbError);
    }
}

let userProfileInstance = null;

if (!userProfileInstance) {
    userProfileInstance = new UserProfileManager();
}

export default userProfileInstance;
