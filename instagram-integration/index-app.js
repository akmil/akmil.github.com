/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var CONST = exports.CONST = {
    url: {
        tmTypes: {
            followingT: 'FOLLOWING',
            followingSubT: ['FOLLOWING_LIST'],
            chatBotT: 'CHAT_BOT',
            chatBotSubT: ['DEFAULT_CHAT_BOT'],
            autogreetT: 'AUTO_GREETING',
            autogreetSubT: ['DEFAULT_AUTO_GREETING']
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
        instagramTaskManager_getTaskByTypes: function instagramTaskManager_getTaskByTypes(type, subtype) {
            return 'instagram-task-manager/meta/type/' + type + '/subtype/' + subtype;
        },
        instagramTaskManager_getDefaultConfigs: 'instagram-task-manager/config/type', // {STRATEGY_TYPE}/subtype/{STRATEGY_SUBTYPE}
        instagramTaskManager_postStartFollowingList: 'instagram-task-manager/task',
        instagramTaskManager_putStopTaskByID: function instagramTaskManager_putStopTaskByID(id) {
            return 'instagram-task-manager/task/' + id;
        },
        instagramTaskManager_delRemoveTaskByID: function instagramTaskManager_delRemoveTaskByID(id) {
            return 'instagram-task-manager/task/' + id;
        },
        instagramTaskManager_postStartChatBot: 'instagram-task-manager/task',
        instagramTaskManager_getLogsChatBot: function instagramTaskManager_getLogsChatBot(path, page) {
            var type = path.type,
                subtype = path.subtype,
                username = path.username;

            return 'instagram-task-manager/logs/type/' + type + '/subtype/' + subtype + '/account/' + username + (page ? '?page=' + page : '');
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
    getPath: function getPath(name, id) {
        if (typeof this.url[name] === 'function' && id) {
            return this.url.base + this.url[name](id);
        }
        return this.url.base + this.url[name];
    },
    getPathTypeSubtype: function getPathTypeSubtype(name, path, page) {
        var type = path.type,
            subtype = path.subtype,
            username = path.username;

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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var CookieSrv = {
    get: function get(name) {
        var c = document.cookie.match('(?:(?:^|.*; *)' + name + ' *= *([^;]*).*$)|^.*$')[1];
        if (c) {
            return decodeURIComponent(c);
        }
    },
    set: function set(name, value) {
        var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : { path: '/', days: 365 };

        if (opts.days) {
            opts['max-age'] = opts.days * 60 * 60 * 24;
            delete opts.days;
        }
        // eslint-disable-next-line no-param-reassign
        opts = Object.entries(opts).reduce(function (str, _ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                k = _ref2[0],
                v = _ref2[1];

            return str + '; ' + k + '=' + v;
        }, '');
        document.cookie = name + '=' + (encodeURIComponent(value) + opts);
    },
    remove: function remove(name, opts) {
        return CookieSrv.set(name, '', _extends({ 'max-age': -1, path: '/', days: 0 }, opts));
    }
    // path & domain must match cookie being deleted
};

/*
class CookieStorage {
    read(key) {
        const value = $.cookie(key);
        return value === undefined ? null : value;
    }

    setCookie(name, value, days) {
        let expires = '';
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = `; expires=${date.toUTCString()}`;
        }
        document.cookie = `${name} =${(value || '') + expires}; path=/`;
    }

    getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length == 2) {
            return parts.pop().split(';').shift();
        }
    }
}
*/

exports.default = CookieSrv;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // import $ from 'jquery';


var _consts = __webpack_require__(0);

var _network = __webpack_require__(7);

var _network2 = _interopRequireDefault(_network);

var _cookie = __webpack_require__(1);

var _cookie2 = _interopRequireDefault(_cookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function () {
    function User() {
        _classCallCheck(this, User);

        this.network = new _network2.default();
        this.cookieStorage = _cookie2.default;
        this.settingPost = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };
    }

    _createClass(User, [{
        key: 'isLoggedIn',
        value: function isLoggedIn() {
            return !!this.getToken();
        }
    }, {
        key: 'isEmailConfirmed',
        value: function isEmailConfirmed() {
            return this.cookieStorage.get(_consts.CONST.cookieStorage.emailConfirmed) === 'confirmed';
        }
    }, {
        key: 'getToken',
        value: function getToken() {
            var cookieToken = this.cookieStorage.get(_consts.CONST.cookieStorage.token);
            return cookieToken;
        }
    }, {
        key: 'login',
        value: function login(formData, cbError) {
            var setting = _extends({}, this.settingPost, { body: JSON.stringify(formData) });
            return this.network.sendRequest(_consts.CONST.getPath('login'), setting, cbError);
        }
    }, {
        key: 'addInstagramAccount',
        value: function addInstagramAccount(formData, cbError) {
            var setting = _extends({}, this.settingPost, {
                body: JSON.stringify(formData),
                headers: _extends({}, this.settingPost.headers, {
                    token: this.getToken()
                })
            });
            return this.network.sendRequest(_consts.CONST.getPath('instagram_addAccount'), setting, cbError);
        }
    }, {
        key: 'getInstagramAccount',
        value: function getInstagramAccount() {
            var setting = _extends({}, this.settingPost, {
                method: 'GET',
                headers: _extends({}, this.settingPost.headers, {
                    token: this.getToken()
                })
            });
            return this.network.sendRequest(_consts.CONST.getPath('instagram_addAccount'), setting);
        }
    }, {
        key: 'confirm',
        value: function confirm(token) {
            // const confirmUrl = CONST.getPath('confirmation');
            return this.network.sendRequest('' + (_consts.CONST.getPath('confirmation') + token));
        }
    }, {
        key: 'register',
        value: function register(formData) {
            var setting = _extends({}, this.settingPost, {
                body: JSON.stringify(formData)
            });
            return this.network.sendRequest(_consts.CONST.getPath('registration'), setting);
        }
    }, {
        key: 'getMetadata',
        value: function getMetadata(token, cbError) {
            return this.network.sendRequest('' + _consts.CONST.getPath('instagramAccount_getMetaData'), { headers: { token: token } }, cbError);
        }
    }, {
        key: 'getSecurityKey',
        value: function getSecurityKey(username, checkpointType) {
            var setting = _extends({}, this.settingPost, {
                body: JSON.stringify({ 'type': checkpointType }), // todo: tmp set, it should be 'type'
                headers: _extends({}, this.settingPost.headers, {
                    'token': this.getToken()
                })
            });
            return this.network.sendRequest('' + _consts.CONST.getPath('instagramAccount_checkpoint') + username, setting);
        }
    }, {
        key: 'confirmSecurityKey',
        value: function confirmSecurityKey(key, username) {
            var setting = {
                method: 'DELETE',
                body: JSON.stringify({ 'security_code': key }),
                headers: _extends({}, this.settingPost.headers, {
                    'token': '3e321e60029711e99264a0481c8e17d4' // todo: this.getToken()
                })
            };
            return this.network.sendRequest('' + _consts.CONST.getPath('instagramAccount_confirmKey') + username, setting);
        }
    }]);

    return User;
}();

var userInstance = null;

if (!userInstance) {
    userInstance = new User();
}

exports.default = userInstance;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// import $ from 'jquery';
// import {CONST} from './consts';

function viewUtils() {
    function showInfoMessage(selector, message1, message2) {
        $(selector).empty().append('' + (message1 ? '<p>status: ' + message1 + '</p>' : '')).append('<p>' + message2 + ' </p>');
    }

    function fillList($list, dataArray) {
        var items = dataArray;
        var cList = $list;
        cList.empty();
        items.forEach(function (item, i) {
            var li = $('<li class="list-group-item"></li>').appendTo(cList);
            $('<a/>').addClass('ui-all').text(item.username).appendTo(li);
        });
    }

    function isEmail(email) {
        /* eslint-disable */
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
        /* eslint-enable */
    }

    function getFormattedDateUtil(tStamp, showFullTime) {
        var date = new Date(tStamp);

        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hour = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();

        month = (month < 10 ? '0' : '') + month;
        day = (day < 10 ? '0' : '') + day;
        hour = (hour < 10 ? '0' : '') + hour;
        min = (min < 10 ? '0' : '') + min;
        sec = (sec < 10 ? '0' : '') + sec;

        var str = '';
        if (!showFullTime) {
            str = hour + ':' + min;
        } else {
            str = date.getFullYear() + '-' + month + '-' + day + '_' + hour + ':' + min + ':' + sec;
        }

        return str;
    }

    return {
        showInfoMessage: showInfoMessage,
        fillList: fillList,
        isEmail: isEmail,
        getFormattedDateUtil: getFormattedDateUtil
    };
}

exports.default = viewUtils();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // import $ from 'jquery';


var _consts = __webpack_require__(0);

var _network = __webpack_require__(7);

var _network2 = _interopRequireDefault(_network);

var _cookie = __webpack_require__(1);

var _cookie2 = _interopRequireDefault(_cookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserTaskManager = function () {
    function UserTaskManager() {
        _classCallCheck(this, UserTaskManager);

        this.network = new _network2.default();
        this.cookieStorage = _cookie2.default;
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


    _createClass(UserTaskManager, [{
        key: 'getToken',
        value: function getToken(asHeader) {
            var cookieToken = this.cookieStorage.get(_consts.CONST.cookieStorage.token);
            return asHeader ? { headers: { token: cookieToken } } : cookieToken;
        }
    }, {
        key: 'getMetadata',
        value: function getMetadata(path, cbError) {
            // const {type, subType} = path;
            return this.network.sendRequest('' + _consts.CONST.getPathTypeSubtype('instagramTaskManager_getTaskByTypes', path), this.getToken('asHeader'), cbError);
        }
    }, {
        key: 'getTaskTypes',
        value: function getTaskTypes(details, cbError) {
            return this.network.sendRequest('' + _consts.CONST.getPath('instagramTaskManager_getTaskTypes'), this.getToken('asHeader'), cbError);
        }
    }, {
        key: 'stopTaskByID',
        value: function stopTaskByID(taskId, cbError) {
            var setting = _extends({}, this.settingPost, {
                method: 'PUT',
                headers: _extends({}, this.settingPost.headers, {
                    'token': this.getToken()
                })
            });
            var url = _consts.CONST.getPath('instagramTaskManager_putStopTaskByID', taskId);
            return this.network.sendRequest(url, setting, cbError);
        }
    }, {
        key: 'deleteTaskByID',
        value: function deleteTaskByID(taskId, cbError) {
            var setting = _extends({}, this.settingPost, {
                method: 'DELETE',
                headers: _extends({}, this.settingPost.headers, {
                    'token': this.getToken()
                })
            });
            var url = _consts.CONST.getPath('instagramTaskManager_delRemoveTaskByID', taskId);
            return this.network.sendRequest(url, setting, cbError);
        }
    }, {
        key: 'getDefaultConfigs',
        value: function getDefaultConfigs(cbError) {
            var details = {
                STRATEGY_TYPE: 'FOLLOWING',
                STRATEGY_SUBTYPE: 'FOLLOWING_LIST'
            };
            var url = _consts.CONST.getPath('instagramTaskManager_getDefaultConfigs') + '/' + details.STRATEGY_TYPE + '/subtype/' + details.STRATEGY_SUBTYPE;
            return this.network.sendRequest(url, this.getToken('asHeader'), cbError);
        }
    }, {
        key: 'postStartFollowingList',
        value: function postStartFollowingList(body, cbError, path) {
            var setting = _extends({}, this.settingPost, {
                headers: _extends({}, this.settingPost.headers, {
                    'token': this.getToken(),
                    'X-Auth-Token': 'e2f4336abea440489c51c5c10294ea12'
                })
            });
            setting.body = JSON.stringify(body);
            var url = path ? '' + _consts.CONST.getPath(path) : '' + _consts.CONST.getPath('instagramTaskManager_postStartFollowingList');

            return this.network.sendRequest(url, setting, cbError);
        }
    }, {
        key: 'postStartChatBot',
        value: function postStartChatBot(body, cbError) {
            var path = 'instagramTaskManager_postStartChatBot';
            return this.postStartFollowingList(body, cbError, path);
        }
    }, {
        key: 'getLogsChatBot',
        value: function getLogsChatBot(path, page, cbError) {
            return this.network.sendRequest('' + _consts.CONST.getPathTypeSubtype('instagramTaskManager_getLogsChatBot', path, page), this.getToken('asHeader'), cbError);
        }
    }]);

    return UserTaskManager;
}();

var userInstance = null;

if (!userInstance) {
    userInstance = new UserTaskManager();
}

exports.default = userInstance;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/**
 * Copyright (c) 2010,2011,2012,2013,2014 Morgan Roderick http://roderick.dk
 * License: MIT - http://mrgnrdrck.mit-license.org
 *
 * https://github.com/mroderick/PubSubJS
 */

(function (root, factory){
    'use strict';

    var PubSub = {};
    root.PubSub = PubSub;

    var define = root.define;

    factory(PubSub);

    // AMD support
    if (typeof define === 'function' && define.amd){
        define(function() { return PubSub; });

        // CommonJS and Node.js module support
    } else if (true){
        if (module !== undefined && module.exports) {
            exports = module.exports = PubSub; // Node.js specific `module.exports`
        }
        exports.PubSub = PubSub; // CommonJS module 1.1.1 spec
        module.exports = exports = PubSub; // CommonJS
    }

}(( typeof window === 'object' && window ) || this, function (PubSub){
    'use strict';

    var messages = {},
        lastUid = -1;

    function hasKeys(obj){
        var key;

        for (key in obj){
            if ( obj.hasOwnProperty(key) ){
                return true;
            }
        }
        return false;
    }

    /**
     * Returns a function that throws the passed exception, for use as argument for setTimeout
     * @alias throwException
     * @function
     * @param { Object } ex An Error object
     */
    function throwException( ex ){
        return function reThrowException(){
            throw ex;
        };
    }

    function callSubscriberWithDelayedExceptions( subscriber, message, data ){
        try {
            subscriber( message, data );
        } catch( ex ){
            setTimeout( throwException( ex ), 0);
        }
    }

    function callSubscriberWithImmediateExceptions( subscriber, message, data ){
        subscriber( message, data );
    }

    function deliverMessage( originalMessage, matchedMessage, data, immediateExceptions ){
        var subscribers = messages[matchedMessage],
            callSubscriber = immediateExceptions ? callSubscriberWithImmediateExceptions : callSubscriberWithDelayedExceptions,
            s;

        if ( !messages.hasOwnProperty( matchedMessage ) ) {
            return;
        }

        for (s in subscribers){
            if ( subscribers.hasOwnProperty(s)){
                callSubscriber( subscribers[s], originalMessage, data );
            }
        }
    }

    function createDeliveryFunction( message, data, immediateExceptions ){
        return function deliverNamespaced(){
            var topic = String( message ),
                position = topic.lastIndexOf( '.' );

            // deliver the message as it is now
            deliverMessage(message, message, data, immediateExceptions);

            // trim the hierarchy and deliver message to each level
            while( position !== -1 ){
                topic = topic.substr( 0, position );
                position = topic.lastIndexOf('.');
                deliverMessage( message, topic, data, immediateExceptions );
            }
        };
    }

    function messageHasSubscribers( message ){
        var topic = String( message ),
            found = Boolean(messages.hasOwnProperty( topic ) && hasKeys(messages[topic])),
            position = topic.lastIndexOf( '.' );

        while ( !found && position !== -1 ){
            topic = topic.substr( 0, position );
            position = topic.lastIndexOf( '.' );
            found = Boolean(messages.hasOwnProperty( topic ) && hasKeys(messages[topic]));
        }

        return found;
    }

    function publish( message, data, sync, immediateExceptions ){
        message = (typeof message === 'symbol') ? message.toString() : message;

        var deliver = createDeliveryFunction( message, data, immediateExceptions ),
            hasSubscribers = messageHasSubscribers( message );

        if ( !hasSubscribers ){
            return false;
        }

        if ( sync === true ){
            deliver();
        } else {
            setTimeout( deliver, 0 );
        }
        return true;
    }

    /**
     * Publishes the message, passing the data to it's subscribers
     * @function
     * @alias publish
     * @param { String } message The message to publish
     * @param {} data The data to pass to subscribers
     * @return { Boolean }
     */
    PubSub.publish = function( message, data ){
        return publish( message, data, false, PubSub.immediateExceptions );
    };

    /**
     * Publishes the the message synchronously, passing the data to it's subscribers
     * @function
     * @alias publishSync
     * @param { String } message The message to publish
     * @param {} data The data to pass to subscribers
     * @return { Boolean }
     */
    PubSub.publishSync = function( message, data ){
        return publish( message, data, true, PubSub.immediateExceptions );
    };

    /**
     * Subscribes the passed function to the passed message. Every returned token is unique and should be stored if you need to unsubscribe
     * @function
     * @alias subscribe
     * @param { String } message The message to subscribe to
     * @param { Function } func The function to call when a new message is published
     * @return { String }
     */
    PubSub.subscribe = function( message, func ){
        if ( typeof func !== 'function'){
            return false;
        }

        message = (typeof message === 'symbol') ? message.toString() : message;

        // message is not registered yet
        if ( !messages.hasOwnProperty( message ) ){
            messages[message] = {};
        }

        // forcing token as String, to allow for future expansions without breaking usage
        // and allow for easy use as key names for the 'messages' object
        var token = 'uid_' + String(++lastUid);
        messages[message][token] = func;
        
        // return token for unsubscribing
        return token;
    };

    /**
     * Subscribes the passed function to the passed message once
     * @function
     * @alias subscribeOnce
     * @param { String } message The message to subscribe to
     * @param { Function } func The function to call when a new message is published
     * @return { PubSub }
     */
    PubSub.subscribeOnce = function( message, func ){
        var token = PubSub.subscribe( message, function(){
            // before func apply, unsubscribe message
            PubSub.unsubscribe( token );
            func.apply( this, arguments );
        });
        return PubSub;
    };

    /**
     * Clears all subscriptions
     * @function
     * @public
     * @alias clearAllSubscriptions
     */
    PubSub.clearAllSubscriptions = function clearAllSubscriptions(){
        messages = {};
    };

    /**
     * Clear subscriptions by the topic
     * @function
     * @public
     * @alias clearAllSubscriptions
     */
    PubSub.clearSubscriptions = function clearSubscriptions(topic){
        var m;
        for (m in messages){
            if (messages.hasOwnProperty(m) && m.indexOf(topic) === 0){
                delete messages[m];
            }
        }
    };

    /**
     * Removes subscriptions
     *
     * - When passed a token, removes a specific subscription.
     *
	 * - When passed a function, removes all subscriptions for that function
     *
	 * - When passed a topic, removes all subscriptions for that topic (hierarchy)
     * @function
     * @public
     * @alias subscribeOnce
     * @param { String | Function } value A token, function or topic to unsubscribe from
     * @example // Unsubscribing with a token
     * var token = PubSub.subscribe('mytopic', myFunc);
     * PubSub.unsubscribe(token);
     * @example // Unsubscribing with a function
     * PubSub.unsubscribe(myFunc);
     * @example // Unsubscribing from a topic
     * PubSub.unsubscribe('mytopic');
     */
    PubSub.unsubscribe = function(value){
        var descendantTopicExists = function(topic) {
                var m;
                for ( m in messages ){
                    if ( messages.hasOwnProperty(m) && m.indexOf(topic) === 0 ){
                        // a descendant of the topic exists:
                        return true;
                    }
                }

                return false;
            },
            isTopic    = typeof value === 'string' && ( messages.hasOwnProperty(value) || descendantTopicExists(value) ),
            isToken    = !isTopic && typeof value === 'string',
            isFunction = typeof value === 'function',
            result = false,
            m, message, t;

        if (isTopic){
            PubSub.clearSubscriptions(value);
            return;
        }

        for ( m in messages ){
            if ( messages.hasOwnProperty( m ) ){
                message = messages[m];

                if ( isToken && message[value] ){
                    delete message[value];
                    result = value;
                    // tokens are unique, so we can just stop here
                    break;
                }

                if (isFunction) {
                    for ( t in message ){
                        if (message.hasOwnProperty(t) && message[t] === value){
                            delete message[t];
                            result = true;
                        }
                    }
                }
            }
        }

        return result;
    };
}));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(30)(module)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTasksData = getTasksData;
exports.init = init;

var _apiTaskManager = __webpack_require__(4);

var _apiTaskManager2 = _interopRequireDefault(_apiTaskManager);

var _view = __webpack_require__(3);

var _view2 = _interopRequireDefault(_view);

var _consts = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fillListMeta($list, dataArray, isRuns) {
    var items = dataArray;
    // const defaultAvatarSrc = 'https://i.imgur.com/jNNT4LE.png';
    $list.empty();
    if (!items.length) {
        $('<li class="list-group-item py-2">\n                <p>\u0412 \u044D\u0442\u043E\u043C \u0440\u0430\u0437\u0434\u0435\u043B\u0435 \u043D\u0435\u0442 \u043D\u0438 \u043E\u0434\u043D\u043E\u0439 \u0437\u0430\u0434\u0430\u0447\u0438.</p>\n            </li>').appendTo($list);
        return;
    }
    items.forEach(function (item) {
        var progress = item.progress,
            task_id = item.task_id,
            type = item.type,
            subtype = item.subtype;

        if (item.status.state === 'STOPPED' && !isRuns) {
            $('<li class="list-group-item p-0 py-2" data-username="' + type + '" data-task-id="' + task_id + '">\n                <div class="media-body d-flex">\n                    <div class="col task-type">\n                        ' + (task_id ? '<p class="badge badge-secondary my-1">' + task_id + '</p>' : '') + '\n                        <div class="task-progress">\n                            <p class="small my-1">\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043E</p>\n                            ' + (item.status.reason ? '<p class="my-1">' + item.status.reason + '</p>' : '') + '\n                        </div>\n                    <button class="btn btn-warning js_btn-delete-task">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>\n                    </div>\n                    <!--<div class="col task-subtype">\n                        ' + (subtype ? '<p class="mt-0 mb-1">' + subtype + '</p>' : '') + '\n                    </div>-->\n                </div>\n            </li>').appendTo($list);
        } else if (item.status.state === 'IN_PROGRESS' && isRuns) {
            $('<li class="list-group-item py-2" data-task-id="' + task_id + '">\n                <div class="col task-progress">\n                    <p class="mt-0 mb-1 name">\u0412 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0435 : ' + task_id + '</p>\n                </div>\n                <button class="btn btn-outline-primary js_btn-stop-task">\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C</button>\n                <button class="btn btn-warning js_btn-delete-task">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>\n            </li>').appendTo($list);
        } else if (item.status.state === 'FINISHED' && !isRuns) {
            $('<li class="list-group-item py-2" data-task-id="' + task_id + '">\n                 <div class="card-block">\n                    <h4 class="card-title">\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u043E</h4>\n                    <div class="text-right">\n                        <span class="text-muted">' + _view2.default.getFormattedDateUtil(progress.timestamp) + '</span>\n                    </div>\n                    <span class="text-success">100%</span>\n                    <div class="progress mb-3">\n                        <div class="progress-bar bg-success" role="progressbar" style="width: 100%; height: 6px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>\n                    </div>\n                    <button class="btn btn-warning js_btn-delete-task">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>\n                </div>\n            </li>').appendTo($list);
        }
        if (!$('li', $list).length) {
            $('<li class="list-group-item py-2" data-task-id="' + task_id + '">\n                <p>\u0412 \u044D\u0442\u043E\u043C \u0440\u0430\u0437\u0434\u0435\u043B\u0435 \u043D\u0435\u0442 \u043D\u0438 \u043E\u0434\u043D\u043E\u0439 \u0437\u0430\u0434\u0430\u0447\u0438.</p>\n            </li>').appendTo($list);
        }
    });
}

/* eslint-disable no-use-before-define */
function initHandlers(holders, path) {
    var _path = path || {
        type: _consts.CONST.url.tmTypes.followingT,
        subtype: _consts.CONST.url.tmTypes.followingSubT[0]
    };
    var $btnStopTask = $('.js_btn-stop-task');
    var $btnDelTask = $('.js_btn-delete-task');
    var getTaskID = function getTaskID(e) {
        var btn = $(e.target);
        return btn.closest('li').data('task-id');
    };

    $btnStopTask.on('click', function (e) {
        var taskId = getTaskID(e);
        console.log('STOP Task id', taskId);
        _apiTaskManager2.default.stopTaskByID(taskId).then(function (result) {
            console.log(result);
            getTasksData(holders, _path);
        });
    });

    $btnDelTask.on('click', function (e) {
        var taskId = getTaskID(e);
        console.log('DELETE id', taskId);
        _apiTaskManager2.default.deleteTaskByID(taskId).then(function (result) {
            console.log(result);
            getTasksData(holders, _path);
        });
    });
}

function getTasksData(holders, path) {
    var $runs = holders.$runs,
        $stopped = holders.$stopped;

    var _path = path || {
        type: _consts.CONST.url.tmTypes.followingT,
        subtype: _consts.CONST.url.tmTypes.followingSubT[0]
    };
    _apiTaskManager2.default.getMetadata(_path).then(function (result) {
        // console.log('getMetadata & fillListMeta', result);
        if (result.status.state === 'ok') {
            fillListMeta($runs, result.data.meta, 'isRuns');
            fillListMeta($stopped, result.data.meta);
            initHandlers(holders, path);
        }
    });
}

/**
 * Init
 */
function init() {
    var holders = {
        $runs: $('.follow-tasks-runs'),
        $stopped: $('.follow-tasks-stopped')
    };
    getTasksData(holders);
    window.PubSub.subscribe(_consts.CONST.events.tasks.NEW_TASK_CREATED, function (eventName, data) {
        getTasksData(holders);
    });
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _view = __webpack_require__(3);

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Network = function () {
    function Network() {
        _classCallCheck(this, Network);
    }

    _createClass(Network, [{
        key: 'cbErrorDefault',
        value: function cbErrorDefault(result) {
            var $el = $('#description').length ? $('#description') : $('.error-msg');
            _view2.default.showInfoMessage($el, result.status.state, result.status.message || 'error');
        }
    }, {
        key: 'checkStatus',
        value: function checkStatus(response) {
            if (response.status && response.status >= 200 && response.status < 300) {
                return response;
            } else {
                var error = new Error(response.statusText);
                error.response = response;
                throw error;
            }
        }
    }, {
        key: 'sendRequest',
        value: function sendRequest(URL, OPTS, cbError) {
            var _this = this;

            return fetch(URL, OPTS).then(function (response) {
                return Promise.all([response, response.json()]);
            }).then(function (_ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                    response = _ref2[0],
                    json = _ref2[1];

                if (!response.ok) {
                    if (!cbError) {
                        _this.cbErrorDefault(json);
                    } else {
                        cbError(json); // update view
                    }
                    _this.checkStatus(response);
                    // throw new Error(json.status.message);
                }
                return json;
            });
        }
    }]);

    return Network;
}();

exports.default = Network;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.init = init;

var _consts = __webpack_require__(0);

// import 'brutusin-json-forms';
var state = {
    username: ''
};

/**
 * Init header
 */
function initSteps(formSelector, wizardCfg) {
    var $form = $(formSelector);
    var stepReducer = wizardCfg.stepReducer,
        onSubmitHandler = wizardCfg.onSubmitHandler;

    $('.js_profile-user-follow>.container').removeClass('container');

    $form.find('fieldset:first-child').fadeIn('slow');

    $form.find('input[type="text"]').on('focus', function () {
        $(this).removeClass('input-error');
    });

    // next step
    $form.find('.btn-next').on('click', function () {
        var parent_fieldset = $(this).parents('fieldset');
        var next_step = true;
        var radioBtnActive = parent_fieldset.find('input[name="userAccountRadio"]:checked');

        if (radioBtnActive.length > 0) {
            state.username = radioBtnActive.parents('li').data('username');
        }

        if (stepReducer) {
            stepReducer(parent_fieldset.index(), state);
        }

        parent_fieldset.find('input[type="text"],input[type="email"]').each(function () {
            if ($(this).val() === '') {
                $(this).addClass('input-error');
                next_step = false;
            } else {
                $(this).removeClass('input-error');
            }
        });

        if (next_step) {
            parent_fieldset.fadeOut(400, function () {
                $(this).next().fadeIn();
            });
        }
    });

    // previous step
    $form.find('.btn-previous').on('click', function () {
        // state.username = [...new Set(state.username)];
        $(this).parents('fieldset').fadeOut(400, function () {
            $(this).prev().fadeIn();
        });
    });

    // speed radio-btn group
    $('.js_follow-speed input[type=radio]').on('click', function () {
        // const value = $(this).attr('value');
        // state.user_default_config = {
        //     task_mode: value.toUpperCase()
        // };
    });

    // submit
    $form.on('submit', function (e) {
        $(this).find('input[type="text"],input[type="number"],input[type="email"]').each(function () {
            if ($(this).val() === '') {
                e.preventDefault();
                $(this).addClass('input-error');
            } else {
                $(this).removeClass('input-error');
            }
        });

        if (onSubmitHandler) {
            console.log('**outer onSubmitHandler**');
            onSubmitHandler(e);
        }

        console.log('SubmitHandler END');
    });

    // alert close
    $('.form-submit-finish .close').on('click', function () {
        console.log('form-submit-finish .close');
        // $(this).closest('form-submit-finish').removeClass('d-block');
        // $('#v-pills-runned-tab').trigger('click');
        // window.PubSub.publish(CONST.events.tasks.NEW_TASK_CREATED);
    });
}

/*
function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class on the current step:
    x[n].className += " active";
}*/

function modifyAccList() {
    var radioBtnAppend = function radioBtnAppend(idx) {
        return '<div class="">\n            <input type="radio" name="userAccountRadio" id="customRadio-' + idx + '" class="custom-control-input d-none" value="">\n        </div>';
    };
    var radioBtnWrap = function radioBtnWrap(idx) {
        return '<label class="accounts-list--label-wrapper col mb-0 media py-3" for="customRadio-' + idx + '"></label>';
    };
    var $accountsList = $('.accounts-list');
    var $li = $accountsList.find('li.media');
    $li.addClass('js_user-radio').removeClass('py-3 media');

    for (var i = 0; i < $li.length; i++) {
        $($li[i]).wrapInner(radioBtnWrap(i)).append(radioBtnAppend(i));
    }
    // UserTaskManager.getTaskTypes().then((result) => {
    //     if (result.status.state === 'ok') {
    //         // console.log(result);
    //         fillListTypes($('.js_task-types'), result.data);
    //     }
    // });

    $('.js_user-radio').on('click', 'input[type=radio]', function (e) {
        var $parentFieldset = $(this).parents('fieldset');
        $('li.active', $parentFieldset).removeClass('active');
        $(this).closest('li').addClass('active');
        $('.btn-next', $parentFieldset).prop('disabled', false);
    });

    // $('.checkbox-cell').on('change', (e) => {
    //     console.log('validate');
    //     // updateStatus();
    // });
}

function init(wizardCfg) {
    if ($('.wizard-form').length) {
        initSteps('.wizard-form', wizardCfg);
        window.PubSub.subscribe(_consts.CONST.events.instagramAccouns.INSTAGRAM_ACCOUNS_RENDERED, function (eventName, data) {
            modifyAccList();
        });
    }
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(28);

var _consts = __webpack_require__(0);

var _pubsubJs = __webpack_require__(5);

var _pubsubJs2 = _interopRequireDefault(_pubsubJs);

var _registerForm = __webpack_require__(23);

var _registerForm2 = _interopRequireDefault(_registerForm);

var _loginForm = __webpack_require__(21);

var _loginPage = __webpack_require__(26);

var _confirmReg = __webpack_require__(16);

var _header = __webpack_require__(19);

var header = _interopRequireWildcard(_header);

var _burgerMenu = __webpack_require__(18);

var burgerMenu = _interopRequireWildcard(_burgerMenu);

var _instagramAccountsList = __webpack_require__(20);

var instagramAccounts = _interopRequireWildcard(_instagramAccountsList);

var _messages = __webpack_require__(22);

var messages = _interopRequireWildcard(_messages);

var _follow = __webpack_require__(17);

var follow = _interopRequireWildcard(_follow);

var _chatBotBlock = __webpack_require__(14);

var chatBot = _interopRequireWildcard(_chatBotBlock);

var _autogreetingMain = __webpack_require__(10);

var autogreeting = _interopRequireWildcard(_autogreetingMain);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var selectorCssLoginForm = {
    _loginBox: _consts.CONST.uiSelectors.headerLoginBox,
    _formId: '#js_login-form',
    _buttonSubmitId: '#js_login_btn',
    _showLoginBoxBtnId: _consts.CONST.uiSelectors.headerNavLoginBtn
};
// import 'bootstrap';


var selectorCssLoginFormInstagram = {
    _loginBox: 'main .login-box',
    _formId: '#js_instagram-add-account',
    _buttonSubmitId: '#js_instagram-add-account--btn',
    _showLoginBoxBtnId: '#js_show-login-box',
    isLoginInstagram: true
};

function setPubSub(PubSub) {
    window.PubSub = PubSub;
}

var init = function init() {
    setPubSub(_pubsubJs2.default);
    // console.log('init js here', CONST.user);
    new _registerForm2.default().init();
    (0, _loginForm.LoginForm)(selectorCssLoginForm).init();
    (0, _loginForm.LoginForm)(selectorCssLoginFormInstagram).init(); // init instagram login form*!/
    (0, _loginPage.LoginPage)({
        _loginBox: '.auth.login .card-signin',
        _formId: '.form-signin',
        _buttonSubmitId: '.form-signin [type="submit"]'
    }).init();

    (0, _confirmReg.confirmationWithRedirect)().init();
    header.initHeader();
    burgerMenu.init();
    follow.init();
    instagramAccounts.init();
    messages.init();
    chatBot.init();
    autogreeting.init();
};

(function () {
    return init();
})();

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.init = init;

var _consts = __webpack_require__(0);

var _wizardForm = __webpack_require__(8);

var wizardForm = _interopRequireWildcard(_wizardForm);

var _apiTaskManager = __webpack_require__(4);

var _apiTaskManager2 = _interopRequireDefault(_apiTaskManager);

var _chatBotStatus = __webpack_require__(12);

var chatBotStatus = _interopRequireWildcard(_chatBotStatus);

var _botLogs = __webpack_require__(11);

var chatBotLogs = _interopRequireWildcard(_botLogs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var usernameSelected = '';
var userListInstagram = [];
var selectCls = 'js_logs-accounts';

function onSubmitHandler(e) {
    var fields = $('.chat-bot-text-fields');
    var keyWords = function keyWords($el) {
        return $el.val().trim().replace(/ /g, '').split(',').filter(function (i) {
            return i.length > 0;
        });
    };
    var reqBody = [];
    fields.each(function (idx, item) {
        var keyWord = keyWords($(item).find('textarea.chat-words'));
        var answer = $(item).find('textarea.chat-messages').val();
        reqBody.push({ 'key_words': keyWord, answer: answer });
    });
    var nReqBody = {
        'username': usernameSelected,
        'type': _consts.CONST.url.tmTypes.chatBotT, // 'CHAT_BOT',
        'subtype': _consts.CONST.url.tmTypes.chatBotSubT[0], // 'DEFAULT_CHAT_BOT',
        'user_default_config': {},
        'user_custom_config': {
            'text_forms': reqBody
        }
    };

    console.log('make request here**', nReqBody);
    function cbError(res) {
        var msg = res.status.message;
        $('.form-submit-finish--error').addClass('d-block').find('.alert').append('<p>' + msg + '</p>');
    }
    _apiTaskManager2.default.postStartChatBot(nReqBody, cbError).then(function (result) {
        console.log('postBot');
        if (result.status.state === 'ok') {
            console.log(JSON.stringify(result));
            $('.form-submit-finish').addClass('d-block').find('.alert').append('<p>task_id: ' + result.data.task_id + '</p>');
        }
    });
}

function fillListUsers($wrapper, data) {
    $wrapper.empty().addClass('border-light-color');
    $('<div class="">\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u044B</div><select name="task-type" class="' + selectCls + '"></select>').appendTo($wrapper);
    data.forEach(function (item) {
        $('<option class="list-group-item py-2" value="' + item.username + '">\n            ' + item.username + '\n        </option>').appendTo($('.' + selectCls));
    });
    $('.' + selectCls).on('change', function () {
        usernameSelected = $('.' + selectCls + ' option:selected').val();
        console.log(usernameSelected);
        chatBotLogs.init(selectCls);
    });
}

/**
 * Init header
 */
function initChatMsg() {
    var tplTextField = function tplTextField() {
        return $('<div class="chat-bot-text-fields mt-2">\n        <div class="row">\n            <div class="col">\n                <textarea class="form-control chat-words" rows="4" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u0441\u043B\u043E\u0432\u0430 \u0438\u043B\u0438 \u0444\u0440\u0430\u0437\u044B \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043F\u044F\u0442\u0443\u044E, \u043F\u0440\u0438 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0431\u0443\u0434\u0435\u0442 \u0441\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0442\u044C \u0447\u0430\u0442-\u0431\u043E\u0442"></textarea>\n            </div>\n            <div class="col">\n                <textarea class="form-control chat-messages" rows="4" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0431\u0443\u0434\u0435\u0442 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C\u0441\u044F, \u0435\u0441\u043B\u0438 \u043F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u043B\u0438 \u043A\u043B\u044E\u0447.\u0441\u043B\u043E\u0432\u0430 \u0438\u043B\u0438 \u0444\u0440\u0430\u0437\u044B \u0438\u0437 \u0441\u0442\u043E\u043B\u0431\u0446\u0430 \u0441\u043B\u0435\u0432\u0430"></textarea>\n            </div>\n        </div>\n    </div>');
    };

    $('.js_add-chat-bot').on('click', function (e) {
        var lastTextField = $('.chat-bot-text-fields').last();
        tplTextField().insertAfter(lastTextField);
    });

    // alert close
    $('.form-submit-finish .close').on('click', function () {
        console.log('alert close');
        $('#v-pills-runned-tab').trigger('click');
        window.PubSub.publish(_consts.CONST.events.tasks.NEW_TASK_CREATED);
    });

    // alert close
    $('.form-submit-finish--error .close').on('click', function () {
        console.log('alert close');
        $('#v-pills-runned-tab').trigger('click');
        window.PubSub.publish(_consts.CONST.events.tasks.NEW_TASK_CREATED);
    });
    $('#v-pills-logs-tab').on('click', function (e) {
        // at this point of time setInterval is working
        var $wrapper = $('.log-users-list');
        fillListUsers($wrapper, userListInstagram);
        chatBotLogs.init(selectCls);
    });
}

function setUserName(state) {
    // console.log('getTasksData', state.username);
    usernameSelected = state.username;
}

function stepReducer(stepNumber, state) {
    switch (stepNumber) {
        case 0:
            setUserName(state);
            // console.log(state, stepNumber);
            break;
        default:
            console.log('default', stepNumber);
    }
}

function init() {
    if ($('.chat-bot-page').length) {
        var wizardCfg = {
            stepReducer: stepReducer,
            onSubmitHandler: onSubmitHandler
        };
        wizardForm.init(wizardCfg);
        initChatMsg();
        window.PubSub.subscribe(_consts.CONST.events.instagramAccouns.INSTAGRAM_ACCOUNS_RENDERED, function (e, dataObj) {
            console.log('INSTAGRAM_ACCOUNS_RENDERED', dataObj);
            userListInstagram = dataObj.dataArray;
            chatBotStatus.init();
        });
    }
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.init = init;

var _apiTaskManager = __webpack_require__(4);

var _apiTaskManager2 = _interopRequireDefault(_apiTaskManager);

var _consts = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-use-before-define */
var $list = $('.bot-log-tasks');
var selectCls = 'someClass';
var getUsername = function getUsername() {
    return $('.' + selectCls + ' option:selected').val();
};
var path = {
    type: _consts.CONST.url.tmTypes.chatBotT,
    subtype: _consts.CONST.url.tmTypes.chatBotSubT[0],
    username: getUsername()
};
var currentPage = null;
var intervalId = '';

function initHandlerPagination($previous, $next, dataArray) {
    var $wrapper = $('.logs-pagination');
    var pagination = dataArray.settings.pagination;

    var lastPage = pagination.pages[pagination.pages.length - 1];
    var updateButtons = function updateButtons() {
        $wrapper.find('li.page-number.active').removeClass('active');
        // $($wrapper.find('li.page-number')[pagination.current]).addClass('active');
    };
    $previous.on('click', function (e) {
        var currentActiveIdx = $wrapper.find('li.page-number.active').index();
        var page = pagination.previous;
        if (!pagination.previous) {
            $previous.addClass('disabled').prop('disabled', 'disabled');
            return;
        }
        currentPage = pagination.previous;
        updateButtons(e, currentActiveIdx - 1);
        getLogsData($list, path, page);
    });

    $next.on('click', function (e) {
        var currentActiveIdx = $wrapper.find('li.page-number.active').index();
        var page = pagination.next;
        if (!pagination.next) {
            // $previous.addClass('disabled').prop('disabled', 'disabled');
            return;
        }
        currentPage = pagination.next;
        updateButtons(e, currentActiveIdx);
        if (lastPage <= currentActiveIdx + 1) {
            $(e.target).parent().addClass('disabled');
        }
        if (currentActiveIdx && $previous.hasClass('disabled')) {
            $previous.removeClass('disabled');
        }
        getLogsData($list, path, page);
    });

    $('#v-pills-logs-tab').on('click', function (e) {
        // at this point of time setInterval is working
        currentPage = 1;
    });
    $('.page-number').on('click', function (e) {
        var val = $(e.target).text();
        currentPage = parseInt(val, 10);
        getLogsData($list, path, currentPage);
        console.log(currentPage);
    });
}

function addPagination(dataArray, $wrapper) {
    var pagination = dataArray.settings.pagination;

    var tplPrevious = $('<li class="page-item ' + (!pagination.previous ? 'disabled' : '') + '"><a class="page-link" href="#" ' + (!pagination.previous ? 'tabindex="-1"' : '') + '>\u041D\u0430\u0437\u0430\u0434</a></li>');
    var tplNext = $('<li class="page-item ' + (!pagination.next ? 'disabled' : '') + '"><a class="page-link" href="#" ' + (!pagination.next ? 'tabindex="-1"' : '') + '>\u0412\u043F\u0435\u0440\u0435\u0434</a></li>');
    clearPagination($wrapper);

    $wrapper.append(tplPrevious);
    pagination['pages'].forEach(function (item) {
        $('<li class="page-item page-number ' + (pagination.current === item ? 'active' : '') + '"><a class="page-link" href="#">' + item + '</a></li>').appendTo($wrapper);
    });
    $wrapper.append(tplNext);
    initHandlerPagination(tplPrevious, tplNext, dataArray);
}

function clearPagination($wrapper) {
    $wrapper.empty();
}

function fillListMeta($list, dataArray, isRuns) {
    var $wrapperPagination = $('.logs-pagination');
    var items = dataArray.logs;
    // const defaultAvatarSrc = 'https://i.imgur.com/jNNT4LE.png';
    $list.empty();
    if (!items.length) {
        $('<li class="list-group-item py-2">\n            <p>\u0412 \u044D\u0442\u043E\u043C \u0440\u0430\u0437\u0434\u0435\u043B\u0435 \u043D\u0435\u0442 \u043D\u0438 \u043E\u0434\u043D\u043E\u0439 \u0437\u0430\u0434\u0430\u0447\u0438.</p>\n        </li>').appendTo($list);
        clearPagination($wrapperPagination);
        return;
    }
    addPagination(dataArray, $wrapperPagination);
    items.forEach(function (item) {
        var level = item.level,
            value = item.value;

        $('<li class="list-group-item p-0 py-2">\n              <div class="media-body d-flex">\n                  <div class="col task-type ' + (level === 'ERROR' ? 'text-danger' : '') + '">\n                      ' + (value ? '' + value : '') + '\n                  </div>\n              </div>\n          </li>').appendTo($list);

        if (!$('li', $list).length) {
            $('<li class="list-group-item py-2" >\n                <p>\u0412 \u044D\u0442\u043E\u043C \u0440\u0430\u0437\u0434\u0435\u043B\u0435 \u043D\u0435\u0442 \u043D\u0438 \u043E\u0434\u043D\u043E\u0439 \u0437\u0430\u0434\u0430\u0447\u0438.</p>\n            </li>').appendTo($list);
        }
    });
}

function getLogsData($list, path, page) {
    path.username = getUsername(selectCls);
    _apiTaskManager2.default.getLogsChatBot(path, page).then(function (result) {
        if (result.status.state === 'ok') {
            fillListMeta($list, result.data);
            var updateInterval = result.data.settings.invoke_in_millis;
            // reset Timer request
            if (intervalId) {
                clearInterval(intervalId);
            }
            if (!currentPage >= 1) {
                intervalId = setInterval(function () {
                    // eslint-disable-next-line indent
                    getLogsData($list, path, currentPage);
                }, updateInterval);
            }
        } else {
            $('<li class="list-group-item py-2">\n                <p>\u041D\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u0430</p>\n            </li>').appendTo($list);
        }
    });
}

function init(_selectCls) {
    if ($('.chat-bot-page').length) {
        selectCls = _selectCls;
        if (getUsername()) {
            console.log(getUsername());
            getLogsData($list, path);
        } else {
            console.log('select user');
        }
    }
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.init = init;

var _consts = __webpack_require__(0);

var _followStatus = __webpack_require__(6);

// import * as chatBotLogs from './bot-logs';

function init() {
    if ($('.chat-bot-page').length) {
        var path = {
            type: _consts.CONST.url.tmTypes.autogreetT,
            subtype: _consts.CONST.url.tmTypes.autogreetSubT[0]
        };
        var wrappers = {
            $runs: $('.bot-tasks-runs'),
            $stopped: $('.bot-tasks-stopped')
        };
        (0, _followStatus.getTasksData)(wrappers, path);
        console.log(path);
        window.PubSub.subscribe(_consts.CONST.events.instagramAccouns.INSTAGRAM_ACCOUNS_RENDERED, function (eventName, data) {
            (0, _followStatus.getTasksData)(wrappers, path);
            console.log('**chat-bot-status', eventName, data);
        });
        window.PubSub.subscribe(_consts.CONST.events.tasks.NEW_TASK_CREATED, function (eventName, data) {
            (0, _followStatus.getTasksData)(wrappers, path);
        });
    }
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.init = init;

var _apiTaskManager = __webpack_require__(4);

var _apiTaskManager2 = _interopRequireDefault(_apiTaskManager);

var _consts = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-use-before-define */
var $list = $('.bot-log-tasks');
var selectCls = 'someClass';
var getUsername = function getUsername() {
    return $('.' + selectCls + ' option:selected').val();
};
var path = {
    type: _consts.CONST.url.tmTypes.chatBotT,
    subtype: _consts.CONST.url.tmTypes.chatBotSubT[0],
    username: getUsername()
};
var currentPage = null;
var intervalId = '';

function initHandlerPagination($previous, $next, dataArray) {
    var $wrapper = $('.logs-pagination');
    var pagination = dataArray.settings.pagination;

    var lastPage = pagination.pages[pagination.pages.length - 1];
    var updateButtons = function updateButtons() {
        $wrapper.find('li.page-number.active').removeClass('active');
        // $($wrapper.find('li.page-number')[pagination.current]).addClass('active');
    };
    $previous.on('click', function (e) {
        var currentActiveIdx = $wrapper.find('li.page-number.active').index();
        var page = pagination.previous;
        if (!pagination.previous) {
            $previous.addClass('disabled').prop('disabled', 'disabled');
            return;
        }
        currentPage = pagination.previous;
        updateButtons(e, currentActiveIdx - 1);
        getLogsData($list, path, page);
    });

    $next.on('click', function (e) {
        var currentActiveIdx = $wrapper.find('li.page-number.active').index();
        var page = pagination.next;
        if (!pagination.next) {
            // $previous.addClass('disabled').prop('disabled', 'disabled');
            return;
        }
        currentPage = pagination.next;
        updateButtons(e, currentActiveIdx);
        if (lastPage <= currentActiveIdx + 1) {
            $(e.target).parent().addClass('disabled');
        }
        if (currentActiveIdx && $previous.hasClass('disabled')) {
            $previous.removeClass('disabled');
        }
        getLogsData($list, path, page);
    });

    $('#v-pills-logs-tab').on('click', function (e) {
        // at this point of time setInterval is working
        currentPage = 1;
    });
    $('.page-number').on('click', function (e) {
        var val = $(e.target).text();
        currentPage = parseInt(val, 10);
        getLogsData($list, path, currentPage);
        console.log(currentPage);
    });
}

function addPagination(dataArray, $wrapper) {
    var pagination = dataArray.settings.pagination;

    var tplPrevious = $('<li class="page-item ' + (!pagination.previous ? 'disabled' : '') + '"><a class="page-link" href="#" ' + (!pagination.previous ? 'tabindex="-1"' : '') + '>\u041D\u0430\u0437\u0430\u0434</a></li>');
    var tplNext = $('<li class="page-item ' + (!pagination.next ? 'disabled' : '') + '"><a class="page-link" href="#" ' + (!pagination.next ? 'tabindex="-1"' : '') + '>\u0412\u043F\u0435\u0440\u0435\u0434</a></li>');
    clearPagination($wrapper);

    $wrapper.append(tplPrevious);
    pagination['pages'].forEach(function (item) {
        $('<li class="page-item page-number ' + (pagination.current === item ? 'active' : '') + '"><a class="page-link" href="#">' + item + '</a></li>').appendTo($wrapper);
    });
    $wrapper.append(tplNext);
    initHandlerPagination(tplPrevious, tplNext, dataArray);
}

function clearPagination($wrapper) {
    $wrapper.empty();
}

function fillListMeta($list, dataArray, isRuns) {
    var $wrapperPagination = $('.logs-pagination');
    var items = dataArray.logs;
    // const defaultAvatarSrc = 'https://i.imgur.com/jNNT4LE.png';
    $list.empty();
    if (!items.length) {
        $('<li class="list-group-item py-2">\n            <p>\u0412 \u044D\u0442\u043E\u043C \u0440\u0430\u0437\u0434\u0435\u043B\u0435 \u043D\u0435\u0442 \u043D\u0438 \u043E\u0434\u043D\u043E\u0439 \u0437\u0430\u0434\u0430\u0447\u0438.</p>\n        </li>').appendTo($list);
        clearPagination($wrapperPagination);
        return;
    }
    addPagination(dataArray, $wrapperPagination);
    items.forEach(function (item) {
        var level = item.level,
            value = item.value;

        $('<li class="list-group-item p-0 py-2">\n              <div class="media-body d-flex">\n                  <div class="col task-type ' + (level === 'ERROR' ? 'text-danger' : '') + '">\n                      ' + (value ? '' + value : '') + '\n                  </div>\n              </div>\n          </li>').appendTo($list);

        if (!$('li', $list).length) {
            $('<li class="list-group-item py-2" >\n                <p>\u0412 \u044D\u0442\u043E\u043C \u0440\u0430\u0437\u0434\u0435\u043B\u0435 \u043D\u0435\u0442 \u043D\u0438 \u043E\u0434\u043D\u043E\u0439 \u0437\u0430\u0434\u0430\u0447\u0438.</p>\n            </li>').appendTo($list);
        }
    });
}

function getLogsData($list, path, page) {
    path.username = getUsername(selectCls);
    _apiTaskManager2.default.getLogsChatBot(path, page).then(function (result) {
        if (result.status.state === 'ok') {
            fillListMeta($list, result.data);
            var updateInterval = result.data.settings.invoke_in_millis;
            // reset Timer request
            if (intervalId) {
                clearInterval(intervalId);
            }
            if (!currentPage >= 1) {
                intervalId = setInterval(function () {
                    // eslint-disable-next-line indent
                    getLogsData($list, path, currentPage);
                }, updateInterval);
            }
        } else {
            $('<li class="list-group-item py-2">\n                <p>\u041D\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u0430</p>\n            </li>').appendTo($list);
        }
    });
}

function init(_selectCls) {
    if ($('.chat-bot-page').length) {
        selectCls = _selectCls;
        if (getUsername()) {
            console.log(getUsername());
            getLogsData($list, path);
        } else {
            console.log('select user');
        }
    }
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.init = init;

var _consts = __webpack_require__(0);

var _wizardForm = __webpack_require__(8);

var wizardForm = _interopRequireWildcard(_wizardForm);

var _apiTaskManager = __webpack_require__(4);

var _apiTaskManager2 = _interopRequireDefault(_apiTaskManager);

var _chatBotStatus = __webpack_require__(15);

var chatBotStatus = _interopRequireWildcard(_chatBotStatus);

var _botLogs = __webpack_require__(13);

var chatBotLogs = _interopRequireWildcard(_botLogs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var usernameSelected = '';
var userListInstagram = [];
var selectCls = 'js_logs-accounts';

function onSubmitHandler(e) {
    var fields = $('.chat-bot-text-fields');
    var keyWords = function keyWords($el) {
        return $el.val().trim().replace(/ /g, '').split(',').filter(function (i) {
            return i.length > 0;
        });
    };
    var reqBody = [];
    fields.each(function (idx, item) {
        var keyWord = keyWords($(item).find('textarea.chat-words'));
        var answer = $(item).find('textarea.chat-messages').val();
        reqBody.push({ 'key_words': keyWord, answer: answer });
    });
    var nReqBody = {
        'username': usernameSelected,
        'type': _consts.CONST.url.tmTypes.chatBotT, // 'CHAT_BOT',
        'subtype': _consts.CONST.url.tmTypes.chatBotSubT[0], // 'DEFAULT_CHAT_BOT',
        'user_default_config': {},
        'user_custom_config': {
            'text_forms': reqBody
        }
    };

    console.log('make request here**', nReqBody);
    function cbError(res) {
        var msg = res.status.message;
        $('.form-submit-finish--error').addClass('d-block').find('.alert').append('<p>' + msg + '</p>');
    }
    _apiTaskManager2.default.postStartChatBot(nReqBody, cbError).then(function (result) {
        console.log('postBot');
        if (result.status.state === 'ok') {
            console.log(JSON.stringify(result));
            $('.form-submit-finish').addClass('d-block').find('.alert').append('<p>task_id: ' + result.data.task_id + '</p>');
        }
    });
}

function fillListUsers($wrapper, data) {
    $wrapper.empty().addClass('border-light-color');
    $('<div class="">\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u044B</div><select name="task-type" class="' + selectCls + '"></select>').appendTo($wrapper);
    data.forEach(function (item) {
        $('<option class="list-group-item py-2" value="' + item.username + '">\n            ' + item.username + '\n        </option>').appendTo($('.' + selectCls));
    });
    $('.' + selectCls).on('change', function () {
        usernameSelected = $('.' + selectCls + ' option:selected').val();
        console.log(usernameSelected);
        chatBotLogs.init(selectCls);
    });
}

/**
 * Init header
 */
function initChatMsg() {
    var tplTextField = function tplTextField() {
        return $('<div class="chat-bot-text-fields mt-2">\n        <div class="row">\n            <div class="col">\n                <textarea class="form-control chat-words" rows="4" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u0441\u043B\u043E\u0432\u0430 \u0438\u043B\u0438 \u0444\u0440\u0430\u0437\u044B \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043F\u044F\u0442\u0443\u044E, \u043F\u0440\u0438 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0431\u0443\u0434\u0435\u0442 \u0441\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0442\u044C \u0447\u0430\u0442-\u0431\u043E\u0442"></textarea>\n            </div>\n            <div class="col">\n                <textarea class="form-control chat-messages" rows="4" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0431\u0443\u0434\u0435\u0442 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C\u0441\u044F, \u0435\u0441\u043B\u0438 \u043F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u043B\u0438 \u043A\u043B\u044E\u0447.\u0441\u043B\u043E\u0432\u0430 \u0438\u043B\u0438 \u0444\u0440\u0430\u0437\u044B \u0438\u0437 \u0441\u0442\u043E\u043B\u0431\u0446\u0430 \u0441\u043B\u0435\u0432\u0430"></textarea>\n            </div>\n        </div>\n    </div>');
    };

    $('.js_add-chat-bot').on('click', function (e) {
        var lastTextField = $('.chat-bot-text-fields').last();
        tplTextField().insertAfter(lastTextField);
    });

    // alert close
    $('.form-submit-finish .close').on('click', function () {
        console.log('alert close');
        $('#v-pills-runned-tab').trigger('click');
        window.PubSub.publish(_consts.CONST.events.tasks.NEW_TASK_CREATED);
    });

    // alert close
    $('.form-submit-finish--error .close').on('click', function () {
        console.log('alert close');
        $('#v-pills-runned-tab').trigger('click');
        window.PubSub.publish(_consts.CONST.events.tasks.NEW_TASK_CREATED);
    });
    $('#v-pills-logs-tab').on('click', function (e) {
        // at this point of time setInterval is working
        var $wrapper = $('.log-users-list');
        fillListUsers($wrapper, userListInstagram);
        chatBotLogs.init(selectCls);
    });
}

function setUserName(state) {
    // console.log('getTasksData', state.username);
    usernameSelected = state.username;
}

function stepReducer(stepNumber, state) {
    switch (stepNumber) {
        case 0:
            setUserName(state);
            // console.log(state, stepNumber);
            break;
        default:
            console.log('default', stepNumber);
    }
}

function init() {
    if ($('.chat-bot-page').length) {
        var wizardCfg = {
            stepReducer: stepReducer,
            onSubmitHandler: onSubmitHandler
        };
        wizardForm.init(wizardCfg);
        initChatMsg();
        window.PubSub.subscribe(_consts.CONST.events.instagramAccouns.INSTAGRAM_ACCOUNS_RENDERED, function (e, dataObj) {
            console.log('INSTAGRAM_ACCOUNS_RENDERED', dataObj);
            userListInstagram = dataObj.dataArray;
            chatBotStatus.init();
        });
    }
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.init = init;

var _consts = __webpack_require__(0);

var _followStatus = __webpack_require__(6);

// import * as chatBotLogs from './bot-logs';

function init() {
    if ($('.chat-bot-page').length) {
        var path = {
            type: _consts.CONST.url.tmTypes.chatBotT,
            subtype: _consts.CONST.url.tmTypes.chatBotSubT[0]
        };
        var wrappers = {
            $runs: $('.bot-tasks-runs'),
            $stopped: $('.bot-tasks-stopped')
        };
        (0, _followStatus.getTasksData)(wrappers, path);
        console.log(path);
        window.PubSub.subscribe(_consts.CONST.events.instagramAccouns.INSTAGRAM_ACCOUNS_RENDERED, function (eventName, data) {
            (0, _followStatus.getTasksData)(wrappers, path);
            console.log('**chat-bot-status', eventName, data);
        });
        window.PubSub.subscribe(_consts.CONST.events.tasks.NEW_TASK_CREATED, function (eventName, data) {
            (0, _followStatus.getTasksData)(wrappers, path);
        });
    }
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.confirmationWithRedirect = confirmationWithRedirect;

var _user = __webpack_require__(2);

var _user2 = _interopRequireDefault(_user);

var _consts = __webpack_require__(0);

var _cookie = __webpack_require__(1);

var _cookie2 = _interopRequireDefault(_cookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var parseQueryString = function parseQueryString() {

    var str = window.location.search;
    var objURL = {};

    str.replace(new RegExp('([^?=&]+)(=([^&]*))?', 'g'), function ($0, $1, $2) {
        objURL[$1] = $2;
    });
    return objURL;
}; /* eslint-disable sort-vars */
// import $ from 'jquery';
function confirmationWithRedirect() {
    var user = _user2.default;
    var params = parseQueryString();
    // Example how to use it:

    var sendConfirm = function sendConfirm(token) {
        user.confirm(token).then(function (result) {
            if (result.status && result.status.state === 'ok') {

                // save the item
                _cookie2.default.set(_consts.CONST.cookieStorage.emailConfirmed, 'confirmed');
                _cookie2.default.set(_consts.CONST.cookieStorage.token, result.data.token);

                // window.location = confirm-registration.html?token='from server';

                // retrieve the object in a string form
                var customersDataString = sessionStorage.getItem('customersData');
                console.log(customersDataString);
                console.log('request succeeded with JSON response', result);
                $('.confirm-registration').append('<p>confirmation status: ' + result.status.state + '</p>');
                setTimeout(function () {
                    window.location = './profile.html';
                }, 1000);
            } else if (result.status) {
                console.log(result);
            } else {
                console.log(result);
            }
        });
    };

    var redirect = function redirect() {
        // eslint-disable-next-line dot-notation
        var token = params['token'];

        if (!location.pathname.indexOf('confirm-registration')) {
            return;
        }
        if (token) {
            console.log('send req to ', token);
            sendConfirm(token);
        }
    };

    function init() {
        redirect();
    }

    return {
        init: init
    };
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.modifyAccList = modifyAccList;
exports.init = init;

var _followStatus = __webpack_require__(6);

var followStatus = _interopRequireWildcard(_followStatus);

var _consts = __webpack_require__(0);

var _apiTaskManager = __webpack_require__(4);

var _apiTaskManager2 = _interopRequireDefault(_apiTaskManager);

__webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var state = {
    username: '',
    user_default_config: {
        task_mode: 'SAFE'
    }
};

function fillListMeta($list, dataArray) {
    var items = dataArray;
    // const defaultAvatarSrc = 'https://i.imgur.com/jNNT4LE.png';
    $list.empty().addClass('border-light-color');
    $('<li class="list-group-item py-2"><h3>UserTaskManager</h3></li>').appendTo($list);
    items.forEach(function (item) {
        // const info = item.info;
        // const checkpoint = item.checkpoint || item;
        $('<li class="list-group-item py-2" data-username="' + item.type + '">\n                <div class="media-body d-flex">\n                    <div class="col task-type">\n                        ' + (item.task_id ? '<p class="mt-0 mb-1 name">' + item.task_id + '</p>' : '') + '\n                    </div>\n                    <div class="col task-subtype">\n                        ' + (item.subtype ? '<p class="mt-0 mb-1 name">' + item.subtype + '</p>' : '') + '\n                    </div>\n                    <div class="col task-progress">\n                        ' + (item.status.state === 'STOPPED' ? '<p class="mt-0 mb-1 name">\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043E - ' + item.status.reason + '</p>' : '') + '\n                    </div>\n                    <!--<div class="col task-progress">\n                        ' + (item.progress ? '<p class="mt-0 mb-1 name">\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E - ' + item.progress.count + '</p>\n                                <p class="mt-0 mb-1 name">\u041F\u0440\u043E\u0446\u0435\u043D\u0442 - ' + item.progress.percent + '</p>' : '') + '\n                    </div>-->\n                </div>\n            </li>').appendTo($list);
    });
}

/*
function fillListTypes($wrapper, data) {
    const structureObj = data['structure'];

    $wrapper.empty().addClass('border-light-color');
    $('<div class="">Тип задания</div><select name="task-type" id="task-types"></select>').appendTo($wrapper);
    for (const type in structureObj) {
        // console.log('structure: ' + item);
        if (Object.prototype.hasOwnProperty.call(structureObj, type)) {
            $(`<option class="list-group-item py-2" ${(type !== 'FOLLOWING') ? 'disabled="disabled"' : ''}
                value = "${JSON.stringify({type, subtype: structureObj[type]})}">
                ${type}
            </option>`).appendTo($('#task-types'));
        }
    }
}
*/

function getTasksData(path) {
    _apiTaskManager2.default.getMetadata(path).then(function (result) {
        if (result.status.state === 'ok') {
            fillListMeta($('.follow-tasks-list'), result.data.meta);
        }
    });
}

function getDataStep2(usersName) {
    console.log(usersName);
    var path = {
        type: _consts.CONST.url.tmTypes.followingT,
        subtype: _consts.CONST.url.tmTypes.followingSubT[0]
    };
    getTasksData(path);
}

function getDataStep3() {
    var users = $('#followers').val().trim().replace(/ /g, '').split(',').filter(function (i) {
        return i.length > 0;
    });

    state['user_custom_config'] = {
        users: users
    };
    var fillSpeedList = function fillSpeedList($wrapper, data) {
        var taskModes = data.cfg && data.cfg.task_modes;
        var radioBtnReducer = function radioBtnReducer(item) {
            switch (item) {
                case 'AGGRESSIVE':
                    return '<input type="radio" id="' + item + '" name="customRadio" value="safe" class="custom-control-input">\n                    <label class="custom-control-label" for="' + item + '"><strong>\u0410\u0433\u0440\u0435\u0441\u0441\u0438\u0432\u043D\u044B\u0439:</strong> 30 \u043F\u043E\u0434\u043F\u0438\u0441\u043E\u043A \u0432 \u0447\u0430\u0441</label>';
                // break;
                case 'MIDDLE':
                    return '<input type="radio" id="' + item + '" name="customRadio" value="safe" class="custom-control-input">\n                    <label class="custom-control-label" for="' + item + '"><strong>\u0421\u0440\u0435\u0434\u043D\u0438\u0439:</strong> 18 \u043F\u043E\u0434\u043F\u0438\u0441\u043E\u043A \u0432 \u0447\u0430\u0441</label>';
                // break;
                case 'SAFE':
                    return '<input type="radio" id="' + item + '" name="customRadio" value="safe" class="custom-control-input" checked>\n                    <label class="custom-control-label" for="' + item + '"><strong>\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u044B\u0439:</strong> 9 \u043F\u043E\u0434\u043F\u0438\u0441\u043E\u043A \u0432 \u0447\u0430\u0441</label>';
                // break;
                default:
                    console.log('default', item);
            }
        };
        // console.log('draw speed radioBtn');
        $wrapper.empty();
        for (var item in taskModes) {
            // console.log('structure: ' + item);
            if (Object.prototype.hasOwnProperty.call(taskModes, item)) {
                $('<div class="custom-control custom-radio">\n                ' + radioBtnReducer(item) + '\n            </div>').appendTo($wrapper);
            }
        }
    };

    // draw criteria
    _apiTaskManager2.default.getDefaultConfigs().then(function (result) {
        // console.log('getDefaultConfigs');
        if (result.status.state === 'ok') {
            // console.log(result);
            fillSpeedList($('.js_follow-speed'), result.data.found);
        }
    });
}

function stepReducer(stepNumber) {
    switch (stepNumber) {
        case 0:
            getDataStep2(state.username); // [...new Set(state.username)]
            // console.log(state);
            break;
        case 1:
            getDataStep3();
            break;
        default:
            console.log('default', stepNumber);
    }
}

/**
 * Init header
 */
function initSteps(formSelector) {
    var $form = $(formSelector);
    $('.js_profile-user-follow>.container').removeClass('container');

    $form.find('fieldset:first-child').fadeIn('slow');

    $form.find('input[type="text"]').on('focus', function () {
        $(this).removeClass('input-error');
    });

    // next step
    $form.find('.btn-next').on('click', function () {
        var parent_fieldset = $(this).parents('fieldset');
        var next_step = true;
        var radioBtnActive = parent_fieldset.find('input[name="userAccountRadio"]:checked');

        if (radioBtnActive.length > 0) {
            state.username = radioBtnActive.parents('li').data('username');
        }
        stepReducer(parent_fieldset.index(), state);

        parent_fieldset.find('input[type="text"],input[type="email"]').each(function () {
            if ($(this).val() === '') {
                $(this).addClass('input-error');
                next_step = false;
            } else {
                $(this).removeClass('input-error');
            }
        });

        if (next_step) {
            parent_fieldset.fadeOut(400, function () {
                $(this).next().fadeIn();
            });
        }
    });

    // previous step
    $form.find('.btn-previous').on('click', function () {
        // state.username = [...new Set(state.username)];
        $(this).parents('fieldset').fadeOut(400, function () {
            $(this).prev().fadeIn();
        });
    });

    // speed radio-btn group
    $('.js_follow-speed input[type=radio]').on('click', function () {
        var value = $(this).attr('value');
        state.user_default_config = {
            task_mode: value.toUpperCase()
        };
    });

    // submit
    $form.on('submit', function (e) {
        var genderVal = $(this).find('.select-gender option:selected').val();
        state.user_default_config = _extends({}, state.user_default_config, {
            criteria: {
                gender: genderVal.toUpperCase()
            }
        });
        var limit = document.forms['follow-form']['limit'];
        var have_posts = {
            from: document.forms['follow-form']['have_posts_from'].value,
            to: document.forms['follow-form']['have_posts_to'].value
        };
        var have_followers = {
            from: document.forms['follow-form']['have_followers_from'].value,
            to: document.forms['follow-form']['have_followers_to'].value
        };
        var have_followings = {
            from: document.forms['follow-form']['have_followings_from'].value,
            to: document.forms['follow-form']['have_followings_to'].value
        };

        if (limit.value === '') {
            limit.focus();
            return false;
        }
        state['user_default_config'].criteria = {
            limit: limit.value,
            'unfollow_then': !!$('#unfollow_then:checked').length,
            'follow_on_closed_profiles': !!$('#follow_on_closed_profiles:checked').length,
            have_posts: have_posts,
            have_followers: have_followers,
            have_followings: have_followings
        };

        $(this).find('input[type="text"],input[type="number"],input[type="email"]').each(function () {
            if ($(this).val() === '') {
                e.preventDefault();
                $(this).addClass('input-error');
            } else {
                $(this).removeClass('input-error');
            }
        });

        state.type = _consts.CONST.url.tmTypes.followingT; // 'FOLLOWING';
        state.subtype = _consts.CONST.url.tmTypes.followingSubT[0]; // 'FOLLOWING_LIST';
        console.log('make request**  post: StartFollowingList', state);

        _apiTaskManager2.default.postStartFollowingList(state).then(function (result) {
            if (result.status.state === 'ok') {
                console.log(JSON.stringify(result));
                $('.form-submit-finish').addClass('d-block').find('.alert').append('<p>task_id: ' + result.data.task_id + '</p>');
            }
        });
    });

    // alert close
    $('.form-submit-finish .close').on('click', function () {
        // $(this).closest('form-submit-finish').removeClass('d-block');
        $('#v-pills-runned-tab').trigger('click');
        window.PubSub.publish(_consts.CONST.events.tasks.NEW_TASK_CREATED);
    });
}

/*
function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class on the current step:
    x[n].className += " active";
}*/

function modifyAccList() {
    // const radioBtn = (idx) => `<div class="col custom-control custom-radio js_user-radio">
    //         <input type="radio" name="userAccountRadio" id="customRadio-${idx}" class="custom-control-input" value="">
    //         <label class="custom-control-label" for="customRadio-${idx}">Подписаться</label>
    //     </div>`;
    var radioBtnAppend = function radioBtnAppend(idx) {
        return '<div class="">\n            <input type="radio" name="userAccountRadio" id="customRadio-' + idx + '" class="custom-control-input d-none" value="">\n        </div>';
    };
    var radioBtnWrap = function radioBtnWrap(idx) {
        return '<label class="accounts-list--label-wrapper col mb-0 media py-3" for="customRadio-' + idx + '"></label>';
    };
    var $accountsList = $('.accounts-list');
    var $li = $accountsList.find('li.media');
    $li.addClass('js_user-radio').removeClass('py-3 media');

    for (var i = 0; i < $li.length; i++) {
        // $($li[i]).append(radioBtn(i));
        $($li[i]).wrapInner(radioBtnWrap(i)).append(radioBtnAppend(i));
    }
    // UserTaskManager.getTaskTypes().then((result) => {
    //     if (result.status.state === 'ok') {
    //         // console.log(result);
    //         fillListTypes($('.js_task-types'), result.data);
    //     }
    // });

    $('.js_user-radio').on('click', 'input[type=radio]', function (e) {
        var $parentFieldset = $(this).parents('fieldset');
        $('li.active', $parentFieldset).removeClass('active');
        $(this).closest('li').addClass('active');
        $('.btn-next', $parentFieldset).prop('disabled', false);
    });

    $('.checkbox-cell').on('change', function (e) {
        console.log('validate');
        // updateStatus();
    });
}

/* working demo : http://brutusin.org/json-forms/#13
function formFromJson() {
    const schema = {
        "type": "object",
        "properties": {
            "prop1": {
                "type": "integer"
            },
            "prop2": {
                "type": "integer",
                "required": true
            },
            "prop3": {
                "type": "integer",
                "required": true
            },
            "composite1": {
                "type": "object",
                "properties": {
                    "nested1": {
                        "type": "number",
                        "required": true
                    },
                    "nested2": {
                        "type": "number",
                        "required": true
                    }
                },
                "required": [
                    "nested1",
                    "nested2"
                ]
            },
            "composite2": {
                "type": "object",
                "properties": {
                    "nested1": {
                        "type": "number",
                        "required": true
                    },
                    "nested2": {
                        "type": "number",
                        "required": true
                    }
                },
                "required": [
                    "nested1",
                    "nested2"
                ]
            }
        },
        "required": [
            "prop1",
            "prop2",
            "composite1"
        ]
    };
    const BrutusinForms = window.brutusin['json-forms'];
    const bf = BrutusinForms.create(schema);
    const container = document.getElementById('form1');
    console.log(window.brutusin);
    bf.render(container, data);
}*/

function init() {
    if ($('.follow').length) {
        followStatus.init();
        initSteps('.follow-form');
        window.PubSub.subscribe(_consts.CONST.events.instagramAccouns.INSTAGRAM_ACCOUNS_RENDERED, function (eventName, data) {
            modifyAccList();
        });
    }
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.init = init;
// import $ from 'jquery';

// const hamburgerButtonCls = '#aside_mobile__button';
// const hamburgerMenuCls = '.aside-burger-menu';
// const hamburgerMenuOpenedClass = 'burger-menu--closed';
// const hamburgerButtonCloseClass = 'burger-menu__button--close';
var selectorsEl = {
    leftMenu: {
        hamburgerButtonCls: '#aside_mobile__button',
        hamburgerMenuCls: '.aside-burger-menu',
        hamburgerMenuOpenedClass: 'burger-menu--closed',
        hamburgerButtonCloseClass: 'burger-menu__button--close'
    },
    rightMenu: {
        hamburgerButtonCls: '#header_mobile_toggler',
        hamburgerMenuCls: '.r-side-burger-menu',
        hamburgerMenuOpenedClass: 'r-side-burger-menu--open',
        hamburgerButtonCloseClass: 'burger-menu-right__button--close'
    },
    subHeader: {
        hamburgerButtonCls: '#header_mobile_topbar_toggler',
        hamburgerMenuCls: '.sub-header',
        hamburgerMenuOpenedClass: 'sub-header--open',
        hamburgerButtonCloseClass: 'sub-header-button--close'
    }
};

/**
 * Toggle hamburger menu popover
 */
function toggleHamburgerMenu(menuName) {
    var _selectorsEl$menuName = selectorsEl[menuName],
        hamburgerMenuCls = _selectorsEl$menuName.hamburgerMenuCls,
        hamburgerButtonCls = _selectorsEl$menuName.hamburgerButtonCls,
        hamburgerButtonCloseClass = _selectorsEl$menuName.hamburgerButtonCloseClass,
        hamburgerMenuOpenedClass = _selectorsEl$menuName.hamburgerMenuOpenedClass;

    $(hamburgerButtonCls).toggleClass(hamburgerButtonCloseClass);
    $(hamburgerMenuCls).toggleClass(hamburgerMenuOpenedClass);
}

/**
 * Init hamburger menu
 */
function init() {
    var leftMenu = 'leftMenu';
    var rightMenu = 'rightMenu';
    var subHeader = 'subHeader';

    $(selectorsEl[leftMenu].hamburgerButtonCls).on('click', toggleHamburgerMenu.bind(this, leftMenu));
    $(selectorsEl[rightMenu].hamburgerButtonCls).on('click', toggleHamburgerMenu.bind(this, rightMenu));
    $(selectorsEl[subHeader].hamburgerButtonCls).on('click', toggleHamburgerMenu.bind(this, subHeader));
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initHeader = initHeader;

var _user = __webpack_require__(2);

var _user2 = _interopRequireDefault(_user);

var _pubsubJs = __webpack_require__(5);

var _pubsubJs2 = _interopRequireDefault(_pubsubJs);

var _consts = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var selectorLoginState = '.js_message_logged--text'; // https://www.npmjs.com/package/pubsub-js
// import $ from 'jquery';

var selectorEmailConfirmState = '.js_email-confirm--text';
var closeClass = 'd-none';
var openedClass = 'd-block';

function emailNotConfirmed() {
    var $emailnMsg = $(selectorEmailConfirmState);
    $emailnMsg.text('**emailNotConfirmed** Email не подтвержден.').css('color', 'lightcoral');
}

function onLoginSubscribe(msg, data) {
    // console.log(msg, data);
    $(_consts.CONST.uiSelectors.headerNavLoginBtn).addClass(closeClass).removeClass(openedClass);
    $(_consts.CONST.uiSelectors.headerRegBtn).addClass(closeClass).removeClass(openedClass);
    $(_consts.CONST.uiSelectors.headerLoginBox).addClass(closeClass).removeClass(openedClass);

    $('.nav-link.js_logOut').addClass(openedClass).removeClass(closeClass); // show
    var $loginMsg = $(selectorLoginState);
    $loginMsg.text('**onLoginSubscribe** вы залогинились в Luxgram успешно').css('color', 'lightblue');
    var isEmailConfirmed = _user2.default.isEmailConfirmed();
    if (!isEmailConfirmed) {
        emailNotConfirmed();
    }
}

function showLogout() {
    // check is logged
    var isLogged = _user2.default.isLoggedIn();
    var isEmailConfirmed = _user2.default.isEmailConfirmed();
    if (!isEmailConfirmed) {
        emailNotConfirmed();
    }
    if (isLogged) {
        $('.nav-link.js_logOut').parent().show();
        $('.js_email-confirm--text').text('вы залогинились успешно');
        var oldURL = document.referrer;
        // console.log(oldURL);
        if (oldURL.includes('confirm-registration')) {
            $('.js_message_logged--text').text('вы подтвердили регистрацию');
        }
        onLoginSubscribe();
    } else {
        $(selectorLoginState).text('Привет анонимный пользователь');
        $(selectorEmailConfirmState).empty();
    }
}

/**
 * Init header
 */
function initHeader() {
    // check other handler in login-form.js
    var $loginBox = $(_consts.CONST.uiSelectors.headerLoginBox);
    var $registerBox = $(_consts.CONST.uiSelectors.headerRegBox);

    _pubsubJs2.default.subscribe(_consts.CONST.events.USER_LOGGED, onLoginSubscribe);

    showLogout();

    $(_consts.CONST.uiSelectors.headerRegBtn).on('click', function () {
        $loginBox.hide();
        $registerBox.css({ 'top': 0, 'right': 0 }).addClass('bg-light border mt-5 mx-auto position-absolute px-3 d-block').removeClass('d-none');
    });

    $(_consts.CONST.uiSelectors.headerNavLoginBtn).on('click', function () {
        $loginBox.addClass('d-block').removeClass('d-none');
        $registerBox.addClass('d-none').removeClass('d-block');
    });
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.init = init;

var _user = __webpack_require__(2);

var _user2 = _interopRequireDefault(_user);

var _view = __webpack_require__(3);

var _view2 = _interopRequireDefault(_view);

var _consts = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// После добавления аккаунта снова дернуть МЕТА и перерисовать список аккаунтов

// import Spinner from '../../common/js-services/spinner';
var addInstagramAccount = function addInstagramAccount(newFormData) {
    var cbError = function cbError(result) {
        console.log('ERROR', result);
        _view2.default.showInfoMessage($('.error-msg'), result.status.state, result.status.message || 'Login error');
        // $(_loginBox).addClass(closeClass).removeClass(openedClass);
    };

    _user2.default.addInstagramAccount(newFormData, cbError).then(function (result) {
        if (result && result.status) {
            console.log(result, result.status);
            // debugger;
            var $msgList = $('.accounts-list');
            $msgList.empty();
            // todo : reload list
            // fillList($msgList, result.data.accounts);
            // addListHandler();

            // viewUtils.showInfoMessage($textAreaDescription,
            //     result.status.state,
            //     result.status.message || 'Login error');
            // $(_loginBox).addClass(closeClass).removeClass(openedClass);
        }
    }).catch(function (err) {
        // todo: render for user
        console.log(err);
    });

    console.log('submit', newFormData);
};
// import PubSub from 'pubsub-js';
// import $ from 'jquery';


function addOnLoadHandlers() {
    // $('.js_repeat-security-code').on('click', (e) => {

    // });

    $('.js_add-instagram-account').on('click', function (e) {
        var btn = $(e.target);
        var $modalBody = btn.closest('.modal').find('.modal-dialog .modal-body');
        var username = $modalBody.find('input[name="username"]').val().trim();
        var password = $modalBody.find('input[name="pass"]').val().trim();
        var $form = $('form', $modalBody);
        var form = $form.get(0);
        var cssValidationClass = 'form-validation';

        e.preventDefault();

        // const validator = new Validator($form);
        // console.log(validator.validate());
        if (form.checkValidity()) {
            addInstagramAccount({ username: username, password: password });
        } else {
            // Highlight errors
            if (form.reportValidity) {
                form.reportValidity();
            }
            $form.addClass(cssValidationClass);
        }

        if (!username || !password) {
            console.log('not valid - Empty fields');
            return;
        }
    });
}

function addListHandler() /* username*/{
    // $('#yourModalID').on('show.bs.modal', function(e) {
    //     var yourparameter = e.relatedTarget.dataset.yourparameter;
    //     // Do some stuff w/ it.
    // });
    var checkpointType = '';

    $('.js_pass-checkpoint-btn').on('click', function (e) {
        var $button = $(e.target);
        var username = $button.data('username');
        checkpointType = $button.data('checkpointType') || checkpointType;
        // $('#security-code').data('checkpointType', checkpointType);
        // todo add 'checkpointType' to modal
        var sendTo = checkpointType === 'PHONE' ? 'телефон' : 'email';
        // Spinner.start($button, 'fa-key');

        if (checkpointType === 'EMAIL_OR_PHONE') {
            e.stopPropagation();

            // инпуты спрятаны,
            // показать серые переключатели (выбрал тип)
            // есть кнопка Запросить код подтверждение
            $('#security-code-phoneOremail').modal({ show: true, username: username });

            // не отправляем реквест
            return;
        }

        _user2.default.getSecurityKey(username, checkpointType).then(function (result) {
            console.log('SecurityKey received:', result.status.state);
            if (result.status.state === 'ok') {
                var $modal = $('#security-code');

                // Spinner.stop($button, 'fa-key');
                $('.js_success-feedback', $modal).empty().text('\u041A\u043B\u044E\u0447 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F \u0431\u044B\u043B \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D \u0412\u0430\u043C \u043D\u0430 ' + sendTo);

                $('#security-code').attr('data-username', username);
            }
        });
    });

    // inside modal
    $('.js_confirm-security-code').on('click', function (e) {
        var btn = $(e.target);
        var username = btn.closest('#security-code').data('username');
        var $keyInput = btn.closest('.modal').find('.modal-dialog form input.js_confirm-key');
        var key = $keyInput.val().trim();
        var $modal = btn.closest('.modal');
        e.stopPropagation();

        if (key.length !== 6) {
            return;
        }
        _user2.default.confirmSecurityKey(key, username).then(function (result) {
            if (result.status.state !== 'ok') {
                return;
            }
            console.log('js_confirm:', result.status.state, 'close modal');
            $modal.modal('hide');
        }).catch(function (err) {
            console.log('err');
            $('.js_success-feedback', $modal).text('Запрос не отправлен').css('color', 'red');
            console.log(err);
        });
    });

    $('form input[minlength]').on('blur', function () {
        var len = $(this).val().trim().length;
        var minLen = Number($(this).attr('minlength'));
        // const message = minLen <= len ? '' : minLen + ' characters minimum';
        if (minLen !== len) {
            $(this).css('borderColor', 'red');
        } else {
            $(this).css('borderColor', '#ced4da');
        }
        // this.setCustomValidity(message)
    });

    function onHideModal(e) {
        var $modal = $(e.target);
        $modal.find('.first-step').removeClass('d-none');
        $modal.find('.second-step').addClass('d-none');
        $('.js_confirm-key').val('');
        $('.js_success-feedback', $modal).removeAttr('style').empty();
    }
    $('#security-code-phoneOremail').on('hide.bs.modal', onHideModal);
    $('#security-code').on('hide.bs.modal', onHideModal);

    // "PHONE_OR_EMAIL" modal
    $('.js_get-security-code-phoneOremail').on('click', function (e) {
        var $modal = $('#security-code-phoneOremail');
        var typeSelected = $(e.target).closest($modal).find('.js_btn-type-switcher input:checked');
        var checkpointTypeActive = typeSelected.val();
        var sendTo = checkpointTypeActive === 'PHONE' ? 'телефон' : 'email';
        var modalConfig = $modal.data()['bs.modal']._config;
        var username = modalConfig.username;
        _user2.default.getSecurityKey(username, checkpointTypeActive).then(function (result) {
            // при нажатии "Запросить код подтверждение" - отпарляется реквест "старт чекпоинт" появляеться инпут и кнопка других типах
            // get selected button

            // переключатель(серый) и кнопка "Запросить код подтверждение" исчезают
            console.log('SecurityKey received:', result.status.state);
            if (result.status.state === 'ok') {
                $('.first-step', $modal).addClass('d-none');
                $('.second-step', $modal).removeClass('d-none');
                $('.js_success-feedback', $modal).empty().text('\u041A\u043B\u044E\u0447 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F \u0431\u044B\u043B \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D \u0412\u0430\u043C \u043D\u0430 ' + sendTo);
            }
        });
    });
}

function fillList($list, dataArray) {
    var items = dataArray;
    var cList = $list;
    var defaultAvatarSrc = 'https://i.imgur.com/jNNT4LE.png';
    var insertItem = function insertItem(data, text, cssCls) {
        var liTpl = '' + (data ? '<li class="list-inline-item ' + cssCls + '"><span class="figure">' + data + '</span><span>' + text + '</span></li>' : '<li class="list-inline-item ' + cssCls + '"><span class="figure">0</span><span>' + text + '</span></li>');
        return liTpl;
    };
    var stats = function stats(info) {
        var tpl = '<div class="col">\n            <ul class="list-inline text-center counts-list">\n            ' + (info ? insertItem(info['media_count'], 'Публикации', 'media-count') + '\n                ' + insertItem(info['follower_count'], 'Подписчики', 'follower-count') + '\n                ' + insertItem(info['following_count'], 'Подписки', 'following-count') : insertItem(false, 'Публикации', 'media-count') + '\n                ' + insertItem(false, 'Подписчики', 'follower-count') + '\n                ' + insertItem(false, 'Подписки', 'following-count')) + '\n            </ul>\n        </div>';
        return tpl;
    };
    cList.empty().addClass('border-light-color');
    items.forEach(function (item) {
        var info = item.info;
        var checkpoint = item.checkpoint || item;

        if (!info) {
            $('<li class="media py-3" data-username="' + item.username + '">\n                <img class="ml-3 rounded" alt="default avatar" src="' + defaultAvatarSrc + '">\n                <div class="media-body d-flex">\n                    <div class="col user-info">\n                        ' + (item.username ? '<h4 class="mt-0 mb-1 name">' + item.username + '</h4>' : '') + '\n                    </div>\n                    <div class="col user-checkpoint">\n                        ' + (checkpoint.status === 'TRIGGERED' ? '<button class="btn btn-outline-secondary js_pass-checkpoint-btn d-block mx-auto" \n                            data-checkpoint-type="' + (checkpoint.type || 'EMAIL') + '"\n                            data-username="' + (item.username || '') + '"\n                            data-toggle="modal" data-target="#security-code">\n                            <i class="fas fa-key"></i>\u041F\u0440\u043E\u0439\u0442\u0438 \u0447\u0435\u043A\u043F\u043E\u0438\u043D\u0442</button>' : '(todo)checkpoint status - ' + checkpoint.status) + '\n                    </div>\n                    ' + stats() + '\n                </div>\n            </li>').appendTo(cList);
        } else {
            $('<li class="media py-3" data-username="' + item.username + '">\n            ' + (info['profile_pic_url'] ? '<img class="ml-3 rounded" alt="User photo" src="' + info['profile_pic_url'] + '">' : '<img class="ml-3 rounded" alt="default avatar" src="' + defaultAvatarSrc + '">') + '\n            <div class="media-body d-flex">\n                <div class="col user-info">\n                    ' + (item.username ? '<p class="mt-0 mb-1 name lead">' + item.username + '</p>' : '') + '\n                    ' + (info.name ? '<h4 class="mt-0 mb-1">' + info.name + '</h4>' : '') + '\n                    ' + (info.name ? '' : '' /* ${(info.email) ? `<p class="mt-0 mb-1">${info.email}</p>` : ''}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ${(info.phone) ? `<p class="mt-0 mb-1">${info.phone}</p>` : ''} */) + '\n                    \n                </div>\n                <div class="col user-checkpoint">                        \n                    ' + (checkpoint.status === 'TRIGGERED' ? '<button class="btn btn-outline-secondary js_pass-checkpoint-btn d-block mx-auto" \n                            data-checkpoint-type="' + (checkpoint.type || 'EMAIL') + '"\n                            data-username="' + (item.username || '') + '" \n                            data-toggle="modal" data-target="#security-code">\n                        <i class="fas fa-key"></i>\u041F\u0440\u043E\u0439\u0442\u0438 \u0447\u0435\u043A\u043F\u043E\u0438\u043D\u0442</button>' : '') + '\n                </div>\n                ' + stats(info) + '\n            </div>\n        </li>').appendTo(cList);
        }
    });
    window.PubSub.publish(_consts.CONST.events.instagramAccouns.INSTAGRAM_ACCOUNS_RENDERED, { name: name, dataArray: dataArray });
    console.log('INSTAGRAM_ACCOUNS_RENDERED');
}

/**
 * Init header
 */
function init() {
    var $msgList = $('.accounts-list');
    // check we are in profile page
    if (!$msgList.length) {
        return;
    }
    var token = _user2.default.getToken(); // upd to: User.getToken()
    var metadata = _user2.default.getMetadata(token);
    var resendRequest = function resendRequest() {
        return _user2.default.getMetadata(token);
    };
    var isSendReqOnce = false;
    var checkResponse = function checkResponse(result, isResendRequest) {
        if (!result.status.state === 'ok' || !result.data || !$msgList.length || isResendRequest) {
            // проверям один раз наличие result.data.accounts.info
            $msgList.empty();
            $('<li class="media">\n                <div class="media-body">\n                    <h3 class="mt-0 mb-3">\u041D\u0438 \u043E\u0434\u043D\u043E\u0433\u043E \u0410\u043A\u043A\u0430\u0443\u043D\u0442\u0430 \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E</h3>\n                </div>\n            </li>').appendTo($msgList);
            setTimeout(function () {
                resendRequest().then(function (result) {
                    checkResponse(result, false);
                });
                console.log('Request resend');
            }, 3500);
            return;
        }
        // вывод результатов (data.accounts.info)
        $('.profile-user .spinner-box').addClass('d-none');
        fillList($msgList, result.data.accounts);
        addListHandler();
    };

    // check we are in profile page
    if (!$msgList.length) {
        return;
    }

    addOnLoadHandlers();

    // может инфо отсутсвовать - сделать еще раз запрос через 3 сек.

    metadata.then(function (result) {
        // проверям один раз наличие result.data.accounts.info
        var isResendRequest = false;
        if (result.data && result.data.accounts && !isSendReqOnce) {
            result.data.accounts.forEach(function (item) {
                if (!item.info) {
                    isResendRequest = true;
                    isSendReqOnce = true;
                    return;
                }
            });
        }
        checkResponse(result, isResendRequest);
    }).catch(function (err) {
        setTimeout(function () {
            _view2.default.showInfoMessage($('.error-msg'), err.status || '', 'Не получилось загрузить доступные Instagram аккаунты');
        }, 3000);
        $('.spinner-box').addClass('d-none');
    });
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LoginForm = LoginForm;

var _user = __webpack_require__(2);

var _user2 = _interopRequireDefault(_user);

var _pubsubJs = __webpack_require__(5);

var _pubsubJs2 = _interopRequireDefault(_pubsubJs);

var _cookie = __webpack_require__(1);

var _cookie2 = _interopRequireDefault(_cookie);

var _view = __webpack_require__(3);

var _view2 = _interopRequireDefault(_view);

var _consts = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// window.$ = $;

// import Validator from '../../common/js-services/form-validator';
function LoginForm(selectorCss) {
    var _this = this;

    var _formId = selectorCss._formId,
        _buttonSubmitId = selectorCss._buttonSubmitId,
        _showLoginBoxBtnId = selectorCss._showLoginBoxBtnId,
        _loginBox = selectorCss._loginBox;

    var user = _user2.default,
        // service
    $form = $(_formId),
        $email = $form.find('input[name="mail"]'),
        $textAreaDescription = $('#description');
    // const openedClass = 'd-block';
    // const closeClass = 'd-none';

    var userLoginHeader = function userLoginHeader(_formData) {
        var cbError = function cbError(result) {
            $(_loginBox).append('<p>result.status.message</p>');
        };

        return user.login(_formData, cbError).then(function (result) {
            if (result && result.data && result.data.token) {
                // save the item
                _cookie2.default.set(_consts.CONST.cookieStorage.token, result.data.token);
                $('.nav-link.js_logOut').parent().show();
                // console.log('request succeeded with JSON response', result);
                _view2.default.showInfoMessage($textAreaDescription, result.status.state, result.status.message || 'Login succsess');
            } else if (result.status) {
                console.log(result);
                _view2.default.showInfoMessage(_this.$textAreaDescription, '<p>status: ' + result.status.state + '</p><p> message: ' + result.status.message + '</p>');
            } else {
                console.log(result);
            }
        }).then(function (result) {
            if (result && result.status) {
                console.log(result);
                _view2.default.showInfoMessage($textAreaDescription, result.status.state, result.status.message || 'Login error');
            }
        });
    };

    var submitForm = function submitForm(formDataObj) {
        var email = $email.val(),
            password = $form.find('input[name="pass"]').val(),
            _formData = formDataObj || { email: email, password: password };

        if (selectorCss.isLoginInstagram) {
            // todo: delete me
            // addInstagramAccount({username: $form.find('input[name="username"]').val(), password});
        } else {
            $email.val($email.val().toLocaleLowerCase());
            userLoginHeader(_formData).then(function () {
                _pubsubJs2.default.publish(_consts.CONST.events.USER_LOGGED, 'login');
            });
        }
    };

    var logOut = function logOut() {
        _cookie2.default.remove(_consts.CONST.cookieStorage.token);
        _pubsubJs2.default.publish(_consts.CONST.events.USER_LOGOUT);
    };

    var bindEvents = function bindEvents() {
        var $showLoginBoxBtnId = $(_showLoginBoxBtnId);
        var $loginBox = $(_loginBox);
        var openedClass = 'd-block';
        var closeClass = 'd-none';

        $showLoginBoxBtnId.on('click', function () {
            if (!selectorCss.isLoginInstagram) {
                $loginBox.css({ 'top': 0, 'right': 0 }).addClass('bg-light border mt-5 mx-auto position-absolute');
            }
            $loginBox.addClass(openedClass).removeClass(closeClass);
        });

        var $buttonSubmit = $(_buttonSubmitId),
            cssValidationClass = 'form-validation';

        $buttonSubmit.on('click', function (e) {
            e.preventDefault();
            var form = $form.get(0);
            // const validator = new Validator($form);
            // console.log(validator.validate());
            if (form.checkValidity() && _view2.default.isEmail($email.val())) {
                submitForm();
            } else {
                // Highlight errors
                if (form.reportValidity) {
                    form.reportValidity();
                }
                $form.addClass(cssValidationClass);
            }
        });

        $('.nav-link.js_logOut').on('click', function (e) {
            e.preventDefault();
            logOut();
            $(e.target).parent().hide();
            _view2.default.showInfoMessage($textAreaDescription, 'Logged out');
        });

        _pubsubJs2.default.subscribe(_consts.CONST.events.USER_LOGOUT, function (msg) {
            $(_consts.CONST.uiSelectors.headerNavLoginBtn).addClass(openedClass).removeClass(closeClass); // .show();
            $(_consts.CONST.uiSelectors.headerRegBtn).addClass(openedClass).removeClass(closeClass);
            $('.nav-link.js_logOut').addClass(closeClass).removeClass(openedClass); // .hide();
            var selectorLoginState = '.js_message_logged--text';
            $(selectorLoginState).text('Вы вышли из аккаунта');
        });

        $(document).on('click', function (event) {
            var isLoginBtnClick = $(event.target).closest('nav.navbar').find($loginBox).length;
            var isAddInstagramBtnClicked = $(event.target).attr('id') === _consts.CONST.uiSelectors.instagram.addAccountBtnId;

            if (!isLoginBtnClick && $loginBox.hasClass(openedClass) && !isAddInstagramBtnClicked) {
                $loginBox.addClass(closeClass).removeClass(openedClass);
            }
        });
    };

    function init() {
        bindEvents();
    }

    return {
        init: init
    };
} // https://www.npmjs.com/package/pubsub-js
/* eslint-disable sort-vars */
// import $ from 'jquery';

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.init = init;

var _meteorEmoji = __webpack_require__(29);

var _meteorEmoji2 = _interopRequireDefault(_meteorEmoji);

var _user = __webpack_require__(2);

var _user2 = _interopRequireDefault(_user);

var _apiUserDirect = __webpack_require__(24);

var _apiUserDirect2 = _interopRequireDefault(_apiUserDirect);

var _view = __webpack_require__(3);

var _view2 = _interopRequireDefault(_view);

var _spinner = __webpack_require__(25);

var _spinner2 = _interopRequireDefault(_spinner);

var _consts = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var token = _user2.default.getToken();
// import PubSub from 'pubsub-js';// https://www.npmjs.com/package/pubsub-js

// import qq from 'fine-uploader'; //todo: fine-uploade

var $msgList = $('.messages-list');
var updateInterval = '';
var intervalId = false;

function isInMessagePage() {
    var $msgList = $('.messages-list');
    var $userList = $('.messages-user-list');
    return !!$msgList.length && !!$userList.length;
}
$(document).ready(function () {
    if (!isInMessagePage()) {
        return;
    }
    // eslint-disable-next-line no-unused-vars
    var m = new _meteorEmoji2.default();
    var $picker = $('textarea[data-meteor-emoji="true"] ~ div');
    var style = $picker.attr('style');
    var styleNew = style.replace('top: 30px;', 'top: -210px;');
    $picker.attr('style', styleNew);

    /*
    //todo: fine-uploade
    // eslint-disable-next-line no-unused-vars
    const restrictedUploader = new qq.FineUploader({
        element: document.getElementById('fine-uploader-validation'),
        template: 'qq-template-validation',
        request: {
            endpoint: '/server/uploads'
        },
        thumbnails: {
            placeholders: {
                waitingPath: 'https://fineuploader.com/source/placeholders/waiting-generic.png', // '/source/placeholders/waiting-generic.png',
                notAvailablePath: 'https://fineuploader.com/server/waiting-generic.png' // '/source/placeholders/not_available-generic.png'
            }
        },
        validation: {
            allowedExtensions: ['jpeg', 'jpg', 'txt'],
            itemLimit: 3,
            sizeLimit: 500 * 1024
        }
    });*/
});

// messages-list
function fillList($list, dataArray, isAppentPrevMsg) {
    var items = dataArray;
    var cList = $list;
    // const defaultAvatarSrc = 'https://i.imgur.com/jNNT4LE.png';
    var insertMsg = function insertMsg(value, type, cssCls) {
        var str = '';
        switch (type.toLowerCase()) {
            case 'photo':
                str = '<div class="chat-img">\n                    <img src="' + value + '" alt="Content Image" class="content-image">\n                </div>';
                break;
            case 'link':
                str = '<div class="chat-img">\n                <a target="_blank" href="' + value + '">' + value + '</a>';
                break;
            default:
                str = '<div class="chat-text" >' + value + '</div>';
        }
        return str;
    };
    var addToList = function addToList(isAppentPrevMsg, $li, $list) {
        if (isAppentPrevMsg) {
            $li.insertBefore($list.find('li:first-child'));
        } else {
            $li.appendTo($list);
        }
    };
    if (isAppentPrevMsg) {
        console.log('isAppentPrevMsg to', cList);
    } else {
        cList.empty().addClass('border-light-color');
    }
    items.forEach(function (item) {
        var message = item;
        // const checkpoint = item.checkpoint || item;

        if (message.side.toLowerCase() === 'left') {
            var $li = $('<li class="chat-item chat-item-left col flex-column-reverse" value="' + message.value + '">\n                <div class="d-flex">\n                ' + (message['profile_pic_url'] ? '<div class="chat-img-box"> \n                            <img src="' + message['profile_pic_url'] + '" alt="User Avatar" class="">\n                        </div>' : '') + '\n                <div>\n                    <p class="chat-username text-muted">' + message.username + '</p>\n                    ' + insertMsg(message.value, message.type) + '\n                </div>\n                    <small class="chat-time-text">' + _view2.default.getFormattedDateUtil(message.timestamp) + '</small>\n                </div>\n            </li>');
            addToList(isAppentPrevMsg, $li, cList);
        } else {
            var _$li = $('<li class="chat-item chat-item-right col flex-column-reverse" value="' + message.value + '">\n                <div class="d-flex justify-content-end">\n                    ' + insertMsg(message.value, message.type) + '\n                    <small class="pull-right chat-time-text">' + _view2.default.getFormattedDateUtil(message.timestamp) + '</small>\n                    </div>\n            </li>');
            addToList(isAppentPrevMsg, _$li, cList);
        }
    });
}
function addPagination($wrapper, pagination) {
    var cursor = pagination.prev_cursor;
    var $button = $('<button class="btn btn-secondary load-more d-flex position-absolute" style="top: -42px;"\n        data-cursor="' + cursor + '">\u0435\u0449\u0435 \u0434\u0430\u0432\u0430\u0439!</button>');

    if (!$wrapper.closest('.messages-list-box').find('.load-more').length) {
        $button.insertBefore($wrapper).on('click', function (e) {
            var userData = $('.messages-list').data('conversation');
            var username = userData.username,
                conversationId = userData.conversationId;

            _spinner2.default.startButtonSpinner($button);
            _apiUserDirect2.default.getMetadataDetailConversation(token, { username: username, conversationId: conversationId, cursor: cursor }).then(function (result) {
                console.log('receive msg', result);
                _spinner2.default.stopButtonSpinner($button);
                fillList($msgList, result.data.meta.messages, 'appentPrevMsg');
            });
        });
    }
}
// messages-user-list
function fillUserList($list, dataArray) {
    var items = dataArray.meta;
    var cList = $list;
    var conversationDetail = function conversationDetail(items) {
        var tpl = '';
        items.forEach(function (item) {
            if (items.length > 1) {
                tpl += '<img src="' + item['profile_pic_url'] + '" class="media-photo mr-1 media-photo--group" style="width: 24px;">';
            } else {
                tpl += '<img src="' + item['profile_pic_url'] + '" class="media-photo mr-1" style="width: 24px;">\n                <div class="media-body">\n                <h5 class="title">\n                    ' + item.username + '\n                </h5>';
            }
        });
        if (items.length > 1) {
            tpl += '<h5 class="title">Груповой чат</h5>';
        }
        return tpl;
    };
    var addConversations = function addConversations(conversations) {
        var tpl = '';
        conversations.forEach(function (item) {
            tpl += '<div class="media p-1" data-conversation-id="' + item.id + '">\n                    ' + conversationDetail(item.to) + '\n                    ' + (item['last_message'] && parseInt(item['last_message'].length, 10) > 0 ? '<p class="summary ' + (item['is_unread'] ? 'font-weight-bold' : 'text-muted') + '">' + item['last_message'] + '</p>\n                        ' + (item['is_unread'] ? '<span class="summary-dot"></span>' : '') : '') + '\n                    </div>\n            </div>';
        });
        return tpl;
    };
    cList.empty().addClass('border-light-color');
    // todo: fix hard-code  img src="https://i.imgur.com/jNNT4LE.png"
    items.forEach(function (item, idx) {
        $('<li class="list-group-item" data-toggle="collapse" data-target="#collapse-' + idx + '" data-username="' + item.username + '" \n                aria-expanded="true" aria-controls="collapse-' + idx + '">\n            <div class="media" id="heading-' + idx + '">\n                <a href="#" class="mr-3">\n                    <img src="https://i.imgur.com/jNNT4LE.png"\n                    class="media-photo">\n                </a>\n                ' + (item['unread_conversations'] > 0 ? '<span class="badge badge-secondary position-absolute p-2">' + item['unread_conversations'] + '</span>' : '') + '\n                <div class="media-body">\n                    <h4 class="title">\n                        ' + item.username + '\n                    </h4>\n                </div>\n            </div>\n            <div id="collapse-' + idx + '" class="collapse" aria-labelledby="heading-' + idx + '" data-parent="#accordion">\n                ' + addConversations(item.conversations, idx) + '\n            </div>\n            </li>').appendTo(cList);
    });
}

function getAndFillUserList(isActiveFirst) {
    var $userList = $('.messages-user-list');
    var metadata = _apiUserDirect2.default.getMetadata(token);
    var prevActiveDialogId = '';
    if (!isActiveFirst) {
        prevActiveDialogId = $userList.find('li .collapse.show').attr('id');
    }
    metadata.then(function (result) {
        if (!result.data) {
            return;
        }
        result.data.meta.sort(function (a, b) {
            return a['username'].localeCompare(b['username']);
        });
        fillUserList($userList, result.data);
        if (result.data.settings && result.data.settings.invoke_in_millis) {
            updateInterval = result.data.settings.invoke_in_millis;
        }
        if (isActiveFirst) {
            $userList.find('li:first-child .collapse').addClass('show');
        } else {
            // console.log('ttt', prevActiveDialogId);
            $('#' + prevActiveDialogId).addClass('show');
        }
    });
}

function getAndFillConversation(username, conversationId, isScrollDown) {
    _apiUserDirect2.default.getMetadataDetailConversation(token, { username: username, conversationId: conversationId }).then(function (result) {
        fillList($msgList, result.data.meta.messages);
        _spinner2.default.remove();
        $('.js_send-message-box').removeClass('d-none');
        $('.messages-list').attr('data-conversation', JSON.stringify({ username: username, conversationId: conversationId }));

        if (isScrollDown) {
            $msgList.animate({
                scrollTop: $msgList[0].scrollHeight - $msgList[0].clientHeight
            }, 1000);
            if (result.data.meta.pagination) {
                addPagination($msgList, result.data.meta.pagination);
            } else {
                $('.messages-list-box').find('.load-more').remove();
            }
        }
    });
}

function addHandlers() {
    var conversationId = '';

    $('#sendMessageButton').on('click', function (e) {
        var $textArea = $('#sendMessageTextArea');
        var value = $textArea.val();
        var userData = $('.messages-list').data('conversation');
        var username = userData.username,
            conversationId = userData.conversationId;

        _spinner2.default.add($(e.target), 'spinner-box--sendMsg');
        _apiUserDirect2.default.postMetadataDetailConversation(token, { username: username, conversationId: conversationId, value: value }).then(function (result) {
            if (result && result.status && result.status.state === 'ok') {
                getAndFillConversation(username, conversationId);
                $textArea.val('');
                _spinner2.default.remove();
                window.PubSub.publish(_consts.CONST.events.messages.RECIEVE_NEW_MESSAGE, { username: username, conversationId: conversationId, value: value, result: result });
            }
        });
    });
    $(document).on('click', '.list-group-item .collapse', function (e) {
        e.stopPropagation();
        var username = $(e.target).closest('.list-group-item').data('username');
        conversationId = $(e.target).closest('.media').data('conversation-id');
        _spinner2.default.add($('#mainChatPart'), 'my-5 py-5');
        getAndFillConversation(username, conversationId, 'isScrollDown');
        updateInterval = updateInterval > 6000 ? updateInterval : 15000;
        // resend request
        if (intervalId) {
            clearInterval(intervalId);
        }
        intervalId = setInterval(function () {
            conversationId = $(e.target).closest('.media').data('conversation-id');
            console.log(intervalId, conversationId);
            getAndFillConversation(username, conversationId);
            getAndFillUserList();
        }, updateInterval);
    });

    window.PubSub.subscribe(_consts.CONST.events.messages.RECIEVE_NEW_MESSAGE, function (eventName, data) {
        var username = data.username,
            conversationId = data.conversationId,
            value = data.value,
            resultFromServer = data.resultFromServer;

        var $dialog = $('.messages-user-list .list-group-item[data-username="' + username + '"] div[data-conversation-id="' + conversationId + '"]');
        console.log('set val from text-area', value);
        console.log('resultFromServer: ', resultFromServer);
        $dialog.find('.summary').text(value);

        // metadata.then((result) => {
        //     fillUserList($userList, result.data);
        //     if (result.data.settings && result.data.settings.invoke_in_millis) {
        //         updateInterval = result.data.settings.invoke_in_millis;
        //     }
        // });
    });
}

function init() {
    // check we are in correct page (messages)
    if (!isInMessagePage()) {
        return;
    }

    getAndFillUserList('setActiveFirst');
    addHandlers();
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // import $ from 'jquery';
// https://www.npmjs.com/package/pubsub-js


var _pubsubJs = __webpack_require__(5);

var _pubsubJs2 = _interopRequireDefault(_pubsubJs);

var _user = __webpack_require__(2);

var _user2 = _interopRequireDefault(_user);

var _cookie = __webpack_require__(1);

var _cookie2 = _interopRequireDefault(_cookie);

var _consts = __webpack_require__(0);

var _view = __webpack_require__(3);

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var selectorCls = {
    form: '.auth.register .form-signin',
    submitBtn: '[type="submit"]'
};

var RegisterForm = function () {
    function RegisterForm() {
        _classCallCheck(this, RegisterForm);

        this.user = _user2.default;
        this.$form = $(selectorCls.form);
        this.$email = this.$form.find('input[name="mail"]');
        this.$textAreaDescription = $('#description');
        this.formData = { 'email': 'test1_email@m.ru', 'password': 'password' };
    }

    _createClass(RegisterForm, [{
        key: 'init',
        value: function init() {
            if ($('.auth.register').length) {
                this.bindEvents();
            }
        }
    }, {
        key: 'submitForm',
        value: function submitForm(formDataObj) {
            var _this = this;

            var email = this.$email.val();
            var $password = this.$form.find('input[name="pass"]'),
                $passwordConfirm = this.$form.find('input[name="pass-confirm"]'),
                password = this.$form.find('input[name="pass"]').val(),
                passwordConfirm = this.$form.find('input[name="pass-confirm"]').val();

            if (passwordConfirm !== password) {
                $password.addClass('input-error');
                $passwordConfirm.addClass('input-error');
                return;
            }
            this.$email.val(this.$email.val().toLocaleLowerCase());
            this.formData = formDataObj || { email: email, password: password };

            this.user.register(this.formData).then(function (result) {
                if (result.data && result.data.token) {

                    // save the item
                    _cookie2.default.set(_consts.CONST.cookieStorage.emailConfirmed, 'false');

                    _cookie2.default.set(_consts.CONST.cookieStorage.token, result.data.token);
                    // console.log('request succeeded with JSON response', result);
                    _pubsubJs2.default.publish(_consts.CONST.events.USER_LOGGED);
                    _view2.default.showInfoMessage(_this.$textAreaDescription, result.status.state, result.status.message || 'Register and Login succsess');
                } else {
                    _view2.default.showInfoMessage(_this.$textAreaDescription, result.status.state, result.status.message || 'no result.data found');
                }
            }).then(function (result) {
                if (result && result.status) {
                    console.log(result);
                    _view2.default.showInfoMessage(_this.$textAreaDescription, result.status.state);
                    $('.login-box').show();
                }
            }).catch(function (error) {
                console.log('request failed', error);
                _view2.default.showInfoMessage(_this.$textAreaDescription, error.message);
                console.log('do something');
            });
        }
    }, {
        key: 'bindEvents',
        value: function bindEvents() {
            var _this2 = this;

            var registerBox = _consts.CONST.uiSelectors.headerRegBox; // 'nav .register-box';
            var openedClass = 'd-block';
            var closeClass = 'd-none';
            var $btn = $(selectorCls.submitBtn),
                cssValidationClass = 'form-validation';

            $btn.on('click', function (e) {
                var form = _this2.$form.get(0);
                e.preventDefault();

                if (!$btn.is(':disabled')) {
                    if (form.checkValidity()) {
                        // $btn.attr('disabled', true);
                        _this2.submitForm();
                    } else {
                        // Highlight errors
                        if (form.reportValidity) {
                            form.reportValidity();
                        }
                        _this2.$form.addClass(cssValidationClass);
                    }
                }
            });

            $(document).on('click', function (event) {
                var isRegBtnClick = $(event.target).closest('nav.navbar').find('.register-box').length;

                if (!isRegBtnClick && $(registerBox).hasClass(openedClass)) {
                    $(registerBox).addClass(closeClass).removeClass(openedClass);
                }
            });
        }
    }]);

    return RegisterForm;
}();

exports.default = RegisterForm;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // import $ from 'jquery';


var _consts = __webpack_require__(0);

var _network = __webpack_require__(7);

var _network2 = _interopRequireDefault(_network);

var _cookie = __webpack_require__(1);

var _cookie2 = _interopRequireDefault(_cookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserConversation = function () {
    function UserConversation() {
        _classCallCheck(this, UserConversation);

        this.network = new _network2.default();
        this.cookieStorage = _cookie2.default;
        this.settingPost = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };
    }

    _createClass(UserConversation, [{
        key: 'isLoggedIn',
        value: function isLoggedIn() {
            return !!this.getToken();
        }
    }, {
        key: 'isEmailConfirmed',
        value: function isEmailConfirmed() {
            return this.cookieStorage.get(_consts.CONST.cookieStorage.emailConfirmed) === 'confirmed';
        }
    }, {
        key: 'getToken',
        value: function getToken() {
            var cookieToken = this.cookieStorage.get(_consts.CONST.cookieStorage.token);
            return cookieToken;
        }
    }, {
        key: 'getMetadata',
        value: function getMetadata(token, cbError) {
            return this.network.sendRequest('' + _consts.CONST.getPath('instagramDirect_getMetaData'), { headers: { token: token } }, cbError);
        }
    }, {
        key: 'getMetadataDetailConversation',
        value: function getMetadataDetailConversation(token, details, cbError) {
            var cursor = details.cursor ? '?cursor=' + details.cursor : '';
            return this.network.sendRequest(_consts.CONST.getPath('instagramDirect_getMetaData') + '/' + details.username + '/' + details.conversationId + cursor, { headers: { token: token } }, cbError);
        }
    }, {
        key: 'postMetadataDetailConversation',
        value: function postMetadataDetailConversation(token, details, cbError) {
            var setting = _extends({}, this.settingPost, {
                body: JSON.stringify({ 'value': details.value }),
                headers: _extends({}, this.settingPost.headers, {
                    'token': this.getToken()
                })
            });
            return this.network.sendRequest(_consts.CONST.getPath('instagramDirect_postMessage') + '/' + details.username + '/' + details.conversationId + '/text', setting, cbError);
        }
    }]);

    return UserConversation;
}();

var userInstance = null;

if (!userInstance) {
    userInstance = new UserConversation();
}

exports.default = userInstance;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import $ from 'jquery';
// import {CONST} from './consts';
// import Network from './network';
// import CookieStorage from './cookie';
// import PubSub from 'pubsub-js'; // https://www.npmjs.com/package/pubsub-js

// const SPINNER_BASE_TEMPALATE = 'js/ui/tpl/spinner.hbs';
var classes = {
    inline: 'global-inline-spinner',
    overlay: 'global-overlay-spinner',
    fixed: 'global-fixed-spinner',
    button: 'button--load'
};
// const handlebarsTpl = function (name, data, $target) {
//     // var html = this.getTemplate(name)(data);
//     var html = Handlebars.compile(template);
//
//     if ($target) {
//         //for preventing xss
//         $target[0].innerHTML = html;
//     }
//
//     return html;
// };
// const handlebars = this.getService('core.templating.handlebars');

var Spinner = function () {
    function Spinner(_cfg) {
        _classCallCheck(this, Spinner);

        this.startButtonSpinner = function ($el, newCls) {
            $el.addClass(classes.button);
            $el.prepend('<div class="spinner-box spinner-box--button justify-content-center position-relative p-0 m-0 bg-transparent ' + newCls + '">\n            <div class="spin-animation">\n                <svg aria-hidden="true" data-prefix="far" data-icon="sync-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" \n                    class="fa-fw">\n                    <path fill="currentColor" d="M483.515 28.485L431.35 80.65C386.475 35.767 324.485 8 256 8 123.228 8 14.824 112.338 8.31 243.493 7.971 250.311 13.475 256 20.301 256h28.045c6.353 0 11.613-4.952 11.973-11.294C66.161 141.649 151.453 60 256 60c54.163 0 103.157 21.923 138.614 57.386l-54.128 54.129c-7.56 7.56-2.206 20.485 8.485 20.485H492c6.627 0 12-5.373 12-12V36.971c0-10.691-12.926-16.045-20.485-8.486zM491.699 256h-28.045c-6.353 0-11.613 4.952-11.973 11.294C445.839 370.351 360.547 452 256 452c-54.163 0-103.157-21.923-138.614-57.386l54.128-54.129c7.56-7.56 2.206-20.485-8.485-20.485H20c-6.627 0-12 5.373-12 12v143.029c0 10.691 12.926 16.045 20.485 8.485L80.65 431.35C125.525 476.233 187.516 504 256 504c132.773 0 241.176-104.338 247.69-235.493.339-6.818-5.165-12.507-11.991-12.507z" class=""></path></svg>\n            </div>\n        </div>');
        };

        this.stopButtonSpinner = function ($el) {
            $el.removeClass(classes.button);
        };

        this.cfg = _cfg || {};
        // this.$defaultContainer = $('body');
        $.extend(classes, this.cfg.classes);
        // this._mediator.subscribe(CONST.events.STOP_FIXED_SPINNER, this.stopFixedSpinner.bind(this));
    }
    // _mediator = PubSub;

    _createClass(Spinner, [{
        key: 'start',
        value: function start($el, prewCls) {
            // if (addOrRemove) {
            //     $('#foo').addClass(className);
            // }
            // else {
            //     $('#foo').removeClass(className);
            // }
            $el.find('i').toggleClass(prewCls).addClass('fa-spin fa-spinner');
        }
    }, {
        key: 'stop',
        value: function stop($el, newCls) {
            $el.find('i').toggleClass(newCls).removeClass('fa-spin fa-spinner');
        }
    }, {
        key: 'add',
        value: function add($el, newCls) {
            this.$el = $el;
            $el.prepend('<div class="spinner-box justify-content-center ' + newCls + '">\n            <div class="spin-animation">\n                <svg aria-hidden="true" data-prefix="far" data-icon="sync-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-sync-alt fa-w-16 fa-fw fa-2x"><path fill="currentColor" d="M483.515 28.485L431.35 80.65C386.475 35.767 324.485 8 256 8 123.228 8 14.824 112.338 8.31 243.493 7.971 250.311 13.475 256 20.301 256h28.045c6.353 0 11.613-4.952 11.973-11.294C66.161 141.649 151.453 60 256 60c54.163 0 103.157 21.923 138.614 57.386l-54.128 54.129c-7.56 7.56-2.206 20.485 8.485 20.485H492c6.627 0 12-5.373 12-12V36.971c0-10.691-12.926-16.045-20.485-8.486zM491.699 256h-28.045c-6.353 0-11.613 4.952-11.973 11.294C445.839 370.351 360.547 452 256 452c-54.163 0-103.157-21.923-138.614-57.386l54.128-54.129c7.56-7.56 2.206-20.485-8.485-20.485H20c-6.627 0-12 5.373-12 12v143.029c0 10.691 12.926 16.045 20.485 8.485L80.65 431.35C125.525 476.233 187.516 504 256 504c132.773 0 241.176-104.338 247.69-235.493.339-6.818-5.165-12.507-11.991-12.507z" class=""></path></svg>\n            </div>\n        </div>');
        }
    }, {
        key: 'remove',


        /**
         * Finds spinners
         * @param {string} type
         * @param {string} $container
         * @return {?jQuery} spinners
         */
        // _findSpinner = function (type, $container) {
        //     const selector = '.' + type;
        //     let $el = this.$defaultContainer;
        //     if ($container) {
        //         $el = $container;
        //     }
        //
        //     if ($el.find(selector).length > 0) {
        //         return $el.find(selector);
        //     }
        // };

        /**
         *
         * @param {string} $el
         */
        /*
        startContentSpinner = function ($el) {
            const html = handlebarsTpl(
                SPINNER_BASE_TEMPALATE, {
                    imgSrc: CTC.URLS.WAITING_IMAGE,
                    'class': classes.overlay
                });
            $el.prepend(html);
        };
         startInlineContentSpinner = function ($el) {
            const html = handlebarsTpl(
                SPINNER_BASE_TEMPALATE, {
                    imgSrc: CTC.URLS.WAITING_IMAGE,
                    'class': classes.inline
                });
            $el.prepend(html);
        };
        */

        /**
         * Starts global full page fixed spinner
         */
        /*
        startFixedSpinner = function () {
            const spinners = this._findSpinner(classes.fixed);
            if (!(CTC.isEdit() || CTC.isDesign()) && !spinners) {
                const html = handlebarsTpl(
                    SPINNER_BASE_TEMPALATE, {
                        imgSrc: CTC.URLS.WAITING_IMAGE,
                        'class': classes.fixed
                    });
                this.$defaultContainer.prepend(html);
            }
        };
        */

        /**
         * Stops spinners
         * @param {string} type
         * @param {string} $container
         */
        // _stopSpinner = function (type, $container) {
        //     const spinners = this._findSpinner(type, $container);
        //     if (spinners) {
        //         spinners.remove();
        //     }
        // };

        /**
         *
         * @param {string} $el
         */
        // stopContentSpinner = function ($el) {
        //     $el.find('.' + classes.overlay).remove();
        // };

        /**
         *
         * @param {string} $el
         */
        // stopInlineContentSpinner = function ($el) {
        //     $el.find('.' + classes.inline).remove();
        // };

        /**
         * Stops global full page fixed spinner
         */
        // stopFixedSpinner = function () {
        //     this._stopSpinner(classes.fixed);
        // };
        value: function remove() {
            this.$el.find('.spinner-box').remove();
        }

        /**
         * Adds spinner icon on button before the button text
         * @param {jQuery} $el
         */


        /**
         * Removes spinner icon from button
         * @param {jQuery} $el
         */

    }]);

    return Spinner;
}();

var spinnerInstance = null;

if (!spinnerInstance) {
    spinnerInstance = new Spinner();
}

exports.default = spinnerInstance;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LoginPage = LoginPage;

var _user = __webpack_require__(2);

var _user2 = _interopRequireDefault(_user);

var _pubsubJs = __webpack_require__(5);

var _pubsubJs2 = _interopRequireDefault(_pubsubJs);

var _cookie = __webpack_require__(1);

var _cookie2 = _interopRequireDefault(_cookie);

var _view = __webpack_require__(3);

var _view2 = _interopRequireDefault(_view);

var _consts = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// window.$ = $;

// import Validator from '../../common/js-services/form-validator';
function LoginPage(selectorCss) {
    var _this = this;

    var _formId = selectorCss._formId,
        _buttonSubmitId = selectorCss._buttonSubmitId,
        _loginBox = selectorCss._loginBox;

    var user = _user2.default,
        // service
    $form = $(_formId),
        $email = $form.find('input[name="mail"]'),
        $textAreaDescription = $('#description');
    // const openedClass = 'd-block';
    // const closeClass = 'd-none';

    var userLoginHeader = function userLoginHeader(_formData) {
        var cbError = function cbError(result) {
            $(_loginBox).append('<p>result.status.message</p>');
        };

        return user.login(_formData, cbError).then(function (result) {
            if (result && result.data && result.data.token) {
                // save the item
                _cookie2.default.set(_consts.CONST.cookieStorage.token, result.data.token);
                $('.nav-link.js_logOut').parent().show();
                // console.log('request succeeded with JSON response', result);
                _view2.default.showInfoMessage($textAreaDescription, result.status.state, result.status.message || 'Login succsess');
            } else if (result.status) {
                console.log(result);
                _view2.default.showInfoMessage(_this.$textAreaDescription, '<p>status: ' + result.status.state + '</p><p> message: ' + result.status.message + '</p>');
            } else {
                console.log(result);
            }
        }).then(function (result) {
            if (result && result.status) {
                console.log(result);
                _view2.default.showInfoMessage($textAreaDescription, result.status.state, result.status.message || 'Login error');
            }
        });
    };

    var submitForm = function submitForm(formDataObj) {
        var email = $email.val(),
            password = $form.find('input[name="pass"]').val(),
            _formData = formDataObj || { email: email, password: password };

        if (selectorCss.isLoginInstagram) {
            // todo: delete me
            // addInstagramAccount({username: $form.find('input[name="username"]').val(), password});
        } else {
            $email.val($email.val().toLocaleLowerCase());
            userLoginHeader(_formData).then(function () {
                // PubSub.publish(CONST.events.USER_LOGGED, 'login');
                window.location.href = '/instagram-integration/instagram-accounts.html';
            });
        }
    };

    var logOut = function logOut() {
        _cookie2.default.remove(_consts.CONST.cookieStorage.token);
        _pubsubJs2.default.publish(_consts.CONST.events.USER_LOGOUT);
    };

    var bindEvents = function bindEvents() {
        // const $showLoginBoxBtnId = $(_showLoginBoxBtnId);
        var $loginBox = $(_loginBox);
        var openedClass = 'd-block';
        var closeClass = 'd-none';

        // $showLoginBoxBtnId.on('click', () => {
        //     if (!selectorCss.isLoginInstagram) {
        //         $loginBox.css({'top': 0, 'right': 0})
        //             .addClass('bg-light border mt-5 mx-auto position-absolute');
        //     }
        //     $loginBox.addClass(openedClass).removeClass(closeClass);
        // });

        var $buttonSubmit = $(_buttonSubmitId),
            cssValidationClass = 'form-validation';

        $buttonSubmit.on('click', function (e) {
            e.preventDefault();
            var form = $form.get(0);
            // const validator = new Validator($form);
            console.log(_view2.default, _view2.default.isEmail($email.val()));

            if (form.checkValidity() && _view2.default.isEmail($email.val())) {
                submitForm();
            } else {
                // Highlight errors
                if (form.reportValidity) {
                    form.reportValidity();
                }
                $form.addClass(cssValidationClass);
            }
        });

        $('.nav-link.js_logOut').on('click', function (e) {
            e.preventDefault();
            logOut();
            $(e.target).parent().hide();
            _view2.default.showInfoMessage($textAreaDescription, 'Logged out');
        });

        _pubsubJs2.default.subscribe(_consts.CONST.events.USER_LOGOUT, function (msg) {
            $(_consts.CONST.uiSelectors.headerNavLoginBtn).addClass(openedClass).removeClass(closeClass); // .show();
            $(_consts.CONST.uiSelectors.headerRegBtn).addClass(openedClass).removeClass(closeClass);
            $('.nav-link.js_logOut').addClass(closeClass).removeClass(openedClass); // .hide();
            var selectorLoginState = '.js_message_logged--text';
            $(selectorLoginState).text('Вы вышли из аккаунта');
        });

        $(document).on('click', function (event) {
            var isLoginBtnClick = $(event.target).closest('nav.navbar').find($loginBox).length;
            var isAddInstagramBtnClicked = $(event.target).attr('id') === _consts.CONST.uiSelectors.instagram.addAccountBtnId;

            if (!isLoginBtnClick && $loginBox.hasClass(openedClass) && !isAddInstagramBtnClicked) {
                $loginBox.addClass(closeClass).removeClass(openedClass);
            }
        });
    };

    function init() {
        if ($('.auth.login').length) {
            bindEvents();
        }
    }

    return {
        init: init
    };
} // https://www.npmjs.com/package/pubsub-js
/* eslint-disable sort-vars */
// import $ from 'jquery';

/***/ }),
/* 27 */
/***/ (function(module, exports) {

if("undefined"==typeof brutusin)window.brutusin=new Object;else if("object"!=typeof brutusin)throw"brutusin global variable already exists";!function(){String.prototype.startsWith||(String.prototype.startsWith=function(e,t){return t=t||0,this.indexOf(e,t)===t}),String.prototype.endsWith||(String.prototype.endsWith=function(e,t){var r=this.toString();(void 0===t||t>r.length)&&(t=r.length),t-=e.length;var n=r.indexOf(e,t);return-1!==n&&n===t}),String.prototype.includes||(String.prototype.includes=function(){"use strict";return-1!==String.prototype.indexOf.apply(this,arguments)}),String.prototype.format||(String.prototype.format=function(){for(var e=this,t=0;t<arguments.length;t++){var r=new RegExp("\\{"+t+"\\}","gi");e=e.replace(r,arguments[t])}return e});var BrutusinForms=new Object;BrutusinForms.messages={validationError:"Validation error",required:"This field is **required**",invalidValue:"Invalid field value",addpropNameExistent:"This property is already present in the object",addpropNameRequired:"A name is required",minItems:"At least `{0}` items are required",maxItems:"At most `{0}` items are allowed",pattern:"Value does not match pattern: `{0}`",minLength:"Value must be **at least** `{0}` characters long",maxLength:"Value must be **at most** `{0}` characters long",multipleOf:"Value must be **multiple of** `{0}`",minimum:"Value must be **greater or equal than** `{0}`",exclusiveMinimum:"Value must be **greater than** `{0}`",maximum:"Value must be **lower or equal than** `{0}`",exclusiveMaximum:"Value must be **lower than** `{0}`",minProperties:"At least `{0}` properties are required",maxProperties:"At most `{0}` properties are allowed",uniqueItems:"Array items must be unique",addItem:"Add item","true":"True","false":"False"},BrutusinForms.decorators=new Array,BrutusinForms.addDecorator=function(e){BrutusinForms.decorators[BrutusinForms.decorators.length]=e},BrutusinForms.onResolutionStarted=function(e){},BrutusinForms.onResolutionFinished=function(e){},BrutusinForms.onValidationError=function(e,t){e.focus(),e.className.includes(" error")||(e.className+=" error"),alert(t)},BrutusinForms.onValidationSuccess=function(e){e.className=e.className.replace(" error","")},BrutusinForms.postRender=null,BrutusinForms.instances=new Array,BrutusinForms.create=function(schema){function validateDepencyMapIsAcyclic(){function e(t,r,n){if(r.hasOwnProperty(n))return void(error="Schema dependency graph has cycles");if(r[n]=null,!t.hasOwnProperty(n)){t[n]=null;var a=dependencyMap[n];if(a)for(var i=0;i<a.length;i++)e(t,r,a[i]);delete r[n]}}var t=new Object;for(var r in dependencyMap)t.hasOwnProperty(r)||e(t,new Object,r)}function appendChild(e,t,r){e.appendChild(t);for(var n=0;n<BrutusinForms.decorators.length;n++)BrutusinForms.decorators[n](t,r)}function createPseudoSchema(e){var t=new Object;for(var r in e)"items"!==r&&"properties"!==r&&"additionalProperties"!==r&&("pattern"===r?t[r]=new RegExp(e[r]):t[r]=e[r]);return t}function getDefinition(e){var t=e.split("/"),r=root;for(var n in t)"0"!==n&&(r=r[t[n]]);return r}function containsStr(e,t){for(var r=0;r<e.length;r++)if(e[r]==t)return!0;return!1}function renameRequiredPropeties(e){if(e)if(e.hasOwnProperty("oneOf"))for(var t in e.oneOf)renameRequiredPropeties(e.oneOf[t]);else if(e.hasOwnProperty("$ref")){var r=getDefinition(e.$ref);renameRequiredPropeties(r)}else if("object"===e.type){if(e.properties){e.hasOwnProperty("required")&&Array.isArray(e.required)&&(e.requiredProperties=e.required,delete e.required);for(var n in e.properties)renameRequiredPropeties(e.properties[n])}if(e.patternProperties)for(var a in e.patternProperties){var i=e.patternProperties[a];(i.hasOwnProperty("type")||i.hasOwnProperty("$ref")||i.hasOwnProperty("oneOf"))&&renameRequiredPropeties(e.patternProperties[a])}e.additionalProperties&&(e.additionalProperties.hasOwnProperty("type")||e.additionalProperties.hasOwnProperty("oneOf"))&&renameRequiredPropeties(e.additionalProperties)}else"array"===e.type&&renameRequiredPropeties(e.items)}function populateSchemaMap(e,t){var r=createPseudoSchema(t);if(r.$id=e,schemaMap[e]=r,t){if(t.hasOwnProperty("oneOf")){r.oneOf=new Array,r.type="oneOf";for(var n in t.oneOf){var a=e+"."+n;r.oneOf[n]=a,populateSchemaMap(a,t.oneOf[n])}}else if(t.hasOwnProperty("$ref")){var i=getDefinition(t.$ref);if(i){if(t.hasOwnProperty("title")||t.hasOwnProperty("description")){var o={};for(var s in i)o[s]=i[s];t.hasOwnProperty("title")&&(o.title=t.title),t.hasOwnProperty("description")&&(o.description=t.description),i=o}populateSchemaMap(e,i)}}else if("object"===t.type){if(t.properties){r.properties=new Object;for(var s in t.properties){var a=e+"."+s;r.properties[s]=a;var u=t.properties[s];t.requiredProperties&&(containsStr(t.requiredProperties,s)?u.required=!0:u.required=!1),populateSchemaMap(a,u)}}if(t.patternProperties){r.patternProperties=new Object;for(var l in t.patternProperties){var d=e+"["+l+"]";r.patternProperties[l]=d;var p=t.patternProperties[l];p.hasOwnProperty("type")||p.hasOwnProperty("$ref")||p.hasOwnProperty("oneOf")?populateSchemaMap(d,t.patternProperties[l]):populateSchemaMap(d,SCHEMA_ANY)}}if(t.additionalProperties){var a=e+"[*]";r.additionalProperties=a,t.additionalProperties.hasOwnProperty("type")||t.additionalProperties.hasOwnProperty("oneOf")?populateSchemaMap(a,t.additionalProperties):populateSchemaMap(a,SCHEMA_ANY)}}else"array"===t.type&&(r.items=e+"[#]",populateSchemaMap(r.items,t.items));if(t.hasOwnProperty("dependsOn")){null===t.dependsOn&&(t.dependsOn=["$"]);for(var c=new Array,n=0;n<t.dependsOn.length;n++)t.dependsOn[n]?t.dependsOn[n].startsWith("$")?c[n]=t.dependsOn[n]:e.endsWith("]")?c[n]=e+"."+t.dependsOn[n]:c[n]=e.substring(0,e.lastIndexOf("."))+"."+t.dependsOn[n]:c[n]="$";schemaMap[e].dependsOn=c;for(var n=0;n<c.length;n++){var m=dependencyMap[c[n]];m||(m=new Array,dependencyMap[c[n]]=m),m[m.length]=e}}}}function renderTitle(e,t,r){if(e&&t){var n=document.createElement("label");"any"!==r.type&&"object"!==r.type&&"array"!==r.type&&(n.htmlFor=getInputId());var a=document.createTextNode(t+":");if(appendChild(n,a,r),r.description&&(n.title=r.description),r.required){var i=document.createElement("sup");appendChild(i,document.createTextNode("*"),r),appendChild(n,i,r),n.className="required"}appendChild(e,n,r)}}function getInputId(){return formId+"_"+inputCounter}function validate(e){var t=!0;if(e.hasOwnProperty("getValidationError")){var r=e.getValidationError();r?(BrutusinForms.onValidationError(e,r),t=!1):BrutusinForms.onValidationSuccess(e)}if(e.childNodes)for(var n=0;n<e.childNodes.length;n++)validate(e.childNodes[n])||(t=!1);return t}function clear(e){if(e)for(;e.firstChild;)e.removeChild(e.firstChild)}function render(e,t,r,n,a,i){var o=getSchemaId(r),s=getSchema(o);renderInfoMap[o]=new Object,renderInfoMap[o].titleContainer=e,renderInfoMap[o].container=t,renderInfoMap[o].parentObject=n,renderInfoMap[o].propertyProvider=a,renderInfoMap[o].value=i,clear(e),clear(t);var u=renderers[s.type];if(u&&!s.dependsOn)s.title?renderTitle(e,s.title,s):a&&renderTitle(e,a.getValue(),s),i||(i="undefined"!=typeof initialValue&&null!==initialValue?getInitialValue(r):s["default"]),u(t,r,n,a,i);else if(s.$ref&&obj.schemaResolver){var l=function(e){if(e&&e.hasOwnProperty(r)&&JSON.stringify(schemaMap[r])!==JSON.stringify(e[r])){cleanSchemaMap(r),cleanData(r),populateSchemaMap(r,e[r]);var t=renderInfoMap[r];t&&render(t.titleContainer,t.container,r,t.parentObject,t.propertyProvider,t.value)}BrutusinForms.onResolutionFinished(n)};BrutusinForms.onResolutionStarted(n),obj.schemaResolver([r],obj.getData(),l)}}function createPropertyProvider(e,t){var r=new Object;return r.getValue=e,r.onchange=t,r}function getInitialValue(id){var ret;try{eval("ret = initialValue"+id.substring(1))}catch(e){ret=null}return ret}function getValue(schema,input){if("function"==typeof input.getValue)return input.getValue();var value;return value="select"===input.tagName.toLowerCase()?input.options[input.selectedIndex].value:input.value,""===value?null:("integer"===schema.type?(value=parseInt(value),isFinite(value)||(value=null)):"number"===schema.type?(value=parseFloat(value),isFinite(value)||(value=null)):"boolean"===schema.type?"input"===input.tagName.toLowerCase()?(value=input.checked,value||(value=!1)):"select"===input.tagName.toLowerCase()&&(value="true"===input.value?!0:"false"===input.value?!1:null):"any"===schema.type&&value&&eval("value="+value),value)}function getSchemaId(e){return e.replace(/\["[^"]*"\]/g,"[*]").replace(/\[\d*\]/g,"[#]")}function getParentSchemaId(e){return e.substring(0,e.lastIndexOf("."))}function getSchema(e){return schemaMap[e]}function cleanSchemaMap(e){for(var t in schemaMap)e.startsWith(t)&&delete schemaMap[t]}function cleanData(e){var t=new Expression(e);t.visit(data,function(e,t,r){delete t[r]})}function onDependencyChanged(e,t){var r=dependencyMap[e];if(r&&obj.schemaResolver){var n=function(e){if(e)for(var r in e)if(JSON.stringify(schemaMap[r])!==JSON.stringify(e[r])){cleanSchemaMap(r),cleanData(r),populateSchemaMap(r,e[r]);var n=renderInfoMap[r];n&&render(n.titleContainer,n.container,r,n.parentObject,n.propertyProvider,n.value)}BrutusinForms.onResolutionFinished(t)};BrutusinForms.onResolutionStarted(t),obj.schemaResolver(r,obj.getData(),n)}}function Expression(e){function t(e){if(null===e)return null;for(var t=new Array,r=null,n=0,a=0;a<e.length;a++)'"'===e.charAt(a)?null===r?r='"':'"'===r&&(r=null,t[t.length]=e.substring(n,a+1).trim(),n=a+1):"'"===e.charAt(a)?null===r?r="'":"'"===r&&(r=null,t[t.length]=e.substring(n,a+1).trim(),n=a+1):"["===e.charAt(a)?null===r&&(n!==a&&(t[t.length]=e.substring(n,a).trim()),t[t.length]="[",n=a+1):"]"===e.charAt(a)?null===r&&(n!==a&&(t[t.length]=e.substring(n,a).trim()),t[t.length]="]",n=a+1):"."===e.charAt(a)?null===r&&(n!==a&&(t[t.length]=e.substring(n,a).trim()),n=a+1):a===e.length-1&&(t[t.length]=e.substring(n,a+1).trim());return t}(null===e||0===e.length||"."===e)&&(e="$");for(var r=new Array,n=t(e),a=!1,i=0,o="",s=0;s<n.length;s++){var u=n[s];if("["===u){if(a)throw"Error parsing expression '"+e+"': Nested [ found";a=!0,i=0,o+=u}else if("]"===u){if(!a)throw"Error parsing expression '"+e+"': Unbalanced ] found";a=!1,o+=u,r[r.length]=o,o=""}else if(a){if(i>0)throw"Error parsing expression '"+e+"': Multiple tokens found inside a bracket";o+=u,i++}else r[r.length]=u;if(s===n.length-1&&a)throw"Error parsing expression '"+e+"': Unbalanced [ found"}this.exp=e,this.queue=r,this.visit=function(e,t){function r(e,n,a,i,o){if(null!=a){var s=n.shift();if("$"===s){e="$";var s=n.shift()}if(s)if(Array.isArray(a)){if(!s.startsWith("["))throw"Node '"+e+"' is of type array";var u=s.substring(1,s.length-1);if(u.equals("#"))for(var l=0;l<a.length;l++){var d=a[l];r(e+s,n.slice(0),d,a,l),r(e+"["+l+"]",n.slice(0),d,a,l)}else if("$"===u){var d=a[a.length-1];r(e+s,n.slice(0),d,a,a.length-1)}else{var p=parseInt(u);if(isNaN(p))throw"Element '"+u+"' of node '"+e+"' is not an integer, or the '$' last element symbol,  or the wilcard symbol '#'";if(0>p)throw"Element '"+u+"' of node '"+e+"' is lower than zero";var d=a[p];r(e+s,n.slice(0),d,a,p)}}else{if("object"!=typeof a)throw"boolean"==typeof a||"number"==typeof a||"string"==typeof a?"Node is leaf but still are tokens remaining: "+s:"Node type '"+typeof a+"' not supported for index field '"+e+"'";if("[*]"===s)for(var c in a){var d=a[c];r(e+s,n.slice(0),d,a,c),r(e+'["'+c+'"]',n.slice(0),d,a,c)}else{var d;if(s.startsWith("[")){var u=s.substring(1,s.length-1);if(!u.startsWith('"')&&!u.startsWith("'"))throw"Element '"+u+"' of node '"+e+"' must be a string expression or wilcard '*'";u=u.substring(1,u.length()-1),e+=s,d=a[u]}else e=e.length>0?e+"."+s:s,d=a[s];r(e,n,d,a,s)}}else t(a,i,o)}}r(this.exp,this.queue,e)}}var SCHEMA_ANY={type:"any"},obj=new Object,schemaMap=new Object,dependencyMap=new Object,renderInfoMap=new Object,container,data,error,initialValue,inputCounter=0,root=schema,formId="BrutusinForms#"+BrutusinForms.instances.length;renameRequiredPropeties(schema),populateSchemaMap("$",schema),validateDepencyMapIsAcyclic();var renderers=new Object;return renderers.integer=function(e,t,r,n,a){renderers.string(e,t,r,n,a)},renderers.number=function(e,t,r,n,a){renderers.string(e,t,r,n,a)},renderers.any=function(e,t,r,n,a){renderers.string(e,t,r,n,a)},renderers.string=function(e,t,r,n,a){var i,o=getSchemaId(t),s=getParentSchemaId(o),u=getSchema(o),l=getSchema(s);if("any"===u.type)i=document.createElement("textarea"),a&&(i.value=JSON.stringify(a,null,4),u.readOnly&&(i.disabled=!0));else if(u.media)i=document.createElement("input"),i.type="file",appendChild(i,d,u);else if(u["enum"]){if(i=document.createElement("select"),!u.required){var d=document.createElement("option"),p=document.createTextNode("");d.value="",appendChild(d,p,u),appendChild(i,d,u)}for(var c=0,m=0;m<u["enum"].length;m++){var d=document.createElement("option"),p=document.createTextNode(u["enum"][m]);d.value=u["enum"][m],appendChild(d,p,u),appendChild(i,d,u),a&&u["enum"][m]===a&&(c=m,u.required||c++,u.readOnly&&(i.disabled=!0))}1===u["enum"].length?i.selectedIndex=1:i.selectedIndex=c}else{if(i=document.createElement("input"),"integer"===u.type||"number"===u.type)i.type="number",i.step=u.step?""+u.step:"any","number"!=typeof a&&(a=null);else if("date-time"===u.format)try{i.type="datetime-local"}catch(f){i.type="text"}else"email"===u.format?i.type="email":"text"===u.format?i=document.createElement("textarea"):i.type="text";null!==a&&"undefined"!=typeof a&&(i.value=a,u.readOnly&&(i.disabled=!0))}return i.schema=o,i.setAttribute("autocorrect","off"),i.getValidationError=function(){try{var e=getValue(u,i);if(null===e){if(u.required){if(!l||"object"!==l.type)return BrutusinForms.messages.required;if(l.required)return BrutusinForms.messages.required;for(var t in r)if(null!==r[t])return BrutusinForms.messages.required}}else{if(u.pattern&&!u.pattern.test(e))return BrutusinForms.messages.pattern.format(u.pattern.source);if(u.minLength&&(!e||u.minLength>e.length))return BrutusinForms.messages.minLength.format(u.minLength);if(u.maxLength&&e&&u.maxLength<e.length)return BrutusinForms.messages.maxLength.format(u.maxLength)}if(null!==e&&!isNaN(e)){if(u.multipleOf&&e%u.multipleOf!==0)return BrutusinForms.messages.multipleOf.format(u.multipleOf);if(u.hasOwnProperty("maximum")){if(u.exclusiveMaximum&&e>=u.maximum)return BrutusinForms.messages.exclusiveMaximum.format(u.maximum);if(!u.exclusiveMaximum&&e>u.maximum)return BrutusinForms.messages.maximum.format(u.maximum)}if(u.hasOwnProperty("minimum")){if(u.exclusiveMinimum&&e<=u.minimum)return BrutusinForms.messages.exclusiveMinimum.format(u.minimum);if(!u.exclusiveMinimum&&e<u.minimum)return BrutusinForms.messages.minimum.format(u.minimum)}}}catch(n){return BrutusinForms.messages.invalidValue}},i.onchange=function(){var e;try{e=getValue(u,i)}catch(t){e=null}r?r[n.getValue()]=e:data=e,onDependencyChanged(o,i)},u.description&&(i.title=u.description,i.placeholder=u.description),i.onchange(),i.id=getInputId(),inputCounter++,appendChild(e,i,u),r},renderers["boolean"]=function(e,t,r,n,a){var i,o=getSchemaId(t),s=getSchema(o);if(s.required)i=document.createElement("input"),i.type="checkbox",a===!0&&(i.checked=!0);else{i=document.createElement("select");var u=document.createElement("option"),l=document.createTextNode("");l.value="",appendChild(u,l,s),appendChild(i,u,s);var d=document.createElement("option"),p=document.createTextNode(BrutusinForms.messages["true"]);d.value="true",appendChild(d,p,s),appendChild(i,d,s);var c=document.createElement("option"),m=document.createTextNode(BrutusinForms.messages["false"]);c.value="false",appendChild(c,m,s),appendChild(i,c,s),a===!0?i.selectedIndex=1:a===!1&&(i.selectedIndex=2)}i.onchange=function(){r?r[n.getValue()]=getValue(s,i):data=getValue(s,i),onDependencyChanged(o,i)},i.schema=o,i.id=getInputId(),inputCounter++,s.description&&(i.title=s.description),i.onchange(),appendChild(e,i,s)},renderers.oneOf=function(e,t,r,n,a){var i=getSchemaId(t),o=getSchema(i),s=document.createElement("select"),u=document.createElement("div");u.innerHTML="",s.type="select",s.schema=i;var l=document.createElement("option");l.value=null,appendChild(s,l,o);for(var d=0;d<o.oneOf.length;d++){var p=document.createElement("option"),c=i+"."+d,m=getSchema(c),f=document.createTextNode(m.title);if(p.value=o.oneOf[d],appendChild(p,f,o),appendChild(s,p,o),void 0!==a&&null!==a&&(o.readOnly&&(s.disabled=!0),a.hasOwnProperty("type")&&m.hasOwnProperty("properties")&&m.properties.hasOwnProperty("type"))){var h=getSchema(m.properties.type);a.type===h["enum"][0]&&(s.selectedIndex=d+1,render(null,u,t+"."+(s.selectedIndex-1),r,n,a))}}s.onchange=function(){render(null,u,t+"."+(s.selectedIndex-1),r,n,a)},appendChild(e,s,o),appendChild(e,u,o)},renderers.object=function(e,t,r,n,a){function i(e){var t=new Object;return t.getValue=function(){return e},t.onchange=function(e){},t}function o(e,t,r,n,a,i){var o=getSchemaId(r),s=getSchema(o),u=t.tBodies[0],l=document.createElement("tr"),d=document.createElement("td");d.className="add-prop-name";var p=document.createElement("table"),c=document.createElement("tr"),m=document.createElement("td"),f=document.createElement("td"),h="$"+Object.keys(e).length+"$",v=document.createElement("td");v.className="prop-value";var g=document.createElement("input");g.type="text";var y;i&&(y=RegExp(i)),g.getValidationError=function(){return g.previousValue!==g.value&&e.hasOwnProperty(g.value)?BrutusinForms.messages.addpropNameExistent:g.value?void 0:BrutusinForms.messages.addpropNameRequired};var b=createPropertyProvider(function(){if(g.value){if(!y)return g.value;if(-1!==g.value.search(y))return g.value}return h},function(t){b.getValue()!==t&&(t&&e.hasOwnProperty(t)||(t=h),(e.hasOwnProperty(t)||y&&-1===b.getValue().search(y))&&(e[b.getValue()]=e[t],delete e[t]))});g.onblur=function(){if(g.previousValue!==g.value){for(var t=g.value,r=1;g.previousValue!==t&&e.hasOwnProperty(t);)t=g.value+"("+r+")",r++;return g.value=t,b.onchange(g.previousValue),void(g.previousValue=g.value)}};var P=document.createElement("button");P.setAttribute("type","button"),P.className="remove",appendChild(P,document.createTextNode("x"),s),P.onclick=function(){delete e[g.value],t.deleteRow(l.rowIndex),g.value=null,b.onchange(g.previousValue)},appendChild(m,g,s),appendChild(f,P,s),appendChild(c,m,s),appendChild(c,f,s),appendChild(p,c,s),appendChild(d,p,s),void 0!==i&&(g.placeholder=i),appendChild(l,d,s),appendChild(l,v,s),appendChild(u,l,s),appendChild(t,u,s),render(null,v,r,e,b,a),n&&(g.value=n,g.onblur())}var s=getSchemaId(t),u=getSchema(s),l=new Object;r?(n.getValue()||0===n.getValue())&&(r[n.getValue()]=l):data=l;var d=document.createElement("table");d.className="object";var p=document.createElement("tbody");appendChild(d,p,u);var c=0;if(u.hasOwnProperty("properties")){c=u.properties.length;for(var m in u.properties){var f=document.createElement("tr"),h=document.createElement("td");h.className="prop-name";var v=t+"."+m,g=getSchema(getSchemaId(v)),y=document.createElement("td");y.className="prop-value",appendChild(p,f,g),appendChild(f,h,g),appendChild(f,y,g);var b=i(m),P=null;a&&(P=a[m]),render(h,y,v,l,b,P)}}var O=[];if(u.patternProperties||u.additionalProperties){var w=document.createElement("div");if(appendChild(w,d,u),u.patternProperties)for(var x in u.patternProperties){var C=u.patternProperties[x],E=document.createElement("div");E.className="add-pattern-div";var S=document.createElement("button");if(S.setAttribute("type","button"),S.pattern=x,S.id=t+"["+x+"]",S.onclick=function(){o(l,d,this.id,void 0,void 0,this.pattern)},(u.maxProperties||u.minProperties)&&(S.getValidationError=function(){return u.minProperties&&c+d.rows.length<u.minProperties?BrutusinForms.messages.minProperties.format(u.minProperties):u.maxProperties&&c+d.rows.length>u.maxProperties?BrutusinForms.messages.maxProperties.format(u.maxProperties):void 0}),C.description&&(S.title=C.description),appendChild(S,document.createTextNode("Add "+x),u),appendChild(E,S,u),a)for(var I in a)if(!u.properties||!u.properties.hasOwnProperty(I)){var N=RegExp(x);-1!==I.search(N)&&-1===O.indexOf(I)&&(o(l,d,t+"["+x+"]",I,a[I],x),O.push(I))}appendChild(w,E,u)}if(u.additionalProperties){var F=getSchema(u.additionalProperties),S=document.createElement("button");if(S.setAttribute("type","button"),S.onclick=function(){o(l,d,t+"[*]",void 0)},(u.maxProperties||u.minProperties)&&(S.getValidationError=function(){return u.minProperties&&c+d.rows.length<u.minProperties?BrutusinForms.messages.minProperties.format(u.minProperties):u.maxProperties&&c+d.rows.length>u.maxProperties?BrutusinForms.messages.maxProperties.format(u.maxProperties):void 0}),F.description&&(S.title=F.description),appendChild(S,document.createTextNode("Add"),u),appendChild(w,S,u),a)for(var I in a)u.properties&&u.properties.hasOwnProperty(I)||-1===O.indexOf(I)&&o(l,d,t+'["'+m+'"]',I,a[I])}appendChild(e,w,u)}else appendChild(e,d,u)},renderers.array=function(e,t,r,n,a){function i(e,t,r,n,a){var i=getSchemaId(r),o=getSchema(i),s=document.createElement("tbody"),u=document.createElement("tr");u.className="item";var l=document.createElement("td");l.className="item-index";var d=document.createElement("td");d.className="item-action";var p=document.createElement("td");p.className="item-value";var c=document.createElement("button");c.setAttribute("type","button"),c.className="remove",a===!0&&(c.disabled=!0),appendChild(c,document.createTextNode("x"),o);var m=function(){for(var e=0;e<t.rows.length;e++){var r=t.rows[e];r.cells[0].innerHTML=e+1}};c.onclick=function(){e.splice(u.rowIndex,1),t.deleteRow(u.rowIndex),m()},appendChild(d,c,o);var f=document.createTextNode(t.rows.length+1);appendChild(l,f,o),appendChild(u,l,o),appendChild(u,d,o),appendChild(u,p,o),appendChild(s,u,o),appendChild(t,s,o);var h=createPropertyProvider(function(){return u.rowIndex});render(null,p,r,e,h,n)}var o=getSchemaId(t),s=getSchema(o),u=getSchema(s.items),l=new Array;r?(n.getValue()||0===n.getValue())&&(r[n.getValue()]=l):data=l,n&&(n.onchange=function(e){delete r[e],r[n.getValue()]=l});var d=document.createElement("div"),p=document.createElement("table");p.className="array",appendChild(d,p,s),appendChild(e,d,s);var c=document.createElement("button");if(s.readOnly&&(c.disabled=!0),c.setAttribute("type","button"),c.getValidationError=function(){if(s.minItems&&s.minItems>p.rows.length)return BrutusinForms.messages.minItems.format(s.minItems);if(s.maxItems&&s.maxItems<p.rows.length)return BrutusinForms.messages.maxItems.format(s.maxItems);if(s.uniqueItems)for(var e=0;e<l.length;e++)for(var t=e+1;t<l.length;t++)if(JSON.stringify(l[e])===JSON.stringify(l[t]))return BrutusinForms.messages.uniqueItems},c.onclick=function(){i(l,p,t+"[#]",null)},u.description&&(c.title=u.description),appendChild(c,document.createTextNode(BrutusinForms.messages.addItem),s),appendChild(d,p,s),appendChild(d,c,s),a&&a instanceof Array)for(var m=0;m<a.length;m++)i(l,p,t+"["+m+"]",a[m],s.readOnly);appendChild(e,d,s)},obj.render=function(e,t){container=e,initialValue=t;var r=document.createElement("form");if(r.className="brutusin-form",r.onsubmit=function(e){return!1},container?appendChild(container,r):appendChild(document.body,r),error){var n=document.createElement("label"),a=document.createTextNode(error);appendChild(n,a),n.className="error-message",appendChild(r,n)}else render(null,r,"$",null,null);dependencyMap.hasOwnProperty("$")&&onDependencyChanged("$"),BrutusinForms.postRender&&BrutusinForms.postRender(obj)},obj.getRenderingContainer=function(){return container},obj.validate=function(){return validate(container)},obj.getData=function(){function e(t,r){if(null===s&&(s=SCHEMA_ANY),r.$ref&&(r=getDefinition(r.$ref)),t instanceof Array){if(0===t.length)return null;for(var n=new Array,a=0;a<t.length;a++)n[a]=e(t[a],r.items);return n}if(""===t)return null;if(t instanceof Object){var n=new Object,i=!1;for(var o in t)if(!o.startsWith("$")||!o.endsWith("$")){var s=null;if(r.hasOwnProperty("properties")&&r.properties.hasOwnProperty(o)&&(s=r.properties[o]),null===s&&r.hasOwnProperty("additionalProperties")&&"object"==typeof r.additionalProperties&&(s=r.additionalProperties),null===s&&r.hasOwnProperty("patternProperties"))for(var u in r.patternProperties){var l=RegExp(u);if(-1!==o.search(l)){s=r.patternProperties[u];break}}var d=e(t[o],s);null!==d&&(n[o]=d,i=!0)}return i||r.required?n:null}return t}return container?e(data,schema):null},BrutusinForms.instances[BrutusinForms.instances.length]=obj,obj},brutusin["json-forms"]=BrutusinForms}();

/***/ }),
/* 28 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;!function(f){if(true)module.exports=f();else if("function"==typeof define&&define.amd)define([],f);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).MeteorEmoji=f()}}(function(){return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n||e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){!function(global,factory){if(void 0!==exports)factory(module);else{var mod={exports:{}};factory(mod),global.meteorEmoji=mod.exports}}(this,function(module){"use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),MeteorEmoji=function(){function MeteorEmoji(){!function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,MeteorEmoji),this.initiate()}return _createClass(MeteorEmoji,[{key:"initiate",value:function(){var _this=this;document.querySelectorAll('[data-meteor-emoji="true"], [data-meteor-emoji-large="true"]').forEach(function(element){_this.generateElements(element)})}},{key:"generateElements",value:function(emojiInput){var clickLink=function(event){var caretPos=emojiInput.selectionStart;emojiInput.value=emojiInput.value.substring(0,caretPos)+" "+event.target.innerHTML+emojiInput.value.substring(caretPos),emojiPicker.style.display="block","undefined"!=typeof angular&&angular.element(emojiInput).triggerHandler("change")},clickCategory=function(event){emojiInput.selectionStart;emojiPicker.style.display="block";for(var hideUls=emojiPicker.querySelectorAll("ul"),i=1,l=hideUls.length;i<l;i++)hideUls[i].style.display="none";var backgroundToggle=emojiPicker.querySelectorAll(".category a");for(i=0,l=backgroundToggle.length;i<l;i++)backgroundToggle[i].style.background="none";emojiPicker.querySelector("."+event.target.id).style.display="block",emojiPicker.querySelector("#"+event.target.id).style.background="#c2c2c2"};emojiInput.style.width="100%";var emojiContainer=document.createElement("div");emojiContainer.style.position="relative",emojiInput.parentNode.replaceChild(emojiContainer,emojiInput),emojiContainer.appendChild(emojiInput);var emojiPicker=document.createElement("div");emojiPicker.tabIndex=0,emojiInput.hasAttribute("data-meteor-emoji-large")?(emojiPicker.style.zIndex="999",emojiPicker.style.display="block",emojiPicker.style.width="100%",emojiPicker.style.marginBottom="15px"):(emojiPicker.style.position="absolute",emojiPicker.style.right="0px",emojiPicker.style.top="30px",emojiPicker.style.display="none",emojiPicker.style.width="400px"),emojiPicker.style.zIndex="999",emojiPicker.style.overflow="hidden",emojiPicker.style.background="#fff",emojiPicker.style.borderRadius="5px",emojiPicker.style.boxShadow="0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",emojiPicker.style.borderRadius="2px;",emojiPicker.style.marginTop="5px",emojiPicker.style.outline="none";var emojiTrigger=document.createElement("a");emojiTrigger.style.position="absolute",emojiTrigger.style.top="10px",emojiTrigger.style.right="10px",emojiTrigger.style.textDecoration="none",emojiTrigger.setAttribute("href","javascript:void(0)"),emojiTrigger.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12 14"><path d="M8.9 8.4q-0.3 0.9-1.1 1.5t-1.8 0.6-1.8-0.6-1.1-1.5q-0.1-0.2 0-0.4t0.3-0.2q0.2-0.1 0.4 0t0.2 0.3q0.2 0.6 0.7 1t1.2 0.4 1.2-0.4 0.7-1q0.1-0.2 0.3-0.3t0.4 0 0.3 0.2 0 0.4zM5 5q0 0.4-0.3 0.7t-0.7 0.3-0.7-0.3-0.3-0.7 0.3-0.7 0.7-0.3 0.7 0.3 0.3 0.7zM9 5q0 0.4-0.3 0.7t-0.7 0.3-0.7-0.3-0.3-0.7 0.3-0.7 0.7-0.3 0.7 0.3 0.3 0.7zM11 7q0-1-0.4-1.9t-1.1-1.6-1.6-1.1-1.9-0.4-1.9 0.4-1.6 1.1-1.1 1.6-0.4 1.9 0.4 1.9 1.1 1.6 1.6 1.1 1.9 0.4 1.9-0.4 1.6-1.1 1.1-1.6 0.4-1.9zM12 7q0 1.6-0.8 3t-2.2 2.2-3 0.8-3-0.8-2.2-2.2-0.8-3 0.8-3 2.2-2.2 3-0.8 3 0.8 2.2 2.2 0.8 3z"/></svg>',emojiTrigger.onclick=function(){"none"===emojiPicker.style.display?emojiPicker.style.display="block":"block"===emojiPicker.style.display&&(emojiPicker.style.display="none"),emojiPicker.focus()},emojiInput.hasAttribute("data-meteor-emoji-large")||emojiContainer.appendChild(emojiTrigger),window.addEventListener("click",function(e){emojiInput.hasAttribute("data-meteor-emoji-large")||"block"===emojiPicker.style.display&&(emojiPicker.contains(e.target)||emojiTrigger.contains(e.target)||(emojiPicker.style.display="none"))});var facesCategory=document.createElement("ul");facesCategory.style.padding="10px 0px",facesCategory.style.margin="0",facesCategory.style.listStyle="none",facesCategory.style.textAlign="left",facesCategory.style.marginLeft="3%",facesCategory.classList.add("faces");var animalsCategory=document.createElement("ul");animalsCategory.style.padding="10px 0px",animalsCategory.style.margin="0",animalsCategory.style.listStyle="none",animalsCategory.style.textAlign="left",animalsCategory.style.marginLeft="3%",animalsCategory.classList.add("animals"),animalsCategory.style.display="none";var foodCategory=document.createElement("ul");foodCategory.style.padding="10px 0px",foodCategory.style.margin="0",foodCategory.style.listStyle="none",foodCategory.style.textAlign="left",foodCategory.style.marginLeft="3%",foodCategory.classList.add("food"),foodCategory.style.display="none";var sportCategory=document.createElement("ul");sportCategory.style.padding="10px 0px",sportCategory.style.margin="0",sportCategory.style.listStyle="none",sportCategory.style.textAlign="left",sportCategory.style.marginLeft="3%",sportCategory.classList.add("sport"),sportCategory.style.display="none";var transportCategory=document.createElement("ul");transportCategory.style.padding="10px 0px",transportCategory.style.margin="0",transportCategory.style.listStyle="none",transportCategory.style.textAlign="left",transportCategory.style.marginLeft="3%",transportCategory.classList.add("transport"),transportCategory.style.display="none";var objectsCategory=document.createElement("ul");objectsCategory.style.padding="10px 0px",objectsCategory.style.margin="0",objectsCategory.style.listStyle="none",objectsCategory.style.textAlign="left",objectsCategory.style.marginLeft="3%",objectsCategory.classList.add("objects"),objectsCategory.style.display="none";var emojiCategory=document.createElement("ul");emojiCategory.style.padding="0px",emojiCategory.style.margin="0",emojiCategory.style.display="table",emojiCategory.style.width="100%",emojiCategory.style.background="#eff0f1",emojiCategory.style.listStyle="none",emojiCategory.classList.add("category");var emojiCategories=new Array;emojiCategories.push({name:"faces",svg:'<svg id="faces" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150"><path id="faces" d="M74.34,128.48a53.5,53.5,0,1,1,37.84-15.67,53.16,53.16,0,0,1-37.84,15.67Zm0-97.89a44.4,44.4,0,1,0,31.4,13,44.07,44.07,0,0,0-31.4-13Z"/><path id="faces" d="M74.35,108A33.07,33.07,0,0,1,41.29,75a2.28,2.28,0,0,1,2.27-2.28h0A2.27,2.27,0,0,1,45.83,75a28.52,28.52,0,0,0,57,0,2.27,2.27,0,0,1,4.54,0A33.09,33.09,0,0,1,74.35,108Z"/><path id="faces" d="M58.84,62a6.81,6.81,0,1,0,6.81,6.81A6.81,6.81,0,0,0,58.84,62Z"/><path id="faces" d="M89.87,62a6.81,6.81,0,1,0,6.81,6.81A6.82,6.82,0,0,0,89.87,62Z"/></svg>'}),emojiCategories.push({name:"animals",svg:'<svg id="animals" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150"><path id="animals" d="M59.9,91.75h0c-22.46,0-41.82-19.34-44.09-44A52.1,52.1,0,0,1,16,36.8a4.51,4.51,0,0,1,2.63-3.62,39.79,39.79,0,0,1,12.74-3.37c23.92-2.15,45.35,17.83,47.74,43.86a52.77,52.77,0,0,1-.15,10.93,4.56,4.56,0,0,1-2.64,3.62,39.67,39.67,0,0,1-12.73,3.36c-1.23.11-2.45.17-3.66.17ZM24.76,40.49a41.29,41.29,0,0,0,.09,6.4C26.7,67,42.09,82.66,59.9,82.67h0c.94,0,1.88,0,2.83-.14a30.39,30.39,0,0,0,7.41-1.62,41.14,41.14,0,0,0-.11-6.4C68.09,53.38,51.11,37.08,32.17,38.86a30.78,30.78,0,0,0-7.41,1.63Z"/><path id="animals" d="M36.68,125.64a4.53,4.53,0,0,1-4.33-3.17,53.32,53.32,0,0,1-2.26-11A50.42,50.42,0,0,1,39.51,76.6c7.35-9.91,17.84-16,29.5-17,1.16-.11,2.33-.13,3.47-.13a4.54,4.54,0,0,1,4.33,3.16,51.59,51.59,0,0,1,2.27,11.08,50.39,50.39,0,0,1-9.42,34.8c-7.35,9.91-17.83,16-29.5,17a17.63,17.63,0,0,1-3.48.12ZM69.09,68.69A32.41,32.41,0,0,0,46.8,82a42.57,42.57,0,0,0-6.71,34.38,32.38,32.38,0,0,0,22.28-13.32A41.35,41.35,0,0,0,70,74.51a39.38,39.38,0,0,0-.94-5.82Z"/><path id="animals" d="M90.27,91.75c-1.22,0-2.43-.06-3.66-.17a39.67,39.67,0,0,1-12.73-3.36,4.57,4.57,0,0,1-2.64-3.61,53.38,53.38,0,0,1-.17-10.93c2.41-26,23.7-46.07,47.76-43.87a39.74,39.74,0,0,1,12.73,3.37,4.57,4.57,0,0,1,2.64,3.62,53.35,53.35,0,0,1,.16,10.92c-2.28,24.69-21.65,44-44.09,44ZM80,80.91a30.57,30.57,0,0,0,7.42,1.62c19.07,1.78,35.92-14.53,37.87-35.64a42.55,42.55,0,0,0,.1-6.4A30.86,30.86,0,0,0,118,38.86C99,37.07,82.06,53.38,80.12,74.51a43.91,43.91,0,0,0-.1,6.4Z"/><path id="animals" d="M113.49,125.64h0c-1.16,0-2.3,0-3.46-.12-23.9-2.21-41.36-25.47-38.94-51.85A53.52,53.52,0,0,1,73.34,62.6a4.55,4.55,0,0,1,4.33-3.16c1.16,0,2.34,0,3.51.13,11.64,1.07,22.11,7.12,29.48,17a50.51,50.51,0,0,1,9.42,34.81,53.51,53.51,0,0,1-2.26,11,4.54,4.54,0,0,1-4.33,3.19ZM81.08,68.69a42.53,42.53,0,0,0-1,5.82c-1.94,21.1,11.45,39.71,29.95,41.88A42.38,42.38,0,0,0,103.36,82,32.42,32.42,0,0,0,81.08,68.69Z"/><path id="animals" d="M75.08,45.45a7.83,7.83,0,1,0,7.83,7.83,7.83,7.83,0,0,0-7.83-7.83Z"/><path id="animals" d="M76.29,51.89a2.26,2.26,0,0,1-2.14-3A46,46,0,0,1,92.82,25.34a2.27,2.27,0,1,1,2.4,3.86A41.4,41.4,0,0,0,78.43,50.39a2.28,2.28,0,0,1-2.14,1.5Z"/><path id="animals" d="M73.87,51.89a2.28,2.28,0,0,1-2.14-1.5A41.35,41.35,0,0,0,54.94,29.2a2.27,2.27,0,0,1,2.39-3.86A46,46,0,0,1,76,48.85a2.28,2.28,0,0,1-1.37,2.91,2.31,2.31,0,0,1-.77.13Z"/></svg>'}),emojiCategories.push({name:"food",svg:'<svg id="food" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150"><path id="food" d="M104,20.76h.15c15.83.52,24.08,21.48,24.07,32.56.26,12.42-10.72,23.55-24,24.21a3.53,3.53,0,0,1-.46,0c-13.25-.66-24.23-11.8-24-24.3,0-11,8.26-31.95,24.07-32.47Zm0,47.69c8.25-.54,15.3-7.51,15.14-15,0-8.12-6.22-23.1-15.14-23.57-8.9.46-15.14,15.45-15.14,23.48-.14,7.61,6.9,14.59,15.14,15.13Z"/><path id="food" d="M97.19,69.21h.14a4.53,4.53,0,0,1,4.4,4.68l-1.48,46.92a1.59,1.59,0,0,0,.5,1.06,4.6,4.6,0,0,0,3.25,1.19h0a4.57,4.57,0,0,0,3.26-1.2,1.53,1.53,0,0,0,.49-1l-1.48-46.95a4.54,4.54,0,1,1,9.08-.28l1.47,46.91a10.42,10.42,0,0,1-3,7.65,13.65,13.65,0,0,1-9.81,4h0a13.58,13.58,0,0,1-9.79-4,10.42,10.42,0,0,1-3-7.67l1.48-46.89a4.53,4.53,0,0,1,4.53-4.4Z"/><path id="food" d="M41.84,69.21H42a4.53,4.53,0,0,1,4.4,4.68L44.9,120.81a1.57,1.57,0,0,0,.5,1.06,4.6,4.6,0,0,0,3.25,1.19h0a4.51,4.51,0,0,0,3.24-1.19,1.48,1.48,0,0,0,.5-1L50.93,73.89a4.53,4.53,0,0,1,4.39-4.68A4.4,4.4,0,0,1,60,73.61l1.48,46.91a10.49,10.49,0,0,1-3,7.66,13.57,13.57,0,0,1-9.78,4h0a13.59,13.59,0,0,1-9.78-4,10.48,10.48,0,0,1-3-7.67l1.48-46.9a4.54,4.54,0,0,1,4.54-4.4Z"/><path id="food" d="M28.59,20.76a4.54,4.54,0,0,1,4.54,4.54V51a15.52,15.52,0,0,0,31,0V25.3a4.55,4.55,0,0,1,9.09,0V51a24.61,24.61,0,1,1-49.21,0V25.3a4.54,4.54,0,0,1,4.54-4.54Z"/><path id="food" d="M55.34,20.76a4.54,4.54,0,0,1,4.54,4.54v19a4.54,4.54,0,1,1-9.08,0v-19a4.54,4.54,0,0,1,4.54-4.54Z"/><path id="food" d="M42,20.76a4.54,4.54,0,0,1,4.54,4.54v19a4.54,4.54,0,1,1-9.08,0v-19A4.54,4.54,0,0,1,42,20.76Z"/></svg>'}),emojiCategories.push({name:"sport",svg:'<svg id="sport" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150"><path id="sport" d="M75.35,130.24a53.49,53.49,0,1,1,53.48-53.49,53.55,53.55,0,0,1-53.48,53.49Zm0-97.89a44.41,44.41,0,1,0,44.4,44.4,44.1,44.1,0,0,0-44.4-44.4Z"/><path id="sport" d="M119.24,84.08A51.29,51.29,0,0,1,68,32.86a49.44,49.44,0,0,1,.26-5,2.26,2.26,0,0,1,2-2c1.66-.16,3.34-.25,5-.25a51.26,51.26,0,0,1,51.21,51.21c0,1.71-.09,3.38-.25,5a2.28,2.28,0,0,1-2,2c-1.65.16-3.33.25-5,.25ZM72.64,30.16c-.06.9-.08,1.79-.08,2.7a46.73,46.73,0,0,0,46.68,46.68q1.37,0,2.7-.09c.06-.89.08-1.79.08-2.7A46.72,46.72,0,0,0,75.35,30.08c-.91,0-1.82,0-2.71.08Z"/><path id="sport" d="M75.35,128A51.28,51.28,0,0,1,24.12,76.76c0-1.7.1-3.38.25-5a2.29,2.29,0,0,1,2-2c1.66-.16,3.33-.25,5.05-.25a51.27,51.27,0,0,1,51.21,51.22c0,1.69-.09,3.37-.25,5a2.27,2.27,0,0,1-2,2c-1.66.16-3.32.25-5,.25ZM28.75,74.05c-.05.9-.09,1.8-.09,2.71a46.74,46.74,0,0,0,46.69,46.67c.91,0,1.8,0,2.7-.08,0-.9.08-1.8.08-2.7A46.73,46.73,0,0,0,31.46,74c-.91,0-1.81,0-2.71.08Z"/><polygon id="sport" points="42.69 112.61 39.48 109.4 108 40.88 111.21 44.1 42.69 112.61 42.69 112.61"/></svg>'}),emojiCategories.push({name:"transport",svg:'<svg id="transport" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150"><path id="transport" d="M120.7,116H31a4.55,4.55,0,0,1-4.54-4.55V54.28A31.82,31.82,0,0,1,58.25,22.49h35.2a31.83,31.83,0,0,1,31.8,31.79v57.15A4.55,4.55,0,0,1,120.7,116Zm-85.16-9.09h80.62V54.28A22.74,22.74,0,0,0,93.45,31.57H58.25A22.74,22.74,0,0,0,35.54,54.28v52.61Z"/><path id="transport" d="M49.35,129.23c-8.53,0-13.62-2.77-13.62-7.41V115.6a4.54,4.54,0,1,1,9.08,0v4.06a21.32,21.32,0,0,0,9.09,0V115.6a4.54,4.54,0,0,1,9.08,0v6.22c0,4.64-5.09,7.41-13.63,7.41Z"/><path id="transport" d="M102.34,129.23c-8.53,0-13.62-2.77-13.62-7.41V115.6a4.54,4.54,0,0,1,9.08,0v4.06a21.28,21.28,0,0,0,9.08,0V115.6a4.55,4.55,0,0,1,9.09,0v6.22c0,4.64-5.09,7.41-13.63,7.41Z"/><path id="transport" d="M97.81,44.83H53.9a4.55,4.55,0,1,1,0-9.09H97.81a4.55,4.55,0,0,1,0,9.09Z"/><path id="transport" d="M54.28,84.2A6.8,6.8,0,1,0,61.07,91a6.8,6.8,0,0,0-6.79-6.8Z"/><path id="transport" d="M97.43,84.2a6.8,6.8,0,1,0,6.79,6.8,6.8,6.8,0,0,0-6.79-6.8Z"/><path id="transport" d="M107.08,81H44.63a6.82,6.82,0,0,1-6.82-6.82V54.28a6.82,6.82,0,0,1,6.82-6.81h62.45a6.82,6.82,0,0,1,6.81,6.81V74.15A6.83,6.83,0,0,1,107.08,81ZM44.63,52a2.28,2.28,0,0,0-2.28,2.27V74.15a2.28,2.28,0,0,0,2.28,2.27h62.45a2.27,2.27,0,0,0,2.27-2.27V54.28A2.27,2.27,0,0,0,107.08,52Z"/></svg>'}),emojiCategories.push({name:"objects",svg:'<svg id="objects" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150"><path id="objects" d="M107.78,129a4.55,4.55,0,0,1-2.67-.87l-30-21.79-30,21.79a4.53,4.53,0,0,1-5.34,0,4.58,4.58,0,0,1-1.65-5.08L49.59,87.82,19.6,66a4.54,4.54,0,0,1,2.67-8.22H59.34L70.8,22.55a4.55,4.55,0,0,1,8.64,0L90.89,57.81H128A4.54,4.54,0,0,1,130.63,66l-30,21.79,11.46,35.25a4.55,4.55,0,0,1-4.32,6ZM75.12,96.2a4.53,4.53,0,0,1,2.67.87l21.35,15.51L91,87.49a4.55,4.55,0,0,1,1.65-5.08L114,66.89H87.59a4.54,4.54,0,0,1-4.32-3.13l-8.15-25.1L67,63.76a4.53,4.53,0,0,1-4.32,3.13H36.25L57.61,82.41a4.54,4.54,0,0,1,1.65,5.08l-8.17,25.09L72.45,97.07a4.53,4.53,0,0,1,2.67-.87Z"/></svg>'});emojiCategories.map(function(item){var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.padding="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.style.display="table-cell",emojiLink.style.textAlign="center",emojiLink.id=String(item.name),"faces"==String(item.name)&&(emojiLink.style.background="#c2c2c2"),emojiLink.innerHTML=String(item.svg),emojiLink.onmousedown=clickCategory,emojiCategory.appendChild(emojiLink)}),[128513,128514,128515,128516,128517,128518,128521,128522,128523,128524,128525,128527,128530,128531,128532,128534,128536,128538,128540,128541,128542,128544,128545,128546,128547,128548,128549,128552,128553,128554,128555,128557,128560,128561,128562,128563,128565,128567].map(function(item){var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.margin="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.innerHTML=String.fromCodePoint(item),emojiLink.onmousedown=clickLink,facesCategory.appendChild(emojiLink)}),[128012,128013,128014,128017,128018,128020,128023,128024,128025,128026,128027,128028,128029,128030,128031,128032,128033,128034,128035,128036,128037,128038,128039,128040,128041,128043,128044,128045,128046,128047,128048,128049,128050,128051,128052,128053,128054,128055,128056,128057,128058,128059,128060].map(function(item){var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.margin="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.innerHTML=String.fromCodePoint(item),emojiLink.onmousedown=clickLink,animalsCategory.appendChild(emojiLink)}),[127813,127814,127815,127816,127817,127818,127820,127821,127822,127823,127825,127826,127827,127828,127829,127830,127831,127832,127836,127837,127838,127839,127840,127841,127842,127843,127844,127846,127848,127849,127850,127851,127852,127853,127856,127858,127859,127860,127863,127864,127867].map(function(item){var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.margin="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.innerHTML=String.fromCodePoint(item),emojiLink.onmousedown=clickLink,foodCategory.appendChild(emojiLink)}),[127921,127923,127934,127935,127936,127937,127938,127939,127940,127942,127944,127946,128675,128692,128693,9917,9918,9978,127907,127919,9971].map(function(item){var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.margin="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.innerHTML=String.fromCodePoint(item),emojiLink.onmousedown=clickLink,sportCategory.appendChild(emojiLink)}),[128641,128642,128646,128648,128650,128653,128654,128656,128660,128662,128664,128667,128668,128669,128670,128671,128672,128673,128640,128643,128644,128645,128647,128649,128652,128657,128658,128659,128661,128663,128665,128666,128674,128676,128690].map(function(item){var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.margin="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.innerHTML=String.fromCodePoint(item),emojiLink.onmousedown=clickLink,transportCategory.appendChild(emojiLink)}),[127890,127880,127881,127887,127891,127905,127906,127908,127909,127911,127912,127915,127916,127918,127919,127926,127927,127928,127929,127930,127931,127932,127968,127973,127978,128147,128148,128149,128150,128151,128152,128187,128186,128197,128213,128247].map(function(item){var emojiLi=document.createElement("li");emojiLi.style.display="inline-block",emojiLi.style.margin="5px";var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.margin="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.innerHTML=String.fromCodePoint(item),emojiLink.onmousedown=clickLink,objectsCategory.appendChild(emojiLink)}),emojiPicker.appendChild(emojiCategory),emojiPicker.appendChild(facesCategory),emojiPicker.appendChild(animalsCategory),emojiPicker.appendChild(foodCategory),emojiPicker.appendChild(sportCategory),emojiPicker.appendChild(transportCategory),emojiPicker.appendChild(objectsCategory),emojiContainer.appendChild(emojiPicker)}}]),MeteorEmoji}();module.exports=MeteorEmoji})},{}]},{},[1])(1)});

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDI0MzE1YjRmZjBmNWU4YzkxMmUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb29raWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy91c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vanMtc2VydmljZXMvdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2pzLXNlcnZpY2VzL2FwaS10YXNrLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wdWJzdWItanMvc3JjL3B1YnN1Yi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2ZvbGxvdy9mb2xsb3ctc3RhdHVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vanMtc2VydmljZXMvbmV0d29yay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3dpemFyZC1mb3JtL3dpemFyZC1mb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9hdXRvZ3JlZXRpbmcvYXV0b2dyZWV0aW5nLW1haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9hdXRvZ3JlZXRpbmcvYm90LWxvZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9hdXRvZ3JlZXRpbmcvY2hhdC1ib3Qtc3RhdHVzLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvY2hhdC1ib3QtYmxvY2svYm90LWxvZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9jaGF0LWJvdC1ibG9jay9jaGF0LWJvdC1ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2NoYXQtYm90LWJsb2NrL2NoYXQtYm90LXN0YXR1cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2NvbmZpcm0tcmVnL2NvbmZpcm0tcmVnLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvZm9sbG93L2ZvbGxvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2hlYWRlci9idXJnZXItbWVudS9idXJnZXItbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9pbnN0YWdyYW0tYWNjb3VudHMtbGlzdC9pbnN0YWdyYW0tYWNjb3VudHMtbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL21lc3NhZ2VzL21lc3NhZ2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvcmVnaXN0ZXItZm9ybS9yZWdpc3Rlci1mb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vanMtc2VydmljZXMvYXBpLXVzZXItZGlyZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vanMtc2VydmljZXMvc3Bpbm5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2F1dGgvbG9naW4tcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JydXR1c2luLWpzb24tZm9ybXMvZGlzdC9qcy9icnV0dXNpbi1qc29uLWZvcm1zLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFzZS5zY3NzIiwid2VicGFjazovLy8uL34vbWV0ZW9yLWVtb2ppL2Rpc3QvbWV0ZW9yRW1vamkubWluLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiXSwibmFtZXMiOlsiQ09OU1QiLCJ1cmwiLCJ0bVR5cGVzIiwiZm9sbG93aW5nVCIsImZvbGxvd2luZ1N1YlQiLCJjaGF0Qm90VCIsImNoYXRCb3RTdWJUIiwiYXV0b2dyZWV0VCIsImF1dG9ncmVldFN1YlQiLCJiYXNlIiwicmVnaXN0cmF0aW9uIiwibG9naW4iLCJjb25maXJtYXRpb24iLCJpbnN0YWdyYW1fYWRkQWNjb3VudCIsImluc3RhZ3JhbUFjY291bnRfZ2V0TWV0YURhdGEiLCJpbnN0YWdyYW1BY2NvdW50X2NoZWNrcG9pbnQiLCJpbnN0YWdyYW1BY2NvdW50X2NvbmZpcm1LZXkiLCJpbnN0YWdyYW1EaXJlY3RfZ2V0TWV0YURhdGEiLCJpbnN0YWdyYW1EaXJlY3RfcG9zdE1lc3NhZ2UiLCJpbnN0YWdyYW1UYXNrTWFuYWdlciIsImluc3RhZ3JhbVRhc2tNYW5hZ2VyX2dldE1ldGFEYXRhIiwiaW5zdGFncmFtVGFza01hbmFnZXJfZ2V0VGFza1R5cGVzIiwiaW5zdGFncmFtVGFza01hbmFnZXJfZ2V0VGFza0J5VHlwZXMiLCJ0eXBlIiwic3VidHlwZSIsImluc3RhZ3JhbVRhc2tNYW5hZ2VyX2dldERlZmF1bHRDb25maWdzIiwiaW5zdGFncmFtVGFza01hbmFnZXJfcG9zdFN0YXJ0Rm9sbG93aW5nTGlzdCIsImluc3RhZ3JhbVRhc2tNYW5hZ2VyX3B1dFN0b3BUYXNrQnlJRCIsImlkIiwiaW5zdGFncmFtVGFza01hbmFnZXJfZGVsUmVtb3ZlVGFza0J5SUQiLCJpbnN0YWdyYW1UYXNrTWFuYWdlcl9wb3N0U3RhcnRDaGF0Qm90IiwiaW5zdGFncmFtVGFza01hbmFnZXJfZ2V0TG9nc0NoYXRCb3QiLCJwYXRoIiwicGFnZSIsInVzZXJuYW1lIiwidXNlciIsImVtYWlsIiwicGFzc3dvcmQiLCJ0b2tlbiIsImNvb2tpZVN0b3JhZ2UiLCJlbWFpbENvbmZpcm1lZCIsInVpU2VsZWN0b3JzIiwiaGVhZGVyTG9naW5Cb3giLCJoZWFkZXJOYXZMb2dpbkJ0biIsImhlYWRlclJlZ0JveCIsImhlYWRlclJlZ0J0biIsImluc3RhZ3JhbSIsImFkZEFjY291bnRCdG5TZWxlY3RvciIsImFkZEFjY291bnRCdG5JZCIsImV2ZW50cyIsIlVTRVJfTE9HR0VEIiwiVVNFUl9MT0dPVVQiLCJVU0VSX0VNQUlMX0NPTkZJUk1FRCIsIlNUT1BfRklYRURfU1BJTk5FUiIsIm1lc3NhZ2VzIiwiUkVDSUVWRV9ORVdfTUVTU0FHRSIsImluc3RhZ3JhbUFjY291bnMiLCJJTlNUQUdSQU1fQUNDT1VOU19SRU5ERVJFRCIsInRhc2tzIiwiTkVXX1RBU0tfQ1JFQVRFRCIsImdldFBhdGgiLCJuYW1lIiwiZ2V0UGF0aFR5cGVTdWJ0eXBlIiwiQ29va2llU3J2IiwiZ2V0IiwiYyIsImRvY3VtZW50IiwiY29va2llIiwibWF0Y2giLCJkZWNvZGVVUklDb21wb25lbnQiLCJzZXQiLCJ2YWx1ZSIsIm9wdHMiLCJkYXlzIiwiT2JqZWN0IiwiZW50cmllcyIsInJlZHVjZSIsInN0ciIsImsiLCJ2IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVtb3ZlIiwiVXNlciIsIm5ldHdvcmsiLCJzZXR0aW5nUG9zdCIsIm1ldGhvZCIsImhlYWRlcnMiLCJnZXRUb2tlbiIsImNvb2tpZVRva2VuIiwiZm9ybURhdGEiLCJjYkVycm9yIiwic2V0dGluZyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwic2VuZFJlcXVlc3QiLCJjaGVja3BvaW50VHlwZSIsImtleSIsInVzZXJJbnN0YW5jZSIsInZpZXdVdGlscyIsInNob3dJbmZvTWVzc2FnZSIsInNlbGVjdG9yIiwibWVzc2FnZTEiLCJtZXNzYWdlMiIsIiQiLCJlbXB0eSIsImFwcGVuZCIsImZpbGxMaXN0IiwiJGxpc3QiLCJkYXRhQXJyYXkiLCJpdGVtcyIsImNMaXN0IiwiZm9yRWFjaCIsIml0ZW0iLCJpIiwibGkiLCJhcHBlbmRUbyIsImFkZENsYXNzIiwidGV4dCIsImlzRW1haWwiLCJyZWdleCIsInRlc3QiLCJnZXRGb3JtYXR0ZWREYXRlVXRpbCIsInRTdGFtcCIsInNob3dGdWxsVGltZSIsImRhdGUiLCJEYXRlIiwibW9udGgiLCJnZXRNb250aCIsImRheSIsImdldERhdGUiLCJob3VyIiwiZ2V0SG91cnMiLCJtaW4iLCJnZXRNaW51dGVzIiwic2VjIiwiZ2V0U2Vjb25kcyIsImdldEZ1bGxZZWFyIiwiVXNlclRhc2tNYW5hZ2VyIiwicG9zdFN0YXJ0Rm9sbG93aW5nTGlzdCIsInBvc3RTdGFydENoYXRCb3QiLCJhc0hlYWRlciIsImRldGFpbHMiLCJ0YXNrSWQiLCJTVFJBVEVHWV9UWVBFIiwiU1RSQVRFR1lfU1VCVFlQRSIsImdldFRhc2tzRGF0YSIsImluaXQiLCJmaWxsTGlzdE1ldGEiLCJpc1J1bnMiLCJsZW5ndGgiLCJwcm9ncmVzcyIsInRhc2tfaWQiLCJzdGF0dXMiLCJzdGF0ZSIsInJlYXNvbiIsInRpbWVzdGFtcCIsImluaXRIYW5kbGVycyIsImhvbGRlcnMiLCJfcGF0aCIsIiRidG5TdG9wVGFzayIsIiRidG5EZWxUYXNrIiwiZ2V0VGFza0lEIiwiZSIsImJ0biIsInRhcmdldCIsImNsb3Nlc3QiLCJkYXRhIiwib24iLCJjb25zb2xlIiwibG9nIiwic3RvcFRhc2tCeUlEIiwidGhlbiIsInJlc3VsdCIsImRlbGV0ZVRhc2tCeUlEIiwiJHJ1bnMiLCIkc3RvcHBlZCIsImdldE1ldGFkYXRhIiwibWV0YSIsIndpbmRvdyIsIlB1YlN1YiIsInN1YnNjcmliZSIsImV2ZW50TmFtZSIsIk5ldHdvcmsiLCIkZWwiLCJtZXNzYWdlIiwicmVzcG9uc2UiLCJlcnJvciIsIkVycm9yIiwic3RhdHVzVGV4dCIsIlVSTCIsIk9QVFMiLCJmZXRjaCIsIlByb21pc2UiLCJhbGwiLCJqc29uIiwib2siLCJjYkVycm9yRGVmYXVsdCIsImNoZWNrU3RhdHVzIiwiaW5pdFN0ZXBzIiwiZm9ybVNlbGVjdG9yIiwid2l6YXJkQ2ZnIiwiJGZvcm0iLCJzdGVwUmVkdWNlciIsIm9uU3VibWl0SGFuZGxlciIsInJlbW92ZUNsYXNzIiwiZmluZCIsImZhZGVJbiIsInBhcmVudF9maWVsZHNldCIsInBhcmVudHMiLCJuZXh0X3N0ZXAiLCJyYWRpb0J0bkFjdGl2ZSIsImluZGV4IiwiZWFjaCIsInZhbCIsImZhZGVPdXQiLCJuZXh0IiwicHJldiIsInByZXZlbnREZWZhdWx0IiwibW9kaWZ5QWNjTGlzdCIsInJhZGlvQnRuQXBwZW5kIiwiaWR4IiwicmFkaW9CdG5XcmFwIiwiJGFjY291bnRzTGlzdCIsIiRsaSIsIndyYXBJbm5lciIsIiRwYXJlbnRGaWVsZHNldCIsInByb3AiLCJoZWFkZXIiLCJidXJnZXJNZW51IiwiaW5zdGFncmFtQWNjb3VudHMiLCJmb2xsb3ciLCJjaGF0Qm90IiwiYXV0b2dyZWV0aW5nIiwic2VsZWN0b3JDc3NMb2dpbkZvcm0iLCJfbG9naW5Cb3giLCJfZm9ybUlkIiwiX2J1dHRvblN1Ym1pdElkIiwiX3Nob3dMb2dpbkJveEJ0bklkIiwic2VsZWN0b3JDc3NMb2dpbkZvcm1JbnN0YWdyYW0iLCJpc0xvZ2luSW5zdGFncmFtIiwic2V0UHViU3ViIiwiaW5pdEhlYWRlciIsIndpemFyZEZvcm0iLCJjaGF0Qm90U3RhdHVzIiwiY2hhdEJvdExvZ3MiLCJ1c2VybmFtZVNlbGVjdGVkIiwidXNlckxpc3RJbnN0YWdyYW0iLCJzZWxlY3RDbHMiLCJmaWVsZHMiLCJrZXlXb3JkcyIsInRyaW0iLCJyZXBsYWNlIiwic3BsaXQiLCJmaWx0ZXIiLCJyZXFCb2R5Iiwia2V5V29yZCIsImFuc3dlciIsInB1c2giLCJuUmVxQm9keSIsInJlcyIsIm1zZyIsImZpbGxMaXN0VXNlcnMiLCIkd3JhcHBlciIsImluaXRDaGF0TXNnIiwidHBsVGV4dEZpZWxkIiwibGFzdFRleHRGaWVsZCIsImxhc3QiLCJpbnNlcnRBZnRlciIsInRyaWdnZXIiLCJwdWJsaXNoIiwic2V0VXNlck5hbWUiLCJzdGVwTnVtYmVyIiwiZGF0YU9iaiIsImdldFVzZXJuYW1lIiwiY3VycmVudFBhZ2UiLCJpbnRlcnZhbElkIiwiaW5pdEhhbmRsZXJQYWdpbmF0aW9uIiwiJHByZXZpb3VzIiwiJG5leHQiLCJwYWdpbmF0aW9uIiwic2V0dGluZ3MiLCJsYXN0UGFnZSIsInBhZ2VzIiwidXBkYXRlQnV0dG9ucyIsImN1cnJlbnRBY3RpdmVJZHgiLCJwcmV2aW91cyIsImdldExvZ3NEYXRhIiwicGFyZW50IiwiaGFzQ2xhc3MiLCJwYXJzZUludCIsImFkZFBhZ2luYXRpb24iLCJ0cGxQcmV2aW91cyIsInRwbE5leHQiLCJjbGVhclBhZ2luYXRpb24iLCJjdXJyZW50IiwiJHdyYXBwZXJQYWdpbmF0aW9uIiwibG9ncyIsImxldmVsIiwiZ2V0TG9nc0NoYXRCb3QiLCJ1cGRhdGVJbnRlcnZhbCIsImludm9rZV9pbl9taWxsaXMiLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJfc2VsZWN0Q2xzIiwid3JhcHBlcnMiLCJjb25maXJtYXRpb25XaXRoUmVkaXJlY3QiLCJwYXJzZVF1ZXJ5U3RyaW5nIiwibG9jYXRpb24iLCJzZWFyY2giLCJvYmpVUkwiLCJSZWdFeHAiLCIkMCIsIiQxIiwiJDIiLCJwYXJhbXMiLCJzZW5kQ29uZmlybSIsImNvbmZpcm0iLCJjdXN0b21lcnNEYXRhU3RyaW5nIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0VGltZW91dCIsInJlZGlyZWN0IiwicGF0aG5hbWUiLCJpbmRleE9mIiwiZm9sbG93U3RhdHVzIiwidXNlcl9kZWZhdWx0X2NvbmZpZyIsInRhc2tfbW9kZSIsImNvdW50IiwicGVyY2VudCIsImdldERhdGFTdGVwMiIsInVzZXJzTmFtZSIsImdldERhdGFTdGVwMyIsInVzZXJzIiwiZmlsbFNwZWVkTGlzdCIsInRhc2tNb2RlcyIsImNmZyIsInRhc2tfbW9kZXMiLCJyYWRpb0J0blJlZHVjZXIiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJnZXREZWZhdWx0Q29uZmlncyIsImZvdW5kIiwiYXR0ciIsInRvVXBwZXJDYXNlIiwiZ2VuZGVyVmFsIiwiY3JpdGVyaWEiLCJnZW5kZXIiLCJsaW1pdCIsImZvcm1zIiwiaGF2ZV9wb3N0cyIsImZyb20iLCJ0byIsImhhdmVfZm9sbG93ZXJzIiwiaGF2ZV9mb2xsb3dpbmdzIiwiZm9jdXMiLCJzZWxlY3RvcnNFbCIsImxlZnRNZW51IiwiaGFtYnVyZ2VyQnV0dG9uQ2xzIiwiaGFtYnVyZ2VyTWVudUNscyIsImhhbWJ1cmdlck1lbnVPcGVuZWRDbGFzcyIsImhhbWJ1cmdlckJ1dHRvbkNsb3NlQ2xhc3MiLCJyaWdodE1lbnUiLCJzdWJIZWFkZXIiLCJ0b2dnbGVIYW1idXJnZXJNZW51IiwibWVudU5hbWUiLCJ0b2dnbGVDbGFzcyIsImJpbmQiLCJzZWxlY3RvckxvZ2luU3RhdGUiLCJzZWxlY3RvckVtYWlsQ29uZmlybVN0YXRlIiwiY2xvc2VDbGFzcyIsIm9wZW5lZENsYXNzIiwiZW1haWxOb3RDb25maXJtZWQiLCIkZW1haWxuTXNnIiwiY3NzIiwib25Mb2dpblN1YnNjcmliZSIsIiRsb2dpbk1zZyIsImlzRW1haWxDb25maXJtZWQiLCJzaG93TG9nb3V0IiwiaXNMb2dnZWQiLCJpc0xvZ2dlZEluIiwic2hvdyIsIm9sZFVSTCIsInJlZmVycmVyIiwiaW5jbHVkZXMiLCIkbG9naW5Cb3giLCIkcmVnaXN0ZXJCb3giLCJoaWRlIiwiYWRkSW5zdGFncmFtQWNjb3VudCIsIm5ld0Zvcm1EYXRhIiwiJG1zZ0xpc3QiLCJjYXRjaCIsImVyciIsImFkZE9uTG9hZEhhbmRsZXJzIiwiJG1vZGFsQm9keSIsImZvcm0iLCJjc3NWYWxpZGF0aW9uQ2xhc3MiLCJjaGVja1ZhbGlkaXR5IiwicmVwb3J0VmFsaWRpdHkiLCJhZGRMaXN0SGFuZGxlciIsIiRidXR0b24iLCJzZW5kVG8iLCJzdG9wUHJvcGFnYXRpb24iLCJtb2RhbCIsImdldFNlY3VyaXR5S2V5IiwiJG1vZGFsIiwiJGtleUlucHV0IiwiY29uZmlybVNlY3VyaXR5S2V5IiwibGVuIiwibWluTGVuIiwiTnVtYmVyIiwib25IaWRlTW9kYWwiLCJyZW1vdmVBdHRyIiwidHlwZVNlbGVjdGVkIiwiY2hlY2twb2ludFR5cGVBY3RpdmUiLCJtb2RhbENvbmZpZyIsIl9jb25maWciLCJkZWZhdWx0QXZhdGFyU3JjIiwiaW5zZXJ0SXRlbSIsImNzc0NscyIsImxpVHBsIiwic3RhdHMiLCJpbmZvIiwidHBsIiwiY2hlY2twb2ludCIsIm1ldGFkYXRhIiwicmVzZW5kUmVxdWVzdCIsImlzU2VuZFJlcU9uY2UiLCJjaGVja1Jlc3BvbnNlIiwiaXNSZXNlbmRSZXF1ZXN0IiwiYWNjb3VudHMiLCJMb2dpbkZvcm0iLCJzZWxlY3RvckNzcyIsIiRlbWFpbCIsIiR0ZXh0QXJlYURlc2NyaXB0aW9uIiwidXNlckxvZ2luSGVhZGVyIiwiX2Zvcm1EYXRhIiwic3VibWl0Rm9ybSIsImZvcm1EYXRhT2JqIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJsb2dPdXQiLCJiaW5kRXZlbnRzIiwiJHNob3dMb2dpbkJveEJ0bklkIiwiJGJ1dHRvblN1Ym1pdCIsImV2ZW50IiwiaXNMb2dpbkJ0bkNsaWNrIiwiaXNBZGRJbnN0YWdyYW1CdG5DbGlja2VkIiwiaXNJbk1lc3NhZ2VQYWdlIiwiJHVzZXJMaXN0IiwicmVhZHkiLCJtIiwiJHBpY2tlciIsInN0eWxlIiwic3R5bGVOZXciLCJpc0FwcGVudFByZXZNc2ciLCJpbnNlcnRNc2ciLCJ0b0xvd2VyQ2FzZSIsImFkZFRvTGlzdCIsImluc2VydEJlZm9yZSIsInNpZGUiLCJjdXJzb3IiLCJwcmV2X2N1cnNvciIsInVzZXJEYXRhIiwiY29udmVyc2F0aW9uSWQiLCJzdGFydEJ1dHRvblNwaW5uZXIiLCJnZXRNZXRhZGF0YURldGFpbENvbnZlcnNhdGlvbiIsInN0b3BCdXR0b25TcGlubmVyIiwiZmlsbFVzZXJMaXN0IiwiY29udmVyc2F0aW9uRGV0YWlsIiwiYWRkQ29udmVyc2F0aW9ucyIsImNvbnZlcnNhdGlvbnMiLCJnZXRBbmRGaWxsVXNlckxpc3QiLCJpc0FjdGl2ZUZpcnN0IiwicHJldkFjdGl2ZURpYWxvZ0lkIiwic29ydCIsImEiLCJiIiwibG9jYWxlQ29tcGFyZSIsImdldEFuZEZpbGxDb252ZXJzYXRpb24iLCJpc1Njcm9sbERvd24iLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiYWRkSGFuZGxlcnMiLCIkdGV4dEFyZWEiLCJhZGQiLCJwb3N0TWV0YWRhdGFEZXRhaWxDb252ZXJzYXRpb24iLCJyZXN1bHRGcm9tU2VydmVyIiwiJGRpYWxvZyIsInNlbGVjdG9yQ2xzIiwic3VibWl0QnRuIiwiUmVnaXN0ZXJGb3JtIiwiJHBhc3N3b3JkIiwiJHBhc3N3b3JkQ29uZmlybSIsInBhc3N3b3JkQ29uZmlybSIsInJlZ2lzdGVyIiwicmVnaXN0ZXJCb3giLCIkYnRuIiwiaXMiLCJpc1JlZ0J0bkNsaWNrIiwiVXNlckNvbnZlcnNhdGlvbiIsImNsYXNzZXMiLCJpbmxpbmUiLCJvdmVybGF5IiwiZml4ZWQiLCJidXR0b24iLCJTcGlubmVyIiwiX2NmZyIsIm5ld0NscyIsInByZXBlbmQiLCJleHRlbmQiLCJwcmV3Q2xzIiwic3Bpbm5lckluc3RhbmNlIiwiTG9naW5QYWdlIiwiaHJlZiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoRU8sSUFBTUEsd0JBQVE7QUFDakJDLFNBQUs7QUFDREMsaUJBQVM7QUFDTEMsd0JBQVksV0FEUDtBQUVMQywyQkFBZSxDQUFDLGdCQUFELENBRlY7QUFHTEMsc0JBQVUsVUFITDtBQUlMQyx5QkFBYSxDQUFDLGtCQUFELENBSlI7QUFLTEMsd0JBQVksZUFMUDtBQU1MQywyQkFBZSxDQUFDLHVCQUFEO0FBTlYsU0FEUjtBQVNEQyxjQUFNLDJCQVRMO0FBVURDLHNCQUFjLHFCQVZiO0FBV0RDLGVBQU8sMEJBWE47QUFZ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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaW5kZXgtYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMzEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDQyNDMxNWI0ZmYwZjVlOGM5MTJlIiwiZXhwb3J0IGNvbnN0IENPTlNUID0ge1xyXG4gICAgdXJsOiB7XHJcbiAgICAgICAgdG1UeXBlczoge1xyXG4gICAgICAgICAgICBmb2xsb3dpbmdUOiAnRk9MTE9XSU5HJyxcclxuICAgICAgICAgICAgZm9sbG93aW5nU3ViVDogWydGT0xMT1dJTkdfTElTVCddLFxyXG4gICAgICAgICAgICBjaGF0Qm90VDogJ0NIQVRfQk9UJyxcclxuICAgICAgICAgICAgY2hhdEJvdFN1YlQ6IFsnREVGQVVMVF9DSEFUX0JPVCddLFxyXG4gICAgICAgICAgICBhdXRvZ3JlZXRUOiAnQVVUT19HUkVFVElORycsXHJcbiAgICAgICAgICAgIGF1dG9ncmVldFN1YlQ6IFsnREVGQVVMVF9BVVRPX0dSRUVUSU5HJ11cclxuICAgICAgICB9LFxyXG4gICAgICAgIGJhc2U6ICdodHRwOi8vYXBpLmx1eGdyYW0ucnUvdjEvJyxcclxuICAgICAgICByZWdpc3RyYXRpb246ICdyZWdpc3RyYXRpb24vYmFzaWMvJyxcclxuICAgICAgICBsb2dpbjogJ3JlZ2lzdHJhdGlvbi9iYXNpYy9sb2dpbicsXHJcbiAgICAgICAgY29uZmlybWF0aW9uOiAncmVnaXN0cmF0aW9uL2Jhc2ljL2NvbmZpcm1hdGlvbj90b2tlbicsXHJcbiAgICAgICAgaW5zdGFncmFtX2FkZEFjY291bnQ6ICdpbnN0YWdyYW0tYWNjb3VudHMvJywgLy8gdG9ETzogY2hlY2sgaXMgcmVkdW5kYW50XHJcbiAgICAgICAgaW5zdGFncmFtQWNjb3VudF9nZXRNZXRhRGF0YTogJ2luc3RhZ3JhbS1hY2NvdW50cy9tZXRhJyxcclxuICAgICAgICBpbnN0YWdyYW1BY2NvdW50X2NoZWNrcG9pbnQ6ICdpbnN0YWdyYW0tYWNjb3VudHMvY2hlY2twb2ludC8nLFxyXG4gICAgICAgIGluc3RhZ3JhbUFjY291bnRfY29uZmlybUtleTogJ2luc3RhZ3JhbS1hY2NvdW50cy9jaGVja3BvaW50LycsXHJcbiAgICAgICAgaW5zdGFncmFtRGlyZWN0X2dldE1ldGFEYXRhOiAnaW5zdGFncmFtLWRpcmVjdC9tZXRhJyxcclxuICAgICAgICBpbnN0YWdyYW1EaXJlY3RfcG9zdE1lc3NhZ2U6ICdpbnN0YWdyYW0tZGlyZWN0LycsXHJcbiAgICAgICAgaW5zdGFncmFtVGFza01hbmFnZXI6ICdpbnN0YWdyYW0tdGFzay1tYW5hZ2VyLycsXHJcbiAgICAgICAgaW5zdGFncmFtVGFza01hbmFnZXJfZ2V0TWV0YURhdGE6ICdpbnN0YWdyYW0tdGFzay1tYW5hZ2VyL21ldGEnLFxyXG4gICAgICAgIGluc3RhZ3JhbVRhc2tNYW5hZ2VyX2dldFRhc2tUeXBlczogJ2luc3RhZ3JhbS10YXNrLW1hbmFnZXIvdGFzay90eXBlcycsXHJcbiAgICAgICAgaW5zdGFncmFtVGFza01hbmFnZXJfZ2V0VGFza0J5VHlwZXM6ICh0eXBlLCBzdWJ0eXBlKSA9PiBgaW5zdGFncmFtLXRhc2stbWFuYWdlci9tZXRhL3R5cGUvJHt0eXBlfS9zdWJ0eXBlLyR7c3VidHlwZX1gLFxyXG4gICAgICAgIGluc3RhZ3JhbVRhc2tNYW5hZ2VyX2dldERlZmF1bHRDb25maWdzOiAnaW5zdGFncmFtLXRhc2stbWFuYWdlci9jb25maWcvdHlwZScsIC8vIHtTVFJBVEVHWV9UWVBFfS9zdWJ0eXBlL3tTVFJBVEVHWV9TVUJUWVBFfVxyXG4gICAgICAgIGluc3RhZ3JhbVRhc2tNYW5hZ2VyX3Bvc3RTdGFydEZvbGxvd2luZ0xpc3Q6ICdpbnN0YWdyYW0tdGFzay1tYW5hZ2VyL3Rhc2snLFxyXG4gICAgICAgIGluc3RhZ3JhbVRhc2tNYW5hZ2VyX3B1dFN0b3BUYXNrQnlJRDogaWQgPT4gYGluc3RhZ3JhbS10YXNrLW1hbmFnZXIvdGFzay8ke2lkfWAsXHJcbiAgICAgICAgaW5zdGFncmFtVGFza01hbmFnZXJfZGVsUmVtb3ZlVGFza0J5SUQ6IGlkID0+IGBpbnN0YWdyYW0tdGFzay1tYW5hZ2VyL3Rhc2svJHtpZH1gLFxyXG4gICAgICAgIGluc3RhZ3JhbVRhc2tNYW5hZ2VyX3Bvc3RTdGFydENoYXRCb3Q6ICdpbnN0YWdyYW0tdGFzay1tYW5hZ2VyL3Rhc2snLFxyXG4gICAgICAgIGluc3RhZ3JhbVRhc2tNYW5hZ2VyX2dldExvZ3NDaGF0Qm90OiAocGF0aCwgcGFnZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB7dHlwZSwgc3VidHlwZSwgdXNlcm5hbWV9ID0gcGF0aDtcclxuICAgICAgICAgICAgcmV0dXJuIGBpbnN0YWdyYW0tdGFzay1tYW5hZ2VyL2xvZ3MvdHlwZS8ke3R5cGV9L3N1YnR5cGUvJHtzdWJ0eXBlfS9hY2NvdW50LyR7dXNlcm5hbWV9JHtwYWdlID8gYD9wYWdlPSR7cGFnZX1gIDogJyd9YDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgdXNlcjoge1xyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgdG9rZW46ICcnXHJcbiAgICB9LFxyXG4gICAgY29va2llU3RvcmFnZToge1xyXG4gICAgICAgIHRva2VuOiAndXNlcl9sb2dnZWQnLFxyXG4gICAgICAgIGVtYWlsQ29uZmlybWVkOiAnZW1haWxfY29uZmlybWVkJ1xyXG4gICAgfSxcclxuICAgIHVpU2VsZWN0b3JzOiB7XHJcbiAgICAgICAgaGVhZGVyTG9naW5Cb3g6ICduYXYgLmxvZ2luLWJveCcsXHJcbiAgICAgICAgaGVhZGVyTmF2TG9naW5CdG46ICduYXYgdWwgbGkgLmpzX2xvZ2luJyxcclxuICAgICAgICBoZWFkZXJSZWdCb3g6ICduYXYgLnJlZ2lzdGVyLWJveCcsXHJcbiAgICAgICAgaGVhZGVyUmVnQnRuOiAnbmF2IHVsIGxpIC5qc19yZWdpc3RlcicsXHJcbiAgICAgICAgaW5zdGFncmFtOiB7XHJcbiAgICAgICAgICAgIGFkZEFjY291bnRCdG5TZWxlY3RvcjogJyNqc19zaG93LWxvZ2luLWJveCcsXHJcbiAgICAgICAgICAgIGFkZEFjY291bnRCdG5JZDogJ2pzX3Nob3ctbG9naW4tYm94J1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBldmVudHM6IHtcclxuICAgICAgICBVU0VSX0xPR0dFRDogJ3VzZXJfbG9nZ2VkJyxcclxuICAgICAgICBVU0VSX0xPR09VVDogJ3VzZXJfbG9nb3V0JyxcclxuICAgICAgICBVU0VSX0VNQUlMX0NPTkZJUk1FRDogJ3VzZXJfZW1haWxfY29uZmlybWVkJyxcclxuICAgICAgICBTVE9QX0ZJWEVEX1NQSU5ORVI6ICdzdG9wX2ZpeGVkX3NwaW5uZXInLFxyXG4gICAgICAgIG1lc3NhZ2VzOiB7XHJcbiAgICAgICAgICAgIFJFQ0lFVkVfTkVXX01FU1NBR0U6ICdyZWNlaXZlX25ld19tZXNzYWdlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5zdGFncmFtQWNjb3Vuczoge1xyXG4gICAgICAgICAgICBJTlNUQUdSQU1fQUNDT1VOU19SRU5ERVJFRDogJ2luc3RhZ3JhbV9hY2NvdW5zX3JlbmRlcmVkJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGFza3M6IHtcclxuICAgICAgICAgICAgTkVXX1RBU0tfQ1JFQVRFRDogJ25ld190YXNrX2NyZWF0ZWQnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGdldFBhdGgobmFtZSwgaWQpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMudXJsW25hbWVdID09PSAnZnVuY3Rpb24nICYmIGlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVybC5iYXNlICsgdGhpcy51cmxbbmFtZV0oaWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy51cmwuYmFzZSArIHRoaXMudXJsW25hbWVdO1xyXG4gICAgfSxcclxuICAgIGdldFBhdGhUeXBlU3VidHlwZShuYW1lLCBwYXRoLCBwYWdlKSB7XHJcbiAgICAgICAgY29uc3Qge3R5cGUsIHN1YnR5cGUsIHVzZXJuYW1lfSA9IHBhdGg7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnVybFtuYW1lXSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlICYmIHN1YnR5cGUpIHtcclxuICAgICAgICAgICAgaWYgKHVzZXJuYW1lICYmIHBhZ2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnVybC5iYXNlICsgdGhpcy51cmxbbmFtZV0ocGF0aCwgcGFnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHVzZXJuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy51cmwuYmFzZSArIHRoaXMudXJsW25hbWVdKHBhdGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVybC5iYXNlICsgdGhpcy51cmxbbmFtZV0odHlwZSwgc3VidHlwZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnVybC5iYXNlICsgdGhpcy51cmxbbmFtZV07XHJcbiAgICB9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tb24vanMtc2VydmljZXMvY29uc3RzLmpzIiwiXG5jb25zdCBDb29raWVTcnYgPSB7XG4gICAgZ2V0OiBuYW1lID0+IHtcbiAgICAgICAgY29uc3QgYyA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChgKD86KD86XnwuKjsgKikke25hbWV9ICo9ICooW147XSopLiokKXxeLiokYClbMV07XG4gICAgICAgIGlmIChjKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGMpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBzZXQ6IChuYW1lLCB2YWx1ZSwgb3B0cyA9IHtwYXRoOiAnLycsIGRheXM6IDM2NX0pID0+IHtcbiAgICAgICAgaWYgKG9wdHMuZGF5cykge1xuICAgICAgICAgICAgb3B0c1snbWF4LWFnZSddID0gb3B0cy5kYXlzICogNjAgKiA2MCAqIDI0O1xuICAgICAgICAgICAgZGVsZXRlIG9wdHMuZGF5cztcbiAgICAgICAgfVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgb3B0cyA9IE9iamVjdC5lbnRyaWVzKG9wdHMpLnJlZHVjZSgoc3RyLCBbaywgdl0pID0+IGAke3N0cn07ICR7a309JHt2fWAsICcnKTtcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gYCR7bmFtZX09JHtlbmNvZGVVUklDb21wb25lbnQodmFsdWUpICsgb3B0c31gO1xuICAgIH0sXG4gICAgcmVtb3ZlOiAobmFtZSwgb3B0cykgPT4gQ29va2llU3J2LnNldChuYW1lLCAnJywgeydtYXgtYWdlJzogLTEsIHBhdGg6ICcvJywgZGF5czogMCwgLi4ub3B0c30pXG4gICAgLy8gcGF0aCAmIGRvbWFpbiBtdXN0IG1hdGNoIGNvb2tpZSBiZWluZyBkZWxldGVkXG59O1xuXG4vKlxuY2xhc3MgQ29va2llU3RvcmFnZSB7XG4gICAgcmVhZChrZXkpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSAkLmNvb2tpZShrZXkpO1xuICAgICAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IG51bGwgOiB2YWx1ZTtcbiAgICB9XG5cbiAgICBzZXRDb29raWUobmFtZSwgdmFsdWUsIGRheXMpIHtcbiAgICAgICAgbGV0IGV4cGlyZXMgPSAnJztcbiAgICAgICAgaWYgKGRheXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKGRheXMgKiAyNCAqIDYwICogNjAgKiAxMDAwKSk7XG4gICAgICAgICAgICBleHBpcmVzID0gYDsgZXhwaXJlcz0ke2RhdGUudG9VVENTdHJpbmcoKX1gO1xuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGAke25hbWV9ID0keyh2YWx1ZSB8fCAnJykgKyBleHBpcmVzfTsgcGF0aD0vYDtcbiAgICB9XG5cbiAgICBnZXRDb29raWUobmFtZSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGA7ICR7ZG9jdW1lbnQuY29va2llfWA7XG4gICAgICAgIGNvbnN0IHBhcnRzID0gdmFsdWUuc3BsaXQoYDsgJHtuYW1lfT1gKTtcbiAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCA9PSAyKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFydHMucG9wKCkuc3BsaXQoJzsnKS5zaGlmdCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuKi9cblxuZXhwb3J0IGRlZmF1bHQgQ29va2llU3J2O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb29raWUuanMiLCIvLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHtDT05TVH0gZnJvbSAnLi9jb25zdHMnO1xuaW1wb3J0IE5ldHdvcmsgZnJvbSAnLi9uZXR3b3JrJztcbmltcG9ydCBDb29raWVTdG9yYWdlIGZyb20gJy4vY29va2llJztcblxuY2xhc3MgVXNlciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5uZXR3b3JrID0gbmV3IE5ldHdvcmsoKTtcbiAgICAgICAgdGhpcy5jb29raWVTdG9yYWdlID0gQ29va2llU3RvcmFnZTtcbiAgICAgICAgdGhpcy5zZXR0aW5nUG9zdCA9IHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGlzTG9nZ2VkSW4oKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuZ2V0VG9rZW4oKTtcbiAgICB9XG5cbiAgICBpc0VtYWlsQ29uZmlybWVkKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuY29va2llU3RvcmFnZS5nZXQoQ09OU1QuY29va2llU3RvcmFnZS5lbWFpbENvbmZpcm1lZCkgPT09ICdjb25maXJtZWQnKTtcbiAgICB9XG5cbiAgICBnZXRUb2tlbigpIHtcbiAgICAgICAgY29uc3QgY29va2llVG9rZW4gPSB0aGlzLmNvb2tpZVN0b3JhZ2UuZ2V0KENPTlNULmNvb2tpZVN0b3JhZ2UudG9rZW4pO1xuICAgICAgICByZXR1cm4gY29va2llVG9rZW47XG4gICAgfVxuXG4gICAgbG9naW4oZm9ybURhdGEsIGNiRXJyb3IpIHtcbiAgICAgICAgY29uc3Qgc2V0dGluZyA9IHsuLi50aGlzLnNldHRpbmdQb3N0LCBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSl9O1xuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KENPTlNULmdldFBhdGgoJ2xvZ2luJyksIHNldHRpbmcsIGNiRXJyb3IpO1xuICAgIH1cblxuICAgIGFkZEluc3RhZ3JhbUFjY291bnQoZm9ybURhdGEsIGNiRXJyb3IpIHtcbiAgICAgICAgY29uc3Qgc2V0dGluZyA9IHtcbiAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdC5oZWFkZXJzLFxuICAgICAgICAgICAgICAgIHRva2VuOiB0aGlzLmdldFRva2VuKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1fYWRkQWNjb3VudCcpLCBzZXR0aW5nLCBjYkVycm9yKTtcbiAgICB9XG5cbiAgICBnZXRJbnN0YWdyYW1BY2NvdW50KCkge1xuICAgICAgICBjb25zdCBzZXR0aW5nID0ge1xuICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdCxcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdC5oZWFkZXJzLFxuICAgICAgICAgICAgICAgIHRva2VuOiB0aGlzLmdldFRva2VuKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1fYWRkQWNjb3VudCcpLCBzZXR0aW5nKTtcbiAgICB9XG5cbiAgICBjb25maXJtKHRva2VuKSB7XG4gICAgICAgIC8vIGNvbnN0IGNvbmZpcm1VcmwgPSBDT05TVC5nZXRQYXRoKCdjb25maXJtYXRpb24nKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChgJHtDT05TVC5nZXRQYXRoKCdjb25maXJtYXRpb24nKSArIHRva2VufWApO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyKGZvcm1EYXRhKSB7XG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSB7XG4gICAgICAgICAgICAuLi50aGlzLnNldHRpbmdQb3N0LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QoQ09OU1QuZ2V0UGF0aCgncmVnaXN0cmF0aW9uJyksIHNldHRpbmcpO1xuICAgIH1cblxuICAgIGdldE1ldGFkYXRhKHRva2VuLCBjYkVycm9yKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QoYCR7Q09OU1QuZ2V0UGF0aCgnaW5zdGFncmFtQWNjb3VudF9nZXRNZXRhRGF0YScpfWAsIHtoZWFkZXJzOiB7dG9rZW59fSwgY2JFcnJvcik7XG4gICAgfVxuXG4gICAgZ2V0U2VjdXJpdHlLZXkodXNlcm5hbWUsIGNoZWNrcG9pbnRUeXBlKSB7XG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSB7XG4gICAgICAgICAgICAuLi50aGlzLnNldHRpbmdQb3N0LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyd0eXBlJzogY2hlY2twb2ludFR5cGV9KSwgLy8gdG9kbzogdG1wIHNldCwgaXQgc2hvdWxkIGJlICd0eXBlJ1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QuaGVhZGVycyxcbiAgICAgICAgICAgICAgICAndG9rZW4nOiB0aGlzLmdldFRva2VuKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChgJHtDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1BY2NvdW50X2NoZWNrcG9pbnQnKX0ke3VzZXJuYW1lfWAsIHNldHRpbmcpO1xuICAgIH1cblxuICAgIGNvbmZpcm1TZWN1cml0eUtleShrZXksIHVzZXJuYW1lKSB7XG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSB7XG4gICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeydzZWN1cml0eV9jb2RlJzoga2V5fSksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdC5oZWFkZXJzLFxuICAgICAgICAgICAgICAgICd0b2tlbic6ICczZTMyMWU2MDAyOTcxMWU5OTI2NGEwNDgxYzhlMTdkNCcgLy8gdG9kbzogdGhpcy5nZXRUb2tlbigpXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QoYCR7Q09OU1QuZ2V0UGF0aCgnaW5zdGFncmFtQWNjb3VudF9jb25maXJtS2V5Jyl9JHt1c2VybmFtZX1gLCBzZXR0aW5nKTtcbiAgICB9XG5cbn1cblxubGV0IHVzZXJJbnN0YW5jZSA9IG51bGw7XG5cbmlmICghdXNlckluc3RhbmNlKSB7XG4gICAgdXNlckluc3RhbmNlID0gbmV3IFVzZXIoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlckluc3RhbmNlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy91c2VyLmpzIiwiLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5Jztcbi8vIGltcG9ydCB7Q09OU1R9IGZyb20gJy4vY29uc3RzJztcblxuZnVuY3Rpb24gdmlld1V0aWxzKCkge1xuICAgIGZ1bmN0aW9uIHNob3dJbmZvTWVzc2FnZShzZWxlY3RvciwgbWVzc2FnZTEsIG1lc3NhZ2UyKSB7XG4gICAgICAgICQoc2VsZWN0b3IpLmVtcHR5KClcbiAgICAgICAgICAgIC5hcHBlbmQoYCR7KG1lc3NhZ2UxKSA/IGA8cD5zdGF0dXM6ICR7bWVzc2FnZTF9PC9wPmAgOiAnJ31gKVxuICAgICAgICAgICAgLmFwcGVuZChgPHA+JHttZXNzYWdlMn0gPC9wPmApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpbGxMaXN0KCRsaXN0LCBkYXRhQXJyYXkpIHtcbiAgICAgICAgY29uc3QgaXRlbXMgPSBkYXRhQXJyYXk7XG4gICAgICAgIGNvbnN0IGNMaXN0ID0gJGxpc3Q7XG4gICAgICAgIGNMaXN0LmVtcHR5KCk7XG4gICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxpID0gJCgnPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCI+PC9saT4nKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhjTGlzdCk7XG4gICAgICAgICAgICAkKCc8YS8+JykuYWRkQ2xhc3MoJ3VpLWFsbCcpXG4gICAgICAgICAgICAgICAgLnRleHQoaXRlbS51c2VybmFtZSlcbiAgICAgICAgICAgICAgICAuYXBwZW5kVG8obGkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0VtYWlsKGVtYWlsKSB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlICovXG4gICAgICAgIGNvbnN0IHJlZ2V4ID0gL14oW2EtekEtWjAtOV8uKy1dKStcXEAoKFthLXpBLVowLTktXSkrXFwuKSsoW2EtekEtWjAtOV17Miw0fSkrJC87XG4gICAgICAgIHJldHVybiByZWdleC50ZXN0KGVtYWlsKTtcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSAqL1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEZvcm1hdHRlZERhdGVVdGlsKHRTdGFtcCwgc2hvd0Z1bGxUaW1lKSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0U3RhbXApO1xuXG4gICAgICAgIGxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XG4gICAgICAgIGxldCBkYXkgPSBkYXRlLmdldERhdGUoKTtcbiAgICAgICAgbGV0IGhvdXIgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgICAgIGxldCBtaW4gPSBkYXRlLmdldE1pbnV0ZXMoKTtcbiAgICAgICAgbGV0IHNlYyA9IGRhdGUuZ2V0U2Vjb25kcygpO1xuXG4gICAgICAgIG1vbnRoID0gKG1vbnRoIDwgMTAgPyAnMCcgOiAnJykgKyBtb250aDtcbiAgICAgICAgZGF5ID0gKGRheSA8IDEwID8gJzAnIDogJycpICsgZGF5O1xuICAgICAgICBob3VyID0gKGhvdXIgPCAxMCA/ICcwJyA6ICcnKSArIGhvdXI7XG4gICAgICAgIG1pbiA9IChtaW4gPCAxMCA/ICcwJyA6ICcnKSArIG1pbjtcbiAgICAgICAgc2VjID0gKHNlYyA8IDEwID8gJzAnIDogJycpICsgc2VjO1xuXG4gICAgICAgIGxldCBzdHIgPSAnJztcbiAgICAgICAgaWYgKCFzaG93RnVsbFRpbWUpIHtcbiAgICAgICAgICAgIHN0ciA9IGAke2hvdXJ9OiR7bWlufWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHIgPSBgJHtkYXRlLmdldEZ1bGxZZWFyKCl9LSR7bW9udGh9LSR7ZGF5fV8ke2hvdXJ9OiR7bWlufToke3NlY31gO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzaG93SW5mb01lc3NhZ2UsXG4gICAgICAgIGZpbGxMaXN0LFxuICAgICAgICBpc0VtYWlsLFxuICAgICAgICBnZXRGb3JtYXR0ZWREYXRlVXRpbFxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZpZXdVdGlscygpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy92aWV3LmpzIiwiLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IHtDT05TVH0gZnJvbSAnLi9jb25zdHMnO1xyXG5pbXBvcnQgTmV0d29yayBmcm9tICcuL25ldHdvcmsnO1xyXG5pbXBvcnQgQ29va2llU3RvcmFnZSBmcm9tICcuL2Nvb2tpZSc7XHJcblxyXG5jbGFzcyBVc2VyVGFza01hbmFnZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubmV0d29yayA9IG5ldyBOZXR3b3JrKCk7XHJcbiAgICAgICAgdGhpcy5jb29raWVTdG9yYWdlID0gQ29va2llU3RvcmFnZTtcclxuICAgICAgICB0aGlzLnNldHRpbmdQb3N0ID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5wb3N0U3RhcnRGb2xsb3dpbmdMaXN0ID0gdGhpcy5wb3N0U3RhcnRGb2xsb3dpbmdMaXN0O1xyXG4gICAgICAgIHRoaXMucG9zdFN0YXJ0Q2hhdEJvdCA9IHRoaXMucG9zdFN0YXJ0Q2hhdEJvdDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpc0xvZ2dlZEluKCkge1xyXG4gICAgLy8gICAgIHJldHVybiAhIXRoaXMuZ2V0VG9rZW4oKTtcclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyBpc0VtYWlsQ29uZmlybWVkKCkge1xyXG4gICAgLy8gICAgIHJldHVybiAodGhpcy5jb29raWVTdG9yYWdlLmdldChDT05TVC5jb29raWVTdG9yYWdlLmVtYWlsQ29uZmlybWVkKSA9PT0gJ2NvbmZpcm1lZCcpO1xyXG4gICAgLy8gfVxyXG4gICAgZ2V0VG9rZW4oYXNIZWFkZXIpIHtcclxuICAgICAgICBjb25zdCBjb29raWVUb2tlbiA9IHRoaXMuY29va2llU3RvcmFnZS5nZXQoQ09OU1QuY29va2llU3RvcmFnZS50b2tlbik7XHJcbiAgICAgICAgcmV0dXJuIChhc0hlYWRlcikgPyB7aGVhZGVyczoge3Rva2VuOiBjb29raWVUb2tlbn19IDogY29va2llVG9rZW47XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWV0YWRhdGEocGF0aCwgY2JFcnJvcikge1xyXG4gICAgICAgIC8vIGNvbnN0IHt0eXBlLCBzdWJUeXBlfSA9IHBhdGg7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChgJHtDT05TVC5nZXRQYXRoVHlwZVN1YnR5cGUoJ2luc3RhZ3JhbVRhc2tNYW5hZ2VyX2dldFRhc2tCeVR5cGVzJywgcGF0aCl9YCxcclxuICAgICAgICAgICAgdGhpcy5nZXRUb2tlbignYXNIZWFkZXInKSwgY2JFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGFza1R5cGVzKGRldGFpbHMsIGNiRXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KGAke0NPTlNULmdldFBhdGgoJ2luc3RhZ3JhbVRhc2tNYW5hZ2VyX2dldFRhc2tUeXBlcycpfWAsXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VG9rZW4oJ2FzSGVhZGVyJyksIGNiRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3BUYXNrQnlJRCh0YXNrSWQsIGNiRXJyb3IpIHtcclxuICAgICAgICBjb25zdCBzZXR0aW5nID0ge1xyXG4gICAgICAgICAgICAuLi50aGlzLnNldHRpbmdQb3N0LFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnNldHRpbmdQb3N0LmhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICAndG9rZW4nOiB0aGlzLmdldFRva2VuKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgdXJsID0gQ09OU1QuZ2V0UGF0aCgnaW5zdGFncmFtVGFza01hbmFnZXJfcHV0U3RvcFRhc2tCeUlEJywgdGFza0lkKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KHVybCxcclxuICAgICAgICAgICAgc2V0dGluZywgY2JFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlVGFza0J5SUQodGFza0lkLCBjYkVycm9yKSB7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZyA9IHtcclxuICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdCxcclxuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdC5oZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgJ3Rva2VuJzogdGhpcy5nZXRUb2tlbigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHVybCA9IENPTlNULmdldFBhdGgoJ2luc3RhZ3JhbVRhc2tNYW5hZ2VyX2RlbFJlbW92ZVRhc2tCeUlEJywgdGFza0lkKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KHVybCxcclxuICAgICAgICAgICAgc2V0dGluZywgY2JFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGVmYXVsdENvbmZpZ3MoY2JFcnJvcikge1xyXG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSB7XHJcbiAgICAgICAgICAgIFNUUkFURUdZX1RZUEU6ICdGT0xMT1dJTkcnLFxyXG4gICAgICAgICAgICBTVFJBVEVHWV9TVUJUWVBFOiAnRk9MTE9XSU5HX0xJU1QnXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCB1cmwgPSBgJHtDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1UYXNrTWFuYWdlcl9nZXREZWZhdWx0Q29uZmlncycpfS8ke2RldGFpbHMuU1RSQVRFR1lfVFlQRX0vc3VidHlwZS8ke2RldGFpbHMuU1RSQVRFR1lfU1VCVFlQRX1gO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QodXJsLFxyXG4gICAgICAgICAgICB0aGlzLmdldFRva2VuKCdhc0hlYWRlcicpLCBjYkVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBwb3N0U3RhcnRGb2xsb3dpbmdMaXN0KGJvZHksIGNiRXJyb3IsIHBhdGgpIHtcclxuICAgICAgICBjb25zdCBzZXR0aW5nID0ge1xyXG4gICAgICAgICAgICAuLi50aGlzLnNldHRpbmdQb3N0LFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnNldHRpbmdQb3N0LmhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICAndG9rZW4nOiB0aGlzLmdldFRva2VuKCksXHJcbiAgICAgICAgICAgICAgICAnWC1BdXRoLVRva2VuJzogJ2UyZjQzMzZhYmVhNDQwNDg5YzUxYzVjMTAyOTRlYTEyJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzZXR0aW5nLmJvZHkgPSBKU09OLnN0cmluZ2lmeShib2R5KTtcclxuICAgICAgICBjb25zdCB1cmwgPSBwYXRoID8gYCR7Q09OU1QuZ2V0UGF0aChwYXRoKX1gIDogYCR7Q09OU1QuZ2V0UGF0aCgnaW5zdGFncmFtVGFza01hbmFnZXJfcG9zdFN0YXJ0Rm9sbG93aW5nTGlzdCcpfWA7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QodXJsLFxyXG4gICAgICAgICAgICBzZXR0aW5nLCBjYkVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBwb3N0U3RhcnRDaGF0Qm90KGJvZHksIGNiRXJyb3IpIHtcclxuICAgICAgICBjb25zdCBwYXRoID0gJ2luc3RhZ3JhbVRhc2tNYW5hZ2VyX3Bvc3RTdGFydENoYXRCb3QnO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc3RTdGFydEZvbGxvd2luZ0xpc3QoYm9keSwgY2JFcnJvciwgcGF0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TG9nc0NoYXRCb3QocGF0aCwgcGFnZSwgY2JFcnJvcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QoYCR7Q09OU1QuZ2V0UGF0aFR5cGVTdWJ0eXBlKCdpbnN0YWdyYW1UYXNrTWFuYWdlcl9nZXRMb2dzQ2hhdEJvdCcsIHBhdGgsIHBhZ2UpfWAsXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VG9rZW4oJ2FzSGVhZGVyJyksIGNiRXJyb3IpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxubGV0IHVzZXJJbnN0YW5jZSA9IG51bGw7XHJcblxyXG5pZiAoIXVzZXJJbnN0YW5jZSkge1xyXG4gICAgdXNlckluc3RhbmNlID0gbmV3IFVzZXJUYXNrTWFuYWdlcigpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VySW5zdGFuY2U7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tb24vanMtc2VydmljZXMvYXBpLXRhc2stbWFuYWdlci5qcyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEwLDIwMTEsMjAxMiwyMDEzLDIwMTQgTW9yZ2FuIFJvZGVyaWNrIGh0dHA6Ly9yb2Rlcmljay5ka1xuICogTGljZW5zZTogTUlUIC0gaHR0cDovL21yZ25yZHJjay5taXQtbGljZW5zZS5vcmdcbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbXJvZGVyaWNrL1B1YlN1YkpTXG4gKi9cblxuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KXtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgUHViU3ViID0ge307XG4gICAgcm9vdC5QdWJTdWIgPSBQdWJTdWI7XG5cbiAgICB2YXIgZGVmaW5lID0gcm9vdC5kZWZpbmU7XG5cbiAgICBmYWN0b3J5KFB1YlN1Yik7XG5cbiAgICAvLyBBTUQgc3VwcG9ydFxuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpe1xuICAgICAgICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBQdWJTdWI7IH0pO1xuXG4gICAgICAgIC8vIENvbW1vbkpTIGFuZCBOb2RlLmpzIG1vZHVsZSBzdXBwb3J0XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpe1xuICAgICAgICBpZiAobW9kdWxlICE9PSB1bmRlZmluZWQgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgICAgICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IFB1YlN1YjsgLy8gTm9kZS5qcyBzcGVjaWZpYyBgbW9kdWxlLmV4cG9ydHNgXG4gICAgICAgIH1cbiAgICAgICAgZXhwb3J0cy5QdWJTdWIgPSBQdWJTdWI7IC8vIENvbW1vbkpTIG1vZHVsZSAxLjEuMSBzcGVjXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IFB1YlN1YjsgLy8gQ29tbW9uSlNcbiAgICB9XG5cbn0oKCB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJiB3aW5kb3cgKSB8fCB0aGlzLCBmdW5jdGlvbiAoUHViU3ViKXtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgbWVzc2FnZXMgPSB7fSxcbiAgICAgICAgbGFzdFVpZCA9IC0xO1xuXG4gICAgZnVuY3Rpb24gaGFzS2V5cyhvYmope1xuICAgICAgICB2YXIga2V5O1xuXG4gICAgICAgIGZvciAoa2V5IGluIG9iail7XG4gICAgICAgICAgICBpZiAoIG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpICl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHRocm93cyB0aGUgcGFzc2VkIGV4Y2VwdGlvbiwgZm9yIHVzZSBhcyBhcmd1bWVudCBmb3Igc2V0VGltZW91dFxuICAgICAqIEBhbGlhcyB0aHJvd0V4Y2VwdGlvblxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7IE9iamVjdCB9IGV4IEFuIEVycm9yIG9iamVjdFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHRocm93RXhjZXB0aW9uKCBleCApe1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gcmVUaHJvd0V4Y2VwdGlvbigpe1xuICAgICAgICAgICAgdGhyb3cgZXg7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsbFN1YnNjcmliZXJXaXRoRGVsYXllZEV4Y2VwdGlvbnMoIHN1YnNjcmliZXIsIG1lc3NhZ2UsIGRhdGEgKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIoIG1lc3NhZ2UsIGRhdGEgKTtcbiAgICAgICAgfSBjYXRjaCggZXggKXtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoIHRocm93RXhjZXB0aW9uKCBleCApLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbGxTdWJzY3JpYmVyV2l0aEltbWVkaWF0ZUV4Y2VwdGlvbnMoIHN1YnNjcmliZXIsIG1lc3NhZ2UsIGRhdGEgKXtcbiAgICAgICAgc3Vic2NyaWJlciggbWVzc2FnZSwgZGF0YSApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGl2ZXJNZXNzYWdlKCBvcmlnaW5hbE1lc3NhZ2UsIG1hdGNoZWRNZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICl7XG4gICAgICAgIHZhciBzdWJzY3JpYmVycyA9IG1lc3NhZ2VzW21hdGNoZWRNZXNzYWdlXSxcbiAgICAgICAgICAgIGNhbGxTdWJzY3JpYmVyID0gaW1tZWRpYXRlRXhjZXB0aW9ucyA/IGNhbGxTdWJzY3JpYmVyV2l0aEltbWVkaWF0ZUV4Y2VwdGlvbnMgOiBjYWxsU3Vic2NyaWJlcldpdGhEZWxheWVkRXhjZXB0aW9ucyxcbiAgICAgICAgICAgIHM7XG5cbiAgICAgICAgaWYgKCAhbWVzc2FnZXMuaGFzT3duUHJvcGVydHkoIG1hdGNoZWRNZXNzYWdlICkgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHMgaW4gc3Vic2NyaWJlcnMpe1xuICAgICAgICAgICAgaWYgKCBzdWJzY3JpYmVycy5oYXNPd25Qcm9wZXJ0eShzKSl7XG4gICAgICAgICAgICAgICAgY2FsbFN1YnNjcmliZXIoIHN1YnNjcmliZXJzW3NdLCBvcmlnaW5hbE1lc3NhZ2UsIGRhdGEgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZURlbGl2ZXJ5RnVuY3Rpb24oIG1lc3NhZ2UsIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKXtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGRlbGl2ZXJOYW1lc3BhY2VkKCl7XG4gICAgICAgICAgICB2YXIgdG9waWMgPSBTdHJpbmcoIG1lc3NhZ2UgKSxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHRvcGljLmxhc3RJbmRleE9mKCAnLicgKTtcblxuICAgICAgICAgICAgLy8gZGVsaXZlciB0aGUgbWVzc2FnZSBhcyBpdCBpcyBub3dcbiAgICAgICAgICAgIGRlbGl2ZXJNZXNzYWdlKG1lc3NhZ2UsIG1lc3NhZ2UsIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMpO1xuXG4gICAgICAgICAgICAvLyB0cmltIHRoZSBoaWVyYXJjaHkgYW5kIGRlbGl2ZXIgbWVzc2FnZSB0byBlYWNoIGxldmVsXG4gICAgICAgICAgICB3aGlsZSggcG9zaXRpb24gIT09IC0xICl7XG4gICAgICAgICAgICAgICAgdG9waWMgPSB0b3BpYy5zdWJzdHIoIDAsIHBvc2l0aW9uICk7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSB0b3BpYy5sYXN0SW5kZXhPZignLicpO1xuICAgICAgICAgICAgICAgIGRlbGl2ZXJNZXNzYWdlKCBtZXNzYWdlLCB0b3BpYywgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1lc3NhZ2VIYXNTdWJzY3JpYmVycyggbWVzc2FnZSApe1xuICAgICAgICB2YXIgdG9waWMgPSBTdHJpbmcoIG1lc3NhZ2UgKSxcbiAgICAgICAgICAgIGZvdW5kID0gQm9vbGVhbihtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eSggdG9waWMgKSAmJiBoYXNLZXlzKG1lc3NhZ2VzW3RvcGljXSkpLFxuICAgICAgICAgICAgcG9zaXRpb24gPSB0b3BpYy5sYXN0SW5kZXhPZiggJy4nICk7XG5cbiAgICAgICAgd2hpbGUgKCAhZm91bmQgJiYgcG9zaXRpb24gIT09IC0xICl7XG4gICAgICAgICAgICB0b3BpYyA9IHRvcGljLnN1YnN0ciggMCwgcG9zaXRpb24gKTtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoICcuJyApO1xuICAgICAgICAgICAgZm91bmQgPSBCb29sZWFuKG1lc3NhZ2VzLmhhc093blByb3BlcnR5KCB0b3BpYyApICYmIGhhc0tleXMobWVzc2FnZXNbdG9waWNdKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZm91bmQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHVibGlzaCggbWVzc2FnZSwgZGF0YSwgc3luYywgaW1tZWRpYXRlRXhjZXB0aW9ucyApe1xuICAgICAgICBtZXNzYWdlID0gKHR5cGVvZiBtZXNzYWdlID09PSAnc3ltYm9sJykgPyBtZXNzYWdlLnRvU3RyaW5nKCkgOiBtZXNzYWdlO1xuXG4gICAgICAgIHZhciBkZWxpdmVyID0gY3JlYXRlRGVsaXZlcnlGdW5jdGlvbiggbWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApLFxuICAgICAgICAgICAgaGFzU3Vic2NyaWJlcnMgPSBtZXNzYWdlSGFzU3Vic2NyaWJlcnMoIG1lc3NhZ2UgKTtcblxuICAgICAgICBpZiAoICFoYXNTdWJzY3JpYmVycyApe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBzeW5jID09PSB0cnVlICl7XG4gICAgICAgICAgICBkZWxpdmVyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCBkZWxpdmVyLCAwICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHVibGlzaGVzIHRoZSBtZXNzYWdlLCBwYXNzaW5nIHRoZSBkYXRhIHRvIGl0J3Mgc3Vic2NyaWJlcnNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgcHVibGlzaFxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gcHVibGlzaFxuICAgICAqIEBwYXJhbSB7fSBkYXRhIFRoZSBkYXRhIHRvIHBhc3MgdG8gc3Vic2NyaWJlcnNcbiAgICAgKiBAcmV0dXJuIHsgQm9vbGVhbiB9XG4gICAgICovXG4gICAgUHViU3ViLnB1Ymxpc2ggPSBmdW5jdGlvbiggbWVzc2FnZSwgZGF0YSApe1xuICAgICAgICByZXR1cm4gcHVibGlzaCggbWVzc2FnZSwgZGF0YSwgZmFsc2UsIFB1YlN1Yi5pbW1lZGlhdGVFeGNlcHRpb25zICk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFB1Ymxpc2hlcyB0aGUgdGhlIG1lc3NhZ2Ugc3luY2hyb25vdXNseSwgcGFzc2luZyB0aGUgZGF0YSB0byBpdCdzIHN1YnNjcmliZXJzXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQGFsaWFzIHB1Ymxpc2hTeW5jXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBwdWJsaXNoXG4gICAgICogQHBhcmFtIHt9IGRhdGEgVGhlIGRhdGEgdG8gcGFzcyB0byBzdWJzY3JpYmVyc1xuICAgICAqIEByZXR1cm4geyBCb29sZWFuIH1cbiAgICAgKi9cbiAgICBQdWJTdWIucHVibGlzaFN5bmMgPSBmdW5jdGlvbiggbWVzc2FnZSwgZGF0YSApe1xuICAgICAgICByZXR1cm4gcHVibGlzaCggbWVzc2FnZSwgZGF0YSwgdHJ1ZSwgUHViU3ViLmltbWVkaWF0ZUV4Y2VwdGlvbnMgKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU3Vic2NyaWJlcyB0aGUgcGFzc2VkIGZ1bmN0aW9uIHRvIHRoZSBwYXNzZWQgbWVzc2FnZS4gRXZlcnkgcmV0dXJuZWQgdG9rZW4gaXMgdW5pcXVlIGFuZCBzaG91bGQgYmUgc3RvcmVkIGlmIHlvdSBuZWVkIHRvIHVuc3Vic2NyaWJlXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQGFsaWFzIHN1YnNjcmliZVxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gc3Vic2NyaWJlIHRvXG4gICAgICogQHBhcmFtIHsgRnVuY3Rpb24gfSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gYSBuZXcgbWVzc2FnZSBpcyBwdWJsaXNoZWRcbiAgICAgKiBAcmV0dXJuIHsgU3RyaW5nIH1cbiAgICAgKi9cbiAgICBQdWJTdWIuc3Vic2NyaWJlID0gZnVuY3Rpb24oIG1lc3NhZ2UsIGZ1bmMgKXtcbiAgICAgICAgaWYgKCB0eXBlb2YgZnVuYyAhPT0gJ2Z1bmN0aW9uJyl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBtZXNzYWdlID0gKHR5cGVvZiBtZXNzYWdlID09PSAnc3ltYm9sJykgPyBtZXNzYWdlLnRvU3RyaW5nKCkgOiBtZXNzYWdlO1xuXG4gICAgICAgIC8vIG1lc3NhZ2UgaXMgbm90IHJlZ2lzdGVyZWQgeWV0XG4gICAgICAgIGlmICggIW1lc3NhZ2VzLmhhc093blByb3BlcnR5KCBtZXNzYWdlICkgKXtcbiAgICAgICAgICAgIG1lc3NhZ2VzW21lc3NhZ2VdID0ge307XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmb3JjaW5nIHRva2VuIGFzIFN0cmluZywgdG8gYWxsb3cgZm9yIGZ1dHVyZSBleHBhbnNpb25zIHdpdGhvdXQgYnJlYWtpbmcgdXNhZ2VcbiAgICAgICAgLy8gYW5kIGFsbG93IGZvciBlYXN5IHVzZSBhcyBrZXkgbmFtZXMgZm9yIHRoZSAnbWVzc2FnZXMnIG9iamVjdFxuICAgICAgICB2YXIgdG9rZW4gPSAndWlkXycgKyBTdHJpbmcoKytsYXN0VWlkKTtcbiAgICAgICAgbWVzc2FnZXNbbWVzc2FnZV1bdG9rZW5dID0gZnVuYztcbiAgICAgICAgXG4gICAgICAgIC8vIHJldHVybiB0b2tlbiBmb3IgdW5zdWJzY3JpYmluZ1xuICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZXMgdGhlIHBhc3NlZCBmdW5jdGlvbiB0byB0aGUgcGFzc2VkIG1lc3NhZ2Ugb25jZVxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBhbGlhcyBzdWJzY3JpYmVPbmNlXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBzdWJzY3JpYmUgdG9cbiAgICAgKiBAcGFyYW0geyBGdW5jdGlvbiB9IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBhIG5ldyBtZXNzYWdlIGlzIHB1Ymxpc2hlZFxuICAgICAqIEByZXR1cm4geyBQdWJTdWIgfVxuICAgICAqL1xuICAgIFB1YlN1Yi5zdWJzY3JpYmVPbmNlID0gZnVuY3Rpb24oIG1lc3NhZ2UsIGZ1bmMgKXtcbiAgICAgICAgdmFyIHRva2VuID0gUHViU3ViLnN1YnNjcmliZSggbWVzc2FnZSwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIC8vIGJlZm9yZSBmdW5jIGFwcGx5LCB1bnN1YnNjcmliZSBtZXNzYWdlXG4gICAgICAgICAgICBQdWJTdWIudW5zdWJzY3JpYmUoIHRva2VuICk7XG4gICAgICAgICAgICBmdW5jLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBQdWJTdWI7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENsZWFycyBhbGwgc3Vic2NyaXB0aW9uc1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWxpYXMgY2xlYXJBbGxTdWJzY3JpcHRpb25zXG4gICAgICovXG4gICAgUHViU3ViLmNsZWFyQWxsU3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uIGNsZWFyQWxsU3Vic2NyaXB0aW9ucygpe1xuICAgICAgICBtZXNzYWdlcyA9IHt9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGVhciBzdWJzY3JpcHRpb25zIGJ5IHRoZSB0b3BpY1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWxpYXMgY2xlYXJBbGxTdWJzY3JpcHRpb25zXG4gICAgICovXG4gICAgUHViU3ViLmNsZWFyU3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uIGNsZWFyU3Vic2NyaXB0aW9ucyh0b3BpYyl7XG4gICAgICAgIHZhciBtO1xuICAgICAgICBmb3IgKG0gaW4gbWVzc2FnZXMpe1xuICAgICAgICAgICAgaWYgKG1lc3NhZ2VzLmhhc093blByb3BlcnR5KG0pICYmIG0uaW5kZXhPZih0b3BpYykgPT09IDApe1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBtZXNzYWdlc1ttXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHN1YnNjcmlwdGlvbnNcbiAgICAgKlxuICAgICAqIC0gV2hlbiBwYXNzZWQgYSB0b2tlbiwgcmVtb3ZlcyBhIHNwZWNpZmljIHN1YnNjcmlwdGlvbi5cbiAgICAgKlxuXHQgKiAtIFdoZW4gcGFzc2VkIGEgZnVuY3Rpb24sIHJlbW92ZXMgYWxsIHN1YnNjcmlwdGlvbnMgZm9yIHRoYXQgZnVuY3Rpb25cbiAgICAgKlxuXHQgKiAtIFdoZW4gcGFzc2VkIGEgdG9waWMsIHJlbW92ZXMgYWxsIHN1YnNjcmlwdGlvbnMgZm9yIHRoYXQgdG9waWMgKGhpZXJhcmNoeSlcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcHVibGljXG4gICAgICogQGFsaWFzIHN1YnNjcmliZU9uY2VcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfCBGdW5jdGlvbiB9IHZhbHVlIEEgdG9rZW4sIGZ1bmN0aW9uIG9yIHRvcGljIHRvIHVuc3Vic2NyaWJlIGZyb21cbiAgICAgKiBAZXhhbXBsZSAvLyBVbnN1YnNjcmliaW5nIHdpdGggYSB0b2tlblxuICAgICAqIHZhciB0b2tlbiA9IFB1YlN1Yi5zdWJzY3JpYmUoJ215dG9waWMnLCBteUZ1bmMpO1xuICAgICAqIFB1YlN1Yi51bnN1YnNjcmliZSh0b2tlbik7XG4gICAgICogQGV4YW1wbGUgLy8gVW5zdWJzY3JpYmluZyB3aXRoIGEgZnVuY3Rpb25cbiAgICAgKiBQdWJTdWIudW5zdWJzY3JpYmUobXlGdW5jKTtcbiAgICAgKiBAZXhhbXBsZSAvLyBVbnN1YnNjcmliaW5nIGZyb20gYSB0b3BpY1xuICAgICAqIFB1YlN1Yi51bnN1YnNjcmliZSgnbXl0b3BpYycpO1xuICAgICAqL1xuICAgIFB1YlN1Yi51bnN1YnNjcmliZSA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgdmFyIGRlc2NlbmRhbnRUb3BpY0V4aXN0cyA9IGZ1bmN0aW9uKHRvcGljKSB7XG4gICAgICAgICAgICAgICAgdmFyIG07XG4gICAgICAgICAgICAgICAgZm9yICggbSBpbiBtZXNzYWdlcyApe1xuICAgICAgICAgICAgICAgICAgICBpZiAoIG1lc3NhZ2VzLmhhc093blByb3BlcnR5KG0pICYmIG0uaW5kZXhPZih0b3BpYykgPT09IDAgKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGEgZGVzY2VuZGFudCBvZiB0aGUgdG9waWMgZXhpc3RzOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNUb3BpYyAgICA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgKCBtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eSh2YWx1ZSkgfHwgZGVzY2VuZGFudFRvcGljRXhpc3RzKHZhbHVlKSApLFxuICAgICAgICAgICAgaXNUb2tlbiAgICA9ICFpc1RvcGljICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycsXG4gICAgICAgICAgICBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nLFxuICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2UsXG4gICAgICAgICAgICBtLCBtZXNzYWdlLCB0O1xuXG4gICAgICAgIGlmIChpc1RvcGljKXtcbiAgICAgICAgICAgIFB1YlN1Yi5jbGVhclN1YnNjcmlwdGlvbnModmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICggbSBpbiBtZXNzYWdlcyApe1xuICAgICAgICAgICAgaWYgKCBtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eSggbSApICl7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2VzW21dO1xuXG4gICAgICAgICAgICAgICAgaWYgKCBpc1Rva2VuICYmIG1lc3NhZ2VbdmFsdWVdICl7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBtZXNzYWdlW3ZhbHVlXTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRva2VucyBhcmUgdW5pcXVlLCBzbyB3ZSBjYW4ganVzdCBzdG9wIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICggdCBpbiBtZXNzYWdlICl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5oYXNPd25Qcm9wZXJ0eSh0KSAmJiBtZXNzYWdlW3RdID09PSB2YWx1ZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG1lc3NhZ2VbdF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbn0pKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wdWJzdWItanMvc3JjL3B1YnN1Yi5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgVXNlclRhc2tNYW5hZ2VyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9hcGktdGFzay1tYW5hZ2VyJztcclxuaW1wb3J0IHZpZXdVdGlscyBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdmlldyc7XHJcbmltcG9ydCB7Q09OU1R9IGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMnO1xyXG5cclxuZnVuY3Rpb24gZmlsbExpc3RNZXRhKCRsaXN0LCBkYXRhQXJyYXksIGlzUnVucykge1xyXG4gICAgY29uc3QgaXRlbXMgPSBkYXRhQXJyYXk7XHJcbiAgICAvLyBjb25zdCBkZWZhdWx0QXZhdGFyU3JjID0gJ2h0dHBzOi8vaS5pbWd1ci5jb20vak5OVDRMRS5wbmcnO1xyXG4gICAgJGxpc3QuZW1wdHkoKTtcclxuICAgIGlmICghaXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgICAgJChgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIHB5LTJcIj5cclxuICAgICAgICAgICAgICAgIDxwPtCSINGN0YLQvtC8INGA0LDQt9C00LXQu9C1INC90LXRgiDQvdC4INC+0LTQvdC+0Lkg0LfQsNC00LDRh9C4LjwvcD5cclxuICAgICAgICAgICAgPC9saT5gKS5hcHBlbmRUbygkbGlzdCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHtwcm9ncmVzcywgdGFza19pZCwgdHlwZSwgc3VidHlwZX0gPSBpdGVtO1xyXG4gICAgICAgIGlmIChpdGVtLnN0YXR1cy5zdGF0ZSA9PT0gJ1NUT1BQRUQnICYmICFpc1J1bnMpIHtcclxuICAgICAgICAgICAgJChgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIHAtMCBweS0yXCIgZGF0YS11c2VybmFtZT1cIiR7dHlwZX1cIiBkYXRhLXRhc2staWQ9XCIke3Rhc2tfaWR9XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEtYm9keSBkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHRhc2stdHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkeyh0YXNrX2lkKSA/IGA8cCBjbGFzcz1cImJhZGdlIGJhZGdlLXNlY29uZGFyeSBteS0xXCI+JHt0YXNrX2lkfTwvcD5gIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLXByb2dyZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInNtYWxsIG15LTFcIj7QntGB0YLQsNC90L7QstC70LXQvdC+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHsoaXRlbS5zdGF0dXMucmVhc29uKSA/IGA8cCBjbGFzcz1cIm15LTFcIj4ke2l0ZW0uc3RhdHVzLnJlYXNvbn08L3A+YCA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi13YXJuaW5nIGpzX2J0bi1kZWxldGUtdGFza1wiPtCj0LTQsNC70LjRgtGMPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJjb2wgdGFzay1zdWJ0eXBlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7KHN1YnR5cGUpID8gYDxwIGNsYXNzPVwibXQtMCBtYi0xXCI+JHtzdWJ0eXBlfTwvcD5gIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+LS0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5gKS5hcHBlbmRUbygkbGlzdCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpdGVtLnN0YXR1cy5zdGF0ZSA9PT0gJ0lOX1BST0dSRVNTJyAmJiBpc1J1bnMpIHtcclxuICAgICAgICAgICAgJChgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIHB5LTJcIiBkYXRhLXRhc2staWQ9XCIke3Rhc2tfaWR9XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHRhc2stcHJvZ3Jlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm10LTAgbWItMSBuYW1lXCI+0JIg0L/RgNC+0LPRgNC10YHRgdC1IDogJHt0YXNrX2lkfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5IGpzX2J0bi1zdG9wLXRhc2tcIj7QntGB0YLQsNC90L7QstC40YLRjDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4td2FybmluZyBqc19idG4tZGVsZXRlLXRhc2tcIj7Qo9C00LDQu9C40YLRjDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2xpPmApLmFwcGVuZFRvKCRsaXN0KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uc3RhdHVzLnN0YXRlID09PSAnRklOSVNIRUQnICYmICFpc1J1bnMpIHtcclxuICAgICAgICAgICAgJChgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIHB5LTJcIiBkYXRhLXRhc2staWQ9XCIke3Rhc2tfaWR9XCI+XHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJjYXJkLXRpdGxlXCI+0JLRi9C/0L7Qu9C90LXQvdC90L48L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1tdXRlZFwiPiR7dmlld1V0aWxzLmdldEZvcm1hdHRlZERhdGVVdGlsKHByb2dyZXNzLnRpbWVzdGFtcCl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1zdWNjZXNzXCI+MTAwJTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MtYmFyIGJnLXN1Y2Nlc3NcIiByb2xlPVwicHJvZ3Jlc3NiYXJcIiBzdHlsZT1cIndpZHRoOiAxMDAlOyBoZWlnaHQ6IDZweDtcIiBhcmlhLXZhbHVlbm93PVwiMjVcIiBhcmlhLXZhbHVlbWluPVwiMFwiIGFyaWEtdmFsdWVtYXg9XCIxMDBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi13YXJuaW5nIGpzX2J0bi1kZWxldGUtdGFza1wiPtCj0LTQsNC70LjRgtGMPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5gKS5hcHBlbmRUbygkbGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghJCgnbGknLCAkbGlzdCkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICQoYDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBweS0yXCIgZGF0YS10YXNrLWlkPVwiJHt0YXNrX2lkfVwiPlxyXG4gICAgICAgICAgICAgICAgPHA+0JIg0Y3RgtC+0Lwg0YDQsNC30LTQtdC70LUg0L3QtdGCINC90Lgg0L7QtNC90L7QuSDQt9Cw0LTQsNGH0LguPC9wPlxyXG4gICAgICAgICAgICA8L2xpPmApLmFwcGVuZFRvKCRsaXN0KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cclxuZnVuY3Rpb24gaW5pdEhhbmRsZXJzKGhvbGRlcnMsIHBhdGgpIHtcclxuICAgIGNvbnN0IF9wYXRoID0gcGF0aCB8fCB7XHJcbiAgICAgICAgdHlwZTogQ09OU1QudXJsLnRtVHlwZXMuZm9sbG93aW5nVCxcclxuICAgICAgICBzdWJ0eXBlOiBDT05TVC51cmwudG1UeXBlcy5mb2xsb3dpbmdTdWJUWzBdXHJcbiAgICB9O1xyXG4gICAgY29uc3QgJGJ0blN0b3BUYXNrID0gJCgnLmpzX2J0bi1zdG9wLXRhc2snKTtcclxuICAgIGNvbnN0ICRidG5EZWxUYXNrID0gJCgnLmpzX2J0bi1kZWxldGUtdGFzaycpO1xyXG4gICAgY29uc3QgZ2V0VGFza0lEID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCBidG4gPSAkKGUudGFyZ2V0KTtcclxuICAgICAgICByZXR1cm4gYnRuLmNsb3Nlc3QoJ2xpJykuZGF0YSgndGFzay1pZCcpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkYnRuU3RvcFRhc2sub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCB0YXNrSWQgPSBnZXRUYXNrSUQoZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NUT1AgVGFzayBpZCcsIHRhc2tJZCk7XHJcbiAgICAgICAgVXNlclRhc2tNYW5hZ2VyLnN0b3BUYXNrQnlJRCh0YXNrSWQpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICBnZXRUYXNrc0RhdGEoaG9sZGVycywgX3BhdGgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJGJ0bkRlbFRhc2sub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCB0YXNrSWQgPSBnZXRUYXNrSUQoZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0RFTEVURSBpZCcsIHRhc2tJZCk7XHJcbiAgICAgICAgVXNlclRhc2tNYW5hZ2VyLmRlbGV0ZVRhc2tCeUlEKHRhc2tJZCkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIGdldFRhc2tzRGF0YShob2xkZXJzLCBfcGF0aCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRhc2tzRGF0YShob2xkZXJzLCBwYXRoKSB7XHJcbiAgICBjb25zdCB7JHJ1bnMsICRzdG9wcGVkfSA9IGhvbGRlcnM7XHJcbiAgICBjb25zdCBfcGF0aCA9IHBhdGggfHwge1xyXG4gICAgICAgIHR5cGU6IENPTlNULnVybC50bVR5cGVzLmZvbGxvd2luZ1QsXHJcbiAgICAgICAgc3VidHlwZTogQ09OU1QudXJsLnRtVHlwZXMuZm9sbG93aW5nU3ViVFswXVxyXG4gICAgfTtcclxuICAgIFVzZXJUYXNrTWFuYWdlci5nZXRNZXRhZGF0YShfcGF0aCkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2dldE1ldGFkYXRhICYgZmlsbExpc3RNZXRhJywgcmVzdWx0KTtcclxuICAgICAgICBpZiAocmVzdWx0LnN0YXR1cy5zdGF0ZSA9PT0gJ29rJykge1xyXG4gICAgICAgICAgICBmaWxsTGlzdE1ldGEoJHJ1bnMsIHJlc3VsdC5kYXRhLm1ldGEsICdpc1J1bnMnKTtcclxuICAgICAgICAgICAgZmlsbExpc3RNZXRhKCRzdG9wcGVkLCByZXN1bHQuZGF0YS5tZXRhKTtcclxuICAgICAgICAgICAgaW5pdEhhbmRsZXJzKGhvbGRlcnMsIHBhdGgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogSW5pdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBjb25zdCBob2xkZXJzID0ge1xyXG4gICAgICAgICRydW5zOiAkKCcuZm9sbG93LXRhc2tzLXJ1bnMnKSxcclxuICAgICAgICAkc3RvcHBlZDogJCgnLmZvbGxvdy10YXNrcy1zdG9wcGVkJylcclxuICAgIH07XHJcbiAgICBnZXRUYXNrc0RhdGEoaG9sZGVycyk7XHJcbiAgICB3aW5kb3cuUHViU3ViLnN1YnNjcmliZShDT05TVC5ldmVudHMudGFza3MuTkVXX1RBU0tfQ1JFQVRFRCwgKGV2ZW50TmFtZSwgZGF0YSkgPT4ge1xyXG4gICAgICAgIGdldFRhc2tzRGF0YShob2xkZXJzKTtcclxuICAgIH0pO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3MvZm9sbG93L2ZvbGxvdy1zdGF0dXMuanMiLCJpbXBvcnQgdmlld1V0aWxzIGZyb20gJy4vdmlldyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ldHdvcmsge1xuXG4gICAgY2JFcnJvckRlZmF1bHQocmVzdWx0KSB7XG4gICAgICAgIGNvbnN0ICRlbCA9ICgkKCcjZGVzY3JpcHRpb24nKS5sZW5ndGgpID8gJCgnI2Rlc2NyaXB0aW9uJykgOiAkKCcuZXJyb3ItbXNnJyk7XG4gICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UoJGVsLFxuICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5zdGF0ZSxcbiAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMubWVzc2FnZSB8fCAnZXJyb3InKTtcbiAgICB9XG5cbiAgICBjaGVja1N0YXR1cyhyZXNwb25zZSkge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICYmIHJlc3BvbnNlLnN0YXR1cyA+PSAyMDAgJiYgcmVzcG9uc2Uuc3RhdHVzIDwgMzAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICAgICAgICAgIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlbmRSZXF1ZXN0KFVSTCwgT1BUUywgY2JFcnJvcikge1xuICAgICAgICByZXR1cm4gZmV0Y2goVVJMLCBPUFRTKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gUHJvbWlzZS5hbGwoW3Jlc3BvbnNlLCByZXNwb25zZS5qc29uKCldKSlcbiAgICAgICAgICAgIC50aGVuKChbcmVzcG9uc2UsIGpzb25dKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNiRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2JFcnJvckRlZmF1bHQoanNvbik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYkVycm9yKGpzb24pOyAvLyB1cGRhdGUgdmlld1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tTdGF0dXMocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoanNvbi5zdGF0dXMubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBqc29uO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uL2pzLXNlcnZpY2VzL25ldHdvcmsuanMiLCJpbXBvcnQge0NPTlNUfSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29uc3RzJztcclxuLy8gaW1wb3J0ICdicnV0dXNpbi1qc29uLWZvcm1zJztcclxuY29uc3Qgc3RhdGUgPSB7XHJcbiAgICB1c2VybmFtZTogJydcclxufTtcclxuXHJcbi8qKlxyXG4gKiBJbml0IGhlYWRlclxyXG4gKi9cclxuZnVuY3Rpb24gaW5pdFN0ZXBzKGZvcm1TZWxlY3Rvciwgd2l6YXJkQ2ZnKSB7XHJcbiAgICBjb25zdCAkZm9ybSA9ICQoZm9ybVNlbGVjdG9yKTtcclxuICAgIGNvbnN0IHtzdGVwUmVkdWNlciwgb25TdWJtaXRIYW5kbGVyfSA9IHdpemFyZENmZztcclxuICAgICQoJy5qc19wcm9maWxlLXVzZXItZm9sbG93Pi5jb250YWluZXInKS5yZW1vdmVDbGFzcygnY29udGFpbmVyJyk7XHJcblxyXG4gICAgJGZvcm0uZmluZCgnZmllbGRzZXQ6Zmlyc3QtY2hpbGQnKS5mYWRlSW4oJ3Nsb3cnKTtcclxuXHJcbiAgICAkZm9ybS5maW5kKCdpbnB1dFt0eXBlPVwidGV4dFwiXScpLm9uKCdmb2N1cycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdpbnB1dC1lcnJvcicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbmV4dCBzdGVwXHJcbiAgICAkZm9ybS5maW5kKCcuYnRuLW5leHQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgcGFyZW50X2ZpZWxkc2V0ID0gJCh0aGlzKS5wYXJlbnRzKCdmaWVsZHNldCcpO1xyXG4gICAgICAgIGxldCBuZXh0X3N0ZXAgPSB0cnVlO1xyXG4gICAgICAgIGNvbnN0IHJhZGlvQnRuQWN0aXZlID0gcGFyZW50X2ZpZWxkc2V0LmZpbmQoJ2lucHV0W25hbWU9XCJ1c2VyQWNjb3VudFJhZGlvXCJdOmNoZWNrZWQnKTtcclxuXHJcbiAgICAgICAgaWYgKHJhZGlvQnRuQWN0aXZlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgc3RhdGUudXNlcm5hbWUgPSByYWRpb0J0bkFjdGl2ZS5wYXJlbnRzKCdsaScpLmRhdGEoJ3VzZXJuYW1lJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc3RlcFJlZHVjZXIpIHtcclxuICAgICAgICAgICAgc3RlcFJlZHVjZXIocGFyZW50X2ZpZWxkc2V0LmluZGV4KCksIHN0YXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBhcmVudF9maWVsZHNldC5maW5kKCdpbnB1dFt0eXBlPVwidGV4dFwiXSxpbnB1dFt0eXBlPVwiZW1haWxcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCQodGhpcykudmFsKCkgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdpbnB1dC1lcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgbmV4dF9zdGVwID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdpbnB1dC1lcnJvcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChuZXh0X3N0ZXApIHtcclxuICAgICAgICAgICAgcGFyZW50X2ZpZWxkc2V0LmZhZGVPdXQoNDAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLm5leHQoKS5mYWRlSW4oKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHByZXZpb3VzIHN0ZXBcclxuICAgICRmb3JtLmZpbmQoJy5idG4tcHJldmlvdXMnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gc3RhdGUudXNlcm5hbWUgPSBbLi4ubmV3IFNldChzdGF0ZS51c2VybmFtZSldO1xyXG4gICAgICAgICQodGhpcykucGFyZW50cygnZmllbGRzZXQnKS5mYWRlT3V0KDQwMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnByZXYoKS5mYWRlSW4oKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHNwZWVkIHJhZGlvLWJ0biBncm91cFxyXG4gICAgJCgnLmpzX2ZvbGxvdy1zcGVlZCBpbnB1dFt0eXBlPXJhZGlvXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBjb25zdCB2YWx1ZSA9ICQodGhpcykuYXR0cigndmFsdWUnKTtcclxuICAgICAgICAvLyBzdGF0ZS51c2VyX2RlZmF1bHRfY29uZmlnID0ge1xyXG4gICAgICAgIC8vICAgICB0YXNrX21vZGU6IHZhbHVlLnRvVXBwZXJDYXNlKClcclxuICAgICAgICAvLyB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gc3VibWl0XHJcbiAgICAkZm9ybS5vbignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAkKHRoaXMpLmZpbmQoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdLGlucHV0W3R5cGU9XCJudW1iZXJcIl0saW5wdXRbdHlwZT1cImVtYWlsXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLnZhbCgpID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaW5wdXQtZXJyb3InKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2lucHV0LWVycm9yJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKG9uU3VibWl0SGFuZGxlcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnKipvdXRlciBvblN1Ym1pdEhhbmRsZXIqKicpO1xyXG4gICAgICAgICAgICBvblN1Ym1pdEhhbmRsZXIoZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnU3VibWl0SGFuZGxlciBFTkQnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGFsZXJ0IGNsb3NlXHJcbiAgICAkKCcuZm9ybS1zdWJtaXQtZmluaXNoIC5jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZm9ybS1zdWJtaXQtZmluaXNoIC5jbG9zZScpO1xyXG4gICAgICAgIC8vICQodGhpcykuY2xvc2VzdCgnZm9ybS1zdWJtaXQtZmluaXNoJykucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKTtcclxuICAgICAgICAvLyAkKCcjdi1waWxscy1ydW5uZWQtdGFiJykudHJpZ2dlcignY2xpY2snKTtcclxuICAgICAgICAvLyB3aW5kb3cuUHViU3ViLnB1Ymxpc2goQ09OU1QuZXZlbnRzLnRhc2tzLk5FV19UQVNLX0NSRUFURUQpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qXHJcbmZ1bmN0aW9uIGZpeFN0ZXBJbmRpY2F0b3Iobikge1xyXG4gICAgLy8gVGhpcyBmdW5jdGlvbiByZW1vdmVzIHRoZSBcImFjdGl2ZVwiIGNsYXNzIG9mIGFsbCBzdGVwcy4uLlxyXG4gICAgdmFyIGksIHggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic3RlcFwiKTtcclxuICAgIGZvciAoaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgeFtpXS5jbGFzc05hbWUgPSB4W2ldLmNsYXNzTmFtZS5yZXBsYWNlKFwiIGFjdGl2ZVwiLCBcIlwiKTtcclxuICAgIH1cclxuICAgIC8vLi4uIGFuZCBhZGRzIHRoZSBcImFjdGl2ZVwiIGNsYXNzIG9uIHRoZSBjdXJyZW50IHN0ZXA6XHJcbiAgICB4W25dLmNsYXNzTmFtZSArPSBcIiBhY3RpdmVcIjtcclxufSovXHJcblxyXG5mdW5jdGlvbiBtb2RpZnlBY2NMaXN0KCkge1xyXG4gICAgY29uc3QgcmFkaW9CdG5BcHBlbmQgPSAoaWR4KSA9PiBgPGRpdiBjbGFzcz1cIlwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInVzZXJBY2NvdW50UmFkaW9cIiBpZD1cImN1c3RvbVJhZGlvLSR7aWR4fVwiIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXQgZC1ub25lXCIgdmFsdWU9XCJcIj5cclxuICAgICAgICA8L2Rpdj5gO1xyXG4gICAgY29uc3QgcmFkaW9CdG5XcmFwID0gKGlkeCkgPT4gYDxsYWJlbCBjbGFzcz1cImFjY291bnRzLWxpc3QtLWxhYmVsLXdyYXBwZXIgY29sIG1iLTAgbWVkaWEgcHktM1wiIGZvcj1cImN1c3RvbVJhZGlvLSR7aWR4fVwiPjwvbGFiZWw+YDtcclxuICAgIGNvbnN0ICRhY2NvdW50c0xpc3QgPSAkKCcuYWNjb3VudHMtbGlzdCcpO1xyXG4gICAgY29uc3QgJGxpID0gJGFjY291bnRzTGlzdC5maW5kKCdsaS5tZWRpYScpO1xyXG4gICAgJGxpLmFkZENsYXNzKCdqc191c2VyLXJhZGlvJykucmVtb3ZlQ2xhc3MoJ3B5LTMgbWVkaWEnKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8ICRsaS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICQoJGxpW2ldKS53cmFwSW5uZXIocmFkaW9CdG5XcmFwKGkpKS5hcHBlbmQocmFkaW9CdG5BcHBlbmQoaSkpO1xyXG4gICAgfVxyXG4gICAgLy8gVXNlclRhc2tNYW5hZ2VyLmdldFRhc2tUeXBlcygpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgLy8gICAgIGlmIChyZXN1bHQuc3RhdHVzLnN0YXRlID09PSAnb2snKSB7XHJcbiAgICAvLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAvLyAgICAgICAgIGZpbGxMaXN0VHlwZXMoJCgnLmpzX3Rhc2stdHlwZXMnKSwgcmVzdWx0LmRhdGEpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0pO1xyXG5cclxuICAgICQoJy5qc191c2VyLXJhZGlvJykub24oJ2NsaWNrJywgJ2lucHV0W3R5cGU9cmFkaW9dJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBjb25zdCAkcGFyZW50RmllbGRzZXQgPSAkKHRoaXMpLnBhcmVudHMoJ2ZpZWxkc2V0Jyk7XHJcbiAgICAgICAgJCgnbGkuYWN0aXZlJywgJHBhcmVudEZpZWxkc2V0KS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCdsaScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKCcuYnRuLW5leHQnLCAkcGFyZW50RmllbGRzZXQpLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gJCgnLmNoZWNrYm94LWNlbGwnKS5vbignY2hhbmdlJywgKGUpID0+IHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZygndmFsaWRhdGUnKTtcclxuICAgIC8vICAgICAvLyB1cGRhdGVTdGF0dXMoKTtcclxuICAgIC8vIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdCh3aXphcmRDZmcpIHtcclxuICAgIGlmICgkKCcud2l6YXJkLWZvcm0nKS5sZW5ndGgpIHtcclxuICAgICAgICBpbml0U3RlcHMoJy53aXphcmQtZm9ybScsIHdpemFyZENmZyk7XHJcbiAgICAgICAgd2luZG93LlB1YlN1Yi5zdWJzY3JpYmUoQ09OU1QuZXZlbnRzLmluc3RhZ3JhbUFjY291bnMuSU5TVEFHUkFNX0FDQ09VTlNfUkVOREVSRUQsIChldmVudE5hbWUsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgbW9kaWZ5QWNjTGlzdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3Mvd2l6YXJkLWZvcm0vd2l6YXJkLWZvcm0uanMiLCJpbXBvcnQgJy4vYmFzZS5zY3NzJztcclxuLy8gaW1wb3J0ICdib290c3RyYXAnO1xyXG5pbXBvcnQge0NPTlNUfSBmcm9tICcuL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMnO1xyXG5pbXBvcnQgUHViU3ViIGZyb20gJ3B1YnN1Yi1qcyc7XHJcbmltcG9ydCBSZWdpc3RlckZvcm0gZnJvbSAnLi9ibG9ja3MvcmVnaXN0ZXItZm9ybS9yZWdpc3Rlci1mb3JtJztcclxuaW1wb3J0IHtMb2dpbkZvcm19IGZyb20gJy4vYmxvY2tzL2xvZ2luLWZvcm0vbG9naW4tZm9ybSc7XHJcbmltcG9ydCB7TG9naW5QYWdlfSBmcm9tICcuL3BhZ2VzL19hdXRoL2xvZ2luLXBhZ2UnO1xyXG5pbXBvcnQge2NvbmZpcm1hdGlvbldpdGhSZWRpcmVjdH0gZnJvbSAnLi9ibG9ja3MvY29uZmlybS1yZWcvY29uZmlybS1yZWcnO1xyXG5pbXBvcnQgKiBhcyBoZWFkZXIgZnJvbSAnLi9ibG9ja3MvaGVhZGVyL2hlYWRlcic7XHJcbmltcG9ydCAqIGFzIGJ1cmdlck1lbnUgZnJvbSAnLi9ibG9ja3MvaGVhZGVyL2J1cmdlci1tZW51L2J1cmdlci1tZW51JztcclxuaW1wb3J0ICogYXMgaW5zdGFncmFtQWNjb3VudHMgZnJvbSAnLi9ibG9ja3MvaW5zdGFncmFtLWFjY291bnRzLWxpc3QvaW5zdGFncmFtLWFjY291bnRzLWxpc3QnO1xyXG5pbXBvcnQgKiBhcyBtZXNzYWdlcyBmcm9tICcuL2Jsb2Nrcy9tZXNzYWdlcy9tZXNzYWdlcyc7XHJcbmltcG9ydCAqIGFzIGZvbGxvdyBmcm9tICcuL2Jsb2Nrcy9mb2xsb3cvZm9sbG93JztcclxuaW1wb3J0ICogYXMgY2hhdEJvdCBmcm9tICcuL2Jsb2Nrcy9jaGF0LWJvdC1ibG9jay9jaGF0LWJvdC1ibG9jayc7XHJcbmltcG9ydCAqIGFzIGF1dG9ncmVldGluZyBmcm9tICcuL2Jsb2Nrcy9hdXRvZ3JlZXRpbmcvYXV0b2dyZWV0aW5nLW1haW4nO1xyXG5cclxuY29uc3Qgc2VsZWN0b3JDc3NMb2dpbkZvcm0gPSB7XHJcbiAgICBfbG9naW5Cb3g6IENPTlNULnVpU2VsZWN0b3JzLmhlYWRlckxvZ2luQm94LFxyXG4gICAgX2Zvcm1JZDogJyNqc19sb2dpbi1mb3JtJyxcclxuICAgIF9idXR0b25TdWJtaXRJZDogJyNqc19sb2dpbl9idG4nLFxyXG4gICAgX3Nob3dMb2dpbkJveEJ0bklkOiBDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJOYXZMb2dpbkJ0blxyXG59O1xyXG5cclxuY29uc3Qgc2VsZWN0b3JDc3NMb2dpbkZvcm1JbnN0YWdyYW0gPSB7XHJcbiAgICBfbG9naW5Cb3g6ICdtYWluIC5sb2dpbi1ib3gnLFxyXG4gICAgX2Zvcm1JZDogJyNqc19pbnN0YWdyYW0tYWRkLWFjY291bnQnLFxyXG4gICAgX2J1dHRvblN1Ym1pdElkOiAnI2pzX2luc3RhZ3JhbS1hZGQtYWNjb3VudC0tYnRuJyxcclxuICAgIF9zaG93TG9naW5Cb3hCdG5JZDogJyNqc19zaG93LWxvZ2luLWJveCcsXHJcbiAgICBpc0xvZ2luSW5zdGFncmFtOiB0cnVlXHJcbn07XHJcblxyXG5mdW5jdGlvbiBzZXRQdWJTdWIoUHViU3ViKSB7XHJcbiAgICB3aW5kb3cuUHViU3ViID0gUHViU3ViO1xyXG59XHJcblxyXG5jb25zdCBpbml0ID0gKCkgPT4ge1xyXG4gICAgc2V0UHViU3ViKFB1YlN1Yik7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnaW5pdCBqcyBoZXJlJywgQ09OU1QudXNlcik7XHJcbiAgICAobmV3IFJlZ2lzdGVyRm9ybSgpKS5pbml0KCk7XHJcbiAgICBMb2dpbkZvcm0oc2VsZWN0b3JDc3NMb2dpbkZvcm0pLmluaXQoKTtcclxuICAgIExvZ2luRm9ybShzZWxlY3RvckNzc0xvZ2luRm9ybUluc3RhZ3JhbSkuaW5pdCgpOyAvLyBpbml0IGluc3RhZ3JhbSBsb2dpbiBmb3JtKiEvXHJcbiAgICBMb2dpblBhZ2Uoe1xyXG4gICAgICAgIF9sb2dpbkJveDogJy5hdXRoLmxvZ2luIC5jYXJkLXNpZ25pbicsXHJcbiAgICAgICAgX2Zvcm1JZDogJy5mb3JtLXNpZ25pbicsXHJcbiAgICAgICAgX2J1dHRvblN1Ym1pdElkOiAnLmZvcm0tc2lnbmluIFt0eXBlPVwic3VibWl0XCJdJ1xyXG4gICAgfSkuaW5pdCgpO1xyXG5cclxuICAgIGNvbmZpcm1hdGlvbldpdGhSZWRpcmVjdCgpLmluaXQoKTtcclxuICAgIGhlYWRlci5pbml0SGVhZGVyKCk7XHJcbiAgICBidXJnZXJNZW51LmluaXQoKTtcclxuICAgIGZvbGxvdy5pbml0KCk7XHJcbiAgICBpbnN0YWdyYW1BY2NvdW50cy5pbml0KCk7XHJcbiAgICBtZXNzYWdlcy5pbml0KCk7XHJcbiAgICBjaGF0Qm90LmluaXQoKTtcclxuICAgIGF1dG9ncmVldGluZy5pbml0KCk7XHJcbn07XHJcblxyXG4oKCkgPT4gaW5pdCgpKSgpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYm9vdHN0cmFwLmpzIiwiaW1wb3J0IHtDT05TVH0gZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2NvbnN0cyc7XHJcbmltcG9ydCAqIGFzIHdpemFyZEZvcm0gZnJvbSAnLi4vLi4vYmxvY2tzL3dpemFyZC1mb3JtL3dpemFyZC1mb3JtJztcclxuaW1wb3J0IFVzZXJUYXNrTWFuYWdlciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvYXBpLXRhc2stbWFuYWdlcic7XHJcbmltcG9ydCAqIGFzIGNoYXRCb3RTdGF0dXMgZnJvbSAnLi9jaGF0LWJvdC1zdGF0dXMnO1xyXG5pbXBvcnQgKiBhcyBjaGF0Qm90TG9ncyBmcm9tICcuL2JvdC1sb2dzJztcclxuXHJcbmxldCB1c2VybmFtZVNlbGVjdGVkID0gJyc7XHJcbmxldCB1c2VyTGlzdEluc3RhZ3JhbSA9IFtdO1xyXG5jb25zdCBzZWxlY3RDbHMgPSAnanNfbG9ncy1hY2NvdW50cyc7XHJcblxyXG5mdW5jdGlvbiBvblN1Ym1pdEhhbmRsZXIoZSkge1xyXG4gICAgY29uc3QgZmllbGRzID0gJCgnLmNoYXQtYm90LXRleHQtZmllbGRzJyk7XHJcbiAgICBjb25zdCBrZXlXb3JkcyA9ICRlbCA9PiAkZWwudmFsKClcclxuICAgICAgICAudHJpbSgpXHJcbiAgICAgICAgLnJlcGxhY2UoLyAvZywgJycpXHJcbiAgICAgICAgLnNwbGl0KCcsJylcclxuICAgICAgICAuZmlsdGVyKGkgPT4gaS5sZW5ndGggPiAwKTtcclxuICAgIGNvbnN0IHJlcUJvZHkgPSBbXTtcclxuICAgIGZpZWxkcy5lYWNoKChpZHgsIGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCBrZXlXb3JkID0ga2V5V29yZHMoJChpdGVtKS5maW5kKCd0ZXh0YXJlYS5jaGF0LXdvcmRzJykpO1xyXG4gICAgICAgIGNvbnN0IGFuc3dlciA9ICQoaXRlbSkuZmluZCgndGV4dGFyZWEuY2hhdC1tZXNzYWdlcycpLnZhbCgpO1xyXG4gICAgICAgIHJlcUJvZHkucHVzaCh7J2tleV93b3Jkcyc6IGtleVdvcmQsIGFuc3dlcn0pO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBuUmVxQm9keSA9IHtcclxuICAgICAgICAndXNlcm5hbWUnOiB1c2VybmFtZVNlbGVjdGVkLFxyXG4gICAgICAgICd0eXBlJzogQ09OU1QudXJsLnRtVHlwZXMuY2hhdEJvdFQsIC8vICdDSEFUX0JPVCcsXHJcbiAgICAgICAgJ3N1YnR5cGUnOiBDT05TVC51cmwudG1UeXBlcy5jaGF0Qm90U3ViVFswXSwgLy8gJ0RFRkFVTFRfQ0hBVF9CT1QnLFxyXG4gICAgICAgICd1c2VyX2RlZmF1bHRfY29uZmlnJzoge30sXHJcbiAgICAgICAgJ3VzZXJfY3VzdG9tX2NvbmZpZyc6IHtcclxuICAgICAgICAgICAgJ3RleHRfZm9ybXMnOiByZXFCb2R5XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnbWFrZSByZXF1ZXN0IGhlcmUqKicsIG5SZXFCb2R5KTtcclxuICAgIGZ1bmN0aW9uIGNiRXJyb3IocmVzKSB7XHJcbiAgICAgICAgY29uc3QgbXNnID0gcmVzLnN0YXR1cy5tZXNzYWdlO1xyXG4gICAgICAgICQoJy5mb3JtLXN1Ym1pdC1maW5pc2gtLWVycm9yJykuYWRkQ2xhc3MoJ2QtYmxvY2snKVxyXG4gICAgICAgIC5maW5kKCcuYWxlcnQnKS5hcHBlbmQoYDxwPiR7bXNnfTwvcD5gKTtcclxuICAgIH1cclxuICAgIFVzZXJUYXNrTWFuYWdlci5wb3N0U3RhcnRDaGF0Qm90KG5SZXFCb2R5LCBjYkVycm9yKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygncG9zdEJvdCcpO1xyXG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzLnN0YXRlID09PSAnb2snKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xyXG4gICAgICAgICAgICAkKCcuZm9ybS1zdWJtaXQtZmluaXNoJykuYWRkQ2xhc3MoJ2QtYmxvY2snKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoJy5hbGVydCcpLmFwcGVuZChgPHA+dGFza19pZDogJHtyZXN1bHQuZGF0YS50YXNrX2lkfTwvcD5gKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsbExpc3RVc2Vycygkd3JhcHBlciwgZGF0YSkge1xyXG4gICAgJHdyYXBwZXIuZW1wdHkoKS5hZGRDbGFzcygnYm9yZGVyLWxpZ2h0LWNvbG9yJyk7XHJcbiAgICAkKGA8ZGl2IGNsYXNzPVwiXCI+0JTQvtGB0YLRg9C/0L3Ri9C1INCw0LrQutCw0YPQvdGC0Ys8L2Rpdj48c2VsZWN0IG5hbWU9XCJ0YXNrLXR5cGVcIiBjbGFzcz1cIiR7c2VsZWN0Q2xzfVwiPjwvc2VsZWN0PmApLmFwcGVuZFRvKCR3cmFwcGVyKTtcclxuICAgIGRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICQoYDxvcHRpb24gY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gcHktMlwiIHZhbHVlPVwiJHtpdGVtLnVzZXJuYW1lfVwiPlxyXG4gICAgICAgICAgICAke2l0ZW0udXNlcm5hbWV9XHJcbiAgICAgICAgPC9vcHRpb24+YCkuYXBwZW5kVG8oJChgLiR7c2VsZWN0Q2xzfWApKTtcclxuICAgIH0pO1xyXG4gICAgJChgLiR7c2VsZWN0Q2xzfWApLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdXNlcm5hbWVTZWxlY3RlZCA9ICQoYC4ke3NlbGVjdENsc30gb3B0aW9uOnNlbGVjdGVkYCkudmFsKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codXNlcm5hbWVTZWxlY3RlZCk7XHJcbiAgICAgICAgY2hhdEJvdExvZ3MuaW5pdChzZWxlY3RDbHMpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbml0IGhlYWRlclxyXG4gKi9cclxuZnVuY3Rpb24gaW5pdENoYXRNc2coKSB7XHJcbiAgICBjb25zdCB0cGxUZXh0RmllbGQgPSAoKSA9PiAkKGA8ZGl2IGNsYXNzPVwiY2hhdC1ib3QtdGV4dC1maWVsZHMgbXQtMlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwiZm9ybS1jb250cm9sIGNoYXQtd29yZHNcIiByb3dzPVwiNFwiIHBsYWNlaG9sZGVyPVwi0JLQstC10LTQuNGC0LUg0LrQu9GO0YfQtdCy0YvQtSDRgdC70L7QstCwINC40LvQuCDRhNGA0LDQt9GLINGH0LXRgNC10Lcg0LfQsNC/0Y/RgtGD0Y4sINC/0YDQuCDQutC+0YLQvtGA0YvRhSDQsdGD0LTQtdGCINGB0YDQsNCx0LDRgtGL0LLQsNGC0Ywg0YfQsNGCLdCx0L7RglwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWNvbnRyb2wgY2hhdC1tZXNzYWdlc1wiIHJvd3M9XCI0XCIgcGxhY2Vob2xkZXI9XCLQktCy0LXQtNC40YLQtSDRgdC+0L7QsdGJ0LXQvdC40LUsINC60L7RgtC+0YDQvtC1INCx0YPQtNC10YIg0L7RgtC/0YDQsNCy0LvRj9GC0YzRgdGPLCDQtdGB0LvQuCDQv9GA0LjRgdGD0YLRgdGC0LLQvtCy0LDQu9C4INC60LvRjtGHLtGB0LvQvtCy0LAg0LjQu9C4INGE0YDQsNC30Ysg0LjQtyDRgdGC0L7Qu9Cx0YbQsCDRgdC70LXQstCwXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5gKTtcclxuXHJcbiAgICAkKCcuanNfYWRkLWNoYXQtYm90Jykub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCBsYXN0VGV4dEZpZWxkID0gJCgnLmNoYXQtYm90LXRleHQtZmllbGRzJykubGFzdCgpO1xyXG4gICAgICAgIHRwbFRleHRGaWVsZCgpLmluc2VydEFmdGVyKGxhc3RUZXh0RmllbGQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gYWxlcnQgY2xvc2VcclxuICAgICQoJy5mb3JtLXN1Ym1pdC1maW5pc2ggLmNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhbGVydCBjbG9zZScpO1xyXG4gICAgICAgICQoJyN2LXBpbGxzLXJ1bm5lZC10YWInKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgIHdpbmRvdy5QdWJTdWIucHVibGlzaChDT05TVC5ldmVudHMudGFza3MuTkVXX1RBU0tfQ1JFQVRFRCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBhbGVydCBjbG9zZVxyXG4gICAgJCgnLmZvcm0tc3VibWl0LWZpbmlzaC0tZXJyb3IgLmNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhbGVydCBjbG9zZScpO1xyXG4gICAgICAgICQoJyN2LXBpbGxzLXJ1bm5lZC10YWInKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgIHdpbmRvdy5QdWJTdWIucHVibGlzaChDT05TVC5ldmVudHMudGFza3MuTkVXX1RBU0tfQ1JFQVRFRCk7XHJcbiAgICB9KTtcclxuICAgICQoJyN2LXBpbGxzLWxvZ3MtdGFiJykub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAvLyBhdCB0aGlzIHBvaW50IG9mIHRpbWUgc2V0SW50ZXJ2YWwgaXMgd29ya2luZ1xyXG4gICAgICAgIGNvbnN0ICR3cmFwcGVyID0gJCgnLmxvZy11c2Vycy1saXN0Jyk7XHJcbiAgICAgICAgZmlsbExpc3RVc2Vycygkd3JhcHBlciwgdXNlckxpc3RJbnN0YWdyYW0pO1xyXG4gICAgICAgIGNoYXRCb3RMb2dzLmluaXQoc2VsZWN0Q2xzKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRVc2VyTmFtZShzdGF0ZSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2dldFRhc2tzRGF0YScsIHN0YXRlLnVzZXJuYW1lKTtcclxuICAgIHVzZXJuYW1lU2VsZWN0ZWQgPSBzdGF0ZS51c2VybmFtZTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RlcFJlZHVjZXIoc3RlcE51bWJlciwgc3RhdGUpIHtcclxuICAgIHN3aXRjaCAoc3RlcE51bWJlcikge1xyXG4gICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgc2V0VXNlck5hbWUoc3RhdGUpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzdGF0ZSwgc3RlcE51bWJlcik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZWZhdWx0Jywgc3RlcE51bWJlcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgaWYgKCQoJy5jaGF0LWJvdC1wYWdlJykubGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3Qgd2l6YXJkQ2ZnID0ge1xyXG4gICAgICAgICAgICBzdGVwUmVkdWNlcixcclxuICAgICAgICAgICAgb25TdWJtaXRIYW5kbGVyXHJcbiAgICAgICAgfTtcclxuICAgICAgICB3aXphcmRGb3JtLmluaXQod2l6YXJkQ2ZnKTtcclxuICAgICAgICBpbml0Q2hhdE1zZygpO1xyXG4gICAgICAgIHdpbmRvdy5QdWJTdWIuc3Vic2NyaWJlKENPTlNULmV2ZW50cy5pbnN0YWdyYW1BY2NvdW5zLklOU1RBR1JBTV9BQ0NPVU5TX1JFTkRFUkVELCAoZSwgZGF0YU9iaikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSU5TVEFHUkFNX0FDQ09VTlNfUkVOREVSRUQnLCBkYXRhT2JqKTtcclxuICAgICAgICAgICAgdXNlckxpc3RJbnN0YWdyYW0gPSBkYXRhT2JqLmRhdGFBcnJheTtcclxuICAgICAgICAgICAgY2hhdEJvdFN0YXR1cy5pbml0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9hdXRvZ3JlZXRpbmcvYXV0b2dyZWV0aW5nLW1haW4uanMiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xyXG5pbXBvcnQgVXNlclRhc2tNYW5hZ2VyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9hcGktdGFzay1tYW5hZ2VyJztcclxuaW1wb3J0IHtDT05TVH0gZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2NvbnN0cyc7XHJcblxyXG5jb25zdCAkbGlzdCA9ICQoJy5ib3QtbG9nLXRhc2tzJyk7XHJcbmxldCBzZWxlY3RDbHMgPSAnc29tZUNsYXNzJztcclxuY29uc3QgZ2V0VXNlcm5hbWUgPSAoKSA9PiAkKGAuJHtzZWxlY3RDbHN9IG9wdGlvbjpzZWxlY3RlZGApLnZhbCgpO1xyXG5jb25zdCBwYXRoID0ge1xyXG4gICAgdHlwZTogQ09OU1QudXJsLnRtVHlwZXMuY2hhdEJvdFQsXHJcbiAgICBzdWJ0eXBlOiBDT05TVC51cmwudG1UeXBlcy5jaGF0Qm90U3ViVFswXSxcclxuICAgIHVzZXJuYW1lOiBnZXRVc2VybmFtZSgpXHJcbn07XHJcbmxldCBjdXJyZW50UGFnZSA9IG51bGw7XHJcbmxldCBpbnRlcnZhbElkID0gJyc7XHJcblxyXG5mdW5jdGlvbiBpbml0SGFuZGxlclBhZ2luYXRpb24oJHByZXZpb3VzLCAkbmV4dCwgZGF0YUFycmF5KSB7XHJcbiAgICBjb25zdCAkd3JhcHBlciA9ICQoJy5sb2dzLXBhZ2luYXRpb24nKTtcclxuICAgIGNvbnN0IHtwYWdpbmF0aW9ufSA9IGRhdGFBcnJheS5zZXR0aW5ncztcclxuICAgIGNvbnN0IGxhc3RQYWdlID0gcGFnaW5hdGlvbi5wYWdlc1twYWdpbmF0aW9uLnBhZ2VzLmxlbmd0aCAtIDFdO1xyXG4gICAgY29uc3QgdXBkYXRlQnV0dG9ucyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkd3JhcHBlci5maW5kKCdsaS5wYWdlLW51bWJlci5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgLy8gJCgkd3JhcHBlci5maW5kKCdsaS5wYWdlLW51bWJlcicpW3BhZ2luYXRpb24uY3VycmVudF0pLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgIH07XHJcbiAgICAkcHJldmlvdXMub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50QWN0aXZlSWR4ID0gJHdyYXBwZXIuZmluZCgnbGkucGFnZS1udW1iZXIuYWN0aXZlJykuaW5kZXgoKTtcclxuICAgICAgICBjb25zdCBwYWdlID0gcGFnaW5hdGlvbi5wcmV2aW91cztcclxuICAgICAgICBpZiAoIXBhZ2luYXRpb24ucHJldmlvdXMpIHtcclxuICAgICAgICAgICAgJHByZXZpb3VzLmFkZENsYXNzKCdkaXNhYmxlZCcpLnByb3AoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3VycmVudFBhZ2UgPSBwYWdpbmF0aW9uLnByZXZpb3VzO1xyXG4gICAgICAgIHVwZGF0ZUJ1dHRvbnMoZSwgY3VycmVudEFjdGl2ZUlkeCAtIDEpO1xyXG4gICAgICAgIGdldExvZ3NEYXRhKCRsaXN0LCBwYXRoLCBwYWdlKTtcclxuICAgIH0pO1xyXG5cclxuICAgICRuZXh0Lm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudEFjdGl2ZUlkeCA9ICR3cmFwcGVyLmZpbmQoJ2xpLnBhZ2UtbnVtYmVyLmFjdGl2ZScpLmluZGV4KCk7XHJcbiAgICAgICAgY29uc3QgcGFnZSA9IHBhZ2luYXRpb24ubmV4dDtcclxuICAgICAgICBpZiAoIXBhZ2luYXRpb24ubmV4dCkge1xyXG4gICAgICAgICAgICAvLyAkcHJldmlvdXMuYWRkQ2xhc3MoJ2Rpc2FibGVkJykucHJvcCgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjdXJyZW50UGFnZSA9IHBhZ2luYXRpb24ubmV4dDtcclxuICAgICAgICB1cGRhdGVCdXR0b25zKGUsIGN1cnJlbnRBY3RpdmVJZHgpO1xyXG4gICAgICAgIGlmIChsYXN0UGFnZSA8PSBjdXJyZW50QWN0aXZlSWR4ICsgMSkge1xyXG4gICAgICAgICAgICAkKGUudGFyZ2V0KS5wYXJlbnQoKS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGN1cnJlbnRBY3RpdmVJZHggJiYgJHByZXZpb3VzLmhhc0NsYXNzKCdkaXNhYmxlZCcpKSB7XHJcbiAgICAgICAgICAgICRwcmV2aW91cy5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0TG9nc0RhdGEoJGxpc3QsIHBhdGgsIHBhZ2UpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnI3YtcGlsbHMtbG9ncy10YWInKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIC8vIGF0IHRoaXMgcG9pbnQgb2YgdGltZSBzZXRJbnRlcnZhbCBpcyB3b3JraW5nXHJcbiAgICAgICAgY3VycmVudFBhZ2UgPSAxO1xyXG4gICAgfSk7XHJcbiAgICAkKCcucGFnZS1udW1iZXInKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbCA9ICQoZS50YXJnZXQpLnRleHQoKTtcclxuICAgICAgICBjdXJyZW50UGFnZSA9IHBhcnNlSW50KHZhbCwgMTApO1xyXG4gICAgICAgIGdldExvZ3NEYXRhKCRsaXN0LCBwYXRoLCBjdXJyZW50UGFnZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudFBhZ2UpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFBhZ2luYXRpb24oZGF0YUFycmF5LCAkd3JhcHBlcikge1xyXG4gICAgY29uc3Qge3BhZ2luYXRpb259ID0gZGF0YUFycmF5LnNldHRpbmdzO1xyXG4gICAgY29uc3QgdHBsUHJldmlvdXMgPSAkKGA8bGkgY2xhc3M9XCJwYWdlLWl0ZW0gJHsoIXBhZ2luYXRpb24ucHJldmlvdXMpID8gJ2Rpc2FibGVkJyA6ICcnfVwiPjxhIGNsYXNzPVwicGFnZS1saW5rXCIgaHJlZj1cIiNcIiAkeyghcGFnaW5hdGlvbi5wcmV2aW91cykgPyAndGFiaW5kZXg9XCItMVwiJyA6ICcnfT7QndCw0LfQsNC0PC9hPjwvbGk+YCk7XHJcbiAgICBjb25zdCB0cGxOZXh0ID0gJChgPGxpIGNsYXNzPVwicGFnZS1pdGVtICR7KCFwYWdpbmF0aW9uLm5leHQpID8gJ2Rpc2FibGVkJyA6ICcnfVwiPjxhIGNsYXNzPVwicGFnZS1saW5rXCIgaHJlZj1cIiNcIiAkeyghcGFnaW5hdGlvbi5uZXh0KSA/ICd0YWJpbmRleD1cIi0xXCInIDogJyd9PtCS0L/QtdGA0LXQtDwvYT48L2xpPmApO1xyXG4gICAgY2xlYXJQYWdpbmF0aW9uKCR3cmFwcGVyKTtcclxuXHJcbiAgICAkd3JhcHBlci5hcHBlbmQodHBsUHJldmlvdXMpO1xyXG4gICAgcGFnaW5hdGlvblsncGFnZXMnXS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgJChgPGxpIGNsYXNzPVwicGFnZS1pdGVtIHBhZ2UtbnVtYmVyICR7KHBhZ2luYXRpb24uY3VycmVudCA9PT0gaXRlbSkgPyAnYWN0aXZlJyA6ICcnfVwiPjxhIGNsYXNzPVwicGFnZS1saW5rXCIgaHJlZj1cIiNcIj4ke2l0ZW19PC9hPjwvbGk+YCkuYXBwZW5kVG8oJHdyYXBwZXIpO1xyXG4gICAgfSk7XHJcbiAgICAkd3JhcHBlci5hcHBlbmQodHBsTmV4dCk7XHJcbiAgICBpbml0SGFuZGxlclBhZ2luYXRpb24odHBsUHJldmlvdXMsIHRwbE5leHQsIGRhdGFBcnJheSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyUGFnaW5hdGlvbigkd3JhcHBlcikge1xyXG4gICAgJHdyYXBwZXIuZW1wdHkoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsbExpc3RNZXRhKCRsaXN0LCBkYXRhQXJyYXksIGlzUnVucykge1xyXG4gICAgY29uc3QgJHdyYXBwZXJQYWdpbmF0aW9uID0gJCgnLmxvZ3MtcGFnaW5hdGlvbicpO1xyXG4gICAgY29uc3QgaXRlbXMgPSBkYXRhQXJyYXkubG9ncztcclxuICAgIC8vIGNvbnN0IGRlZmF1bHRBdmF0YXJTcmMgPSAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9qTk5UNExFLnBuZyc7XHJcbiAgICAkbGlzdC5lbXB0eSgpO1xyXG4gICAgaWYgKCFpdGVtcy5sZW5ndGgpIHtcclxuICAgICAgICAkKGA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gcHktMlwiPlxyXG4gICAgICAgICAgICA8cD7QkiDRjdGC0L7QvCDRgNCw0LfQtNC10LvQtSDQvdC10YIg0L3QuCDQvtC00L3QvtC5INC30LDQtNCw0YfQuC48L3A+XHJcbiAgICAgICAgPC9saT5gKS5hcHBlbmRUbygkbGlzdCk7XHJcbiAgICAgICAgY2xlYXJQYWdpbmF0aW9uKCR3cmFwcGVyUGFnaW5hdGlvbik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgYWRkUGFnaW5hdGlvbihkYXRhQXJyYXksICR3cmFwcGVyUGFnaW5hdGlvbik7XHJcbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgY29uc3Qge2xldmVsLCB2YWx1ZX0gPSBpdGVtO1xyXG4gICAgICAgICQoYDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBwLTAgcHktMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1ib2R5IGQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHRhc2stdHlwZSAkeyhsZXZlbCA9PT0gJ0VSUk9SJykgPyAndGV4dC1kYW5nZXInIDogJyd9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAkeyh2YWx1ZSkgPyBgJHt2YWx1ZX1gIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9saT5gKS5hcHBlbmRUbygkbGlzdCk7XHJcblxyXG4gICAgICAgIGlmICghJCgnbGknLCAkbGlzdCkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICQoYDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBweS0yXCIgPlxyXG4gICAgICAgICAgICAgICAgPHA+0JIg0Y3RgtC+0Lwg0YDQsNC30LTQtdC70LUg0L3QtdGCINC90Lgg0L7QtNC90L7QuSDQt9Cw0LTQsNGH0LguPC9wPlxyXG4gICAgICAgICAgICA8L2xpPmApLmFwcGVuZFRvKCRsaXN0KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TG9nc0RhdGEoJGxpc3QsIHBhdGgsIHBhZ2UpIHtcclxuICAgIHBhdGgudXNlcm5hbWUgPSBnZXRVc2VybmFtZShzZWxlY3RDbHMpO1xyXG4gICAgVXNlclRhc2tNYW5hZ2VyLmdldExvZ3NDaGF0Qm90KHBhdGgsIHBhZ2UpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzLnN0YXRlID09PSAnb2snKSB7XHJcbiAgICAgICAgICAgIGZpbGxMaXN0TWV0YSgkbGlzdCwgcmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVJbnRlcnZhbCA9IHJlc3VsdC5kYXRhLnNldHRpbmdzLmludm9rZV9pbl9taWxsaXM7XHJcbiAgICAgICAgICAgIC8vIHJlc2V0IFRpbWVyIHJlcXVlc3RcclxuICAgICAgICAgICAgaWYgKGludGVydmFsSWQpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFjdXJyZW50UGFnZSA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbmRlbnRcclxuICAgICAgICAgICAgICAgICAgICBnZXRMb2dzRGF0YSgkbGlzdCwgcGF0aCwgY3VycmVudFBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfSwgdXBkYXRlSW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIHB5LTJcIj5cclxuICAgICAgICAgICAgICAgIDxwPtCd0LXRgiDQtNC+0YHRgtGD0L/QsDwvcD5cclxuICAgICAgICAgICAgPC9saT5gKS5hcHBlbmRUbygkbGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0KF9zZWxlY3RDbHMpIHtcclxuICAgIGlmICgkKCcuY2hhdC1ib3QtcGFnZScpLmxlbmd0aCkge1xyXG4gICAgICAgIHNlbGVjdENscyA9IF9zZWxlY3RDbHM7XHJcbiAgICAgICAgaWYgKGdldFVzZXJuYW1lKCkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZ2V0VXNlcm5hbWUoKSk7XHJcbiAgICAgICAgICAgIGdldExvZ3NEYXRhKCRsaXN0LCBwYXRoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2VsZWN0IHVzZXInKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9hdXRvZ3JlZXRpbmcvYm90LWxvZ3MuanMiLCJpbXBvcnQge0NPTlNUfSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29uc3RzJztcclxuaW1wb3J0IHtnZXRUYXNrc0RhdGF9IGZyb20gJy4uL2ZvbGxvdy9mb2xsb3ctc3RhdHVzJztcclxuLy8gaW1wb3J0ICogYXMgY2hhdEJvdExvZ3MgZnJvbSAnLi9ib3QtbG9ncyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIGlmICgkKCcuY2hhdC1ib3QtcGFnZScpLmxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IHBhdGggPSB7XHJcbiAgICAgICAgICAgIHR5cGU6IENPTlNULnVybC50bVR5cGVzLmF1dG9ncmVldFQsXHJcbiAgICAgICAgICAgIHN1YnR5cGU6IENPTlNULnVybC50bVR5cGVzLmF1dG9ncmVldFN1YlRbMF1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHdyYXBwZXJzID0ge1xyXG4gICAgICAgICAgICAkcnVuczogJCgnLmJvdC10YXNrcy1ydW5zJyksXHJcbiAgICAgICAgICAgICRzdG9wcGVkOiAkKCcuYm90LXRhc2tzLXN0b3BwZWQnKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZ2V0VGFza3NEYXRhKHdyYXBwZXJzLCBwYXRoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwYXRoKTtcclxuICAgICAgICB3aW5kb3cuUHViU3ViLnN1YnNjcmliZShDT05TVC5ldmVudHMuaW5zdGFncmFtQWNjb3Vucy5JTlNUQUdSQU1fQUNDT1VOU19SRU5ERVJFRCwgKGV2ZW50TmFtZSwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBnZXRUYXNrc0RhdGEod3JhcHBlcnMsIHBhdGgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnKipjaGF0LWJvdC1zdGF0dXMnLCBldmVudE5hbWUsIGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHdpbmRvdy5QdWJTdWIuc3Vic2NyaWJlKENPTlNULmV2ZW50cy50YXNrcy5ORVdfVEFTS19DUkVBVEVELCAoZXZlbnROYW1lLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGdldFRhc2tzRGF0YSh3cmFwcGVycywgcGF0aCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3MvYXV0b2dyZWV0aW5nL2NoYXQtYm90LXN0YXR1cy5qcyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXHJcbmltcG9ydCBVc2VyVGFza01hbmFnZXIgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2FwaS10YXNrLW1hbmFnZXInO1xyXG5pbXBvcnQge0NPTlNUfSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29uc3RzJztcclxuXHJcbmNvbnN0ICRsaXN0ID0gJCgnLmJvdC1sb2ctdGFza3MnKTtcclxubGV0IHNlbGVjdENscyA9ICdzb21lQ2xhc3MnO1xyXG5jb25zdCBnZXRVc2VybmFtZSA9ICgpID0+ICQoYC4ke3NlbGVjdENsc30gb3B0aW9uOnNlbGVjdGVkYCkudmFsKCk7XHJcbmNvbnN0IHBhdGggPSB7XHJcbiAgICB0eXBlOiBDT05TVC51cmwudG1UeXBlcy5jaGF0Qm90VCxcclxuICAgIHN1YnR5cGU6IENPTlNULnVybC50bVR5cGVzLmNoYXRCb3RTdWJUWzBdLFxyXG4gICAgdXNlcm5hbWU6IGdldFVzZXJuYW1lKClcclxufTtcclxubGV0IGN1cnJlbnRQYWdlID0gbnVsbDtcclxubGV0IGludGVydmFsSWQgPSAnJztcclxuXHJcbmZ1bmN0aW9uIGluaXRIYW5kbGVyUGFnaW5hdGlvbigkcHJldmlvdXMsICRuZXh0LCBkYXRhQXJyYXkpIHtcclxuICAgIGNvbnN0ICR3cmFwcGVyID0gJCgnLmxvZ3MtcGFnaW5hdGlvbicpO1xyXG4gICAgY29uc3Qge3BhZ2luYXRpb259ID0gZGF0YUFycmF5LnNldHRpbmdzO1xyXG4gICAgY29uc3QgbGFzdFBhZ2UgPSBwYWdpbmF0aW9uLnBhZ2VzW3BhZ2luYXRpb24ucGFnZXMubGVuZ3RoIC0gMV07XHJcbiAgICBjb25zdCB1cGRhdGVCdXR0b25zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICR3cmFwcGVyLmZpbmQoJ2xpLnBhZ2UtbnVtYmVyLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAvLyAkKCR3cmFwcGVyLmZpbmQoJ2xpLnBhZ2UtbnVtYmVyJylbcGFnaW5hdGlvbi5jdXJyZW50XSkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfTtcclxuICAgICRwcmV2aW91cy5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRBY3RpdmVJZHggPSAkd3JhcHBlci5maW5kKCdsaS5wYWdlLW51bWJlci5hY3RpdmUnKS5pbmRleCgpO1xyXG4gICAgICAgIGNvbnN0IHBhZ2UgPSBwYWdpbmF0aW9uLnByZXZpb3VzO1xyXG4gICAgICAgIGlmICghcGFnaW5hdGlvbi5wcmV2aW91cykge1xyXG4gICAgICAgICAgICAkcHJldmlvdXMuYWRkQ2xhc3MoJ2Rpc2FibGVkJykucHJvcCgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjdXJyZW50UGFnZSA9IHBhZ2luYXRpb24ucHJldmlvdXM7XHJcbiAgICAgICAgdXBkYXRlQnV0dG9ucyhlLCBjdXJyZW50QWN0aXZlSWR4IC0gMSk7XHJcbiAgICAgICAgZ2V0TG9nc0RhdGEoJGxpc3QsIHBhdGgsIHBhZ2UpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJG5leHQub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50QWN0aXZlSWR4ID0gJHdyYXBwZXIuZmluZCgnbGkucGFnZS1udW1iZXIuYWN0aXZlJykuaW5kZXgoKTtcclxuICAgICAgICBjb25zdCBwYWdlID0gcGFnaW5hdGlvbi5uZXh0O1xyXG4gICAgICAgIGlmICghcGFnaW5hdGlvbi5uZXh0KSB7XHJcbiAgICAgICAgICAgIC8vICRwcmV2aW91cy5hZGRDbGFzcygnZGlzYWJsZWQnKS5wcm9wKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN1cnJlbnRQYWdlID0gcGFnaW5hdGlvbi5uZXh0O1xyXG4gICAgICAgIHVwZGF0ZUJ1dHRvbnMoZSwgY3VycmVudEFjdGl2ZUlkeCk7XHJcbiAgICAgICAgaWYgKGxhc3RQYWdlIDw9IGN1cnJlbnRBY3RpdmVJZHggKyAxKSB7XHJcbiAgICAgICAgICAgICQoZS50YXJnZXQpLnBhcmVudCgpLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY3VycmVudEFjdGl2ZUlkeCAmJiAkcHJldmlvdXMuaGFzQ2xhc3MoJ2Rpc2FibGVkJykpIHtcclxuICAgICAgICAgICAgJHByZXZpb3VzLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnZXRMb2dzRGF0YSgkbGlzdCwgcGF0aCwgcGFnZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcjdi1waWxscy1sb2dzLXRhYicpLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgLy8gYXQgdGhpcyBwb2ludCBvZiB0aW1lIHNldEludGVydmFsIGlzIHdvcmtpbmdcclxuICAgICAgICBjdXJyZW50UGFnZSA9IDE7XHJcbiAgICB9KTtcclxuICAgICQoJy5wYWdlLW51bWJlcicpLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdmFsID0gJChlLnRhcmdldCkudGV4dCgpO1xyXG4gICAgICAgIGN1cnJlbnRQYWdlID0gcGFyc2VJbnQodmFsLCAxMCk7XHJcbiAgICAgICAgZ2V0TG9nc0RhdGEoJGxpc3QsIHBhdGgsIGN1cnJlbnRQYWdlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50UGFnZSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUGFnaW5hdGlvbihkYXRhQXJyYXksICR3cmFwcGVyKSB7XHJcbiAgICBjb25zdCB7cGFnaW5hdGlvbn0gPSBkYXRhQXJyYXkuc2V0dGluZ3M7XHJcbiAgICBjb25zdCB0cGxQcmV2aW91cyA9ICQoYDxsaSBjbGFzcz1cInBhZ2UtaXRlbSAkeyghcGFnaW5hdGlvbi5wcmV2aW91cykgPyAnZGlzYWJsZWQnIDogJyd9XCI+PGEgY2xhc3M9XCJwYWdlLWxpbmtcIiBocmVmPVwiI1wiICR7KCFwYWdpbmF0aW9uLnByZXZpb3VzKSA/ICd0YWJpbmRleD1cIi0xXCInIDogJyd9PtCd0LDQt9Cw0LQ8L2E+PC9saT5gKTtcclxuICAgIGNvbnN0IHRwbE5leHQgPSAkKGA8bGkgY2xhc3M9XCJwYWdlLWl0ZW0gJHsoIXBhZ2luYXRpb24ubmV4dCkgPyAnZGlzYWJsZWQnIDogJyd9XCI+PGEgY2xhc3M9XCJwYWdlLWxpbmtcIiBocmVmPVwiI1wiICR7KCFwYWdpbmF0aW9uLm5leHQpID8gJ3RhYmluZGV4PVwiLTFcIicgOiAnJ30+0JLQv9C10YDQtdC0PC9hPjwvbGk+YCk7XHJcbiAgICBjbGVhclBhZ2luYXRpb24oJHdyYXBwZXIpO1xyXG5cclxuICAgICR3cmFwcGVyLmFwcGVuZCh0cGxQcmV2aW91cyk7XHJcbiAgICBwYWdpbmF0aW9uWydwYWdlcyddLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAkKGA8bGkgY2xhc3M9XCJwYWdlLWl0ZW0gcGFnZS1udW1iZXIgJHsocGFnaW5hdGlvbi5jdXJyZW50ID09PSBpdGVtKSA/ICdhY3RpdmUnIDogJyd9XCI+PGEgY2xhc3M9XCJwYWdlLWxpbmtcIiBocmVmPVwiI1wiPiR7aXRlbX08L2E+PC9saT5gKS5hcHBlbmRUbygkd3JhcHBlcik7XHJcbiAgICB9KTtcclxuICAgICR3cmFwcGVyLmFwcGVuZCh0cGxOZXh0KTtcclxuICAgIGluaXRIYW5kbGVyUGFnaW5hdGlvbih0cGxQcmV2aW91cywgdHBsTmV4dCwgZGF0YUFycmF5KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJQYWdpbmF0aW9uKCR3cmFwcGVyKSB7XHJcbiAgICAkd3JhcHBlci5lbXB0eSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaWxsTGlzdE1ldGEoJGxpc3QsIGRhdGFBcnJheSwgaXNSdW5zKSB7XHJcbiAgICBjb25zdCAkd3JhcHBlclBhZ2luYXRpb24gPSAkKCcubG9ncy1wYWdpbmF0aW9uJyk7XHJcbiAgICBjb25zdCBpdGVtcyA9IGRhdGFBcnJheS5sb2dzO1xyXG4gICAgLy8gY29uc3QgZGVmYXVsdEF2YXRhclNyYyA9ICdodHRwczovL2kuaW1ndXIuY29tL2pOTlQ0TEUucG5nJztcclxuICAgICRsaXN0LmVtcHR5KCk7XHJcbiAgICBpZiAoIWl0ZW1zLmxlbmd0aCkge1xyXG4gICAgICAgICQoYDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBweS0yXCI+XHJcbiAgICAgICAgICAgIDxwPtCSINGN0YLQvtC8INGA0LDQt9C00LXQu9C1INC90LXRgiDQvdC4INC+0LTQvdC+0Lkg0LfQsNC00LDRh9C4LjwvcD5cclxuICAgICAgICA8L2xpPmApLmFwcGVuZFRvKCRsaXN0KTtcclxuICAgICAgICBjbGVhclBhZ2luYXRpb24oJHdyYXBwZXJQYWdpbmF0aW9uKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBhZGRQYWdpbmF0aW9uKGRhdGFBcnJheSwgJHdyYXBwZXJQYWdpbmF0aW9uKTtcclxuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCB7bGV2ZWwsIHZhbHVlfSA9IGl0ZW07XHJcbiAgICAgICAgJChgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIHAtMCBweS0yXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWJvZHkgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgdGFzay10eXBlICR7KGxldmVsID09PSAnRVJST1InKSA/ICd0ZXh0LWRhbmdlcicgOiAnJ31cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICR7KHZhbHVlKSA/IGAke3ZhbHVlfWAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2xpPmApLmFwcGVuZFRvKCRsaXN0KTtcclxuXHJcbiAgICAgICAgaWYgKCEkKCdsaScsICRsaXN0KS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgJChgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIHB5LTJcIiA+XHJcbiAgICAgICAgICAgICAgICA8cD7QkiDRjdGC0L7QvCDRgNCw0LfQtNC10LvQtSDQvdC10YIg0L3QuCDQvtC00L3QvtC5INC30LDQtNCw0YfQuC48L3A+XHJcbiAgICAgICAgICAgIDwvbGk+YCkuYXBwZW5kVG8oJGxpc3QpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRMb2dzRGF0YSgkbGlzdCwgcGF0aCwgcGFnZSkge1xyXG4gICAgcGF0aC51c2VybmFtZSA9IGdldFVzZXJuYW1lKHNlbGVjdENscyk7XHJcbiAgICBVc2VyVGFza01hbmFnZXIuZ2V0TG9nc0NoYXRCb3QocGF0aCwgcGFnZSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMuc3RhdGUgPT09ICdvaycpIHtcclxuICAgICAgICAgICAgZmlsbExpc3RNZXRhKCRsaXN0LCByZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZUludGVydmFsID0gcmVzdWx0LmRhdGEuc2V0dGluZ3MuaW52b2tlX2luX21pbGxpcztcclxuICAgICAgICAgICAgLy8gcmVzZXQgVGltZXIgcmVxdWVzdFxyXG4gICAgICAgICAgICBpZiAoaW50ZXJ2YWxJZCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWN1cnJlbnRQYWdlID49IDEpIHtcclxuICAgICAgICAgICAgICAgIGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGluZGVudFxyXG4gICAgICAgICAgICAgICAgICAgIGdldExvZ3NEYXRhKCRsaXN0LCBwYXRoLCBjdXJyZW50UGFnZSk7XHJcbiAgICAgICAgICAgICAgICB9LCB1cGRhdGVJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKGA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gcHktMlwiPlxyXG4gICAgICAgICAgICAgICAgPHA+0J3QtdGCINC00L7RgdGC0YPQv9CwPC9wPlxyXG4gICAgICAgICAgICA8L2xpPmApLmFwcGVuZFRvKCRsaXN0KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoX3NlbGVjdENscykge1xyXG4gICAgaWYgKCQoJy5jaGF0LWJvdC1wYWdlJykubGVuZ3RoKSB7XHJcbiAgICAgICAgc2VsZWN0Q2xzID0gX3NlbGVjdENscztcclxuICAgICAgICBpZiAoZ2V0VXNlcm5hbWUoKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhnZXRVc2VybmFtZSgpKTtcclxuICAgICAgICAgICAgZ2V0TG9nc0RhdGEoJGxpc3QsIHBhdGgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZWxlY3QgdXNlcicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL2NoYXQtYm90LWJsb2NrL2JvdC1sb2dzLmpzIiwiaW1wb3J0IHtDT05TVH0gZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2NvbnN0cyc7XHJcbmltcG9ydCAqIGFzIHdpemFyZEZvcm0gZnJvbSAnLi4vLi4vYmxvY2tzL3dpemFyZC1mb3JtL3dpemFyZC1mb3JtJztcclxuaW1wb3J0IFVzZXJUYXNrTWFuYWdlciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvYXBpLXRhc2stbWFuYWdlcic7XHJcbmltcG9ydCAqIGFzIGNoYXRCb3RTdGF0dXMgZnJvbSAnLi9jaGF0LWJvdC1zdGF0dXMnO1xyXG5pbXBvcnQgKiBhcyBjaGF0Qm90TG9ncyBmcm9tICcuL2JvdC1sb2dzJztcclxuXHJcbmxldCB1c2VybmFtZVNlbGVjdGVkID0gJyc7XHJcbmxldCB1c2VyTGlzdEluc3RhZ3JhbSA9IFtdO1xyXG5jb25zdCBzZWxlY3RDbHMgPSAnanNfbG9ncy1hY2NvdW50cyc7XHJcblxyXG5mdW5jdGlvbiBvblN1Ym1pdEhhbmRsZXIoZSkge1xyXG4gICAgY29uc3QgZmllbGRzID0gJCgnLmNoYXQtYm90LXRleHQtZmllbGRzJyk7XHJcbiAgICBjb25zdCBrZXlXb3JkcyA9ICRlbCA9PiAkZWwudmFsKClcclxuICAgICAgICAudHJpbSgpXHJcbiAgICAgICAgLnJlcGxhY2UoLyAvZywgJycpXHJcbiAgICAgICAgLnNwbGl0KCcsJylcclxuICAgICAgICAuZmlsdGVyKGkgPT4gaS5sZW5ndGggPiAwKTtcclxuICAgIGNvbnN0IHJlcUJvZHkgPSBbXTtcclxuICAgIGZpZWxkcy5lYWNoKChpZHgsIGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCBrZXlXb3JkID0ga2V5V29yZHMoJChpdGVtKS5maW5kKCd0ZXh0YXJlYS5jaGF0LXdvcmRzJykpO1xyXG4gICAgICAgIGNvbnN0IGFuc3dlciA9ICQoaXRlbSkuZmluZCgndGV4dGFyZWEuY2hhdC1tZXNzYWdlcycpLnZhbCgpO1xyXG4gICAgICAgIHJlcUJvZHkucHVzaCh7J2tleV93b3Jkcyc6IGtleVdvcmQsIGFuc3dlcn0pO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBuUmVxQm9keSA9IHtcclxuICAgICAgICAndXNlcm5hbWUnOiB1c2VybmFtZVNlbGVjdGVkLFxyXG4gICAgICAgICd0eXBlJzogQ09OU1QudXJsLnRtVHlwZXMuY2hhdEJvdFQsIC8vICdDSEFUX0JPVCcsXHJcbiAgICAgICAgJ3N1YnR5cGUnOiBDT05TVC51cmwudG1UeXBlcy5jaGF0Qm90U3ViVFswXSwgLy8gJ0RFRkFVTFRfQ0hBVF9CT1QnLFxyXG4gICAgICAgICd1c2VyX2RlZmF1bHRfY29uZmlnJzoge30sXHJcbiAgICAgICAgJ3VzZXJfY3VzdG9tX2NvbmZpZyc6IHtcclxuICAgICAgICAgICAgJ3RleHRfZm9ybXMnOiByZXFCb2R5XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnbWFrZSByZXF1ZXN0IGhlcmUqKicsIG5SZXFCb2R5KTtcclxuICAgIGZ1bmN0aW9uIGNiRXJyb3IocmVzKSB7XHJcbiAgICAgICAgY29uc3QgbXNnID0gcmVzLnN0YXR1cy5tZXNzYWdlO1xyXG4gICAgICAgICQoJy5mb3JtLXN1Ym1pdC1maW5pc2gtLWVycm9yJykuYWRkQ2xhc3MoJ2QtYmxvY2snKVxyXG4gICAgICAgIC5maW5kKCcuYWxlcnQnKS5hcHBlbmQoYDxwPiR7bXNnfTwvcD5gKTtcclxuICAgIH1cclxuICAgIFVzZXJUYXNrTWFuYWdlci5wb3N0U3RhcnRDaGF0Qm90KG5SZXFCb2R5LCBjYkVycm9yKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygncG9zdEJvdCcpO1xyXG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzLnN0YXRlID09PSAnb2snKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xyXG4gICAgICAgICAgICAkKCcuZm9ybS1zdWJtaXQtZmluaXNoJykuYWRkQ2xhc3MoJ2QtYmxvY2snKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoJy5hbGVydCcpLmFwcGVuZChgPHA+dGFza19pZDogJHtyZXN1bHQuZGF0YS50YXNrX2lkfTwvcD5gKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsbExpc3RVc2Vycygkd3JhcHBlciwgZGF0YSkge1xyXG4gICAgJHdyYXBwZXIuZW1wdHkoKS5hZGRDbGFzcygnYm9yZGVyLWxpZ2h0LWNvbG9yJyk7XHJcbiAgICAkKGA8ZGl2IGNsYXNzPVwiXCI+0JTQvtGB0YLRg9C/0L3Ri9C1INCw0LrQutCw0YPQvdGC0Ys8L2Rpdj48c2VsZWN0IG5hbWU9XCJ0YXNrLXR5cGVcIiBjbGFzcz1cIiR7c2VsZWN0Q2xzfVwiPjwvc2VsZWN0PmApLmFwcGVuZFRvKCR3cmFwcGVyKTtcclxuICAgIGRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICQoYDxvcHRpb24gY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gcHktMlwiIHZhbHVlPVwiJHtpdGVtLnVzZXJuYW1lfVwiPlxyXG4gICAgICAgICAgICAke2l0ZW0udXNlcm5hbWV9XHJcbiAgICAgICAgPC9vcHRpb24+YCkuYXBwZW5kVG8oJChgLiR7c2VsZWN0Q2xzfWApKTtcclxuICAgIH0pO1xyXG4gICAgJChgLiR7c2VsZWN0Q2xzfWApLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdXNlcm5hbWVTZWxlY3RlZCA9ICQoYC4ke3NlbGVjdENsc30gb3B0aW9uOnNlbGVjdGVkYCkudmFsKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codXNlcm5hbWVTZWxlY3RlZCk7XHJcbiAgICAgICAgY2hhdEJvdExvZ3MuaW5pdChzZWxlY3RDbHMpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbml0IGhlYWRlclxyXG4gKi9cclxuZnVuY3Rpb24gaW5pdENoYXRNc2coKSB7XHJcbiAgICBjb25zdCB0cGxUZXh0RmllbGQgPSAoKSA9PiAkKGA8ZGl2IGNsYXNzPVwiY2hhdC1ib3QtdGV4dC1maWVsZHMgbXQtMlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwiZm9ybS1jb250cm9sIGNoYXQtd29yZHNcIiByb3dzPVwiNFwiIHBsYWNlaG9sZGVyPVwi0JLQstC10LTQuNGC0LUg0LrQu9GO0YfQtdCy0YvQtSDRgdC70L7QstCwINC40LvQuCDRhNGA0LDQt9GLINGH0LXRgNC10Lcg0LfQsNC/0Y/RgtGD0Y4sINC/0YDQuCDQutC+0YLQvtGA0YvRhSDQsdGD0LTQtdGCINGB0YDQsNCx0LDRgtGL0LLQsNGC0Ywg0YfQsNGCLdCx0L7RglwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWNvbnRyb2wgY2hhdC1tZXNzYWdlc1wiIHJvd3M9XCI0XCIgcGxhY2Vob2xkZXI9XCLQktCy0LXQtNC40YLQtSDRgdC+0L7QsdGJ0LXQvdC40LUsINC60L7RgtC+0YDQvtC1INCx0YPQtNC10YIg0L7RgtC/0YDQsNCy0LvRj9GC0YzRgdGPLCDQtdGB0LvQuCDQv9GA0LjRgdGD0YLRgdGC0LLQvtCy0LDQu9C4INC60LvRjtGHLtGB0LvQvtCy0LAg0LjQu9C4INGE0YDQsNC30Ysg0LjQtyDRgdGC0L7Qu9Cx0YbQsCDRgdC70LXQstCwXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5gKTtcclxuXHJcbiAgICAkKCcuanNfYWRkLWNoYXQtYm90Jykub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCBsYXN0VGV4dEZpZWxkID0gJCgnLmNoYXQtYm90LXRleHQtZmllbGRzJykubGFzdCgpO1xyXG4gICAgICAgIHRwbFRleHRGaWVsZCgpLmluc2VydEFmdGVyKGxhc3RUZXh0RmllbGQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gYWxlcnQgY2xvc2VcclxuICAgICQoJy5mb3JtLXN1Ym1pdC1maW5pc2ggLmNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhbGVydCBjbG9zZScpO1xyXG4gICAgICAgICQoJyN2LXBpbGxzLXJ1bm5lZC10YWInKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgIHdpbmRvdy5QdWJTdWIucHVibGlzaChDT05TVC5ldmVudHMudGFza3MuTkVXX1RBU0tfQ1JFQVRFRCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBhbGVydCBjbG9zZVxyXG4gICAgJCgnLmZvcm0tc3VibWl0LWZpbmlzaC0tZXJyb3IgLmNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhbGVydCBjbG9zZScpO1xyXG4gICAgICAgICQoJyN2LXBpbGxzLXJ1bm5lZC10YWInKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgIHdpbmRvdy5QdWJTdWIucHVibGlzaChDT05TVC5ldmVudHMudGFza3MuTkVXX1RBU0tfQ1JFQVRFRCk7XHJcbiAgICB9KTtcclxuICAgICQoJyN2LXBpbGxzLWxvZ3MtdGFiJykub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAvLyBhdCB0aGlzIHBvaW50IG9mIHRpbWUgc2V0SW50ZXJ2YWwgaXMgd29ya2luZ1xyXG4gICAgICAgIGNvbnN0ICR3cmFwcGVyID0gJCgnLmxvZy11c2Vycy1saXN0Jyk7XHJcbiAgICAgICAgZmlsbExpc3RVc2Vycygkd3JhcHBlciwgdXNlckxpc3RJbnN0YWdyYW0pO1xyXG4gICAgICAgIGNoYXRCb3RMb2dzLmluaXQoc2VsZWN0Q2xzKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRVc2VyTmFtZShzdGF0ZSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2dldFRhc2tzRGF0YScsIHN0YXRlLnVzZXJuYW1lKTtcclxuICAgIHVzZXJuYW1lU2VsZWN0ZWQgPSBzdGF0ZS51c2VybmFtZTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RlcFJlZHVjZXIoc3RlcE51bWJlciwgc3RhdGUpIHtcclxuICAgIHN3aXRjaCAoc3RlcE51bWJlcikge1xyXG4gICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgc2V0VXNlck5hbWUoc3RhdGUpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzdGF0ZSwgc3RlcE51bWJlcik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZWZhdWx0Jywgc3RlcE51bWJlcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgaWYgKCQoJy5jaGF0LWJvdC1wYWdlJykubGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3Qgd2l6YXJkQ2ZnID0ge1xyXG4gICAgICAgICAgICBzdGVwUmVkdWNlcixcclxuICAgICAgICAgICAgb25TdWJtaXRIYW5kbGVyXHJcbiAgICAgICAgfTtcclxuICAgICAgICB3aXphcmRGb3JtLmluaXQod2l6YXJkQ2ZnKTtcclxuICAgICAgICBpbml0Q2hhdE1zZygpO1xyXG4gICAgICAgIHdpbmRvdy5QdWJTdWIuc3Vic2NyaWJlKENPTlNULmV2ZW50cy5pbnN0YWdyYW1BY2NvdW5zLklOU1RBR1JBTV9BQ0NPVU5TX1JFTkRFUkVELCAoZSwgZGF0YU9iaikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSU5TVEFHUkFNX0FDQ09VTlNfUkVOREVSRUQnLCBkYXRhT2JqKTtcclxuICAgICAgICAgICAgdXNlckxpc3RJbnN0YWdyYW0gPSBkYXRhT2JqLmRhdGFBcnJheTtcclxuICAgICAgICAgICAgY2hhdEJvdFN0YXR1cy5pbml0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9jaGF0LWJvdC1ibG9jay9jaGF0LWJvdC1ibG9jay5qcyIsImltcG9ydCB7Q09OU1R9IGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMnO1xyXG5pbXBvcnQge2dldFRhc2tzRGF0YX0gZnJvbSAnLi4vZm9sbG93L2ZvbGxvdy1zdGF0dXMnO1xyXG4vLyBpbXBvcnQgKiBhcyBjaGF0Qm90TG9ncyBmcm9tICcuL2JvdC1sb2dzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgaWYgKCQoJy5jaGF0LWJvdC1wYWdlJykubGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3QgcGF0aCA9IHtcclxuICAgICAgICAgICAgdHlwZTogQ09OU1QudXJsLnRtVHlwZXMuY2hhdEJvdFQsXHJcbiAgICAgICAgICAgIHN1YnR5cGU6IENPTlNULnVybC50bVR5cGVzLmNoYXRCb3RTdWJUWzBdXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCB3cmFwcGVycyA9IHtcclxuICAgICAgICAgICAgJHJ1bnM6ICQoJy5ib3QtdGFza3MtcnVucycpLFxyXG4gICAgICAgICAgICAkc3RvcHBlZDogJCgnLmJvdC10YXNrcy1zdG9wcGVkJylcclxuICAgICAgICB9O1xyXG4gICAgICAgIGdldFRhc2tzRGF0YSh3cmFwcGVycywgcGF0aCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocGF0aCk7XHJcbiAgICAgICAgd2luZG93LlB1YlN1Yi5zdWJzY3JpYmUoQ09OU1QuZXZlbnRzLmluc3RhZ3JhbUFjY291bnMuSU5TVEFHUkFNX0FDQ09VTlNfUkVOREVSRUQsIChldmVudE5hbWUsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgZ2V0VGFza3NEYXRhKHdyYXBwZXJzLCBwYXRoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJyoqY2hhdC1ib3Qtc3RhdHVzJywgZXZlbnROYW1lLCBkYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB3aW5kb3cuUHViU3ViLnN1YnNjcmliZShDT05TVC5ldmVudHMudGFza3MuTkVXX1RBU0tfQ1JFQVRFRCwgKGV2ZW50TmFtZSwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBnZXRUYXNrc0RhdGEod3JhcHBlcnMsIHBhdGgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL2NoYXQtYm90LWJsb2NrL2NoYXQtYm90LXN0YXR1cy5qcyIsIi8qIGVzbGludC1kaXNhYmxlIHNvcnQtdmFycyAqL1xuLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy91c2VyJztcbmltcG9ydCB7Q09OU1R9IGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMnO1xuaW1wb3J0IGNvb2tpZVN0b3JhZ2UgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2Nvb2tpZSc7XG5cbmNvbnN0IHBhcnNlUXVlcnlTdHJpbmcgPSBmdW5jdGlvbigpIHtcblxuICAgIGNvbnN0IHN0ciA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XG4gICAgY29uc3Qgb2JqVVJMID0ge307XG5cbiAgICBzdHIucmVwbGFjZShcbiAgICAgIG5ldyBSZWdFeHAoJyhbXj89Jl0rKSg9KFteJl0qKSk/JywgJ2cnKSxcbiAgICAgICAgZnVuY3Rpb24oJDAsICQxLCAkMikge1xuICAgICAgICAgICAgb2JqVVJMWyQxXSA9ICQyO1xuICAgICAgICB9XG4gICk7XG4gICAgcmV0dXJuIG9ialVSTDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maXJtYXRpb25XaXRoUmVkaXJlY3QoKSB7XG4gICAgY29uc3QgdXNlciA9IFVzZXI7XG4gICAgY29uc3QgcGFyYW1zID0gcGFyc2VRdWVyeVN0cmluZygpO1xuICAgIC8vIEV4YW1wbGUgaG93IHRvIHVzZSBpdDpcblxuICAgIGNvbnN0IHNlbmRDb25maXJtID0gZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIHVzZXIuY29uZmlybSh0b2tlbikudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyAmJiByZXN1bHQuc3RhdHVzLnN0YXRlID09PSAnb2snKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBzYXZlIHRoZSBpdGVtXG4gICAgICAgICAgICAgICAgY29va2llU3RvcmFnZS5zZXQoQ09OU1QuY29va2llU3RvcmFnZS5lbWFpbENvbmZpcm1lZCwgJ2NvbmZpcm1lZCcpO1xuICAgICAgICAgICAgICAgIGNvb2tpZVN0b3JhZ2Uuc2V0KENPTlNULmNvb2tpZVN0b3JhZ2UudG9rZW4sIHJlc3VsdC5kYXRhLnRva2VuKTtcblxuICAgICAgICAgICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbiA9IGNvbmZpcm0tcmVnaXN0cmF0aW9uLmh0bWw/dG9rZW49J2Zyb20gc2VydmVyJztcblxuICAgICAgICAgICAgICAgIC8vIHJldHJpZXZlIHRoZSBvYmplY3QgaW4gYSBzdHJpbmcgZm9ybVxuICAgICAgICAgICAgICAgIGNvbnN0IGN1c3RvbWVyc0RhdGFTdHJpbmcgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdjdXN0b21lcnNEYXRhJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VzdG9tZXJzRGF0YVN0cmluZyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlcXVlc3Qgc3VjY2VlZGVkIHdpdGggSlNPTiByZXNwb25zZScsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgJCgnLmNvbmZpcm0tcmVnaXN0cmF0aW9uJykuYXBwZW5kKGA8cD5jb25maXJtYXRpb24gc3RhdHVzOiAke3Jlc3VsdC5zdGF0dXMuc3RhdGV9PC9wPmApO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSAnLi9wcm9maWxlLmh0bWwnO1xuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlZGlyZWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkb3Qtbm90YXRpb25cbiAgICAgICAgY29uc3QgdG9rZW4gPSBwYXJhbXNbJ3Rva2VuJ107XG5cbiAgICAgICAgaWYgKCFsb2NhdGlvbi5wYXRobmFtZS5pbmRleE9mKCdjb25maXJtLXJlZ2lzdHJhdGlvbicpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2VuZCByZXEgdG8gJywgdG9rZW4pO1xuICAgICAgICAgICAgc2VuZENvbmZpcm0odG9rZW4pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIHJlZGlyZWN0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdFxuICAgIH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL2NvbmZpcm0tcmVnL2NvbmZpcm0tcmVnLmpzIiwiaW1wb3J0ICogYXMgZm9sbG93U3RhdHVzIGZyb20gJy4vZm9sbG93LXN0YXR1cyc7XHJcbmltcG9ydCB7Q09OU1R9IGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMnO1xyXG5pbXBvcnQgVXNlclRhc2tNYW5hZ2VyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9hcGktdGFzay1tYW5hZ2VyJztcclxuaW1wb3J0ICdicnV0dXNpbi1qc29uLWZvcm1zJztcclxuXHJcbmNvbnN0IHN0YXRlID0ge1xyXG4gICAgdXNlcm5hbWU6ICcnLFxyXG4gICAgdXNlcl9kZWZhdWx0X2NvbmZpZzoge1xyXG4gICAgICAgIHRhc2tfbW9kZTogJ1NBRkUnXHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBmaWxsTGlzdE1ldGEoJGxpc3QsIGRhdGFBcnJheSkge1xyXG4gICAgY29uc3QgaXRlbXMgPSBkYXRhQXJyYXk7XHJcbiAgICAvLyBjb25zdCBkZWZhdWx0QXZhdGFyU3JjID0gJ2h0dHBzOi8vaS5pbWd1ci5jb20vak5OVDRMRS5wbmcnO1xyXG4gICAgJGxpc3QuZW1wdHkoKS5hZGRDbGFzcygnYm9yZGVyLWxpZ2h0LWNvbG9yJyk7XHJcbiAgICAkKCc8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gcHktMlwiPjxoMz5Vc2VyVGFza01hbmFnZXI8L2gzPjwvbGk+JykuYXBwZW5kVG8oJGxpc3QpO1xyXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnN0IGluZm8gPSBpdGVtLmluZm87XHJcbiAgICAgICAgLy8gY29uc3QgY2hlY2twb2ludCA9IGl0ZW0uY2hlY2twb2ludCB8fCBpdGVtO1xyXG4gICAgICAgICQoYDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBweS0yXCIgZGF0YS11c2VybmFtZT1cIiR7aXRlbS50eXBlfVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWJvZHkgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB0YXNrLXR5cGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHsoaXRlbS50YXNrX2lkKSA/IGA8cCBjbGFzcz1cIm10LTAgbWItMSBuYW1lXCI+JHtpdGVtLnRhc2tfaWR9PC9wPmAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHRhc2stc3VidHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkeyhpdGVtLnN1YnR5cGUpID8gYDxwIGNsYXNzPVwibXQtMCBtYi0xIG5hbWVcIj4ke2l0ZW0uc3VidHlwZX08L3A+YCA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgdGFzay1wcm9ncmVzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkeyhpdGVtLnN0YXR1cy5zdGF0ZSA9PT0gJ1NUT1BQRUQnKSA/IGA8cCBjbGFzcz1cIm10LTAgbWItMSBuYW1lXCI+0J7RgdGC0LDQvdC+0LLQu9C10L3QviAtICR7aXRlbS5zdGF0dXMucmVhc29ufTwvcD5gIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJjb2wgdGFzay1wcm9ncmVzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkeyhpdGVtLnByb2dyZXNzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBgPHAgY2xhc3M9XCJtdC0wIG1iLTEgbmFtZVwiPtCa0L7Qu9C40YfQtdGB0YLQstC+IC0gJHtpdGVtLnByb2dyZXNzLmNvdW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm10LTAgbWItMSBuYW1lXCI+0J/RgNC+0YbQtdC90YIgLSAke2l0ZW0ucHJvZ3Jlc3MucGVyY2VudH08L3A+YCA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+YCkuYXBwZW5kVG8oJGxpc3QpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qXHJcbmZ1bmN0aW9uIGZpbGxMaXN0VHlwZXMoJHdyYXBwZXIsIGRhdGEpIHtcclxuICAgIGNvbnN0IHN0cnVjdHVyZU9iaiA9IGRhdGFbJ3N0cnVjdHVyZSddO1xyXG5cclxuICAgICR3cmFwcGVyLmVtcHR5KCkuYWRkQ2xhc3MoJ2JvcmRlci1saWdodC1jb2xvcicpO1xyXG4gICAgJCgnPGRpdiBjbGFzcz1cIlwiPtCi0LjQvyDQt9Cw0LTQsNC90LjRjzwvZGl2PjxzZWxlY3QgbmFtZT1cInRhc2stdHlwZVwiIGlkPVwidGFzay10eXBlc1wiPjwvc2VsZWN0PicpLmFwcGVuZFRvKCR3cmFwcGVyKTtcclxuICAgIGZvciAoY29uc3QgdHlwZSBpbiBzdHJ1Y3R1cmVPYmopIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnc3RydWN0dXJlOiAnICsgaXRlbSk7XHJcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzdHJ1Y3R1cmVPYmosIHR5cGUpKSB7XHJcbiAgICAgICAgICAgICQoYDxvcHRpb24gY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gcHktMlwiICR7KHR5cGUgIT09ICdGT0xMT1dJTkcnKSA/ICdkaXNhYmxlZD1cImRpc2FibGVkXCInIDogJyd9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IFwiJHtKU09OLnN0cmluZ2lmeSh7dHlwZSwgc3VidHlwZTogc3RydWN0dXJlT2JqW3R5cGVdfSl9XCI+XHJcbiAgICAgICAgICAgICAgICAke3R5cGV9XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPmApLmFwcGVuZFRvKCQoJyN0YXNrLXR5cGVzJykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4qL1xyXG5cclxuZnVuY3Rpb24gZ2V0VGFza3NEYXRhKHBhdGgpIHtcclxuICAgIFVzZXJUYXNrTWFuYWdlci5nZXRNZXRhZGF0YShwYXRoKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0LnN0YXR1cy5zdGF0ZSA9PT0gJ29rJykge1xyXG4gICAgICAgICAgICBmaWxsTGlzdE1ldGEoJCgnLmZvbGxvdy10YXNrcy1saXN0JyksIHJlc3VsdC5kYXRhLm1ldGEpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXREYXRhU3RlcDIodXNlcnNOYW1lKSB7XHJcbiAgICBjb25zb2xlLmxvZyh1c2Vyc05hbWUpO1xyXG4gICAgY29uc3QgcGF0aCA9IHtcclxuICAgICAgICB0eXBlOiBDT05TVC51cmwudG1UeXBlcy5mb2xsb3dpbmdULFxyXG4gICAgICAgIHN1YnR5cGU6IENPTlNULnVybC50bVR5cGVzLmZvbGxvd2luZ1N1YlRbMF1cclxuICAgIH07XHJcbiAgICBnZXRUYXNrc0RhdGEocGF0aCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldERhdGFTdGVwMygpIHtcclxuICAgIGNvbnN0IHVzZXJzID0gJCgnI2ZvbGxvd2VycycpLnZhbCgpXHJcbiAgICAgICAgLnRyaW0oKVxyXG4gICAgICAgIC5yZXBsYWNlKC8gL2csICcnKVxyXG4gICAgICAgIC5zcGxpdCgnLCcpXHJcbiAgICAgICAgLmZpbHRlcihpID0+IGkubGVuZ3RoID4gMCk7XHJcblxyXG4gICAgc3RhdGVbJ3VzZXJfY3VzdG9tX2NvbmZpZyddID0ge1xyXG4gICAgICAgIHVzZXJzXHJcbiAgICB9O1xyXG4gICAgY29uc3QgZmlsbFNwZWVkTGlzdCA9IGZ1bmN0aW9uICgkd3JhcHBlciwgZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IHRhc2tNb2RlcyA9IGRhdGEuY2ZnICYmIGRhdGEuY2ZnLnRhc2tfbW9kZXM7XHJcbiAgICAgICAgY29uc3QgcmFkaW9CdG5SZWR1Y2VyID0gZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgc3dpdGNoIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdBR0dSRVNTSVZFJzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cIiR7aXRlbX1cIiBuYW1lPVwiY3VzdG9tUmFkaW9cIiB2YWx1ZT1cInNhZmVcIiBjbGFzcz1cImN1c3RvbS1jb250cm9sLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIiBmb3I9XCIke2l0ZW19XCI+PHN0cm9uZz7QkNCz0YDQtdGB0YHQuNCy0L3Ri9C5Ojwvc3Ryb25nPiAzMCDQv9C+0LTQv9C40YHQvtC6INCyINGH0LDRgTwvbGFiZWw+YDtcclxuICAgICAgICAgICAgICAgIC8vIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnTUlERExFJzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCIke2l0ZW19XCIgbmFtZT1cImN1c3RvbVJhZGlvXCIgdmFsdWU9XCJzYWZlXCIgY2xhc3M9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImN1c3RvbS1jb250cm9sLWxhYmVsXCIgZm9yPVwiJHtpdGVtfVwiPjxzdHJvbmc+0KHRgNC10LTQvdC40Lk6PC9zdHJvbmc+IDE4INC/0L7QtNC/0LjRgdC+0Log0LIg0YfQsNGBPC9sYWJlbD5gKTtcclxuICAgICAgICAgICAgICAgIC8vIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnU0FGRSc6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCIke2l0ZW19XCIgbmFtZT1cImN1c3RvbVJhZGlvXCIgdmFsdWU9XCJzYWZlXCIgY2xhc3M9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiIGNoZWNrZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIiBmb3I9XCIke2l0ZW19XCI+PHN0cm9uZz7QkdC10LfQvtC/0LDRgdC90YvQuTo8L3N0cm9uZz4gOSDQv9C+0LTQv9C40YHQvtC6INCyINGH0LDRgTwvbGFiZWw+YDtcclxuICAgICAgICAgICAgICAgIC8vIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGVmYXVsdCcsIGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZHJhdyBzcGVlZCByYWRpb0J0bicpO1xyXG4gICAgICAgICR3cmFwcGVyLmVtcHR5KCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIGluIHRhc2tNb2Rlcykge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnc3RydWN0dXJlOiAnICsgaXRlbSk7XHJcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGFza01vZGVzLCBpdGVtKSkge1xyXG4gICAgICAgICAgICAgICAgJChgPGRpdiBjbGFzcz1cImN1c3RvbS1jb250cm9sIGN1c3RvbS1yYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgJHtyYWRpb0J0blJlZHVjZXIoaXRlbSl9XHJcbiAgICAgICAgICAgIDwvZGl2PmApLmFwcGVuZFRvKCR3cmFwcGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gZHJhdyBjcml0ZXJpYVxyXG4gICAgVXNlclRhc2tNYW5hZ2VyLmdldERlZmF1bHRDb25maWdzKCkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2dldERlZmF1bHRDb25maWdzJyk7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMuc3RhdGUgPT09ICdvaycpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgZmlsbFNwZWVkTGlzdCgkKCcuanNfZm9sbG93LXNwZWVkJyksIHJlc3VsdC5kYXRhLmZvdW5kKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RlcFJlZHVjZXIoc3RlcE51bWJlcikge1xyXG4gICAgc3dpdGNoIChzdGVwTnVtYmVyKSB7XHJcbiAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICBnZXREYXRhU3RlcDIoc3RhdGUudXNlcm5hbWUpOyAvLyBbLi4ubmV3IFNldChzdGF0ZS51c2VybmFtZSldXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHN0YXRlKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICBnZXREYXRhU3RlcDMoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RlZmF1bHQnLCBzdGVwTnVtYmVyKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEluaXQgaGVhZGVyXHJcbiAqL1xyXG5mdW5jdGlvbiBpbml0U3RlcHMoZm9ybVNlbGVjdG9yKSB7XHJcbiAgICBjb25zdCAkZm9ybSA9ICQoZm9ybVNlbGVjdG9yKTtcclxuICAgICQoJy5qc19wcm9maWxlLXVzZXItZm9sbG93Pi5jb250YWluZXInKS5yZW1vdmVDbGFzcygnY29udGFpbmVyJyk7XHJcblxyXG4gICAgJGZvcm0uZmluZCgnZmllbGRzZXQ6Zmlyc3QtY2hpbGQnKS5mYWRlSW4oJ3Nsb3cnKTtcclxuXHJcbiAgICAkZm9ybS5maW5kKCdpbnB1dFt0eXBlPVwidGV4dFwiXScpLm9uKCdmb2N1cycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdpbnB1dC1lcnJvcicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbmV4dCBzdGVwXHJcbiAgICAkZm9ybS5maW5kKCcuYnRuLW5leHQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgcGFyZW50X2ZpZWxkc2V0ID0gJCh0aGlzKS5wYXJlbnRzKCdmaWVsZHNldCcpO1xyXG4gICAgICAgIGxldCBuZXh0X3N0ZXAgPSB0cnVlO1xyXG4gICAgICAgIGNvbnN0IHJhZGlvQnRuQWN0aXZlID0gcGFyZW50X2ZpZWxkc2V0LmZpbmQoJ2lucHV0W25hbWU9XCJ1c2VyQWNjb3VudFJhZGlvXCJdOmNoZWNrZWQnKTtcclxuXHJcbiAgICAgICAgaWYgKHJhZGlvQnRuQWN0aXZlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgc3RhdGUudXNlcm5hbWUgPSByYWRpb0J0bkFjdGl2ZS5wYXJlbnRzKCdsaScpLmRhdGEoJ3VzZXJuYW1lJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0ZXBSZWR1Y2VyKHBhcmVudF9maWVsZHNldC5pbmRleCgpLCBzdGF0ZSk7XHJcblxyXG4gICAgICAgIHBhcmVudF9maWVsZHNldC5maW5kKCdpbnB1dFt0eXBlPVwidGV4dFwiXSxpbnB1dFt0eXBlPVwiZW1haWxcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCQodGhpcykudmFsKCkgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdpbnB1dC1lcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgbmV4dF9zdGVwID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdpbnB1dC1lcnJvcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChuZXh0X3N0ZXApIHtcclxuICAgICAgICAgICAgcGFyZW50X2ZpZWxkc2V0LmZhZGVPdXQoNDAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLm5leHQoKS5mYWRlSW4oKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHByZXZpb3VzIHN0ZXBcclxuICAgICRmb3JtLmZpbmQoJy5idG4tcHJldmlvdXMnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gc3RhdGUudXNlcm5hbWUgPSBbLi4ubmV3IFNldChzdGF0ZS51c2VybmFtZSldO1xyXG4gICAgICAgICQodGhpcykucGFyZW50cygnZmllbGRzZXQnKS5mYWRlT3V0KDQwMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnByZXYoKS5mYWRlSW4oKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHNwZWVkIHJhZGlvLWJ0biBncm91cFxyXG4gICAgJCgnLmpzX2ZvbGxvdy1zcGVlZCBpbnB1dFt0eXBlPXJhZGlvXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9ICQodGhpcykuYXR0cigndmFsdWUnKTtcclxuICAgICAgICBzdGF0ZS51c2VyX2RlZmF1bHRfY29uZmlnID0ge1xyXG4gICAgICAgICAgICB0YXNrX21vZGU6IHZhbHVlLnRvVXBwZXJDYXNlKClcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gc3VibWl0XHJcbiAgICAkZm9ybS5vbignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBjb25zdCBnZW5kZXJWYWwgPSAkKHRoaXMpLmZpbmQoJy5zZWxlY3QtZ2VuZGVyIG9wdGlvbjpzZWxlY3RlZCcpLnZhbCgpO1xyXG4gICAgICAgIHN0YXRlLnVzZXJfZGVmYXVsdF9jb25maWcgPSB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLnVzZXJfZGVmYXVsdF9jb25maWcsXHJcbiAgICAgICAgICAgIGNyaXRlcmlhOiB7XHJcbiAgICAgICAgICAgICAgICBnZW5kZXI6IGdlbmRlclZhbC50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGxpbWl0ID0gZG9jdW1lbnQuZm9ybXNbJ2ZvbGxvdy1mb3JtJ11bJ2xpbWl0J107XHJcbiAgICAgICAgY29uc3QgaGF2ZV9wb3N0cyA9IHtcclxuICAgICAgICAgICAgZnJvbTogZG9jdW1lbnQuZm9ybXNbJ2ZvbGxvdy1mb3JtJ11bJ2hhdmVfcG9zdHNfZnJvbSddLnZhbHVlLFxyXG4gICAgICAgICAgICB0bzogZG9jdW1lbnQuZm9ybXNbJ2ZvbGxvdy1mb3JtJ11bJ2hhdmVfcG9zdHNfdG8nXS52YWx1ZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgaGF2ZV9mb2xsb3dlcnMgPSB7XHJcbiAgICAgICAgICAgIGZyb206IGRvY3VtZW50LmZvcm1zWydmb2xsb3ctZm9ybSddWydoYXZlX2ZvbGxvd2Vyc19mcm9tJ10udmFsdWUsXHJcbiAgICAgICAgICAgIHRvOiBkb2N1bWVudC5mb3Jtc1snZm9sbG93LWZvcm0nXVsnaGF2ZV9mb2xsb3dlcnNfdG8nXS52YWx1ZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgaGF2ZV9mb2xsb3dpbmdzID0ge1xyXG4gICAgICAgICAgICBmcm9tOiBkb2N1bWVudC5mb3Jtc1snZm9sbG93LWZvcm0nXVsnaGF2ZV9mb2xsb3dpbmdzX2Zyb20nXS52YWx1ZSxcclxuICAgICAgICAgICAgdG86IGRvY3VtZW50LmZvcm1zWydmb2xsb3ctZm9ybSddWydoYXZlX2ZvbGxvd2luZ3NfdG8nXS52YWx1ZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChsaW1pdC52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgbGltaXQuZm9jdXMoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdGF0ZVsndXNlcl9kZWZhdWx0X2NvbmZpZyddLmNyaXRlcmlhID0ge1xyXG4gICAgICAgICAgICBsaW1pdDogbGltaXQudmFsdWUsXHJcbiAgICAgICAgICAgICd1bmZvbGxvd190aGVuJzogISEkKCcjdW5mb2xsb3dfdGhlbjpjaGVja2VkJykubGVuZ3RoLFxyXG4gICAgICAgICAgICAnZm9sbG93X29uX2Nsb3NlZF9wcm9maWxlcyc6ICEhJCgnI2ZvbGxvd19vbl9jbG9zZWRfcHJvZmlsZXM6Y2hlY2tlZCcpLmxlbmd0aCxcclxuICAgICAgICAgICAgaGF2ZV9wb3N0cyxcclxuICAgICAgICAgICAgaGF2ZV9mb2xsb3dlcnMsXHJcbiAgICAgICAgICAgIGhhdmVfZm9sbG93aW5nc1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgICQodGhpcykuZmluZCgnaW5wdXRbdHlwZT1cInRleHRcIl0saW5wdXRbdHlwZT1cIm51bWJlclwiXSxpbnB1dFt0eXBlPVwiZW1haWxcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCQodGhpcykudmFsKCkgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdpbnB1dC1lcnJvcicpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaW5wdXQtZXJyb3InKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzdGF0ZS50eXBlID0gQ09OU1QudXJsLnRtVHlwZXMuZm9sbG93aW5nVDsgLy8gJ0ZPTExPV0lORyc7XHJcbiAgICAgICAgc3RhdGUuc3VidHlwZSA9IENPTlNULnVybC50bVR5cGVzLmZvbGxvd2luZ1N1YlRbMF07IC8vICdGT0xMT1dJTkdfTElTVCc7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ21ha2UgcmVxdWVzdCoqICBwb3N0OiBTdGFydEZvbGxvd2luZ0xpc3QnLCBzdGF0ZSk7XHJcblxyXG4gICAgICAgIFVzZXJUYXNrTWFuYWdlci5wb3N0U3RhcnRGb2xsb3dpbmdMaXN0KHN0YXRlKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMuc3RhdGUgPT09ICdvaycpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xyXG4gICAgICAgICAgICAgICAgJCgnLmZvcm0tc3VibWl0LWZpbmlzaCcpLmFkZENsYXNzKCdkLWJsb2NrJylcclxuICAgICAgICAgICAgICAgICAgICAuZmluZCgnLmFsZXJ0JykuYXBwZW5kKGA8cD50YXNrX2lkOiAke3Jlc3VsdC5kYXRhLnRhc2tfaWR9PC9wPmApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gYWxlcnQgY2xvc2VcclxuICAgICQoJy5mb3JtLXN1Ym1pdC1maW5pc2ggLmNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vICQodGhpcykuY2xvc2VzdCgnZm9ybS1zdWJtaXQtZmluaXNoJykucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKTtcclxuICAgICAgICAkKCcjdi1waWxscy1ydW5uZWQtdGFiJykudHJpZ2dlcignY2xpY2snKTtcclxuICAgICAgICB3aW5kb3cuUHViU3ViLnB1Ymxpc2goQ09OU1QuZXZlbnRzLnRhc2tzLk5FV19UQVNLX0NSRUFURUQpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qXHJcbmZ1bmN0aW9uIGZpeFN0ZXBJbmRpY2F0b3Iobikge1xyXG4gICAgLy8gVGhpcyBmdW5jdGlvbiByZW1vdmVzIHRoZSBcImFjdGl2ZVwiIGNsYXNzIG9mIGFsbCBzdGVwcy4uLlxyXG4gICAgdmFyIGksIHggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic3RlcFwiKTtcclxuICAgIGZvciAoaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgeFtpXS5jbGFzc05hbWUgPSB4W2ldLmNsYXNzTmFtZS5yZXBsYWNlKFwiIGFjdGl2ZVwiLCBcIlwiKTtcclxuICAgIH1cclxuICAgIC8vLi4uIGFuZCBhZGRzIHRoZSBcImFjdGl2ZVwiIGNsYXNzIG9uIHRoZSBjdXJyZW50IHN0ZXA6XHJcbiAgICB4W25dLmNsYXNzTmFtZSArPSBcIiBhY3RpdmVcIjtcclxufSovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbW9kaWZ5QWNjTGlzdCgpIHtcclxuICAgIC8vIGNvbnN0IHJhZGlvQnRuID0gKGlkeCkgPT4gYDxkaXYgY2xhc3M9XCJjb2wgY3VzdG9tLWNvbnRyb2wgY3VzdG9tLXJhZGlvIGpzX3VzZXItcmFkaW9cIj5cclxuICAgIC8vICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ1c2VyQWNjb3VudFJhZGlvXCIgaWQ9XCJjdXN0b21SYWRpby0ke2lkeH1cIiBjbGFzcz1cImN1c3RvbS1jb250cm9sLWlucHV0XCIgdmFsdWU9XCJcIj5cclxuICAgIC8vICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIiBmb3I9XCJjdXN0b21SYWRpby0ke2lkeH1cIj7Qn9C+0LTQv9C40YHQsNGC0YzRgdGPPC9sYWJlbD5cclxuICAgIC8vICAgICA8L2Rpdj5gO1xyXG4gICAgY29uc3QgcmFkaW9CdG5BcHBlbmQgPSAoaWR4KSA9PiBgPGRpdiBjbGFzcz1cIlwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInVzZXJBY2NvdW50UmFkaW9cIiBpZD1cImN1c3RvbVJhZGlvLSR7aWR4fVwiIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXQgZC1ub25lXCIgdmFsdWU9XCJcIj5cclxuICAgICAgICA8L2Rpdj5gO1xyXG4gICAgY29uc3QgcmFkaW9CdG5XcmFwID0gKGlkeCkgPT4gYDxsYWJlbCBjbGFzcz1cImFjY291bnRzLWxpc3QtLWxhYmVsLXdyYXBwZXIgY29sIG1iLTAgbWVkaWEgcHktM1wiIGZvcj1cImN1c3RvbVJhZGlvLSR7aWR4fVwiPjwvbGFiZWw+YDtcclxuICAgIGNvbnN0ICRhY2NvdW50c0xpc3QgPSAkKCcuYWNjb3VudHMtbGlzdCcpO1xyXG4gICAgY29uc3QgJGxpID0gJGFjY291bnRzTGlzdC5maW5kKCdsaS5tZWRpYScpO1xyXG4gICAgJGxpLmFkZENsYXNzKCdqc191c2VyLXJhZGlvJykucmVtb3ZlQ2xhc3MoJ3B5LTMgbWVkaWEnKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8ICRsaS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIC8vICQoJGxpW2ldKS5hcHBlbmQocmFkaW9CdG4oaSkpO1xyXG4gICAgICAgICQoJGxpW2ldKS53cmFwSW5uZXIocmFkaW9CdG5XcmFwKGkpKS5hcHBlbmQocmFkaW9CdG5BcHBlbmQoaSkpO1xyXG4gICAgfVxyXG4gICAgLy8gVXNlclRhc2tNYW5hZ2VyLmdldFRhc2tUeXBlcygpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgLy8gICAgIGlmIChyZXN1bHQuc3RhdHVzLnN0YXRlID09PSAnb2snKSB7XHJcbiAgICAvLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAvLyAgICAgICAgIGZpbGxMaXN0VHlwZXMoJCgnLmpzX3Rhc2stdHlwZXMnKSwgcmVzdWx0LmRhdGEpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0pO1xyXG5cclxuICAgICQoJy5qc191c2VyLXJhZGlvJykub24oJ2NsaWNrJywgJ2lucHV0W3R5cGU9cmFkaW9dJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBjb25zdCAkcGFyZW50RmllbGRzZXQgPSAkKHRoaXMpLnBhcmVudHMoJ2ZpZWxkc2V0Jyk7XHJcbiAgICAgICAgJCgnbGkuYWN0aXZlJywgJHBhcmVudEZpZWxkc2V0KS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCdsaScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKCcuYnRuLW5leHQnLCAkcGFyZW50RmllbGRzZXQpLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLmNoZWNrYm94LWNlbGwnKS5vbignY2hhbmdlJywgKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygndmFsaWRhdGUnKTtcclxuICAgICAgICAvLyB1cGRhdGVTdGF0dXMoKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKiB3b3JraW5nIGRlbW8gOiBodHRwOi8vYnJ1dHVzaW4ub3JnL2pzb24tZm9ybXMvIzEzXHJcbmZ1bmN0aW9uIGZvcm1Gcm9tSnNvbigpIHtcclxuICAgIGNvbnN0IHNjaGVtYSA9IHtcclxuICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcclxuICAgICAgICBcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICBcInByb3AxXCI6IHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImludGVnZXJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcInByb3AyXCI6IHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImludGVnZXJcIixcclxuICAgICAgICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcInByb3AzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImludGVnZXJcIixcclxuICAgICAgICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcImNvbXBvc2l0ZTFcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXHJcbiAgICAgICAgICAgICAgICBcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmVzdGVkMVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJlcXVpcmVkXCI6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmVzdGVkMlwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJlcXVpcmVkXCI6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJyZXF1aXJlZFwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuZXN0ZWQxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuZXN0ZWQyXCJcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJjb21wb3NpdGUyXCI6IHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5lc3RlZDFcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXF1aXJlZFwiOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5lc3RlZDJcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXF1aXJlZFwiOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwicmVxdWlyZWRcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmVzdGVkMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmVzdGVkMlwiXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicmVxdWlyZWRcIjogW1xyXG4gICAgICAgICAgICBcInByb3AxXCIsXHJcbiAgICAgICAgICAgIFwicHJvcDJcIixcclxuICAgICAgICAgICAgXCJjb21wb3NpdGUxXCJcclxuICAgICAgICBdXHJcbiAgICB9O1xyXG4gICAgY29uc3QgQnJ1dHVzaW5Gb3JtcyA9IHdpbmRvdy5icnV0dXNpblsnanNvbi1mb3JtcyddO1xyXG4gICAgY29uc3QgYmYgPSBCcnV0dXNpbkZvcm1zLmNyZWF0ZShzY2hlbWEpO1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0xJyk7XHJcbiAgICBjb25zb2xlLmxvZyh3aW5kb3cuYnJ1dHVzaW4pO1xyXG4gICAgYmYucmVuZGVyKGNvbnRhaW5lciwgZGF0YSk7XHJcbn0qL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBpZiAoJCgnLmZvbGxvdycpLmxlbmd0aCkge1xyXG4gICAgICAgIGZvbGxvd1N0YXR1cy5pbml0KCk7XHJcbiAgICAgICAgaW5pdFN0ZXBzKCcuZm9sbG93LWZvcm0nKTtcclxuICAgICAgICB3aW5kb3cuUHViU3ViLnN1YnNjcmliZShDT05TVC5ldmVudHMuaW5zdGFncmFtQWNjb3Vucy5JTlNUQUdSQU1fQUNDT1VOU19SRU5ERVJFRCwgKGV2ZW50TmFtZSwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBtb2RpZnlBY2NMaXN0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9mb2xsb3cvZm9sbG93LmpzIiwiLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuLy8gY29uc3QgaGFtYnVyZ2VyQnV0dG9uQ2xzID0gJyNhc2lkZV9tb2JpbGVfX2J1dHRvbic7XG4vLyBjb25zdCBoYW1idXJnZXJNZW51Q2xzID0gJy5hc2lkZS1idXJnZXItbWVudSc7XG4vLyBjb25zdCBoYW1idXJnZXJNZW51T3BlbmVkQ2xhc3MgPSAnYnVyZ2VyLW1lbnUtLWNsb3NlZCc7XG4vLyBjb25zdCBoYW1idXJnZXJCdXR0b25DbG9zZUNsYXNzID0gJ2J1cmdlci1tZW51X19idXR0b24tLWNsb3NlJztcbmNvbnN0IHNlbGVjdG9yc0VsID0ge1xuICAgIGxlZnRNZW51OiB7XG4gICAgICAgIGhhbWJ1cmdlckJ1dHRvbkNsczogJyNhc2lkZV9tb2JpbGVfX2J1dHRvbicsXG4gICAgICAgIGhhbWJ1cmdlck1lbnVDbHM6ICcuYXNpZGUtYnVyZ2VyLW1lbnUnLFxuICAgICAgICBoYW1idXJnZXJNZW51T3BlbmVkQ2xhc3M6ICdidXJnZXItbWVudS0tY2xvc2VkJyxcbiAgICAgICAgaGFtYnVyZ2VyQnV0dG9uQ2xvc2VDbGFzczogJ2J1cmdlci1tZW51X19idXR0b24tLWNsb3NlJ1xuICAgIH0sXG4gICAgcmlnaHRNZW51OiB7XG4gICAgICAgIGhhbWJ1cmdlckJ1dHRvbkNsczogJyNoZWFkZXJfbW9iaWxlX3RvZ2dsZXInLFxuICAgICAgICBoYW1idXJnZXJNZW51Q2xzOiAnLnItc2lkZS1idXJnZXItbWVudScsXG4gICAgICAgIGhhbWJ1cmdlck1lbnVPcGVuZWRDbGFzczogJ3Itc2lkZS1idXJnZXItbWVudS0tb3BlbicsXG4gICAgICAgIGhhbWJ1cmdlckJ1dHRvbkNsb3NlQ2xhc3M6ICdidXJnZXItbWVudS1yaWdodF9fYnV0dG9uLS1jbG9zZSdcbiAgICB9LFxuICAgIHN1YkhlYWRlcjoge1xuICAgICAgICBoYW1idXJnZXJCdXR0b25DbHM6ICcjaGVhZGVyX21vYmlsZV90b3BiYXJfdG9nZ2xlcicsXG4gICAgICAgIGhhbWJ1cmdlck1lbnVDbHM6ICcuc3ViLWhlYWRlcicsXG4gICAgICAgIGhhbWJ1cmdlck1lbnVPcGVuZWRDbGFzczogJ3N1Yi1oZWFkZXItLW9wZW4nLFxuICAgICAgICBoYW1idXJnZXJCdXR0b25DbG9zZUNsYXNzOiAnc3ViLWhlYWRlci1idXR0b24tLWNsb3NlJ1xuICAgIH1cbn07XG5cbi8qKlxuICogVG9nZ2xlIGhhbWJ1cmdlciBtZW51IHBvcG92ZXJcbiAqL1xuZnVuY3Rpb24gdG9nZ2xlSGFtYnVyZ2VyTWVudShtZW51TmFtZSkge1xuICAgIGNvbnN0IHtoYW1idXJnZXJNZW51Q2xzLCBoYW1idXJnZXJCdXR0b25DbHMsIGhhbWJ1cmdlckJ1dHRvbkNsb3NlQ2xhc3MsIGhhbWJ1cmdlck1lbnVPcGVuZWRDbGFzc30gPSBzZWxlY3RvcnNFbFttZW51TmFtZV07XG4gICAgJChoYW1idXJnZXJCdXR0b25DbHMpLnRvZ2dsZUNsYXNzKGhhbWJ1cmdlckJ1dHRvbkNsb3NlQ2xhc3MpO1xuICAgICQoaGFtYnVyZ2VyTWVudUNscykudG9nZ2xlQ2xhc3MoaGFtYnVyZ2VyTWVudU9wZW5lZENsYXNzKTtcbn1cblxuLyoqXG4gKiBJbml0IGhhbWJ1cmdlciBtZW51XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xuICAgIGNvbnN0IGxlZnRNZW51ID0gJ2xlZnRNZW51JztcbiAgICBjb25zdCByaWdodE1lbnUgPSAncmlnaHRNZW51JztcbiAgICBjb25zdCBzdWJIZWFkZXIgPSAnc3ViSGVhZGVyJztcblxuICAgICQoc2VsZWN0b3JzRWxbbGVmdE1lbnVdLmhhbWJ1cmdlckJ1dHRvbkNscykub24oJ2NsaWNrJywgdG9nZ2xlSGFtYnVyZ2VyTWVudS5iaW5kKHRoaXMsIGxlZnRNZW51KSk7XG4gICAgJChzZWxlY3RvcnNFbFtyaWdodE1lbnVdLmhhbWJ1cmdlckJ1dHRvbkNscykub24oJ2NsaWNrJywgdG9nZ2xlSGFtYnVyZ2VyTWVudS5iaW5kKHRoaXMsIHJpZ2h0TWVudSkpO1xuICAgICQoc2VsZWN0b3JzRWxbc3ViSGVhZGVyXS5oYW1idXJnZXJCdXR0b25DbHMpLm9uKCdjbGljaycsIHRvZ2dsZUhhbWJ1cmdlck1lbnUuYmluZCh0aGlzLCBzdWJIZWFkZXIpKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3MvaGVhZGVyL2J1cmdlci1tZW51L2J1cmdlci1tZW51LmpzIiwiLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy91c2VyJztcbmltcG9ydCBQdWJTdWIgZnJvbSAncHVic3ViLWpzJzsgLy8gaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvcHVic3ViLWpzXG5pbXBvcnQge0NPTlNUfSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29uc3RzJztcblxuY29uc3Qgc2VsZWN0b3JMb2dpblN0YXRlID0gJy5qc19tZXNzYWdlX2xvZ2dlZC0tdGV4dCc7XG5jb25zdCBzZWxlY3RvckVtYWlsQ29uZmlybVN0YXRlID0gJy5qc19lbWFpbC1jb25maXJtLS10ZXh0JztcbmNvbnN0IGNsb3NlQ2xhc3MgPSAnZC1ub25lJztcbmNvbnN0IG9wZW5lZENsYXNzID0gJ2QtYmxvY2snO1xuXG5mdW5jdGlvbiBlbWFpbE5vdENvbmZpcm1lZCgpIHtcbiAgICBjb25zdCAkZW1haWxuTXNnID0gJChzZWxlY3RvckVtYWlsQ29uZmlybVN0YXRlKTtcbiAgICAkZW1haWxuTXNnLnRleHQoJyoqZW1haWxOb3RDb25maXJtZWQqKiBFbWFpbCDQvdC1INC/0L7QtNGC0LLQtdGA0LbQtNC10L0uJykuY3NzKCdjb2xvcicsICdsaWdodGNvcmFsJyk7XG59XG5cbmZ1bmN0aW9uIG9uTG9naW5TdWJzY3JpYmUobXNnLCBkYXRhKSB7XG4gICAgLy8gY29uc29sZS5sb2cobXNnLCBkYXRhKTtcbiAgICAkKENPTlNULnVpU2VsZWN0b3JzLmhlYWRlck5hdkxvZ2luQnRuKS5hZGRDbGFzcyhjbG9zZUNsYXNzKS5yZW1vdmVDbGFzcyhvcGVuZWRDbGFzcyk7XG4gICAgJChDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJSZWdCdG4pLmFkZENsYXNzKGNsb3NlQ2xhc3MpLnJlbW92ZUNsYXNzKG9wZW5lZENsYXNzKTtcbiAgICAkKENPTlNULnVpU2VsZWN0b3JzLmhlYWRlckxvZ2luQm94KS5hZGRDbGFzcyhjbG9zZUNsYXNzKS5yZW1vdmVDbGFzcyhvcGVuZWRDbGFzcyk7XG5cbiAgICAkKCcubmF2LWxpbmsuanNfbG9nT3V0JykuYWRkQ2xhc3Mob3BlbmVkQ2xhc3MpLnJlbW92ZUNsYXNzKGNsb3NlQ2xhc3MpOyAvLyBzaG93XG4gICAgY29uc3QgJGxvZ2luTXNnID0gJChzZWxlY3RvckxvZ2luU3RhdGUpO1xuICAgICRsb2dpbk1zZy50ZXh0KCcqKm9uTG9naW5TdWJzY3JpYmUqKiDQstGLINC30LDQu9C+0LPQuNC90LjQu9C40YHRjCDQsiBMdXhncmFtINGD0YHQv9C10YjQvdC+JykuY3NzKCdjb2xvcicsICdsaWdodGJsdWUnKTtcbiAgICBjb25zdCBpc0VtYWlsQ29uZmlybWVkID0gVXNlci5pc0VtYWlsQ29uZmlybWVkKCk7XG4gICAgaWYgKCFpc0VtYWlsQ29uZmlybWVkKSB7XG4gICAgICAgIGVtYWlsTm90Q29uZmlybWVkKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzaG93TG9nb3V0KCkge1xuICAgIC8vIGNoZWNrIGlzIGxvZ2dlZFxuICAgIGNvbnN0IGlzTG9nZ2VkID0gVXNlci5pc0xvZ2dlZEluKCk7XG4gICAgY29uc3QgaXNFbWFpbENvbmZpcm1lZCA9IFVzZXIuaXNFbWFpbENvbmZpcm1lZCgpO1xuICAgIGlmICghaXNFbWFpbENvbmZpcm1lZCkge1xuICAgICAgICBlbWFpbE5vdENvbmZpcm1lZCgpO1xuICAgIH1cbiAgICBpZiAoaXNMb2dnZWQpIHtcbiAgICAgICAgJCgnLm5hdi1saW5rLmpzX2xvZ091dCcpLnBhcmVudCgpLnNob3coKTtcbiAgICAgICAgJCgnLmpzX2VtYWlsLWNvbmZpcm0tLXRleHQnKS50ZXh0KCfQstGLINC30LDQu9C+0LPQuNC90LjQu9C40YHRjCDRg9GB0L/QtdGI0L3QvicpO1xuICAgICAgICBjb25zdCBvbGRVUkwgPSBkb2N1bWVudC5yZWZlcnJlcjtcbiAgICAgICAgLy8gY29uc29sZS5sb2cob2xkVVJMKTtcbiAgICAgICAgaWYgKG9sZFVSTC5pbmNsdWRlcygnY29uZmlybS1yZWdpc3RyYXRpb24nKSkge1xuICAgICAgICAgICAgJCgnLmpzX21lc3NhZ2VfbG9nZ2VkLS10ZXh0JykudGV4dCgn0LLRiyDQv9C+0LTRgtCy0LXRgNC00LjQu9C4INGA0LXQs9C40YHRgtGA0LDRhtC40Y4nKTtcbiAgICAgICAgfVxuICAgICAgICBvbkxvZ2luU3Vic2NyaWJlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJChzZWxlY3RvckxvZ2luU3RhdGUpLnRleHQoJ9Cf0YDQuNCy0LXRgiDQsNC90L7QvdC40LzQvdGL0Lkg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMJyk7XG4gICAgICAgICQoc2VsZWN0b3JFbWFpbENvbmZpcm1TdGF0ZSkuZW1wdHkoKTtcbiAgICB9XG59XG5cbi8qKlxuICogSW5pdCBoZWFkZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRIZWFkZXIoKSB7XG4gICAvLyBjaGVjayBvdGhlciBoYW5kbGVyIGluIGxvZ2luLWZvcm0uanNcbiAgICBjb25zdCAkbG9naW5Cb3ggPSAkKENPTlNULnVpU2VsZWN0b3JzLmhlYWRlckxvZ2luQm94KTtcbiAgICBjb25zdCAkcmVnaXN0ZXJCb3ggPSAkKENPTlNULnVpU2VsZWN0b3JzLmhlYWRlclJlZ0JveCk7XG5cbiAgICBQdWJTdWIuc3Vic2NyaWJlKENPTlNULmV2ZW50cy5VU0VSX0xPR0dFRCwgb25Mb2dpblN1YnNjcmliZSk7XG5cbiAgICBzaG93TG9nb3V0KCk7XG5cbiAgICAkKENPTlNULnVpU2VsZWN0b3JzLmhlYWRlclJlZ0J0bikub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAkbG9naW5Cb3guaGlkZSgpO1xuICAgICAgICAkcmVnaXN0ZXJCb3guY3NzKHsndG9wJzogMCwgJ3JpZ2h0JzogMH0pXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ2JnLWxpZ2h0IGJvcmRlciBtdC01IG14LWF1dG8gcG9zaXRpb24tYWJzb2x1dGUgcHgtMyBkLWJsb2NrJylcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICAgfSk7XG5cbiAgICAkKENPTlNULnVpU2VsZWN0b3JzLmhlYWRlck5hdkxvZ2luQnRuKS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICRsb2dpbkJveC5hZGRDbGFzcygnZC1ibG9jaycpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgJHJlZ2lzdGVyQm94LmFkZENsYXNzKCdkLW5vbmUnKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpO1xuICAgIH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9oZWFkZXIvaGVhZGVyLmpzIiwiLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy91c2VyJztcbi8vIGltcG9ydCBTcGlubmVyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9zcGlubmVyJztcbmltcG9ydCB2aWV3VXRpbHMgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3ZpZXcnO1xuLy8gaW1wb3J0IFB1YlN1YiBmcm9tICdwdWJzdWItanMnO1xuaW1wb3J0IHtDT05TVH0gZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2NvbnN0cyc7XG5cbi8vINCf0L7RgdC70LUg0LTQvtCx0LDQstC70LXQvdC40Y8g0LDQutC60LDRg9C90YLQsCDRgdC90L7QstCwINC00LXRgNC90YPRgtGMINCc0JXQotCQINC4INC/0LXRgNC10YDQuNGB0L7QstCw0YLRjCDRgdC/0LjRgdC+0Log0LDQutC60LDRg9C90YLQvtCyXG5jb25zdCBhZGRJbnN0YWdyYW1BY2NvdW50ID0gKG5ld0Zvcm1EYXRhKSA9PiB7XG4gICAgY29uc3QgY2JFcnJvciA9IChyZXN1bHQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SJywgcmVzdWx0KTtcbiAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSgkKCcuZXJyb3ItbXNnJyksXG4gICAgICAgICAgICByZXN1bHQuc3RhdHVzLnN0YXRlLFxuICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5tZXNzYWdlIHx8ICdMb2dpbiBlcnJvcicpO1xuICAgICAgICAvLyAkKF9sb2dpbkJveCkuYWRkQ2xhc3MoY2xvc2VDbGFzcykucmVtb3ZlQ2xhc3Mob3BlbmVkQ2xhc3MpO1xuICAgIH07XG5cbiAgICBVc2VyLmFkZEluc3RhZ3JhbUFjY291bnQobmV3Rm9ybURhdGEsIGNiRXJyb3IpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5zdGF0dXMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCwgcmVzdWx0LnN0YXR1cyk7XG4gICAgICAgICAgICAvLyBkZWJ1Z2dlcjtcbiAgICAgICAgICAgIGNvbnN0ICRtc2dMaXN0ID0gJCgnLmFjY291bnRzLWxpc3QnKTtcbiAgICAgICAgICAgICRtc2dMaXN0LmVtcHR5KCk7XG4gICAgICAgICAgICAvLyB0b2RvIDogcmVsb2FkIGxpc3RcbiAgICAgICAgICAgIC8vIGZpbGxMaXN0KCRtc2dMaXN0LCByZXN1bHQuZGF0YS5hY2NvdW50cyk7XG4gICAgICAgICAgICAvLyBhZGRMaXN0SGFuZGxlcigpO1xuXG4gICAgICAgICAgICAvLyB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKCR0ZXh0QXJlYURlc2NyaXB0aW9uLFxuICAgICAgICAgICAgLy8gICAgIHJlc3VsdC5zdGF0dXMuc3RhdGUsXG4gICAgICAgICAgICAvLyAgICAgcmVzdWx0LnN0YXR1cy5tZXNzYWdlIHx8ICdMb2dpbiBlcnJvcicpO1xuICAgICAgICAgICAgLy8gJChfbG9naW5Cb3gpLmFkZENsYXNzKGNsb3NlQ2xhc3MpLnJlbW92ZUNsYXNzKG9wZW5lZENsYXNzKTtcbiAgICAgICAgfVxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgLy8gdG9kbzogcmVuZGVyIGZvciB1c2VyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZygnc3VibWl0JywgbmV3Rm9ybURhdGEpO1xufTtcblxuZnVuY3Rpb24gYWRkT25Mb2FkSGFuZGxlcnMoKSB7XG4gICAgLy8gJCgnLmpzX3JlcGVhdC1zZWN1cml0eS1jb2RlJykub24oJ2NsaWNrJywgKGUpID0+IHtcblxuICAgIC8vIH0pO1xuXG4gICAgJCgnLmpzX2FkZC1pbnN0YWdyYW0tYWNjb3VudCcpLm9uKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGJ0biA9ICQoZS50YXJnZXQpO1xuICAgICAgICBjb25zdCAkbW9kYWxCb2R5ID0gYnRuLmNsb3Nlc3QoJy5tb2RhbCcpLmZpbmQoJy5tb2RhbC1kaWFsb2cgLm1vZGFsLWJvZHknKTtcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSAkbW9kYWxCb2R5LmZpbmQoJ2lucHV0W25hbWU9XCJ1c2VybmFtZVwiXScpLnZhbCgpLnRyaW0oKTtcbiAgICAgICAgY29uc3QgcGFzc3dvcmQgPSAkbW9kYWxCb2R5LmZpbmQoJ2lucHV0W25hbWU9XCJwYXNzXCJdJykudmFsKCkudHJpbSgpO1xuICAgICAgICBjb25zdCAkZm9ybSA9ICQoJ2Zvcm0nLCAkbW9kYWxCb2R5KTtcbiAgICAgICAgY29uc3QgZm9ybSA9ICRmb3JtLmdldCgwKTtcbiAgICAgICAgY29uc3QgY3NzVmFsaWRhdGlvbkNsYXNzID0gJ2Zvcm0tdmFsaWRhdGlvbic7XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIGNvbnN0IHZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoJGZvcm0pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWxpZGF0b3IudmFsaWRhdGUoKSk7XG4gICAgICAgIGlmIChmb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICAgICAgYWRkSW5zdGFncmFtQWNjb3VudCh7dXNlcm5hbWUsIHBhc3N3b3JkfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBIaWdobGlnaHQgZXJyb3JzXG4gICAgICAgICAgICBpZiAoZm9ybS5yZXBvcnRWYWxpZGl0eSkge1xuICAgICAgICAgICAgICAgIGZvcm0ucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICRmb3JtLmFkZENsYXNzKGNzc1ZhbGlkYXRpb25DbGFzcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXVzZXJuYW1lIHx8ICFwYXNzd29yZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vdCB2YWxpZCAtIEVtcHR5IGZpZWxkcycpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZExpc3RIYW5kbGVyKC8qIHVzZXJuYW1lKi8pIHtcbiAgICAvLyAkKCcjeW91ck1vZGFsSUQnKS5vbignc2hvdy5icy5tb2RhbCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAvLyAgICAgdmFyIHlvdXJwYXJhbWV0ZXIgPSBlLnJlbGF0ZWRUYXJnZXQuZGF0YXNldC55b3VycGFyYW1ldGVyO1xuICAgIC8vICAgICAvLyBEbyBzb21lIHN0dWZmIHcvIGl0LlxuICAgIC8vIH0pO1xuICAgIGxldCBjaGVja3BvaW50VHlwZSA9ICcnO1xuXG4gICAgJCgnLmpzX3Bhc3MtY2hlY2twb2ludC1idG4nKS5vbignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCAkYnV0dG9uID0gJChlLnRhcmdldCk7XG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gJGJ1dHRvbi5kYXRhKCd1c2VybmFtZScpO1xuICAgICAgICBjaGVja3BvaW50VHlwZSA9ICRidXR0b24uZGF0YSgnY2hlY2twb2ludFR5cGUnKSB8fCBjaGVja3BvaW50VHlwZTtcbiAgICAgICAgLy8gJCgnI3NlY3VyaXR5LWNvZGUnKS5kYXRhKCdjaGVja3BvaW50VHlwZScsIGNoZWNrcG9pbnRUeXBlKTtcbiAgICAgICAgLy8gdG9kbyBhZGQgJ2NoZWNrcG9pbnRUeXBlJyB0byBtb2RhbFxuICAgICAgICBjb25zdCBzZW5kVG8gPSAoY2hlY2twb2ludFR5cGUgPT09ICdQSE9ORScpID8gJ9GC0LXQu9C10YTQvtC9JyA6ICdlbWFpbCc7XG4gICAgICAgIC8vIFNwaW5uZXIuc3RhcnQoJGJ1dHRvbiwgJ2ZhLWtleScpO1xuXG4gICAgICAgIGlmIChjaGVja3BvaW50VHlwZSA9PT0gJ0VNQUlMX09SX1BIT05FJykge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAgICAgLy8g0LjQvdC/0YPRgtGLINGB0L/RgNGP0YLQsNC90YssXG4gICAgICAgICAgICAvLyDQv9C+0LrQsNC30LDRgtGMINGB0LXRgNGL0LUg0L/QtdGA0LXQutC70Y7Rh9Cw0YLQtdC70LggKNCy0YvQsdGA0LDQuyDRgtC40L8pXG4gICAgICAgICAgICAvLyDQtdGB0YLRjCDQutC90L7Qv9C60LAg0JfQsNC/0YDQvtGB0LjRgtGMINC60L7QtCDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjQtVxuICAgICAgICAgICAgJCgnI3NlY3VyaXR5LWNvZGUtcGhvbmVPcmVtYWlsJykubW9kYWwoe3Nob3c6IHRydWUsIHVzZXJuYW1lfSk7XG5cbiAgICAgICAgICAgIC8vINC90LUg0L7RgtC/0YDQsNCy0LvRj9C10Lwg0YDQtdC60LLQtdGB0YJcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIFVzZXIuZ2V0U2VjdXJpdHlLZXkodXNlcm5hbWUsIGNoZWNrcG9pbnRUeXBlKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZWN1cml0eUtleSByZWNlaXZlZDonLCByZXN1bHQuc3RhdHVzLnN0YXRlKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzLnN0YXRlID09PSAnb2snKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgJG1vZGFsID0gJCgnI3NlY3VyaXR5LWNvZGUnKTtcblxuICAgICAgICAgICAgICAgIC8vIFNwaW5uZXIuc3RvcCgkYnV0dG9uLCAnZmEta2V5Jyk7XG4gICAgICAgICAgICAgICAgJCgnLmpzX3N1Y2Nlc3MtZmVlZGJhY2snLCAkbW9kYWwpLmVtcHR5KCkudGV4dChg0JrQu9GO0Ycg0L/QvtC00YLQstC10YDQttC00LXQvdC40Y8g0LHRi9C7INC+0YLQv9GA0LDQstC70LXQvSDQktCw0Lwg0L3QsCAke3NlbmRUb31gKTtcblxuICAgICAgICAgICAgICAgICQoJyNzZWN1cml0eS1jb2RlJykuYXR0cignZGF0YS11c2VybmFtZScsIHVzZXJuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBpbnNpZGUgbW9kYWxcbiAgICAkKCcuanNfY29uZmlybS1zZWN1cml0eS1jb2RlJykub24oJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgY29uc3QgYnRuID0gJChlLnRhcmdldCk7XG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gYnRuLmNsb3Nlc3QoJyNzZWN1cml0eS1jb2RlJykuZGF0YSgndXNlcm5hbWUnKTtcbiAgICAgICAgY29uc3QgJGtleUlucHV0ID0gYnRuLmNsb3Nlc3QoJy5tb2RhbCcpLmZpbmQoJy5tb2RhbC1kaWFsb2cgZm9ybSBpbnB1dC5qc19jb25maXJtLWtleScpO1xuICAgICAgICBjb25zdCBrZXkgPSAka2V5SW5wdXQudmFsKCkudHJpbSgpO1xuICAgICAgICBjb25zdCAkbW9kYWwgPSBidG4uY2xvc2VzdCgnLm1vZGFsJyk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgaWYgKGtleS5sZW5ndGggIT09IDYpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBVc2VyLmNvbmZpcm1TZWN1cml0eUtleShrZXksIHVzZXJuYW1lKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzLnN0YXRlICE9PSAnb2snKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2pzX2NvbmZpcm06JywgcmVzdWx0LnN0YXR1cy5zdGF0ZSwgJ2Nsb3NlIG1vZGFsJyk7XG4gICAgICAgICAgICAkbW9kYWwubW9kYWwoJ2hpZGUnKTtcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2VycicpO1xuICAgICAgICAgICAgJCgnLmpzX3N1Y2Nlc3MtZmVlZGJhY2snLCAkbW9kYWwpLnRleHQoJ9CX0LDQv9GA0L7RgSDQvdC1INC+0YLQv9GA0LDQstC70LXQvScpLmNzcygnY29sb3InLCAncmVkJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgICQoJ2Zvcm0gaW5wdXRbbWlubGVuZ3RoXScpLm9uKCdibHVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBsZW4gPSAkKHRoaXMpLnZhbCgpLnRyaW0oKS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IG1pbkxlbiA9IE51bWJlcigkKHRoaXMpLmF0dHIoJ21pbmxlbmd0aCcpKTtcbiAgICAgICAgLy8gY29uc3QgbWVzc2FnZSA9IG1pbkxlbiA8PSBsZW4gPyAnJyA6IG1pbkxlbiArICcgY2hhcmFjdGVycyBtaW5pbXVtJztcbiAgICAgICAgaWYgKG1pbkxlbiAhPT0gbGVuKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmNzcygnYm9yZGVyQ29sb3InLCAncmVkJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKHRoaXMpLmNzcygnYm9yZGVyQ29sb3InLCAnI2NlZDRkYScpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMuc2V0Q3VzdG9tVmFsaWRpdHkobWVzc2FnZSlcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIG9uSGlkZU1vZGFsKGUpIHtcbiAgICAgICAgY29uc3QgJG1vZGFsID0gJChlLnRhcmdldCk7XG4gICAgICAgICRtb2RhbC5maW5kKCcuZmlyc3Qtc3RlcCcpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgJG1vZGFsLmZpbmQoJy5zZWNvbmQtc3RlcCcpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgJCgnLmpzX2NvbmZpcm0ta2V5JykudmFsKCcnKTtcbiAgICAgICAgJCgnLmpzX3N1Y2Nlc3MtZmVlZGJhY2snLCAkbW9kYWwpLnJlbW92ZUF0dHIoJ3N0eWxlJykuZW1wdHkoKTtcbiAgICB9XG4gICAgJCgnI3NlY3VyaXR5LWNvZGUtcGhvbmVPcmVtYWlsJykub24oJ2hpZGUuYnMubW9kYWwnLCBvbkhpZGVNb2RhbCk7XG4gICAgJCgnI3NlY3VyaXR5LWNvZGUnKS5vbignaGlkZS5icy5tb2RhbCcsIG9uSGlkZU1vZGFsKTtcblxuICAgIC8vIFwiUEhPTkVfT1JfRU1BSUxcIiBtb2RhbFxuICAgICQoJy5qc19nZXQtc2VjdXJpdHktY29kZS1waG9uZU9yZW1haWwnKS5vbignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCAkbW9kYWwgPSAkKCcjc2VjdXJpdHktY29kZS1waG9uZU9yZW1haWwnKTtcbiAgICAgICAgY29uc3QgdHlwZVNlbGVjdGVkID0gJChlLnRhcmdldCkuY2xvc2VzdCgkbW9kYWwpLmZpbmQoJy5qc19idG4tdHlwZS1zd2l0Y2hlciBpbnB1dDpjaGVja2VkJyk7XG4gICAgICAgIGNvbnN0IGNoZWNrcG9pbnRUeXBlQWN0aXZlID0gdHlwZVNlbGVjdGVkLnZhbCgpO1xuICAgICAgICBjb25zdCBzZW5kVG8gPSAoY2hlY2twb2ludFR5cGVBY3RpdmUgPT09ICdQSE9ORScpID8gJ9GC0LXQu9C10YTQvtC9JyA6ICdlbWFpbCc7XG4gICAgICAgIGNvbnN0IG1vZGFsQ29uZmlnID0gJG1vZGFsLmRhdGEoKVsnYnMubW9kYWwnXS5fY29uZmlnO1xuICAgICAgICBjb25zdCB1c2VybmFtZSA9IG1vZGFsQ29uZmlnLnVzZXJuYW1lO1xuICAgICAgICBVc2VyLmdldFNlY3VyaXR5S2V5KHVzZXJuYW1lLCBjaGVja3BvaW50VHlwZUFjdGl2ZSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAvLyDQv9GA0Lgg0L3QsNC20LDRgtC40LggXCLQl9Cw0L/RgNC+0YHQuNGC0Ywg0LrQvtC0INC/0L7QtNGC0LLQtdGA0LbQtNC10L3QuNC1XCIgLSDQvtGC0L/QsNGA0LvRj9C10YLRgdGPINGA0LXQutCy0LXRgdGCIFwi0YHRgtCw0YDRgiDRh9C10LrQv9C+0LjQvdGCXCIg0L/QvtGP0LLQu9GP0LXRgtGM0YHRjyDQuNC90L/Rg9GCINC4INC60L3QvtC/0LrQsCDQtNGA0YPQs9C40YUg0YLQuNC/0LDRhVxuICAgICAgICAgICAgLy8gZ2V0IHNlbGVjdGVkIGJ1dHRvblxuXG4gICAgICAgICAgICAvLyDQv9C10YDQtdC60LvRjtGH0LDRgtC10LvRjCjRgdC10YDRi9C5KSDQuCDQutC90L7Qv9C60LAgXCLQl9Cw0L/RgNC+0YHQuNGC0Ywg0LrQvtC0INC/0L7QtNGC0LLQtdGA0LbQtNC10L3QuNC1XCIg0LjRgdGH0LXQt9Cw0Y7RglxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlY3VyaXR5S2V5IHJlY2VpdmVkOicsIHJlc3VsdC5zdGF0dXMuc3RhdGUpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMuc3RhdGUgPT09ICdvaycpIHtcbiAgICAgICAgICAgICAgICAkKCcuZmlyc3Qtc3RlcCcsICRtb2RhbCkuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgICAgICQoJy5zZWNvbmQtc3RlcCcsICRtb2RhbCkucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgICAgICQoJy5qc19zdWNjZXNzLWZlZWRiYWNrJywgJG1vZGFsKS5lbXB0eSgpLnRleHQoYNCa0LvRjtGHINC/0L7QtNGC0LLQtdGA0LbQtNC10L3QuNGPINCx0YvQuyDQvtGC0L/RgNCw0LLQu9C10L0g0JLQsNC8INC90LAgJHtzZW5kVG99YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBmaWxsTGlzdCgkbGlzdCwgZGF0YUFycmF5KSB7XG4gICAgY29uc3QgaXRlbXMgPSBkYXRhQXJyYXk7XG4gICAgY29uc3QgY0xpc3QgPSAkbGlzdDtcbiAgICBjb25zdCBkZWZhdWx0QXZhdGFyU3JjID0gJ2h0dHBzOi8vaS5pbWd1ci5jb20vak5OVDRMRS5wbmcnO1xuICAgIGNvbnN0IGluc2VydEl0ZW0gPSAoZGF0YSwgdGV4dCwgY3NzQ2xzKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpVHBsID0gYCR7KGRhdGEpXG4gICAgICAgICAgICA/IGA8bGkgY2xhc3M9XCJsaXN0LWlubGluZS1pdGVtICR7Y3NzQ2xzfVwiPjxzcGFuIGNsYXNzPVwiZmlndXJlXCI+JHtkYXRhfTwvc3Bhbj48c3Bhbj4ke3RleHR9PC9zcGFuPjwvbGk+YFxuICAgICAgICAgICAgOiBgPGxpIGNsYXNzPVwibGlzdC1pbmxpbmUtaXRlbSAke2Nzc0Nsc31cIj48c3BhbiBjbGFzcz1cImZpZ3VyZVwiPjA8L3NwYW4+PHNwYW4+JHt0ZXh0fTwvc3Bhbj48L2xpPmB9YDtcbiAgICAgICAgcmV0dXJuIGxpVHBsO1xuICAgIH07XG4gICAgY29uc3Qgc3RhdHMgPSAoaW5mbykgPT4ge1xuICAgICAgICBjb25zdCB0cGwgPSBgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1pbmxpbmUgdGV4dC1jZW50ZXIgY291bnRzLWxpc3RcIj5cbiAgICAgICAgICAgICR7KGluZm8pXG4gICAgICAgICAgICAgID8gYCR7aW5zZXJ0SXRlbShpbmZvWydtZWRpYV9jb3VudCddLCAn0J/Rg9Cx0LvQuNC60LDRhtC40LgnLCAnbWVkaWEtY291bnQnKX1cbiAgICAgICAgICAgICAgICAke2luc2VydEl0ZW0oaW5mb1snZm9sbG93ZXJfY291bnQnXSwgJ9Cf0L7QtNC/0LjRgdGH0LjQutC4JywgJ2ZvbGxvd2VyLWNvdW50Jyl9XG4gICAgICAgICAgICAgICAgJHtpbnNlcnRJdGVtKGluZm9bJ2ZvbGxvd2luZ19jb3VudCddLCAn0J/QvtC00L/QuNGB0LrQuCcsICdmb2xsb3dpbmctY291bnQnKX1gXG4gICAgICAgICAgICAgIDogYCR7aW5zZXJ0SXRlbShmYWxzZSwgJ9Cf0YPQsdC70LjQutCw0YbQuNC4JywgJ21lZGlhLWNvdW50Jyl9XG4gICAgICAgICAgICAgICAgJHtpbnNlcnRJdGVtKGZhbHNlLCAn0J/QvtC00L/QuNGB0YfQuNC60LgnLCAnZm9sbG93ZXItY291bnQnKX1cbiAgICAgICAgICAgICAgICAke2luc2VydEl0ZW0oZmFsc2UsICfQn9C+0LTQv9C40YHQutC4JywgJ2ZvbGxvd2luZy1jb3VudCcpfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PmA7XG4gICAgICAgIHJldHVybiB0cGw7XG4gICAgfTtcbiAgICBjTGlzdC5lbXB0eSgpLmFkZENsYXNzKCdib3JkZXItbGlnaHQtY29sb3InKTtcbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZm8gPSBpdGVtLmluZm87XG4gICAgICAgIGNvbnN0IGNoZWNrcG9pbnQgPSBpdGVtLmNoZWNrcG9pbnQgfHwgaXRlbTtcblxuICAgICAgICBpZiAoIWluZm8pIHtcbiAgICAgICAgICAgICQoYDxsaSBjbGFzcz1cIm1lZGlhIHB5LTNcIiBkYXRhLXVzZXJuYW1lPVwiJHtpdGVtLnVzZXJuYW1lfVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJtbC0zIHJvdW5kZWRcIiBhbHQ9XCJkZWZhdWx0IGF2YXRhclwiIHNyYz1cIiR7ZGVmYXVsdEF2YXRhclNyY31cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEtYm9keSBkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB1c2VyLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7KGl0ZW0udXNlcm5hbWUpID8gYDxoNCBjbGFzcz1cIm10LTAgbWItMSBuYW1lXCI+JHtpdGVtLnVzZXJuYW1lfTwvaDQ+YCA6ICcnfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB1c2VyLWNoZWNrcG9pbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7KGNoZWNrcG9pbnQuc3RhdHVzID09PSAnVFJJR0dFUkVEJylcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGpzX3Bhc3MtY2hlY2twb2ludC1idG4gZC1ibG9jayBteC1hdXRvXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jaGVja3BvaW50LXR5cGU9XCIke2NoZWNrcG9pbnQudHlwZSB8fCAnRU1BSUwnfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS11c2VybmFtZT1cIiR7aXRlbS51c2VybmFtZSB8fCAnJ31cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNzZWN1cml0eS1jb2RlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEta2V5XCI+PC9pPtCf0YDQvtC50YLQuCDRh9C10LrQv9C+0LjQvdGCPC9idXR0b24+YFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBgKHRvZG8pY2hlY2twb2ludCBzdGF0dXMgLSAke2NoZWNrcG9pbnQuc3RhdHVzfWB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAke3N0YXRzKCl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPmApLmFwcGVuZFRvKGNMaXN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoYDxsaSBjbGFzcz1cIm1lZGlhIHB5LTNcIiBkYXRhLXVzZXJuYW1lPVwiJHtpdGVtLnVzZXJuYW1lfVwiPlxuICAgICAgICAgICAgJHsoaW5mb1sncHJvZmlsZV9waWNfdXJsJ10pXG4gICAgICAgICAgICAgICAgPyBgPGltZyBjbGFzcz1cIm1sLTMgcm91bmRlZFwiIGFsdD1cIlVzZXIgcGhvdG9cIiBzcmM9XCIke2luZm9bJ3Byb2ZpbGVfcGljX3VybCddfVwiPmBcbiAgICAgICAgICAgICAgICA6IGA8aW1nIGNsYXNzPVwibWwtMyByb3VuZGVkXCIgYWx0PVwiZGVmYXVsdCBhdmF0YXJcIiBzcmM9XCIke2RlZmF1bHRBdmF0YXJTcmN9XCI+YH1cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1ib2R5IGQtZmxleFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgdXNlci1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICR7KGl0ZW0udXNlcm5hbWUpID8gYDxwIGNsYXNzPVwibXQtMCBtYi0xIG5hbWUgbGVhZFwiPiR7aXRlbS51c2VybmFtZX08L3A+YCA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAkeyhpbmZvLm5hbWUpID8gYDxoNCBjbGFzcz1cIm10LTAgbWItMVwiPiR7aW5mby5uYW1lfTwvaDQ+YCA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAkeyhpbmZvLm5hbWUpID8gJycgOiAnJyAgLyogJHsoaW5mby5lbWFpbCkgPyBgPHAgY2xhc3M9XCJtdC0wIG1iLTFcIj4ke2luZm8uZW1haWx9PC9wPmAgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICR7KGluZm8ucGhvbmUpID8gYDxwIGNsYXNzPVwibXQtMCBtYi0xXCI+JHtpbmZvLnBob25lfTwvcD5gIDogJyd9ICovIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB1c2VyLWNoZWNrcG9pbnRcIj4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgJHsoY2hlY2twb2ludC5zdGF0dXMgPT09ICdUUklHR0VSRUQnKVxuICAgICAgICAgICAgICAgICAgICA/IGA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBqc19wYXNzLWNoZWNrcG9pbnQtYnRuIGQtYmxvY2sgbXgtYXV0b1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY2hlY2twb2ludC10eXBlPVwiJHtjaGVja3BvaW50LnR5cGUgfHwgJ0VNQUlMJ31cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdXNlcm5hbWU9XCIke2l0ZW0udXNlcm5hbWUgfHwgJyd9XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI3NlY3VyaXR5LWNvZGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWtleVwiPjwvaT7Qn9GA0L7QudGC0Lgg0YfQtdC60L/QvtC40L3RgjwvYnV0dG9uPmBcbiAgICAgICAgICAgICAgICAgICAgOiAnJ31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAke3N0YXRzKGluZm8pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+YCkuYXBwZW5kVG8oY0xpc3QpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgd2luZG93LlB1YlN1Yi5wdWJsaXNoKENPTlNULmV2ZW50cy5pbnN0YWdyYW1BY2NvdW5zLklOU1RBR1JBTV9BQ0NPVU5TX1JFTkRFUkVELCB7bmFtZSwgZGF0YUFycmF5fSk7XG4gICAgY29uc29sZS5sb2coJ0lOU1RBR1JBTV9BQ0NPVU5TX1JFTkRFUkVEJyk7XG59XG5cbi8qKlxuICogSW5pdCBoZWFkZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgY29uc3QgJG1zZ0xpc3QgPSAkKCcuYWNjb3VudHMtbGlzdCcpO1xuICAgIC8vIGNoZWNrIHdlIGFyZSBpbiBwcm9maWxlIHBhZ2VcbiAgICBpZiAoISRtc2dMaXN0Lmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHRva2VuID0gVXNlci5nZXRUb2tlbigpOyAvLyB1cGQgdG86IFVzZXIuZ2V0VG9rZW4oKVxuICAgIGNvbnN0IG1ldGFkYXRhID0gVXNlci5nZXRNZXRhZGF0YSh0b2tlbik7XG4gICAgY29uc3QgcmVzZW5kUmVxdWVzdCA9ICgpID0+IFVzZXIuZ2V0TWV0YWRhdGEodG9rZW4pO1xuICAgIGxldCBpc1NlbmRSZXFPbmNlID0gZmFsc2U7XG4gICAgY29uc3QgY2hlY2tSZXNwb25zZSA9IChyZXN1bHQsIGlzUmVzZW5kUmVxdWVzdCkgPT4ge1xuICAgICAgICBpZiAoIXJlc3VsdC5zdGF0dXMuc3RhdGUgPT09ICdvaycgfHwgIXJlc3VsdC5kYXRhIHx8ICEkbXNnTGlzdC5sZW5ndGggfHwgaXNSZXNlbmRSZXF1ZXN0KSB7XG4gICAgICAgICAgICAvLyDQv9GA0L7QstC10YDRj9C8INC+0LTQuNC9INGA0LDQtyDQvdCw0LvQuNGH0LjQtSByZXN1bHQuZGF0YS5hY2NvdW50cy5pbmZvXG4gICAgICAgICAgICAkbXNnTGlzdC5lbXB0eSgpO1xuICAgICAgICAgICAgJChgPGxpIGNsYXNzPVwibWVkaWFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJtdC0wIG1iLTNcIj7QndC4INC+0LTQvdC+0LPQviDQkNC60LrQsNGD0L3RgtCwINC90LUg0LTQvtCx0LDQstC70LXQvdC+PC9oMz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+YCkuYXBwZW5kVG8oJG1zZ0xpc3QpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzZW5kUmVxdWVzdCgpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjaGVja1Jlc3BvbnNlKHJlc3VsdCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXF1ZXN0IHJlc2VuZCcpO1xuICAgICAgICAgICAgfSwgMzUwMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8g0LLRi9Cy0L7QtCDRgNC10LfRg9C70YzRgtCw0YLQvtCyIChkYXRhLmFjY291bnRzLmluZm8pXG4gICAgICAgICQoJy5wcm9maWxlLXVzZXIgLnNwaW5uZXItYm94JykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICBmaWxsTGlzdCgkbXNnTGlzdCwgcmVzdWx0LmRhdGEuYWNjb3VudHMpO1xuICAgICAgICBhZGRMaXN0SGFuZGxlcigpO1xuICAgIH07XG5cbiAgICAvLyBjaGVjayB3ZSBhcmUgaW4gcHJvZmlsZSBwYWdlXG4gICAgaWYgKCEkbXNnTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGFkZE9uTG9hZEhhbmRsZXJzKCk7XG5cbiAgICAvLyDQvNC+0LbQtdGCINC40L3RhNC+INC+0YLRgdGD0YLRgdCy0L7QstCw0YLRjCAtINGB0LTQtdC70LDRgtGMINC10YnQtSDRgNCw0Lcg0LfQsNC/0YDQvtGBINGH0LXRgNC10LcgMyDRgdC10LouXG5cbiAgICBtZXRhZGF0YS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgLy8g0L/RgNC+0LLQtdGA0Y/QvCDQvtC00LjQvSDRgNCw0Lcg0L3QsNC70LjRh9C40LUgcmVzdWx0LmRhdGEuYWNjb3VudHMuaW5mb1xuICAgICAgICBsZXQgaXNSZXNlbmRSZXF1ZXN0ID0gZmFsc2U7XG4gICAgICAgIGlmIChyZXN1bHQuZGF0YSAmJiByZXN1bHQuZGF0YS5hY2NvdW50cyAmJiAhaXNTZW5kUmVxT25jZSkge1xuICAgICAgICAgICAgcmVzdWx0LmRhdGEuYWNjb3VudHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghaXRlbS5pbmZvKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzUmVzZW5kUmVxdWVzdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlzU2VuZFJlcU9uY2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY2hlY2tSZXNwb25zZShyZXN1bHQsIGlzUmVzZW5kUmVxdWVzdCk7XG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UoJCgnLmVycm9yLW1zZycpLFxuICAgICAgICAgICAgICAgIGVyci5zdGF0dXMgfHwgJycsXG4gICAgICAgICAgICAgICAgJ9Cd0LUg0L/QvtC70YPRh9C40LvQvtGB0Ywg0LfQsNCz0YDRg9C30LjRgtGMINC00L7RgdGC0YPQv9C90YvQtSBJbnN0YWdyYW0g0LDQutC60LDRg9C90YLRiycpO1xuICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgJCgnLnNwaW5uZXItYm94JykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgIH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9pbnN0YWdyYW0tYWNjb3VudHMtbGlzdC9pbnN0YWdyYW0tYWNjb3VudHMtbGlzdC5qcyIsIi8qIGVzbGludC1kaXNhYmxlIHNvcnQtdmFycyAqL1xuLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy91c2VyJztcbmltcG9ydCBQdWJTdWIgZnJvbSAncHVic3ViLWpzJzsgLy8gaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvcHVic3ViLWpzXG5pbXBvcnQgY29va2llU3RvcmFnZSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29va2llJztcbi8vIGltcG9ydCBWYWxpZGF0b3IgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2Zvcm0tdmFsaWRhdG9yJztcbmltcG9ydCB2aWV3VXRpbHMgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3ZpZXcnO1xuaW1wb3J0IHtDT05TVH0gZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2NvbnN0cyc7XG5cbi8vIHdpbmRvdy4kID0gJDtcblxuZXhwb3J0IGZ1bmN0aW9uIExvZ2luRm9ybShzZWxlY3RvckNzcykge1xuICAgIGNvbnN0IHtfZm9ybUlkLCBfYnV0dG9uU3VibWl0SWQsIF9zaG93TG9naW5Cb3hCdG5JZCwgX2xvZ2luQm94fSA9IHNlbGVjdG9yQ3NzO1xuICAgIGNvbnN0IHVzZXIgPSBVc2VyLCAvLyBzZXJ2aWNlXG4gICAgICAgICRmb3JtID0gJChfZm9ybUlkKSxcbiAgICAgICAgJGVtYWlsID0gJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cIm1haWxcIl0nKSxcbiAgICAgICAgJHRleHRBcmVhRGVzY3JpcHRpb24gPSAkKCcjZGVzY3JpcHRpb24nKTtcbiAgICAvLyBjb25zdCBvcGVuZWRDbGFzcyA9ICdkLWJsb2NrJztcbiAgICAvLyBjb25zdCBjbG9zZUNsYXNzID0gJ2Qtbm9uZSc7XG5cbiAgICBjb25zdCB1c2VyTG9naW5IZWFkZXIgPSAoX2Zvcm1EYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IGNiRXJyb3IgPSAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAkKF9sb2dpbkJveCkuYXBwZW5kKCc8cD5yZXN1bHQuc3RhdHVzLm1lc3NhZ2U8L3A+Jyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHVzZXIubG9naW4oX2Zvcm1EYXRhLCBjYkVycm9yKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LmRhdGEgJiYgcmVzdWx0LmRhdGEudG9rZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc2F2ZSB0aGUgaXRlbVxuICAgICAgICAgICAgICAgICAgICBjb29raWVTdG9yYWdlLnNldChDT05TVC5jb29raWVTdG9yYWdlLnRva2VuLCByZXN1bHQuZGF0YS50b2tlbik7XG4gICAgICAgICAgICAgICAgICAgICQoJy5uYXYtbGluay5qc19sb2dPdXQnKS5wYXJlbnQoKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXF1ZXN0IHN1Y2NlZWRlZCB3aXRoIEpTT04gcmVzcG9uc2UnLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKCR0ZXh0QXJlYURlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5zdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMubWVzc2FnZSB8fCAnTG9naW4gc3VjY3Nlc3MnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSh0aGlzLiR0ZXh0QXJlYURlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgYDxwPnN0YXR1czogJHtyZXN1bHQuc3RhdHVzLnN0YXRlfTwvcD48cD4gbWVzc2FnZTogJHtyZXN1bHQuc3RhdHVzLm1lc3NhZ2V9PC9wPmApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UoJHRleHRBcmVhRGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLnN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5tZXNzYWdlIHx8ICdMb2dpbiBlcnJvcicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBzdWJtaXRGb3JtID0gZnVuY3Rpb24oZm9ybURhdGFPYmopIHtcbiAgICAgICAgY29uc3QgZW1haWwgPSAkZW1haWwudmFsKCksXG4gICAgICAgICAgICBwYXNzd29yZCA9ICRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJwYXNzXCJdJykudmFsKCksXG4gICAgICAgICAgICBfZm9ybURhdGEgPSBmb3JtRGF0YU9iaiB8fCB7ZW1haWwsIHBhc3N3b3JkfTtcblxuICAgICAgICBpZiAoc2VsZWN0b3JDc3MuaXNMb2dpbkluc3RhZ3JhbSkge1xuICAgICAgICAgICAgLy8gdG9kbzogZGVsZXRlIG1lXG4gICAgICAgICAgICAvLyBhZGRJbnN0YWdyYW1BY2NvdW50KHt1c2VybmFtZTogJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cInVzZXJuYW1lXCJdJykudmFsKCksIHBhc3N3b3JkfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkZW1haWwudmFsKCRlbWFpbC52YWwoKS50b0xvY2FsZUxvd2VyQ2FzZSgpKTtcbiAgICAgICAgICAgIHVzZXJMb2dpbkhlYWRlcihfZm9ybURhdGEpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIFB1YlN1Yi5wdWJsaXNoKENPTlNULmV2ZW50cy5VU0VSX0xPR0dFRCwgJ2xvZ2luJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBsb2dPdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29va2llU3RvcmFnZS5yZW1vdmUoQ09OU1QuY29va2llU3RvcmFnZS50b2tlbik7XG4gICAgICAgIFB1YlN1Yi5wdWJsaXNoKENPTlNULmV2ZW50cy5VU0VSX0xPR09VVCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGJpbmRFdmVudHMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgJHNob3dMb2dpbkJveEJ0bklkID0gJChfc2hvd0xvZ2luQm94QnRuSWQpO1xuICAgICAgICBjb25zdCAkbG9naW5Cb3ggPSAkKF9sb2dpbkJveCk7XG4gICAgICAgIGNvbnN0IG9wZW5lZENsYXNzID0gJ2QtYmxvY2snO1xuICAgICAgICBjb25zdCBjbG9zZUNsYXNzID0gJ2Qtbm9uZSc7XG5cbiAgICAgICAgJHNob3dMb2dpbkJveEJ0bklkLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmICghc2VsZWN0b3JDc3MuaXNMb2dpbkluc3RhZ3JhbSkge1xuICAgICAgICAgICAgICAgICRsb2dpbkJveC5jc3Moeyd0b3AnOiAwLCAncmlnaHQnOiAwfSlcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdiZy1saWdodCBib3JkZXIgbXQtNSBteC1hdXRvIHBvc2l0aW9uLWFic29sdXRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkbG9naW5Cb3guYWRkQ2xhc3Mob3BlbmVkQ2xhc3MpLnJlbW92ZUNsYXNzKGNsb3NlQ2xhc3MpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCAkYnV0dG9uU3VibWl0ID0gJChfYnV0dG9uU3VibWl0SWQpLFxuICAgICAgICAgICAgY3NzVmFsaWRhdGlvbkNsYXNzID0gJ2Zvcm0tdmFsaWRhdGlvbic7XG5cbiAgICAgICAgJGJ1dHRvblN1Ym1pdC5vbignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgZm9ybSA9ICRmb3JtLmdldCgwKTtcbiAgICAgICAgICAgIC8vIGNvbnN0IHZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoJGZvcm0pO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codmFsaWRhdG9yLnZhbGlkYXRlKCkpO1xuICAgICAgICAgICAgaWYgKGZvcm0uY2hlY2tWYWxpZGl0eSgpICYmIHZpZXdVdGlscy5pc0VtYWlsKCRlbWFpbC52YWwoKSkpIHtcbiAgICAgICAgICAgICAgICBzdWJtaXRGb3JtKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEhpZ2hsaWdodCBlcnJvcnNcbiAgICAgICAgICAgICAgICBpZiAoZm9ybS5yZXBvcnRWYWxpZGl0eSkge1xuICAgICAgICAgICAgICAgICAgICBmb3JtLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICRmb3JtLmFkZENsYXNzKGNzc1ZhbGlkYXRpb25DbGFzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5uYXYtbGluay5qc19sb2dPdXQnKS5vbignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbG9nT3V0KCk7XG4gICAgICAgICAgICAkKGUudGFyZ2V0KS5wYXJlbnQoKS5oaWRlKCk7XG4gICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKCR0ZXh0QXJlYURlc2NyaXB0aW9uLCAnTG9nZ2VkIG91dCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICBQdWJTdWIuc3Vic2NyaWJlKENPTlNULmV2ZW50cy5VU0VSX0xPR09VVCwgKG1zZykgPT4ge1xuICAgICAgICAgICAgJChDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJOYXZMb2dpbkJ0bikuYWRkQ2xhc3Mob3BlbmVkQ2xhc3MpLnJlbW92ZUNsYXNzKGNsb3NlQ2xhc3MpOyAvLyAuc2hvdygpO1xuICAgICAgICAgICAgJChDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJSZWdCdG4pLmFkZENsYXNzKG9wZW5lZENsYXNzKS5yZW1vdmVDbGFzcyhjbG9zZUNsYXNzKTtcbiAgICAgICAgICAgICQoJy5uYXYtbGluay5qc19sb2dPdXQnKS5hZGRDbGFzcyhjbG9zZUNsYXNzKS5yZW1vdmVDbGFzcyhvcGVuZWRDbGFzcyk7IC8vIC5oaWRlKCk7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RvckxvZ2luU3RhdGUgPSAnLmpzX21lc3NhZ2VfbG9nZ2VkLS10ZXh0JztcbiAgICAgICAgICAgICQoc2VsZWN0b3JMb2dpblN0YXRlKS50ZXh0KCfQktGLINCy0YvRiNC70Lgg0LjQtyDQsNC60LrQsNGD0L3RgtCwJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNMb2dpbkJ0bkNsaWNrID0gJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJ25hdi5uYXZiYXInKS5maW5kKCRsb2dpbkJveCkubGVuZ3RoO1xuICAgICAgICAgICAgY29uc3QgaXNBZGRJbnN0YWdyYW1CdG5DbGlja2VkID0gJChldmVudC50YXJnZXQpLmF0dHIoJ2lkJykgPT09IENPTlNULnVpU2VsZWN0b3JzLmluc3RhZ3JhbS5hZGRBY2NvdW50QnRuSWQ7XG5cbiAgICAgICAgICAgIGlmICghaXNMb2dpbkJ0bkNsaWNrICYmICRsb2dpbkJveC5oYXNDbGFzcyhvcGVuZWRDbGFzcykgJiYgIWlzQWRkSW5zdGFncmFtQnRuQ2xpY2tlZCkge1xuICAgICAgICAgICAgICAgICRsb2dpbkJveC5hZGRDbGFzcyhjbG9zZUNsYXNzKS5yZW1vdmVDbGFzcyhvcGVuZWRDbGFzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBiaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdFxuICAgIH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5qcyIsImltcG9ydCBNZXRlb3JFbW9qaSBmcm9tICdtZXRlb3ItZW1vamknO1xuLy8gaW1wb3J0IHFxIGZyb20gJ2ZpbmUtdXBsb2FkZXInOyAvL3RvZG86IGZpbmUtdXBsb2FkZVxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3VzZXInO1xuaW1wb3J0IFVzZXJDb252ZXJzYXRpb24gZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2FwaS11c2VyLWRpcmVjdCc7XG5pbXBvcnQgdmlld1V0aWxzIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy92aWV3JztcbmltcG9ydCBTcGlubmVyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9zcGlubmVyJztcbi8vIGltcG9ydCBQdWJTdWIgZnJvbSAncHVic3ViLWpzJzsvLyBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9wdWJzdWItanNcbmltcG9ydCB7Q09OU1R9IGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMnO1xuXG5jb25zdCB0b2tlbiA9IFVzZXIuZ2V0VG9rZW4oKTtcbmNvbnN0ICRtc2dMaXN0ID0gJCgnLm1lc3NhZ2VzLWxpc3QnKTtcbmxldCB1cGRhdGVJbnRlcnZhbCA9ICcnO1xubGV0IGludGVydmFsSWQgPSBmYWxzZTtcblxuZnVuY3Rpb24gaXNJbk1lc3NhZ2VQYWdlKCkge1xuICAgIGNvbnN0ICRtc2dMaXN0ID0gJCgnLm1lc3NhZ2VzLWxpc3QnKTtcbiAgICBjb25zdCAkdXNlckxpc3QgPSAkKCcubWVzc2FnZXMtdXNlci1saXN0Jyk7XG4gICAgcmV0dXJuICEhJG1zZ0xpc3QubGVuZ3RoICYmICEhJHVzZXJMaXN0Lmxlbmd0aDtcbn1cbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcbiAgICBpZiAoIWlzSW5NZXNzYWdlUGFnZSgpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgY29uc3QgbSA9IG5ldyBNZXRlb3JFbW9qaSgpO1xuICAgIGNvbnN0ICRwaWNrZXIgPSAkKCd0ZXh0YXJlYVtkYXRhLW1ldGVvci1lbW9qaT1cInRydWVcIl0gfiBkaXYnKTtcbiAgICBjb25zdCBzdHlsZSA9ICRwaWNrZXIuYXR0cignc3R5bGUnKTtcbiAgICBjb25zdCBzdHlsZU5ldyA9IHN0eWxlLnJlcGxhY2UoJ3RvcDogMzBweDsnLCAndG9wOiAtMjEwcHg7Jyk7XG4gICAgJHBpY2tlci5hdHRyKCdzdHlsZScsIHN0eWxlTmV3KTtcblxuICAgIC8qXG4gICAgLy90b2RvOiBmaW5lLXVwbG9hZGVcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICBjb25zdCByZXN0cmljdGVkVXBsb2FkZXIgPSBuZXcgcXEuRmluZVVwbG9hZGVyKHtcbiAgICAgICAgZWxlbWVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbmUtdXBsb2FkZXItdmFsaWRhdGlvbicpLFxuICAgICAgICB0ZW1wbGF0ZTogJ3FxLXRlbXBsYXRlLXZhbGlkYXRpb24nLFxuICAgICAgICByZXF1ZXN0OiB7XG4gICAgICAgICAgICBlbmRwb2ludDogJy9zZXJ2ZXIvdXBsb2FkcydcbiAgICAgICAgfSxcbiAgICAgICAgdGh1bWJuYWlsczoge1xuICAgICAgICAgICAgcGxhY2Vob2xkZXJzOiB7XG4gICAgICAgICAgICAgICAgd2FpdGluZ1BhdGg6ICdodHRwczovL2ZpbmV1cGxvYWRlci5jb20vc291cmNlL3BsYWNlaG9sZGVycy93YWl0aW5nLWdlbmVyaWMucG5nJywgLy8gJy9zb3VyY2UvcGxhY2Vob2xkZXJzL3dhaXRpbmctZ2VuZXJpYy5wbmcnLFxuICAgICAgICAgICAgICAgIG5vdEF2YWlsYWJsZVBhdGg6ICdodHRwczovL2ZpbmV1cGxvYWRlci5jb20vc2VydmVyL3dhaXRpbmctZ2VuZXJpYy5wbmcnIC8vICcvc291cmNlL3BsYWNlaG9sZGVycy9ub3RfYXZhaWxhYmxlLWdlbmVyaWMucG5nJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB2YWxpZGF0aW9uOiB7XG4gICAgICAgICAgICBhbGxvd2VkRXh0ZW5zaW9uczogWydqcGVnJywgJ2pwZycsICd0eHQnXSxcbiAgICAgICAgICAgIGl0ZW1MaW1pdDogMyxcbiAgICAgICAgICAgIHNpemVMaW1pdDogNTAwICogMTAyNFxuICAgICAgICB9XG4gICAgfSk7Ki9cbn0pO1xuXG4vLyBtZXNzYWdlcy1saXN0XG5mdW5jdGlvbiBmaWxsTGlzdCgkbGlzdCwgZGF0YUFycmF5LCBpc0FwcGVudFByZXZNc2cpIHtcbiAgICBjb25zdCBpdGVtcyA9IGRhdGFBcnJheTtcbiAgICBjb25zdCBjTGlzdCA9ICRsaXN0O1xuICAgIC8vIGNvbnN0IGRlZmF1bHRBdmF0YXJTcmMgPSAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9qTk5UNExFLnBuZyc7XG4gICAgY29uc3QgaW5zZXJ0TXNnID0gKHZhbHVlLCB0eXBlLCBjc3NDbHMpID0+IHtcbiAgICAgICAgbGV0IHN0ciA9ICcnO1xuICAgICAgICBzd2l0Y2ggKHR5cGUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgY2FzZSAncGhvdG8nOlxuICAgICAgICAgICAgICAgIHN0ciA9IGA8ZGl2IGNsYXNzPVwiY2hhdC1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3ZhbHVlfVwiIGFsdD1cIkNvbnRlbnQgSW1hZ2VcIiBjbGFzcz1cImNvbnRlbnQtaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbGluayc6XG4gICAgICAgICAgICAgICAgc3RyID0gYDxkaXYgY2xhc3M9XCJjaGF0LWltZ1wiPlxuICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIke3ZhbHVlfVwiPiR7dmFsdWV9PC9hPmA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OiBzdHIgPSBgPGRpdiBjbGFzcz1cImNoYXQtdGV4dFwiID4ke3ZhbHVlfTwvZGl2PmA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9O1xuICAgIGNvbnN0IGFkZFRvTGlzdCA9IChpc0FwcGVudFByZXZNc2csICRsaSwgJGxpc3QpID0+IHtcbiAgICAgICAgaWYgKGlzQXBwZW50UHJldk1zZykge1xuICAgICAgICAgICAgJGxpLmluc2VydEJlZm9yZSgkbGlzdC5maW5kKCdsaTpmaXJzdC1jaGlsZCcpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRsaS5hcHBlbmRUbygkbGlzdCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGlmIChpc0FwcGVudFByZXZNc2cpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2lzQXBwZW50UHJldk1zZyB0bycsIGNMaXN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjTGlzdC5lbXB0eSgpLmFkZENsYXNzKCdib3JkZXItbGlnaHQtY29sb3InKTtcbiAgICB9XG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gaXRlbTtcbiAgICAgICAgLy8gY29uc3QgY2hlY2twb2ludCA9IGl0ZW0uY2hlY2twb2ludCB8fCBpdGVtO1xuXG4gICAgICAgIGlmIChtZXNzYWdlLnNpZGUudG9Mb3dlckNhc2UoKSA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICBjb25zdCAkbGkgPSAkKGA8bGkgY2xhc3M9XCJjaGF0LWl0ZW0gY2hhdC1pdGVtLWxlZnQgY29sIGZsZXgtY29sdW1uLXJldmVyc2VcIiB2YWx1ZT1cIiR7bWVzc2FnZS52YWx1ZX1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgJHsobWVzc2FnZVsncHJvZmlsZV9waWNfdXJsJ10pXG4gICAgICAgICAgICAgICAgICAgID8gYDxkaXYgY2xhc3M9XCJjaGF0LWltZy1ib3hcIj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke21lc3NhZ2VbJ3Byb2ZpbGVfcGljX3VybCddfVwiIGFsdD1cIlVzZXIgQXZhdGFyXCIgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmBcbiAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjaGF0LXVzZXJuYW1lIHRleHQtbXV0ZWRcIj4ke21lc3NhZ2UudXNlcm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAke2luc2VydE1zZyhtZXNzYWdlLnZhbHVlLCBtZXNzYWdlLnR5cGUpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJjaGF0LXRpbWUtdGV4dFwiPiR7dmlld1V0aWxzLmdldEZvcm1hdHRlZERhdGVVdGlsKG1lc3NhZ2UudGltZXN0YW1wKX08L3NtYWxsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5gKTtcbiAgICAgICAgICAgIGFkZFRvTGlzdChpc0FwcGVudFByZXZNc2csICRsaSwgY0xpc3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgJGxpID0gJChgPGxpIGNsYXNzPVwiY2hhdC1pdGVtIGNoYXQtaXRlbS1yaWdodCBjb2wgZmxleC1jb2x1bW4tcmV2ZXJzZVwiIHZhbHVlPVwiJHttZXNzYWdlLnZhbHVlfVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAke2luc2VydE1zZyhtZXNzYWdlLnZhbHVlLCBtZXNzYWdlLnR5cGUpfVxuICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJwdWxsLXJpZ2h0IGNoYXQtdGltZS10ZXh0XCI+JHt2aWV3VXRpbHMuZ2V0Rm9ybWF0dGVkRGF0ZVV0aWwobWVzc2FnZS50aW1lc3RhbXApfTwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5gKTtcbiAgICAgICAgICAgIGFkZFRvTGlzdChpc0FwcGVudFByZXZNc2csICRsaSwgY0xpc3QpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBhZGRQYWdpbmF0aW9uKCR3cmFwcGVyLCBwYWdpbmF0aW9uKSB7XG4gICAgY29uc3QgY3Vyc29yID0gcGFnaW5hdGlvbi5wcmV2X2N1cnNvcjtcbiAgICBjb25zdCAkYnV0dG9uID0gJChgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGxvYWQtbW9yZSBkLWZsZXggcG9zaXRpb24tYWJzb2x1dGVcIiBzdHlsZT1cInRvcDogLTQycHg7XCJcbiAgICAgICAgZGF0YS1jdXJzb3I9XCIke2N1cnNvcn1cIj7QtdGJ0LUg0LTQsNCy0LDQuSE8L2J1dHRvbj5gKTtcblxuICAgIGlmICghJHdyYXBwZXIuY2xvc2VzdCgnLm1lc3NhZ2VzLWxpc3QtYm94JykuZmluZCgnLmxvYWQtbW9yZScpLmxlbmd0aCkge1xuICAgICAgICAkYnV0dG9uLmluc2VydEJlZm9yZSgkd3JhcHBlcikub24oJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJEYXRhID0gJCgnLm1lc3NhZ2VzLWxpc3QnKS5kYXRhKCdjb252ZXJzYXRpb24nKTtcbiAgICAgICAgICAgIGNvbnN0IHt1c2VybmFtZSwgY29udmVyc2F0aW9uSWR9ID0gdXNlckRhdGE7XG4gICAgICAgICAgICBTcGlubmVyLnN0YXJ0QnV0dG9uU3Bpbm5lcigkYnV0dG9uKTtcbiAgICAgICAgICAgIFVzZXJDb252ZXJzYXRpb24uZ2V0TWV0YWRhdGFEZXRhaWxDb252ZXJzYXRpb24odG9rZW4sIHt1c2VybmFtZSwgY29udmVyc2F0aW9uSWQsIGN1cnNvcn0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWNlaXZlIG1zZycsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgU3Bpbm5lci5zdG9wQnV0dG9uU3Bpbm5lcigkYnV0dG9uKTtcbiAgICAgICAgICAgICAgICBmaWxsTGlzdCgkbXNnTGlzdCwgcmVzdWx0LmRhdGEubWV0YS5tZXNzYWdlcywgJ2FwcGVudFByZXZNc2cnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4vLyBtZXNzYWdlcy11c2VyLWxpc3RcbmZ1bmN0aW9uIGZpbGxVc2VyTGlzdCgkbGlzdCwgZGF0YUFycmF5KSB7XG4gICAgY29uc3QgaXRlbXMgPSBkYXRhQXJyYXkubWV0YTtcbiAgICBjb25zdCBjTGlzdCA9ICRsaXN0O1xuICAgIGNvbnN0IGNvbnZlcnNhdGlvbkRldGFpbCA9IGZ1bmN0aW9uKGl0ZW1zKSB7XG4gICAgICAgIGxldCB0cGwgPSAnJztcbiAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICB0cGwgKz0gYDxpbWcgc3JjPVwiJHtpdGVtWydwcm9maWxlX3BpY191cmwnXX1cIiBjbGFzcz1cIm1lZGlhLXBob3RvIG1yLTEgbWVkaWEtcGhvdG8tLWdyb3VwXCIgc3R5bGU9XCJ3aWR0aDogMjRweDtcIj5gO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0cGwgKz0gYDxpbWcgc3JjPVwiJHtpdGVtWydwcm9maWxlX3BpY191cmwnXX1cIiBjbGFzcz1cIm1lZGlhLXBob3RvIG1yLTFcIiBzdHlsZT1cIndpZHRoOiAyNHB4O1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1ib2R5XCI+XG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgJHtpdGVtLnVzZXJuYW1lfVxuICAgICAgICAgICAgICAgIDwvaDU+YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChpdGVtcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB0cGwgKz0gJzxoNSBjbGFzcz1cInRpdGxlXCI+0JPRgNGD0L/QvtCy0L7QuSDRh9Cw0YI8L2g1Pic7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRwbDtcbiAgICB9O1xuICAgIGNvbnN0IGFkZENvbnZlcnNhdGlvbnMgPSBmdW5jdGlvbihjb252ZXJzYXRpb25zKSB7XG4gICAgICAgIGxldCB0cGwgPSAnJztcbiAgICAgICAgY29udmVyc2F0aW9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICB0cGwgKz0gYDxkaXYgY2xhc3M9XCJtZWRpYSBwLTFcIiBkYXRhLWNvbnZlcnNhdGlvbi1pZD1cIiR7aXRlbS5pZH1cIj5cbiAgICAgICAgICAgICAgICAgICAgJHtjb252ZXJzYXRpb25EZXRhaWwoaXRlbS50byl9XG4gICAgICAgICAgICAgICAgICAgICR7KGl0ZW1bJ2xhc3RfbWVzc2FnZSddICYmIChwYXJzZUludChpdGVtWydsYXN0X21lc3NhZ2UnXS5sZW5ndGgsIDEwKSkgPiAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBgPHAgY2xhc3M9XCJzdW1tYXJ5ICR7aXRlbVsnaXNfdW5yZWFkJ10gPyAnZm9udC13ZWlnaHQtYm9sZCcgOiAndGV4dC1tdXRlZCd9XCI+JHtpdGVtWydsYXN0X21lc3NhZ2UnXX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAke2l0ZW1bJ2lzX3VucmVhZCddID8gJzxzcGFuIGNsYXNzPVwic3VtbWFyeS1kb3RcIj48L3NwYW4+JyA6ICcnfWBcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJyd9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0cGw7XG4gICAgfTtcbiAgICBjTGlzdC5lbXB0eSgpLmFkZENsYXNzKCdib3JkZXItbGlnaHQtY29sb3InKTtcbiAgICAvLyB0b2RvOiBmaXggaGFyZC1jb2RlICBpbWcgc3JjPVwiaHR0cHM6Ly9pLmltZ3VyLmNvbS9qTk5UNExFLnBuZ1wiXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaWR4KSA9PiB7XG4gICAgICAgICQoYDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbVwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNjb2xsYXBzZS0ke2lkeH1cIiBkYXRhLXVzZXJuYW1lPVwiJHtpdGVtLnVzZXJuYW1lfVwiIFxuICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJ0cnVlXCIgYXJpYS1jb250cm9scz1cImNvbGxhcHNlLSR7aWR4fVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhXCIgaWQ9XCJoZWFkaW5nLSR7aWR4fVwiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtci0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pLmltZ3VyLmNvbS9qTk5UNExFLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWVkaWEtcGhvdG9cIj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgJHsoaXRlbVsndW5yZWFkX2NvbnZlcnNhdGlvbnMnXSA+IDApID8gYDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2Utc2Vjb25kYXJ5IHBvc2l0aW9uLWFic29sdXRlIHAtMlwiPiR7aXRlbVsndW5yZWFkX2NvbnZlcnNhdGlvbnMnXX08L3NwYW4+YCA6ICcnfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke2l0ZW0udXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb2xsYXBzZS0ke2lkeH1cIiBjbGFzcz1cImNvbGxhcHNlXCIgYXJpYS1sYWJlbGxlZGJ5PVwiaGVhZGluZy0ke2lkeH1cIiBkYXRhLXBhcmVudD1cIiNhY2NvcmRpb25cIj5cbiAgICAgICAgICAgICAgICAke2FkZENvbnZlcnNhdGlvbnMoaXRlbS5jb252ZXJzYXRpb25zLCBpZHgpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPmApLmFwcGVuZFRvKGNMaXN0KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0QW5kRmlsbFVzZXJMaXN0KGlzQWN0aXZlRmlyc3QpIHtcbiAgICBjb25zdCAkdXNlckxpc3QgPSAkKCcubWVzc2FnZXMtdXNlci1saXN0Jyk7XG4gICAgY29uc3QgbWV0YWRhdGEgPSBVc2VyQ29udmVyc2F0aW9uLmdldE1ldGFkYXRhKHRva2VuKTtcbiAgICBsZXQgcHJldkFjdGl2ZURpYWxvZ0lkID0gJyc7XG4gICAgaWYgKCFpc0FjdGl2ZUZpcnN0KSB7XG4gICAgICAgIHByZXZBY3RpdmVEaWFsb2dJZCA9ICR1c2VyTGlzdC5maW5kKCdsaSAuY29sbGFwc2Uuc2hvdycpLmF0dHIoJ2lkJyk7XG4gICAgfVxuICAgIG1ldGFkYXRhLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICBpZiAoIXJlc3VsdC5kYXRhKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmRhdGEubWV0YS5zb3J0KChhLCBiKSA9PiBhWyd1c2VybmFtZSddLmxvY2FsZUNvbXBhcmUoYlsndXNlcm5hbWUnXSkpO1xuICAgICAgICBmaWxsVXNlckxpc3QoJHVzZXJMaXN0LCByZXN1bHQuZGF0YSk7XG4gICAgICAgIGlmIChyZXN1bHQuZGF0YS5zZXR0aW5ncyAmJiByZXN1bHQuZGF0YS5zZXR0aW5ncy5pbnZva2VfaW5fbWlsbGlzKSB7XG4gICAgICAgICAgICB1cGRhdGVJbnRlcnZhbCA9IHJlc3VsdC5kYXRhLnNldHRpbmdzLmludm9rZV9pbl9taWxsaXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzQWN0aXZlRmlyc3QpIHtcbiAgICAgICAgICAgICR1c2VyTGlzdC5maW5kKCdsaTpmaXJzdC1jaGlsZCAuY29sbGFwc2UnKS5hZGRDbGFzcygnc2hvdycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3R0dCcsIHByZXZBY3RpdmVEaWFsb2dJZCk7XG4gICAgICAgICAgICAkKGAjJHtwcmV2QWN0aXZlRGlhbG9nSWR9YCkuYWRkQ2xhc3MoJ3Nob3cnKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRBbmRGaWxsQ29udmVyc2F0aW9uKHVzZXJuYW1lLCBjb252ZXJzYXRpb25JZCwgaXNTY3JvbGxEb3duKSB7XG4gICAgVXNlckNvbnZlcnNhdGlvbi5nZXRNZXRhZGF0YURldGFpbENvbnZlcnNhdGlvbih0b2tlbiwge3VzZXJuYW1lLCBjb252ZXJzYXRpb25JZH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICBmaWxsTGlzdCgkbXNnTGlzdCwgcmVzdWx0LmRhdGEubWV0YS5tZXNzYWdlcyk7XG4gICAgICAgIFNwaW5uZXIucmVtb3ZlKCk7XG4gICAgICAgICQoJy5qc19zZW5kLW1lc3NhZ2UtYm94JykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAkKCcubWVzc2FnZXMtbGlzdCcpLmF0dHIoJ2RhdGEtY29udmVyc2F0aW9uJywgSlNPTi5zdHJpbmdpZnkoe3VzZXJuYW1lLCBjb252ZXJzYXRpb25JZH0pKTtcblxuICAgICAgICBpZiAoaXNTY3JvbGxEb3duKSB7XG4gICAgICAgICAgICAkbXNnTGlzdC5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6ICRtc2dMaXN0WzBdLnNjcm9sbEhlaWdodCAtICRtc2dMaXN0WzBdLmNsaWVudEhlaWdodFxuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0LmRhdGEubWV0YS5wYWdpbmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYWRkUGFnaW5hdGlvbigkbXNnTGlzdCwgcmVzdWx0LmRhdGEubWV0YS5wYWdpbmF0aW9uKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnLm1lc3NhZ2VzLWxpc3QtYm94JykuZmluZCgnLmxvYWQtbW9yZScpLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZEhhbmRsZXJzKCkge1xuICAgIGxldCBjb252ZXJzYXRpb25JZCA9ICcnO1xuXG4gICAgJCgnI3NlbmRNZXNzYWdlQnV0dG9uJykub24oJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgY29uc3QgJHRleHRBcmVhID0gJCgnI3NlbmRNZXNzYWdlVGV4dEFyZWEnKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSAkdGV4dEFyZWEudmFsKCk7XG4gICAgICAgIGNvbnN0IHVzZXJEYXRhID0gJCgnLm1lc3NhZ2VzLWxpc3QnKS5kYXRhKCdjb252ZXJzYXRpb24nKTtcbiAgICAgICAgY29uc3Qge3VzZXJuYW1lLCBjb252ZXJzYXRpb25JZH0gPSB1c2VyRGF0YTtcbiAgICAgICAgU3Bpbm5lci5hZGQoJChlLnRhcmdldCksICdzcGlubmVyLWJveC0tc2VuZE1zZycpO1xuICAgICAgICBVc2VyQ29udmVyc2F0aW9uLnBvc3RNZXRhZGF0YURldGFpbENvbnZlcnNhdGlvbih0b2tlbiwge3VzZXJuYW1lLCBjb252ZXJzYXRpb25JZCwgdmFsdWV9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnN0YXR1cyAmJiByZXN1bHQuc3RhdHVzLnN0YXRlID09PSAnb2snKSB7XG4gICAgICAgICAgICAgICAgZ2V0QW5kRmlsbENvbnZlcnNhdGlvbih1c2VybmFtZSwgY29udmVyc2F0aW9uSWQpO1xuICAgICAgICAgICAgICAgICR0ZXh0QXJlYS52YWwoJycpO1xuICAgICAgICAgICAgICAgIFNwaW5uZXIucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgd2luZG93LlB1YlN1Yi5wdWJsaXNoKENPTlNULmV2ZW50cy5tZXNzYWdlcy5SRUNJRVZFX05FV19NRVNTQUdFLCB7dXNlcm5hbWUsIGNvbnZlcnNhdGlvbklkLCB2YWx1ZSwgcmVzdWx0fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubGlzdC1ncm91cC1pdGVtIC5jb2xsYXBzZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcubGlzdC1ncm91cC1pdGVtJykuZGF0YSgndXNlcm5hbWUnKTtcbiAgICAgICAgY29udmVyc2F0aW9uSWQgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcubWVkaWEnKS5kYXRhKCdjb252ZXJzYXRpb24taWQnKTtcbiAgICAgICAgU3Bpbm5lci5hZGQoJCgnI21haW5DaGF0UGFydCcpLCAnbXktNSBweS01Jyk7XG4gICAgICAgIGdldEFuZEZpbGxDb252ZXJzYXRpb24odXNlcm5hbWUsIGNvbnZlcnNhdGlvbklkLCAnaXNTY3JvbGxEb3duJyk7XG4gICAgICAgIHVwZGF0ZUludGVydmFsID0gKHVwZGF0ZUludGVydmFsID4gNjAwMCkgPyB1cGRhdGVJbnRlcnZhbCA6IDE1MDAwO1xuICAgICAgICAvLyByZXNlbmQgcmVxdWVzdFxuICAgICAgICBpZiAoaW50ZXJ2YWxJZCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgICAgICAgfVxuICAgICAgICBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgY29udmVyc2F0aW9uSWQgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcubWVkaWEnKS5kYXRhKCdjb252ZXJzYXRpb24taWQnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGludGVydmFsSWQsIGNvbnZlcnNhdGlvbklkKTtcbiAgICAgICAgICAgIGdldEFuZEZpbGxDb252ZXJzYXRpb24odXNlcm5hbWUsIGNvbnZlcnNhdGlvbklkKTtcbiAgICAgICAgICAgIGdldEFuZEZpbGxVc2VyTGlzdCgpO1xuICAgICAgICB9LCB1cGRhdGVJbnRlcnZhbCk7XG4gICAgfSk7XG5cbiAgICB3aW5kb3cuUHViU3ViLnN1YnNjcmliZShDT05TVC5ldmVudHMubWVzc2FnZXMuUkVDSUVWRV9ORVdfTUVTU0FHRSwgKGV2ZW50TmFtZSwgZGF0YSkgPT4ge1xuICAgICAgICBjb25zdCB7dXNlcm5hbWUsIGNvbnZlcnNhdGlvbklkLCB2YWx1ZSwgcmVzdWx0RnJvbVNlcnZlcn0gPSBkYXRhO1xuICAgICAgICBjb25zdCAkZGlhbG9nID0gJChgLm1lc3NhZ2VzLXVzZXItbGlzdCAubGlzdC1ncm91cC1pdGVtW2RhdGEtdXNlcm5hbWU9XCIke3VzZXJuYW1lfVwiXSBkaXZbZGF0YS1jb252ZXJzYXRpb24taWQ9XCIke2NvbnZlcnNhdGlvbklkfVwiXWApO1xuICAgICAgICBjb25zb2xlLmxvZygnc2V0IHZhbCBmcm9tIHRleHQtYXJlYScsIHZhbHVlKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3Jlc3VsdEZyb21TZXJ2ZXI6ICcsIHJlc3VsdEZyb21TZXJ2ZXIpO1xuICAgICAgICAkZGlhbG9nLmZpbmQoJy5zdW1tYXJ5JykudGV4dCh2YWx1ZSk7XG5cbiAgICAgICAgLy8gbWV0YWRhdGEudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIC8vICAgICBmaWxsVXNlckxpc3QoJHVzZXJMaXN0LCByZXN1bHQuZGF0YSk7XG4gICAgICAgIC8vICAgICBpZiAocmVzdWx0LmRhdGEuc2V0dGluZ3MgJiYgcmVzdWx0LmRhdGEuc2V0dGluZ3MuaW52b2tlX2luX21pbGxpcykge1xuICAgICAgICAvLyAgICAgICAgIHVwZGF0ZUludGVydmFsID0gcmVzdWx0LmRhdGEuc2V0dGluZ3MuaW52b2tlX2luX21pbGxpcztcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xuICAgIC8vIGNoZWNrIHdlIGFyZSBpbiBjb3JyZWN0IHBhZ2UgKG1lc3NhZ2VzKVxuICAgIGlmICghaXNJbk1lc3NhZ2VQYWdlKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGdldEFuZEZpbGxVc2VyTGlzdCgnc2V0QWN0aXZlRmlyc3QnKTtcbiAgICBhZGRIYW5kbGVycygpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9tZXNzYWdlcy9tZXNzYWdlcy5qcyIsIi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgUHViU3ViIGZyb20gJ3B1YnN1Yi1qcyc7IC8vIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3B1YnN1Yi1qc1xuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3VzZXInO1xuaW1wb3J0IGNvb2tpZVN0b3JhZ2UgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2Nvb2tpZSc7XG5pbXBvcnQge0NPTlNUfSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29uc3RzJztcbmltcG9ydCB2aWV3VXRpbHMgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3ZpZXcnO1xuXG5jb25zdCBzZWxlY3RvckNscyA9IHtcbiAgICBmb3JtOiAnLmF1dGgucmVnaXN0ZXIgLmZvcm0tc2lnbmluJyxcbiAgICBzdWJtaXRCdG46ICdbdHlwZT1cInN1Ym1pdFwiXSdcbn07XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWdpc3RlckZvcm0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnVzZXIgPSBVc2VyO1xuICAgICAgICB0aGlzLiRmb3JtID0gJChzZWxlY3RvckNscy5mb3JtKTtcbiAgICAgICAgdGhpcy4kZW1haWwgPSB0aGlzLiRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJtYWlsXCJdJyk7XG4gICAgICAgIHRoaXMuJHRleHRBcmVhRGVzY3JpcHRpb24gPSAkKCcjZGVzY3JpcHRpb24nKTtcbiAgICAgICAgdGhpcy5mb3JtRGF0YSA9IHsnZW1haWwnOiAndGVzdDFfZW1haWxAbS5ydScsICdwYXNzd29yZCc6ICdwYXNzd29yZCd9O1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGlmICgkKCcuYXV0aC5yZWdpc3RlcicpLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdWJtaXRGb3JtKGZvcm1EYXRhT2JqKSB7XG4gICAgICAgIGNvbnN0IGVtYWlsID0gdGhpcy4kZW1haWwudmFsKCk7XG4gICAgICAgIGNvbnN0ICRwYXNzd29yZCA9IHRoaXMuJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cInBhc3NcIl0nKSxcbiAgICAgICAgICAgICRwYXNzd29yZENvbmZpcm0gPSB0aGlzLiRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJwYXNzLWNvbmZpcm1cIl0nKSxcbiAgICAgICAgICAgIHBhc3N3b3JkID0gdGhpcy4kZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwicGFzc1wiXScpLnZhbCgpLFxuICAgICAgICAgICAgcGFzc3dvcmRDb25maXJtID0gdGhpcy4kZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwicGFzcy1jb25maXJtXCJdJykudmFsKCk7XG5cbiAgICAgICAgaWYgKHBhc3N3b3JkQ29uZmlybSAhPT0gcGFzc3dvcmQpIHtcbiAgICAgICAgICAgICRwYXNzd29yZC5hZGRDbGFzcygnaW5wdXQtZXJyb3InKTtcbiAgICAgICAgICAgICRwYXNzd29yZENvbmZpcm0uYWRkQ2xhc3MoJ2lucHV0LWVycm9yJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kZW1haWwudmFsKHRoaXMuJGVtYWlsLnZhbCgpLnRvTG9jYWxlTG93ZXJDYXNlKCkpO1xuICAgICAgICB0aGlzLmZvcm1EYXRhID0gZm9ybURhdGFPYmogfHwge2VtYWlsLCBwYXNzd29yZH07XG5cbiAgICAgICAgdGhpcy51c2VyLnJlZ2lzdGVyKHRoaXMuZm9ybURhdGEpXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5kYXRhICYmIHJlc3VsdC5kYXRhLnRva2VuKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gc2F2ZSB0aGUgaXRlbVxuICAgICAgICAgICAgICAgICAgICBjb29raWVTdG9yYWdlLnNldChDT05TVC5jb29raWVTdG9yYWdlLmVtYWlsQ29uZmlybWVkLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgICAgICAgICBjb29raWVTdG9yYWdlLnNldChDT05TVC5jb29raWVTdG9yYWdlLnRva2VuLCByZXN1bHQuZGF0YS50b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXF1ZXN0IHN1Y2NlZWRlZCB3aXRoIEpTT04gcmVzcG9uc2UnLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICBQdWJTdWIucHVibGlzaChDT05TVC5ldmVudHMuVVNFUl9MT0dHRUQpO1xuICAgICAgICAgICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKHRoaXMuJHRleHRBcmVhRGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLnN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5tZXNzYWdlIHx8ICdSZWdpc3RlciBhbmQgTG9naW4gc3VjY3Nlc3MnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKHRoaXMuJHRleHRBcmVhRGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLnN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5tZXNzYWdlIHx8ICdubyByZXN1bHQuZGF0YSBmb3VuZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKHRoaXMuJHRleHRBcmVhRGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLnN0YXRlKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnLmxvZ2luLWJveCcpLnNob3coKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVxdWVzdCBmYWlsZWQnLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSh0aGlzLiR0ZXh0QXJlYURlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZG8gc29tZXRoaW5nJyk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICBjb25zdCByZWdpc3RlckJveCA9IENPTlNULnVpU2VsZWN0b3JzLmhlYWRlclJlZ0JveDsgLy8gJ25hdiAucmVnaXN0ZXItYm94JztcbiAgICAgICAgY29uc3Qgb3BlbmVkQ2xhc3MgPSAnZC1ibG9jayc7XG4gICAgICAgIGNvbnN0IGNsb3NlQ2xhc3MgPSAnZC1ub25lJztcbiAgICAgICAgY29uc3QgJGJ0biA9ICQoc2VsZWN0b3JDbHMuc3VibWl0QnRuKSxcbiAgICAgICAgICAgIGNzc1ZhbGlkYXRpb25DbGFzcyA9ICdmb3JtLXZhbGlkYXRpb24nO1xuXG4gICAgICAgICRidG4ub24oJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSB0aGlzLiRmb3JtLmdldCgwKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgaWYgKCEkYnRuLmlzKCc6ZGlzYWJsZWQnKSkge1xuICAgICAgICAgICAgICAgIGlmIChmb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyAkYnRuLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0Rm9ybSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEhpZ2hsaWdodCBlcnJvcnNcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm0ucmVwb3J0VmFsaWRpdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0ucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRmb3JtLmFkZENsYXNzKGNzc1ZhbGlkYXRpb25DbGFzcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzUmVnQnRuQ2xpY2sgPSAkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnbmF2Lm5hdmJhcicpLmZpbmQoJy5yZWdpc3Rlci1ib3gnKS5sZW5ndGg7XG5cbiAgICAgICAgICAgIGlmICghaXNSZWdCdG5DbGljayAmJiAkKHJlZ2lzdGVyQm94KS5oYXNDbGFzcyhvcGVuZWRDbGFzcykpIHtcbiAgICAgICAgICAgICAgICAkKHJlZ2lzdGVyQm94KS5hZGRDbGFzcyhjbG9zZUNsYXNzKS5yZW1vdmVDbGFzcyhvcGVuZWRDbGFzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3MvcmVnaXN0ZXItZm9ybS9yZWdpc3Rlci1mb3JtLmpzIiwiLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7Q09OU1R9IGZyb20gJy4vY29uc3RzJztcbmltcG9ydCBOZXR3b3JrIGZyb20gJy4vbmV0d29yayc7XG5pbXBvcnQgQ29va2llU3RvcmFnZSBmcm9tICcuL2Nvb2tpZSc7XG5cbmNsYXNzIFVzZXJDb252ZXJzYXRpb24ge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubmV0d29yayA9IG5ldyBOZXR3b3JrKCk7XG4gICAgICAgIHRoaXMuY29va2llU3RvcmFnZSA9IENvb2tpZVN0b3JhZ2U7XG4gICAgICAgIHRoaXMuc2V0dGluZ1Bvc3QgPSB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBpc0xvZ2dlZEluKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLmdldFRva2VuKCk7XG4gICAgfVxuXG4gICAgaXNFbWFpbENvbmZpcm1lZCgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmNvb2tpZVN0b3JhZ2UuZ2V0KENPTlNULmNvb2tpZVN0b3JhZ2UuZW1haWxDb25maXJtZWQpID09PSAnY29uZmlybWVkJyk7XG4gICAgfVxuXG4gICAgZ2V0VG9rZW4oKSB7XG4gICAgICAgIGNvbnN0IGNvb2tpZVRva2VuID0gdGhpcy5jb29raWVTdG9yYWdlLmdldChDT05TVC5jb29raWVTdG9yYWdlLnRva2VuKTtcbiAgICAgICAgcmV0dXJuIGNvb2tpZVRva2VuO1xuICAgIH1cblxuICAgIGdldE1ldGFkYXRhKHRva2VuLCBjYkVycm9yKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QoYCR7Q09OU1QuZ2V0UGF0aCgnaW5zdGFncmFtRGlyZWN0X2dldE1ldGFEYXRhJyl9YCwge2hlYWRlcnM6IHt0b2tlbn19LCBjYkVycm9yKTtcbiAgICB9XG5cbiAgICBnZXRNZXRhZGF0YURldGFpbENvbnZlcnNhdGlvbih0b2tlbiwgZGV0YWlscywgY2JFcnJvcikge1xuICAgICAgICBjb25zdCBjdXJzb3IgPSAoZGV0YWlscy5jdXJzb3IpID8gYD9jdXJzb3I9JHtkZXRhaWxzLmN1cnNvcn1gIDogJyc7XG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QoYCR7Q09OU1QuZ2V0UGF0aCgnaW5zdGFncmFtRGlyZWN0X2dldE1ldGFEYXRhJyl9LyR7ZGV0YWlscy51c2VybmFtZX0vJHtkZXRhaWxzLmNvbnZlcnNhdGlvbklkfSR7Y3Vyc29yfWAsXG4gICAgICAgICAgICB7aGVhZGVyczoge3Rva2VufX0sIGNiRXJyb3IpO1xuICAgIH1cbiAgICBwb3N0TWV0YWRhdGFEZXRhaWxDb252ZXJzYXRpb24odG9rZW4sIGRldGFpbHMsIGNiRXJyb3IpIHtcbiAgICAgICAgY29uc3Qgc2V0dGluZyA9IHtcbiAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7J3ZhbHVlJzogZGV0YWlscy52YWx1ZX0pLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QuaGVhZGVycyxcbiAgICAgICAgICAgICAgICAndG9rZW4nOiB0aGlzLmdldFRva2VuKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChgJHtDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1EaXJlY3RfcG9zdE1lc3NhZ2UnKX0vJHtkZXRhaWxzLnVzZXJuYW1lfS8ke2RldGFpbHMuY29udmVyc2F0aW9uSWR9L3RleHRgLFxuICAgICAgICAgICAgc2V0dGluZywgY2JFcnJvcik7XG4gICAgfVxuXG59XG5cbmxldCB1c2VySW5zdGFuY2UgPSBudWxsO1xuXG5pZiAoIXVzZXJJbnN0YW5jZSkge1xuICAgIHVzZXJJbnN0YW5jZSA9IG5ldyBVc2VyQ29udmVyc2F0aW9uKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZXJJbnN0YW5jZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tb24vanMtc2VydmljZXMvYXBpLXVzZXItZGlyZWN0LmpzIiwiLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5Jztcbi8vIGltcG9ydCB7Q09OU1R9IGZyb20gJy4vY29uc3RzJztcbi8vIGltcG9ydCBOZXR3b3JrIGZyb20gJy4vbmV0d29yayc7XG4vLyBpbXBvcnQgQ29va2llU3RvcmFnZSBmcm9tICcuL2Nvb2tpZSc7XG4vLyBpbXBvcnQgUHViU3ViIGZyb20gJ3B1YnN1Yi1qcyc7IC8vIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3B1YnN1Yi1qc1xuXG4vLyBjb25zdCBTUElOTkVSX0JBU0VfVEVNUEFMQVRFID0gJ2pzL3VpL3RwbC9zcGlubmVyLmhicyc7XG5jb25zdCBjbGFzc2VzID0ge1xuICAgIGlubGluZTogJ2dsb2JhbC1pbmxpbmUtc3Bpbm5lcicsXG4gICAgb3ZlcmxheTogJ2dsb2JhbC1vdmVybGF5LXNwaW5uZXInLFxuICAgIGZpeGVkOiAnZ2xvYmFsLWZpeGVkLXNwaW5uZXInLFxuICAgIGJ1dHRvbjogJ2J1dHRvbi0tbG9hZCdcbn07XG4vLyBjb25zdCBoYW5kbGViYXJzVHBsID0gZnVuY3Rpb24gKG5hbWUsIGRhdGEsICR0YXJnZXQpIHtcbi8vICAgICAvLyB2YXIgaHRtbCA9IHRoaXMuZ2V0VGVtcGxhdGUobmFtZSkoZGF0YSk7XG4vLyAgICAgdmFyIGh0bWwgPSBIYW5kbGViYXJzLmNvbXBpbGUodGVtcGxhdGUpO1xuLy9cbi8vICAgICBpZiAoJHRhcmdldCkge1xuLy8gICAgICAgICAvL2ZvciBwcmV2ZW50aW5nIHhzc1xuLy8gICAgICAgICAkdGFyZ2V0WzBdLmlubmVySFRNTCA9IGh0bWw7XG4vLyAgICAgfVxuLy9cbi8vICAgICByZXR1cm4gaHRtbDtcbi8vIH07XG4vLyBjb25zdCBoYW5kbGViYXJzID0gdGhpcy5nZXRTZXJ2aWNlKCdjb3JlLnRlbXBsYXRpbmcuaGFuZGxlYmFycycpO1xuXG5jbGFzcyBTcGlubmVyIHtcblxuICAgIGNvbnN0cnVjdG9yKF9jZmcpIHtcbiAgICAgICAgdGhpcy5jZmcgPSBfY2ZnIHx8IHt9O1xuICAgICAgICAvLyB0aGlzLiRkZWZhdWx0Q29udGFpbmVyID0gJCgnYm9keScpO1xuICAgICAgICAkLmV4dGVuZChjbGFzc2VzLCB0aGlzLmNmZy5jbGFzc2VzKTtcbiAgICAgICAgLy8gdGhpcy5fbWVkaWF0b3Iuc3Vic2NyaWJlKENPTlNULmV2ZW50cy5TVE9QX0ZJWEVEX1NQSU5ORVIsIHRoaXMuc3RvcEZpeGVkU3Bpbm5lci5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgLy8gX21lZGlhdG9yID0gUHViU3ViO1xuXG4gICAgc3RhcnQoJGVsLCBwcmV3Q2xzKSB7XG4gICAgICAgIC8vIGlmIChhZGRPclJlbW92ZSkge1xuICAgICAgICAvLyAgICAgJCgnI2ZvbycpLmFkZENsYXNzKGNsYXNzTmFtZSk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gZWxzZSB7XG4gICAgICAgIC8vICAgICAkKCcjZm9vJykucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAkZWwuZmluZCgnaScpLnRvZ2dsZUNsYXNzKHByZXdDbHMpLmFkZENsYXNzKCdmYS1zcGluIGZhLXNwaW5uZXInKTtcbiAgICB9XG5cbiAgICBzdG9wKCRlbCwgbmV3Q2xzKSB7XG4gICAgICAgICRlbC5maW5kKCdpJykudG9nZ2xlQ2xhc3MobmV3Q2xzKS5yZW1vdmVDbGFzcygnZmEtc3BpbiBmYS1zcGlubmVyJyk7XG4gICAgfVxuXG4gICAgYWRkKCRlbCwgbmV3Q2xzKSB7XG4gICAgICAgIHRoaXMuJGVsID0gJGVsO1xuICAgICAgICAkZWwucHJlcGVuZChgPGRpdiBjbGFzcz1cInNwaW5uZXItYm94IGp1c3RpZnktY29udGVudC1jZW50ZXIgJHtuZXdDbHN9XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3Bpbi1hbmltYXRpb25cIj5cbiAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGRhdGEtcHJlZml4PVwiZmFyXCIgZGF0YS1pY29uPVwic3luYy1hbHRcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIGNsYXNzPVwic3ZnLWlubGluZS0tZmEgZmEtc3luYy1hbHQgZmEtdy0xNiBmYS1mdyBmYS0yeFwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTQ4My41MTUgMjguNDg1TDQzMS4zNSA4MC42NUMzODYuNDc1IDM1Ljc2NyAzMjQuNDg1IDggMjU2IDggMTIzLjIyOCA4IDE0LjgyNCAxMTIuMzM4IDguMzEgMjQzLjQ5MyA3Ljk3MSAyNTAuMzExIDEzLjQ3NSAyNTYgMjAuMzAxIDI1NmgyOC4wNDVjNi4zNTMgMCAxMS42MTMtNC45NTIgMTEuOTczLTExLjI5NEM2Ni4xNjEgMTQxLjY0OSAxNTEuNDUzIDYwIDI1NiA2MGM1NC4xNjMgMCAxMDMuMTU3IDIxLjkyMyAxMzguNjE0IDU3LjM4NmwtNTQuMTI4IDU0LjEyOWMtNy41NiA3LjU2LTIuMjA2IDIwLjQ4NSA4LjQ4NSAyMC40ODVINDkyYzYuNjI3IDAgMTItNS4zNzMgMTItMTJWMzYuOTcxYzAtMTAuNjkxLTEyLjkyNi0xNi4wNDUtMjAuNDg1LTguNDg2ek00OTEuNjk5IDI1NmgtMjguMDQ1Yy02LjM1MyAwLTExLjYxMyA0Ljk1Mi0xMS45NzMgMTEuMjk0QzQ0NS44MzkgMzcwLjM1MSAzNjAuNTQ3IDQ1MiAyNTYgNDUyYy01NC4xNjMgMC0xMDMuMTU3LTIxLjkyMy0xMzguNjE0LTU3LjM4Nmw1NC4xMjgtNTQuMTI5YzcuNTYtNy41NiAyLjIwNi0yMC40ODUtOC40ODUtMjAuNDg1SDIwYy02LjYyNyAwLTEyIDUuMzczLTEyIDEydjE0My4wMjljMCAxMC42OTEgMTIuOTI2IDE2LjA0NSAyMC40ODUgOC40ODVMODAuNjUgNDMxLjM1QzEyNS41MjUgNDc2LjIzMyAxODcuNTE2IDUwNCAyNTYgNTA0YzEzMi43NzMgMCAyNDEuMTc2LTEwNC4zMzggMjQ3LjY5LTIzNS40OTMuMzM5LTYuODE4LTUuMTY1LTEyLjUwNy0xMS45OTEtMTIuNTA3elwiIGNsYXNzPVwiXCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PmApO1xuICAgIH1cblxuICAgIHJlbW92ZSgpIHtcbiAgICAgICAgdGhpcy4kZWwuZmluZCgnLnNwaW5uZXItYm94JykucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBzcGlubmVyIGljb24gb24gYnV0dG9uIGJlZm9yZSB0aGUgYnV0dG9uIHRleHRcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJGVsXG4gICAgICovXG4gICAgc3RhcnRCdXR0b25TcGlubmVyID0gZnVuY3Rpb24gKCRlbCwgbmV3Q2xzKSB7XG4gICAgICAgICRlbC5hZGRDbGFzcyhjbGFzc2VzLmJ1dHRvbik7XG4gICAgICAgICRlbC5wcmVwZW5kKGA8ZGl2IGNsYXNzPVwic3Bpbm5lci1ib3ggc3Bpbm5lci1ib3gtLWJ1dHRvbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHBvc2l0aW9uLXJlbGF0aXZlIHAtMCBtLTAgYmctdHJhbnNwYXJlbnQgJHtuZXdDbHN9XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3Bpbi1hbmltYXRpb25cIj5cbiAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGRhdGEtcHJlZml4PVwiZmFyXCIgZGF0YS1pY29uPVwic3luYy1hbHRcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZhLWZ3XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTQ4My41MTUgMjguNDg1TDQzMS4zNSA4MC42NUMzODYuNDc1IDM1Ljc2NyAzMjQuNDg1IDggMjU2IDggMTIzLjIyOCA4IDE0LjgyNCAxMTIuMzM4IDguMzEgMjQzLjQ5MyA3Ljk3MSAyNTAuMzExIDEzLjQ3NSAyNTYgMjAuMzAxIDI1NmgyOC4wNDVjNi4zNTMgMCAxMS42MTMtNC45NTIgMTEuOTczLTExLjI5NEM2Ni4xNjEgMTQxLjY0OSAxNTEuNDUzIDYwIDI1NiA2MGM1NC4xNjMgMCAxMDMuMTU3IDIxLjkyMyAxMzguNjE0IDU3LjM4NmwtNTQuMTI4IDU0LjEyOWMtNy41NiA3LjU2LTIuMjA2IDIwLjQ4NSA4LjQ4NSAyMC40ODVINDkyYzYuNjI3IDAgMTItNS4zNzMgMTItMTJWMzYuOTcxYzAtMTAuNjkxLTEyLjkyNi0xNi4wNDUtMjAuNDg1LTguNDg2ek00OTEuNjk5IDI1NmgtMjguMDQ1Yy02LjM1MyAwLTExLjYxMyA0Ljk1Mi0xMS45NzMgMTEuMjk0QzQ0NS44MzkgMzcwLjM1MSAzNjAuNTQ3IDQ1MiAyNTYgNDUyYy01NC4xNjMgMC0xMDMuMTU3LTIxLjkyMy0xMzguNjE0LTU3LjM4Nmw1NC4xMjgtNTQuMTI5YzcuNTYtNy41NiAyLjIwNi0yMC40ODUtOC40ODUtMjAuNDg1SDIwYy02LjYyNyAwLTEyIDUuMzczLTEyIDEydjE0My4wMjljMCAxMC42OTEgMTIuOTI2IDE2LjA0NSAyMC40ODUgOC40ODVMODAuNjUgNDMxLjM1QzEyNS41MjUgNDc2LjIzMyAxODcuNTE2IDUwNCAyNTYgNTA0YzEzMi43NzMgMCAyNDEuMTc2LTEwNC4zMzggMjQ3LjY5LTIzNS40OTMuMzM5LTYuODE4LTUuMTY1LTEyLjUwNy0xMS45OTEtMTIuNTA3elwiIGNsYXNzPVwiXCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PmApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgc3Bpbm5lciBpY29uIGZyb20gYnV0dG9uXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRlbFxuICAgICAqL1xuICAgIHN0b3BCdXR0b25TcGlubmVyID0gZnVuY3Rpb24gKCRlbCkge1xuICAgICAgICAkZWwucmVtb3ZlQ2xhc3MoY2xhc3Nlcy5idXR0b24pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmRzIHNwaW5uZXJzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gJGNvbnRhaW5lclxuICAgICAqIEByZXR1cm4gez9qUXVlcnl9IHNwaW5uZXJzXG4gICAgICovXG4gICAgLy8gX2ZpbmRTcGlubmVyID0gZnVuY3Rpb24gKHR5cGUsICRjb250YWluZXIpIHtcbiAgICAvLyAgICAgY29uc3Qgc2VsZWN0b3IgPSAnLicgKyB0eXBlO1xuICAgIC8vICAgICBsZXQgJGVsID0gdGhpcy4kZGVmYXVsdENvbnRhaW5lcjtcbiAgICAvLyAgICAgaWYgKCRjb250YWluZXIpIHtcbiAgICAvLyAgICAgICAgICRlbCA9ICRjb250YWluZXI7XG4gICAgLy8gICAgIH1cbiAgICAvL1xuICAgIC8vICAgICBpZiAoJGVsLmZpbmQoc2VsZWN0b3IpLmxlbmd0aCA+IDApIHtcbiAgICAvLyAgICAgICAgIHJldHVybiAkZWwuZmluZChzZWxlY3Rvcik7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9O1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gJGVsXG4gICAgICovXG4gICAgLypcbiAgICBzdGFydENvbnRlbnRTcGlubmVyID0gZnVuY3Rpb24gKCRlbCkge1xuICAgICAgICBjb25zdCBodG1sID0gaGFuZGxlYmFyc1RwbChcbiAgICAgICAgICAgIFNQSU5ORVJfQkFTRV9URU1QQUxBVEUsIHtcbiAgICAgICAgICAgICAgICBpbWdTcmM6IENUQy5VUkxTLldBSVRJTkdfSU1BR0UsXG4gICAgICAgICAgICAgICAgJ2NsYXNzJzogY2xhc3Nlcy5vdmVybGF5XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgJGVsLnByZXBlbmQoaHRtbCk7XG4gICAgfTtcblxuICAgIHN0YXJ0SW5saW5lQ29udGVudFNwaW5uZXIgPSBmdW5jdGlvbiAoJGVsKSB7XG4gICAgICAgIGNvbnN0IGh0bWwgPSBoYW5kbGViYXJzVHBsKFxuICAgICAgICAgICAgU1BJTk5FUl9CQVNFX1RFTVBBTEFURSwge1xuICAgICAgICAgICAgICAgIGltZ1NyYzogQ1RDLlVSTFMuV0FJVElOR19JTUFHRSxcbiAgICAgICAgICAgICAgICAnY2xhc3MnOiBjbGFzc2VzLmlubGluZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICRlbC5wcmVwZW5kKGh0bWwpO1xuICAgIH07XG4gICAgKi9cblxuICAgIC8qKlxuICAgICAqIFN0YXJ0cyBnbG9iYWwgZnVsbCBwYWdlIGZpeGVkIHNwaW5uZXJcbiAgICAgKi9cbiAgICAvKlxuICAgIHN0YXJ0Rml4ZWRTcGlubmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBzcGlubmVycyA9IHRoaXMuX2ZpbmRTcGlubmVyKGNsYXNzZXMuZml4ZWQpO1xuICAgICAgICBpZiAoIShDVEMuaXNFZGl0KCkgfHwgQ1RDLmlzRGVzaWduKCkpICYmICFzcGlubmVycykge1xuICAgICAgICAgICAgY29uc3QgaHRtbCA9IGhhbmRsZWJhcnNUcGwoXG4gICAgICAgICAgICAgICAgU1BJTk5FUl9CQVNFX1RFTVBBTEFURSwge1xuICAgICAgICAgICAgICAgICAgICBpbWdTcmM6IENUQy5VUkxTLldBSVRJTkdfSU1BR0UsXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6IGNsYXNzZXMuZml4ZWRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuJGRlZmF1bHRDb250YWluZXIucHJlcGVuZChodG1sKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgKi9cblxuICAgIC8qKlxuICAgICAqIFN0b3BzIHNwaW5uZXJzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gJGNvbnRhaW5lclxuICAgICAqL1xuICAgIC8vIF9zdG9wU3Bpbm5lciA9IGZ1bmN0aW9uICh0eXBlLCAkY29udGFpbmVyKSB7XG4gICAgLy8gICAgIGNvbnN0IHNwaW5uZXJzID0gdGhpcy5fZmluZFNwaW5uZXIodHlwZSwgJGNvbnRhaW5lcik7XG4gICAgLy8gICAgIGlmIChzcGlubmVycykge1xuICAgIC8vICAgICAgICAgc3Bpbm5lcnMucmVtb3ZlKCk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9O1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gJGVsXG4gICAgICovXG4gICAgLy8gc3RvcENvbnRlbnRTcGlubmVyID0gZnVuY3Rpb24gKCRlbCkge1xuICAgIC8vICAgICAkZWwuZmluZCgnLicgKyBjbGFzc2VzLm92ZXJsYXkpLnJlbW92ZSgpO1xuICAgIC8vIH07XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAkZWxcbiAgICAgKi9cbiAgICAvLyBzdG9wSW5saW5lQ29udGVudFNwaW5uZXIgPSBmdW5jdGlvbiAoJGVsKSB7XG4gICAgLy8gICAgICRlbC5maW5kKCcuJyArIGNsYXNzZXMuaW5saW5lKS5yZW1vdmUoKTtcbiAgICAvLyB9O1xuXG4gICAgLyoqXG4gICAgICogU3RvcHMgZ2xvYmFsIGZ1bGwgcGFnZSBmaXhlZCBzcGlubmVyXG4gICAgICovXG4gICAgLy8gc3RvcEZpeGVkU3Bpbm5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgdGhpcy5fc3RvcFNwaW5uZXIoY2xhc3Nlcy5maXhlZCk7XG4gICAgLy8gfTtcbn1cblxubGV0IHNwaW5uZXJJbnN0YW5jZSA9IG51bGw7XG5cbmlmICghc3Bpbm5lckluc3RhbmNlKSB7XG4gICAgc3Bpbm5lckluc3RhbmNlID0gbmV3IFNwaW5uZXIoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3Bpbm5lckluc3RhbmNlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy9zcGlubmVyLmpzIiwiLyogZXNsaW50LWRpc2FibGUgc29ydC12YXJzICovXG4vLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3VzZXInO1xuaW1wb3J0IFB1YlN1YiBmcm9tICdwdWJzdWItanMnOyAvLyBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9wdWJzdWItanNcbmltcG9ydCBjb29raWVTdG9yYWdlIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb29raWUnO1xuLy8gaW1wb3J0IFZhbGlkYXRvciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvZm9ybS12YWxpZGF0b3InO1xuaW1wb3J0IHZpZXdVdGlscyBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdmlldyc7XG5pbXBvcnQge0NPTlNUfSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29uc3RzJztcblxuLy8gd2luZG93LiQgPSAkO1xuXG5leHBvcnQgZnVuY3Rpb24gTG9naW5QYWdlKHNlbGVjdG9yQ3NzKSB7XG4gICAgY29uc3Qge19mb3JtSWQsIF9idXR0b25TdWJtaXRJZCwgX2xvZ2luQm94fSA9IHNlbGVjdG9yQ3NzO1xuICAgIGNvbnN0IHVzZXIgPSBVc2VyLCAvLyBzZXJ2aWNlXG4gICAgICAgICRmb3JtID0gJChfZm9ybUlkKSxcbiAgICAgICAgJGVtYWlsID0gJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cIm1haWxcIl0nKSxcbiAgICAgICAgJHRleHRBcmVhRGVzY3JpcHRpb24gPSAkKCcjZGVzY3JpcHRpb24nKTtcbiAgICAvLyBjb25zdCBvcGVuZWRDbGFzcyA9ICdkLWJsb2NrJztcbiAgICAvLyBjb25zdCBjbG9zZUNsYXNzID0gJ2Qtbm9uZSc7XG5cbiAgICBjb25zdCB1c2VyTG9naW5IZWFkZXIgPSAoX2Zvcm1EYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IGNiRXJyb3IgPSAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAkKF9sb2dpbkJveCkuYXBwZW5kKCc8cD5yZXN1bHQuc3RhdHVzLm1lc3NhZ2U8L3A+Jyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHVzZXIubG9naW4oX2Zvcm1EYXRhLCBjYkVycm9yKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LmRhdGEgJiYgcmVzdWx0LmRhdGEudG9rZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc2F2ZSB0aGUgaXRlbVxuICAgICAgICAgICAgICAgICAgICBjb29raWVTdG9yYWdlLnNldChDT05TVC5jb29raWVTdG9yYWdlLnRva2VuLCByZXN1bHQuZGF0YS50b2tlbik7XG4gICAgICAgICAgICAgICAgICAgICQoJy5uYXYtbGluay5qc19sb2dPdXQnKS5wYXJlbnQoKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXF1ZXN0IHN1Y2NlZWRlZCB3aXRoIEpTT04gcmVzcG9uc2UnLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKCR0ZXh0QXJlYURlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5zdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMubWVzc2FnZSB8fCAnTG9naW4gc3VjY3Nlc3MnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSh0aGlzLiR0ZXh0QXJlYURlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgYDxwPnN0YXR1czogJHtyZXN1bHQuc3RhdHVzLnN0YXRlfTwvcD48cD4gbWVzc2FnZTogJHtyZXN1bHQuc3RhdHVzLm1lc3NhZ2V9PC9wPmApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UoJHRleHRBcmVhRGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLnN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5tZXNzYWdlIHx8ICdMb2dpbiBlcnJvcicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBzdWJtaXRGb3JtID0gZnVuY3Rpb24oZm9ybURhdGFPYmopIHtcbiAgICAgICAgY29uc3QgZW1haWwgPSAkZW1haWwudmFsKCksXG4gICAgICAgICAgICBwYXNzd29yZCA9ICRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJwYXNzXCJdJykudmFsKCksXG4gICAgICAgICAgICBfZm9ybURhdGEgPSBmb3JtRGF0YU9iaiB8fCB7ZW1haWwsIHBhc3N3b3JkfTtcblxuICAgICAgICBpZiAoc2VsZWN0b3JDc3MuaXNMb2dpbkluc3RhZ3JhbSkge1xuICAgICAgICAgICAgLy8gdG9kbzogZGVsZXRlIG1lXG4gICAgICAgICAgICAvLyBhZGRJbnN0YWdyYW1BY2NvdW50KHt1c2VybmFtZTogJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cInVzZXJuYW1lXCJdJykudmFsKCksIHBhc3N3b3JkfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkZW1haWwudmFsKCRlbWFpbC52YWwoKS50b0xvY2FsZUxvd2VyQ2FzZSgpKTtcbiAgICAgICAgICAgIHVzZXJMb2dpbkhlYWRlcihfZm9ybURhdGEpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIFB1YlN1Yi5wdWJsaXNoKENPTlNULmV2ZW50cy5VU0VSX0xPR0dFRCwgJ2xvZ2luJyk7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2luc3RhZ3JhbS1pbnRlZ3JhdGlvbi9pbnN0YWdyYW0tYWNjb3VudHMuaHRtbCc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBsb2dPdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29va2llU3RvcmFnZS5yZW1vdmUoQ09OU1QuY29va2llU3RvcmFnZS50b2tlbik7XG4gICAgICAgIFB1YlN1Yi5wdWJsaXNoKENPTlNULmV2ZW50cy5VU0VSX0xPR09VVCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGJpbmRFdmVudHMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gY29uc3QgJHNob3dMb2dpbkJveEJ0bklkID0gJChfc2hvd0xvZ2luQm94QnRuSWQpO1xuICAgICAgICBjb25zdCAkbG9naW5Cb3ggPSAkKF9sb2dpbkJveCk7XG4gICAgICAgIGNvbnN0IG9wZW5lZENsYXNzID0gJ2QtYmxvY2snO1xuICAgICAgICBjb25zdCBjbG9zZUNsYXNzID0gJ2Qtbm9uZSc7XG5cbiAgICAgICAgLy8gJHNob3dMb2dpbkJveEJ0bklkLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy8gICAgIGlmICghc2VsZWN0b3JDc3MuaXNMb2dpbkluc3RhZ3JhbSkge1xuICAgICAgICAvLyAgICAgICAgICRsb2dpbkJveC5jc3Moeyd0b3AnOiAwLCAncmlnaHQnOiAwfSlcbiAgICAgICAgLy8gICAgICAgICAgICAgLmFkZENsYXNzKCdiZy1saWdodCBib3JkZXIgbXQtNSBteC1hdXRvIHBvc2l0aW9uLWFic29sdXRlJyk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICAkbG9naW5Cb3guYWRkQ2xhc3Mob3BlbmVkQ2xhc3MpLnJlbW92ZUNsYXNzKGNsb3NlQ2xhc3MpO1xuICAgICAgICAvLyB9KTtcblxuICAgICAgICBjb25zdCAkYnV0dG9uU3VibWl0ID0gJChfYnV0dG9uU3VibWl0SWQpLFxuICAgICAgICAgICAgY3NzVmFsaWRhdGlvbkNsYXNzID0gJ2Zvcm0tdmFsaWRhdGlvbic7XG5cbiAgICAgICAgJGJ1dHRvblN1Ym1pdC5vbignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgZm9ybSA9ICRmb3JtLmdldCgwKTtcbiAgICAgICAgICAgIC8vIGNvbnN0IHZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoJGZvcm0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2codmlld1V0aWxzLCB2aWV3VXRpbHMuaXNFbWFpbCgkZW1haWwudmFsKCkpKTtcblxuICAgICAgICAgICAgaWYgKGZvcm0uY2hlY2tWYWxpZGl0eSgpICYmIHZpZXdVdGlscy5pc0VtYWlsKCRlbWFpbC52YWwoKSkpIHtcbiAgICAgICAgICAgICAgICBzdWJtaXRGb3JtKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEhpZ2hsaWdodCBlcnJvcnNcbiAgICAgICAgICAgICAgICBpZiAoZm9ybS5yZXBvcnRWYWxpZGl0eSkge1xuICAgICAgICAgICAgICAgICAgICBmb3JtLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICRmb3JtLmFkZENsYXNzKGNzc1ZhbGlkYXRpb25DbGFzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5uYXYtbGluay5qc19sb2dPdXQnKS5vbignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbG9nT3V0KCk7XG4gICAgICAgICAgICAkKGUudGFyZ2V0KS5wYXJlbnQoKS5oaWRlKCk7XG4gICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKCR0ZXh0QXJlYURlc2NyaXB0aW9uLCAnTG9nZ2VkIG91dCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICBQdWJTdWIuc3Vic2NyaWJlKENPTlNULmV2ZW50cy5VU0VSX0xPR09VVCwgKG1zZykgPT4ge1xuICAgICAgICAgICAgJChDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJOYXZMb2dpbkJ0bikuYWRkQ2xhc3Mob3BlbmVkQ2xhc3MpLnJlbW92ZUNsYXNzKGNsb3NlQ2xhc3MpOyAvLyAuc2hvdygpO1xuICAgICAgICAgICAgJChDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJSZWdCdG4pLmFkZENsYXNzKG9wZW5lZENsYXNzKS5yZW1vdmVDbGFzcyhjbG9zZUNsYXNzKTtcbiAgICAgICAgICAgICQoJy5uYXYtbGluay5qc19sb2dPdXQnKS5hZGRDbGFzcyhjbG9zZUNsYXNzKS5yZW1vdmVDbGFzcyhvcGVuZWRDbGFzcyk7IC8vIC5oaWRlKCk7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RvckxvZ2luU3RhdGUgPSAnLmpzX21lc3NhZ2VfbG9nZ2VkLS10ZXh0JztcbiAgICAgICAgICAgICQoc2VsZWN0b3JMb2dpblN0YXRlKS50ZXh0KCfQktGLINCy0YvRiNC70Lgg0LjQtyDQsNC60LrQsNGD0L3RgtCwJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNMb2dpbkJ0bkNsaWNrID0gJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJ25hdi5uYXZiYXInKS5maW5kKCRsb2dpbkJveCkubGVuZ3RoO1xuICAgICAgICAgICAgY29uc3QgaXNBZGRJbnN0YWdyYW1CdG5DbGlja2VkID0gJChldmVudC50YXJnZXQpLmF0dHIoJ2lkJykgPT09IENPTlNULnVpU2VsZWN0b3JzLmluc3RhZ3JhbS5hZGRBY2NvdW50QnRuSWQ7XG5cbiAgICAgICAgICAgIGlmICghaXNMb2dpbkJ0bkNsaWNrICYmICRsb2dpbkJveC5oYXNDbGFzcyhvcGVuZWRDbGFzcykgJiYgIWlzQWRkSW5zdGFncmFtQnRuQ2xpY2tlZCkge1xuICAgICAgICAgICAgICAgICRsb2dpbkJveC5hZGRDbGFzcyhjbG9zZUNsYXNzKS5yZW1vdmVDbGFzcyhvcGVuZWRDbGFzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBpZiAoJCgnLmF1dGgubG9naW4nKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGJpbmRFdmVudHMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGluaXRcbiAgICB9O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL19hdXRoL2xvZ2luLXBhZ2UuanMiLCJpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgYnJ1dHVzaW4pd2luZG93LmJydXR1c2luPW5ldyBPYmplY3Q7ZWxzZSBpZihcIm9iamVjdFwiIT10eXBlb2YgYnJ1dHVzaW4pdGhyb3dcImJydXR1c2luIGdsb2JhbCB2YXJpYWJsZSBhbHJlYWR5IGV4aXN0c1wiOyFmdW5jdGlvbigpe1N0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aHx8KFN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aD1mdW5jdGlvbihlLHQpe3JldHVybiB0PXR8fDAsdGhpcy5pbmRleE9mKGUsdCk9PT10fSksU3RyaW5nLnByb3RvdHlwZS5lbmRzV2l0aHx8KFN0cmluZy5wcm90b3R5cGUuZW5kc1dpdGg9ZnVuY3Rpb24oZSx0KXt2YXIgcj10aGlzLnRvU3RyaW5nKCk7KHZvaWQgMD09PXR8fHQ+ci5sZW5ndGgpJiYodD1yLmxlbmd0aCksdC09ZS5sZW5ndGg7dmFyIG49ci5pbmRleE9mKGUsdCk7cmV0dXJuLTEhPT1uJiZuPT09dH0pLFN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXN8fChTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzPWZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7cmV0dXJuLTEhPT1TdHJpbmcucHJvdG90eXBlLmluZGV4T2YuYXBwbHkodGhpcyxhcmd1bWVudHMpfSksU3RyaW5nLnByb3RvdHlwZS5mb3JtYXR8fChTdHJpbmcucHJvdG90eXBlLmZvcm1hdD1mdW5jdGlvbigpe2Zvcih2YXIgZT10aGlzLHQ9MDt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgcj1uZXcgUmVnRXhwKFwiXFxcXHtcIit0K1wiXFxcXH1cIixcImdpXCIpO2U9ZS5yZXBsYWNlKHIsYXJndW1lbnRzW3RdKX1yZXR1cm4gZX0pO3ZhciBCcnV0dXNpbkZvcm1zPW5ldyBPYmplY3Q7QnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcz17dmFsaWRhdGlvbkVycm9yOlwiVmFsaWRhdGlvbiBlcnJvclwiLHJlcXVpcmVkOlwiVGhpcyBmaWVsZCBpcyAqKnJlcXVpcmVkKipcIixpbnZhbGlkVmFsdWU6XCJJbnZhbGlkIGZpZWxkIHZhbHVlXCIsYWRkcHJvcE5hbWVFeGlzdGVudDpcIlRoaXMgcHJvcGVydHkgaXMgYWxyZWFkeSBwcmVzZW50IGluIHRoZSBvYmplY3RcIixhZGRwcm9wTmFtZVJlcXVpcmVkOlwiQSBuYW1lIGlzIHJlcXVpcmVkXCIsbWluSXRlbXM6XCJBdCBsZWFzdCBgezB9YCBpdGVtcyBhcmUgcmVxdWlyZWRcIixtYXhJdGVtczpcIkF0IG1vc3QgYHswfWAgaXRlbXMgYXJlIGFsbG93ZWRcIixwYXR0ZXJuOlwiVmFsdWUgZG9lcyBub3QgbWF0Y2ggcGF0dGVybjogYHswfWBcIixtaW5MZW5ndGg6XCJWYWx1ZSBtdXN0IGJlICoqYXQgbGVhc3QqKiBgezB9YCBjaGFyYWN0ZXJzIGxvbmdcIixtYXhMZW5ndGg6XCJWYWx1ZSBtdXN0IGJlICoqYXQgbW9zdCoqIGB7MH1gIGNoYXJhY3RlcnMgbG9uZ1wiLG11bHRpcGxlT2Y6XCJWYWx1ZSBtdXN0IGJlICoqbXVsdGlwbGUgb2YqKiBgezB9YFwiLG1pbmltdW06XCJWYWx1ZSBtdXN0IGJlICoqZ3JlYXRlciBvciBlcXVhbCB0aGFuKiogYHswfWBcIixleGNsdXNpdmVNaW5pbXVtOlwiVmFsdWUgbXVzdCBiZSAqKmdyZWF0ZXIgdGhhbioqIGB7MH1gXCIsbWF4aW11bTpcIlZhbHVlIG11c3QgYmUgKipsb3dlciBvciBlcXVhbCB0aGFuKiogYHswfWBcIixleGNsdXNpdmVNYXhpbXVtOlwiVmFsdWUgbXVzdCBiZSAqKmxvd2VyIHRoYW4qKiBgezB9YFwiLG1pblByb3BlcnRpZXM6XCJBdCBsZWFzdCBgezB9YCBwcm9wZXJ0aWVzIGFyZSByZXF1aXJlZFwiLG1heFByb3BlcnRpZXM6XCJBdCBtb3N0IGB7MH1gIHByb3BlcnRpZXMgYXJlIGFsbG93ZWRcIix1bmlxdWVJdGVtczpcIkFycmF5IGl0ZW1zIG11c3QgYmUgdW5pcXVlXCIsYWRkSXRlbTpcIkFkZCBpdGVtXCIsXCJ0cnVlXCI6XCJUcnVlXCIsXCJmYWxzZVwiOlwiRmFsc2VcIn0sQnJ1dHVzaW5Gb3Jtcy5kZWNvcmF0b3JzPW5ldyBBcnJheSxCcnV0dXNpbkZvcm1zLmFkZERlY29yYXRvcj1mdW5jdGlvbihlKXtCcnV0dXNpbkZvcm1zLmRlY29yYXRvcnNbQnJ1dHVzaW5Gb3Jtcy5kZWNvcmF0b3JzLmxlbmd0aF09ZX0sQnJ1dHVzaW5Gb3Jtcy5vblJlc29sdXRpb25TdGFydGVkPWZ1bmN0aW9uKGUpe30sQnJ1dHVzaW5Gb3Jtcy5vblJlc29sdXRpb25GaW5pc2hlZD1mdW5jdGlvbihlKXt9LEJydXR1c2luRm9ybXMub25WYWxpZGF0aW9uRXJyb3I9ZnVuY3Rpb24oZSx0KXtlLmZvY3VzKCksZS5jbGFzc05hbWUuaW5jbHVkZXMoXCIgZXJyb3JcIil8fChlLmNsYXNzTmFtZSs9XCIgZXJyb3JcIiksYWxlcnQodCl9LEJydXR1c2luRm9ybXMub25WYWxpZGF0aW9uU3VjY2Vzcz1mdW5jdGlvbihlKXtlLmNsYXNzTmFtZT1lLmNsYXNzTmFtZS5yZXBsYWNlKFwiIGVycm9yXCIsXCJcIil9LEJydXR1c2luRm9ybXMucG9zdFJlbmRlcj1udWxsLEJydXR1c2luRm9ybXMuaW5zdGFuY2VzPW5ldyBBcnJheSxCcnV0dXNpbkZvcm1zLmNyZWF0ZT1mdW5jdGlvbihzY2hlbWEpe2Z1bmN0aW9uIHZhbGlkYXRlRGVwZW5jeU1hcElzQWN5Y2xpYygpe2Z1bmN0aW9uIGUodCxyLG4pe2lmKHIuaGFzT3duUHJvcGVydHkobikpcmV0dXJuIHZvaWQoZXJyb3I9XCJTY2hlbWEgZGVwZW5kZW5jeSBncmFwaCBoYXMgY3ljbGVzXCIpO2lmKHJbbl09bnVsbCwhdC5oYXNPd25Qcm9wZXJ0eShuKSl7dFtuXT1udWxsO3ZhciBhPWRlcGVuZGVuY3lNYXBbbl07aWYoYSlmb3IodmFyIGk9MDtpPGEubGVuZ3RoO2krKyllKHQscixhW2ldKTtkZWxldGUgcltuXX19dmFyIHQ9bmV3IE9iamVjdDtmb3IodmFyIHIgaW4gZGVwZW5kZW5jeU1hcCl0Lmhhc093blByb3BlcnR5KHIpfHxlKHQsbmV3IE9iamVjdCxyKX1mdW5jdGlvbiBhcHBlbmRDaGlsZChlLHQscil7ZS5hcHBlbmRDaGlsZCh0KTtmb3IodmFyIG49MDtuPEJydXR1c2luRm9ybXMuZGVjb3JhdG9ycy5sZW5ndGg7bisrKUJydXR1c2luRm9ybXMuZGVjb3JhdG9yc1tuXSh0LHIpfWZ1bmN0aW9uIGNyZWF0ZVBzZXVkb1NjaGVtYShlKXt2YXIgdD1uZXcgT2JqZWN0O2Zvcih2YXIgciBpbiBlKVwiaXRlbXNcIiE9PXImJlwicHJvcGVydGllc1wiIT09ciYmXCJhZGRpdGlvbmFsUHJvcGVydGllc1wiIT09ciYmKFwicGF0dGVyblwiPT09cj90W3JdPW5ldyBSZWdFeHAoZVtyXSk6dFtyXT1lW3JdKTtyZXR1cm4gdH1mdW5jdGlvbiBnZXREZWZpbml0aW9uKGUpe3ZhciB0PWUuc3BsaXQoXCIvXCIpLHI9cm9vdDtmb3IodmFyIG4gaW4gdClcIjBcIiE9PW4mJihyPXJbdFtuXV0pO3JldHVybiByfWZ1bmN0aW9uIGNvbnRhaW5zU3RyKGUsdCl7Zm9yKHZhciByPTA7cjxlLmxlbmd0aDtyKyspaWYoZVtyXT09dClyZXR1cm4hMDtyZXR1cm4hMX1mdW5jdGlvbiByZW5hbWVSZXF1aXJlZFByb3BldGllcyhlKXtpZihlKWlmKGUuaGFzT3duUHJvcGVydHkoXCJvbmVPZlwiKSlmb3IodmFyIHQgaW4gZS5vbmVPZilyZW5hbWVSZXF1aXJlZFByb3BldGllcyhlLm9uZU9mW3RdKTtlbHNlIGlmKGUuaGFzT3duUHJvcGVydHkoXCIkcmVmXCIpKXt2YXIgcj1nZXREZWZpbml0aW9uKGUuJHJlZik7cmVuYW1lUmVxdWlyZWRQcm9wZXRpZXMocil9ZWxzZSBpZihcIm9iamVjdFwiPT09ZS50eXBlKXtpZihlLnByb3BlcnRpZXMpe2UuaGFzT3duUHJvcGVydHkoXCJyZXF1aXJlZFwiKSYmQXJyYXkuaXNBcnJheShlLnJlcXVpcmVkKSYmKGUucmVxdWlyZWRQcm9wZXJ0aWVzPWUucmVxdWlyZWQsZGVsZXRlIGUucmVxdWlyZWQpO2Zvcih2YXIgbiBpbiBlLnByb3BlcnRpZXMpcmVuYW1lUmVxdWlyZWRQcm9wZXRpZXMoZS5wcm9wZXJ0aWVzW25dKX1pZihlLnBhdHRlcm5Qcm9wZXJ0aWVzKWZvcih2YXIgYSBpbiBlLnBhdHRlcm5Qcm9wZXJ0aWVzKXt2YXIgaT1lLnBhdHRlcm5Qcm9wZXJ0aWVzW2FdOyhpLmhhc093blByb3BlcnR5KFwidHlwZVwiKXx8aS5oYXNPd25Qcm9wZXJ0eShcIiRyZWZcIil8fGkuaGFzT3duUHJvcGVydHkoXCJvbmVPZlwiKSkmJnJlbmFtZVJlcXVpcmVkUHJvcGV0aWVzKGUucGF0dGVyblByb3BlcnRpZXNbYV0pfWUuYWRkaXRpb25hbFByb3BlcnRpZXMmJihlLmFkZGl0aW9uYWxQcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KFwidHlwZVwiKXx8ZS5hZGRpdGlvbmFsUHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShcIm9uZU9mXCIpKSYmcmVuYW1lUmVxdWlyZWRQcm9wZXRpZXMoZS5hZGRpdGlvbmFsUHJvcGVydGllcyl9ZWxzZVwiYXJyYXlcIj09PWUudHlwZSYmcmVuYW1lUmVxdWlyZWRQcm9wZXRpZXMoZS5pdGVtcyl9ZnVuY3Rpb24gcG9wdWxhdGVTY2hlbWFNYXAoZSx0KXt2YXIgcj1jcmVhdGVQc2V1ZG9TY2hlbWEodCk7aWYoci4kaWQ9ZSxzY2hlbWFNYXBbZV09cix0KXtpZih0Lmhhc093blByb3BlcnR5KFwib25lT2ZcIikpe3Iub25lT2Y9bmV3IEFycmF5LHIudHlwZT1cIm9uZU9mXCI7Zm9yKHZhciBuIGluIHQub25lT2Ype3ZhciBhPWUrXCIuXCIrbjtyLm9uZU9mW25dPWEscG9wdWxhdGVTY2hlbWFNYXAoYSx0Lm9uZU9mW25dKX19ZWxzZSBpZih0Lmhhc093blByb3BlcnR5KFwiJHJlZlwiKSl7dmFyIGk9Z2V0RGVmaW5pdGlvbih0LiRyZWYpO2lmKGkpe2lmKHQuaGFzT3duUHJvcGVydHkoXCJ0aXRsZVwiKXx8dC5oYXNPd25Qcm9wZXJ0eShcImRlc2NyaXB0aW9uXCIpKXt2YXIgbz17fTtmb3IodmFyIHMgaW4gaSlvW3NdPWlbc107dC5oYXNPd25Qcm9wZXJ0eShcInRpdGxlXCIpJiYoby50aXRsZT10LnRpdGxlKSx0Lmhhc093blByb3BlcnR5KFwiZGVzY3JpcHRpb25cIikmJihvLmRlc2NyaXB0aW9uPXQuZGVzY3JpcHRpb24pLGk9b31wb3B1bGF0ZVNjaGVtYU1hcChlLGkpfX1lbHNlIGlmKFwib2JqZWN0XCI9PT10LnR5cGUpe2lmKHQucHJvcGVydGllcyl7ci5wcm9wZXJ0aWVzPW5ldyBPYmplY3Q7Zm9yKHZhciBzIGluIHQucHJvcGVydGllcyl7dmFyIGE9ZStcIi5cIitzO3IucHJvcGVydGllc1tzXT1hO3ZhciB1PXQucHJvcGVydGllc1tzXTt0LnJlcXVpcmVkUHJvcGVydGllcyYmKGNvbnRhaW5zU3RyKHQucmVxdWlyZWRQcm9wZXJ0aWVzLHMpP3UucmVxdWlyZWQ9ITA6dS5yZXF1aXJlZD0hMSkscG9wdWxhdGVTY2hlbWFNYXAoYSx1KX19aWYodC5wYXR0ZXJuUHJvcGVydGllcyl7ci5wYXR0ZXJuUHJvcGVydGllcz1uZXcgT2JqZWN0O2Zvcih2YXIgbCBpbiB0LnBhdHRlcm5Qcm9wZXJ0aWVzKXt2YXIgZD1lK1wiW1wiK2wrXCJdXCI7ci5wYXR0ZXJuUHJvcGVydGllc1tsXT1kO3ZhciBwPXQucGF0dGVyblByb3BlcnRpZXNbbF07cC5oYXNPd25Qcm9wZXJ0eShcInR5cGVcIil8fHAuaGFzT3duUHJvcGVydHkoXCIkcmVmXCIpfHxwLmhhc093blByb3BlcnR5KFwib25lT2ZcIik/cG9wdWxhdGVTY2hlbWFNYXAoZCx0LnBhdHRlcm5Qcm9wZXJ0aWVzW2xdKTpwb3B1bGF0ZVNjaGVtYU1hcChkLFNDSEVNQV9BTlkpfX1pZih0LmFkZGl0aW9uYWxQcm9wZXJ0aWVzKXt2YXIgYT1lK1wiWypdXCI7ci5hZGRpdGlvbmFsUHJvcGVydGllcz1hLHQuYWRkaXRpb25hbFByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoXCJ0eXBlXCIpfHx0LmFkZGl0aW9uYWxQcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KFwib25lT2ZcIik/cG9wdWxhdGVTY2hlbWFNYXAoYSx0LmFkZGl0aW9uYWxQcm9wZXJ0aWVzKTpwb3B1bGF0ZVNjaGVtYU1hcChhLFNDSEVNQV9BTlkpfX1lbHNlXCJhcnJheVwiPT09dC50eXBlJiYoci5pdGVtcz1lK1wiWyNdXCIscG9wdWxhdGVTY2hlbWFNYXAoci5pdGVtcyx0Lml0ZW1zKSk7aWYodC5oYXNPd25Qcm9wZXJ0eShcImRlcGVuZHNPblwiKSl7bnVsbD09PXQuZGVwZW5kc09uJiYodC5kZXBlbmRzT249W1wiJFwiXSk7Zm9yKHZhciBjPW5ldyBBcnJheSxuPTA7bjx0LmRlcGVuZHNPbi5sZW5ndGg7bisrKXQuZGVwZW5kc09uW25dP3QuZGVwZW5kc09uW25dLnN0YXJ0c1dpdGgoXCIkXCIpP2Nbbl09dC5kZXBlbmRzT25bbl06ZS5lbmRzV2l0aChcIl1cIik/Y1tuXT1lK1wiLlwiK3QuZGVwZW5kc09uW25dOmNbbl09ZS5zdWJzdHJpbmcoMCxlLmxhc3RJbmRleE9mKFwiLlwiKSkrXCIuXCIrdC5kZXBlbmRzT25bbl06Y1tuXT1cIiRcIjtzY2hlbWFNYXBbZV0uZGVwZW5kc09uPWM7Zm9yKHZhciBuPTA7bjxjLmxlbmd0aDtuKyspe3ZhciBtPWRlcGVuZGVuY3lNYXBbY1tuXV07bXx8KG09bmV3IEFycmF5LGRlcGVuZGVuY3lNYXBbY1tuXV09bSksbVttLmxlbmd0aF09ZX19fX1mdW5jdGlvbiByZW5kZXJUaXRsZShlLHQscil7aWYoZSYmdCl7dmFyIG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1wiYW55XCIhPT1yLnR5cGUmJlwib2JqZWN0XCIhPT1yLnR5cGUmJlwiYXJyYXlcIiE9PXIudHlwZSYmKG4uaHRtbEZvcj1nZXRJbnB1dElkKCkpO3ZhciBhPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHQrXCI6XCIpO2lmKGFwcGVuZENoaWxkKG4sYSxyKSxyLmRlc2NyaXB0aW9uJiYobi50aXRsZT1yLmRlc2NyaXB0aW9uKSxyLnJlcXVpcmVkKXt2YXIgaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3VwXCIpO2FwcGVuZENoaWxkKGksZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCIqXCIpLHIpLGFwcGVuZENoaWxkKG4saSxyKSxuLmNsYXNzTmFtZT1cInJlcXVpcmVkXCJ9YXBwZW5kQ2hpbGQoZSxuLHIpfX1mdW5jdGlvbiBnZXRJbnB1dElkKCl7cmV0dXJuIGZvcm1JZCtcIl9cIitpbnB1dENvdW50ZXJ9ZnVuY3Rpb24gdmFsaWRhdGUoZSl7dmFyIHQ9ITA7aWYoZS5oYXNPd25Qcm9wZXJ0eShcImdldFZhbGlkYXRpb25FcnJvclwiKSl7dmFyIHI9ZS5nZXRWYWxpZGF0aW9uRXJyb3IoKTtyPyhCcnV0dXNpbkZvcm1zLm9uVmFsaWRhdGlvbkVycm9yKGUsciksdD0hMSk6QnJ1dHVzaW5Gb3Jtcy5vblZhbGlkYXRpb25TdWNjZXNzKGUpfWlmKGUuY2hpbGROb2Rlcylmb3IodmFyIG49MDtuPGUuY2hpbGROb2Rlcy5sZW5ndGg7bisrKXZhbGlkYXRlKGUuY2hpbGROb2Rlc1tuXSl8fCh0PSExKTtyZXR1cm4gdH1mdW5jdGlvbiBjbGVhcihlKXtpZihlKWZvcig7ZS5maXJzdENoaWxkOyllLnJlbW92ZUNoaWxkKGUuZmlyc3RDaGlsZCl9ZnVuY3Rpb24gcmVuZGVyKGUsdCxyLG4sYSxpKXt2YXIgbz1nZXRTY2hlbWFJZChyKSxzPWdldFNjaGVtYShvKTtyZW5kZXJJbmZvTWFwW29dPW5ldyBPYmplY3QscmVuZGVySW5mb01hcFtvXS50aXRsZUNvbnRhaW5lcj1lLHJlbmRlckluZm9NYXBbb10uY29udGFpbmVyPXQscmVuZGVySW5mb01hcFtvXS5wYXJlbnRPYmplY3Q9bixyZW5kZXJJbmZvTWFwW29dLnByb3BlcnR5UHJvdmlkZXI9YSxyZW5kZXJJbmZvTWFwW29dLnZhbHVlPWksY2xlYXIoZSksY2xlYXIodCk7dmFyIHU9cmVuZGVyZXJzW3MudHlwZV07aWYodSYmIXMuZGVwZW5kc09uKXMudGl0bGU/cmVuZGVyVGl0bGUoZSxzLnRpdGxlLHMpOmEmJnJlbmRlclRpdGxlKGUsYS5nZXRWYWx1ZSgpLHMpLGl8fChpPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBpbml0aWFsVmFsdWUmJm51bGwhPT1pbml0aWFsVmFsdWU/Z2V0SW5pdGlhbFZhbHVlKHIpOnNbXCJkZWZhdWx0XCJdKSx1KHQscixuLGEsaSk7ZWxzZSBpZihzLiRyZWYmJm9iai5zY2hlbWFSZXNvbHZlcil7dmFyIGw9ZnVuY3Rpb24oZSl7aWYoZSYmZS5oYXNPd25Qcm9wZXJ0eShyKSYmSlNPTi5zdHJpbmdpZnkoc2NoZW1hTWFwW3JdKSE9PUpTT04uc3RyaW5naWZ5KGVbcl0pKXtjbGVhblNjaGVtYU1hcChyKSxjbGVhbkRhdGEocikscG9wdWxhdGVTY2hlbWFNYXAocixlW3JdKTt2YXIgdD1yZW5kZXJJbmZvTWFwW3JdO3QmJnJlbmRlcih0LnRpdGxlQ29udGFpbmVyLHQuY29udGFpbmVyLHIsdC5wYXJlbnRPYmplY3QsdC5wcm9wZXJ0eVByb3ZpZGVyLHQudmFsdWUpfUJydXR1c2luRm9ybXMub25SZXNvbHV0aW9uRmluaXNoZWQobil9O0JydXR1c2luRm9ybXMub25SZXNvbHV0aW9uU3RhcnRlZChuKSxvYmouc2NoZW1hUmVzb2x2ZXIoW3JdLG9iai5nZXREYXRhKCksbCl9fWZ1bmN0aW9uIGNyZWF0ZVByb3BlcnR5UHJvdmlkZXIoZSx0KXt2YXIgcj1uZXcgT2JqZWN0O3JldHVybiByLmdldFZhbHVlPWUsci5vbmNoYW5nZT10LHJ9ZnVuY3Rpb24gZ2V0SW5pdGlhbFZhbHVlKGlkKXt2YXIgcmV0O3RyeXtldmFsKFwicmV0ID0gaW5pdGlhbFZhbHVlXCIraWQuc3Vic3RyaW5nKDEpKX1jYXRjaChlKXtyZXQ9bnVsbH1yZXR1cm4gcmV0fWZ1bmN0aW9uIGdldFZhbHVlKHNjaGVtYSxpbnB1dCl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgaW5wdXQuZ2V0VmFsdWUpcmV0dXJuIGlucHV0LmdldFZhbHVlKCk7dmFyIHZhbHVlO3JldHVybiB2YWx1ZT1cInNlbGVjdFwiPT09aW5wdXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpP2lucHV0Lm9wdGlvbnNbaW5wdXQuc2VsZWN0ZWRJbmRleF0udmFsdWU6aW5wdXQudmFsdWUsXCJcIj09PXZhbHVlP251bGw6KFwiaW50ZWdlclwiPT09c2NoZW1hLnR5cGU/KHZhbHVlPXBhcnNlSW50KHZhbHVlKSxpc0Zpbml0ZSh2YWx1ZSl8fCh2YWx1ZT1udWxsKSk6XCJudW1iZXJcIj09PXNjaGVtYS50eXBlPyh2YWx1ZT1wYXJzZUZsb2F0KHZhbHVlKSxpc0Zpbml0ZSh2YWx1ZSl8fCh2YWx1ZT1udWxsKSk6XCJib29sZWFuXCI9PT1zY2hlbWEudHlwZT9cImlucHV0XCI9PT1pbnB1dC50YWdOYW1lLnRvTG93ZXJDYXNlKCk/KHZhbHVlPWlucHV0LmNoZWNrZWQsdmFsdWV8fCh2YWx1ZT0hMSkpOlwic2VsZWN0XCI9PT1pbnB1dC50YWdOYW1lLnRvTG93ZXJDYXNlKCkmJih2YWx1ZT1cInRydWVcIj09PWlucHV0LnZhbHVlPyEwOlwiZmFsc2VcIj09PWlucHV0LnZhbHVlPyExOm51bGwpOlwiYW55XCI9PT1zY2hlbWEudHlwZSYmdmFsdWUmJmV2YWwoXCJ2YWx1ZT1cIit2YWx1ZSksdmFsdWUpfWZ1bmN0aW9uIGdldFNjaGVtYUlkKGUpe3JldHVybiBlLnJlcGxhY2UoL1xcW1wiW15cIl0qXCJcXF0vZyxcIlsqXVwiKS5yZXBsYWNlKC9cXFtcXGQqXFxdL2csXCJbI11cIil9ZnVuY3Rpb24gZ2V0UGFyZW50U2NoZW1hSWQoZSl7cmV0dXJuIGUuc3Vic3RyaW5nKDAsZS5sYXN0SW5kZXhPZihcIi5cIikpfWZ1bmN0aW9uIGdldFNjaGVtYShlKXtyZXR1cm4gc2NoZW1hTWFwW2VdfWZ1bmN0aW9uIGNsZWFuU2NoZW1hTWFwKGUpe2Zvcih2YXIgdCBpbiBzY2hlbWFNYXApZS5zdGFydHNXaXRoKHQpJiZkZWxldGUgc2NoZW1hTWFwW3RdfWZ1bmN0aW9uIGNsZWFuRGF0YShlKXt2YXIgdD1uZXcgRXhwcmVzc2lvbihlKTt0LnZpc2l0KGRhdGEsZnVuY3Rpb24oZSx0LHIpe2RlbGV0ZSB0W3JdfSl9ZnVuY3Rpb24gb25EZXBlbmRlbmN5Q2hhbmdlZChlLHQpe3ZhciByPWRlcGVuZGVuY3lNYXBbZV07aWYociYmb2JqLnNjaGVtYVJlc29sdmVyKXt2YXIgbj1mdW5jdGlvbihlKXtpZihlKWZvcih2YXIgciBpbiBlKWlmKEpTT04uc3RyaW5naWZ5KHNjaGVtYU1hcFtyXSkhPT1KU09OLnN0cmluZ2lmeShlW3JdKSl7Y2xlYW5TY2hlbWFNYXAociksY2xlYW5EYXRhKHIpLHBvcHVsYXRlU2NoZW1hTWFwKHIsZVtyXSk7dmFyIG49cmVuZGVySW5mb01hcFtyXTtuJiZyZW5kZXIobi50aXRsZUNvbnRhaW5lcixuLmNvbnRhaW5lcixyLG4ucGFyZW50T2JqZWN0LG4ucHJvcGVydHlQcm92aWRlcixuLnZhbHVlKX1CcnV0dXNpbkZvcm1zLm9uUmVzb2x1dGlvbkZpbmlzaGVkKHQpfTtCcnV0dXNpbkZvcm1zLm9uUmVzb2x1dGlvblN0YXJ0ZWQodCksb2JqLnNjaGVtYVJlc29sdmVyKHIsb2JqLmdldERhdGEoKSxuKX19ZnVuY3Rpb24gRXhwcmVzc2lvbihlKXtmdW5jdGlvbiB0KGUpe2lmKG51bGw9PT1lKXJldHVybiBudWxsO2Zvcih2YXIgdD1uZXcgQXJyYXkscj1udWxsLG49MCxhPTA7YTxlLmxlbmd0aDthKyspJ1wiJz09PWUuY2hhckF0KGEpP251bGw9PT1yP3I9J1wiJzonXCInPT09ciYmKHI9bnVsbCx0W3QubGVuZ3RoXT1lLnN1YnN0cmluZyhuLGErMSkudHJpbSgpLG49YSsxKTpcIidcIj09PWUuY2hhckF0KGEpP251bGw9PT1yP3I9XCInXCI6XCInXCI9PT1yJiYocj1udWxsLHRbdC5sZW5ndGhdPWUuc3Vic3RyaW5nKG4sYSsxKS50cmltKCksbj1hKzEpOlwiW1wiPT09ZS5jaGFyQXQoYSk/bnVsbD09PXImJihuIT09YSYmKHRbdC5sZW5ndGhdPWUuc3Vic3RyaW5nKG4sYSkudHJpbSgpKSx0W3QubGVuZ3RoXT1cIltcIixuPWErMSk6XCJdXCI9PT1lLmNoYXJBdChhKT9udWxsPT09ciYmKG4hPT1hJiYodFt0Lmxlbmd0aF09ZS5zdWJzdHJpbmcobixhKS50cmltKCkpLHRbdC5sZW5ndGhdPVwiXVwiLG49YSsxKTpcIi5cIj09PWUuY2hhckF0KGEpP251bGw9PT1yJiYobiE9PWEmJih0W3QubGVuZ3RoXT1lLnN1YnN0cmluZyhuLGEpLnRyaW0oKSksbj1hKzEpOmE9PT1lLmxlbmd0aC0xJiYodFt0Lmxlbmd0aF09ZS5zdWJzdHJpbmcobixhKzEpLnRyaW0oKSk7cmV0dXJuIHR9KG51bGw9PT1lfHwwPT09ZS5sZW5ndGh8fFwiLlwiPT09ZSkmJihlPVwiJFwiKTtmb3IodmFyIHI9bmV3IEFycmF5LG49dChlKSxhPSExLGk9MCxvPVwiXCIscz0wO3M8bi5sZW5ndGg7cysrKXt2YXIgdT1uW3NdO2lmKFwiW1wiPT09dSl7aWYoYSl0aHJvd1wiRXJyb3IgcGFyc2luZyBleHByZXNzaW9uICdcIitlK1wiJzogTmVzdGVkIFsgZm91bmRcIjthPSEwLGk9MCxvKz11fWVsc2UgaWYoXCJdXCI9PT11KXtpZighYSl0aHJvd1wiRXJyb3IgcGFyc2luZyBleHByZXNzaW9uICdcIitlK1wiJzogVW5iYWxhbmNlZCBdIGZvdW5kXCI7YT0hMSxvKz11LHJbci5sZW5ndGhdPW8sbz1cIlwifWVsc2UgaWYoYSl7aWYoaT4wKXRocm93XCJFcnJvciBwYXJzaW5nIGV4cHJlc3Npb24gJ1wiK2UrXCInOiBNdWx0aXBsZSB0b2tlbnMgZm91bmQgaW5zaWRlIGEgYnJhY2tldFwiO28rPXUsaSsrfWVsc2UgcltyLmxlbmd0aF09dTtpZihzPT09bi5sZW5ndGgtMSYmYSl0aHJvd1wiRXJyb3IgcGFyc2luZyBleHByZXNzaW9uICdcIitlK1wiJzogVW5iYWxhbmNlZCBbIGZvdW5kXCJ9dGhpcy5leHA9ZSx0aGlzLnF1ZXVlPXIsdGhpcy52aXNpdD1mdW5jdGlvbihlLHQpe2Z1bmN0aW9uIHIoZSxuLGEsaSxvKXtpZihudWxsIT1hKXt2YXIgcz1uLnNoaWZ0KCk7aWYoXCIkXCI9PT1zKXtlPVwiJFwiO3ZhciBzPW4uc2hpZnQoKX1pZihzKWlmKEFycmF5LmlzQXJyYXkoYSkpe2lmKCFzLnN0YXJ0c1dpdGgoXCJbXCIpKXRocm93XCJOb2RlICdcIitlK1wiJyBpcyBvZiB0eXBlIGFycmF5XCI7dmFyIHU9cy5zdWJzdHJpbmcoMSxzLmxlbmd0aC0xKTtpZih1LmVxdWFscyhcIiNcIikpZm9yKHZhciBsPTA7bDxhLmxlbmd0aDtsKyspe3ZhciBkPWFbbF07cihlK3Msbi5zbGljZSgwKSxkLGEsbCkscihlK1wiW1wiK2wrXCJdXCIsbi5zbGljZSgwKSxkLGEsbCl9ZWxzZSBpZihcIiRcIj09PXUpe3ZhciBkPWFbYS5sZW5ndGgtMV07cihlK3Msbi5zbGljZSgwKSxkLGEsYS5sZW5ndGgtMSl9ZWxzZXt2YXIgcD1wYXJzZUludCh1KTtpZihpc05hTihwKSl0aHJvd1wiRWxlbWVudCAnXCIrdStcIicgb2Ygbm9kZSAnXCIrZStcIicgaXMgbm90IGFuIGludGVnZXIsIG9yIHRoZSAnJCcgbGFzdCBlbGVtZW50IHN5bWJvbCwgIG9yIHRoZSB3aWxjYXJkIHN5bWJvbCAnIydcIjtpZigwPnApdGhyb3dcIkVsZW1lbnQgJ1wiK3UrXCInIG9mIG5vZGUgJ1wiK2UrXCInIGlzIGxvd2VyIHRoYW4gemVyb1wiO3ZhciBkPWFbcF07cihlK3Msbi5zbGljZSgwKSxkLGEscCl9fWVsc2V7aWYoXCJvYmplY3RcIiE9dHlwZW9mIGEpdGhyb3dcImJvb2xlYW5cIj09dHlwZW9mIGF8fFwibnVtYmVyXCI9PXR5cGVvZiBhfHxcInN0cmluZ1wiPT10eXBlb2YgYT9cIk5vZGUgaXMgbGVhZiBidXQgc3RpbGwgYXJlIHRva2VucyByZW1haW5pbmc6IFwiK3M6XCJOb2RlIHR5cGUgJ1wiK3R5cGVvZiBhK1wiJyBub3Qgc3VwcG9ydGVkIGZvciBpbmRleCBmaWVsZCAnXCIrZStcIidcIjtpZihcIlsqXVwiPT09cylmb3IodmFyIGMgaW4gYSl7dmFyIGQ9YVtjXTtyKGUrcyxuLnNsaWNlKDApLGQsYSxjKSxyKGUrJ1tcIicrYysnXCJdJyxuLnNsaWNlKDApLGQsYSxjKX1lbHNle3ZhciBkO2lmKHMuc3RhcnRzV2l0aChcIltcIikpe3ZhciB1PXMuc3Vic3RyaW5nKDEscy5sZW5ndGgtMSk7aWYoIXUuc3RhcnRzV2l0aCgnXCInKSYmIXUuc3RhcnRzV2l0aChcIidcIikpdGhyb3dcIkVsZW1lbnQgJ1wiK3UrXCInIG9mIG5vZGUgJ1wiK2UrXCInIG11c3QgYmUgYSBzdHJpbmcgZXhwcmVzc2lvbiBvciB3aWxjYXJkICcqJ1wiO3U9dS5zdWJzdHJpbmcoMSx1Lmxlbmd0aCgpLTEpLGUrPXMsZD1hW3VdfWVsc2UgZT1lLmxlbmd0aD4wP2UrXCIuXCIrczpzLGQ9YVtzXTtyKGUsbixkLGEscyl9fWVsc2UgdChhLGksbyl9fXIodGhpcy5leHAsdGhpcy5xdWV1ZSxlKX19dmFyIFNDSEVNQV9BTlk9e3R5cGU6XCJhbnlcIn0sb2JqPW5ldyBPYmplY3Qsc2NoZW1hTWFwPW5ldyBPYmplY3QsZGVwZW5kZW5jeU1hcD1uZXcgT2JqZWN0LHJlbmRlckluZm9NYXA9bmV3IE9iamVjdCxjb250YWluZXIsZGF0YSxlcnJvcixpbml0aWFsVmFsdWUsaW5wdXRDb3VudGVyPTAscm9vdD1zY2hlbWEsZm9ybUlkPVwiQnJ1dHVzaW5Gb3JtcyNcIitCcnV0dXNpbkZvcm1zLmluc3RhbmNlcy5sZW5ndGg7cmVuYW1lUmVxdWlyZWRQcm9wZXRpZXMoc2NoZW1hKSxwb3B1bGF0ZVNjaGVtYU1hcChcIiRcIixzY2hlbWEpLHZhbGlkYXRlRGVwZW5jeU1hcElzQWN5Y2xpYygpO3ZhciByZW5kZXJlcnM9bmV3IE9iamVjdDtyZXR1cm4gcmVuZGVyZXJzLmludGVnZXI9ZnVuY3Rpb24oZSx0LHIsbixhKXtyZW5kZXJlcnMuc3RyaW5nKGUsdCxyLG4sYSl9LHJlbmRlcmVycy5udW1iZXI9ZnVuY3Rpb24oZSx0LHIsbixhKXtyZW5kZXJlcnMuc3RyaW5nKGUsdCxyLG4sYSl9LHJlbmRlcmVycy5hbnk9ZnVuY3Rpb24oZSx0LHIsbixhKXtyZW5kZXJlcnMuc3RyaW5nKGUsdCxyLG4sYSl9LHJlbmRlcmVycy5zdHJpbmc9ZnVuY3Rpb24oZSx0LHIsbixhKXt2YXIgaSxvPWdldFNjaGVtYUlkKHQpLHM9Z2V0UGFyZW50U2NoZW1hSWQobyksdT1nZXRTY2hlbWEobyksbD1nZXRTY2hlbWEocyk7aWYoXCJhbnlcIj09PXUudHlwZSlpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKSxhJiYoaS52YWx1ZT1KU09OLnN0cmluZ2lmeShhLG51bGwsNCksdS5yZWFkT25seSYmKGkuZGlzYWJsZWQ9ITApKTtlbHNlIGlmKHUubWVkaWEpaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksaS50eXBlPVwiZmlsZVwiLGFwcGVuZENoaWxkKGksZCx1KTtlbHNlIGlmKHVbXCJlbnVtXCJdKXtpZihpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiksIXUucmVxdWlyZWQpe3ZhciBkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIikscD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKTtkLnZhbHVlPVwiXCIsYXBwZW5kQ2hpbGQoZCxwLHUpLGFwcGVuZENoaWxkKGksZCx1KX1mb3IodmFyIGM9MCxtPTA7bTx1W1wiZW51bVwiXS5sZW5ndGg7bSsrKXt2YXIgZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpLHA9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodVtcImVudW1cIl1bbV0pO2QudmFsdWU9dVtcImVudW1cIl1bbV0sYXBwZW5kQ2hpbGQoZCxwLHUpLGFwcGVuZENoaWxkKGksZCx1KSxhJiZ1W1wiZW51bVwiXVttXT09PWEmJihjPW0sdS5yZXF1aXJlZHx8YysrLHUucmVhZE9ubHkmJihpLmRpc2FibGVkPSEwKSl9MT09PXVbXCJlbnVtXCJdLmxlbmd0aD9pLnNlbGVjdGVkSW5kZXg9MTppLnNlbGVjdGVkSW5kZXg9Y31lbHNle2lmKGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLFwiaW50ZWdlclwiPT09dS50eXBlfHxcIm51bWJlclwiPT09dS50eXBlKWkudHlwZT1cIm51bWJlclwiLGkuc3RlcD11LnN0ZXA/XCJcIit1LnN0ZXA6XCJhbnlcIixcIm51bWJlclwiIT10eXBlb2YgYSYmKGE9bnVsbCk7ZWxzZSBpZihcImRhdGUtdGltZVwiPT09dS5mb3JtYXQpdHJ5e2kudHlwZT1cImRhdGV0aW1lLWxvY2FsXCJ9Y2F0Y2goZil7aS50eXBlPVwidGV4dFwifWVsc2VcImVtYWlsXCI9PT11LmZvcm1hdD9pLnR5cGU9XCJlbWFpbFwiOlwidGV4dFwiPT09dS5mb3JtYXQ/aT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik6aS50eXBlPVwidGV4dFwiO251bGwhPT1hJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgYSYmKGkudmFsdWU9YSx1LnJlYWRPbmx5JiYoaS5kaXNhYmxlZD0hMCkpfXJldHVybiBpLnNjaGVtYT1vLGkuc2V0QXR0cmlidXRlKFwiYXV0b2NvcnJlY3RcIixcIm9mZlwiKSxpLmdldFZhbGlkYXRpb25FcnJvcj1mdW5jdGlvbigpe3RyeXt2YXIgZT1nZXRWYWx1ZSh1LGkpO2lmKG51bGw9PT1lKXtpZih1LnJlcXVpcmVkKXtpZighbHx8XCJvYmplY3RcIiE9PWwudHlwZSlyZXR1cm4gQnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5yZXF1aXJlZDtpZihsLnJlcXVpcmVkKXJldHVybiBCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLnJlcXVpcmVkO2Zvcih2YXIgdCBpbiByKWlmKG51bGwhPT1yW3RdKXJldHVybiBCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLnJlcXVpcmVkfX1lbHNle2lmKHUucGF0dGVybiYmIXUucGF0dGVybi50ZXN0KGUpKXJldHVybiBCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLnBhdHRlcm4uZm9ybWF0KHUucGF0dGVybi5zb3VyY2UpO2lmKHUubWluTGVuZ3RoJiYoIWV8fHUubWluTGVuZ3RoPmUubGVuZ3RoKSlyZXR1cm4gQnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5taW5MZW5ndGguZm9ybWF0KHUubWluTGVuZ3RoKTtpZih1Lm1heExlbmd0aCYmZSYmdS5tYXhMZW5ndGg8ZS5sZW5ndGgpcmV0dXJuIEJydXR1c2luRm9ybXMubWVzc2FnZXMubWF4TGVuZ3RoLmZvcm1hdCh1Lm1heExlbmd0aCl9aWYobnVsbCE9PWUmJiFpc05hTihlKSl7aWYodS5tdWx0aXBsZU9mJiZlJXUubXVsdGlwbGVPZiE9PTApcmV0dXJuIEJydXR1c2luRm9ybXMubWVzc2FnZXMubXVsdGlwbGVPZi5mb3JtYXQodS5tdWx0aXBsZU9mKTtpZih1Lmhhc093blByb3BlcnR5KFwibWF4aW11bVwiKSl7aWYodS5leGNsdXNpdmVNYXhpbXVtJiZlPj11Lm1heGltdW0pcmV0dXJuIEJydXR1c2luRm9ybXMubWVzc2FnZXMuZXhjbHVzaXZlTWF4aW11bS5mb3JtYXQodS5tYXhpbXVtKTtpZighdS5leGNsdXNpdmVNYXhpbXVtJiZlPnUubWF4aW11bSlyZXR1cm4gQnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5tYXhpbXVtLmZvcm1hdCh1Lm1heGltdW0pfWlmKHUuaGFzT3duUHJvcGVydHkoXCJtaW5pbXVtXCIpKXtpZih1LmV4Y2x1c2l2ZU1pbmltdW0mJmU8PXUubWluaW11bSlyZXR1cm4gQnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5leGNsdXNpdmVNaW5pbXVtLmZvcm1hdCh1Lm1pbmltdW0pO2lmKCF1LmV4Y2x1c2l2ZU1pbmltdW0mJmU8dS5taW5pbXVtKXJldHVybiBCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLm1pbmltdW0uZm9ybWF0KHUubWluaW11bSl9fX1jYXRjaChuKXtyZXR1cm4gQnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5pbnZhbGlkVmFsdWV9fSxpLm9uY2hhbmdlPWZ1bmN0aW9uKCl7dmFyIGU7dHJ5e2U9Z2V0VmFsdWUodSxpKX1jYXRjaCh0KXtlPW51bGx9cj9yW24uZ2V0VmFsdWUoKV09ZTpkYXRhPWUsb25EZXBlbmRlbmN5Q2hhbmdlZChvLGkpfSx1LmRlc2NyaXB0aW9uJiYoaS50aXRsZT11LmRlc2NyaXB0aW9uLGkucGxhY2Vob2xkZXI9dS5kZXNjcmlwdGlvbiksaS5vbmNoYW5nZSgpLGkuaWQ9Z2V0SW5wdXRJZCgpLGlucHV0Q291bnRlcisrLGFwcGVuZENoaWxkKGUsaSx1KSxyfSxyZW5kZXJlcnNbXCJib29sZWFuXCJdPWZ1bmN0aW9uKGUsdCxyLG4sYSl7dmFyIGksbz1nZXRTY2hlbWFJZCh0KSxzPWdldFNjaGVtYShvKTtpZihzLnJlcXVpcmVkKWk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGkudHlwZT1cImNoZWNrYm94XCIsYT09PSEwJiYoaS5jaGVja2VkPSEwKTtlbHNle2k9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTt2YXIgdT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpLGw9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIik7bC52YWx1ZT1cIlwiLGFwcGVuZENoaWxkKHUsbCxzKSxhcHBlbmRDaGlsZChpLHUscyk7dmFyIGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSxwPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKEJydXR1c2luRm9ybXMubWVzc2FnZXNbXCJ0cnVlXCJdKTtkLnZhbHVlPVwidHJ1ZVwiLGFwcGVuZENoaWxkKGQscCxzKSxhcHBlbmRDaGlsZChpLGQscyk7dmFyIGM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSxtPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKEJydXR1c2luRm9ybXMubWVzc2FnZXNbXCJmYWxzZVwiXSk7Yy52YWx1ZT1cImZhbHNlXCIsYXBwZW5kQ2hpbGQoYyxtLHMpLGFwcGVuZENoaWxkKGksYyxzKSxhPT09ITA/aS5zZWxlY3RlZEluZGV4PTE6YT09PSExJiYoaS5zZWxlY3RlZEluZGV4PTIpfWkub25jaGFuZ2U9ZnVuY3Rpb24oKXtyP3Jbbi5nZXRWYWx1ZSgpXT1nZXRWYWx1ZShzLGkpOmRhdGE9Z2V0VmFsdWUocyxpKSxvbkRlcGVuZGVuY3lDaGFuZ2VkKG8saSl9LGkuc2NoZW1hPW8saS5pZD1nZXRJbnB1dElkKCksaW5wdXRDb3VudGVyKysscy5kZXNjcmlwdGlvbiYmKGkudGl0bGU9cy5kZXNjcmlwdGlvbiksaS5vbmNoYW5nZSgpLGFwcGVuZENoaWxkKGUsaSxzKX0scmVuZGVyZXJzLm9uZU9mPWZ1bmN0aW9uKGUsdCxyLG4sYSl7dmFyIGk9Z2V0U2NoZW1hSWQodCksbz1nZXRTY2hlbWEoaSkscz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpLHU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt1LmlubmVySFRNTD1cIlwiLHMudHlwZT1cInNlbGVjdFwiLHMuc2NoZW1hPWk7dmFyIGw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtsLnZhbHVlPW51bGwsYXBwZW5kQ2hpbGQocyxsLG8pO2Zvcih2YXIgZD0wO2Q8by5vbmVPZi5sZW5ndGg7ZCsrKXt2YXIgcD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpLGM9aStcIi5cIitkLG09Z2V0U2NoZW1hKGMpLGY9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobS50aXRsZSk7aWYocC52YWx1ZT1vLm9uZU9mW2RdLGFwcGVuZENoaWxkKHAsZixvKSxhcHBlbmRDaGlsZChzLHAsbyksdm9pZCAwIT09YSYmbnVsbCE9PWEmJihvLnJlYWRPbmx5JiYocy5kaXNhYmxlZD0hMCksYS5oYXNPd25Qcm9wZXJ0eShcInR5cGVcIikmJm0uaGFzT3duUHJvcGVydHkoXCJwcm9wZXJ0aWVzXCIpJiZtLnByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoXCJ0eXBlXCIpKSl7dmFyIGg9Z2V0U2NoZW1hKG0ucHJvcGVydGllcy50eXBlKTthLnR5cGU9PT1oW1wiZW51bVwiXVswXSYmKHMuc2VsZWN0ZWRJbmRleD1kKzEscmVuZGVyKG51bGwsdSx0K1wiLlwiKyhzLnNlbGVjdGVkSW5kZXgtMSkscixuLGEpKX19cy5vbmNoYW5nZT1mdW5jdGlvbigpe3JlbmRlcihudWxsLHUsdCtcIi5cIisocy5zZWxlY3RlZEluZGV4LTEpLHIsbixhKX0sYXBwZW5kQ2hpbGQoZSxzLG8pLGFwcGVuZENoaWxkKGUsdSxvKX0scmVuZGVyZXJzLm9iamVjdD1mdW5jdGlvbihlLHQscixuLGEpe2Z1bmN0aW9uIGkoZSl7dmFyIHQ9bmV3IE9iamVjdDtyZXR1cm4gdC5nZXRWYWx1ZT1mdW5jdGlvbigpe3JldHVybiBlfSx0Lm9uY2hhbmdlPWZ1bmN0aW9uKGUpe30sdH1mdW5jdGlvbiBvKGUsdCxyLG4sYSxpKXt2YXIgbz1nZXRTY2hlbWFJZChyKSxzPWdldFNjaGVtYShvKSx1PXQudEJvZGllc1swXSxsPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKSxkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtkLmNsYXNzTmFtZT1cImFkZC1wcm9wLW5hbWVcIjt2YXIgcD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIiksYz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIiksbT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIiksZj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIiksaD1cIiRcIitPYmplY3Qua2V5cyhlKS5sZW5ndGgrXCIkXCIsdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7di5jbGFzc05hbWU9XCJwcm9wLXZhbHVlXCI7dmFyIGc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO2cudHlwZT1cInRleHRcIjt2YXIgeTtpJiYoeT1SZWdFeHAoaSkpLGcuZ2V0VmFsaWRhdGlvbkVycm9yPWZ1bmN0aW9uKCl7cmV0dXJuIGcucHJldmlvdXNWYWx1ZSE9PWcudmFsdWUmJmUuaGFzT3duUHJvcGVydHkoZy52YWx1ZSk/QnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5hZGRwcm9wTmFtZUV4aXN0ZW50OmcudmFsdWU/dm9pZCAwOkJydXR1c2luRm9ybXMubWVzc2FnZXMuYWRkcHJvcE5hbWVSZXF1aXJlZH07dmFyIGI9Y3JlYXRlUHJvcGVydHlQcm92aWRlcihmdW5jdGlvbigpe2lmKGcudmFsdWUpe2lmKCF5KXJldHVybiBnLnZhbHVlO2lmKC0xIT09Zy52YWx1ZS5zZWFyY2goeSkpcmV0dXJuIGcudmFsdWV9cmV0dXJuIGh9LGZ1bmN0aW9uKHQpe2IuZ2V0VmFsdWUoKSE9PXQmJih0JiZlLmhhc093blByb3BlcnR5KHQpfHwodD1oKSwoZS5oYXNPd25Qcm9wZXJ0eSh0KXx8eSYmLTE9PT1iLmdldFZhbHVlKCkuc2VhcmNoKHkpKSYmKGVbYi5nZXRWYWx1ZSgpXT1lW3RdLGRlbGV0ZSBlW3RdKSl9KTtnLm9uYmx1cj1mdW5jdGlvbigpe2lmKGcucHJldmlvdXNWYWx1ZSE9PWcudmFsdWUpe2Zvcih2YXIgdD1nLnZhbHVlLHI9MTtnLnByZXZpb3VzVmFsdWUhPT10JiZlLmhhc093blByb3BlcnR5KHQpOyl0PWcudmFsdWUrXCIoXCIrcitcIilcIixyKys7cmV0dXJuIGcudmFsdWU9dCxiLm9uY2hhbmdlKGcucHJldmlvdXNWYWx1ZSksdm9pZChnLnByZXZpb3VzVmFsdWU9Zy52YWx1ZSl9fTt2YXIgUD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1Auc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiYnV0dG9uXCIpLFAuY2xhc3NOYW1lPVwicmVtb3ZlXCIsYXBwZW5kQ2hpbGQoUCxkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcInhcIikscyksUC5vbmNsaWNrPWZ1bmN0aW9uKCl7ZGVsZXRlIGVbZy52YWx1ZV0sdC5kZWxldGVSb3cobC5yb3dJbmRleCksZy52YWx1ZT1udWxsLGIub25jaGFuZ2UoZy5wcmV2aW91c1ZhbHVlKX0sYXBwZW5kQ2hpbGQobSxnLHMpLGFwcGVuZENoaWxkKGYsUCxzKSxhcHBlbmRDaGlsZChjLG0scyksYXBwZW5kQ2hpbGQoYyxmLHMpLGFwcGVuZENoaWxkKHAsYyxzKSxhcHBlbmRDaGlsZChkLHAscyksdm9pZCAwIT09aSYmKGcucGxhY2Vob2xkZXI9aSksYXBwZW5kQ2hpbGQobCxkLHMpLGFwcGVuZENoaWxkKGwsdixzKSxhcHBlbmRDaGlsZCh1LGwscyksYXBwZW5kQ2hpbGQodCx1LHMpLHJlbmRlcihudWxsLHYscixlLGIsYSksbiYmKGcudmFsdWU9bixnLm9uYmx1cigpKX12YXIgcz1nZXRTY2hlbWFJZCh0KSx1PWdldFNjaGVtYShzKSxsPW5ldyBPYmplY3Q7cj8obi5nZXRWYWx1ZSgpfHwwPT09bi5nZXRWYWx1ZSgpKSYmKHJbbi5nZXRWYWx1ZSgpXT1sKTpkYXRhPWw7dmFyIGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO2QuY2xhc3NOYW1lPVwib2JqZWN0XCI7dmFyIHA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO2FwcGVuZENoaWxkKGQscCx1KTt2YXIgYz0wO2lmKHUuaGFzT3duUHJvcGVydHkoXCJwcm9wZXJ0aWVzXCIpKXtjPXUucHJvcGVydGllcy5sZW5ndGg7Zm9yKHZhciBtIGluIHUucHJvcGVydGllcyl7dmFyIGY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpLGg9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO2guY2xhc3NOYW1lPVwicHJvcC1uYW1lXCI7dmFyIHY9dCtcIi5cIittLGc9Z2V0U2NoZW1hKGdldFNjaGVtYUlkKHYpKSx5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTt5LmNsYXNzTmFtZT1cInByb3AtdmFsdWVcIixhcHBlbmRDaGlsZChwLGYsZyksYXBwZW5kQ2hpbGQoZixoLGcpLGFwcGVuZENoaWxkKGYseSxnKTt2YXIgYj1pKG0pLFA9bnVsbDthJiYoUD1hW21dKSxyZW5kZXIoaCx5LHYsbCxiLFApfX12YXIgTz1bXTtpZih1LnBhdHRlcm5Qcm9wZXJ0aWVzfHx1LmFkZGl0aW9uYWxQcm9wZXJ0aWVzKXt2YXIgdz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2lmKGFwcGVuZENoaWxkKHcsZCx1KSx1LnBhdHRlcm5Qcm9wZXJ0aWVzKWZvcih2YXIgeCBpbiB1LnBhdHRlcm5Qcm9wZXJ0aWVzKXt2YXIgQz11LnBhdHRlcm5Qcm9wZXJ0aWVzW3hdLEU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtFLmNsYXNzTmFtZT1cImFkZC1wYXR0ZXJuLWRpdlwiO3ZhciBTPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7aWYoUy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJidXR0b25cIiksUy5wYXR0ZXJuPXgsUy5pZD10K1wiW1wiK3grXCJdXCIsUy5vbmNsaWNrPWZ1bmN0aW9uKCl7byhsLGQsdGhpcy5pZCx2b2lkIDAsdm9pZCAwLHRoaXMucGF0dGVybil9LCh1Lm1heFByb3BlcnRpZXN8fHUubWluUHJvcGVydGllcykmJihTLmdldFZhbGlkYXRpb25FcnJvcj1mdW5jdGlvbigpe3JldHVybiB1Lm1pblByb3BlcnRpZXMmJmMrZC5yb3dzLmxlbmd0aDx1Lm1pblByb3BlcnRpZXM/QnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5taW5Qcm9wZXJ0aWVzLmZvcm1hdCh1Lm1pblByb3BlcnRpZXMpOnUubWF4UHJvcGVydGllcyYmYytkLnJvd3MubGVuZ3RoPnUubWF4UHJvcGVydGllcz9CcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLm1heFByb3BlcnRpZXMuZm9ybWF0KHUubWF4UHJvcGVydGllcyk6dm9pZCAwfSksQy5kZXNjcmlwdGlvbiYmKFMudGl0bGU9Qy5kZXNjcmlwdGlvbiksYXBwZW5kQ2hpbGQoUyxkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkFkZCBcIit4KSx1KSxhcHBlbmRDaGlsZChFLFMsdSksYSlmb3IodmFyIEkgaW4gYSlpZighdS5wcm9wZXJ0aWVzfHwhdS5wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KEkpKXt2YXIgTj1SZWdFeHAoeCk7LTEhPT1JLnNlYXJjaChOKSYmLTE9PT1PLmluZGV4T2YoSSkmJihvKGwsZCx0K1wiW1wiK3grXCJdXCIsSSxhW0ldLHgpLE8ucHVzaChJKSl9YXBwZW5kQ2hpbGQodyxFLHUpfWlmKHUuYWRkaXRpb25hbFByb3BlcnRpZXMpe3ZhciBGPWdldFNjaGVtYSh1LmFkZGl0aW9uYWxQcm9wZXJ0aWVzKSxTPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7aWYoUy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJidXR0b25cIiksUy5vbmNsaWNrPWZ1bmN0aW9uKCl7byhsLGQsdCtcIlsqXVwiLHZvaWQgMCl9LCh1Lm1heFByb3BlcnRpZXN8fHUubWluUHJvcGVydGllcykmJihTLmdldFZhbGlkYXRpb25FcnJvcj1mdW5jdGlvbigpe3JldHVybiB1Lm1pblByb3BlcnRpZXMmJmMrZC5yb3dzLmxlbmd0aDx1Lm1pblByb3BlcnRpZXM/QnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5taW5Qcm9wZXJ0aWVzLmZvcm1hdCh1Lm1pblByb3BlcnRpZXMpOnUubWF4UHJvcGVydGllcyYmYytkLnJvd3MubGVuZ3RoPnUubWF4UHJvcGVydGllcz9CcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLm1heFByb3BlcnRpZXMuZm9ybWF0KHUubWF4UHJvcGVydGllcyk6dm9pZCAwfSksRi5kZXNjcmlwdGlvbiYmKFMudGl0bGU9Ri5kZXNjcmlwdGlvbiksYXBwZW5kQ2hpbGQoUyxkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkFkZFwiKSx1KSxhcHBlbmRDaGlsZCh3LFMsdSksYSlmb3IodmFyIEkgaW4gYSl1LnByb3BlcnRpZXMmJnUucHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShJKXx8LTE9PT1PLmluZGV4T2YoSSkmJm8obCxkLHQrJ1tcIicrbSsnXCJdJyxJLGFbSV0pfWFwcGVuZENoaWxkKGUsdyx1KX1lbHNlIGFwcGVuZENoaWxkKGUsZCx1KX0scmVuZGVyZXJzLmFycmF5PWZ1bmN0aW9uKGUsdCxyLG4sYSl7ZnVuY3Rpb24gaShlLHQscixuLGEpe3ZhciBpPWdldFNjaGVtYUlkKHIpLG89Z2V0U2NoZW1hKGkpLHM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpLHU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO3UuY2xhc3NOYW1lPVwiaXRlbVwiO3ZhciBsPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtsLmNsYXNzTmFtZT1cIml0ZW0taW5kZXhcIjt2YXIgZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7ZC5jbGFzc05hbWU9XCJpdGVtLWFjdGlvblwiO3ZhciBwPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtwLmNsYXNzTmFtZT1cIml0ZW0tdmFsdWVcIjt2YXIgYz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO2Muc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiYnV0dG9uXCIpLGMuY2xhc3NOYW1lPVwicmVtb3ZlXCIsYT09PSEwJiYoYy5kaXNhYmxlZD0hMCksYXBwZW5kQ2hpbGQoYyxkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcInhcIiksbyk7dmFyIG09ZnVuY3Rpb24oKXtmb3IodmFyIGU9MDtlPHQucm93cy5sZW5ndGg7ZSsrKXt2YXIgcj10LnJvd3NbZV07ci5jZWxsc1swXS5pbm5lckhUTUw9ZSsxfX07Yy5vbmNsaWNrPWZ1bmN0aW9uKCl7ZS5zcGxpY2UodS5yb3dJbmRleCwxKSx0LmRlbGV0ZVJvdyh1LnJvd0luZGV4KSxtKCl9LGFwcGVuZENoaWxkKGQsYyxvKTt2YXIgZj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0LnJvd3MubGVuZ3RoKzEpO2FwcGVuZENoaWxkKGwsZixvKSxhcHBlbmRDaGlsZCh1LGwsbyksYXBwZW5kQ2hpbGQodSxkLG8pLGFwcGVuZENoaWxkKHUscCxvKSxhcHBlbmRDaGlsZChzLHUsbyksYXBwZW5kQ2hpbGQodCxzLG8pO3ZhciBoPWNyZWF0ZVByb3BlcnR5UHJvdmlkZXIoZnVuY3Rpb24oKXtyZXR1cm4gdS5yb3dJbmRleH0pO3JlbmRlcihudWxsLHAscixlLGgsbil9dmFyIG89Z2V0U2NoZW1hSWQodCkscz1nZXRTY2hlbWEobyksdT1nZXRTY2hlbWEocy5pdGVtcyksbD1uZXcgQXJyYXk7cj8obi5nZXRWYWx1ZSgpfHwwPT09bi5nZXRWYWx1ZSgpKSYmKHJbbi5nZXRWYWx1ZSgpXT1sKTpkYXRhPWwsbiYmKG4ub25jaGFuZ2U9ZnVuY3Rpb24oZSl7ZGVsZXRlIHJbZV0scltuLmdldFZhbHVlKCldPWx9KTt2YXIgZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO3AuY2xhc3NOYW1lPVwiYXJyYXlcIixhcHBlbmRDaGlsZChkLHAscyksYXBwZW5kQ2hpbGQoZSxkLHMpO3ZhciBjPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7aWYocy5yZWFkT25seSYmKGMuZGlzYWJsZWQ9ITApLGMuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiYnV0dG9uXCIpLGMuZ2V0VmFsaWRhdGlvbkVycm9yPWZ1bmN0aW9uKCl7aWYocy5taW5JdGVtcyYmcy5taW5JdGVtcz5wLnJvd3MubGVuZ3RoKXJldHVybiBCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLm1pbkl0ZW1zLmZvcm1hdChzLm1pbkl0ZW1zKTtpZihzLm1heEl0ZW1zJiZzLm1heEl0ZW1zPHAucm93cy5sZW5ndGgpcmV0dXJuIEJydXR1c2luRm9ybXMubWVzc2FnZXMubWF4SXRlbXMuZm9ybWF0KHMubWF4SXRlbXMpO2lmKHMudW5pcXVlSXRlbXMpZm9yKHZhciBlPTA7ZTxsLmxlbmd0aDtlKyspZm9yKHZhciB0PWUrMTt0PGwubGVuZ3RoO3QrKylpZihKU09OLnN0cmluZ2lmeShsW2VdKT09PUpTT04uc3RyaW5naWZ5KGxbdF0pKXJldHVybiBCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLnVuaXF1ZUl0ZW1zfSxjLm9uY2xpY2s9ZnVuY3Rpb24oKXtpKGwscCx0K1wiWyNdXCIsbnVsbCl9LHUuZGVzY3JpcHRpb24mJihjLnRpdGxlPXUuZGVzY3JpcHRpb24pLGFwcGVuZENoaWxkKGMsZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoQnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5hZGRJdGVtKSxzKSxhcHBlbmRDaGlsZChkLHAscyksYXBwZW5kQ2hpbGQoZCxjLHMpLGEmJmEgaW5zdGFuY2VvZiBBcnJheSlmb3IodmFyIG09MDttPGEubGVuZ3RoO20rKylpKGwscCx0K1wiW1wiK20rXCJdXCIsYVttXSxzLnJlYWRPbmx5KTthcHBlbmRDaGlsZChlLGQscyl9LG9iai5yZW5kZXI9ZnVuY3Rpb24oZSx0KXtjb250YWluZXI9ZSxpbml0aWFsVmFsdWU9dDt2YXIgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtpZihyLmNsYXNzTmFtZT1cImJydXR1c2luLWZvcm1cIixyLm9uc3VibWl0PWZ1bmN0aW9uKGUpe3JldHVybiExfSxjb250YWluZXI/YXBwZW5kQ2hpbGQoY29udGFpbmVyLHIpOmFwcGVuZENoaWxkKGRvY3VtZW50LmJvZHksciksZXJyb3Ipe3ZhciBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKSxhPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGVycm9yKTthcHBlbmRDaGlsZChuLGEpLG4uY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiLGFwcGVuZENoaWxkKHIsbil9ZWxzZSByZW5kZXIobnVsbCxyLFwiJFwiLG51bGwsbnVsbCk7ZGVwZW5kZW5jeU1hcC5oYXNPd25Qcm9wZXJ0eShcIiRcIikmJm9uRGVwZW5kZW5jeUNoYW5nZWQoXCIkXCIpLEJydXR1c2luRm9ybXMucG9zdFJlbmRlciYmQnJ1dHVzaW5Gb3Jtcy5wb3N0UmVuZGVyKG9iail9LG9iai5nZXRSZW5kZXJpbmdDb250YWluZXI9ZnVuY3Rpb24oKXtyZXR1cm4gY29udGFpbmVyfSxvYmoudmFsaWRhdGU9ZnVuY3Rpb24oKXtyZXR1cm4gdmFsaWRhdGUoY29udGFpbmVyKX0sb2JqLmdldERhdGE9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQscil7aWYobnVsbD09PXMmJihzPVNDSEVNQV9BTlkpLHIuJHJlZiYmKHI9Z2V0RGVmaW5pdGlvbihyLiRyZWYpKSx0IGluc3RhbmNlb2YgQXJyYXkpe2lmKDA9PT10Lmxlbmd0aClyZXR1cm4gbnVsbDtmb3IodmFyIG49bmV3IEFycmF5LGE9MDthPHQubGVuZ3RoO2ErKyluW2FdPWUodFthXSxyLml0ZW1zKTtyZXR1cm4gbn1pZihcIlwiPT09dClyZXR1cm4gbnVsbDtpZih0IGluc3RhbmNlb2YgT2JqZWN0KXt2YXIgbj1uZXcgT2JqZWN0LGk9ITE7Zm9yKHZhciBvIGluIHQpaWYoIW8uc3RhcnRzV2l0aChcIiRcIil8fCFvLmVuZHNXaXRoKFwiJFwiKSl7dmFyIHM9bnVsbDtpZihyLmhhc093blByb3BlcnR5KFwicHJvcGVydGllc1wiKSYmci5wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KG8pJiYocz1yLnByb3BlcnRpZXNbb10pLG51bGw9PT1zJiZyLmhhc093blByb3BlcnR5KFwiYWRkaXRpb25hbFByb3BlcnRpZXNcIikmJlwib2JqZWN0XCI9PXR5cGVvZiByLmFkZGl0aW9uYWxQcm9wZXJ0aWVzJiYocz1yLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKSxudWxsPT09cyYmci5oYXNPd25Qcm9wZXJ0eShcInBhdHRlcm5Qcm9wZXJ0aWVzXCIpKWZvcih2YXIgdSBpbiByLnBhdHRlcm5Qcm9wZXJ0aWVzKXt2YXIgbD1SZWdFeHAodSk7aWYoLTEhPT1vLnNlYXJjaChsKSl7cz1yLnBhdHRlcm5Qcm9wZXJ0aWVzW3VdO2JyZWFrfX12YXIgZD1lKHRbb10scyk7bnVsbCE9PWQmJihuW29dPWQsaT0hMCl9cmV0dXJuIGl8fHIucmVxdWlyZWQ/bjpudWxsfXJldHVybiB0fXJldHVybiBjb250YWluZXI/ZShkYXRhLHNjaGVtYSk6bnVsbH0sQnJ1dHVzaW5Gb3Jtcy5pbnN0YW5jZXNbQnJ1dHVzaW5Gb3Jtcy5pbnN0YW5jZXMubGVuZ3RoXT1vYmosb2JqfSxicnV0dXNpbltcImpzb24tZm9ybXNcIl09QnJ1dHVzaW5Gb3Jtc30oKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnJ1dHVzaW4tanNvbi1mb3Jtcy9kaXN0L2pzL2JydXR1c2luLWpzb24tZm9ybXMubWluLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jhc2Uuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiIWZ1bmN0aW9uKGYpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlKW1vZHVsZS5leHBvcnRzPWYoKTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW10sZik7ZWxzZXsoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbD9nbG9iYWw6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGY/c2VsZjp0aGlzKS5NZXRlb3JFbW9qaT1mKCl9fShmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobnx8ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9Zm9yKHZhciBpPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KHsxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXshZnVuY3Rpb24oZ2xvYmFsLGZhY3Rvcnkpe2lmKHZvaWQgMCE9PWV4cG9ydHMpZmFjdG9yeShtb2R1bGUpO2Vsc2V7dmFyIG1vZD17ZXhwb3J0czp7fX07ZmFjdG9yeShtb2QpLGdsb2JhbC5tZXRlb3JFbW9qaT1tb2QuZXhwb3J0c319KHRoaXMsZnVuY3Rpb24obW9kdWxlKXtcInVzZSBzdHJpY3RcIjt2YXIgX2NyZWF0ZUNsYXNzPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQscHJvcHMpe2Zvcih2YXIgaT0wO2k8cHJvcHMubGVuZ3RoO2krKyl7dmFyIGRlc2NyaXB0b3I9cHJvcHNbaV07ZGVzY3JpcHRvci5lbnVtZXJhYmxlPWRlc2NyaXB0b3IuZW51bWVyYWJsZXx8ITEsZGVzY3JpcHRvci5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gZGVzY3JpcHRvciYmKGRlc2NyaXB0b3Iud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsZGVzY3JpcHRvci5rZXksZGVzY3JpcHRvcil9fXJldHVybiBmdW5jdGlvbihDb25zdHJ1Y3Rvcixwcm90b1Byb3BzLHN0YXRpY1Byb3BzKXtyZXR1cm4gcHJvdG9Qcm9wcyYmZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUscHJvdG9Qcm9wcyksc3RhdGljUHJvcHMmJmRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3Isc3RhdGljUHJvcHMpLENvbnN0cnVjdG9yfX0oKSxNZXRlb3JFbW9qaT1mdW5jdGlvbigpe2Z1bmN0aW9uIE1ldGVvckVtb2ppKCl7IWZ1bmN0aW9uKGluc3RhbmNlLENvbnN0cnVjdG9yKXtpZighKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9KHRoaXMsTWV0ZW9yRW1vamkpLHRoaXMuaW5pdGlhdGUoKX1yZXR1cm4gX2NyZWF0ZUNsYXNzKE1ldGVvckVtb2ppLFt7a2V5OlwiaW5pdGlhdGVcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBfdGhpcz10aGlzO2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1ldGVvci1lbW9qaT1cInRydWVcIl0sIFtkYXRhLW1ldGVvci1lbW9qaS1sYXJnZT1cInRydWVcIl0nKS5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpe190aGlzLmdlbmVyYXRlRWxlbWVudHMoZWxlbWVudCl9KX19LHtrZXk6XCJnZW5lcmF0ZUVsZW1lbnRzXCIsdmFsdWU6ZnVuY3Rpb24oZW1vamlJbnB1dCl7dmFyIGNsaWNrTGluaz1mdW5jdGlvbihldmVudCl7dmFyIGNhcmV0UG9zPWVtb2ppSW5wdXQuc2VsZWN0aW9uU3RhcnQ7ZW1vamlJbnB1dC52YWx1ZT1lbW9qaUlucHV0LnZhbHVlLnN1YnN0cmluZygwLGNhcmV0UG9zKStcIiBcIitldmVudC50YXJnZXQuaW5uZXJIVE1MK2Vtb2ppSW5wdXQudmFsdWUuc3Vic3RyaW5nKGNhcmV0UG9zKSxlbW9qaVBpY2tlci5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIixcInVuZGVmaW5lZFwiIT10eXBlb2YgYW5ndWxhciYmYW5ndWxhci5lbGVtZW50KGVtb2ppSW5wdXQpLnRyaWdnZXJIYW5kbGVyKFwiY2hhbmdlXCIpfSxjbGlja0NhdGVnb3J5PWZ1bmN0aW9uKGV2ZW50KXtlbW9qaUlucHV0LnNlbGVjdGlvblN0YXJ0O2Vtb2ppUGlja2VyLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiO2Zvcih2YXIgaGlkZVVscz1lbW9qaVBpY2tlci5xdWVyeVNlbGVjdG9yQWxsKFwidWxcIiksaT0xLGw9aGlkZVVscy5sZW5ndGg7aTxsO2krKyloaWRlVWxzW2ldLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7dmFyIGJhY2tncm91bmRUb2dnbGU9ZW1vamlQaWNrZXIucXVlcnlTZWxlY3RvckFsbChcIi5jYXRlZ29yeSBhXCIpO2ZvcihpPTAsbD1iYWNrZ3JvdW5kVG9nZ2xlLmxlbmd0aDtpPGw7aSsrKWJhY2tncm91bmRUb2dnbGVbaV0uc3R5bGUuYmFja2dyb3VuZD1cIm5vbmVcIjtlbW9qaVBpY2tlci5xdWVyeVNlbGVjdG9yKFwiLlwiK2V2ZW50LnRhcmdldC5pZCkuc3R5bGUuZGlzcGxheT1cImJsb2NrXCIsZW1vamlQaWNrZXIucXVlcnlTZWxlY3RvcihcIiNcIitldmVudC50YXJnZXQuaWQpLnN0eWxlLmJhY2tncm91bmQ9XCIjYzJjMmMyXCJ9O2Vtb2ppSW5wdXQuc3R5bGUud2lkdGg9XCIxMDAlXCI7dmFyIGVtb2ppQ29udGFpbmVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZW1vamlDb250YWluZXIuc3R5bGUucG9zaXRpb249XCJyZWxhdGl2ZVwiLGVtb2ppSW5wdXQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoZW1vamlDb250YWluZXIsZW1vamlJbnB1dCksZW1vamlDb250YWluZXIuYXBwZW5kQ2hpbGQoZW1vamlJbnB1dCk7dmFyIGVtb2ppUGlja2VyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZW1vamlQaWNrZXIudGFiSW5kZXg9MCxlbW9qaUlucHV0Lmhhc0F0dHJpYnV0ZShcImRhdGEtbWV0ZW9yLWVtb2ppLWxhcmdlXCIpPyhlbW9qaVBpY2tlci5zdHlsZS56SW5kZXg9XCI5OTlcIixlbW9qaVBpY2tlci5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIixlbW9qaVBpY2tlci5zdHlsZS53aWR0aD1cIjEwMCVcIixlbW9qaVBpY2tlci5zdHlsZS5tYXJnaW5Cb3R0b209XCIxNXB4XCIpOihlbW9qaVBpY2tlci5zdHlsZS5wb3NpdGlvbj1cImFic29sdXRlXCIsZW1vamlQaWNrZXIuc3R5bGUucmlnaHQ9XCIwcHhcIixlbW9qaVBpY2tlci5zdHlsZS50b3A9XCIzMHB4XCIsZW1vamlQaWNrZXIuc3R5bGUuZGlzcGxheT1cIm5vbmVcIixlbW9qaVBpY2tlci5zdHlsZS53aWR0aD1cIjQwMHB4XCIpLGVtb2ppUGlja2VyLnN0eWxlLnpJbmRleD1cIjk5OVwiLGVtb2ppUGlja2VyLnN0eWxlLm92ZXJmbG93PVwiaGlkZGVuXCIsZW1vamlQaWNrZXIuc3R5bGUuYmFja2dyb3VuZD1cIiNmZmZcIixlbW9qaVBpY2tlci5zdHlsZS5ib3JkZXJSYWRpdXM9XCI1cHhcIixlbW9qaVBpY2tlci5zdHlsZS5ib3hTaGFkb3c9XCIwIDNweCA2cHggcmdiYSgwLDAsMCwwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yMylcIixlbW9qaVBpY2tlci5zdHlsZS5ib3JkZXJSYWRpdXM9XCIycHg7XCIsZW1vamlQaWNrZXIuc3R5bGUubWFyZ2luVG9wPVwiNXB4XCIsZW1vamlQaWNrZXIuc3R5bGUub3V0bGluZT1cIm5vbmVcIjt2YXIgZW1vamlUcmlnZ2VyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2Vtb2ppVHJpZ2dlci5zdHlsZS5wb3NpdGlvbj1cImFic29sdXRlXCIsZW1vamlUcmlnZ2VyLnN0eWxlLnRvcD1cIjEwcHhcIixlbW9qaVRyaWdnZXIuc3R5bGUucmlnaHQ9XCIxMHB4XCIsZW1vamlUcmlnZ2VyLnN0eWxlLnRleHREZWNvcmF0aW9uPVwibm9uZVwiLGVtb2ppVHJpZ2dlci5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsXCJqYXZhc2NyaXB0OnZvaWQoMClcIiksZW1vamlUcmlnZ2VyLmlubmVySFRNTD0nPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAxMiAxNFwiPjxwYXRoIGQ9XCJNOC45IDguNHEtMC4zIDAuOS0xLjEgMS41dC0xLjggMC42LTEuOC0wLjYtMS4xLTEuNXEtMC4xLTAuMiAwLTAuNHQwLjMtMC4ycTAuMi0wLjEgMC40IDB0MC4yIDAuM3EwLjIgMC42IDAuNyAxdDEuMiAwLjQgMS4yLTAuNCAwLjctMXEwLjEtMC4yIDAuMy0wLjN0MC40IDAgMC4zIDAuMiAwIDAuNHpNNSA1cTAgMC40LTAuMyAwLjd0LTAuNyAwLjMtMC43LTAuMy0wLjMtMC43IDAuMy0wLjcgMC43LTAuMyAwLjcgMC4zIDAuMyAwLjd6TTkgNXEwIDAuNC0wLjMgMC43dC0wLjcgMC4zLTAuNy0wLjMtMC4zLTAuNyAwLjMtMC43IDAuNy0wLjMgMC43IDAuMyAwLjMgMC43ek0xMSA3cTAtMS0wLjQtMS45dC0xLjEtMS42LTEuNi0xLjEtMS45LTAuNC0xLjkgMC40LTEuNiAxLjEtMS4xIDEuNi0wLjQgMS45IDAuNCAxLjkgMS4xIDEuNiAxLjYgMS4xIDEuOSAwLjQgMS45LTAuNCAxLjYtMS4xIDEuMS0xLjYgMC40LTEuOXpNMTIgN3EwIDEuNi0wLjggM3QtMi4yIDIuMi0zIDAuOC0zLTAuOC0yLjItMi4yLTAuOC0zIDAuOC0zIDIuMi0yLjIgMy0wLjggMyAwLjggMi4yIDIuMiAwLjggM3pcIi8+PC9zdmc+JyxlbW9qaVRyaWdnZXIub25jbGljaz1mdW5jdGlvbigpe1wibm9uZVwiPT09ZW1vamlQaWNrZXIuc3R5bGUuZGlzcGxheT9lbW9qaVBpY2tlci5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjpcImJsb2NrXCI9PT1lbW9qaVBpY2tlci5zdHlsZS5kaXNwbGF5JiYoZW1vamlQaWNrZXIuc3R5bGUuZGlzcGxheT1cIm5vbmVcIiksZW1vamlQaWNrZXIuZm9jdXMoKX0sZW1vamlJbnB1dC5oYXNBdHRyaWJ1dGUoXCJkYXRhLW1ldGVvci1lbW9qaS1sYXJnZVwiKXx8ZW1vamlDb250YWluZXIuYXBwZW5kQ2hpbGQoZW1vamlUcmlnZ2VyKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oZSl7ZW1vamlJbnB1dC5oYXNBdHRyaWJ1dGUoXCJkYXRhLW1ldGVvci1lbW9qaS1sYXJnZVwiKXx8XCJibG9ja1wiPT09ZW1vamlQaWNrZXIuc3R5bGUuZGlzcGxheSYmKGVtb2ppUGlja2VyLmNvbnRhaW5zKGUudGFyZ2V0KXx8ZW1vamlUcmlnZ2VyLmNvbnRhaW5zKGUudGFyZ2V0KXx8KGVtb2ppUGlja2VyLnN0eWxlLmRpc3BsYXk9XCJub25lXCIpKX0pO3ZhciBmYWNlc0NhdGVnb3J5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtmYWNlc0NhdGVnb3J5LnN0eWxlLnBhZGRpbmc9XCIxMHB4IDBweFwiLGZhY2VzQ2F0ZWdvcnkuc3R5bGUubWFyZ2luPVwiMFwiLGZhY2VzQ2F0ZWdvcnkuc3R5bGUubGlzdFN0eWxlPVwibm9uZVwiLGZhY2VzQ2F0ZWdvcnkuc3R5bGUudGV4dEFsaWduPVwibGVmdFwiLGZhY2VzQ2F0ZWdvcnkuc3R5bGUubWFyZ2luTGVmdD1cIjMlXCIsZmFjZXNDYXRlZ29yeS5jbGFzc0xpc3QuYWRkKFwiZmFjZXNcIik7dmFyIGFuaW1hbHNDYXRlZ29yeT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7YW5pbWFsc0NhdGVnb3J5LnN0eWxlLnBhZGRpbmc9XCIxMHB4IDBweFwiLGFuaW1hbHNDYXRlZ29yeS5zdHlsZS5tYXJnaW49XCIwXCIsYW5pbWFsc0NhdGVnb3J5LnN0eWxlLmxpc3RTdHlsZT1cIm5vbmVcIixhbmltYWxzQ2F0ZWdvcnkuc3R5bGUudGV4dEFsaWduPVwibGVmdFwiLGFuaW1hbHNDYXRlZ29yeS5zdHlsZS5tYXJnaW5MZWZ0PVwiMyVcIixhbmltYWxzQ2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChcImFuaW1hbHNcIiksYW5pbWFsc0NhdGVnb3J5LnN0eWxlLmRpc3BsYXk9XCJub25lXCI7dmFyIGZvb2RDYXRlZ29yeT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7Zm9vZENhdGVnb3J5LnN0eWxlLnBhZGRpbmc9XCIxMHB4IDBweFwiLGZvb2RDYXRlZ29yeS5zdHlsZS5tYXJnaW49XCIwXCIsZm9vZENhdGVnb3J5LnN0eWxlLmxpc3RTdHlsZT1cIm5vbmVcIixmb29kQ2F0ZWdvcnkuc3R5bGUudGV4dEFsaWduPVwibGVmdFwiLGZvb2RDYXRlZ29yeS5zdHlsZS5tYXJnaW5MZWZ0PVwiMyVcIixmb29kQ2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChcImZvb2RcIiksZm9vZENhdGVnb3J5LnN0eWxlLmRpc3BsYXk9XCJub25lXCI7dmFyIHNwb3J0Q2F0ZWdvcnk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO3Nwb3J0Q2F0ZWdvcnkuc3R5bGUucGFkZGluZz1cIjEwcHggMHB4XCIsc3BvcnRDYXRlZ29yeS5zdHlsZS5tYXJnaW49XCIwXCIsc3BvcnRDYXRlZ29yeS5zdHlsZS5saXN0U3R5bGU9XCJub25lXCIsc3BvcnRDYXRlZ29yeS5zdHlsZS50ZXh0QWxpZ249XCJsZWZ0XCIsc3BvcnRDYXRlZ29yeS5zdHlsZS5tYXJnaW5MZWZ0PVwiMyVcIixzcG9ydENhdGVnb3J5LmNsYXNzTGlzdC5hZGQoXCJzcG9ydFwiKSxzcG9ydENhdGVnb3J5LnN0eWxlLmRpc3BsYXk9XCJub25lXCI7dmFyIHRyYW5zcG9ydENhdGVnb3J5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTt0cmFuc3BvcnRDYXRlZ29yeS5zdHlsZS5wYWRkaW5nPVwiMTBweCAwcHhcIix0cmFuc3BvcnRDYXRlZ29yeS5zdHlsZS5tYXJnaW49XCIwXCIsdHJhbnNwb3J0Q2F0ZWdvcnkuc3R5bGUubGlzdFN0eWxlPVwibm9uZVwiLHRyYW5zcG9ydENhdGVnb3J5LnN0eWxlLnRleHRBbGlnbj1cImxlZnRcIix0cmFuc3BvcnRDYXRlZ29yeS5zdHlsZS5tYXJnaW5MZWZ0PVwiMyVcIix0cmFuc3BvcnRDYXRlZ29yeS5jbGFzc0xpc3QuYWRkKFwidHJhbnNwb3J0XCIpLHRyYW5zcG9ydENhdGVnb3J5LnN0eWxlLmRpc3BsYXk9XCJub25lXCI7dmFyIG9iamVjdHNDYXRlZ29yeT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7b2JqZWN0c0NhdGVnb3J5LnN0eWxlLnBhZGRpbmc9XCIxMHB4IDBweFwiLG9iamVjdHNDYXRlZ29yeS5zdHlsZS5tYXJnaW49XCIwXCIsb2JqZWN0c0NhdGVnb3J5LnN0eWxlLmxpc3RTdHlsZT1cIm5vbmVcIixvYmplY3RzQ2F0ZWdvcnkuc3R5bGUudGV4dEFsaWduPVwibGVmdFwiLG9iamVjdHNDYXRlZ29yeS5zdHlsZS5tYXJnaW5MZWZ0PVwiMyVcIixvYmplY3RzQ2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChcIm9iamVjdHNcIiksb2JqZWN0c0NhdGVnb3J5LnN0eWxlLmRpc3BsYXk9XCJub25lXCI7dmFyIGVtb2ppQ2F0ZWdvcnk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO2Vtb2ppQ2F0ZWdvcnkuc3R5bGUucGFkZGluZz1cIjBweFwiLGVtb2ppQ2F0ZWdvcnkuc3R5bGUubWFyZ2luPVwiMFwiLGVtb2ppQ2F0ZWdvcnkuc3R5bGUuZGlzcGxheT1cInRhYmxlXCIsZW1vamlDYXRlZ29yeS5zdHlsZS53aWR0aD1cIjEwMCVcIixlbW9qaUNhdGVnb3J5LnN0eWxlLmJhY2tncm91bmQ9XCIjZWZmMGYxXCIsZW1vamlDYXRlZ29yeS5zdHlsZS5saXN0U3R5bGU9XCJub25lXCIsZW1vamlDYXRlZ29yeS5jbGFzc0xpc3QuYWRkKFwiY2F0ZWdvcnlcIik7dmFyIGVtb2ppQ2F0ZWdvcmllcz1uZXcgQXJyYXk7ZW1vamlDYXRlZ29yaWVzLnB1c2goe25hbWU6XCJmYWNlc1wiLHN2ZzonPHN2ZyBpZD1cImZhY2VzXCIgZGF0YS1uYW1lPVwiTGF5ZXIgMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDE1MCAxNTBcIj48cGF0aCBpZD1cImZhY2VzXCIgZD1cIk03NC4zNCwxMjguNDhhNTMuNSw1My41LDAsMSwxLDM3Ljg0LTE1LjY3LDUzLjE2LDUzLjE2LDAsMCwxLTM3Ljg0LDE1LjY3Wm0wLTk3Ljg5YTQ0LjQsNDQuNCwwLDEsMCwzMS40LDEzLDQ0LjA3LDQ0LjA3LDAsMCwwLTMxLjQtMTNaXCIvPjxwYXRoIGlkPVwiZmFjZXNcIiBkPVwiTTc0LjM1LDEwOEEzMy4wNywzMy4wNywwLDAsMSw0MS4yOSw3NWEyLjI4LDIuMjgsMCwwLDEsMi4yNy0yLjI4aDBBMi4yNywyLjI3LDAsMCwxLDQ1LjgzLDc1YTI4LjUyLDI4LjUyLDAsMCwwLDU3LDAsMi4yNywyLjI3LDAsMCwxLDQuNTQsMEEzMy4wOSwzMy4wOSwwLDAsMSw3NC4zNSwxMDhaXCIvPjxwYXRoIGlkPVwiZmFjZXNcIiBkPVwiTTU4Ljg0LDYyYTYuODEsNi44MSwwLDEsMCw2LjgxLDYuODFBNi44MSw2LjgxLDAsMCwwLDU4Ljg0LDYyWlwiLz48cGF0aCBpZD1cImZhY2VzXCIgZD1cIk04OS44Nyw2MmE2LjgxLDYuODEsMCwxLDAsNi44MSw2LjgxQTYuODIsNi44MiwwLDAsMCw4OS44Nyw2MlpcIi8+PC9zdmc+J30pLGVtb2ppQ2F0ZWdvcmllcy5wdXNoKHtuYW1lOlwiYW5pbWFsc1wiLHN2ZzonPHN2ZyBpZD1cImFuaW1hbHNcIiBkYXRhLW5hbWU9XCJMYXllciAxXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMTUwIDE1MFwiPjxwYXRoIGlkPVwiYW5pbWFsc1wiIGQ9XCJNNTkuOSw5MS43NWgwYy0yMi40NiwwLTQxLjgyLTE5LjM0LTQ0LjA5LTQ0QTUyLjEsNTIuMSwwLDAsMSwxNiwzNi44YTQuNTEsNC41MSwwLDAsMSwyLjYzLTMuNjIsMzkuNzksMzkuNzksMCwwLDEsMTIuNzQtMy4zN2MyMy45Mi0yLjE1LDQ1LjM1LDE3LjgzLDQ3Ljc0LDQzLjg2YTUyLjc3LDUyLjc3LDAsMCwxLS4xNSwxMC45Myw0LjU2LDQuNTYsMCwwLDEtMi42NCwzLjYyLDM5LjY3LDM5LjY3LDAsMCwxLTEyLjczLDMuMzZjLTEuMjMuMTEtMi40NS4xNy0zLjY2LjE3Wk0yNC43Niw0MC40OWE0MS4yOSw0MS4yOSwwLDAsMCwuMDksNi40QzI2LjcsNjcsNDIuMDksODIuNjYsNTkuOSw4Mi42N2gwYy45NCwwLDEuODgsMCwyLjgzLS4xNGEzMC4zOSwzMC4zOSwwLDAsMCw3LjQxLTEuNjIsNDEuMTQsNDEuMTQsMCwwLDAtLjExLTYuNEM2OC4wOSw1My4zOCw1MS4xMSwzNy4wOCwzMi4xNywzOC44NmEzMC43OCwzMC43OCwwLDAsMC03LjQxLDEuNjNaXCIvPjxwYXRoIGlkPVwiYW5pbWFsc1wiIGQ9XCJNMzYuNjgsMTI1LjY0YTQuNTMsNC41MywwLDAsMS00LjMzLTMuMTcsNTMuMzIsNTMuMzIsMCwwLDEtMi4yNi0xMUE1MC40Miw1MC40MiwwLDAsMSwzOS41MSw3Ni42YzcuMzUtOS45MSwxNy44NC0xNiwyOS41LTE3LDEuMTYtLjExLDIuMzMtLjEzLDMuNDctLjEzYTQuNTQsNC41NCwwLDAsMSw0LjMzLDMuMTYsNTEuNTksNTEuNTksMCwwLDEsMi4yNywxMS4wOCw1MC4zOSw1MC4zOSwwLDAsMS05LjQyLDM0LjhjLTcuMzUsOS45MS0xNy44MywxNi0yOS41LDE3YTE3LjYzLDE3LjYzLDAsMCwxLTMuNDguMTJaTTY5LjA5LDY4LjY5QTMyLjQxLDMyLjQxLDAsMCwwLDQ2LjgsODJhNDIuNTcsNDIuNTcsMCwwLDAtNi43MSwzNC4zOCwzMi4zOCwzMi4zOCwwLDAsMCwyMi4yOC0xMy4zMkE0MS4zNSw0MS4zNSwwLDAsMCw3MCw3NC41MWEzOS4zOCwzOS4zOCwwLDAsMC0uOTQtNS44MlpcIi8+PHBhdGggaWQ9XCJhbmltYWxzXCIgZD1cIk05MC4yNyw5MS43NWMtMS4yMiwwLTIuNDMtLjA2LTMuNjYtLjE3YTM5LjY3LDM5LjY3LDAsMCwxLTEyLjczLTMuMzYsNC41Nyw0LjU3LDAsMCwxLTIuNjQtMy42MSw1My4zOCw1My4zOCwwLDAsMS0uMTctMTAuOTNjMi40MS0yNiwyMy43LTQ2LjA3LDQ3Ljc2LTQzLjg3YTM5Ljc0LDM5Ljc0LDAsMCwxLDEyLjczLDMuMzcsNC41Nyw0LjU3LDAsMCwxLDIuNjQsMy42Miw1My4zNSw1My4zNSwwLDAsMSwuMTYsMTAuOTJjLTIuMjgsMjQuNjktMjEuNjUsNDQtNDQuMDksNDRaTTgwLDgwLjkxYTMwLjU3LDMwLjU3LDAsMCwwLDcuNDIsMS42MmMxOS4wNywxLjc4LDM1LjkyLTE0LjUzLDM3Ljg3LTM1LjY0YTQyLjU1LDQyLjU1LDAsMCwwLC4xLTYuNEEzMC44NiwzMC44NiwwLDAsMCwxMTgsMzguODZDOTksMzcuMDcsODIuMDYsNTMuMzgsODAuMTIsNzQuNTFhNDMuOTEsNDMuOTEsMCwwLDAtLjEsNi40WlwiLz48cGF0aCBpZD1cImFuaW1hbHNcIiBkPVwiTTExMy40OSwxMjUuNjRoMGMtMS4xNiwwLTIuMywwLTMuNDYtLjEyLTIzLjktMi4yMS00MS4zNi0yNS40Ny0zOC45NC01MS44NUE1My41Miw1My41MiwwLDAsMSw3My4zNCw2Mi42YTQuNTUsNC41NSwwLDAsMSw0LjMzLTMuMTZjMS4xNiwwLDIuMzQsMCwzLjUxLjEzLDExLjY0LDEuMDcsMjIuMTEsNy4xMiwyOS40OCwxN2E1MC41MSw1MC41MSwwLDAsMSw5LjQyLDM0LjgxLDUzLjUxLDUzLjUxLDAsMCwxLTIuMjYsMTEsNC41NCw0LjU0LDAsMCwxLTQuMzMsMy4xOVpNODEuMDgsNjguNjlhNDIuNTMsNDIuNTMsMCwwLDAtMSw1LjgyYy0xLjk0LDIxLjEsMTEuNDUsMzkuNzEsMjkuOTUsNDEuODhBNDIuMzgsNDIuMzgsMCwwLDAsMTAzLjM2LDgyLDMyLjQyLDMyLjQyLDAsMCwwLDgxLjA4LDY4LjY5WlwiLz48cGF0aCBpZD1cImFuaW1hbHNcIiBkPVwiTTc1LjA4LDQ1LjQ1YTcuODMsNy44MywwLDEsMCw3LjgzLDcuODMsNy44Myw3LjgzLDAsMCwwLTcuODMtNy44M1pcIi8+PHBhdGggaWQ9XCJhbmltYWxzXCIgZD1cIk03Ni4yOSw1MS44OWEyLjI2LDIuMjYsMCwwLDEtMi4xNC0zQTQ2LDQ2LDAsMCwxLDkyLjgyLDI1LjM0YTIuMjcsMi4yNywwLDEsMSwyLjQsMy44NkE0MS40LDQxLjQsMCwwLDAsNzguNDMsNTAuMzlhMi4yOCwyLjI4LDAsMCwxLTIuMTQsMS41WlwiLz48cGF0aCBpZD1cImFuaW1hbHNcIiBkPVwiTTczLjg3LDUxLjg5YTIuMjgsMi4yOCwwLDAsMS0yLjE0LTEuNUE0MS4zNSw0MS4zNSwwLDAsMCw1NC45NCwyOS4yYTIuMjcsMi4yNywwLDAsMSwyLjM5LTMuODZBNDYsNDYsMCwwLDEsNzYsNDguODVhMi4yOCwyLjI4LDAsMCwxLTEuMzcsMi45MSwyLjMxLDIuMzEsMCwwLDEtLjc3LjEzWlwiLz48L3N2Zz4nfSksZW1vamlDYXRlZ29yaWVzLnB1c2goe25hbWU6XCJmb29kXCIsc3ZnOic8c3ZnIGlkPVwiZm9vZFwiIGRhdGEtbmFtZT1cIkxheWVyIDFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAxNTAgMTUwXCI+PHBhdGggaWQ9XCJmb29kXCIgZD1cIk0xMDQsMjAuNzZoLjE1YzE1LjgzLjUyLDI0LjA4LDIxLjQ4LDI0LjA3LDMyLjU2LjI2LDEyLjQyLTEwLjcyLDIzLjU1LTI0LDI0LjIxYTMuNTMsMy41MywwLDAsMS0uNDYsMGMtMTMuMjUtLjY2LTI0LjIzLTExLjgtMjQtMjQuMywwLTExLDguMjYtMzEuOTUsMjQuMDctMzIuNDdabTAsNDcuNjljOC4yNS0uNTQsMTUuMy03LjUxLDE1LjE0LTE1LDAtOC4xMi02LjIyLTIzLjEtMTUuMTQtMjMuNTctOC45LjQ2LTE1LjE0LDE1LjQ1LTE1LjE0LDIzLjQ4LS4xNCw3LjYxLDYuOSwxNC41OSwxNS4xNCwxNS4xM1pcIi8+PHBhdGggaWQ9XCJmb29kXCIgZD1cIk05Ny4xOSw2OS4yMWguMTRhNC41Myw0LjUzLDAsMCwxLDQuNCw0LjY4bC0xLjQ4LDQ2LjkyYTEuNTksMS41OSwwLDAsMCwuNSwxLjA2LDQuNiw0LjYsMCwwLDAsMy4yNSwxLjE5aDBhNC41Nyw0LjU3LDAsMCwwLDMuMjYtMS4yLDEuNTMsMS41MywwLDAsMCwuNDktMWwtMS40OC00Ni45NWE0LjU0LDQuNTQsMCwxLDEsOS4wOC0uMjhsMS40Nyw0Ni45MWExMC40MiwxMC40MiwwLDAsMS0zLDcuNjUsMTMuNjUsMTMuNjUsMCwwLDEtOS44MSw0aDBhMTMuNTgsMTMuNTgsMCwwLDEtOS43OS00LDEwLjQyLDEwLjQyLDAsMCwxLTMtNy42N2wxLjQ4LTQ2Ljg5YTQuNTMsNC41MywwLDAsMSw0LjUzLTQuNFpcIi8+PHBhdGggaWQ9XCJmb29kXCIgZD1cIk00MS44NCw2OS4yMUg0MmE0LjUzLDQuNTMsMCwwLDEsNC40LDQuNjhMNDQuOSwxMjAuODFhMS41NywxLjU3LDAsMCwwLC41LDEuMDYsNC42LDQuNiwwLDAsMCwzLjI1LDEuMTloMGE0LjUxLDQuNTEsMCwwLDAsMy4yNC0xLjE5LDEuNDgsMS40OCwwLDAsMCwuNS0xTDUwLjkzLDczLjg5YTQuNTMsNC41MywwLDAsMSw0LjM5LTQuNjhBNC40LDQuNCwwLDAsMSw2MCw3My42MWwxLjQ4LDQ2LjkxYTEwLjQ5LDEwLjQ5LDAsMCwxLTMsNy42NiwxMy41NywxMy41NywwLDAsMS05Ljc4LDRoMGExMy41OSwxMy41OSwwLDAsMS05Ljc4LTQsMTAuNDgsMTAuNDgsMCwwLDEtMy03LjY3bDEuNDgtNDYuOWE0LjU0LDQuNTQsMCwwLDEsNC41NC00LjRaXCIvPjxwYXRoIGlkPVwiZm9vZFwiIGQ9XCJNMjguNTksMjAuNzZhNC41NCw0LjU0LDAsMCwxLDQuNTQsNC41NFY1MWExNS41MiwxNS41MiwwLDAsMCwzMSwwVjI1LjNhNC41NSw0LjU1LDAsMCwxLDkuMDksMFY1MWEyNC42MSwyNC42MSwwLDEsMS00OS4yMSwwVjI1LjNhNC41NCw0LjU0LDAsMCwxLDQuNTQtNC41NFpcIi8+PHBhdGggaWQ9XCJmb29kXCIgZD1cIk01NS4zNCwyMC43NmE0LjU0LDQuNTQsMCwwLDEsNC41NCw0LjU0djE5YTQuNTQsNC41NCwwLDEsMS05LjA4LDB2LTE5YTQuNTQsNC41NCwwLDAsMSw0LjU0LTQuNTRaXCIvPjxwYXRoIGlkPVwiZm9vZFwiIGQ9XCJNNDIsMjAuNzZhNC41NCw0LjU0LDAsMCwxLDQuNTQsNC41NHYxOWE0LjU0LDQuNTQsMCwxLDEtOS4wOCwwdi0xOUE0LjU0LDQuNTQsMCwwLDEsNDIsMjAuNzZaXCIvPjwvc3ZnPid9KSxlbW9qaUNhdGVnb3JpZXMucHVzaCh7bmFtZTpcInNwb3J0XCIsc3ZnOic8c3ZnIGlkPVwic3BvcnRcIiBkYXRhLW5hbWU9XCJMYXllciAxXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMTUwIDE1MFwiPjxwYXRoIGlkPVwic3BvcnRcIiBkPVwiTTc1LjM1LDEzMC4yNGE1My40OSw1My40OSwwLDEsMSw1My40OC01My40OSw1My41NSw1My41NSwwLDAsMS01My40OCw1My40OVptMC05Ny44OWE0NC40MSw0NC40MSwwLDEsMCw0NC40LDQ0LjQsNDQuMSw0NC4xLDAsMCwwLTQ0LjQtNDQuNFpcIi8+PHBhdGggaWQ9XCJzcG9ydFwiIGQ9XCJNMTE5LjI0LDg0LjA4QTUxLjI5LDUxLjI5LDAsMCwxLDY4LDMyLjg2YTQ5LjQ0LDQ5LjQ0LDAsMCwxLC4yNi01LDIuMjYsMi4yNiwwLDAsMSwyLTJjMS42Ni0uMTYsMy4zNC0uMjUsNS0uMjVhNTEuMjYsNTEuMjYsMCwwLDEsNTEuMjEsNTEuMjFjMCwxLjcxLS4wOSwzLjM4LS4yNSw1YTIuMjgsMi4yOCwwLDAsMS0yLDJjLTEuNjUuMTYtMy4zMy4yNS01LC4yNVpNNzIuNjQsMzAuMTZjLS4wNi45LS4wOCwxLjc5LS4wOCwyLjdhNDYuNzMsNDYuNzMsMCwwLDAsNDYuNjgsNDYuNjhxMS4zNywwLDIuNy0uMDljLjA2LS44OS4wOC0xLjc5LjA4LTIuN0E0Ni43Miw0Ni43MiwwLDAsMCw3NS4zNSwzMC4wOGMtLjkxLDAtMS44MiwwLTIuNzEuMDhaXCIvPjxwYXRoIGlkPVwic3BvcnRcIiBkPVwiTTc1LjM1LDEyOEE1MS4yOCw1MS4yOCwwLDAsMSwyNC4xMiw3Ni43NmMwLTEuNy4xLTMuMzguMjUtNWEyLjI5LDIuMjksMCwwLDEsMi0yYzEuNjYtLjE2LDMuMzMtLjI1LDUuMDUtLjI1YTUxLjI3LDUxLjI3LDAsMCwxLDUxLjIxLDUxLjIyYzAsMS42OS0uMDksMy4zNy0uMjUsNWEyLjI3LDIuMjcsMCwwLDEtMiwyYy0xLjY2LjE2LTMuMzIuMjUtNSwuMjVaTTI4Ljc1LDc0LjA1Yy0uMDUuOS0uMDksMS44LS4wOSwyLjcxYTQ2Ljc0LDQ2Ljc0LDAsMCwwLDQ2LjY5LDQ2LjY3Yy45MSwwLDEuOCwwLDIuNy0uMDgsMC0uOS4wOC0xLjguMDgtMi43QTQ2LjczLDQ2LjczLDAsMCwwLDMxLjQ2LDc0Yy0uOTEsMC0xLjgxLDAtMi43MS4wOFpcIi8+PHBvbHlnb24gaWQ9XCJzcG9ydFwiIHBvaW50cz1cIjQyLjY5IDExMi42MSAzOS40OCAxMDkuNCAxMDggNDAuODggMTExLjIxIDQ0LjEgNDIuNjkgMTEyLjYxIDQyLjY5IDExMi42MVwiLz48L3N2Zz4nfSksZW1vamlDYXRlZ29yaWVzLnB1c2goe25hbWU6XCJ0cmFuc3BvcnRcIixzdmc6JzxzdmcgaWQ9XCJ0cmFuc3BvcnRcIiBkYXRhLW5hbWU9XCJMYXllciAxXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMTUwIDE1MFwiPjxwYXRoIGlkPVwidHJhbnNwb3J0XCIgZD1cIk0xMjAuNywxMTZIMzFhNC41NSw0LjU1LDAsMCwxLTQuNTQtNC41NVY1NC4yOEEzMS44MiwzMS44MiwwLDAsMSw1OC4yNSwyMi40OWgzNS4yYTMxLjgzLDMxLjgzLDAsMCwxLDMxLjgsMzEuNzl2NTcuMTVBNC41NSw0LjU1LDAsMCwxLDEyMC43LDExNlptLTg1LjE2LTkuMDloODAuNjJWNTQuMjhBMjIuNzQsMjIuNzQsMCwwLDAsOTMuNDUsMzEuNTdINTguMjVBMjIuNzQsMjIuNzQsMCwwLDAsMzUuNTQsNTQuMjh2NTIuNjFaXCIvPjxwYXRoIGlkPVwidHJhbnNwb3J0XCIgZD1cIk00OS4zNSwxMjkuMjNjLTguNTMsMC0xMy42Mi0yLjc3LTEzLjYyLTcuNDFWMTE1LjZhNC41NCw0LjU0LDAsMSwxLDkuMDgsMHY0LjA2YTIxLjMyLDIxLjMyLDAsMCwwLDkuMDksMFYxMTUuNmE0LjU0LDQuNTQsMCwwLDEsOS4wOCwwdjYuMjJjMCw0LjY0LTUuMDksNy40MS0xMy42Myw3LjQxWlwiLz48cGF0aCBpZD1cInRyYW5zcG9ydFwiIGQ9XCJNMTAyLjM0LDEyOS4yM2MtOC41MywwLTEzLjYyLTIuNzctMTMuNjItNy40MVYxMTUuNmE0LjU0LDQuNTQsMCwwLDEsOS4wOCwwdjQuMDZhMjEuMjgsMjEuMjgsMCwwLDAsOS4wOCwwVjExNS42YTQuNTUsNC41NSwwLDAsMSw5LjA5LDB2Ni4yMmMwLDQuNjQtNS4wOSw3LjQxLTEzLjYzLDcuNDFaXCIvPjxwYXRoIGlkPVwidHJhbnNwb3J0XCIgZD1cIk05Ny44MSw0NC44M0g1My45YTQuNTUsNC41NSwwLDEsMSwwLTkuMDlIOTcuODFhNC41NSw0LjU1LDAsMCwxLDAsOS4wOVpcIi8+PHBhdGggaWQ9XCJ0cmFuc3BvcnRcIiBkPVwiTTU0LjI4LDg0LjJBNi44LDYuOCwwLDEsMCw2MS4wNyw5MWE2LjgsNi44LDAsMCwwLTYuNzktNi44WlwiLz48cGF0aCBpZD1cInRyYW5zcG9ydFwiIGQ9XCJNOTcuNDMsODQuMmE2LjgsNi44LDAsMSwwLDYuNzksNi44LDYuOCw2LjgsMCwwLDAtNi43OS02LjhaXCIvPjxwYXRoIGlkPVwidHJhbnNwb3J0XCIgZD1cIk0xMDcuMDgsODFINDQuNjNhNi44Miw2LjgyLDAsMCwxLTYuODItNi44MlY1NC4yOGE2LjgyLDYuODIsMCwwLDEsNi44Mi02LjgxaDYyLjQ1YTYuODIsNi44MiwwLDAsMSw2LjgxLDYuODFWNzQuMTVBNi44Myw2LjgzLDAsMCwxLDEwNy4wOCw4MVpNNDQuNjMsNTJhMi4yOCwyLjI4LDAsMCwwLTIuMjgsMi4yN1Y3NC4xNWEyLjI4LDIuMjgsMCwwLDAsMi4yOCwyLjI3aDYyLjQ1YTIuMjcsMi4yNywwLDAsMCwyLjI3LTIuMjdWNTQuMjhBMi4yNywyLjI3LDAsMCwwLDEwNy4wOCw1MlpcIi8+PC9zdmc+J30pLGVtb2ppQ2F0ZWdvcmllcy5wdXNoKHtuYW1lOlwib2JqZWN0c1wiLHN2ZzonPHN2ZyBpZD1cIm9iamVjdHNcIiBkYXRhLW5hbWU9XCJMYXllciAxXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMTUwIDE1MFwiPjxwYXRoIGlkPVwib2JqZWN0c1wiIGQ9XCJNMTA3Ljc4LDEyOWE0LjU1LDQuNTUsMCwwLDEtMi42Ny0uODdsLTMwLTIxLjc5LTMwLDIxLjc5YTQuNTMsNC41MywwLDAsMS01LjM0LDAsNC41OCw0LjU4LDAsMCwxLTEuNjUtNS4wOEw0OS41OSw4Ny44MiwxOS42LDY2YTQuNTQsNC41NCwwLDAsMSwyLjY3LTguMjJINTkuMzRMNzAuOCwyMi41NWE0LjU1LDQuNTUsMCwwLDEsOC42NCwwTDkwLjg5LDU3LjgxSDEyOEE0LjU0LDQuNTQsMCwwLDEsMTMwLjYzLDY2bC0zMCwyMS43OSwxMS40NiwzNS4yNWE0LjU1LDQuNTUsMCwwLDEtNC4zMiw2Wk03NS4xMiw5Ni4yYTQuNTMsNC41MywwLDAsMSwyLjY3Ljg3bDIxLjM1LDE1LjUxTDkxLDg3LjQ5YTQuNTUsNC41NSwwLDAsMSwxLjY1LTUuMDhMMTE0LDY2Ljg5SDg3LjU5YTQuNTQsNC41NCwwLDAsMS00LjMyLTMuMTNsLTguMTUtMjUuMUw2Nyw2My43NmE0LjUzLDQuNTMsMCwwLDEtNC4zMiwzLjEzSDM2LjI1TDU3LjYxLDgyLjQxYTQuNTQsNC41NCwwLDAsMSwxLjY1LDUuMDhsLTguMTcsMjUuMDlMNzIuNDUsOTcuMDdhNC41Myw0LjUzLDAsMCwxLDIuNjctLjg3WlwiLz48L3N2Zz4nfSk7ZW1vamlDYXRlZ29yaWVzLm1hcChmdW5jdGlvbihpdGVtKXt2YXIgZW1vamlMaW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2Vtb2ppTGluay5zdHlsZS50ZXh0RGVjb3JhdGlvbj1cIm5vbmVcIixlbW9qaUxpbmsuc3R5bGUucGFkZGluZz1cIjVweFwiLGVtb2ppTGluay5zdHlsZS5wb3NpdGlvbj1cImluaXRpYWxcIixlbW9qaUxpbmsuc3R5bGUuZm9udFNpemU9XCIyNHB4XCIsZW1vamlMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIixcImphdmFzY3JpcHQ6dm9pZCgwKVwiKSxlbW9qaUxpbmsuc3R5bGUuZGlzcGxheT1cInRhYmxlLWNlbGxcIixlbW9qaUxpbmsuc3R5bGUudGV4dEFsaWduPVwiY2VudGVyXCIsZW1vamlMaW5rLmlkPVN0cmluZyhpdGVtLm5hbWUpLFwiZmFjZXNcIj09U3RyaW5nKGl0ZW0ubmFtZSkmJihlbW9qaUxpbmsuc3R5bGUuYmFja2dyb3VuZD1cIiNjMmMyYzJcIiksZW1vamlMaW5rLmlubmVySFRNTD1TdHJpbmcoaXRlbS5zdmcpLGVtb2ppTGluay5vbm1vdXNlZG93bj1jbGlja0NhdGVnb3J5LGVtb2ppQ2F0ZWdvcnkuYXBwZW5kQ2hpbGQoZW1vamlMaW5rKX0pLFsxMjg1MTMsMTI4NTE0LDEyODUxNSwxMjg1MTYsMTI4NTE3LDEyODUxOCwxMjg1MjEsMTI4NTIyLDEyODUyMywxMjg1MjQsMTI4NTI1LDEyODUyNywxMjg1MzAsMTI4NTMxLDEyODUzMiwxMjg1MzQsMTI4NTM2LDEyODUzOCwxMjg1NDAsMTI4NTQxLDEyODU0MiwxMjg1NDQsMTI4NTQ1LDEyODU0NiwxMjg1NDcsMTI4NTQ4LDEyODU0OSwxMjg1NTIsMTI4NTUzLDEyODU1NCwxMjg1NTUsMTI4NTU3LDEyODU2MCwxMjg1NjEsMTI4NTYyLDEyODU2MywxMjg1NjUsMTI4NTY3XS5tYXAoZnVuY3Rpb24oaXRlbSl7dmFyIGVtb2ppTGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtlbW9qaUxpbmsuc3R5bGUudGV4dERlY29yYXRpb249XCJub25lXCIsZW1vamlMaW5rLnN0eWxlLm1hcmdpbj1cIjVweFwiLGVtb2ppTGluay5zdHlsZS5wb3NpdGlvbj1cImluaXRpYWxcIixlbW9qaUxpbmsuc3R5bGUuZm9udFNpemU9XCIyNHB4XCIsZW1vamlMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIixcImphdmFzY3JpcHQ6dm9pZCgwKVwiKSxlbW9qaUxpbmsuaW5uZXJIVE1MPVN0cmluZy5mcm9tQ29kZVBvaW50KGl0ZW0pLGVtb2ppTGluay5vbm1vdXNlZG93bj1jbGlja0xpbmssZmFjZXNDYXRlZ29yeS5hcHBlbmRDaGlsZChlbW9qaUxpbmspfSksWzEyODAxMiwxMjgwMTMsMTI4MDE0LDEyODAxNywxMjgwMTgsMTI4MDIwLDEyODAyMywxMjgwMjQsMTI4MDI1LDEyODAyNiwxMjgwMjcsMTI4MDI4LDEyODAyOSwxMjgwMzAsMTI4MDMxLDEyODAzMiwxMjgwMzMsMTI4MDM0LDEyODAzNSwxMjgwMzYsMTI4MDM3LDEyODAzOCwxMjgwMzksMTI4MDQwLDEyODA0MSwxMjgwNDMsMTI4MDQ0LDEyODA0NSwxMjgwNDYsMTI4MDQ3LDEyODA0OCwxMjgwNDksMTI4MDUwLDEyODA1MSwxMjgwNTIsMTI4MDUzLDEyODA1NCwxMjgwNTUsMTI4MDU2LDEyODA1NywxMjgwNTgsMTI4MDU5LDEyODA2MF0ubWFwKGZ1bmN0aW9uKGl0ZW0pe3ZhciBlbW9qaUxpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7ZW1vamlMaW5rLnN0eWxlLnRleHREZWNvcmF0aW9uPVwibm9uZVwiLGVtb2ppTGluay5zdHlsZS5tYXJnaW49XCI1cHhcIixlbW9qaUxpbmsuc3R5bGUucG9zaXRpb249XCJpbml0aWFsXCIsZW1vamlMaW5rLnN0eWxlLmZvbnRTaXplPVwiMjRweFwiLGVtb2ppTGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsXCJqYXZhc2NyaXB0OnZvaWQoMClcIiksZW1vamlMaW5rLmlubmVySFRNTD1TdHJpbmcuZnJvbUNvZGVQb2ludChpdGVtKSxlbW9qaUxpbmsub25tb3VzZWRvd249Y2xpY2tMaW5rLGFuaW1hbHNDYXRlZ29yeS5hcHBlbmRDaGlsZChlbW9qaUxpbmspfSksWzEyNzgxMywxMjc4MTQsMTI3ODE1LDEyNzgxNiwxMjc4MTcsMTI3ODE4LDEyNzgyMCwxMjc4MjEsMTI3ODIyLDEyNzgyMywxMjc4MjUsMTI3ODI2LDEyNzgyNywxMjc4MjgsMTI3ODI5LDEyNzgzMCwxMjc4MzEsMTI3ODMyLDEyNzgzNiwxMjc4MzcsMTI3ODM4LDEyNzgzOSwxMjc4NDAsMTI3ODQxLDEyNzg0MiwxMjc4NDMsMTI3ODQ0LDEyNzg0NiwxMjc4NDgsMTI3ODQ5LDEyNzg1MCwxMjc4NTEsMTI3ODUyLDEyNzg1MywxMjc4NTYsMTI3ODU4LDEyNzg1OSwxMjc4NjAsMTI3ODYzLDEyNzg2NCwxMjc4NjddLm1hcChmdW5jdGlvbihpdGVtKXt2YXIgZW1vamlMaW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2Vtb2ppTGluay5zdHlsZS50ZXh0RGVjb3JhdGlvbj1cIm5vbmVcIixlbW9qaUxpbmsuc3R5bGUubWFyZ2luPVwiNXB4XCIsZW1vamlMaW5rLnN0eWxlLnBvc2l0aW9uPVwiaW5pdGlhbFwiLGVtb2ppTGluay5zdHlsZS5mb250U2l6ZT1cIjI0cHhcIixlbW9qaUxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLFwiamF2YXNjcmlwdDp2b2lkKDApXCIpLGVtb2ppTGluay5pbm5lckhUTUw9U3RyaW5nLmZyb21Db2RlUG9pbnQoaXRlbSksZW1vamlMaW5rLm9ubW91c2Vkb3duPWNsaWNrTGluayxmb29kQ2F0ZWdvcnkuYXBwZW5kQ2hpbGQoZW1vamlMaW5rKX0pLFsxMjc5MjEsMTI3OTIzLDEyNzkzNCwxMjc5MzUsMTI3OTM2LDEyNzkzNywxMjc5MzgsMTI3OTM5LDEyNzk0MCwxMjc5NDIsMTI3OTQ0LDEyNzk0NiwxMjg2NzUsMTI4NjkyLDEyODY5Myw5OTE3LDk5MTgsOTk3OCwxMjc5MDcsMTI3OTE5LDk5NzFdLm1hcChmdW5jdGlvbihpdGVtKXt2YXIgZW1vamlMaW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2Vtb2ppTGluay5zdHlsZS50ZXh0RGVjb3JhdGlvbj1cIm5vbmVcIixlbW9qaUxpbmsuc3R5bGUubWFyZ2luPVwiNXB4XCIsZW1vamlMaW5rLnN0eWxlLnBvc2l0aW9uPVwiaW5pdGlhbFwiLGVtb2ppTGluay5zdHlsZS5mb250U2l6ZT1cIjI0cHhcIixlbW9qaUxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLFwiamF2YXNjcmlwdDp2b2lkKDApXCIpLGVtb2ppTGluay5pbm5lckhUTUw9U3RyaW5nLmZyb21Db2RlUG9pbnQoaXRlbSksZW1vamlMaW5rLm9ubW91c2Vkb3duPWNsaWNrTGluayxzcG9ydENhdGVnb3J5LmFwcGVuZENoaWxkKGVtb2ppTGluayl9KSxbMTI4NjQxLDEyODY0MiwxMjg2NDYsMTI4NjQ4LDEyODY1MCwxMjg2NTMsMTI4NjU0LDEyODY1NiwxMjg2NjAsMTI4NjYyLDEyODY2NCwxMjg2NjcsMTI4NjY4LDEyODY2OSwxMjg2NzAsMTI4NjcxLDEyODY3MiwxMjg2NzMsMTI4NjQwLDEyODY0MywxMjg2NDQsMTI4NjQ1LDEyODY0NywxMjg2NDksMTI4NjUyLDEyODY1NywxMjg2NTgsMTI4NjU5LDEyODY2MSwxMjg2NjMsMTI4NjY1LDEyODY2NiwxMjg2NzQsMTI4Njc2LDEyODY5MF0ubWFwKGZ1bmN0aW9uKGl0ZW0pe3ZhciBlbW9qaUxpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7ZW1vamlMaW5rLnN0eWxlLnRleHREZWNvcmF0aW9uPVwibm9uZVwiLGVtb2ppTGluay5zdHlsZS5tYXJnaW49XCI1cHhcIixlbW9qaUxpbmsuc3R5bGUucG9zaXRpb249XCJpbml0aWFsXCIsZW1vamlMaW5rLnN0eWxlLmZvbnRTaXplPVwiMjRweFwiLGVtb2ppTGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsXCJqYXZhc2NyaXB0OnZvaWQoMClcIiksZW1vamlMaW5rLmlubmVySFRNTD1TdHJpbmcuZnJvbUNvZGVQb2ludChpdGVtKSxlbW9qaUxpbmsub25tb3VzZWRvd249Y2xpY2tMaW5rLHRyYW5zcG9ydENhdGVnb3J5LmFwcGVuZENoaWxkKGVtb2ppTGluayl9KSxbMTI3ODkwLDEyNzg4MCwxMjc4ODEsMTI3ODg3LDEyNzg5MSwxMjc5MDUsMTI3OTA2LDEyNzkwOCwxMjc5MDksMTI3OTExLDEyNzkxMiwxMjc5MTUsMTI3OTE2LDEyNzkxOCwxMjc5MTksMTI3OTI2LDEyNzkyNywxMjc5MjgsMTI3OTI5LDEyNzkzMCwxMjc5MzEsMTI3OTMyLDEyNzk2OCwxMjc5NzMsMTI3OTc4LDEyODE0NywxMjgxNDgsMTI4MTQ5LDEyODE1MCwxMjgxNTEsMTI4MTUyLDEyODE4NywxMjgxODYsMTI4MTk3LDEyODIxMywxMjgyNDddLm1hcChmdW5jdGlvbihpdGVtKXt2YXIgZW1vamlMaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7ZW1vamlMaS5zdHlsZS5kaXNwbGF5PVwiaW5saW5lLWJsb2NrXCIsZW1vamlMaS5zdHlsZS5tYXJnaW49XCI1cHhcIjt2YXIgZW1vamlMaW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2Vtb2ppTGluay5zdHlsZS50ZXh0RGVjb3JhdGlvbj1cIm5vbmVcIixlbW9qaUxpbmsuc3R5bGUubWFyZ2luPVwiNXB4XCIsZW1vamlMaW5rLnN0eWxlLnBvc2l0aW9uPVwiaW5pdGlhbFwiLGVtb2ppTGluay5zdHlsZS5mb250U2l6ZT1cIjI0cHhcIixlbW9qaUxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLFwiamF2YXNjcmlwdDp2b2lkKDApXCIpLGVtb2ppTGluay5pbm5lckhUTUw9U3RyaW5nLmZyb21Db2RlUG9pbnQoaXRlbSksZW1vamlMaW5rLm9ubW91c2Vkb3duPWNsaWNrTGluayxvYmplY3RzQ2F0ZWdvcnkuYXBwZW5kQ2hpbGQoZW1vamlMaW5rKX0pLGVtb2ppUGlja2VyLmFwcGVuZENoaWxkKGVtb2ppQ2F0ZWdvcnkpLGVtb2ppUGlja2VyLmFwcGVuZENoaWxkKGZhY2VzQ2F0ZWdvcnkpLGVtb2ppUGlja2VyLmFwcGVuZENoaWxkKGFuaW1hbHNDYXRlZ29yeSksZW1vamlQaWNrZXIuYXBwZW5kQ2hpbGQoZm9vZENhdGVnb3J5KSxlbW9qaVBpY2tlci5hcHBlbmRDaGlsZChzcG9ydENhdGVnb3J5KSxlbW9qaVBpY2tlci5hcHBlbmRDaGlsZCh0cmFuc3BvcnRDYXRlZ29yeSksZW1vamlQaWNrZXIuYXBwZW5kQ2hpbGQob2JqZWN0c0NhdGVnb3J5KSxlbW9qaUNvbnRhaW5lci5hcHBlbmRDaGlsZChlbW9qaVBpY2tlcil9fV0pLE1ldGVvckVtb2ppfSgpO21vZHVsZS5leHBvcnRzPU1ldGVvckVtb2ppfSl9LHt9XX0se30sWzFdKSgxKX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tZXRlb3ItZW1vamkvZGlzdC9tZXRlb3JFbW9qaS5taW4uanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdGlmKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==