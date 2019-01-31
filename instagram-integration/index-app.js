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
        instagramTaskManager_getDefaultConfigs: 'instagram-task-manager/config/type', // {STRATEGY_TYPE}/subtype/{STRATEGY_SUBTYPE}
        instagramTaskManager_postStartFollowingList: 'instagram-task-manager/task',
        instagramTaskManager_putStopFollowingList: function instagramTaskManager_putStopFollowingList(id) {
            return 'instagram-task-manager/task/' + id;
        },
        instagramTaskManager_delRemoveFollowingList: function instagramTaskManager_delRemoveFollowingList(id) {
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
        value: function getMetadata(usersName, cbError) {
            return this.network.sendRequest('' + _consts.CONST.getPath('instagramTaskManager_getMetaData'), this.getToken('asHeader'), cbError);
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
            this.postStartFollowingList(body, cbError, path);
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
        var texRowClone = $('.chat-bot-text-fields:first-child').clone();
        texRowClone.insertBefore(textRow);
    });
    // submit
    $form.on('submit', function (e) {
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
            reqBody.push({ 'key_word': keyWord, answer: answer });
        });

        console.log('make request here**', reqBody);

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
        var progress = item.progress;
        if (item.type !== 'FOLLOWING') {
            return;
        }
        if (item.status.state === 'STOPPED' && !isRuns) {
            $('<li class="list-group-item p-0" data-username="' + item.type + '" data-task-id="' + item.task_id + '">\n                <div class="media-body d-flex">\n                    <div class="col task-type">\n                        ' + (item.task_id ? '<p class="badge badge-secondary my-1">' + item.task_id + '</p>' : '') + '\n                        <div class="task-progress">\n                            <p class="small my-1">\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043E</p>\n                            ' + (item.status.reason ? '<p class="my-1">' + item.status.reason + '</p>' : '') + '\n                        </div>\n                    <button class="btn btn-warning js_btn-delete-task">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>\n                    </div>\n                    <!--<div class="col task-subtype">\n                        ' + (item.subtype ? '<p class="mt-0 mb-1">' + item.subtype + '</p>' : '') + '\n                    </div>-->\n                </div>\n            </li>').appendTo($list);
        } else if (item.status.state === 'IN_PROGRESS' && isRuns) {
            $('<li class="list-group-item py-2" data-task-id="' + item.task_id + '">\n                <div class="col task-progress">\n                    <p class="mt-0 mb-1 name">\u0412 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0435 : ' + item.task_id + '</p>\n                </div>\n                <button class="btn btn-outline-primary js_btn-stop-task">\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C</button>\n                <button class="btn btn-warning js_btn-delete-task">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>\n            </li>').appendTo($list);
        } else if (item.status.state === 'FINISHED' && !isRuns) {
            $('<li class="list-group-item py-2" data-task-id="' + item.task_id + '">\n                 <div class="card-block">\n                    <h4 class="card-title">\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u043E</h4>\n                    <div class="text-right">\n                        <span class="text-muted">' + _view2.default.getFormattedDateUtil(progress.timestamp) + '</span>\n                    </div>\n                    <span class="text-success">100%</span>\n                    <div class="progress mb-3">\n                        <div class="progress-bar bg-success" role="progressbar" style="width: 100%; height: 6px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>\n                    </div>\n                    <button class="btn btn-warning js_btn-delete-task">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>\n                </div>\n            </li>').appendTo($list);
        }
        if (!$('li', $list).length) {
            $('<li class="list-group-item py-2" data-task-id="' + item.task_id + '">\n                <p>\u0412 \u044D\u0442\u043E\u043C \u0440\u0430\u0437\u0434\u0435\u043B\u0435 \u043D\u0435\u0442 \u043D\u0438 \u043E\u0434\u043D\u043E\u0439 \u0437\u0430\u0434\u0430\u0447\u0438.</p>\n            </li>').appendTo($list);
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
    _apiTaskManager2.default.getMetadata().then(function (result) {
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
    $('<li class="list-group-item py-2"><h3>UserTaskManager -> getMetadata</h3></li>').appendTo($list);
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

function getTasksData() {
    _apiTaskManager2.default.getMetadata().then(function (result) {
        if (result.status.state === 'ok') {
            fillListMeta($('.follow-tasks-list'), result.data.meta);
        }
    });
}

function getDataStep2(usersName) {
    console.log(usersName);
    getTasksData();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWY2MjFhM2NmZGMwMTdiYzc1ZWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb29raWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy91c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vanMtc2VydmljZXMvdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9+L3B1YnN1Yi1qcy9zcmMvcHVic3ViLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vanMtc2VydmljZXMvbmV0d29yay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2pzLXNlcnZpY2VzL2FwaS10YXNrLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2NoYXQtYm90LWJsb2NrL2NoYXQtYm90LWJsb2NrLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvY29uZmlybS1yZWcvY29uZmlybS1yZWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9mb2xsb3cvZm9sbG93LXN0YXR1cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2ZvbGxvdy9mb2xsb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9oZWFkZXIvYnVyZ2VyLW1lbnUvYnVyZ2VyLW1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9oZWFkZXIvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaW5zdGFncmFtLWFjY291bnRzLWxpc3QvaW5zdGFncmFtLWFjY291bnRzLWxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9tZXNzYWdlcy9tZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3JlZ2lzdGVyLWZvcm0vcmVnaXN0ZXItZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2pzLXNlcnZpY2VzL2FwaS11c2VyLWRpcmVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2pzLXNlcnZpY2VzL3NwaW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL19hdXRoL2xvZ2luLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9icnV0dXNpbi1qc29uLWZvcm1zL2Rpc3QvanMvYnJ1dHVzaW4tanNvbi1mb3Jtcy5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jhc2Uuc2NzcyIsIndlYnBhY2s6Ly8vLi9+L21ldGVvci1lbW9qaS9kaXN0L21ldGVvckVtb2ppLm1pbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIl0sIm5hbWVzIjpbIkNPTlNUIiwidXJsIiwiYmFzZSIsInJlZ2lzdHJhdGlvbiIsImxvZ2luIiwiY29uZmlybWF0aW9uIiwiaW5zdGFncmFtX2FkZEFjY291bnQiLCJpbnN0YWdyYW1BY2NvdW50X2dldE1ldGFEYXRhIiwiaW5zdGFncmFtQWNjb3VudF9jaGVja3BvaW50IiwiaW5zdGFncmFtQWNjb3VudF9jb25maXJtS2V5IiwiaW5zdGFncmFtRGlyZWN0X2dldE1ldGFEYXRhIiwiaW5zdGFncmFtRGlyZWN0X3Bvc3RNZXNzYWdlIiwiaW5zdGFncmFtVGFza01hbmFnZXIiLCJpbnN0YWdyYW1UYXNrTWFuYWdlcl9nZXRNZXRhRGF0YSIsImluc3RhZ3JhbVRhc2tNYW5hZ2VyX2dldFRhc2tUeXBlcyIsImluc3RhZ3JhbVRhc2tNYW5hZ2VyX2dldERlZmF1bHRDb25maWdzIiwiaW5zdGFncmFtVGFza01hbmFnZXJfcG9zdFN0YXJ0Rm9sbG93aW5nTGlzdCIsImluc3RhZ3JhbVRhc2tNYW5hZ2VyX3B1dFN0b3BGb2xsb3dpbmdMaXN0IiwiaWQiLCJpbnN0YWdyYW1UYXNrTWFuYWdlcl9kZWxSZW1vdmVGb2xsb3dpbmdMaXN0IiwiaW5zdGFncmFtVGFza01hbmFnZXJfcG9zdFN0YXJ0Q2hhdEJvdCIsInVzZXIiLCJlbWFpbCIsInBhc3N3b3JkIiwidG9rZW4iLCJjb29raWVTdG9yYWdlIiwiZW1haWxDb25maXJtZWQiLCJ1aVNlbGVjdG9ycyIsImhlYWRlckxvZ2luQm94IiwiaGVhZGVyTmF2TG9naW5CdG4iLCJoZWFkZXJSZWdCb3giLCJoZWFkZXJSZWdCdG4iLCJpbnN0YWdyYW0iLCJhZGRBY2NvdW50QnRuU2VsZWN0b3IiLCJhZGRBY2NvdW50QnRuSWQiLCJldmVudHMiLCJVU0VSX0xPR0dFRCIsIlVTRVJfTE9HT1VUIiwiVVNFUl9FTUFJTF9DT05GSVJNRUQiLCJTVE9QX0ZJWEVEX1NQSU5ORVIiLCJtZXNzYWdlcyIsIlJFQ0lFVkVfTkVXX01FU1NBR0UiLCJpbnN0YWdyYW1BY2NvdW5zIiwiSU5TVEFHUkFNX0FDQ09VTlNfUkVOREVSRUQiLCJ0YXNrcyIsIk5FV19UQVNLX0NSRUFURUQiLCJnZXRQYXRoIiwibmFtZSIsIkNvb2tpZVNydiIsImdldCIsImMiLCJkb2N1bWVudCIsImNvb2tpZSIsIm1hdGNoIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2V0IiwidmFsdWUiLCJvcHRzIiwicGF0aCIsImRheXMiLCJPYmplY3QiLCJlbnRyaWVzIiwicmVkdWNlIiwic3RyIiwiayIsInYiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZW1vdmUiLCJVc2VyIiwibmV0d29yayIsIk5ldHdvcmsiLCJDb29raWVTdG9yYWdlIiwic2V0dGluZ1Bvc3QiLCJtZXRob2QiLCJoZWFkZXJzIiwiZ2V0VG9rZW4iLCJjb29raWVUb2tlbiIsImZvcm1EYXRhIiwiY2JFcnJvciIsInNldHRpbmciLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInNlbmRSZXF1ZXN0IiwidXNlcm5hbWUiLCJjaGVja3BvaW50VHlwZSIsImtleSIsInVzZXJJbnN0YW5jZSIsInZpZXdVdGlscyIsInNob3dJbmZvTWVzc2FnZSIsInNlbGVjdG9yIiwibWVzc2FnZTEiLCJtZXNzYWdlMiIsIiQiLCJlbXB0eSIsImFwcGVuZCIsImZpbGxMaXN0IiwiJGxpc3QiLCJkYXRhQXJyYXkiLCJpdGVtcyIsImNMaXN0IiwiZm9yRWFjaCIsIml0ZW0iLCJpIiwibGkiLCJhcHBlbmRUbyIsImFkZENsYXNzIiwidGV4dCIsImlzRW1haWwiLCJyZWdleCIsInRlc3QiLCJnZXRGb3JtYXR0ZWREYXRlVXRpbCIsInRTdGFtcCIsInNob3dGdWxsVGltZSIsImRhdGUiLCJEYXRlIiwibW9udGgiLCJnZXRNb250aCIsImRheSIsImdldERhdGUiLCJob3VyIiwiZ2V0SG91cnMiLCJtaW4iLCJnZXRNaW51dGVzIiwic2VjIiwiZ2V0U2Vjb25kcyIsImdldEZ1bGxZZWFyIiwicmVzdWx0IiwiJGVsIiwibGVuZ3RoIiwic3RhdHVzIiwic3RhdGUiLCJtZXNzYWdlIiwicmVzcG9uc2UiLCJlcnJvciIsIkVycm9yIiwic3RhdHVzVGV4dCIsIlVSTCIsIk9QVFMiLCJmZXRjaCIsInRoZW4iLCJQcm9taXNlIiwiYWxsIiwianNvbiIsIm9rIiwiY2JFcnJvckRlZmF1bHQiLCJjaGVja1N0YXR1cyIsIlVzZXJUYXNrTWFuYWdlciIsImFzSGVhZGVyIiwidXNlcnNOYW1lIiwiZGV0YWlscyIsInRhc2tJZCIsIlNUUkFURUdZX1RZUEUiLCJTVFJBVEVHWV9TVUJUWVBFIiwicG9zdFN0YXJ0Rm9sbG93aW5nTGlzdCIsImhlYWRlciIsImJ1cmdlck1lbnUiLCJpbnN0YWdyYW1BY2NvdW50cyIsImZvbGxvdyIsImNoYXRCb3QiLCJzZWxlY3RvckNzc0xvZ2luRm9ybSIsIl9sb2dpbkJveCIsIl9mb3JtSWQiLCJfYnV0dG9uU3VibWl0SWQiLCJfc2hvd0xvZ2luQm94QnRuSWQiLCJzZWxlY3RvckNzc0xvZ2luRm9ybUluc3RhZ3JhbSIsImlzTG9naW5JbnN0YWdyYW0iLCJzZXRQdWJTdWIiLCJQdWJTdWIiLCJ3aW5kb3ciLCJpbml0IiwiUmVnaXN0ZXJGb3JtIiwiaW5pdEhlYWRlciIsImluaXRTdGVwcyIsIiRmb3JtIiwidGV4dFJvdyIsIm9uIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0ZXhSb3dDbG9uZSIsImNsb25lIiwiaW5zZXJ0QmVmb3JlIiwiZmllbGRzIiwia2V5V29yZHMiLCJ2YWwiLCJ0cmltIiwicmVwbGFjZSIsInNwbGl0IiwiZmlsdGVyIiwicmVxQm9keSIsImVhY2giLCJpZHgiLCJrZXlXb3JkIiwiZmluZCIsImFuc3dlciIsInB1c2giLCJ0cmlnZ2VyIiwicHVibGlzaCIsImNvbmZpcm1hdGlvbldpdGhSZWRpcmVjdCIsInBhcnNlUXVlcnlTdHJpbmciLCJsb2NhdGlvbiIsInNlYXJjaCIsIm9ialVSTCIsIlJlZ0V4cCIsIiQwIiwiJDEiLCIkMiIsInBhcmFtcyIsInNlbmRDb25maXJtIiwiY29uZmlybSIsImRhdGEiLCJjdXN0b21lcnNEYXRhU3RyaW5nIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0VGltZW91dCIsInJlZGlyZWN0IiwicGF0aG5hbWUiLCJpbmRleE9mIiwiZmlsbExpc3RNZXRhIiwiaXNSdW5zIiwicHJvZ3Jlc3MiLCJ0eXBlIiwidGFza19pZCIsInJlYXNvbiIsInN1YnR5cGUiLCJ0aW1lc3RhbXAiLCJpbml0SGFuZGxlcnMiLCIkYnRuU3RvcFRhc2siLCIkYnRuRGVsVGFzayIsImdldFRhc2tJRCIsImJ0biIsInRhcmdldCIsImNsb3Nlc3QiLCJzdG9wRm9sbG93aW5nTGlzdCIsImdldFRhc2tzRGF0YSIsImRlbGV0ZUZvbGxvd2luZ0xpc3QiLCJnZXRNZXRhZGF0YSIsIm1ldGEiLCJzdWJzY3JpYmUiLCJldmVudE5hbWUiLCJmb2xsb3dTdGF0dXMiLCJ1c2VyX2RlZmF1bHRfY29uZmlnIiwidGFza19tb2RlIiwiY291bnQiLCJwZXJjZW50IiwiZmlsbExpc3RUeXBlcyIsIiR3cmFwcGVyIiwic3RydWN0dXJlT2JqIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZ2V0RGF0YVN0ZXAyIiwiZ2V0RGF0YVN0ZXAzIiwidXNlcnMiLCJmaWxsU3BlZWRMaXN0IiwidGFza01vZGVzIiwiY2ZnIiwidGFza19tb2RlcyIsInJhZGlvQnRuUmVkdWNlciIsImdldERlZmF1bHRDb25maWdzIiwiZm91bmQiLCJzdGVwUmVkdWNlciIsInN0ZXBOdW1iZXIiLCJyZW1vdmVDbGFzcyIsImZhZGVJbiIsInBhcmVudF9maWVsZHNldCIsInBhcmVudHMiLCJuZXh0X3N0ZXAiLCJyYWRpb0J0bkFjdGl2ZSIsImluZGV4IiwiZmFkZU91dCIsIm5leHQiLCJwcmV2IiwiYXR0ciIsInRvVXBwZXJDYXNlIiwiZ2VuZGVyVmFsIiwiY3JpdGVyaWEiLCJnZW5kZXIiLCJsaW1pdCIsImZvcm1zIiwiaGF2ZV9wb3N0cyIsImZyb20iLCJ0byIsImhhdmVfZm9sbG93ZXJzIiwiaGF2ZV9mb2xsb3dpbmdzIiwiZm9jdXMiLCJwcmV2ZW50RGVmYXVsdCIsIm1vZGlmeUFjY0xpc3QiLCJyYWRpb0J0bkFwcGVuZCIsInJhZGlvQnRuV3JhcCIsIiRhY2NvdW50c0xpc3QiLCIkbGkiLCJ3cmFwSW5uZXIiLCJnZXRUYXNrVHlwZXMiLCIkcGFyZW50RmllbGRzZXQiLCJwcm9wIiwic2VsZWN0b3JzRWwiLCJsZWZ0TWVudSIsImhhbWJ1cmdlckJ1dHRvbkNscyIsImhhbWJ1cmdlck1lbnVDbHMiLCJoYW1idXJnZXJNZW51T3BlbmVkQ2xhc3MiLCJoYW1idXJnZXJCdXR0b25DbG9zZUNsYXNzIiwicmlnaHRNZW51Iiwic3ViSGVhZGVyIiwidG9nZ2xlSGFtYnVyZ2VyTWVudSIsIm1lbnVOYW1lIiwidG9nZ2xlQ2xhc3MiLCJiaW5kIiwic2VsZWN0b3JMb2dpblN0YXRlIiwic2VsZWN0b3JFbWFpbENvbmZpcm1TdGF0ZSIsImNsb3NlQ2xhc3MiLCJvcGVuZWRDbGFzcyIsImVtYWlsTm90Q29uZmlybWVkIiwiJGVtYWlsbk1zZyIsImNzcyIsIm9uTG9naW5TdWJzY3JpYmUiLCJtc2ciLCIkbG9naW5Nc2ciLCJpc0VtYWlsQ29uZmlybWVkIiwic2hvd0xvZ291dCIsImlzTG9nZ2VkIiwiaXNMb2dnZWRJbiIsInBhcmVudCIsInNob3ciLCJvbGRVUkwiLCJyZWZlcnJlciIsImluY2x1ZGVzIiwiJGxvZ2luQm94IiwiJHJlZ2lzdGVyQm94IiwiaGlkZSIsImFkZEluc3RhZ3JhbUFjY291bnQiLCJuZXdGb3JtRGF0YSIsIiRtc2dMaXN0IiwiY2F0Y2giLCJlcnIiLCJhZGRPbkxvYWRIYW5kbGVycyIsIiRtb2RhbEJvZHkiLCJmb3JtIiwiY3NzVmFsaWRhdGlvbkNsYXNzIiwiY2hlY2tWYWxpZGl0eSIsInJlcG9ydFZhbGlkaXR5IiwiYWRkTGlzdEhhbmRsZXIiLCIkYnV0dG9uIiwic2VuZFRvIiwic3RvcFByb3BhZ2F0aW9uIiwibW9kYWwiLCJnZXRTZWN1cml0eUtleSIsIiRtb2RhbCIsIiRrZXlJbnB1dCIsImNvbmZpcm1TZWN1cml0eUtleSIsImxlbiIsIm1pbkxlbiIsIk51bWJlciIsIm9uSGlkZU1vZGFsIiwicmVtb3ZlQXR0ciIsInR5cGVTZWxlY3RlZCIsImNoZWNrcG9pbnRUeXBlQWN0aXZlIiwibW9kYWxDb25maWciLCJfY29uZmlnIiwiZGVmYXVsdEF2YXRhclNyYyIsImluc2VydEl0ZW0iLCJjc3NDbHMiLCJsaVRwbCIsInN0YXRzIiwiaW5mbyIsInRwbCIsImNoZWNrcG9pbnQiLCJtZXRhZGF0YSIsInJlc2VuZFJlcXVlc3QiLCJpc1NlbmRSZXFPbmNlIiwiY2hlY2tSZXNwb25zZSIsImlzUmVzZW5kUmVxdWVzdCIsImFjY291bnRzIiwiTG9naW5Gb3JtIiwic2VsZWN0b3JDc3MiLCIkZW1haWwiLCIkdGV4dEFyZWFEZXNjcmlwdGlvbiIsInVzZXJMb2dpbkhlYWRlciIsIl9mb3JtRGF0YSIsInN1Ym1pdEZvcm0iLCJmb3JtRGF0YU9iaiIsInRvTG9jYWxlTG93ZXJDYXNlIiwibG9nT3V0IiwiYmluZEV2ZW50cyIsIiRzaG93TG9naW5Cb3hCdG5JZCIsIiRidXR0b25TdWJtaXQiLCJldmVudCIsImlzTG9naW5CdG5DbGljayIsImlzQWRkSW5zdGFncmFtQnRuQ2xpY2tlZCIsImhhc0NsYXNzIiwidXBkYXRlSW50ZXJ2YWwiLCJpbnRlcnZhbElkIiwiaXNJbk1lc3NhZ2VQYWdlIiwiJHVzZXJMaXN0IiwicmVhZHkiLCJtIiwiTWV0ZW9yRW1vamkiLCIkcGlja2VyIiwic3R5bGUiLCJzdHlsZU5ldyIsImlzQXBwZW50UHJldk1zZyIsImluc2VydE1zZyIsInRvTG93ZXJDYXNlIiwiYWRkVG9MaXN0Iiwic2lkZSIsImFkZFBhZ2luYXRpb24iLCJwYWdpbmF0aW9uIiwiY3Vyc29yIiwicHJldl9jdXJzb3IiLCJ1c2VyRGF0YSIsImNvbnZlcnNhdGlvbklkIiwiU3Bpbm5lciIsInN0YXJ0QnV0dG9uU3Bpbm5lciIsIlVzZXJDb252ZXJzYXRpb24iLCJnZXRNZXRhZGF0YURldGFpbENvbnZlcnNhdGlvbiIsInN0b3BCdXR0b25TcGlubmVyIiwiZmlsbFVzZXJMaXN0IiwiY29udmVyc2F0aW9uRGV0YWlsIiwiYWRkQ29udmVyc2F0aW9ucyIsImNvbnZlcnNhdGlvbnMiLCJwYXJzZUludCIsImdldEFuZEZpbGxVc2VyTGlzdCIsImlzQWN0aXZlRmlyc3QiLCJwcmV2QWN0aXZlRGlhbG9nSWQiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwic2V0dGluZ3MiLCJpbnZva2VfaW5fbWlsbGlzIiwiZ2V0QW5kRmlsbENvbnZlcnNhdGlvbiIsImlzU2Nyb2xsRG93biIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJhZGRIYW5kbGVycyIsIiR0ZXh0QXJlYSIsImFkZCIsInBvc3RNZXRhZGF0YURldGFpbENvbnZlcnNhdGlvbiIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInJlc3VsdEZyb21TZXJ2ZXIiLCIkZGlhbG9nIiwic2VsZWN0b3JDbHMiLCJzdWJtaXRCdG4iLCIkcGFzc3dvcmQiLCIkcGFzc3dvcmRDb25maXJtIiwicGFzc3dvcmRDb25maXJtIiwicmVnaXN0ZXIiLCJyZWdpc3RlckJveCIsIiRidG4iLCJpcyIsImlzUmVnQnRuQ2xpY2siLCJjbGFzc2VzIiwiaW5saW5lIiwib3ZlcmxheSIsImZpeGVkIiwiYnV0dG9uIiwiX2NmZyIsIm5ld0NscyIsInByZXBlbmQiLCJleHRlbmQiLCJwcmV3Q2xzIiwic3Bpbm5lckluc3RhbmNlIiwiTG9naW5QYWdlIiwiaHJlZiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDaEVPLElBQU1BLHdCQUFRO0FBQ2pCQyxTQUFLO0FBQ0RDLGNBQU0sMkJBREw7QUFFREMsc0JBQWMscUJBRmI7QUFHREMsZUFBTywwQkFITjtBQUlEQyxzQkFBYyx1Q0FKYjtBQUtEQyw4QkFBc0IscUJBTHJCLEVBSzRDO0FBQzdDQyxzQ0FBOEIseUJBTjdCO0FBT0RDLHFDQUE2QixnQ0FQNUI7QUFRREMscUNBQTZCLGdDQVI1QjtBQVNEQyxxQ0FBNkIsdUJBVDVCO0FBVURDLHFDQUE2QixtQkFWNUI7QUFXREMsOEJBQXNCLHlCQVhyQjtBQVlEQywwQ0FBa0MsNkJBWmpDO0FBYURDLDJDQUFtQyxtQ0FibEM7QUFjREMsZ0RBQXdDLG9DQWR2QyxFQWM2RTtBQUM5RUMscURBQTZDLDZCQWY1QztBQWdCREMsbURBQTJDO0FB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VEFBa1QsbVJBQW1SLHlDQUF5QyxnRUFBZ0UsMENBQTBDLGdUQUFnVCxtVUFBbVUsZUFBZSxHQUFHLDJCQUEyQixFQUFFLEdBQUcsRUFBRSxHQUFHLFNBQVMsRTs7Ozs7O0FDQS9vbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImluZGV4LWFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDFmNjIxYTNjZmRjMDE3YmM3NWVjIiwiZXhwb3J0IGNvbnN0IENPTlNUID0ge1xyXG4gICAgdXJsOiB7XHJcbiAgICAgICAgYmFzZTogJ2h0dHA6Ly9hcGkubHV4Z3JhbS5ydS92MS8nLFxyXG4gICAgICAgIHJlZ2lzdHJhdGlvbjogJ3JlZ2lzdHJhdGlvbi9iYXNpYy8nLFxyXG4gICAgICAgIGxvZ2luOiAncmVnaXN0cmF0aW9uL2Jhc2ljL2xvZ2luJyxcclxuICAgICAgICBjb25maXJtYXRpb246ICdyZWdpc3RyYXRpb24vYmFzaWMvY29uZmlybWF0aW9uP3Rva2VuJyxcclxuICAgICAgICBpbnN0YWdyYW1fYWRkQWNjb3VudDogJ2luc3RhZ3JhbS1hY2NvdW50cy8nLCAvLyB0b0RPOiBjaGVjayBpcyByZWR1bmRhbnRcclxuICAgICAgICBpbnN0YWdyYW1BY2NvdW50X2dldE1ldGFEYXRhOiAnaW5zdGFncmFtLWFjY291bnRzL21ldGEnLFxyXG4gICAgICAgIGluc3RhZ3JhbUFjY291bnRfY2hlY2twb2ludDogJ2luc3RhZ3JhbS1hY2NvdW50cy9jaGVja3BvaW50LycsXHJcbiAgICAgICAgaW5zdGFncmFtQWNjb3VudF9jb25maXJtS2V5OiAnaW5zdGFncmFtLWFjY291bnRzL2NoZWNrcG9pbnQvJyxcclxuICAgICAgICBpbnN0YWdyYW1EaXJlY3RfZ2V0TWV0YURhdGE6ICdpbnN0YWdyYW0tZGlyZWN0L21ldGEnLFxyXG4gICAgICAgIGluc3RhZ3JhbURpcmVjdF9wb3N0TWVzc2FnZTogJ2luc3RhZ3JhbS1kaXJlY3QvJyxcclxuICAgICAgICBpbnN0YWdyYW1UYXNrTWFuYWdlcjogJ2luc3RhZ3JhbS10YXNrLW1hbmFnZXIvJyxcclxuICAgICAgICBpbnN0YWdyYW1UYXNrTWFuYWdlcl9nZXRNZXRhRGF0YTogJ2luc3RhZ3JhbS10YXNrLW1hbmFnZXIvbWV0YScsXHJcbiAgICAgICAgaW5zdGFncmFtVGFza01hbmFnZXJfZ2V0VGFza1R5cGVzOiAnaW5zdGFncmFtLXRhc2stbWFuYWdlci90YXNrL3R5cGVzJyxcclxuICAgICAgICBpbnN0YWdyYW1UYXNrTWFuYWdlcl9nZXREZWZhdWx0Q29uZmlnczogJ2luc3RhZ3JhbS10YXNrLW1hbmFnZXIvY29uZmlnL3R5cGUnLCAvLyB7U1RSQVRFR1lfVFlQRX0vc3VidHlwZS97U1RSQVRFR1lfU1VCVFlQRX1cclxuICAgICAgICBpbnN0YWdyYW1UYXNrTWFuYWdlcl9wb3N0U3RhcnRGb2xsb3dpbmdMaXN0OiAnaW5zdGFncmFtLXRhc2stbWFuYWdlci90YXNrJyxcclxuICAgICAgICBpbnN0YWdyYW1UYXNrTWFuYWdlcl9wdXRTdG9wRm9sbG93aW5nTGlzdDogaWQgPT4gYGluc3RhZ3JhbS10YXNrLW1hbmFnZXIvdGFzay8ke2lkfWAsXHJcbiAgICAgICAgaW5zdGFncmFtVGFza01hbmFnZXJfZGVsUmVtb3ZlRm9sbG93aW5nTGlzdDogaWQgPT4gYGluc3RhZ3JhbS10YXNrLW1hbmFnZXIvdGFzay8ke2lkfWAsXHJcbiAgICAgICAgaW5zdGFncmFtVGFza01hbmFnZXJfcG9zdFN0YXJ0Q2hhdEJvdDogJ2luc3RhZ3JhbS10YXNrLW1hbmFnZXIvdGFzaydcclxuXHJcbiAgICB9LFxyXG4gICAgdXNlcjoge1xyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgdG9rZW46ICcnXHJcbiAgICB9LFxyXG4gICAgY29va2llU3RvcmFnZToge1xyXG4gICAgICAgIHRva2VuOiAndXNlcl9sb2dnZWQnLFxyXG4gICAgICAgIGVtYWlsQ29uZmlybWVkOiAnZW1haWxfY29uZmlybWVkJ1xyXG4gICAgfSxcclxuICAgIHVpU2VsZWN0b3JzOiB7XHJcbiAgICAgICAgaGVhZGVyTG9naW5Cb3g6ICduYXYgLmxvZ2luLWJveCcsXHJcbiAgICAgICAgaGVhZGVyTmF2TG9naW5CdG46ICduYXYgdWwgbGkgLmpzX2xvZ2luJyxcclxuICAgICAgICBoZWFkZXJSZWdCb3g6ICduYXYgLnJlZ2lzdGVyLWJveCcsXHJcbiAgICAgICAgaGVhZGVyUmVnQnRuOiAnbmF2IHVsIGxpIC5qc19yZWdpc3RlcicsXHJcbiAgICAgICAgaW5zdGFncmFtOiB7XHJcbiAgICAgICAgICAgIGFkZEFjY291bnRCdG5TZWxlY3RvcjogJyNqc19zaG93LWxvZ2luLWJveCcsXHJcbiAgICAgICAgICAgIGFkZEFjY291bnRCdG5JZDogJ2pzX3Nob3ctbG9naW4tYm94J1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBldmVudHM6IHtcclxuICAgICAgICBVU0VSX0xPR0dFRDogJ3VzZXJfbG9nZ2VkJyxcclxuICAgICAgICBVU0VSX0xPR09VVDogJ3VzZXJfbG9nb3V0JyxcclxuICAgICAgICBVU0VSX0VNQUlMX0NPTkZJUk1FRDogJ3VzZXJfZW1haWxfY29uZmlybWVkJyxcclxuICAgICAgICBTVE9QX0ZJWEVEX1NQSU5ORVI6ICdzdG9wX2ZpeGVkX3NwaW5uZXInLFxyXG4gICAgICAgIG1lc3NhZ2VzOiB7XHJcbiAgICAgICAgICAgIFJFQ0lFVkVfTkVXX01FU1NBR0U6ICdyZWNlaXZlX25ld19tZXNzYWdlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5zdGFncmFtQWNjb3Vuczoge1xyXG4gICAgICAgICAgICBJTlNUQUdSQU1fQUNDT1VOU19SRU5ERVJFRDogJ2luc3RhZ3JhbV9hY2NvdW5zX3JlbmRlcmVkJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGFza3M6IHtcclxuICAgICAgICAgICAgTkVXX1RBU0tfQ1JFQVRFRDogJ25ld190YXNrX2NyZWF0ZWQnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGdldFBhdGgobmFtZSwgaWQpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMudXJsW25hbWVdID09PSAnZnVuY3Rpb24nICYmIGlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVybC5iYXNlICsgdGhpcy51cmxbbmFtZV0oaWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy51cmwuYmFzZSArIHRoaXMudXJsW25hbWVdO1xyXG4gICAgfVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uL2pzLXNlcnZpY2VzL2NvbnN0cy5qcyIsIlxyXG5jb25zdCBDb29raWVTcnYgPSB7XHJcbiAgICBnZXQ6IG5hbWUgPT4ge1xyXG4gICAgICAgIGNvbnN0IGMgPSBkb2N1bWVudC5jb29raWUubWF0Y2goYCg/Oig/Ol58Lio7ICopJHtuYW1lfSAqPSAqKFteO10qKS4qJCl8Xi4qJGApWzFdO1xyXG4gICAgICAgIGlmIChjKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoYyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNldDogKG5hbWUsIHZhbHVlLCBvcHRzID0ge3BhdGg6ICcvJywgZGF5czogMzY1fSkgPT4ge1xyXG4gICAgICAgIGlmIChvcHRzLmRheXMpIHtcclxuICAgICAgICAgICAgb3B0c1snbWF4LWFnZSddID0gb3B0cy5kYXlzICogNjAgKiA2MCAqIDI0O1xyXG4gICAgICAgICAgICBkZWxldGUgb3B0cy5kYXlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cclxuICAgICAgICBvcHRzID0gT2JqZWN0LmVudHJpZXMob3B0cykucmVkdWNlKChzdHIsIFtrLCB2XSkgPT4gYCR7c3RyfTsgJHtrfT0ke3Z9YCwgJycpO1xyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGAke25hbWV9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSArIG9wdHN9YDtcclxuICAgIH0sXHJcbiAgICByZW1vdmU6IChuYW1lLCBvcHRzKSA9PiBDb29raWVTcnYuc2V0KG5hbWUsICcnLCB7J21heC1hZ2UnOiAtMSwgcGF0aDogJy8nLCBkYXlzOiAwLCAuLi5vcHRzfSlcclxuICAgIC8vIHBhdGggJiBkb21haW4gbXVzdCBtYXRjaCBjb29raWUgYmVpbmcgZGVsZXRlZFxyXG59O1xyXG5cclxuLypcclxuY2xhc3MgQ29va2llU3RvcmFnZSB7XHJcbiAgICByZWFkKGtleSkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gJC5jb29raWUoa2V5KTtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IG51bGwgOiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDb29raWUobmFtZSwgdmFsdWUsIGRheXMpIHtcclxuICAgICAgICBsZXQgZXhwaXJlcyA9ICcnO1xyXG4gICAgICAgIGlmIChkYXlzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyAoZGF5cyAqIDI0ICogNjAgKiA2MCAqIDEwMDApKTtcclxuICAgICAgICAgICAgZXhwaXJlcyA9IGA7IGV4cGlyZXM9JHtkYXRlLnRvVVRDU3RyaW5nKCl9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gYCR7bmFtZX0gPSR7KHZhbHVlIHx8ICcnKSArIGV4cGlyZXN9OyBwYXRoPS9gO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvb2tpZShuYW1lKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBgOyAke2RvY3VtZW50LmNvb2tpZX1gO1xyXG4gICAgICAgIGNvbnN0IHBhcnRzID0gdmFsdWUuc3BsaXQoYDsgJHtuYW1lfT1gKTtcclxuICAgICAgICBpZiAocGFydHMubGVuZ3RoID09IDIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnRzLnBvcCgpLnNwbGl0KCc7Jykuc2hpZnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvb2tpZVNydjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb29raWUuanMiLCIvLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQge0NPTlNUfSBmcm9tICcuL2NvbnN0cyc7XHJcbmltcG9ydCBOZXR3b3JrIGZyb20gJy4vbmV0d29yayc7XHJcbmltcG9ydCBDb29raWVTdG9yYWdlIGZyb20gJy4vY29va2llJztcclxuXHJcbmNsYXNzIFVzZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubmV0d29yayA9IG5ldyBOZXR3b3JrKCk7XHJcbiAgICAgICAgdGhpcy5jb29raWVTdG9yYWdlID0gQ29va2llU3RvcmFnZTtcclxuICAgICAgICB0aGlzLnNldHRpbmdQb3N0ID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgaXNMb2dnZWRJbigpIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLmdldFRva2VuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNFbWFpbENvbmZpcm1lZCgpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuY29va2llU3RvcmFnZS5nZXQoQ09OU1QuY29va2llU3RvcmFnZS5lbWFpbENvbmZpcm1lZCkgPT09ICdjb25maXJtZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUb2tlbigpIHtcclxuICAgICAgICBjb25zdCBjb29raWVUb2tlbiA9IHRoaXMuY29va2llU3RvcmFnZS5nZXQoQ09OU1QuY29va2llU3RvcmFnZS50b2tlbik7XHJcbiAgICAgICAgcmV0dXJuIGNvb2tpZVRva2VuO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luKGZvcm1EYXRhLCBjYkVycm9yKSB7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZyA9IHsuLi50aGlzLnNldHRpbmdQb3N0LCBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSl9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QoQ09OU1QuZ2V0UGF0aCgnbG9naW4nKSwgc2V0dGluZywgY2JFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkSW5zdGFncmFtQWNjb3VudChmb3JtRGF0YSwgY2JFcnJvcikge1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSB7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdC5oZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgdG9rZW46IHRoaXMuZ2V0VG9rZW4oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KENPTlNULmdldFBhdGgoJ2luc3RhZ3JhbV9hZGRBY2NvdW50JyksIHNldHRpbmcsIGNiRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEluc3RhZ3JhbUFjY291bnQoKSB7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZyA9IHtcclxuICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdCxcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdC5oZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgdG9rZW46IHRoaXMuZ2V0VG9rZW4oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KENPTlNULmdldFBhdGgoJ2luc3RhZ3JhbV9hZGRBY2NvdW50JyksIHNldHRpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmZpcm0odG9rZW4pIHtcclxuICAgICAgICAvLyBjb25zdCBjb25maXJtVXJsID0gQ09OU1QuZ2V0UGF0aCgnY29uZmlybWF0aW9uJyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChgJHtDT05TVC5nZXRQYXRoKCdjb25maXJtYXRpb24nKSArIHRva2VufWApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyKGZvcm1EYXRhKSB7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZyA9IHtcclxuICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdCxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KENPTlNULmdldFBhdGgoJ3JlZ2lzdHJhdGlvbicpLCBzZXR0aW5nKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRNZXRhZGF0YSh0b2tlbiwgY2JFcnJvcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QoYCR7Q09OU1QuZ2V0UGF0aCgnaW5zdGFncmFtQWNjb3VudF9nZXRNZXRhRGF0YScpfWAsIHtoZWFkZXJzOiB7dG9rZW59fSwgY2JFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2VjdXJpdHlLZXkodXNlcm5hbWUsIGNoZWNrcG9pbnRUeXBlKSB7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZyA9IHtcclxuICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdCxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyd0eXBlJzogY2hlY2twb2ludFR5cGV9KSwgLy8gdG9kbzogdG1wIHNldCwgaXQgc2hvdWxkIGJlICd0eXBlJ1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnNldHRpbmdQb3N0LmhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICAndG9rZW4nOiB0aGlzLmdldFRva2VuKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChgJHtDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1BY2NvdW50X2NoZWNrcG9pbnQnKX0ke3VzZXJuYW1lfWAsIHNldHRpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmZpcm1TZWN1cml0eUtleShrZXksIHVzZXJuYW1lKSB7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeydzZWN1cml0eV9jb2RlJzoga2V5fSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QuaGVhZGVycyxcclxuICAgICAgICAgICAgICAgICd0b2tlbic6ICczZTMyMWU2MDAyOTcxMWU5OTI2NGEwNDgxYzhlMTdkNCcgLy8gdG9kbzogdGhpcy5nZXRUb2tlbigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QoYCR7Q09OU1QuZ2V0UGF0aCgnaW5zdGFncmFtQWNjb3VudF9jb25maXJtS2V5Jyl9JHt1c2VybmFtZX1gLCBzZXR0aW5nKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmxldCB1c2VySW5zdGFuY2UgPSBudWxsO1xyXG5cclxuaWYgKCF1c2VySW5zdGFuY2UpIHtcclxuICAgIHVzZXJJbnN0YW5jZSA9IG5ldyBVc2VyKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJJbnN0YW5jZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy91c2VyLmpzIiwiLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuLy8gaW1wb3J0IHtDT05TVH0gZnJvbSAnLi9jb25zdHMnO1xyXG5cclxuZnVuY3Rpb24gdmlld1V0aWxzKCkge1xyXG4gICAgZnVuY3Rpb24gc2hvd0luZm9NZXNzYWdlKHNlbGVjdG9yLCBtZXNzYWdlMSwgbWVzc2FnZTIpIHtcclxuICAgICAgICAkKHNlbGVjdG9yKS5lbXB0eSgpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoYCR7KG1lc3NhZ2UxKSA/IGA8cD5zdGF0dXM6ICR7bWVzc2FnZTF9PC9wPmAgOiAnJ31gKVxyXG4gICAgICAgICAgICAuYXBwZW5kKGA8cD4ke21lc3NhZ2UyfSA8L3A+YCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZmlsbExpc3QoJGxpc3QsIGRhdGFBcnJheSkge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gZGF0YUFycmF5O1xyXG4gICAgICAgIGNvbnN0IGNMaXN0ID0gJGxpc3Q7XHJcbiAgICAgICAgY0xpc3QuZW1wdHkoKTtcclxuICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpID0gJCgnPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCI+PC9saT4nKVxyXG4gICAgICAgICAgICAgICAgLmFwcGVuZFRvKGNMaXN0KTtcclxuICAgICAgICAgICAgJCgnPGEvPicpLmFkZENsYXNzKCd1aS1hbGwnKVxyXG4gICAgICAgICAgICAgICAgLnRleHQoaXRlbS51c2VybmFtZSlcclxuICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhsaSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNFbWFpbChlbWFpbCkge1xyXG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlICovXHJcbiAgICAgICAgY29uc3QgcmVnZXggPSAvXihbYS16QS1aMC05Xy4rLV0pK1xcQCgoW2EtekEtWjAtOS1dKStcXC4pKyhbYS16QS1aMC05XXsyLDR9KSskLztcclxuICAgICAgICByZXR1cm4gcmVnZXgudGVzdChlbWFpbCk7XHJcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSAqL1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEZvcm1hdHRlZERhdGVVdGlsKHRTdGFtcCwgc2hvd0Z1bGxUaW1lKSB7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRTdGFtcCk7XHJcblxyXG4gICAgICAgIGxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XHJcbiAgICAgICAgbGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIGxldCBob3VyID0gZGF0ZS5nZXRIb3VycygpO1xyXG4gICAgICAgIGxldCBtaW4gPSBkYXRlLmdldE1pbnV0ZXMoKTtcclxuICAgICAgICBsZXQgc2VjID0gZGF0ZS5nZXRTZWNvbmRzKCk7XHJcblxyXG4gICAgICAgIG1vbnRoID0gKG1vbnRoIDwgMTAgPyAnMCcgOiAnJykgKyBtb250aDtcclxuICAgICAgICBkYXkgPSAoZGF5IDwgMTAgPyAnMCcgOiAnJykgKyBkYXk7XHJcbiAgICAgICAgaG91ciA9IChob3VyIDwgMTAgPyAnMCcgOiAnJykgKyBob3VyO1xyXG4gICAgICAgIG1pbiA9IChtaW4gPCAxMCA/ICcwJyA6ICcnKSArIG1pbjtcclxuICAgICAgICBzZWMgPSAoc2VjIDwgMTAgPyAnMCcgOiAnJykgKyBzZWM7XHJcblxyXG4gICAgICAgIGxldCBzdHIgPSAnJztcclxuICAgICAgICBpZiAoIXNob3dGdWxsVGltZSkge1xyXG4gICAgICAgICAgICBzdHIgPSBgJHtob3VyfToke21pbn1gO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0ciA9IGAke2RhdGUuZ2V0RnVsbFllYXIoKX0tJHttb250aH0tJHtkYXl9XyR7aG91cn06JHttaW59OiR7c2VjfWA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc3RyO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2hvd0luZm9NZXNzYWdlLFxyXG4gICAgICAgIGZpbGxMaXN0LFxyXG4gICAgICAgIGlzRW1haWwsXHJcbiAgICAgICAgZ2V0Rm9ybWF0dGVkRGF0ZVV0aWxcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHZpZXdVdGlscygpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uL2pzLXNlcnZpY2VzL3ZpZXcuanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMCwyMDExLDIwMTIsMjAxMywyMDE0IE1vcmdhbiBSb2RlcmljayBodHRwOi8vcm9kZXJpY2suZGtcbiAqIExpY2Vuc2U6IE1JVCAtIGh0dHA6Ly9tcmducmRyY2subWl0LWxpY2Vuc2Uub3JnXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL21yb2Rlcmljay9QdWJTdWJKU1xuICovXG5cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSl7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIFB1YlN1YiA9IHt9O1xuICAgIHJvb3QuUHViU3ViID0gUHViU3ViO1xuXG4gICAgdmFyIGRlZmluZSA9IHJvb3QuZGVmaW5lO1xuXG4gICAgZmFjdG9yeShQdWJTdWIpO1xuXG4gICAgLy8gQU1EIHN1cHBvcnRcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKXtcbiAgICAgICAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gUHViU3ViOyB9KTtcblxuICAgICAgICAvLyBDb21tb25KUyBhbmQgTm9kZS5qcyBtb2R1bGUgc3VwcG9ydFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKXtcbiAgICAgICAgaWYgKG1vZHVsZSAhPT0gdW5kZWZpbmVkICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgICAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBQdWJTdWI7IC8vIE5vZGUuanMgc3BlY2lmaWMgYG1vZHVsZS5leHBvcnRzYFxuICAgICAgICB9XG4gICAgICAgIGV4cG9ydHMuUHViU3ViID0gUHViU3ViOyAvLyBDb21tb25KUyBtb2R1bGUgMS4xLjEgc3BlY1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBQdWJTdWI7IC8vIENvbW1vbkpTXG4gICAgfVxuXG59KCggdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgd2luZG93ICkgfHwgdGhpcywgZnVuY3Rpb24gKFB1YlN1Yil7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIG1lc3NhZ2VzID0ge30sXG4gICAgICAgIGxhc3RVaWQgPSAtMTtcblxuICAgIGZ1bmN0aW9uIGhhc0tleXMob2JqKXtcbiAgICAgICAgdmFyIGtleTtcblxuICAgICAgICBmb3IgKGtleSBpbiBvYmope1xuICAgICAgICAgICAgaWYgKCBvYmouaGFzT3duUHJvcGVydHkoa2V5KSApe1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB0aHJvd3MgdGhlIHBhc3NlZCBleGNlcHRpb24sIGZvciB1c2UgYXMgYXJndW1lbnQgZm9yIHNldFRpbWVvdXRcbiAgICAgKiBAYWxpYXMgdGhyb3dFeGNlcHRpb25cbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0geyBPYmplY3QgfSBleCBBbiBFcnJvciBvYmplY3RcbiAgICAgKi9cbiAgICBmdW5jdGlvbiB0aHJvd0V4Y2VwdGlvbiggZXggKXtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHJlVGhyb3dFeGNlcHRpb24oKXtcbiAgICAgICAgICAgIHRocm93IGV4O1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbGxTdWJzY3JpYmVyV2l0aERlbGF5ZWRFeGNlcHRpb25zKCBzdWJzY3JpYmVyLCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyKCBtZXNzYWdlLCBkYXRhICk7XG4gICAgICAgIH0gY2F0Y2goIGV4ICl7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCB0aHJvd0V4Y2VwdGlvbiggZXggKSwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWxsU3Vic2NyaWJlcldpdGhJbW1lZGlhdGVFeGNlcHRpb25zKCBzdWJzY3JpYmVyLCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHN1YnNjcmliZXIoIG1lc3NhZ2UsIGRhdGEgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxpdmVyTWVzc2FnZSggb3JpZ2luYWxNZXNzYWdlLCBtYXRjaGVkTWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApe1xuICAgICAgICB2YXIgc3Vic2NyaWJlcnMgPSBtZXNzYWdlc1ttYXRjaGVkTWVzc2FnZV0sXG4gICAgICAgICAgICBjYWxsU3Vic2NyaWJlciA9IGltbWVkaWF0ZUV4Y2VwdGlvbnMgPyBjYWxsU3Vic2NyaWJlcldpdGhJbW1lZGlhdGVFeGNlcHRpb25zIDogY2FsbFN1YnNjcmliZXJXaXRoRGVsYXllZEV4Y2VwdGlvbnMsXG4gICAgICAgICAgICBzO1xuXG4gICAgICAgIGlmICggIW1lc3NhZ2VzLmhhc093blByb3BlcnR5KCBtYXRjaGVkTWVzc2FnZSApICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChzIGluIHN1YnNjcmliZXJzKXtcbiAgICAgICAgICAgIGlmICggc3Vic2NyaWJlcnMuaGFzT3duUHJvcGVydHkocykpe1xuICAgICAgICAgICAgICAgIGNhbGxTdWJzY3JpYmVyKCBzdWJzY3JpYmVyc1tzXSwgb3JpZ2luYWxNZXNzYWdlLCBkYXRhICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVEZWxpdmVyeUZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICl7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBkZWxpdmVyTmFtZXNwYWNlZCgpe1xuICAgICAgICAgICAgdmFyIHRvcGljID0gU3RyaW5nKCBtZXNzYWdlICksXG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSB0b3BpYy5sYXN0SW5kZXhPZiggJy4nICk7XG5cbiAgICAgICAgICAgIC8vIGRlbGl2ZXIgdGhlIG1lc3NhZ2UgYXMgaXQgaXMgbm93XG4gICAgICAgICAgICBkZWxpdmVyTWVzc2FnZShtZXNzYWdlLCBtZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zKTtcblxuICAgICAgICAgICAgLy8gdHJpbSB0aGUgaGllcmFyY2h5IGFuZCBkZWxpdmVyIG1lc3NhZ2UgdG8gZWFjaCBsZXZlbFxuICAgICAgICAgICAgd2hpbGUoIHBvc2l0aW9uICE9PSAtMSApe1xuICAgICAgICAgICAgICAgIHRvcGljID0gdG9waWMuc3Vic3RyKCAwLCBwb3NpdGlvbiApO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoJy4nKTtcbiAgICAgICAgICAgICAgICBkZWxpdmVyTWVzc2FnZSggbWVzc2FnZSwgdG9waWMsIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtZXNzYWdlSGFzU3Vic2NyaWJlcnMoIG1lc3NhZ2UgKXtcbiAgICAgICAgdmFyIHRvcGljID0gU3RyaW5nKCBtZXNzYWdlICksXG4gICAgICAgICAgICBmb3VuZCA9IEJvb2xlYW4obWVzc2FnZXMuaGFzT3duUHJvcGVydHkoIHRvcGljICkgJiYgaGFzS2V5cyhtZXNzYWdlc1t0b3BpY10pKSxcbiAgICAgICAgICAgIHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoICcuJyApO1xuXG4gICAgICAgIHdoaWxlICggIWZvdW5kICYmIHBvc2l0aW9uICE9PSAtMSApe1xuICAgICAgICAgICAgdG9waWMgPSB0b3BpYy5zdWJzdHIoIDAsIHBvc2l0aW9uICk7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IHRvcGljLmxhc3RJbmRleE9mKCAnLicgKTtcbiAgICAgICAgICAgIGZvdW5kID0gQm9vbGVhbihtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eSggdG9waWMgKSAmJiBoYXNLZXlzKG1lc3NhZ2VzW3RvcGljXSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZvdW5kO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHB1Ymxpc2goIG1lc3NhZ2UsIGRhdGEsIHN5bmMsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKXtcbiAgICAgICAgbWVzc2FnZSA9ICh0eXBlb2YgbWVzc2FnZSA9PT0gJ3N5bWJvbCcpID8gbWVzc2FnZS50b1N0cmluZygpIDogbWVzc2FnZTtcblxuICAgICAgICB2YXIgZGVsaXZlciA9IGNyZWF0ZURlbGl2ZXJ5RnVuY3Rpb24oIG1lc3NhZ2UsIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKSxcbiAgICAgICAgICAgIGhhc1N1YnNjcmliZXJzID0gbWVzc2FnZUhhc1N1YnNjcmliZXJzKCBtZXNzYWdlICk7XG5cbiAgICAgICAgaWYgKCAhaGFzU3Vic2NyaWJlcnMgKXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggc3luYyA9PT0gdHJ1ZSApe1xuICAgICAgICAgICAgZGVsaXZlcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dCggZGVsaXZlciwgMCApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFB1Ymxpc2hlcyB0aGUgbWVzc2FnZSwgcGFzc2luZyB0aGUgZGF0YSB0byBpdCdzIHN1YnNjcmliZXJzXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQGFsaWFzIHB1Ymxpc2hcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHB1Ymxpc2hcbiAgICAgKiBAcGFyYW0ge30gZGF0YSBUaGUgZGF0YSB0byBwYXNzIHRvIHN1YnNjcmliZXJzXG4gICAgICogQHJldHVybiB7IEJvb2xlYW4gfVxuICAgICAqL1xuICAgIFB1YlN1Yi5wdWJsaXNoID0gZnVuY3Rpb24oIG1lc3NhZ2UsIGRhdGEgKXtcbiAgICAgICAgcmV0dXJuIHB1Ymxpc2goIG1lc3NhZ2UsIGRhdGEsIGZhbHNlLCBQdWJTdWIuaW1tZWRpYXRlRXhjZXB0aW9ucyApO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQdWJsaXNoZXMgdGhlIHRoZSBtZXNzYWdlIHN5bmNocm9ub3VzbHksIHBhc3NpbmcgdGhlIGRhdGEgdG8gaXQncyBzdWJzY3JpYmVyc1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBhbGlhcyBwdWJsaXNoU3luY1xuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gcHVibGlzaFxuICAgICAqIEBwYXJhbSB7fSBkYXRhIFRoZSBkYXRhIHRvIHBhc3MgdG8gc3Vic2NyaWJlcnNcbiAgICAgKiBAcmV0dXJuIHsgQm9vbGVhbiB9XG4gICAgICovXG4gICAgUHViU3ViLnB1Ymxpc2hTeW5jID0gZnVuY3Rpb24oIG1lc3NhZ2UsIGRhdGEgKXtcbiAgICAgICAgcmV0dXJuIHB1Ymxpc2goIG1lc3NhZ2UsIGRhdGEsIHRydWUsIFB1YlN1Yi5pbW1lZGlhdGVFeGNlcHRpb25zICk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZXMgdGhlIHBhc3NlZCBmdW5jdGlvbiB0byB0aGUgcGFzc2VkIG1lc3NhZ2UuIEV2ZXJ5IHJldHVybmVkIHRva2VuIGlzIHVuaXF1ZSBhbmQgc2hvdWxkIGJlIHN0b3JlZCBpZiB5b3UgbmVlZCB0byB1bnN1YnNjcmliZVxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBhbGlhcyBzdWJzY3JpYmVcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHN1YnNjcmliZSB0b1xuICAgICAqIEBwYXJhbSB7IEZ1bmN0aW9uIH0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIGEgbmV3IG1lc3NhZ2UgaXMgcHVibGlzaGVkXG4gICAgICogQHJldHVybiB7IFN0cmluZyB9XG4gICAgICovXG4gICAgUHViU3ViLnN1YnNjcmliZSA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBmdW5jICl7XG4gICAgICAgIGlmICggdHlwZW9mIGZ1bmMgIT09ICdmdW5jdGlvbicpe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWVzc2FnZSA9ICh0eXBlb2YgbWVzc2FnZSA9PT0gJ3N5bWJvbCcpID8gbWVzc2FnZS50b1N0cmluZygpIDogbWVzc2FnZTtcblxuICAgICAgICAvLyBtZXNzYWdlIGlzIG5vdCByZWdpc3RlcmVkIHlldFxuICAgICAgICBpZiAoICFtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eSggbWVzc2FnZSApICl7XG4gICAgICAgICAgICBtZXNzYWdlc1ttZXNzYWdlXSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZm9yY2luZyB0b2tlbiBhcyBTdHJpbmcsIHRvIGFsbG93IGZvciBmdXR1cmUgZXhwYW5zaW9ucyB3aXRob3V0IGJyZWFraW5nIHVzYWdlXG4gICAgICAgIC8vIGFuZCBhbGxvdyBmb3IgZWFzeSB1c2UgYXMga2V5IG5hbWVzIGZvciB0aGUgJ21lc3NhZ2VzJyBvYmplY3RcbiAgICAgICAgdmFyIHRva2VuID0gJ3VpZF8nICsgU3RyaW5nKCsrbGFzdFVpZCk7XG4gICAgICAgIG1lc3NhZ2VzW21lc3NhZ2VdW3Rva2VuXSA9IGZ1bmM7XG4gICAgICAgIFxuICAgICAgICAvLyByZXR1cm4gdG9rZW4gZm9yIHVuc3Vic2NyaWJpbmdcbiAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmVzIHRoZSBwYXNzZWQgZnVuY3Rpb24gdG8gdGhlIHBhc3NlZCBtZXNzYWdlIG9uY2VcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgc3Vic2NyaWJlT25jZVxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gc3Vic2NyaWJlIHRvXG4gICAgICogQHBhcmFtIHsgRnVuY3Rpb24gfSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gYSBuZXcgbWVzc2FnZSBpcyBwdWJsaXNoZWRcbiAgICAgKiBAcmV0dXJuIHsgUHViU3ViIH1cbiAgICAgKi9cbiAgICBQdWJTdWIuc3Vic2NyaWJlT25jZSA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBmdW5jICl7XG4gICAgICAgIHZhciB0b2tlbiA9IFB1YlN1Yi5zdWJzY3JpYmUoIG1lc3NhZ2UsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAvLyBiZWZvcmUgZnVuYyBhcHBseSwgdW5zdWJzY3JpYmUgbWVzc2FnZVxuICAgICAgICAgICAgUHViU3ViLnVuc3Vic2NyaWJlKCB0b2tlbiApO1xuICAgICAgICAgICAgZnVuYy5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gUHViU3ViO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYWxsIHN1YnNjcmlwdGlvbnNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcHVibGljXG4gICAgICogQGFsaWFzIGNsZWFyQWxsU3Vic2NyaXB0aW9uc1xuICAgICAqL1xuICAgIFB1YlN1Yi5jbGVhckFsbFN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiBjbGVhckFsbFN1YnNjcmlwdGlvbnMoKXtcbiAgICAgICAgbWVzc2FnZXMgPSB7fTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgc3Vic2NyaXB0aW9ucyBieSB0aGUgdG9waWNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcHVibGljXG4gICAgICogQGFsaWFzIGNsZWFyQWxsU3Vic2NyaXB0aW9uc1xuICAgICAqL1xuICAgIFB1YlN1Yi5jbGVhclN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiBjbGVhclN1YnNjcmlwdGlvbnModG9waWMpe1xuICAgICAgICB2YXIgbTtcbiAgICAgICAgZm9yIChtIGluIG1lc3NhZ2VzKXtcbiAgICAgICAgICAgIGlmIChtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eShtKSAmJiBtLmluZGV4T2YodG9waWMpID09PSAwKXtcbiAgICAgICAgICAgICAgICBkZWxldGUgbWVzc2FnZXNbbV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBzdWJzY3JpcHRpb25zXG4gICAgICpcbiAgICAgKiAtIFdoZW4gcGFzc2VkIGEgdG9rZW4sIHJlbW92ZXMgYSBzcGVjaWZpYyBzdWJzY3JpcHRpb24uXG4gICAgICpcblx0ICogLSBXaGVuIHBhc3NlZCBhIGZ1bmN0aW9uLCByZW1vdmVzIGFsbCBzdWJzY3JpcHRpb25zIGZvciB0aGF0IGZ1bmN0aW9uXG4gICAgICpcblx0ICogLSBXaGVuIHBhc3NlZCBhIHRvcGljLCByZW1vdmVzIGFsbCBzdWJzY3JpcHRpb25zIGZvciB0aGF0IHRvcGljIChoaWVyYXJjaHkpXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBhbGlhcyBzdWJzY3JpYmVPbmNlXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIHwgRnVuY3Rpb24gfSB2YWx1ZSBBIHRva2VuLCBmdW5jdGlvbiBvciB0b3BpYyB0byB1bnN1YnNjcmliZSBmcm9tXG4gICAgICogQGV4YW1wbGUgLy8gVW5zdWJzY3JpYmluZyB3aXRoIGEgdG9rZW5cbiAgICAgKiB2YXIgdG9rZW4gPSBQdWJTdWIuc3Vic2NyaWJlKCdteXRvcGljJywgbXlGdW5jKTtcbiAgICAgKiBQdWJTdWIudW5zdWJzY3JpYmUodG9rZW4pO1xuICAgICAqIEBleGFtcGxlIC8vIFVuc3Vic2NyaWJpbmcgd2l0aCBhIGZ1bmN0aW9uXG4gICAgICogUHViU3ViLnVuc3Vic2NyaWJlKG15RnVuYyk7XG4gICAgICogQGV4YW1wbGUgLy8gVW5zdWJzY3JpYmluZyBmcm9tIGEgdG9waWNcbiAgICAgKiBQdWJTdWIudW5zdWJzY3JpYmUoJ215dG9waWMnKTtcbiAgICAgKi9cbiAgICBQdWJTdWIudW5zdWJzY3JpYmUgPSBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgIHZhciBkZXNjZW5kYW50VG9waWNFeGlzdHMgPSBmdW5jdGlvbih0b3BpYykge1xuICAgICAgICAgICAgICAgIHZhciBtO1xuICAgICAgICAgICAgICAgIGZvciAoIG0gaW4gbWVzc2FnZXMgKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eShtKSAmJiBtLmluZGV4T2YodG9waWMpID09PSAwICl7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhIGRlc2NlbmRhbnQgb2YgdGhlIHRvcGljIGV4aXN0czpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzVG9waWMgICAgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICggbWVzc2FnZXMuaGFzT3duUHJvcGVydHkodmFsdWUpIHx8IGRlc2NlbmRhbnRUb3BpY0V4aXN0cyh2YWx1ZSkgKSxcbiAgICAgICAgICAgIGlzVG9rZW4gICAgPSAhaXNUb3BpYyAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnLFxuICAgICAgICAgICAgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyxcbiAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlLFxuICAgICAgICAgICAgbSwgbWVzc2FnZSwgdDtcblxuICAgICAgICBpZiAoaXNUb3BpYyl7XG4gICAgICAgICAgICBQdWJTdWIuY2xlYXJTdWJzY3JpcHRpb25zKHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoIG0gaW4gbWVzc2FnZXMgKXtcbiAgICAgICAgICAgIGlmICggbWVzc2FnZXMuaGFzT3duUHJvcGVydHkoIG0gKSApe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlc1ttXTtcblxuICAgICAgICAgICAgICAgIGlmICggaXNUb2tlbiAmJiBtZXNzYWdlW3ZhbHVlXSApe1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgbWVzc2FnZVt2YWx1ZV07XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAvLyB0b2tlbnMgYXJlIHVuaXF1ZSwgc28gd2UgY2FuIGp1c3Qgc3RvcCBoZXJlXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoIHQgaW4gbWVzc2FnZSApe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UuaGFzT3duUHJvcGVydHkodCkgJiYgbWVzc2FnZVt0XSA9PT0gdmFsdWUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBtZXNzYWdlW3RdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59KSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcHVic3ViLWpzL3NyYy9wdWJzdWIuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHZpZXdVdGlscyBmcm9tICcuL3ZpZXcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV0d29yayB7XHJcblxyXG4gICAgY2JFcnJvckRlZmF1bHQocmVzdWx0KSB7XHJcbiAgICAgICAgY29uc3QgJGVsID0gKCQoJyNkZXNjcmlwdGlvbicpLmxlbmd0aCkgPyAkKCcjZGVzY3JpcHRpb24nKSA6ICQoJy5lcnJvci1tc2cnKTtcclxuICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKCRlbCxcclxuICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5zdGF0ZSxcclxuICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5tZXNzYWdlIHx8ICdlcnJvcicpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrU3RhdHVzKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAmJiByZXNwb25zZS5zdGF0dXMgPj0gMjAwICYmIHJlc3BvbnNlLnN0YXR1cyA8IDMwMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgICAgIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZW5kUmVxdWVzdChVUkwsIE9QVFMsIGNiRXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goVVJMLCBPUFRTKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiBQcm9taXNlLmFsbChbcmVzcG9uc2UsIHJlc3BvbnNlLmpzb24oKV0pKVxyXG4gICAgICAgICAgICAudGhlbigoW3Jlc3BvbnNlLCBqc29uXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghY2JFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNiRXJyb3JEZWZhdWx0KGpzb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNiRXJyb3IoanNvbik7IC8vIHVwZGF0ZSB2aWV3XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tTdGF0dXMocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihqc29uLnN0YXR1cy5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBqc29uO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy9uZXR3b3JrLmpzIiwiLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IHtDT05TVH0gZnJvbSAnLi9jb25zdHMnO1xyXG5pbXBvcnQgTmV0d29yayBmcm9tICcuL25ldHdvcmsnO1xyXG5pbXBvcnQgQ29va2llU3RvcmFnZSBmcm9tICcuL2Nvb2tpZSc7XHJcblxyXG5jbGFzcyBVc2VyVGFza01hbmFnZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubmV0d29yayA9IG5ldyBOZXR3b3JrKCk7XHJcbiAgICAgICAgdGhpcy5jb29raWVTdG9yYWdlID0gQ29va2llU3RvcmFnZTtcclxuICAgICAgICB0aGlzLnNldHRpbmdQb3N0ID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaXNMb2dnZWRJbigpIHtcclxuICAgIC8vICAgICByZXR1cm4gISF0aGlzLmdldFRva2VuKCk7XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gaXNFbWFpbENvbmZpcm1lZCgpIHtcclxuICAgIC8vICAgICByZXR1cm4gKHRoaXMuY29va2llU3RvcmFnZS5nZXQoQ09OU1QuY29va2llU3RvcmFnZS5lbWFpbENvbmZpcm1lZCkgPT09ICdjb25maXJtZWQnKTtcclxuICAgIC8vIH1cclxuICAgIGdldFRva2VuKGFzSGVhZGVyKSB7XHJcbiAgICAgICAgY29uc3QgY29va2llVG9rZW4gPSB0aGlzLmNvb2tpZVN0b3JhZ2UuZ2V0KENPTlNULmNvb2tpZVN0b3JhZ2UudG9rZW4pO1xyXG4gICAgICAgIHJldHVybiAoYXNIZWFkZXIpID8ge2hlYWRlcnM6IHt0b2tlbjogY29va2llVG9rZW59fSA6IGNvb2tpZVRva2VuO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1ldGFkYXRhKHVzZXJzTmFtZSwgY2JFcnJvcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QoYCR7Q09OU1QuZ2V0UGF0aCgnaW5zdGFncmFtVGFza01hbmFnZXJfZ2V0TWV0YURhdGEnKX1gLFxyXG4gICAgICAgICAgICB0aGlzLmdldFRva2VuKCdhc0hlYWRlcicpLCBjYkVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUYXNrVHlwZXMoZGV0YWlscywgY2JFcnJvcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QoYCR7Q09OU1QuZ2V0UGF0aCgnaW5zdGFncmFtVGFza01hbmFnZXJfZ2V0VGFza1R5cGVzJyl9YCxcclxuICAgICAgICAgICAgdGhpcy5nZXRUb2tlbignYXNIZWFkZXInKSwgY2JFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcEZvbGxvd2luZ0xpc3QodGFza0lkLCBjYkVycm9yKSB7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZyA9IHtcclxuICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdCxcclxuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdC5oZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgJ3Rva2VuJzogdGhpcy5nZXRUb2tlbigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHVybCA9IENPTlNULmdldFBhdGgoJ2luc3RhZ3JhbVRhc2tNYW5hZ2VyX3B1dFN0b3BGb2xsb3dpbmdMaXN0JywgdGFza0lkKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KHVybCxcclxuICAgICAgICAgICAgc2V0dGluZywgY2JFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlRm9sbG93aW5nTGlzdCh0YXNrSWQsIGNiRXJyb3IpIHtcclxuICAgICAgICBjb25zdCBzZXR0aW5nID0ge1xyXG4gICAgICAgICAgICAuLi50aGlzLnNldHRpbmdQb3N0LFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnNldHRpbmdQb3N0LmhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICAndG9rZW4nOiB0aGlzLmdldFRva2VuKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgdXJsID0gQ09OU1QuZ2V0UGF0aCgnaW5zdGFncmFtVGFza01hbmFnZXJfZGVsUmVtb3ZlRm9sbG93aW5nTGlzdCcsIHRhc2tJZCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdCh1cmwsXHJcbiAgICAgICAgICAgIHNldHRpbmcsIGNiRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERlZmF1bHRDb25maWdzKGNiRXJyb3IpIHtcclxuICAgICAgICBjb25zdCBkZXRhaWxzID0ge1xyXG4gICAgICAgICAgICBTVFJBVEVHWV9UWVBFOiAnRk9MTE9XSU5HJyxcclxuICAgICAgICAgICAgU1RSQVRFR1lfU1VCVFlQRTogJ0ZPTExPV0lOR19MSVNUJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgdXJsID0gYCR7Q09OU1QuZ2V0UGF0aCgnaW5zdGFncmFtVGFza01hbmFnZXJfZ2V0RGVmYXVsdENvbmZpZ3MnKX0vJHtkZXRhaWxzLlNUUkFURUdZX1RZUEV9L3N1YnR5cGUvJHtkZXRhaWxzLlNUUkFURUdZX1NVQlRZUEV9YDtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KHVybCxcclxuICAgICAgICAgICAgdGhpcy5nZXRUb2tlbignYXNIZWFkZXInKSwgY2JFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcG9zdFN0YXJ0Rm9sbG93aW5nTGlzdChib2R5LCBjYkVycm9yLCBwYXRoKSB7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZyA9IHtcclxuICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdCxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdC5oZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgJ3Rva2VuJzogdGhpcy5nZXRUb2tlbigpLFxyXG4gICAgICAgICAgICAgICAgJ1gtQXV0aC1Ub2tlbic6ICdlMmY0MzM2YWJlYTQ0MDQ4OWM1MWM1YzEwMjk0ZWExMidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2V0dGluZy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkoYm9keSk7XHJcbiAgICAgICAgY29uc3QgdXJsID0gcGF0aCA/IGAke0NPTlNULmdldFBhdGgocGF0aCl9YCA6IGAke0NPTlNULmdldFBhdGgoJ2luc3RhZ3JhbVRhc2tNYW5hZ2VyX3Bvc3RTdGFydEZvbGxvd2luZ0xpc3QnKX1gO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KHVybCxcclxuICAgICAgICAgICAgc2V0dGluZywgY2JFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcG9zdFN0YXJ0Q2hhdEJvdChib2R5LCBjYkVycm9yKSB7XHJcbiAgICAgICAgY29uc3QgcGF0aCA9ICdpbnN0YWdyYW1UYXNrTWFuYWdlcl9wb3N0U3RhcnRDaGF0Qm90JztcclxuICAgICAgICB0aGlzLnBvc3RTdGFydEZvbGxvd2luZ0xpc3QoYm9keSwgY2JFcnJvciwgcGF0aCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCB1c2VySW5zdGFuY2UgPSBudWxsO1xyXG5cclxuaWYgKCF1c2VySW5zdGFuY2UpIHtcclxuICAgIHVzZXJJbnN0YW5jZSA9IG5ldyBVc2VyVGFza01hbmFnZXIoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlckluc3RhbmNlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uL2pzLXNlcnZpY2VzL2FwaS10YXNrLW1hbmFnZXIuanMiLCJpbXBvcnQgJy4vYmFzZS5zY3NzJztcclxuLy8gaW1wb3J0ICdib290c3RyYXAnO1xyXG5pbXBvcnQge0NPTlNUfSBmcm9tICcuL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMnO1xyXG5pbXBvcnQgUHViU3ViIGZyb20gJ3B1YnN1Yi1qcyc7XHJcbmltcG9ydCBSZWdpc3RlckZvcm0gZnJvbSAnLi9ibG9ja3MvcmVnaXN0ZXItZm9ybS9yZWdpc3Rlci1mb3JtJztcclxuaW1wb3J0IHtMb2dpbkZvcm19IGZyb20gJy4vYmxvY2tzL2xvZ2luLWZvcm0vbG9naW4tZm9ybSc7XHJcbmltcG9ydCB7TG9naW5QYWdlfSBmcm9tICcuL3BhZ2VzL19hdXRoL2xvZ2luLXBhZ2UnO1xyXG5pbXBvcnQge2NvbmZpcm1hdGlvbldpdGhSZWRpcmVjdH0gZnJvbSAnLi9ibG9ja3MvY29uZmlybS1yZWcvY29uZmlybS1yZWcnO1xyXG5pbXBvcnQgKiBhcyBoZWFkZXIgZnJvbSAnLi9ibG9ja3MvaGVhZGVyL2hlYWRlcic7XHJcbmltcG9ydCAqIGFzIGJ1cmdlck1lbnUgZnJvbSAnLi9ibG9ja3MvaGVhZGVyL2J1cmdlci1tZW51L2J1cmdlci1tZW51JztcclxuaW1wb3J0ICogYXMgaW5zdGFncmFtQWNjb3VudHMgZnJvbSAnLi9ibG9ja3MvaW5zdGFncmFtLWFjY291bnRzLWxpc3QvaW5zdGFncmFtLWFjY291bnRzLWxpc3QnO1xyXG5pbXBvcnQgKiBhcyBtZXNzYWdlcyBmcm9tICcuL2Jsb2Nrcy9tZXNzYWdlcy9tZXNzYWdlcyc7XHJcbmltcG9ydCAqIGFzIGZvbGxvdyBmcm9tICcuL2Jsb2Nrcy9mb2xsb3cvZm9sbG93JztcclxuaW1wb3J0ICogYXMgY2hhdEJvdCBmcm9tICcuL2Jsb2Nrcy9jaGF0LWJvdC1ibG9jay9jaGF0LWJvdC1ibG9jayc7XHJcblxyXG5jb25zdCBzZWxlY3RvckNzc0xvZ2luRm9ybSA9IHtcclxuICAgIF9sb2dpbkJveDogQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyTG9naW5Cb3gsXHJcbiAgICBfZm9ybUlkOiAnI2pzX2xvZ2luLWZvcm0nLFxyXG4gICAgX2J1dHRvblN1Ym1pdElkOiAnI2pzX2xvZ2luX2J0bicsXHJcbiAgICBfc2hvd0xvZ2luQm94QnRuSWQ6IENPTlNULnVpU2VsZWN0b3JzLmhlYWRlck5hdkxvZ2luQnRuXHJcbn07XHJcblxyXG5jb25zdCBzZWxlY3RvckNzc0xvZ2luRm9ybUluc3RhZ3JhbSA9IHtcclxuICAgIF9sb2dpbkJveDogJ21haW4gLmxvZ2luLWJveCcsXHJcbiAgICBfZm9ybUlkOiAnI2pzX2luc3RhZ3JhbS1hZGQtYWNjb3VudCcsXHJcbiAgICBfYnV0dG9uU3VibWl0SWQ6ICcjanNfaW5zdGFncmFtLWFkZC1hY2NvdW50LS1idG4nLFxyXG4gICAgX3Nob3dMb2dpbkJveEJ0bklkOiAnI2pzX3Nob3ctbG9naW4tYm94JyxcclxuICAgIGlzTG9naW5JbnN0YWdyYW06IHRydWVcclxufTtcclxuXHJcbmZ1bmN0aW9uIHNldFB1YlN1YihQdWJTdWIpIHtcclxuICAgIHdpbmRvdy5QdWJTdWIgPSBQdWJTdWI7XHJcbn1cclxuXHJcbmNvbnN0IGluaXQgPSAoKSA9PiB7XHJcbiAgICBzZXRQdWJTdWIoUHViU3ViKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdpbml0IGpzIGhlcmUnLCBDT05TVC51c2VyKTtcclxuICAgIChuZXcgUmVnaXN0ZXJGb3JtKCkpLmluaXQoKTtcclxuICAgIExvZ2luRm9ybShzZWxlY3RvckNzc0xvZ2luRm9ybSkuaW5pdCgpO1xyXG4gICAgTG9naW5Gb3JtKHNlbGVjdG9yQ3NzTG9naW5Gb3JtSW5zdGFncmFtKS5pbml0KCk7IC8vIGluaXQgaW5zdGFncmFtIGxvZ2luIGZvcm0qIS9cclxuICAgIExvZ2luUGFnZSh7XHJcbiAgICAgICAgX2xvZ2luQm94OiAnLmF1dGgubG9naW4gLmNhcmQtc2lnbmluJyxcclxuICAgICAgICBfZm9ybUlkOiAnLmZvcm0tc2lnbmluJyxcclxuICAgICAgICBfYnV0dG9uU3VibWl0SWQ6ICcuZm9ybS1zaWduaW4gW3R5cGU9XCJzdWJtaXRcIl0nXHJcbiAgICB9KS5pbml0KCk7XHJcblxyXG4gICAgY29uZmlybWF0aW9uV2l0aFJlZGlyZWN0KCkuaW5pdCgpO1xyXG4gICAgaGVhZGVyLmluaXRIZWFkZXIoKTtcclxuICAgIGJ1cmdlck1lbnUuaW5pdCgpO1xyXG4gICAgZm9sbG93LmluaXQoKTtcclxuICAgIGluc3RhZ3JhbUFjY291bnRzLmluaXQoKTtcclxuICAgIG1lc3NhZ2VzLmluaXQoKTtcclxuICAgIGNoYXRCb3QuaW5pdCgpO1xyXG59O1xyXG5cclxuKCgpID0+IGluaXQoKSkoKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jvb3RzdHJhcC5qcyIsImltcG9ydCB7Q09OU1R9IGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMnO1xyXG4vLyBpbXBvcnQgVXNlclRhc2tNYW5hZ2VyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9hcGktdGFzay1tYW5hZ2VyJztcclxuLypcclxuY29uc3Qgc3RhdGUgPSB7XHJcbiAgICAndGV4dF9mb3Jtcyc6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdrZXlfd29yZHMnOiBbJ9GG0LXQvdCwJywgJ9GB0YLQvtC40LzQvtGB0YLRjCddLFxyXG4gICAgICAgICAgICAnYW5zd2VyJzogJzEwMDUwMCDRgNGD0LHQu9C10LknXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdrZXlfd29yZHMnOiBbJ9GG0LXQvdGDJywgJ9GG0LXQvdC90LjQuiddLFxyXG4gICAgICAgICAgICAnYW5zd2VyJzogJzEg0LzQu9C9LiDRgNGD0LHQu9C10LknXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59OyovXHJcblxyXG4vKlxyXG5mdW5jdGlvbiBmaWxsTGlzdFR5cGVzKCR3cmFwcGVyLCBkYXRhKSB7XHJcbiAgY29uc3Qgc3RydWN0dXJlT2JqID0gZGF0YVsnc3RydWN0dXJlJ107XHJcblxyXG4gICR3cmFwcGVyLmVtcHR5KCkuYWRkQ2xhc3MoJ2JvcmRlci1saWdodC1jb2xvcicpO1xyXG4gICQoJzxkaXYgY2xhc3M9XCJcIj7QotC40L8g0LfQsNC00LDQvdC40Y88L2Rpdj48c2VsZWN0IG5hbWU9XCJ0YXNrLXR5cGVcIiBpZD1cInRhc2stdHlwZXNcIj48L3NlbGVjdD4nKS5hcHBlbmRUbygkd3JhcHBlcik7XHJcbiAgZm9yIChjb25zdCB0eXBlIGluIHN0cnVjdHVyZU9iaikge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ3N0cnVjdHVyZTogJyArIGl0ZW0pO1xyXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzdHJ1Y3R1cmVPYmosIHR5cGUpKSB7XHJcbiAgICAgICQoYDxvcHRpb24gY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gcHktMlwiICR7KHR5cGUgIT09ICdGT0xMT1dJTkcnKSA/ICdkaXNhYmxlZD1cImRpc2FibGVkXCInIDogJyd9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IFwiJHtKU09OLnN0cmluZ2lmeSh7dHlwZSwgc3VidHlwZTogc3RydWN0dXJlT2JqW3R5cGVdfSl9XCI+XHJcbiAgICAgICAgICAgICAgICAke3R5cGV9XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPmApLmFwcGVuZFRvKCQoJyN0YXNrLXR5cGVzJykpO1xyXG4gICAgfVxyXG4gIH1cclxufSovXHJcblxyXG4vKipcclxuICogSW5pdCBoZWFkZXJcclxuICovXHJcbmZ1bmN0aW9uIGluaXRTdGVwcygpIHtcclxuICAgIGNvbnN0ICRmb3JtID0gJCgnLmNoYXQtYm90LWZvcm0nKTtcclxuICAgIGNvbnN0IHRleHRSb3cgPSAkKCcuY2hhdC1ib3QtdGV4dC1maWVsZHMnKTtcclxuXHJcbiAgICAkKCcuanNfYWRkLWNoYXQtYm90Jykub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY2xpY2snKTtcclxuICAgICAgICBjb25zdCB0ZXhSb3dDbG9uZSA9ICQoJy5jaGF0LWJvdC10ZXh0LWZpZWxkczpmaXJzdC1jaGlsZCcpLmNsb25lKCk7XHJcbiAgICAgICAgdGV4Um93Q2xvbmUuaW5zZXJ0QmVmb3JlKHRleHRSb3cpO1xyXG4gICAgfSk7XHJcbiAgICAvLyBzdWJtaXRcclxuICAgICRmb3JtLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkcyA9ICQoJy5jaGF0LWJvdC10ZXh0LWZpZWxkcycpO1xyXG4gICAgICAgIGNvbnN0IGtleVdvcmRzID0gJGVsID0+ICRlbC52YWwoKVxyXG4gICAgICAgICAgICAudHJpbSgpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC8gL2csICcnKVxyXG4gICAgICAgICAgICAuc3BsaXQoJywnKVxyXG4gICAgICAgICAgICAuZmlsdGVyKGkgPT4gaS5sZW5ndGggPiAwKTtcclxuICAgICAgICBjb25zdCByZXFCb2R5ID0gW107XHJcbiAgICAgICAgZmllbGRzLmVhY2goKGlkeCwgaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBrZXlXb3JkID0ga2V5V29yZHMoJChpdGVtKS5maW5kKCd0ZXh0YXJlYS5jaGF0LXdvcmRzJykpO1xyXG4gICAgICAgICAgICBjb25zdCBhbnN3ZXIgPSAkKGl0ZW0pLmZpbmQoJ3RleHRhcmVhLmNoYXQtbWVzc2FnZXMnKS52YWwoKTtcclxuICAgICAgICAgICAgcmVxQm9keS5wdXNoKHsna2V5X3dvcmQnOiBrZXlXb3JkLCBhbnN3ZXJ9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ21ha2UgcmVxdWVzdCBoZXJlKionLCByZXFCb2R5KTtcclxuXHJcbiAgICAgICAgLy8gVXNlclRhc2tNYW5hZ2VyLnBvc3RTdGFydEZvbGxvd2luZ0xpc3Qoc3RhdGUpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBpZiAocmVzdWx0LnN0YXR1cy5zdGF0ZSA9PT0gJ29rJykge1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XHJcbiAgICAgICAgLy8gICAgICAgICAkKCcuZm9ybS1zdWJtaXQtZmluaXNoJykuYWRkQ2xhc3MoJ2QtYmxvY2snKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC5maW5kKCcuYWxlcnQnKS5hcHBlbmQoYDxwPnRhc2tfaWQ6ICR7cmVzdWx0LmRhdGEudGFza19pZH08L3A+YCk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBhbGVydCBjbG9zZVxyXG4gICAgJCgnLmZvcm0tc3VibWl0LWZpbmlzaCAuY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gJCh0aGlzKS5jbG9zZXN0KCdmb3JtLXN1Ym1pdC1maW5pc2gnKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpO1xyXG4gICAgICAgICQoJyN2LXBpbGxzLXJ1bm5lZC10YWInKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgIHdpbmRvdy5QdWJTdWIucHVibGlzaChDT05TVC5ldmVudHMudGFza3MuTkVXX1RBU0tfQ1JFQVRFRCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBpZiAoJCgnLmNoYXQtYm90LWZvcm0nKS5sZW5ndGgpIHtcclxuICAgICAgICBpbml0U3RlcHMoKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL2NoYXQtYm90LWJsb2NrL2NoYXQtYm90LWJsb2NrLmpzIiwiLyogZXNsaW50LWRpc2FibGUgc29ydC12YXJzICovXHJcbi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy91c2VyJztcclxuaW1wb3J0IHtDT05TVH0gZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2NvbnN0cyc7XHJcbmltcG9ydCBjb29raWVTdG9yYWdlIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb29raWUnO1xyXG5cclxuY29uc3QgcGFyc2VRdWVyeVN0cmluZyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIGNvbnN0IHN0ciA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XHJcbiAgICBjb25zdCBvYmpVUkwgPSB7fTtcclxuXHJcbiAgICBzdHIucmVwbGFjZShcclxuICAgICAgbmV3IFJlZ0V4cCgnKFtePz0mXSspKD0oW14mXSopKT8nLCAnZycpLFxyXG4gICAgICAgIGZ1bmN0aW9uKCQwLCAkMSwgJDIpIHtcclxuICAgICAgICAgICAgb2JqVVJMWyQxXSA9ICQyO1xyXG4gICAgICAgIH1cclxuICApO1xyXG4gICAgcmV0dXJuIG9ialVSTDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb25maXJtYXRpb25XaXRoUmVkaXJlY3QoKSB7XHJcbiAgICBjb25zdCB1c2VyID0gVXNlcjtcclxuICAgIGNvbnN0IHBhcmFtcyA9IHBhcnNlUXVlcnlTdHJpbmcoKTtcclxuICAgIC8vIEV4YW1wbGUgaG93IHRvIHVzZSBpdDpcclxuXHJcbiAgICBjb25zdCBzZW5kQ29uZmlybSA9IGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgICAgIHVzZXIuY29uZmlybSh0b2tlbikudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzICYmIHJlc3VsdC5zdGF0dXMuc3RhdGUgPT09ICdvaycpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBzYXZlIHRoZSBpdGVtXHJcbiAgICAgICAgICAgICAgICBjb29raWVTdG9yYWdlLnNldChDT05TVC5jb29raWVTdG9yYWdlLmVtYWlsQ29uZmlybWVkLCAnY29uZmlybWVkJyk7XHJcbiAgICAgICAgICAgICAgICBjb29raWVTdG9yYWdlLnNldChDT05TVC5jb29raWVTdG9yYWdlLnRva2VuLCByZXN1bHQuZGF0YS50b2tlbik7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uID0gY29uZmlybS1yZWdpc3RyYXRpb24uaHRtbD90b2tlbj0nZnJvbSBzZXJ2ZXInO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHJldHJpZXZlIHRoZSBvYmplY3QgaW4gYSBzdHJpbmcgZm9ybVxyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VzdG9tZXJzRGF0YVN0cmluZyA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2N1c3RvbWVyc0RhdGEnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1c3RvbWVyc0RhdGFTdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlcXVlc3Qgc3VjY2VlZGVkIHdpdGggSlNPTiByZXNwb25zZScsIHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAkKCcuY29uZmlybS1yZWdpc3RyYXRpb24nKS5hcHBlbmQoYDxwPmNvbmZpcm1hdGlvbiBzdGF0dXM6ICR7cmVzdWx0LnN0YXR1cy5zdGF0ZX08L3A+YCk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSAnLi9wcm9maWxlLmh0bWwnO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LnN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVkaXJlY3QgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZG90LW5vdGF0aW9uXHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBwYXJhbXNbJ3Rva2VuJ107XHJcblxyXG4gICAgICAgIGlmICghbG9jYXRpb24ucGF0aG5hbWUuaW5kZXhPZignY29uZmlybS1yZWdpc3RyYXRpb24nKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2VuZCByZXEgdG8gJywgdG9rZW4pO1xyXG4gICAgICAgICAgICBzZW5kQ29uZmlybSh0b2tlbik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgICAgIHJlZGlyZWN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0XHJcbiAgICB9O1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3MvY29uZmlybS1yZWcvY29uZmlybS1yZWcuanMiLCJpbXBvcnQgVXNlclRhc2tNYW5hZ2VyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9hcGktdGFzay1tYW5hZ2VyJztcclxuaW1wb3J0IHZpZXdVdGlscyBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdmlldyc7XHJcbmltcG9ydCB7Q09OU1R9IGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMnO1xyXG5cclxuZnVuY3Rpb24gZmlsbExpc3RNZXRhKCRsaXN0LCBkYXRhQXJyYXksIGlzUnVucykge1xyXG4gICAgY29uc3QgaXRlbXMgPSBkYXRhQXJyYXk7XHJcbiAgICAvLyBjb25zdCBkZWZhdWx0QXZhdGFyU3JjID0gJ2h0dHBzOi8vaS5pbWd1ci5jb20vak5OVDRMRS5wbmcnO1xyXG4gICAgJGxpc3QuZW1wdHkoKTtcclxuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCBwcm9ncmVzcyA9IGl0ZW0ucHJvZ3Jlc3M7XHJcbiAgICAgICAgaWYgKGl0ZW0udHlwZSAhPT0gJ0ZPTExPV0lORycpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXRlbS5zdGF0dXMuc3RhdGUgPT09ICdTVE9QUEVEJyAmJiAhaXNSdW5zKSB7XHJcbiAgICAgICAgICAgICQoYDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBwLTBcIiBkYXRhLXVzZXJuYW1lPVwiJHtpdGVtLnR5cGV9XCIgZGF0YS10YXNrLWlkPVwiJHtpdGVtLnRhc2tfaWR9XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEtYm9keSBkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHRhc2stdHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkeyhpdGVtLnRhc2tfaWQpID8gYDxwIGNsYXNzPVwiYmFkZ2UgYmFkZ2Utc2Vjb25kYXJ5IG15LTFcIj4ke2l0ZW0udGFza19pZH08L3A+YCA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1wcm9ncmVzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzbWFsbCBteS0xXCI+0J7RgdGC0LDQvdC+0LLQu9C10L3QvjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7KGl0ZW0uc3RhdHVzLnJlYXNvbikgPyBgPHAgY2xhc3M9XCJteS0xXCI+JHtpdGVtLnN0YXR1cy5yZWFzb259PC9wPmAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4td2FybmluZyBqc19idG4tZGVsZXRlLXRhc2tcIj7Qo9C00LDQu9C40YLRjDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwiY29sIHRhc2stc3VidHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkeyhpdGVtLnN1YnR5cGUpID8gYDxwIGNsYXNzPVwibXQtMCBtYi0xXCI+JHtpdGVtLnN1YnR5cGV9PC9wPmAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4tLT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPmApLmFwcGVuZFRvKCRsaXN0KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uc3RhdHVzLnN0YXRlID09PSAnSU5fUFJPR1JFU1MnICYmIGlzUnVucykge1xyXG4gICAgICAgICAgICAkKGA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gcHktMlwiIGRhdGEtdGFzay1pZD1cIiR7aXRlbS50YXNrX2lkfVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB0YXNrLXByb2dyZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtdC0wIG1iLTEgbmFtZVwiPtCSINC/0YDQvtCz0YDQtdGB0YHQtSA6ICR7aXRlbS50YXNrX2lkfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5IGpzX2J0bi1zdG9wLXRhc2tcIj7QntGB0YLQsNC90L7QstC40YLRjDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4td2FybmluZyBqc19idG4tZGVsZXRlLXRhc2tcIj7Qo9C00LDQu9C40YLRjDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2xpPmApLmFwcGVuZFRvKCRsaXN0KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uc3RhdHVzLnN0YXRlID09PSAnRklOSVNIRUQnICYmICFpc1J1bnMpIHtcclxuICAgICAgICAgICAgJChgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIHB5LTJcIiBkYXRhLXRhc2staWQ9XCIke2l0ZW0udGFza19pZH1cIj5cclxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cImNhcmQtdGl0bGVcIj7QktGL0L/QvtC70L3QtdC90L3QvjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LW11dGVkXCI+JHt2aWV3VXRpbHMuZ2V0Rm9ybWF0dGVkRGF0ZVV0aWwocHJvZ3Jlc3MudGltZXN0YW1wKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXN1Y2Nlc3NcIj4xMDAlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1iYXIgYmctc3VjY2Vzc1wiIHJvbGU9XCJwcm9ncmVzc2JhclwiIHN0eWxlPVwid2lkdGg6IDEwMCU7IGhlaWdodDogNnB4O1wiIGFyaWEtdmFsdWVub3c9XCIyNVwiIGFyaWEtdmFsdWVtaW49XCIwXCIgYXJpYS12YWx1ZW1heD1cIjEwMFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXdhcm5pbmcganNfYnRuLWRlbGV0ZS10YXNrXCI+0KPQtNCw0LvQuNGC0Yw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPmApLmFwcGVuZFRvKCRsaXN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCEkKCdsaScsICRsaXN0KS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgJChgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIHB5LTJcIiBkYXRhLXRhc2staWQ9XCIke2l0ZW0udGFza19pZH1cIj5cclxuICAgICAgICAgICAgICAgIDxwPtCSINGN0YLQvtC8INGA0LDQt9C00LXQu9C1INC90LXRgiDQvdC4INC+0LTQvdC+0Lkg0LfQsNC00LDRh9C4LjwvcD5cclxuICAgICAgICAgICAgPC9saT5gKS5hcHBlbmRUbygkbGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXHJcbmZ1bmN0aW9uIGluaXRIYW5kbGVycygpIHtcclxuICAgIGNvbnN0ICRidG5TdG9wVGFzayA9ICQoJy5qc19idG4tc3RvcC10YXNrJyk7XHJcbiAgICBjb25zdCAkYnRuRGVsVGFzayA9ICQoJy5qc19idG4tZGVsZXRlLXRhc2snKTtcclxuICAgIGNvbnN0IGdldFRhc2tJRCA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYnRuID0gJChlLnRhcmdldCk7XHJcbiAgICAgICAgcmV0dXJuIGJ0bi5jbG9zZXN0KCdsaScpLmRhdGEoJ3Rhc2staWQnKTtcclxuICAgIH07XHJcblxyXG4gICAgJGJ0blN0b3BUYXNrLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFza0lkID0gZ2V0VGFza0lEKGUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTVE9QIFRhc2sgaWQnLCB0YXNrSWQpO1xyXG4gICAgICAgIFVzZXJUYXNrTWFuYWdlci5zdG9wRm9sbG93aW5nTGlzdCh0YXNrSWQpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICBnZXRUYXNrc0RhdGEoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgICRidG5EZWxUYXNrLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFza0lkID0gZ2V0VGFza0lEKGUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdERUxFVEUgaWQnLCB0YXNrSWQpO1xyXG4gICAgICAgIFVzZXJUYXNrTWFuYWdlci5kZWxldGVGb2xsb3dpbmdMaXN0KHRhc2tJZCkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIGdldFRhc2tzRGF0YSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRhc2tzRGF0YSgpIHtcclxuICAgIFVzZXJUYXNrTWFuYWdlci5nZXRNZXRhZGF0YSgpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMuc3RhdGUgPT09ICdvaycpIHtcclxuICAgICAgICAgICAgZmlsbExpc3RNZXRhKCQoJy5mb2xsb3ctdGFza3MtcnVucycpLCByZXN1bHQuZGF0YS5tZXRhLCAnaXNSdW5zJyk7XHJcbiAgICAgICAgICAgIGZpbGxMaXN0TWV0YSgkKCcuZm9sbG93LXRhc2tzLXN0b3BwZWQnKSwgcmVzdWx0LmRhdGEubWV0YSk7XHJcbiAgICAgICAgICAgIGluaXRIYW5kbGVycygpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogSW5pdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBnZXRUYXNrc0RhdGEoKTtcclxuICAgIHdpbmRvdy5QdWJTdWIuc3Vic2NyaWJlKENPTlNULmV2ZW50cy50YXNrcy5ORVdfVEFTS19DUkVBVEVELCAoZXZlbnROYW1lLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgZ2V0VGFza3NEYXRhKCk7XHJcbiAgICB9KTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL2ZvbGxvdy9mb2xsb3ctc3RhdHVzLmpzIiwiaW1wb3J0ICogYXMgZm9sbG93U3RhdHVzIGZyb20gJy4vZm9sbG93LXN0YXR1cyc7XHJcbmltcG9ydCB7Q09OU1R9IGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMnO1xyXG5pbXBvcnQgVXNlclRhc2tNYW5hZ2VyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9hcGktdGFzay1tYW5hZ2VyJztcclxuaW1wb3J0ICdicnV0dXNpbi1qc29uLWZvcm1zJztcclxuXHJcbmNvbnN0IHN0YXRlID0ge1xyXG4gICAgdXNlcm5hbWU6ICcnLFxyXG4gICAgdXNlcl9kZWZhdWx0X2NvbmZpZzoge1xyXG4gICAgICAgIHRhc2tfbW9kZTogJ1NBRkUnXHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBmaWxsTGlzdE1ldGEoJGxpc3QsIGRhdGFBcnJheSkge1xyXG4gICAgY29uc3QgaXRlbXMgPSBkYXRhQXJyYXk7XHJcbiAgICAvLyBjb25zdCBkZWZhdWx0QXZhdGFyU3JjID0gJ2h0dHBzOi8vaS5pbWd1ci5jb20vak5OVDRMRS5wbmcnO1xyXG4gICAgJGxpc3QuZW1wdHkoKS5hZGRDbGFzcygnYm9yZGVyLWxpZ2h0LWNvbG9yJyk7XHJcbiAgICAkKCc8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gcHktMlwiPjxoMz5Vc2VyVGFza01hbmFnZXIgLT4gZ2V0TWV0YWRhdGE8L2gzPjwvbGk+JykuYXBwZW5kVG8oJGxpc3QpO1xyXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnN0IGluZm8gPSBpdGVtLmluZm87XHJcbiAgICAgICAgLy8gY29uc3QgY2hlY2twb2ludCA9IGl0ZW0uY2hlY2twb2ludCB8fCBpdGVtO1xyXG4gICAgICAgICQoYDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBweS0yXCIgZGF0YS11c2VybmFtZT1cIiR7aXRlbS50eXBlfVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWJvZHkgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB0YXNrLXR5cGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHsoaXRlbS50YXNrX2lkKSA/IGA8cCBjbGFzcz1cIm10LTAgbWItMSBuYW1lXCI+JHtpdGVtLnRhc2tfaWR9PC9wPmAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHRhc2stc3VidHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkeyhpdGVtLnN1YnR5cGUpID8gYDxwIGNsYXNzPVwibXQtMCBtYi0xIG5hbWVcIj4ke2l0ZW0uc3VidHlwZX08L3A+YCA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgdGFzay1wcm9ncmVzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkeyhpdGVtLnN0YXR1cy5zdGF0ZSA9PT0gJ1NUT1BQRUQnKSA/IGA8cCBjbGFzcz1cIm10LTAgbWItMSBuYW1lXCI+0J7RgdGC0LDQvdC+0LLQu9C10L3QviAtICR7aXRlbS5zdGF0dXMucmVhc29ufTwvcD5gIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJjb2wgdGFzay1wcm9ncmVzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkeyhpdGVtLnByb2dyZXNzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBgPHAgY2xhc3M9XCJtdC0wIG1iLTEgbmFtZVwiPtCa0L7Qu9C40YfQtdGB0YLQstC+IC0gJHtpdGVtLnByb2dyZXNzLmNvdW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm10LTAgbWItMSBuYW1lXCI+0J/RgNC+0YbQtdC90YIgLSAke2l0ZW0ucHJvZ3Jlc3MucGVyY2VudH08L3A+YCA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+YCkuYXBwZW5kVG8oJGxpc3QpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbGxMaXN0VHlwZXMoJHdyYXBwZXIsIGRhdGEpIHtcclxuICAgIGNvbnN0IHN0cnVjdHVyZU9iaiA9IGRhdGFbJ3N0cnVjdHVyZSddO1xyXG5cclxuICAgICR3cmFwcGVyLmVtcHR5KCkuYWRkQ2xhc3MoJ2JvcmRlci1saWdodC1jb2xvcicpO1xyXG4gICAgJCgnPGRpdiBjbGFzcz1cIlwiPtCi0LjQvyDQt9Cw0LTQsNC90LjRjzwvZGl2PjxzZWxlY3QgbmFtZT1cInRhc2stdHlwZVwiIGlkPVwidGFzay10eXBlc1wiPjwvc2VsZWN0PicpLmFwcGVuZFRvKCR3cmFwcGVyKTtcclxuICAgIGZvciAoY29uc3QgdHlwZSBpbiBzdHJ1Y3R1cmVPYmopIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnc3RydWN0dXJlOiAnICsgaXRlbSk7XHJcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzdHJ1Y3R1cmVPYmosIHR5cGUpKSB7XHJcbiAgICAgICAgICAgICQoYDxvcHRpb24gY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gcHktMlwiICR7KHR5cGUgIT09ICdGT0xMT1dJTkcnKSA/ICdkaXNhYmxlZD1cImRpc2FibGVkXCInIDogJyd9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IFwiJHtKU09OLnN0cmluZ2lmeSh7dHlwZSwgc3VidHlwZTogc3RydWN0dXJlT2JqW3R5cGVdfSl9XCI+XHJcbiAgICAgICAgICAgICAgICAke3R5cGV9XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPmApLmFwcGVuZFRvKCQoJyN0YXNrLXR5cGVzJykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VGFza3NEYXRhKCkge1xyXG4gICAgVXNlclRhc2tNYW5hZ2VyLmdldE1ldGFkYXRhKCkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMuc3RhdGUgPT09ICdvaycpIHtcclxuICAgICAgICAgICAgZmlsbExpc3RNZXRhKCQoJy5mb2xsb3ctdGFza3MtbGlzdCcpLCByZXN1bHQuZGF0YS5tZXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RGF0YVN0ZXAyKHVzZXJzTmFtZSkge1xyXG4gICAgY29uc29sZS5sb2codXNlcnNOYW1lKTtcclxuICAgIGdldFRhc2tzRGF0YSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXREYXRhU3RlcDMoKSB7XHJcbiAgICBjb25zdCB1c2VycyA9ICQoJyNmb2xsb3dlcnMnKS52YWwoKVxyXG4gICAgICAgIC50cmltKClcclxuICAgICAgICAucmVwbGFjZSgvIC9nLCAnJylcclxuICAgICAgICAuc3BsaXQoJywnKVxyXG4gICAgICAgIC5maWx0ZXIoaSA9PiBpLmxlbmd0aCA+IDApO1xyXG5cclxuICAgIHN0YXRlWyd1c2VyX2N1c3RvbV9jb25maWcnXSA9IHtcclxuICAgICAgICB1c2Vyc1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGZpbGxTcGVlZExpc3QgPSBmdW5jdGlvbiAoJHdyYXBwZXIsIGRhdGEpIHtcclxuICAgICAgICBjb25zdCB0YXNrTW9kZXMgPSBkYXRhLmNmZyAmJiBkYXRhLmNmZy50YXNrX21vZGVzO1xyXG4gICAgICAgIGNvbnN0IHJhZGlvQnRuUmVkdWNlciA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnQUdHUkVTU0lWRSc6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCIke2l0ZW19XCIgbmFtZT1cImN1c3RvbVJhZGlvXCIgdmFsdWU9XCJzYWZlXCIgY2xhc3M9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImN1c3RvbS1jb250cm9sLWxhYmVsXCIgZm9yPVwiJHtpdGVtfVwiPjxzdHJvbmc+0JDQs9GA0LXRgdGB0LjQstC90YvQuTo8L3N0cm9uZz4gMzAg0L/QvtC00L/QuNGB0L7QuiDQsiDRh9Cw0YE8L2xhYmVsPmA7XHJcbiAgICAgICAgICAgICAgICAvLyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ01JRERMRSc6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwiJHtpdGVtfVwiIG5hbWU9XCJjdXN0b21SYWRpb1wiIHZhbHVlPVwic2FmZVwiIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjdXN0b20tY29udHJvbC1sYWJlbFwiIGZvcj1cIiR7aXRlbX1cIj48c3Ryb25nPtCh0YDQtdC00L3QuNC5Ojwvc3Ryb25nPiAxOCDQv9C+0LTQv9C40YHQvtC6INCyINGH0LDRgTwvbGFiZWw+YCk7XHJcbiAgICAgICAgICAgICAgICAvLyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ1NBRkUnOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwiJHtpdGVtfVwiIG5hbWU9XCJjdXN0b21SYWRpb1wiIHZhbHVlPVwic2FmZVwiIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIiBjaGVja2VkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImN1c3RvbS1jb250cm9sLWxhYmVsXCIgZm9yPVwiJHtpdGVtfVwiPjxzdHJvbmc+0JHQtdC30L7Qv9Cw0YHQvdGL0Lk6PC9zdHJvbmc+IDkg0L/QvtC00L/QuNGB0L7QuiDQsiDRh9Cw0YE8L2xhYmVsPmA7XHJcbiAgICAgICAgICAgICAgICAvLyBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RlZmF1bHQnLCBpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2RyYXcgc3BlZWQgcmFkaW9CdG4nKTtcclxuICAgICAgICAkd3JhcHBlci5lbXB0eSgpO1xyXG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBpbiB0YXNrTW9kZXMpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3N0cnVjdHVyZTogJyArIGl0ZW0pO1xyXG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhc2tNb2RlcywgaXRlbSkpIHtcclxuICAgICAgICAgICAgICAgICQoYDxkaXYgY2xhc3M9XCJjdXN0b20tY29udHJvbCBjdXN0b20tcmFkaW9cIj5cclxuICAgICAgICAgICAgICAgICR7cmFkaW9CdG5SZWR1Y2VyKGl0ZW0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5gKS5hcHBlbmRUbygkd3JhcHBlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGRyYXcgY3JpdGVyaWFcclxuICAgIFVzZXJUYXNrTWFuYWdlci5nZXREZWZhdWx0Q29uZmlncygpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdnZXREZWZhdWx0Q29uZmlncycpO1xyXG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzLnN0YXRlID09PSAnb2snKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIGZpbGxTcGVlZExpc3QoJCgnLmpzX2ZvbGxvdy1zcGVlZCcpLCByZXN1bHQuZGF0YS5mb3VuZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0ZXBSZWR1Y2VyKHN0ZXBOdW1iZXIpIHtcclxuICAgIHN3aXRjaCAoc3RlcE51bWJlcikge1xyXG4gICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgZ2V0RGF0YVN0ZXAyKHN0YXRlLnVzZXJuYW1lKTsgLy8gWy4uLm5ldyBTZXQoc3RhdGUudXNlcm5hbWUpXVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzdGF0ZSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgZ2V0RGF0YVN0ZXAzKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc3RlcE51bWJlcik7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHN0YXRlKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RlZmF1bHQnLCBzdGVwTnVtYmVyKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEluaXQgaGVhZGVyXHJcbiAqL1xyXG5mdW5jdGlvbiBpbml0U3RlcHMoKSB7XHJcbiAgICBjb25zdCAkZm9ybSA9ICQoJy5mb2xsb3ctZm9ybScpO1xyXG4gICAgJCgnLmpzX3Byb2ZpbGUtdXNlci1mb2xsb3c+LmNvbnRhaW5lcicpLnJlbW92ZUNsYXNzKCdjb250YWluZXInKTtcclxuXHJcbiAgICAkZm9ybS5maW5kKCdmaWVsZHNldDpmaXJzdC1jaGlsZCcpLmZhZGVJbignc2xvdycpO1xyXG5cclxuICAgICRmb3JtLmZpbmQoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdJykub24oJ2ZvY3VzJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2lucHV0LWVycm9yJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBuZXh0IHN0ZXBcclxuICAgICRmb3JtLmZpbmQoJy5idG4tbmV4dCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBwYXJlbnRfZmllbGRzZXQgPSAkKHRoaXMpLnBhcmVudHMoJ2ZpZWxkc2V0Jyk7XHJcbiAgICAgICAgbGV0IG5leHRfc3RlcCA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgcmFkaW9CdG5BY3RpdmUgPSBwYXJlbnRfZmllbGRzZXQuZmluZCgnaW5wdXRbbmFtZT1cInVzZXJBY2NvdW50UmFkaW9cIl06Y2hlY2tlZCcpO1xyXG5cclxuICAgICAgICBpZiAocmFkaW9CdG5BY3RpdmUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VybmFtZSA9IHJhZGlvQnRuQWN0aXZlLnBhcmVudHMoJ2xpJykuZGF0YSgndXNlcm5hbWUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RlcFJlZHVjZXIocGFyZW50X2ZpZWxkc2V0LmluZGV4KCksIHN0YXRlKTtcclxuXHJcbiAgICAgICAgcGFyZW50X2ZpZWxkc2V0LmZpbmQoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdLGlucHV0W3R5cGU9XCJlbWFpbFwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS52YWwoKSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2lucHV0LWVycm9yJyk7XHJcbiAgICAgICAgICAgICAgICBuZXh0X3N0ZXAgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2lucHV0LWVycm9yJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKG5leHRfc3RlcCkge1xyXG4gICAgICAgICAgICBwYXJlbnRfZmllbGRzZXQuZmFkZU91dCg0MDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykubmV4dCgpLmZhZGVJbigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gcHJldmlvdXMgc3RlcFxyXG4gICAgJGZvcm0uZmluZCgnLmJ0bi1wcmV2aW91cycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBzdGF0ZS51c2VybmFtZSA9IFsuLi5uZXcgU2V0KHN0YXRlLnVzZXJuYW1lKV07XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCdmaWVsZHNldCcpLmZhZGVPdXQoNDAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucHJldigpLmZhZGVJbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gc3BlZWQgcmFkaW8tYnRuIGdyb3VwXHJcbiAgICAkKCcuanNfZm9sbG93LXNwZWVkIGlucHV0W3R5cGU9cmFkaW9dJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gJCh0aGlzKS5hdHRyKCd2YWx1ZScpO1xyXG4gICAgICAgIHN0YXRlLnVzZXJfZGVmYXVsdF9jb25maWcgPSB7XHJcbiAgICAgICAgICAgIHRhc2tfbW9kZTogdmFsdWUudG9VcHBlckNhc2UoKVxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBzdWJtaXRcclxuICAgICRmb3JtLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGNvbnN0IGdlbmRlclZhbCA9ICQodGhpcykuZmluZCgnLnNlbGVjdC1nZW5kZXIgb3B0aW9uOnNlbGVjdGVkJykudmFsKCk7XHJcbiAgICAgICAgc3RhdGUudXNlcl9kZWZhdWx0X2NvbmZpZyA9IHtcclxuICAgICAgICAgICAgLi4uc3RhdGUudXNlcl9kZWZhdWx0X2NvbmZpZyxcclxuICAgICAgICAgICAgY3JpdGVyaWE6IHtcclxuICAgICAgICAgICAgICAgIGdlbmRlcjogZ2VuZGVyVmFsLnRvVXBwZXJDYXNlKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgbGltaXQgPSBkb2N1bWVudC5mb3Jtc1snZm9sbG93LWZvcm0nXVsnbGltaXQnXTtcclxuICAgICAgICBjb25zdCBoYXZlX3Bvc3RzID0ge1xyXG4gICAgICAgICAgICBmcm9tOiBkb2N1bWVudC5mb3Jtc1snZm9sbG93LWZvcm0nXVsnaGF2ZV9wb3N0c19mcm9tJ10udmFsdWUsXHJcbiAgICAgICAgICAgIHRvOiBkb2N1bWVudC5mb3Jtc1snZm9sbG93LWZvcm0nXVsnaGF2ZV9wb3N0c190byddLnZhbHVlXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBoYXZlX2ZvbGxvd2VycyA9IHtcclxuICAgICAgICAgICAgZnJvbTogZG9jdW1lbnQuZm9ybXNbJ2ZvbGxvdy1mb3JtJ11bJ2hhdmVfZm9sbG93ZXJzX2Zyb20nXS52YWx1ZSxcclxuICAgICAgICAgICAgdG86IGRvY3VtZW50LmZvcm1zWydmb2xsb3ctZm9ybSddWydoYXZlX2ZvbGxvd2Vyc190byddLnZhbHVlXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBoYXZlX2ZvbGxvd2luZ3MgPSB7XHJcbiAgICAgICAgICAgIGZyb206IGRvY3VtZW50LmZvcm1zWydmb2xsb3ctZm9ybSddWydoYXZlX2ZvbGxvd2luZ3NfZnJvbSddLnZhbHVlLFxyXG4gICAgICAgICAgICB0bzogZG9jdW1lbnQuZm9ybXNbJ2ZvbGxvdy1mb3JtJ11bJ2hhdmVfZm9sbG93aW5nc190byddLnZhbHVlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKGxpbWl0LnZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICBsaW1pdC5mb2N1cygpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0YXRlWyd1c2VyX2RlZmF1bHRfY29uZmlnJ10uY3JpdGVyaWEgPSB7XHJcbiAgICAgICAgICAgIGxpbWl0OiBsaW1pdC52YWx1ZSxcclxuICAgICAgICAgICAgJ3VuZm9sbG93X3RoZW4nOiAhISQoJyN1bmZvbGxvd190aGVuOmNoZWNrZWQnKS5sZW5ndGgsXHJcbiAgICAgICAgICAgICdmb2xsb3dfb25fY2xvc2VkX3Byb2ZpbGVzJzogISEkKCcjZm9sbG93X29uX2Nsb3NlZF9wcm9maWxlczpjaGVja2VkJykubGVuZ3RoLFxyXG4gICAgICAgICAgICBoYXZlX3Bvc3RzLFxyXG4gICAgICAgICAgICBoYXZlX2ZvbGxvd2VycyxcclxuICAgICAgICAgICAgaGF2ZV9mb2xsb3dpbmdzXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgJCh0aGlzKS5maW5kKCdpbnB1dFt0eXBlPVwidGV4dFwiXSxpbnB1dFt0eXBlPVwibnVtYmVyXCJdLGlucHV0W3R5cGU9XCJlbWFpbFwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS52YWwoKSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2lucHV0LWVycm9yJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdpbnB1dC1lcnJvcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHN0YXRlLnR5cGUgPSAnRk9MTE9XSU5HJztcclxuICAgICAgICBzdGF0ZS5zdWJ0eXBlID0gJ0ZPTExPV0lOR19MSVNUJztcclxuICAgICAgICBjb25zb2xlLmxvZygnbWFrZSByZXF1ZXN0KiogIHBvc3Q6IFN0YXJ0Rm9sbG93aW5nTGlzdCcsIHN0YXRlKTtcclxuXHJcbiAgICAgICAgVXNlclRhc2tNYW5hZ2VyLnBvc3RTdGFydEZvbGxvd2luZ0xpc3Qoc3RhdGUpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cy5zdGF0ZSA9PT0gJ29rJykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XHJcbiAgICAgICAgICAgICAgICAkKCcuZm9ybS1zdWJtaXQtZmluaXNoJykuYWRkQ2xhc3MoJ2QtYmxvY2snKVxyXG4gICAgICAgICAgICAgICAgICAgIC5maW5kKCcuYWxlcnQnKS5hcHBlbmQoYDxwPnRhc2tfaWQ6ICR7cmVzdWx0LmRhdGEudGFza19pZH08L3A+YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBhbGVydCBjbG9zZVxyXG4gICAgJCgnLmZvcm0tc3VibWl0LWZpbmlzaCAuY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gJCh0aGlzKS5jbG9zZXN0KCdmb3JtLXN1Ym1pdC1maW5pc2gnKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpO1xyXG4gICAgICAgICQoJyN2LXBpbGxzLXJ1bm5lZC10YWInKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgIHdpbmRvdy5QdWJTdWIucHVibGlzaChDT05TVC5ldmVudHMudGFza3MuTkVXX1RBU0tfQ1JFQVRFRCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLypcclxuZnVuY3Rpb24gZml4U3RlcEluZGljYXRvcihuKSB7XHJcbiAgICAvLyBUaGlzIGZ1bmN0aW9uIHJlbW92ZXMgdGhlIFwiYWN0aXZlXCIgY2xhc3Mgb2YgYWxsIHN0ZXBzLi4uXHJcbiAgICB2YXIgaSwgeCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzdGVwXCIpO1xyXG4gICAgZm9yIChpID0gMDsgaSA8IHgubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB4W2ldLmNsYXNzTmFtZSA9IHhbaV0uY2xhc3NOYW1lLnJlcGxhY2UoXCIgYWN0aXZlXCIsIFwiXCIpO1xyXG4gICAgfVxyXG4gICAgLy8uLi4gYW5kIGFkZHMgdGhlIFwiYWN0aXZlXCIgY2xhc3Mgb24gdGhlIGN1cnJlbnQgc3RlcDpcclxuICAgIHhbbl0uY2xhc3NOYW1lICs9IFwiIGFjdGl2ZVwiO1xyXG59Ki9cclxuXHJcbmZ1bmN0aW9uIG1vZGlmeUFjY0xpc3QoKSB7XHJcbiAgICAvLyBjb25zdCByYWRpb0J0biA9IChpZHgpID0+IGA8ZGl2IGNsYXNzPVwiY29sIGN1c3RvbS1jb250cm9sIGN1c3RvbS1yYWRpbyBqc191c2VyLXJhZGlvXCI+XHJcbiAgICAvLyAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwidXNlckFjY291bnRSYWRpb1wiIGlkPVwiY3VzdG9tUmFkaW8tJHtpZHh9XCIgY2xhc3M9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiIHZhbHVlPVwiXCI+XHJcbiAgICAvLyAgICAgICAgIDxsYWJlbCBjbGFzcz1cImN1c3RvbS1jb250cm9sLWxhYmVsXCIgZm9yPVwiY3VzdG9tUmFkaW8tJHtpZHh9XCI+0J/QvtC00L/QuNGB0LDRgtGM0YHRjzwvbGFiZWw+XHJcbiAgICAvLyAgICAgPC9kaXY+YDtcclxuICAgIGNvbnN0IHJhZGlvQnRuQXBwZW5kID0gKGlkeCkgPT4gYDxkaXYgY2xhc3M9XCJcIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ1c2VyQWNjb3VudFJhZGlvXCIgaWQ9XCJjdXN0b21SYWRpby0ke2lkeH1cIiBjbGFzcz1cImN1c3RvbS1jb250cm9sLWlucHV0IGQtbm9uZVwiIHZhbHVlPVwiXCI+XHJcbiAgICAgICAgPC9kaXY+YDtcclxuICAgIGNvbnN0IHJhZGlvQnRuV3JhcCA9IChpZHgpID0+IGA8bGFiZWwgY2xhc3M9XCJhY2NvdW50cy1saXN0LS1sYWJlbC13cmFwcGVyIGNvbCBtYi0wIG1lZGlhIHB5LTNcIiBmb3I9XCJjdXN0b21SYWRpby0ke2lkeH1cIj48L2xhYmVsPmA7XHJcbiAgICBjb25zdCAkYWNjb3VudHNMaXN0ID0gJCgnLmFjY291bnRzLWxpc3QnKTtcclxuICAgIGNvbnN0ICRsaSA9ICRhY2NvdW50c0xpc3QuZmluZCgnbGkubWVkaWEnKTtcclxuICAgICRsaS5hZGRDbGFzcygnanNfdXNlci1yYWRpbycpLnJlbW92ZUNsYXNzKCdweS0zIG1lZGlhJyk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAkbGkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvLyAkKCRsaVtpXSkuYXBwZW5kKHJhZGlvQnRuKGkpKTtcclxuICAgICAgICAkKCRsaVtpXSkud3JhcElubmVyKHJhZGlvQnRuV3JhcChpKSkuYXBwZW5kKHJhZGlvQnRuQXBwZW5kKGkpKTtcclxuICAgIH1cclxuICAgIFVzZXJUYXNrTWFuYWdlci5nZXRUYXNrVHlwZXMoKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0LnN0YXR1cy5zdGF0ZSA9PT0gJ29rJykge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICBmaWxsTGlzdFR5cGVzKCQoJy5qc190YXNrLXR5cGVzJyksIHJlc3VsdC5kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuanNfdXNlci1yYWRpbycpLm9uKCdjbGljaycsICdpbnB1dFt0eXBlPXJhZGlvXScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgY29uc3QgJHBhcmVudEZpZWxkc2V0ID0gJCh0aGlzKS5wYXJlbnRzKCdmaWVsZHNldCcpO1xyXG4gICAgICAgICQoJ2xpLmFjdGl2ZScsICRwYXJlbnRGaWVsZHNldCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnbGknKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLmJ0bi1uZXh0JywgJHBhcmVudEZpZWxkc2V0KS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5jaGVja2JveC1jZWxsJykub24oJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3ZhbGlkYXRlJyk7XHJcbiAgICAgICAgLy8gdXBkYXRlU3RhdHVzKCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyogd29ya2luZyBkZW1vIDogaHR0cDovL2JydXR1c2luLm9yZy9qc29uLWZvcm1zLyMxM1xyXG5mdW5jdGlvbiBmb3JtRnJvbUpzb24oKSB7XHJcbiAgICBjb25zdCBzY2hlbWEgPSB7XHJcbiAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXHJcbiAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgXCJwcm9wMVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnRlZ2VyXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJwcm9wMlwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnRlZ2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInJlcXVpcmVkXCI6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJwcm9wM1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnRlZ2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInJlcXVpcmVkXCI6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJjb21wb3NpdGUxXCI6IHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5lc3RlZDFcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXF1aXJlZFwiOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5lc3RlZDJcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXF1aXJlZFwiOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwicmVxdWlyZWRcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmVzdGVkMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmVzdGVkMlwiXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiY29tcG9zaXRlMlwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcclxuICAgICAgICAgICAgICAgIFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuZXN0ZWQxXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuZXN0ZWQyXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcInJlcXVpcmVkXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICBcIm5lc3RlZDFcIixcclxuICAgICAgICAgICAgICAgICAgICBcIm5lc3RlZDJcIlxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInJlcXVpcmVkXCI6IFtcclxuICAgICAgICAgICAgXCJwcm9wMVwiLFxyXG4gICAgICAgICAgICBcInByb3AyXCIsXHJcbiAgICAgICAgICAgIFwiY29tcG9zaXRlMVwiXHJcbiAgICAgICAgXVxyXG4gICAgfTtcclxuICAgIGNvbnN0IEJydXR1c2luRm9ybXMgPSB3aW5kb3cuYnJ1dHVzaW5bJ2pzb24tZm9ybXMnXTtcclxuICAgIGNvbnN0IGJmID0gQnJ1dHVzaW5Gb3Jtcy5jcmVhdGUoc2NoZW1hKTtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtMScpO1xyXG4gICAgY29uc29sZS5sb2cod2luZG93LmJydXR1c2luKTtcclxuICAgIGJmLnJlbmRlcihjb250YWluZXIsIGRhdGEpO1xyXG59Ki9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgaWYgKCQoJy5mb2xsb3cnKS5sZW5ndGgpIHtcclxuICAgICAgICBmb2xsb3dTdGF0dXMuaW5pdCgpO1xyXG4gICAgICAgIGluaXRTdGVwcygpO1xyXG4gICAgICAgIHdpbmRvdy5QdWJTdWIuc3Vic2NyaWJlKENPTlNULmV2ZW50cy5pbnN0YWdyYW1BY2NvdW5zLklOU1RBR1JBTV9BQ0NPVU5TX1JFTkRFUkVELCAoZXZlbnROYW1lLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIG1vZGlmeUFjY0xpc3QoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL2ZvbGxvdy9mb2xsb3cuanMiLCIvLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuLy8gY29uc3QgaGFtYnVyZ2VyQnV0dG9uQ2xzID0gJyNhc2lkZV9tb2JpbGVfX2J1dHRvbic7XHJcbi8vIGNvbnN0IGhhbWJ1cmdlck1lbnVDbHMgPSAnLmFzaWRlLWJ1cmdlci1tZW51JztcclxuLy8gY29uc3QgaGFtYnVyZ2VyTWVudU9wZW5lZENsYXNzID0gJ2J1cmdlci1tZW51LS1jbG9zZWQnO1xyXG4vLyBjb25zdCBoYW1idXJnZXJCdXR0b25DbG9zZUNsYXNzID0gJ2J1cmdlci1tZW51X19idXR0b24tLWNsb3NlJztcclxuY29uc3Qgc2VsZWN0b3JzRWwgPSB7XHJcbiAgICBsZWZ0TWVudToge1xyXG4gICAgICAgIGhhbWJ1cmdlckJ1dHRvbkNsczogJyNhc2lkZV9tb2JpbGVfX2J1dHRvbicsXHJcbiAgICAgICAgaGFtYnVyZ2VyTWVudUNsczogJy5hc2lkZS1idXJnZXItbWVudScsXHJcbiAgICAgICAgaGFtYnVyZ2VyTWVudU9wZW5lZENsYXNzOiAnYnVyZ2VyLW1lbnUtLWNsb3NlZCcsXHJcbiAgICAgICAgaGFtYnVyZ2VyQnV0dG9uQ2xvc2VDbGFzczogJ2J1cmdlci1tZW51X19idXR0b24tLWNsb3NlJ1xyXG4gICAgfSxcclxuICAgIHJpZ2h0TWVudToge1xyXG4gICAgICAgIGhhbWJ1cmdlckJ1dHRvbkNsczogJyNoZWFkZXJfbW9iaWxlX3RvZ2dsZXInLFxyXG4gICAgICAgIGhhbWJ1cmdlck1lbnVDbHM6ICcuci1zaWRlLWJ1cmdlci1tZW51JyxcclxuICAgICAgICBoYW1idXJnZXJNZW51T3BlbmVkQ2xhc3M6ICdyLXNpZGUtYnVyZ2VyLW1lbnUtLW9wZW4nLFxyXG4gICAgICAgIGhhbWJ1cmdlckJ1dHRvbkNsb3NlQ2xhc3M6ICdidXJnZXItbWVudS1yaWdodF9fYnV0dG9uLS1jbG9zZSdcclxuICAgIH0sXHJcbiAgICBzdWJIZWFkZXI6IHtcclxuICAgICAgICBoYW1idXJnZXJCdXR0b25DbHM6ICcjaGVhZGVyX21vYmlsZV90b3BiYXJfdG9nZ2xlcicsXHJcbiAgICAgICAgaGFtYnVyZ2VyTWVudUNsczogJy5zdWItaGVhZGVyJyxcclxuICAgICAgICBoYW1idXJnZXJNZW51T3BlbmVkQ2xhc3M6ICdzdWItaGVhZGVyLS1vcGVuJyxcclxuICAgICAgICBoYW1idXJnZXJCdXR0b25DbG9zZUNsYXNzOiAnc3ViLWhlYWRlci1idXR0b24tLWNsb3NlJ1xyXG4gICAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRvZ2dsZSBoYW1idXJnZXIgbWVudSBwb3BvdmVyXHJcbiAqL1xyXG5mdW5jdGlvbiB0b2dnbGVIYW1idXJnZXJNZW51KG1lbnVOYW1lKSB7XHJcbiAgICBjb25zdCB7aGFtYnVyZ2VyTWVudUNscywgaGFtYnVyZ2VyQnV0dG9uQ2xzLCBoYW1idXJnZXJCdXR0b25DbG9zZUNsYXNzLCBoYW1idXJnZXJNZW51T3BlbmVkQ2xhc3N9ID0gc2VsZWN0b3JzRWxbbWVudU5hbWVdO1xyXG4gICAgJChoYW1idXJnZXJCdXR0b25DbHMpLnRvZ2dsZUNsYXNzKGhhbWJ1cmdlckJ1dHRvbkNsb3NlQ2xhc3MpO1xyXG4gICAgJChoYW1idXJnZXJNZW51Q2xzKS50b2dnbGVDbGFzcyhoYW1idXJnZXJNZW51T3BlbmVkQ2xhc3MpO1xyXG59XHJcblxyXG4vKipcclxuICogSW5pdCBoYW1idXJnZXIgbWVudVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBjb25zdCBsZWZ0TWVudSA9ICdsZWZ0TWVudSc7XHJcbiAgICBjb25zdCByaWdodE1lbnUgPSAncmlnaHRNZW51JztcclxuICAgIGNvbnN0IHN1YkhlYWRlciA9ICdzdWJIZWFkZXInO1xyXG5cclxuICAgICQoc2VsZWN0b3JzRWxbbGVmdE1lbnVdLmhhbWJ1cmdlckJ1dHRvbkNscykub24oJ2NsaWNrJywgdG9nZ2xlSGFtYnVyZ2VyTWVudS5iaW5kKHRoaXMsIGxlZnRNZW51KSk7XHJcbiAgICAkKHNlbGVjdG9yc0VsW3JpZ2h0TWVudV0uaGFtYnVyZ2VyQnV0dG9uQ2xzKS5vbignY2xpY2snLCB0b2dnbGVIYW1idXJnZXJNZW51LmJpbmQodGhpcywgcmlnaHRNZW51KSk7XHJcbiAgICAkKHNlbGVjdG9yc0VsW3N1YkhlYWRlcl0uaGFtYnVyZ2VyQnV0dG9uQ2xzKS5vbignY2xpY2snLCB0b2dnbGVIYW1idXJnZXJNZW51LmJpbmQodGhpcywgc3ViSGVhZGVyKSk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9oZWFkZXIvYnVyZ2VyLW1lbnUvYnVyZ2VyLW1lbnUuanMiLCIvLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdXNlcic7XHJcbmltcG9ydCBQdWJTdWIgZnJvbSAncHVic3ViLWpzJzsgLy8gaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvcHVic3ViLWpzXHJcbmltcG9ydCB7Q09OU1R9IGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMnO1xyXG5cclxuY29uc3Qgc2VsZWN0b3JMb2dpblN0YXRlID0gJy5qc19tZXNzYWdlX2xvZ2dlZC0tdGV4dCc7XHJcbmNvbnN0IHNlbGVjdG9yRW1haWxDb25maXJtU3RhdGUgPSAnLmpzX2VtYWlsLWNvbmZpcm0tLXRleHQnO1xyXG5jb25zdCBjbG9zZUNsYXNzID0gJ2Qtbm9uZSc7XHJcbmNvbnN0IG9wZW5lZENsYXNzID0gJ2QtYmxvY2snO1xyXG5cclxuZnVuY3Rpb24gZW1haWxOb3RDb25maXJtZWQoKSB7XHJcbiAgICBjb25zdCAkZW1haWxuTXNnID0gJChzZWxlY3RvckVtYWlsQ29uZmlybVN0YXRlKTtcclxuICAgICRlbWFpbG5Nc2cudGV4dCgnKiplbWFpbE5vdENvbmZpcm1lZCoqIEVtYWlsINC90LUg0L/QvtC00YLQstC10YDQttC00LXQvS4nKS5jc3MoJ2NvbG9yJywgJ2xpZ2h0Y29yYWwnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25Mb2dpblN1YnNjcmliZShtc2csIGRhdGEpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKG1zZywgZGF0YSk7XHJcbiAgICAkKENPTlNULnVpU2VsZWN0b3JzLmhlYWRlck5hdkxvZ2luQnRuKS5hZGRDbGFzcyhjbG9zZUNsYXNzKS5yZW1vdmVDbGFzcyhvcGVuZWRDbGFzcyk7XHJcbiAgICAkKENPTlNULnVpU2VsZWN0b3JzLmhlYWRlclJlZ0J0bikuYWRkQ2xhc3MoY2xvc2VDbGFzcykucmVtb3ZlQ2xhc3Mob3BlbmVkQ2xhc3MpO1xyXG4gICAgJChDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJMb2dpbkJveCkuYWRkQ2xhc3MoY2xvc2VDbGFzcykucmVtb3ZlQ2xhc3Mob3BlbmVkQ2xhc3MpO1xyXG5cclxuICAgICQoJy5uYXYtbGluay5qc19sb2dPdXQnKS5hZGRDbGFzcyhvcGVuZWRDbGFzcykucmVtb3ZlQ2xhc3MoY2xvc2VDbGFzcyk7IC8vIHNob3dcclxuICAgIGNvbnN0ICRsb2dpbk1zZyA9ICQoc2VsZWN0b3JMb2dpblN0YXRlKTtcclxuICAgICRsb2dpbk1zZy50ZXh0KCcqKm9uTG9naW5TdWJzY3JpYmUqKiDQstGLINC30LDQu9C+0LPQuNC90LjQu9C40YHRjCDQsiBMdXhncmFtINGD0YHQv9C10YjQvdC+JykuY3NzKCdjb2xvcicsICdsaWdodGJsdWUnKTtcclxuICAgIGNvbnN0IGlzRW1haWxDb25maXJtZWQgPSBVc2VyLmlzRW1haWxDb25maXJtZWQoKTtcclxuICAgIGlmICghaXNFbWFpbENvbmZpcm1lZCkge1xyXG4gICAgICAgIGVtYWlsTm90Q29uZmlybWVkKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dMb2dvdXQoKSB7XHJcbiAgICAvLyBjaGVjayBpcyBsb2dnZWRcclxuICAgIGNvbnN0IGlzTG9nZ2VkID0gVXNlci5pc0xvZ2dlZEluKCk7XHJcbiAgICBjb25zdCBpc0VtYWlsQ29uZmlybWVkID0gVXNlci5pc0VtYWlsQ29uZmlybWVkKCk7XHJcbiAgICBpZiAoIWlzRW1haWxDb25maXJtZWQpIHtcclxuICAgICAgICBlbWFpbE5vdENvbmZpcm1lZCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzTG9nZ2VkKSB7XHJcbiAgICAgICAgJCgnLm5hdi1saW5rLmpzX2xvZ091dCcpLnBhcmVudCgpLnNob3coKTtcclxuICAgICAgICAkKCcuanNfZW1haWwtY29uZmlybS0tdGV4dCcpLnRleHQoJ9Cy0Ysg0LfQsNC70L7Qs9C40L3QuNC70LjRgdGMINGD0YHQv9C10YjQvdC+Jyk7XHJcbiAgICAgICAgY29uc3Qgb2xkVVJMID0gZG9jdW1lbnQucmVmZXJyZXI7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cob2xkVVJMKTtcclxuICAgICAgICBpZiAob2xkVVJMLmluY2x1ZGVzKCdjb25maXJtLXJlZ2lzdHJhdGlvbicpKSB7XHJcbiAgICAgICAgICAgICQoJy5qc19tZXNzYWdlX2xvZ2dlZC0tdGV4dCcpLnRleHQoJ9Cy0Ysg0L/QvtC00YLQstC10YDQtNC40LvQuCDRgNC10LPQuNGB0YLRgNCw0YbQuNGOJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9uTG9naW5TdWJzY3JpYmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChzZWxlY3RvckxvZ2luU3RhdGUpLnRleHQoJ9Cf0YDQuNCy0LXRgiDQsNC90L7QvdC40LzQvdGL0Lkg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMJyk7XHJcbiAgICAgICAgJChzZWxlY3RvckVtYWlsQ29uZmlybVN0YXRlKS5lbXB0eSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogSW5pdCBoZWFkZXJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0SGVhZGVyKCkge1xyXG4gICAvLyBjaGVjayBvdGhlciBoYW5kbGVyIGluIGxvZ2luLWZvcm0uanNcclxuICAgIGNvbnN0ICRsb2dpbkJveCA9ICQoQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyTG9naW5Cb3gpO1xyXG4gICAgY29uc3QgJHJlZ2lzdGVyQm94ID0gJChDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJSZWdCb3gpO1xyXG5cclxuICAgIFB1YlN1Yi5zdWJzY3JpYmUoQ09OU1QuZXZlbnRzLlVTRVJfTE9HR0VELCBvbkxvZ2luU3Vic2NyaWJlKTtcclxuXHJcbiAgICBzaG93TG9nb3V0KCk7XHJcblxyXG4gICAgJChDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJSZWdCdG4pLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAkbG9naW5Cb3guaGlkZSgpO1xyXG4gICAgICAgICRyZWdpc3RlckJveC5jc3Moeyd0b3AnOiAwLCAncmlnaHQnOiAwfSlcclxuICAgICAgICAgICAgLmFkZENsYXNzKCdiZy1saWdodCBib3JkZXIgbXQtNSBteC1hdXRvIHBvc2l0aW9uLWFic29sdXRlIHB4LTMgZC1ibG9jaycpXHJcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKENPTlNULnVpU2VsZWN0b3JzLmhlYWRlck5hdkxvZ2luQnRuKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgJGxvZ2luQm94LmFkZENsYXNzKCdkLWJsb2NrJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICRyZWdpc3RlckJveC5hZGRDbGFzcygnZC1ub25lJykucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKTtcclxuICAgIH0pO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3MvaGVhZGVyL2hlYWRlci5qcyIsIi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy91c2VyJztcclxuLy8gaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3NwaW5uZXInO1xyXG5pbXBvcnQgdmlld1V0aWxzIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy92aWV3JztcclxuLy8gaW1wb3J0IFB1YlN1YiBmcm9tICdwdWJzdWItanMnO1xyXG5pbXBvcnQge0NPTlNUfSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29uc3RzJztcclxuXHJcbi8vINCf0L7RgdC70LUg0LTQvtCx0LDQstC70LXQvdC40Y8g0LDQutC60LDRg9C90YLQsCDRgdC90L7QstCwINC00LXRgNC90YPRgtGMINCc0JXQotCQINC4INC/0LXRgNC10YDQuNGB0L7QstCw0YLRjCDRgdC/0LjRgdC+0Log0LDQutC60LDRg9C90YLQvtCyXHJcbmNvbnN0IGFkZEluc3RhZ3JhbUFjY291bnQgPSAobmV3Rm9ybURhdGEpID0+IHtcclxuICAgIGNvbnN0IGNiRXJyb3IgPSAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SJywgcmVzdWx0KTtcclxuICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKCQoJy5lcnJvci1tc2cnKSxcclxuICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5zdGF0ZSxcclxuICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5tZXNzYWdlIHx8ICdMb2dpbiBlcnJvcicpO1xyXG4gICAgICAgIC8vICQoX2xvZ2luQm94KS5hZGRDbGFzcyhjbG9zZUNsYXNzKS5yZW1vdmVDbGFzcyhvcGVuZWRDbGFzcyk7XHJcbiAgICB9O1xyXG5cclxuICAgIFVzZXIuYWRkSW5zdGFncmFtQWNjb3VudChuZXdGb3JtRGF0YSwgY2JFcnJvcikudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCwgcmVzdWx0LnN0YXR1cyk7XHJcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyO1xyXG4gICAgICAgICAgICBjb25zdCAkbXNnTGlzdCA9ICQoJy5hY2NvdW50cy1saXN0Jyk7XHJcbiAgICAgICAgICAgICRtc2dMaXN0LmVtcHR5KCk7XHJcbiAgICAgICAgICAgIC8vIHRvZG8gOiByZWxvYWQgbGlzdFxyXG4gICAgICAgICAgICAvLyBmaWxsTGlzdCgkbXNnTGlzdCwgcmVzdWx0LmRhdGEuYWNjb3VudHMpO1xyXG4gICAgICAgICAgICAvLyBhZGRMaXN0SGFuZGxlcigpO1xyXG5cclxuICAgICAgICAgICAgLy8gdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSgkdGV4dEFyZWFEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgLy8gICAgIHJlc3VsdC5zdGF0dXMuc3RhdGUsXHJcbiAgICAgICAgICAgIC8vICAgICByZXN1bHQuc3RhdHVzLm1lc3NhZ2UgfHwgJ0xvZ2luIGVycm9yJyk7XHJcbiAgICAgICAgICAgIC8vICQoX2xvZ2luQm94KS5hZGRDbGFzcyhjbG9zZUNsYXNzKS5yZW1vdmVDbGFzcyhvcGVuZWRDbGFzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIC8vIHRvZG86IHJlbmRlciBmb3IgdXNlclxyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnc3VibWl0JywgbmV3Rm9ybURhdGEpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gYWRkT25Mb2FkSGFuZGxlcnMoKSB7XHJcbiAgICAvLyAkKCcuanNfcmVwZWF0LXNlY3VyaXR5LWNvZGUnKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG5cclxuICAgIC8vIH0pO1xyXG5cclxuICAgICQoJy5qc19hZGQtaW5zdGFncmFtLWFjY291bnQnKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJ0biA9ICQoZS50YXJnZXQpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RhbEJvZHkgPSBidG4uY2xvc2VzdCgnLm1vZGFsJykuZmluZCgnLm1vZGFsLWRpYWxvZyAubW9kYWwtYm9keScpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gJG1vZGFsQm9keS5maW5kKCdpbnB1dFtuYW1lPVwidXNlcm5hbWVcIl0nKS52YWwoKS50cmltKCk7XHJcbiAgICAgICAgY29uc3QgcGFzc3dvcmQgPSAkbW9kYWxCb2R5LmZpbmQoJ2lucHV0W25hbWU9XCJwYXNzXCJdJykudmFsKCkudHJpbSgpO1xyXG4gICAgICAgIGNvbnN0ICRmb3JtID0gJCgnZm9ybScsICRtb2RhbEJvZHkpO1xyXG4gICAgICAgIGNvbnN0IGZvcm0gPSAkZm9ybS5nZXQoMCk7XHJcbiAgICAgICAgY29uc3QgY3NzVmFsaWRhdGlvbkNsYXNzID0gJ2Zvcm0tdmFsaWRhdGlvbic7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgLy8gY29uc3QgdmFsaWRhdG9yID0gbmV3IFZhbGlkYXRvcigkZm9ybSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codmFsaWRhdG9yLnZhbGlkYXRlKCkpO1xyXG4gICAgICAgIGlmIChmb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICAgICAgICBhZGRJbnN0YWdyYW1BY2NvdW50KHt1c2VybmFtZSwgcGFzc3dvcmR9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBIaWdobGlnaHQgZXJyb3JzXHJcbiAgICAgICAgICAgIGlmIChmb3JtLnJlcG9ydFZhbGlkaXR5KSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtLnJlcG9ydFZhbGlkaXR5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJGZvcm0uYWRkQ2xhc3MoY3NzVmFsaWRhdGlvbkNsYXNzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdXNlcm5hbWUgfHwgIXBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdub3QgdmFsaWQgLSBFbXB0eSBmaWVsZHMnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRMaXN0SGFuZGxlcigvKiB1c2VybmFtZSovKSB7XHJcbiAgICAvLyAkKCcjeW91ck1vZGFsSUQnKS5vbignc2hvdy5icy5tb2RhbCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgIC8vICAgICB2YXIgeW91cnBhcmFtZXRlciA9IGUucmVsYXRlZFRhcmdldC5kYXRhc2V0LnlvdXJwYXJhbWV0ZXI7XHJcbiAgICAvLyAgICAgLy8gRG8gc29tZSBzdHVmZiB3LyBpdC5cclxuICAgIC8vIH0pO1xyXG4gICAgbGV0IGNoZWNrcG9pbnRUeXBlID0gJyc7XHJcblxyXG4gICAgJCgnLmpzX3Bhc3MtY2hlY2twb2ludC1idG4nKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0ICRidXR0b24gPSAkKGUudGFyZ2V0KTtcclxuICAgICAgICBjb25zdCB1c2VybmFtZSA9ICRidXR0b24uZGF0YSgndXNlcm5hbWUnKTtcclxuICAgICAgICBjaGVja3BvaW50VHlwZSA9ICRidXR0b24uZGF0YSgnY2hlY2twb2ludFR5cGUnKSB8fCBjaGVja3BvaW50VHlwZTtcclxuICAgICAgICAvLyAkKCcjc2VjdXJpdHktY29kZScpLmRhdGEoJ2NoZWNrcG9pbnRUeXBlJywgY2hlY2twb2ludFR5cGUpO1xyXG4gICAgICAgIC8vIHRvZG8gYWRkICdjaGVja3BvaW50VHlwZScgdG8gbW9kYWxcclxuICAgICAgICBjb25zdCBzZW5kVG8gPSAoY2hlY2twb2ludFR5cGUgPT09ICdQSE9ORScpID8gJ9GC0LXQu9C10YTQvtC9JyA6ICdlbWFpbCc7XHJcbiAgICAgICAgLy8gU3Bpbm5lci5zdGFydCgkYnV0dG9uLCAnZmEta2V5Jyk7XHJcblxyXG4gICAgICAgIGlmIChjaGVja3BvaW50VHlwZSA9PT0gJ0VNQUlMX09SX1BIT05FJykge1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgLy8g0LjQvdC/0YPRgtGLINGB0L/RgNGP0YLQsNC90YssXHJcbiAgICAgICAgICAgIC8vINC/0L7QutCw0LfQsNGC0Ywg0YHQtdGA0YvQtSDQv9C10YDQtdC60LvRjtGH0LDRgtC10LvQuCAo0LLRi9Cx0YDQsNC7INGC0LjQvylcclxuICAgICAgICAgICAgLy8g0LXRgdGC0Ywg0LrQvdC+0L/QutCwINCX0LDQv9GA0L7RgdC40YLRjCDQutC+0LQg0L/QvtC00YLQstC10YDQttC00LXQvdC40LVcclxuICAgICAgICAgICAgJCgnI3NlY3VyaXR5LWNvZGUtcGhvbmVPcmVtYWlsJykubW9kYWwoe3Nob3c6IHRydWUsIHVzZXJuYW1lfSk7XHJcblxyXG4gICAgICAgICAgICAvLyDQvdC1INC+0YLQv9GA0LDQstC70Y/QtdC8INGA0LXQutCy0LXRgdGCXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFVzZXIuZ2V0U2VjdXJpdHlLZXkodXNlcm5hbWUsIGNoZWNrcG9pbnRUeXBlKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlY3VyaXR5S2V5IHJlY2VpdmVkOicsIHJlc3VsdC5zdGF0dXMuc3RhdGUpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cy5zdGF0ZSA9PT0gJ29rJykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJG1vZGFsID0gJCgnI3NlY3VyaXR5LWNvZGUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTcGlubmVyLnN0b3AoJGJ1dHRvbiwgJ2ZhLWtleScpO1xyXG4gICAgICAgICAgICAgICAgJCgnLmpzX3N1Y2Nlc3MtZmVlZGJhY2snLCAkbW9kYWwpLmVtcHR5KCkudGV4dChg0JrQu9GO0Ycg0L/QvtC00YLQstC10YDQttC00LXQvdC40Y8g0LHRi9C7INC+0YLQv9GA0LDQstC70LXQvSDQktCw0Lwg0L3QsCAke3NlbmRUb31gKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKCcjc2VjdXJpdHktY29kZScpLmF0dHIoJ2RhdGEtdXNlcm5hbWUnLCB1c2VybmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGluc2lkZSBtb2RhbFxyXG4gICAgJCgnLmpzX2NvbmZpcm0tc2VjdXJpdHktY29kZScpLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYnRuID0gJChlLnRhcmdldCk7XHJcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSBidG4uY2xvc2VzdCgnI3NlY3VyaXR5LWNvZGUnKS5kYXRhKCd1c2VybmFtZScpO1xyXG4gICAgICAgIGNvbnN0ICRrZXlJbnB1dCA9IGJ0bi5jbG9zZXN0KCcubW9kYWwnKS5maW5kKCcubW9kYWwtZGlhbG9nIGZvcm0gaW5wdXQuanNfY29uZmlybS1rZXknKTtcclxuICAgICAgICBjb25zdCBrZXkgPSAka2V5SW5wdXQudmFsKCkudHJpbSgpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RhbCA9IGJ0bi5jbG9zZXN0KCcubW9kYWwnKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICBpZiAoa2V5Lmxlbmd0aCAhPT0gNikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFVzZXIuY29uZmlybVNlY3VyaXR5S2V5KGtleSwgdXNlcm5hbWUpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cy5zdGF0ZSAhPT0gJ29rJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdqc19jb25maXJtOicsIHJlc3VsdC5zdGF0dXMuc3RhdGUsICdjbG9zZSBtb2RhbCcpO1xyXG4gICAgICAgICAgICAkbW9kYWwubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnInKTtcclxuICAgICAgICAgICAgJCgnLmpzX3N1Y2Nlc3MtZmVlZGJhY2snLCAkbW9kYWwpLnRleHQoJ9CX0LDQv9GA0L7RgSDQvdC1INC+0YLQv9GA0LDQstC70LXQvScpLmNzcygnY29sb3InLCAncmVkJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCdmb3JtIGlucHV0W21pbmxlbmd0aF0nKS5vbignYmx1cicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBsZW4gPSAkKHRoaXMpLnZhbCgpLnRyaW0oKS5sZW5ndGg7XHJcbiAgICAgICAgY29uc3QgbWluTGVuID0gTnVtYmVyKCQodGhpcykuYXR0cignbWlubGVuZ3RoJykpO1xyXG4gICAgICAgIC8vIGNvbnN0IG1lc3NhZ2UgPSBtaW5MZW4gPD0gbGVuID8gJycgOiBtaW5MZW4gKyAnIGNoYXJhY3RlcnMgbWluaW11bSc7XHJcbiAgICAgICAgaWYgKG1pbkxlbiAhPT0gbGVuKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuY3NzKCdib3JkZXJDb2xvcicsICdyZWQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNzcygnYm9yZGVyQ29sb3InLCAnI2NlZDRkYScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLnNldEN1c3RvbVZhbGlkaXR5KG1lc3NhZ2UpXHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBvbkhpZGVNb2RhbChlKSB7XHJcbiAgICAgICAgY29uc3QgJG1vZGFsID0gJChlLnRhcmdldCk7XHJcbiAgICAgICAgJG1vZGFsLmZpbmQoJy5maXJzdC1zdGVwJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICRtb2RhbC5maW5kKCcuc2Vjb25kLXN0ZXAnKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgJCgnLmpzX2NvbmZpcm0ta2V5JykudmFsKCcnKTtcclxuICAgICAgICAkKCcuanNfc3VjY2Vzcy1mZWVkYmFjaycsICRtb2RhbCkucmVtb3ZlQXR0cignc3R5bGUnKS5lbXB0eSgpO1xyXG4gICAgfVxyXG4gICAgJCgnI3NlY3VyaXR5LWNvZGUtcGhvbmVPcmVtYWlsJykub24oJ2hpZGUuYnMubW9kYWwnLCBvbkhpZGVNb2RhbCk7XHJcbiAgICAkKCcjc2VjdXJpdHktY29kZScpLm9uKCdoaWRlLmJzLm1vZGFsJywgb25IaWRlTW9kYWwpO1xyXG5cclxuICAgIC8vIFwiUEhPTkVfT1JfRU1BSUxcIiBtb2RhbFxyXG4gICAgJCgnLmpzX2dldC1zZWN1cml0eS1jb2RlLXBob25lT3JlbWFpbCcpLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgJG1vZGFsID0gJCgnI3NlY3VyaXR5LWNvZGUtcGhvbmVPcmVtYWlsJyk7XHJcbiAgICAgICAgY29uc3QgdHlwZVNlbGVjdGVkID0gJChlLnRhcmdldCkuY2xvc2VzdCgkbW9kYWwpLmZpbmQoJy5qc19idG4tdHlwZS1zd2l0Y2hlciBpbnB1dDpjaGVja2VkJyk7XHJcbiAgICAgICAgY29uc3QgY2hlY2twb2ludFR5cGVBY3RpdmUgPSB0eXBlU2VsZWN0ZWQudmFsKCk7XHJcbiAgICAgICAgY29uc3Qgc2VuZFRvID0gKGNoZWNrcG9pbnRUeXBlQWN0aXZlID09PSAnUEhPTkUnKSA/ICfRgtC10LvQtdGE0L7QvScgOiAnZW1haWwnO1xyXG4gICAgICAgIGNvbnN0IG1vZGFsQ29uZmlnID0gJG1vZGFsLmRhdGEoKVsnYnMubW9kYWwnXS5fY29uZmlnO1xyXG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gbW9kYWxDb25maWcudXNlcm5hbWU7XHJcbiAgICAgICAgVXNlci5nZXRTZWN1cml0eUtleSh1c2VybmFtZSwgY2hlY2twb2ludFR5cGVBY3RpdmUpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAvLyDQv9GA0Lgg0L3QsNC20LDRgtC40LggXCLQl9Cw0L/RgNC+0YHQuNGC0Ywg0LrQvtC0INC/0L7QtNGC0LLQtdGA0LbQtNC10L3QuNC1XCIgLSDQvtGC0L/QsNGA0LvRj9C10YLRgdGPINGA0LXQutCy0LXRgdGCIFwi0YHRgtCw0YDRgiDRh9C10LrQv9C+0LjQvdGCXCIg0L/QvtGP0LLQu9GP0LXRgtGM0YHRjyDQuNC90L/Rg9GCINC4INC60L3QvtC/0LrQsCDQtNGA0YPQs9C40YUg0YLQuNC/0LDRhVxyXG4gICAgICAgICAgICAvLyBnZXQgc2VsZWN0ZWQgYnV0dG9uXHJcblxyXG4gICAgICAgICAgICAvLyDQv9C10YDQtdC60LvRjtGH0LDRgtC10LvRjCjRgdC10YDRi9C5KSDQuCDQutC90L7Qv9C60LAgXCLQl9Cw0L/RgNC+0YHQuNGC0Ywg0LrQvtC0INC/0L7QtNGC0LLQtdGA0LbQtNC10L3QuNC1XCIg0LjRgdGH0LXQt9Cw0Y7RglxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2VjdXJpdHlLZXkgcmVjZWl2ZWQ6JywgcmVzdWx0LnN0YXR1cy5zdGF0ZSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzLnN0YXRlID09PSAnb2snKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuZmlyc3Qtc3RlcCcsICRtb2RhbCkuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgJCgnLnNlY29uZC1zdGVwJywgJG1vZGFsKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcuanNfc3VjY2Vzcy1mZWVkYmFjaycsICRtb2RhbCkuZW1wdHkoKS50ZXh0KGDQmtC70Y7RhyDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjRjyDQsdGL0Lsg0L7RgtC/0YDQsNCy0LvQtdC9INCS0LDQvCDQvdCwICR7c2VuZFRvfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsbExpc3QoJGxpc3QsIGRhdGFBcnJheSkge1xyXG4gICAgY29uc3QgaXRlbXMgPSBkYXRhQXJyYXk7XHJcbiAgICBjb25zdCBjTGlzdCA9ICRsaXN0O1xyXG4gICAgY29uc3QgZGVmYXVsdEF2YXRhclNyYyA9ICdodHRwczovL2kuaW1ndXIuY29tL2pOTlQ0TEUucG5nJztcclxuICAgIGNvbnN0IGluc2VydEl0ZW0gPSAoZGF0YSwgdGV4dCwgY3NzQ2xzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGlUcGwgPSBgJHsoZGF0YSlcclxuICAgICAgICAgICAgPyBgPGxpIGNsYXNzPVwibGlzdC1pbmxpbmUtaXRlbSAke2Nzc0Nsc31cIj48c3BhbiBjbGFzcz1cImZpZ3VyZVwiPiR7ZGF0YX08L3NwYW4+PHNwYW4+JHt0ZXh0fTwvc3Bhbj48L2xpPmBcclxuICAgICAgICAgICAgOiBgPGxpIGNsYXNzPVwibGlzdC1pbmxpbmUtaXRlbSAke2Nzc0Nsc31cIj48c3BhbiBjbGFzcz1cImZpZ3VyZVwiPjA8L3NwYW4+PHNwYW4+JHt0ZXh0fTwvc3Bhbj48L2xpPmB9YDtcclxuICAgICAgICByZXR1cm4gbGlUcGw7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc3RhdHMgPSAoaW5mbykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRwbCA9IGA8ZGl2IGNsYXNzPVwiY29sXCI+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3QtaW5saW5lIHRleHQtY2VudGVyIGNvdW50cy1saXN0XCI+XHJcbiAgICAgICAgICAgICR7KGluZm8pXHJcbiAgICAgICAgICAgICAgPyBgJHtpbnNlcnRJdGVtKGluZm9bJ21lZGlhX2NvdW50J10sICfQn9GD0LHQu9C40LrQsNGG0LjQuCcsICdtZWRpYS1jb3VudCcpfVxyXG4gICAgICAgICAgICAgICAgJHtpbnNlcnRJdGVtKGluZm9bJ2ZvbGxvd2VyX2NvdW50J10sICfQn9C+0LTQv9C40YHRh9C40LrQuCcsICdmb2xsb3dlci1jb3VudCcpfVxyXG4gICAgICAgICAgICAgICAgJHtpbnNlcnRJdGVtKGluZm9bJ2ZvbGxvd2luZ19jb3VudCddLCAn0J/QvtC00L/QuNGB0LrQuCcsICdmb2xsb3dpbmctY291bnQnKX1gXHJcbiAgICAgICAgICAgICAgOiBgJHtpbnNlcnRJdGVtKGZhbHNlLCAn0J/Rg9Cx0LvQuNC60LDRhtC40LgnLCAnbWVkaWEtY291bnQnKX1cclxuICAgICAgICAgICAgICAgICR7aW5zZXJ0SXRlbShmYWxzZSwgJ9Cf0L7QtNC/0LjRgdGH0LjQutC4JywgJ2ZvbGxvd2VyLWNvdW50Jyl9XHJcbiAgICAgICAgICAgICAgICAke2luc2VydEl0ZW0oZmFsc2UsICfQn9C+0LTQv9C40YHQutC4JywgJ2ZvbGxvd2luZy1jb3VudCcpfWBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PmA7XHJcbiAgICAgICAgcmV0dXJuIHRwbDtcclxuICAgIH07XHJcbiAgICBjTGlzdC5lbXB0eSgpLmFkZENsYXNzKCdib3JkZXItbGlnaHQtY29sb3InKTtcclxuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCBpbmZvID0gaXRlbS5pbmZvO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrcG9pbnQgPSBpdGVtLmNoZWNrcG9pbnQgfHwgaXRlbTtcclxuXHJcbiAgICAgICAgaWYgKCFpbmZvKSB7XHJcbiAgICAgICAgICAgICQoYDxsaSBjbGFzcz1cIm1lZGlhIHB5LTNcIiBkYXRhLXVzZXJuYW1lPVwiJHtpdGVtLnVzZXJuYW1lfVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cIm1sLTMgcm91bmRlZFwiIGFsdD1cImRlZmF1bHQgYXZhdGFyXCIgc3JjPVwiJHtkZWZhdWx0QXZhdGFyU3JjfVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWJvZHkgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB1c2VyLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHsoaXRlbS51c2VybmFtZSkgPyBgPGg0IGNsYXNzPVwibXQtMCBtYi0xIG5hbWVcIj4ke2l0ZW0udXNlcm5hbWV9PC9oND5gIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB1c2VyLWNoZWNrcG9pbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHsoY2hlY2twb2ludC5zdGF0dXMgPT09ICdUUklHR0VSRUQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBqc19wYXNzLWNoZWNrcG9pbnQtYnRuIGQtYmxvY2sgbXgtYXV0b1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jaGVja3BvaW50LXR5cGU9XCIke2NoZWNrcG9pbnQudHlwZSB8fCAnRU1BSUwnfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXVzZXJuYW1lPVwiJHtpdGVtLnVzZXJuYW1lIHx8ICcnfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjc2VjdXJpdHktY29kZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEta2V5XCI+PC9pPtCf0YDQvtC50YLQuCDRh9C10LrQv9C+0LjQvdGCPC9idXR0b24+YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGAodG9kbyljaGVja3BvaW50IHN0YXR1cyAtICR7Y2hlY2twb2ludC5zdGF0dXN9YH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAke3N0YXRzKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5gKS5hcHBlbmRUbyhjTGlzdCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChgPGxpIGNsYXNzPVwibWVkaWEgcHktM1wiIGRhdGEtdXNlcm5hbWU9XCIke2l0ZW0udXNlcm5hbWV9XCI+XHJcbiAgICAgICAgICAgICR7KGluZm9bJ3Byb2ZpbGVfcGljX3VybCddKVxyXG4gICAgICAgICAgICAgICAgPyBgPGltZyBjbGFzcz1cIm1sLTMgcm91bmRlZFwiIGFsdD1cIlVzZXIgcGhvdG9cIiBzcmM9XCIke2luZm9bJ3Byb2ZpbGVfcGljX3VybCddfVwiPmBcclxuICAgICAgICAgICAgICAgIDogYDxpbWcgY2xhc3M9XCJtbC0zIHJvdW5kZWRcIiBhbHQ9XCJkZWZhdWx0IGF2YXRhclwiIHNyYz1cIiR7ZGVmYXVsdEF2YXRhclNyY31cIj5gfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEtYm9keSBkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgdXNlci1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHsoaXRlbS51c2VybmFtZSkgPyBgPHAgY2xhc3M9XCJtdC0wIG1iLTEgbmFtZSBsZWFkXCI+JHtpdGVtLnVzZXJuYW1lfTwvcD5gIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgJHsoaW5mby5uYW1lKSA/IGA8aDQgY2xhc3M9XCJtdC0wIG1iLTFcIj4ke2luZm8ubmFtZX08L2g0PmAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAkeyhpbmZvLm5hbWUpID8gJycgOiAnJyAgLyogJHsoaW5mby5lbWFpbCkgPyBgPHAgY2xhc3M9XCJtdC0wIG1iLTFcIj4ke2luZm8uZW1haWx9PC9wPmAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgJHsoaW5mby5waG9uZSkgPyBgPHAgY2xhc3M9XCJtdC0wIG1iLTFcIj4ke2luZm8ucGhvbmV9PC9wPmAgOiAnJ30gKi8gfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHVzZXItY2hlY2twb2ludFwiPiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICR7KGNoZWNrcG9pbnQuc3RhdHVzID09PSAnVFJJR0dFUkVEJylcclxuICAgICAgICAgICAgICAgICAgICA/IGA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBqc19wYXNzLWNoZWNrcG9pbnQtYnRuIGQtYmxvY2sgbXgtYXV0b1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jaGVja3BvaW50LXR5cGU9XCIke2NoZWNrcG9pbnQudHlwZSB8fCAnRU1BSUwnfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXVzZXJuYW1lPVwiJHtpdGVtLnVzZXJuYW1lIHx8ICcnfVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI3NlY3VyaXR5LWNvZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEta2V5XCI+PC9pPtCf0YDQvtC50YLQuCDRh9C10LrQv9C+0LjQvdGCPC9idXR0b24+YFxyXG4gICAgICAgICAgICAgICAgICAgIDogJyd9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICR7c3RhdHMoaW5mbyl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbGk+YCkuYXBwZW5kVG8oY0xpc3QpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgd2luZG93LlB1YlN1Yi5wdWJsaXNoKENPTlNULmV2ZW50cy5pbnN0YWdyYW1BY2NvdW5zLklOU1RBR1JBTV9BQ0NPVU5TX1JFTkRFUkVEKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEluaXQgaGVhZGVyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIGNvbnN0ICRtc2dMaXN0ID0gJCgnLmFjY291bnRzLWxpc3QnKTtcclxuICAgIC8vIGNoZWNrIHdlIGFyZSBpbiBwcm9maWxlIHBhZ2VcclxuICAgIGlmICghJG1zZ0xpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdG9rZW4gPSBVc2VyLmdldFRva2VuKCk7IC8vIHVwZCB0bzogVXNlci5nZXRUb2tlbigpXHJcbiAgICBjb25zdCBtZXRhZGF0YSA9IFVzZXIuZ2V0TWV0YWRhdGEodG9rZW4pO1xyXG4gICAgY29uc3QgcmVzZW5kUmVxdWVzdCA9ICgpID0+IFVzZXIuZ2V0TWV0YWRhdGEodG9rZW4pO1xyXG4gICAgbGV0IGlzU2VuZFJlcU9uY2UgPSBmYWxzZTtcclxuICAgIGNvbnN0IGNoZWNrUmVzcG9uc2UgPSAocmVzdWx0LCBpc1Jlc2VuZFJlcXVlc3QpID0+IHtcclxuICAgICAgICBpZiAoIXJlc3VsdC5zdGF0dXMuc3RhdGUgPT09ICdvaycgfHwgIXJlc3VsdC5kYXRhIHx8ICEkbXNnTGlzdC5sZW5ndGggfHwgaXNSZXNlbmRSZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgIC8vINC/0YDQvtCy0LXRgNGP0Lwg0L7QtNC40L0g0YDQsNC3INC90LDQu9C40YfQuNC1IHJlc3VsdC5kYXRhLmFjY291bnRzLmluZm9cclxuICAgICAgICAgICAgJG1zZ0xpc3QuZW1wdHkoKTtcclxuICAgICAgICAgICAgJChgPGxpIGNsYXNzPVwibWVkaWFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwibXQtMCBtYi0zXCI+0J3QuCDQvtC00L3QvtCz0L4g0JDQutC60LDRg9C90YLQsCDQvdC1INC00L7QsdCw0LLQu9C10L3QvjwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5gKS5hcHBlbmRUbygkbXNnTGlzdCk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzZW5kUmVxdWVzdCgpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrUmVzcG9uc2UocmVzdWx0LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXF1ZXN0IHJlc2VuZCcpO1xyXG4gICAgICAgICAgICB9LCAzNTAwKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDQstGL0LLQvtC0INGA0LXQt9GD0LvRjNGC0LDRgtC+0LIgKGRhdGEuYWNjb3VudHMuaW5mbylcclxuICAgICAgICAkKCcucHJvZmlsZS11c2VyIC5zcGlubmVyLWJveCcpLmFkZENsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICBmaWxsTGlzdCgkbXNnTGlzdCwgcmVzdWx0LmRhdGEuYWNjb3VudHMpO1xyXG4gICAgICAgIGFkZExpc3RIYW5kbGVyKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGNoZWNrIHdlIGFyZSBpbiBwcm9maWxlIHBhZ2VcclxuICAgIGlmICghJG1zZ0xpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZE9uTG9hZEhhbmRsZXJzKCk7XHJcblxyXG4gICAgLy8g0LzQvtC20LXRgiDQuNC90YTQviDQvtGC0YHRg9GC0YHQstC+0LLQsNGC0YwgLSDRgdC00LXQu9Cw0YLRjCDQtdGJ0LUg0YDQsNC3INC30LDQv9GA0L7RgSDRh9C10YDQtdC3IDMg0YHQtdC6LlxyXG5cclxuICAgIG1ldGFkYXRhLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIC8vINC/0YDQvtCy0LXRgNGP0Lwg0L7QtNC40L0g0YDQsNC3INC90LDQu9C40YfQuNC1IHJlc3VsdC5kYXRhLmFjY291bnRzLmluZm9cclxuICAgICAgICBsZXQgaXNSZXNlbmRSZXF1ZXN0ID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5kYXRhICYmIHJlc3VsdC5kYXRhLmFjY291bnRzICYmICFpc1NlbmRSZXFPbmNlKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5kYXRhLmFjY291bnRzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghaXRlbS5pbmZvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNSZXNlbmRSZXF1ZXN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpc1NlbmRSZXFPbmNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjaGVja1Jlc3BvbnNlKHJlc3VsdCwgaXNSZXNlbmRSZXF1ZXN0KTtcclxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSgkKCcuZXJyb3ItbXNnJyksXHJcbiAgICAgICAgICAgICAgICBlcnIuc3RhdHVzIHx8ICcnLFxyXG4gICAgICAgICAgICAgICAgJ9Cd0LUg0L/QvtC70YPRh9C40LvQvtGB0Ywg0LfQsNCz0YDRg9C30LjRgtGMINC00L7RgdGC0YPQv9C90YvQtSBJbnN0YWdyYW0g0LDQutC60LDRg9C90YLRiycpO1xyXG4gICAgICAgIH0sIDMwMDApO1xyXG4gICAgICAgICQoJy5zcGlubmVyLWJveCcpLmFkZENsYXNzKCdkLW5vbmUnKTtcclxuICAgIH0pO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3MvaW5zdGFncmFtLWFjY291bnRzLWxpc3QvaW5zdGFncmFtLWFjY291bnRzLWxpc3QuanMiLCIvKiBlc2xpbnQtZGlzYWJsZSBzb3J0LXZhcnMgKi9cclxuLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3VzZXInO1xyXG5pbXBvcnQgUHViU3ViIGZyb20gJ3B1YnN1Yi1qcyc7IC8vIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3B1YnN1Yi1qc1xyXG5pbXBvcnQgY29va2llU3RvcmFnZSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29va2llJztcclxuLy8gaW1wb3J0IFZhbGlkYXRvciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvZm9ybS12YWxpZGF0b3InO1xyXG5pbXBvcnQgdmlld1V0aWxzIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy92aWV3JztcclxuaW1wb3J0IHtDT05TVH0gZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2NvbnN0cyc7XHJcblxyXG4vLyB3aW5kb3cuJCA9ICQ7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTG9naW5Gb3JtKHNlbGVjdG9yQ3NzKSB7XHJcbiAgICBjb25zdCB7X2Zvcm1JZCwgX2J1dHRvblN1Ym1pdElkLCBfc2hvd0xvZ2luQm94QnRuSWQsIF9sb2dpbkJveH0gPSBzZWxlY3RvckNzcztcclxuICAgIGNvbnN0IHVzZXIgPSBVc2VyLCAvLyBzZXJ2aWNlXHJcbiAgICAgICAgJGZvcm0gPSAkKF9mb3JtSWQpLFxyXG4gICAgICAgICRlbWFpbCA9ICRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJtYWlsXCJdJyksXHJcbiAgICAgICAgJHRleHRBcmVhRGVzY3JpcHRpb24gPSAkKCcjZGVzY3JpcHRpb24nKTtcclxuICAgIC8vIGNvbnN0IG9wZW5lZENsYXNzID0gJ2QtYmxvY2snO1xyXG4gICAgLy8gY29uc3QgY2xvc2VDbGFzcyA9ICdkLW5vbmUnO1xyXG5cclxuICAgIGNvbnN0IHVzZXJMb2dpbkhlYWRlciA9IChfZm9ybURhdGEpID0+IHtcclxuICAgICAgICBjb25zdCBjYkVycm9yID0gKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAkKF9sb2dpbkJveCkuYXBwZW5kKCc8cD5yZXN1bHQuc3RhdHVzLm1lc3NhZ2U8L3A+Jyk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHVzZXIubG9naW4oX2Zvcm1EYXRhLCBjYkVycm9yKVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5kYXRhICYmIHJlc3VsdC5kYXRhLnRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2F2ZSB0aGUgaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGNvb2tpZVN0b3JhZ2Uuc2V0KENPTlNULmNvb2tpZVN0b3JhZ2UudG9rZW4sIHJlc3VsdC5kYXRhLnRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcubmF2LWxpbmsuanNfbG9nT3V0JykucGFyZW50KCkuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXF1ZXN0IHN1Y2NlZWRlZCB3aXRoIEpTT04gcmVzcG9uc2UnLCByZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UoJHRleHRBcmVhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMubWVzc2FnZSB8fCAnTG9naW4gc3VjY3Nlc3MnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LnN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSh0aGlzLiR0ZXh0QXJlYURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgPHA+c3RhdHVzOiAke3Jlc3VsdC5zdGF0dXMuc3RhdGV9PC9wPjxwPiBtZXNzYWdlOiAke3Jlc3VsdC5zdGF0dXMubWVzc2FnZX08L3A+YCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKCR0ZXh0QXJlYURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLm1lc3NhZ2UgfHwgJ0xvZ2luIGVycm9yJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzdWJtaXRGb3JtID0gZnVuY3Rpb24oZm9ybURhdGFPYmopIHtcclxuICAgICAgICBjb25zdCBlbWFpbCA9ICRlbWFpbC52YWwoKSxcclxuICAgICAgICAgICAgcGFzc3dvcmQgPSAkZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwicGFzc1wiXScpLnZhbCgpLFxyXG4gICAgICAgICAgICBfZm9ybURhdGEgPSBmb3JtRGF0YU9iaiB8fCB7ZW1haWwsIHBhc3N3b3JkfTtcclxuXHJcbiAgICAgICAgaWYgKHNlbGVjdG9yQ3NzLmlzTG9naW5JbnN0YWdyYW0pIHtcclxuICAgICAgICAgICAgLy8gdG9kbzogZGVsZXRlIG1lXHJcbiAgICAgICAgICAgIC8vIGFkZEluc3RhZ3JhbUFjY291bnQoe3VzZXJuYW1lOiAkZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwidXNlcm5hbWVcIl0nKS52YWwoKSwgcGFzc3dvcmR9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkZW1haWwudmFsKCRlbWFpbC52YWwoKS50b0xvY2FsZUxvd2VyQ2FzZSgpKTtcclxuICAgICAgICAgICAgdXNlckxvZ2luSGVhZGVyKF9mb3JtRGF0YSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBQdWJTdWIucHVibGlzaChDT05TVC5ldmVudHMuVVNFUl9MT0dHRUQsICdsb2dpbicpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGxvZ091dCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvb2tpZVN0b3JhZ2UucmVtb3ZlKENPTlNULmNvb2tpZVN0b3JhZ2UudG9rZW4pO1xyXG4gICAgICAgIFB1YlN1Yi5wdWJsaXNoKENPTlNULmV2ZW50cy5VU0VSX0xPR09VVCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGJpbmRFdmVudHMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCAkc2hvd0xvZ2luQm94QnRuSWQgPSAkKF9zaG93TG9naW5Cb3hCdG5JZCk7XHJcbiAgICAgICAgY29uc3QgJGxvZ2luQm94ID0gJChfbG9naW5Cb3gpO1xyXG4gICAgICAgIGNvbnN0IG9wZW5lZENsYXNzID0gJ2QtYmxvY2snO1xyXG4gICAgICAgIGNvbnN0IGNsb3NlQ2xhc3MgPSAnZC1ub25lJztcclxuXHJcbiAgICAgICAgJHNob3dMb2dpbkJveEJ0bklkLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzZWxlY3RvckNzcy5pc0xvZ2luSW5zdGFncmFtKSB7XHJcbiAgICAgICAgICAgICAgICAkbG9naW5Cb3guY3NzKHsndG9wJzogMCwgJ3JpZ2h0JzogMH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdiZy1saWdodCBib3JkZXIgbXQtNSBteC1hdXRvIHBvc2l0aW9uLWFic29sdXRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJGxvZ2luQm94LmFkZENsYXNzKG9wZW5lZENsYXNzKS5yZW1vdmVDbGFzcyhjbG9zZUNsYXNzKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgJGJ1dHRvblN1Ym1pdCA9ICQoX2J1dHRvblN1Ym1pdElkKSxcclxuICAgICAgICAgICAgY3NzVmFsaWRhdGlvbkNsYXNzID0gJ2Zvcm0tdmFsaWRhdGlvbic7XHJcblxyXG4gICAgICAgICRidXR0b25TdWJtaXQub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zdCBmb3JtID0gJGZvcm0uZ2V0KDApO1xyXG4gICAgICAgICAgICAvLyBjb25zdCB2YWxpZGF0b3IgPSBuZXcgVmFsaWRhdG9yKCRmb3JtKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codmFsaWRhdG9yLnZhbGlkYXRlKCkpO1xyXG4gICAgICAgICAgICBpZiAoZm9ybS5jaGVja1ZhbGlkaXR5KCkgJiYgdmlld1V0aWxzLmlzRW1haWwoJGVtYWlsLnZhbCgpKSkge1xyXG4gICAgICAgICAgICAgICAgc3VibWl0Rm9ybSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gSGlnaGxpZ2h0IGVycm9yc1xyXG4gICAgICAgICAgICAgICAgaWYgKGZvcm0ucmVwb3J0VmFsaWRpdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtLnJlcG9ydFZhbGlkaXR5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAkZm9ybS5hZGRDbGFzcyhjc3NWYWxpZGF0aW9uQ2xhc3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5uYXYtbGluay5qc19sb2dPdXQnKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGxvZ091dCgpO1xyXG4gICAgICAgICAgICAkKGUudGFyZ2V0KS5wYXJlbnQoKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UoJHRleHRBcmVhRGVzY3JpcHRpb24sICdMb2dnZWQgb3V0Jyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFB1YlN1Yi5zdWJzY3JpYmUoQ09OU1QuZXZlbnRzLlVTRVJfTE9HT1VULCAobXNnKSA9PiB7XHJcbiAgICAgICAgICAgICQoQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyTmF2TG9naW5CdG4pLmFkZENsYXNzKG9wZW5lZENsYXNzKS5yZW1vdmVDbGFzcyhjbG9zZUNsYXNzKTsgLy8gLnNob3coKTtcclxuICAgICAgICAgICAgJChDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJSZWdCdG4pLmFkZENsYXNzKG9wZW5lZENsYXNzKS5yZW1vdmVDbGFzcyhjbG9zZUNsYXNzKTtcclxuICAgICAgICAgICAgJCgnLm5hdi1saW5rLmpzX2xvZ091dCcpLmFkZENsYXNzKGNsb3NlQ2xhc3MpLnJlbW92ZUNsYXNzKG9wZW5lZENsYXNzKTsgLy8gLmhpZGUoKTtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3JMb2dpblN0YXRlID0gJy5qc19tZXNzYWdlX2xvZ2dlZC0tdGV4dCc7XHJcbiAgICAgICAgICAgICQoc2VsZWN0b3JMb2dpblN0YXRlKS50ZXh0KCfQktGLINCy0YvRiNC70Lgg0LjQtyDQsNC60LrQsNGD0L3RgtCwJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpc0xvZ2luQnRuQ2xpY2sgPSAkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnbmF2Lm5hdmJhcicpLmZpbmQoJGxvZ2luQm94KS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzQWRkSW5zdGFncmFtQnRuQ2xpY2tlZCA9ICQoZXZlbnQudGFyZ2V0KS5hdHRyKCdpZCcpID09PSBDT05TVC51aVNlbGVjdG9ycy5pbnN0YWdyYW0uYWRkQWNjb3VudEJ0bklkO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFpc0xvZ2luQnRuQ2xpY2sgJiYgJGxvZ2luQm94Lmhhc0NsYXNzKG9wZW5lZENsYXNzKSAmJiAhaXNBZGRJbnN0YWdyYW1CdG5DbGlja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAkbG9naW5Cb3guYWRkQ2xhc3MoY2xvc2VDbGFzcykucmVtb3ZlQ2xhc3Mob3BlbmVkQ2xhc3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAgICAgYmluZEV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5pdFxyXG4gICAgfTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5qcyIsImltcG9ydCBNZXRlb3JFbW9qaSBmcm9tICdtZXRlb3ItZW1vamknO1xyXG4vLyBpbXBvcnQgcXEgZnJvbSAnZmluZS11cGxvYWRlcic7IC8vdG9kbzogZmluZS11cGxvYWRlXHJcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy91c2VyJztcclxuaW1wb3J0IFVzZXJDb252ZXJzYXRpb24gZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2FwaS11c2VyLWRpcmVjdCc7XHJcbmltcG9ydCB2aWV3VXRpbHMgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3ZpZXcnO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvc3Bpbm5lcic7XHJcbi8vIGltcG9ydCBQdWJTdWIgZnJvbSAncHVic3ViLWpzJzsvLyBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9wdWJzdWItanNcclxuaW1wb3J0IHtDT05TVH0gZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2NvbnN0cyc7XHJcblxyXG5jb25zdCB0b2tlbiA9IFVzZXIuZ2V0VG9rZW4oKTtcclxuY29uc3QgJG1zZ0xpc3QgPSAkKCcubWVzc2FnZXMtbGlzdCcpO1xyXG5sZXQgdXBkYXRlSW50ZXJ2YWwgPSAnJztcclxubGV0IGludGVydmFsSWQgPSBmYWxzZTtcclxuXHJcbmZ1bmN0aW9uIGlzSW5NZXNzYWdlUGFnZSgpIHtcclxuICAgIGNvbnN0ICRtc2dMaXN0ID0gJCgnLm1lc3NhZ2VzLWxpc3QnKTtcclxuICAgIGNvbnN0ICR1c2VyTGlzdCA9ICQoJy5tZXNzYWdlcy11c2VyLWxpc3QnKTtcclxuICAgIHJldHVybiAhISRtc2dMaXN0Lmxlbmd0aCAmJiAhISR1c2VyTGlzdC5sZW5ndGg7XHJcbn1cclxuJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xyXG4gICAgaWYgKCFpc0luTWVzc2FnZVBhZ2UoKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gICAgY29uc3QgbSA9IG5ldyBNZXRlb3JFbW9qaSgpO1xyXG4gICAgY29uc3QgJHBpY2tlciA9ICQoJ3RleHRhcmVhW2RhdGEtbWV0ZW9yLWVtb2ppPVwidHJ1ZVwiXSB+IGRpdicpO1xyXG4gICAgY29uc3Qgc3R5bGUgPSAkcGlja2VyLmF0dHIoJ3N0eWxlJyk7XHJcbiAgICBjb25zdCBzdHlsZU5ldyA9IHN0eWxlLnJlcGxhY2UoJ3RvcDogMzBweDsnLCAndG9wOiAtMjEwcHg7Jyk7XHJcbiAgICAkcGlja2VyLmF0dHIoJ3N0eWxlJywgc3R5bGVOZXcpO1xyXG5cclxuICAgIC8qXHJcbiAgICAvL3RvZG86IGZpbmUtdXBsb2FkZVxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXHJcbiAgICBjb25zdCByZXN0cmljdGVkVXBsb2FkZXIgPSBuZXcgcXEuRmluZVVwbG9hZGVyKHtcclxuICAgICAgICBlbGVtZW50OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmluZS11cGxvYWRlci12YWxpZGF0aW9uJyksXHJcbiAgICAgICAgdGVtcGxhdGU6ICdxcS10ZW1wbGF0ZS12YWxpZGF0aW9uJyxcclxuICAgICAgICByZXF1ZXN0OiB7XHJcbiAgICAgICAgICAgIGVuZHBvaW50OiAnL3NlcnZlci91cGxvYWRzJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGh1bWJuYWlsczoge1xyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcnM6IHtcclxuICAgICAgICAgICAgICAgIHdhaXRpbmdQYXRoOiAnaHR0cHM6Ly9maW5ldXBsb2FkZXIuY29tL3NvdXJjZS9wbGFjZWhvbGRlcnMvd2FpdGluZy1nZW5lcmljLnBuZycsIC8vICcvc291cmNlL3BsYWNlaG9sZGVycy93YWl0aW5nLWdlbmVyaWMucG5nJyxcclxuICAgICAgICAgICAgICAgIG5vdEF2YWlsYWJsZVBhdGg6ICdodHRwczovL2ZpbmV1cGxvYWRlci5jb20vc2VydmVyL3dhaXRpbmctZ2VuZXJpYy5wbmcnIC8vICcvc291cmNlL3BsYWNlaG9sZGVycy9ub3RfYXZhaWxhYmxlLWdlbmVyaWMucG5nJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgICAgICAgIGFsbG93ZWRFeHRlbnNpb25zOiBbJ2pwZWcnLCAnanBnJywgJ3R4dCddLFxyXG4gICAgICAgICAgICBpdGVtTGltaXQ6IDMsXHJcbiAgICAgICAgICAgIHNpemVMaW1pdDogNTAwICogMTAyNFxyXG4gICAgICAgIH1cclxuICAgIH0pOyovXHJcbn0pO1xyXG5cclxuLy8gbWVzc2FnZXMtbGlzdFxyXG5mdW5jdGlvbiBmaWxsTGlzdCgkbGlzdCwgZGF0YUFycmF5LCBpc0FwcGVudFByZXZNc2cpIHtcclxuICAgIGNvbnN0IGl0ZW1zID0gZGF0YUFycmF5O1xyXG4gICAgY29uc3QgY0xpc3QgPSAkbGlzdDtcclxuICAgIC8vIGNvbnN0IGRlZmF1bHRBdmF0YXJTcmMgPSAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9qTk5UNExFLnBuZyc7XHJcbiAgICBjb25zdCBpbnNlcnRNc2cgPSAodmFsdWUsIHR5cGUsIGNzc0NscykgPT4ge1xyXG4gICAgICAgIGxldCBzdHIgPSAnJztcclxuICAgICAgICBzd2l0Y2ggKHR5cGUudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICBjYXNlICdwaG90byc6XHJcbiAgICAgICAgICAgICAgICBzdHIgPSBgPGRpdiBjbGFzcz1cImNoYXQtaW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3ZhbHVlfVwiIGFsdD1cIkNvbnRlbnQgSW1hZ2VcIiBjbGFzcz1cImNvbnRlbnQtaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PmA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbGluayc6XHJcbiAgICAgICAgICAgICAgICBzdHIgPSBgPGRpdiBjbGFzcz1cImNoYXQtaW1nXCI+XHJcbiAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiJHt2YWx1ZX1cIj4ke3ZhbHVlfTwvYT5gO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHN0ciA9IGA8ZGl2IGNsYXNzPVwiY2hhdC10ZXh0XCIgPiR7dmFsdWV9PC9kaXY+YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0cjtcclxuICAgIH07XHJcbiAgICBjb25zdCBhZGRUb0xpc3QgPSAoaXNBcHBlbnRQcmV2TXNnLCAkbGksICRsaXN0KSA9PiB7XHJcbiAgICAgICAgaWYgKGlzQXBwZW50UHJldk1zZykge1xyXG4gICAgICAgICAgICAkbGkuaW5zZXJ0QmVmb3JlKCRsaXN0LmZpbmQoJ2xpOmZpcnN0LWNoaWxkJykpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRsaS5hcHBlbmRUbygkbGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGlmIChpc0FwcGVudFByZXZNc2cpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnaXNBcHBlbnRQcmV2TXNnIHRvJywgY0xpc3QpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjTGlzdC5lbXB0eSgpLmFkZENsYXNzKCdib3JkZXItbGlnaHQtY29sb3InKTtcclxuICAgIH1cclxuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gaXRlbTtcclxuICAgICAgICAvLyBjb25zdCBjaGVja3BvaW50ID0gaXRlbS5jaGVja3BvaW50IHx8IGl0ZW07XHJcblxyXG4gICAgICAgIGlmIChtZXNzYWdlLnNpZGUudG9Mb3dlckNhc2UoKSA9PT0gJ2xlZnQnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRsaSA9ICQoYDxsaSBjbGFzcz1cImNoYXQtaXRlbSBjaGF0LWl0ZW0tbGVmdCBjb2wgZmxleC1jb2x1bW4tcmV2ZXJzZVwiIHZhbHVlPVwiJHttZXNzYWdlLnZhbHVlfVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgJHsobWVzc2FnZVsncHJvZmlsZV9waWNfdXJsJ10pXHJcbiAgICAgICAgICAgICAgICAgICAgPyBgPGRpdiBjbGFzcz1cImNoYXQtaW1nLWJveFwiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHttZXNzYWdlWydwcm9maWxlX3BpY191cmwnXX1cIiBhbHQ9XCJVc2VyIEF2YXRhclwiIGNsYXNzPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNoYXQtdXNlcm5hbWUgdGV4dC1tdXRlZFwiPiR7bWVzc2FnZS51c2VybmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtpbnNlcnRNc2cobWVzc2FnZS52YWx1ZSwgbWVzc2FnZS50eXBlKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImNoYXQtdGltZS10ZXh0XCI+JHt2aWV3VXRpbHMuZ2V0Rm9ybWF0dGVkRGF0ZVV0aWwobWVzc2FnZS50aW1lc3RhbXApfTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5gKTtcclxuICAgICAgICAgICAgYWRkVG9MaXN0KGlzQXBwZW50UHJldk1zZywgJGxpLCBjTGlzdCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgJGxpID0gJChgPGxpIGNsYXNzPVwiY2hhdC1pdGVtIGNoYXQtaXRlbS1yaWdodCBjb2wgZmxleC1jb2x1bW4tcmV2ZXJzZVwiIHZhbHVlPVwiJHttZXNzYWdlLnZhbHVlfVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtpbnNlcnRNc2cobWVzc2FnZS52YWx1ZSwgbWVzc2FnZS50eXBlKX1cclxuICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJwdWxsLXJpZ2h0IGNoYXQtdGltZS10ZXh0XCI+JHt2aWV3VXRpbHMuZ2V0Rm9ybWF0dGVkRGF0ZVV0aWwobWVzc2FnZS50aW1lc3RhbXApfTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+YCk7XHJcbiAgICAgICAgICAgIGFkZFRvTGlzdChpc0FwcGVudFByZXZNc2csICRsaSwgY0xpc3QpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGFkZFBhZ2luYXRpb24oJHdyYXBwZXIsIHBhZ2luYXRpb24pIHtcclxuICAgIGNvbnN0IGN1cnNvciA9IHBhZ2luYXRpb24ucHJldl9jdXJzb3I7XHJcbiAgICBjb25zdCAkYnV0dG9uID0gJChgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGxvYWQtbW9yZSBkLWZsZXggcG9zaXRpb24tYWJzb2x1dGVcIiBzdHlsZT1cInRvcDogLTQycHg7XCJcclxuICAgICAgICBkYXRhLWN1cnNvcj1cIiR7Y3Vyc29yfVwiPtC10YnQtSDQtNCw0LLQsNC5ITwvYnV0dG9uPmApO1xyXG5cclxuICAgIGlmICghJHdyYXBwZXIuY2xvc2VzdCgnLm1lc3NhZ2VzLWxpc3QtYm94JykuZmluZCgnLmxvYWQtbW9yZScpLmxlbmd0aCkge1xyXG4gICAgICAgICRidXR0b24uaW5zZXJ0QmVmb3JlKCR3cmFwcGVyKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB1c2VyRGF0YSA9ICQoJy5tZXNzYWdlcy1saXN0JykuZGF0YSgnY29udmVyc2F0aW9uJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHt1c2VybmFtZSwgY29udmVyc2F0aW9uSWR9ID0gdXNlckRhdGE7XHJcbiAgICAgICAgICAgIFNwaW5uZXIuc3RhcnRCdXR0b25TcGlubmVyKCRidXR0b24pO1xyXG4gICAgICAgICAgICBVc2VyQ29udmVyc2F0aW9uLmdldE1ldGFkYXRhRGV0YWlsQ29udmVyc2F0aW9uKHRva2VuLCB7dXNlcm5hbWUsIGNvbnZlcnNhdGlvbklkLCBjdXJzb3J9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWNlaXZlIG1zZycsIHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICBTcGlubmVyLnN0b3BCdXR0b25TcGlubmVyKCRidXR0b24pO1xyXG4gICAgICAgICAgICAgICAgZmlsbExpc3QoJG1zZ0xpc3QsIHJlc3VsdC5kYXRhLm1ldGEubWVzc2FnZXMsICdhcHBlbnRQcmV2TXNnJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbi8vIG1lc3NhZ2VzLXVzZXItbGlzdFxyXG5mdW5jdGlvbiBmaWxsVXNlckxpc3QoJGxpc3QsIGRhdGFBcnJheSkge1xyXG4gICAgY29uc3QgaXRlbXMgPSBkYXRhQXJyYXkubWV0YTtcclxuICAgIGNvbnN0IGNMaXN0ID0gJGxpc3Q7XHJcbiAgICBjb25zdCBjb252ZXJzYXRpb25EZXRhaWwgPSBmdW5jdGlvbihpdGVtcykge1xyXG4gICAgICAgIGxldCB0cGwgPSAnJztcclxuICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICB0cGwgKz0gYDxpbWcgc3JjPVwiJHtpdGVtWydwcm9maWxlX3BpY191cmwnXX1cIiBjbGFzcz1cIm1lZGlhLXBob3RvIG1yLTEgbWVkaWEtcGhvdG8tLWdyb3VwXCIgc3R5bGU9XCJ3aWR0aDogMjRweDtcIj5gO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdHBsICs9IGA8aW1nIHNyYz1cIiR7aXRlbVsncHJvZmlsZV9waWNfdXJsJ119XCIgY2xhc3M9XCJtZWRpYS1waG90byBtci0xXCIgc3R5bGU9XCJ3aWR0aDogMjRweDtcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7aXRlbS51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgIDwvaDU+YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChpdGVtcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIHRwbCArPSAnPGg1IGNsYXNzPVwidGl0bGVcIj7Qk9GA0YPQv9C+0LLQvtC5INGH0LDRgjwvaDU+JztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRwbDtcclxuICAgIH07XHJcbiAgICBjb25zdCBhZGRDb252ZXJzYXRpb25zID0gZnVuY3Rpb24oY29udmVyc2F0aW9ucykge1xyXG4gICAgICAgIGxldCB0cGwgPSAnJztcclxuICAgICAgICBjb252ZXJzYXRpb25zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgdHBsICs9IGA8ZGl2IGNsYXNzPVwibWVkaWEgcC0xXCIgZGF0YS1jb252ZXJzYXRpb24taWQ9XCIke2l0ZW0uaWR9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtjb252ZXJzYXRpb25EZXRhaWwoaXRlbS50byl9XHJcbiAgICAgICAgICAgICAgICAgICAgJHsoaXRlbVsnbGFzdF9tZXNzYWdlJ10gJiYgKHBhcnNlSW50KGl0ZW1bJ2xhc3RfbWVzc2FnZSddLmxlbmd0aCwgMTApKSA+IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYDxwIGNsYXNzPVwic3VtbWFyeSAke2l0ZW1bJ2lzX3VucmVhZCddID8gJ2ZvbnQtd2VpZ2h0LWJvbGQnIDogJ3RleHQtbXV0ZWQnfVwiPiR7aXRlbVsnbGFzdF9tZXNzYWdlJ119PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke2l0ZW1bJ2lzX3VucmVhZCddID8gJzxzcGFuIGNsYXNzPVwic3VtbWFyeS1kb3RcIj48L3NwYW4+JyA6ICcnfWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+YDtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdHBsO1xyXG4gICAgfTtcclxuICAgIGNMaXN0LmVtcHR5KCkuYWRkQ2xhc3MoJ2JvcmRlci1saWdodC1jb2xvcicpO1xyXG4gICAgLy8gdG9kbzogZml4IGhhcmQtY29kZSAgaW1nIHNyYz1cImh0dHBzOi8vaS5pbWd1ci5jb20vak5OVDRMRS5wbmdcIlxyXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaWR4KSA9PiB7XHJcbiAgICAgICAgJChgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI2NvbGxhcHNlLSR7aWR4fVwiIGRhdGEtdXNlcm5hbWU9XCIke2l0ZW0udXNlcm5hbWV9XCIgXHJcbiAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwidHJ1ZVwiIGFyaWEtY29udHJvbHM9XCJjb2xsYXBzZS0ke2lkeH1cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhXCIgaWQ9XCJoZWFkaW5nLSR7aWR4fVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1yLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaS5pbWd1ci5jb20vak5OVDRMRS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWVkaWEtcGhvdG9cIj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICR7KGl0ZW1bJ3VucmVhZF9jb252ZXJzYXRpb25zJ10gPiAwKSA/IGA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLXNlY29uZGFyeSBwb3NpdGlvbi1hYnNvbHV0ZSBwLTJcIj4ke2l0ZW1bJ3VucmVhZF9jb252ZXJzYXRpb25zJ119PC9zcGFuPmAgOiAnJ31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHtpdGVtLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb2xsYXBzZS0ke2lkeH1cIiBjbGFzcz1cImNvbGxhcHNlXCIgYXJpYS1sYWJlbGxlZGJ5PVwiaGVhZGluZy0ke2lkeH1cIiBkYXRhLXBhcmVudD1cIiNhY2NvcmRpb25cIj5cclxuICAgICAgICAgICAgICAgICR7YWRkQ29udmVyc2F0aW9ucyhpdGVtLmNvbnZlcnNhdGlvbnMsIGlkeCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPmApLmFwcGVuZFRvKGNMaXN0KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBbmRGaWxsVXNlckxpc3QoaXNBY3RpdmVGaXJzdCkge1xyXG4gICAgY29uc3QgJHVzZXJMaXN0ID0gJCgnLm1lc3NhZ2VzLXVzZXItbGlzdCcpO1xyXG4gICAgY29uc3QgbWV0YWRhdGEgPSBVc2VyQ29udmVyc2F0aW9uLmdldE1ldGFkYXRhKHRva2VuKTtcclxuICAgIGxldCBwcmV2QWN0aXZlRGlhbG9nSWQgPSAnJztcclxuICAgIGlmICghaXNBY3RpdmVGaXJzdCkge1xyXG4gICAgICAgIHByZXZBY3RpdmVEaWFsb2dJZCA9ICR1c2VyTGlzdC5maW5kKCdsaSAuY29sbGFwc2Uuc2hvdycpLmF0dHIoJ2lkJyk7XHJcbiAgICB9XHJcbiAgICBtZXRhZGF0YS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAoIXJlc3VsdC5kYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzdWx0LmRhdGEubWV0YS5zb3J0KChhLCBiKSA9PiBhWyd1c2VybmFtZSddLmxvY2FsZUNvbXBhcmUoYlsndXNlcm5hbWUnXSkpO1xyXG4gICAgICAgIGZpbGxVc2VyTGlzdCgkdXNlckxpc3QsIHJlc3VsdC5kYXRhKTtcclxuICAgICAgICBpZiAocmVzdWx0LmRhdGEuc2V0dGluZ3MgJiYgcmVzdWx0LmRhdGEuc2V0dGluZ3MuaW52b2tlX2luX21pbGxpcykge1xyXG4gICAgICAgICAgICB1cGRhdGVJbnRlcnZhbCA9IHJlc3VsdC5kYXRhLnNldHRpbmdzLmludm9rZV9pbl9taWxsaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc0FjdGl2ZUZpcnN0KSB7XHJcbiAgICAgICAgICAgICR1c2VyTGlzdC5maW5kKCdsaTpmaXJzdC1jaGlsZCAuY29sbGFwc2UnKS5hZGRDbGFzcygnc2hvdycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0dHQnLCBwcmV2QWN0aXZlRGlhbG9nSWQpO1xyXG4gICAgICAgICAgICAkKGAjJHtwcmV2QWN0aXZlRGlhbG9nSWR9YCkuYWRkQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QW5kRmlsbENvbnZlcnNhdGlvbih1c2VybmFtZSwgY29udmVyc2F0aW9uSWQsIGlzU2Nyb2xsRG93bikge1xyXG4gICAgVXNlckNvbnZlcnNhdGlvbi5nZXRNZXRhZGF0YURldGFpbENvbnZlcnNhdGlvbih0b2tlbiwge3VzZXJuYW1lLCBjb252ZXJzYXRpb25JZH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGZpbGxMaXN0KCRtc2dMaXN0LCByZXN1bHQuZGF0YS5tZXRhLm1lc3NhZ2VzKTtcclxuICAgICAgICBTcGlubmVyLnJlbW92ZSgpO1xyXG4gICAgICAgICQoJy5qc19zZW5kLW1lc3NhZ2UtYm94JykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICQoJy5tZXNzYWdlcy1saXN0JykuYXR0cignZGF0YS1jb252ZXJzYXRpb24nLCBKU09OLnN0cmluZ2lmeSh7dXNlcm5hbWUsIGNvbnZlcnNhdGlvbklkfSkpO1xyXG5cclxuICAgICAgICBpZiAoaXNTY3JvbGxEb3duKSB7XHJcbiAgICAgICAgICAgICRtc2dMaXN0LmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAkbXNnTGlzdFswXS5zY3JvbGxIZWlnaHQgLSAkbXNnTGlzdFswXS5jbGllbnRIZWlnaHRcclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZGF0YS5tZXRhLnBhZ2luYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIGFkZFBhZ2luYXRpb24oJG1zZ0xpc3QsIHJlc3VsdC5kYXRhLm1ldGEucGFnaW5hdGlvbik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCcubWVzc2FnZXMtbGlzdC1ib3gnKS5maW5kKCcubG9hZC1tb3JlJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkSGFuZGxlcnMoKSB7XHJcbiAgICBsZXQgY29udmVyc2F0aW9uSWQgPSAnJztcclxuXHJcbiAgICAkKCcjc2VuZE1lc3NhZ2VCdXR0b24nKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0ICR0ZXh0QXJlYSA9ICQoJyNzZW5kTWVzc2FnZVRleHRBcmVhJyk7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSAkdGV4dEFyZWEudmFsKCk7XHJcbiAgICAgICAgY29uc3QgdXNlckRhdGEgPSAkKCcubWVzc2FnZXMtbGlzdCcpLmRhdGEoJ2NvbnZlcnNhdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IHt1c2VybmFtZSwgY29udmVyc2F0aW9uSWR9ID0gdXNlckRhdGE7XHJcbiAgICAgICAgU3Bpbm5lci5hZGQoJChlLnRhcmdldCksICdzcGlubmVyLWJveC0tc2VuZE1zZycpO1xyXG4gICAgICAgIFVzZXJDb252ZXJzYXRpb24ucG9zdE1ldGFkYXRhRGV0YWlsQ29udmVyc2F0aW9uKHRva2VuLCB7dXNlcm5hbWUsIGNvbnZlcnNhdGlvbklkLCB2YWx1ZX0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5zdGF0dXMgJiYgcmVzdWx0LnN0YXR1cy5zdGF0ZSA9PT0gJ29rJykge1xyXG4gICAgICAgICAgICAgICAgZ2V0QW5kRmlsbENvbnZlcnNhdGlvbih1c2VybmFtZSwgY29udmVyc2F0aW9uSWQpO1xyXG4gICAgICAgICAgICAgICAgJHRleHRBcmVhLnZhbCgnJyk7XHJcbiAgICAgICAgICAgICAgICBTcGlubmVyLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LlB1YlN1Yi5wdWJsaXNoKENPTlNULmV2ZW50cy5tZXNzYWdlcy5SRUNJRVZFX05FV19NRVNTQUdFLCB7dXNlcm5hbWUsIGNvbnZlcnNhdGlvbklkLCB2YWx1ZSwgcmVzdWx0fSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5saXN0LWdyb3VwLWl0ZW0gLmNvbGxhcHNlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcubGlzdC1ncm91cC1pdGVtJykuZGF0YSgndXNlcm5hbWUnKTtcclxuICAgICAgICBjb252ZXJzYXRpb25JZCA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5tZWRpYScpLmRhdGEoJ2NvbnZlcnNhdGlvbi1pZCcpO1xyXG4gICAgICAgIFNwaW5uZXIuYWRkKCQoJyNtYWluQ2hhdFBhcnQnKSwgJ215LTUgcHktNScpO1xyXG4gICAgICAgIGdldEFuZEZpbGxDb252ZXJzYXRpb24odXNlcm5hbWUsIGNvbnZlcnNhdGlvbklkLCAnaXNTY3JvbGxEb3duJyk7XHJcbiAgICAgICAgdXBkYXRlSW50ZXJ2YWwgPSAodXBkYXRlSW50ZXJ2YWwgPiA2MDAwKSA/IHVwZGF0ZUludGVydmFsIDogMTUwMDA7XHJcbiAgICAgICAgLy8gcmVzZW5kIHJlcXVlc3RcclxuICAgICAgICBpZiAoaW50ZXJ2YWxJZCkge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb252ZXJzYXRpb25JZCA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5tZWRpYScpLmRhdGEoJ2NvbnZlcnNhdGlvbi1pZCcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpbnRlcnZhbElkLCBjb252ZXJzYXRpb25JZCk7XHJcbiAgICAgICAgICAgIGdldEFuZEZpbGxDb252ZXJzYXRpb24odXNlcm5hbWUsIGNvbnZlcnNhdGlvbklkKTtcclxuICAgICAgICAgICAgZ2V0QW5kRmlsbFVzZXJMaXN0KCk7XHJcbiAgICAgICAgfSwgdXBkYXRlSW50ZXJ2YWwpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgd2luZG93LlB1YlN1Yi5zdWJzY3JpYmUoQ09OU1QuZXZlbnRzLm1lc3NhZ2VzLlJFQ0lFVkVfTkVXX01FU1NBR0UsIChldmVudE5hbWUsIGRhdGEpID0+IHtcclxuICAgICAgICBjb25zdCB7dXNlcm5hbWUsIGNvbnZlcnNhdGlvbklkLCB2YWx1ZSwgcmVzdWx0RnJvbVNlcnZlcn0gPSBkYXRhO1xyXG4gICAgICAgIGNvbnN0ICRkaWFsb2cgPSAkKGAubWVzc2FnZXMtdXNlci1saXN0IC5saXN0LWdyb3VwLWl0ZW1bZGF0YS11c2VybmFtZT1cIiR7dXNlcm5hbWV9XCJdIGRpdltkYXRhLWNvbnZlcnNhdGlvbi1pZD1cIiR7Y29udmVyc2F0aW9uSWR9XCJdYCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NldCB2YWwgZnJvbSB0ZXh0LWFyZWEnLCB2YWx1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Jlc3VsdEZyb21TZXJ2ZXI6ICcsIHJlc3VsdEZyb21TZXJ2ZXIpO1xyXG4gICAgICAgICRkaWFsb2cuZmluZCgnLnN1bW1hcnknKS50ZXh0KHZhbHVlKTtcclxuXHJcbiAgICAgICAgLy8gbWV0YWRhdGEudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGZpbGxVc2VyTGlzdCgkdXNlckxpc3QsIHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAvLyAgICAgaWYgKHJlc3VsdC5kYXRhLnNldHRpbmdzICYmIHJlc3VsdC5kYXRhLnNldHRpbmdzLmludm9rZV9pbl9taWxsaXMpIHtcclxuICAgICAgICAvLyAgICAgICAgIHVwZGF0ZUludGVydmFsID0gcmVzdWx0LmRhdGEuc2V0dGluZ3MuaW52b2tlX2luX21pbGxpcztcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgLy8gY2hlY2sgd2UgYXJlIGluIGNvcnJlY3QgcGFnZSAobWVzc2FnZXMpXHJcbiAgICBpZiAoIWlzSW5NZXNzYWdlUGFnZSgpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFuZEZpbGxVc2VyTGlzdCgnc2V0QWN0aXZlRmlyc3QnKTtcclxuICAgIGFkZEhhbmRsZXJzKCk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9tZXNzYWdlcy9tZXNzYWdlcy5qcyIsIi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBQdWJTdWIgZnJvbSAncHVic3ViLWpzJzsgLy8gaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvcHVic3ViLWpzXHJcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy91c2VyJztcclxuaW1wb3J0IGNvb2tpZVN0b3JhZ2UgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2Nvb2tpZSc7XHJcbmltcG9ydCB7Q09OU1R9IGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMnO1xyXG5pbXBvcnQgdmlld1V0aWxzIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy92aWV3JztcclxuXHJcbmNvbnN0IHNlbGVjdG9yQ2xzID0ge1xyXG4gICAgZm9ybTogJy5hdXRoLnJlZ2lzdGVyIC5mb3JtLXNpZ25pbicsXHJcbiAgICBzdWJtaXRCdG46ICdbdHlwZT1cInN1Ym1pdFwiXSdcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVnaXN0ZXJGb3JtIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudXNlciA9IFVzZXI7XHJcbiAgICAgICAgdGhpcy4kZm9ybSA9ICQoc2VsZWN0b3JDbHMuZm9ybSk7XHJcbiAgICAgICAgdGhpcy4kZW1haWwgPSB0aGlzLiRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJtYWlsXCJdJyk7XHJcbiAgICAgICAgdGhpcy4kdGV4dEFyZWFEZXNjcmlwdGlvbiA9ICQoJyNkZXNjcmlwdGlvbicpO1xyXG4gICAgICAgIHRoaXMuZm9ybURhdGEgPSB7J2VtYWlsJzogJ3Rlc3QxX2VtYWlsQG0ucnUnLCAncGFzc3dvcmQnOiAncGFzc3dvcmQnfTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIGlmICgkKCcuYXV0aC5yZWdpc3RlcicpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3VibWl0Rm9ybShmb3JtRGF0YU9iaikge1xyXG4gICAgICAgIGNvbnN0IGVtYWlsID0gdGhpcy4kZW1haWwudmFsKCk7XHJcbiAgICAgICAgY29uc3QgJHBhc3N3b3JkID0gdGhpcy4kZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwicGFzc1wiXScpLFxyXG4gICAgICAgICAgICAkcGFzc3dvcmRDb25maXJtID0gdGhpcy4kZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwicGFzcy1jb25maXJtXCJdJyksXHJcbiAgICAgICAgICAgIHBhc3N3b3JkID0gdGhpcy4kZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwicGFzc1wiXScpLnZhbCgpLFxyXG4gICAgICAgICAgICBwYXNzd29yZENvbmZpcm0gPSB0aGlzLiRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJwYXNzLWNvbmZpcm1cIl0nKS52YWwoKTtcclxuXHJcbiAgICAgICAgaWYgKHBhc3N3b3JkQ29uZmlybSAhPT0gcGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgJHBhc3N3b3JkLmFkZENsYXNzKCdpbnB1dC1lcnJvcicpO1xyXG4gICAgICAgICAgICAkcGFzc3dvcmRDb25maXJtLmFkZENsYXNzKCdpbnB1dC1lcnJvcicpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuJGVtYWlsLnZhbCh0aGlzLiRlbWFpbC52YWwoKS50b0xvY2FsZUxvd2VyQ2FzZSgpKTtcclxuICAgICAgICB0aGlzLmZvcm1EYXRhID0gZm9ybURhdGFPYmogfHwge2VtYWlsLCBwYXNzd29yZH07XHJcblxyXG4gICAgICAgIHRoaXMudXNlci5yZWdpc3Rlcih0aGlzLmZvcm1EYXRhKVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmRhdGEgJiYgcmVzdWx0LmRhdGEudG9rZW4pIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2F2ZSB0aGUgaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGNvb2tpZVN0b3JhZ2Uuc2V0KENPTlNULmNvb2tpZVN0b3JhZ2UuZW1haWxDb25maXJtZWQsICdmYWxzZScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb29raWVTdG9yYWdlLnNldChDT05TVC5jb29raWVTdG9yYWdlLnRva2VuLCByZXN1bHQuZGF0YS50b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3JlcXVlc3Qgc3VjY2VlZGVkIHdpdGggSlNPTiByZXNwb25zZScsIHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgUHViU3ViLnB1Ymxpc2goQ09OU1QuZXZlbnRzLlVTRVJfTE9HR0VEKTtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKHRoaXMuJHRleHRBcmVhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMubWVzc2FnZSB8fCAnUmVnaXN0ZXIgYW5kIExvZ2luIHN1Y2NzZXNzJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UodGhpcy4kdGV4dEFyZWFEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5tZXNzYWdlIHx8ICdubyByZXN1bHQuZGF0YSBmb3VuZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSh0aGlzLiR0ZXh0QXJlYURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLnN0YXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcubG9naW4tYm94Jykuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXF1ZXN0IGZhaWxlZCcsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UodGhpcy4kdGV4dEFyZWFEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkbyBzb21ldGhpbmcnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuICAgICAgICBjb25zdCByZWdpc3RlckJveCA9IENPTlNULnVpU2VsZWN0b3JzLmhlYWRlclJlZ0JveDsgLy8gJ25hdiAucmVnaXN0ZXItYm94JztcclxuICAgICAgICBjb25zdCBvcGVuZWRDbGFzcyA9ICdkLWJsb2NrJztcclxuICAgICAgICBjb25zdCBjbG9zZUNsYXNzID0gJ2Qtbm9uZSc7XHJcbiAgICAgICAgY29uc3QgJGJ0biA9ICQoc2VsZWN0b3JDbHMuc3VibWl0QnRuKSxcclxuICAgICAgICAgICAgY3NzVmFsaWRhdGlvbkNsYXNzID0gJ2Zvcm0tdmFsaWRhdGlvbic7XHJcblxyXG4gICAgICAgICRidG4ub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZm9ybSA9IHRoaXMuJGZvcm0uZ2V0KDApO1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoISRidG4uaXMoJzpkaXNhYmxlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZm9ybS5jaGVja1ZhbGlkaXR5KCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAkYnRuLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXRGb3JtKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEhpZ2hsaWdodCBlcnJvcnNcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybS5yZXBvcnRWYWxpZGl0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtLnJlcG9ydFZhbGlkaXR5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGZvcm0uYWRkQ2xhc3MoY3NzVmFsaWRhdGlvbkNsYXNzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXNSZWdCdG5DbGljayA9ICQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCduYXYubmF2YmFyJykuZmluZCgnLnJlZ2lzdGVyLWJveCcpLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIGlmICghaXNSZWdCdG5DbGljayAmJiAkKHJlZ2lzdGVyQm94KS5oYXNDbGFzcyhvcGVuZWRDbGFzcykpIHtcclxuICAgICAgICAgICAgICAgICQocmVnaXN0ZXJCb3gpLmFkZENsYXNzKGNsb3NlQ2xhc3MpLnJlbW92ZUNsYXNzKG9wZW5lZENsYXNzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3MvcmVnaXN0ZXItZm9ybS9yZWdpc3Rlci1mb3JtLmpzIiwiLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IHtDT05TVH0gZnJvbSAnLi9jb25zdHMnO1xyXG5pbXBvcnQgTmV0d29yayBmcm9tICcuL25ldHdvcmsnO1xyXG5pbXBvcnQgQ29va2llU3RvcmFnZSBmcm9tICcuL2Nvb2tpZSc7XHJcblxyXG5jbGFzcyBVc2VyQ29udmVyc2F0aW9uIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm5ldHdvcmsgPSBuZXcgTmV0d29yaygpO1xyXG4gICAgICAgIHRoaXMuY29va2llU3RvcmFnZSA9IENvb2tpZVN0b3JhZ2U7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5nUG9zdCA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlzTG9nZ2VkSW4oKSB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5nZXRUb2tlbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRW1haWxDb25maXJtZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmNvb2tpZVN0b3JhZ2UuZ2V0KENPTlNULmNvb2tpZVN0b3JhZ2UuZW1haWxDb25maXJtZWQpID09PSAnY29uZmlybWVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VG9rZW4oKSB7XHJcbiAgICAgICAgY29uc3QgY29va2llVG9rZW4gPSB0aGlzLmNvb2tpZVN0b3JhZ2UuZ2V0KENPTlNULmNvb2tpZVN0b3JhZ2UudG9rZW4pO1xyXG4gICAgICAgIHJldHVybiBjb29raWVUb2tlbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRNZXRhZGF0YSh0b2tlbiwgY2JFcnJvcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QoYCR7Q09OU1QuZ2V0UGF0aCgnaW5zdGFncmFtRGlyZWN0X2dldE1ldGFEYXRhJyl9YCwge2hlYWRlcnM6IHt0b2tlbn19LCBjYkVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRNZXRhZGF0YURldGFpbENvbnZlcnNhdGlvbih0b2tlbiwgZGV0YWlscywgY2JFcnJvcikge1xyXG4gICAgICAgIGNvbnN0IGN1cnNvciA9IChkZXRhaWxzLmN1cnNvcikgPyBgP2N1cnNvcj0ke2RldGFpbHMuY3Vyc29yfWAgOiAnJztcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KGAke0NPTlNULmdldFBhdGgoJ2luc3RhZ3JhbURpcmVjdF9nZXRNZXRhRGF0YScpfS8ke2RldGFpbHMudXNlcm5hbWV9LyR7ZGV0YWlscy5jb252ZXJzYXRpb25JZH0ke2N1cnNvcn1gLFxyXG4gICAgICAgICAgICB7aGVhZGVyczoge3Rva2VufX0sIGNiRXJyb3IpO1xyXG4gICAgfVxyXG4gICAgcG9zdE1ldGFkYXRhRGV0YWlsQ29udmVyc2F0aW9uKHRva2VuLCBkZXRhaWxzLCBjYkVycm9yKSB7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZyA9IHtcclxuICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdCxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyd2YWx1ZSc6IGRldGFpbHMudmFsdWV9KSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdC5oZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgJ3Rva2VuJzogdGhpcy5nZXRUb2tlbigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QoYCR7Q09OU1QuZ2V0UGF0aCgnaW5zdGFncmFtRGlyZWN0X3Bvc3RNZXNzYWdlJyl9LyR7ZGV0YWlscy51c2VybmFtZX0vJHtkZXRhaWxzLmNvbnZlcnNhdGlvbklkfS90ZXh0YCxcclxuICAgICAgICAgICAgc2V0dGluZywgY2JFcnJvcik7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5sZXQgdXNlckluc3RhbmNlID0gbnVsbDtcclxuXHJcbmlmICghdXNlckluc3RhbmNlKSB7XHJcbiAgICB1c2VySW5zdGFuY2UgPSBuZXcgVXNlckNvbnZlcnNhdGlvbigpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VySW5zdGFuY2U7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tb24vanMtc2VydmljZXMvYXBpLXVzZXItZGlyZWN0LmpzIiwiLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuLy8gaW1wb3J0IHtDT05TVH0gZnJvbSAnLi9jb25zdHMnO1xyXG4vLyBpbXBvcnQgTmV0d29yayBmcm9tICcuL25ldHdvcmsnO1xyXG4vLyBpbXBvcnQgQ29va2llU3RvcmFnZSBmcm9tICcuL2Nvb2tpZSc7XHJcbi8vIGltcG9ydCBQdWJTdWIgZnJvbSAncHVic3ViLWpzJzsgLy8gaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvcHVic3ViLWpzXHJcblxyXG4vLyBjb25zdCBTUElOTkVSX0JBU0VfVEVNUEFMQVRFID0gJ2pzL3VpL3RwbC9zcGlubmVyLmhicyc7XHJcbmNvbnN0IGNsYXNzZXMgPSB7XHJcbiAgICBpbmxpbmU6ICdnbG9iYWwtaW5saW5lLXNwaW5uZXInLFxyXG4gICAgb3ZlcmxheTogJ2dsb2JhbC1vdmVybGF5LXNwaW5uZXInLFxyXG4gICAgZml4ZWQ6ICdnbG9iYWwtZml4ZWQtc3Bpbm5lcicsXHJcbiAgICBidXR0b246ICdidXR0b24tLWxvYWQnXHJcbn07XHJcbi8vIGNvbnN0IGhhbmRsZWJhcnNUcGwgPSBmdW5jdGlvbiAobmFtZSwgZGF0YSwgJHRhcmdldCkge1xyXG4vLyAgICAgLy8gdmFyIGh0bWwgPSB0aGlzLmdldFRlbXBsYXRlKG5hbWUpKGRhdGEpO1xyXG4vLyAgICAgdmFyIGh0bWwgPSBIYW5kbGViYXJzLmNvbXBpbGUodGVtcGxhdGUpO1xyXG4vL1xyXG4vLyAgICAgaWYgKCR0YXJnZXQpIHtcclxuLy8gICAgICAgICAvL2ZvciBwcmV2ZW50aW5nIHhzc1xyXG4vLyAgICAgICAgICR0YXJnZXRbMF0uaW5uZXJIVE1MID0gaHRtbDtcclxuLy8gICAgIH1cclxuLy9cclxuLy8gICAgIHJldHVybiBodG1sO1xyXG4vLyB9O1xyXG4vLyBjb25zdCBoYW5kbGViYXJzID0gdGhpcy5nZXRTZXJ2aWNlKCdjb3JlLnRlbXBsYXRpbmcuaGFuZGxlYmFycycpO1xyXG5cclxuY2xhc3MgU3Bpbm5lciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoX2NmZykge1xyXG4gICAgICAgIHRoaXMuY2ZnID0gX2NmZyB8fCB7fTtcclxuICAgICAgICAvLyB0aGlzLiRkZWZhdWx0Q29udGFpbmVyID0gJCgnYm9keScpO1xyXG4gICAgICAgICQuZXh0ZW5kKGNsYXNzZXMsIHRoaXMuY2ZnLmNsYXNzZXMpO1xyXG4gICAgICAgIC8vIHRoaXMuX21lZGlhdG9yLnN1YnNjcmliZShDT05TVC5ldmVudHMuU1RPUF9GSVhFRF9TUElOTkVSLCB0aGlzLnN0b3BGaXhlZFNwaW5uZXIuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbiAgICAvLyBfbWVkaWF0b3IgPSBQdWJTdWI7XHJcblxyXG4gICAgc3RhcnQoJGVsLCBwcmV3Q2xzKSB7XHJcbiAgICAgICAgLy8gaWYgKGFkZE9yUmVtb3ZlKSB7XHJcbiAgICAgICAgLy8gICAgICQoJyNmb28nKS5hZGRDbGFzcyhjbGFzc05hbWUpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBlbHNlIHtcclxuICAgICAgICAvLyAgICAgJCgnI2ZvbycpLnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgICRlbC5maW5kKCdpJykudG9nZ2xlQ2xhc3MocHJld0NscykuYWRkQ2xhc3MoJ2ZhLXNwaW4gZmEtc3Bpbm5lcicpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3AoJGVsLCBuZXdDbHMpIHtcclxuICAgICAgICAkZWwuZmluZCgnaScpLnRvZ2dsZUNsYXNzKG5ld0NscykucmVtb3ZlQ2xhc3MoJ2ZhLXNwaW4gZmEtc3Bpbm5lcicpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZCgkZWwsIG5ld0Nscykge1xyXG4gICAgICAgIHRoaXMuJGVsID0gJGVsO1xyXG4gICAgICAgICRlbC5wcmVwZW5kKGA8ZGl2IGNsYXNzPVwic3Bpbm5lci1ib3gganVzdGlmeS1jb250ZW50LWNlbnRlciAke25ld0Nsc31cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwaW4tYW5pbWF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGRhdGEtcHJlZml4PVwiZmFyXCIgZGF0YS1pY29uPVwic3luYy1hbHRcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIGNsYXNzPVwic3ZnLWlubGluZS0tZmEgZmEtc3luYy1hbHQgZmEtdy0xNiBmYS1mdyBmYS0yeFwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTQ4My41MTUgMjguNDg1TDQzMS4zNSA4MC42NUMzODYuNDc1IDM1Ljc2NyAzMjQuNDg1IDggMjU2IDggMTIzLjIyOCA4IDE0LjgyNCAxMTIuMzM4IDguMzEgMjQzLjQ5MyA3Ljk3MSAyNTAuMzExIDEzLjQ3NSAyNTYgMjAuMzAxIDI1NmgyOC4wNDVjNi4zNTMgMCAxMS42MTMtNC45NTIgMTEuOTczLTExLjI5NEM2Ni4xNjEgMTQxLjY0OSAxNTEuNDUzIDYwIDI1NiA2MGM1NC4xNjMgMCAxMDMuMTU3IDIxLjkyMyAxMzguNjE0IDU3LjM4NmwtNTQuMTI4IDU0LjEyOWMtNy41NiA3LjU2LTIuMjA2IDIwLjQ4NSA4LjQ4NSAyMC40ODVINDkyYzYuNjI3IDAgMTItNS4zNzMgMTItMTJWMzYuOTcxYzAtMTAuNjkxLTEyLjkyNi0xNi4wNDUtMjAuNDg1LTguNDg2ek00OTEuNjk5IDI1NmgtMjguMDQ1Yy02LjM1MyAwLTExLjYxMyA0Ljk1Mi0xMS45NzMgMTEuMjk0QzQ0NS44MzkgMzcwLjM1MSAzNjAuNTQ3IDQ1MiAyNTYgNDUyYy01NC4xNjMgMC0xMDMuMTU3LTIxLjkyMy0xMzguNjE0LTU3LjM4Nmw1NC4xMjgtNTQuMTI5YzcuNTYtNy41NiAyLjIwNi0yMC40ODUtOC40ODUtMjAuNDg1SDIwYy02LjYyNyAwLTEyIDUuMzczLTEyIDEydjE0My4wMjljMCAxMC42OTEgMTIuOTI2IDE2LjA0NSAyMC40ODUgOC40ODVMODAuNjUgNDMxLjM1QzEyNS41MjUgNDc2LjIzMyAxODcuNTE2IDUwNCAyNTYgNTA0YzEzMi43NzMgMCAyNDEuMTc2LTEwNC4zMzggMjQ3LjY5LTIzNS40OTMuMzM5LTYuODE4LTUuMTY1LTEyLjUwNy0xMS45OTEtMTIuNTA3elwiIGNsYXNzPVwiXCI+PC9wYXRoPjwvc3ZnPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5gKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmUoKSB7XHJcbiAgICAgICAgdGhpcy4kZWwuZmluZCgnLnNwaW5uZXItYm94JykucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIHNwaW5uZXIgaWNvbiBvbiBidXR0b24gYmVmb3JlIHRoZSBidXR0b24gdGV4dFxyXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRlbFxyXG4gICAgICovXHJcbiAgICBzdGFydEJ1dHRvblNwaW5uZXIgPSBmdW5jdGlvbiAoJGVsLCBuZXdDbHMpIHtcclxuICAgICAgICAkZWwuYWRkQ2xhc3MoY2xhc3Nlcy5idXR0b24pO1xyXG4gICAgICAgICRlbC5wcmVwZW5kKGA8ZGl2IGNsYXNzPVwic3Bpbm5lci1ib3ggc3Bpbm5lci1ib3gtLWJ1dHRvbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHBvc2l0aW9uLXJlbGF0aXZlIHAtMCBtLTAgYmctdHJhbnNwYXJlbnQgJHtuZXdDbHN9XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGluLWFuaW1hdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBkYXRhLXByZWZpeD1cImZhclwiIGRhdGEtaWNvbj1cInN5bmMtYWx0XCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZhLWZ3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDgzLjUxNSAyOC40ODVMNDMxLjM1IDgwLjY1QzM4Ni40NzUgMzUuNzY3IDMyNC40ODUgOCAyNTYgOCAxMjMuMjI4IDggMTQuODI0IDExMi4zMzggOC4zMSAyNDMuNDkzIDcuOTcxIDI1MC4zMTEgMTMuNDc1IDI1NiAyMC4zMDEgMjU2aDI4LjA0NWM2LjM1MyAwIDExLjYxMy00Ljk1MiAxMS45NzMtMTEuMjk0QzY2LjE2MSAxNDEuNjQ5IDE1MS40NTMgNjAgMjU2IDYwYzU0LjE2MyAwIDEwMy4xNTcgMjEuOTIzIDEzOC42MTQgNTcuMzg2bC01NC4xMjggNTQuMTI5Yy03LjU2IDcuNTYtMi4yMDYgMjAuNDg1IDguNDg1IDIwLjQ4NUg0OTJjNi42MjcgMCAxMi01LjM3MyAxMi0xMlYzNi45NzFjMC0xMC42OTEtMTIuOTI2LTE2LjA0NS0yMC40ODUtOC40ODZ6TTQ5MS42OTkgMjU2aC0yOC4wNDVjLTYuMzUzIDAtMTEuNjEzIDQuOTUyLTExLjk3MyAxMS4yOTRDNDQ1LjgzOSAzNzAuMzUxIDM2MC41NDcgNDUyIDI1NiA0NTJjLTU0LjE2MyAwLTEwMy4xNTctMjEuOTIzLTEzOC42MTQtNTcuMzg2bDU0LjEyOC01NC4xMjljNy41Ni03LjU2IDIuMjA2LTIwLjQ4NS04LjQ4NS0yMC40ODVIMjBjLTYuNjI3IDAtMTIgNS4zNzMtMTIgMTJ2MTQzLjAyOWMwIDEwLjY5MSAxMi45MjYgMTYuMDQ1IDIwLjQ4NSA4LjQ4NUw4MC42NSA0MzEuMzVDMTI1LjUyNSA0NzYuMjMzIDE4Ny41MTYgNTA0IDI1NiA1MDRjMTMyLjc3MyAwIDI0MS4xNzYtMTA0LjMzOCAyNDcuNjktMjM1LjQ5My4zMzktNi44MTgtNS4xNjUtMTIuNTA3LTExLjk5MS0xMi41MDd6XCIgY2xhc3M9XCJcIj48L3BhdGg+PC9zdmc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PmApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBzcGlubmVyIGljb24gZnJvbSBidXR0b25cclxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkZWxcclxuICAgICAqL1xyXG4gICAgc3RvcEJ1dHRvblNwaW5uZXIgPSBmdW5jdGlvbiAoJGVsKSB7XHJcbiAgICAgICAgJGVsLnJlbW92ZUNsYXNzKGNsYXNzZXMuYnV0dG9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZpbmRzIHNwaW5uZXJzXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9ICRjb250YWluZXJcclxuICAgICAqIEByZXR1cm4gez9qUXVlcnl9IHNwaW5uZXJzXHJcbiAgICAgKi9cclxuICAgIC8vIF9maW5kU3Bpbm5lciA9IGZ1bmN0aW9uICh0eXBlLCAkY29udGFpbmVyKSB7XHJcbiAgICAvLyAgICAgY29uc3Qgc2VsZWN0b3IgPSAnLicgKyB0eXBlO1xyXG4gICAgLy8gICAgIGxldCAkZWwgPSB0aGlzLiRkZWZhdWx0Q29udGFpbmVyO1xyXG4gICAgLy8gICAgIGlmICgkY29udGFpbmVyKSB7XHJcbiAgICAvLyAgICAgICAgICRlbCA9ICRjb250YWluZXI7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy9cclxuICAgIC8vICAgICBpZiAoJGVsLmZpbmQoc2VsZWN0b3IpLmxlbmd0aCA+IDApIHtcclxuICAgIC8vICAgICAgICAgcmV0dXJuICRlbC5maW5kKHNlbGVjdG9yKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAkZWxcclxuICAgICAqL1xyXG4gICAgLypcclxuICAgIHN0YXJ0Q29udGVudFNwaW5uZXIgPSBmdW5jdGlvbiAoJGVsKSB7XHJcbiAgICAgICAgY29uc3QgaHRtbCA9IGhhbmRsZWJhcnNUcGwoXHJcbiAgICAgICAgICAgIFNQSU5ORVJfQkFTRV9URU1QQUxBVEUsIHtcclxuICAgICAgICAgICAgICAgIGltZ1NyYzogQ1RDLlVSTFMuV0FJVElOR19JTUFHRSxcclxuICAgICAgICAgICAgICAgICdjbGFzcyc6IGNsYXNzZXMub3ZlcmxheVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAkZWwucHJlcGVuZChodG1sKTtcclxuICAgIH07XHJcblxyXG4gICAgc3RhcnRJbmxpbmVDb250ZW50U3Bpbm5lciA9IGZ1bmN0aW9uICgkZWwpIHtcclxuICAgICAgICBjb25zdCBodG1sID0gaGFuZGxlYmFyc1RwbChcclxuICAgICAgICAgICAgU1BJTk5FUl9CQVNFX1RFTVBBTEFURSwge1xyXG4gICAgICAgICAgICAgICAgaW1nU3JjOiBDVEMuVVJMUy5XQUlUSU5HX0lNQUdFLFxyXG4gICAgICAgICAgICAgICAgJ2NsYXNzJzogY2xhc3Nlcy5pbmxpbmVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgJGVsLnByZXBlbmQoaHRtbCk7XHJcbiAgICB9O1xyXG4gICAgKi9cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0YXJ0cyBnbG9iYWwgZnVsbCBwYWdlIGZpeGVkIHNwaW5uZXJcclxuICAgICAqL1xyXG4gICAgLypcclxuICAgIHN0YXJ0Rml4ZWRTcGlubmVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IHNwaW5uZXJzID0gdGhpcy5fZmluZFNwaW5uZXIoY2xhc3Nlcy5maXhlZCk7XHJcbiAgICAgICAgaWYgKCEoQ1RDLmlzRWRpdCgpIHx8IENUQy5pc0Rlc2lnbigpKSAmJiAhc3Bpbm5lcnMpIHtcclxuICAgICAgICAgICAgY29uc3QgaHRtbCA9IGhhbmRsZWJhcnNUcGwoXHJcbiAgICAgICAgICAgICAgICBTUElOTkVSX0JBU0VfVEVNUEFMQVRFLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nU3JjOiBDVEMuVVJMUy5XQUlUSU5HX0lNQUdFLFxyXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6IGNsYXNzZXMuZml4ZWRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLiRkZWZhdWx0Q29udGFpbmVyLnByZXBlbmQoaHRtbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgICovXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9wcyBzcGlubmVyc1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAkY29udGFpbmVyXHJcbiAgICAgKi9cclxuICAgIC8vIF9zdG9wU3Bpbm5lciA9IGZ1bmN0aW9uICh0eXBlLCAkY29udGFpbmVyKSB7XHJcbiAgICAvLyAgICAgY29uc3Qgc3Bpbm5lcnMgPSB0aGlzLl9maW5kU3Bpbm5lcih0eXBlLCAkY29udGFpbmVyKTtcclxuICAgIC8vICAgICBpZiAoc3Bpbm5lcnMpIHtcclxuICAgIC8vICAgICAgICAgc3Bpbm5lcnMucmVtb3ZlKCk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gJGVsXHJcbiAgICAgKi9cclxuICAgIC8vIHN0b3BDb250ZW50U3Bpbm5lciA9IGZ1bmN0aW9uICgkZWwpIHtcclxuICAgIC8vICAgICAkZWwuZmluZCgnLicgKyBjbGFzc2VzLm92ZXJsYXkpLnJlbW92ZSgpO1xyXG4gICAgLy8gfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gJGVsXHJcbiAgICAgKi9cclxuICAgIC8vIHN0b3BJbmxpbmVDb250ZW50U3Bpbm5lciA9IGZ1bmN0aW9uICgkZWwpIHtcclxuICAgIC8vICAgICAkZWwuZmluZCgnLicgKyBjbGFzc2VzLmlubGluZSkucmVtb3ZlKCk7XHJcbiAgICAvLyB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RvcHMgZ2xvYmFsIGZ1bGwgcGFnZSBmaXhlZCBzcGlubmVyXHJcbiAgICAgKi9cclxuICAgIC8vIHN0b3BGaXhlZFNwaW5uZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICAgdGhpcy5fc3RvcFNwaW5uZXIoY2xhc3Nlcy5maXhlZCk7XHJcbiAgICAvLyB9O1xyXG59XHJcblxyXG5sZXQgc3Bpbm5lckluc3RhbmNlID0gbnVsbDtcclxuXHJcbmlmICghc3Bpbm5lckluc3RhbmNlKSB7XHJcbiAgICBzcGlubmVySW5zdGFuY2UgPSBuZXcgU3Bpbm5lcigpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzcGlubmVySW5zdGFuY2U7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tb24vanMtc2VydmljZXMvc3Bpbm5lci5qcyIsIi8qIGVzbGludC1kaXNhYmxlIHNvcnQtdmFycyAqL1xyXG4vLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdXNlcic7XHJcbmltcG9ydCBQdWJTdWIgZnJvbSAncHVic3ViLWpzJzsgLy8gaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvcHVic3ViLWpzXHJcbmltcG9ydCBjb29raWVTdG9yYWdlIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb29raWUnO1xyXG4vLyBpbXBvcnQgVmFsaWRhdG9yIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9mb3JtLXZhbGlkYXRvcic7XHJcbmltcG9ydCB2aWV3VXRpbHMgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3ZpZXcnO1xyXG5pbXBvcnQge0NPTlNUfSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29uc3RzJztcclxuXHJcbi8vIHdpbmRvdy4kID0gJDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMb2dpblBhZ2Uoc2VsZWN0b3JDc3MpIHtcclxuICAgIGNvbnN0IHtfZm9ybUlkLCBfYnV0dG9uU3VibWl0SWQsIF9sb2dpbkJveH0gPSBzZWxlY3RvckNzcztcclxuICAgIGNvbnN0IHVzZXIgPSBVc2VyLCAvLyBzZXJ2aWNlXHJcbiAgICAgICAgJGZvcm0gPSAkKF9mb3JtSWQpLFxyXG4gICAgICAgICRlbWFpbCA9ICRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJtYWlsXCJdJyksXHJcbiAgICAgICAgJHRleHRBcmVhRGVzY3JpcHRpb24gPSAkKCcjZGVzY3JpcHRpb24nKTtcclxuICAgIC8vIGNvbnN0IG9wZW5lZENsYXNzID0gJ2QtYmxvY2snO1xyXG4gICAgLy8gY29uc3QgY2xvc2VDbGFzcyA9ICdkLW5vbmUnO1xyXG5cclxuICAgIGNvbnN0IHVzZXJMb2dpbkhlYWRlciA9IChfZm9ybURhdGEpID0+IHtcclxuICAgICAgICBjb25zdCBjYkVycm9yID0gKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAkKF9sb2dpbkJveCkuYXBwZW5kKCc8cD5yZXN1bHQuc3RhdHVzLm1lc3NhZ2U8L3A+Jyk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHVzZXIubG9naW4oX2Zvcm1EYXRhLCBjYkVycm9yKVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5kYXRhICYmIHJlc3VsdC5kYXRhLnRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2F2ZSB0aGUgaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGNvb2tpZVN0b3JhZ2Uuc2V0KENPTlNULmNvb2tpZVN0b3JhZ2UudG9rZW4sIHJlc3VsdC5kYXRhLnRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcubmF2LWxpbmsuanNfbG9nT3V0JykucGFyZW50KCkuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXF1ZXN0IHN1Y2NlZWRlZCB3aXRoIEpTT04gcmVzcG9uc2UnLCByZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UoJHRleHRBcmVhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMubWVzc2FnZSB8fCAnTG9naW4gc3VjY3Nlc3MnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LnN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSh0aGlzLiR0ZXh0QXJlYURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgPHA+c3RhdHVzOiAke3Jlc3VsdC5zdGF0dXMuc3RhdGV9PC9wPjxwPiBtZXNzYWdlOiAke3Jlc3VsdC5zdGF0dXMubWVzc2FnZX08L3A+YCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKCR0ZXh0QXJlYURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLm1lc3NhZ2UgfHwgJ0xvZ2luIGVycm9yJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzdWJtaXRGb3JtID0gZnVuY3Rpb24oZm9ybURhdGFPYmopIHtcclxuICAgICAgICBjb25zdCBlbWFpbCA9ICRlbWFpbC52YWwoKSxcclxuICAgICAgICAgICAgcGFzc3dvcmQgPSAkZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwicGFzc1wiXScpLnZhbCgpLFxyXG4gICAgICAgICAgICBfZm9ybURhdGEgPSBmb3JtRGF0YU9iaiB8fCB7ZW1haWwsIHBhc3N3b3JkfTtcclxuXHJcbiAgICAgICAgaWYgKHNlbGVjdG9yQ3NzLmlzTG9naW5JbnN0YWdyYW0pIHtcclxuICAgICAgICAgICAgLy8gdG9kbzogZGVsZXRlIG1lXHJcbiAgICAgICAgICAgIC8vIGFkZEluc3RhZ3JhbUFjY291bnQoe3VzZXJuYW1lOiAkZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwidXNlcm5hbWVcIl0nKS52YWwoKSwgcGFzc3dvcmR9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkZW1haWwudmFsKCRlbWFpbC52YWwoKS50b0xvY2FsZUxvd2VyQ2FzZSgpKTtcclxuICAgICAgICAgICAgdXNlckxvZ2luSGVhZGVyKF9mb3JtRGF0YSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBQdWJTdWIucHVibGlzaChDT05TVC5ldmVudHMuVVNFUl9MT0dHRUQsICdsb2dpbicpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2luc3RhZ3JhbS1pbnRlZ3JhdGlvbi9pbnN0YWdyYW0tYWNjb3VudHMuaHRtbCc7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbG9nT3V0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29va2llU3RvcmFnZS5yZW1vdmUoQ09OU1QuY29va2llU3RvcmFnZS50b2tlbik7XHJcbiAgICAgICAgUHViU3ViLnB1Ymxpc2goQ09OU1QuZXZlbnRzLlVTRVJfTE9HT1VUKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYmluZEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIGNvbnN0ICRzaG93TG9naW5Cb3hCdG5JZCA9ICQoX3Nob3dMb2dpbkJveEJ0bklkKTtcclxuICAgICAgICBjb25zdCAkbG9naW5Cb3ggPSAkKF9sb2dpbkJveCk7XHJcbiAgICAgICAgY29uc3Qgb3BlbmVkQ2xhc3MgPSAnZC1ibG9jayc7XHJcbiAgICAgICAgY29uc3QgY2xvc2VDbGFzcyA9ICdkLW5vbmUnO1xyXG5cclxuICAgICAgICAvLyAkc2hvd0xvZ2luQm94QnRuSWQub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBpZiAoIXNlbGVjdG9yQ3NzLmlzTG9naW5JbnN0YWdyYW0pIHtcclxuICAgICAgICAvLyAgICAgICAgICRsb2dpbkJveC5jc3Moeyd0b3AnOiAwLCAncmlnaHQnOiAwfSlcclxuICAgICAgICAvLyAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2JnLWxpZ2h0IGJvcmRlciBtdC01IG14LWF1dG8gcG9zaXRpb24tYWJzb2x1dGUnKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICAkbG9naW5Cb3guYWRkQ2xhc3Mob3BlbmVkQ2xhc3MpLnJlbW92ZUNsYXNzKGNsb3NlQ2xhc3MpO1xyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICBjb25zdCAkYnV0dG9uU3VibWl0ID0gJChfYnV0dG9uU3VibWl0SWQpLFxyXG4gICAgICAgICAgICBjc3NWYWxpZGF0aW9uQ2xhc3MgPSAnZm9ybS12YWxpZGF0aW9uJztcclxuXHJcbiAgICAgICAgJGJ1dHRvblN1Ym1pdC5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSAkZm9ybS5nZXQoMCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IHZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoJGZvcm0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2aWV3VXRpbHMsIHZpZXdVdGlscy5pc0VtYWlsKCRlbWFpbC52YWwoKSkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGZvcm0uY2hlY2tWYWxpZGl0eSgpICYmIHZpZXdVdGlscy5pc0VtYWlsKCRlbWFpbC52YWwoKSkpIHtcclxuICAgICAgICAgICAgICAgIHN1Ym1pdEZvcm0oKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIEhpZ2hsaWdodCBlcnJvcnNcclxuICAgICAgICAgICAgICAgIGlmIChmb3JtLnJlcG9ydFZhbGlkaXR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJGZvcm0uYWRkQ2xhc3MoY3NzVmFsaWRhdGlvbkNsYXNzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcubmF2LWxpbmsuanNfbG9nT3V0Jykub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBsb2dPdXQoKTtcclxuICAgICAgICAgICAgJChlLnRhcmdldCkucGFyZW50KCkuaGlkZSgpO1xyXG4gICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKCR0ZXh0QXJlYURlc2NyaXB0aW9uLCAnTG9nZ2VkIG91dCcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBQdWJTdWIuc3Vic2NyaWJlKENPTlNULmV2ZW50cy5VU0VSX0xPR09VVCwgKG1zZykgPT4ge1xyXG4gICAgICAgICAgICAkKENPTlNULnVpU2VsZWN0b3JzLmhlYWRlck5hdkxvZ2luQnRuKS5hZGRDbGFzcyhvcGVuZWRDbGFzcykucmVtb3ZlQ2xhc3MoY2xvc2VDbGFzcyk7IC8vIC5zaG93KCk7XHJcbiAgICAgICAgICAgICQoQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyUmVnQnRuKS5hZGRDbGFzcyhvcGVuZWRDbGFzcykucmVtb3ZlQ2xhc3MoY2xvc2VDbGFzcyk7XHJcbiAgICAgICAgICAgICQoJy5uYXYtbGluay5qc19sb2dPdXQnKS5hZGRDbGFzcyhjbG9zZUNsYXNzKS5yZW1vdmVDbGFzcyhvcGVuZWRDbGFzcyk7IC8vIC5oaWRlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9yTG9naW5TdGF0ZSA9ICcuanNfbWVzc2FnZV9sb2dnZWQtLXRleHQnO1xyXG4gICAgICAgICAgICAkKHNlbGVjdG9yTG9naW5TdGF0ZSkudGV4dCgn0JLRiyDQstGL0YjQu9C4INC40Lcg0LDQutC60LDRg9C90YLQsCcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXNMb2dpbkJ0bkNsaWNrID0gJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJ25hdi5uYXZiYXInKS5maW5kKCRsb2dpbkJveCkubGVuZ3RoO1xyXG4gICAgICAgICAgICBjb25zdCBpc0FkZEluc3RhZ3JhbUJ0bkNsaWNrZWQgPSAkKGV2ZW50LnRhcmdldCkuYXR0cignaWQnKSA9PT0gQ09OU1QudWlTZWxlY3RvcnMuaW5zdGFncmFtLmFkZEFjY291bnRCdG5JZDtcclxuXHJcbiAgICAgICAgICAgIGlmICghaXNMb2dpbkJ0bkNsaWNrICYmICRsb2dpbkJveC5oYXNDbGFzcyhvcGVuZWRDbGFzcykgJiYgIWlzQWRkSW5zdGFncmFtQnRuQ2xpY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgJGxvZ2luQm94LmFkZENsYXNzKGNsb3NlQ2xhc3MpLnJlbW92ZUNsYXNzKG9wZW5lZENsYXNzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgICAgIGlmICgkKCcuYXV0aC5sb2dpbicpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBiaW5kRXZlbnRzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5pdFxyXG4gICAgfTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvX2F1dGgvbG9naW4tcGFnZS5qcyIsImlmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBicnV0dXNpbil3aW5kb3cuYnJ1dHVzaW49bmV3IE9iamVjdDtlbHNlIGlmKFwib2JqZWN0XCIhPXR5cGVvZiBicnV0dXNpbil0aHJvd1wiYnJ1dHVzaW4gZ2xvYmFsIHZhcmlhYmxlIGFscmVhZHkgZXhpc3RzXCI7IWZ1bmN0aW9uKCl7U3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRofHwoU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQ9dHx8MCx0aGlzLmluZGV4T2YoZSx0KT09PXR9KSxTdHJpbmcucHJvdG90eXBlLmVuZHNXaXRofHwoU3RyaW5nLnByb3RvdHlwZS5lbmRzV2l0aD1mdW5jdGlvbihlLHQpe3ZhciByPXRoaXMudG9TdHJpbmcoKTsodm9pZCAwPT09dHx8dD5yLmxlbmd0aCkmJih0PXIubGVuZ3RoKSx0LT1lLmxlbmd0aDt2YXIgbj1yLmluZGV4T2YoZSx0KTtyZXR1cm4tMSE9PW4mJm49PT10fSksU3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlc3x8KFN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXM9ZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtyZXR1cm4tMSE9PVN0cmluZy5wcm90b3R5cGUuaW5kZXhPZi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9KSxTdHJpbmcucHJvdG90eXBlLmZvcm1hdHx8KFN0cmluZy5wcm90b3R5cGUuZm9ybWF0PWZ1bmN0aW9uKCl7Zm9yKHZhciBlPXRoaXMsdD0wO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciByPW5ldyBSZWdFeHAoXCJcXFxce1wiK3QrXCJcXFxcfVwiLFwiZ2lcIik7ZT1lLnJlcGxhY2Uocixhcmd1bWVudHNbdF0pfXJldHVybiBlfSk7dmFyIEJydXR1c2luRm9ybXM9bmV3IE9iamVjdDtCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzPXt2YWxpZGF0aW9uRXJyb3I6XCJWYWxpZGF0aW9uIGVycm9yXCIscmVxdWlyZWQ6XCJUaGlzIGZpZWxkIGlzICoqcmVxdWlyZWQqKlwiLGludmFsaWRWYWx1ZTpcIkludmFsaWQgZmllbGQgdmFsdWVcIixhZGRwcm9wTmFtZUV4aXN0ZW50OlwiVGhpcyBwcm9wZXJ0eSBpcyBhbHJlYWR5IHByZXNlbnQgaW4gdGhlIG9iamVjdFwiLGFkZHByb3BOYW1lUmVxdWlyZWQ6XCJBIG5hbWUgaXMgcmVxdWlyZWRcIixtaW5JdGVtczpcIkF0IGxlYXN0IGB7MH1gIGl0ZW1zIGFyZSByZXF1aXJlZFwiLG1heEl0ZW1zOlwiQXQgbW9zdCBgezB9YCBpdGVtcyBhcmUgYWxsb3dlZFwiLHBhdHRlcm46XCJWYWx1ZSBkb2VzIG5vdCBtYXRjaCBwYXR0ZXJuOiBgezB9YFwiLG1pbkxlbmd0aDpcIlZhbHVlIG11c3QgYmUgKiphdCBsZWFzdCoqIGB7MH1gIGNoYXJhY3RlcnMgbG9uZ1wiLG1heExlbmd0aDpcIlZhbHVlIG11c3QgYmUgKiphdCBtb3N0KiogYHswfWAgY2hhcmFjdGVycyBsb25nXCIsbXVsdGlwbGVPZjpcIlZhbHVlIG11c3QgYmUgKiptdWx0aXBsZSBvZioqIGB7MH1gXCIsbWluaW11bTpcIlZhbHVlIG11c3QgYmUgKipncmVhdGVyIG9yIGVxdWFsIHRoYW4qKiBgezB9YFwiLGV4Y2x1c2l2ZU1pbmltdW06XCJWYWx1ZSBtdXN0IGJlICoqZ3JlYXRlciB0aGFuKiogYHswfWBcIixtYXhpbXVtOlwiVmFsdWUgbXVzdCBiZSAqKmxvd2VyIG9yIGVxdWFsIHRoYW4qKiBgezB9YFwiLGV4Y2x1c2l2ZU1heGltdW06XCJWYWx1ZSBtdXN0IGJlICoqbG93ZXIgdGhhbioqIGB7MH1gXCIsbWluUHJvcGVydGllczpcIkF0IGxlYXN0IGB7MH1gIHByb3BlcnRpZXMgYXJlIHJlcXVpcmVkXCIsbWF4UHJvcGVydGllczpcIkF0IG1vc3QgYHswfWAgcHJvcGVydGllcyBhcmUgYWxsb3dlZFwiLHVuaXF1ZUl0ZW1zOlwiQXJyYXkgaXRlbXMgbXVzdCBiZSB1bmlxdWVcIixhZGRJdGVtOlwiQWRkIGl0ZW1cIixcInRydWVcIjpcIlRydWVcIixcImZhbHNlXCI6XCJGYWxzZVwifSxCcnV0dXNpbkZvcm1zLmRlY29yYXRvcnM9bmV3IEFycmF5LEJydXR1c2luRm9ybXMuYWRkRGVjb3JhdG9yPWZ1bmN0aW9uKGUpe0JydXR1c2luRm9ybXMuZGVjb3JhdG9yc1tCcnV0dXNpbkZvcm1zLmRlY29yYXRvcnMubGVuZ3RoXT1lfSxCcnV0dXNpbkZvcm1zLm9uUmVzb2x1dGlvblN0YXJ0ZWQ9ZnVuY3Rpb24oZSl7fSxCcnV0dXNpbkZvcm1zLm9uUmVzb2x1dGlvbkZpbmlzaGVkPWZ1bmN0aW9uKGUpe30sQnJ1dHVzaW5Gb3Jtcy5vblZhbGlkYXRpb25FcnJvcj1mdW5jdGlvbihlLHQpe2UuZm9jdXMoKSxlLmNsYXNzTmFtZS5pbmNsdWRlcyhcIiBlcnJvclwiKXx8KGUuY2xhc3NOYW1lKz1cIiBlcnJvclwiKSxhbGVydCh0KX0sQnJ1dHVzaW5Gb3Jtcy5vblZhbGlkYXRpb25TdWNjZXNzPWZ1bmN0aW9uKGUpe2UuY2xhc3NOYW1lPWUuY2xhc3NOYW1lLnJlcGxhY2UoXCIgZXJyb3JcIixcIlwiKX0sQnJ1dHVzaW5Gb3Jtcy5wb3N0UmVuZGVyPW51bGwsQnJ1dHVzaW5Gb3Jtcy5pbnN0YW5jZXM9bmV3IEFycmF5LEJydXR1c2luRm9ybXMuY3JlYXRlPWZ1bmN0aW9uKHNjaGVtYSl7ZnVuY3Rpb24gdmFsaWRhdGVEZXBlbmN5TWFwSXNBY3ljbGljKCl7ZnVuY3Rpb24gZSh0LHIsbil7aWYoci5oYXNPd25Qcm9wZXJ0eShuKSlyZXR1cm4gdm9pZChlcnJvcj1cIlNjaGVtYSBkZXBlbmRlbmN5IGdyYXBoIGhhcyBjeWNsZXNcIik7aWYocltuXT1udWxsLCF0Lmhhc093blByb3BlcnR5KG4pKXt0W25dPW51bGw7dmFyIGE9ZGVwZW5kZW5jeU1hcFtuXTtpZihhKWZvcih2YXIgaT0wO2k8YS5sZW5ndGg7aSsrKWUodCxyLGFbaV0pO2RlbGV0ZSByW25dfX12YXIgdD1uZXcgT2JqZWN0O2Zvcih2YXIgciBpbiBkZXBlbmRlbmN5TWFwKXQuaGFzT3duUHJvcGVydHkocil8fGUodCxuZXcgT2JqZWN0LHIpfWZ1bmN0aW9uIGFwcGVuZENoaWxkKGUsdCxyKXtlLmFwcGVuZENoaWxkKHQpO2Zvcih2YXIgbj0wO248QnJ1dHVzaW5Gb3Jtcy5kZWNvcmF0b3JzLmxlbmd0aDtuKyspQnJ1dHVzaW5Gb3Jtcy5kZWNvcmF0b3JzW25dKHQscil9ZnVuY3Rpb24gY3JlYXRlUHNldWRvU2NoZW1hKGUpe3ZhciB0PW5ldyBPYmplY3Q7Zm9yKHZhciByIGluIGUpXCJpdGVtc1wiIT09ciYmXCJwcm9wZXJ0aWVzXCIhPT1yJiZcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCIhPT1yJiYoXCJwYXR0ZXJuXCI9PT1yP3Rbcl09bmV3IFJlZ0V4cChlW3JdKTp0W3JdPWVbcl0pO3JldHVybiB0fWZ1bmN0aW9uIGdldERlZmluaXRpb24oZSl7dmFyIHQ9ZS5zcGxpdChcIi9cIikscj1yb290O2Zvcih2YXIgbiBpbiB0KVwiMFwiIT09biYmKHI9clt0W25dXSk7cmV0dXJuIHJ9ZnVuY3Rpb24gY29udGFpbnNTdHIoZSx0KXtmb3IodmFyIHI9MDtyPGUubGVuZ3RoO3IrKylpZihlW3JdPT10KXJldHVybiEwO3JldHVybiExfWZ1bmN0aW9uIHJlbmFtZVJlcXVpcmVkUHJvcGV0aWVzKGUpe2lmKGUpaWYoZS5oYXNPd25Qcm9wZXJ0eShcIm9uZU9mXCIpKWZvcih2YXIgdCBpbiBlLm9uZU9mKXJlbmFtZVJlcXVpcmVkUHJvcGV0aWVzKGUub25lT2ZbdF0pO2Vsc2UgaWYoZS5oYXNPd25Qcm9wZXJ0eShcIiRyZWZcIikpe3ZhciByPWdldERlZmluaXRpb24oZS4kcmVmKTtyZW5hbWVSZXF1aXJlZFByb3BldGllcyhyKX1lbHNlIGlmKFwib2JqZWN0XCI9PT1lLnR5cGUpe2lmKGUucHJvcGVydGllcyl7ZS5oYXNPd25Qcm9wZXJ0eShcInJlcXVpcmVkXCIpJiZBcnJheS5pc0FycmF5KGUucmVxdWlyZWQpJiYoZS5yZXF1aXJlZFByb3BlcnRpZXM9ZS5yZXF1aXJlZCxkZWxldGUgZS5yZXF1aXJlZCk7Zm9yKHZhciBuIGluIGUucHJvcGVydGllcylyZW5hbWVSZXF1aXJlZFByb3BldGllcyhlLnByb3BlcnRpZXNbbl0pfWlmKGUucGF0dGVyblByb3BlcnRpZXMpZm9yKHZhciBhIGluIGUucGF0dGVyblByb3BlcnRpZXMpe3ZhciBpPWUucGF0dGVyblByb3BlcnRpZXNbYV07KGkuaGFzT3duUHJvcGVydHkoXCJ0eXBlXCIpfHxpLmhhc093blByb3BlcnR5KFwiJHJlZlwiKXx8aS5oYXNPd25Qcm9wZXJ0eShcIm9uZU9mXCIpKSYmcmVuYW1lUmVxdWlyZWRQcm9wZXRpZXMoZS5wYXR0ZXJuUHJvcGVydGllc1thXSl9ZS5hZGRpdGlvbmFsUHJvcGVydGllcyYmKGUuYWRkaXRpb25hbFByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoXCJ0eXBlXCIpfHxlLmFkZGl0aW9uYWxQcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KFwib25lT2ZcIikpJiZyZW5hbWVSZXF1aXJlZFByb3BldGllcyhlLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKX1lbHNlXCJhcnJheVwiPT09ZS50eXBlJiZyZW5hbWVSZXF1aXJlZFByb3BldGllcyhlLml0ZW1zKX1mdW5jdGlvbiBwb3B1bGF0ZVNjaGVtYU1hcChlLHQpe3ZhciByPWNyZWF0ZVBzZXVkb1NjaGVtYSh0KTtpZihyLiRpZD1lLHNjaGVtYU1hcFtlXT1yLHQpe2lmKHQuaGFzT3duUHJvcGVydHkoXCJvbmVPZlwiKSl7ci5vbmVPZj1uZXcgQXJyYXksci50eXBlPVwib25lT2ZcIjtmb3IodmFyIG4gaW4gdC5vbmVPZil7dmFyIGE9ZStcIi5cIituO3Iub25lT2Zbbl09YSxwb3B1bGF0ZVNjaGVtYU1hcChhLHQub25lT2Zbbl0pfX1lbHNlIGlmKHQuaGFzT3duUHJvcGVydHkoXCIkcmVmXCIpKXt2YXIgaT1nZXREZWZpbml0aW9uKHQuJHJlZik7aWYoaSl7aWYodC5oYXNPd25Qcm9wZXJ0eShcInRpdGxlXCIpfHx0Lmhhc093blByb3BlcnR5KFwiZGVzY3JpcHRpb25cIikpe3ZhciBvPXt9O2Zvcih2YXIgcyBpbiBpKW9bc109aVtzXTt0Lmhhc093blByb3BlcnR5KFwidGl0bGVcIikmJihvLnRpdGxlPXQudGl0bGUpLHQuaGFzT3duUHJvcGVydHkoXCJkZXNjcmlwdGlvblwiKSYmKG8uZGVzY3JpcHRpb249dC5kZXNjcmlwdGlvbiksaT1vfXBvcHVsYXRlU2NoZW1hTWFwKGUsaSl9fWVsc2UgaWYoXCJvYmplY3RcIj09PXQudHlwZSl7aWYodC5wcm9wZXJ0aWVzKXtyLnByb3BlcnRpZXM9bmV3IE9iamVjdDtmb3IodmFyIHMgaW4gdC5wcm9wZXJ0aWVzKXt2YXIgYT1lK1wiLlwiK3M7ci5wcm9wZXJ0aWVzW3NdPWE7dmFyIHU9dC5wcm9wZXJ0aWVzW3NdO3QucmVxdWlyZWRQcm9wZXJ0aWVzJiYoY29udGFpbnNTdHIodC5yZXF1aXJlZFByb3BlcnRpZXMscyk/dS5yZXF1aXJlZD0hMDp1LnJlcXVpcmVkPSExKSxwb3B1bGF0ZVNjaGVtYU1hcChhLHUpfX1pZih0LnBhdHRlcm5Qcm9wZXJ0aWVzKXtyLnBhdHRlcm5Qcm9wZXJ0aWVzPW5ldyBPYmplY3Q7Zm9yKHZhciBsIGluIHQucGF0dGVyblByb3BlcnRpZXMpe3ZhciBkPWUrXCJbXCIrbCtcIl1cIjtyLnBhdHRlcm5Qcm9wZXJ0aWVzW2xdPWQ7dmFyIHA9dC5wYXR0ZXJuUHJvcGVydGllc1tsXTtwLmhhc093blByb3BlcnR5KFwidHlwZVwiKXx8cC5oYXNPd25Qcm9wZXJ0eShcIiRyZWZcIil8fHAuaGFzT3duUHJvcGVydHkoXCJvbmVPZlwiKT9wb3B1bGF0ZVNjaGVtYU1hcChkLHQucGF0dGVyblByb3BlcnRpZXNbbF0pOnBvcHVsYXRlU2NoZW1hTWFwKGQsU0NIRU1BX0FOWSl9fWlmKHQuYWRkaXRpb25hbFByb3BlcnRpZXMpe3ZhciBhPWUrXCJbKl1cIjtyLmFkZGl0aW9uYWxQcm9wZXJ0aWVzPWEsdC5hZGRpdGlvbmFsUHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShcInR5cGVcIil8fHQuYWRkaXRpb25hbFByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoXCJvbmVPZlwiKT9wb3B1bGF0ZVNjaGVtYU1hcChhLHQuYWRkaXRpb25hbFByb3BlcnRpZXMpOnBvcHVsYXRlU2NoZW1hTWFwKGEsU0NIRU1BX0FOWSl9fWVsc2VcImFycmF5XCI9PT10LnR5cGUmJihyLml0ZW1zPWUrXCJbI11cIixwb3B1bGF0ZVNjaGVtYU1hcChyLml0ZW1zLHQuaXRlbXMpKTtpZih0Lmhhc093blByb3BlcnR5KFwiZGVwZW5kc09uXCIpKXtudWxsPT09dC5kZXBlbmRzT24mJih0LmRlcGVuZHNPbj1bXCIkXCJdKTtmb3IodmFyIGM9bmV3IEFycmF5LG49MDtuPHQuZGVwZW5kc09uLmxlbmd0aDtuKyspdC5kZXBlbmRzT25bbl0/dC5kZXBlbmRzT25bbl0uc3RhcnRzV2l0aChcIiRcIik/Y1tuXT10LmRlcGVuZHNPbltuXTplLmVuZHNXaXRoKFwiXVwiKT9jW25dPWUrXCIuXCIrdC5kZXBlbmRzT25bbl06Y1tuXT1lLnN1YnN0cmluZygwLGUubGFzdEluZGV4T2YoXCIuXCIpKStcIi5cIit0LmRlcGVuZHNPbltuXTpjW25dPVwiJFwiO3NjaGVtYU1hcFtlXS5kZXBlbmRzT249Yztmb3IodmFyIG49MDtuPGMubGVuZ3RoO24rKyl7dmFyIG09ZGVwZW5kZW5jeU1hcFtjW25dXTttfHwobT1uZXcgQXJyYXksZGVwZW5kZW5jeU1hcFtjW25dXT1tKSxtW20ubGVuZ3RoXT1lfX19fWZ1bmN0aW9uIHJlbmRlclRpdGxlKGUsdCxyKXtpZihlJiZ0KXt2YXIgbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XCJhbnlcIiE9PXIudHlwZSYmXCJvYmplY3RcIiE9PXIudHlwZSYmXCJhcnJheVwiIT09ci50eXBlJiYobi5odG1sRm9yPWdldElucHV0SWQoKSk7dmFyIGE9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodCtcIjpcIik7aWYoYXBwZW5kQ2hpbGQobixhLHIpLHIuZGVzY3JpcHRpb24mJihuLnRpdGxlPXIuZGVzY3JpcHRpb24pLHIucmVxdWlyZWQpe3ZhciBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdXBcIik7YXBwZW5kQ2hpbGQoaSxkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIipcIiksciksYXBwZW5kQ2hpbGQobixpLHIpLG4uY2xhc3NOYW1lPVwicmVxdWlyZWRcIn1hcHBlbmRDaGlsZChlLG4scil9fWZ1bmN0aW9uIGdldElucHV0SWQoKXtyZXR1cm4gZm9ybUlkK1wiX1wiK2lucHV0Q291bnRlcn1mdW5jdGlvbiB2YWxpZGF0ZShlKXt2YXIgdD0hMDtpZihlLmhhc093blByb3BlcnR5KFwiZ2V0VmFsaWRhdGlvbkVycm9yXCIpKXt2YXIgcj1lLmdldFZhbGlkYXRpb25FcnJvcigpO3I/KEJydXR1c2luRm9ybXMub25WYWxpZGF0aW9uRXJyb3IoZSxyKSx0PSExKTpCcnV0dXNpbkZvcm1zLm9uVmFsaWRhdGlvblN1Y2Nlc3MoZSl9aWYoZS5jaGlsZE5vZGVzKWZvcih2YXIgbj0wO248ZS5jaGlsZE5vZGVzLmxlbmd0aDtuKyspdmFsaWRhdGUoZS5jaGlsZE5vZGVzW25dKXx8KHQ9ITEpO3JldHVybiB0fWZ1bmN0aW9uIGNsZWFyKGUpe2lmKGUpZm9yKDtlLmZpcnN0Q2hpbGQ7KWUucmVtb3ZlQ2hpbGQoZS5maXJzdENoaWxkKX1mdW5jdGlvbiByZW5kZXIoZSx0LHIsbixhLGkpe3ZhciBvPWdldFNjaGVtYUlkKHIpLHM9Z2V0U2NoZW1hKG8pO3JlbmRlckluZm9NYXBbb109bmV3IE9iamVjdCxyZW5kZXJJbmZvTWFwW29dLnRpdGxlQ29udGFpbmVyPWUscmVuZGVySW5mb01hcFtvXS5jb250YWluZXI9dCxyZW5kZXJJbmZvTWFwW29dLnBhcmVudE9iamVjdD1uLHJlbmRlckluZm9NYXBbb10ucHJvcGVydHlQcm92aWRlcj1hLHJlbmRlckluZm9NYXBbb10udmFsdWU9aSxjbGVhcihlKSxjbGVhcih0KTt2YXIgdT1yZW5kZXJlcnNbcy50eXBlXTtpZih1JiYhcy5kZXBlbmRzT24pcy50aXRsZT9yZW5kZXJUaXRsZShlLHMudGl0bGUscyk6YSYmcmVuZGVyVGl0bGUoZSxhLmdldFZhbHVlKCkscyksaXx8KGk9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGluaXRpYWxWYWx1ZSYmbnVsbCE9PWluaXRpYWxWYWx1ZT9nZXRJbml0aWFsVmFsdWUocik6c1tcImRlZmF1bHRcIl0pLHUodCxyLG4sYSxpKTtlbHNlIGlmKHMuJHJlZiYmb2JqLnNjaGVtYVJlc29sdmVyKXt2YXIgbD1mdW5jdGlvbihlKXtpZihlJiZlLmhhc093blByb3BlcnR5KHIpJiZKU09OLnN0cmluZ2lmeShzY2hlbWFNYXBbcl0pIT09SlNPTi5zdHJpbmdpZnkoZVtyXSkpe2NsZWFuU2NoZW1hTWFwKHIpLGNsZWFuRGF0YShyKSxwb3B1bGF0ZVNjaGVtYU1hcChyLGVbcl0pO3ZhciB0PXJlbmRlckluZm9NYXBbcl07dCYmcmVuZGVyKHQudGl0bGVDb250YWluZXIsdC5jb250YWluZXIscix0LnBhcmVudE9iamVjdCx0LnByb3BlcnR5UHJvdmlkZXIsdC52YWx1ZSl9QnJ1dHVzaW5Gb3Jtcy5vblJlc29sdXRpb25GaW5pc2hlZChuKX07QnJ1dHVzaW5Gb3Jtcy5vblJlc29sdXRpb25TdGFydGVkKG4pLG9iai5zY2hlbWFSZXNvbHZlcihbcl0sb2JqLmdldERhdGEoKSxsKX19ZnVuY3Rpb24gY3JlYXRlUHJvcGVydHlQcm92aWRlcihlLHQpe3ZhciByPW5ldyBPYmplY3Q7cmV0dXJuIHIuZ2V0VmFsdWU9ZSxyLm9uY2hhbmdlPXQscn1mdW5jdGlvbiBnZXRJbml0aWFsVmFsdWUoaWQpe3ZhciByZXQ7dHJ5e2V2YWwoXCJyZXQgPSBpbml0aWFsVmFsdWVcIitpZC5zdWJzdHJpbmcoMSkpfWNhdGNoKGUpe3JldD1udWxsfXJldHVybiByZXR9ZnVuY3Rpb24gZ2V0VmFsdWUoc2NoZW1hLGlucHV0KXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBpbnB1dC5nZXRWYWx1ZSlyZXR1cm4gaW5wdXQuZ2V0VmFsdWUoKTt2YXIgdmFsdWU7cmV0dXJuIHZhbHVlPVwic2VsZWN0XCI9PT1pbnB1dC50YWdOYW1lLnRvTG93ZXJDYXNlKCk/aW5wdXQub3B0aW9uc1tpbnB1dC5zZWxlY3RlZEluZGV4XS52YWx1ZTppbnB1dC52YWx1ZSxcIlwiPT09dmFsdWU/bnVsbDooXCJpbnRlZ2VyXCI9PT1zY2hlbWEudHlwZT8odmFsdWU9cGFyc2VJbnQodmFsdWUpLGlzRmluaXRlKHZhbHVlKXx8KHZhbHVlPW51bGwpKTpcIm51bWJlclwiPT09c2NoZW1hLnR5cGU/KHZhbHVlPXBhcnNlRmxvYXQodmFsdWUpLGlzRmluaXRlKHZhbHVlKXx8KHZhbHVlPW51bGwpKTpcImJvb2xlYW5cIj09PXNjaGVtYS50eXBlP1wiaW5wdXRcIj09PWlucHV0LnRhZ05hbWUudG9Mb3dlckNhc2UoKT8odmFsdWU9aW5wdXQuY2hlY2tlZCx2YWx1ZXx8KHZhbHVlPSExKSk6XCJzZWxlY3RcIj09PWlucHV0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSYmKHZhbHVlPVwidHJ1ZVwiPT09aW5wdXQudmFsdWU/ITA6XCJmYWxzZVwiPT09aW5wdXQudmFsdWU/ITE6bnVsbCk6XCJhbnlcIj09PXNjaGVtYS50eXBlJiZ2YWx1ZSYmZXZhbChcInZhbHVlPVwiK3ZhbHVlKSx2YWx1ZSl9ZnVuY3Rpb24gZ2V0U2NoZW1hSWQoZSl7cmV0dXJuIGUucmVwbGFjZSgvXFxbXCJbXlwiXSpcIlxcXS9nLFwiWypdXCIpLnJlcGxhY2UoL1xcW1xcZCpcXF0vZyxcIlsjXVwiKX1mdW5jdGlvbiBnZXRQYXJlbnRTY2hlbWFJZChlKXtyZXR1cm4gZS5zdWJzdHJpbmcoMCxlLmxhc3RJbmRleE9mKFwiLlwiKSl9ZnVuY3Rpb24gZ2V0U2NoZW1hKGUpe3JldHVybiBzY2hlbWFNYXBbZV19ZnVuY3Rpb24gY2xlYW5TY2hlbWFNYXAoZSl7Zm9yKHZhciB0IGluIHNjaGVtYU1hcCllLnN0YXJ0c1dpdGgodCkmJmRlbGV0ZSBzY2hlbWFNYXBbdF19ZnVuY3Rpb24gY2xlYW5EYXRhKGUpe3ZhciB0PW5ldyBFeHByZXNzaW9uKGUpO3QudmlzaXQoZGF0YSxmdW5jdGlvbihlLHQscil7ZGVsZXRlIHRbcl19KX1mdW5jdGlvbiBvbkRlcGVuZGVuY3lDaGFuZ2VkKGUsdCl7dmFyIHI9ZGVwZW5kZW5jeU1hcFtlXTtpZihyJiZvYmouc2NoZW1hUmVzb2x2ZXIpe3ZhciBuPWZ1bmN0aW9uKGUpe2lmKGUpZm9yKHZhciByIGluIGUpaWYoSlNPTi5zdHJpbmdpZnkoc2NoZW1hTWFwW3JdKSE9PUpTT04uc3RyaW5naWZ5KGVbcl0pKXtjbGVhblNjaGVtYU1hcChyKSxjbGVhbkRhdGEocikscG9wdWxhdGVTY2hlbWFNYXAocixlW3JdKTt2YXIgbj1yZW5kZXJJbmZvTWFwW3JdO24mJnJlbmRlcihuLnRpdGxlQ29udGFpbmVyLG4uY29udGFpbmVyLHIsbi5wYXJlbnRPYmplY3Qsbi5wcm9wZXJ0eVByb3ZpZGVyLG4udmFsdWUpfUJydXR1c2luRm9ybXMub25SZXNvbHV0aW9uRmluaXNoZWQodCl9O0JydXR1c2luRm9ybXMub25SZXNvbHV0aW9uU3RhcnRlZCh0KSxvYmouc2NoZW1hUmVzb2x2ZXIocixvYmouZ2V0RGF0YSgpLG4pfX1mdW5jdGlvbiBFeHByZXNzaW9uKGUpe2Z1bmN0aW9uIHQoZSl7aWYobnVsbD09PWUpcmV0dXJuIG51bGw7Zm9yKHZhciB0PW5ldyBBcnJheSxyPW51bGwsbj0wLGE9MDthPGUubGVuZ3RoO2ErKyknXCInPT09ZS5jaGFyQXQoYSk/bnVsbD09PXI/cj0nXCInOidcIic9PT1yJiYocj1udWxsLHRbdC5sZW5ndGhdPWUuc3Vic3RyaW5nKG4sYSsxKS50cmltKCksbj1hKzEpOlwiJ1wiPT09ZS5jaGFyQXQoYSk/bnVsbD09PXI/cj1cIidcIjpcIidcIj09PXImJihyPW51bGwsdFt0Lmxlbmd0aF09ZS5zdWJzdHJpbmcobixhKzEpLnRyaW0oKSxuPWErMSk6XCJbXCI9PT1lLmNoYXJBdChhKT9udWxsPT09ciYmKG4hPT1hJiYodFt0Lmxlbmd0aF09ZS5zdWJzdHJpbmcobixhKS50cmltKCkpLHRbdC5sZW5ndGhdPVwiW1wiLG49YSsxKTpcIl1cIj09PWUuY2hhckF0KGEpP251bGw9PT1yJiYobiE9PWEmJih0W3QubGVuZ3RoXT1lLnN1YnN0cmluZyhuLGEpLnRyaW0oKSksdFt0Lmxlbmd0aF09XCJdXCIsbj1hKzEpOlwiLlwiPT09ZS5jaGFyQXQoYSk/bnVsbD09PXImJihuIT09YSYmKHRbdC5sZW5ndGhdPWUuc3Vic3RyaW5nKG4sYSkudHJpbSgpKSxuPWErMSk6YT09PWUubGVuZ3RoLTEmJih0W3QubGVuZ3RoXT1lLnN1YnN0cmluZyhuLGErMSkudHJpbSgpKTtyZXR1cm4gdH0obnVsbD09PWV8fDA9PT1lLmxlbmd0aHx8XCIuXCI9PT1lKSYmKGU9XCIkXCIpO2Zvcih2YXIgcj1uZXcgQXJyYXksbj10KGUpLGE9ITEsaT0wLG89XCJcIixzPTA7czxuLmxlbmd0aDtzKyspe3ZhciB1PW5bc107aWYoXCJbXCI9PT11KXtpZihhKXRocm93XCJFcnJvciBwYXJzaW5nIGV4cHJlc3Npb24gJ1wiK2UrXCInOiBOZXN0ZWQgWyBmb3VuZFwiO2E9ITAsaT0wLG8rPXV9ZWxzZSBpZihcIl1cIj09PXUpe2lmKCFhKXRocm93XCJFcnJvciBwYXJzaW5nIGV4cHJlc3Npb24gJ1wiK2UrXCInOiBVbmJhbGFuY2VkIF0gZm91bmRcIjthPSExLG8rPXUscltyLmxlbmd0aF09byxvPVwiXCJ9ZWxzZSBpZihhKXtpZihpPjApdGhyb3dcIkVycm9yIHBhcnNpbmcgZXhwcmVzc2lvbiAnXCIrZStcIic6IE11bHRpcGxlIHRva2VucyBmb3VuZCBpbnNpZGUgYSBicmFja2V0XCI7bys9dSxpKyt9ZWxzZSByW3IubGVuZ3RoXT11O2lmKHM9PT1uLmxlbmd0aC0xJiZhKXRocm93XCJFcnJvciBwYXJzaW5nIGV4cHJlc3Npb24gJ1wiK2UrXCInOiBVbmJhbGFuY2VkIFsgZm91bmRcIn10aGlzLmV4cD1lLHRoaXMucXVldWU9cix0aGlzLnZpc2l0PWZ1bmN0aW9uKGUsdCl7ZnVuY3Rpb24gcihlLG4sYSxpLG8pe2lmKG51bGwhPWEpe3ZhciBzPW4uc2hpZnQoKTtpZihcIiRcIj09PXMpe2U9XCIkXCI7dmFyIHM9bi5zaGlmdCgpfWlmKHMpaWYoQXJyYXkuaXNBcnJheShhKSl7aWYoIXMuc3RhcnRzV2l0aChcIltcIikpdGhyb3dcIk5vZGUgJ1wiK2UrXCInIGlzIG9mIHR5cGUgYXJyYXlcIjt2YXIgdT1zLnN1YnN0cmluZygxLHMubGVuZ3RoLTEpO2lmKHUuZXF1YWxzKFwiI1wiKSlmb3IodmFyIGw9MDtsPGEubGVuZ3RoO2wrKyl7dmFyIGQ9YVtsXTtyKGUrcyxuLnNsaWNlKDApLGQsYSxsKSxyKGUrXCJbXCIrbCtcIl1cIixuLnNsaWNlKDApLGQsYSxsKX1lbHNlIGlmKFwiJFwiPT09dSl7dmFyIGQ9YVthLmxlbmd0aC0xXTtyKGUrcyxuLnNsaWNlKDApLGQsYSxhLmxlbmd0aC0xKX1lbHNle3ZhciBwPXBhcnNlSW50KHUpO2lmKGlzTmFOKHApKXRocm93XCJFbGVtZW50ICdcIit1K1wiJyBvZiBub2RlICdcIitlK1wiJyBpcyBub3QgYW4gaW50ZWdlciwgb3IgdGhlICckJyBsYXN0IGVsZW1lbnQgc3ltYm9sLCAgb3IgdGhlIHdpbGNhcmQgc3ltYm9sICcjJ1wiO2lmKDA+cCl0aHJvd1wiRWxlbWVudCAnXCIrdStcIicgb2Ygbm9kZSAnXCIrZStcIicgaXMgbG93ZXIgdGhhbiB6ZXJvXCI7dmFyIGQ9YVtwXTtyKGUrcyxuLnNsaWNlKDApLGQsYSxwKX19ZWxzZXtpZihcIm9iamVjdFwiIT10eXBlb2YgYSl0aHJvd1wiYm9vbGVhblwiPT10eXBlb2YgYXx8XCJudW1iZXJcIj09dHlwZW9mIGF8fFwic3RyaW5nXCI9PXR5cGVvZiBhP1wiTm9kZSBpcyBsZWFmIGJ1dCBzdGlsbCBhcmUgdG9rZW5zIHJlbWFpbmluZzogXCIrczpcIk5vZGUgdHlwZSAnXCIrdHlwZW9mIGErXCInIG5vdCBzdXBwb3J0ZWQgZm9yIGluZGV4IGZpZWxkICdcIitlK1wiJ1wiO2lmKFwiWypdXCI9PT1zKWZvcih2YXIgYyBpbiBhKXt2YXIgZD1hW2NdO3IoZStzLG4uc2xpY2UoMCksZCxhLGMpLHIoZSsnW1wiJytjKydcIl0nLG4uc2xpY2UoMCksZCxhLGMpfWVsc2V7dmFyIGQ7aWYocy5zdGFydHNXaXRoKFwiW1wiKSl7dmFyIHU9cy5zdWJzdHJpbmcoMSxzLmxlbmd0aC0xKTtpZighdS5zdGFydHNXaXRoKCdcIicpJiYhdS5zdGFydHNXaXRoKFwiJ1wiKSl0aHJvd1wiRWxlbWVudCAnXCIrdStcIicgb2Ygbm9kZSAnXCIrZStcIicgbXVzdCBiZSBhIHN0cmluZyBleHByZXNzaW9uIG9yIHdpbGNhcmQgJyonXCI7dT11LnN1YnN0cmluZygxLHUubGVuZ3RoKCktMSksZSs9cyxkPWFbdV19ZWxzZSBlPWUubGVuZ3RoPjA/ZStcIi5cIitzOnMsZD1hW3NdO3IoZSxuLGQsYSxzKX19ZWxzZSB0KGEsaSxvKX19cih0aGlzLmV4cCx0aGlzLnF1ZXVlLGUpfX12YXIgU0NIRU1BX0FOWT17dHlwZTpcImFueVwifSxvYmo9bmV3IE9iamVjdCxzY2hlbWFNYXA9bmV3IE9iamVjdCxkZXBlbmRlbmN5TWFwPW5ldyBPYmplY3QscmVuZGVySW5mb01hcD1uZXcgT2JqZWN0LGNvbnRhaW5lcixkYXRhLGVycm9yLGluaXRpYWxWYWx1ZSxpbnB1dENvdW50ZXI9MCxyb290PXNjaGVtYSxmb3JtSWQ9XCJCcnV0dXNpbkZvcm1zI1wiK0JydXR1c2luRm9ybXMuaW5zdGFuY2VzLmxlbmd0aDtyZW5hbWVSZXF1aXJlZFByb3BldGllcyhzY2hlbWEpLHBvcHVsYXRlU2NoZW1hTWFwKFwiJFwiLHNjaGVtYSksdmFsaWRhdGVEZXBlbmN5TWFwSXNBY3ljbGljKCk7dmFyIHJlbmRlcmVycz1uZXcgT2JqZWN0O3JldHVybiByZW5kZXJlcnMuaW50ZWdlcj1mdW5jdGlvbihlLHQscixuLGEpe3JlbmRlcmVycy5zdHJpbmcoZSx0LHIsbixhKX0scmVuZGVyZXJzLm51bWJlcj1mdW5jdGlvbihlLHQscixuLGEpe3JlbmRlcmVycy5zdHJpbmcoZSx0LHIsbixhKX0scmVuZGVyZXJzLmFueT1mdW5jdGlvbihlLHQscixuLGEpe3JlbmRlcmVycy5zdHJpbmcoZSx0LHIsbixhKX0scmVuZGVyZXJzLnN0cmluZz1mdW5jdGlvbihlLHQscixuLGEpe3ZhciBpLG89Z2V0U2NoZW1hSWQodCkscz1nZXRQYXJlbnRTY2hlbWFJZChvKSx1PWdldFNjaGVtYShvKSxsPWdldFNjaGVtYShzKTtpZihcImFueVwiPT09dS50eXBlKWk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpLGEmJihpLnZhbHVlPUpTT04uc3RyaW5naWZ5KGEsbnVsbCw0KSx1LnJlYWRPbmx5JiYoaS5kaXNhYmxlZD0hMCkpO2Vsc2UgaWYodS5tZWRpYSlpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxpLnR5cGU9XCJmaWxlXCIsYXBwZW5kQ2hpbGQoaSxkLHUpO2Vsc2UgaWYodVtcImVudW1cIl0pe2lmKGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKSwhdS5yZXF1aXJlZCl7dmFyIGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSxwPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpO2QudmFsdWU9XCJcIixhcHBlbmRDaGlsZChkLHAsdSksYXBwZW5kQ2hpbGQoaSxkLHUpfWZvcih2YXIgYz0wLG09MDttPHVbXCJlbnVtXCJdLmxlbmd0aDttKyspe3ZhciBkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIikscD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh1W1wiZW51bVwiXVttXSk7ZC52YWx1ZT11W1wiZW51bVwiXVttXSxhcHBlbmRDaGlsZChkLHAsdSksYXBwZW5kQ2hpbGQoaSxkLHUpLGEmJnVbXCJlbnVtXCJdW21dPT09YSYmKGM9bSx1LnJlcXVpcmVkfHxjKyssdS5yZWFkT25seSYmKGkuZGlzYWJsZWQ9ITApKX0xPT09dVtcImVudW1cIl0ubGVuZ3RoP2kuc2VsZWN0ZWRJbmRleD0xOmkuc2VsZWN0ZWRJbmRleD1jfWVsc2V7aWYoaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksXCJpbnRlZ2VyXCI9PT11LnR5cGV8fFwibnVtYmVyXCI9PT11LnR5cGUpaS50eXBlPVwibnVtYmVyXCIsaS5zdGVwPXUuc3RlcD9cIlwiK3Uuc3RlcDpcImFueVwiLFwibnVtYmVyXCIhPXR5cGVvZiBhJiYoYT1udWxsKTtlbHNlIGlmKFwiZGF0ZS10aW1lXCI9PT11LmZvcm1hdCl0cnl7aS50eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIn1jYXRjaChmKXtpLnR5cGU9XCJ0ZXh0XCJ9ZWxzZVwiZW1haWxcIj09PXUuZm9ybWF0P2kudHlwZT1cImVtYWlsXCI6XCJ0ZXh0XCI9PT11LmZvcm1hdD9pPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTppLnR5cGU9XCJ0ZXh0XCI7bnVsbCE9PWEmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBhJiYoaS52YWx1ZT1hLHUucmVhZE9ubHkmJihpLmRpc2FibGVkPSEwKSl9cmV0dXJuIGkuc2NoZW1hPW8saS5zZXRBdHRyaWJ1dGUoXCJhdXRvY29ycmVjdFwiLFwib2ZmXCIpLGkuZ2V0VmFsaWRhdGlvbkVycm9yPWZ1bmN0aW9uKCl7dHJ5e3ZhciBlPWdldFZhbHVlKHUsaSk7aWYobnVsbD09PWUpe2lmKHUucmVxdWlyZWQpe2lmKCFsfHxcIm9iamVjdFwiIT09bC50eXBlKXJldHVybiBCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLnJlcXVpcmVkO2lmKGwucmVxdWlyZWQpcmV0dXJuIEJydXR1c2luRm9ybXMubWVzc2FnZXMucmVxdWlyZWQ7Zm9yKHZhciB0IGluIHIpaWYobnVsbCE9PXJbdF0pcmV0dXJuIEJydXR1c2luRm9ybXMubWVzc2FnZXMucmVxdWlyZWR9fWVsc2V7aWYodS5wYXR0ZXJuJiYhdS5wYXR0ZXJuLnRlc3QoZSkpcmV0dXJuIEJydXR1c2luRm9ybXMubWVzc2FnZXMucGF0dGVybi5mb3JtYXQodS5wYXR0ZXJuLnNvdXJjZSk7aWYodS5taW5MZW5ndGgmJighZXx8dS5taW5MZW5ndGg+ZS5sZW5ndGgpKXJldHVybiBCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLm1pbkxlbmd0aC5mb3JtYXQodS5taW5MZW5ndGgpO2lmKHUubWF4TGVuZ3RoJiZlJiZ1Lm1heExlbmd0aDxlLmxlbmd0aClyZXR1cm4gQnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5tYXhMZW5ndGguZm9ybWF0KHUubWF4TGVuZ3RoKX1pZihudWxsIT09ZSYmIWlzTmFOKGUpKXtpZih1Lm11bHRpcGxlT2YmJmUldS5tdWx0aXBsZU9mIT09MClyZXR1cm4gQnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5tdWx0aXBsZU9mLmZvcm1hdCh1Lm11bHRpcGxlT2YpO2lmKHUuaGFzT3duUHJvcGVydHkoXCJtYXhpbXVtXCIpKXtpZih1LmV4Y2x1c2l2ZU1heGltdW0mJmU+PXUubWF4aW11bSlyZXR1cm4gQnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5leGNsdXNpdmVNYXhpbXVtLmZvcm1hdCh1Lm1heGltdW0pO2lmKCF1LmV4Y2x1c2l2ZU1heGltdW0mJmU+dS5tYXhpbXVtKXJldHVybiBCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLm1heGltdW0uZm9ybWF0KHUubWF4aW11bSl9aWYodS5oYXNPd25Qcm9wZXJ0eShcIm1pbmltdW1cIikpe2lmKHUuZXhjbHVzaXZlTWluaW11bSYmZTw9dS5taW5pbXVtKXJldHVybiBCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLmV4Y2x1c2l2ZU1pbmltdW0uZm9ybWF0KHUubWluaW11bSk7aWYoIXUuZXhjbHVzaXZlTWluaW11bSYmZTx1Lm1pbmltdW0pcmV0dXJuIEJydXR1c2luRm9ybXMubWVzc2FnZXMubWluaW11bS5mb3JtYXQodS5taW5pbXVtKX19fWNhdGNoKG4pe3JldHVybiBCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLmludmFsaWRWYWx1ZX19LGkub25jaGFuZ2U9ZnVuY3Rpb24oKXt2YXIgZTt0cnl7ZT1nZXRWYWx1ZSh1LGkpfWNhdGNoKHQpe2U9bnVsbH1yP3Jbbi5nZXRWYWx1ZSgpXT1lOmRhdGE9ZSxvbkRlcGVuZGVuY3lDaGFuZ2VkKG8saSl9LHUuZGVzY3JpcHRpb24mJihpLnRpdGxlPXUuZGVzY3JpcHRpb24saS5wbGFjZWhvbGRlcj11LmRlc2NyaXB0aW9uKSxpLm9uY2hhbmdlKCksaS5pZD1nZXRJbnB1dElkKCksaW5wdXRDb3VudGVyKyssYXBwZW5kQ2hpbGQoZSxpLHUpLHJ9LHJlbmRlcmVyc1tcImJvb2xlYW5cIl09ZnVuY3Rpb24oZSx0LHIsbixhKXt2YXIgaSxvPWdldFNjaGVtYUlkKHQpLHM9Z2V0U2NoZW1hKG8pO2lmKHMucmVxdWlyZWQpaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksaS50eXBlPVwiY2hlY2tib3hcIixhPT09ITAmJihpLmNoZWNrZWQ9ITApO2Vsc2V7aT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO3ZhciB1PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiksbD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKTtsLnZhbHVlPVwiXCIsYXBwZW5kQ2hpbGQodSxsLHMpLGFwcGVuZENoaWxkKGksdSxzKTt2YXIgZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpLHA9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoQnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlc1tcInRydWVcIl0pO2QudmFsdWU9XCJ0cnVlXCIsYXBwZW5kQ2hpbGQoZCxwLHMpLGFwcGVuZENoaWxkKGksZCxzKTt2YXIgYz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpLG09ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoQnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlc1tcImZhbHNlXCJdKTtjLnZhbHVlPVwiZmFsc2VcIixhcHBlbmRDaGlsZChjLG0scyksYXBwZW5kQ2hpbGQoaSxjLHMpLGE9PT0hMD9pLnNlbGVjdGVkSW5kZXg9MTphPT09ITEmJihpLnNlbGVjdGVkSW5kZXg9Mil9aS5vbmNoYW5nZT1mdW5jdGlvbigpe3I/cltuLmdldFZhbHVlKCldPWdldFZhbHVlKHMsaSk6ZGF0YT1nZXRWYWx1ZShzLGkpLG9uRGVwZW5kZW5jeUNoYW5nZWQobyxpKX0saS5zY2hlbWE9byxpLmlkPWdldElucHV0SWQoKSxpbnB1dENvdW50ZXIrKyxzLmRlc2NyaXB0aW9uJiYoaS50aXRsZT1zLmRlc2NyaXB0aW9uKSxpLm9uY2hhbmdlKCksYXBwZW5kQ2hpbGQoZSxpLHMpfSxyZW5kZXJlcnMub25lT2Y9ZnVuY3Rpb24oZSx0LHIsbixhKXt2YXIgaT1nZXRTY2hlbWFJZCh0KSxvPWdldFNjaGVtYShpKSxzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiksdT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3UuaW5uZXJIVE1MPVwiXCIscy50eXBlPVwic2VsZWN0XCIscy5zY2hlbWE9aTt2YXIgbD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO2wudmFsdWU9bnVsbCxhcHBlbmRDaGlsZChzLGwsbyk7Zm9yKHZhciBkPTA7ZDxvLm9uZU9mLmxlbmd0aDtkKyspe3ZhciBwPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiksYz1pK1wiLlwiK2QsbT1nZXRTY2hlbWEoYyksZj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShtLnRpdGxlKTtpZihwLnZhbHVlPW8ub25lT2ZbZF0sYXBwZW5kQ2hpbGQocCxmLG8pLGFwcGVuZENoaWxkKHMscCxvKSx2b2lkIDAhPT1hJiZudWxsIT09YSYmKG8ucmVhZE9ubHkmJihzLmRpc2FibGVkPSEwKSxhLmhhc093blByb3BlcnR5KFwidHlwZVwiKSYmbS5oYXNPd25Qcm9wZXJ0eShcInByb3BlcnRpZXNcIikmJm0ucHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShcInR5cGVcIikpKXt2YXIgaD1nZXRTY2hlbWEobS5wcm9wZXJ0aWVzLnR5cGUpO2EudHlwZT09PWhbXCJlbnVtXCJdWzBdJiYocy5zZWxlY3RlZEluZGV4PWQrMSxyZW5kZXIobnVsbCx1LHQrXCIuXCIrKHMuc2VsZWN0ZWRJbmRleC0xKSxyLG4sYSkpfX1zLm9uY2hhbmdlPWZ1bmN0aW9uKCl7cmVuZGVyKG51bGwsdSx0K1wiLlwiKyhzLnNlbGVjdGVkSW5kZXgtMSkscixuLGEpfSxhcHBlbmRDaGlsZChlLHMsbyksYXBwZW5kQ2hpbGQoZSx1LG8pfSxyZW5kZXJlcnMub2JqZWN0PWZ1bmN0aW9uKGUsdCxyLG4sYSl7ZnVuY3Rpb24gaShlKXt2YXIgdD1uZXcgT2JqZWN0O3JldHVybiB0LmdldFZhbHVlPWZ1bmN0aW9uKCl7cmV0dXJuIGV9LHQub25jaGFuZ2U9ZnVuY3Rpb24oZSl7fSx0fWZ1bmN0aW9uIG8oZSx0LHIsbixhLGkpe3ZhciBvPWdldFNjaGVtYUlkKHIpLHM9Z2V0U2NoZW1hKG8pLHU9dC50Qm9kaWVzWzBdLGw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpLGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO2QuY2xhc3NOYW1lPVwiYWRkLXByb3AtbmFtZVwiO3ZhciBwPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKSxjPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKSxtPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKSxmPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKSxoPVwiJFwiK09iamVjdC5rZXlzKGUpLmxlbmd0aCtcIiRcIix2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTt2LmNsYXNzTmFtZT1cInByb3AtdmFsdWVcIjt2YXIgZz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7Zy50eXBlPVwidGV4dFwiO3ZhciB5O2kmJih5PVJlZ0V4cChpKSksZy5nZXRWYWxpZGF0aW9uRXJyb3I9ZnVuY3Rpb24oKXtyZXR1cm4gZy5wcmV2aW91c1ZhbHVlIT09Zy52YWx1ZSYmZS5oYXNPd25Qcm9wZXJ0eShnLnZhbHVlKT9CcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLmFkZHByb3BOYW1lRXhpc3RlbnQ6Zy52YWx1ZT92b2lkIDA6QnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5hZGRwcm9wTmFtZVJlcXVpcmVkfTt2YXIgYj1jcmVhdGVQcm9wZXJ0eVByb3ZpZGVyKGZ1bmN0aW9uKCl7aWYoZy52YWx1ZSl7aWYoIXkpcmV0dXJuIGcudmFsdWU7aWYoLTEhPT1nLnZhbHVlLnNlYXJjaCh5KSlyZXR1cm4gZy52YWx1ZX1yZXR1cm4gaH0sZnVuY3Rpb24odCl7Yi5nZXRWYWx1ZSgpIT09dCYmKHQmJmUuaGFzT3duUHJvcGVydHkodCl8fCh0PWgpLChlLmhhc093blByb3BlcnR5KHQpfHx5JiYtMT09PWIuZ2V0VmFsdWUoKS5zZWFyY2goeSkpJiYoZVtiLmdldFZhbHVlKCldPWVbdF0sZGVsZXRlIGVbdF0pKX0pO2cub25ibHVyPWZ1bmN0aW9uKCl7aWYoZy5wcmV2aW91c1ZhbHVlIT09Zy52YWx1ZSl7Zm9yKHZhciB0PWcudmFsdWUscj0xO2cucHJldmlvdXNWYWx1ZSE9PXQmJmUuaGFzT3duUHJvcGVydHkodCk7KXQ9Zy52YWx1ZStcIihcIityK1wiKVwiLHIrKztyZXR1cm4gZy52YWx1ZT10LGIub25jaGFuZ2UoZy5wcmV2aW91c1ZhbHVlKSx2b2lkKGcucHJldmlvdXNWYWx1ZT1nLnZhbHVlKX19O3ZhciBQPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7UC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJidXR0b25cIiksUC5jbGFzc05hbWU9XCJyZW1vdmVcIixhcHBlbmRDaGlsZChQLGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwieFwiKSxzKSxQLm9uY2xpY2s9ZnVuY3Rpb24oKXtkZWxldGUgZVtnLnZhbHVlXSx0LmRlbGV0ZVJvdyhsLnJvd0luZGV4KSxnLnZhbHVlPW51bGwsYi5vbmNoYW5nZShnLnByZXZpb3VzVmFsdWUpfSxhcHBlbmRDaGlsZChtLGcscyksYXBwZW5kQ2hpbGQoZixQLHMpLGFwcGVuZENoaWxkKGMsbSxzKSxhcHBlbmRDaGlsZChjLGYscyksYXBwZW5kQ2hpbGQocCxjLHMpLGFwcGVuZENoaWxkKGQscCxzKSx2b2lkIDAhPT1pJiYoZy5wbGFjZWhvbGRlcj1pKSxhcHBlbmRDaGlsZChsLGQscyksYXBwZW5kQ2hpbGQobCx2LHMpLGFwcGVuZENoaWxkKHUsbCxzKSxhcHBlbmRDaGlsZCh0LHUscykscmVuZGVyKG51bGwsdixyLGUsYixhKSxuJiYoZy52YWx1ZT1uLGcub25ibHVyKCkpfXZhciBzPWdldFNjaGVtYUlkKHQpLHU9Z2V0U2NoZW1hKHMpLGw9bmV3IE9iamVjdDtyPyhuLmdldFZhbHVlKCl8fDA9PT1uLmdldFZhbHVlKCkpJiYocltuLmdldFZhbHVlKCldPWwpOmRhdGE9bDt2YXIgZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7ZC5jbGFzc05hbWU9XCJvYmplY3RcIjt2YXIgcD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7YXBwZW5kQ2hpbGQoZCxwLHUpO3ZhciBjPTA7aWYodS5oYXNPd25Qcm9wZXJ0eShcInByb3BlcnRpZXNcIikpe2M9dS5wcm9wZXJ0aWVzLmxlbmd0aDtmb3IodmFyIG0gaW4gdS5wcm9wZXJ0aWVzKXt2YXIgZj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIiksaD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7aC5jbGFzc05hbWU9XCJwcm9wLW5hbWVcIjt2YXIgdj10K1wiLlwiK20sZz1nZXRTY2hlbWEoZ2V0U2NoZW1hSWQodikpLHk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO3kuY2xhc3NOYW1lPVwicHJvcC12YWx1ZVwiLGFwcGVuZENoaWxkKHAsZixnKSxhcHBlbmRDaGlsZChmLGgsZyksYXBwZW5kQ2hpbGQoZix5LGcpO3ZhciBiPWkobSksUD1udWxsO2EmJihQPWFbbV0pLHJlbmRlcihoLHksdixsLGIsUCl9fXZhciBPPVtdO2lmKHUucGF0dGVyblByb3BlcnRpZXN8fHUuYWRkaXRpb25hbFByb3BlcnRpZXMpe3ZhciB3PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7aWYoYXBwZW5kQ2hpbGQodyxkLHUpLHUucGF0dGVyblByb3BlcnRpZXMpZm9yKHZhciB4IGluIHUucGF0dGVyblByb3BlcnRpZXMpe3ZhciBDPXUucGF0dGVyblByb3BlcnRpZXNbeF0sRT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO0UuY2xhc3NOYW1lPVwiYWRkLXBhdHRlcm4tZGl2XCI7dmFyIFM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtpZihTLnNldEF0dHJpYnV0ZShcInR5cGVcIixcImJ1dHRvblwiKSxTLnBhdHRlcm49eCxTLmlkPXQrXCJbXCIreCtcIl1cIixTLm9uY2xpY2s9ZnVuY3Rpb24oKXtvKGwsZCx0aGlzLmlkLHZvaWQgMCx2b2lkIDAsdGhpcy5wYXR0ZXJuKX0sKHUubWF4UHJvcGVydGllc3x8dS5taW5Qcm9wZXJ0aWVzKSYmKFMuZ2V0VmFsaWRhdGlvbkVycm9yPWZ1bmN0aW9uKCl7cmV0dXJuIHUubWluUHJvcGVydGllcyYmYytkLnJvd3MubGVuZ3RoPHUubWluUHJvcGVydGllcz9CcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLm1pblByb3BlcnRpZXMuZm9ybWF0KHUubWluUHJvcGVydGllcyk6dS5tYXhQcm9wZXJ0aWVzJiZjK2Qucm93cy5sZW5ndGg+dS5tYXhQcm9wZXJ0aWVzP0JydXR1c2luRm9ybXMubWVzc2FnZXMubWF4UHJvcGVydGllcy5mb3JtYXQodS5tYXhQcm9wZXJ0aWVzKTp2b2lkIDB9KSxDLmRlc2NyaXB0aW9uJiYoUy50aXRsZT1DLmRlc2NyaXB0aW9uKSxhcHBlbmRDaGlsZChTLGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiQWRkIFwiK3gpLHUpLGFwcGVuZENoaWxkKEUsUyx1KSxhKWZvcih2YXIgSSBpbiBhKWlmKCF1LnByb3BlcnRpZXN8fCF1LnByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoSSkpe3ZhciBOPVJlZ0V4cCh4KTstMSE9PUkuc2VhcmNoKE4pJiYtMT09PU8uaW5kZXhPZihJKSYmKG8obCxkLHQrXCJbXCIreCtcIl1cIixJLGFbSV0seCksTy5wdXNoKEkpKX1hcHBlbmRDaGlsZCh3LEUsdSl9aWYodS5hZGRpdGlvbmFsUHJvcGVydGllcyl7dmFyIEY9Z2V0U2NoZW1hKHUuYWRkaXRpb25hbFByb3BlcnRpZXMpLFM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtpZihTLnNldEF0dHJpYnV0ZShcInR5cGVcIixcImJ1dHRvblwiKSxTLm9uY2xpY2s9ZnVuY3Rpb24oKXtvKGwsZCx0K1wiWypdXCIsdm9pZCAwKX0sKHUubWF4UHJvcGVydGllc3x8dS5taW5Qcm9wZXJ0aWVzKSYmKFMuZ2V0VmFsaWRhdGlvbkVycm9yPWZ1bmN0aW9uKCl7cmV0dXJuIHUubWluUHJvcGVydGllcyYmYytkLnJvd3MubGVuZ3RoPHUubWluUHJvcGVydGllcz9CcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLm1pblByb3BlcnRpZXMuZm9ybWF0KHUubWluUHJvcGVydGllcyk6dS5tYXhQcm9wZXJ0aWVzJiZjK2Qucm93cy5sZW5ndGg+dS5tYXhQcm9wZXJ0aWVzP0JydXR1c2luRm9ybXMubWVzc2FnZXMubWF4UHJvcGVydGllcy5mb3JtYXQodS5tYXhQcm9wZXJ0aWVzKTp2b2lkIDB9KSxGLmRlc2NyaXB0aW9uJiYoUy50aXRsZT1GLmRlc2NyaXB0aW9uKSxhcHBlbmRDaGlsZChTLGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiQWRkXCIpLHUpLGFwcGVuZENoaWxkKHcsUyx1KSxhKWZvcih2YXIgSSBpbiBhKXUucHJvcGVydGllcyYmdS5wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KEkpfHwtMT09PU8uaW5kZXhPZihJKSYmbyhsLGQsdCsnW1wiJyttKydcIl0nLEksYVtJXSl9YXBwZW5kQ2hpbGQoZSx3LHUpfWVsc2UgYXBwZW5kQ2hpbGQoZSxkLHUpfSxyZW5kZXJlcnMuYXJyYXk9ZnVuY3Rpb24oZSx0LHIsbixhKXtmdW5jdGlvbiBpKGUsdCxyLG4sYSl7dmFyIGk9Z2V0U2NoZW1hSWQociksbz1nZXRTY2hlbWEoaSkscz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIiksdT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7dS5jbGFzc05hbWU9XCJpdGVtXCI7dmFyIGw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO2wuY2xhc3NOYW1lPVwiaXRlbS1pbmRleFwiO3ZhciBkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtkLmNsYXNzTmFtZT1cIml0ZW0tYWN0aW9uXCI7dmFyIHA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO3AuY2xhc3NOYW1lPVwiaXRlbS12YWx1ZVwiO3ZhciBjPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7Yy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJidXR0b25cIiksYy5jbGFzc05hbWU9XCJyZW1vdmVcIixhPT09ITAmJihjLmRpc2FibGVkPSEwKSxhcHBlbmRDaGlsZChjLGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwieFwiKSxvKTt2YXIgbT1mdW5jdGlvbigpe2Zvcih2YXIgZT0wO2U8dC5yb3dzLmxlbmd0aDtlKyspe3ZhciByPXQucm93c1tlXTtyLmNlbGxzWzBdLmlubmVySFRNTD1lKzF9fTtjLm9uY2xpY2s9ZnVuY3Rpb24oKXtlLnNwbGljZSh1LnJvd0luZGV4LDEpLHQuZGVsZXRlUm93KHUucm93SW5kZXgpLG0oKX0sYXBwZW5kQ2hpbGQoZCxjLG8pO3ZhciBmPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHQucm93cy5sZW5ndGgrMSk7YXBwZW5kQ2hpbGQobCxmLG8pLGFwcGVuZENoaWxkKHUsbCxvKSxhcHBlbmRDaGlsZCh1LGQsbyksYXBwZW5kQ2hpbGQodSxwLG8pLGFwcGVuZENoaWxkKHMsdSxvKSxhcHBlbmRDaGlsZCh0LHMsbyk7dmFyIGg9Y3JlYXRlUHJvcGVydHlQcm92aWRlcihmdW5jdGlvbigpe3JldHVybiB1LnJvd0luZGV4fSk7cmVuZGVyKG51bGwscCxyLGUsaCxuKX12YXIgbz1nZXRTY2hlbWFJZCh0KSxzPWdldFNjaGVtYShvKSx1PWdldFNjaGVtYShzLml0ZW1zKSxsPW5ldyBBcnJheTtyPyhuLmdldFZhbHVlKCl8fDA9PT1uLmdldFZhbHVlKCkpJiYocltuLmdldFZhbHVlKCldPWwpOmRhdGE9bCxuJiYobi5vbmNoYW5nZT1mdW5jdGlvbihlKXtkZWxldGUgcltlXSxyW24uZ2V0VmFsdWUoKV09bH0pO3ZhciBkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikscD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7cC5jbGFzc05hbWU9XCJhcnJheVwiLGFwcGVuZENoaWxkKGQscCxzKSxhcHBlbmRDaGlsZChlLGQscyk7dmFyIGM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtpZihzLnJlYWRPbmx5JiYoYy5kaXNhYmxlZD0hMCksYy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJidXR0b25cIiksYy5nZXRWYWxpZGF0aW9uRXJyb3I9ZnVuY3Rpb24oKXtpZihzLm1pbkl0ZW1zJiZzLm1pbkl0ZW1zPnAucm93cy5sZW5ndGgpcmV0dXJuIEJydXR1c2luRm9ybXMubWVzc2FnZXMubWluSXRlbXMuZm9ybWF0KHMubWluSXRlbXMpO2lmKHMubWF4SXRlbXMmJnMubWF4SXRlbXM8cC5yb3dzLmxlbmd0aClyZXR1cm4gQnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5tYXhJdGVtcy5mb3JtYXQocy5tYXhJdGVtcyk7aWYocy51bmlxdWVJdGVtcylmb3IodmFyIGU9MDtlPGwubGVuZ3RoO2UrKylmb3IodmFyIHQ9ZSsxO3Q8bC5sZW5ndGg7dCsrKWlmKEpTT04uc3RyaW5naWZ5KGxbZV0pPT09SlNPTi5zdHJpbmdpZnkobFt0XSkpcmV0dXJuIEJydXR1c2luRm9ybXMubWVzc2FnZXMudW5pcXVlSXRlbXN9LGMub25jbGljaz1mdW5jdGlvbigpe2kobCxwLHQrXCJbI11cIixudWxsKX0sdS5kZXNjcmlwdGlvbiYmKGMudGl0bGU9dS5kZXNjcmlwdGlvbiksYXBwZW5kQ2hpbGQoYyxkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLmFkZEl0ZW0pLHMpLGFwcGVuZENoaWxkKGQscCxzKSxhcHBlbmRDaGlsZChkLGMscyksYSYmYSBpbnN0YW5jZW9mIEFycmF5KWZvcih2YXIgbT0wO208YS5sZW5ndGg7bSsrKWkobCxwLHQrXCJbXCIrbStcIl1cIixhW21dLHMucmVhZE9ubHkpO2FwcGVuZENoaWxkKGUsZCxzKX0sb2JqLnJlbmRlcj1mdW5jdGlvbihlLHQpe2NvbnRhaW5lcj1lLGluaXRpYWxWYWx1ZT10O3ZhciByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO2lmKHIuY2xhc3NOYW1lPVwiYnJ1dHVzaW4tZm9ybVwiLHIub25zdWJtaXQ9ZnVuY3Rpb24oZSl7cmV0dXJuITF9LGNvbnRhaW5lcj9hcHBlbmRDaGlsZChjb250YWluZXIscik6YXBwZW5kQ2hpbGQoZG9jdW1lbnQuYm9keSxyKSxlcnJvcil7dmFyIG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpLGE9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZXJyb3IpO2FwcGVuZENoaWxkKG4sYSksbi5jbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCIsYXBwZW5kQ2hpbGQocixuKX1lbHNlIHJlbmRlcihudWxsLHIsXCIkXCIsbnVsbCxudWxsKTtkZXBlbmRlbmN5TWFwLmhhc093blByb3BlcnR5KFwiJFwiKSYmb25EZXBlbmRlbmN5Q2hhbmdlZChcIiRcIiksQnJ1dHVzaW5Gb3Jtcy5wb3N0UmVuZGVyJiZCcnV0dXNpbkZvcm1zLnBvc3RSZW5kZXIob2JqKX0sb2JqLmdldFJlbmRlcmluZ0NvbnRhaW5lcj1mdW5jdGlvbigpe3JldHVybiBjb250YWluZXJ9LG9iai52YWxpZGF0ZT1mdW5jdGlvbigpe3JldHVybiB2YWxpZGF0ZShjb250YWluZXIpfSxvYmouZ2V0RGF0YT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxyKXtpZihudWxsPT09cyYmKHM9U0NIRU1BX0FOWSksci4kcmVmJiYocj1nZXREZWZpbml0aW9uKHIuJHJlZikpLHQgaW5zdGFuY2VvZiBBcnJheSl7aWYoMD09PXQubGVuZ3RoKXJldHVybiBudWxsO2Zvcih2YXIgbj1uZXcgQXJyYXksYT0wO2E8dC5sZW5ndGg7YSsrKW5bYV09ZSh0W2FdLHIuaXRlbXMpO3JldHVybiBufWlmKFwiXCI9PT10KXJldHVybiBudWxsO2lmKHQgaW5zdGFuY2VvZiBPYmplY3Qpe3ZhciBuPW5ldyBPYmplY3QsaT0hMTtmb3IodmFyIG8gaW4gdClpZighby5zdGFydHNXaXRoKFwiJFwiKXx8IW8uZW5kc1dpdGgoXCIkXCIpKXt2YXIgcz1udWxsO2lmKHIuaGFzT3duUHJvcGVydHkoXCJwcm9wZXJ0aWVzXCIpJiZyLnByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkobykmJihzPXIucHJvcGVydGllc1tvXSksbnVsbD09PXMmJnIuaGFzT3duUHJvcGVydHkoXCJhZGRpdGlvbmFsUHJvcGVydGllc1wiKSYmXCJvYmplY3RcIj09dHlwZW9mIHIuYWRkaXRpb25hbFByb3BlcnRpZXMmJihzPXIuYWRkaXRpb25hbFByb3BlcnRpZXMpLG51bGw9PT1zJiZyLmhhc093blByb3BlcnR5KFwicGF0dGVyblByb3BlcnRpZXNcIikpZm9yKHZhciB1IGluIHIucGF0dGVyblByb3BlcnRpZXMpe3ZhciBsPVJlZ0V4cCh1KTtpZigtMSE9PW8uc2VhcmNoKGwpKXtzPXIucGF0dGVyblByb3BlcnRpZXNbdV07YnJlYWt9fXZhciBkPWUodFtvXSxzKTtudWxsIT09ZCYmKG5bb109ZCxpPSEwKX1yZXR1cm4gaXx8ci5yZXF1aXJlZD9uOm51bGx9cmV0dXJuIHR9cmV0dXJuIGNvbnRhaW5lcj9lKGRhdGEsc2NoZW1hKTpudWxsfSxCcnV0dXNpbkZvcm1zLmluc3RhbmNlc1tCcnV0dXNpbkZvcm1zLmluc3RhbmNlcy5sZW5ndGhdPW9iaixvYmp9LGJydXR1c2luW1wianNvbi1mb3Jtc1wiXT1CcnV0dXNpbkZvcm1zfSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9icnV0dXNpbi1qc29uLWZvcm1zL2Rpc3QvanMvYnJ1dHVzaW4tanNvbi1mb3Jtcy5taW4uanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmFzZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIhZnVuY3Rpb24oZil7aWYoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUpbW9kdWxlLmV4cG9ydHM9ZigpO2Vsc2UgaWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kKWRlZmluZShbXSxmKTtlbHNleyhcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzpcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsP2dsb2JhbDpcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZj9zZWxmOnRoaXMpLk1ldGVvckVtb2ppPWYoKX19KGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhufHxlKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c31mb3IodmFyIGk9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30oezE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpeyFmdW5jdGlvbihnbG9iYWwsZmFjdG9yeSl7aWYodm9pZCAwIT09ZXhwb3J0cylmYWN0b3J5KG1vZHVsZSk7ZWxzZXt2YXIgbW9kPXtleHBvcnRzOnt9fTtmYWN0b3J5KG1vZCksZ2xvYmFsLm1ldGVvckVtb2ppPW1vZC5leHBvcnRzfX0odGhpcyxmdW5jdGlvbihtb2R1bGUpe1widXNlIHN0cmljdFwiO3ZhciBfY3JlYXRlQ2xhc3M9ZnVuY3Rpb24oKXtmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCxwcm9wcyl7Zm9yKHZhciBpPTA7aTxwcm9wcy5sZW5ndGg7aSsrKXt2YXIgZGVzY3JpcHRvcj1wcm9wc1tpXTtkZXNjcmlwdG9yLmVudW1lcmFibGU9ZGVzY3JpcHRvci5lbnVtZXJhYmxlfHwhMSxkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBkZXNjcmlwdG9yJiYoZGVzY3JpcHRvci53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCxkZXNjcmlwdG9yLmtleSxkZXNjcmlwdG9yKX19cmV0dXJuIGZ1bmN0aW9uKENvbnN0cnVjdG9yLHByb3RvUHJvcHMsc3RhdGljUHJvcHMpe3JldHVybiBwcm90b1Byb3BzJiZkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSxwcm90b1Byb3BzKSxzdGF0aWNQcm9wcyYmZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3RvcixzdGF0aWNQcm9wcyksQ29uc3RydWN0b3J9fSgpLE1ldGVvckVtb2ppPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gTWV0ZW9yRW1vamkoKXshZnVuY3Rpb24oaW5zdGFuY2UsQ29uc3RydWN0b3Ipe2lmKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX0odGhpcyxNZXRlb3JFbW9qaSksdGhpcy5pbml0aWF0ZSgpfXJldHVybiBfY3JlYXRlQ2xhc3MoTWV0ZW9yRW1vamksW3trZXk6XCJpbml0aWF0ZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIF90aGlzPXRoaXM7ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbWV0ZW9yLWVtb2ppPVwidHJ1ZVwiXSwgW2RhdGEtbWV0ZW9yLWVtb2ppLWxhcmdlPVwidHJ1ZVwiXScpLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCl7X3RoaXMuZ2VuZXJhdGVFbGVtZW50cyhlbGVtZW50KX0pfX0se2tleTpcImdlbmVyYXRlRWxlbWVudHNcIix2YWx1ZTpmdW5jdGlvbihlbW9qaUlucHV0KXt2YXIgY2xpY2tMaW5rPWZ1bmN0aW9uKGV2ZW50KXt2YXIgY2FyZXRQb3M9ZW1vamlJbnB1dC5zZWxlY3Rpb25TdGFydDtlbW9qaUlucHV0LnZhbHVlPWVtb2ppSW5wdXQudmFsdWUuc3Vic3RyaW5nKDAsY2FyZXRQb3MpK1wiIFwiK2V2ZW50LnRhcmdldC5pbm5lckhUTUwrZW1vamlJbnB1dC52YWx1ZS5zdWJzdHJpbmcoY2FyZXRQb3MpLGVtb2ppUGlja2VyLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBhbmd1bGFyJiZhbmd1bGFyLmVsZW1lbnQoZW1vamlJbnB1dCkudHJpZ2dlckhhbmRsZXIoXCJjaGFuZ2VcIil9LGNsaWNrQ2F0ZWdvcnk9ZnVuY3Rpb24oZXZlbnQpe2Vtb2ppSW5wdXQuc2VsZWN0aW9uU3RhcnQ7ZW1vamlQaWNrZXIuc3R5bGUuZGlzcGxheT1cImJsb2NrXCI7Zm9yKHZhciBoaWRlVWxzPWVtb2ppUGlja2VyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ1bFwiKSxpPTEsbD1oaWRlVWxzLmxlbmd0aDtpPGw7aSsrKWhpZGVVbHNbaV0uc3R5bGUuZGlzcGxheT1cIm5vbmVcIjt2YXIgYmFja2dyb3VuZFRvZ2dsZT1lbW9qaVBpY2tlci5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhdGVnb3J5IGFcIik7Zm9yKGk9MCxsPWJhY2tncm91bmRUb2dnbGUubGVuZ3RoO2k8bDtpKyspYmFja2dyb3VuZFRvZ2dsZVtpXS5zdHlsZS5iYWNrZ3JvdW5kPVwibm9uZVwiO2Vtb2ppUGlja2VyLnF1ZXJ5U2VsZWN0b3IoXCIuXCIrZXZlbnQudGFyZ2V0LmlkKS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIixlbW9qaVBpY2tlci5xdWVyeVNlbGVjdG9yKFwiI1wiK2V2ZW50LnRhcmdldC5pZCkuc3R5bGUuYmFja2dyb3VuZD1cIiNjMmMyYzJcIn07ZW1vamlJbnB1dC5zdHlsZS53aWR0aD1cIjEwMCVcIjt2YXIgZW1vamlDb250YWluZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlbW9qaUNvbnRhaW5lci5zdHlsZS5wb3NpdGlvbj1cInJlbGF0aXZlXCIsZW1vamlJbnB1dC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChlbW9qaUNvbnRhaW5lcixlbW9qaUlucHV0KSxlbW9qaUNvbnRhaW5lci5hcHBlbmRDaGlsZChlbW9qaUlucHV0KTt2YXIgZW1vamlQaWNrZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlbW9qaVBpY2tlci50YWJJbmRleD0wLGVtb2ppSW5wdXQuaGFzQXR0cmlidXRlKFwiZGF0YS1tZXRlb3ItZW1vamktbGFyZ2VcIik/KGVtb2ppUGlja2VyLnN0eWxlLnpJbmRleD1cIjk5OVwiLGVtb2ppUGlja2VyLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiLGVtb2ppUGlja2VyLnN0eWxlLndpZHRoPVwiMTAwJVwiLGVtb2ppUGlja2VyLnN0eWxlLm1hcmdpbkJvdHRvbT1cIjE1cHhcIik6KGVtb2ppUGlja2VyLnN0eWxlLnBvc2l0aW9uPVwiYWJzb2x1dGVcIixlbW9qaVBpY2tlci5zdHlsZS5yaWdodD1cIjBweFwiLGVtb2ppUGlja2VyLnN0eWxlLnRvcD1cIjMwcHhcIixlbW9qaVBpY2tlci5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLGVtb2ppUGlja2VyLnN0eWxlLndpZHRoPVwiNDAwcHhcIiksZW1vamlQaWNrZXIuc3R5bGUuekluZGV4PVwiOTk5XCIsZW1vamlQaWNrZXIuc3R5bGUub3ZlcmZsb3c9XCJoaWRkZW5cIixlbW9qaVBpY2tlci5zdHlsZS5iYWNrZ3JvdW5kPVwiI2ZmZlwiLGVtb2ppUGlja2VyLnN0eWxlLmJvcmRlclJhZGl1cz1cIjVweFwiLGVtb2ppUGlja2VyLnN0eWxlLmJveFNoYWRvdz1cIjAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjIzKVwiLGVtb2ppUGlja2VyLnN0eWxlLmJvcmRlclJhZGl1cz1cIjJweDtcIixlbW9qaVBpY2tlci5zdHlsZS5tYXJnaW5Ub3A9XCI1cHhcIixlbW9qaVBpY2tlci5zdHlsZS5vdXRsaW5lPVwibm9uZVwiO3ZhciBlbW9qaVRyaWdnZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7ZW1vamlUcmlnZ2VyLnN0eWxlLnBvc2l0aW9uPVwiYWJzb2x1dGVcIixlbW9qaVRyaWdnZXIuc3R5bGUudG9wPVwiMTBweFwiLGVtb2ppVHJpZ2dlci5zdHlsZS5yaWdodD1cIjEwcHhcIixlbW9qaVRyaWdnZXIuc3R5bGUudGV4dERlY29yYXRpb249XCJub25lXCIsZW1vamlUcmlnZ2VyLnNldEF0dHJpYnV0ZShcImhyZWZcIixcImphdmFzY3JpcHQ6dm9pZCgwKVwiKSxlbW9qaVRyaWdnZXIuaW5uZXJIVE1MPSc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDEyIDE0XCI+PHBhdGggZD1cIk04LjkgOC40cS0wLjMgMC45LTEuMSAxLjV0LTEuOCAwLjYtMS44LTAuNi0xLjEtMS41cS0wLjEtMC4yIDAtMC40dDAuMy0wLjJxMC4yLTAuMSAwLjQgMHQwLjIgMC4zcTAuMiAwLjYgMC43IDF0MS4yIDAuNCAxLjItMC40IDAuNy0xcTAuMS0wLjIgMC4zLTAuM3QwLjQgMCAwLjMgMC4yIDAgMC40ek01IDVxMCAwLjQtMC4zIDAuN3QtMC43IDAuMy0wLjctMC4zLTAuMy0wLjcgMC4zLTAuNyAwLjctMC4zIDAuNyAwLjMgMC4zIDAuN3pNOSA1cTAgMC40LTAuMyAwLjd0LTAuNyAwLjMtMC43LTAuMy0wLjMtMC43IDAuMy0wLjcgMC43LTAuMyAwLjcgMC4zIDAuMyAwLjd6TTExIDdxMC0xLTAuNC0xLjl0LTEuMS0xLjYtMS42LTEuMS0xLjktMC40LTEuOSAwLjQtMS42IDEuMS0xLjEgMS42LTAuNCAxLjkgMC40IDEuOSAxLjEgMS42IDEuNiAxLjEgMS45IDAuNCAxLjktMC40IDEuNi0xLjEgMS4xLTEuNiAwLjQtMS45ek0xMiA3cTAgMS42LTAuOCAzdC0yLjIgMi4yLTMgMC44LTMtMC44LTIuMi0yLjItMC44LTMgMC44LTMgMi4yLTIuMiAzLTAuOCAzIDAuOCAyLjIgMi4yIDAuOCAzelwiLz48L3N2Zz4nLGVtb2ppVHJpZ2dlci5vbmNsaWNrPWZ1bmN0aW9uKCl7XCJub25lXCI9PT1lbW9qaVBpY2tlci5zdHlsZS5kaXNwbGF5P2Vtb2ppUGlja2VyLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiOlwiYmxvY2tcIj09PWVtb2ppUGlja2VyLnN0eWxlLmRpc3BsYXkmJihlbW9qaVBpY2tlci5zdHlsZS5kaXNwbGF5PVwibm9uZVwiKSxlbW9qaVBpY2tlci5mb2N1cygpfSxlbW9qaUlucHV0Lmhhc0F0dHJpYnV0ZShcImRhdGEtbWV0ZW9yLWVtb2ppLWxhcmdlXCIpfHxlbW9qaUNvbnRhaW5lci5hcHBlbmRDaGlsZChlbW9qaVRyaWdnZXIpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbihlKXtlbW9qaUlucHV0Lmhhc0F0dHJpYnV0ZShcImRhdGEtbWV0ZW9yLWVtb2ppLWxhcmdlXCIpfHxcImJsb2NrXCI9PT1lbW9qaVBpY2tlci5zdHlsZS5kaXNwbGF5JiYoZW1vamlQaWNrZXIuY29udGFpbnMoZS50YXJnZXQpfHxlbW9qaVRyaWdnZXIuY29udGFpbnMoZS50YXJnZXQpfHwoZW1vamlQaWNrZXIuc3R5bGUuZGlzcGxheT1cIm5vbmVcIikpfSk7dmFyIGZhY2VzQ2F0ZWdvcnk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO2ZhY2VzQ2F0ZWdvcnkuc3R5bGUucGFkZGluZz1cIjEwcHggMHB4XCIsZmFjZXNDYXRlZ29yeS5zdHlsZS5tYXJnaW49XCIwXCIsZmFjZXNDYXRlZ29yeS5zdHlsZS5saXN0U3R5bGU9XCJub25lXCIsZmFjZXNDYXRlZ29yeS5zdHlsZS50ZXh0QWxpZ249XCJsZWZ0XCIsZmFjZXNDYXRlZ29yeS5zdHlsZS5tYXJnaW5MZWZ0PVwiMyVcIixmYWNlc0NhdGVnb3J5LmNsYXNzTGlzdC5hZGQoXCJmYWNlc1wiKTt2YXIgYW5pbWFsc0NhdGVnb3J5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTthbmltYWxzQ2F0ZWdvcnkuc3R5bGUucGFkZGluZz1cIjEwcHggMHB4XCIsYW5pbWFsc0NhdGVnb3J5LnN0eWxlLm1hcmdpbj1cIjBcIixhbmltYWxzQ2F0ZWdvcnkuc3R5bGUubGlzdFN0eWxlPVwibm9uZVwiLGFuaW1hbHNDYXRlZ29yeS5zdHlsZS50ZXh0QWxpZ249XCJsZWZ0XCIsYW5pbWFsc0NhdGVnb3J5LnN0eWxlLm1hcmdpbkxlZnQ9XCIzJVwiLGFuaW1hbHNDYXRlZ29yeS5jbGFzc0xpc3QuYWRkKFwiYW5pbWFsc1wiKSxhbmltYWxzQ2F0ZWdvcnkuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjt2YXIgZm9vZENhdGVnb3J5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtmb29kQ2F0ZWdvcnkuc3R5bGUucGFkZGluZz1cIjEwcHggMHB4XCIsZm9vZENhdGVnb3J5LnN0eWxlLm1hcmdpbj1cIjBcIixmb29kQ2F0ZWdvcnkuc3R5bGUubGlzdFN0eWxlPVwibm9uZVwiLGZvb2RDYXRlZ29yeS5zdHlsZS50ZXh0QWxpZ249XCJsZWZ0XCIsZm9vZENhdGVnb3J5LnN0eWxlLm1hcmdpbkxlZnQ9XCIzJVwiLGZvb2RDYXRlZ29yeS5jbGFzc0xpc3QuYWRkKFwiZm9vZFwiKSxmb29kQ2F0ZWdvcnkuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjt2YXIgc3BvcnRDYXRlZ29yeT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7c3BvcnRDYXRlZ29yeS5zdHlsZS5wYWRkaW5nPVwiMTBweCAwcHhcIixzcG9ydENhdGVnb3J5LnN0eWxlLm1hcmdpbj1cIjBcIixzcG9ydENhdGVnb3J5LnN0eWxlLmxpc3RTdHlsZT1cIm5vbmVcIixzcG9ydENhdGVnb3J5LnN0eWxlLnRleHRBbGlnbj1cImxlZnRcIixzcG9ydENhdGVnb3J5LnN0eWxlLm1hcmdpbkxlZnQ9XCIzJVwiLHNwb3J0Q2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChcInNwb3J0XCIpLHNwb3J0Q2F0ZWdvcnkuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjt2YXIgdHJhbnNwb3J0Q2F0ZWdvcnk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO3RyYW5zcG9ydENhdGVnb3J5LnN0eWxlLnBhZGRpbmc9XCIxMHB4IDBweFwiLHRyYW5zcG9ydENhdGVnb3J5LnN0eWxlLm1hcmdpbj1cIjBcIix0cmFuc3BvcnRDYXRlZ29yeS5zdHlsZS5saXN0U3R5bGU9XCJub25lXCIsdHJhbnNwb3J0Q2F0ZWdvcnkuc3R5bGUudGV4dEFsaWduPVwibGVmdFwiLHRyYW5zcG9ydENhdGVnb3J5LnN0eWxlLm1hcmdpbkxlZnQ9XCIzJVwiLHRyYW5zcG9ydENhdGVnb3J5LmNsYXNzTGlzdC5hZGQoXCJ0cmFuc3BvcnRcIiksdHJhbnNwb3J0Q2F0ZWdvcnkuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjt2YXIgb2JqZWN0c0NhdGVnb3J5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtvYmplY3RzQ2F0ZWdvcnkuc3R5bGUucGFkZGluZz1cIjEwcHggMHB4XCIsb2JqZWN0c0NhdGVnb3J5LnN0eWxlLm1hcmdpbj1cIjBcIixvYmplY3RzQ2F0ZWdvcnkuc3R5bGUubGlzdFN0eWxlPVwibm9uZVwiLG9iamVjdHNDYXRlZ29yeS5zdHlsZS50ZXh0QWxpZ249XCJsZWZ0XCIsb2JqZWN0c0NhdGVnb3J5LnN0eWxlLm1hcmdpbkxlZnQ9XCIzJVwiLG9iamVjdHNDYXRlZ29yeS5jbGFzc0xpc3QuYWRkKFwib2JqZWN0c1wiKSxvYmplY3RzQ2F0ZWdvcnkuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjt2YXIgZW1vamlDYXRlZ29yeT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7ZW1vamlDYXRlZ29yeS5zdHlsZS5wYWRkaW5nPVwiMHB4XCIsZW1vamlDYXRlZ29yeS5zdHlsZS5tYXJnaW49XCIwXCIsZW1vamlDYXRlZ29yeS5zdHlsZS5kaXNwbGF5PVwidGFibGVcIixlbW9qaUNhdGVnb3J5LnN0eWxlLndpZHRoPVwiMTAwJVwiLGVtb2ppQ2F0ZWdvcnkuc3R5bGUuYmFja2dyb3VuZD1cIiNlZmYwZjFcIixlbW9qaUNhdGVnb3J5LnN0eWxlLmxpc3RTdHlsZT1cIm5vbmVcIixlbW9qaUNhdGVnb3J5LmNsYXNzTGlzdC5hZGQoXCJjYXRlZ29yeVwiKTt2YXIgZW1vamlDYXRlZ29yaWVzPW5ldyBBcnJheTtlbW9qaUNhdGVnb3JpZXMucHVzaCh7bmFtZTpcImZhY2VzXCIsc3ZnOic8c3ZnIGlkPVwiZmFjZXNcIiBkYXRhLW5hbWU9XCJMYXllciAxXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMTUwIDE1MFwiPjxwYXRoIGlkPVwiZmFjZXNcIiBkPVwiTTc0LjM0LDEyOC40OGE1My41LDUzLjUsMCwxLDEsMzcuODQtMTUuNjcsNTMuMTYsNTMuMTYsMCwwLDEtMzcuODQsMTUuNjdabTAtOTcuODlhNDQuNCw0NC40LDAsMSwwLDMxLjQsMTMsNDQuMDcsNDQuMDcsMCwwLDAtMzEuNC0xM1pcIi8+PHBhdGggaWQ9XCJmYWNlc1wiIGQ9XCJNNzQuMzUsMTA4QTMzLjA3LDMzLjA3LDAsMCwxLDQxLjI5LDc1YTIuMjgsMi4yOCwwLDAsMSwyLjI3LTIuMjhoMEEyLjI3LDIuMjcsMCwwLDEsNDUuODMsNzVhMjguNTIsMjguNTIsMCwwLDAsNTcsMCwyLjI3LDIuMjcsMCwwLDEsNC41NCwwQTMzLjA5LDMzLjA5LDAsMCwxLDc0LjM1LDEwOFpcIi8+PHBhdGggaWQ9XCJmYWNlc1wiIGQ9XCJNNTguODQsNjJhNi44MSw2LjgxLDAsMSwwLDYuODEsNi44MUE2LjgxLDYuODEsMCwwLDAsNTguODQsNjJaXCIvPjxwYXRoIGlkPVwiZmFjZXNcIiBkPVwiTTg5Ljg3LDYyYTYuODEsNi44MSwwLDEsMCw2LjgxLDYuODFBNi44Miw2LjgyLDAsMCwwLDg5Ljg3LDYyWlwiLz48L3N2Zz4nfSksZW1vamlDYXRlZ29yaWVzLnB1c2goe25hbWU6XCJhbmltYWxzXCIsc3ZnOic8c3ZnIGlkPVwiYW5pbWFsc1wiIGRhdGEtbmFtZT1cIkxheWVyIDFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAxNTAgMTUwXCI+PHBhdGggaWQ9XCJhbmltYWxzXCIgZD1cIk01OS45LDkxLjc1aDBjLTIyLjQ2LDAtNDEuODItMTkuMzQtNDQuMDktNDRBNTIuMSw1Mi4xLDAsMCwxLDE2LDM2LjhhNC41MSw0LjUxLDAsMCwxLDIuNjMtMy42MiwzOS43OSwzOS43OSwwLDAsMSwxMi43NC0zLjM3YzIzLjkyLTIuMTUsNDUuMzUsMTcuODMsNDcuNzQsNDMuODZhNTIuNzcsNTIuNzcsMCwwLDEtLjE1LDEwLjkzLDQuNTYsNC41NiwwLDAsMS0yLjY0LDMuNjIsMzkuNjcsMzkuNjcsMCwwLDEtMTIuNzMsMy4zNmMtMS4yMy4xMS0yLjQ1LjE3LTMuNjYuMTdaTTI0Ljc2LDQwLjQ5YTQxLjI5LDQxLjI5LDAsMCwwLC4wOSw2LjRDMjYuNyw2Nyw0Mi4wOSw4Mi42Niw1OS45LDgyLjY3aDBjLjk0LDAsMS44OCwwLDIuODMtLjE0YTMwLjM5LDMwLjM5LDAsMCwwLDcuNDEtMS42Miw0MS4xNCw0MS4xNCwwLDAsMC0uMTEtNi40QzY4LjA5LDUzLjM4LDUxLjExLDM3LjA4LDMyLjE3LDM4Ljg2YTMwLjc4LDMwLjc4LDAsMCwwLTcuNDEsMS42M1pcIi8+PHBhdGggaWQ9XCJhbmltYWxzXCIgZD1cIk0zNi42OCwxMjUuNjRhNC41Myw0LjUzLDAsMCwxLTQuMzMtMy4xNyw1My4zMiw1My4zMiwwLDAsMS0yLjI2LTExQTUwLjQyLDUwLjQyLDAsMCwxLDM5LjUxLDc2LjZjNy4zNS05LjkxLDE3Ljg0LTE2LDI5LjUtMTcsMS4xNi0uMTEsMi4zMy0uMTMsMy40Ny0uMTNhNC41NCw0LjU0LDAsMCwxLDQuMzMsMy4xNiw1MS41OSw1MS41OSwwLDAsMSwyLjI3LDExLjA4LDUwLjM5LDUwLjM5LDAsMCwxLTkuNDIsMzQuOGMtNy4zNSw5LjkxLTE3LjgzLDE2LTI5LjUsMTdhMTcuNjMsMTcuNjMsMCwwLDEtMy40OC4xMlpNNjkuMDksNjguNjlBMzIuNDEsMzIuNDEsMCwwLDAsNDYuOCw4MmE0Mi41Nyw0Mi41NywwLDAsMC02LjcxLDM0LjM4LDMyLjM4LDMyLjM4LDAsMCwwLDIyLjI4LTEzLjMyQTQxLjM1LDQxLjM1LDAsMCwwLDcwLDc0LjUxYTM5LjM4LDM5LjM4LDAsMCwwLS45NC01LjgyWlwiLz48cGF0aCBpZD1cImFuaW1hbHNcIiBkPVwiTTkwLjI3LDkxLjc1Yy0xLjIyLDAtMi40My0uMDYtMy42Ni0uMTdhMzkuNjcsMzkuNjcsMCwwLDEtMTIuNzMtMy4zNiw0LjU3LDQuNTcsMCwwLDEtMi42NC0zLjYxLDUzLjM4LDUzLjM4LDAsMCwxLS4xNy0xMC45M2MyLjQxLTI2LDIzLjctNDYuMDcsNDcuNzYtNDMuODdhMzkuNzQsMzkuNzQsMCwwLDEsMTIuNzMsMy4zNyw0LjU3LDQuNTcsMCwwLDEsMi42NCwzLjYyLDUzLjM1LDUzLjM1LDAsMCwxLC4xNiwxMC45MmMtMi4yOCwyNC42OS0yMS42NSw0NC00NC4wOSw0NFpNODAsODAuOTFhMzAuNTcsMzAuNTcsMCwwLDAsNy40MiwxLjYyYzE5LjA3LDEuNzgsMzUuOTItMTQuNTMsMzcuODctMzUuNjRhNDIuNTUsNDIuNTUsMCwwLDAsLjEtNi40QTMwLjg2LDMwLjg2LDAsMCwwLDExOCwzOC44NkM5OSwzNy4wNyw4Mi4wNiw1My4zOCw4MC4xMiw3NC41MWE0My45MSw0My45MSwwLDAsMC0uMSw2LjRaXCIvPjxwYXRoIGlkPVwiYW5pbWFsc1wiIGQ9XCJNMTEzLjQ5LDEyNS42NGgwYy0xLjE2LDAtMi4zLDAtMy40Ni0uMTItMjMuOS0yLjIxLTQxLjM2LTI1LjQ3LTM4Ljk0LTUxLjg1QTUzLjUyLDUzLjUyLDAsMCwxLDczLjM0LDYyLjZhNC41NSw0LjU1LDAsMCwxLDQuMzMtMy4xNmMxLjE2LDAsMi4zNCwwLDMuNTEuMTMsMTEuNjQsMS4wNywyMi4xMSw3LjEyLDI5LjQ4LDE3YTUwLjUxLDUwLjUxLDAsMCwxLDkuNDIsMzQuODEsNTMuNTEsNTMuNTEsMCwwLDEtMi4yNiwxMSw0LjU0LDQuNTQsMCwwLDEtNC4zMywzLjE5Wk04MS4wOCw2OC42OWE0Mi41Myw0Mi41MywwLDAsMC0xLDUuODJjLTEuOTQsMjEuMSwxMS40NSwzOS43MSwyOS45NSw0MS44OEE0Mi4zOCw0Mi4zOCwwLDAsMCwxMDMuMzYsODIsMzIuNDIsMzIuNDIsMCwwLDAsODEuMDgsNjguNjlaXCIvPjxwYXRoIGlkPVwiYW5pbWFsc1wiIGQ9XCJNNzUuMDgsNDUuNDVhNy44Myw3LjgzLDAsMSwwLDcuODMsNy44Myw3LjgzLDcuODMsMCwwLDAtNy44My03LjgzWlwiLz48cGF0aCBpZD1cImFuaW1hbHNcIiBkPVwiTTc2LjI5LDUxLjg5YTIuMjYsMi4yNiwwLDAsMS0yLjE0LTNBNDYsNDYsMCwwLDEsOTIuODIsMjUuMzRhMi4yNywyLjI3LDAsMSwxLDIuNCwzLjg2QTQxLjQsNDEuNCwwLDAsMCw3OC40Myw1MC4zOWEyLjI4LDIuMjgsMCwwLDEtMi4xNCwxLjVaXCIvPjxwYXRoIGlkPVwiYW5pbWFsc1wiIGQ9XCJNNzMuODcsNTEuODlhMi4yOCwyLjI4LDAsMCwxLTIuMTQtMS41QTQxLjM1LDQxLjM1LDAsMCwwLDU0Ljk0LDI5LjJhMi4yNywyLjI3LDAsMCwxLDIuMzktMy44NkE0Niw0NiwwLDAsMSw3Niw0OC44NWEyLjI4LDIuMjgsMCwwLDEtMS4zNywyLjkxLDIuMzEsMi4zMSwwLDAsMS0uNzcuMTNaXCIvPjwvc3ZnPid9KSxlbW9qaUNhdGVnb3JpZXMucHVzaCh7bmFtZTpcImZvb2RcIixzdmc6JzxzdmcgaWQ9XCJmb29kXCIgZGF0YS1uYW1lPVwiTGF5ZXIgMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDE1MCAxNTBcIj48cGF0aCBpZD1cImZvb2RcIiBkPVwiTTEwNCwyMC43NmguMTVjMTUuODMuNTIsMjQuMDgsMjEuNDgsMjQuMDcsMzIuNTYuMjYsMTIuNDItMTAuNzIsMjMuNTUtMjQsMjQuMjFhMy41MywzLjUzLDAsMCwxLS40NiwwYy0xMy4yNS0uNjYtMjQuMjMtMTEuOC0yNC0yNC4zLDAtMTEsOC4yNi0zMS45NSwyNC4wNy0zMi40N1ptMCw0Ny42OWM4LjI1LS41NCwxNS4zLTcuNTEsMTUuMTQtMTUsMC04LjEyLTYuMjItMjMuMS0xNS4xNC0yMy41Ny04LjkuNDYtMTUuMTQsMTUuNDUtMTUuMTQsMjMuNDgtLjE0LDcuNjEsNi45LDE0LjU5LDE1LjE0LDE1LjEzWlwiLz48cGF0aCBpZD1cImZvb2RcIiBkPVwiTTk3LjE5LDY5LjIxaC4xNGE0LjUzLDQuNTMsMCwwLDEsNC40LDQuNjhsLTEuNDgsNDYuOTJhMS41OSwxLjU5LDAsMCwwLC41LDEuMDYsNC42LDQuNiwwLDAsMCwzLjI1LDEuMTloMGE0LjU3LDQuNTcsMCwwLDAsMy4yNi0xLjIsMS41MywxLjUzLDAsMCwwLC40OS0xbC0xLjQ4LTQ2Ljk1YTQuNTQsNC41NCwwLDEsMSw5LjA4LS4yOGwxLjQ3LDQ2LjkxYTEwLjQyLDEwLjQyLDAsMCwxLTMsNy42NSwxMy42NSwxMy42NSwwLDAsMS05LjgxLDRoMGExMy41OCwxMy41OCwwLDAsMS05Ljc5LTQsMTAuNDIsMTAuNDIsMCwwLDEtMy03LjY3bDEuNDgtNDYuODlhNC41Myw0LjUzLDAsMCwxLDQuNTMtNC40WlwiLz48cGF0aCBpZD1cImZvb2RcIiBkPVwiTTQxLjg0LDY5LjIxSDQyYTQuNTMsNC41MywwLDAsMSw0LjQsNC42OEw0NC45LDEyMC44MWExLjU3LDEuNTcsMCwwLDAsLjUsMS4wNiw0LjYsNC42LDAsMCwwLDMuMjUsMS4xOWgwYTQuNTEsNC41MSwwLDAsMCwzLjI0LTEuMTksMS40OCwxLjQ4LDAsMCwwLC41LTFMNTAuOTMsNzMuODlhNC41Myw0LjUzLDAsMCwxLDQuMzktNC42OEE0LjQsNC40LDAsMCwxLDYwLDczLjYxbDEuNDgsNDYuOTFhMTAuNDksMTAuNDksMCwwLDEtMyw3LjY2LDEzLjU3LDEzLjU3LDAsMCwxLTkuNzgsNGgwYTEzLjU5LDEzLjU5LDAsMCwxLTkuNzgtNCwxMC40OCwxMC40OCwwLDAsMS0zLTcuNjdsMS40OC00Ni45YTQuNTQsNC41NCwwLDAsMSw0LjU0LTQuNFpcIi8+PHBhdGggaWQ9XCJmb29kXCIgZD1cIk0yOC41OSwyMC43NmE0LjU0LDQuNTQsMCwwLDEsNC41NCw0LjU0VjUxYTE1LjUyLDE1LjUyLDAsMCwwLDMxLDBWMjUuM2E0LjU1LDQuNTUsMCwwLDEsOS4wOSwwVjUxYTI0LjYxLDI0LjYxLDAsMSwxLTQ5LjIxLDBWMjUuM2E0LjU0LDQuNTQsMCwwLDEsNC41NC00LjU0WlwiLz48cGF0aCBpZD1cImZvb2RcIiBkPVwiTTU1LjM0LDIwLjc2YTQuNTQsNC41NCwwLDAsMSw0LjU0LDQuNTR2MTlhNC41NCw0LjU0LDAsMSwxLTkuMDgsMHYtMTlhNC41NCw0LjU0LDAsMCwxLDQuNTQtNC41NFpcIi8+PHBhdGggaWQ9XCJmb29kXCIgZD1cIk00MiwyMC43NmE0LjU0LDQuNTQsMCwwLDEsNC41NCw0LjU0djE5YTQuNTQsNC41NCwwLDEsMS05LjA4LDB2LTE5QTQuNTQsNC41NCwwLDAsMSw0MiwyMC43NlpcIi8+PC9zdmc+J30pLGVtb2ppQ2F0ZWdvcmllcy5wdXNoKHtuYW1lOlwic3BvcnRcIixzdmc6JzxzdmcgaWQ9XCJzcG9ydFwiIGRhdGEtbmFtZT1cIkxheWVyIDFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAxNTAgMTUwXCI+PHBhdGggaWQ9XCJzcG9ydFwiIGQ9XCJNNzUuMzUsMTMwLjI0YTUzLjQ5LDUzLjQ5LDAsMSwxLDUzLjQ4LTUzLjQ5LDUzLjU1LDUzLjU1LDAsMCwxLTUzLjQ4LDUzLjQ5Wm0wLTk3Ljg5YTQ0LjQxLDQ0LjQxLDAsMSwwLDQ0LjQsNDQuNCw0NC4xLDQ0LjEsMCwwLDAtNDQuNC00NC40WlwiLz48cGF0aCBpZD1cInNwb3J0XCIgZD1cIk0xMTkuMjQsODQuMDhBNTEuMjksNTEuMjksMCwwLDEsNjgsMzIuODZhNDkuNDQsNDkuNDQsMCwwLDEsLjI2LTUsMi4yNiwyLjI2LDAsMCwxLDItMmMxLjY2LS4xNiwzLjM0LS4yNSw1LS4yNWE1MS4yNiw1MS4yNiwwLDAsMSw1MS4yMSw1MS4yMWMwLDEuNzEtLjA5LDMuMzgtLjI1LDVhMi4yOCwyLjI4LDAsMCwxLTIsMmMtMS42NS4xNi0zLjMzLjI1LTUsLjI1Wk03Mi42NCwzMC4xNmMtLjA2LjktLjA4LDEuNzktLjA4LDIuN2E0Ni43Myw0Ni43MywwLDAsMCw0Ni42OCw0Ni42OHExLjM3LDAsMi43LS4wOWMuMDYtLjg5LjA4LTEuNzkuMDgtMi43QTQ2LjcyLDQ2LjcyLDAsMCwwLDc1LjM1LDMwLjA4Yy0uOTEsMC0xLjgyLDAtMi43MS4wOFpcIi8+PHBhdGggaWQ9XCJzcG9ydFwiIGQ9XCJNNzUuMzUsMTI4QTUxLjI4LDUxLjI4LDAsMCwxLDI0LjEyLDc2Ljc2YzAtMS43LjEtMy4zOC4yNS01YTIuMjksMi4yOSwwLDAsMSwyLTJjMS42Ni0uMTYsMy4zMy0uMjUsNS4wNS0uMjVhNTEuMjcsNTEuMjcsMCwwLDEsNTEuMjEsNTEuMjJjMCwxLjY5LS4wOSwzLjM3LS4yNSw1YTIuMjcsMi4yNywwLDAsMS0yLDJjLTEuNjYuMTYtMy4zMi4yNS01LC4yNVpNMjguNzUsNzQuMDVjLS4wNS45LS4wOSwxLjgtLjA5LDIuNzFhNDYuNzQsNDYuNzQsMCwwLDAsNDYuNjksNDYuNjdjLjkxLDAsMS44LDAsMi43LS4wOCwwLS45LjA4LTEuOC4wOC0yLjdBNDYuNzMsNDYuNzMsMCwwLDAsMzEuNDYsNzRjLS45MSwwLTEuODEsMC0yLjcxLjA4WlwiLz48cG9seWdvbiBpZD1cInNwb3J0XCIgcG9pbnRzPVwiNDIuNjkgMTEyLjYxIDM5LjQ4IDEwOS40IDEwOCA0MC44OCAxMTEuMjEgNDQuMSA0Mi42OSAxMTIuNjEgNDIuNjkgMTEyLjYxXCIvPjwvc3ZnPid9KSxlbW9qaUNhdGVnb3JpZXMucHVzaCh7bmFtZTpcInRyYW5zcG9ydFwiLHN2ZzonPHN2ZyBpZD1cInRyYW5zcG9ydFwiIGRhdGEtbmFtZT1cIkxheWVyIDFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAxNTAgMTUwXCI+PHBhdGggaWQ9XCJ0cmFuc3BvcnRcIiBkPVwiTTEyMC43LDExNkgzMWE0LjU1LDQuNTUsMCwwLDEtNC41NC00LjU1VjU0LjI4QTMxLjgyLDMxLjgyLDAsMCwxLDU4LjI1LDIyLjQ5aDM1LjJhMzEuODMsMzEuODMsMCwwLDEsMzEuOCwzMS43OXY1Ny4xNUE0LjU1LDQuNTUsMCwwLDEsMTIwLjcsMTE2Wm0tODUuMTYtOS4wOWg4MC42MlY1NC4yOEEyMi43NCwyMi43NCwwLDAsMCw5My40NSwzMS41N0g1OC4yNUEyMi43NCwyMi43NCwwLDAsMCwzNS41NCw1NC4yOHY1Mi42MVpcIi8+PHBhdGggaWQ9XCJ0cmFuc3BvcnRcIiBkPVwiTTQ5LjM1LDEyOS4yM2MtOC41MywwLTEzLjYyLTIuNzctMTMuNjItNy40MVYxMTUuNmE0LjU0LDQuNTQsMCwxLDEsOS4wOCwwdjQuMDZhMjEuMzIsMjEuMzIsMCwwLDAsOS4wOSwwVjExNS42YTQuNTQsNC41NCwwLDAsMSw5LjA4LDB2Ni4yMmMwLDQuNjQtNS4wOSw3LjQxLTEzLjYzLDcuNDFaXCIvPjxwYXRoIGlkPVwidHJhbnNwb3J0XCIgZD1cIk0xMDIuMzQsMTI5LjIzYy04LjUzLDAtMTMuNjItMi43Ny0xMy42Mi03LjQxVjExNS42YTQuNTQsNC41NCwwLDAsMSw5LjA4LDB2NC4wNmEyMS4yOCwyMS4yOCwwLDAsMCw5LjA4LDBWMTE1LjZhNC41NSw0LjU1LDAsMCwxLDkuMDksMHY2LjIyYzAsNC42NC01LjA5LDcuNDEtMTMuNjMsNy40MVpcIi8+PHBhdGggaWQ9XCJ0cmFuc3BvcnRcIiBkPVwiTTk3LjgxLDQ0LjgzSDUzLjlhNC41NSw0LjU1LDAsMSwxLDAtOS4wOUg5Ny44MWE0LjU1LDQuNTUsMCwwLDEsMCw5LjA5WlwiLz48cGF0aCBpZD1cInRyYW5zcG9ydFwiIGQ9XCJNNTQuMjgsODQuMkE2LjgsNi44LDAsMSwwLDYxLjA3LDkxYTYuOCw2LjgsMCwwLDAtNi43OS02LjhaXCIvPjxwYXRoIGlkPVwidHJhbnNwb3J0XCIgZD1cIk05Ny40Myw4NC4yYTYuOCw2LjgsMCwxLDAsNi43OSw2LjgsNi44LDYuOCwwLDAsMC02Ljc5LTYuOFpcIi8+PHBhdGggaWQ9XCJ0cmFuc3BvcnRcIiBkPVwiTTEwNy4wOCw4MUg0NC42M2E2LjgyLDYuODIsMCwwLDEtNi44Mi02LjgyVjU0LjI4YTYuODIsNi44MiwwLDAsMSw2LjgyLTYuODFoNjIuNDVhNi44Miw2LjgyLDAsMCwxLDYuODEsNi44MVY3NC4xNUE2LjgzLDYuODMsMCwwLDEsMTA3LjA4LDgxWk00NC42Myw1MmEyLjI4LDIuMjgsMCwwLDAtMi4yOCwyLjI3Vjc0LjE1YTIuMjgsMi4yOCwwLDAsMCwyLjI4LDIuMjdoNjIuNDVhMi4yNywyLjI3LDAsMCwwLDIuMjctMi4yN1Y1NC4yOEEyLjI3LDIuMjcsMCwwLDAsMTA3LjA4LDUyWlwiLz48L3N2Zz4nfSksZW1vamlDYXRlZ29yaWVzLnB1c2goe25hbWU6XCJvYmplY3RzXCIsc3ZnOic8c3ZnIGlkPVwib2JqZWN0c1wiIGRhdGEtbmFtZT1cIkxheWVyIDFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAxNTAgMTUwXCI+PHBhdGggaWQ9XCJvYmplY3RzXCIgZD1cIk0xMDcuNzgsMTI5YTQuNTUsNC41NSwwLDAsMS0yLjY3LS44N2wtMzAtMjEuNzktMzAsMjEuNzlhNC41Myw0LjUzLDAsMCwxLTUuMzQsMCw0LjU4LDQuNTgsMCwwLDEtMS42NS01LjA4TDQ5LjU5LDg3LjgyLDE5LjYsNjZhNC41NCw0LjU0LDAsMCwxLDIuNjctOC4yMkg1OS4zNEw3MC44LDIyLjU1YTQuNTUsNC41NSwwLDAsMSw4LjY0LDBMOTAuODksNTcuODFIMTI4QTQuNTQsNC41NCwwLDAsMSwxMzAuNjMsNjZsLTMwLDIxLjc5LDExLjQ2LDM1LjI1YTQuNTUsNC41NSwwLDAsMS00LjMyLDZaTTc1LjEyLDk2LjJhNC41Myw0LjUzLDAsMCwxLDIuNjcuODdsMjEuMzUsMTUuNTFMOTEsODcuNDlhNC41NSw0LjU1LDAsMCwxLDEuNjUtNS4wOEwxMTQsNjYuODlIODcuNTlhNC41NCw0LjU0LDAsMCwxLTQuMzItMy4xM2wtOC4xNS0yNS4xTDY3LDYzLjc2YTQuNTMsNC41MywwLDAsMS00LjMyLDMuMTNIMzYuMjVMNTcuNjEsODIuNDFhNC41NCw0LjU0LDAsMCwxLDEuNjUsNS4wOGwtOC4xNywyNS4wOUw3Mi40NSw5Ny4wN2E0LjUzLDQuNTMsMCwwLDEsMi42Ny0uODdaXCIvPjwvc3ZnPid9KTtlbW9qaUNhdGVnb3JpZXMubWFwKGZ1bmN0aW9uKGl0ZW0pe3ZhciBlbW9qaUxpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7ZW1vamlMaW5rLnN0eWxlLnRleHREZWNvcmF0aW9uPVwibm9uZVwiLGVtb2ppTGluay5zdHlsZS5wYWRkaW5nPVwiNXB4XCIsZW1vamlMaW5rLnN0eWxlLnBvc2l0aW9uPVwiaW5pdGlhbFwiLGVtb2ppTGluay5zdHlsZS5mb250U2l6ZT1cIjI0cHhcIixlbW9qaUxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLFwiamF2YXNjcmlwdDp2b2lkKDApXCIpLGVtb2ppTGluay5zdHlsZS5kaXNwbGF5PVwidGFibGUtY2VsbFwiLGVtb2ppTGluay5zdHlsZS50ZXh0QWxpZ249XCJjZW50ZXJcIixlbW9qaUxpbmsuaWQ9U3RyaW5nKGl0ZW0ubmFtZSksXCJmYWNlc1wiPT1TdHJpbmcoaXRlbS5uYW1lKSYmKGVtb2ppTGluay5zdHlsZS5iYWNrZ3JvdW5kPVwiI2MyYzJjMlwiKSxlbW9qaUxpbmsuaW5uZXJIVE1MPVN0cmluZyhpdGVtLnN2ZyksZW1vamlMaW5rLm9ubW91c2Vkb3duPWNsaWNrQ2F0ZWdvcnksZW1vamlDYXRlZ29yeS5hcHBlbmRDaGlsZChlbW9qaUxpbmspfSksWzEyODUxMywxMjg1MTQsMTI4NTE1LDEyODUxNiwxMjg1MTcsMTI4NTE4LDEyODUyMSwxMjg1MjIsMTI4NTIzLDEyODUyNCwxMjg1MjUsMTI4NTI3LDEyODUzMCwxMjg1MzEsMTI4NTMyLDEyODUzNCwxMjg1MzYsMTI4NTM4LDEyODU0MCwxMjg1NDEsMTI4NTQyLDEyODU0NCwxMjg1NDUsMTI4NTQ2LDEyODU0NywxMjg1NDgsMTI4NTQ5LDEyODU1MiwxMjg1NTMsMTI4NTU0LDEyODU1NSwxMjg1NTcsMTI4NTYwLDEyODU2MSwxMjg1NjIsMTI4NTYzLDEyODU2NSwxMjg1NjddLm1hcChmdW5jdGlvbihpdGVtKXt2YXIgZW1vamlMaW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2Vtb2ppTGluay5zdHlsZS50ZXh0RGVjb3JhdGlvbj1cIm5vbmVcIixlbW9qaUxpbmsuc3R5bGUubWFyZ2luPVwiNXB4XCIsZW1vamlMaW5rLnN0eWxlLnBvc2l0aW9uPVwiaW5pdGlhbFwiLGVtb2ppTGluay5zdHlsZS5mb250U2l6ZT1cIjI0cHhcIixlbW9qaUxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLFwiamF2YXNjcmlwdDp2b2lkKDApXCIpLGVtb2ppTGluay5pbm5lckhUTUw9U3RyaW5nLmZyb21Db2RlUG9pbnQoaXRlbSksZW1vamlMaW5rLm9ubW91c2Vkb3duPWNsaWNrTGluayxmYWNlc0NhdGVnb3J5LmFwcGVuZENoaWxkKGVtb2ppTGluayl9KSxbMTI4MDEyLDEyODAxMywxMjgwMTQsMTI4MDE3LDEyODAxOCwxMjgwMjAsMTI4MDIzLDEyODAyNCwxMjgwMjUsMTI4MDI2LDEyODAyNywxMjgwMjgsMTI4MDI5LDEyODAzMCwxMjgwMzEsMTI4MDMyLDEyODAzMywxMjgwMzQsMTI4MDM1LDEyODAzNiwxMjgwMzcsMTI4MDM4LDEyODAzOSwxMjgwNDAsMTI4MDQxLDEyODA0MywxMjgwNDQsMTI4MDQ1LDEyODA0NiwxMjgwNDcsMTI4MDQ4LDEyODA0OSwxMjgwNTAsMTI4MDUxLDEyODA1MiwxMjgwNTMsMTI4MDU0LDEyODA1NSwxMjgwNTYsMTI4MDU3LDEyODA1OCwxMjgwNTksMTI4MDYwXS5tYXAoZnVuY3Rpb24oaXRlbSl7dmFyIGVtb2ppTGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtlbW9qaUxpbmsuc3R5bGUudGV4dERlY29yYXRpb249XCJub25lXCIsZW1vamlMaW5rLnN0eWxlLm1hcmdpbj1cIjVweFwiLGVtb2ppTGluay5zdHlsZS5wb3NpdGlvbj1cImluaXRpYWxcIixlbW9qaUxpbmsuc3R5bGUuZm9udFNpemU9XCIyNHB4XCIsZW1vamlMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIixcImphdmFzY3JpcHQ6dm9pZCgwKVwiKSxlbW9qaUxpbmsuaW5uZXJIVE1MPVN0cmluZy5mcm9tQ29kZVBvaW50KGl0ZW0pLGVtb2ppTGluay5vbm1vdXNlZG93bj1jbGlja0xpbmssYW5pbWFsc0NhdGVnb3J5LmFwcGVuZENoaWxkKGVtb2ppTGluayl9KSxbMTI3ODEzLDEyNzgxNCwxMjc4MTUsMTI3ODE2LDEyNzgxNywxMjc4MTgsMTI3ODIwLDEyNzgyMSwxMjc4MjIsMTI3ODIzLDEyNzgyNSwxMjc4MjYsMTI3ODI3LDEyNzgyOCwxMjc4MjksMTI3ODMwLDEyNzgzMSwxMjc4MzIsMTI3ODM2LDEyNzgzNywxMjc4MzgsMTI3ODM5LDEyNzg0MCwxMjc4NDEsMTI3ODQyLDEyNzg0MywxMjc4NDQsMTI3ODQ2LDEyNzg0OCwxMjc4NDksMTI3ODUwLDEyNzg1MSwxMjc4NTIsMTI3ODUzLDEyNzg1NiwxMjc4NTgsMTI3ODU5LDEyNzg2MCwxMjc4NjMsMTI3ODY0LDEyNzg2N10ubWFwKGZ1bmN0aW9uKGl0ZW0pe3ZhciBlbW9qaUxpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7ZW1vamlMaW5rLnN0eWxlLnRleHREZWNvcmF0aW9uPVwibm9uZVwiLGVtb2ppTGluay5zdHlsZS5tYXJnaW49XCI1cHhcIixlbW9qaUxpbmsuc3R5bGUucG9zaXRpb249XCJpbml0aWFsXCIsZW1vamlMaW5rLnN0eWxlLmZvbnRTaXplPVwiMjRweFwiLGVtb2ppTGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsXCJqYXZhc2NyaXB0OnZvaWQoMClcIiksZW1vamlMaW5rLmlubmVySFRNTD1TdHJpbmcuZnJvbUNvZGVQb2ludChpdGVtKSxlbW9qaUxpbmsub25tb3VzZWRvd249Y2xpY2tMaW5rLGZvb2RDYXRlZ29yeS5hcHBlbmRDaGlsZChlbW9qaUxpbmspfSksWzEyNzkyMSwxMjc5MjMsMTI3OTM0LDEyNzkzNSwxMjc5MzYsMTI3OTM3LDEyNzkzOCwxMjc5MzksMTI3OTQwLDEyNzk0MiwxMjc5NDQsMTI3OTQ2LDEyODY3NSwxMjg2OTIsMTI4NjkzLDk5MTcsOTkxOCw5OTc4LDEyNzkwNywxMjc5MTksOTk3MV0ubWFwKGZ1bmN0aW9uKGl0ZW0pe3ZhciBlbW9qaUxpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7ZW1vamlMaW5rLnN0eWxlLnRleHREZWNvcmF0aW9uPVwibm9uZVwiLGVtb2ppTGluay5zdHlsZS5tYXJnaW49XCI1cHhcIixlbW9qaUxpbmsuc3R5bGUucG9zaXRpb249XCJpbml0aWFsXCIsZW1vamlMaW5rLnN0eWxlLmZvbnRTaXplPVwiMjRweFwiLGVtb2ppTGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsXCJqYXZhc2NyaXB0OnZvaWQoMClcIiksZW1vamlMaW5rLmlubmVySFRNTD1TdHJpbmcuZnJvbUNvZGVQb2ludChpdGVtKSxlbW9qaUxpbmsub25tb3VzZWRvd249Y2xpY2tMaW5rLHNwb3J0Q2F0ZWdvcnkuYXBwZW5kQ2hpbGQoZW1vamlMaW5rKX0pLFsxMjg2NDEsMTI4NjQyLDEyODY0NiwxMjg2NDgsMTI4NjUwLDEyODY1MywxMjg2NTQsMTI4NjU2LDEyODY2MCwxMjg2NjIsMTI4NjY0LDEyODY2NywxMjg2NjgsMTI4NjY5LDEyODY3MCwxMjg2NzEsMTI4NjcyLDEyODY3MywxMjg2NDAsMTI4NjQzLDEyODY0NCwxMjg2NDUsMTI4NjQ3LDEyODY0OSwxMjg2NTIsMTI4NjU3LDEyODY1OCwxMjg2NTksMTI4NjYxLDEyODY2MywxMjg2NjUsMTI4NjY2LDEyODY3NCwxMjg2NzYsMTI4NjkwXS5tYXAoZnVuY3Rpb24oaXRlbSl7dmFyIGVtb2ppTGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtlbW9qaUxpbmsuc3R5bGUudGV4dERlY29yYXRpb249XCJub25lXCIsZW1vamlMaW5rLnN0eWxlLm1hcmdpbj1cIjVweFwiLGVtb2ppTGluay5zdHlsZS5wb3NpdGlvbj1cImluaXRpYWxcIixlbW9qaUxpbmsuc3R5bGUuZm9udFNpemU9XCIyNHB4XCIsZW1vamlMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIixcImphdmFzY3JpcHQ6dm9pZCgwKVwiKSxlbW9qaUxpbmsuaW5uZXJIVE1MPVN0cmluZy5mcm9tQ29kZVBvaW50KGl0ZW0pLGVtb2ppTGluay5vbm1vdXNlZG93bj1jbGlja0xpbmssdHJhbnNwb3J0Q2F0ZWdvcnkuYXBwZW5kQ2hpbGQoZW1vamlMaW5rKX0pLFsxMjc4OTAsMTI3ODgwLDEyNzg4MSwxMjc4ODcsMTI3ODkxLDEyNzkwNSwxMjc5MDYsMTI3OTA4LDEyNzkwOSwxMjc5MTEsMTI3OTEyLDEyNzkxNSwxMjc5MTYsMTI3OTE4LDEyNzkxOSwxMjc5MjYsMTI3OTI3LDEyNzkyOCwxMjc5MjksMTI3OTMwLDEyNzkzMSwxMjc5MzIsMTI3OTY4LDEyNzk3MywxMjc5NzgsMTI4MTQ3LDEyODE0OCwxMjgxNDksMTI4MTUwLDEyODE1MSwxMjgxNTIsMTI4MTg3LDEyODE4NiwxMjgxOTcsMTI4MjEzLDEyODI0N10ubWFwKGZ1bmN0aW9uKGl0ZW0pe3ZhciBlbW9qaUxpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtlbW9qaUxpLnN0eWxlLmRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIixlbW9qaUxpLnN0eWxlLm1hcmdpbj1cIjVweFwiO3ZhciBlbW9qaUxpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7ZW1vamlMaW5rLnN0eWxlLnRleHREZWNvcmF0aW9uPVwibm9uZVwiLGVtb2ppTGluay5zdHlsZS5tYXJnaW49XCI1cHhcIixlbW9qaUxpbmsuc3R5bGUucG9zaXRpb249XCJpbml0aWFsXCIsZW1vamlMaW5rLnN0eWxlLmZvbnRTaXplPVwiMjRweFwiLGVtb2ppTGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsXCJqYXZhc2NyaXB0OnZvaWQoMClcIiksZW1vamlMaW5rLmlubmVySFRNTD1TdHJpbmcuZnJvbUNvZGVQb2ludChpdGVtKSxlbW9qaUxpbmsub25tb3VzZWRvd249Y2xpY2tMaW5rLG9iamVjdHNDYXRlZ29yeS5hcHBlbmRDaGlsZChlbW9qaUxpbmspfSksZW1vamlQaWNrZXIuYXBwZW5kQ2hpbGQoZW1vamlDYXRlZ29yeSksZW1vamlQaWNrZXIuYXBwZW5kQ2hpbGQoZmFjZXNDYXRlZ29yeSksZW1vamlQaWNrZXIuYXBwZW5kQ2hpbGQoYW5pbWFsc0NhdGVnb3J5KSxlbW9qaVBpY2tlci5hcHBlbmRDaGlsZChmb29kQ2F0ZWdvcnkpLGVtb2ppUGlja2VyLmFwcGVuZENoaWxkKHNwb3J0Q2F0ZWdvcnkpLGVtb2ppUGlja2VyLmFwcGVuZENoaWxkKHRyYW5zcG9ydENhdGVnb3J5KSxlbW9qaVBpY2tlci5hcHBlbmRDaGlsZChvYmplY3RzQ2F0ZWdvcnkpLGVtb2ppQ29udGFpbmVyLmFwcGVuZENoaWxkKGVtb2ppUGlja2VyKX19XSksTWV0ZW9yRW1vaml9KCk7bW9kdWxlLmV4cG9ydHM9TWV0ZW9yRW1vaml9KX0se31dfSx7fSxbMV0pKDEpfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21ldGVvci1lbW9qaS9kaXN0L21ldGVvckVtb2ppLm1pbi5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0aWYoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9