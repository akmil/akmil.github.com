export const CONST = {
    url: {
        tmTypes: {
            followingT: 'FOLLOWING',
            followingSubT: ['FOLLOWING_BY_LIST', 'FOLLOWING_BY_ACTIVE_AUDIENCE'],
            unfollowingT: 'UNFOLLOWING',
            unfollowingSubT: ['UNFOLLOWING_BY_LIST', 'UNFOLLOWING_BY_ALL', 'UNFOLLOWING_BY_NON_RECIPRECOL'],
            chatBotT: 'CHAT_BOT',
            chatBotSubT: ['DEFAULT_CHAT_BOT'],
            autoanswerT: 'AUTO_ANSWER',
            autoanswerSubT: ['DEFAULT_AUTO_ANSWER'],
            autogreetT: 'AUTO_GREETING',
            autogreetSubT: ['DEFAULT_AUTO_GREETING'],
            storiesT: 'STORIES',
            storiesSubT: ['STORIES_BY_FOLLOWERS', 'STORIES_BY_ACTIVE_AUDIENCE']
        },
        base: 'http://api.luxgram.ru/v1/',
        registration: 'registration/basic/',
        login: 'registration/basic/login',
        confirmation: 'registration/basic/confirmation?token',
        instagram_addAccount: 'instagram-accounts/', // toDO: check is redundant used to add Account
        instagram_deleteAccount: username => `instagram-accounts/${username}`,
        instagramAccount_getMetaData: 'instagram-accounts/meta',
        instagramAccount_checkpoint: 'instagram-accounts/checkpoint/',
        instagramAccount_confirmKey: 'instagram-accounts/checkpoint/',
        instagramDirect_getMetaData: 'instagram-direct/meta',
        instagramDirect_postMessage: 'instagram-direct/',
        instagramTaskManager: 'instagram-task-manager/',
        instagramTaskManager_getMetaData: 'instagram-task-manager/meta',
        instagramTaskManager_getTaskTypes: 'instagram-task-manager/task/types',
        instagramTaskManager_getTaskByTypes: 'instagram-task-manager/meta/type/',
        instagramTaskManager_getDefaultConfigs: 'instagram-task-manager/config/type', // {TYPE}/subtype/{SUBTYPE}
        instagramTaskManager_postStartFollowingList: 'instagram-task-manager/task',
        instagramTaskManager_putStopTaskByID: id => `instagram-task-manager/task/${id}`,
        instagramTaskManager_delRemoveTaskByID: id => `instagram-task-manager/task/${id}`,
        instagramTaskManager_postImageAttachment: 'instagram-task-manager/task/attachment/image',
        instagramTaskManager_postTextAttachment: 'instagram-task-manager/task/attachment/users_list',
        instagramTaskManager_getPosts: accountName => `instagram-accounts/${accountName}/posts`,
        instagramTaskManager_postStartChatBot: 'instagram-task-manager/task',
        instagramTaskManager_getLogsChatBot: 'instagram-task-manager/logs/type/' // {TYPE}/subtype/{SUBTYPE}/account/{username}?page={page}
    },
    user: {
        defaulAvatar: 'https://i.imgur.com/jNNT4LE.png', // todo: get from designer
        email: '',
        password: '',
        token: ''
    },
    cookieStorage: {
        token: 'user_logged',
        emailConfirmed: 'email_confirmed'
    },
    uiSelectors: {
        headerLoginBox: 'nav .login-box',
        headerNavLoginBtn: 'nav ul li .js_login',
        headerRegBox: 'nav .register-box',
        headerRegBtn: 'nav ul li .js_register',
        instagram: {
            addAccountBtnSelector: '#js_show-login-box',
            addAccountBtnId: 'js_show-login-box'
        }
    },
    events: {
        USER_LOGGED: 'user_logged',
        USER_LOGOUT: 'user_logout',
        USER_EMAIL_CONFIRMED: 'user_email_confirmed',
        STOP_FIXED_SPINNER: 'stop_fixed_spinner',
        messages: {
            RECIEVE_NEW_MESSAGE: 'receive_new_message'
        },
        instagramAccouns: {
            INSTAGRAM_ACCOUNS_NEED_REFRESH: 'instagram_accouns_need_refresh',
            INSTAGRAM_ACCOUNS_RENDERED: 'instagram_accouns_rendered',
            INSTAGRAM_ACCOUNS_RENDERED_LAZY: 'instagram_accouns_rendered_lazy'
        },
        autoarnswer: {
            IMAGE_UPLOADED: 'image_loaded',
            TEXT_FILE_UPLOADED: 'text_file_uploaded'
        },
        tasks: {
            NEW_TASK_CREATED: 'new_task_created'
        },
        logs: {
            STOP_LOGS: 'stop_logs'
        }
    },
    logsState: {
        selectCls: 'js_logs-accounts',
        selectClsLogsTaskType: 'js_logs-subtypes',
        wrapperSubtype: '.log-subype'
    },
    getPath(name, id) {
        if (typeof this.url[name] === 'function' && id) {
            return this.url.base + this.url[name](id);
        }
        return this.url.base + this.url[name];
    },
    getPathTypeSubtype(name, path, page) {
        const {type, subtype, username} = path;
        if (typeof this.url[name] === 'function' && type && subtype) {
            if (username && page) {
                return this.url.base + this.url[name](path, page);
            }
            if (username) {
                return this.url.base + this.url[name](path);
            }
            return this.url.base + this.url[name](type, subtype);
        }
        return this.url.base + this.url[name];
    },
    getPathByArr(name, array, page) {
        const base = this.url.base + this.url[name];
        const reducer = (accumulator, currentValue) => `${accumulator}/${currentValue}`;
        const url = base + array.reduce(reducer); // ${type}/subtype/${subtype}
        // console.log(url);
        if (page) {
            return `${url}?page=${page}`;
        }
        return url;
    }
};
