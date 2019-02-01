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
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
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
            return 'instagram-task-manager/task/type/' + type + '/subtype/' + subtype;
        },
        instagramTaskManager_getDefaultConfigs: 'instagram-task-manager/config/type', // {STRATEGY_TYPE}/subtype/{STRATEGY_SUBTYPE}
        instagramTaskManager_postStartFollowingList: 'instagram-task-manager/task',
        instagramTaskManager_putStopFollowingList: function instagramTaskManager_putStopFollowingList(id) {
            return 'instagram-task-manager/task/' + id;
        },
        instagramTaskManager_delRemoveFollowingList: function instagramTaskManager_delRemoveFollowingList(id) {
            return 'instagram-task-manager/task/' + id;
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
        return CookieSrv.set(name, '', _extends({ 'max-age': -1, path: '/', days: 0 }, opts)
        // path & domain must match cookie being deleted
        );
    } };

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

var _network = __webpack_require__(5);

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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24)(module)))

/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // import $ from 'jquery';


var _consts = __webpack_require__(0);

var _network = __webpack_require__(5);

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
        key: 'stopFollowingList',
        value: function stopFollowingList(taskId, cbError) {
            var setting = _extends({}, this.settingPost, {
                method: 'PUT',
                headers: _extends({}, this.settingPost.headers, {
                    'token': this.getToken()
                })
            });
            var url = _consts.CONST.getPath('instagramTaskManager_putStopFollowingList', taskId);
            return this.network.sendRequest(url, setting, cbError);
        }
    }, {
        key: 'deleteFollowingList',
        value: function deleteFollowingList(taskId, cbError) {
            var setting = _extends({}, this.settingPost, {
                method: 'DELETE',
                headers: _extends({}, this.settingPost.headers, {
                    'token': this.getToken()
                })
            });
            var url = _consts.CONST.getPath('instagramTaskManager_delRemoveFollowingList', taskId);
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
        value: function postStartFollowingList(body, cbError) {
            var setting = _extends({}, this.settingPost, {
                headers: _extends({}, this.settingPost.headers, {
                    'token': this.getToken(),
                    'X-Auth-Token': 'e2f4336abea440489c51c5c10294ea12'
                })
            });
            setting.body = JSON.stringify(body);

            return this.network.sendRequest('' + _consts.CONST.getPath('instagramTaskManager_postStartFollowingList'), setting, cbError);
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(22);

var _consts = __webpack_require__(0);

var _pubsubJs = __webpack_require__(4);

var _pubsubJs2 = _interopRequireDefault(_pubsubJs);

var _registerForm = __webpack_require__(17);

var _registerForm2 = _interopRequireDefault(_registerForm);

var _loginForm = __webpack_require__(15);

var _loginPage = __webpack_require__(20);

var _confirmReg = __webpack_require__(9);

var _header = __webpack_require__(13);

var header = _interopRequireWildcard(_header);

var _burgerMenu = __webpack_require__(12);

var burgerMenu = _interopRequireWildcard(_burgerMenu);

var _instagramAccountsList = __webpack_require__(14);

var instagramAccounts = _interopRequireWildcard(_instagramAccountsList);

var _messages = __webpack_require__(16);

var messages = _interopRequireWildcard(_messages);

var _follow = __webpack_require__(11);

var follow = _interopRequireWildcard(_follow);

var _chatBotBlock = __webpack_require__(8);

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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.init = init;

var _consts = __webpack_require__(0);

// import UserTaskManager from '../../common/js-services/api-task-manager';
/*
const state = {
    'text_forms': [
        {
            'key_words': ['цена', 'стоимость'],
            'answer': '100500 рублей'
        },
        {
            'key_words': ['цену', 'ценник'],
            'answer': '1 млн. рублей'
        }
    ]
};*/

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
}*/

/**
 * Init header
 */
function initSteps() {
    var $form = $('.chat-bot-form');
    var textRow = $('.chat-bot-text-fields');

    $('.js_add-chat-bot').on('click', function (e) {
        console.log('click');
        // $(textRow).insertAfter($('.chat-bot-text-fields'));
        $('.chat-bot-text-fields:first-child').clone().insertBefore(textRow);
    });
    // submit
    $form.on('submit', function (e) {
        var keyWords = $('.chat-bot-text-fields textarea.chat-words').val().trim().replace(/ /g, '').split(',').filter(function (i) {
            return i.length > 0;
        });
        var answer = $('.chat-bot-text-fields textarea.chat-messages').val();

        console.log('make request here**', { keyWords: keyWords, answer: answer });

        // UserTaskManager.postStartFollowingList(state).then((result) => {
        //     if (result.status.state === 'ok') {
        //         console.log(JSON.stringify(result));
        //         $('.form-submit-finish').addClass('d-block')
        //             .find('.alert').append(`<p>task_id: ${result.data.task_id}</p>`);
        //     }
        // });
    });

    // alert close
    $('.form-submit-finish .close').on('click', function () {
        // $(this).closest('form-submit-finish').removeClass('d-block');
        $('#v-pills-runned-tab').trigger('click');
        window.PubSub.publish(_consts.CONST.events.tasks.NEW_TASK_CREATED);
    });
}

function init() {
    if ($('.chat-bot-form').length) {
        initSteps();
    }
}

/***/ }),
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.init = init;

var _apiTaskManager = __webpack_require__(6);

var _apiTaskManager2 = _interopRequireDefault(_apiTaskManager);

var _view = __webpack_require__(3);

var _view2 = _interopRequireDefault(_view);

var _consts = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fillListMeta($list, dataArray, isRuns) {
    var items = dataArray;
    // const defaultAvatarSrc = 'https://i.imgur.com/jNNT4LE.png';
    $list.empty();
    items.forEach(function (item) {
        var progress = {
            count: 1,
            index: 0,
            percent: 55,
            timestamp: 1548669507658
        };
        if (item.type !== 'FOLLOWING') {
            return;
        }
        if (item.status.state === 'STOPPED' && !isRuns) {
            $('<li class="list-group-item p-0" data-username="' + item.type + '" data-task-id="' + item.task_id + '">\n                <div class="media-body d-flex">\n                    <div class="col task-type">\n                        ' + (item.task_id ? '<p class="badge badge-secondary my-1">' + item.task_id + '</p>' : '') + '\n                        <div class="task-progress">\n                            <p class="small my-1">\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043E</p>\n                            <p class="my-1">' + item.status.reason + '</p>\n                        </div>\n                    <button class="btn btn-warning js_btn-delete-task">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>\n                    </div>\n                    <!--<div class="col task-subtype">\n                        ' + (item.subtype ? '<p class="mt-0 mb-1">' + item.subtype + '</p>' : '') + '\n                    </div>-->                    \n                </div>\n            </li>').appendTo($list);
        } else if (item.status.state === 'IN_PROGRESS') {
            $('<li class="list-group-item py-2" data-task-id="' + item.task_id + '">\n                <div class="col task-progress">\n                    <p class="mt-0 mb-1 name">\u0412 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0435 : ' + item.status.reason + '</p>\n                </div>\n            </li>').appendTo($list);
        } else if ((item.status.state === 'FINISHED' || item.status.state === 'IN_PROGRESS') && !isRuns) {
            $('<li class="list-group-item py-2" data-task-id="' + item.task_id + '">\n                 <div class="card-block">\n                    <h4 class="card-title">\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u043E</h4>\n                    <div class="text-right">                        \n                        <span class="text-muted">' + _view2.default.getFormattedDateUtil(progress.timestamp) + '</span>\n                    </div>\n                    <span class="text-success">100%</span>\n                    <div class="progress mb-3">\n                        <div class="progress-bar bg-success" role="progressbar" style="width: 100%; height: 6px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>\n                    </div>                    \n                    <button class="btn btn-warning js_btn-delete-task">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>\n                </div>\n            </li>').appendTo($list);
        }
        if (!$('li', $list).length) {
            $('<li class="list-group-item py-2" data-task-id="' + item.task_id + '">\n                <p>\u0412 \u044D\u0442\u043E\u043C \u0440\u0430\u0437\u0434\u0435\u043B\u0435 \u043D\u0435\u0442 \u043D\u0438 \u043E\u0434\u043D\u043E\u0439 \u0437\u0430\u0434\u0430\u0447\u0438.</p>                \n            </li>').appendTo($list);
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
        _apiTaskManager2.default.stopFollowingList(taskId).then(function (result) {
            console.log(result);
            getTasksData();
        });
    });

    $btnDelTask.on('click', function (e) {
        var taskId = getTaskID(e);
        console.log('DELETE id', taskId);
        _apiTaskManager2.default.deleteFollowingList(taskId).then(function (result) {
            console.log(result);
            getTasksData();
        });
    });
}

function getTasksData() {
    var path = {
        type: _consts.CONST.url.tmTypes.followingT,
        subType: _consts.CONST.url.tmTypes.followingSubT[0]
    };
    _apiTaskManager2.default.getMetadata(path).then(function (result) {
        // console.log(result);
        if (result.status.state === 'ok') {
            fillListMeta($('.follow-tasks-runs'), result.data.meta, 'isRuns');
            fillListMeta($('.follow-tasks-stopped'), result.data.meta);
            initHandlers();
        }
    });
}

/**
 * Init
 */
function init() {
    getTasksData();
    window.PubSub.subscribe(_consts.CONST.events.tasks.NEW_TASK_CREATED, function (eventName, data) {
        getTasksData();
    });
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.init = init;

var _followStatus = __webpack_require__(10);

var followStatus = _interopRequireWildcard(_followStatus);

var _consts = __webpack_require__(0);

var _apiTaskManager = __webpack_require__(6);

var _apiTaskManager2 = _interopRequireDefault(_apiTaskManager);

__webpack_require__(21);

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

function fillListTypes($wrapper, data) {
    var structureObj = data['structure'];

    $wrapper.empty().addClass('border-light-color');
    $('<div class="">Тип задания</div><select name="task-type" id="task-types"></select>').appendTo($wrapper);
    for (var type in structureObj) {
        // console.log('structure: ' + item);
        if (Object.prototype.hasOwnProperty.call(structureObj, type)) {
            $('<option class="list-group-item py-2" ' + (type !== 'FOLLOWING' ? 'disabled="disabled"' : '') + '\n                value = "' + JSON.stringify({ type: type, subtype: structureObj[type] }) + '">\n                ' + type + '\n            </option>').appendTo($('#task-types'));
        }
    }
}

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
        case 2:
            // console.log(stepNumber);
            // console.log(state);
            break;
        default:
            console.log('default', stepNumber);
    }
}

/**
 * Init header
 */
function initSteps() {
    var $form = $('.follow-form');
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

        state.type = 'FOLLOWING';
        state.subtype = 'FOLLOWING_LIST';
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
    _apiTaskManager2.default.getTaskTypes().then(function (result) {
        if (result.status.state === 'ok') {
            // console.log(result);
            fillListTypes($('.js_task-types'), result.data);
        }
    });

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
        initSteps();
        window.PubSub.subscribe(_consts.CONST.events.instagramAccouns.INSTAGRAM_ACCOUNS_RENDERED, function (eventName, data) {
            modifyAccList();
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
/* 13 */
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
/* 14 */
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
/* 15 */
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.init = init;

var _meteorEmoji = __webpack_require__(23);

var _meteorEmoji2 = _interopRequireDefault(_meteorEmoji);

var _user = __webpack_require__(2);

var _user2 = _interopRequireDefault(_user);

var _apiUserDirect = __webpack_require__(18);

var _apiUserDirect2 = _interopRequireDefault(_apiUserDirect);

var _view = __webpack_require__(3);

var _view2 = _interopRequireDefault(_view);

var _spinner = __webpack_require__(19);

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
/* 17 */
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // import $ from 'jquery';


var _consts = __webpack_require__(0);

var _network = __webpack_require__(5);

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
/* 19 */
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
/* 20 */
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
/* 21 */
/***/ (function(module, exports) {

if("undefined"==typeof brutusin)window.brutusin=new Object;else if("object"!=typeof brutusin)throw"brutusin global variable already exists";!function(){String.prototype.startsWith||(String.prototype.startsWith=function(e,t){return t=t||0,this.indexOf(e,t)===t}),String.prototype.endsWith||(String.prototype.endsWith=function(e,t){var r=this.toString();(void 0===t||t>r.length)&&(t=r.length),t-=e.length;var n=r.indexOf(e,t);return-1!==n&&n===t}),String.prototype.includes||(String.prototype.includes=function(){"use strict";return-1!==String.prototype.indexOf.apply(this,arguments)}),String.prototype.format||(String.prototype.format=function(){for(var e=this,t=0;t<arguments.length;t++){var r=new RegExp("\\{"+t+"\\}","gi");e=e.replace(r,arguments[t])}return e});var BrutusinForms=new Object;BrutusinForms.messages={validationError:"Validation error",required:"This field is **required**",invalidValue:"Invalid field value",addpropNameExistent:"This property is already present in the object",addpropNameRequired:"A name is required",minItems:"At least `{0}` items are required",maxItems:"At most `{0}` items are allowed",pattern:"Value does not match pattern: `{0}`",minLength:"Value must be **at least** `{0}` characters long",maxLength:"Value must be **at most** `{0}` characters long",multipleOf:"Value must be **multiple of** `{0}`",minimum:"Value must be **greater or equal than** `{0}`",exclusiveMinimum:"Value must be **greater than** `{0}`",maximum:"Value must be **lower or equal than** `{0}`",exclusiveMaximum:"Value must be **lower than** `{0}`",minProperties:"At least `{0}` properties are required",maxProperties:"At most `{0}` properties are allowed",uniqueItems:"Array items must be unique",addItem:"Add item","true":"True","false":"False"},BrutusinForms.decorators=new Array,BrutusinForms.addDecorator=function(e){BrutusinForms.decorators[BrutusinForms.decorators.length]=e},BrutusinForms.onResolutionStarted=function(e){},BrutusinForms.onResolutionFinished=function(e){},BrutusinForms.onValidationError=function(e,t){e.focus(),e.className.includes(" error")||(e.className+=" error"),alert(t)},BrutusinForms.onValidationSuccess=function(e){e.className=e.className.replace(" error","")},BrutusinForms.postRender=null,BrutusinForms.instances=new Array,BrutusinForms.create=function(schema){function validateDepencyMapIsAcyclic(){function e(t,r,n){if(r.hasOwnProperty(n))return void(error="Schema dependency graph has cycles");if(r[n]=null,!t.hasOwnProperty(n)){t[n]=null;var a=dependencyMap[n];if(a)for(var i=0;i<a.length;i++)e(t,r,a[i]);delete r[n]}}var t=new Object;for(var r in dependencyMap)t.hasOwnProperty(r)||e(t,new Object,r)}function appendChild(e,t,r){e.appendChild(t);for(var n=0;n<BrutusinForms.decorators.length;n++)BrutusinForms.decorators[n](t,r)}function createPseudoSchema(e){var t=new Object;for(var r in e)"items"!==r&&"properties"!==r&&"additionalProperties"!==r&&("pattern"===r?t[r]=new RegExp(e[r]):t[r]=e[r]);return t}function getDefinition(e){var t=e.split("/"),r=root;for(var n in t)"0"!==n&&(r=r[t[n]]);return r}function containsStr(e,t){for(var r=0;r<e.length;r++)if(e[r]==t)return!0;return!1}function renameRequiredPropeties(e){if(e)if(e.hasOwnProperty("oneOf"))for(var t in e.oneOf)renameRequiredPropeties(e.oneOf[t]);else if(e.hasOwnProperty("$ref")){var r=getDefinition(e.$ref);renameRequiredPropeties(r)}else if("object"===e.type){if(e.properties){e.hasOwnProperty("required")&&Array.isArray(e.required)&&(e.requiredProperties=e.required,delete e.required);for(var n in e.properties)renameRequiredPropeties(e.properties[n])}if(e.patternProperties)for(var a in e.patternProperties){var i=e.patternProperties[a];(i.hasOwnProperty("type")||i.hasOwnProperty("$ref")||i.hasOwnProperty("oneOf"))&&renameRequiredPropeties(e.patternProperties[a])}e.additionalProperties&&(e.additionalProperties.hasOwnProperty("type")||e.additionalProperties.hasOwnProperty("oneOf"))&&renameRequiredPropeties(e.additionalProperties)}else"array"===e.type&&renameRequiredPropeties(e.items)}function populateSchemaMap(e,t){var r=createPseudoSchema(t);if(r.$id=e,schemaMap[e]=r,t){if(t.hasOwnProperty("oneOf")){r.oneOf=new Array,r.type="oneOf";for(var n in t.oneOf){var a=e+"."+n;r.oneOf[n]=a,populateSchemaMap(a,t.oneOf[n])}}else if(t.hasOwnProperty("$ref")){var i=getDefinition(t.$ref);if(i){if(t.hasOwnProperty("title")||t.hasOwnProperty("description")){var o={};for(var s in i)o[s]=i[s];t.hasOwnProperty("title")&&(o.title=t.title),t.hasOwnProperty("description")&&(o.description=t.description),i=o}populateSchemaMap(e,i)}}else if("object"===t.type){if(t.properties){r.properties=new Object;for(var s in t.properties){var a=e+"."+s;r.properties[s]=a;var u=t.properties[s];t.requiredProperties&&(containsStr(t.requiredProperties,s)?u.required=!0:u.required=!1),populateSchemaMap(a,u)}}if(t.patternProperties){r.patternProperties=new Object;for(var l in t.patternProperties){var d=e+"["+l+"]";r.patternProperties[l]=d;var p=t.patternProperties[l];p.hasOwnProperty("type")||p.hasOwnProperty("$ref")||p.hasOwnProperty("oneOf")?populateSchemaMap(d,t.patternProperties[l]):populateSchemaMap(d,SCHEMA_ANY)}}if(t.additionalProperties){var a=e+"[*]";r.additionalProperties=a,t.additionalProperties.hasOwnProperty("type")||t.additionalProperties.hasOwnProperty("oneOf")?populateSchemaMap(a,t.additionalProperties):populateSchemaMap(a,SCHEMA_ANY)}}else"array"===t.type&&(r.items=e+"[#]",populateSchemaMap(r.items,t.items));if(t.hasOwnProperty("dependsOn")){null===t.dependsOn&&(t.dependsOn=["$"]);for(var c=new Array,n=0;n<t.dependsOn.length;n++)t.dependsOn[n]?t.dependsOn[n].startsWith("$")?c[n]=t.dependsOn[n]:e.endsWith("]")?c[n]=e+"."+t.dependsOn[n]:c[n]=e.substring(0,e.lastIndexOf("."))+"."+t.dependsOn[n]:c[n]="$";schemaMap[e].dependsOn=c;for(var n=0;n<c.length;n++){var m=dependencyMap[c[n]];m||(m=new Array,dependencyMap[c[n]]=m),m[m.length]=e}}}}function renderTitle(e,t,r){if(e&&t){var n=document.createElement("label");"any"!==r.type&&"object"!==r.type&&"array"!==r.type&&(n.htmlFor=getInputId());var a=document.createTextNode(t+":");if(appendChild(n,a,r),r.description&&(n.title=r.description),r.required){var i=document.createElement("sup");appendChild(i,document.createTextNode("*"),r),appendChild(n,i,r),n.className="required"}appendChild(e,n,r)}}function getInputId(){return formId+"_"+inputCounter}function validate(e){var t=!0;if(e.hasOwnProperty("getValidationError")){var r=e.getValidationError();r?(BrutusinForms.onValidationError(e,r),t=!1):BrutusinForms.onValidationSuccess(e)}if(e.childNodes)for(var n=0;n<e.childNodes.length;n++)validate(e.childNodes[n])||(t=!1);return t}function clear(e){if(e)for(;e.firstChild;)e.removeChild(e.firstChild)}function render(e,t,r,n,a,i){var o=getSchemaId(r),s=getSchema(o);renderInfoMap[o]=new Object,renderInfoMap[o].titleContainer=e,renderInfoMap[o].container=t,renderInfoMap[o].parentObject=n,renderInfoMap[o].propertyProvider=a,renderInfoMap[o].value=i,clear(e),clear(t);var u=renderers[s.type];if(u&&!s.dependsOn)s.title?renderTitle(e,s.title,s):a&&renderTitle(e,a.getValue(),s),i||(i="undefined"!=typeof initialValue&&null!==initialValue?getInitialValue(r):s["default"]),u(t,r,n,a,i);else if(s.$ref&&obj.schemaResolver){var l=function(e){if(e&&e.hasOwnProperty(r)&&JSON.stringify(schemaMap[r])!==JSON.stringify(e[r])){cleanSchemaMap(r),cleanData(r),populateSchemaMap(r,e[r]);var t=renderInfoMap[r];t&&render(t.titleContainer,t.container,r,t.parentObject,t.propertyProvider,t.value)}BrutusinForms.onResolutionFinished(n)};BrutusinForms.onResolutionStarted(n),obj.schemaResolver([r],obj.getData(),l)}}function createPropertyProvider(e,t){var r=new Object;return r.getValue=e,r.onchange=t,r}function getInitialValue(id){var ret;try{eval("ret = initialValue"+id.substring(1))}catch(e){ret=null}return ret}function getValue(schema,input){if("function"==typeof input.getValue)return input.getValue();var value;return value="select"===input.tagName.toLowerCase()?input.options[input.selectedIndex].value:input.value,""===value?null:("integer"===schema.type?(value=parseInt(value),isFinite(value)||(value=null)):"number"===schema.type?(value=parseFloat(value),isFinite(value)||(value=null)):"boolean"===schema.type?"input"===input.tagName.toLowerCase()?(value=input.checked,value||(value=!1)):"select"===input.tagName.toLowerCase()&&(value="true"===input.value?!0:"false"===input.value?!1:null):"any"===schema.type&&value&&eval("value="+value),value)}function getSchemaId(e){return e.replace(/\["[^"]*"\]/g,"[*]").replace(/\[\d*\]/g,"[#]")}function getParentSchemaId(e){return e.substring(0,e.lastIndexOf("."))}function getSchema(e){return schemaMap[e]}function cleanSchemaMap(e){for(var t in schemaMap)e.startsWith(t)&&delete schemaMap[t]}function cleanData(e){var t=new Expression(e);t.visit(data,function(e,t,r){delete t[r]})}function onDependencyChanged(e,t){var r=dependencyMap[e];if(r&&obj.schemaResolver){var n=function(e){if(e)for(var r in e)if(JSON.stringify(schemaMap[r])!==JSON.stringify(e[r])){cleanSchemaMap(r),cleanData(r),populateSchemaMap(r,e[r]);var n=renderInfoMap[r];n&&render(n.titleContainer,n.container,r,n.parentObject,n.propertyProvider,n.value)}BrutusinForms.onResolutionFinished(t)};BrutusinForms.onResolutionStarted(t),obj.schemaResolver(r,obj.getData(),n)}}function Expression(e){function t(e){if(null===e)return null;for(var t=new Array,r=null,n=0,a=0;a<e.length;a++)'"'===e.charAt(a)?null===r?r='"':'"'===r&&(r=null,t[t.length]=e.substring(n,a+1).trim(),n=a+1):"'"===e.charAt(a)?null===r?r="'":"'"===r&&(r=null,t[t.length]=e.substring(n,a+1).trim(),n=a+1):"["===e.charAt(a)?null===r&&(n!==a&&(t[t.length]=e.substring(n,a).trim()),t[t.length]="[",n=a+1):"]"===e.charAt(a)?null===r&&(n!==a&&(t[t.length]=e.substring(n,a).trim()),t[t.length]="]",n=a+1):"."===e.charAt(a)?null===r&&(n!==a&&(t[t.length]=e.substring(n,a).trim()),n=a+1):a===e.length-1&&(t[t.length]=e.substring(n,a+1).trim());return t}(null===e||0===e.length||"."===e)&&(e="$");for(var r=new Array,n=t(e),a=!1,i=0,o="",s=0;s<n.length;s++){var u=n[s];if("["===u){if(a)throw"Error parsing expression '"+e+"': Nested [ found";a=!0,i=0,o+=u}else if("]"===u){if(!a)throw"Error parsing expression '"+e+"': Unbalanced ] found";a=!1,o+=u,r[r.length]=o,o=""}else if(a){if(i>0)throw"Error parsing expression '"+e+"': Multiple tokens found inside a bracket";o+=u,i++}else r[r.length]=u;if(s===n.length-1&&a)throw"Error parsing expression '"+e+"': Unbalanced [ found"}this.exp=e,this.queue=r,this.visit=function(e,t){function r(e,n,a,i,o){if(null!=a){var s=n.shift();if("$"===s){e="$";var s=n.shift()}if(s)if(Array.isArray(a)){if(!s.startsWith("["))throw"Node '"+e+"' is of type array";var u=s.substring(1,s.length-1);if(u.equals("#"))for(var l=0;l<a.length;l++){var d=a[l];r(e+s,n.slice(0),d,a,l),r(e+"["+l+"]",n.slice(0),d,a,l)}else if("$"===u){var d=a[a.length-1];r(e+s,n.slice(0),d,a,a.length-1)}else{var p=parseInt(u);if(isNaN(p))throw"Element '"+u+"' of node '"+e+"' is not an integer, or the '$' last element symbol,  or the wilcard symbol '#'";if(0>p)throw"Element '"+u+"' of node '"+e+"' is lower than zero";var d=a[p];r(e+s,n.slice(0),d,a,p)}}else{if("object"!=typeof a)throw"boolean"==typeof a||"number"==typeof a||"string"==typeof a?"Node is leaf but still are tokens remaining: "+s:"Node type '"+typeof a+"' not supported for index field '"+e+"'";if("[*]"===s)for(var c in a){var d=a[c];r(e+s,n.slice(0),d,a,c),r(e+'["'+c+'"]',n.slice(0),d,a,c)}else{var d;if(s.startsWith("[")){var u=s.substring(1,s.length-1);if(!u.startsWith('"')&&!u.startsWith("'"))throw"Element '"+u+"' of node '"+e+"' must be a string expression or wilcard '*'";u=u.substring(1,u.length()-1),e+=s,d=a[u]}else e=e.length>0?e+"."+s:s,d=a[s];r(e,n,d,a,s)}}else t(a,i,o)}}r(this.exp,this.queue,e)}}var SCHEMA_ANY={type:"any"},obj=new Object,schemaMap=new Object,dependencyMap=new Object,renderInfoMap=new Object,container,data,error,initialValue,inputCounter=0,root=schema,formId="BrutusinForms#"+BrutusinForms.instances.length;renameRequiredPropeties(schema),populateSchemaMap("$",schema),validateDepencyMapIsAcyclic();var renderers=new Object;return renderers.integer=function(e,t,r,n,a){renderers.string(e,t,r,n,a)},renderers.number=function(e,t,r,n,a){renderers.string(e,t,r,n,a)},renderers.any=function(e,t,r,n,a){renderers.string(e,t,r,n,a)},renderers.string=function(e,t,r,n,a){var i,o=getSchemaId(t),s=getParentSchemaId(o),u=getSchema(o),l=getSchema(s);if("any"===u.type)i=document.createElement("textarea"),a&&(i.value=JSON.stringify(a,null,4),u.readOnly&&(i.disabled=!0));else if(u.media)i=document.createElement("input"),i.type="file",appendChild(i,d,u);else if(u["enum"]){if(i=document.createElement("select"),!u.required){var d=document.createElement("option"),p=document.createTextNode("");d.value="",appendChild(d,p,u),appendChild(i,d,u)}for(var c=0,m=0;m<u["enum"].length;m++){var d=document.createElement("option"),p=document.createTextNode(u["enum"][m]);d.value=u["enum"][m],appendChild(d,p,u),appendChild(i,d,u),a&&u["enum"][m]===a&&(c=m,u.required||c++,u.readOnly&&(i.disabled=!0))}1===u["enum"].length?i.selectedIndex=1:i.selectedIndex=c}else{if(i=document.createElement("input"),"integer"===u.type||"number"===u.type)i.type="number",i.step=u.step?""+u.step:"any","number"!=typeof a&&(a=null);else if("date-time"===u.format)try{i.type="datetime-local"}catch(f){i.type="text"}else"email"===u.format?i.type="email":"text"===u.format?i=document.createElement("textarea"):i.type="text";null!==a&&"undefined"!=typeof a&&(i.value=a,u.readOnly&&(i.disabled=!0))}return i.schema=o,i.setAttribute("autocorrect","off"),i.getValidationError=function(){try{var e=getValue(u,i);if(null===e){if(u.required){if(!l||"object"!==l.type)return BrutusinForms.messages.required;if(l.required)return BrutusinForms.messages.required;for(var t in r)if(null!==r[t])return BrutusinForms.messages.required}}else{if(u.pattern&&!u.pattern.test(e))return BrutusinForms.messages.pattern.format(u.pattern.source);if(u.minLength&&(!e||u.minLength>e.length))return BrutusinForms.messages.minLength.format(u.minLength);if(u.maxLength&&e&&u.maxLength<e.length)return BrutusinForms.messages.maxLength.format(u.maxLength)}if(null!==e&&!isNaN(e)){if(u.multipleOf&&e%u.multipleOf!==0)return BrutusinForms.messages.multipleOf.format(u.multipleOf);if(u.hasOwnProperty("maximum")){if(u.exclusiveMaximum&&e>=u.maximum)return BrutusinForms.messages.exclusiveMaximum.format(u.maximum);if(!u.exclusiveMaximum&&e>u.maximum)return BrutusinForms.messages.maximum.format(u.maximum)}if(u.hasOwnProperty("minimum")){if(u.exclusiveMinimum&&e<=u.minimum)return BrutusinForms.messages.exclusiveMinimum.format(u.minimum);if(!u.exclusiveMinimum&&e<u.minimum)return BrutusinForms.messages.minimum.format(u.minimum)}}}catch(n){return BrutusinForms.messages.invalidValue}},i.onchange=function(){var e;try{e=getValue(u,i)}catch(t){e=null}r?r[n.getValue()]=e:data=e,onDependencyChanged(o,i)},u.description&&(i.title=u.description,i.placeholder=u.description),i.onchange(),i.id=getInputId(),inputCounter++,appendChild(e,i,u),r},renderers["boolean"]=function(e,t,r,n,a){var i,o=getSchemaId(t),s=getSchema(o);if(s.required)i=document.createElement("input"),i.type="checkbox",a===!0&&(i.checked=!0);else{i=document.createElement("select");var u=document.createElement("option"),l=document.createTextNode("");l.value="",appendChild(u,l,s),appendChild(i,u,s);var d=document.createElement("option"),p=document.createTextNode(BrutusinForms.messages["true"]);d.value="true",appendChild(d,p,s),appendChild(i,d,s);var c=document.createElement("option"),m=document.createTextNode(BrutusinForms.messages["false"]);c.value="false",appendChild(c,m,s),appendChild(i,c,s),a===!0?i.selectedIndex=1:a===!1&&(i.selectedIndex=2)}i.onchange=function(){r?r[n.getValue()]=getValue(s,i):data=getValue(s,i),onDependencyChanged(o,i)},i.schema=o,i.id=getInputId(),inputCounter++,s.description&&(i.title=s.description),i.onchange(),appendChild(e,i,s)},renderers.oneOf=function(e,t,r,n,a){var i=getSchemaId(t),o=getSchema(i),s=document.createElement("select"),u=document.createElement("div");u.innerHTML="",s.type="select",s.schema=i;var l=document.createElement("option");l.value=null,appendChild(s,l,o);for(var d=0;d<o.oneOf.length;d++){var p=document.createElement("option"),c=i+"."+d,m=getSchema(c),f=document.createTextNode(m.title);if(p.value=o.oneOf[d],appendChild(p,f,o),appendChild(s,p,o),void 0!==a&&null!==a&&(o.readOnly&&(s.disabled=!0),a.hasOwnProperty("type")&&m.hasOwnProperty("properties")&&m.properties.hasOwnProperty("type"))){var h=getSchema(m.properties.type);a.type===h["enum"][0]&&(s.selectedIndex=d+1,render(null,u,t+"."+(s.selectedIndex-1),r,n,a))}}s.onchange=function(){render(null,u,t+"."+(s.selectedIndex-1),r,n,a)},appendChild(e,s,o),appendChild(e,u,o)},renderers.object=function(e,t,r,n,a){function i(e){var t=new Object;return t.getValue=function(){return e},t.onchange=function(e){},t}function o(e,t,r,n,a,i){var o=getSchemaId(r),s=getSchema(o),u=t.tBodies[0],l=document.createElement("tr"),d=document.createElement("td");d.className="add-prop-name";var p=document.createElement("table"),c=document.createElement("tr"),m=document.createElement("td"),f=document.createElement("td"),h="$"+Object.keys(e).length+"$",v=document.createElement("td");v.className="prop-value";var g=document.createElement("input");g.type="text";var y;i&&(y=RegExp(i)),g.getValidationError=function(){return g.previousValue!==g.value&&e.hasOwnProperty(g.value)?BrutusinForms.messages.addpropNameExistent:g.value?void 0:BrutusinForms.messages.addpropNameRequired};var b=createPropertyProvider(function(){if(g.value){if(!y)return g.value;if(-1!==g.value.search(y))return g.value}return h},function(t){b.getValue()!==t&&(t&&e.hasOwnProperty(t)||(t=h),(e.hasOwnProperty(t)||y&&-1===b.getValue().search(y))&&(e[b.getValue()]=e[t],delete e[t]))});g.onblur=function(){if(g.previousValue!==g.value){for(var t=g.value,r=1;g.previousValue!==t&&e.hasOwnProperty(t);)t=g.value+"("+r+")",r++;return g.value=t,b.onchange(g.previousValue),void(g.previousValue=g.value)}};var P=document.createElement("button");P.setAttribute("type","button"),P.className="remove",appendChild(P,document.createTextNode("x"),s),P.onclick=function(){delete e[g.value],t.deleteRow(l.rowIndex),g.value=null,b.onchange(g.previousValue)},appendChild(m,g,s),appendChild(f,P,s),appendChild(c,m,s),appendChild(c,f,s),appendChild(p,c,s),appendChild(d,p,s),void 0!==i&&(g.placeholder=i),appendChild(l,d,s),appendChild(l,v,s),appendChild(u,l,s),appendChild(t,u,s),render(null,v,r,e,b,a),n&&(g.value=n,g.onblur())}var s=getSchemaId(t),u=getSchema(s),l=new Object;r?(n.getValue()||0===n.getValue())&&(r[n.getValue()]=l):data=l;var d=document.createElement("table");d.className="object";var p=document.createElement("tbody");appendChild(d,p,u);var c=0;if(u.hasOwnProperty("properties")){c=u.properties.length;for(var m in u.properties){var f=document.createElement("tr"),h=document.createElement("td");h.className="prop-name";var v=t+"."+m,g=getSchema(getSchemaId(v)),y=document.createElement("td");y.className="prop-value",appendChild(p,f,g),appendChild(f,h,g),appendChild(f,y,g);var b=i(m),P=null;a&&(P=a[m]),render(h,y,v,l,b,P)}}var O=[];if(u.patternProperties||u.additionalProperties){var w=document.createElement("div");if(appendChild(w,d,u),u.patternProperties)for(var x in u.patternProperties){var C=u.patternProperties[x],E=document.createElement("div");E.className="add-pattern-div";var S=document.createElement("button");if(S.setAttribute("type","button"),S.pattern=x,S.id=t+"["+x+"]",S.onclick=function(){o(l,d,this.id,void 0,void 0,this.pattern)},(u.maxProperties||u.minProperties)&&(S.getValidationError=function(){return u.minProperties&&c+d.rows.length<u.minProperties?BrutusinForms.messages.minProperties.format(u.minProperties):u.maxProperties&&c+d.rows.length>u.maxProperties?BrutusinForms.messages.maxProperties.format(u.maxProperties):void 0}),C.description&&(S.title=C.description),appendChild(S,document.createTextNode("Add "+x),u),appendChild(E,S,u),a)for(var I in a)if(!u.properties||!u.properties.hasOwnProperty(I)){var N=RegExp(x);-1!==I.search(N)&&-1===O.indexOf(I)&&(o(l,d,t+"["+x+"]",I,a[I],x),O.push(I))}appendChild(w,E,u)}if(u.additionalProperties){var F=getSchema(u.additionalProperties),S=document.createElement("button");if(S.setAttribute("type","button"),S.onclick=function(){o(l,d,t+"[*]",void 0)},(u.maxProperties||u.minProperties)&&(S.getValidationError=function(){return u.minProperties&&c+d.rows.length<u.minProperties?BrutusinForms.messages.minProperties.format(u.minProperties):u.maxProperties&&c+d.rows.length>u.maxProperties?BrutusinForms.messages.maxProperties.format(u.maxProperties):void 0}),F.description&&(S.title=F.description),appendChild(S,document.createTextNode("Add"),u),appendChild(w,S,u),a)for(var I in a)u.properties&&u.properties.hasOwnProperty(I)||-1===O.indexOf(I)&&o(l,d,t+'["'+m+'"]',I,a[I])}appendChild(e,w,u)}else appendChild(e,d,u)},renderers.array=function(e,t,r,n,a){function i(e,t,r,n,a){var i=getSchemaId(r),o=getSchema(i),s=document.createElement("tbody"),u=document.createElement("tr");u.className="item";var l=document.createElement("td");l.className="item-index";var d=document.createElement("td");d.className="item-action";var p=document.createElement("td");p.className="item-value";var c=document.createElement("button");c.setAttribute("type","button"),c.className="remove",a===!0&&(c.disabled=!0),appendChild(c,document.createTextNode("x"),o);var m=function(){for(var e=0;e<t.rows.length;e++){var r=t.rows[e];r.cells[0].innerHTML=e+1}};c.onclick=function(){e.splice(u.rowIndex,1),t.deleteRow(u.rowIndex),m()},appendChild(d,c,o);var f=document.createTextNode(t.rows.length+1);appendChild(l,f,o),appendChild(u,l,o),appendChild(u,d,o),appendChild(u,p,o),appendChild(s,u,o),appendChild(t,s,o);var h=createPropertyProvider(function(){return u.rowIndex});render(null,p,r,e,h,n)}var o=getSchemaId(t),s=getSchema(o),u=getSchema(s.items),l=new Array;r?(n.getValue()||0===n.getValue())&&(r[n.getValue()]=l):data=l,n&&(n.onchange=function(e){delete r[e],r[n.getValue()]=l});var d=document.createElement("div"),p=document.createElement("table");p.className="array",appendChild(d,p,s),appendChild(e,d,s);var c=document.createElement("button");if(s.readOnly&&(c.disabled=!0),c.setAttribute("type","button"),c.getValidationError=function(){if(s.minItems&&s.minItems>p.rows.length)return BrutusinForms.messages.minItems.format(s.minItems);if(s.maxItems&&s.maxItems<p.rows.length)return BrutusinForms.messages.maxItems.format(s.maxItems);if(s.uniqueItems)for(var e=0;e<l.length;e++)for(var t=e+1;t<l.length;t++)if(JSON.stringify(l[e])===JSON.stringify(l[t]))return BrutusinForms.messages.uniqueItems},c.onclick=function(){i(l,p,t+"[#]",null)},u.description&&(c.title=u.description),appendChild(c,document.createTextNode(BrutusinForms.messages.addItem),s),appendChild(d,p,s),appendChild(d,c,s),a&&a instanceof Array)for(var m=0;m<a.length;m++)i(l,p,t+"["+m+"]",a[m],s.readOnly);appendChild(e,d,s)},obj.render=function(e,t){container=e,initialValue=t;var r=document.createElement("form");if(r.className="brutusin-form",r.onsubmit=function(e){return!1},container?appendChild(container,r):appendChild(document.body,r),error){var n=document.createElement("label"),a=document.createTextNode(error);appendChild(n,a),n.className="error-message",appendChild(r,n)}else render(null,r,"$",null,null);dependencyMap.hasOwnProperty("$")&&onDependencyChanged("$"),BrutusinForms.postRender&&BrutusinForms.postRender(obj)},obj.getRenderingContainer=function(){return container},obj.validate=function(){return validate(container)},obj.getData=function(){function e(t,r){if(null===s&&(s=SCHEMA_ANY),r.$ref&&(r=getDefinition(r.$ref)),t instanceof Array){if(0===t.length)return null;for(var n=new Array,a=0;a<t.length;a++)n[a]=e(t[a],r.items);return n}if(""===t)return null;if(t instanceof Object){var n=new Object,i=!1;for(var o in t)if(!o.startsWith("$")||!o.endsWith("$")){var s=null;if(r.hasOwnProperty("properties")&&r.properties.hasOwnProperty(o)&&(s=r.properties[o]),null===s&&r.hasOwnProperty("additionalProperties")&&"object"==typeof r.additionalProperties&&(s=r.additionalProperties),null===s&&r.hasOwnProperty("patternProperties"))for(var u in r.patternProperties){var l=RegExp(u);if(-1!==o.search(l)){s=r.patternProperties[u];break}}var d=e(t[o],s);null!==d&&(n[o]=d,i=!0)}return i||r.required?n:null}return t}return container?e(data,schema):null},BrutusinForms.instances[BrutusinForms.instances.length]=obj,obj},brutusin["json-forms"]=BrutusinForms}();

/***/ }),
/* 22 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;!function(f){if(true)module.exports=f();else if("function"==typeof define&&define.amd)define([],f);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).MeteorEmoji=f()}}(function(){return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n||e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){!function(global,factory){if(void 0!==exports)factory(module);else{var mod={exports:{}};factory(mod),global.meteorEmoji=mod.exports}}(this,function(module){"use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),MeteorEmoji=function(){function MeteorEmoji(){!function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,MeteorEmoji),this.initiate()}return _createClass(MeteorEmoji,[{key:"initiate",value:function(){var _this=this;document.querySelectorAll('[data-meteor-emoji="true"], [data-meteor-emoji-large="true"]').forEach(function(element){_this.generateElements(element)})}},{key:"generateElements",value:function(emojiInput){var clickLink=function(event){var caretPos=emojiInput.selectionStart;emojiInput.value=emojiInput.value.substring(0,caretPos)+" "+event.target.innerHTML+emojiInput.value.substring(caretPos),emojiPicker.style.display="block","undefined"!=typeof angular&&angular.element(emojiInput).triggerHandler("change")},clickCategory=function(event){emojiInput.selectionStart;emojiPicker.style.display="block";for(var hideUls=emojiPicker.querySelectorAll("ul"),i=1,l=hideUls.length;i<l;i++)hideUls[i].style.display="none";var backgroundToggle=emojiPicker.querySelectorAll(".category a");for(i=0,l=backgroundToggle.length;i<l;i++)backgroundToggle[i].style.background="none";emojiPicker.querySelector("."+event.target.id).style.display="block",emojiPicker.querySelector("#"+event.target.id).style.background="#c2c2c2"};emojiInput.style.width="100%";var emojiContainer=document.createElement("div");emojiContainer.style.position="relative",emojiInput.parentNode.replaceChild(emojiContainer,emojiInput),emojiContainer.appendChild(emojiInput);var emojiPicker=document.createElement("div");emojiPicker.tabIndex=0,emojiInput.hasAttribute("data-meteor-emoji-large")?(emojiPicker.style.zIndex="999",emojiPicker.style.display="block",emojiPicker.style.width="100%",emojiPicker.style.marginBottom="15px"):(emojiPicker.style.position="absolute",emojiPicker.style.right="0px",emojiPicker.style.top="30px",emojiPicker.style.display="none",emojiPicker.style.width="400px"),emojiPicker.style.zIndex="999",emojiPicker.style.overflow="hidden",emojiPicker.style.background="#fff",emojiPicker.style.borderRadius="5px",emojiPicker.style.boxShadow="0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",emojiPicker.style.borderRadius="2px;",emojiPicker.style.marginTop="5px",emojiPicker.style.outline="none";var emojiTrigger=document.createElement("a");emojiTrigger.style.position="absolute",emojiTrigger.style.top="10px",emojiTrigger.style.right="10px",emojiTrigger.style.textDecoration="none",emojiTrigger.setAttribute("href","javascript:void(0)"),emojiTrigger.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12 14"><path d="M8.9 8.4q-0.3 0.9-1.1 1.5t-1.8 0.6-1.8-0.6-1.1-1.5q-0.1-0.2 0-0.4t0.3-0.2q0.2-0.1 0.4 0t0.2 0.3q0.2 0.6 0.7 1t1.2 0.4 1.2-0.4 0.7-1q0.1-0.2 0.3-0.3t0.4 0 0.3 0.2 0 0.4zM5 5q0 0.4-0.3 0.7t-0.7 0.3-0.7-0.3-0.3-0.7 0.3-0.7 0.7-0.3 0.7 0.3 0.3 0.7zM9 5q0 0.4-0.3 0.7t-0.7 0.3-0.7-0.3-0.3-0.7 0.3-0.7 0.7-0.3 0.7 0.3 0.3 0.7zM11 7q0-1-0.4-1.9t-1.1-1.6-1.6-1.1-1.9-0.4-1.9 0.4-1.6 1.1-1.1 1.6-0.4 1.9 0.4 1.9 1.1 1.6 1.6 1.1 1.9 0.4 1.9-0.4 1.6-1.1 1.1-1.6 0.4-1.9zM12 7q0 1.6-0.8 3t-2.2 2.2-3 0.8-3-0.8-2.2-2.2-0.8-3 0.8-3 2.2-2.2 3-0.8 3 0.8 2.2 2.2 0.8 3z"/></svg>',emojiTrigger.onclick=function(){"none"===emojiPicker.style.display?emojiPicker.style.display="block":"block"===emojiPicker.style.display&&(emojiPicker.style.display="none"),emojiPicker.focus()},emojiInput.hasAttribute("data-meteor-emoji-large")||emojiContainer.appendChild(emojiTrigger),window.addEventListener("click",function(e){emojiInput.hasAttribute("data-meteor-emoji-large")||"block"===emojiPicker.style.display&&(emojiPicker.contains(e.target)||emojiTrigger.contains(e.target)||(emojiPicker.style.display="none"))});var facesCategory=document.createElement("ul");facesCategory.style.padding="10px 0px",facesCategory.style.margin="0",facesCategory.style.listStyle="none",facesCategory.style.textAlign="left",facesCategory.style.marginLeft="3%",facesCategory.classList.add("faces");var animalsCategory=document.createElement("ul");animalsCategory.style.padding="10px 0px",animalsCategory.style.margin="0",animalsCategory.style.listStyle="none",animalsCategory.style.textAlign="left",animalsCategory.style.marginLeft="3%",animalsCategory.classList.add("animals"),animalsCategory.style.display="none";var foodCategory=document.createElement("ul");foodCategory.style.padding="10px 0px",foodCategory.style.margin="0",foodCategory.style.listStyle="none",foodCategory.style.textAlign="left",foodCategory.style.marginLeft="3%",foodCategory.classList.add("food"),foodCategory.style.display="none";var sportCategory=document.createElement("ul");sportCategory.style.padding="10px 0px",sportCategory.style.margin="0",sportCategory.style.listStyle="none",sportCategory.style.textAlign="left",sportCategory.style.marginLeft="3%",sportCategory.classList.add("sport"),sportCategory.style.display="none";var transportCategory=document.createElement("ul");transportCategory.style.padding="10px 0px",transportCategory.style.margin="0",transportCategory.style.listStyle="none",transportCategory.style.textAlign="left",transportCategory.style.marginLeft="3%",transportCategory.classList.add("transport"),transportCategory.style.display="none";var objectsCategory=document.createElement("ul");objectsCategory.style.padding="10px 0px",objectsCategory.style.margin="0",objectsCategory.style.listStyle="none",objectsCategory.style.textAlign="left",objectsCategory.style.marginLeft="3%",objectsCategory.classList.add("objects"),objectsCategory.style.display="none";var emojiCategory=document.createElement("ul");emojiCategory.style.padding="0px",emojiCategory.style.margin="0",emojiCategory.style.display="table",emojiCategory.style.width="100%",emojiCategory.style.background="#eff0f1",emojiCategory.style.listStyle="none",emojiCategory.classList.add("category");var emojiCategories=new Array;emojiCategories.push({name:"faces",svg:'<svg id="faces" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150"><path id="faces" d="M74.34,128.48a53.5,53.5,0,1,1,37.84-15.67,53.16,53.16,0,0,1-37.84,15.67Zm0-97.89a44.4,44.4,0,1,0,31.4,13,44.07,44.07,0,0,0-31.4-13Z"/><path id="faces" d="M74.35,108A33.07,33.07,0,0,1,41.29,75a2.28,2.28,0,0,1,2.27-2.28h0A2.27,2.27,0,0,1,45.83,75a28.52,28.52,0,0,0,57,0,2.27,2.27,0,0,1,4.54,0A33.09,33.09,0,0,1,74.35,108Z"/><path id="faces" d="M58.84,62a6.81,6.81,0,1,0,6.81,6.81A6.81,6.81,0,0,0,58.84,62Z"/><path id="faces" d="M89.87,62a6.81,6.81,0,1,0,6.81,6.81A6.82,6.82,0,0,0,89.87,62Z"/></svg>'}),emojiCategories.push({name:"animals",svg:'<svg id="animals" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150"><path id="animals" d="M59.9,91.75h0c-22.46,0-41.82-19.34-44.09-44A52.1,52.1,0,0,1,16,36.8a4.51,4.51,0,0,1,2.63-3.62,39.79,39.79,0,0,1,12.74-3.37c23.92-2.15,45.35,17.83,47.74,43.86a52.77,52.77,0,0,1-.15,10.93,4.56,4.56,0,0,1-2.64,3.62,39.67,39.67,0,0,1-12.73,3.36c-1.23.11-2.45.17-3.66.17ZM24.76,40.49a41.29,41.29,0,0,0,.09,6.4C26.7,67,42.09,82.66,59.9,82.67h0c.94,0,1.88,0,2.83-.14a30.39,30.39,0,0,0,7.41-1.62,41.14,41.14,0,0,0-.11-6.4C68.09,53.38,51.11,37.08,32.17,38.86a30.78,30.78,0,0,0-7.41,1.63Z"/><path id="animals" d="M36.68,125.64a4.53,4.53,0,0,1-4.33-3.17,53.32,53.32,0,0,1-2.26-11A50.42,50.42,0,0,1,39.51,76.6c7.35-9.91,17.84-16,29.5-17,1.16-.11,2.33-.13,3.47-.13a4.54,4.54,0,0,1,4.33,3.16,51.59,51.59,0,0,1,2.27,11.08,50.39,50.39,0,0,1-9.42,34.8c-7.35,9.91-17.83,16-29.5,17a17.63,17.63,0,0,1-3.48.12ZM69.09,68.69A32.41,32.41,0,0,0,46.8,82a42.57,42.57,0,0,0-6.71,34.38,32.38,32.38,0,0,0,22.28-13.32A41.35,41.35,0,0,0,70,74.51a39.38,39.38,0,0,0-.94-5.82Z"/><path id="animals" d="M90.27,91.75c-1.22,0-2.43-.06-3.66-.17a39.67,39.67,0,0,1-12.73-3.36,4.57,4.57,0,0,1-2.64-3.61,53.38,53.38,0,0,1-.17-10.93c2.41-26,23.7-46.07,47.76-43.87a39.74,39.74,0,0,1,12.73,3.37,4.57,4.57,0,0,1,2.64,3.62,53.35,53.35,0,0,1,.16,10.92c-2.28,24.69-21.65,44-44.09,44ZM80,80.91a30.57,30.57,0,0,0,7.42,1.62c19.07,1.78,35.92-14.53,37.87-35.64a42.55,42.55,0,0,0,.1-6.4A30.86,30.86,0,0,0,118,38.86C99,37.07,82.06,53.38,80.12,74.51a43.91,43.91,0,0,0-.1,6.4Z"/><path id="animals" d="M113.49,125.64h0c-1.16,0-2.3,0-3.46-.12-23.9-2.21-41.36-25.47-38.94-51.85A53.52,53.52,0,0,1,73.34,62.6a4.55,4.55,0,0,1,4.33-3.16c1.16,0,2.34,0,3.51.13,11.64,1.07,22.11,7.12,29.48,17a50.51,50.51,0,0,1,9.42,34.81,53.51,53.51,0,0,1-2.26,11,4.54,4.54,0,0,1-4.33,3.19ZM81.08,68.69a42.53,42.53,0,0,0-1,5.82c-1.94,21.1,11.45,39.71,29.95,41.88A42.38,42.38,0,0,0,103.36,82,32.42,32.42,0,0,0,81.08,68.69Z"/><path id="animals" d="M75.08,45.45a7.83,7.83,0,1,0,7.83,7.83,7.83,7.83,0,0,0-7.83-7.83Z"/><path id="animals" d="M76.29,51.89a2.26,2.26,0,0,1-2.14-3A46,46,0,0,1,92.82,25.34a2.27,2.27,0,1,1,2.4,3.86A41.4,41.4,0,0,0,78.43,50.39a2.28,2.28,0,0,1-2.14,1.5Z"/><path id="animals" d="M73.87,51.89a2.28,2.28,0,0,1-2.14-1.5A41.35,41.35,0,0,0,54.94,29.2a2.27,2.27,0,0,1,2.39-3.86A46,46,0,0,1,76,48.85a2.28,2.28,0,0,1-1.37,2.91,2.31,2.31,0,0,1-.77.13Z"/></svg>'}),emojiCategories.push({name:"food",svg:'<svg id="food" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150"><path id="food" d="M104,20.76h.15c15.83.52,24.08,21.48,24.07,32.56.26,12.42-10.72,23.55-24,24.21a3.53,3.53,0,0,1-.46,0c-13.25-.66-24.23-11.8-24-24.3,0-11,8.26-31.95,24.07-32.47Zm0,47.69c8.25-.54,15.3-7.51,15.14-15,0-8.12-6.22-23.1-15.14-23.57-8.9.46-15.14,15.45-15.14,23.48-.14,7.61,6.9,14.59,15.14,15.13Z"/><path id="food" d="M97.19,69.21h.14a4.53,4.53,0,0,1,4.4,4.68l-1.48,46.92a1.59,1.59,0,0,0,.5,1.06,4.6,4.6,0,0,0,3.25,1.19h0a4.57,4.57,0,0,0,3.26-1.2,1.53,1.53,0,0,0,.49-1l-1.48-46.95a4.54,4.54,0,1,1,9.08-.28l1.47,46.91a10.42,10.42,0,0,1-3,7.65,13.65,13.65,0,0,1-9.81,4h0a13.58,13.58,0,0,1-9.79-4,10.42,10.42,0,0,1-3-7.67l1.48-46.89a4.53,4.53,0,0,1,4.53-4.4Z"/><path id="food" d="M41.84,69.21H42a4.53,4.53,0,0,1,4.4,4.68L44.9,120.81a1.57,1.57,0,0,0,.5,1.06,4.6,4.6,0,0,0,3.25,1.19h0a4.51,4.51,0,0,0,3.24-1.19,1.48,1.48,0,0,0,.5-1L50.93,73.89a4.53,4.53,0,0,1,4.39-4.68A4.4,4.4,0,0,1,60,73.61l1.48,46.91a10.49,10.49,0,0,1-3,7.66,13.57,13.57,0,0,1-9.78,4h0a13.59,13.59,0,0,1-9.78-4,10.48,10.48,0,0,1-3-7.67l1.48-46.9a4.54,4.54,0,0,1,4.54-4.4Z"/><path id="food" d="M28.59,20.76a4.54,4.54,0,0,1,4.54,4.54V51a15.52,15.52,0,0,0,31,0V25.3a4.55,4.55,0,0,1,9.09,0V51a24.61,24.61,0,1,1-49.21,0V25.3a4.54,4.54,0,0,1,4.54-4.54Z"/><path id="food" d="M55.34,20.76a4.54,4.54,0,0,1,4.54,4.54v19a4.54,4.54,0,1,1-9.08,0v-19a4.54,4.54,0,0,1,4.54-4.54Z"/><path id="food" d="M42,20.76a4.54,4.54,0,0,1,4.54,4.54v19a4.54,4.54,0,1,1-9.08,0v-19A4.54,4.54,0,0,1,42,20.76Z"/></svg>'}),emojiCategories.push({name:"sport",svg:'<svg id="sport" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150"><path id="sport" d="M75.35,130.24a53.49,53.49,0,1,1,53.48-53.49,53.55,53.55,0,0,1-53.48,53.49Zm0-97.89a44.41,44.41,0,1,0,44.4,44.4,44.1,44.1,0,0,0-44.4-44.4Z"/><path id="sport" d="M119.24,84.08A51.29,51.29,0,0,1,68,32.86a49.44,49.44,0,0,1,.26-5,2.26,2.26,0,0,1,2-2c1.66-.16,3.34-.25,5-.25a51.26,51.26,0,0,1,51.21,51.21c0,1.71-.09,3.38-.25,5a2.28,2.28,0,0,1-2,2c-1.65.16-3.33.25-5,.25ZM72.64,30.16c-.06.9-.08,1.79-.08,2.7a46.73,46.73,0,0,0,46.68,46.68q1.37,0,2.7-.09c.06-.89.08-1.79.08-2.7A46.72,46.72,0,0,0,75.35,30.08c-.91,0-1.82,0-2.71.08Z"/><path id="sport" d="M75.35,128A51.28,51.28,0,0,1,24.12,76.76c0-1.7.1-3.38.25-5a2.29,2.29,0,0,1,2-2c1.66-.16,3.33-.25,5.05-.25a51.27,51.27,0,0,1,51.21,51.22c0,1.69-.09,3.37-.25,5a2.27,2.27,0,0,1-2,2c-1.66.16-3.32.25-5,.25ZM28.75,74.05c-.05.9-.09,1.8-.09,2.71a46.74,46.74,0,0,0,46.69,46.67c.91,0,1.8,0,2.7-.08,0-.9.08-1.8.08-2.7A46.73,46.73,0,0,0,31.46,74c-.91,0-1.81,0-2.71.08Z"/><polygon id="sport" points="42.69 112.61 39.48 109.4 108 40.88 111.21 44.1 42.69 112.61 42.69 112.61"/></svg>'}),emojiCategories.push({name:"transport",svg:'<svg id="transport" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150"><path id="transport" d="M120.7,116H31a4.55,4.55,0,0,1-4.54-4.55V54.28A31.82,31.82,0,0,1,58.25,22.49h35.2a31.83,31.83,0,0,1,31.8,31.79v57.15A4.55,4.55,0,0,1,120.7,116Zm-85.16-9.09h80.62V54.28A22.74,22.74,0,0,0,93.45,31.57H58.25A22.74,22.74,0,0,0,35.54,54.28v52.61Z"/><path id="transport" d="M49.35,129.23c-8.53,0-13.62-2.77-13.62-7.41V115.6a4.54,4.54,0,1,1,9.08,0v4.06a21.32,21.32,0,0,0,9.09,0V115.6a4.54,4.54,0,0,1,9.08,0v6.22c0,4.64-5.09,7.41-13.63,7.41Z"/><path id="transport" d="M102.34,129.23c-8.53,0-13.62-2.77-13.62-7.41V115.6a4.54,4.54,0,0,1,9.08,0v4.06a21.28,21.28,0,0,0,9.08,0V115.6a4.55,4.55,0,0,1,9.09,0v6.22c0,4.64-5.09,7.41-13.63,7.41Z"/><path id="transport" d="M97.81,44.83H53.9a4.55,4.55,0,1,1,0-9.09H97.81a4.55,4.55,0,0,1,0,9.09Z"/><path id="transport" d="M54.28,84.2A6.8,6.8,0,1,0,61.07,91a6.8,6.8,0,0,0-6.79-6.8Z"/><path id="transport" d="M97.43,84.2a6.8,6.8,0,1,0,6.79,6.8,6.8,6.8,0,0,0-6.79-6.8Z"/><path id="transport" d="M107.08,81H44.63a6.82,6.82,0,0,1-6.82-6.82V54.28a6.82,6.82,0,0,1,6.82-6.81h62.45a6.82,6.82,0,0,1,6.81,6.81V74.15A6.83,6.83,0,0,1,107.08,81ZM44.63,52a2.28,2.28,0,0,0-2.28,2.27V74.15a2.28,2.28,0,0,0,2.28,2.27h62.45a2.27,2.27,0,0,0,2.27-2.27V54.28A2.27,2.27,0,0,0,107.08,52Z"/></svg>'}),emojiCategories.push({name:"objects",svg:'<svg id="objects" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150"><path id="objects" d="M107.78,129a4.55,4.55,0,0,1-2.67-.87l-30-21.79-30,21.79a4.53,4.53,0,0,1-5.34,0,4.58,4.58,0,0,1-1.65-5.08L49.59,87.82,19.6,66a4.54,4.54,0,0,1,2.67-8.22H59.34L70.8,22.55a4.55,4.55,0,0,1,8.64,0L90.89,57.81H128A4.54,4.54,0,0,1,130.63,66l-30,21.79,11.46,35.25a4.55,4.55,0,0,1-4.32,6ZM75.12,96.2a4.53,4.53,0,0,1,2.67.87l21.35,15.51L91,87.49a4.55,4.55,0,0,1,1.65-5.08L114,66.89H87.59a4.54,4.54,0,0,1-4.32-3.13l-8.15-25.1L67,63.76a4.53,4.53,0,0,1-4.32,3.13H36.25L57.61,82.41a4.54,4.54,0,0,1,1.65,5.08l-8.17,25.09L72.45,97.07a4.53,4.53,0,0,1,2.67-.87Z"/></svg>'});emojiCategories.map(function(item){var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.padding="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.style.display="table-cell",emojiLink.style.textAlign="center",emojiLink.id=String(item.name),"faces"==String(item.name)&&(emojiLink.style.background="#c2c2c2"),emojiLink.innerHTML=String(item.svg),emojiLink.onmousedown=clickCategory,emojiCategory.appendChild(emojiLink)}),[128513,128514,128515,128516,128517,128518,128521,128522,128523,128524,128525,128527,128530,128531,128532,128534,128536,128538,128540,128541,128542,128544,128545,128546,128547,128548,128549,128552,128553,128554,128555,128557,128560,128561,128562,128563,128565,128567].map(function(item){var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.margin="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.innerHTML=String.fromCodePoint(item),emojiLink.onmousedown=clickLink,facesCategory.appendChild(emojiLink)}),[128012,128013,128014,128017,128018,128020,128023,128024,128025,128026,128027,128028,128029,128030,128031,128032,128033,128034,128035,128036,128037,128038,128039,128040,128041,128043,128044,128045,128046,128047,128048,128049,128050,128051,128052,128053,128054,128055,128056,128057,128058,128059,128060].map(function(item){var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.margin="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.innerHTML=String.fromCodePoint(item),emojiLink.onmousedown=clickLink,animalsCategory.appendChild(emojiLink)}),[127813,127814,127815,127816,127817,127818,127820,127821,127822,127823,127825,127826,127827,127828,127829,127830,127831,127832,127836,127837,127838,127839,127840,127841,127842,127843,127844,127846,127848,127849,127850,127851,127852,127853,127856,127858,127859,127860,127863,127864,127867].map(function(item){var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.margin="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.innerHTML=String.fromCodePoint(item),emojiLink.onmousedown=clickLink,foodCategory.appendChild(emojiLink)}),[127921,127923,127934,127935,127936,127937,127938,127939,127940,127942,127944,127946,128675,128692,128693,9917,9918,9978,127907,127919,9971].map(function(item){var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.margin="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.innerHTML=String.fromCodePoint(item),emojiLink.onmousedown=clickLink,sportCategory.appendChild(emojiLink)}),[128641,128642,128646,128648,128650,128653,128654,128656,128660,128662,128664,128667,128668,128669,128670,128671,128672,128673,128640,128643,128644,128645,128647,128649,128652,128657,128658,128659,128661,128663,128665,128666,128674,128676,128690].map(function(item){var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.margin="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.innerHTML=String.fromCodePoint(item),emojiLink.onmousedown=clickLink,transportCategory.appendChild(emojiLink)}),[127890,127880,127881,127887,127891,127905,127906,127908,127909,127911,127912,127915,127916,127918,127919,127926,127927,127928,127929,127930,127931,127932,127968,127973,127978,128147,128148,128149,128150,128151,128152,128187,128186,128197,128213,128247].map(function(item){var emojiLi=document.createElement("li");emojiLi.style.display="inline-block",emojiLi.style.margin="5px";var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.margin="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.innerHTML=String.fromCodePoint(item),emojiLink.onmousedown=clickLink,objectsCategory.appendChild(emojiLink)}),emojiPicker.appendChild(emojiCategory),emojiPicker.appendChild(facesCategory),emojiPicker.appendChild(animalsCategory),emojiPicker.appendChild(foodCategory),emojiPicker.appendChild(sportCategory),emojiPicker.appendChild(transportCategory),emojiPicker.appendChild(objectsCategory),emojiContainer.appendChild(emojiPicker)}}]),MeteorEmoji}();module.exports=MeteorEmoji})},{}]},{},[1])(1)});

/***/ }),
/* 24 */
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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTY2OTg0Yzc0NTFlYTRiYmY1ZmMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb29raWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy91c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vanMtc2VydmljZXMvdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9+L3B1YnN1Yi1qcy9zcmMvcHVic3ViLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vanMtc2VydmljZXMvbmV0d29yay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2pzLXNlcnZpY2VzL2FwaS10YXNrLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2NoYXQtYm90LWJsb2NrL2NoYXQtYm90LWJsb2NrLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvY29uZmlybS1yZWcvY29uZmlybS1yZWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9mb2xsb3cvZm9sbG93LXN0YXR1cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2ZvbGxvdy9mb2xsb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9oZWFkZXIvYnVyZ2VyLW1lbnUvYnVyZ2VyLW1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9oZWFkZXIvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaW5zdGFncmFtLWFjY291bnRzLWxpc3QvaW5zdGFncmFtLWFjY291bnRzLWxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9tZXNzYWdlcy9tZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3JlZ2lzdGVyLWZvcm0vcmVnaXN0ZXItZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2pzLXNlcnZpY2VzL2FwaS11c2VyLWRpcmVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2pzLXNlcnZpY2VzL3NwaW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL19hdXRoL2xvZ2luLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9icnV0dXNpbi1qc29uLWZvcm1zL2Rpc3QvanMvYnJ1dHVzaW4tanNvbi1mb3Jtcy5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jhc2Uuc2NzcyIsIndlYnBhY2s6Ly8vLi9+L21ldGVvci1lbW9qaS9kaXN0L21ldGVvckVtb2ppLm1pbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIl0sIm5hbWVzIjpbIkNPTlNUIiwidXJsIiwidG1UeXBlcyIsImZvbGxvd2luZ1QiLCJmb2xsb3dpbmdTdWJUIiwiY2hhdEJvdFQiLCJjaGF0Qm90U3ViVCIsImJhc2UiLCJyZWdpc3RyYXRpb24iLCJsb2dpbiIsImNvbmZpcm1hdGlvbiIsImluc3RhZ3JhbV9hZGRBY2NvdW50IiwiaW5zdGFncmFtQWNjb3VudF9nZXRNZXRhRGF0YSIsImluc3RhZ3JhbUFjY291bnRfY2hlY2twb2ludCIsImluc3RhZ3JhbUFjY291bnRfY29uZmlybUtleSIsImluc3RhZ3JhbURpcmVjdF9nZXRNZXRhRGF0YSIsImluc3RhZ3JhbURpcmVjdF9wb3N0TWVzc2FnZSIsImluc3RhZ3JhbVRhc2tNYW5hZ2VyIiwiaW5zdGFncmFtVGFza01hbmFnZXJfZ2V0TWV0YURhdGEiLCJpbnN0YWdyYW1UYXNrTWFuYWdlcl9nZXRUYXNrVHlwZXMiLCJpbnN0YWdyYW1UYXNrTWFuYWdlcl9nZXRUYXNrQnlUeXBlcyIsInR5cGUiLCJzdWJ0eXBlIiwiaW5zdGFncmFtVGFza01hbmFnZXJfZ2V0RGVmYXVsdENvbmZpZ3MiLCJpbnN0YWdyYW1UYXNrTWFuYWdlcl9wb3N0U3RhcnRGb2xsb3dpbmdMaXN0IiwiaW5zdGFncmFtVGFza01hbmFnZXJfcHV0U3RvcEZvbGxvd2luZ0xpc3QiLCJpZCIsImluc3RhZ3JhbVRhc2tNYW5hZ2VyX2RlbFJlbW92ZUZvbGxvd2luZ0xpc3QiLCJ1c2VyIiwiZW1haWwiLCJwYXNzd29yZCIsInRva2VuIiwiY29va2llU3RvcmFnZSIsImVtYWlsQ29uZmlybWVkIiwidWlTZWxlY3RvcnMiLCJoZWFkZXJMb2dpbkJveCIsImhlYWRlck5hdkxvZ2luQnRuIiwiaGVhZGVyUmVnQm94IiwiaGVhZGVyUmVnQnRuIiwiaW5zdGFncmFtIiwiYWRkQWNjb3VudEJ0blNlbGVjdG9yIiwiYWRkQWNjb3VudEJ0bklkIiwiZXZlbnRzIiwiVVNFUl9MT0dHRUQiLCJVU0VSX0xPR09VVCIsIlVTRVJfRU1BSUxfQ09ORklSTUVEIiwiU1RPUF9GSVhFRF9TUElOTkVSIiwibWVzc2FnZXMiLCJSRUNJRVZFX05FV19NRVNTQUdFIiwiaW5zdGFncmFtQWNjb3VucyIsIklOU1RBR1JBTV9BQ0NPVU5TX1JFTkRFUkVEIiwidGFza3MiLCJORVdfVEFTS19DUkVBVEVEIiwiZ2V0UGF0aCIsIm5hbWUiLCJnZXRQYXRoVHlwZVN1YnR5cGUiLCJDb29raWVTcnYiLCJnZXQiLCJjIiwiZG9jdW1lbnQiLCJjb29raWUiLCJtYXRjaCIsImRlY29kZVVSSUNvbXBvbmVudCIsInNldCIsInZhbHVlIiwib3B0cyIsInBhdGgiLCJkYXlzIiwiT2JqZWN0IiwiZW50cmllcyIsInJlZHVjZSIsInN0ciIsImsiLCJ2IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVtb3ZlIiwiVXNlciIsIm5ldHdvcmsiLCJzZXR0aW5nUG9zdCIsIm1ldGhvZCIsImhlYWRlcnMiLCJnZXRUb2tlbiIsImNvb2tpZVRva2VuIiwiZm9ybURhdGEiLCJjYkVycm9yIiwic2V0dGluZyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwic2VuZFJlcXVlc3QiLCJ1c2VybmFtZSIsImNoZWNrcG9pbnRUeXBlIiwia2V5IiwidXNlckluc3RhbmNlIiwidmlld1V0aWxzIiwic2hvd0luZm9NZXNzYWdlIiwic2VsZWN0b3IiLCJtZXNzYWdlMSIsIm1lc3NhZ2UyIiwiJCIsImVtcHR5IiwiYXBwZW5kIiwiZmlsbExpc3QiLCIkbGlzdCIsImRhdGFBcnJheSIsIml0ZW1zIiwiY0xpc3QiLCJmb3JFYWNoIiwiaXRlbSIsImkiLCJsaSIsImFwcGVuZFRvIiwiYWRkQ2xhc3MiLCJ0ZXh0IiwiaXNFbWFpbCIsInJlZ2V4IiwidGVzdCIsImdldEZvcm1hdHRlZERhdGVVdGlsIiwidFN0YW1wIiwic2hvd0Z1bGxUaW1lIiwiZGF0ZSIsIkRhdGUiLCJtb250aCIsImdldE1vbnRoIiwiZGF5IiwiZ2V0RGF0ZSIsImhvdXIiLCJnZXRIb3VycyIsIm1pbiIsImdldE1pbnV0ZXMiLCJzZWMiLCJnZXRTZWNvbmRzIiwiZ2V0RnVsbFllYXIiLCJOZXR3b3JrIiwicmVzdWx0IiwiJGVsIiwibGVuZ3RoIiwic3RhdHVzIiwic3RhdGUiLCJtZXNzYWdlIiwicmVzcG9uc2UiLCJlcnJvciIsIkVycm9yIiwic3RhdHVzVGV4dCIsIlVSTCIsIk9QVFMiLCJmZXRjaCIsInRoZW4iLCJQcm9taXNlIiwiYWxsIiwianNvbiIsIm9rIiwiY2JFcnJvckRlZmF1bHQiLCJjaGVja1N0YXR1cyIsIlVzZXJUYXNrTWFuYWdlciIsImFzSGVhZGVyIiwic3ViVHlwZSIsImRldGFpbHMiLCJ0YXNrSWQiLCJTVFJBVEVHWV9UWVBFIiwiU1RSQVRFR1lfU1VCVFlQRSIsImhlYWRlciIsImJ1cmdlck1lbnUiLCJpbnN0YWdyYW1BY2NvdW50cyIsImZvbGxvdyIsImNoYXRCb3QiLCJzZWxlY3RvckNzc0xvZ2luRm9ybSIsIl9sb2dpbkJveCIsIl9mb3JtSWQiLCJfYnV0dG9uU3VibWl0SWQiLCJfc2hvd0xvZ2luQm94QnRuSWQiLCJzZWxlY3RvckNzc0xvZ2luRm9ybUluc3RhZ3JhbSIsImlzTG9naW5JbnN0YWdyYW0iLCJzZXRQdWJTdWIiLCJQdWJTdWIiLCJ3aW5kb3ciLCJpbml0IiwiaW5pdEhlYWRlciIsImluaXRTdGVwcyIsIiRmb3JtIiwidGV4dFJvdyIsIm9uIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJjbG9uZSIsImluc2VydEJlZm9yZSIsImtleVdvcmRzIiwidmFsIiwidHJpbSIsInJlcGxhY2UiLCJzcGxpdCIsImZpbHRlciIsImFuc3dlciIsInRyaWdnZXIiLCJwdWJsaXNoIiwiY29uZmlybWF0aW9uV2l0aFJlZGlyZWN0IiwicGFyc2VRdWVyeVN0cmluZyIsImxvY2F0aW9uIiwic2VhcmNoIiwib2JqVVJMIiwiUmVnRXhwIiwiJDAiLCIkMSIsIiQyIiwicGFyYW1zIiwic2VuZENvbmZpcm0iLCJjb25maXJtIiwiZGF0YSIsImN1c3RvbWVyc0RhdGFTdHJpbmciLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRUaW1lb3V0IiwicmVkaXJlY3QiLCJwYXRobmFtZSIsImluZGV4T2YiLCJmaWxsTGlzdE1ldGEiLCJpc1J1bnMiLCJwcm9ncmVzcyIsImNvdW50IiwiaW5kZXgiLCJwZXJjZW50IiwidGltZXN0YW1wIiwidGFza19pZCIsInJlYXNvbiIsImluaXRIYW5kbGVycyIsIiRidG5TdG9wVGFzayIsIiRidG5EZWxUYXNrIiwiZ2V0VGFza0lEIiwiYnRuIiwidGFyZ2V0IiwiY2xvc2VzdCIsInN0b3BGb2xsb3dpbmdMaXN0IiwiZ2V0VGFza3NEYXRhIiwiZGVsZXRlRm9sbG93aW5nTGlzdCIsImdldE1ldGFkYXRhIiwibWV0YSIsInN1YnNjcmliZSIsImV2ZW50TmFtZSIsImZvbGxvd1N0YXR1cyIsInVzZXJfZGVmYXVsdF9jb25maWciLCJ0YXNrX21vZGUiLCJmaWxsTGlzdFR5cGVzIiwiJHdyYXBwZXIiLCJzdHJ1Y3R1cmVPYmoiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJnZXREYXRhU3RlcDIiLCJ1c2Vyc05hbWUiLCJnZXREYXRhU3RlcDMiLCJ1c2VycyIsImZpbGxTcGVlZExpc3QiLCJ0YXNrTW9kZXMiLCJjZmciLCJ0YXNrX21vZGVzIiwicmFkaW9CdG5SZWR1Y2VyIiwiZ2V0RGVmYXVsdENvbmZpZ3MiLCJmb3VuZCIsInN0ZXBSZWR1Y2VyIiwic3RlcE51bWJlciIsInJlbW92ZUNsYXNzIiwiZmluZCIsImZhZGVJbiIsInBhcmVudF9maWVsZHNldCIsInBhcmVudHMiLCJuZXh0X3N0ZXAiLCJyYWRpb0J0bkFjdGl2ZSIsImVhY2giLCJmYWRlT3V0IiwibmV4dCIsInByZXYiLCJhdHRyIiwidG9VcHBlckNhc2UiLCJnZW5kZXJWYWwiLCJjcml0ZXJpYSIsImdlbmRlciIsImxpbWl0IiwiZm9ybXMiLCJoYXZlX3Bvc3RzIiwiZnJvbSIsInRvIiwiaGF2ZV9mb2xsb3dlcnMiLCJoYXZlX2ZvbGxvd2luZ3MiLCJmb2N1cyIsInByZXZlbnREZWZhdWx0IiwicG9zdFN0YXJ0Rm9sbG93aW5nTGlzdCIsIm1vZGlmeUFjY0xpc3QiLCJyYWRpb0J0bkFwcGVuZCIsImlkeCIsInJhZGlvQnRuV3JhcCIsIiRhY2NvdW50c0xpc3QiLCIkbGkiLCJ3cmFwSW5uZXIiLCJnZXRUYXNrVHlwZXMiLCIkcGFyZW50RmllbGRzZXQiLCJwcm9wIiwic2VsZWN0b3JzRWwiLCJsZWZ0TWVudSIsImhhbWJ1cmdlckJ1dHRvbkNscyIsImhhbWJ1cmdlck1lbnVDbHMiLCJoYW1idXJnZXJNZW51T3BlbmVkQ2xhc3MiLCJoYW1idXJnZXJCdXR0b25DbG9zZUNsYXNzIiwicmlnaHRNZW51Iiwic3ViSGVhZGVyIiwidG9nZ2xlSGFtYnVyZ2VyTWVudSIsIm1lbnVOYW1lIiwidG9nZ2xlQ2xhc3MiLCJiaW5kIiwic2VsZWN0b3JMb2dpblN0YXRlIiwic2VsZWN0b3JFbWFpbENvbmZpcm1TdGF0ZSIsImNsb3NlQ2xhc3MiLCJvcGVuZWRDbGFzcyIsImVtYWlsTm90Q29uZmlybWVkIiwiJGVtYWlsbk1zZyIsImNzcyIsIm9uTG9naW5TdWJzY3JpYmUiLCJtc2ciLCIkbG9naW5Nc2ciLCJpc0VtYWlsQ29uZmlybWVkIiwic2hvd0xvZ291dCIsImlzTG9nZ2VkIiwiaXNMb2dnZWRJbiIsInBhcmVudCIsInNob3ciLCJvbGRVUkwiLCJyZWZlcnJlciIsImluY2x1ZGVzIiwiJGxvZ2luQm94IiwiJHJlZ2lzdGVyQm94IiwiaGlkZSIsImFkZEluc3RhZ3JhbUFjY291bnQiLCJuZXdGb3JtRGF0YSIsIiRtc2dMaXN0IiwiY2F0Y2giLCJlcnIiLCJhZGRPbkxvYWRIYW5kbGVycyIsIiRtb2RhbEJvZHkiLCJmb3JtIiwiY3NzVmFsaWRhdGlvbkNsYXNzIiwiY2hlY2tWYWxpZGl0eSIsInJlcG9ydFZhbGlkaXR5IiwiYWRkTGlzdEhhbmRsZXIiLCIkYnV0dG9uIiwic2VuZFRvIiwic3RvcFByb3BhZ2F0aW9uIiwibW9kYWwiLCJnZXRTZWN1cml0eUtleSIsIiRtb2RhbCIsIiRrZXlJbnB1dCIsImNvbmZpcm1TZWN1cml0eUtleSIsImxlbiIsIm1pbkxlbiIsIk51bWJlciIsIm9uSGlkZU1vZGFsIiwicmVtb3ZlQXR0ciIsInR5cGVTZWxlY3RlZCIsImNoZWNrcG9pbnRUeXBlQWN0aXZlIiwibW9kYWxDb25maWciLCJfY29uZmlnIiwiZGVmYXVsdEF2YXRhclNyYyIsImluc2VydEl0ZW0iLCJjc3NDbHMiLCJsaVRwbCIsInN0YXRzIiwiaW5mbyIsInRwbCIsImNoZWNrcG9pbnQiLCJtZXRhZGF0YSIsInJlc2VuZFJlcXVlc3QiLCJpc1NlbmRSZXFPbmNlIiwiY2hlY2tSZXNwb25zZSIsImlzUmVzZW5kUmVxdWVzdCIsImFjY291bnRzIiwiTG9naW5Gb3JtIiwic2VsZWN0b3JDc3MiLCIkZW1haWwiLCIkdGV4dEFyZWFEZXNjcmlwdGlvbiIsInVzZXJMb2dpbkhlYWRlciIsIl9mb3JtRGF0YSIsInN1Ym1pdEZvcm0iLCJmb3JtRGF0YU9iaiIsInRvTG9jYWxlTG93ZXJDYXNlIiwibG9nT3V0IiwiYmluZEV2ZW50cyIsIiRzaG93TG9naW5Cb3hCdG5JZCIsIiRidXR0b25TdWJtaXQiLCJldmVudCIsImlzTG9naW5CdG5DbGljayIsImlzQWRkSW5zdGFncmFtQnRuQ2xpY2tlZCIsImhhc0NsYXNzIiwidXBkYXRlSW50ZXJ2YWwiLCJpbnRlcnZhbElkIiwiaXNJbk1lc3NhZ2VQYWdlIiwiJHVzZXJMaXN0IiwicmVhZHkiLCJtIiwiJHBpY2tlciIsInN0eWxlIiwic3R5bGVOZXciLCJpc0FwcGVudFByZXZNc2ciLCJpbnNlcnRNc2ciLCJ0b0xvd2VyQ2FzZSIsImFkZFRvTGlzdCIsInNpZGUiLCJhZGRQYWdpbmF0aW9uIiwicGFnaW5hdGlvbiIsImN1cnNvciIsInByZXZfY3Vyc29yIiwidXNlckRhdGEiLCJjb252ZXJzYXRpb25JZCIsInN0YXJ0QnV0dG9uU3Bpbm5lciIsImdldE1ldGFkYXRhRGV0YWlsQ29udmVyc2F0aW9uIiwic3RvcEJ1dHRvblNwaW5uZXIiLCJmaWxsVXNlckxpc3QiLCJjb252ZXJzYXRpb25EZXRhaWwiLCJhZGRDb252ZXJzYXRpb25zIiwiY29udmVyc2F0aW9ucyIsInBhcnNlSW50IiwiZ2V0QW5kRmlsbFVzZXJMaXN0IiwiaXNBY3RpdmVGaXJzdCIsInByZXZBY3RpdmVEaWFsb2dJZCIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJzZXR0aW5ncyIsImludm9rZV9pbl9taWxsaXMiLCJnZXRBbmRGaWxsQ29udmVyc2F0aW9uIiwiaXNTY3JvbGxEb3duIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsImFkZEhhbmRsZXJzIiwiJHRleHRBcmVhIiwiYWRkIiwicG9zdE1ldGFkYXRhRGV0YWlsQ29udmVyc2F0aW9uIiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwicmVzdWx0RnJvbVNlcnZlciIsIiRkaWFsb2ciLCJzZWxlY3RvckNscyIsInN1Ym1pdEJ0biIsIlJlZ2lzdGVyRm9ybSIsIiRwYXNzd29yZCIsIiRwYXNzd29yZENvbmZpcm0iLCJwYXNzd29yZENvbmZpcm0iLCJyZWdpc3RlciIsInJlZ2lzdGVyQm94IiwiJGJ0biIsImlzIiwiaXNSZWdCdG5DbGljayIsIlVzZXJDb252ZXJzYXRpb24iLCJjbGFzc2VzIiwiaW5saW5lIiwib3ZlcmxheSIsImZpeGVkIiwiYnV0dG9uIiwiU3Bpbm5lciIsIl9jZmciLCJuZXdDbHMiLCJwcmVwZW5kIiwiZXh0ZW5kIiwicHJld0NscyIsInNwaW5uZXJJbnN0YW5jZSIsIkxvZ2luUGFnZSIsImhyZWYiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hFTyxJQUFNQSx3QkFBUTtBQUNqQkMsU0FBSztBQUNEQyxpQkFBUztBQUNMQyx3QkFBWSxXQURQO0FBRUxDLDJCQUFlLENBQUMsZ0JBQUQsQ0FGVjtBQUdMQyxzQkFBVSxVQUhMO0FBSUxDLHlCQUFhLENBQUMsa0JBQUQ7QUFKUixTQURSO0FBT0RDLGNBQU0sMkJBUEw7QUFRREMsc0JBQWMscUJBUmI7QUFTREMsZUFBTywwQkFUTjtBQVVEQyxzQkFBYyx1Q0FWYjtBQVdEQyw4QkFBc0IscUJBWHJCLEVBVzRDO0FBQzdDQyxzQ0FBOEIseUJBWjdCO0FBYURDLHFDQUE2QixnQ0FiNUI7QUFjREMscUNBQTZCLGdDQWQ1QjtBQWVEQyxxQ0FBNkIsdUJBZjVCO0FBZ0JEQyxxQ0FBNkIsbUJBaEI1QjtB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MUMsd0JBQXdCLHlzQkFBeXNCLEVBQUUsbUNBQW1DLDBDQUEwQyxtZEFBbWQsaVNBQWlTLDBDQUEwQyw4U0FBOFMsb1VBQW9VLDBDQUEwQyxnVEFBZ1Qsc1RBQXNULDBDQUEwQyw2U0FBNlMsa0tBQWtLLDBDQUEwQyw4U0FBOFMsNFFBQTRRLDBDQUEwQyxrVEFBa1QsbVJBQW1SLHlDQUF5QyxnRUFBZ0UsMENBQTBDLGdUQUFnVCxtVUFBbVUsZUFBZSxHQUFHLDJCQUEyQixFQUFFLEdBQUcsRUFBRSxHQUFHLFNBQVMsRTs7Ozs7O0FDQS9vbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImluZGV4LWFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGU2Njk4NGM3NDUxZWE0YmJmNWZjIiwiZXhwb3J0IGNvbnN0IENPTlNUID0ge1xyXG4gICAgdXJsOiB7XHJcbiAgICAgICAgdG1UeXBlczoge1xyXG4gICAgICAgICAgICBmb2xsb3dpbmdUOiAnRk9MTE9XSU5HJyxcclxuICAgICAgICAgICAgZm9sbG93aW5nU3ViVDogWydGT0xMT1dJTkdfTElTVCddLFxyXG4gICAgICAgICAgICBjaGF0Qm90VDogJ0NIQVRfQk9UJyxcclxuICAgICAgICAgICAgY2hhdEJvdFN1YlQ6IFsnREVGQVVMVF9DSEFUX0JPVCddXHJcbiAgICAgICAgfSxcclxuICAgICAgICBiYXNlOiAnaHR0cDovL2FwaS5sdXhncmFtLnJ1L3YxLycsXHJcbiAgICAgICAgcmVnaXN0cmF0aW9uOiAncmVnaXN0cmF0aW9uL2Jhc2ljLycsXHJcbiAgICAgICAgbG9naW46ICdyZWdpc3RyYXRpb24vYmFzaWMvbG9naW4nLFxyXG4gICAgICAgIGNvbmZpcm1hdGlvbjogJ3JlZ2lzdHJhdGlvbi9iYXNpYy9jb25maXJtYXRpb24/dG9rZW4nLFxyXG4gICAgICAgIGluc3RhZ3JhbV9hZGRBY2NvdW50OiAnaW5zdGFncmFtLWFjY291bnRzLycsIC8vIHRvRE86IGNoZWNrIGlzIHJlZHVuZGFudFxyXG4gICAgICAgIGluc3RhZ3JhbUFjY291bnRfZ2V0TWV0YURhdGE6ICdpbnN0YWdyYW0tYWNjb3VudHMvbWV0YScsXHJcbiAgICAgICAgaW5zdGFncmFtQWNjb3VudF9jaGVja3BvaW50OiAnaW5zdGFncmFtLWFjY291bnRzL2NoZWNrcG9pbnQvJyxcclxuICAgICAgICBpbnN0YWdyYW1BY2NvdW50X2NvbmZpcm1LZXk6ICdpbnN0YWdyYW0tYWNjb3VudHMvY2hlY2twb2ludC8nLFxyXG4gICAgICAgIGluc3RhZ3JhbURpcmVjdF9nZXRNZXRhRGF0YTogJ2luc3RhZ3JhbS1kaXJlY3QvbWV0YScsXHJcbiAgICAgICAgaW5zdGFncmFtRGlyZWN0X3Bvc3RNZXNzYWdlOiAnaW5zdGFncmFtLWRpcmVjdC8nLFxyXG4gICAgICAgIGluc3RhZ3JhbVRhc2tNYW5hZ2VyOiAnaW5zdGFncmFtLXRhc2stbWFuYWdlci8nLFxyXG4gICAgICAgIGluc3RhZ3JhbVRhc2tNYW5hZ2VyX2dldE1ldGFEYXRhOiAnaW5zdGFncmFtLXRhc2stbWFuYWdlci9tZXRhJyxcclxuICAgICAgICBpbnN0YWdyYW1UYXNrTWFuYWdlcl9nZXRUYXNrVHlwZXM6ICdpbnN0YWdyYW0tdGFzay1tYW5hZ2VyL3Rhc2svdHlwZXMnLFxyXG4gICAgICAgIGluc3RhZ3JhbVRhc2tNYW5hZ2VyX2dldFRhc2tCeVR5cGVzOiAodHlwZSwgc3VidHlwZSkgPT4gYGluc3RhZ3JhbS10YXNrLW1hbmFnZXIvdGFzay90eXBlLyR7dHlwZX0vc3VidHlwZS8ke3N1YnR5cGV9YCxcclxuICAgICAgICBpbnN0YWdyYW1UYXNrTWFuYWdlcl9nZXREZWZhdWx0Q29uZmlnczogJ2luc3RhZ3JhbS10YXNrLW1hbmFnZXIvY29uZmlnL3R5cGUnLCAvLyB7U1RSQVRFR1lfVFlQRX0vc3VidHlwZS97U1RSQVRFR1lfU1VCVFlQRX1cclxuICAgICAgICBpbnN0YWdyYW1UYXNrTWFuYWdlcl9wb3N0U3RhcnRGb2xsb3dpbmdMaXN0OiAnaW5zdGFncmFtLXRhc2stbWFuYWdlci90YXNrJyxcclxuICAgICAgICBpbnN0YWdyYW1UYXNrTWFuYWdlcl9wdXRTdG9wRm9sbG93aW5nTGlzdDogaWQgPT4gYGluc3RhZ3JhbS10YXNrLW1hbmFnZXIvdGFzay8ke2lkfWAsXHJcbiAgICAgICAgaW5zdGFncmFtVGFza01hbmFnZXJfZGVsUmVtb3ZlRm9sbG93aW5nTGlzdDogaWQgPT4gYGluc3RhZ3JhbS10YXNrLW1hbmFnZXIvdGFzay8ke2lkfWBcclxuICAgIH0sXHJcbiAgICB1c2VyOiB7XHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgICB0b2tlbjogJydcclxuICAgIH0sXHJcbiAgICBjb29raWVTdG9yYWdlOiB7XHJcbiAgICAgICAgdG9rZW46ICd1c2VyX2xvZ2dlZCcsXHJcbiAgICAgICAgZW1haWxDb25maXJtZWQ6ICdlbWFpbF9jb25maXJtZWQnXHJcbiAgICB9LFxyXG4gICAgdWlTZWxlY3RvcnM6IHtcclxuICAgICAgICBoZWFkZXJMb2dpbkJveDogJ25hdiAubG9naW4tYm94JyxcclxuICAgICAgICBoZWFkZXJOYXZMb2dpbkJ0bjogJ25hdiB1bCBsaSAuanNfbG9naW4nLFxyXG4gICAgICAgIGhlYWRlclJlZ0JveDogJ25hdiAucmVnaXN0ZXItYm94JyxcclxuICAgICAgICBoZWFkZXJSZWdCdG46ICduYXYgdWwgbGkgLmpzX3JlZ2lzdGVyJyxcclxuICAgICAgICBpbnN0YWdyYW06IHtcclxuICAgICAgICAgICAgYWRkQWNjb3VudEJ0blNlbGVjdG9yOiAnI2pzX3Nob3ctbG9naW4tYm94JyxcclxuICAgICAgICAgICAgYWRkQWNjb3VudEJ0bklkOiAnanNfc2hvdy1sb2dpbi1ib3gnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGV2ZW50czoge1xyXG4gICAgICAgIFVTRVJfTE9HR0VEOiAndXNlcl9sb2dnZWQnLFxyXG4gICAgICAgIFVTRVJfTE9HT1VUOiAndXNlcl9sb2dvdXQnLFxyXG4gICAgICAgIFVTRVJfRU1BSUxfQ09ORklSTUVEOiAndXNlcl9lbWFpbF9jb25maXJtZWQnLFxyXG4gICAgICAgIFNUT1BfRklYRURfU1BJTk5FUjogJ3N0b3BfZml4ZWRfc3Bpbm5lcicsXHJcbiAgICAgICAgbWVzc2FnZXM6IHtcclxuICAgICAgICAgICAgUkVDSUVWRV9ORVdfTUVTU0FHRTogJ3JlY2VpdmVfbmV3X21lc3NhZ2UnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbnN0YWdyYW1BY2NvdW5zOiB7XHJcbiAgICAgICAgICAgIElOU1RBR1JBTV9BQ0NPVU5TX1JFTkRFUkVEOiAnaW5zdGFncmFtX2FjY291bnNfcmVuZGVyZWQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0YXNrczoge1xyXG4gICAgICAgICAgICBORVdfVEFTS19DUkVBVEVEOiAnbmV3X3Rhc2tfY3JlYXRlZCdcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZ2V0UGF0aChuYW1lLCBpZCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy51cmxbbmFtZV0gPT09ICdmdW5jdGlvbicgJiYgaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXJsLmJhc2UgKyB0aGlzLnVybFtuYW1lXShpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnVybC5iYXNlICsgdGhpcy51cmxbbmFtZV07XHJcbiAgICB9LFxyXG4gICAgZ2V0UGF0aFR5cGVTdWJ0eXBlKG5hbWUsIHR5cGUsIHN1YnR5cGUpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMudXJsW25hbWVdID09PSAnZnVuY3Rpb24nICYmIHR5cGUgJiYgc3VidHlwZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy51cmwuYmFzZSArIHRoaXMudXJsW25hbWVdKHR5cGUsIHN1YnR5cGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy51cmwuYmFzZSArIHRoaXMudXJsW25hbWVdO1xyXG4gICAgfVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uL2pzLXNlcnZpY2VzL2NvbnN0cy5qcyIsIlxyXG5jb25zdCBDb29raWVTcnYgPSB7XHJcbiAgICBnZXQ6IG5hbWUgPT4ge1xyXG4gICAgICAgIGNvbnN0IGMgPSBkb2N1bWVudC5jb29raWUubWF0Y2goYCg/Oig/Ol58Lio7ICopJHtuYW1lfSAqPSAqKFteO10qKS4qJCl8Xi4qJGApWzFdO1xyXG4gICAgICAgIGlmIChjKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoYyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNldDogKG5hbWUsIHZhbHVlLCBvcHRzID0ge3BhdGg6ICcvJywgZGF5czogMzY1fSkgPT4ge1xyXG4gICAgICAgIGlmIChvcHRzLmRheXMpIHtcclxuICAgICAgICAgICAgb3B0c1snbWF4LWFnZSddID0gb3B0cy5kYXlzICogNjAgKiA2MCAqIDI0O1xyXG4gICAgICAgICAgICBkZWxldGUgb3B0cy5kYXlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cclxuICAgICAgICBvcHRzID0gT2JqZWN0LmVudHJpZXMob3B0cykucmVkdWNlKChzdHIsIFtrLCB2XSkgPT4gYCR7c3RyfTsgJHtrfT0ke3Z9YCwgJycpO1xyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGAke25hbWV9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSArIG9wdHN9YDtcclxuICAgIH0sXHJcbiAgICByZW1vdmU6IChuYW1lLCBvcHRzKSA9PiBDb29raWVTcnYuc2V0KG5hbWUsICcnLCB7J21heC1hZ2UnOiAtMSwgcGF0aDogJy8nLCBkYXlzOiAwLCAuLi5vcHRzfSlcclxuICAgIC8vIHBhdGggJiBkb21haW4gbXVzdCBtYXRjaCBjb29raWUgYmVpbmcgZGVsZXRlZFxyXG59O1xyXG5cclxuLypcclxuY2xhc3MgQ29va2llU3RvcmFnZSB7XHJcbiAgICByZWFkKGtleSkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gJC5jb29raWUoa2V5KTtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IG51bGwgOiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDb29raWUobmFtZSwgdmFsdWUsIGRheXMpIHtcclxuICAgICAgICBsZXQgZXhwaXJlcyA9ICcnO1xyXG4gICAgICAgIGlmIChkYXlzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyAoZGF5cyAqIDI0ICogNjAgKiA2MCAqIDEwMDApKTtcclxuICAgICAgICAgICAgZXhwaXJlcyA9IGA7IGV4cGlyZXM9JHtkYXRlLnRvVVRDU3RyaW5nKCl9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gYCR7bmFtZX0gPSR7KHZhbHVlIHx8ICcnKSArIGV4cGlyZXN9OyBwYXRoPS9gO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvb2tpZShuYW1lKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBgOyAke2RvY3VtZW50LmNvb2tpZX1gO1xyXG4gICAgICAgIGNvbnN0IHBhcnRzID0gdmFsdWUuc3BsaXQoYDsgJHtuYW1lfT1gKTtcclxuICAgICAgICBpZiAocGFydHMubGVuZ3RoID09IDIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnRzLnBvcCgpLnNwbGl0KCc7Jykuc2hpZnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvb2tpZVNydjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb29raWUuanMiLCIvLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQge0NPTlNUfSBmcm9tICcuL2NvbnN0cyc7XHJcbmltcG9ydCBOZXR3b3JrIGZyb20gJy4vbmV0d29yayc7XHJcbmltcG9ydCBDb29raWVTdG9yYWdlIGZyb20gJy4vY29va2llJztcclxuXHJcbmNsYXNzIFVzZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubmV0d29yayA9IG5ldyBOZXR3b3JrKCk7XHJcbiAgICAgICAgdGhpcy5jb29raWVTdG9yYWdlID0gQ29va2llU3RvcmFnZTtcclxuICAgICAgICB0aGlzLnNldHRpbmdQb3N0ID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgaXNMb2dnZWRJbigpIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLmdldFRva2VuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNFbWFpbENvbmZpcm1lZCgpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuY29va2llU3RvcmFnZS5nZXQoQ09OU1QuY29va2llU3RvcmFnZS5lbWFpbENvbmZpcm1lZCkgPT09ICdjb25maXJtZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUb2tlbigpIHtcclxuICAgICAgICBjb25zdCBjb29raWVUb2tlbiA9IHRoaXMuY29va2llU3RvcmFnZS5nZXQoQ09OU1QuY29va2llU3RvcmFnZS50b2tlbik7XHJcbiAgICAgICAgcmV0dXJuIGNvb2tpZVRva2VuO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luKGZvcm1EYXRhLCBjYkVycm9yKSB7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZyA9IHsuLi50aGlzLnNldHRpbmdQb3N0LCBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSl9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QoQ09OU1QuZ2V0UGF0aCgnbG9naW4nKSwgc2V0dGluZywgY2JFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkSW5zdGFncmFtQWNjb3VudChmb3JtRGF0YSwgY2JFcnJvcikge1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSB7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdC5oZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgdG9rZW46IHRoaXMuZ2V0VG9rZW4oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KENPTlNULmdldFBhdGgoJ2luc3RhZ3JhbV9hZGRBY2NvdW50JyksIHNldHRpbmcsIGNiRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEluc3RhZ3JhbUFjY291bnQoKSB7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZyA9IHtcclxuICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdCxcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdC5oZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgdG9rZW46IHRoaXMuZ2V0VG9rZW4oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KENPTlNULmdldFBhdGgoJ2luc3RhZ3JhbV9hZGRBY2NvdW50JyksIHNldHRpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmZpcm0odG9rZW4pIHtcclxuICAgICAgICAvLyBjb25zdCBjb25maXJtVXJsID0gQ09OU1QuZ2V0UGF0aCgnY29uZmlybWF0aW9uJyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChgJHtDT05TVC5nZXRQYXRoKCdjb25maXJtYXRpb24nKSArIHRva2VufWApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyKGZvcm1EYXRhKSB7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZyA9IHtcclxuICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdCxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KENPTlNULmdldFBhdGgoJ3JlZ2lzdHJhdGlvbicpLCBzZXR0aW5nKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRNZXRhZGF0YSh0b2tlbiwgY2JFcnJvcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QoYCR7Q09OU1QuZ2V0UGF0aCgnaW5zdGFncmFtQWNjb3VudF9nZXRNZXRhRGF0YScpfWAsIHtoZWFkZXJzOiB7dG9rZW59fSwgY2JFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2VjdXJpdHlLZXkodXNlcm5hbWUsIGNoZWNrcG9pbnRUeXBlKSB7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZyA9IHtcclxuICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdCxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyd0eXBlJzogY2hlY2twb2ludFR5cGV9KSwgLy8gdG9kbzogdG1wIHNldCwgaXQgc2hvdWxkIGJlICd0eXBlJ1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnNldHRpbmdQb3N0LmhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICAndG9rZW4nOiB0aGlzLmdldFRva2VuKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChgJHtDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1BY2NvdW50X2NoZWNrcG9pbnQnKX0ke3VzZXJuYW1lfWAsIHNldHRpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmZpcm1TZWN1cml0eUtleShrZXksIHVzZXJuYW1lKSB7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeydzZWN1cml0eV9jb2RlJzoga2V5fSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QuaGVhZGVycyxcclxuICAgICAgICAgICAgICAgICd0b2tlbic6ICczZTMyMWU2MDAyOTcxMWU5OTI2NGEwNDgxYzhlMTdkNCcgLy8gdG9kbzogdGhpcy5nZXRUb2tlbigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QoYCR7Q09OU1QuZ2V0UGF0aCgnaW5zdGFncmFtQWNjb3VudF9jb25maXJtS2V5Jyl9JHt1c2VybmFtZX1gLCBzZXR0aW5nKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmxldCB1c2VySW5zdGFuY2UgPSBudWxsO1xyXG5cclxuaWYgKCF1c2VySW5zdGFuY2UpIHtcclxuICAgIHVzZXJJbnN0YW5jZSA9IG5ldyBVc2VyKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJJbnN0YW5jZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy91c2VyLmpzIiwiLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuLy8gaW1wb3J0IHtDT05TVH0gZnJvbSAnLi9jb25zdHMnO1xyXG5cclxuZnVuY3Rpb24gdmlld1V0aWxzKCkge1xyXG4gICAgZnVuY3Rpb24gc2hvd0luZm9NZXNzYWdlKHNlbGVjdG9yLCBtZXNzYWdlMSwgbWVzc2FnZTIpIHtcclxuICAgICAgICAkKHNlbGVjdG9yKS5lbXB0eSgpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoYCR7KG1lc3NhZ2UxKSA/IGA8cD5zdGF0dXM6ICR7bWVzc2FnZTF9PC9wPmAgOiAnJ31gKVxyXG4gICAgICAgICAgICAuYXBwZW5kKGA8cD4ke21lc3NhZ2UyfSA8L3A+YCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZmlsbExpc3QoJGxpc3QsIGRhdGFBcnJheSkge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gZGF0YUFycmF5O1xyXG4gICAgICAgIGNvbnN0IGNMaXN0ID0gJGxpc3Q7XHJcbiAgICAgICAgY0xpc3QuZW1wdHkoKTtcclxuICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpID0gJCgnPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCI+PC9saT4nKVxyXG4gICAgICAgICAgICAgICAgLmFwcGVuZFRvKGNMaXN0KTtcclxuICAgICAgICAgICAgJCgnPGEvPicpLmFkZENsYXNzKCd1aS1hbGwnKVxyXG4gICAgICAgICAgICAgICAgLnRleHQoaXRlbS51c2VybmFtZSlcclxuICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhsaSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNFbWFpbChlbWFpbCkge1xyXG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlICovXHJcbiAgICAgICAgY29uc3QgcmVnZXggPSAvXihbYS16QS1aMC05Xy4rLV0pK1xcQCgoW2EtekEtWjAtOS1dKStcXC4pKyhbYS16QS1aMC05XXsyLDR9KSskLztcclxuICAgICAgICByZXR1cm4gcmVnZXgudGVzdChlbWFpbCk7XHJcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSAqL1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEZvcm1hdHRlZERhdGVVdGlsKHRTdGFtcCwgc2hvd0Z1bGxUaW1lKSB7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRTdGFtcCk7XHJcblxyXG4gICAgICAgIGxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XHJcbiAgICAgICAgbGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIGxldCBob3VyID0gZGF0ZS5nZXRIb3VycygpO1xyXG4gICAgICAgIGxldCBtaW4gPSBkYXRlLmdldE1pbnV0ZXMoKTtcclxuICAgICAgICBsZXQgc2VjID0gZGF0ZS5nZXRTZWNvbmRzKCk7XHJcblxyXG4gICAgICAgIG1vbnRoID0gKG1vbnRoIDwgMTAgPyAnMCcgOiAnJykgKyBtb250aDtcclxuICAgICAgICBkYXkgPSAoZGF5IDwgMTAgPyAnMCcgOiAnJykgKyBkYXk7XHJcbiAgICAgICAgaG91ciA9IChob3VyIDwgMTAgPyAnMCcgOiAnJykgKyBob3VyO1xyXG4gICAgICAgIG1pbiA9IChtaW4gPCAxMCA/ICcwJyA6ICcnKSArIG1pbjtcclxuICAgICAgICBzZWMgPSAoc2VjIDwgMTAgPyAnMCcgOiAnJykgKyBzZWM7XHJcblxyXG4gICAgICAgIGxldCBzdHIgPSAnJztcclxuICAgICAgICBpZiAoIXNob3dGdWxsVGltZSkge1xyXG4gICAgICAgICAgICBzdHIgPSBgJHtob3VyfToke21pbn1gO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0ciA9IGAke2RhdGUuZ2V0RnVsbFllYXIoKX0tJHttb250aH0tJHtkYXl9XyR7aG91cn06JHttaW59OiR7c2VjfWA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc3RyO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2hvd0luZm9NZXNzYWdlLFxyXG4gICAgICAgIGZpbGxMaXN0LFxyXG4gICAgICAgIGlzRW1haWwsXHJcbiAgICAgICAgZ2V0Rm9ybWF0dGVkRGF0ZVV0aWxcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHZpZXdVdGlscygpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uL2pzLXNlcnZpY2VzL3ZpZXcuanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMCwyMDExLDIwMTIsMjAxMywyMDE0IE1vcmdhbiBSb2RlcmljayBodHRwOi8vcm9kZXJpY2suZGtcbiAqIExpY2Vuc2U6IE1JVCAtIGh0dHA6Ly9tcmducmRyY2subWl0LWxpY2Vuc2Uub3JnXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL21yb2Rlcmljay9QdWJTdWJKU1xuICovXG5cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSl7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIFB1YlN1YiA9IHt9O1xuICAgIHJvb3QuUHViU3ViID0gUHViU3ViO1xuXG4gICAgdmFyIGRlZmluZSA9IHJvb3QuZGVmaW5lO1xuXG4gICAgZmFjdG9yeShQdWJTdWIpO1xuXG4gICAgLy8gQU1EIHN1cHBvcnRcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKXtcbiAgICAgICAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gUHViU3ViOyB9KTtcblxuICAgICAgICAvLyBDb21tb25KUyBhbmQgTm9kZS5qcyBtb2R1bGUgc3VwcG9ydFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKXtcbiAgICAgICAgaWYgKG1vZHVsZSAhPT0gdW5kZWZpbmVkICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgICAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBQdWJTdWI7IC8vIE5vZGUuanMgc3BlY2lmaWMgYG1vZHVsZS5leHBvcnRzYFxuICAgICAgICB9XG4gICAgICAgIGV4cG9ydHMuUHViU3ViID0gUHViU3ViOyAvLyBDb21tb25KUyBtb2R1bGUgMS4xLjEgc3BlY1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBQdWJTdWI7IC8vIENvbW1vbkpTXG4gICAgfVxuXG59KCggdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgd2luZG93ICkgfHwgdGhpcywgZnVuY3Rpb24gKFB1YlN1Yil7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIG1lc3NhZ2VzID0ge30sXG4gICAgICAgIGxhc3RVaWQgPSAtMTtcblxuICAgIGZ1bmN0aW9uIGhhc0tleXMob2JqKXtcbiAgICAgICAgdmFyIGtleTtcblxuICAgICAgICBmb3IgKGtleSBpbiBvYmope1xuICAgICAgICAgICAgaWYgKCBvYmouaGFzT3duUHJvcGVydHkoa2V5KSApe1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB0aHJvd3MgdGhlIHBhc3NlZCBleGNlcHRpb24sIGZvciB1c2UgYXMgYXJndW1lbnQgZm9yIHNldFRpbWVvdXRcbiAgICAgKiBAYWxpYXMgdGhyb3dFeGNlcHRpb25cbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0geyBPYmplY3QgfSBleCBBbiBFcnJvciBvYmplY3RcbiAgICAgKi9cbiAgICBmdW5jdGlvbiB0aHJvd0V4Y2VwdGlvbiggZXggKXtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHJlVGhyb3dFeGNlcHRpb24oKXtcbiAgICAgICAgICAgIHRocm93IGV4O1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbGxTdWJzY3JpYmVyV2l0aERlbGF5ZWRFeGNlcHRpb25zKCBzdWJzY3JpYmVyLCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyKCBtZXNzYWdlLCBkYXRhICk7XG4gICAgICAgIH0gY2F0Y2goIGV4ICl7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCB0aHJvd0V4Y2VwdGlvbiggZXggKSwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWxsU3Vic2NyaWJlcldpdGhJbW1lZGlhdGVFeGNlcHRpb25zKCBzdWJzY3JpYmVyLCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHN1YnNjcmliZXIoIG1lc3NhZ2UsIGRhdGEgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxpdmVyTWVzc2FnZSggb3JpZ2luYWxNZXNzYWdlLCBtYXRjaGVkTWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApe1xuICAgICAgICB2YXIgc3Vic2NyaWJlcnMgPSBtZXNzYWdlc1ttYXRjaGVkTWVzc2FnZV0sXG4gICAgICAgICAgICBjYWxsU3Vic2NyaWJlciA9IGltbWVkaWF0ZUV4Y2VwdGlvbnMgPyBjYWxsU3Vic2NyaWJlcldpdGhJbW1lZGlhdGVFeGNlcHRpb25zIDogY2FsbFN1YnNjcmliZXJXaXRoRGVsYXllZEV4Y2VwdGlvbnMsXG4gICAgICAgICAgICBzO1xuXG4gICAgICAgIGlmICggIW1lc3NhZ2VzLmhhc093blByb3BlcnR5KCBtYXRjaGVkTWVzc2FnZSApICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChzIGluIHN1YnNjcmliZXJzKXtcbiAgICAgICAgICAgIGlmICggc3Vic2NyaWJlcnMuaGFzT3duUHJvcGVydHkocykpe1xuICAgICAgICAgICAgICAgIGNhbGxTdWJzY3JpYmVyKCBzdWJzY3JpYmVyc1tzXSwgb3JpZ2luYWxNZXNzYWdlLCBkYXRhICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVEZWxpdmVyeUZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICl7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBkZWxpdmVyTmFtZXNwYWNlZCgpe1xuICAgICAgICAgICAgdmFyIHRvcGljID0gU3RyaW5nKCBtZXNzYWdlICksXG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSB0b3BpYy5sYXN0SW5kZXhPZiggJy4nICk7XG5cbiAgICAgICAgICAgIC8vIGRlbGl2ZXIgdGhlIG1lc3NhZ2UgYXMgaXQgaXMgbm93XG4gICAgICAgICAgICBkZWxpdmVyTWVzc2FnZShtZXNzYWdlLCBtZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zKTtcblxuICAgICAgICAgICAgLy8gdHJpbSB0aGUgaGllcmFyY2h5IGFuZCBkZWxpdmVyIG1lc3NhZ2UgdG8gZWFjaCBsZXZlbFxuICAgICAgICAgICAgd2hpbGUoIHBvc2l0aW9uICE9PSAtMSApe1xuICAgICAgICAgICAgICAgIHRvcGljID0gdG9waWMuc3Vic3RyKCAwLCBwb3NpdGlvbiApO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoJy4nKTtcbiAgICAgICAgICAgICAgICBkZWxpdmVyTWVzc2FnZSggbWVzc2FnZSwgdG9waWMsIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtZXNzYWdlSGFzU3Vic2NyaWJlcnMoIG1lc3NhZ2UgKXtcbiAgICAgICAgdmFyIHRvcGljID0gU3RyaW5nKCBtZXNzYWdlICksXG4gICAgICAgICAgICBmb3VuZCA9IEJvb2xlYW4obWVzc2FnZXMuaGFzT3duUHJvcGVydHkoIHRvcGljICkgJiYgaGFzS2V5cyhtZXNzYWdlc1t0b3BpY10pKSxcbiAgICAgICAgICAgIHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoICcuJyApO1xuXG4gICAgICAgIHdoaWxlICggIWZvdW5kICYmIHBvc2l0aW9uICE9PSAtMSApe1xuICAgICAgICAgICAgdG9waWMgPSB0b3BpYy5zdWJzdHIoIDAsIHBvc2l0aW9uICk7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IHRvcGljLmxhc3RJbmRleE9mKCAnLicgKTtcbiAgICAgICAgICAgIGZvdW5kID0gQm9vbGVhbihtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eSggdG9waWMgKSAmJiBoYXNLZXlzKG1lc3NhZ2VzW3RvcGljXSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZvdW5kO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHB1Ymxpc2goIG1lc3NhZ2UsIGRhdGEsIHN5bmMsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKXtcbiAgICAgICAgbWVzc2FnZSA9ICh0eXBlb2YgbWVzc2FnZSA9PT0gJ3N5bWJvbCcpID8gbWVzc2FnZS50b1N0cmluZygpIDogbWVzc2FnZTtcblxuICAgICAgICB2YXIgZGVsaXZlciA9IGNyZWF0ZURlbGl2ZXJ5RnVuY3Rpb24oIG1lc3NhZ2UsIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKSxcbiAgICAgICAgICAgIGhhc1N1YnNjcmliZXJzID0gbWVzc2FnZUhhc1N1YnNjcmliZXJzKCBtZXNzYWdlICk7XG5cbiAgICAgICAgaWYgKCAhaGFzU3Vic2NyaWJlcnMgKXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggc3luYyA9PT0gdHJ1ZSApe1xuICAgICAgICAgICAgZGVsaXZlcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dCggZGVsaXZlciwgMCApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFB1Ymxpc2hlcyB0aGUgbWVzc2FnZSwgcGFzc2luZyB0aGUgZGF0YSB0byBpdCdzIHN1YnNjcmliZXJzXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQGFsaWFzIHB1Ymxpc2hcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHB1Ymxpc2hcbiAgICAgKiBAcGFyYW0ge30gZGF0YSBUaGUgZGF0YSB0byBwYXNzIHRvIHN1YnNjcmliZXJzXG4gICAgICogQHJldHVybiB7IEJvb2xlYW4gfVxuICAgICAqL1xuICAgIFB1YlN1Yi5wdWJsaXNoID0gZnVuY3Rpb24oIG1lc3NhZ2UsIGRhdGEgKXtcbiAgICAgICAgcmV0dXJuIHB1Ymxpc2goIG1lc3NhZ2UsIGRhdGEsIGZhbHNlLCBQdWJTdWIuaW1tZWRpYXRlRXhjZXB0aW9ucyApO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQdWJsaXNoZXMgdGhlIHRoZSBtZXNzYWdlIHN5bmNocm9ub3VzbHksIHBhc3NpbmcgdGhlIGRhdGEgdG8gaXQncyBzdWJzY3JpYmVyc1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBhbGlhcyBwdWJsaXNoU3luY1xuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gcHVibGlzaFxuICAgICAqIEBwYXJhbSB7fSBkYXRhIFRoZSBkYXRhIHRvIHBhc3MgdG8gc3Vic2NyaWJlcnNcbiAgICAgKiBAcmV0dXJuIHsgQm9vbGVhbiB9XG4gICAgICovXG4gICAgUHViU3ViLnB1Ymxpc2hTeW5jID0gZnVuY3Rpb24oIG1lc3NhZ2UsIGRhdGEgKXtcbiAgICAgICAgcmV0dXJuIHB1Ymxpc2goIG1lc3NhZ2UsIGRhdGEsIHRydWUsIFB1YlN1Yi5pbW1lZGlhdGVFeGNlcHRpb25zICk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZXMgdGhlIHBhc3NlZCBmdW5jdGlvbiB0byB0aGUgcGFzc2VkIG1lc3NhZ2UuIEV2ZXJ5IHJldHVybmVkIHRva2VuIGlzIHVuaXF1ZSBhbmQgc2hvdWxkIGJlIHN0b3JlZCBpZiB5b3UgbmVlZCB0byB1bnN1YnNjcmliZVxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBhbGlhcyBzdWJzY3JpYmVcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHN1YnNjcmliZSB0b1xuICAgICAqIEBwYXJhbSB7IEZ1bmN0aW9uIH0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIGEgbmV3IG1lc3NhZ2UgaXMgcHVibGlzaGVkXG4gICAgICogQHJldHVybiB7IFN0cmluZyB9XG4gICAgICovXG4gICAgUHViU3ViLnN1YnNjcmliZSA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBmdW5jICl7XG4gICAgICAgIGlmICggdHlwZW9mIGZ1bmMgIT09ICdmdW5jdGlvbicpe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWVzc2FnZSA9ICh0eXBlb2YgbWVzc2FnZSA9PT0gJ3N5bWJvbCcpID8gbWVzc2FnZS50b1N0cmluZygpIDogbWVzc2FnZTtcblxuICAgICAgICAvLyBtZXNzYWdlIGlzIG5vdCByZWdpc3RlcmVkIHlldFxuICAgICAgICBpZiAoICFtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eSggbWVzc2FnZSApICl7XG4gICAgICAgICAgICBtZXNzYWdlc1ttZXNzYWdlXSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZm9yY2luZyB0b2tlbiBhcyBTdHJpbmcsIHRvIGFsbG93IGZvciBmdXR1cmUgZXhwYW5zaW9ucyB3aXRob3V0IGJyZWFraW5nIHVzYWdlXG4gICAgICAgIC8vIGFuZCBhbGxvdyBmb3IgZWFzeSB1c2UgYXMga2V5IG5hbWVzIGZvciB0aGUgJ21lc3NhZ2VzJyBvYmplY3RcbiAgICAgICAgdmFyIHRva2VuID0gJ3VpZF8nICsgU3RyaW5nKCsrbGFzdFVpZCk7XG4gICAgICAgIG1lc3NhZ2VzW21lc3NhZ2VdW3Rva2VuXSA9IGZ1bmM7XG4gICAgICAgIFxuICAgICAgICAvLyByZXR1cm4gdG9rZW4gZm9yIHVuc3Vic2NyaWJpbmdcbiAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmVzIHRoZSBwYXNzZWQgZnVuY3Rpb24gdG8gdGhlIHBhc3NlZCBtZXNzYWdlIG9uY2VcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgc3Vic2NyaWJlT25jZVxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gc3Vic2NyaWJlIHRvXG4gICAgICogQHBhcmFtIHsgRnVuY3Rpb24gfSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gYSBuZXcgbWVzc2FnZSBpcyBwdWJsaXNoZWRcbiAgICAgKiBAcmV0dXJuIHsgUHViU3ViIH1cbiAgICAgKi9cbiAgICBQdWJTdWIuc3Vic2NyaWJlT25jZSA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBmdW5jICl7XG4gICAgICAgIHZhciB0b2tlbiA9IFB1YlN1Yi5zdWJzY3JpYmUoIG1lc3NhZ2UsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAvLyBiZWZvcmUgZnVuYyBhcHBseSwgdW5zdWJzY3JpYmUgbWVzc2FnZVxuICAgICAgICAgICAgUHViU3ViLnVuc3Vic2NyaWJlKCB0b2tlbiApO1xuICAgICAgICAgICAgZnVuYy5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gUHViU3ViO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYWxsIHN1YnNjcmlwdGlvbnNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcHVibGljXG4gICAgICogQGFsaWFzIGNsZWFyQWxsU3Vic2NyaXB0aW9uc1xuICAgICAqL1xuICAgIFB1YlN1Yi5jbGVhckFsbFN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiBjbGVhckFsbFN1YnNjcmlwdGlvbnMoKXtcbiAgICAgICAgbWVzc2FnZXMgPSB7fTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgc3Vic2NyaXB0aW9ucyBieSB0aGUgdG9waWNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcHVibGljXG4gICAgICogQGFsaWFzIGNsZWFyQWxsU3Vic2NyaXB0aW9uc1xuICAgICAqL1xuICAgIFB1YlN1Yi5jbGVhclN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiBjbGVhclN1YnNjcmlwdGlvbnModG9waWMpe1xuICAgICAgICB2YXIgbTtcbiAgICAgICAgZm9yIChtIGluIG1lc3NhZ2VzKXtcbiAgICAgICAgICAgIGlmIChtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eShtKSAmJiBtLmluZGV4T2YodG9waWMpID09PSAwKXtcbiAgICAgICAgICAgICAgICBkZWxldGUgbWVzc2FnZXNbbV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBzdWJzY3JpcHRpb25zXG4gICAgICpcbiAgICAgKiAtIFdoZW4gcGFzc2VkIGEgdG9rZW4sIHJlbW92ZXMgYSBzcGVjaWZpYyBzdWJzY3JpcHRpb24uXG4gICAgICpcblx0ICogLSBXaGVuIHBhc3NlZCBhIGZ1bmN0aW9uLCByZW1vdmVzIGFsbCBzdWJzY3JpcHRpb25zIGZvciB0aGF0IGZ1bmN0aW9uXG4gICAgICpcblx0ICogLSBXaGVuIHBhc3NlZCBhIHRvcGljLCByZW1vdmVzIGFsbCBzdWJzY3JpcHRpb25zIGZvciB0aGF0IHRvcGljIChoaWVyYXJjaHkpXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBhbGlhcyBzdWJzY3JpYmVPbmNlXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIHwgRnVuY3Rpb24gfSB2YWx1ZSBBIHRva2VuLCBmdW5jdGlvbiBvciB0b3BpYyB0byB1bnN1YnNjcmliZSBmcm9tXG4gICAgICogQGV4YW1wbGUgLy8gVW5zdWJzY3JpYmluZyB3aXRoIGEgdG9rZW5cbiAgICAgKiB2YXIgdG9rZW4gPSBQdWJTdWIuc3Vic2NyaWJlKCdteXRvcGljJywgbXlGdW5jKTtcbiAgICAgKiBQdWJTdWIudW5zdWJzY3JpYmUodG9rZW4pO1xuICAgICAqIEBleGFtcGxlIC8vIFVuc3Vic2NyaWJpbmcgd2l0aCBhIGZ1bmN0aW9uXG4gICAgICogUHViU3ViLnVuc3Vic2NyaWJlKG15RnVuYyk7XG4gICAgICogQGV4YW1wbGUgLy8gVW5zdWJzY3JpYmluZyBmcm9tIGEgdG9waWNcbiAgICAgKiBQdWJTdWIudW5zdWJzY3JpYmUoJ215dG9waWMnKTtcbiAgICAgKi9cbiAgICBQdWJTdWIudW5zdWJzY3JpYmUgPSBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgIHZhciBkZXNjZW5kYW50VG9waWNFeGlzdHMgPSBmdW5jdGlvbih0b3BpYykge1xuICAgICAgICAgICAgICAgIHZhciBtO1xuICAgICAgICAgICAgICAgIGZvciAoIG0gaW4gbWVzc2FnZXMgKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eShtKSAmJiBtLmluZGV4T2YodG9waWMpID09PSAwICl7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhIGRlc2NlbmRhbnQgb2YgdGhlIHRvcGljIGV4aXN0czpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzVG9waWMgICAgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICggbWVzc2FnZXMuaGFzT3duUHJvcGVydHkodmFsdWUpIHx8IGRlc2NlbmRhbnRUb3BpY0V4aXN0cyh2YWx1ZSkgKSxcbiAgICAgICAgICAgIGlzVG9rZW4gICAgPSAhaXNUb3BpYyAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnLFxuICAgICAgICAgICAgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyxcbiAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlLFxuICAgICAgICAgICAgbSwgbWVzc2FnZSwgdDtcblxuICAgICAgICBpZiAoaXNUb3BpYyl7XG4gICAgICAgICAgICBQdWJTdWIuY2xlYXJTdWJzY3JpcHRpb25zKHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoIG0gaW4gbWVzc2FnZXMgKXtcbiAgICAgICAgICAgIGlmICggbWVzc2FnZXMuaGFzT3duUHJvcGVydHkoIG0gKSApe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlc1ttXTtcblxuICAgICAgICAgICAgICAgIGlmICggaXNUb2tlbiAmJiBtZXNzYWdlW3ZhbHVlXSApe1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgbWVzc2FnZVt2YWx1ZV07XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAvLyB0b2tlbnMgYXJlIHVuaXF1ZSwgc28gd2UgY2FuIGp1c3Qgc3RvcCBoZXJlXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoIHQgaW4gbWVzc2FnZSApe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UuaGFzT3duUHJvcGVydHkodCkgJiYgbWVzc2FnZVt0XSA9PT0gdmFsdWUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBtZXNzYWdlW3RdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59KSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcHVic3ViLWpzL3NyYy9wdWJzdWIuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHZpZXdVdGlscyBmcm9tICcuL3ZpZXcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV0d29yayB7XHJcblxyXG4gICAgY2JFcnJvckRlZmF1bHQocmVzdWx0KSB7XHJcbiAgICAgICAgY29uc3QgJGVsID0gKCQoJyNkZXNjcmlwdGlvbicpLmxlbmd0aCkgPyAkKCcjZGVzY3JpcHRpb24nKSA6ICQoJy5lcnJvci1tc2cnKTtcclxuICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKCRlbCxcclxuICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5zdGF0ZSxcclxuICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5tZXNzYWdlIHx8ICdlcnJvcicpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrU3RhdHVzKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAmJiByZXNwb25zZS5zdGF0dXMgPj0gMjAwICYmIHJlc3BvbnNlLnN0YXR1cyA8IDMwMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgICAgIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZW5kUmVxdWVzdChVUkwsIE9QVFMsIGNiRXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goVVJMLCBPUFRTKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiBQcm9taXNlLmFsbChbcmVzcG9uc2UsIHJlc3BvbnNlLmpzb24oKV0pKVxyXG4gICAgICAgICAgICAudGhlbigoW3Jlc3BvbnNlLCBqc29uXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghY2JFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNiRXJyb3JEZWZhdWx0KGpzb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNiRXJyb3IoanNvbik7IC8vIHVwZGF0ZSB2aWV3XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tTdGF0dXMocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihqc29uLnN0YXR1cy5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBqc29uO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy9uZXR3b3JrLmpzIiwiLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IHtDT05TVH0gZnJvbSAnLi9jb25zdHMnO1xyXG5pbXBvcnQgTmV0d29yayBmcm9tICcuL25ldHdvcmsnO1xyXG5pbXBvcnQgQ29va2llU3RvcmFnZSBmcm9tICcuL2Nvb2tpZSc7XHJcblxyXG5jbGFzcyBVc2VyVGFza01hbmFnZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubmV0d29yayA9IG5ldyBOZXR3b3JrKCk7XHJcbiAgICAgICAgdGhpcy5jb29raWVTdG9yYWdlID0gQ29va2llU3RvcmFnZTtcclxuICAgICAgICB0aGlzLnNldHRpbmdQb3N0ID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaXNMb2dnZWRJbigpIHtcclxuICAgIC8vICAgICByZXR1cm4gISF0aGlzLmdldFRva2VuKCk7XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gaXNFbWFpbENvbmZpcm1lZCgpIHtcclxuICAgIC8vICAgICByZXR1cm4gKHRoaXMuY29va2llU3RvcmFnZS5nZXQoQ09OU1QuY29va2llU3RvcmFnZS5lbWFpbENvbmZpcm1lZCkgPT09ICdjb25maXJtZWQnKTtcclxuICAgIC8vIH1cclxuICAgIGdldFRva2VuKGFzSGVhZGVyKSB7XHJcbiAgICAgICAgY29uc3QgY29va2llVG9rZW4gPSB0aGlzLmNvb2tpZVN0b3JhZ2UuZ2V0KENPTlNULmNvb2tpZVN0b3JhZ2UudG9rZW4pO1xyXG4gICAgICAgIHJldHVybiAoYXNIZWFkZXIpID8ge2hlYWRlcnM6IHt0b2tlbjogY29va2llVG9rZW59fSA6IGNvb2tpZVRva2VuO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1ldGFkYXRhKHBhdGgsIGNiRXJyb3IpIHtcclxuICAgICAgICBjb25zdCB7dHlwZSwgc3ViVHlwZX0gPSBwYXRoO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QoYCR7Q09OU1QuZ2V0UGF0aFR5cGVTdWJ0eXBlKCdpbnN0YWdyYW1UYXNrTWFuYWdlcl9nZXRUYXNrQnlUeXBlcycsIHR5cGUsIHN1YlR5cGUpfWAsXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VG9rZW4oJ2FzSGVhZGVyJyksIGNiRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRhc2tUeXBlcyhkZXRhaWxzLCBjYkVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChgJHtDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1UYXNrTWFuYWdlcl9nZXRUYXNrVHlwZXMnKX1gLFxyXG4gICAgICAgICAgICB0aGlzLmdldFRva2VuKCdhc0hlYWRlcicpLCBjYkVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wRm9sbG93aW5nTGlzdCh0YXNrSWQsIGNiRXJyb3IpIHtcclxuICAgICAgICBjb25zdCBzZXR0aW5nID0ge1xyXG4gICAgICAgICAgICAuLi50aGlzLnNldHRpbmdQb3N0LFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnNldHRpbmdQb3N0LmhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICAndG9rZW4nOiB0aGlzLmdldFRva2VuKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgdXJsID0gQ09OU1QuZ2V0UGF0aCgnaW5zdGFncmFtVGFza01hbmFnZXJfcHV0U3RvcEZvbGxvd2luZ0xpc3QnLCB0YXNrSWQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QodXJsLFxyXG4gICAgICAgICAgICBzZXR0aW5nLCBjYkVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVGb2xsb3dpbmdMaXN0KHRhc2tJZCwgY2JFcnJvcikge1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSB7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QsXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QuaGVhZGVycyxcclxuICAgICAgICAgICAgICAgICd0b2tlbic6IHRoaXMuZ2V0VG9rZW4oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCB1cmwgPSBDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1UYXNrTWFuYWdlcl9kZWxSZW1vdmVGb2xsb3dpbmdMaXN0JywgdGFza0lkKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KHVybCxcclxuICAgICAgICAgICAgc2V0dGluZywgY2JFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGVmYXVsdENvbmZpZ3MoY2JFcnJvcikge1xyXG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSB7XHJcbiAgICAgICAgICAgIFNUUkFURUdZX1RZUEU6ICdGT0xMT1dJTkcnLFxyXG4gICAgICAgICAgICBTVFJBVEVHWV9TVUJUWVBFOiAnRk9MTE9XSU5HX0xJU1QnXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCB1cmwgPSBgJHtDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1UYXNrTWFuYWdlcl9nZXREZWZhdWx0Q29uZmlncycpfS8ke2RldGFpbHMuU1RSQVRFR1lfVFlQRX0vc3VidHlwZS8ke2RldGFpbHMuU1RSQVRFR1lfU1VCVFlQRX1gO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QodXJsLFxyXG4gICAgICAgICAgICB0aGlzLmdldFRva2VuKCdhc0hlYWRlcicpLCBjYkVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBwb3N0U3RhcnRGb2xsb3dpbmdMaXN0KGJvZHksIGNiRXJyb3IpIHtcclxuICAgICAgICBjb25zdCBzZXR0aW5nID0ge1xyXG4gICAgICAgICAgICAuLi50aGlzLnNldHRpbmdQb3N0LFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnNldHRpbmdQb3N0LmhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICAndG9rZW4nOiB0aGlzLmdldFRva2VuKCksXHJcbiAgICAgICAgICAgICAgICAnWC1BdXRoLVRva2VuJzogJ2UyZjQzMzZhYmVhNDQwNDg5YzUxYzVjMTAyOTRlYTEyJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzZXR0aW5nLmJvZHkgPSBKU09OLnN0cmluZ2lmeShib2R5KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChgJHtDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1UYXNrTWFuYWdlcl9wb3N0U3RhcnRGb2xsb3dpbmdMaXN0Jyl9YCxcclxuICAgICAgICAgICAgc2V0dGluZywgY2JFcnJvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCB1c2VySW5zdGFuY2UgPSBudWxsO1xyXG5cclxuaWYgKCF1c2VySW5zdGFuY2UpIHtcclxuICAgIHVzZXJJbnN0YW5jZSA9IG5ldyBVc2VyVGFza01hbmFnZXIoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlckluc3RhbmNlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uL2pzLXNlcnZpY2VzL2FwaS10YXNrLW1hbmFnZXIuanMiLCJpbXBvcnQgJy4vYmFzZS5zY3NzJztcclxuLy8gaW1wb3J0ICdib290c3RyYXAnO1xyXG5pbXBvcnQge0NPTlNUfSBmcm9tICcuL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMnO1xyXG5pbXBvcnQgUHViU3ViIGZyb20gJ3B1YnN1Yi1qcyc7XHJcbmltcG9ydCBSZWdpc3RlckZvcm0gZnJvbSAnLi9ibG9ja3MvcmVnaXN0ZXItZm9ybS9yZWdpc3Rlci1mb3JtJztcclxuaW1wb3J0IHtMb2dpbkZvcm19IGZyb20gJy4vYmxvY2tzL2xvZ2luLWZvcm0vbG9naW4tZm9ybSc7XHJcbmltcG9ydCB7TG9naW5QYWdlfSBmcm9tICcuL3BhZ2VzL19hdXRoL2xvZ2luLXBhZ2UnO1xyXG5pbXBvcnQge2NvbmZpcm1hdGlvbldpdGhSZWRpcmVjdH0gZnJvbSAnLi9ibG9ja3MvY29uZmlybS1yZWcvY29uZmlybS1yZWcnO1xyXG5pbXBvcnQgKiBhcyBoZWFkZXIgZnJvbSAnLi9ibG9ja3MvaGVhZGVyL2hlYWRlcic7XHJcbmltcG9ydCAqIGFzIGJ1cmdlck1lbnUgZnJvbSAnLi9ibG9ja3MvaGVhZGVyL2J1cmdlci1tZW51L2J1cmdlci1tZW51JztcclxuaW1wb3J0ICogYXMgaW5zdGFncmFtQWNjb3VudHMgZnJvbSAnLi9ibG9ja3MvaW5zdGFncmFtLWFjY291bnRzLWxpc3QvaW5zdGFncmFtLWFjY291bnRzLWxpc3QnO1xyXG5pbXBvcnQgKiBhcyBtZXNzYWdlcyBmcm9tICcuL2Jsb2Nrcy9tZXNzYWdlcy9tZXNzYWdlcyc7XHJcbmltcG9ydCAqIGFzIGZvbGxvdyBmcm9tICcuL2Jsb2Nrcy9mb2xsb3cvZm9sbG93JztcclxuaW1wb3J0ICogYXMgY2hhdEJvdCBmcm9tICcuL2Jsb2Nrcy9jaGF0LWJvdC1ibG9jay9jaGF0LWJvdC1ibG9jayc7XHJcblxyXG5jb25zdCBzZWxlY3RvckNzc0xvZ2luRm9ybSA9IHtcclxuICAgIF9sb2dpbkJveDogQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyTG9naW5Cb3gsXHJcbiAgICBfZm9ybUlkOiAnI2pzX2xvZ2luLWZvcm0nLFxyXG4gICAgX2J1dHRvblN1Ym1pdElkOiAnI2pzX2xvZ2luX2J0bicsXHJcbiAgICBfc2hvd0xvZ2luQm94QnRuSWQ6IENPTlNULnVpU2VsZWN0b3JzLmhlYWRlck5hdkxvZ2luQnRuXHJcbn07XHJcblxyXG5jb25zdCBzZWxlY3RvckNzc0xvZ2luRm9ybUluc3RhZ3JhbSA9IHtcclxuICAgIF9sb2dpbkJveDogJ21haW4gLmxvZ2luLWJveCcsXHJcbiAgICBfZm9ybUlkOiAnI2pzX2luc3RhZ3JhbS1hZGQtYWNjb3VudCcsXHJcbiAgICBfYnV0dG9uU3VibWl0SWQ6ICcjanNfaW5zdGFncmFtLWFkZC1hY2NvdW50LS1idG4nLFxyXG4gICAgX3Nob3dMb2dpbkJveEJ0bklkOiAnI2pzX3Nob3ctbG9naW4tYm94JyxcclxuICAgIGlzTG9naW5JbnN0YWdyYW06IHRydWVcclxufTtcclxuXHJcbmZ1bmN0aW9uIHNldFB1YlN1YihQdWJTdWIpIHtcclxuICAgIHdpbmRvdy5QdWJTdWIgPSBQdWJTdWI7XHJcbn1cclxuXHJcbmNvbnN0IGluaXQgPSAoKSA9PiB7XHJcbiAgICBzZXRQdWJTdWIoUHViU3ViKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdpbml0IGpzIGhlcmUnLCBDT05TVC51c2VyKTtcclxuICAgIChuZXcgUmVnaXN0ZXJGb3JtKCkpLmluaXQoKTtcclxuICAgIExvZ2luRm9ybShzZWxlY3RvckNzc0xvZ2luRm9ybSkuaW5pdCgpO1xyXG4gICAgTG9naW5Gb3JtKHNlbGVjdG9yQ3NzTG9naW5Gb3JtSW5zdGFncmFtKS5pbml0KCk7IC8vIGluaXQgaW5zdGFncmFtIGxvZ2luIGZvcm0qIS9cclxuICAgIExvZ2luUGFnZSh7XHJcbiAgICAgICAgX2xvZ2luQm94OiAnLmF1dGgubG9naW4gLmNhcmQtc2lnbmluJyxcclxuICAgICAgICBfZm9ybUlkOiAnLmZvcm0tc2lnbmluJyxcclxuICAgICAgICBfYnV0dG9uU3VibWl0SWQ6ICcuZm9ybS1zaWduaW4gW3R5cGU9XCJzdWJtaXRcIl0nXHJcbiAgICB9KS5pbml0KCk7XHJcblxyXG4gICAgY29uZmlybWF0aW9uV2l0aFJlZGlyZWN0KCkuaW5pdCgpO1xyXG4gICAgaGVhZGVyLmluaXRIZWFkZXIoKTtcclxuICAgIGJ1cmdlck1lbnUuaW5pdCgpO1xyXG4gICAgZm9sbG93LmluaXQoKTtcclxuICAgIGluc3RhZ3JhbUFjY291bnRzLmluaXQoKTtcclxuICAgIG1lc3NhZ2VzLmluaXQoKTtcclxuICAgIGNoYXRCb3QuaW5pdCgpO1xyXG59O1xyXG5cclxuKCgpID0+IGluaXQoKSkoKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jvb3RzdHJhcC5qcyIsImltcG9ydCB7Q09OU1R9IGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMnO1xyXG4vLyBpbXBvcnQgVXNlclRhc2tNYW5hZ2VyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9hcGktdGFzay1tYW5hZ2VyJztcclxuLypcclxuY29uc3Qgc3RhdGUgPSB7XHJcbiAgICAndGV4dF9mb3Jtcyc6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdrZXlfd29yZHMnOiBbJ9GG0LXQvdCwJywgJ9GB0YLQvtC40LzQvtGB0YLRjCddLFxyXG4gICAgICAgICAgICAnYW5zd2VyJzogJzEwMDUwMCDRgNGD0LHQu9C10LknXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdrZXlfd29yZHMnOiBbJ9GG0LXQvdGDJywgJ9GG0LXQvdC90LjQuiddLFxyXG4gICAgICAgICAgICAnYW5zd2VyJzogJzEg0LzQu9C9LiDRgNGD0LHQu9C10LknXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59OyovXHJcblxyXG4vKlxyXG5mdW5jdGlvbiBmaWxsTGlzdFR5cGVzKCR3cmFwcGVyLCBkYXRhKSB7XHJcbiAgY29uc3Qgc3RydWN0dXJlT2JqID0gZGF0YVsnc3RydWN0dXJlJ107XHJcblxyXG4gICR3cmFwcGVyLmVtcHR5KCkuYWRkQ2xhc3MoJ2JvcmRlci1saWdodC1jb2xvcicpO1xyXG4gICQoJzxkaXYgY2xhc3M9XCJcIj7QotC40L8g0LfQsNC00LDQvdC40Y88L2Rpdj48c2VsZWN0IG5hbWU9XCJ0YXNrLXR5cGVcIiBpZD1cInRhc2stdHlwZXNcIj48L3NlbGVjdD4nKS5hcHBlbmRUbygkd3JhcHBlcik7XHJcbiAgZm9yIChjb25zdCB0eXBlIGluIHN0cnVjdHVyZU9iaikge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ3N0cnVjdHVyZTogJyArIGl0ZW0pO1xyXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzdHJ1Y3R1cmVPYmosIHR5cGUpKSB7XHJcbiAgICAgICQoYDxvcHRpb24gY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gcHktMlwiICR7KHR5cGUgIT09ICdGT0xMT1dJTkcnKSA/ICdkaXNhYmxlZD1cImRpc2FibGVkXCInIDogJyd9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IFwiJHtKU09OLnN0cmluZ2lmeSh7dHlwZSwgc3VidHlwZTogc3RydWN0dXJlT2JqW3R5cGVdfSl9XCI+XHJcbiAgICAgICAgICAgICAgICAke3R5cGV9XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPmApLmFwcGVuZFRvKCQoJyN0YXNrLXR5cGVzJykpO1xyXG4gICAgfVxyXG4gIH1cclxufSovXHJcblxyXG4vKipcclxuICogSW5pdCBoZWFkZXJcclxuICovXHJcbmZ1bmN0aW9uIGluaXRTdGVwcygpIHtcclxuICAgIGNvbnN0ICRmb3JtID0gJCgnLmNoYXQtYm90LWZvcm0nKTtcclxuICAgIGNvbnN0IHRleHRSb3cgPSAkKCcuY2hhdC1ib3QtdGV4dC1maWVsZHMnKTtcclxuXHJcbiAgICAkKCcuanNfYWRkLWNoYXQtYm90Jykub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY2xpY2snKTtcclxuICAgIC8vICQodGV4dFJvdykuaW5zZXJ0QWZ0ZXIoJCgnLmNoYXQtYm90LXRleHQtZmllbGRzJykpO1xyXG4gICAgICAgICQoJy5jaGF0LWJvdC10ZXh0LWZpZWxkczpmaXJzdC1jaGlsZCcpLmNsb25lKCkuaW5zZXJ0QmVmb3JlKHRleHRSb3cpO1xyXG4gICAgfSk7XHJcbiAgICAvLyBzdWJtaXRcclxuICAgICRmb3JtLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGNvbnN0IGtleVdvcmRzID0gJCgnLmNoYXQtYm90LXRleHQtZmllbGRzIHRleHRhcmVhLmNoYXQtd29yZHMnKS52YWwoKVxyXG4gICAgICAgIC50cmltKClcclxuICAgICAgICAucmVwbGFjZSgvIC9nLCAnJylcclxuICAgICAgICAuc3BsaXQoJywnKVxyXG4gICAgICAgIC5maWx0ZXIoaSA9PiBpLmxlbmd0aCA+IDApO1xyXG4gICAgICAgIGNvbnN0IGFuc3dlciA9ICQoJy5jaGF0LWJvdC10ZXh0LWZpZWxkcyB0ZXh0YXJlYS5jaGF0LW1lc3NhZ2VzJykudmFsKCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdtYWtlIHJlcXVlc3QgaGVyZSoqJywge2tleVdvcmRzLCBhbnN3ZXJ9KTtcclxuXHJcbiAgICAvLyBVc2VyVGFza01hbmFnZXIucG9zdFN0YXJ0Rm9sbG93aW5nTGlzdChzdGF0ZSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAvLyAgICAgaWYgKHJlc3VsdC5zdGF0dXMuc3RhdGUgPT09ICdvaycpIHtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XHJcbiAgICAvLyAgICAgICAgICQoJy5mb3JtLXN1Ym1pdC1maW5pc2gnKS5hZGRDbGFzcygnZC1ibG9jaycpXHJcbiAgICAvLyAgICAgICAgICAgICAuZmluZCgnLmFsZXJ0JykuYXBwZW5kKGA8cD50YXNrX2lkOiAke3Jlc3VsdC5kYXRhLnRhc2tfaWR9PC9wPmApO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGFsZXJ0IGNsb3NlXHJcbiAgICAkKCcuZm9ybS1zdWJtaXQtZmluaXNoIC5jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0tc3VibWl0LWZpbmlzaCcpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJyk7XHJcbiAgICAgICAgJCgnI3YtcGlsbHMtcnVubmVkLXRhYicpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgd2luZG93LlB1YlN1Yi5wdWJsaXNoKENPTlNULmV2ZW50cy50YXNrcy5ORVdfVEFTS19DUkVBVEVEKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIGlmICgkKCcuY2hhdC1ib3QtZm9ybScpLmxlbmd0aCkge1xyXG4gICAgICAgIGluaXRTdGVwcygpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3MvY2hhdC1ib3QtYmxvY2svY2hhdC1ib3QtYmxvY2suanMiLCIvKiBlc2xpbnQtZGlzYWJsZSBzb3J0LXZhcnMgKi9cclxuLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3VzZXInO1xyXG5pbXBvcnQge0NPTlNUfSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29uc3RzJztcclxuaW1wb3J0IGNvb2tpZVN0b3JhZ2UgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2Nvb2tpZSc7XHJcblxyXG5jb25zdCBwYXJzZVF1ZXJ5U3RyaW5nID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgY29uc3Qgc3RyID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcclxuICAgIGNvbnN0IG9ialVSTCA9IHt9O1xyXG5cclxuICAgIHN0ci5yZXBsYWNlKFxyXG4gICAgICBuZXcgUmVnRXhwKCcoW14/PSZdKykoPShbXiZdKikpPycsICdnJyksXHJcbiAgICAgICAgZnVuY3Rpb24oJDAsICQxLCAkMikge1xyXG4gICAgICAgICAgICBvYmpVUkxbJDFdID0gJDI7XHJcbiAgICAgICAgfVxyXG4gICk7XHJcbiAgICByZXR1cm4gb2JqVVJMO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpcm1hdGlvbldpdGhSZWRpcmVjdCgpIHtcclxuICAgIGNvbnN0IHVzZXIgPSBVc2VyO1xyXG4gICAgY29uc3QgcGFyYW1zID0gcGFyc2VRdWVyeVN0cmluZygpO1xyXG4gICAgLy8gRXhhbXBsZSBob3cgdG8gdXNlIGl0OlxyXG5cclxuICAgIGNvbnN0IHNlbmRDb25maXJtID0gZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICAgICAgdXNlci5jb25maXJtKHRva2VuKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgJiYgcmVzdWx0LnN0YXR1cy5zdGF0ZSA9PT0gJ29rJykge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHNhdmUgdGhlIGl0ZW1cclxuICAgICAgICAgICAgICAgIGNvb2tpZVN0b3JhZ2Uuc2V0KENPTlNULmNvb2tpZVN0b3JhZ2UuZW1haWxDb25maXJtZWQsICdjb25maXJtZWQnKTtcclxuICAgICAgICAgICAgICAgIGNvb2tpZVN0b3JhZ2Uuc2V0KENPTlNULmNvb2tpZVN0b3JhZ2UudG9rZW4sIHJlc3VsdC5kYXRhLnRva2VuKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24gPSBjb25maXJtLXJlZ2lzdHJhdGlvbi5odG1sP3Rva2VuPSdmcm9tIHNlcnZlcic7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gcmV0cmlldmUgdGhlIG9iamVjdCBpbiBhIHN0cmluZyBmb3JtXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXN0b21lcnNEYXRhU3RyaW5nID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnY3VzdG9tZXJzRGF0YScpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VzdG9tZXJzRGF0YVN0cmluZyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVxdWVzdCBzdWNjZWVkZWQgd2l0aCBKU09OIHJlc3BvbnNlJywgcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICQoJy5jb25maXJtLXJlZ2lzdHJhdGlvbicpLmFwcGVuZChgPHA+Y29uZmlybWF0aW9uIHN0YXR1czogJHtyZXN1bHQuc3RhdHVzLnN0YXRlfTwvcD5gKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICcuL3Byb2ZpbGUuaHRtbCc7XHJcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZWRpcmVjdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkb3Qtbm90YXRpb25cclxuICAgICAgICBjb25zdCB0b2tlbiA9IHBhcmFtc1sndG9rZW4nXTtcclxuXHJcbiAgICAgICAgaWYgKCFsb2NhdGlvbi5wYXRobmFtZS5pbmRleE9mKCdjb25maXJtLXJlZ2lzdHJhdGlvbicpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZW5kIHJlcSB0byAnLCB0b2tlbik7XHJcbiAgICAgICAgICAgIHNlbmRDb25maXJtKHRva2VuKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAgICAgcmVkaXJlY3QoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGluaXRcclxuICAgIH07XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9jb25maXJtLXJlZy9jb25maXJtLXJlZy5qcyIsImltcG9ydCBVc2VyVGFza01hbmFnZXIgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2FwaS10YXNrLW1hbmFnZXInO1xyXG5pbXBvcnQgdmlld1V0aWxzIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy92aWV3JztcclxuaW1wb3J0IHtDT05TVH0gZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2NvbnN0cyc7XHJcblxyXG5mdW5jdGlvbiBmaWxsTGlzdE1ldGEoJGxpc3QsIGRhdGFBcnJheSwgaXNSdW5zKSB7XHJcbiAgICBjb25zdCBpdGVtcyA9IGRhdGFBcnJheTtcclxuICAgIC8vIGNvbnN0IGRlZmF1bHRBdmF0YXJTcmMgPSAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9qTk5UNExFLnBuZyc7XHJcbiAgICAkbGlzdC5lbXB0eSgpO1xyXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2dyZXNzID0ge1xyXG4gICAgICAgICAgICBjb3VudDogMSxcclxuICAgICAgICAgICAgaW5kZXg6IDAsXHJcbiAgICAgICAgICAgIHBlcmNlbnQ6IDU1LFxyXG4gICAgICAgICAgICB0aW1lc3RhbXA6IDE1NDg2Njk1MDc2NThcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChpdGVtLnR5cGUgIT09ICdGT0xMT1dJTkcnKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGl0ZW0uc3RhdHVzLnN0YXRlID09PSAnU1RPUFBFRCcgJiYgIWlzUnVucykge1xyXG4gICAgICAgICAgICAkKGA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gcC0wXCIgZGF0YS11c2VybmFtZT1cIiR7aXRlbS50eXBlfVwiIGRhdGEtdGFzay1pZD1cIiR7aXRlbS50YXNrX2lkfVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWJvZHkgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB0YXNrLXR5cGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHsoaXRlbS50YXNrX2lkKSA/IGA8cCBjbGFzcz1cImJhZGdlIGJhZGdlLXNlY29uZGFyeSBteS0xXCI+JHtpdGVtLnRhc2tfaWR9PC9wPmAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stcHJvZ3Jlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic21hbGwgbXktMVwiPtCe0YHRgtCw0L3QvtCy0LvQtdC90L48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm15LTFcIj4ke2l0ZW0uc3RhdHVzLnJlYXNvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXdhcm5pbmcganNfYnRuLWRlbGV0ZS10YXNrXCI+0KPQtNCw0LvQuNGC0Yw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cImNvbCB0YXNrLXN1YnR5cGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHsoaXRlbS5zdWJ0eXBlKSA/IGA8cCBjbGFzcz1cIm10LTAgbWItMVwiPiR7aXRlbS5zdWJ0eXBlfTwvcD5gIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+LS0+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPmApLmFwcGVuZFRvKCRsaXN0KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uc3RhdHVzLnN0YXRlID09PSAnSU5fUFJPR1JFU1MnKSB7XHJcbiAgICAgICAgICAgICQoYDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBweS0yXCIgZGF0YS10YXNrLWlkPVwiJHtpdGVtLnRhc2tfaWR9XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHRhc2stcHJvZ3Jlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm10LTAgbWItMSBuYW1lXCI+0JIg0L/RgNC+0LPRgNC10YHRgdC1IDogJHtpdGVtLnN0YXR1cy5yZWFzb259PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+YCkuYXBwZW5kVG8oJGxpc3QpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoKGl0ZW0uc3RhdHVzLnN0YXRlID09PSAnRklOSVNIRUQnIHx8IGl0ZW0uc3RhdHVzLnN0YXRlID09PSAnSU5fUFJPR1JFU1MnKSAmJiAhaXNSdW5zKSB7XHJcbiAgICAgICAgICAgICQoYDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBweS0yXCIgZGF0YS10YXNrLWlkPVwiJHtpdGVtLnRhc2tfaWR9XCI+XHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJjYXJkLXRpdGxlXCI+0JLRi9C/0L7Qu9C90LXQvdC90L48L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXJpZ2h0XCI+ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1tdXRlZFwiPiR7dmlld1V0aWxzLmdldEZvcm1hdHRlZERhdGVVdGlsKHByb2dyZXNzLnRpbWVzdGFtcCl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1zdWNjZXNzXCI+MTAwJTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MtYmFyIGJnLXN1Y2Nlc3NcIiByb2xlPVwicHJvZ3Jlc3NiYXJcIiBzdHlsZT1cIndpZHRoOiAxMDAlOyBoZWlnaHQ6IDZweDtcIiBhcmlhLXZhbHVlbm93PVwiMjVcIiBhcmlhLXZhbHVlbWluPVwiMFwiIGFyaWEtdmFsdWVtYXg9XCIxMDBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXdhcm5pbmcganNfYnRuLWRlbGV0ZS10YXNrXCI+0KPQtNCw0LvQuNGC0Yw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPmApLmFwcGVuZFRvKCRsaXN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCEkKCdsaScsICRsaXN0KS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgJChgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIHB5LTJcIiBkYXRhLXRhc2staWQ9XCIke2l0ZW0udGFza19pZH1cIj5cclxuICAgICAgICAgICAgICAgIDxwPtCSINGN0YLQvtC8INGA0LDQt9C00LXQu9C1INC90LXRgiDQvdC4INC+0LTQvdC+0Lkg0LfQsNC00LDRh9C4LjwvcD4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvbGk+YCkuYXBwZW5kVG8oJGxpc3QpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xyXG5mdW5jdGlvbiBpbml0SGFuZGxlcnMoKSB7XHJcbiAgICBjb25zdCAkYnRuU3RvcFRhc2sgPSAkKCcuanNfYnRuLXN0b3AtdGFzaycpO1xyXG4gICAgY29uc3QgJGJ0bkRlbFRhc2sgPSAkKCcuanNfYnRuLWRlbGV0ZS10YXNrJyk7XHJcbiAgICBjb25zdCBnZXRUYXNrSUQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJ0biA9ICQoZS50YXJnZXQpO1xyXG4gICAgICAgIHJldHVybiBidG4uY2xvc2VzdCgnbGknKS5kYXRhKCd0YXNrLWlkJyk7XHJcbiAgICB9O1xyXG5cclxuICAgICRidG5TdG9wVGFzay5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhc2tJZCA9IGdldFRhc2tJRChlKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnU1RPUCBUYXNrIGlkJywgdGFza0lkKTtcclxuICAgICAgICBVc2VyVGFza01hbmFnZXIuc3RvcEZvbGxvd2luZ0xpc3QodGFza0lkKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgZ2V0VGFza3NEYXRhKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkYnRuRGVsVGFzay5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhc2tJZCA9IGdldFRhc2tJRChlKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnREVMRVRFIGlkJywgdGFza0lkKTtcclxuICAgICAgICBVc2VyVGFza01hbmFnZXIuZGVsZXRlRm9sbG93aW5nTGlzdCh0YXNrSWQpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICBnZXRUYXNrc0RhdGEoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUYXNrc0RhdGEoKSB7XHJcbiAgICBjb25zdCBwYXRoID0ge1xyXG4gICAgICAgIHR5cGU6IENPTlNULnVybC50bVR5cGVzLmZvbGxvd2luZ1QsXHJcbiAgICAgICAgc3ViVHlwZTogQ09OU1QudXJsLnRtVHlwZXMuZm9sbG93aW5nU3ViVFswXVxyXG4gICAgfTtcclxuICAgIFVzZXJUYXNrTWFuYWdlci5nZXRNZXRhZGF0YShwYXRoKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzLnN0YXRlID09PSAnb2snKSB7XHJcbiAgICAgICAgICAgIGZpbGxMaXN0TWV0YSgkKCcuZm9sbG93LXRhc2tzLXJ1bnMnKSwgcmVzdWx0LmRhdGEubWV0YSwgJ2lzUnVucycpO1xyXG4gICAgICAgICAgICBmaWxsTGlzdE1ldGEoJCgnLmZvbGxvdy10YXNrcy1zdG9wcGVkJyksIHJlc3VsdC5kYXRhLm1ldGEpO1xyXG4gICAgICAgICAgICBpbml0SGFuZGxlcnMoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEluaXRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgZ2V0VGFza3NEYXRhKCk7XHJcbiAgICB3aW5kb3cuUHViU3ViLnN1YnNjcmliZShDT05TVC5ldmVudHMudGFza3MuTkVXX1RBU0tfQ1JFQVRFRCwgKGV2ZW50TmFtZSwgZGF0YSkgPT4ge1xyXG4gICAgICAgIGdldFRhc2tzRGF0YSgpO1xyXG4gICAgfSk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9mb2xsb3cvZm9sbG93LXN0YXR1cy5qcyIsImltcG9ydCAqIGFzIGZvbGxvd1N0YXR1cyBmcm9tICcuL2ZvbGxvdy1zdGF0dXMnO1xyXG5pbXBvcnQge0NPTlNUfSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29uc3RzJztcclxuaW1wb3J0IFVzZXJUYXNrTWFuYWdlciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvYXBpLXRhc2stbWFuYWdlcic7XHJcbmltcG9ydCAnYnJ1dHVzaW4tanNvbi1mb3Jtcyc7XHJcblxyXG5jb25zdCBzdGF0ZSA9IHtcclxuICAgIHVzZXJuYW1lOiAnJyxcclxuICAgIHVzZXJfZGVmYXVsdF9jb25maWc6IHtcclxuICAgICAgICB0YXNrX21vZGU6ICdTQUZFJ1xyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gZmlsbExpc3RNZXRhKCRsaXN0LCBkYXRhQXJyYXkpIHtcclxuICAgIGNvbnN0IGl0ZW1zID0gZGF0YUFycmF5O1xyXG4gICAgLy8gY29uc3QgZGVmYXVsdEF2YXRhclNyYyA9ICdodHRwczovL2kuaW1ndXIuY29tL2pOTlQ0TEUucG5nJztcclxuICAgICRsaXN0LmVtcHR5KCkuYWRkQ2xhc3MoJ2JvcmRlci1saWdodC1jb2xvcicpO1xyXG4gICAgJCgnPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIHB5LTJcIj48aDM+VXNlclRhc2tNYW5hZ2VyPC9oMz48L2xpPicpLmFwcGVuZFRvKCRsaXN0KTtcclxuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAvLyBjb25zdCBpbmZvID0gaXRlbS5pbmZvO1xyXG4gICAgICAgIC8vIGNvbnN0IGNoZWNrcG9pbnQgPSBpdGVtLmNoZWNrcG9pbnQgfHwgaXRlbTtcclxuICAgICAgICAkKGA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gcHktMlwiIGRhdGEtdXNlcm5hbWU9XCIke2l0ZW0udHlwZX1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1ib2R5IGQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgdGFzay10eXBlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7KGl0ZW0udGFza19pZCkgPyBgPHAgY2xhc3M9XCJtdC0wIG1iLTEgbmFtZVwiPiR7aXRlbS50YXNrX2lkfTwvcD5gIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB0YXNrLXN1YnR5cGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHsoaXRlbS5zdWJ0eXBlKSA/IGA8cCBjbGFzcz1cIm10LTAgbWItMSBuYW1lXCI+JHtpdGVtLnN1YnR5cGV9PC9wPmAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHRhc2stcHJvZ3Jlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHsoaXRlbS5zdGF0dXMuc3RhdGUgPT09ICdTVE9QUEVEJykgPyBgPHAgY2xhc3M9XCJtdC0wIG1iLTEgbmFtZVwiPtCe0YHRgtCw0L3QvtCy0LvQtdC90L4gLSAke2l0ZW0uc3RhdHVzLnJlYXNvbn08L3A+YCA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwiY29sIHRhc2stcHJvZ3Jlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHsoaXRlbS5wcm9ncmVzcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYDxwIGNsYXNzPVwibXQtMCBtYi0xIG5hbWVcIj7QmtC+0LvQuNGH0LXRgdGC0LLQviAtICR7aXRlbS5wcm9ncmVzcy5jb3VudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtdC0wIG1iLTEgbmFtZVwiPtCf0YDQvtGG0LXQvdGCIC0gJHtpdGVtLnByb2dyZXNzLnBlcmNlbnR9PC9wPmAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4tLT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPmApLmFwcGVuZFRvKCRsaXN0KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaWxsTGlzdFR5cGVzKCR3cmFwcGVyLCBkYXRhKSB7XHJcbiAgICBjb25zdCBzdHJ1Y3R1cmVPYmogPSBkYXRhWydzdHJ1Y3R1cmUnXTtcclxuXHJcbiAgICAkd3JhcHBlci5lbXB0eSgpLmFkZENsYXNzKCdib3JkZXItbGlnaHQtY29sb3InKTtcclxuICAgICQoJzxkaXYgY2xhc3M9XCJcIj7QotC40L8g0LfQsNC00LDQvdC40Y88L2Rpdj48c2VsZWN0IG5hbWU9XCJ0YXNrLXR5cGVcIiBpZD1cInRhc2stdHlwZXNcIj48L3NlbGVjdD4nKS5hcHBlbmRUbygkd3JhcHBlcik7XHJcbiAgICBmb3IgKGNvbnN0IHR5cGUgaW4gc3RydWN0dXJlT2JqKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3N0cnVjdHVyZTogJyArIGl0ZW0pO1xyXG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc3RydWN0dXJlT2JqLCB0eXBlKSkge1xyXG4gICAgICAgICAgICAkKGA8b3B0aW9uIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIHB5LTJcIiAkeyh0eXBlICE9PSAnRk9MTE9XSU5HJykgPyAnZGlzYWJsZWQ9XCJkaXNhYmxlZFwiJyA6ICcnfVxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBcIiR7SlNPTi5zdHJpbmdpZnkoe3R5cGUsIHN1YnR5cGU6IHN0cnVjdHVyZU9ialt0eXBlXX0pfVwiPlxyXG4gICAgICAgICAgICAgICAgJHt0eXBlfVxyXG4gICAgICAgICAgICA8L29wdGlvbj5gKS5hcHBlbmRUbygkKCcjdGFzay10eXBlcycpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRhc2tzRGF0YShwYXRoKSB7XHJcbiAgICBVc2VyVGFza01hbmFnZXIuZ2V0TWV0YWRhdGEocGF0aCkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMuc3RhdGUgPT09ICdvaycpIHtcclxuICAgICAgICAgICAgZmlsbExpc3RNZXRhKCQoJy5mb2xsb3ctdGFza3MtbGlzdCcpLCByZXN1bHQuZGF0YS5tZXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RGF0YVN0ZXAyKHVzZXJzTmFtZSkge1xyXG4gICAgY29uc29sZS5sb2codXNlcnNOYW1lKTtcclxuICAgIGNvbnN0IHBhdGggPSB7XHJcbiAgICAgICAgdHlwZTogQ09OU1QudXJsLnRtVHlwZXMuZm9sbG93aW5nVCxcclxuICAgICAgICBzdWJUeXBlOiBDT05TVC51cmwudG1UeXBlcy5mb2xsb3dpbmdTdWJUWzBdXHJcbiAgICB9O1xyXG4gICAgZ2V0VGFza3NEYXRhKHBhdGgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXREYXRhU3RlcDMoKSB7XHJcbiAgICBjb25zdCB1c2VycyA9ICQoJyNmb2xsb3dlcnMnKS52YWwoKVxyXG4gICAgICAgIC50cmltKClcclxuICAgICAgICAucmVwbGFjZSgvIC9nLCAnJylcclxuICAgICAgICAuc3BsaXQoJywnKVxyXG4gICAgICAgIC5maWx0ZXIoaSA9PiBpLmxlbmd0aCA+IDApO1xyXG5cclxuICAgIHN0YXRlWyd1c2VyX2N1c3RvbV9jb25maWcnXSA9IHtcclxuICAgICAgICB1c2Vyc1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGZpbGxTcGVlZExpc3QgPSBmdW5jdGlvbiAoJHdyYXBwZXIsIGRhdGEpIHtcclxuICAgICAgICBjb25zdCB0YXNrTW9kZXMgPSBkYXRhLmNmZyAmJiBkYXRhLmNmZy50YXNrX21vZGVzO1xyXG4gICAgICAgIGNvbnN0IHJhZGlvQnRuUmVkdWNlciA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnQUdHUkVTU0lWRSc6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCIke2l0ZW19XCIgbmFtZT1cImN1c3RvbVJhZGlvXCIgdmFsdWU9XCJzYWZlXCIgY2xhc3M9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImN1c3RvbS1jb250cm9sLWxhYmVsXCIgZm9yPVwiJHtpdGVtfVwiPjxzdHJvbmc+0JDQs9GA0LXRgdGB0LjQstC90YvQuTo8L3N0cm9uZz4gMzAg0L/QvtC00L/QuNGB0L7QuiDQsiDRh9Cw0YE8L2xhYmVsPmA7XHJcbiAgICAgICAgICAgICAgICAvLyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ01JRERMRSc6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwiJHtpdGVtfVwiIG5hbWU9XCJjdXN0b21SYWRpb1wiIHZhbHVlPVwic2FmZVwiIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjdXN0b20tY29udHJvbC1sYWJlbFwiIGZvcj1cIiR7aXRlbX1cIj48c3Ryb25nPtCh0YDQtdC00L3QuNC5Ojwvc3Ryb25nPiAxOCDQv9C+0LTQv9C40YHQvtC6INCyINGH0LDRgTwvbGFiZWw+YCk7XHJcbiAgICAgICAgICAgICAgICAvLyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ1NBRkUnOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwiJHtpdGVtfVwiIG5hbWU9XCJjdXN0b21SYWRpb1wiIHZhbHVlPVwic2FmZVwiIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIiBjaGVja2VkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImN1c3RvbS1jb250cm9sLWxhYmVsXCIgZm9yPVwiJHtpdGVtfVwiPjxzdHJvbmc+0JHQtdC30L7Qv9Cw0YHQvdGL0Lk6PC9zdHJvbmc+IDkg0L/QvtC00L/QuNGB0L7QuiDQsiDRh9Cw0YE8L2xhYmVsPmA7XHJcbiAgICAgICAgICAgICAgICAvLyBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RlZmF1bHQnLCBpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2RyYXcgc3BlZWQgcmFkaW9CdG4nKTtcclxuICAgICAgICAkd3JhcHBlci5lbXB0eSgpO1xyXG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBpbiB0YXNrTW9kZXMpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3N0cnVjdHVyZTogJyArIGl0ZW0pO1xyXG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhc2tNb2RlcywgaXRlbSkpIHtcclxuICAgICAgICAgICAgICAgICQoYDxkaXYgY2xhc3M9XCJjdXN0b20tY29udHJvbCBjdXN0b20tcmFkaW9cIj5cclxuICAgICAgICAgICAgICAgICR7cmFkaW9CdG5SZWR1Y2VyKGl0ZW0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5gKS5hcHBlbmRUbygkd3JhcHBlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGRyYXcgY3JpdGVyaWFcclxuICAgIFVzZXJUYXNrTWFuYWdlci5nZXREZWZhdWx0Q29uZmlncygpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdnZXREZWZhdWx0Q29uZmlncycpO1xyXG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzLnN0YXRlID09PSAnb2snKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIGZpbGxTcGVlZExpc3QoJCgnLmpzX2ZvbGxvdy1zcGVlZCcpLCByZXN1bHQuZGF0YS5mb3VuZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0ZXBSZWR1Y2VyKHN0ZXBOdW1iZXIpIHtcclxuICAgIHN3aXRjaCAoc3RlcE51bWJlcikge1xyXG4gICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgZ2V0RGF0YVN0ZXAyKHN0YXRlLnVzZXJuYW1lKTsgLy8gWy4uLm5ldyBTZXQoc3RhdGUudXNlcm5hbWUpXVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzdGF0ZSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgZ2V0RGF0YVN0ZXAzKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc3RlcE51bWJlcik7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHN0YXRlKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RlZmF1bHQnLCBzdGVwTnVtYmVyKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEluaXQgaGVhZGVyXHJcbiAqL1xyXG5mdW5jdGlvbiBpbml0U3RlcHMoKSB7XHJcbiAgICBjb25zdCAkZm9ybSA9ICQoJy5mb2xsb3ctZm9ybScpO1xyXG4gICAgJCgnLmpzX3Byb2ZpbGUtdXNlci1mb2xsb3c+LmNvbnRhaW5lcicpLnJlbW92ZUNsYXNzKCdjb250YWluZXInKTtcclxuXHJcbiAgICAkZm9ybS5maW5kKCdmaWVsZHNldDpmaXJzdC1jaGlsZCcpLmZhZGVJbignc2xvdycpO1xyXG5cclxuICAgICRmb3JtLmZpbmQoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdJykub24oJ2ZvY3VzJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2lucHV0LWVycm9yJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBuZXh0IHN0ZXBcclxuICAgICRmb3JtLmZpbmQoJy5idG4tbmV4dCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBwYXJlbnRfZmllbGRzZXQgPSAkKHRoaXMpLnBhcmVudHMoJ2ZpZWxkc2V0Jyk7XHJcbiAgICAgICAgbGV0IG5leHRfc3RlcCA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgcmFkaW9CdG5BY3RpdmUgPSBwYXJlbnRfZmllbGRzZXQuZmluZCgnaW5wdXRbbmFtZT1cInVzZXJBY2NvdW50UmFkaW9cIl06Y2hlY2tlZCcpO1xyXG5cclxuICAgICAgICBpZiAocmFkaW9CdG5BY3RpdmUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VybmFtZSA9IHJhZGlvQnRuQWN0aXZlLnBhcmVudHMoJ2xpJykuZGF0YSgndXNlcm5hbWUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RlcFJlZHVjZXIocGFyZW50X2ZpZWxkc2V0LmluZGV4KCksIHN0YXRlKTtcclxuXHJcbiAgICAgICAgcGFyZW50X2ZpZWxkc2V0LmZpbmQoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdLGlucHV0W3R5cGU9XCJlbWFpbFwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS52YWwoKSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2lucHV0LWVycm9yJyk7XHJcbiAgICAgICAgICAgICAgICBuZXh0X3N0ZXAgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2lucHV0LWVycm9yJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKG5leHRfc3RlcCkge1xyXG4gICAgICAgICAgICBwYXJlbnRfZmllbGRzZXQuZmFkZU91dCg0MDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykubmV4dCgpLmZhZGVJbigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gcHJldmlvdXMgc3RlcFxyXG4gICAgJGZvcm0uZmluZCgnLmJ0bi1wcmV2aW91cycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBzdGF0ZS51c2VybmFtZSA9IFsuLi5uZXcgU2V0KHN0YXRlLnVzZXJuYW1lKV07XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCdmaWVsZHNldCcpLmZhZGVPdXQoNDAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucHJldigpLmZhZGVJbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gc3BlZWQgcmFkaW8tYnRuIGdyb3VwXHJcbiAgICAkKCcuanNfZm9sbG93LXNwZWVkIGlucHV0W3R5cGU9cmFkaW9dJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gJCh0aGlzKS5hdHRyKCd2YWx1ZScpO1xyXG4gICAgICAgIHN0YXRlLnVzZXJfZGVmYXVsdF9jb25maWcgPSB7XHJcbiAgICAgICAgICAgIHRhc2tfbW9kZTogdmFsdWUudG9VcHBlckNhc2UoKVxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBzdWJtaXRcclxuICAgICRmb3JtLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGNvbnN0IGdlbmRlclZhbCA9ICQodGhpcykuZmluZCgnLnNlbGVjdC1nZW5kZXIgb3B0aW9uOnNlbGVjdGVkJykudmFsKCk7XHJcbiAgICAgICAgc3RhdGUudXNlcl9kZWZhdWx0X2NvbmZpZyA9IHtcclxuICAgICAgICAgICAgLi4uc3RhdGUudXNlcl9kZWZhdWx0X2NvbmZpZyxcclxuICAgICAgICAgICAgY3JpdGVyaWE6IHtcclxuICAgICAgICAgICAgICAgIGdlbmRlcjogZ2VuZGVyVmFsLnRvVXBwZXJDYXNlKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgbGltaXQgPSBkb2N1bWVudC5mb3Jtc1snZm9sbG93LWZvcm0nXVsnbGltaXQnXTtcclxuICAgICAgICBjb25zdCBoYXZlX3Bvc3RzID0ge1xyXG4gICAgICAgICAgICBmcm9tOiBkb2N1bWVudC5mb3Jtc1snZm9sbG93LWZvcm0nXVsnaGF2ZV9wb3N0c19mcm9tJ10udmFsdWUsXHJcbiAgICAgICAgICAgIHRvOiBkb2N1bWVudC5mb3Jtc1snZm9sbG93LWZvcm0nXVsnaGF2ZV9wb3N0c190byddLnZhbHVlXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBoYXZlX2ZvbGxvd2VycyA9IHtcclxuICAgICAgICAgICAgZnJvbTogZG9jdW1lbnQuZm9ybXNbJ2ZvbGxvdy1mb3JtJ11bJ2hhdmVfZm9sbG93ZXJzX2Zyb20nXS52YWx1ZSxcclxuICAgICAgICAgICAgdG86IGRvY3VtZW50LmZvcm1zWydmb2xsb3ctZm9ybSddWydoYXZlX2ZvbGxvd2Vyc190byddLnZhbHVlXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBoYXZlX2ZvbGxvd2luZ3MgPSB7XHJcbiAgICAgICAgICAgIGZyb206IGRvY3VtZW50LmZvcm1zWydmb2xsb3ctZm9ybSddWydoYXZlX2ZvbGxvd2luZ3NfZnJvbSddLnZhbHVlLFxyXG4gICAgICAgICAgICB0bzogZG9jdW1lbnQuZm9ybXNbJ2ZvbGxvdy1mb3JtJ11bJ2hhdmVfZm9sbG93aW5nc190byddLnZhbHVlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKGxpbWl0LnZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICBsaW1pdC5mb2N1cygpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0YXRlWyd1c2VyX2RlZmF1bHRfY29uZmlnJ10uY3JpdGVyaWEgPSB7XHJcbiAgICAgICAgICAgIGxpbWl0OiBsaW1pdC52YWx1ZSxcclxuICAgICAgICAgICAgJ3VuZm9sbG93X3RoZW4nOiAhISQoJyN1bmZvbGxvd190aGVuOmNoZWNrZWQnKS5sZW5ndGgsXHJcbiAgICAgICAgICAgICdmb2xsb3dfb25fY2xvc2VkX3Byb2ZpbGVzJzogISEkKCcjZm9sbG93X29uX2Nsb3NlZF9wcm9maWxlczpjaGVja2VkJykubGVuZ3RoLFxyXG4gICAgICAgICAgICBoYXZlX3Bvc3RzLFxyXG4gICAgICAgICAgICBoYXZlX2ZvbGxvd2VycyxcclxuICAgICAgICAgICAgaGF2ZV9mb2xsb3dpbmdzXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgJCh0aGlzKS5maW5kKCdpbnB1dFt0eXBlPVwidGV4dFwiXSxpbnB1dFt0eXBlPVwibnVtYmVyXCJdLGlucHV0W3R5cGU9XCJlbWFpbFwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS52YWwoKSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2lucHV0LWVycm9yJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdpbnB1dC1lcnJvcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHN0YXRlLnR5cGUgPSAnRk9MTE9XSU5HJztcclxuICAgICAgICBzdGF0ZS5zdWJ0eXBlID0gJ0ZPTExPV0lOR19MSVNUJztcclxuICAgICAgICBjb25zb2xlLmxvZygnbWFrZSByZXF1ZXN0KiogIHBvc3Q6IFN0YXJ0Rm9sbG93aW5nTGlzdCcsIHN0YXRlKTtcclxuXHJcbiAgICAgICAgVXNlclRhc2tNYW5hZ2VyLnBvc3RTdGFydEZvbGxvd2luZ0xpc3Qoc3RhdGUpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cy5zdGF0ZSA9PT0gJ29rJykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XHJcbiAgICAgICAgICAgICAgICAkKCcuZm9ybS1zdWJtaXQtZmluaXNoJykuYWRkQ2xhc3MoJ2QtYmxvY2snKVxyXG4gICAgICAgICAgICAgICAgICAgIC5maW5kKCcuYWxlcnQnKS5hcHBlbmQoYDxwPnRhc2tfaWQ6ICR7cmVzdWx0LmRhdGEudGFza19pZH08L3A+YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBhbGVydCBjbG9zZVxyXG4gICAgJCgnLmZvcm0tc3VibWl0LWZpbmlzaCAuY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gJCh0aGlzKS5jbG9zZXN0KCdmb3JtLXN1Ym1pdC1maW5pc2gnKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpO1xyXG4gICAgICAgICQoJyN2LXBpbGxzLXJ1bm5lZC10YWInKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgIHdpbmRvdy5QdWJTdWIucHVibGlzaChDT05TVC5ldmVudHMudGFza3MuTkVXX1RBU0tfQ1JFQVRFRCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLypcclxuZnVuY3Rpb24gZml4U3RlcEluZGljYXRvcihuKSB7XHJcbiAgICAvLyBUaGlzIGZ1bmN0aW9uIHJlbW92ZXMgdGhlIFwiYWN0aXZlXCIgY2xhc3Mgb2YgYWxsIHN0ZXBzLi4uXHJcbiAgICB2YXIgaSwgeCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzdGVwXCIpO1xyXG4gICAgZm9yIChpID0gMDsgaSA8IHgubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB4W2ldLmNsYXNzTmFtZSA9IHhbaV0uY2xhc3NOYW1lLnJlcGxhY2UoXCIgYWN0aXZlXCIsIFwiXCIpO1xyXG4gICAgfVxyXG4gICAgLy8uLi4gYW5kIGFkZHMgdGhlIFwiYWN0aXZlXCIgY2xhc3Mgb24gdGhlIGN1cnJlbnQgc3RlcDpcclxuICAgIHhbbl0uY2xhc3NOYW1lICs9IFwiIGFjdGl2ZVwiO1xyXG59Ki9cclxuXHJcbmZ1bmN0aW9uIG1vZGlmeUFjY0xpc3QoKSB7XHJcbiAgICAvLyBjb25zdCByYWRpb0J0biA9IChpZHgpID0+IGA8ZGl2IGNsYXNzPVwiY29sIGN1c3RvbS1jb250cm9sIGN1c3RvbS1yYWRpbyBqc191c2VyLXJhZGlvXCI+XHJcbiAgICAvLyAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwidXNlckFjY291bnRSYWRpb1wiIGlkPVwiY3VzdG9tUmFkaW8tJHtpZHh9XCIgY2xhc3M9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiIHZhbHVlPVwiXCI+XHJcbiAgICAvLyAgICAgICAgIDxsYWJlbCBjbGFzcz1cImN1c3RvbS1jb250cm9sLWxhYmVsXCIgZm9yPVwiY3VzdG9tUmFkaW8tJHtpZHh9XCI+0J/QvtC00L/QuNGB0LDRgtGM0YHRjzwvbGFiZWw+XHJcbiAgICAvLyAgICAgPC9kaXY+YDtcclxuICAgIGNvbnN0IHJhZGlvQnRuQXBwZW5kID0gKGlkeCkgPT4gYDxkaXYgY2xhc3M9XCJcIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ1c2VyQWNjb3VudFJhZGlvXCIgaWQ9XCJjdXN0b21SYWRpby0ke2lkeH1cIiBjbGFzcz1cImN1c3RvbS1jb250cm9sLWlucHV0IGQtbm9uZVwiIHZhbHVlPVwiXCI+XHJcbiAgICAgICAgPC9kaXY+YDtcclxuICAgIGNvbnN0IHJhZGlvQnRuV3JhcCA9IChpZHgpID0+IGA8bGFiZWwgY2xhc3M9XCJhY2NvdW50cy1saXN0LS1sYWJlbC13cmFwcGVyIGNvbCBtYi0wIG1lZGlhIHB5LTNcIiBmb3I9XCJjdXN0b21SYWRpby0ke2lkeH1cIj48L2xhYmVsPmA7XHJcbiAgICBjb25zdCAkYWNjb3VudHNMaXN0ID0gJCgnLmFjY291bnRzLWxpc3QnKTtcclxuICAgIGNvbnN0ICRsaSA9ICRhY2NvdW50c0xpc3QuZmluZCgnbGkubWVkaWEnKTtcclxuICAgICRsaS5hZGRDbGFzcygnanNfdXNlci1yYWRpbycpLnJlbW92ZUNsYXNzKCdweS0zIG1lZGlhJyk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAkbGkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvLyAkKCRsaVtpXSkuYXBwZW5kKHJhZGlvQnRuKGkpKTtcclxuICAgICAgICAkKCRsaVtpXSkud3JhcElubmVyKHJhZGlvQnRuV3JhcChpKSkuYXBwZW5kKHJhZGlvQnRuQXBwZW5kKGkpKTtcclxuICAgIH1cclxuICAgIFVzZXJUYXNrTWFuYWdlci5nZXRUYXNrVHlwZXMoKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0LnN0YXR1cy5zdGF0ZSA9PT0gJ29rJykge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICBmaWxsTGlzdFR5cGVzKCQoJy5qc190YXNrLXR5cGVzJyksIHJlc3VsdC5kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuanNfdXNlci1yYWRpbycpLm9uKCdjbGljaycsICdpbnB1dFt0eXBlPXJhZGlvXScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgY29uc3QgJHBhcmVudEZpZWxkc2V0ID0gJCh0aGlzKS5wYXJlbnRzKCdmaWVsZHNldCcpO1xyXG4gICAgICAgICQoJ2xpLmFjdGl2ZScsICRwYXJlbnRGaWVsZHNldCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnbGknKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLmJ0bi1uZXh0JywgJHBhcmVudEZpZWxkc2V0KS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5jaGVja2JveC1jZWxsJykub24oJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3ZhbGlkYXRlJyk7XHJcbiAgICAgICAgLy8gdXBkYXRlU3RhdHVzKCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyogd29ya2luZyBkZW1vIDogaHR0cDovL2JydXR1c2luLm9yZy9qc29uLWZvcm1zLyMxM1xyXG5mdW5jdGlvbiBmb3JtRnJvbUpzb24oKSB7XHJcbiAgICBjb25zdCBzY2hlbWEgPSB7XHJcbiAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXHJcbiAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgXCJwcm9wMVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnRlZ2VyXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJwcm9wMlwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnRlZ2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInJlcXVpcmVkXCI6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJwcm9wM1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnRlZ2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInJlcXVpcmVkXCI6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJjb21wb3NpdGUxXCI6IHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5lc3RlZDFcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXF1aXJlZFwiOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5lc3RlZDJcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXF1aXJlZFwiOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwicmVxdWlyZWRcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmVzdGVkMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmVzdGVkMlwiXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiY29tcG9zaXRlMlwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcclxuICAgICAgICAgICAgICAgIFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuZXN0ZWQxXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuZXN0ZWQyXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcInJlcXVpcmVkXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICBcIm5lc3RlZDFcIixcclxuICAgICAgICAgICAgICAgICAgICBcIm5lc3RlZDJcIlxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInJlcXVpcmVkXCI6IFtcclxuICAgICAgICAgICAgXCJwcm9wMVwiLFxyXG4gICAgICAgICAgICBcInByb3AyXCIsXHJcbiAgICAgICAgICAgIFwiY29tcG9zaXRlMVwiXHJcbiAgICAgICAgXVxyXG4gICAgfTtcclxuICAgIGNvbnN0IEJydXR1c2luRm9ybXMgPSB3aW5kb3cuYnJ1dHVzaW5bJ2pzb24tZm9ybXMnXTtcclxuICAgIGNvbnN0IGJmID0gQnJ1dHVzaW5Gb3Jtcy5jcmVhdGUoc2NoZW1hKTtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtMScpO1xyXG4gICAgY29uc29sZS5sb2cod2luZG93LmJydXR1c2luKTtcclxuICAgIGJmLnJlbmRlcihjb250YWluZXIsIGRhdGEpO1xyXG59Ki9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgaWYgKCQoJy5mb2xsb3cnKS5sZW5ndGgpIHtcclxuICAgICAgICBmb2xsb3dTdGF0dXMuaW5pdCgpO1xyXG4gICAgICAgIGluaXRTdGVwcygpO1xyXG4gICAgICAgIHdpbmRvdy5QdWJTdWIuc3Vic2NyaWJlKENPTlNULmV2ZW50cy5pbnN0YWdyYW1BY2NvdW5zLklOU1RBR1JBTV9BQ0NPVU5TX1JFTkRFUkVELCAoZXZlbnROYW1lLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIG1vZGlmeUFjY0xpc3QoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL2ZvbGxvdy9mb2xsb3cuanMiLCIvLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuLy8gY29uc3QgaGFtYnVyZ2VyQnV0dG9uQ2xzID0gJyNhc2lkZV9tb2JpbGVfX2J1dHRvbic7XHJcbi8vIGNvbnN0IGhhbWJ1cmdlck1lbnVDbHMgPSAnLmFzaWRlLWJ1cmdlci1tZW51JztcclxuLy8gY29uc3QgaGFtYnVyZ2VyTWVudU9wZW5lZENsYXNzID0gJ2J1cmdlci1tZW51LS1jbG9zZWQnO1xyXG4vLyBjb25zdCBoYW1idXJnZXJCdXR0b25DbG9zZUNsYXNzID0gJ2J1cmdlci1tZW51X19idXR0b24tLWNsb3NlJztcclxuY29uc3Qgc2VsZWN0b3JzRWwgPSB7XHJcbiAgICBsZWZ0TWVudToge1xyXG4gICAgICAgIGhhbWJ1cmdlckJ1dHRvbkNsczogJyNhc2lkZV9tb2JpbGVfX2J1dHRvbicsXHJcbiAgICAgICAgaGFtYnVyZ2VyTWVudUNsczogJy5hc2lkZS1idXJnZXItbWVudScsXHJcbiAgICAgICAgaGFtYnVyZ2VyTWVudU9wZW5lZENsYXNzOiAnYnVyZ2VyLW1lbnUtLWNsb3NlZCcsXHJcbiAgICAgICAgaGFtYnVyZ2VyQnV0dG9uQ2xvc2VDbGFzczogJ2J1cmdlci1tZW51X19idXR0b24tLWNsb3NlJ1xyXG4gICAgfSxcclxuICAgIHJpZ2h0TWVudToge1xyXG4gICAgICAgIGhhbWJ1cmdlckJ1dHRvbkNsczogJyNoZWFkZXJfbW9iaWxlX3RvZ2dsZXInLFxyXG4gICAgICAgIGhhbWJ1cmdlck1lbnVDbHM6ICcuci1zaWRlLWJ1cmdlci1tZW51JyxcclxuICAgICAgICBoYW1idXJnZXJNZW51T3BlbmVkQ2xhc3M6ICdyLXNpZGUtYnVyZ2VyLW1lbnUtLW9wZW4nLFxyXG4gICAgICAgIGhhbWJ1cmdlckJ1dHRvbkNsb3NlQ2xhc3M6ICdidXJnZXItbWVudS1yaWdodF9fYnV0dG9uLS1jbG9zZSdcclxuICAgIH0sXHJcbiAgICBzdWJIZWFkZXI6IHtcclxuICAgICAgICBoYW1idXJnZXJCdXR0b25DbHM6ICcjaGVhZGVyX21vYmlsZV90b3BiYXJfdG9nZ2xlcicsXHJcbiAgICAgICAgaGFtYnVyZ2VyTWVudUNsczogJy5zdWItaGVhZGVyJyxcclxuICAgICAgICBoYW1idXJnZXJNZW51T3BlbmVkQ2xhc3M6ICdzdWItaGVhZGVyLS1vcGVuJyxcclxuICAgICAgICBoYW1idXJnZXJCdXR0b25DbG9zZUNsYXNzOiAnc3ViLWhlYWRlci1idXR0b24tLWNsb3NlJ1xyXG4gICAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRvZ2dsZSBoYW1idXJnZXIgbWVudSBwb3BvdmVyXHJcbiAqL1xyXG5mdW5jdGlvbiB0b2dnbGVIYW1idXJnZXJNZW51KG1lbnVOYW1lKSB7XHJcbiAgICBjb25zdCB7aGFtYnVyZ2VyTWVudUNscywgaGFtYnVyZ2VyQnV0dG9uQ2xzLCBoYW1idXJnZXJCdXR0b25DbG9zZUNsYXNzLCBoYW1idXJnZXJNZW51T3BlbmVkQ2xhc3N9ID0gc2VsZWN0b3JzRWxbbWVudU5hbWVdO1xyXG4gICAgJChoYW1idXJnZXJCdXR0b25DbHMpLnRvZ2dsZUNsYXNzKGhhbWJ1cmdlckJ1dHRvbkNsb3NlQ2xhc3MpO1xyXG4gICAgJChoYW1idXJnZXJNZW51Q2xzKS50b2dnbGVDbGFzcyhoYW1idXJnZXJNZW51T3BlbmVkQ2xhc3MpO1xyXG59XHJcblxyXG4vKipcclxuICogSW5pdCBoYW1idXJnZXIgbWVudVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBjb25zdCBsZWZ0TWVudSA9ICdsZWZ0TWVudSc7XHJcbiAgICBjb25zdCByaWdodE1lbnUgPSAncmlnaHRNZW51JztcclxuICAgIGNvbnN0IHN1YkhlYWRlciA9ICdzdWJIZWFkZXInO1xyXG5cclxuICAgICQoc2VsZWN0b3JzRWxbbGVmdE1lbnVdLmhhbWJ1cmdlckJ1dHRvbkNscykub24oJ2NsaWNrJywgdG9nZ2xlSGFtYnVyZ2VyTWVudS5iaW5kKHRoaXMsIGxlZnRNZW51KSk7XHJcbiAgICAkKHNlbGVjdG9yc0VsW3JpZ2h0TWVudV0uaGFtYnVyZ2VyQnV0dG9uQ2xzKS5vbignY2xpY2snLCB0b2dnbGVIYW1idXJnZXJNZW51LmJpbmQodGhpcywgcmlnaHRNZW51KSk7XHJcbiAgICAkKHNlbGVjdG9yc0VsW3N1YkhlYWRlcl0uaGFtYnVyZ2VyQnV0dG9uQ2xzKS5vbignY2xpY2snLCB0b2dnbGVIYW1idXJnZXJNZW51LmJpbmQodGhpcywgc3ViSGVhZGVyKSk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9oZWFkZXIvYnVyZ2VyLW1lbnUvYnVyZ2VyLW1lbnUuanMiLCIvLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdXNlcic7XHJcbmltcG9ydCBQdWJTdWIgZnJvbSAncHVic3ViLWpzJzsgLy8gaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvcHVic3ViLWpzXHJcbmltcG9ydCB7Q09OU1R9IGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMnO1xyXG5cclxuY29uc3Qgc2VsZWN0b3JMb2dpblN0YXRlID0gJy5qc19tZXNzYWdlX2xvZ2dlZC0tdGV4dCc7XHJcbmNvbnN0IHNlbGVjdG9yRW1haWxDb25maXJtU3RhdGUgPSAnLmpzX2VtYWlsLWNvbmZpcm0tLXRleHQnO1xyXG5jb25zdCBjbG9zZUNsYXNzID0gJ2Qtbm9uZSc7XHJcbmNvbnN0IG9wZW5lZENsYXNzID0gJ2QtYmxvY2snO1xyXG5cclxuZnVuY3Rpb24gZW1haWxOb3RDb25maXJtZWQoKSB7XHJcbiAgICBjb25zdCAkZW1haWxuTXNnID0gJChzZWxlY3RvckVtYWlsQ29uZmlybVN0YXRlKTtcclxuICAgICRlbWFpbG5Nc2cudGV4dCgnKiplbWFpbE5vdENvbmZpcm1lZCoqIEVtYWlsINC90LUg0L/QvtC00YLQstC10YDQttC00LXQvS4nKS5jc3MoJ2NvbG9yJywgJ2xpZ2h0Y29yYWwnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25Mb2dpblN1YnNjcmliZShtc2csIGRhdGEpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKG1zZywgZGF0YSk7XHJcbiAgICAkKENPTlNULnVpU2VsZWN0b3JzLmhlYWRlck5hdkxvZ2luQnRuKS5hZGRDbGFzcyhjbG9zZUNsYXNzKS5yZW1vdmVDbGFzcyhvcGVuZWRDbGFzcyk7XHJcbiAgICAkKENPTlNULnVpU2VsZWN0b3JzLmhlYWRlclJlZ0J0bikuYWRkQ2xhc3MoY2xvc2VDbGFzcykucmVtb3ZlQ2xhc3Mob3BlbmVkQ2xhc3MpO1xyXG4gICAgJChDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJMb2dpbkJveCkuYWRkQ2xhc3MoY2xvc2VDbGFzcykucmVtb3ZlQ2xhc3Mob3BlbmVkQ2xhc3MpO1xyXG5cclxuICAgICQoJy5uYXYtbGluay5qc19sb2dPdXQnKS5hZGRDbGFzcyhvcGVuZWRDbGFzcykucmVtb3ZlQ2xhc3MoY2xvc2VDbGFzcyk7IC8vIHNob3dcclxuICAgIGNvbnN0ICRsb2dpbk1zZyA9ICQoc2VsZWN0b3JMb2dpblN0YXRlKTtcclxuICAgICRsb2dpbk1zZy50ZXh0KCcqKm9uTG9naW5TdWJzY3JpYmUqKiDQstGLINC30LDQu9C+0LPQuNC90LjQu9C40YHRjCDQsiBMdXhncmFtINGD0YHQv9C10YjQvdC+JykuY3NzKCdjb2xvcicsICdsaWdodGJsdWUnKTtcclxuICAgIGNvbnN0IGlzRW1haWxDb25maXJtZWQgPSBVc2VyLmlzRW1haWxDb25maXJtZWQoKTtcclxuICAgIGlmICghaXNFbWFpbENvbmZpcm1lZCkge1xyXG4gICAgICAgIGVtYWlsTm90Q29uZmlybWVkKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dMb2dvdXQoKSB7XHJcbiAgICAvLyBjaGVjayBpcyBsb2dnZWRcclxuICAgIGNvbnN0IGlzTG9nZ2VkID0gVXNlci5pc0xvZ2dlZEluKCk7XHJcbiAgICBjb25zdCBpc0VtYWlsQ29uZmlybWVkID0gVXNlci5pc0VtYWlsQ29uZmlybWVkKCk7XHJcbiAgICBpZiAoIWlzRW1haWxDb25maXJtZWQpIHtcclxuICAgICAgICBlbWFpbE5vdENvbmZpcm1lZCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzTG9nZ2VkKSB7XHJcbiAgICAgICAgJCgnLm5hdi1saW5rLmpzX2xvZ091dCcpLnBhcmVudCgpLnNob3coKTtcclxuICAgICAgICAkKCcuanNfZW1haWwtY29uZmlybS0tdGV4dCcpLnRleHQoJ9Cy0Ysg0LfQsNC70L7Qs9C40L3QuNC70LjRgdGMINGD0YHQv9C10YjQvdC+Jyk7XHJcbiAgICAgICAgY29uc3Qgb2xkVVJMID0gZG9jdW1lbnQucmVmZXJyZXI7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cob2xkVVJMKTtcclxuICAgICAgICBpZiAob2xkVVJMLmluY2x1ZGVzKCdjb25maXJtLXJlZ2lzdHJhdGlvbicpKSB7XHJcbiAgICAgICAgICAgICQoJy5qc19tZXNzYWdlX2xvZ2dlZC0tdGV4dCcpLnRleHQoJ9Cy0Ysg0L/QvtC00YLQstC10YDQtNC40LvQuCDRgNC10LPQuNGB0YLRgNCw0YbQuNGOJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9uTG9naW5TdWJzY3JpYmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChzZWxlY3RvckxvZ2luU3RhdGUpLnRleHQoJ9Cf0YDQuNCy0LXRgiDQsNC90L7QvdC40LzQvdGL0Lkg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMJyk7XHJcbiAgICAgICAgJChzZWxlY3RvckVtYWlsQ29uZmlybVN0YXRlKS5lbXB0eSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogSW5pdCBoZWFkZXJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0SGVhZGVyKCkge1xyXG4gICAvLyBjaGVjayBvdGhlciBoYW5kbGVyIGluIGxvZ2luLWZvcm0uanNcclxuICAgIGNvbnN0ICRsb2dpbkJveCA9ICQoQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyTG9naW5Cb3gpO1xyXG4gICAgY29uc3QgJHJlZ2lzdGVyQm94ID0gJChDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJSZWdCb3gpO1xyXG5cclxuICAgIFB1YlN1Yi5zdWJzY3JpYmUoQ09OU1QuZXZlbnRzLlVTRVJfTE9HR0VELCBvbkxvZ2luU3Vic2NyaWJlKTtcclxuXHJcbiAgICBzaG93TG9nb3V0KCk7XHJcblxyXG4gICAgJChDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJSZWdCdG4pLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAkbG9naW5Cb3guaGlkZSgpO1xyXG4gICAgICAgICRyZWdpc3RlckJveC5jc3Moeyd0b3AnOiAwLCAncmlnaHQnOiAwfSlcclxuICAgICAgICAgICAgLmFkZENsYXNzKCdiZy1saWdodCBib3JkZXIgbXQtNSBteC1hdXRvIHBvc2l0aW9uLWFic29sdXRlIHB4LTMgZC1ibG9jaycpXHJcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKENPTlNULnVpU2VsZWN0b3JzLmhlYWRlck5hdkxvZ2luQnRuKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgJGxvZ2luQm94LmFkZENsYXNzKCdkLWJsb2NrJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICRyZWdpc3RlckJveC5hZGRDbGFzcygnZC1ub25lJykucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKTtcclxuICAgIH0pO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3MvaGVhZGVyL2hlYWRlci5qcyIsIi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy91c2VyJztcclxuLy8gaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3NwaW5uZXInO1xyXG5pbXBvcnQgdmlld1V0aWxzIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy92aWV3JztcclxuLy8gaW1wb3J0IFB1YlN1YiBmcm9tICdwdWJzdWItanMnO1xyXG5pbXBvcnQge0NPTlNUfSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29uc3RzJztcclxuXHJcbi8vINCf0L7RgdC70LUg0LTQvtCx0LDQstC70LXQvdC40Y8g0LDQutC60LDRg9C90YLQsCDRgdC90L7QstCwINC00LXRgNC90YPRgtGMINCc0JXQotCQINC4INC/0LXRgNC10YDQuNGB0L7QstCw0YLRjCDRgdC/0LjRgdC+0Log0LDQutC60LDRg9C90YLQvtCyXHJcbmNvbnN0IGFkZEluc3RhZ3JhbUFjY291bnQgPSAobmV3Rm9ybURhdGEpID0+IHtcclxuICAgIGNvbnN0IGNiRXJyb3IgPSAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SJywgcmVzdWx0KTtcclxuICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKCQoJy5lcnJvci1tc2cnKSxcclxuICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5zdGF0ZSxcclxuICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5tZXNzYWdlIHx8ICdMb2dpbiBlcnJvcicpO1xyXG4gICAgICAgIC8vICQoX2xvZ2luQm94KS5hZGRDbGFzcyhjbG9zZUNsYXNzKS5yZW1vdmVDbGFzcyhvcGVuZWRDbGFzcyk7XHJcbiAgICB9O1xyXG5cclxuICAgIFVzZXIuYWRkSW5zdGFncmFtQWNjb3VudChuZXdGb3JtRGF0YSwgY2JFcnJvcikudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCwgcmVzdWx0LnN0YXR1cyk7XHJcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyO1xyXG4gICAgICAgICAgICBjb25zdCAkbXNnTGlzdCA9ICQoJy5hY2NvdW50cy1saXN0Jyk7XHJcbiAgICAgICAgICAgICRtc2dMaXN0LmVtcHR5KCk7XHJcbiAgICAgICAgICAgIC8vIHRvZG8gOiByZWxvYWQgbGlzdFxyXG4gICAgICAgICAgICAvLyBmaWxsTGlzdCgkbXNnTGlzdCwgcmVzdWx0LmRhdGEuYWNjb3VudHMpO1xyXG4gICAgICAgICAgICAvLyBhZGRMaXN0SGFuZGxlcigpO1xyXG5cclxuICAgICAgICAgICAgLy8gdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSgkdGV4dEFyZWFEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgLy8gICAgIHJlc3VsdC5zdGF0dXMuc3RhdGUsXHJcbiAgICAgICAgICAgIC8vICAgICByZXN1bHQuc3RhdHVzLm1lc3NhZ2UgfHwgJ0xvZ2luIGVycm9yJyk7XHJcbiAgICAgICAgICAgIC8vICQoX2xvZ2luQm94KS5hZGRDbGFzcyhjbG9zZUNsYXNzKS5yZW1vdmVDbGFzcyhvcGVuZWRDbGFzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIC8vIHRvZG86IHJlbmRlciBmb3IgdXNlclxyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnc3VibWl0JywgbmV3Rm9ybURhdGEpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gYWRkT25Mb2FkSGFuZGxlcnMoKSB7XHJcbiAgICAvLyAkKCcuanNfcmVwZWF0LXNlY3VyaXR5LWNvZGUnKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG5cclxuICAgIC8vIH0pO1xyXG5cclxuICAgICQoJy5qc19hZGQtaW5zdGFncmFtLWFjY291bnQnKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJ0biA9ICQoZS50YXJnZXQpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RhbEJvZHkgPSBidG4uY2xvc2VzdCgnLm1vZGFsJykuZmluZCgnLm1vZGFsLWRpYWxvZyAubW9kYWwtYm9keScpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gJG1vZGFsQm9keS5maW5kKCdpbnB1dFtuYW1lPVwidXNlcm5hbWVcIl0nKS52YWwoKS50cmltKCk7XHJcbiAgICAgICAgY29uc3QgcGFzc3dvcmQgPSAkbW9kYWxCb2R5LmZpbmQoJ2lucHV0W25hbWU9XCJwYXNzXCJdJykudmFsKCkudHJpbSgpO1xyXG4gICAgICAgIGNvbnN0ICRmb3JtID0gJCgnZm9ybScsICRtb2RhbEJvZHkpO1xyXG4gICAgICAgIGNvbnN0IGZvcm0gPSAkZm9ybS5nZXQoMCk7XHJcbiAgICAgICAgY29uc3QgY3NzVmFsaWRhdGlvbkNsYXNzID0gJ2Zvcm0tdmFsaWRhdGlvbic7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgLy8gY29uc3QgdmFsaWRhdG9yID0gbmV3IFZhbGlkYXRvcigkZm9ybSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codmFsaWRhdG9yLnZhbGlkYXRlKCkpO1xyXG4gICAgICAgIGlmIChmb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICAgICAgICBhZGRJbnN0YWdyYW1BY2NvdW50KHt1c2VybmFtZSwgcGFzc3dvcmR9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBIaWdobGlnaHQgZXJyb3JzXHJcbiAgICAgICAgICAgIGlmIChmb3JtLnJlcG9ydFZhbGlkaXR5KSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtLnJlcG9ydFZhbGlkaXR5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJGZvcm0uYWRkQ2xhc3MoY3NzVmFsaWRhdGlvbkNsYXNzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdXNlcm5hbWUgfHwgIXBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdub3QgdmFsaWQgLSBFbXB0eSBmaWVsZHMnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRMaXN0SGFuZGxlcigvKiB1c2VybmFtZSovKSB7XHJcbiAgICAvLyAkKCcjeW91ck1vZGFsSUQnKS5vbignc2hvdy5icy5tb2RhbCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgIC8vICAgICB2YXIgeW91cnBhcmFtZXRlciA9IGUucmVsYXRlZFRhcmdldC5kYXRhc2V0LnlvdXJwYXJhbWV0ZXI7XHJcbiAgICAvLyAgICAgLy8gRG8gc29tZSBzdHVmZiB3LyBpdC5cclxuICAgIC8vIH0pO1xyXG4gICAgbGV0IGNoZWNrcG9pbnRUeXBlID0gJyc7XHJcblxyXG4gICAgJCgnLmpzX3Bhc3MtY2hlY2twb2ludC1idG4nKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0ICRidXR0b24gPSAkKGUudGFyZ2V0KTtcclxuICAgICAgICBjb25zdCB1c2VybmFtZSA9ICRidXR0b24uZGF0YSgndXNlcm5hbWUnKTtcclxuICAgICAgICBjaGVja3BvaW50VHlwZSA9ICRidXR0b24uZGF0YSgnY2hlY2twb2ludFR5cGUnKSB8fCBjaGVja3BvaW50VHlwZTtcclxuICAgICAgICAvLyAkKCcjc2VjdXJpdHktY29kZScpLmRhdGEoJ2NoZWNrcG9pbnRUeXBlJywgY2hlY2twb2ludFR5cGUpO1xyXG4gICAgICAgIC8vIHRvZG8gYWRkICdjaGVja3BvaW50VHlwZScgdG8gbW9kYWxcclxuICAgICAgICBjb25zdCBzZW5kVG8gPSAoY2hlY2twb2ludFR5cGUgPT09ICdQSE9ORScpID8gJ9GC0LXQu9C10YTQvtC9JyA6ICdlbWFpbCc7XHJcbiAgICAgICAgLy8gU3Bpbm5lci5zdGFydCgkYnV0dG9uLCAnZmEta2V5Jyk7XHJcblxyXG4gICAgICAgIGlmIChjaGVja3BvaW50VHlwZSA9PT0gJ0VNQUlMX09SX1BIT05FJykge1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgLy8g0LjQvdC/0YPRgtGLINGB0L/RgNGP0YLQsNC90YssXHJcbiAgICAgICAgICAgIC8vINC/0L7QutCw0LfQsNGC0Ywg0YHQtdGA0YvQtSDQv9C10YDQtdC60LvRjtGH0LDRgtC10LvQuCAo0LLRi9Cx0YDQsNC7INGC0LjQvylcclxuICAgICAgICAgICAgLy8g0LXRgdGC0Ywg0LrQvdC+0L/QutCwINCX0LDQv9GA0L7RgdC40YLRjCDQutC+0LQg0L/QvtC00YLQstC10YDQttC00LXQvdC40LVcclxuICAgICAgICAgICAgJCgnI3NlY3VyaXR5LWNvZGUtcGhvbmVPcmVtYWlsJykubW9kYWwoe3Nob3c6IHRydWUsIHVzZXJuYW1lfSk7XHJcblxyXG4gICAgICAgICAgICAvLyDQvdC1INC+0YLQv9GA0LDQstC70Y/QtdC8INGA0LXQutCy0LXRgdGCXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFVzZXIuZ2V0U2VjdXJpdHlLZXkodXNlcm5hbWUsIGNoZWNrcG9pbnRUeXBlKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlY3VyaXR5S2V5IHJlY2VpdmVkOicsIHJlc3VsdC5zdGF0dXMuc3RhdGUpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cy5zdGF0ZSA9PT0gJ29rJykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJG1vZGFsID0gJCgnI3NlY3VyaXR5LWNvZGUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTcGlubmVyLnN0b3AoJGJ1dHRvbiwgJ2ZhLWtleScpO1xyXG4gICAgICAgICAgICAgICAgJCgnLmpzX3N1Y2Nlc3MtZmVlZGJhY2snLCAkbW9kYWwpLmVtcHR5KCkudGV4dChg0JrQu9GO0Ycg0L/QvtC00YLQstC10YDQttC00LXQvdC40Y8g0LHRi9C7INC+0YLQv9GA0LDQstC70LXQvSDQktCw0Lwg0L3QsCAke3NlbmRUb31gKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKCcjc2VjdXJpdHktY29kZScpLmF0dHIoJ2RhdGEtdXNlcm5hbWUnLCB1c2VybmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGluc2lkZSBtb2RhbFxyXG4gICAgJCgnLmpzX2NvbmZpcm0tc2VjdXJpdHktY29kZScpLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYnRuID0gJChlLnRhcmdldCk7XHJcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSBidG4uY2xvc2VzdCgnI3NlY3VyaXR5LWNvZGUnKS5kYXRhKCd1c2VybmFtZScpO1xyXG4gICAgICAgIGNvbnN0ICRrZXlJbnB1dCA9IGJ0bi5jbG9zZXN0KCcubW9kYWwnKS5maW5kKCcubW9kYWwtZGlhbG9nIGZvcm0gaW5wdXQuanNfY29uZmlybS1rZXknKTtcclxuICAgICAgICBjb25zdCBrZXkgPSAka2V5SW5wdXQudmFsKCkudHJpbSgpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RhbCA9IGJ0bi5jbG9zZXN0KCcubW9kYWwnKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICBpZiAoa2V5Lmxlbmd0aCAhPT0gNikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFVzZXIuY29uZmlybVNlY3VyaXR5S2V5KGtleSwgdXNlcm5hbWUpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cy5zdGF0ZSAhPT0gJ29rJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdqc19jb25maXJtOicsIHJlc3VsdC5zdGF0dXMuc3RhdGUsICdjbG9zZSBtb2RhbCcpO1xyXG4gICAgICAgICAgICAkbW9kYWwubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnInKTtcclxuICAgICAgICAgICAgJCgnLmpzX3N1Y2Nlc3MtZmVlZGJhY2snLCAkbW9kYWwpLnRleHQoJ9CX0LDQv9GA0L7RgSDQvdC1INC+0YLQv9GA0LDQstC70LXQvScpLmNzcygnY29sb3InLCAncmVkJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCdmb3JtIGlucHV0W21pbmxlbmd0aF0nKS5vbignYmx1cicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBsZW4gPSAkKHRoaXMpLnZhbCgpLnRyaW0oKS5sZW5ndGg7XHJcbiAgICAgICAgY29uc3QgbWluTGVuID0gTnVtYmVyKCQodGhpcykuYXR0cignbWlubGVuZ3RoJykpO1xyXG4gICAgICAgIC8vIGNvbnN0IG1lc3NhZ2UgPSBtaW5MZW4gPD0gbGVuID8gJycgOiBtaW5MZW4gKyAnIGNoYXJhY3RlcnMgbWluaW11bSc7XHJcbiAgICAgICAgaWYgKG1pbkxlbiAhPT0gbGVuKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuY3NzKCdib3JkZXJDb2xvcicsICdyZWQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNzcygnYm9yZGVyQ29sb3InLCAnI2NlZDRkYScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLnNldEN1c3RvbVZhbGlkaXR5KG1lc3NhZ2UpXHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBvbkhpZGVNb2RhbChlKSB7XHJcbiAgICAgICAgY29uc3QgJG1vZGFsID0gJChlLnRhcmdldCk7XHJcbiAgICAgICAgJG1vZGFsLmZpbmQoJy5maXJzdC1zdGVwJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICRtb2RhbC5maW5kKCcuc2Vjb25kLXN0ZXAnKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgJCgnLmpzX2NvbmZpcm0ta2V5JykudmFsKCcnKTtcclxuICAgICAgICAkKCcuanNfc3VjY2Vzcy1mZWVkYmFjaycsICRtb2RhbCkucmVtb3ZlQXR0cignc3R5bGUnKS5lbXB0eSgpO1xyXG4gICAgfVxyXG4gICAgJCgnI3NlY3VyaXR5LWNvZGUtcGhvbmVPcmVtYWlsJykub24oJ2hpZGUuYnMubW9kYWwnLCBvbkhpZGVNb2RhbCk7XHJcbiAgICAkKCcjc2VjdXJpdHktY29kZScpLm9uKCdoaWRlLmJzLm1vZGFsJywgb25IaWRlTW9kYWwpO1xyXG5cclxuICAgIC8vIFwiUEhPTkVfT1JfRU1BSUxcIiBtb2RhbFxyXG4gICAgJCgnLmpzX2dldC1zZWN1cml0eS1jb2RlLXBob25lT3JlbWFpbCcpLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgJG1vZGFsID0gJCgnI3NlY3VyaXR5LWNvZGUtcGhvbmVPcmVtYWlsJyk7XHJcbiAgICAgICAgY29uc3QgdHlwZVNlbGVjdGVkID0gJChlLnRhcmdldCkuY2xvc2VzdCgkbW9kYWwpLmZpbmQoJy5qc19idG4tdHlwZS1zd2l0Y2hlciBpbnB1dDpjaGVja2VkJyk7XHJcbiAgICAgICAgY29uc3QgY2hlY2twb2ludFR5cGVBY3RpdmUgPSB0eXBlU2VsZWN0ZWQudmFsKCk7XHJcbiAgICAgICAgY29uc3Qgc2VuZFRvID0gKGNoZWNrcG9pbnRUeXBlQWN0aXZlID09PSAnUEhPTkUnKSA/ICfRgtC10LvQtdGE0L7QvScgOiAnZW1haWwnO1xyXG4gICAgICAgIGNvbnN0IG1vZGFsQ29uZmlnID0gJG1vZGFsLmRhdGEoKVsnYnMubW9kYWwnXS5fY29uZmlnO1xyXG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gbW9kYWxDb25maWcudXNlcm5hbWU7XHJcbiAgICAgICAgVXNlci5nZXRTZWN1cml0eUtleSh1c2VybmFtZSwgY2hlY2twb2ludFR5cGVBY3RpdmUpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAvLyDQv9GA0Lgg0L3QsNC20LDRgtC40LggXCLQl9Cw0L/RgNC+0YHQuNGC0Ywg0LrQvtC0INC/0L7QtNGC0LLQtdGA0LbQtNC10L3QuNC1XCIgLSDQvtGC0L/QsNGA0LvRj9C10YLRgdGPINGA0LXQutCy0LXRgdGCIFwi0YHRgtCw0YDRgiDRh9C10LrQv9C+0LjQvdGCXCIg0L/QvtGP0LLQu9GP0LXRgtGM0YHRjyDQuNC90L/Rg9GCINC4INC60L3QvtC/0LrQsCDQtNGA0YPQs9C40YUg0YLQuNC/0LDRhVxyXG4gICAgICAgICAgICAvLyBnZXQgc2VsZWN0ZWQgYnV0dG9uXHJcblxyXG4gICAgICAgICAgICAvLyDQv9C10YDQtdC60LvRjtGH0LDRgtC10LvRjCjRgdC10YDRi9C5KSDQuCDQutC90L7Qv9C60LAgXCLQl9Cw0L/RgNC+0YHQuNGC0Ywg0LrQvtC0INC/0L7QtNGC0LLQtdGA0LbQtNC10L3QuNC1XCIg0LjRgdGH0LXQt9Cw0Y7RglxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2VjdXJpdHlLZXkgcmVjZWl2ZWQ6JywgcmVzdWx0LnN0YXR1cy5zdGF0ZSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzLnN0YXRlID09PSAnb2snKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuZmlyc3Qtc3RlcCcsICRtb2RhbCkuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgJCgnLnNlY29uZC1zdGVwJywgJG1vZGFsKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcuanNfc3VjY2Vzcy1mZWVkYmFjaycsICRtb2RhbCkuZW1wdHkoKS50ZXh0KGDQmtC70Y7RhyDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjRjyDQsdGL0Lsg0L7RgtC/0YDQsNCy0LvQtdC9INCS0LDQvCDQvdCwICR7c2VuZFRvfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsbExpc3QoJGxpc3QsIGRhdGFBcnJheSkge1xyXG4gICAgY29uc3QgaXRlbXMgPSBkYXRhQXJyYXk7XHJcbiAgICBjb25zdCBjTGlzdCA9ICRsaXN0O1xyXG4gICAgY29uc3QgZGVmYXVsdEF2YXRhclNyYyA9ICdodHRwczovL2kuaW1ndXIuY29tL2pOTlQ0TEUucG5nJztcclxuICAgIGNvbnN0IGluc2VydEl0ZW0gPSAoZGF0YSwgdGV4dCwgY3NzQ2xzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGlUcGwgPSBgJHsoZGF0YSlcclxuICAgICAgICAgICAgPyBgPGxpIGNsYXNzPVwibGlzdC1pbmxpbmUtaXRlbSAke2Nzc0Nsc31cIj48c3BhbiBjbGFzcz1cImZpZ3VyZVwiPiR7ZGF0YX08L3NwYW4+PHNwYW4+JHt0ZXh0fTwvc3Bhbj48L2xpPmBcclxuICAgICAgICAgICAgOiBgPGxpIGNsYXNzPVwibGlzdC1pbmxpbmUtaXRlbSAke2Nzc0Nsc31cIj48c3BhbiBjbGFzcz1cImZpZ3VyZVwiPjA8L3NwYW4+PHNwYW4+JHt0ZXh0fTwvc3Bhbj48L2xpPmB9YDtcclxuICAgICAgICByZXR1cm4gbGlUcGw7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc3RhdHMgPSAoaW5mbykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRwbCA9IGA8ZGl2IGNsYXNzPVwiY29sXCI+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3QtaW5saW5lIHRleHQtY2VudGVyIGNvdW50cy1saXN0XCI+XHJcbiAgICAgICAgICAgICR7KGluZm8pXHJcbiAgICAgICAgICAgICAgPyBgJHtpbnNlcnRJdGVtKGluZm9bJ21lZGlhX2NvdW50J10sICfQn9GD0LHQu9C40LrQsNGG0LjQuCcsICdtZWRpYS1jb3VudCcpfVxyXG4gICAgICAgICAgICAgICAgJHtpbnNlcnRJdGVtKGluZm9bJ2ZvbGxvd2VyX2NvdW50J10sICfQn9C+0LTQv9C40YHRh9C40LrQuCcsICdmb2xsb3dlci1jb3VudCcpfVxyXG4gICAgICAgICAgICAgICAgJHtpbnNlcnRJdGVtKGluZm9bJ2ZvbGxvd2luZ19jb3VudCddLCAn0J/QvtC00L/QuNGB0LrQuCcsICdmb2xsb3dpbmctY291bnQnKX1gXHJcbiAgICAgICAgICAgICAgOiBgJHtpbnNlcnRJdGVtKGZhbHNlLCAn0J/Rg9Cx0LvQuNC60LDRhtC40LgnLCAnbWVkaWEtY291bnQnKX1cclxuICAgICAgICAgICAgICAgICR7aW5zZXJ0SXRlbShmYWxzZSwgJ9Cf0L7QtNC/0LjRgdGH0LjQutC4JywgJ2ZvbGxvd2VyLWNvdW50Jyl9XHJcbiAgICAgICAgICAgICAgICAke2luc2VydEl0ZW0oZmFsc2UsICfQn9C+0LTQv9C40YHQutC4JywgJ2ZvbGxvd2luZy1jb3VudCcpfWBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PmA7XHJcbiAgICAgICAgcmV0dXJuIHRwbDtcclxuICAgIH07XHJcbiAgICBjTGlzdC5lbXB0eSgpLmFkZENsYXNzKCdib3JkZXItbGlnaHQtY29sb3InKTtcclxuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCBpbmZvID0gaXRlbS5pbmZvO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrcG9pbnQgPSBpdGVtLmNoZWNrcG9pbnQgfHwgaXRlbTtcclxuXHJcbiAgICAgICAgaWYgKCFpbmZvKSB7XHJcbiAgICAgICAgICAgICQoYDxsaSBjbGFzcz1cIm1lZGlhIHB5LTNcIiBkYXRhLXVzZXJuYW1lPVwiJHtpdGVtLnVzZXJuYW1lfVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cIm1sLTMgcm91bmRlZFwiIGFsdD1cImRlZmF1bHQgYXZhdGFyXCIgc3JjPVwiJHtkZWZhdWx0QXZhdGFyU3JjfVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWJvZHkgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB1c2VyLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHsoaXRlbS51c2VybmFtZSkgPyBgPGg0IGNsYXNzPVwibXQtMCBtYi0xIG5hbWVcIj4ke2l0ZW0udXNlcm5hbWV9PC9oND5gIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB1c2VyLWNoZWNrcG9pbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHsoY2hlY2twb2ludC5zdGF0dXMgPT09ICdUUklHR0VSRUQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBqc19wYXNzLWNoZWNrcG9pbnQtYnRuIGQtYmxvY2sgbXgtYXV0b1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jaGVja3BvaW50LXR5cGU9XCIke2NoZWNrcG9pbnQudHlwZSB8fCAnRU1BSUwnfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXVzZXJuYW1lPVwiJHtpdGVtLnVzZXJuYW1lIHx8ICcnfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjc2VjdXJpdHktY29kZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEta2V5XCI+PC9pPtCf0YDQvtC50YLQuCDRh9C10LrQv9C+0LjQvdGCPC9idXR0b24+YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGAodG9kbyljaGVja3BvaW50IHN0YXR1cyAtICR7Y2hlY2twb2ludC5zdGF0dXN9YH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAke3N0YXRzKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5gKS5hcHBlbmRUbyhjTGlzdCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChgPGxpIGNsYXNzPVwibWVkaWEgcHktM1wiIGRhdGEtdXNlcm5hbWU9XCIke2l0ZW0udXNlcm5hbWV9XCI+XHJcbiAgICAgICAgICAgICR7KGluZm9bJ3Byb2ZpbGVfcGljX3VybCddKVxyXG4gICAgICAgICAgICAgICAgPyBgPGltZyBjbGFzcz1cIm1sLTMgcm91bmRlZFwiIGFsdD1cIlVzZXIgcGhvdG9cIiBzcmM9XCIke2luZm9bJ3Byb2ZpbGVfcGljX3VybCddfVwiPmBcclxuICAgICAgICAgICAgICAgIDogYDxpbWcgY2xhc3M9XCJtbC0zIHJvdW5kZWRcIiBhbHQ9XCJkZWZhdWx0IGF2YXRhclwiIHNyYz1cIiR7ZGVmYXVsdEF2YXRhclNyY31cIj5gfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEtYm9keSBkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgdXNlci1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHsoaXRlbS51c2VybmFtZSkgPyBgPHAgY2xhc3M9XCJtdC0wIG1iLTEgbmFtZSBsZWFkXCI+JHtpdGVtLnVzZXJuYW1lfTwvcD5gIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgJHsoaW5mby5uYW1lKSA/IGA8aDQgY2xhc3M9XCJtdC0wIG1iLTFcIj4ke2luZm8ubmFtZX08L2g0PmAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAkeyhpbmZvLm5hbWUpID8gJycgOiAnJyAgLyogJHsoaW5mby5lbWFpbCkgPyBgPHAgY2xhc3M9XCJtdC0wIG1iLTFcIj4ke2luZm8uZW1haWx9PC9wPmAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgJHsoaW5mby5waG9uZSkgPyBgPHAgY2xhc3M9XCJtdC0wIG1iLTFcIj4ke2luZm8ucGhvbmV9PC9wPmAgOiAnJ30gKi8gfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHVzZXItY2hlY2twb2ludFwiPiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICR7KGNoZWNrcG9pbnQuc3RhdHVzID09PSAnVFJJR0dFUkVEJylcclxuICAgICAgICAgICAgICAgICAgICA/IGA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBqc19wYXNzLWNoZWNrcG9pbnQtYnRuIGQtYmxvY2sgbXgtYXV0b1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jaGVja3BvaW50LXR5cGU9XCIke2NoZWNrcG9pbnQudHlwZSB8fCAnRU1BSUwnfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXVzZXJuYW1lPVwiJHtpdGVtLnVzZXJuYW1lIHx8ICcnfVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI3NlY3VyaXR5LWNvZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEta2V5XCI+PC9pPtCf0YDQvtC50YLQuCDRh9C10LrQv9C+0LjQvdGCPC9idXR0b24+YFxyXG4gICAgICAgICAgICAgICAgICAgIDogJyd9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICR7c3RhdHMoaW5mbyl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbGk+YCkuYXBwZW5kVG8oY0xpc3QpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgd2luZG93LlB1YlN1Yi5wdWJsaXNoKENPTlNULmV2ZW50cy5pbnN0YWdyYW1BY2NvdW5zLklOU1RBR1JBTV9BQ0NPVU5TX1JFTkRFUkVEKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEluaXQgaGVhZGVyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIGNvbnN0ICRtc2dMaXN0ID0gJCgnLmFjY291bnRzLWxpc3QnKTtcclxuICAgIC8vIGNoZWNrIHdlIGFyZSBpbiBwcm9maWxlIHBhZ2VcclxuICAgIGlmICghJG1zZ0xpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdG9rZW4gPSBVc2VyLmdldFRva2VuKCk7IC8vIHVwZCB0bzogVXNlci5nZXRUb2tlbigpXHJcbiAgICBjb25zdCBtZXRhZGF0YSA9IFVzZXIuZ2V0TWV0YWRhdGEodG9rZW4pO1xyXG4gICAgY29uc3QgcmVzZW5kUmVxdWVzdCA9ICgpID0+IFVzZXIuZ2V0TWV0YWRhdGEodG9rZW4pO1xyXG4gICAgbGV0IGlzU2VuZFJlcU9uY2UgPSBmYWxzZTtcclxuICAgIGNvbnN0IGNoZWNrUmVzcG9uc2UgPSAocmVzdWx0LCBpc1Jlc2VuZFJlcXVlc3QpID0+IHtcclxuICAgICAgICBpZiAoIXJlc3VsdC5zdGF0dXMuc3RhdGUgPT09ICdvaycgfHwgIXJlc3VsdC5kYXRhIHx8ICEkbXNnTGlzdC5sZW5ndGggfHwgaXNSZXNlbmRSZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgIC8vINC/0YDQvtCy0LXRgNGP0Lwg0L7QtNC40L0g0YDQsNC3INC90LDQu9C40YfQuNC1IHJlc3VsdC5kYXRhLmFjY291bnRzLmluZm9cclxuICAgICAgICAgICAgJG1zZ0xpc3QuZW1wdHkoKTtcclxuICAgICAgICAgICAgJChgPGxpIGNsYXNzPVwibWVkaWFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwibXQtMCBtYi0zXCI+0J3QuCDQvtC00L3QvtCz0L4g0JDQutC60LDRg9C90YLQsCDQvdC1INC00L7QsdCw0LLQu9C10L3QvjwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5gKS5hcHBlbmRUbygkbXNnTGlzdCk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzZW5kUmVxdWVzdCgpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrUmVzcG9uc2UocmVzdWx0LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXF1ZXN0IHJlc2VuZCcpO1xyXG4gICAgICAgICAgICB9LCAzNTAwKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDQstGL0LLQvtC0INGA0LXQt9GD0LvRjNGC0LDRgtC+0LIgKGRhdGEuYWNjb3VudHMuaW5mbylcclxuICAgICAgICAkKCcucHJvZmlsZS11c2VyIC5zcGlubmVyLWJveCcpLmFkZENsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICBmaWxsTGlzdCgkbXNnTGlzdCwgcmVzdWx0LmRhdGEuYWNjb3VudHMpO1xyXG4gICAgICAgIGFkZExpc3RIYW5kbGVyKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGNoZWNrIHdlIGFyZSBpbiBwcm9maWxlIHBhZ2VcclxuICAgIGlmICghJG1zZ0xpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZE9uTG9hZEhhbmRsZXJzKCk7XHJcblxyXG4gICAgLy8g0LzQvtC20LXRgiDQuNC90YTQviDQvtGC0YHRg9GC0YHQstC+0LLQsNGC0YwgLSDRgdC00LXQu9Cw0YLRjCDQtdGJ0LUg0YDQsNC3INC30LDQv9GA0L7RgSDRh9C10YDQtdC3IDMg0YHQtdC6LlxyXG5cclxuICAgIG1ldGFkYXRhLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIC8vINC/0YDQvtCy0LXRgNGP0Lwg0L7QtNC40L0g0YDQsNC3INC90LDQu9C40YfQuNC1IHJlc3VsdC5kYXRhLmFjY291bnRzLmluZm9cclxuICAgICAgICBsZXQgaXNSZXNlbmRSZXF1ZXN0ID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5kYXRhICYmIHJlc3VsdC5kYXRhLmFjY291bnRzICYmICFpc1NlbmRSZXFPbmNlKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5kYXRhLmFjY291bnRzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghaXRlbS5pbmZvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNSZXNlbmRSZXF1ZXN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpc1NlbmRSZXFPbmNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjaGVja1Jlc3BvbnNlKHJlc3VsdCwgaXNSZXNlbmRSZXF1ZXN0KTtcclxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSgkKCcuZXJyb3ItbXNnJyksXHJcbiAgICAgICAgICAgICAgICBlcnIuc3RhdHVzIHx8ICcnLFxyXG4gICAgICAgICAgICAgICAgJ9Cd0LUg0L/QvtC70YPRh9C40LvQvtGB0Ywg0LfQsNCz0YDRg9C30LjRgtGMINC00L7RgdGC0YPQv9C90YvQtSBJbnN0YWdyYW0g0LDQutC60LDRg9C90YLRiycpO1xyXG4gICAgICAgIH0sIDMwMDApO1xyXG4gICAgICAgICQoJy5zcGlubmVyLWJveCcpLmFkZENsYXNzKCdkLW5vbmUnKTtcclxuICAgIH0pO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3MvaW5zdGFncmFtLWFjY291bnRzLWxpc3QvaW5zdGFncmFtLWFjY291bnRzLWxpc3QuanMiLCIvKiBlc2xpbnQtZGlzYWJsZSBzb3J0LXZhcnMgKi9cclxuLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3VzZXInO1xyXG5pbXBvcnQgUHViU3ViIGZyb20gJ3B1YnN1Yi1qcyc7IC8vIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3B1YnN1Yi1qc1xyXG5pbXBvcnQgY29va2llU3RvcmFnZSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29va2llJztcclxuLy8gaW1wb3J0IFZhbGlkYXRvciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvZm9ybS12YWxpZGF0b3InO1xyXG5pbXBvcnQgdmlld1V0aWxzIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy92aWV3JztcclxuaW1wb3J0IHtDT05TVH0gZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2NvbnN0cyc7XHJcblxyXG4vLyB3aW5kb3cuJCA9ICQ7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTG9naW5Gb3JtKHNlbGVjdG9yQ3NzKSB7XHJcbiAgICBjb25zdCB7X2Zvcm1JZCwgX2J1dHRvblN1Ym1pdElkLCBfc2hvd0xvZ2luQm94QnRuSWQsIF9sb2dpbkJveH0gPSBzZWxlY3RvckNzcztcclxuICAgIGNvbnN0IHVzZXIgPSBVc2VyLCAvLyBzZXJ2aWNlXHJcbiAgICAgICAgJGZvcm0gPSAkKF9mb3JtSWQpLFxyXG4gICAgICAgICRlbWFpbCA9ICRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJtYWlsXCJdJyksXHJcbiAgICAgICAgJHRleHRBcmVhRGVzY3JpcHRpb24gPSAkKCcjZGVzY3JpcHRpb24nKTtcclxuICAgIC8vIGNvbnN0IG9wZW5lZENsYXNzID0gJ2QtYmxvY2snO1xyXG4gICAgLy8gY29uc3QgY2xvc2VDbGFzcyA9ICdkLW5vbmUnO1xyXG5cclxuICAgIGNvbnN0IHVzZXJMb2dpbkhlYWRlciA9IChfZm9ybURhdGEpID0+IHtcclxuICAgICAgICBjb25zdCBjYkVycm9yID0gKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAkKF9sb2dpbkJveCkuYXBwZW5kKCc8cD5yZXN1bHQuc3RhdHVzLm1lc3NhZ2U8L3A+Jyk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHVzZXIubG9naW4oX2Zvcm1EYXRhLCBjYkVycm9yKVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5kYXRhICYmIHJlc3VsdC5kYXRhLnRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2F2ZSB0aGUgaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGNvb2tpZVN0b3JhZ2Uuc2V0KENPTlNULmNvb2tpZVN0b3JhZ2UudG9rZW4sIHJlc3VsdC5kYXRhLnRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcubmF2LWxpbmsuanNfbG9nT3V0JykucGFyZW50KCkuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXF1ZXN0IHN1Y2NlZWRlZCB3aXRoIEpTT04gcmVzcG9uc2UnLCByZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UoJHRleHRBcmVhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMubWVzc2FnZSB8fCAnTG9naW4gc3VjY3Nlc3MnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LnN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSh0aGlzLiR0ZXh0QXJlYURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgPHA+c3RhdHVzOiAke3Jlc3VsdC5zdGF0dXMuc3RhdGV9PC9wPjxwPiBtZXNzYWdlOiAke3Jlc3VsdC5zdGF0dXMubWVzc2FnZX08L3A+YCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKCR0ZXh0QXJlYURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLm1lc3NhZ2UgfHwgJ0xvZ2luIGVycm9yJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzdWJtaXRGb3JtID0gZnVuY3Rpb24oZm9ybURhdGFPYmopIHtcclxuICAgICAgICBjb25zdCBlbWFpbCA9ICRlbWFpbC52YWwoKSxcclxuICAgICAgICAgICAgcGFzc3dvcmQgPSAkZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwicGFzc1wiXScpLnZhbCgpLFxyXG4gICAgICAgICAgICBfZm9ybURhdGEgPSBmb3JtRGF0YU9iaiB8fCB7ZW1haWwsIHBhc3N3b3JkfTtcclxuXHJcbiAgICAgICAgaWYgKHNlbGVjdG9yQ3NzLmlzTG9naW5JbnN0YWdyYW0pIHtcclxuICAgICAgICAgICAgLy8gdG9kbzogZGVsZXRlIG1lXHJcbiAgICAgICAgICAgIC8vIGFkZEluc3RhZ3JhbUFjY291bnQoe3VzZXJuYW1lOiAkZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwidXNlcm5hbWVcIl0nKS52YWwoKSwgcGFzc3dvcmR9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkZW1haWwudmFsKCRlbWFpbC52YWwoKS50b0xvY2FsZUxvd2VyQ2FzZSgpKTtcclxuICAgICAgICAgICAgdXNlckxvZ2luSGVhZGVyKF9mb3JtRGF0YSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBQdWJTdWIucHVibGlzaChDT05TVC5ldmVudHMuVVNFUl9MT0dHRUQsICdsb2dpbicpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGxvZ091dCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvb2tpZVN0b3JhZ2UucmVtb3ZlKENPTlNULmNvb2tpZVN0b3JhZ2UudG9rZW4pO1xyXG4gICAgICAgIFB1YlN1Yi5wdWJsaXNoKENPTlNULmV2ZW50cy5VU0VSX0xPR09VVCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGJpbmRFdmVudHMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCAkc2hvd0xvZ2luQm94QnRuSWQgPSAkKF9zaG93TG9naW5Cb3hCdG5JZCk7XHJcbiAgICAgICAgY29uc3QgJGxvZ2luQm94ID0gJChfbG9naW5Cb3gpO1xyXG4gICAgICAgIGNvbnN0IG9wZW5lZENsYXNzID0gJ2QtYmxvY2snO1xyXG4gICAgICAgIGNvbnN0IGNsb3NlQ2xhc3MgPSAnZC1ub25lJztcclxuXHJcbiAgICAgICAgJHNob3dMb2dpbkJveEJ0bklkLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzZWxlY3RvckNzcy5pc0xvZ2luSW5zdGFncmFtKSB7XHJcbiAgICAgICAgICAgICAgICAkbG9naW5Cb3guY3NzKHsndG9wJzogMCwgJ3JpZ2h0JzogMH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdiZy1saWdodCBib3JkZXIgbXQtNSBteC1hdXRvIHBvc2l0aW9uLWFic29sdXRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJGxvZ2luQm94LmFkZENsYXNzKG9wZW5lZENsYXNzKS5yZW1vdmVDbGFzcyhjbG9zZUNsYXNzKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgJGJ1dHRvblN1Ym1pdCA9ICQoX2J1dHRvblN1Ym1pdElkKSxcclxuICAgICAgICAgICAgY3NzVmFsaWRhdGlvbkNsYXNzID0gJ2Zvcm0tdmFsaWRhdGlvbic7XHJcblxyXG4gICAgICAgICRidXR0b25TdWJtaXQub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zdCBmb3JtID0gJGZvcm0uZ2V0KDApO1xyXG4gICAgICAgICAgICAvLyBjb25zdCB2YWxpZGF0b3IgPSBuZXcgVmFsaWRhdG9yKCRmb3JtKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codmFsaWRhdG9yLnZhbGlkYXRlKCkpO1xyXG4gICAgICAgICAgICBpZiAoZm9ybS5jaGVja1ZhbGlkaXR5KCkgJiYgdmlld1V0aWxzLmlzRW1haWwoJGVtYWlsLnZhbCgpKSkge1xyXG4gICAgICAgICAgICAgICAgc3VibWl0Rm9ybSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gSGlnaGxpZ2h0IGVycm9yc1xyXG4gICAgICAgICAgICAgICAgaWYgKGZvcm0ucmVwb3J0VmFsaWRpdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtLnJlcG9ydFZhbGlkaXR5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAkZm9ybS5hZGRDbGFzcyhjc3NWYWxpZGF0aW9uQ2xhc3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5uYXYtbGluay5qc19sb2dPdXQnKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGxvZ091dCgpO1xyXG4gICAgICAgICAgICAkKGUudGFyZ2V0KS5wYXJlbnQoKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UoJHRleHRBcmVhRGVzY3JpcHRpb24sICdMb2dnZWQgb3V0Jyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFB1YlN1Yi5zdWJzY3JpYmUoQ09OU1QuZXZlbnRzLlVTRVJfTE9HT1VULCAobXNnKSA9PiB7XHJcbiAgICAgICAgICAgICQoQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyTmF2TG9naW5CdG4pLmFkZENsYXNzKG9wZW5lZENsYXNzKS5yZW1vdmVDbGFzcyhjbG9zZUNsYXNzKTsgLy8gLnNob3coKTtcclxuICAgICAgICAgICAgJChDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJSZWdCdG4pLmFkZENsYXNzKG9wZW5lZENsYXNzKS5yZW1vdmVDbGFzcyhjbG9zZUNsYXNzKTtcclxuICAgICAgICAgICAgJCgnLm5hdi1saW5rLmpzX2xvZ091dCcpLmFkZENsYXNzKGNsb3NlQ2xhc3MpLnJlbW92ZUNsYXNzKG9wZW5lZENsYXNzKTsgLy8gLmhpZGUoKTtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3JMb2dpblN0YXRlID0gJy5qc19tZXNzYWdlX2xvZ2dlZC0tdGV4dCc7XHJcbiAgICAgICAgICAgICQoc2VsZWN0b3JMb2dpblN0YXRlKS50ZXh0KCfQktGLINCy0YvRiNC70Lgg0LjQtyDQsNC60LrQsNGD0L3RgtCwJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpc0xvZ2luQnRuQ2xpY2sgPSAkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnbmF2Lm5hdmJhcicpLmZpbmQoJGxvZ2luQm94KS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzQWRkSW5zdGFncmFtQnRuQ2xpY2tlZCA9ICQoZXZlbnQudGFyZ2V0KS5hdHRyKCdpZCcpID09PSBDT05TVC51aVNlbGVjdG9ycy5pbnN0YWdyYW0uYWRkQWNjb3VudEJ0bklkO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFpc0xvZ2luQnRuQ2xpY2sgJiYgJGxvZ2luQm94Lmhhc0NsYXNzKG9wZW5lZENsYXNzKSAmJiAhaXNBZGRJbnN0YWdyYW1CdG5DbGlja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAkbG9naW5Cb3guYWRkQ2xhc3MoY2xvc2VDbGFzcykucmVtb3ZlQ2xhc3Mob3BlbmVkQ2xhc3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAgICAgYmluZEV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5pdFxyXG4gICAgfTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5qcyIsImltcG9ydCBNZXRlb3JFbW9qaSBmcm9tICdtZXRlb3ItZW1vamknO1xyXG4vLyBpbXBvcnQgcXEgZnJvbSAnZmluZS11cGxvYWRlcic7IC8vdG9kbzogZmluZS11cGxvYWRlXHJcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy91c2VyJztcclxuaW1wb3J0IFVzZXJDb252ZXJzYXRpb24gZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2FwaS11c2VyLWRpcmVjdCc7XHJcbmltcG9ydCB2aWV3VXRpbHMgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3ZpZXcnO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvc3Bpbm5lcic7XHJcbi8vIGltcG9ydCBQdWJTdWIgZnJvbSAncHVic3ViLWpzJzsvLyBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9wdWJzdWItanNcclxuaW1wb3J0IHtDT05TVH0gZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2NvbnN0cyc7XHJcblxyXG5jb25zdCB0b2tlbiA9IFVzZXIuZ2V0VG9rZW4oKTtcclxuY29uc3QgJG1zZ0xpc3QgPSAkKCcubWVzc2FnZXMtbGlzdCcpO1xyXG5sZXQgdXBkYXRlSW50ZXJ2YWwgPSAnJztcclxubGV0IGludGVydmFsSWQgPSBmYWxzZTtcclxuXHJcbmZ1bmN0aW9uIGlzSW5NZXNzYWdlUGFnZSgpIHtcclxuICAgIGNvbnN0ICRtc2dMaXN0ID0gJCgnLm1lc3NhZ2VzLWxpc3QnKTtcclxuICAgIGNvbnN0ICR1c2VyTGlzdCA9ICQoJy5tZXNzYWdlcy11c2VyLWxpc3QnKTtcclxuICAgIHJldHVybiAhISRtc2dMaXN0Lmxlbmd0aCAmJiAhISR1c2VyTGlzdC5sZW5ndGg7XHJcbn1cclxuJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xyXG4gICAgaWYgKCFpc0luTWVzc2FnZVBhZ2UoKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gICAgY29uc3QgbSA9IG5ldyBNZXRlb3JFbW9qaSgpO1xyXG4gICAgY29uc3QgJHBpY2tlciA9ICQoJ3RleHRhcmVhW2RhdGEtbWV0ZW9yLWVtb2ppPVwidHJ1ZVwiXSB+IGRpdicpO1xyXG4gICAgY29uc3Qgc3R5bGUgPSAkcGlja2VyLmF0dHIoJ3N0eWxlJyk7XHJcbiAgICBjb25zdCBzdHlsZU5ldyA9IHN0eWxlLnJlcGxhY2UoJ3RvcDogMzBweDsnLCAndG9wOiAtMjEwcHg7Jyk7XHJcbiAgICAkcGlja2VyLmF0dHIoJ3N0eWxlJywgc3R5bGVOZXcpO1xyXG5cclxuICAgIC8qXHJcbiAgICAvL3RvZG86IGZpbmUtdXBsb2FkZVxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXHJcbiAgICBjb25zdCByZXN0cmljdGVkVXBsb2FkZXIgPSBuZXcgcXEuRmluZVVwbG9hZGVyKHtcclxuICAgICAgICBlbGVtZW50OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmluZS11cGxvYWRlci12YWxpZGF0aW9uJyksXHJcbiAgICAgICAgdGVtcGxhdGU6ICdxcS10ZW1wbGF0ZS12YWxpZGF0aW9uJyxcclxuICAgICAgICByZXF1ZXN0OiB7XHJcbiAgICAgICAgICAgIGVuZHBvaW50OiAnL3NlcnZlci91cGxvYWRzJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGh1bWJuYWlsczoge1xyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcnM6IHtcclxuICAgICAgICAgICAgICAgIHdhaXRpbmdQYXRoOiAnaHR0cHM6Ly9maW5ldXBsb2FkZXIuY29tL3NvdXJjZS9wbGFjZWhvbGRlcnMvd2FpdGluZy1nZW5lcmljLnBuZycsIC8vICcvc291cmNlL3BsYWNlaG9sZGVycy93YWl0aW5nLWdlbmVyaWMucG5nJyxcclxuICAgICAgICAgICAgICAgIG5vdEF2YWlsYWJsZVBhdGg6ICdodHRwczovL2ZpbmV1cGxvYWRlci5jb20vc2VydmVyL3dhaXRpbmctZ2VuZXJpYy5wbmcnIC8vICcvc291cmNlL3BsYWNlaG9sZGVycy9ub3RfYXZhaWxhYmxlLWdlbmVyaWMucG5nJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgICAgICAgIGFsbG93ZWRFeHRlbnNpb25zOiBbJ2pwZWcnLCAnanBnJywgJ3R4dCddLFxyXG4gICAgICAgICAgICBpdGVtTGltaXQ6IDMsXHJcbiAgICAgICAgICAgIHNpemVMaW1pdDogNTAwICogMTAyNFxyXG4gICAgICAgIH1cclxuICAgIH0pOyovXHJcbn0pO1xyXG5cclxuLy8gbWVzc2FnZXMtbGlzdFxyXG5mdW5jdGlvbiBmaWxsTGlzdCgkbGlzdCwgZGF0YUFycmF5LCBpc0FwcGVudFByZXZNc2cpIHtcclxuICAgIGNvbnN0IGl0ZW1zID0gZGF0YUFycmF5O1xyXG4gICAgY29uc3QgY0xpc3QgPSAkbGlzdDtcclxuICAgIC8vIGNvbnN0IGRlZmF1bHRBdmF0YXJTcmMgPSAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9qTk5UNExFLnBuZyc7XHJcbiAgICBjb25zdCBpbnNlcnRNc2cgPSAodmFsdWUsIHR5cGUsIGNzc0NscykgPT4ge1xyXG4gICAgICAgIGxldCBzdHIgPSAnJztcclxuICAgICAgICBzd2l0Y2ggKHR5cGUudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICBjYXNlICdwaG90byc6XHJcbiAgICAgICAgICAgICAgICBzdHIgPSBgPGRpdiBjbGFzcz1cImNoYXQtaW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3ZhbHVlfVwiIGFsdD1cIkNvbnRlbnQgSW1hZ2VcIiBjbGFzcz1cImNvbnRlbnQtaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PmA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbGluayc6XHJcbiAgICAgICAgICAgICAgICBzdHIgPSBgPGRpdiBjbGFzcz1cImNoYXQtaW1nXCI+XHJcbiAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiJHt2YWx1ZX1cIj4ke3ZhbHVlfTwvYT5gO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHN0ciA9IGA8ZGl2IGNsYXNzPVwiY2hhdC10ZXh0XCIgPiR7dmFsdWV9PC9kaXY+YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0cjtcclxuICAgIH07XHJcbiAgICBjb25zdCBhZGRUb0xpc3QgPSAoaXNBcHBlbnRQcmV2TXNnLCAkbGksICRsaXN0KSA9PiB7XHJcbiAgICAgICAgaWYgKGlzQXBwZW50UHJldk1zZykge1xyXG4gICAgICAgICAgICAkbGkuaW5zZXJ0QmVmb3JlKCRsaXN0LmZpbmQoJ2xpOmZpcnN0LWNoaWxkJykpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRsaS5hcHBlbmRUbygkbGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGlmIChpc0FwcGVudFByZXZNc2cpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnaXNBcHBlbnRQcmV2TXNnIHRvJywgY0xpc3QpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjTGlzdC5lbXB0eSgpLmFkZENsYXNzKCdib3JkZXItbGlnaHQtY29sb3InKTtcclxuICAgIH1cclxuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gaXRlbTtcclxuICAgICAgICAvLyBjb25zdCBjaGVja3BvaW50ID0gaXRlbS5jaGVja3BvaW50IHx8IGl0ZW07XHJcblxyXG4gICAgICAgIGlmIChtZXNzYWdlLnNpZGUudG9Mb3dlckNhc2UoKSA9PT0gJ2xlZnQnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRsaSA9ICQoYDxsaSBjbGFzcz1cImNoYXQtaXRlbSBjaGF0LWl0ZW0tbGVmdCBjb2wgZmxleC1jb2x1bW4tcmV2ZXJzZVwiIHZhbHVlPVwiJHttZXNzYWdlLnZhbHVlfVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgJHsobWVzc2FnZVsncHJvZmlsZV9waWNfdXJsJ10pXHJcbiAgICAgICAgICAgICAgICAgICAgPyBgPGRpdiBjbGFzcz1cImNoYXQtaW1nLWJveFwiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHttZXNzYWdlWydwcm9maWxlX3BpY191cmwnXX1cIiBhbHQ9XCJVc2VyIEF2YXRhclwiIGNsYXNzPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNoYXQtdXNlcm5hbWUgdGV4dC1tdXRlZFwiPiR7bWVzc2FnZS51c2VybmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtpbnNlcnRNc2cobWVzc2FnZS52YWx1ZSwgbWVzc2FnZS50eXBlKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImNoYXQtdGltZS10ZXh0XCI+JHt2aWV3VXRpbHMuZ2V0Rm9ybWF0dGVkRGF0ZVV0aWwobWVzc2FnZS50aW1lc3RhbXApfTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5gKTtcclxuICAgICAgICAgICAgYWRkVG9MaXN0KGlzQXBwZW50UHJldk1zZywgJGxpLCBjTGlzdCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgJGxpID0gJChgPGxpIGNsYXNzPVwiY2hhdC1pdGVtIGNoYXQtaXRlbS1yaWdodCBjb2wgZmxleC1jb2x1bW4tcmV2ZXJzZVwiIHZhbHVlPVwiJHttZXNzYWdlLnZhbHVlfVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtpbnNlcnRNc2cobWVzc2FnZS52YWx1ZSwgbWVzc2FnZS50eXBlKX1cclxuICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJwdWxsLXJpZ2h0IGNoYXQtdGltZS10ZXh0XCI+JHt2aWV3VXRpbHMuZ2V0Rm9ybWF0dGVkRGF0ZVV0aWwobWVzc2FnZS50aW1lc3RhbXApfTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+YCk7XHJcbiAgICAgICAgICAgIGFkZFRvTGlzdChpc0FwcGVudFByZXZNc2csICRsaSwgY0xpc3QpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGFkZFBhZ2luYXRpb24oJHdyYXBwZXIsIHBhZ2luYXRpb24pIHtcclxuICAgIGNvbnN0IGN1cnNvciA9IHBhZ2luYXRpb24ucHJldl9jdXJzb3I7XHJcbiAgICBjb25zdCAkYnV0dG9uID0gJChgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGxvYWQtbW9yZSBkLWZsZXggcG9zaXRpb24tYWJzb2x1dGVcIiBzdHlsZT1cInRvcDogLTQycHg7XCJcclxuICAgICAgICBkYXRhLWN1cnNvcj1cIiR7Y3Vyc29yfVwiPtC10YnQtSDQtNCw0LLQsNC5ITwvYnV0dG9uPmApO1xyXG5cclxuICAgIGlmICghJHdyYXBwZXIuY2xvc2VzdCgnLm1lc3NhZ2VzLWxpc3QtYm94JykuZmluZCgnLmxvYWQtbW9yZScpLmxlbmd0aCkge1xyXG4gICAgICAgICRidXR0b24uaW5zZXJ0QmVmb3JlKCR3cmFwcGVyKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB1c2VyRGF0YSA9ICQoJy5tZXNzYWdlcy1saXN0JykuZGF0YSgnY29udmVyc2F0aW9uJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHt1c2VybmFtZSwgY29udmVyc2F0aW9uSWR9ID0gdXNlckRhdGE7XHJcbiAgICAgICAgICAgIFNwaW5uZXIuc3RhcnRCdXR0b25TcGlubmVyKCRidXR0b24pO1xyXG4gICAgICAgICAgICBVc2VyQ29udmVyc2F0aW9uLmdldE1ldGFkYXRhRGV0YWlsQ29udmVyc2F0aW9uKHRva2VuLCB7dXNlcm5hbWUsIGNvbnZlcnNhdGlvbklkLCBjdXJzb3J9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWNlaXZlIG1zZycsIHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICBTcGlubmVyLnN0b3BCdXR0b25TcGlubmVyKCRidXR0b24pO1xyXG4gICAgICAgICAgICAgICAgZmlsbExpc3QoJG1zZ0xpc3QsIHJlc3VsdC5kYXRhLm1ldGEubWVzc2FnZXMsICdhcHBlbnRQcmV2TXNnJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbi8vIG1lc3NhZ2VzLXVzZXItbGlzdFxyXG5mdW5jdGlvbiBmaWxsVXNlckxpc3QoJGxpc3QsIGRhdGFBcnJheSkge1xyXG4gICAgY29uc3QgaXRlbXMgPSBkYXRhQXJyYXkubWV0YTtcclxuICAgIGNvbnN0IGNMaXN0ID0gJGxpc3Q7XHJcbiAgICBjb25zdCBjb252ZXJzYXRpb25EZXRhaWwgPSBmdW5jdGlvbihpdGVtcykge1xyXG4gICAgICAgIGxldCB0cGwgPSAnJztcclxuICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICB0cGwgKz0gYDxpbWcgc3JjPVwiJHtpdGVtWydwcm9maWxlX3BpY191cmwnXX1cIiBjbGFzcz1cIm1lZGlhLXBob3RvIG1yLTEgbWVkaWEtcGhvdG8tLWdyb3VwXCIgc3R5bGU9XCJ3aWR0aDogMjRweDtcIj5gO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdHBsICs9IGA8aW1nIHNyYz1cIiR7aXRlbVsncHJvZmlsZV9waWNfdXJsJ119XCIgY2xhc3M9XCJtZWRpYS1waG90byBtci0xXCIgc3R5bGU9XCJ3aWR0aDogMjRweDtcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7aXRlbS51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgIDwvaDU+YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChpdGVtcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIHRwbCArPSAnPGg1IGNsYXNzPVwidGl0bGVcIj7Qk9GA0YPQv9C+0LLQvtC5INGH0LDRgjwvaDU+JztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRwbDtcclxuICAgIH07XHJcbiAgICBjb25zdCBhZGRDb252ZXJzYXRpb25zID0gZnVuY3Rpb24oY29udmVyc2F0aW9ucykge1xyXG4gICAgICAgIGxldCB0cGwgPSAnJztcclxuICAgICAgICBjb252ZXJzYXRpb25zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgdHBsICs9IGA8ZGl2IGNsYXNzPVwibWVkaWEgcC0xXCIgZGF0YS1jb252ZXJzYXRpb24taWQ9XCIke2l0ZW0uaWR9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtjb252ZXJzYXRpb25EZXRhaWwoaXRlbS50byl9XHJcbiAgICAgICAgICAgICAgICAgICAgJHsoaXRlbVsnbGFzdF9tZXNzYWdlJ10gJiYgKHBhcnNlSW50KGl0ZW1bJ2xhc3RfbWVzc2FnZSddLmxlbmd0aCwgMTApKSA+IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYDxwIGNsYXNzPVwic3VtbWFyeSAke2l0ZW1bJ2lzX3VucmVhZCddID8gJ2ZvbnQtd2VpZ2h0LWJvbGQnIDogJ3RleHQtbXV0ZWQnfVwiPiR7aXRlbVsnbGFzdF9tZXNzYWdlJ119PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke2l0ZW1bJ2lzX3VucmVhZCddID8gJzxzcGFuIGNsYXNzPVwic3VtbWFyeS1kb3RcIj48L3NwYW4+JyA6ICcnfWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+YDtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdHBsO1xyXG4gICAgfTtcclxuICAgIGNMaXN0LmVtcHR5KCkuYWRkQ2xhc3MoJ2JvcmRlci1saWdodC1jb2xvcicpO1xyXG4gICAgLy8gdG9kbzogZml4IGhhcmQtY29kZSAgaW1nIHNyYz1cImh0dHBzOi8vaS5pbWd1ci5jb20vak5OVDRMRS5wbmdcIlxyXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaWR4KSA9PiB7XHJcbiAgICAgICAgJChgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI2NvbGxhcHNlLSR7aWR4fVwiIGRhdGEtdXNlcm5hbWU9XCIke2l0ZW0udXNlcm5hbWV9XCIgXHJcbiAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwidHJ1ZVwiIGFyaWEtY29udHJvbHM9XCJjb2xsYXBzZS0ke2lkeH1cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhXCIgaWQ9XCJoZWFkaW5nLSR7aWR4fVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1yLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaS5pbWd1ci5jb20vak5OVDRMRS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWVkaWEtcGhvdG9cIj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICR7KGl0ZW1bJ3VucmVhZF9jb252ZXJzYXRpb25zJ10gPiAwKSA/IGA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLXNlY29uZGFyeSBwb3NpdGlvbi1hYnNvbHV0ZSBwLTJcIj4ke2l0ZW1bJ3VucmVhZF9jb252ZXJzYXRpb25zJ119PC9zcGFuPmAgOiAnJ31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHtpdGVtLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb2xsYXBzZS0ke2lkeH1cIiBjbGFzcz1cImNvbGxhcHNlXCIgYXJpYS1sYWJlbGxlZGJ5PVwiaGVhZGluZy0ke2lkeH1cIiBkYXRhLXBhcmVudD1cIiNhY2NvcmRpb25cIj5cclxuICAgICAgICAgICAgICAgICR7YWRkQ29udmVyc2F0aW9ucyhpdGVtLmNvbnZlcnNhdGlvbnMsIGlkeCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPmApLmFwcGVuZFRvKGNMaXN0KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBbmRGaWxsVXNlckxpc3QoaXNBY3RpdmVGaXJzdCkge1xyXG4gICAgY29uc3QgJHVzZXJMaXN0ID0gJCgnLm1lc3NhZ2VzLXVzZXItbGlzdCcpO1xyXG4gICAgY29uc3QgbWV0YWRhdGEgPSBVc2VyQ29udmVyc2F0aW9uLmdldE1ldGFkYXRhKHRva2VuKTtcclxuICAgIGxldCBwcmV2QWN0aXZlRGlhbG9nSWQgPSAnJztcclxuICAgIGlmICghaXNBY3RpdmVGaXJzdCkge1xyXG4gICAgICAgIHByZXZBY3RpdmVEaWFsb2dJZCA9ICR1c2VyTGlzdC5maW5kKCdsaSAuY29sbGFwc2Uuc2hvdycpLmF0dHIoJ2lkJyk7XHJcbiAgICB9XHJcbiAgICBtZXRhZGF0YS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAoIXJlc3VsdC5kYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzdWx0LmRhdGEubWV0YS5zb3J0KChhLCBiKSA9PiBhWyd1c2VybmFtZSddLmxvY2FsZUNvbXBhcmUoYlsndXNlcm5hbWUnXSkpO1xyXG4gICAgICAgIGZpbGxVc2VyTGlzdCgkdXNlckxpc3QsIHJlc3VsdC5kYXRhKTtcclxuICAgICAgICBpZiAocmVzdWx0LmRhdGEuc2V0dGluZ3MgJiYgcmVzdWx0LmRhdGEuc2V0dGluZ3MuaW52b2tlX2luX21pbGxpcykge1xyXG4gICAgICAgICAgICB1cGRhdGVJbnRlcnZhbCA9IHJlc3VsdC5kYXRhLnNldHRpbmdzLmludm9rZV9pbl9taWxsaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc0FjdGl2ZUZpcnN0KSB7XHJcbiAgICAgICAgICAgICR1c2VyTGlzdC5maW5kKCdsaTpmaXJzdC1jaGlsZCAuY29sbGFwc2UnKS5hZGRDbGFzcygnc2hvdycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0dHQnLCBwcmV2QWN0aXZlRGlhbG9nSWQpO1xyXG4gICAgICAgICAgICAkKGAjJHtwcmV2QWN0aXZlRGlhbG9nSWR9YCkuYWRkQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QW5kRmlsbENvbnZlcnNhdGlvbih1c2VybmFtZSwgY29udmVyc2F0aW9uSWQsIGlzU2Nyb2xsRG93bikge1xyXG4gICAgVXNlckNvbnZlcnNhdGlvbi5nZXRNZXRhZGF0YURldGFpbENvbnZlcnNhdGlvbih0b2tlbiwge3VzZXJuYW1lLCBjb252ZXJzYXRpb25JZH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGZpbGxMaXN0KCRtc2dMaXN0LCByZXN1bHQuZGF0YS5tZXRhLm1lc3NhZ2VzKTtcclxuICAgICAgICBTcGlubmVyLnJlbW92ZSgpO1xyXG4gICAgICAgICQoJy5qc19zZW5kLW1lc3NhZ2UtYm94JykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICQoJy5tZXNzYWdlcy1saXN0JykuYXR0cignZGF0YS1jb252ZXJzYXRpb24nLCBKU09OLnN0cmluZ2lmeSh7dXNlcm5hbWUsIGNvbnZlcnNhdGlvbklkfSkpO1xyXG5cclxuICAgICAgICBpZiAoaXNTY3JvbGxEb3duKSB7XHJcbiAgICAgICAgICAgICRtc2dMaXN0LmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAkbXNnTGlzdFswXS5zY3JvbGxIZWlnaHQgLSAkbXNnTGlzdFswXS5jbGllbnRIZWlnaHRcclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZGF0YS5tZXRhLnBhZ2luYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIGFkZFBhZ2luYXRpb24oJG1zZ0xpc3QsIHJlc3VsdC5kYXRhLm1ldGEucGFnaW5hdGlvbik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCcubWVzc2FnZXMtbGlzdC1ib3gnKS5maW5kKCcubG9hZC1tb3JlJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkSGFuZGxlcnMoKSB7XHJcbiAgICBsZXQgY29udmVyc2F0aW9uSWQgPSAnJztcclxuXHJcbiAgICAkKCcjc2VuZE1lc3NhZ2VCdXR0b24nKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0ICR0ZXh0QXJlYSA9ICQoJyNzZW5kTWVzc2FnZVRleHRBcmVhJyk7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSAkdGV4dEFyZWEudmFsKCk7XHJcbiAgICAgICAgY29uc3QgdXNlckRhdGEgPSAkKCcubWVzc2FnZXMtbGlzdCcpLmRhdGEoJ2NvbnZlcnNhdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IHt1c2VybmFtZSwgY29udmVyc2F0aW9uSWR9ID0gdXNlckRhdGE7XHJcbiAgICAgICAgU3Bpbm5lci5hZGQoJChlLnRhcmdldCksICdzcGlubmVyLWJveC0tc2VuZE1zZycpO1xyXG4gICAgICAgIFVzZXJDb252ZXJzYXRpb24ucG9zdE1ldGFkYXRhRGV0YWlsQ29udmVyc2F0aW9uKHRva2VuLCB7dXNlcm5hbWUsIGNvbnZlcnNhdGlvbklkLCB2YWx1ZX0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5zdGF0dXMgJiYgcmVzdWx0LnN0YXR1cy5zdGF0ZSA9PT0gJ29rJykge1xyXG4gICAgICAgICAgICAgICAgZ2V0QW5kRmlsbENvbnZlcnNhdGlvbih1c2VybmFtZSwgY29udmVyc2F0aW9uSWQpO1xyXG4gICAgICAgICAgICAgICAgJHRleHRBcmVhLnZhbCgnJyk7XHJcbiAgICAgICAgICAgICAgICBTcGlubmVyLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LlB1YlN1Yi5wdWJsaXNoKENPTlNULmV2ZW50cy5tZXNzYWdlcy5SRUNJRVZFX05FV19NRVNTQUdFLCB7dXNlcm5hbWUsIGNvbnZlcnNhdGlvbklkLCB2YWx1ZSwgcmVzdWx0fSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5saXN0LWdyb3VwLWl0ZW0gLmNvbGxhcHNlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcubGlzdC1ncm91cC1pdGVtJykuZGF0YSgndXNlcm5hbWUnKTtcclxuICAgICAgICBjb252ZXJzYXRpb25JZCA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5tZWRpYScpLmRhdGEoJ2NvbnZlcnNhdGlvbi1pZCcpO1xyXG4gICAgICAgIFNwaW5uZXIuYWRkKCQoJyNtYWluQ2hhdFBhcnQnKSwgJ215LTUgcHktNScpO1xyXG4gICAgICAgIGdldEFuZEZpbGxDb252ZXJzYXRpb24odXNlcm5hbWUsIGNvbnZlcnNhdGlvbklkLCAnaXNTY3JvbGxEb3duJyk7XHJcbiAgICAgICAgdXBkYXRlSW50ZXJ2YWwgPSAodXBkYXRlSW50ZXJ2YWwgPiA2MDAwKSA/IHVwZGF0ZUludGVydmFsIDogMTUwMDA7XHJcbiAgICAgICAgLy8gcmVzZW5kIHJlcXVlc3RcclxuICAgICAgICBpZiAoaW50ZXJ2YWxJZCkge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb252ZXJzYXRpb25JZCA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5tZWRpYScpLmRhdGEoJ2NvbnZlcnNhdGlvbi1pZCcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpbnRlcnZhbElkLCBjb252ZXJzYXRpb25JZCk7XHJcbiAgICAgICAgICAgIGdldEFuZEZpbGxDb252ZXJzYXRpb24odXNlcm5hbWUsIGNvbnZlcnNhdGlvbklkKTtcclxuICAgICAgICAgICAgZ2V0QW5kRmlsbFVzZXJMaXN0KCk7XHJcbiAgICAgICAgfSwgdXBkYXRlSW50ZXJ2YWwpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgd2luZG93LlB1YlN1Yi5zdWJzY3JpYmUoQ09OU1QuZXZlbnRzLm1lc3NhZ2VzLlJFQ0lFVkVfTkVXX01FU1NBR0UsIChldmVudE5hbWUsIGRhdGEpID0+IHtcclxuICAgICAgICBjb25zdCB7dXNlcm5hbWUsIGNvbnZlcnNhdGlvbklkLCB2YWx1ZSwgcmVzdWx0RnJvbVNlcnZlcn0gPSBkYXRhO1xyXG4gICAgICAgIGNvbnN0ICRkaWFsb2cgPSAkKGAubWVzc2FnZXMtdXNlci1saXN0IC5saXN0LWdyb3VwLWl0ZW1bZGF0YS11c2VybmFtZT1cIiR7dXNlcm5hbWV9XCJdIGRpdltkYXRhLWNvbnZlcnNhdGlvbi1pZD1cIiR7Y29udmVyc2F0aW9uSWR9XCJdYCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NldCB2YWwgZnJvbSB0ZXh0LWFyZWEnLCB2YWx1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Jlc3VsdEZyb21TZXJ2ZXI6ICcsIHJlc3VsdEZyb21TZXJ2ZXIpO1xyXG4gICAgICAgICRkaWFsb2cuZmluZCgnLnN1bW1hcnknKS50ZXh0KHZhbHVlKTtcclxuXHJcbiAgICAgICAgLy8gbWV0YWRhdGEudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGZpbGxVc2VyTGlzdCgkdXNlckxpc3QsIHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAvLyAgICAgaWYgKHJlc3VsdC5kYXRhLnNldHRpbmdzICYmIHJlc3VsdC5kYXRhLnNldHRpbmdzLmludm9rZV9pbl9taWxsaXMpIHtcclxuICAgICAgICAvLyAgICAgICAgIHVwZGF0ZUludGVydmFsID0gcmVzdWx0LmRhdGEuc2V0dGluZ3MuaW52b2tlX2luX21pbGxpcztcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgLy8gY2hlY2sgd2UgYXJlIGluIGNvcnJlY3QgcGFnZSAobWVzc2FnZXMpXHJcbiAgICBpZiAoIWlzSW5NZXNzYWdlUGFnZSgpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFuZEZpbGxVc2VyTGlzdCgnc2V0QWN0aXZlRmlyc3QnKTtcclxuICAgIGFkZEhhbmRsZXJzKCk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9tZXNzYWdlcy9tZXNzYWdlcy5qcyIsIi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBQdWJTdWIgZnJvbSAncHVic3ViLWpzJzsgLy8gaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvcHVic3ViLWpzXHJcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy91c2VyJztcclxuaW1wb3J0IGNvb2tpZVN0b3JhZ2UgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2Nvb2tpZSc7XHJcbmltcG9ydCB7Q09OU1R9IGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMnO1xyXG5pbXBvcnQgdmlld1V0aWxzIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy92aWV3JztcclxuXHJcbmNvbnN0IHNlbGVjdG9yQ2xzID0ge1xyXG4gICAgZm9ybTogJy5hdXRoLnJlZ2lzdGVyIC5mb3JtLXNpZ25pbicsXHJcbiAgICBzdWJtaXRCdG46ICdbdHlwZT1cInN1Ym1pdFwiXSdcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVnaXN0ZXJGb3JtIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudXNlciA9IFVzZXI7XHJcbiAgICAgICAgdGhpcy4kZm9ybSA9ICQoc2VsZWN0b3JDbHMuZm9ybSk7XHJcbiAgICAgICAgdGhpcy4kZW1haWwgPSB0aGlzLiRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJtYWlsXCJdJyk7XHJcbiAgICAgICAgdGhpcy4kdGV4dEFyZWFEZXNjcmlwdGlvbiA9ICQoJyNkZXNjcmlwdGlvbicpO1xyXG4gICAgICAgIHRoaXMuZm9ybURhdGEgPSB7J2VtYWlsJzogJ3Rlc3QxX2VtYWlsQG0ucnUnLCAncGFzc3dvcmQnOiAncGFzc3dvcmQnfTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIGlmICgkKCcuYXV0aC5yZWdpc3RlcicpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3VibWl0Rm9ybShmb3JtRGF0YU9iaikge1xyXG4gICAgICAgIGNvbnN0IGVtYWlsID0gdGhpcy4kZW1haWwudmFsKCk7XHJcbiAgICAgICAgY29uc3QgJHBhc3N3b3JkID0gdGhpcy4kZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwicGFzc1wiXScpLFxyXG4gICAgICAgICAgICAkcGFzc3dvcmRDb25maXJtID0gdGhpcy4kZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwicGFzcy1jb25maXJtXCJdJyksXHJcbiAgICAgICAgICAgIHBhc3N3b3JkID0gdGhpcy4kZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwicGFzc1wiXScpLnZhbCgpLFxyXG4gICAgICAgICAgICBwYXNzd29yZENvbmZpcm0gPSB0aGlzLiRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJwYXNzLWNvbmZpcm1cIl0nKS52YWwoKTtcclxuXHJcbiAgICAgICAgaWYgKHBhc3N3b3JkQ29uZmlybSAhPT0gcGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgJHBhc3N3b3JkLmFkZENsYXNzKCdpbnB1dC1lcnJvcicpO1xyXG4gICAgICAgICAgICAkcGFzc3dvcmRDb25maXJtLmFkZENsYXNzKCdpbnB1dC1lcnJvcicpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuJGVtYWlsLnZhbCh0aGlzLiRlbWFpbC52YWwoKS50b0xvY2FsZUxvd2VyQ2FzZSgpKTtcclxuICAgICAgICB0aGlzLmZvcm1EYXRhID0gZm9ybURhdGFPYmogfHwge2VtYWlsLCBwYXNzd29yZH07XHJcblxyXG4gICAgICAgIHRoaXMudXNlci5yZWdpc3Rlcih0aGlzLmZvcm1EYXRhKVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmRhdGEgJiYgcmVzdWx0LmRhdGEudG9rZW4pIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2F2ZSB0aGUgaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGNvb2tpZVN0b3JhZ2Uuc2V0KENPTlNULmNvb2tpZVN0b3JhZ2UuZW1haWxDb25maXJtZWQsICdmYWxzZScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb29raWVTdG9yYWdlLnNldChDT05TVC5jb29raWVTdG9yYWdlLnRva2VuLCByZXN1bHQuZGF0YS50b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3JlcXVlc3Qgc3VjY2VlZGVkIHdpdGggSlNPTiByZXNwb25zZScsIHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgUHViU3ViLnB1Ymxpc2goQ09OU1QuZXZlbnRzLlVTRVJfTE9HR0VEKTtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKHRoaXMuJHRleHRBcmVhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMubWVzc2FnZSB8fCAnUmVnaXN0ZXIgYW5kIExvZ2luIHN1Y2NzZXNzJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UodGhpcy4kdGV4dEFyZWFEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5tZXNzYWdlIHx8ICdubyByZXN1bHQuZGF0YSBmb3VuZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSh0aGlzLiR0ZXh0QXJlYURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLnN0YXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcubG9naW4tYm94Jykuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXF1ZXN0IGZhaWxlZCcsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UodGhpcy4kdGV4dEFyZWFEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkbyBzb21ldGhpbmcnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuICAgICAgICBjb25zdCByZWdpc3RlckJveCA9IENPTlNULnVpU2VsZWN0b3JzLmhlYWRlclJlZ0JveDsgLy8gJ25hdiAucmVnaXN0ZXItYm94JztcclxuICAgICAgICBjb25zdCBvcGVuZWRDbGFzcyA9ICdkLWJsb2NrJztcclxuICAgICAgICBjb25zdCBjbG9zZUNsYXNzID0gJ2Qtbm9uZSc7XHJcbiAgICAgICAgY29uc3QgJGJ0biA9ICQoc2VsZWN0b3JDbHMuc3VibWl0QnRuKSxcclxuICAgICAgICAgICAgY3NzVmFsaWRhdGlvbkNsYXNzID0gJ2Zvcm0tdmFsaWRhdGlvbic7XHJcblxyXG4gICAgICAgICRidG4ub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZm9ybSA9IHRoaXMuJGZvcm0uZ2V0KDApO1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoISRidG4uaXMoJzpkaXNhYmxlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZm9ybS5jaGVja1ZhbGlkaXR5KCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAkYnRuLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXRGb3JtKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEhpZ2hsaWdodCBlcnJvcnNcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybS5yZXBvcnRWYWxpZGl0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtLnJlcG9ydFZhbGlkaXR5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGZvcm0uYWRkQ2xhc3MoY3NzVmFsaWRhdGlvbkNsYXNzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXNSZWdCdG5DbGljayA9ICQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCduYXYubmF2YmFyJykuZmluZCgnLnJlZ2lzdGVyLWJveCcpLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIGlmICghaXNSZWdCdG5DbGljayAmJiAkKHJlZ2lzdGVyQm94KS5oYXNDbGFzcyhvcGVuZWRDbGFzcykpIHtcclxuICAgICAgICAgICAgICAgICQocmVnaXN0ZXJCb3gpLmFkZENsYXNzKGNsb3NlQ2xhc3MpLnJlbW92ZUNsYXNzKG9wZW5lZENsYXNzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3MvcmVnaXN0ZXItZm9ybS9yZWdpc3Rlci1mb3JtLmpzIiwiLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IHtDT05TVH0gZnJvbSAnLi9jb25zdHMnO1xyXG5pbXBvcnQgTmV0d29yayBmcm9tICcuL25ldHdvcmsnO1xyXG5pbXBvcnQgQ29va2llU3RvcmFnZSBmcm9tICcuL2Nvb2tpZSc7XHJcblxyXG5jbGFzcyBVc2VyQ29udmVyc2F0aW9uIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm5ldHdvcmsgPSBuZXcgTmV0d29yaygpO1xyXG4gICAgICAgIHRoaXMuY29va2llU3RvcmFnZSA9IENvb2tpZVN0b3JhZ2U7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5nUG9zdCA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlzTG9nZ2VkSW4oKSB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5nZXRUb2tlbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRW1haWxDb25maXJtZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmNvb2tpZVN0b3JhZ2UuZ2V0KENPTlNULmNvb2tpZVN0b3JhZ2UuZW1haWxDb25maXJtZWQpID09PSAnY29uZmlybWVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VG9rZW4oKSB7XHJcbiAgICAgICAgY29uc3QgY29va2llVG9rZW4gPSB0aGlzLmNvb2tpZVN0b3JhZ2UuZ2V0KENPTlNULmNvb2tpZVN0b3JhZ2UudG9rZW4pO1xyXG4gICAgICAgIHJldHVybiBjb29raWVUb2tlbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRNZXRhZGF0YSh0b2tlbiwgY2JFcnJvcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QoYCR7Q09OU1QuZ2V0UGF0aCgnaW5zdGFncmFtRGlyZWN0X2dldE1ldGFEYXRhJyl9YCwge2hlYWRlcnM6IHt0b2tlbn19LCBjYkVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRNZXRhZGF0YURldGFpbENvbnZlcnNhdGlvbih0b2tlbiwgZGV0YWlscywgY2JFcnJvcikge1xyXG4gICAgICAgIGNvbnN0IGN1cnNvciA9IChkZXRhaWxzLmN1cnNvcikgPyBgP2N1cnNvcj0ke2RldGFpbHMuY3Vyc29yfWAgOiAnJztcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KGAke0NPTlNULmdldFBhdGgoJ2luc3RhZ3JhbURpcmVjdF9nZXRNZXRhRGF0YScpfS8ke2RldGFpbHMudXNlcm5hbWV9LyR7ZGV0YWlscy5jb252ZXJzYXRpb25JZH0ke2N1cnNvcn1gLFxyXG4gICAgICAgICAgICB7aGVhZGVyczoge3Rva2VufX0sIGNiRXJyb3IpO1xyXG4gICAgfVxyXG4gICAgcG9zdE1ldGFkYXRhRGV0YWlsQ29udmVyc2F0aW9uKHRva2VuLCBkZXRhaWxzLCBjYkVycm9yKSB7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZyA9IHtcclxuICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdCxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyd2YWx1ZSc6IGRldGFpbHMudmFsdWV9KSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdC5oZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgJ3Rva2VuJzogdGhpcy5nZXRUb2tlbigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QoYCR7Q09OU1QuZ2V0UGF0aCgnaW5zdGFncmFtRGlyZWN0X3Bvc3RNZXNzYWdlJyl9LyR7ZGV0YWlscy51c2VybmFtZX0vJHtkZXRhaWxzLmNvbnZlcnNhdGlvbklkfS90ZXh0YCxcclxuICAgICAgICAgICAgc2V0dGluZywgY2JFcnJvcik7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5sZXQgdXNlckluc3RhbmNlID0gbnVsbDtcclxuXHJcbmlmICghdXNlckluc3RhbmNlKSB7XHJcbiAgICB1c2VySW5zdGFuY2UgPSBuZXcgVXNlckNvbnZlcnNhdGlvbigpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VySW5zdGFuY2U7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tb24vanMtc2VydmljZXMvYXBpLXVzZXItZGlyZWN0LmpzIiwiLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuLy8gaW1wb3J0IHtDT05TVH0gZnJvbSAnLi9jb25zdHMnO1xyXG4vLyBpbXBvcnQgTmV0d29yayBmcm9tICcuL25ldHdvcmsnO1xyXG4vLyBpbXBvcnQgQ29va2llU3RvcmFnZSBmcm9tICcuL2Nvb2tpZSc7XHJcbi8vIGltcG9ydCBQdWJTdWIgZnJvbSAncHVic3ViLWpzJzsgLy8gaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvcHVic3ViLWpzXHJcblxyXG4vLyBjb25zdCBTUElOTkVSX0JBU0VfVEVNUEFMQVRFID0gJ2pzL3VpL3RwbC9zcGlubmVyLmhicyc7XHJcbmNvbnN0IGNsYXNzZXMgPSB7XHJcbiAgICBpbmxpbmU6ICdnbG9iYWwtaW5saW5lLXNwaW5uZXInLFxyXG4gICAgb3ZlcmxheTogJ2dsb2JhbC1vdmVybGF5LXNwaW5uZXInLFxyXG4gICAgZml4ZWQ6ICdnbG9iYWwtZml4ZWQtc3Bpbm5lcicsXHJcbiAgICBidXR0b246ICdidXR0b24tLWxvYWQnXHJcbn07XHJcbi8vIGNvbnN0IGhhbmRsZWJhcnNUcGwgPSBmdW5jdGlvbiAobmFtZSwgZGF0YSwgJHRhcmdldCkge1xyXG4vLyAgICAgLy8gdmFyIGh0bWwgPSB0aGlzLmdldFRlbXBsYXRlKG5hbWUpKGRhdGEpO1xyXG4vLyAgICAgdmFyIGh0bWwgPSBIYW5kbGViYXJzLmNvbXBpbGUodGVtcGxhdGUpO1xyXG4vL1xyXG4vLyAgICAgaWYgKCR0YXJnZXQpIHtcclxuLy8gICAgICAgICAvL2ZvciBwcmV2ZW50aW5nIHhzc1xyXG4vLyAgICAgICAgICR0YXJnZXRbMF0uaW5uZXJIVE1MID0gaHRtbDtcclxuLy8gICAgIH1cclxuLy9cclxuLy8gICAgIHJldHVybiBodG1sO1xyXG4vLyB9O1xyXG4vLyBjb25zdCBoYW5kbGViYXJzID0gdGhpcy5nZXRTZXJ2aWNlKCdjb3JlLnRlbXBsYXRpbmcuaGFuZGxlYmFycycpO1xyXG5cclxuY2xhc3MgU3Bpbm5lciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoX2NmZykge1xyXG4gICAgICAgIHRoaXMuY2ZnID0gX2NmZyB8fCB7fTtcclxuICAgICAgICAvLyB0aGlzLiRkZWZhdWx0Q29udGFpbmVyID0gJCgnYm9keScpO1xyXG4gICAgICAgICQuZXh0ZW5kKGNsYXNzZXMsIHRoaXMuY2ZnLmNsYXNzZXMpO1xyXG4gICAgICAgIC8vIHRoaXMuX21lZGlhdG9yLnN1YnNjcmliZShDT05TVC5ldmVudHMuU1RPUF9GSVhFRF9TUElOTkVSLCB0aGlzLnN0b3BGaXhlZFNwaW5uZXIuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbiAgICAvLyBfbWVkaWF0b3IgPSBQdWJTdWI7XHJcblxyXG4gICAgc3RhcnQoJGVsLCBwcmV3Q2xzKSB7XHJcbiAgICAgICAgLy8gaWYgKGFkZE9yUmVtb3ZlKSB7XHJcbiAgICAgICAgLy8gICAgICQoJyNmb28nKS5hZGRDbGFzcyhjbGFzc05hbWUpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBlbHNlIHtcclxuICAgICAgICAvLyAgICAgJCgnI2ZvbycpLnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgICRlbC5maW5kKCdpJykudG9nZ2xlQ2xhc3MocHJld0NscykuYWRkQ2xhc3MoJ2ZhLXNwaW4gZmEtc3Bpbm5lcicpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3AoJGVsLCBuZXdDbHMpIHtcclxuICAgICAgICAkZWwuZmluZCgnaScpLnRvZ2dsZUNsYXNzKG5ld0NscykucmVtb3ZlQ2xhc3MoJ2ZhLXNwaW4gZmEtc3Bpbm5lcicpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZCgkZWwsIG5ld0Nscykge1xyXG4gICAgICAgIHRoaXMuJGVsID0gJGVsO1xyXG4gICAgICAgICRlbC5wcmVwZW5kKGA8ZGl2IGNsYXNzPVwic3Bpbm5lci1ib3gganVzdGlmeS1jb250ZW50LWNlbnRlciAke25ld0Nsc31cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwaW4tYW5pbWF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGRhdGEtcHJlZml4PVwiZmFyXCIgZGF0YS1pY29uPVwic3luYy1hbHRcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIGNsYXNzPVwic3ZnLWlubGluZS0tZmEgZmEtc3luYy1hbHQgZmEtdy0xNiBmYS1mdyBmYS0yeFwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTQ4My41MTUgMjguNDg1TDQzMS4zNSA4MC42NUMzODYuNDc1IDM1Ljc2NyAzMjQuNDg1IDggMjU2IDggMTIzLjIyOCA4IDE0LjgyNCAxMTIuMzM4IDguMzEgMjQzLjQ5MyA3Ljk3MSAyNTAuMzExIDEzLjQ3NSAyNTYgMjAuMzAxIDI1NmgyOC4wNDVjNi4zNTMgMCAxMS42MTMtNC45NTIgMTEuOTczLTExLjI5NEM2Ni4xNjEgMTQxLjY0OSAxNTEuNDUzIDYwIDI1NiA2MGM1NC4xNjMgMCAxMDMuMTU3IDIxLjkyMyAxMzguNjE0IDU3LjM4NmwtNTQuMTI4IDU0LjEyOWMtNy41NiA3LjU2LTIuMjA2IDIwLjQ4NSA4LjQ4NSAyMC40ODVINDkyYzYuNjI3IDAgMTItNS4zNzMgMTItMTJWMzYuOTcxYzAtMTAuNjkxLTEyLjkyNi0xNi4wNDUtMjAuNDg1LTguNDg2ek00OTEuNjk5IDI1NmgtMjguMDQ1Yy02LjM1MyAwLTExLjYxMyA0Ljk1Mi0xMS45NzMgMTEuMjk0QzQ0NS44MzkgMzcwLjM1MSAzNjAuNTQ3IDQ1MiAyNTYgNDUyYy01NC4xNjMgMC0xMDMuMTU3LTIxLjkyMy0xMzguNjE0LTU3LjM4Nmw1NC4xMjgtNTQuMTI5YzcuNTYtNy41NiAyLjIwNi0yMC40ODUtOC40ODUtMjAuNDg1SDIwYy02LjYyNyAwLTEyIDUuMzczLTEyIDEydjE0My4wMjljMCAxMC42OTEgMTIuOTI2IDE2LjA0NSAyMC40ODUgOC40ODVMODAuNjUgNDMxLjM1QzEyNS41MjUgNDc2LjIzMyAxODcuNTE2IDUwNCAyNTYgNTA0YzEzMi43NzMgMCAyNDEuMTc2LTEwNC4zMzggMjQ3LjY5LTIzNS40OTMuMzM5LTYuODE4LTUuMTY1LTEyLjUwNy0xMS45OTEtMTIuNTA3elwiIGNsYXNzPVwiXCI+PC9wYXRoPjwvc3ZnPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5gKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmUoKSB7XHJcbiAgICAgICAgdGhpcy4kZWwuZmluZCgnLnNwaW5uZXItYm94JykucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIHNwaW5uZXIgaWNvbiBvbiBidXR0b24gYmVmb3JlIHRoZSBidXR0b24gdGV4dFxyXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRlbFxyXG4gICAgICovXHJcbiAgICBzdGFydEJ1dHRvblNwaW5uZXIgPSBmdW5jdGlvbiAoJGVsLCBuZXdDbHMpIHtcclxuICAgICAgICAkZWwuYWRkQ2xhc3MoY2xhc3Nlcy5idXR0b24pO1xyXG4gICAgICAgICRlbC5wcmVwZW5kKGA8ZGl2IGNsYXNzPVwic3Bpbm5lci1ib3ggc3Bpbm5lci1ib3gtLWJ1dHRvbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHBvc2l0aW9uLXJlbGF0aXZlIHAtMCBtLTAgYmctdHJhbnNwYXJlbnQgJHtuZXdDbHN9XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGluLWFuaW1hdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBkYXRhLXByZWZpeD1cImZhclwiIGRhdGEtaWNvbj1cInN5bmMtYWx0XCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZhLWZ3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDgzLjUxNSAyOC40ODVMNDMxLjM1IDgwLjY1QzM4Ni40NzUgMzUuNzY3IDMyNC40ODUgOCAyNTYgOCAxMjMuMjI4IDggMTQuODI0IDExMi4zMzggOC4zMSAyNDMuNDkzIDcuOTcxIDI1MC4zMTEgMTMuNDc1IDI1NiAyMC4zMDEgMjU2aDI4LjA0NWM2LjM1MyAwIDExLjYxMy00Ljk1MiAxMS45NzMtMTEuMjk0QzY2LjE2MSAxNDEuNjQ5IDE1MS40NTMgNjAgMjU2IDYwYzU0LjE2MyAwIDEwMy4xNTcgMjEuOTIzIDEzOC42MTQgNTcuMzg2bC01NC4xMjggNTQuMTI5Yy03LjU2IDcuNTYtMi4yMDYgMjAuNDg1IDguNDg1IDIwLjQ4NUg0OTJjNi42MjcgMCAxMi01LjM3MyAxMi0xMlYzNi45NzFjMC0xMC42OTEtMTIuOTI2LTE2LjA0NS0yMC40ODUtOC40ODZ6TTQ5MS42OTkgMjU2aC0yOC4wNDVjLTYuMzUzIDAtMTEuNjEzIDQuOTUyLTExLjk3MyAxMS4yOTRDNDQ1LjgzOSAzNzAuMzUxIDM2MC41NDcgNDUyIDI1NiA0NTJjLTU0LjE2MyAwLTEwMy4xNTctMjEuOTIzLTEzOC42MTQtNTcuMzg2bDU0LjEyOC01NC4xMjljNy41Ni03LjU2IDIuMjA2LTIwLjQ4NS04LjQ4NS0yMC40ODVIMjBjLTYuNjI3IDAtMTIgNS4zNzMtMTIgMTJ2MTQzLjAyOWMwIDEwLjY5MSAxMi45MjYgMTYuMDQ1IDIwLjQ4NSA4LjQ4NUw4MC42NSA0MzEuMzVDMTI1LjUyNSA0NzYuMjMzIDE4Ny41MTYgNTA0IDI1NiA1MDRjMTMyLjc3MyAwIDI0MS4xNzYtMTA0LjMzOCAyNDcuNjktMjM1LjQ5My4zMzktNi44MTgtNS4xNjUtMTIuNTA3LTExLjk5MS0xMi41MDd6XCIgY2xhc3M9XCJcIj48L3BhdGg+PC9zdmc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PmApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBzcGlubmVyIGljb24gZnJvbSBidXR0b25cclxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkZWxcclxuICAgICAqL1xyXG4gICAgc3RvcEJ1dHRvblNwaW5uZXIgPSBmdW5jdGlvbiAoJGVsKSB7XHJcbiAgICAgICAgJGVsLnJlbW92ZUNsYXNzKGNsYXNzZXMuYnV0dG9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZpbmRzIHNwaW5uZXJzXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9ICRjb250YWluZXJcclxuICAgICAqIEByZXR1cm4gez9qUXVlcnl9IHNwaW5uZXJzXHJcbiAgICAgKi9cclxuICAgIC8vIF9maW5kU3Bpbm5lciA9IGZ1bmN0aW9uICh0eXBlLCAkY29udGFpbmVyKSB7XHJcbiAgICAvLyAgICAgY29uc3Qgc2VsZWN0b3IgPSAnLicgKyB0eXBlO1xyXG4gICAgLy8gICAgIGxldCAkZWwgPSB0aGlzLiRkZWZhdWx0Q29udGFpbmVyO1xyXG4gICAgLy8gICAgIGlmICgkY29udGFpbmVyKSB7XHJcbiAgICAvLyAgICAgICAgICRlbCA9ICRjb250YWluZXI7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy9cclxuICAgIC8vICAgICBpZiAoJGVsLmZpbmQoc2VsZWN0b3IpLmxlbmd0aCA+IDApIHtcclxuICAgIC8vICAgICAgICAgcmV0dXJuICRlbC5maW5kKHNlbGVjdG9yKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAkZWxcclxuICAgICAqL1xyXG4gICAgLypcclxuICAgIHN0YXJ0Q29udGVudFNwaW5uZXIgPSBmdW5jdGlvbiAoJGVsKSB7XHJcbiAgICAgICAgY29uc3QgaHRtbCA9IGhhbmRsZWJhcnNUcGwoXHJcbiAgICAgICAgICAgIFNQSU5ORVJfQkFTRV9URU1QQUxBVEUsIHtcclxuICAgICAgICAgICAgICAgIGltZ1NyYzogQ1RDLlVSTFMuV0FJVElOR19JTUFHRSxcclxuICAgICAgICAgICAgICAgICdjbGFzcyc6IGNsYXNzZXMub3ZlcmxheVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAkZWwucHJlcGVuZChodG1sKTtcclxuICAgIH07XHJcblxyXG4gICAgc3RhcnRJbmxpbmVDb250ZW50U3Bpbm5lciA9IGZ1bmN0aW9uICgkZWwpIHtcclxuICAgICAgICBjb25zdCBodG1sID0gaGFuZGxlYmFyc1RwbChcclxuICAgICAgICAgICAgU1BJTk5FUl9CQVNFX1RFTVBBTEFURSwge1xyXG4gICAgICAgICAgICAgICAgaW1nU3JjOiBDVEMuVVJMUy5XQUlUSU5HX0lNQUdFLFxyXG4gICAgICAgICAgICAgICAgJ2NsYXNzJzogY2xhc3Nlcy5pbmxpbmVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgJGVsLnByZXBlbmQoaHRtbCk7XHJcbiAgICB9O1xyXG4gICAgKi9cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0YXJ0cyBnbG9iYWwgZnVsbCBwYWdlIGZpeGVkIHNwaW5uZXJcclxuICAgICAqL1xyXG4gICAgLypcclxuICAgIHN0YXJ0Rml4ZWRTcGlubmVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IHNwaW5uZXJzID0gdGhpcy5fZmluZFNwaW5uZXIoY2xhc3Nlcy5maXhlZCk7XHJcbiAgICAgICAgaWYgKCEoQ1RDLmlzRWRpdCgpIHx8IENUQy5pc0Rlc2lnbigpKSAmJiAhc3Bpbm5lcnMpIHtcclxuICAgICAgICAgICAgY29uc3QgaHRtbCA9IGhhbmRsZWJhcnNUcGwoXHJcbiAgICAgICAgICAgICAgICBTUElOTkVSX0JBU0VfVEVNUEFMQVRFLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nU3JjOiBDVEMuVVJMUy5XQUlUSU5HX0lNQUdFLFxyXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6IGNsYXNzZXMuZml4ZWRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLiRkZWZhdWx0Q29udGFpbmVyLnByZXBlbmQoaHRtbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgICovXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9wcyBzcGlubmVyc1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAkY29udGFpbmVyXHJcbiAgICAgKi9cclxuICAgIC8vIF9zdG9wU3Bpbm5lciA9IGZ1bmN0aW9uICh0eXBlLCAkY29udGFpbmVyKSB7XHJcbiAgICAvLyAgICAgY29uc3Qgc3Bpbm5lcnMgPSB0aGlzLl9maW5kU3Bpbm5lcih0eXBlLCAkY29udGFpbmVyKTtcclxuICAgIC8vICAgICBpZiAoc3Bpbm5lcnMpIHtcclxuICAgIC8vICAgICAgICAgc3Bpbm5lcnMucmVtb3ZlKCk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gJGVsXHJcbiAgICAgKi9cclxuICAgIC8vIHN0b3BDb250ZW50U3Bpbm5lciA9IGZ1bmN0aW9uICgkZWwpIHtcclxuICAgIC8vICAgICAkZWwuZmluZCgnLicgKyBjbGFzc2VzLm92ZXJsYXkpLnJlbW92ZSgpO1xyXG4gICAgLy8gfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gJGVsXHJcbiAgICAgKi9cclxuICAgIC8vIHN0b3BJbmxpbmVDb250ZW50U3Bpbm5lciA9IGZ1bmN0aW9uICgkZWwpIHtcclxuICAgIC8vICAgICAkZWwuZmluZCgnLicgKyBjbGFzc2VzLmlubGluZSkucmVtb3ZlKCk7XHJcbiAgICAvLyB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RvcHMgZ2xvYmFsIGZ1bGwgcGFnZSBmaXhlZCBzcGlubmVyXHJcbiAgICAgKi9cclxuICAgIC8vIHN0b3BGaXhlZFNwaW5uZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICAgdGhpcy5fc3RvcFNwaW5uZXIoY2xhc3Nlcy5maXhlZCk7XHJcbiAgICAvLyB9O1xyXG59XHJcblxyXG5sZXQgc3Bpbm5lckluc3RhbmNlID0gbnVsbDtcclxuXHJcbmlmICghc3Bpbm5lckluc3RhbmNlKSB7XHJcbiAgICBzcGlubmVySW5zdGFuY2UgPSBuZXcgU3Bpbm5lcigpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzcGlubmVySW5zdGFuY2U7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tb24vanMtc2VydmljZXMvc3Bpbm5lci5qcyIsIi8qIGVzbGludC1kaXNhYmxlIHNvcnQtdmFycyAqL1xyXG4vLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdXNlcic7XHJcbmltcG9ydCBQdWJTdWIgZnJvbSAncHVic3ViLWpzJzsgLy8gaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvcHVic3ViLWpzXHJcbmltcG9ydCBjb29raWVTdG9yYWdlIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb29raWUnO1xyXG4vLyBpbXBvcnQgVmFsaWRhdG9yIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9mb3JtLXZhbGlkYXRvcic7XHJcbmltcG9ydCB2aWV3VXRpbHMgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3ZpZXcnO1xyXG5pbXBvcnQge0NPTlNUfSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29uc3RzJztcclxuXHJcbi8vIHdpbmRvdy4kID0gJDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMb2dpblBhZ2Uoc2VsZWN0b3JDc3MpIHtcclxuICAgIGNvbnN0IHtfZm9ybUlkLCBfYnV0dG9uU3VibWl0SWQsIF9sb2dpbkJveH0gPSBzZWxlY3RvckNzcztcclxuICAgIGNvbnN0IHVzZXIgPSBVc2VyLCAvLyBzZXJ2aWNlXHJcbiAgICAgICAgJGZvcm0gPSAkKF9mb3JtSWQpLFxyXG4gICAgICAgICRlbWFpbCA9ICRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJtYWlsXCJdJyksXHJcbiAgICAgICAgJHRleHRBcmVhRGVzY3JpcHRpb24gPSAkKCcjZGVzY3JpcHRpb24nKTtcclxuICAgIC8vIGNvbnN0IG9wZW5lZENsYXNzID0gJ2QtYmxvY2snO1xyXG4gICAgLy8gY29uc3QgY2xvc2VDbGFzcyA9ICdkLW5vbmUnO1xyXG5cclxuICAgIGNvbnN0IHVzZXJMb2dpbkhlYWRlciA9IChfZm9ybURhdGEpID0+IHtcclxuICAgICAgICBjb25zdCBjYkVycm9yID0gKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAkKF9sb2dpbkJveCkuYXBwZW5kKCc8cD5yZXN1bHQuc3RhdHVzLm1lc3NhZ2U8L3A+Jyk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHVzZXIubG9naW4oX2Zvcm1EYXRhLCBjYkVycm9yKVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5kYXRhICYmIHJlc3VsdC5kYXRhLnRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2F2ZSB0aGUgaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGNvb2tpZVN0b3JhZ2Uuc2V0KENPTlNULmNvb2tpZVN0b3JhZ2UudG9rZW4sIHJlc3VsdC5kYXRhLnRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcubmF2LWxpbmsuanNfbG9nT3V0JykucGFyZW50KCkuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXF1ZXN0IHN1Y2NlZWRlZCB3aXRoIEpTT04gcmVzcG9uc2UnLCByZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UoJHRleHRBcmVhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMubWVzc2FnZSB8fCAnTG9naW4gc3VjY3Nlc3MnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LnN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSh0aGlzLiR0ZXh0QXJlYURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgPHA+c3RhdHVzOiAke3Jlc3VsdC5zdGF0dXMuc3RhdGV9PC9wPjxwPiBtZXNzYWdlOiAke3Jlc3VsdC5zdGF0dXMubWVzc2FnZX08L3A+YCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKCR0ZXh0QXJlYURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLm1lc3NhZ2UgfHwgJ0xvZ2luIGVycm9yJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzdWJtaXRGb3JtID0gZnVuY3Rpb24oZm9ybURhdGFPYmopIHtcclxuICAgICAgICBjb25zdCBlbWFpbCA9ICRlbWFpbC52YWwoKSxcclxuICAgICAgICAgICAgcGFzc3dvcmQgPSAkZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwicGFzc1wiXScpLnZhbCgpLFxyXG4gICAgICAgICAgICBfZm9ybURhdGEgPSBmb3JtRGF0YU9iaiB8fCB7ZW1haWwsIHBhc3N3b3JkfTtcclxuXHJcbiAgICAgICAgaWYgKHNlbGVjdG9yQ3NzLmlzTG9naW5JbnN0YWdyYW0pIHtcclxuICAgICAgICAgICAgLy8gdG9kbzogZGVsZXRlIG1lXHJcbiAgICAgICAgICAgIC8vIGFkZEluc3RhZ3JhbUFjY291bnQoe3VzZXJuYW1lOiAkZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwidXNlcm5hbWVcIl0nKS52YWwoKSwgcGFzc3dvcmR9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkZW1haWwudmFsKCRlbWFpbC52YWwoKS50b0xvY2FsZUxvd2VyQ2FzZSgpKTtcclxuICAgICAgICAgICAgdXNlckxvZ2luSGVhZGVyKF9mb3JtRGF0YSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBQdWJTdWIucHVibGlzaChDT05TVC5ldmVudHMuVVNFUl9MT0dHRUQsICdsb2dpbicpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2luc3RhZ3JhbS1pbnRlZ3JhdGlvbi9pbnN0YWdyYW0tYWNjb3VudHMuaHRtbCc7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbG9nT3V0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29va2llU3RvcmFnZS5yZW1vdmUoQ09OU1QuY29va2llU3RvcmFnZS50b2tlbik7XHJcbiAgICAgICAgUHViU3ViLnB1Ymxpc2goQ09OU1QuZXZlbnRzLlVTRVJfTE9HT1VUKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYmluZEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIGNvbnN0ICRzaG93TG9naW5Cb3hCdG5JZCA9ICQoX3Nob3dMb2dpbkJveEJ0bklkKTtcclxuICAgICAgICBjb25zdCAkbG9naW5Cb3ggPSAkKF9sb2dpbkJveCk7XHJcbiAgICAgICAgY29uc3Qgb3BlbmVkQ2xhc3MgPSAnZC1ibG9jayc7XHJcbiAgICAgICAgY29uc3QgY2xvc2VDbGFzcyA9ICdkLW5vbmUnO1xyXG5cclxuICAgICAgICAvLyAkc2hvd0xvZ2luQm94QnRuSWQub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBpZiAoIXNlbGVjdG9yQ3NzLmlzTG9naW5JbnN0YWdyYW0pIHtcclxuICAgICAgICAvLyAgICAgICAgICRsb2dpbkJveC5jc3Moeyd0b3AnOiAwLCAncmlnaHQnOiAwfSlcclxuICAgICAgICAvLyAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2JnLWxpZ2h0IGJvcmRlciBtdC01IG14LWF1dG8gcG9zaXRpb24tYWJzb2x1dGUnKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICAkbG9naW5Cb3guYWRkQ2xhc3Mob3BlbmVkQ2xhc3MpLnJlbW92ZUNsYXNzKGNsb3NlQ2xhc3MpO1xyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICBjb25zdCAkYnV0dG9uU3VibWl0ID0gJChfYnV0dG9uU3VibWl0SWQpLFxyXG4gICAgICAgICAgICBjc3NWYWxpZGF0aW9uQ2xhc3MgPSAnZm9ybS12YWxpZGF0aW9uJztcclxuXHJcbiAgICAgICAgJGJ1dHRvblN1Ym1pdC5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSAkZm9ybS5nZXQoMCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IHZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoJGZvcm0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2aWV3VXRpbHMsIHZpZXdVdGlscy5pc0VtYWlsKCRlbWFpbC52YWwoKSkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGZvcm0uY2hlY2tWYWxpZGl0eSgpICYmIHZpZXdVdGlscy5pc0VtYWlsKCRlbWFpbC52YWwoKSkpIHtcclxuICAgICAgICAgICAgICAgIHN1Ym1pdEZvcm0oKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIEhpZ2hsaWdodCBlcnJvcnNcclxuICAgICAgICAgICAgICAgIGlmIChmb3JtLnJlcG9ydFZhbGlkaXR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJGZvcm0uYWRkQ2xhc3MoY3NzVmFsaWRhdGlvbkNsYXNzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcubmF2LWxpbmsuanNfbG9nT3V0Jykub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBsb2dPdXQoKTtcclxuICAgICAgICAgICAgJChlLnRhcmdldCkucGFyZW50KCkuaGlkZSgpO1xyXG4gICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKCR0ZXh0QXJlYURlc2NyaXB0aW9uLCAnTG9nZ2VkIG91dCcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBQdWJTdWIuc3Vic2NyaWJlKENPTlNULmV2ZW50cy5VU0VSX0xPR09VVCwgKG1zZykgPT4ge1xyXG4gICAgICAgICAgICAkKENPTlNULnVpU2VsZWN0b3JzLmhlYWRlck5hdkxvZ2luQnRuKS5hZGRDbGFzcyhvcGVuZWRDbGFzcykucmVtb3ZlQ2xhc3MoY2xvc2VDbGFzcyk7IC8vIC5zaG93KCk7XHJcbiAgICAgICAgICAgICQoQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyUmVnQnRuKS5hZGRDbGFzcyhvcGVuZWRDbGFzcykucmVtb3ZlQ2xhc3MoY2xvc2VDbGFzcyk7XHJcbiAgICAgICAgICAgICQoJy5uYXYtbGluay5qc19sb2dPdXQnKS5hZGRDbGFzcyhjbG9zZUNsYXNzKS5yZW1vdmVDbGFzcyhvcGVuZWRDbGFzcyk7IC8vIC5oaWRlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9yTG9naW5TdGF0ZSA9ICcuanNfbWVzc2FnZV9sb2dnZWQtLXRleHQnO1xyXG4gICAgICAgICAgICAkKHNlbGVjdG9yTG9naW5TdGF0ZSkudGV4dCgn0JLRiyDQstGL0YjQu9C4INC40Lcg0LDQutC60LDRg9C90YLQsCcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXNMb2dpbkJ0bkNsaWNrID0gJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJ25hdi5uYXZiYXInKS5maW5kKCRsb2dpbkJveCkubGVuZ3RoO1xyXG4gICAgICAgICAgICBjb25zdCBpc0FkZEluc3RhZ3JhbUJ0bkNsaWNrZWQgPSAkKGV2ZW50LnRhcmdldCkuYXR0cignaWQnKSA9PT0gQ09OU1QudWlTZWxlY3RvcnMuaW5zdGFncmFtLmFkZEFjY291bnRCdG5JZDtcclxuXHJcbiAgICAgICAgICAgIGlmICghaXNMb2dpbkJ0bkNsaWNrICYmICRsb2dpbkJveC5oYXNDbGFzcyhvcGVuZWRDbGFzcykgJiYgIWlzQWRkSW5zdGFncmFtQnRuQ2xpY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgJGxvZ2luQm94LmFkZENsYXNzKGNsb3NlQ2xhc3MpLnJlbW92ZUNsYXNzKG9wZW5lZENsYXNzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgICAgIGlmICgkKCcuYXV0aC5sb2dpbicpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBiaW5kRXZlbnRzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5pdFxyXG4gICAgfTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvX2F1dGgvbG9naW4tcGFnZS5qcyIsImlmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBicnV0dXNpbil3aW5kb3cuYnJ1dHVzaW49bmV3IE9iamVjdDtlbHNlIGlmKFwib2JqZWN0XCIhPXR5cGVvZiBicnV0dXNpbil0aHJvd1wiYnJ1dHVzaW4gZ2xvYmFsIHZhcmlhYmxlIGFscmVhZHkgZXhpc3RzXCI7IWZ1bmN0aW9uKCl7U3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRofHwoU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQ9dHx8MCx0aGlzLmluZGV4T2YoZSx0KT09PXR9KSxTdHJpbmcucHJvdG90eXBlLmVuZHNXaXRofHwoU3RyaW5nLnByb3RvdHlwZS5lbmRzV2l0aD1mdW5jdGlvbihlLHQpe3ZhciByPXRoaXMudG9TdHJpbmcoKTsodm9pZCAwPT09dHx8dD5yLmxlbmd0aCkmJih0PXIubGVuZ3RoKSx0LT1lLmxlbmd0aDt2YXIgbj1yLmluZGV4T2YoZSx0KTtyZXR1cm4tMSE9PW4mJm49PT10fSksU3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlc3x8KFN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXM9ZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtyZXR1cm4tMSE9PVN0cmluZy5wcm90b3R5cGUuaW5kZXhPZi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9KSxTdHJpbmcucHJvdG90eXBlLmZvcm1hdHx8KFN0cmluZy5wcm90b3R5cGUuZm9ybWF0PWZ1bmN0aW9uKCl7Zm9yKHZhciBlPXRoaXMsdD0wO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciByPW5ldyBSZWdFeHAoXCJcXFxce1wiK3QrXCJcXFxcfVwiLFwiZ2lcIik7ZT1lLnJlcGxhY2Uocixhcmd1bWVudHNbdF0pfXJldHVybiBlfSk7dmFyIEJydXR1c2luRm9ybXM9bmV3IE9iamVjdDtCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzPXt2YWxpZGF0aW9uRXJyb3I6XCJWYWxpZGF0aW9uIGVycm9yXCIscmVxdWlyZWQ6XCJUaGlzIGZpZWxkIGlzICoqcmVxdWlyZWQqKlwiLGludmFsaWRWYWx1ZTpcIkludmFsaWQgZmllbGQgdmFsdWVcIixhZGRwcm9wTmFtZUV4aXN0ZW50OlwiVGhpcyBwcm9wZXJ0eSBpcyBhbHJlYWR5IHByZXNlbnQgaW4gdGhlIG9iamVjdFwiLGFkZHByb3BOYW1lUmVxdWlyZWQ6XCJBIG5hbWUgaXMgcmVxdWlyZWRcIixtaW5JdGVtczpcIkF0IGxlYXN0IGB7MH1gIGl0ZW1zIGFyZSByZXF1aXJlZFwiLG1heEl0ZW1zOlwiQXQgbW9zdCBgezB9YCBpdGVtcyBhcmUgYWxsb3dlZFwiLHBhdHRlcm46XCJWYWx1ZSBkb2VzIG5vdCBtYXRjaCBwYXR0ZXJuOiBgezB9YFwiLG1pbkxlbmd0aDpcIlZhbHVlIG11c3QgYmUgKiphdCBsZWFzdCoqIGB7MH1gIGNoYXJhY3RlcnMgbG9uZ1wiLG1heExlbmd0aDpcIlZhbHVlIG11c3QgYmUgKiphdCBtb3N0KiogYHswfWAgY2hhcmFjdGVycyBsb25nXCIsbXVsdGlwbGVPZjpcIlZhbHVlIG11c3QgYmUgKiptdWx0aXBsZSBvZioqIGB7MH1gXCIsbWluaW11bTpcIlZhbHVlIG11c3QgYmUgKipncmVhdGVyIG9yIGVxdWFsIHRoYW4qKiBgezB9YFwiLGV4Y2x1c2l2ZU1pbmltdW06XCJWYWx1ZSBtdXN0IGJlICoqZ3JlYXRlciB0aGFuKiogYHswfWBcIixtYXhpbXVtOlwiVmFsdWUgbXVzdCBiZSAqKmxvd2VyIG9yIGVxdWFsIHRoYW4qKiBgezB9YFwiLGV4Y2x1c2l2ZU1heGltdW06XCJWYWx1ZSBtdXN0IGJlICoqbG93ZXIgdGhhbioqIGB7MH1gXCIsbWluUHJvcGVydGllczpcIkF0IGxlYXN0IGB7MH1gIHByb3BlcnRpZXMgYXJlIHJlcXVpcmVkXCIsbWF4UHJvcGVydGllczpcIkF0IG1vc3QgYHswfWAgcHJvcGVydGllcyBhcmUgYWxsb3dlZFwiLHVuaXF1ZUl0ZW1zOlwiQXJyYXkgaXRlbXMgbXVzdCBiZSB1bmlxdWVcIixhZGRJdGVtOlwiQWRkIGl0ZW1cIixcInRydWVcIjpcIlRydWVcIixcImZhbHNlXCI6XCJGYWxzZVwifSxCcnV0dXNpbkZvcm1zLmRlY29yYXRvcnM9bmV3IEFycmF5LEJydXR1c2luRm9ybXMuYWRkRGVjb3JhdG9yPWZ1bmN0aW9uKGUpe0JydXR1c2luRm9ybXMuZGVjb3JhdG9yc1tCcnV0dXNpbkZvcm1zLmRlY29yYXRvcnMubGVuZ3RoXT1lfSxCcnV0dXNpbkZvcm1zLm9uUmVzb2x1dGlvblN0YXJ0ZWQ9ZnVuY3Rpb24oZSl7fSxCcnV0dXNpbkZvcm1zLm9uUmVzb2x1dGlvbkZpbmlzaGVkPWZ1bmN0aW9uKGUpe30sQnJ1dHVzaW5Gb3Jtcy5vblZhbGlkYXRpb25FcnJvcj1mdW5jdGlvbihlLHQpe2UuZm9jdXMoKSxlLmNsYXNzTmFtZS5pbmNsdWRlcyhcIiBlcnJvclwiKXx8KGUuY2xhc3NOYW1lKz1cIiBlcnJvclwiKSxhbGVydCh0KX0sQnJ1dHVzaW5Gb3Jtcy5vblZhbGlkYXRpb25TdWNjZXNzPWZ1bmN0aW9uKGUpe2UuY2xhc3NOYW1lPWUuY2xhc3NOYW1lLnJlcGxhY2UoXCIgZXJyb3JcIixcIlwiKX0sQnJ1dHVzaW5Gb3Jtcy5wb3N0UmVuZGVyPW51bGwsQnJ1dHVzaW5Gb3Jtcy5pbnN0YW5jZXM9bmV3IEFycmF5LEJydXR1c2luRm9ybXMuY3JlYXRlPWZ1bmN0aW9uKHNjaGVtYSl7ZnVuY3Rpb24gdmFsaWRhdGVEZXBlbmN5TWFwSXNBY3ljbGljKCl7ZnVuY3Rpb24gZSh0LHIsbil7aWYoci5oYXNPd25Qcm9wZXJ0eShuKSlyZXR1cm4gdm9pZChlcnJvcj1cIlNjaGVtYSBkZXBlbmRlbmN5IGdyYXBoIGhhcyBjeWNsZXNcIik7aWYocltuXT1udWxsLCF0Lmhhc093blByb3BlcnR5KG4pKXt0W25dPW51bGw7dmFyIGE9ZGVwZW5kZW5jeU1hcFtuXTtpZihhKWZvcih2YXIgaT0wO2k8YS5sZW5ndGg7aSsrKWUodCxyLGFbaV0pO2RlbGV0ZSByW25dfX12YXIgdD1uZXcgT2JqZWN0O2Zvcih2YXIgciBpbiBkZXBlbmRlbmN5TWFwKXQuaGFzT3duUHJvcGVydHkocil8fGUodCxuZXcgT2JqZWN0LHIpfWZ1bmN0aW9uIGFwcGVuZENoaWxkKGUsdCxyKXtlLmFwcGVuZENoaWxkKHQpO2Zvcih2YXIgbj0wO248QnJ1dHVzaW5Gb3Jtcy5kZWNvcmF0b3JzLmxlbmd0aDtuKyspQnJ1dHVzaW5Gb3Jtcy5kZWNvcmF0b3JzW25dKHQscil9ZnVuY3Rpb24gY3JlYXRlUHNldWRvU2NoZW1hKGUpe3ZhciB0PW5ldyBPYmplY3Q7Zm9yKHZhciByIGluIGUpXCJpdGVtc1wiIT09ciYmXCJwcm9wZXJ0aWVzXCIhPT1yJiZcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCIhPT1yJiYoXCJwYXR0ZXJuXCI9PT1yP3Rbcl09bmV3IFJlZ0V4cChlW3JdKTp0W3JdPWVbcl0pO3JldHVybiB0fWZ1bmN0aW9uIGdldERlZmluaXRpb24oZSl7dmFyIHQ9ZS5zcGxpdChcIi9cIikscj1yb290O2Zvcih2YXIgbiBpbiB0KVwiMFwiIT09biYmKHI9clt0W25dXSk7cmV0dXJuIHJ9ZnVuY3Rpb24gY29udGFpbnNTdHIoZSx0KXtmb3IodmFyIHI9MDtyPGUubGVuZ3RoO3IrKylpZihlW3JdPT10KXJldHVybiEwO3JldHVybiExfWZ1bmN0aW9uIHJlbmFtZVJlcXVpcmVkUHJvcGV0aWVzKGUpe2lmKGUpaWYoZS5oYXNPd25Qcm9wZXJ0eShcIm9uZU9mXCIpKWZvcih2YXIgdCBpbiBlLm9uZU9mKXJlbmFtZVJlcXVpcmVkUHJvcGV0aWVzKGUub25lT2ZbdF0pO2Vsc2UgaWYoZS5oYXNPd25Qcm9wZXJ0eShcIiRyZWZcIikpe3ZhciByPWdldERlZmluaXRpb24oZS4kcmVmKTtyZW5hbWVSZXF1aXJlZFByb3BldGllcyhyKX1lbHNlIGlmKFwib2JqZWN0XCI9PT1lLnR5cGUpe2lmKGUucHJvcGVydGllcyl7ZS5oYXNPd25Qcm9wZXJ0eShcInJlcXVpcmVkXCIpJiZBcnJheS5pc0FycmF5KGUucmVxdWlyZWQpJiYoZS5yZXF1aXJlZFByb3BlcnRpZXM9ZS5yZXF1aXJlZCxkZWxldGUgZS5yZXF1aXJlZCk7Zm9yKHZhciBuIGluIGUucHJvcGVydGllcylyZW5hbWVSZXF1aXJlZFByb3BldGllcyhlLnByb3BlcnRpZXNbbl0pfWlmKGUucGF0dGVyblByb3BlcnRpZXMpZm9yKHZhciBhIGluIGUucGF0dGVyblByb3BlcnRpZXMpe3ZhciBpPWUucGF0dGVyblByb3BlcnRpZXNbYV07KGkuaGFzT3duUHJvcGVydHkoXCJ0eXBlXCIpfHxpLmhhc093blByb3BlcnR5KFwiJHJlZlwiKXx8aS5oYXNPd25Qcm9wZXJ0eShcIm9uZU9mXCIpKSYmcmVuYW1lUmVxdWlyZWRQcm9wZXRpZXMoZS5wYXR0ZXJuUHJvcGVydGllc1thXSl9ZS5hZGRpdGlvbmFsUHJvcGVydGllcyYmKGUuYWRkaXRpb25hbFByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoXCJ0eXBlXCIpfHxlLmFkZGl0aW9uYWxQcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KFwib25lT2ZcIikpJiZyZW5hbWVSZXF1aXJlZFByb3BldGllcyhlLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKX1lbHNlXCJhcnJheVwiPT09ZS50eXBlJiZyZW5hbWVSZXF1aXJlZFByb3BldGllcyhlLml0ZW1zKX1mdW5jdGlvbiBwb3B1bGF0ZVNjaGVtYU1hcChlLHQpe3ZhciByPWNyZWF0ZVBzZXVkb1NjaGVtYSh0KTtpZihyLiRpZD1lLHNjaGVtYU1hcFtlXT1yLHQpe2lmKHQuaGFzT3duUHJvcGVydHkoXCJvbmVPZlwiKSl7ci5vbmVPZj1uZXcgQXJyYXksci50eXBlPVwib25lT2ZcIjtmb3IodmFyIG4gaW4gdC5vbmVPZil7dmFyIGE9ZStcIi5cIituO3Iub25lT2Zbbl09YSxwb3B1bGF0ZVNjaGVtYU1hcChhLHQub25lT2Zbbl0pfX1lbHNlIGlmKHQuaGFzT3duUHJvcGVydHkoXCIkcmVmXCIpKXt2YXIgaT1nZXREZWZpbml0aW9uKHQuJHJlZik7aWYoaSl7aWYodC5oYXNPd25Qcm9wZXJ0eShcInRpdGxlXCIpfHx0Lmhhc093blByb3BlcnR5KFwiZGVzY3JpcHRpb25cIikpe3ZhciBvPXt9O2Zvcih2YXIgcyBpbiBpKW9bc109aVtzXTt0Lmhhc093blByb3BlcnR5KFwidGl0bGVcIikmJihvLnRpdGxlPXQudGl0bGUpLHQuaGFzT3duUHJvcGVydHkoXCJkZXNjcmlwdGlvblwiKSYmKG8uZGVzY3JpcHRpb249dC5kZXNjcmlwdGlvbiksaT1vfXBvcHVsYXRlU2NoZW1hTWFwKGUsaSl9fWVsc2UgaWYoXCJvYmplY3RcIj09PXQudHlwZSl7aWYodC5wcm9wZXJ0aWVzKXtyLnByb3BlcnRpZXM9bmV3IE9iamVjdDtmb3IodmFyIHMgaW4gdC5wcm9wZXJ0aWVzKXt2YXIgYT1lK1wiLlwiK3M7ci5wcm9wZXJ0aWVzW3NdPWE7dmFyIHU9dC5wcm9wZXJ0aWVzW3NdO3QucmVxdWlyZWRQcm9wZXJ0aWVzJiYoY29udGFpbnNTdHIodC5yZXF1aXJlZFByb3BlcnRpZXMscyk/dS5yZXF1aXJlZD0hMDp1LnJlcXVpcmVkPSExKSxwb3B1bGF0ZVNjaGVtYU1hcChhLHUpfX1pZih0LnBhdHRlcm5Qcm9wZXJ0aWVzKXtyLnBhdHRlcm5Qcm9wZXJ0aWVzPW5ldyBPYmplY3Q7Zm9yKHZhciBsIGluIHQucGF0dGVyblByb3BlcnRpZXMpe3ZhciBkPWUrXCJbXCIrbCtcIl1cIjtyLnBhdHRlcm5Qcm9wZXJ0aWVzW2xdPWQ7dmFyIHA9dC5wYXR0ZXJuUHJvcGVydGllc1tsXTtwLmhhc093blByb3BlcnR5KFwidHlwZVwiKXx8cC5oYXNPd25Qcm9wZXJ0eShcIiRyZWZcIil8fHAuaGFzT3duUHJvcGVydHkoXCJvbmVPZlwiKT9wb3B1bGF0ZVNjaGVtYU1hcChkLHQucGF0dGVyblByb3BlcnRpZXNbbF0pOnBvcHVsYXRlU2NoZW1hTWFwKGQsU0NIRU1BX0FOWSl9fWlmKHQuYWRkaXRpb25hbFByb3BlcnRpZXMpe3ZhciBhPWUrXCJbKl1cIjtyLmFkZGl0aW9uYWxQcm9wZXJ0aWVzPWEsdC5hZGRpdGlvbmFsUHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShcInR5cGVcIil8fHQuYWRkaXRpb25hbFByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoXCJvbmVPZlwiKT9wb3B1bGF0ZVNjaGVtYU1hcChhLHQuYWRkaXRpb25hbFByb3BlcnRpZXMpOnBvcHVsYXRlU2NoZW1hTWFwKGEsU0NIRU1BX0FOWSl9fWVsc2VcImFycmF5XCI9PT10LnR5cGUmJihyLml0ZW1zPWUrXCJbI11cIixwb3B1bGF0ZVNjaGVtYU1hcChyLml0ZW1zLHQuaXRlbXMpKTtpZih0Lmhhc093blByb3BlcnR5KFwiZGVwZW5kc09uXCIpKXtudWxsPT09dC5kZXBlbmRzT24mJih0LmRlcGVuZHNPbj1bXCIkXCJdKTtmb3IodmFyIGM9bmV3IEFycmF5LG49MDtuPHQuZGVwZW5kc09uLmxlbmd0aDtuKyspdC5kZXBlbmRzT25bbl0/dC5kZXBlbmRzT25bbl0uc3RhcnRzV2l0aChcIiRcIik/Y1tuXT10LmRlcGVuZHNPbltuXTplLmVuZHNXaXRoKFwiXVwiKT9jW25dPWUrXCIuXCIrdC5kZXBlbmRzT25bbl06Y1tuXT1lLnN1YnN0cmluZygwLGUubGFzdEluZGV4T2YoXCIuXCIpKStcIi5cIit0LmRlcGVuZHNPbltuXTpjW25dPVwiJFwiO3NjaGVtYU1hcFtlXS5kZXBlbmRzT249Yztmb3IodmFyIG49MDtuPGMubGVuZ3RoO24rKyl7dmFyIG09ZGVwZW5kZW5jeU1hcFtjW25dXTttfHwobT1uZXcgQXJyYXksZGVwZW5kZW5jeU1hcFtjW25dXT1tKSxtW20ubGVuZ3RoXT1lfX19fWZ1bmN0aW9uIHJlbmRlclRpdGxlKGUsdCxyKXtpZihlJiZ0KXt2YXIgbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XCJhbnlcIiE9PXIudHlwZSYmXCJvYmplY3RcIiE9PXIudHlwZSYmXCJhcnJheVwiIT09ci50eXBlJiYobi5odG1sRm9yPWdldElucHV0SWQoKSk7dmFyIGE9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodCtcIjpcIik7aWYoYXBwZW5kQ2hpbGQobixhLHIpLHIuZGVzY3JpcHRpb24mJihuLnRpdGxlPXIuZGVzY3JpcHRpb24pLHIucmVxdWlyZWQpe3ZhciBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdXBcIik7YXBwZW5kQ2hpbGQoaSxkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIipcIiksciksYXBwZW5kQ2hpbGQobixpLHIpLG4uY2xhc3NOYW1lPVwicmVxdWlyZWRcIn1hcHBlbmRDaGlsZChlLG4scil9fWZ1bmN0aW9uIGdldElucHV0SWQoKXtyZXR1cm4gZm9ybUlkK1wiX1wiK2lucHV0Q291bnRlcn1mdW5jdGlvbiB2YWxpZGF0ZShlKXt2YXIgdD0hMDtpZihlLmhhc093blByb3BlcnR5KFwiZ2V0VmFsaWRhdGlvbkVycm9yXCIpKXt2YXIgcj1lLmdldFZhbGlkYXRpb25FcnJvcigpO3I/KEJydXR1c2luRm9ybXMub25WYWxpZGF0aW9uRXJyb3IoZSxyKSx0PSExKTpCcnV0dXNpbkZvcm1zLm9uVmFsaWRhdGlvblN1Y2Nlc3MoZSl9aWYoZS5jaGlsZE5vZGVzKWZvcih2YXIgbj0wO248ZS5jaGlsZE5vZGVzLmxlbmd0aDtuKyspdmFsaWRhdGUoZS5jaGlsZE5vZGVzW25dKXx8KHQ9ITEpO3JldHVybiB0fWZ1bmN0aW9uIGNsZWFyKGUpe2lmKGUpZm9yKDtlLmZpcnN0Q2hpbGQ7KWUucmVtb3ZlQ2hpbGQoZS5maXJzdENoaWxkKX1mdW5jdGlvbiByZW5kZXIoZSx0LHIsbixhLGkpe3ZhciBvPWdldFNjaGVtYUlkKHIpLHM9Z2V0U2NoZW1hKG8pO3JlbmRlckluZm9NYXBbb109bmV3IE9iamVjdCxyZW5kZXJJbmZvTWFwW29dLnRpdGxlQ29udGFpbmVyPWUscmVuZGVySW5mb01hcFtvXS5jb250YWluZXI9dCxyZW5kZXJJbmZvTWFwW29dLnBhcmVudE9iamVjdD1uLHJlbmRlckluZm9NYXBbb10ucHJvcGVydHlQcm92aWRlcj1hLHJlbmRlckluZm9NYXBbb10udmFsdWU9aSxjbGVhcihlKSxjbGVhcih0KTt2YXIgdT1yZW5kZXJlcnNbcy50eXBlXTtpZih1JiYhcy5kZXBlbmRzT24pcy50aXRsZT9yZW5kZXJUaXRsZShlLHMudGl0bGUscyk6YSYmcmVuZGVyVGl0bGUoZSxhLmdldFZhbHVlKCkscyksaXx8KGk9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGluaXRpYWxWYWx1ZSYmbnVsbCE9PWluaXRpYWxWYWx1ZT9nZXRJbml0aWFsVmFsdWUocik6c1tcImRlZmF1bHRcIl0pLHUodCxyLG4sYSxpKTtlbHNlIGlmKHMuJHJlZiYmb2JqLnNjaGVtYVJlc29sdmVyKXt2YXIgbD1mdW5jdGlvbihlKXtpZihlJiZlLmhhc093blByb3BlcnR5KHIpJiZKU09OLnN0cmluZ2lmeShzY2hlbWFNYXBbcl0pIT09SlNPTi5zdHJpbmdpZnkoZVtyXSkpe2NsZWFuU2NoZW1hTWFwKHIpLGNsZWFuRGF0YShyKSxwb3B1bGF0ZVNjaGVtYU1hcChyLGVbcl0pO3ZhciB0PXJlbmRlckluZm9NYXBbcl07dCYmcmVuZGVyKHQudGl0bGVDb250YWluZXIsdC5jb250YWluZXIscix0LnBhcmVudE9iamVjdCx0LnByb3BlcnR5UHJvdmlkZXIsdC52YWx1ZSl9QnJ1dHVzaW5Gb3Jtcy5vblJlc29sdXRpb25GaW5pc2hlZChuKX07QnJ1dHVzaW5Gb3Jtcy5vblJlc29sdXRpb25TdGFydGVkKG4pLG9iai5zY2hlbWFSZXNvbHZlcihbcl0sb2JqLmdldERhdGEoKSxsKX19ZnVuY3Rpb24gY3JlYXRlUHJvcGVydHlQcm92aWRlcihlLHQpe3ZhciByPW5ldyBPYmplY3Q7cmV0dXJuIHIuZ2V0VmFsdWU9ZSxyLm9uY2hhbmdlPXQscn1mdW5jdGlvbiBnZXRJbml0aWFsVmFsdWUoaWQpe3ZhciByZXQ7dHJ5e2V2YWwoXCJyZXQgPSBpbml0aWFsVmFsdWVcIitpZC5zdWJzdHJpbmcoMSkpfWNhdGNoKGUpe3JldD1udWxsfXJldHVybiByZXR9ZnVuY3Rpb24gZ2V0VmFsdWUoc2NoZW1hLGlucHV0KXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBpbnB1dC5nZXRWYWx1ZSlyZXR1cm4gaW5wdXQuZ2V0VmFsdWUoKTt2YXIgdmFsdWU7cmV0dXJuIHZhbHVlPVwic2VsZWN0XCI9PT1pbnB1dC50YWdOYW1lLnRvTG93ZXJDYXNlKCk/aW5wdXQub3B0aW9uc1tpbnB1dC5zZWxlY3RlZEluZGV4XS52YWx1ZTppbnB1dC52YWx1ZSxcIlwiPT09dmFsdWU/bnVsbDooXCJpbnRlZ2VyXCI9PT1zY2hlbWEudHlwZT8odmFsdWU9cGFyc2VJbnQodmFsdWUpLGlzRmluaXRlKHZhbHVlKXx8KHZhbHVlPW51bGwpKTpcIm51bWJlclwiPT09c2NoZW1hLnR5cGU/KHZhbHVlPXBhcnNlRmxvYXQodmFsdWUpLGlzRmluaXRlKHZhbHVlKXx8KHZhbHVlPW51bGwpKTpcImJvb2xlYW5cIj09PXNjaGVtYS50eXBlP1wiaW5wdXRcIj09PWlucHV0LnRhZ05hbWUudG9Mb3dlckNhc2UoKT8odmFsdWU9aW5wdXQuY2hlY2tlZCx2YWx1ZXx8KHZhbHVlPSExKSk6XCJzZWxlY3RcIj09PWlucHV0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSYmKHZhbHVlPVwidHJ1ZVwiPT09aW5wdXQudmFsdWU/ITA6XCJmYWxzZVwiPT09aW5wdXQudmFsdWU/ITE6bnVsbCk6XCJhbnlcIj09PXNjaGVtYS50eXBlJiZ2YWx1ZSYmZXZhbChcInZhbHVlPVwiK3ZhbHVlKSx2YWx1ZSl9ZnVuY3Rpb24gZ2V0U2NoZW1hSWQoZSl7cmV0dXJuIGUucmVwbGFjZSgvXFxbXCJbXlwiXSpcIlxcXS9nLFwiWypdXCIpLnJlcGxhY2UoL1xcW1xcZCpcXF0vZyxcIlsjXVwiKX1mdW5jdGlvbiBnZXRQYXJlbnRTY2hlbWFJZChlKXtyZXR1cm4gZS5zdWJzdHJpbmcoMCxlLmxhc3RJbmRleE9mKFwiLlwiKSl9ZnVuY3Rpb24gZ2V0U2NoZW1hKGUpe3JldHVybiBzY2hlbWFNYXBbZV19ZnVuY3Rpb24gY2xlYW5TY2hlbWFNYXAoZSl7Zm9yKHZhciB0IGluIHNjaGVtYU1hcCllLnN0YXJ0c1dpdGgodCkmJmRlbGV0ZSBzY2hlbWFNYXBbdF19ZnVuY3Rpb24gY2xlYW5EYXRhKGUpe3ZhciB0PW5ldyBFeHByZXNzaW9uKGUpO3QudmlzaXQoZGF0YSxmdW5jdGlvbihlLHQscil7ZGVsZXRlIHRbcl19KX1mdW5jdGlvbiBvbkRlcGVuZGVuY3lDaGFuZ2VkKGUsdCl7dmFyIHI9ZGVwZW5kZW5jeU1hcFtlXTtpZihyJiZvYmouc2NoZW1hUmVzb2x2ZXIpe3ZhciBuPWZ1bmN0aW9uKGUpe2lmKGUpZm9yKHZhciByIGluIGUpaWYoSlNPTi5zdHJpbmdpZnkoc2NoZW1hTWFwW3JdKSE9PUpTT04uc3RyaW5naWZ5KGVbcl0pKXtjbGVhblNjaGVtYU1hcChyKSxjbGVhbkRhdGEocikscG9wdWxhdGVTY2hlbWFNYXAocixlW3JdKTt2YXIgbj1yZW5kZXJJbmZvTWFwW3JdO24mJnJlbmRlcihuLnRpdGxlQ29udGFpbmVyLG4uY29udGFpbmVyLHIsbi5wYXJlbnRPYmplY3Qsbi5wcm9wZXJ0eVByb3ZpZGVyLG4udmFsdWUpfUJydXR1c2luRm9ybXMub25SZXNvbHV0aW9uRmluaXNoZWQodCl9O0JydXR1c2luRm9ybXMub25SZXNvbHV0aW9uU3RhcnRlZCh0KSxvYmouc2NoZW1hUmVzb2x2ZXIocixvYmouZ2V0RGF0YSgpLG4pfX1mdW5jdGlvbiBFeHByZXNzaW9uKGUpe2Z1bmN0aW9uIHQoZSl7aWYobnVsbD09PWUpcmV0dXJuIG51bGw7Zm9yKHZhciB0PW5ldyBBcnJheSxyPW51bGwsbj0wLGE9MDthPGUubGVuZ3RoO2ErKyknXCInPT09ZS5jaGFyQXQoYSk/bnVsbD09PXI/cj0nXCInOidcIic9PT1yJiYocj1udWxsLHRbdC5sZW5ndGhdPWUuc3Vic3RyaW5nKG4sYSsxKS50cmltKCksbj1hKzEpOlwiJ1wiPT09ZS5jaGFyQXQoYSk/bnVsbD09PXI/cj1cIidcIjpcIidcIj09PXImJihyPW51bGwsdFt0Lmxlbmd0aF09ZS5zdWJzdHJpbmcobixhKzEpLnRyaW0oKSxuPWErMSk6XCJbXCI9PT1lLmNoYXJBdChhKT9udWxsPT09ciYmKG4hPT1hJiYodFt0Lmxlbmd0aF09ZS5zdWJzdHJpbmcobixhKS50cmltKCkpLHRbdC5sZW5ndGhdPVwiW1wiLG49YSsxKTpcIl1cIj09PWUuY2hhckF0KGEpP251bGw9PT1yJiYobiE9PWEmJih0W3QubGVuZ3RoXT1lLnN1YnN0cmluZyhuLGEpLnRyaW0oKSksdFt0Lmxlbmd0aF09XCJdXCIsbj1hKzEpOlwiLlwiPT09ZS5jaGFyQXQoYSk/bnVsbD09PXImJihuIT09YSYmKHRbdC5sZW5ndGhdPWUuc3Vic3RyaW5nKG4sYSkudHJpbSgpKSxuPWErMSk6YT09PWUubGVuZ3RoLTEmJih0W3QubGVuZ3RoXT1lLnN1YnN0cmluZyhuLGErMSkudHJpbSgpKTtyZXR1cm4gdH0obnVsbD09PWV8fDA9PT1lLmxlbmd0aHx8XCIuXCI9PT1lKSYmKGU9XCIkXCIpO2Zvcih2YXIgcj1uZXcgQXJyYXksbj10KGUpLGE9ITEsaT0wLG89XCJcIixzPTA7czxuLmxlbmd0aDtzKyspe3ZhciB1PW5bc107aWYoXCJbXCI9PT11KXtpZihhKXRocm93XCJFcnJvciBwYXJzaW5nIGV4cHJlc3Npb24gJ1wiK2UrXCInOiBOZXN0ZWQgWyBmb3VuZFwiO2E9ITAsaT0wLG8rPXV9ZWxzZSBpZihcIl1cIj09PXUpe2lmKCFhKXRocm93XCJFcnJvciBwYXJzaW5nIGV4cHJlc3Npb24gJ1wiK2UrXCInOiBVbmJhbGFuY2VkIF0gZm91bmRcIjthPSExLG8rPXUscltyLmxlbmd0aF09byxvPVwiXCJ9ZWxzZSBpZihhKXtpZihpPjApdGhyb3dcIkVycm9yIHBhcnNpbmcgZXhwcmVzc2lvbiAnXCIrZStcIic6IE11bHRpcGxlIHRva2VucyBmb3VuZCBpbnNpZGUgYSBicmFja2V0XCI7bys9dSxpKyt9ZWxzZSByW3IubGVuZ3RoXT11O2lmKHM9PT1uLmxlbmd0aC0xJiZhKXRocm93XCJFcnJvciBwYXJzaW5nIGV4cHJlc3Npb24gJ1wiK2UrXCInOiBVbmJhbGFuY2VkIFsgZm91bmRcIn10aGlzLmV4cD1lLHRoaXMucXVldWU9cix0aGlzLnZpc2l0PWZ1bmN0aW9uKGUsdCl7ZnVuY3Rpb24gcihlLG4sYSxpLG8pe2lmKG51bGwhPWEpe3ZhciBzPW4uc2hpZnQoKTtpZihcIiRcIj09PXMpe2U9XCIkXCI7dmFyIHM9bi5zaGlmdCgpfWlmKHMpaWYoQXJyYXkuaXNBcnJheShhKSl7aWYoIXMuc3RhcnRzV2l0aChcIltcIikpdGhyb3dcIk5vZGUgJ1wiK2UrXCInIGlzIG9mIHR5cGUgYXJyYXlcIjt2YXIgdT1zLnN1YnN0cmluZygxLHMubGVuZ3RoLTEpO2lmKHUuZXF1YWxzKFwiI1wiKSlmb3IodmFyIGw9MDtsPGEubGVuZ3RoO2wrKyl7dmFyIGQ9YVtsXTtyKGUrcyxuLnNsaWNlKDApLGQsYSxsKSxyKGUrXCJbXCIrbCtcIl1cIixuLnNsaWNlKDApLGQsYSxsKX1lbHNlIGlmKFwiJFwiPT09dSl7dmFyIGQ9YVthLmxlbmd0aC0xXTtyKGUrcyxuLnNsaWNlKDApLGQsYSxhLmxlbmd0aC0xKX1lbHNle3ZhciBwPXBhcnNlSW50KHUpO2lmKGlzTmFOKHApKXRocm93XCJFbGVtZW50ICdcIit1K1wiJyBvZiBub2RlICdcIitlK1wiJyBpcyBub3QgYW4gaW50ZWdlciwgb3IgdGhlICckJyBsYXN0IGVsZW1lbnQgc3ltYm9sLCAgb3IgdGhlIHdpbGNhcmQgc3ltYm9sICcjJ1wiO2lmKDA+cCl0aHJvd1wiRWxlbWVudCAnXCIrdStcIicgb2Ygbm9kZSAnXCIrZStcIicgaXMgbG93ZXIgdGhhbiB6ZXJvXCI7dmFyIGQ9YVtwXTtyKGUrcyxuLnNsaWNlKDApLGQsYSxwKX19ZWxzZXtpZihcIm9iamVjdFwiIT10eXBlb2YgYSl0aHJvd1wiYm9vbGVhblwiPT10eXBlb2YgYXx8XCJudW1iZXJcIj09dHlwZW9mIGF8fFwic3RyaW5nXCI9PXR5cGVvZiBhP1wiTm9kZSBpcyBsZWFmIGJ1dCBzdGlsbCBhcmUgdG9rZW5zIHJlbWFpbmluZzogXCIrczpcIk5vZGUgdHlwZSAnXCIrdHlwZW9mIGErXCInIG5vdCBzdXBwb3J0ZWQgZm9yIGluZGV4IGZpZWxkICdcIitlK1wiJ1wiO2lmKFwiWypdXCI9PT1zKWZvcih2YXIgYyBpbiBhKXt2YXIgZD1hW2NdO3IoZStzLG4uc2xpY2UoMCksZCxhLGMpLHIoZSsnW1wiJytjKydcIl0nLG4uc2xpY2UoMCksZCxhLGMpfWVsc2V7dmFyIGQ7aWYocy5zdGFydHNXaXRoKFwiW1wiKSl7dmFyIHU9cy5zdWJzdHJpbmcoMSxzLmxlbmd0aC0xKTtpZighdS5zdGFydHNXaXRoKCdcIicpJiYhdS5zdGFydHNXaXRoKFwiJ1wiKSl0aHJvd1wiRWxlbWVudCAnXCIrdStcIicgb2Ygbm9kZSAnXCIrZStcIicgbXVzdCBiZSBhIHN0cmluZyBleHByZXNzaW9uIG9yIHdpbGNhcmQgJyonXCI7dT11LnN1YnN0cmluZygxLHUubGVuZ3RoKCktMSksZSs9cyxkPWFbdV19ZWxzZSBlPWUubGVuZ3RoPjA/ZStcIi5cIitzOnMsZD1hW3NdO3IoZSxuLGQsYSxzKX19ZWxzZSB0KGEsaSxvKX19cih0aGlzLmV4cCx0aGlzLnF1ZXVlLGUpfX12YXIgU0NIRU1BX0FOWT17dHlwZTpcImFueVwifSxvYmo9bmV3IE9iamVjdCxzY2hlbWFNYXA9bmV3IE9iamVjdCxkZXBlbmRlbmN5TWFwPW5ldyBPYmplY3QscmVuZGVySW5mb01hcD1uZXcgT2JqZWN0LGNvbnRhaW5lcixkYXRhLGVycm9yLGluaXRpYWxWYWx1ZSxpbnB1dENvdW50ZXI9MCxyb290PXNjaGVtYSxmb3JtSWQ9XCJCcnV0dXNpbkZvcm1zI1wiK0JydXR1c2luRm9ybXMuaW5zdGFuY2VzLmxlbmd0aDtyZW5hbWVSZXF1aXJlZFByb3BldGllcyhzY2hlbWEpLHBvcHVsYXRlU2NoZW1hTWFwKFwiJFwiLHNjaGVtYSksdmFsaWRhdGVEZXBlbmN5TWFwSXNBY3ljbGljKCk7dmFyIHJlbmRlcmVycz1uZXcgT2JqZWN0O3JldHVybiByZW5kZXJlcnMuaW50ZWdlcj1mdW5jdGlvbihlLHQscixuLGEpe3JlbmRlcmVycy5zdHJpbmcoZSx0LHIsbixhKX0scmVuZGVyZXJzLm51bWJlcj1mdW5jdGlvbihlLHQscixuLGEpe3JlbmRlcmVycy5zdHJpbmcoZSx0LHIsbixhKX0scmVuZGVyZXJzLmFueT1mdW5jdGlvbihlLHQscixuLGEpe3JlbmRlcmVycy5zdHJpbmcoZSx0LHIsbixhKX0scmVuZGVyZXJzLnN0cmluZz1mdW5jdGlvbihlLHQscixuLGEpe3ZhciBpLG89Z2V0U2NoZW1hSWQodCkscz1nZXRQYXJlbnRTY2hlbWFJZChvKSx1PWdldFNjaGVtYShvKSxsPWdldFNjaGVtYShzKTtpZihcImFueVwiPT09dS50eXBlKWk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpLGEmJihpLnZhbHVlPUpTT04uc3RyaW5naWZ5KGEsbnVsbCw0KSx1LnJlYWRPbmx5JiYoaS5kaXNhYmxlZD0hMCkpO2Vsc2UgaWYodS5tZWRpYSlpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxpLnR5cGU9XCJmaWxlXCIsYXBwZW5kQ2hpbGQoaSxkLHUpO2Vsc2UgaWYodVtcImVudW1cIl0pe2lmKGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKSwhdS5yZXF1aXJlZCl7dmFyIGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSxwPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpO2QudmFsdWU9XCJcIixhcHBlbmRDaGlsZChkLHAsdSksYXBwZW5kQ2hpbGQoaSxkLHUpfWZvcih2YXIgYz0wLG09MDttPHVbXCJlbnVtXCJdLmxlbmd0aDttKyspe3ZhciBkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIikscD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh1W1wiZW51bVwiXVttXSk7ZC52YWx1ZT11W1wiZW51bVwiXVttXSxhcHBlbmRDaGlsZChkLHAsdSksYXBwZW5kQ2hpbGQoaSxkLHUpLGEmJnVbXCJlbnVtXCJdW21dPT09YSYmKGM9bSx1LnJlcXVpcmVkfHxjKyssdS5yZWFkT25seSYmKGkuZGlzYWJsZWQ9ITApKX0xPT09dVtcImVudW1cIl0ubGVuZ3RoP2kuc2VsZWN0ZWRJbmRleD0xOmkuc2VsZWN0ZWRJbmRleD1jfWVsc2V7aWYoaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksXCJpbnRlZ2VyXCI9PT11LnR5cGV8fFwibnVtYmVyXCI9PT11LnR5cGUpaS50eXBlPVwibnVtYmVyXCIsaS5zdGVwPXUuc3RlcD9cIlwiK3Uuc3RlcDpcImFueVwiLFwibnVtYmVyXCIhPXR5cGVvZiBhJiYoYT1udWxsKTtlbHNlIGlmKFwiZGF0ZS10aW1lXCI9PT11LmZvcm1hdCl0cnl7aS50eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIn1jYXRjaChmKXtpLnR5cGU9XCJ0ZXh0XCJ9ZWxzZVwiZW1haWxcIj09PXUuZm9ybWF0P2kudHlwZT1cImVtYWlsXCI6XCJ0ZXh0XCI9PT11LmZvcm1hdD9pPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTppLnR5cGU9XCJ0ZXh0XCI7bnVsbCE9PWEmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBhJiYoaS52YWx1ZT1hLHUucmVhZE9ubHkmJihpLmRpc2FibGVkPSEwKSl9cmV0dXJuIGkuc2NoZW1hPW8saS5zZXRBdHRyaWJ1dGUoXCJhdXRvY29ycmVjdFwiLFwib2ZmXCIpLGkuZ2V0VmFsaWRhdGlvbkVycm9yPWZ1bmN0aW9uKCl7dHJ5e3ZhciBlPWdldFZhbHVlKHUsaSk7aWYobnVsbD09PWUpe2lmKHUucmVxdWlyZWQpe2lmKCFsfHxcIm9iamVjdFwiIT09bC50eXBlKXJldHVybiBCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLnJlcXVpcmVkO2lmKGwucmVxdWlyZWQpcmV0dXJuIEJydXR1c2luRm9ybXMubWVzc2FnZXMucmVxdWlyZWQ7Zm9yKHZhciB0IGluIHIpaWYobnVsbCE9PXJbdF0pcmV0dXJuIEJydXR1c2luRm9ybXMubWVzc2FnZXMucmVxdWlyZWR9fWVsc2V7aWYodS5wYXR0ZXJuJiYhdS5wYXR0ZXJuLnRlc3QoZSkpcmV0dXJuIEJydXR1c2luRm9ybXMubWVzc2FnZXMucGF0dGVybi5mb3JtYXQodS5wYXR0ZXJuLnNvdXJjZSk7aWYodS5taW5MZW5ndGgmJighZXx8dS5taW5MZW5ndGg+ZS5sZW5ndGgpKXJldHVybiBCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLm1pbkxlbmd0aC5mb3JtYXQodS5taW5MZW5ndGgpO2lmKHUubWF4TGVuZ3RoJiZlJiZ1Lm1heExlbmd0aDxlLmxlbmd0aClyZXR1cm4gQnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5tYXhMZW5ndGguZm9ybWF0KHUubWF4TGVuZ3RoKX1pZihudWxsIT09ZSYmIWlzTmFOKGUpKXtpZih1Lm11bHRpcGxlT2YmJmUldS5tdWx0aXBsZU9mIT09MClyZXR1cm4gQnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5tdWx0aXBsZU9mLmZvcm1hdCh1Lm11bHRpcGxlT2YpO2lmKHUuaGFzT3duUHJvcGVydHkoXCJtYXhpbXVtXCIpKXtpZih1LmV4Y2x1c2l2ZU1heGltdW0mJmU+PXUubWF4aW11bSlyZXR1cm4gQnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5leGNsdXNpdmVNYXhpbXVtLmZvcm1hdCh1Lm1heGltdW0pO2lmKCF1LmV4Y2x1c2l2ZU1heGltdW0mJmU+dS5tYXhpbXVtKXJldHVybiBCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLm1heGltdW0uZm9ybWF0KHUubWF4aW11bSl9aWYodS5oYXNPd25Qcm9wZXJ0eShcIm1pbmltdW1cIikpe2lmKHUuZXhjbHVzaXZlTWluaW11bSYmZTw9dS5taW5pbXVtKXJldHVybiBCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLmV4Y2x1c2l2ZU1pbmltdW0uZm9ybWF0KHUubWluaW11bSk7aWYoIXUuZXhjbHVzaXZlTWluaW11bSYmZTx1Lm1pbmltdW0pcmV0dXJuIEJydXR1c2luRm9ybXMubWVzc2FnZXMubWluaW11bS5mb3JtYXQodS5taW5pbXVtKX19fWNhdGNoKG4pe3JldHVybiBCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLmludmFsaWRWYWx1ZX19LGkub25jaGFuZ2U9ZnVuY3Rpb24oKXt2YXIgZTt0cnl7ZT1nZXRWYWx1ZSh1LGkpfWNhdGNoKHQpe2U9bnVsbH1yP3Jbbi5nZXRWYWx1ZSgpXT1lOmRhdGE9ZSxvbkRlcGVuZGVuY3lDaGFuZ2VkKG8saSl9LHUuZGVzY3JpcHRpb24mJihpLnRpdGxlPXUuZGVzY3JpcHRpb24saS5wbGFjZWhvbGRlcj11LmRlc2NyaXB0aW9uKSxpLm9uY2hhbmdlKCksaS5pZD1nZXRJbnB1dElkKCksaW5wdXRDb3VudGVyKyssYXBwZW5kQ2hpbGQoZSxpLHUpLHJ9LHJlbmRlcmVyc1tcImJvb2xlYW5cIl09ZnVuY3Rpb24oZSx0LHIsbixhKXt2YXIgaSxvPWdldFNjaGVtYUlkKHQpLHM9Z2V0U2NoZW1hKG8pO2lmKHMucmVxdWlyZWQpaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksaS50eXBlPVwiY2hlY2tib3hcIixhPT09ITAmJihpLmNoZWNrZWQ9ITApO2Vsc2V7aT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO3ZhciB1PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiksbD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKTtsLnZhbHVlPVwiXCIsYXBwZW5kQ2hpbGQodSxsLHMpLGFwcGVuZENoaWxkKGksdSxzKTt2YXIgZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpLHA9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoQnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlc1tcInRydWVcIl0pO2QudmFsdWU9XCJ0cnVlXCIsYXBwZW5kQ2hpbGQoZCxwLHMpLGFwcGVuZENoaWxkKGksZCxzKTt2YXIgYz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpLG09ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoQnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlc1tcImZhbHNlXCJdKTtjLnZhbHVlPVwiZmFsc2VcIixhcHBlbmRDaGlsZChjLG0scyksYXBwZW5kQ2hpbGQoaSxjLHMpLGE9PT0hMD9pLnNlbGVjdGVkSW5kZXg9MTphPT09ITEmJihpLnNlbGVjdGVkSW5kZXg9Mil9aS5vbmNoYW5nZT1mdW5jdGlvbigpe3I/cltuLmdldFZhbHVlKCldPWdldFZhbHVlKHMsaSk6ZGF0YT1nZXRWYWx1ZShzLGkpLG9uRGVwZW5kZW5jeUNoYW5nZWQobyxpKX0saS5zY2hlbWE9byxpLmlkPWdldElucHV0SWQoKSxpbnB1dENvdW50ZXIrKyxzLmRlc2NyaXB0aW9uJiYoaS50aXRsZT1zLmRlc2NyaXB0aW9uKSxpLm9uY2hhbmdlKCksYXBwZW5kQ2hpbGQoZSxpLHMpfSxyZW5kZXJlcnMub25lT2Y9ZnVuY3Rpb24oZSx0LHIsbixhKXt2YXIgaT1nZXRTY2hlbWFJZCh0KSxvPWdldFNjaGVtYShpKSxzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiksdT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3UuaW5uZXJIVE1MPVwiXCIscy50eXBlPVwic2VsZWN0XCIscy5zY2hlbWE9aTt2YXIgbD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO2wudmFsdWU9bnVsbCxhcHBlbmRDaGlsZChzLGwsbyk7Zm9yKHZhciBkPTA7ZDxvLm9uZU9mLmxlbmd0aDtkKyspe3ZhciBwPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiksYz1pK1wiLlwiK2QsbT1nZXRTY2hlbWEoYyksZj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShtLnRpdGxlKTtpZihwLnZhbHVlPW8ub25lT2ZbZF0sYXBwZW5kQ2hpbGQocCxmLG8pLGFwcGVuZENoaWxkKHMscCxvKSx2b2lkIDAhPT1hJiZudWxsIT09YSYmKG8ucmVhZE9ubHkmJihzLmRpc2FibGVkPSEwKSxhLmhhc093blByb3BlcnR5KFwidHlwZVwiKSYmbS5oYXNPd25Qcm9wZXJ0eShcInByb3BlcnRpZXNcIikmJm0ucHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShcInR5cGVcIikpKXt2YXIgaD1nZXRTY2hlbWEobS5wcm9wZXJ0aWVzLnR5cGUpO2EudHlwZT09PWhbXCJlbnVtXCJdWzBdJiYocy5zZWxlY3RlZEluZGV4PWQrMSxyZW5kZXIobnVsbCx1LHQrXCIuXCIrKHMuc2VsZWN0ZWRJbmRleC0xKSxyLG4sYSkpfX1zLm9uY2hhbmdlPWZ1bmN0aW9uKCl7cmVuZGVyKG51bGwsdSx0K1wiLlwiKyhzLnNlbGVjdGVkSW5kZXgtMSkscixuLGEpfSxhcHBlbmRDaGlsZChlLHMsbyksYXBwZW5kQ2hpbGQoZSx1LG8pfSxyZW5kZXJlcnMub2JqZWN0PWZ1bmN0aW9uKGUsdCxyLG4sYSl7ZnVuY3Rpb24gaShlKXt2YXIgdD1uZXcgT2JqZWN0O3JldHVybiB0LmdldFZhbHVlPWZ1bmN0aW9uKCl7cmV0dXJuIGV9LHQub25jaGFuZ2U9ZnVuY3Rpb24oZSl7fSx0fWZ1bmN0aW9uIG8oZSx0LHIsbixhLGkpe3ZhciBvPWdldFNjaGVtYUlkKHIpLHM9Z2V0U2NoZW1hKG8pLHU9dC50Qm9kaWVzWzBdLGw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpLGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO2QuY2xhc3NOYW1lPVwiYWRkLXByb3AtbmFtZVwiO3ZhciBwPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKSxjPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKSxtPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKSxmPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKSxoPVwiJFwiK09iamVjdC5rZXlzKGUpLmxlbmd0aCtcIiRcIix2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTt2LmNsYXNzTmFtZT1cInByb3AtdmFsdWVcIjt2YXIgZz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7Zy50eXBlPVwidGV4dFwiO3ZhciB5O2kmJih5PVJlZ0V4cChpKSksZy5nZXRWYWxpZGF0aW9uRXJyb3I9ZnVuY3Rpb24oKXtyZXR1cm4gZy5wcmV2aW91c1ZhbHVlIT09Zy52YWx1ZSYmZS5oYXNPd25Qcm9wZXJ0eShnLnZhbHVlKT9CcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLmFkZHByb3BOYW1lRXhpc3RlbnQ6Zy52YWx1ZT92b2lkIDA6QnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5hZGRwcm9wTmFtZVJlcXVpcmVkfTt2YXIgYj1jcmVhdGVQcm9wZXJ0eVByb3ZpZGVyKGZ1bmN0aW9uKCl7aWYoZy52YWx1ZSl7aWYoIXkpcmV0dXJuIGcudmFsdWU7aWYoLTEhPT1nLnZhbHVlLnNlYXJjaCh5KSlyZXR1cm4gZy52YWx1ZX1yZXR1cm4gaH0sZnVuY3Rpb24odCl7Yi5nZXRWYWx1ZSgpIT09dCYmKHQmJmUuaGFzT3duUHJvcGVydHkodCl8fCh0PWgpLChlLmhhc093blByb3BlcnR5KHQpfHx5JiYtMT09PWIuZ2V0VmFsdWUoKS5zZWFyY2goeSkpJiYoZVtiLmdldFZhbHVlKCldPWVbdF0sZGVsZXRlIGVbdF0pKX0pO2cub25ibHVyPWZ1bmN0aW9uKCl7aWYoZy5wcmV2aW91c1ZhbHVlIT09Zy52YWx1ZSl7Zm9yKHZhciB0PWcudmFsdWUscj0xO2cucHJldmlvdXNWYWx1ZSE9PXQmJmUuaGFzT3duUHJvcGVydHkodCk7KXQ9Zy52YWx1ZStcIihcIityK1wiKVwiLHIrKztyZXR1cm4gZy52YWx1ZT10LGIub25jaGFuZ2UoZy5wcmV2aW91c1ZhbHVlKSx2b2lkKGcucHJldmlvdXNWYWx1ZT1nLnZhbHVlKX19O3ZhciBQPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7UC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJidXR0b25cIiksUC5jbGFzc05hbWU9XCJyZW1vdmVcIixhcHBlbmRDaGlsZChQLGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwieFwiKSxzKSxQLm9uY2xpY2s9ZnVuY3Rpb24oKXtkZWxldGUgZVtnLnZhbHVlXSx0LmRlbGV0ZVJvdyhsLnJvd0luZGV4KSxnLnZhbHVlPW51bGwsYi5vbmNoYW5nZShnLnByZXZpb3VzVmFsdWUpfSxhcHBlbmRDaGlsZChtLGcscyksYXBwZW5kQ2hpbGQoZixQLHMpLGFwcGVuZENoaWxkKGMsbSxzKSxhcHBlbmRDaGlsZChjLGYscyksYXBwZW5kQ2hpbGQocCxjLHMpLGFwcGVuZENoaWxkKGQscCxzKSx2b2lkIDAhPT1pJiYoZy5wbGFjZWhvbGRlcj1pKSxhcHBlbmRDaGlsZChsLGQscyksYXBwZW5kQ2hpbGQobCx2LHMpLGFwcGVuZENoaWxkKHUsbCxzKSxhcHBlbmRDaGlsZCh0LHUscykscmVuZGVyKG51bGwsdixyLGUsYixhKSxuJiYoZy52YWx1ZT1uLGcub25ibHVyKCkpfXZhciBzPWdldFNjaGVtYUlkKHQpLHU9Z2V0U2NoZW1hKHMpLGw9bmV3IE9iamVjdDtyPyhuLmdldFZhbHVlKCl8fDA9PT1uLmdldFZhbHVlKCkpJiYocltuLmdldFZhbHVlKCldPWwpOmRhdGE9bDt2YXIgZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7ZC5jbGFzc05hbWU9XCJvYmplY3RcIjt2YXIgcD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7YXBwZW5kQ2hpbGQoZCxwLHUpO3ZhciBjPTA7aWYodS5oYXNPd25Qcm9wZXJ0eShcInByb3BlcnRpZXNcIikpe2M9dS5wcm9wZXJ0aWVzLmxlbmd0aDtmb3IodmFyIG0gaW4gdS5wcm9wZXJ0aWVzKXt2YXIgZj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIiksaD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7aC5jbGFzc05hbWU9XCJwcm9wLW5hbWVcIjt2YXIgdj10K1wiLlwiK20sZz1nZXRTY2hlbWEoZ2V0U2NoZW1hSWQodikpLHk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO3kuY2xhc3NOYW1lPVwicHJvcC12YWx1ZVwiLGFwcGVuZENoaWxkKHAsZixnKSxhcHBlbmRDaGlsZChmLGgsZyksYXBwZW5kQ2hpbGQoZix5LGcpO3ZhciBiPWkobSksUD1udWxsO2EmJihQPWFbbV0pLHJlbmRlcihoLHksdixsLGIsUCl9fXZhciBPPVtdO2lmKHUucGF0dGVyblByb3BlcnRpZXN8fHUuYWRkaXRpb25hbFByb3BlcnRpZXMpe3ZhciB3PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7aWYoYXBwZW5kQ2hpbGQodyxkLHUpLHUucGF0dGVyblByb3BlcnRpZXMpZm9yKHZhciB4IGluIHUucGF0dGVyblByb3BlcnRpZXMpe3ZhciBDPXUucGF0dGVyblByb3BlcnRpZXNbeF0sRT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO0UuY2xhc3NOYW1lPVwiYWRkLXBhdHRlcm4tZGl2XCI7dmFyIFM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtpZihTLnNldEF0dHJpYnV0ZShcInR5cGVcIixcImJ1dHRvblwiKSxTLnBhdHRlcm49eCxTLmlkPXQrXCJbXCIreCtcIl1cIixTLm9uY2xpY2s9ZnVuY3Rpb24oKXtvKGwsZCx0aGlzLmlkLHZvaWQgMCx2b2lkIDAsdGhpcy5wYXR0ZXJuKX0sKHUubWF4UHJvcGVydGllc3x8dS5taW5Qcm9wZXJ0aWVzKSYmKFMuZ2V0VmFsaWRhdGlvbkVycm9yPWZ1bmN0aW9uKCl7cmV0dXJuIHUubWluUHJvcGVydGllcyYmYytkLnJvd3MubGVuZ3RoPHUubWluUHJvcGVydGllcz9CcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLm1pblByb3BlcnRpZXMuZm9ybWF0KHUubWluUHJvcGVydGllcyk6dS5tYXhQcm9wZXJ0aWVzJiZjK2Qucm93cy5sZW5ndGg+dS5tYXhQcm9wZXJ0aWVzP0JydXR1c2luRm9ybXMubWVzc2FnZXMubWF4UHJvcGVydGllcy5mb3JtYXQodS5tYXhQcm9wZXJ0aWVzKTp2b2lkIDB9KSxDLmRlc2NyaXB0aW9uJiYoUy50aXRsZT1DLmRlc2NyaXB0aW9uKSxhcHBlbmRDaGlsZChTLGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiQWRkIFwiK3gpLHUpLGFwcGVuZENoaWxkKEUsUyx1KSxhKWZvcih2YXIgSSBpbiBhKWlmKCF1LnByb3BlcnRpZXN8fCF1LnByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoSSkpe3ZhciBOPVJlZ0V4cCh4KTstMSE9PUkuc2VhcmNoKE4pJiYtMT09PU8uaW5kZXhPZihJKSYmKG8obCxkLHQrXCJbXCIreCtcIl1cIixJLGFbSV0seCksTy5wdXNoKEkpKX1hcHBlbmRDaGlsZCh3LEUsdSl9aWYodS5hZGRpdGlvbmFsUHJvcGVydGllcyl7dmFyIEY9Z2V0U2NoZW1hKHUuYWRkaXRpb25hbFByb3BlcnRpZXMpLFM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtpZihTLnNldEF0dHJpYnV0ZShcInR5cGVcIixcImJ1dHRvblwiKSxTLm9uY2xpY2s9ZnVuY3Rpb24oKXtvKGwsZCx0K1wiWypdXCIsdm9pZCAwKX0sKHUubWF4UHJvcGVydGllc3x8dS5taW5Qcm9wZXJ0aWVzKSYmKFMuZ2V0VmFsaWRhdGlvbkVycm9yPWZ1bmN0aW9uKCl7cmV0dXJuIHUubWluUHJvcGVydGllcyYmYytkLnJvd3MubGVuZ3RoPHUubWluUHJvcGVydGllcz9CcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLm1pblByb3BlcnRpZXMuZm9ybWF0KHUubWluUHJvcGVydGllcyk6dS5tYXhQcm9wZXJ0aWVzJiZjK2Qucm93cy5sZW5ndGg+dS5tYXhQcm9wZXJ0aWVzP0JydXR1c2luRm9ybXMubWVzc2FnZXMubWF4UHJvcGVydGllcy5mb3JtYXQodS5tYXhQcm9wZXJ0aWVzKTp2b2lkIDB9KSxGLmRlc2NyaXB0aW9uJiYoUy50aXRsZT1GLmRlc2NyaXB0aW9uKSxhcHBlbmRDaGlsZChTLGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiQWRkXCIpLHUpLGFwcGVuZENoaWxkKHcsUyx1KSxhKWZvcih2YXIgSSBpbiBhKXUucHJvcGVydGllcyYmdS5wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KEkpfHwtMT09PU8uaW5kZXhPZihJKSYmbyhsLGQsdCsnW1wiJyttKydcIl0nLEksYVtJXSl9YXBwZW5kQ2hpbGQoZSx3LHUpfWVsc2UgYXBwZW5kQ2hpbGQoZSxkLHUpfSxyZW5kZXJlcnMuYXJyYXk9ZnVuY3Rpb24oZSx0LHIsbixhKXtmdW5jdGlvbiBpKGUsdCxyLG4sYSl7dmFyIGk9Z2V0U2NoZW1hSWQociksbz1nZXRTY2hlbWEoaSkscz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIiksdT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7dS5jbGFzc05hbWU9XCJpdGVtXCI7dmFyIGw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO2wuY2xhc3NOYW1lPVwiaXRlbS1pbmRleFwiO3ZhciBkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtkLmNsYXNzTmFtZT1cIml0ZW0tYWN0aW9uXCI7dmFyIHA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO3AuY2xhc3NOYW1lPVwiaXRlbS12YWx1ZVwiO3ZhciBjPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7Yy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJidXR0b25cIiksYy5jbGFzc05hbWU9XCJyZW1vdmVcIixhPT09ITAmJihjLmRpc2FibGVkPSEwKSxhcHBlbmRDaGlsZChjLGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwieFwiKSxvKTt2YXIgbT1mdW5jdGlvbigpe2Zvcih2YXIgZT0wO2U8dC5yb3dzLmxlbmd0aDtlKyspe3ZhciByPXQucm93c1tlXTtyLmNlbGxzWzBdLmlubmVySFRNTD1lKzF9fTtjLm9uY2xpY2s9ZnVuY3Rpb24oKXtlLnNwbGljZSh1LnJvd0luZGV4LDEpLHQuZGVsZXRlUm93KHUucm93SW5kZXgpLG0oKX0sYXBwZW5kQ2hpbGQoZCxjLG8pO3ZhciBmPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHQucm93cy5sZW5ndGgrMSk7YXBwZW5kQ2hpbGQobCxmLG8pLGFwcGVuZENoaWxkKHUsbCxvKSxhcHBlbmRDaGlsZCh1LGQsbyksYXBwZW5kQ2hpbGQodSxwLG8pLGFwcGVuZENoaWxkKHMsdSxvKSxhcHBlbmRDaGlsZCh0LHMsbyk7dmFyIGg9Y3JlYXRlUHJvcGVydHlQcm92aWRlcihmdW5jdGlvbigpe3JldHVybiB1LnJvd0luZGV4fSk7cmVuZGVyKG51bGwscCxyLGUsaCxuKX12YXIgbz1nZXRTY2hlbWFJZCh0KSxzPWdldFNjaGVtYShvKSx1PWdldFNjaGVtYShzLml0ZW1zKSxsPW5ldyBBcnJheTtyPyhuLmdldFZhbHVlKCl8fDA9PT1uLmdldFZhbHVlKCkpJiYocltuLmdldFZhbHVlKCldPWwpOmRhdGE9bCxuJiYobi5vbmNoYW5nZT1mdW5jdGlvbihlKXtkZWxldGUgcltlXSxyW24uZ2V0VmFsdWUoKV09bH0pO3ZhciBkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikscD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7cC5jbGFzc05hbWU9XCJhcnJheVwiLGFwcGVuZENoaWxkKGQscCxzKSxhcHBlbmRDaGlsZChlLGQscyk7dmFyIGM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtpZihzLnJlYWRPbmx5JiYoYy5kaXNhYmxlZD0hMCksYy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJidXR0b25cIiksYy5nZXRWYWxpZGF0aW9uRXJyb3I9ZnVuY3Rpb24oKXtpZihzLm1pbkl0ZW1zJiZzLm1pbkl0ZW1zPnAucm93cy5sZW5ndGgpcmV0dXJuIEJydXR1c2luRm9ybXMubWVzc2FnZXMubWluSXRlbXMuZm9ybWF0KHMubWluSXRlbXMpO2lmKHMubWF4SXRlbXMmJnMubWF4SXRlbXM8cC5yb3dzLmxlbmd0aClyZXR1cm4gQnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5tYXhJdGVtcy5mb3JtYXQocy5tYXhJdGVtcyk7aWYocy51bmlxdWVJdGVtcylmb3IodmFyIGU9MDtlPGwubGVuZ3RoO2UrKylmb3IodmFyIHQ9ZSsxO3Q8bC5sZW5ndGg7dCsrKWlmKEpTT04uc3RyaW5naWZ5KGxbZV0pPT09SlNPTi5zdHJpbmdpZnkobFt0XSkpcmV0dXJuIEJydXR1c2luRm9ybXMubWVzc2FnZXMudW5pcXVlSXRlbXN9LGMub25jbGljaz1mdW5jdGlvbigpe2kobCxwLHQrXCJbI11cIixudWxsKX0sdS5kZXNjcmlwdGlvbiYmKGMudGl0bGU9dS5kZXNjcmlwdGlvbiksYXBwZW5kQ2hpbGQoYyxkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLmFkZEl0ZW0pLHMpLGFwcGVuZENoaWxkKGQscCxzKSxhcHBlbmRDaGlsZChkLGMscyksYSYmYSBpbnN0YW5jZW9mIEFycmF5KWZvcih2YXIgbT0wO208YS5sZW5ndGg7bSsrKWkobCxwLHQrXCJbXCIrbStcIl1cIixhW21dLHMucmVhZE9ubHkpO2FwcGVuZENoaWxkKGUsZCxzKX0sb2JqLnJlbmRlcj1mdW5jdGlvbihlLHQpe2NvbnRhaW5lcj1lLGluaXRpYWxWYWx1ZT10O3ZhciByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO2lmKHIuY2xhc3NOYW1lPVwiYnJ1dHVzaW4tZm9ybVwiLHIub25zdWJtaXQ9ZnVuY3Rpb24oZSl7cmV0dXJuITF9LGNvbnRhaW5lcj9hcHBlbmRDaGlsZChjb250YWluZXIscik6YXBwZW5kQ2hpbGQoZG9jdW1lbnQuYm9keSxyKSxlcnJvcil7dmFyIG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpLGE9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZXJyb3IpO2FwcGVuZENoaWxkKG4sYSksbi5jbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCIsYXBwZW5kQ2hpbGQocixuKX1lbHNlIHJlbmRlcihudWxsLHIsXCIkXCIsbnVsbCxudWxsKTtkZXBlbmRlbmN5TWFwLmhhc093blByb3BlcnR5KFwiJFwiKSYmb25EZXBlbmRlbmN5Q2hhbmdlZChcIiRcIiksQnJ1dHVzaW5Gb3Jtcy5wb3N0UmVuZGVyJiZCcnV0dXNpbkZvcm1zLnBvc3RSZW5kZXIob2JqKX0sb2JqLmdldFJlbmRlcmluZ0NvbnRhaW5lcj1mdW5jdGlvbigpe3JldHVybiBjb250YWluZXJ9LG9iai52YWxpZGF0ZT1mdW5jdGlvbigpe3JldHVybiB2YWxpZGF0ZShjb250YWluZXIpfSxvYmouZ2V0RGF0YT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxyKXtpZihudWxsPT09cyYmKHM9U0NIRU1BX0FOWSksci4kcmVmJiYocj1nZXREZWZpbml0aW9uKHIuJHJlZikpLHQgaW5zdGFuY2VvZiBBcnJheSl7aWYoMD09PXQubGVuZ3RoKXJldHVybiBudWxsO2Zvcih2YXIgbj1uZXcgQXJyYXksYT0wO2E8dC5sZW5ndGg7YSsrKW5bYV09ZSh0W2FdLHIuaXRlbXMpO3JldHVybiBufWlmKFwiXCI9PT10KXJldHVybiBudWxsO2lmKHQgaW5zdGFuY2VvZiBPYmplY3Qpe3ZhciBuPW5ldyBPYmplY3QsaT0hMTtmb3IodmFyIG8gaW4gdClpZighby5zdGFydHNXaXRoKFwiJFwiKXx8IW8uZW5kc1dpdGgoXCIkXCIpKXt2YXIgcz1udWxsO2lmKHIuaGFzT3duUHJvcGVydHkoXCJwcm9wZXJ0aWVzXCIpJiZyLnByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkobykmJihzPXIucHJvcGVydGllc1tvXSksbnVsbD09PXMmJnIuaGFzT3duUHJvcGVydHkoXCJhZGRpdGlvbmFsUHJvcGVydGllc1wiKSYmXCJvYmplY3RcIj09dHlwZW9mIHIuYWRkaXRpb25hbFByb3BlcnRpZXMmJihzPXIuYWRkaXRpb25hbFByb3BlcnRpZXMpLG51bGw9PT1zJiZyLmhhc093blByb3BlcnR5KFwicGF0dGVyblByb3BlcnRpZXNcIikpZm9yKHZhciB1IGluIHIucGF0dGVyblByb3BlcnRpZXMpe3ZhciBsPVJlZ0V4cCh1KTtpZigtMSE9PW8uc2VhcmNoKGwpKXtzPXIucGF0dGVyblByb3BlcnRpZXNbdV07YnJlYWt9fXZhciBkPWUodFtvXSxzKTtudWxsIT09ZCYmKG5bb109ZCxpPSEwKX1yZXR1cm4gaXx8ci5yZXF1aXJlZD9uOm51bGx9cmV0dXJuIHR9cmV0dXJuIGNvbnRhaW5lcj9lKGRhdGEsc2NoZW1hKTpudWxsfSxCcnV0dXNpbkZvcm1zLmluc3RhbmNlc1tCcnV0dXNpbkZvcm1zLmluc3RhbmNlcy5sZW5ndGhdPW9iaixvYmp9LGJydXR1c2luW1wianNvbi1mb3Jtc1wiXT1CcnV0dXNpbkZvcm1zfSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9icnV0dXNpbi1qc29uLWZvcm1zL2Rpc3QvanMvYnJ1dHVzaW4tanNvbi1mb3Jtcy5taW4uanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmFzZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIhZnVuY3Rpb24oZil7aWYoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUpbW9kdWxlLmV4cG9ydHM9ZigpO2Vsc2UgaWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kKWRlZmluZShbXSxmKTtlbHNleyhcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzpcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsP2dsb2JhbDpcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZj9zZWxmOnRoaXMpLk1ldGVvckVtb2ppPWYoKX19KGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhufHxlKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c31mb3IodmFyIGk9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30oezE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpeyFmdW5jdGlvbihnbG9iYWwsZmFjdG9yeSl7aWYodm9pZCAwIT09ZXhwb3J0cylmYWN0b3J5KG1vZHVsZSk7ZWxzZXt2YXIgbW9kPXtleHBvcnRzOnt9fTtmYWN0b3J5KG1vZCksZ2xvYmFsLm1ldGVvckVtb2ppPW1vZC5leHBvcnRzfX0odGhpcyxmdW5jdGlvbihtb2R1bGUpe1widXNlIHN0cmljdFwiO3ZhciBfY3JlYXRlQ2xhc3M9ZnVuY3Rpb24oKXtmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCxwcm9wcyl7Zm9yKHZhciBpPTA7aTxwcm9wcy5sZW5ndGg7aSsrKXt2YXIgZGVzY3JpcHRvcj1wcm9wc1tpXTtkZXNjcmlwdG9yLmVudW1lcmFibGU9ZGVzY3JpcHRvci5lbnVtZXJhYmxlfHwhMSxkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBkZXNjcmlwdG9yJiYoZGVzY3JpcHRvci53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCxkZXNjcmlwdG9yLmtleSxkZXNjcmlwdG9yKX19cmV0dXJuIGZ1bmN0aW9uKENvbnN0cnVjdG9yLHByb3RvUHJvcHMsc3RhdGljUHJvcHMpe3JldHVybiBwcm90b1Byb3BzJiZkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSxwcm90b1Byb3BzKSxzdGF0aWNQcm9wcyYmZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3RvcixzdGF0aWNQcm9wcyksQ29uc3RydWN0b3J9fSgpLE1ldGVvckVtb2ppPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gTWV0ZW9yRW1vamkoKXshZnVuY3Rpb24oaW5zdGFuY2UsQ29uc3RydWN0b3Ipe2lmKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX0odGhpcyxNZXRlb3JFbW9qaSksdGhpcy5pbml0aWF0ZSgpfXJldHVybiBfY3JlYXRlQ2xhc3MoTWV0ZW9yRW1vamksW3trZXk6XCJpbml0aWF0ZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIF90aGlzPXRoaXM7ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbWV0ZW9yLWVtb2ppPVwidHJ1ZVwiXSwgW2RhdGEtbWV0ZW9yLWVtb2ppLWxhcmdlPVwidHJ1ZVwiXScpLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCl7X3RoaXMuZ2VuZXJhdGVFbGVtZW50cyhlbGVtZW50KX0pfX0se2tleTpcImdlbmVyYXRlRWxlbWVudHNcIix2YWx1ZTpmdW5jdGlvbihlbW9qaUlucHV0KXt2YXIgY2xpY2tMaW5rPWZ1bmN0aW9uKGV2ZW50KXt2YXIgY2FyZXRQb3M9ZW1vamlJbnB1dC5zZWxlY3Rpb25TdGFydDtlbW9qaUlucHV0LnZhbHVlPWVtb2ppSW5wdXQudmFsdWUuc3Vic3RyaW5nKDAsY2FyZXRQb3MpK1wiIFwiK2V2ZW50LnRhcmdldC5pbm5lckhUTUwrZW1vamlJbnB1dC52YWx1ZS5zdWJzdHJpbmcoY2FyZXRQb3MpLGVtb2ppUGlja2VyLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBhbmd1bGFyJiZhbmd1bGFyLmVsZW1lbnQoZW1vamlJbnB1dCkudHJpZ2dlckhhbmRsZXIoXCJjaGFuZ2VcIil9LGNsaWNrQ2F0ZWdvcnk9ZnVuY3Rpb24oZXZlbnQpe2Vtb2ppSW5wdXQuc2VsZWN0aW9uU3RhcnQ7ZW1vamlQaWNrZXIuc3R5bGUuZGlzcGxheT1cImJsb2NrXCI7Zm9yKHZhciBoaWRlVWxzPWVtb2ppUGlja2VyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ1bFwiKSxpPTEsbD1oaWRlVWxzLmxlbmd0aDtpPGw7aSsrKWhpZGVVbHNbaV0uc3R5bGUuZGlzcGxheT1cIm5vbmVcIjt2YXIgYmFja2dyb3VuZFRvZ2dsZT1lbW9qaVBpY2tlci5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhdGVnb3J5IGFcIik7Zm9yKGk9MCxsPWJhY2tncm91bmRUb2dnbGUubGVuZ3RoO2k8bDtpKyspYmFja2dyb3VuZFRvZ2dsZVtpXS5zdHlsZS5iYWNrZ3JvdW5kPVwibm9uZVwiO2Vtb2ppUGlja2VyLnF1ZXJ5U2VsZWN0b3IoXCIuXCIrZXZlbnQudGFyZ2V0LmlkKS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIixlbW9qaVBpY2tlci5xdWVyeVNlbGVjdG9yKFwiI1wiK2V2ZW50LnRhcmdldC5pZCkuc3R5bGUuYmFja2dyb3VuZD1cIiNjMmMyYzJcIn07ZW1vamlJbnB1dC5zdHlsZS53aWR0aD1cIjEwMCVcIjt2YXIgZW1vamlDb250YWluZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlbW9qaUNvbnRhaW5lci5zdHlsZS5wb3NpdGlvbj1cInJlbGF0aXZlXCIsZW1vamlJbnB1dC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChlbW9qaUNvbnRhaW5lcixlbW9qaUlucHV0KSxlbW9qaUNvbnRhaW5lci5hcHBlbmRDaGlsZChlbW9qaUlucHV0KTt2YXIgZW1vamlQaWNrZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlbW9qaVBpY2tlci50YWJJbmRleD0wLGVtb2ppSW5wdXQuaGFzQXR0cmlidXRlKFwiZGF0YS1tZXRlb3ItZW1vamktbGFyZ2VcIik/KGVtb2ppUGlja2VyLnN0eWxlLnpJbmRleD1cIjk5OVwiLGVtb2ppUGlja2VyLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiLGVtb2ppUGlja2VyLnN0eWxlLndpZHRoPVwiMTAwJVwiLGVtb2ppUGlja2VyLnN0eWxlLm1hcmdpbkJvdHRvbT1cIjE1cHhcIik6KGVtb2ppUGlja2VyLnN0eWxlLnBvc2l0aW9uPVwiYWJzb2x1dGVcIixlbW9qaVBpY2tlci5zdHlsZS5yaWdodD1cIjBweFwiLGVtb2ppUGlja2VyLnN0eWxlLnRvcD1cIjMwcHhcIixlbW9qaVBpY2tlci5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLGVtb2ppUGlja2VyLnN0eWxlLndpZHRoPVwiNDAwcHhcIiksZW1vamlQaWNrZXIuc3R5bGUuekluZGV4PVwiOTk5XCIsZW1vamlQaWNrZXIuc3R5bGUub3ZlcmZsb3c9XCJoaWRkZW5cIixlbW9qaVBpY2tlci5zdHlsZS5iYWNrZ3JvdW5kPVwiI2ZmZlwiLGVtb2ppUGlja2VyLnN0eWxlLmJvcmRlclJhZGl1cz1cIjVweFwiLGVtb2ppUGlja2VyLnN0eWxlLmJveFNoYWRvdz1cIjAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjIzKVwiLGVtb2ppUGlja2VyLnN0eWxlLmJvcmRlclJhZGl1cz1cIjJweDtcIixlbW9qaVBpY2tlci5zdHlsZS5tYXJnaW5Ub3A9XCI1cHhcIixlbW9qaVBpY2tlci5zdHlsZS5vdXRsaW5lPVwibm9uZVwiO3ZhciBlbW9qaVRyaWdnZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7ZW1vamlUcmlnZ2VyLnN0eWxlLnBvc2l0aW9uPVwiYWJzb2x1dGVcIixlbW9qaVRyaWdnZXIuc3R5bGUudG9wPVwiMTBweFwiLGVtb2ppVHJpZ2dlci5zdHlsZS5yaWdodD1cIjEwcHhcIixlbW9qaVRyaWdnZXIuc3R5bGUudGV4dERlY29yYXRpb249XCJub25lXCIsZW1vamlUcmlnZ2VyLnNldEF0dHJpYnV0ZShcImhyZWZcIixcImphdmFzY3JpcHQ6dm9pZCgwKVwiKSxlbW9qaVRyaWdnZXIuaW5uZXJIVE1MPSc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDEyIDE0XCI+PHBhdGggZD1cIk04LjkgOC40cS0wLjMgMC45LTEuMSAxLjV0LTEuOCAwLjYtMS44LTAuNi0xLjEtMS41cS0wLjEtMC4yIDAtMC40dDAuMy0wLjJxMC4yLTAuMSAwLjQgMHQwLjIgMC4zcTAuMiAwLjYgMC43IDF0MS4yIDAuNCAxLjItMC40IDAuNy0xcTAuMS0wLjIgMC4zLTAuM3QwLjQgMCAwLjMgMC4yIDAgMC40ek01IDVxMCAwLjQtMC4zIDAuN3QtMC43IDAuMy0wLjctMC4zLTAuMy0wLjcgMC4zLTAuNyAwLjctMC4zIDAuNyAwLjMgMC4zIDAuN3pNOSA1cTAgMC40LTAuMyAwLjd0LTAuNyAwLjMtMC43LTAuMy0wLjMtMC43IDAuMy0wLjcgMC43LTAuMyAwLjcgMC4zIDAuMyAwLjd6TTExIDdxMC0xLTAuNC0xLjl0LTEuMS0xLjYtMS42LTEuMS0xLjktMC40LTEuOSAwLjQtMS42IDEuMS0xLjEgMS42LTAuNCAxLjkgMC40IDEuOSAxLjEgMS42IDEuNiAxLjEgMS45IDAuNCAxLjktMC40IDEuNi0xLjEgMS4xLTEuNiAwLjQtMS45ek0xMiA3cTAgMS42LTAuOCAzdC0yLjIgMi4yLTMgMC44LTMtMC44LTIuMi0yLjItMC44LTMgMC44LTMgMi4yLTIuMiAzLTAuOCAzIDAuOCAyLjIgMi4yIDAuOCAzelwiLz48L3N2Zz4nLGVtb2ppVHJpZ2dlci5vbmNsaWNrPWZ1bmN0aW9uKCl7XCJub25lXCI9PT1lbW9qaVBpY2tlci5zdHlsZS5kaXNwbGF5P2Vtb2ppUGlja2VyLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiOlwiYmxvY2tcIj09PWVtb2ppUGlja2VyLnN0eWxlLmRpc3BsYXkmJihlbW9qaVBpY2tlci5zdHlsZS5kaXNwbGF5PVwibm9uZVwiKSxlbW9qaVBpY2tlci5mb2N1cygpfSxlbW9qaUlucHV0Lmhhc0F0dHJpYnV0ZShcImRhdGEtbWV0ZW9yLWVtb2ppLWxhcmdlXCIpfHxlbW9qaUNvbnRhaW5lci5hcHBlbmRDaGlsZChlbW9qaVRyaWdnZXIpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbihlKXtlbW9qaUlucHV0Lmhhc0F0dHJpYnV0ZShcImRhdGEtbWV0ZW9yLWVtb2ppLWxhcmdlXCIpfHxcImJsb2NrXCI9PT1lbW9qaVBpY2tlci5zdHlsZS5kaXNwbGF5JiYoZW1vamlQaWNrZXIuY29udGFpbnMoZS50YXJnZXQpfHxlbW9qaVRyaWdnZXIuY29udGFpbnMoZS50YXJnZXQpfHwoZW1vamlQaWNrZXIuc3R5bGUuZGlzcGxheT1cIm5vbmVcIikpfSk7dmFyIGZhY2VzQ2F0ZWdvcnk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO2ZhY2VzQ2F0ZWdvcnkuc3R5bGUucGFkZGluZz1cIjEwcHggMHB4XCIsZmFjZXNDYXRlZ29yeS5zdHlsZS5tYXJnaW49XCIwXCIsZmFjZXNDYXRlZ29yeS5zdHlsZS5saXN0U3R5bGU9XCJub25lXCIsZmFjZXNDYXRlZ29yeS5zdHlsZS50ZXh0QWxpZ249XCJsZWZ0XCIsZmFjZXNDYXRlZ29yeS5zdHlsZS5tYXJnaW5MZWZ0PVwiMyVcIixmYWNlc0NhdGVnb3J5LmNsYXNzTGlzdC5hZGQoXCJmYWNlc1wiKTt2YXIgYW5pbWFsc0NhdGVnb3J5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTthbmltYWxzQ2F0ZWdvcnkuc3R5bGUucGFkZGluZz1cIjEwcHggMHB4XCIsYW5pbWFsc0NhdGVnb3J5LnN0eWxlLm1hcmdpbj1cIjBcIixhbmltYWxzQ2F0ZWdvcnkuc3R5bGUubGlzdFN0eWxlPVwibm9uZVwiLGFuaW1hbHNDYXRlZ29yeS5zdHlsZS50ZXh0QWxpZ249XCJsZWZ0XCIsYW5pbWFsc0NhdGVnb3J5LnN0eWxlLm1hcmdpbkxlZnQ9XCIzJVwiLGFuaW1hbHNDYXRlZ29yeS5jbGFzc0xpc3QuYWRkKFwiYW5pbWFsc1wiKSxhbmltYWxzQ2F0ZWdvcnkuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjt2YXIgZm9vZENhdGVnb3J5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtmb29kQ2F0ZWdvcnkuc3R5bGUucGFkZGluZz1cIjEwcHggMHB4XCIsZm9vZENhdGVnb3J5LnN0eWxlLm1hcmdpbj1cIjBcIixmb29kQ2F0ZWdvcnkuc3R5bGUubGlzdFN0eWxlPVwibm9uZVwiLGZvb2RDYXRlZ29yeS5zdHlsZS50ZXh0QWxpZ249XCJsZWZ0XCIsZm9vZENhdGVnb3J5LnN0eWxlLm1hcmdpbkxlZnQ9XCIzJVwiLGZvb2RDYXRlZ29yeS5jbGFzc0xpc3QuYWRkKFwiZm9vZFwiKSxmb29kQ2F0ZWdvcnkuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjt2YXIgc3BvcnRDYXRlZ29yeT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7c3BvcnRDYXRlZ29yeS5zdHlsZS5wYWRkaW5nPVwiMTBweCAwcHhcIixzcG9ydENhdGVnb3J5LnN0eWxlLm1hcmdpbj1cIjBcIixzcG9ydENhdGVnb3J5LnN0eWxlLmxpc3RTdHlsZT1cIm5vbmVcIixzcG9ydENhdGVnb3J5LnN0eWxlLnRleHRBbGlnbj1cImxlZnRcIixzcG9ydENhdGVnb3J5LnN0eWxlLm1hcmdpbkxlZnQ9XCIzJVwiLHNwb3J0Q2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChcInNwb3J0XCIpLHNwb3J0Q2F0ZWdvcnkuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjt2YXIgdHJhbnNwb3J0Q2F0ZWdvcnk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO3RyYW5zcG9ydENhdGVnb3J5LnN0eWxlLnBhZGRpbmc9XCIxMHB4IDBweFwiLHRyYW5zcG9ydENhdGVnb3J5LnN0eWxlLm1hcmdpbj1cIjBcIix0cmFuc3BvcnRDYXRlZ29yeS5zdHlsZS5saXN0U3R5bGU9XCJub25lXCIsdHJhbnNwb3J0Q2F0ZWdvcnkuc3R5bGUudGV4dEFsaWduPVwibGVmdFwiLHRyYW5zcG9ydENhdGVnb3J5LnN0eWxlLm1hcmdpbkxlZnQ9XCIzJVwiLHRyYW5zcG9ydENhdGVnb3J5LmNsYXNzTGlzdC5hZGQoXCJ0cmFuc3BvcnRcIiksdHJhbnNwb3J0Q2F0ZWdvcnkuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjt2YXIgb2JqZWN0c0NhdGVnb3J5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtvYmplY3RzQ2F0ZWdvcnkuc3R5bGUucGFkZGluZz1cIjEwcHggMHB4XCIsb2JqZWN0c0NhdGVnb3J5LnN0eWxlLm1hcmdpbj1cIjBcIixvYmplY3RzQ2F0ZWdvcnkuc3R5bGUubGlzdFN0eWxlPVwibm9uZVwiLG9iamVjdHNDYXRlZ29yeS5zdHlsZS50ZXh0QWxpZ249XCJsZWZ0XCIsb2JqZWN0c0NhdGVnb3J5LnN0eWxlLm1hcmdpbkxlZnQ9XCIzJVwiLG9iamVjdHNDYXRlZ29yeS5jbGFzc0xpc3QuYWRkKFwib2JqZWN0c1wiKSxvYmplY3RzQ2F0ZWdvcnkuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjt2YXIgZW1vamlDYXRlZ29yeT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7ZW1vamlDYXRlZ29yeS5zdHlsZS5wYWRkaW5nPVwiMHB4XCIsZW1vamlDYXRlZ29yeS5zdHlsZS5tYXJnaW49XCIwXCIsZW1vamlDYXRlZ29yeS5zdHlsZS5kaXNwbGF5PVwidGFibGVcIixlbW9qaUNhdGVnb3J5LnN0eWxlLndpZHRoPVwiMTAwJVwiLGVtb2ppQ2F0ZWdvcnkuc3R5bGUuYmFja2dyb3VuZD1cIiNlZmYwZjFcIixlbW9qaUNhdGVnb3J5LnN0eWxlLmxpc3RTdHlsZT1cIm5vbmVcIixlbW9qaUNhdGVnb3J5LmNsYXNzTGlzdC5hZGQoXCJjYXRlZ29yeVwiKTt2YXIgZW1vamlDYXRlZ29yaWVzPW5ldyBBcnJheTtlbW9qaUNhdGVnb3JpZXMucHVzaCh7bmFtZTpcImZhY2VzXCIsc3ZnOic8c3ZnIGlkPVwiZmFjZXNcIiBkYXRhLW5hbWU9XCJMYXllciAxXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMTUwIDE1MFwiPjxwYXRoIGlkPVwiZmFjZXNcIiBkPVwiTTc0LjM0LDEyOC40OGE1My41LDUzLjUsMCwxLDEsMzcuODQtMTUuNjcsNTMuMTYsNTMuMTYsMCwwLDEtMzcuODQsMTUuNjdabTAtOTcuODlhNDQuNCw0NC40LDAsMSwwLDMxLjQsMTMsNDQuMDcsNDQuMDcsMCwwLDAtMzEuNC0xM1pcIi8+PHBhdGggaWQ9XCJmYWNlc1wiIGQ9XCJNNzQuMzUsMTA4QTMzLjA3LDMzLjA3LDAsMCwxLDQxLjI5LDc1YTIuMjgsMi4yOCwwLDAsMSwyLjI3LTIuMjhoMEEyLjI3LDIuMjcsMCwwLDEsNDUuODMsNzVhMjguNTIsMjguNTIsMCwwLDAsNTcsMCwyLjI3LDIuMjcsMCwwLDEsNC41NCwwQTMzLjA5LDMzLjA5LDAsMCwxLDc0LjM1LDEwOFpcIi8+PHBhdGggaWQ9XCJmYWNlc1wiIGQ9XCJNNTguODQsNjJhNi44MSw2LjgxLDAsMSwwLDYuODEsNi44MUE2LjgxLDYuODEsMCwwLDAsNTguODQsNjJaXCIvPjxwYXRoIGlkPVwiZmFjZXNcIiBkPVwiTTg5Ljg3LDYyYTYuODEsNi44MSwwLDEsMCw2LjgxLDYuODFBNi44Miw2LjgyLDAsMCwwLDg5Ljg3LDYyWlwiLz48L3N2Zz4nfSksZW1vamlDYXRlZ29yaWVzLnB1c2goe25hbWU6XCJhbmltYWxzXCIsc3ZnOic8c3ZnIGlkPVwiYW5pbWFsc1wiIGRhdGEtbmFtZT1cIkxheWVyIDFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAxNTAgMTUwXCI+PHBhdGggaWQ9XCJhbmltYWxzXCIgZD1cIk01OS45LDkxLjc1aDBjLTIyLjQ2LDAtNDEuODItMTkuMzQtNDQuMDktNDRBNTIuMSw1Mi4xLDAsMCwxLDE2LDM2LjhhNC41MSw0LjUxLDAsMCwxLDIuNjMtMy42MiwzOS43OSwzOS43OSwwLDAsMSwxMi43NC0zLjM3YzIzLjkyLTIuMTUsNDUuMzUsMTcuODMsNDcuNzQsNDMuODZhNTIuNzcsNTIuNzcsMCwwLDEtLjE1LDEwLjkzLDQuNTYsNC41NiwwLDAsMS0yLjY0LDMuNjIsMzkuNjcsMzkuNjcsMCwwLDEtMTIuNzMsMy4zNmMtMS4yMy4xMS0yLjQ1LjE3LTMuNjYuMTdaTTI0Ljc2LDQwLjQ5YTQxLjI5LDQxLjI5LDAsMCwwLC4wOSw2LjRDMjYuNyw2Nyw0Mi4wOSw4Mi42Niw1OS45LDgyLjY3aDBjLjk0LDAsMS44OCwwLDIuODMtLjE0YTMwLjM5LDMwLjM5LDAsMCwwLDcuNDEtMS42Miw0MS4xNCw0MS4xNCwwLDAsMC0uMTEtNi40QzY4LjA5LDUzLjM4LDUxLjExLDM3LjA4LDMyLjE3LDM4Ljg2YTMwLjc4LDMwLjc4LDAsMCwwLTcuNDEsMS42M1pcIi8+PHBhdGggaWQ9XCJhbmltYWxzXCIgZD1cIk0zNi42OCwxMjUuNjRhNC41Myw0LjUzLDAsMCwxLTQuMzMtMy4xNyw1My4zMiw1My4zMiwwLDAsMS0yLjI2LTExQTUwLjQyLDUwLjQyLDAsMCwxLDM5LjUxLDc2LjZjNy4zNS05LjkxLDE3Ljg0LTE2LDI5LjUtMTcsMS4xNi0uMTEsMi4zMy0uMTMsMy40Ny0uMTNhNC41NCw0LjU0LDAsMCwxLDQuMzMsMy4xNiw1MS41OSw1MS41OSwwLDAsMSwyLjI3LDExLjA4LDUwLjM5LDUwLjM5LDAsMCwxLTkuNDIsMzQuOGMtNy4zNSw5LjkxLTE3LjgzLDE2LTI5LjUsMTdhMTcuNjMsMTcuNjMsMCwwLDEtMy40OC4xMlpNNjkuMDksNjguNjlBMzIuNDEsMzIuNDEsMCwwLDAsNDYuOCw4MmE0Mi41Nyw0Mi41NywwLDAsMC02LjcxLDM0LjM4LDMyLjM4LDMyLjM4LDAsMCwwLDIyLjI4LTEzLjMyQTQxLjM1LDQxLjM1LDAsMCwwLDcwLDc0LjUxYTM5LjM4LDM5LjM4LDAsMCwwLS45NC01LjgyWlwiLz48cGF0aCBpZD1cImFuaW1hbHNcIiBkPVwiTTkwLjI3LDkxLjc1Yy0xLjIyLDAtMi40My0uMDYtMy42Ni0uMTdhMzkuNjcsMzkuNjcsMCwwLDEtMTIuNzMtMy4zNiw0LjU3LDQuNTcsMCwwLDEtMi42NC0zLjYxLDUzLjM4LDUzLjM4LDAsMCwxLS4xNy0xMC45M2MyLjQxLTI2LDIzLjctNDYuMDcsNDcuNzYtNDMuODdhMzkuNzQsMzkuNzQsMCwwLDEsMTIuNzMsMy4zNyw0LjU3LDQuNTcsMCwwLDEsMi42NCwzLjYyLDUzLjM1LDUzLjM1LDAsMCwxLC4xNiwxMC45MmMtMi4yOCwyNC42OS0yMS42NSw0NC00NC4wOSw0NFpNODAsODAuOTFhMzAuNTcsMzAuNTcsMCwwLDAsNy40MiwxLjYyYzE5LjA3LDEuNzgsMzUuOTItMTQuNTMsMzcuODctMzUuNjRhNDIuNTUsNDIuNTUsMCwwLDAsLjEtNi40QTMwLjg2LDMwLjg2LDAsMCwwLDExOCwzOC44NkM5OSwzNy4wNyw4Mi4wNiw1My4zOCw4MC4xMiw3NC41MWE0My45MSw0My45MSwwLDAsMC0uMSw2LjRaXCIvPjxwYXRoIGlkPVwiYW5pbWFsc1wiIGQ9XCJNMTEzLjQ5LDEyNS42NGgwYy0xLjE2LDAtMi4zLDAtMy40Ni0uMTItMjMuOS0yLjIxLTQxLjM2LTI1LjQ3LTM4Ljk0LTUxLjg1QTUzLjUyLDUzLjUyLDAsMCwxLDczLjM0LDYyLjZhNC41NSw0LjU1LDAsMCwxLDQuMzMtMy4xNmMxLjE2LDAsMi4zNCwwLDMuNTEuMTMsMTEuNjQsMS4wNywyMi4xMSw3LjEyLDI5LjQ4LDE3YTUwLjUxLDUwLjUxLDAsMCwxLDkuNDIsMzQuODEsNTMuNTEsNTMuNTEsMCwwLDEtMi4yNiwxMSw0LjU0LDQuNTQsMCwwLDEtNC4zMywzLjE5Wk04MS4wOCw2OC42OWE0Mi41Myw0Mi41MywwLDAsMC0xLDUuODJjLTEuOTQsMjEuMSwxMS40NSwzOS43MSwyOS45NSw0MS44OEE0Mi4zOCw0Mi4zOCwwLDAsMCwxMDMuMzYsODIsMzIuNDIsMzIuNDIsMCwwLDAsODEuMDgsNjguNjlaXCIvPjxwYXRoIGlkPVwiYW5pbWFsc1wiIGQ9XCJNNzUuMDgsNDUuNDVhNy44Myw3LjgzLDAsMSwwLDcuODMsNy44Myw3LjgzLDcuODMsMCwwLDAtNy44My03LjgzWlwiLz48cGF0aCBpZD1cImFuaW1hbHNcIiBkPVwiTTc2LjI5LDUxLjg5YTIuMjYsMi4yNiwwLDAsMS0yLjE0LTNBNDYsNDYsMCwwLDEsOTIuODIsMjUuMzRhMi4yNywyLjI3LDAsMSwxLDIuNCwzLjg2QTQxLjQsNDEuNCwwLDAsMCw3OC40Myw1MC4zOWEyLjI4LDIuMjgsMCwwLDEtMi4xNCwxLjVaXCIvPjxwYXRoIGlkPVwiYW5pbWFsc1wiIGQ9XCJNNzMuODcsNTEuODlhMi4yOCwyLjI4LDAsMCwxLTIuMTQtMS41QTQxLjM1LDQxLjM1LDAsMCwwLDU0Ljk0LDI5LjJhMi4yNywyLjI3LDAsMCwxLDIuMzktMy44NkE0Niw0NiwwLDAsMSw3Niw0OC44NWEyLjI4LDIuMjgsMCwwLDEtMS4zNywyLjkxLDIuMzEsMi4zMSwwLDAsMS0uNzcuMTNaXCIvPjwvc3ZnPid9KSxlbW9qaUNhdGVnb3JpZXMucHVzaCh7bmFtZTpcImZvb2RcIixzdmc6JzxzdmcgaWQ9XCJmb29kXCIgZGF0YS1uYW1lPVwiTGF5ZXIgMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDE1MCAxNTBcIj48cGF0aCBpZD1cImZvb2RcIiBkPVwiTTEwNCwyMC43NmguMTVjMTUuODMuNTIsMjQuMDgsMjEuNDgsMjQuMDcsMzIuNTYuMjYsMTIuNDItMTAuNzIsMjMuNTUtMjQsMjQuMjFhMy41MywzLjUzLDAsMCwxLS40NiwwYy0xMy4yNS0uNjYtMjQuMjMtMTEuOC0yNC0yNC4zLDAtMTEsOC4yNi0zMS45NSwyNC4wNy0zMi40N1ptMCw0Ny42OWM4LjI1LS41NCwxNS4zLTcuNTEsMTUuMTQtMTUsMC04LjEyLTYuMjItMjMuMS0xNS4xNC0yMy41Ny04LjkuNDYtMTUuMTQsMTUuNDUtMTUuMTQsMjMuNDgtLjE0LDcuNjEsNi45LDE0LjU5LDE1LjE0LDE1LjEzWlwiLz48cGF0aCBpZD1cImZvb2RcIiBkPVwiTTk3LjE5LDY5LjIxaC4xNGE0LjUzLDQuNTMsMCwwLDEsNC40LDQuNjhsLTEuNDgsNDYuOTJhMS41OSwxLjU5LDAsMCwwLC41LDEuMDYsNC42LDQuNiwwLDAsMCwzLjI1LDEuMTloMGE0LjU3LDQuNTcsMCwwLDAsMy4yNi0xLjIsMS41MywxLjUzLDAsMCwwLC40OS0xbC0xLjQ4LTQ2Ljk1YTQuNTQsNC41NCwwLDEsMSw5LjA4LS4yOGwxLjQ3LDQ2LjkxYTEwLjQyLDEwLjQyLDAsMCwxLTMsNy42NSwxMy42NSwxMy42NSwwLDAsMS05LjgxLDRoMGExMy41OCwxMy41OCwwLDAsMS05Ljc5LTQsMTAuNDIsMTAuNDIsMCwwLDEtMy03LjY3bDEuNDgtNDYuODlhNC41Myw0LjUzLDAsMCwxLDQuNTMtNC40WlwiLz48cGF0aCBpZD1cImZvb2RcIiBkPVwiTTQxLjg0LDY5LjIxSDQyYTQuNTMsNC41MywwLDAsMSw0LjQsNC42OEw0NC45LDEyMC44MWExLjU3LDEuNTcsMCwwLDAsLjUsMS4wNiw0LjYsNC42LDAsMCwwLDMuMjUsMS4xOWgwYTQuNTEsNC41MSwwLDAsMCwzLjI0LTEuMTksMS40OCwxLjQ4LDAsMCwwLC41LTFMNTAuOTMsNzMuODlhNC41Myw0LjUzLDAsMCwxLDQuMzktNC42OEE0LjQsNC40LDAsMCwxLDYwLDczLjYxbDEuNDgsNDYuOTFhMTAuNDksMTAuNDksMCwwLDEtMyw3LjY2LDEzLjU3LDEzLjU3LDAsMCwxLTkuNzgsNGgwYTEzLjU5LDEzLjU5LDAsMCwxLTkuNzgtNCwxMC40OCwxMC40OCwwLDAsMS0zLTcuNjdsMS40OC00Ni45YTQuNTQsNC41NCwwLDAsMSw0LjU0LTQuNFpcIi8+PHBhdGggaWQ9XCJmb29kXCIgZD1cIk0yOC41OSwyMC43NmE0LjU0LDQuNTQsMCwwLDEsNC41NCw0LjU0VjUxYTE1LjUyLDE1LjUyLDAsMCwwLDMxLDBWMjUuM2E0LjU1LDQuNTUsMCwwLDEsOS4wOSwwVjUxYTI0LjYxLDI0LjYxLDAsMSwxLTQ5LjIxLDBWMjUuM2E0LjU0LDQuNTQsMCwwLDEsNC41NC00LjU0WlwiLz48cGF0aCBpZD1cImZvb2RcIiBkPVwiTTU1LjM0LDIwLjc2YTQuNTQsNC41NCwwLDAsMSw0LjU0LDQuNTR2MTlhNC41NCw0LjU0LDAsMSwxLTkuMDgsMHYtMTlhNC41NCw0LjU0LDAsMCwxLDQuNTQtNC41NFpcIi8+PHBhdGggaWQ9XCJmb29kXCIgZD1cIk00MiwyMC43NmE0LjU0LDQuNTQsMCwwLDEsNC41NCw0LjU0djE5YTQuNTQsNC41NCwwLDEsMS05LjA4LDB2LTE5QTQuNTQsNC41NCwwLDAsMSw0MiwyMC43NlpcIi8+PC9zdmc+J30pLGVtb2ppQ2F0ZWdvcmllcy5wdXNoKHtuYW1lOlwic3BvcnRcIixzdmc6JzxzdmcgaWQ9XCJzcG9ydFwiIGRhdGEtbmFtZT1cIkxheWVyIDFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAxNTAgMTUwXCI+PHBhdGggaWQ9XCJzcG9ydFwiIGQ9XCJNNzUuMzUsMTMwLjI0YTUzLjQ5LDUzLjQ5LDAsMSwxLDUzLjQ4LTUzLjQ5LDUzLjU1LDUzLjU1LDAsMCwxLTUzLjQ4LDUzLjQ5Wm0wLTk3Ljg5YTQ0LjQxLDQ0LjQxLDAsMSwwLDQ0LjQsNDQuNCw0NC4xLDQ0LjEsMCwwLDAtNDQuNC00NC40WlwiLz48cGF0aCBpZD1cInNwb3J0XCIgZD1cIk0xMTkuMjQsODQuMDhBNTEuMjksNTEuMjksMCwwLDEsNjgsMzIuODZhNDkuNDQsNDkuNDQsMCwwLDEsLjI2LTUsMi4yNiwyLjI2LDAsMCwxLDItMmMxLjY2LS4xNiwzLjM0LS4yNSw1LS4yNWE1MS4yNiw1MS4yNiwwLDAsMSw1MS4yMSw1MS4yMWMwLDEuNzEtLjA5LDMuMzgtLjI1LDVhMi4yOCwyLjI4LDAsMCwxLTIsMmMtMS42NS4xNi0zLjMzLjI1LTUsLjI1Wk03Mi42NCwzMC4xNmMtLjA2LjktLjA4LDEuNzktLjA4LDIuN2E0Ni43Myw0Ni43MywwLDAsMCw0Ni42OCw0Ni42OHExLjM3LDAsMi43LS4wOWMuMDYtLjg5LjA4LTEuNzkuMDgtMi43QTQ2LjcyLDQ2LjcyLDAsMCwwLDc1LjM1LDMwLjA4Yy0uOTEsMC0xLjgyLDAtMi43MS4wOFpcIi8+PHBhdGggaWQ9XCJzcG9ydFwiIGQ9XCJNNzUuMzUsMTI4QTUxLjI4LDUxLjI4LDAsMCwxLDI0LjEyLDc2Ljc2YzAtMS43LjEtMy4zOC4yNS01YTIuMjksMi4yOSwwLDAsMSwyLTJjMS42Ni0uMTYsMy4zMy0uMjUsNS4wNS0uMjVhNTEuMjcsNTEuMjcsMCwwLDEsNTEuMjEsNTEuMjJjMCwxLjY5LS4wOSwzLjM3LS4yNSw1YTIuMjcsMi4yNywwLDAsMS0yLDJjLTEuNjYuMTYtMy4zMi4yNS01LC4yNVpNMjguNzUsNzQuMDVjLS4wNS45LS4wOSwxLjgtLjA5LDIuNzFhNDYuNzQsNDYuNzQsMCwwLDAsNDYuNjksNDYuNjdjLjkxLDAsMS44LDAsMi43LS4wOCwwLS45LjA4LTEuOC4wOC0yLjdBNDYuNzMsNDYuNzMsMCwwLDAsMzEuNDYsNzRjLS45MSwwLTEuODEsMC0yLjcxLjA4WlwiLz48cG9seWdvbiBpZD1cInNwb3J0XCIgcG9pbnRzPVwiNDIuNjkgMTEyLjYxIDM5LjQ4IDEwOS40IDEwOCA0MC44OCAxMTEuMjEgNDQuMSA0Mi42OSAxMTIuNjEgNDIuNjkgMTEyLjYxXCIvPjwvc3ZnPid9KSxlbW9qaUNhdGVnb3JpZXMucHVzaCh7bmFtZTpcInRyYW5zcG9ydFwiLHN2ZzonPHN2ZyBpZD1cInRyYW5zcG9ydFwiIGRhdGEtbmFtZT1cIkxheWVyIDFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAxNTAgMTUwXCI+PHBhdGggaWQ9XCJ0cmFuc3BvcnRcIiBkPVwiTTEyMC43LDExNkgzMWE0LjU1LDQuNTUsMCwwLDEtNC41NC00LjU1VjU0LjI4QTMxLjgyLDMxLjgyLDAsMCwxLDU4LjI1LDIyLjQ5aDM1LjJhMzEuODMsMzEuODMsMCwwLDEsMzEuOCwzMS43OXY1Ny4xNUE0LjU1LDQuNTUsMCwwLDEsMTIwLjcsMTE2Wm0tODUuMTYtOS4wOWg4MC42MlY1NC4yOEEyMi43NCwyMi43NCwwLDAsMCw5My40NSwzMS41N0g1OC4yNUEyMi43NCwyMi43NCwwLDAsMCwzNS41NCw1NC4yOHY1Mi42MVpcIi8+PHBhdGggaWQ9XCJ0cmFuc3BvcnRcIiBkPVwiTTQ5LjM1LDEyOS4yM2MtOC41MywwLTEzLjYyLTIuNzctMTMuNjItNy40MVYxMTUuNmE0LjU0LDQuNTQsMCwxLDEsOS4wOCwwdjQuMDZhMjEuMzIsMjEuMzIsMCwwLDAsOS4wOSwwVjExNS42YTQuNTQsNC41NCwwLDAsMSw5LjA4LDB2Ni4yMmMwLDQuNjQtNS4wOSw3LjQxLTEzLjYzLDcuNDFaXCIvPjxwYXRoIGlkPVwidHJhbnNwb3J0XCIgZD1cIk0xMDIuMzQsMTI5LjIzYy04LjUzLDAtMTMuNjItMi43Ny0xMy42Mi03LjQxVjExNS42YTQuNTQsNC41NCwwLDAsMSw5LjA4LDB2NC4wNmEyMS4yOCwyMS4yOCwwLDAsMCw5LjA4LDBWMTE1LjZhNC41NSw0LjU1LDAsMCwxLDkuMDksMHY2LjIyYzAsNC42NC01LjA5LDcuNDEtMTMuNjMsNy40MVpcIi8+PHBhdGggaWQ9XCJ0cmFuc3BvcnRcIiBkPVwiTTk3LjgxLDQ0LjgzSDUzLjlhNC41NSw0LjU1LDAsMSwxLDAtOS4wOUg5Ny44MWE0LjU1LDQuNTUsMCwwLDEsMCw5LjA5WlwiLz48cGF0aCBpZD1cInRyYW5zcG9ydFwiIGQ9XCJNNTQuMjgsODQuMkE2LjgsNi44LDAsMSwwLDYxLjA3LDkxYTYuOCw2LjgsMCwwLDAtNi43OS02LjhaXCIvPjxwYXRoIGlkPVwidHJhbnNwb3J0XCIgZD1cIk05Ny40Myw4NC4yYTYuOCw2LjgsMCwxLDAsNi43OSw2LjgsNi44LDYuOCwwLDAsMC02Ljc5LTYuOFpcIi8+PHBhdGggaWQ9XCJ0cmFuc3BvcnRcIiBkPVwiTTEwNy4wOCw4MUg0NC42M2E2LjgyLDYuODIsMCwwLDEtNi44Mi02LjgyVjU0LjI4YTYuODIsNi44MiwwLDAsMSw2LjgyLTYuODFoNjIuNDVhNi44Miw2LjgyLDAsMCwxLDYuODEsNi44MVY3NC4xNUE2LjgzLDYuODMsMCwwLDEsMTA3LjA4LDgxWk00NC42Myw1MmEyLjI4LDIuMjgsMCwwLDAtMi4yOCwyLjI3Vjc0LjE1YTIuMjgsMi4yOCwwLDAsMCwyLjI4LDIuMjdoNjIuNDVhMi4yNywyLjI3LDAsMCwwLDIuMjctMi4yN1Y1NC4yOEEyLjI3LDIuMjcsMCwwLDAsMTA3LjA4LDUyWlwiLz48L3N2Zz4nfSksZW1vamlDYXRlZ29yaWVzLnB1c2goe25hbWU6XCJvYmplY3RzXCIsc3ZnOic8c3ZnIGlkPVwib2JqZWN0c1wiIGRhdGEtbmFtZT1cIkxheWVyIDFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAxNTAgMTUwXCI+PHBhdGggaWQ9XCJvYmplY3RzXCIgZD1cIk0xMDcuNzgsMTI5YTQuNTUsNC41NSwwLDAsMS0yLjY3LS44N2wtMzAtMjEuNzktMzAsMjEuNzlhNC41Myw0LjUzLDAsMCwxLTUuMzQsMCw0LjU4LDQuNTgsMCwwLDEtMS42NS01LjA4TDQ5LjU5LDg3LjgyLDE5LjYsNjZhNC41NCw0LjU0LDAsMCwxLDIuNjctOC4yMkg1OS4zNEw3MC44LDIyLjU1YTQuNTUsNC41NSwwLDAsMSw4LjY0LDBMOTAuODksNTcuODFIMTI4QTQuNTQsNC41NCwwLDAsMSwxMzAuNjMsNjZsLTMwLDIxLjc5LDExLjQ2LDM1LjI1YTQuNTUsNC41NSwwLDAsMS00LjMyLDZaTTc1LjEyLDk2LjJhNC41Myw0LjUzLDAsMCwxLDIuNjcuODdsMjEuMzUsMTUuNTFMOTEsODcuNDlhNC41NSw0LjU1LDAsMCwxLDEuNjUtNS4wOEwxMTQsNjYuODlIODcuNTlhNC41NCw0LjU0LDAsMCwxLTQuMzItMy4xM2wtOC4xNS0yNS4xTDY3LDYzLjc2YTQuNTMsNC41MywwLDAsMS00LjMyLDMuMTNIMzYuMjVMNTcuNjEsODIuNDFhNC41NCw0LjU0LDAsMCwxLDEuNjUsNS4wOGwtOC4xNywyNS4wOUw3Mi40NSw5Ny4wN2E0LjUzLDQuNTMsMCwwLDEsMi42Ny0uODdaXCIvPjwvc3ZnPid9KTtlbW9qaUNhdGVnb3JpZXMubWFwKGZ1bmN0aW9uKGl0ZW0pe3ZhciBlbW9qaUxpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7ZW1vamlMaW5rLnN0eWxlLnRleHREZWNvcmF0aW9uPVwibm9uZVwiLGVtb2ppTGluay5zdHlsZS5wYWRkaW5nPVwiNXB4XCIsZW1vamlMaW5rLnN0eWxlLnBvc2l0aW9uPVwiaW5pdGlhbFwiLGVtb2ppTGluay5zdHlsZS5mb250U2l6ZT1cIjI0cHhcIixlbW9qaUxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLFwiamF2YXNjcmlwdDp2b2lkKDApXCIpLGVtb2ppTGluay5zdHlsZS5kaXNwbGF5PVwidGFibGUtY2VsbFwiLGVtb2ppTGluay5zdHlsZS50ZXh0QWxpZ249XCJjZW50ZXJcIixlbW9qaUxpbmsuaWQ9U3RyaW5nKGl0ZW0ubmFtZSksXCJmYWNlc1wiPT1TdHJpbmcoaXRlbS5uYW1lKSYmKGVtb2ppTGluay5zdHlsZS5iYWNrZ3JvdW5kPVwiI2MyYzJjMlwiKSxlbW9qaUxpbmsuaW5uZXJIVE1MPVN0cmluZyhpdGVtLnN2ZyksZW1vamlMaW5rLm9ubW91c2Vkb3duPWNsaWNrQ2F0ZWdvcnksZW1vamlDYXRlZ29yeS5hcHBlbmRDaGlsZChlbW9qaUxpbmspfSksWzEyODUxMywxMjg1MTQsMTI4NTE1LDEyODUxNiwxMjg1MTcsMTI4NTE4LDEyODUyMSwxMjg1MjIsMTI4NTIzLDEyODUyNCwxMjg1MjUsMTI4NTI3LDEyODUzMCwxMjg1MzEsMTI4NTMyLDEyODUzNCwxMjg1MzYsMTI4NTM4LDEyODU0MCwxMjg1NDEsMTI4NTQyLDEyODU0NCwxMjg1NDUsMTI4NTQ2LDEyODU0NywxMjg1NDgsMTI4NTQ5LDEyODU1MiwxMjg1NTMsMTI4NTU0LDEyODU1NSwxMjg1NTcsMTI4NTYwLDEyODU2MSwxMjg1NjIsMTI4NTYzLDEyODU2NSwxMjg1NjddLm1hcChmdW5jdGlvbihpdGVtKXt2YXIgZW1vamlMaW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2Vtb2ppTGluay5zdHlsZS50ZXh0RGVjb3JhdGlvbj1cIm5vbmVcIixlbW9qaUxpbmsuc3R5bGUubWFyZ2luPVwiNXB4XCIsZW1vamlMaW5rLnN0eWxlLnBvc2l0aW9uPVwiaW5pdGlhbFwiLGVtb2ppTGluay5zdHlsZS5mb250U2l6ZT1cIjI0cHhcIixlbW9qaUxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLFwiamF2YXNjcmlwdDp2b2lkKDApXCIpLGVtb2ppTGluay5pbm5lckhUTUw9U3RyaW5nLmZyb21Db2RlUG9pbnQoaXRlbSksZW1vamlMaW5rLm9ubW91c2Vkb3duPWNsaWNrTGluayxmYWNlc0NhdGVnb3J5LmFwcGVuZENoaWxkKGVtb2ppTGluayl9KSxbMTI4MDEyLDEyODAxMywxMjgwMTQsMTI4MDE3LDEyODAxOCwxMjgwMjAsMTI4MDIzLDEyODAyNCwxMjgwMjUsMTI4MDI2LDEyODAyNywxMjgwMjgsMTI4MDI5LDEyODAzMCwxMjgwMzEsMTI4MDMyLDEyODAzMywxMjgwMzQsMTI4MDM1LDEyODAzNiwxMjgwMzcsMTI4MDM4LDEyODAzOSwxMjgwNDAsMTI4MDQxLDEyODA0MywxMjgwNDQsMTI4MDQ1LDEyODA0NiwxMjgwNDcsMTI4MDQ4LDEyODA0OSwxMjgwNTAsMTI4MDUxLDEyODA1MiwxMjgwNTMsMTI4MDU0LDEyODA1NSwxMjgwNTYsMTI4MDU3LDEyODA1OCwxMjgwNTksMTI4MDYwXS5tYXAoZnVuY3Rpb24oaXRlbSl7dmFyIGVtb2ppTGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtlbW9qaUxpbmsuc3R5bGUudGV4dERlY29yYXRpb249XCJub25lXCIsZW1vamlMaW5rLnN0eWxlLm1hcmdpbj1cIjVweFwiLGVtb2ppTGluay5zdHlsZS5wb3NpdGlvbj1cImluaXRpYWxcIixlbW9qaUxpbmsuc3R5bGUuZm9udFNpemU9XCIyNHB4XCIsZW1vamlMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIixcImphdmFzY3JpcHQ6dm9pZCgwKVwiKSxlbW9qaUxpbmsuaW5uZXJIVE1MPVN0cmluZy5mcm9tQ29kZVBvaW50KGl0ZW0pLGVtb2ppTGluay5vbm1vdXNlZG93bj1jbGlja0xpbmssYW5pbWFsc0NhdGVnb3J5LmFwcGVuZENoaWxkKGVtb2ppTGluayl9KSxbMTI3ODEzLDEyNzgxNCwxMjc4MTUsMTI3ODE2LDEyNzgxNywxMjc4MTgsMTI3ODIwLDEyNzgyMSwxMjc4MjIsMTI3ODIzLDEyNzgyNSwxMjc4MjYsMTI3ODI3LDEyNzgyOCwxMjc4MjksMTI3ODMwLDEyNzgzMSwxMjc4MzIsMTI3ODM2LDEyNzgzNywxMjc4MzgsMTI3ODM5LDEyNzg0MCwxMjc4NDEsMTI3ODQyLDEyNzg0MywxMjc4NDQsMTI3ODQ2LDEyNzg0OCwxMjc4NDksMTI3ODUwLDEyNzg1MSwxMjc4NTIsMTI3ODUzLDEyNzg1NiwxMjc4NTgsMTI3ODU5LDEyNzg2MCwxMjc4NjMsMTI3ODY0LDEyNzg2N10ubWFwKGZ1bmN0aW9uKGl0ZW0pe3ZhciBlbW9qaUxpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7ZW1vamlMaW5rLnN0eWxlLnRleHREZWNvcmF0aW9uPVwibm9uZVwiLGVtb2ppTGluay5zdHlsZS5tYXJnaW49XCI1cHhcIixlbW9qaUxpbmsuc3R5bGUucG9zaXRpb249XCJpbml0aWFsXCIsZW1vamlMaW5rLnN0eWxlLmZvbnRTaXplPVwiMjRweFwiLGVtb2ppTGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsXCJqYXZhc2NyaXB0OnZvaWQoMClcIiksZW1vamlMaW5rLmlubmVySFRNTD1TdHJpbmcuZnJvbUNvZGVQb2ludChpdGVtKSxlbW9qaUxpbmsub25tb3VzZWRvd249Y2xpY2tMaW5rLGZvb2RDYXRlZ29yeS5hcHBlbmRDaGlsZChlbW9qaUxpbmspfSksWzEyNzkyMSwxMjc5MjMsMTI3OTM0LDEyNzkzNSwxMjc5MzYsMTI3OTM3LDEyNzkzOCwxMjc5MzksMTI3OTQwLDEyNzk0MiwxMjc5NDQsMTI3OTQ2LDEyODY3NSwxMjg2OTIsMTI4NjkzLDk5MTcsOTkxOCw5OTc4LDEyNzkwNywxMjc5MTksOTk3MV0ubWFwKGZ1bmN0aW9uKGl0ZW0pe3ZhciBlbW9qaUxpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7ZW1vamlMaW5rLnN0eWxlLnRleHREZWNvcmF0aW9uPVwibm9uZVwiLGVtb2ppTGluay5zdHlsZS5tYXJnaW49XCI1cHhcIixlbW9qaUxpbmsuc3R5bGUucG9zaXRpb249XCJpbml0aWFsXCIsZW1vamlMaW5rLnN0eWxlLmZvbnRTaXplPVwiMjRweFwiLGVtb2ppTGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsXCJqYXZhc2NyaXB0OnZvaWQoMClcIiksZW1vamlMaW5rLmlubmVySFRNTD1TdHJpbmcuZnJvbUNvZGVQb2ludChpdGVtKSxlbW9qaUxpbmsub25tb3VzZWRvd249Y2xpY2tMaW5rLHNwb3J0Q2F0ZWdvcnkuYXBwZW5kQ2hpbGQoZW1vamlMaW5rKX0pLFsxMjg2NDEsMTI4NjQyLDEyODY0NiwxMjg2NDgsMTI4NjUwLDEyODY1MywxMjg2NTQsMTI4NjU2LDEyODY2MCwxMjg2NjIsMTI4NjY0LDEyODY2NywxMjg2NjgsMTI4NjY5LDEyODY3MCwxMjg2NzEsMTI4NjcyLDEyODY3MywxMjg2NDAsMTI4NjQzLDEyODY0NCwxMjg2NDUsMTI4NjQ3LDEyODY0OSwxMjg2NTIsMTI4NjU3LDEyODY1OCwxMjg2NTksMTI4NjYxLDEyODY2MywxMjg2NjUsMTI4NjY2LDEyODY3NCwxMjg2NzYsMTI4NjkwXS5tYXAoZnVuY3Rpb24oaXRlbSl7dmFyIGVtb2ppTGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtlbW9qaUxpbmsuc3R5bGUudGV4dERlY29yYXRpb249XCJub25lXCIsZW1vamlMaW5rLnN0eWxlLm1hcmdpbj1cIjVweFwiLGVtb2ppTGluay5zdHlsZS5wb3NpdGlvbj1cImluaXRpYWxcIixlbW9qaUxpbmsuc3R5bGUuZm9udFNpemU9XCIyNHB4XCIsZW1vamlMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIixcImphdmFzY3JpcHQ6dm9pZCgwKVwiKSxlbW9qaUxpbmsuaW5uZXJIVE1MPVN0cmluZy5mcm9tQ29kZVBvaW50KGl0ZW0pLGVtb2ppTGluay5vbm1vdXNlZG93bj1jbGlja0xpbmssdHJhbnNwb3J0Q2F0ZWdvcnkuYXBwZW5kQ2hpbGQoZW1vamlMaW5rKX0pLFsxMjc4OTAsMTI3ODgwLDEyNzg4MSwxMjc4ODcsMTI3ODkxLDEyNzkwNSwxMjc5MDYsMTI3OTA4LDEyNzkwOSwxMjc5MTEsMTI3OTEyLDEyNzkxNSwxMjc5MTYsMTI3OTE4LDEyNzkxOSwxMjc5MjYsMTI3OTI3LDEyNzkyOCwxMjc5MjksMTI3OTMwLDEyNzkzMSwxMjc5MzIsMTI3OTY4LDEyNzk3MywxMjc5NzgsMTI4MTQ3LDEyODE0OCwxMjgxNDksMTI4MTUwLDEyODE1MSwxMjgxNTIsMTI4MTg3LDEyODE4NiwxMjgxOTcsMTI4MjEzLDEyODI0N10ubWFwKGZ1bmN0aW9uKGl0ZW0pe3ZhciBlbW9qaUxpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtlbW9qaUxpLnN0eWxlLmRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIixlbW9qaUxpLnN0eWxlLm1hcmdpbj1cIjVweFwiO3ZhciBlbW9qaUxpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7ZW1vamlMaW5rLnN0eWxlLnRleHREZWNvcmF0aW9uPVwibm9uZVwiLGVtb2ppTGluay5zdHlsZS5tYXJnaW49XCI1cHhcIixlbW9qaUxpbmsuc3R5bGUucG9zaXRpb249XCJpbml0aWFsXCIsZW1vamlMaW5rLnN0eWxlLmZvbnRTaXplPVwiMjRweFwiLGVtb2ppTGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsXCJqYXZhc2NyaXB0OnZvaWQoMClcIiksZW1vamlMaW5rLmlubmVySFRNTD1TdHJpbmcuZnJvbUNvZGVQb2ludChpdGVtKSxlbW9qaUxpbmsub25tb3VzZWRvd249Y2xpY2tMaW5rLG9iamVjdHNDYXRlZ29yeS5hcHBlbmRDaGlsZChlbW9qaUxpbmspfSksZW1vamlQaWNrZXIuYXBwZW5kQ2hpbGQoZW1vamlDYXRlZ29yeSksZW1vamlQaWNrZXIuYXBwZW5kQ2hpbGQoZmFjZXNDYXRlZ29yeSksZW1vamlQaWNrZXIuYXBwZW5kQ2hpbGQoYW5pbWFsc0NhdGVnb3J5KSxlbW9qaVBpY2tlci5hcHBlbmRDaGlsZChmb29kQ2F0ZWdvcnkpLGVtb2ppUGlja2VyLmFwcGVuZENoaWxkKHNwb3J0Q2F0ZWdvcnkpLGVtb2ppUGlja2VyLmFwcGVuZENoaWxkKHRyYW5zcG9ydENhdGVnb3J5KSxlbW9qaVBpY2tlci5hcHBlbmRDaGlsZChvYmplY3RzQ2F0ZWdvcnkpLGVtb2ppQ29udGFpbmVyLmFwcGVuZENoaWxkKGVtb2ppUGlja2VyKX19XSksTWV0ZW9yRW1vaml9KCk7bW9kdWxlLmV4cG9ydHM9TWV0ZW9yRW1vaml9KX0se31dfSx7fSxbMV0pKDEpfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21ldGVvci1lbW9qaS9kaXN0L21ldGVvckVtb2ppLm1pbi5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0aWYoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9