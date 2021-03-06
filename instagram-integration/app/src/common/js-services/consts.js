export const CONST = {
    url: {
        tmTypes: {
            followingT: 'FOLLOWING',
            followingSubT: ['FOLLOWING_BY_LIST', 'FOLLOWING_BY_ACTIVE_AUDIENCE'],
            unfollowingT: 'UNFOLLOWING',
            unfollowingSubT: ['UNFOLLOWING_BY_LIST', 'UNFOLLOWING_BY_ALL', 'UNFOLLOWING_BY_NON_RECIPROCAL'],
            chatBotT: 'CHAT_BOT',
            chatBotSubT: ['DEFAULT_CHAT_BOT'],
            automessagesT: 'AUTO_ANSWER',
            automessagesSubT: ['DEFAULT_AUTO_ANSWER'],
            autogreetT: 'AUTO_GREETING',
            autogreetSubT: ['DEFAULT_AUTO_GREETING'],
            storiesT: 'STORIES',
            storiesSubT: ['STORIES_BY_LIST', 'STORIES_BY_FOLLOWERS', 'STORIES_BY_ACTIVE_AUDIENCE'],
            autocommentsT: 'AUTO_COMMENT',
            autocommentsSubT: ['DEFAULT_AUTO_COMMENT'],
            reviverT: 'REVIVER',
            reviverSubT: ['DEFAULT_REVIVER']
        },

        // DEV
        base: 'http://api-dev.luxgram.net/v1/',
        // PROD
        // base: 'http://api.luxgram.net/v1/',
        registration: 'registration/basic/',
        login: 'registration/basic/login',
        recovering: 'registration/basic/password/recovering',
        confirmation: 'registration/basic/confirmation?token',

        // -------------------------
        instagram_addAccount: slotIndex => `instagram-accounts/slots/${slotIndex}/account`,
        instagramAccount_getMetaData: 'instagram-accounts/slots/meta',
        instagram_getMetaDataBySlot: slotIndex => `instagram-accounts/slots/${slotIndex}/meta`,
        instagram_modifyAccount: slotIndex => `instagram-accounts/slots/${slotIndex}/account`,
        instagram_modifyAccountPhoto: slotIndex => `instagram-accounts/slots/${slotIndex}/account/photo`,
        instagramTaskManager_getPosts: slotIndex => `instagram-accounts/slots/${slotIndex}/posts`,
            // slots
        slots_buySlotByIndex: slotIndex => `instagram-accounts/slots/${slotIndex}`,

        // -instagram-accounts------------------------
        instagramAccount_startCheckpoint: slotIndex => `instagram-accounts/slots/${slotIndex}/checkpoint/`,
        instagramAccount_confirmCheckpoint: slotIndex => `instagram-accounts/slots/${slotIndex}/checkpoint/`,

        // -instagram-direct------------------------
        instagramDirect_Basic: 'instagram-direct',
        instagramDirect_postMessage: 'instagram-direct/slots',
        instagramDirect_getMetaData: 'instagram-direct/slots/meta',
        instagramDirect_getMetadataDetailUsers: slotIndex => `instagram-direct/slots/${slotIndex}/meta`,
        instagramDirect_getMetaDataConversation: slotIndex => `instagram-direct/slots/${slotIndex}`,
        instagramDirect_RequestPending: slotIndex => `instagram-direct/slots/${slotIndex}/pending`, // todo!!
        // send message /slots/{slotIndex}/text/{id}
        // send image: /slots/{slotIndex}/photo/{id}

        // -instagram-task-manager------------------------
        instagramTaskManager: 'instagram-task-manager/',
        instagramTaskManager_getMetaData: 'instagram-task-manager/meta',
        instagramTaskManager_getTaskByTypes: 'instagram-task-manager/meta/type/',
        // --------------
        instagramTaskManager_getDefaultConfigs: 'instagram-task-manager/config/type', // {TYPE}/subtype/{SUBTYPE}
        // --------------
        instagramTaskManager_postStartFollowingList: 'instagram-task-manager/task',
        instagramTaskManager_postStartTask: 'instagram-task-manager/task',
        instagramTaskManager_getTaskTypes: 'instagram-task-manager/task/types',
        instagramTaskManager_putStopTaskByID: id => `instagram-task-manager/task/${id}`,
        instagramTaskManager_delRemoveTaskByID: id => `instagram-task-manager/task/${id}`,
        instagramTaskManager_postImageAttachment: 'instagram-task-manager/task/attachment/image',
        instagramTaskManager_postTextAttachment: 'instagram-task-manager/task/attachment/users_list',
        // -----------------
        instagramTaskManager_delLogs: 'instagram-task-manager/logs/type/', // todo: {TYPE}/subtype/{SUBTYPE}/slot/{slotIndex}?page={page}
        instagramTaskManager_getLogsChatBot: 'instagram-task-manager/logs/type/', // todo: {TYPE}/subtype/{SUBTYPE}/slot/{slotIndex}?page={page}
        // ---------------
        editProfile: 'profile/'
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
            // INSTAGRAM_ACCOUNS_NEED_REFRESH_SLOT: 'instagram_accouns_need_refresh_slot',
            INSTAGRAM_ACCOUNS_RENDERED: 'instagram_accouns_rendered',
            INSTAGRAM_ACCOUNS_RENDERED_LAZY: 'instagram_accouns_rendered_lazy'
        },
        modal: {
            IMAGE_POST_SELECTED: 'image_post_selected',
            IMAGE_UPLOADED_AVATAR: 'IMAGE_UPLOADED_AVATAR'
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
        if (typeof this.url[name] === 'function' && id !== undefined) {
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
