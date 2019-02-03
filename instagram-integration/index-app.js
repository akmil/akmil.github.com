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
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
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
        instagramTaskManager_postStartChatBot: 'instagram-task-manager/task'

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
    getPathTypeSubtype: function getPathTypeSubtype(name, type, subtype) {
        if (typeof this.url[name] === 'function' && type && subtype) {
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

var _network = __webpack_require__(6);

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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(26)(module)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // import $ from 'jquery';


var _consts = __webpack_require__(0);

var _network = __webpack_require__(6);

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
            var type = path.type,
                subType = path.subType;

            return this.network.sendRequest('' + _consts.CONST.getPathTypeSubtype('instagramTaskManager_getTaskByTypes', type, subType), this.getToken('asHeader'), cbError);
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
    }]);

    return UserTaskManager;
}();

var userInstance = null;

if (!userInstance) {
    userInstance = new UserTaskManager();
}

exports.default = userInstance;

/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTasksData = getTasksData;
exports.init = init;

var _apiTaskManager = __webpack_require__(5);

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
        // console.log(type);
        // if (item.type && item.type !== 'FOLLOWING') {
        //     return;
        // }

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
function initHandlers() {
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
            getTasksData();
        });
    });

    $btnDelTask.on('click', function (e) {
        var taskId = getTaskID(e);
        console.log('DELETE id', taskId);
        _apiTaskManager2.default.deleteTaskByID(taskId).then(function (result) {
            console.log(result);
            getTasksData();
        });
    });
}

function getTasksData(holders, path, fillListMetaOverride) {
    var $runs = holders.$runs,
        $stopped = holders.$stopped;

    var _path = path || {
        type: _consts.CONST.url.tmTypes.followingT,
        subType: _consts.CONST.url.tmTypes.followingSubT[0]
    };
    _apiTaskManager2.default.getMetadata(_path).then(function (result) {
        // console.log('getMetadata & fillListMeta', result);
        if (result.status.state === 'ok') {
            fillListMeta($runs, result.data.meta, 'isRuns');
            fillListMeta($stopped, result.data.meta);
            initHandlers();
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(24);

var _consts = __webpack_require__(0);

var _pubsubJs = __webpack_require__(4);

var _pubsubJs2 = _interopRequireDefault(_pubsubJs);

var _registerForm = __webpack_require__(18);

var _registerForm2 = _interopRequireDefault(_registerForm);

var _loginForm = __webpack_require__(16);

var _loginPage = __webpack_require__(22);

var _confirmReg = __webpack_require__(11);

var _header = __webpack_require__(14);

var header = _interopRequireWildcard(_header);

var _burgerMenu = __webpack_require__(13);

var burgerMenu = _interopRequireWildcard(_burgerMenu);

var _instagramAccountsList = __webpack_require__(15);

var instagramAccounts = _interopRequireWildcard(_instagramAccountsList);

var _messages = __webpack_require__(17);

var messages = _interopRequireWildcard(_messages);

var _follow = __webpack_require__(12);

var follow = _interopRequireWildcard(_follow);

var _chatBotBlock = __webpack_require__(9);

var chatBot = _interopRequireWildcard(_chatBotBlock);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import 'bootstrap';
var selectorCssLoginForm = {
    _loginBox: _consts.CONST.uiSelectors.headerLoginBox,
    _formId: '#js_login-form',
    _buttonSubmitId: '#js_login_btn',
    _showLoginBoxBtnId: _consts.CONST.uiSelectors.headerNavLoginBtn
};

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
};

(function () {
    return init();
})();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.init = init;

var _consts = __webpack_require__(0);

var _wizardForm = __webpack_require__(19);

var wizardForm = _interopRequireWildcard(_wizardForm);

var _apiTaskManager = __webpack_require__(5);

var _apiTaskManager2 = _interopRequireDefault(_apiTaskManager);

var _chatBotStatus = __webpack_require__(10);

var chatBotStatus = _interopRequireWildcard(_chatBotStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var usernameSelected = '';

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
        // $('#v-pills-runned-tab').trigger('click');
        // window.PubSub.publish(CONST.events.tasks.NEW_TASK_CREATED);
    });

    // alert close
    $('.form-submit-finish--error .close').on('click', function () {
        console.log('alert close');
        // $('#v-pills-runned-tab').trigger('click');
        // window.PubSub.publish(CONST.events.tasks.NEW_TASK_CREATED);
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
        chatBotStatus.init();
    }
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.init = init;

var _consts = __webpack_require__(0);

var _followStatus = __webpack_require__(7);

/*
function fillListMeta($wrapper, data) {
    $wrapper.empty().addClass('border-light-color');
    $(`<div class="">${JSON.stringify(data)}</div>`).appendTo($wrapper);
    // for (const type in data['structure']) {
    // console.log('structure: ' + item);
    //     if (Object.prototype.hasOwnProperty.call(structureObj, type)) {
    //         $(`<option class="list-group-item py-2" ${(type !== 'FOLLOWING') ? 'disabled="disabled"' : ''}
    //             value = "${JSON.stringify({type, subtype: structureObj[type]})}">
    //             ${type}
    //         </option>`).appendTo($('#task-types'));
    //     }
    // }
}
*/

function init() {
    if ($('.chat-bot-page').length) {
        var path = {
            type: _consts.CONST.url.tmTypes.chatBotT,
            subType: _consts.CONST.url.tmTypes.chatBotSubT[0]
        };
        var wrappers = {
            $runs: $('.bot-tasks-runs'),
            $stopped: $('.bot-tasks-stopped')
        };
        (0, _followStatus.getTasksData)(wrappers, path);
        // UserTaskManager.getMetadata(path).then((result) => {
        //     if (result.status.state === 'ok') {
        //         console.log(result.data.meta);
        //         fillListLogs($('.bot-log-tasks'), result.data.meta);
        //     }
        // });
    }
}

/*
GET http://api.luxgram.ru/v1/instagram-task-manager/logs/type/{type}/subtype/{subtype}/account/{username}
Необязательный параметр “page”
 */

/***/ }),
/* 11 */
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.modifyAccList = modifyAccList;
exports.init = init;

var _followStatus = __webpack_require__(7);

var followStatus = _interopRequireWildcard(_followStatus);

var _consts = __webpack_require__(0);

var _apiTaskManager = __webpack_require__(5);

var _apiTaskManager2 = _interopRequireDefault(_apiTaskManager);

__webpack_require__(23);

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
        subType: _consts.CONST.url.tmTypes.followingSubT[0]
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
/* 13 */
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initHeader = initHeader;

var _user = __webpack_require__(2);

var _user2 = _interopRequireDefault(_user);

var _pubsubJs = __webpack_require__(4);

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
/* 15 */
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
    window.PubSub.publish(_consts.CONST.events.instagramAccouns.INSTAGRAM_ACCOUNS_RENDERED);
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LoginForm = LoginForm;

var _user = __webpack_require__(2);

var _user2 = _interopRequireDefault(_user);

var _pubsubJs = __webpack_require__(4);

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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.init = init;

var _meteorEmoji = __webpack_require__(25);

var _meteorEmoji2 = _interopRequireDefault(_meteorEmoji);

var _user = __webpack_require__(2);

var _user2 = _interopRequireDefault(_user);

var _apiUserDirect = __webpack_require__(20);

var _apiUserDirect2 = _interopRequireDefault(_apiUserDirect);

var _view = __webpack_require__(3);

var _view2 = _interopRequireDefault(_view);

var _spinner = __webpack_require__(21);

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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // import $ from 'jquery';
// https://www.npmjs.com/package/pubsub-js


var _pubsubJs = __webpack_require__(4);

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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.init = init;

var _consts = __webpack_require__(0);

// import UserTaskManager from '../../common/js-services/api-task-manager';
// import 'brutusin-json-forms';
var state = {
    username: ''
};

/**
 * Init header
 */
// import * as followStatus from './follow-status';
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // import $ from 'jquery';


var _consts = __webpack_require__(0);

var _network = __webpack_require__(6);

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
/* 21 */
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LoginPage = LoginPage;

var _user = __webpack_require__(2);

var _user2 = _interopRequireDefault(_user);

var _pubsubJs = __webpack_require__(4);

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
/* 23 */
/***/ (function(module, exports) {

if("undefined"==typeof brutusin)window.brutusin=new Object;else if("object"!=typeof brutusin)throw"brutusin global variable already exists";!function(){String.prototype.startsWith||(String.prototype.startsWith=function(e,t){return t=t||0,this.indexOf(e,t)===t}),String.prototype.endsWith||(String.prototype.endsWith=function(e,t){var r=this.toString();(void 0===t||t>r.length)&&(t=r.length),t-=e.length;var n=r.indexOf(e,t);return-1!==n&&n===t}),String.prototype.includes||(String.prototype.includes=function(){"use strict";return-1!==String.prototype.indexOf.apply(this,arguments)}),String.prototype.format||(String.prototype.format=function(){for(var e=this,t=0;t<arguments.length;t++){var r=new RegExp("\\{"+t+"\\}","gi");e=e.replace(r,arguments[t])}return e});var BrutusinForms=new Object;BrutusinForms.messages={validationError:"Validation error",required:"This field is **required**",invalidValue:"Invalid field value",addpropNameExistent:"This property is already present in the object",addpropNameRequired:"A name is required",minItems:"At least `{0}` items are required",maxItems:"At most `{0}` items are allowed",pattern:"Value does not match pattern: `{0}`",minLength:"Value must be **at least** `{0}` characters long",maxLength:"Value must be **at most** `{0}` characters long",multipleOf:"Value must be **multiple of** `{0}`",minimum:"Value must be **greater or equal than** `{0}`",exclusiveMinimum:"Value must be **greater than** `{0}`",maximum:"Value must be **lower or equal than** `{0}`",exclusiveMaximum:"Value must be **lower than** `{0}`",minProperties:"At least `{0}` properties are required",maxProperties:"At most `{0}` properties are allowed",uniqueItems:"Array items must be unique",addItem:"Add item","true":"True","false":"False"},BrutusinForms.decorators=new Array,BrutusinForms.addDecorator=function(e){BrutusinForms.decorators[BrutusinForms.decorators.length]=e},BrutusinForms.onResolutionStarted=function(e){},BrutusinForms.onResolutionFinished=function(e){},BrutusinForms.onValidationError=function(e,t){e.focus(),e.className.includes(" error")||(e.className+=" error"),alert(t)},BrutusinForms.onValidationSuccess=function(e){e.className=e.className.replace(" error","")},BrutusinForms.postRender=null,BrutusinForms.instances=new Array,BrutusinForms.create=function(schema){function validateDepencyMapIsAcyclic(){function e(t,r,n){if(r.hasOwnProperty(n))return void(error="Schema dependency graph has cycles");if(r[n]=null,!t.hasOwnProperty(n)){t[n]=null;var a=dependencyMap[n];if(a)for(var i=0;i<a.length;i++)e(t,r,a[i]);delete r[n]}}var t=new Object;for(var r in dependencyMap)t.hasOwnProperty(r)||e(t,new Object,r)}function appendChild(e,t,r){e.appendChild(t);for(var n=0;n<BrutusinForms.decorators.length;n++)BrutusinForms.decorators[n](t,r)}function createPseudoSchema(e){var t=new Object;for(var r in e)"items"!==r&&"properties"!==r&&"additionalProperties"!==r&&("pattern"===r?t[r]=new RegExp(e[r]):t[r]=e[r]);return t}function getDefinition(e){var t=e.split("/"),r=root;for(var n in t)"0"!==n&&(r=r[t[n]]);return r}function containsStr(e,t){for(var r=0;r<e.length;r++)if(e[r]==t)return!0;return!1}function renameRequiredPropeties(e){if(e)if(e.hasOwnProperty("oneOf"))for(var t in e.oneOf)renameRequiredPropeties(e.oneOf[t]);else if(e.hasOwnProperty("$ref")){var r=getDefinition(e.$ref);renameRequiredPropeties(r)}else if("object"===e.type){if(e.properties){e.hasOwnProperty("required")&&Array.isArray(e.required)&&(e.requiredProperties=e.required,delete e.required);for(var n in e.properties)renameRequiredPropeties(e.properties[n])}if(e.patternProperties)for(var a in e.patternProperties){var i=e.patternProperties[a];(i.hasOwnProperty("type")||i.hasOwnProperty("$ref")||i.hasOwnProperty("oneOf"))&&renameRequiredPropeties(e.patternProperties[a])}e.additionalProperties&&(e.additionalProperties.hasOwnProperty("type")||e.additionalProperties.hasOwnProperty("oneOf"))&&renameRequiredPropeties(e.additionalProperties)}else"array"===e.type&&renameRequiredPropeties(e.items)}function populateSchemaMap(e,t){var r=createPseudoSchema(t);if(r.$id=e,schemaMap[e]=r,t){if(t.hasOwnProperty("oneOf")){r.oneOf=new Array,r.type="oneOf";for(var n in t.oneOf){var a=e+"."+n;r.oneOf[n]=a,populateSchemaMap(a,t.oneOf[n])}}else if(t.hasOwnProperty("$ref")){var i=getDefinition(t.$ref);if(i){if(t.hasOwnProperty("title")||t.hasOwnProperty("description")){var o={};for(var s in i)o[s]=i[s];t.hasOwnProperty("title")&&(o.title=t.title),t.hasOwnProperty("description")&&(o.description=t.description),i=o}populateSchemaMap(e,i)}}else if("object"===t.type){if(t.properties){r.properties=new Object;for(var s in t.properties){var a=e+"."+s;r.properties[s]=a;var u=t.properties[s];t.requiredProperties&&(containsStr(t.requiredProperties,s)?u.required=!0:u.required=!1),populateSchemaMap(a,u)}}if(t.patternProperties){r.patternProperties=new Object;for(var l in t.patternProperties){var d=e+"["+l+"]";r.patternProperties[l]=d;var p=t.patternProperties[l];p.hasOwnProperty("type")||p.hasOwnProperty("$ref")||p.hasOwnProperty("oneOf")?populateSchemaMap(d,t.patternProperties[l]):populateSchemaMap(d,SCHEMA_ANY)}}if(t.additionalProperties){var a=e+"[*]";r.additionalProperties=a,t.additionalProperties.hasOwnProperty("type")||t.additionalProperties.hasOwnProperty("oneOf")?populateSchemaMap(a,t.additionalProperties):populateSchemaMap(a,SCHEMA_ANY)}}else"array"===t.type&&(r.items=e+"[#]",populateSchemaMap(r.items,t.items));if(t.hasOwnProperty("dependsOn")){null===t.dependsOn&&(t.dependsOn=["$"]);for(var c=new Array,n=0;n<t.dependsOn.length;n++)t.dependsOn[n]?t.dependsOn[n].startsWith("$")?c[n]=t.dependsOn[n]:e.endsWith("]")?c[n]=e+"."+t.dependsOn[n]:c[n]=e.substring(0,e.lastIndexOf("."))+"."+t.dependsOn[n]:c[n]="$";schemaMap[e].dependsOn=c;for(var n=0;n<c.length;n++){var m=dependencyMap[c[n]];m||(m=new Array,dependencyMap[c[n]]=m),m[m.length]=e}}}}function renderTitle(e,t,r){if(e&&t){var n=document.createElement("label");"any"!==r.type&&"object"!==r.type&&"array"!==r.type&&(n.htmlFor=getInputId());var a=document.createTextNode(t+":");if(appendChild(n,a,r),r.description&&(n.title=r.description),r.required){var i=document.createElement("sup");appendChild(i,document.createTextNode("*"),r),appendChild(n,i,r),n.className="required"}appendChild(e,n,r)}}function getInputId(){return formId+"_"+inputCounter}function validate(e){var t=!0;if(e.hasOwnProperty("getValidationError")){var r=e.getValidationError();r?(BrutusinForms.onValidationError(e,r),t=!1):BrutusinForms.onValidationSuccess(e)}if(e.childNodes)for(var n=0;n<e.childNodes.length;n++)validate(e.childNodes[n])||(t=!1);return t}function clear(e){if(e)for(;e.firstChild;)e.removeChild(e.firstChild)}function render(e,t,r,n,a,i){var o=getSchemaId(r),s=getSchema(o);renderInfoMap[o]=new Object,renderInfoMap[o].titleContainer=e,renderInfoMap[o].container=t,renderInfoMap[o].parentObject=n,renderInfoMap[o].propertyProvider=a,renderInfoMap[o].value=i,clear(e),clear(t);var u=renderers[s.type];if(u&&!s.dependsOn)s.title?renderTitle(e,s.title,s):a&&renderTitle(e,a.getValue(),s),i||(i="undefined"!=typeof initialValue&&null!==initialValue?getInitialValue(r):s["default"]),u(t,r,n,a,i);else if(s.$ref&&obj.schemaResolver){var l=function(e){if(e&&e.hasOwnProperty(r)&&JSON.stringify(schemaMap[r])!==JSON.stringify(e[r])){cleanSchemaMap(r),cleanData(r),populateSchemaMap(r,e[r]);var t=renderInfoMap[r];t&&render(t.titleContainer,t.container,r,t.parentObject,t.propertyProvider,t.value)}BrutusinForms.onResolutionFinished(n)};BrutusinForms.onResolutionStarted(n),obj.schemaResolver([r],obj.getData(),l)}}function createPropertyProvider(e,t){var r=new Object;return r.getValue=e,r.onchange=t,r}function getInitialValue(id){var ret;try{eval("ret = initialValue"+id.substring(1))}catch(e){ret=null}return ret}function getValue(schema,input){if("function"==typeof input.getValue)return input.getValue();var value;return value="select"===input.tagName.toLowerCase()?input.options[input.selectedIndex].value:input.value,""===value?null:("integer"===schema.type?(value=parseInt(value),isFinite(value)||(value=null)):"number"===schema.type?(value=parseFloat(value),isFinite(value)||(value=null)):"boolean"===schema.type?"input"===input.tagName.toLowerCase()?(value=input.checked,value||(value=!1)):"select"===input.tagName.toLowerCase()&&(value="true"===input.value?!0:"false"===input.value?!1:null):"any"===schema.type&&value&&eval("value="+value),value)}function getSchemaId(e){return e.replace(/\["[^"]*"\]/g,"[*]").replace(/\[\d*\]/g,"[#]")}function getParentSchemaId(e){return e.substring(0,e.lastIndexOf("."))}function getSchema(e){return schemaMap[e]}function cleanSchemaMap(e){for(var t in schemaMap)e.startsWith(t)&&delete schemaMap[t]}function cleanData(e){var t=new Expression(e);t.visit(data,function(e,t,r){delete t[r]})}function onDependencyChanged(e,t){var r=dependencyMap[e];if(r&&obj.schemaResolver){var n=function(e){if(e)for(var r in e)if(JSON.stringify(schemaMap[r])!==JSON.stringify(e[r])){cleanSchemaMap(r),cleanData(r),populateSchemaMap(r,e[r]);var n=renderInfoMap[r];n&&render(n.titleContainer,n.container,r,n.parentObject,n.propertyProvider,n.value)}BrutusinForms.onResolutionFinished(t)};BrutusinForms.onResolutionStarted(t),obj.schemaResolver(r,obj.getData(),n)}}function Expression(e){function t(e){if(null===e)return null;for(var t=new Array,r=null,n=0,a=0;a<e.length;a++)'"'===e.charAt(a)?null===r?r='"':'"'===r&&(r=null,t[t.length]=e.substring(n,a+1).trim(),n=a+1):"'"===e.charAt(a)?null===r?r="'":"'"===r&&(r=null,t[t.length]=e.substring(n,a+1).trim(),n=a+1):"["===e.charAt(a)?null===r&&(n!==a&&(t[t.length]=e.substring(n,a).trim()),t[t.length]="[",n=a+1):"]"===e.charAt(a)?null===r&&(n!==a&&(t[t.length]=e.substring(n,a).trim()),t[t.length]="]",n=a+1):"."===e.charAt(a)?null===r&&(n!==a&&(t[t.length]=e.substring(n,a).trim()),n=a+1):a===e.length-1&&(t[t.length]=e.substring(n,a+1).trim());return t}(null===e||0===e.length||"."===e)&&(e="$");for(var r=new Array,n=t(e),a=!1,i=0,o="",s=0;s<n.length;s++){var u=n[s];if("["===u){if(a)throw"Error parsing expression '"+e+"': Nested [ found";a=!0,i=0,o+=u}else if("]"===u){if(!a)throw"Error parsing expression '"+e+"': Unbalanced ] found";a=!1,o+=u,r[r.length]=o,o=""}else if(a){if(i>0)throw"Error parsing expression '"+e+"': Multiple tokens found inside a bracket";o+=u,i++}else r[r.length]=u;if(s===n.length-1&&a)throw"Error parsing expression '"+e+"': Unbalanced [ found"}this.exp=e,this.queue=r,this.visit=function(e,t){function r(e,n,a,i,o){if(null!=a){var s=n.shift();if("$"===s){e="$";var s=n.shift()}if(s)if(Array.isArray(a)){if(!s.startsWith("["))throw"Node '"+e+"' is of type array";var u=s.substring(1,s.length-1);if(u.equals("#"))for(var l=0;l<a.length;l++){var d=a[l];r(e+s,n.slice(0),d,a,l),r(e+"["+l+"]",n.slice(0),d,a,l)}else if("$"===u){var d=a[a.length-1];r(e+s,n.slice(0),d,a,a.length-1)}else{var p=parseInt(u);if(isNaN(p))throw"Element '"+u+"' of node '"+e+"' is not an integer, or the '$' last element symbol,  or the wilcard symbol '#'";if(0>p)throw"Element '"+u+"' of node '"+e+"' is lower than zero";var d=a[p];r(e+s,n.slice(0),d,a,p)}}else{if("object"!=typeof a)throw"boolean"==typeof a||"number"==typeof a||"string"==typeof a?"Node is leaf but still are tokens remaining: "+s:"Node type '"+typeof a+"' not supported for index field '"+e+"'";if("[*]"===s)for(var c in a){var d=a[c];r(e+s,n.slice(0),d,a,c),r(e+'["'+c+'"]',n.slice(0),d,a,c)}else{var d;if(s.startsWith("[")){var u=s.substring(1,s.length-1);if(!u.startsWith('"')&&!u.startsWith("'"))throw"Element '"+u+"' of node '"+e+"' must be a string expression or wilcard '*'";u=u.substring(1,u.length()-1),e+=s,d=a[u]}else e=e.length>0?e+"."+s:s,d=a[s];r(e,n,d,a,s)}}else t(a,i,o)}}r(this.exp,this.queue,e)}}var SCHEMA_ANY={type:"any"},obj=new Object,schemaMap=new Object,dependencyMap=new Object,renderInfoMap=new Object,container,data,error,initialValue,inputCounter=0,root=schema,formId="BrutusinForms#"+BrutusinForms.instances.length;renameRequiredPropeties(schema),populateSchemaMap("$",schema),validateDepencyMapIsAcyclic();var renderers=new Object;return renderers.integer=function(e,t,r,n,a){renderers.string(e,t,r,n,a)},renderers.number=function(e,t,r,n,a){renderers.string(e,t,r,n,a)},renderers.any=function(e,t,r,n,a){renderers.string(e,t,r,n,a)},renderers.string=function(e,t,r,n,a){var i,o=getSchemaId(t),s=getParentSchemaId(o),u=getSchema(o),l=getSchema(s);if("any"===u.type)i=document.createElement("textarea"),a&&(i.value=JSON.stringify(a,null,4),u.readOnly&&(i.disabled=!0));else if(u.media)i=document.createElement("input"),i.type="file",appendChild(i,d,u);else if(u["enum"]){if(i=document.createElement("select"),!u.required){var d=document.createElement("option"),p=document.createTextNode("");d.value="",appendChild(d,p,u),appendChild(i,d,u)}for(var c=0,m=0;m<u["enum"].length;m++){var d=document.createElement("option"),p=document.createTextNode(u["enum"][m]);d.value=u["enum"][m],appendChild(d,p,u),appendChild(i,d,u),a&&u["enum"][m]===a&&(c=m,u.required||c++,u.readOnly&&(i.disabled=!0))}1===u["enum"].length?i.selectedIndex=1:i.selectedIndex=c}else{if(i=document.createElement("input"),"integer"===u.type||"number"===u.type)i.type="number",i.step=u.step?""+u.step:"any","number"!=typeof a&&(a=null);else if("date-time"===u.format)try{i.type="datetime-local"}catch(f){i.type="text"}else"email"===u.format?i.type="email":"text"===u.format?i=document.createElement("textarea"):i.type="text";null!==a&&"undefined"!=typeof a&&(i.value=a,u.readOnly&&(i.disabled=!0))}return i.schema=o,i.setAttribute("autocorrect","off"),i.getValidationError=function(){try{var e=getValue(u,i);if(null===e){if(u.required){if(!l||"object"!==l.type)return BrutusinForms.messages.required;if(l.required)return BrutusinForms.messages.required;for(var t in r)if(null!==r[t])return BrutusinForms.messages.required}}else{if(u.pattern&&!u.pattern.test(e))return BrutusinForms.messages.pattern.format(u.pattern.source);if(u.minLength&&(!e||u.minLength>e.length))return BrutusinForms.messages.minLength.format(u.minLength);if(u.maxLength&&e&&u.maxLength<e.length)return BrutusinForms.messages.maxLength.format(u.maxLength)}if(null!==e&&!isNaN(e)){if(u.multipleOf&&e%u.multipleOf!==0)return BrutusinForms.messages.multipleOf.format(u.multipleOf);if(u.hasOwnProperty("maximum")){if(u.exclusiveMaximum&&e>=u.maximum)return BrutusinForms.messages.exclusiveMaximum.format(u.maximum);if(!u.exclusiveMaximum&&e>u.maximum)return BrutusinForms.messages.maximum.format(u.maximum)}if(u.hasOwnProperty("minimum")){if(u.exclusiveMinimum&&e<=u.minimum)return BrutusinForms.messages.exclusiveMinimum.format(u.minimum);if(!u.exclusiveMinimum&&e<u.minimum)return BrutusinForms.messages.minimum.format(u.minimum)}}}catch(n){return BrutusinForms.messages.invalidValue}},i.onchange=function(){var e;try{e=getValue(u,i)}catch(t){e=null}r?r[n.getValue()]=e:data=e,onDependencyChanged(o,i)},u.description&&(i.title=u.description,i.placeholder=u.description),i.onchange(),i.id=getInputId(),inputCounter++,appendChild(e,i,u),r},renderers["boolean"]=function(e,t,r,n,a){var i,o=getSchemaId(t),s=getSchema(o);if(s.required)i=document.createElement("input"),i.type="checkbox",a===!0&&(i.checked=!0);else{i=document.createElement("select");var u=document.createElement("option"),l=document.createTextNode("");l.value="",appendChild(u,l,s),appendChild(i,u,s);var d=document.createElement("option"),p=document.createTextNode(BrutusinForms.messages["true"]);d.value="true",appendChild(d,p,s),appendChild(i,d,s);var c=document.createElement("option"),m=document.createTextNode(BrutusinForms.messages["false"]);c.value="false",appendChild(c,m,s),appendChild(i,c,s),a===!0?i.selectedIndex=1:a===!1&&(i.selectedIndex=2)}i.onchange=function(){r?r[n.getValue()]=getValue(s,i):data=getValue(s,i),onDependencyChanged(o,i)},i.schema=o,i.id=getInputId(),inputCounter++,s.description&&(i.title=s.description),i.onchange(),appendChild(e,i,s)},renderers.oneOf=function(e,t,r,n,a){var i=getSchemaId(t),o=getSchema(i),s=document.createElement("select"),u=document.createElement("div");u.innerHTML="",s.type="select",s.schema=i;var l=document.createElement("option");l.value=null,appendChild(s,l,o);for(var d=0;d<o.oneOf.length;d++){var p=document.createElement("option"),c=i+"."+d,m=getSchema(c),f=document.createTextNode(m.title);if(p.value=o.oneOf[d],appendChild(p,f,o),appendChild(s,p,o),void 0!==a&&null!==a&&(o.readOnly&&(s.disabled=!0),a.hasOwnProperty("type")&&m.hasOwnProperty("properties")&&m.properties.hasOwnProperty("type"))){var h=getSchema(m.properties.type);a.type===h["enum"][0]&&(s.selectedIndex=d+1,render(null,u,t+"."+(s.selectedIndex-1),r,n,a))}}s.onchange=function(){render(null,u,t+"."+(s.selectedIndex-1),r,n,a)},appendChild(e,s,o),appendChild(e,u,o)},renderers.object=function(e,t,r,n,a){function i(e){var t=new Object;return t.getValue=function(){return e},t.onchange=function(e){},t}function o(e,t,r,n,a,i){var o=getSchemaId(r),s=getSchema(o),u=t.tBodies[0],l=document.createElement("tr"),d=document.createElement("td");d.className="add-prop-name";var p=document.createElement("table"),c=document.createElement("tr"),m=document.createElement("td"),f=document.createElement("td"),h="$"+Object.keys(e).length+"$",v=document.createElement("td");v.className="prop-value";var g=document.createElement("input");g.type="text";var y;i&&(y=RegExp(i)),g.getValidationError=function(){return g.previousValue!==g.value&&e.hasOwnProperty(g.value)?BrutusinForms.messages.addpropNameExistent:g.value?void 0:BrutusinForms.messages.addpropNameRequired};var b=createPropertyProvider(function(){if(g.value){if(!y)return g.value;if(-1!==g.value.search(y))return g.value}return h},function(t){b.getValue()!==t&&(t&&e.hasOwnProperty(t)||(t=h),(e.hasOwnProperty(t)||y&&-1===b.getValue().search(y))&&(e[b.getValue()]=e[t],delete e[t]))});g.onblur=function(){if(g.previousValue!==g.value){for(var t=g.value,r=1;g.previousValue!==t&&e.hasOwnProperty(t);)t=g.value+"("+r+")",r++;return g.value=t,b.onchange(g.previousValue),void(g.previousValue=g.value)}};var P=document.createElement("button");P.setAttribute("type","button"),P.className="remove",appendChild(P,document.createTextNode("x"),s),P.onclick=function(){delete e[g.value],t.deleteRow(l.rowIndex),g.value=null,b.onchange(g.previousValue)},appendChild(m,g,s),appendChild(f,P,s),appendChild(c,m,s),appendChild(c,f,s),appendChild(p,c,s),appendChild(d,p,s),void 0!==i&&(g.placeholder=i),appendChild(l,d,s),appendChild(l,v,s),appendChild(u,l,s),appendChild(t,u,s),render(null,v,r,e,b,a),n&&(g.value=n,g.onblur())}var s=getSchemaId(t),u=getSchema(s),l=new Object;r?(n.getValue()||0===n.getValue())&&(r[n.getValue()]=l):data=l;var d=document.createElement("table");d.className="object";var p=document.createElement("tbody");appendChild(d,p,u);var c=0;if(u.hasOwnProperty("properties")){c=u.properties.length;for(var m in u.properties){var f=document.createElement("tr"),h=document.createElement("td");h.className="prop-name";var v=t+"."+m,g=getSchema(getSchemaId(v)),y=document.createElement("td");y.className="prop-value",appendChild(p,f,g),appendChild(f,h,g),appendChild(f,y,g);var b=i(m),P=null;a&&(P=a[m]),render(h,y,v,l,b,P)}}var O=[];if(u.patternProperties||u.additionalProperties){var w=document.createElement("div");if(appendChild(w,d,u),u.patternProperties)for(var x in u.patternProperties){var C=u.patternProperties[x],E=document.createElement("div");E.className="add-pattern-div";var S=document.createElement("button");if(S.setAttribute("type","button"),S.pattern=x,S.id=t+"["+x+"]",S.onclick=function(){o(l,d,this.id,void 0,void 0,this.pattern)},(u.maxProperties||u.minProperties)&&(S.getValidationError=function(){return u.minProperties&&c+d.rows.length<u.minProperties?BrutusinForms.messages.minProperties.format(u.minProperties):u.maxProperties&&c+d.rows.length>u.maxProperties?BrutusinForms.messages.maxProperties.format(u.maxProperties):void 0}),C.description&&(S.title=C.description),appendChild(S,document.createTextNode("Add "+x),u),appendChild(E,S,u),a)for(var I in a)if(!u.properties||!u.properties.hasOwnProperty(I)){var N=RegExp(x);-1!==I.search(N)&&-1===O.indexOf(I)&&(o(l,d,t+"["+x+"]",I,a[I],x),O.push(I))}appendChild(w,E,u)}if(u.additionalProperties){var F=getSchema(u.additionalProperties),S=document.createElement("button");if(S.setAttribute("type","button"),S.onclick=function(){o(l,d,t+"[*]",void 0)},(u.maxProperties||u.minProperties)&&(S.getValidationError=function(){return u.minProperties&&c+d.rows.length<u.minProperties?BrutusinForms.messages.minProperties.format(u.minProperties):u.maxProperties&&c+d.rows.length>u.maxProperties?BrutusinForms.messages.maxProperties.format(u.maxProperties):void 0}),F.description&&(S.title=F.description),appendChild(S,document.createTextNode("Add"),u),appendChild(w,S,u),a)for(var I in a)u.properties&&u.properties.hasOwnProperty(I)||-1===O.indexOf(I)&&o(l,d,t+'["'+m+'"]',I,a[I])}appendChild(e,w,u)}else appendChild(e,d,u)},renderers.array=function(e,t,r,n,a){function i(e,t,r,n,a){var i=getSchemaId(r),o=getSchema(i),s=document.createElement("tbody"),u=document.createElement("tr");u.className="item";var l=document.createElement("td");l.className="item-index";var d=document.createElement("td");d.className="item-action";var p=document.createElement("td");p.className="item-value";var c=document.createElement("button");c.setAttribute("type","button"),c.className="remove",a===!0&&(c.disabled=!0),appendChild(c,document.createTextNode("x"),o);var m=function(){for(var e=0;e<t.rows.length;e++){var r=t.rows[e];r.cells[0].innerHTML=e+1}};c.onclick=function(){e.splice(u.rowIndex,1),t.deleteRow(u.rowIndex),m()},appendChild(d,c,o);var f=document.createTextNode(t.rows.length+1);appendChild(l,f,o),appendChild(u,l,o),appendChild(u,d,o),appendChild(u,p,o),appendChild(s,u,o),appendChild(t,s,o);var h=createPropertyProvider(function(){return u.rowIndex});render(null,p,r,e,h,n)}var o=getSchemaId(t),s=getSchema(o),u=getSchema(s.items),l=new Array;r?(n.getValue()||0===n.getValue())&&(r[n.getValue()]=l):data=l,n&&(n.onchange=function(e){delete r[e],r[n.getValue()]=l});var d=document.createElement("div"),p=document.createElement("table");p.className="array",appendChild(d,p,s),appendChild(e,d,s);var c=document.createElement("button");if(s.readOnly&&(c.disabled=!0),c.setAttribute("type","button"),c.getValidationError=function(){if(s.minItems&&s.minItems>p.rows.length)return BrutusinForms.messages.minItems.format(s.minItems);if(s.maxItems&&s.maxItems<p.rows.length)return BrutusinForms.messages.maxItems.format(s.maxItems);if(s.uniqueItems)for(var e=0;e<l.length;e++)for(var t=e+1;t<l.length;t++)if(JSON.stringify(l[e])===JSON.stringify(l[t]))return BrutusinForms.messages.uniqueItems},c.onclick=function(){i(l,p,t+"[#]",null)},u.description&&(c.title=u.description),appendChild(c,document.createTextNode(BrutusinForms.messages.addItem),s),appendChild(d,p,s),appendChild(d,c,s),a&&a instanceof Array)for(var m=0;m<a.length;m++)i(l,p,t+"["+m+"]",a[m],s.readOnly);appendChild(e,d,s)},obj.render=function(e,t){container=e,initialValue=t;var r=document.createElement("form");if(r.className="brutusin-form",r.onsubmit=function(e){return!1},container?appendChild(container,r):appendChild(document.body,r),error){var n=document.createElement("label"),a=document.createTextNode(error);appendChild(n,a),n.className="error-message",appendChild(r,n)}else render(null,r,"$",null,null);dependencyMap.hasOwnProperty("$")&&onDependencyChanged("$"),BrutusinForms.postRender&&BrutusinForms.postRender(obj)},obj.getRenderingContainer=function(){return container},obj.validate=function(){return validate(container)},obj.getData=function(){function e(t,r){if(null===s&&(s=SCHEMA_ANY),r.$ref&&(r=getDefinition(r.$ref)),t instanceof Array){if(0===t.length)return null;for(var n=new Array,a=0;a<t.length;a++)n[a]=e(t[a],r.items);return n}if(""===t)return null;if(t instanceof Object){var n=new Object,i=!1;for(var o in t)if(!o.startsWith("$")||!o.endsWith("$")){var s=null;if(r.hasOwnProperty("properties")&&r.properties.hasOwnProperty(o)&&(s=r.properties[o]),null===s&&r.hasOwnProperty("additionalProperties")&&"object"==typeof r.additionalProperties&&(s=r.additionalProperties),null===s&&r.hasOwnProperty("patternProperties"))for(var u in r.patternProperties){var l=RegExp(u);if(-1!==o.search(l)){s=r.patternProperties[u];break}}var d=e(t[o],s);null!==d&&(n[o]=d,i=!0)}return i||r.required?n:null}return t}return container?e(data,schema):null},BrutusinForms.instances[BrutusinForms.instances.length]=obj,obj},brutusin["json-forms"]=BrutusinForms}();

/***/ }),
/* 24 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;!function(f){if(true)module.exports=f();else if("function"==typeof define&&define.amd)define([],f);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).MeteorEmoji=f()}}(function(){return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n||e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){!function(global,factory){if(void 0!==exports)factory(module);else{var mod={exports:{}};factory(mod),global.meteorEmoji=mod.exports}}(this,function(module){"use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),MeteorEmoji=function(){function MeteorEmoji(){!function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,MeteorEmoji),this.initiate()}return _createClass(MeteorEmoji,[{key:"initiate",value:function(){var _this=this;document.querySelectorAll('[data-meteor-emoji="true"], [data-meteor-emoji-large="true"]').forEach(function(element){_this.generateElements(element)})}},{key:"generateElements",value:function(emojiInput){var clickLink=function(event){var caretPos=emojiInput.selectionStart;emojiInput.value=emojiInput.value.substring(0,caretPos)+" "+event.target.innerHTML+emojiInput.value.substring(caretPos),emojiPicker.style.display="block","undefined"!=typeof angular&&angular.element(emojiInput).triggerHandler("change")},clickCategory=function(event){emojiInput.selectionStart;emojiPicker.style.display="block";for(var hideUls=emojiPicker.querySelectorAll("ul"),i=1,l=hideUls.length;i<l;i++)hideUls[i].style.display="none";var backgroundToggle=emojiPicker.querySelectorAll(".category a");for(i=0,l=backgroundToggle.length;i<l;i++)backgroundToggle[i].style.background="none";emojiPicker.querySelector("."+event.target.id).style.display="block",emojiPicker.querySelector("#"+event.target.id).style.background="#c2c2c2"};emojiInput.style.width="100%";var emojiContainer=document.createElement("div");emojiContainer.style.position="relative",emojiInput.parentNode.replaceChild(emojiContainer,emojiInput),emojiContainer.appendChild(emojiInput);var emojiPicker=document.createElement("div");emojiPicker.tabIndex=0,emojiInput.hasAttribute("data-meteor-emoji-large")?(emojiPicker.style.zIndex="999",emojiPicker.style.display="block",emojiPicker.style.width="100%",emojiPicker.style.marginBottom="15px"):(emojiPicker.style.position="absolute",emojiPicker.style.right="0px",emojiPicker.style.top="30px",emojiPicker.style.display="none",emojiPicker.style.width="400px"),emojiPicker.style.zIndex="999",emojiPicker.style.overflow="hidden",emojiPicker.style.background="#fff",emojiPicker.style.borderRadius="5px",emojiPicker.style.boxShadow="0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",emojiPicker.style.borderRadius="2px;",emojiPicker.style.marginTop="5px",emojiPicker.style.outline="none";var emojiTrigger=document.createElement("a");emojiTrigger.style.position="absolute",emojiTrigger.style.top="10px",emojiTrigger.style.right="10px",emojiTrigger.style.textDecoration="none",emojiTrigger.setAttribute("href","javascript:void(0)"),emojiTrigger.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12 14"><path d="M8.9 8.4q-0.3 0.9-1.1 1.5t-1.8 0.6-1.8-0.6-1.1-1.5q-0.1-0.2 0-0.4t0.3-0.2q0.2-0.1 0.4 0t0.2 0.3q0.2 0.6 0.7 1t1.2 0.4 1.2-0.4 0.7-1q0.1-0.2 0.3-0.3t0.4 0 0.3 0.2 0 0.4zM5 5q0 0.4-0.3 0.7t-0.7 0.3-0.7-0.3-0.3-0.7 0.3-0.7 0.7-0.3 0.7 0.3 0.3 0.7zM9 5q0 0.4-0.3 0.7t-0.7 0.3-0.7-0.3-0.3-0.7 0.3-0.7 0.7-0.3 0.7 0.3 0.3 0.7zM11 7q0-1-0.4-1.9t-1.1-1.6-1.6-1.1-1.9-0.4-1.9 0.4-1.6 1.1-1.1 1.6-0.4 1.9 0.4 1.9 1.1 1.6 1.6 1.1 1.9 0.4 1.9-0.4 1.6-1.1 1.1-1.6 0.4-1.9zM12 7q0 1.6-0.8 3t-2.2 2.2-3 0.8-3-0.8-2.2-2.2-0.8-3 0.8-3 2.2-2.2 3-0.8 3 0.8 2.2 2.2 0.8 3z"/></svg>',emojiTrigger.onclick=function(){"none"===emojiPicker.style.display?emojiPicker.style.display="block":"block"===emojiPicker.style.display&&(emojiPicker.style.display="none"),emojiPicker.focus()},emojiInput.hasAttribute("data-meteor-emoji-large")||emojiContainer.appendChild(emojiTrigger),window.addEventListener("click",function(e){emojiInput.hasAttribute("data-meteor-emoji-large")||"block"===emojiPicker.style.display&&(emojiPicker.contains(e.target)||emojiTrigger.contains(e.target)||(emojiPicker.style.display="none"))});var facesCategory=document.createElement("ul");facesCategory.style.padding="10px 0px",facesCategory.style.margin="0",facesCategory.style.listStyle="none",facesCategory.style.textAlign="left",facesCategory.style.marginLeft="3%",facesCategory.classList.add("faces");var animalsCategory=document.createElement("ul");animalsCategory.style.padding="10px 0px",animalsCategory.style.margin="0",animalsCategory.style.listStyle="none",animalsCategory.style.textAlign="left",animalsCategory.style.marginLeft="3%",animalsCategory.classList.add("animals"),animalsCategory.style.display="none";var foodCategory=document.createElement("ul");foodCategory.style.padding="10px 0px",foodCategory.style.margin="0",foodCategory.style.listStyle="none",foodCategory.style.textAlign="left",foodCategory.style.marginLeft="3%",foodCategory.classList.add("food"),foodCategory.style.display="none";var sportCategory=document.createElement("ul");sportCategory.style.padding="10px 0px",sportCategory.style.margin="0",sportCategory.style.listStyle="none",sportCategory.style.textAlign="left",sportCategory.style.marginLeft="3%",sportCategory.classList.add("sport"),sportCategory.style.display="none";var transportCategory=document.createElement("ul");transportCategory.style.padding="10px 0px",transportCategory.style.margin="0",transportCategory.style.listStyle="none",transportCategory.style.textAlign="left",transportCategory.style.marginLeft="3%",transportCategory.classList.add("transport"),transportCategory.style.display="none";var objectsCategory=document.createElement("ul");objectsCategory.style.padding="10px 0px",objectsCategory.style.margin="0",objectsCategory.style.listStyle="none",objectsCategory.style.textAlign="left",objectsCategory.style.marginLeft="3%",objectsCategory.classList.add("objects"),objectsCategory.style.display="none";var emojiCategory=document.createElement("ul");emojiCategory.style.padding="0px",emojiCategory.style.margin="0",emojiCategory.style.display="table",emojiCategory.style.width="100%",emojiCategory.style.background="#eff0f1",emojiCategory.style.listStyle="none",emojiCategory.classList.add("category");var emojiCategories=new Array;emojiCategories.push({name:"faces",svg:'<svg id="faces" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150"><path id="faces" d="M74.34,128.48a53.5,53.5,0,1,1,37.84-15.67,53.16,53.16,0,0,1-37.84,15.67Zm0-97.89a44.4,44.4,0,1,0,31.4,13,44.07,44.07,0,0,0-31.4-13Z"/><path id="faces" d="M74.35,108A33.07,33.07,0,0,1,41.29,75a2.28,2.28,0,0,1,2.27-2.28h0A2.27,2.27,0,0,1,45.83,75a28.52,28.52,0,0,0,57,0,2.27,2.27,0,0,1,4.54,0A33.09,33.09,0,0,1,74.35,108Z"/><path id="faces" d="M58.84,62a6.81,6.81,0,1,0,6.81,6.81A6.81,6.81,0,0,0,58.84,62Z"/><path id="faces" d="M89.87,62a6.81,6.81,0,1,0,6.81,6.81A6.82,6.82,0,0,0,89.87,62Z"/></svg>'}),emojiCategories.push({name:"animals",svg:'<svg id="animals" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150"><path id="animals" d="M59.9,91.75h0c-22.46,0-41.82-19.34-44.09-44A52.1,52.1,0,0,1,16,36.8a4.51,4.51,0,0,1,2.63-3.62,39.79,39.79,0,0,1,12.74-3.37c23.92-2.15,45.35,17.83,47.74,43.86a52.77,52.77,0,0,1-.15,10.93,4.56,4.56,0,0,1-2.64,3.62,39.67,39.67,0,0,1-12.73,3.36c-1.23.11-2.45.17-3.66.17ZM24.76,40.49a41.29,41.29,0,0,0,.09,6.4C26.7,67,42.09,82.66,59.9,82.67h0c.94,0,1.88,0,2.83-.14a30.39,30.39,0,0,0,7.41-1.62,41.14,41.14,0,0,0-.11-6.4C68.09,53.38,51.11,37.08,32.17,38.86a30.78,30.78,0,0,0-7.41,1.63Z"/><path id="animals" d="M36.68,125.64a4.53,4.53,0,0,1-4.33-3.17,53.32,53.32,0,0,1-2.26-11A50.42,50.42,0,0,1,39.51,76.6c7.35-9.91,17.84-16,29.5-17,1.16-.11,2.33-.13,3.47-.13a4.54,4.54,0,0,1,4.33,3.16,51.59,51.59,0,0,1,2.27,11.08,50.39,50.39,0,0,1-9.42,34.8c-7.35,9.91-17.83,16-29.5,17a17.63,17.63,0,0,1-3.48.12ZM69.09,68.69A32.41,32.41,0,0,0,46.8,82a42.57,42.57,0,0,0-6.71,34.38,32.38,32.38,0,0,0,22.28-13.32A41.35,41.35,0,0,0,70,74.51a39.38,39.38,0,0,0-.94-5.82Z"/><path id="animals" d="M90.27,91.75c-1.22,0-2.43-.06-3.66-.17a39.67,39.67,0,0,1-12.73-3.36,4.57,4.57,0,0,1-2.64-3.61,53.38,53.38,0,0,1-.17-10.93c2.41-26,23.7-46.07,47.76-43.87a39.74,39.74,0,0,1,12.73,3.37,4.57,4.57,0,0,1,2.64,3.62,53.35,53.35,0,0,1,.16,10.92c-2.28,24.69-21.65,44-44.09,44ZM80,80.91a30.57,30.57,0,0,0,7.42,1.62c19.07,1.78,35.92-14.53,37.87-35.64a42.55,42.55,0,0,0,.1-6.4A30.86,30.86,0,0,0,118,38.86C99,37.07,82.06,53.38,80.12,74.51a43.91,43.91,0,0,0-.1,6.4Z"/><path id="animals" d="M113.49,125.64h0c-1.16,0-2.3,0-3.46-.12-23.9-2.21-41.36-25.47-38.94-51.85A53.52,53.52,0,0,1,73.34,62.6a4.55,4.55,0,0,1,4.33-3.16c1.16,0,2.34,0,3.51.13,11.64,1.07,22.11,7.12,29.48,17a50.51,50.51,0,0,1,9.42,34.81,53.51,53.51,0,0,1-2.26,11,4.54,4.54,0,0,1-4.33,3.19ZM81.08,68.69a42.53,42.53,0,0,0-1,5.82c-1.94,21.1,11.45,39.71,29.95,41.88A42.38,42.38,0,0,0,103.36,82,32.42,32.42,0,0,0,81.08,68.69Z"/><path id="animals" d="M75.08,45.45a7.83,7.83,0,1,0,7.83,7.83,7.83,7.83,0,0,0-7.83-7.83Z"/><path id="animals" d="M76.29,51.89a2.26,2.26,0,0,1-2.14-3A46,46,0,0,1,92.82,25.34a2.27,2.27,0,1,1,2.4,3.86A41.4,41.4,0,0,0,78.43,50.39a2.28,2.28,0,0,1-2.14,1.5Z"/><path id="animals" d="M73.87,51.89a2.28,2.28,0,0,1-2.14-1.5A41.35,41.35,0,0,0,54.94,29.2a2.27,2.27,0,0,1,2.39-3.86A46,46,0,0,1,76,48.85a2.28,2.28,0,0,1-1.37,2.91,2.31,2.31,0,0,1-.77.13Z"/></svg>'}),emojiCategories.push({name:"food",svg:'<svg id="food" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150"><path id="food" d="M104,20.76h.15c15.83.52,24.08,21.48,24.07,32.56.26,12.42-10.72,23.55-24,24.21a3.53,3.53,0,0,1-.46,0c-13.25-.66-24.23-11.8-24-24.3,0-11,8.26-31.95,24.07-32.47Zm0,47.69c8.25-.54,15.3-7.51,15.14-15,0-8.12-6.22-23.1-15.14-23.57-8.9.46-15.14,15.45-15.14,23.48-.14,7.61,6.9,14.59,15.14,15.13Z"/><path id="food" d="M97.19,69.21h.14a4.53,4.53,0,0,1,4.4,4.68l-1.48,46.92a1.59,1.59,0,0,0,.5,1.06,4.6,4.6,0,0,0,3.25,1.19h0a4.57,4.57,0,0,0,3.26-1.2,1.53,1.53,0,0,0,.49-1l-1.48-46.95a4.54,4.54,0,1,1,9.08-.28l1.47,46.91a10.42,10.42,0,0,1-3,7.65,13.65,13.65,0,0,1-9.81,4h0a13.58,13.58,0,0,1-9.79-4,10.42,10.42,0,0,1-3-7.67l1.48-46.89a4.53,4.53,0,0,1,4.53-4.4Z"/><path id="food" d="M41.84,69.21H42a4.53,4.53,0,0,1,4.4,4.68L44.9,120.81a1.57,1.57,0,0,0,.5,1.06,4.6,4.6,0,0,0,3.25,1.19h0a4.51,4.51,0,0,0,3.24-1.19,1.48,1.48,0,0,0,.5-1L50.93,73.89a4.53,4.53,0,0,1,4.39-4.68A4.4,4.4,0,0,1,60,73.61l1.48,46.91a10.49,10.49,0,0,1-3,7.66,13.57,13.57,0,0,1-9.78,4h0a13.59,13.59,0,0,1-9.78-4,10.48,10.48,0,0,1-3-7.67l1.48-46.9a4.54,4.54,0,0,1,4.54-4.4Z"/><path id="food" d="M28.59,20.76a4.54,4.54,0,0,1,4.54,4.54V51a15.52,15.52,0,0,0,31,0V25.3a4.55,4.55,0,0,1,9.09,0V51a24.61,24.61,0,1,1-49.21,0V25.3a4.54,4.54,0,0,1,4.54-4.54Z"/><path id="food" d="M55.34,20.76a4.54,4.54,0,0,1,4.54,4.54v19a4.54,4.54,0,1,1-9.08,0v-19a4.54,4.54,0,0,1,4.54-4.54Z"/><path id="food" d="M42,20.76a4.54,4.54,0,0,1,4.54,4.54v19a4.54,4.54,0,1,1-9.08,0v-19A4.54,4.54,0,0,1,42,20.76Z"/></svg>'}),emojiCategories.push({name:"sport",svg:'<svg id="sport" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150"><path id="sport" d="M75.35,130.24a53.49,53.49,0,1,1,53.48-53.49,53.55,53.55,0,0,1-53.48,53.49Zm0-97.89a44.41,44.41,0,1,0,44.4,44.4,44.1,44.1,0,0,0-44.4-44.4Z"/><path id="sport" d="M119.24,84.08A51.29,51.29,0,0,1,68,32.86a49.44,49.44,0,0,1,.26-5,2.26,2.26,0,0,1,2-2c1.66-.16,3.34-.25,5-.25a51.26,51.26,0,0,1,51.21,51.21c0,1.71-.09,3.38-.25,5a2.28,2.28,0,0,1-2,2c-1.65.16-3.33.25-5,.25ZM72.64,30.16c-.06.9-.08,1.79-.08,2.7a46.73,46.73,0,0,0,46.68,46.68q1.37,0,2.7-.09c.06-.89.08-1.79.08-2.7A46.72,46.72,0,0,0,75.35,30.08c-.91,0-1.82,0-2.71.08Z"/><path id="sport" d="M75.35,128A51.28,51.28,0,0,1,24.12,76.76c0-1.7.1-3.38.25-5a2.29,2.29,0,0,1,2-2c1.66-.16,3.33-.25,5.05-.25a51.27,51.27,0,0,1,51.21,51.22c0,1.69-.09,3.37-.25,5a2.27,2.27,0,0,1-2,2c-1.66.16-3.32.25-5,.25ZM28.75,74.05c-.05.9-.09,1.8-.09,2.71a46.74,46.74,0,0,0,46.69,46.67c.91,0,1.8,0,2.7-.08,0-.9.08-1.8.08-2.7A46.73,46.73,0,0,0,31.46,74c-.91,0-1.81,0-2.71.08Z"/><polygon id="sport" points="42.69 112.61 39.48 109.4 108 40.88 111.21 44.1 42.69 112.61 42.69 112.61"/></svg>'}),emojiCategories.push({name:"transport",svg:'<svg id="transport" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150"><path id="transport" d="M120.7,116H31a4.55,4.55,0,0,1-4.54-4.55V54.28A31.82,31.82,0,0,1,58.25,22.49h35.2a31.83,31.83,0,0,1,31.8,31.79v57.15A4.55,4.55,0,0,1,120.7,116Zm-85.16-9.09h80.62V54.28A22.74,22.74,0,0,0,93.45,31.57H58.25A22.74,22.74,0,0,0,35.54,54.28v52.61Z"/><path id="transport" d="M49.35,129.23c-8.53,0-13.62-2.77-13.62-7.41V115.6a4.54,4.54,0,1,1,9.08,0v4.06a21.32,21.32,0,0,0,9.09,0V115.6a4.54,4.54,0,0,1,9.08,0v6.22c0,4.64-5.09,7.41-13.63,7.41Z"/><path id="transport" d="M102.34,129.23c-8.53,0-13.62-2.77-13.62-7.41V115.6a4.54,4.54,0,0,1,9.08,0v4.06a21.28,21.28,0,0,0,9.08,0V115.6a4.55,4.55,0,0,1,9.09,0v6.22c0,4.64-5.09,7.41-13.63,7.41Z"/><path id="transport" d="M97.81,44.83H53.9a4.55,4.55,0,1,1,0-9.09H97.81a4.55,4.55,0,0,1,0,9.09Z"/><path id="transport" d="M54.28,84.2A6.8,6.8,0,1,0,61.07,91a6.8,6.8,0,0,0-6.79-6.8Z"/><path id="transport" d="M97.43,84.2a6.8,6.8,0,1,0,6.79,6.8,6.8,6.8,0,0,0-6.79-6.8Z"/><path id="transport" d="M107.08,81H44.63a6.82,6.82,0,0,1-6.82-6.82V54.28a6.82,6.82,0,0,1,6.82-6.81h62.45a6.82,6.82,0,0,1,6.81,6.81V74.15A6.83,6.83,0,0,1,107.08,81ZM44.63,52a2.28,2.28,0,0,0-2.28,2.27V74.15a2.28,2.28,0,0,0,2.28,2.27h62.45a2.27,2.27,0,0,0,2.27-2.27V54.28A2.27,2.27,0,0,0,107.08,52Z"/></svg>'}),emojiCategories.push({name:"objects",svg:'<svg id="objects" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150"><path id="objects" d="M107.78,129a4.55,4.55,0,0,1-2.67-.87l-30-21.79-30,21.79a4.53,4.53,0,0,1-5.34,0,4.58,4.58,0,0,1-1.65-5.08L49.59,87.82,19.6,66a4.54,4.54,0,0,1,2.67-8.22H59.34L70.8,22.55a4.55,4.55,0,0,1,8.64,0L90.89,57.81H128A4.54,4.54,0,0,1,130.63,66l-30,21.79,11.46,35.25a4.55,4.55,0,0,1-4.32,6ZM75.12,96.2a4.53,4.53,0,0,1,2.67.87l21.35,15.51L91,87.49a4.55,4.55,0,0,1,1.65-5.08L114,66.89H87.59a4.54,4.54,0,0,1-4.32-3.13l-8.15-25.1L67,63.76a4.53,4.53,0,0,1-4.32,3.13H36.25L57.61,82.41a4.54,4.54,0,0,1,1.65,5.08l-8.17,25.09L72.45,97.07a4.53,4.53,0,0,1,2.67-.87Z"/></svg>'});emojiCategories.map(function(item){var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.padding="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.style.display="table-cell",emojiLink.style.textAlign="center",emojiLink.id=String(item.name),"faces"==String(item.name)&&(emojiLink.style.background="#c2c2c2"),emojiLink.innerHTML=String(item.svg),emojiLink.onmousedown=clickCategory,emojiCategory.appendChild(emojiLink)}),[128513,128514,128515,128516,128517,128518,128521,128522,128523,128524,128525,128527,128530,128531,128532,128534,128536,128538,128540,128541,128542,128544,128545,128546,128547,128548,128549,128552,128553,128554,128555,128557,128560,128561,128562,128563,128565,128567].map(function(item){var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.margin="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.innerHTML=String.fromCodePoint(item),emojiLink.onmousedown=clickLink,facesCategory.appendChild(emojiLink)}),[128012,128013,128014,128017,128018,128020,128023,128024,128025,128026,128027,128028,128029,128030,128031,128032,128033,128034,128035,128036,128037,128038,128039,128040,128041,128043,128044,128045,128046,128047,128048,128049,128050,128051,128052,128053,128054,128055,128056,128057,128058,128059,128060].map(function(item){var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.margin="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.innerHTML=String.fromCodePoint(item),emojiLink.onmousedown=clickLink,animalsCategory.appendChild(emojiLink)}),[127813,127814,127815,127816,127817,127818,127820,127821,127822,127823,127825,127826,127827,127828,127829,127830,127831,127832,127836,127837,127838,127839,127840,127841,127842,127843,127844,127846,127848,127849,127850,127851,127852,127853,127856,127858,127859,127860,127863,127864,127867].map(function(item){var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.margin="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.innerHTML=String.fromCodePoint(item),emojiLink.onmousedown=clickLink,foodCategory.appendChild(emojiLink)}),[127921,127923,127934,127935,127936,127937,127938,127939,127940,127942,127944,127946,128675,128692,128693,9917,9918,9978,127907,127919,9971].map(function(item){var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.margin="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.innerHTML=String.fromCodePoint(item),emojiLink.onmousedown=clickLink,sportCategory.appendChild(emojiLink)}),[128641,128642,128646,128648,128650,128653,128654,128656,128660,128662,128664,128667,128668,128669,128670,128671,128672,128673,128640,128643,128644,128645,128647,128649,128652,128657,128658,128659,128661,128663,128665,128666,128674,128676,128690].map(function(item){var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.margin="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.innerHTML=String.fromCodePoint(item),emojiLink.onmousedown=clickLink,transportCategory.appendChild(emojiLink)}),[127890,127880,127881,127887,127891,127905,127906,127908,127909,127911,127912,127915,127916,127918,127919,127926,127927,127928,127929,127930,127931,127932,127968,127973,127978,128147,128148,128149,128150,128151,128152,128187,128186,128197,128213,128247].map(function(item){var emojiLi=document.createElement("li");emojiLi.style.display="inline-block",emojiLi.style.margin="5px";var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.margin="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.innerHTML=String.fromCodePoint(item),emojiLink.onmousedown=clickLink,objectsCategory.appendChild(emojiLink)}),emojiPicker.appendChild(emojiCategory),emojiPicker.appendChild(facesCategory),emojiPicker.appendChild(animalsCategory),emojiPicker.appendChild(foodCategory),emojiPicker.appendChild(sportCategory),emojiPicker.appendChild(transportCategory),emojiPicker.appendChild(objectsCategory),emojiContainer.appendChild(emojiPicker)}}]),MeteorEmoji}();module.exports=MeteorEmoji})},{}]},{},[1])(1)});

/***/ }),
/* 26 */
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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTIyYWQxZTg5Yzg2YWJhZTc2MWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb29raWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy91c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vanMtc2VydmljZXMvdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9+L3B1YnN1Yi1qcy9zcmMvcHVic3ViLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vanMtc2VydmljZXMvYXBpLXRhc2stbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2pzLXNlcnZpY2VzL25ldHdvcmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9mb2xsb3cvZm9sbG93LXN0YXR1cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvY2hhdC1ib3QtYmxvY2svY2hhdC1ib3QtYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9jaGF0LWJvdC1ibG9jay9jaGF0LWJvdC1zdGF0dXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9jb25maXJtLXJlZy9jb25maXJtLXJlZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2ZvbGxvdy9mb2xsb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9oZWFkZXIvYnVyZ2VyLW1lbnUvYnVyZ2VyLW1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9oZWFkZXIvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaW5zdGFncmFtLWFjY291bnRzLWxpc3QvaW5zdGFncmFtLWFjY291bnRzLWxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9tZXNzYWdlcy9tZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3JlZ2lzdGVyLWZvcm0vcmVnaXN0ZXItZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3dpemFyZC1mb3JtL3dpemFyZC1mb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vanMtc2VydmljZXMvYXBpLXVzZXItZGlyZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vanMtc2VydmljZXMvc3Bpbm5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2F1dGgvbG9naW4tcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JydXR1c2luLWpzb24tZm9ybXMvZGlzdC9qcy9icnV0dXNpbi1qc29uLWZvcm1zLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFzZS5zY3NzIiwid2VicGFjazovLy8uL34vbWV0ZW9yLWVtb2ppL2Rpc3QvbWV0ZW9yRW1vamkubWluLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiXSwibmFtZXMiOlsiQ09OU1QiLCJ1cmwiLCJ0bVR5cGVzIiwiZm9sbG93aW5nVCIsImZvbGxvd2luZ1N1YlQiLCJjaGF0Qm90VCIsImNoYXRCb3RTdWJUIiwiYmFzZSIsInJlZ2lzdHJhdGlvbiIsImxvZ2luIiwiY29uZmlybWF0aW9uIiwiaW5zdGFncmFtX2FkZEFjY291bnQiLCJpbnN0YWdyYW1BY2NvdW50X2dldE1ldGFEYXRhIiwiaW5zdGFncmFtQWNjb3VudF9jaGVja3BvaW50IiwiaW5zdGFncmFtQWNjb3VudF9jb25maXJtS2V5IiwiaW5zdGFncmFtRGlyZWN0X2dldE1ldGFEYXRhIiwiaW5zdGFncmFtRGlyZWN0X3Bvc3RNZXNzYWdlIiwiaW5zdGFncmFtVGFza01hbmFnZXIiLCJpbnN0YWdyYW1UYXNrTWFuYWdlcl9nZXRNZXRhRGF0YSIsImluc3RhZ3JhbVRhc2tNYW5hZ2VyX2dldFRhc2tUeXBlcyIsImluc3RhZ3JhbVRhc2tNYW5hZ2VyX2dldFRhc2tCeVR5cGVzIiwidHlwZSIsInN1YnR5cGUiLCJpbnN0YWdyYW1UYXNrTWFuYWdlcl9nZXREZWZhdWx0Q29uZmlncyIsImluc3RhZ3JhbVRhc2tNYW5hZ2VyX3Bvc3RTdGFydEZvbGxvd2luZ0xpc3QiLCJpbnN0YWdyYW1UYXNrTWFuYWdlcl9wdXRTdG9wVGFza0J5SUQiLCJpZCIsImluc3RhZ3JhbVRhc2tNYW5hZ2VyX2RlbFJlbW92ZVRhc2tCeUlEIiwiaW5zdGFncmFtVGFza01hbmFnZXJfcG9zdFN0YXJ0Q2hhdEJvdCIsInVzZXIiLCJlbWFpbCIsInBhc3N3b3JkIiwidG9rZW4iLCJjb29raWVTdG9yYWdlIiwiZW1haWxDb25maXJtZWQiLCJ1aVNlbGVjdG9ycyIsImhlYWRlckxvZ2luQm94IiwiaGVhZGVyTmF2TG9naW5CdG4iLCJoZWFkZXJSZWdCb3giLCJoZWFkZXJSZWdCdG4iLCJpbnN0YWdyYW0iLCJhZGRBY2NvdW50QnRuU2VsZWN0b3IiLCJhZGRBY2NvdW50QnRuSWQiLCJldmVudHMiLCJVU0VSX0xPR0dFRCIsIlVTRVJfTE9HT1VUIiwiVVNFUl9FTUFJTF9DT05GSVJNRUQiLCJTVE9QX0ZJWEVEX1NQSU5ORVIiLCJtZXNzYWdlcyIsIlJFQ0lFVkVfTkVXX01FU1NBR0UiLCJpbnN0YWdyYW1BY2NvdW5zIiwiSU5TVEFHUkFNX0FDQ09VTlNfUkVOREVSRUQiLCJ0YXNrcyIsIk5FV19UQVNLX0NSRUFURUQiLCJnZXRQYXRoIiwibmFtZSIsImdldFBhdGhUeXBlU3VidHlwZSIsIkNvb2tpZVNydiIsImdldCIsImMiLCJkb2N1bWVudCIsImNvb2tpZSIsIm1hdGNoIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2V0IiwidmFsdWUiLCJvcHRzIiwicGF0aCIsImRheXMiLCJPYmplY3QiLCJlbnRyaWVzIiwicmVkdWNlIiwic3RyIiwiayIsInYiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZW1vdmUiLCJVc2VyIiwibmV0d29yayIsIk5ldHdvcmsiLCJDb29raWVTdG9yYWdlIiwic2V0dGluZ1Bvc3QiLCJtZXRob2QiLCJoZWFkZXJzIiwiZ2V0VG9rZW4iLCJjb29raWVUb2tlbiIsImZvcm1EYXRhIiwiY2JFcnJvciIsInNldHRpbmciLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInNlbmRSZXF1ZXN0IiwidXNlcm5hbWUiLCJjaGVja3BvaW50VHlwZSIsImtleSIsInVzZXJJbnN0YW5jZSIsInZpZXdVdGlscyIsInNob3dJbmZvTWVzc2FnZSIsInNlbGVjdG9yIiwibWVzc2FnZTEiLCJtZXNzYWdlMiIsIiQiLCJlbXB0eSIsImFwcGVuZCIsImZpbGxMaXN0IiwiJGxpc3QiLCJkYXRhQXJyYXkiLCJpdGVtcyIsImNMaXN0IiwiZm9yRWFjaCIsIml0ZW0iLCJpIiwibGkiLCJhcHBlbmRUbyIsImFkZENsYXNzIiwidGV4dCIsImlzRW1haWwiLCJyZWdleCIsInRlc3QiLCJnZXRGb3JtYXR0ZWREYXRlVXRpbCIsInRTdGFtcCIsInNob3dGdWxsVGltZSIsImRhdGUiLCJEYXRlIiwibW9udGgiLCJnZXRNb250aCIsImRheSIsImdldERhdGUiLCJob3VyIiwiZ2V0SG91cnMiLCJtaW4iLCJnZXRNaW51dGVzIiwic2VjIiwiZ2V0U2Vjb25kcyIsImdldEZ1bGxZZWFyIiwiVXNlclRhc2tNYW5hZ2VyIiwicG9zdFN0YXJ0Rm9sbG93aW5nTGlzdCIsInBvc3RTdGFydENoYXRCb3QiLCJhc0hlYWRlciIsInN1YlR5cGUiLCJkZXRhaWxzIiwidGFza0lkIiwiU1RSQVRFR1lfVFlQRSIsIlNUUkFURUdZX1NVQlRZUEUiLCJyZXN1bHQiLCIkZWwiLCJsZW5ndGgiLCJzdGF0dXMiLCJzdGF0ZSIsIm1lc3NhZ2UiLCJyZXNwb25zZSIsImVycm9yIiwiRXJyb3IiLCJzdGF0dXNUZXh0IiwiVVJMIiwiT1BUUyIsImZldGNoIiwidGhlbiIsIlByb21pc2UiLCJhbGwiLCJqc29uIiwib2siLCJjYkVycm9yRGVmYXVsdCIsImNoZWNrU3RhdHVzIiwiZ2V0VGFza3NEYXRhIiwiaW5pdCIsImZpbGxMaXN0TWV0YSIsImlzUnVucyIsInByb2dyZXNzIiwidGFza19pZCIsInJlYXNvbiIsInRpbWVzdGFtcCIsImluaXRIYW5kbGVycyIsIiRidG5TdG9wVGFzayIsIiRidG5EZWxUYXNrIiwiZ2V0VGFza0lEIiwiZSIsImJ0biIsInRhcmdldCIsImNsb3Nlc3QiLCJkYXRhIiwib24iLCJjb25zb2xlIiwibG9nIiwic3RvcFRhc2tCeUlEIiwiZGVsZXRlVGFza0J5SUQiLCJob2xkZXJzIiwiZmlsbExpc3RNZXRhT3ZlcnJpZGUiLCIkcnVucyIsIiRzdG9wcGVkIiwiX3BhdGgiLCJnZXRNZXRhZGF0YSIsIm1ldGEiLCJ3aW5kb3ciLCJQdWJTdWIiLCJzdWJzY3JpYmUiLCJldmVudE5hbWUiLCJoZWFkZXIiLCJidXJnZXJNZW51IiwiaW5zdGFncmFtQWNjb3VudHMiLCJmb2xsb3ciLCJjaGF0Qm90Iiwic2VsZWN0b3JDc3NMb2dpbkZvcm0iLCJfbG9naW5Cb3giLCJfZm9ybUlkIiwiX2J1dHRvblN1Ym1pdElkIiwiX3Nob3dMb2dpbkJveEJ0bklkIiwic2VsZWN0b3JDc3NMb2dpbkZvcm1JbnN0YWdyYW0iLCJpc0xvZ2luSW5zdGFncmFtIiwic2V0UHViU3ViIiwiUmVnaXN0ZXJGb3JtIiwiaW5pdEhlYWRlciIsIndpemFyZEZvcm0iLCJjaGF0Qm90U3RhdHVzIiwidXNlcm5hbWVTZWxlY3RlZCIsIm9uU3VibWl0SGFuZGxlciIsImZpZWxkcyIsImtleVdvcmRzIiwidmFsIiwidHJpbSIsInJlcGxhY2UiLCJzcGxpdCIsImZpbHRlciIsInJlcUJvZHkiLCJlYWNoIiwiaWR4Iiwia2V5V29yZCIsImZpbmQiLCJhbnN3ZXIiLCJwdXNoIiwiblJlcUJvZHkiLCJyZXMiLCJtc2ciLCJpbml0Q2hhdE1zZyIsInRwbFRleHRGaWVsZCIsImxhc3RUZXh0RmllbGQiLCJsYXN0IiwiaW5zZXJ0QWZ0ZXIiLCJzZXRVc2VyTmFtZSIsInN0ZXBSZWR1Y2VyIiwic3RlcE51bWJlciIsIndpemFyZENmZyIsIndyYXBwZXJzIiwiY29uZmlybWF0aW9uV2l0aFJlZGlyZWN0IiwicGFyc2VRdWVyeVN0cmluZyIsImxvY2F0aW9uIiwic2VhcmNoIiwib2JqVVJMIiwiUmVnRXhwIiwiJDAiLCIkMSIsIiQyIiwicGFyYW1zIiwic2VuZENvbmZpcm0iLCJjb25maXJtIiwiY3VzdG9tZXJzRGF0YVN0cmluZyIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsInNldFRpbWVvdXQiLCJyZWRpcmVjdCIsInBhdGhuYW1lIiwiaW5kZXhPZiIsIm1vZGlmeUFjY0xpc3QiLCJmb2xsb3dTdGF0dXMiLCJ1c2VyX2RlZmF1bHRfY29uZmlnIiwidGFza19tb2RlIiwiY291bnQiLCJwZXJjZW50IiwiZ2V0RGF0YVN0ZXAyIiwidXNlcnNOYW1lIiwiZ2V0RGF0YVN0ZXAzIiwidXNlcnMiLCJmaWxsU3BlZWRMaXN0IiwiJHdyYXBwZXIiLCJ0YXNrTW9kZXMiLCJjZmciLCJ0YXNrX21vZGVzIiwicmFkaW9CdG5SZWR1Y2VyIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZ2V0RGVmYXVsdENvbmZpZ3MiLCJmb3VuZCIsImluaXRTdGVwcyIsImZvcm1TZWxlY3RvciIsIiRmb3JtIiwicmVtb3ZlQ2xhc3MiLCJmYWRlSW4iLCJwYXJlbnRfZmllbGRzZXQiLCJwYXJlbnRzIiwibmV4dF9zdGVwIiwicmFkaW9CdG5BY3RpdmUiLCJpbmRleCIsImZhZGVPdXQiLCJuZXh0IiwicHJldiIsImF0dHIiLCJ0b1VwcGVyQ2FzZSIsImdlbmRlclZhbCIsImNyaXRlcmlhIiwiZ2VuZGVyIiwibGltaXQiLCJmb3JtcyIsImhhdmVfcG9zdHMiLCJmcm9tIiwidG8iLCJoYXZlX2ZvbGxvd2VycyIsImhhdmVfZm9sbG93aW5ncyIsImZvY3VzIiwicHJldmVudERlZmF1bHQiLCJ0cmlnZ2VyIiwicHVibGlzaCIsInJhZGlvQnRuQXBwZW5kIiwicmFkaW9CdG5XcmFwIiwiJGFjY291bnRzTGlzdCIsIiRsaSIsIndyYXBJbm5lciIsIiRwYXJlbnRGaWVsZHNldCIsInByb3AiLCJzZWxlY3RvcnNFbCIsImxlZnRNZW51IiwiaGFtYnVyZ2VyQnV0dG9uQ2xzIiwiaGFtYnVyZ2VyTWVudUNscyIsImhhbWJ1cmdlck1lbnVPcGVuZWRDbGFzcyIsImhhbWJ1cmdlckJ1dHRvbkNsb3NlQ2xhc3MiLCJyaWdodE1lbnUiLCJzdWJIZWFkZXIiLCJ0b2dnbGVIYW1idXJnZXJNZW51IiwibWVudU5hbWUiLCJ0b2dnbGVDbGFzcyIsImJpbmQiLCJzZWxlY3RvckxvZ2luU3RhdGUiLCJzZWxlY3RvckVtYWlsQ29uZmlybVN0YXRlIiwiY2xvc2VDbGFzcyIsIm9wZW5lZENsYXNzIiwiZW1haWxOb3RDb25maXJtZWQiLCIkZW1haWxuTXNnIiwiY3NzIiwib25Mb2dpblN1YnNjcmliZSIsIiRsb2dpbk1zZyIsImlzRW1haWxDb25maXJtZWQiLCJzaG93TG9nb3V0IiwiaXNMb2dnZWQiLCJpc0xvZ2dlZEluIiwicGFyZW50Iiwic2hvdyIsIm9sZFVSTCIsInJlZmVycmVyIiwiaW5jbHVkZXMiLCIkbG9naW5Cb3giLCIkcmVnaXN0ZXJCb3giLCJoaWRlIiwiYWRkSW5zdGFncmFtQWNjb3VudCIsIm5ld0Zvcm1EYXRhIiwiJG1zZ0xpc3QiLCJjYXRjaCIsImVyciIsImFkZE9uTG9hZEhhbmRsZXJzIiwiJG1vZGFsQm9keSIsImZvcm0iLCJjc3NWYWxpZGF0aW9uQ2xhc3MiLCJjaGVja1ZhbGlkaXR5IiwicmVwb3J0VmFsaWRpdHkiLCJhZGRMaXN0SGFuZGxlciIsIiRidXR0b24iLCJzZW5kVG8iLCJzdG9wUHJvcGFnYXRpb24iLCJtb2RhbCIsImdldFNlY3VyaXR5S2V5IiwiJG1vZGFsIiwiJGtleUlucHV0IiwiY29uZmlybVNlY3VyaXR5S2V5IiwibGVuIiwibWluTGVuIiwiTnVtYmVyIiwib25IaWRlTW9kYWwiLCJyZW1vdmVBdHRyIiwidHlwZVNlbGVjdGVkIiwiY2hlY2twb2ludFR5cGVBY3RpdmUiLCJtb2RhbENvbmZpZyIsIl9jb25maWciLCJkZWZhdWx0QXZhdGFyU3JjIiwiaW5zZXJ0SXRlbSIsImNzc0NscyIsImxpVHBsIiwic3RhdHMiLCJpbmZvIiwidHBsIiwiY2hlY2twb2ludCIsIm1ldGFkYXRhIiwicmVzZW5kUmVxdWVzdCIsImlzU2VuZFJlcU9uY2UiLCJjaGVja1Jlc3BvbnNlIiwiaXNSZXNlbmRSZXF1ZXN0IiwiYWNjb3VudHMiLCJMb2dpbkZvcm0iLCJzZWxlY3RvckNzcyIsIiRlbWFpbCIsIiR0ZXh0QXJlYURlc2NyaXB0aW9uIiwidXNlckxvZ2luSGVhZGVyIiwiX2Zvcm1EYXRhIiwic3VibWl0Rm9ybSIsImZvcm1EYXRhT2JqIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJsb2dPdXQiLCJiaW5kRXZlbnRzIiwiJHNob3dMb2dpbkJveEJ0bklkIiwiJGJ1dHRvblN1Ym1pdCIsImV2ZW50IiwiaXNMb2dpbkJ0bkNsaWNrIiwiaXNBZGRJbnN0YWdyYW1CdG5DbGlja2VkIiwiaGFzQ2xhc3MiLCJ1cGRhdGVJbnRlcnZhbCIsImludGVydmFsSWQiLCJpc0luTWVzc2FnZVBhZ2UiLCIkdXNlckxpc3QiLCJyZWFkeSIsIm0iLCJNZXRlb3JFbW9qaSIsIiRwaWNrZXIiLCJzdHlsZSIsInN0eWxlTmV3IiwiaXNBcHBlbnRQcmV2TXNnIiwiaW5zZXJ0TXNnIiwidG9Mb3dlckNhc2UiLCJhZGRUb0xpc3QiLCJpbnNlcnRCZWZvcmUiLCJzaWRlIiwiYWRkUGFnaW5hdGlvbiIsInBhZ2luYXRpb24iLCJjdXJzb3IiLCJwcmV2X2N1cnNvciIsInVzZXJEYXRhIiwiY29udmVyc2F0aW9uSWQiLCJTcGlubmVyIiwic3RhcnRCdXR0b25TcGlubmVyIiwiVXNlckNvbnZlcnNhdGlvbiIsImdldE1ldGFkYXRhRGV0YWlsQ29udmVyc2F0aW9uIiwic3RvcEJ1dHRvblNwaW5uZXIiLCJmaWxsVXNlckxpc3QiLCJjb252ZXJzYXRpb25EZXRhaWwiLCJhZGRDb252ZXJzYXRpb25zIiwiY29udmVyc2F0aW9ucyIsInBhcnNlSW50IiwiZ2V0QW5kRmlsbFVzZXJMaXN0IiwiaXNBY3RpdmVGaXJzdCIsInByZXZBY3RpdmVEaWFsb2dJZCIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJzZXR0aW5ncyIsImludm9rZV9pbl9taWxsaXMiLCJnZXRBbmRGaWxsQ29udmVyc2F0aW9uIiwiaXNTY3JvbGxEb3duIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsImFkZEhhbmRsZXJzIiwiJHRleHRBcmVhIiwiYWRkIiwicG9zdE1ldGFkYXRhRGV0YWlsQ29udmVyc2F0aW9uIiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwicmVzdWx0RnJvbVNlcnZlciIsIiRkaWFsb2ciLCJzZWxlY3RvckNscyIsInN1Ym1pdEJ0biIsIiRwYXNzd29yZCIsIiRwYXNzd29yZENvbmZpcm0iLCJwYXNzd29yZENvbmZpcm0iLCJyZWdpc3RlciIsInJlZ2lzdGVyQm94IiwiJGJ0biIsImlzIiwiaXNSZWdCdG5DbGljayIsImNsYXNzZXMiLCJpbmxpbmUiLCJvdmVybGF5IiwiZml4ZWQiLCJidXR0b24iLCJfY2ZnIiwibmV3Q2xzIiwicHJlcGVuZCIsImV4dGVuZCIsInByZXdDbHMiLCJzcGlubmVySW5zdGFuY2UiLCJMb2dpblBhZ2UiLCJocmVmIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFB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QUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJpbmRleC1hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDI3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBhMjJhZDFlODljODZhYmFlNzYxZiIsImV4cG9ydCBjb25zdCBDT05TVCA9IHtcclxuICAgIHVybDoge1xyXG4gICAgICAgIHRtVHlwZXM6IHtcclxuICAgICAgICAgICAgZm9sbG93aW5nVDogJ0ZPTExPV0lORycsXHJcbiAgICAgICAgICAgIGZvbGxvd2luZ1N1YlQ6IFsnRk9MTE9XSU5HX0xJU1QnXSxcclxuICAgICAgICAgICAgY2hhdEJvdFQ6ICdDSEFUX0JPVCcsXHJcbiAgICAgICAgICAgIGNoYXRCb3RTdWJUOiBbJ0RFRkFVTFRfQ0hBVF9CT1QnXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYmFzZTogJ2h0dHA6Ly9hcGkubHV4Z3JhbS5ydS92MS8nLFxyXG4gICAgICAgIHJlZ2lzdHJhdGlvbjogJ3JlZ2lzdHJhdGlvbi9iYXNpYy8nLFxyXG4gICAgICAgIGxvZ2luOiAncmVnaXN0cmF0aW9uL2Jhc2ljL2xvZ2luJyxcclxuICAgICAgICBjb25maXJtYXRpb246ICdyZWdpc3RyYXRpb24vYmFzaWMvY29uZmlybWF0aW9uP3Rva2VuJyxcclxuICAgICAgICBpbnN0YWdyYW1fYWRkQWNjb3VudDogJ2luc3RhZ3JhbS1hY2NvdW50cy8nLCAvLyB0b0RPOiBjaGVjayBpcyByZWR1bmRhbnRcclxuICAgICAgICBpbnN0YWdyYW1BY2NvdW50X2dldE1ldGFEYXRhOiAnaW5zdGFncmFtLWFjY291bnRzL21ldGEnLFxyXG4gICAgICAgIGluc3RhZ3JhbUFjY291bnRfY2hlY2twb2ludDogJ2luc3RhZ3JhbS1hY2NvdW50cy9jaGVja3BvaW50LycsXHJcbiAgICAgICAgaW5zdGFncmFtQWNjb3VudF9jb25maXJtS2V5OiAnaW5zdGFncmFtLWFjY291bnRzL2NoZWNrcG9pbnQvJyxcclxuICAgICAgICBpbnN0YWdyYW1EaXJlY3RfZ2V0TWV0YURhdGE6ICdpbnN0YWdyYW0tZGlyZWN0L21ldGEnLFxyXG4gICAgICAgIGluc3RhZ3JhbURpcmVjdF9wb3N0TWVzc2FnZTogJ2luc3RhZ3JhbS1kaXJlY3QvJyxcclxuICAgICAgICBpbnN0YWdyYW1UYXNrTWFuYWdlcjogJ2luc3RhZ3JhbS10YXNrLW1hbmFnZXIvJyxcclxuICAgICAgICBpbnN0YWdyYW1UYXNrTWFuYWdlcl9nZXRNZXRhRGF0YTogJ2luc3RhZ3JhbS10YXNrLW1hbmFnZXIvbWV0YScsXHJcbiAgICAgICAgaW5zdGFncmFtVGFza01hbmFnZXJfZ2V0VGFza1R5cGVzOiAnaW5zdGFncmFtLXRhc2stbWFuYWdlci90YXNrL3R5cGVzJyxcclxuICAgICAgICBpbnN0YWdyYW1UYXNrTWFuYWdlcl9nZXRUYXNrQnlUeXBlczogKHR5cGUsIHN1YnR5cGUpID0+IGBpbnN0YWdyYW0tdGFzay1tYW5hZ2VyL21ldGEvdHlwZS8ke3R5cGV9L3N1YnR5cGUvJHtzdWJ0eXBlfWAsXHJcbiAgICAgICAgaW5zdGFncmFtVGFza01hbmFnZXJfZ2V0RGVmYXVsdENvbmZpZ3M6ICdpbnN0YWdyYW0tdGFzay1tYW5hZ2VyL2NvbmZpZy90eXBlJywgLy8ge1NUUkFURUdZX1RZUEV9L3N1YnR5cGUve1NUUkFURUdZX1NVQlRZUEV9XHJcbiAgICAgICAgaW5zdGFncmFtVGFza01hbmFnZXJfcG9zdFN0YXJ0Rm9sbG93aW5nTGlzdDogJ2luc3RhZ3JhbS10YXNrLW1hbmFnZXIvdGFzaycsXHJcbiAgICAgICAgaW5zdGFncmFtVGFza01hbmFnZXJfcHV0U3RvcFRhc2tCeUlEOiBpZCA9PiBgaW5zdGFncmFtLXRhc2stbWFuYWdlci90YXNrLyR7aWR9YCxcclxuICAgICAgICBpbnN0YWdyYW1UYXNrTWFuYWdlcl9kZWxSZW1vdmVUYXNrQnlJRDogaWQgPT4gYGluc3RhZ3JhbS10YXNrLW1hbmFnZXIvdGFzay8ke2lkfWAsXHJcbiAgICAgICAgaW5zdGFncmFtVGFza01hbmFnZXJfcG9zdFN0YXJ0Q2hhdEJvdDogJ2luc3RhZ3JhbS10YXNrLW1hbmFnZXIvdGFzaydcclxuXHJcbiAgICB9LFxyXG4gICAgdXNlcjoge1xyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgdG9rZW46ICcnXHJcbiAgICB9LFxyXG4gICAgY29va2llU3RvcmFnZToge1xyXG4gICAgICAgIHRva2VuOiAndXNlcl9sb2dnZWQnLFxyXG4gICAgICAgIGVtYWlsQ29uZmlybWVkOiAnZW1haWxfY29uZmlybWVkJ1xyXG4gICAgfSxcclxuICAgIHVpU2VsZWN0b3JzOiB7XHJcbiAgICAgICAgaGVhZGVyTG9naW5Cb3g6ICduYXYgLmxvZ2luLWJveCcsXHJcbiAgICAgICAgaGVhZGVyTmF2TG9naW5CdG46ICduYXYgdWwgbGkgLmpzX2xvZ2luJyxcclxuICAgICAgICBoZWFkZXJSZWdCb3g6ICduYXYgLnJlZ2lzdGVyLWJveCcsXHJcbiAgICAgICAgaGVhZGVyUmVnQnRuOiAnbmF2IHVsIGxpIC5qc19yZWdpc3RlcicsXHJcbiAgICAgICAgaW5zdGFncmFtOiB7XHJcbiAgICAgICAgICAgIGFkZEFjY291bnRCdG5TZWxlY3RvcjogJyNqc19zaG93LWxvZ2luLWJveCcsXHJcbiAgICAgICAgICAgIGFkZEFjY291bnRCdG5JZDogJ2pzX3Nob3ctbG9naW4tYm94J1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBldmVudHM6IHtcclxuICAgICAgICBVU0VSX0xPR0dFRDogJ3VzZXJfbG9nZ2VkJyxcclxuICAgICAgICBVU0VSX0xPR09VVDogJ3VzZXJfbG9nb3V0JyxcclxuICAgICAgICBVU0VSX0VNQUlMX0NPTkZJUk1FRDogJ3VzZXJfZW1haWxfY29uZmlybWVkJyxcclxuICAgICAgICBTVE9QX0ZJWEVEX1NQSU5ORVI6ICdzdG9wX2ZpeGVkX3NwaW5uZXInLFxyXG4gICAgICAgIG1lc3NhZ2VzOiB7XHJcbiAgICAgICAgICAgIFJFQ0lFVkVfTkVXX01FU1NBR0U6ICdyZWNlaXZlX25ld19tZXNzYWdlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5zdGFncmFtQWNjb3Vuczoge1xyXG4gICAgICAgICAgICBJTlNUQUdSQU1fQUNDT1VOU19SRU5ERVJFRDogJ2luc3RhZ3JhbV9hY2NvdW5zX3JlbmRlcmVkJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGFza3M6IHtcclxuICAgICAgICAgICAgTkVXX1RBU0tfQ1JFQVRFRDogJ25ld190YXNrX2NyZWF0ZWQnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGdldFBhdGgobmFtZSwgaWQpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMudXJsW25hbWVdID09PSAnZnVuY3Rpb24nICYmIGlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVybC5iYXNlICsgdGhpcy51cmxbbmFtZV0oaWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy51cmwuYmFzZSArIHRoaXMudXJsW25hbWVdO1xyXG4gICAgfSxcclxuICAgIGdldFBhdGhUeXBlU3VidHlwZShuYW1lLCB0eXBlLCBzdWJ0eXBlKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnVybFtuYW1lXSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlICYmIHN1YnR5cGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXJsLmJhc2UgKyB0aGlzLnVybFtuYW1lXSh0eXBlLCBzdWJ0eXBlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsLmJhc2UgKyB0aGlzLnVybFtuYW1lXTtcclxuICAgIH1cclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMuanMiLCJcclxuY29uc3QgQ29va2llU3J2ID0ge1xyXG4gICAgZ2V0OiBuYW1lID0+IHtcclxuICAgICAgICBjb25zdCBjID0gZG9jdW1lbnQuY29va2llLm1hdGNoKGAoPzooPzpefC4qOyAqKSR7bmFtZX0gKj0gKihbXjtdKikuKiQpfF4uKiRgKVsxXTtcclxuICAgICAgICBpZiAoYykge1xyXG4gICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGMpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXQ6IChuYW1lLCB2YWx1ZSwgb3B0cyA9IHtwYXRoOiAnLycsIGRheXM6IDM2NX0pID0+IHtcclxuICAgICAgICBpZiAob3B0cy5kYXlzKSB7XHJcbiAgICAgICAgICAgIG9wdHNbJ21heC1hZ2UnXSA9IG9wdHMuZGF5cyAqIDYwICogNjAgKiAyNDtcclxuICAgICAgICAgICAgZGVsZXRlIG9wdHMuZGF5cztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXHJcbiAgICAgICAgb3B0cyA9IE9iamVjdC5lbnRyaWVzKG9wdHMpLnJlZHVjZSgoc3RyLCBbaywgdl0pID0+IGAke3N0cn07ICR7a309JHt2fWAsICcnKTtcclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBgJHtuYW1lfT0ke2VuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkgKyBvcHRzfWA7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlOiAobmFtZSwgb3B0cykgPT4gQ29va2llU3J2LnNldChuYW1lLCAnJywgeydtYXgtYWdlJzogLTEsIHBhdGg6ICcvJywgZGF5czogMCwgLi4ub3B0c30pXHJcbiAgICAvLyBwYXRoICYgZG9tYWluIG11c3QgbWF0Y2ggY29va2llIGJlaW5nIGRlbGV0ZWRcclxufTtcclxuXHJcbi8qXHJcbmNsYXNzIENvb2tpZVN0b3JhZ2Uge1xyXG4gICAgcmVhZChrZXkpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9ICQuY29va2llKGtleSk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyBudWxsIDogdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q29va2llKG5hbWUsIHZhbHVlLCBkYXlzKSB7XHJcbiAgICAgICAgbGV0IGV4cGlyZXMgPSAnJztcclxuICAgICAgICBpZiAoZGF5cykge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKGRheXMgKiAyNCAqIDYwICogNjAgKiAxMDAwKSk7XHJcbiAgICAgICAgICAgIGV4cGlyZXMgPSBgOyBleHBpcmVzPSR7ZGF0ZS50b1VUQ1N0cmluZygpfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGAke25hbWV9ID0keyh2YWx1ZSB8fCAnJykgKyBleHBpcmVzfTsgcGF0aD0vYDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb29raWUobmFtZSkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gYDsgJHtkb2N1bWVudC5jb29raWV9YDtcclxuICAgICAgICBjb25zdCBwYXJ0cyA9IHZhbHVlLnNwbGl0KGA7ICR7bmFtZX09YCk7XHJcbiAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCA9PSAyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJ0cy5wb3AoKS5zcGxpdCgnOycpLnNoaWZ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb29raWVTcnY7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tb24vanMtc2VydmljZXMvY29va2llLmpzIiwiLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IHtDT05TVH0gZnJvbSAnLi9jb25zdHMnO1xyXG5pbXBvcnQgTmV0d29yayBmcm9tICcuL25ldHdvcmsnO1xyXG5pbXBvcnQgQ29va2llU3RvcmFnZSBmcm9tICcuL2Nvb2tpZSc7XHJcblxyXG5jbGFzcyBVc2VyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm5ldHdvcmsgPSBuZXcgTmV0d29yaygpO1xyXG4gICAgICAgIHRoaXMuY29va2llU3RvcmFnZSA9IENvb2tpZVN0b3JhZ2U7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5nUG9zdCA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlzTG9nZ2VkSW4oKSB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5nZXRUb2tlbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRW1haWxDb25maXJtZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmNvb2tpZVN0b3JhZ2UuZ2V0KENPTlNULmNvb2tpZVN0b3JhZ2UuZW1haWxDb25maXJtZWQpID09PSAnY29uZmlybWVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VG9rZW4oKSB7XHJcbiAgICAgICAgY29uc3QgY29va2llVG9rZW4gPSB0aGlzLmNvb2tpZVN0b3JhZ2UuZ2V0KENPTlNULmNvb2tpZVN0b3JhZ2UudG9rZW4pO1xyXG4gICAgICAgIHJldHVybiBjb29raWVUb2tlbjtcclxuICAgIH1cclxuXHJcbiAgICBsb2dpbihmb3JtRGF0YSwgY2JFcnJvcikge1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSB7Li4udGhpcy5zZXR0aW5nUG9zdCwgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpfTtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KENPTlNULmdldFBhdGgoJ2xvZ2luJyksIHNldHRpbmcsIGNiRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEluc3RhZ3JhbUFjY291bnQoZm9ybURhdGEsIGNiRXJyb3IpIHtcclxuICAgICAgICBjb25zdCBzZXR0aW5nID0ge1xyXG4gICAgICAgICAgICAuLi50aGlzLnNldHRpbmdQb3N0LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QuaGVhZGVycyxcclxuICAgICAgICAgICAgICAgIHRva2VuOiB0aGlzLmdldFRva2VuKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1fYWRkQWNjb3VudCcpLCBzZXR0aW5nLCBjYkVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbnN0YWdyYW1BY2NvdW50KCkge1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSB7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QsXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QuaGVhZGVycyxcclxuICAgICAgICAgICAgICAgIHRva2VuOiB0aGlzLmdldFRva2VuKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1fYWRkQWNjb3VudCcpLCBzZXR0aW5nKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25maXJtKHRva2VuKSB7XHJcbiAgICAgICAgLy8gY29uc3QgY29uZmlybVVybCA9IENPTlNULmdldFBhdGgoJ2NvbmZpcm1hdGlvbicpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QoYCR7Q09OU1QuZ2V0UGF0aCgnY29uZmlybWF0aW9uJykgKyB0b2tlbn1gKTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3Rlcihmb3JtRGF0YSkge1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSB7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChDT05TVC5nZXRQYXRoKCdyZWdpc3RyYXRpb24nKSwgc2V0dGluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWV0YWRhdGEodG9rZW4sIGNiRXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KGAke0NPTlNULmdldFBhdGgoJ2luc3RhZ3JhbUFjY291bnRfZ2V0TWV0YURhdGEnKX1gLCB7aGVhZGVyczoge3Rva2VufX0sIGNiRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNlY3VyaXR5S2V5KHVzZXJuYW1lLCBjaGVja3BvaW50VHlwZSkge1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSB7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsndHlwZSc6IGNoZWNrcG9pbnRUeXBlfSksIC8vIHRvZG86IHRtcCBzZXQsIGl0IHNob3VsZCBiZSAndHlwZSdcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdC5oZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgJ3Rva2VuJzogdGhpcy5nZXRUb2tlbigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QoYCR7Q09OU1QuZ2V0UGF0aCgnaW5zdGFncmFtQWNjb3VudF9jaGVja3BvaW50Jyl9JHt1c2VybmFtZX1gLCBzZXR0aW5nKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25maXJtU2VjdXJpdHlLZXkoa2V5LCB1c2VybmFtZSkge1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsnc2VjdXJpdHlfY29kZSc6IGtleX0pLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnNldHRpbmdQb3N0LmhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICAndG9rZW4nOiAnM2UzMjFlNjAwMjk3MTFlOTkyNjRhMDQ4MWM4ZTE3ZDQnIC8vIHRvZG86IHRoaXMuZ2V0VG9rZW4oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KGAke0NPTlNULmdldFBhdGgoJ2luc3RhZ3JhbUFjY291bnRfY29uZmlybUtleScpfSR7dXNlcm5hbWV9YCwgc2V0dGluZyk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5sZXQgdXNlckluc3RhbmNlID0gbnVsbDtcclxuXHJcbmlmICghdXNlckluc3RhbmNlKSB7XHJcbiAgICB1c2VySW5zdGFuY2UgPSBuZXcgVXNlcigpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VySW5zdGFuY2U7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tb24vanMtc2VydmljZXMvdXNlci5qcyIsIi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbi8vIGltcG9ydCB7Q09OU1R9IGZyb20gJy4vY29uc3RzJztcclxuXHJcbmZ1bmN0aW9uIHZpZXdVdGlscygpIHtcclxuICAgIGZ1bmN0aW9uIHNob3dJbmZvTWVzc2FnZShzZWxlY3RvciwgbWVzc2FnZTEsIG1lc3NhZ2UyKSB7XHJcbiAgICAgICAgJChzZWxlY3RvcikuZW1wdHkoKVxyXG4gICAgICAgICAgICAuYXBwZW5kKGAkeyhtZXNzYWdlMSkgPyBgPHA+c3RhdHVzOiAke21lc3NhZ2UxfTwvcD5gIDogJyd9YClcclxuICAgICAgICAgICAgLmFwcGVuZChgPHA+JHttZXNzYWdlMn0gPC9wPmApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZpbGxMaXN0KCRsaXN0LCBkYXRhQXJyYXkpIHtcclxuICAgICAgICBjb25zdCBpdGVtcyA9IGRhdGFBcnJheTtcclxuICAgICAgICBjb25zdCBjTGlzdCA9ICRsaXN0O1xyXG4gICAgICAgIGNMaXN0LmVtcHR5KCk7XHJcbiAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBsaSA9ICQoJzxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbVwiPjwvbGk+JylcclxuICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhjTGlzdCk7XHJcbiAgICAgICAgICAgICQoJzxhLz4nKS5hZGRDbGFzcygndWktYWxsJylcclxuICAgICAgICAgICAgICAgIC50ZXh0KGl0ZW0udXNlcm5hbWUpXHJcbiAgICAgICAgICAgICAgICAuYXBwZW5kVG8obGkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzRW1haWwoZW1haWwpIHtcclxuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xyXG4gICAgICAgIGNvbnN0IHJlZ2V4ID0gL14oW2EtekEtWjAtOV8uKy1dKStcXEAoKFthLXpBLVowLTktXSkrXFwuKSsoW2EtekEtWjAtOV17Miw0fSkrJC87XHJcbiAgICAgICAgcmV0dXJuIHJlZ2V4LnRlc3QoZW1haWwpO1xyXG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgKi9cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRGb3JtYXR0ZWREYXRlVXRpbCh0U3RhbXAsIHNob3dGdWxsVGltZSkge1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0U3RhbXApO1xyXG5cclxuICAgICAgICBsZXQgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xyXG4gICAgICAgIGxldCBkYXkgPSBkYXRlLmdldERhdGUoKTtcclxuICAgICAgICBsZXQgaG91ciA9IGRhdGUuZ2V0SG91cnMoKTtcclxuICAgICAgICBsZXQgbWluID0gZGF0ZS5nZXRNaW51dGVzKCk7XHJcbiAgICAgICAgbGV0IHNlYyA9IGRhdGUuZ2V0U2Vjb25kcygpO1xyXG5cclxuICAgICAgICBtb250aCA9IChtb250aCA8IDEwID8gJzAnIDogJycpICsgbW9udGg7XHJcbiAgICAgICAgZGF5ID0gKGRheSA8IDEwID8gJzAnIDogJycpICsgZGF5O1xyXG4gICAgICAgIGhvdXIgPSAoaG91ciA8IDEwID8gJzAnIDogJycpICsgaG91cjtcclxuICAgICAgICBtaW4gPSAobWluIDwgMTAgPyAnMCcgOiAnJykgKyBtaW47XHJcbiAgICAgICAgc2VjID0gKHNlYyA8IDEwID8gJzAnIDogJycpICsgc2VjO1xyXG5cclxuICAgICAgICBsZXQgc3RyID0gJyc7XHJcbiAgICAgICAgaWYgKCFzaG93RnVsbFRpbWUpIHtcclxuICAgICAgICAgICAgc3RyID0gYCR7aG91cn06JHttaW59YDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzdHIgPSBgJHtkYXRlLmdldEZ1bGxZZWFyKCl9LSR7bW9udGh9LSR7ZGF5fV8ke2hvdXJ9OiR7bWlufToke3NlY31gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHN0cjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNob3dJbmZvTWVzc2FnZSxcclxuICAgICAgICBmaWxsTGlzdCxcclxuICAgICAgICBpc0VtYWlsLFxyXG4gICAgICAgIGdldEZvcm1hdHRlZERhdGVVdGlsXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB2aWV3VXRpbHMoKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy92aWV3LmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTAsMjAxMSwyMDEyLDIwMTMsMjAxNCBNb3JnYW4gUm9kZXJpY2sgaHR0cDovL3JvZGVyaWNrLmRrXG4gKiBMaWNlbnNlOiBNSVQgLSBodHRwOi8vbXJnbnJkcmNrLm1pdC1saWNlbnNlLm9yZ1xuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tcm9kZXJpY2svUHViU3ViSlNcbiAqL1xuXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3Rvcnkpe1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBQdWJTdWIgPSB7fTtcbiAgICByb290LlB1YlN1YiA9IFB1YlN1YjtcblxuICAgIHZhciBkZWZpbmUgPSByb290LmRlZmluZTtcblxuICAgIGZhY3RvcnkoUHViU3ViKTtcblxuICAgIC8vIEFNRCBzdXBwb3J0XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCl7XG4gICAgICAgIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIFB1YlN1YjsgfSk7XG5cbiAgICAgICAgLy8gQ29tbW9uSlMgYW5kIE5vZGUuanMgbW9kdWxlIHN1cHBvcnRcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jyl7XG4gICAgICAgIGlmIChtb2R1bGUgIT09IHVuZGVmaW5lZCAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICAgICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gUHViU3ViOyAvLyBOb2RlLmpzIHNwZWNpZmljIGBtb2R1bGUuZXhwb3J0c2BcbiAgICAgICAgfVxuICAgICAgICBleHBvcnRzLlB1YlN1YiA9IFB1YlN1YjsgLy8gQ29tbW9uSlMgbW9kdWxlIDEuMS4xIHNwZWNcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gUHViU3ViOyAvLyBDb21tb25KU1xuICAgIH1cblxufSgoIHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHdpbmRvdyApIHx8IHRoaXMsIGZ1bmN0aW9uIChQdWJTdWIpe1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBtZXNzYWdlcyA9IHt9LFxuICAgICAgICBsYXN0VWlkID0gLTE7XG5cbiAgICBmdW5jdGlvbiBoYXNLZXlzKG9iail7XG4gICAgICAgIHZhciBrZXk7XG5cbiAgICAgICAgZm9yIChrZXkgaW4gb2JqKXtcbiAgICAgICAgICAgIGlmICggb2JqLmhhc093blByb3BlcnR5KGtleSkgKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgdGhyb3dzIHRoZSBwYXNzZWQgZXhjZXB0aW9uLCBmb3IgdXNlIGFzIGFyZ3VtZW50IGZvciBzZXRUaW1lb3V0XG4gICAgICogQGFsaWFzIHRocm93RXhjZXB0aW9uXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHsgT2JqZWN0IH0gZXggQW4gRXJyb3Igb2JqZWN0XG4gICAgICovXG4gICAgZnVuY3Rpb24gdGhyb3dFeGNlcHRpb24oIGV4ICl7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiByZVRocm93RXhjZXB0aW9uKCl7XG4gICAgICAgICAgICB0aHJvdyBleDtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWxsU3Vic2NyaWJlcldpdGhEZWxheWVkRXhjZXB0aW9ucyggc3Vic2NyaWJlciwgbWVzc2FnZSwgZGF0YSApe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc3Vic2NyaWJlciggbWVzc2FnZSwgZGF0YSApO1xuICAgICAgICB9IGNhdGNoKCBleCApe1xuICAgICAgICAgICAgc2V0VGltZW91dCggdGhyb3dFeGNlcHRpb24oIGV4ICksIDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsbFN1YnNjcmliZXJXaXRoSW1tZWRpYXRlRXhjZXB0aW9ucyggc3Vic2NyaWJlciwgbWVzc2FnZSwgZGF0YSApe1xuICAgICAgICBzdWJzY3JpYmVyKCBtZXNzYWdlLCBkYXRhICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsaXZlck1lc3NhZ2UoIG9yaWdpbmFsTWVzc2FnZSwgbWF0Y2hlZE1lc3NhZ2UsIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKXtcbiAgICAgICAgdmFyIHN1YnNjcmliZXJzID0gbWVzc2FnZXNbbWF0Y2hlZE1lc3NhZ2VdLFxuICAgICAgICAgICAgY2FsbFN1YnNjcmliZXIgPSBpbW1lZGlhdGVFeGNlcHRpb25zID8gY2FsbFN1YnNjcmliZXJXaXRoSW1tZWRpYXRlRXhjZXB0aW9ucyA6IGNhbGxTdWJzY3JpYmVyV2l0aERlbGF5ZWRFeGNlcHRpb25zLFxuICAgICAgICAgICAgcztcblxuICAgICAgICBpZiAoICFtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eSggbWF0Y2hlZE1lc3NhZ2UgKSApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAocyBpbiBzdWJzY3JpYmVycyl7XG4gICAgICAgICAgICBpZiAoIHN1YnNjcmliZXJzLmhhc093blByb3BlcnR5KHMpKXtcbiAgICAgICAgICAgICAgICBjYWxsU3Vic2NyaWJlciggc3Vic2NyaWJlcnNbc10sIG9yaWdpbmFsTWVzc2FnZSwgZGF0YSApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRGVsaXZlcnlGdW5jdGlvbiggbWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApe1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gZGVsaXZlck5hbWVzcGFjZWQoKXtcbiAgICAgICAgICAgIHZhciB0b3BpYyA9IFN0cmluZyggbWVzc2FnZSApLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoICcuJyApO1xuXG4gICAgICAgICAgICAvLyBkZWxpdmVyIHRoZSBtZXNzYWdlIGFzIGl0IGlzIG5vd1xuICAgICAgICAgICAgZGVsaXZlck1lc3NhZ2UobWVzc2FnZSwgbWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyk7XG5cbiAgICAgICAgICAgIC8vIHRyaW0gdGhlIGhpZXJhcmNoeSBhbmQgZGVsaXZlciBtZXNzYWdlIHRvIGVhY2ggbGV2ZWxcbiAgICAgICAgICAgIHdoaWxlKCBwb3NpdGlvbiAhPT0gLTEgKXtcbiAgICAgICAgICAgICAgICB0b3BpYyA9IHRvcGljLnN1YnN0ciggMCwgcG9zaXRpb24gKTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHRvcGljLmxhc3RJbmRleE9mKCcuJyk7XG4gICAgICAgICAgICAgICAgZGVsaXZlck1lc3NhZ2UoIG1lc3NhZ2UsIHRvcGljLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWVzc2FnZUhhc1N1YnNjcmliZXJzKCBtZXNzYWdlICl7XG4gICAgICAgIHZhciB0b3BpYyA9IFN0cmluZyggbWVzc2FnZSApLFxuICAgICAgICAgICAgZm91bmQgPSBCb29sZWFuKG1lc3NhZ2VzLmhhc093blByb3BlcnR5KCB0b3BpYyApICYmIGhhc0tleXMobWVzc2FnZXNbdG9waWNdKSksXG4gICAgICAgICAgICBwb3NpdGlvbiA9IHRvcGljLmxhc3RJbmRleE9mKCAnLicgKTtcblxuICAgICAgICB3aGlsZSAoICFmb3VuZCAmJiBwb3NpdGlvbiAhPT0gLTEgKXtcbiAgICAgICAgICAgIHRvcGljID0gdG9waWMuc3Vic3RyKCAwLCBwb3NpdGlvbiApO1xuICAgICAgICAgICAgcG9zaXRpb24gPSB0b3BpYy5sYXN0SW5kZXhPZiggJy4nICk7XG4gICAgICAgICAgICBmb3VuZCA9IEJvb2xlYW4obWVzc2FnZXMuaGFzT3duUHJvcGVydHkoIHRvcGljICkgJiYgaGFzS2V5cyhtZXNzYWdlc1t0b3BpY10pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb3VuZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwdWJsaXNoKCBtZXNzYWdlLCBkYXRhLCBzeW5jLCBpbW1lZGlhdGVFeGNlcHRpb25zICl7XG4gICAgICAgIG1lc3NhZ2UgPSAodHlwZW9mIG1lc3NhZ2UgPT09ICdzeW1ib2wnKSA/IG1lc3NhZ2UudG9TdHJpbmcoKSA6IG1lc3NhZ2U7XG5cbiAgICAgICAgdmFyIGRlbGl2ZXIgPSBjcmVhdGVEZWxpdmVyeUZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICksXG4gICAgICAgICAgICBoYXNTdWJzY3JpYmVycyA9IG1lc3NhZ2VIYXNTdWJzY3JpYmVycyggbWVzc2FnZSApO1xuXG4gICAgICAgIGlmICggIWhhc1N1YnNjcmliZXJzICl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHN5bmMgPT09IHRydWUgKXtcbiAgICAgICAgICAgIGRlbGl2ZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoIGRlbGl2ZXIsIDAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQdWJsaXNoZXMgdGhlIG1lc3NhZ2UsIHBhc3NpbmcgdGhlIGRhdGEgdG8gaXQncyBzdWJzY3JpYmVyc1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBhbGlhcyBwdWJsaXNoXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBwdWJsaXNoXG4gICAgICogQHBhcmFtIHt9IGRhdGEgVGhlIGRhdGEgdG8gcGFzcyB0byBzdWJzY3JpYmVyc1xuICAgICAqIEByZXR1cm4geyBCb29sZWFuIH1cbiAgICAgKi9cbiAgICBQdWJTdWIucHVibGlzaCA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHJldHVybiBwdWJsaXNoKCBtZXNzYWdlLCBkYXRhLCBmYWxzZSwgUHViU3ViLmltbWVkaWF0ZUV4Y2VwdGlvbnMgKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUHVibGlzaGVzIHRoZSB0aGUgbWVzc2FnZSBzeW5jaHJvbm91c2x5LCBwYXNzaW5nIHRoZSBkYXRhIHRvIGl0J3Mgc3Vic2NyaWJlcnNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgcHVibGlzaFN5bmNcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHB1Ymxpc2hcbiAgICAgKiBAcGFyYW0ge30gZGF0YSBUaGUgZGF0YSB0byBwYXNzIHRvIHN1YnNjcmliZXJzXG4gICAgICogQHJldHVybiB7IEJvb2xlYW4gfVxuICAgICAqL1xuICAgIFB1YlN1Yi5wdWJsaXNoU3luYyA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHJldHVybiBwdWJsaXNoKCBtZXNzYWdlLCBkYXRhLCB0cnVlLCBQdWJTdWIuaW1tZWRpYXRlRXhjZXB0aW9ucyApO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmVzIHRoZSBwYXNzZWQgZnVuY3Rpb24gdG8gdGhlIHBhc3NlZCBtZXNzYWdlLiBFdmVyeSByZXR1cm5lZCB0b2tlbiBpcyB1bmlxdWUgYW5kIHNob3VsZCBiZSBzdG9yZWQgaWYgeW91IG5lZWQgdG8gdW5zdWJzY3JpYmVcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgc3Vic2NyaWJlXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBzdWJzY3JpYmUgdG9cbiAgICAgKiBAcGFyYW0geyBGdW5jdGlvbiB9IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBhIG5ldyBtZXNzYWdlIGlzIHB1Ymxpc2hlZFxuICAgICAqIEByZXR1cm4geyBTdHJpbmcgfVxuICAgICAqL1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUgPSBmdW5jdGlvbiggbWVzc2FnZSwgZnVuYyApe1xuICAgICAgICBpZiAoIHR5cGVvZiBmdW5jICE9PSAnZnVuY3Rpb24nKXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lc3NhZ2UgPSAodHlwZW9mIG1lc3NhZ2UgPT09ICdzeW1ib2wnKSA/IG1lc3NhZ2UudG9TdHJpbmcoKSA6IG1lc3NhZ2U7XG5cbiAgICAgICAgLy8gbWVzc2FnZSBpcyBub3QgcmVnaXN0ZXJlZCB5ZXRcbiAgICAgICAgaWYgKCAhbWVzc2FnZXMuaGFzT3duUHJvcGVydHkoIG1lc3NhZ2UgKSApe1xuICAgICAgICAgICAgbWVzc2FnZXNbbWVzc2FnZV0gPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZvcmNpbmcgdG9rZW4gYXMgU3RyaW5nLCB0byBhbGxvdyBmb3IgZnV0dXJlIGV4cGFuc2lvbnMgd2l0aG91dCBicmVha2luZyB1c2FnZVxuICAgICAgICAvLyBhbmQgYWxsb3cgZm9yIGVhc3kgdXNlIGFzIGtleSBuYW1lcyBmb3IgdGhlICdtZXNzYWdlcycgb2JqZWN0XG4gICAgICAgIHZhciB0b2tlbiA9ICd1aWRfJyArIFN0cmluZygrK2xhc3RVaWQpO1xuICAgICAgICBtZXNzYWdlc1ttZXNzYWdlXVt0b2tlbl0gPSBmdW5jO1xuICAgICAgICBcbiAgICAgICAgLy8gcmV0dXJuIHRva2VuIGZvciB1bnN1YnNjcmliaW5nXG4gICAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU3Vic2NyaWJlcyB0aGUgcGFzc2VkIGZ1bmN0aW9uIHRvIHRoZSBwYXNzZWQgbWVzc2FnZSBvbmNlXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQGFsaWFzIHN1YnNjcmliZU9uY2VcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHN1YnNjcmliZSB0b1xuICAgICAqIEBwYXJhbSB7IEZ1bmN0aW9uIH0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIGEgbmV3IG1lc3NhZ2UgaXMgcHVibGlzaGVkXG4gICAgICogQHJldHVybiB7IFB1YlN1YiB9XG4gICAgICovXG4gICAgUHViU3ViLnN1YnNjcmliZU9uY2UgPSBmdW5jdGlvbiggbWVzc2FnZSwgZnVuYyApe1xuICAgICAgICB2YXIgdG9rZW4gPSBQdWJTdWIuc3Vic2NyaWJlKCBtZXNzYWdlLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgLy8gYmVmb3JlIGZ1bmMgYXBwbHksIHVuc3Vic2NyaWJlIG1lc3NhZ2VcbiAgICAgICAgICAgIFB1YlN1Yi51bnN1YnNjcmliZSggdG9rZW4gKTtcbiAgICAgICAgICAgIGZ1bmMuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFB1YlN1YjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGFsbCBzdWJzY3JpcHRpb25zXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBhbGlhcyBjbGVhckFsbFN1YnNjcmlwdGlvbnNcbiAgICAgKi9cbiAgICBQdWJTdWIuY2xlYXJBbGxTdWJzY3JpcHRpb25zID0gZnVuY3Rpb24gY2xlYXJBbGxTdWJzY3JpcHRpb25zKCl7XG4gICAgICAgIG1lc3NhZ2VzID0ge307XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENsZWFyIHN1YnNjcmlwdGlvbnMgYnkgdGhlIHRvcGljXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBhbGlhcyBjbGVhckFsbFN1YnNjcmlwdGlvbnNcbiAgICAgKi9cbiAgICBQdWJTdWIuY2xlYXJTdWJzY3JpcHRpb25zID0gZnVuY3Rpb24gY2xlYXJTdWJzY3JpcHRpb25zKHRvcGljKXtcbiAgICAgICAgdmFyIG07XG4gICAgICAgIGZvciAobSBpbiBtZXNzYWdlcyl7XG4gICAgICAgICAgICBpZiAobWVzc2FnZXMuaGFzT3duUHJvcGVydHkobSkgJiYgbS5pbmRleE9mKHRvcGljKSA9PT0gMCl7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG1lc3NhZ2VzW21dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgc3Vic2NyaXB0aW9uc1xuICAgICAqXG4gICAgICogLSBXaGVuIHBhc3NlZCBhIHRva2VuLCByZW1vdmVzIGEgc3BlY2lmaWMgc3Vic2NyaXB0aW9uLlxuICAgICAqXG5cdCAqIC0gV2hlbiBwYXNzZWQgYSBmdW5jdGlvbiwgcmVtb3ZlcyBhbGwgc3Vic2NyaXB0aW9ucyBmb3IgdGhhdCBmdW5jdGlvblxuICAgICAqXG5cdCAqIC0gV2hlbiBwYXNzZWQgYSB0b3BpYywgcmVtb3ZlcyBhbGwgc3Vic2NyaXB0aW9ucyBmb3IgdGhhdCB0b3BpYyAoaGllcmFyY2h5KVxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWxpYXMgc3Vic2NyaWJlT25jZVxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB8IEZ1bmN0aW9uIH0gdmFsdWUgQSB0b2tlbiwgZnVuY3Rpb24gb3IgdG9waWMgdG8gdW5zdWJzY3JpYmUgZnJvbVxuICAgICAqIEBleGFtcGxlIC8vIFVuc3Vic2NyaWJpbmcgd2l0aCBhIHRva2VuXG4gICAgICogdmFyIHRva2VuID0gUHViU3ViLnN1YnNjcmliZSgnbXl0b3BpYycsIG15RnVuYyk7XG4gICAgICogUHViU3ViLnVuc3Vic2NyaWJlKHRva2VuKTtcbiAgICAgKiBAZXhhbXBsZSAvLyBVbnN1YnNjcmliaW5nIHdpdGggYSBmdW5jdGlvblxuICAgICAqIFB1YlN1Yi51bnN1YnNjcmliZShteUZ1bmMpO1xuICAgICAqIEBleGFtcGxlIC8vIFVuc3Vic2NyaWJpbmcgZnJvbSBhIHRvcGljXG4gICAgICogUHViU3ViLnVuc3Vic2NyaWJlKCdteXRvcGljJyk7XG4gICAgICovXG4gICAgUHViU3ViLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICB2YXIgZGVzY2VuZGFudFRvcGljRXhpc3RzID0gZnVuY3Rpb24odG9waWMpIHtcbiAgICAgICAgICAgICAgICB2YXIgbTtcbiAgICAgICAgICAgICAgICBmb3IgKCBtIGluIG1lc3NhZ2VzICl7XG4gICAgICAgICAgICAgICAgICAgIGlmICggbWVzc2FnZXMuaGFzT3duUHJvcGVydHkobSkgJiYgbS5pbmRleE9mKHRvcGljKSA9PT0gMCApe1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYSBkZXNjZW5kYW50IG9mIHRoZSB0b3BpYyBleGlzdHM6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc1RvcGljICAgID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAoIG1lc3NhZ2VzLmhhc093blByb3BlcnR5KHZhbHVlKSB8fCBkZXNjZW5kYW50VG9waWNFeGlzdHModmFsdWUpICksXG4gICAgICAgICAgICBpc1Rva2VuICAgID0gIWlzVG9waWMgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyxcbiAgICAgICAgICAgIGlzRnVuY3Rpb24gPSB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicsXG4gICAgICAgICAgICByZXN1bHQgPSBmYWxzZSxcbiAgICAgICAgICAgIG0sIG1lc3NhZ2UsIHQ7XG5cbiAgICAgICAgaWYgKGlzVG9waWMpe1xuICAgICAgICAgICAgUHViU3ViLmNsZWFyU3Vic2NyaXB0aW9ucyh2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKCBtIGluIG1lc3NhZ2VzICl7XG4gICAgICAgICAgICBpZiAoIG1lc3NhZ2VzLmhhc093blByb3BlcnR5KCBtICkgKXtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZXNbbV07XG5cbiAgICAgICAgICAgICAgICBpZiAoIGlzVG9rZW4gJiYgbWVzc2FnZVt2YWx1ZV0gKXtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG1lc3NhZ2VbdmFsdWVdO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdG9rZW5zIGFyZSB1bmlxdWUsIHNvIHdlIGNhbiBqdXN0IHN0b3AgaGVyZVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNGdW5jdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKCB0IGluIG1lc3NhZ2UgKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmhhc093blByb3BlcnR5KHQpICYmIG1lc3NhZ2VbdF0gPT09IHZhbHVlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgbWVzc2FnZVt0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xufSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3B1YnN1Yi1qcy9zcmMvcHVic3ViLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCB7Q09OU1R9IGZyb20gJy4vY29uc3RzJztcclxuaW1wb3J0IE5ldHdvcmsgZnJvbSAnLi9uZXR3b3JrJztcclxuaW1wb3J0IENvb2tpZVN0b3JhZ2UgZnJvbSAnLi9jb29raWUnO1xyXG5cclxuY2xhc3MgVXNlclRhc2tNYW5hZ2VyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm5ldHdvcmsgPSBuZXcgTmV0d29yaygpO1xyXG4gICAgICAgIHRoaXMuY29va2llU3RvcmFnZSA9IENvb2tpZVN0b3JhZ2U7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5nUG9zdCA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucG9zdFN0YXJ0Rm9sbG93aW5nTGlzdCA9IHRoaXMucG9zdFN0YXJ0Rm9sbG93aW5nTGlzdDtcclxuICAgICAgICB0aGlzLnBvc3RTdGFydENoYXRCb3QgPSB0aGlzLnBvc3RTdGFydENoYXRCb3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaXNMb2dnZWRJbigpIHtcclxuICAgIC8vICAgICByZXR1cm4gISF0aGlzLmdldFRva2VuKCk7XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gaXNFbWFpbENvbmZpcm1lZCgpIHtcclxuICAgIC8vICAgICByZXR1cm4gKHRoaXMuY29va2llU3RvcmFnZS5nZXQoQ09OU1QuY29va2llU3RvcmFnZS5lbWFpbENvbmZpcm1lZCkgPT09ICdjb25maXJtZWQnKTtcclxuICAgIC8vIH1cclxuICAgIGdldFRva2VuKGFzSGVhZGVyKSB7XHJcbiAgICAgICAgY29uc3QgY29va2llVG9rZW4gPSB0aGlzLmNvb2tpZVN0b3JhZ2UuZ2V0KENPTlNULmNvb2tpZVN0b3JhZ2UudG9rZW4pO1xyXG4gICAgICAgIHJldHVybiAoYXNIZWFkZXIpID8ge2hlYWRlcnM6IHt0b2tlbjogY29va2llVG9rZW59fSA6IGNvb2tpZVRva2VuO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1ldGFkYXRhKHBhdGgsIGNiRXJyb3IpIHtcclxuICAgICAgICBjb25zdCB7dHlwZSwgc3ViVHlwZX0gPSBwYXRoO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QoYCR7Q09OU1QuZ2V0UGF0aFR5cGVTdWJ0eXBlKCdpbnN0YWdyYW1UYXNrTWFuYWdlcl9nZXRUYXNrQnlUeXBlcycsIHR5cGUsIHN1YlR5cGUpfWAsXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VG9rZW4oJ2FzSGVhZGVyJyksIGNiRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRhc2tUeXBlcyhkZXRhaWxzLCBjYkVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChgJHtDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1UYXNrTWFuYWdlcl9nZXRUYXNrVHlwZXMnKX1gLFxyXG4gICAgICAgICAgICB0aGlzLmdldFRva2VuKCdhc0hlYWRlcicpLCBjYkVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wVGFza0J5SUQodGFza0lkLCBjYkVycm9yKSB7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZyA9IHtcclxuICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdCxcclxuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdC5oZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgJ3Rva2VuJzogdGhpcy5nZXRUb2tlbigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHVybCA9IENPTlNULmdldFBhdGgoJ2luc3RhZ3JhbVRhc2tNYW5hZ2VyX3B1dFN0b3BUYXNrQnlJRCcsIHRhc2tJZCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdCh1cmwsXHJcbiAgICAgICAgICAgIHNldHRpbmcsIGNiRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVRhc2tCeUlEKHRhc2tJZCwgY2JFcnJvcikge1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSB7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QsXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QuaGVhZGVycyxcclxuICAgICAgICAgICAgICAgICd0b2tlbic6IHRoaXMuZ2V0VG9rZW4oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCB1cmwgPSBDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1UYXNrTWFuYWdlcl9kZWxSZW1vdmVUYXNrQnlJRCcsIHRhc2tJZCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdCh1cmwsXHJcbiAgICAgICAgICAgIHNldHRpbmcsIGNiRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERlZmF1bHRDb25maWdzKGNiRXJyb3IpIHtcclxuICAgICAgICBjb25zdCBkZXRhaWxzID0ge1xyXG4gICAgICAgICAgICBTVFJBVEVHWV9UWVBFOiAnRk9MTE9XSU5HJyxcclxuICAgICAgICAgICAgU1RSQVRFR1lfU1VCVFlQRTogJ0ZPTExPV0lOR19MSVNUJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgdXJsID0gYCR7Q09OU1QuZ2V0UGF0aCgnaW5zdGFncmFtVGFza01hbmFnZXJfZ2V0RGVmYXVsdENvbmZpZ3MnKX0vJHtkZXRhaWxzLlNUUkFURUdZX1RZUEV9L3N1YnR5cGUvJHtkZXRhaWxzLlNUUkFURUdZX1NVQlRZUEV9YDtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KHVybCxcclxuICAgICAgICAgICAgdGhpcy5nZXRUb2tlbignYXNIZWFkZXInKSwgY2JFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcG9zdFN0YXJ0Rm9sbG93aW5nTGlzdChib2R5LCBjYkVycm9yLCBwYXRoKSB7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZyA9IHtcclxuICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdCxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdC5oZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgJ3Rva2VuJzogdGhpcy5nZXRUb2tlbigpLFxyXG4gICAgICAgICAgICAgICAgJ1gtQXV0aC1Ub2tlbic6ICdlMmY0MzM2YWJlYTQ0MDQ4OWM1MWM1YzEwMjk0ZWExMidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2V0dGluZy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkoYm9keSk7XHJcbiAgICAgICAgY29uc3QgdXJsID0gcGF0aCA/IGAke0NPTlNULmdldFBhdGgocGF0aCl9YCA6IGAke0NPTlNULmdldFBhdGgoJ2luc3RhZ3JhbVRhc2tNYW5hZ2VyX3Bvc3RTdGFydEZvbGxvd2luZ0xpc3QnKX1gO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KHVybCxcclxuICAgICAgICAgICAgc2V0dGluZywgY2JFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcG9zdFN0YXJ0Q2hhdEJvdChib2R5LCBjYkVycm9yKSB7XHJcbiAgICAgICAgY29uc3QgcGF0aCA9ICdpbnN0YWdyYW1UYXNrTWFuYWdlcl9wb3N0U3RhcnRDaGF0Qm90JztcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3N0U3RhcnRGb2xsb3dpbmdMaXN0KGJvZHksIGNiRXJyb3IsIHBhdGgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgdXNlckluc3RhbmNlID0gbnVsbDtcclxuXHJcbmlmICghdXNlckluc3RhbmNlKSB7XHJcbiAgICB1c2VySW5zdGFuY2UgPSBuZXcgVXNlclRhc2tNYW5hZ2VyKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJJbnN0YW5jZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy9hcGktdGFzay1tYW5hZ2VyLmpzIiwiaW1wb3J0IHZpZXdVdGlscyBmcm9tICcuL3ZpZXcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV0d29yayB7XHJcblxyXG4gICAgY2JFcnJvckRlZmF1bHQocmVzdWx0KSB7XHJcbiAgICAgICAgY29uc3QgJGVsID0gKCQoJyNkZXNjcmlwdGlvbicpLmxlbmd0aCkgPyAkKCcjZGVzY3JpcHRpb24nKSA6ICQoJy5lcnJvci1tc2cnKTtcclxuICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKCRlbCxcclxuICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5zdGF0ZSxcclxuICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5tZXNzYWdlIHx8ICdlcnJvcicpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrU3RhdHVzKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAmJiByZXNwb25zZS5zdGF0dXMgPj0gMjAwICYmIHJlc3BvbnNlLnN0YXR1cyA8IDMwMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgICAgIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZW5kUmVxdWVzdChVUkwsIE9QVFMsIGNiRXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goVVJMLCBPUFRTKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiBQcm9taXNlLmFsbChbcmVzcG9uc2UsIHJlc3BvbnNlLmpzb24oKV0pKVxyXG4gICAgICAgICAgICAudGhlbigoW3Jlc3BvbnNlLCBqc29uXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghY2JFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNiRXJyb3JEZWZhdWx0KGpzb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNiRXJyb3IoanNvbik7IC8vIHVwZGF0ZSB2aWV3XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tTdGF0dXMocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihqc29uLnN0YXR1cy5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBqc29uO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy9uZXR3b3JrLmpzIiwiaW1wb3J0IFVzZXJUYXNrTWFuYWdlciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvYXBpLXRhc2stbWFuYWdlcic7XHJcbmltcG9ydCB2aWV3VXRpbHMgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3ZpZXcnO1xyXG5pbXBvcnQge0NPTlNUfSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29uc3RzJztcclxuXHJcbmZ1bmN0aW9uIGZpbGxMaXN0TWV0YSgkbGlzdCwgZGF0YUFycmF5LCBpc1J1bnMpIHtcclxuICAgIGNvbnN0IGl0ZW1zID0gZGF0YUFycmF5O1xyXG4gICAgLy8gY29uc3QgZGVmYXVsdEF2YXRhclNyYyA9ICdodHRwczovL2kuaW1ndXIuY29tL2pOTlQ0TEUucG5nJztcclxuICAgICRsaXN0LmVtcHR5KCk7XHJcbiAgICBpZiAoIWl0ZW1zLmxlbmd0aCkge1xyXG4gICAgICAgICQoYDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBweS0yXCI+XHJcbiAgICAgICAgICAgICAgICA8cD7QkiDRjdGC0L7QvCDRgNCw0LfQtNC10LvQtSDQvdC10YIg0L3QuCDQvtC00L3QvtC5INC30LDQtNCw0YfQuC48L3A+XHJcbiAgICAgICAgICAgIDwvbGk+YCkuYXBwZW5kVG8oJGxpc3QpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCB7cHJvZ3Jlc3MsIHRhc2tfaWQsIHR5cGUsIHN1YnR5cGV9ID0gaXRlbTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0eXBlKTtcclxuICAgICAgICAvLyBpZiAoaXRlbS50eXBlICYmIGl0ZW0udHlwZSAhPT0gJ0ZPTExPV0lORycpIHtcclxuICAgICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBpZiAoaXRlbS5zdGF0dXMuc3RhdGUgPT09ICdTVE9QUEVEJyAmJiAhaXNSdW5zKSB7XHJcbiAgICAgICAgICAgICQoYDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBwLTAgcHktMlwiIGRhdGEtdXNlcm5hbWU9XCIke3R5cGV9XCIgZGF0YS10YXNrLWlkPVwiJHt0YXNrX2lkfVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWJvZHkgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB0YXNrLXR5cGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHsodGFza19pZCkgPyBgPHAgY2xhc3M9XCJiYWRnZSBiYWRnZS1zZWNvbmRhcnkgbXktMVwiPiR7dGFza19pZH08L3A+YCA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1wcm9ncmVzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzbWFsbCBteS0xXCI+0J7RgdGC0LDQvdC+0LLQu9C10L3QvjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7KGl0ZW0uc3RhdHVzLnJlYXNvbikgPyBgPHAgY2xhc3M9XCJteS0xXCI+JHtpdGVtLnN0YXR1cy5yZWFzb259PC9wPmAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4td2FybmluZyBqc19idG4tZGVsZXRlLXRhc2tcIj7Qo9C00LDQu9C40YLRjDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwiY29sIHRhc2stc3VidHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkeyhzdWJ0eXBlKSA/IGA8cCBjbGFzcz1cIm10LTAgbWItMVwiPiR7c3VidHlwZX08L3A+YCA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+YCkuYXBwZW5kVG8oJGxpc3QpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbS5zdGF0dXMuc3RhdGUgPT09ICdJTl9QUk9HUkVTUycgJiYgaXNSdW5zKSB7XHJcbiAgICAgICAgICAgICQoYDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBweS0yXCIgZGF0YS10YXNrLWlkPVwiJHt0YXNrX2lkfVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB0YXNrLXByb2dyZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtdC0wIG1iLTEgbmFtZVwiPtCSINC/0YDQvtCz0YDQtdGB0YHQtSA6ICR7dGFza19pZH08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeSBqc19idG4tc3RvcC10YXNrXCI+0J7RgdGC0LDQvdC+0LLQuNGC0Yw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXdhcm5pbmcganNfYnRuLWRlbGV0ZS10YXNrXCI+0KPQtNCw0LvQuNGC0Yw8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9saT5gKS5hcHBlbmRUbygkbGlzdCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpdGVtLnN0YXR1cy5zdGF0ZSA9PT0gJ0ZJTklTSEVEJyAmJiAhaXNSdW5zKSB7XHJcbiAgICAgICAgICAgICQoYDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBweS0yXCIgZGF0YS10YXNrLWlkPVwiJHt0YXNrX2lkfVwiPlxyXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiY2FyZC10aXRsZVwiPtCS0YvQv9C+0LvQvdC10L3QvdC+PC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtbXV0ZWRcIj4ke3ZpZXdVdGlscy5nZXRGb3JtYXR0ZWREYXRlVXRpbChwcm9ncmVzcy50aW1lc3RhbXApfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtc3VjY2Vzc1wiPjEwMCU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzLWJhciBiZy1zdWNjZXNzXCIgcm9sZT1cInByb2dyZXNzYmFyXCIgc3R5bGU9XCJ3aWR0aDogMTAwJTsgaGVpZ2h0OiA2cHg7XCIgYXJpYS12YWx1ZW5vdz1cIjI1XCIgYXJpYS12YWx1ZW1pbj1cIjBcIiBhcmlhLXZhbHVlbWF4PVwiMTAwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4td2FybmluZyBqc19idG4tZGVsZXRlLXRhc2tcIj7Qo9C00LDQu9C40YLRjDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+YCkuYXBwZW5kVG8oJGxpc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoISQoJ2xpJywgJGxpc3QpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAkKGA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gcHktMlwiIGRhdGEtdGFzay1pZD1cIiR7dGFza19pZH1cIj5cclxuICAgICAgICAgICAgICAgIDxwPtCSINGN0YLQvtC8INGA0LDQt9C00LXQu9C1INC90LXRgiDQvdC4INC+0LTQvdC+0Lkg0LfQsNC00LDRh9C4LjwvcD5cclxuICAgICAgICAgICAgPC9saT5gKS5hcHBlbmRUbygkbGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXHJcbmZ1bmN0aW9uIGluaXRIYW5kbGVycygpIHtcclxuICAgIGNvbnN0ICRidG5TdG9wVGFzayA9ICQoJy5qc19idG4tc3RvcC10YXNrJyk7XHJcbiAgICBjb25zdCAkYnRuRGVsVGFzayA9ICQoJy5qc19idG4tZGVsZXRlLXRhc2snKTtcclxuICAgIGNvbnN0IGdldFRhc2tJRCA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYnRuID0gJChlLnRhcmdldCk7XHJcbiAgICAgICAgcmV0dXJuIGJ0bi5jbG9zZXN0KCdsaScpLmRhdGEoJ3Rhc2staWQnKTtcclxuICAgIH07XHJcblxyXG4gICAgJGJ0blN0b3BUYXNrLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFza0lkID0gZ2V0VGFza0lEKGUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTVE9QIFRhc2sgaWQnLCB0YXNrSWQpO1xyXG4gICAgICAgIFVzZXJUYXNrTWFuYWdlci5zdG9wVGFza0J5SUQodGFza0lkKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgZ2V0VGFza3NEYXRhKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkYnRuRGVsVGFzay5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhc2tJZCA9IGdldFRhc2tJRChlKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnREVMRVRFIGlkJywgdGFza0lkKTtcclxuICAgICAgICBVc2VyVGFza01hbmFnZXIuZGVsZXRlVGFza0J5SUQodGFza0lkKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgZ2V0VGFza3NEYXRhKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRhc2tzRGF0YShob2xkZXJzLCBwYXRoLCBmaWxsTGlzdE1ldGFPdmVycmlkZSkge1xyXG4gICAgY29uc3QgeyRydW5zLCAkc3RvcHBlZH0gPSBob2xkZXJzO1xyXG4gICAgY29uc3QgX3BhdGggPSBwYXRoIHx8IHtcclxuICAgICAgICB0eXBlOiBDT05TVC51cmwudG1UeXBlcy5mb2xsb3dpbmdULFxyXG4gICAgICAgIHN1YlR5cGU6IENPTlNULnVybC50bVR5cGVzLmZvbGxvd2luZ1N1YlRbMF1cclxuICAgIH07XHJcbiAgICBVc2VyVGFza01hbmFnZXIuZ2V0TWV0YWRhdGEoX3BhdGgpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdnZXRNZXRhZGF0YSAmIGZpbGxMaXN0TWV0YScsIHJlc3VsdCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMuc3RhdGUgPT09ICdvaycpIHtcclxuICAgICAgICAgICAgZmlsbExpc3RNZXRhKCRydW5zLCByZXN1bHQuZGF0YS5tZXRhLCAnaXNSdW5zJyk7XHJcbiAgICAgICAgICAgIGZpbGxMaXN0TWV0YSgkc3RvcHBlZCwgcmVzdWx0LmRhdGEubWV0YSk7XHJcbiAgICAgICAgICAgIGluaXRIYW5kbGVycygpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogSW5pdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBjb25zdCBob2xkZXJzID0ge1xyXG4gICAgICAgICRydW5zOiAkKCcuZm9sbG93LXRhc2tzLXJ1bnMnKSxcclxuICAgICAgICAkc3RvcHBlZDogJCgnLmZvbGxvdy10YXNrcy1zdG9wcGVkJylcclxuICAgIH07XHJcbiAgICBnZXRUYXNrc0RhdGEoaG9sZGVycyk7XHJcbiAgICB3aW5kb3cuUHViU3ViLnN1YnNjcmliZShDT05TVC5ldmVudHMudGFza3MuTkVXX1RBU0tfQ1JFQVRFRCwgKGV2ZW50TmFtZSwgZGF0YSkgPT4ge1xyXG4gICAgICAgIGdldFRhc2tzRGF0YShob2xkZXJzKTtcclxuICAgIH0pO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3MvZm9sbG93L2ZvbGxvdy1zdGF0dXMuanMiLCJpbXBvcnQgJy4vYmFzZS5zY3NzJztcclxuLy8gaW1wb3J0ICdib290c3RyYXAnO1xyXG5pbXBvcnQge0NPTlNUfSBmcm9tICcuL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMnO1xyXG5pbXBvcnQgUHViU3ViIGZyb20gJ3B1YnN1Yi1qcyc7XHJcbmltcG9ydCBSZWdpc3RlckZvcm0gZnJvbSAnLi9ibG9ja3MvcmVnaXN0ZXItZm9ybS9yZWdpc3Rlci1mb3JtJztcclxuaW1wb3J0IHtMb2dpbkZvcm19IGZyb20gJy4vYmxvY2tzL2xvZ2luLWZvcm0vbG9naW4tZm9ybSc7XHJcbmltcG9ydCB7TG9naW5QYWdlfSBmcm9tICcuL3BhZ2VzL19hdXRoL2xvZ2luLXBhZ2UnO1xyXG5pbXBvcnQge2NvbmZpcm1hdGlvbldpdGhSZWRpcmVjdH0gZnJvbSAnLi9ibG9ja3MvY29uZmlybS1yZWcvY29uZmlybS1yZWcnO1xyXG5pbXBvcnQgKiBhcyBoZWFkZXIgZnJvbSAnLi9ibG9ja3MvaGVhZGVyL2hlYWRlcic7XHJcbmltcG9ydCAqIGFzIGJ1cmdlck1lbnUgZnJvbSAnLi9ibG9ja3MvaGVhZGVyL2J1cmdlci1tZW51L2J1cmdlci1tZW51JztcclxuaW1wb3J0ICogYXMgaW5zdGFncmFtQWNjb3VudHMgZnJvbSAnLi9ibG9ja3MvaW5zdGFncmFtLWFjY291bnRzLWxpc3QvaW5zdGFncmFtLWFjY291bnRzLWxpc3QnO1xyXG5pbXBvcnQgKiBhcyBtZXNzYWdlcyBmcm9tICcuL2Jsb2Nrcy9tZXNzYWdlcy9tZXNzYWdlcyc7XHJcbmltcG9ydCAqIGFzIGZvbGxvdyBmcm9tICcuL2Jsb2Nrcy9mb2xsb3cvZm9sbG93JztcclxuaW1wb3J0ICogYXMgY2hhdEJvdCBmcm9tICcuL2Jsb2Nrcy9jaGF0LWJvdC1ibG9jay9jaGF0LWJvdC1ibG9jayc7XHJcblxyXG5jb25zdCBzZWxlY3RvckNzc0xvZ2luRm9ybSA9IHtcclxuICAgIF9sb2dpbkJveDogQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyTG9naW5Cb3gsXHJcbiAgICBfZm9ybUlkOiAnI2pzX2xvZ2luLWZvcm0nLFxyXG4gICAgX2J1dHRvblN1Ym1pdElkOiAnI2pzX2xvZ2luX2J0bicsXHJcbiAgICBfc2hvd0xvZ2luQm94QnRuSWQ6IENPTlNULnVpU2VsZWN0b3JzLmhlYWRlck5hdkxvZ2luQnRuXHJcbn07XHJcblxyXG5jb25zdCBzZWxlY3RvckNzc0xvZ2luRm9ybUluc3RhZ3JhbSA9IHtcclxuICAgIF9sb2dpbkJveDogJ21haW4gLmxvZ2luLWJveCcsXHJcbiAgICBfZm9ybUlkOiAnI2pzX2luc3RhZ3JhbS1hZGQtYWNjb3VudCcsXHJcbiAgICBfYnV0dG9uU3VibWl0SWQ6ICcjanNfaW5zdGFncmFtLWFkZC1hY2NvdW50LS1idG4nLFxyXG4gICAgX3Nob3dMb2dpbkJveEJ0bklkOiAnI2pzX3Nob3ctbG9naW4tYm94JyxcclxuICAgIGlzTG9naW5JbnN0YWdyYW06IHRydWVcclxufTtcclxuXHJcbmZ1bmN0aW9uIHNldFB1YlN1YihQdWJTdWIpIHtcclxuICAgIHdpbmRvdy5QdWJTdWIgPSBQdWJTdWI7XHJcbn1cclxuXHJcbmNvbnN0IGluaXQgPSAoKSA9PiB7XHJcbiAgICBzZXRQdWJTdWIoUHViU3ViKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdpbml0IGpzIGhlcmUnLCBDT05TVC51c2VyKTtcclxuICAgIChuZXcgUmVnaXN0ZXJGb3JtKCkpLmluaXQoKTtcclxuICAgIExvZ2luRm9ybShzZWxlY3RvckNzc0xvZ2luRm9ybSkuaW5pdCgpO1xyXG4gICAgTG9naW5Gb3JtKHNlbGVjdG9yQ3NzTG9naW5Gb3JtSW5zdGFncmFtKS5pbml0KCk7IC8vIGluaXQgaW5zdGFncmFtIGxvZ2luIGZvcm0qIS9cclxuICAgIExvZ2luUGFnZSh7XHJcbiAgICAgICAgX2xvZ2luQm94OiAnLmF1dGgubG9naW4gLmNhcmQtc2lnbmluJyxcclxuICAgICAgICBfZm9ybUlkOiAnLmZvcm0tc2lnbmluJyxcclxuICAgICAgICBfYnV0dG9uU3VibWl0SWQ6ICcuZm9ybS1zaWduaW4gW3R5cGU9XCJzdWJtaXRcIl0nXHJcbiAgICB9KS5pbml0KCk7XHJcblxyXG4gICAgY29uZmlybWF0aW9uV2l0aFJlZGlyZWN0KCkuaW5pdCgpO1xyXG4gICAgaGVhZGVyLmluaXRIZWFkZXIoKTtcclxuICAgIGJ1cmdlck1lbnUuaW5pdCgpO1xyXG4gICAgZm9sbG93LmluaXQoKTtcclxuICAgIGluc3RhZ3JhbUFjY291bnRzLmluaXQoKTtcclxuICAgIG1lc3NhZ2VzLmluaXQoKTtcclxuICAgIGNoYXRCb3QuaW5pdCgpO1xyXG59O1xyXG5cclxuKCgpID0+IGluaXQoKSkoKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jvb3RzdHJhcC5qcyIsImltcG9ydCB7Q09OU1R9IGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMnO1xyXG5pbXBvcnQgKiBhcyB3aXphcmRGb3JtIGZyb20gJy4uLy4uL2Jsb2Nrcy93aXphcmQtZm9ybS93aXphcmQtZm9ybSc7XHJcbmltcG9ydCBVc2VyVGFza01hbmFnZXIgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2FwaS10YXNrLW1hbmFnZXInO1xyXG5pbXBvcnQgKiBhcyBjaGF0Qm90U3RhdHVzIGZyb20gJy4vY2hhdC1ib3Qtc3RhdHVzJztcclxuXHJcbmxldCB1c2VybmFtZVNlbGVjdGVkID0gJyc7XHJcblxyXG5mdW5jdGlvbiBvblN1Ym1pdEhhbmRsZXIoZSkge1xyXG4gICAgY29uc3QgZmllbGRzID0gJCgnLmNoYXQtYm90LXRleHQtZmllbGRzJyk7XHJcbiAgICBjb25zdCBrZXlXb3JkcyA9ICRlbCA9PiAkZWwudmFsKClcclxuICAgICAgICAudHJpbSgpXHJcbiAgICAgICAgLnJlcGxhY2UoLyAvZywgJycpXHJcbiAgICAgICAgLnNwbGl0KCcsJylcclxuICAgICAgICAuZmlsdGVyKGkgPT4gaS5sZW5ndGggPiAwKTtcclxuICAgIGNvbnN0IHJlcUJvZHkgPSBbXTtcclxuICAgIGZpZWxkcy5lYWNoKChpZHgsIGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCBrZXlXb3JkID0ga2V5V29yZHMoJChpdGVtKS5maW5kKCd0ZXh0YXJlYS5jaGF0LXdvcmRzJykpO1xyXG4gICAgICAgIGNvbnN0IGFuc3dlciA9ICQoaXRlbSkuZmluZCgndGV4dGFyZWEuY2hhdC1tZXNzYWdlcycpLnZhbCgpO1xyXG4gICAgICAgIHJlcUJvZHkucHVzaCh7J2tleV93b3Jkcyc6IGtleVdvcmQsIGFuc3dlcn0pO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBuUmVxQm9keSA9IHtcclxuICAgICAgICAndXNlcm5hbWUnOiB1c2VybmFtZVNlbGVjdGVkLFxyXG4gICAgICAgICd0eXBlJzogQ09OU1QudXJsLnRtVHlwZXMuY2hhdEJvdFQsIC8vICdDSEFUX0JPVCcsXHJcbiAgICAgICAgJ3N1YnR5cGUnOiBDT05TVC51cmwudG1UeXBlcy5jaGF0Qm90U3ViVFswXSwgLy8gJ0RFRkFVTFRfQ0hBVF9CT1QnLFxyXG4gICAgICAgICd1c2VyX2RlZmF1bHRfY29uZmlnJzoge30sXHJcbiAgICAgICAgJ3VzZXJfY3VzdG9tX2NvbmZpZyc6IHtcclxuICAgICAgICAgICAgJ3RleHRfZm9ybXMnOiByZXFCb2R5XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnbWFrZSByZXF1ZXN0IGhlcmUqKicsIG5SZXFCb2R5KTtcclxuICAgIGZ1bmN0aW9uIGNiRXJyb3IocmVzKSB7XHJcbiAgICAgICAgY29uc3QgbXNnID0gcmVzLnN0YXR1cy5tZXNzYWdlO1xyXG4gICAgICAgICQoJy5mb3JtLXN1Ym1pdC1maW5pc2gtLWVycm9yJykuYWRkQ2xhc3MoJ2QtYmxvY2snKVxyXG4gICAgICAgIC5maW5kKCcuYWxlcnQnKS5hcHBlbmQoYDxwPiR7bXNnfTwvcD5gKTtcclxuICAgIH1cclxuICAgIFVzZXJUYXNrTWFuYWdlci5wb3N0U3RhcnRDaGF0Qm90KG5SZXFCb2R5LCBjYkVycm9yKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygncG9zdEJvdCcpO1xyXG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzLnN0YXRlID09PSAnb2snKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xyXG4gICAgICAgICAgICAkKCcuZm9ybS1zdWJtaXQtZmluaXNoJykuYWRkQ2xhc3MoJ2QtYmxvY2snKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoJy5hbGVydCcpLmFwcGVuZChgPHA+dGFza19pZDogJHtyZXN1bHQuZGF0YS50YXNrX2lkfTwvcD5gKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEluaXQgaGVhZGVyXHJcbiAqL1xyXG5mdW5jdGlvbiBpbml0Q2hhdE1zZygpIHtcclxuICAgIGNvbnN0IHRwbFRleHRGaWVsZCA9ICgpID0+ICQoYDxkaXYgY2xhc3M9XCJjaGF0LWJvdC10ZXh0LWZpZWxkcyBtdC0yXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWNvbnRyb2wgY2hhdC13b3Jkc1wiIHJvd3M9XCI0XCIgcGxhY2Vob2xkZXI9XCLQktCy0LXQtNC40YLQtSDQutC70Y7Rh9C10LLRi9C1INGB0LvQvtCy0LAg0LjQu9C4INGE0YDQsNC30Ysg0YfQtdGA0LXQtyDQt9Cw0L/Rj9GC0YPRjiwg0L/RgNC4INC60L7RgtC+0YDRi9GFINCx0YPQtNC10YIg0YHRgNCw0LHQsNGC0YvQstCw0YLRjCDRh9Cw0YIt0LHQvtGCXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImZvcm0tY29udHJvbCBjaGF0LW1lc3NhZ2VzXCIgcm93cz1cIjRcIiBwbGFjZWhvbGRlcj1cItCS0LLQtdC00LjRgtC1INGB0L7QvtCx0YnQtdC90LjQtSwg0LrQvtGC0L7RgNC+0LUg0LHRg9C00LXRgiDQvtGC0L/RgNCw0LLQu9GP0YLRjNGB0Y8sINC10YHQu9C4INC/0YDQuNGB0YPRgtGB0YLQstC+0LLQsNC70Lgg0LrQu9GO0Ycu0YHQu9C+0LLQsCDQuNC70Lgg0YTRgNCw0LfRiyDQuNC3INGB0YLQvtC70LHRhtCwINGB0LvQtdCy0LBcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PmApO1xyXG5cclxuICAgICQoJy5qc19hZGQtY2hhdC1ib3QnKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxhc3RUZXh0RmllbGQgPSAkKCcuY2hhdC1ib3QtdGV4dC1maWVsZHMnKS5sYXN0KCk7XHJcbiAgICAgICAgdHBsVGV4dEZpZWxkKCkuaW5zZXJ0QWZ0ZXIobGFzdFRleHRGaWVsZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBhbGVydCBjbG9zZVxyXG4gICAgJCgnLmZvcm0tc3VibWl0LWZpbmlzaCAuY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FsZXJ0IGNsb3NlJyk7XHJcbiAgICAgICAgLy8gJCgnI3YtcGlsbHMtcnVubmVkLXRhYicpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgLy8gd2luZG93LlB1YlN1Yi5wdWJsaXNoKENPTlNULmV2ZW50cy50YXNrcy5ORVdfVEFTS19DUkVBVEVEKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGFsZXJ0IGNsb3NlXHJcbiAgICAkKCcuZm9ybS1zdWJtaXQtZmluaXNoLS1lcnJvciAuY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FsZXJ0IGNsb3NlJyk7XHJcbiAgICAgICAgLy8gJCgnI3YtcGlsbHMtcnVubmVkLXRhYicpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgLy8gd2luZG93LlB1YlN1Yi5wdWJsaXNoKENPTlNULmV2ZW50cy50YXNrcy5ORVdfVEFTS19DUkVBVEVEKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRVc2VyTmFtZShzdGF0ZSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2dldFRhc2tzRGF0YScsIHN0YXRlLnVzZXJuYW1lKTtcclxuICAgIHVzZXJuYW1lU2VsZWN0ZWQgPSBzdGF0ZS51c2VybmFtZTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RlcFJlZHVjZXIoc3RlcE51bWJlciwgc3RhdGUpIHtcclxuICAgIHN3aXRjaCAoc3RlcE51bWJlcikge1xyXG4gICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgc2V0VXNlck5hbWUoc3RhdGUpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzdGF0ZSwgc3RlcE51bWJlcik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZWZhdWx0Jywgc3RlcE51bWJlcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgaWYgKCQoJy5jaGF0LWJvdC1wYWdlJykubGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3Qgd2l6YXJkQ2ZnID0ge1xyXG4gICAgICAgICAgICBzdGVwUmVkdWNlcixcclxuICAgICAgICAgICAgb25TdWJtaXRIYW5kbGVyXHJcbiAgICAgICAgfTtcclxuICAgICAgICB3aXphcmRGb3JtLmluaXQod2l6YXJkQ2ZnKTtcclxuICAgICAgICBpbml0Q2hhdE1zZygpO1xyXG4gICAgICAgIGNoYXRCb3RTdGF0dXMuaW5pdCgpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3MvY2hhdC1ib3QtYmxvY2svY2hhdC1ib3QtYmxvY2suanMiLCJpbXBvcnQge0NPTlNUfSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29uc3RzJztcclxuaW1wb3J0IHtnZXRUYXNrc0RhdGF9IGZyb20gJy4uL2ZvbGxvdy9mb2xsb3ctc3RhdHVzJztcclxuXHJcbi8qXHJcbmZ1bmN0aW9uIGZpbGxMaXN0TWV0YSgkd3JhcHBlciwgZGF0YSkge1xyXG4gICAgJHdyYXBwZXIuZW1wdHkoKS5hZGRDbGFzcygnYm9yZGVyLWxpZ2h0LWNvbG9yJyk7XHJcbiAgICAkKGA8ZGl2IGNsYXNzPVwiXCI+JHtKU09OLnN0cmluZ2lmeShkYXRhKX08L2Rpdj5gKS5hcHBlbmRUbygkd3JhcHBlcik7XHJcbiAgICAvLyBmb3IgKGNvbnN0IHR5cGUgaW4gZGF0YVsnc3RydWN0dXJlJ10pIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdzdHJ1Y3R1cmU6ICcgKyBpdGVtKTtcclxuICAgIC8vICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHN0cnVjdHVyZU9iaiwgdHlwZSkpIHtcclxuICAgIC8vICAgICAgICAgJChgPG9wdGlvbiBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBweS0yXCIgJHsodHlwZSAhPT0gJ0ZPTExPV0lORycpID8gJ2Rpc2FibGVkPVwiZGlzYWJsZWRcIicgOiAnJ31cclxuICAgIC8vICAgICAgICAgICAgIHZhbHVlID0gXCIke0pTT04uc3RyaW5naWZ5KHt0eXBlLCBzdWJ0eXBlOiBzdHJ1Y3R1cmVPYmpbdHlwZV19KX1cIj5cclxuICAgIC8vICAgICAgICAgICAgICR7dHlwZX1cclxuICAgIC8vICAgICAgICAgPC9vcHRpb24+YCkuYXBwZW5kVG8oJCgnI3Rhc2stdHlwZXMnKSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG59XHJcbiovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIGlmICgkKCcuY2hhdC1ib3QtcGFnZScpLmxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IHBhdGggPSB7XHJcbiAgICAgICAgICAgIHR5cGU6IENPTlNULnVybC50bVR5cGVzLmNoYXRCb3RULFxyXG4gICAgICAgICAgICBzdWJUeXBlOiBDT05TVC51cmwudG1UeXBlcy5jaGF0Qm90U3ViVFswXVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3Qgd3JhcHBlcnMgPSB7XHJcbiAgICAgICAgICAgICRydW5zOiAkKCcuYm90LXRhc2tzLXJ1bnMnKSxcclxuICAgICAgICAgICAgJHN0b3BwZWQ6ICQoJy5ib3QtdGFza3Mtc3RvcHBlZCcpXHJcbiAgICAgICAgfTtcclxuICAgICAgICBnZXRUYXNrc0RhdGEod3JhcHBlcnMsIHBhdGgpO1xyXG4gICAgICAgIC8vIFVzZXJUYXNrTWFuYWdlci5nZXRNZXRhZGF0YShwYXRoKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAvLyAgICAgaWYgKHJlc3VsdC5zdGF0dXMuc3RhdGUgPT09ICdvaycpIHtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhLm1ldGEpO1xyXG4gICAgICAgIC8vICAgICAgICAgZmlsbExpc3RMb2dzKCQoJy5ib3QtbG9nLXRhc2tzJyksIHJlc3VsdC5kYXRhLm1ldGEpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qXHJcbkdFVCBodHRwOi8vYXBpLmx1eGdyYW0ucnUvdjEvaW5zdGFncmFtLXRhc2stbWFuYWdlci9sb2dzL3R5cGUve3R5cGV9L3N1YnR5cGUve3N1YnR5cGV9L2FjY291bnQve3VzZXJuYW1lfVxyXG7QndC10L7QsdGP0LfQsNGC0LXQu9GM0L3Ri9C5INC/0LDRgNCw0LzQtdGC0YAg4oCccGFnZeKAnVxyXG4gKi9cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9jaGF0LWJvdC1ibG9jay9jaGF0LWJvdC1zdGF0dXMuanMiLCIvKiBlc2xpbnQtZGlzYWJsZSBzb3J0LXZhcnMgKi9cclxuLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3VzZXInO1xyXG5pbXBvcnQge0NPTlNUfSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29uc3RzJztcclxuaW1wb3J0IGNvb2tpZVN0b3JhZ2UgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2Nvb2tpZSc7XHJcblxyXG5jb25zdCBwYXJzZVF1ZXJ5U3RyaW5nID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgY29uc3Qgc3RyID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcclxuICAgIGNvbnN0IG9ialVSTCA9IHt9O1xyXG5cclxuICAgIHN0ci5yZXBsYWNlKFxyXG4gICAgICBuZXcgUmVnRXhwKCcoW14/PSZdKykoPShbXiZdKikpPycsICdnJyksXHJcbiAgICAgICAgZnVuY3Rpb24oJDAsICQxLCAkMikge1xyXG4gICAgICAgICAgICBvYmpVUkxbJDFdID0gJDI7XHJcbiAgICAgICAgfVxyXG4gICk7XHJcbiAgICByZXR1cm4gb2JqVVJMO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpcm1hdGlvbldpdGhSZWRpcmVjdCgpIHtcclxuICAgIGNvbnN0IHVzZXIgPSBVc2VyO1xyXG4gICAgY29uc3QgcGFyYW1zID0gcGFyc2VRdWVyeVN0cmluZygpO1xyXG4gICAgLy8gRXhhbXBsZSBob3cgdG8gdXNlIGl0OlxyXG5cclxuICAgIGNvbnN0IHNlbmRDb25maXJtID0gZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICAgICAgdXNlci5jb25maXJtKHRva2VuKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgJiYgcmVzdWx0LnN0YXR1cy5zdGF0ZSA9PT0gJ29rJykge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHNhdmUgdGhlIGl0ZW1cclxuICAgICAgICAgICAgICAgIGNvb2tpZVN0b3JhZ2Uuc2V0KENPTlNULmNvb2tpZVN0b3JhZ2UuZW1haWxDb25maXJtZWQsICdjb25maXJtZWQnKTtcclxuICAgICAgICAgICAgICAgIGNvb2tpZVN0b3JhZ2Uuc2V0KENPTlNULmNvb2tpZVN0b3JhZ2UudG9rZW4sIHJlc3VsdC5kYXRhLnRva2VuKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24gPSBjb25maXJtLXJlZ2lzdHJhdGlvbi5odG1sP3Rva2VuPSdmcm9tIHNlcnZlcic7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gcmV0cmlldmUgdGhlIG9iamVjdCBpbiBhIHN0cmluZyBmb3JtXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXN0b21lcnNEYXRhU3RyaW5nID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnY3VzdG9tZXJzRGF0YScpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VzdG9tZXJzRGF0YVN0cmluZyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVxdWVzdCBzdWNjZWVkZWQgd2l0aCBKU09OIHJlc3BvbnNlJywgcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICQoJy5jb25maXJtLXJlZ2lzdHJhdGlvbicpLmFwcGVuZChgPHA+Y29uZmlybWF0aW9uIHN0YXR1czogJHtyZXN1bHQuc3RhdHVzLnN0YXRlfTwvcD5gKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICcuL3Byb2ZpbGUuaHRtbCc7XHJcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZWRpcmVjdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkb3Qtbm90YXRpb25cclxuICAgICAgICBjb25zdCB0b2tlbiA9IHBhcmFtc1sndG9rZW4nXTtcclxuXHJcbiAgICAgICAgaWYgKCFsb2NhdGlvbi5wYXRobmFtZS5pbmRleE9mKCdjb25maXJtLXJlZ2lzdHJhdGlvbicpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZW5kIHJlcSB0byAnLCB0b2tlbik7XHJcbiAgICAgICAgICAgIHNlbmRDb25maXJtKHRva2VuKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAgICAgcmVkaXJlY3QoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGluaXRcclxuICAgIH07XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9jb25maXJtLXJlZy9jb25maXJtLXJlZy5qcyIsImltcG9ydCAqIGFzIGZvbGxvd1N0YXR1cyBmcm9tICcuL2ZvbGxvdy1zdGF0dXMnO1xyXG5pbXBvcnQge0NPTlNUfSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29uc3RzJztcclxuaW1wb3J0IFVzZXJUYXNrTWFuYWdlciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvYXBpLXRhc2stbWFuYWdlcic7XHJcbmltcG9ydCAnYnJ1dHVzaW4tanNvbi1mb3Jtcyc7XHJcblxyXG5jb25zdCBzdGF0ZSA9IHtcclxuICAgIHVzZXJuYW1lOiAnJyxcclxuICAgIHVzZXJfZGVmYXVsdF9jb25maWc6IHtcclxuICAgICAgICB0YXNrX21vZGU6ICdTQUZFJ1xyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gZmlsbExpc3RNZXRhKCRsaXN0LCBkYXRhQXJyYXkpIHtcclxuICAgIGNvbnN0IGl0ZW1zID0gZGF0YUFycmF5O1xyXG4gICAgLy8gY29uc3QgZGVmYXVsdEF2YXRhclNyYyA9ICdodHRwczovL2kuaW1ndXIuY29tL2pOTlQ0TEUucG5nJztcclxuICAgICRsaXN0LmVtcHR5KCkuYWRkQ2xhc3MoJ2JvcmRlci1saWdodC1jb2xvcicpO1xyXG4gICAgJCgnPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIHB5LTJcIj48aDM+VXNlclRhc2tNYW5hZ2VyPC9oMz48L2xpPicpLmFwcGVuZFRvKCRsaXN0KTtcclxuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAvLyBjb25zdCBpbmZvID0gaXRlbS5pbmZvO1xyXG4gICAgICAgIC8vIGNvbnN0IGNoZWNrcG9pbnQgPSBpdGVtLmNoZWNrcG9pbnQgfHwgaXRlbTtcclxuICAgICAgICAkKGA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gcHktMlwiIGRhdGEtdXNlcm5hbWU9XCIke2l0ZW0udHlwZX1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1ib2R5IGQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgdGFzay10eXBlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7KGl0ZW0udGFza19pZCkgPyBgPHAgY2xhc3M9XCJtdC0wIG1iLTEgbmFtZVwiPiR7aXRlbS50YXNrX2lkfTwvcD5gIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB0YXNrLXN1YnR5cGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHsoaXRlbS5zdWJ0eXBlKSA/IGA8cCBjbGFzcz1cIm10LTAgbWItMSBuYW1lXCI+JHtpdGVtLnN1YnR5cGV9PC9wPmAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHRhc2stcHJvZ3Jlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHsoaXRlbS5zdGF0dXMuc3RhdGUgPT09ICdTVE9QUEVEJykgPyBgPHAgY2xhc3M9XCJtdC0wIG1iLTEgbmFtZVwiPtCe0YHRgtCw0L3QvtCy0LvQtdC90L4gLSAke2l0ZW0uc3RhdHVzLnJlYXNvbn08L3A+YCA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwiY29sIHRhc2stcHJvZ3Jlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHsoaXRlbS5wcm9ncmVzcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYDxwIGNsYXNzPVwibXQtMCBtYi0xIG5hbWVcIj7QmtC+0LvQuNGH0LXRgdGC0LLQviAtICR7aXRlbS5wcm9ncmVzcy5jb3VudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtdC0wIG1iLTEgbmFtZVwiPtCf0YDQvtGG0LXQvdGCIC0gJHtpdGVtLnByb2dyZXNzLnBlcmNlbnR9PC9wPmAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4tLT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPmApLmFwcGVuZFRvKCRsaXN0KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKlxyXG5mdW5jdGlvbiBmaWxsTGlzdFR5cGVzKCR3cmFwcGVyLCBkYXRhKSB7XHJcbiAgICBjb25zdCBzdHJ1Y3R1cmVPYmogPSBkYXRhWydzdHJ1Y3R1cmUnXTtcclxuXHJcbiAgICAkd3JhcHBlci5lbXB0eSgpLmFkZENsYXNzKCdib3JkZXItbGlnaHQtY29sb3InKTtcclxuICAgICQoJzxkaXYgY2xhc3M9XCJcIj7QotC40L8g0LfQsNC00LDQvdC40Y88L2Rpdj48c2VsZWN0IG5hbWU9XCJ0YXNrLXR5cGVcIiBpZD1cInRhc2stdHlwZXNcIj48L3NlbGVjdD4nKS5hcHBlbmRUbygkd3JhcHBlcik7XHJcbiAgICBmb3IgKGNvbnN0IHR5cGUgaW4gc3RydWN0dXJlT2JqKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3N0cnVjdHVyZTogJyArIGl0ZW0pO1xyXG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc3RydWN0dXJlT2JqLCB0eXBlKSkge1xyXG4gICAgICAgICAgICAkKGA8b3B0aW9uIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIHB5LTJcIiAkeyh0eXBlICE9PSAnRk9MTE9XSU5HJykgPyAnZGlzYWJsZWQ9XCJkaXNhYmxlZFwiJyA6ICcnfVxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBcIiR7SlNPTi5zdHJpbmdpZnkoe3R5cGUsIHN1YnR5cGU6IHN0cnVjdHVyZU9ialt0eXBlXX0pfVwiPlxyXG4gICAgICAgICAgICAgICAgJHt0eXBlfVxyXG4gICAgICAgICAgICA8L29wdGlvbj5gKS5hcHBlbmRUbygkKCcjdGFzay10eXBlcycpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuKi9cclxuXHJcbmZ1bmN0aW9uIGdldFRhc2tzRGF0YShwYXRoKSB7XHJcbiAgICBVc2VyVGFza01hbmFnZXIuZ2V0TWV0YWRhdGEocGF0aCkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMuc3RhdGUgPT09ICdvaycpIHtcclxuICAgICAgICAgICAgZmlsbExpc3RNZXRhKCQoJy5mb2xsb3ctdGFza3MtbGlzdCcpLCByZXN1bHQuZGF0YS5tZXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RGF0YVN0ZXAyKHVzZXJzTmFtZSkge1xyXG4gICAgY29uc29sZS5sb2codXNlcnNOYW1lKTtcclxuICAgIGNvbnN0IHBhdGggPSB7XHJcbiAgICAgICAgdHlwZTogQ09OU1QudXJsLnRtVHlwZXMuZm9sbG93aW5nVCxcclxuICAgICAgICBzdWJUeXBlOiBDT05TVC51cmwudG1UeXBlcy5mb2xsb3dpbmdTdWJUWzBdXHJcbiAgICB9O1xyXG4gICAgZ2V0VGFza3NEYXRhKHBhdGgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXREYXRhU3RlcDMoKSB7XHJcbiAgICBjb25zdCB1c2VycyA9ICQoJyNmb2xsb3dlcnMnKS52YWwoKVxyXG4gICAgICAgIC50cmltKClcclxuICAgICAgICAucmVwbGFjZSgvIC9nLCAnJylcclxuICAgICAgICAuc3BsaXQoJywnKVxyXG4gICAgICAgIC5maWx0ZXIoaSA9PiBpLmxlbmd0aCA+IDApO1xyXG5cclxuICAgIHN0YXRlWyd1c2VyX2N1c3RvbV9jb25maWcnXSA9IHtcclxuICAgICAgICB1c2Vyc1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGZpbGxTcGVlZExpc3QgPSBmdW5jdGlvbiAoJHdyYXBwZXIsIGRhdGEpIHtcclxuICAgICAgICBjb25zdCB0YXNrTW9kZXMgPSBkYXRhLmNmZyAmJiBkYXRhLmNmZy50YXNrX21vZGVzO1xyXG4gICAgICAgIGNvbnN0IHJhZGlvQnRuUmVkdWNlciA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnQUdHUkVTU0lWRSc6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCIke2l0ZW19XCIgbmFtZT1cImN1c3RvbVJhZGlvXCIgdmFsdWU9XCJzYWZlXCIgY2xhc3M9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImN1c3RvbS1jb250cm9sLWxhYmVsXCIgZm9yPVwiJHtpdGVtfVwiPjxzdHJvbmc+0JDQs9GA0LXRgdGB0LjQstC90YvQuTo8L3N0cm9uZz4gMzAg0L/QvtC00L/QuNGB0L7QuiDQsiDRh9Cw0YE8L2xhYmVsPmA7XHJcbiAgICAgICAgICAgICAgICAvLyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ01JRERMRSc6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwiJHtpdGVtfVwiIG5hbWU9XCJjdXN0b21SYWRpb1wiIHZhbHVlPVwic2FmZVwiIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjdXN0b20tY29udHJvbC1sYWJlbFwiIGZvcj1cIiR7aXRlbX1cIj48c3Ryb25nPtCh0YDQtdC00L3QuNC5Ojwvc3Ryb25nPiAxOCDQv9C+0LTQv9C40YHQvtC6INCyINGH0LDRgTwvbGFiZWw+YCk7XHJcbiAgICAgICAgICAgICAgICAvLyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ1NBRkUnOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwiJHtpdGVtfVwiIG5hbWU9XCJjdXN0b21SYWRpb1wiIHZhbHVlPVwic2FmZVwiIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIiBjaGVja2VkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImN1c3RvbS1jb250cm9sLWxhYmVsXCIgZm9yPVwiJHtpdGVtfVwiPjxzdHJvbmc+0JHQtdC30L7Qv9Cw0YHQvdGL0Lk6PC9zdHJvbmc+IDkg0L/QvtC00L/QuNGB0L7QuiDQsiDRh9Cw0YE8L2xhYmVsPmA7XHJcbiAgICAgICAgICAgICAgICAvLyBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RlZmF1bHQnLCBpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2RyYXcgc3BlZWQgcmFkaW9CdG4nKTtcclxuICAgICAgICAkd3JhcHBlci5lbXB0eSgpO1xyXG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBpbiB0YXNrTW9kZXMpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3N0cnVjdHVyZTogJyArIGl0ZW0pO1xyXG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhc2tNb2RlcywgaXRlbSkpIHtcclxuICAgICAgICAgICAgICAgICQoYDxkaXYgY2xhc3M9XCJjdXN0b20tY29udHJvbCBjdXN0b20tcmFkaW9cIj5cclxuICAgICAgICAgICAgICAgICR7cmFkaW9CdG5SZWR1Y2VyKGl0ZW0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5gKS5hcHBlbmRUbygkd3JhcHBlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGRyYXcgY3JpdGVyaWFcclxuICAgIFVzZXJUYXNrTWFuYWdlci5nZXREZWZhdWx0Q29uZmlncygpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdnZXREZWZhdWx0Q29uZmlncycpO1xyXG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzLnN0YXRlID09PSAnb2snKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIGZpbGxTcGVlZExpc3QoJCgnLmpzX2ZvbGxvdy1zcGVlZCcpLCByZXN1bHQuZGF0YS5mb3VuZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0ZXBSZWR1Y2VyKHN0ZXBOdW1iZXIpIHtcclxuICAgIHN3aXRjaCAoc3RlcE51bWJlcikge1xyXG4gICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgZ2V0RGF0YVN0ZXAyKHN0YXRlLnVzZXJuYW1lKTsgLy8gWy4uLm5ldyBTZXQoc3RhdGUudXNlcm5hbWUpXVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzdGF0ZSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgZ2V0RGF0YVN0ZXAzKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZWZhdWx0Jywgc3RlcE51bWJlcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbml0IGhlYWRlclxyXG4gKi9cclxuZnVuY3Rpb24gaW5pdFN0ZXBzKGZvcm1TZWxlY3Rvcikge1xyXG4gICAgY29uc3QgJGZvcm0gPSAkKGZvcm1TZWxlY3Rvcik7XHJcbiAgICAkKCcuanNfcHJvZmlsZS11c2VyLWZvbGxvdz4uY29udGFpbmVyJykucmVtb3ZlQ2xhc3MoJ2NvbnRhaW5lcicpO1xyXG5cclxuICAgICRmb3JtLmZpbmQoJ2ZpZWxkc2V0OmZpcnN0LWNoaWxkJykuZmFkZUluKCdzbG93Jyk7XHJcblxyXG4gICAgJGZvcm0uZmluZCgnaW5wdXRbdHlwZT1cInRleHRcIl0nKS5vbignZm9jdXMnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaW5wdXQtZXJyb3InKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIG5leHQgc3RlcFxyXG4gICAgJGZvcm0uZmluZCgnLmJ0bi1uZXh0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IHBhcmVudF9maWVsZHNldCA9ICQodGhpcykucGFyZW50cygnZmllbGRzZXQnKTtcclxuICAgICAgICBsZXQgbmV4dF9zdGVwID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCByYWRpb0J0bkFjdGl2ZSA9IHBhcmVudF9maWVsZHNldC5maW5kKCdpbnB1dFtuYW1lPVwidXNlckFjY291bnRSYWRpb1wiXTpjaGVja2VkJyk7XHJcblxyXG4gICAgICAgIGlmIChyYWRpb0J0bkFjdGl2ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJuYW1lID0gcmFkaW9CdG5BY3RpdmUucGFyZW50cygnbGknKS5kYXRhKCd1c2VybmFtZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdGVwUmVkdWNlcihwYXJlbnRfZmllbGRzZXQuaW5kZXgoKSwgc3RhdGUpO1xyXG5cclxuICAgICAgICBwYXJlbnRfZmllbGRzZXQuZmluZCgnaW5wdXRbdHlwZT1cInRleHRcIl0saW5wdXRbdHlwZT1cImVtYWlsXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLnZhbCgpID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaW5wdXQtZXJyb3InKTtcclxuICAgICAgICAgICAgICAgIG5leHRfc3RlcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaW5wdXQtZXJyb3InKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAobmV4dF9zdGVwKSB7XHJcbiAgICAgICAgICAgIHBhcmVudF9maWVsZHNldC5mYWRlT3V0KDQwMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5uZXh0KCkuZmFkZUluKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBwcmV2aW91cyBzdGVwXHJcbiAgICAkZm9ybS5maW5kKCcuYnRuLXByZXZpb3VzJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIHN0YXRlLnVzZXJuYW1lID0gWy4uLm5ldyBTZXQoc3RhdGUudXNlcm5hbWUpXTtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudHMoJ2ZpZWxkc2V0JykuZmFkZU91dCg0MDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5wcmV2KCkuZmFkZUluKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBzcGVlZCByYWRpby1idG4gZ3JvdXBcclxuICAgICQoJy5qc19mb2xsb3ctc3BlZWQgaW5wdXRbdHlwZT1yYWRpb10nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSAkKHRoaXMpLmF0dHIoJ3ZhbHVlJyk7XHJcbiAgICAgICAgc3RhdGUudXNlcl9kZWZhdWx0X2NvbmZpZyA9IHtcclxuICAgICAgICAgICAgdGFza19tb2RlOiB2YWx1ZS50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHN1Ym1pdFxyXG4gICAgJGZvcm0ub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgY29uc3QgZ2VuZGVyVmFsID0gJCh0aGlzKS5maW5kKCcuc2VsZWN0LWdlbmRlciBvcHRpb246c2VsZWN0ZWQnKS52YWwoKTtcclxuICAgICAgICBzdGF0ZS51c2VyX2RlZmF1bHRfY29uZmlnID0ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZS51c2VyX2RlZmF1bHRfY29uZmlnLFxyXG4gICAgICAgICAgICBjcml0ZXJpYToge1xyXG4gICAgICAgICAgICAgICAgZ2VuZGVyOiBnZW5kZXJWYWwudG9VcHBlckNhc2UoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBsaW1pdCA9IGRvY3VtZW50LmZvcm1zWydmb2xsb3ctZm9ybSddWydsaW1pdCddO1xyXG4gICAgICAgIGNvbnN0IGhhdmVfcG9zdHMgPSB7XHJcbiAgICAgICAgICAgIGZyb206IGRvY3VtZW50LmZvcm1zWydmb2xsb3ctZm9ybSddWydoYXZlX3Bvc3RzX2Zyb20nXS52YWx1ZSxcclxuICAgICAgICAgICAgdG86IGRvY3VtZW50LmZvcm1zWydmb2xsb3ctZm9ybSddWydoYXZlX3Bvc3RzX3RvJ10udmFsdWVcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGhhdmVfZm9sbG93ZXJzID0ge1xyXG4gICAgICAgICAgICBmcm9tOiBkb2N1bWVudC5mb3Jtc1snZm9sbG93LWZvcm0nXVsnaGF2ZV9mb2xsb3dlcnNfZnJvbSddLnZhbHVlLFxyXG4gICAgICAgICAgICB0bzogZG9jdW1lbnQuZm9ybXNbJ2ZvbGxvdy1mb3JtJ11bJ2hhdmVfZm9sbG93ZXJzX3RvJ10udmFsdWVcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGhhdmVfZm9sbG93aW5ncyA9IHtcclxuICAgICAgICAgICAgZnJvbTogZG9jdW1lbnQuZm9ybXNbJ2ZvbGxvdy1mb3JtJ11bJ2hhdmVfZm9sbG93aW5nc19mcm9tJ10udmFsdWUsXHJcbiAgICAgICAgICAgIHRvOiBkb2N1bWVudC5mb3Jtc1snZm9sbG93LWZvcm0nXVsnaGF2ZV9mb2xsb3dpbmdzX3RvJ10udmFsdWVcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAobGltaXQudmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGxpbWl0LmZvY3VzKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RhdGVbJ3VzZXJfZGVmYXVsdF9jb25maWcnXS5jcml0ZXJpYSA9IHtcclxuICAgICAgICAgICAgbGltaXQ6IGxpbWl0LnZhbHVlLFxyXG4gICAgICAgICAgICAndW5mb2xsb3dfdGhlbic6ICEhJCgnI3VuZm9sbG93X3RoZW46Y2hlY2tlZCcpLmxlbmd0aCxcclxuICAgICAgICAgICAgJ2ZvbGxvd19vbl9jbG9zZWRfcHJvZmlsZXMnOiAhISQoJyNmb2xsb3dfb25fY2xvc2VkX3Byb2ZpbGVzOmNoZWNrZWQnKS5sZW5ndGgsXHJcbiAgICAgICAgICAgIGhhdmVfcG9zdHMsXHJcbiAgICAgICAgICAgIGhhdmVfZm9sbG93ZXJzLFxyXG4gICAgICAgICAgICBoYXZlX2ZvbGxvd2luZ3NcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAkKHRoaXMpLmZpbmQoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdLGlucHV0W3R5cGU9XCJudW1iZXJcIl0saW5wdXRbdHlwZT1cImVtYWlsXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLnZhbCgpID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaW5wdXQtZXJyb3InKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2lucHV0LWVycm9yJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc3RhdGUudHlwZSA9IENPTlNULnVybC50bVR5cGVzLmZvbGxvd2luZ1Q7IC8vICdGT0xMT1dJTkcnO1xyXG4gICAgICAgIHN0YXRlLnN1YnR5cGUgPSBDT05TVC51cmwudG1UeXBlcy5mb2xsb3dpbmdTdWJUWzBdOyAvLyAnRk9MTE9XSU5HX0xJU1QnO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdtYWtlIHJlcXVlc3QqKiAgcG9zdDogU3RhcnRGb2xsb3dpbmdMaXN0Jywgc3RhdGUpO1xyXG5cclxuICAgICAgICBVc2VyVGFza01hbmFnZXIucG9zdFN0YXJ0Rm9sbG93aW5nTGlzdChzdGF0ZSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzLnN0YXRlID09PSAnb2snKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcclxuICAgICAgICAgICAgICAgICQoJy5mb3JtLXN1Ym1pdC1maW5pc2gnKS5hZGRDbGFzcygnZC1ibG9jaycpXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbmQoJy5hbGVydCcpLmFwcGVuZChgPHA+dGFza19pZDogJHtyZXN1bHQuZGF0YS50YXNrX2lkfTwvcD5gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGFsZXJ0IGNsb3NlXHJcbiAgICAkKCcuZm9ybS1zdWJtaXQtZmluaXNoIC5jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0tc3VibWl0LWZpbmlzaCcpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJyk7XHJcbiAgICAgICAgJCgnI3YtcGlsbHMtcnVubmVkLXRhYicpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgd2luZG93LlB1YlN1Yi5wdWJsaXNoKENPTlNULmV2ZW50cy50YXNrcy5ORVdfVEFTS19DUkVBVEVEKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKlxyXG5mdW5jdGlvbiBmaXhTdGVwSW5kaWNhdG9yKG4pIHtcclxuICAgIC8vIFRoaXMgZnVuY3Rpb24gcmVtb3ZlcyB0aGUgXCJhY3RpdmVcIiBjbGFzcyBvZiBhbGwgc3RlcHMuLi5cclxuICAgIHZhciBpLCB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInN0ZXBcIik7XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHhbaV0uY2xhc3NOYW1lID0geFtpXS5jbGFzc05hbWUucmVwbGFjZShcIiBhY3RpdmVcIiwgXCJcIik7XHJcbiAgICB9XHJcbiAgICAvLy4uLiBhbmQgYWRkcyB0aGUgXCJhY3RpdmVcIiBjbGFzcyBvbiB0aGUgY3VycmVudCBzdGVwOlxyXG4gICAgeFtuXS5jbGFzc05hbWUgKz0gXCIgYWN0aXZlXCI7XHJcbn0qL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1vZGlmeUFjY0xpc3QoKSB7XHJcbiAgICAvLyBjb25zdCByYWRpb0J0biA9IChpZHgpID0+IGA8ZGl2IGNsYXNzPVwiY29sIGN1c3RvbS1jb250cm9sIGN1c3RvbS1yYWRpbyBqc191c2VyLXJhZGlvXCI+XHJcbiAgICAvLyAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwidXNlckFjY291bnRSYWRpb1wiIGlkPVwiY3VzdG9tUmFkaW8tJHtpZHh9XCIgY2xhc3M9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiIHZhbHVlPVwiXCI+XHJcbiAgICAvLyAgICAgICAgIDxsYWJlbCBjbGFzcz1cImN1c3RvbS1jb250cm9sLWxhYmVsXCIgZm9yPVwiY3VzdG9tUmFkaW8tJHtpZHh9XCI+0J/QvtC00L/QuNGB0LDRgtGM0YHRjzwvbGFiZWw+XHJcbiAgICAvLyAgICAgPC9kaXY+YDtcclxuICAgIGNvbnN0IHJhZGlvQnRuQXBwZW5kID0gKGlkeCkgPT4gYDxkaXYgY2xhc3M9XCJcIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ1c2VyQWNjb3VudFJhZGlvXCIgaWQ9XCJjdXN0b21SYWRpby0ke2lkeH1cIiBjbGFzcz1cImN1c3RvbS1jb250cm9sLWlucHV0IGQtbm9uZVwiIHZhbHVlPVwiXCI+XHJcbiAgICAgICAgPC9kaXY+YDtcclxuICAgIGNvbnN0IHJhZGlvQnRuV3JhcCA9IChpZHgpID0+IGA8bGFiZWwgY2xhc3M9XCJhY2NvdW50cy1saXN0LS1sYWJlbC13cmFwcGVyIGNvbCBtYi0wIG1lZGlhIHB5LTNcIiBmb3I9XCJjdXN0b21SYWRpby0ke2lkeH1cIj48L2xhYmVsPmA7XHJcbiAgICBjb25zdCAkYWNjb3VudHNMaXN0ID0gJCgnLmFjY291bnRzLWxpc3QnKTtcclxuICAgIGNvbnN0ICRsaSA9ICRhY2NvdW50c0xpc3QuZmluZCgnbGkubWVkaWEnKTtcclxuICAgICRsaS5hZGRDbGFzcygnanNfdXNlci1yYWRpbycpLnJlbW92ZUNsYXNzKCdweS0zIG1lZGlhJyk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAkbGkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvLyAkKCRsaVtpXSkuYXBwZW5kKHJhZGlvQnRuKGkpKTtcclxuICAgICAgICAkKCRsaVtpXSkud3JhcElubmVyKHJhZGlvQnRuV3JhcChpKSkuYXBwZW5kKHJhZGlvQnRuQXBwZW5kKGkpKTtcclxuICAgIH1cclxuICAgIC8vIFVzZXJUYXNrTWFuYWdlci5nZXRUYXNrVHlwZXMoKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgIC8vICAgICBpZiAocmVzdWx0LnN0YXR1cy5zdGF0ZSA9PT0gJ29rJykge1xyXG4gICAgLy8gICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgLy8gICAgICAgICBmaWxsTGlzdFR5cGVzKCQoJy5qc190YXNrLXR5cGVzJyksIHJlc3VsdC5kYXRhKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICAkKCcuanNfdXNlci1yYWRpbycpLm9uKCdjbGljaycsICdpbnB1dFt0eXBlPXJhZGlvXScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgY29uc3QgJHBhcmVudEZpZWxkc2V0ID0gJCh0aGlzKS5wYXJlbnRzKCdmaWVsZHNldCcpO1xyXG4gICAgICAgICQoJ2xpLmFjdGl2ZScsICRwYXJlbnRGaWVsZHNldCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnbGknKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLmJ0bi1uZXh0JywgJHBhcmVudEZpZWxkc2V0KS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5jaGVja2JveC1jZWxsJykub24oJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3ZhbGlkYXRlJyk7XHJcbiAgICAgICAgLy8gdXBkYXRlU3RhdHVzKCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyogd29ya2luZyBkZW1vIDogaHR0cDovL2JydXR1c2luLm9yZy9qc29uLWZvcm1zLyMxM1xyXG5mdW5jdGlvbiBmb3JtRnJvbUpzb24oKSB7XHJcbiAgICBjb25zdCBzY2hlbWEgPSB7XHJcbiAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXHJcbiAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgXCJwcm9wMVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnRlZ2VyXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJwcm9wMlwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnRlZ2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInJlcXVpcmVkXCI6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJwcm9wM1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnRlZ2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInJlcXVpcmVkXCI6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJjb21wb3NpdGUxXCI6IHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5lc3RlZDFcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXF1aXJlZFwiOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5lc3RlZDJcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXF1aXJlZFwiOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwicmVxdWlyZWRcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmVzdGVkMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmVzdGVkMlwiXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiY29tcG9zaXRlMlwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcclxuICAgICAgICAgICAgICAgIFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuZXN0ZWQxXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuZXN0ZWQyXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcInJlcXVpcmVkXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICBcIm5lc3RlZDFcIixcclxuICAgICAgICAgICAgICAgICAgICBcIm5lc3RlZDJcIlxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInJlcXVpcmVkXCI6IFtcclxuICAgICAgICAgICAgXCJwcm9wMVwiLFxyXG4gICAgICAgICAgICBcInByb3AyXCIsXHJcbiAgICAgICAgICAgIFwiY29tcG9zaXRlMVwiXHJcbiAgICAgICAgXVxyXG4gICAgfTtcclxuICAgIGNvbnN0IEJydXR1c2luRm9ybXMgPSB3aW5kb3cuYnJ1dHVzaW5bJ2pzb24tZm9ybXMnXTtcclxuICAgIGNvbnN0IGJmID0gQnJ1dHVzaW5Gb3Jtcy5jcmVhdGUoc2NoZW1hKTtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtMScpO1xyXG4gICAgY29uc29sZS5sb2cod2luZG93LmJydXR1c2luKTtcclxuICAgIGJmLnJlbmRlcihjb250YWluZXIsIGRhdGEpO1xyXG59Ki9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgaWYgKCQoJy5mb2xsb3cnKS5sZW5ndGgpIHtcclxuICAgICAgICBmb2xsb3dTdGF0dXMuaW5pdCgpO1xyXG4gICAgICAgIGluaXRTdGVwcygnLmZvbGxvdy1mb3JtJyk7XHJcbiAgICAgICAgd2luZG93LlB1YlN1Yi5zdWJzY3JpYmUoQ09OU1QuZXZlbnRzLmluc3RhZ3JhbUFjY291bnMuSU5TVEFHUkFNX0FDQ09VTlNfUkVOREVSRUQsIChldmVudE5hbWUsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgbW9kaWZ5QWNjTGlzdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3MvZm9sbG93L2ZvbGxvdy5qcyIsIi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG4vLyBjb25zdCBoYW1idXJnZXJCdXR0b25DbHMgPSAnI2FzaWRlX21vYmlsZV9fYnV0dG9uJztcclxuLy8gY29uc3QgaGFtYnVyZ2VyTWVudUNscyA9ICcuYXNpZGUtYnVyZ2VyLW1lbnUnO1xyXG4vLyBjb25zdCBoYW1idXJnZXJNZW51T3BlbmVkQ2xhc3MgPSAnYnVyZ2VyLW1lbnUtLWNsb3NlZCc7XHJcbi8vIGNvbnN0IGhhbWJ1cmdlckJ1dHRvbkNsb3NlQ2xhc3MgPSAnYnVyZ2VyLW1lbnVfX2J1dHRvbi0tY2xvc2UnO1xyXG5jb25zdCBzZWxlY3RvcnNFbCA9IHtcclxuICAgIGxlZnRNZW51OiB7XHJcbiAgICAgICAgaGFtYnVyZ2VyQnV0dG9uQ2xzOiAnI2FzaWRlX21vYmlsZV9fYnV0dG9uJyxcclxuICAgICAgICBoYW1idXJnZXJNZW51Q2xzOiAnLmFzaWRlLWJ1cmdlci1tZW51JyxcclxuICAgICAgICBoYW1idXJnZXJNZW51T3BlbmVkQ2xhc3M6ICdidXJnZXItbWVudS0tY2xvc2VkJyxcclxuICAgICAgICBoYW1idXJnZXJCdXR0b25DbG9zZUNsYXNzOiAnYnVyZ2VyLW1lbnVfX2J1dHRvbi0tY2xvc2UnXHJcbiAgICB9LFxyXG4gICAgcmlnaHRNZW51OiB7XHJcbiAgICAgICAgaGFtYnVyZ2VyQnV0dG9uQ2xzOiAnI2hlYWRlcl9tb2JpbGVfdG9nZ2xlcicsXHJcbiAgICAgICAgaGFtYnVyZ2VyTWVudUNsczogJy5yLXNpZGUtYnVyZ2VyLW1lbnUnLFxyXG4gICAgICAgIGhhbWJ1cmdlck1lbnVPcGVuZWRDbGFzczogJ3Itc2lkZS1idXJnZXItbWVudS0tb3BlbicsXHJcbiAgICAgICAgaGFtYnVyZ2VyQnV0dG9uQ2xvc2VDbGFzczogJ2J1cmdlci1tZW51LXJpZ2h0X19idXR0b24tLWNsb3NlJ1xyXG4gICAgfSxcclxuICAgIHN1YkhlYWRlcjoge1xyXG4gICAgICAgIGhhbWJ1cmdlckJ1dHRvbkNsczogJyNoZWFkZXJfbW9iaWxlX3RvcGJhcl90b2dnbGVyJyxcclxuICAgICAgICBoYW1idXJnZXJNZW51Q2xzOiAnLnN1Yi1oZWFkZXInLFxyXG4gICAgICAgIGhhbWJ1cmdlck1lbnVPcGVuZWRDbGFzczogJ3N1Yi1oZWFkZXItLW9wZW4nLFxyXG4gICAgICAgIGhhbWJ1cmdlckJ1dHRvbkNsb3NlQ2xhc3M6ICdzdWItaGVhZGVyLWJ1dHRvbi0tY2xvc2UnXHJcbiAgICB9XHJcbn07XHJcblxyXG4vKipcclxuICogVG9nZ2xlIGhhbWJ1cmdlciBtZW51IHBvcG92ZXJcclxuICovXHJcbmZ1bmN0aW9uIHRvZ2dsZUhhbWJ1cmdlck1lbnUobWVudU5hbWUpIHtcclxuICAgIGNvbnN0IHtoYW1idXJnZXJNZW51Q2xzLCBoYW1idXJnZXJCdXR0b25DbHMsIGhhbWJ1cmdlckJ1dHRvbkNsb3NlQ2xhc3MsIGhhbWJ1cmdlck1lbnVPcGVuZWRDbGFzc30gPSBzZWxlY3RvcnNFbFttZW51TmFtZV07XHJcbiAgICAkKGhhbWJ1cmdlckJ1dHRvbkNscykudG9nZ2xlQ2xhc3MoaGFtYnVyZ2VyQnV0dG9uQ2xvc2VDbGFzcyk7XHJcbiAgICAkKGhhbWJ1cmdlck1lbnVDbHMpLnRvZ2dsZUNsYXNzKGhhbWJ1cmdlck1lbnVPcGVuZWRDbGFzcyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbml0IGhhbWJ1cmdlciBtZW51XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIGNvbnN0IGxlZnRNZW51ID0gJ2xlZnRNZW51JztcclxuICAgIGNvbnN0IHJpZ2h0TWVudSA9ICdyaWdodE1lbnUnO1xyXG4gICAgY29uc3Qgc3ViSGVhZGVyID0gJ3N1YkhlYWRlcic7XHJcblxyXG4gICAgJChzZWxlY3RvcnNFbFtsZWZ0TWVudV0uaGFtYnVyZ2VyQnV0dG9uQ2xzKS5vbignY2xpY2snLCB0b2dnbGVIYW1idXJnZXJNZW51LmJpbmQodGhpcywgbGVmdE1lbnUpKTtcclxuICAgICQoc2VsZWN0b3JzRWxbcmlnaHRNZW51XS5oYW1idXJnZXJCdXR0b25DbHMpLm9uKCdjbGljaycsIHRvZ2dsZUhhbWJ1cmdlck1lbnUuYmluZCh0aGlzLCByaWdodE1lbnUpKTtcclxuICAgICQoc2VsZWN0b3JzRWxbc3ViSGVhZGVyXS5oYW1idXJnZXJCdXR0b25DbHMpLm9uKCdjbGljaycsIHRvZ2dsZUhhbWJ1cmdlck1lbnUuYmluZCh0aGlzLCBzdWJIZWFkZXIpKTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL2hlYWRlci9idXJnZXItbWVudS9idXJnZXItbWVudS5qcyIsIi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy91c2VyJztcclxuaW1wb3J0IFB1YlN1YiBmcm9tICdwdWJzdWItanMnOyAvLyBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9wdWJzdWItanNcclxuaW1wb3J0IHtDT05TVH0gZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2NvbnN0cyc7XHJcblxyXG5jb25zdCBzZWxlY3RvckxvZ2luU3RhdGUgPSAnLmpzX21lc3NhZ2VfbG9nZ2VkLS10ZXh0JztcclxuY29uc3Qgc2VsZWN0b3JFbWFpbENvbmZpcm1TdGF0ZSA9ICcuanNfZW1haWwtY29uZmlybS0tdGV4dCc7XHJcbmNvbnN0IGNsb3NlQ2xhc3MgPSAnZC1ub25lJztcclxuY29uc3Qgb3BlbmVkQ2xhc3MgPSAnZC1ibG9jayc7XHJcblxyXG5mdW5jdGlvbiBlbWFpbE5vdENvbmZpcm1lZCgpIHtcclxuICAgIGNvbnN0ICRlbWFpbG5Nc2cgPSAkKHNlbGVjdG9yRW1haWxDb25maXJtU3RhdGUpO1xyXG4gICAgJGVtYWlsbk1zZy50ZXh0KCcqKmVtYWlsTm90Q29uZmlybWVkKiogRW1haWwg0L3QtSDQv9C+0LTRgtCy0LXRgNC20LTQtdC9LicpLmNzcygnY29sb3InLCAnbGlnaHRjb3JhbCcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbkxvZ2luU3Vic2NyaWJlKG1zZywgZGF0YSkge1xyXG4gICAgLy8gY29uc29sZS5sb2cobXNnLCBkYXRhKTtcclxuICAgICQoQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyTmF2TG9naW5CdG4pLmFkZENsYXNzKGNsb3NlQ2xhc3MpLnJlbW92ZUNsYXNzKG9wZW5lZENsYXNzKTtcclxuICAgICQoQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyUmVnQnRuKS5hZGRDbGFzcyhjbG9zZUNsYXNzKS5yZW1vdmVDbGFzcyhvcGVuZWRDbGFzcyk7XHJcbiAgICAkKENPTlNULnVpU2VsZWN0b3JzLmhlYWRlckxvZ2luQm94KS5hZGRDbGFzcyhjbG9zZUNsYXNzKS5yZW1vdmVDbGFzcyhvcGVuZWRDbGFzcyk7XHJcblxyXG4gICAgJCgnLm5hdi1saW5rLmpzX2xvZ091dCcpLmFkZENsYXNzKG9wZW5lZENsYXNzKS5yZW1vdmVDbGFzcyhjbG9zZUNsYXNzKTsgLy8gc2hvd1xyXG4gICAgY29uc3QgJGxvZ2luTXNnID0gJChzZWxlY3RvckxvZ2luU3RhdGUpO1xyXG4gICAgJGxvZ2luTXNnLnRleHQoJyoqb25Mb2dpblN1YnNjcmliZSoqINCy0Ysg0LfQsNC70L7Qs9C40L3QuNC70LjRgdGMINCyIEx1eGdyYW0g0YPRgdC/0LXRiNC90L4nKS5jc3MoJ2NvbG9yJywgJ2xpZ2h0Ymx1ZScpO1xyXG4gICAgY29uc3QgaXNFbWFpbENvbmZpcm1lZCA9IFVzZXIuaXNFbWFpbENvbmZpcm1lZCgpO1xyXG4gICAgaWYgKCFpc0VtYWlsQ29uZmlybWVkKSB7XHJcbiAgICAgICAgZW1haWxOb3RDb25maXJtZWQoKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0xvZ291dCgpIHtcclxuICAgIC8vIGNoZWNrIGlzIGxvZ2dlZFxyXG4gICAgY29uc3QgaXNMb2dnZWQgPSBVc2VyLmlzTG9nZ2VkSW4oKTtcclxuICAgIGNvbnN0IGlzRW1haWxDb25maXJtZWQgPSBVc2VyLmlzRW1haWxDb25maXJtZWQoKTtcclxuICAgIGlmICghaXNFbWFpbENvbmZpcm1lZCkge1xyXG4gICAgICAgIGVtYWlsTm90Q29uZmlybWVkKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNMb2dnZWQpIHtcclxuICAgICAgICAkKCcubmF2LWxpbmsuanNfbG9nT3V0JykucGFyZW50KCkuc2hvdygpO1xyXG4gICAgICAgICQoJy5qc19lbWFpbC1jb25maXJtLS10ZXh0JykudGV4dCgn0LLRiyDQt9Cw0LvQvtCz0LjQvdC40LvQuNGB0Ywg0YPRgdC/0LXRiNC90L4nKTtcclxuICAgICAgICBjb25zdCBvbGRVUkwgPSBkb2N1bWVudC5yZWZlcnJlcjtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhvbGRVUkwpO1xyXG4gICAgICAgIGlmIChvbGRVUkwuaW5jbHVkZXMoJ2NvbmZpcm0tcmVnaXN0cmF0aW9uJykpIHtcclxuICAgICAgICAgICAgJCgnLmpzX21lc3NhZ2VfbG9nZ2VkLS10ZXh0JykudGV4dCgn0LLRiyDQv9C+0LTRgtCy0LXRgNC00LjQu9C4INGA0LXQs9C40YHRgtGA0LDRhtC40Y4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb25Mb2dpblN1YnNjcmliZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKHNlbGVjdG9yTG9naW5TdGF0ZSkudGV4dCgn0J/RgNC40LLQtdGCINCw0L3QvtC90LjQvNC90YvQuSDQv9C+0LvRjNC30L7QstCw0YLQtdC70YwnKTtcclxuICAgICAgICAkKHNlbGVjdG9yRW1haWxDb25maXJtU3RhdGUpLmVtcHR5KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbml0IGhlYWRlclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRIZWFkZXIoKSB7XHJcbiAgIC8vIGNoZWNrIG90aGVyIGhhbmRsZXIgaW4gbG9naW4tZm9ybS5qc1xyXG4gICAgY29uc3QgJGxvZ2luQm94ID0gJChDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJMb2dpbkJveCk7XHJcbiAgICBjb25zdCAkcmVnaXN0ZXJCb3ggPSAkKENPTlNULnVpU2VsZWN0b3JzLmhlYWRlclJlZ0JveCk7XHJcblxyXG4gICAgUHViU3ViLnN1YnNjcmliZShDT05TVC5ldmVudHMuVVNFUl9MT0dHRUQsIG9uTG9naW5TdWJzY3JpYmUpO1xyXG5cclxuICAgIHNob3dMb2dvdXQoKTtcclxuXHJcbiAgICAkKENPTlNULnVpU2VsZWN0b3JzLmhlYWRlclJlZ0J0bikub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICRsb2dpbkJveC5oaWRlKCk7XHJcbiAgICAgICAgJHJlZ2lzdGVyQm94LmNzcyh7J3RvcCc6IDAsICdyaWdodCc6IDB9KVxyXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ2JnLWxpZ2h0IGJvcmRlciBtdC01IG14LWF1dG8gcG9zaXRpb24tYWJzb2x1dGUgcHgtMyBkLWJsb2NrJylcclxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyTmF2TG9naW5CdG4pLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAkbG9naW5Cb3guYWRkQ2xhc3MoJ2QtYmxvY2snKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgJHJlZ2lzdGVyQm94LmFkZENsYXNzKCdkLW5vbmUnKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpO1xyXG4gICAgfSk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9oZWFkZXIvaGVhZGVyLmpzIiwiLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3VzZXInO1xyXG4vLyBpbXBvcnQgU3Bpbm5lciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvc3Bpbm5lcic7XHJcbmltcG9ydCB2aWV3VXRpbHMgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3ZpZXcnO1xyXG4vLyBpbXBvcnQgUHViU3ViIGZyb20gJ3B1YnN1Yi1qcyc7XHJcbmltcG9ydCB7Q09OU1R9IGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMnO1xyXG5cclxuLy8g0J/QvtGB0LvQtSDQtNC+0LHQsNCy0LvQtdC90LjRjyDQsNC60LrQsNGD0L3RgtCwINGB0L3QvtCy0LAg0LTQtdGA0L3Rg9GC0Ywg0JzQldCi0JAg0Lgg0L/QtdGA0LXRgNC40YHQvtCy0LDRgtGMINGB0L/QuNGB0L7QuiDQsNC60LrQsNGD0L3RgtC+0LJcclxuY29uc3QgYWRkSW5zdGFncmFtQWNjb3VudCA9IChuZXdGb3JtRGF0YSkgPT4ge1xyXG4gICAgY29uc3QgY2JFcnJvciA9IChyZXN1bHQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnRVJST1InLCByZXN1bHQpO1xyXG4gICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UoJCgnLmVycm9yLW1zZycpLFxyXG4gICAgICAgICAgICByZXN1bHQuc3RhdHVzLnN0YXRlLFxyXG4gICAgICAgICAgICByZXN1bHQuc3RhdHVzLm1lc3NhZ2UgfHwgJ0xvZ2luIGVycm9yJyk7XHJcbiAgICAgICAgLy8gJChfbG9naW5Cb3gpLmFkZENsYXNzKGNsb3NlQ2xhc3MpLnJlbW92ZUNsYXNzKG9wZW5lZENsYXNzKTtcclxuICAgIH07XHJcblxyXG4gICAgVXNlci5hZGRJbnN0YWdyYW1BY2NvdW50KG5ld0Zvcm1EYXRhLCBjYkVycm9yKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5zdGF0dXMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LCByZXN1bHQuc3RhdHVzKTtcclxuICAgICAgICAgICAgLy8gZGVidWdnZXI7XHJcbiAgICAgICAgICAgIGNvbnN0ICRtc2dMaXN0ID0gJCgnLmFjY291bnRzLWxpc3QnKTtcclxuICAgICAgICAgICAgJG1zZ0xpc3QuZW1wdHkoKTtcclxuICAgICAgICAgICAgLy8gdG9kbyA6IHJlbG9hZCBsaXN0XHJcbiAgICAgICAgICAgIC8vIGZpbGxMaXN0KCRtc2dMaXN0LCByZXN1bHQuZGF0YS5hY2NvdW50cyk7XHJcbiAgICAgICAgICAgIC8vIGFkZExpc3RIYW5kbGVyKCk7XHJcblxyXG4gICAgICAgICAgICAvLyB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKCR0ZXh0QXJlYURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAvLyAgICAgcmVzdWx0LnN0YXR1cy5zdGF0ZSxcclxuICAgICAgICAgICAgLy8gICAgIHJlc3VsdC5zdGF0dXMubWVzc2FnZSB8fCAnTG9naW4gZXJyb3InKTtcclxuICAgICAgICAgICAgLy8gJChfbG9naW5Cb3gpLmFkZENsYXNzKGNsb3NlQ2xhc3MpLnJlbW92ZUNsYXNzKG9wZW5lZENsYXNzKTtcclxuICAgICAgICB9XHJcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgLy8gdG9kbzogcmVuZGVyIGZvciB1c2VyXHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdzdWJtaXQnLCBuZXdGb3JtRGF0YSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBhZGRPbkxvYWRIYW5kbGVycygpIHtcclxuICAgIC8vICQoJy5qc19yZXBlYXQtc2VjdXJpdHktY29kZScpLm9uKCdjbGljaycsIChlKSA9PiB7XHJcblxyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgJCgnLmpzX2FkZC1pbnN0YWdyYW0tYWNjb3VudCcpLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYnRuID0gJChlLnRhcmdldCk7XHJcbiAgICAgICAgY29uc3QgJG1vZGFsQm9keSA9IGJ0bi5jbG9zZXN0KCcubW9kYWwnKS5maW5kKCcubW9kYWwtZGlhbG9nIC5tb2RhbC1ib2R5Jyk7XHJcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSAkbW9kYWxCb2R5LmZpbmQoJ2lucHV0W25hbWU9XCJ1c2VybmFtZVwiXScpLnZhbCgpLnRyaW0oKTtcclxuICAgICAgICBjb25zdCBwYXNzd29yZCA9ICRtb2RhbEJvZHkuZmluZCgnaW5wdXRbbmFtZT1cInBhc3NcIl0nKS52YWwoKS50cmltKCk7XHJcbiAgICAgICAgY29uc3QgJGZvcm0gPSAkKCdmb3JtJywgJG1vZGFsQm9keSk7XHJcbiAgICAgICAgY29uc3QgZm9ybSA9ICRmb3JtLmdldCgwKTtcclxuICAgICAgICBjb25zdCBjc3NWYWxpZGF0aW9uQ2xhc3MgPSAnZm9ybS12YWxpZGF0aW9uJztcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAvLyBjb25zdCB2YWxpZGF0b3IgPSBuZXcgVmFsaWRhdG9yKCRmb3JtKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWxpZGF0b3IudmFsaWRhdGUoKSk7XHJcbiAgICAgICAgaWYgKGZvcm0uY2hlY2tWYWxpZGl0eSgpKSB7XHJcbiAgICAgICAgICAgIGFkZEluc3RhZ3JhbUFjY291bnQoe3VzZXJuYW1lLCBwYXNzd29yZH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIEhpZ2hsaWdodCBlcnJvcnNcclxuICAgICAgICAgICAgaWYgKGZvcm0ucmVwb3J0VmFsaWRpdHkpIHtcclxuICAgICAgICAgICAgICAgIGZvcm0ucmVwb3J0VmFsaWRpdHkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkZm9ybS5hZGRDbGFzcyhjc3NWYWxpZGF0aW9uQ2xhc3MpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF1c2VybmFtZSB8fCAhcGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vdCB2YWxpZCAtIEVtcHR5IGZpZWxkcycpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZExpc3RIYW5kbGVyKC8qIHVzZXJuYW1lKi8pIHtcclxuICAgIC8vICQoJyN5b3VyTW9kYWxJRCcpLm9uKCdzaG93LmJzLm1vZGFsJywgZnVuY3Rpb24oZSkge1xyXG4gICAgLy8gICAgIHZhciB5b3VycGFyYW1ldGVyID0gZS5yZWxhdGVkVGFyZ2V0LmRhdGFzZXQueW91cnBhcmFtZXRlcjtcclxuICAgIC8vICAgICAvLyBEbyBzb21lIHN0dWZmIHcvIGl0LlxyXG4gICAgLy8gfSk7XHJcbiAgICBsZXQgY2hlY2twb2ludFR5cGUgPSAnJztcclxuXHJcbiAgICAkKCcuanNfcGFzcy1jaGVja3BvaW50LWJ0bicpLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgJGJ1dHRvbiA9ICQoZS50YXJnZXQpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gJGJ1dHRvbi5kYXRhKCd1c2VybmFtZScpO1xyXG4gICAgICAgIGNoZWNrcG9pbnRUeXBlID0gJGJ1dHRvbi5kYXRhKCdjaGVja3BvaW50VHlwZScpIHx8IGNoZWNrcG9pbnRUeXBlO1xyXG4gICAgICAgIC8vICQoJyNzZWN1cml0eS1jb2RlJykuZGF0YSgnY2hlY2twb2ludFR5cGUnLCBjaGVja3BvaW50VHlwZSk7XHJcbiAgICAgICAgLy8gdG9kbyBhZGQgJ2NoZWNrcG9pbnRUeXBlJyB0byBtb2RhbFxyXG4gICAgICAgIGNvbnN0IHNlbmRUbyA9IChjaGVja3BvaW50VHlwZSA9PT0gJ1BIT05FJykgPyAn0YLQtdC70LXRhNC+0L0nIDogJ2VtYWlsJztcclxuICAgICAgICAvLyBTcGlubmVyLnN0YXJ0KCRidXR0b24sICdmYS1rZXknKTtcclxuXHJcbiAgICAgICAgaWYgKGNoZWNrcG9pbnRUeXBlID09PSAnRU1BSUxfT1JfUEhPTkUnKSB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAvLyDQuNC90L/Rg9GC0Ysg0YHQv9GA0Y/RgtCw0L3RiyxcclxuICAgICAgICAgICAgLy8g0L/QvtC60LDQt9Cw0YLRjCDRgdC10YDRi9C1INC/0LXRgNC10LrQu9GO0YfQsNGC0LXQu9C4ICjQstGL0LHRgNCw0Lsg0YLQuNC/KVxyXG4gICAgICAgICAgICAvLyDQtdGB0YLRjCDQutC90L7Qv9C60LAg0JfQsNC/0YDQvtGB0LjRgtGMINC60L7QtCDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjQtVxyXG4gICAgICAgICAgICAkKCcjc2VjdXJpdHktY29kZS1waG9uZU9yZW1haWwnKS5tb2RhbCh7c2hvdzogdHJ1ZSwgdXNlcm5hbWV9KTtcclxuXHJcbiAgICAgICAgICAgIC8vINC90LUg0L7RgtC/0YDQsNCy0LvRj9C10Lwg0YDQtdC60LLQtdGB0YJcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgVXNlci5nZXRTZWN1cml0eUtleSh1c2VybmFtZSwgY2hlY2twb2ludFR5cGUpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2VjdXJpdHlLZXkgcmVjZWl2ZWQ6JywgcmVzdWx0LnN0YXR1cy5zdGF0ZSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzLnN0YXRlID09PSAnb2snKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkbW9kYWwgPSAkKCcjc2VjdXJpdHktY29kZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNwaW5uZXIuc3RvcCgkYnV0dG9uLCAnZmEta2V5Jyk7XHJcbiAgICAgICAgICAgICAgICAkKCcuanNfc3VjY2Vzcy1mZWVkYmFjaycsICRtb2RhbCkuZW1wdHkoKS50ZXh0KGDQmtC70Y7RhyDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjRjyDQsdGL0Lsg0L7RgtC/0YDQsNCy0LvQtdC9INCS0LDQvCDQvdCwICR7c2VuZFRvfWApO1xyXG5cclxuICAgICAgICAgICAgICAgICQoJyNzZWN1cml0eS1jb2RlJykuYXR0cignZGF0YS11c2VybmFtZScsIHVzZXJuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gaW5zaWRlIG1vZGFsXHJcbiAgICAkKCcuanNfY29uZmlybS1zZWN1cml0eS1jb2RlJykub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCBidG4gPSAkKGUudGFyZ2V0KTtcclxuICAgICAgICBjb25zdCB1c2VybmFtZSA9IGJ0bi5jbG9zZXN0KCcjc2VjdXJpdHktY29kZScpLmRhdGEoJ3VzZXJuYW1lJyk7XHJcbiAgICAgICAgY29uc3QgJGtleUlucHV0ID0gYnRuLmNsb3Nlc3QoJy5tb2RhbCcpLmZpbmQoJy5tb2RhbC1kaWFsb2cgZm9ybSBpbnB1dC5qc19jb25maXJtLWtleScpO1xyXG4gICAgICAgIGNvbnN0IGtleSA9ICRrZXlJbnB1dC52YWwoKS50cmltKCk7XHJcbiAgICAgICAgY29uc3QgJG1vZGFsID0gYnRuLmNsb3Nlc3QoJy5tb2RhbCcpO1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIGlmIChrZXkubGVuZ3RoICE9PSA2KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgVXNlci5jb25maXJtU2VjdXJpdHlLZXkoa2V5LCB1c2VybmFtZSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzLnN0YXRlICE9PSAnb2snKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2pzX2NvbmZpcm06JywgcmVzdWx0LnN0YXR1cy5zdGF0ZSwgJ2Nsb3NlIG1vZGFsJyk7XHJcbiAgICAgICAgICAgICRtb2RhbC5tb2RhbCgnaGlkZScpO1xyXG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2VycicpO1xyXG4gICAgICAgICAgICAkKCcuanNfc3VjY2Vzcy1mZWVkYmFjaycsICRtb2RhbCkudGV4dCgn0JfQsNC/0YDQvtGBINC90LUg0L7RgtC/0YDQsNCy0LvQtdC9JykuY3NzKCdjb2xvcicsICdyZWQnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJ2Zvcm0gaW5wdXRbbWlubGVuZ3RoXScpLm9uKCdibHVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGxlbiA9ICQodGhpcykudmFsKCkudHJpbSgpLmxlbmd0aDtcclxuICAgICAgICBjb25zdCBtaW5MZW4gPSBOdW1iZXIoJCh0aGlzKS5hdHRyKCdtaW5sZW5ndGgnKSk7XHJcbiAgICAgICAgLy8gY29uc3QgbWVzc2FnZSA9IG1pbkxlbiA8PSBsZW4gPyAnJyA6IG1pbkxlbiArICcgY2hhcmFjdGVycyBtaW5pbXVtJztcclxuICAgICAgICBpZiAobWluTGVuICE9PSBsZW4pIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2JvcmRlckNvbG9yJywgJ3JlZCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQodGhpcykuY3NzKCdib3JkZXJDb2xvcicsICcjY2VkNGRhJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMuc2V0Q3VzdG9tVmFsaWRpdHkobWVzc2FnZSlcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9uSGlkZU1vZGFsKGUpIHtcclxuICAgICAgICBjb25zdCAkbW9kYWwgPSAkKGUudGFyZ2V0KTtcclxuICAgICAgICAkbW9kYWwuZmluZCgnLmZpcnN0LXN0ZXAnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgJG1vZGFsLmZpbmQoJy5zZWNvbmQtc3RlcCcpLmFkZENsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAkKCcuanNfY29uZmlybS1rZXknKS52YWwoJycpO1xyXG4gICAgICAgICQoJy5qc19zdWNjZXNzLWZlZWRiYWNrJywgJG1vZGFsKS5yZW1vdmVBdHRyKCdzdHlsZScpLmVtcHR5KCk7XHJcbiAgICB9XHJcbiAgICAkKCcjc2VjdXJpdHktY29kZS1waG9uZU9yZW1haWwnKS5vbignaGlkZS5icy5tb2RhbCcsIG9uSGlkZU1vZGFsKTtcclxuICAgICQoJyNzZWN1cml0eS1jb2RlJykub24oJ2hpZGUuYnMubW9kYWwnLCBvbkhpZGVNb2RhbCk7XHJcblxyXG4gICAgLy8gXCJQSE9ORV9PUl9FTUFJTFwiIG1vZGFsXHJcbiAgICAkKCcuanNfZ2V0LXNlY3VyaXR5LWNvZGUtcGhvbmVPcmVtYWlsJykub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCAkbW9kYWwgPSAkKCcjc2VjdXJpdHktY29kZS1waG9uZU9yZW1haWwnKTtcclxuICAgICAgICBjb25zdCB0eXBlU2VsZWN0ZWQgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCRtb2RhbCkuZmluZCgnLmpzX2J0bi10eXBlLXN3aXRjaGVyIGlucHV0OmNoZWNrZWQnKTtcclxuICAgICAgICBjb25zdCBjaGVja3BvaW50VHlwZUFjdGl2ZSA9IHR5cGVTZWxlY3RlZC52YWwoKTtcclxuICAgICAgICBjb25zdCBzZW5kVG8gPSAoY2hlY2twb2ludFR5cGVBY3RpdmUgPT09ICdQSE9ORScpID8gJ9GC0LXQu9C10YTQvtC9JyA6ICdlbWFpbCc7XHJcbiAgICAgICAgY29uc3QgbW9kYWxDb25maWcgPSAkbW9kYWwuZGF0YSgpWydicy5tb2RhbCddLl9jb25maWc7XHJcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSBtb2RhbENvbmZpZy51c2VybmFtZTtcclxuICAgICAgICBVc2VyLmdldFNlY3VyaXR5S2V5KHVzZXJuYW1lLCBjaGVja3BvaW50VHlwZUFjdGl2ZSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIC8vINC/0YDQuCDQvdCw0LbQsNGC0LjQuCBcItCX0LDQv9GA0L7RgdC40YLRjCDQutC+0LQg0L/QvtC00YLQstC10YDQttC00LXQvdC40LVcIiAtINC+0YLQv9Cw0YDQu9GP0LXRgtGB0Y8g0YDQtdC60LLQtdGB0YIgXCLRgdGC0LDRgNGCINGH0LXQutC/0L7QuNC90YJcIiDQv9C+0Y/QstC70Y/QtdGC0YzRgdGPINC40L3Qv9GD0YIg0Lgg0LrQvdC+0L/QutCwINC00YDRg9Cz0LjRhSDRgtC40L/QsNGFXHJcbiAgICAgICAgICAgIC8vIGdldCBzZWxlY3RlZCBidXR0b25cclxuXHJcbiAgICAgICAgICAgIC8vINC/0LXRgNC10LrQu9GO0YfQsNGC0LXQu9GMKNGB0LXRgNGL0LkpINC4INC60L3QvtC/0LrQsCBcItCX0LDQv9GA0L7RgdC40YLRjCDQutC+0LQg0L/QvtC00YLQstC10YDQttC00LXQvdC40LVcIiDQuNGB0YfQtdC30LDRjtGCXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZWN1cml0eUtleSByZWNlaXZlZDonLCByZXN1bHQuc3RhdHVzLnN0YXRlKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMuc3RhdGUgPT09ICdvaycpIHtcclxuICAgICAgICAgICAgICAgICQoJy5maXJzdC1zdGVwJywgJG1vZGFsKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcuc2Vjb25kLXN0ZXAnLCAkbW9kYWwpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgICAgICQoJy5qc19zdWNjZXNzLWZlZWRiYWNrJywgJG1vZGFsKS5lbXB0eSgpLnRleHQoYNCa0LvRjtGHINC/0L7QtNGC0LLQtdGA0LbQtNC10L3QuNGPINCx0YvQuyDQvtGC0L/RgNCw0LLQu9C10L0g0JLQsNC8INC90LAgJHtzZW5kVG99YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaWxsTGlzdCgkbGlzdCwgZGF0YUFycmF5KSB7XHJcbiAgICBjb25zdCBpdGVtcyA9IGRhdGFBcnJheTtcclxuICAgIGNvbnN0IGNMaXN0ID0gJGxpc3Q7XHJcbiAgICBjb25zdCBkZWZhdWx0QXZhdGFyU3JjID0gJ2h0dHBzOi8vaS5pbWd1ci5jb20vak5OVDRMRS5wbmcnO1xyXG4gICAgY29uc3QgaW5zZXJ0SXRlbSA9IChkYXRhLCB0ZXh0LCBjc3NDbHMpID0+IHtcclxuICAgICAgICBjb25zdCBsaVRwbCA9IGAkeyhkYXRhKVxyXG4gICAgICAgICAgICA/IGA8bGkgY2xhc3M9XCJsaXN0LWlubGluZS1pdGVtICR7Y3NzQ2xzfVwiPjxzcGFuIGNsYXNzPVwiZmlndXJlXCI+JHtkYXRhfTwvc3Bhbj48c3Bhbj4ke3RleHR9PC9zcGFuPjwvbGk+YFxyXG4gICAgICAgICAgICA6IGA8bGkgY2xhc3M9XCJsaXN0LWlubGluZS1pdGVtICR7Y3NzQ2xzfVwiPjxzcGFuIGNsYXNzPVwiZmlndXJlXCI+MDwvc3Bhbj48c3Bhbj4ke3RleHR9PC9zcGFuPjwvbGk+YH1gO1xyXG4gICAgICAgIHJldHVybiBsaVRwbDtcclxuICAgIH07XHJcbiAgICBjb25zdCBzdGF0cyA9IChpbmZvKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdHBsID0gYDxkaXYgY2xhc3M9XCJjb2xcIj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1pbmxpbmUgdGV4dC1jZW50ZXIgY291bnRzLWxpc3RcIj5cclxuICAgICAgICAgICAgJHsoaW5mbylcclxuICAgICAgICAgICAgICA/IGAke2luc2VydEl0ZW0oaW5mb1snbWVkaWFfY291bnQnXSwgJ9Cf0YPQsdC70LjQutCw0YbQuNC4JywgJ21lZGlhLWNvdW50Jyl9XHJcbiAgICAgICAgICAgICAgICAke2luc2VydEl0ZW0oaW5mb1snZm9sbG93ZXJfY291bnQnXSwgJ9Cf0L7QtNC/0LjRgdGH0LjQutC4JywgJ2ZvbGxvd2VyLWNvdW50Jyl9XHJcbiAgICAgICAgICAgICAgICAke2luc2VydEl0ZW0oaW5mb1snZm9sbG93aW5nX2NvdW50J10sICfQn9C+0LTQv9C40YHQutC4JywgJ2ZvbGxvd2luZy1jb3VudCcpfWBcclxuICAgICAgICAgICAgICA6IGAke2luc2VydEl0ZW0oZmFsc2UsICfQn9GD0LHQu9C40LrQsNGG0LjQuCcsICdtZWRpYS1jb3VudCcpfVxyXG4gICAgICAgICAgICAgICAgJHtpbnNlcnRJdGVtKGZhbHNlLCAn0J/QvtC00L/QuNGB0YfQuNC60LgnLCAnZm9sbG93ZXItY291bnQnKX1cclxuICAgICAgICAgICAgICAgICR7aW5zZXJ0SXRlbShmYWxzZSwgJ9Cf0L7QtNC/0LjRgdC60LgnLCAnZm9sbG93aW5nLWNvdW50Jyl9YFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+YDtcclxuICAgICAgICByZXR1cm4gdHBsO1xyXG4gICAgfTtcclxuICAgIGNMaXN0LmVtcHR5KCkuYWRkQ2xhc3MoJ2JvcmRlci1saWdodC1jb2xvcicpO1xyXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGluZm8gPSBpdGVtLmluZm87XHJcbiAgICAgICAgY29uc3QgY2hlY2twb2ludCA9IGl0ZW0uY2hlY2twb2ludCB8fCBpdGVtO1xyXG5cclxuICAgICAgICBpZiAoIWluZm8pIHtcclxuICAgICAgICAgICAgJChgPGxpIGNsYXNzPVwibWVkaWEgcHktM1wiIGRhdGEtdXNlcm5hbWU9XCIke2l0ZW0udXNlcm5hbWV9XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwibWwtMyByb3VuZGVkXCIgYWx0PVwiZGVmYXVsdCBhdmF0YXJcIiBzcmM9XCIke2RlZmF1bHRBdmF0YXJTcmN9XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEtYm9keSBkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHVzZXItaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkeyhpdGVtLnVzZXJuYW1lKSA/IGA8aDQgY2xhc3M9XCJtdC0wIG1iLTEgbmFtZVwiPiR7aXRlbS51c2VybmFtZX08L2g0PmAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHVzZXItY2hlY2twb2ludFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkeyhjaGVja3BvaW50LnN0YXR1cyA9PT0gJ1RSSUdHRVJFRCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGpzX3Bhc3MtY2hlY2twb2ludC1idG4gZC1ibG9jayBteC1hdXRvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWNoZWNrcG9pbnQtdHlwZT1cIiR7Y2hlY2twb2ludC50eXBlIHx8ICdFTUFJTCd9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdXNlcm5hbWU9XCIke2l0ZW0udXNlcm5hbWUgfHwgJyd9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNzZWN1cml0eS1jb2RlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1rZXlcIj48L2k+0J/RgNC+0LnRgtC4INGH0LXQutC/0L7QuNC90YI8L2J1dHRvbj5gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYCh0b2RvKWNoZWNrcG9pbnQgc3RhdHVzIC0gJHtjaGVja3BvaW50LnN0YXR1c31gfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICR7c3RhdHMoKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPmApLmFwcGVuZFRvKGNMaXN0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKGA8bGkgY2xhc3M9XCJtZWRpYSBweS0zXCIgZGF0YS11c2VybmFtZT1cIiR7aXRlbS51c2VybmFtZX1cIj5cclxuICAgICAgICAgICAgJHsoaW5mb1sncHJvZmlsZV9waWNfdXJsJ10pXHJcbiAgICAgICAgICAgICAgICA/IGA8aW1nIGNsYXNzPVwibWwtMyByb3VuZGVkXCIgYWx0PVwiVXNlciBwaG90b1wiIHNyYz1cIiR7aW5mb1sncHJvZmlsZV9waWNfdXJsJ119XCI+YFxyXG4gICAgICAgICAgICAgICAgOiBgPGltZyBjbGFzcz1cIm1sLTMgcm91bmRlZFwiIGFsdD1cImRlZmF1bHQgYXZhdGFyXCIgc3JjPVwiJHtkZWZhdWx0QXZhdGFyU3JjfVwiPmB9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1ib2R5IGQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB1c2VyLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAkeyhpdGVtLnVzZXJuYW1lKSA/IGA8cCBjbGFzcz1cIm10LTAgbWItMSBuYW1lIGxlYWRcIj4ke2l0ZW0udXNlcm5hbWV9PC9wPmAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAkeyhpbmZvLm5hbWUpID8gYDxoNCBjbGFzcz1cIm10LTAgbWItMVwiPiR7aW5mby5uYW1lfTwvaDQ+YCA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICR7KGluZm8ubmFtZSkgPyAnJyA6ICcnICAvKiAkeyhpbmZvLmVtYWlsKSA/IGA8cCBjbGFzcz1cIm10LTAgbWItMVwiPiR7aW5mby5lbWFpbH08L3A+YCA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAkeyhpbmZvLnBob25lKSA/IGA8cCBjbGFzcz1cIm10LTAgbWItMVwiPiR7aW5mby5waG9uZX08L3A+YCA6ICcnfSAqLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgdXNlci1jaGVja3BvaW50XCI+ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgJHsoY2hlY2twb2ludC5zdGF0dXMgPT09ICdUUklHR0VSRUQnKVxyXG4gICAgICAgICAgICAgICAgICAgID8gYDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGpzX3Bhc3MtY2hlY2twb2ludC1idG4gZC1ibG9jayBteC1hdXRvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWNoZWNrcG9pbnQtdHlwZT1cIiR7Y2hlY2twb2ludC50eXBlIHx8ICdFTUFJTCd9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdXNlcm5hbWU9XCIke2l0ZW0udXNlcm5hbWUgfHwgJyd9XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjc2VjdXJpdHktY29kZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1rZXlcIj48L2k+0J/RgNC+0LnRgtC4INGH0LXQutC/0L7QuNC90YI8L2J1dHRvbj5gXHJcbiAgICAgICAgICAgICAgICAgICAgOiAnJ31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgJHtzdGF0cyhpbmZvKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9saT5gKS5hcHBlbmRUbyhjTGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB3aW5kb3cuUHViU3ViLnB1Ymxpc2goQ09OU1QuZXZlbnRzLmluc3RhZ3JhbUFjY291bnMuSU5TVEFHUkFNX0FDQ09VTlNfUkVOREVSRUQpO1xyXG59XHJcblxyXG4vKipcclxuICogSW5pdCBoZWFkZXJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgY29uc3QgJG1zZ0xpc3QgPSAkKCcuYWNjb3VudHMtbGlzdCcpO1xyXG4gICAgLy8gY2hlY2sgd2UgYXJlIGluIHByb2ZpbGUgcGFnZVxyXG4gICAgaWYgKCEkbXNnTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCB0b2tlbiA9IFVzZXIuZ2V0VG9rZW4oKTsgLy8gdXBkIHRvOiBVc2VyLmdldFRva2VuKClcclxuICAgIGNvbnN0IG1ldGFkYXRhID0gVXNlci5nZXRNZXRhZGF0YSh0b2tlbik7XHJcbiAgICBjb25zdCByZXNlbmRSZXF1ZXN0ID0gKCkgPT4gVXNlci5nZXRNZXRhZGF0YSh0b2tlbik7XHJcbiAgICBsZXQgaXNTZW5kUmVxT25jZSA9IGZhbHNlO1xyXG4gICAgY29uc3QgY2hlY2tSZXNwb25zZSA9IChyZXN1bHQsIGlzUmVzZW5kUmVxdWVzdCkgPT4ge1xyXG4gICAgICAgIGlmICghcmVzdWx0LnN0YXR1cy5zdGF0ZSA9PT0gJ29rJyB8fCAhcmVzdWx0LmRhdGEgfHwgISRtc2dMaXN0Lmxlbmd0aCB8fCBpc1Jlc2VuZFJlcXVlc3QpIHtcclxuICAgICAgICAgICAgLy8g0L/RgNC+0LLQtdGA0Y/QvCDQvtC00LjQvSDRgNCw0Lcg0L3QsNC70LjRh9C40LUgcmVzdWx0LmRhdGEuYWNjb3VudHMuaW5mb1xyXG4gICAgICAgICAgICAkbXNnTGlzdC5lbXB0eSgpO1xyXG4gICAgICAgICAgICAkKGA8bGkgY2xhc3M9XCJtZWRpYVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJtdC0wIG1iLTNcIj7QndC4INC+0LTQvdC+0LPQviDQkNC60LrQsNGD0L3RgtCwINC90LUg0LTQvtCx0LDQstC70LXQvdC+PC9oMz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPmApLmFwcGVuZFRvKCRtc2dMaXN0KTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNlbmRSZXF1ZXN0KCkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tSZXNwb25zZShyZXN1bHQsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlcXVlc3QgcmVzZW5kJyk7XHJcbiAgICAgICAgICAgIH0sIDM1MDApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vINCy0YvQstC+0LQg0YDQtdC30YPQu9GM0YLQsNGC0L7QsiAoZGF0YS5hY2NvdW50cy5pbmZvKVxyXG4gICAgICAgICQoJy5wcm9maWxlLXVzZXIgLnNwaW5uZXItYm94JykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgIGZpbGxMaXN0KCRtc2dMaXN0LCByZXN1bHQuZGF0YS5hY2NvdW50cyk7XHJcbiAgICAgICAgYWRkTGlzdEhhbmRsZXIoKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gY2hlY2sgd2UgYXJlIGluIHByb2ZpbGUgcGFnZVxyXG4gICAgaWYgKCEkbXNnTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgYWRkT25Mb2FkSGFuZGxlcnMoKTtcclxuXHJcbiAgICAvLyDQvNC+0LbQtdGCINC40L3RhNC+INC+0YLRgdGD0YLRgdCy0L7QstCw0YLRjCAtINGB0LTQtdC70LDRgtGMINC10YnQtSDRgNCw0Lcg0LfQsNC/0YDQvtGBINGH0LXRgNC10LcgMyDRgdC10LouXHJcblxyXG4gICAgbWV0YWRhdGEudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgLy8g0L/RgNC+0LLQtdGA0Y/QvCDQvtC00LjQvSDRgNCw0Lcg0L3QsNC70LjRh9C40LUgcmVzdWx0LmRhdGEuYWNjb3VudHMuaW5mb1xyXG4gICAgICAgIGxldCBpc1Jlc2VuZFJlcXVlc3QgPSBmYWxzZTtcclxuICAgICAgICBpZiAocmVzdWx0LmRhdGEgJiYgcmVzdWx0LmRhdGEuYWNjb3VudHMgJiYgIWlzU2VuZFJlcU9uY2UpIHtcclxuICAgICAgICAgICAgcmVzdWx0LmRhdGEuYWNjb3VudHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpdGVtLmluZm8pIHtcclxuICAgICAgICAgICAgICAgICAgICBpc1Jlc2VuZFJlcXVlc3QgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlzU2VuZFJlcU9uY2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNoZWNrUmVzcG9uc2UocmVzdWx0LCBpc1Jlc2VuZFJlcXVlc3QpO1xyXG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKCQoJy5lcnJvci1tc2cnKSxcclxuICAgICAgICAgICAgICAgIGVyci5zdGF0dXMgfHwgJycsXHJcbiAgICAgICAgICAgICAgICAn0J3QtSDQv9C+0LvRg9GH0LjQu9C+0YHRjCDQt9Cw0LPRgNGD0LfQuNGC0Ywg0LTQvtGB0YLRg9C/0L3Ri9C1IEluc3RhZ3JhbSDQsNC60LrQsNGD0L3RgtGLJyk7XHJcbiAgICAgICAgfSwgMzAwMCk7XHJcbiAgICAgICAgJCgnLnNwaW5uZXItYm94JykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgfSk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9pbnN0YWdyYW0tYWNjb3VudHMtbGlzdC9pbnN0YWdyYW0tYWNjb3VudHMtbGlzdC5qcyIsIi8qIGVzbGludC1kaXNhYmxlIHNvcnQtdmFycyAqL1xyXG4vLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdXNlcic7XHJcbmltcG9ydCBQdWJTdWIgZnJvbSAncHVic3ViLWpzJzsgLy8gaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvcHVic3ViLWpzXHJcbmltcG9ydCBjb29raWVTdG9yYWdlIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb29raWUnO1xyXG4vLyBpbXBvcnQgVmFsaWRhdG9yIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9mb3JtLXZhbGlkYXRvcic7XHJcbmltcG9ydCB2aWV3VXRpbHMgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3ZpZXcnO1xyXG5pbXBvcnQge0NPTlNUfSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29uc3RzJztcclxuXHJcbi8vIHdpbmRvdy4kID0gJDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMb2dpbkZvcm0oc2VsZWN0b3JDc3MpIHtcclxuICAgIGNvbnN0IHtfZm9ybUlkLCBfYnV0dG9uU3VibWl0SWQsIF9zaG93TG9naW5Cb3hCdG5JZCwgX2xvZ2luQm94fSA9IHNlbGVjdG9yQ3NzO1xyXG4gICAgY29uc3QgdXNlciA9IFVzZXIsIC8vIHNlcnZpY2VcclxuICAgICAgICAkZm9ybSA9ICQoX2Zvcm1JZCksXHJcbiAgICAgICAgJGVtYWlsID0gJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cIm1haWxcIl0nKSxcclxuICAgICAgICAkdGV4dEFyZWFEZXNjcmlwdGlvbiA9ICQoJyNkZXNjcmlwdGlvbicpO1xyXG4gICAgLy8gY29uc3Qgb3BlbmVkQ2xhc3MgPSAnZC1ibG9jayc7XHJcbiAgICAvLyBjb25zdCBjbG9zZUNsYXNzID0gJ2Qtbm9uZSc7XHJcblxyXG4gICAgY29uc3QgdXNlckxvZ2luSGVhZGVyID0gKF9mb3JtRGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNiRXJyb3IgPSAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICQoX2xvZ2luQm94KS5hcHBlbmQoJzxwPnJlc3VsdC5zdGF0dXMubWVzc2FnZTwvcD4nKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gdXNlci5sb2dpbihfZm9ybURhdGEsIGNiRXJyb3IpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LmRhdGEgJiYgcmVzdWx0LmRhdGEudG9rZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzYXZlIHRoZSBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgY29va2llU3RvcmFnZS5zZXQoQ09OU1QuY29va2llU3RvcmFnZS50b2tlbiwgcmVzdWx0LmRhdGEudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5uYXYtbGluay5qc19sb2dPdXQnKS5wYXJlbnQoKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3JlcXVlc3Qgc3VjY2VlZGVkIHdpdGggSlNPTiByZXNwb25zZScsIHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSgkdGV4dEFyZWFEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5tZXNzYWdlIHx8ICdMb2dpbiBzdWNjc2VzcycpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKHRoaXMuJHRleHRBcmVhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGA8cD5zdGF0dXM6ICR7cmVzdWx0LnN0YXR1cy5zdGF0ZX08L3A+PHA+IG1lc3NhZ2U6ICR7cmVzdWx0LnN0YXR1cy5tZXNzYWdlfTwvcD5gKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UoJHRleHRBcmVhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMubWVzc2FnZSB8fCAnTG9naW4gZXJyb3InKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHN1Ym1pdEZvcm0gPSBmdW5jdGlvbihmb3JtRGF0YU9iaikge1xyXG4gICAgICAgIGNvbnN0IGVtYWlsID0gJGVtYWlsLnZhbCgpLFxyXG4gICAgICAgICAgICBwYXNzd29yZCA9ICRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJwYXNzXCJdJykudmFsKCksXHJcbiAgICAgICAgICAgIF9mb3JtRGF0YSA9IGZvcm1EYXRhT2JqIHx8IHtlbWFpbCwgcGFzc3dvcmR9O1xyXG5cclxuICAgICAgICBpZiAoc2VsZWN0b3JDc3MuaXNMb2dpbkluc3RhZ3JhbSkge1xyXG4gICAgICAgICAgICAvLyB0b2RvOiBkZWxldGUgbWVcclxuICAgICAgICAgICAgLy8gYWRkSW5zdGFncmFtQWNjb3VudCh7dXNlcm5hbWU6ICRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJ1c2VybmFtZVwiXScpLnZhbCgpLCBwYXNzd29yZH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRlbWFpbC52YWwoJGVtYWlsLnZhbCgpLnRvTG9jYWxlTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICB1c2VyTG9naW5IZWFkZXIoX2Zvcm1EYXRhKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIFB1YlN1Yi5wdWJsaXNoKENPTlNULmV2ZW50cy5VU0VSX0xPR0dFRCwgJ2xvZ2luJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbG9nT3V0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29va2llU3RvcmFnZS5yZW1vdmUoQ09OU1QuY29va2llU3RvcmFnZS50b2tlbik7XHJcbiAgICAgICAgUHViU3ViLnB1Ymxpc2goQ09OU1QuZXZlbnRzLlVTRVJfTE9HT1VUKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYmluZEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0ICRzaG93TG9naW5Cb3hCdG5JZCA9ICQoX3Nob3dMb2dpbkJveEJ0bklkKTtcclxuICAgICAgICBjb25zdCAkbG9naW5Cb3ggPSAkKF9sb2dpbkJveCk7XHJcbiAgICAgICAgY29uc3Qgb3BlbmVkQ2xhc3MgPSAnZC1ibG9jayc7XHJcbiAgICAgICAgY29uc3QgY2xvc2VDbGFzcyA9ICdkLW5vbmUnO1xyXG5cclxuICAgICAgICAkc2hvd0xvZ2luQm94QnRuSWQub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXNlbGVjdG9yQ3NzLmlzTG9naW5JbnN0YWdyYW0pIHtcclxuICAgICAgICAgICAgICAgICRsb2dpbkJveC5jc3Moeyd0b3AnOiAwLCAncmlnaHQnOiAwfSlcclxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2JnLWxpZ2h0IGJvcmRlciBtdC01IG14LWF1dG8gcG9zaXRpb24tYWJzb2x1dGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkbG9naW5Cb3guYWRkQ2xhc3Mob3BlbmVkQ2xhc3MpLnJlbW92ZUNsYXNzKGNsb3NlQ2xhc3MpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCAkYnV0dG9uU3VibWl0ID0gJChfYnV0dG9uU3VibWl0SWQpLFxyXG4gICAgICAgICAgICBjc3NWYWxpZGF0aW9uQ2xhc3MgPSAnZm9ybS12YWxpZGF0aW9uJztcclxuXHJcbiAgICAgICAgJGJ1dHRvblN1Ym1pdC5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSAkZm9ybS5nZXQoMCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IHZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoJGZvcm0pO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWxpZGF0b3IudmFsaWRhdGUoKSk7XHJcbiAgICAgICAgICAgIGlmIChmb3JtLmNoZWNrVmFsaWRpdHkoKSAmJiB2aWV3VXRpbHMuaXNFbWFpbCgkZW1haWwudmFsKCkpKSB7XHJcbiAgICAgICAgICAgICAgICBzdWJtaXRGb3JtKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBIaWdobGlnaHQgZXJyb3JzXHJcbiAgICAgICAgICAgICAgICBpZiAoZm9ybS5yZXBvcnRWYWxpZGl0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm0ucmVwb3J0VmFsaWRpdHkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICRmb3JtLmFkZENsYXNzKGNzc1ZhbGlkYXRpb25DbGFzcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLm5hdi1saW5rLmpzX2xvZ091dCcpLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgbG9nT3V0KCk7XHJcbiAgICAgICAgICAgICQoZS50YXJnZXQpLnBhcmVudCgpLmhpZGUoKTtcclxuICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSgkdGV4dEFyZWFEZXNjcmlwdGlvbiwgJ0xvZ2dlZCBvdXQnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgUHViU3ViLnN1YnNjcmliZShDT05TVC5ldmVudHMuVVNFUl9MT0dPVVQsIChtc2cpID0+IHtcclxuICAgICAgICAgICAgJChDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJOYXZMb2dpbkJ0bikuYWRkQ2xhc3Mob3BlbmVkQ2xhc3MpLnJlbW92ZUNsYXNzKGNsb3NlQ2xhc3MpOyAvLyAuc2hvdygpO1xyXG4gICAgICAgICAgICAkKENPTlNULnVpU2VsZWN0b3JzLmhlYWRlclJlZ0J0bikuYWRkQ2xhc3Mob3BlbmVkQ2xhc3MpLnJlbW92ZUNsYXNzKGNsb3NlQ2xhc3MpO1xyXG4gICAgICAgICAgICAkKCcubmF2LWxpbmsuanNfbG9nT3V0JykuYWRkQ2xhc3MoY2xvc2VDbGFzcykucmVtb3ZlQ2xhc3Mob3BlbmVkQ2xhc3MpOyAvLyAuaGlkZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RvckxvZ2luU3RhdGUgPSAnLmpzX21lc3NhZ2VfbG9nZ2VkLS10ZXh0JztcclxuICAgICAgICAgICAgJChzZWxlY3RvckxvZ2luU3RhdGUpLnRleHQoJ9CS0Ysg0LLRi9GI0LvQuCDQuNC3INCw0LrQutCw0YPQvdGC0LAnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzTG9naW5CdG5DbGljayA9ICQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCduYXYubmF2YmFyJykuZmluZCgkbG9naW5Cb3gpLmxlbmd0aDtcclxuICAgICAgICAgICAgY29uc3QgaXNBZGRJbnN0YWdyYW1CdG5DbGlja2VkID0gJChldmVudC50YXJnZXQpLmF0dHIoJ2lkJykgPT09IENPTlNULnVpU2VsZWN0b3JzLmluc3RhZ3JhbS5hZGRBY2NvdW50QnRuSWQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWlzTG9naW5CdG5DbGljayAmJiAkbG9naW5Cb3guaGFzQ2xhc3Mob3BlbmVkQ2xhc3MpICYmICFpc0FkZEluc3RhZ3JhbUJ0bkNsaWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICRsb2dpbkJveC5hZGRDbGFzcyhjbG9zZUNsYXNzKS5yZW1vdmVDbGFzcyhvcGVuZWRDbGFzcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgICAgICBiaW5kRXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0XHJcbiAgICB9O1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3MvbG9naW4tZm9ybS9sb2dpbi1mb3JtLmpzIiwiaW1wb3J0IE1ldGVvckVtb2ppIGZyb20gJ21ldGVvci1lbW9qaSc7XHJcbi8vIGltcG9ydCBxcSBmcm9tICdmaW5lLXVwbG9hZGVyJzsgLy90b2RvOiBmaW5lLXVwbG9hZGVcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3VzZXInO1xyXG5pbXBvcnQgVXNlckNvbnZlcnNhdGlvbiBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvYXBpLXVzZXItZGlyZWN0JztcclxuaW1wb3J0IHZpZXdVdGlscyBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdmlldyc7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9zcGlubmVyJztcclxuLy8gaW1wb3J0IFB1YlN1YiBmcm9tICdwdWJzdWItanMnOy8vIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3B1YnN1Yi1qc1xyXG5pbXBvcnQge0NPTlNUfSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29uc3RzJztcclxuXHJcbmNvbnN0IHRva2VuID0gVXNlci5nZXRUb2tlbigpO1xyXG5jb25zdCAkbXNnTGlzdCA9ICQoJy5tZXNzYWdlcy1saXN0Jyk7XHJcbmxldCB1cGRhdGVJbnRlcnZhbCA9ICcnO1xyXG5sZXQgaW50ZXJ2YWxJZCA9IGZhbHNlO1xyXG5cclxuZnVuY3Rpb24gaXNJbk1lc3NhZ2VQYWdlKCkge1xyXG4gICAgY29uc3QgJG1zZ0xpc3QgPSAkKCcubWVzc2FnZXMtbGlzdCcpO1xyXG4gICAgY29uc3QgJHVzZXJMaXN0ID0gJCgnLm1lc3NhZ2VzLXVzZXItbGlzdCcpO1xyXG4gICAgcmV0dXJuICEhJG1zZ0xpc3QubGVuZ3RoICYmICEhJHVzZXJMaXN0Lmxlbmd0aDtcclxufVxyXG4kKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XHJcbiAgICBpZiAoIWlzSW5NZXNzYWdlUGFnZSgpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXHJcbiAgICBjb25zdCBtID0gbmV3IE1ldGVvckVtb2ppKCk7XHJcbiAgICBjb25zdCAkcGlja2VyID0gJCgndGV4dGFyZWFbZGF0YS1tZXRlb3ItZW1vamk9XCJ0cnVlXCJdIH4gZGl2Jyk7XHJcbiAgICBjb25zdCBzdHlsZSA9ICRwaWNrZXIuYXR0cignc3R5bGUnKTtcclxuICAgIGNvbnN0IHN0eWxlTmV3ID0gc3R5bGUucmVwbGFjZSgndG9wOiAzMHB4OycsICd0b3A6IC0yMTBweDsnKTtcclxuICAgICRwaWNrZXIuYXR0cignc3R5bGUnLCBzdHlsZU5ldyk7XHJcblxyXG4gICAgLypcclxuICAgIC8vdG9kbzogZmluZS11cGxvYWRlXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcclxuICAgIGNvbnN0IHJlc3RyaWN0ZWRVcGxvYWRlciA9IG5ldyBxcS5GaW5lVXBsb2FkZXIoe1xyXG4gICAgICAgIGVsZW1lbnQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaW5lLXVwbG9hZGVyLXZhbGlkYXRpb24nKSxcclxuICAgICAgICB0ZW1wbGF0ZTogJ3FxLXRlbXBsYXRlLXZhbGlkYXRpb24nLFxyXG4gICAgICAgIHJlcXVlc3Q6IHtcclxuICAgICAgICAgICAgZW5kcG9pbnQ6ICcvc2VydmVyL3VwbG9hZHMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0aHVtYm5haWxzOiB7XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyczoge1xyXG4gICAgICAgICAgICAgICAgd2FpdGluZ1BhdGg6ICdodHRwczovL2ZpbmV1cGxvYWRlci5jb20vc291cmNlL3BsYWNlaG9sZGVycy93YWl0aW5nLWdlbmVyaWMucG5nJywgLy8gJy9zb3VyY2UvcGxhY2Vob2xkZXJzL3dhaXRpbmctZ2VuZXJpYy5wbmcnLFxyXG4gICAgICAgICAgICAgICAgbm90QXZhaWxhYmxlUGF0aDogJ2h0dHBzOi8vZmluZXVwbG9hZGVyLmNvbS9zZXJ2ZXIvd2FpdGluZy1nZW5lcmljLnBuZycgLy8gJy9zb3VyY2UvcGxhY2Vob2xkZXJzL25vdF9hdmFpbGFibGUtZ2VuZXJpYy5wbmcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgICAgICAgYWxsb3dlZEV4dGVuc2lvbnM6IFsnanBlZycsICdqcGcnLCAndHh0J10sXHJcbiAgICAgICAgICAgIGl0ZW1MaW1pdDogMyxcclxuICAgICAgICAgICAgc2l6ZUxpbWl0OiA1MDAgKiAxMDI0XHJcbiAgICAgICAgfVxyXG4gICAgfSk7Ki9cclxufSk7XHJcblxyXG4vLyBtZXNzYWdlcy1saXN0XHJcbmZ1bmN0aW9uIGZpbGxMaXN0KCRsaXN0LCBkYXRhQXJyYXksIGlzQXBwZW50UHJldk1zZykge1xyXG4gICAgY29uc3QgaXRlbXMgPSBkYXRhQXJyYXk7XHJcbiAgICBjb25zdCBjTGlzdCA9ICRsaXN0O1xyXG4gICAgLy8gY29uc3QgZGVmYXVsdEF2YXRhclNyYyA9ICdodHRwczovL2kuaW1ndXIuY29tL2pOTlQ0TEUucG5nJztcclxuICAgIGNvbnN0IGluc2VydE1zZyA9ICh2YWx1ZSwgdHlwZSwgY3NzQ2xzKSA9PiB7XHJcbiAgICAgICAgbGV0IHN0ciA9ICcnO1xyXG4gICAgICAgIHN3aXRjaCAodHlwZS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3Bob3RvJzpcclxuICAgICAgICAgICAgICAgIHN0ciA9IGA8ZGl2IGNsYXNzPVwiY2hhdC1pbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7dmFsdWV9XCIgYWx0PVwiQ29udGVudCBJbWFnZVwiIGNsYXNzPVwiY29udGVudC1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+YDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdsaW5rJzpcclxuICAgICAgICAgICAgICAgIHN0ciA9IGA8ZGl2IGNsYXNzPVwiY2hhdC1pbWdcIj5cclxuICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIke3ZhbHVlfVwiPiR7dmFsdWV9PC9hPmA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDogc3RyID0gYDxkaXYgY2xhc3M9XCJjaGF0LXRleHRcIiA+JHt2YWx1ZX08L2Rpdj5gO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RyO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGFkZFRvTGlzdCA9IChpc0FwcGVudFByZXZNc2csICRsaSwgJGxpc3QpID0+IHtcclxuICAgICAgICBpZiAoaXNBcHBlbnRQcmV2TXNnKSB7XHJcbiAgICAgICAgICAgICRsaS5pbnNlcnRCZWZvcmUoJGxpc3QuZmluZCgnbGk6Zmlyc3QtY2hpbGQnKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGxpLmFwcGVuZFRvKCRsaXN0KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgaWYgKGlzQXBwZW50UHJldk1zZykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpc0FwcGVudFByZXZNc2cgdG8nLCBjTGlzdCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNMaXN0LmVtcHR5KCkuYWRkQ2xhc3MoJ2JvcmRlci1saWdodC1jb2xvcicpO1xyXG4gICAgfVxyXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBpdGVtO1xyXG4gICAgICAgIC8vIGNvbnN0IGNoZWNrcG9pbnQgPSBpdGVtLmNoZWNrcG9pbnQgfHwgaXRlbTtcclxuXHJcbiAgICAgICAgaWYgKG1lc3NhZ2Uuc2lkZS50b0xvd2VyQ2FzZSgpID09PSAnbGVmdCcpIHtcclxuICAgICAgICAgICAgY29uc3QgJGxpID0gJChgPGxpIGNsYXNzPVwiY2hhdC1pdGVtIGNoYXQtaXRlbS1sZWZ0IGNvbCBmbGV4LWNvbHVtbi1yZXZlcnNlXCIgdmFsdWU9XCIke21lc3NhZ2UudmFsdWV9XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAkeyhtZXNzYWdlWydwcm9maWxlX3BpY191cmwnXSlcclxuICAgICAgICAgICAgICAgICAgICA/IGA8ZGl2IGNsYXNzPVwiY2hhdC1pbWctYm94XCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke21lc3NhZ2VbJ3Byb2ZpbGVfcGljX3VybCddfVwiIGFsdD1cIlVzZXIgQXZhdGFyXCIgY2xhc3M9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2hhdC11c2VybmFtZSB0ZXh0LW11dGVkXCI+JHttZXNzYWdlLnVzZXJuYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAke2luc2VydE1zZyhtZXNzYWdlLnZhbHVlLCBtZXNzYWdlLnR5cGUpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiY2hhdC10aW1lLXRleHRcIj4ke3ZpZXdVdGlscy5nZXRGb3JtYXR0ZWREYXRlVXRpbChtZXNzYWdlLnRpbWVzdGFtcCl9PC9zbWFsbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPmApO1xyXG4gICAgICAgICAgICBhZGRUb0xpc3QoaXNBcHBlbnRQcmV2TXNnLCAkbGksIGNMaXN0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCAkbGkgPSAkKGA8bGkgY2xhc3M9XCJjaGF0LWl0ZW0gY2hhdC1pdGVtLXJpZ2h0IGNvbCBmbGV4LWNvbHVtbi1yZXZlcnNlXCIgdmFsdWU9XCIke21lc3NhZ2UudmFsdWV9XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAke2luc2VydE1zZyhtZXNzYWdlLnZhbHVlLCBtZXNzYWdlLnR5cGUpfVxyXG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInB1bGwtcmlnaHQgY2hhdC10aW1lLXRleHRcIj4ke3ZpZXdVdGlscy5nZXRGb3JtYXR0ZWREYXRlVXRpbChtZXNzYWdlLnRpbWVzdGFtcCl9PC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5gKTtcclxuICAgICAgICAgICAgYWRkVG9MaXN0KGlzQXBwZW50UHJldk1zZywgJGxpLCBjTGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gYWRkUGFnaW5hdGlvbigkd3JhcHBlciwgcGFnaW5hdGlvbikge1xyXG4gICAgY29uc3QgY3Vyc29yID0gcGFnaW5hdGlvbi5wcmV2X2N1cnNvcjtcclxuICAgIGNvbnN0ICRidXR0b24gPSAkKGA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgbG9hZC1tb3JlIGQtZmxleCBwb3NpdGlvbi1hYnNvbHV0ZVwiIHN0eWxlPVwidG9wOiAtNDJweDtcIlxyXG4gICAgICAgIGRhdGEtY3Vyc29yPVwiJHtjdXJzb3J9XCI+0LXRidC1INC00LDQstCw0LkhPC9idXR0b24+YCk7XHJcblxyXG4gICAgaWYgKCEkd3JhcHBlci5jbG9zZXN0KCcubWVzc2FnZXMtbGlzdC1ib3gnKS5maW5kKCcubG9hZC1tb3JlJykubGVuZ3RoKSB7XHJcbiAgICAgICAgJGJ1dHRvbi5pbnNlcnRCZWZvcmUoJHdyYXBwZXIpLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJEYXRhID0gJCgnLm1lc3NhZ2VzLWxpc3QnKS5kYXRhKCdjb252ZXJzYXRpb24nKTtcclxuICAgICAgICAgICAgY29uc3Qge3VzZXJuYW1lLCBjb252ZXJzYXRpb25JZH0gPSB1c2VyRGF0YTtcclxuICAgICAgICAgICAgU3Bpbm5lci5zdGFydEJ1dHRvblNwaW5uZXIoJGJ1dHRvbik7XHJcbiAgICAgICAgICAgIFVzZXJDb252ZXJzYXRpb24uZ2V0TWV0YWRhdGFEZXRhaWxDb252ZXJzYXRpb24odG9rZW4sIHt1c2VybmFtZSwgY29udmVyc2F0aW9uSWQsIGN1cnNvcn0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlY2VpdmUgbXNnJywgcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIFNwaW5uZXIuc3RvcEJ1dHRvblNwaW5uZXIoJGJ1dHRvbik7XHJcbiAgICAgICAgICAgICAgICBmaWxsTGlzdCgkbXNnTGlzdCwgcmVzdWx0LmRhdGEubWV0YS5tZXNzYWdlcywgJ2FwcGVudFByZXZNc2cnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuLy8gbWVzc2FnZXMtdXNlci1saXN0XHJcbmZ1bmN0aW9uIGZpbGxVc2VyTGlzdCgkbGlzdCwgZGF0YUFycmF5KSB7XHJcbiAgICBjb25zdCBpdGVtcyA9IGRhdGFBcnJheS5tZXRhO1xyXG4gICAgY29uc3QgY0xpc3QgPSAkbGlzdDtcclxuICAgIGNvbnN0IGNvbnZlcnNhdGlvbkRldGFpbCA9IGZ1bmN0aW9uKGl0ZW1zKSB7XHJcbiAgICAgICAgbGV0IHRwbCA9ICcnO1xyXG4gICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgIHRwbCArPSBgPGltZyBzcmM9XCIke2l0ZW1bJ3Byb2ZpbGVfcGljX3VybCddfVwiIGNsYXNzPVwibWVkaWEtcGhvdG8gbXItMSBtZWRpYS1waG90by0tZ3JvdXBcIiBzdHlsZT1cIndpZHRoOiAyNHB4O1wiPmA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0cGwgKz0gYDxpbWcgc3JjPVwiJHtpdGVtWydwcm9maWxlX3BpY191cmwnXX1cIiBjbGFzcz1cIm1lZGlhLXBob3RvIG1yLTFcIiBzdHlsZT1cIndpZHRoOiAyNHB4O1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtpdGVtLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9oNT5gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgdHBsICs9ICc8aDUgY2xhc3M9XCJ0aXRsZVwiPtCT0YDRg9C/0L7QstC+0Lkg0YfQsNGCPC9oNT4nO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHBsO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGFkZENvbnZlcnNhdGlvbnMgPSBmdW5jdGlvbihjb252ZXJzYXRpb25zKSB7XHJcbiAgICAgICAgbGV0IHRwbCA9ICcnO1xyXG4gICAgICAgIGNvbnZlcnNhdGlvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICB0cGwgKz0gYDxkaXYgY2xhc3M9XCJtZWRpYSBwLTFcIiBkYXRhLWNvbnZlcnNhdGlvbi1pZD1cIiR7aXRlbS5pZH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAke2NvbnZlcnNhdGlvbkRldGFpbChpdGVtLnRvKX1cclxuICAgICAgICAgICAgICAgICAgICAkeyhpdGVtWydsYXN0X21lc3NhZ2UnXSAmJiAocGFyc2VJbnQoaXRlbVsnbGFzdF9tZXNzYWdlJ10ubGVuZ3RoLCAxMCkpID4gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBgPHAgY2xhc3M9XCJzdW1tYXJ5ICR7aXRlbVsnaXNfdW5yZWFkJ10gPyAnZm9udC13ZWlnaHQtYm9sZCcgOiAndGV4dC1tdXRlZCd9XCI+JHtpdGVtWydsYXN0X21lc3NhZ2UnXX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7aXRlbVsnaXNfdW5yZWFkJ10gPyAnPHNwYW4gY2xhc3M9XCJzdW1tYXJ5LWRvdFwiPjwvc3Bhbj4nIDogJyd9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0cGw7XHJcbiAgICB9O1xyXG4gICAgY0xpc3QuZW1wdHkoKS5hZGRDbGFzcygnYm9yZGVyLWxpZ2h0LWNvbG9yJyk7XHJcbiAgICAvLyB0b2RvOiBmaXggaGFyZC1jb2RlICBpbWcgc3JjPVwiaHR0cHM6Ly9pLmltZ3VyLmNvbS9qTk5UNExFLnBuZ1wiXHJcbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpZHgpID0+IHtcclxuICAgICAgICAkKGA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW1cIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjY29sbGFwc2UtJHtpZHh9XCIgZGF0YS11c2VybmFtZT1cIiR7aXRlbS51c2VybmFtZX1cIiBcclxuICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJ0cnVlXCIgYXJpYS1jb250cm9scz1cImNvbGxhcHNlLSR7aWR4fVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWFcIiBpZD1cImhlYWRpbmctJHtpZHh9XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibXItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pLmltZ3VyLmNvbS9qTk5UNExFLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtZWRpYS1waG90b1wiPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgJHsoaXRlbVsndW5yZWFkX2NvbnZlcnNhdGlvbnMnXSA+IDApID8gYDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2Utc2Vjb25kYXJ5IHBvc2l0aW9uLWFic29sdXRlIHAtMlwiPiR7aXRlbVsndW5yZWFkX2NvbnZlcnNhdGlvbnMnXX08L3NwYW4+YCA6ICcnfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke2l0ZW0udXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImNvbGxhcHNlLSR7aWR4fVwiIGNsYXNzPVwiY29sbGFwc2VcIiBhcmlhLWxhYmVsbGVkYnk9XCJoZWFkaW5nLSR7aWR4fVwiIGRhdGEtcGFyZW50PVwiI2FjY29yZGlvblwiPlxyXG4gICAgICAgICAgICAgICAgJHthZGRDb252ZXJzYXRpb25zKGl0ZW0uY29udmVyc2F0aW9ucywgaWR4KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+YCkuYXBwZW5kVG8oY0xpc3QpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFuZEZpbGxVc2VyTGlzdChpc0FjdGl2ZUZpcnN0KSB7XHJcbiAgICBjb25zdCAkdXNlckxpc3QgPSAkKCcubWVzc2FnZXMtdXNlci1saXN0Jyk7XHJcbiAgICBjb25zdCBtZXRhZGF0YSA9IFVzZXJDb252ZXJzYXRpb24uZ2V0TWV0YWRhdGEodG9rZW4pO1xyXG4gICAgbGV0IHByZXZBY3RpdmVEaWFsb2dJZCA9ICcnO1xyXG4gICAgaWYgKCFpc0FjdGl2ZUZpcnN0KSB7XHJcbiAgICAgICAgcHJldkFjdGl2ZURpYWxvZ0lkID0gJHVzZXJMaXN0LmZpbmQoJ2xpIC5jb2xsYXBzZS5zaG93JykuYXR0cignaWQnKTtcclxuICAgIH1cclxuICAgIG1ldGFkYXRhLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGlmICghcmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXN1bHQuZGF0YS5tZXRhLnNvcnQoKGEsIGIpID0+IGFbJ3VzZXJuYW1lJ10ubG9jYWxlQ29tcGFyZShiWyd1c2VybmFtZSddKSk7XHJcbiAgICAgICAgZmlsbFVzZXJMaXN0KCR1c2VyTGlzdCwgcmVzdWx0LmRhdGEpO1xyXG4gICAgICAgIGlmIChyZXN1bHQuZGF0YS5zZXR0aW5ncyAmJiByZXN1bHQuZGF0YS5zZXR0aW5ncy5pbnZva2VfaW5fbWlsbGlzKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZUludGVydmFsID0gcmVzdWx0LmRhdGEuc2V0dGluZ3MuaW52b2tlX2luX21pbGxpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzQWN0aXZlRmlyc3QpIHtcclxuICAgICAgICAgICAgJHVzZXJMaXN0LmZpbmQoJ2xpOmZpcnN0LWNoaWxkIC5jb2xsYXBzZScpLmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3R0dCcsIHByZXZBY3RpdmVEaWFsb2dJZCk7XHJcbiAgICAgICAgICAgICQoYCMke3ByZXZBY3RpdmVEaWFsb2dJZH1gKS5hZGRDbGFzcygnc2hvdycpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBbmRGaWxsQ29udmVyc2F0aW9uKHVzZXJuYW1lLCBjb252ZXJzYXRpb25JZCwgaXNTY3JvbGxEb3duKSB7XHJcbiAgICBVc2VyQ29udmVyc2F0aW9uLmdldE1ldGFkYXRhRGV0YWlsQ29udmVyc2F0aW9uKHRva2VuLCB7dXNlcm5hbWUsIGNvbnZlcnNhdGlvbklkfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgZmlsbExpc3QoJG1zZ0xpc3QsIHJlc3VsdC5kYXRhLm1ldGEubWVzc2FnZXMpO1xyXG4gICAgICAgIFNwaW5uZXIucmVtb3ZlKCk7XHJcbiAgICAgICAgJCgnLmpzX3NlbmQtbWVzc2FnZS1ib3gnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgJCgnLm1lc3NhZ2VzLWxpc3QnKS5hdHRyKCdkYXRhLWNvbnZlcnNhdGlvbicsIEpTT04uc3RyaW5naWZ5KHt1c2VybmFtZSwgY29udmVyc2F0aW9uSWR9KSk7XHJcblxyXG4gICAgICAgIGlmIChpc1Njcm9sbERvd24pIHtcclxuICAgICAgICAgICAgJG1zZ0xpc3QuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6ICRtc2dMaXN0WzBdLnNjcm9sbEhlaWdodCAtICRtc2dMaXN0WzBdLmNsaWVudEhlaWdodFxyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5kYXRhLm1ldGEucGFnaW5hdGlvbikge1xyXG4gICAgICAgICAgICAgICAgYWRkUGFnaW5hdGlvbigkbXNnTGlzdCwgcmVzdWx0LmRhdGEubWV0YS5wYWdpbmF0aW9uKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJy5tZXNzYWdlcy1saXN0LWJveCcpLmZpbmQoJy5sb2FkLW1vcmUnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRIYW5kbGVycygpIHtcclxuICAgIGxldCBjb252ZXJzYXRpb25JZCA9ICcnO1xyXG5cclxuICAgICQoJyNzZW5kTWVzc2FnZUJ1dHRvbicpLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgJHRleHRBcmVhID0gJCgnI3NlbmRNZXNzYWdlVGV4dEFyZWEnKTtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9ICR0ZXh0QXJlYS52YWwoKTtcclxuICAgICAgICBjb25zdCB1c2VyRGF0YSA9ICQoJy5tZXNzYWdlcy1saXN0JykuZGF0YSgnY29udmVyc2F0aW9uJyk7XHJcbiAgICAgICAgY29uc3Qge3VzZXJuYW1lLCBjb252ZXJzYXRpb25JZH0gPSB1c2VyRGF0YTtcclxuICAgICAgICBTcGlubmVyLmFkZCgkKGUudGFyZ2V0KSwgJ3NwaW5uZXItYm94LS1zZW5kTXNnJyk7XHJcbiAgICAgICAgVXNlckNvbnZlcnNhdGlvbi5wb3N0TWV0YWRhdGFEZXRhaWxDb252ZXJzYXRpb24odG9rZW4sIHt1c2VybmFtZSwgY29udmVyc2F0aW9uSWQsIHZhbHVlfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnN0YXR1cyAmJiByZXN1bHQuc3RhdHVzLnN0YXRlID09PSAnb2snKSB7XHJcbiAgICAgICAgICAgICAgICBnZXRBbmRGaWxsQ29udmVyc2F0aW9uKHVzZXJuYW1lLCBjb252ZXJzYXRpb25JZCk7XHJcbiAgICAgICAgICAgICAgICAkdGV4dEFyZWEudmFsKCcnKTtcclxuICAgICAgICAgICAgICAgIFNwaW5uZXIucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuUHViU3ViLnB1Ymxpc2goQ09OU1QuZXZlbnRzLm1lc3NhZ2VzLlJFQ0lFVkVfTkVXX01FU1NBR0UsIHt1c2VybmFtZSwgY29udmVyc2F0aW9uSWQsIHZhbHVlLCByZXN1bHR9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmxpc3QtZ3JvdXAtaXRlbSAuY29sbGFwc2UnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBjb25zdCB1c2VybmFtZSA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5saXN0LWdyb3VwLWl0ZW0nKS5kYXRhKCd1c2VybmFtZScpO1xyXG4gICAgICAgIGNvbnZlcnNhdGlvbklkID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLm1lZGlhJykuZGF0YSgnY29udmVyc2F0aW9uLWlkJyk7XHJcbiAgICAgICAgU3Bpbm5lci5hZGQoJCgnI21haW5DaGF0UGFydCcpLCAnbXktNSBweS01Jyk7XHJcbiAgICAgICAgZ2V0QW5kRmlsbENvbnZlcnNhdGlvbih1c2VybmFtZSwgY29udmVyc2F0aW9uSWQsICdpc1Njcm9sbERvd24nKTtcclxuICAgICAgICB1cGRhdGVJbnRlcnZhbCA9ICh1cGRhdGVJbnRlcnZhbCA+IDYwMDApID8gdXBkYXRlSW50ZXJ2YWwgOiAxNTAwMDtcclxuICAgICAgICAvLyByZXNlbmQgcmVxdWVzdFxyXG4gICAgICAgIGlmIChpbnRlcnZhbElkKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnZlcnNhdGlvbklkID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLm1lZGlhJykuZGF0YSgnY29udmVyc2F0aW9uLWlkJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGludGVydmFsSWQsIGNvbnZlcnNhdGlvbklkKTtcclxuICAgICAgICAgICAgZ2V0QW5kRmlsbENvbnZlcnNhdGlvbih1c2VybmFtZSwgY29udmVyc2F0aW9uSWQpO1xyXG4gICAgICAgICAgICBnZXRBbmRGaWxsVXNlckxpc3QoKTtcclxuICAgICAgICB9LCB1cGRhdGVJbnRlcnZhbCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB3aW5kb3cuUHViU3ViLnN1YnNjcmliZShDT05TVC5ldmVudHMubWVzc2FnZXMuUkVDSUVWRV9ORVdfTUVTU0FHRSwgKGV2ZW50TmFtZSwgZGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHt1c2VybmFtZSwgY29udmVyc2F0aW9uSWQsIHZhbHVlLCByZXN1bHRGcm9tU2VydmVyfSA9IGRhdGE7XHJcbiAgICAgICAgY29uc3QgJGRpYWxvZyA9ICQoYC5tZXNzYWdlcy11c2VyLWxpc3QgLmxpc3QtZ3JvdXAtaXRlbVtkYXRhLXVzZXJuYW1lPVwiJHt1c2VybmFtZX1cIl0gZGl2W2RhdGEtY29udmVyc2F0aW9uLWlkPVwiJHtjb252ZXJzYXRpb25JZH1cIl1gKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2V0IHZhbCBmcm9tIHRleHQtYXJlYScsIHZhbHVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZygncmVzdWx0RnJvbVNlcnZlcjogJywgcmVzdWx0RnJvbVNlcnZlcik7XHJcbiAgICAgICAgJGRpYWxvZy5maW5kKCcuc3VtbWFyeScpLnRleHQodmFsdWUpO1xyXG5cclxuICAgICAgICAvLyBtZXRhZGF0YS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAvLyAgICAgZmlsbFVzZXJMaXN0KCR1c2VyTGlzdCwgcmVzdWx0LmRhdGEpO1xyXG4gICAgICAgIC8vICAgICBpZiAocmVzdWx0LmRhdGEuc2V0dGluZ3MgJiYgcmVzdWx0LmRhdGEuc2V0dGluZ3MuaW52b2tlX2luX21pbGxpcykge1xyXG4gICAgICAgIC8vICAgICAgICAgdXBkYXRlSW50ZXJ2YWwgPSByZXN1bHQuZGF0YS5zZXR0aW5ncy5pbnZva2VfaW5fbWlsbGlzO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAvLyBjaGVjayB3ZSBhcmUgaW4gY29ycmVjdCBwYWdlIChtZXNzYWdlcylcclxuICAgIGlmICghaXNJbk1lc3NhZ2VQYWdlKCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QW5kRmlsbFVzZXJMaXN0KCdzZXRBY3RpdmVGaXJzdCcpO1xyXG4gICAgYWRkSGFuZGxlcnMoKTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL21lc3NhZ2VzL21lc3NhZ2VzLmpzIiwiLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IFB1YlN1YiBmcm9tICdwdWJzdWItanMnOyAvLyBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9wdWJzdWItanNcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3VzZXInO1xyXG5pbXBvcnQgY29va2llU3RvcmFnZSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29va2llJztcclxuaW1wb3J0IHtDT05TVH0gZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2NvbnN0cyc7XHJcbmltcG9ydCB2aWV3VXRpbHMgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3ZpZXcnO1xyXG5cclxuY29uc3Qgc2VsZWN0b3JDbHMgPSB7XHJcbiAgICBmb3JtOiAnLmF1dGgucmVnaXN0ZXIgLmZvcm0tc2lnbmluJyxcclxuICAgIHN1Ym1pdEJ0bjogJ1t0eXBlPVwic3VibWl0XCJdJ1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWdpc3RlckZvcm0ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy51c2VyID0gVXNlcjtcclxuICAgICAgICB0aGlzLiRmb3JtID0gJChzZWxlY3RvckNscy5mb3JtKTtcclxuICAgICAgICB0aGlzLiRlbWFpbCA9IHRoaXMuJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cIm1haWxcIl0nKTtcclxuICAgICAgICB0aGlzLiR0ZXh0QXJlYURlc2NyaXB0aW9uID0gJCgnI2Rlc2NyaXB0aW9uJyk7XHJcbiAgICAgICAgdGhpcy5mb3JtRGF0YSA9IHsnZW1haWwnOiAndGVzdDFfZW1haWxAbS5ydScsICdwYXNzd29yZCc6ICdwYXNzd29yZCd9O1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgaWYgKCQoJy5hdXRoLnJlZ2lzdGVyJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdWJtaXRGb3JtKGZvcm1EYXRhT2JqKSB7XHJcbiAgICAgICAgY29uc3QgZW1haWwgPSB0aGlzLiRlbWFpbC52YWwoKTtcclxuICAgICAgICBjb25zdCAkcGFzc3dvcmQgPSB0aGlzLiRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJwYXNzXCJdJyksXHJcbiAgICAgICAgICAgICRwYXNzd29yZENvbmZpcm0gPSB0aGlzLiRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJwYXNzLWNvbmZpcm1cIl0nKSxcclxuICAgICAgICAgICAgcGFzc3dvcmQgPSB0aGlzLiRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJwYXNzXCJdJykudmFsKCksXHJcbiAgICAgICAgICAgIHBhc3N3b3JkQ29uZmlybSA9IHRoaXMuJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cInBhc3MtY29uZmlybVwiXScpLnZhbCgpO1xyXG5cclxuICAgICAgICBpZiAocGFzc3dvcmRDb25maXJtICE9PSBwYXNzd29yZCkge1xyXG4gICAgICAgICAgICAkcGFzc3dvcmQuYWRkQ2xhc3MoJ2lucHV0LWVycm9yJyk7XHJcbiAgICAgICAgICAgICRwYXNzd29yZENvbmZpcm0uYWRkQ2xhc3MoJ2lucHV0LWVycm9yJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy4kZW1haWwudmFsKHRoaXMuJGVtYWlsLnZhbCgpLnRvTG9jYWxlTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgIHRoaXMuZm9ybURhdGEgPSBmb3JtRGF0YU9iaiB8fCB7ZW1haWwsIHBhc3N3b3JkfTtcclxuXHJcbiAgICAgICAgdGhpcy51c2VyLnJlZ2lzdGVyKHRoaXMuZm9ybURhdGEpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZGF0YSAmJiByZXN1bHQuZGF0YS50b2tlbikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBzYXZlIHRoZSBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgY29va2llU3RvcmFnZS5zZXQoQ09OU1QuY29va2llU3RvcmFnZS5lbWFpbENvbmZpcm1lZCwgJ2ZhbHNlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvb2tpZVN0b3JhZ2Uuc2V0KENPTlNULmNvb2tpZVN0b3JhZ2UudG9rZW4sIHJlc3VsdC5kYXRhLnRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmVxdWVzdCBzdWNjZWVkZWQgd2l0aCBKU09OIHJlc3BvbnNlJywgcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICBQdWJTdWIucHVibGlzaChDT05TVC5ldmVudHMuVVNFUl9MT0dHRUQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UodGhpcy4kdGV4dEFyZWFEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5tZXNzYWdlIHx8ICdSZWdpc3RlciBhbmQgTG9naW4gc3VjY3Nlc3MnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSh0aGlzLiR0ZXh0QXJlYURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLm1lc3NhZ2UgfHwgJ25vIHJlc3VsdC5kYXRhIGZvdW5kJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKHRoaXMuJHRleHRBcmVhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMuc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5sb2dpbi1ib3gnKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlcXVlc3QgZmFpbGVkJywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSh0aGlzLiR0ZXh0QXJlYURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RvIHNvbWV0aGluZycpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG4gICAgICAgIGNvbnN0IHJlZ2lzdGVyQm94ID0gQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyUmVnQm94OyAvLyAnbmF2IC5yZWdpc3Rlci1ib3gnO1xyXG4gICAgICAgIGNvbnN0IG9wZW5lZENsYXNzID0gJ2QtYmxvY2snO1xyXG4gICAgICAgIGNvbnN0IGNsb3NlQ2xhc3MgPSAnZC1ub25lJztcclxuICAgICAgICBjb25zdCAkYnRuID0gJChzZWxlY3RvckNscy5zdWJtaXRCdG4pLFxyXG4gICAgICAgICAgICBjc3NWYWxpZGF0aW9uQ2xhc3MgPSAnZm9ybS12YWxpZGF0aW9uJztcclxuXHJcbiAgICAgICAgJGJ0bi5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBmb3JtID0gdGhpcy4kZm9ybS5nZXQoMCk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghJGJ0bi5pcygnOmRpc2FibGVkJykpIHtcclxuICAgICAgICAgICAgICAgIGlmIChmb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICRidG4uYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdEZvcm0oKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSGlnaGxpZ2h0IGVycm9yc1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmb3JtLnJlcG9ydFZhbGlkaXR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0ucmVwb3J0VmFsaWRpdHkoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZm9ybS5hZGRDbGFzcyhjc3NWYWxpZGF0aW9uQ2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpc1JlZ0J0bkNsaWNrID0gJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJ25hdi5uYXZiYXInKS5maW5kKCcucmVnaXN0ZXItYm94JykubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFpc1JlZ0J0bkNsaWNrICYmICQocmVnaXN0ZXJCb3gpLmhhc0NsYXNzKG9wZW5lZENsYXNzKSkge1xyXG4gICAgICAgICAgICAgICAgJChyZWdpc3RlckJveCkuYWRkQ2xhc3MoY2xvc2VDbGFzcykucmVtb3ZlQ2xhc3Mob3BlbmVkQ2xhc3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9yZWdpc3Rlci1mb3JtL3JlZ2lzdGVyLWZvcm0uanMiLCIvLyBpbXBvcnQgKiBhcyBmb2xsb3dTdGF0dXMgZnJvbSAnLi9mb2xsb3ctc3RhdHVzJztcclxuaW1wb3J0IHtDT05TVH0gZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2NvbnN0cyc7XHJcbi8vIGltcG9ydCBVc2VyVGFza01hbmFnZXIgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2FwaS10YXNrLW1hbmFnZXInO1xyXG4vLyBpbXBvcnQgJ2JydXR1c2luLWpzb24tZm9ybXMnO1xyXG5jb25zdCBzdGF0ZSA9IHtcclxuICAgIHVzZXJuYW1lOiAnJ1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEluaXQgaGVhZGVyXHJcbiAqL1xyXG5mdW5jdGlvbiBpbml0U3RlcHMoZm9ybVNlbGVjdG9yLCB3aXphcmRDZmcpIHtcclxuICAgIGNvbnN0ICRmb3JtID0gJChmb3JtU2VsZWN0b3IpO1xyXG4gICAgY29uc3Qge3N0ZXBSZWR1Y2VyLCBvblN1Ym1pdEhhbmRsZXJ9ID0gd2l6YXJkQ2ZnO1xyXG4gICAgJCgnLmpzX3Byb2ZpbGUtdXNlci1mb2xsb3c+LmNvbnRhaW5lcicpLnJlbW92ZUNsYXNzKCdjb250YWluZXInKTtcclxuXHJcbiAgICAkZm9ybS5maW5kKCdmaWVsZHNldDpmaXJzdC1jaGlsZCcpLmZhZGVJbignc2xvdycpO1xyXG5cclxuICAgICRmb3JtLmZpbmQoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdJykub24oJ2ZvY3VzJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2lucHV0LWVycm9yJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBuZXh0IHN0ZXBcclxuICAgICRmb3JtLmZpbmQoJy5idG4tbmV4dCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBwYXJlbnRfZmllbGRzZXQgPSAkKHRoaXMpLnBhcmVudHMoJ2ZpZWxkc2V0Jyk7XHJcbiAgICAgICAgbGV0IG5leHRfc3RlcCA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgcmFkaW9CdG5BY3RpdmUgPSBwYXJlbnRfZmllbGRzZXQuZmluZCgnaW5wdXRbbmFtZT1cInVzZXJBY2NvdW50UmFkaW9cIl06Y2hlY2tlZCcpO1xyXG5cclxuICAgICAgICBpZiAocmFkaW9CdG5BY3RpdmUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VybmFtZSA9IHJhZGlvQnRuQWN0aXZlLnBhcmVudHMoJ2xpJykuZGF0YSgndXNlcm5hbWUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzdGVwUmVkdWNlcikge1xyXG4gICAgICAgICAgICBzdGVwUmVkdWNlcihwYXJlbnRfZmllbGRzZXQuaW5kZXgoKSwgc3RhdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcGFyZW50X2ZpZWxkc2V0LmZpbmQoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdLGlucHV0W3R5cGU9XCJlbWFpbFwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS52YWwoKSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2lucHV0LWVycm9yJyk7XHJcbiAgICAgICAgICAgICAgICBuZXh0X3N0ZXAgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2lucHV0LWVycm9yJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKG5leHRfc3RlcCkge1xyXG4gICAgICAgICAgICBwYXJlbnRfZmllbGRzZXQuZmFkZU91dCg0MDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykubmV4dCgpLmZhZGVJbigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gcHJldmlvdXMgc3RlcFxyXG4gICAgJGZvcm0uZmluZCgnLmJ0bi1wcmV2aW91cycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBzdGF0ZS51c2VybmFtZSA9IFsuLi5uZXcgU2V0KHN0YXRlLnVzZXJuYW1lKV07XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCdmaWVsZHNldCcpLmZhZGVPdXQoNDAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucHJldigpLmZhZGVJbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gc3BlZWQgcmFkaW8tYnRuIGdyb3VwXHJcbiAgICAkKCcuanNfZm9sbG93LXNwZWVkIGlucHV0W3R5cGU9cmFkaW9dJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIGNvbnN0IHZhbHVlID0gJCh0aGlzKS5hdHRyKCd2YWx1ZScpO1xyXG4gICAgICAgIC8vIHN0YXRlLnVzZXJfZGVmYXVsdF9jb25maWcgPSB7XHJcbiAgICAgICAgLy8gICAgIHRhc2tfbW9kZTogdmFsdWUudG9VcHBlckNhc2UoKVxyXG4gICAgICAgIC8vIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBzdWJtaXRcclxuICAgICRmb3JtLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICQodGhpcykuZmluZCgnaW5wdXRbdHlwZT1cInRleHRcIl0saW5wdXRbdHlwZT1cIm51bWJlclwiXSxpbnB1dFt0eXBlPVwiZW1haWxcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCQodGhpcykudmFsKCkgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdpbnB1dC1lcnJvcicpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaW5wdXQtZXJyb3InKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAob25TdWJtaXRIYW5kbGVyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCcqKm91dGVyIG9uU3VibWl0SGFuZGxlcioqJyk7XHJcbiAgICAgICAgICAgIG9uU3VibWl0SGFuZGxlcihlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTdWJtaXRIYW5kbGVyIEVORCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gYWxlcnQgY2xvc2VcclxuICAgICQoJy5mb3JtLXN1Ym1pdC1maW5pc2ggLmNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdmb3JtLXN1Ym1pdC1maW5pc2ggLmNsb3NlJyk7XHJcbiAgICAgICAgLy8gJCh0aGlzKS5jbG9zZXN0KCdmb3JtLXN1Ym1pdC1maW5pc2gnKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpO1xyXG4gICAgICAgIC8vICQoJyN2LXBpbGxzLXJ1bm5lZC10YWInKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgIC8vIHdpbmRvdy5QdWJTdWIucHVibGlzaChDT05TVC5ldmVudHMudGFza3MuTkVXX1RBU0tfQ1JFQVRFRCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLypcclxuZnVuY3Rpb24gZml4U3RlcEluZGljYXRvcihuKSB7XHJcbiAgICAvLyBUaGlzIGZ1bmN0aW9uIHJlbW92ZXMgdGhlIFwiYWN0aXZlXCIgY2xhc3Mgb2YgYWxsIHN0ZXBzLi4uXHJcbiAgICB2YXIgaSwgeCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzdGVwXCIpO1xyXG4gICAgZm9yIChpID0gMDsgaSA8IHgubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB4W2ldLmNsYXNzTmFtZSA9IHhbaV0uY2xhc3NOYW1lLnJlcGxhY2UoXCIgYWN0aXZlXCIsIFwiXCIpO1xyXG4gICAgfVxyXG4gICAgLy8uLi4gYW5kIGFkZHMgdGhlIFwiYWN0aXZlXCIgY2xhc3Mgb24gdGhlIGN1cnJlbnQgc3RlcDpcclxuICAgIHhbbl0uY2xhc3NOYW1lICs9IFwiIGFjdGl2ZVwiO1xyXG59Ki9cclxuXHJcbmZ1bmN0aW9uIG1vZGlmeUFjY0xpc3QoKSB7XHJcbiAgICBjb25zdCByYWRpb0J0bkFwcGVuZCA9IChpZHgpID0+IGA8ZGl2IGNsYXNzPVwiXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwidXNlckFjY291bnRSYWRpb1wiIGlkPVwiY3VzdG9tUmFkaW8tJHtpZHh9XCIgY2xhc3M9XCJjdXN0b20tY29udHJvbC1pbnB1dCBkLW5vbmVcIiB2YWx1ZT1cIlwiPlxyXG4gICAgICAgIDwvZGl2PmA7XHJcbiAgICBjb25zdCByYWRpb0J0bldyYXAgPSAoaWR4KSA9PiBgPGxhYmVsIGNsYXNzPVwiYWNjb3VudHMtbGlzdC0tbGFiZWwtd3JhcHBlciBjb2wgbWItMCBtZWRpYSBweS0zXCIgZm9yPVwiY3VzdG9tUmFkaW8tJHtpZHh9XCI+PC9sYWJlbD5gO1xyXG4gICAgY29uc3QgJGFjY291bnRzTGlzdCA9ICQoJy5hY2NvdW50cy1saXN0Jyk7XHJcbiAgICBjb25zdCAkbGkgPSAkYWNjb3VudHNMaXN0LmZpbmQoJ2xpLm1lZGlhJyk7XHJcbiAgICAkbGkuYWRkQ2xhc3MoJ2pzX3VzZXItcmFkaW8nKS5yZW1vdmVDbGFzcygncHktMyBtZWRpYScpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgJGxpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgJCgkbGlbaV0pLndyYXBJbm5lcihyYWRpb0J0bldyYXAoaSkpLmFwcGVuZChyYWRpb0J0bkFwcGVuZChpKSk7XHJcbiAgICB9XHJcbiAgICAvLyBVc2VyVGFza01hbmFnZXIuZ2V0VGFza1R5cGVzKCkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAvLyAgICAgaWYgKHJlc3VsdC5zdGF0dXMuc3RhdGUgPT09ICdvaycpIHtcclxuICAgIC8vICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgIC8vICAgICAgICAgZmlsbExpc3RUeXBlcygkKCcuanNfdGFzay10eXBlcycpLCByZXN1bHQuZGF0YSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgJCgnLmpzX3VzZXItcmFkaW8nKS5vbignY2xpY2snLCAnaW5wdXRbdHlwZT1yYWRpb10nLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGNvbnN0ICRwYXJlbnRGaWVsZHNldCA9ICQodGhpcykucGFyZW50cygnZmllbGRzZXQnKTtcclxuICAgICAgICAkKCdsaS5hY3RpdmUnLCAkcGFyZW50RmllbGRzZXQpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ2xpJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy5idG4tbmV4dCcsICRwYXJlbnRGaWVsZHNldCkucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyAkKCcuY2hlY2tib3gtY2VsbCcpLm9uKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCd2YWxpZGF0ZScpO1xyXG4gICAgLy8gICAgIC8vIHVwZGF0ZVN0YXR1cygpO1xyXG4gICAgLy8gfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0KHdpemFyZENmZykge1xyXG4gICAgaWYgKCQoJy53aXphcmQtZm9ybScpLmxlbmd0aCkge1xyXG4gICAgICAgIGluaXRTdGVwcygnLndpemFyZC1mb3JtJywgd2l6YXJkQ2ZnKTtcclxuICAgICAgICB3aW5kb3cuUHViU3ViLnN1YnNjcmliZShDT05TVC5ldmVudHMuaW5zdGFncmFtQWNjb3Vucy5JTlNUQUdSQU1fQUNDT1VOU19SRU5ERVJFRCwgKGV2ZW50TmFtZSwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBtb2RpZnlBY2NMaXN0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy93aXphcmQtZm9ybS93aXphcmQtZm9ybS5qcyIsIi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCB7Q09OU1R9IGZyb20gJy4vY29uc3RzJztcclxuaW1wb3J0IE5ldHdvcmsgZnJvbSAnLi9uZXR3b3JrJztcclxuaW1wb3J0IENvb2tpZVN0b3JhZ2UgZnJvbSAnLi9jb29raWUnO1xyXG5cclxuY2xhc3MgVXNlckNvbnZlcnNhdGlvbiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5uZXR3b3JrID0gbmV3IE5ldHdvcmsoKTtcclxuICAgICAgICB0aGlzLmNvb2tpZVN0b3JhZ2UgPSBDb29raWVTdG9yYWdlO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ1Bvc3QgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBpc0xvZ2dlZEluKCkge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMuZ2V0VG9rZW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0VtYWlsQ29uZmlybWVkKCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5jb29raWVTdG9yYWdlLmdldChDT05TVC5jb29raWVTdG9yYWdlLmVtYWlsQ29uZmlybWVkKSA9PT0gJ2NvbmZpcm1lZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRva2VuKCkge1xyXG4gICAgICAgIGNvbnN0IGNvb2tpZVRva2VuID0gdGhpcy5jb29raWVTdG9yYWdlLmdldChDT05TVC5jb29raWVTdG9yYWdlLnRva2VuKTtcclxuICAgICAgICByZXR1cm4gY29va2llVG9rZW47XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWV0YWRhdGEodG9rZW4sIGNiRXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KGAke0NPTlNULmdldFBhdGgoJ2luc3RhZ3JhbURpcmVjdF9nZXRNZXRhRGF0YScpfWAsIHtoZWFkZXJzOiB7dG9rZW59fSwgY2JFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWV0YWRhdGFEZXRhaWxDb252ZXJzYXRpb24odG9rZW4sIGRldGFpbHMsIGNiRXJyb3IpIHtcclxuICAgICAgICBjb25zdCBjdXJzb3IgPSAoZGV0YWlscy5jdXJzb3IpID8gYD9jdXJzb3I9JHtkZXRhaWxzLmN1cnNvcn1gIDogJyc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChgJHtDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1EaXJlY3RfZ2V0TWV0YURhdGEnKX0vJHtkZXRhaWxzLnVzZXJuYW1lfS8ke2RldGFpbHMuY29udmVyc2F0aW9uSWR9JHtjdXJzb3J9YCxcclxuICAgICAgICAgICAge2hlYWRlcnM6IHt0b2tlbn19LCBjYkVycm9yKTtcclxuICAgIH1cclxuICAgIHBvc3RNZXRhZGF0YURldGFpbENvbnZlcnNhdGlvbih0b2tlbiwgZGV0YWlscywgY2JFcnJvcikge1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSB7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsndmFsdWUnOiBkZXRhaWxzLnZhbHVlfSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QuaGVhZGVycyxcclxuICAgICAgICAgICAgICAgICd0b2tlbic6IHRoaXMuZ2V0VG9rZW4oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KGAke0NPTlNULmdldFBhdGgoJ2luc3RhZ3JhbURpcmVjdF9wb3N0TWVzc2FnZScpfS8ke2RldGFpbHMudXNlcm5hbWV9LyR7ZGV0YWlscy5jb252ZXJzYXRpb25JZH0vdGV4dGAsXHJcbiAgICAgICAgICAgIHNldHRpbmcsIGNiRXJyb3IpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxubGV0IHVzZXJJbnN0YW5jZSA9IG51bGw7XHJcblxyXG5pZiAoIXVzZXJJbnN0YW5jZSkge1xyXG4gICAgdXNlckluc3RhbmNlID0gbmV3IFVzZXJDb252ZXJzYXRpb24oKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlckluc3RhbmNlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uL2pzLXNlcnZpY2VzL2FwaS11c2VyLWRpcmVjdC5qcyIsIi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbi8vIGltcG9ydCB7Q09OU1R9IGZyb20gJy4vY29uc3RzJztcclxuLy8gaW1wb3J0IE5ldHdvcmsgZnJvbSAnLi9uZXR3b3JrJztcclxuLy8gaW1wb3J0IENvb2tpZVN0b3JhZ2UgZnJvbSAnLi9jb29raWUnO1xyXG4vLyBpbXBvcnQgUHViU3ViIGZyb20gJ3B1YnN1Yi1qcyc7IC8vIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3B1YnN1Yi1qc1xyXG5cclxuLy8gY29uc3QgU1BJTk5FUl9CQVNFX1RFTVBBTEFURSA9ICdqcy91aS90cGwvc3Bpbm5lci5oYnMnO1xyXG5jb25zdCBjbGFzc2VzID0ge1xyXG4gICAgaW5saW5lOiAnZ2xvYmFsLWlubGluZS1zcGlubmVyJyxcclxuICAgIG92ZXJsYXk6ICdnbG9iYWwtb3ZlcmxheS1zcGlubmVyJyxcclxuICAgIGZpeGVkOiAnZ2xvYmFsLWZpeGVkLXNwaW5uZXInLFxyXG4gICAgYnV0dG9uOiAnYnV0dG9uLS1sb2FkJ1xyXG59O1xyXG4vLyBjb25zdCBoYW5kbGViYXJzVHBsID0gZnVuY3Rpb24gKG5hbWUsIGRhdGEsICR0YXJnZXQpIHtcclxuLy8gICAgIC8vIHZhciBodG1sID0gdGhpcy5nZXRUZW1wbGF0ZShuYW1lKShkYXRhKTtcclxuLy8gICAgIHZhciBodG1sID0gSGFuZGxlYmFycy5jb21waWxlKHRlbXBsYXRlKTtcclxuLy9cclxuLy8gICAgIGlmICgkdGFyZ2V0KSB7XHJcbi8vICAgICAgICAgLy9mb3IgcHJldmVudGluZyB4c3NcclxuLy8gICAgICAgICAkdGFyZ2V0WzBdLmlubmVySFRNTCA9IGh0bWw7XHJcbi8vICAgICB9XHJcbi8vXHJcbi8vICAgICByZXR1cm4gaHRtbDtcclxuLy8gfTtcclxuLy8gY29uc3QgaGFuZGxlYmFycyA9IHRoaXMuZ2V0U2VydmljZSgnY29yZS50ZW1wbGF0aW5nLmhhbmRsZWJhcnMnKTtcclxuXHJcbmNsYXNzIFNwaW5uZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKF9jZmcpIHtcclxuICAgICAgICB0aGlzLmNmZyA9IF9jZmcgfHwge307XHJcbiAgICAgICAgLy8gdGhpcy4kZGVmYXVsdENvbnRhaW5lciA9ICQoJ2JvZHknKTtcclxuICAgICAgICAkLmV4dGVuZChjbGFzc2VzLCB0aGlzLmNmZy5jbGFzc2VzKTtcclxuICAgICAgICAvLyB0aGlzLl9tZWRpYXRvci5zdWJzY3JpYmUoQ09OU1QuZXZlbnRzLlNUT1BfRklYRURfU1BJTk5FUiwgdGhpcy5zdG9wRml4ZWRTcGlubmVyLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG4gICAgLy8gX21lZGlhdG9yID0gUHViU3ViO1xyXG5cclxuICAgIHN0YXJ0KCRlbCwgcHJld0Nscykge1xyXG4gICAgICAgIC8vIGlmIChhZGRPclJlbW92ZSkge1xyXG4gICAgICAgIC8vICAgICAkKCcjZm9vJykuYWRkQ2xhc3MoY2xhc3NOYW1lKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICQoJyNmb28nKS5yZW1vdmVDbGFzcyhjbGFzc05hbWUpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAkZWwuZmluZCgnaScpLnRvZ2dsZUNsYXNzKHByZXdDbHMpLmFkZENsYXNzKCdmYS1zcGluIGZhLXNwaW5uZXInKTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wKCRlbCwgbmV3Q2xzKSB7XHJcbiAgICAgICAgJGVsLmZpbmQoJ2knKS50b2dnbGVDbGFzcyhuZXdDbHMpLnJlbW92ZUNsYXNzKCdmYS1zcGluIGZhLXNwaW5uZXInKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGQoJGVsLCBuZXdDbHMpIHtcclxuICAgICAgICB0aGlzLiRlbCA9ICRlbDtcclxuICAgICAgICAkZWwucHJlcGVuZChgPGRpdiBjbGFzcz1cInNwaW5uZXItYm94IGp1c3RpZnktY29udGVudC1jZW50ZXIgJHtuZXdDbHN9XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGluLWFuaW1hdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBkYXRhLXByZWZpeD1cImZhclwiIGRhdGEtaWNvbj1cInN5bmMtYWx0XCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiBjbGFzcz1cInN2Zy1pbmxpbmUtLWZhIGZhLXN5bmMtYWx0IGZhLXctMTYgZmEtZncgZmEtMnhcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk00ODMuNTE1IDI4LjQ4NUw0MzEuMzUgODAuNjVDMzg2LjQ3NSAzNS43NjcgMzI0LjQ4NSA4IDI1NiA4IDEyMy4yMjggOCAxNC44MjQgMTEyLjMzOCA4LjMxIDI0My40OTMgNy45NzEgMjUwLjMxMSAxMy40NzUgMjU2IDIwLjMwMSAyNTZoMjguMDQ1YzYuMzUzIDAgMTEuNjEzLTQuOTUyIDExLjk3My0xMS4yOTRDNjYuMTYxIDE0MS42NDkgMTUxLjQ1MyA2MCAyNTYgNjBjNTQuMTYzIDAgMTAzLjE1NyAyMS45MjMgMTM4LjYxNCA1Ny4zODZsLTU0LjEyOCA1NC4xMjljLTcuNTYgNy41Ni0yLjIwNiAyMC40ODUgOC40ODUgMjAuNDg1SDQ5MmM2LjYyNyAwIDEyLTUuMzczIDEyLTEyVjM2Ljk3MWMwLTEwLjY5MS0xMi45MjYtMTYuMDQ1LTIwLjQ4NS04LjQ4NnpNNDkxLjY5OSAyNTZoLTI4LjA0NWMtNi4zNTMgMC0xMS42MTMgNC45NTItMTEuOTczIDExLjI5NEM0NDUuODM5IDM3MC4zNTEgMzYwLjU0NyA0NTIgMjU2IDQ1MmMtNTQuMTYzIDAtMTAzLjE1Ny0yMS45MjMtMTM4LjYxNC01Ny4zODZsNTQuMTI4LTU0LjEyOWM3LjU2LTcuNTYgMi4yMDYtMjAuNDg1LTguNDg1LTIwLjQ4NUgyMGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnYxNDMuMDI5YzAgMTAuNjkxIDEyLjkyNiAxNi4wNDUgMjAuNDg1IDguNDg1TDgwLjY1IDQzMS4zNUMxMjUuNTI1IDQ3Ni4yMzMgMTg3LjUxNiA1MDQgMjU2IDUwNGMxMzIuNzczIDAgMjQxLjE3Ni0xMDQuMzM4IDI0Ny42OS0yMzUuNDkzLjMzOS02LjgxOC01LjE2NS0xMi41MDctMTEuOTkxLTEyLjUwN3pcIiBjbGFzcz1cIlwiPjwvcGF0aD48L3N2Zz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKCkge1xyXG4gICAgICAgIHRoaXMuJGVsLmZpbmQoJy5zcGlubmVyLWJveCcpLnJlbW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBzcGlubmVyIGljb24gb24gYnV0dG9uIGJlZm9yZSB0aGUgYnV0dG9uIHRleHRcclxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkZWxcclxuICAgICAqL1xyXG4gICAgc3RhcnRCdXR0b25TcGlubmVyID0gZnVuY3Rpb24gKCRlbCwgbmV3Q2xzKSB7XHJcbiAgICAgICAgJGVsLmFkZENsYXNzKGNsYXNzZXMuYnV0dG9uKTtcclxuICAgICAgICAkZWwucHJlcGVuZChgPGRpdiBjbGFzcz1cInNwaW5uZXItYm94IHNwaW5uZXItYm94LS1idXR0b24ganVzdGlmeS1jb250ZW50LWNlbnRlciBwb3NpdGlvbi1yZWxhdGl2ZSBwLTAgbS0wIGJnLXRyYW5zcGFyZW50ICR7bmV3Q2xzfVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3Bpbi1hbmltYXRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZGF0YS1wcmVmaXg9XCJmYXJcIiBkYXRhLWljb249XCJzeW5jLWFsdFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmYS1md1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTQ4My41MTUgMjguNDg1TDQzMS4zNSA4MC42NUMzODYuNDc1IDM1Ljc2NyAzMjQuNDg1IDggMjU2IDggMTIzLjIyOCA4IDE0LjgyNCAxMTIuMzM4IDguMzEgMjQzLjQ5MyA3Ljk3MSAyNTAuMzExIDEzLjQ3NSAyNTYgMjAuMzAxIDI1NmgyOC4wNDVjNi4zNTMgMCAxMS42MTMtNC45NTIgMTEuOTczLTExLjI5NEM2Ni4xNjEgMTQxLjY0OSAxNTEuNDUzIDYwIDI1NiA2MGM1NC4xNjMgMCAxMDMuMTU3IDIxLjkyMyAxMzguNjE0IDU3LjM4NmwtNTQuMTI4IDU0LjEyOWMtNy41NiA3LjU2LTIuMjA2IDIwLjQ4NSA4LjQ4NSAyMC40ODVINDkyYzYuNjI3IDAgMTItNS4zNzMgMTItMTJWMzYuOTcxYzAtMTAuNjkxLTEyLjkyNi0xNi4wNDUtMjAuNDg1LTguNDg2ek00OTEuNjk5IDI1NmgtMjguMDQ1Yy02LjM1MyAwLTExLjYxMyA0Ljk1Mi0xMS45NzMgMTEuMjk0QzQ0NS44MzkgMzcwLjM1MSAzNjAuNTQ3IDQ1MiAyNTYgNDUyYy01NC4xNjMgMC0xMDMuMTU3LTIxLjkyMy0xMzguNjE0LTU3LjM4Nmw1NC4xMjgtNTQuMTI5YzcuNTYtNy41NiAyLjIwNi0yMC40ODUtOC40ODUtMjAuNDg1SDIwYy02LjYyNyAwLTEyIDUuMzczLTEyIDEydjE0My4wMjljMCAxMC42OTEgMTIuOTI2IDE2LjA0NSAyMC40ODUgOC40ODVMODAuNjUgNDMxLjM1QzEyNS41MjUgNDc2LjIzMyAxODcuNTE2IDUwNCAyNTYgNTA0YzEzMi43NzMgMCAyNDEuMTc2LTEwNC4zMzggMjQ3LjY5LTIzNS40OTMuMzM5LTYuODE4LTUuMTY1LTEyLjUwNy0xMS45OTEtMTIuNTA3elwiIGNsYXNzPVwiXCI+PC9wYXRoPjwvc3ZnPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5gKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgc3Bpbm5lciBpY29uIGZyb20gYnV0dG9uXHJcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJGVsXHJcbiAgICAgKi9cclxuICAgIHN0b3BCdXR0b25TcGlubmVyID0gZnVuY3Rpb24gKCRlbCkge1xyXG4gICAgICAgICRlbC5yZW1vdmVDbGFzcyhjbGFzc2VzLmJ1dHRvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGaW5kcyBzcGlubmVyc1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAkY29udGFpbmVyXHJcbiAgICAgKiBAcmV0dXJuIHs/alF1ZXJ5fSBzcGlubmVyc1xyXG4gICAgICovXHJcbiAgICAvLyBfZmluZFNwaW5uZXIgPSBmdW5jdGlvbiAodHlwZSwgJGNvbnRhaW5lcikge1xyXG4gICAgLy8gICAgIGNvbnN0IHNlbGVjdG9yID0gJy4nICsgdHlwZTtcclxuICAgIC8vICAgICBsZXQgJGVsID0gdGhpcy4kZGVmYXVsdENvbnRhaW5lcjtcclxuICAgIC8vICAgICBpZiAoJGNvbnRhaW5lcikge1xyXG4gICAgLy8gICAgICAgICAkZWwgPSAkY29udGFpbmVyO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vXHJcbiAgICAvLyAgICAgaWYgKCRlbC5maW5kKHNlbGVjdG9yKS5sZW5ndGggPiAwKSB7XHJcbiAgICAvLyAgICAgICAgIHJldHVybiAkZWwuZmluZChzZWxlY3Rvcik7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gJGVsXHJcbiAgICAgKi9cclxuICAgIC8qXHJcbiAgICBzdGFydENvbnRlbnRTcGlubmVyID0gZnVuY3Rpb24gKCRlbCkge1xyXG4gICAgICAgIGNvbnN0IGh0bWwgPSBoYW5kbGViYXJzVHBsKFxyXG4gICAgICAgICAgICBTUElOTkVSX0JBU0VfVEVNUEFMQVRFLCB7XHJcbiAgICAgICAgICAgICAgICBpbWdTcmM6IENUQy5VUkxTLldBSVRJTkdfSU1BR0UsXHJcbiAgICAgICAgICAgICAgICAnY2xhc3MnOiBjbGFzc2VzLm92ZXJsYXlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgJGVsLnByZXBlbmQoaHRtbCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXJ0SW5saW5lQ29udGVudFNwaW5uZXIgPSBmdW5jdGlvbiAoJGVsKSB7XHJcbiAgICAgICAgY29uc3QgaHRtbCA9IGhhbmRsZWJhcnNUcGwoXHJcbiAgICAgICAgICAgIFNQSU5ORVJfQkFTRV9URU1QQUxBVEUsIHtcclxuICAgICAgICAgICAgICAgIGltZ1NyYzogQ1RDLlVSTFMuV0FJVElOR19JTUFHRSxcclxuICAgICAgICAgICAgICAgICdjbGFzcyc6IGNsYXNzZXMuaW5saW5lXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICRlbC5wcmVwZW5kKGh0bWwpO1xyXG4gICAgfTtcclxuICAgICovXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdGFydHMgZ2xvYmFsIGZ1bGwgcGFnZSBmaXhlZCBzcGlubmVyXHJcbiAgICAgKi9cclxuICAgIC8qXHJcbiAgICBzdGFydEZpeGVkU3Bpbm5lciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBzcGlubmVycyA9IHRoaXMuX2ZpbmRTcGlubmVyKGNsYXNzZXMuZml4ZWQpO1xyXG4gICAgICAgIGlmICghKENUQy5pc0VkaXQoKSB8fCBDVEMuaXNEZXNpZ24oKSkgJiYgIXNwaW5uZXJzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGh0bWwgPSBoYW5kbGViYXJzVHBsKFxyXG4gICAgICAgICAgICAgICAgU1BJTk5FUl9CQVNFX1RFTVBBTEFURSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGltZ1NyYzogQ1RDLlVSTFMuV0FJVElOR19JTUFHRSxcclxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiBjbGFzc2VzLmZpeGVkXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy4kZGVmYXVsdENvbnRhaW5lci5wcmVwZW5kKGh0bWwpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAqL1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RvcHMgc3Bpbm5lcnNcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gJGNvbnRhaW5lclxyXG4gICAgICovXHJcbiAgICAvLyBfc3RvcFNwaW5uZXIgPSBmdW5jdGlvbiAodHlwZSwgJGNvbnRhaW5lcikge1xyXG4gICAgLy8gICAgIGNvbnN0IHNwaW5uZXJzID0gdGhpcy5fZmluZFNwaW5uZXIodHlwZSwgJGNvbnRhaW5lcik7XHJcbiAgICAvLyAgICAgaWYgKHNwaW5uZXJzKSB7XHJcbiAgICAvLyAgICAgICAgIHNwaW5uZXJzLnJlbW92ZSgpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9ICRlbFxyXG4gICAgICovXHJcbiAgICAvLyBzdG9wQ29udGVudFNwaW5uZXIgPSBmdW5jdGlvbiAoJGVsKSB7XHJcbiAgICAvLyAgICAgJGVsLmZpbmQoJy4nICsgY2xhc3Nlcy5vdmVybGF5KS5yZW1vdmUoKTtcclxuICAgIC8vIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9ICRlbFxyXG4gICAgICovXHJcbiAgICAvLyBzdG9wSW5saW5lQ29udGVudFNwaW5uZXIgPSBmdW5jdGlvbiAoJGVsKSB7XHJcbiAgICAvLyAgICAgJGVsLmZpbmQoJy4nICsgY2xhc3Nlcy5pbmxpbmUpLnJlbW92ZSgpO1xyXG4gICAgLy8gfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0b3BzIGdsb2JhbCBmdWxsIHBhZ2UgZml4ZWQgc3Bpbm5lclxyXG4gICAgICovXHJcbiAgICAvLyBzdG9wRml4ZWRTcGlubmVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gICAgIHRoaXMuX3N0b3BTcGlubmVyKGNsYXNzZXMuZml4ZWQpO1xyXG4gICAgLy8gfTtcclxufVxyXG5cclxubGV0IHNwaW5uZXJJbnN0YW5jZSA9IG51bGw7XHJcblxyXG5pZiAoIXNwaW5uZXJJbnN0YW5jZSkge1xyXG4gICAgc3Bpbm5lckluc3RhbmNlID0gbmV3IFNwaW5uZXIoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3Bpbm5lckluc3RhbmNlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uL2pzLXNlcnZpY2VzL3NwaW5uZXIuanMiLCIvKiBlc2xpbnQtZGlzYWJsZSBzb3J0LXZhcnMgKi9cclxuLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3VzZXInO1xyXG5pbXBvcnQgUHViU3ViIGZyb20gJ3B1YnN1Yi1qcyc7IC8vIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3B1YnN1Yi1qc1xyXG5pbXBvcnQgY29va2llU3RvcmFnZSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29va2llJztcclxuLy8gaW1wb3J0IFZhbGlkYXRvciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvZm9ybS12YWxpZGF0b3InO1xyXG5pbXBvcnQgdmlld1V0aWxzIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy92aWV3JztcclxuaW1wb3J0IHtDT05TVH0gZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2NvbnN0cyc7XHJcblxyXG4vLyB3aW5kb3cuJCA9ICQ7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTG9naW5QYWdlKHNlbGVjdG9yQ3NzKSB7XHJcbiAgICBjb25zdCB7X2Zvcm1JZCwgX2J1dHRvblN1Ym1pdElkLCBfbG9naW5Cb3h9ID0gc2VsZWN0b3JDc3M7XHJcbiAgICBjb25zdCB1c2VyID0gVXNlciwgLy8gc2VydmljZVxyXG4gICAgICAgICRmb3JtID0gJChfZm9ybUlkKSxcclxuICAgICAgICAkZW1haWwgPSAkZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwibWFpbFwiXScpLFxyXG4gICAgICAgICR0ZXh0QXJlYURlc2NyaXB0aW9uID0gJCgnI2Rlc2NyaXB0aW9uJyk7XHJcbiAgICAvLyBjb25zdCBvcGVuZWRDbGFzcyA9ICdkLWJsb2NrJztcclxuICAgIC8vIGNvbnN0IGNsb3NlQ2xhc3MgPSAnZC1ub25lJztcclxuXHJcbiAgICBjb25zdCB1c2VyTG9naW5IZWFkZXIgPSAoX2Zvcm1EYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2JFcnJvciA9IChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgJChfbG9naW5Cb3gpLmFwcGVuZCgnPHA+cmVzdWx0LnN0YXR1cy5tZXNzYWdlPC9wPicpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiB1c2VyLmxvZ2luKF9mb3JtRGF0YSwgY2JFcnJvcilcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuZGF0YSAmJiByZXN1bHQuZGF0YS50b2tlbikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNhdmUgdGhlIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBjb29raWVTdG9yYWdlLnNldChDT05TVC5jb29raWVTdG9yYWdlLnRva2VuLCByZXN1bHQuZGF0YS50b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLm5hdi1saW5rLmpzX2xvZ091dCcpLnBhcmVudCgpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmVxdWVzdCBzdWNjZWVkZWQgd2l0aCBKU09OIHJlc3BvbnNlJywgcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKCR0ZXh0QXJlYURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLm1lc3NhZ2UgfHwgJ0xvZ2luIHN1Y2NzZXNzJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UodGhpcy4kdGV4dEFyZWFEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYDxwPnN0YXR1czogJHtyZXN1bHQuc3RhdHVzLnN0YXRlfTwvcD48cD4gbWVzc2FnZTogJHtyZXN1bHQuc3RhdHVzLm1lc3NhZ2V9PC9wPmApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSgkdGV4dEFyZWFEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5tZXNzYWdlIHx8ICdMb2dpbiBlcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc3VibWl0Rm9ybSA9IGZ1bmN0aW9uKGZvcm1EYXRhT2JqKSB7XHJcbiAgICAgICAgY29uc3QgZW1haWwgPSAkZW1haWwudmFsKCksXHJcbiAgICAgICAgICAgIHBhc3N3b3JkID0gJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cInBhc3NcIl0nKS52YWwoKSxcclxuICAgICAgICAgICAgX2Zvcm1EYXRhID0gZm9ybURhdGFPYmogfHwge2VtYWlsLCBwYXNzd29yZH07XHJcblxyXG4gICAgICAgIGlmIChzZWxlY3RvckNzcy5pc0xvZ2luSW5zdGFncmFtKSB7XHJcbiAgICAgICAgICAgIC8vIHRvZG86IGRlbGV0ZSBtZVxyXG4gICAgICAgICAgICAvLyBhZGRJbnN0YWdyYW1BY2NvdW50KHt1c2VybmFtZTogJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cInVzZXJuYW1lXCJdJykudmFsKCksIHBhc3N3b3JkfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGVtYWlsLnZhbCgkZW1haWwudmFsKCkudG9Mb2NhbGVMb3dlckNhc2UoKSk7XHJcbiAgICAgICAgICAgIHVzZXJMb2dpbkhlYWRlcihfZm9ybURhdGEpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gUHViU3ViLnB1Ymxpc2goQ09OU1QuZXZlbnRzLlVTRVJfTE9HR0VELCAnbG9naW4nKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9pbnN0YWdyYW0taW50ZWdyYXRpb24vaW5zdGFncmFtLWFjY291bnRzLmh0bWwnO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGxvZ091dCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvb2tpZVN0b3JhZ2UucmVtb3ZlKENPTlNULmNvb2tpZVN0b3JhZ2UudG9rZW4pO1xyXG4gICAgICAgIFB1YlN1Yi5wdWJsaXNoKENPTlNULmV2ZW50cy5VU0VSX0xPR09VVCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGJpbmRFdmVudHMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyBjb25zdCAkc2hvd0xvZ2luQm94QnRuSWQgPSAkKF9zaG93TG9naW5Cb3hCdG5JZCk7XHJcbiAgICAgICAgY29uc3QgJGxvZ2luQm94ID0gJChfbG9naW5Cb3gpO1xyXG4gICAgICAgIGNvbnN0IG9wZW5lZENsYXNzID0gJ2QtYmxvY2snO1xyXG4gICAgICAgIGNvbnN0IGNsb3NlQ2xhc3MgPSAnZC1ub25lJztcclxuXHJcbiAgICAgICAgLy8gJHNob3dMb2dpbkJveEJ0bklkLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAvLyAgICAgaWYgKCFzZWxlY3RvckNzcy5pc0xvZ2luSW5zdGFncmFtKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAkbG9naW5Cb3guY3NzKHsndG9wJzogMCwgJ3JpZ2h0JzogMH0pXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLmFkZENsYXNzKCdiZy1saWdodCBib3JkZXIgbXQtNSBteC1hdXRvIHBvc2l0aW9uLWFic29sdXRlJyk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgJGxvZ2luQm94LmFkZENsYXNzKG9wZW5lZENsYXNzKS5yZW1vdmVDbGFzcyhjbG9zZUNsYXNzKTtcclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgJGJ1dHRvblN1Ym1pdCA9ICQoX2J1dHRvblN1Ym1pdElkKSxcclxuICAgICAgICAgICAgY3NzVmFsaWRhdGlvbkNsYXNzID0gJ2Zvcm0tdmFsaWRhdGlvbic7XHJcblxyXG4gICAgICAgICRidXR0b25TdWJtaXQub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zdCBmb3JtID0gJGZvcm0uZ2V0KDApO1xyXG4gICAgICAgICAgICAvLyBjb25zdCB2YWxpZGF0b3IgPSBuZXcgVmFsaWRhdG9yKCRmb3JtKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codmlld1V0aWxzLCB2aWV3VXRpbHMuaXNFbWFpbCgkZW1haWwudmFsKCkpKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChmb3JtLmNoZWNrVmFsaWRpdHkoKSAmJiB2aWV3VXRpbHMuaXNFbWFpbCgkZW1haWwudmFsKCkpKSB7XHJcbiAgICAgICAgICAgICAgICBzdWJtaXRGb3JtKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBIaWdobGlnaHQgZXJyb3JzXHJcbiAgICAgICAgICAgICAgICBpZiAoZm9ybS5yZXBvcnRWYWxpZGl0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm0ucmVwb3J0VmFsaWRpdHkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICRmb3JtLmFkZENsYXNzKGNzc1ZhbGlkYXRpb25DbGFzcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLm5hdi1saW5rLmpzX2xvZ091dCcpLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgbG9nT3V0KCk7XHJcbiAgICAgICAgICAgICQoZS50YXJnZXQpLnBhcmVudCgpLmhpZGUoKTtcclxuICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSgkdGV4dEFyZWFEZXNjcmlwdGlvbiwgJ0xvZ2dlZCBvdXQnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgUHViU3ViLnN1YnNjcmliZShDT05TVC5ldmVudHMuVVNFUl9MT0dPVVQsIChtc2cpID0+IHtcclxuICAgICAgICAgICAgJChDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJOYXZMb2dpbkJ0bikuYWRkQ2xhc3Mob3BlbmVkQ2xhc3MpLnJlbW92ZUNsYXNzKGNsb3NlQ2xhc3MpOyAvLyAuc2hvdygpO1xyXG4gICAgICAgICAgICAkKENPTlNULnVpU2VsZWN0b3JzLmhlYWRlclJlZ0J0bikuYWRkQ2xhc3Mob3BlbmVkQ2xhc3MpLnJlbW92ZUNsYXNzKGNsb3NlQ2xhc3MpO1xyXG4gICAgICAgICAgICAkKCcubmF2LWxpbmsuanNfbG9nT3V0JykuYWRkQ2xhc3MoY2xvc2VDbGFzcykucmVtb3ZlQ2xhc3Mob3BlbmVkQ2xhc3MpOyAvLyAuaGlkZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RvckxvZ2luU3RhdGUgPSAnLmpzX21lc3NhZ2VfbG9nZ2VkLS10ZXh0JztcclxuICAgICAgICAgICAgJChzZWxlY3RvckxvZ2luU3RhdGUpLnRleHQoJ9CS0Ysg0LLRi9GI0LvQuCDQuNC3INCw0LrQutCw0YPQvdGC0LAnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzTG9naW5CdG5DbGljayA9ICQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCduYXYubmF2YmFyJykuZmluZCgkbG9naW5Cb3gpLmxlbmd0aDtcclxuICAgICAgICAgICAgY29uc3QgaXNBZGRJbnN0YWdyYW1CdG5DbGlja2VkID0gJChldmVudC50YXJnZXQpLmF0dHIoJ2lkJykgPT09IENPTlNULnVpU2VsZWN0b3JzLmluc3RhZ3JhbS5hZGRBY2NvdW50QnRuSWQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWlzTG9naW5CdG5DbGljayAmJiAkbG9naW5Cb3guaGFzQ2xhc3Mob3BlbmVkQ2xhc3MpICYmICFpc0FkZEluc3RhZ3JhbUJ0bkNsaWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICRsb2dpbkJveC5hZGRDbGFzcyhjbG9zZUNsYXNzKS5yZW1vdmVDbGFzcyhvcGVuZWRDbGFzcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgICAgICBpZiAoJCgnLmF1dGgubG9naW4nKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgYmluZEV2ZW50cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGluaXRcclxuICAgIH07XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL19hdXRoL2xvZ2luLXBhZ2UuanMiLCJpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgYnJ1dHVzaW4pd2luZG93LmJydXR1c2luPW5ldyBPYmplY3Q7ZWxzZSBpZihcIm9iamVjdFwiIT10eXBlb2YgYnJ1dHVzaW4pdGhyb3dcImJydXR1c2luIGdsb2JhbCB2YXJpYWJsZSBhbHJlYWR5IGV4aXN0c1wiOyFmdW5jdGlvbigpe1N0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aHx8KFN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aD1mdW5jdGlvbihlLHQpe3JldHVybiB0PXR8fDAsdGhpcy5pbmRleE9mKGUsdCk9PT10fSksU3RyaW5nLnByb3RvdHlwZS5lbmRzV2l0aHx8KFN0cmluZy5wcm90b3R5cGUuZW5kc1dpdGg9ZnVuY3Rpb24oZSx0KXt2YXIgcj10aGlzLnRvU3RyaW5nKCk7KHZvaWQgMD09PXR8fHQ+ci5sZW5ndGgpJiYodD1yLmxlbmd0aCksdC09ZS5sZW5ndGg7dmFyIG49ci5pbmRleE9mKGUsdCk7cmV0dXJuLTEhPT1uJiZuPT09dH0pLFN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXN8fChTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzPWZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7cmV0dXJuLTEhPT1TdHJpbmcucHJvdG90eXBlLmluZGV4T2YuYXBwbHkodGhpcyxhcmd1bWVudHMpfSksU3RyaW5nLnByb3RvdHlwZS5mb3JtYXR8fChTdHJpbmcucHJvdG90eXBlLmZvcm1hdD1mdW5jdGlvbigpe2Zvcih2YXIgZT10aGlzLHQ9MDt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgcj1uZXcgUmVnRXhwKFwiXFxcXHtcIit0K1wiXFxcXH1cIixcImdpXCIpO2U9ZS5yZXBsYWNlKHIsYXJndW1lbnRzW3RdKX1yZXR1cm4gZX0pO3ZhciBCcnV0dXNpbkZvcm1zPW5ldyBPYmplY3Q7QnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcz17dmFsaWRhdGlvbkVycm9yOlwiVmFsaWRhdGlvbiBlcnJvclwiLHJlcXVpcmVkOlwiVGhpcyBmaWVsZCBpcyAqKnJlcXVpcmVkKipcIixpbnZhbGlkVmFsdWU6XCJJbnZhbGlkIGZpZWxkIHZhbHVlXCIsYWRkcHJvcE5hbWVFeGlzdGVudDpcIlRoaXMgcHJvcGVydHkgaXMgYWxyZWFkeSBwcmVzZW50IGluIHRoZSBvYmplY3RcIixhZGRwcm9wTmFtZVJlcXVpcmVkOlwiQSBuYW1lIGlzIHJlcXVpcmVkXCIsbWluSXRlbXM6XCJBdCBsZWFzdCBgezB9YCBpdGVtcyBhcmUgcmVxdWlyZWRcIixtYXhJdGVtczpcIkF0IG1vc3QgYHswfWAgaXRlbXMgYXJlIGFsbG93ZWRcIixwYXR0ZXJuOlwiVmFsdWUgZG9lcyBub3QgbWF0Y2ggcGF0dGVybjogYHswfWBcIixtaW5MZW5ndGg6XCJWYWx1ZSBtdXN0IGJlICoqYXQgbGVhc3QqKiBgezB9YCBjaGFyYWN0ZXJzIGxvbmdcIixtYXhMZW5ndGg6XCJWYWx1ZSBtdXN0IGJlICoqYXQgbW9zdCoqIGB7MH1gIGNoYXJhY3RlcnMgbG9uZ1wiLG11bHRpcGxlT2Y6XCJWYWx1ZSBtdXN0IGJlICoqbXVsdGlwbGUgb2YqKiBgezB9YFwiLG1pbmltdW06XCJWYWx1ZSBtdXN0IGJlICoqZ3JlYXRlciBvciBlcXVhbCB0aGFuKiogYHswfWBcIixleGNsdXNpdmVNaW5pbXVtOlwiVmFsdWUgbXVzdCBiZSAqKmdyZWF0ZXIgdGhhbioqIGB7MH1gXCIsbWF4aW11bTpcIlZhbHVlIG11c3QgYmUgKipsb3dlciBvciBlcXVhbCB0aGFuKiogYHswfWBcIixleGNsdXNpdmVNYXhpbXVtOlwiVmFsdWUgbXVzdCBiZSAqKmxvd2VyIHRoYW4qKiBgezB9YFwiLG1pblByb3BlcnRpZXM6XCJBdCBsZWFzdCBgezB9YCBwcm9wZXJ0aWVzIGFyZSByZXF1aXJlZFwiLG1heFByb3BlcnRpZXM6XCJBdCBtb3N0IGB7MH1gIHByb3BlcnRpZXMgYXJlIGFsbG93ZWRcIix1bmlxdWVJdGVtczpcIkFycmF5IGl0ZW1zIG11c3QgYmUgdW5pcXVlXCIsYWRkSXRlbTpcIkFkZCBpdGVtXCIsXCJ0cnVlXCI6XCJUcnVlXCIsXCJmYWxzZVwiOlwiRmFsc2VcIn0sQnJ1dHVzaW5Gb3Jtcy5kZWNvcmF0b3JzPW5ldyBBcnJheSxCcnV0dXNpbkZvcm1zLmFkZERlY29yYXRvcj1mdW5jdGlvbihlKXtCcnV0dXNpbkZvcm1zLmRlY29yYXRvcnNbQnJ1dHVzaW5Gb3Jtcy5kZWNvcmF0b3JzLmxlbmd0aF09ZX0sQnJ1dHVzaW5Gb3Jtcy5vblJlc29sdXRpb25TdGFydGVkPWZ1bmN0aW9uKGUpe30sQnJ1dHVzaW5Gb3Jtcy5vblJlc29sdXRpb25GaW5pc2hlZD1mdW5jdGlvbihlKXt9LEJydXR1c2luRm9ybXMub25WYWxpZGF0aW9uRXJyb3I9ZnVuY3Rpb24oZSx0KXtlLmZvY3VzKCksZS5jbGFzc05hbWUuaW5jbHVkZXMoXCIgZXJyb3JcIil8fChlLmNsYXNzTmFtZSs9XCIgZXJyb3JcIiksYWxlcnQodCl9LEJydXR1c2luRm9ybXMub25WYWxpZGF0aW9uU3VjY2Vzcz1mdW5jdGlvbihlKXtlLmNsYXNzTmFtZT1lLmNsYXNzTmFtZS5yZXBsYWNlKFwiIGVycm9yXCIsXCJcIil9LEJydXR1c2luRm9ybXMucG9zdFJlbmRlcj1udWxsLEJydXR1c2luRm9ybXMuaW5zdGFuY2VzPW5ldyBBcnJheSxCcnV0dXNpbkZvcm1zLmNyZWF0ZT1mdW5jdGlvbihzY2hlbWEpe2Z1bmN0aW9uIHZhbGlkYXRlRGVwZW5jeU1hcElzQWN5Y2xpYygpe2Z1bmN0aW9uIGUodCxyLG4pe2lmKHIuaGFzT3duUHJvcGVydHkobikpcmV0dXJuIHZvaWQoZXJyb3I9XCJTY2hlbWEgZGVwZW5kZW5jeSBncmFwaCBoYXMgY3ljbGVzXCIpO2lmKHJbbl09bnVsbCwhdC5oYXNPd25Qcm9wZXJ0eShuKSl7dFtuXT1udWxsO3ZhciBhPWRlcGVuZGVuY3lNYXBbbl07aWYoYSlmb3IodmFyIGk9MDtpPGEubGVuZ3RoO2krKyllKHQscixhW2ldKTtkZWxldGUgcltuXX19dmFyIHQ9bmV3IE9iamVjdDtmb3IodmFyIHIgaW4gZGVwZW5kZW5jeU1hcCl0Lmhhc093blByb3BlcnR5KHIpfHxlKHQsbmV3IE9iamVjdCxyKX1mdW5jdGlvbiBhcHBlbmRDaGlsZChlLHQscil7ZS5hcHBlbmRDaGlsZCh0KTtmb3IodmFyIG49MDtuPEJydXR1c2luRm9ybXMuZGVjb3JhdG9ycy5sZW5ndGg7bisrKUJydXR1c2luRm9ybXMuZGVjb3JhdG9yc1tuXSh0LHIpfWZ1bmN0aW9uIGNyZWF0ZVBzZXVkb1NjaGVtYShlKXt2YXIgdD1uZXcgT2JqZWN0O2Zvcih2YXIgciBpbiBlKVwiaXRlbXNcIiE9PXImJlwicHJvcGVydGllc1wiIT09ciYmXCJhZGRpdGlvbmFsUHJvcGVydGllc1wiIT09ciYmKFwicGF0dGVyblwiPT09cj90W3JdPW5ldyBSZWdFeHAoZVtyXSk6dFtyXT1lW3JdKTtyZXR1cm4gdH1mdW5jdGlvbiBnZXREZWZpbml0aW9uKGUpe3ZhciB0PWUuc3BsaXQoXCIvXCIpLHI9cm9vdDtmb3IodmFyIG4gaW4gdClcIjBcIiE9PW4mJihyPXJbdFtuXV0pO3JldHVybiByfWZ1bmN0aW9uIGNvbnRhaW5zU3RyKGUsdCl7Zm9yKHZhciByPTA7cjxlLmxlbmd0aDtyKyspaWYoZVtyXT09dClyZXR1cm4hMDtyZXR1cm4hMX1mdW5jdGlvbiByZW5hbWVSZXF1aXJlZFByb3BldGllcyhlKXtpZihlKWlmKGUuaGFzT3duUHJvcGVydHkoXCJvbmVPZlwiKSlmb3IodmFyIHQgaW4gZS5vbmVPZilyZW5hbWVSZXF1aXJlZFByb3BldGllcyhlLm9uZU9mW3RdKTtlbHNlIGlmKGUuaGFzT3duUHJvcGVydHkoXCIkcmVmXCIpKXt2YXIgcj1nZXREZWZpbml0aW9uKGUuJHJlZik7cmVuYW1lUmVxdWlyZWRQcm9wZXRpZXMocil9ZWxzZSBpZihcIm9iamVjdFwiPT09ZS50eXBlKXtpZihlLnByb3BlcnRpZXMpe2UuaGFzT3duUHJvcGVydHkoXCJyZXF1aXJlZFwiKSYmQXJyYXkuaXNBcnJheShlLnJlcXVpcmVkKSYmKGUucmVxdWlyZWRQcm9wZXJ0aWVzPWUucmVxdWlyZWQsZGVsZXRlIGUucmVxdWlyZWQpO2Zvcih2YXIgbiBpbiBlLnByb3BlcnRpZXMpcmVuYW1lUmVxdWlyZWRQcm9wZXRpZXMoZS5wcm9wZXJ0aWVzW25dKX1pZihlLnBhdHRlcm5Qcm9wZXJ0aWVzKWZvcih2YXIgYSBpbiBlLnBhdHRlcm5Qcm9wZXJ0aWVzKXt2YXIgaT1lLnBhdHRlcm5Qcm9wZXJ0aWVzW2FdOyhpLmhhc093blByb3BlcnR5KFwidHlwZVwiKXx8aS5oYXNPd25Qcm9wZXJ0eShcIiRyZWZcIil8fGkuaGFzT3duUHJvcGVydHkoXCJvbmVPZlwiKSkmJnJlbmFtZVJlcXVpcmVkUHJvcGV0aWVzKGUucGF0dGVyblByb3BlcnRpZXNbYV0pfWUuYWRkaXRpb25hbFByb3BlcnRpZXMmJihlLmFkZGl0aW9uYWxQcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KFwidHlwZVwiKXx8ZS5hZGRpdGlvbmFsUHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShcIm9uZU9mXCIpKSYmcmVuYW1lUmVxdWlyZWRQcm9wZXRpZXMoZS5hZGRpdGlvbmFsUHJvcGVydGllcyl9ZWxzZVwiYXJyYXlcIj09PWUudHlwZSYmcmVuYW1lUmVxdWlyZWRQcm9wZXRpZXMoZS5pdGVtcyl9ZnVuY3Rpb24gcG9wdWxhdGVTY2hlbWFNYXAoZSx0KXt2YXIgcj1jcmVhdGVQc2V1ZG9TY2hlbWEodCk7aWYoci4kaWQ9ZSxzY2hlbWFNYXBbZV09cix0KXtpZih0Lmhhc093blByb3BlcnR5KFwib25lT2ZcIikpe3Iub25lT2Y9bmV3IEFycmF5LHIudHlwZT1cIm9uZU9mXCI7Zm9yKHZhciBuIGluIHQub25lT2Ype3ZhciBhPWUrXCIuXCIrbjtyLm9uZU9mW25dPWEscG9wdWxhdGVTY2hlbWFNYXAoYSx0Lm9uZU9mW25dKX19ZWxzZSBpZih0Lmhhc093blByb3BlcnR5KFwiJHJlZlwiKSl7dmFyIGk9Z2V0RGVmaW5pdGlvbih0LiRyZWYpO2lmKGkpe2lmKHQuaGFzT3duUHJvcGVydHkoXCJ0aXRsZVwiKXx8dC5oYXNPd25Qcm9wZXJ0eShcImRlc2NyaXB0aW9uXCIpKXt2YXIgbz17fTtmb3IodmFyIHMgaW4gaSlvW3NdPWlbc107dC5oYXNPd25Qcm9wZXJ0eShcInRpdGxlXCIpJiYoby50aXRsZT10LnRpdGxlKSx0Lmhhc093blByb3BlcnR5KFwiZGVzY3JpcHRpb25cIikmJihvLmRlc2NyaXB0aW9uPXQuZGVzY3JpcHRpb24pLGk9b31wb3B1bGF0ZVNjaGVtYU1hcChlLGkpfX1lbHNlIGlmKFwib2JqZWN0XCI9PT10LnR5cGUpe2lmKHQucHJvcGVydGllcyl7ci5wcm9wZXJ0aWVzPW5ldyBPYmplY3Q7Zm9yKHZhciBzIGluIHQucHJvcGVydGllcyl7dmFyIGE9ZStcIi5cIitzO3IucHJvcGVydGllc1tzXT1hO3ZhciB1PXQucHJvcGVydGllc1tzXTt0LnJlcXVpcmVkUHJvcGVydGllcyYmKGNvbnRhaW5zU3RyKHQucmVxdWlyZWRQcm9wZXJ0aWVzLHMpP3UucmVxdWlyZWQ9ITA6dS5yZXF1aXJlZD0hMSkscG9wdWxhdGVTY2hlbWFNYXAoYSx1KX19aWYodC5wYXR0ZXJuUHJvcGVydGllcyl7ci5wYXR0ZXJuUHJvcGVydGllcz1uZXcgT2JqZWN0O2Zvcih2YXIgbCBpbiB0LnBhdHRlcm5Qcm9wZXJ0aWVzKXt2YXIgZD1lK1wiW1wiK2wrXCJdXCI7ci5wYXR0ZXJuUHJvcGVydGllc1tsXT1kO3ZhciBwPXQucGF0dGVyblByb3BlcnRpZXNbbF07cC5oYXNPd25Qcm9wZXJ0eShcInR5cGVcIil8fHAuaGFzT3duUHJvcGVydHkoXCIkcmVmXCIpfHxwLmhhc093blByb3BlcnR5KFwib25lT2ZcIik/cG9wdWxhdGVTY2hlbWFNYXAoZCx0LnBhdHRlcm5Qcm9wZXJ0aWVzW2xdKTpwb3B1bGF0ZVNjaGVtYU1hcChkLFNDSEVNQV9BTlkpfX1pZih0LmFkZGl0aW9uYWxQcm9wZXJ0aWVzKXt2YXIgYT1lK1wiWypdXCI7ci5hZGRpdGlvbmFsUHJvcGVydGllcz1hLHQuYWRkaXRpb25hbFByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoXCJ0eXBlXCIpfHx0LmFkZGl0aW9uYWxQcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KFwib25lT2ZcIik/cG9wdWxhdGVTY2hlbWFNYXAoYSx0LmFkZGl0aW9uYWxQcm9wZXJ0aWVzKTpwb3B1bGF0ZVNjaGVtYU1hcChhLFNDSEVNQV9BTlkpfX1lbHNlXCJhcnJheVwiPT09dC50eXBlJiYoci5pdGVtcz1lK1wiWyNdXCIscG9wdWxhdGVTY2hlbWFNYXAoci5pdGVtcyx0Lml0ZW1zKSk7aWYodC5oYXNPd25Qcm9wZXJ0eShcImRlcGVuZHNPblwiKSl7bnVsbD09PXQuZGVwZW5kc09uJiYodC5kZXBlbmRzT249W1wiJFwiXSk7Zm9yKHZhciBjPW5ldyBBcnJheSxuPTA7bjx0LmRlcGVuZHNPbi5sZW5ndGg7bisrKXQuZGVwZW5kc09uW25dP3QuZGVwZW5kc09uW25dLnN0YXJ0c1dpdGgoXCIkXCIpP2Nbbl09dC5kZXBlbmRzT25bbl06ZS5lbmRzV2l0aChcIl1cIik/Y1tuXT1lK1wiLlwiK3QuZGVwZW5kc09uW25dOmNbbl09ZS5zdWJzdHJpbmcoMCxlLmxhc3RJbmRleE9mKFwiLlwiKSkrXCIuXCIrdC5kZXBlbmRzT25bbl06Y1tuXT1cIiRcIjtzY2hlbWFNYXBbZV0uZGVwZW5kc09uPWM7Zm9yKHZhciBuPTA7bjxjLmxlbmd0aDtuKyspe3ZhciBtPWRlcGVuZGVuY3lNYXBbY1tuXV07bXx8KG09bmV3IEFycmF5LGRlcGVuZGVuY3lNYXBbY1tuXV09bSksbVttLmxlbmd0aF09ZX19fX1mdW5jdGlvbiByZW5kZXJUaXRsZShlLHQscil7aWYoZSYmdCl7dmFyIG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1wiYW55XCIhPT1yLnR5cGUmJlwib2JqZWN0XCIhPT1yLnR5cGUmJlwiYXJyYXlcIiE9PXIudHlwZSYmKG4uaHRtbEZvcj1nZXRJbnB1dElkKCkpO3ZhciBhPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHQrXCI6XCIpO2lmKGFwcGVuZENoaWxkKG4sYSxyKSxyLmRlc2NyaXB0aW9uJiYobi50aXRsZT1yLmRlc2NyaXB0aW9uKSxyLnJlcXVpcmVkKXt2YXIgaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3VwXCIpO2FwcGVuZENoaWxkKGksZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCIqXCIpLHIpLGFwcGVuZENoaWxkKG4saSxyKSxuLmNsYXNzTmFtZT1cInJlcXVpcmVkXCJ9YXBwZW5kQ2hpbGQoZSxuLHIpfX1mdW5jdGlvbiBnZXRJbnB1dElkKCl7cmV0dXJuIGZvcm1JZCtcIl9cIitpbnB1dENvdW50ZXJ9ZnVuY3Rpb24gdmFsaWRhdGUoZSl7dmFyIHQ9ITA7aWYoZS5oYXNPd25Qcm9wZXJ0eShcImdldFZhbGlkYXRpb25FcnJvclwiKSl7dmFyIHI9ZS5nZXRWYWxpZGF0aW9uRXJyb3IoKTtyPyhCcnV0dXNpbkZvcm1zLm9uVmFsaWRhdGlvbkVycm9yKGUsciksdD0hMSk6QnJ1dHVzaW5Gb3Jtcy5vblZhbGlkYXRpb25TdWNjZXNzKGUpfWlmKGUuY2hpbGROb2Rlcylmb3IodmFyIG49MDtuPGUuY2hpbGROb2Rlcy5sZW5ndGg7bisrKXZhbGlkYXRlKGUuY2hpbGROb2Rlc1tuXSl8fCh0PSExKTtyZXR1cm4gdH1mdW5jdGlvbiBjbGVhcihlKXtpZihlKWZvcig7ZS5maXJzdENoaWxkOyllLnJlbW92ZUNoaWxkKGUuZmlyc3RDaGlsZCl9ZnVuY3Rpb24gcmVuZGVyKGUsdCxyLG4sYSxpKXt2YXIgbz1nZXRTY2hlbWFJZChyKSxzPWdldFNjaGVtYShvKTtyZW5kZXJJbmZvTWFwW29dPW5ldyBPYmplY3QscmVuZGVySW5mb01hcFtvXS50aXRsZUNvbnRhaW5lcj1lLHJlbmRlckluZm9NYXBbb10uY29udGFpbmVyPXQscmVuZGVySW5mb01hcFtvXS5wYXJlbnRPYmplY3Q9bixyZW5kZXJJbmZvTWFwW29dLnByb3BlcnR5UHJvdmlkZXI9YSxyZW5kZXJJbmZvTWFwW29dLnZhbHVlPWksY2xlYXIoZSksY2xlYXIodCk7dmFyIHU9cmVuZGVyZXJzW3MudHlwZV07aWYodSYmIXMuZGVwZW5kc09uKXMudGl0bGU/cmVuZGVyVGl0bGUoZSxzLnRpdGxlLHMpOmEmJnJlbmRlclRpdGxlKGUsYS5nZXRWYWx1ZSgpLHMpLGl8fChpPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBpbml0aWFsVmFsdWUmJm51bGwhPT1pbml0aWFsVmFsdWU/Z2V0SW5pdGlhbFZhbHVlKHIpOnNbXCJkZWZhdWx0XCJdKSx1KHQscixuLGEsaSk7ZWxzZSBpZihzLiRyZWYmJm9iai5zY2hlbWFSZXNvbHZlcil7dmFyIGw9ZnVuY3Rpb24oZSl7aWYoZSYmZS5oYXNPd25Qcm9wZXJ0eShyKSYmSlNPTi5zdHJpbmdpZnkoc2NoZW1hTWFwW3JdKSE9PUpTT04uc3RyaW5naWZ5KGVbcl0pKXtjbGVhblNjaGVtYU1hcChyKSxjbGVhbkRhdGEocikscG9wdWxhdGVTY2hlbWFNYXAocixlW3JdKTt2YXIgdD1yZW5kZXJJbmZvTWFwW3JdO3QmJnJlbmRlcih0LnRpdGxlQ29udGFpbmVyLHQuY29udGFpbmVyLHIsdC5wYXJlbnRPYmplY3QsdC5wcm9wZXJ0eVByb3ZpZGVyLHQudmFsdWUpfUJydXR1c2luRm9ybXMub25SZXNvbHV0aW9uRmluaXNoZWQobil9O0JydXR1c2luRm9ybXMub25SZXNvbHV0aW9uU3RhcnRlZChuKSxvYmouc2NoZW1hUmVzb2x2ZXIoW3JdLG9iai5nZXREYXRhKCksbCl9fWZ1bmN0aW9uIGNyZWF0ZVByb3BlcnR5UHJvdmlkZXIoZSx0KXt2YXIgcj1uZXcgT2JqZWN0O3JldHVybiByLmdldFZhbHVlPWUsci5vbmNoYW5nZT10LHJ9ZnVuY3Rpb24gZ2V0SW5pdGlhbFZhbHVlKGlkKXt2YXIgcmV0O3RyeXtldmFsKFwicmV0ID0gaW5pdGlhbFZhbHVlXCIraWQuc3Vic3RyaW5nKDEpKX1jYXRjaChlKXtyZXQ9bnVsbH1yZXR1cm4gcmV0fWZ1bmN0aW9uIGdldFZhbHVlKHNjaGVtYSxpbnB1dCl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgaW5wdXQuZ2V0VmFsdWUpcmV0dXJuIGlucHV0LmdldFZhbHVlKCk7dmFyIHZhbHVlO3JldHVybiB2YWx1ZT1cInNlbGVjdFwiPT09aW5wdXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpP2lucHV0Lm9wdGlvbnNbaW5wdXQuc2VsZWN0ZWRJbmRleF0udmFsdWU6aW5wdXQudmFsdWUsXCJcIj09PXZhbHVlP251bGw6KFwiaW50ZWdlclwiPT09c2NoZW1hLnR5cGU/KHZhbHVlPXBhcnNlSW50KHZhbHVlKSxpc0Zpbml0ZSh2YWx1ZSl8fCh2YWx1ZT1udWxsKSk6XCJudW1iZXJcIj09PXNjaGVtYS50eXBlPyh2YWx1ZT1wYXJzZUZsb2F0KHZhbHVlKSxpc0Zpbml0ZSh2YWx1ZSl8fCh2YWx1ZT1udWxsKSk6XCJib29sZWFuXCI9PT1zY2hlbWEudHlwZT9cImlucHV0XCI9PT1pbnB1dC50YWdOYW1lLnRvTG93ZXJDYXNlKCk/KHZhbHVlPWlucHV0LmNoZWNrZWQsdmFsdWV8fCh2YWx1ZT0hMSkpOlwic2VsZWN0XCI9PT1pbnB1dC50YWdOYW1lLnRvTG93ZXJDYXNlKCkmJih2YWx1ZT1cInRydWVcIj09PWlucHV0LnZhbHVlPyEwOlwiZmFsc2VcIj09PWlucHV0LnZhbHVlPyExOm51bGwpOlwiYW55XCI9PT1zY2hlbWEudHlwZSYmdmFsdWUmJmV2YWwoXCJ2YWx1ZT1cIit2YWx1ZSksdmFsdWUpfWZ1bmN0aW9uIGdldFNjaGVtYUlkKGUpe3JldHVybiBlLnJlcGxhY2UoL1xcW1wiW15cIl0qXCJcXF0vZyxcIlsqXVwiKS5yZXBsYWNlKC9cXFtcXGQqXFxdL2csXCJbI11cIil9ZnVuY3Rpb24gZ2V0UGFyZW50U2NoZW1hSWQoZSl7cmV0dXJuIGUuc3Vic3RyaW5nKDAsZS5sYXN0SW5kZXhPZihcIi5cIikpfWZ1bmN0aW9uIGdldFNjaGVtYShlKXtyZXR1cm4gc2NoZW1hTWFwW2VdfWZ1bmN0aW9uIGNsZWFuU2NoZW1hTWFwKGUpe2Zvcih2YXIgdCBpbiBzY2hlbWFNYXApZS5zdGFydHNXaXRoKHQpJiZkZWxldGUgc2NoZW1hTWFwW3RdfWZ1bmN0aW9uIGNsZWFuRGF0YShlKXt2YXIgdD1uZXcgRXhwcmVzc2lvbihlKTt0LnZpc2l0KGRhdGEsZnVuY3Rpb24oZSx0LHIpe2RlbGV0ZSB0W3JdfSl9ZnVuY3Rpb24gb25EZXBlbmRlbmN5Q2hhbmdlZChlLHQpe3ZhciByPWRlcGVuZGVuY3lNYXBbZV07aWYociYmb2JqLnNjaGVtYVJlc29sdmVyKXt2YXIgbj1mdW5jdGlvbihlKXtpZihlKWZvcih2YXIgciBpbiBlKWlmKEpTT04uc3RyaW5naWZ5KHNjaGVtYU1hcFtyXSkhPT1KU09OLnN0cmluZ2lmeShlW3JdKSl7Y2xlYW5TY2hlbWFNYXAociksY2xlYW5EYXRhKHIpLHBvcHVsYXRlU2NoZW1hTWFwKHIsZVtyXSk7dmFyIG49cmVuZGVySW5mb01hcFtyXTtuJiZyZW5kZXIobi50aXRsZUNvbnRhaW5lcixuLmNvbnRhaW5lcixyLG4ucGFyZW50T2JqZWN0LG4ucHJvcGVydHlQcm92aWRlcixuLnZhbHVlKX1CcnV0dXNpbkZvcm1zLm9uUmVzb2x1dGlvbkZpbmlzaGVkKHQpfTtCcnV0dXNpbkZvcm1zLm9uUmVzb2x1dGlvblN0YXJ0ZWQodCksb2JqLnNjaGVtYVJlc29sdmVyKHIsb2JqLmdldERhdGEoKSxuKX19ZnVuY3Rpb24gRXhwcmVzc2lvbihlKXtmdW5jdGlvbiB0KGUpe2lmKG51bGw9PT1lKXJldHVybiBudWxsO2Zvcih2YXIgdD1uZXcgQXJyYXkscj1udWxsLG49MCxhPTA7YTxlLmxlbmd0aDthKyspJ1wiJz09PWUuY2hhckF0KGEpP251bGw9PT1yP3I9J1wiJzonXCInPT09ciYmKHI9bnVsbCx0W3QubGVuZ3RoXT1lLnN1YnN0cmluZyhuLGErMSkudHJpbSgpLG49YSsxKTpcIidcIj09PWUuY2hhckF0KGEpP251bGw9PT1yP3I9XCInXCI6XCInXCI9PT1yJiYocj1udWxsLHRbdC5sZW5ndGhdPWUuc3Vic3RyaW5nKG4sYSsxKS50cmltKCksbj1hKzEpOlwiW1wiPT09ZS5jaGFyQXQoYSk/bnVsbD09PXImJihuIT09YSYmKHRbdC5sZW5ndGhdPWUuc3Vic3RyaW5nKG4sYSkudHJpbSgpKSx0W3QubGVuZ3RoXT1cIltcIixuPWErMSk6XCJdXCI9PT1lLmNoYXJBdChhKT9udWxsPT09ciYmKG4hPT1hJiYodFt0Lmxlbmd0aF09ZS5zdWJzdHJpbmcobixhKS50cmltKCkpLHRbdC5sZW5ndGhdPVwiXVwiLG49YSsxKTpcIi5cIj09PWUuY2hhckF0KGEpP251bGw9PT1yJiYobiE9PWEmJih0W3QubGVuZ3RoXT1lLnN1YnN0cmluZyhuLGEpLnRyaW0oKSksbj1hKzEpOmE9PT1lLmxlbmd0aC0xJiYodFt0Lmxlbmd0aF09ZS5zdWJzdHJpbmcobixhKzEpLnRyaW0oKSk7cmV0dXJuIHR9KG51bGw9PT1lfHwwPT09ZS5sZW5ndGh8fFwiLlwiPT09ZSkmJihlPVwiJFwiKTtmb3IodmFyIHI9bmV3IEFycmF5LG49dChlKSxhPSExLGk9MCxvPVwiXCIscz0wO3M8bi5sZW5ndGg7cysrKXt2YXIgdT1uW3NdO2lmKFwiW1wiPT09dSl7aWYoYSl0aHJvd1wiRXJyb3IgcGFyc2luZyBleHByZXNzaW9uICdcIitlK1wiJzogTmVzdGVkIFsgZm91bmRcIjthPSEwLGk9MCxvKz11fWVsc2UgaWYoXCJdXCI9PT11KXtpZighYSl0aHJvd1wiRXJyb3IgcGFyc2luZyBleHByZXNzaW9uICdcIitlK1wiJzogVW5iYWxhbmNlZCBdIGZvdW5kXCI7YT0hMSxvKz11LHJbci5sZW5ndGhdPW8sbz1cIlwifWVsc2UgaWYoYSl7aWYoaT4wKXRocm93XCJFcnJvciBwYXJzaW5nIGV4cHJlc3Npb24gJ1wiK2UrXCInOiBNdWx0aXBsZSB0b2tlbnMgZm91bmQgaW5zaWRlIGEgYnJhY2tldFwiO28rPXUsaSsrfWVsc2UgcltyLmxlbmd0aF09dTtpZihzPT09bi5sZW5ndGgtMSYmYSl0aHJvd1wiRXJyb3IgcGFyc2luZyBleHByZXNzaW9uICdcIitlK1wiJzogVW5iYWxhbmNlZCBbIGZvdW5kXCJ9dGhpcy5leHA9ZSx0aGlzLnF1ZXVlPXIsdGhpcy52aXNpdD1mdW5jdGlvbihlLHQpe2Z1bmN0aW9uIHIoZSxuLGEsaSxvKXtpZihudWxsIT1hKXt2YXIgcz1uLnNoaWZ0KCk7aWYoXCIkXCI9PT1zKXtlPVwiJFwiO3ZhciBzPW4uc2hpZnQoKX1pZihzKWlmKEFycmF5LmlzQXJyYXkoYSkpe2lmKCFzLnN0YXJ0c1dpdGgoXCJbXCIpKXRocm93XCJOb2RlICdcIitlK1wiJyBpcyBvZiB0eXBlIGFycmF5XCI7dmFyIHU9cy5zdWJzdHJpbmcoMSxzLmxlbmd0aC0xKTtpZih1LmVxdWFscyhcIiNcIikpZm9yKHZhciBsPTA7bDxhLmxlbmd0aDtsKyspe3ZhciBkPWFbbF07cihlK3Msbi5zbGljZSgwKSxkLGEsbCkscihlK1wiW1wiK2wrXCJdXCIsbi5zbGljZSgwKSxkLGEsbCl9ZWxzZSBpZihcIiRcIj09PXUpe3ZhciBkPWFbYS5sZW5ndGgtMV07cihlK3Msbi5zbGljZSgwKSxkLGEsYS5sZW5ndGgtMSl9ZWxzZXt2YXIgcD1wYXJzZUludCh1KTtpZihpc05hTihwKSl0aHJvd1wiRWxlbWVudCAnXCIrdStcIicgb2Ygbm9kZSAnXCIrZStcIicgaXMgbm90IGFuIGludGVnZXIsIG9yIHRoZSAnJCcgbGFzdCBlbGVtZW50IHN5bWJvbCwgIG9yIHRoZSB3aWxjYXJkIHN5bWJvbCAnIydcIjtpZigwPnApdGhyb3dcIkVsZW1lbnQgJ1wiK3UrXCInIG9mIG5vZGUgJ1wiK2UrXCInIGlzIGxvd2VyIHRoYW4gemVyb1wiO3ZhciBkPWFbcF07cihlK3Msbi5zbGljZSgwKSxkLGEscCl9fWVsc2V7aWYoXCJvYmplY3RcIiE9dHlwZW9mIGEpdGhyb3dcImJvb2xlYW5cIj09dHlwZW9mIGF8fFwibnVtYmVyXCI9PXR5cGVvZiBhfHxcInN0cmluZ1wiPT10eXBlb2YgYT9cIk5vZGUgaXMgbGVhZiBidXQgc3RpbGwgYXJlIHRva2VucyByZW1haW5pbmc6IFwiK3M6XCJOb2RlIHR5cGUgJ1wiK3R5cGVvZiBhK1wiJyBub3Qgc3VwcG9ydGVkIGZvciBpbmRleCBmaWVsZCAnXCIrZStcIidcIjtpZihcIlsqXVwiPT09cylmb3IodmFyIGMgaW4gYSl7dmFyIGQ9YVtjXTtyKGUrcyxuLnNsaWNlKDApLGQsYSxjKSxyKGUrJ1tcIicrYysnXCJdJyxuLnNsaWNlKDApLGQsYSxjKX1lbHNle3ZhciBkO2lmKHMuc3RhcnRzV2l0aChcIltcIikpe3ZhciB1PXMuc3Vic3RyaW5nKDEscy5sZW5ndGgtMSk7aWYoIXUuc3RhcnRzV2l0aCgnXCInKSYmIXUuc3RhcnRzV2l0aChcIidcIikpdGhyb3dcIkVsZW1lbnQgJ1wiK3UrXCInIG9mIG5vZGUgJ1wiK2UrXCInIG11c3QgYmUgYSBzdHJpbmcgZXhwcmVzc2lvbiBvciB3aWxjYXJkICcqJ1wiO3U9dS5zdWJzdHJpbmcoMSx1Lmxlbmd0aCgpLTEpLGUrPXMsZD1hW3VdfWVsc2UgZT1lLmxlbmd0aD4wP2UrXCIuXCIrczpzLGQ9YVtzXTtyKGUsbixkLGEscyl9fWVsc2UgdChhLGksbyl9fXIodGhpcy5leHAsdGhpcy5xdWV1ZSxlKX19dmFyIFNDSEVNQV9BTlk9e3R5cGU6XCJhbnlcIn0sb2JqPW5ldyBPYmplY3Qsc2NoZW1hTWFwPW5ldyBPYmplY3QsZGVwZW5kZW5jeU1hcD1uZXcgT2JqZWN0LHJlbmRlckluZm9NYXA9bmV3IE9iamVjdCxjb250YWluZXIsZGF0YSxlcnJvcixpbml0aWFsVmFsdWUsaW5wdXRDb3VudGVyPTAscm9vdD1zY2hlbWEsZm9ybUlkPVwiQnJ1dHVzaW5Gb3JtcyNcIitCcnV0dXNpbkZvcm1zLmluc3RhbmNlcy5sZW5ndGg7cmVuYW1lUmVxdWlyZWRQcm9wZXRpZXMoc2NoZW1hKSxwb3B1bGF0ZVNjaGVtYU1hcChcIiRcIixzY2hlbWEpLHZhbGlkYXRlRGVwZW5jeU1hcElzQWN5Y2xpYygpO3ZhciByZW5kZXJlcnM9bmV3IE9iamVjdDtyZXR1cm4gcmVuZGVyZXJzLmludGVnZXI9ZnVuY3Rpb24oZSx0LHIsbixhKXtyZW5kZXJlcnMuc3RyaW5nKGUsdCxyLG4sYSl9LHJlbmRlcmVycy5udW1iZXI9ZnVuY3Rpb24oZSx0LHIsbixhKXtyZW5kZXJlcnMuc3RyaW5nKGUsdCxyLG4sYSl9LHJlbmRlcmVycy5hbnk9ZnVuY3Rpb24oZSx0LHIsbixhKXtyZW5kZXJlcnMuc3RyaW5nKGUsdCxyLG4sYSl9LHJlbmRlcmVycy5zdHJpbmc9ZnVuY3Rpb24oZSx0LHIsbixhKXt2YXIgaSxvPWdldFNjaGVtYUlkKHQpLHM9Z2V0UGFyZW50U2NoZW1hSWQobyksdT1nZXRTY2hlbWEobyksbD1nZXRTY2hlbWEocyk7aWYoXCJhbnlcIj09PXUudHlwZSlpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKSxhJiYoaS52YWx1ZT1KU09OLnN0cmluZ2lmeShhLG51bGwsNCksdS5yZWFkT25seSYmKGkuZGlzYWJsZWQ9ITApKTtlbHNlIGlmKHUubWVkaWEpaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksaS50eXBlPVwiZmlsZVwiLGFwcGVuZENoaWxkKGksZCx1KTtlbHNlIGlmKHVbXCJlbnVtXCJdKXtpZihpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiksIXUucmVxdWlyZWQpe3ZhciBkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIikscD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKTtkLnZhbHVlPVwiXCIsYXBwZW5kQ2hpbGQoZCxwLHUpLGFwcGVuZENoaWxkKGksZCx1KX1mb3IodmFyIGM9MCxtPTA7bTx1W1wiZW51bVwiXS5sZW5ndGg7bSsrKXt2YXIgZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpLHA9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodVtcImVudW1cIl1bbV0pO2QudmFsdWU9dVtcImVudW1cIl1bbV0sYXBwZW5kQ2hpbGQoZCxwLHUpLGFwcGVuZENoaWxkKGksZCx1KSxhJiZ1W1wiZW51bVwiXVttXT09PWEmJihjPW0sdS5yZXF1aXJlZHx8YysrLHUucmVhZE9ubHkmJihpLmRpc2FibGVkPSEwKSl9MT09PXVbXCJlbnVtXCJdLmxlbmd0aD9pLnNlbGVjdGVkSW5kZXg9MTppLnNlbGVjdGVkSW5kZXg9Y31lbHNle2lmKGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLFwiaW50ZWdlclwiPT09dS50eXBlfHxcIm51bWJlclwiPT09dS50eXBlKWkudHlwZT1cIm51bWJlclwiLGkuc3RlcD11LnN0ZXA/XCJcIit1LnN0ZXA6XCJhbnlcIixcIm51bWJlclwiIT10eXBlb2YgYSYmKGE9bnVsbCk7ZWxzZSBpZihcImRhdGUtdGltZVwiPT09dS5mb3JtYXQpdHJ5e2kudHlwZT1cImRhdGV0aW1lLWxvY2FsXCJ9Y2F0Y2goZil7aS50eXBlPVwidGV4dFwifWVsc2VcImVtYWlsXCI9PT11LmZvcm1hdD9pLnR5cGU9XCJlbWFpbFwiOlwidGV4dFwiPT09dS5mb3JtYXQ/aT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik6aS50eXBlPVwidGV4dFwiO251bGwhPT1hJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgYSYmKGkudmFsdWU9YSx1LnJlYWRPbmx5JiYoaS5kaXNhYmxlZD0hMCkpfXJldHVybiBpLnNjaGVtYT1vLGkuc2V0QXR0cmlidXRlKFwiYXV0b2NvcnJlY3RcIixcIm9mZlwiKSxpLmdldFZhbGlkYXRpb25FcnJvcj1mdW5jdGlvbigpe3RyeXt2YXIgZT1nZXRWYWx1ZSh1LGkpO2lmKG51bGw9PT1lKXtpZih1LnJlcXVpcmVkKXtpZighbHx8XCJvYmplY3RcIiE9PWwudHlwZSlyZXR1cm4gQnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5yZXF1aXJlZDtpZihsLnJlcXVpcmVkKXJldHVybiBCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLnJlcXVpcmVkO2Zvcih2YXIgdCBpbiByKWlmKG51bGwhPT1yW3RdKXJldHVybiBCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLnJlcXVpcmVkfX1lbHNle2lmKHUucGF0dGVybiYmIXUucGF0dGVybi50ZXN0KGUpKXJldHVybiBCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLnBhdHRlcm4uZm9ybWF0KHUucGF0dGVybi5zb3VyY2UpO2lmKHUubWluTGVuZ3RoJiYoIWV8fHUubWluTGVuZ3RoPmUubGVuZ3RoKSlyZXR1cm4gQnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5taW5MZW5ndGguZm9ybWF0KHUubWluTGVuZ3RoKTtpZih1Lm1heExlbmd0aCYmZSYmdS5tYXhMZW5ndGg8ZS5sZW5ndGgpcmV0dXJuIEJydXR1c2luRm9ybXMubWVzc2FnZXMubWF4TGVuZ3RoLmZvcm1hdCh1Lm1heExlbmd0aCl9aWYobnVsbCE9PWUmJiFpc05hTihlKSl7aWYodS5tdWx0aXBsZU9mJiZlJXUubXVsdGlwbGVPZiE9PTApcmV0dXJuIEJydXR1c2luRm9ybXMubWVzc2FnZXMubXVsdGlwbGVPZi5mb3JtYXQodS5tdWx0aXBsZU9mKTtpZih1Lmhhc093blByb3BlcnR5KFwibWF4aW11bVwiKSl7aWYodS5leGNsdXNpdmVNYXhpbXVtJiZlPj11Lm1heGltdW0pcmV0dXJuIEJydXR1c2luRm9ybXMubWVzc2FnZXMuZXhjbHVzaXZlTWF4aW11bS5mb3JtYXQodS5tYXhpbXVtKTtpZighdS5leGNsdXNpdmVNYXhpbXVtJiZlPnUubWF4aW11bSlyZXR1cm4gQnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5tYXhpbXVtLmZvcm1hdCh1Lm1heGltdW0pfWlmKHUuaGFzT3duUHJvcGVydHkoXCJtaW5pbXVtXCIpKXtpZih1LmV4Y2x1c2l2ZU1pbmltdW0mJmU8PXUubWluaW11bSlyZXR1cm4gQnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5leGNsdXNpdmVNaW5pbXVtLmZvcm1hdCh1Lm1pbmltdW0pO2lmKCF1LmV4Y2x1c2l2ZU1pbmltdW0mJmU8dS5taW5pbXVtKXJldHVybiBCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLm1pbmltdW0uZm9ybWF0KHUubWluaW11bSl9fX1jYXRjaChuKXtyZXR1cm4gQnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5pbnZhbGlkVmFsdWV9fSxpLm9uY2hhbmdlPWZ1bmN0aW9uKCl7dmFyIGU7dHJ5e2U9Z2V0VmFsdWUodSxpKX1jYXRjaCh0KXtlPW51bGx9cj9yW24uZ2V0VmFsdWUoKV09ZTpkYXRhPWUsb25EZXBlbmRlbmN5Q2hhbmdlZChvLGkpfSx1LmRlc2NyaXB0aW9uJiYoaS50aXRsZT11LmRlc2NyaXB0aW9uLGkucGxhY2Vob2xkZXI9dS5kZXNjcmlwdGlvbiksaS5vbmNoYW5nZSgpLGkuaWQ9Z2V0SW5wdXRJZCgpLGlucHV0Q291bnRlcisrLGFwcGVuZENoaWxkKGUsaSx1KSxyfSxyZW5kZXJlcnNbXCJib29sZWFuXCJdPWZ1bmN0aW9uKGUsdCxyLG4sYSl7dmFyIGksbz1nZXRTY2hlbWFJZCh0KSxzPWdldFNjaGVtYShvKTtpZihzLnJlcXVpcmVkKWk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGkudHlwZT1cImNoZWNrYm94XCIsYT09PSEwJiYoaS5jaGVja2VkPSEwKTtlbHNle2k9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTt2YXIgdT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpLGw9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIik7bC52YWx1ZT1cIlwiLGFwcGVuZENoaWxkKHUsbCxzKSxhcHBlbmRDaGlsZChpLHUscyk7dmFyIGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSxwPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKEJydXR1c2luRm9ybXMubWVzc2FnZXNbXCJ0cnVlXCJdKTtkLnZhbHVlPVwidHJ1ZVwiLGFwcGVuZENoaWxkKGQscCxzKSxhcHBlbmRDaGlsZChpLGQscyk7dmFyIGM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSxtPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKEJydXR1c2luRm9ybXMubWVzc2FnZXNbXCJmYWxzZVwiXSk7Yy52YWx1ZT1cImZhbHNlXCIsYXBwZW5kQ2hpbGQoYyxtLHMpLGFwcGVuZENoaWxkKGksYyxzKSxhPT09ITA/aS5zZWxlY3RlZEluZGV4PTE6YT09PSExJiYoaS5zZWxlY3RlZEluZGV4PTIpfWkub25jaGFuZ2U9ZnVuY3Rpb24oKXtyP3Jbbi5nZXRWYWx1ZSgpXT1nZXRWYWx1ZShzLGkpOmRhdGE9Z2V0VmFsdWUocyxpKSxvbkRlcGVuZGVuY3lDaGFuZ2VkKG8saSl9LGkuc2NoZW1hPW8saS5pZD1nZXRJbnB1dElkKCksaW5wdXRDb3VudGVyKysscy5kZXNjcmlwdGlvbiYmKGkudGl0bGU9cy5kZXNjcmlwdGlvbiksaS5vbmNoYW5nZSgpLGFwcGVuZENoaWxkKGUsaSxzKX0scmVuZGVyZXJzLm9uZU9mPWZ1bmN0aW9uKGUsdCxyLG4sYSl7dmFyIGk9Z2V0U2NoZW1hSWQodCksbz1nZXRTY2hlbWEoaSkscz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpLHU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt1LmlubmVySFRNTD1cIlwiLHMudHlwZT1cInNlbGVjdFwiLHMuc2NoZW1hPWk7dmFyIGw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtsLnZhbHVlPW51bGwsYXBwZW5kQ2hpbGQocyxsLG8pO2Zvcih2YXIgZD0wO2Q8by5vbmVPZi5sZW5ndGg7ZCsrKXt2YXIgcD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpLGM9aStcIi5cIitkLG09Z2V0U2NoZW1hKGMpLGY9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobS50aXRsZSk7aWYocC52YWx1ZT1vLm9uZU9mW2RdLGFwcGVuZENoaWxkKHAsZixvKSxhcHBlbmRDaGlsZChzLHAsbyksdm9pZCAwIT09YSYmbnVsbCE9PWEmJihvLnJlYWRPbmx5JiYocy5kaXNhYmxlZD0hMCksYS5oYXNPd25Qcm9wZXJ0eShcInR5cGVcIikmJm0uaGFzT3duUHJvcGVydHkoXCJwcm9wZXJ0aWVzXCIpJiZtLnByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoXCJ0eXBlXCIpKSl7dmFyIGg9Z2V0U2NoZW1hKG0ucHJvcGVydGllcy50eXBlKTthLnR5cGU9PT1oW1wiZW51bVwiXVswXSYmKHMuc2VsZWN0ZWRJbmRleD1kKzEscmVuZGVyKG51bGwsdSx0K1wiLlwiKyhzLnNlbGVjdGVkSW5kZXgtMSkscixuLGEpKX19cy5vbmNoYW5nZT1mdW5jdGlvbigpe3JlbmRlcihudWxsLHUsdCtcIi5cIisocy5zZWxlY3RlZEluZGV4LTEpLHIsbixhKX0sYXBwZW5kQ2hpbGQoZSxzLG8pLGFwcGVuZENoaWxkKGUsdSxvKX0scmVuZGVyZXJzLm9iamVjdD1mdW5jdGlvbihlLHQscixuLGEpe2Z1bmN0aW9uIGkoZSl7dmFyIHQ9bmV3IE9iamVjdDtyZXR1cm4gdC5nZXRWYWx1ZT1mdW5jdGlvbigpe3JldHVybiBlfSx0Lm9uY2hhbmdlPWZ1bmN0aW9uKGUpe30sdH1mdW5jdGlvbiBvKGUsdCxyLG4sYSxpKXt2YXIgbz1nZXRTY2hlbWFJZChyKSxzPWdldFNjaGVtYShvKSx1PXQudEJvZGllc1swXSxsPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKSxkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtkLmNsYXNzTmFtZT1cImFkZC1wcm9wLW5hbWVcIjt2YXIgcD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIiksYz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIiksbT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIiksZj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIiksaD1cIiRcIitPYmplY3Qua2V5cyhlKS5sZW5ndGgrXCIkXCIsdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7di5jbGFzc05hbWU9XCJwcm9wLXZhbHVlXCI7dmFyIGc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO2cudHlwZT1cInRleHRcIjt2YXIgeTtpJiYoeT1SZWdFeHAoaSkpLGcuZ2V0VmFsaWRhdGlvbkVycm9yPWZ1bmN0aW9uKCl7cmV0dXJuIGcucHJldmlvdXNWYWx1ZSE9PWcudmFsdWUmJmUuaGFzT3duUHJvcGVydHkoZy52YWx1ZSk/QnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5hZGRwcm9wTmFtZUV4aXN0ZW50OmcudmFsdWU/dm9pZCAwOkJydXR1c2luRm9ybXMubWVzc2FnZXMuYWRkcHJvcE5hbWVSZXF1aXJlZH07dmFyIGI9Y3JlYXRlUHJvcGVydHlQcm92aWRlcihmdW5jdGlvbigpe2lmKGcudmFsdWUpe2lmKCF5KXJldHVybiBnLnZhbHVlO2lmKC0xIT09Zy52YWx1ZS5zZWFyY2goeSkpcmV0dXJuIGcudmFsdWV9cmV0dXJuIGh9LGZ1bmN0aW9uKHQpe2IuZ2V0VmFsdWUoKSE9PXQmJih0JiZlLmhhc093blByb3BlcnR5KHQpfHwodD1oKSwoZS5oYXNPd25Qcm9wZXJ0eSh0KXx8eSYmLTE9PT1iLmdldFZhbHVlKCkuc2VhcmNoKHkpKSYmKGVbYi5nZXRWYWx1ZSgpXT1lW3RdLGRlbGV0ZSBlW3RdKSl9KTtnLm9uYmx1cj1mdW5jdGlvbigpe2lmKGcucHJldmlvdXNWYWx1ZSE9PWcudmFsdWUpe2Zvcih2YXIgdD1nLnZhbHVlLHI9MTtnLnByZXZpb3VzVmFsdWUhPT10JiZlLmhhc093blByb3BlcnR5KHQpOyl0PWcudmFsdWUrXCIoXCIrcitcIilcIixyKys7cmV0dXJuIGcudmFsdWU9dCxiLm9uY2hhbmdlKGcucHJldmlvdXNWYWx1ZSksdm9pZChnLnByZXZpb3VzVmFsdWU9Zy52YWx1ZSl9fTt2YXIgUD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1Auc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiYnV0dG9uXCIpLFAuY2xhc3NOYW1lPVwicmVtb3ZlXCIsYXBwZW5kQ2hpbGQoUCxkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcInhcIikscyksUC5vbmNsaWNrPWZ1bmN0aW9uKCl7ZGVsZXRlIGVbZy52YWx1ZV0sdC5kZWxldGVSb3cobC5yb3dJbmRleCksZy52YWx1ZT1udWxsLGIub25jaGFuZ2UoZy5wcmV2aW91c1ZhbHVlKX0sYXBwZW5kQ2hpbGQobSxnLHMpLGFwcGVuZENoaWxkKGYsUCxzKSxhcHBlbmRDaGlsZChjLG0scyksYXBwZW5kQ2hpbGQoYyxmLHMpLGFwcGVuZENoaWxkKHAsYyxzKSxhcHBlbmRDaGlsZChkLHAscyksdm9pZCAwIT09aSYmKGcucGxhY2Vob2xkZXI9aSksYXBwZW5kQ2hpbGQobCxkLHMpLGFwcGVuZENoaWxkKGwsdixzKSxhcHBlbmRDaGlsZCh1LGwscyksYXBwZW5kQ2hpbGQodCx1LHMpLHJlbmRlcihudWxsLHYscixlLGIsYSksbiYmKGcudmFsdWU9bixnLm9uYmx1cigpKX12YXIgcz1nZXRTY2hlbWFJZCh0KSx1PWdldFNjaGVtYShzKSxsPW5ldyBPYmplY3Q7cj8obi5nZXRWYWx1ZSgpfHwwPT09bi5nZXRWYWx1ZSgpKSYmKHJbbi5nZXRWYWx1ZSgpXT1sKTpkYXRhPWw7dmFyIGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO2QuY2xhc3NOYW1lPVwib2JqZWN0XCI7dmFyIHA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO2FwcGVuZENoaWxkKGQscCx1KTt2YXIgYz0wO2lmKHUuaGFzT3duUHJvcGVydHkoXCJwcm9wZXJ0aWVzXCIpKXtjPXUucHJvcGVydGllcy5sZW5ndGg7Zm9yKHZhciBtIGluIHUucHJvcGVydGllcyl7dmFyIGY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpLGg9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO2guY2xhc3NOYW1lPVwicHJvcC1uYW1lXCI7dmFyIHY9dCtcIi5cIittLGc9Z2V0U2NoZW1hKGdldFNjaGVtYUlkKHYpKSx5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTt5LmNsYXNzTmFtZT1cInByb3AtdmFsdWVcIixhcHBlbmRDaGlsZChwLGYsZyksYXBwZW5kQ2hpbGQoZixoLGcpLGFwcGVuZENoaWxkKGYseSxnKTt2YXIgYj1pKG0pLFA9bnVsbDthJiYoUD1hW21dKSxyZW5kZXIoaCx5LHYsbCxiLFApfX12YXIgTz1bXTtpZih1LnBhdHRlcm5Qcm9wZXJ0aWVzfHx1LmFkZGl0aW9uYWxQcm9wZXJ0aWVzKXt2YXIgdz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2lmKGFwcGVuZENoaWxkKHcsZCx1KSx1LnBhdHRlcm5Qcm9wZXJ0aWVzKWZvcih2YXIgeCBpbiB1LnBhdHRlcm5Qcm9wZXJ0aWVzKXt2YXIgQz11LnBhdHRlcm5Qcm9wZXJ0aWVzW3hdLEU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtFLmNsYXNzTmFtZT1cImFkZC1wYXR0ZXJuLWRpdlwiO3ZhciBTPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7aWYoUy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJidXR0b25cIiksUy5wYXR0ZXJuPXgsUy5pZD10K1wiW1wiK3grXCJdXCIsUy5vbmNsaWNrPWZ1bmN0aW9uKCl7byhsLGQsdGhpcy5pZCx2b2lkIDAsdm9pZCAwLHRoaXMucGF0dGVybil9LCh1Lm1heFByb3BlcnRpZXN8fHUubWluUHJvcGVydGllcykmJihTLmdldFZhbGlkYXRpb25FcnJvcj1mdW5jdGlvbigpe3JldHVybiB1Lm1pblByb3BlcnRpZXMmJmMrZC5yb3dzLmxlbmd0aDx1Lm1pblByb3BlcnRpZXM/QnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5taW5Qcm9wZXJ0aWVzLmZvcm1hdCh1Lm1pblByb3BlcnRpZXMpOnUubWF4UHJvcGVydGllcyYmYytkLnJvd3MubGVuZ3RoPnUubWF4UHJvcGVydGllcz9CcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLm1heFByb3BlcnRpZXMuZm9ybWF0KHUubWF4UHJvcGVydGllcyk6dm9pZCAwfSksQy5kZXNjcmlwdGlvbiYmKFMudGl0bGU9Qy5kZXNjcmlwdGlvbiksYXBwZW5kQ2hpbGQoUyxkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkFkZCBcIit4KSx1KSxhcHBlbmRDaGlsZChFLFMsdSksYSlmb3IodmFyIEkgaW4gYSlpZighdS5wcm9wZXJ0aWVzfHwhdS5wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KEkpKXt2YXIgTj1SZWdFeHAoeCk7LTEhPT1JLnNlYXJjaChOKSYmLTE9PT1PLmluZGV4T2YoSSkmJihvKGwsZCx0K1wiW1wiK3grXCJdXCIsSSxhW0ldLHgpLE8ucHVzaChJKSl9YXBwZW5kQ2hpbGQodyxFLHUpfWlmKHUuYWRkaXRpb25hbFByb3BlcnRpZXMpe3ZhciBGPWdldFNjaGVtYSh1LmFkZGl0aW9uYWxQcm9wZXJ0aWVzKSxTPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7aWYoUy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJidXR0b25cIiksUy5vbmNsaWNrPWZ1bmN0aW9uKCl7byhsLGQsdCtcIlsqXVwiLHZvaWQgMCl9LCh1Lm1heFByb3BlcnRpZXN8fHUubWluUHJvcGVydGllcykmJihTLmdldFZhbGlkYXRpb25FcnJvcj1mdW5jdGlvbigpe3JldHVybiB1Lm1pblByb3BlcnRpZXMmJmMrZC5yb3dzLmxlbmd0aDx1Lm1pblByb3BlcnRpZXM/QnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5taW5Qcm9wZXJ0aWVzLmZvcm1hdCh1Lm1pblByb3BlcnRpZXMpOnUubWF4UHJvcGVydGllcyYmYytkLnJvd3MubGVuZ3RoPnUubWF4UHJvcGVydGllcz9CcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLm1heFByb3BlcnRpZXMuZm9ybWF0KHUubWF4UHJvcGVydGllcyk6dm9pZCAwfSksRi5kZXNjcmlwdGlvbiYmKFMudGl0bGU9Ri5kZXNjcmlwdGlvbiksYXBwZW5kQ2hpbGQoUyxkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkFkZFwiKSx1KSxhcHBlbmRDaGlsZCh3LFMsdSksYSlmb3IodmFyIEkgaW4gYSl1LnByb3BlcnRpZXMmJnUucHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShJKXx8LTE9PT1PLmluZGV4T2YoSSkmJm8obCxkLHQrJ1tcIicrbSsnXCJdJyxJLGFbSV0pfWFwcGVuZENoaWxkKGUsdyx1KX1lbHNlIGFwcGVuZENoaWxkKGUsZCx1KX0scmVuZGVyZXJzLmFycmF5PWZ1bmN0aW9uKGUsdCxyLG4sYSl7ZnVuY3Rpb24gaShlLHQscixuLGEpe3ZhciBpPWdldFNjaGVtYUlkKHIpLG89Z2V0U2NoZW1hKGkpLHM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpLHU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO3UuY2xhc3NOYW1lPVwiaXRlbVwiO3ZhciBsPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtsLmNsYXNzTmFtZT1cIml0ZW0taW5kZXhcIjt2YXIgZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7ZC5jbGFzc05hbWU9XCJpdGVtLWFjdGlvblwiO3ZhciBwPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtwLmNsYXNzTmFtZT1cIml0ZW0tdmFsdWVcIjt2YXIgYz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO2Muc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiYnV0dG9uXCIpLGMuY2xhc3NOYW1lPVwicmVtb3ZlXCIsYT09PSEwJiYoYy5kaXNhYmxlZD0hMCksYXBwZW5kQ2hpbGQoYyxkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcInhcIiksbyk7dmFyIG09ZnVuY3Rpb24oKXtmb3IodmFyIGU9MDtlPHQucm93cy5sZW5ndGg7ZSsrKXt2YXIgcj10LnJvd3NbZV07ci5jZWxsc1swXS5pbm5lckhUTUw9ZSsxfX07Yy5vbmNsaWNrPWZ1bmN0aW9uKCl7ZS5zcGxpY2UodS5yb3dJbmRleCwxKSx0LmRlbGV0ZVJvdyh1LnJvd0luZGV4KSxtKCl9LGFwcGVuZENoaWxkKGQsYyxvKTt2YXIgZj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0LnJvd3MubGVuZ3RoKzEpO2FwcGVuZENoaWxkKGwsZixvKSxhcHBlbmRDaGlsZCh1LGwsbyksYXBwZW5kQ2hpbGQodSxkLG8pLGFwcGVuZENoaWxkKHUscCxvKSxhcHBlbmRDaGlsZChzLHUsbyksYXBwZW5kQ2hpbGQodCxzLG8pO3ZhciBoPWNyZWF0ZVByb3BlcnR5UHJvdmlkZXIoZnVuY3Rpb24oKXtyZXR1cm4gdS5yb3dJbmRleH0pO3JlbmRlcihudWxsLHAscixlLGgsbil9dmFyIG89Z2V0U2NoZW1hSWQodCkscz1nZXRTY2hlbWEobyksdT1nZXRTY2hlbWEocy5pdGVtcyksbD1uZXcgQXJyYXk7cj8obi5nZXRWYWx1ZSgpfHwwPT09bi5nZXRWYWx1ZSgpKSYmKHJbbi5nZXRWYWx1ZSgpXT1sKTpkYXRhPWwsbiYmKG4ub25jaGFuZ2U9ZnVuY3Rpb24oZSl7ZGVsZXRlIHJbZV0scltuLmdldFZhbHVlKCldPWx9KTt2YXIgZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO3AuY2xhc3NOYW1lPVwiYXJyYXlcIixhcHBlbmRDaGlsZChkLHAscyksYXBwZW5kQ2hpbGQoZSxkLHMpO3ZhciBjPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7aWYocy5yZWFkT25seSYmKGMuZGlzYWJsZWQ9ITApLGMuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiYnV0dG9uXCIpLGMuZ2V0VmFsaWRhdGlvbkVycm9yPWZ1bmN0aW9uKCl7aWYocy5taW5JdGVtcyYmcy5taW5JdGVtcz5wLnJvd3MubGVuZ3RoKXJldHVybiBCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLm1pbkl0ZW1zLmZvcm1hdChzLm1pbkl0ZW1zKTtpZihzLm1heEl0ZW1zJiZzLm1heEl0ZW1zPHAucm93cy5sZW5ndGgpcmV0dXJuIEJydXR1c2luRm9ybXMubWVzc2FnZXMubWF4SXRlbXMuZm9ybWF0KHMubWF4SXRlbXMpO2lmKHMudW5pcXVlSXRlbXMpZm9yKHZhciBlPTA7ZTxsLmxlbmd0aDtlKyspZm9yKHZhciB0PWUrMTt0PGwubGVuZ3RoO3QrKylpZihKU09OLnN0cmluZ2lmeShsW2VdKT09PUpTT04uc3RyaW5naWZ5KGxbdF0pKXJldHVybiBCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLnVuaXF1ZUl0ZW1zfSxjLm9uY2xpY2s9ZnVuY3Rpb24oKXtpKGwscCx0K1wiWyNdXCIsbnVsbCl9LHUuZGVzY3JpcHRpb24mJihjLnRpdGxlPXUuZGVzY3JpcHRpb24pLGFwcGVuZENoaWxkKGMsZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoQnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5hZGRJdGVtKSxzKSxhcHBlbmRDaGlsZChkLHAscyksYXBwZW5kQ2hpbGQoZCxjLHMpLGEmJmEgaW5zdGFuY2VvZiBBcnJheSlmb3IodmFyIG09MDttPGEubGVuZ3RoO20rKylpKGwscCx0K1wiW1wiK20rXCJdXCIsYVttXSxzLnJlYWRPbmx5KTthcHBlbmRDaGlsZChlLGQscyl9LG9iai5yZW5kZXI9ZnVuY3Rpb24oZSx0KXtjb250YWluZXI9ZSxpbml0aWFsVmFsdWU9dDt2YXIgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtpZihyLmNsYXNzTmFtZT1cImJydXR1c2luLWZvcm1cIixyLm9uc3VibWl0PWZ1bmN0aW9uKGUpe3JldHVybiExfSxjb250YWluZXI/YXBwZW5kQ2hpbGQoY29udGFpbmVyLHIpOmFwcGVuZENoaWxkKGRvY3VtZW50LmJvZHksciksZXJyb3Ipe3ZhciBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKSxhPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGVycm9yKTthcHBlbmRDaGlsZChuLGEpLG4uY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiLGFwcGVuZENoaWxkKHIsbil9ZWxzZSByZW5kZXIobnVsbCxyLFwiJFwiLG51bGwsbnVsbCk7ZGVwZW5kZW5jeU1hcC5oYXNPd25Qcm9wZXJ0eShcIiRcIikmJm9uRGVwZW5kZW5jeUNoYW5nZWQoXCIkXCIpLEJydXR1c2luRm9ybXMucG9zdFJlbmRlciYmQnJ1dHVzaW5Gb3Jtcy5wb3N0UmVuZGVyKG9iail9LG9iai5nZXRSZW5kZXJpbmdDb250YWluZXI9ZnVuY3Rpb24oKXtyZXR1cm4gY29udGFpbmVyfSxvYmoudmFsaWRhdGU9ZnVuY3Rpb24oKXtyZXR1cm4gdmFsaWRhdGUoY29udGFpbmVyKX0sb2JqLmdldERhdGE9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQscil7aWYobnVsbD09PXMmJihzPVNDSEVNQV9BTlkpLHIuJHJlZiYmKHI9Z2V0RGVmaW5pdGlvbihyLiRyZWYpKSx0IGluc3RhbmNlb2YgQXJyYXkpe2lmKDA9PT10Lmxlbmd0aClyZXR1cm4gbnVsbDtmb3IodmFyIG49bmV3IEFycmF5LGE9MDthPHQubGVuZ3RoO2ErKyluW2FdPWUodFthXSxyLml0ZW1zKTtyZXR1cm4gbn1pZihcIlwiPT09dClyZXR1cm4gbnVsbDtpZih0IGluc3RhbmNlb2YgT2JqZWN0KXt2YXIgbj1uZXcgT2JqZWN0LGk9ITE7Zm9yKHZhciBvIGluIHQpaWYoIW8uc3RhcnRzV2l0aChcIiRcIil8fCFvLmVuZHNXaXRoKFwiJFwiKSl7dmFyIHM9bnVsbDtpZihyLmhhc093blByb3BlcnR5KFwicHJvcGVydGllc1wiKSYmci5wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KG8pJiYocz1yLnByb3BlcnRpZXNbb10pLG51bGw9PT1zJiZyLmhhc093blByb3BlcnR5KFwiYWRkaXRpb25hbFByb3BlcnRpZXNcIikmJlwib2JqZWN0XCI9PXR5cGVvZiByLmFkZGl0aW9uYWxQcm9wZXJ0aWVzJiYocz1yLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKSxudWxsPT09cyYmci5oYXNPd25Qcm9wZXJ0eShcInBhdHRlcm5Qcm9wZXJ0aWVzXCIpKWZvcih2YXIgdSBpbiByLnBhdHRlcm5Qcm9wZXJ0aWVzKXt2YXIgbD1SZWdFeHAodSk7aWYoLTEhPT1vLnNlYXJjaChsKSl7cz1yLnBhdHRlcm5Qcm9wZXJ0aWVzW3VdO2JyZWFrfX12YXIgZD1lKHRbb10scyk7bnVsbCE9PWQmJihuW29dPWQsaT0hMCl9cmV0dXJuIGl8fHIucmVxdWlyZWQ/bjpudWxsfXJldHVybiB0fXJldHVybiBjb250YWluZXI/ZShkYXRhLHNjaGVtYSk6bnVsbH0sQnJ1dHVzaW5Gb3Jtcy5pbnN0YW5jZXNbQnJ1dHVzaW5Gb3Jtcy5pbnN0YW5jZXMubGVuZ3RoXT1vYmosb2JqfSxicnV0dXNpbltcImpzb24tZm9ybXNcIl09QnJ1dHVzaW5Gb3Jtc30oKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnJ1dHVzaW4tanNvbi1mb3Jtcy9kaXN0L2pzL2JydXR1c2luLWpzb24tZm9ybXMubWluLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jhc2Uuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiIWZ1bmN0aW9uKGYpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlKW1vZHVsZS5leHBvcnRzPWYoKTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW10sZik7ZWxzZXsoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbD9nbG9iYWw6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGY/c2VsZjp0aGlzKS5NZXRlb3JFbW9qaT1mKCl9fShmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobnx8ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9Zm9yKHZhciBpPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KHsxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXshZnVuY3Rpb24oZ2xvYmFsLGZhY3Rvcnkpe2lmKHZvaWQgMCE9PWV4cG9ydHMpZmFjdG9yeShtb2R1bGUpO2Vsc2V7dmFyIG1vZD17ZXhwb3J0czp7fX07ZmFjdG9yeShtb2QpLGdsb2JhbC5tZXRlb3JFbW9qaT1tb2QuZXhwb3J0c319KHRoaXMsZnVuY3Rpb24obW9kdWxlKXtcInVzZSBzdHJpY3RcIjt2YXIgX2NyZWF0ZUNsYXNzPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQscHJvcHMpe2Zvcih2YXIgaT0wO2k8cHJvcHMubGVuZ3RoO2krKyl7dmFyIGRlc2NyaXB0b3I9cHJvcHNbaV07ZGVzY3JpcHRvci5lbnVtZXJhYmxlPWRlc2NyaXB0b3IuZW51bWVyYWJsZXx8ITEsZGVzY3JpcHRvci5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gZGVzY3JpcHRvciYmKGRlc2NyaXB0b3Iud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsZGVzY3JpcHRvci5rZXksZGVzY3JpcHRvcil9fXJldHVybiBmdW5jdGlvbihDb25zdHJ1Y3Rvcixwcm90b1Byb3BzLHN0YXRpY1Byb3BzKXtyZXR1cm4gcHJvdG9Qcm9wcyYmZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUscHJvdG9Qcm9wcyksc3RhdGljUHJvcHMmJmRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3Isc3RhdGljUHJvcHMpLENvbnN0cnVjdG9yfX0oKSxNZXRlb3JFbW9qaT1mdW5jdGlvbigpe2Z1bmN0aW9uIE1ldGVvckVtb2ppKCl7IWZ1bmN0aW9uKGluc3RhbmNlLENvbnN0cnVjdG9yKXtpZighKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9KHRoaXMsTWV0ZW9yRW1vamkpLHRoaXMuaW5pdGlhdGUoKX1yZXR1cm4gX2NyZWF0ZUNsYXNzKE1ldGVvckVtb2ppLFt7a2V5OlwiaW5pdGlhdGVcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBfdGhpcz10aGlzO2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1ldGVvci1lbW9qaT1cInRydWVcIl0sIFtkYXRhLW1ldGVvci1lbW9qaS1sYXJnZT1cInRydWVcIl0nKS5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpe190aGlzLmdlbmVyYXRlRWxlbWVudHMoZWxlbWVudCl9KX19LHtrZXk6XCJnZW5lcmF0ZUVsZW1lbnRzXCIsdmFsdWU6ZnVuY3Rpb24oZW1vamlJbnB1dCl7dmFyIGNsaWNrTGluaz1mdW5jdGlvbihldmVudCl7dmFyIGNhcmV0UG9zPWVtb2ppSW5wdXQuc2VsZWN0aW9uU3RhcnQ7ZW1vamlJbnB1dC52YWx1ZT1lbW9qaUlucHV0LnZhbHVlLnN1YnN0cmluZygwLGNhcmV0UG9zKStcIiBcIitldmVudC50YXJnZXQuaW5uZXJIVE1MK2Vtb2ppSW5wdXQudmFsdWUuc3Vic3RyaW5nKGNhcmV0UG9zKSxlbW9qaVBpY2tlci5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIixcInVuZGVmaW5lZFwiIT10eXBlb2YgYW5ndWxhciYmYW5ndWxhci5lbGVtZW50KGVtb2ppSW5wdXQpLnRyaWdnZXJIYW5kbGVyKFwiY2hhbmdlXCIpfSxjbGlja0NhdGVnb3J5PWZ1bmN0aW9uKGV2ZW50KXtlbW9qaUlucHV0LnNlbGVjdGlvblN0YXJ0O2Vtb2ppUGlja2VyLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiO2Zvcih2YXIgaGlkZVVscz1lbW9qaVBpY2tlci5xdWVyeVNlbGVjdG9yQWxsKFwidWxcIiksaT0xLGw9aGlkZVVscy5sZW5ndGg7aTxsO2krKyloaWRlVWxzW2ldLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7dmFyIGJhY2tncm91bmRUb2dnbGU9ZW1vamlQaWNrZXIucXVlcnlTZWxlY3RvckFsbChcIi5jYXRlZ29yeSBhXCIpO2ZvcihpPTAsbD1iYWNrZ3JvdW5kVG9nZ2xlLmxlbmd0aDtpPGw7aSsrKWJhY2tncm91bmRUb2dnbGVbaV0uc3R5bGUuYmFja2dyb3VuZD1cIm5vbmVcIjtlbW9qaVBpY2tlci5xdWVyeVNlbGVjdG9yKFwiLlwiK2V2ZW50LnRhcmdldC5pZCkuc3R5bGUuZGlzcGxheT1cImJsb2NrXCIsZW1vamlQaWNrZXIucXVlcnlTZWxlY3RvcihcIiNcIitldmVudC50YXJnZXQuaWQpLnN0eWxlLmJhY2tncm91bmQ9XCIjYzJjMmMyXCJ9O2Vtb2ppSW5wdXQuc3R5bGUud2lkdGg9XCIxMDAlXCI7dmFyIGVtb2ppQ29udGFpbmVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZW1vamlDb250YWluZXIuc3R5bGUucG9zaXRpb249XCJyZWxhdGl2ZVwiLGVtb2ppSW5wdXQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoZW1vamlDb250YWluZXIsZW1vamlJbnB1dCksZW1vamlDb250YWluZXIuYXBwZW5kQ2hpbGQoZW1vamlJbnB1dCk7dmFyIGVtb2ppUGlja2VyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZW1vamlQaWNrZXIudGFiSW5kZXg9MCxlbW9qaUlucHV0Lmhhc0F0dHJpYnV0ZShcImRhdGEtbWV0ZW9yLWVtb2ppLWxhcmdlXCIpPyhlbW9qaVBpY2tlci5zdHlsZS56SW5kZXg9XCI5OTlcIixlbW9qaVBpY2tlci5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIixlbW9qaVBpY2tlci5zdHlsZS53aWR0aD1cIjEwMCVcIixlbW9qaVBpY2tlci5zdHlsZS5tYXJnaW5Cb3R0b209XCIxNXB4XCIpOihlbW9qaVBpY2tlci5zdHlsZS5wb3NpdGlvbj1cImFic29sdXRlXCIsZW1vamlQaWNrZXIuc3R5bGUucmlnaHQ9XCIwcHhcIixlbW9qaVBpY2tlci5zdHlsZS50b3A9XCIzMHB4XCIsZW1vamlQaWNrZXIuc3R5bGUuZGlzcGxheT1cIm5vbmVcIixlbW9qaVBpY2tlci5zdHlsZS53aWR0aD1cIjQwMHB4XCIpLGVtb2ppUGlja2VyLnN0eWxlLnpJbmRleD1cIjk5OVwiLGVtb2ppUGlja2VyLnN0eWxlLm92ZXJmbG93PVwiaGlkZGVuXCIsZW1vamlQaWNrZXIuc3R5bGUuYmFja2dyb3VuZD1cIiNmZmZcIixlbW9qaVBpY2tlci5zdHlsZS5ib3JkZXJSYWRpdXM9XCI1cHhcIixlbW9qaVBpY2tlci5zdHlsZS5ib3hTaGFkb3c9XCIwIDNweCA2cHggcmdiYSgwLDAsMCwwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yMylcIixlbW9qaVBpY2tlci5zdHlsZS5ib3JkZXJSYWRpdXM9XCIycHg7XCIsZW1vamlQaWNrZXIuc3R5bGUubWFyZ2luVG9wPVwiNXB4XCIsZW1vamlQaWNrZXIuc3R5bGUub3V0bGluZT1cIm5vbmVcIjt2YXIgZW1vamlUcmlnZ2VyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2Vtb2ppVHJpZ2dlci5zdHlsZS5wb3NpdGlvbj1cImFic29sdXRlXCIsZW1vamlUcmlnZ2VyLnN0eWxlLnRvcD1cIjEwcHhcIixlbW9qaVRyaWdnZXIuc3R5bGUucmlnaHQ9XCIxMHB4XCIsZW1vamlUcmlnZ2VyLnN0eWxlLnRleHREZWNvcmF0aW9uPVwibm9uZVwiLGVtb2ppVHJpZ2dlci5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsXCJqYXZhc2NyaXB0OnZvaWQoMClcIiksZW1vamlUcmlnZ2VyLmlubmVySFRNTD0nPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAxMiAxNFwiPjxwYXRoIGQ9XCJNOC45IDguNHEtMC4zIDAuOS0xLjEgMS41dC0xLjggMC42LTEuOC0wLjYtMS4xLTEuNXEtMC4xLTAuMiAwLTAuNHQwLjMtMC4ycTAuMi0wLjEgMC40IDB0MC4yIDAuM3EwLjIgMC42IDAuNyAxdDEuMiAwLjQgMS4yLTAuNCAwLjctMXEwLjEtMC4yIDAuMy0wLjN0MC40IDAgMC4zIDAuMiAwIDAuNHpNNSA1cTAgMC40LTAuMyAwLjd0LTAuNyAwLjMtMC43LTAuMy0wLjMtMC43IDAuMy0wLjcgMC43LTAuMyAwLjcgMC4zIDAuMyAwLjd6TTkgNXEwIDAuNC0wLjMgMC43dC0wLjcgMC4zLTAuNy0wLjMtMC4zLTAuNyAwLjMtMC43IDAuNy0wLjMgMC43IDAuMyAwLjMgMC43ek0xMSA3cTAtMS0wLjQtMS45dC0xLjEtMS42LTEuNi0xLjEtMS45LTAuNC0xLjkgMC40LTEuNiAxLjEtMS4xIDEuNi0wLjQgMS45IDAuNCAxLjkgMS4xIDEuNiAxLjYgMS4xIDEuOSAwLjQgMS45LTAuNCAxLjYtMS4xIDEuMS0xLjYgMC40LTEuOXpNMTIgN3EwIDEuNi0wLjggM3QtMi4yIDIuMi0zIDAuOC0zLTAuOC0yLjItMi4yLTAuOC0zIDAuOC0zIDIuMi0yLjIgMy0wLjggMyAwLjggMi4yIDIuMiAwLjggM3pcIi8+PC9zdmc+JyxlbW9qaVRyaWdnZXIub25jbGljaz1mdW5jdGlvbigpe1wibm9uZVwiPT09ZW1vamlQaWNrZXIuc3R5bGUuZGlzcGxheT9lbW9qaVBpY2tlci5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjpcImJsb2NrXCI9PT1lbW9qaVBpY2tlci5zdHlsZS5kaXNwbGF5JiYoZW1vamlQaWNrZXIuc3R5bGUuZGlzcGxheT1cIm5vbmVcIiksZW1vamlQaWNrZXIuZm9jdXMoKX0sZW1vamlJbnB1dC5oYXNBdHRyaWJ1dGUoXCJkYXRhLW1ldGVvci1lbW9qaS1sYXJnZVwiKXx8ZW1vamlDb250YWluZXIuYXBwZW5kQ2hpbGQoZW1vamlUcmlnZ2VyKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oZSl7ZW1vamlJbnB1dC5oYXNBdHRyaWJ1dGUoXCJkYXRhLW1ldGVvci1lbW9qaS1sYXJnZVwiKXx8XCJibG9ja1wiPT09ZW1vamlQaWNrZXIuc3R5bGUuZGlzcGxheSYmKGVtb2ppUGlja2VyLmNvbnRhaW5zKGUudGFyZ2V0KXx8ZW1vamlUcmlnZ2VyLmNvbnRhaW5zKGUudGFyZ2V0KXx8KGVtb2ppUGlja2VyLnN0eWxlLmRpc3BsYXk9XCJub25lXCIpKX0pO3ZhciBmYWNlc0NhdGVnb3J5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtmYWNlc0NhdGVnb3J5LnN0eWxlLnBhZGRpbmc9XCIxMHB4IDBweFwiLGZhY2VzQ2F0ZWdvcnkuc3R5bGUubWFyZ2luPVwiMFwiLGZhY2VzQ2F0ZWdvcnkuc3R5bGUubGlzdFN0eWxlPVwibm9uZVwiLGZhY2VzQ2F0ZWdvcnkuc3R5bGUudGV4dEFsaWduPVwibGVmdFwiLGZhY2VzQ2F0ZWdvcnkuc3R5bGUubWFyZ2luTGVmdD1cIjMlXCIsZmFjZXNDYXRlZ29yeS5jbGFzc0xpc3QuYWRkKFwiZmFjZXNcIik7dmFyIGFuaW1hbHNDYXRlZ29yeT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7YW5pbWFsc0NhdGVnb3J5LnN0eWxlLnBhZGRpbmc9XCIxMHB4IDBweFwiLGFuaW1hbHNDYXRlZ29yeS5zdHlsZS5tYXJnaW49XCIwXCIsYW5pbWFsc0NhdGVnb3J5LnN0eWxlLmxpc3RTdHlsZT1cIm5vbmVcIixhbmltYWxzQ2F0ZWdvcnkuc3R5bGUudGV4dEFsaWduPVwibGVmdFwiLGFuaW1hbHNDYXRlZ29yeS5zdHlsZS5tYXJnaW5MZWZ0PVwiMyVcIixhbmltYWxzQ2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChcImFuaW1hbHNcIiksYW5pbWFsc0NhdGVnb3J5LnN0eWxlLmRpc3BsYXk9XCJub25lXCI7dmFyIGZvb2RDYXRlZ29yeT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7Zm9vZENhdGVnb3J5LnN0eWxlLnBhZGRpbmc9XCIxMHB4IDBweFwiLGZvb2RDYXRlZ29yeS5zdHlsZS5tYXJnaW49XCIwXCIsZm9vZENhdGVnb3J5LnN0eWxlLmxpc3RTdHlsZT1cIm5vbmVcIixmb29kQ2F0ZWdvcnkuc3R5bGUudGV4dEFsaWduPVwibGVmdFwiLGZvb2RDYXRlZ29yeS5zdHlsZS5tYXJnaW5MZWZ0PVwiMyVcIixmb29kQ2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChcImZvb2RcIiksZm9vZENhdGVnb3J5LnN0eWxlLmRpc3BsYXk9XCJub25lXCI7dmFyIHNwb3J0Q2F0ZWdvcnk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO3Nwb3J0Q2F0ZWdvcnkuc3R5bGUucGFkZGluZz1cIjEwcHggMHB4XCIsc3BvcnRDYXRlZ29yeS5zdHlsZS5tYXJnaW49XCIwXCIsc3BvcnRDYXRlZ29yeS5zdHlsZS5saXN0U3R5bGU9XCJub25lXCIsc3BvcnRDYXRlZ29yeS5zdHlsZS50ZXh0QWxpZ249XCJsZWZ0XCIsc3BvcnRDYXRlZ29yeS5zdHlsZS5tYXJnaW5MZWZ0PVwiMyVcIixzcG9ydENhdGVnb3J5LmNsYXNzTGlzdC5hZGQoXCJzcG9ydFwiKSxzcG9ydENhdGVnb3J5LnN0eWxlLmRpc3BsYXk9XCJub25lXCI7dmFyIHRyYW5zcG9ydENhdGVnb3J5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTt0cmFuc3BvcnRDYXRlZ29yeS5zdHlsZS5wYWRkaW5nPVwiMTBweCAwcHhcIix0cmFuc3BvcnRDYXRlZ29yeS5zdHlsZS5tYXJnaW49XCIwXCIsdHJhbnNwb3J0Q2F0ZWdvcnkuc3R5bGUubGlzdFN0eWxlPVwibm9uZVwiLHRyYW5zcG9ydENhdGVnb3J5LnN0eWxlLnRleHRBbGlnbj1cImxlZnRcIix0cmFuc3BvcnRDYXRlZ29yeS5zdHlsZS5tYXJnaW5MZWZ0PVwiMyVcIix0cmFuc3BvcnRDYXRlZ29yeS5jbGFzc0xpc3QuYWRkKFwidHJhbnNwb3J0XCIpLHRyYW5zcG9ydENhdGVnb3J5LnN0eWxlLmRpc3BsYXk9XCJub25lXCI7dmFyIG9iamVjdHNDYXRlZ29yeT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7b2JqZWN0c0NhdGVnb3J5LnN0eWxlLnBhZGRpbmc9XCIxMHB4IDBweFwiLG9iamVjdHNDYXRlZ29yeS5zdHlsZS5tYXJnaW49XCIwXCIsb2JqZWN0c0NhdGVnb3J5LnN0eWxlLmxpc3RTdHlsZT1cIm5vbmVcIixvYmplY3RzQ2F0ZWdvcnkuc3R5bGUudGV4dEFsaWduPVwibGVmdFwiLG9iamVjdHNDYXRlZ29yeS5zdHlsZS5tYXJnaW5MZWZ0PVwiMyVcIixvYmplY3RzQ2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChcIm9iamVjdHNcIiksb2JqZWN0c0NhdGVnb3J5LnN0eWxlLmRpc3BsYXk9XCJub25lXCI7dmFyIGVtb2ppQ2F0ZWdvcnk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO2Vtb2ppQ2F0ZWdvcnkuc3R5bGUucGFkZGluZz1cIjBweFwiLGVtb2ppQ2F0ZWdvcnkuc3R5bGUubWFyZ2luPVwiMFwiLGVtb2ppQ2F0ZWdvcnkuc3R5bGUuZGlzcGxheT1cInRhYmxlXCIsZW1vamlDYXRlZ29yeS5zdHlsZS53aWR0aD1cIjEwMCVcIixlbW9qaUNhdGVnb3J5LnN0eWxlLmJhY2tncm91bmQ9XCIjZWZmMGYxXCIsZW1vamlDYXRlZ29yeS5zdHlsZS5saXN0U3R5bGU9XCJub25lXCIsZW1vamlDYXRlZ29yeS5jbGFzc0xpc3QuYWRkKFwiY2F0ZWdvcnlcIik7dmFyIGVtb2ppQ2F0ZWdvcmllcz1uZXcgQXJyYXk7ZW1vamlDYXRlZ29yaWVzLnB1c2goe25hbWU6XCJmYWNlc1wiLHN2ZzonPHN2ZyBpZD1cImZhY2VzXCIgZGF0YS1uYW1lPVwiTGF5ZXIgMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDE1MCAxNTBcIj48cGF0aCBpZD1cImZhY2VzXCIgZD1cIk03NC4zNCwxMjguNDhhNTMuNSw1My41LDAsMSwxLDM3Ljg0LTE1LjY3LDUzLjE2LDUzLjE2LDAsMCwxLTM3Ljg0LDE1LjY3Wm0wLTk3Ljg5YTQ0LjQsNDQuNCwwLDEsMCwzMS40LDEzLDQ0LjA3LDQ0LjA3LDAsMCwwLTMxLjQtMTNaXCIvPjxwYXRoIGlkPVwiZmFjZXNcIiBkPVwiTTc0LjM1LDEwOEEzMy4wNywzMy4wNywwLDAsMSw0MS4yOSw3NWEyLjI4LDIuMjgsMCwwLDEsMi4yNy0yLjI4aDBBMi4yNywyLjI3LDAsMCwxLDQ1LjgzLDc1YTI4LjUyLDI4LjUyLDAsMCwwLDU3LDAsMi4yNywyLjI3LDAsMCwxLDQuNTQsMEEzMy4wOSwzMy4wOSwwLDAsMSw3NC4zNSwxMDhaXCIvPjxwYXRoIGlkPVwiZmFjZXNcIiBkPVwiTTU4Ljg0LDYyYTYuODEsNi44MSwwLDEsMCw2LjgxLDYuODFBNi44MSw2LjgxLDAsMCwwLDU4Ljg0LDYyWlwiLz48cGF0aCBpZD1cImZhY2VzXCIgZD1cIk04OS44Nyw2MmE2LjgxLDYuODEsMCwxLDAsNi44MSw2LjgxQTYuODIsNi44MiwwLDAsMCw4OS44Nyw2MlpcIi8+PC9zdmc+J30pLGVtb2ppQ2F0ZWdvcmllcy5wdXNoKHtuYW1lOlwiYW5pbWFsc1wiLHN2ZzonPHN2ZyBpZD1cImFuaW1hbHNcIiBkYXRhLW5hbWU9XCJMYXllciAxXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMTUwIDE1MFwiPjxwYXRoIGlkPVwiYW5pbWFsc1wiIGQ9XCJNNTkuOSw5MS43NWgwYy0yMi40NiwwLTQxLjgyLTE5LjM0LTQ0LjA5LTQ0QTUyLjEsNTIuMSwwLDAsMSwxNiwzNi44YTQuNTEsNC41MSwwLDAsMSwyLjYzLTMuNjIsMzkuNzksMzkuNzksMCwwLDEsMTIuNzQtMy4zN2MyMy45Mi0yLjE1LDQ1LjM1LDE3LjgzLDQ3Ljc0LDQzLjg2YTUyLjc3LDUyLjc3LDAsMCwxLS4xNSwxMC45Myw0LjU2LDQuNTYsMCwwLDEtMi42NCwzLjYyLDM5LjY3LDM5LjY3LDAsMCwxLTEyLjczLDMuMzZjLTEuMjMuMTEtMi40NS4xNy0zLjY2LjE3Wk0yNC43Niw0MC40OWE0MS4yOSw0MS4yOSwwLDAsMCwuMDksNi40QzI2LjcsNjcsNDIuMDksODIuNjYsNTkuOSw4Mi42N2gwYy45NCwwLDEuODgsMCwyLjgzLS4xNGEzMC4zOSwzMC4zOSwwLDAsMCw3LjQxLTEuNjIsNDEuMTQsNDEuMTQsMCwwLDAtLjExLTYuNEM2OC4wOSw1My4zOCw1MS4xMSwzNy4wOCwzMi4xNywzOC44NmEzMC43OCwzMC43OCwwLDAsMC03LjQxLDEuNjNaXCIvPjxwYXRoIGlkPVwiYW5pbWFsc1wiIGQ9XCJNMzYuNjgsMTI1LjY0YTQuNTMsNC41MywwLDAsMS00LjMzLTMuMTcsNTMuMzIsNTMuMzIsMCwwLDEtMi4yNi0xMUE1MC40Miw1MC40MiwwLDAsMSwzOS41MSw3Ni42YzcuMzUtOS45MSwxNy44NC0xNiwyOS41LTE3LDEuMTYtLjExLDIuMzMtLjEzLDMuNDctLjEzYTQuNTQsNC41NCwwLDAsMSw0LjMzLDMuMTYsNTEuNTksNTEuNTksMCwwLDEsMi4yNywxMS4wOCw1MC4zOSw1MC4zOSwwLDAsMS05LjQyLDM0LjhjLTcuMzUsOS45MS0xNy44MywxNi0yOS41LDE3YTE3LjYzLDE3LjYzLDAsMCwxLTMuNDguMTJaTTY5LjA5LDY4LjY5QTMyLjQxLDMyLjQxLDAsMCwwLDQ2LjgsODJhNDIuNTcsNDIuNTcsMCwwLDAtNi43MSwzNC4zOCwzMi4zOCwzMi4zOCwwLDAsMCwyMi4yOC0xMy4zMkE0MS4zNSw0MS4zNSwwLDAsMCw3MCw3NC41MWEzOS4zOCwzOS4zOCwwLDAsMC0uOTQtNS44MlpcIi8+PHBhdGggaWQ9XCJhbmltYWxzXCIgZD1cIk05MC4yNyw5MS43NWMtMS4yMiwwLTIuNDMtLjA2LTMuNjYtLjE3YTM5LjY3LDM5LjY3LDAsMCwxLTEyLjczLTMuMzYsNC41Nyw0LjU3LDAsMCwxLTIuNjQtMy42MSw1My4zOCw1My4zOCwwLDAsMS0uMTctMTAuOTNjMi40MS0yNiwyMy43LTQ2LjA3LDQ3Ljc2LTQzLjg3YTM5Ljc0LDM5Ljc0LDAsMCwxLDEyLjczLDMuMzcsNC41Nyw0LjU3LDAsMCwxLDIuNjQsMy42Miw1My4zNSw1My4zNSwwLDAsMSwuMTYsMTAuOTJjLTIuMjgsMjQuNjktMjEuNjUsNDQtNDQuMDksNDRaTTgwLDgwLjkxYTMwLjU3LDMwLjU3LDAsMCwwLDcuNDIsMS42MmMxOS4wNywxLjc4LDM1LjkyLTE0LjUzLDM3Ljg3LTM1LjY0YTQyLjU1LDQyLjU1LDAsMCwwLC4xLTYuNEEzMC44NiwzMC44NiwwLDAsMCwxMTgsMzguODZDOTksMzcuMDcsODIuMDYsNTMuMzgsODAuMTIsNzQuNTFhNDMuOTEsNDMuOTEsMCwwLDAtLjEsNi40WlwiLz48cGF0aCBpZD1cImFuaW1hbHNcIiBkPVwiTTExMy40OSwxMjUuNjRoMGMtMS4xNiwwLTIuMywwLTMuNDYtLjEyLTIzLjktMi4yMS00MS4zNi0yNS40Ny0zOC45NC01MS44NUE1My41Miw1My41MiwwLDAsMSw3My4zNCw2Mi42YTQuNTUsNC41NSwwLDAsMSw0LjMzLTMuMTZjMS4xNiwwLDIuMzQsMCwzLjUxLjEzLDExLjY0LDEuMDcsMjIuMTEsNy4xMiwyOS40OCwxN2E1MC41MSw1MC41MSwwLDAsMSw5LjQyLDM0LjgxLDUzLjUxLDUzLjUxLDAsMCwxLTIuMjYsMTEsNC41NCw0LjU0LDAsMCwxLTQuMzMsMy4xOVpNODEuMDgsNjguNjlhNDIuNTMsNDIuNTMsMCwwLDAtMSw1LjgyYy0xLjk0LDIxLjEsMTEuNDUsMzkuNzEsMjkuOTUsNDEuODhBNDIuMzgsNDIuMzgsMCwwLDAsMTAzLjM2LDgyLDMyLjQyLDMyLjQyLDAsMCwwLDgxLjA4LDY4LjY5WlwiLz48cGF0aCBpZD1cImFuaW1hbHNcIiBkPVwiTTc1LjA4LDQ1LjQ1YTcuODMsNy44MywwLDEsMCw3LjgzLDcuODMsNy44Myw3LjgzLDAsMCwwLTcuODMtNy44M1pcIi8+PHBhdGggaWQ9XCJhbmltYWxzXCIgZD1cIk03Ni4yOSw1MS44OWEyLjI2LDIuMjYsMCwwLDEtMi4xNC0zQTQ2LDQ2LDAsMCwxLDkyLjgyLDI1LjM0YTIuMjcsMi4yNywwLDEsMSwyLjQsMy44NkE0MS40LDQxLjQsMCwwLDAsNzguNDMsNTAuMzlhMi4yOCwyLjI4LDAsMCwxLTIuMTQsMS41WlwiLz48cGF0aCBpZD1cImFuaW1hbHNcIiBkPVwiTTczLjg3LDUxLjg5YTIuMjgsMi4yOCwwLDAsMS0yLjE0LTEuNUE0MS4zNSw0MS4zNSwwLDAsMCw1NC45NCwyOS4yYTIuMjcsMi4yNywwLDAsMSwyLjM5LTMuODZBNDYsNDYsMCwwLDEsNzYsNDguODVhMi4yOCwyLjI4LDAsMCwxLTEuMzcsMi45MSwyLjMxLDIuMzEsMCwwLDEtLjc3LjEzWlwiLz48L3N2Zz4nfSksZW1vamlDYXRlZ29yaWVzLnB1c2goe25hbWU6XCJmb29kXCIsc3ZnOic8c3ZnIGlkPVwiZm9vZFwiIGRhdGEtbmFtZT1cIkxheWVyIDFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAxNTAgMTUwXCI+PHBhdGggaWQ9XCJmb29kXCIgZD1cIk0xMDQsMjAuNzZoLjE1YzE1LjgzLjUyLDI0LjA4LDIxLjQ4LDI0LjA3LDMyLjU2LjI2LDEyLjQyLTEwLjcyLDIzLjU1LTI0LDI0LjIxYTMuNTMsMy41MywwLDAsMS0uNDYsMGMtMTMuMjUtLjY2LTI0LjIzLTExLjgtMjQtMjQuMywwLTExLDguMjYtMzEuOTUsMjQuMDctMzIuNDdabTAsNDcuNjljOC4yNS0uNTQsMTUuMy03LjUxLDE1LjE0LTE1LDAtOC4xMi02LjIyLTIzLjEtMTUuMTQtMjMuNTctOC45LjQ2LTE1LjE0LDE1LjQ1LTE1LjE0LDIzLjQ4LS4xNCw3LjYxLDYuOSwxNC41OSwxNS4xNCwxNS4xM1pcIi8+PHBhdGggaWQ9XCJmb29kXCIgZD1cIk05Ny4xOSw2OS4yMWguMTRhNC41Myw0LjUzLDAsMCwxLDQuNCw0LjY4bC0xLjQ4LDQ2LjkyYTEuNTksMS41OSwwLDAsMCwuNSwxLjA2LDQuNiw0LjYsMCwwLDAsMy4yNSwxLjE5aDBhNC41Nyw0LjU3LDAsMCwwLDMuMjYtMS4yLDEuNTMsMS41MywwLDAsMCwuNDktMWwtMS40OC00Ni45NWE0LjU0LDQuNTQsMCwxLDEsOS4wOC0uMjhsMS40Nyw0Ni45MWExMC40MiwxMC40MiwwLDAsMS0zLDcuNjUsMTMuNjUsMTMuNjUsMCwwLDEtOS44MSw0aDBhMTMuNTgsMTMuNTgsMCwwLDEtOS43OS00LDEwLjQyLDEwLjQyLDAsMCwxLTMtNy42N2wxLjQ4LTQ2Ljg5YTQuNTMsNC41MywwLDAsMSw0LjUzLTQuNFpcIi8+PHBhdGggaWQ9XCJmb29kXCIgZD1cIk00MS44NCw2OS4yMUg0MmE0LjUzLDQuNTMsMCwwLDEsNC40LDQuNjhMNDQuOSwxMjAuODFhMS41NywxLjU3LDAsMCwwLC41LDEuMDYsNC42LDQuNiwwLDAsMCwzLjI1LDEuMTloMGE0LjUxLDQuNTEsMCwwLDAsMy4yNC0xLjE5LDEuNDgsMS40OCwwLDAsMCwuNS0xTDUwLjkzLDczLjg5YTQuNTMsNC41MywwLDAsMSw0LjM5LTQuNjhBNC40LDQuNCwwLDAsMSw2MCw3My42MWwxLjQ4LDQ2LjkxYTEwLjQ5LDEwLjQ5LDAsMCwxLTMsNy42NiwxMy41NywxMy41NywwLDAsMS05Ljc4LDRoMGExMy41OSwxMy41OSwwLDAsMS05Ljc4LTQsMTAuNDgsMTAuNDgsMCwwLDEtMy03LjY3bDEuNDgtNDYuOWE0LjU0LDQuNTQsMCwwLDEsNC41NC00LjRaXCIvPjxwYXRoIGlkPVwiZm9vZFwiIGQ9XCJNMjguNTksMjAuNzZhNC41NCw0LjU0LDAsMCwxLDQuNTQsNC41NFY1MWExNS41MiwxNS41MiwwLDAsMCwzMSwwVjI1LjNhNC41NSw0LjU1LDAsMCwxLDkuMDksMFY1MWEyNC42MSwyNC42MSwwLDEsMS00OS4yMSwwVjI1LjNhNC41NCw0LjU0LDAsMCwxLDQuNTQtNC41NFpcIi8+PHBhdGggaWQ9XCJmb29kXCIgZD1cIk01NS4zNCwyMC43NmE0LjU0LDQuNTQsMCwwLDEsNC41NCw0LjU0djE5YTQuNTQsNC41NCwwLDEsMS05LjA4LDB2LTE5YTQuNTQsNC41NCwwLDAsMSw0LjU0LTQuNTRaXCIvPjxwYXRoIGlkPVwiZm9vZFwiIGQ9XCJNNDIsMjAuNzZhNC41NCw0LjU0LDAsMCwxLDQuNTQsNC41NHYxOWE0LjU0LDQuNTQsMCwxLDEtOS4wOCwwdi0xOUE0LjU0LDQuNTQsMCwwLDEsNDIsMjAuNzZaXCIvPjwvc3ZnPid9KSxlbW9qaUNhdGVnb3JpZXMucHVzaCh7bmFtZTpcInNwb3J0XCIsc3ZnOic8c3ZnIGlkPVwic3BvcnRcIiBkYXRhLW5hbWU9XCJMYXllciAxXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMTUwIDE1MFwiPjxwYXRoIGlkPVwic3BvcnRcIiBkPVwiTTc1LjM1LDEzMC4yNGE1My40OSw1My40OSwwLDEsMSw1My40OC01My40OSw1My41NSw1My41NSwwLDAsMS01My40OCw1My40OVptMC05Ny44OWE0NC40MSw0NC40MSwwLDEsMCw0NC40LDQ0LjQsNDQuMSw0NC4xLDAsMCwwLTQ0LjQtNDQuNFpcIi8+PHBhdGggaWQ9XCJzcG9ydFwiIGQ9XCJNMTE5LjI0LDg0LjA4QTUxLjI5LDUxLjI5LDAsMCwxLDY4LDMyLjg2YTQ5LjQ0LDQ5LjQ0LDAsMCwxLC4yNi01LDIuMjYsMi4yNiwwLDAsMSwyLTJjMS42Ni0uMTYsMy4zNC0uMjUsNS0uMjVhNTEuMjYsNTEuMjYsMCwwLDEsNTEuMjEsNTEuMjFjMCwxLjcxLS4wOSwzLjM4LS4yNSw1YTIuMjgsMi4yOCwwLDAsMS0yLDJjLTEuNjUuMTYtMy4zMy4yNS01LC4yNVpNNzIuNjQsMzAuMTZjLS4wNi45LS4wOCwxLjc5LS4wOCwyLjdhNDYuNzMsNDYuNzMsMCwwLDAsNDYuNjgsNDYuNjhxMS4zNywwLDIuNy0uMDljLjA2LS44OS4wOC0xLjc5LjA4LTIuN0E0Ni43Miw0Ni43MiwwLDAsMCw3NS4zNSwzMC4wOGMtLjkxLDAtMS44MiwwLTIuNzEuMDhaXCIvPjxwYXRoIGlkPVwic3BvcnRcIiBkPVwiTTc1LjM1LDEyOEE1MS4yOCw1MS4yOCwwLDAsMSwyNC4xMiw3Ni43NmMwLTEuNy4xLTMuMzguMjUtNWEyLjI5LDIuMjksMCwwLDEsMi0yYzEuNjYtLjE2LDMuMzMtLjI1LDUuMDUtLjI1YTUxLjI3LDUxLjI3LDAsMCwxLDUxLjIxLDUxLjIyYzAsMS42OS0uMDksMy4zNy0uMjUsNWEyLjI3LDIuMjcsMCwwLDEtMiwyYy0xLjY2LjE2LTMuMzIuMjUtNSwuMjVaTTI4Ljc1LDc0LjA1Yy0uMDUuOS0uMDksMS44LS4wOSwyLjcxYTQ2Ljc0LDQ2Ljc0LDAsMCwwLDQ2LjY5LDQ2LjY3Yy45MSwwLDEuOCwwLDIuNy0uMDgsMC0uOS4wOC0xLjguMDgtMi43QTQ2LjczLDQ2LjczLDAsMCwwLDMxLjQ2LDc0Yy0uOTEsMC0xLjgxLDAtMi43MS4wOFpcIi8+PHBvbHlnb24gaWQ9XCJzcG9ydFwiIHBvaW50cz1cIjQyLjY5IDExMi42MSAzOS40OCAxMDkuNCAxMDggNDAuODggMTExLjIxIDQ0LjEgNDIuNjkgMTEyLjYxIDQyLjY5IDExMi42MVwiLz48L3N2Zz4nfSksZW1vamlDYXRlZ29yaWVzLnB1c2goe25hbWU6XCJ0cmFuc3BvcnRcIixzdmc6JzxzdmcgaWQ9XCJ0cmFuc3BvcnRcIiBkYXRhLW5hbWU9XCJMYXllciAxXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMTUwIDE1MFwiPjxwYXRoIGlkPVwidHJhbnNwb3J0XCIgZD1cIk0xMjAuNywxMTZIMzFhNC41NSw0LjU1LDAsMCwxLTQuNTQtNC41NVY1NC4yOEEzMS44MiwzMS44MiwwLDAsMSw1OC4yNSwyMi40OWgzNS4yYTMxLjgzLDMxLjgzLDAsMCwxLDMxLjgsMzEuNzl2NTcuMTVBNC41NSw0LjU1LDAsMCwxLDEyMC43LDExNlptLTg1LjE2LTkuMDloODAuNjJWNTQuMjhBMjIuNzQsMjIuNzQsMCwwLDAsOTMuNDUsMzEuNTdINTguMjVBMjIuNzQsMjIuNzQsMCwwLDAsMzUuNTQsNTQuMjh2NTIuNjFaXCIvPjxwYXRoIGlkPVwidHJhbnNwb3J0XCIgZD1cIk00OS4zNSwxMjkuMjNjLTguNTMsMC0xMy42Mi0yLjc3LTEzLjYyLTcuNDFWMTE1LjZhNC41NCw0LjU0LDAsMSwxLDkuMDgsMHY0LjA2YTIxLjMyLDIxLjMyLDAsMCwwLDkuMDksMFYxMTUuNmE0LjU0LDQuNTQsMCwwLDEsOS4wOCwwdjYuMjJjMCw0LjY0LTUuMDksNy40MS0xMy42Myw3LjQxWlwiLz48cGF0aCBpZD1cInRyYW5zcG9ydFwiIGQ9XCJNMTAyLjM0LDEyOS4yM2MtOC41MywwLTEzLjYyLTIuNzctMTMuNjItNy40MVYxMTUuNmE0LjU0LDQuNTQsMCwwLDEsOS4wOCwwdjQuMDZhMjEuMjgsMjEuMjgsMCwwLDAsOS4wOCwwVjExNS42YTQuNTUsNC41NSwwLDAsMSw5LjA5LDB2Ni4yMmMwLDQuNjQtNS4wOSw3LjQxLTEzLjYzLDcuNDFaXCIvPjxwYXRoIGlkPVwidHJhbnNwb3J0XCIgZD1cIk05Ny44MSw0NC44M0g1My45YTQuNTUsNC41NSwwLDEsMSwwLTkuMDlIOTcuODFhNC41NSw0LjU1LDAsMCwxLDAsOS4wOVpcIi8+PHBhdGggaWQ9XCJ0cmFuc3BvcnRcIiBkPVwiTTU0LjI4LDg0LjJBNi44LDYuOCwwLDEsMCw2MS4wNyw5MWE2LjgsNi44LDAsMCwwLTYuNzktNi44WlwiLz48cGF0aCBpZD1cInRyYW5zcG9ydFwiIGQ9XCJNOTcuNDMsODQuMmE2LjgsNi44LDAsMSwwLDYuNzksNi44LDYuOCw2LjgsMCwwLDAtNi43OS02LjhaXCIvPjxwYXRoIGlkPVwidHJhbnNwb3J0XCIgZD1cIk0xMDcuMDgsODFINDQuNjNhNi44Miw2LjgyLDAsMCwxLTYuODItNi44MlY1NC4yOGE2LjgyLDYuODIsMCwwLDEsNi44Mi02LjgxaDYyLjQ1YTYuODIsNi44MiwwLDAsMSw2LjgxLDYuODFWNzQuMTVBNi44Myw2LjgzLDAsMCwxLDEwNy4wOCw4MVpNNDQuNjMsNTJhMi4yOCwyLjI4LDAsMCwwLTIuMjgsMi4yN1Y3NC4xNWEyLjI4LDIuMjgsMCwwLDAsMi4yOCwyLjI3aDYyLjQ1YTIuMjcsMi4yNywwLDAsMCwyLjI3LTIuMjdWNTQuMjhBMi4yNywyLjI3LDAsMCwwLDEwNy4wOCw1MlpcIi8+PC9zdmc+J30pLGVtb2ppQ2F0ZWdvcmllcy5wdXNoKHtuYW1lOlwib2JqZWN0c1wiLHN2ZzonPHN2ZyBpZD1cIm9iamVjdHNcIiBkYXRhLW5hbWU9XCJMYXllciAxXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMTUwIDE1MFwiPjxwYXRoIGlkPVwib2JqZWN0c1wiIGQ9XCJNMTA3Ljc4LDEyOWE0LjU1LDQuNTUsMCwwLDEtMi42Ny0uODdsLTMwLTIxLjc5LTMwLDIxLjc5YTQuNTMsNC41MywwLDAsMS01LjM0LDAsNC41OCw0LjU4LDAsMCwxLTEuNjUtNS4wOEw0OS41OSw4Ny44MiwxOS42LDY2YTQuNTQsNC41NCwwLDAsMSwyLjY3LTguMjJINTkuMzRMNzAuOCwyMi41NWE0LjU1LDQuNTUsMCwwLDEsOC42NCwwTDkwLjg5LDU3LjgxSDEyOEE0LjU0LDQuNTQsMCwwLDEsMTMwLjYzLDY2bC0zMCwyMS43OSwxMS40NiwzNS4yNWE0LjU1LDQuNTUsMCwwLDEtNC4zMiw2Wk03NS4xMiw5Ni4yYTQuNTMsNC41MywwLDAsMSwyLjY3Ljg3bDIxLjM1LDE1LjUxTDkxLDg3LjQ5YTQuNTUsNC41NSwwLDAsMSwxLjY1LTUuMDhMMTE0LDY2Ljg5SDg3LjU5YTQuNTQsNC41NCwwLDAsMS00LjMyLTMuMTNsLTguMTUtMjUuMUw2Nyw2My43NmE0LjUzLDQuNTMsMCwwLDEtNC4zMiwzLjEzSDM2LjI1TDU3LjYxLDgyLjQxYTQuNTQsNC41NCwwLDAsMSwxLjY1LDUuMDhsLTguMTcsMjUuMDlMNzIuNDUsOTcuMDdhNC41Myw0LjUzLDAsMCwxLDIuNjctLjg3WlwiLz48L3N2Zz4nfSk7ZW1vamlDYXRlZ29yaWVzLm1hcChmdW5jdGlvbihpdGVtKXt2YXIgZW1vamlMaW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2Vtb2ppTGluay5zdHlsZS50ZXh0RGVjb3JhdGlvbj1cIm5vbmVcIixlbW9qaUxpbmsuc3R5bGUucGFkZGluZz1cIjVweFwiLGVtb2ppTGluay5zdHlsZS5wb3NpdGlvbj1cImluaXRpYWxcIixlbW9qaUxpbmsuc3R5bGUuZm9udFNpemU9XCIyNHB4XCIsZW1vamlMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIixcImphdmFzY3JpcHQ6dm9pZCgwKVwiKSxlbW9qaUxpbmsuc3R5bGUuZGlzcGxheT1cInRhYmxlLWNlbGxcIixlbW9qaUxpbmsuc3R5bGUudGV4dEFsaWduPVwiY2VudGVyXCIsZW1vamlMaW5rLmlkPVN0cmluZyhpdGVtLm5hbWUpLFwiZmFjZXNcIj09U3RyaW5nKGl0ZW0ubmFtZSkmJihlbW9qaUxpbmsuc3R5bGUuYmFja2dyb3VuZD1cIiNjMmMyYzJcIiksZW1vamlMaW5rLmlubmVySFRNTD1TdHJpbmcoaXRlbS5zdmcpLGVtb2ppTGluay5vbm1vdXNlZG93bj1jbGlja0NhdGVnb3J5LGVtb2ppQ2F0ZWdvcnkuYXBwZW5kQ2hpbGQoZW1vamlMaW5rKX0pLFsxMjg1MTMsMTI4NTE0LDEyODUxNSwxMjg1MTYsMTI4NTE3LDEyODUxOCwxMjg1MjEsMTI4NTIyLDEyODUyMywxMjg1MjQsMTI4NTI1LDEyODUyNywxMjg1MzAsMTI4NTMxLDEyODUzMiwxMjg1MzQsMTI4NTM2LDEyODUzOCwxMjg1NDAsMTI4NTQxLDEyODU0MiwxMjg1NDQsMTI4NTQ1LDEyODU0NiwxMjg1NDcsMTI4NTQ4LDEyODU0OSwxMjg1NTIsMTI4NTUzLDEyODU1NCwxMjg1NTUsMTI4NTU3LDEyODU2MCwxMjg1NjEsMTI4NTYyLDEyODU2MywxMjg1NjUsMTI4NTY3XS5tYXAoZnVuY3Rpb24oaXRlbSl7dmFyIGVtb2ppTGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtlbW9qaUxpbmsuc3R5bGUudGV4dERlY29yYXRpb249XCJub25lXCIsZW1vamlMaW5rLnN0eWxlLm1hcmdpbj1cIjVweFwiLGVtb2ppTGluay5zdHlsZS5wb3NpdGlvbj1cImluaXRpYWxcIixlbW9qaUxpbmsuc3R5bGUuZm9udFNpemU9XCIyNHB4XCIsZW1vamlMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIixcImphdmFzY3JpcHQ6dm9pZCgwKVwiKSxlbW9qaUxpbmsuaW5uZXJIVE1MPVN0cmluZy5mcm9tQ29kZVBvaW50KGl0ZW0pLGVtb2ppTGluay5vbm1vdXNlZG93bj1jbGlja0xpbmssZmFjZXNDYXRlZ29yeS5hcHBlbmRDaGlsZChlbW9qaUxpbmspfSksWzEyODAxMiwxMjgwMTMsMTI4MDE0LDEyODAxNywxMjgwMTgsMTI4MDIwLDEyODAyMywxMjgwMjQsMTI4MDI1LDEyODAyNiwxMjgwMjcsMTI4MDI4LDEyODAyOSwxMjgwMzAsMTI4MDMxLDEyODAzMiwxMjgwMzMsMTI4MDM0LDEyODAzNSwxMjgwMzYsMTI4MDM3LDEyODAzOCwxMjgwMzksMTI4MDQwLDEyODA0MSwxMjgwNDMsMTI4MDQ0LDEyODA0NSwxMjgwNDYsMTI4MDQ3LDEyODA0OCwxMjgwNDksMTI4MDUwLDEyODA1MSwxMjgwNTIsMTI4MDUzLDEyODA1NCwxMjgwNTUsMTI4MDU2LDEyODA1NywxMjgwNTgsMTI4MDU5LDEyODA2MF0ubWFwKGZ1bmN0aW9uKGl0ZW0pe3ZhciBlbW9qaUxpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7ZW1vamlMaW5rLnN0eWxlLnRleHREZWNvcmF0aW9uPVwibm9uZVwiLGVtb2ppTGluay5zdHlsZS5tYXJnaW49XCI1cHhcIixlbW9qaUxpbmsuc3R5bGUucG9zaXRpb249XCJpbml0aWFsXCIsZW1vamlMaW5rLnN0eWxlLmZvbnRTaXplPVwiMjRweFwiLGVtb2ppTGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsXCJqYXZhc2NyaXB0OnZvaWQoMClcIiksZW1vamlMaW5rLmlubmVySFRNTD1TdHJpbmcuZnJvbUNvZGVQb2ludChpdGVtKSxlbW9qaUxpbmsub25tb3VzZWRvd249Y2xpY2tMaW5rLGFuaW1hbHNDYXRlZ29yeS5hcHBlbmRDaGlsZChlbW9qaUxpbmspfSksWzEyNzgxMywxMjc4MTQsMTI3ODE1LDEyNzgxNiwxMjc4MTcsMTI3ODE4LDEyNzgyMCwxMjc4MjEsMTI3ODIyLDEyNzgyMywxMjc4MjUsMTI3ODI2LDEyNzgyNywxMjc4MjgsMTI3ODI5LDEyNzgzMCwxMjc4MzEsMTI3ODMyLDEyNzgzNiwxMjc4MzcsMTI3ODM4LDEyNzgzOSwxMjc4NDAsMTI3ODQxLDEyNzg0MiwxMjc4NDMsMTI3ODQ0LDEyNzg0NiwxMjc4NDgsMTI3ODQ5LDEyNzg1MCwxMjc4NTEsMTI3ODUyLDEyNzg1MywxMjc4NTYsMTI3ODU4LDEyNzg1OSwxMjc4NjAsMTI3ODYzLDEyNzg2NCwxMjc4NjddLm1hcChmdW5jdGlvbihpdGVtKXt2YXIgZW1vamlMaW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2Vtb2ppTGluay5zdHlsZS50ZXh0RGVjb3JhdGlvbj1cIm5vbmVcIixlbW9qaUxpbmsuc3R5bGUubWFyZ2luPVwiNXB4XCIsZW1vamlMaW5rLnN0eWxlLnBvc2l0aW9uPVwiaW5pdGlhbFwiLGVtb2ppTGluay5zdHlsZS5mb250U2l6ZT1cIjI0cHhcIixlbW9qaUxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLFwiamF2YXNjcmlwdDp2b2lkKDApXCIpLGVtb2ppTGluay5pbm5lckhUTUw9U3RyaW5nLmZyb21Db2RlUG9pbnQoaXRlbSksZW1vamlMaW5rLm9ubW91c2Vkb3duPWNsaWNrTGluayxmb29kQ2F0ZWdvcnkuYXBwZW5kQ2hpbGQoZW1vamlMaW5rKX0pLFsxMjc5MjEsMTI3OTIzLDEyNzkzNCwxMjc5MzUsMTI3OTM2LDEyNzkzNywxMjc5MzgsMTI3OTM5LDEyNzk0MCwxMjc5NDIsMTI3OTQ0LDEyNzk0NiwxMjg2NzUsMTI4NjkyLDEyODY5Myw5OTE3LDk5MTgsOTk3OCwxMjc5MDcsMTI3OTE5LDk5NzFdLm1hcChmdW5jdGlvbihpdGVtKXt2YXIgZW1vamlMaW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2Vtb2ppTGluay5zdHlsZS50ZXh0RGVjb3JhdGlvbj1cIm5vbmVcIixlbW9qaUxpbmsuc3R5bGUubWFyZ2luPVwiNXB4XCIsZW1vamlMaW5rLnN0eWxlLnBvc2l0aW9uPVwiaW5pdGlhbFwiLGVtb2ppTGluay5zdHlsZS5mb250U2l6ZT1cIjI0cHhcIixlbW9qaUxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLFwiamF2YXNjcmlwdDp2b2lkKDApXCIpLGVtb2ppTGluay5pbm5lckhUTUw9U3RyaW5nLmZyb21Db2RlUG9pbnQoaXRlbSksZW1vamlMaW5rLm9ubW91c2Vkb3duPWNsaWNrTGluayxzcG9ydENhdGVnb3J5LmFwcGVuZENoaWxkKGVtb2ppTGluayl9KSxbMTI4NjQxLDEyODY0MiwxMjg2NDYsMTI4NjQ4LDEyODY1MCwxMjg2NTMsMTI4NjU0LDEyODY1NiwxMjg2NjAsMTI4NjYyLDEyODY2NCwxMjg2NjcsMTI4NjY4LDEyODY2OSwxMjg2NzAsMTI4NjcxLDEyODY3MiwxMjg2NzMsMTI4NjQwLDEyODY0MywxMjg2NDQsMTI4NjQ1LDEyODY0NywxMjg2NDksMTI4NjUyLDEyODY1NywxMjg2NTgsMTI4NjU5LDEyODY2MSwxMjg2NjMsMTI4NjY1LDEyODY2NiwxMjg2NzQsMTI4Njc2LDEyODY5MF0ubWFwKGZ1bmN0aW9uKGl0ZW0pe3ZhciBlbW9qaUxpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7ZW1vamlMaW5rLnN0eWxlLnRleHREZWNvcmF0aW9uPVwibm9uZVwiLGVtb2ppTGluay5zdHlsZS5tYXJnaW49XCI1cHhcIixlbW9qaUxpbmsuc3R5bGUucG9zaXRpb249XCJpbml0aWFsXCIsZW1vamlMaW5rLnN0eWxlLmZvbnRTaXplPVwiMjRweFwiLGVtb2ppTGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsXCJqYXZhc2NyaXB0OnZvaWQoMClcIiksZW1vamlMaW5rLmlubmVySFRNTD1TdHJpbmcuZnJvbUNvZGVQb2ludChpdGVtKSxlbW9qaUxpbmsub25tb3VzZWRvd249Y2xpY2tMaW5rLHRyYW5zcG9ydENhdGVnb3J5LmFwcGVuZENoaWxkKGVtb2ppTGluayl9KSxbMTI3ODkwLDEyNzg4MCwxMjc4ODEsMTI3ODg3LDEyNzg5MSwxMjc5MDUsMTI3OTA2LDEyNzkwOCwxMjc5MDksMTI3OTExLDEyNzkxMiwxMjc5MTUsMTI3OTE2LDEyNzkxOCwxMjc5MTksMTI3OTI2LDEyNzkyNywxMjc5MjgsMTI3OTI5LDEyNzkzMCwxMjc5MzEsMTI3OTMyLDEyNzk2OCwxMjc5NzMsMTI3OTc4LDEyODE0NywxMjgxNDgsMTI4MTQ5LDEyODE1MCwxMjgxNTEsMTI4MTUyLDEyODE4NywxMjgxODYsMTI4MTk3LDEyODIxMywxMjgyNDddLm1hcChmdW5jdGlvbihpdGVtKXt2YXIgZW1vamlMaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7ZW1vamlMaS5zdHlsZS5kaXNwbGF5PVwiaW5saW5lLWJsb2NrXCIsZW1vamlMaS5zdHlsZS5tYXJnaW49XCI1cHhcIjt2YXIgZW1vamlMaW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2Vtb2ppTGluay5zdHlsZS50ZXh0RGVjb3JhdGlvbj1cIm5vbmVcIixlbW9qaUxpbmsuc3R5bGUubWFyZ2luPVwiNXB4XCIsZW1vamlMaW5rLnN0eWxlLnBvc2l0aW9uPVwiaW5pdGlhbFwiLGVtb2ppTGluay5zdHlsZS5mb250U2l6ZT1cIjI0cHhcIixlbW9qaUxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLFwiamF2YXNjcmlwdDp2b2lkKDApXCIpLGVtb2ppTGluay5pbm5lckhUTUw9U3RyaW5nLmZyb21Db2RlUG9pbnQoaXRlbSksZW1vamlMaW5rLm9ubW91c2Vkb3duPWNsaWNrTGluayxvYmplY3RzQ2F0ZWdvcnkuYXBwZW5kQ2hpbGQoZW1vamlMaW5rKX0pLGVtb2ppUGlja2VyLmFwcGVuZENoaWxkKGVtb2ppQ2F0ZWdvcnkpLGVtb2ppUGlja2VyLmFwcGVuZENoaWxkKGZhY2VzQ2F0ZWdvcnkpLGVtb2ppUGlja2VyLmFwcGVuZENoaWxkKGFuaW1hbHNDYXRlZ29yeSksZW1vamlQaWNrZXIuYXBwZW5kQ2hpbGQoZm9vZENhdGVnb3J5KSxlbW9qaVBpY2tlci5hcHBlbmRDaGlsZChzcG9ydENhdGVnb3J5KSxlbW9qaVBpY2tlci5hcHBlbmRDaGlsZCh0cmFuc3BvcnRDYXRlZ29yeSksZW1vamlQaWNrZXIuYXBwZW5kQ2hpbGQob2JqZWN0c0NhdGVnb3J5KSxlbW9qaUNvbnRhaW5lci5hcHBlbmRDaGlsZChlbW9qaVBpY2tlcil9fV0pLE1ldGVvckVtb2ppfSgpO21vZHVsZS5leHBvcnRzPU1ldGVvckVtb2ppfSl9LHt9XX0se30sWzFdKSgxKX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tZXRlb3ItZW1vamkvZGlzdC9tZXRlb3JFbW9qaS5taW4uanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdGlmKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==