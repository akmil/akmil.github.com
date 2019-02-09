/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
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

        // todo

    }, {
        key: 'getDefaultConfigs',
        value: function getDefaultConfigs(path, cbError) {
            var url = _consts.CONST.getPath('instagramTaskManager_getDefaultConfigs') + '/' + path.type + '/subtype/' + path.subtype;
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(29)(module)))

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

// function reduceState(taskState, isRuns, $list, item) {
//     const {progress, task_id, type, subtype, status} = item;
//     switch (taskState) {
//         case 'STOPPED':
//             $(`<li class="list-group-item p-0 py-2" data-username="${type}" data-task-id="${task_id}">
//                 <div class="media-body d-flex">
//                     <div class="col task-type">
//                         ${(task_id) ? `<p class="badge badge-secondary my-1">${task_id}</p>` : ''}
//                         <div class="task-progress">
//                             <p class="small my-1">Остановлено</p>
//                             ${(item.status.reason) ? `<p class="my-1">${status.reason}</p>` : ''}
//                         </div>
//                     <button class="btn btn-warning js_btn-delete-task">Удалить</button>
//                     </div>
//                     <!--<div class="col task-subtype">
//                         ${(subtype) ? `<p class="mt-0 mb-1">${subtype}</p>` : ''}
//                     </div>-->
//                 </div>
//             </li>`).appendTo($list);
//             break;

//         default:
//             break;
//     }
// }

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
        } else if (item.status.state === 'PAUSED' && isRuns) {
            $('<li class="list-group-item py-2" data-task-id="' + task_id + '">\n                <div class="card-block">\n                    <h4 class="card-title">\u041D\u0430 \u043F\u0430\u0443\u0437\u0435</h4>\n                    <div class="text-right">\n                        <span class="text-muted">' + _view2.default.getFormattedDateUtil(progress.timestamp) + '</span>\n                    </div>\n                    <span class="text-success">10%</span>\n                    <div class="progress mb-3">\n                        <div class="progress-bar bg-success" role="progressbar" style="width: 10%; height: 6px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>\n                    </div>\n                    <button class="btn btn-warning js_btn-delete-task">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>\n                </div>\n            </li>').appendTo($list);
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

var _apiTaskManager = __webpack_require__(4);

var _apiTaskManager2 = _interopRequireDefault(_apiTaskManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clsConst = {
    currentPageCls: '',
    tasksList: '',
    logsTabBtn: '',
    pagination: '',
    paginationPgNumber: ''
}; /* eslint-disable no-use-before-define */

var $list = '$(clsConst.tasksList)';
var selectCls = 'someClass';
var getUsername = function getUsername() {
    return $('.' + selectCls + ' option:selected').val();
};
var path = {
    username: getUsername()
};
var currentPage = null;
var intervalId = '';

function initHandlerPagination($previous, $next, dataArray) {
    var $wrapper = $(clsConst.pagination);
    var pagination = dataArray.settings.pagination;

    var lastPage = pagination.pages[pagination.pages.length - 1];

    $previous.on('click', function (e) {
        var $liActive = $wrapper.find('li.page-number.active');
        var page = pagination.previous;
        if (!pagination.previous) {
            $previous.addClass('disabled').prop('disabled', 'disabled');
            return;
        }
        currentPage = pagination.previous;
        $liActive.removeClass('active');
        getLogsData($list, path, page);
    });

    $next.on('click', function (e) {
        var $liActive = $wrapper.find('li.page-number.active');
        var currentActiveIdx = $liActive.index();
        var page = pagination.next;
        if (!pagination.next) {
            return;
        }
        currentPage = pagination.next;
        $liActive.removeClass('active');
        if (lastPage <= currentActiveIdx + 1) {
            $(e.target).parent().addClass('disabled');
        }
        if (currentActiveIdx && $previous.hasClass('disabled')) {
            $previous.removeClass('disabled');
        }
        getLogsData($list, path, page);
    });

    $(clsConst.logsTabBtn).on('click', function (e) {
        // at this point of time setInterval is working
        currentPage = 1;
    });
    $(clsConst.pagination + ' ' + clsConst.paginationPgNumber).on('click', function (e) {
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
            if (currentPage <= 1) {
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

function preConfig(cfg) {
    clsConst = cfg;
    $list = $(clsConst.tasksList);
    path.type = cfg.pathType;
    path.subtype = cfg.pathSubType;
}

function init(_selectCls, cfg) {
    if ($(cfg.currentPageCls).length) {
        selectCls = _selectCls;
        preConfig(cfg);
        if (getUsername()) {
            console.log(getUsername());
            getLogsData($list, path);
        } else {
            console.log('select user');
        }
    }
}

/***/ }),
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(27);

var _consts = __webpack_require__(0);

var _pubsubJs = __webpack_require__(5);

var _pubsubJs2 = _interopRequireDefault(_pubsubJs);

var _registerForm = __webpack_require__(22);

var _registerForm2 = _interopRequireDefault(_registerForm);

var _loginForm = __webpack_require__(20);

var _loginPage = __webpack_require__(25);

var _confirmReg = __webpack_require__(15);

var _header = __webpack_require__(18);

var header = _interopRequireWildcard(_header);

var _burgerMenu = __webpack_require__(17);

var burgerMenu = _interopRequireWildcard(_burgerMenu);

var _instagramAccountsList = __webpack_require__(19);

var instagramAccounts = _interopRequireWildcard(_instagramAccountsList);

var _messages = __webpack_require__(21);

var messages = _interopRequireWildcard(_messages);

var _follow = __webpack_require__(16);

var follow = _interopRequireWildcard(_follow);

var _chatBotBlock = __webpack_require__(13);

var chatBot = _interopRequireWildcard(_chatBotBlock);

var _autogreetingMain = __webpack_require__(11);

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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.init = init;

var _consts = __webpack_require__(0);

var _wizardForm = __webpack_require__(9);

var wizardForm = _interopRequireWildcard(_wizardForm);

var _apiTaskManager = __webpack_require__(4);

var _apiTaskManager2 = _interopRequireDefault(_apiTaskManager);

var _autogreetingStatus = __webpack_require__(12);

var chatBotStatus = _interopRequireWildcard(_autogreetingStatus);

var _logs = __webpack_require__(8);

var chatBotLogs = _interopRequireWildcard(_logs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var usernameSelected = '';
var userListInstagram = [];
var selectCls = 'js_logs-accounts';
var speedType = '.js_autogreeting-speed';
var clsConst = {
    currentPageCls: '.autogreeting-page',
    tasksList: '.bot-log-tasks',
    logsTabBtn: '#v-pills-logs-tab',
    pagination: '.logs-pagination',
    paginationPgNumber: '.page-number',
    pathType: _consts.CONST.url.tmTypes.autogreetT,
    pathSubType: _consts.CONST.url.tmTypes.autogreetSubT[0]
};

function onSubmitHandler(e) {
    var fields = $('.chat-bot-text-fields');
    // const keyWords = $el => $el.val()
    //     .trim()
    //     .replace(/ /g, '')
    //     .split(',')
    //     .filter(i => i.length > 0);
    var reqBody = [];
    fields.each(function (idx, item) {
        var message = $(item).find('textarea.chat-words').val();
        // const answer = $(item).find('textarea.chat-messages').val();
        // reqBody.push({'key_words': keyWord, answer});
        reqBody.push(message);
    });
    var nReqBody = {
        'username': usernameSelected || 'the_rostyslav',
        'type': _consts.CONST.url.tmTypes.autogreetT,
        'subtype': _consts.CONST.url.tmTypes.autogreetSubT[0],
        'user_default_config': {
            'task_mode': 'AGGRESSIVE' // todo
        },
        'user_custom_config': {
            'messages': reqBody
        }
    };
    console.log('make request here**', nReqBody, JSON.stringify(nReqBody));
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
        chatBotLogs.init(selectCls, clsConst);
    });
}

/**
 * Init header
 */
function initChatMsg() {
    var tplTextField = function tplTextField(msg) {
        return $('<div class="chat-bot-text-fields mt-2">\n        <div class="row">\n            <div class="col">\n                <textarea class="form-control chat-words" rows="4" placeholder="' + msg + '"></textarea>\n            </div>\n        </div>\n    </div>');
    };

    $('.js_add-chat-bot').on('click', function (e) {
        var lastTextField = $('.chat-bot-text-fields').last();
        var msg = 'Введите приветствие';
        tplTextField(msg).insertAfter(lastTextField);
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
        chatBotLogs.init(selectCls, clsConst);
    });
}

function setUserName(state) {
    // console.log('getTasksData', state.username);
    usernameSelected = state.username;
}
var state = {
    user_default_config: {
        task_mode: 'SAFE'
    }
};
function getDataStepSpeed() {
    // const users = $('#followers').val()
    //     .trim()
    //     .replace(/ /g, '')
    //     .split(',')
    //     .filter(i => i.length > 0);

    // state['user_custom_config'] = {
    //     users
    // };
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
    var path = {
        type: clsConst.pathType,
        subtype: clsConst.pathSubType
    };
    // draw criteria
    _apiTaskManager2.default.getDefaultConfigs(path).then(function (result) {
        // console.log('getDefaultConfigs');
        if (result.status.state === 'ok') {
            fillSpeedList($(speedType), result.data.found);
            // speed radio-btn group
            $(speedType + ' input[type=radio]').on('click', function () {
                var value = $(this).attr('value');
                state.user_default_config = {
                    task_mode: value.toUpperCase()
                };
            });
        }
    });
}

function stepReducer(stepNumber, state) {
    switch (stepNumber) {
        case 0:
            setUserName(state);
            getDataStepSpeed();
            console.log(state, stepNumber);
            break;
        case 1:
            console.log(state, stepNumber);
            break;
        default:
            console.log('default', stepNumber);
    }
}

function init() {
    if ($(clsConst.currentPageCls).length) {
        var wizardCfg = {
            stepReducer: stepReducer,
            onSubmitHandler: onSubmitHandler
        };
        wizardForm.init(wizardCfg);
        initChatMsg();
        window.PubSub.subscribe(_consts.CONST.events.instagramAccouns.INSTAGRAM_ACCOUNS_RENDERED, function (e, dataObj) {
            console.log('INSTAGRAM_ACCOUNS_RENDERED', dataObj);
            userListInstagram = dataObj.dataArray;
            chatBotStatus.init(clsConst);
        });
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

function init(cfg) {
    if ($(cfg.currentPageCls).length) {
        var pathType = cfg.pathType,
            pathSubType = cfg.pathSubType;

        var path = {
            type: pathType,
            subtype: pathSubType };
        var wrappers = {
            $runs: $('.tasks-runs'),
            $stopped: $('.tasks-stopped')
        };
        (0, _followStatus.getTasksData)(wrappers, path);
        window.PubSub.subscribe(_consts.CONST.events.tasks.NEW_TASK_CREATED, function (eventName, data) {
            console.log('getTasksData **NEW_TASK_CREATED**');
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

var _consts = __webpack_require__(0);

var _wizardForm = __webpack_require__(9);

var wizardForm = _interopRequireWildcard(_wizardForm);

var _apiTaskManager = __webpack_require__(4);

var _apiTaskManager2 = _interopRequireDefault(_apiTaskManager);

var _chatBotStatus = __webpack_require__(14);

var chatBotStatus = _interopRequireWildcard(_chatBotStatus);

var _logs = __webpack_require__(8);

var chatBotLogs = _interopRequireWildcard(_logs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var usernameSelected = '';
var userListInstagram = [];
var selectCls = 'js_logs-accounts';
var clsConst = {
    currentPageCls: '.chat-bot-page',
    tasksList: '.bot-log-tasks',
    logsTabBtn: '#v-pills-logs-tab',
    pagination: '.logs-pagination',
    paginationPgNumber: '.page-number',
    pathType: _consts.CONST.url.tmTypes.autogreetT,
    pathSubType: _consts.CONST.url.tmTypes.autogreetSubT[0]
};

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
        chatBotLogs.init(selectCls, clsConst);
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
        chatBotLogs.init(selectCls, clsConst);
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.init = init;

var _consts = __webpack_require__(0);

var _followStatus = __webpack_require__(6);

function init() {
    if ($('.chat-bot-page').length) {
        var path = {
            type: _consts.CONST.url.tmTypes.chatBotT,
            subtype: _consts.CONST.url.tmTypes.chatBotSubT[0]
        };
        var wrappers = {
            $runs: $('.tasks-runs'),
            $stopped: $('.tasks-stopped')
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
/* 15 */
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
/* 16 */
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

__webpack_require__(26);

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
    // console.log(usersName);
    var path = {
        type: _consts.CONST.url.tmTypes.followingT,
        subtype: _consts.CONST.url.tmTypes.followingSubT[0]
    };
    getTasksData(path);
}

function getDataStepSpeed() {
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
    var path = {
        type: 'FOLLOWING',
        subtype: 'FOLLOWING_LIST'
    };

    // draw criteria
    _apiTaskManager2.default.getDefaultConfigs(path).then(function (result) {
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
            getDataStepSpeed();
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
/* 17 */
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
/* 18 */
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
/* 19 */
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
/* 20 */
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.init = init;

var _meteorEmoji = __webpack_require__(28);

var _meteorEmoji2 = _interopRequireDefault(_meteorEmoji);

var _user = __webpack_require__(2);

var _user2 = _interopRequireDefault(_user);

var _apiUserDirect = __webpack_require__(23);

var _apiUserDirect2 = _interopRequireDefault(_apiUserDirect);

var _view = __webpack_require__(3);

var _view2 = _interopRequireDefault(_view);

var _spinner = __webpack_require__(24);

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
/* 22 */
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
/* 23 */
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
/* 24 */
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
/* 25 */
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
/* 26 */
/***/ (function(module, exports) {

if("undefined"==typeof brutusin)window.brutusin=new Object;else if("object"!=typeof brutusin)throw"brutusin global variable already exists";!function(){String.prototype.startsWith||(String.prototype.startsWith=function(e,t){return t=t||0,this.indexOf(e,t)===t}),String.prototype.endsWith||(String.prototype.endsWith=function(e,t){var r=this.toString();(void 0===t||t>r.length)&&(t=r.length),t-=e.length;var n=r.indexOf(e,t);return-1!==n&&n===t}),String.prototype.includes||(String.prototype.includes=function(){"use strict";return-1!==String.prototype.indexOf.apply(this,arguments)}),String.prototype.format||(String.prototype.format=function(){for(var e=this,t=0;t<arguments.length;t++){var r=new RegExp("\\{"+t+"\\}","gi");e=e.replace(r,arguments[t])}return e});var BrutusinForms=new Object;BrutusinForms.messages={validationError:"Validation error",required:"This field is **required**",invalidValue:"Invalid field value",addpropNameExistent:"This property is already present in the object",addpropNameRequired:"A name is required",minItems:"At least `{0}` items are required",maxItems:"At most `{0}` items are allowed",pattern:"Value does not match pattern: `{0}`",minLength:"Value must be **at least** `{0}` characters long",maxLength:"Value must be **at most** `{0}` characters long",multipleOf:"Value must be **multiple of** `{0}`",minimum:"Value must be **greater or equal than** `{0}`",exclusiveMinimum:"Value must be **greater than** `{0}`",maximum:"Value must be **lower or equal than** `{0}`",exclusiveMaximum:"Value must be **lower than** `{0}`",minProperties:"At least `{0}` properties are required",maxProperties:"At most `{0}` properties are allowed",uniqueItems:"Array items must be unique",addItem:"Add item","true":"True","false":"False"},BrutusinForms.decorators=new Array,BrutusinForms.addDecorator=function(e){BrutusinForms.decorators[BrutusinForms.decorators.length]=e},BrutusinForms.onResolutionStarted=function(e){},BrutusinForms.onResolutionFinished=function(e){},BrutusinForms.onValidationError=function(e,t){e.focus(),e.className.includes(" error")||(e.className+=" error"),alert(t)},BrutusinForms.onValidationSuccess=function(e){e.className=e.className.replace(" error","")},BrutusinForms.postRender=null,BrutusinForms.instances=new Array,BrutusinForms.create=function(schema){function validateDepencyMapIsAcyclic(){function e(t,r,n){if(r.hasOwnProperty(n))return void(error="Schema dependency graph has cycles");if(r[n]=null,!t.hasOwnProperty(n)){t[n]=null;var a=dependencyMap[n];if(a)for(var i=0;i<a.length;i++)e(t,r,a[i]);delete r[n]}}var t=new Object;for(var r in dependencyMap)t.hasOwnProperty(r)||e(t,new Object,r)}function appendChild(e,t,r){e.appendChild(t);for(var n=0;n<BrutusinForms.decorators.length;n++)BrutusinForms.decorators[n](t,r)}function createPseudoSchema(e){var t=new Object;for(var r in e)"items"!==r&&"properties"!==r&&"additionalProperties"!==r&&("pattern"===r?t[r]=new RegExp(e[r]):t[r]=e[r]);return t}function getDefinition(e){var t=e.split("/"),r=root;for(var n in t)"0"!==n&&(r=r[t[n]]);return r}function containsStr(e,t){for(var r=0;r<e.length;r++)if(e[r]==t)return!0;return!1}function renameRequiredPropeties(e){if(e)if(e.hasOwnProperty("oneOf"))for(var t in e.oneOf)renameRequiredPropeties(e.oneOf[t]);else if(e.hasOwnProperty("$ref")){var r=getDefinition(e.$ref);renameRequiredPropeties(r)}else if("object"===e.type){if(e.properties){e.hasOwnProperty("required")&&Array.isArray(e.required)&&(e.requiredProperties=e.required,delete e.required);for(var n in e.properties)renameRequiredPropeties(e.properties[n])}if(e.patternProperties)for(var a in e.patternProperties){var i=e.patternProperties[a];(i.hasOwnProperty("type")||i.hasOwnProperty("$ref")||i.hasOwnProperty("oneOf"))&&renameRequiredPropeties(e.patternProperties[a])}e.additionalProperties&&(e.additionalProperties.hasOwnProperty("type")||e.additionalProperties.hasOwnProperty("oneOf"))&&renameRequiredPropeties(e.additionalProperties)}else"array"===e.type&&renameRequiredPropeties(e.items)}function populateSchemaMap(e,t){var r=createPseudoSchema(t);if(r.$id=e,schemaMap[e]=r,t){if(t.hasOwnProperty("oneOf")){r.oneOf=new Array,r.type="oneOf";for(var n in t.oneOf){var a=e+"."+n;r.oneOf[n]=a,populateSchemaMap(a,t.oneOf[n])}}else if(t.hasOwnProperty("$ref")){var i=getDefinition(t.$ref);if(i){if(t.hasOwnProperty("title")||t.hasOwnProperty("description")){var o={};for(var s in i)o[s]=i[s];t.hasOwnProperty("title")&&(o.title=t.title),t.hasOwnProperty("description")&&(o.description=t.description),i=o}populateSchemaMap(e,i)}}else if("object"===t.type){if(t.properties){r.properties=new Object;for(var s in t.properties){var a=e+"."+s;r.properties[s]=a;var u=t.properties[s];t.requiredProperties&&(containsStr(t.requiredProperties,s)?u.required=!0:u.required=!1),populateSchemaMap(a,u)}}if(t.patternProperties){r.patternProperties=new Object;for(var l in t.patternProperties){var d=e+"["+l+"]";r.patternProperties[l]=d;var p=t.patternProperties[l];p.hasOwnProperty("type")||p.hasOwnProperty("$ref")||p.hasOwnProperty("oneOf")?populateSchemaMap(d,t.patternProperties[l]):populateSchemaMap(d,SCHEMA_ANY)}}if(t.additionalProperties){var a=e+"[*]";r.additionalProperties=a,t.additionalProperties.hasOwnProperty("type")||t.additionalProperties.hasOwnProperty("oneOf")?populateSchemaMap(a,t.additionalProperties):populateSchemaMap(a,SCHEMA_ANY)}}else"array"===t.type&&(r.items=e+"[#]",populateSchemaMap(r.items,t.items));if(t.hasOwnProperty("dependsOn")){null===t.dependsOn&&(t.dependsOn=["$"]);for(var c=new Array,n=0;n<t.dependsOn.length;n++)t.dependsOn[n]?t.dependsOn[n].startsWith("$")?c[n]=t.dependsOn[n]:e.endsWith("]")?c[n]=e+"."+t.dependsOn[n]:c[n]=e.substring(0,e.lastIndexOf("."))+"."+t.dependsOn[n]:c[n]="$";schemaMap[e].dependsOn=c;for(var n=0;n<c.length;n++){var m=dependencyMap[c[n]];m||(m=new Array,dependencyMap[c[n]]=m),m[m.length]=e}}}}function renderTitle(e,t,r){if(e&&t){var n=document.createElement("label");"any"!==r.type&&"object"!==r.type&&"array"!==r.type&&(n.htmlFor=getInputId());var a=document.createTextNode(t+":");if(appendChild(n,a,r),r.description&&(n.title=r.description),r.required){var i=document.createElement("sup");appendChild(i,document.createTextNode("*"),r),appendChild(n,i,r),n.className="required"}appendChild(e,n,r)}}function getInputId(){return formId+"_"+inputCounter}function validate(e){var t=!0;if(e.hasOwnProperty("getValidationError")){var r=e.getValidationError();r?(BrutusinForms.onValidationError(e,r),t=!1):BrutusinForms.onValidationSuccess(e)}if(e.childNodes)for(var n=0;n<e.childNodes.length;n++)validate(e.childNodes[n])||(t=!1);return t}function clear(e){if(e)for(;e.firstChild;)e.removeChild(e.firstChild)}function render(e,t,r,n,a,i){var o=getSchemaId(r),s=getSchema(o);renderInfoMap[o]=new Object,renderInfoMap[o].titleContainer=e,renderInfoMap[o].container=t,renderInfoMap[o].parentObject=n,renderInfoMap[o].propertyProvider=a,renderInfoMap[o].value=i,clear(e),clear(t);var u=renderers[s.type];if(u&&!s.dependsOn)s.title?renderTitle(e,s.title,s):a&&renderTitle(e,a.getValue(),s),i||(i="undefined"!=typeof initialValue&&null!==initialValue?getInitialValue(r):s["default"]),u(t,r,n,a,i);else if(s.$ref&&obj.schemaResolver){var l=function(e){if(e&&e.hasOwnProperty(r)&&JSON.stringify(schemaMap[r])!==JSON.stringify(e[r])){cleanSchemaMap(r),cleanData(r),populateSchemaMap(r,e[r]);var t=renderInfoMap[r];t&&render(t.titleContainer,t.container,r,t.parentObject,t.propertyProvider,t.value)}BrutusinForms.onResolutionFinished(n)};BrutusinForms.onResolutionStarted(n),obj.schemaResolver([r],obj.getData(),l)}}function createPropertyProvider(e,t){var r=new Object;return r.getValue=e,r.onchange=t,r}function getInitialValue(id){var ret;try{eval("ret = initialValue"+id.substring(1))}catch(e){ret=null}return ret}function getValue(schema,input){if("function"==typeof input.getValue)return input.getValue();var value;return value="select"===input.tagName.toLowerCase()?input.options[input.selectedIndex].value:input.value,""===value?null:("integer"===schema.type?(value=parseInt(value),isFinite(value)||(value=null)):"number"===schema.type?(value=parseFloat(value),isFinite(value)||(value=null)):"boolean"===schema.type?"input"===input.tagName.toLowerCase()?(value=input.checked,value||(value=!1)):"select"===input.tagName.toLowerCase()&&(value="true"===input.value?!0:"false"===input.value?!1:null):"any"===schema.type&&value&&eval("value="+value),value)}function getSchemaId(e){return e.replace(/\["[^"]*"\]/g,"[*]").replace(/\[\d*\]/g,"[#]")}function getParentSchemaId(e){return e.substring(0,e.lastIndexOf("."))}function getSchema(e){return schemaMap[e]}function cleanSchemaMap(e){for(var t in schemaMap)e.startsWith(t)&&delete schemaMap[t]}function cleanData(e){var t=new Expression(e);t.visit(data,function(e,t,r){delete t[r]})}function onDependencyChanged(e,t){var r=dependencyMap[e];if(r&&obj.schemaResolver){var n=function(e){if(e)for(var r in e)if(JSON.stringify(schemaMap[r])!==JSON.stringify(e[r])){cleanSchemaMap(r),cleanData(r),populateSchemaMap(r,e[r]);var n=renderInfoMap[r];n&&render(n.titleContainer,n.container,r,n.parentObject,n.propertyProvider,n.value)}BrutusinForms.onResolutionFinished(t)};BrutusinForms.onResolutionStarted(t),obj.schemaResolver(r,obj.getData(),n)}}function Expression(e){function t(e){if(null===e)return null;for(var t=new Array,r=null,n=0,a=0;a<e.length;a++)'"'===e.charAt(a)?null===r?r='"':'"'===r&&(r=null,t[t.length]=e.substring(n,a+1).trim(),n=a+1):"'"===e.charAt(a)?null===r?r="'":"'"===r&&(r=null,t[t.length]=e.substring(n,a+1).trim(),n=a+1):"["===e.charAt(a)?null===r&&(n!==a&&(t[t.length]=e.substring(n,a).trim()),t[t.length]="[",n=a+1):"]"===e.charAt(a)?null===r&&(n!==a&&(t[t.length]=e.substring(n,a).trim()),t[t.length]="]",n=a+1):"."===e.charAt(a)?null===r&&(n!==a&&(t[t.length]=e.substring(n,a).trim()),n=a+1):a===e.length-1&&(t[t.length]=e.substring(n,a+1).trim());return t}(null===e||0===e.length||"."===e)&&(e="$");for(var r=new Array,n=t(e),a=!1,i=0,o="",s=0;s<n.length;s++){var u=n[s];if("["===u){if(a)throw"Error parsing expression '"+e+"': Nested [ found";a=!0,i=0,o+=u}else if("]"===u){if(!a)throw"Error parsing expression '"+e+"': Unbalanced ] found";a=!1,o+=u,r[r.length]=o,o=""}else if(a){if(i>0)throw"Error parsing expression '"+e+"': Multiple tokens found inside a bracket";o+=u,i++}else r[r.length]=u;if(s===n.length-1&&a)throw"Error parsing expression '"+e+"': Unbalanced [ found"}this.exp=e,this.queue=r,this.visit=function(e,t){function r(e,n,a,i,o){if(null!=a){var s=n.shift();if("$"===s){e="$";var s=n.shift()}if(s)if(Array.isArray(a)){if(!s.startsWith("["))throw"Node '"+e+"' is of type array";var u=s.substring(1,s.length-1);if(u.equals("#"))for(var l=0;l<a.length;l++){var d=a[l];r(e+s,n.slice(0),d,a,l),r(e+"["+l+"]",n.slice(0),d,a,l)}else if("$"===u){var d=a[a.length-1];r(e+s,n.slice(0),d,a,a.length-1)}else{var p=parseInt(u);if(isNaN(p))throw"Element '"+u+"' of node '"+e+"' is not an integer, or the '$' last element symbol,  or the wilcard symbol '#'";if(0>p)throw"Element '"+u+"' of node '"+e+"' is lower than zero";var d=a[p];r(e+s,n.slice(0),d,a,p)}}else{if("object"!=typeof a)throw"boolean"==typeof a||"number"==typeof a||"string"==typeof a?"Node is leaf but still are tokens remaining: "+s:"Node type '"+typeof a+"' not supported for index field '"+e+"'";if("[*]"===s)for(var c in a){var d=a[c];r(e+s,n.slice(0),d,a,c),r(e+'["'+c+'"]',n.slice(0),d,a,c)}else{var d;if(s.startsWith("[")){var u=s.substring(1,s.length-1);if(!u.startsWith('"')&&!u.startsWith("'"))throw"Element '"+u+"' of node '"+e+"' must be a string expression or wilcard '*'";u=u.substring(1,u.length()-1),e+=s,d=a[u]}else e=e.length>0?e+"."+s:s,d=a[s];r(e,n,d,a,s)}}else t(a,i,o)}}r(this.exp,this.queue,e)}}var SCHEMA_ANY={type:"any"},obj=new Object,schemaMap=new Object,dependencyMap=new Object,renderInfoMap=new Object,container,data,error,initialValue,inputCounter=0,root=schema,formId="BrutusinForms#"+BrutusinForms.instances.length;renameRequiredPropeties(schema),populateSchemaMap("$",schema),validateDepencyMapIsAcyclic();var renderers=new Object;return renderers.integer=function(e,t,r,n,a){renderers.string(e,t,r,n,a)},renderers.number=function(e,t,r,n,a){renderers.string(e,t,r,n,a)},renderers.any=function(e,t,r,n,a){renderers.string(e,t,r,n,a)},renderers.string=function(e,t,r,n,a){var i,o=getSchemaId(t),s=getParentSchemaId(o),u=getSchema(o),l=getSchema(s);if("any"===u.type)i=document.createElement("textarea"),a&&(i.value=JSON.stringify(a,null,4),u.readOnly&&(i.disabled=!0));else if(u.media)i=document.createElement("input"),i.type="file",appendChild(i,d,u);else if(u["enum"]){if(i=document.createElement("select"),!u.required){var d=document.createElement("option"),p=document.createTextNode("");d.value="",appendChild(d,p,u),appendChild(i,d,u)}for(var c=0,m=0;m<u["enum"].length;m++){var d=document.createElement("option"),p=document.createTextNode(u["enum"][m]);d.value=u["enum"][m],appendChild(d,p,u),appendChild(i,d,u),a&&u["enum"][m]===a&&(c=m,u.required||c++,u.readOnly&&(i.disabled=!0))}1===u["enum"].length?i.selectedIndex=1:i.selectedIndex=c}else{if(i=document.createElement("input"),"integer"===u.type||"number"===u.type)i.type="number",i.step=u.step?""+u.step:"any","number"!=typeof a&&(a=null);else if("date-time"===u.format)try{i.type="datetime-local"}catch(f){i.type="text"}else"email"===u.format?i.type="email":"text"===u.format?i=document.createElement("textarea"):i.type="text";null!==a&&"undefined"!=typeof a&&(i.value=a,u.readOnly&&(i.disabled=!0))}return i.schema=o,i.setAttribute("autocorrect","off"),i.getValidationError=function(){try{var e=getValue(u,i);if(null===e){if(u.required){if(!l||"object"!==l.type)return BrutusinForms.messages.required;if(l.required)return BrutusinForms.messages.required;for(var t in r)if(null!==r[t])return BrutusinForms.messages.required}}else{if(u.pattern&&!u.pattern.test(e))return BrutusinForms.messages.pattern.format(u.pattern.source);if(u.minLength&&(!e||u.minLength>e.length))return BrutusinForms.messages.minLength.format(u.minLength);if(u.maxLength&&e&&u.maxLength<e.length)return BrutusinForms.messages.maxLength.format(u.maxLength)}if(null!==e&&!isNaN(e)){if(u.multipleOf&&e%u.multipleOf!==0)return BrutusinForms.messages.multipleOf.format(u.multipleOf);if(u.hasOwnProperty("maximum")){if(u.exclusiveMaximum&&e>=u.maximum)return BrutusinForms.messages.exclusiveMaximum.format(u.maximum);if(!u.exclusiveMaximum&&e>u.maximum)return BrutusinForms.messages.maximum.format(u.maximum)}if(u.hasOwnProperty("minimum")){if(u.exclusiveMinimum&&e<=u.minimum)return BrutusinForms.messages.exclusiveMinimum.format(u.minimum);if(!u.exclusiveMinimum&&e<u.minimum)return BrutusinForms.messages.minimum.format(u.minimum)}}}catch(n){return BrutusinForms.messages.invalidValue}},i.onchange=function(){var e;try{e=getValue(u,i)}catch(t){e=null}r?r[n.getValue()]=e:data=e,onDependencyChanged(o,i)},u.description&&(i.title=u.description,i.placeholder=u.description),i.onchange(),i.id=getInputId(),inputCounter++,appendChild(e,i,u),r},renderers["boolean"]=function(e,t,r,n,a){var i,o=getSchemaId(t),s=getSchema(o);if(s.required)i=document.createElement("input"),i.type="checkbox",a===!0&&(i.checked=!0);else{i=document.createElement("select");var u=document.createElement("option"),l=document.createTextNode("");l.value="",appendChild(u,l,s),appendChild(i,u,s);var d=document.createElement("option"),p=document.createTextNode(BrutusinForms.messages["true"]);d.value="true",appendChild(d,p,s),appendChild(i,d,s);var c=document.createElement("option"),m=document.createTextNode(BrutusinForms.messages["false"]);c.value="false",appendChild(c,m,s),appendChild(i,c,s),a===!0?i.selectedIndex=1:a===!1&&(i.selectedIndex=2)}i.onchange=function(){r?r[n.getValue()]=getValue(s,i):data=getValue(s,i),onDependencyChanged(o,i)},i.schema=o,i.id=getInputId(),inputCounter++,s.description&&(i.title=s.description),i.onchange(),appendChild(e,i,s)},renderers.oneOf=function(e,t,r,n,a){var i=getSchemaId(t),o=getSchema(i),s=document.createElement("select"),u=document.createElement("div");u.innerHTML="",s.type="select",s.schema=i;var l=document.createElement("option");l.value=null,appendChild(s,l,o);for(var d=0;d<o.oneOf.length;d++){var p=document.createElement("option"),c=i+"."+d,m=getSchema(c),f=document.createTextNode(m.title);if(p.value=o.oneOf[d],appendChild(p,f,o),appendChild(s,p,o),void 0!==a&&null!==a&&(o.readOnly&&(s.disabled=!0),a.hasOwnProperty("type")&&m.hasOwnProperty("properties")&&m.properties.hasOwnProperty("type"))){var h=getSchema(m.properties.type);a.type===h["enum"][0]&&(s.selectedIndex=d+1,render(null,u,t+"."+(s.selectedIndex-1),r,n,a))}}s.onchange=function(){render(null,u,t+"."+(s.selectedIndex-1),r,n,a)},appendChild(e,s,o),appendChild(e,u,o)},renderers.object=function(e,t,r,n,a){function i(e){var t=new Object;return t.getValue=function(){return e},t.onchange=function(e){},t}function o(e,t,r,n,a,i){var o=getSchemaId(r),s=getSchema(o),u=t.tBodies[0],l=document.createElement("tr"),d=document.createElement("td");d.className="add-prop-name";var p=document.createElement("table"),c=document.createElement("tr"),m=document.createElement("td"),f=document.createElement("td"),h="$"+Object.keys(e).length+"$",v=document.createElement("td");v.className="prop-value";var g=document.createElement("input");g.type="text";var y;i&&(y=RegExp(i)),g.getValidationError=function(){return g.previousValue!==g.value&&e.hasOwnProperty(g.value)?BrutusinForms.messages.addpropNameExistent:g.value?void 0:BrutusinForms.messages.addpropNameRequired};var b=createPropertyProvider(function(){if(g.value){if(!y)return g.value;if(-1!==g.value.search(y))return g.value}return h},function(t){b.getValue()!==t&&(t&&e.hasOwnProperty(t)||(t=h),(e.hasOwnProperty(t)||y&&-1===b.getValue().search(y))&&(e[b.getValue()]=e[t],delete e[t]))});g.onblur=function(){if(g.previousValue!==g.value){for(var t=g.value,r=1;g.previousValue!==t&&e.hasOwnProperty(t);)t=g.value+"("+r+")",r++;return g.value=t,b.onchange(g.previousValue),void(g.previousValue=g.value)}};var P=document.createElement("button");P.setAttribute("type","button"),P.className="remove",appendChild(P,document.createTextNode("x"),s),P.onclick=function(){delete e[g.value],t.deleteRow(l.rowIndex),g.value=null,b.onchange(g.previousValue)},appendChild(m,g,s),appendChild(f,P,s),appendChild(c,m,s),appendChild(c,f,s),appendChild(p,c,s),appendChild(d,p,s),void 0!==i&&(g.placeholder=i),appendChild(l,d,s),appendChild(l,v,s),appendChild(u,l,s),appendChild(t,u,s),render(null,v,r,e,b,a),n&&(g.value=n,g.onblur())}var s=getSchemaId(t),u=getSchema(s),l=new Object;r?(n.getValue()||0===n.getValue())&&(r[n.getValue()]=l):data=l;var d=document.createElement("table");d.className="object";var p=document.createElement("tbody");appendChild(d,p,u);var c=0;if(u.hasOwnProperty("properties")){c=u.properties.length;for(var m in u.properties){var f=document.createElement("tr"),h=document.createElement("td");h.className="prop-name";var v=t+"."+m,g=getSchema(getSchemaId(v)),y=document.createElement("td");y.className="prop-value",appendChild(p,f,g),appendChild(f,h,g),appendChild(f,y,g);var b=i(m),P=null;a&&(P=a[m]),render(h,y,v,l,b,P)}}var O=[];if(u.patternProperties||u.additionalProperties){var w=document.createElement("div");if(appendChild(w,d,u),u.patternProperties)for(var x in u.patternProperties){var C=u.patternProperties[x],E=document.createElement("div");E.className="add-pattern-div";var S=document.createElement("button");if(S.setAttribute("type","button"),S.pattern=x,S.id=t+"["+x+"]",S.onclick=function(){o(l,d,this.id,void 0,void 0,this.pattern)},(u.maxProperties||u.minProperties)&&(S.getValidationError=function(){return u.minProperties&&c+d.rows.length<u.minProperties?BrutusinForms.messages.minProperties.format(u.minProperties):u.maxProperties&&c+d.rows.length>u.maxProperties?BrutusinForms.messages.maxProperties.format(u.maxProperties):void 0}),C.description&&(S.title=C.description),appendChild(S,document.createTextNode("Add "+x),u),appendChild(E,S,u),a)for(var I in a)if(!u.properties||!u.properties.hasOwnProperty(I)){var N=RegExp(x);-1!==I.search(N)&&-1===O.indexOf(I)&&(o(l,d,t+"["+x+"]",I,a[I],x),O.push(I))}appendChild(w,E,u)}if(u.additionalProperties){var F=getSchema(u.additionalProperties),S=document.createElement("button");if(S.setAttribute("type","button"),S.onclick=function(){o(l,d,t+"[*]",void 0)},(u.maxProperties||u.minProperties)&&(S.getValidationError=function(){return u.minProperties&&c+d.rows.length<u.minProperties?BrutusinForms.messages.minProperties.format(u.minProperties):u.maxProperties&&c+d.rows.length>u.maxProperties?BrutusinForms.messages.maxProperties.format(u.maxProperties):void 0}),F.description&&(S.title=F.description),appendChild(S,document.createTextNode("Add"),u),appendChild(w,S,u),a)for(var I in a)u.properties&&u.properties.hasOwnProperty(I)||-1===O.indexOf(I)&&o(l,d,t+'["'+m+'"]',I,a[I])}appendChild(e,w,u)}else appendChild(e,d,u)},renderers.array=function(e,t,r,n,a){function i(e,t,r,n,a){var i=getSchemaId(r),o=getSchema(i),s=document.createElement("tbody"),u=document.createElement("tr");u.className="item";var l=document.createElement("td");l.className="item-index";var d=document.createElement("td");d.className="item-action";var p=document.createElement("td");p.className="item-value";var c=document.createElement("button");c.setAttribute("type","button"),c.className="remove",a===!0&&(c.disabled=!0),appendChild(c,document.createTextNode("x"),o);var m=function(){for(var e=0;e<t.rows.length;e++){var r=t.rows[e];r.cells[0].innerHTML=e+1}};c.onclick=function(){e.splice(u.rowIndex,1),t.deleteRow(u.rowIndex),m()},appendChild(d,c,o);var f=document.createTextNode(t.rows.length+1);appendChild(l,f,o),appendChild(u,l,o),appendChild(u,d,o),appendChild(u,p,o),appendChild(s,u,o),appendChild(t,s,o);var h=createPropertyProvider(function(){return u.rowIndex});render(null,p,r,e,h,n)}var o=getSchemaId(t),s=getSchema(o),u=getSchema(s.items),l=new Array;r?(n.getValue()||0===n.getValue())&&(r[n.getValue()]=l):data=l,n&&(n.onchange=function(e){delete r[e],r[n.getValue()]=l});var d=document.createElement("div"),p=document.createElement("table");p.className="array",appendChild(d,p,s),appendChild(e,d,s);var c=document.createElement("button");if(s.readOnly&&(c.disabled=!0),c.setAttribute("type","button"),c.getValidationError=function(){if(s.minItems&&s.minItems>p.rows.length)return BrutusinForms.messages.minItems.format(s.minItems);if(s.maxItems&&s.maxItems<p.rows.length)return BrutusinForms.messages.maxItems.format(s.maxItems);if(s.uniqueItems)for(var e=0;e<l.length;e++)for(var t=e+1;t<l.length;t++)if(JSON.stringify(l[e])===JSON.stringify(l[t]))return BrutusinForms.messages.uniqueItems},c.onclick=function(){i(l,p,t+"[#]",null)},u.description&&(c.title=u.description),appendChild(c,document.createTextNode(BrutusinForms.messages.addItem),s),appendChild(d,p,s),appendChild(d,c,s),a&&a instanceof Array)for(var m=0;m<a.length;m++)i(l,p,t+"["+m+"]",a[m],s.readOnly);appendChild(e,d,s)},obj.render=function(e,t){container=e,initialValue=t;var r=document.createElement("form");if(r.className="brutusin-form",r.onsubmit=function(e){return!1},container?appendChild(container,r):appendChild(document.body,r),error){var n=document.createElement("label"),a=document.createTextNode(error);appendChild(n,a),n.className="error-message",appendChild(r,n)}else render(null,r,"$",null,null);dependencyMap.hasOwnProperty("$")&&onDependencyChanged("$"),BrutusinForms.postRender&&BrutusinForms.postRender(obj)},obj.getRenderingContainer=function(){return container},obj.validate=function(){return validate(container)},obj.getData=function(){function e(t,r){if(null===s&&(s=SCHEMA_ANY),r.$ref&&(r=getDefinition(r.$ref)),t instanceof Array){if(0===t.length)return null;for(var n=new Array,a=0;a<t.length;a++)n[a]=e(t[a],r.items);return n}if(""===t)return null;if(t instanceof Object){var n=new Object,i=!1;for(var o in t)if(!o.startsWith("$")||!o.endsWith("$")){var s=null;if(r.hasOwnProperty("properties")&&r.properties.hasOwnProperty(o)&&(s=r.properties[o]),null===s&&r.hasOwnProperty("additionalProperties")&&"object"==typeof r.additionalProperties&&(s=r.additionalProperties),null===s&&r.hasOwnProperty("patternProperties"))for(var u in r.patternProperties){var l=RegExp(u);if(-1!==o.search(l)){s=r.patternProperties[u];break}}var d=e(t[o],s);null!==d&&(n[o]=d,i=!0)}return i||r.required?n:null}return t}return container?e(data,schema):null},BrutusinForms.instances[BrutusinForms.instances.length]=obj,obj},brutusin["json-forms"]=BrutusinForms}();

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;!function(f){if(true)module.exports=f();else if("function"==typeof define&&define.amd)define([],f);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).MeteorEmoji=f()}}(function(){return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n||e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){!function(global,factory){if(void 0!==exports)factory(module);else{var mod={exports:{}};factory(mod),global.meteorEmoji=mod.exports}}(this,function(module){"use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),MeteorEmoji=function(){function MeteorEmoji(){!function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,MeteorEmoji),this.initiate()}return _createClass(MeteorEmoji,[{key:"initiate",value:function(){var _this=this;document.querySelectorAll('[data-meteor-emoji="true"], [data-meteor-emoji-large="true"]').forEach(function(element){_this.generateElements(element)})}},{key:"generateElements",value:function(emojiInput){var clickLink=function(event){var caretPos=emojiInput.selectionStart;emojiInput.value=emojiInput.value.substring(0,caretPos)+" "+event.target.innerHTML+emojiInput.value.substring(caretPos),emojiPicker.style.display="block","undefined"!=typeof angular&&angular.element(emojiInput).triggerHandler("change")},clickCategory=function(event){emojiInput.selectionStart;emojiPicker.style.display="block";for(var hideUls=emojiPicker.querySelectorAll("ul"),i=1,l=hideUls.length;i<l;i++)hideUls[i].style.display="none";var backgroundToggle=emojiPicker.querySelectorAll(".category a");for(i=0,l=backgroundToggle.length;i<l;i++)backgroundToggle[i].style.background="none";emojiPicker.querySelector("."+event.target.id).style.display="block",emojiPicker.querySelector("#"+event.target.id).style.background="#c2c2c2"};emojiInput.style.width="100%";var emojiContainer=document.createElement("div");emojiContainer.style.position="relative",emojiInput.parentNode.replaceChild(emojiContainer,emojiInput),emojiContainer.appendChild(emojiInput);var emojiPicker=document.createElement("div");emojiPicker.tabIndex=0,emojiInput.hasAttribute("data-meteor-emoji-large")?(emojiPicker.style.zIndex="999",emojiPicker.style.display="block",emojiPicker.style.width="100%",emojiPicker.style.marginBottom="15px"):(emojiPicker.style.position="absolute",emojiPicker.style.right="0px",emojiPicker.style.top="30px",emojiPicker.style.display="none",emojiPicker.style.width="400px"),emojiPicker.style.zIndex="999",emojiPicker.style.overflow="hidden",emojiPicker.style.background="#fff",emojiPicker.style.borderRadius="5px",emojiPicker.style.boxShadow="0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",emojiPicker.style.borderRadius="2px;",emojiPicker.style.marginTop="5px",emojiPicker.style.outline="none";var emojiTrigger=document.createElement("a");emojiTrigger.style.position="absolute",emojiTrigger.style.top="10px",emojiTrigger.style.right="10px",emojiTrigger.style.textDecoration="none",emojiTrigger.setAttribute("href","javascript:void(0)"),emojiTrigger.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12 14"><path d="M8.9 8.4q-0.3 0.9-1.1 1.5t-1.8 0.6-1.8-0.6-1.1-1.5q-0.1-0.2 0-0.4t0.3-0.2q0.2-0.1 0.4 0t0.2 0.3q0.2 0.6 0.7 1t1.2 0.4 1.2-0.4 0.7-1q0.1-0.2 0.3-0.3t0.4 0 0.3 0.2 0 0.4zM5 5q0 0.4-0.3 0.7t-0.7 0.3-0.7-0.3-0.3-0.7 0.3-0.7 0.7-0.3 0.7 0.3 0.3 0.7zM9 5q0 0.4-0.3 0.7t-0.7 0.3-0.7-0.3-0.3-0.7 0.3-0.7 0.7-0.3 0.7 0.3 0.3 0.7zM11 7q0-1-0.4-1.9t-1.1-1.6-1.6-1.1-1.9-0.4-1.9 0.4-1.6 1.1-1.1 1.6-0.4 1.9 0.4 1.9 1.1 1.6 1.6 1.1 1.9 0.4 1.9-0.4 1.6-1.1 1.1-1.6 0.4-1.9zM12 7q0 1.6-0.8 3t-2.2 2.2-3 0.8-3-0.8-2.2-2.2-0.8-3 0.8-3 2.2-2.2 3-0.8 3 0.8 2.2 2.2 0.8 3z"/></svg>',emojiTrigger.onclick=function(){"none"===emojiPicker.style.display?emojiPicker.style.display="block":"block"===emojiPicker.style.display&&(emojiPicker.style.display="none"),emojiPicker.focus()},emojiInput.hasAttribute("data-meteor-emoji-large")||emojiContainer.appendChild(emojiTrigger),window.addEventListener("click",function(e){emojiInput.hasAttribute("data-meteor-emoji-large")||"block"===emojiPicker.style.display&&(emojiPicker.contains(e.target)||emojiTrigger.contains(e.target)||(emojiPicker.style.display="none"))});var facesCategory=document.createElement("ul");facesCategory.style.padding="10px 0px",facesCategory.style.margin="0",facesCategory.style.listStyle="none",facesCategory.style.textAlign="left",facesCategory.style.marginLeft="3%",facesCategory.classList.add("faces");var animalsCategory=document.createElement("ul");animalsCategory.style.padding="10px 0px",animalsCategory.style.margin="0",animalsCategory.style.listStyle="none",animalsCategory.style.textAlign="left",animalsCategory.style.marginLeft="3%",animalsCategory.classList.add("animals"),animalsCategory.style.display="none";var foodCategory=document.createElement("ul");foodCategory.style.padding="10px 0px",foodCategory.style.margin="0",foodCategory.style.listStyle="none",foodCategory.style.textAlign="left",foodCategory.style.marginLeft="3%",foodCategory.classList.add("food"),foodCategory.style.display="none";var sportCategory=document.createElement("ul");sportCategory.style.padding="10px 0px",sportCategory.style.margin="0",sportCategory.style.listStyle="none",sportCategory.style.textAlign="left",sportCategory.style.marginLeft="3%",sportCategory.classList.add("sport"),sportCategory.style.display="none";var transportCategory=document.createElement("ul");transportCategory.style.padding="10px 0px",transportCategory.style.margin="0",transportCategory.style.listStyle="none",transportCategory.style.textAlign="left",transportCategory.style.marginLeft="3%",transportCategory.classList.add("transport"),transportCategory.style.display="none";var objectsCategory=document.createElement("ul");objectsCategory.style.padding="10px 0px",objectsCategory.style.margin="0",objectsCategory.style.listStyle="none",objectsCategory.style.textAlign="left",objectsCategory.style.marginLeft="3%",objectsCategory.classList.add("objects"),objectsCategory.style.display="none";var emojiCategory=document.createElement("ul");emojiCategory.style.padding="0px",emojiCategory.style.margin="0",emojiCategory.style.display="table",emojiCategory.style.width="100%",emojiCategory.style.background="#eff0f1",emojiCategory.style.listStyle="none",emojiCategory.classList.add("category");var emojiCategories=new Array;emojiCategories.push({name:"faces",svg:'<svg id="faces" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150"><path id="faces" d="M74.34,128.48a53.5,53.5,0,1,1,37.84-15.67,53.16,53.16,0,0,1-37.84,15.67Zm0-97.89a44.4,44.4,0,1,0,31.4,13,44.07,44.07,0,0,0-31.4-13Z"/><path id="faces" d="M74.35,108A33.07,33.07,0,0,1,41.29,75a2.28,2.28,0,0,1,2.27-2.28h0A2.27,2.27,0,0,1,45.83,75a28.52,28.52,0,0,0,57,0,2.27,2.27,0,0,1,4.54,0A33.09,33.09,0,0,1,74.35,108Z"/><path id="faces" d="M58.84,62a6.81,6.81,0,1,0,6.81,6.81A6.81,6.81,0,0,0,58.84,62Z"/><path id="faces" d="M89.87,62a6.81,6.81,0,1,0,6.81,6.81A6.82,6.82,0,0,0,89.87,62Z"/></svg>'}),emojiCategories.push({name:"animals",svg:'<svg id="animals" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150"><path id="animals" d="M59.9,91.75h0c-22.46,0-41.82-19.34-44.09-44A52.1,52.1,0,0,1,16,36.8a4.51,4.51,0,0,1,2.63-3.62,39.79,39.79,0,0,1,12.74-3.37c23.92-2.15,45.35,17.83,47.74,43.86a52.77,52.77,0,0,1-.15,10.93,4.56,4.56,0,0,1-2.64,3.62,39.67,39.67,0,0,1-12.73,3.36c-1.23.11-2.45.17-3.66.17ZM24.76,40.49a41.29,41.29,0,0,0,.09,6.4C26.7,67,42.09,82.66,59.9,82.67h0c.94,0,1.88,0,2.83-.14a30.39,30.39,0,0,0,7.41-1.62,41.14,41.14,0,0,0-.11-6.4C68.09,53.38,51.11,37.08,32.17,38.86a30.78,30.78,0,0,0-7.41,1.63Z"/><path id="animals" d="M36.68,125.64a4.53,4.53,0,0,1-4.33-3.17,53.32,53.32,0,0,1-2.26-11A50.42,50.42,0,0,1,39.51,76.6c7.35-9.91,17.84-16,29.5-17,1.16-.11,2.33-.13,3.47-.13a4.54,4.54,0,0,1,4.33,3.16,51.59,51.59,0,0,1,2.27,11.08,50.39,50.39,0,0,1-9.42,34.8c-7.35,9.91-17.83,16-29.5,17a17.63,17.63,0,0,1-3.48.12ZM69.09,68.69A32.41,32.41,0,0,0,46.8,82a42.57,42.57,0,0,0-6.71,34.38,32.38,32.38,0,0,0,22.28-13.32A41.35,41.35,0,0,0,70,74.51a39.38,39.38,0,0,0-.94-5.82Z"/><path id="animals" d="M90.27,91.75c-1.22,0-2.43-.06-3.66-.17a39.67,39.67,0,0,1-12.73-3.36,4.57,4.57,0,0,1-2.64-3.61,53.38,53.38,0,0,1-.17-10.93c2.41-26,23.7-46.07,47.76-43.87a39.74,39.74,0,0,1,12.73,3.37,4.57,4.57,0,0,1,2.64,3.62,53.35,53.35,0,0,1,.16,10.92c-2.28,24.69-21.65,44-44.09,44ZM80,80.91a30.57,30.57,0,0,0,7.42,1.62c19.07,1.78,35.92-14.53,37.87-35.64a42.55,42.55,0,0,0,.1-6.4A30.86,30.86,0,0,0,118,38.86C99,37.07,82.06,53.38,80.12,74.51a43.91,43.91,0,0,0-.1,6.4Z"/><path id="animals" d="M113.49,125.64h0c-1.16,0-2.3,0-3.46-.12-23.9-2.21-41.36-25.47-38.94-51.85A53.52,53.52,0,0,1,73.34,62.6a4.55,4.55,0,0,1,4.33-3.16c1.16,0,2.34,0,3.51.13,11.64,1.07,22.11,7.12,29.48,17a50.51,50.51,0,0,1,9.42,34.81,53.51,53.51,0,0,1-2.26,11,4.54,4.54,0,0,1-4.33,3.19ZM81.08,68.69a42.53,42.53,0,0,0-1,5.82c-1.94,21.1,11.45,39.71,29.95,41.88A42.38,42.38,0,0,0,103.36,82,32.42,32.42,0,0,0,81.08,68.69Z"/><path id="animals" d="M75.08,45.45a7.83,7.83,0,1,0,7.83,7.83,7.83,7.83,0,0,0-7.83-7.83Z"/><path id="animals" d="M76.29,51.89a2.26,2.26,0,0,1-2.14-3A46,46,0,0,1,92.82,25.34a2.27,2.27,0,1,1,2.4,3.86A41.4,41.4,0,0,0,78.43,50.39a2.28,2.28,0,0,1-2.14,1.5Z"/><path id="animals" d="M73.87,51.89a2.28,2.28,0,0,1-2.14-1.5A41.35,41.35,0,0,0,54.94,29.2a2.27,2.27,0,0,1,2.39-3.86A46,46,0,0,1,76,48.85a2.28,2.28,0,0,1-1.37,2.91,2.31,2.31,0,0,1-.77.13Z"/></svg>'}),emojiCategories.push({name:"food",svg:'<svg id="food" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150"><path id="food" d="M104,20.76h.15c15.83.52,24.08,21.48,24.07,32.56.26,12.42-10.72,23.55-24,24.21a3.53,3.53,0,0,1-.46,0c-13.25-.66-24.23-11.8-24-24.3,0-11,8.26-31.95,24.07-32.47Zm0,47.69c8.25-.54,15.3-7.51,15.14-15,0-8.12-6.22-23.1-15.14-23.57-8.9.46-15.14,15.45-15.14,23.48-.14,7.61,6.9,14.59,15.14,15.13Z"/><path id="food" d="M97.19,69.21h.14a4.53,4.53,0,0,1,4.4,4.68l-1.48,46.92a1.59,1.59,0,0,0,.5,1.06,4.6,4.6,0,0,0,3.25,1.19h0a4.57,4.57,0,0,0,3.26-1.2,1.53,1.53,0,0,0,.49-1l-1.48-46.95a4.54,4.54,0,1,1,9.08-.28l1.47,46.91a10.42,10.42,0,0,1-3,7.65,13.65,13.65,0,0,1-9.81,4h0a13.58,13.58,0,0,1-9.79-4,10.42,10.42,0,0,1-3-7.67l1.48-46.89a4.53,4.53,0,0,1,4.53-4.4Z"/><path id="food" d="M41.84,69.21H42a4.53,4.53,0,0,1,4.4,4.68L44.9,120.81a1.57,1.57,0,0,0,.5,1.06,4.6,4.6,0,0,0,3.25,1.19h0a4.51,4.51,0,0,0,3.24-1.19,1.48,1.48,0,0,0,.5-1L50.93,73.89a4.53,4.53,0,0,1,4.39-4.68A4.4,4.4,0,0,1,60,73.61l1.48,46.91a10.49,10.49,0,0,1-3,7.66,13.57,13.57,0,0,1-9.78,4h0a13.59,13.59,0,0,1-9.78-4,10.48,10.48,0,0,1-3-7.67l1.48-46.9a4.54,4.54,0,0,1,4.54-4.4Z"/><path id="food" d="M28.59,20.76a4.54,4.54,0,0,1,4.54,4.54V51a15.52,15.52,0,0,0,31,0V25.3a4.55,4.55,0,0,1,9.09,0V51a24.61,24.61,0,1,1-49.21,0V25.3a4.54,4.54,0,0,1,4.54-4.54Z"/><path id="food" d="M55.34,20.76a4.54,4.54,0,0,1,4.54,4.54v19a4.54,4.54,0,1,1-9.08,0v-19a4.54,4.54,0,0,1,4.54-4.54Z"/><path id="food" d="M42,20.76a4.54,4.54,0,0,1,4.54,4.54v19a4.54,4.54,0,1,1-9.08,0v-19A4.54,4.54,0,0,1,42,20.76Z"/></svg>'}),emojiCategories.push({name:"sport",svg:'<svg id="sport" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150"><path id="sport" d="M75.35,130.24a53.49,53.49,0,1,1,53.48-53.49,53.55,53.55,0,0,1-53.48,53.49Zm0-97.89a44.41,44.41,0,1,0,44.4,44.4,44.1,44.1,0,0,0-44.4-44.4Z"/><path id="sport" d="M119.24,84.08A51.29,51.29,0,0,1,68,32.86a49.44,49.44,0,0,1,.26-5,2.26,2.26,0,0,1,2-2c1.66-.16,3.34-.25,5-.25a51.26,51.26,0,0,1,51.21,51.21c0,1.71-.09,3.38-.25,5a2.28,2.28,0,0,1-2,2c-1.65.16-3.33.25-5,.25ZM72.64,30.16c-.06.9-.08,1.79-.08,2.7a46.73,46.73,0,0,0,46.68,46.68q1.37,0,2.7-.09c.06-.89.08-1.79.08-2.7A46.72,46.72,0,0,0,75.35,30.08c-.91,0-1.82,0-2.71.08Z"/><path id="sport" d="M75.35,128A51.28,51.28,0,0,1,24.12,76.76c0-1.7.1-3.38.25-5a2.29,2.29,0,0,1,2-2c1.66-.16,3.33-.25,5.05-.25a51.27,51.27,0,0,1,51.21,51.22c0,1.69-.09,3.37-.25,5a2.27,2.27,0,0,1-2,2c-1.66.16-3.32.25-5,.25ZM28.75,74.05c-.05.9-.09,1.8-.09,2.71a46.74,46.74,0,0,0,46.69,46.67c.91,0,1.8,0,2.7-.08,0-.9.08-1.8.08-2.7A46.73,46.73,0,0,0,31.46,74c-.91,0-1.81,0-2.71.08Z"/><polygon id="sport" points="42.69 112.61 39.48 109.4 108 40.88 111.21 44.1 42.69 112.61 42.69 112.61"/></svg>'}),emojiCategories.push({name:"transport",svg:'<svg id="transport" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150"><path id="transport" d="M120.7,116H31a4.55,4.55,0,0,1-4.54-4.55V54.28A31.82,31.82,0,0,1,58.25,22.49h35.2a31.83,31.83,0,0,1,31.8,31.79v57.15A4.55,4.55,0,0,1,120.7,116Zm-85.16-9.09h80.62V54.28A22.74,22.74,0,0,0,93.45,31.57H58.25A22.74,22.74,0,0,0,35.54,54.28v52.61Z"/><path id="transport" d="M49.35,129.23c-8.53,0-13.62-2.77-13.62-7.41V115.6a4.54,4.54,0,1,1,9.08,0v4.06a21.32,21.32,0,0,0,9.09,0V115.6a4.54,4.54,0,0,1,9.08,0v6.22c0,4.64-5.09,7.41-13.63,7.41Z"/><path id="transport" d="M102.34,129.23c-8.53,0-13.62-2.77-13.62-7.41V115.6a4.54,4.54,0,0,1,9.08,0v4.06a21.28,21.28,0,0,0,9.08,0V115.6a4.55,4.55,0,0,1,9.09,0v6.22c0,4.64-5.09,7.41-13.63,7.41Z"/><path id="transport" d="M97.81,44.83H53.9a4.55,4.55,0,1,1,0-9.09H97.81a4.55,4.55,0,0,1,0,9.09Z"/><path id="transport" d="M54.28,84.2A6.8,6.8,0,1,0,61.07,91a6.8,6.8,0,0,0-6.79-6.8Z"/><path id="transport" d="M97.43,84.2a6.8,6.8,0,1,0,6.79,6.8,6.8,6.8,0,0,0-6.79-6.8Z"/><path id="transport" d="M107.08,81H44.63a6.82,6.82,0,0,1-6.82-6.82V54.28a6.82,6.82,0,0,1,6.82-6.81h62.45a6.82,6.82,0,0,1,6.81,6.81V74.15A6.83,6.83,0,0,1,107.08,81ZM44.63,52a2.28,2.28,0,0,0-2.28,2.27V74.15a2.28,2.28,0,0,0,2.28,2.27h62.45a2.27,2.27,0,0,0,2.27-2.27V54.28A2.27,2.27,0,0,0,107.08,52Z"/></svg>'}),emojiCategories.push({name:"objects",svg:'<svg id="objects" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150"><path id="objects" d="M107.78,129a4.55,4.55,0,0,1-2.67-.87l-30-21.79-30,21.79a4.53,4.53,0,0,1-5.34,0,4.58,4.58,0,0,1-1.65-5.08L49.59,87.82,19.6,66a4.54,4.54,0,0,1,2.67-8.22H59.34L70.8,22.55a4.55,4.55,0,0,1,8.64,0L90.89,57.81H128A4.54,4.54,0,0,1,130.63,66l-30,21.79,11.46,35.25a4.55,4.55,0,0,1-4.32,6ZM75.12,96.2a4.53,4.53,0,0,1,2.67.87l21.35,15.51L91,87.49a4.55,4.55,0,0,1,1.65-5.08L114,66.89H87.59a4.54,4.54,0,0,1-4.32-3.13l-8.15-25.1L67,63.76a4.53,4.53,0,0,1-4.32,3.13H36.25L57.61,82.41a4.54,4.54,0,0,1,1.65,5.08l-8.17,25.09L72.45,97.07a4.53,4.53,0,0,1,2.67-.87Z"/></svg>'});emojiCategories.map(function(item){var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.padding="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.style.display="table-cell",emojiLink.style.textAlign="center",emojiLink.id=String(item.name),"faces"==String(item.name)&&(emojiLink.style.background="#c2c2c2"),emojiLink.innerHTML=String(item.svg),emojiLink.onmousedown=clickCategory,emojiCategory.appendChild(emojiLink)}),[128513,128514,128515,128516,128517,128518,128521,128522,128523,128524,128525,128527,128530,128531,128532,128534,128536,128538,128540,128541,128542,128544,128545,128546,128547,128548,128549,128552,128553,128554,128555,128557,128560,128561,128562,128563,128565,128567].map(function(item){var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.margin="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.innerHTML=String.fromCodePoint(item),emojiLink.onmousedown=clickLink,facesCategory.appendChild(emojiLink)}),[128012,128013,128014,128017,128018,128020,128023,128024,128025,128026,128027,128028,128029,128030,128031,128032,128033,128034,128035,128036,128037,128038,128039,128040,128041,128043,128044,128045,128046,128047,128048,128049,128050,128051,128052,128053,128054,128055,128056,128057,128058,128059,128060].map(function(item){var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.margin="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.innerHTML=String.fromCodePoint(item),emojiLink.onmousedown=clickLink,animalsCategory.appendChild(emojiLink)}),[127813,127814,127815,127816,127817,127818,127820,127821,127822,127823,127825,127826,127827,127828,127829,127830,127831,127832,127836,127837,127838,127839,127840,127841,127842,127843,127844,127846,127848,127849,127850,127851,127852,127853,127856,127858,127859,127860,127863,127864,127867].map(function(item){var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.margin="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.innerHTML=String.fromCodePoint(item),emojiLink.onmousedown=clickLink,foodCategory.appendChild(emojiLink)}),[127921,127923,127934,127935,127936,127937,127938,127939,127940,127942,127944,127946,128675,128692,128693,9917,9918,9978,127907,127919,9971].map(function(item){var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.margin="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.innerHTML=String.fromCodePoint(item),emojiLink.onmousedown=clickLink,sportCategory.appendChild(emojiLink)}),[128641,128642,128646,128648,128650,128653,128654,128656,128660,128662,128664,128667,128668,128669,128670,128671,128672,128673,128640,128643,128644,128645,128647,128649,128652,128657,128658,128659,128661,128663,128665,128666,128674,128676,128690].map(function(item){var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.margin="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.innerHTML=String.fromCodePoint(item),emojiLink.onmousedown=clickLink,transportCategory.appendChild(emojiLink)}),[127890,127880,127881,127887,127891,127905,127906,127908,127909,127911,127912,127915,127916,127918,127919,127926,127927,127928,127929,127930,127931,127932,127968,127973,127978,128147,128148,128149,128150,128151,128152,128187,128186,128197,128213,128247].map(function(item){var emojiLi=document.createElement("li");emojiLi.style.display="inline-block",emojiLi.style.margin="5px";var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.margin="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.innerHTML=String.fromCodePoint(item),emojiLink.onmousedown=clickLink,objectsCategory.appendChild(emojiLink)}),emojiPicker.appendChild(emojiCategory),emojiPicker.appendChild(facesCategory),emojiPicker.appendChild(animalsCategory),emojiPicker.appendChild(foodCategory),emojiPicker.appendChild(sportCategory),emojiPicker.appendChild(transportCategory),emojiPicker.appendChild(objectsCategory),emojiContainer.appendChild(emojiPicker)}}]),MeteorEmoji}();module.exports=MeteorEmoji})},{}]},{},[1])(1)});

/***/ }),
/* 29 */
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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTU0ODliZGI2NDhiZWVhY2IzNjQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb29raWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy91c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vanMtc2VydmljZXMvdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2pzLXNlcnZpY2VzL2FwaS10YXNrLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wdWJzdWItanMvc3JjL3B1YnN1Yi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2ZvbGxvdy9mb2xsb3ctc3RhdHVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vanMtc2VydmljZXMvbmV0d29yay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2xvZ3MvbG9ncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3dpemFyZC1mb3JtL3dpemFyZC1mb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9hdXRvZ3JlZXRpbmcvYXV0b2dyZWV0aW5nLW1haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9hdXRvZ3JlZXRpbmcvYXV0b2dyZWV0aW5nLXN0YXR1cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2NoYXQtYm90LWJsb2NrL2NoYXQtYm90LWJsb2NrLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvY2hhdC1ib3QtYmxvY2svY2hhdC1ib3Qtc3RhdHVzLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvY29uZmlybS1yZWcvY29uZmlybS1yZWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9mb2xsb3cvZm9sbG93LmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaGVhZGVyL2J1cmdlci1tZW51L2J1cmdlci1tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaGVhZGVyL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2luc3RhZ3JhbS1hY2NvdW50cy1saXN0L2luc3RhZ3JhbS1hY2NvdW50cy1saXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvbG9naW4tZm9ybS9sb2dpbi1mb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvbWVzc2FnZXMvbWVzc2FnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9yZWdpc3Rlci1mb3JtL3JlZ2lzdGVyLWZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy9hcGktdXNlci1kaXJlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy9zcGlubmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9fYXV0aC9sb2dpbi1wYWdlLmpzIiwid2VicGFjazovLy8uL34vYnJ1dHVzaW4tanNvbi1mb3Jtcy9kaXN0L2pzL2JydXR1c2luLWpzb24tZm9ybXMubWluLmpzIiwid2VicGFjazovLy8uL3NyYy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vfi9tZXRlb3ItZW1vamkvZGlzdC9tZXRlb3JFbW9qaS5taW4uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyJdLCJuYW1lcyI6WyJDT05TVCIsInVybCIsInRtVHlwZXMiLCJmb2xsb3dpbmdUIiwiZm9sbG93aW5nU3ViVCIsImNoYXRCb3RUIiwiY2hhdEJvdFN1YlQiLCJhdXRvZ3JlZXRUIiwiYXV0b2dyZWV0U3ViVCIsImJhc2UiLCJyZWdpc3RyYXRpb24iLCJsb2dpbiIsImNvbmZpcm1hdGlvbiIsImluc3RhZ3JhbV9hZGRBY2NvdW50IiwiaW5zdGFncmFtQWNjb3VudF9nZXRNZXRhRGF0YSIsImluc3RhZ3JhbUFjY291bnRfY2hlY2twb2ludCIsImluc3RhZ3JhbUFjY291bnRfY29uZmlybUtleSIsImluc3RhZ3JhbURpcmVjdF9nZXRNZXRhRGF0YSIsImluc3RhZ3JhbURpcmVjdF9wb3N0TWVzc2FnZSIsImluc3RhZ3JhbVRhc2tNYW5hZ2VyIiwiaW5zdGFncmFtVGFza01hbmFnZXJfZ2V0TWV0YURhdGEiLCJpbnN0YWdyYW1UYXNrTWFuYWdlcl9nZXRUYXNrVHlwZXMiLCJpbnN0YWdyYW1UYXNrTWFuYWdlcl9nZXRUYXNrQnlUeXBlcyIsInR5cGUiLCJzdWJ0eXBlIiwiaW5zdGFncmFtVGFza01hbmFnZXJfZ2V0RGVmYXVsdENvbmZpZ3MiLCJpbnN0YWdyYW1UYXNrTWFuYWdlcl9wb3N0U3RhcnRGb2xsb3dpbmdMaXN0IiwiaW5zdGFncmFtVGFza01hbmFnZXJfcHV0U3RvcFRhc2tCeUlEIiwiaWQiLCJpbnN0YWdyYW1UYXNrTWFuYWdlcl9kZWxSZW1vdmVUYXNrQnlJRCIsImluc3RhZ3JhbVRhc2tNYW5hZ2VyX3Bvc3RTdGFydENoYXRCb3QiLCJpbnN0YWdyYW1UYXNrTWFuYWdlcl9nZXRMb2dzQ2hhdEJvdCIsInBhdGgiLCJwYWdlIiwidXNlcm5hbWUiLCJ1c2VyIiwiZW1haWwiLCJwYXNzd29yZCIsInRva2VuIiwiY29va2llU3RvcmFnZSIsImVtYWlsQ29uZmlybWVkIiwidWlTZWxlY3RvcnMiLCJoZWFkZXJMb2dpbkJveCIsImhlYWRlck5hdkxvZ2luQnRuIiwiaGVhZGVyUmVnQm94IiwiaGVhZGVyUmVnQnRuIiwiaW5zdGFncmFtIiwiYWRkQWNjb3VudEJ0blNlbGVjdG9yIiwiYWRkQWNjb3VudEJ0bklkIiwiZXZlbnRzIiwiVVNFUl9MT0dHRUQiLCJVU0VSX0xPR09VVCIsIlVTRVJfRU1BSUxfQ09ORklSTUVEIiwiU1RPUF9GSVhFRF9TUElOTkVSIiwibWVzc2FnZXMiLCJSRUNJRVZFX05FV19NRVNTQUdFIiwiaW5zdGFncmFtQWNjb3VucyIsIklOU1RBR1JBTV9BQ0NPVU5TX1JFTkRFUkVEIiwidGFza3MiLCJORVdfVEFTS19DUkVBVEVEIiwiZ2V0UGF0aCIsIm5hbWUiLCJnZXRQYXRoVHlwZVN1YnR5cGUiLCJDb29raWVTcnYiLCJnZXQiLCJjIiwiZG9jdW1lbnQiLCJjb29raWUiLCJtYXRjaCIsImRlY29kZVVSSUNvbXBvbmVudCIsInNldCIsInZhbHVlIiwib3B0cyIsImRheXMiLCJPYmplY3QiLCJlbnRyaWVzIiwicmVkdWNlIiwic3RyIiwiayIsInYiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZW1vdmUiLCJVc2VyIiwibmV0d29yayIsIk5ldHdvcmsiLCJDb29raWVTdG9yYWdlIiwic2V0dGluZ1Bvc3QiLCJtZXRob2QiLCJoZWFkZXJzIiwiZ2V0VG9rZW4iLCJjb29raWVUb2tlbiIsImZvcm1EYXRhIiwiY2JFcnJvciIsInNldHRpbmciLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInNlbmRSZXF1ZXN0IiwiY2hlY2twb2ludFR5cGUiLCJrZXkiLCJ1c2VySW5zdGFuY2UiLCJ2aWV3VXRpbHMiLCJzaG93SW5mb01lc3NhZ2UiLCJzZWxlY3RvciIsIm1lc3NhZ2UxIiwibWVzc2FnZTIiLCIkIiwiZW1wdHkiLCJhcHBlbmQiLCJmaWxsTGlzdCIsIiRsaXN0IiwiZGF0YUFycmF5IiwiaXRlbXMiLCJjTGlzdCIsImZvckVhY2giLCJpdGVtIiwiaSIsImxpIiwiYXBwZW5kVG8iLCJhZGRDbGFzcyIsInRleHQiLCJpc0VtYWlsIiwicmVnZXgiLCJ0ZXN0IiwiZ2V0Rm9ybWF0dGVkRGF0ZVV0aWwiLCJ0U3RhbXAiLCJzaG93RnVsbFRpbWUiLCJkYXRlIiwiRGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXkiLCJnZXREYXRlIiwiaG91ciIsImdldEhvdXJzIiwibWluIiwiZ2V0TWludXRlcyIsInNlYyIsImdldFNlY29uZHMiLCJnZXRGdWxsWWVhciIsIlVzZXJUYXNrTWFuYWdlciIsInBvc3RTdGFydEZvbGxvd2luZ0xpc3QiLCJwb3N0U3RhcnRDaGF0Qm90IiwiYXNIZWFkZXIiLCJkZXRhaWxzIiwidGFza0lkIiwiZ2V0VGFza3NEYXRhIiwiaW5pdCIsImZpbGxMaXN0TWV0YSIsImlzUnVucyIsImxlbmd0aCIsInByb2dyZXNzIiwidGFza19pZCIsInN0YXR1cyIsInN0YXRlIiwicmVhc29uIiwidGltZXN0YW1wIiwiaW5pdEhhbmRsZXJzIiwiaG9sZGVycyIsIl9wYXRoIiwiJGJ0blN0b3BUYXNrIiwiJGJ0bkRlbFRhc2siLCJnZXRUYXNrSUQiLCJlIiwiYnRuIiwidGFyZ2V0IiwiY2xvc2VzdCIsImRhdGEiLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJzdG9wVGFza0J5SUQiLCJ0aGVuIiwicmVzdWx0IiwiZGVsZXRlVGFza0J5SUQiLCIkcnVucyIsIiRzdG9wcGVkIiwiZ2V0TWV0YWRhdGEiLCJtZXRhIiwid2luZG93IiwiUHViU3ViIiwic3Vic2NyaWJlIiwiZXZlbnROYW1lIiwiJGVsIiwibWVzc2FnZSIsInJlc3BvbnNlIiwiZXJyb3IiLCJFcnJvciIsInN0YXR1c1RleHQiLCJVUkwiLCJPUFRTIiwiZmV0Y2giLCJQcm9taXNlIiwiYWxsIiwianNvbiIsIm9rIiwiY2JFcnJvckRlZmF1bHQiLCJjaGVja1N0YXR1cyIsImNsc0NvbnN0IiwiY3VycmVudFBhZ2VDbHMiLCJ0YXNrc0xpc3QiLCJsb2dzVGFiQnRuIiwicGFnaW5hdGlvbiIsInBhZ2luYXRpb25QZ051bWJlciIsInNlbGVjdENscyIsImdldFVzZXJuYW1lIiwidmFsIiwiY3VycmVudFBhZ2UiLCJpbnRlcnZhbElkIiwiaW5pdEhhbmRsZXJQYWdpbmF0aW9uIiwiJHByZXZpb3VzIiwiJG5leHQiLCIkd3JhcHBlciIsInNldHRpbmdzIiwibGFzdFBhZ2UiLCJwYWdlcyIsIiRsaUFjdGl2ZSIsImZpbmQiLCJwcmV2aW91cyIsInByb3AiLCJyZW1vdmVDbGFzcyIsImdldExvZ3NEYXRhIiwiY3VycmVudEFjdGl2ZUlkeCIsImluZGV4IiwibmV4dCIsInBhcmVudCIsImhhc0NsYXNzIiwicGFyc2VJbnQiLCJhZGRQYWdpbmF0aW9uIiwidHBsUHJldmlvdXMiLCJ0cGxOZXh0IiwiY2xlYXJQYWdpbmF0aW9uIiwiY3VycmVudCIsIiR3cmFwcGVyUGFnaW5hdGlvbiIsImxvZ3MiLCJsZXZlbCIsImdldExvZ3NDaGF0Qm90IiwidXBkYXRlSW50ZXJ2YWwiLCJpbnZva2VfaW5fbWlsbGlzIiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwicHJlQ29uZmlnIiwiY2ZnIiwicGF0aFR5cGUiLCJwYXRoU3ViVHlwZSIsIl9zZWxlY3RDbHMiLCJpbml0U3RlcHMiLCJmb3JtU2VsZWN0b3IiLCJ3aXphcmRDZmciLCIkZm9ybSIsInN0ZXBSZWR1Y2VyIiwib25TdWJtaXRIYW5kbGVyIiwiZmFkZUluIiwicGFyZW50X2ZpZWxkc2V0IiwicGFyZW50cyIsIm5leHRfc3RlcCIsInJhZGlvQnRuQWN0aXZlIiwiZWFjaCIsImZhZGVPdXQiLCJwcmV2IiwicHJldmVudERlZmF1bHQiLCJtb2RpZnlBY2NMaXN0IiwicmFkaW9CdG5BcHBlbmQiLCJpZHgiLCJyYWRpb0J0bldyYXAiLCIkYWNjb3VudHNMaXN0IiwiJGxpIiwid3JhcElubmVyIiwiJHBhcmVudEZpZWxkc2V0IiwiaGVhZGVyIiwiYnVyZ2VyTWVudSIsImluc3RhZ3JhbUFjY291bnRzIiwiZm9sbG93IiwiY2hhdEJvdCIsImF1dG9ncmVldGluZyIsInNlbGVjdG9yQ3NzTG9naW5Gb3JtIiwiX2xvZ2luQm94IiwiX2Zvcm1JZCIsIl9idXR0b25TdWJtaXRJZCIsIl9zaG93TG9naW5Cb3hCdG5JZCIsInNlbGVjdG9yQ3NzTG9naW5Gb3JtSW5zdGFncmFtIiwiaXNMb2dpbkluc3RhZ3JhbSIsInNldFB1YlN1YiIsIlJlZ2lzdGVyRm9ybSIsImluaXRIZWFkZXIiLCJ3aXphcmRGb3JtIiwiY2hhdEJvdFN0YXR1cyIsImNoYXRCb3RMb2dzIiwidXNlcm5hbWVTZWxlY3RlZCIsInVzZXJMaXN0SW5zdGFncmFtIiwic3BlZWRUeXBlIiwiZmllbGRzIiwicmVxQm9keSIsInB1c2giLCJuUmVxQm9keSIsInJlcyIsIm1zZyIsImZpbGxMaXN0VXNlcnMiLCJpbml0Q2hhdE1zZyIsInRwbFRleHRGaWVsZCIsImxhc3RUZXh0RmllbGQiLCJsYXN0IiwiaW5zZXJ0QWZ0ZXIiLCJ0cmlnZ2VyIiwicHVibGlzaCIsInNldFVzZXJOYW1lIiwidXNlcl9kZWZhdWx0X2NvbmZpZyIsInRhc2tfbW9kZSIsImdldERhdGFTdGVwU3BlZWQiLCJmaWxsU3BlZWRMaXN0IiwidGFza01vZGVzIiwidGFza19tb2RlcyIsInJhZGlvQnRuUmVkdWNlciIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImdldERlZmF1bHRDb25maWdzIiwiZm91bmQiLCJhdHRyIiwidG9VcHBlckNhc2UiLCJzdGVwTnVtYmVyIiwiZGF0YU9iaiIsIndyYXBwZXJzIiwia2V5V29yZHMiLCJ0cmltIiwicmVwbGFjZSIsInNwbGl0IiwiZmlsdGVyIiwia2V5V29yZCIsImFuc3dlciIsImNvbmZpcm1hdGlvbldpdGhSZWRpcmVjdCIsInBhcnNlUXVlcnlTdHJpbmciLCJsb2NhdGlvbiIsInNlYXJjaCIsIm9ialVSTCIsIlJlZ0V4cCIsIiQwIiwiJDEiLCIkMiIsInBhcmFtcyIsInNlbmRDb25maXJtIiwiY29uZmlybSIsImN1c3RvbWVyc0RhdGFTdHJpbmciLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRUaW1lb3V0IiwicmVkaXJlY3QiLCJwYXRobmFtZSIsImluZGV4T2YiLCJmb2xsb3dTdGF0dXMiLCJjb3VudCIsInBlcmNlbnQiLCJnZXREYXRhU3RlcDIiLCJ1c2Vyc05hbWUiLCJ1c2VycyIsImdlbmRlclZhbCIsImNyaXRlcmlhIiwiZ2VuZGVyIiwibGltaXQiLCJmb3JtcyIsImhhdmVfcG9zdHMiLCJmcm9tIiwidG8iLCJoYXZlX2ZvbGxvd2VycyIsImhhdmVfZm9sbG93aW5ncyIsImZvY3VzIiwic2VsZWN0b3JzRWwiLCJsZWZ0TWVudSIsImhhbWJ1cmdlckJ1dHRvbkNscyIsImhhbWJ1cmdlck1lbnVDbHMiLCJoYW1idXJnZXJNZW51T3BlbmVkQ2xhc3MiLCJoYW1idXJnZXJCdXR0b25DbG9zZUNsYXNzIiwicmlnaHRNZW51Iiwic3ViSGVhZGVyIiwidG9nZ2xlSGFtYnVyZ2VyTWVudSIsIm1lbnVOYW1lIiwidG9nZ2xlQ2xhc3MiLCJiaW5kIiwic2VsZWN0b3JMb2dpblN0YXRlIiwic2VsZWN0b3JFbWFpbENvbmZpcm1TdGF0ZSIsImNsb3NlQ2xhc3MiLCJvcGVuZWRDbGFzcyIsImVtYWlsTm90Q29uZmlybWVkIiwiJGVtYWlsbk1zZyIsImNzcyIsIm9uTG9naW5TdWJzY3JpYmUiLCIkbG9naW5Nc2ciLCJpc0VtYWlsQ29uZmlybWVkIiwic2hvd0xvZ291dCIsImlzTG9nZ2VkIiwiaXNMb2dnZWRJbiIsInNob3ciLCJvbGRVUkwiLCJyZWZlcnJlciIsImluY2x1ZGVzIiwiJGxvZ2luQm94IiwiJHJlZ2lzdGVyQm94IiwiaGlkZSIsImFkZEluc3RhZ3JhbUFjY291bnQiLCJuZXdGb3JtRGF0YSIsIiRtc2dMaXN0IiwiY2F0Y2giLCJlcnIiLCJhZGRPbkxvYWRIYW5kbGVycyIsIiRtb2RhbEJvZHkiLCJmb3JtIiwiY3NzVmFsaWRhdGlvbkNsYXNzIiwiY2hlY2tWYWxpZGl0eSIsInJlcG9ydFZhbGlkaXR5IiwiYWRkTGlzdEhhbmRsZXIiLCIkYnV0dG9uIiwic2VuZFRvIiwic3RvcFByb3BhZ2F0aW9uIiwibW9kYWwiLCJnZXRTZWN1cml0eUtleSIsIiRtb2RhbCIsIiRrZXlJbnB1dCIsImNvbmZpcm1TZWN1cml0eUtleSIsImxlbiIsIm1pbkxlbiIsIk51bWJlciIsIm9uSGlkZU1vZGFsIiwicmVtb3ZlQXR0ciIsInR5cGVTZWxlY3RlZCIsImNoZWNrcG9pbnRUeXBlQWN0aXZlIiwibW9kYWxDb25maWciLCJfY29uZmlnIiwiZGVmYXVsdEF2YXRhclNyYyIsImluc2VydEl0ZW0iLCJjc3NDbHMiLCJsaVRwbCIsInN0YXRzIiwiaW5mbyIsInRwbCIsImNoZWNrcG9pbnQiLCJtZXRhZGF0YSIsInJlc2VuZFJlcXVlc3QiLCJpc1NlbmRSZXFPbmNlIiwiY2hlY2tSZXNwb25zZSIsImlzUmVzZW5kUmVxdWVzdCIsImFjY291bnRzIiwiTG9naW5Gb3JtIiwic2VsZWN0b3JDc3MiLCIkZW1haWwiLCIkdGV4dEFyZWFEZXNjcmlwdGlvbiIsInVzZXJMb2dpbkhlYWRlciIsIl9mb3JtRGF0YSIsInN1Ym1pdEZvcm0iLCJmb3JtRGF0YU9iaiIsInRvTG9jYWxlTG93ZXJDYXNlIiwibG9nT3V0IiwiYmluZEV2ZW50cyIsIiRzaG93TG9naW5Cb3hCdG5JZCIsIiRidXR0b25TdWJtaXQiLCJldmVudCIsImlzTG9naW5CdG5DbGljayIsImlzQWRkSW5zdGFncmFtQnRuQ2xpY2tlZCIsImlzSW5NZXNzYWdlUGFnZSIsIiR1c2VyTGlzdCIsInJlYWR5IiwibSIsIk1ldGVvckVtb2ppIiwiJHBpY2tlciIsInN0eWxlIiwic3R5bGVOZXciLCJpc0FwcGVudFByZXZNc2ciLCJpbnNlcnRNc2ciLCJ0b0xvd2VyQ2FzZSIsImFkZFRvTGlzdCIsImluc2VydEJlZm9yZSIsInNpZGUiLCJjdXJzb3IiLCJwcmV2X2N1cnNvciIsInVzZXJEYXRhIiwiY29udmVyc2F0aW9uSWQiLCJTcGlubmVyIiwic3RhcnRCdXR0b25TcGlubmVyIiwiVXNlckNvbnZlcnNhdGlvbiIsImdldE1ldGFkYXRhRGV0YWlsQ29udmVyc2F0aW9uIiwic3RvcEJ1dHRvblNwaW5uZXIiLCJmaWxsVXNlckxpc3QiLCJjb252ZXJzYXRpb25EZXRhaWwiLCJhZGRDb252ZXJzYXRpb25zIiwiY29udmVyc2F0aW9ucyIsImdldEFuZEZpbGxVc2VyTGlzdCIsImlzQWN0aXZlRmlyc3QiLCJwcmV2QWN0aXZlRGlhbG9nSWQiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwiZ2V0QW5kRmlsbENvbnZlcnNhdGlvbiIsImlzU2Nyb2xsRG93biIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJhZGRIYW5kbGVycyIsIiR0ZXh0QXJlYSIsImFkZCIsInBvc3RNZXRhZGF0YURldGFpbENvbnZlcnNhdGlvbiIsInJlc3VsdEZyb21TZXJ2ZXIiLCIkZGlhbG9nIiwic2VsZWN0b3JDbHMiLCJzdWJtaXRCdG4iLCIkcGFzc3dvcmQiLCIkcGFzc3dvcmRDb25maXJtIiwicGFzc3dvcmRDb25maXJtIiwicmVnaXN0ZXIiLCJyZWdpc3RlckJveCIsIiRidG4iLCJpcyIsImlzUmVnQnRuQ2xpY2siLCJjbGFzc2VzIiwiaW5saW5lIiwib3ZlcmxheSIsImZpeGVkIiwiYnV0dG9uIiwiX2NmZyIsIm5ld0NscyIsInByZXBlbmQiLCJleHRlbmQiLCJwcmV3Q2xzIiwic3Bpbm5lckluc3RhbmNlIiwiTG9naW5QYWdlIiwiaHJlZiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDaEVPLElBQU1BLHdCQUFRO0FBQ2pCQyxTQUFLO0FBQ0RDLGlCQUFTO0FBQ0xDLHdCQUFZLFdBRFA7QUFFTEMsMkJBQWUsQ0FBQyxnQkFBRCxDQUZWO0FBR0xDLHNCQUFVLFVBSEw7QUFJTEMseUJBQWEsQ0FBQyxrQkFBRCxDQUpSO0FBS0xDLHdCQUFZLGVBTFA7QUFNTEMsMkJBQWUsQ0FBQyx1QkFBRDtBQU5W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QTRRLDBDQUEwQyxrVEFBa1QsbVJBQW1SLHlDQUF5QyxnRUFBZ0UsMENBQTBDLGdUQUFnVCxtVUFBbVUsZUFBZSxHQUFHLDJCQUEyQixFQUFFLEdBQUcsRUFBRSxHQUFHLFNBQVMsRTs7Ozs7O0FDQS9vbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImluZGV4LWFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMzApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDk1NDg5YmRiNjQ4YmVlYWNiMzY0IiwiZXhwb3J0IGNvbnN0IENPTlNUID0ge1xyXG4gICAgdXJsOiB7XHJcbiAgICAgICAgdG1UeXBlczoge1xyXG4gICAgICAgICAgICBmb2xsb3dpbmdUOiAnRk9MTE9XSU5HJyxcclxuICAgICAgICAgICAgZm9sbG93aW5nU3ViVDogWydGT0xMT1dJTkdfTElTVCddLFxyXG4gICAgICAgICAgICBjaGF0Qm90VDogJ0NIQVRfQk9UJyxcclxuICAgICAgICAgICAgY2hhdEJvdFN1YlQ6IFsnREVGQVVMVF9DSEFUX0JPVCddLFxyXG4gICAgICAgICAgICBhdXRvZ3JlZXRUOiAnQVVUT19HUkVFVElORycsXHJcbiAgICAgICAgICAgIGF1dG9ncmVldFN1YlQ6IFsnREVGQVVMVF9BVVRPX0dSRUVUSU5HJ11cclxuICAgICAgICB9LFxyXG4gICAgICAgIGJhc2U6ICdodHRwOi8vYXBpLmx1eGdyYW0ucnUvdjEvJyxcclxuICAgICAgICByZWdpc3RyYXRpb246ICdyZWdpc3RyYXRpb24vYmFzaWMvJyxcclxuICAgICAgICBsb2dpbjogJ3JlZ2lzdHJhdGlvbi9iYXNpYy9sb2dpbicsXHJcbiAgICAgICAgY29uZmlybWF0aW9uOiAncmVnaXN0cmF0aW9uL2Jhc2ljL2NvbmZpcm1hdGlvbj90b2tlbicsXHJcbiAgICAgICAgaW5zdGFncmFtX2FkZEFjY291bnQ6ICdpbnN0YWdyYW0tYWNjb3VudHMvJywgLy8gdG9ETzogY2hlY2sgaXMgcmVkdW5kYW50XHJcbiAgICAgICAgaW5zdGFncmFtQWNjb3VudF9nZXRNZXRhRGF0YTogJ2luc3RhZ3JhbS1hY2NvdW50cy9tZXRhJyxcclxuICAgICAgICBpbnN0YWdyYW1BY2NvdW50X2NoZWNrcG9pbnQ6ICdpbnN0YWdyYW0tYWNjb3VudHMvY2hlY2twb2ludC8nLFxyXG4gICAgICAgIGluc3RhZ3JhbUFjY291bnRfY29uZmlybUtleTogJ2luc3RhZ3JhbS1hY2NvdW50cy9jaGVja3BvaW50LycsXHJcbiAgICAgICAgaW5zdGFncmFtRGlyZWN0X2dldE1ldGFEYXRhOiAnaW5zdGFncmFtLWRpcmVjdC9tZXRhJyxcclxuICAgICAgICBpbnN0YWdyYW1EaXJlY3RfcG9zdE1lc3NhZ2U6ICdpbnN0YWdyYW0tZGlyZWN0LycsXHJcbiAgICAgICAgaW5zdGFncmFtVGFza01hbmFnZXI6ICdpbnN0YWdyYW0tdGFzay1tYW5hZ2VyLycsXHJcbiAgICAgICAgaW5zdGFncmFtVGFza01hbmFnZXJfZ2V0TWV0YURhdGE6ICdpbnN0YWdyYW0tdGFzay1tYW5hZ2VyL21ldGEnLFxyXG4gICAgICAgIGluc3RhZ3JhbVRhc2tNYW5hZ2VyX2dldFRhc2tUeXBlczogJ2luc3RhZ3JhbS10YXNrLW1hbmFnZXIvdGFzay90eXBlcycsXHJcbiAgICAgICAgaW5zdGFncmFtVGFza01hbmFnZXJfZ2V0VGFza0J5VHlwZXM6ICh0eXBlLCBzdWJ0eXBlKSA9PiBgaW5zdGFncmFtLXRhc2stbWFuYWdlci9tZXRhL3R5cGUvJHt0eXBlfS9zdWJ0eXBlLyR7c3VidHlwZX1gLFxyXG4gICAgICAgIGluc3RhZ3JhbVRhc2tNYW5hZ2VyX2dldERlZmF1bHRDb25maWdzOiAnaW5zdGFncmFtLXRhc2stbWFuYWdlci9jb25maWcvdHlwZScsIC8vIHtTVFJBVEVHWV9UWVBFfS9zdWJ0eXBlL3tTVFJBVEVHWV9TVUJUWVBFfVxyXG4gICAgICAgIGluc3RhZ3JhbVRhc2tNYW5hZ2VyX3Bvc3RTdGFydEZvbGxvd2luZ0xpc3Q6ICdpbnN0YWdyYW0tdGFzay1tYW5hZ2VyL3Rhc2snLFxyXG4gICAgICAgIGluc3RhZ3JhbVRhc2tNYW5hZ2VyX3B1dFN0b3BUYXNrQnlJRDogaWQgPT4gYGluc3RhZ3JhbS10YXNrLW1hbmFnZXIvdGFzay8ke2lkfWAsXHJcbiAgICAgICAgaW5zdGFncmFtVGFza01hbmFnZXJfZGVsUmVtb3ZlVGFza0J5SUQ6IGlkID0+IGBpbnN0YWdyYW0tdGFzay1tYW5hZ2VyL3Rhc2svJHtpZH1gLFxyXG4gICAgICAgIGluc3RhZ3JhbVRhc2tNYW5hZ2VyX3Bvc3RTdGFydENoYXRCb3Q6ICdpbnN0YWdyYW0tdGFzay1tYW5hZ2VyL3Rhc2snLFxyXG4gICAgICAgIGluc3RhZ3JhbVRhc2tNYW5hZ2VyX2dldExvZ3NDaGF0Qm90OiAocGF0aCwgcGFnZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB7dHlwZSwgc3VidHlwZSwgdXNlcm5hbWV9ID0gcGF0aDtcclxuICAgICAgICAgICAgcmV0dXJuIGBpbnN0YWdyYW0tdGFzay1tYW5hZ2VyL2xvZ3MvdHlwZS8ke3R5cGV9L3N1YnR5cGUvJHtzdWJ0eXBlfS9hY2NvdW50LyR7dXNlcm5hbWV9JHtwYWdlID8gYD9wYWdlPSR7cGFnZX1gIDogJyd9YDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgdXNlcjoge1xyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgdG9rZW46ICcnXHJcbiAgICB9LFxyXG4gICAgY29va2llU3RvcmFnZToge1xyXG4gICAgICAgIHRva2VuOiAndXNlcl9sb2dnZWQnLFxyXG4gICAgICAgIGVtYWlsQ29uZmlybWVkOiAnZW1haWxfY29uZmlybWVkJ1xyXG4gICAgfSxcclxuICAgIHVpU2VsZWN0b3JzOiB7XHJcbiAgICAgICAgaGVhZGVyTG9naW5Cb3g6ICduYXYgLmxvZ2luLWJveCcsXHJcbiAgICAgICAgaGVhZGVyTmF2TG9naW5CdG46ICduYXYgdWwgbGkgLmpzX2xvZ2luJyxcclxuICAgICAgICBoZWFkZXJSZWdCb3g6ICduYXYgLnJlZ2lzdGVyLWJveCcsXHJcbiAgICAgICAgaGVhZGVyUmVnQnRuOiAnbmF2IHVsIGxpIC5qc19yZWdpc3RlcicsXHJcbiAgICAgICAgaW5zdGFncmFtOiB7XHJcbiAgICAgICAgICAgIGFkZEFjY291bnRCdG5TZWxlY3RvcjogJyNqc19zaG93LWxvZ2luLWJveCcsXHJcbiAgICAgICAgICAgIGFkZEFjY291bnRCdG5JZDogJ2pzX3Nob3ctbG9naW4tYm94J1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBldmVudHM6IHtcclxuICAgICAgICBVU0VSX0xPR0dFRDogJ3VzZXJfbG9nZ2VkJyxcclxuICAgICAgICBVU0VSX0xPR09VVDogJ3VzZXJfbG9nb3V0JyxcclxuICAgICAgICBVU0VSX0VNQUlMX0NPTkZJUk1FRDogJ3VzZXJfZW1haWxfY29uZmlybWVkJyxcclxuICAgICAgICBTVE9QX0ZJWEVEX1NQSU5ORVI6ICdzdG9wX2ZpeGVkX3NwaW5uZXInLFxyXG4gICAgICAgIG1lc3NhZ2VzOiB7XHJcbiAgICAgICAgICAgIFJFQ0lFVkVfTkVXX01FU1NBR0U6ICdyZWNlaXZlX25ld19tZXNzYWdlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5zdGFncmFtQWNjb3Vuczoge1xyXG4gICAgICAgICAgICBJTlNUQUdSQU1fQUNDT1VOU19SRU5ERVJFRDogJ2luc3RhZ3JhbV9hY2NvdW5zX3JlbmRlcmVkJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGFza3M6IHtcclxuICAgICAgICAgICAgTkVXX1RBU0tfQ1JFQVRFRDogJ25ld190YXNrX2NyZWF0ZWQnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGdldFBhdGgobmFtZSwgaWQpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMudXJsW25hbWVdID09PSAnZnVuY3Rpb24nICYmIGlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVybC5iYXNlICsgdGhpcy51cmxbbmFtZV0oaWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy51cmwuYmFzZSArIHRoaXMudXJsW25hbWVdO1xyXG4gICAgfSxcclxuICAgIGdldFBhdGhUeXBlU3VidHlwZShuYW1lLCBwYXRoLCBwYWdlKSB7XHJcbiAgICAgICAgY29uc3Qge3R5cGUsIHN1YnR5cGUsIHVzZXJuYW1lfSA9IHBhdGg7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnVybFtuYW1lXSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlICYmIHN1YnR5cGUpIHtcclxuICAgICAgICAgICAgaWYgKHVzZXJuYW1lICYmIHBhZ2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnVybC5iYXNlICsgdGhpcy51cmxbbmFtZV0ocGF0aCwgcGFnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHVzZXJuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy51cmwuYmFzZSArIHRoaXMudXJsW25hbWVdKHBhdGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVybC5iYXNlICsgdGhpcy51cmxbbmFtZV0odHlwZSwgc3VidHlwZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnVybC5iYXNlICsgdGhpcy51cmxbbmFtZV07XHJcbiAgICB9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tb24vanMtc2VydmljZXMvY29uc3RzLmpzIiwiXHJcbmNvbnN0IENvb2tpZVNydiA9IHtcclxuICAgIGdldDogbmFtZSA9PiB7XHJcbiAgICAgICAgY29uc3QgYyA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChgKD86KD86XnwuKjsgKikke25hbWV9ICo9ICooW147XSopLiokKXxeLiokYClbMV07XHJcbiAgICAgICAgaWYgKGMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChjKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2V0OiAobmFtZSwgdmFsdWUsIG9wdHMgPSB7cGF0aDogJy8nLCBkYXlzOiAzNjV9KSA9PiB7XHJcbiAgICAgICAgaWYgKG9wdHMuZGF5cykge1xyXG4gICAgICAgICAgICBvcHRzWydtYXgtYWdlJ10gPSBvcHRzLmRheXMgKiA2MCAqIDYwICogMjQ7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBvcHRzLmRheXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxyXG4gICAgICAgIG9wdHMgPSBPYmplY3QuZW50cmllcyhvcHRzKS5yZWR1Y2UoKHN0ciwgW2ssIHZdKSA9PiBgJHtzdHJ9OyAke2t9PSR7dn1gLCAnJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gYCR7bmFtZX09JHtlbmNvZGVVUklDb21wb25lbnQodmFsdWUpICsgb3B0c31gO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZTogKG5hbWUsIG9wdHMpID0+IENvb2tpZVNydi5zZXQobmFtZSwgJycsIHsnbWF4LWFnZSc6IC0xLCBwYXRoOiAnLycsIGRheXM6IDAsIC4uLm9wdHN9KVxyXG4gICAgLy8gcGF0aCAmIGRvbWFpbiBtdXN0IG1hdGNoIGNvb2tpZSBiZWluZyBkZWxldGVkXHJcbn07XHJcblxyXG4vKlxyXG5jbGFzcyBDb29raWVTdG9yYWdlIHtcclxuICAgIHJlYWQoa2V5KSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSAkLmNvb2tpZShrZXkpO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENvb2tpZShuYW1lLCB2YWx1ZSwgZGF5cykge1xyXG4gICAgICAgIGxldCBleHBpcmVzID0gJyc7XHJcbiAgICAgICAgaWYgKGRheXMpIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIChkYXlzICogMjQgKiA2MCAqIDYwICogMTAwMCkpO1xyXG4gICAgICAgICAgICBleHBpcmVzID0gYDsgZXhwaXJlcz0ke2RhdGUudG9VVENTdHJpbmcoKX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBgJHtuYW1lfSA9JHsodmFsdWUgfHwgJycpICsgZXhwaXJlc307IHBhdGg9L2A7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29va2llKG5hbWUpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGA7ICR7ZG9jdW1lbnQuY29va2llfWA7XHJcbiAgICAgICAgY29uc3QgcGFydHMgPSB2YWx1ZS5zcGxpdChgOyAke25hbWV9PWApO1xyXG4gICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPT0gMikge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFydHMucG9wKCkuc3BsaXQoJzsnKS5zaGlmdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4qL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29va2llU3J2O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uL2pzLXNlcnZpY2VzL2Nvb2tpZS5qcyIsIi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCB7Q09OU1R9IGZyb20gJy4vY29uc3RzJztcclxuaW1wb3J0IE5ldHdvcmsgZnJvbSAnLi9uZXR3b3JrJztcclxuaW1wb3J0IENvb2tpZVN0b3JhZ2UgZnJvbSAnLi9jb29raWUnO1xyXG5cclxuY2xhc3MgVXNlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5uZXR3b3JrID0gbmV3IE5ldHdvcmsoKTtcclxuICAgICAgICB0aGlzLmNvb2tpZVN0b3JhZ2UgPSBDb29raWVTdG9yYWdlO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ1Bvc3QgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBpc0xvZ2dlZEluKCkge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMuZ2V0VG9rZW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0VtYWlsQ29uZmlybWVkKCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5jb29raWVTdG9yYWdlLmdldChDT05TVC5jb29raWVTdG9yYWdlLmVtYWlsQ29uZmlybWVkKSA9PT0gJ2NvbmZpcm1lZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRva2VuKCkge1xyXG4gICAgICAgIGNvbnN0IGNvb2tpZVRva2VuID0gdGhpcy5jb29raWVTdG9yYWdlLmdldChDT05TVC5jb29raWVTdG9yYWdlLnRva2VuKTtcclxuICAgICAgICByZXR1cm4gY29va2llVG9rZW47XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW4oZm9ybURhdGEsIGNiRXJyb3IpIHtcclxuICAgICAgICBjb25zdCBzZXR0aW5nID0gey4uLnRoaXMuc2V0dGluZ1Bvc3QsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKX07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChDT05TVC5nZXRQYXRoKCdsb2dpbicpLCBzZXR0aW5nLCBjYkVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRJbnN0YWdyYW1BY2NvdW50KGZvcm1EYXRhLCBjYkVycm9yKSB7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZyA9IHtcclxuICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdCxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnNldHRpbmdQb3N0LmhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICB0b2tlbjogdGhpcy5nZXRUb2tlbigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QoQ09OU1QuZ2V0UGF0aCgnaW5zdGFncmFtX2FkZEFjY291bnQnKSwgc2V0dGluZywgY2JFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5zdGFncmFtQWNjb3VudCgpIHtcclxuICAgICAgICBjb25zdCBzZXR0aW5nID0ge1xyXG4gICAgICAgICAgICAuLi50aGlzLnNldHRpbmdQb3N0LFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnNldHRpbmdQb3N0LmhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICB0b2tlbjogdGhpcy5nZXRUb2tlbigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QoQ09OU1QuZ2V0UGF0aCgnaW5zdGFncmFtX2FkZEFjY291bnQnKSwgc2V0dGluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uZmlybSh0b2tlbikge1xyXG4gICAgICAgIC8vIGNvbnN0IGNvbmZpcm1VcmwgPSBDT05TVC5nZXRQYXRoKCdjb25maXJtYXRpb24nKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KGAke0NPTlNULmdldFBhdGgoJ2NvbmZpcm1hdGlvbicpICsgdG9rZW59YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXIoZm9ybURhdGEpIHtcclxuICAgICAgICBjb25zdCBzZXR0aW5nID0ge1xyXG4gICAgICAgICAgICAuLi50aGlzLnNldHRpbmdQb3N0LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSlcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QoQ09OU1QuZ2V0UGF0aCgncmVnaXN0cmF0aW9uJyksIHNldHRpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1ldGFkYXRhKHRva2VuLCBjYkVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChgJHtDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1BY2NvdW50X2dldE1ldGFEYXRhJyl9YCwge2hlYWRlcnM6IHt0b2tlbn19LCBjYkVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTZWN1cml0eUtleSh1c2VybmFtZSwgY2hlY2twb2ludFR5cGUpIHtcclxuICAgICAgICBjb25zdCBzZXR0aW5nID0ge1xyXG4gICAgICAgICAgICAuLi50aGlzLnNldHRpbmdQb3N0LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7J3R5cGUnOiBjaGVja3BvaW50VHlwZX0pLCAvLyB0b2RvOiB0bXAgc2V0LCBpdCBzaG91bGQgYmUgJ3R5cGUnXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QuaGVhZGVycyxcclxuICAgICAgICAgICAgICAgICd0b2tlbic6IHRoaXMuZ2V0VG9rZW4oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KGAke0NPTlNULmdldFBhdGgoJ2luc3RhZ3JhbUFjY291bnRfY2hlY2twb2ludCcpfSR7dXNlcm5hbWV9YCwgc2V0dGluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uZmlybVNlY3VyaXR5S2V5KGtleSwgdXNlcm5hbWUpIHtcclxuICAgICAgICBjb25zdCBzZXR0aW5nID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7J3NlY3VyaXR5X2NvZGUnOiBrZXl9KSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdC5oZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgJ3Rva2VuJzogJzNlMzIxZTYwMDI5NzExZTk5MjY0YTA0ODFjOGUxN2Q0JyAvLyB0b2RvOiB0aGlzLmdldFRva2VuKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChgJHtDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1BY2NvdW50X2NvbmZpcm1LZXknKX0ke3VzZXJuYW1lfWAsIHNldHRpbmcpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxubGV0IHVzZXJJbnN0YW5jZSA9IG51bGw7XHJcblxyXG5pZiAoIXVzZXJJbnN0YW5jZSkge1xyXG4gICAgdXNlckluc3RhbmNlID0gbmV3IFVzZXIoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlckluc3RhbmNlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uL2pzLXNlcnZpY2VzL3VzZXIuanMiLCIvLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG4vLyBpbXBvcnQge0NPTlNUfSBmcm9tICcuL2NvbnN0cyc7XHJcblxyXG5mdW5jdGlvbiB2aWV3VXRpbHMoKSB7XHJcbiAgICBmdW5jdGlvbiBzaG93SW5mb01lc3NhZ2Uoc2VsZWN0b3IsIG1lc3NhZ2UxLCBtZXNzYWdlMikge1xyXG4gICAgICAgICQoc2VsZWN0b3IpLmVtcHR5KClcclxuICAgICAgICAgICAgLmFwcGVuZChgJHsobWVzc2FnZTEpID8gYDxwPnN0YXR1czogJHttZXNzYWdlMX08L3A+YCA6ICcnfWApXHJcbiAgICAgICAgICAgIC5hcHBlbmQoYDxwPiR7bWVzc2FnZTJ9IDwvcD5gKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmaWxsTGlzdCgkbGlzdCwgZGF0YUFycmF5KSB7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSBkYXRhQXJyYXk7XHJcbiAgICAgICAgY29uc3QgY0xpc3QgPSAkbGlzdDtcclxuICAgICAgICBjTGlzdC5lbXB0eSgpO1xyXG4gICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbGkgPSAkKCc8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW1cIj48L2xpPicpXHJcbiAgICAgICAgICAgICAgICAuYXBwZW5kVG8oY0xpc3QpO1xyXG4gICAgICAgICAgICAkKCc8YS8+JykuYWRkQ2xhc3MoJ3VpLWFsbCcpXHJcbiAgICAgICAgICAgICAgICAudGV4dChpdGVtLnVzZXJuYW1lKVxyXG4gICAgICAgICAgICAgICAgLmFwcGVuZFRvKGxpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0VtYWlsKGVtYWlsKSB7XHJcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9cclxuICAgICAgICBjb25zdCByZWdleCA9IC9eKFthLXpBLVowLTlfListXSkrXFxAKChbYS16QS1aMC05LV0pK1xcLikrKFthLXpBLVowLTldezIsNH0pKyQvO1xyXG4gICAgICAgIHJldHVybiByZWdleC50ZXN0KGVtYWlsKTtcclxuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlICovXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Rm9ybWF0dGVkRGF0ZVV0aWwodFN0YW1wLCBzaG93RnVsbFRpbWUpIHtcclxuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodFN0YW1wKTtcclxuXHJcbiAgICAgICAgbGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTtcclxuICAgICAgICBsZXQgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XHJcbiAgICAgICAgbGV0IGhvdXIgPSBkYXRlLmdldEhvdXJzKCk7XHJcbiAgICAgICAgbGV0IG1pbiA9IGRhdGUuZ2V0TWludXRlcygpO1xyXG4gICAgICAgIGxldCBzZWMgPSBkYXRlLmdldFNlY29uZHMoKTtcclxuXHJcbiAgICAgICAgbW9udGggPSAobW9udGggPCAxMCA/ICcwJyA6ICcnKSArIG1vbnRoO1xyXG4gICAgICAgIGRheSA9IChkYXkgPCAxMCA/ICcwJyA6ICcnKSArIGRheTtcclxuICAgICAgICBob3VyID0gKGhvdXIgPCAxMCA/ICcwJyA6ICcnKSArIGhvdXI7XHJcbiAgICAgICAgbWluID0gKG1pbiA8IDEwID8gJzAnIDogJycpICsgbWluO1xyXG4gICAgICAgIHNlYyA9IChzZWMgPCAxMCA/ICcwJyA6ICcnKSArIHNlYztcclxuXHJcbiAgICAgICAgbGV0IHN0ciA9ICcnO1xyXG4gICAgICAgIGlmICghc2hvd0Z1bGxUaW1lKSB7XHJcbiAgICAgICAgICAgIHN0ciA9IGAke2hvdXJ9OiR7bWlufWA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3RyID0gYCR7ZGF0ZS5nZXRGdWxsWWVhcigpfS0ke21vbnRofS0ke2RheX1fJHtob3VyfToke21pbn06JHtzZWN9YDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzdHI7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzaG93SW5mb01lc3NhZ2UsXHJcbiAgICAgICAgZmlsbExpc3QsXHJcbiAgICAgICAgaXNFbWFpbCxcclxuICAgICAgICBnZXRGb3JtYXR0ZWREYXRlVXRpbFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdmlld1V0aWxzKCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tb24vanMtc2VydmljZXMvdmlldy5qcyIsIi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCB7Q09OU1R9IGZyb20gJy4vY29uc3RzJztcclxuaW1wb3J0IE5ldHdvcmsgZnJvbSAnLi9uZXR3b3JrJztcclxuaW1wb3J0IENvb2tpZVN0b3JhZ2UgZnJvbSAnLi9jb29raWUnO1xyXG5cclxuY2xhc3MgVXNlclRhc2tNYW5hZ2VyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm5ldHdvcmsgPSBuZXcgTmV0d29yaygpO1xyXG4gICAgICAgIHRoaXMuY29va2llU3RvcmFnZSA9IENvb2tpZVN0b3JhZ2U7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5nUG9zdCA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucG9zdFN0YXJ0Rm9sbG93aW5nTGlzdCA9IHRoaXMucG9zdFN0YXJ0Rm9sbG93aW5nTGlzdDtcclxuICAgICAgICB0aGlzLnBvc3RTdGFydENoYXRCb3QgPSB0aGlzLnBvc3RTdGFydENoYXRCb3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaXNMb2dnZWRJbigpIHtcclxuICAgIC8vICAgICByZXR1cm4gISF0aGlzLmdldFRva2VuKCk7XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gaXNFbWFpbENvbmZpcm1lZCgpIHtcclxuICAgIC8vICAgICByZXR1cm4gKHRoaXMuY29va2llU3RvcmFnZS5nZXQoQ09OU1QuY29va2llU3RvcmFnZS5lbWFpbENvbmZpcm1lZCkgPT09ICdjb25maXJtZWQnKTtcclxuICAgIC8vIH1cclxuICAgIGdldFRva2VuKGFzSGVhZGVyKSB7XHJcbiAgICAgICAgY29uc3QgY29va2llVG9rZW4gPSB0aGlzLmNvb2tpZVN0b3JhZ2UuZ2V0KENPTlNULmNvb2tpZVN0b3JhZ2UudG9rZW4pO1xyXG4gICAgICAgIHJldHVybiAoYXNIZWFkZXIpID8ge2hlYWRlcnM6IHt0b2tlbjogY29va2llVG9rZW59fSA6IGNvb2tpZVRva2VuO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1ldGFkYXRhKHBhdGgsIGNiRXJyb3IpIHtcclxuICAgICAgICAvLyBjb25zdCB7dHlwZSwgc3ViVHlwZX0gPSBwYXRoO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QoYCR7Q09OU1QuZ2V0UGF0aFR5cGVTdWJ0eXBlKCdpbnN0YWdyYW1UYXNrTWFuYWdlcl9nZXRUYXNrQnlUeXBlcycsIHBhdGgpfWAsXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VG9rZW4oJ2FzSGVhZGVyJyksIGNiRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRhc2tUeXBlcyhkZXRhaWxzLCBjYkVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChgJHtDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1UYXNrTWFuYWdlcl9nZXRUYXNrVHlwZXMnKX1gLFxyXG4gICAgICAgICAgICB0aGlzLmdldFRva2VuKCdhc0hlYWRlcicpLCBjYkVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wVGFza0J5SUQodGFza0lkLCBjYkVycm9yKSB7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZyA9IHtcclxuICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdCxcclxuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdC5oZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgJ3Rva2VuJzogdGhpcy5nZXRUb2tlbigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHVybCA9IENPTlNULmdldFBhdGgoJ2luc3RhZ3JhbVRhc2tNYW5hZ2VyX3B1dFN0b3BUYXNrQnlJRCcsIHRhc2tJZCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdCh1cmwsXHJcbiAgICAgICAgICAgIHNldHRpbmcsIGNiRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVRhc2tCeUlEKHRhc2tJZCwgY2JFcnJvcikge1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSB7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QsXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QuaGVhZGVycyxcclxuICAgICAgICAgICAgICAgICd0b2tlbic6IHRoaXMuZ2V0VG9rZW4oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCB1cmwgPSBDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1UYXNrTWFuYWdlcl9kZWxSZW1vdmVUYXNrQnlJRCcsIHRhc2tJZCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdCh1cmwsXHJcbiAgICAgICAgICAgIHNldHRpbmcsIGNiRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRvZG9cclxuICAgIGdldERlZmF1bHRDb25maWdzKHBhdGgsIGNiRXJyb3IpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSBgJHtDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1UYXNrTWFuYWdlcl9nZXREZWZhdWx0Q29uZmlncycpfS8ke3BhdGgudHlwZX0vc3VidHlwZS8ke3BhdGguc3VidHlwZX1gO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QodXJsLFxyXG4gICAgICAgICAgICB0aGlzLmdldFRva2VuKCdhc0hlYWRlcicpLCBjYkVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBwb3N0U3RhcnRGb2xsb3dpbmdMaXN0KGJvZHksIGNiRXJyb3IsIHBhdGgpIHtcclxuICAgICAgICBjb25zdCBzZXR0aW5nID0ge1xyXG4gICAgICAgICAgICAuLi50aGlzLnNldHRpbmdQb3N0LFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnNldHRpbmdQb3N0LmhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICAndG9rZW4nOiB0aGlzLmdldFRva2VuKCksXHJcbiAgICAgICAgICAgICAgICAnWC1BdXRoLVRva2VuJzogJ2UyZjQzMzZhYmVhNDQwNDg5YzUxYzVjMTAyOTRlYTEyJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzZXR0aW5nLmJvZHkgPSBKU09OLnN0cmluZ2lmeShib2R5KTtcclxuICAgICAgICBjb25zdCB1cmwgPSBwYXRoID8gYCR7Q09OU1QuZ2V0UGF0aChwYXRoKX1gIDogYCR7Q09OU1QuZ2V0UGF0aCgnaW5zdGFncmFtVGFza01hbmFnZXJfcG9zdFN0YXJ0Rm9sbG93aW5nTGlzdCcpfWA7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QodXJsLFxyXG4gICAgICAgICAgICBzZXR0aW5nLCBjYkVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBwb3N0U3RhcnRDaGF0Qm90KGJvZHksIGNiRXJyb3IpIHtcclxuICAgICAgICBjb25zdCBwYXRoID0gJ2luc3RhZ3JhbVRhc2tNYW5hZ2VyX3Bvc3RTdGFydENoYXRCb3QnO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc3RTdGFydEZvbGxvd2luZ0xpc3QoYm9keSwgY2JFcnJvciwgcGF0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TG9nc0NoYXRCb3QocGF0aCwgcGFnZSwgY2JFcnJvcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QoYCR7Q09OU1QuZ2V0UGF0aFR5cGVTdWJ0eXBlKCdpbnN0YWdyYW1UYXNrTWFuYWdlcl9nZXRMb2dzQ2hhdEJvdCcsIHBhdGgsIHBhZ2UpfWAsXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VG9rZW4oJ2FzSGVhZGVyJyksIGNiRXJyb3IpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxubGV0IHVzZXJJbnN0YW5jZSA9IG51bGw7XHJcblxyXG5pZiAoIXVzZXJJbnN0YW5jZSkge1xyXG4gICAgdXNlckluc3RhbmNlID0gbmV3IFVzZXJUYXNrTWFuYWdlcigpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VySW5zdGFuY2U7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tb24vanMtc2VydmljZXMvYXBpLXRhc2stbWFuYWdlci5qcyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEwLDIwMTEsMjAxMiwyMDEzLDIwMTQgTW9yZ2FuIFJvZGVyaWNrIGh0dHA6Ly9yb2Rlcmljay5ka1xuICogTGljZW5zZTogTUlUIC0gaHR0cDovL21yZ25yZHJjay5taXQtbGljZW5zZS5vcmdcbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbXJvZGVyaWNrL1B1YlN1YkpTXG4gKi9cblxuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KXtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgUHViU3ViID0ge307XG4gICAgcm9vdC5QdWJTdWIgPSBQdWJTdWI7XG5cbiAgICB2YXIgZGVmaW5lID0gcm9vdC5kZWZpbmU7XG5cbiAgICBmYWN0b3J5KFB1YlN1Yik7XG5cbiAgICAvLyBBTUQgc3VwcG9ydFxuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpe1xuICAgICAgICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBQdWJTdWI7IH0pO1xuXG4gICAgICAgIC8vIENvbW1vbkpTIGFuZCBOb2RlLmpzIG1vZHVsZSBzdXBwb3J0XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpe1xuICAgICAgICBpZiAobW9kdWxlICE9PSB1bmRlZmluZWQgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgICAgICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IFB1YlN1YjsgLy8gTm9kZS5qcyBzcGVjaWZpYyBgbW9kdWxlLmV4cG9ydHNgXG4gICAgICAgIH1cbiAgICAgICAgZXhwb3J0cy5QdWJTdWIgPSBQdWJTdWI7IC8vIENvbW1vbkpTIG1vZHVsZSAxLjEuMSBzcGVjXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IFB1YlN1YjsgLy8gQ29tbW9uSlNcbiAgICB9XG5cbn0oKCB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJiB3aW5kb3cgKSB8fCB0aGlzLCBmdW5jdGlvbiAoUHViU3ViKXtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgbWVzc2FnZXMgPSB7fSxcbiAgICAgICAgbGFzdFVpZCA9IC0xO1xuXG4gICAgZnVuY3Rpb24gaGFzS2V5cyhvYmope1xuICAgICAgICB2YXIga2V5O1xuXG4gICAgICAgIGZvciAoa2V5IGluIG9iail7XG4gICAgICAgICAgICBpZiAoIG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpICl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHRocm93cyB0aGUgcGFzc2VkIGV4Y2VwdGlvbiwgZm9yIHVzZSBhcyBhcmd1bWVudCBmb3Igc2V0VGltZW91dFxuICAgICAqIEBhbGlhcyB0aHJvd0V4Y2VwdGlvblxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7IE9iamVjdCB9IGV4IEFuIEVycm9yIG9iamVjdFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHRocm93RXhjZXB0aW9uKCBleCApe1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gcmVUaHJvd0V4Y2VwdGlvbigpe1xuICAgICAgICAgICAgdGhyb3cgZXg7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsbFN1YnNjcmliZXJXaXRoRGVsYXllZEV4Y2VwdGlvbnMoIHN1YnNjcmliZXIsIG1lc3NhZ2UsIGRhdGEgKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIoIG1lc3NhZ2UsIGRhdGEgKTtcbiAgICAgICAgfSBjYXRjaCggZXggKXtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoIHRocm93RXhjZXB0aW9uKCBleCApLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbGxTdWJzY3JpYmVyV2l0aEltbWVkaWF0ZUV4Y2VwdGlvbnMoIHN1YnNjcmliZXIsIG1lc3NhZ2UsIGRhdGEgKXtcbiAgICAgICAgc3Vic2NyaWJlciggbWVzc2FnZSwgZGF0YSApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGl2ZXJNZXNzYWdlKCBvcmlnaW5hbE1lc3NhZ2UsIG1hdGNoZWRNZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICl7XG4gICAgICAgIHZhciBzdWJzY3JpYmVycyA9IG1lc3NhZ2VzW21hdGNoZWRNZXNzYWdlXSxcbiAgICAgICAgICAgIGNhbGxTdWJzY3JpYmVyID0gaW1tZWRpYXRlRXhjZXB0aW9ucyA/IGNhbGxTdWJzY3JpYmVyV2l0aEltbWVkaWF0ZUV4Y2VwdGlvbnMgOiBjYWxsU3Vic2NyaWJlcldpdGhEZWxheWVkRXhjZXB0aW9ucyxcbiAgICAgICAgICAgIHM7XG5cbiAgICAgICAgaWYgKCAhbWVzc2FnZXMuaGFzT3duUHJvcGVydHkoIG1hdGNoZWRNZXNzYWdlICkgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHMgaW4gc3Vic2NyaWJlcnMpe1xuICAgICAgICAgICAgaWYgKCBzdWJzY3JpYmVycy5oYXNPd25Qcm9wZXJ0eShzKSl7XG4gICAgICAgICAgICAgICAgY2FsbFN1YnNjcmliZXIoIHN1YnNjcmliZXJzW3NdLCBvcmlnaW5hbE1lc3NhZ2UsIGRhdGEgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZURlbGl2ZXJ5RnVuY3Rpb24oIG1lc3NhZ2UsIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKXtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGRlbGl2ZXJOYW1lc3BhY2VkKCl7XG4gICAgICAgICAgICB2YXIgdG9waWMgPSBTdHJpbmcoIG1lc3NhZ2UgKSxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHRvcGljLmxhc3RJbmRleE9mKCAnLicgKTtcblxuICAgICAgICAgICAgLy8gZGVsaXZlciB0aGUgbWVzc2FnZSBhcyBpdCBpcyBub3dcbiAgICAgICAgICAgIGRlbGl2ZXJNZXNzYWdlKG1lc3NhZ2UsIG1lc3NhZ2UsIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMpO1xuXG4gICAgICAgICAgICAvLyB0cmltIHRoZSBoaWVyYXJjaHkgYW5kIGRlbGl2ZXIgbWVzc2FnZSB0byBlYWNoIGxldmVsXG4gICAgICAgICAgICB3aGlsZSggcG9zaXRpb24gIT09IC0xICl7XG4gICAgICAgICAgICAgICAgdG9waWMgPSB0b3BpYy5zdWJzdHIoIDAsIHBvc2l0aW9uICk7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSB0b3BpYy5sYXN0SW5kZXhPZignLicpO1xuICAgICAgICAgICAgICAgIGRlbGl2ZXJNZXNzYWdlKCBtZXNzYWdlLCB0b3BpYywgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1lc3NhZ2VIYXNTdWJzY3JpYmVycyggbWVzc2FnZSApe1xuICAgICAgICB2YXIgdG9waWMgPSBTdHJpbmcoIG1lc3NhZ2UgKSxcbiAgICAgICAgICAgIGZvdW5kID0gQm9vbGVhbihtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eSggdG9waWMgKSAmJiBoYXNLZXlzKG1lc3NhZ2VzW3RvcGljXSkpLFxuICAgICAgICAgICAgcG9zaXRpb24gPSB0b3BpYy5sYXN0SW5kZXhPZiggJy4nICk7XG5cbiAgICAgICAgd2hpbGUgKCAhZm91bmQgJiYgcG9zaXRpb24gIT09IC0xICl7XG4gICAgICAgICAgICB0b3BpYyA9IHRvcGljLnN1YnN0ciggMCwgcG9zaXRpb24gKTtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoICcuJyApO1xuICAgICAgICAgICAgZm91bmQgPSBCb29sZWFuKG1lc3NhZ2VzLmhhc093blByb3BlcnR5KCB0b3BpYyApICYmIGhhc0tleXMobWVzc2FnZXNbdG9waWNdKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZm91bmQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHVibGlzaCggbWVzc2FnZSwgZGF0YSwgc3luYywgaW1tZWRpYXRlRXhjZXB0aW9ucyApe1xuICAgICAgICBtZXNzYWdlID0gKHR5cGVvZiBtZXNzYWdlID09PSAnc3ltYm9sJykgPyBtZXNzYWdlLnRvU3RyaW5nKCkgOiBtZXNzYWdlO1xuXG4gICAgICAgIHZhciBkZWxpdmVyID0gY3JlYXRlRGVsaXZlcnlGdW5jdGlvbiggbWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApLFxuICAgICAgICAgICAgaGFzU3Vic2NyaWJlcnMgPSBtZXNzYWdlSGFzU3Vic2NyaWJlcnMoIG1lc3NhZ2UgKTtcblxuICAgICAgICBpZiAoICFoYXNTdWJzY3JpYmVycyApe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBzeW5jID09PSB0cnVlICl7XG4gICAgICAgICAgICBkZWxpdmVyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCBkZWxpdmVyLCAwICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHVibGlzaGVzIHRoZSBtZXNzYWdlLCBwYXNzaW5nIHRoZSBkYXRhIHRvIGl0J3Mgc3Vic2NyaWJlcnNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgcHVibGlzaFxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gcHVibGlzaFxuICAgICAqIEBwYXJhbSB7fSBkYXRhIFRoZSBkYXRhIHRvIHBhc3MgdG8gc3Vic2NyaWJlcnNcbiAgICAgKiBAcmV0dXJuIHsgQm9vbGVhbiB9XG4gICAgICovXG4gICAgUHViU3ViLnB1Ymxpc2ggPSBmdW5jdGlvbiggbWVzc2FnZSwgZGF0YSApe1xuICAgICAgICByZXR1cm4gcHVibGlzaCggbWVzc2FnZSwgZGF0YSwgZmFsc2UsIFB1YlN1Yi5pbW1lZGlhdGVFeGNlcHRpb25zICk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFB1Ymxpc2hlcyB0aGUgdGhlIG1lc3NhZ2Ugc3luY2hyb25vdXNseSwgcGFzc2luZyB0aGUgZGF0YSB0byBpdCdzIHN1YnNjcmliZXJzXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQGFsaWFzIHB1Ymxpc2hTeW5jXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBwdWJsaXNoXG4gICAgICogQHBhcmFtIHt9IGRhdGEgVGhlIGRhdGEgdG8gcGFzcyB0byBzdWJzY3JpYmVyc1xuICAgICAqIEByZXR1cm4geyBCb29sZWFuIH1cbiAgICAgKi9cbiAgICBQdWJTdWIucHVibGlzaFN5bmMgPSBmdW5jdGlvbiggbWVzc2FnZSwgZGF0YSApe1xuICAgICAgICByZXR1cm4gcHVibGlzaCggbWVzc2FnZSwgZGF0YSwgdHJ1ZSwgUHViU3ViLmltbWVkaWF0ZUV4Y2VwdGlvbnMgKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU3Vic2NyaWJlcyB0aGUgcGFzc2VkIGZ1bmN0aW9uIHRvIHRoZSBwYXNzZWQgbWVzc2FnZS4gRXZlcnkgcmV0dXJuZWQgdG9rZW4gaXMgdW5pcXVlIGFuZCBzaG91bGQgYmUgc3RvcmVkIGlmIHlvdSBuZWVkIHRvIHVuc3Vic2NyaWJlXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQGFsaWFzIHN1YnNjcmliZVxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gc3Vic2NyaWJlIHRvXG4gICAgICogQHBhcmFtIHsgRnVuY3Rpb24gfSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gYSBuZXcgbWVzc2FnZSBpcyBwdWJsaXNoZWRcbiAgICAgKiBAcmV0dXJuIHsgU3RyaW5nIH1cbiAgICAgKi9cbiAgICBQdWJTdWIuc3Vic2NyaWJlID0gZnVuY3Rpb24oIG1lc3NhZ2UsIGZ1bmMgKXtcbiAgICAgICAgaWYgKCB0eXBlb2YgZnVuYyAhPT0gJ2Z1bmN0aW9uJyl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBtZXNzYWdlID0gKHR5cGVvZiBtZXNzYWdlID09PSAnc3ltYm9sJykgPyBtZXNzYWdlLnRvU3RyaW5nKCkgOiBtZXNzYWdlO1xuXG4gICAgICAgIC8vIG1lc3NhZ2UgaXMgbm90IHJlZ2lzdGVyZWQgeWV0XG4gICAgICAgIGlmICggIW1lc3NhZ2VzLmhhc093blByb3BlcnR5KCBtZXNzYWdlICkgKXtcbiAgICAgICAgICAgIG1lc3NhZ2VzW21lc3NhZ2VdID0ge307XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmb3JjaW5nIHRva2VuIGFzIFN0cmluZywgdG8gYWxsb3cgZm9yIGZ1dHVyZSBleHBhbnNpb25zIHdpdGhvdXQgYnJlYWtpbmcgdXNhZ2VcbiAgICAgICAgLy8gYW5kIGFsbG93IGZvciBlYXN5IHVzZSBhcyBrZXkgbmFtZXMgZm9yIHRoZSAnbWVzc2FnZXMnIG9iamVjdFxuICAgICAgICB2YXIgdG9rZW4gPSAndWlkXycgKyBTdHJpbmcoKytsYXN0VWlkKTtcbiAgICAgICAgbWVzc2FnZXNbbWVzc2FnZV1bdG9rZW5dID0gZnVuYztcbiAgICAgICAgXG4gICAgICAgIC8vIHJldHVybiB0b2tlbiBmb3IgdW5zdWJzY3JpYmluZ1xuICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZXMgdGhlIHBhc3NlZCBmdW5jdGlvbiB0byB0aGUgcGFzc2VkIG1lc3NhZ2Ugb25jZVxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBhbGlhcyBzdWJzY3JpYmVPbmNlXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBzdWJzY3JpYmUgdG9cbiAgICAgKiBAcGFyYW0geyBGdW5jdGlvbiB9IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBhIG5ldyBtZXNzYWdlIGlzIHB1Ymxpc2hlZFxuICAgICAqIEByZXR1cm4geyBQdWJTdWIgfVxuICAgICAqL1xuICAgIFB1YlN1Yi5zdWJzY3JpYmVPbmNlID0gZnVuY3Rpb24oIG1lc3NhZ2UsIGZ1bmMgKXtcbiAgICAgICAgdmFyIHRva2VuID0gUHViU3ViLnN1YnNjcmliZSggbWVzc2FnZSwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIC8vIGJlZm9yZSBmdW5jIGFwcGx5LCB1bnN1YnNjcmliZSBtZXNzYWdlXG4gICAgICAgICAgICBQdWJTdWIudW5zdWJzY3JpYmUoIHRva2VuICk7XG4gICAgICAgICAgICBmdW5jLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBQdWJTdWI7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENsZWFycyBhbGwgc3Vic2NyaXB0aW9uc1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWxpYXMgY2xlYXJBbGxTdWJzY3JpcHRpb25zXG4gICAgICovXG4gICAgUHViU3ViLmNsZWFyQWxsU3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uIGNsZWFyQWxsU3Vic2NyaXB0aW9ucygpe1xuICAgICAgICBtZXNzYWdlcyA9IHt9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGVhciBzdWJzY3JpcHRpb25zIGJ5IHRoZSB0b3BpY1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWxpYXMgY2xlYXJBbGxTdWJzY3JpcHRpb25zXG4gICAgICovXG4gICAgUHViU3ViLmNsZWFyU3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uIGNsZWFyU3Vic2NyaXB0aW9ucyh0b3BpYyl7XG4gICAgICAgIHZhciBtO1xuICAgICAgICBmb3IgKG0gaW4gbWVzc2FnZXMpe1xuICAgICAgICAgICAgaWYgKG1lc3NhZ2VzLmhhc093blByb3BlcnR5KG0pICYmIG0uaW5kZXhPZih0b3BpYykgPT09IDApe1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBtZXNzYWdlc1ttXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHN1YnNjcmlwdGlvbnNcbiAgICAgKlxuICAgICAqIC0gV2hlbiBwYXNzZWQgYSB0b2tlbiwgcmVtb3ZlcyBhIHNwZWNpZmljIHN1YnNjcmlwdGlvbi5cbiAgICAgKlxuXHQgKiAtIFdoZW4gcGFzc2VkIGEgZnVuY3Rpb24sIHJlbW92ZXMgYWxsIHN1YnNjcmlwdGlvbnMgZm9yIHRoYXQgZnVuY3Rpb25cbiAgICAgKlxuXHQgKiAtIFdoZW4gcGFzc2VkIGEgdG9waWMsIHJlbW92ZXMgYWxsIHN1YnNjcmlwdGlvbnMgZm9yIHRoYXQgdG9waWMgKGhpZXJhcmNoeSlcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcHVibGljXG4gICAgICogQGFsaWFzIHN1YnNjcmliZU9uY2VcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfCBGdW5jdGlvbiB9IHZhbHVlIEEgdG9rZW4sIGZ1bmN0aW9uIG9yIHRvcGljIHRvIHVuc3Vic2NyaWJlIGZyb21cbiAgICAgKiBAZXhhbXBsZSAvLyBVbnN1YnNjcmliaW5nIHdpdGggYSB0b2tlblxuICAgICAqIHZhciB0b2tlbiA9IFB1YlN1Yi5zdWJzY3JpYmUoJ215dG9waWMnLCBteUZ1bmMpO1xuICAgICAqIFB1YlN1Yi51bnN1YnNjcmliZSh0b2tlbik7XG4gICAgICogQGV4YW1wbGUgLy8gVW5zdWJzY3JpYmluZyB3aXRoIGEgZnVuY3Rpb25cbiAgICAgKiBQdWJTdWIudW5zdWJzY3JpYmUobXlGdW5jKTtcbiAgICAgKiBAZXhhbXBsZSAvLyBVbnN1YnNjcmliaW5nIGZyb20gYSB0b3BpY1xuICAgICAqIFB1YlN1Yi51bnN1YnNjcmliZSgnbXl0b3BpYycpO1xuICAgICAqL1xuICAgIFB1YlN1Yi51bnN1YnNjcmliZSA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgdmFyIGRlc2NlbmRhbnRUb3BpY0V4aXN0cyA9IGZ1bmN0aW9uKHRvcGljKSB7XG4gICAgICAgICAgICAgICAgdmFyIG07XG4gICAgICAgICAgICAgICAgZm9yICggbSBpbiBtZXNzYWdlcyApe1xuICAgICAgICAgICAgICAgICAgICBpZiAoIG1lc3NhZ2VzLmhhc093blByb3BlcnR5KG0pICYmIG0uaW5kZXhPZih0b3BpYykgPT09IDAgKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGEgZGVzY2VuZGFudCBvZiB0aGUgdG9waWMgZXhpc3RzOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNUb3BpYyAgICA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgKCBtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eSh2YWx1ZSkgfHwgZGVzY2VuZGFudFRvcGljRXhpc3RzKHZhbHVlKSApLFxuICAgICAgICAgICAgaXNUb2tlbiAgICA9ICFpc1RvcGljICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycsXG4gICAgICAgICAgICBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nLFxuICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2UsXG4gICAgICAgICAgICBtLCBtZXNzYWdlLCB0O1xuXG4gICAgICAgIGlmIChpc1RvcGljKXtcbiAgICAgICAgICAgIFB1YlN1Yi5jbGVhclN1YnNjcmlwdGlvbnModmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICggbSBpbiBtZXNzYWdlcyApe1xuICAgICAgICAgICAgaWYgKCBtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eSggbSApICl7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2VzW21dO1xuXG4gICAgICAgICAgICAgICAgaWYgKCBpc1Rva2VuICYmIG1lc3NhZ2VbdmFsdWVdICl7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBtZXNzYWdlW3ZhbHVlXTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRva2VucyBhcmUgdW5pcXVlLCBzbyB3ZSBjYW4ganVzdCBzdG9wIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICggdCBpbiBtZXNzYWdlICl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5oYXNPd25Qcm9wZXJ0eSh0KSAmJiBtZXNzYWdlW3RdID09PSB2YWx1ZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG1lc3NhZ2VbdF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbn0pKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wdWJzdWItanMvc3JjL3B1YnN1Yi5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgVXNlclRhc2tNYW5hZ2VyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9hcGktdGFzay1tYW5hZ2VyJztcclxuaW1wb3J0IHZpZXdVdGlscyBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdmlldyc7XHJcbmltcG9ydCB7Q09OU1R9IGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMnO1xyXG5cclxuLy8gZnVuY3Rpb24gcmVkdWNlU3RhdGUodGFza1N0YXRlLCBpc1J1bnMsICRsaXN0LCBpdGVtKSB7XHJcbi8vICAgICBjb25zdCB7cHJvZ3Jlc3MsIHRhc2tfaWQsIHR5cGUsIHN1YnR5cGUsIHN0YXR1c30gPSBpdGVtO1xyXG4vLyAgICAgc3dpdGNoICh0YXNrU3RhdGUpIHtcclxuLy8gICAgICAgICBjYXNlICdTVE9QUEVEJzpcclxuLy8gICAgICAgICAgICAgJChgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIHAtMCBweS0yXCIgZGF0YS11c2VybmFtZT1cIiR7dHlwZX1cIiBkYXRhLXRhc2staWQ9XCIke3Rhc2tfaWR9XCI+XHJcbi8vICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEtYm9keSBkLWZsZXhcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHRhc2stdHlwZVwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAkeyh0YXNrX2lkKSA/IGA8cCBjbGFzcz1cImJhZGdlIGJhZGdlLXNlY29uZGFyeSBteS0xXCI+JHt0YXNrX2lkfTwvcD5gIDogJyd9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLXByb2dyZXNzXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInNtYWxsIG15LTFcIj7QntGB0YLQsNC90L7QstC70LXQvdC+PC9wPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHsoaXRlbS5zdGF0dXMucmVhc29uKSA/IGA8cCBjbGFzcz1cIm15LTFcIj4ke3N0YXR1cy5yZWFzb259PC9wPmAgOiAnJ31cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4td2FybmluZyBqc19idG4tZGVsZXRlLXRhc2tcIj7Qo9C00LDQu9C40YLRjDwvYnV0dG9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwiY29sIHRhc2stc3VidHlwZVwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAkeyhzdWJ0eXBlKSA/IGA8cCBjbGFzcz1cIm10LTAgbWItMVwiPiR7c3VidHlwZX08L3A+YCA6ICcnfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxyXG4vLyAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgIDwvbGk+YCkuYXBwZW5kVG8oJGxpc3QpO1xyXG4vLyAgICAgICAgICAgICBicmVhaztcclxuXHJcbi8vICAgICAgICAgZGVmYXVsdDpcclxuLy8gICAgICAgICAgICAgYnJlYWs7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbmZ1bmN0aW9uIGZpbGxMaXN0TWV0YSgkbGlzdCwgZGF0YUFycmF5LCBpc1J1bnMpIHtcclxuICAgIGNvbnN0IGl0ZW1zID0gZGF0YUFycmF5O1xyXG4gICAgLy8gY29uc3QgZGVmYXVsdEF2YXRhclNyYyA9ICdodHRwczovL2kuaW1ndXIuY29tL2pOTlQ0TEUucG5nJztcclxuICAgICRsaXN0LmVtcHR5KCk7XHJcbiAgICBpZiAoIWl0ZW1zLmxlbmd0aCkge1xyXG4gICAgICAgICQoYDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBweS0yXCI+XHJcbiAgICAgICAgICAgICAgICA8cD7QkiDRjdGC0L7QvCDRgNCw0LfQtNC10LvQtSDQvdC10YIg0L3QuCDQvtC00L3QvtC5INC30LDQtNCw0YfQuC48L3A+XHJcbiAgICAgICAgICAgIDwvbGk+YCkuYXBwZW5kVG8oJGxpc3QpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCB7cHJvZ3Jlc3MsIHRhc2tfaWQsIHR5cGUsIHN1YnR5cGV9ID0gaXRlbTtcclxuICAgICAgICBpZiAoaXRlbS5zdGF0dXMuc3RhdGUgPT09ICdTVE9QUEVEJyAmJiAhaXNSdW5zKSB7XHJcbiAgICAgICAgICAgICQoYDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBwLTAgcHktMlwiIGRhdGEtdXNlcm5hbWU9XCIke3R5cGV9XCIgZGF0YS10YXNrLWlkPVwiJHt0YXNrX2lkfVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWJvZHkgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB0YXNrLXR5cGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHsodGFza19pZCkgPyBgPHAgY2xhc3M9XCJiYWRnZSBiYWRnZS1zZWNvbmRhcnkgbXktMVwiPiR7dGFza19pZH08L3A+YCA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1wcm9ncmVzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzbWFsbCBteS0xXCI+0J7RgdGC0LDQvdC+0LLQu9C10L3QvjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7KGl0ZW0uc3RhdHVzLnJlYXNvbikgPyBgPHAgY2xhc3M9XCJteS0xXCI+JHtpdGVtLnN0YXR1cy5yZWFzb259PC9wPmAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4td2FybmluZyBqc19idG4tZGVsZXRlLXRhc2tcIj7Qo9C00LDQu9C40YLRjDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwiY29sIHRhc2stc3VidHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkeyhzdWJ0eXBlKSA/IGA8cCBjbGFzcz1cIm10LTAgbWItMVwiPiR7c3VidHlwZX08L3A+YCA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+YCkuYXBwZW5kVG8oJGxpc3QpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbS5zdGF0dXMuc3RhdGUgPT09ICdJTl9QUk9HUkVTUycgJiYgaXNSdW5zKSB7XHJcbiAgICAgICAgICAgICQoYDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBweS0yXCIgZGF0YS10YXNrLWlkPVwiJHt0YXNrX2lkfVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB0YXNrLXByb2dyZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtdC0wIG1iLTEgbmFtZVwiPtCSINC/0YDQvtCz0YDQtdGB0YHQtSA6ICR7dGFza19pZH08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeSBqc19idG4tc3RvcC10YXNrXCI+0J7RgdGC0LDQvdC+0LLQuNGC0Yw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXdhcm5pbmcganNfYnRuLWRlbGV0ZS10YXNrXCI+0KPQtNCw0LvQuNGC0Yw8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9saT5gKS5hcHBlbmRUbygkbGlzdCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpdGVtLnN0YXR1cy5zdGF0ZSA9PT0gJ0ZJTklTSEVEJyAmJiAhaXNSdW5zKSB7XHJcbiAgICAgICAgICAgICQoYDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBweS0yXCIgZGF0YS10YXNrLWlkPVwiJHt0YXNrX2lkfVwiPlxyXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiY2FyZC10aXRsZVwiPtCS0YvQv9C+0LvQvdC10L3QvdC+PC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtbXV0ZWRcIj4ke3ZpZXdVdGlscy5nZXRGb3JtYXR0ZWREYXRlVXRpbChwcm9ncmVzcy50aW1lc3RhbXApfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtc3VjY2Vzc1wiPjEwMCU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzLWJhciBiZy1zdWNjZXNzXCIgcm9sZT1cInByb2dyZXNzYmFyXCIgc3R5bGU9XCJ3aWR0aDogMTAwJTsgaGVpZ2h0OiA2cHg7XCIgYXJpYS12YWx1ZW5vdz1cIjI1XCIgYXJpYS12YWx1ZW1pbj1cIjBcIiBhcmlhLXZhbHVlbWF4PVwiMTAwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4td2FybmluZyBqc19idG4tZGVsZXRlLXRhc2tcIj7Qo9C00LDQu9C40YLRjDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+YCkuYXBwZW5kVG8oJGxpc3QpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbS5zdGF0dXMuc3RhdGUgPT09ICdQQVVTRUQnICYmIGlzUnVucykge1xyXG4gICAgICAgICAgICAkKGA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gcHktMlwiIGRhdGEtdGFzay1pZD1cIiR7dGFza19pZH1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiY2FyZC10aXRsZVwiPtCd0LAg0L/QsNGD0LfQtTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LW11dGVkXCI+JHt2aWV3VXRpbHMuZ2V0Rm9ybWF0dGVkRGF0ZVV0aWwocHJvZ3Jlc3MudGltZXN0YW1wKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXN1Y2Nlc3NcIj4xMCU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzLWJhciBiZy1zdWNjZXNzXCIgcm9sZT1cInByb2dyZXNzYmFyXCIgc3R5bGU9XCJ3aWR0aDogMTAlOyBoZWlnaHQ6IDZweDtcIiBhcmlhLXZhbHVlbm93PVwiMjVcIiBhcmlhLXZhbHVlbWluPVwiMFwiIGFyaWEtdmFsdWVtYXg9XCIxMDBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi13YXJuaW5nIGpzX2J0bi1kZWxldGUtdGFza1wiPtCj0LTQsNC70LjRgtGMPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5gKS5hcHBlbmRUbygkbGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghJCgnbGknLCAkbGlzdCkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICQoYDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBweS0yXCIgZGF0YS10YXNrLWlkPVwiJHt0YXNrX2lkfVwiPlxyXG4gICAgICAgICAgICAgICAgPHA+0JIg0Y3RgtC+0Lwg0YDQsNC30LTQtdC70LUg0L3QtdGCINC90Lgg0L7QtNC90L7QuSDQt9Cw0LTQsNGH0LguPC9wPlxyXG4gICAgICAgICAgICA8L2xpPmApLmFwcGVuZFRvKCRsaXN0KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cclxuZnVuY3Rpb24gaW5pdEhhbmRsZXJzKGhvbGRlcnMsIHBhdGgpIHtcclxuICAgIGNvbnN0IF9wYXRoID0gcGF0aCB8fCB7XHJcbiAgICAgICAgdHlwZTogQ09OU1QudXJsLnRtVHlwZXMuZm9sbG93aW5nVCxcclxuICAgICAgICBzdWJ0eXBlOiBDT05TVC51cmwudG1UeXBlcy5mb2xsb3dpbmdTdWJUWzBdXHJcbiAgICB9O1xyXG4gICAgY29uc3QgJGJ0blN0b3BUYXNrID0gJCgnLmpzX2J0bi1zdG9wLXRhc2snKTtcclxuICAgIGNvbnN0ICRidG5EZWxUYXNrID0gJCgnLmpzX2J0bi1kZWxldGUtdGFzaycpO1xyXG4gICAgY29uc3QgZ2V0VGFza0lEID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCBidG4gPSAkKGUudGFyZ2V0KTtcclxuICAgICAgICByZXR1cm4gYnRuLmNsb3Nlc3QoJ2xpJykuZGF0YSgndGFzay1pZCcpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkYnRuU3RvcFRhc2sub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCB0YXNrSWQgPSBnZXRUYXNrSUQoZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NUT1AgVGFzayBpZCcsIHRhc2tJZCk7XHJcbiAgICAgICAgVXNlclRhc2tNYW5hZ2VyLnN0b3BUYXNrQnlJRCh0YXNrSWQpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICBnZXRUYXNrc0RhdGEoaG9sZGVycywgX3BhdGgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJGJ0bkRlbFRhc2sub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCB0YXNrSWQgPSBnZXRUYXNrSUQoZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0RFTEVURSBpZCcsIHRhc2tJZCk7XHJcbiAgICAgICAgVXNlclRhc2tNYW5hZ2VyLmRlbGV0ZVRhc2tCeUlEKHRhc2tJZCkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIGdldFRhc2tzRGF0YShob2xkZXJzLCBfcGF0aCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRhc2tzRGF0YShob2xkZXJzLCBwYXRoKSB7XHJcbiAgICBjb25zdCB7JHJ1bnMsICRzdG9wcGVkfSA9IGhvbGRlcnM7XHJcbiAgICBjb25zdCBfcGF0aCA9IHBhdGggfHwge1xyXG4gICAgICAgIHR5cGU6IENPTlNULnVybC50bVR5cGVzLmZvbGxvd2luZ1QsXHJcbiAgICAgICAgc3VidHlwZTogQ09OU1QudXJsLnRtVHlwZXMuZm9sbG93aW5nU3ViVFswXVxyXG4gICAgfTtcclxuICAgIFVzZXJUYXNrTWFuYWdlci5nZXRNZXRhZGF0YShfcGF0aCkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2dldE1ldGFkYXRhICYgZmlsbExpc3RNZXRhJywgcmVzdWx0KTtcclxuICAgICAgICBpZiAocmVzdWx0LnN0YXR1cy5zdGF0ZSA9PT0gJ29rJykge1xyXG4gICAgICAgICAgICBmaWxsTGlzdE1ldGEoJHJ1bnMsIHJlc3VsdC5kYXRhLm1ldGEsICdpc1J1bnMnKTtcclxuICAgICAgICAgICAgZmlsbExpc3RNZXRhKCRzdG9wcGVkLCByZXN1bHQuZGF0YS5tZXRhKTtcclxuICAgICAgICAgICAgaW5pdEhhbmRsZXJzKGhvbGRlcnMsIHBhdGgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogSW5pdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBjb25zdCBob2xkZXJzID0ge1xyXG4gICAgICAgICRydW5zOiAkKCcuZm9sbG93LXRhc2tzLXJ1bnMnKSxcclxuICAgICAgICAkc3RvcHBlZDogJCgnLmZvbGxvdy10YXNrcy1zdG9wcGVkJylcclxuICAgIH07XHJcbiAgICBnZXRUYXNrc0RhdGEoaG9sZGVycyk7XHJcbiAgICB3aW5kb3cuUHViU3ViLnN1YnNjcmliZShDT05TVC5ldmVudHMudGFza3MuTkVXX1RBU0tfQ1JFQVRFRCwgKGV2ZW50TmFtZSwgZGF0YSkgPT4ge1xyXG4gICAgICAgIGdldFRhc2tzRGF0YShob2xkZXJzKTtcclxuICAgIH0pO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3MvZm9sbG93L2ZvbGxvdy1zdGF0dXMuanMiLCJpbXBvcnQgdmlld1V0aWxzIGZyb20gJy4vdmlldyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXR3b3JrIHtcclxuXHJcbiAgICBjYkVycm9yRGVmYXVsdChyZXN1bHQpIHtcclxuICAgICAgICBjb25zdCAkZWwgPSAoJCgnI2Rlc2NyaXB0aW9uJykubGVuZ3RoKSA/ICQoJyNkZXNjcmlwdGlvbicpIDogJCgnLmVycm9yLW1zZycpO1xyXG4gICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UoJGVsLFxyXG4gICAgICAgICAgICByZXN1bHQuc3RhdHVzLnN0YXRlLFxyXG4gICAgICAgICAgICByZXN1bHQuc3RhdHVzLm1lc3NhZ2UgfHwgJ2Vycm9yJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tTdGF0dXMocmVzcG9uc2UpIHtcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICYmIHJlc3BvbnNlLnN0YXR1cyA+PSAyMDAgJiYgcmVzcG9uc2Uuc3RhdHVzIDwgMzAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcclxuICAgICAgICAgICAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcclxuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNlbmRSZXF1ZXN0KFVSTCwgT1BUUywgY2JFcnJvcikge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChVUkwsIE9QVFMpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IFByb21pc2UuYWxsKFtyZXNwb25zZSwgcmVzcG9uc2UuanNvbigpXSkpXHJcbiAgICAgICAgICAgIC50aGVuKChbcmVzcG9uc2UsIGpzb25dKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjYkVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2JFcnJvckRlZmF1bHQoanNvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2JFcnJvcihqc29uKTsgLy8gdXBkYXRlIHZpZXdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja1N0YXR1cyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKGpzb24uc3RhdHVzLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGpzb247XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uL2pzLXNlcnZpY2VzL25ldHdvcmsuanMiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xyXG5pbXBvcnQgVXNlclRhc2tNYW5hZ2VyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9hcGktdGFzay1tYW5hZ2VyJztcclxuXHJcbmxldCBjbHNDb25zdCA9IHtcclxuICAgIGN1cnJlbnRQYWdlQ2xzOiAnJyxcclxuICAgIHRhc2tzTGlzdDogJycsXHJcbiAgICBsb2dzVGFiQnRuOiAnJyxcclxuICAgIHBhZ2luYXRpb246ICcnLFxyXG4gICAgcGFnaW5hdGlvblBnTnVtYmVyOiAnJ1xyXG59O1xyXG5sZXQgJGxpc3QgPSAnJChjbHNDb25zdC50YXNrc0xpc3QpJztcclxubGV0IHNlbGVjdENscyA9ICdzb21lQ2xhc3MnO1xyXG5jb25zdCBnZXRVc2VybmFtZSA9ICgpID0+ICQoYC4ke3NlbGVjdENsc30gb3B0aW9uOnNlbGVjdGVkYCkudmFsKCk7XHJcbmNvbnN0IHBhdGggPSB7XHJcbiAgICB1c2VybmFtZTogZ2V0VXNlcm5hbWUoKVxyXG59O1xyXG5sZXQgY3VycmVudFBhZ2UgPSBudWxsO1xyXG5sZXQgaW50ZXJ2YWxJZCA9ICcnO1xyXG5cclxuZnVuY3Rpb24gaW5pdEhhbmRsZXJQYWdpbmF0aW9uKCRwcmV2aW91cywgJG5leHQsIGRhdGFBcnJheSkge1xyXG4gICAgY29uc3QgJHdyYXBwZXIgPSAkKGNsc0NvbnN0LnBhZ2luYXRpb24pO1xyXG4gICAgY29uc3Qge3BhZ2luYXRpb259ID0gZGF0YUFycmF5LnNldHRpbmdzO1xyXG4gICAgY29uc3QgbGFzdFBhZ2UgPSBwYWdpbmF0aW9uLnBhZ2VzW3BhZ2luYXRpb24ucGFnZXMubGVuZ3RoIC0gMV07XHJcblxyXG4gICAgJHByZXZpb3VzLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgJGxpQWN0aXZlID0gJHdyYXBwZXIuZmluZCgnbGkucGFnZS1udW1iZXIuYWN0aXZlJyk7XHJcbiAgICAgICAgY29uc3QgcGFnZSA9IHBhZ2luYXRpb24ucHJldmlvdXM7XHJcbiAgICAgICAgaWYgKCFwYWdpbmF0aW9uLnByZXZpb3VzKSB7XHJcbiAgICAgICAgICAgICRwcmV2aW91cy5hZGRDbGFzcygnZGlzYWJsZWQnKS5wcm9wKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN1cnJlbnRQYWdlID0gcGFnaW5hdGlvbi5wcmV2aW91cztcclxuICAgICAgICAkbGlBY3RpdmUucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGdldExvZ3NEYXRhKCRsaXN0LCBwYXRoLCBwYWdlKTtcclxuICAgIH0pO1xyXG5cclxuICAgICRuZXh0Lm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgJGxpQWN0aXZlID0gJHdyYXBwZXIuZmluZCgnbGkucGFnZS1udW1iZXIuYWN0aXZlJyk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudEFjdGl2ZUlkeCA9ICRsaUFjdGl2ZS5pbmRleCgpO1xyXG4gICAgICAgIGNvbnN0IHBhZ2UgPSBwYWdpbmF0aW9uLm5leHQ7XHJcbiAgICAgICAgaWYgKCFwYWdpbmF0aW9uLm5leHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjdXJyZW50UGFnZSA9IHBhZ2luYXRpb24ubmV4dDtcclxuICAgICAgICAkbGlBY3RpdmUucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGlmIChsYXN0UGFnZSA8PSBjdXJyZW50QWN0aXZlSWR4ICsgMSkge1xyXG4gICAgICAgICAgICAkKGUudGFyZ2V0KS5wYXJlbnQoKS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGN1cnJlbnRBY3RpdmVJZHggJiYgJHByZXZpb3VzLmhhc0NsYXNzKCdkaXNhYmxlZCcpKSB7XHJcbiAgICAgICAgICAgICRwcmV2aW91cy5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0TG9nc0RhdGEoJGxpc3QsIHBhdGgsIHBhZ2UpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChjbHNDb25zdC5sb2dzVGFiQnRuKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIC8vIGF0IHRoaXMgcG9pbnQgb2YgdGltZSBzZXRJbnRlcnZhbCBpcyB3b3JraW5nXHJcbiAgICAgICAgY3VycmVudFBhZ2UgPSAxO1xyXG4gICAgfSk7XHJcbiAgICAkKGAke2Nsc0NvbnN0LnBhZ2luYXRpb259ICR7Y2xzQ29uc3QucGFnaW5hdGlvblBnTnVtYmVyfWApLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdmFsID0gJChlLnRhcmdldCkudGV4dCgpO1xyXG4gICAgICAgIGN1cnJlbnRQYWdlID0gcGFyc2VJbnQodmFsLCAxMCk7XHJcbiAgICAgICAgZ2V0TG9nc0RhdGEoJGxpc3QsIHBhdGgsIGN1cnJlbnRQYWdlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50UGFnZSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUGFnaW5hdGlvbihkYXRhQXJyYXksICR3cmFwcGVyKSB7XHJcbiAgICBjb25zdCB7cGFnaW5hdGlvbn0gPSBkYXRhQXJyYXkuc2V0dGluZ3M7XHJcbiAgICBjb25zdCB0cGxQcmV2aW91cyA9ICQoYDxsaSBjbGFzcz1cInBhZ2UtaXRlbSAkeyghcGFnaW5hdGlvbi5wcmV2aW91cykgPyAnZGlzYWJsZWQnIDogJyd9XCI+PGEgY2xhc3M9XCJwYWdlLWxpbmtcIiBocmVmPVwiI1wiICR7KCFwYWdpbmF0aW9uLnByZXZpb3VzKSA/ICd0YWJpbmRleD1cIi0xXCInIDogJyd9PtCd0LDQt9Cw0LQ8L2E+PC9saT5gKTtcclxuICAgIGNvbnN0IHRwbE5leHQgPSAkKGA8bGkgY2xhc3M9XCJwYWdlLWl0ZW0gJHsoIXBhZ2luYXRpb24ubmV4dCkgPyAnZGlzYWJsZWQnIDogJyd9XCI+PGEgY2xhc3M9XCJwYWdlLWxpbmtcIiBocmVmPVwiI1wiICR7KCFwYWdpbmF0aW9uLm5leHQpID8gJ3RhYmluZGV4PVwiLTFcIicgOiAnJ30+0JLQv9C10YDQtdC0PC9hPjwvbGk+YCk7XHJcbiAgICBjbGVhclBhZ2luYXRpb24oJHdyYXBwZXIpO1xyXG5cclxuICAgICR3cmFwcGVyLmFwcGVuZCh0cGxQcmV2aW91cyk7XHJcbiAgICBwYWdpbmF0aW9uWydwYWdlcyddLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAkKGA8bGkgY2xhc3M9XCJwYWdlLWl0ZW0gcGFnZS1udW1iZXIgJHsocGFnaW5hdGlvbi5jdXJyZW50ID09PSBpdGVtKSA/ICdhY3RpdmUnIDogJyd9XCI+PGEgY2xhc3M9XCJwYWdlLWxpbmtcIiBocmVmPVwiI1wiPiR7aXRlbX08L2E+PC9saT5gKS5hcHBlbmRUbygkd3JhcHBlcik7XHJcbiAgICB9KTtcclxuICAgICR3cmFwcGVyLmFwcGVuZCh0cGxOZXh0KTtcclxuICAgIGluaXRIYW5kbGVyUGFnaW5hdGlvbih0cGxQcmV2aW91cywgdHBsTmV4dCwgZGF0YUFycmF5KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJQYWdpbmF0aW9uKCR3cmFwcGVyKSB7XHJcbiAgICAkd3JhcHBlci5lbXB0eSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaWxsTGlzdE1ldGEoJGxpc3QsIGRhdGFBcnJheSwgaXNSdW5zKSB7XHJcbiAgICBjb25zdCAkd3JhcHBlclBhZ2luYXRpb24gPSAkKCcubG9ncy1wYWdpbmF0aW9uJyk7XHJcbiAgICBjb25zdCBpdGVtcyA9IGRhdGFBcnJheS5sb2dzO1xyXG4gICAgLy8gY29uc3QgZGVmYXVsdEF2YXRhclNyYyA9ICdodHRwczovL2kuaW1ndXIuY29tL2pOTlQ0TEUucG5nJztcclxuICAgICRsaXN0LmVtcHR5KCk7XHJcbiAgICBpZiAoIWl0ZW1zLmxlbmd0aCkge1xyXG4gICAgICAgICQoYDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBweS0yXCI+XHJcbiAgICAgICAgICAgIDxwPtCSINGN0YLQvtC8INGA0LDQt9C00LXQu9C1INC90LXRgiDQvdC4INC+0LTQvdC+0Lkg0LfQsNC00LDRh9C4LjwvcD5cclxuICAgICAgICA8L2xpPmApLmFwcGVuZFRvKCRsaXN0KTtcclxuICAgICAgICBjbGVhclBhZ2luYXRpb24oJHdyYXBwZXJQYWdpbmF0aW9uKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBhZGRQYWdpbmF0aW9uKGRhdGFBcnJheSwgJHdyYXBwZXJQYWdpbmF0aW9uKTtcclxuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCB7bGV2ZWwsIHZhbHVlfSA9IGl0ZW07XHJcbiAgICAgICAgJChgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIHAtMCBweS0yXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWJvZHkgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgdGFzay10eXBlICR7KGxldmVsID09PSAnRVJST1InKSA/ICd0ZXh0LWRhbmdlcicgOiAnJ31cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICR7KHZhbHVlKSA/IGAke3ZhbHVlfWAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2xpPmApLmFwcGVuZFRvKCRsaXN0KTtcclxuXHJcbiAgICAgICAgaWYgKCEkKCdsaScsICRsaXN0KS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgJChgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIHB5LTJcIiA+XHJcbiAgICAgICAgICAgICAgICA8cD7QkiDRjdGC0L7QvCDRgNCw0LfQtNC10LvQtSDQvdC10YIg0L3QuCDQvtC00L3QvtC5INC30LDQtNCw0YfQuC48L3A+XHJcbiAgICAgICAgICAgIDwvbGk+YCkuYXBwZW5kVG8oJGxpc3QpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRMb2dzRGF0YSgkbGlzdCwgcGF0aCwgcGFnZSkge1xyXG4gICAgcGF0aC51c2VybmFtZSA9IGdldFVzZXJuYW1lKHNlbGVjdENscyk7XHJcbiAgICBVc2VyVGFza01hbmFnZXIuZ2V0TG9nc0NoYXRCb3QocGF0aCwgcGFnZSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMuc3RhdGUgPT09ICdvaycpIHtcclxuICAgICAgICAgICAgZmlsbExpc3RNZXRhKCRsaXN0LCByZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZUludGVydmFsID0gcmVzdWx0LmRhdGEuc2V0dGluZ3MuaW52b2tlX2luX21pbGxpcztcclxuICAgICAgICAgICAgLy8gcmVzZXQgVGltZXIgcmVxdWVzdFxyXG4gICAgICAgICAgICBpZiAoaW50ZXJ2YWxJZCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgPD0gMSkge1xyXG4gICAgICAgICAgICAgICAgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW5kZW50XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0TG9nc0RhdGEoJGxpc3QsIHBhdGgsIGN1cnJlbnRQYWdlKTtcclxuICAgICAgICAgICAgICAgIH0sIHVwZGF0ZUludGVydmFsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoYDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBweS0yXCI+XHJcbiAgICAgICAgICAgICAgICA8cD7QndC10YIg0LTQvtGB0YLRg9C/0LA8L3A+XHJcbiAgICAgICAgICAgIDwvbGk+YCkuYXBwZW5kVG8oJGxpc3QpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmVDb25maWcoY2ZnKSB7XHJcbiAgICBjbHNDb25zdCA9IGNmZztcclxuICAgICRsaXN0ID0gJChjbHNDb25zdC50YXNrc0xpc3QpO1xyXG4gICAgcGF0aC50eXBlID0gY2ZnLnBhdGhUeXBlO1xyXG4gICAgcGF0aC5zdWJ0eXBlID0gY2ZnLnBhdGhTdWJUeXBlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdChfc2VsZWN0Q2xzLCBjZmcpIHtcclxuICAgIGlmICgkKGNmZy5jdXJyZW50UGFnZUNscykubGVuZ3RoKSB7XHJcbiAgICAgICAgc2VsZWN0Q2xzID0gX3NlbGVjdENscztcclxuICAgICAgICBwcmVDb25maWcoY2ZnKTtcclxuICAgICAgICBpZiAoZ2V0VXNlcm5hbWUoKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhnZXRVc2VybmFtZSgpKTtcclxuICAgICAgICAgICAgZ2V0TG9nc0RhdGEoJGxpc3QsIHBhdGgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZWxlY3QgdXNlcicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL2xvZ3MvbG9ncy5qcyIsImltcG9ydCB7Q09OU1R9IGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMnO1xyXG4vLyBpbXBvcnQgJ2JydXR1c2luLWpzb24tZm9ybXMnO1xyXG5jb25zdCBzdGF0ZSA9IHtcclxuICAgIHVzZXJuYW1lOiAnJ1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEluaXQgaGVhZGVyXHJcbiAqL1xyXG5mdW5jdGlvbiBpbml0U3RlcHMoZm9ybVNlbGVjdG9yLCB3aXphcmRDZmcpIHtcclxuICAgIGNvbnN0ICRmb3JtID0gJChmb3JtU2VsZWN0b3IpO1xyXG4gICAgY29uc3Qge3N0ZXBSZWR1Y2VyLCBvblN1Ym1pdEhhbmRsZXJ9ID0gd2l6YXJkQ2ZnO1xyXG4gICAgJCgnLmpzX3Byb2ZpbGUtdXNlci1mb2xsb3c+LmNvbnRhaW5lcicpLnJlbW92ZUNsYXNzKCdjb250YWluZXInKTtcclxuXHJcbiAgICAkZm9ybS5maW5kKCdmaWVsZHNldDpmaXJzdC1jaGlsZCcpLmZhZGVJbignc2xvdycpO1xyXG5cclxuICAgICRmb3JtLmZpbmQoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdJykub24oJ2ZvY3VzJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2lucHV0LWVycm9yJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBuZXh0IHN0ZXBcclxuICAgICRmb3JtLmZpbmQoJy5idG4tbmV4dCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBwYXJlbnRfZmllbGRzZXQgPSAkKHRoaXMpLnBhcmVudHMoJ2ZpZWxkc2V0Jyk7XHJcbiAgICAgICAgbGV0IG5leHRfc3RlcCA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgcmFkaW9CdG5BY3RpdmUgPSBwYXJlbnRfZmllbGRzZXQuZmluZCgnaW5wdXRbbmFtZT1cInVzZXJBY2NvdW50UmFkaW9cIl06Y2hlY2tlZCcpO1xyXG5cclxuICAgICAgICBpZiAocmFkaW9CdG5BY3RpdmUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VybmFtZSA9IHJhZGlvQnRuQWN0aXZlLnBhcmVudHMoJ2xpJykuZGF0YSgndXNlcm5hbWUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzdGVwUmVkdWNlcikge1xyXG4gICAgICAgICAgICBzdGVwUmVkdWNlcihwYXJlbnRfZmllbGRzZXQuaW5kZXgoKSwgc3RhdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcGFyZW50X2ZpZWxkc2V0LmZpbmQoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdLGlucHV0W3R5cGU9XCJlbWFpbFwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS52YWwoKSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2lucHV0LWVycm9yJyk7XHJcbiAgICAgICAgICAgICAgICBuZXh0X3N0ZXAgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2lucHV0LWVycm9yJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKG5leHRfc3RlcCkge1xyXG4gICAgICAgICAgICBwYXJlbnRfZmllbGRzZXQuZmFkZU91dCg0MDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykubmV4dCgpLmZhZGVJbigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gcHJldmlvdXMgc3RlcFxyXG4gICAgJGZvcm0uZmluZCgnLmJ0bi1wcmV2aW91cycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBzdGF0ZS51c2VybmFtZSA9IFsuLi5uZXcgU2V0KHN0YXRlLnVzZXJuYW1lKV07XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCdmaWVsZHNldCcpLmZhZGVPdXQoNDAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucHJldigpLmZhZGVJbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gc3BlZWQgcmFkaW8tYnRuIGdyb3VwXHJcbiAgICAkKCcuanNfZm9sbG93LXNwZWVkIGlucHV0W3R5cGU9cmFkaW9dJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIGNvbnN0IHZhbHVlID0gJCh0aGlzKS5hdHRyKCd2YWx1ZScpO1xyXG4gICAgICAgIC8vIHN0YXRlLnVzZXJfZGVmYXVsdF9jb25maWcgPSB7XHJcbiAgICAgICAgLy8gICAgIHRhc2tfbW9kZTogdmFsdWUudG9VcHBlckNhc2UoKVxyXG4gICAgICAgIC8vIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBzdWJtaXRcclxuICAgICRmb3JtLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICQodGhpcykuZmluZCgnaW5wdXRbdHlwZT1cInRleHRcIl0saW5wdXRbdHlwZT1cIm51bWJlclwiXSxpbnB1dFt0eXBlPVwiZW1haWxcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCQodGhpcykudmFsKCkgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdpbnB1dC1lcnJvcicpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaW5wdXQtZXJyb3InKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAob25TdWJtaXRIYW5kbGVyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCcqKm91dGVyIG9uU3VibWl0SGFuZGxlcioqJyk7XHJcbiAgICAgICAgICAgIG9uU3VibWl0SGFuZGxlcihlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTdWJtaXRIYW5kbGVyIEVORCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gYWxlcnQgY2xvc2VcclxuICAgICQoJy5mb3JtLXN1Ym1pdC1maW5pc2ggLmNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdmb3JtLXN1Ym1pdC1maW5pc2ggLmNsb3NlJyk7XHJcbiAgICAgICAgLy8gJCh0aGlzKS5jbG9zZXN0KCdmb3JtLXN1Ym1pdC1maW5pc2gnKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpO1xyXG4gICAgICAgIC8vICQoJyN2LXBpbGxzLXJ1bm5lZC10YWInKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgIC8vIHdpbmRvdy5QdWJTdWIucHVibGlzaChDT05TVC5ldmVudHMudGFza3MuTkVXX1RBU0tfQ1JFQVRFRCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLypcclxuZnVuY3Rpb24gZml4U3RlcEluZGljYXRvcihuKSB7XHJcbiAgICAvLyBUaGlzIGZ1bmN0aW9uIHJlbW92ZXMgdGhlIFwiYWN0aXZlXCIgY2xhc3Mgb2YgYWxsIHN0ZXBzLi4uXHJcbiAgICB2YXIgaSwgeCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzdGVwXCIpO1xyXG4gICAgZm9yIChpID0gMDsgaSA8IHgubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB4W2ldLmNsYXNzTmFtZSA9IHhbaV0uY2xhc3NOYW1lLnJlcGxhY2UoXCIgYWN0aXZlXCIsIFwiXCIpO1xyXG4gICAgfVxyXG4gICAgLy8uLi4gYW5kIGFkZHMgdGhlIFwiYWN0aXZlXCIgY2xhc3Mgb24gdGhlIGN1cnJlbnQgc3RlcDpcclxuICAgIHhbbl0uY2xhc3NOYW1lICs9IFwiIGFjdGl2ZVwiO1xyXG59Ki9cclxuXHJcbmZ1bmN0aW9uIG1vZGlmeUFjY0xpc3QoKSB7XHJcbiAgICBjb25zdCByYWRpb0J0bkFwcGVuZCA9IChpZHgpID0+IGA8ZGl2IGNsYXNzPVwiXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwidXNlckFjY291bnRSYWRpb1wiIGlkPVwiY3VzdG9tUmFkaW8tJHtpZHh9XCIgY2xhc3M9XCJjdXN0b20tY29udHJvbC1pbnB1dCBkLW5vbmVcIiB2YWx1ZT1cIlwiPlxyXG4gICAgICAgIDwvZGl2PmA7XHJcbiAgICBjb25zdCByYWRpb0J0bldyYXAgPSAoaWR4KSA9PiBgPGxhYmVsIGNsYXNzPVwiYWNjb3VudHMtbGlzdC0tbGFiZWwtd3JhcHBlciBjb2wgbWItMCBtZWRpYSBweS0zXCIgZm9yPVwiY3VzdG9tUmFkaW8tJHtpZHh9XCI+PC9sYWJlbD5gO1xyXG4gICAgY29uc3QgJGFjY291bnRzTGlzdCA9ICQoJy5hY2NvdW50cy1saXN0Jyk7XHJcbiAgICBjb25zdCAkbGkgPSAkYWNjb3VudHNMaXN0LmZpbmQoJ2xpLm1lZGlhJyk7XHJcbiAgICAkbGkuYWRkQ2xhc3MoJ2pzX3VzZXItcmFkaW8nKS5yZW1vdmVDbGFzcygncHktMyBtZWRpYScpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgJGxpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgJCgkbGlbaV0pLndyYXBJbm5lcihyYWRpb0J0bldyYXAoaSkpLmFwcGVuZChyYWRpb0J0bkFwcGVuZChpKSk7XHJcbiAgICB9XHJcbiAgICAvLyBVc2VyVGFza01hbmFnZXIuZ2V0VGFza1R5cGVzKCkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAvLyAgICAgaWYgKHJlc3VsdC5zdGF0dXMuc3RhdGUgPT09ICdvaycpIHtcclxuICAgIC8vICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgIC8vICAgICAgICAgZmlsbExpc3RUeXBlcygkKCcuanNfdGFzay10eXBlcycpLCByZXN1bHQuZGF0YSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgJCgnLmpzX3VzZXItcmFkaW8nKS5vbignY2xpY2snLCAnaW5wdXRbdHlwZT1yYWRpb10nLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGNvbnN0ICRwYXJlbnRGaWVsZHNldCA9ICQodGhpcykucGFyZW50cygnZmllbGRzZXQnKTtcclxuICAgICAgICAkKCdsaS5hY3RpdmUnLCAkcGFyZW50RmllbGRzZXQpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ2xpJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy5idG4tbmV4dCcsICRwYXJlbnRGaWVsZHNldCkucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyAkKCcuY2hlY2tib3gtY2VsbCcpLm9uKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCd2YWxpZGF0ZScpO1xyXG4gICAgLy8gICAgIC8vIHVwZGF0ZVN0YXR1cygpO1xyXG4gICAgLy8gfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0KHdpemFyZENmZykge1xyXG4gICAgaWYgKCQoJy53aXphcmQtZm9ybScpLmxlbmd0aCkge1xyXG4gICAgICAgIGluaXRTdGVwcygnLndpemFyZC1mb3JtJywgd2l6YXJkQ2ZnKTtcclxuICAgICAgICB3aW5kb3cuUHViU3ViLnN1YnNjcmliZShDT05TVC5ldmVudHMuaW5zdGFncmFtQWNjb3Vucy5JTlNUQUdSQU1fQUNDT1VOU19SRU5ERVJFRCwgKGV2ZW50TmFtZSwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBtb2RpZnlBY2NMaXN0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy93aXphcmQtZm9ybS93aXphcmQtZm9ybS5qcyIsImltcG9ydCAnLi9iYXNlLnNjc3MnO1xyXG4vLyBpbXBvcnQgJ2Jvb3RzdHJhcCc7XHJcbmltcG9ydCB7Q09OU1R9IGZyb20gJy4vY29tbW9uL2pzLXNlcnZpY2VzL2NvbnN0cyc7XHJcbmltcG9ydCBQdWJTdWIgZnJvbSAncHVic3ViLWpzJztcclxuaW1wb3J0IFJlZ2lzdGVyRm9ybSBmcm9tICcuL2Jsb2Nrcy9yZWdpc3Rlci1mb3JtL3JlZ2lzdGVyLWZvcm0nO1xyXG5pbXBvcnQge0xvZ2luRm9ybX0gZnJvbSAnLi9ibG9ja3MvbG9naW4tZm9ybS9sb2dpbi1mb3JtJztcclxuaW1wb3J0IHtMb2dpblBhZ2V9IGZyb20gJy4vcGFnZXMvX2F1dGgvbG9naW4tcGFnZSc7XHJcbmltcG9ydCB7Y29uZmlybWF0aW9uV2l0aFJlZGlyZWN0fSBmcm9tICcuL2Jsb2Nrcy9jb25maXJtLXJlZy9jb25maXJtLXJlZyc7XHJcbmltcG9ydCAqIGFzIGhlYWRlciBmcm9tICcuL2Jsb2Nrcy9oZWFkZXIvaGVhZGVyJztcclxuaW1wb3J0ICogYXMgYnVyZ2VyTWVudSBmcm9tICcuL2Jsb2Nrcy9oZWFkZXIvYnVyZ2VyLW1lbnUvYnVyZ2VyLW1lbnUnO1xyXG5pbXBvcnQgKiBhcyBpbnN0YWdyYW1BY2NvdW50cyBmcm9tICcuL2Jsb2Nrcy9pbnN0YWdyYW0tYWNjb3VudHMtbGlzdC9pbnN0YWdyYW0tYWNjb3VudHMtbGlzdCc7XHJcbmltcG9ydCAqIGFzIG1lc3NhZ2VzIGZyb20gJy4vYmxvY2tzL21lc3NhZ2VzL21lc3NhZ2VzJztcclxuaW1wb3J0ICogYXMgZm9sbG93IGZyb20gJy4vYmxvY2tzL2ZvbGxvdy9mb2xsb3cnO1xyXG5pbXBvcnQgKiBhcyBjaGF0Qm90IGZyb20gJy4vYmxvY2tzL2NoYXQtYm90LWJsb2NrL2NoYXQtYm90LWJsb2NrJztcclxuaW1wb3J0ICogYXMgYXV0b2dyZWV0aW5nIGZyb20gJy4vYmxvY2tzL2F1dG9ncmVldGluZy9hdXRvZ3JlZXRpbmctbWFpbic7XHJcblxyXG5jb25zdCBzZWxlY3RvckNzc0xvZ2luRm9ybSA9IHtcclxuICAgIF9sb2dpbkJveDogQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyTG9naW5Cb3gsXHJcbiAgICBfZm9ybUlkOiAnI2pzX2xvZ2luLWZvcm0nLFxyXG4gICAgX2J1dHRvblN1Ym1pdElkOiAnI2pzX2xvZ2luX2J0bicsXHJcbiAgICBfc2hvd0xvZ2luQm94QnRuSWQ6IENPTlNULnVpU2VsZWN0b3JzLmhlYWRlck5hdkxvZ2luQnRuXHJcbn07XHJcblxyXG5jb25zdCBzZWxlY3RvckNzc0xvZ2luRm9ybUluc3RhZ3JhbSA9IHtcclxuICAgIF9sb2dpbkJveDogJ21haW4gLmxvZ2luLWJveCcsXHJcbiAgICBfZm9ybUlkOiAnI2pzX2luc3RhZ3JhbS1hZGQtYWNjb3VudCcsXHJcbiAgICBfYnV0dG9uU3VibWl0SWQ6ICcjanNfaW5zdGFncmFtLWFkZC1hY2NvdW50LS1idG4nLFxyXG4gICAgX3Nob3dMb2dpbkJveEJ0bklkOiAnI2pzX3Nob3ctbG9naW4tYm94JyxcclxuICAgIGlzTG9naW5JbnN0YWdyYW06IHRydWVcclxufTtcclxuXHJcbmZ1bmN0aW9uIHNldFB1YlN1YihQdWJTdWIpIHtcclxuICAgIHdpbmRvdy5QdWJTdWIgPSBQdWJTdWI7XHJcbn1cclxuXHJcbmNvbnN0IGluaXQgPSAoKSA9PiB7XHJcbiAgICBzZXRQdWJTdWIoUHViU3ViKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdpbml0IGpzIGhlcmUnLCBDT05TVC51c2VyKTtcclxuICAgIChuZXcgUmVnaXN0ZXJGb3JtKCkpLmluaXQoKTtcclxuICAgIExvZ2luRm9ybShzZWxlY3RvckNzc0xvZ2luRm9ybSkuaW5pdCgpO1xyXG4gICAgTG9naW5Gb3JtKHNlbGVjdG9yQ3NzTG9naW5Gb3JtSW5zdGFncmFtKS5pbml0KCk7IC8vIGluaXQgaW5zdGFncmFtIGxvZ2luIGZvcm0qIS9cclxuICAgIExvZ2luUGFnZSh7XHJcbiAgICAgICAgX2xvZ2luQm94OiAnLmF1dGgubG9naW4gLmNhcmQtc2lnbmluJyxcclxuICAgICAgICBfZm9ybUlkOiAnLmZvcm0tc2lnbmluJyxcclxuICAgICAgICBfYnV0dG9uU3VibWl0SWQ6ICcuZm9ybS1zaWduaW4gW3R5cGU9XCJzdWJtaXRcIl0nXHJcbiAgICB9KS5pbml0KCk7XHJcblxyXG4gICAgY29uZmlybWF0aW9uV2l0aFJlZGlyZWN0KCkuaW5pdCgpO1xyXG4gICAgaGVhZGVyLmluaXRIZWFkZXIoKTtcclxuICAgIGJ1cmdlck1lbnUuaW5pdCgpO1xyXG4gICAgZm9sbG93LmluaXQoKTtcclxuICAgIGluc3RhZ3JhbUFjY291bnRzLmluaXQoKTtcclxuICAgIG1lc3NhZ2VzLmluaXQoKTtcclxuICAgIGNoYXRCb3QuaW5pdCgpO1xyXG4gICAgYXV0b2dyZWV0aW5nLmluaXQoKTtcclxufTtcclxuXHJcbigoKSA9PiBpbml0KCkpKCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ib290c3RyYXAuanMiLCJpbXBvcnQge0NPTlNUfSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29uc3RzJztcclxuaW1wb3J0ICogYXMgd2l6YXJkRm9ybSBmcm9tICcuLi8uLi9ibG9ja3Mvd2l6YXJkLWZvcm0vd2l6YXJkLWZvcm0nO1xyXG5pbXBvcnQgVXNlclRhc2tNYW5hZ2VyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9hcGktdGFzay1tYW5hZ2VyJztcclxuaW1wb3J0ICogYXMgY2hhdEJvdFN0YXR1cyBmcm9tICcuL2F1dG9ncmVldGluZy1zdGF0dXMnO1xyXG5pbXBvcnQgKiBhcyBjaGF0Qm90TG9ncyBmcm9tICcuLi9sb2dzL2xvZ3MnO1xyXG5cclxubGV0IHVzZXJuYW1lU2VsZWN0ZWQgPSAnJztcclxubGV0IHVzZXJMaXN0SW5zdGFncmFtID0gW107XHJcbmNvbnN0IHNlbGVjdENscyA9ICdqc19sb2dzLWFjY291bnRzJztcclxuY29uc3Qgc3BlZWRUeXBlID0gJy5qc19hdXRvZ3JlZXRpbmctc3BlZWQnO1xyXG5jb25zdCBjbHNDb25zdCA9IHtcclxuICAgIGN1cnJlbnRQYWdlQ2xzOiAnLmF1dG9ncmVldGluZy1wYWdlJyxcclxuICAgIHRhc2tzTGlzdDogJy5ib3QtbG9nLXRhc2tzJyxcclxuICAgIGxvZ3NUYWJCdG46ICcjdi1waWxscy1sb2dzLXRhYicsXHJcbiAgICBwYWdpbmF0aW9uOiAnLmxvZ3MtcGFnaW5hdGlvbicsXHJcbiAgICBwYWdpbmF0aW9uUGdOdW1iZXI6ICcucGFnZS1udW1iZXInLFxyXG4gICAgcGF0aFR5cGU6IENPTlNULnVybC50bVR5cGVzLmF1dG9ncmVldFQsXHJcbiAgICBwYXRoU3ViVHlwZTogQ09OU1QudXJsLnRtVHlwZXMuYXV0b2dyZWV0U3ViVFswXVxyXG59O1xyXG5cclxuZnVuY3Rpb24gb25TdWJtaXRIYW5kbGVyKGUpIHtcclxuICAgIGNvbnN0IGZpZWxkcyA9ICQoJy5jaGF0LWJvdC10ZXh0LWZpZWxkcycpO1xyXG4gICAgLy8gY29uc3Qga2V5V29yZHMgPSAkZWwgPT4gJGVsLnZhbCgpXHJcbiAgICAvLyAgICAgLnRyaW0oKVxyXG4gICAgLy8gICAgIC5yZXBsYWNlKC8gL2csICcnKVxyXG4gICAgLy8gICAgIC5zcGxpdCgnLCcpXHJcbiAgICAvLyAgICAgLmZpbHRlcihpID0+IGkubGVuZ3RoID4gMCk7XHJcbiAgICBjb25zdCByZXFCb2R5ID0gW107XHJcbiAgICBmaWVsZHMuZWFjaCgoaWR4LCBpdGVtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9ICQoaXRlbSkuZmluZCgndGV4dGFyZWEuY2hhdC13b3JkcycpLnZhbCgpO1xyXG4gICAgICAgIC8vIGNvbnN0IGFuc3dlciA9ICQoaXRlbSkuZmluZCgndGV4dGFyZWEuY2hhdC1tZXNzYWdlcycpLnZhbCgpO1xyXG4gICAgICAgIC8vIHJlcUJvZHkucHVzaCh7J2tleV93b3Jkcyc6IGtleVdvcmQsIGFuc3dlcn0pO1xyXG4gICAgICAgIHJlcUJvZHkucHVzaChtZXNzYWdlKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgblJlcUJvZHkgPSB7XHJcbiAgICAgICAgJ3VzZXJuYW1lJzogdXNlcm5hbWVTZWxlY3RlZCB8fCAndGhlX3Jvc3R5c2xhdicsXHJcbiAgICAgICAgJ3R5cGUnOiBDT05TVC51cmwudG1UeXBlcy5hdXRvZ3JlZXRULFxyXG4gICAgICAgICdzdWJ0eXBlJzogQ09OU1QudXJsLnRtVHlwZXMuYXV0b2dyZWV0U3ViVFswXSxcclxuICAgICAgICAndXNlcl9kZWZhdWx0X2NvbmZpZyc6IHtcclxuICAgICAgICAgICAgJ3Rhc2tfbW9kZSc6ICdBR0dSRVNTSVZFJyAvLyB0b2RvXHJcbiAgICAgICAgfSxcclxuICAgICAgICAndXNlcl9jdXN0b21fY29uZmlnJzoge1xyXG4gICAgICAgICAgICAnbWVzc2FnZXMnOiByZXFCb2R5XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnNvbGUubG9nKCdtYWtlIHJlcXVlc3QgaGVyZSoqJywgblJlcUJvZHksIEpTT04uc3RyaW5naWZ5KG5SZXFCb2R5KSk7XHJcbiAgICBmdW5jdGlvbiBjYkVycm9yKHJlcykge1xyXG4gICAgICAgIGNvbnN0IG1zZyA9IHJlcy5zdGF0dXMubWVzc2FnZTtcclxuICAgICAgICAkKCcuZm9ybS1zdWJtaXQtZmluaXNoLS1lcnJvcicpLmFkZENsYXNzKCdkLWJsb2NrJylcclxuICAgICAgICAuZmluZCgnLmFsZXJ0JykuYXBwZW5kKGA8cD4ke21zZ308L3A+YCk7XHJcbiAgICB9XHJcbiAgICBVc2VyVGFza01hbmFnZXIucG9zdFN0YXJ0Q2hhdEJvdChuUmVxQm9keSwgY2JFcnJvcikudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Bvc3RCb3QnKTtcclxuICAgICAgICBpZiAocmVzdWx0LnN0YXR1cy5zdGF0ZSA9PT0gJ29rJykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcclxuICAgICAgICAgICAgJCgnLmZvcm0tc3VibWl0LWZpbmlzaCcpLmFkZENsYXNzKCdkLWJsb2NrJylcclxuICAgICAgICAgICAgICAgIC5maW5kKCcuYWxlcnQnKS5hcHBlbmQoYDxwPnRhc2tfaWQ6ICR7cmVzdWx0LmRhdGEudGFza19pZH08L3A+YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbGxMaXN0VXNlcnMoJHdyYXBwZXIsIGRhdGEpIHtcclxuICAgICR3cmFwcGVyLmVtcHR5KCkuYWRkQ2xhc3MoJ2JvcmRlci1saWdodC1jb2xvcicpO1xyXG4gICAgJChgPGRpdiBjbGFzcz1cIlwiPtCU0L7RgdGC0YPQv9C90YvQtSDQsNC60LrQsNGD0L3RgtGLPC9kaXY+PHNlbGVjdCBuYW1lPVwidGFzay10eXBlXCIgY2xhc3M9XCIke3NlbGVjdENsc31cIj48L3NlbGVjdD5gKS5hcHBlbmRUbygkd3JhcHBlcik7XHJcbiAgICBkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAkKGA8b3B0aW9uIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIHB5LTJcIiB2YWx1ZT1cIiR7aXRlbS51c2VybmFtZX1cIj5cclxuICAgICAgICAgICAgJHtpdGVtLnVzZXJuYW1lfVxyXG4gICAgICAgIDwvb3B0aW9uPmApLmFwcGVuZFRvKCQoYC4ke3NlbGVjdENsc31gKSk7XHJcbiAgICB9KTtcclxuICAgICQoYC4ke3NlbGVjdENsc31gKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHVzZXJuYW1lU2VsZWN0ZWQgPSAkKGAuJHtzZWxlY3RDbHN9IG9wdGlvbjpzZWxlY3RlZGApLnZhbCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJuYW1lU2VsZWN0ZWQpO1xyXG4gICAgICAgIGNoYXRCb3RMb2dzLmluaXQoc2VsZWN0Q2xzLCBjbHNDb25zdCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEluaXQgaGVhZGVyXHJcbiAqL1xyXG5mdW5jdGlvbiBpbml0Q2hhdE1zZygpIHtcclxuICAgIGNvbnN0IHRwbFRleHRGaWVsZCA9IChtc2cpID0+ICQoYDxkaXYgY2xhc3M9XCJjaGF0LWJvdC10ZXh0LWZpZWxkcyBtdC0yXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWNvbnRyb2wgY2hhdC13b3Jkc1wiIHJvd3M9XCI0XCIgcGxhY2Vob2xkZXI9XCIke21zZ31cIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PmApO1xyXG5cclxuICAgICQoJy5qc19hZGQtY2hhdC1ib3QnKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxhc3RUZXh0RmllbGQgPSAkKCcuY2hhdC1ib3QtdGV4dC1maWVsZHMnKS5sYXN0KCk7XHJcbiAgICAgICAgY29uc3QgbXNnID0gJ9CS0LLQtdC00LjRgtC1INC/0YDQuNCy0LXRgtGB0YLQstC40LUnO1xyXG4gICAgICAgIHRwbFRleHRGaWVsZChtc2cpLmluc2VydEFmdGVyKGxhc3RUZXh0RmllbGQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gYWxlcnQgY2xvc2VcclxuICAgICQoJy5mb3JtLXN1Ym1pdC1maW5pc2ggLmNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhbGVydCBjbG9zZScpO1xyXG4gICAgICAgICQoJyN2LXBpbGxzLXJ1bm5lZC10YWInKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgIHdpbmRvdy5QdWJTdWIucHVibGlzaChDT05TVC5ldmVudHMudGFza3MuTkVXX1RBU0tfQ1JFQVRFRCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBhbGVydCBjbG9zZVxyXG4gICAgJCgnLmZvcm0tc3VibWl0LWZpbmlzaC0tZXJyb3IgLmNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhbGVydCBjbG9zZScpO1xyXG4gICAgICAgICQoJyN2LXBpbGxzLXJ1bm5lZC10YWInKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgIHdpbmRvdy5QdWJTdWIucHVibGlzaChDT05TVC5ldmVudHMudGFza3MuTkVXX1RBU0tfQ1JFQVRFRCk7XHJcbiAgICB9KTtcclxuICAgICQoJyN2LXBpbGxzLWxvZ3MtdGFiJykub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAvLyBhdCB0aGlzIHBvaW50IG9mIHRpbWUgc2V0SW50ZXJ2YWwgaXMgd29ya2luZ1xyXG4gICAgICAgIGNvbnN0ICR3cmFwcGVyID0gJCgnLmxvZy11c2Vycy1saXN0Jyk7XHJcbiAgICAgICAgZmlsbExpc3RVc2Vycygkd3JhcHBlciwgdXNlckxpc3RJbnN0YWdyYW0pO1xyXG4gICAgICAgIGNoYXRCb3RMb2dzLmluaXQoc2VsZWN0Q2xzLCBjbHNDb25zdCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0VXNlck5hbWUoc3RhdGUpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdnZXRUYXNrc0RhdGEnLCBzdGF0ZS51c2VybmFtZSk7XHJcbiAgICB1c2VybmFtZVNlbGVjdGVkID0gc3RhdGUudXNlcm5hbWU7XHJcbn1cclxuY29uc3Qgc3RhdGUgPSB7XHJcbiAgICB1c2VyX2RlZmF1bHRfY29uZmlnOiB7XHJcbiAgICAgICAgdGFza19tb2RlOiAnU0FGRSdcclxuICAgIH1cclxufTtcclxuZnVuY3Rpb24gZ2V0RGF0YVN0ZXBTcGVlZCgpIHtcclxuICAgIC8vIGNvbnN0IHVzZXJzID0gJCgnI2ZvbGxvd2VycycpLnZhbCgpXHJcbiAgICAvLyAgICAgLnRyaW0oKVxyXG4gICAgLy8gICAgIC5yZXBsYWNlKC8gL2csICcnKVxyXG4gICAgLy8gICAgIC5zcGxpdCgnLCcpXHJcbiAgICAvLyAgICAgLmZpbHRlcihpID0+IGkubGVuZ3RoID4gMCk7XHJcblxyXG4gICAgLy8gc3RhdGVbJ3VzZXJfY3VzdG9tX2NvbmZpZyddID0ge1xyXG4gICAgLy8gICAgIHVzZXJzXHJcbiAgICAvLyB9O1xyXG4gICAgY29uc3QgZmlsbFNwZWVkTGlzdCA9IGZ1bmN0aW9uICgkd3JhcHBlciwgZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IHRhc2tNb2RlcyA9IGRhdGEuY2ZnICYmIGRhdGEuY2ZnLnRhc2tfbW9kZXM7XHJcbiAgICAgICAgY29uc3QgcmFkaW9CdG5SZWR1Y2VyID0gZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgc3dpdGNoIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdBR0dSRVNTSVZFJzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cIiR7aXRlbX1cIiBuYW1lPVwiY3VzdG9tUmFkaW9cIiB2YWx1ZT1cInNhZmVcIiBjbGFzcz1cImN1c3RvbS1jb250cm9sLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIiBmb3I9XCIke2l0ZW19XCI+PHN0cm9uZz7QkNCz0YDQtdGB0YHQuNCy0L3Ri9C5Ojwvc3Ryb25nPiAzMCDQv9C+0LTQv9C40YHQvtC6INCyINGH0LDRgTwvbGFiZWw+YDtcclxuICAgICAgICAgICAgICAgIC8vIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnTUlERExFJzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCIke2l0ZW19XCIgbmFtZT1cImN1c3RvbVJhZGlvXCIgdmFsdWU9XCJzYWZlXCIgY2xhc3M9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImN1c3RvbS1jb250cm9sLWxhYmVsXCIgZm9yPVwiJHtpdGVtfVwiPjxzdHJvbmc+0KHRgNC10LTQvdC40Lk6PC9zdHJvbmc+IDE4INC/0L7QtNC/0LjRgdC+0Log0LIg0YfQsNGBPC9sYWJlbD5gKTtcclxuICAgICAgICAgICAgICAgIC8vIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnU0FGRSc6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCIke2l0ZW19XCIgbmFtZT1cImN1c3RvbVJhZGlvXCIgdmFsdWU9XCJzYWZlXCIgY2xhc3M9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiIGNoZWNrZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIiBmb3I9XCIke2l0ZW19XCI+PHN0cm9uZz7QkdC10LfQvtC/0LDRgdC90YvQuTo8L3N0cm9uZz4gOSDQv9C+0LTQv9C40YHQvtC6INCyINGH0LDRgTwvbGFiZWw+YDtcclxuICAgICAgICAgICAgICAgIC8vIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGVmYXVsdCcsIGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZHJhdyBzcGVlZCByYWRpb0J0bicpO1xyXG4gICAgICAgICR3cmFwcGVyLmVtcHR5KCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIGluIHRhc2tNb2Rlcykge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnc3RydWN0dXJlOiAnICsgaXRlbSk7XHJcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGFza01vZGVzLCBpdGVtKSkge1xyXG4gICAgICAgICAgICAgICAgJChgPGRpdiBjbGFzcz1cImN1c3RvbS1jb250cm9sIGN1c3RvbS1yYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgJHtyYWRpb0J0blJlZHVjZXIoaXRlbSl9XHJcbiAgICAgICAgICAgIDwvZGl2PmApLmFwcGVuZFRvKCR3cmFwcGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBwYXRoID0ge1xyXG4gICAgICAgIHR5cGU6IGNsc0NvbnN0LnBhdGhUeXBlLFxyXG4gICAgICAgIHN1YnR5cGU6IGNsc0NvbnN0LnBhdGhTdWJUeXBlXHJcbiAgICB9O1xyXG4gICAgLy8gZHJhdyBjcml0ZXJpYVxyXG4gICAgVXNlclRhc2tNYW5hZ2VyLmdldERlZmF1bHRDb25maWdzKHBhdGgpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdnZXREZWZhdWx0Q29uZmlncycpO1xyXG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzLnN0YXRlID09PSAnb2snKSB7XHJcbiAgICAgICAgICAgIGZpbGxTcGVlZExpc3QoJChzcGVlZFR5cGUpLCByZXN1bHQuZGF0YS5mb3VuZCk7XHJcbiAgICAgICAgICAgIC8vIHNwZWVkIHJhZGlvLWJ0biBncm91cFxyXG4gICAgICAgICAgICAkKGAke3NwZWVkVHlwZX0gaW5wdXRbdHlwZT1yYWRpb11gKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9ICQodGhpcykuYXR0cigndmFsdWUnKTtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnVzZXJfZGVmYXVsdF9jb25maWcgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFza19tb2RlOiB2YWx1ZS50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RlcFJlZHVjZXIoc3RlcE51bWJlciwgc3RhdGUpIHtcclxuICAgIHN3aXRjaCAoc3RlcE51bWJlcikge1xyXG4gICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgc2V0VXNlck5hbWUoc3RhdGUpO1xyXG4gICAgICAgICAgICBnZXREYXRhU3RlcFNwZWVkKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLCBzdGVwTnVtYmVyKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZSwgc3RlcE51bWJlcik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZWZhdWx0Jywgc3RlcE51bWJlcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgaWYgKCQoY2xzQ29uc3QuY3VycmVudFBhZ2VDbHMpLmxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IHdpemFyZENmZyA9IHtcclxuICAgICAgICAgICAgc3RlcFJlZHVjZXIsXHJcbiAgICAgICAgICAgIG9uU3VibWl0SGFuZGxlclxyXG4gICAgICAgIH07XHJcbiAgICAgICAgd2l6YXJkRm9ybS5pbml0KHdpemFyZENmZyk7XHJcbiAgICAgICAgaW5pdENoYXRNc2coKTtcclxuICAgICAgICB3aW5kb3cuUHViU3ViLnN1YnNjcmliZShDT05TVC5ldmVudHMuaW5zdGFncmFtQWNjb3Vucy5JTlNUQUdSQU1fQUNDT1VOU19SRU5ERVJFRCwgKGUsIGRhdGFPYmopID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0lOU1RBR1JBTV9BQ0NPVU5TX1JFTkRFUkVEJywgZGF0YU9iaik7XHJcbiAgICAgICAgICAgIHVzZXJMaXN0SW5zdGFncmFtID0gZGF0YU9iai5kYXRhQXJyYXk7XHJcbiAgICAgICAgICAgIGNoYXRCb3RTdGF0dXMuaW5pdChjbHNDb25zdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9hdXRvZ3JlZXRpbmcvYXV0b2dyZWV0aW5nLW1haW4uanMiLCJpbXBvcnQge0NPTlNUfSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29uc3RzJztcclxuaW1wb3J0IHtnZXRUYXNrc0RhdGF9IGZyb20gJy4uL2ZvbGxvdy9mb2xsb3ctc3RhdHVzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0KGNmZykge1xyXG4gICAgaWYgKCQoY2ZnLmN1cnJlbnRQYWdlQ2xzKS5sZW5ndGgpIHtcclxuICAgICAgICBjb25zdCB7cGF0aFR5cGUsIHBhdGhTdWJUeXBlfSA9IGNmZztcclxuICAgICAgICBjb25zdCBwYXRoID0ge1xyXG4gICAgICAgICAgICB0eXBlOiBwYXRoVHlwZSxcclxuICAgICAgICAgICAgc3VidHlwZTogcGF0aFN1YlR5cGV9O1xyXG4gICAgICAgIGNvbnN0IHdyYXBwZXJzID0ge1xyXG4gICAgICAgICAgICAkcnVuczogJCgnLnRhc2tzLXJ1bnMnKSxcclxuICAgICAgICAgICAgJHN0b3BwZWQ6ICQoJy50YXNrcy1zdG9wcGVkJylcclxuICAgICAgICB9O1xyXG4gICAgICAgIGdldFRhc2tzRGF0YSh3cmFwcGVycywgcGF0aCk7XHJcbiAgICAgICAgd2luZG93LlB1YlN1Yi5zdWJzY3JpYmUoQ09OU1QuZXZlbnRzLnRhc2tzLk5FV19UQVNLX0NSRUFURUQsIChldmVudE5hbWUsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dldFRhc2tzRGF0YSAqKk5FV19UQVNLX0NSRUFURUQqKicpO1xyXG4gICAgICAgICAgICBnZXRUYXNrc0RhdGEod3JhcHBlcnMsIHBhdGgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL2F1dG9ncmVldGluZy9hdXRvZ3JlZXRpbmctc3RhdHVzLmpzIiwiaW1wb3J0IHtDT05TVH0gZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2NvbnN0cyc7XHJcbmltcG9ydCAqIGFzIHdpemFyZEZvcm0gZnJvbSAnLi4vLi4vYmxvY2tzL3dpemFyZC1mb3JtL3dpemFyZC1mb3JtJztcclxuaW1wb3J0IFVzZXJUYXNrTWFuYWdlciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvYXBpLXRhc2stbWFuYWdlcic7XHJcbmltcG9ydCAqIGFzIGNoYXRCb3RTdGF0dXMgZnJvbSAnLi9jaGF0LWJvdC1zdGF0dXMnO1xyXG5pbXBvcnQgKiBhcyBjaGF0Qm90TG9ncyBmcm9tICcuLi9sb2dzL2xvZ3MnO1xyXG5cclxubGV0IHVzZXJuYW1lU2VsZWN0ZWQgPSAnJztcclxubGV0IHVzZXJMaXN0SW5zdGFncmFtID0gW107XHJcbmNvbnN0IHNlbGVjdENscyA9ICdqc19sb2dzLWFjY291bnRzJztcclxuY29uc3QgY2xzQ29uc3QgPSB7XHJcbiAgICBjdXJyZW50UGFnZUNsczogJy5jaGF0LWJvdC1wYWdlJyxcclxuICAgIHRhc2tzTGlzdDogJy5ib3QtbG9nLXRhc2tzJyxcclxuICAgIGxvZ3NUYWJCdG46ICcjdi1waWxscy1sb2dzLXRhYicsXHJcbiAgICBwYWdpbmF0aW9uOiAnLmxvZ3MtcGFnaW5hdGlvbicsXHJcbiAgICBwYWdpbmF0aW9uUGdOdW1iZXI6ICcucGFnZS1udW1iZXInLFxyXG4gICAgcGF0aFR5cGU6IENPTlNULnVybC50bVR5cGVzLmF1dG9ncmVldFQsXHJcbiAgICBwYXRoU3ViVHlwZTogQ09OU1QudXJsLnRtVHlwZXMuYXV0b2dyZWV0U3ViVFswXVxyXG59O1xyXG5cclxuZnVuY3Rpb24gb25TdWJtaXRIYW5kbGVyKGUpIHtcclxuICAgIGNvbnN0IGZpZWxkcyA9ICQoJy5jaGF0LWJvdC10ZXh0LWZpZWxkcycpO1xyXG4gICAgY29uc3Qga2V5V29yZHMgPSAkZWwgPT4gJGVsLnZhbCgpXHJcbiAgICAgICAgLnRyaW0oKVxyXG4gICAgICAgIC5yZXBsYWNlKC8gL2csICcnKVxyXG4gICAgICAgIC5zcGxpdCgnLCcpXHJcbiAgICAgICAgLmZpbHRlcihpID0+IGkubGVuZ3RoID4gMCk7XHJcbiAgICBjb25zdCByZXFCb2R5ID0gW107XHJcbiAgICBmaWVsZHMuZWFjaCgoaWR4LCBpdGVtKSA9PiB7XHJcbiAgICAgICAgY29uc3Qga2V5V29yZCA9IGtleVdvcmRzKCQoaXRlbSkuZmluZCgndGV4dGFyZWEuY2hhdC13b3JkcycpKTtcclxuICAgICAgICBjb25zdCBhbnN3ZXIgPSAkKGl0ZW0pLmZpbmQoJ3RleHRhcmVhLmNoYXQtbWVzc2FnZXMnKS52YWwoKTtcclxuICAgICAgICByZXFCb2R5LnB1c2goeydrZXlfd29yZHMnOiBrZXlXb3JkLCBhbnN3ZXJ9KTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgblJlcUJvZHkgPSB7XHJcbiAgICAgICAgJ3VzZXJuYW1lJzogdXNlcm5hbWVTZWxlY3RlZCxcclxuICAgICAgICAndHlwZSc6IENPTlNULnVybC50bVR5cGVzLmNoYXRCb3RULCAvLyAnQ0hBVF9CT1QnLFxyXG4gICAgICAgICdzdWJ0eXBlJzogQ09OU1QudXJsLnRtVHlwZXMuY2hhdEJvdFN1YlRbMF0sIC8vICdERUZBVUxUX0NIQVRfQk9UJyxcclxuICAgICAgICAndXNlcl9kZWZhdWx0X2NvbmZpZyc6IHt9LFxyXG4gICAgICAgICd1c2VyX2N1c3RvbV9jb25maWcnOiB7XHJcbiAgICAgICAgICAgICd0ZXh0X2Zvcm1zJzogcmVxQm9keVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc29sZS5sb2coJ21ha2UgcmVxdWVzdCBoZXJlKionLCBuUmVxQm9keSk7XHJcbiAgICBmdW5jdGlvbiBjYkVycm9yKHJlcykge1xyXG4gICAgICAgIGNvbnN0IG1zZyA9IHJlcy5zdGF0dXMubWVzc2FnZTtcclxuICAgICAgICAkKCcuZm9ybS1zdWJtaXQtZmluaXNoLS1lcnJvcicpLmFkZENsYXNzKCdkLWJsb2NrJylcclxuICAgICAgICAuZmluZCgnLmFsZXJ0JykuYXBwZW5kKGA8cD4ke21zZ308L3A+YCk7XHJcbiAgICB9XHJcbiAgICBVc2VyVGFza01hbmFnZXIucG9zdFN0YXJ0Q2hhdEJvdChuUmVxQm9keSwgY2JFcnJvcikudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Bvc3RCb3QnKTtcclxuICAgICAgICBpZiAocmVzdWx0LnN0YXR1cy5zdGF0ZSA9PT0gJ29rJykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcclxuICAgICAgICAgICAgJCgnLmZvcm0tc3VibWl0LWZpbmlzaCcpLmFkZENsYXNzKCdkLWJsb2NrJylcclxuICAgICAgICAgICAgICAgIC5maW5kKCcuYWxlcnQnKS5hcHBlbmQoYDxwPnRhc2tfaWQ6ICR7cmVzdWx0LmRhdGEudGFza19pZH08L3A+YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbGxMaXN0VXNlcnMoJHdyYXBwZXIsIGRhdGEpIHtcclxuICAgICR3cmFwcGVyLmVtcHR5KCkuYWRkQ2xhc3MoJ2JvcmRlci1saWdodC1jb2xvcicpO1xyXG4gICAgJChgPGRpdiBjbGFzcz1cIlwiPtCU0L7RgdGC0YPQv9C90YvQtSDQsNC60LrQsNGD0L3RgtGLPC9kaXY+PHNlbGVjdCBuYW1lPVwidGFzay10eXBlXCIgY2xhc3M9XCIke3NlbGVjdENsc31cIj48L3NlbGVjdD5gKS5hcHBlbmRUbygkd3JhcHBlcik7XHJcbiAgICBkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAkKGA8b3B0aW9uIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIHB5LTJcIiB2YWx1ZT1cIiR7aXRlbS51c2VybmFtZX1cIj5cclxuICAgICAgICAgICAgJHtpdGVtLnVzZXJuYW1lfVxyXG4gICAgICAgIDwvb3B0aW9uPmApLmFwcGVuZFRvKCQoYC4ke3NlbGVjdENsc31gKSk7XHJcbiAgICB9KTtcclxuICAgICQoYC4ke3NlbGVjdENsc31gKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHVzZXJuYW1lU2VsZWN0ZWQgPSAkKGAuJHtzZWxlY3RDbHN9IG9wdGlvbjpzZWxlY3RlZGApLnZhbCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJuYW1lU2VsZWN0ZWQpO1xyXG4gICAgICAgIGNoYXRCb3RMb2dzLmluaXQoc2VsZWN0Q2xzLCBjbHNDb25zdCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEluaXQgaGVhZGVyXHJcbiAqL1xyXG5mdW5jdGlvbiBpbml0Q2hhdE1zZygpIHtcclxuICAgIGNvbnN0IHRwbFRleHRGaWVsZCA9ICgpID0+ICQoYDxkaXYgY2xhc3M9XCJjaGF0LWJvdC10ZXh0LWZpZWxkcyBtdC0yXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWNvbnRyb2wgY2hhdC13b3Jkc1wiIHJvd3M9XCI0XCIgcGxhY2Vob2xkZXI9XCLQktCy0LXQtNC40YLQtSDQutC70Y7Rh9C10LLRi9C1INGB0LvQvtCy0LAg0LjQu9C4INGE0YDQsNC30Ysg0YfQtdGA0LXQtyDQt9Cw0L/Rj9GC0YPRjiwg0L/RgNC4INC60L7RgtC+0YDRi9GFINCx0YPQtNC10YIg0YHRgNCw0LHQsNGC0YvQstCw0YLRjCDRh9Cw0YIt0LHQvtGCXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImZvcm0tY29udHJvbCBjaGF0LW1lc3NhZ2VzXCIgcm93cz1cIjRcIiBwbGFjZWhvbGRlcj1cItCS0LLQtdC00LjRgtC1INGB0L7QvtCx0YnQtdC90LjQtSwg0LrQvtGC0L7RgNC+0LUg0LHRg9C00LXRgiDQvtGC0L/RgNCw0LLQu9GP0YLRjNGB0Y8sINC10YHQu9C4INC/0YDQuNGB0YPRgtGB0YLQstC+0LLQsNC70Lgg0LrQu9GO0Ycu0YHQu9C+0LLQsCDQuNC70Lgg0YTRgNCw0LfRiyDQuNC3INGB0YLQvtC70LHRhtCwINGB0LvQtdCy0LBcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PmApO1xyXG5cclxuICAgICQoJy5qc19hZGQtY2hhdC1ib3QnKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxhc3RUZXh0RmllbGQgPSAkKCcuY2hhdC1ib3QtdGV4dC1maWVsZHMnKS5sYXN0KCk7XHJcbiAgICAgICAgdHBsVGV4dEZpZWxkKCkuaW5zZXJ0QWZ0ZXIobGFzdFRleHRGaWVsZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBhbGVydCBjbG9zZVxyXG4gICAgJCgnLmZvcm0tc3VibWl0LWZpbmlzaCAuY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FsZXJ0IGNsb3NlJyk7XHJcbiAgICAgICAgJCgnI3YtcGlsbHMtcnVubmVkLXRhYicpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgd2luZG93LlB1YlN1Yi5wdWJsaXNoKENPTlNULmV2ZW50cy50YXNrcy5ORVdfVEFTS19DUkVBVEVEKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGFsZXJ0IGNsb3NlXHJcbiAgICAkKCcuZm9ybS1zdWJtaXQtZmluaXNoLS1lcnJvciAuY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FsZXJ0IGNsb3NlJyk7XHJcbiAgICAgICAgJCgnI3YtcGlsbHMtcnVubmVkLXRhYicpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgd2luZG93LlB1YlN1Yi5wdWJsaXNoKENPTlNULmV2ZW50cy50YXNrcy5ORVdfVEFTS19DUkVBVEVEKTtcclxuICAgIH0pO1xyXG4gICAgJCgnI3YtcGlsbHMtbG9ncy10YWInKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIC8vIGF0IHRoaXMgcG9pbnQgb2YgdGltZSBzZXRJbnRlcnZhbCBpcyB3b3JraW5nXHJcbiAgICAgICAgY29uc3QgJHdyYXBwZXIgPSAkKCcubG9nLXVzZXJzLWxpc3QnKTtcclxuICAgICAgICBmaWxsTGlzdFVzZXJzKCR3cmFwcGVyLCB1c2VyTGlzdEluc3RhZ3JhbSk7XHJcbiAgICAgICAgY2hhdEJvdExvZ3MuaW5pdChzZWxlY3RDbHMsIGNsc0NvbnN0KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRVc2VyTmFtZShzdGF0ZSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2dldFRhc2tzRGF0YScsIHN0YXRlLnVzZXJuYW1lKTtcclxuICAgIHVzZXJuYW1lU2VsZWN0ZWQgPSBzdGF0ZS51c2VybmFtZTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RlcFJlZHVjZXIoc3RlcE51bWJlciwgc3RhdGUpIHtcclxuICAgIHN3aXRjaCAoc3RlcE51bWJlcikge1xyXG4gICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgc2V0VXNlck5hbWUoc3RhdGUpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzdGF0ZSwgc3RlcE51bWJlcik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZWZhdWx0Jywgc3RlcE51bWJlcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgaWYgKCQoJy5jaGF0LWJvdC1wYWdlJykubGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3Qgd2l6YXJkQ2ZnID0ge1xyXG4gICAgICAgICAgICBzdGVwUmVkdWNlcixcclxuICAgICAgICAgICAgb25TdWJtaXRIYW5kbGVyXHJcbiAgICAgICAgfTtcclxuICAgICAgICB3aXphcmRGb3JtLmluaXQod2l6YXJkQ2ZnKTtcclxuICAgICAgICBpbml0Q2hhdE1zZygpO1xyXG4gICAgICAgIHdpbmRvdy5QdWJTdWIuc3Vic2NyaWJlKENPTlNULmV2ZW50cy5pbnN0YWdyYW1BY2NvdW5zLklOU1RBR1JBTV9BQ0NPVU5TX1JFTkRFUkVELCAoZSwgZGF0YU9iaikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSU5TVEFHUkFNX0FDQ09VTlNfUkVOREVSRUQnLCBkYXRhT2JqKTtcclxuICAgICAgICAgICAgdXNlckxpc3RJbnN0YWdyYW0gPSBkYXRhT2JqLmRhdGFBcnJheTtcclxuICAgICAgICAgICAgY2hhdEJvdFN0YXR1cy5pbml0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9jaGF0LWJvdC1ibG9jay9jaGF0LWJvdC1ibG9jay5qcyIsImltcG9ydCB7Q09OU1R9IGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMnO1xyXG5pbXBvcnQge2dldFRhc2tzRGF0YX0gZnJvbSAnLi4vZm9sbG93L2ZvbGxvdy1zdGF0dXMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBpZiAoJCgnLmNoYXQtYm90LXBhZ2UnKS5sZW5ndGgpIHtcclxuICAgICAgICBjb25zdCBwYXRoID0ge1xyXG4gICAgICAgICAgICB0eXBlOiBDT05TVC51cmwudG1UeXBlcy5jaGF0Qm90VCxcclxuICAgICAgICAgICAgc3VidHlwZTogQ09OU1QudXJsLnRtVHlwZXMuY2hhdEJvdFN1YlRbMF1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHdyYXBwZXJzID0ge1xyXG4gICAgICAgICAgICAkcnVuczogJCgnLnRhc2tzLXJ1bnMnKSxcclxuICAgICAgICAgICAgJHN0b3BwZWQ6ICQoJy50YXNrcy1zdG9wcGVkJylcclxuICAgICAgICB9O1xyXG4gICAgICAgIGdldFRhc2tzRGF0YSh3cmFwcGVycywgcGF0aCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocGF0aCk7XHJcbiAgICAgICAgd2luZG93LlB1YlN1Yi5zdWJzY3JpYmUoQ09OU1QuZXZlbnRzLmluc3RhZ3JhbUFjY291bnMuSU5TVEFHUkFNX0FDQ09VTlNfUkVOREVSRUQsIChldmVudE5hbWUsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgZ2V0VGFza3NEYXRhKHdyYXBwZXJzLCBwYXRoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJyoqY2hhdC1ib3Qtc3RhdHVzJywgZXZlbnROYW1lLCBkYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB3aW5kb3cuUHViU3ViLnN1YnNjcmliZShDT05TVC5ldmVudHMudGFza3MuTkVXX1RBU0tfQ1JFQVRFRCwgKGV2ZW50TmFtZSwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBnZXRUYXNrc0RhdGEod3JhcHBlcnMsIHBhdGgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL2NoYXQtYm90LWJsb2NrL2NoYXQtYm90LXN0YXR1cy5qcyIsIi8qIGVzbGludC1kaXNhYmxlIHNvcnQtdmFycyAqL1xyXG4vLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdXNlcic7XHJcbmltcG9ydCB7Q09OU1R9IGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMnO1xyXG5pbXBvcnQgY29va2llU3RvcmFnZSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29va2llJztcclxuXHJcbmNvbnN0IHBhcnNlUXVlcnlTdHJpbmcgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICBjb25zdCBzdHIgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xyXG4gICAgY29uc3Qgb2JqVVJMID0ge307XHJcblxyXG4gICAgc3RyLnJlcGxhY2UoXHJcbiAgICAgIG5ldyBSZWdFeHAoJyhbXj89Jl0rKSg9KFteJl0qKSk/JywgJ2cnKSxcclxuICAgICAgICBmdW5jdGlvbigkMCwgJDEsICQyKSB7XHJcbiAgICAgICAgICAgIG9ialVSTFskMV0gPSAkMjtcclxuICAgICAgICB9XHJcbiAgKTtcclxuICAgIHJldHVybiBvYmpVUkw7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29uZmlybWF0aW9uV2l0aFJlZGlyZWN0KCkge1xyXG4gICAgY29uc3QgdXNlciA9IFVzZXI7XHJcbiAgICBjb25zdCBwYXJhbXMgPSBwYXJzZVF1ZXJ5U3RyaW5nKCk7XHJcbiAgICAvLyBFeGFtcGxlIGhvdyB0byB1c2UgaXQ6XHJcblxyXG4gICAgY29uc3Qgc2VuZENvbmZpcm0gPSBmdW5jdGlvbiAodG9rZW4pIHtcclxuICAgICAgICB1c2VyLmNvbmZpcm0odG9rZW4pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyAmJiByZXN1bHQuc3RhdHVzLnN0YXRlID09PSAnb2snKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gc2F2ZSB0aGUgaXRlbVxyXG4gICAgICAgICAgICAgICAgY29va2llU3RvcmFnZS5zZXQoQ09OU1QuY29va2llU3RvcmFnZS5lbWFpbENvbmZpcm1lZCwgJ2NvbmZpcm1lZCcpO1xyXG4gICAgICAgICAgICAgICAgY29va2llU3RvcmFnZS5zZXQoQ09OU1QuY29va2llU3RvcmFnZS50b2tlbiwgcmVzdWx0LmRhdGEudG9rZW4pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbiA9IGNvbmZpcm0tcmVnaXN0cmF0aW9uLmh0bWw/dG9rZW49J2Zyb20gc2VydmVyJztcclxuXHJcbiAgICAgICAgICAgICAgICAvLyByZXRyaWV2ZSB0aGUgb2JqZWN0IGluIGEgc3RyaW5nIGZvcm1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1c3RvbWVyc0RhdGFTdHJpbmcgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdjdXN0b21lcnNEYXRhJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjdXN0b21lcnNEYXRhU3RyaW5nKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXF1ZXN0IHN1Y2NlZWRlZCB3aXRoIEpTT04gcmVzcG9uc2UnLCByZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgJCgnLmNvbmZpcm0tcmVnaXN0cmF0aW9uJykuYXBwZW5kKGA8cD5jb25maXJtYXRpb24gc3RhdHVzOiAke3Jlc3VsdC5zdGF0dXMuc3RhdGV9PC9wPmApO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gJy4vcHJvZmlsZS5odG1sJztcclxuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlZGlyZWN0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRvdC1ub3RhdGlvblxyXG4gICAgICAgIGNvbnN0IHRva2VuID0gcGFyYW1zWyd0b2tlbiddO1xyXG5cclxuICAgICAgICBpZiAoIWxvY2F0aW9uLnBhdGhuYW1lLmluZGV4T2YoJ2NvbmZpcm0tcmVnaXN0cmF0aW9uJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NlbmQgcmVxIHRvICcsIHRva2VuKTtcclxuICAgICAgICAgICAgc2VuZENvbmZpcm0odG9rZW4pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgICAgICByZWRpcmVjdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5pdFxyXG4gICAgfTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL2NvbmZpcm0tcmVnL2NvbmZpcm0tcmVnLmpzIiwiaW1wb3J0ICogYXMgZm9sbG93U3RhdHVzIGZyb20gJy4vZm9sbG93LXN0YXR1cyc7XHJcbmltcG9ydCB7Q09OU1R9IGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMnO1xyXG5pbXBvcnQgVXNlclRhc2tNYW5hZ2VyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9hcGktdGFzay1tYW5hZ2VyJztcclxuaW1wb3J0ICdicnV0dXNpbi1qc29uLWZvcm1zJztcclxuXHJcbmNvbnN0IHN0YXRlID0ge1xyXG4gICAgdXNlcm5hbWU6ICcnLFxyXG4gICAgdXNlcl9kZWZhdWx0X2NvbmZpZzoge1xyXG4gICAgICAgIHRhc2tfbW9kZTogJ1NBRkUnXHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBmaWxsTGlzdE1ldGEoJGxpc3QsIGRhdGFBcnJheSkge1xyXG4gICAgY29uc3QgaXRlbXMgPSBkYXRhQXJyYXk7XHJcbiAgICAvLyBjb25zdCBkZWZhdWx0QXZhdGFyU3JjID0gJ2h0dHBzOi8vaS5pbWd1ci5jb20vak5OVDRMRS5wbmcnO1xyXG4gICAgJGxpc3QuZW1wdHkoKS5hZGRDbGFzcygnYm9yZGVyLWxpZ2h0LWNvbG9yJyk7XHJcbiAgICAkKCc8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gcHktMlwiPjxoMz5Vc2VyVGFza01hbmFnZXI8L2gzPjwvbGk+JykuYXBwZW5kVG8oJGxpc3QpO1xyXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnN0IGluZm8gPSBpdGVtLmluZm87XHJcbiAgICAgICAgLy8gY29uc3QgY2hlY2twb2ludCA9IGl0ZW0uY2hlY2twb2ludCB8fCBpdGVtO1xyXG4gICAgICAgICQoYDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBweS0yXCIgZGF0YS11c2VybmFtZT1cIiR7aXRlbS50eXBlfVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWJvZHkgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB0YXNrLXR5cGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHsoaXRlbS50YXNrX2lkKSA/IGA8cCBjbGFzcz1cIm10LTAgbWItMSBuYW1lXCI+JHtpdGVtLnRhc2tfaWR9PC9wPmAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHRhc2stc3VidHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkeyhpdGVtLnN1YnR5cGUpID8gYDxwIGNsYXNzPVwibXQtMCBtYi0xIG5hbWVcIj4ke2l0ZW0uc3VidHlwZX08L3A+YCA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgdGFzay1wcm9ncmVzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkeyhpdGVtLnN0YXR1cy5zdGF0ZSA9PT0gJ1NUT1BQRUQnKSA/IGA8cCBjbGFzcz1cIm10LTAgbWItMSBuYW1lXCI+0J7RgdGC0LDQvdC+0LLQu9C10L3QviAtICR7aXRlbS5zdGF0dXMucmVhc29ufTwvcD5gIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJjb2wgdGFzay1wcm9ncmVzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkeyhpdGVtLnByb2dyZXNzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBgPHAgY2xhc3M9XCJtdC0wIG1iLTEgbmFtZVwiPtCa0L7Qu9C40YfQtdGB0YLQstC+IC0gJHtpdGVtLnByb2dyZXNzLmNvdW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm10LTAgbWItMSBuYW1lXCI+0J/RgNC+0YbQtdC90YIgLSAke2l0ZW0ucHJvZ3Jlc3MucGVyY2VudH08L3A+YCA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+YCkuYXBwZW5kVG8oJGxpc3QpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qXHJcbmZ1bmN0aW9uIGZpbGxMaXN0VHlwZXMoJHdyYXBwZXIsIGRhdGEpIHtcclxuICAgIGNvbnN0IHN0cnVjdHVyZU9iaiA9IGRhdGFbJ3N0cnVjdHVyZSddO1xyXG5cclxuICAgICR3cmFwcGVyLmVtcHR5KCkuYWRkQ2xhc3MoJ2JvcmRlci1saWdodC1jb2xvcicpO1xyXG4gICAgJCgnPGRpdiBjbGFzcz1cIlwiPtCi0LjQvyDQt9Cw0LTQsNC90LjRjzwvZGl2PjxzZWxlY3QgbmFtZT1cInRhc2stdHlwZVwiIGlkPVwidGFzay10eXBlc1wiPjwvc2VsZWN0PicpLmFwcGVuZFRvKCR3cmFwcGVyKTtcclxuICAgIGZvciAoY29uc3QgdHlwZSBpbiBzdHJ1Y3R1cmVPYmopIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnc3RydWN0dXJlOiAnICsgaXRlbSk7XHJcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzdHJ1Y3R1cmVPYmosIHR5cGUpKSB7XHJcbiAgICAgICAgICAgICQoYDxvcHRpb24gY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gcHktMlwiICR7KHR5cGUgIT09ICdGT0xMT1dJTkcnKSA/ICdkaXNhYmxlZD1cImRpc2FibGVkXCInIDogJyd9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IFwiJHtKU09OLnN0cmluZ2lmeSh7dHlwZSwgc3VidHlwZTogc3RydWN0dXJlT2JqW3R5cGVdfSl9XCI+XHJcbiAgICAgICAgICAgICAgICAke3R5cGV9XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPmApLmFwcGVuZFRvKCQoJyN0YXNrLXR5cGVzJykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4qL1xyXG5cclxuZnVuY3Rpb24gZ2V0VGFza3NEYXRhKHBhdGgpIHtcclxuICAgIFVzZXJUYXNrTWFuYWdlci5nZXRNZXRhZGF0YShwYXRoKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0LnN0YXR1cy5zdGF0ZSA9PT0gJ29rJykge1xyXG4gICAgICAgICAgICBmaWxsTGlzdE1ldGEoJCgnLmZvbGxvdy10YXNrcy1saXN0JyksIHJlc3VsdC5kYXRhLm1ldGEpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXREYXRhU3RlcDIodXNlcnNOYW1lKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh1c2Vyc05hbWUpO1xyXG4gICAgY29uc3QgcGF0aCA9IHtcclxuICAgICAgICB0eXBlOiBDT05TVC51cmwudG1UeXBlcy5mb2xsb3dpbmdULFxyXG4gICAgICAgIHN1YnR5cGU6IENPTlNULnVybC50bVR5cGVzLmZvbGxvd2luZ1N1YlRbMF1cclxuICAgIH07XHJcbiAgICBnZXRUYXNrc0RhdGEocGF0aCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldERhdGFTdGVwU3BlZWQoKSB7XHJcbiAgICBjb25zdCB1c2VycyA9ICQoJyNmb2xsb3dlcnMnKS52YWwoKVxyXG4gICAgICAgIC50cmltKClcclxuICAgICAgICAucmVwbGFjZSgvIC9nLCAnJylcclxuICAgICAgICAuc3BsaXQoJywnKVxyXG4gICAgICAgIC5maWx0ZXIoaSA9PiBpLmxlbmd0aCA+IDApO1xyXG5cclxuICAgIHN0YXRlWyd1c2VyX2N1c3RvbV9jb25maWcnXSA9IHtcclxuICAgICAgICB1c2Vyc1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGZpbGxTcGVlZExpc3QgPSBmdW5jdGlvbiAoJHdyYXBwZXIsIGRhdGEpIHtcclxuICAgICAgICBjb25zdCB0YXNrTW9kZXMgPSBkYXRhLmNmZyAmJiBkYXRhLmNmZy50YXNrX21vZGVzO1xyXG4gICAgICAgIGNvbnN0IHJhZGlvQnRuUmVkdWNlciA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnQUdHUkVTU0lWRSc6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCIke2l0ZW19XCIgbmFtZT1cImN1c3RvbVJhZGlvXCIgdmFsdWU9XCJzYWZlXCIgY2xhc3M9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImN1c3RvbS1jb250cm9sLWxhYmVsXCIgZm9yPVwiJHtpdGVtfVwiPjxzdHJvbmc+0JDQs9GA0LXRgdGB0LjQstC90YvQuTo8L3N0cm9uZz4gMzAg0L/QvtC00L/QuNGB0L7QuiDQsiDRh9Cw0YE8L2xhYmVsPmA7XHJcbiAgICAgICAgICAgICAgICAvLyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ01JRERMRSc6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwiJHtpdGVtfVwiIG5hbWU9XCJjdXN0b21SYWRpb1wiIHZhbHVlPVwic2FmZVwiIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjdXN0b20tY29udHJvbC1sYWJlbFwiIGZvcj1cIiR7aXRlbX1cIj48c3Ryb25nPtCh0YDQtdC00L3QuNC5Ojwvc3Ryb25nPiAxOCDQv9C+0LTQv9C40YHQvtC6INCyINGH0LDRgTwvbGFiZWw+YCk7XHJcbiAgICAgICAgICAgICAgICAvLyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ1NBRkUnOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwiJHtpdGVtfVwiIG5hbWU9XCJjdXN0b21SYWRpb1wiIHZhbHVlPVwic2FmZVwiIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIiBjaGVja2VkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImN1c3RvbS1jb250cm9sLWxhYmVsXCIgZm9yPVwiJHtpdGVtfVwiPjxzdHJvbmc+0JHQtdC30L7Qv9Cw0YHQvdGL0Lk6PC9zdHJvbmc+IDkg0L/QvtC00L/QuNGB0L7QuiDQsiDRh9Cw0YE8L2xhYmVsPmA7XHJcbiAgICAgICAgICAgICAgICAvLyBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RlZmF1bHQnLCBpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2RyYXcgc3BlZWQgcmFkaW9CdG4nKTtcclxuICAgICAgICAkd3JhcHBlci5lbXB0eSgpO1xyXG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBpbiB0YXNrTW9kZXMpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3N0cnVjdHVyZTogJyArIGl0ZW0pO1xyXG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhc2tNb2RlcywgaXRlbSkpIHtcclxuICAgICAgICAgICAgICAgICQoYDxkaXYgY2xhc3M9XCJjdXN0b20tY29udHJvbCBjdXN0b20tcmFkaW9cIj5cclxuICAgICAgICAgICAgICAgICR7cmFkaW9CdG5SZWR1Y2VyKGl0ZW0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5gKS5hcHBlbmRUbygkd3JhcHBlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcGF0aCA9IHtcclxuICAgICAgICB0eXBlOiAnRk9MTE9XSU5HJyxcclxuICAgICAgICBzdWJ0eXBlOiAnRk9MTE9XSU5HX0xJU1QnXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGRyYXcgY3JpdGVyaWFcclxuICAgIFVzZXJUYXNrTWFuYWdlci5nZXREZWZhdWx0Q29uZmlncyhwYXRoKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZ2V0RGVmYXVsdENvbmZpZ3MnKTtcclxuICAgICAgICBpZiAocmVzdWx0LnN0YXR1cy5zdGF0ZSA9PT0gJ29rJykge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICBmaWxsU3BlZWRMaXN0KCQoJy5qc19mb2xsb3ctc3BlZWQnKSwgcmVzdWx0LmRhdGEuZm91bmQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdGVwUmVkdWNlcihzdGVwTnVtYmVyKSB7XHJcbiAgICBzd2l0Y2ggKHN0ZXBOdW1iZXIpIHtcclxuICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgIGdldERhdGFTdGVwMihzdGF0ZS51c2VybmFtZSk7IC8vIFsuLi5uZXcgU2V0KHN0YXRlLnVzZXJuYW1lKV1cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc3RhdGUpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgIGdldERhdGFTdGVwU3BlZWQoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RlZmF1bHQnLCBzdGVwTnVtYmVyKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEluaXQgaGVhZGVyXHJcbiAqL1xyXG5mdW5jdGlvbiBpbml0U3RlcHMoZm9ybVNlbGVjdG9yKSB7XHJcbiAgICBjb25zdCAkZm9ybSA9ICQoZm9ybVNlbGVjdG9yKTtcclxuICAgICQoJy5qc19wcm9maWxlLXVzZXItZm9sbG93Pi5jb250YWluZXInKS5yZW1vdmVDbGFzcygnY29udGFpbmVyJyk7XHJcblxyXG4gICAgJGZvcm0uZmluZCgnZmllbGRzZXQ6Zmlyc3QtY2hpbGQnKS5mYWRlSW4oJ3Nsb3cnKTtcclxuXHJcbiAgICAkZm9ybS5maW5kKCdpbnB1dFt0eXBlPVwidGV4dFwiXScpLm9uKCdmb2N1cycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdpbnB1dC1lcnJvcicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbmV4dCBzdGVwXHJcbiAgICAkZm9ybS5maW5kKCcuYnRuLW5leHQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgcGFyZW50X2ZpZWxkc2V0ID0gJCh0aGlzKS5wYXJlbnRzKCdmaWVsZHNldCcpO1xyXG4gICAgICAgIGxldCBuZXh0X3N0ZXAgPSB0cnVlO1xyXG4gICAgICAgIGNvbnN0IHJhZGlvQnRuQWN0aXZlID0gcGFyZW50X2ZpZWxkc2V0LmZpbmQoJ2lucHV0W25hbWU9XCJ1c2VyQWNjb3VudFJhZGlvXCJdOmNoZWNrZWQnKTtcclxuXHJcbiAgICAgICAgaWYgKHJhZGlvQnRuQWN0aXZlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgc3RhdGUudXNlcm5hbWUgPSByYWRpb0J0bkFjdGl2ZS5wYXJlbnRzKCdsaScpLmRhdGEoJ3VzZXJuYW1lJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0ZXBSZWR1Y2VyKHBhcmVudF9maWVsZHNldC5pbmRleCgpLCBzdGF0ZSk7XHJcblxyXG4gICAgICAgIHBhcmVudF9maWVsZHNldC5maW5kKCdpbnB1dFt0eXBlPVwidGV4dFwiXSxpbnB1dFt0eXBlPVwiZW1haWxcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCQodGhpcykudmFsKCkgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdpbnB1dC1lcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgbmV4dF9zdGVwID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdpbnB1dC1lcnJvcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChuZXh0X3N0ZXApIHtcclxuICAgICAgICAgICAgcGFyZW50X2ZpZWxkc2V0LmZhZGVPdXQoNDAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLm5leHQoKS5mYWRlSW4oKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHByZXZpb3VzIHN0ZXBcclxuICAgICRmb3JtLmZpbmQoJy5idG4tcHJldmlvdXMnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gc3RhdGUudXNlcm5hbWUgPSBbLi4ubmV3IFNldChzdGF0ZS51c2VybmFtZSldO1xyXG4gICAgICAgICQodGhpcykucGFyZW50cygnZmllbGRzZXQnKS5mYWRlT3V0KDQwMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnByZXYoKS5mYWRlSW4oKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHNwZWVkIHJhZGlvLWJ0biBncm91cFxyXG4gICAgJCgnLmpzX2ZvbGxvdy1zcGVlZCBpbnB1dFt0eXBlPXJhZGlvXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9ICQodGhpcykuYXR0cigndmFsdWUnKTtcclxuICAgICAgICBzdGF0ZS51c2VyX2RlZmF1bHRfY29uZmlnID0ge1xyXG4gICAgICAgICAgICB0YXNrX21vZGU6IHZhbHVlLnRvVXBwZXJDYXNlKClcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gc3VibWl0XHJcbiAgICAkZm9ybS5vbignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBjb25zdCBnZW5kZXJWYWwgPSAkKHRoaXMpLmZpbmQoJy5zZWxlY3QtZ2VuZGVyIG9wdGlvbjpzZWxlY3RlZCcpLnZhbCgpO1xyXG4gICAgICAgIHN0YXRlLnVzZXJfZGVmYXVsdF9jb25maWcgPSB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLnVzZXJfZGVmYXVsdF9jb25maWcsXHJcbiAgICAgICAgICAgIGNyaXRlcmlhOiB7XHJcbiAgICAgICAgICAgICAgICBnZW5kZXI6IGdlbmRlclZhbC50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGxpbWl0ID0gZG9jdW1lbnQuZm9ybXNbJ2ZvbGxvdy1mb3JtJ11bJ2xpbWl0J107XHJcbiAgICAgICAgY29uc3QgaGF2ZV9wb3N0cyA9IHtcclxuICAgICAgICAgICAgZnJvbTogZG9jdW1lbnQuZm9ybXNbJ2ZvbGxvdy1mb3JtJ11bJ2hhdmVfcG9zdHNfZnJvbSddLnZhbHVlLFxyXG4gICAgICAgICAgICB0bzogZG9jdW1lbnQuZm9ybXNbJ2ZvbGxvdy1mb3JtJ11bJ2hhdmVfcG9zdHNfdG8nXS52YWx1ZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgaGF2ZV9mb2xsb3dlcnMgPSB7XHJcbiAgICAgICAgICAgIGZyb206IGRvY3VtZW50LmZvcm1zWydmb2xsb3ctZm9ybSddWydoYXZlX2ZvbGxvd2Vyc19mcm9tJ10udmFsdWUsXHJcbiAgICAgICAgICAgIHRvOiBkb2N1bWVudC5mb3Jtc1snZm9sbG93LWZvcm0nXVsnaGF2ZV9mb2xsb3dlcnNfdG8nXS52YWx1ZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgaGF2ZV9mb2xsb3dpbmdzID0ge1xyXG4gICAgICAgICAgICBmcm9tOiBkb2N1bWVudC5mb3Jtc1snZm9sbG93LWZvcm0nXVsnaGF2ZV9mb2xsb3dpbmdzX2Zyb20nXS52YWx1ZSxcclxuICAgICAgICAgICAgdG86IGRvY3VtZW50LmZvcm1zWydmb2xsb3ctZm9ybSddWydoYXZlX2ZvbGxvd2luZ3NfdG8nXS52YWx1ZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChsaW1pdC52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgbGltaXQuZm9jdXMoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdGF0ZVsndXNlcl9kZWZhdWx0X2NvbmZpZyddLmNyaXRlcmlhID0ge1xyXG4gICAgICAgICAgICBsaW1pdDogbGltaXQudmFsdWUsXHJcbiAgICAgICAgICAgICd1bmZvbGxvd190aGVuJzogISEkKCcjdW5mb2xsb3dfdGhlbjpjaGVja2VkJykubGVuZ3RoLFxyXG4gICAgICAgICAgICAnZm9sbG93X29uX2Nsb3NlZF9wcm9maWxlcyc6ICEhJCgnI2ZvbGxvd19vbl9jbG9zZWRfcHJvZmlsZXM6Y2hlY2tlZCcpLmxlbmd0aCxcclxuICAgICAgICAgICAgaGF2ZV9wb3N0cyxcclxuICAgICAgICAgICAgaGF2ZV9mb2xsb3dlcnMsXHJcbiAgICAgICAgICAgIGhhdmVfZm9sbG93aW5nc1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgICQodGhpcykuZmluZCgnaW5wdXRbdHlwZT1cInRleHRcIl0saW5wdXRbdHlwZT1cIm51bWJlclwiXSxpbnB1dFt0eXBlPVwiZW1haWxcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCQodGhpcykudmFsKCkgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdpbnB1dC1lcnJvcicpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaW5wdXQtZXJyb3InKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzdGF0ZS50eXBlID0gQ09OU1QudXJsLnRtVHlwZXMuZm9sbG93aW5nVDsgLy8gJ0ZPTExPV0lORyc7XHJcbiAgICAgICAgc3RhdGUuc3VidHlwZSA9IENPTlNULnVybC50bVR5cGVzLmZvbGxvd2luZ1N1YlRbMF07IC8vICdGT0xMT1dJTkdfTElTVCc7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ21ha2UgcmVxdWVzdCoqICBwb3N0OiBTdGFydEZvbGxvd2luZ0xpc3QnLCBzdGF0ZSk7XHJcblxyXG4gICAgICAgIFVzZXJUYXNrTWFuYWdlci5wb3N0U3RhcnRGb2xsb3dpbmdMaXN0KHN0YXRlKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMuc3RhdGUgPT09ICdvaycpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xyXG4gICAgICAgICAgICAgICAgJCgnLmZvcm0tc3VibWl0LWZpbmlzaCcpLmFkZENsYXNzKCdkLWJsb2NrJylcclxuICAgICAgICAgICAgICAgICAgICAuZmluZCgnLmFsZXJ0JykuYXBwZW5kKGA8cD50YXNrX2lkOiAke3Jlc3VsdC5kYXRhLnRhc2tfaWR9PC9wPmApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gYWxlcnQgY2xvc2VcclxuICAgICQoJy5mb3JtLXN1Ym1pdC1maW5pc2ggLmNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vICQodGhpcykuY2xvc2VzdCgnZm9ybS1zdWJtaXQtZmluaXNoJykucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKTtcclxuICAgICAgICAkKCcjdi1waWxscy1ydW5uZWQtdGFiJykudHJpZ2dlcignY2xpY2snKTtcclxuICAgICAgICB3aW5kb3cuUHViU3ViLnB1Ymxpc2goQ09OU1QuZXZlbnRzLnRhc2tzLk5FV19UQVNLX0NSRUFURUQpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qXHJcbmZ1bmN0aW9uIGZpeFN0ZXBJbmRpY2F0b3Iobikge1xyXG4gICAgLy8gVGhpcyBmdW5jdGlvbiByZW1vdmVzIHRoZSBcImFjdGl2ZVwiIGNsYXNzIG9mIGFsbCBzdGVwcy4uLlxyXG4gICAgdmFyIGksIHggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic3RlcFwiKTtcclxuICAgIGZvciAoaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgeFtpXS5jbGFzc05hbWUgPSB4W2ldLmNsYXNzTmFtZS5yZXBsYWNlKFwiIGFjdGl2ZVwiLCBcIlwiKTtcclxuICAgIH1cclxuICAgIC8vLi4uIGFuZCBhZGRzIHRoZSBcImFjdGl2ZVwiIGNsYXNzIG9uIHRoZSBjdXJyZW50IHN0ZXA6XHJcbiAgICB4W25dLmNsYXNzTmFtZSArPSBcIiBhY3RpdmVcIjtcclxufSovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbW9kaWZ5QWNjTGlzdCgpIHtcclxuICAgIC8vIGNvbnN0IHJhZGlvQnRuID0gKGlkeCkgPT4gYDxkaXYgY2xhc3M9XCJjb2wgY3VzdG9tLWNvbnRyb2wgY3VzdG9tLXJhZGlvIGpzX3VzZXItcmFkaW9cIj5cclxuICAgIC8vICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ1c2VyQWNjb3VudFJhZGlvXCIgaWQ9XCJjdXN0b21SYWRpby0ke2lkeH1cIiBjbGFzcz1cImN1c3RvbS1jb250cm9sLWlucHV0XCIgdmFsdWU9XCJcIj5cclxuICAgIC8vICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIiBmb3I9XCJjdXN0b21SYWRpby0ke2lkeH1cIj7Qn9C+0LTQv9C40YHQsNGC0YzRgdGPPC9sYWJlbD5cclxuICAgIC8vICAgICA8L2Rpdj5gO1xyXG4gICAgY29uc3QgcmFkaW9CdG5BcHBlbmQgPSAoaWR4KSA9PiBgPGRpdiBjbGFzcz1cIlwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInVzZXJBY2NvdW50UmFkaW9cIiBpZD1cImN1c3RvbVJhZGlvLSR7aWR4fVwiIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXQgZC1ub25lXCIgdmFsdWU9XCJcIj5cclxuICAgICAgICA8L2Rpdj5gO1xyXG4gICAgY29uc3QgcmFkaW9CdG5XcmFwID0gKGlkeCkgPT4gYDxsYWJlbCBjbGFzcz1cImFjY291bnRzLWxpc3QtLWxhYmVsLXdyYXBwZXIgY29sIG1iLTAgbWVkaWEgcHktM1wiIGZvcj1cImN1c3RvbVJhZGlvLSR7aWR4fVwiPjwvbGFiZWw+YDtcclxuICAgIGNvbnN0ICRhY2NvdW50c0xpc3QgPSAkKCcuYWNjb3VudHMtbGlzdCcpO1xyXG4gICAgY29uc3QgJGxpID0gJGFjY291bnRzTGlzdC5maW5kKCdsaS5tZWRpYScpO1xyXG4gICAgJGxpLmFkZENsYXNzKCdqc191c2VyLXJhZGlvJykucmVtb3ZlQ2xhc3MoJ3B5LTMgbWVkaWEnKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8ICRsaS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIC8vICQoJGxpW2ldKS5hcHBlbmQocmFkaW9CdG4oaSkpO1xyXG4gICAgICAgICQoJGxpW2ldKS53cmFwSW5uZXIocmFkaW9CdG5XcmFwKGkpKS5hcHBlbmQocmFkaW9CdG5BcHBlbmQoaSkpO1xyXG4gICAgfVxyXG4gICAgLy8gVXNlclRhc2tNYW5hZ2VyLmdldFRhc2tUeXBlcygpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgLy8gICAgIGlmIChyZXN1bHQuc3RhdHVzLnN0YXRlID09PSAnb2snKSB7XHJcbiAgICAvLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAvLyAgICAgICAgIGZpbGxMaXN0VHlwZXMoJCgnLmpzX3Rhc2stdHlwZXMnKSwgcmVzdWx0LmRhdGEpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0pO1xyXG5cclxuICAgICQoJy5qc191c2VyLXJhZGlvJykub24oJ2NsaWNrJywgJ2lucHV0W3R5cGU9cmFkaW9dJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBjb25zdCAkcGFyZW50RmllbGRzZXQgPSAkKHRoaXMpLnBhcmVudHMoJ2ZpZWxkc2V0Jyk7XHJcbiAgICAgICAgJCgnbGkuYWN0aXZlJywgJHBhcmVudEZpZWxkc2V0KS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCdsaScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKCcuYnRuLW5leHQnLCAkcGFyZW50RmllbGRzZXQpLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLmNoZWNrYm94LWNlbGwnKS5vbignY2hhbmdlJywgKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygndmFsaWRhdGUnKTtcclxuICAgICAgICAvLyB1cGRhdGVTdGF0dXMoKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKiB3b3JraW5nIGRlbW8gOiBodHRwOi8vYnJ1dHVzaW4ub3JnL2pzb24tZm9ybXMvIzEzXHJcbmZ1bmN0aW9uIGZvcm1Gcm9tSnNvbigpIHtcclxuICAgIGNvbnN0IHNjaGVtYSA9IHtcclxuICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcclxuICAgICAgICBcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICBcInByb3AxXCI6IHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImludGVnZXJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcInByb3AyXCI6IHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImludGVnZXJcIixcclxuICAgICAgICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcInByb3AzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImludGVnZXJcIixcclxuICAgICAgICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcImNvbXBvc2l0ZTFcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXHJcbiAgICAgICAgICAgICAgICBcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmVzdGVkMVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJlcXVpcmVkXCI6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmVzdGVkMlwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJlcXVpcmVkXCI6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJyZXF1aXJlZFwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuZXN0ZWQxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuZXN0ZWQyXCJcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJjb21wb3NpdGUyXCI6IHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5lc3RlZDFcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXF1aXJlZFwiOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5lc3RlZDJcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXF1aXJlZFwiOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwicmVxdWlyZWRcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmVzdGVkMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmVzdGVkMlwiXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicmVxdWlyZWRcIjogW1xyXG4gICAgICAgICAgICBcInByb3AxXCIsXHJcbiAgICAgICAgICAgIFwicHJvcDJcIixcclxuICAgICAgICAgICAgXCJjb21wb3NpdGUxXCJcclxuICAgICAgICBdXHJcbiAgICB9O1xyXG4gICAgY29uc3QgQnJ1dHVzaW5Gb3JtcyA9IHdpbmRvdy5icnV0dXNpblsnanNvbi1mb3JtcyddO1xyXG4gICAgY29uc3QgYmYgPSBCcnV0dXNpbkZvcm1zLmNyZWF0ZShzY2hlbWEpO1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0xJyk7XHJcbiAgICBjb25zb2xlLmxvZyh3aW5kb3cuYnJ1dHVzaW4pO1xyXG4gICAgYmYucmVuZGVyKGNvbnRhaW5lciwgZGF0YSk7XHJcbn0qL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBpZiAoJCgnLmZvbGxvdycpLmxlbmd0aCkge1xyXG4gICAgICAgIGZvbGxvd1N0YXR1cy5pbml0KCk7XHJcbiAgICAgICAgaW5pdFN0ZXBzKCcuZm9sbG93LWZvcm0nKTtcclxuICAgICAgICB3aW5kb3cuUHViU3ViLnN1YnNjcmliZShDT05TVC5ldmVudHMuaW5zdGFncmFtQWNjb3Vucy5JTlNUQUdSQU1fQUNDT1VOU19SRU5ERVJFRCwgKGV2ZW50TmFtZSwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBtb2RpZnlBY2NMaXN0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9mb2xsb3cvZm9sbG93LmpzIiwiLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbi8vIGNvbnN0IGhhbWJ1cmdlckJ1dHRvbkNscyA9ICcjYXNpZGVfbW9iaWxlX19idXR0b24nO1xyXG4vLyBjb25zdCBoYW1idXJnZXJNZW51Q2xzID0gJy5hc2lkZS1idXJnZXItbWVudSc7XHJcbi8vIGNvbnN0IGhhbWJ1cmdlck1lbnVPcGVuZWRDbGFzcyA9ICdidXJnZXItbWVudS0tY2xvc2VkJztcclxuLy8gY29uc3QgaGFtYnVyZ2VyQnV0dG9uQ2xvc2VDbGFzcyA9ICdidXJnZXItbWVudV9fYnV0dG9uLS1jbG9zZSc7XHJcbmNvbnN0IHNlbGVjdG9yc0VsID0ge1xyXG4gICAgbGVmdE1lbnU6IHtcclxuICAgICAgICBoYW1idXJnZXJCdXR0b25DbHM6ICcjYXNpZGVfbW9iaWxlX19idXR0b24nLFxyXG4gICAgICAgIGhhbWJ1cmdlck1lbnVDbHM6ICcuYXNpZGUtYnVyZ2VyLW1lbnUnLFxyXG4gICAgICAgIGhhbWJ1cmdlck1lbnVPcGVuZWRDbGFzczogJ2J1cmdlci1tZW51LS1jbG9zZWQnLFxyXG4gICAgICAgIGhhbWJ1cmdlckJ1dHRvbkNsb3NlQ2xhc3M6ICdidXJnZXItbWVudV9fYnV0dG9uLS1jbG9zZSdcclxuICAgIH0sXHJcbiAgICByaWdodE1lbnU6IHtcclxuICAgICAgICBoYW1idXJnZXJCdXR0b25DbHM6ICcjaGVhZGVyX21vYmlsZV90b2dnbGVyJyxcclxuICAgICAgICBoYW1idXJnZXJNZW51Q2xzOiAnLnItc2lkZS1idXJnZXItbWVudScsXHJcbiAgICAgICAgaGFtYnVyZ2VyTWVudU9wZW5lZENsYXNzOiAnci1zaWRlLWJ1cmdlci1tZW51LS1vcGVuJyxcclxuICAgICAgICBoYW1idXJnZXJCdXR0b25DbG9zZUNsYXNzOiAnYnVyZ2VyLW1lbnUtcmlnaHRfX2J1dHRvbi0tY2xvc2UnXHJcbiAgICB9LFxyXG4gICAgc3ViSGVhZGVyOiB7XHJcbiAgICAgICAgaGFtYnVyZ2VyQnV0dG9uQ2xzOiAnI2hlYWRlcl9tb2JpbGVfdG9wYmFyX3RvZ2dsZXInLFxyXG4gICAgICAgIGhhbWJ1cmdlck1lbnVDbHM6ICcuc3ViLWhlYWRlcicsXHJcbiAgICAgICAgaGFtYnVyZ2VyTWVudU9wZW5lZENsYXNzOiAnc3ViLWhlYWRlci0tb3BlbicsXHJcbiAgICAgICAgaGFtYnVyZ2VyQnV0dG9uQ2xvc2VDbGFzczogJ3N1Yi1oZWFkZXItYnV0dG9uLS1jbG9zZSdcclxuICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBUb2dnbGUgaGFtYnVyZ2VyIG1lbnUgcG9wb3ZlclxyXG4gKi9cclxuZnVuY3Rpb24gdG9nZ2xlSGFtYnVyZ2VyTWVudShtZW51TmFtZSkge1xyXG4gICAgY29uc3Qge2hhbWJ1cmdlck1lbnVDbHMsIGhhbWJ1cmdlckJ1dHRvbkNscywgaGFtYnVyZ2VyQnV0dG9uQ2xvc2VDbGFzcywgaGFtYnVyZ2VyTWVudU9wZW5lZENsYXNzfSA9IHNlbGVjdG9yc0VsW21lbnVOYW1lXTtcclxuICAgICQoaGFtYnVyZ2VyQnV0dG9uQ2xzKS50b2dnbGVDbGFzcyhoYW1idXJnZXJCdXR0b25DbG9zZUNsYXNzKTtcclxuICAgICQoaGFtYnVyZ2VyTWVudUNscykudG9nZ2xlQ2xhc3MoaGFtYnVyZ2VyTWVudU9wZW5lZENsYXNzKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEluaXQgaGFtYnVyZ2VyIG1lbnVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgY29uc3QgbGVmdE1lbnUgPSAnbGVmdE1lbnUnO1xyXG4gICAgY29uc3QgcmlnaHRNZW51ID0gJ3JpZ2h0TWVudSc7XHJcbiAgICBjb25zdCBzdWJIZWFkZXIgPSAnc3ViSGVhZGVyJztcclxuXHJcbiAgICAkKHNlbGVjdG9yc0VsW2xlZnRNZW51XS5oYW1idXJnZXJCdXR0b25DbHMpLm9uKCdjbGljaycsIHRvZ2dsZUhhbWJ1cmdlck1lbnUuYmluZCh0aGlzLCBsZWZ0TWVudSkpO1xyXG4gICAgJChzZWxlY3RvcnNFbFtyaWdodE1lbnVdLmhhbWJ1cmdlckJ1dHRvbkNscykub24oJ2NsaWNrJywgdG9nZ2xlSGFtYnVyZ2VyTWVudS5iaW5kKHRoaXMsIHJpZ2h0TWVudSkpO1xyXG4gICAgJChzZWxlY3RvcnNFbFtzdWJIZWFkZXJdLmhhbWJ1cmdlckJ1dHRvbkNscykub24oJ2NsaWNrJywgdG9nZ2xlSGFtYnVyZ2VyTWVudS5iaW5kKHRoaXMsIHN1YkhlYWRlcikpO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3MvaGVhZGVyL2J1cmdlci1tZW51L2J1cmdlci1tZW51LmpzIiwiLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3VzZXInO1xyXG5pbXBvcnQgUHViU3ViIGZyb20gJ3B1YnN1Yi1qcyc7IC8vIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3B1YnN1Yi1qc1xyXG5pbXBvcnQge0NPTlNUfSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29uc3RzJztcclxuXHJcbmNvbnN0IHNlbGVjdG9yTG9naW5TdGF0ZSA9ICcuanNfbWVzc2FnZV9sb2dnZWQtLXRleHQnO1xyXG5jb25zdCBzZWxlY3RvckVtYWlsQ29uZmlybVN0YXRlID0gJy5qc19lbWFpbC1jb25maXJtLS10ZXh0JztcclxuY29uc3QgY2xvc2VDbGFzcyA9ICdkLW5vbmUnO1xyXG5jb25zdCBvcGVuZWRDbGFzcyA9ICdkLWJsb2NrJztcclxuXHJcbmZ1bmN0aW9uIGVtYWlsTm90Q29uZmlybWVkKCkge1xyXG4gICAgY29uc3QgJGVtYWlsbk1zZyA9ICQoc2VsZWN0b3JFbWFpbENvbmZpcm1TdGF0ZSk7XHJcbiAgICAkZW1haWxuTXNnLnRleHQoJyoqZW1haWxOb3RDb25maXJtZWQqKiBFbWFpbCDQvdC1INC/0L7QtNGC0LLQtdGA0LbQtNC10L0uJykuY3NzKCdjb2xvcicsICdsaWdodGNvcmFsJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uTG9naW5TdWJzY3JpYmUobXNnLCBkYXRhKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhtc2csIGRhdGEpO1xyXG4gICAgJChDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJOYXZMb2dpbkJ0bikuYWRkQ2xhc3MoY2xvc2VDbGFzcykucmVtb3ZlQ2xhc3Mob3BlbmVkQ2xhc3MpO1xyXG4gICAgJChDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJSZWdCdG4pLmFkZENsYXNzKGNsb3NlQ2xhc3MpLnJlbW92ZUNsYXNzKG9wZW5lZENsYXNzKTtcclxuICAgICQoQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyTG9naW5Cb3gpLmFkZENsYXNzKGNsb3NlQ2xhc3MpLnJlbW92ZUNsYXNzKG9wZW5lZENsYXNzKTtcclxuXHJcbiAgICAkKCcubmF2LWxpbmsuanNfbG9nT3V0JykuYWRkQ2xhc3Mob3BlbmVkQ2xhc3MpLnJlbW92ZUNsYXNzKGNsb3NlQ2xhc3MpOyAvLyBzaG93XHJcbiAgICBjb25zdCAkbG9naW5Nc2cgPSAkKHNlbGVjdG9yTG9naW5TdGF0ZSk7XHJcbiAgICAkbG9naW5Nc2cudGV4dCgnKipvbkxvZ2luU3Vic2NyaWJlKiog0LLRiyDQt9Cw0LvQvtCz0LjQvdC40LvQuNGB0Ywg0LIgTHV4Z3JhbSDRg9GB0L/QtdGI0L3QvicpLmNzcygnY29sb3InLCAnbGlnaHRibHVlJyk7XHJcbiAgICBjb25zdCBpc0VtYWlsQ29uZmlybWVkID0gVXNlci5pc0VtYWlsQ29uZmlybWVkKCk7XHJcbiAgICBpZiAoIWlzRW1haWxDb25maXJtZWQpIHtcclxuICAgICAgICBlbWFpbE5vdENvbmZpcm1lZCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93TG9nb3V0KCkge1xyXG4gICAgLy8gY2hlY2sgaXMgbG9nZ2VkXHJcbiAgICBjb25zdCBpc0xvZ2dlZCA9IFVzZXIuaXNMb2dnZWRJbigpO1xyXG4gICAgY29uc3QgaXNFbWFpbENvbmZpcm1lZCA9IFVzZXIuaXNFbWFpbENvbmZpcm1lZCgpO1xyXG4gICAgaWYgKCFpc0VtYWlsQ29uZmlybWVkKSB7XHJcbiAgICAgICAgZW1haWxOb3RDb25maXJtZWQoKTtcclxuICAgIH1cclxuICAgIGlmIChpc0xvZ2dlZCkge1xyXG4gICAgICAgICQoJy5uYXYtbGluay5qc19sb2dPdXQnKS5wYXJlbnQoKS5zaG93KCk7XHJcbiAgICAgICAgJCgnLmpzX2VtYWlsLWNvbmZpcm0tLXRleHQnKS50ZXh0KCfQstGLINC30LDQu9C+0LPQuNC90LjQu9C40YHRjCDRg9GB0L/QtdGI0L3QvicpO1xyXG4gICAgICAgIGNvbnN0IG9sZFVSTCA9IGRvY3VtZW50LnJlZmVycmVyO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG9sZFVSTCk7XHJcbiAgICAgICAgaWYgKG9sZFVSTC5pbmNsdWRlcygnY29uZmlybS1yZWdpc3RyYXRpb24nKSkge1xyXG4gICAgICAgICAgICAkKCcuanNfbWVzc2FnZV9sb2dnZWQtLXRleHQnKS50ZXh0KCfQstGLINC/0L7QtNGC0LLQtdGA0LTQuNC70Lgg0YDQtdCz0LjRgdGC0YDQsNGG0LjRjicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvbkxvZ2luU3Vic2NyaWJlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoc2VsZWN0b3JMb2dpblN0YXRlKS50ZXh0KCfQn9GA0LjQstC10YIg0LDQvdC+0L3QuNC80L3Ri9C5INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCcpO1xyXG4gICAgICAgICQoc2VsZWN0b3JFbWFpbENvbmZpcm1TdGF0ZSkuZW1wdHkoKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEluaXQgaGVhZGVyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW5pdEhlYWRlcigpIHtcclxuICAgLy8gY2hlY2sgb3RoZXIgaGFuZGxlciBpbiBsb2dpbi1mb3JtLmpzXHJcbiAgICBjb25zdCAkbG9naW5Cb3ggPSAkKENPTlNULnVpU2VsZWN0b3JzLmhlYWRlckxvZ2luQm94KTtcclxuICAgIGNvbnN0ICRyZWdpc3RlckJveCA9ICQoQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyUmVnQm94KTtcclxuXHJcbiAgICBQdWJTdWIuc3Vic2NyaWJlKENPTlNULmV2ZW50cy5VU0VSX0xPR0dFRCwgb25Mb2dpblN1YnNjcmliZSk7XHJcblxyXG4gICAgc2hvd0xvZ291dCgpO1xyXG5cclxuICAgICQoQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyUmVnQnRuKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgJGxvZ2luQm94LmhpZGUoKTtcclxuICAgICAgICAkcmVnaXN0ZXJCb3guY3NzKHsndG9wJzogMCwgJ3JpZ2h0JzogMH0pXHJcbiAgICAgICAgICAgIC5hZGRDbGFzcygnYmctbGlnaHQgYm9yZGVyIG10LTUgbXgtYXV0byBwb3NpdGlvbi1hYnNvbHV0ZSBweC0zIGQtYmxvY2snKVxyXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJOYXZMb2dpbkJ0bikub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICRsb2dpbkJveC5hZGRDbGFzcygnZC1ibG9jaycpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAkcmVnaXN0ZXJCb3guYWRkQ2xhc3MoJ2Qtbm9uZScpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJyk7XHJcbiAgICB9KTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL2hlYWRlci9oZWFkZXIuanMiLCIvLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdXNlcic7XHJcbi8vIGltcG9ydCBTcGlubmVyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9zcGlubmVyJztcclxuaW1wb3J0IHZpZXdVdGlscyBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdmlldyc7XHJcbi8vIGltcG9ydCBQdWJTdWIgZnJvbSAncHVic3ViLWpzJztcclxuaW1wb3J0IHtDT05TVH0gZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2NvbnN0cyc7XHJcblxyXG4vLyDQn9C+0YHQu9C1INC00L7QsdCw0LLQu9C10L3QuNGPINCw0LrQutCw0YPQvdGC0LAg0YHQvdC+0LLQsCDQtNC10YDQvdGD0YLRjCDQnNCV0KLQkCDQuCDQv9C10YDQtdGA0LjRgdC+0LLQsNGC0Ywg0YHQv9C40YHQvtC6INCw0LrQutCw0YPQvdGC0L7QslxyXG5jb25zdCBhZGRJbnN0YWdyYW1BY2NvdW50ID0gKG5ld0Zvcm1EYXRhKSA9PiB7XHJcbiAgICBjb25zdCBjYkVycm9yID0gKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUicsIHJlc3VsdCk7XHJcbiAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSgkKCcuZXJyb3ItbXNnJyksXHJcbiAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMuc3RhdGUsXHJcbiAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMubWVzc2FnZSB8fCAnTG9naW4gZXJyb3InKTtcclxuICAgICAgICAvLyAkKF9sb2dpbkJveCkuYWRkQ2xhc3MoY2xvc2VDbGFzcykucmVtb3ZlQ2xhc3Mob3BlbmVkQ2xhc3MpO1xyXG4gICAgfTtcclxuXHJcbiAgICBVc2VyLmFkZEluc3RhZ3JhbUFjY291bnQobmV3Rm9ybURhdGEsIGNiRXJyb3IpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnN0YXR1cykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQsIHJlc3VsdC5zdGF0dXMpO1xyXG4gICAgICAgICAgICAvLyBkZWJ1Z2dlcjtcclxuICAgICAgICAgICAgY29uc3QgJG1zZ0xpc3QgPSAkKCcuYWNjb3VudHMtbGlzdCcpO1xyXG4gICAgICAgICAgICAkbXNnTGlzdC5lbXB0eSgpO1xyXG4gICAgICAgICAgICAvLyB0b2RvIDogcmVsb2FkIGxpc3RcclxuICAgICAgICAgICAgLy8gZmlsbExpc3QoJG1zZ0xpc3QsIHJlc3VsdC5kYXRhLmFjY291bnRzKTtcclxuICAgICAgICAgICAgLy8gYWRkTGlzdEhhbmRsZXIoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UoJHRleHRBcmVhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIC8vICAgICByZXN1bHQuc3RhdHVzLnN0YXRlLFxyXG4gICAgICAgICAgICAvLyAgICAgcmVzdWx0LnN0YXR1cy5tZXNzYWdlIHx8ICdMb2dpbiBlcnJvcicpO1xyXG4gICAgICAgICAgICAvLyAkKF9sb2dpbkJveCkuYWRkQ2xhc3MoY2xvc2VDbGFzcykucmVtb3ZlQ2xhc3Mob3BlbmVkQ2xhc3MpO1xyXG4gICAgICAgIH1cclxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAvLyB0b2RvOiByZW5kZXIgZm9yIHVzZXJcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ3N1Ym1pdCcsIG5ld0Zvcm1EYXRhKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGFkZE9uTG9hZEhhbmRsZXJzKCkge1xyXG4gICAgLy8gJCgnLmpzX3JlcGVhdC1zZWN1cml0eS1jb2RlJykub24oJ2NsaWNrJywgKGUpID0+IHtcclxuXHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICAkKCcuanNfYWRkLWluc3RhZ3JhbS1hY2NvdW50Jykub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCBidG4gPSAkKGUudGFyZ2V0KTtcclxuICAgICAgICBjb25zdCAkbW9kYWxCb2R5ID0gYnRuLmNsb3Nlc3QoJy5tb2RhbCcpLmZpbmQoJy5tb2RhbC1kaWFsb2cgLm1vZGFsLWJvZHknKTtcclxuICAgICAgICBjb25zdCB1c2VybmFtZSA9ICRtb2RhbEJvZHkuZmluZCgnaW5wdXRbbmFtZT1cInVzZXJuYW1lXCJdJykudmFsKCkudHJpbSgpO1xyXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkID0gJG1vZGFsQm9keS5maW5kKCdpbnB1dFtuYW1lPVwicGFzc1wiXScpLnZhbCgpLnRyaW0oKTtcclxuICAgICAgICBjb25zdCAkZm9ybSA9ICQoJ2Zvcm0nLCAkbW9kYWxCb2R5KTtcclxuICAgICAgICBjb25zdCBmb3JtID0gJGZvcm0uZ2V0KDApO1xyXG4gICAgICAgIGNvbnN0IGNzc1ZhbGlkYXRpb25DbGFzcyA9ICdmb3JtLXZhbGlkYXRpb24nO1xyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIC8vIGNvbnN0IHZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoJGZvcm0pO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbGlkYXRvci52YWxpZGF0ZSgpKTtcclxuICAgICAgICBpZiAoZm9ybS5jaGVja1ZhbGlkaXR5KCkpIHtcclxuICAgICAgICAgICAgYWRkSW5zdGFncmFtQWNjb3VudCh7dXNlcm5hbWUsIHBhc3N3b3JkfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gSGlnaGxpZ2h0IGVycm9yc1xyXG4gICAgICAgICAgICBpZiAoZm9ybS5yZXBvcnRWYWxpZGl0eSkge1xyXG4gICAgICAgICAgICAgICAgZm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICRmb3JtLmFkZENsYXNzKGNzc1ZhbGlkYXRpb25DbGFzcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXVzZXJuYW1lIHx8ICFwYXNzd29yZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm90IHZhbGlkIC0gRW1wdHkgZmllbGRzJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkTGlzdEhhbmRsZXIoLyogdXNlcm5hbWUqLykge1xyXG4gICAgLy8gJCgnI3lvdXJNb2RhbElEJykub24oJ3Nob3cuYnMubW9kYWwnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAvLyAgICAgdmFyIHlvdXJwYXJhbWV0ZXIgPSBlLnJlbGF0ZWRUYXJnZXQuZGF0YXNldC55b3VycGFyYW1ldGVyO1xyXG4gICAgLy8gICAgIC8vIERvIHNvbWUgc3R1ZmYgdy8gaXQuXHJcbiAgICAvLyB9KTtcclxuICAgIGxldCBjaGVja3BvaW50VHlwZSA9ICcnO1xyXG5cclxuICAgICQoJy5qc19wYXNzLWNoZWNrcG9pbnQtYnRuJykub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCAkYnV0dG9uID0gJChlLnRhcmdldCk7XHJcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSAkYnV0dG9uLmRhdGEoJ3VzZXJuYW1lJyk7XHJcbiAgICAgICAgY2hlY2twb2ludFR5cGUgPSAkYnV0dG9uLmRhdGEoJ2NoZWNrcG9pbnRUeXBlJykgfHwgY2hlY2twb2ludFR5cGU7XHJcbiAgICAgICAgLy8gJCgnI3NlY3VyaXR5LWNvZGUnKS5kYXRhKCdjaGVja3BvaW50VHlwZScsIGNoZWNrcG9pbnRUeXBlKTtcclxuICAgICAgICAvLyB0b2RvIGFkZCAnY2hlY2twb2ludFR5cGUnIHRvIG1vZGFsXHJcbiAgICAgICAgY29uc3Qgc2VuZFRvID0gKGNoZWNrcG9pbnRUeXBlID09PSAnUEhPTkUnKSA/ICfRgtC10LvQtdGE0L7QvScgOiAnZW1haWwnO1xyXG4gICAgICAgIC8vIFNwaW5uZXIuc3RhcnQoJGJ1dHRvbiwgJ2ZhLWtleScpO1xyXG5cclxuICAgICAgICBpZiAoY2hlY2twb2ludFR5cGUgPT09ICdFTUFJTF9PUl9QSE9ORScpIHtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIC8vINC40L3Qv9GD0YLRiyDRgdC/0YDRj9GC0LDQvdGLLFxyXG4gICAgICAgICAgICAvLyDQv9C+0LrQsNC30LDRgtGMINGB0LXRgNGL0LUg0L/QtdGA0LXQutC70Y7Rh9Cw0YLQtdC70LggKNCy0YvQsdGA0LDQuyDRgtC40L8pXHJcbiAgICAgICAgICAgIC8vINC10YHRgtGMINC60L3QvtC/0LrQsCDQl9Cw0L/RgNC+0YHQuNGC0Ywg0LrQvtC0INC/0L7QtNGC0LLQtdGA0LbQtNC10L3QuNC1XHJcbiAgICAgICAgICAgICQoJyNzZWN1cml0eS1jb2RlLXBob25lT3JlbWFpbCcpLm1vZGFsKHtzaG93OiB0cnVlLCB1c2VybmFtZX0pO1xyXG5cclxuICAgICAgICAgICAgLy8g0L3QtSDQvtGC0L/RgNCw0LLQu9GP0LXQvCDRgNC10LrQstC10YHRglxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBVc2VyLmdldFNlY3VyaXR5S2V5KHVzZXJuYW1lLCBjaGVja3BvaW50VHlwZSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZWN1cml0eUtleSByZWNlaXZlZDonLCByZXN1bHQuc3RhdHVzLnN0YXRlKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMuc3RhdGUgPT09ICdvaycpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRtb2RhbCA9ICQoJyNzZWN1cml0eS1jb2RlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU3Bpbm5lci5zdG9wKCRidXR0b24sICdmYS1rZXknKTtcclxuICAgICAgICAgICAgICAgICQoJy5qc19zdWNjZXNzLWZlZWRiYWNrJywgJG1vZGFsKS5lbXB0eSgpLnRleHQoYNCa0LvRjtGHINC/0L7QtNGC0LLQtdGA0LbQtNC10L3QuNGPINCx0YvQuyDQvtGC0L/RgNCw0LLQu9C10L0g0JLQsNC8INC90LAgJHtzZW5kVG99YCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnI3NlY3VyaXR5LWNvZGUnKS5hdHRyKCdkYXRhLXVzZXJuYW1lJywgdXNlcm5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBpbnNpZGUgbW9kYWxcclxuICAgICQoJy5qc19jb25maXJtLXNlY3VyaXR5LWNvZGUnKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJ0biA9ICQoZS50YXJnZXQpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gYnRuLmNsb3Nlc3QoJyNzZWN1cml0eS1jb2RlJykuZGF0YSgndXNlcm5hbWUnKTtcclxuICAgICAgICBjb25zdCAka2V5SW5wdXQgPSBidG4uY2xvc2VzdCgnLm1vZGFsJykuZmluZCgnLm1vZGFsLWRpYWxvZyBmb3JtIGlucHV0LmpzX2NvbmZpcm0ta2V5Jyk7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gJGtleUlucHV0LnZhbCgpLnRyaW0oKTtcclxuICAgICAgICBjb25zdCAkbW9kYWwgPSBidG4uY2xvc2VzdCgnLm1vZGFsJyk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgaWYgKGtleS5sZW5ndGggIT09IDYpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBVc2VyLmNvbmZpcm1TZWN1cml0eUtleShrZXksIHVzZXJuYW1lKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMuc3RhdGUgIT09ICdvaycpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnanNfY29uZmlybTonLCByZXN1bHQuc3RhdHVzLnN0YXRlLCAnY2xvc2UgbW9kYWwnKTtcclxuICAgICAgICAgICAgJG1vZGFsLm1vZGFsKCdoaWRlJyk7XHJcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyJyk7XHJcbiAgICAgICAgICAgICQoJy5qc19zdWNjZXNzLWZlZWRiYWNrJywgJG1vZGFsKS50ZXh0KCfQl9Cw0L/RgNC+0YEg0L3QtSDQvtGC0L/RgNCw0LLQu9C10L0nKS5jc3MoJ2NvbG9yJywgJ3JlZCcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnZm9ybSBpbnB1dFttaW5sZW5ndGhdJykub24oJ2JsdXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgbGVuID0gJCh0aGlzKS52YWwoKS50cmltKCkubGVuZ3RoO1xyXG4gICAgICAgIGNvbnN0IG1pbkxlbiA9IE51bWJlcigkKHRoaXMpLmF0dHIoJ21pbmxlbmd0aCcpKTtcclxuICAgICAgICAvLyBjb25zdCBtZXNzYWdlID0gbWluTGVuIDw9IGxlbiA/ICcnIDogbWluTGVuICsgJyBjaGFyYWN0ZXJzIG1pbmltdW0nO1xyXG4gICAgICAgIGlmIChtaW5MZW4gIT09IGxlbikge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNzcygnYm9yZGVyQ29sb3InLCAncmVkJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2JvcmRlckNvbG9yJywgJyNjZWQ0ZGEnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5zZXRDdXN0b21WYWxpZGl0eShtZXNzYWdlKVxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gb25IaWRlTW9kYWwoZSkge1xyXG4gICAgICAgIGNvbnN0ICRtb2RhbCA9ICQoZS50YXJnZXQpO1xyXG4gICAgICAgICRtb2RhbC5maW5kKCcuZmlyc3Qtc3RlcCcpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAkbW9kYWwuZmluZCgnLnNlY29uZC1zdGVwJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICQoJy5qc19jb25maXJtLWtleScpLnZhbCgnJyk7XHJcbiAgICAgICAgJCgnLmpzX3N1Y2Nlc3MtZmVlZGJhY2snLCAkbW9kYWwpLnJlbW92ZUF0dHIoJ3N0eWxlJykuZW1wdHkoKTtcclxuICAgIH1cclxuICAgICQoJyNzZWN1cml0eS1jb2RlLXBob25lT3JlbWFpbCcpLm9uKCdoaWRlLmJzLm1vZGFsJywgb25IaWRlTW9kYWwpO1xyXG4gICAgJCgnI3NlY3VyaXR5LWNvZGUnKS5vbignaGlkZS5icy5tb2RhbCcsIG9uSGlkZU1vZGFsKTtcclxuXHJcbiAgICAvLyBcIlBIT05FX09SX0VNQUlMXCIgbW9kYWxcclxuICAgICQoJy5qc19nZXQtc2VjdXJpdHktY29kZS1waG9uZU9yZW1haWwnKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0ICRtb2RhbCA9ICQoJyNzZWN1cml0eS1jb2RlLXBob25lT3JlbWFpbCcpO1xyXG4gICAgICAgIGNvbnN0IHR5cGVTZWxlY3RlZCA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJG1vZGFsKS5maW5kKCcuanNfYnRuLXR5cGUtc3dpdGNoZXIgaW5wdXQ6Y2hlY2tlZCcpO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrcG9pbnRUeXBlQWN0aXZlID0gdHlwZVNlbGVjdGVkLnZhbCgpO1xyXG4gICAgICAgIGNvbnN0IHNlbmRUbyA9IChjaGVja3BvaW50VHlwZUFjdGl2ZSA9PT0gJ1BIT05FJykgPyAn0YLQtdC70LXRhNC+0L0nIDogJ2VtYWlsJztcclxuICAgICAgICBjb25zdCBtb2RhbENvbmZpZyA9ICRtb2RhbC5kYXRhKClbJ2JzLm1vZGFsJ10uX2NvbmZpZztcclxuICAgICAgICBjb25zdCB1c2VybmFtZSA9IG1vZGFsQ29uZmlnLnVzZXJuYW1lO1xyXG4gICAgICAgIFVzZXIuZ2V0U2VjdXJpdHlLZXkodXNlcm5hbWUsIGNoZWNrcG9pbnRUeXBlQWN0aXZlKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgLy8g0L/RgNC4INC90LDQttCw0YLQuNC4IFwi0JfQsNC/0YDQvtGB0LjRgtGMINC60L7QtCDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjQtVwiIC0g0L7RgtC/0LDRgNC70Y/QtdGC0YHRjyDRgNC10LrQstC10YHRgiBcItGB0YLQsNGA0YIg0YfQtdC60L/QvtC40L3RglwiINC/0L7Rj9Cy0LvRj9C10YLRjNGB0Y8g0LjQvdC/0YPRgiDQuCDQutC90L7Qv9C60LAg0LTRgNGD0LPQuNGFINGC0LjQv9Cw0YVcclxuICAgICAgICAgICAgLy8gZ2V0IHNlbGVjdGVkIGJ1dHRvblxyXG5cclxuICAgICAgICAgICAgLy8g0L/QtdGA0LXQutC70Y7Rh9Cw0YLQtdC70Ywo0YHQtdGA0YvQuSkg0Lgg0LrQvdC+0L/QutCwIFwi0JfQsNC/0YDQvtGB0LjRgtGMINC60L7QtCDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjQtVwiINC40YHRh9C10LfQsNGO0YJcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlY3VyaXR5S2V5IHJlY2VpdmVkOicsIHJlc3VsdC5zdGF0dXMuc3RhdGUpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cy5zdGF0ZSA9PT0gJ29rJykge1xyXG4gICAgICAgICAgICAgICAgJCgnLmZpcnN0LXN0ZXAnLCAkbW9kYWwpLmFkZENsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgICAgICQoJy5zZWNvbmQtc3RlcCcsICRtb2RhbCkucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgJCgnLmpzX3N1Y2Nlc3MtZmVlZGJhY2snLCAkbW9kYWwpLmVtcHR5KCkudGV4dChg0JrQu9GO0Ycg0L/QvtC00YLQstC10YDQttC00LXQvdC40Y8g0LHRi9C7INC+0YLQv9GA0LDQstC70LXQvSDQktCw0Lwg0L3QsCAke3NlbmRUb31gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbGxMaXN0KCRsaXN0LCBkYXRhQXJyYXkpIHtcclxuICAgIGNvbnN0IGl0ZW1zID0gZGF0YUFycmF5O1xyXG4gICAgY29uc3QgY0xpc3QgPSAkbGlzdDtcclxuICAgIGNvbnN0IGRlZmF1bHRBdmF0YXJTcmMgPSAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9qTk5UNExFLnBuZyc7XHJcbiAgICBjb25zdCBpbnNlcnRJdGVtID0gKGRhdGEsIHRleHQsIGNzc0NscykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxpVHBsID0gYCR7KGRhdGEpXHJcbiAgICAgICAgICAgID8gYDxsaSBjbGFzcz1cImxpc3QtaW5saW5lLWl0ZW0gJHtjc3NDbHN9XCI+PHNwYW4gY2xhc3M9XCJmaWd1cmVcIj4ke2RhdGF9PC9zcGFuPjxzcGFuPiR7dGV4dH08L3NwYW4+PC9saT5gXHJcbiAgICAgICAgICAgIDogYDxsaSBjbGFzcz1cImxpc3QtaW5saW5lLWl0ZW0gJHtjc3NDbHN9XCI+PHNwYW4gY2xhc3M9XCJmaWd1cmVcIj4wPC9zcGFuPjxzcGFuPiR7dGV4dH08L3NwYW4+PC9saT5gfWA7XHJcbiAgICAgICAgcmV0dXJuIGxpVHBsO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHN0YXRzID0gKGluZm8pID0+IHtcclxuICAgICAgICBjb25zdCB0cGwgPSBgPGRpdiBjbGFzcz1cImNvbFwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LWlubGluZSB0ZXh0LWNlbnRlciBjb3VudHMtbGlzdFwiPlxyXG4gICAgICAgICAgICAkeyhpbmZvKVxyXG4gICAgICAgICAgICAgID8gYCR7aW5zZXJ0SXRlbShpbmZvWydtZWRpYV9jb3VudCddLCAn0J/Rg9Cx0LvQuNC60LDRhtC40LgnLCAnbWVkaWEtY291bnQnKX1cclxuICAgICAgICAgICAgICAgICR7aW5zZXJ0SXRlbShpbmZvWydmb2xsb3dlcl9jb3VudCddLCAn0J/QvtC00L/QuNGB0YfQuNC60LgnLCAnZm9sbG93ZXItY291bnQnKX1cclxuICAgICAgICAgICAgICAgICR7aW5zZXJ0SXRlbShpbmZvWydmb2xsb3dpbmdfY291bnQnXSwgJ9Cf0L7QtNC/0LjRgdC60LgnLCAnZm9sbG93aW5nLWNvdW50Jyl9YFxyXG4gICAgICAgICAgICAgIDogYCR7aW5zZXJ0SXRlbShmYWxzZSwgJ9Cf0YPQsdC70LjQutCw0YbQuNC4JywgJ21lZGlhLWNvdW50Jyl9XHJcbiAgICAgICAgICAgICAgICAke2luc2VydEl0ZW0oZmFsc2UsICfQn9C+0LTQv9C40YHRh9C40LrQuCcsICdmb2xsb3dlci1jb3VudCcpfVxyXG4gICAgICAgICAgICAgICAgJHtpbnNlcnRJdGVtKGZhbHNlLCAn0J/QvtC00L/QuNGB0LrQuCcsICdmb2xsb3dpbmctY291bnQnKX1gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5gO1xyXG4gICAgICAgIHJldHVybiB0cGw7XHJcbiAgICB9O1xyXG4gICAgY0xpc3QuZW1wdHkoKS5hZGRDbGFzcygnYm9yZGVyLWxpZ2h0LWNvbG9yJyk7XHJcbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5mbyA9IGl0ZW0uaW5mbztcclxuICAgICAgICBjb25zdCBjaGVja3BvaW50ID0gaXRlbS5jaGVja3BvaW50IHx8IGl0ZW07XHJcblxyXG4gICAgICAgIGlmICghaW5mbykge1xyXG4gICAgICAgICAgICAkKGA8bGkgY2xhc3M9XCJtZWRpYSBweS0zXCIgZGF0YS11c2VybmFtZT1cIiR7aXRlbS51c2VybmFtZX1cIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJtbC0zIHJvdW5kZWRcIiBhbHQ9XCJkZWZhdWx0IGF2YXRhclwiIHNyYz1cIiR7ZGVmYXVsdEF2YXRhclNyY31cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1ib2R5IGQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgdXNlci1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7KGl0ZW0udXNlcm5hbWUpID8gYDxoNCBjbGFzcz1cIm10LTAgbWItMSBuYW1lXCI+JHtpdGVtLnVzZXJuYW1lfTwvaDQ+YCA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgdXNlci1jaGVja3BvaW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7KGNoZWNrcG9pbnQuc3RhdHVzID09PSAnVFJJR0dFUkVEJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkganNfcGFzcy1jaGVja3BvaW50LWJ0biBkLWJsb2NrIG14LWF1dG9cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY2hlY2twb2ludC10eXBlPVwiJHtjaGVja3BvaW50LnR5cGUgfHwgJ0VNQUlMJ31cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS11c2VybmFtZT1cIiR7aXRlbS51c2VybmFtZSB8fCAnJ31cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI3NlY3VyaXR5LWNvZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWtleVwiPjwvaT7Qn9GA0L7QudGC0Lgg0YfQtdC60L/QvtC40L3RgjwvYnV0dG9uPmBcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBgKHRvZG8pY2hlY2twb2ludCBzdGF0dXMgLSAke2NoZWNrcG9pbnQuc3RhdHVzfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtzdGF0cygpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+YCkuYXBwZW5kVG8oY0xpc3QpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoYDxsaSBjbGFzcz1cIm1lZGlhIHB5LTNcIiBkYXRhLXVzZXJuYW1lPVwiJHtpdGVtLnVzZXJuYW1lfVwiPlxyXG4gICAgICAgICAgICAkeyhpbmZvWydwcm9maWxlX3BpY191cmwnXSlcclxuICAgICAgICAgICAgICAgID8gYDxpbWcgY2xhc3M9XCJtbC0zIHJvdW5kZWRcIiBhbHQ9XCJVc2VyIHBob3RvXCIgc3JjPVwiJHtpbmZvWydwcm9maWxlX3BpY191cmwnXX1cIj5gXHJcbiAgICAgICAgICAgICAgICA6IGA8aW1nIGNsYXNzPVwibWwtMyByb3VuZGVkXCIgYWx0PVwiZGVmYXVsdCBhdmF0YXJcIiBzcmM9XCIke2RlZmF1bHRBdmF0YXJTcmN9XCI+YH1cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWJvZHkgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHVzZXItaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7KGl0ZW0udXNlcm5hbWUpID8gYDxwIGNsYXNzPVwibXQtMCBtYi0xIG5hbWUgbGVhZFwiPiR7aXRlbS51c2VybmFtZX08L3A+YCA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICR7KGluZm8ubmFtZSkgPyBgPGg0IGNsYXNzPVwibXQtMCBtYi0xXCI+JHtpbmZvLm5hbWV9PC9oND5gIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgJHsoaW5mby5uYW1lKSA/ICcnIDogJycgIC8qICR7KGluZm8uZW1haWwpID8gYDxwIGNsYXNzPVwibXQtMCBtYi0xXCI+JHtpbmZvLmVtYWlsfTwvcD5gIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICR7KGluZm8ucGhvbmUpID8gYDxwIGNsYXNzPVwibXQtMCBtYi0xXCI+JHtpbmZvLnBob25lfTwvcD5gIDogJyd9ICovIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB1c2VyLWNoZWNrcG9pbnRcIj4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAkeyhjaGVja3BvaW50LnN0YXR1cyA9PT0gJ1RSSUdHRVJFRCcpXHJcbiAgICAgICAgICAgICAgICAgICAgPyBgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkganNfcGFzcy1jaGVja3BvaW50LWJ0biBkLWJsb2NrIG14LWF1dG9cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY2hlY2twb2ludC10eXBlPVwiJHtjaGVja3BvaW50LnR5cGUgfHwgJ0VNQUlMJ31cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS11c2VybmFtZT1cIiR7aXRlbS51c2VybmFtZSB8fCAnJ31cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNzZWN1cml0eS1jb2RlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWtleVwiPjwvaT7Qn9GA0L7QudGC0Lgg0YfQtdC60L/QvtC40L3RgjwvYnV0dG9uPmBcclxuICAgICAgICAgICAgICAgICAgICA6ICcnfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAke3N0YXRzKGluZm8pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2xpPmApLmFwcGVuZFRvKGNMaXN0KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHdpbmRvdy5QdWJTdWIucHVibGlzaChDT05TVC5ldmVudHMuaW5zdGFncmFtQWNjb3Vucy5JTlNUQUdSQU1fQUNDT1VOU19SRU5ERVJFRCwge25hbWUsIGRhdGFBcnJheX0pO1xyXG4gICAgY29uc29sZS5sb2coJ0lOU1RBR1JBTV9BQ0NPVU5TX1JFTkRFUkVEJyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbml0IGhlYWRlclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBjb25zdCAkbXNnTGlzdCA9ICQoJy5hY2NvdW50cy1saXN0Jyk7XHJcbiAgICAvLyBjaGVjayB3ZSBhcmUgaW4gcHJvZmlsZSBwYWdlXHJcbiAgICBpZiAoISRtc2dMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHRva2VuID0gVXNlci5nZXRUb2tlbigpOyAvLyB1cGQgdG86IFVzZXIuZ2V0VG9rZW4oKVxyXG4gICAgY29uc3QgbWV0YWRhdGEgPSBVc2VyLmdldE1ldGFkYXRhKHRva2VuKTtcclxuICAgIGNvbnN0IHJlc2VuZFJlcXVlc3QgPSAoKSA9PiBVc2VyLmdldE1ldGFkYXRhKHRva2VuKTtcclxuICAgIGxldCBpc1NlbmRSZXFPbmNlID0gZmFsc2U7XHJcbiAgICBjb25zdCBjaGVja1Jlc3BvbnNlID0gKHJlc3VsdCwgaXNSZXNlbmRSZXF1ZXN0KSA9PiB7XHJcbiAgICAgICAgaWYgKCFyZXN1bHQuc3RhdHVzLnN0YXRlID09PSAnb2snIHx8ICFyZXN1bHQuZGF0YSB8fCAhJG1zZ0xpc3QubGVuZ3RoIHx8IGlzUmVzZW5kUmVxdWVzdCkge1xyXG4gICAgICAgICAgICAvLyDQv9GA0L7QstC10YDRj9C8INC+0LTQuNC9INGA0LDQtyDQvdCw0LvQuNGH0LjQtSByZXN1bHQuZGF0YS5hY2NvdW50cy5pbmZvXHJcbiAgICAgICAgICAgICRtc2dMaXN0LmVtcHR5KCk7XHJcbiAgICAgICAgICAgICQoYDxsaSBjbGFzcz1cIm1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cIm10LTAgbWItM1wiPtCd0Lgg0L7QtNC90L7Qs9C+INCQ0LrQutCw0YPQvdGC0LAg0L3QtSDQtNC+0LHQsNCy0LvQtdC90L48L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+YCkuYXBwZW5kVG8oJG1zZ0xpc3QpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc2VuZFJlcXVlc3QoKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja1Jlc3BvbnNlKHJlc3VsdCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmVxdWVzdCByZXNlbmQnKTtcclxuICAgICAgICAgICAgfSwgMzUwMCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g0LLRi9Cy0L7QtCDRgNC10LfRg9C70YzRgtCw0YLQvtCyIChkYXRhLmFjY291bnRzLmluZm8pXHJcbiAgICAgICAgJCgnLnByb2ZpbGUtdXNlciAuc3Bpbm5lci1ib3gnKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgZmlsbExpc3QoJG1zZ0xpc3QsIHJlc3VsdC5kYXRhLmFjY291bnRzKTtcclxuICAgICAgICBhZGRMaXN0SGFuZGxlcigpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBjaGVjayB3ZSBhcmUgaW4gcHJvZmlsZSBwYWdlXHJcbiAgICBpZiAoISRtc2dMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBhZGRPbkxvYWRIYW5kbGVycygpO1xyXG5cclxuICAgIC8vINC80L7QttC10YIg0LjQvdGE0L4g0L7RgtGB0YPRgtGB0LLQvtCy0LDRgtGMIC0g0YHQtNC10LvQsNGC0Ywg0LXRidC1INGA0LDQtyDQt9Cw0L/RgNC+0YEg0YfQtdGA0LXQtyAzINGB0LXQui5cclxuXHJcbiAgICBtZXRhZGF0YS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAvLyDQv9GA0L7QstC10YDRj9C8INC+0LTQuNC9INGA0LDQtyDQvdCw0LvQuNGH0LjQtSByZXN1bHQuZGF0YS5hY2NvdW50cy5pbmZvXHJcbiAgICAgICAgbGV0IGlzUmVzZW5kUmVxdWVzdCA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChyZXN1bHQuZGF0YSAmJiByZXN1bHQuZGF0YS5hY2NvdW50cyAmJiAhaXNTZW5kUmVxT25jZSkge1xyXG4gICAgICAgICAgICByZXN1bHQuZGF0YS5hY2NvdW50cy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWl0ZW0uaW5mbykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzUmVzZW5kUmVxdWVzdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNTZW5kUmVxT25jZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2hlY2tSZXNwb25zZShyZXN1bHQsIGlzUmVzZW5kUmVxdWVzdCk7XHJcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UoJCgnLmVycm9yLW1zZycpLFxyXG4gICAgICAgICAgICAgICAgZXJyLnN0YXR1cyB8fCAnJyxcclxuICAgICAgICAgICAgICAgICfQndC1INC/0L7Qu9GD0YfQuNC70L7RgdGMINC30LDQs9GA0YPQt9C40YLRjCDQtNC+0YHRgtGD0L/QvdGL0LUgSW5zdGFncmFtINCw0LrQutCw0YPQvdGC0YsnKTtcclxuICAgICAgICB9LCAzMDAwKTtcclxuICAgICAgICAkKCcuc3Bpbm5lci1ib3gnKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICB9KTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL2luc3RhZ3JhbS1hY2NvdW50cy1saXN0L2luc3RhZ3JhbS1hY2NvdW50cy1saXN0LmpzIiwiLyogZXNsaW50LWRpc2FibGUgc29ydC12YXJzICovXHJcbi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy91c2VyJztcclxuaW1wb3J0IFB1YlN1YiBmcm9tICdwdWJzdWItanMnOyAvLyBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9wdWJzdWItanNcclxuaW1wb3J0IGNvb2tpZVN0b3JhZ2UgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2Nvb2tpZSc7XHJcbi8vIGltcG9ydCBWYWxpZGF0b3IgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2Zvcm0tdmFsaWRhdG9yJztcclxuaW1wb3J0IHZpZXdVdGlscyBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdmlldyc7XHJcbmltcG9ydCB7Q09OU1R9IGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMnO1xyXG5cclxuLy8gd2luZG93LiQgPSAkO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExvZ2luRm9ybShzZWxlY3RvckNzcykge1xyXG4gICAgY29uc3Qge19mb3JtSWQsIF9idXR0b25TdWJtaXRJZCwgX3Nob3dMb2dpbkJveEJ0bklkLCBfbG9naW5Cb3h9ID0gc2VsZWN0b3JDc3M7XHJcbiAgICBjb25zdCB1c2VyID0gVXNlciwgLy8gc2VydmljZVxyXG4gICAgICAgICRmb3JtID0gJChfZm9ybUlkKSxcclxuICAgICAgICAkZW1haWwgPSAkZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwibWFpbFwiXScpLFxyXG4gICAgICAgICR0ZXh0QXJlYURlc2NyaXB0aW9uID0gJCgnI2Rlc2NyaXB0aW9uJyk7XHJcbiAgICAvLyBjb25zdCBvcGVuZWRDbGFzcyA9ICdkLWJsb2NrJztcclxuICAgIC8vIGNvbnN0IGNsb3NlQ2xhc3MgPSAnZC1ub25lJztcclxuXHJcbiAgICBjb25zdCB1c2VyTG9naW5IZWFkZXIgPSAoX2Zvcm1EYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2JFcnJvciA9IChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgJChfbG9naW5Cb3gpLmFwcGVuZCgnPHA+cmVzdWx0LnN0YXR1cy5tZXNzYWdlPC9wPicpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiB1c2VyLmxvZ2luKF9mb3JtRGF0YSwgY2JFcnJvcilcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuZGF0YSAmJiByZXN1bHQuZGF0YS50b2tlbikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNhdmUgdGhlIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBjb29raWVTdG9yYWdlLnNldChDT05TVC5jb29raWVTdG9yYWdlLnRva2VuLCByZXN1bHQuZGF0YS50b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLm5hdi1saW5rLmpzX2xvZ091dCcpLnBhcmVudCgpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmVxdWVzdCBzdWNjZWVkZWQgd2l0aCBKU09OIHJlc3BvbnNlJywgcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKCR0ZXh0QXJlYURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLm1lc3NhZ2UgfHwgJ0xvZ2luIHN1Y2NzZXNzJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UodGhpcy4kdGV4dEFyZWFEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYDxwPnN0YXR1czogJHtyZXN1bHQuc3RhdHVzLnN0YXRlfTwvcD48cD4gbWVzc2FnZTogJHtyZXN1bHQuc3RhdHVzLm1lc3NhZ2V9PC9wPmApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSgkdGV4dEFyZWFEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5tZXNzYWdlIHx8ICdMb2dpbiBlcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc3VibWl0Rm9ybSA9IGZ1bmN0aW9uKGZvcm1EYXRhT2JqKSB7XHJcbiAgICAgICAgY29uc3QgZW1haWwgPSAkZW1haWwudmFsKCksXHJcbiAgICAgICAgICAgIHBhc3N3b3JkID0gJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cInBhc3NcIl0nKS52YWwoKSxcclxuICAgICAgICAgICAgX2Zvcm1EYXRhID0gZm9ybURhdGFPYmogfHwge2VtYWlsLCBwYXNzd29yZH07XHJcblxyXG4gICAgICAgIGlmIChzZWxlY3RvckNzcy5pc0xvZ2luSW5zdGFncmFtKSB7XHJcbiAgICAgICAgICAgIC8vIHRvZG86IGRlbGV0ZSBtZVxyXG4gICAgICAgICAgICAvLyBhZGRJbnN0YWdyYW1BY2NvdW50KHt1c2VybmFtZTogJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cInVzZXJuYW1lXCJdJykudmFsKCksIHBhc3N3b3JkfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGVtYWlsLnZhbCgkZW1haWwudmFsKCkudG9Mb2NhbGVMb3dlckNhc2UoKSk7XHJcbiAgICAgICAgICAgIHVzZXJMb2dpbkhlYWRlcihfZm9ybURhdGEpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgUHViU3ViLnB1Ymxpc2goQ09OU1QuZXZlbnRzLlVTRVJfTE9HR0VELCAnbG9naW4nKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBsb2dPdXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb29raWVTdG9yYWdlLnJlbW92ZShDT05TVC5jb29raWVTdG9yYWdlLnRva2VuKTtcclxuICAgICAgICBQdWJTdWIucHVibGlzaChDT05TVC5ldmVudHMuVVNFUl9MT0dPVVQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBiaW5kRXZlbnRzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3QgJHNob3dMb2dpbkJveEJ0bklkID0gJChfc2hvd0xvZ2luQm94QnRuSWQpO1xyXG4gICAgICAgIGNvbnN0ICRsb2dpbkJveCA9ICQoX2xvZ2luQm94KTtcclxuICAgICAgICBjb25zdCBvcGVuZWRDbGFzcyA9ICdkLWJsb2NrJztcclxuICAgICAgICBjb25zdCBjbG9zZUNsYXNzID0gJ2Qtbm9uZSc7XHJcblxyXG4gICAgICAgICRzaG93TG9naW5Cb3hCdG5JZC5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc2VsZWN0b3JDc3MuaXNMb2dpbkluc3RhZ3JhbSkge1xyXG4gICAgICAgICAgICAgICAgJGxvZ2luQm94LmNzcyh7J3RvcCc6IDAsICdyaWdodCc6IDB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnYmctbGlnaHQgYm9yZGVyIG10LTUgbXgtYXV0byBwb3NpdGlvbi1hYnNvbHV0ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICRsb2dpbkJveC5hZGRDbGFzcyhvcGVuZWRDbGFzcykucmVtb3ZlQ2xhc3MoY2xvc2VDbGFzcyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0ICRidXR0b25TdWJtaXQgPSAkKF9idXR0b25TdWJtaXRJZCksXHJcbiAgICAgICAgICAgIGNzc1ZhbGlkYXRpb25DbGFzcyA9ICdmb3JtLXZhbGlkYXRpb24nO1xyXG5cclxuICAgICAgICAkYnV0dG9uU3VibWl0Lm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc3QgZm9ybSA9ICRmb3JtLmdldCgwKTtcclxuICAgICAgICAgICAgLy8gY29uc3QgdmFsaWRhdG9yID0gbmV3IFZhbGlkYXRvcigkZm9ybSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbGlkYXRvci52YWxpZGF0ZSgpKTtcclxuICAgICAgICAgICAgaWYgKGZvcm0uY2hlY2tWYWxpZGl0eSgpICYmIHZpZXdVdGlscy5pc0VtYWlsKCRlbWFpbC52YWwoKSkpIHtcclxuICAgICAgICAgICAgICAgIHN1Ym1pdEZvcm0oKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIEhpZ2hsaWdodCBlcnJvcnNcclxuICAgICAgICAgICAgICAgIGlmIChmb3JtLnJlcG9ydFZhbGlkaXR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJGZvcm0uYWRkQ2xhc3MoY3NzVmFsaWRhdGlvbkNsYXNzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcubmF2LWxpbmsuanNfbG9nT3V0Jykub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBsb2dPdXQoKTtcclxuICAgICAgICAgICAgJChlLnRhcmdldCkucGFyZW50KCkuaGlkZSgpO1xyXG4gICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKCR0ZXh0QXJlYURlc2NyaXB0aW9uLCAnTG9nZ2VkIG91dCcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBQdWJTdWIuc3Vic2NyaWJlKENPTlNULmV2ZW50cy5VU0VSX0xPR09VVCwgKG1zZykgPT4ge1xyXG4gICAgICAgICAgICAkKENPTlNULnVpU2VsZWN0b3JzLmhlYWRlck5hdkxvZ2luQnRuKS5hZGRDbGFzcyhvcGVuZWRDbGFzcykucmVtb3ZlQ2xhc3MoY2xvc2VDbGFzcyk7IC8vIC5zaG93KCk7XHJcbiAgICAgICAgICAgICQoQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyUmVnQnRuKS5hZGRDbGFzcyhvcGVuZWRDbGFzcykucmVtb3ZlQ2xhc3MoY2xvc2VDbGFzcyk7XHJcbiAgICAgICAgICAgICQoJy5uYXYtbGluay5qc19sb2dPdXQnKS5hZGRDbGFzcyhjbG9zZUNsYXNzKS5yZW1vdmVDbGFzcyhvcGVuZWRDbGFzcyk7IC8vIC5oaWRlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9yTG9naW5TdGF0ZSA9ICcuanNfbWVzc2FnZV9sb2dnZWQtLXRleHQnO1xyXG4gICAgICAgICAgICAkKHNlbGVjdG9yTG9naW5TdGF0ZSkudGV4dCgn0JLRiyDQstGL0YjQu9C4INC40Lcg0LDQutC60LDRg9C90YLQsCcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXNMb2dpbkJ0bkNsaWNrID0gJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJ25hdi5uYXZiYXInKS5maW5kKCRsb2dpbkJveCkubGVuZ3RoO1xyXG4gICAgICAgICAgICBjb25zdCBpc0FkZEluc3RhZ3JhbUJ0bkNsaWNrZWQgPSAkKGV2ZW50LnRhcmdldCkuYXR0cignaWQnKSA9PT0gQ09OU1QudWlTZWxlY3RvcnMuaW5zdGFncmFtLmFkZEFjY291bnRCdG5JZDtcclxuXHJcbiAgICAgICAgICAgIGlmICghaXNMb2dpbkJ0bkNsaWNrICYmICRsb2dpbkJveC5oYXNDbGFzcyhvcGVuZWRDbGFzcykgJiYgIWlzQWRkSW5zdGFncmFtQnRuQ2xpY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgJGxvZ2luQm94LmFkZENsYXNzKGNsb3NlQ2xhc3MpLnJlbW92ZUNsYXNzKG9wZW5lZENsYXNzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgICAgIGJpbmRFdmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGluaXRcclxuICAgIH07XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uanMiLCJpbXBvcnQgTWV0ZW9yRW1vamkgZnJvbSAnbWV0ZW9yLWVtb2ppJztcclxuLy8gaW1wb3J0IHFxIGZyb20gJ2ZpbmUtdXBsb2FkZXInOyAvL3RvZG86IGZpbmUtdXBsb2FkZVxyXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdXNlcic7XHJcbmltcG9ydCBVc2VyQ29udmVyc2F0aW9uIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9hcGktdXNlci1kaXJlY3QnO1xyXG5pbXBvcnQgdmlld1V0aWxzIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy92aWV3JztcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3NwaW5uZXInO1xyXG4vLyBpbXBvcnQgUHViU3ViIGZyb20gJ3B1YnN1Yi1qcyc7Ly8gaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvcHVic3ViLWpzXHJcbmltcG9ydCB7Q09OU1R9IGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMnO1xyXG5cclxuY29uc3QgdG9rZW4gPSBVc2VyLmdldFRva2VuKCk7XHJcbmNvbnN0ICRtc2dMaXN0ID0gJCgnLm1lc3NhZ2VzLWxpc3QnKTtcclxubGV0IHVwZGF0ZUludGVydmFsID0gJyc7XHJcbmxldCBpbnRlcnZhbElkID0gZmFsc2U7XHJcblxyXG5mdW5jdGlvbiBpc0luTWVzc2FnZVBhZ2UoKSB7XHJcbiAgICBjb25zdCAkbXNnTGlzdCA9ICQoJy5tZXNzYWdlcy1saXN0Jyk7XHJcbiAgICBjb25zdCAkdXNlckxpc3QgPSAkKCcubWVzc2FnZXMtdXNlci1saXN0Jyk7XHJcbiAgICByZXR1cm4gISEkbXNnTGlzdC5sZW5ndGggJiYgISEkdXNlckxpc3QubGVuZ3RoO1xyXG59XHJcbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcclxuICAgIGlmICghaXNJbk1lc3NhZ2VQYWdlKCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcclxuICAgIGNvbnN0IG0gPSBuZXcgTWV0ZW9yRW1vamkoKTtcclxuICAgIGNvbnN0ICRwaWNrZXIgPSAkKCd0ZXh0YXJlYVtkYXRhLW1ldGVvci1lbW9qaT1cInRydWVcIl0gfiBkaXYnKTtcclxuICAgIGNvbnN0IHN0eWxlID0gJHBpY2tlci5hdHRyKCdzdHlsZScpO1xyXG4gICAgY29uc3Qgc3R5bGVOZXcgPSBzdHlsZS5yZXBsYWNlKCd0b3A6IDMwcHg7JywgJ3RvcDogLTIxMHB4OycpO1xyXG4gICAgJHBpY2tlci5hdHRyKCdzdHlsZScsIHN0eWxlTmV3KTtcclxuXHJcbiAgICAvKlxyXG4gICAgLy90b2RvOiBmaW5lLXVwbG9hZGVcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gICAgY29uc3QgcmVzdHJpY3RlZFVwbG9hZGVyID0gbmV3IHFxLkZpbmVVcGxvYWRlcih7XHJcbiAgICAgICAgZWxlbWVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbmUtdXBsb2FkZXItdmFsaWRhdGlvbicpLFxyXG4gICAgICAgIHRlbXBsYXRlOiAncXEtdGVtcGxhdGUtdmFsaWRhdGlvbicsXHJcbiAgICAgICAgcmVxdWVzdDoge1xyXG4gICAgICAgICAgICBlbmRwb2ludDogJy9zZXJ2ZXIvdXBsb2FkcydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRodW1ibmFpbHM6IHtcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICB3YWl0aW5nUGF0aDogJ2h0dHBzOi8vZmluZXVwbG9hZGVyLmNvbS9zb3VyY2UvcGxhY2Vob2xkZXJzL3dhaXRpbmctZ2VuZXJpYy5wbmcnLCAvLyAnL3NvdXJjZS9wbGFjZWhvbGRlcnMvd2FpdGluZy1nZW5lcmljLnBuZycsXHJcbiAgICAgICAgICAgICAgICBub3RBdmFpbGFibGVQYXRoOiAnaHR0cHM6Ly9maW5ldXBsb2FkZXIuY29tL3NlcnZlci93YWl0aW5nLWdlbmVyaWMucG5nJyAvLyAnL3NvdXJjZS9wbGFjZWhvbGRlcnMvbm90X2F2YWlsYWJsZS1nZW5lcmljLnBuZydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICAgICAgICBhbGxvd2VkRXh0ZW5zaW9uczogWydqcGVnJywgJ2pwZycsICd0eHQnXSxcclxuICAgICAgICAgICAgaXRlbUxpbWl0OiAzLFxyXG4gICAgICAgICAgICBzaXplTGltaXQ6IDUwMCAqIDEwMjRcclxuICAgICAgICB9XHJcbiAgICB9KTsqL1xyXG59KTtcclxuXHJcbi8vIG1lc3NhZ2VzLWxpc3RcclxuZnVuY3Rpb24gZmlsbExpc3QoJGxpc3QsIGRhdGFBcnJheSwgaXNBcHBlbnRQcmV2TXNnKSB7XHJcbiAgICBjb25zdCBpdGVtcyA9IGRhdGFBcnJheTtcclxuICAgIGNvbnN0IGNMaXN0ID0gJGxpc3Q7XHJcbiAgICAvLyBjb25zdCBkZWZhdWx0QXZhdGFyU3JjID0gJ2h0dHBzOi8vaS5pbWd1ci5jb20vak5OVDRMRS5wbmcnO1xyXG4gICAgY29uc3QgaW5zZXJ0TXNnID0gKHZhbHVlLCB0eXBlLCBjc3NDbHMpID0+IHtcclxuICAgICAgICBsZXQgc3RyID0gJyc7XHJcbiAgICAgICAgc3dpdGNoICh0eXBlLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgY2FzZSAncGhvdG8nOlxyXG4gICAgICAgICAgICAgICAgc3RyID0gYDxkaXYgY2xhc3M9XCJjaGF0LWltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHt2YWx1ZX1cIiBhbHQ9XCJDb250ZW50IEltYWdlXCIgY2xhc3M9XCJjb250ZW50LWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5gO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2xpbmsnOlxyXG4gICAgICAgICAgICAgICAgc3RyID0gYDxkaXYgY2xhc3M9XCJjaGF0LWltZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIiR7dmFsdWV9XCI+JHt2YWx1ZX08L2E+YDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBzdHIgPSBgPGRpdiBjbGFzcz1cImNoYXQtdGV4dFwiID4ke3ZhbHVlfTwvZGl2PmA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdHI7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgYWRkVG9MaXN0ID0gKGlzQXBwZW50UHJldk1zZywgJGxpLCAkbGlzdCkgPT4ge1xyXG4gICAgICAgIGlmIChpc0FwcGVudFByZXZNc2cpIHtcclxuICAgICAgICAgICAgJGxpLmluc2VydEJlZm9yZSgkbGlzdC5maW5kKCdsaTpmaXJzdC1jaGlsZCcpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkbGkuYXBwZW5kVG8oJGxpc3QpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBpZiAoaXNBcHBlbnRQcmV2TXNnKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2lzQXBwZW50UHJldk1zZyB0bycsIGNMaXN0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY0xpc3QuZW1wdHkoKS5hZGRDbGFzcygnYm9yZGVyLWxpZ2h0LWNvbG9yJyk7XHJcbiAgICB9XHJcbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGl0ZW07XHJcbiAgICAgICAgLy8gY29uc3QgY2hlY2twb2ludCA9IGl0ZW0uY2hlY2twb2ludCB8fCBpdGVtO1xyXG5cclxuICAgICAgICBpZiAobWVzc2FnZS5zaWRlLnRvTG93ZXJDYXNlKCkgPT09ICdsZWZ0Jykge1xyXG4gICAgICAgICAgICBjb25zdCAkbGkgPSAkKGA8bGkgY2xhc3M9XCJjaGF0LWl0ZW0gY2hhdC1pdGVtLWxlZnQgY29sIGZsZXgtY29sdW1uLXJldmVyc2VcIiB2YWx1ZT1cIiR7bWVzc2FnZS52YWx1ZX1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICR7KG1lc3NhZ2VbJ3Byb2ZpbGVfcGljX3VybCddKVxyXG4gICAgICAgICAgICAgICAgICAgID8gYDxkaXYgY2xhc3M9XCJjaGF0LWltZy1ib3hcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7bWVzc2FnZVsncHJvZmlsZV9waWNfdXJsJ119XCIgYWx0PVwiVXNlciBBdmF0YXJcIiBjbGFzcz1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjaGF0LXVzZXJuYW1lIHRleHQtbXV0ZWRcIj4ke21lc3NhZ2UudXNlcm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICR7aW5zZXJ0TXNnKG1lc3NhZ2UudmFsdWUsIG1lc3NhZ2UudHlwZSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJjaGF0LXRpbWUtdGV4dFwiPiR7dmlld1V0aWxzLmdldEZvcm1hdHRlZERhdGVVdGlsKG1lc3NhZ2UudGltZXN0YW1wKX08L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+YCk7XHJcbiAgICAgICAgICAgIGFkZFRvTGlzdChpc0FwcGVudFByZXZNc2csICRsaSwgY0xpc3QpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRsaSA9ICQoYDxsaSBjbGFzcz1cImNoYXQtaXRlbSBjaGF0LWl0ZW0tcmlnaHQgY29sIGZsZXgtY29sdW1uLXJldmVyc2VcIiB2YWx1ZT1cIiR7bWVzc2FnZS52YWx1ZX1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7aW5zZXJ0TXNnKG1lc3NhZ2UudmFsdWUsIG1lc3NhZ2UudHlwZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwicHVsbC1yaWdodCBjaGF0LXRpbWUtdGV4dFwiPiR7dmlld1V0aWxzLmdldEZvcm1hdHRlZERhdGVVdGlsKG1lc3NhZ2UudGltZXN0YW1wKX08L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPmApO1xyXG4gICAgICAgICAgICBhZGRUb0xpc3QoaXNBcHBlbnRQcmV2TXNnLCAkbGksIGNMaXN0KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBhZGRQYWdpbmF0aW9uKCR3cmFwcGVyLCBwYWdpbmF0aW9uKSB7XHJcbiAgICBjb25zdCBjdXJzb3IgPSBwYWdpbmF0aW9uLnByZXZfY3Vyc29yO1xyXG4gICAgY29uc3QgJGJ1dHRvbiA9ICQoYDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSBsb2FkLW1vcmUgZC1mbGV4IHBvc2l0aW9uLWFic29sdXRlXCIgc3R5bGU9XCJ0b3A6IC00MnB4O1wiXHJcbiAgICAgICAgZGF0YS1jdXJzb3I9XCIke2N1cnNvcn1cIj7QtdGJ0LUg0LTQsNCy0LDQuSE8L2J1dHRvbj5gKTtcclxuXHJcbiAgICBpZiAoISR3cmFwcGVyLmNsb3Nlc3QoJy5tZXNzYWdlcy1saXN0LWJveCcpLmZpbmQoJy5sb2FkLW1vcmUnKS5sZW5ndGgpIHtcclxuICAgICAgICAkYnV0dG9uLmluc2VydEJlZm9yZSgkd3JhcHBlcikub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdXNlckRhdGEgPSAkKCcubWVzc2FnZXMtbGlzdCcpLmRhdGEoJ2NvbnZlcnNhdGlvbicpO1xyXG4gICAgICAgICAgICBjb25zdCB7dXNlcm5hbWUsIGNvbnZlcnNhdGlvbklkfSA9IHVzZXJEYXRhO1xyXG4gICAgICAgICAgICBTcGlubmVyLnN0YXJ0QnV0dG9uU3Bpbm5lcigkYnV0dG9uKTtcclxuICAgICAgICAgICAgVXNlckNvbnZlcnNhdGlvbi5nZXRNZXRhZGF0YURldGFpbENvbnZlcnNhdGlvbih0b2tlbiwge3VzZXJuYW1lLCBjb252ZXJzYXRpb25JZCwgY3Vyc29yfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVjZWl2ZSBtc2cnLCByZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgU3Bpbm5lci5zdG9wQnV0dG9uU3Bpbm5lcigkYnV0dG9uKTtcclxuICAgICAgICAgICAgICAgIGZpbGxMaXN0KCRtc2dMaXN0LCByZXN1bHQuZGF0YS5tZXRhLm1lc3NhZ2VzLCAnYXBwZW50UHJldk1zZycpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4vLyBtZXNzYWdlcy11c2VyLWxpc3RcclxuZnVuY3Rpb24gZmlsbFVzZXJMaXN0KCRsaXN0LCBkYXRhQXJyYXkpIHtcclxuICAgIGNvbnN0IGl0ZW1zID0gZGF0YUFycmF5Lm1ldGE7XHJcbiAgICBjb25zdCBjTGlzdCA9ICRsaXN0O1xyXG4gICAgY29uc3QgY29udmVyc2F0aW9uRGV0YWlsID0gZnVuY3Rpb24oaXRlbXMpIHtcclxuICAgICAgICBsZXQgdHBsID0gJyc7XHJcbiAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXRlbXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgdHBsICs9IGA8aW1nIHNyYz1cIiR7aXRlbVsncHJvZmlsZV9waWNfdXJsJ119XCIgY2xhc3M9XCJtZWRpYS1waG90byBtci0xIG1lZGlhLXBob3RvLS1ncm91cFwiIHN0eWxlPVwid2lkdGg6IDI0cHg7XCI+YDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRwbCArPSBgPGltZyBzcmM9XCIke2l0ZW1bJ3Byb2ZpbGVfcGljX3VybCddfVwiIGNsYXNzPVwibWVkaWEtcGhvdG8gbXItMVwiIHN0eWxlPVwid2lkdGg6IDI0cHg7XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAke2l0ZW0udXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L2g1PmA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoaXRlbXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICB0cGwgKz0gJzxoNSBjbGFzcz1cInRpdGxlXCI+0JPRgNGD0L/QvtCy0L7QuSDRh9Cw0YI8L2g1Pic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cGw7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgYWRkQ29udmVyc2F0aW9ucyA9IGZ1bmN0aW9uKGNvbnZlcnNhdGlvbnMpIHtcclxuICAgICAgICBsZXQgdHBsID0gJyc7XHJcbiAgICAgICAgY29udmVyc2F0aW9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHRwbCArPSBgPGRpdiBjbGFzcz1cIm1lZGlhIHAtMVwiIGRhdGEtY29udmVyc2F0aW9uLWlkPVwiJHtpdGVtLmlkfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7Y29udmVyc2F0aW9uRGV0YWlsKGl0ZW0udG8pfVxyXG4gICAgICAgICAgICAgICAgICAgICR7KGl0ZW1bJ2xhc3RfbWVzc2FnZSddICYmIChwYXJzZUludChpdGVtWydsYXN0X21lc3NhZ2UnXS5sZW5ndGgsIDEwKSkgPiAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGA8cCBjbGFzcz1cInN1bW1hcnkgJHtpdGVtWydpc191bnJlYWQnXSA/ICdmb250LXdlaWdodC1ib2xkJyA6ICd0ZXh0LW11dGVkJ31cIj4ke2l0ZW1bJ2xhc3RfbWVzc2FnZSddfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHtpdGVtWydpc191bnJlYWQnXSA/ICc8c3BhbiBjbGFzcz1cInN1bW1hcnktZG90XCI+PC9zcGFuPicgOiAnJ31gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRwbDtcclxuICAgIH07XHJcbiAgICBjTGlzdC5lbXB0eSgpLmFkZENsYXNzKCdib3JkZXItbGlnaHQtY29sb3InKTtcclxuICAgIC8vIHRvZG86IGZpeCBoYXJkLWNvZGUgIGltZyBzcmM9XCJodHRwczovL2kuaW1ndXIuY29tL2pOTlQ0TEUucG5nXCJcclxuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGlkeCkgPT4ge1xyXG4gICAgICAgICQoYDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbVwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNjb2xsYXBzZS0ke2lkeH1cIiBkYXRhLXVzZXJuYW1lPVwiJHtpdGVtLnVzZXJuYW1lfVwiIFxyXG4gICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cInRydWVcIiBhcmlhLWNvbnRyb2xzPVwiY29sbGFwc2UtJHtpZHh9XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYVwiIGlkPVwiaGVhZGluZy0ke2lkeH1cIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtci0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2kuaW1ndXIuY29tL2pOTlQ0TEUucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1lZGlhLXBob3RvXCI+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAkeyhpdGVtWyd1bnJlYWRfY29udmVyc2F0aW9ucyddID4gMCkgPyBgPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS1zZWNvbmRhcnkgcG9zaXRpb24tYWJzb2x1dGUgcC0yXCI+JHtpdGVtWyd1bnJlYWRfY29udmVyc2F0aW9ucyddfTwvc3Bhbj5gIDogJyd9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7aXRlbS51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiY29sbGFwc2UtJHtpZHh9XCIgY2xhc3M9XCJjb2xsYXBzZVwiIGFyaWEtbGFiZWxsZWRieT1cImhlYWRpbmctJHtpZHh9XCIgZGF0YS1wYXJlbnQ9XCIjYWNjb3JkaW9uXCI+XHJcbiAgICAgICAgICAgICAgICAke2FkZENvbnZlcnNhdGlvbnMoaXRlbS5jb252ZXJzYXRpb25zLCBpZHgpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5gKS5hcHBlbmRUbyhjTGlzdCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QW5kRmlsbFVzZXJMaXN0KGlzQWN0aXZlRmlyc3QpIHtcclxuICAgIGNvbnN0ICR1c2VyTGlzdCA9ICQoJy5tZXNzYWdlcy11c2VyLWxpc3QnKTtcclxuICAgIGNvbnN0IG1ldGFkYXRhID0gVXNlckNvbnZlcnNhdGlvbi5nZXRNZXRhZGF0YSh0b2tlbik7XHJcbiAgICBsZXQgcHJldkFjdGl2ZURpYWxvZ0lkID0gJyc7XHJcbiAgICBpZiAoIWlzQWN0aXZlRmlyc3QpIHtcclxuICAgICAgICBwcmV2QWN0aXZlRGlhbG9nSWQgPSAkdXNlckxpc3QuZmluZCgnbGkgLmNvbGxhcHNlLnNob3cnKS5hdHRyKCdpZCcpO1xyXG4gICAgfVxyXG4gICAgbWV0YWRhdGEudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgaWYgKCFyZXN1bHQuZGF0YSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc3VsdC5kYXRhLm1ldGEuc29ydCgoYSwgYikgPT4gYVsndXNlcm5hbWUnXS5sb2NhbGVDb21wYXJlKGJbJ3VzZXJuYW1lJ10pKTtcclxuICAgICAgICBmaWxsVXNlckxpc3QoJHVzZXJMaXN0LCByZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5kYXRhLnNldHRpbmdzICYmIHJlc3VsdC5kYXRhLnNldHRpbmdzLmludm9rZV9pbl9taWxsaXMpIHtcclxuICAgICAgICAgICAgdXBkYXRlSW50ZXJ2YWwgPSByZXN1bHQuZGF0YS5zZXR0aW5ncy5pbnZva2VfaW5fbWlsbGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNBY3RpdmVGaXJzdCkge1xyXG4gICAgICAgICAgICAkdXNlckxpc3QuZmluZCgnbGk6Zmlyc3QtY2hpbGQgLmNvbGxhcHNlJykuYWRkQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndHR0JywgcHJldkFjdGl2ZURpYWxvZ0lkKTtcclxuICAgICAgICAgICAgJChgIyR7cHJldkFjdGl2ZURpYWxvZ0lkfWApLmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFuZEZpbGxDb252ZXJzYXRpb24odXNlcm5hbWUsIGNvbnZlcnNhdGlvbklkLCBpc1Njcm9sbERvd24pIHtcclxuICAgIFVzZXJDb252ZXJzYXRpb24uZ2V0TWV0YWRhdGFEZXRhaWxDb252ZXJzYXRpb24odG9rZW4sIHt1c2VybmFtZSwgY29udmVyc2F0aW9uSWR9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBmaWxsTGlzdCgkbXNnTGlzdCwgcmVzdWx0LmRhdGEubWV0YS5tZXNzYWdlcyk7XHJcbiAgICAgICAgU3Bpbm5lci5yZW1vdmUoKTtcclxuICAgICAgICAkKCcuanNfc2VuZC1tZXNzYWdlLWJveCcpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAkKCcubWVzc2FnZXMtbGlzdCcpLmF0dHIoJ2RhdGEtY29udmVyc2F0aW9uJywgSlNPTi5zdHJpbmdpZnkoe3VzZXJuYW1lLCBjb252ZXJzYXRpb25JZH0pKTtcclxuXHJcbiAgICAgICAgaWYgKGlzU2Nyb2xsRG93bikge1xyXG4gICAgICAgICAgICAkbXNnTGlzdC5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogJG1zZ0xpc3RbMF0uc2Nyb2xsSGVpZ2h0IC0gJG1zZ0xpc3RbMF0uY2xpZW50SGVpZ2h0XHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmRhdGEubWV0YS5wYWdpbmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBhZGRQYWdpbmF0aW9uKCRtc2dMaXN0LCByZXN1bHQuZGF0YS5tZXRhLnBhZ2luYXRpb24pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCgnLm1lc3NhZ2VzLWxpc3QtYm94JykuZmluZCgnLmxvYWQtbW9yZScpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZEhhbmRsZXJzKCkge1xyXG4gICAgbGV0IGNvbnZlcnNhdGlvbklkID0gJyc7XHJcblxyXG4gICAgJCgnI3NlbmRNZXNzYWdlQnV0dG9uJykub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCAkdGV4dEFyZWEgPSAkKCcjc2VuZE1lc3NhZ2VUZXh0QXJlYScpO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gJHRleHRBcmVhLnZhbCgpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJEYXRhID0gJCgnLm1lc3NhZ2VzLWxpc3QnKS5kYXRhKCdjb252ZXJzYXRpb24nKTtcclxuICAgICAgICBjb25zdCB7dXNlcm5hbWUsIGNvbnZlcnNhdGlvbklkfSA9IHVzZXJEYXRhO1xyXG4gICAgICAgIFNwaW5uZXIuYWRkKCQoZS50YXJnZXQpLCAnc3Bpbm5lci1ib3gtLXNlbmRNc2cnKTtcclxuICAgICAgICBVc2VyQ29udmVyc2F0aW9uLnBvc3RNZXRhZGF0YURldGFpbENvbnZlcnNhdGlvbih0b2tlbiwge3VzZXJuYW1lLCBjb252ZXJzYXRpb25JZCwgdmFsdWV9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuc3RhdHVzICYmIHJlc3VsdC5zdGF0dXMuc3RhdGUgPT09ICdvaycpIHtcclxuICAgICAgICAgICAgICAgIGdldEFuZEZpbGxDb252ZXJzYXRpb24odXNlcm5hbWUsIGNvbnZlcnNhdGlvbklkKTtcclxuICAgICAgICAgICAgICAgICR0ZXh0QXJlYS52YWwoJycpO1xyXG4gICAgICAgICAgICAgICAgU3Bpbm5lci5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5QdWJTdWIucHVibGlzaChDT05TVC5ldmVudHMubWVzc2FnZXMuUkVDSUVWRV9ORVdfTUVTU0FHRSwge3VzZXJuYW1lLCBjb252ZXJzYXRpb25JZCwgdmFsdWUsIHJlc3VsdH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubGlzdC1ncm91cC1pdGVtIC5jb2xsYXBzZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLmxpc3QtZ3JvdXAtaXRlbScpLmRhdGEoJ3VzZXJuYW1lJyk7XHJcbiAgICAgICAgY29udmVyc2F0aW9uSWQgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcubWVkaWEnKS5kYXRhKCdjb252ZXJzYXRpb24taWQnKTtcclxuICAgICAgICBTcGlubmVyLmFkZCgkKCcjbWFpbkNoYXRQYXJ0JyksICdteS01IHB5LTUnKTtcclxuICAgICAgICBnZXRBbmRGaWxsQ29udmVyc2F0aW9uKHVzZXJuYW1lLCBjb252ZXJzYXRpb25JZCwgJ2lzU2Nyb2xsRG93bicpO1xyXG4gICAgICAgIHVwZGF0ZUludGVydmFsID0gKHVwZGF0ZUludGVydmFsID4gNjAwMCkgPyB1cGRhdGVJbnRlcnZhbCA6IDE1MDAwO1xyXG4gICAgICAgIC8vIHJlc2VuZCByZXF1ZXN0XHJcbiAgICAgICAgaWYgKGludGVydmFsSWQpIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgY29udmVyc2F0aW9uSWQgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcubWVkaWEnKS5kYXRhKCdjb252ZXJzYXRpb24taWQnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coaW50ZXJ2YWxJZCwgY29udmVyc2F0aW9uSWQpO1xyXG4gICAgICAgICAgICBnZXRBbmRGaWxsQ29udmVyc2F0aW9uKHVzZXJuYW1lLCBjb252ZXJzYXRpb25JZCk7XHJcbiAgICAgICAgICAgIGdldEFuZEZpbGxVc2VyTGlzdCgpO1xyXG4gICAgICAgIH0sIHVwZGF0ZUludGVydmFsKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHdpbmRvdy5QdWJTdWIuc3Vic2NyaWJlKENPTlNULmV2ZW50cy5tZXNzYWdlcy5SRUNJRVZFX05FV19NRVNTQUdFLCAoZXZlbnROYW1lLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc3Qge3VzZXJuYW1lLCBjb252ZXJzYXRpb25JZCwgdmFsdWUsIHJlc3VsdEZyb21TZXJ2ZXJ9ID0gZGF0YTtcclxuICAgICAgICBjb25zdCAkZGlhbG9nID0gJChgLm1lc3NhZ2VzLXVzZXItbGlzdCAubGlzdC1ncm91cC1pdGVtW2RhdGEtdXNlcm5hbWU9XCIke3VzZXJuYW1lfVwiXSBkaXZbZGF0YS1jb252ZXJzYXRpb24taWQ9XCIke2NvbnZlcnNhdGlvbklkfVwiXWApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzZXQgdmFsIGZyb20gdGV4dC1hcmVhJywgdmFsdWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXN1bHRGcm9tU2VydmVyOiAnLCByZXN1bHRGcm9tU2VydmVyKTtcclxuICAgICAgICAkZGlhbG9nLmZpbmQoJy5zdW1tYXJ5JykudGV4dCh2YWx1ZSk7XHJcblxyXG4gICAgICAgIC8vIG1ldGFkYXRhLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBmaWxsVXNlckxpc3QoJHVzZXJMaXN0LCByZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgLy8gICAgIGlmIChyZXN1bHQuZGF0YS5zZXR0aW5ncyAmJiByZXN1bHQuZGF0YS5zZXR0aW5ncy5pbnZva2VfaW5fbWlsbGlzKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB1cGRhdGVJbnRlcnZhbCA9IHJlc3VsdC5kYXRhLnNldHRpbmdzLmludm9rZV9pbl9taWxsaXM7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIC8vIGNoZWNrIHdlIGFyZSBpbiBjb3JyZWN0IHBhZ2UgKG1lc3NhZ2VzKVxyXG4gICAgaWYgKCFpc0luTWVzc2FnZVBhZ2UoKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbmRGaWxsVXNlckxpc3QoJ3NldEFjdGl2ZUZpcnN0Jyk7XHJcbiAgICBhZGRIYW5kbGVycygpO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3MvbWVzc2FnZXMvbWVzc2FnZXMuanMiLCIvLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgUHViU3ViIGZyb20gJ3B1YnN1Yi1qcyc7IC8vIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3B1YnN1Yi1qc1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdXNlcic7XHJcbmltcG9ydCBjb29raWVTdG9yYWdlIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb29raWUnO1xyXG5pbXBvcnQge0NPTlNUfSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29uc3RzJztcclxuaW1wb3J0IHZpZXdVdGlscyBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdmlldyc7XHJcblxyXG5jb25zdCBzZWxlY3RvckNscyA9IHtcclxuICAgIGZvcm06ICcuYXV0aC5yZWdpc3RlciAuZm9ybS1zaWduaW4nLFxyXG4gICAgc3VibWl0QnRuOiAnW3R5cGU9XCJzdWJtaXRcIl0nXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZ2lzdGVyRm9ybSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnVzZXIgPSBVc2VyO1xyXG4gICAgICAgIHRoaXMuJGZvcm0gPSAkKHNlbGVjdG9yQ2xzLmZvcm0pO1xyXG4gICAgICAgIHRoaXMuJGVtYWlsID0gdGhpcy4kZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwibWFpbFwiXScpO1xyXG4gICAgICAgIHRoaXMuJHRleHRBcmVhRGVzY3JpcHRpb24gPSAkKCcjZGVzY3JpcHRpb24nKTtcclxuICAgICAgICB0aGlzLmZvcm1EYXRhID0geydlbWFpbCc6ICd0ZXN0MV9lbWFpbEBtLnJ1JywgJ3Bhc3N3b3JkJzogJ3Bhc3N3b3JkJ307XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBpZiAoJCgnLmF1dGgucmVnaXN0ZXInKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN1Ym1pdEZvcm0oZm9ybURhdGFPYmopIHtcclxuICAgICAgICBjb25zdCBlbWFpbCA9IHRoaXMuJGVtYWlsLnZhbCgpO1xyXG4gICAgICAgIGNvbnN0ICRwYXNzd29yZCA9IHRoaXMuJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cInBhc3NcIl0nKSxcclxuICAgICAgICAgICAgJHBhc3N3b3JkQ29uZmlybSA9IHRoaXMuJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cInBhc3MtY29uZmlybVwiXScpLFxyXG4gICAgICAgICAgICBwYXNzd29yZCA9IHRoaXMuJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cInBhc3NcIl0nKS52YWwoKSxcclxuICAgICAgICAgICAgcGFzc3dvcmRDb25maXJtID0gdGhpcy4kZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwicGFzcy1jb25maXJtXCJdJykudmFsKCk7XHJcblxyXG4gICAgICAgIGlmIChwYXNzd29yZENvbmZpcm0gIT09IHBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgICRwYXNzd29yZC5hZGRDbGFzcygnaW5wdXQtZXJyb3InKTtcclxuICAgICAgICAgICAgJHBhc3N3b3JkQ29uZmlybS5hZGRDbGFzcygnaW5wdXQtZXJyb3InKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLiRlbWFpbC52YWwodGhpcy4kZW1haWwudmFsKCkudG9Mb2NhbGVMb3dlckNhc2UoKSk7XHJcbiAgICAgICAgdGhpcy5mb3JtRGF0YSA9IGZvcm1EYXRhT2JqIHx8IHtlbWFpbCwgcGFzc3dvcmR9O1xyXG5cclxuICAgICAgICB0aGlzLnVzZXIucmVnaXN0ZXIodGhpcy5mb3JtRGF0YSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5kYXRhICYmIHJlc3VsdC5kYXRhLnRva2VuKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNhdmUgdGhlIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBjb29raWVTdG9yYWdlLnNldChDT05TVC5jb29raWVTdG9yYWdlLmVtYWlsQ29uZmlybWVkLCAnZmFsc2UnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29va2llU3RvcmFnZS5zZXQoQ09OU1QuY29va2llU3RvcmFnZS50b2tlbiwgcmVzdWx0LmRhdGEudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXF1ZXN0IHN1Y2NlZWRlZCB3aXRoIEpTT04gcmVzcG9uc2UnLCByZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIFB1YlN1Yi5wdWJsaXNoKENPTlNULmV2ZW50cy5VU0VSX0xPR0dFRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSh0aGlzLiR0ZXh0QXJlYURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLm1lc3NhZ2UgfHwgJ1JlZ2lzdGVyIGFuZCBMb2dpbiBzdWNjc2VzcycpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKHRoaXMuJHRleHRBcmVhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMubWVzc2FnZSB8fCAnbm8gcmVzdWx0LmRhdGEgZm91bmQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UodGhpcy4kdGV4dEFyZWFEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5zdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmxvZ2luLWJveCcpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVxdWVzdCBmYWlsZWQnLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKHRoaXMuJHRleHRBcmVhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZG8gc29tZXRoaW5nJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcbiAgICAgICAgY29uc3QgcmVnaXN0ZXJCb3ggPSBDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJSZWdCb3g7IC8vICduYXYgLnJlZ2lzdGVyLWJveCc7XHJcbiAgICAgICAgY29uc3Qgb3BlbmVkQ2xhc3MgPSAnZC1ibG9jayc7XHJcbiAgICAgICAgY29uc3QgY2xvc2VDbGFzcyA9ICdkLW5vbmUnO1xyXG4gICAgICAgIGNvbnN0ICRidG4gPSAkKHNlbGVjdG9yQ2xzLnN1Ym1pdEJ0biksXHJcbiAgICAgICAgICAgIGNzc1ZhbGlkYXRpb25DbGFzcyA9ICdmb3JtLXZhbGlkYXRpb24nO1xyXG5cclxuICAgICAgICAkYnRuLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSB0aGlzLiRmb3JtLmdldCgwKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCEkYnRuLmlzKCc6ZGlzYWJsZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZvcm0uY2hlY2tWYWxpZGl0eSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gJGJ0bi5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0Rm9ybSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBIaWdobGlnaHQgZXJyb3JzXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm0ucmVwb3J0VmFsaWRpdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRmb3JtLmFkZENsYXNzKGNzc1ZhbGlkYXRpb25DbGFzcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzUmVnQnRuQ2xpY2sgPSAkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnbmF2Lm5hdmJhcicpLmZpbmQoJy5yZWdpc3Rlci1ib3gnKS5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWlzUmVnQnRuQ2xpY2sgJiYgJChyZWdpc3RlckJveCkuaGFzQ2xhc3Mob3BlbmVkQ2xhc3MpKSB7XHJcbiAgICAgICAgICAgICAgICAkKHJlZ2lzdGVyQm94KS5hZGRDbGFzcyhjbG9zZUNsYXNzKS5yZW1vdmVDbGFzcyhvcGVuZWRDbGFzcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL3JlZ2lzdGVyLWZvcm0vcmVnaXN0ZXItZm9ybS5qcyIsIi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCB7Q09OU1R9IGZyb20gJy4vY29uc3RzJztcclxuaW1wb3J0IE5ldHdvcmsgZnJvbSAnLi9uZXR3b3JrJztcclxuaW1wb3J0IENvb2tpZVN0b3JhZ2UgZnJvbSAnLi9jb29raWUnO1xyXG5cclxuY2xhc3MgVXNlckNvbnZlcnNhdGlvbiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5uZXR3b3JrID0gbmV3IE5ldHdvcmsoKTtcclxuICAgICAgICB0aGlzLmNvb2tpZVN0b3JhZ2UgPSBDb29raWVTdG9yYWdlO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ1Bvc3QgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBpc0xvZ2dlZEluKCkge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMuZ2V0VG9rZW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0VtYWlsQ29uZmlybWVkKCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5jb29raWVTdG9yYWdlLmdldChDT05TVC5jb29raWVTdG9yYWdlLmVtYWlsQ29uZmlybWVkKSA9PT0gJ2NvbmZpcm1lZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRva2VuKCkge1xyXG4gICAgICAgIGNvbnN0IGNvb2tpZVRva2VuID0gdGhpcy5jb29raWVTdG9yYWdlLmdldChDT05TVC5jb29raWVTdG9yYWdlLnRva2VuKTtcclxuICAgICAgICByZXR1cm4gY29va2llVG9rZW47XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWV0YWRhdGEodG9rZW4sIGNiRXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KGAke0NPTlNULmdldFBhdGgoJ2luc3RhZ3JhbURpcmVjdF9nZXRNZXRhRGF0YScpfWAsIHtoZWFkZXJzOiB7dG9rZW59fSwgY2JFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWV0YWRhdGFEZXRhaWxDb252ZXJzYXRpb24odG9rZW4sIGRldGFpbHMsIGNiRXJyb3IpIHtcclxuICAgICAgICBjb25zdCBjdXJzb3IgPSAoZGV0YWlscy5jdXJzb3IpID8gYD9jdXJzb3I9JHtkZXRhaWxzLmN1cnNvcn1gIDogJyc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChgJHtDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1EaXJlY3RfZ2V0TWV0YURhdGEnKX0vJHtkZXRhaWxzLnVzZXJuYW1lfS8ke2RldGFpbHMuY29udmVyc2F0aW9uSWR9JHtjdXJzb3J9YCxcclxuICAgICAgICAgICAge2hlYWRlcnM6IHt0b2tlbn19LCBjYkVycm9yKTtcclxuICAgIH1cclxuICAgIHBvc3RNZXRhZGF0YURldGFpbENvbnZlcnNhdGlvbih0b2tlbiwgZGV0YWlscywgY2JFcnJvcikge1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSB7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsndmFsdWUnOiBkZXRhaWxzLnZhbHVlfSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QuaGVhZGVycyxcclxuICAgICAgICAgICAgICAgICd0b2tlbic6IHRoaXMuZ2V0VG9rZW4oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KGAke0NPTlNULmdldFBhdGgoJ2luc3RhZ3JhbURpcmVjdF9wb3N0TWVzc2FnZScpfS8ke2RldGFpbHMudXNlcm5hbWV9LyR7ZGV0YWlscy5jb252ZXJzYXRpb25JZH0vdGV4dGAsXHJcbiAgICAgICAgICAgIHNldHRpbmcsIGNiRXJyb3IpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxubGV0IHVzZXJJbnN0YW5jZSA9IG51bGw7XHJcblxyXG5pZiAoIXVzZXJJbnN0YW5jZSkge1xyXG4gICAgdXNlckluc3RhbmNlID0gbmV3IFVzZXJDb252ZXJzYXRpb24oKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlckluc3RhbmNlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uL2pzLXNlcnZpY2VzL2FwaS11c2VyLWRpcmVjdC5qcyIsIi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbi8vIGltcG9ydCB7Q09OU1R9IGZyb20gJy4vY29uc3RzJztcclxuLy8gaW1wb3J0IE5ldHdvcmsgZnJvbSAnLi9uZXR3b3JrJztcclxuLy8gaW1wb3J0IENvb2tpZVN0b3JhZ2UgZnJvbSAnLi9jb29raWUnO1xyXG4vLyBpbXBvcnQgUHViU3ViIGZyb20gJ3B1YnN1Yi1qcyc7IC8vIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3B1YnN1Yi1qc1xyXG5cclxuLy8gY29uc3QgU1BJTk5FUl9CQVNFX1RFTVBBTEFURSA9ICdqcy91aS90cGwvc3Bpbm5lci5oYnMnO1xyXG5jb25zdCBjbGFzc2VzID0ge1xyXG4gICAgaW5saW5lOiAnZ2xvYmFsLWlubGluZS1zcGlubmVyJyxcclxuICAgIG92ZXJsYXk6ICdnbG9iYWwtb3ZlcmxheS1zcGlubmVyJyxcclxuICAgIGZpeGVkOiAnZ2xvYmFsLWZpeGVkLXNwaW5uZXInLFxyXG4gICAgYnV0dG9uOiAnYnV0dG9uLS1sb2FkJ1xyXG59O1xyXG4vLyBjb25zdCBoYW5kbGViYXJzVHBsID0gZnVuY3Rpb24gKG5hbWUsIGRhdGEsICR0YXJnZXQpIHtcclxuLy8gICAgIC8vIHZhciBodG1sID0gdGhpcy5nZXRUZW1wbGF0ZShuYW1lKShkYXRhKTtcclxuLy8gICAgIHZhciBodG1sID0gSGFuZGxlYmFycy5jb21waWxlKHRlbXBsYXRlKTtcclxuLy9cclxuLy8gICAgIGlmICgkdGFyZ2V0KSB7XHJcbi8vICAgICAgICAgLy9mb3IgcHJldmVudGluZyB4c3NcclxuLy8gICAgICAgICAkdGFyZ2V0WzBdLmlubmVySFRNTCA9IGh0bWw7XHJcbi8vICAgICB9XHJcbi8vXHJcbi8vICAgICByZXR1cm4gaHRtbDtcclxuLy8gfTtcclxuLy8gY29uc3QgaGFuZGxlYmFycyA9IHRoaXMuZ2V0U2VydmljZSgnY29yZS50ZW1wbGF0aW5nLmhhbmRsZWJhcnMnKTtcclxuXHJcbmNsYXNzIFNwaW5uZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKF9jZmcpIHtcclxuICAgICAgICB0aGlzLmNmZyA9IF9jZmcgfHwge307XHJcbiAgICAgICAgLy8gdGhpcy4kZGVmYXVsdENvbnRhaW5lciA9ICQoJ2JvZHknKTtcclxuICAgICAgICAkLmV4dGVuZChjbGFzc2VzLCB0aGlzLmNmZy5jbGFzc2VzKTtcclxuICAgICAgICAvLyB0aGlzLl9tZWRpYXRvci5zdWJzY3JpYmUoQ09OU1QuZXZlbnRzLlNUT1BfRklYRURfU1BJTk5FUiwgdGhpcy5zdG9wRml4ZWRTcGlubmVyLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG4gICAgLy8gX21lZGlhdG9yID0gUHViU3ViO1xyXG5cclxuICAgIHN0YXJ0KCRlbCwgcHJld0Nscykge1xyXG4gICAgICAgIC8vIGlmIChhZGRPclJlbW92ZSkge1xyXG4gICAgICAgIC8vICAgICAkKCcjZm9vJykuYWRkQ2xhc3MoY2xhc3NOYW1lKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICQoJyNmb28nKS5yZW1vdmVDbGFzcyhjbGFzc05hbWUpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAkZWwuZmluZCgnaScpLnRvZ2dsZUNsYXNzKHByZXdDbHMpLmFkZENsYXNzKCdmYS1zcGluIGZhLXNwaW5uZXInKTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wKCRlbCwgbmV3Q2xzKSB7XHJcbiAgICAgICAgJGVsLmZpbmQoJ2knKS50b2dnbGVDbGFzcyhuZXdDbHMpLnJlbW92ZUNsYXNzKCdmYS1zcGluIGZhLXNwaW5uZXInKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGQoJGVsLCBuZXdDbHMpIHtcclxuICAgICAgICB0aGlzLiRlbCA9ICRlbDtcclxuICAgICAgICAkZWwucHJlcGVuZChgPGRpdiBjbGFzcz1cInNwaW5uZXItYm94IGp1c3RpZnktY29udGVudC1jZW50ZXIgJHtuZXdDbHN9XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGluLWFuaW1hdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBkYXRhLXByZWZpeD1cImZhclwiIGRhdGEtaWNvbj1cInN5bmMtYWx0XCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiBjbGFzcz1cInN2Zy1pbmxpbmUtLWZhIGZhLXN5bmMtYWx0IGZhLXctMTYgZmEtZncgZmEtMnhcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk00ODMuNTE1IDI4LjQ4NUw0MzEuMzUgODAuNjVDMzg2LjQ3NSAzNS43NjcgMzI0LjQ4NSA4IDI1NiA4IDEyMy4yMjggOCAxNC44MjQgMTEyLjMzOCA4LjMxIDI0My40OTMgNy45NzEgMjUwLjMxMSAxMy40NzUgMjU2IDIwLjMwMSAyNTZoMjguMDQ1YzYuMzUzIDAgMTEuNjEzLTQuOTUyIDExLjk3My0xMS4yOTRDNjYuMTYxIDE0MS42NDkgMTUxLjQ1MyA2MCAyNTYgNjBjNTQuMTYzIDAgMTAzLjE1NyAyMS45MjMgMTM4LjYxNCA1Ny4zODZsLTU0LjEyOCA1NC4xMjljLTcuNTYgNy41Ni0yLjIwNiAyMC40ODUgOC40ODUgMjAuNDg1SDQ5MmM2LjYyNyAwIDEyLTUuMzczIDEyLTEyVjM2Ljk3MWMwLTEwLjY5MS0xMi45MjYtMTYuMDQ1LTIwLjQ4NS04LjQ4NnpNNDkxLjY5OSAyNTZoLTI4LjA0NWMtNi4zNTMgMC0xMS42MTMgNC45NTItMTEuOTczIDExLjI5NEM0NDUuODM5IDM3MC4zNTEgMzYwLjU0NyA0NTIgMjU2IDQ1MmMtNTQuMTYzIDAtMTAzLjE1Ny0yMS45MjMtMTM4LjYxNC01Ny4zODZsNTQuMTI4LTU0LjEyOWM3LjU2LTcuNTYgMi4yMDYtMjAuNDg1LTguNDg1LTIwLjQ4NUgyMGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnYxNDMuMDI5YzAgMTAuNjkxIDEyLjkyNiAxNi4wNDUgMjAuNDg1IDguNDg1TDgwLjY1IDQzMS4zNUMxMjUuNTI1IDQ3Ni4yMzMgMTg3LjUxNiA1MDQgMjU2IDUwNGMxMzIuNzczIDAgMjQxLjE3Ni0xMDQuMzM4IDI0Ny42OS0yMzUuNDkzLjMzOS02LjgxOC01LjE2NS0xMi41MDctMTEuOTkxLTEyLjUwN3pcIiBjbGFzcz1cIlwiPjwvcGF0aD48L3N2Zz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKCkge1xyXG4gICAgICAgIHRoaXMuJGVsLmZpbmQoJy5zcGlubmVyLWJveCcpLnJlbW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBzcGlubmVyIGljb24gb24gYnV0dG9uIGJlZm9yZSB0aGUgYnV0dG9uIHRleHRcclxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkZWxcclxuICAgICAqL1xyXG4gICAgc3RhcnRCdXR0b25TcGlubmVyID0gZnVuY3Rpb24gKCRlbCwgbmV3Q2xzKSB7XHJcbiAgICAgICAgJGVsLmFkZENsYXNzKGNsYXNzZXMuYnV0dG9uKTtcclxuICAgICAgICAkZWwucHJlcGVuZChgPGRpdiBjbGFzcz1cInNwaW5uZXItYm94IHNwaW5uZXItYm94LS1idXR0b24ganVzdGlmeS1jb250ZW50LWNlbnRlciBwb3NpdGlvbi1yZWxhdGl2ZSBwLTAgbS0wIGJnLXRyYW5zcGFyZW50ICR7bmV3Q2xzfVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3Bpbi1hbmltYXRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZGF0YS1wcmVmaXg9XCJmYXJcIiBkYXRhLWljb249XCJzeW5jLWFsdFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmYS1md1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTQ4My41MTUgMjguNDg1TDQzMS4zNSA4MC42NUMzODYuNDc1IDM1Ljc2NyAzMjQuNDg1IDggMjU2IDggMTIzLjIyOCA4IDE0LjgyNCAxMTIuMzM4IDguMzEgMjQzLjQ5MyA3Ljk3MSAyNTAuMzExIDEzLjQ3NSAyNTYgMjAuMzAxIDI1NmgyOC4wNDVjNi4zNTMgMCAxMS42MTMtNC45NTIgMTEuOTczLTExLjI5NEM2Ni4xNjEgMTQxLjY0OSAxNTEuNDUzIDYwIDI1NiA2MGM1NC4xNjMgMCAxMDMuMTU3IDIxLjkyMyAxMzguNjE0IDU3LjM4NmwtNTQuMTI4IDU0LjEyOWMtNy41NiA3LjU2LTIuMjA2IDIwLjQ4NSA4LjQ4NSAyMC40ODVINDkyYzYuNjI3IDAgMTItNS4zNzMgMTItMTJWMzYuOTcxYzAtMTAuNjkxLTEyLjkyNi0xNi4wNDUtMjAuNDg1LTguNDg2ek00OTEuNjk5IDI1NmgtMjguMDQ1Yy02LjM1MyAwLTExLjYxMyA0Ljk1Mi0xMS45NzMgMTEuMjk0QzQ0NS44MzkgMzcwLjM1MSAzNjAuNTQ3IDQ1MiAyNTYgNDUyYy01NC4xNjMgMC0xMDMuMTU3LTIxLjkyMy0xMzguNjE0LTU3LjM4Nmw1NC4xMjgtNTQuMTI5YzcuNTYtNy41NiAyLjIwNi0yMC40ODUtOC40ODUtMjAuNDg1SDIwYy02LjYyNyAwLTEyIDUuMzczLTEyIDEydjE0My4wMjljMCAxMC42OTEgMTIuOTI2IDE2LjA0NSAyMC40ODUgOC40ODVMODAuNjUgNDMxLjM1QzEyNS41MjUgNDc2LjIzMyAxODcuNTE2IDUwNCAyNTYgNTA0YzEzMi43NzMgMCAyNDEuMTc2LTEwNC4zMzggMjQ3LjY5LTIzNS40OTMuMzM5LTYuODE4LTUuMTY1LTEyLjUwNy0xMS45OTEtMTIuNTA3elwiIGNsYXNzPVwiXCI+PC9wYXRoPjwvc3ZnPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5gKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgc3Bpbm5lciBpY29uIGZyb20gYnV0dG9uXHJcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJGVsXHJcbiAgICAgKi9cclxuICAgIHN0b3BCdXR0b25TcGlubmVyID0gZnVuY3Rpb24gKCRlbCkge1xyXG4gICAgICAgICRlbC5yZW1vdmVDbGFzcyhjbGFzc2VzLmJ1dHRvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGaW5kcyBzcGlubmVyc1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAkY29udGFpbmVyXHJcbiAgICAgKiBAcmV0dXJuIHs/alF1ZXJ5fSBzcGlubmVyc1xyXG4gICAgICovXHJcbiAgICAvLyBfZmluZFNwaW5uZXIgPSBmdW5jdGlvbiAodHlwZSwgJGNvbnRhaW5lcikge1xyXG4gICAgLy8gICAgIGNvbnN0IHNlbGVjdG9yID0gJy4nICsgdHlwZTtcclxuICAgIC8vICAgICBsZXQgJGVsID0gdGhpcy4kZGVmYXVsdENvbnRhaW5lcjtcclxuICAgIC8vICAgICBpZiAoJGNvbnRhaW5lcikge1xyXG4gICAgLy8gICAgICAgICAkZWwgPSAkY29udGFpbmVyO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vXHJcbiAgICAvLyAgICAgaWYgKCRlbC5maW5kKHNlbGVjdG9yKS5sZW5ndGggPiAwKSB7XHJcbiAgICAvLyAgICAgICAgIHJldHVybiAkZWwuZmluZChzZWxlY3Rvcik7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gJGVsXHJcbiAgICAgKi9cclxuICAgIC8qXHJcbiAgICBzdGFydENvbnRlbnRTcGlubmVyID0gZnVuY3Rpb24gKCRlbCkge1xyXG4gICAgICAgIGNvbnN0IGh0bWwgPSBoYW5kbGViYXJzVHBsKFxyXG4gICAgICAgICAgICBTUElOTkVSX0JBU0VfVEVNUEFMQVRFLCB7XHJcbiAgICAgICAgICAgICAgICBpbWdTcmM6IENUQy5VUkxTLldBSVRJTkdfSU1BR0UsXHJcbiAgICAgICAgICAgICAgICAnY2xhc3MnOiBjbGFzc2VzLm92ZXJsYXlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgJGVsLnByZXBlbmQoaHRtbCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXJ0SW5saW5lQ29udGVudFNwaW5uZXIgPSBmdW5jdGlvbiAoJGVsKSB7XHJcbiAgICAgICAgY29uc3QgaHRtbCA9IGhhbmRsZWJhcnNUcGwoXHJcbiAgICAgICAgICAgIFNQSU5ORVJfQkFTRV9URU1QQUxBVEUsIHtcclxuICAgICAgICAgICAgICAgIGltZ1NyYzogQ1RDLlVSTFMuV0FJVElOR19JTUFHRSxcclxuICAgICAgICAgICAgICAgICdjbGFzcyc6IGNsYXNzZXMuaW5saW5lXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICRlbC5wcmVwZW5kKGh0bWwpO1xyXG4gICAgfTtcclxuICAgICovXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdGFydHMgZ2xvYmFsIGZ1bGwgcGFnZSBmaXhlZCBzcGlubmVyXHJcbiAgICAgKi9cclxuICAgIC8qXHJcbiAgICBzdGFydEZpeGVkU3Bpbm5lciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBzcGlubmVycyA9IHRoaXMuX2ZpbmRTcGlubmVyKGNsYXNzZXMuZml4ZWQpO1xyXG4gICAgICAgIGlmICghKENUQy5pc0VkaXQoKSB8fCBDVEMuaXNEZXNpZ24oKSkgJiYgIXNwaW5uZXJzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGh0bWwgPSBoYW5kbGViYXJzVHBsKFxyXG4gICAgICAgICAgICAgICAgU1BJTk5FUl9CQVNFX1RFTVBBTEFURSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGltZ1NyYzogQ1RDLlVSTFMuV0FJVElOR19JTUFHRSxcclxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiBjbGFzc2VzLmZpeGVkXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy4kZGVmYXVsdENvbnRhaW5lci5wcmVwZW5kKGh0bWwpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAqL1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RvcHMgc3Bpbm5lcnNcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gJGNvbnRhaW5lclxyXG4gICAgICovXHJcbiAgICAvLyBfc3RvcFNwaW5uZXIgPSBmdW5jdGlvbiAodHlwZSwgJGNvbnRhaW5lcikge1xyXG4gICAgLy8gICAgIGNvbnN0IHNwaW5uZXJzID0gdGhpcy5fZmluZFNwaW5uZXIodHlwZSwgJGNvbnRhaW5lcik7XHJcbiAgICAvLyAgICAgaWYgKHNwaW5uZXJzKSB7XHJcbiAgICAvLyAgICAgICAgIHNwaW5uZXJzLnJlbW92ZSgpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9ICRlbFxyXG4gICAgICovXHJcbiAgICAvLyBzdG9wQ29udGVudFNwaW5uZXIgPSBmdW5jdGlvbiAoJGVsKSB7XHJcbiAgICAvLyAgICAgJGVsLmZpbmQoJy4nICsgY2xhc3Nlcy5vdmVybGF5KS5yZW1vdmUoKTtcclxuICAgIC8vIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9ICRlbFxyXG4gICAgICovXHJcbiAgICAvLyBzdG9wSW5saW5lQ29udGVudFNwaW5uZXIgPSBmdW5jdGlvbiAoJGVsKSB7XHJcbiAgICAvLyAgICAgJGVsLmZpbmQoJy4nICsgY2xhc3Nlcy5pbmxpbmUpLnJlbW92ZSgpO1xyXG4gICAgLy8gfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0b3BzIGdsb2JhbCBmdWxsIHBhZ2UgZml4ZWQgc3Bpbm5lclxyXG4gICAgICovXHJcbiAgICAvLyBzdG9wRml4ZWRTcGlubmVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gICAgIHRoaXMuX3N0b3BTcGlubmVyKGNsYXNzZXMuZml4ZWQpO1xyXG4gICAgLy8gfTtcclxufVxyXG5cclxubGV0IHNwaW5uZXJJbnN0YW5jZSA9IG51bGw7XHJcblxyXG5pZiAoIXNwaW5uZXJJbnN0YW5jZSkge1xyXG4gICAgc3Bpbm5lckluc3RhbmNlID0gbmV3IFNwaW5uZXIoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3Bpbm5lckluc3RhbmNlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uL2pzLXNlcnZpY2VzL3NwaW5uZXIuanMiLCIvKiBlc2xpbnQtZGlzYWJsZSBzb3J0LXZhcnMgKi9cclxuLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3VzZXInO1xyXG5pbXBvcnQgUHViU3ViIGZyb20gJ3B1YnN1Yi1qcyc7IC8vIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3B1YnN1Yi1qc1xyXG5pbXBvcnQgY29va2llU3RvcmFnZSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29va2llJztcclxuLy8gaW1wb3J0IFZhbGlkYXRvciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvZm9ybS12YWxpZGF0b3InO1xyXG5pbXBvcnQgdmlld1V0aWxzIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy92aWV3JztcclxuaW1wb3J0IHtDT05TVH0gZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2NvbnN0cyc7XHJcblxyXG4vLyB3aW5kb3cuJCA9ICQ7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTG9naW5QYWdlKHNlbGVjdG9yQ3NzKSB7XHJcbiAgICBjb25zdCB7X2Zvcm1JZCwgX2J1dHRvblN1Ym1pdElkLCBfbG9naW5Cb3h9ID0gc2VsZWN0b3JDc3M7XHJcbiAgICBjb25zdCB1c2VyID0gVXNlciwgLy8gc2VydmljZVxyXG4gICAgICAgICRmb3JtID0gJChfZm9ybUlkKSxcclxuICAgICAgICAkZW1haWwgPSAkZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwibWFpbFwiXScpLFxyXG4gICAgICAgICR0ZXh0QXJlYURlc2NyaXB0aW9uID0gJCgnI2Rlc2NyaXB0aW9uJyk7XHJcbiAgICAvLyBjb25zdCBvcGVuZWRDbGFzcyA9ICdkLWJsb2NrJztcclxuICAgIC8vIGNvbnN0IGNsb3NlQ2xhc3MgPSAnZC1ub25lJztcclxuXHJcbiAgICBjb25zdCB1c2VyTG9naW5IZWFkZXIgPSAoX2Zvcm1EYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2JFcnJvciA9IChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgJChfbG9naW5Cb3gpLmFwcGVuZCgnPHA+cmVzdWx0LnN0YXR1cy5tZXNzYWdlPC9wPicpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiB1c2VyLmxvZ2luKF9mb3JtRGF0YSwgY2JFcnJvcilcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuZGF0YSAmJiByZXN1bHQuZGF0YS50b2tlbikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNhdmUgdGhlIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBjb29raWVTdG9yYWdlLnNldChDT05TVC5jb29raWVTdG9yYWdlLnRva2VuLCByZXN1bHQuZGF0YS50b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLm5hdi1saW5rLmpzX2xvZ091dCcpLnBhcmVudCgpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmVxdWVzdCBzdWNjZWVkZWQgd2l0aCBKU09OIHJlc3BvbnNlJywgcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKCR0ZXh0QXJlYURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLm1lc3NhZ2UgfHwgJ0xvZ2luIHN1Y2NzZXNzJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UodGhpcy4kdGV4dEFyZWFEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYDxwPnN0YXR1czogJHtyZXN1bHQuc3RhdHVzLnN0YXRlfTwvcD48cD4gbWVzc2FnZTogJHtyZXN1bHQuc3RhdHVzLm1lc3NhZ2V9PC9wPmApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSgkdGV4dEFyZWFEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5tZXNzYWdlIHx8ICdMb2dpbiBlcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc3VibWl0Rm9ybSA9IGZ1bmN0aW9uKGZvcm1EYXRhT2JqKSB7XHJcbiAgICAgICAgY29uc3QgZW1haWwgPSAkZW1haWwudmFsKCksXHJcbiAgICAgICAgICAgIHBhc3N3b3JkID0gJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cInBhc3NcIl0nKS52YWwoKSxcclxuICAgICAgICAgICAgX2Zvcm1EYXRhID0gZm9ybURhdGFPYmogfHwge2VtYWlsLCBwYXNzd29yZH07XHJcblxyXG4gICAgICAgIGlmIChzZWxlY3RvckNzcy5pc0xvZ2luSW5zdGFncmFtKSB7XHJcbiAgICAgICAgICAgIC8vIHRvZG86IGRlbGV0ZSBtZVxyXG4gICAgICAgICAgICAvLyBhZGRJbnN0YWdyYW1BY2NvdW50KHt1c2VybmFtZTogJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cInVzZXJuYW1lXCJdJykudmFsKCksIHBhc3N3b3JkfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGVtYWlsLnZhbCgkZW1haWwudmFsKCkudG9Mb2NhbGVMb3dlckNhc2UoKSk7XHJcbiAgICAgICAgICAgIHVzZXJMb2dpbkhlYWRlcihfZm9ybURhdGEpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gUHViU3ViLnB1Ymxpc2goQ09OU1QuZXZlbnRzLlVTRVJfTE9HR0VELCAnbG9naW4nKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9pbnN0YWdyYW0taW50ZWdyYXRpb24vaW5zdGFncmFtLWFjY291bnRzLmh0bWwnO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGxvZ091dCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvb2tpZVN0b3JhZ2UucmVtb3ZlKENPTlNULmNvb2tpZVN0b3JhZ2UudG9rZW4pO1xyXG4gICAgICAgIFB1YlN1Yi5wdWJsaXNoKENPTlNULmV2ZW50cy5VU0VSX0xPR09VVCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGJpbmRFdmVudHMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyBjb25zdCAkc2hvd0xvZ2luQm94QnRuSWQgPSAkKF9zaG93TG9naW5Cb3hCdG5JZCk7XHJcbiAgICAgICAgY29uc3QgJGxvZ2luQm94ID0gJChfbG9naW5Cb3gpO1xyXG4gICAgICAgIGNvbnN0IG9wZW5lZENsYXNzID0gJ2QtYmxvY2snO1xyXG4gICAgICAgIGNvbnN0IGNsb3NlQ2xhc3MgPSAnZC1ub25lJztcclxuXHJcbiAgICAgICAgLy8gJHNob3dMb2dpbkJveEJ0bklkLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAvLyAgICAgaWYgKCFzZWxlY3RvckNzcy5pc0xvZ2luSW5zdGFncmFtKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAkbG9naW5Cb3guY3NzKHsndG9wJzogMCwgJ3JpZ2h0JzogMH0pXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLmFkZENsYXNzKCdiZy1saWdodCBib3JkZXIgbXQtNSBteC1hdXRvIHBvc2l0aW9uLWFic29sdXRlJyk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgJGxvZ2luQm94LmFkZENsYXNzKG9wZW5lZENsYXNzKS5yZW1vdmVDbGFzcyhjbG9zZUNsYXNzKTtcclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgJGJ1dHRvblN1Ym1pdCA9ICQoX2J1dHRvblN1Ym1pdElkKSxcclxuICAgICAgICAgICAgY3NzVmFsaWRhdGlvbkNsYXNzID0gJ2Zvcm0tdmFsaWRhdGlvbic7XHJcblxyXG4gICAgICAgICRidXR0b25TdWJtaXQub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zdCBmb3JtID0gJGZvcm0uZ2V0KDApO1xyXG4gICAgICAgICAgICAvLyBjb25zdCB2YWxpZGF0b3IgPSBuZXcgVmFsaWRhdG9yKCRmb3JtKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codmlld1V0aWxzLCB2aWV3VXRpbHMuaXNFbWFpbCgkZW1haWwudmFsKCkpKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChmb3JtLmNoZWNrVmFsaWRpdHkoKSAmJiB2aWV3VXRpbHMuaXNFbWFpbCgkZW1haWwudmFsKCkpKSB7XHJcbiAgICAgICAgICAgICAgICBzdWJtaXRGb3JtKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBIaWdobGlnaHQgZXJyb3JzXHJcbiAgICAgICAgICAgICAgICBpZiAoZm9ybS5yZXBvcnRWYWxpZGl0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm0ucmVwb3J0VmFsaWRpdHkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICRmb3JtLmFkZENsYXNzKGNzc1ZhbGlkYXRpb25DbGFzcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLm5hdi1saW5rLmpzX2xvZ091dCcpLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgbG9nT3V0KCk7XHJcbiAgICAgICAgICAgICQoZS50YXJnZXQpLnBhcmVudCgpLmhpZGUoKTtcclxuICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSgkdGV4dEFyZWFEZXNjcmlwdGlvbiwgJ0xvZ2dlZCBvdXQnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgUHViU3ViLnN1YnNjcmliZShDT05TVC5ldmVudHMuVVNFUl9MT0dPVVQsIChtc2cpID0+IHtcclxuICAgICAgICAgICAgJChDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJOYXZMb2dpbkJ0bikuYWRkQ2xhc3Mob3BlbmVkQ2xhc3MpLnJlbW92ZUNsYXNzKGNsb3NlQ2xhc3MpOyAvLyAuc2hvdygpO1xyXG4gICAgICAgICAgICAkKENPTlNULnVpU2VsZWN0b3JzLmhlYWRlclJlZ0J0bikuYWRkQ2xhc3Mob3BlbmVkQ2xhc3MpLnJlbW92ZUNsYXNzKGNsb3NlQ2xhc3MpO1xyXG4gICAgICAgICAgICAkKCcubmF2LWxpbmsuanNfbG9nT3V0JykuYWRkQ2xhc3MoY2xvc2VDbGFzcykucmVtb3ZlQ2xhc3Mob3BlbmVkQ2xhc3MpOyAvLyAuaGlkZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RvckxvZ2luU3RhdGUgPSAnLmpzX21lc3NhZ2VfbG9nZ2VkLS10ZXh0JztcclxuICAgICAgICAgICAgJChzZWxlY3RvckxvZ2luU3RhdGUpLnRleHQoJ9CS0Ysg0LLRi9GI0LvQuCDQuNC3INCw0LrQutCw0YPQvdGC0LAnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzTG9naW5CdG5DbGljayA9ICQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCduYXYubmF2YmFyJykuZmluZCgkbG9naW5Cb3gpLmxlbmd0aDtcclxuICAgICAgICAgICAgY29uc3QgaXNBZGRJbnN0YWdyYW1CdG5DbGlja2VkID0gJChldmVudC50YXJnZXQpLmF0dHIoJ2lkJykgPT09IENPTlNULnVpU2VsZWN0b3JzLmluc3RhZ3JhbS5hZGRBY2NvdW50QnRuSWQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWlzTG9naW5CdG5DbGljayAmJiAkbG9naW5Cb3guaGFzQ2xhc3Mob3BlbmVkQ2xhc3MpICYmICFpc0FkZEluc3RhZ3JhbUJ0bkNsaWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICRsb2dpbkJveC5hZGRDbGFzcyhjbG9zZUNsYXNzKS5yZW1vdmVDbGFzcyhvcGVuZWRDbGFzcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgICAgICBpZiAoJCgnLmF1dGgubG9naW4nKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgYmluZEV2ZW50cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGluaXRcclxuICAgIH07XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL19hdXRoL2xvZ2luLXBhZ2UuanMiLCJpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgYnJ1dHVzaW4pd2luZG93LmJydXR1c2luPW5ldyBPYmplY3Q7ZWxzZSBpZihcIm9iamVjdFwiIT10eXBlb2YgYnJ1dHVzaW4pdGhyb3dcImJydXR1c2luIGdsb2JhbCB2YXJpYWJsZSBhbHJlYWR5IGV4aXN0c1wiOyFmdW5jdGlvbigpe1N0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aHx8KFN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aD1mdW5jdGlvbihlLHQpe3JldHVybiB0PXR8fDAsdGhpcy5pbmRleE9mKGUsdCk9PT10fSksU3RyaW5nLnByb3RvdHlwZS5lbmRzV2l0aHx8KFN0cmluZy5wcm90b3R5cGUuZW5kc1dpdGg9ZnVuY3Rpb24oZSx0KXt2YXIgcj10aGlzLnRvU3RyaW5nKCk7KHZvaWQgMD09PXR8fHQ+ci5sZW5ndGgpJiYodD1yLmxlbmd0aCksdC09ZS5sZW5ndGg7dmFyIG49ci5pbmRleE9mKGUsdCk7cmV0dXJuLTEhPT1uJiZuPT09dH0pLFN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXN8fChTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzPWZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7cmV0dXJuLTEhPT1TdHJpbmcucHJvdG90eXBlLmluZGV4T2YuYXBwbHkodGhpcyxhcmd1bWVudHMpfSksU3RyaW5nLnByb3RvdHlwZS5mb3JtYXR8fChTdHJpbmcucHJvdG90eXBlLmZvcm1hdD1mdW5jdGlvbigpe2Zvcih2YXIgZT10aGlzLHQ9MDt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgcj1uZXcgUmVnRXhwKFwiXFxcXHtcIit0K1wiXFxcXH1cIixcImdpXCIpO2U9ZS5yZXBsYWNlKHIsYXJndW1lbnRzW3RdKX1yZXR1cm4gZX0pO3ZhciBCcnV0dXNpbkZvcm1zPW5ldyBPYmplY3Q7QnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcz17dmFsaWRhdGlvbkVycm9yOlwiVmFsaWRhdGlvbiBlcnJvclwiLHJlcXVpcmVkOlwiVGhpcyBmaWVsZCBpcyAqKnJlcXVpcmVkKipcIixpbnZhbGlkVmFsdWU6XCJJbnZhbGlkIGZpZWxkIHZhbHVlXCIsYWRkcHJvcE5hbWVFeGlzdGVudDpcIlRoaXMgcHJvcGVydHkgaXMgYWxyZWFkeSBwcmVzZW50IGluIHRoZSBvYmplY3RcIixhZGRwcm9wTmFtZVJlcXVpcmVkOlwiQSBuYW1lIGlzIHJlcXVpcmVkXCIsbWluSXRlbXM6XCJBdCBsZWFzdCBgezB9YCBpdGVtcyBhcmUgcmVxdWlyZWRcIixtYXhJdGVtczpcIkF0IG1vc3QgYHswfWAgaXRlbXMgYXJlIGFsbG93ZWRcIixwYXR0ZXJuOlwiVmFsdWUgZG9lcyBub3QgbWF0Y2ggcGF0dGVybjogYHswfWBcIixtaW5MZW5ndGg6XCJWYWx1ZSBtdXN0IGJlICoqYXQgbGVhc3QqKiBgezB9YCBjaGFyYWN0ZXJzIGxvbmdcIixtYXhMZW5ndGg6XCJWYWx1ZSBtdXN0IGJlICoqYXQgbW9zdCoqIGB7MH1gIGNoYXJhY3RlcnMgbG9uZ1wiLG11bHRpcGxlT2Y6XCJWYWx1ZSBtdXN0IGJlICoqbXVsdGlwbGUgb2YqKiBgezB9YFwiLG1pbmltdW06XCJWYWx1ZSBtdXN0IGJlICoqZ3JlYXRlciBvciBlcXVhbCB0aGFuKiogYHswfWBcIixleGNsdXNpdmVNaW5pbXVtOlwiVmFsdWUgbXVzdCBiZSAqKmdyZWF0ZXIgdGhhbioqIGB7MH1gXCIsbWF4aW11bTpcIlZhbHVlIG11c3QgYmUgKipsb3dlciBvciBlcXVhbCB0aGFuKiogYHswfWBcIixleGNsdXNpdmVNYXhpbXVtOlwiVmFsdWUgbXVzdCBiZSAqKmxvd2VyIHRoYW4qKiBgezB9YFwiLG1pblByb3BlcnRpZXM6XCJBdCBsZWFzdCBgezB9YCBwcm9wZXJ0aWVzIGFyZSByZXF1aXJlZFwiLG1heFByb3BlcnRpZXM6XCJBdCBtb3N0IGB7MH1gIHByb3BlcnRpZXMgYXJlIGFsbG93ZWRcIix1bmlxdWVJdGVtczpcIkFycmF5IGl0ZW1zIG11c3QgYmUgdW5pcXVlXCIsYWRkSXRlbTpcIkFkZCBpdGVtXCIsXCJ0cnVlXCI6XCJUcnVlXCIsXCJmYWxzZVwiOlwiRmFsc2VcIn0sQnJ1dHVzaW5Gb3Jtcy5kZWNvcmF0b3JzPW5ldyBBcnJheSxCcnV0dXNpbkZvcm1zLmFkZERlY29yYXRvcj1mdW5jdGlvbihlKXtCcnV0dXNpbkZvcm1zLmRlY29yYXRvcnNbQnJ1dHVzaW5Gb3Jtcy5kZWNvcmF0b3JzLmxlbmd0aF09ZX0sQnJ1dHVzaW5Gb3Jtcy5vblJlc29sdXRpb25TdGFydGVkPWZ1bmN0aW9uKGUpe30sQnJ1dHVzaW5Gb3Jtcy5vblJlc29sdXRpb25GaW5pc2hlZD1mdW5jdGlvbihlKXt9LEJydXR1c2luRm9ybXMub25WYWxpZGF0aW9uRXJyb3I9ZnVuY3Rpb24oZSx0KXtlLmZvY3VzKCksZS5jbGFzc05hbWUuaW5jbHVkZXMoXCIgZXJyb3JcIil8fChlLmNsYXNzTmFtZSs9XCIgZXJyb3JcIiksYWxlcnQodCl9LEJydXR1c2luRm9ybXMub25WYWxpZGF0aW9uU3VjY2Vzcz1mdW5jdGlvbihlKXtlLmNsYXNzTmFtZT1lLmNsYXNzTmFtZS5yZXBsYWNlKFwiIGVycm9yXCIsXCJcIil9LEJydXR1c2luRm9ybXMucG9zdFJlbmRlcj1udWxsLEJydXR1c2luRm9ybXMuaW5zdGFuY2VzPW5ldyBBcnJheSxCcnV0dXNpbkZvcm1zLmNyZWF0ZT1mdW5jdGlvbihzY2hlbWEpe2Z1bmN0aW9uIHZhbGlkYXRlRGVwZW5jeU1hcElzQWN5Y2xpYygpe2Z1bmN0aW9uIGUodCxyLG4pe2lmKHIuaGFzT3duUHJvcGVydHkobikpcmV0dXJuIHZvaWQoZXJyb3I9XCJTY2hlbWEgZGVwZW5kZW5jeSBncmFwaCBoYXMgY3ljbGVzXCIpO2lmKHJbbl09bnVsbCwhdC5oYXNPd25Qcm9wZXJ0eShuKSl7dFtuXT1udWxsO3ZhciBhPWRlcGVuZGVuY3lNYXBbbl07aWYoYSlmb3IodmFyIGk9MDtpPGEubGVuZ3RoO2krKyllKHQscixhW2ldKTtkZWxldGUgcltuXX19dmFyIHQ9bmV3IE9iamVjdDtmb3IodmFyIHIgaW4gZGVwZW5kZW5jeU1hcCl0Lmhhc093blByb3BlcnR5KHIpfHxlKHQsbmV3IE9iamVjdCxyKX1mdW5jdGlvbiBhcHBlbmRDaGlsZChlLHQscil7ZS5hcHBlbmRDaGlsZCh0KTtmb3IodmFyIG49MDtuPEJydXR1c2luRm9ybXMuZGVjb3JhdG9ycy5sZW5ndGg7bisrKUJydXR1c2luRm9ybXMuZGVjb3JhdG9yc1tuXSh0LHIpfWZ1bmN0aW9uIGNyZWF0ZVBzZXVkb1NjaGVtYShlKXt2YXIgdD1uZXcgT2JqZWN0O2Zvcih2YXIgciBpbiBlKVwiaXRlbXNcIiE9PXImJlwicHJvcGVydGllc1wiIT09ciYmXCJhZGRpdGlvbmFsUHJvcGVydGllc1wiIT09ciYmKFwicGF0dGVyblwiPT09cj90W3JdPW5ldyBSZWdFeHAoZVtyXSk6dFtyXT1lW3JdKTtyZXR1cm4gdH1mdW5jdGlvbiBnZXREZWZpbml0aW9uKGUpe3ZhciB0PWUuc3BsaXQoXCIvXCIpLHI9cm9vdDtmb3IodmFyIG4gaW4gdClcIjBcIiE9PW4mJihyPXJbdFtuXV0pO3JldHVybiByfWZ1bmN0aW9uIGNvbnRhaW5zU3RyKGUsdCl7Zm9yKHZhciByPTA7cjxlLmxlbmd0aDtyKyspaWYoZVtyXT09dClyZXR1cm4hMDtyZXR1cm4hMX1mdW5jdGlvbiByZW5hbWVSZXF1aXJlZFByb3BldGllcyhlKXtpZihlKWlmKGUuaGFzT3duUHJvcGVydHkoXCJvbmVPZlwiKSlmb3IodmFyIHQgaW4gZS5vbmVPZilyZW5hbWVSZXF1aXJlZFByb3BldGllcyhlLm9uZU9mW3RdKTtlbHNlIGlmKGUuaGFzT3duUHJvcGVydHkoXCIkcmVmXCIpKXt2YXIgcj1nZXREZWZpbml0aW9uKGUuJHJlZik7cmVuYW1lUmVxdWlyZWRQcm9wZXRpZXMocil9ZWxzZSBpZihcIm9iamVjdFwiPT09ZS50eXBlKXtpZihlLnByb3BlcnRpZXMpe2UuaGFzT3duUHJvcGVydHkoXCJyZXF1aXJlZFwiKSYmQXJyYXkuaXNBcnJheShlLnJlcXVpcmVkKSYmKGUucmVxdWlyZWRQcm9wZXJ0aWVzPWUucmVxdWlyZWQsZGVsZXRlIGUucmVxdWlyZWQpO2Zvcih2YXIgbiBpbiBlLnByb3BlcnRpZXMpcmVuYW1lUmVxdWlyZWRQcm9wZXRpZXMoZS5wcm9wZXJ0aWVzW25dKX1pZihlLnBhdHRlcm5Qcm9wZXJ0aWVzKWZvcih2YXIgYSBpbiBlLnBhdHRlcm5Qcm9wZXJ0aWVzKXt2YXIgaT1lLnBhdHRlcm5Qcm9wZXJ0aWVzW2FdOyhpLmhhc093blByb3BlcnR5KFwidHlwZVwiKXx8aS5oYXNPd25Qcm9wZXJ0eShcIiRyZWZcIil8fGkuaGFzT3duUHJvcGVydHkoXCJvbmVPZlwiKSkmJnJlbmFtZVJlcXVpcmVkUHJvcGV0aWVzKGUucGF0dGVyblByb3BlcnRpZXNbYV0pfWUuYWRkaXRpb25hbFByb3BlcnRpZXMmJihlLmFkZGl0aW9uYWxQcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KFwidHlwZVwiKXx8ZS5hZGRpdGlvbmFsUHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShcIm9uZU9mXCIpKSYmcmVuYW1lUmVxdWlyZWRQcm9wZXRpZXMoZS5hZGRpdGlvbmFsUHJvcGVydGllcyl9ZWxzZVwiYXJyYXlcIj09PWUudHlwZSYmcmVuYW1lUmVxdWlyZWRQcm9wZXRpZXMoZS5pdGVtcyl9ZnVuY3Rpb24gcG9wdWxhdGVTY2hlbWFNYXAoZSx0KXt2YXIgcj1jcmVhdGVQc2V1ZG9TY2hlbWEodCk7aWYoci4kaWQ9ZSxzY2hlbWFNYXBbZV09cix0KXtpZih0Lmhhc093blByb3BlcnR5KFwib25lT2ZcIikpe3Iub25lT2Y9bmV3IEFycmF5LHIudHlwZT1cIm9uZU9mXCI7Zm9yKHZhciBuIGluIHQub25lT2Ype3ZhciBhPWUrXCIuXCIrbjtyLm9uZU9mW25dPWEscG9wdWxhdGVTY2hlbWFNYXAoYSx0Lm9uZU9mW25dKX19ZWxzZSBpZih0Lmhhc093blByb3BlcnR5KFwiJHJlZlwiKSl7dmFyIGk9Z2V0RGVmaW5pdGlvbih0LiRyZWYpO2lmKGkpe2lmKHQuaGFzT3duUHJvcGVydHkoXCJ0aXRsZVwiKXx8dC5oYXNPd25Qcm9wZXJ0eShcImRlc2NyaXB0aW9uXCIpKXt2YXIgbz17fTtmb3IodmFyIHMgaW4gaSlvW3NdPWlbc107dC5oYXNPd25Qcm9wZXJ0eShcInRpdGxlXCIpJiYoby50aXRsZT10LnRpdGxlKSx0Lmhhc093blByb3BlcnR5KFwiZGVzY3JpcHRpb25cIikmJihvLmRlc2NyaXB0aW9uPXQuZGVzY3JpcHRpb24pLGk9b31wb3B1bGF0ZVNjaGVtYU1hcChlLGkpfX1lbHNlIGlmKFwib2JqZWN0XCI9PT10LnR5cGUpe2lmKHQucHJvcGVydGllcyl7ci5wcm9wZXJ0aWVzPW5ldyBPYmplY3Q7Zm9yKHZhciBzIGluIHQucHJvcGVydGllcyl7dmFyIGE9ZStcIi5cIitzO3IucHJvcGVydGllc1tzXT1hO3ZhciB1PXQucHJvcGVydGllc1tzXTt0LnJlcXVpcmVkUHJvcGVydGllcyYmKGNvbnRhaW5zU3RyKHQucmVxdWlyZWRQcm9wZXJ0aWVzLHMpP3UucmVxdWlyZWQ9ITA6dS5yZXF1aXJlZD0hMSkscG9wdWxhdGVTY2hlbWFNYXAoYSx1KX19aWYodC5wYXR0ZXJuUHJvcGVydGllcyl7ci5wYXR0ZXJuUHJvcGVydGllcz1uZXcgT2JqZWN0O2Zvcih2YXIgbCBpbiB0LnBhdHRlcm5Qcm9wZXJ0aWVzKXt2YXIgZD1lK1wiW1wiK2wrXCJdXCI7ci5wYXR0ZXJuUHJvcGVydGllc1tsXT1kO3ZhciBwPXQucGF0dGVyblByb3BlcnRpZXNbbF07cC5oYXNPd25Qcm9wZXJ0eShcInR5cGVcIil8fHAuaGFzT3duUHJvcGVydHkoXCIkcmVmXCIpfHxwLmhhc093blByb3BlcnR5KFwib25lT2ZcIik/cG9wdWxhdGVTY2hlbWFNYXAoZCx0LnBhdHRlcm5Qcm9wZXJ0aWVzW2xdKTpwb3B1bGF0ZVNjaGVtYU1hcChkLFNDSEVNQV9BTlkpfX1pZih0LmFkZGl0aW9uYWxQcm9wZXJ0aWVzKXt2YXIgYT1lK1wiWypdXCI7ci5hZGRpdGlvbmFsUHJvcGVydGllcz1hLHQuYWRkaXRpb25hbFByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoXCJ0eXBlXCIpfHx0LmFkZGl0aW9uYWxQcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KFwib25lT2ZcIik/cG9wdWxhdGVTY2hlbWFNYXAoYSx0LmFkZGl0aW9uYWxQcm9wZXJ0aWVzKTpwb3B1bGF0ZVNjaGVtYU1hcChhLFNDSEVNQV9BTlkpfX1lbHNlXCJhcnJheVwiPT09dC50eXBlJiYoci5pdGVtcz1lK1wiWyNdXCIscG9wdWxhdGVTY2hlbWFNYXAoci5pdGVtcyx0Lml0ZW1zKSk7aWYodC5oYXNPd25Qcm9wZXJ0eShcImRlcGVuZHNPblwiKSl7bnVsbD09PXQuZGVwZW5kc09uJiYodC5kZXBlbmRzT249W1wiJFwiXSk7Zm9yKHZhciBjPW5ldyBBcnJheSxuPTA7bjx0LmRlcGVuZHNPbi5sZW5ndGg7bisrKXQuZGVwZW5kc09uW25dP3QuZGVwZW5kc09uW25dLnN0YXJ0c1dpdGgoXCIkXCIpP2Nbbl09dC5kZXBlbmRzT25bbl06ZS5lbmRzV2l0aChcIl1cIik/Y1tuXT1lK1wiLlwiK3QuZGVwZW5kc09uW25dOmNbbl09ZS5zdWJzdHJpbmcoMCxlLmxhc3RJbmRleE9mKFwiLlwiKSkrXCIuXCIrdC5kZXBlbmRzT25bbl06Y1tuXT1cIiRcIjtzY2hlbWFNYXBbZV0uZGVwZW5kc09uPWM7Zm9yKHZhciBuPTA7bjxjLmxlbmd0aDtuKyspe3ZhciBtPWRlcGVuZGVuY3lNYXBbY1tuXV07bXx8KG09bmV3IEFycmF5LGRlcGVuZGVuY3lNYXBbY1tuXV09bSksbVttLmxlbmd0aF09ZX19fX1mdW5jdGlvbiByZW5kZXJUaXRsZShlLHQscil7aWYoZSYmdCl7dmFyIG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1wiYW55XCIhPT1yLnR5cGUmJlwib2JqZWN0XCIhPT1yLnR5cGUmJlwiYXJyYXlcIiE9PXIudHlwZSYmKG4uaHRtbEZvcj1nZXRJbnB1dElkKCkpO3ZhciBhPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHQrXCI6XCIpO2lmKGFwcGVuZENoaWxkKG4sYSxyKSxyLmRlc2NyaXB0aW9uJiYobi50aXRsZT1yLmRlc2NyaXB0aW9uKSxyLnJlcXVpcmVkKXt2YXIgaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3VwXCIpO2FwcGVuZENoaWxkKGksZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCIqXCIpLHIpLGFwcGVuZENoaWxkKG4saSxyKSxuLmNsYXNzTmFtZT1cInJlcXVpcmVkXCJ9YXBwZW5kQ2hpbGQoZSxuLHIpfX1mdW5jdGlvbiBnZXRJbnB1dElkKCl7cmV0dXJuIGZvcm1JZCtcIl9cIitpbnB1dENvdW50ZXJ9ZnVuY3Rpb24gdmFsaWRhdGUoZSl7dmFyIHQ9ITA7aWYoZS5oYXNPd25Qcm9wZXJ0eShcImdldFZhbGlkYXRpb25FcnJvclwiKSl7dmFyIHI9ZS5nZXRWYWxpZGF0aW9uRXJyb3IoKTtyPyhCcnV0dXNpbkZvcm1zLm9uVmFsaWRhdGlvbkVycm9yKGUsciksdD0hMSk6QnJ1dHVzaW5Gb3Jtcy5vblZhbGlkYXRpb25TdWNjZXNzKGUpfWlmKGUuY2hpbGROb2Rlcylmb3IodmFyIG49MDtuPGUuY2hpbGROb2Rlcy5sZW5ndGg7bisrKXZhbGlkYXRlKGUuY2hpbGROb2Rlc1tuXSl8fCh0PSExKTtyZXR1cm4gdH1mdW5jdGlvbiBjbGVhcihlKXtpZihlKWZvcig7ZS5maXJzdENoaWxkOyllLnJlbW92ZUNoaWxkKGUuZmlyc3RDaGlsZCl9ZnVuY3Rpb24gcmVuZGVyKGUsdCxyLG4sYSxpKXt2YXIgbz1nZXRTY2hlbWFJZChyKSxzPWdldFNjaGVtYShvKTtyZW5kZXJJbmZvTWFwW29dPW5ldyBPYmplY3QscmVuZGVySW5mb01hcFtvXS50aXRsZUNvbnRhaW5lcj1lLHJlbmRlckluZm9NYXBbb10uY29udGFpbmVyPXQscmVuZGVySW5mb01hcFtvXS5wYXJlbnRPYmplY3Q9bixyZW5kZXJJbmZvTWFwW29dLnByb3BlcnR5UHJvdmlkZXI9YSxyZW5kZXJJbmZvTWFwW29dLnZhbHVlPWksY2xlYXIoZSksY2xlYXIodCk7dmFyIHU9cmVuZGVyZXJzW3MudHlwZV07aWYodSYmIXMuZGVwZW5kc09uKXMudGl0bGU/cmVuZGVyVGl0bGUoZSxzLnRpdGxlLHMpOmEmJnJlbmRlclRpdGxlKGUsYS5nZXRWYWx1ZSgpLHMpLGl8fChpPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBpbml0aWFsVmFsdWUmJm51bGwhPT1pbml0aWFsVmFsdWU/Z2V0SW5pdGlhbFZhbHVlKHIpOnNbXCJkZWZhdWx0XCJdKSx1KHQscixuLGEsaSk7ZWxzZSBpZihzLiRyZWYmJm9iai5zY2hlbWFSZXNvbHZlcil7dmFyIGw9ZnVuY3Rpb24oZSl7aWYoZSYmZS5oYXNPd25Qcm9wZXJ0eShyKSYmSlNPTi5zdHJpbmdpZnkoc2NoZW1hTWFwW3JdKSE9PUpTT04uc3RyaW5naWZ5KGVbcl0pKXtjbGVhblNjaGVtYU1hcChyKSxjbGVhbkRhdGEocikscG9wdWxhdGVTY2hlbWFNYXAocixlW3JdKTt2YXIgdD1yZW5kZXJJbmZvTWFwW3JdO3QmJnJlbmRlcih0LnRpdGxlQ29udGFpbmVyLHQuY29udGFpbmVyLHIsdC5wYXJlbnRPYmplY3QsdC5wcm9wZXJ0eVByb3ZpZGVyLHQudmFsdWUpfUJydXR1c2luRm9ybXMub25SZXNvbHV0aW9uRmluaXNoZWQobil9O0JydXR1c2luRm9ybXMub25SZXNvbHV0aW9uU3RhcnRlZChuKSxvYmouc2NoZW1hUmVzb2x2ZXIoW3JdLG9iai5nZXREYXRhKCksbCl9fWZ1bmN0aW9uIGNyZWF0ZVByb3BlcnR5UHJvdmlkZXIoZSx0KXt2YXIgcj1uZXcgT2JqZWN0O3JldHVybiByLmdldFZhbHVlPWUsci5vbmNoYW5nZT10LHJ9ZnVuY3Rpb24gZ2V0SW5pdGlhbFZhbHVlKGlkKXt2YXIgcmV0O3RyeXtldmFsKFwicmV0ID0gaW5pdGlhbFZhbHVlXCIraWQuc3Vic3RyaW5nKDEpKX1jYXRjaChlKXtyZXQ9bnVsbH1yZXR1cm4gcmV0fWZ1bmN0aW9uIGdldFZhbHVlKHNjaGVtYSxpbnB1dCl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgaW5wdXQuZ2V0VmFsdWUpcmV0dXJuIGlucHV0LmdldFZhbHVlKCk7dmFyIHZhbHVlO3JldHVybiB2YWx1ZT1cInNlbGVjdFwiPT09aW5wdXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpP2lucHV0Lm9wdGlvbnNbaW5wdXQuc2VsZWN0ZWRJbmRleF0udmFsdWU6aW5wdXQudmFsdWUsXCJcIj09PXZhbHVlP251bGw6KFwiaW50ZWdlclwiPT09c2NoZW1hLnR5cGU/KHZhbHVlPXBhcnNlSW50KHZhbHVlKSxpc0Zpbml0ZSh2YWx1ZSl8fCh2YWx1ZT1udWxsKSk6XCJudW1iZXJcIj09PXNjaGVtYS50eXBlPyh2YWx1ZT1wYXJzZUZsb2F0KHZhbHVlKSxpc0Zpbml0ZSh2YWx1ZSl8fCh2YWx1ZT1udWxsKSk6XCJib29sZWFuXCI9PT1zY2hlbWEudHlwZT9cImlucHV0XCI9PT1pbnB1dC50YWdOYW1lLnRvTG93ZXJDYXNlKCk/KHZhbHVlPWlucHV0LmNoZWNrZWQsdmFsdWV8fCh2YWx1ZT0hMSkpOlwic2VsZWN0XCI9PT1pbnB1dC50YWdOYW1lLnRvTG93ZXJDYXNlKCkmJih2YWx1ZT1cInRydWVcIj09PWlucHV0LnZhbHVlPyEwOlwiZmFsc2VcIj09PWlucHV0LnZhbHVlPyExOm51bGwpOlwiYW55XCI9PT1zY2hlbWEudHlwZSYmdmFsdWUmJmV2YWwoXCJ2YWx1ZT1cIit2YWx1ZSksdmFsdWUpfWZ1bmN0aW9uIGdldFNjaGVtYUlkKGUpe3JldHVybiBlLnJlcGxhY2UoL1xcW1wiW15cIl0qXCJcXF0vZyxcIlsqXVwiKS5yZXBsYWNlKC9cXFtcXGQqXFxdL2csXCJbI11cIil9ZnVuY3Rpb24gZ2V0UGFyZW50U2NoZW1hSWQoZSl7cmV0dXJuIGUuc3Vic3RyaW5nKDAsZS5sYXN0SW5kZXhPZihcIi5cIikpfWZ1bmN0aW9uIGdldFNjaGVtYShlKXtyZXR1cm4gc2NoZW1hTWFwW2VdfWZ1bmN0aW9uIGNsZWFuU2NoZW1hTWFwKGUpe2Zvcih2YXIgdCBpbiBzY2hlbWFNYXApZS5zdGFydHNXaXRoKHQpJiZkZWxldGUgc2NoZW1hTWFwW3RdfWZ1bmN0aW9uIGNsZWFuRGF0YShlKXt2YXIgdD1uZXcgRXhwcmVzc2lvbihlKTt0LnZpc2l0KGRhdGEsZnVuY3Rpb24oZSx0LHIpe2RlbGV0ZSB0W3JdfSl9ZnVuY3Rpb24gb25EZXBlbmRlbmN5Q2hhbmdlZChlLHQpe3ZhciByPWRlcGVuZGVuY3lNYXBbZV07aWYociYmb2JqLnNjaGVtYVJlc29sdmVyKXt2YXIgbj1mdW5jdGlvbihlKXtpZihlKWZvcih2YXIgciBpbiBlKWlmKEpTT04uc3RyaW5naWZ5KHNjaGVtYU1hcFtyXSkhPT1KU09OLnN0cmluZ2lmeShlW3JdKSl7Y2xlYW5TY2hlbWFNYXAociksY2xlYW5EYXRhKHIpLHBvcHVsYXRlU2NoZW1hTWFwKHIsZVtyXSk7dmFyIG49cmVuZGVySW5mb01hcFtyXTtuJiZyZW5kZXIobi50aXRsZUNvbnRhaW5lcixuLmNvbnRhaW5lcixyLG4ucGFyZW50T2JqZWN0LG4ucHJvcGVydHlQcm92aWRlcixuLnZhbHVlKX1CcnV0dXNpbkZvcm1zLm9uUmVzb2x1dGlvbkZpbmlzaGVkKHQpfTtCcnV0dXNpbkZvcm1zLm9uUmVzb2x1dGlvblN0YXJ0ZWQodCksb2JqLnNjaGVtYVJlc29sdmVyKHIsb2JqLmdldERhdGEoKSxuKX19ZnVuY3Rpb24gRXhwcmVzc2lvbihlKXtmdW5jdGlvbiB0KGUpe2lmKG51bGw9PT1lKXJldHVybiBudWxsO2Zvcih2YXIgdD1uZXcgQXJyYXkscj1udWxsLG49MCxhPTA7YTxlLmxlbmd0aDthKyspJ1wiJz09PWUuY2hhckF0KGEpP251bGw9PT1yP3I9J1wiJzonXCInPT09ciYmKHI9bnVsbCx0W3QubGVuZ3RoXT1lLnN1YnN0cmluZyhuLGErMSkudHJpbSgpLG49YSsxKTpcIidcIj09PWUuY2hhckF0KGEpP251bGw9PT1yP3I9XCInXCI6XCInXCI9PT1yJiYocj1udWxsLHRbdC5sZW5ndGhdPWUuc3Vic3RyaW5nKG4sYSsxKS50cmltKCksbj1hKzEpOlwiW1wiPT09ZS5jaGFyQXQoYSk/bnVsbD09PXImJihuIT09YSYmKHRbdC5sZW5ndGhdPWUuc3Vic3RyaW5nKG4sYSkudHJpbSgpKSx0W3QubGVuZ3RoXT1cIltcIixuPWErMSk6XCJdXCI9PT1lLmNoYXJBdChhKT9udWxsPT09ciYmKG4hPT1hJiYodFt0Lmxlbmd0aF09ZS5zdWJzdHJpbmcobixhKS50cmltKCkpLHRbdC5sZW5ndGhdPVwiXVwiLG49YSsxKTpcIi5cIj09PWUuY2hhckF0KGEpP251bGw9PT1yJiYobiE9PWEmJih0W3QubGVuZ3RoXT1lLnN1YnN0cmluZyhuLGEpLnRyaW0oKSksbj1hKzEpOmE9PT1lLmxlbmd0aC0xJiYodFt0Lmxlbmd0aF09ZS5zdWJzdHJpbmcobixhKzEpLnRyaW0oKSk7cmV0dXJuIHR9KG51bGw9PT1lfHwwPT09ZS5sZW5ndGh8fFwiLlwiPT09ZSkmJihlPVwiJFwiKTtmb3IodmFyIHI9bmV3IEFycmF5LG49dChlKSxhPSExLGk9MCxvPVwiXCIscz0wO3M8bi5sZW5ndGg7cysrKXt2YXIgdT1uW3NdO2lmKFwiW1wiPT09dSl7aWYoYSl0aHJvd1wiRXJyb3IgcGFyc2luZyBleHByZXNzaW9uICdcIitlK1wiJzogTmVzdGVkIFsgZm91bmRcIjthPSEwLGk9MCxvKz11fWVsc2UgaWYoXCJdXCI9PT11KXtpZighYSl0aHJvd1wiRXJyb3IgcGFyc2luZyBleHByZXNzaW9uICdcIitlK1wiJzogVW5iYWxhbmNlZCBdIGZvdW5kXCI7YT0hMSxvKz11LHJbci5sZW5ndGhdPW8sbz1cIlwifWVsc2UgaWYoYSl7aWYoaT4wKXRocm93XCJFcnJvciBwYXJzaW5nIGV4cHJlc3Npb24gJ1wiK2UrXCInOiBNdWx0aXBsZSB0b2tlbnMgZm91bmQgaW5zaWRlIGEgYnJhY2tldFwiO28rPXUsaSsrfWVsc2UgcltyLmxlbmd0aF09dTtpZihzPT09bi5sZW5ndGgtMSYmYSl0aHJvd1wiRXJyb3IgcGFyc2luZyBleHByZXNzaW9uICdcIitlK1wiJzogVW5iYWxhbmNlZCBbIGZvdW5kXCJ9dGhpcy5leHA9ZSx0aGlzLnF1ZXVlPXIsdGhpcy52aXNpdD1mdW5jdGlvbihlLHQpe2Z1bmN0aW9uIHIoZSxuLGEsaSxvKXtpZihudWxsIT1hKXt2YXIgcz1uLnNoaWZ0KCk7aWYoXCIkXCI9PT1zKXtlPVwiJFwiO3ZhciBzPW4uc2hpZnQoKX1pZihzKWlmKEFycmF5LmlzQXJyYXkoYSkpe2lmKCFzLnN0YXJ0c1dpdGgoXCJbXCIpKXRocm93XCJOb2RlICdcIitlK1wiJyBpcyBvZiB0eXBlIGFycmF5XCI7dmFyIHU9cy5zdWJzdHJpbmcoMSxzLmxlbmd0aC0xKTtpZih1LmVxdWFscyhcIiNcIikpZm9yKHZhciBsPTA7bDxhLmxlbmd0aDtsKyspe3ZhciBkPWFbbF07cihlK3Msbi5zbGljZSgwKSxkLGEsbCkscihlK1wiW1wiK2wrXCJdXCIsbi5zbGljZSgwKSxkLGEsbCl9ZWxzZSBpZihcIiRcIj09PXUpe3ZhciBkPWFbYS5sZW5ndGgtMV07cihlK3Msbi5zbGljZSgwKSxkLGEsYS5sZW5ndGgtMSl9ZWxzZXt2YXIgcD1wYXJzZUludCh1KTtpZihpc05hTihwKSl0aHJvd1wiRWxlbWVudCAnXCIrdStcIicgb2Ygbm9kZSAnXCIrZStcIicgaXMgbm90IGFuIGludGVnZXIsIG9yIHRoZSAnJCcgbGFzdCBlbGVtZW50IHN5bWJvbCwgIG9yIHRoZSB3aWxjYXJkIHN5bWJvbCAnIydcIjtpZigwPnApdGhyb3dcIkVsZW1lbnQgJ1wiK3UrXCInIG9mIG5vZGUgJ1wiK2UrXCInIGlzIGxvd2VyIHRoYW4gemVyb1wiO3ZhciBkPWFbcF07cihlK3Msbi5zbGljZSgwKSxkLGEscCl9fWVsc2V7aWYoXCJvYmplY3RcIiE9dHlwZW9mIGEpdGhyb3dcImJvb2xlYW5cIj09dHlwZW9mIGF8fFwibnVtYmVyXCI9PXR5cGVvZiBhfHxcInN0cmluZ1wiPT10eXBlb2YgYT9cIk5vZGUgaXMgbGVhZiBidXQgc3RpbGwgYXJlIHRva2VucyByZW1haW5pbmc6IFwiK3M6XCJOb2RlIHR5cGUgJ1wiK3R5cGVvZiBhK1wiJyBub3Qgc3VwcG9ydGVkIGZvciBpbmRleCBmaWVsZCAnXCIrZStcIidcIjtpZihcIlsqXVwiPT09cylmb3IodmFyIGMgaW4gYSl7dmFyIGQ9YVtjXTtyKGUrcyxuLnNsaWNlKDApLGQsYSxjKSxyKGUrJ1tcIicrYysnXCJdJyxuLnNsaWNlKDApLGQsYSxjKX1lbHNle3ZhciBkO2lmKHMuc3RhcnRzV2l0aChcIltcIikpe3ZhciB1PXMuc3Vic3RyaW5nKDEscy5sZW5ndGgtMSk7aWYoIXUuc3RhcnRzV2l0aCgnXCInKSYmIXUuc3RhcnRzV2l0aChcIidcIikpdGhyb3dcIkVsZW1lbnQgJ1wiK3UrXCInIG9mIG5vZGUgJ1wiK2UrXCInIG11c3QgYmUgYSBzdHJpbmcgZXhwcmVzc2lvbiBvciB3aWxjYXJkICcqJ1wiO3U9dS5zdWJzdHJpbmcoMSx1Lmxlbmd0aCgpLTEpLGUrPXMsZD1hW3VdfWVsc2UgZT1lLmxlbmd0aD4wP2UrXCIuXCIrczpzLGQ9YVtzXTtyKGUsbixkLGEscyl9fWVsc2UgdChhLGksbyl9fXIodGhpcy5leHAsdGhpcy5xdWV1ZSxlKX19dmFyIFNDSEVNQV9BTlk9e3R5cGU6XCJhbnlcIn0sb2JqPW5ldyBPYmplY3Qsc2NoZW1hTWFwPW5ldyBPYmplY3QsZGVwZW5kZW5jeU1hcD1uZXcgT2JqZWN0LHJlbmRlckluZm9NYXA9bmV3IE9iamVjdCxjb250YWluZXIsZGF0YSxlcnJvcixpbml0aWFsVmFsdWUsaW5wdXRDb3VudGVyPTAscm9vdD1zY2hlbWEsZm9ybUlkPVwiQnJ1dHVzaW5Gb3JtcyNcIitCcnV0dXNpbkZvcm1zLmluc3RhbmNlcy5sZW5ndGg7cmVuYW1lUmVxdWlyZWRQcm9wZXRpZXMoc2NoZW1hKSxwb3B1bGF0ZVNjaGVtYU1hcChcIiRcIixzY2hlbWEpLHZhbGlkYXRlRGVwZW5jeU1hcElzQWN5Y2xpYygpO3ZhciByZW5kZXJlcnM9bmV3IE9iamVjdDtyZXR1cm4gcmVuZGVyZXJzLmludGVnZXI9ZnVuY3Rpb24oZSx0LHIsbixhKXtyZW5kZXJlcnMuc3RyaW5nKGUsdCxyLG4sYSl9LHJlbmRlcmVycy5udW1iZXI9ZnVuY3Rpb24oZSx0LHIsbixhKXtyZW5kZXJlcnMuc3RyaW5nKGUsdCxyLG4sYSl9LHJlbmRlcmVycy5hbnk9ZnVuY3Rpb24oZSx0LHIsbixhKXtyZW5kZXJlcnMuc3RyaW5nKGUsdCxyLG4sYSl9LHJlbmRlcmVycy5zdHJpbmc9ZnVuY3Rpb24oZSx0LHIsbixhKXt2YXIgaSxvPWdldFNjaGVtYUlkKHQpLHM9Z2V0UGFyZW50U2NoZW1hSWQobyksdT1nZXRTY2hlbWEobyksbD1nZXRTY2hlbWEocyk7aWYoXCJhbnlcIj09PXUudHlwZSlpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKSxhJiYoaS52YWx1ZT1KU09OLnN0cmluZ2lmeShhLG51bGwsNCksdS5yZWFkT25seSYmKGkuZGlzYWJsZWQ9ITApKTtlbHNlIGlmKHUubWVkaWEpaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksaS50eXBlPVwiZmlsZVwiLGFwcGVuZENoaWxkKGksZCx1KTtlbHNlIGlmKHVbXCJlbnVtXCJdKXtpZihpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiksIXUucmVxdWlyZWQpe3ZhciBkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIikscD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKTtkLnZhbHVlPVwiXCIsYXBwZW5kQ2hpbGQoZCxwLHUpLGFwcGVuZENoaWxkKGksZCx1KX1mb3IodmFyIGM9MCxtPTA7bTx1W1wiZW51bVwiXS5sZW5ndGg7bSsrKXt2YXIgZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpLHA9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodVtcImVudW1cIl1bbV0pO2QudmFsdWU9dVtcImVudW1cIl1bbV0sYXBwZW5kQ2hpbGQoZCxwLHUpLGFwcGVuZENoaWxkKGksZCx1KSxhJiZ1W1wiZW51bVwiXVttXT09PWEmJihjPW0sdS5yZXF1aXJlZHx8YysrLHUucmVhZE9ubHkmJihpLmRpc2FibGVkPSEwKSl9MT09PXVbXCJlbnVtXCJdLmxlbmd0aD9pLnNlbGVjdGVkSW5kZXg9MTppLnNlbGVjdGVkSW5kZXg9Y31lbHNle2lmKGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLFwiaW50ZWdlclwiPT09dS50eXBlfHxcIm51bWJlclwiPT09dS50eXBlKWkudHlwZT1cIm51bWJlclwiLGkuc3RlcD11LnN0ZXA/XCJcIit1LnN0ZXA6XCJhbnlcIixcIm51bWJlclwiIT10eXBlb2YgYSYmKGE9bnVsbCk7ZWxzZSBpZihcImRhdGUtdGltZVwiPT09dS5mb3JtYXQpdHJ5e2kudHlwZT1cImRhdGV0aW1lLWxvY2FsXCJ9Y2F0Y2goZil7aS50eXBlPVwidGV4dFwifWVsc2VcImVtYWlsXCI9PT11LmZvcm1hdD9pLnR5cGU9XCJlbWFpbFwiOlwidGV4dFwiPT09dS5mb3JtYXQ/aT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik6aS50eXBlPVwidGV4dFwiO251bGwhPT1hJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgYSYmKGkudmFsdWU9YSx1LnJlYWRPbmx5JiYoaS5kaXNhYmxlZD0hMCkpfXJldHVybiBpLnNjaGVtYT1vLGkuc2V0QXR0cmlidXRlKFwiYXV0b2NvcnJlY3RcIixcIm9mZlwiKSxpLmdldFZhbGlkYXRpb25FcnJvcj1mdW5jdGlvbigpe3RyeXt2YXIgZT1nZXRWYWx1ZSh1LGkpO2lmKG51bGw9PT1lKXtpZih1LnJlcXVpcmVkKXtpZighbHx8XCJvYmplY3RcIiE9PWwudHlwZSlyZXR1cm4gQnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5yZXF1aXJlZDtpZihsLnJlcXVpcmVkKXJldHVybiBCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLnJlcXVpcmVkO2Zvcih2YXIgdCBpbiByKWlmKG51bGwhPT1yW3RdKXJldHVybiBCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLnJlcXVpcmVkfX1lbHNle2lmKHUucGF0dGVybiYmIXUucGF0dGVybi50ZXN0KGUpKXJldHVybiBCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLnBhdHRlcm4uZm9ybWF0KHUucGF0dGVybi5zb3VyY2UpO2lmKHUubWluTGVuZ3RoJiYoIWV8fHUubWluTGVuZ3RoPmUubGVuZ3RoKSlyZXR1cm4gQnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5taW5MZW5ndGguZm9ybWF0KHUubWluTGVuZ3RoKTtpZih1Lm1heExlbmd0aCYmZSYmdS5tYXhMZW5ndGg8ZS5sZW5ndGgpcmV0dXJuIEJydXR1c2luRm9ybXMubWVzc2FnZXMubWF4TGVuZ3RoLmZvcm1hdCh1Lm1heExlbmd0aCl9aWYobnVsbCE9PWUmJiFpc05hTihlKSl7aWYodS5tdWx0aXBsZU9mJiZlJXUubXVsdGlwbGVPZiE9PTApcmV0dXJuIEJydXR1c2luRm9ybXMubWVzc2FnZXMubXVsdGlwbGVPZi5mb3JtYXQodS5tdWx0aXBsZU9mKTtpZih1Lmhhc093blByb3BlcnR5KFwibWF4aW11bVwiKSl7aWYodS5leGNsdXNpdmVNYXhpbXVtJiZlPj11Lm1heGltdW0pcmV0dXJuIEJydXR1c2luRm9ybXMubWVzc2FnZXMuZXhjbHVzaXZlTWF4aW11bS5mb3JtYXQodS5tYXhpbXVtKTtpZighdS5leGNsdXNpdmVNYXhpbXVtJiZlPnUubWF4aW11bSlyZXR1cm4gQnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5tYXhpbXVtLmZvcm1hdCh1Lm1heGltdW0pfWlmKHUuaGFzT3duUHJvcGVydHkoXCJtaW5pbXVtXCIpKXtpZih1LmV4Y2x1c2l2ZU1pbmltdW0mJmU8PXUubWluaW11bSlyZXR1cm4gQnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5leGNsdXNpdmVNaW5pbXVtLmZvcm1hdCh1Lm1pbmltdW0pO2lmKCF1LmV4Y2x1c2l2ZU1pbmltdW0mJmU8dS5taW5pbXVtKXJldHVybiBCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLm1pbmltdW0uZm9ybWF0KHUubWluaW11bSl9fX1jYXRjaChuKXtyZXR1cm4gQnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5pbnZhbGlkVmFsdWV9fSxpLm9uY2hhbmdlPWZ1bmN0aW9uKCl7dmFyIGU7dHJ5e2U9Z2V0VmFsdWUodSxpKX1jYXRjaCh0KXtlPW51bGx9cj9yW24uZ2V0VmFsdWUoKV09ZTpkYXRhPWUsb25EZXBlbmRlbmN5Q2hhbmdlZChvLGkpfSx1LmRlc2NyaXB0aW9uJiYoaS50aXRsZT11LmRlc2NyaXB0aW9uLGkucGxhY2Vob2xkZXI9dS5kZXNjcmlwdGlvbiksaS5vbmNoYW5nZSgpLGkuaWQ9Z2V0SW5wdXRJZCgpLGlucHV0Q291bnRlcisrLGFwcGVuZENoaWxkKGUsaSx1KSxyfSxyZW5kZXJlcnNbXCJib29sZWFuXCJdPWZ1bmN0aW9uKGUsdCxyLG4sYSl7dmFyIGksbz1nZXRTY2hlbWFJZCh0KSxzPWdldFNjaGVtYShvKTtpZihzLnJlcXVpcmVkKWk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGkudHlwZT1cImNoZWNrYm94XCIsYT09PSEwJiYoaS5jaGVja2VkPSEwKTtlbHNle2k9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTt2YXIgdT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpLGw9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIik7bC52YWx1ZT1cIlwiLGFwcGVuZENoaWxkKHUsbCxzKSxhcHBlbmRDaGlsZChpLHUscyk7dmFyIGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSxwPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKEJydXR1c2luRm9ybXMubWVzc2FnZXNbXCJ0cnVlXCJdKTtkLnZhbHVlPVwidHJ1ZVwiLGFwcGVuZENoaWxkKGQscCxzKSxhcHBlbmRDaGlsZChpLGQscyk7dmFyIGM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSxtPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKEJydXR1c2luRm9ybXMubWVzc2FnZXNbXCJmYWxzZVwiXSk7Yy52YWx1ZT1cImZhbHNlXCIsYXBwZW5kQ2hpbGQoYyxtLHMpLGFwcGVuZENoaWxkKGksYyxzKSxhPT09ITA/aS5zZWxlY3RlZEluZGV4PTE6YT09PSExJiYoaS5zZWxlY3RlZEluZGV4PTIpfWkub25jaGFuZ2U9ZnVuY3Rpb24oKXtyP3Jbbi5nZXRWYWx1ZSgpXT1nZXRWYWx1ZShzLGkpOmRhdGE9Z2V0VmFsdWUocyxpKSxvbkRlcGVuZGVuY3lDaGFuZ2VkKG8saSl9LGkuc2NoZW1hPW8saS5pZD1nZXRJbnB1dElkKCksaW5wdXRDb3VudGVyKysscy5kZXNjcmlwdGlvbiYmKGkudGl0bGU9cy5kZXNjcmlwdGlvbiksaS5vbmNoYW5nZSgpLGFwcGVuZENoaWxkKGUsaSxzKX0scmVuZGVyZXJzLm9uZU9mPWZ1bmN0aW9uKGUsdCxyLG4sYSl7dmFyIGk9Z2V0U2NoZW1hSWQodCksbz1nZXRTY2hlbWEoaSkscz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpLHU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt1LmlubmVySFRNTD1cIlwiLHMudHlwZT1cInNlbGVjdFwiLHMuc2NoZW1hPWk7dmFyIGw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtsLnZhbHVlPW51bGwsYXBwZW5kQ2hpbGQocyxsLG8pO2Zvcih2YXIgZD0wO2Q8by5vbmVPZi5sZW5ndGg7ZCsrKXt2YXIgcD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpLGM9aStcIi5cIitkLG09Z2V0U2NoZW1hKGMpLGY9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobS50aXRsZSk7aWYocC52YWx1ZT1vLm9uZU9mW2RdLGFwcGVuZENoaWxkKHAsZixvKSxhcHBlbmRDaGlsZChzLHAsbyksdm9pZCAwIT09YSYmbnVsbCE9PWEmJihvLnJlYWRPbmx5JiYocy5kaXNhYmxlZD0hMCksYS5oYXNPd25Qcm9wZXJ0eShcInR5cGVcIikmJm0uaGFzT3duUHJvcGVydHkoXCJwcm9wZXJ0aWVzXCIpJiZtLnByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoXCJ0eXBlXCIpKSl7dmFyIGg9Z2V0U2NoZW1hKG0ucHJvcGVydGllcy50eXBlKTthLnR5cGU9PT1oW1wiZW51bVwiXVswXSYmKHMuc2VsZWN0ZWRJbmRleD1kKzEscmVuZGVyKG51bGwsdSx0K1wiLlwiKyhzLnNlbGVjdGVkSW5kZXgtMSkscixuLGEpKX19cy5vbmNoYW5nZT1mdW5jdGlvbigpe3JlbmRlcihudWxsLHUsdCtcIi5cIisocy5zZWxlY3RlZEluZGV4LTEpLHIsbixhKX0sYXBwZW5kQ2hpbGQoZSxzLG8pLGFwcGVuZENoaWxkKGUsdSxvKX0scmVuZGVyZXJzLm9iamVjdD1mdW5jdGlvbihlLHQscixuLGEpe2Z1bmN0aW9uIGkoZSl7dmFyIHQ9bmV3IE9iamVjdDtyZXR1cm4gdC5nZXRWYWx1ZT1mdW5jdGlvbigpe3JldHVybiBlfSx0Lm9uY2hhbmdlPWZ1bmN0aW9uKGUpe30sdH1mdW5jdGlvbiBvKGUsdCxyLG4sYSxpKXt2YXIgbz1nZXRTY2hlbWFJZChyKSxzPWdldFNjaGVtYShvKSx1PXQudEJvZGllc1swXSxsPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKSxkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtkLmNsYXNzTmFtZT1cImFkZC1wcm9wLW5hbWVcIjt2YXIgcD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIiksYz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIiksbT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIiksZj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIiksaD1cIiRcIitPYmplY3Qua2V5cyhlKS5sZW5ndGgrXCIkXCIsdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7di5jbGFzc05hbWU9XCJwcm9wLXZhbHVlXCI7dmFyIGc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO2cudHlwZT1cInRleHRcIjt2YXIgeTtpJiYoeT1SZWdFeHAoaSkpLGcuZ2V0VmFsaWRhdGlvbkVycm9yPWZ1bmN0aW9uKCl7cmV0dXJuIGcucHJldmlvdXNWYWx1ZSE9PWcudmFsdWUmJmUuaGFzT3duUHJvcGVydHkoZy52YWx1ZSk/QnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5hZGRwcm9wTmFtZUV4aXN0ZW50OmcudmFsdWU/dm9pZCAwOkJydXR1c2luRm9ybXMubWVzc2FnZXMuYWRkcHJvcE5hbWVSZXF1aXJlZH07dmFyIGI9Y3JlYXRlUHJvcGVydHlQcm92aWRlcihmdW5jdGlvbigpe2lmKGcudmFsdWUpe2lmKCF5KXJldHVybiBnLnZhbHVlO2lmKC0xIT09Zy52YWx1ZS5zZWFyY2goeSkpcmV0dXJuIGcudmFsdWV9cmV0dXJuIGh9LGZ1bmN0aW9uKHQpe2IuZ2V0VmFsdWUoKSE9PXQmJih0JiZlLmhhc093blByb3BlcnR5KHQpfHwodD1oKSwoZS5oYXNPd25Qcm9wZXJ0eSh0KXx8eSYmLTE9PT1iLmdldFZhbHVlKCkuc2VhcmNoKHkpKSYmKGVbYi5nZXRWYWx1ZSgpXT1lW3RdLGRlbGV0ZSBlW3RdKSl9KTtnLm9uYmx1cj1mdW5jdGlvbigpe2lmKGcucHJldmlvdXNWYWx1ZSE9PWcudmFsdWUpe2Zvcih2YXIgdD1nLnZhbHVlLHI9MTtnLnByZXZpb3VzVmFsdWUhPT10JiZlLmhhc093blByb3BlcnR5KHQpOyl0PWcudmFsdWUrXCIoXCIrcitcIilcIixyKys7cmV0dXJuIGcudmFsdWU9dCxiLm9uY2hhbmdlKGcucHJldmlvdXNWYWx1ZSksdm9pZChnLnByZXZpb3VzVmFsdWU9Zy52YWx1ZSl9fTt2YXIgUD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1Auc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiYnV0dG9uXCIpLFAuY2xhc3NOYW1lPVwicmVtb3ZlXCIsYXBwZW5kQ2hpbGQoUCxkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcInhcIikscyksUC5vbmNsaWNrPWZ1bmN0aW9uKCl7ZGVsZXRlIGVbZy52YWx1ZV0sdC5kZWxldGVSb3cobC5yb3dJbmRleCksZy52YWx1ZT1udWxsLGIub25jaGFuZ2UoZy5wcmV2aW91c1ZhbHVlKX0sYXBwZW5kQ2hpbGQobSxnLHMpLGFwcGVuZENoaWxkKGYsUCxzKSxhcHBlbmRDaGlsZChjLG0scyksYXBwZW5kQ2hpbGQoYyxmLHMpLGFwcGVuZENoaWxkKHAsYyxzKSxhcHBlbmRDaGlsZChkLHAscyksdm9pZCAwIT09aSYmKGcucGxhY2Vob2xkZXI9aSksYXBwZW5kQ2hpbGQobCxkLHMpLGFwcGVuZENoaWxkKGwsdixzKSxhcHBlbmRDaGlsZCh1LGwscyksYXBwZW5kQ2hpbGQodCx1LHMpLHJlbmRlcihudWxsLHYscixlLGIsYSksbiYmKGcudmFsdWU9bixnLm9uYmx1cigpKX12YXIgcz1nZXRTY2hlbWFJZCh0KSx1PWdldFNjaGVtYShzKSxsPW5ldyBPYmplY3Q7cj8obi5nZXRWYWx1ZSgpfHwwPT09bi5nZXRWYWx1ZSgpKSYmKHJbbi5nZXRWYWx1ZSgpXT1sKTpkYXRhPWw7dmFyIGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO2QuY2xhc3NOYW1lPVwib2JqZWN0XCI7dmFyIHA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO2FwcGVuZENoaWxkKGQscCx1KTt2YXIgYz0wO2lmKHUuaGFzT3duUHJvcGVydHkoXCJwcm9wZXJ0aWVzXCIpKXtjPXUucHJvcGVydGllcy5sZW5ndGg7Zm9yKHZhciBtIGluIHUucHJvcGVydGllcyl7dmFyIGY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpLGg9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO2guY2xhc3NOYW1lPVwicHJvcC1uYW1lXCI7dmFyIHY9dCtcIi5cIittLGc9Z2V0U2NoZW1hKGdldFNjaGVtYUlkKHYpKSx5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTt5LmNsYXNzTmFtZT1cInByb3AtdmFsdWVcIixhcHBlbmRDaGlsZChwLGYsZyksYXBwZW5kQ2hpbGQoZixoLGcpLGFwcGVuZENoaWxkKGYseSxnKTt2YXIgYj1pKG0pLFA9bnVsbDthJiYoUD1hW21dKSxyZW5kZXIoaCx5LHYsbCxiLFApfX12YXIgTz1bXTtpZih1LnBhdHRlcm5Qcm9wZXJ0aWVzfHx1LmFkZGl0aW9uYWxQcm9wZXJ0aWVzKXt2YXIgdz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2lmKGFwcGVuZENoaWxkKHcsZCx1KSx1LnBhdHRlcm5Qcm9wZXJ0aWVzKWZvcih2YXIgeCBpbiB1LnBhdHRlcm5Qcm9wZXJ0aWVzKXt2YXIgQz11LnBhdHRlcm5Qcm9wZXJ0aWVzW3hdLEU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtFLmNsYXNzTmFtZT1cImFkZC1wYXR0ZXJuLWRpdlwiO3ZhciBTPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7aWYoUy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJidXR0b25cIiksUy5wYXR0ZXJuPXgsUy5pZD10K1wiW1wiK3grXCJdXCIsUy5vbmNsaWNrPWZ1bmN0aW9uKCl7byhsLGQsdGhpcy5pZCx2b2lkIDAsdm9pZCAwLHRoaXMucGF0dGVybil9LCh1Lm1heFByb3BlcnRpZXN8fHUubWluUHJvcGVydGllcykmJihTLmdldFZhbGlkYXRpb25FcnJvcj1mdW5jdGlvbigpe3JldHVybiB1Lm1pblByb3BlcnRpZXMmJmMrZC5yb3dzLmxlbmd0aDx1Lm1pblByb3BlcnRpZXM/QnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5taW5Qcm9wZXJ0aWVzLmZvcm1hdCh1Lm1pblByb3BlcnRpZXMpOnUubWF4UHJvcGVydGllcyYmYytkLnJvd3MubGVuZ3RoPnUubWF4UHJvcGVydGllcz9CcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLm1heFByb3BlcnRpZXMuZm9ybWF0KHUubWF4UHJvcGVydGllcyk6dm9pZCAwfSksQy5kZXNjcmlwdGlvbiYmKFMudGl0bGU9Qy5kZXNjcmlwdGlvbiksYXBwZW5kQ2hpbGQoUyxkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkFkZCBcIit4KSx1KSxhcHBlbmRDaGlsZChFLFMsdSksYSlmb3IodmFyIEkgaW4gYSlpZighdS5wcm9wZXJ0aWVzfHwhdS5wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KEkpKXt2YXIgTj1SZWdFeHAoeCk7LTEhPT1JLnNlYXJjaChOKSYmLTE9PT1PLmluZGV4T2YoSSkmJihvKGwsZCx0K1wiW1wiK3grXCJdXCIsSSxhW0ldLHgpLE8ucHVzaChJKSl9YXBwZW5kQ2hpbGQodyxFLHUpfWlmKHUuYWRkaXRpb25hbFByb3BlcnRpZXMpe3ZhciBGPWdldFNjaGVtYSh1LmFkZGl0aW9uYWxQcm9wZXJ0aWVzKSxTPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7aWYoUy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJidXR0b25cIiksUy5vbmNsaWNrPWZ1bmN0aW9uKCl7byhsLGQsdCtcIlsqXVwiLHZvaWQgMCl9LCh1Lm1heFByb3BlcnRpZXN8fHUubWluUHJvcGVydGllcykmJihTLmdldFZhbGlkYXRpb25FcnJvcj1mdW5jdGlvbigpe3JldHVybiB1Lm1pblByb3BlcnRpZXMmJmMrZC5yb3dzLmxlbmd0aDx1Lm1pblByb3BlcnRpZXM/QnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5taW5Qcm9wZXJ0aWVzLmZvcm1hdCh1Lm1pblByb3BlcnRpZXMpOnUubWF4UHJvcGVydGllcyYmYytkLnJvd3MubGVuZ3RoPnUubWF4UHJvcGVydGllcz9CcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLm1heFByb3BlcnRpZXMuZm9ybWF0KHUubWF4UHJvcGVydGllcyk6dm9pZCAwfSksRi5kZXNjcmlwdGlvbiYmKFMudGl0bGU9Ri5kZXNjcmlwdGlvbiksYXBwZW5kQ2hpbGQoUyxkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkFkZFwiKSx1KSxhcHBlbmRDaGlsZCh3LFMsdSksYSlmb3IodmFyIEkgaW4gYSl1LnByb3BlcnRpZXMmJnUucHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShJKXx8LTE9PT1PLmluZGV4T2YoSSkmJm8obCxkLHQrJ1tcIicrbSsnXCJdJyxJLGFbSV0pfWFwcGVuZENoaWxkKGUsdyx1KX1lbHNlIGFwcGVuZENoaWxkKGUsZCx1KX0scmVuZGVyZXJzLmFycmF5PWZ1bmN0aW9uKGUsdCxyLG4sYSl7ZnVuY3Rpb24gaShlLHQscixuLGEpe3ZhciBpPWdldFNjaGVtYUlkKHIpLG89Z2V0U2NoZW1hKGkpLHM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpLHU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO3UuY2xhc3NOYW1lPVwiaXRlbVwiO3ZhciBsPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtsLmNsYXNzTmFtZT1cIml0ZW0taW5kZXhcIjt2YXIgZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7ZC5jbGFzc05hbWU9XCJpdGVtLWFjdGlvblwiO3ZhciBwPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtwLmNsYXNzTmFtZT1cIml0ZW0tdmFsdWVcIjt2YXIgYz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO2Muc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiYnV0dG9uXCIpLGMuY2xhc3NOYW1lPVwicmVtb3ZlXCIsYT09PSEwJiYoYy5kaXNhYmxlZD0hMCksYXBwZW5kQ2hpbGQoYyxkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcInhcIiksbyk7dmFyIG09ZnVuY3Rpb24oKXtmb3IodmFyIGU9MDtlPHQucm93cy5sZW5ndGg7ZSsrKXt2YXIgcj10LnJvd3NbZV07ci5jZWxsc1swXS5pbm5lckhUTUw9ZSsxfX07Yy5vbmNsaWNrPWZ1bmN0aW9uKCl7ZS5zcGxpY2UodS5yb3dJbmRleCwxKSx0LmRlbGV0ZVJvdyh1LnJvd0luZGV4KSxtKCl9LGFwcGVuZENoaWxkKGQsYyxvKTt2YXIgZj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0LnJvd3MubGVuZ3RoKzEpO2FwcGVuZENoaWxkKGwsZixvKSxhcHBlbmRDaGlsZCh1LGwsbyksYXBwZW5kQ2hpbGQodSxkLG8pLGFwcGVuZENoaWxkKHUscCxvKSxhcHBlbmRDaGlsZChzLHUsbyksYXBwZW5kQ2hpbGQodCxzLG8pO3ZhciBoPWNyZWF0ZVByb3BlcnR5UHJvdmlkZXIoZnVuY3Rpb24oKXtyZXR1cm4gdS5yb3dJbmRleH0pO3JlbmRlcihudWxsLHAscixlLGgsbil9dmFyIG89Z2V0U2NoZW1hSWQodCkscz1nZXRTY2hlbWEobyksdT1nZXRTY2hlbWEocy5pdGVtcyksbD1uZXcgQXJyYXk7cj8obi5nZXRWYWx1ZSgpfHwwPT09bi5nZXRWYWx1ZSgpKSYmKHJbbi5nZXRWYWx1ZSgpXT1sKTpkYXRhPWwsbiYmKG4ub25jaGFuZ2U9ZnVuY3Rpb24oZSl7ZGVsZXRlIHJbZV0scltuLmdldFZhbHVlKCldPWx9KTt2YXIgZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO3AuY2xhc3NOYW1lPVwiYXJyYXlcIixhcHBlbmRDaGlsZChkLHAscyksYXBwZW5kQ2hpbGQoZSxkLHMpO3ZhciBjPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7aWYocy5yZWFkT25seSYmKGMuZGlzYWJsZWQ9ITApLGMuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiYnV0dG9uXCIpLGMuZ2V0VmFsaWRhdGlvbkVycm9yPWZ1bmN0aW9uKCl7aWYocy5taW5JdGVtcyYmcy5taW5JdGVtcz5wLnJvd3MubGVuZ3RoKXJldHVybiBCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLm1pbkl0ZW1zLmZvcm1hdChzLm1pbkl0ZW1zKTtpZihzLm1heEl0ZW1zJiZzLm1heEl0ZW1zPHAucm93cy5sZW5ndGgpcmV0dXJuIEJydXR1c2luRm9ybXMubWVzc2FnZXMubWF4SXRlbXMuZm9ybWF0KHMubWF4SXRlbXMpO2lmKHMudW5pcXVlSXRlbXMpZm9yKHZhciBlPTA7ZTxsLmxlbmd0aDtlKyspZm9yKHZhciB0PWUrMTt0PGwubGVuZ3RoO3QrKylpZihKU09OLnN0cmluZ2lmeShsW2VdKT09PUpTT04uc3RyaW5naWZ5KGxbdF0pKXJldHVybiBCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLnVuaXF1ZUl0ZW1zfSxjLm9uY2xpY2s9ZnVuY3Rpb24oKXtpKGwscCx0K1wiWyNdXCIsbnVsbCl9LHUuZGVzY3JpcHRpb24mJihjLnRpdGxlPXUuZGVzY3JpcHRpb24pLGFwcGVuZENoaWxkKGMsZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoQnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5hZGRJdGVtKSxzKSxhcHBlbmRDaGlsZChkLHAscyksYXBwZW5kQ2hpbGQoZCxjLHMpLGEmJmEgaW5zdGFuY2VvZiBBcnJheSlmb3IodmFyIG09MDttPGEubGVuZ3RoO20rKylpKGwscCx0K1wiW1wiK20rXCJdXCIsYVttXSxzLnJlYWRPbmx5KTthcHBlbmRDaGlsZChlLGQscyl9LG9iai5yZW5kZXI9ZnVuY3Rpb24oZSx0KXtjb250YWluZXI9ZSxpbml0aWFsVmFsdWU9dDt2YXIgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtpZihyLmNsYXNzTmFtZT1cImJydXR1c2luLWZvcm1cIixyLm9uc3VibWl0PWZ1bmN0aW9uKGUpe3JldHVybiExfSxjb250YWluZXI/YXBwZW5kQ2hpbGQoY29udGFpbmVyLHIpOmFwcGVuZENoaWxkKGRvY3VtZW50LmJvZHksciksZXJyb3Ipe3ZhciBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKSxhPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGVycm9yKTthcHBlbmRDaGlsZChuLGEpLG4uY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiLGFwcGVuZENoaWxkKHIsbil9ZWxzZSByZW5kZXIobnVsbCxyLFwiJFwiLG51bGwsbnVsbCk7ZGVwZW5kZW5jeU1hcC5oYXNPd25Qcm9wZXJ0eShcIiRcIikmJm9uRGVwZW5kZW5jeUNoYW5nZWQoXCIkXCIpLEJydXR1c2luRm9ybXMucG9zdFJlbmRlciYmQnJ1dHVzaW5Gb3Jtcy5wb3N0UmVuZGVyKG9iail9LG9iai5nZXRSZW5kZXJpbmdDb250YWluZXI9ZnVuY3Rpb24oKXtyZXR1cm4gY29udGFpbmVyfSxvYmoudmFsaWRhdGU9ZnVuY3Rpb24oKXtyZXR1cm4gdmFsaWRhdGUoY29udGFpbmVyKX0sb2JqLmdldERhdGE9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQscil7aWYobnVsbD09PXMmJihzPVNDSEVNQV9BTlkpLHIuJHJlZiYmKHI9Z2V0RGVmaW5pdGlvbihyLiRyZWYpKSx0IGluc3RhbmNlb2YgQXJyYXkpe2lmKDA9PT10Lmxlbmd0aClyZXR1cm4gbnVsbDtmb3IodmFyIG49bmV3IEFycmF5LGE9MDthPHQubGVuZ3RoO2ErKyluW2FdPWUodFthXSxyLml0ZW1zKTtyZXR1cm4gbn1pZihcIlwiPT09dClyZXR1cm4gbnVsbDtpZih0IGluc3RhbmNlb2YgT2JqZWN0KXt2YXIgbj1uZXcgT2JqZWN0LGk9ITE7Zm9yKHZhciBvIGluIHQpaWYoIW8uc3RhcnRzV2l0aChcIiRcIil8fCFvLmVuZHNXaXRoKFwiJFwiKSl7dmFyIHM9bnVsbDtpZihyLmhhc093blByb3BlcnR5KFwicHJvcGVydGllc1wiKSYmci5wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KG8pJiYocz1yLnByb3BlcnRpZXNbb10pLG51bGw9PT1zJiZyLmhhc093blByb3BlcnR5KFwiYWRkaXRpb25hbFByb3BlcnRpZXNcIikmJlwib2JqZWN0XCI9PXR5cGVvZiByLmFkZGl0aW9uYWxQcm9wZXJ0aWVzJiYocz1yLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKSxudWxsPT09cyYmci5oYXNPd25Qcm9wZXJ0eShcInBhdHRlcm5Qcm9wZXJ0aWVzXCIpKWZvcih2YXIgdSBpbiByLnBhdHRlcm5Qcm9wZXJ0aWVzKXt2YXIgbD1SZWdFeHAodSk7aWYoLTEhPT1vLnNlYXJjaChsKSl7cz1yLnBhdHRlcm5Qcm9wZXJ0aWVzW3VdO2JyZWFrfX12YXIgZD1lKHRbb10scyk7bnVsbCE9PWQmJihuW29dPWQsaT0hMCl9cmV0dXJuIGl8fHIucmVxdWlyZWQ/bjpudWxsfXJldHVybiB0fXJldHVybiBjb250YWluZXI/ZShkYXRhLHNjaGVtYSk6bnVsbH0sQnJ1dHVzaW5Gb3Jtcy5pbnN0YW5jZXNbQnJ1dHVzaW5Gb3Jtcy5pbnN0YW5jZXMubGVuZ3RoXT1vYmosb2JqfSxicnV0dXNpbltcImpzb24tZm9ybXNcIl09QnJ1dHVzaW5Gb3Jtc30oKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnJ1dHVzaW4tanNvbi1mb3Jtcy9kaXN0L2pzL2JydXR1c2luLWpzb24tZm9ybXMubWluLmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jhc2Uuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiIWZ1bmN0aW9uKGYpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlKW1vZHVsZS5leHBvcnRzPWYoKTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW10sZik7ZWxzZXsoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbD9nbG9iYWw6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGY/c2VsZjp0aGlzKS5NZXRlb3JFbW9qaT1mKCl9fShmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobnx8ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9Zm9yKHZhciBpPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KHsxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXshZnVuY3Rpb24oZ2xvYmFsLGZhY3Rvcnkpe2lmKHZvaWQgMCE9PWV4cG9ydHMpZmFjdG9yeShtb2R1bGUpO2Vsc2V7dmFyIG1vZD17ZXhwb3J0czp7fX07ZmFjdG9yeShtb2QpLGdsb2JhbC5tZXRlb3JFbW9qaT1tb2QuZXhwb3J0c319KHRoaXMsZnVuY3Rpb24obW9kdWxlKXtcInVzZSBzdHJpY3RcIjt2YXIgX2NyZWF0ZUNsYXNzPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQscHJvcHMpe2Zvcih2YXIgaT0wO2k8cHJvcHMubGVuZ3RoO2krKyl7dmFyIGRlc2NyaXB0b3I9cHJvcHNbaV07ZGVzY3JpcHRvci5lbnVtZXJhYmxlPWRlc2NyaXB0b3IuZW51bWVyYWJsZXx8ITEsZGVzY3JpcHRvci5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gZGVzY3JpcHRvciYmKGRlc2NyaXB0b3Iud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsZGVzY3JpcHRvci5rZXksZGVzY3JpcHRvcil9fXJldHVybiBmdW5jdGlvbihDb25zdHJ1Y3Rvcixwcm90b1Byb3BzLHN0YXRpY1Byb3BzKXtyZXR1cm4gcHJvdG9Qcm9wcyYmZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUscHJvdG9Qcm9wcyksc3RhdGljUHJvcHMmJmRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3Isc3RhdGljUHJvcHMpLENvbnN0cnVjdG9yfX0oKSxNZXRlb3JFbW9qaT1mdW5jdGlvbigpe2Z1bmN0aW9uIE1ldGVvckVtb2ppKCl7IWZ1bmN0aW9uKGluc3RhbmNlLENvbnN0cnVjdG9yKXtpZighKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9KHRoaXMsTWV0ZW9yRW1vamkpLHRoaXMuaW5pdGlhdGUoKX1yZXR1cm4gX2NyZWF0ZUNsYXNzKE1ldGVvckVtb2ppLFt7a2V5OlwiaW5pdGlhdGVcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBfdGhpcz10aGlzO2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1ldGVvci1lbW9qaT1cInRydWVcIl0sIFtkYXRhLW1ldGVvci1lbW9qaS1sYXJnZT1cInRydWVcIl0nKS5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpe190aGlzLmdlbmVyYXRlRWxlbWVudHMoZWxlbWVudCl9KX19LHtrZXk6XCJnZW5lcmF0ZUVsZW1lbnRzXCIsdmFsdWU6ZnVuY3Rpb24oZW1vamlJbnB1dCl7dmFyIGNsaWNrTGluaz1mdW5jdGlvbihldmVudCl7dmFyIGNhcmV0UG9zPWVtb2ppSW5wdXQuc2VsZWN0aW9uU3RhcnQ7ZW1vamlJbnB1dC52YWx1ZT1lbW9qaUlucHV0LnZhbHVlLnN1YnN0cmluZygwLGNhcmV0UG9zKStcIiBcIitldmVudC50YXJnZXQuaW5uZXJIVE1MK2Vtb2ppSW5wdXQudmFsdWUuc3Vic3RyaW5nKGNhcmV0UG9zKSxlbW9qaVBpY2tlci5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIixcInVuZGVmaW5lZFwiIT10eXBlb2YgYW5ndWxhciYmYW5ndWxhci5lbGVtZW50KGVtb2ppSW5wdXQpLnRyaWdnZXJIYW5kbGVyKFwiY2hhbmdlXCIpfSxjbGlja0NhdGVnb3J5PWZ1bmN0aW9uKGV2ZW50KXtlbW9qaUlucHV0LnNlbGVjdGlvblN0YXJ0O2Vtb2ppUGlja2VyLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiO2Zvcih2YXIgaGlkZVVscz1lbW9qaVBpY2tlci5xdWVyeVNlbGVjdG9yQWxsKFwidWxcIiksaT0xLGw9aGlkZVVscy5sZW5ndGg7aTxsO2krKyloaWRlVWxzW2ldLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7dmFyIGJhY2tncm91bmRUb2dnbGU9ZW1vamlQaWNrZXIucXVlcnlTZWxlY3RvckFsbChcIi5jYXRlZ29yeSBhXCIpO2ZvcihpPTAsbD1iYWNrZ3JvdW5kVG9nZ2xlLmxlbmd0aDtpPGw7aSsrKWJhY2tncm91bmRUb2dnbGVbaV0uc3R5bGUuYmFja2dyb3VuZD1cIm5vbmVcIjtlbW9qaVBpY2tlci5xdWVyeVNlbGVjdG9yKFwiLlwiK2V2ZW50LnRhcmdldC5pZCkuc3R5bGUuZGlzcGxheT1cImJsb2NrXCIsZW1vamlQaWNrZXIucXVlcnlTZWxlY3RvcihcIiNcIitldmVudC50YXJnZXQuaWQpLnN0eWxlLmJhY2tncm91bmQ9XCIjYzJjMmMyXCJ9O2Vtb2ppSW5wdXQuc3R5bGUud2lkdGg9XCIxMDAlXCI7dmFyIGVtb2ppQ29udGFpbmVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZW1vamlDb250YWluZXIuc3R5bGUucG9zaXRpb249XCJyZWxhdGl2ZVwiLGVtb2ppSW5wdXQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoZW1vamlDb250YWluZXIsZW1vamlJbnB1dCksZW1vamlDb250YWluZXIuYXBwZW5kQ2hpbGQoZW1vamlJbnB1dCk7dmFyIGVtb2ppUGlja2VyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZW1vamlQaWNrZXIudGFiSW5kZXg9MCxlbW9qaUlucHV0Lmhhc0F0dHJpYnV0ZShcImRhdGEtbWV0ZW9yLWVtb2ppLWxhcmdlXCIpPyhlbW9qaVBpY2tlci5zdHlsZS56SW5kZXg9XCI5OTlcIixlbW9qaVBpY2tlci5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIixlbW9qaVBpY2tlci5zdHlsZS53aWR0aD1cIjEwMCVcIixlbW9qaVBpY2tlci5zdHlsZS5tYXJnaW5Cb3R0b209XCIxNXB4XCIpOihlbW9qaVBpY2tlci5zdHlsZS5wb3NpdGlvbj1cImFic29sdXRlXCIsZW1vamlQaWNrZXIuc3R5bGUucmlnaHQ9XCIwcHhcIixlbW9qaVBpY2tlci5zdHlsZS50b3A9XCIzMHB4XCIsZW1vamlQaWNrZXIuc3R5bGUuZGlzcGxheT1cIm5vbmVcIixlbW9qaVBpY2tlci5zdHlsZS53aWR0aD1cIjQwMHB4XCIpLGVtb2ppUGlja2VyLnN0eWxlLnpJbmRleD1cIjk5OVwiLGVtb2ppUGlja2VyLnN0eWxlLm92ZXJmbG93PVwiaGlkZGVuXCIsZW1vamlQaWNrZXIuc3R5bGUuYmFja2dyb3VuZD1cIiNmZmZcIixlbW9qaVBpY2tlci5zdHlsZS5ib3JkZXJSYWRpdXM9XCI1cHhcIixlbW9qaVBpY2tlci5zdHlsZS5ib3hTaGFkb3c9XCIwIDNweCA2cHggcmdiYSgwLDAsMCwwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yMylcIixlbW9qaVBpY2tlci5zdHlsZS5ib3JkZXJSYWRpdXM9XCIycHg7XCIsZW1vamlQaWNrZXIuc3R5bGUubWFyZ2luVG9wPVwiNXB4XCIsZW1vamlQaWNrZXIuc3R5bGUub3V0bGluZT1cIm5vbmVcIjt2YXIgZW1vamlUcmlnZ2VyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2Vtb2ppVHJpZ2dlci5zdHlsZS5wb3NpdGlvbj1cImFic29sdXRlXCIsZW1vamlUcmlnZ2VyLnN0eWxlLnRvcD1cIjEwcHhcIixlbW9qaVRyaWdnZXIuc3R5bGUucmlnaHQ9XCIxMHB4XCIsZW1vamlUcmlnZ2VyLnN0eWxlLnRleHREZWNvcmF0aW9uPVwibm9uZVwiLGVtb2ppVHJpZ2dlci5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsXCJqYXZhc2NyaXB0OnZvaWQoMClcIiksZW1vamlUcmlnZ2VyLmlubmVySFRNTD0nPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAxMiAxNFwiPjxwYXRoIGQ9XCJNOC45IDguNHEtMC4zIDAuOS0xLjEgMS41dC0xLjggMC42LTEuOC0wLjYtMS4xLTEuNXEtMC4xLTAuMiAwLTAuNHQwLjMtMC4ycTAuMi0wLjEgMC40IDB0MC4yIDAuM3EwLjIgMC42IDAuNyAxdDEuMiAwLjQgMS4yLTAuNCAwLjctMXEwLjEtMC4yIDAuMy0wLjN0MC40IDAgMC4zIDAuMiAwIDAuNHpNNSA1cTAgMC40LTAuMyAwLjd0LTAuNyAwLjMtMC43LTAuMy0wLjMtMC43IDAuMy0wLjcgMC43LTAuMyAwLjcgMC4zIDAuMyAwLjd6TTkgNXEwIDAuNC0wLjMgMC43dC0wLjcgMC4zLTAuNy0wLjMtMC4zLTAuNyAwLjMtMC43IDAuNy0wLjMgMC43IDAuMyAwLjMgMC43ek0xMSA3cTAtMS0wLjQtMS45dC0xLjEtMS42LTEuNi0xLjEtMS45LTAuNC0xLjkgMC40LTEuNiAxLjEtMS4xIDEuNi0wLjQgMS45IDAuNCAxLjkgMS4xIDEuNiAxLjYgMS4xIDEuOSAwLjQgMS45LTAuNCAxLjYtMS4xIDEuMS0xLjYgMC40LTEuOXpNMTIgN3EwIDEuNi0wLjggM3QtMi4yIDIuMi0zIDAuOC0zLTAuOC0yLjItMi4yLTAuOC0zIDAuOC0zIDIuMi0yLjIgMy0wLjggMyAwLjggMi4yIDIuMiAwLjggM3pcIi8+PC9zdmc+JyxlbW9qaVRyaWdnZXIub25jbGljaz1mdW5jdGlvbigpe1wibm9uZVwiPT09ZW1vamlQaWNrZXIuc3R5bGUuZGlzcGxheT9lbW9qaVBpY2tlci5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjpcImJsb2NrXCI9PT1lbW9qaVBpY2tlci5zdHlsZS5kaXNwbGF5JiYoZW1vamlQaWNrZXIuc3R5bGUuZGlzcGxheT1cIm5vbmVcIiksZW1vamlQaWNrZXIuZm9jdXMoKX0sZW1vamlJbnB1dC5oYXNBdHRyaWJ1dGUoXCJkYXRhLW1ldGVvci1lbW9qaS1sYXJnZVwiKXx8ZW1vamlDb250YWluZXIuYXBwZW5kQ2hpbGQoZW1vamlUcmlnZ2VyKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oZSl7ZW1vamlJbnB1dC5oYXNBdHRyaWJ1dGUoXCJkYXRhLW1ldGVvci1lbW9qaS1sYXJnZVwiKXx8XCJibG9ja1wiPT09ZW1vamlQaWNrZXIuc3R5bGUuZGlzcGxheSYmKGVtb2ppUGlja2VyLmNvbnRhaW5zKGUudGFyZ2V0KXx8ZW1vamlUcmlnZ2VyLmNvbnRhaW5zKGUudGFyZ2V0KXx8KGVtb2ppUGlja2VyLnN0eWxlLmRpc3BsYXk9XCJub25lXCIpKX0pO3ZhciBmYWNlc0NhdGVnb3J5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtmYWNlc0NhdGVnb3J5LnN0eWxlLnBhZGRpbmc9XCIxMHB4IDBweFwiLGZhY2VzQ2F0ZWdvcnkuc3R5bGUubWFyZ2luPVwiMFwiLGZhY2VzQ2F0ZWdvcnkuc3R5bGUubGlzdFN0eWxlPVwibm9uZVwiLGZhY2VzQ2F0ZWdvcnkuc3R5bGUudGV4dEFsaWduPVwibGVmdFwiLGZhY2VzQ2F0ZWdvcnkuc3R5bGUubWFyZ2luTGVmdD1cIjMlXCIsZmFjZXNDYXRlZ29yeS5jbGFzc0xpc3QuYWRkKFwiZmFjZXNcIik7dmFyIGFuaW1hbHNDYXRlZ29yeT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7YW5pbWFsc0NhdGVnb3J5LnN0eWxlLnBhZGRpbmc9XCIxMHB4IDBweFwiLGFuaW1hbHNDYXRlZ29yeS5zdHlsZS5tYXJnaW49XCIwXCIsYW5pbWFsc0NhdGVnb3J5LnN0eWxlLmxpc3RTdHlsZT1cIm5vbmVcIixhbmltYWxzQ2F0ZWdvcnkuc3R5bGUudGV4dEFsaWduPVwibGVmdFwiLGFuaW1hbHNDYXRlZ29yeS5zdHlsZS5tYXJnaW5MZWZ0PVwiMyVcIixhbmltYWxzQ2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChcImFuaW1hbHNcIiksYW5pbWFsc0NhdGVnb3J5LnN0eWxlLmRpc3BsYXk9XCJub25lXCI7dmFyIGZvb2RDYXRlZ29yeT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7Zm9vZENhdGVnb3J5LnN0eWxlLnBhZGRpbmc9XCIxMHB4IDBweFwiLGZvb2RDYXRlZ29yeS5zdHlsZS5tYXJnaW49XCIwXCIsZm9vZENhdGVnb3J5LnN0eWxlLmxpc3RTdHlsZT1cIm5vbmVcIixmb29kQ2F0ZWdvcnkuc3R5bGUudGV4dEFsaWduPVwibGVmdFwiLGZvb2RDYXRlZ29yeS5zdHlsZS5tYXJnaW5MZWZ0PVwiMyVcIixmb29kQ2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChcImZvb2RcIiksZm9vZENhdGVnb3J5LnN0eWxlLmRpc3BsYXk9XCJub25lXCI7dmFyIHNwb3J0Q2F0ZWdvcnk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO3Nwb3J0Q2F0ZWdvcnkuc3R5bGUucGFkZGluZz1cIjEwcHggMHB4XCIsc3BvcnRDYXRlZ29yeS5zdHlsZS5tYXJnaW49XCIwXCIsc3BvcnRDYXRlZ29yeS5zdHlsZS5saXN0U3R5bGU9XCJub25lXCIsc3BvcnRDYXRlZ29yeS5zdHlsZS50ZXh0QWxpZ249XCJsZWZ0XCIsc3BvcnRDYXRlZ29yeS5zdHlsZS5tYXJnaW5MZWZ0PVwiMyVcIixzcG9ydENhdGVnb3J5LmNsYXNzTGlzdC5hZGQoXCJzcG9ydFwiKSxzcG9ydENhdGVnb3J5LnN0eWxlLmRpc3BsYXk9XCJub25lXCI7dmFyIHRyYW5zcG9ydENhdGVnb3J5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTt0cmFuc3BvcnRDYXRlZ29yeS5zdHlsZS5wYWRkaW5nPVwiMTBweCAwcHhcIix0cmFuc3BvcnRDYXRlZ29yeS5zdHlsZS5tYXJnaW49XCIwXCIsdHJhbnNwb3J0Q2F0ZWdvcnkuc3R5bGUubGlzdFN0eWxlPVwibm9uZVwiLHRyYW5zcG9ydENhdGVnb3J5LnN0eWxlLnRleHRBbGlnbj1cImxlZnRcIix0cmFuc3BvcnRDYXRlZ29yeS5zdHlsZS5tYXJnaW5MZWZ0PVwiMyVcIix0cmFuc3BvcnRDYXRlZ29yeS5jbGFzc0xpc3QuYWRkKFwidHJhbnNwb3J0XCIpLHRyYW5zcG9ydENhdGVnb3J5LnN0eWxlLmRpc3BsYXk9XCJub25lXCI7dmFyIG9iamVjdHNDYXRlZ29yeT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7b2JqZWN0c0NhdGVnb3J5LnN0eWxlLnBhZGRpbmc9XCIxMHB4IDBweFwiLG9iamVjdHNDYXRlZ29yeS5zdHlsZS5tYXJnaW49XCIwXCIsb2JqZWN0c0NhdGVnb3J5LnN0eWxlLmxpc3RTdHlsZT1cIm5vbmVcIixvYmplY3RzQ2F0ZWdvcnkuc3R5bGUudGV4dEFsaWduPVwibGVmdFwiLG9iamVjdHNDYXRlZ29yeS5zdHlsZS5tYXJnaW5MZWZ0PVwiMyVcIixvYmplY3RzQ2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChcIm9iamVjdHNcIiksb2JqZWN0c0NhdGVnb3J5LnN0eWxlLmRpc3BsYXk9XCJub25lXCI7dmFyIGVtb2ppQ2F0ZWdvcnk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO2Vtb2ppQ2F0ZWdvcnkuc3R5bGUucGFkZGluZz1cIjBweFwiLGVtb2ppQ2F0ZWdvcnkuc3R5bGUubWFyZ2luPVwiMFwiLGVtb2ppQ2F0ZWdvcnkuc3R5bGUuZGlzcGxheT1cInRhYmxlXCIsZW1vamlDYXRlZ29yeS5zdHlsZS53aWR0aD1cIjEwMCVcIixlbW9qaUNhdGVnb3J5LnN0eWxlLmJhY2tncm91bmQ9XCIjZWZmMGYxXCIsZW1vamlDYXRlZ29yeS5zdHlsZS5saXN0U3R5bGU9XCJub25lXCIsZW1vamlDYXRlZ29yeS5jbGFzc0xpc3QuYWRkKFwiY2F0ZWdvcnlcIik7dmFyIGVtb2ppQ2F0ZWdvcmllcz1uZXcgQXJyYXk7ZW1vamlDYXRlZ29yaWVzLnB1c2goe25hbWU6XCJmYWNlc1wiLHN2ZzonPHN2ZyBpZD1cImZhY2VzXCIgZGF0YS1uYW1lPVwiTGF5ZXIgMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDE1MCAxNTBcIj48cGF0aCBpZD1cImZhY2VzXCIgZD1cIk03NC4zNCwxMjguNDhhNTMuNSw1My41LDAsMSwxLDM3Ljg0LTE1LjY3LDUzLjE2LDUzLjE2LDAsMCwxLTM3Ljg0LDE1LjY3Wm0wLTk3Ljg5YTQ0LjQsNDQuNCwwLDEsMCwzMS40LDEzLDQ0LjA3LDQ0LjA3LDAsMCwwLTMxLjQtMTNaXCIvPjxwYXRoIGlkPVwiZmFjZXNcIiBkPVwiTTc0LjM1LDEwOEEzMy4wNywzMy4wNywwLDAsMSw0MS4yOSw3NWEyLjI4LDIuMjgsMCwwLDEsMi4yNy0yLjI4aDBBMi4yNywyLjI3LDAsMCwxLDQ1LjgzLDc1YTI4LjUyLDI4LjUyLDAsMCwwLDU3LDAsMi4yNywyLjI3LDAsMCwxLDQuNTQsMEEzMy4wOSwzMy4wOSwwLDAsMSw3NC4zNSwxMDhaXCIvPjxwYXRoIGlkPVwiZmFjZXNcIiBkPVwiTTU4Ljg0LDYyYTYuODEsNi44MSwwLDEsMCw2LjgxLDYuODFBNi44MSw2LjgxLDAsMCwwLDU4Ljg0LDYyWlwiLz48cGF0aCBpZD1cImZhY2VzXCIgZD1cIk04OS44Nyw2MmE2LjgxLDYuODEsMCwxLDAsNi44MSw2LjgxQTYuODIsNi44MiwwLDAsMCw4OS44Nyw2MlpcIi8+PC9zdmc+J30pLGVtb2ppQ2F0ZWdvcmllcy5wdXNoKHtuYW1lOlwiYW5pbWFsc1wiLHN2ZzonPHN2ZyBpZD1cImFuaW1hbHNcIiBkYXRhLW5hbWU9XCJMYXllciAxXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMTUwIDE1MFwiPjxwYXRoIGlkPVwiYW5pbWFsc1wiIGQ9XCJNNTkuOSw5MS43NWgwYy0yMi40NiwwLTQxLjgyLTE5LjM0LTQ0LjA5LTQ0QTUyLjEsNTIuMSwwLDAsMSwxNiwzNi44YTQuNTEsNC41MSwwLDAsMSwyLjYzLTMuNjIsMzkuNzksMzkuNzksMCwwLDEsMTIuNzQtMy4zN2MyMy45Mi0yLjE1LDQ1LjM1LDE3LjgzLDQ3Ljc0LDQzLjg2YTUyLjc3LDUyLjc3LDAsMCwxLS4xNSwxMC45Myw0LjU2LDQuNTYsMCwwLDEtMi42NCwzLjYyLDM5LjY3LDM5LjY3LDAsMCwxLTEyLjczLDMuMzZjLTEuMjMuMTEtMi40NS4xNy0zLjY2LjE3Wk0yNC43Niw0MC40OWE0MS4yOSw0MS4yOSwwLDAsMCwuMDksNi40QzI2LjcsNjcsNDIuMDksODIuNjYsNTkuOSw4Mi42N2gwYy45NCwwLDEuODgsMCwyLjgzLS4xNGEzMC4zOSwzMC4zOSwwLDAsMCw3LjQxLTEuNjIsNDEuMTQsNDEuMTQsMCwwLDAtLjExLTYuNEM2OC4wOSw1My4zOCw1MS4xMSwzNy4wOCwzMi4xNywzOC44NmEzMC43OCwzMC43OCwwLDAsMC03LjQxLDEuNjNaXCIvPjxwYXRoIGlkPVwiYW5pbWFsc1wiIGQ9XCJNMzYuNjgsMTI1LjY0YTQuNTMsNC41MywwLDAsMS00LjMzLTMuMTcsNTMuMzIsNTMuMzIsMCwwLDEtMi4yNi0xMUE1MC40Miw1MC40MiwwLDAsMSwzOS41MSw3Ni42YzcuMzUtOS45MSwxNy44NC0xNiwyOS41LTE3LDEuMTYtLjExLDIuMzMtLjEzLDMuNDctLjEzYTQuNTQsNC41NCwwLDAsMSw0LjMzLDMuMTYsNTEuNTksNTEuNTksMCwwLDEsMi4yNywxMS4wOCw1MC4zOSw1MC4zOSwwLDAsMS05LjQyLDM0LjhjLTcuMzUsOS45MS0xNy44MywxNi0yOS41LDE3YTE3LjYzLDE3LjYzLDAsMCwxLTMuNDguMTJaTTY5LjA5LDY4LjY5QTMyLjQxLDMyLjQxLDAsMCwwLDQ2LjgsODJhNDIuNTcsNDIuNTcsMCwwLDAtNi43MSwzNC4zOCwzMi4zOCwzMi4zOCwwLDAsMCwyMi4yOC0xMy4zMkE0MS4zNSw0MS4zNSwwLDAsMCw3MCw3NC41MWEzOS4zOCwzOS4zOCwwLDAsMC0uOTQtNS44MlpcIi8+PHBhdGggaWQ9XCJhbmltYWxzXCIgZD1cIk05MC4yNyw5MS43NWMtMS4yMiwwLTIuNDMtLjA2LTMuNjYtLjE3YTM5LjY3LDM5LjY3LDAsMCwxLTEyLjczLTMuMzYsNC41Nyw0LjU3LDAsMCwxLTIuNjQtMy42MSw1My4zOCw1My4zOCwwLDAsMS0uMTctMTAuOTNjMi40MS0yNiwyMy43LTQ2LjA3LDQ3Ljc2LTQzLjg3YTM5Ljc0LDM5Ljc0LDAsMCwxLDEyLjczLDMuMzcsNC41Nyw0LjU3LDAsMCwxLDIuNjQsMy42Miw1My4zNSw1My4zNSwwLDAsMSwuMTYsMTAuOTJjLTIuMjgsMjQuNjktMjEuNjUsNDQtNDQuMDksNDRaTTgwLDgwLjkxYTMwLjU3LDMwLjU3LDAsMCwwLDcuNDIsMS42MmMxOS4wNywxLjc4LDM1LjkyLTE0LjUzLDM3Ljg3LTM1LjY0YTQyLjU1LDQyLjU1LDAsMCwwLC4xLTYuNEEzMC44NiwzMC44NiwwLDAsMCwxMTgsMzguODZDOTksMzcuMDcsODIuMDYsNTMuMzgsODAuMTIsNzQuNTFhNDMuOTEsNDMuOTEsMCwwLDAtLjEsNi40WlwiLz48cGF0aCBpZD1cImFuaW1hbHNcIiBkPVwiTTExMy40OSwxMjUuNjRoMGMtMS4xNiwwLTIuMywwLTMuNDYtLjEyLTIzLjktMi4yMS00MS4zNi0yNS40Ny0zOC45NC01MS44NUE1My41Miw1My41MiwwLDAsMSw3My4zNCw2Mi42YTQuNTUsNC41NSwwLDAsMSw0LjMzLTMuMTZjMS4xNiwwLDIuMzQsMCwzLjUxLjEzLDExLjY0LDEuMDcsMjIuMTEsNy4xMiwyOS40OCwxN2E1MC41MSw1MC41MSwwLDAsMSw5LjQyLDM0LjgxLDUzLjUxLDUzLjUxLDAsMCwxLTIuMjYsMTEsNC41NCw0LjU0LDAsMCwxLTQuMzMsMy4xOVpNODEuMDgsNjguNjlhNDIuNTMsNDIuNTMsMCwwLDAtMSw1LjgyYy0xLjk0LDIxLjEsMTEuNDUsMzkuNzEsMjkuOTUsNDEuODhBNDIuMzgsNDIuMzgsMCwwLDAsMTAzLjM2LDgyLDMyLjQyLDMyLjQyLDAsMCwwLDgxLjA4LDY4LjY5WlwiLz48cGF0aCBpZD1cImFuaW1hbHNcIiBkPVwiTTc1LjA4LDQ1LjQ1YTcuODMsNy44MywwLDEsMCw3LjgzLDcuODMsNy44Myw3LjgzLDAsMCwwLTcuODMtNy44M1pcIi8+PHBhdGggaWQ9XCJhbmltYWxzXCIgZD1cIk03Ni4yOSw1MS44OWEyLjI2LDIuMjYsMCwwLDEtMi4xNC0zQTQ2LDQ2LDAsMCwxLDkyLjgyLDI1LjM0YTIuMjcsMi4yNywwLDEsMSwyLjQsMy44NkE0MS40LDQxLjQsMCwwLDAsNzguNDMsNTAuMzlhMi4yOCwyLjI4LDAsMCwxLTIuMTQsMS41WlwiLz48cGF0aCBpZD1cImFuaW1hbHNcIiBkPVwiTTczLjg3LDUxLjg5YTIuMjgsMi4yOCwwLDAsMS0yLjE0LTEuNUE0MS4zNSw0MS4zNSwwLDAsMCw1NC45NCwyOS4yYTIuMjcsMi4yNywwLDAsMSwyLjM5LTMuODZBNDYsNDYsMCwwLDEsNzYsNDguODVhMi4yOCwyLjI4LDAsMCwxLTEuMzcsMi45MSwyLjMxLDIuMzEsMCwwLDEtLjc3LjEzWlwiLz48L3N2Zz4nfSksZW1vamlDYXRlZ29yaWVzLnB1c2goe25hbWU6XCJmb29kXCIsc3ZnOic8c3ZnIGlkPVwiZm9vZFwiIGRhdGEtbmFtZT1cIkxheWVyIDFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAxNTAgMTUwXCI+PHBhdGggaWQ9XCJmb29kXCIgZD1cIk0xMDQsMjAuNzZoLjE1YzE1LjgzLjUyLDI0LjA4LDIxLjQ4LDI0LjA3LDMyLjU2LjI2LDEyLjQyLTEwLjcyLDIzLjU1LTI0LDI0LjIxYTMuNTMsMy41MywwLDAsMS0uNDYsMGMtMTMuMjUtLjY2LTI0LjIzLTExLjgtMjQtMjQuMywwLTExLDguMjYtMzEuOTUsMjQuMDctMzIuNDdabTAsNDcuNjljOC4yNS0uNTQsMTUuMy03LjUxLDE1LjE0LTE1LDAtOC4xMi02LjIyLTIzLjEtMTUuMTQtMjMuNTctOC45LjQ2LTE1LjE0LDE1LjQ1LTE1LjE0LDIzLjQ4LS4xNCw3LjYxLDYuOSwxNC41OSwxNS4xNCwxNS4xM1pcIi8+PHBhdGggaWQ9XCJmb29kXCIgZD1cIk05Ny4xOSw2OS4yMWguMTRhNC41Myw0LjUzLDAsMCwxLDQuNCw0LjY4bC0xLjQ4LDQ2LjkyYTEuNTksMS41OSwwLDAsMCwuNSwxLjA2LDQuNiw0LjYsMCwwLDAsMy4yNSwxLjE5aDBhNC41Nyw0LjU3LDAsMCwwLDMuMjYtMS4yLDEuNTMsMS41MywwLDAsMCwuNDktMWwtMS40OC00Ni45NWE0LjU0LDQuNTQsMCwxLDEsOS4wOC0uMjhsMS40Nyw0Ni45MWExMC40MiwxMC40MiwwLDAsMS0zLDcuNjUsMTMuNjUsMTMuNjUsMCwwLDEtOS44MSw0aDBhMTMuNTgsMTMuNTgsMCwwLDEtOS43OS00LDEwLjQyLDEwLjQyLDAsMCwxLTMtNy42N2wxLjQ4LTQ2Ljg5YTQuNTMsNC41MywwLDAsMSw0LjUzLTQuNFpcIi8+PHBhdGggaWQ9XCJmb29kXCIgZD1cIk00MS44NCw2OS4yMUg0MmE0LjUzLDQuNTMsMCwwLDEsNC40LDQuNjhMNDQuOSwxMjAuODFhMS41NywxLjU3LDAsMCwwLC41LDEuMDYsNC42LDQuNiwwLDAsMCwzLjI1LDEuMTloMGE0LjUxLDQuNTEsMCwwLDAsMy4yNC0xLjE5LDEuNDgsMS40OCwwLDAsMCwuNS0xTDUwLjkzLDczLjg5YTQuNTMsNC41MywwLDAsMSw0LjM5LTQuNjhBNC40LDQuNCwwLDAsMSw2MCw3My42MWwxLjQ4LDQ2LjkxYTEwLjQ5LDEwLjQ5LDAsMCwxLTMsNy42NiwxMy41NywxMy41NywwLDAsMS05Ljc4LDRoMGExMy41OSwxMy41OSwwLDAsMS05Ljc4LTQsMTAuNDgsMTAuNDgsMCwwLDEtMy03LjY3bDEuNDgtNDYuOWE0LjU0LDQuNTQsMCwwLDEsNC41NC00LjRaXCIvPjxwYXRoIGlkPVwiZm9vZFwiIGQ9XCJNMjguNTksMjAuNzZhNC41NCw0LjU0LDAsMCwxLDQuNTQsNC41NFY1MWExNS41MiwxNS41MiwwLDAsMCwzMSwwVjI1LjNhNC41NSw0LjU1LDAsMCwxLDkuMDksMFY1MWEyNC42MSwyNC42MSwwLDEsMS00OS4yMSwwVjI1LjNhNC41NCw0LjU0LDAsMCwxLDQuNTQtNC41NFpcIi8+PHBhdGggaWQ9XCJmb29kXCIgZD1cIk01NS4zNCwyMC43NmE0LjU0LDQuNTQsMCwwLDEsNC41NCw0LjU0djE5YTQuNTQsNC41NCwwLDEsMS05LjA4LDB2LTE5YTQuNTQsNC41NCwwLDAsMSw0LjU0LTQuNTRaXCIvPjxwYXRoIGlkPVwiZm9vZFwiIGQ9XCJNNDIsMjAuNzZhNC41NCw0LjU0LDAsMCwxLDQuNTQsNC41NHYxOWE0LjU0LDQuNTQsMCwxLDEtOS4wOCwwdi0xOUE0LjU0LDQuNTQsMCwwLDEsNDIsMjAuNzZaXCIvPjwvc3ZnPid9KSxlbW9qaUNhdGVnb3JpZXMucHVzaCh7bmFtZTpcInNwb3J0XCIsc3ZnOic8c3ZnIGlkPVwic3BvcnRcIiBkYXRhLW5hbWU9XCJMYXllciAxXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMTUwIDE1MFwiPjxwYXRoIGlkPVwic3BvcnRcIiBkPVwiTTc1LjM1LDEzMC4yNGE1My40OSw1My40OSwwLDEsMSw1My40OC01My40OSw1My41NSw1My41NSwwLDAsMS01My40OCw1My40OVptMC05Ny44OWE0NC40MSw0NC40MSwwLDEsMCw0NC40LDQ0LjQsNDQuMSw0NC4xLDAsMCwwLTQ0LjQtNDQuNFpcIi8+PHBhdGggaWQ9XCJzcG9ydFwiIGQ9XCJNMTE5LjI0LDg0LjA4QTUxLjI5LDUxLjI5LDAsMCwxLDY4LDMyLjg2YTQ5LjQ0LDQ5LjQ0LDAsMCwxLC4yNi01LDIuMjYsMi4yNiwwLDAsMSwyLTJjMS42Ni0uMTYsMy4zNC0uMjUsNS0uMjVhNTEuMjYsNTEuMjYsMCwwLDEsNTEuMjEsNTEuMjFjMCwxLjcxLS4wOSwzLjM4LS4yNSw1YTIuMjgsMi4yOCwwLDAsMS0yLDJjLTEuNjUuMTYtMy4zMy4yNS01LC4yNVpNNzIuNjQsMzAuMTZjLS4wNi45LS4wOCwxLjc5LS4wOCwyLjdhNDYuNzMsNDYuNzMsMCwwLDAsNDYuNjgsNDYuNjhxMS4zNywwLDIuNy0uMDljLjA2LS44OS4wOC0xLjc5LjA4LTIuN0E0Ni43Miw0Ni43MiwwLDAsMCw3NS4zNSwzMC4wOGMtLjkxLDAtMS44MiwwLTIuNzEuMDhaXCIvPjxwYXRoIGlkPVwic3BvcnRcIiBkPVwiTTc1LjM1LDEyOEE1MS4yOCw1MS4yOCwwLDAsMSwyNC4xMiw3Ni43NmMwLTEuNy4xLTMuMzguMjUtNWEyLjI5LDIuMjksMCwwLDEsMi0yYzEuNjYtLjE2LDMuMzMtLjI1LDUuMDUtLjI1YTUxLjI3LDUxLjI3LDAsMCwxLDUxLjIxLDUxLjIyYzAsMS42OS0uMDksMy4zNy0uMjUsNWEyLjI3LDIuMjcsMCwwLDEtMiwyYy0xLjY2LjE2LTMuMzIuMjUtNSwuMjVaTTI4Ljc1LDc0LjA1Yy0uMDUuOS0uMDksMS44LS4wOSwyLjcxYTQ2Ljc0LDQ2Ljc0LDAsMCwwLDQ2LjY5LDQ2LjY3Yy45MSwwLDEuOCwwLDIuNy0uMDgsMC0uOS4wOC0xLjguMDgtMi43QTQ2LjczLDQ2LjczLDAsMCwwLDMxLjQ2LDc0Yy0uOTEsMC0xLjgxLDAtMi43MS4wOFpcIi8+PHBvbHlnb24gaWQ9XCJzcG9ydFwiIHBvaW50cz1cIjQyLjY5IDExMi42MSAzOS40OCAxMDkuNCAxMDggNDAuODggMTExLjIxIDQ0LjEgNDIuNjkgMTEyLjYxIDQyLjY5IDExMi42MVwiLz48L3N2Zz4nfSksZW1vamlDYXRlZ29yaWVzLnB1c2goe25hbWU6XCJ0cmFuc3BvcnRcIixzdmc6JzxzdmcgaWQ9XCJ0cmFuc3BvcnRcIiBkYXRhLW5hbWU9XCJMYXllciAxXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMTUwIDE1MFwiPjxwYXRoIGlkPVwidHJhbnNwb3J0XCIgZD1cIk0xMjAuNywxMTZIMzFhNC41NSw0LjU1LDAsMCwxLTQuNTQtNC41NVY1NC4yOEEzMS44MiwzMS44MiwwLDAsMSw1OC4yNSwyMi40OWgzNS4yYTMxLjgzLDMxLjgzLDAsMCwxLDMxLjgsMzEuNzl2NTcuMTVBNC41NSw0LjU1LDAsMCwxLDEyMC43LDExNlptLTg1LjE2LTkuMDloODAuNjJWNTQuMjhBMjIuNzQsMjIuNzQsMCwwLDAsOTMuNDUsMzEuNTdINTguMjVBMjIuNzQsMjIuNzQsMCwwLDAsMzUuNTQsNTQuMjh2NTIuNjFaXCIvPjxwYXRoIGlkPVwidHJhbnNwb3J0XCIgZD1cIk00OS4zNSwxMjkuMjNjLTguNTMsMC0xMy42Mi0yLjc3LTEzLjYyLTcuNDFWMTE1LjZhNC41NCw0LjU0LDAsMSwxLDkuMDgsMHY0LjA2YTIxLjMyLDIxLjMyLDAsMCwwLDkuMDksMFYxMTUuNmE0LjU0LDQuNTQsMCwwLDEsOS4wOCwwdjYuMjJjMCw0LjY0LTUuMDksNy40MS0xMy42Myw3LjQxWlwiLz48cGF0aCBpZD1cInRyYW5zcG9ydFwiIGQ9XCJNMTAyLjM0LDEyOS4yM2MtOC41MywwLTEzLjYyLTIuNzctMTMuNjItNy40MVYxMTUuNmE0LjU0LDQuNTQsMCwwLDEsOS4wOCwwdjQuMDZhMjEuMjgsMjEuMjgsMCwwLDAsOS4wOCwwVjExNS42YTQuNTUsNC41NSwwLDAsMSw5LjA5LDB2Ni4yMmMwLDQuNjQtNS4wOSw3LjQxLTEzLjYzLDcuNDFaXCIvPjxwYXRoIGlkPVwidHJhbnNwb3J0XCIgZD1cIk05Ny44MSw0NC44M0g1My45YTQuNTUsNC41NSwwLDEsMSwwLTkuMDlIOTcuODFhNC41NSw0LjU1LDAsMCwxLDAsOS4wOVpcIi8+PHBhdGggaWQ9XCJ0cmFuc3BvcnRcIiBkPVwiTTU0LjI4LDg0LjJBNi44LDYuOCwwLDEsMCw2MS4wNyw5MWE2LjgsNi44LDAsMCwwLTYuNzktNi44WlwiLz48cGF0aCBpZD1cInRyYW5zcG9ydFwiIGQ9XCJNOTcuNDMsODQuMmE2LjgsNi44LDAsMSwwLDYuNzksNi44LDYuOCw2LjgsMCwwLDAtNi43OS02LjhaXCIvPjxwYXRoIGlkPVwidHJhbnNwb3J0XCIgZD1cIk0xMDcuMDgsODFINDQuNjNhNi44Miw2LjgyLDAsMCwxLTYuODItNi44MlY1NC4yOGE2LjgyLDYuODIsMCwwLDEsNi44Mi02LjgxaDYyLjQ1YTYuODIsNi44MiwwLDAsMSw2LjgxLDYuODFWNzQuMTVBNi44Myw2LjgzLDAsMCwxLDEwNy4wOCw4MVpNNDQuNjMsNTJhMi4yOCwyLjI4LDAsMCwwLTIuMjgsMi4yN1Y3NC4xNWEyLjI4LDIuMjgsMCwwLDAsMi4yOCwyLjI3aDYyLjQ1YTIuMjcsMi4yNywwLDAsMCwyLjI3LTIuMjdWNTQuMjhBMi4yNywyLjI3LDAsMCwwLDEwNy4wOCw1MlpcIi8+PC9zdmc+J30pLGVtb2ppQ2F0ZWdvcmllcy5wdXNoKHtuYW1lOlwib2JqZWN0c1wiLHN2ZzonPHN2ZyBpZD1cIm9iamVjdHNcIiBkYXRhLW5hbWU9XCJMYXllciAxXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMTUwIDE1MFwiPjxwYXRoIGlkPVwib2JqZWN0c1wiIGQ9XCJNMTA3Ljc4LDEyOWE0LjU1LDQuNTUsMCwwLDEtMi42Ny0uODdsLTMwLTIxLjc5LTMwLDIxLjc5YTQuNTMsNC41MywwLDAsMS01LjM0LDAsNC41OCw0LjU4LDAsMCwxLTEuNjUtNS4wOEw0OS41OSw4Ny44MiwxOS42LDY2YTQuNTQsNC41NCwwLDAsMSwyLjY3LTguMjJINTkuMzRMNzAuOCwyMi41NWE0LjU1LDQuNTUsMCwwLDEsOC42NCwwTDkwLjg5LDU3LjgxSDEyOEE0LjU0LDQuNTQsMCwwLDEsMTMwLjYzLDY2bC0zMCwyMS43OSwxMS40NiwzNS4yNWE0LjU1LDQuNTUsMCwwLDEtNC4zMiw2Wk03NS4xMiw5Ni4yYTQuNTMsNC41MywwLDAsMSwyLjY3Ljg3bDIxLjM1LDE1LjUxTDkxLDg3LjQ5YTQuNTUsNC41NSwwLDAsMSwxLjY1LTUuMDhMMTE0LDY2Ljg5SDg3LjU5YTQuNTQsNC41NCwwLDAsMS00LjMyLTMuMTNsLTguMTUtMjUuMUw2Nyw2My43NmE0LjUzLDQuNTMsMCwwLDEtNC4zMiwzLjEzSDM2LjI1TDU3LjYxLDgyLjQxYTQuNTQsNC41NCwwLDAsMSwxLjY1LDUuMDhsLTguMTcsMjUuMDlMNzIuNDUsOTcuMDdhNC41Myw0LjUzLDAsMCwxLDIuNjctLjg3WlwiLz48L3N2Zz4nfSk7ZW1vamlDYXRlZ29yaWVzLm1hcChmdW5jdGlvbihpdGVtKXt2YXIgZW1vamlMaW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2Vtb2ppTGluay5zdHlsZS50ZXh0RGVjb3JhdGlvbj1cIm5vbmVcIixlbW9qaUxpbmsuc3R5bGUucGFkZGluZz1cIjVweFwiLGVtb2ppTGluay5zdHlsZS5wb3NpdGlvbj1cImluaXRpYWxcIixlbW9qaUxpbmsuc3R5bGUuZm9udFNpemU9XCIyNHB4XCIsZW1vamlMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIixcImphdmFzY3JpcHQ6dm9pZCgwKVwiKSxlbW9qaUxpbmsuc3R5bGUuZGlzcGxheT1cInRhYmxlLWNlbGxcIixlbW9qaUxpbmsuc3R5bGUudGV4dEFsaWduPVwiY2VudGVyXCIsZW1vamlMaW5rLmlkPVN0cmluZyhpdGVtLm5hbWUpLFwiZmFjZXNcIj09U3RyaW5nKGl0ZW0ubmFtZSkmJihlbW9qaUxpbmsuc3R5bGUuYmFja2dyb3VuZD1cIiNjMmMyYzJcIiksZW1vamlMaW5rLmlubmVySFRNTD1TdHJpbmcoaXRlbS5zdmcpLGVtb2ppTGluay5vbm1vdXNlZG93bj1jbGlja0NhdGVnb3J5LGVtb2ppQ2F0ZWdvcnkuYXBwZW5kQ2hpbGQoZW1vamlMaW5rKX0pLFsxMjg1MTMsMTI4NTE0LDEyODUxNSwxMjg1MTYsMTI4NTE3LDEyODUxOCwxMjg1MjEsMTI4NTIyLDEyODUyMywxMjg1MjQsMTI4NTI1LDEyODUyNywxMjg1MzAsMTI4NTMxLDEyODUzMiwxMjg1MzQsMTI4NTM2LDEyODUzOCwxMjg1NDAsMTI4NTQxLDEyODU0MiwxMjg1NDQsMTI4NTQ1LDEyODU0NiwxMjg1NDcsMTI4NTQ4LDEyODU0OSwxMjg1NTIsMTI4NTUzLDEyODU1NCwxMjg1NTUsMTI4NTU3LDEyODU2MCwxMjg1NjEsMTI4NTYyLDEyODU2MywxMjg1NjUsMTI4NTY3XS5tYXAoZnVuY3Rpb24oaXRlbSl7dmFyIGVtb2ppTGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtlbW9qaUxpbmsuc3R5bGUudGV4dERlY29yYXRpb249XCJub25lXCIsZW1vamlMaW5rLnN0eWxlLm1hcmdpbj1cIjVweFwiLGVtb2ppTGluay5zdHlsZS5wb3NpdGlvbj1cImluaXRpYWxcIixlbW9qaUxpbmsuc3R5bGUuZm9udFNpemU9XCIyNHB4XCIsZW1vamlMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIixcImphdmFzY3JpcHQ6dm9pZCgwKVwiKSxlbW9qaUxpbmsuaW5uZXJIVE1MPVN0cmluZy5mcm9tQ29kZVBvaW50KGl0ZW0pLGVtb2ppTGluay5vbm1vdXNlZG93bj1jbGlja0xpbmssZmFjZXNDYXRlZ29yeS5hcHBlbmRDaGlsZChlbW9qaUxpbmspfSksWzEyODAxMiwxMjgwMTMsMTI4MDE0LDEyODAxNywxMjgwMTgsMTI4MDIwLDEyODAyMywxMjgwMjQsMTI4MDI1LDEyODAyNiwxMjgwMjcsMTI4MDI4LDEyODAyOSwxMjgwMzAsMTI4MDMxLDEyODAzMiwxMjgwMzMsMTI4MDM0LDEyODAzNSwxMjgwMzYsMTI4MDM3LDEyODAzOCwxMjgwMzksMTI4MDQwLDEyODA0MSwxMjgwNDMsMTI4MDQ0LDEyODA0NSwxMjgwNDYsMTI4MDQ3LDEyODA0OCwxMjgwNDksMTI4MDUwLDEyODA1MSwxMjgwNTIsMTI4MDUzLDEyODA1NCwxMjgwNTUsMTI4MDU2LDEyODA1NywxMjgwNTgsMTI4MDU5LDEyODA2MF0ubWFwKGZ1bmN0aW9uKGl0ZW0pe3ZhciBlbW9qaUxpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7ZW1vamlMaW5rLnN0eWxlLnRleHREZWNvcmF0aW9uPVwibm9uZVwiLGVtb2ppTGluay5zdHlsZS5tYXJnaW49XCI1cHhcIixlbW9qaUxpbmsuc3R5bGUucG9zaXRpb249XCJpbml0aWFsXCIsZW1vamlMaW5rLnN0eWxlLmZvbnRTaXplPVwiMjRweFwiLGVtb2ppTGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsXCJqYXZhc2NyaXB0OnZvaWQoMClcIiksZW1vamlMaW5rLmlubmVySFRNTD1TdHJpbmcuZnJvbUNvZGVQb2ludChpdGVtKSxlbW9qaUxpbmsub25tb3VzZWRvd249Y2xpY2tMaW5rLGFuaW1hbHNDYXRlZ29yeS5hcHBlbmRDaGlsZChlbW9qaUxpbmspfSksWzEyNzgxMywxMjc4MTQsMTI3ODE1LDEyNzgxNiwxMjc4MTcsMTI3ODE4LDEyNzgyMCwxMjc4MjEsMTI3ODIyLDEyNzgyMywxMjc4MjUsMTI3ODI2LDEyNzgyNywxMjc4MjgsMTI3ODI5LDEyNzgzMCwxMjc4MzEsMTI3ODMyLDEyNzgzNiwxMjc4MzcsMTI3ODM4LDEyNzgzOSwxMjc4NDAsMTI3ODQxLDEyNzg0MiwxMjc4NDMsMTI3ODQ0LDEyNzg0NiwxMjc4NDgsMTI3ODQ5LDEyNzg1MCwxMjc4NTEsMTI3ODUyLDEyNzg1MywxMjc4NTYsMTI3ODU4LDEyNzg1OSwxMjc4NjAsMTI3ODYzLDEyNzg2NCwxMjc4NjddLm1hcChmdW5jdGlvbihpdGVtKXt2YXIgZW1vamlMaW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2Vtb2ppTGluay5zdHlsZS50ZXh0RGVjb3JhdGlvbj1cIm5vbmVcIixlbW9qaUxpbmsuc3R5bGUubWFyZ2luPVwiNXB4XCIsZW1vamlMaW5rLnN0eWxlLnBvc2l0aW9uPVwiaW5pdGlhbFwiLGVtb2ppTGluay5zdHlsZS5mb250U2l6ZT1cIjI0cHhcIixlbW9qaUxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLFwiamF2YXNjcmlwdDp2b2lkKDApXCIpLGVtb2ppTGluay5pbm5lckhUTUw9U3RyaW5nLmZyb21Db2RlUG9pbnQoaXRlbSksZW1vamlMaW5rLm9ubW91c2Vkb3duPWNsaWNrTGluayxmb29kQ2F0ZWdvcnkuYXBwZW5kQ2hpbGQoZW1vamlMaW5rKX0pLFsxMjc5MjEsMTI3OTIzLDEyNzkzNCwxMjc5MzUsMTI3OTM2LDEyNzkzNywxMjc5MzgsMTI3OTM5LDEyNzk0MCwxMjc5NDIsMTI3OTQ0LDEyNzk0NiwxMjg2NzUsMTI4NjkyLDEyODY5Myw5OTE3LDk5MTgsOTk3OCwxMjc5MDcsMTI3OTE5LDk5NzFdLm1hcChmdW5jdGlvbihpdGVtKXt2YXIgZW1vamlMaW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2Vtb2ppTGluay5zdHlsZS50ZXh0RGVjb3JhdGlvbj1cIm5vbmVcIixlbW9qaUxpbmsuc3R5bGUubWFyZ2luPVwiNXB4XCIsZW1vamlMaW5rLnN0eWxlLnBvc2l0aW9uPVwiaW5pdGlhbFwiLGVtb2ppTGluay5zdHlsZS5mb250U2l6ZT1cIjI0cHhcIixlbW9qaUxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLFwiamF2YXNjcmlwdDp2b2lkKDApXCIpLGVtb2ppTGluay5pbm5lckhUTUw9U3RyaW5nLmZyb21Db2RlUG9pbnQoaXRlbSksZW1vamlMaW5rLm9ubW91c2Vkb3duPWNsaWNrTGluayxzcG9ydENhdGVnb3J5LmFwcGVuZENoaWxkKGVtb2ppTGluayl9KSxbMTI4NjQxLDEyODY0MiwxMjg2NDYsMTI4NjQ4LDEyODY1MCwxMjg2NTMsMTI4NjU0LDEyODY1NiwxMjg2NjAsMTI4NjYyLDEyODY2NCwxMjg2NjcsMTI4NjY4LDEyODY2OSwxMjg2NzAsMTI4NjcxLDEyODY3MiwxMjg2NzMsMTI4NjQwLDEyODY0MywxMjg2NDQsMTI4NjQ1LDEyODY0NywxMjg2NDksMTI4NjUyLDEyODY1NywxMjg2NTgsMTI4NjU5LDEyODY2MSwxMjg2NjMsMTI4NjY1LDEyODY2NiwxMjg2NzQsMTI4Njc2LDEyODY5MF0ubWFwKGZ1bmN0aW9uKGl0ZW0pe3ZhciBlbW9qaUxpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7ZW1vamlMaW5rLnN0eWxlLnRleHREZWNvcmF0aW9uPVwibm9uZVwiLGVtb2ppTGluay5zdHlsZS5tYXJnaW49XCI1cHhcIixlbW9qaUxpbmsuc3R5bGUucG9zaXRpb249XCJpbml0aWFsXCIsZW1vamlMaW5rLnN0eWxlLmZvbnRTaXplPVwiMjRweFwiLGVtb2ppTGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsXCJqYXZhc2NyaXB0OnZvaWQoMClcIiksZW1vamlMaW5rLmlubmVySFRNTD1TdHJpbmcuZnJvbUNvZGVQb2ludChpdGVtKSxlbW9qaUxpbmsub25tb3VzZWRvd249Y2xpY2tMaW5rLHRyYW5zcG9ydENhdGVnb3J5LmFwcGVuZENoaWxkKGVtb2ppTGluayl9KSxbMTI3ODkwLDEyNzg4MCwxMjc4ODEsMTI3ODg3LDEyNzg5MSwxMjc5MDUsMTI3OTA2LDEyNzkwOCwxMjc5MDksMTI3OTExLDEyNzkxMiwxMjc5MTUsMTI3OTE2LDEyNzkxOCwxMjc5MTksMTI3OTI2LDEyNzkyNywxMjc5MjgsMTI3OTI5LDEyNzkzMCwxMjc5MzEsMTI3OTMyLDEyNzk2OCwxMjc5NzMsMTI3OTc4LDEyODE0NywxMjgxNDgsMTI4MTQ5LDEyODE1MCwxMjgxNTEsMTI4MTUyLDEyODE4NywxMjgxODYsMTI4MTk3LDEyODIxMywxMjgyNDddLm1hcChmdW5jdGlvbihpdGVtKXt2YXIgZW1vamlMaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7ZW1vamlMaS5zdHlsZS5kaXNwbGF5PVwiaW5saW5lLWJsb2NrXCIsZW1vamlMaS5zdHlsZS5tYXJnaW49XCI1cHhcIjt2YXIgZW1vamlMaW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2Vtb2ppTGluay5zdHlsZS50ZXh0RGVjb3JhdGlvbj1cIm5vbmVcIixlbW9qaUxpbmsuc3R5bGUubWFyZ2luPVwiNXB4XCIsZW1vamlMaW5rLnN0eWxlLnBvc2l0aW9uPVwiaW5pdGlhbFwiLGVtb2ppTGluay5zdHlsZS5mb250U2l6ZT1cIjI0cHhcIixlbW9qaUxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLFwiamF2YXNjcmlwdDp2b2lkKDApXCIpLGVtb2ppTGluay5pbm5lckhUTUw9U3RyaW5nLmZyb21Db2RlUG9pbnQoaXRlbSksZW1vamlMaW5rLm9ubW91c2Vkb3duPWNsaWNrTGluayxvYmplY3RzQ2F0ZWdvcnkuYXBwZW5kQ2hpbGQoZW1vamlMaW5rKX0pLGVtb2ppUGlja2VyLmFwcGVuZENoaWxkKGVtb2ppQ2F0ZWdvcnkpLGVtb2ppUGlja2VyLmFwcGVuZENoaWxkKGZhY2VzQ2F0ZWdvcnkpLGVtb2ppUGlja2VyLmFwcGVuZENoaWxkKGFuaW1hbHNDYXRlZ29yeSksZW1vamlQaWNrZXIuYXBwZW5kQ2hpbGQoZm9vZENhdGVnb3J5KSxlbW9qaVBpY2tlci5hcHBlbmRDaGlsZChzcG9ydENhdGVnb3J5KSxlbW9qaVBpY2tlci5hcHBlbmRDaGlsZCh0cmFuc3BvcnRDYXRlZ29yeSksZW1vamlQaWNrZXIuYXBwZW5kQ2hpbGQob2JqZWN0c0NhdGVnb3J5KSxlbW9qaUNvbnRhaW5lci5hcHBlbmRDaGlsZChlbW9qaVBpY2tlcil9fV0pLE1ldGVvckVtb2ppfSgpO21vZHVsZS5leHBvcnRzPU1ldGVvckVtb2ppfSl9LHt9XX0se30sWzFdKSgxKX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tZXRlb3ItZW1vamkvZGlzdC9tZXRlb3JFbW9qaS5taW4uanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdGlmKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==