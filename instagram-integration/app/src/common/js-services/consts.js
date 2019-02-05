export const CONST = {
    url: {
        tmTypes: {
            followingT: 'FOLLOWING',
            followingSubT: ['FOLLOWING_LIST'],
            chatBotT: 'CHAT_BOT',
            chatBotSubT: ['DEFAULT_CHAT_BOT']
        },
        base: 'http://api.luxgram.ru/v1/',
        registration: 'registration/basic/',
        login: 'registration/basic/login',
        confirmation: 'registration/basic/confirmation?token',
        instagram_addAccount: 'instagram-accounts/', // toDO: check is redundant
        instagramAccount_getMetaData: 'instagram-accounts/meta',
        instagramAccount_checkpoint: 'instagram-accounts/checkpoint/',
        instagramAccount_confirmKey: 'instagram-accounts/checkpoint/',
        instagramDirect_getMetaData: 'instagram-direct/meta',
        instagramDirect_postMessage: 'instagram-direct/',
        instagramTaskManager: 'instagram-task-manager/',
        instagramTaskManager_getMetaData: 'instagram-task-manager/meta',
        instagramTaskManager_getTaskTypes: 'instagram-task-manager/task/types',
        instagramTaskManager_getTaskByTypes: (type, subtype) => `instagram-task-manager/meta/type/${type}/subtype/${subtype}`,
        instagramTaskManager_getDefaultConfigs: 'instagram-task-manager/config/type', // {STRATEGY_TYPE}/subtype/{STRATEGY_SUBTYPE}
        instagramTaskManager_postStartFollowingList: 'instagram-task-manager/task',
        instagramTaskManager_putStopTaskByID: id => `instagram-task-manager/task/${id}`,
        instagramTaskManager_delRemoveTaskByID: id => `instagram-task-manager/task/${id}`,
        instagramTaskManager_postStartChatBot: 'instagram-task-manager/task',
        instagramTaskManager_getLogsChatBot: (path, page) => {
            const {type, subtype, username} = path;
            return `instagram-task-manager/logs/type/${type}/subtype/${subtype}/account/${username}${page ? `?page=${page}` : ''}`;
        }
    },
    user: {
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
            INSTAGRAM_ACCOUNS_RENDERED: 'instagram_accouns_rendered'
        },
        tasks: {
            NEW_TASK_CREATED: 'new_task_created'
        }
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
    }
};
