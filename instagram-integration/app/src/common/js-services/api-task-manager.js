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
        this.postStartFollowingList = this.postStartFollowingList;
        this.postStartChatBot = this.postStartChatBot;
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

    getMetadata(path, cbError) {
        const {type, subType} = path;
        return this.network.sendRequest(`${CONST.getPathTypeSubtype('instagramTaskManager_getTaskByTypes', type, subType)}`,
            this.getToken('asHeader'), cbError);
    }

    getTaskTypes(details, cbError) {
        return this.network.sendRequest(`${CONST.getPath('instagramTaskManager_getTaskTypes')}`,
            this.getToken('asHeader'), cbError);
    }

    stopTaskByID(taskId, cbError) {
        const setting = {
            ...this.settingPost,
            method: 'PUT',
            headers: {
                ...this.settingPost.headers,
                'token': this.getToken()
            }
        };
        const url = CONST.getPath('instagramTaskManager_putStopTaskByID', taskId);
        return this.network.sendRequest(url,
            setting, cbError);
    }

    deleteTaskByID(taskId, cbError) {
        const setting = {
            ...this.settingPost,
            method: 'DELETE',
            headers: {
                ...this.settingPost.headers,
                'token': this.getToken()
            }
        };
        const url = CONST.getPath('instagramTaskManager_delRemoveTaskByID', taskId);
        return this.network.sendRequest(url,
            setting, cbError);
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

    postStartFollowingList(body, cbError, path) {
        const setting = {
            ...this.settingPost,
            headers: {
                ...this.settingPost.headers,
                'token': this.getToken(),
                'X-Auth-Token': 'e2f4336abea440489c51c5c10294ea12'
            }
        };
        setting.body = JSON.stringify(body);
        const url = path ? `${CONST.getPath(path)}` : `${CONST.getPath('instagramTaskManager_postStartFollowingList')}`;

        return this.network.sendRequest(url,
            setting, cbError);
    }

    postStartChatBot(body, cbError) {
        const path = 'instagramTaskManager_postStartChatBot';
        return this.postStartFollowingList(body, cbError, path);
    }
}

let userInstance = null;

if (!userInstance) {
    userInstance = new UserTaskManager();
}

export default userInstance;
