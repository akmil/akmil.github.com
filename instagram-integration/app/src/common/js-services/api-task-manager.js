// import $ from 'jquery';
import {CONST} from './consts';
import Network from './network';
import CookieStorage from './cookie';

class UserTaskManager {

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

    // isLoggedIn() {
    //     return !!this.getToken();
    // }
    //
    // isEmailConfirmed() {
    //     return (this.cookieStorage.get(CONST.cookieStorage.emailConfirmed) === 'confirmed');
    // }
    getToken(asHeader) {
        const cookieToken = this.cookieStorage.get(CONST.cookieStorage.token);
        return (asHeader) ? {headers: {token: cookieToken}} : cookieToken;
    }

    getMetadata(cbError) {
        return this.network.sendRequest(`${CONST.getPath('instagramTaskManager_getMetaData')}`,
            this.getToken('asHeader'), cbError);
    }

    getTaskTypes(details, cbError) {
        return this.network.sendRequest(`${CONST.getPath('instagramTaskManager_getTaskTypes')}`,
            this.getToken('asHeader'), cbError);
    }

    getDefaultConfigs(cbError) {
        const details = {
            STRATEGY_TYPE: 'FOLLOWING',
            STRATEGY_SUBTYPE: 'FOLLOWING_LIST'
        };
        const url = `${CONST.getPath('instagramTaskManager_getDefaultConfigs')}/${details.STRATEGY_TYPE}/subtype/${details.STRATEGY_SUBTYPE}`;
        return this.network.sendRequest(url,
            this.getToken('asHeader'), cbError);
    }

    postStartFollowingList(details, cbError) {
        const setting = {
            ...this.settingPost,
            headers: {
                ...this.settingPost.headers,
                'token': this.getToken()
            }
        };
        setting.body = JSON.stringify({
            'username': 'leshhowanton',
            'type': 'FOLLOWING',
            'subtype': 'FOLLOWING_LIST',

            'user_default_config': {
                'task_mode': 'SAFE',
                'following_criteria': {
                    'limit': 7500,
                    'unfollow_then': true,
                    'follow_on_closed_profiles': true,
                    'have_posts': {
                        'from': 3,
                        'to': 999999
                    },
                    'have_followers': {
                        'from': 30,
                        'to': 99999
                    },
                    'have_followings': {
                        'from': 0,
                        'to': 999
                    },
                    'gender': 'ANY'
                }
            },

            'user_custom_config': {
                'users': [12496926, 251400884]
            }
        });

        return this.network.sendRequest(`${CONST.getPath('instagramTaskManager_postStartFollowingList')}`,
            setting, cbError);
    }
}

let userInstance = null;

if (!userInstance) {
    userInstance = new UserTaskManager();
}

export default userInstance;
