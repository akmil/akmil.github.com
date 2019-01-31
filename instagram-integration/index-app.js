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
        var texRowClone = $('.chat-bot-text-fields:first-child').clone();
        texRowClone.insertBefore(textRow);
    });
    // submit
    $form.on('submit', function (e) {
        var _this = this;

        var fields = $('.chat-bot-text-fields');
        var keyWords = function keyWords($el) {
            return $el.val().trim().replace(/ /g, '').split(',').filter(function (i) {
                return i.length > 0;
            });
        };
        // const answer = $('.chat-bot-text-fields textarea.chat-messages').val();
        var reqBody = [];
        fields.each(function (idx, item) {
            console.log(_this);
            var keyWord = keyWords($(item).find('textarea.chat-words'));
            var answer = $(item).find('textarea.chat-messages').val();
            reqBody.push({ keyWord: keyWord, answer: answer });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmM2YmI2NmEzZTYxNzIxMGZlZWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb29raWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy91c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vanMtc2VydmljZXMvdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9+L3B1YnN1Yi1qcy9zcmMvcHVic3ViLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vanMtc2VydmljZXMvbmV0d29yay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2pzLXNlcnZpY2VzL2FwaS10YXNrLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2NoYXQtYm90LWJsb2NrL2NoYXQtYm90LWJsb2NrLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvY29uZmlybS1yZWcvY29uZmlybS1yZWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9mb2xsb3cvZm9sbG93LXN0YXR1cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2ZvbGxvdy9mb2xsb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9oZWFkZXIvYnVyZ2VyLW1lbnUvYnVyZ2VyLW1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9oZWFkZXIvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaW5zdGFncmFtLWFjY291bnRzLWxpc3QvaW5zdGFncmFtLWFjY291bnRzLWxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9tZXNzYWdlcy9tZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3JlZ2lzdGVyLWZvcm0vcmVnaXN0ZXItZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2pzLXNlcnZpY2VzL2FwaS11c2VyLWRpcmVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2pzLXNlcnZpY2VzL3NwaW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL19hdXRoL2xvZ2luLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9icnV0dXNpbi1qc29uLWZvcm1zL2Rpc3QvanMvYnJ1dHVzaW4tanNvbi1mb3Jtcy5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jhc2Uuc2NzcyIsIndlYnBhY2s6Ly8vLi9+L21ldGVvci1lbW9qaS9kaXN0L21ldGVvckVtb2ppLm1pbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIl0sIm5hbWVzIjpbIkNPTlNUIiwidXJsIiwiYmFzZSIsInJlZ2lzdHJhdGlvbiIsImxvZ2luIiwiY29uZmlybWF0aW9uIiwiaW5zdGFncmFtX2FkZEFjY291bnQiLCJpbnN0YWdyYW1BY2NvdW50X2dldE1ldGFEYXRhIiwiaW5zdGFncmFtQWNjb3VudF9jaGVja3BvaW50IiwiaW5zdGFncmFtQWNjb3VudF9jb25maXJtS2V5IiwiaW5zdGFncmFtRGlyZWN0X2dldE1ldGFEYXRhIiwiaW5zdGFncmFtRGlyZWN0X3Bvc3RNZXNzYWdlIiwiaW5zdGFncmFtVGFza01hbmFnZXIiLCJpbnN0YWdyYW1UYXNrTWFuYWdlcl9nZXRNZXRhRGF0YSIsImluc3RhZ3JhbVRhc2tNYW5hZ2VyX2dldFRhc2tUeXBlcyIsImluc3RhZ3JhbVRhc2tNYW5hZ2VyX2dldERlZmF1bHRDb25maWdzIiwiaW5zdGFncmFtVGFza01hbmFnZXJfcG9zdFN0YXJ0Rm9sbG93aW5nTGlzdCIsImluc3RhZ3JhbVRhc2tNYW5hZ2VyX3B1dFN0b3BGb2xsb3dpbmdMaXN0IiwiaWQiLCJpbnN0YWdyYW1UYXNrTWFuYWdlcl9kZWxSZW1vdmVGb2xsb3dpbmdMaXN0IiwidXNlciIsImVtYWlsIiwicGFzc3dvcmQiLCJ0b2tlbiIsImNvb2tpZVN0b3JhZ2UiLCJlbWFpbENvbmZpcm1lZCIsInVpU2VsZWN0b3JzIiwiaGVhZGVyTG9naW5Cb3giLCJoZWFkZXJOYXZMb2dpbkJ0biIsImhlYWRlclJlZ0JveCIsImhlYWRlclJlZ0J0biIsImluc3RhZ3JhbSIsImFkZEFjY291bnRCdG5TZWxlY3RvciIsImFkZEFjY291bnRCdG5JZCIsImV2ZW50cyIsIlVTRVJfTE9HR0VEIiwiVVNFUl9MT0dPVVQiLCJVU0VSX0VNQUlMX0NPTkZJUk1FRCIsIlNUT1BfRklYRURfU1BJTk5FUiIsIm1lc3NhZ2VzIiwiUkVDSUVWRV9ORVdfTUVTU0FHRSIsImluc3RhZ3JhbUFjY291bnMiLCJJTlNUQUdSQU1fQUNDT1VOU19SRU5ERVJFRCIsInRhc2tzIiwiTkVXX1RBU0tfQ1JFQVRFRCIsImdldFBhdGgiLCJuYW1lIiwiQ29va2llU3J2IiwiZ2V0IiwiYyIsImRvY3VtZW50IiwiY29va2llIiwibWF0Y2giLCJkZWNvZGVVUklDb21wb25lbnQiLCJzZXQiLCJ2YWx1ZSIsIm9wdHMiLCJwYXRoIiwiZGF5cyIsIk9iamVjdCIsImVudHJpZXMiLCJyZWR1Y2UiLCJzdHIiLCJrIiwidiIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlbW92ZSIsIlVzZXIiLCJuZXR3b3JrIiwiTmV0d29yayIsIkNvb2tpZVN0b3JhZ2UiLCJzZXR0aW5nUG9zdCIsIm1ldGhvZCIsImhlYWRlcnMiLCJnZXRUb2tlbiIsImNvb2tpZVRva2VuIiwiZm9ybURhdGEiLCJjYkVycm9yIiwic2V0dGluZyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwic2VuZFJlcXVlc3QiLCJ1c2VybmFtZSIsImNoZWNrcG9pbnRUeXBlIiwia2V5IiwidXNlckluc3RhbmNlIiwidmlld1V0aWxzIiwic2hvd0luZm9NZXNzYWdlIiwic2VsZWN0b3IiLCJtZXNzYWdlMSIsIm1lc3NhZ2UyIiwiJCIsImVtcHR5IiwiYXBwZW5kIiwiZmlsbExpc3QiLCIkbGlzdCIsImRhdGFBcnJheSIsIml0ZW1zIiwiY0xpc3QiLCJmb3JFYWNoIiwiaXRlbSIsImkiLCJsaSIsImFwcGVuZFRvIiwiYWRkQ2xhc3MiLCJ0ZXh0IiwiaXNFbWFpbCIsInJlZ2V4IiwidGVzdCIsImdldEZvcm1hdHRlZERhdGVVdGlsIiwidFN0YW1wIiwic2hvd0Z1bGxUaW1lIiwiZGF0ZSIsIkRhdGUiLCJtb250aCIsImdldE1vbnRoIiwiZGF5IiwiZ2V0RGF0ZSIsImhvdXIiLCJnZXRIb3VycyIsIm1pbiIsImdldE1pbnV0ZXMiLCJzZWMiLCJnZXRTZWNvbmRzIiwiZ2V0RnVsbFllYXIiLCJyZXN1bHQiLCIkZWwiLCJsZW5ndGgiLCJzdGF0dXMiLCJzdGF0ZSIsIm1lc3NhZ2UiLCJyZXNwb25zZSIsImVycm9yIiwiRXJyb3IiLCJzdGF0dXNUZXh0IiwiVVJMIiwiT1BUUyIsImZldGNoIiwidGhlbiIsIlByb21pc2UiLCJhbGwiLCJqc29uIiwib2siLCJjYkVycm9yRGVmYXVsdCIsImNoZWNrU3RhdHVzIiwiVXNlclRhc2tNYW5hZ2VyIiwiYXNIZWFkZXIiLCJ1c2Vyc05hbWUiLCJkZXRhaWxzIiwidGFza0lkIiwiU1RSQVRFR1lfVFlQRSIsIlNUUkFURUdZX1NVQlRZUEUiLCJoZWFkZXIiLCJidXJnZXJNZW51IiwiaW5zdGFncmFtQWNjb3VudHMiLCJmb2xsb3ciLCJjaGF0Qm90Iiwic2VsZWN0b3JDc3NMb2dpbkZvcm0iLCJfbG9naW5Cb3giLCJfZm9ybUlkIiwiX2J1dHRvblN1Ym1pdElkIiwiX3Nob3dMb2dpbkJveEJ0bklkIiwic2VsZWN0b3JDc3NMb2dpbkZvcm1JbnN0YWdyYW0iLCJpc0xvZ2luSW5zdGFncmFtIiwic2V0UHViU3ViIiwiUHViU3ViIiwid2luZG93IiwiaW5pdCIsIlJlZ2lzdGVyRm9ybSIsImluaXRIZWFkZXIiLCJpbml0U3RlcHMiLCIkZm9ybSIsInRleHRSb3ciLCJvbiIsImUiLCJjb25zb2xlIiwibG9nIiwidGV4Um93Q2xvbmUiLCJjbG9uZSIsImluc2VydEJlZm9yZSIsImZpZWxkcyIsImtleVdvcmRzIiwidmFsIiwidHJpbSIsInJlcGxhY2UiLCJzcGxpdCIsImZpbHRlciIsInJlcUJvZHkiLCJlYWNoIiwiaWR4Iiwia2V5V29yZCIsImZpbmQiLCJhbnN3ZXIiLCJwdXNoIiwidHJpZ2dlciIsInB1Ymxpc2giLCJjb25maXJtYXRpb25XaXRoUmVkaXJlY3QiLCJwYXJzZVF1ZXJ5U3RyaW5nIiwibG9jYXRpb24iLCJzZWFyY2giLCJvYmpVUkwiLCJSZWdFeHAiLCIkMCIsIiQxIiwiJDIiLCJwYXJhbXMiLCJzZW5kQ29uZmlybSIsImNvbmZpcm0iLCJkYXRhIiwiY3VzdG9tZXJzRGF0YVN0cmluZyIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsInNldFRpbWVvdXQiLCJyZWRpcmVjdCIsInBhdGhuYW1lIiwiaW5kZXhPZiIsImZpbGxMaXN0TWV0YSIsImlzUnVucyIsInByb2dyZXNzIiwiY291bnQiLCJpbmRleCIsInBlcmNlbnQiLCJ0aW1lc3RhbXAiLCJ0eXBlIiwidGFza19pZCIsInJlYXNvbiIsInN1YnR5cGUiLCJpbml0SGFuZGxlcnMiLCIkYnRuU3RvcFRhc2siLCIkYnRuRGVsVGFzayIsImdldFRhc2tJRCIsImJ0biIsInRhcmdldCIsImNsb3Nlc3QiLCJzdG9wRm9sbG93aW5nTGlzdCIsImdldFRhc2tzRGF0YSIsImRlbGV0ZUZvbGxvd2luZ0xpc3QiLCJnZXRNZXRhZGF0YSIsIm1ldGEiLCJzdWJzY3JpYmUiLCJldmVudE5hbWUiLCJmb2xsb3dTdGF0dXMiLCJ1c2VyX2RlZmF1bHRfY29uZmlnIiwidGFza19tb2RlIiwiZmlsbExpc3RUeXBlcyIsIiR3cmFwcGVyIiwic3RydWN0dXJlT2JqIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZ2V0RGF0YVN0ZXAyIiwiZ2V0RGF0YVN0ZXAzIiwidXNlcnMiLCJmaWxsU3BlZWRMaXN0IiwidGFza01vZGVzIiwiY2ZnIiwidGFza19tb2RlcyIsInJhZGlvQnRuUmVkdWNlciIsImdldERlZmF1bHRDb25maWdzIiwiZm91bmQiLCJzdGVwUmVkdWNlciIsInN0ZXBOdW1iZXIiLCJyZW1vdmVDbGFzcyIsImZhZGVJbiIsInBhcmVudF9maWVsZHNldCIsInBhcmVudHMiLCJuZXh0X3N0ZXAiLCJyYWRpb0J0bkFjdGl2ZSIsImZhZGVPdXQiLCJuZXh0IiwicHJldiIsImF0dHIiLCJ0b1VwcGVyQ2FzZSIsImdlbmRlclZhbCIsImNyaXRlcmlhIiwiZ2VuZGVyIiwibGltaXQiLCJmb3JtcyIsImhhdmVfcG9zdHMiLCJmcm9tIiwidG8iLCJoYXZlX2ZvbGxvd2VycyIsImhhdmVfZm9sbG93aW5ncyIsImZvY3VzIiwicHJldmVudERlZmF1bHQiLCJwb3N0U3RhcnRGb2xsb3dpbmdMaXN0IiwibW9kaWZ5QWNjTGlzdCIsInJhZGlvQnRuQXBwZW5kIiwicmFkaW9CdG5XcmFwIiwiJGFjY291bnRzTGlzdCIsIiRsaSIsIndyYXBJbm5lciIsImdldFRhc2tUeXBlcyIsIiRwYXJlbnRGaWVsZHNldCIsInByb3AiLCJzZWxlY3RvcnNFbCIsImxlZnRNZW51IiwiaGFtYnVyZ2VyQnV0dG9uQ2xzIiwiaGFtYnVyZ2VyTWVudUNscyIsImhhbWJ1cmdlck1lbnVPcGVuZWRDbGFzcyIsImhhbWJ1cmdlckJ1dHRvbkNsb3NlQ2xhc3MiLCJyaWdodE1lbnUiLCJzdWJIZWFkZXIiLCJ0b2dnbGVIYW1idXJnZXJNZW51IiwibWVudU5hbWUiLCJ0b2dnbGVDbGFzcyIsImJpbmQiLCJzZWxlY3RvckxvZ2luU3RhdGUiLCJzZWxlY3RvckVtYWlsQ29uZmlybVN0YXRlIiwiY2xvc2VDbGFzcyIsIm9wZW5lZENsYXNzIiwiZW1haWxOb3RDb25maXJtZWQiLCIkZW1haWxuTXNnIiwiY3NzIiwib25Mb2dpblN1YnNjcmliZSIsIm1zZyIsIiRsb2dpbk1zZyIsImlzRW1haWxDb25maXJtZWQiLCJzaG93TG9nb3V0IiwiaXNMb2dnZWQiLCJpc0xvZ2dlZEluIiwicGFyZW50Iiwic2hvdyIsIm9sZFVSTCIsInJlZmVycmVyIiwiaW5jbHVkZXMiLCIkbG9naW5Cb3giLCIkcmVnaXN0ZXJCb3giLCJoaWRlIiwiYWRkSW5zdGFncmFtQWNjb3VudCIsIm5ld0Zvcm1EYXRhIiwiJG1zZ0xpc3QiLCJjYXRjaCIsImVyciIsImFkZE9uTG9hZEhhbmRsZXJzIiwiJG1vZGFsQm9keSIsImZvcm0iLCJjc3NWYWxpZGF0aW9uQ2xhc3MiLCJjaGVja1ZhbGlkaXR5IiwicmVwb3J0VmFsaWRpdHkiLCJhZGRMaXN0SGFuZGxlciIsIiRidXR0b24iLCJzZW5kVG8iLCJzdG9wUHJvcGFnYXRpb24iLCJtb2RhbCIsImdldFNlY3VyaXR5S2V5IiwiJG1vZGFsIiwiJGtleUlucHV0IiwiY29uZmlybVNlY3VyaXR5S2V5IiwibGVuIiwibWluTGVuIiwiTnVtYmVyIiwib25IaWRlTW9kYWwiLCJyZW1vdmVBdHRyIiwidHlwZVNlbGVjdGVkIiwiY2hlY2twb2ludFR5cGVBY3RpdmUiLCJtb2RhbENvbmZpZyIsIl9jb25maWciLCJkZWZhdWx0QXZhdGFyU3JjIiwiaW5zZXJ0SXRlbSIsImNzc0NscyIsImxpVHBsIiwic3RhdHMiLCJpbmZvIiwidHBsIiwiY2hlY2twb2ludCIsIm1ldGFkYXRhIiwicmVzZW5kUmVxdWVzdCIsImlzU2VuZFJlcU9uY2UiLCJjaGVja1Jlc3BvbnNlIiwiaXNSZXNlbmRSZXF1ZXN0IiwiYWNjb3VudHMiLCJMb2dpbkZvcm0iLCJzZWxlY3RvckNzcyIsIiRlbWFpbCIsIiR0ZXh0QXJlYURlc2NyaXB0aW9uIiwidXNlckxvZ2luSGVhZGVyIiwiX2Zvcm1EYXRhIiwic3VibWl0Rm9ybSIsImZvcm1EYXRhT2JqIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJsb2dPdXQiLCJiaW5kRXZlbnRzIiwiJHNob3dMb2dpbkJveEJ0bklkIiwiJGJ1dHRvblN1Ym1pdCIsImV2ZW50IiwiaXNMb2dpbkJ0bkNsaWNrIiwiaXNBZGRJbnN0YWdyYW1CdG5DbGlja2VkIiwiaGFzQ2xhc3MiLCJ1cGRhdGVJbnRlcnZhbCIsImludGVydmFsSWQiLCJpc0luTWVzc2FnZVBhZ2UiLCIkdXNlckxpc3QiLCJyZWFkeSIsIm0iLCJNZXRlb3JFbW9qaSIsIiRwaWNrZXIiLCJzdHlsZSIsInN0eWxlTmV3IiwiaXNBcHBlbnRQcmV2TXNnIiwiaW5zZXJ0TXNnIiwidG9Mb3dlckNhc2UiLCJhZGRUb0xpc3QiLCJzaWRlIiwiYWRkUGFnaW5hdGlvbiIsInBhZ2luYXRpb24iLCJjdXJzb3IiLCJwcmV2X2N1cnNvciIsInVzZXJEYXRhIiwiY29udmVyc2F0aW9uSWQiLCJTcGlubmVyIiwic3RhcnRCdXR0b25TcGlubmVyIiwiVXNlckNvbnZlcnNhdGlvbiIsImdldE1ldGFkYXRhRGV0YWlsQ29udmVyc2F0aW9uIiwic3RvcEJ1dHRvblNwaW5uZXIiLCJmaWxsVXNlckxpc3QiLCJjb252ZXJzYXRpb25EZXRhaWwiLCJhZGRDb252ZXJzYXRpb25zIiwiY29udmVyc2F0aW9ucyIsInBhcnNlSW50IiwiZ2V0QW5kRmlsbFVzZXJMaXN0IiwiaXNBY3RpdmVGaXJzdCIsInByZXZBY3RpdmVEaWFsb2dJZCIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJzZXR0aW5ncyIsImludm9rZV9pbl9taWxsaXMiLCJnZXRBbmRGaWxsQ29udmVyc2F0aW9uIiwiaXNTY3JvbGxEb3duIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsImFkZEhhbmRsZXJzIiwiJHRleHRBcmVhIiwiYWRkIiwicG9zdE1ldGFkYXRhRGV0YWlsQ29udmVyc2F0aW9uIiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwicmVzdWx0RnJvbVNlcnZlciIsIiRkaWFsb2ciLCJzZWxlY3RvckNscyIsInN1Ym1pdEJ0biIsIiRwYXNzd29yZCIsIiRwYXNzd29yZENvbmZpcm0iLCJwYXNzd29yZENvbmZpcm0iLCJyZWdpc3RlciIsInJlZ2lzdGVyQm94IiwiJGJ0biIsImlzIiwiaXNSZWdCdG5DbGljayIsImNsYXNzZXMiLCJpbmxpbmUiLCJvdmVybGF5IiwiZml4ZWQiLCJidXR0b24iLCJfY2ZnIiwibmV3Q2xzIiwicHJlcGVuZCIsImV4dGVuZCIsInByZXdDbHMiLCJzcGlubmVySW5zdGFuY2UiLCJMb2dpblBhZ2UiLCJocmVmIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoRU8sSUFBTUEsd0JBQVE7QUFDakJDLFNBQUs7QUFDREMsY0FBTSwyQkFETDtBQUVEQyxzQkFBYyxxQkFGYjtBQUdEQyxlQUFPLDBCQUhOO0FBSURDLHNCQUFjLHVDQUpiO0FBS0RDLDhCQUFzQixxQkFMckIsRUFLNEM7QUFDN0NDLHNDQUE4Qix5QkFON0I7QUFPREMscUNBQTZCLGdDQVA1QjtBQVFEQyxxQ0FBNkIsZ0NBUjVCO0FBU0RDLHFDQUE2Qix1QkFUNUI7QUFVREMscUNBQTZCLG1CQVY1QjtBQVdEQyw4QkFBc0IseUJBWHJCO0FBWURDLDBDQUFrQyw2QkFaakM7QUFhREMsMkNBQW1DLG1DQWJsQztBQWNEQyxnREFBd0Msb0NBZHZDLEVBYzZFO0FBQzlFQyxxREFBNkMsNkJBZjVDO0FBZ0JEQyxtREFBMkM7QUFBQSxvREFBcUNDLEVBQXJDO0FBQUEsU0FoQjFDO0FBaUJEQyxxREFB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LEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImluZGV4LWFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGJjNmJiNjZhM2U2MTcyMTBmZWVhIiwiZXhwb3J0IGNvbnN0IENPTlNUID0ge1xyXG4gICAgdXJsOiB7XHJcbiAgICAgICAgYmFzZTogJ2h0dHA6Ly9hcGkubHV4Z3JhbS5ydS92MS8nLFxyXG4gICAgICAgIHJlZ2lzdHJhdGlvbjogJ3JlZ2lzdHJhdGlvbi9iYXNpYy8nLFxyXG4gICAgICAgIGxvZ2luOiAncmVnaXN0cmF0aW9uL2Jhc2ljL2xvZ2luJyxcclxuICAgICAgICBjb25maXJtYXRpb246ICdyZWdpc3RyYXRpb24vYmFzaWMvY29uZmlybWF0aW9uP3Rva2VuJyxcclxuICAgICAgICBpbnN0YWdyYW1fYWRkQWNjb3VudDogJ2luc3RhZ3JhbS1hY2NvdW50cy8nLCAvLyB0b0RPOiBjaGVjayBpcyByZWR1bmRhbnRcclxuICAgICAgICBpbnN0YWdyYW1BY2NvdW50X2dldE1ldGFEYXRhOiAnaW5zdGFncmFtLWFjY291bnRzL21ldGEnLFxyXG4gICAgICAgIGluc3RhZ3JhbUFjY291bnRfY2hlY2twb2ludDogJ2luc3RhZ3JhbS1hY2NvdW50cy9jaGVja3BvaW50LycsXHJcbiAgICAgICAgaW5zdGFncmFtQWNjb3VudF9jb25maXJtS2V5OiAnaW5zdGFncmFtLWFjY291bnRzL2NoZWNrcG9pbnQvJyxcclxuICAgICAgICBpbnN0YWdyYW1EaXJlY3RfZ2V0TWV0YURhdGE6ICdpbnN0YWdyYW0tZGlyZWN0L21ldGEnLFxyXG4gICAgICAgIGluc3RhZ3JhbURpcmVjdF9wb3N0TWVzc2FnZTogJ2luc3RhZ3JhbS1kaXJlY3QvJyxcclxuICAgICAgICBpbnN0YWdyYW1UYXNrTWFuYWdlcjogJ2luc3RhZ3JhbS10YXNrLW1hbmFnZXIvJyxcclxuICAgICAgICBpbnN0YWdyYW1UYXNrTWFuYWdlcl9nZXRNZXRhRGF0YTogJ2luc3RhZ3JhbS10YXNrLW1hbmFnZXIvbWV0YScsXHJcbiAgICAgICAgaW5zdGFncmFtVGFza01hbmFnZXJfZ2V0VGFza1R5cGVzOiAnaW5zdGFncmFtLXRhc2stbWFuYWdlci90YXNrL3R5cGVzJyxcclxuICAgICAgICBpbnN0YWdyYW1UYXNrTWFuYWdlcl9nZXREZWZhdWx0Q29uZmlnczogJ2luc3RhZ3JhbS10YXNrLW1hbmFnZXIvY29uZmlnL3R5cGUnLCAvLyB7U1RSQVRFR1lfVFlQRX0vc3VidHlwZS97U1RSQVRFR1lfU1VCVFlQRX1cclxuICAgICAgICBpbnN0YWdyYW1UYXNrTWFuYWdlcl9wb3N0U3RhcnRGb2xsb3dpbmdMaXN0OiAnaW5zdGFncmFtLXRhc2stbWFuYWdlci90YXNrJyxcclxuICAgICAgICBpbnN0YWdyYW1UYXNrTWFuYWdlcl9wdXRTdG9wRm9sbG93aW5nTGlzdDogaWQgPT4gYGluc3RhZ3JhbS10YXNrLW1hbmFnZXIvdGFzay8ke2lkfWAsXHJcbiAgICAgICAgaW5zdGFncmFtVGFza01hbmFnZXJfZGVsUmVtb3ZlRm9sbG93aW5nTGlzdDogaWQgPT4gYGluc3RhZ3JhbS10YXNrLW1hbmFnZXIvdGFzay8ke2lkfWBcclxuICAgIH0sXHJcbiAgICB1c2VyOiB7XHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgICB0b2tlbjogJydcclxuICAgIH0sXHJcbiAgICBjb29raWVTdG9yYWdlOiB7XHJcbiAgICAgICAgdG9rZW46ICd1c2VyX2xvZ2dlZCcsXHJcbiAgICAgICAgZW1haWxDb25maXJtZWQ6ICdlbWFpbF9jb25maXJtZWQnXHJcbiAgICB9LFxyXG4gICAgdWlTZWxlY3RvcnM6IHtcclxuICAgICAgICBoZWFkZXJMb2dpbkJveDogJ25hdiAubG9naW4tYm94JyxcclxuICAgICAgICBoZWFkZXJOYXZMb2dpbkJ0bjogJ25hdiB1bCBsaSAuanNfbG9naW4nLFxyXG4gICAgICAgIGhlYWRlclJlZ0JveDogJ25hdiAucmVnaXN0ZXItYm94JyxcclxuICAgICAgICBoZWFkZXJSZWdCdG46ICduYXYgdWwgbGkgLmpzX3JlZ2lzdGVyJyxcclxuICAgICAgICBpbnN0YWdyYW06IHtcclxuICAgICAgICAgICAgYWRkQWNjb3VudEJ0blNlbGVjdG9yOiAnI2pzX3Nob3ctbG9naW4tYm94JyxcclxuICAgICAgICAgICAgYWRkQWNjb3VudEJ0bklkOiAnanNfc2hvdy1sb2dpbi1ib3gnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGV2ZW50czoge1xyXG4gICAgICAgIFVTRVJfTE9HR0VEOiAndXNlcl9sb2dnZWQnLFxyXG4gICAgICAgIFVTRVJfTE9HT1VUOiAndXNlcl9sb2dvdXQnLFxyXG4gICAgICAgIFVTRVJfRU1BSUxfQ09ORklSTUVEOiAndXNlcl9lbWFpbF9jb25maXJtZWQnLFxyXG4gICAgICAgIFNUT1BfRklYRURfU1BJTk5FUjogJ3N0b3BfZml4ZWRfc3Bpbm5lcicsXHJcbiAgICAgICAgbWVzc2FnZXM6IHtcclxuICAgICAgICAgICAgUkVDSUVWRV9ORVdfTUVTU0FHRTogJ3JlY2VpdmVfbmV3X21lc3NhZ2UnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbnN0YWdyYW1BY2NvdW5zOiB7XHJcbiAgICAgICAgICAgIElOU1RBR1JBTV9BQ0NPVU5TX1JFTkRFUkVEOiAnaW5zdGFncmFtX2FjY291bnNfcmVuZGVyZWQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0YXNrczoge1xyXG4gICAgICAgICAgICBORVdfVEFTS19DUkVBVEVEOiAnbmV3X3Rhc2tfY3JlYXRlZCdcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZ2V0UGF0aChuYW1lLCBpZCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy51cmxbbmFtZV0gPT09ICdmdW5jdGlvbicgJiYgaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXJsLmJhc2UgKyB0aGlzLnVybFtuYW1lXShpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnVybC5iYXNlICsgdGhpcy51cmxbbmFtZV07XHJcbiAgICB9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tb24vanMtc2VydmljZXMvY29uc3RzLmpzIiwiXHJcbmNvbnN0IENvb2tpZVNydiA9IHtcclxuICAgIGdldDogbmFtZSA9PiB7XHJcbiAgICAgICAgY29uc3QgYyA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChgKD86KD86XnwuKjsgKikke25hbWV9ICo9ICooW147XSopLiokKXxeLiokYClbMV07XHJcbiAgICAgICAgaWYgKGMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChjKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2V0OiAobmFtZSwgdmFsdWUsIG9wdHMgPSB7cGF0aDogJy8nLCBkYXlzOiAzNjV9KSA9PiB7XHJcbiAgICAgICAgaWYgKG9wdHMuZGF5cykge1xyXG4gICAgICAgICAgICBvcHRzWydtYXgtYWdlJ10gPSBvcHRzLmRheXMgKiA2MCAqIDYwICogMjQ7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBvcHRzLmRheXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxyXG4gICAgICAgIG9wdHMgPSBPYmplY3QuZW50cmllcyhvcHRzKS5yZWR1Y2UoKHN0ciwgW2ssIHZdKSA9PiBgJHtzdHJ9OyAke2t9PSR7dn1gLCAnJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gYCR7bmFtZX09JHtlbmNvZGVVUklDb21wb25lbnQodmFsdWUpICsgb3B0c31gO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZTogKG5hbWUsIG9wdHMpID0+IENvb2tpZVNydi5zZXQobmFtZSwgJycsIHsnbWF4LWFnZSc6IC0xLCBwYXRoOiAnLycsIGRheXM6IDAsIC4uLm9wdHN9KVxyXG4gICAgLy8gcGF0aCAmIGRvbWFpbiBtdXN0IG1hdGNoIGNvb2tpZSBiZWluZyBkZWxldGVkXHJcbn07XHJcblxyXG4vKlxyXG5jbGFzcyBDb29raWVTdG9yYWdlIHtcclxuICAgIHJlYWQoa2V5KSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSAkLmNvb2tpZShrZXkpO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENvb2tpZShuYW1lLCB2YWx1ZSwgZGF5cykge1xyXG4gICAgICAgIGxldCBleHBpcmVzID0gJyc7XHJcbiAgICAgICAgaWYgKGRheXMpIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIChkYXlzICogMjQgKiA2MCAqIDYwICogMTAwMCkpO1xyXG4gICAgICAgICAgICBleHBpcmVzID0gYDsgZXhwaXJlcz0ke2RhdGUudG9VVENTdHJpbmcoKX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBgJHtuYW1lfSA9JHsodmFsdWUgfHwgJycpICsgZXhwaXJlc307IHBhdGg9L2A7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29va2llKG5hbWUpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGA7ICR7ZG9jdW1lbnQuY29va2llfWA7XHJcbiAgICAgICAgY29uc3QgcGFydHMgPSB2YWx1ZS5zcGxpdChgOyAke25hbWV9PWApO1xyXG4gICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPT0gMikge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFydHMucG9wKCkuc3BsaXQoJzsnKS5zaGlmdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4qL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29va2llU3J2O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uL2pzLXNlcnZpY2VzL2Nvb2tpZS5qcyIsIi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCB7Q09OU1R9IGZyb20gJy4vY29uc3RzJztcclxuaW1wb3J0IE5ldHdvcmsgZnJvbSAnLi9uZXR3b3JrJztcclxuaW1wb3J0IENvb2tpZVN0b3JhZ2UgZnJvbSAnLi9jb29raWUnO1xyXG5cclxuY2xhc3MgVXNlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5uZXR3b3JrID0gbmV3IE5ldHdvcmsoKTtcclxuICAgICAgICB0aGlzLmNvb2tpZVN0b3JhZ2UgPSBDb29raWVTdG9yYWdlO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ1Bvc3QgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBpc0xvZ2dlZEluKCkge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMuZ2V0VG9rZW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0VtYWlsQ29uZmlybWVkKCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5jb29raWVTdG9yYWdlLmdldChDT05TVC5jb29raWVTdG9yYWdlLmVtYWlsQ29uZmlybWVkKSA9PT0gJ2NvbmZpcm1lZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRva2VuKCkge1xyXG4gICAgICAgIGNvbnN0IGNvb2tpZVRva2VuID0gdGhpcy5jb29raWVTdG9yYWdlLmdldChDT05TVC5jb29raWVTdG9yYWdlLnRva2VuKTtcclxuICAgICAgICByZXR1cm4gY29va2llVG9rZW47XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW4oZm9ybURhdGEsIGNiRXJyb3IpIHtcclxuICAgICAgICBjb25zdCBzZXR0aW5nID0gey4uLnRoaXMuc2V0dGluZ1Bvc3QsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKX07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChDT05TVC5nZXRQYXRoKCdsb2dpbicpLCBzZXR0aW5nLCBjYkVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRJbnN0YWdyYW1BY2NvdW50KGZvcm1EYXRhLCBjYkVycm9yKSB7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZyA9IHtcclxuICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdCxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnNldHRpbmdQb3N0LmhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICB0b2tlbjogdGhpcy5nZXRUb2tlbigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QoQ09OU1QuZ2V0UGF0aCgnaW5zdGFncmFtX2FkZEFjY291bnQnKSwgc2V0dGluZywgY2JFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5zdGFncmFtQWNjb3VudCgpIHtcclxuICAgICAgICBjb25zdCBzZXR0aW5nID0ge1xyXG4gICAgICAgICAgICAuLi50aGlzLnNldHRpbmdQb3N0LFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnNldHRpbmdQb3N0LmhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICB0b2tlbjogdGhpcy5nZXRUb2tlbigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QoQ09OU1QuZ2V0UGF0aCgnaW5zdGFncmFtX2FkZEFjY291bnQnKSwgc2V0dGluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uZmlybSh0b2tlbikge1xyXG4gICAgICAgIC8vIGNvbnN0IGNvbmZpcm1VcmwgPSBDT05TVC5nZXRQYXRoKCdjb25maXJtYXRpb24nKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KGAke0NPTlNULmdldFBhdGgoJ2NvbmZpcm1hdGlvbicpICsgdG9rZW59YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXIoZm9ybURhdGEpIHtcclxuICAgICAgICBjb25zdCBzZXR0aW5nID0ge1xyXG4gICAgICAgICAgICAuLi50aGlzLnNldHRpbmdQb3N0LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSlcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QoQ09OU1QuZ2V0UGF0aCgncmVnaXN0cmF0aW9uJyksIHNldHRpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1ldGFkYXRhKHRva2VuLCBjYkVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChgJHtDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1BY2NvdW50X2dldE1ldGFEYXRhJyl9YCwge2hlYWRlcnM6IHt0b2tlbn19LCBjYkVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTZWN1cml0eUtleSh1c2VybmFtZSwgY2hlY2twb2ludFR5cGUpIHtcclxuICAgICAgICBjb25zdCBzZXR0aW5nID0ge1xyXG4gICAgICAgICAgICAuLi50aGlzLnNldHRpbmdQb3N0LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7J3R5cGUnOiBjaGVja3BvaW50VHlwZX0pLCAvLyB0b2RvOiB0bXAgc2V0LCBpdCBzaG91bGQgYmUgJ3R5cGUnXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QuaGVhZGVycyxcclxuICAgICAgICAgICAgICAgICd0b2tlbic6IHRoaXMuZ2V0VG9rZW4oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KGAke0NPTlNULmdldFBhdGgoJ2luc3RhZ3JhbUFjY291bnRfY2hlY2twb2ludCcpfSR7dXNlcm5hbWV9YCwgc2V0dGluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uZmlybVNlY3VyaXR5S2V5KGtleSwgdXNlcm5hbWUpIHtcclxuICAgICAgICBjb25zdCBzZXR0aW5nID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7J3NlY3VyaXR5X2NvZGUnOiBrZXl9KSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdC5oZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgJ3Rva2VuJzogJzNlMzIxZTYwMDI5NzExZTk5MjY0YTA0ODFjOGUxN2Q0JyAvLyB0b2RvOiB0aGlzLmdldFRva2VuKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChgJHtDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1BY2NvdW50X2NvbmZpcm1LZXknKX0ke3VzZXJuYW1lfWAsIHNldHRpbmcpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxubGV0IHVzZXJJbnN0YW5jZSA9IG51bGw7XHJcblxyXG5pZiAoIXVzZXJJbnN0YW5jZSkge1xyXG4gICAgdXNlckluc3RhbmNlID0gbmV3IFVzZXIoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlckluc3RhbmNlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uL2pzLXNlcnZpY2VzL3VzZXIuanMiLCIvLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG4vLyBpbXBvcnQge0NPTlNUfSBmcm9tICcuL2NvbnN0cyc7XHJcblxyXG5mdW5jdGlvbiB2aWV3VXRpbHMoKSB7XHJcbiAgICBmdW5jdGlvbiBzaG93SW5mb01lc3NhZ2Uoc2VsZWN0b3IsIG1lc3NhZ2UxLCBtZXNzYWdlMikge1xyXG4gICAgICAgICQoc2VsZWN0b3IpLmVtcHR5KClcclxuICAgICAgICAgICAgLmFwcGVuZChgJHsobWVzc2FnZTEpID8gYDxwPnN0YXR1czogJHttZXNzYWdlMX08L3A+YCA6ICcnfWApXHJcbiAgICAgICAgICAgIC5hcHBlbmQoYDxwPiR7bWVzc2FnZTJ9IDwvcD5gKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmaWxsTGlzdCgkbGlzdCwgZGF0YUFycmF5KSB7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSBkYXRhQXJyYXk7XHJcbiAgICAgICAgY29uc3QgY0xpc3QgPSAkbGlzdDtcclxuICAgICAgICBjTGlzdC5lbXB0eSgpO1xyXG4gICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbGkgPSAkKCc8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW1cIj48L2xpPicpXHJcbiAgICAgICAgICAgICAgICAuYXBwZW5kVG8oY0xpc3QpO1xyXG4gICAgICAgICAgICAkKCc8YS8+JykuYWRkQ2xhc3MoJ3VpLWFsbCcpXHJcbiAgICAgICAgICAgICAgICAudGV4dChpdGVtLnVzZXJuYW1lKVxyXG4gICAgICAgICAgICAgICAgLmFwcGVuZFRvKGxpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0VtYWlsKGVtYWlsKSB7XHJcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9cclxuICAgICAgICBjb25zdCByZWdleCA9IC9eKFthLXpBLVowLTlfListXSkrXFxAKChbYS16QS1aMC05LV0pK1xcLikrKFthLXpBLVowLTldezIsNH0pKyQvO1xyXG4gICAgICAgIHJldHVybiByZWdleC50ZXN0KGVtYWlsKTtcclxuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlICovXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Rm9ybWF0dGVkRGF0ZVV0aWwodFN0YW1wLCBzaG93RnVsbFRpbWUpIHtcclxuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodFN0YW1wKTtcclxuXHJcbiAgICAgICAgbGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTtcclxuICAgICAgICBsZXQgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XHJcbiAgICAgICAgbGV0IGhvdXIgPSBkYXRlLmdldEhvdXJzKCk7XHJcbiAgICAgICAgbGV0IG1pbiA9IGRhdGUuZ2V0TWludXRlcygpO1xyXG4gICAgICAgIGxldCBzZWMgPSBkYXRlLmdldFNlY29uZHMoKTtcclxuXHJcbiAgICAgICAgbW9udGggPSAobW9udGggPCAxMCA/ICcwJyA6ICcnKSArIG1vbnRoO1xyXG4gICAgICAgIGRheSA9IChkYXkgPCAxMCA/ICcwJyA6ICcnKSArIGRheTtcclxuICAgICAgICBob3VyID0gKGhvdXIgPCAxMCA/ICcwJyA6ICcnKSArIGhvdXI7XHJcbiAgICAgICAgbWluID0gKG1pbiA8IDEwID8gJzAnIDogJycpICsgbWluO1xyXG4gICAgICAgIHNlYyA9IChzZWMgPCAxMCA/ICcwJyA6ICcnKSArIHNlYztcclxuXHJcbiAgICAgICAgbGV0IHN0ciA9ICcnO1xyXG4gICAgICAgIGlmICghc2hvd0Z1bGxUaW1lKSB7XHJcbiAgICAgICAgICAgIHN0ciA9IGAke2hvdXJ9OiR7bWlufWA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3RyID0gYCR7ZGF0ZS5nZXRGdWxsWWVhcigpfS0ke21vbnRofS0ke2RheX1fJHtob3VyfToke21pbn06JHtzZWN9YDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzdHI7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzaG93SW5mb01lc3NhZ2UsXHJcbiAgICAgICAgZmlsbExpc3QsXHJcbiAgICAgICAgaXNFbWFpbCxcclxuICAgICAgICBnZXRGb3JtYXR0ZWREYXRlVXRpbFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdmlld1V0aWxzKCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tb24vanMtc2VydmljZXMvdmlldy5qcyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEwLDIwMTEsMjAxMiwyMDEzLDIwMTQgTW9yZ2FuIFJvZGVyaWNrIGh0dHA6Ly9yb2Rlcmljay5ka1xuICogTGljZW5zZTogTUlUIC0gaHR0cDovL21yZ25yZHJjay5taXQtbGljZW5zZS5vcmdcbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbXJvZGVyaWNrL1B1YlN1YkpTXG4gKi9cblxuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KXtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgUHViU3ViID0ge307XG4gICAgcm9vdC5QdWJTdWIgPSBQdWJTdWI7XG5cbiAgICB2YXIgZGVmaW5lID0gcm9vdC5kZWZpbmU7XG5cbiAgICBmYWN0b3J5KFB1YlN1Yik7XG5cbiAgICAvLyBBTUQgc3VwcG9ydFxuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpe1xuICAgICAgICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBQdWJTdWI7IH0pO1xuXG4gICAgICAgIC8vIENvbW1vbkpTIGFuZCBOb2RlLmpzIG1vZHVsZSBzdXBwb3J0XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpe1xuICAgICAgICBpZiAobW9kdWxlICE9PSB1bmRlZmluZWQgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgICAgICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IFB1YlN1YjsgLy8gTm9kZS5qcyBzcGVjaWZpYyBgbW9kdWxlLmV4cG9ydHNgXG4gICAgICAgIH1cbiAgICAgICAgZXhwb3J0cy5QdWJTdWIgPSBQdWJTdWI7IC8vIENvbW1vbkpTIG1vZHVsZSAxLjEuMSBzcGVjXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IFB1YlN1YjsgLy8gQ29tbW9uSlNcbiAgICB9XG5cbn0oKCB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJiB3aW5kb3cgKSB8fCB0aGlzLCBmdW5jdGlvbiAoUHViU3ViKXtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgbWVzc2FnZXMgPSB7fSxcbiAgICAgICAgbGFzdFVpZCA9IC0xO1xuXG4gICAgZnVuY3Rpb24gaGFzS2V5cyhvYmope1xuICAgICAgICB2YXIga2V5O1xuXG4gICAgICAgIGZvciAoa2V5IGluIG9iail7XG4gICAgICAgICAgICBpZiAoIG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpICl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHRocm93cyB0aGUgcGFzc2VkIGV4Y2VwdGlvbiwgZm9yIHVzZSBhcyBhcmd1bWVudCBmb3Igc2V0VGltZW91dFxuICAgICAqIEBhbGlhcyB0aHJvd0V4Y2VwdGlvblxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7IE9iamVjdCB9IGV4IEFuIEVycm9yIG9iamVjdFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHRocm93RXhjZXB0aW9uKCBleCApe1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gcmVUaHJvd0V4Y2VwdGlvbigpe1xuICAgICAgICAgICAgdGhyb3cgZXg7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsbFN1YnNjcmliZXJXaXRoRGVsYXllZEV4Y2VwdGlvbnMoIHN1YnNjcmliZXIsIG1lc3NhZ2UsIGRhdGEgKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIoIG1lc3NhZ2UsIGRhdGEgKTtcbiAgICAgICAgfSBjYXRjaCggZXggKXtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoIHRocm93RXhjZXB0aW9uKCBleCApLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbGxTdWJzY3JpYmVyV2l0aEltbWVkaWF0ZUV4Y2VwdGlvbnMoIHN1YnNjcmliZXIsIG1lc3NhZ2UsIGRhdGEgKXtcbiAgICAgICAgc3Vic2NyaWJlciggbWVzc2FnZSwgZGF0YSApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGl2ZXJNZXNzYWdlKCBvcmlnaW5hbE1lc3NhZ2UsIG1hdGNoZWRNZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICl7XG4gICAgICAgIHZhciBzdWJzY3JpYmVycyA9IG1lc3NhZ2VzW21hdGNoZWRNZXNzYWdlXSxcbiAgICAgICAgICAgIGNhbGxTdWJzY3JpYmVyID0gaW1tZWRpYXRlRXhjZXB0aW9ucyA/IGNhbGxTdWJzY3JpYmVyV2l0aEltbWVkaWF0ZUV4Y2VwdGlvbnMgOiBjYWxsU3Vic2NyaWJlcldpdGhEZWxheWVkRXhjZXB0aW9ucyxcbiAgICAgICAgICAgIHM7XG5cbiAgICAgICAgaWYgKCAhbWVzc2FnZXMuaGFzT3duUHJvcGVydHkoIG1hdGNoZWRNZXNzYWdlICkgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHMgaW4gc3Vic2NyaWJlcnMpe1xuICAgICAgICAgICAgaWYgKCBzdWJzY3JpYmVycy5oYXNPd25Qcm9wZXJ0eShzKSl7XG4gICAgICAgICAgICAgICAgY2FsbFN1YnNjcmliZXIoIHN1YnNjcmliZXJzW3NdLCBvcmlnaW5hbE1lc3NhZ2UsIGRhdGEgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZURlbGl2ZXJ5RnVuY3Rpb24oIG1lc3NhZ2UsIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKXtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGRlbGl2ZXJOYW1lc3BhY2VkKCl7XG4gICAgICAgICAgICB2YXIgdG9waWMgPSBTdHJpbmcoIG1lc3NhZ2UgKSxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHRvcGljLmxhc3RJbmRleE9mKCAnLicgKTtcblxuICAgICAgICAgICAgLy8gZGVsaXZlciB0aGUgbWVzc2FnZSBhcyBpdCBpcyBub3dcbiAgICAgICAgICAgIGRlbGl2ZXJNZXNzYWdlKG1lc3NhZ2UsIG1lc3NhZ2UsIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMpO1xuXG4gICAgICAgICAgICAvLyB0cmltIHRoZSBoaWVyYXJjaHkgYW5kIGRlbGl2ZXIgbWVzc2FnZSB0byBlYWNoIGxldmVsXG4gICAgICAgICAgICB3aGlsZSggcG9zaXRpb24gIT09IC0xICl7XG4gICAgICAgICAgICAgICAgdG9waWMgPSB0b3BpYy5zdWJzdHIoIDAsIHBvc2l0aW9uICk7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSB0b3BpYy5sYXN0SW5kZXhPZignLicpO1xuICAgICAgICAgICAgICAgIGRlbGl2ZXJNZXNzYWdlKCBtZXNzYWdlLCB0b3BpYywgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1lc3NhZ2VIYXNTdWJzY3JpYmVycyggbWVzc2FnZSApe1xuICAgICAgICB2YXIgdG9waWMgPSBTdHJpbmcoIG1lc3NhZ2UgKSxcbiAgICAgICAgICAgIGZvdW5kID0gQm9vbGVhbihtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eSggdG9waWMgKSAmJiBoYXNLZXlzKG1lc3NhZ2VzW3RvcGljXSkpLFxuICAgICAgICAgICAgcG9zaXRpb24gPSB0b3BpYy5sYXN0SW5kZXhPZiggJy4nICk7XG5cbiAgICAgICAgd2hpbGUgKCAhZm91bmQgJiYgcG9zaXRpb24gIT09IC0xICl7XG4gICAgICAgICAgICB0b3BpYyA9IHRvcGljLnN1YnN0ciggMCwgcG9zaXRpb24gKTtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoICcuJyApO1xuICAgICAgICAgICAgZm91bmQgPSBCb29sZWFuKG1lc3NhZ2VzLmhhc093blByb3BlcnR5KCB0b3BpYyApICYmIGhhc0tleXMobWVzc2FnZXNbdG9waWNdKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZm91bmQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHVibGlzaCggbWVzc2FnZSwgZGF0YSwgc3luYywgaW1tZWRpYXRlRXhjZXB0aW9ucyApe1xuICAgICAgICBtZXNzYWdlID0gKHR5cGVvZiBtZXNzYWdlID09PSAnc3ltYm9sJykgPyBtZXNzYWdlLnRvU3RyaW5nKCkgOiBtZXNzYWdlO1xuXG4gICAgICAgIHZhciBkZWxpdmVyID0gY3JlYXRlRGVsaXZlcnlGdW5jdGlvbiggbWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApLFxuICAgICAgICAgICAgaGFzU3Vic2NyaWJlcnMgPSBtZXNzYWdlSGFzU3Vic2NyaWJlcnMoIG1lc3NhZ2UgKTtcblxuICAgICAgICBpZiAoICFoYXNTdWJzY3JpYmVycyApe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBzeW5jID09PSB0cnVlICl7XG4gICAgICAgICAgICBkZWxpdmVyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCBkZWxpdmVyLCAwICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHVibGlzaGVzIHRoZSBtZXNzYWdlLCBwYXNzaW5nIHRoZSBkYXRhIHRvIGl0J3Mgc3Vic2NyaWJlcnNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgcHVibGlzaFxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gcHVibGlzaFxuICAgICAqIEBwYXJhbSB7fSBkYXRhIFRoZSBkYXRhIHRvIHBhc3MgdG8gc3Vic2NyaWJlcnNcbiAgICAgKiBAcmV0dXJuIHsgQm9vbGVhbiB9XG4gICAgICovXG4gICAgUHViU3ViLnB1Ymxpc2ggPSBmdW5jdGlvbiggbWVzc2FnZSwgZGF0YSApe1xuICAgICAgICByZXR1cm4gcHVibGlzaCggbWVzc2FnZSwgZGF0YSwgZmFsc2UsIFB1YlN1Yi5pbW1lZGlhdGVFeGNlcHRpb25zICk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFB1Ymxpc2hlcyB0aGUgdGhlIG1lc3NhZ2Ugc3luY2hyb25vdXNseSwgcGFzc2luZyB0aGUgZGF0YSB0byBpdCdzIHN1YnNjcmliZXJzXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQGFsaWFzIHB1Ymxpc2hTeW5jXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBwdWJsaXNoXG4gICAgICogQHBhcmFtIHt9IGRhdGEgVGhlIGRhdGEgdG8gcGFzcyB0byBzdWJzY3JpYmVyc1xuICAgICAqIEByZXR1cm4geyBCb29sZWFuIH1cbiAgICAgKi9cbiAgICBQdWJTdWIucHVibGlzaFN5bmMgPSBmdW5jdGlvbiggbWVzc2FnZSwgZGF0YSApe1xuICAgICAgICByZXR1cm4gcHVibGlzaCggbWVzc2FnZSwgZGF0YSwgdHJ1ZSwgUHViU3ViLmltbWVkaWF0ZUV4Y2VwdGlvbnMgKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU3Vic2NyaWJlcyB0aGUgcGFzc2VkIGZ1bmN0aW9uIHRvIHRoZSBwYXNzZWQgbWVzc2FnZS4gRXZlcnkgcmV0dXJuZWQgdG9rZW4gaXMgdW5pcXVlIGFuZCBzaG91bGQgYmUgc3RvcmVkIGlmIHlvdSBuZWVkIHRvIHVuc3Vic2NyaWJlXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQGFsaWFzIHN1YnNjcmliZVxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gc3Vic2NyaWJlIHRvXG4gICAgICogQHBhcmFtIHsgRnVuY3Rpb24gfSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gYSBuZXcgbWVzc2FnZSBpcyBwdWJsaXNoZWRcbiAgICAgKiBAcmV0dXJuIHsgU3RyaW5nIH1cbiAgICAgKi9cbiAgICBQdWJTdWIuc3Vic2NyaWJlID0gZnVuY3Rpb24oIG1lc3NhZ2UsIGZ1bmMgKXtcbiAgICAgICAgaWYgKCB0eXBlb2YgZnVuYyAhPT0gJ2Z1bmN0aW9uJyl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBtZXNzYWdlID0gKHR5cGVvZiBtZXNzYWdlID09PSAnc3ltYm9sJykgPyBtZXNzYWdlLnRvU3RyaW5nKCkgOiBtZXNzYWdlO1xuXG4gICAgICAgIC8vIG1lc3NhZ2UgaXMgbm90IHJlZ2lzdGVyZWQgeWV0XG4gICAgICAgIGlmICggIW1lc3NhZ2VzLmhhc093blByb3BlcnR5KCBtZXNzYWdlICkgKXtcbiAgICAgICAgICAgIG1lc3NhZ2VzW21lc3NhZ2VdID0ge307XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmb3JjaW5nIHRva2VuIGFzIFN0cmluZywgdG8gYWxsb3cgZm9yIGZ1dHVyZSBleHBhbnNpb25zIHdpdGhvdXQgYnJlYWtpbmcgdXNhZ2VcbiAgICAgICAgLy8gYW5kIGFsbG93IGZvciBlYXN5IHVzZSBhcyBrZXkgbmFtZXMgZm9yIHRoZSAnbWVzc2FnZXMnIG9iamVjdFxuICAgICAgICB2YXIgdG9rZW4gPSAndWlkXycgKyBTdHJpbmcoKytsYXN0VWlkKTtcbiAgICAgICAgbWVzc2FnZXNbbWVzc2FnZV1bdG9rZW5dID0gZnVuYztcbiAgICAgICAgXG4gICAgICAgIC8vIHJldHVybiB0b2tlbiBmb3IgdW5zdWJzY3JpYmluZ1xuICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZXMgdGhlIHBhc3NlZCBmdW5jdGlvbiB0byB0aGUgcGFzc2VkIG1lc3NhZ2Ugb25jZVxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBhbGlhcyBzdWJzY3JpYmVPbmNlXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBzdWJzY3JpYmUgdG9cbiAgICAgKiBAcGFyYW0geyBGdW5jdGlvbiB9IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBhIG5ldyBtZXNzYWdlIGlzIHB1Ymxpc2hlZFxuICAgICAqIEByZXR1cm4geyBQdWJTdWIgfVxuICAgICAqL1xuICAgIFB1YlN1Yi5zdWJzY3JpYmVPbmNlID0gZnVuY3Rpb24oIG1lc3NhZ2UsIGZ1bmMgKXtcbiAgICAgICAgdmFyIHRva2VuID0gUHViU3ViLnN1YnNjcmliZSggbWVzc2FnZSwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIC8vIGJlZm9yZSBmdW5jIGFwcGx5LCB1bnN1YnNjcmliZSBtZXNzYWdlXG4gICAgICAgICAgICBQdWJTdWIudW5zdWJzY3JpYmUoIHRva2VuICk7XG4gICAgICAgICAgICBmdW5jLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBQdWJTdWI7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENsZWFycyBhbGwgc3Vic2NyaXB0aW9uc1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWxpYXMgY2xlYXJBbGxTdWJzY3JpcHRpb25zXG4gICAgICovXG4gICAgUHViU3ViLmNsZWFyQWxsU3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uIGNsZWFyQWxsU3Vic2NyaXB0aW9ucygpe1xuICAgICAgICBtZXNzYWdlcyA9IHt9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGVhciBzdWJzY3JpcHRpb25zIGJ5IHRoZSB0b3BpY1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWxpYXMgY2xlYXJBbGxTdWJzY3JpcHRpb25zXG4gICAgICovXG4gICAgUHViU3ViLmNsZWFyU3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uIGNsZWFyU3Vic2NyaXB0aW9ucyh0b3BpYyl7XG4gICAgICAgIHZhciBtO1xuICAgICAgICBmb3IgKG0gaW4gbWVzc2FnZXMpe1xuICAgICAgICAgICAgaWYgKG1lc3NhZ2VzLmhhc093blByb3BlcnR5KG0pICYmIG0uaW5kZXhPZih0b3BpYykgPT09IDApe1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBtZXNzYWdlc1ttXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHN1YnNjcmlwdGlvbnNcbiAgICAgKlxuICAgICAqIC0gV2hlbiBwYXNzZWQgYSB0b2tlbiwgcmVtb3ZlcyBhIHNwZWNpZmljIHN1YnNjcmlwdGlvbi5cbiAgICAgKlxuXHQgKiAtIFdoZW4gcGFzc2VkIGEgZnVuY3Rpb24sIHJlbW92ZXMgYWxsIHN1YnNjcmlwdGlvbnMgZm9yIHRoYXQgZnVuY3Rpb25cbiAgICAgKlxuXHQgKiAtIFdoZW4gcGFzc2VkIGEgdG9waWMsIHJlbW92ZXMgYWxsIHN1YnNjcmlwdGlvbnMgZm9yIHRoYXQgdG9waWMgKGhpZXJhcmNoeSlcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcHVibGljXG4gICAgICogQGFsaWFzIHN1YnNjcmliZU9uY2VcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfCBGdW5jdGlvbiB9IHZhbHVlIEEgdG9rZW4sIGZ1bmN0aW9uIG9yIHRvcGljIHRvIHVuc3Vic2NyaWJlIGZyb21cbiAgICAgKiBAZXhhbXBsZSAvLyBVbnN1YnNjcmliaW5nIHdpdGggYSB0b2tlblxuICAgICAqIHZhciB0b2tlbiA9IFB1YlN1Yi5zdWJzY3JpYmUoJ215dG9waWMnLCBteUZ1bmMpO1xuICAgICAqIFB1YlN1Yi51bnN1YnNjcmliZSh0b2tlbik7XG4gICAgICogQGV4YW1wbGUgLy8gVW5zdWJzY3JpYmluZyB3aXRoIGEgZnVuY3Rpb25cbiAgICAgKiBQdWJTdWIudW5zdWJzY3JpYmUobXlGdW5jKTtcbiAgICAgKiBAZXhhbXBsZSAvLyBVbnN1YnNjcmliaW5nIGZyb20gYSB0b3BpY1xuICAgICAqIFB1YlN1Yi51bnN1YnNjcmliZSgnbXl0b3BpYycpO1xuICAgICAqL1xuICAgIFB1YlN1Yi51bnN1YnNjcmliZSA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgdmFyIGRlc2NlbmRhbnRUb3BpY0V4aXN0cyA9IGZ1bmN0aW9uKHRvcGljKSB7XG4gICAgICAgICAgICAgICAgdmFyIG07XG4gICAgICAgICAgICAgICAgZm9yICggbSBpbiBtZXNzYWdlcyApe1xuICAgICAgICAgICAgICAgICAgICBpZiAoIG1lc3NhZ2VzLmhhc093blByb3BlcnR5KG0pICYmIG0uaW5kZXhPZih0b3BpYykgPT09IDAgKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGEgZGVzY2VuZGFudCBvZiB0aGUgdG9waWMgZXhpc3RzOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNUb3BpYyAgICA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgKCBtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eSh2YWx1ZSkgfHwgZGVzY2VuZGFudFRvcGljRXhpc3RzKHZhbHVlKSApLFxuICAgICAgICAgICAgaXNUb2tlbiAgICA9ICFpc1RvcGljICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycsXG4gICAgICAgICAgICBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nLFxuICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2UsXG4gICAgICAgICAgICBtLCBtZXNzYWdlLCB0O1xuXG4gICAgICAgIGlmIChpc1RvcGljKXtcbiAgICAgICAgICAgIFB1YlN1Yi5jbGVhclN1YnNjcmlwdGlvbnModmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICggbSBpbiBtZXNzYWdlcyApe1xuICAgICAgICAgICAgaWYgKCBtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eSggbSApICl7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2VzW21dO1xuXG4gICAgICAgICAgICAgICAgaWYgKCBpc1Rva2VuICYmIG1lc3NhZ2VbdmFsdWVdICl7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBtZXNzYWdlW3ZhbHVlXTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRva2VucyBhcmUgdW5pcXVlLCBzbyB3ZSBjYW4ganVzdCBzdG9wIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICggdCBpbiBtZXNzYWdlICl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5oYXNPd25Qcm9wZXJ0eSh0KSAmJiBtZXNzYWdlW3RdID09PSB2YWx1ZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG1lc3NhZ2VbdF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbn0pKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wdWJzdWItanMvc3JjL3B1YnN1Yi5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgdmlld1V0aWxzIGZyb20gJy4vdmlldyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXR3b3JrIHtcclxuXHJcbiAgICBjYkVycm9yRGVmYXVsdChyZXN1bHQpIHtcclxuICAgICAgICBjb25zdCAkZWwgPSAoJCgnI2Rlc2NyaXB0aW9uJykubGVuZ3RoKSA/ICQoJyNkZXNjcmlwdGlvbicpIDogJCgnLmVycm9yLW1zZycpO1xyXG4gICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UoJGVsLFxyXG4gICAgICAgICAgICByZXN1bHQuc3RhdHVzLnN0YXRlLFxyXG4gICAgICAgICAgICByZXN1bHQuc3RhdHVzLm1lc3NhZ2UgfHwgJ2Vycm9yJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tTdGF0dXMocmVzcG9uc2UpIHtcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICYmIHJlc3BvbnNlLnN0YXR1cyA+PSAyMDAgJiYgcmVzcG9uc2Uuc3RhdHVzIDwgMzAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcclxuICAgICAgICAgICAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcclxuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNlbmRSZXF1ZXN0KFVSTCwgT1BUUywgY2JFcnJvcikge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChVUkwsIE9QVFMpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IFByb21pc2UuYWxsKFtyZXNwb25zZSwgcmVzcG9uc2UuanNvbigpXSkpXHJcbiAgICAgICAgICAgIC50aGVuKChbcmVzcG9uc2UsIGpzb25dKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjYkVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2JFcnJvckRlZmF1bHQoanNvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2JFcnJvcihqc29uKTsgLy8gdXBkYXRlIHZpZXdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja1N0YXR1cyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKGpzb24uc3RhdHVzLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGpzb247XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uL2pzLXNlcnZpY2VzL25ldHdvcmsuanMiLCIvLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQge0NPTlNUfSBmcm9tICcuL2NvbnN0cyc7XHJcbmltcG9ydCBOZXR3b3JrIGZyb20gJy4vbmV0d29yayc7XHJcbmltcG9ydCBDb29raWVTdG9yYWdlIGZyb20gJy4vY29va2llJztcclxuXHJcbmNsYXNzIFVzZXJUYXNrTWFuYWdlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5uZXR3b3JrID0gbmV3IE5ldHdvcmsoKTtcclxuICAgICAgICB0aGlzLmNvb2tpZVN0b3JhZ2UgPSBDb29raWVTdG9yYWdlO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ1Bvc3QgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpc0xvZ2dlZEluKCkge1xyXG4gICAgLy8gICAgIHJldHVybiAhIXRoaXMuZ2V0VG9rZW4oKTtcclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyBpc0VtYWlsQ29uZmlybWVkKCkge1xyXG4gICAgLy8gICAgIHJldHVybiAodGhpcy5jb29raWVTdG9yYWdlLmdldChDT05TVC5jb29raWVTdG9yYWdlLmVtYWlsQ29uZmlybWVkKSA9PT0gJ2NvbmZpcm1lZCcpO1xyXG4gICAgLy8gfVxyXG4gICAgZ2V0VG9rZW4oYXNIZWFkZXIpIHtcclxuICAgICAgICBjb25zdCBjb29raWVUb2tlbiA9IHRoaXMuY29va2llU3RvcmFnZS5nZXQoQ09OU1QuY29va2llU3RvcmFnZS50b2tlbik7XHJcbiAgICAgICAgcmV0dXJuIChhc0hlYWRlcikgPyB7aGVhZGVyczoge3Rva2VuOiBjb29raWVUb2tlbn19IDogY29va2llVG9rZW47XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWV0YWRhdGEodXNlcnNOYW1lLCBjYkVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChgJHtDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1UYXNrTWFuYWdlcl9nZXRNZXRhRGF0YScpfWAsXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VG9rZW4oJ2FzSGVhZGVyJyksIGNiRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRhc2tUeXBlcyhkZXRhaWxzLCBjYkVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChgJHtDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1UYXNrTWFuYWdlcl9nZXRUYXNrVHlwZXMnKX1gLFxyXG4gICAgICAgICAgICB0aGlzLmdldFRva2VuKCdhc0hlYWRlcicpLCBjYkVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wRm9sbG93aW5nTGlzdCh0YXNrSWQsIGNiRXJyb3IpIHtcclxuICAgICAgICBjb25zdCBzZXR0aW5nID0ge1xyXG4gICAgICAgICAgICAuLi50aGlzLnNldHRpbmdQb3N0LFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnNldHRpbmdQb3N0LmhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICAndG9rZW4nOiB0aGlzLmdldFRva2VuKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgdXJsID0gQ09OU1QuZ2V0UGF0aCgnaW5zdGFncmFtVGFza01hbmFnZXJfcHV0U3RvcEZvbGxvd2luZ0xpc3QnLCB0YXNrSWQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QodXJsLFxyXG4gICAgICAgICAgICBzZXR0aW5nLCBjYkVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVGb2xsb3dpbmdMaXN0KHRhc2tJZCwgY2JFcnJvcikge1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSB7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QsXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QuaGVhZGVycyxcclxuICAgICAgICAgICAgICAgICd0b2tlbic6IHRoaXMuZ2V0VG9rZW4oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCB1cmwgPSBDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1UYXNrTWFuYWdlcl9kZWxSZW1vdmVGb2xsb3dpbmdMaXN0JywgdGFza0lkKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KHVybCxcclxuICAgICAgICAgICAgc2V0dGluZywgY2JFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGVmYXVsdENvbmZpZ3MoY2JFcnJvcikge1xyXG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSB7XHJcbiAgICAgICAgICAgIFNUUkFURUdZX1RZUEU6ICdGT0xMT1dJTkcnLFxyXG4gICAgICAgICAgICBTVFJBVEVHWV9TVUJUWVBFOiAnRk9MTE9XSU5HX0xJU1QnXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCB1cmwgPSBgJHtDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1UYXNrTWFuYWdlcl9nZXREZWZhdWx0Q29uZmlncycpfS8ke2RldGFpbHMuU1RSQVRFR1lfVFlQRX0vc3VidHlwZS8ke2RldGFpbHMuU1RSQVRFR1lfU1VCVFlQRX1gO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QodXJsLFxyXG4gICAgICAgICAgICB0aGlzLmdldFRva2VuKCdhc0hlYWRlcicpLCBjYkVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBwb3N0U3RhcnRGb2xsb3dpbmdMaXN0KGJvZHksIGNiRXJyb3IpIHtcclxuICAgICAgICBjb25zdCBzZXR0aW5nID0ge1xyXG4gICAgICAgICAgICAuLi50aGlzLnNldHRpbmdQb3N0LFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnNldHRpbmdQb3N0LmhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICAndG9rZW4nOiB0aGlzLmdldFRva2VuKCksXHJcbiAgICAgICAgICAgICAgICAnWC1BdXRoLVRva2VuJzogJ2UyZjQzMzZhYmVhNDQwNDg5YzUxYzVjMTAyOTRlYTEyJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzZXR0aW5nLmJvZHkgPSBKU09OLnN0cmluZ2lmeShib2R5KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChgJHtDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1UYXNrTWFuYWdlcl9wb3N0U3RhcnRGb2xsb3dpbmdMaXN0Jyl9YCxcclxuICAgICAgICAgICAgc2V0dGluZywgY2JFcnJvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCB1c2VySW5zdGFuY2UgPSBudWxsO1xyXG5cclxuaWYgKCF1c2VySW5zdGFuY2UpIHtcclxuICAgIHVzZXJJbnN0YW5jZSA9IG5ldyBVc2VyVGFza01hbmFnZXIoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlckluc3RhbmNlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uL2pzLXNlcnZpY2VzL2FwaS10YXNrLW1hbmFnZXIuanMiLCJpbXBvcnQgJy4vYmFzZS5zY3NzJztcclxuLy8gaW1wb3J0ICdib290c3RyYXAnO1xyXG5pbXBvcnQge0NPTlNUfSBmcm9tICcuL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMnO1xyXG5pbXBvcnQgUHViU3ViIGZyb20gJ3B1YnN1Yi1qcyc7XHJcbmltcG9ydCBSZWdpc3RlckZvcm0gZnJvbSAnLi9ibG9ja3MvcmVnaXN0ZXItZm9ybS9yZWdpc3Rlci1mb3JtJztcclxuaW1wb3J0IHtMb2dpbkZvcm19IGZyb20gJy4vYmxvY2tzL2xvZ2luLWZvcm0vbG9naW4tZm9ybSc7XHJcbmltcG9ydCB7TG9naW5QYWdlfSBmcm9tICcuL3BhZ2VzL19hdXRoL2xvZ2luLXBhZ2UnO1xyXG5pbXBvcnQge2NvbmZpcm1hdGlvbldpdGhSZWRpcmVjdH0gZnJvbSAnLi9ibG9ja3MvY29uZmlybS1yZWcvY29uZmlybS1yZWcnO1xyXG5pbXBvcnQgKiBhcyBoZWFkZXIgZnJvbSAnLi9ibG9ja3MvaGVhZGVyL2hlYWRlcic7XHJcbmltcG9ydCAqIGFzIGJ1cmdlck1lbnUgZnJvbSAnLi9ibG9ja3MvaGVhZGVyL2J1cmdlci1tZW51L2J1cmdlci1tZW51JztcclxuaW1wb3J0ICogYXMgaW5zdGFncmFtQWNjb3VudHMgZnJvbSAnLi9ibG9ja3MvaW5zdGFncmFtLWFjY291bnRzLWxpc3QvaW5zdGFncmFtLWFjY291bnRzLWxpc3QnO1xyXG5pbXBvcnQgKiBhcyBtZXNzYWdlcyBmcm9tICcuL2Jsb2Nrcy9tZXNzYWdlcy9tZXNzYWdlcyc7XHJcbmltcG9ydCAqIGFzIGZvbGxvdyBmcm9tICcuL2Jsb2Nrcy9mb2xsb3cvZm9sbG93JztcclxuaW1wb3J0ICogYXMgY2hhdEJvdCBmcm9tICcuL2Jsb2Nrcy9jaGF0LWJvdC1ibG9jay9jaGF0LWJvdC1ibG9jayc7XHJcblxyXG5jb25zdCBzZWxlY3RvckNzc0xvZ2luRm9ybSA9IHtcclxuICAgIF9sb2dpbkJveDogQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyTG9naW5Cb3gsXHJcbiAgICBfZm9ybUlkOiAnI2pzX2xvZ2luLWZvcm0nLFxyXG4gICAgX2J1dHRvblN1Ym1pdElkOiAnI2pzX2xvZ2luX2J0bicsXHJcbiAgICBfc2hvd0xvZ2luQm94QnRuSWQ6IENPTlNULnVpU2VsZWN0b3JzLmhlYWRlck5hdkxvZ2luQnRuXHJcbn07XHJcblxyXG5jb25zdCBzZWxlY3RvckNzc0xvZ2luRm9ybUluc3RhZ3JhbSA9IHtcclxuICAgIF9sb2dpbkJveDogJ21haW4gLmxvZ2luLWJveCcsXHJcbiAgICBfZm9ybUlkOiAnI2pzX2luc3RhZ3JhbS1hZGQtYWNjb3VudCcsXHJcbiAgICBfYnV0dG9uU3VibWl0SWQ6ICcjanNfaW5zdGFncmFtLWFkZC1hY2NvdW50LS1idG4nLFxyXG4gICAgX3Nob3dMb2dpbkJveEJ0bklkOiAnI2pzX3Nob3ctbG9naW4tYm94JyxcclxuICAgIGlzTG9naW5JbnN0YWdyYW06IHRydWVcclxufTtcclxuXHJcbmZ1bmN0aW9uIHNldFB1YlN1YihQdWJTdWIpIHtcclxuICAgIHdpbmRvdy5QdWJTdWIgPSBQdWJTdWI7XHJcbn1cclxuXHJcbmNvbnN0IGluaXQgPSAoKSA9PiB7XHJcbiAgICBzZXRQdWJTdWIoUHViU3ViKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdpbml0IGpzIGhlcmUnLCBDT05TVC51c2VyKTtcclxuICAgIChuZXcgUmVnaXN0ZXJGb3JtKCkpLmluaXQoKTtcclxuICAgIExvZ2luRm9ybShzZWxlY3RvckNzc0xvZ2luRm9ybSkuaW5pdCgpO1xyXG4gICAgTG9naW5Gb3JtKHNlbGVjdG9yQ3NzTG9naW5Gb3JtSW5zdGFncmFtKS5pbml0KCk7IC8vIGluaXQgaW5zdGFncmFtIGxvZ2luIGZvcm0qIS9cclxuICAgIExvZ2luUGFnZSh7XHJcbiAgICAgICAgX2xvZ2luQm94OiAnLmF1dGgubG9naW4gLmNhcmQtc2lnbmluJyxcclxuICAgICAgICBfZm9ybUlkOiAnLmZvcm0tc2lnbmluJyxcclxuICAgICAgICBfYnV0dG9uU3VibWl0SWQ6ICcuZm9ybS1zaWduaW4gW3R5cGU9XCJzdWJtaXRcIl0nXHJcbiAgICB9KS5pbml0KCk7XHJcblxyXG4gICAgY29uZmlybWF0aW9uV2l0aFJlZGlyZWN0KCkuaW5pdCgpO1xyXG4gICAgaGVhZGVyLmluaXRIZWFkZXIoKTtcclxuICAgIGJ1cmdlck1lbnUuaW5pdCgpO1xyXG4gICAgZm9sbG93LmluaXQoKTtcclxuICAgIGluc3RhZ3JhbUFjY291bnRzLmluaXQoKTtcclxuICAgIG1lc3NhZ2VzLmluaXQoKTtcclxuICAgIGNoYXRCb3QuaW5pdCgpO1xyXG59O1xyXG5cclxuKCgpID0+IGluaXQoKSkoKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jvb3RzdHJhcC5qcyIsImltcG9ydCB7Q09OU1R9IGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMnO1xyXG4vLyBpbXBvcnQgVXNlclRhc2tNYW5hZ2VyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9hcGktdGFzay1tYW5hZ2VyJztcclxuLypcclxuY29uc3Qgc3RhdGUgPSB7XHJcbiAgICAndGV4dF9mb3Jtcyc6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdrZXlfd29yZHMnOiBbJ9GG0LXQvdCwJywgJ9GB0YLQvtC40LzQvtGB0YLRjCddLFxyXG4gICAgICAgICAgICAnYW5zd2VyJzogJzEwMDUwMCDRgNGD0LHQu9C10LknXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdrZXlfd29yZHMnOiBbJ9GG0LXQvdGDJywgJ9GG0LXQvdC90LjQuiddLFxyXG4gICAgICAgICAgICAnYW5zd2VyJzogJzEg0LzQu9C9LiDRgNGD0LHQu9C10LknXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59OyovXHJcblxyXG4vKlxyXG5mdW5jdGlvbiBmaWxsTGlzdFR5cGVzKCR3cmFwcGVyLCBkYXRhKSB7XHJcbiAgY29uc3Qgc3RydWN0dXJlT2JqID0gZGF0YVsnc3RydWN0dXJlJ107XHJcblxyXG4gICR3cmFwcGVyLmVtcHR5KCkuYWRkQ2xhc3MoJ2JvcmRlci1saWdodC1jb2xvcicpO1xyXG4gICQoJzxkaXYgY2xhc3M9XCJcIj7QotC40L8g0LfQsNC00LDQvdC40Y88L2Rpdj48c2VsZWN0IG5hbWU9XCJ0YXNrLXR5cGVcIiBpZD1cInRhc2stdHlwZXNcIj48L3NlbGVjdD4nKS5hcHBlbmRUbygkd3JhcHBlcik7XHJcbiAgZm9yIChjb25zdCB0eXBlIGluIHN0cnVjdHVyZU9iaikge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ3N0cnVjdHVyZTogJyArIGl0ZW0pO1xyXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzdHJ1Y3R1cmVPYmosIHR5cGUpKSB7XHJcbiAgICAgICQoYDxvcHRpb24gY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gcHktMlwiICR7KHR5cGUgIT09ICdGT0xMT1dJTkcnKSA/ICdkaXNhYmxlZD1cImRpc2FibGVkXCInIDogJyd9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IFwiJHtKU09OLnN0cmluZ2lmeSh7dHlwZSwgc3VidHlwZTogc3RydWN0dXJlT2JqW3R5cGVdfSl9XCI+XHJcbiAgICAgICAgICAgICAgICAke3R5cGV9XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPmApLmFwcGVuZFRvKCQoJyN0YXNrLXR5cGVzJykpO1xyXG4gICAgfVxyXG4gIH1cclxufSovXHJcblxyXG4vKipcclxuICogSW5pdCBoZWFkZXJcclxuICovXHJcbmZ1bmN0aW9uIGluaXRTdGVwcygpIHtcclxuICAgIGNvbnN0ICRmb3JtID0gJCgnLmNoYXQtYm90LWZvcm0nKTtcclxuICAgIGNvbnN0IHRleHRSb3cgPSAkKCcuY2hhdC1ib3QtdGV4dC1maWVsZHMnKTtcclxuXHJcbiAgICAkKCcuanNfYWRkLWNoYXQtYm90Jykub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY2xpY2snKTtcclxuICAgICAgICAvLyAkKHRleHRSb3cpLmluc2VydEFmdGVyKCQoJy5jaGF0LWJvdC10ZXh0LWZpZWxkcycpKTtcclxuICAgICAgICBjb25zdCB0ZXhSb3dDbG9uZSA9ICQoJy5jaGF0LWJvdC10ZXh0LWZpZWxkczpmaXJzdC1jaGlsZCcpLmNsb25lKCk7XHJcbiAgICAgICAgdGV4Um93Q2xvbmUuaW5zZXJ0QmVmb3JlKHRleHRSb3cpO1xyXG4gICAgfSk7XHJcbiAgICAvLyBzdWJtaXRcclxuICAgICRmb3JtLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkcyA9ICQoJy5jaGF0LWJvdC10ZXh0LWZpZWxkcycpO1xyXG4gICAgICAgIGNvbnN0IGtleVdvcmRzID0gJGVsID0+ICRlbC52YWwoKVxyXG4gICAgICAgICAgICAudHJpbSgpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC8gL2csICcnKVxyXG4gICAgICAgICAgICAuc3BsaXQoJywnKVxyXG4gICAgICAgICAgICAuZmlsdGVyKGkgPT4gaS5sZW5ndGggPiAwKTtcclxuICAgICAgICAvLyBjb25zdCBhbnN3ZXIgPSAkKCcuY2hhdC1ib3QtdGV4dC1maWVsZHMgdGV4dGFyZWEuY2hhdC1tZXNzYWdlcycpLnZhbCgpO1xyXG4gICAgICAgIGNvbnN0IHJlcUJvZHkgPSBbXTtcclxuICAgICAgICBmaWVsZHMuZWFjaCgoaWR4LCBpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgICAgICAgICBjb25zdCBrZXlXb3JkID0ga2V5V29yZHMoJChpdGVtKS5maW5kKCd0ZXh0YXJlYS5jaGF0LXdvcmRzJykpO1xyXG4gICAgICAgICAgICBjb25zdCBhbnN3ZXIgPSAkKGl0ZW0pLmZpbmQoJ3RleHRhcmVhLmNoYXQtbWVzc2FnZXMnKS52YWwoKTtcclxuICAgICAgICAgICAgcmVxQm9keS5wdXNoKHtrZXlXb3JkLCBhbnN3ZXJ9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ21ha2UgcmVxdWVzdCBoZXJlKionLCByZXFCb2R5KTtcclxuXHJcbiAgICAgICAgLy8gVXNlclRhc2tNYW5hZ2VyLnBvc3RTdGFydEZvbGxvd2luZ0xpc3Qoc3RhdGUpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBpZiAocmVzdWx0LnN0YXR1cy5zdGF0ZSA9PT0gJ29rJykge1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XHJcbiAgICAgICAgLy8gICAgICAgICAkKCcuZm9ybS1zdWJtaXQtZmluaXNoJykuYWRkQ2xhc3MoJ2QtYmxvY2snKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC5maW5kKCcuYWxlcnQnKS5hcHBlbmQoYDxwPnRhc2tfaWQ6ICR7cmVzdWx0LmRhdGEudGFza19pZH08L3A+YCk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBhbGVydCBjbG9zZVxyXG4gICAgJCgnLmZvcm0tc3VibWl0LWZpbmlzaCAuY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gJCh0aGlzKS5jbG9zZXN0KCdmb3JtLXN1Ym1pdC1maW5pc2gnKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpO1xyXG4gICAgICAgICQoJyN2LXBpbGxzLXJ1bm5lZC10YWInKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgIHdpbmRvdy5QdWJTdWIucHVibGlzaChDT05TVC5ldmVudHMudGFza3MuTkVXX1RBU0tfQ1JFQVRFRCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBpZiAoJCgnLmNoYXQtYm90LWZvcm0nKS5sZW5ndGgpIHtcclxuICAgICAgICBpbml0U3RlcHMoKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL2NoYXQtYm90LWJsb2NrL2NoYXQtYm90LWJsb2NrLmpzIiwiLyogZXNsaW50LWRpc2FibGUgc29ydC12YXJzICovXHJcbi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy91c2VyJztcclxuaW1wb3J0IHtDT05TVH0gZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2NvbnN0cyc7XHJcbmltcG9ydCBjb29raWVTdG9yYWdlIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb29raWUnO1xyXG5cclxuY29uc3QgcGFyc2VRdWVyeVN0cmluZyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIGNvbnN0IHN0ciA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XHJcbiAgICBjb25zdCBvYmpVUkwgPSB7fTtcclxuXHJcbiAgICBzdHIucmVwbGFjZShcclxuICAgICAgbmV3IFJlZ0V4cCgnKFtePz0mXSspKD0oW14mXSopKT8nLCAnZycpLFxyXG4gICAgICAgIGZ1bmN0aW9uKCQwLCAkMSwgJDIpIHtcclxuICAgICAgICAgICAgb2JqVVJMWyQxXSA9ICQyO1xyXG4gICAgICAgIH1cclxuICApO1xyXG4gICAgcmV0dXJuIG9ialVSTDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb25maXJtYXRpb25XaXRoUmVkaXJlY3QoKSB7XHJcbiAgICBjb25zdCB1c2VyID0gVXNlcjtcclxuICAgIGNvbnN0IHBhcmFtcyA9IHBhcnNlUXVlcnlTdHJpbmcoKTtcclxuICAgIC8vIEV4YW1wbGUgaG93IHRvIHVzZSBpdDpcclxuXHJcbiAgICBjb25zdCBzZW5kQ29uZmlybSA9IGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgICAgIHVzZXIuY29uZmlybSh0b2tlbikudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzICYmIHJlc3VsdC5zdGF0dXMuc3RhdGUgPT09ICdvaycpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBzYXZlIHRoZSBpdGVtXHJcbiAgICAgICAgICAgICAgICBjb29raWVTdG9yYWdlLnNldChDT05TVC5jb29raWVTdG9yYWdlLmVtYWlsQ29uZmlybWVkLCAnY29uZmlybWVkJyk7XHJcbiAgICAgICAgICAgICAgICBjb29raWVTdG9yYWdlLnNldChDT05TVC5jb29raWVTdG9yYWdlLnRva2VuLCByZXN1bHQuZGF0YS50b2tlbik7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uID0gY29uZmlybS1yZWdpc3RyYXRpb24uaHRtbD90b2tlbj0nZnJvbSBzZXJ2ZXInO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHJldHJpZXZlIHRoZSBvYmplY3QgaW4gYSBzdHJpbmcgZm9ybVxyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VzdG9tZXJzRGF0YVN0cmluZyA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2N1c3RvbWVyc0RhdGEnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1c3RvbWVyc0RhdGFTdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlcXVlc3Qgc3VjY2VlZGVkIHdpdGggSlNPTiByZXNwb25zZScsIHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAkKCcuY29uZmlybS1yZWdpc3RyYXRpb24nKS5hcHBlbmQoYDxwPmNvbmZpcm1hdGlvbiBzdGF0dXM6ICR7cmVzdWx0LnN0YXR1cy5zdGF0ZX08L3A+YCk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSAnLi9wcm9maWxlLmh0bWwnO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LnN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVkaXJlY3QgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZG90LW5vdGF0aW9uXHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBwYXJhbXNbJ3Rva2VuJ107XHJcblxyXG4gICAgICAgIGlmICghbG9jYXRpb24ucGF0aG5hbWUuaW5kZXhPZignY29uZmlybS1yZWdpc3RyYXRpb24nKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2VuZCByZXEgdG8gJywgdG9rZW4pO1xyXG4gICAgICAgICAgICBzZW5kQ29uZmlybSh0b2tlbik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgICAgIHJlZGlyZWN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0XHJcbiAgICB9O1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3MvY29uZmlybS1yZWcvY29uZmlybS1yZWcuanMiLCJpbXBvcnQgVXNlclRhc2tNYW5hZ2VyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9hcGktdGFzay1tYW5hZ2VyJztcclxuaW1wb3J0IHZpZXdVdGlscyBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdmlldyc7XHJcbmltcG9ydCB7Q09OU1R9IGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMnO1xyXG5cclxuZnVuY3Rpb24gZmlsbExpc3RNZXRhKCRsaXN0LCBkYXRhQXJyYXksIGlzUnVucykge1xyXG4gICAgY29uc3QgaXRlbXMgPSBkYXRhQXJyYXk7XHJcbiAgICAvLyBjb25zdCBkZWZhdWx0QXZhdGFyU3JjID0gJ2h0dHBzOi8vaS5pbWd1ci5jb20vak5OVDRMRS5wbmcnO1xyXG4gICAgJGxpc3QuZW1wdHkoKTtcclxuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCBwcm9ncmVzcyA9IHtcclxuICAgICAgICAgICAgY291bnQ6IDEsXHJcbiAgICAgICAgICAgIGluZGV4OiAwLFxyXG4gICAgICAgICAgICBwZXJjZW50OiA1NSxcclxuICAgICAgICAgICAgdGltZXN0YW1wOiAxNTQ4NjY5NTA3NjU4XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoaXRlbS50eXBlICE9PSAnRk9MTE9XSU5HJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpdGVtLnN0YXR1cy5zdGF0ZSA9PT0gJ1NUT1BQRUQnICYmICFpc1J1bnMpIHtcclxuICAgICAgICAgICAgJChgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIHAtMFwiIGRhdGEtdXNlcm5hbWU9XCIke2l0ZW0udHlwZX1cIiBkYXRhLXRhc2staWQ9XCIke2l0ZW0udGFza19pZH1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1ib2R5IGQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgdGFzay10eXBlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7KGl0ZW0udGFza19pZCkgPyBgPHAgY2xhc3M9XCJiYWRnZSBiYWRnZS1zZWNvbmRhcnkgbXktMVwiPiR7aXRlbS50YXNrX2lkfTwvcD5gIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLXByb2dyZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInNtYWxsIG15LTFcIj7QntGB0YLQsNC90L7QstC70LXQvdC+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJteS0xXCI+JHtpdGVtLnN0YXR1cy5yZWFzb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi13YXJuaW5nIGpzX2J0bi1kZWxldGUtdGFza1wiPtCj0LTQsNC70LjRgtGMPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJjb2wgdGFzay1zdWJ0eXBlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7KGl0ZW0uc3VidHlwZSkgPyBgPHAgY2xhc3M9XCJtdC0wIG1iLTFcIj4ke2l0ZW0uc3VidHlwZX08L3A+YCA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pi0tPiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5gKS5hcHBlbmRUbygkbGlzdCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpdGVtLnN0YXR1cy5zdGF0ZSA9PT0gJ0lOX1BST0dSRVNTJykge1xyXG4gICAgICAgICAgICAkKGA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gcHktMlwiIGRhdGEtdGFzay1pZD1cIiR7aXRlbS50YXNrX2lkfVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB0YXNrLXByb2dyZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtdC0wIG1iLTEgbmFtZVwiPtCSINC/0YDQvtCz0YDQtdGB0YHQtSA6ICR7aXRlbS5zdGF0dXMucmVhc29ufTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPmApLmFwcGVuZFRvKCRsaXN0KTtcclxuICAgICAgICB9IGVsc2UgaWYgKChpdGVtLnN0YXR1cy5zdGF0ZSA9PT0gJ0ZJTklTSEVEJyB8fCBpdGVtLnN0YXR1cy5zdGF0ZSA9PT0gJ0lOX1BST0dSRVNTJykgJiYgIWlzUnVucykge1xyXG4gICAgICAgICAgICAkKGA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gcHktMlwiIGRhdGEtdGFzay1pZD1cIiR7aXRlbS50YXNrX2lkfVwiPlxyXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiY2FyZC10aXRsZVwiPtCS0YvQv9C+0LvQvdC10L3QvdC+PC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1yaWdodFwiPiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtbXV0ZWRcIj4ke3ZpZXdVdGlscy5nZXRGb3JtYXR0ZWREYXRlVXRpbChwcm9ncmVzcy50aW1lc3RhbXApfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtc3VjY2Vzc1wiPjEwMCU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzLWJhciBiZy1zdWNjZXNzXCIgcm9sZT1cInByb2dyZXNzYmFyXCIgc3R5bGU9XCJ3aWR0aDogMTAwJTsgaGVpZ2h0OiA2cHg7XCIgYXJpYS12YWx1ZW5vdz1cIjI1XCIgYXJpYS12YWx1ZW1pbj1cIjBcIiBhcmlhLXZhbHVlbWF4PVwiMTAwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi13YXJuaW5nIGpzX2J0bi1kZWxldGUtdGFza1wiPtCj0LTQsNC70LjRgtGMPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5gKS5hcHBlbmRUbygkbGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghJCgnbGknLCAkbGlzdCkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICQoYDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBweS0yXCIgZGF0YS10YXNrLWlkPVwiJHtpdGVtLnRhc2tfaWR9XCI+XHJcbiAgICAgICAgICAgICAgICA8cD7QkiDRjdGC0L7QvCDRgNCw0LfQtNC10LvQtSDQvdC10YIg0L3QuCDQvtC00L3QvtC5INC30LDQtNCw0YfQuC48L3A+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2xpPmApLmFwcGVuZFRvKCRsaXN0KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cclxuZnVuY3Rpb24gaW5pdEhhbmRsZXJzKCkge1xyXG4gICAgY29uc3QgJGJ0blN0b3BUYXNrID0gJCgnLmpzX2J0bi1zdG9wLXRhc2snKTtcclxuICAgIGNvbnN0ICRidG5EZWxUYXNrID0gJCgnLmpzX2J0bi1kZWxldGUtdGFzaycpO1xyXG4gICAgY29uc3QgZ2V0VGFza0lEID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCBidG4gPSAkKGUudGFyZ2V0KTtcclxuICAgICAgICByZXR1cm4gYnRuLmNsb3Nlc3QoJ2xpJykuZGF0YSgndGFzay1pZCcpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkYnRuU3RvcFRhc2sub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCB0YXNrSWQgPSBnZXRUYXNrSUQoZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NUT1AgVGFzayBpZCcsIHRhc2tJZCk7XHJcbiAgICAgICAgVXNlclRhc2tNYW5hZ2VyLnN0b3BGb2xsb3dpbmdMaXN0KHRhc2tJZCkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIGdldFRhc2tzRGF0YSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJGJ0bkRlbFRhc2sub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCB0YXNrSWQgPSBnZXRUYXNrSUQoZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0RFTEVURSBpZCcsIHRhc2tJZCk7XHJcbiAgICAgICAgVXNlclRhc2tNYW5hZ2VyLmRlbGV0ZUZvbGxvd2luZ0xpc3QodGFza0lkKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgZ2V0VGFza3NEYXRhKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VGFza3NEYXRhKCkge1xyXG4gICAgVXNlclRhc2tNYW5hZ2VyLmdldE1ldGFkYXRhKCkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICBpZiAocmVzdWx0LnN0YXR1cy5zdGF0ZSA9PT0gJ29rJykge1xyXG4gICAgICAgICAgICBmaWxsTGlzdE1ldGEoJCgnLmZvbGxvdy10YXNrcy1ydW5zJyksIHJlc3VsdC5kYXRhLm1ldGEsICdpc1J1bnMnKTtcclxuICAgICAgICAgICAgZmlsbExpc3RNZXRhKCQoJy5mb2xsb3ctdGFza3Mtc3RvcHBlZCcpLCByZXN1bHQuZGF0YS5tZXRhKTtcclxuICAgICAgICAgICAgaW5pdEhhbmRsZXJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbml0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIGdldFRhc2tzRGF0YSgpO1xyXG4gICAgd2luZG93LlB1YlN1Yi5zdWJzY3JpYmUoQ09OU1QuZXZlbnRzLnRhc2tzLk5FV19UQVNLX0NSRUFURUQsIChldmVudE5hbWUsIGRhdGEpID0+IHtcclxuICAgICAgICBnZXRUYXNrc0RhdGEoKTtcclxuICAgIH0pO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3MvZm9sbG93L2ZvbGxvdy1zdGF0dXMuanMiLCJpbXBvcnQgKiBhcyBmb2xsb3dTdGF0dXMgZnJvbSAnLi9mb2xsb3ctc3RhdHVzJztcclxuaW1wb3J0IHtDT05TVH0gZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2NvbnN0cyc7XHJcbmltcG9ydCBVc2VyVGFza01hbmFnZXIgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2FwaS10YXNrLW1hbmFnZXInO1xyXG5pbXBvcnQgJ2JydXR1c2luLWpzb24tZm9ybXMnO1xyXG5cclxuY29uc3Qgc3RhdGUgPSB7XHJcbiAgICB1c2VybmFtZTogJycsXHJcbiAgICB1c2VyX2RlZmF1bHRfY29uZmlnOiB7XHJcbiAgICAgICAgdGFza19tb2RlOiAnU0FGRSdcclxuICAgIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIGZpbGxMaXN0TWV0YSgkbGlzdCwgZGF0YUFycmF5KSB7XHJcbiAgICBjb25zdCBpdGVtcyA9IGRhdGFBcnJheTtcclxuICAgIC8vIGNvbnN0IGRlZmF1bHRBdmF0YXJTcmMgPSAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9qTk5UNExFLnBuZyc7XHJcbiAgICAkbGlzdC5lbXB0eSgpLmFkZENsYXNzKCdib3JkZXItbGlnaHQtY29sb3InKTtcclxuICAgICQoJzxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBweS0yXCI+PGgzPlVzZXJUYXNrTWFuYWdlciAtPiBnZXRNZXRhZGF0YTwvaDM+PC9saT4nKS5hcHBlbmRUbygkbGlzdCk7XHJcbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgLy8gY29uc3QgaW5mbyA9IGl0ZW0uaW5mbztcclxuICAgICAgICAvLyBjb25zdCBjaGVja3BvaW50ID0gaXRlbS5jaGVja3BvaW50IHx8IGl0ZW07XHJcbiAgICAgICAgJChgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIHB5LTJcIiBkYXRhLXVzZXJuYW1lPVwiJHtpdGVtLnR5cGV9XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEtYm9keSBkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHRhc2stdHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkeyhpdGVtLnRhc2tfaWQpID8gYDxwIGNsYXNzPVwibXQtMCBtYi0xIG5hbWVcIj4ke2l0ZW0udGFza19pZH08L3A+YCA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgdGFzay1zdWJ0eXBlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7KGl0ZW0uc3VidHlwZSkgPyBgPHAgY2xhc3M9XCJtdC0wIG1iLTEgbmFtZVwiPiR7aXRlbS5zdWJ0eXBlfTwvcD5gIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB0YXNrLXByb2dyZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7KGl0ZW0uc3RhdHVzLnN0YXRlID09PSAnU1RPUFBFRCcpID8gYDxwIGNsYXNzPVwibXQtMCBtYi0xIG5hbWVcIj7QntGB0YLQsNC90L7QstC70LXQvdC+IC0gJHtpdGVtLnN0YXR1cy5yZWFzb259PC9wPmAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cImNvbCB0YXNrLXByb2dyZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7KGl0ZW0ucHJvZ3Jlc3MpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGA8cCBjbGFzcz1cIm10LTAgbWItMSBuYW1lXCI+0JrQvtC70LjRh9C10YHRgtCy0L4gLSAke2l0ZW0ucHJvZ3Jlc3MuY291bnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibXQtMCBtYi0xIG5hbWVcIj7Qn9GA0L7RhtC10L3RgiAtICR7aXRlbS5wcm9ncmVzcy5wZXJjZW50fTwvcD5gIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+LS0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5gKS5hcHBlbmRUbygkbGlzdCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsbExpc3RUeXBlcygkd3JhcHBlciwgZGF0YSkge1xyXG4gICAgY29uc3Qgc3RydWN0dXJlT2JqID0gZGF0YVsnc3RydWN0dXJlJ107XHJcblxyXG4gICAgJHdyYXBwZXIuZW1wdHkoKS5hZGRDbGFzcygnYm9yZGVyLWxpZ2h0LWNvbG9yJyk7XHJcbiAgICAkKCc8ZGl2IGNsYXNzPVwiXCI+0KLQuNC/INC30LDQtNCw0L3QuNGPPC9kaXY+PHNlbGVjdCBuYW1lPVwidGFzay10eXBlXCIgaWQ9XCJ0YXNrLXR5cGVzXCI+PC9zZWxlY3Q+JykuYXBwZW5kVG8oJHdyYXBwZXIpO1xyXG4gICAgZm9yIChjb25zdCB0eXBlIGluIHN0cnVjdHVyZU9iaikge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzdHJ1Y3R1cmU6ICcgKyBpdGVtKTtcclxuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHN0cnVjdHVyZU9iaiwgdHlwZSkpIHtcclxuICAgICAgICAgICAgJChgPG9wdGlvbiBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBweS0yXCIgJHsodHlwZSAhPT0gJ0ZPTExPV0lORycpID8gJ2Rpc2FibGVkPVwiZGlzYWJsZWRcIicgOiAnJ31cclxuICAgICAgICAgICAgICAgIHZhbHVlID0gXCIke0pTT04uc3RyaW5naWZ5KHt0eXBlLCBzdWJ0eXBlOiBzdHJ1Y3R1cmVPYmpbdHlwZV19KX1cIj5cclxuICAgICAgICAgICAgICAgICR7dHlwZX1cclxuICAgICAgICAgICAgPC9vcHRpb24+YCkuYXBwZW5kVG8oJCgnI3Rhc2stdHlwZXMnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUYXNrc0RhdGEoKSB7XHJcbiAgICBVc2VyVGFza01hbmFnZXIuZ2V0TWV0YWRhdGEoKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0LnN0YXR1cy5zdGF0ZSA9PT0gJ29rJykge1xyXG4gICAgICAgICAgICBmaWxsTGlzdE1ldGEoJCgnLmZvbGxvdy10YXNrcy1saXN0JyksIHJlc3VsdC5kYXRhLm1ldGEpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXREYXRhU3RlcDIodXNlcnNOYW1lKSB7XHJcbiAgICBjb25zb2xlLmxvZyh1c2Vyc05hbWUpO1xyXG4gICAgZ2V0VGFza3NEYXRhKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldERhdGFTdGVwMygpIHtcclxuICAgIGNvbnN0IHVzZXJzID0gJCgnI2ZvbGxvd2VycycpLnZhbCgpXHJcbiAgICAgICAgLnRyaW0oKVxyXG4gICAgICAgIC5yZXBsYWNlKC8gL2csICcnKVxyXG4gICAgICAgIC5zcGxpdCgnLCcpXHJcbiAgICAgICAgLmZpbHRlcihpID0+IGkubGVuZ3RoID4gMCk7XHJcblxyXG4gICAgc3RhdGVbJ3VzZXJfY3VzdG9tX2NvbmZpZyddID0ge1xyXG4gICAgICAgIHVzZXJzXHJcbiAgICB9O1xyXG4gICAgY29uc3QgZmlsbFNwZWVkTGlzdCA9IGZ1bmN0aW9uICgkd3JhcHBlciwgZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IHRhc2tNb2RlcyA9IGRhdGEuY2ZnICYmIGRhdGEuY2ZnLnRhc2tfbW9kZXM7XHJcbiAgICAgICAgY29uc3QgcmFkaW9CdG5SZWR1Y2VyID0gZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgc3dpdGNoIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdBR0dSRVNTSVZFJzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cIiR7aXRlbX1cIiBuYW1lPVwiY3VzdG9tUmFkaW9cIiB2YWx1ZT1cInNhZmVcIiBjbGFzcz1cImN1c3RvbS1jb250cm9sLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIiBmb3I9XCIke2l0ZW19XCI+PHN0cm9uZz7QkNCz0YDQtdGB0YHQuNCy0L3Ri9C5Ojwvc3Ryb25nPiAzMCDQv9C+0LTQv9C40YHQvtC6INCyINGH0LDRgTwvbGFiZWw+YDtcclxuICAgICAgICAgICAgICAgIC8vIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnTUlERExFJzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCIke2l0ZW19XCIgbmFtZT1cImN1c3RvbVJhZGlvXCIgdmFsdWU9XCJzYWZlXCIgY2xhc3M9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImN1c3RvbS1jb250cm9sLWxhYmVsXCIgZm9yPVwiJHtpdGVtfVwiPjxzdHJvbmc+0KHRgNC10LTQvdC40Lk6PC9zdHJvbmc+IDE4INC/0L7QtNC/0LjRgdC+0Log0LIg0YfQsNGBPC9sYWJlbD5gKTtcclxuICAgICAgICAgICAgICAgIC8vIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnU0FGRSc6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCIke2l0ZW19XCIgbmFtZT1cImN1c3RvbVJhZGlvXCIgdmFsdWU9XCJzYWZlXCIgY2xhc3M9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiIGNoZWNrZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIiBmb3I9XCIke2l0ZW19XCI+PHN0cm9uZz7QkdC10LfQvtC/0LDRgdC90YvQuTo8L3N0cm9uZz4gOSDQv9C+0LTQv9C40YHQvtC6INCyINGH0LDRgTwvbGFiZWw+YDtcclxuICAgICAgICAgICAgICAgIC8vIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGVmYXVsdCcsIGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZHJhdyBzcGVlZCByYWRpb0J0bicpO1xyXG4gICAgICAgICR3cmFwcGVyLmVtcHR5KCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIGluIHRhc2tNb2Rlcykge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnc3RydWN0dXJlOiAnICsgaXRlbSk7XHJcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGFza01vZGVzLCBpdGVtKSkge1xyXG4gICAgICAgICAgICAgICAgJChgPGRpdiBjbGFzcz1cImN1c3RvbS1jb250cm9sIGN1c3RvbS1yYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgJHtyYWRpb0J0blJlZHVjZXIoaXRlbSl9XHJcbiAgICAgICAgICAgIDwvZGl2PmApLmFwcGVuZFRvKCR3cmFwcGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gZHJhdyBjcml0ZXJpYVxyXG4gICAgVXNlclRhc2tNYW5hZ2VyLmdldERlZmF1bHRDb25maWdzKCkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2dldERlZmF1bHRDb25maWdzJyk7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMuc3RhdGUgPT09ICdvaycpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgZmlsbFNwZWVkTGlzdCgkKCcuanNfZm9sbG93LXNwZWVkJyksIHJlc3VsdC5kYXRhLmZvdW5kKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RlcFJlZHVjZXIoc3RlcE51bWJlcikge1xyXG4gICAgc3dpdGNoIChzdGVwTnVtYmVyKSB7XHJcbiAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICBnZXREYXRhU3RlcDIoc3RhdGUudXNlcm5hbWUpOyAvLyBbLi4ubmV3IFNldChzdGF0ZS51c2VybmFtZSldXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHN0YXRlKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICBnZXREYXRhU3RlcDMoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzdGVwTnVtYmVyKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc3RhdGUpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZGVmYXVsdCcsIHN0ZXBOdW1iZXIpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogSW5pdCBoZWFkZXJcclxuICovXHJcbmZ1bmN0aW9uIGluaXRTdGVwcygpIHtcclxuICAgIGNvbnN0ICRmb3JtID0gJCgnLmZvbGxvdy1mb3JtJyk7XHJcbiAgICAkKCcuanNfcHJvZmlsZS11c2VyLWZvbGxvdz4uY29udGFpbmVyJykucmVtb3ZlQ2xhc3MoJ2NvbnRhaW5lcicpO1xyXG5cclxuICAgICRmb3JtLmZpbmQoJ2ZpZWxkc2V0OmZpcnN0LWNoaWxkJykuZmFkZUluKCdzbG93Jyk7XHJcblxyXG4gICAgJGZvcm0uZmluZCgnaW5wdXRbdHlwZT1cInRleHRcIl0nKS5vbignZm9jdXMnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaW5wdXQtZXJyb3InKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIG5leHQgc3RlcFxyXG4gICAgJGZvcm0uZmluZCgnLmJ0bi1uZXh0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IHBhcmVudF9maWVsZHNldCA9ICQodGhpcykucGFyZW50cygnZmllbGRzZXQnKTtcclxuICAgICAgICBsZXQgbmV4dF9zdGVwID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCByYWRpb0J0bkFjdGl2ZSA9IHBhcmVudF9maWVsZHNldC5maW5kKCdpbnB1dFtuYW1lPVwidXNlckFjY291bnRSYWRpb1wiXTpjaGVja2VkJyk7XHJcblxyXG4gICAgICAgIGlmIChyYWRpb0J0bkFjdGl2ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJuYW1lID0gcmFkaW9CdG5BY3RpdmUucGFyZW50cygnbGknKS5kYXRhKCd1c2VybmFtZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdGVwUmVkdWNlcihwYXJlbnRfZmllbGRzZXQuaW5kZXgoKSwgc3RhdGUpO1xyXG5cclxuICAgICAgICBwYXJlbnRfZmllbGRzZXQuZmluZCgnaW5wdXRbdHlwZT1cInRleHRcIl0saW5wdXRbdHlwZT1cImVtYWlsXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLnZhbCgpID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaW5wdXQtZXJyb3InKTtcclxuICAgICAgICAgICAgICAgIG5leHRfc3RlcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaW5wdXQtZXJyb3InKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAobmV4dF9zdGVwKSB7XHJcbiAgICAgICAgICAgIHBhcmVudF9maWVsZHNldC5mYWRlT3V0KDQwMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5uZXh0KCkuZmFkZUluKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBwcmV2aW91cyBzdGVwXHJcbiAgICAkZm9ybS5maW5kKCcuYnRuLXByZXZpb3VzJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIHN0YXRlLnVzZXJuYW1lID0gWy4uLm5ldyBTZXQoc3RhdGUudXNlcm5hbWUpXTtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudHMoJ2ZpZWxkc2V0JykuZmFkZU91dCg0MDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5wcmV2KCkuZmFkZUluKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBzcGVlZCByYWRpby1idG4gZ3JvdXBcclxuICAgICQoJy5qc19mb2xsb3ctc3BlZWQgaW5wdXRbdHlwZT1yYWRpb10nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSAkKHRoaXMpLmF0dHIoJ3ZhbHVlJyk7XHJcbiAgICAgICAgc3RhdGUudXNlcl9kZWZhdWx0X2NvbmZpZyA9IHtcclxuICAgICAgICAgICAgdGFza19tb2RlOiB2YWx1ZS50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHN1Ym1pdFxyXG4gICAgJGZvcm0ub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgY29uc3QgZ2VuZGVyVmFsID0gJCh0aGlzKS5maW5kKCcuc2VsZWN0LWdlbmRlciBvcHRpb246c2VsZWN0ZWQnKS52YWwoKTtcclxuICAgICAgICBzdGF0ZS51c2VyX2RlZmF1bHRfY29uZmlnID0ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZS51c2VyX2RlZmF1bHRfY29uZmlnLFxyXG4gICAgICAgICAgICBjcml0ZXJpYToge1xyXG4gICAgICAgICAgICAgICAgZ2VuZGVyOiBnZW5kZXJWYWwudG9VcHBlckNhc2UoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBsaW1pdCA9IGRvY3VtZW50LmZvcm1zWydmb2xsb3ctZm9ybSddWydsaW1pdCddO1xyXG4gICAgICAgIGNvbnN0IGhhdmVfcG9zdHMgPSB7XHJcbiAgICAgICAgICAgIGZyb206IGRvY3VtZW50LmZvcm1zWydmb2xsb3ctZm9ybSddWydoYXZlX3Bvc3RzX2Zyb20nXS52YWx1ZSxcclxuICAgICAgICAgICAgdG86IGRvY3VtZW50LmZvcm1zWydmb2xsb3ctZm9ybSddWydoYXZlX3Bvc3RzX3RvJ10udmFsdWVcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGhhdmVfZm9sbG93ZXJzID0ge1xyXG4gICAgICAgICAgICBmcm9tOiBkb2N1bWVudC5mb3Jtc1snZm9sbG93LWZvcm0nXVsnaGF2ZV9mb2xsb3dlcnNfZnJvbSddLnZhbHVlLFxyXG4gICAgICAgICAgICB0bzogZG9jdW1lbnQuZm9ybXNbJ2ZvbGxvdy1mb3JtJ11bJ2hhdmVfZm9sbG93ZXJzX3RvJ10udmFsdWVcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGhhdmVfZm9sbG93aW5ncyA9IHtcclxuICAgICAgICAgICAgZnJvbTogZG9jdW1lbnQuZm9ybXNbJ2ZvbGxvdy1mb3JtJ11bJ2hhdmVfZm9sbG93aW5nc19mcm9tJ10udmFsdWUsXHJcbiAgICAgICAgICAgIHRvOiBkb2N1bWVudC5mb3Jtc1snZm9sbG93LWZvcm0nXVsnaGF2ZV9mb2xsb3dpbmdzX3RvJ10udmFsdWVcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAobGltaXQudmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGxpbWl0LmZvY3VzKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RhdGVbJ3VzZXJfZGVmYXVsdF9jb25maWcnXS5jcml0ZXJpYSA9IHtcclxuICAgICAgICAgICAgbGltaXQ6IGxpbWl0LnZhbHVlLFxyXG4gICAgICAgICAgICAndW5mb2xsb3dfdGhlbic6ICEhJCgnI3VuZm9sbG93X3RoZW46Y2hlY2tlZCcpLmxlbmd0aCxcclxuICAgICAgICAgICAgJ2ZvbGxvd19vbl9jbG9zZWRfcHJvZmlsZXMnOiAhISQoJyNmb2xsb3dfb25fY2xvc2VkX3Byb2ZpbGVzOmNoZWNrZWQnKS5sZW5ndGgsXHJcbiAgICAgICAgICAgIGhhdmVfcG9zdHMsXHJcbiAgICAgICAgICAgIGhhdmVfZm9sbG93ZXJzLFxyXG4gICAgICAgICAgICBoYXZlX2ZvbGxvd2luZ3NcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAkKHRoaXMpLmZpbmQoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdLGlucHV0W3R5cGU9XCJudW1iZXJcIl0saW5wdXRbdHlwZT1cImVtYWlsXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLnZhbCgpID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaW5wdXQtZXJyb3InKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2lucHV0LWVycm9yJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc3RhdGUudHlwZSA9ICdGT0xMT1dJTkcnO1xyXG4gICAgICAgIHN0YXRlLnN1YnR5cGUgPSAnRk9MTE9XSU5HX0xJU1QnO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdtYWtlIHJlcXVlc3QqKiAgcG9zdDogU3RhcnRGb2xsb3dpbmdMaXN0Jywgc3RhdGUpO1xyXG5cclxuICAgICAgICBVc2VyVGFza01hbmFnZXIucG9zdFN0YXJ0Rm9sbG93aW5nTGlzdChzdGF0ZSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzLnN0YXRlID09PSAnb2snKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcclxuICAgICAgICAgICAgICAgICQoJy5mb3JtLXN1Ym1pdC1maW5pc2gnKS5hZGRDbGFzcygnZC1ibG9jaycpXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbmQoJy5hbGVydCcpLmFwcGVuZChgPHA+dGFza19pZDogJHtyZXN1bHQuZGF0YS50YXNrX2lkfTwvcD5gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGFsZXJ0IGNsb3NlXHJcbiAgICAkKCcuZm9ybS1zdWJtaXQtZmluaXNoIC5jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0tc3VibWl0LWZpbmlzaCcpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJyk7XHJcbiAgICAgICAgJCgnI3YtcGlsbHMtcnVubmVkLXRhYicpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgd2luZG93LlB1YlN1Yi5wdWJsaXNoKENPTlNULmV2ZW50cy50YXNrcy5ORVdfVEFTS19DUkVBVEVEKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKlxyXG5mdW5jdGlvbiBmaXhTdGVwSW5kaWNhdG9yKG4pIHtcclxuICAgIC8vIFRoaXMgZnVuY3Rpb24gcmVtb3ZlcyB0aGUgXCJhY3RpdmVcIiBjbGFzcyBvZiBhbGwgc3RlcHMuLi5cclxuICAgIHZhciBpLCB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInN0ZXBcIik7XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHhbaV0uY2xhc3NOYW1lID0geFtpXS5jbGFzc05hbWUucmVwbGFjZShcIiBhY3RpdmVcIiwgXCJcIik7XHJcbiAgICB9XHJcbiAgICAvLy4uLiBhbmQgYWRkcyB0aGUgXCJhY3RpdmVcIiBjbGFzcyBvbiB0aGUgY3VycmVudCBzdGVwOlxyXG4gICAgeFtuXS5jbGFzc05hbWUgKz0gXCIgYWN0aXZlXCI7XHJcbn0qL1xyXG5cclxuZnVuY3Rpb24gbW9kaWZ5QWNjTGlzdCgpIHtcclxuICAgIC8vIGNvbnN0IHJhZGlvQnRuID0gKGlkeCkgPT4gYDxkaXYgY2xhc3M9XCJjb2wgY3VzdG9tLWNvbnRyb2wgY3VzdG9tLXJhZGlvIGpzX3VzZXItcmFkaW9cIj5cclxuICAgIC8vICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ1c2VyQWNjb3VudFJhZGlvXCIgaWQ9XCJjdXN0b21SYWRpby0ke2lkeH1cIiBjbGFzcz1cImN1c3RvbS1jb250cm9sLWlucHV0XCIgdmFsdWU9XCJcIj5cclxuICAgIC8vICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIiBmb3I9XCJjdXN0b21SYWRpby0ke2lkeH1cIj7Qn9C+0LTQv9C40YHQsNGC0YzRgdGPPC9sYWJlbD5cclxuICAgIC8vICAgICA8L2Rpdj5gO1xyXG4gICAgY29uc3QgcmFkaW9CdG5BcHBlbmQgPSAoaWR4KSA9PiBgPGRpdiBjbGFzcz1cIlwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInVzZXJBY2NvdW50UmFkaW9cIiBpZD1cImN1c3RvbVJhZGlvLSR7aWR4fVwiIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXQgZC1ub25lXCIgdmFsdWU9XCJcIj5cclxuICAgICAgICA8L2Rpdj5gO1xyXG4gICAgY29uc3QgcmFkaW9CdG5XcmFwID0gKGlkeCkgPT4gYDxsYWJlbCBjbGFzcz1cImFjY291bnRzLWxpc3QtLWxhYmVsLXdyYXBwZXIgY29sIG1iLTAgbWVkaWEgcHktM1wiIGZvcj1cImN1c3RvbVJhZGlvLSR7aWR4fVwiPjwvbGFiZWw+YDtcclxuICAgIGNvbnN0ICRhY2NvdW50c0xpc3QgPSAkKCcuYWNjb3VudHMtbGlzdCcpO1xyXG4gICAgY29uc3QgJGxpID0gJGFjY291bnRzTGlzdC5maW5kKCdsaS5tZWRpYScpO1xyXG4gICAgJGxpLmFkZENsYXNzKCdqc191c2VyLXJhZGlvJykucmVtb3ZlQ2xhc3MoJ3B5LTMgbWVkaWEnKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8ICRsaS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIC8vICQoJGxpW2ldKS5hcHBlbmQocmFkaW9CdG4oaSkpO1xyXG4gICAgICAgICQoJGxpW2ldKS53cmFwSW5uZXIocmFkaW9CdG5XcmFwKGkpKS5hcHBlbmQocmFkaW9CdG5BcHBlbmQoaSkpO1xyXG4gICAgfVxyXG4gICAgVXNlclRhc2tNYW5hZ2VyLmdldFRhc2tUeXBlcygpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzLnN0YXRlID09PSAnb2snKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIGZpbGxMaXN0VHlwZXMoJCgnLmpzX3Rhc2stdHlwZXMnKSwgcmVzdWx0LmRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5qc191c2VyLXJhZGlvJykub24oJ2NsaWNrJywgJ2lucHV0W3R5cGU9cmFkaW9dJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBjb25zdCAkcGFyZW50RmllbGRzZXQgPSAkKHRoaXMpLnBhcmVudHMoJ2ZpZWxkc2V0Jyk7XHJcbiAgICAgICAgJCgnbGkuYWN0aXZlJywgJHBhcmVudEZpZWxkc2V0KS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCdsaScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKCcuYnRuLW5leHQnLCAkcGFyZW50RmllbGRzZXQpLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLmNoZWNrYm94LWNlbGwnKS5vbignY2hhbmdlJywgKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygndmFsaWRhdGUnKTtcclxuICAgICAgICAvLyB1cGRhdGVTdGF0dXMoKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKiB3b3JraW5nIGRlbW8gOiBodHRwOi8vYnJ1dHVzaW4ub3JnL2pzb24tZm9ybXMvIzEzXHJcbmZ1bmN0aW9uIGZvcm1Gcm9tSnNvbigpIHtcclxuICAgIGNvbnN0IHNjaGVtYSA9IHtcclxuICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcclxuICAgICAgICBcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICBcInByb3AxXCI6IHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImludGVnZXJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcInByb3AyXCI6IHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImludGVnZXJcIixcclxuICAgICAgICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcInByb3AzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImludGVnZXJcIixcclxuICAgICAgICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcImNvbXBvc2l0ZTFcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXHJcbiAgICAgICAgICAgICAgICBcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmVzdGVkMVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJlcXVpcmVkXCI6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmVzdGVkMlwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJlcXVpcmVkXCI6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJyZXF1aXJlZFwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuZXN0ZWQxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuZXN0ZWQyXCJcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJjb21wb3NpdGUyXCI6IHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5lc3RlZDFcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXF1aXJlZFwiOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5lc3RlZDJcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXF1aXJlZFwiOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwicmVxdWlyZWRcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmVzdGVkMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmVzdGVkMlwiXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicmVxdWlyZWRcIjogW1xyXG4gICAgICAgICAgICBcInByb3AxXCIsXHJcbiAgICAgICAgICAgIFwicHJvcDJcIixcclxuICAgICAgICAgICAgXCJjb21wb3NpdGUxXCJcclxuICAgICAgICBdXHJcbiAgICB9O1xyXG4gICAgY29uc3QgQnJ1dHVzaW5Gb3JtcyA9IHdpbmRvdy5icnV0dXNpblsnanNvbi1mb3JtcyddO1xyXG4gICAgY29uc3QgYmYgPSBCcnV0dXNpbkZvcm1zLmNyZWF0ZShzY2hlbWEpO1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0xJyk7XHJcbiAgICBjb25zb2xlLmxvZyh3aW5kb3cuYnJ1dHVzaW4pO1xyXG4gICAgYmYucmVuZGVyKGNvbnRhaW5lciwgZGF0YSk7XHJcbn0qL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBpZiAoJCgnLmZvbGxvdycpLmxlbmd0aCkge1xyXG4gICAgICAgIGZvbGxvd1N0YXR1cy5pbml0KCk7XHJcbiAgICAgICAgaW5pdFN0ZXBzKCk7XHJcbiAgICAgICAgd2luZG93LlB1YlN1Yi5zdWJzY3JpYmUoQ09OU1QuZXZlbnRzLmluc3RhZ3JhbUFjY291bnMuSU5TVEFHUkFNX0FDQ09VTlNfUkVOREVSRUQsIChldmVudE5hbWUsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgbW9kaWZ5QWNjTGlzdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3MvZm9sbG93L2ZvbGxvdy5qcyIsIi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG4vLyBjb25zdCBoYW1idXJnZXJCdXR0b25DbHMgPSAnI2FzaWRlX21vYmlsZV9fYnV0dG9uJztcclxuLy8gY29uc3QgaGFtYnVyZ2VyTWVudUNscyA9ICcuYXNpZGUtYnVyZ2VyLW1lbnUnO1xyXG4vLyBjb25zdCBoYW1idXJnZXJNZW51T3BlbmVkQ2xhc3MgPSAnYnVyZ2VyLW1lbnUtLWNsb3NlZCc7XHJcbi8vIGNvbnN0IGhhbWJ1cmdlckJ1dHRvbkNsb3NlQ2xhc3MgPSAnYnVyZ2VyLW1lbnVfX2J1dHRvbi0tY2xvc2UnO1xyXG5jb25zdCBzZWxlY3RvcnNFbCA9IHtcclxuICAgIGxlZnRNZW51OiB7XHJcbiAgICAgICAgaGFtYnVyZ2VyQnV0dG9uQ2xzOiAnI2FzaWRlX21vYmlsZV9fYnV0dG9uJyxcclxuICAgICAgICBoYW1idXJnZXJNZW51Q2xzOiAnLmFzaWRlLWJ1cmdlci1tZW51JyxcclxuICAgICAgICBoYW1idXJnZXJNZW51T3BlbmVkQ2xhc3M6ICdidXJnZXItbWVudS0tY2xvc2VkJyxcclxuICAgICAgICBoYW1idXJnZXJCdXR0b25DbG9zZUNsYXNzOiAnYnVyZ2VyLW1lbnVfX2J1dHRvbi0tY2xvc2UnXHJcbiAgICB9LFxyXG4gICAgcmlnaHRNZW51OiB7XHJcbiAgICAgICAgaGFtYnVyZ2VyQnV0dG9uQ2xzOiAnI2hlYWRlcl9tb2JpbGVfdG9nZ2xlcicsXHJcbiAgICAgICAgaGFtYnVyZ2VyTWVudUNsczogJy5yLXNpZGUtYnVyZ2VyLW1lbnUnLFxyXG4gICAgICAgIGhhbWJ1cmdlck1lbnVPcGVuZWRDbGFzczogJ3Itc2lkZS1idXJnZXItbWVudS0tb3BlbicsXHJcbiAgICAgICAgaGFtYnVyZ2VyQnV0dG9uQ2xvc2VDbGFzczogJ2J1cmdlci1tZW51LXJpZ2h0X19idXR0b24tLWNsb3NlJ1xyXG4gICAgfSxcclxuICAgIHN1YkhlYWRlcjoge1xyXG4gICAgICAgIGhhbWJ1cmdlckJ1dHRvbkNsczogJyNoZWFkZXJfbW9iaWxlX3RvcGJhcl90b2dnbGVyJyxcclxuICAgICAgICBoYW1idXJnZXJNZW51Q2xzOiAnLnN1Yi1oZWFkZXInLFxyXG4gICAgICAgIGhhbWJ1cmdlck1lbnVPcGVuZWRDbGFzczogJ3N1Yi1oZWFkZXItLW9wZW4nLFxyXG4gICAgICAgIGhhbWJ1cmdlckJ1dHRvbkNsb3NlQ2xhc3M6ICdzdWItaGVhZGVyLWJ1dHRvbi0tY2xvc2UnXHJcbiAgICB9XHJcbn07XHJcblxyXG4vKipcclxuICogVG9nZ2xlIGhhbWJ1cmdlciBtZW51IHBvcG92ZXJcclxuICovXHJcbmZ1bmN0aW9uIHRvZ2dsZUhhbWJ1cmdlck1lbnUobWVudU5hbWUpIHtcclxuICAgIGNvbnN0IHtoYW1idXJnZXJNZW51Q2xzLCBoYW1idXJnZXJCdXR0b25DbHMsIGhhbWJ1cmdlckJ1dHRvbkNsb3NlQ2xhc3MsIGhhbWJ1cmdlck1lbnVPcGVuZWRDbGFzc30gPSBzZWxlY3RvcnNFbFttZW51TmFtZV07XHJcbiAgICAkKGhhbWJ1cmdlckJ1dHRvbkNscykudG9nZ2xlQ2xhc3MoaGFtYnVyZ2VyQnV0dG9uQ2xvc2VDbGFzcyk7XHJcbiAgICAkKGhhbWJ1cmdlck1lbnVDbHMpLnRvZ2dsZUNsYXNzKGhhbWJ1cmdlck1lbnVPcGVuZWRDbGFzcyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbml0IGhhbWJ1cmdlciBtZW51XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIGNvbnN0IGxlZnRNZW51ID0gJ2xlZnRNZW51JztcclxuICAgIGNvbnN0IHJpZ2h0TWVudSA9ICdyaWdodE1lbnUnO1xyXG4gICAgY29uc3Qgc3ViSGVhZGVyID0gJ3N1YkhlYWRlcic7XHJcblxyXG4gICAgJChzZWxlY3RvcnNFbFtsZWZ0TWVudV0uaGFtYnVyZ2VyQnV0dG9uQ2xzKS5vbignY2xpY2snLCB0b2dnbGVIYW1idXJnZXJNZW51LmJpbmQodGhpcywgbGVmdE1lbnUpKTtcclxuICAgICQoc2VsZWN0b3JzRWxbcmlnaHRNZW51XS5oYW1idXJnZXJCdXR0b25DbHMpLm9uKCdjbGljaycsIHRvZ2dsZUhhbWJ1cmdlck1lbnUuYmluZCh0aGlzLCByaWdodE1lbnUpKTtcclxuICAgICQoc2VsZWN0b3JzRWxbc3ViSGVhZGVyXS5oYW1idXJnZXJCdXR0b25DbHMpLm9uKCdjbGljaycsIHRvZ2dsZUhhbWJ1cmdlck1lbnUuYmluZCh0aGlzLCBzdWJIZWFkZXIpKTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL2hlYWRlci9idXJnZXItbWVudS9idXJnZXItbWVudS5qcyIsIi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy91c2VyJztcclxuaW1wb3J0IFB1YlN1YiBmcm9tICdwdWJzdWItanMnOyAvLyBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9wdWJzdWItanNcclxuaW1wb3J0IHtDT05TVH0gZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2NvbnN0cyc7XHJcblxyXG5jb25zdCBzZWxlY3RvckxvZ2luU3RhdGUgPSAnLmpzX21lc3NhZ2VfbG9nZ2VkLS10ZXh0JztcclxuY29uc3Qgc2VsZWN0b3JFbWFpbENvbmZpcm1TdGF0ZSA9ICcuanNfZW1haWwtY29uZmlybS0tdGV4dCc7XHJcbmNvbnN0IGNsb3NlQ2xhc3MgPSAnZC1ub25lJztcclxuY29uc3Qgb3BlbmVkQ2xhc3MgPSAnZC1ibG9jayc7XHJcblxyXG5mdW5jdGlvbiBlbWFpbE5vdENvbmZpcm1lZCgpIHtcclxuICAgIGNvbnN0ICRlbWFpbG5Nc2cgPSAkKHNlbGVjdG9yRW1haWxDb25maXJtU3RhdGUpO1xyXG4gICAgJGVtYWlsbk1zZy50ZXh0KCcqKmVtYWlsTm90Q29uZmlybWVkKiogRW1haWwg0L3QtSDQv9C+0LTRgtCy0LXRgNC20LTQtdC9LicpLmNzcygnY29sb3InLCAnbGlnaHRjb3JhbCcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbkxvZ2luU3Vic2NyaWJlKG1zZywgZGF0YSkge1xyXG4gICAgLy8gY29uc29sZS5sb2cobXNnLCBkYXRhKTtcclxuICAgICQoQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyTmF2TG9naW5CdG4pLmFkZENsYXNzKGNsb3NlQ2xhc3MpLnJlbW92ZUNsYXNzKG9wZW5lZENsYXNzKTtcclxuICAgICQoQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyUmVnQnRuKS5hZGRDbGFzcyhjbG9zZUNsYXNzKS5yZW1vdmVDbGFzcyhvcGVuZWRDbGFzcyk7XHJcbiAgICAkKENPTlNULnVpU2VsZWN0b3JzLmhlYWRlckxvZ2luQm94KS5hZGRDbGFzcyhjbG9zZUNsYXNzKS5yZW1vdmVDbGFzcyhvcGVuZWRDbGFzcyk7XHJcblxyXG4gICAgJCgnLm5hdi1saW5rLmpzX2xvZ091dCcpLmFkZENsYXNzKG9wZW5lZENsYXNzKS5yZW1vdmVDbGFzcyhjbG9zZUNsYXNzKTsgLy8gc2hvd1xyXG4gICAgY29uc3QgJGxvZ2luTXNnID0gJChzZWxlY3RvckxvZ2luU3RhdGUpO1xyXG4gICAgJGxvZ2luTXNnLnRleHQoJyoqb25Mb2dpblN1YnNjcmliZSoqINCy0Ysg0LfQsNC70L7Qs9C40L3QuNC70LjRgdGMINCyIEx1eGdyYW0g0YPRgdC/0LXRiNC90L4nKS5jc3MoJ2NvbG9yJywgJ2xpZ2h0Ymx1ZScpO1xyXG4gICAgY29uc3QgaXNFbWFpbENvbmZpcm1lZCA9IFVzZXIuaXNFbWFpbENvbmZpcm1lZCgpO1xyXG4gICAgaWYgKCFpc0VtYWlsQ29uZmlybWVkKSB7XHJcbiAgICAgICAgZW1haWxOb3RDb25maXJtZWQoKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0xvZ291dCgpIHtcclxuICAgIC8vIGNoZWNrIGlzIGxvZ2dlZFxyXG4gICAgY29uc3QgaXNMb2dnZWQgPSBVc2VyLmlzTG9nZ2VkSW4oKTtcclxuICAgIGNvbnN0IGlzRW1haWxDb25maXJtZWQgPSBVc2VyLmlzRW1haWxDb25maXJtZWQoKTtcclxuICAgIGlmICghaXNFbWFpbENvbmZpcm1lZCkge1xyXG4gICAgICAgIGVtYWlsTm90Q29uZmlybWVkKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNMb2dnZWQpIHtcclxuICAgICAgICAkKCcubmF2LWxpbmsuanNfbG9nT3V0JykucGFyZW50KCkuc2hvdygpO1xyXG4gICAgICAgICQoJy5qc19lbWFpbC1jb25maXJtLS10ZXh0JykudGV4dCgn0LLRiyDQt9Cw0LvQvtCz0LjQvdC40LvQuNGB0Ywg0YPRgdC/0LXRiNC90L4nKTtcclxuICAgICAgICBjb25zdCBvbGRVUkwgPSBkb2N1bWVudC5yZWZlcnJlcjtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhvbGRVUkwpO1xyXG4gICAgICAgIGlmIChvbGRVUkwuaW5jbHVkZXMoJ2NvbmZpcm0tcmVnaXN0cmF0aW9uJykpIHtcclxuICAgICAgICAgICAgJCgnLmpzX21lc3NhZ2VfbG9nZ2VkLS10ZXh0JykudGV4dCgn0LLRiyDQv9C+0LTRgtCy0LXRgNC00LjQu9C4INGA0LXQs9C40YHRgtGA0LDRhtC40Y4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb25Mb2dpblN1YnNjcmliZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKHNlbGVjdG9yTG9naW5TdGF0ZSkudGV4dCgn0J/RgNC40LLQtdGCINCw0L3QvtC90LjQvNC90YvQuSDQv9C+0LvRjNC30L7QstCw0YLQtdC70YwnKTtcclxuICAgICAgICAkKHNlbGVjdG9yRW1haWxDb25maXJtU3RhdGUpLmVtcHR5KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbml0IGhlYWRlclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRIZWFkZXIoKSB7XHJcbiAgIC8vIGNoZWNrIG90aGVyIGhhbmRsZXIgaW4gbG9naW4tZm9ybS5qc1xyXG4gICAgY29uc3QgJGxvZ2luQm94ID0gJChDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJMb2dpbkJveCk7XHJcbiAgICBjb25zdCAkcmVnaXN0ZXJCb3ggPSAkKENPTlNULnVpU2VsZWN0b3JzLmhlYWRlclJlZ0JveCk7XHJcblxyXG4gICAgUHViU3ViLnN1YnNjcmliZShDT05TVC5ldmVudHMuVVNFUl9MT0dHRUQsIG9uTG9naW5TdWJzY3JpYmUpO1xyXG5cclxuICAgIHNob3dMb2dvdXQoKTtcclxuXHJcbiAgICAkKENPTlNULnVpU2VsZWN0b3JzLmhlYWRlclJlZ0J0bikub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICRsb2dpbkJveC5oaWRlKCk7XHJcbiAgICAgICAgJHJlZ2lzdGVyQm94LmNzcyh7J3RvcCc6IDAsICdyaWdodCc6IDB9KVxyXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ2JnLWxpZ2h0IGJvcmRlciBtdC01IG14LWF1dG8gcG9zaXRpb24tYWJzb2x1dGUgcHgtMyBkLWJsb2NrJylcclxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyTmF2TG9naW5CdG4pLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAkbG9naW5Cb3guYWRkQ2xhc3MoJ2QtYmxvY2snKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgJHJlZ2lzdGVyQm94LmFkZENsYXNzKCdkLW5vbmUnKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpO1xyXG4gICAgfSk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9oZWFkZXIvaGVhZGVyLmpzIiwiLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3VzZXInO1xyXG4vLyBpbXBvcnQgU3Bpbm5lciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvc3Bpbm5lcic7XHJcbmltcG9ydCB2aWV3VXRpbHMgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3ZpZXcnO1xyXG4vLyBpbXBvcnQgUHViU3ViIGZyb20gJ3B1YnN1Yi1qcyc7XHJcbmltcG9ydCB7Q09OU1R9IGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMnO1xyXG5cclxuLy8g0J/QvtGB0LvQtSDQtNC+0LHQsNCy0LvQtdC90LjRjyDQsNC60LrQsNGD0L3RgtCwINGB0L3QvtCy0LAg0LTQtdGA0L3Rg9GC0Ywg0JzQldCi0JAg0Lgg0L/QtdGA0LXRgNC40YHQvtCy0LDRgtGMINGB0L/QuNGB0L7QuiDQsNC60LrQsNGD0L3RgtC+0LJcclxuY29uc3QgYWRkSW5zdGFncmFtQWNjb3VudCA9IChuZXdGb3JtRGF0YSkgPT4ge1xyXG4gICAgY29uc3QgY2JFcnJvciA9IChyZXN1bHQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnRVJST1InLCByZXN1bHQpO1xyXG4gICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UoJCgnLmVycm9yLW1zZycpLFxyXG4gICAgICAgICAgICByZXN1bHQuc3RhdHVzLnN0YXRlLFxyXG4gICAgICAgICAgICByZXN1bHQuc3RhdHVzLm1lc3NhZ2UgfHwgJ0xvZ2luIGVycm9yJyk7XHJcbiAgICAgICAgLy8gJChfbG9naW5Cb3gpLmFkZENsYXNzKGNsb3NlQ2xhc3MpLnJlbW92ZUNsYXNzKG9wZW5lZENsYXNzKTtcclxuICAgIH07XHJcblxyXG4gICAgVXNlci5hZGRJbnN0YWdyYW1BY2NvdW50KG5ld0Zvcm1EYXRhLCBjYkVycm9yKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5zdGF0dXMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LCByZXN1bHQuc3RhdHVzKTtcclxuICAgICAgICAgICAgLy8gZGVidWdnZXI7XHJcbiAgICAgICAgICAgIGNvbnN0ICRtc2dMaXN0ID0gJCgnLmFjY291bnRzLWxpc3QnKTtcclxuICAgICAgICAgICAgJG1zZ0xpc3QuZW1wdHkoKTtcclxuICAgICAgICAgICAgLy8gdG9kbyA6IHJlbG9hZCBsaXN0XHJcbiAgICAgICAgICAgIC8vIGZpbGxMaXN0KCRtc2dMaXN0LCByZXN1bHQuZGF0YS5hY2NvdW50cyk7XHJcbiAgICAgICAgICAgIC8vIGFkZExpc3RIYW5kbGVyKCk7XHJcblxyXG4gICAgICAgICAgICAvLyB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKCR0ZXh0QXJlYURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAvLyAgICAgcmVzdWx0LnN0YXR1cy5zdGF0ZSxcclxuICAgICAgICAgICAgLy8gICAgIHJlc3VsdC5zdGF0dXMubWVzc2FnZSB8fCAnTG9naW4gZXJyb3InKTtcclxuICAgICAgICAgICAgLy8gJChfbG9naW5Cb3gpLmFkZENsYXNzKGNsb3NlQ2xhc3MpLnJlbW92ZUNsYXNzKG9wZW5lZENsYXNzKTtcclxuICAgICAgICB9XHJcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgLy8gdG9kbzogcmVuZGVyIGZvciB1c2VyXHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdzdWJtaXQnLCBuZXdGb3JtRGF0YSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBhZGRPbkxvYWRIYW5kbGVycygpIHtcclxuICAgIC8vICQoJy5qc19yZXBlYXQtc2VjdXJpdHktY29kZScpLm9uKCdjbGljaycsIChlKSA9PiB7XHJcblxyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgJCgnLmpzX2FkZC1pbnN0YWdyYW0tYWNjb3VudCcpLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYnRuID0gJChlLnRhcmdldCk7XHJcbiAgICAgICAgY29uc3QgJG1vZGFsQm9keSA9IGJ0bi5jbG9zZXN0KCcubW9kYWwnKS5maW5kKCcubW9kYWwtZGlhbG9nIC5tb2RhbC1ib2R5Jyk7XHJcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSAkbW9kYWxCb2R5LmZpbmQoJ2lucHV0W25hbWU9XCJ1c2VybmFtZVwiXScpLnZhbCgpLnRyaW0oKTtcclxuICAgICAgICBjb25zdCBwYXNzd29yZCA9ICRtb2RhbEJvZHkuZmluZCgnaW5wdXRbbmFtZT1cInBhc3NcIl0nKS52YWwoKS50cmltKCk7XHJcbiAgICAgICAgY29uc3QgJGZvcm0gPSAkKCdmb3JtJywgJG1vZGFsQm9keSk7XHJcbiAgICAgICAgY29uc3QgZm9ybSA9ICRmb3JtLmdldCgwKTtcclxuICAgICAgICBjb25zdCBjc3NWYWxpZGF0aW9uQ2xhc3MgPSAnZm9ybS12YWxpZGF0aW9uJztcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAvLyBjb25zdCB2YWxpZGF0b3IgPSBuZXcgVmFsaWRhdG9yKCRmb3JtKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWxpZGF0b3IudmFsaWRhdGUoKSk7XHJcbiAgICAgICAgaWYgKGZvcm0uY2hlY2tWYWxpZGl0eSgpKSB7XHJcbiAgICAgICAgICAgIGFkZEluc3RhZ3JhbUFjY291bnQoe3VzZXJuYW1lLCBwYXNzd29yZH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIEhpZ2hsaWdodCBlcnJvcnNcclxuICAgICAgICAgICAgaWYgKGZvcm0ucmVwb3J0VmFsaWRpdHkpIHtcclxuICAgICAgICAgICAgICAgIGZvcm0ucmVwb3J0VmFsaWRpdHkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkZm9ybS5hZGRDbGFzcyhjc3NWYWxpZGF0aW9uQ2xhc3MpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF1c2VybmFtZSB8fCAhcGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vdCB2YWxpZCAtIEVtcHR5IGZpZWxkcycpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZExpc3RIYW5kbGVyKC8qIHVzZXJuYW1lKi8pIHtcclxuICAgIC8vICQoJyN5b3VyTW9kYWxJRCcpLm9uKCdzaG93LmJzLm1vZGFsJywgZnVuY3Rpb24oZSkge1xyXG4gICAgLy8gICAgIHZhciB5b3VycGFyYW1ldGVyID0gZS5yZWxhdGVkVGFyZ2V0LmRhdGFzZXQueW91cnBhcmFtZXRlcjtcclxuICAgIC8vICAgICAvLyBEbyBzb21lIHN0dWZmIHcvIGl0LlxyXG4gICAgLy8gfSk7XHJcbiAgICBsZXQgY2hlY2twb2ludFR5cGUgPSAnJztcclxuXHJcbiAgICAkKCcuanNfcGFzcy1jaGVja3BvaW50LWJ0bicpLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgJGJ1dHRvbiA9ICQoZS50YXJnZXQpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gJGJ1dHRvbi5kYXRhKCd1c2VybmFtZScpO1xyXG4gICAgICAgIGNoZWNrcG9pbnRUeXBlID0gJGJ1dHRvbi5kYXRhKCdjaGVja3BvaW50VHlwZScpIHx8IGNoZWNrcG9pbnRUeXBlO1xyXG4gICAgICAgIC8vICQoJyNzZWN1cml0eS1jb2RlJykuZGF0YSgnY2hlY2twb2ludFR5cGUnLCBjaGVja3BvaW50VHlwZSk7XHJcbiAgICAgICAgLy8gdG9kbyBhZGQgJ2NoZWNrcG9pbnRUeXBlJyB0byBtb2RhbFxyXG4gICAgICAgIGNvbnN0IHNlbmRUbyA9IChjaGVja3BvaW50VHlwZSA9PT0gJ1BIT05FJykgPyAn0YLQtdC70LXRhNC+0L0nIDogJ2VtYWlsJztcclxuICAgICAgICAvLyBTcGlubmVyLnN0YXJ0KCRidXR0b24sICdmYS1rZXknKTtcclxuXHJcbiAgICAgICAgaWYgKGNoZWNrcG9pbnRUeXBlID09PSAnRU1BSUxfT1JfUEhPTkUnKSB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAvLyDQuNC90L/Rg9GC0Ysg0YHQv9GA0Y/RgtCw0L3RiyxcclxuICAgICAgICAgICAgLy8g0L/QvtC60LDQt9Cw0YLRjCDRgdC10YDRi9C1INC/0LXRgNC10LrQu9GO0YfQsNGC0LXQu9C4ICjQstGL0LHRgNCw0Lsg0YLQuNC/KVxyXG4gICAgICAgICAgICAvLyDQtdGB0YLRjCDQutC90L7Qv9C60LAg0JfQsNC/0YDQvtGB0LjRgtGMINC60L7QtCDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjQtVxyXG4gICAgICAgICAgICAkKCcjc2VjdXJpdHktY29kZS1waG9uZU9yZW1haWwnKS5tb2RhbCh7c2hvdzogdHJ1ZSwgdXNlcm5hbWV9KTtcclxuXHJcbiAgICAgICAgICAgIC8vINC90LUg0L7RgtC/0YDQsNCy0LvRj9C10Lwg0YDQtdC60LLQtdGB0YJcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgVXNlci5nZXRTZWN1cml0eUtleSh1c2VybmFtZSwgY2hlY2twb2ludFR5cGUpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2VjdXJpdHlLZXkgcmVjZWl2ZWQ6JywgcmVzdWx0LnN0YXR1cy5zdGF0ZSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzLnN0YXRlID09PSAnb2snKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkbW9kYWwgPSAkKCcjc2VjdXJpdHktY29kZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNwaW5uZXIuc3RvcCgkYnV0dG9uLCAnZmEta2V5Jyk7XHJcbiAgICAgICAgICAgICAgICAkKCcuanNfc3VjY2Vzcy1mZWVkYmFjaycsICRtb2RhbCkuZW1wdHkoKS50ZXh0KGDQmtC70Y7RhyDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjRjyDQsdGL0Lsg0L7RgtC/0YDQsNCy0LvQtdC9INCS0LDQvCDQvdCwICR7c2VuZFRvfWApO1xyXG5cclxuICAgICAgICAgICAgICAgICQoJyNzZWN1cml0eS1jb2RlJykuYXR0cignZGF0YS11c2VybmFtZScsIHVzZXJuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gaW5zaWRlIG1vZGFsXHJcbiAgICAkKCcuanNfY29uZmlybS1zZWN1cml0eS1jb2RlJykub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCBidG4gPSAkKGUudGFyZ2V0KTtcclxuICAgICAgICBjb25zdCB1c2VybmFtZSA9IGJ0bi5jbG9zZXN0KCcjc2VjdXJpdHktY29kZScpLmRhdGEoJ3VzZXJuYW1lJyk7XHJcbiAgICAgICAgY29uc3QgJGtleUlucHV0ID0gYnRuLmNsb3Nlc3QoJy5tb2RhbCcpLmZpbmQoJy5tb2RhbC1kaWFsb2cgZm9ybSBpbnB1dC5qc19jb25maXJtLWtleScpO1xyXG4gICAgICAgIGNvbnN0IGtleSA9ICRrZXlJbnB1dC52YWwoKS50cmltKCk7XHJcbiAgICAgICAgY29uc3QgJG1vZGFsID0gYnRuLmNsb3Nlc3QoJy5tb2RhbCcpO1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIGlmIChrZXkubGVuZ3RoICE9PSA2KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgVXNlci5jb25maXJtU2VjdXJpdHlLZXkoa2V5LCB1c2VybmFtZSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzLnN0YXRlICE9PSAnb2snKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2pzX2NvbmZpcm06JywgcmVzdWx0LnN0YXR1cy5zdGF0ZSwgJ2Nsb3NlIG1vZGFsJyk7XHJcbiAgICAgICAgICAgICRtb2RhbC5tb2RhbCgnaGlkZScpO1xyXG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2VycicpO1xyXG4gICAgICAgICAgICAkKCcuanNfc3VjY2Vzcy1mZWVkYmFjaycsICRtb2RhbCkudGV4dCgn0JfQsNC/0YDQvtGBINC90LUg0L7RgtC/0YDQsNCy0LvQtdC9JykuY3NzKCdjb2xvcicsICdyZWQnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJ2Zvcm0gaW5wdXRbbWlubGVuZ3RoXScpLm9uKCdibHVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGxlbiA9ICQodGhpcykudmFsKCkudHJpbSgpLmxlbmd0aDtcclxuICAgICAgICBjb25zdCBtaW5MZW4gPSBOdW1iZXIoJCh0aGlzKS5hdHRyKCdtaW5sZW5ndGgnKSk7XHJcbiAgICAgICAgLy8gY29uc3QgbWVzc2FnZSA9IG1pbkxlbiA8PSBsZW4gPyAnJyA6IG1pbkxlbiArICcgY2hhcmFjdGVycyBtaW5pbXVtJztcclxuICAgICAgICBpZiAobWluTGVuICE9PSBsZW4pIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2JvcmRlckNvbG9yJywgJ3JlZCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQodGhpcykuY3NzKCdib3JkZXJDb2xvcicsICcjY2VkNGRhJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMuc2V0Q3VzdG9tVmFsaWRpdHkobWVzc2FnZSlcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9uSGlkZU1vZGFsKGUpIHtcclxuICAgICAgICBjb25zdCAkbW9kYWwgPSAkKGUudGFyZ2V0KTtcclxuICAgICAgICAkbW9kYWwuZmluZCgnLmZpcnN0LXN0ZXAnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgJG1vZGFsLmZpbmQoJy5zZWNvbmQtc3RlcCcpLmFkZENsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAkKCcuanNfY29uZmlybS1rZXknKS52YWwoJycpO1xyXG4gICAgICAgICQoJy5qc19zdWNjZXNzLWZlZWRiYWNrJywgJG1vZGFsKS5yZW1vdmVBdHRyKCdzdHlsZScpLmVtcHR5KCk7XHJcbiAgICB9XHJcbiAgICAkKCcjc2VjdXJpdHktY29kZS1waG9uZU9yZW1haWwnKS5vbignaGlkZS5icy5tb2RhbCcsIG9uSGlkZU1vZGFsKTtcclxuICAgICQoJyNzZWN1cml0eS1jb2RlJykub24oJ2hpZGUuYnMubW9kYWwnLCBvbkhpZGVNb2RhbCk7XHJcblxyXG4gICAgLy8gXCJQSE9ORV9PUl9FTUFJTFwiIG1vZGFsXHJcbiAgICAkKCcuanNfZ2V0LXNlY3VyaXR5LWNvZGUtcGhvbmVPcmVtYWlsJykub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCAkbW9kYWwgPSAkKCcjc2VjdXJpdHktY29kZS1waG9uZU9yZW1haWwnKTtcclxuICAgICAgICBjb25zdCB0eXBlU2VsZWN0ZWQgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCRtb2RhbCkuZmluZCgnLmpzX2J0bi10eXBlLXN3aXRjaGVyIGlucHV0OmNoZWNrZWQnKTtcclxuICAgICAgICBjb25zdCBjaGVja3BvaW50VHlwZUFjdGl2ZSA9IHR5cGVTZWxlY3RlZC52YWwoKTtcclxuICAgICAgICBjb25zdCBzZW5kVG8gPSAoY2hlY2twb2ludFR5cGVBY3RpdmUgPT09ICdQSE9ORScpID8gJ9GC0LXQu9C10YTQvtC9JyA6ICdlbWFpbCc7XHJcbiAgICAgICAgY29uc3QgbW9kYWxDb25maWcgPSAkbW9kYWwuZGF0YSgpWydicy5tb2RhbCddLl9jb25maWc7XHJcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSBtb2RhbENvbmZpZy51c2VybmFtZTtcclxuICAgICAgICBVc2VyLmdldFNlY3VyaXR5S2V5KHVzZXJuYW1lLCBjaGVja3BvaW50VHlwZUFjdGl2ZSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIC8vINC/0YDQuCDQvdCw0LbQsNGC0LjQuCBcItCX0LDQv9GA0L7RgdC40YLRjCDQutC+0LQg0L/QvtC00YLQstC10YDQttC00LXQvdC40LVcIiAtINC+0YLQv9Cw0YDQu9GP0LXRgtGB0Y8g0YDQtdC60LLQtdGB0YIgXCLRgdGC0LDRgNGCINGH0LXQutC/0L7QuNC90YJcIiDQv9C+0Y/QstC70Y/QtdGC0YzRgdGPINC40L3Qv9GD0YIg0Lgg0LrQvdC+0L/QutCwINC00YDRg9Cz0LjRhSDRgtC40L/QsNGFXHJcbiAgICAgICAgICAgIC8vIGdldCBzZWxlY3RlZCBidXR0b25cclxuXHJcbiAgICAgICAgICAgIC8vINC/0LXRgNC10LrQu9GO0YfQsNGC0LXQu9GMKNGB0LXRgNGL0LkpINC4INC60L3QvtC/0LrQsCBcItCX0LDQv9GA0L7RgdC40YLRjCDQutC+0LQg0L/QvtC00YLQstC10YDQttC00LXQvdC40LVcIiDQuNGB0YfQtdC30LDRjtGCXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZWN1cml0eUtleSByZWNlaXZlZDonLCByZXN1bHQuc3RhdHVzLnN0YXRlKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMuc3RhdGUgPT09ICdvaycpIHtcclxuICAgICAgICAgICAgICAgICQoJy5maXJzdC1zdGVwJywgJG1vZGFsKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcuc2Vjb25kLXN0ZXAnLCAkbW9kYWwpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgICAgICQoJy5qc19zdWNjZXNzLWZlZWRiYWNrJywgJG1vZGFsKS5lbXB0eSgpLnRleHQoYNCa0LvRjtGHINC/0L7QtNGC0LLQtdGA0LbQtNC10L3QuNGPINCx0YvQuyDQvtGC0L/RgNCw0LLQu9C10L0g0JLQsNC8INC90LAgJHtzZW5kVG99YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaWxsTGlzdCgkbGlzdCwgZGF0YUFycmF5KSB7XHJcbiAgICBjb25zdCBpdGVtcyA9IGRhdGFBcnJheTtcclxuICAgIGNvbnN0IGNMaXN0ID0gJGxpc3Q7XHJcbiAgICBjb25zdCBkZWZhdWx0QXZhdGFyU3JjID0gJ2h0dHBzOi8vaS5pbWd1ci5jb20vak5OVDRMRS5wbmcnO1xyXG4gICAgY29uc3QgaW5zZXJ0SXRlbSA9IChkYXRhLCB0ZXh0LCBjc3NDbHMpID0+IHtcclxuICAgICAgICBjb25zdCBsaVRwbCA9IGAkeyhkYXRhKVxyXG4gICAgICAgICAgICA/IGA8bGkgY2xhc3M9XCJsaXN0LWlubGluZS1pdGVtICR7Y3NzQ2xzfVwiPjxzcGFuIGNsYXNzPVwiZmlndXJlXCI+JHtkYXRhfTwvc3Bhbj48c3Bhbj4ke3RleHR9PC9zcGFuPjwvbGk+YFxyXG4gICAgICAgICAgICA6IGA8bGkgY2xhc3M9XCJsaXN0LWlubGluZS1pdGVtICR7Y3NzQ2xzfVwiPjxzcGFuIGNsYXNzPVwiZmlndXJlXCI+MDwvc3Bhbj48c3Bhbj4ke3RleHR9PC9zcGFuPjwvbGk+YH1gO1xyXG4gICAgICAgIHJldHVybiBsaVRwbDtcclxuICAgIH07XHJcbiAgICBjb25zdCBzdGF0cyA9IChpbmZvKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdHBsID0gYDxkaXYgY2xhc3M9XCJjb2xcIj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1pbmxpbmUgdGV4dC1jZW50ZXIgY291bnRzLWxpc3RcIj5cclxuICAgICAgICAgICAgJHsoaW5mbylcclxuICAgICAgICAgICAgICA/IGAke2luc2VydEl0ZW0oaW5mb1snbWVkaWFfY291bnQnXSwgJ9Cf0YPQsdC70LjQutCw0YbQuNC4JywgJ21lZGlhLWNvdW50Jyl9XHJcbiAgICAgICAgICAgICAgICAke2luc2VydEl0ZW0oaW5mb1snZm9sbG93ZXJfY291bnQnXSwgJ9Cf0L7QtNC/0LjRgdGH0LjQutC4JywgJ2ZvbGxvd2VyLWNvdW50Jyl9XHJcbiAgICAgICAgICAgICAgICAke2luc2VydEl0ZW0oaW5mb1snZm9sbG93aW5nX2NvdW50J10sICfQn9C+0LTQv9C40YHQutC4JywgJ2ZvbGxvd2luZy1jb3VudCcpfWBcclxuICAgICAgICAgICAgICA6IGAke2luc2VydEl0ZW0oZmFsc2UsICfQn9GD0LHQu9C40LrQsNGG0LjQuCcsICdtZWRpYS1jb3VudCcpfVxyXG4gICAgICAgICAgICAgICAgJHtpbnNlcnRJdGVtKGZhbHNlLCAn0J/QvtC00L/QuNGB0YfQuNC60LgnLCAnZm9sbG93ZXItY291bnQnKX1cclxuICAgICAgICAgICAgICAgICR7aW5zZXJ0SXRlbShmYWxzZSwgJ9Cf0L7QtNC/0LjRgdC60LgnLCAnZm9sbG93aW5nLWNvdW50Jyl9YFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+YDtcclxuICAgICAgICByZXR1cm4gdHBsO1xyXG4gICAgfTtcclxuICAgIGNMaXN0LmVtcHR5KCkuYWRkQ2xhc3MoJ2JvcmRlci1saWdodC1jb2xvcicpO1xyXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGluZm8gPSBpdGVtLmluZm87XHJcbiAgICAgICAgY29uc3QgY2hlY2twb2ludCA9IGl0ZW0uY2hlY2twb2ludCB8fCBpdGVtO1xyXG5cclxuICAgICAgICBpZiAoIWluZm8pIHtcclxuICAgICAgICAgICAgJChgPGxpIGNsYXNzPVwibWVkaWEgcHktM1wiIGRhdGEtdXNlcm5hbWU9XCIke2l0ZW0udXNlcm5hbWV9XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwibWwtMyByb3VuZGVkXCIgYWx0PVwiZGVmYXVsdCBhdmF0YXJcIiBzcmM9XCIke2RlZmF1bHRBdmF0YXJTcmN9XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEtYm9keSBkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHVzZXItaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkeyhpdGVtLnVzZXJuYW1lKSA/IGA8aDQgY2xhc3M9XCJtdC0wIG1iLTEgbmFtZVwiPiR7aXRlbS51c2VybmFtZX08L2g0PmAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHVzZXItY2hlY2twb2ludFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkeyhjaGVja3BvaW50LnN0YXR1cyA9PT0gJ1RSSUdHRVJFRCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGpzX3Bhc3MtY2hlY2twb2ludC1idG4gZC1ibG9jayBteC1hdXRvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWNoZWNrcG9pbnQtdHlwZT1cIiR7Y2hlY2twb2ludC50eXBlIHx8ICdFTUFJTCd9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdXNlcm5hbWU9XCIke2l0ZW0udXNlcm5hbWUgfHwgJyd9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNzZWN1cml0eS1jb2RlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1rZXlcIj48L2k+0J/RgNC+0LnRgtC4INGH0LXQutC/0L7QuNC90YI8L2J1dHRvbj5gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYCh0b2RvKWNoZWNrcG9pbnQgc3RhdHVzIC0gJHtjaGVja3BvaW50LnN0YXR1c31gfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICR7c3RhdHMoKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPmApLmFwcGVuZFRvKGNMaXN0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKGA8bGkgY2xhc3M9XCJtZWRpYSBweS0zXCIgZGF0YS11c2VybmFtZT1cIiR7aXRlbS51c2VybmFtZX1cIj5cclxuICAgICAgICAgICAgJHsoaW5mb1sncHJvZmlsZV9waWNfdXJsJ10pXHJcbiAgICAgICAgICAgICAgICA/IGA8aW1nIGNsYXNzPVwibWwtMyByb3VuZGVkXCIgYWx0PVwiVXNlciBwaG90b1wiIHNyYz1cIiR7aW5mb1sncHJvZmlsZV9waWNfdXJsJ119XCI+YFxyXG4gICAgICAgICAgICAgICAgOiBgPGltZyBjbGFzcz1cIm1sLTMgcm91bmRlZFwiIGFsdD1cImRlZmF1bHQgYXZhdGFyXCIgc3JjPVwiJHtkZWZhdWx0QXZhdGFyU3JjfVwiPmB9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1ib2R5IGQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB1c2VyLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAkeyhpdGVtLnVzZXJuYW1lKSA/IGA8cCBjbGFzcz1cIm10LTAgbWItMSBuYW1lIGxlYWRcIj4ke2l0ZW0udXNlcm5hbWV9PC9wPmAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAkeyhpbmZvLm5hbWUpID8gYDxoNCBjbGFzcz1cIm10LTAgbWItMVwiPiR7aW5mby5uYW1lfTwvaDQ+YCA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICR7KGluZm8ubmFtZSkgPyAnJyA6ICcnICAvKiAkeyhpbmZvLmVtYWlsKSA/IGA8cCBjbGFzcz1cIm10LTAgbWItMVwiPiR7aW5mby5lbWFpbH08L3A+YCA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAkeyhpbmZvLnBob25lKSA/IGA8cCBjbGFzcz1cIm10LTAgbWItMVwiPiR7aW5mby5waG9uZX08L3A+YCA6ICcnfSAqLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgdXNlci1jaGVja3BvaW50XCI+ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgJHsoY2hlY2twb2ludC5zdGF0dXMgPT09ICdUUklHR0VSRUQnKVxyXG4gICAgICAgICAgICAgICAgICAgID8gYDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGpzX3Bhc3MtY2hlY2twb2ludC1idG4gZC1ibG9jayBteC1hdXRvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWNoZWNrcG9pbnQtdHlwZT1cIiR7Y2hlY2twb2ludC50eXBlIHx8ICdFTUFJTCd9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdXNlcm5hbWU9XCIke2l0ZW0udXNlcm5hbWUgfHwgJyd9XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjc2VjdXJpdHktY29kZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1rZXlcIj48L2k+0J/RgNC+0LnRgtC4INGH0LXQutC/0L7QuNC90YI8L2J1dHRvbj5gXHJcbiAgICAgICAgICAgICAgICAgICAgOiAnJ31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgJHtzdGF0cyhpbmZvKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9saT5gKS5hcHBlbmRUbyhjTGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB3aW5kb3cuUHViU3ViLnB1Ymxpc2goQ09OU1QuZXZlbnRzLmluc3RhZ3JhbUFjY291bnMuSU5TVEFHUkFNX0FDQ09VTlNfUkVOREVSRUQpO1xyXG59XHJcblxyXG4vKipcclxuICogSW5pdCBoZWFkZXJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgY29uc3QgJG1zZ0xpc3QgPSAkKCcuYWNjb3VudHMtbGlzdCcpO1xyXG4gICAgLy8gY2hlY2sgd2UgYXJlIGluIHByb2ZpbGUgcGFnZVxyXG4gICAgaWYgKCEkbXNnTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCB0b2tlbiA9IFVzZXIuZ2V0VG9rZW4oKTsgLy8gdXBkIHRvOiBVc2VyLmdldFRva2VuKClcclxuICAgIGNvbnN0IG1ldGFkYXRhID0gVXNlci5nZXRNZXRhZGF0YSh0b2tlbik7XHJcbiAgICBjb25zdCByZXNlbmRSZXF1ZXN0ID0gKCkgPT4gVXNlci5nZXRNZXRhZGF0YSh0b2tlbik7XHJcbiAgICBsZXQgaXNTZW5kUmVxT25jZSA9IGZhbHNlO1xyXG4gICAgY29uc3QgY2hlY2tSZXNwb25zZSA9IChyZXN1bHQsIGlzUmVzZW5kUmVxdWVzdCkgPT4ge1xyXG4gICAgICAgIGlmICghcmVzdWx0LnN0YXR1cy5zdGF0ZSA9PT0gJ29rJyB8fCAhcmVzdWx0LmRhdGEgfHwgISRtc2dMaXN0Lmxlbmd0aCB8fCBpc1Jlc2VuZFJlcXVlc3QpIHtcclxuICAgICAgICAgICAgLy8g0L/RgNC+0LLQtdGA0Y/QvCDQvtC00LjQvSDRgNCw0Lcg0L3QsNC70LjRh9C40LUgcmVzdWx0LmRhdGEuYWNjb3VudHMuaW5mb1xyXG4gICAgICAgICAgICAkbXNnTGlzdC5lbXB0eSgpO1xyXG4gICAgICAgICAgICAkKGA8bGkgY2xhc3M9XCJtZWRpYVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJtdC0wIG1iLTNcIj7QndC4INC+0LTQvdC+0LPQviDQkNC60LrQsNGD0L3RgtCwINC90LUg0LTQvtCx0LDQstC70LXQvdC+PC9oMz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPmApLmFwcGVuZFRvKCRtc2dMaXN0KTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNlbmRSZXF1ZXN0KCkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tSZXNwb25zZShyZXN1bHQsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlcXVlc3QgcmVzZW5kJyk7XHJcbiAgICAgICAgICAgIH0sIDM1MDApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vINCy0YvQstC+0LQg0YDQtdC30YPQu9GM0YLQsNGC0L7QsiAoZGF0YS5hY2NvdW50cy5pbmZvKVxyXG4gICAgICAgICQoJy5wcm9maWxlLXVzZXIgLnNwaW5uZXItYm94JykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgIGZpbGxMaXN0KCRtc2dMaXN0LCByZXN1bHQuZGF0YS5hY2NvdW50cyk7XHJcbiAgICAgICAgYWRkTGlzdEhhbmRsZXIoKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gY2hlY2sgd2UgYXJlIGluIHByb2ZpbGUgcGFnZVxyXG4gICAgaWYgKCEkbXNnTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgYWRkT25Mb2FkSGFuZGxlcnMoKTtcclxuXHJcbiAgICAvLyDQvNC+0LbQtdGCINC40L3RhNC+INC+0YLRgdGD0YLRgdCy0L7QstCw0YLRjCAtINGB0LTQtdC70LDRgtGMINC10YnQtSDRgNCw0Lcg0LfQsNC/0YDQvtGBINGH0LXRgNC10LcgMyDRgdC10LouXHJcblxyXG4gICAgbWV0YWRhdGEudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgLy8g0L/RgNC+0LLQtdGA0Y/QvCDQvtC00LjQvSDRgNCw0Lcg0L3QsNC70LjRh9C40LUgcmVzdWx0LmRhdGEuYWNjb3VudHMuaW5mb1xyXG4gICAgICAgIGxldCBpc1Jlc2VuZFJlcXVlc3QgPSBmYWxzZTtcclxuICAgICAgICBpZiAocmVzdWx0LmRhdGEgJiYgcmVzdWx0LmRhdGEuYWNjb3VudHMgJiYgIWlzU2VuZFJlcU9uY2UpIHtcclxuICAgICAgICAgICAgcmVzdWx0LmRhdGEuYWNjb3VudHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpdGVtLmluZm8pIHtcclxuICAgICAgICAgICAgICAgICAgICBpc1Jlc2VuZFJlcXVlc3QgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlzU2VuZFJlcU9uY2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNoZWNrUmVzcG9uc2UocmVzdWx0LCBpc1Jlc2VuZFJlcXVlc3QpO1xyXG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKCQoJy5lcnJvci1tc2cnKSxcclxuICAgICAgICAgICAgICAgIGVyci5zdGF0dXMgfHwgJycsXHJcbiAgICAgICAgICAgICAgICAn0J3QtSDQv9C+0LvRg9GH0LjQu9C+0YHRjCDQt9Cw0LPRgNGD0LfQuNGC0Ywg0LTQvtGB0YLRg9C/0L3Ri9C1IEluc3RhZ3JhbSDQsNC60LrQsNGD0L3RgtGLJyk7XHJcbiAgICAgICAgfSwgMzAwMCk7XHJcbiAgICAgICAgJCgnLnNwaW5uZXItYm94JykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgfSk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9pbnN0YWdyYW0tYWNjb3VudHMtbGlzdC9pbnN0YWdyYW0tYWNjb3VudHMtbGlzdC5qcyIsIi8qIGVzbGludC1kaXNhYmxlIHNvcnQtdmFycyAqL1xyXG4vLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdXNlcic7XHJcbmltcG9ydCBQdWJTdWIgZnJvbSAncHVic3ViLWpzJzsgLy8gaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvcHVic3ViLWpzXHJcbmltcG9ydCBjb29raWVTdG9yYWdlIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb29raWUnO1xyXG4vLyBpbXBvcnQgVmFsaWRhdG9yIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9mb3JtLXZhbGlkYXRvcic7XHJcbmltcG9ydCB2aWV3VXRpbHMgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3ZpZXcnO1xyXG5pbXBvcnQge0NPTlNUfSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29uc3RzJztcclxuXHJcbi8vIHdpbmRvdy4kID0gJDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMb2dpbkZvcm0oc2VsZWN0b3JDc3MpIHtcclxuICAgIGNvbnN0IHtfZm9ybUlkLCBfYnV0dG9uU3VibWl0SWQsIF9zaG93TG9naW5Cb3hCdG5JZCwgX2xvZ2luQm94fSA9IHNlbGVjdG9yQ3NzO1xyXG4gICAgY29uc3QgdXNlciA9IFVzZXIsIC8vIHNlcnZpY2VcclxuICAgICAgICAkZm9ybSA9ICQoX2Zvcm1JZCksXHJcbiAgICAgICAgJGVtYWlsID0gJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cIm1haWxcIl0nKSxcclxuICAgICAgICAkdGV4dEFyZWFEZXNjcmlwdGlvbiA9ICQoJyNkZXNjcmlwdGlvbicpO1xyXG4gICAgLy8gY29uc3Qgb3BlbmVkQ2xhc3MgPSAnZC1ibG9jayc7XHJcbiAgICAvLyBjb25zdCBjbG9zZUNsYXNzID0gJ2Qtbm9uZSc7XHJcblxyXG4gICAgY29uc3QgdXNlckxvZ2luSGVhZGVyID0gKF9mb3JtRGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNiRXJyb3IgPSAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICQoX2xvZ2luQm94KS5hcHBlbmQoJzxwPnJlc3VsdC5zdGF0dXMubWVzc2FnZTwvcD4nKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gdXNlci5sb2dpbihfZm9ybURhdGEsIGNiRXJyb3IpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LmRhdGEgJiYgcmVzdWx0LmRhdGEudG9rZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzYXZlIHRoZSBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgY29va2llU3RvcmFnZS5zZXQoQ09OU1QuY29va2llU3RvcmFnZS50b2tlbiwgcmVzdWx0LmRhdGEudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5uYXYtbGluay5qc19sb2dPdXQnKS5wYXJlbnQoKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3JlcXVlc3Qgc3VjY2VlZGVkIHdpdGggSlNPTiByZXNwb25zZScsIHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSgkdGV4dEFyZWFEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5tZXNzYWdlIHx8ICdMb2dpbiBzdWNjc2VzcycpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKHRoaXMuJHRleHRBcmVhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGA8cD5zdGF0dXM6ICR7cmVzdWx0LnN0YXR1cy5zdGF0ZX08L3A+PHA+IG1lc3NhZ2U6ICR7cmVzdWx0LnN0YXR1cy5tZXNzYWdlfTwvcD5gKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UoJHRleHRBcmVhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMubWVzc2FnZSB8fCAnTG9naW4gZXJyb3InKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHN1Ym1pdEZvcm0gPSBmdW5jdGlvbihmb3JtRGF0YU9iaikge1xyXG4gICAgICAgIGNvbnN0IGVtYWlsID0gJGVtYWlsLnZhbCgpLFxyXG4gICAgICAgICAgICBwYXNzd29yZCA9ICRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJwYXNzXCJdJykudmFsKCksXHJcbiAgICAgICAgICAgIF9mb3JtRGF0YSA9IGZvcm1EYXRhT2JqIHx8IHtlbWFpbCwgcGFzc3dvcmR9O1xyXG5cclxuICAgICAgICBpZiAoc2VsZWN0b3JDc3MuaXNMb2dpbkluc3RhZ3JhbSkge1xyXG4gICAgICAgICAgICAvLyB0b2RvOiBkZWxldGUgbWVcclxuICAgICAgICAgICAgLy8gYWRkSW5zdGFncmFtQWNjb3VudCh7dXNlcm5hbWU6ICRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJ1c2VybmFtZVwiXScpLnZhbCgpLCBwYXNzd29yZH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRlbWFpbC52YWwoJGVtYWlsLnZhbCgpLnRvTG9jYWxlTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICB1c2VyTG9naW5IZWFkZXIoX2Zvcm1EYXRhKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIFB1YlN1Yi5wdWJsaXNoKENPTlNULmV2ZW50cy5VU0VSX0xPR0dFRCwgJ2xvZ2luJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbG9nT3V0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29va2llU3RvcmFnZS5yZW1vdmUoQ09OU1QuY29va2llU3RvcmFnZS50b2tlbik7XHJcbiAgICAgICAgUHViU3ViLnB1Ymxpc2goQ09OU1QuZXZlbnRzLlVTRVJfTE9HT1VUKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYmluZEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0ICRzaG93TG9naW5Cb3hCdG5JZCA9ICQoX3Nob3dMb2dpbkJveEJ0bklkKTtcclxuICAgICAgICBjb25zdCAkbG9naW5Cb3ggPSAkKF9sb2dpbkJveCk7XHJcbiAgICAgICAgY29uc3Qgb3BlbmVkQ2xhc3MgPSAnZC1ibG9jayc7XHJcbiAgICAgICAgY29uc3QgY2xvc2VDbGFzcyA9ICdkLW5vbmUnO1xyXG5cclxuICAgICAgICAkc2hvd0xvZ2luQm94QnRuSWQub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXNlbGVjdG9yQ3NzLmlzTG9naW5JbnN0YWdyYW0pIHtcclxuICAgICAgICAgICAgICAgICRsb2dpbkJveC5jc3Moeyd0b3AnOiAwLCAncmlnaHQnOiAwfSlcclxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2JnLWxpZ2h0IGJvcmRlciBtdC01IG14LWF1dG8gcG9zaXRpb24tYWJzb2x1dGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkbG9naW5Cb3guYWRkQ2xhc3Mob3BlbmVkQ2xhc3MpLnJlbW92ZUNsYXNzKGNsb3NlQ2xhc3MpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCAkYnV0dG9uU3VibWl0ID0gJChfYnV0dG9uU3VibWl0SWQpLFxyXG4gICAgICAgICAgICBjc3NWYWxpZGF0aW9uQ2xhc3MgPSAnZm9ybS12YWxpZGF0aW9uJztcclxuXHJcbiAgICAgICAgJGJ1dHRvblN1Ym1pdC5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSAkZm9ybS5nZXQoMCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IHZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoJGZvcm0pO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWxpZGF0b3IudmFsaWRhdGUoKSk7XHJcbiAgICAgICAgICAgIGlmIChmb3JtLmNoZWNrVmFsaWRpdHkoKSAmJiB2aWV3VXRpbHMuaXNFbWFpbCgkZW1haWwudmFsKCkpKSB7XHJcbiAgICAgICAgICAgICAgICBzdWJtaXRGb3JtKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBIaWdobGlnaHQgZXJyb3JzXHJcbiAgICAgICAgICAgICAgICBpZiAoZm9ybS5yZXBvcnRWYWxpZGl0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm0ucmVwb3J0VmFsaWRpdHkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICRmb3JtLmFkZENsYXNzKGNzc1ZhbGlkYXRpb25DbGFzcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLm5hdi1saW5rLmpzX2xvZ091dCcpLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgbG9nT3V0KCk7XHJcbiAgICAgICAgICAgICQoZS50YXJnZXQpLnBhcmVudCgpLmhpZGUoKTtcclxuICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSgkdGV4dEFyZWFEZXNjcmlwdGlvbiwgJ0xvZ2dlZCBvdXQnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgUHViU3ViLnN1YnNjcmliZShDT05TVC5ldmVudHMuVVNFUl9MT0dPVVQsIChtc2cpID0+IHtcclxuICAgICAgICAgICAgJChDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJOYXZMb2dpbkJ0bikuYWRkQ2xhc3Mob3BlbmVkQ2xhc3MpLnJlbW92ZUNsYXNzKGNsb3NlQ2xhc3MpOyAvLyAuc2hvdygpO1xyXG4gICAgICAgICAgICAkKENPTlNULnVpU2VsZWN0b3JzLmhlYWRlclJlZ0J0bikuYWRkQ2xhc3Mob3BlbmVkQ2xhc3MpLnJlbW92ZUNsYXNzKGNsb3NlQ2xhc3MpO1xyXG4gICAgICAgICAgICAkKCcubmF2LWxpbmsuanNfbG9nT3V0JykuYWRkQ2xhc3MoY2xvc2VDbGFzcykucmVtb3ZlQ2xhc3Mob3BlbmVkQ2xhc3MpOyAvLyAuaGlkZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RvckxvZ2luU3RhdGUgPSAnLmpzX21lc3NhZ2VfbG9nZ2VkLS10ZXh0JztcclxuICAgICAgICAgICAgJChzZWxlY3RvckxvZ2luU3RhdGUpLnRleHQoJ9CS0Ysg0LLRi9GI0LvQuCDQuNC3INCw0LrQutCw0YPQvdGC0LAnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzTG9naW5CdG5DbGljayA9ICQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCduYXYubmF2YmFyJykuZmluZCgkbG9naW5Cb3gpLmxlbmd0aDtcclxuICAgICAgICAgICAgY29uc3QgaXNBZGRJbnN0YWdyYW1CdG5DbGlja2VkID0gJChldmVudC50YXJnZXQpLmF0dHIoJ2lkJykgPT09IENPTlNULnVpU2VsZWN0b3JzLmluc3RhZ3JhbS5hZGRBY2NvdW50QnRuSWQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWlzTG9naW5CdG5DbGljayAmJiAkbG9naW5Cb3guaGFzQ2xhc3Mob3BlbmVkQ2xhc3MpICYmICFpc0FkZEluc3RhZ3JhbUJ0bkNsaWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICRsb2dpbkJveC5hZGRDbGFzcyhjbG9zZUNsYXNzKS5yZW1vdmVDbGFzcyhvcGVuZWRDbGFzcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgICAgICBiaW5kRXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0XHJcbiAgICB9O1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3MvbG9naW4tZm9ybS9sb2dpbi1mb3JtLmpzIiwiaW1wb3J0IE1ldGVvckVtb2ppIGZyb20gJ21ldGVvci1lbW9qaSc7XHJcbi8vIGltcG9ydCBxcSBmcm9tICdmaW5lLXVwbG9hZGVyJzsgLy90b2RvOiBmaW5lLXVwbG9hZGVcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3VzZXInO1xyXG5pbXBvcnQgVXNlckNvbnZlcnNhdGlvbiBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvYXBpLXVzZXItZGlyZWN0JztcclxuaW1wb3J0IHZpZXdVdGlscyBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdmlldyc7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9zcGlubmVyJztcclxuLy8gaW1wb3J0IFB1YlN1YiBmcm9tICdwdWJzdWItanMnOy8vIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3B1YnN1Yi1qc1xyXG5pbXBvcnQge0NPTlNUfSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29uc3RzJztcclxuXHJcbmNvbnN0IHRva2VuID0gVXNlci5nZXRUb2tlbigpO1xyXG5jb25zdCAkbXNnTGlzdCA9ICQoJy5tZXNzYWdlcy1saXN0Jyk7XHJcbmxldCB1cGRhdGVJbnRlcnZhbCA9ICcnO1xyXG5sZXQgaW50ZXJ2YWxJZCA9IGZhbHNlO1xyXG5cclxuZnVuY3Rpb24gaXNJbk1lc3NhZ2VQYWdlKCkge1xyXG4gICAgY29uc3QgJG1zZ0xpc3QgPSAkKCcubWVzc2FnZXMtbGlzdCcpO1xyXG4gICAgY29uc3QgJHVzZXJMaXN0ID0gJCgnLm1lc3NhZ2VzLXVzZXItbGlzdCcpO1xyXG4gICAgcmV0dXJuICEhJG1zZ0xpc3QubGVuZ3RoICYmICEhJHVzZXJMaXN0Lmxlbmd0aDtcclxufVxyXG4kKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XHJcbiAgICBpZiAoIWlzSW5NZXNzYWdlUGFnZSgpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXHJcbiAgICBjb25zdCBtID0gbmV3IE1ldGVvckVtb2ppKCk7XHJcbiAgICBjb25zdCAkcGlja2VyID0gJCgndGV4dGFyZWFbZGF0YS1tZXRlb3ItZW1vamk9XCJ0cnVlXCJdIH4gZGl2Jyk7XHJcbiAgICBjb25zdCBzdHlsZSA9ICRwaWNrZXIuYXR0cignc3R5bGUnKTtcclxuICAgIGNvbnN0IHN0eWxlTmV3ID0gc3R5bGUucmVwbGFjZSgndG9wOiAzMHB4OycsICd0b3A6IC0yMTBweDsnKTtcclxuICAgICRwaWNrZXIuYXR0cignc3R5bGUnLCBzdHlsZU5ldyk7XHJcblxyXG4gICAgLypcclxuICAgIC8vdG9kbzogZmluZS11cGxvYWRlXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcclxuICAgIGNvbnN0IHJlc3RyaWN0ZWRVcGxvYWRlciA9IG5ldyBxcS5GaW5lVXBsb2FkZXIoe1xyXG4gICAgICAgIGVsZW1lbnQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaW5lLXVwbG9hZGVyLXZhbGlkYXRpb24nKSxcclxuICAgICAgICB0ZW1wbGF0ZTogJ3FxLXRlbXBsYXRlLXZhbGlkYXRpb24nLFxyXG4gICAgICAgIHJlcXVlc3Q6IHtcclxuICAgICAgICAgICAgZW5kcG9pbnQ6ICcvc2VydmVyL3VwbG9hZHMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0aHVtYm5haWxzOiB7XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyczoge1xyXG4gICAgICAgICAgICAgICAgd2FpdGluZ1BhdGg6ICdodHRwczovL2ZpbmV1cGxvYWRlci5jb20vc291cmNlL3BsYWNlaG9sZGVycy93YWl0aW5nLWdlbmVyaWMucG5nJywgLy8gJy9zb3VyY2UvcGxhY2Vob2xkZXJzL3dhaXRpbmctZ2VuZXJpYy5wbmcnLFxyXG4gICAgICAgICAgICAgICAgbm90QXZhaWxhYmxlUGF0aDogJ2h0dHBzOi8vZmluZXVwbG9hZGVyLmNvbS9zZXJ2ZXIvd2FpdGluZy1nZW5lcmljLnBuZycgLy8gJy9zb3VyY2UvcGxhY2Vob2xkZXJzL25vdF9hdmFpbGFibGUtZ2VuZXJpYy5wbmcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgICAgICAgYWxsb3dlZEV4dGVuc2lvbnM6IFsnanBlZycsICdqcGcnLCAndHh0J10sXHJcbiAgICAgICAgICAgIGl0ZW1MaW1pdDogMyxcclxuICAgICAgICAgICAgc2l6ZUxpbWl0OiA1MDAgKiAxMDI0XHJcbiAgICAgICAgfVxyXG4gICAgfSk7Ki9cclxufSk7XHJcblxyXG4vLyBtZXNzYWdlcy1saXN0XHJcbmZ1bmN0aW9uIGZpbGxMaXN0KCRsaXN0LCBkYXRhQXJyYXksIGlzQXBwZW50UHJldk1zZykge1xyXG4gICAgY29uc3QgaXRlbXMgPSBkYXRhQXJyYXk7XHJcbiAgICBjb25zdCBjTGlzdCA9ICRsaXN0O1xyXG4gICAgLy8gY29uc3QgZGVmYXVsdEF2YXRhclNyYyA9ICdodHRwczovL2kuaW1ndXIuY29tL2pOTlQ0TEUucG5nJztcclxuICAgIGNvbnN0IGluc2VydE1zZyA9ICh2YWx1ZSwgdHlwZSwgY3NzQ2xzKSA9PiB7XHJcbiAgICAgICAgbGV0IHN0ciA9ICcnO1xyXG4gICAgICAgIHN3aXRjaCAodHlwZS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3Bob3RvJzpcclxuICAgICAgICAgICAgICAgIHN0ciA9IGA8ZGl2IGNsYXNzPVwiY2hhdC1pbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7dmFsdWV9XCIgYWx0PVwiQ29udGVudCBJbWFnZVwiIGNsYXNzPVwiY29udGVudC1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+YDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdsaW5rJzpcclxuICAgICAgICAgICAgICAgIHN0ciA9IGA8ZGl2IGNsYXNzPVwiY2hhdC1pbWdcIj5cclxuICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIke3ZhbHVlfVwiPiR7dmFsdWV9PC9hPmA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDogc3RyID0gYDxkaXYgY2xhc3M9XCJjaGF0LXRleHRcIiA+JHt2YWx1ZX08L2Rpdj5gO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RyO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGFkZFRvTGlzdCA9IChpc0FwcGVudFByZXZNc2csICRsaSwgJGxpc3QpID0+IHtcclxuICAgICAgICBpZiAoaXNBcHBlbnRQcmV2TXNnKSB7XHJcbiAgICAgICAgICAgICRsaS5pbnNlcnRCZWZvcmUoJGxpc3QuZmluZCgnbGk6Zmlyc3QtY2hpbGQnKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGxpLmFwcGVuZFRvKCRsaXN0KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgaWYgKGlzQXBwZW50UHJldk1zZykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpc0FwcGVudFByZXZNc2cgdG8nLCBjTGlzdCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNMaXN0LmVtcHR5KCkuYWRkQ2xhc3MoJ2JvcmRlci1saWdodC1jb2xvcicpO1xyXG4gICAgfVxyXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBpdGVtO1xyXG4gICAgICAgIC8vIGNvbnN0IGNoZWNrcG9pbnQgPSBpdGVtLmNoZWNrcG9pbnQgfHwgaXRlbTtcclxuXHJcbiAgICAgICAgaWYgKG1lc3NhZ2Uuc2lkZS50b0xvd2VyQ2FzZSgpID09PSAnbGVmdCcpIHtcclxuICAgICAgICAgICAgY29uc3QgJGxpID0gJChgPGxpIGNsYXNzPVwiY2hhdC1pdGVtIGNoYXQtaXRlbS1sZWZ0IGNvbCBmbGV4LWNvbHVtbi1yZXZlcnNlXCIgdmFsdWU9XCIke21lc3NhZ2UudmFsdWV9XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAkeyhtZXNzYWdlWydwcm9maWxlX3BpY191cmwnXSlcclxuICAgICAgICAgICAgICAgICAgICA/IGA8ZGl2IGNsYXNzPVwiY2hhdC1pbWctYm94XCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke21lc3NhZ2VbJ3Byb2ZpbGVfcGljX3VybCddfVwiIGFsdD1cIlVzZXIgQXZhdGFyXCIgY2xhc3M9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2hhdC11c2VybmFtZSB0ZXh0LW11dGVkXCI+JHttZXNzYWdlLnVzZXJuYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAke2luc2VydE1zZyhtZXNzYWdlLnZhbHVlLCBtZXNzYWdlLnR5cGUpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiY2hhdC10aW1lLXRleHRcIj4ke3ZpZXdVdGlscy5nZXRGb3JtYXR0ZWREYXRlVXRpbChtZXNzYWdlLnRpbWVzdGFtcCl9PC9zbWFsbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPmApO1xyXG4gICAgICAgICAgICBhZGRUb0xpc3QoaXNBcHBlbnRQcmV2TXNnLCAkbGksIGNMaXN0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCAkbGkgPSAkKGA8bGkgY2xhc3M9XCJjaGF0LWl0ZW0gY2hhdC1pdGVtLXJpZ2h0IGNvbCBmbGV4LWNvbHVtbi1yZXZlcnNlXCIgdmFsdWU9XCIke21lc3NhZ2UudmFsdWV9XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAke2luc2VydE1zZyhtZXNzYWdlLnZhbHVlLCBtZXNzYWdlLnR5cGUpfVxyXG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInB1bGwtcmlnaHQgY2hhdC10aW1lLXRleHRcIj4ke3ZpZXdVdGlscy5nZXRGb3JtYXR0ZWREYXRlVXRpbChtZXNzYWdlLnRpbWVzdGFtcCl9PC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5gKTtcclxuICAgICAgICAgICAgYWRkVG9MaXN0KGlzQXBwZW50UHJldk1zZywgJGxpLCBjTGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gYWRkUGFnaW5hdGlvbigkd3JhcHBlciwgcGFnaW5hdGlvbikge1xyXG4gICAgY29uc3QgY3Vyc29yID0gcGFnaW5hdGlvbi5wcmV2X2N1cnNvcjtcclxuICAgIGNvbnN0ICRidXR0b24gPSAkKGA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgbG9hZC1tb3JlIGQtZmxleCBwb3NpdGlvbi1hYnNvbHV0ZVwiIHN0eWxlPVwidG9wOiAtNDJweDtcIlxyXG4gICAgICAgIGRhdGEtY3Vyc29yPVwiJHtjdXJzb3J9XCI+0LXRidC1INC00LDQstCw0LkhPC9idXR0b24+YCk7XHJcblxyXG4gICAgaWYgKCEkd3JhcHBlci5jbG9zZXN0KCcubWVzc2FnZXMtbGlzdC1ib3gnKS5maW5kKCcubG9hZC1tb3JlJykubGVuZ3RoKSB7XHJcbiAgICAgICAgJGJ1dHRvbi5pbnNlcnRCZWZvcmUoJHdyYXBwZXIpLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJEYXRhID0gJCgnLm1lc3NhZ2VzLWxpc3QnKS5kYXRhKCdjb252ZXJzYXRpb24nKTtcclxuICAgICAgICAgICAgY29uc3Qge3VzZXJuYW1lLCBjb252ZXJzYXRpb25JZH0gPSB1c2VyRGF0YTtcclxuICAgICAgICAgICAgU3Bpbm5lci5zdGFydEJ1dHRvblNwaW5uZXIoJGJ1dHRvbik7XHJcbiAgICAgICAgICAgIFVzZXJDb252ZXJzYXRpb24uZ2V0TWV0YWRhdGFEZXRhaWxDb252ZXJzYXRpb24odG9rZW4sIHt1c2VybmFtZSwgY29udmVyc2F0aW9uSWQsIGN1cnNvcn0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlY2VpdmUgbXNnJywgcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIFNwaW5uZXIuc3RvcEJ1dHRvblNwaW5uZXIoJGJ1dHRvbik7XHJcbiAgICAgICAgICAgICAgICBmaWxsTGlzdCgkbXNnTGlzdCwgcmVzdWx0LmRhdGEubWV0YS5tZXNzYWdlcywgJ2FwcGVudFByZXZNc2cnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuLy8gbWVzc2FnZXMtdXNlci1saXN0XHJcbmZ1bmN0aW9uIGZpbGxVc2VyTGlzdCgkbGlzdCwgZGF0YUFycmF5KSB7XHJcbiAgICBjb25zdCBpdGVtcyA9IGRhdGFBcnJheS5tZXRhO1xyXG4gICAgY29uc3QgY0xpc3QgPSAkbGlzdDtcclxuICAgIGNvbnN0IGNvbnZlcnNhdGlvbkRldGFpbCA9IGZ1bmN0aW9uKGl0ZW1zKSB7XHJcbiAgICAgICAgbGV0IHRwbCA9ICcnO1xyXG4gICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgIHRwbCArPSBgPGltZyBzcmM9XCIke2l0ZW1bJ3Byb2ZpbGVfcGljX3VybCddfVwiIGNsYXNzPVwibWVkaWEtcGhvdG8gbXItMSBtZWRpYS1waG90by0tZ3JvdXBcIiBzdHlsZT1cIndpZHRoOiAyNHB4O1wiPmA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0cGwgKz0gYDxpbWcgc3JjPVwiJHtpdGVtWydwcm9maWxlX3BpY191cmwnXX1cIiBjbGFzcz1cIm1lZGlhLXBob3RvIG1yLTFcIiBzdHlsZT1cIndpZHRoOiAyNHB4O1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtpdGVtLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9oNT5gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgdHBsICs9ICc8aDUgY2xhc3M9XCJ0aXRsZVwiPtCT0YDRg9C/0L7QstC+0Lkg0YfQsNGCPC9oNT4nO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHBsO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGFkZENvbnZlcnNhdGlvbnMgPSBmdW5jdGlvbihjb252ZXJzYXRpb25zKSB7XHJcbiAgICAgICAgbGV0IHRwbCA9ICcnO1xyXG4gICAgICAgIGNvbnZlcnNhdGlvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICB0cGwgKz0gYDxkaXYgY2xhc3M9XCJtZWRpYSBwLTFcIiBkYXRhLWNvbnZlcnNhdGlvbi1pZD1cIiR7aXRlbS5pZH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAke2NvbnZlcnNhdGlvbkRldGFpbChpdGVtLnRvKX1cclxuICAgICAgICAgICAgICAgICAgICAkeyhpdGVtWydsYXN0X21lc3NhZ2UnXSAmJiAocGFyc2VJbnQoaXRlbVsnbGFzdF9tZXNzYWdlJ10ubGVuZ3RoLCAxMCkpID4gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBgPHAgY2xhc3M9XCJzdW1tYXJ5ICR7aXRlbVsnaXNfdW5yZWFkJ10gPyAnZm9udC13ZWlnaHQtYm9sZCcgOiAndGV4dC1tdXRlZCd9XCI+JHtpdGVtWydsYXN0X21lc3NhZ2UnXX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7aXRlbVsnaXNfdW5yZWFkJ10gPyAnPHNwYW4gY2xhc3M9XCJzdW1tYXJ5LWRvdFwiPjwvc3Bhbj4nIDogJyd9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0cGw7XHJcbiAgICB9O1xyXG4gICAgY0xpc3QuZW1wdHkoKS5hZGRDbGFzcygnYm9yZGVyLWxpZ2h0LWNvbG9yJyk7XHJcbiAgICAvLyB0b2RvOiBmaXggaGFyZC1jb2RlICBpbWcgc3JjPVwiaHR0cHM6Ly9pLmltZ3VyLmNvbS9qTk5UNExFLnBuZ1wiXHJcbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpZHgpID0+IHtcclxuICAgICAgICAkKGA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW1cIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjY29sbGFwc2UtJHtpZHh9XCIgZGF0YS11c2VybmFtZT1cIiR7aXRlbS51c2VybmFtZX1cIiBcclxuICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJ0cnVlXCIgYXJpYS1jb250cm9scz1cImNvbGxhcHNlLSR7aWR4fVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWFcIiBpZD1cImhlYWRpbmctJHtpZHh9XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibXItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pLmltZ3VyLmNvbS9qTk5UNExFLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtZWRpYS1waG90b1wiPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgJHsoaXRlbVsndW5yZWFkX2NvbnZlcnNhdGlvbnMnXSA+IDApID8gYDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2Utc2Vjb25kYXJ5IHBvc2l0aW9uLWFic29sdXRlIHAtMlwiPiR7aXRlbVsndW5yZWFkX2NvbnZlcnNhdGlvbnMnXX08L3NwYW4+YCA6ICcnfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke2l0ZW0udXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImNvbGxhcHNlLSR7aWR4fVwiIGNsYXNzPVwiY29sbGFwc2VcIiBhcmlhLWxhYmVsbGVkYnk9XCJoZWFkaW5nLSR7aWR4fVwiIGRhdGEtcGFyZW50PVwiI2FjY29yZGlvblwiPlxyXG4gICAgICAgICAgICAgICAgJHthZGRDb252ZXJzYXRpb25zKGl0ZW0uY29udmVyc2F0aW9ucywgaWR4KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+YCkuYXBwZW5kVG8oY0xpc3QpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFuZEZpbGxVc2VyTGlzdChpc0FjdGl2ZUZpcnN0KSB7XHJcbiAgICBjb25zdCAkdXNlckxpc3QgPSAkKCcubWVzc2FnZXMtdXNlci1saXN0Jyk7XHJcbiAgICBjb25zdCBtZXRhZGF0YSA9IFVzZXJDb252ZXJzYXRpb24uZ2V0TWV0YWRhdGEodG9rZW4pO1xyXG4gICAgbGV0IHByZXZBY3RpdmVEaWFsb2dJZCA9ICcnO1xyXG4gICAgaWYgKCFpc0FjdGl2ZUZpcnN0KSB7XHJcbiAgICAgICAgcHJldkFjdGl2ZURpYWxvZ0lkID0gJHVzZXJMaXN0LmZpbmQoJ2xpIC5jb2xsYXBzZS5zaG93JykuYXR0cignaWQnKTtcclxuICAgIH1cclxuICAgIG1ldGFkYXRhLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGlmICghcmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXN1bHQuZGF0YS5tZXRhLnNvcnQoKGEsIGIpID0+IGFbJ3VzZXJuYW1lJ10ubG9jYWxlQ29tcGFyZShiWyd1c2VybmFtZSddKSk7XHJcbiAgICAgICAgZmlsbFVzZXJMaXN0KCR1c2VyTGlzdCwgcmVzdWx0LmRhdGEpO1xyXG4gICAgICAgIGlmIChyZXN1bHQuZGF0YS5zZXR0aW5ncyAmJiByZXN1bHQuZGF0YS5zZXR0aW5ncy5pbnZva2VfaW5fbWlsbGlzKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZUludGVydmFsID0gcmVzdWx0LmRhdGEuc2V0dGluZ3MuaW52b2tlX2luX21pbGxpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzQWN0aXZlRmlyc3QpIHtcclxuICAgICAgICAgICAgJHVzZXJMaXN0LmZpbmQoJ2xpOmZpcnN0LWNoaWxkIC5jb2xsYXBzZScpLmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3R0dCcsIHByZXZBY3RpdmVEaWFsb2dJZCk7XHJcbiAgICAgICAgICAgICQoYCMke3ByZXZBY3RpdmVEaWFsb2dJZH1gKS5hZGRDbGFzcygnc2hvdycpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBbmRGaWxsQ29udmVyc2F0aW9uKHVzZXJuYW1lLCBjb252ZXJzYXRpb25JZCwgaXNTY3JvbGxEb3duKSB7XHJcbiAgICBVc2VyQ29udmVyc2F0aW9uLmdldE1ldGFkYXRhRGV0YWlsQ29udmVyc2F0aW9uKHRva2VuLCB7dXNlcm5hbWUsIGNvbnZlcnNhdGlvbklkfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgZmlsbExpc3QoJG1zZ0xpc3QsIHJlc3VsdC5kYXRhLm1ldGEubWVzc2FnZXMpO1xyXG4gICAgICAgIFNwaW5uZXIucmVtb3ZlKCk7XHJcbiAgICAgICAgJCgnLmpzX3NlbmQtbWVzc2FnZS1ib3gnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgJCgnLm1lc3NhZ2VzLWxpc3QnKS5hdHRyKCdkYXRhLWNvbnZlcnNhdGlvbicsIEpTT04uc3RyaW5naWZ5KHt1c2VybmFtZSwgY29udmVyc2F0aW9uSWR9KSk7XHJcblxyXG4gICAgICAgIGlmIChpc1Njcm9sbERvd24pIHtcclxuICAgICAgICAgICAgJG1zZ0xpc3QuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6ICRtc2dMaXN0WzBdLnNjcm9sbEhlaWdodCAtICRtc2dMaXN0WzBdLmNsaWVudEhlaWdodFxyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5kYXRhLm1ldGEucGFnaW5hdGlvbikge1xyXG4gICAgICAgICAgICAgICAgYWRkUGFnaW5hdGlvbigkbXNnTGlzdCwgcmVzdWx0LmRhdGEubWV0YS5wYWdpbmF0aW9uKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJy5tZXNzYWdlcy1saXN0LWJveCcpLmZpbmQoJy5sb2FkLW1vcmUnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRIYW5kbGVycygpIHtcclxuICAgIGxldCBjb252ZXJzYXRpb25JZCA9ICcnO1xyXG5cclxuICAgICQoJyNzZW5kTWVzc2FnZUJ1dHRvbicpLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgJHRleHRBcmVhID0gJCgnI3NlbmRNZXNzYWdlVGV4dEFyZWEnKTtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9ICR0ZXh0QXJlYS52YWwoKTtcclxuICAgICAgICBjb25zdCB1c2VyRGF0YSA9ICQoJy5tZXNzYWdlcy1saXN0JykuZGF0YSgnY29udmVyc2F0aW9uJyk7XHJcbiAgICAgICAgY29uc3Qge3VzZXJuYW1lLCBjb252ZXJzYXRpb25JZH0gPSB1c2VyRGF0YTtcclxuICAgICAgICBTcGlubmVyLmFkZCgkKGUudGFyZ2V0KSwgJ3NwaW5uZXItYm94LS1zZW5kTXNnJyk7XHJcbiAgICAgICAgVXNlckNvbnZlcnNhdGlvbi5wb3N0TWV0YWRhdGFEZXRhaWxDb252ZXJzYXRpb24odG9rZW4sIHt1c2VybmFtZSwgY29udmVyc2F0aW9uSWQsIHZhbHVlfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnN0YXR1cyAmJiByZXN1bHQuc3RhdHVzLnN0YXRlID09PSAnb2snKSB7XHJcbiAgICAgICAgICAgICAgICBnZXRBbmRGaWxsQ29udmVyc2F0aW9uKHVzZXJuYW1lLCBjb252ZXJzYXRpb25JZCk7XHJcbiAgICAgICAgICAgICAgICAkdGV4dEFyZWEudmFsKCcnKTtcclxuICAgICAgICAgICAgICAgIFNwaW5uZXIucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuUHViU3ViLnB1Ymxpc2goQ09OU1QuZXZlbnRzLm1lc3NhZ2VzLlJFQ0lFVkVfTkVXX01FU1NBR0UsIHt1c2VybmFtZSwgY29udmVyc2F0aW9uSWQsIHZhbHVlLCByZXN1bHR9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmxpc3QtZ3JvdXAtaXRlbSAuY29sbGFwc2UnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBjb25zdCB1c2VybmFtZSA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5saXN0LWdyb3VwLWl0ZW0nKS5kYXRhKCd1c2VybmFtZScpO1xyXG4gICAgICAgIGNvbnZlcnNhdGlvbklkID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLm1lZGlhJykuZGF0YSgnY29udmVyc2F0aW9uLWlkJyk7XHJcbiAgICAgICAgU3Bpbm5lci5hZGQoJCgnI21haW5DaGF0UGFydCcpLCAnbXktNSBweS01Jyk7XHJcbiAgICAgICAgZ2V0QW5kRmlsbENvbnZlcnNhdGlvbih1c2VybmFtZSwgY29udmVyc2F0aW9uSWQsICdpc1Njcm9sbERvd24nKTtcclxuICAgICAgICB1cGRhdGVJbnRlcnZhbCA9ICh1cGRhdGVJbnRlcnZhbCA+IDYwMDApID8gdXBkYXRlSW50ZXJ2YWwgOiAxNTAwMDtcclxuICAgICAgICAvLyByZXNlbmQgcmVxdWVzdFxyXG4gICAgICAgIGlmIChpbnRlcnZhbElkKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnZlcnNhdGlvbklkID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLm1lZGlhJykuZGF0YSgnY29udmVyc2F0aW9uLWlkJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGludGVydmFsSWQsIGNvbnZlcnNhdGlvbklkKTtcclxuICAgICAgICAgICAgZ2V0QW5kRmlsbENvbnZlcnNhdGlvbih1c2VybmFtZSwgY29udmVyc2F0aW9uSWQpO1xyXG4gICAgICAgICAgICBnZXRBbmRGaWxsVXNlckxpc3QoKTtcclxuICAgICAgICB9LCB1cGRhdGVJbnRlcnZhbCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB3aW5kb3cuUHViU3ViLnN1YnNjcmliZShDT05TVC5ldmVudHMubWVzc2FnZXMuUkVDSUVWRV9ORVdfTUVTU0FHRSwgKGV2ZW50TmFtZSwgZGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHt1c2VybmFtZSwgY29udmVyc2F0aW9uSWQsIHZhbHVlLCByZXN1bHRGcm9tU2VydmVyfSA9IGRhdGE7XHJcbiAgICAgICAgY29uc3QgJGRpYWxvZyA9ICQoYC5tZXNzYWdlcy11c2VyLWxpc3QgLmxpc3QtZ3JvdXAtaXRlbVtkYXRhLXVzZXJuYW1lPVwiJHt1c2VybmFtZX1cIl0gZGl2W2RhdGEtY29udmVyc2F0aW9uLWlkPVwiJHtjb252ZXJzYXRpb25JZH1cIl1gKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2V0IHZhbCBmcm9tIHRleHQtYXJlYScsIHZhbHVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZygncmVzdWx0RnJvbVNlcnZlcjogJywgcmVzdWx0RnJvbVNlcnZlcik7XHJcbiAgICAgICAgJGRpYWxvZy5maW5kKCcuc3VtbWFyeScpLnRleHQodmFsdWUpO1xyXG5cclxuICAgICAgICAvLyBtZXRhZGF0YS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAvLyAgICAgZmlsbFVzZXJMaXN0KCR1c2VyTGlzdCwgcmVzdWx0LmRhdGEpO1xyXG4gICAgICAgIC8vICAgICBpZiAocmVzdWx0LmRhdGEuc2V0dGluZ3MgJiYgcmVzdWx0LmRhdGEuc2V0dGluZ3MuaW52b2tlX2luX21pbGxpcykge1xyXG4gICAgICAgIC8vICAgICAgICAgdXBkYXRlSW50ZXJ2YWwgPSByZXN1bHQuZGF0YS5zZXR0aW5ncy5pbnZva2VfaW5fbWlsbGlzO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAvLyBjaGVjayB3ZSBhcmUgaW4gY29ycmVjdCBwYWdlIChtZXNzYWdlcylcclxuICAgIGlmICghaXNJbk1lc3NhZ2VQYWdlKCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QW5kRmlsbFVzZXJMaXN0KCdzZXRBY3RpdmVGaXJzdCcpO1xyXG4gICAgYWRkSGFuZGxlcnMoKTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL21lc3NhZ2VzL21lc3NhZ2VzLmpzIiwiLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IFB1YlN1YiBmcm9tICdwdWJzdWItanMnOyAvLyBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9wdWJzdWItanNcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3VzZXInO1xyXG5pbXBvcnQgY29va2llU3RvcmFnZSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29va2llJztcclxuaW1wb3J0IHtDT05TVH0gZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2NvbnN0cyc7XHJcbmltcG9ydCB2aWV3VXRpbHMgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3ZpZXcnO1xyXG5cclxuY29uc3Qgc2VsZWN0b3JDbHMgPSB7XHJcbiAgICBmb3JtOiAnLmF1dGgucmVnaXN0ZXIgLmZvcm0tc2lnbmluJyxcclxuICAgIHN1Ym1pdEJ0bjogJ1t0eXBlPVwic3VibWl0XCJdJ1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWdpc3RlckZvcm0ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy51c2VyID0gVXNlcjtcclxuICAgICAgICB0aGlzLiRmb3JtID0gJChzZWxlY3RvckNscy5mb3JtKTtcclxuICAgICAgICB0aGlzLiRlbWFpbCA9IHRoaXMuJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cIm1haWxcIl0nKTtcclxuICAgICAgICB0aGlzLiR0ZXh0QXJlYURlc2NyaXB0aW9uID0gJCgnI2Rlc2NyaXB0aW9uJyk7XHJcbiAgICAgICAgdGhpcy5mb3JtRGF0YSA9IHsnZW1haWwnOiAndGVzdDFfZW1haWxAbS5ydScsICdwYXNzd29yZCc6ICdwYXNzd29yZCd9O1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgaWYgKCQoJy5hdXRoLnJlZ2lzdGVyJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdWJtaXRGb3JtKGZvcm1EYXRhT2JqKSB7XHJcbiAgICAgICAgY29uc3QgZW1haWwgPSB0aGlzLiRlbWFpbC52YWwoKTtcclxuICAgICAgICBjb25zdCAkcGFzc3dvcmQgPSB0aGlzLiRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJwYXNzXCJdJyksXHJcbiAgICAgICAgICAgICRwYXNzd29yZENvbmZpcm0gPSB0aGlzLiRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJwYXNzLWNvbmZpcm1cIl0nKSxcclxuICAgICAgICAgICAgcGFzc3dvcmQgPSB0aGlzLiRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJwYXNzXCJdJykudmFsKCksXHJcbiAgICAgICAgICAgIHBhc3N3b3JkQ29uZmlybSA9IHRoaXMuJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cInBhc3MtY29uZmlybVwiXScpLnZhbCgpO1xyXG5cclxuICAgICAgICBpZiAocGFzc3dvcmRDb25maXJtICE9PSBwYXNzd29yZCkge1xyXG4gICAgICAgICAgICAkcGFzc3dvcmQuYWRkQ2xhc3MoJ2lucHV0LWVycm9yJyk7XHJcbiAgICAgICAgICAgICRwYXNzd29yZENvbmZpcm0uYWRkQ2xhc3MoJ2lucHV0LWVycm9yJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy4kZW1haWwudmFsKHRoaXMuJGVtYWlsLnZhbCgpLnRvTG9jYWxlTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgIHRoaXMuZm9ybURhdGEgPSBmb3JtRGF0YU9iaiB8fCB7ZW1haWwsIHBhc3N3b3JkfTtcclxuXHJcbiAgICAgICAgdGhpcy51c2VyLnJlZ2lzdGVyKHRoaXMuZm9ybURhdGEpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZGF0YSAmJiByZXN1bHQuZGF0YS50b2tlbikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBzYXZlIHRoZSBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgY29va2llU3RvcmFnZS5zZXQoQ09OU1QuY29va2llU3RvcmFnZS5lbWFpbENvbmZpcm1lZCwgJ2ZhbHNlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvb2tpZVN0b3JhZ2Uuc2V0KENPTlNULmNvb2tpZVN0b3JhZ2UudG9rZW4sIHJlc3VsdC5kYXRhLnRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmVxdWVzdCBzdWNjZWVkZWQgd2l0aCBKU09OIHJlc3BvbnNlJywgcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICBQdWJTdWIucHVibGlzaChDT05TVC5ldmVudHMuVVNFUl9MT0dHRUQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UodGhpcy4kdGV4dEFyZWFEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5tZXNzYWdlIHx8ICdSZWdpc3RlciBhbmQgTG9naW4gc3VjY3Nlc3MnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSh0aGlzLiR0ZXh0QXJlYURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLm1lc3NhZ2UgfHwgJ25vIHJlc3VsdC5kYXRhIGZvdW5kJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKHRoaXMuJHRleHRBcmVhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMuc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5sb2dpbi1ib3gnKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlcXVlc3QgZmFpbGVkJywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSh0aGlzLiR0ZXh0QXJlYURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RvIHNvbWV0aGluZycpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG4gICAgICAgIGNvbnN0IHJlZ2lzdGVyQm94ID0gQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyUmVnQm94OyAvLyAnbmF2IC5yZWdpc3Rlci1ib3gnO1xyXG4gICAgICAgIGNvbnN0IG9wZW5lZENsYXNzID0gJ2QtYmxvY2snO1xyXG4gICAgICAgIGNvbnN0IGNsb3NlQ2xhc3MgPSAnZC1ub25lJztcclxuICAgICAgICBjb25zdCAkYnRuID0gJChzZWxlY3RvckNscy5zdWJtaXRCdG4pLFxyXG4gICAgICAgICAgICBjc3NWYWxpZGF0aW9uQ2xhc3MgPSAnZm9ybS12YWxpZGF0aW9uJztcclxuXHJcbiAgICAgICAgJGJ0bi5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBmb3JtID0gdGhpcy4kZm9ybS5nZXQoMCk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghJGJ0bi5pcygnOmRpc2FibGVkJykpIHtcclxuICAgICAgICAgICAgICAgIGlmIChmb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICRidG4uYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdEZvcm0oKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSGlnaGxpZ2h0IGVycm9yc1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmb3JtLnJlcG9ydFZhbGlkaXR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0ucmVwb3J0VmFsaWRpdHkoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZm9ybS5hZGRDbGFzcyhjc3NWYWxpZGF0aW9uQ2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpc1JlZ0J0bkNsaWNrID0gJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJ25hdi5uYXZiYXInKS5maW5kKCcucmVnaXN0ZXItYm94JykubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFpc1JlZ0J0bkNsaWNrICYmICQocmVnaXN0ZXJCb3gpLmhhc0NsYXNzKG9wZW5lZENsYXNzKSkge1xyXG4gICAgICAgICAgICAgICAgJChyZWdpc3RlckJveCkuYWRkQ2xhc3MoY2xvc2VDbGFzcykucmVtb3ZlQ2xhc3Mob3BlbmVkQ2xhc3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9yZWdpc3Rlci1mb3JtL3JlZ2lzdGVyLWZvcm0uanMiLCIvLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQge0NPTlNUfSBmcm9tICcuL2NvbnN0cyc7XHJcbmltcG9ydCBOZXR3b3JrIGZyb20gJy4vbmV0d29yayc7XHJcbmltcG9ydCBDb29raWVTdG9yYWdlIGZyb20gJy4vY29va2llJztcclxuXHJcbmNsYXNzIFVzZXJDb252ZXJzYXRpb24ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubmV0d29yayA9IG5ldyBOZXR3b3JrKCk7XHJcbiAgICAgICAgdGhpcy5jb29raWVTdG9yYWdlID0gQ29va2llU3RvcmFnZTtcclxuICAgICAgICB0aGlzLnNldHRpbmdQb3N0ID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgaXNMb2dnZWRJbigpIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLmdldFRva2VuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNFbWFpbENvbmZpcm1lZCgpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuY29va2llU3RvcmFnZS5nZXQoQ09OU1QuY29va2llU3RvcmFnZS5lbWFpbENvbmZpcm1lZCkgPT09ICdjb25maXJtZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUb2tlbigpIHtcclxuICAgICAgICBjb25zdCBjb29raWVUb2tlbiA9IHRoaXMuY29va2llU3RvcmFnZS5nZXQoQ09OU1QuY29va2llU3RvcmFnZS50b2tlbik7XHJcbiAgICAgICAgcmV0dXJuIGNvb2tpZVRva2VuO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1ldGFkYXRhKHRva2VuLCBjYkVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChgJHtDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1EaXJlY3RfZ2V0TWV0YURhdGEnKX1gLCB7aGVhZGVyczoge3Rva2VufX0sIGNiRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1ldGFkYXRhRGV0YWlsQ29udmVyc2F0aW9uKHRva2VuLCBkZXRhaWxzLCBjYkVycm9yKSB7XHJcbiAgICAgICAgY29uc3QgY3Vyc29yID0gKGRldGFpbHMuY3Vyc29yKSA/IGA/Y3Vyc29yPSR7ZGV0YWlscy5jdXJzb3J9YCA6ICcnO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QoYCR7Q09OU1QuZ2V0UGF0aCgnaW5zdGFncmFtRGlyZWN0X2dldE1ldGFEYXRhJyl9LyR7ZGV0YWlscy51c2VybmFtZX0vJHtkZXRhaWxzLmNvbnZlcnNhdGlvbklkfSR7Y3Vyc29yfWAsXHJcbiAgICAgICAgICAgIHtoZWFkZXJzOiB7dG9rZW59fSwgY2JFcnJvcik7XHJcbiAgICB9XHJcbiAgICBwb3N0TWV0YWRhdGFEZXRhaWxDb252ZXJzYXRpb24odG9rZW4sIGRldGFpbHMsIGNiRXJyb3IpIHtcclxuICAgICAgICBjb25zdCBzZXR0aW5nID0ge1xyXG4gICAgICAgICAgICAuLi50aGlzLnNldHRpbmdQb3N0LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7J3ZhbHVlJzogZGV0YWlscy52YWx1ZX0pLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnNldHRpbmdQb3N0LmhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICAndG9rZW4nOiB0aGlzLmdldFRva2VuKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChgJHtDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1EaXJlY3RfcG9zdE1lc3NhZ2UnKX0vJHtkZXRhaWxzLnVzZXJuYW1lfS8ke2RldGFpbHMuY29udmVyc2F0aW9uSWR9L3RleHRgLFxyXG4gICAgICAgICAgICBzZXR0aW5nLCBjYkVycm9yKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmxldCB1c2VySW5zdGFuY2UgPSBudWxsO1xyXG5cclxuaWYgKCF1c2VySW5zdGFuY2UpIHtcclxuICAgIHVzZXJJbnN0YW5jZSA9IG5ldyBVc2VyQ29udmVyc2F0aW9uKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJJbnN0YW5jZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy9hcGktdXNlci1kaXJlY3QuanMiLCIvLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG4vLyBpbXBvcnQge0NPTlNUfSBmcm9tICcuL2NvbnN0cyc7XHJcbi8vIGltcG9ydCBOZXR3b3JrIGZyb20gJy4vbmV0d29yayc7XHJcbi8vIGltcG9ydCBDb29raWVTdG9yYWdlIGZyb20gJy4vY29va2llJztcclxuLy8gaW1wb3J0IFB1YlN1YiBmcm9tICdwdWJzdWItanMnOyAvLyBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9wdWJzdWItanNcclxuXHJcbi8vIGNvbnN0IFNQSU5ORVJfQkFTRV9URU1QQUxBVEUgPSAnanMvdWkvdHBsL3NwaW5uZXIuaGJzJztcclxuY29uc3QgY2xhc3NlcyA9IHtcclxuICAgIGlubGluZTogJ2dsb2JhbC1pbmxpbmUtc3Bpbm5lcicsXHJcbiAgICBvdmVybGF5OiAnZ2xvYmFsLW92ZXJsYXktc3Bpbm5lcicsXHJcbiAgICBmaXhlZDogJ2dsb2JhbC1maXhlZC1zcGlubmVyJyxcclxuICAgIGJ1dHRvbjogJ2J1dHRvbi0tbG9hZCdcclxufTtcclxuLy8gY29uc3QgaGFuZGxlYmFyc1RwbCA9IGZ1bmN0aW9uIChuYW1lLCBkYXRhLCAkdGFyZ2V0KSB7XHJcbi8vICAgICAvLyB2YXIgaHRtbCA9IHRoaXMuZ2V0VGVtcGxhdGUobmFtZSkoZGF0YSk7XHJcbi8vICAgICB2YXIgaHRtbCA9IEhhbmRsZWJhcnMuY29tcGlsZSh0ZW1wbGF0ZSk7XHJcbi8vXHJcbi8vICAgICBpZiAoJHRhcmdldCkge1xyXG4vLyAgICAgICAgIC8vZm9yIHByZXZlbnRpbmcgeHNzXHJcbi8vICAgICAgICAgJHRhcmdldFswXS5pbm5lckhUTUwgPSBodG1sO1xyXG4vLyAgICAgfVxyXG4vL1xyXG4vLyAgICAgcmV0dXJuIGh0bWw7XHJcbi8vIH07XHJcbi8vIGNvbnN0IGhhbmRsZWJhcnMgPSB0aGlzLmdldFNlcnZpY2UoJ2NvcmUudGVtcGxhdGluZy5oYW5kbGViYXJzJyk7XHJcblxyXG5jbGFzcyBTcGlubmVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihfY2ZnKSB7XHJcbiAgICAgICAgdGhpcy5jZmcgPSBfY2ZnIHx8IHt9O1xyXG4gICAgICAgIC8vIHRoaXMuJGRlZmF1bHRDb250YWluZXIgPSAkKCdib2R5Jyk7XHJcbiAgICAgICAgJC5leHRlbmQoY2xhc3NlcywgdGhpcy5jZmcuY2xhc3Nlcyk7XHJcbiAgICAgICAgLy8gdGhpcy5fbWVkaWF0b3Iuc3Vic2NyaWJlKENPTlNULmV2ZW50cy5TVE9QX0ZJWEVEX1NQSU5ORVIsIHRoaXMuc3RvcEZpeGVkU3Bpbm5lci5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuICAgIC8vIF9tZWRpYXRvciA9IFB1YlN1YjtcclxuXHJcbiAgICBzdGFydCgkZWwsIHByZXdDbHMpIHtcclxuICAgICAgICAvLyBpZiAoYWRkT3JSZW1vdmUpIHtcclxuICAgICAgICAvLyAgICAgJCgnI2ZvbycpLmFkZENsYXNzKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAkKCcjZm9vJykucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgJGVsLmZpbmQoJ2knKS50b2dnbGVDbGFzcyhwcmV3Q2xzKS5hZGRDbGFzcygnZmEtc3BpbiBmYS1zcGlubmVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcCgkZWwsIG5ld0Nscykge1xyXG4gICAgICAgICRlbC5maW5kKCdpJykudG9nZ2xlQ2xhc3MobmV3Q2xzKS5yZW1vdmVDbGFzcygnZmEtc3BpbiBmYS1zcGlubmVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkKCRlbCwgbmV3Q2xzKSB7XHJcbiAgICAgICAgdGhpcy4kZWwgPSAkZWw7XHJcbiAgICAgICAgJGVsLnByZXBlbmQoYDxkaXYgY2xhc3M9XCJzcGlubmVyLWJveCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyICR7bmV3Q2xzfVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3Bpbi1hbmltYXRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZGF0YS1wcmVmaXg9XCJmYXJcIiBkYXRhLWljb249XCJzeW5jLWFsdFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgY2xhc3M9XCJzdmctaW5saW5lLS1mYSBmYS1zeW5jLWFsdCBmYS13LTE2IGZhLWZ3IGZhLTJ4XCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDgzLjUxNSAyOC40ODVMNDMxLjM1IDgwLjY1QzM4Ni40NzUgMzUuNzY3IDMyNC40ODUgOCAyNTYgOCAxMjMuMjI4IDggMTQuODI0IDExMi4zMzggOC4zMSAyNDMuNDkzIDcuOTcxIDI1MC4zMTEgMTMuNDc1IDI1NiAyMC4zMDEgMjU2aDI4LjA0NWM2LjM1MyAwIDExLjYxMy00Ljk1MiAxMS45NzMtMTEuMjk0QzY2LjE2MSAxNDEuNjQ5IDE1MS40NTMgNjAgMjU2IDYwYzU0LjE2MyAwIDEwMy4xNTcgMjEuOTIzIDEzOC42MTQgNTcuMzg2bC01NC4xMjggNTQuMTI5Yy03LjU2IDcuNTYtMi4yMDYgMjAuNDg1IDguNDg1IDIwLjQ4NUg0OTJjNi42MjcgMCAxMi01LjM3MyAxMi0xMlYzNi45NzFjMC0xMC42OTEtMTIuOTI2LTE2LjA0NS0yMC40ODUtOC40ODZ6TTQ5MS42OTkgMjU2aC0yOC4wNDVjLTYuMzUzIDAtMTEuNjEzIDQuOTUyLTExLjk3MyAxMS4yOTRDNDQ1LjgzOSAzNzAuMzUxIDM2MC41NDcgNDUyIDI1NiA0NTJjLTU0LjE2MyAwLTEwMy4xNTctMjEuOTIzLTEzOC42MTQtNTcuMzg2bDU0LjEyOC01NC4xMjljNy41Ni03LjU2IDIuMjA2LTIwLjQ4NS04LjQ4NS0yMC40ODVIMjBjLTYuNjI3IDAtMTIgNS4zNzMtMTIgMTJ2MTQzLjAyOWMwIDEwLjY5MSAxMi45MjYgMTYuMDQ1IDIwLjQ4NSA4LjQ4NUw4MC42NSA0MzEuMzVDMTI1LjUyNSA0NzYuMjMzIDE4Ny41MTYgNTA0IDI1NiA1MDRjMTMyLjc3MyAwIDI0MS4xNzYtMTA0LjMzOCAyNDcuNjktMjM1LjQ5My4zMzktNi44MTgtNS4xNjUtMTIuNTA3LTExLjk5MS0xMi41MDd6XCIgY2xhc3M9XCJcIj48L3BhdGg+PC9zdmc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PmApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZSgpIHtcclxuICAgICAgICB0aGlzLiRlbC5maW5kKCcuc3Bpbm5lci1ib3gnKS5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgc3Bpbm5lciBpY29uIG9uIGJ1dHRvbiBiZWZvcmUgdGhlIGJ1dHRvbiB0ZXh0XHJcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJGVsXHJcbiAgICAgKi9cclxuICAgIHN0YXJ0QnV0dG9uU3Bpbm5lciA9IGZ1bmN0aW9uICgkZWwsIG5ld0Nscykge1xyXG4gICAgICAgICRlbC5hZGRDbGFzcyhjbGFzc2VzLmJ1dHRvbik7XHJcbiAgICAgICAgJGVsLnByZXBlbmQoYDxkaXYgY2xhc3M9XCJzcGlubmVyLWJveCBzcGlubmVyLWJveC0tYnV0dG9uIGp1c3RpZnktY29udGVudC1jZW50ZXIgcG9zaXRpb24tcmVsYXRpdmUgcC0wIG0tMCBiZy10cmFuc3BhcmVudCAke25ld0Nsc31cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwaW4tYW5pbWF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGRhdGEtcHJlZml4PVwiZmFyXCIgZGF0YS1pY29uPVwic3luYy1hbHRcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmEtZndcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk00ODMuNTE1IDI4LjQ4NUw0MzEuMzUgODAuNjVDMzg2LjQ3NSAzNS43NjcgMzI0LjQ4NSA4IDI1NiA4IDEyMy4yMjggOCAxNC44MjQgMTEyLjMzOCA4LjMxIDI0My40OTMgNy45NzEgMjUwLjMxMSAxMy40NzUgMjU2IDIwLjMwMSAyNTZoMjguMDQ1YzYuMzUzIDAgMTEuNjEzLTQuOTUyIDExLjk3My0xMS4yOTRDNjYuMTYxIDE0MS42NDkgMTUxLjQ1MyA2MCAyNTYgNjBjNTQuMTYzIDAgMTAzLjE1NyAyMS45MjMgMTM4LjYxNCA1Ny4zODZsLTU0LjEyOCA1NC4xMjljLTcuNTYgNy41Ni0yLjIwNiAyMC40ODUgOC40ODUgMjAuNDg1SDQ5MmM2LjYyNyAwIDEyLTUuMzczIDEyLTEyVjM2Ljk3MWMwLTEwLjY5MS0xMi45MjYtMTYuMDQ1LTIwLjQ4NS04LjQ4NnpNNDkxLjY5OSAyNTZoLTI4LjA0NWMtNi4zNTMgMC0xMS42MTMgNC45NTItMTEuOTczIDExLjI5NEM0NDUuODM5IDM3MC4zNTEgMzYwLjU0NyA0NTIgMjU2IDQ1MmMtNTQuMTYzIDAtMTAzLjE1Ny0yMS45MjMtMTM4LjYxNC01Ny4zODZsNTQuMTI4LTU0LjEyOWM3LjU2LTcuNTYgMi4yMDYtMjAuNDg1LTguNDg1LTIwLjQ4NUgyMGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnYxNDMuMDI5YzAgMTAuNjkxIDEyLjkyNiAxNi4wNDUgMjAuNDg1IDguNDg1TDgwLjY1IDQzMS4zNUMxMjUuNTI1IDQ3Ni4yMzMgMTg3LjUxNiA1MDQgMjU2IDUwNGMxMzIuNzczIDAgMjQxLjE3Ni0xMDQuMzM4IDI0Ny42OS0yMzUuNDkzLjMzOS02LjgxOC01LjE2NS0xMi41MDctMTEuOTkxLTEyLjUwN3pcIiBjbGFzcz1cIlwiPjwvcGF0aD48L3N2Zz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+YCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIHNwaW5uZXIgaWNvbiBmcm9tIGJ1dHRvblxyXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRlbFxyXG4gICAgICovXHJcbiAgICBzdG9wQnV0dG9uU3Bpbm5lciA9IGZ1bmN0aW9uICgkZWwpIHtcclxuICAgICAgICAkZWwucmVtb3ZlQ2xhc3MoY2xhc3Nlcy5idXR0b24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmluZHMgc3Bpbm5lcnNcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gJGNvbnRhaW5lclxyXG4gICAgICogQHJldHVybiB7P2pRdWVyeX0gc3Bpbm5lcnNcclxuICAgICAqL1xyXG4gICAgLy8gX2ZpbmRTcGlubmVyID0gZnVuY3Rpb24gKHR5cGUsICRjb250YWluZXIpIHtcclxuICAgIC8vICAgICBjb25zdCBzZWxlY3RvciA9ICcuJyArIHR5cGU7XHJcbiAgICAvLyAgICAgbGV0ICRlbCA9IHRoaXMuJGRlZmF1bHRDb250YWluZXI7XHJcbiAgICAvLyAgICAgaWYgKCRjb250YWluZXIpIHtcclxuICAgIC8vICAgICAgICAgJGVsID0gJGNvbnRhaW5lcjtcclxuICAgIC8vICAgICB9XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIGlmICgkZWwuZmluZChzZWxlY3RvcikubGVuZ3RoID4gMCkge1xyXG4gICAgLy8gICAgICAgICByZXR1cm4gJGVsLmZpbmQoc2VsZWN0b3IpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9ICRlbFxyXG4gICAgICovXHJcbiAgICAvKlxyXG4gICAgc3RhcnRDb250ZW50U3Bpbm5lciA9IGZ1bmN0aW9uICgkZWwpIHtcclxuICAgICAgICBjb25zdCBodG1sID0gaGFuZGxlYmFyc1RwbChcclxuICAgICAgICAgICAgU1BJTk5FUl9CQVNFX1RFTVBBTEFURSwge1xyXG4gICAgICAgICAgICAgICAgaW1nU3JjOiBDVEMuVVJMUy5XQUlUSU5HX0lNQUdFLFxyXG4gICAgICAgICAgICAgICAgJ2NsYXNzJzogY2xhc3Nlcy5vdmVybGF5XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICRlbC5wcmVwZW5kKGh0bWwpO1xyXG4gICAgfTtcclxuXHJcbiAgICBzdGFydElubGluZUNvbnRlbnRTcGlubmVyID0gZnVuY3Rpb24gKCRlbCkge1xyXG4gICAgICAgIGNvbnN0IGh0bWwgPSBoYW5kbGViYXJzVHBsKFxyXG4gICAgICAgICAgICBTUElOTkVSX0JBU0VfVEVNUEFMQVRFLCB7XHJcbiAgICAgICAgICAgICAgICBpbWdTcmM6IENUQy5VUkxTLldBSVRJTkdfSU1BR0UsXHJcbiAgICAgICAgICAgICAgICAnY2xhc3MnOiBjbGFzc2VzLmlubGluZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAkZWwucHJlcGVuZChodG1sKTtcclxuICAgIH07XHJcbiAgICAqL1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RhcnRzIGdsb2JhbCBmdWxsIHBhZ2UgZml4ZWQgc3Bpbm5lclxyXG4gICAgICovXHJcbiAgICAvKlxyXG4gICAgc3RhcnRGaXhlZFNwaW5uZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3Qgc3Bpbm5lcnMgPSB0aGlzLl9maW5kU3Bpbm5lcihjbGFzc2VzLmZpeGVkKTtcclxuICAgICAgICBpZiAoIShDVEMuaXNFZGl0KCkgfHwgQ1RDLmlzRGVzaWduKCkpICYmICFzcGlubmVycykge1xyXG4gICAgICAgICAgICBjb25zdCBodG1sID0gaGFuZGxlYmFyc1RwbChcclxuICAgICAgICAgICAgICAgIFNQSU5ORVJfQkFTRV9URU1QQUxBVEUsIHtcclxuICAgICAgICAgICAgICAgICAgICBpbWdTcmM6IENUQy5VUkxTLldBSVRJTkdfSU1BR0UsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogY2xhc3Nlcy5maXhlZFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuJGRlZmF1bHRDb250YWluZXIucHJlcGVuZChodG1sKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgKi9cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0b3BzIHNwaW5uZXJzXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9ICRjb250YWluZXJcclxuICAgICAqL1xyXG4gICAgLy8gX3N0b3BTcGlubmVyID0gZnVuY3Rpb24gKHR5cGUsICRjb250YWluZXIpIHtcclxuICAgIC8vICAgICBjb25zdCBzcGlubmVycyA9IHRoaXMuX2ZpbmRTcGlubmVyKHR5cGUsICRjb250YWluZXIpO1xyXG4gICAgLy8gICAgIGlmIChzcGlubmVycykge1xyXG4gICAgLy8gICAgICAgICBzcGlubmVycy5yZW1vdmUoKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAkZWxcclxuICAgICAqL1xyXG4gICAgLy8gc3RvcENvbnRlbnRTcGlubmVyID0gZnVuY3Rpb24gKCRlbCkge1xyXG4gICAgLy8gICAgICRlbC5maW5kKCcuJyArIGNsYXNzZXMub3ZlcmxheSkucmVtb3ZlKCk7XHJcbiAgICAvLyB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAkZWxcclxuICAgICAqL1xyXG4gICAgLy8gc3RvcElubGluZUNvbnRlbnRTcGlubmVyID0gZnVuY3Rpb24gKCRlbCkge1xyXG4gICAgLy8gICAgICRlbC5maW5kKCcuJyArIGNsYXNzZXMuaW5saW5lKS5yZW1vdmUoKTtcclxuICAgIC8vIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9wcyBnbG9iYWwgZnVsbCBwYWdlIGZpeGVkIHNwaW5uZXJcclxuICAgICAqL1xyXG4gICAgLy8gc3RvcEZpeGVkU3Bpbm5lciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICAgICB0aGlzLl9zdG9wU3Bpbm5lcihjbGFzc2VzLmZpeGVkKTtcclxuICAgIC8vIH07XHJcbn1cclxuXHJcbmxldCBzcGlubmVySW5zdGFuY2UgPSBudWxsO1xyXG5cclxuaWYgKCFzcGlubmVySW5zdGFuY2UpIHtcclxuICAgIHNwaW5uZXJJbnN0YW5jZSA9IG5ldyBTcGlubmVyKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNwaW5uZXJJbnN0YW5jZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy9zcGlubmVyLmpzIiwiLyogZXNsaW50LWRpc2FibGUgc29ydC12YXJzICovXHJcbi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy91c2VyJztcclxuaW1wb3J0IFB1YlN1YiBmcm9tICdwdWJzdWItanMnOyAvLyBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9wdWJzdWItanNcclxuaW1wb3J0IGNvb2tpZVN0b3JhZ2UgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2Nvb2tpZSc7XHJcbi8vIGltcG9ydCBWYWxpZGF0b3IgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2Zvcm0tdmFsaWRhdG9yJztcclxuaW1wb3J0IHZpZXdVdGlscyBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdmlldyc7XHJcbmltcG9ydCB7Q09OU1R9IGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMnO1xyXG5cclxuLy8gd2luZG93LiQgPSAkO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExvZ2luUGFnZShzZWxlY3RvckNzcykge1xyXG4gICAgY29uc3Qge19mb3JtSWQsIF9idXR0b25TdWJtaXRJZCwgX2xvZ2luQm94fSA9IHNlbGVjdG9yQ3NzO1xyXG4gICAgY29uc3QgdXNlciA9IFVzZXIsIC8vIHNlcnZpY2VcclxuICAgICAgICAkZm9ybSA9ICQoX2Zvcm1JZCksXHJcbiAgICAgICAgJGVtYWlsID0gJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cIm1haWxcIl0nKSxcclxuICAgICAgICAkdGV4dEFyZWFEZXNjcmlwdGlvbiA9ICQoJyNkZXNjcmlwdGlvbicpO1xyXG4gICAgLy8gY29uc3Qgb3BlbmVkQ2xhc3MgPSAnZC1ibG9jayc7XHJcbiAgICAvLyBjb25zdCBjbG9zZUNsYXNzID0gJ2Qtbm9uZSc7XHJcblxyXG4gICAgY29uc3QgdXNlckxvZ2luSGVhZGVyID0gKF9mb3JtRGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNiRXJyb3IgPSAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICQoX2xvZ2luQm94KS5hcHBlbmQoJzxwPnJlc3VsdC5zdGF0dXMubWVzc2FnZTwvcD4nKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gdXNlci5sb2dpbihfZm9ybURhdGEsIGNiRXJyb3IpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LmRhdGEgJiYgcmVzdWx0LmRhdGEudG9rZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzYXZlIHRoZSBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgY29va2llU3RvcmFnZS5zZXQoQ09OU1QuY29va2llU3RvcmFnZS50b2tlbiwgcmVzdWx0LmRhdGEudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5uYXYtbGluay5qc19sb2dPdXQnKS5wYXJlbnQoKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3JlcXVlc3Qgc3VjY2VlZGVkIHdpdGggSlNPTiByZXNwb25zZScsIHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSgkdGV4dEFyZWFEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5tZXNzYWdlIHx8ICdMb2dpbiBzdWNjc2VzcycpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKHRoaXMuJHRleHRBcmVhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGA8cD5zdGF0dXM6ICR7cmVzdWx0LnN0YXR1cy5zdGF0ZX08L3A+PHA+IG1lc3NhZ2U6ICR7cmVzdWx0LnN0YXR1cy5tZXNzYWdlfTwvcD5gKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UoJHRleHRBcmVhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMubWVzc2FnZSB8fCAnTG9naW4gZXJyb3InKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHN1Ym1pdEZvcm0gPSBmdW5jdGlvbihmb3JtRGF0YU9iaikge1xyXG4gICAgICAgIGNvbnN0IGVtYWlsID0gJGVtYWlsLnZhbCgpLFxyXG4gICAgICAgICAgICBwYXNzd29yZCA9ICRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJwYXNzXCJdJykudmFsKCksXHJcbiAgICAgICAgICAgIF9mb3JtRGF0YSA9IGZvcm1EYXRhT2JqIHx8IHtlbWFpbCwgcGFzc3dvcmR9O1xyXG5cclxuICAgICAgICBpZiAoc2VsZWN0b3JDc3MuaXNMb2dpbkluc3RhZ3JhbSkge1xyXG4gICAgICAgICAgICAvLyB0b2RvOiBkZWxldGUgbWVcclxuICAgICAgICAgICAgLy8gYWRkSW5zdGFncmFtQWNjb3VudCh7dXNlcm5hbWU6ICRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJ1c2VybmFtZVwiXScpLnZhbCgpLCBwYXNzd29yZH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRlbWFpbC52YWwoJGVtYWlsLnZhbCgpLnRvTG9jYWxlTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICB1c2VyTG9naW5IZWFkZXIoX2Zvcm1EYXRhKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIFB1YlN1Yi5wdWJsaXNoKENPTlNULmV2ZW50cy5VU0VSX0xPR0dFRCwgJ2xvZ2luJyk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvaW5zdGFncmFtLWludGVncmF0aW9uL2luc3RhZ3JhbS1hY2NvdW50cy5odG1sJztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBsb2dPdXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb29raWVTdG9yYWdlLnJlbW92ZShDT05TVC5jb29raWVTdG9yYWdlLnRva2VuKTtcclxuICAgICAgICBQdWJTdWIucHVibGlzaChDT05TVC5ldmVudHMuVVNFUl9MT0dPVVQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBiaW5kRXZlbnRzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gY29uc3QgJHNob3dMb2dpbkJveEJ0bklkID0gJChfc2hvd0xvZ2luQm94QnRuSWQpO1xyXG4gICAgICAgIGNvbnN0ICRsb2dpbkJveCA9ICQoX2xvZ2luQm94KTtcclxuICAgICAgICBjb25zdCBvcGVuZWRDbGFzcyA9ICdkLWJsb2NrJztcclxuICAgICAgICBjb25zdCBjbG9zZUNsYXNzID0gJ2Qtbm9uZSc7XHJcblxyXG4gICAgICAgIC8vICRzaG93TG9naW5Cb3hCdG5JZC5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGlmICghc2VsZWN0b3JDc3MuaXNMb2dpbkluc3RhZ3JhbSkge1xyXG4gICAgICAgIC8vICAgICAgICAgJGxvZ2luQm94LmNzcyh7J3RvcCc6IDAsICdyaWdodCc6IDB9KVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC5hZGRDbGFzcygnYmctbGlnaHQgYm9yZGVyIG10LTUgbXgtYXV0byBwb3NpdGlvbi1hYnNvbHV0ZScpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgICRsb2dpbkJveC5hZGRDbGFzcyhvcGVuZWRDbGFzcykucmVtb3ZlQ2xhc3MoY2xvc2VDbGFzcyk7XHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgIGNvbnN0ICRidXR0b25TdWJtaXQgPSAkKF9idXR0b25TdWJtaXRJZCksXHJcbiAgICAgICAgICAgIGNzc1ZhbGlkYXRpb25DbGFzcyA9ICdmb3JtLXZhbGlkYXRpb24nO1xyXG5cclxuICAgICAgICAkYnV0dG9uU3VibWl0Lm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc3QgZm9ybSA9ICRmb3JtLmdldCgwKTtcclxuICAgICAgICAgICAgLy8gY29uc3QgdmFsaWRhdG9yID0gbmV3IFZhbGlkYXRvcigkZm9ybSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHZpZXdVdGlscywgdmlld1V0aWxzLmlzRW1haWwoJGVtYWlsLnZhbCgpKSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZm9ybS5jaGVja1ZhbGlkaXR5KCkgJiYgdmlld1V0aWxzLmlzRW1haWwoJGVtYWlsLnZhbCgpKSkge1xyXG4gICAgICAgICAgICAgICAgc3VibWl0Rm9ybSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gSGlnaGxpZ2h0IGVycm9yc1xyXG4gICAgICAgICAgICAgICAgaWYgKGZvcm0ucmVwb3J0VmFsaWRpdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtLnJlcG9ydFZhbGlkaXR5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAkZm9ybS5hZGRDbGFzcyhjc3NWYWxpZGF0aW9uQ2xhc3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5uYXYtbGluay5qc19sb2dPdXQnKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGxvZ091dCgpO1xyXG4gICAgICAgICAgICAkKGUudGFyZ2V0KS5wYXJlbnQoKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UoJHRleHRBcmVhRGVzY3JpcHRpb24sICdMb2dnZWQgb3V0Jyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFB1YlN1Yi5zdWJzY3JpYmUoQ09OU1QuZXZlbnRzLlVTRVJfTE9HT1VULCAobXNnKSA9PiB7XHJcbiAgICAgICAgICAgICQoQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyTmF2TG9naW5CdG4pLmFkZENsYXNzKG9wZW5lZENsYXNzKS5yZW1vdmVDbGFzcyhjbG9zZUNsYXNzKTsgLy8gLnNob3coKTtcclxuICAgICAgICAgICAgJChDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJSZWdCdG4pLmFkZENsYXNzKG9wZW5lZENsYXNzKS5yZW1vdmVDbGFzcyhjbG9zZUNsYXNzKTtcclxuICAgICAgICAgICAgJCgnLm5hdi1saW5rLmpzX2xvZ091dCcpLmFkZENsYXNzKGNsb3NlQ2xhc3MpLnJlbW92ZUNsYXNzKG9wZW5lZENsYXNzKTsgLy8gLmhpZGUoKTtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3JMb2dpblN0YXRlID0gJy5qc19tZXNzYWdlX2xvZ2dlZC0tdGV4dCc7XHJcbiAgICAgICAgICAgICQoc2VsZWN0b3JMb2dpblN0YXRlKS50ZXh0KCfQktGLINCy0YvRiNC70Lgg0LjQtyDQsNC60LrQsNGD0L3RgtCwJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpc0xvZ2luQnRuQ2xpY2sgPSAkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnbmF2Lm5hdmJhcicpLmZpbmQoJGxvZ2luQm94KS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzQWRkSW5zdGFncmFtQnRuQ2xpY2tlZCA9ICQoZXZlbnQudGFyZ2V0KS5hdHRyKCdpZCcpID09PSBDT05TVC51aVNlbGVjdG9ycy5pbnN0YWdyYW0uYWRkQWNjb3VudEJ0bklkO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFpc0xvZ2luQnRuQ2xpY2sgJiYgJGxvZ2luQm94Lmhhc0NsYXNzKG9wZW5lZENsYXNzKSAmJiAhaXNBZGRJbnN0YWdyYW1CdG5DbGlja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAkbG9naW5Cb3guYWRkQ2xhc3MoY2xvc2VDbGFzcykucmVtb3ZlQ2xhc3Mob3BlbmVkQ2xhc3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAgICAgaWYgKCQoJy5hdXRoLmxvZ2luJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGJpbmRFdmVudHMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0XHJcbiAgICB9O1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9fYXV0aC9sb2dpbi1wYWdlLmpzIiwiaWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIGJydXR1c2luKXdpbmRvdy5icnV0dXNpbj1uZXcgT2JqZWN0O2Vsc2UgaWYoXCJvYmplY3RcIiE9dHlwZW9mIGJydXR1c2luKXRocm93XCJicnV0dXNpbiBnbG9iYWwgdmFyaWFibGUgYWxyZWFkeSBleGlzdHNcIjshZnVuY3Rpb24oKXtTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGh8fChTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGg9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdD10fHwwLHRoaXMuaW5kZXhPZihlLHQpPT09dH0pLFN0cmluZy5wcm90b3R5cGUuZW5kc1dpdGh8fChTdHJpbmcucHJvdG90eXBlLmVuZHNXaXRoPWZ1bmN0aW9uKGUsdCl7dmFyIHI9dGhpcy50b1N0cmluZygpOyh2b2lkIDA9PT10fHx0PnIubGVuZ3RoKSYmKHQ9ci5sZW5ndGgpLHQtPWUubGVuZ3RoO3ZhciBuPXIuaW5kZXhPZihlLHQpO3JldHVybi0xIT09biYmbj09PXR9KSxTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzfHwoU3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlcz1mdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3JldHVybi0xIT09U3RyaW5nLnByb3RvdHlwZS5pbmRleE9mLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0pLFN0cmluZy5wcm90b3R5cGUuZm9ybWF0fHwoU3RyaW5nLnByb3RvdHlwZS5mb3JtYXQ9ZnVuY3Rpb24oKXtmb3IodmFyIGU9dGhpcyx0PTA7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIHI9bmV3IFJlZ0V4cChcIlxcXFx7XCIrdCtcIlxcXFx9XCIsXCJnaVwiKTtlPWUucmVwbGFjZShyLGFyZ3VtZW50c1t0XSl9cmV0dXJuIGV9KTt2YXIgQnJ1dHVzaW5Gb3Jtcz1uZXcgT2JqZWN0O0JydXR1c2luRm9ybXMubWVzc2FnZXM9e3ZhbGlkYXRpb25FcnJvcjpcIlZhbGlkYXRpb24gZXJyb3JcIixyZXF1aXJlZDpcIlRoaXMgZmllbGQgaXMgKipyZXF1aXJlZCoqXCIsaW52YWxpZFZhbHVlOlwiSW52YWxpZCBmaWVsZCB2YWx1ZVwiLGFkZHByb3BOYW1lRXhpc3RlbnQ6XCJUaGlzIHByb3BlcnR5IGlzIGFscmVhZHkgcHJlc2VudCBpbiB0aGUgb2JqZWN0XCIsYWRkcHJvcE5hbWVSZXF1aXJlZDpcIkEgbmFtZSBpcyByZXF1aXJlZFwiLG1pbkl0ZW1zOlwiQXQgbGVhc3QgYHswfWAgaXRlbXMgYXJlIHJlcXVpcmVkXCIsbWF4SXRlbXM6XCJBdCBtb3N0IGB7MH1gIGl0ZW1zIGFyZSBhbGxvd2VkXCIscGF0dGVybjpcIlZhbHVlIGRvZXMgbm90IG1hdGNoIHBhdHRlcm46IGB7MH1gXCIsbWluTGVuZ3RoOlwiVmFsdWUgbXVzdCBiZSAqKmF0IGxlYXN0KiogYHswfWAgY2hhcmFjdGVycyBsb25nXCIsbWF4TGVuZ3RoOlwiVmFsdWUgbXVzdCBiZSAqKmF0IG1vc3QqKiBgezB9YCBjaGFyYWN0ZXJzIGxvbmdcIixtdWx0aXBsZU9mOlwiVmFsdWUgbXVzdCBiZSAqKm11bHRpcGxlIG9mKiogYHswfWBcIixtaW5pbXVtOlwiVmFsdWUgbXVzdCBiZSAqKmdyZWF0ZXIgb3IgZXF1YWwgdGhhbioqIGB7MH1gXCIsZXhjbHVzaXZlTWluaW11bTpcIlZhbHVlIG11c3QgYmUgKipncmVhdGVyIHRoYW4qKiBgezB9YFwiLG1heGltdW06XCJWYWx1ZSBtdXN0IGJlICoqbG93ZXIgb3IgZXF1YWwgdGhhbioqIGB7MH1gXCIsZXhjbHVzaXZlTWF4aW11bTpcIlZhbHVlIG11c3QgYmUgKipsb3dlciB0aGFuKiogYHswfWBcIixtaW5Qcm9wZXJ0aWVzOlwiQXQgbGVhc3QgYHswfWAgcHJvcGVydGllcyBhcmUgcmVxdWlyZWRcIixtYXhQcm9wZXJ0aWVzOlwiQXQgbW9zdCBgezB9YCBwcm9wZXJ0aWVzIGFyZSBhbGxvd2VkXCIsdW5pcXVlSXRlbXM6XCJBcnJheSBpdGVtcyBtdXN0IGJlIHVuaXF1ZVwiLGFkZEl0ZW06XCJBZGQgaXRlbVwiLFwidHJ1ZVwiOlwiVHJ1ZVwiLFwiZmFsc2VcIjpcIkZhbHNlXCJ9LEJydXR1c2luRm9ybXMuZGVjb3JhdG9ycz1uZXcgQXJyYXksQnJ1dHVzaW5Gb3Jtcy5hZGREZWNvcmF0b3I9ZnVuY3Rpb24oZSl7QnJ1dHVzaW5Gb3Jtcy5kZWNvcmF0b3JzW0JydXR1c2luRm9ybXMuZGVjb3JhdG9ycy5sZW5ndGhdPWV9LEJydXR1c2luRm9ybXMub25SZXNvbHV0aW9uU3RhcnRlZD1mdW5jdGlvbihlKXt9LEJydXR1c2luRm9ybXMub25SZXNvbHV0aW9uRmluaXNoZWQ9ZnVuY3Rpb24oZSl7fSxCcnV0dXNpbkZvcm1zLm9uVmFsaWRhdGlvbkVycm9yPWZ1bmN0aW9uKGUsdCl7ZS5mb2N1cygpLGUuY2xhc3NOYW1lLmluY2x1ZGVzKFwiIGVycm9yXCIpfHwoZS5jbGFzc05hbWUrPVwiIGVycm9yXCIpLGFsZXJ0KHQpfSxCcnV0dXNpbkZvcm1zLm9uVmFsaWRhdGlvblN1Y2Nlc3M9ZnVuY3Rpb24oZSl7ZS5jbGFzc05hbWU9ZS5jbGFzc05hbWUucmVwbGFjZShcIiBlcnJvclwiLFwiXCIpfSxCcnV0dXNpbkZvcm1zLnBvc3RSZW5kZXI9bnVsbCxCcnV0dXNpbkZvcm1zLmluc3RhbmNlcz1uZXcgQXJyYXksQnJ1dHVzaW5Gb3Jtcy5jcmVhdGU9ZnVuY3Rpb24oc2NoZW1hKXtmdW5jdGlvbiB2YWxpZGF0ZURlcGVuY3lNYXBJc0FjeWNsaWMoKXtmdW5jdGlvbiBlKHQscixuKXtpZihyLmhhc093blByb3BlcnR5KG4pKXJldHVybiB2b2lkKGVycm9yPVwiU2NoZW1hIGRlcGVuZGVuY3kgZ3JhcGggaGFzIGN5Y2xlc1wiKTtpZihyW25dPW51bGwsIXQuaGFzT3duUHJvcGVydHkobikpe3Rbbl09bnVsbDt2YXIgYT1kZXBlbmRlbmN5TWFwW25dO2lmKGEpZm9yKHZhciBpPTA7aTxhLmxlbmd0aDtpKyspZSh0LHIsYVtpXSk7ZGVsZXRlIHJbbl19fXZhciB0PW5ldyBPYmplY3Q7Zm9yKHZhciByIGluIGRlcGVuZGVuY3lNYXApdC5oYXNPd25Qcm9wZXJ0eShyKXx8ZSh0LG5ldyBPYmplY3Qscil9ZnVuY3Rpb24gYXBwZW5kQ2hpbGQoZSx0LHIpe2UuYXBwZW5kQ2hpbGQodCk7Zm9yKHZhciBuPTA7bjxCcnV0dXNpbkZvcm1zLmRlY29yYXRvcnMubGVuZ3RoO24rKylCcnV0dXNpbkZvcm1zLmRlY29yYXRvcnNbbl0odCxyKX1mdW5jdGlvbiBjcmVhdGVQc2V1ZG9TY2hlbWEoZSl7dmFyIHQ9bmV3IE9iamVjdDtmb3IodmFyIHIgaW4gZSlcIml0ZW1zXCIhPT1yJiZcInByb3BlcnRpZXNcIiE9PXImJlwiYWRkaXRpb25hbFByb3BlcnRpZXNcIiE9PXImJihcInBhdHRlcm5cIj09PXI/dFtyXT1uZXcgUmVnRXhwKGVbcl0pOnRbcl09ZVtyXSk7cmV0dXJuIHR9ZnVuY3Rpb24gZ2V0RGVmaW5pdGlvbihlKXt2YXIgdD1lLnNwbGl0KFwiL1wiKSxyPXJvb3Q7Zm9yKHZhciBuIGluIHQpXCIwXCIhPT1uJiYocj1yW3Rbbl1dKTtyZXR1cm4gcn1mdW5jdGlvbiBjb250YWluc1N0cihlLHQpe2Zvcih2YXIgcj0wO3I8ZS5sZW5ndGg7cisrKWlmKGVbcl09PXQpcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gcmVuYW1lUmVxdWlyZWRQcm9wZXRpZXMoZSl7aWYoZSlpZihlLmhhc093blByb3BlcnR5KFwib25lT2ZcIikpZm9yKHZhciB0IGluIGUub25lT2YpcmVuYW1lUmVxdWlyZWRQcm9wZXRpZXMoZS5vbmVPZlt0XSk7ZWxzZSBpZihlLmhhc093blByb3BlcnR5KFwiJHJlZlwiKSl7dmFyIHI9Z2V0RGVmaW5pdGlvbihlLiRyZWYpO3JlbmFtZVJlcXVpcmVkUHJvcGV0aWVzKHIpfWVsc2UgaWYoXCJvYmplY3RcIj09PWUudHlwZSl7aWYoZS5wcm9wZXJ0aWVzKXtlLmhhc093blByb3BlcnR5KFwicmVxdWlyZWRcIikmJkFycmF5LmlzQXJyYXkoZS5yZXF1aXJlZCkmJihlLnJlcXVpcmVkUHJvcGVydGllcz1lLnJlcXVpcmVkLGRlbGV0ZSBlLnJlcXVpcmVkKTtmb3IodmFyIG4gaW4gZS5wcm9wZXJ0aWVzKXJlbmFtZVJlcXVpcmVkUHJvcGV0aWVzKGUucHJvcGVydGllc1tuXSl9aWYoZS5wYXR0ZXJuUHJvcGVydGllcylmb3IodmFyIGEgaW4gZS5wYXR0ZXJuUHJvcGVydGllcyl7dmFyIGk9ZS5wYXR0ZXJuUHJvcGVydGllc1thXTsoaS5oYXNPd25Qcm9wZXJ0eShcInR5cGVcIil8fGkuaGFzT3duUHJvcGVydHkoXCIkcmVmXCIpfHxpLmhhc093blByb3BlcnR5KFwib25lT2ZcIikpJiZyZW5hbWVSZXF1aXJlZFByb3BldGllcyhlLnBhdHRlcm5Qcm9wZXJ0aWVzW2FdKX1lLmFkZGl0aW9uYWxQcm9wZXJ0aWVzJiYoZS5hZGRpdGlvbmFsUHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShcInR5cGVcIil8fGUuYWRkaXRpb25hbFByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoXCJvbmVPZlwiKSkmJnJlbmFtZVJlcXVpcmVkUHJvcGV0aWVzKGUuYWRkaXRpb25hbFByb3BlcnRpZXMpfWVsc2VcImFycmF5XCI9PT1lLnR5cGUmJnJlbmFtZVJlcXVpcmVkUHJvcGV0aWVzKGUuaXRlbXMpfWZ1bmN0aW9uIHBvcHVsYXRlU2NoZW1hTWFwKGUsdCl7dmFyIHI9Y3JlYXRlUHNldWRvU2NoZW1hKHQpO2lmKHIuJGlkPWUsc2NoZW1hTWFwW2VdPXIsdCl7aWYodC5oYXNPd25Qcm9wZXJ0eShcIm9uZU9mXCIpKXtyLm9uZU9mPW5ldyBBcnJheSxyLnR5cGU9XCJvbmVPZlwiO2Zvcih2YXIgbiBpbiB0Lm9uZU9mKXt2YXIgYT1lK1wiLlwiK247ci5vbmVPZltuXT1hLHBvcHVsYXRlU2NoZW1hTWFwKGEsdC5vbmVPZltuXSl9fWVsc2UgaWYodC5oYXNPd25Qcm9wZXJ0eShcIiRyZWZcIikpe3ZhciBpPWdldERlZmluaXRpb24odC4kcmVmKTtpZihpKXtpZih0Lmhhc093blByb3BlcnR5KFwidGl0bGVcIil8fHQuaGFzT3duUHJvcGVydHkoXCJkZXNjcmlwdGlvblwiKSl7dmFyIG89e307Zm9yKHZhciBzIGluIGkpb1tzXT1pW3NdO3QuaGFzT3duUHJvcGVydHkoXCJ0aXRsZVwiKSYmKG8udGl0bGU9dC50aXRsZSksdC5oYXNPd25Qcm9wZXJ0eShcImRlc2NyaXB0aW9uXCIpJiYoby5kZXNjcmlwdGlvbj10LmRlc2NyaXB0aW9uKSxpPW99cG9wdWxhdGVTY2hlbWFNYXAoZSxpKX19ZWxzZSBpZihcIm9iamVjdFwiPT09dC50eXBlKXtpZih0LnByb3BlcnRpZXMpe3IucHJvcGVydGllcz1uZXcgT2JqZWN0O2Zvcih2YXIgcyBpbiB0LnByb3BlcnRpZXMpe3ZhciBhPWUrXCIuXCIrcztyLnByb3BlcnRpZXNbc109YTt2YXIgdT10LnByb3BlcnRpZXNbc107dC5yZXF1aXJlZFByb3BlcnRpZXMmJihjb250YWluc1N0cih0LnJlcXVpcmVkUHJvcGVydGllcyxzKT91LnJlcXVpcmVkPSEwOnUucmVxdWlyZWQ9ITEpLHBvcHVsYXRlU2NoZW1hTWFwKGEsdSl9fWlmKHQucGF0dGVyblByb3BlcnRpZXMpe3IucGF0dGVyblByb3BlcnRpZXM9bmV3IE9iamVjdDtmb3IodmFyIGwgaW4gdC5wYXR0ZXJuUHJvcGVydGllcyl7dmFyIGQ9ZStcIltcIitsK1wiXVwiO3IucGF0dGVyblByb3BlcnRpZXNbbF09ZDt2YXIgcD10LnBhdHRlcm5Qcm9wZXJ0aWVzW2xdO3AuaGFzT3duUHJvcGVydHkoXCJ0eXBlXCIpfHxwLmhhc093blByb3BlcnR5KFwiJHJlZlwiKXx8cC5oYXNPd25Qcm9wZXJ0eShcIm9uZU9mXCIpP3BvcHVsYXRlU2NoZW1hTWFwKGQsdC5wYXR0ZXJuUHJvcGVydGllc1tsXSk6cG9wdWxhdGVTY2hlbWFNYXAoZCxTQ0hFTUFfQU5ZKX19aWYodC5hZGRpdGlvbmFsUHJvcGVydGllcyl7dmFyIGE9ZStcIlsqXVwiO3IuYWRkaXRpb25hbFByb3BlcnRpZXM9YSx0LmFkZGl0aW9uYWxQcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KFwidHlwZVwiKXx8dC5hZGRpdGlvbmFsUHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShcIm9uZU9mXCIpP3BvcHVsYXRlU2NoZW1hTWFwKGEsdC5hZGRpdGlvbmFsUHJvcGVydGllcyk6cG9wdWxhdGVTY2hlbWFNYXAoYSxTQ0hFTUFfQU5ZKX19ZWxzZVwiYXJyYXlcIj09PXQudHlwZSYmKHIuaXRlbXM9ZStcIlsjXVwiLHBvcHVsYXRlU2NoZW1hTWFwKHIuaXRlbXMsdC5pdGVtcykpO2lmKHQuaGFzT3duUHJvcGVydHkoXCJkZXBlbmRzT25cIikpe251bGw9PT10LmRlcGVuZHNPbiYmKHQuZGVwZW5kc09uPVtcIiRcIl0pO2Zvcih2YXIgYz1uZXcgQXJyYXksbj0wO248dC5kZXBlbmRzT24ubGVuZ3RoO24rKyl0LmRlcGVuZHNPbltuXT90LmRlcGVuZHNPbltuXS5zdGFydHNXaXRoKFwiJFwiKT9jW25dPXQuZGVwZW5kc09uW25dOmUuZW5kc1dpdGgoXCJdXCIpP2Nbbl09ZStcIi5cIit0LmRlcGVuZHNPbltuXTpjW25dPWUuc3Vic3RyaW5nKDAsZS5sYXN0SW5kZXhPZihcIi5cIikpK1wiLlwiK3QuZGVwZW5kc09uW25dOmNbbl09XCIkXCI7c2NoZW1hTWFwW2VdLmRlcGVuZHNPbj1jO2Zvcih2YXIgbj0wO248Yy5sZW5ndGg7bisrKXt2YXIgbT1kZXBlbmRlbmN5TWFwW2Nbbl1dO218fChtPW5ldyBBcnJheSxkZXBlbmRlbmN5TWFwW2Nbbl1dPW0pLG1bbS5sZW5ndGhdPWV9fX19ZnVuY3Rpb24gcmVuZGVyVGl0bGUoZSx0LHIpe2lmKGUmJnQpe3ZhciBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcImFueVwiIT09ci50eXBlJiZcIm9iamVjdFwiIT09ci50eXBlJiZcImFycmF5XCIhPT1yLnR5cGUmJihuLmh0bWxGb3I9Z2V0SW5wdXRJZCgpKTt2YXIgYT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0K1wiOlwiKTtpZihhcHBlbmRDaGlsZChuLGEsciksci5kZXNjcmlwdGlvbiYmKG4udGl0bGU9ci5kZXNjcmlwdGlvbiksci5yZXF1aXJlZCl7dmFyIGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN1cFwiKTthcHBlbmRDaGlsZChpLGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiKlwiKSxyKSxhcHBlbmRDaGlsZChuLGksciksbi5jbGFzc05hbWU9XCJyZXF1aXJlZFwifWFwcGVuZENoaWxkKGUsbixyKX19ZnVuY3Rpb24gZ2V0SW5wdXRJZCgpe3JldHVybiBmb3JtSWQrXCJfXCIraW5wdXRDb3VudGVyfWZ1bmN0aW9uIHZhbGlkYXRlKGUpe3ZhciB0PSEwO2lmKGUuaGFzT3duUHJvcGVydHkoXCJnZXRWYWxpZGF0aW9uRXJyb3JcIikpe3ZhciByPWUuZ2V0VmFsaWRhdGlvbkVycm9yKCk7cj8oQnJ1dHVzaW5Gb3Jtcy5vblZhbGlkYXRpb25FcnJvcihlLHIpLHQ9ITEpOkJydXR1c2luRm9ybXMub25WYWxpZGF0aW9uU3VjY2VzcyhlKX1pZihlLmNoaWxkTm9kZXMpZm9yKHZhciBuPTA7bjxlLmNoaWxkTm9kZXMubGVuZ3RoO24rKyl2YWxpZGF0ZShlLmNoaWxkTm9kZXNbbl0pfHwodD0hMSk7cmV0dXJuIHR9ZnVuY3Rpb24gY2xlYXIoZSl7aWYoZSlmb3IoO2UuZmlyc3RDaGlsZDspZS5yZW1vdmVDaGlsZChlLmZpcnN0Q2hpbGQpfWZ1bmN0aW9uIHJlbmRlcihlLHQscixuLGEsaSl7dmFyIG89Z2V0U2NoZW1hSWQocikscz1nZXRTY2hlbWEobyk7cmVuZGVySW5mb01hcFtvXT1uZXcgT2JqZWN0LHJlbmRlckluZm9NYXBbb10udGl0bGVDb250YWluZXI9ZSxyZW5kZXJJbmZvTWFwW29dLmNvbnRhaW5lcj10LHJlbmRlckluZm9NYXBbb10ucGFyZW50T2JqZWN0PW4scmVuZGVySW5mb01hcFtvXS5wcm9wZXJ0eVByb3ZpZGVyPWEscmVuZGVySW5mb01hcFtvXS52YWx1ZT1pLGNsZWFyKGUpLGNsZWFyKHQpO3ZhciB1PXJlbmRlcmVyc1tzLnR5cGVdO2lmKHUmJiFzLmRlcGVuZHNPbilzLnRpdGxlP3JlbmRlclRpdGxlKGUscy50aXRsZSxzKTphJiZyZW5kZXJUaXRsZShlLGEuZ2V0VmFsdWUoKSxzKSxpfHwoaT1cInVuZGVmaW5lZFwiIT10eXBlb2YgaW5pdGlhbFZhbHVlJiZudWxsIT09aW5pdGlhbFZhbHVlP2dldEluaXRpYWxWYWx1ZShyKTpzW1wiZGVmYXVsdFwiXSksdSh0LHIsbixhLGkpO2Vsc2UgaWYocy4kcmVmJiZvYmouc2NoZW1hUmVzb2x2ZXIpe3ZhciBsPWZ1bmN0aW9uKGUpe2lmKGUmJmUuaGFzT3duUHJvcGVydHkocikmJkpTT04uc3RyaW5naWZ5KHNjaGVtYU1hcFtyXSkhPT1KU09OLnN0cmluZ2lmeShlW3JdKSl7Y2xlYW5TY2hlbWFNYXAociksY2xlYW5EYXRhKHIpLHBvcHVsYXRlU2NoZW1hTWFwKHIsZVtyXSk7dmFyIHQ9cmVuZGVySW5mb01hcFtyXTt0JiZyZW5kZXIodC50aXRsZUNvbnRhaW5lcix0LmNvbnRhaW5lcixyLHQucGFyZW50T2JqZWN0LHQucHJvcGVydHlQcm92aWRlcix0LnZhbHVlKX1CcnV0dXNpbkZvcm1zLm9uUmVzb2x1dGlvbkZpbmlzaGVkKG4pfTtCcnV0dXNpbkZvcm1zLm9uUmVzb2x1dGlvblN0YXJ0ZWQobiksb2JqLnNjaGVtYVJlc29sdmVyKFtyXSxvYmouZ2V0RGF0YSgpLGwpfX1mdW5jdGlvbiBjcmVhdGVQcm9wZXJ0eVByb3ZpZGVyKGUsdCl7dmFyIHI9bmV3IE9iamVjdDtyZXR1cm4gci5nZXRWYWx1ZT1lLHIub25jaGFuZ2U9dCxyfWZ1bmN0aW9uIGdldEluaXRpYWxWYWx1ZShpZCl7dmFyIHJldDt0cnl7ZXZhbChcInJldCA9IGluaXRpYWxWYWx1ZVwiK2lkLnN1YnN0cmluZygxKSl9Y2F0Y2goZSl7cmV0PW51bGx9cmV0dXJuIHJldH1mdW5jdGlvbiBnZXRWYWx1ZShzY2hlbWEsaW5wdXQpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGlucHV0LmdldFZhbHVlKXJldHVybiBpbnB1dC5nZXRWYWx1ZSgpO3ZhciB2YWx1ZTtyZXR1cm4gdmFsdWU9XCJzZWxlY3RcIj09PWlucHV0LnRhZ05hbWUudG9Mb3dlckNhc2UoKT9pbnB1dC5vcHRpb25zW2lucHV0LnNlbGVjdGVkSW5kZXhdLnZhbHVlOmlucHV0LnZhbHVlLFwiXCI9PT12YWx1ZT9udWxsOihcImludGVnZXJcIj09PXNjaGVtYS50eXBlPyh2YWx1ZT1wYXJzZUludCh2YWx1ZSksaXNGaW5pdGUodmFsdWUpfHwodmFsdWU9bnVsbCkpOlwibnVtYmVyXCI9PT1zY2hlbWEudHlwZT8odmFsdWU9cGFyc2VGbG9hdCh2YWx1ZSksaXNGaW5pdGUodmFsdWUpfHwodmFsdWU9bnVsbCkpOlwiYm9vbGVhblwiPT09c2NoZW1hLnR5cGU/XCJpbnB1dFwiPT09aW5wdXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpPyh2YWx1ZT1pbnB1dC5jaGVja2VkLHZhbHVlfHwodmFsdWU9ITEpKTpcInNlbGVjdFwiPT09aW5wdXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpJiYodmFsdWU9XCJ0cnVlXCI9PT1pbnB1dC52YWx1ZT8hMDpcImZhbHNlXCI9PT1pbnB1dC52YWx1ZT8hMTpudWxsKTpcImFueVwiPT09c2NoZW1hLnR5cGUmJnZhbHVlJiZldmFsKFwidmFsdWU9XCIrdmFsdWUpLHZhbHVlKX1mdW5jdGlvbiBnZXRTY2hlbWFJZChlKXtyZXR1cm4gZS5yZXBsYWNlKC9cXFtcIlteXCJdKlwiXFxdL2csXCJbKl1cIikucmVwbGFjZSgvXFxbXFxkKlxcXS9nLFwiWyNdXCIpfWZ1bmN0aW9uIGdldFBhcmVudFNjaGVtYUlkKGUpe3JldHVybiBlLnN1YnN0cmluZygwLGUubGFzdEluZGV4T2YoXCIuXCIpKX1mdW5jdGlvbiBnZXRTY2hlbWEoZSl7cmV0dXJuIHNjaGVtYU1hcFtlXX1mdW5jdGlvbiBjbGVhblNjaGVtYU1hcChlKXtmb3IodmFyIHQgaW4gc2NoZW1hTWFwKWUuc3RhcnRzV2l0aCh0KSYmZGVsZXRlIHNjaGVtYU1hcFt0XX1mdW5jdGlvbiBjbGVhbkRhdGEoZSl7dmFyIHQ9bmV3IEV4cHJlc3Npb24oZSk7dC52aXNpdChkYXRhLGZ1bmN0aW9uKGUsdCxyKXtkZWxldGUgdFtyXX0pfWZ1bmN0aW9uIG9uRGVwZW5kZW5jeUNoYW5nZWQoZSx0KXt2YXIgcj1kZXBlbmRlbmN5TWFwW2VdO2lmKHImJm9iai5zY2hlbWFSZXNvbHZlcil7dmFyIG49ZnVuY3Rpb24oZSl7aWYoZSlmb3IodmFyIHIgaW4gZSlpZihKU09OLnN0cmluZ2lmeShzY2hlbWFNYXBbcl0pIT09SlNPTi5zdHJpbmdpZnkoZVtyXSkpe2NsZWFuU2NoZW1hTWFwKHIpLGNsZWFuRGF0YShyKSxwb3B1bGF0ZVNjaGVtYU1hcChyLGVbcl0pO3ZhciBuPXJlbmRlckluZm9NYXBbcl07biYmcmVuZGVyKG4udGl0bGVDb250YWluZXIsbi5jb250YWluZXIscixuLnBhcmVudE9iamVjdCxuLnByb3BlcnR5UHJvdmlkZXIsbi52YWx1ZSl9QnJ1dHVzaW5Gb3Jtcy5vblJlc29sdXRpb25GaW5pc2hlZCh0KX07QnJ1dHVzaW5Gb3Jtcy5vblJlc29sdXRpb25TdGFydGVkKHQpLG9iai5zY2hlbWFSZXNvbHZlcihyLG9iai5nZXREYXRhKCksbil9fWZ1bmN0aW9uIEV4cHJlc3Npb24oZSl7ZnVuY3Rpb24gdChlKXtpZihudWxsPT09ZSlyZXR1cm4gbnVsbDtmb3IodmFyIHQ9bmV3IEFycmF5LHI9bnVsbCxuPTAsYT0wO2E8ZS5sZW5ndGg7YSsrKSdcIic9PT1lLmNoYXJBdChhKT9udWxsPT09cj9yPSdcIic6J1wiJz09PXImJihyPW51bGwsdFt0Lmxlbmd0aF09ZS5zdWJzdHJpbmcobixhKzEpLnRyaW0oKSxuPWErMSk6XCInXCI9PT1lLmNoYXJBdChhKT9udWxsPT09cj9yPVwiJ1wiOlwiJ1wiPT09ciYmKHI9bnVsbCx0W3QubGVuZ3RoXT1lLnN1YnN0cmluZyhuLGErMSkudHJpbSgpLG49YSsxKTpcIltcIj09PWUuY2hhckF0KGEpP251bGw9PT1yJiYobiE9PWEmJih0W3QubGVuZ3RoXT1lLnN1YnN0cmluZyhuLGEpLnRyaW0oKSksdFt0Lmxlbmd0aF09XCJbXCIsbj1hKzEpOlwiXVwiPT09ZS5jaGFyQXQoYSk/bnVsbD09PXImJihuIT09YSYmKHRbdC5sZW5ndGhdPWUuc3Vic3RyaW5nKG4sYSkudHJpbSgpKSx0W3QubGVuZ3RoXT1cIl1cIixuPWErMSk6XCIuXCI9PT1lLmNoYXJBdChhKT9udWxsPT09ciYmKG4hPT1hJiYodFt0Lmxlbmd0aF09ZS5zdWJzdHJpbmcobixhKS50cmltKCkpLG49YSsxKTphPT09ZS5sZW5ndGgtMSYmKHRbdC5sZW5ndGhdPWUuc3Vic3RyaW5nKG4sYSsxKS50cmltKCkpO3JldHVybiB0fShudWxsPT09ZXx8MD09PWUubGVuZ3RofHxcIi5cIj09PWUpJiYoZT1cIiRcIik7Zm9yKHZhciByPW5ldyBBcnJheSxuPXQoZSksYT0hMSxpPTAsbz1cIlwiLHM9MDtzPG4ubGVuZ3RoO3MrKyl7dmFyIHU9bltzXTtpZihcIltcIj09PXUpe2lmKGEpdGhyb3dcIkVycm9yIHBhcnNpbmcgZXhwcmVzc2lvbiAnXCIrZStcIic6IE5lc3RlZCBbIGZvdW5kXCI7YT0hMCxpPTAsbys9dX1lbHNlIGlmKFwiXVwiPT09dSl7aWYoIWEpdGhyb3dcIkVycm9yIHBhcnNpbmcgZXhwcmVzc2lvbiAnXCIrZStcIic6IFVuYmFsYW5jZWQgXSBmb3VuZFwiO2E9ITEsbys9dSxyW3IubGVuZ3RoXT1vLG89XCJcIn1lbHNlIGlmKGEpe2lmKGk+MCl0aHJvd1wiRXJyb3IgcGFyc2luZyBleHByZXNzaW9uICdcIitlK1wiJzogTXVsdGlwbGUgdG9rZW5zIGZvdW5kIGluc2lkZSBhIGJyYWNrZXRcIjtvKz11LGkrK31lbHNlIHJbci5sZW5ndGhdPXU7aWYocz09PW4ubGVuZ3RoLTEmJmEpdGhyb3dcIkVycm9yIHBhcnNpbmcgZXhwcmVzc2lvbiAnXCIrZStcIic6IFVuYmFsYW5jZWQgWyBmb3VuZFwifXRoaXMuZXhwPWUsdGhpcy5xdWV1ZT1yLHRoaXMudmlzaXQ9ZnVuY3Rpb24oZSx0KXtmdW5jdGlvbiByKGUsbixhLGksbyl7aWYobnVsbCE9YSl7dmFyIHM9bi5zaGlmdCgpO2lmKFwiJFwiPT09cyl7ZT1cIiRcIjt2YXIgcz1uLnNoaWZ0KCl9aWYocylpZihBcnJheS5pc0FycmF5KGEpKXtpZighcy5zdGFydHNXaXRoKFwiW1wiKSl0aHJvd1wiTm9kZSAnXCIrZStcIicgaXMgb2YgdHlwZSBhcnJheVwiO3ZhciB1PXMuc3Vic3RyaW5nKDEscy5sZW5ndGgtMSk7aWYodS5lcXVhbHMoXCIjXCIpKWZvcih2YXIgbD0wO2w8YS5sZW5ndGg7bCsrKXt2YXIgZD1hW2xdO3IoZStzLG4uc2xpY2UoMCksZCxhLGwpLHIoZStcIltcIitsK1wiXVwiLG4uc2xpY2UoMCksZCxhLGwpfWVsc2UgaWYoXCIkXCI9PT11KXt2YXIgZD1hW2EubGVuZ3RoLTFdO3IoZStzLG4uc2xpY2UoMCksZCxhLGEubGVuZ3RoLTEpfWVsc2V7dmFyIHA9cGFyc2VJbnQodSk7aWYoaXNOYU4ocCkpdGhyb3dcIkVsZW1lbnQgJ1wiK3UrXCInIG9mIG5vZGUgJ1wiK2UrXCInIGlzIG5vdCBhbiBpbnRlZ2VyLCBvciB0aGUgJyQnIGxhc3QgZWxlbWVudCBzeW1ib2wsICBvciB0aGUgd2lsY2FyZCBzeW1ib2wgJyMnXCI7aWYoMD5wKXRocm93XCJFbGVtZW50ICdcIit1K1wiJyBvZiBub2RlICdcIitlK1wiJyBpcyBsb3dlciB0aGFuIHplcm9cIjt2YXIgZD1hW3BdO3IoZStzLG4uc2xpY2UoMCksZCxhLHApfX1lbHNle2lmKFwib2JqZWN0XCIhPXR5cGVvZiBhKXRocm93XCJib29sZWFuXCI9PXR5cGVvZiBhfHxcIm51bWJlclwiPT10eXBlb2YgYXx8XCJzdHJpbmdcIj09dHlwZW9mIGE/XCJOb2RlIGlzIGxlYWYgYnV0IHN0aWxsIGFyZSB0b2tlbnMgcmVtYWluaW5nOiBcIitzOlwiTm9kZSB0eXBlICdcIit0eXBlb2YgYStcIicgbm90IHN1cHBvcnRlZCBmb3IgaW5kZXggZmllbGQgJ1wiK2UrXCInXCI7aWYoXCJbKl1cIj09PXMpZm9yKHZhciBjIGluIGEpe3ZhciBkPWFbY107cihlK3Msbi5zbGljZSgwKSxkLGEsYykscihlKydbXCInK2MrJ1wiXScsbi5zbGljZSgwKSxkLGEsYyl9ZWxzZXt2YXIgZDtpZihzLnN0YXJ0c1dpdGgoXCJbXCIpKXt2YXIgdT1zLnN1YnN0cmluZygxLHMubGVuZ3RoLTEpO2lmKCF1LnN0YXJ0c1dpdGgoJ1wiJykmJiF1LnN0YXJ0c1dpdGgoXCInXCIpKXRocm93XCJFbGVtZW50ICdcIit1K1wiJyBvZiBub2RlICdcIitlK1wiJyBtdXN0IGJlIGEgc3RyaW5nIGV4cHJlc3Npb24gb3Igd2lsY2FyZCAnKidcIjt1PXUuc3Vic3RyaW5nKDEsdS5sZW5ndGgoKS0xKSxlKz1zLGQ9YVt1XX1lbHNlIGU9ZS5sZW5ndGg+MD9lK1wiLlwiK3M6cyxkPWFbc107cihlLG4sZCxhLHMpfX1lbHNlIHQoYSxpLG8pfX1yKHRoaXMuZXhwLHRoaXMucXVldWUsZSl9fXZhciBTQ0hFTUFfQU5ZPXt0eXBlOlwiYW55XCJ9LG9iaj1uZXcgT2JqZWN0LHNjaGVtYU1hcD1uZXcgT2JqZWN0LGRlcGVuZGVuY3lNYXA9bmV3IE9iamVjdCxyZW5kZXJJbmZvTWFwPW5ldyBPYmplY3QsY29udGFpbmVyLGRhdGEsZXJyb3IsaW5pdGlhbFZhbHVlLGlucHV0Q291bnRlcj0wLHJvb3Q9c2NoZW1hLGZvcm1JZD1cIkJydXR1c2luRm9ybXMjXCIrQnJ1dHVzaW5Gb3Jtcy5pbnN0YW5jZXMubGVuZ3RoO3JlbmFtZVJlcXVpcmVkUHJvcGV0aWVzKHNjaGVtYSkscG9wdWxhdGVTY2hlbWFNYXAoXCIkXCIsc2NoZW1hKSx2YWxpZGF0ZURlcGVuY3lNYXBJc0FjeWNsaWMoKTt2YXIgcmVuZGVyZXJzPW5ldyBPYmplY3Q7cmV0dXJuIHJlbmRlcmVycy5pbnRlZ2VyPWZ1bmN0aW9uKGUsdCxyLG4sYSl7cmVuZGVyZXJzLnN0cmluZyhlLHQscixuLGEpfSxyZW5kZXJlcnMubnVtYmVyPWZ1bmN0aW9uKGUsdCxyLG4sYSl7cmVuZGVyZXJzLnN0cmluZyhlLHQscixuLGEpfSxyZW5kZXJlcnMuYW55PWZ1bmN0aW9uKGUsdCxyLG4sYSl7cmVuZGVyZXJzLnN0cmluZyhlLHQscixuLGEpfSxyZW5kZXJlcnMuc3RyaW5nPWZ1bmN0aW9uKGUsdCxyLG4sYSl7dmFyIGksbz1nZXRTY2hlbWFJZCh0KSxzPWdldFBhcmVudFNjaGVtYUlkKG8pLHU9Z2V0U2NoZW1hKG8pLGw9Z2V0U2NoZW1hKHMpO2lmKFwiYW55XCI9PT11LnR5cGUpaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIiksYSYmKGkudmFsdWU9SlNPTi5zdHJpbmdpZnkoYSxudWxsLDQpLHUucmVhZE9ubHkmJihpLmRpc2FibGVkPSEwKSk7ZWxzZSBpZih1Lm1lZGlhKWk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGkudHlwZT1cImZpbGVcIixhcHBlbmRDaGlsZChpLGQsdSk7ZWxzZSBpZih1W1wiZW51bVwiXSl7aWYoaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpLCF1LnJlcXVpcmVkKXt2YXIgZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpLHA9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIik7ZC52YWx1ZT1cIlwiLGFwcGVuZENoaWxkKGQscCx1KSxhcHBlbmRDaGlsZChpLGQsdSl9Zm9yKHZhciBjPTAsbT0wO208dVtcImVudW1cIl0ubGVuZ3RoO20rKyl7dmFyIGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSxwPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHVbXCJlbnVtXCJdW21dKTtkLnZhbHVlPXVbXCJlbnVtXCJdW21dLGFwcGVuZENoaWxkKGQscCx1KSxhcHBlbmRDaGlsZChpLGQsdSksYSYmdVtcImVudW1cIl1bbV09PT1hJiYoYz1tLHUucmVxdWlyZWR8fGMrKyx1LnJlYWRPbmx5JiYoaS5kaXNhYmxlZD0hMCkpfTE9PT11W1wiZW51bVwiXS5sZW5ndGg/aS5zZWxlY3RlZEluZGV4PTE6aS5zZWxlY3RlZEluZGV4PWN9ZWxzZXtpZihpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxcImludGVnZXJcIj09PXUudHlwZXx8XCJudW1iZXJcIj09PXUudHlwZSlpLnR5cGU9XCJudW1iZXJcIixpLnN0ZXA9dS5zdGVwP1wiXCIrdS5zdGVwOlwiYW55XCIsXCJudW1iZXJcIiE9dHlwZW9mIGEmJihhPW51bGwpO2Vsc2UgaWYoXCJkYXRlLXRpbWVcIj09PXUuZm9ybWF0KXRyeXtpLnR5cGU9XCJkYXRldGltZS1sb2NhbFwifWNhdGNoKGYpe2kudHlwZT1cInRleHRcIn1lbHNlXCJlbWFpbFwiPT09dS5mb3JtYXQ/aS50eXBlPVwiZW1haWxcIjpcInRleHRcIj09PXUuZm9ybWF0P2k9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpOmkudHlwZT1cInRleHRcIjtudWxsIT09YSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEmJihpLnZhbHVlPWEsdS5yZWFkT25seSYmKGkuZGlzYWJsZWQ9ITApKX1yZXR1cm4gaS5zY2hlbWE9byxpLnNldEF0dHJpYnV0ZShcImF1dG9jb3JyZWN0XCIsXCJvZmZcIiksaS5nZXRWYWxpZGF0aW9uRXJyb3I9ZnVuY3Rpb24oKXt0cnl7dmFyIGU9Z2V0VmFsdWUodSxpKTtpZihudWxsPT09ZSl7aWYodS5yZXF1aXJlZCl7aWYoIWx8fFwib2JqZWN0XCIhPT1sLnR5cGUpcmV0dXJuIEJydXR1c2luRm9ybXMubWVzc2FnZXMucmVxdWlyZWQ7aWYobC5yZXF1aXJlZClyZXR1cm4gQnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5yZXF1aXJlZDtmb3IodmFyIHQgaW4gcilpZihudWxsIT09clt0XSlyZXR1cm4gQnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5yZXF1aXJlZH19ZWxzZXtpZih1LnBhdHRlcm4mJiF1LnBhdHRlcm4udGVzdChlKSlyZXR1cm4gQnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5wYXR0ZXJuLmZvcm1hdCh1LnBhdHRlcm4uc291cmNlKTtpZih1Lm1pbkxlbmd0aCYmKCFlfHx1Lm1pbkxlbmd0aD5lLmxlbmd0aCkpcmV0dXJuIEJydXR1c2luRm9ybXMubWVzc2FnZXMubWluTGVuZ3RoLmZvcm1hdCh1Lm1pbkxlbmd0aCk7aWYodS5tYXhMZW5ndGgmJmUmJnUubWF4TGVuZ3RoPGUubGVuZ3RoKXJldHVybiBCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLm1heExlbmd0aC5mb3JtYXQodS5tYXhMZW5ndGgpfWlmKG51bGwhPT1lJiYhaXNOYU4oZSkpe2lmKHUubXVsdGlwbGVPZiYmZSV1Lm11bHRpcGxlT2YhPT0wKXJldHVybiBCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLm11bHRpcGxlT2YuZm9ybWF0KHUubXVsdGlwbGVPZik7aWYodS5oYXNPd25Qcm9wZXJ0eShcIm1heGltdW1cIikpe2lmKHUuZXhjbHVzaXZlTWF4aW11bSYmZT49dS5tYXhpbXVtKXJldHVybiBCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLmV4Y2x1c2l2ZU1heGltdW0uZm9ybWF0KHUubWF4aW11bSk7aWYoIXUuZXhjbHVzaXZlTWF4aW11bSYmZT51Lm1heGltdW0pcmV0dXJuIEJydXR1c2luRm9ybXMubWVzc2FnZXMubWF4aW11bS5mb3JtYXQodS5tYXhpbXVtKX1pZih1Lmhhc093blByb3BlcnR5KFwibWluaW11bVwiKSl7aWYodS5leGNsdXNpdmVNaW5pbXVtJiZlPD11Lm1pbmltdW0pcmV0dXJuIEJydXR1c2luRm9ybXMubWVzc2FnZXMuZXhjbHVzaXZlTWluaW11bS5mb3JtYXQodS5taW5pbXVtKTtpZighdS5leGNsdXNpdmVNaW5pbXVtJiZlPHUubWluaW11bSlyZXR1cm4gQnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5taW5pbXVtLmZvcm1hdCh1Lm1pbmltdW0pfX19Y2F0Y2gobil7cmV0dXJuIEJydXR1c2luRm9ybXMubWVzc2FnZXMuaW52YWxpZFZhbHVlfX0saS5vbmNoYW5nZT1mdW5jdGlvbigpe3ZhciBlO3RyeXtlPWdldFZhbHVlKHUsaSl9Y2F0Y2godCl7ZT1udWxsfXI/cltuLmdldFZhbHVlKCldPWU6ZGF0YT1lLG9uRGVwZW5kZW5jeUNoYW5nZWQobyxpKX0sdS5kZXNjcmlwdGlvbiYmKGkudGl0bGU9dS5kZXNjcmlwdGlvbixpLnBsYWNlaG9sZGVyPXUuZGVzY3JpcHRpb24pLGkub25jaGFuZ2UoKSxpLmlkPWdldElucHV0SWQoKSxpbnB1dENvdW50ZXIrKyxhcHBlbmRDaGlsZChlLGksdSkscn0scmVuZGVyZXJzW1wiYm9vbGVhblwiXT1mdW5jdGlvbihlLHQscixuLGEpe3ZhciBpLG89Z2V0U2NoZW1hSWQodCkscz1nZXRTY2hlbWEobyk7aWYocy5yZXF1aXJlZClpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxpLnR5cGU9XCJjaGVja2JveFwiLGE9PT0hMCYmKGkuY2hlY2tlZD0hMCk7ZWxzZXtpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7dmFyIHU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSxsPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpO2wudmFsdWU9XCJcIixhcHBlbmRDaGlsZCh1LGwscyksYXBwZW5kQ2hpbGQoaSx1LHMpO3ZhciBkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIikscD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzW1widHJ1ZVwiXSk7ZC52YWx1ZT1cInRydWVcIixhcHBlbmRDaGlsZChkLHAscyksYXBwZW5kQ2hpbGQoaSxkLHMpO3ZhciBjPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiksbT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzW1wiZmFsc2VcIl0pO2MudmFsdWU9XCJmYWxzZVwiLGFwcGVuZENoaWxkKGMsbSxzKSxhcHBlbmRDaGlsZChpLGMscyksYT09PSEwP2kuc2VsZWN0ZWRJbmRleD0xOmE9PT0hMSYmKGkuc2VsZWN0ZWRJbmRleD0yKX1pLm9uY2hhbmdlPWZ1bmN0aW9uKCl7cj9yW24uZ2V0VmFsdWUoKV09Z2V0VmFsdWUocyxpKTpkYXRhPWdldFZhbHVlKHMsaSksb25EZXBlbmRlbmN5Q2hhbmdlZChvLGkpfSxpLnNjaGVtYT1vLGkuaWQ9Z2V0SW5wdXRJZCgpLGlucHV0Q291bnRlcisrLHMuZGVzY3JpcHRpb24mJihpLnRpdGxlPXMuZGVzY3JpcHRpb24pLGkub25jaGFuZ2UoKSxhcHBlbmRDaGlsZChlLGkscyl9LHJlbmRlcmVycy5vbmVPZj1mdW5jdGlvbihlLHQscixuLGEpe3ZhciBpPWdldFNjaGVtYUlkKHQpLG89Z2V0U2NoZW1hKGkpLHM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKSx1PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dS5pbm5lckhUTUw9XCJcIixzLnR5cGU9XCJzZWxlY3RcIixzLnNjaGVtYT1pO3ZhciBsPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7bC52YWx1ZT1udWxsLGFwcGVuZENoaWxkKHMsbCxvKTtmb3IodmFyIGQ9MDtkPG8ub25lT2YubGVuZ3RoO2QrKyl7dmFyIHA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSxjPWkrXCIuXCIrZCxtPWdldFNjaGVtYShjKSxmPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG0udGl0bGUpO2lmKHAudmFsdWU9by5vbmVPZltkXSxhcHBlbmRDaGlsZChwLGYsbyksYXBwZW5kQ2hpbGQocyxwLG8pLHZvaWQgMCE9PWEmJm51bGwhPT1hJiYoby5yZWFkT25seSYmKHMuZGlzYWJsZWQ9ITApLGEuaGFzT3duUHJvcGVydHkoXCJ0eXBlXCIpJiZtLmhhc093blByb3BlcnR5KFwicHJvcGVydGllc1wiKSYmbS5wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KFwidHlwZVwiKSkpe3ZhciBoPWdldFNjaGVtYShtLnByb3BlcnRpZXMudHlwZSk7YS50eXBlPT09aFtcImVudW1cIl1bMF0mJihzLnNlbGVjdGVkSW5kZXg9ZCsxLHJlbmRlcihudWxsLHUsdCtcIi5cIisocy5zZWxlY3RlZEluZGV4LTEpLHIsbixhKSl9fXMub25jaGFuZ2U9ZnVuY3Rpb24oKXtyZW5kZXIobnVsbCx1LHQrXCIuXCIrKHMuc2VsZWN0ZWRJbmRleC0xKSxyLG4sYSl9LGFwcGVuZENoaWxkKGUscyxvKSxhcHBlbmRDaGlsZChlLHUsbyl9LHJlbmRlcmVycy5vYmplY3Q9ZnVuY3Rpb24oZSx0LHIsbixhKXtmdW5jdGlvbiBpKGUpe3ZhciB0PW5ldyBPYmplY3Q7cmV0dXJuIHQuZ2V0VmFsdWU9ZnVuY3Rpb24oKXtyZXR1cm4gZX0sdC5vbmNoYW5nZT1mdW5jdGlvbihlKXt9LHR9ZnVuY3Rpb24gbyhlLHQscixuLGEsaSl7dmFyIG89Z2V0U2NoZW1hSWQocikscz1nZXRTY2hlbWEobyksdT10LnRCb2RpZXNbMF0sbD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIiksZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7ZC5jbGFzc05hbWU9XCJhZGQtcHJvcC1uYW1lXCI7dmFyIHA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpLGM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpLG09ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpLGY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpLGg9XCIkXCIrT2JqZWN0LmtleXMoZSkubGVuZ3RoK1wiJFwiLHY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO3YuY2xhc3NOYW1lPVwicHJvcC12YWx1ZVwiO3ZhciBnPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtnLnR5cGU9XCJ0ZXh0XCI7dmFyIHk7aSYmKHk9UmVnRXhwKGkpKSxnLmdldFZhbGlkYXRpb25FcnJvcj1mdW5jdGlvbigpe3JldHVybiBnLnByZXZpb3VzVmFsdWUhPT1nLnZhbHVlJiZlLmhhc093blByb3BlcnR5KGcudmFsdWUpP0JydXR1c2luRm9ybXMubWVzc2FnZXMuYWRkcHJvcE5hbWVFeGlzdGVudDpnLnZhbHVlP3ZvaWQgMDpCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLmFkZHByb3BOYW1lUmVxdWlyZWR9O3ZhciBiPWNyZWF0ZVByb3BlcnR5UHJvdmlkZXIoZnVuY3Rpb24oKXtpZihnLnZhbHVlKXtpZigheSlyZXR1cm4gZy52YWx1ZTtpZigtMSE9PWcudmFsdWUuc2VhcmNoKHkpKXJldHVybiBnLnZhbHVlfXJldHVybiBofSxmdW5jdGlvbih0KXtiLmdldFZhbHVlKCkhPT10JiYodCYmZS5oYXNPd25Qcm9wZXJ0eSh0KXx8KHQ9aCksKGUuaGFzT3duUHJvcGVydHkodCl8fHkmJi0xPT09Yi5nZXRWYWx1ZSgpLnNlYXJjaCh5KSkmJihlW2IuZ2V0VmFsdWUoKV09ZVt0XSxkZWxldGUgZVt0XSkpfSk7Zy5vbmJsdXI9ZnVuY3Rpb24oKXtpZihnLnByZXZpb3VzVmFsdWUhPT1nLnZhbHVlKXtmb3IodmFyIHQ9Zy52YWx1ZSxyPTE7Zy5wcmV2aW91c1ZhbHVlIT09dCYmZS5oYXNPd25Qcm9wZXJ0eSh0KTspdD1nLnZhbHVlK1wiKFwiK3IrXCIpXCIscisrO3JldHVybiBnLnZhbHVlPXQsYi5vbmNoYW5nZShnLnByZXZpb3VzVmFsdWUpLHZvaWQoZy5wcmV2aW91c1ZhbHVlPWcudmFsdWUpfX07dmFyIFA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtQLnNldEF0dHJpYnV0ZShcInR5cGVcIixcImJ1dHRvblwiKSxQLmNsYXNzTmFtZT1cInJlbW92ZVwiLGFwcGVuZENoaWxkKFAsZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJ4XCIpLHMpLFAub25jbGljaz1mdW5jdGlvbigpe2RlbGV0ZSBlW2cudmFsdWVdLHQuZGVsZXRlUm93KGwucm93SW5kZXgpLGcudmFsdWU9bnVsbCxiLm9uY2hhbmdlKGcucHJldmlvdXNWYWx1ZSl9LGFwcGVuZENoaWxkKG0sZyxzKSxhcHBlbmRDaGlsZChmLFAscyksYXBwZW5kQ2hpbGQoYyxtLHMpLGFwcGVuZENoaWxkKGMsZixzKSxhcHBlbmRDaGlsZChwLGMscyksYXBwZW5kQ2hpbGQoZCxwLHMpLHZvaWQgMCE9PWkmJihnLnBsYWNlaG9sZGVyPWkpLGFwcGVuZENoaWxkKGwsZCxzKSxhcHBlbmRDaGlsZChsLHYscyksYXBwZW5kQ2hpbGQodSxsLHMpLGFwcGVuZENoaWxkKHQsdSxzKSxyZW5kZXIobnVsbCx2LHIsZSxiLGEpLG4mJihnLnZhbHVlPW4sZy5vbmJsdXIoKSl9dmFyIHM9Z2V0U2NoZW1hSWQodCksdT1nZXRTY2hlbWEocyksbD1uZXcgT2JqZWN0O3I/KG4uZ2V0VmFsdWUoKXx8MD09PW4uZ2V0VmFsdWUoKSkmJihyW24uZ2V0VmFsdWUoKV09bCk6ZGF0YT1sO3ZhciBkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtkLmNsYXNzTmFtZT1cIm9iamVjdFwiO3ZhciBwPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTthcHBlbmRDaGlsZChkLHAsdSk7dmFyIGM9MDtpZih1Lmhhc093blByb3BlcnR5KFwicHJvcGVydGllc1wiKSl7Yz11LnByb3BlcnRpZXMubGVuZ3RoO2Zvcih2YXIgbSBpbiB1LnByb3BlcnRpZXMpe3ZhciBmPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKSxoPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtoLmNsYXNzTmFtZT1cInByb3AtbmFtZVwiO3ZhciB2PXQrXCIuXCIrbSxnPWdldFNjaGVtYShnZXRTY2hlbWFJZCh2KSkseT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7eS5jbGFzc05hbWU9XCJwcm9wLXZhbHVlXCIsYXBwZW5kQ2hpbGQocCxmLGcpLGFwcGVuZENoaWxkKGYsaCxnKSxhcHBlbmRDaGlsZChmLHksZyk7dmFyIGI9aShtKSxQPW51bGw7YSYmKFA9YVttXSkscmVuZGVyKGgseSx2LGwsYixQKX19dmFyIE89W107aWYodS5wYXR0ZXJuUHJvcGVydGllc3x8dS5hZGRpdGlvbmFsUHJvcGVydGllcyl7dmFyIHc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtpZihhcHBlbmRDaGlsZCh3LGQsdSksdS5wYXR0ZXJuUHJvcGVydGllcylmb3IodmFyIHggaW4gdS5wYXR0ZXJuUHJvcGVydGllcyl7dmFyIEM9dS5wYXR0ZXJuUHJvcGVydGllc1t4XSxFPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7RS5jbGFzc05hbWU9XCJhZGQtcGF0dGVybi1kaXZcIjt2YXIgUz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO2lmKFMuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiYnV0dG9uXCIpLFMucGF0dGVybj14LFMuaWQ9dCtcIltcIit4K1wiXVwiLFMub25jbGljaz1mdW5jdGlvbigpe28obCxkLHRoaXMuaWQsdm9pZCAwLHZvaWQgMCx0aGlzLnBhdHRlcm4pfSwodS5tYXhQcm9wZXJ0aWVzfHx1Lm1pblByb3BlcnRpZXMpJiYoUy5nZXRWYWxpZGF0aW9uRXJyb3I9ZnVuY3Rpb24oKXtyZXR1cm4gdS5taW5Qcm9wZXJ0aWVzJiZjK2Qucm93cy5sZW5ndGg8dS5taW5Qcm9wZXJ0aWVzP0JydXR1c2luRm9ybXMubWVzc2FnZXMubWluUHJvcGVydGllcy5mb3JtYXQodS5taW5Qcm9wZXJ0aWVzKTp1Lm1heFByb3BlcnRpZXMmJmMrZC5yb3dzLmxlbmd0aD51Lm1heFByb3BlcnRpZXM/QnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5tYXhQcm9wZXJ0aWVzLmZvcm1hdCh1Lm1heFByb3BlcnRpZXMpOnZvaWQgMH0pLEMuZGVzY3JpcHRpb24mJihTLnRpdGxlPUMuZGVzY3JpcHRpb24pLGFwcGVuZENoaWxkKFMsZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJBZGQgXCIreCksdSksYXBwZW5kQ2hpbGQoRSxTLHUpLGEpZm9yKHZhciBJIGluIGEpaWYoIXUucHJvcGVydGllc3x8IXUucHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShJKSl7dmFyIE49UmVnRXhwKHgpOy0xIT09SS5zZWFyY2goTikmJi0xPT09Ty5pbmRleE9mKEkpJiYobyhsLGQsdCtcIltcIit4K1wiXVwiLEksYVtJXSx4KSxPLnB1c2goSSkpfWFwcGVuZENoaWxkKHcsRSx1KX1pZih1LmFkZGl0aW9uYWxQcm9wZXJ0aWVzKXt2YXIgRj1nZXRTY2hlbWEodS5hZGRpdGlvbmFsUHJvcGVydGllcyksUz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO2lmKFMuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiYnV0dG9uXCIpLFMub25jbGljaz1mdW5jdGlvbigpe28obCxkLHQrXCJbKl1cIix2b2lkIDApfSwodS5tYXhQcm9wZXJ0aWVzfHx1Lm1pblByb3BlcnRpZXMpJiYoUy5nZXRWYWxpZGF0aW9uRXJyb3I9ZnVuY3Rpb24oKXtyZXR1cm4gdS5taW5Qcm9wZXJ0aWVzJiZjK2Qucm93cy5sZW5ndGg8dS5taW5Qcm9wZXJ0aWVzP0JydXR1c2luRm9ybXMubWVzc2FnZXMubWluUHJvcGVydGllcy5mb3JtYXQodS5taW5Qcm9wZXJ0aWVzKTp1Lm1heFByb3BlcnRpZXMmJmMrZC5yb3dzLmxlbmd0aD51Lm1heFByb3BlcnRpZXM/QnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5tYXhQcm9wZXJ0aWVzLmZvcm1hdCh1Lm1heFByb3BlcnRpZXMpOnZvaWQgMH0pLEYuZGVzY3JpcHRpb24mJihTLnRpdGxlPUYuZGVzY3JpcHRpb24pLGFwcGVuZENoaWxkKFMsZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJBZGRcIiksdSksYXBwZW5kQ2hpbGQodyxTLHUpLGEpZm9yKHZhciBJIGluIGEpdS5wcm9wZXJ0aWVzJiZ1LnByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoSSl8fC0xPT09Ty5pbmRleE9mKEkpJiZvKGwsZCx0KydbXCInK20rJ1wiXScsSSxhW0ldKX1hcHBlbmRDaGlsZChlLHcsdSl9ZWxzZSBhcHBlbmRDaGlsZChlLGQsdSl9LHJlbmRlcmVycy5hcnJheT1mdW5jdGlvbihlLHQscixuLGEpe2Z1bmN0aW9uIGkoZSx0LHIsbixhKXt2YXIgaT1nZXRTY2hlbWFJZChyKSxvPWdldFNjaGVtYShpKSxzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKSx1PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTt1LmNsYXNzTmFtZT1cIml0ZW1cIjt2YXIgbD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7bC5jbGFzc05hbWU9XCJpdGVtLWluZGV4XCI7dmFyIGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO2QuY2xhc3NOYW1lPVwiaXRlbS1hY3Rpb25cIjt2YXIgcD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7cC5jbGFzc05hbWU9XCJpdGVtLXZhbHVlXCI7dmFyIGM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtjLnNldEF0dHJpYnV0ZShcInR5cGVcIixcImJ1dHRvblwiKSxjLmNsYXNzTmFtZT1cInJlbW92ZVwiLGE9PT0hMCYmKGMuZGlzYWJsZWQ9ITApLGFwcGVuZENoaWxkKGMsZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJ4XCIpLG8pO3ZhciBtPWZ1bmN0aW9uKCl7Zm9yKHZhciBlPTA7ZTx0LnJvd3MubGVuZ3RoO2UrKyl7dmFyIHI9dC5yb3dzW2VdO3IuY2VsbHNbMF0uaW5uZXJIVE1MPWUrMX19O2Mub25jbGljaz1mdW5jdGlvbigpe2Uuc3BsaWNlKHUucm93SW5kZXgsMSksdC5kZWxldGVSb3codS5yb3dJbmRleCksbSgpfSxhcHBlbmRDaGlsZChkLGMsbyk7dmFyIGY9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodC5yb3dzLmxlbmd0aCsxKTthcHBlbmRDaGlsZChsLGYsbyksYXBwZW5kQ2hpbGQodSxsLG8pLGFwcGVuZENoaWxkKHUsZCxvKSxhcHBlbmRDaGlsZCh1LHAsbyksYXBwZW5kQ2hpbGQocyx1LG8pLGFwcGVuZENoaWxkKHQscyxvKTt2YXIgaD1jcmVhdGVQcm9wZXJ0eVByb3ZpZGVyKGZ1bmN0aW9uKCl7cmV0dXJuIHUucm93SW5kZXh9KTtyZW5kZXIobnVsbCxwLHIsZSxoLG4pfXZhciBvPWdldFNjaGVtYUlkKHQpLHM9Z2V0U2NoZW1hKG8pLHU9Z2V0U2NoZW1hKHMuaXRlbXMpLGw9bmV3IEFycmF5O3I/KG4uZ2V0VmFsdWUoKXx8MD09PW4uZ2V0VmFsdWUoKSkmJihyW24uZ2V0VmFsdWUoKV09bCk6ZGF0YT1sLG4mJihuLm9uY2hhbmdlPWZ1bmN0aW9uKGUpe2RlbGV0ZSByW2VdLHJbbi5nZXRWYWx1ZSgpXT1sfSk7dmFyIGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxwPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtwLmNsYXNzTmFtZT1cImFycmF5XCIsYXBwZW5kQ2hpbGQoZCxwLHMpLGFwcGVuZENoaWxkKGUsZCxzKTt2YXIgYz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO2lmKHMucmVhZE9ubHkmJihjLmRpc2FibGVkPSEwKSxjLnNldEF0dHJpYnV0ZShcInR5cGVcIixcImJ1dHRvblwiKSxjLmdldFZhbGlkYXRpb25FcnJvcj1mdW5jdGlvbigpe2lmKHMubWluSXRlbXMmJnMubWluSXRlbXM+cC5yb3dzLmxlbmd0aClyZXR1cm4gQnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5taW5JdGVtcy5mb3JtYXQocy5taW5JdGVtcyk7aWYocy5tYXhJdGVtcyYmcy5tYXhJdGVtczxwLnJvd3MubGVuZ3RoKXJldHVybiBCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLm1heEl0ZW1zLmZvcm1hdChzLm1heEl0ZW1zKTtpZihzLnVuaXF1ZUl0ZW1zKWZvcih2YXIgZT0wO2U8bC5sZW5ndGg7ZSsrKWZvcih2YXIgdD1lKzE7dDxsLmxlbmd0aDt0KyspaWYoSlNPTi5zdHJpbmdpZnkobFtlXSk9PT1KU09OLnN0cmluZ2lmeShsW3RdKSlyZXR1cm4gQnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy51bmlxdWVJdGVtc30sYy5vbmNsaWNrPWZ1bmN0aW9uKCl7aShsLHAsdCtcIlsjXVwiLG51bGwpfSx1LmRlc2NyaXB0aW9uJiYoYy50aXRsZT11LmRlc2NyaXB0aW9uKSxhcHBlbmRDaGlsZChjLGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKEJydXR1c2luRm9ybXMubWVzc2FnZXMuYWRkSXRlbSkscyksYXBwZW5kQ2hpbGQoZCxwLHMpLGFwcGVuZENoaWxkKGQsYyxzKSxhJiZhIGluc3RhbmNlb2YgQXJyYXkpZm9yKHZhciBtPTA7bTxhLmxlbmd0aDttKyspaShsLHAsdCtcIltcIittK1wiXVwiLGFbbV0scy5yZWFkT25seSk7YXBwZW5kQ2hpbGQoZSxkLHMpfSxvYmoucmVuZGVyPWZ1bmN0aW9uKGUsdCl7Y29udGFpbmVyPWUsaW5pdGlhbFZhbHVlPXQ7dmFyIHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7aWYoci5jbGFzc05hbWU9XCJicnV0dXNpbi1mb3JtXCIsci5vbnN1Ym1pdD1mdW5jdGlvbihlKXtyZXR1cm4hMX0sY29udGFpbmVyP2FwcGVuZENoaWxkKGNvbnRhaW5lcixyKTphcHBlbmRDaGlsZChkb2N1bWVudC5ib2R5LHIpLGVycm9yKXt2YXIgbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiksYT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShlcnJvcik7YXBwZW5kQ2hpbGQobixhKSxuLmNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2VcIixhcHBlbmRDaGlsZChyLG4pfWVsc2UgcmVuZGVyKG51bGwscixcIiRcIixudWxsLG51bGwpO2RlcGVuZGVuY3lNYXAuaGFzT3duUHJvcGVydHkoXCIkXCIpJiZvbkRlcGVuZGVuY3lDaGFuZ2VkKFwiJFwiKSxCcnV0dXNpbkZvcm1zLnBvc3RSZW5kZXImJkJydXR1c2luRm9ybXMucG9zdFJlbmRlcihvYmopfSxvYmouZ2V0UmVuZGVyaW5nQ29udGFpbmVyPWZ1bmN0aW9uKCl7cmV0dXJuIGNvbnRhaW5lcn0sb2JqLnZhbGlkYXRlPWZ1bmN0aW9uKCl7cmV0dXJuIHZhbGlkYXRlKGNvbnRhaW5lcil9LG9iai5nZXREYXRhPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LHIpe2lmKG51bGw9PT1zJiYocz1TQ0hFTUFfQU5ZKSxyLiRyZWYmJihyPWdldERlZmluaXRpb24oci4kcmVmKSksdCBpbnN0YW5jZW9mIEFycmF5KXtpZigwPT09dC5sZW5ndGgpcmV0dXJuIG51bGw7Zm9yKHZhciBuPW5ldyBBcnJheSxhPTA7YTx0Lmxlbmd0aDthKyspblthXT1lKHRbYV0sci5pdGVtcyk7cmV0dXJuIG59aWYoXCJcIj09PXQpcmV0dXJuIG51bGw7aWYodCBpbnN0YW5jZW9mIE9iamVjdCl7dmFyIG49bmV3IE9iamVjdCxpPSExO2Zvcih2YXIgbyBpbiB0KWlmKCFvLnN0YXJ0c1dpdGgoXCIkXCIpfHwhby5lbmRzV2l0aChcIiRcIikpe3ZhciBzPW51bGw7aWYoci5oYXNPd25Qcm9wZXJ0eShcInByb3BlcnRpZXNcIikmJnIucHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShvKSYmKHM9ci5wcm9wZXJ0aWVzW29dKSxudWxsPT09cyYmci5oYXNPd25Qcm9wZXJ0eShcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCIpJiZcIm9iamVjdFwiPT10eXBlb2Ygci5hZGRpdGlvbmFsUHJvcGVydGllcyYmKHM9ci5hZGRpdGlvbmFsUHJvcGVydGllcyksbnVsbD09PXMmJnIuaGFzT3duUHJvcGVydHkoXCJwYXR0ZXJuUHJvcGVydGllc1wiKSlmb3IodmFyIHUgaW4gci5wYXR0ZXJuUHJvcGVydGllcyl7dmFyIGw9UmVnRXhwKHUpO2lmKC0xIT09by5zZWFyY2gobCkpe3M9ci5wYXR0ZXJuUHJvcGVydGllc1t1XTticmVha319dmFyIGQ9ZSh0W29dLHMpO251bGwhPT1kJiYobltvXT1kLGk9ITApfXJldHVybiBpfHxyLnJlcXVpcmVkP246bnVsbH1yZXR1cm4gdH1yZXR1cm4gY29udGFpbmVyP2UoZGF0YSxzY2hlbWEpOm51bGx9LEJydXR1c2luRm9ybXMuaW5zdGFuY2VzW0JydXR1c2luRm9ybXMuaW5zdGFuY2VzLmxlbmd0aF09b2JqLG9ian0sYnJ1dHVzaW5bXCJqc29uLWZvcm1zXCJdPUJydXR1c2luRm9ybXN9KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JydXR1c2luLWpzb24tZm9ybXMvZGlzdC9qcy9icnV0dXNpbi1qc29uLWZvcm1zLm1pbi5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9iYXNlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIiFmdW5jdGlvbihmKXtpZihcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSltb2R1bGUuZXhwb3J0cz1mKCk7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKFtdLGYpO2Vsc2V7KFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OlwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWw/Z2xvYmFsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3NlbGY6dGhpcykuTWV0ZW9yRW1vamk9ZigpfX0oZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG58fGUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfWZvcih2YXIgaT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSh7MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7IWZ1bmN0aW9uKGdsb2JhbCxmYWN0b3J5KXtpZih2b2lkIDAhPT1leHBvcnRzKWZhY3RvcnkobW9kdWxlKTtlbHNle3ZhciBtb2Q9e2V4cG9ydHM6e319O2ZhY3RvcnkobW9kKSxnbG9iYWwubWV0ZW9yRW1vamk9bW9kLmV4cG9ydHN9fSh0aGlzLGZ1bmN0aW9uKG1vZHVsZSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIF9jcmVhdGVDbGFzcz1mdW5jdGlvbigpe2Z1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LHByb3BzKXtmb3IodmFyIGk9MDtpPHByb3BzLmxlbmd0aDtpKyspe3ZhciBkZXNjcmlwdG9yPXByb3BzW2ldO2Rlc2NyaXB0b3IuZW51bWVyYWJsZT1kZXNjcmlwdG9yLmVudW1lcmFibGV8fCExLGRlc2NyaXB0b3IuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIGRlc2NyaXB0b3ImJihkZXNjcmlwdG9yLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LGRlc2NyaXB0b3Iua2V5LGRlc2NyaXB0b3IpfX1yZXR1cm4gZnVuY3Rpb24oQ29uc3RydWN0b3IscHJvdG9Qcm9wcyxzdGF0aWNQcm9wcyl7cmV0dXJuIHByb3RvUHJvcHMmJmRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLHByb3RvUHJvcHMpLHN0YXRpY1Byb3BzJiZkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLHN0YXRpY1Byb3BzKSxDb25zdHJ1Y3Rvcn19KCksTWV0ZW9yRW1vamk9ZnVuY3Rpb24oKXtmdW5jdGlvbiBNZXRlb3JFbW9qaSgpeyFmdW5jdGlvbihpbnN0YW5jZSxDb25zdHJ1Y3Rvcil7aWYoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfSh0aGlzLE1ldGVvckVtb2ppKSx0aGlzLmluaXRpYXRlKCl9cmV0dXJuIF9jcmVhdGVDbGFzcyhNZXRlb3JFbW9qaSxbe2tleTpcImluaXRpYXRlXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgX3RoaXM9dGhpcztkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tZXRlb3ItZW1vamk9XCJ0cnVlXCJdLCBbZGF0YS1tZXRlb3ItZW1vamktbGFyZ2U9XCJ0cnVlXCJdJykuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KXtfdGhpcy5nZW5lcmF0ZUVsZW1lbnRzKGVsZW1lbnQpfSl9fSx7a2V5OlwiZ2VuZXJhdGVFbGVtZW50c1wiLHZhbHVlOmZ1bmN0aW9uKGVtb2ppSW5wdXQpe3ZhciBjbGlja0xpbms9ZnVuY3Rpb24oZXZlbnQpe3ZhciBjYXJldFBvcz1lbW9qaUlucHV0LnNlbGVjdGlvblN0YXJ0O2Vtb2ppSW5wdXQudmFsdWU9ZW1vamlJbnB1dC52YWx1ZS5zdWJzdHJpbmcoMCxjYXJldFBvcykrXCIgXCIrZXZlbnQudGFyZ2V0LmlubmVySFRNTCtlbW9qaUlucHV0LnZhbHVlLnN1YnN0cmluZyhjYXJldFBvcyksZW1vamlQaWNrZXIuc3R5bGUuZGlzcGxheT1cImJsb2NrXCIsXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGFuZ3VsYXImJmFuZ3VsYXIuZWxlbWVudChlbW9qaUlucHV0KS50cmlnZ2VySGFuZGxlcihcImNoYW5nZVwiKX0sY2xpY2tDYXRlZ29yeT1mdW5jdGlvbihldmVudCl7ZW1vamlJbnB1dC5zZWxlY3Rpb25TdGFydDtlbW9qaVBpY2tlci5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtmb3IodmFyIGhpZGVVbHM9ZW1vamlQaWNrZXIucXVlcnlTZWxlY3RvckFsbChcInVsXCIpLGk9MSxsPWhpZGVVbHMubGVuZ3RoO2k8bDtpKyspaGlkZVVsc1tpXS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO3ZhciBiYWNrZ3JvdW5kVG9nZ2xlPWVtb2ppUGlja2VyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2F0ZWdvcnkgYVwiKTtmb3IoaT0wLGw9YmFja2dyb3VuZFRvZ2dsZS5sZW5ndGg7aTxsO2krKyliYWNrZ3JvdW5kVG9nZ2xlW2ldLnN0eWxlLmJhY2tncm91bmQ9XCJub25lXCI7ZW1vamlQaWNrZXIucXVlcnlTZWxlY3RvcihcIi5cIitldmVudC50YXJnZXQuaWQpLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiLGVtb2ppUGlja2VyLnF1ZXJ5U2VsZWN0b3IoXCIjXCIrZXZlbnQudGFyZ2V0LmlkKS5zdHlsZS5iYWNrZ3JvdW5kPVwiI2MyYzJjMlwifTtlbW9qaUlucHV0LnN0eWxlLndpZHRoPVwiMTAwJVwiO3ZhciBlbW9qaUNvbnRhaW5lcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2Vtb2ppQ29udGFpbmVyLnN0eWxlLnBvc2l0aW9uPVwicmVsYXRpdmVcIixlbW9qaUlucHV0LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGVtb2ppQ29udGFpbmVyLGVtb2ppSW5wdXQpLGVtb2ppQ29udGFpbmVyLmFwcGVuZENoaWxkKGVtb2ppSW5wdXQpO3ZhciBlbW9qaVBpY2tlcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2Vtb2ppUGlja2VyLnRhYkluZGV4PTAsZW1vamlJbnB1dC5oYXNBdHRyaWJ1dGUoXCJkYXRhLW1ldGVvci1lbW9qaS1sYXJnZVwiKT8oZW1vamlQaWNrZXIuc3R5bGUuekluZGV4PVwiOTk5XCIsZW1vamlQaWNrZXIuc3R5bGUuZGlzcGxheT1cImJsb2NrXCIsZW1vamlQaWNrZXIuc3R5bGUud2lkdGg9XCIxMDAlXCIsZW1vamlQaWNrZXIuc3R5bGUubWFyZ2luQm90dG9tPVwiMTVweFwiKTooZW1vamlQaWNrZXIuc3R5bGUucG9zaXRpb249XCJhYnNvbHV0ZVwiLGVtb2ppUGlja2VyLnN0eWxlLnJpZ2h0PVwiMHB4XCIsZW1vamlQaWNrZXIuc3R5bGUudG9wPVwiMzBweFwiLGVtb2ppUGlja2VyLnN0eWxlLmRpc3BsYXk9XCJub25lXCIsZW1vamlQaWNrZXIuc3R5bGUud2lkdGg9XCI0MDBweFwiKSxlbW9qaVBpY2tlci5zdHlsZS56SW5kZXg9XCI5OTlcIixlbW9qaVBpY2tlci5zdHlsZS5vdmVyZmxvdz1cImhpZGRlblwiLGVtb2ppUGlja2VyLnN0eWxlLmJhY2tncm91bmQ9XCIjZmZmXCIsZW1vamlQaWNrZXIuc3R5bGUuYm9yZGVyUmFkaXVzPVwiNXB4XCIsZW1vamlQaWNrZXIuc3R5bGUuYm94U2hhZG93PVwiMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMjMpXCIsZW1vamlQaWNrZXIuc3R5bGUuYm9yZGVyUmFkaXVzPVwiMnB4O1wiLGVtb2ppUGlja2VyLnN0eWxlLm1hcmdpblRvcD1cIjVweFwiLGVtb2ppUGlja2VyLnN0eWxlLm91dGxpbmU9XCJub25lXCI7dmFyIGVtb2ppVHJpZ2dlcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtlbW9qaVRyaWdnZXIuc3R5bGUucG9zaXRpb249XCJhYnNvbHV0ZVwiLGVtb2ppVHJpZ2dlci5zdHlsZS50b3A9XCIxMHB4XCIsZW1vamlUcmlnZ2VyLnN0eWxlLnJpZ2h0PVwiMTBweFwiLGVtb2ppVHJpZ2dlci5zdHlsZS50ZXh0RGVjb3JhdGlvbj1cIm5vbmVcIixlbW9qaVRyaWdnZXIuc2V0QXR0cmlidXRlKFwiaHJlZlwiLFwiamF2YXNjcmlwdDp2b2lkKDApXCIpLGVtb2ppVHJpZ2dlci5pbm5lckhUTUw9JzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMTIgMTRcIj48cGF0aCBkPVwiTTguOSA4LjRxLTAuMyAwLjktMS4xIDEuNXQtMS44IDAuNi0xLjgtMC42LTEuMS0xLjVxLTAuMS0wLjIgMC0wLjR0MC4zLTAuMnEwLjItMC4xIDAuNCAwdDAuMiAwLjNxMC4yIDAuNiAwLjcgMXQxLjIgMC40IDEuMi0wLjQgMC43LTFxMC4xLTAuMiAwLjMtMC4zdDAuNCAwIDAuMyAwLjIgMCAwLjR6TTUgNXEwIDAuNC0wLjMgMC43dC0wLjcgMC4zLTAuNy0wLjMtMC4zLTAuNyAwLjMtMC43IDAuNy0wLjMgMC43IDAuMyAwLjMgMC43ek05IDVxMCAwLjQtMC4zIDAuN3QtMC43IDAuMy0wLjctMC4zLTAuMy0wLjcgMC4zLTAuNyAwLjctMC4zIDAuNyAwLjMgMC4zIDAuN3pNMTEgN3EwLTEtMC40LTEuOXQtMS4xLTEuNi0xLjYtMS4xLTEuOS0wLjQtMS45IDAuNC0xLjYgMS4xLTEuMSAxLjYtMC40IDEuOSAwLjQgMS45IDEuMSAxLjYgMS42IDEuMSAxLjkgMC40IDEuOS0wLjQgMS42LTEuMSAxLjEtMS42IDAuNC0xLjl6TTEyIDdxMCAxLjYtMC44IDN0LTIuMiAyLjItMyAwLjgtMy0wLjgtMi4yLTIuMi0wLjgtMyAwLjgtMyAyLjItMi4yIDMtMC44IDMgMC44IDIuMiAyLjIgMC44IDN6XCIvPjwvc3ZnPicsZW1vamlUcmlnZ2VyLm9uY2xpY2s9ZnVuY3Rpb24oKXtcIm5vbmVcIj09PWVtb2ppUGlja2VyLnN0eWxlLmRpc3BsYXk/ZW1vamlQaWNrZXIuc3R5bGUuZGlzcGxheT1cImJsb2NrXCI6XCJibG9ja1wiPT09ZW1vamlQaWNrZXIuc3R5bGUuZGlzcGxheSYmKGVtb2ppUGlja2VyLnN0eWxlLmRpc3BsYXk9XCJub25lXCIpLGVtb2ppUGlja2VyLmZvY3VzKCl9LGVtb2ppSW5wdXQuaGFzQXR0cmlidXRlKFwiZGF0YS1tZXRlb3ItZW1vamktbGFyZ2VcIil8fGVtb2ppQ29udGFpbmVyLmFwcGVuZENoaWxkKGVtb2ppVHJpZ2dlciksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKGUpe2Vtb2ppSW5wdXQuaGFzQXR0cmlidXRlKFwiZGF0YS1tZXRlb3ItZW1vamktbGFyZ2VcIil8fFwiYmxvY2tcIj09PWVtb2ppUGlja2VyLnN0eWxlLmRpc3BsYXkmJihlbW9qaVBpY2tlci5jb250YWlucyhlLnRhcmdldCl8fGVtb2ppVHJpZ2dlci5jb250YWlucyhlLnRhcmdldCl8fChlbW9qaVBpY2tlci5zdHlsZS5kaXNwbGF5PVwibm9uZVwiKSl9KTt2YXIgZmFjZXNDYXRlZ29yeT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7ZmFjZXNDYXRlZ29yeS5zdHlsZS5wYWRkaW5nPVwiMTBweCAwcHhcIixmYWNlc0NhdGVnb3J5LnN0eWxlLm1hcmdpbj1cIjBcIixmYWNlc0NhdGVnb3J5LnN0eWxlLmxpc3RTdHlsZT1cIm5vbmVcIixmYWNlc0NhdGVnb3J5LnN0eWxlLnRleHRBbGlnbj1cImxlZnRcIixmYWNlc0NhdGVnb3J5LnN0eWxlLm1hcmdpbkxlZnQ9XCIzJVwiLGZhY2VzQ2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChcImZhY2VzXCIpO3ZhciBhbmltYWxzQ2F0ZWdvcnk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO2FuaW1hbHNDYXRlZ29yeS5zdHlsZS5wYWRkaW5nPVwiMTBweCAwcHhcIixhbmltYWxzQ2F0ZWdvcnkuc3R5bGUubWFyZ2luPVwiMFwiLGFuaW1hbHNDYXRlZ29yeS5zdHlsZS5saXN0U3R5bGU9XCJub25lXCIsYW5pbWFsc0NhdGVnb3J5LnN0eWxlLnRleHRBbGlnbj1cImxlZnRcIixhbmltYWxzQ2F0ZWdvcnkuc3R5bGUubWFyZ2luTGVmdD1cIjMlXCIsYW5pbWFsc0NhdGVnb3J5LmNsYXNzTGlzdC5hZGQoXCJhbmltYWxzXCIpLGFuaW1hbHNDYXRlZ29yeS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO3ZhciBmb29kQ2F0ZWdvcnk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO2Zvb2RDYXRlZ29yeS5zdHlsZS5wYWRkaW5nPVwiMTBweCAwcHhcIixmb29kQ2F0ZWdvcnkuc3R5bGUubWFyZ2luPVwiMFwiLGZvb2RDYXRlZ29yeS5zdHlsZS5saXN0U3R5bGU9XCJub25lXCIsZm9vZENhdGVnb3J5LnN0eWxlLnRleHRBbGlnbj1cImxlZnRcIixmb29kQ2F0ZWdvcnkuc3R5bGUubWFyZ2luTGVmdD1cIjMlXCIsZm9vZENhdGVnb3J5LmNsYXNzTGlzdC5hZGQoXCJmb29kXCIpLGZvb2RDYXRlZ29yeS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO3ZhciBzcG9ydENhdGVnb3J5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtzcG9ydENhdGVnb3J5LnN0eWxlLnBhZGRpbmc9XCIxMHB4IDBweFwiLHNwb3J0Q2F0ZWdvcnkuc3R5bGUubWFyZ2luPVwiMFwiLHNwb3J0Q2F0ZWdvcnkuc3R5bGUubGlzdFN0eWxlPVwibm9uZVwiLHNwb3J0Q2F0ZWdvcnkuc3R5bGUudGV4dEFsaWduPVwibGVmdFwiLHNwb3J0Q2F0ZWdvcnkuc3R5bGUubWFyZ2luTGVmdD1cIjMlXCIsc3BvcnRDYXRlZ29yeS5jbGFzc0xpc3QuYWRkKFwic3BvcnRcIiksc3BvcnRDYXRlZ29yeS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO3ZhciB0cmFuc3BvcnRDYXRlZ29yeT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7dHJhbnNwb3J0Q2F0ZWdvcnkuc3R5bGUucGFkZGluZz1cIjEwcHggMHB4XCIsdHJhbnNwb3J0Q2F0ZWdvcnkuc3R5bGUubWFyZ2luPVwiMFwiLHRyYW5zcG9ydENhdGVnb3J5LnN0eWxlLmxpc3RTdHlsZT1cIm5vbmVcIix0cmFuc3BvcnRDYXRlZ29yeS5zdHlsZS50ZXh0QWxpZ249XCJsZWZ0XCIsdHJhbnNwb3J0Q2F0ZWdvcnkuc3R5bGUubWFyZ2luTGVmdD1cIjMlXCIsdHJhbnNwb3J0Q2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChcInRyYW5zcG9ydFwiKSx0cmFuc3BvcnRDYXRlZ29yeS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO3ZhciBvYmplY3RzQ2F0ZWdvcnk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO29iamVjdHNDYXRlZ29yeS5zdHlsZS5wYWRkaW5nPVwiMTBweCAwcHhcIixvYmplY3RzQ2F0ZWdvcnkuc3R5bGUubWFyZ2luPVwiMFwiLG9iamVjdHNDYXRlZ29yeS5zdHlsZS5saXN0U3R5bGU9XCJub25lXCIsb2JqZWN0c0NhdGVnb3J5LnN0eWxlLnRleHRBbGlnbj1cImxlZnRcIixvYmplY3RzQ2F0ZWdvcnkuc3R5bGUubWFyZ2luTGVmdD1cIjMlXCIsb2JqZWN0c0NhdGVnb3J5LmNsYXNzTGlzdC5hZGQoXCJvYmplY3RzXCIpLG9iamVjdHNDYXRlZ29yeS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO3ZhciBlbW9qaUNhdGVnb3J5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtlbW9qaUNhdGVnb3J5LnN0eWxlLnBhZGRpbmc9XCIwcHhcIixlbW9qaUNhdGVnb3J5LnN0eWxlLm1hcmdpbj1cIjBcIixlbW9qaUNhdGVnb3J5LnN0eWxlLmRpc3BsYXk9XCJ0YWJsZVwiLGVtb2ppQ2F0ZWdvcnkuc3R5bGUud2lkdGg9XCIxMDAlXCIsZW1vamlDYXRlZ29yeS5zdHlsZS5iYWNrZ3JvdW5kPVwiI2VmZjBmMVwiLGVtb2ppQ2F0ZWdvcnkuc3R5bGUubGlzdFN0eWxlPVwibm9uZVwiLGVtb2ppQ2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChcImNhdGVnb3J5XCIpO3ZhciBlbW9qaUNhdGVnb3JpZXM9bmV3IEFycmF5O2Vtb2ppQ2F0ZWdvcmllcy5wdXNoKHtuYW1lOlwiZmFjZXNcIixzdmc6JzxzdmcgaWQ9XCJmYWNlc1wiIGRhdGEtbmFtZT1cIkxheWVyIDFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAxNTAgMTUwXCI+PHBhdGggaWQ9XCJmYWNlc1wiIGQ9XCJNNzQuMzQsMTI4LjQ4YTUzLjUsNTMuNSwwLDEsMSwzNy44NC0xNS42Nyw1My4xNiw1My4xNiwwLDAsMS0zNy44NCwxNS42N1ptMC05Ny44OWE0NC40LDQ0LjQsMCwxLDAsMzEuNCwxMyw0NC4wNyw0NC4wNywwLDAsMC0zMS40LTEzWlwiLz48cGF0aCBpZD1cImZhY2VzXCIgZD1cIk03NC4zNSwxMDhBMzMuMDcsMzMuMDcsMCwwLDEsNDEuMjksNzVhMi4yOCwyLjI4LDAsMCwxLDIuMjctMi4yOGgwQTIuMjcsMi4yNywwLDAsMSw0NS44Myw3NWEyOC41MiwyOC41MiwwLDAsMCw1NywwLDIuMjcsMi4yNywwLDAsMSw0LjU0LDBBMzMuMDksMzMuMDksMCwwLDEsNzQuMzUsMTA4WlwiLz48cGF0aCBpZD1cImZhY2VzXCIgZD1cIk01OC44NCw2MmE2LjgxLDYuODEsMCwxLDAsNi44MSw2LjgxQTYuODEsNi44MSwwLDAsMCw1OC44NCw2MlpcIi8+PHBhdGggaWQ9XCJmYWNlc1wiIGQ9XCJNODkuODcsNjJhNi44MSw2LjgxLDAsMSwwLDYuODEsNi44MUE2LjgyLDYuODIsMCwwLDAsODkuODcsNjJaXCIvPjwvc3ZnPid9KSxlbW9qaUNhdGVnb3JpZXMucHVzaCh7bmFtZTpcImFuaW1hbHNcIixzdmc6JzxzdmcgaWQ9XCJhbmltYWxzXCIgZGF0YS1uYW1lPVwiTGF5ZXIgMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDE1MCAxNTBcIj48cGF0aCBpZD1cImFuaW1hbHNcIiBkPVwiTTU5LjksOTEuNzVoMGMtMjIuNDYsMC00MS44Mi0xOS4zNC00NC4wOS00NEE1Mi4xLDUyLjEsMCwwLDEsMTYsMzYuOGE0LjUxLDQuNTEsMCwwLDEsMi42My0zLjYyLDM5Ljc5LDM5Ljc5LDAsMCwxLDEyLjc0LTMuMzdjMjMuOTItMi4xNSw0NS4zNSwxNy44Myw0Ny43NCw0My44NmE1Mi43Nyw1Mi43NywwLDAsMS0uMTUsMTAuOTMsNC41Niw0LjU2LDAsMCwxLTIuNjQsMy42MiwzOS42NywzOS42NywwLDAsMS0xMi43MywzLjM2Yy0xLjIzLjExLTIuNDUuMTctMy42Ni4xN1pNMjQuNzYsNDAuNDlhNDEuMjksNDEuMjksMCwwLDAsLjA5LDYuNEMyNi43LDY3LDQyLjA5LDgyLjY2LDU5LjksODIuNjdoMGMuOTQsMCwxLjg4LDAsMi44My0uMTRhMzAuMzksMzAuMzksMCwwLDAsNy40MS0xLjYyLDQxLjE0LDQxLjE0LDAsMCwwLS4xMS02LjRDNjguMDksNTMuMzgsNTEuMTEsMzcuMDgsMzIuMTcsMzguODZhMzAuNzgsMzAuNzgsMCwwLDAtNy40MSwxLjYzWlwiLz48cGF0aCBpZD1cImFuaW1hbHNcIiBkPVwiTTM2LjY4LDEyNS42NGE0LjUzLDQuNTMsMCwwLDEtNC4zMy0zLjE3LDUzLjMyLDUzLjMyLDAsMCwxLTIuMjYtMTFBNTAuNDIsNTAuNDIsMCwwLDEsMzkuNTEsNzYuNmM3LjM1LTkuOTEsMTcuODQtMTYsMjkuNS0xNywxLjE2LS4xMSwyLjMzLS4xMywzLjQ3LS4xM2E0LjU0LDQuNTQsMCwwLDEsNC4zMywzLjE2LDUxLjU5LDUxLjU5LDAsMCwxLDIuMjcsMTEuMDgsNTAuMzksNTAuMzksMCwwLDEtOS40MiwzNC44Yy03LjM1LDkuOTEtMTcuODMsMTYtMjkuNSwxN2ExNy42MywxNy42MywwLDAsMS0zLjQ4LjEyWk02OS4wOSw2OC42OUEzMi40MSwzMi40MSwwLDAsMCw0Ni44LDgyYTQyLjU3LDQyLjU3LDAsMCwwLTYuNzEsMzQuMzgsMzIuMzgsMzIuMzgsMCwwLDAsMjIuMjgtMTMuMzJBNDEuMzUsNDEuMzUsMCwwLDAsNzAsNzQuNTFhMzkuMzgsMzkuMzgsMCwwLDAtLjk0LTUuODJaXCIvPjxwYXRoIGlkPVwiYW5pbWFsc1wiIGQ9XCJNOTAuMjcsOTEuNzVjLTEuMjIsMC0yLjQzLS4wNi0zLjY2LS4xN2EzOS42NywzOS42NywwLDAsMS0xMi43My0zLjM2LDQuNTcsNC41NywwLDAsMS0yLjY0LTMuNjEsNTMuMzgsNTMuMzgsMCwwLDEtLjE3LTEwLjkzYzIuNDEtMjYsMjMuNy00Ni4wNyw0Ny43Ni00My44N2EzOS43NCwzOS43NCwwLDAsMSwxMi43MywzLjM3LDQuNTcsNC41NywwLDAsMSwyLjY0LDMuNjIsNTMuMzUsNTMuMzUsMCwwLDEsLjE2LDEwLjkyYy0yLjI4LDI0LjY5LTIxLjY1LDQ0LTQ0LjA5LDQ0Wk04MCw4MC45MWEzMC41NywzMC41NywwLDAsMCw3LjQyLDEuNjJjMTkuMDcsMS43OCwzNS45Mi0xNC41MywzNy44Ny0zNS42NGE0Mi41NSw0Mi41NSwwLDAsMCwuMS02LjRBMzAuODYsMzAuODYsMCwwLDAsMTE4LDM4Ljg2Qzk5LDM3LjA3LDgyLjA2LDUzLjM4LDgwLjEyLDc0LjUxYTQzLjkxLDQzLjkxLDAsMCwwLS4xLDYuNFpcIi8+PHBhdGggaWQ9XCJhbmltYWxzXCIgZD1cIk0xMTMuNDksMTI1LjY0aDBjLTEuMTYsMC0yLjMsMC0zLjQ2LS4xMi0yMy45LTIuMjEtNDEuMzYtMjUuNDctMzguOTQtNTEuODVBNTMuNTIsNTMuNTIsMCwwLDEsNzMuMzQsNjIuNmE0LjU1LDQuNTUsMCwwLDEsNC4zMy0zLjE2YzEuMTYsMCwyLjM0LDAsMy41MS4xMywxMS42NCwxLjA3LDIyLjExLDcuMTIsMjkuNDgsMTdhNTAuNTEsNTAuNTEsMCwwLDEsOS40MiwzNC44MSw1My41MSw1My41MSwwLDAsMS0yLjI2LDExLDQuNTQsNC41NCwwLDAsMS00LjMzLDMuMTlaTTgxLjA4LDY4LjY5YTQyLjUzLDQyLjUzLDAsMCwwLTEsNS44MmMtMS45NCwyMS4xLDExLjQ1LDM5LjcxLDI5Ljk1LDQxLjg4QTQyLjM4LDQyLjM4LDAsMCwwLDEwMy4zNiw4MiwzMi40MiwzMi40MiwwLDAsMCw4MS4wOCw2OC42OVpcIi8+PHBhdGggaWQ9XCJhbmltYWxzXCIgZD1cIk03NS4wOCw0NS40NWE3LjgzLDcuODMsMCwxLDAsNy44Myw3LjgzLDcuODMsNy44MywwLDAsMC03LjgzLTcuODNaXCIvPjxwYXRoIGlkPVwiYW5pbWFsc1wiIGQ9XCJNNzYuMjksNTEuODlhMi4yNiwyLjI2LDAsMCwxLTIuMTQtM0E0Niw0NiwwLDAsMSw5Mi44MiwyNS4zNGEyLjI3LDIuMjcsMCwxLDEsMi40LDMuODZBNDEuNCw0MS40LDAsMCwwLDc4LjQzLDUwLjM5YTIuMjgsMi4yOCwwLDAsMS0yLjE0LDEuNVpcIi8+PHBhdGggaWQ9XCJhbmltYWxzXCIgZD1cIk03My44Nyw1MS44OWEyLjI4LDIuMjgsMCwwLDEtMi4xNC0xLjVBNDEuMzUsNDEuMzUsMCwwLDAsNTQuOTQsMjkuMmEyLjI3LDIuMjcsMCwwLDEsMi4zOS0zLjg2QTQ2LDQ2LDAsMCwxLDc2LDQ4Ljg1YTIuMjgsMi4yOCwwLDAsMS0xLjM3LDIuOTEsMi4zMSwyLjMxLDAsMCwxLS43Ny4xM1pcIi8+PC9zdmc+J30pLGVtb2ppQ2F0ZWdvcmllcy5wdXNoKHtuYW1lOlwiZm9vZFwiLHN2ZzonPHN2ZyBpZD1cImZvb2RcIiBkYXRhLW5hbWU9XCJMYXllciAxXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMTUwIDE1MFwiPjxwYXRoIGlkPVwiZm9vZFwiIGQ9XCJNMTA0LDIwLjc2aC4xNWMxNS44My41MiwyNC4wOCwyMS40OCwyNC4wNywzMi41Ni4yNiwxMi40Mi0xMC43MiwyMy41NS0yNCwyNC4yMWEzLjUzLDMuNTMsMCwwLDEtLjQ2LDBjLTEzLjI1LS42Ni0yNC4yMy0xMS44LTI0LTI0LjMsMC0xMSw4LjI2LTMxLjk1LDI0LjA3LTMyLjQ3Wm0wLDQ3LjY5YzguMjUtLjU0LDE1LjMtNy41MSwxNS4xNC0xNSwwLTguMTItNi4yMi0yMy4xLTE1LjE0LTIzLjU3LTguOS40Ni0xNS4xNCwxNS40NS0xNS4xNCwyMy40OC0uMTQsNy42MSw2LjksMTQuNTksMTUuMTQsMTUuMTNaXCIvPjxwYXRoIGlkPVwiZm9vZFwiIGQ9XCJNOTcuMTksNjkuMjFoLjE0YTQuNTMsNC41MywwLDAsMSw0LjQsNC42OGwtMS40OCw0Ni45MmExLjU5LDEuNTksMCwwLDAsLjUsMS4wNiw0LjYsNC42LDAsMCwwLDMuMjUsMS4xOWgwYTQuNTcsNC41NywwLDAsMCwzLjI2LTEuMiwxLjUzLDEuNTMsMCwwLDAsLjQ5LTFsLTEuNDgtNDYuOTVhNC41NCw0LjU0LDAsMSwxLDkuMDgtLjI4bDEuNDcsNDYuOTFhMTAuNDIsMTAuNDIsMCwwLDEtMyw3LjY1LDEzLjY1LDEzLjY1LDAsMCwxLTkuODEsNGgwYTEzLjU4LDEzLjU4LDAsMCwxLTkuNzktNCwxMC40MiwxMC40MiwwLDAsMS0zLTcuNjdsMS40OC00Ni44OWE0LjUzLDQuNTMsMCwwLDEsNC41My00LjRaXCIvPjxwYXRoIGlkPVwiZm9vZFwiIGQ9XCJNNDEuODQsNjkuMjFINDJhNC41Myw0LjUzLDAsMCwxLDQuNCw0LjY4TDQ0LjksMTIwLjgxYTEuNTcsMS41NywwLDAsMCwuNSwxLjA2LDQuNiw0LjYsMCwwLDAsMy4yNSwxLjE5aDBhNC41MSw0LjUxLDAsMCwwLDMuMjQtMS4xOSwxLjQ4LDEuNDgsMCwwLDAsLjUtMUw1MC45Myw3My44OWE0LjUzLDQuNTMsMCwwLDEsNC4zOS00LjY4QTQuNCw0LjQsMCwwLDEsNjAsNzMuNjFsMS40OCw0Ni45MWExMC40OSwxMC40OSwwLDAsMS0zLDcuNjYsMTMuNTcsMTMuNTcsMCwwLDEtOS43OCw0aDBhMTMuNTksMTMuNTksMCwwLDEtOS43OC00LDEwLjQ4LDEwLjQ4LDAsMCwxLTMtNy42N2wxLjQ4LTQ2LjlhNC41NCw0LjU0LDAsMCwxLDQuNTQtNC40WlwiLz48cGF0aCBpZD1cImZvb2RcIiBkPVwiTTI4LjU5LDIwLjc2YTQuNTQsNC41NCwwLDAsMSw0LjU0LDQuNTRWNTFhMTUuNTIsMTUuNTIsMCwwLDAsMzEsMFYyNS4zYTQuNTUsNC41NSwwLDAsMSw5LjA5LDBWNTFhMjQuNjEsMjQuNjEsMCwxLDEtNDkuMjEsMFYyNS4zYTQuNTQsNC41NCwwLDAsMSw0LjU0LTQuNTRaXCIvPjxwYXRoIGlkPVwiZm9vZFwiIGQ9XCJNNTUuMzQsMjAuNzZhNC41NCw0LjU0LDAsMCwxLDQuNTQsNC41NHYxOWE0LjU0LDQuNTQsMCwxLDEtOS4wOCwwdi0xOWE0LjU0LDQuNTQsMCwwLDEsNC41NC00LjU0WlwiLz48cGF0aCBpZD1cImZvb2RcIiBkPVwiTTQyLDIwLjc2YTQuNTQsNC41NCwwLDAsMSw0LjU0LDQuNTR2MTlhNC41NCw0LjU0LDAsMSwxLTkuMDgsMHYtMTlBNC41NCw0LjU0LDAsMCwxLDQyLDIwLjc2WlwiLz48L3N2Zz4nfSksZW1vamlDYXRlZ29yaWVzLnB1c2goe25hbWU6XCJzcG9ydFwiLHN2ZzonPHN2ZyBpZD1cInNwb3J0XCIgZGF0YS1uYW1lPVwiTGF5ZXIgMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDE1MCAxNTBcIj48cGF0aCBpZD1cInNwb3J0XCIgZD1cIk03NS4zNSwxMzAuMjRhNTMuNDksNTMuNDksMCwxLDEsNTMuNDgtNTMuNDksNTMuNTUsNTMuNTUsMCwwLDEtNTMuNDgsNTMuNDlabTAtOTcuODlhNDQuNDEsNDQuNDEsMCwxLDAsNDQuNCw0NC40LDQ0LjEsNDQuMSwwLDAsMC00NC40LTQ0LjRaXCIvPjxwYXRoIGlkPVwic3BvcnRcIiBkPVwiTTExOS4yNCw4NC4wOEE1MS4yOSw1MS4yOSwwLDAsMSw2OCwzMi44NmE0OS40NCw0OS40NCwwLDAsMSwuMjYtNSwyLjI2LDIuMjYsMCwwLDEsMi0yYzEuNjYtLjE2LDMuMzQtLjI1LDUtLjI1YTUxLjI2LDUxLjI2LDAsMCwxLDUxLjIxLDUxLjIxYzAsMS43MS0uMDksMy4zOC0uMjUsNWEyLjI4LDIuMjgsMCwwLDEtMiwyYy0xLjY1LjE2LTMuMzMuMjUtNSwuMjVaTTcyLjY0LDMwLjE2Yy0uMDYuOS0uMDgsMS43OS0uMDgsMi43YTQ2LjczLDQ2LjczLDAsMCwwLDQ2LjY4LDQ2LjY4cTEuMzcsMCwyLjctLjA5Yy4wNi0uODkuMDgtMS43OS4wOC0yLjdBNDYuNzIsNDYuNzIsMCwwLDAsNzUuMzUsMzAuMDhjLS45MSwwLTEuODIsMC0yLjcxLjA4WlwiLz48cGF0aCBpZD1cInNwb3J0XCIgZD1cIk03NS4zNSwxMjhBNTEuMjgsNTEuMjgsMCwwLDEsMjQuMTIsNzYuNzZjMC0xLjcuMS0zLjM4LjI1LTVhMi4yOSwyLjI5LDAsMCwxLDItMmMxLjY2LS4xNiwzLjMzLS4yNSw1LjA1LS4yNWE1MS4yNyw1MS4yNywwLDAsMSw1MS4yMSw1MS4yMmMwLDEuNjktLjA5LDMuMzctLjI1LDVhMi4yNywyLjI3LDAsMCwxLTIsMmMtMS42Ni4xNi0zLjMyLjI1LTUsLjI1Wk0yOC43NSw3NC4wNWMtLjA1LjktLjA5LDEuOC0uMDksMi43MWE0Ni43NCw0Ni43NCwwLDAsMCw0Ni42OSw0Ni42N2MuOTEsMCwxLjgsMCwyLjctLjA4LDAtLjkuMDgtMS44LjA4LTIuN0E0Ni43Myw0Ni43MywwLDAsMCwzMS40Niw3NGMtLjkxLDAtMS44MSwwLTIuNzEuMDhaXCIvPjxwb2x5Z29uIGlkPVwic3BvcnRcIiBwb2ludHM9XCI0Mi42OSAxMTIuNjEgMzkuNDggMTA5LjQgMTA4IDQwLjg4IDExMS4yMSA0NC4xIDQyLjY5IDExMi42MSA0Mi42OSAxMTIuNjFcIi8+PC9zdmc+J30pLGVtb2ppQ2F0ZWdvcmllcy5wdXNoKHtuYW1lOlwidHJhbnNwb3J0XCIsc3ZnOic8c3ZnIGlkPVwidHJhbnNwb3J0XCIgZGF0YS1uYW1lPVwiTGF5ZXIgMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDE1MCAxNTBcIj48cGF0aCBpZD1cInRyYW5zcG9ydFwiIGQ9XCJNMTIwLjcsMTE2SDMxYTQuNTUsNC41NSwwLDAsMS00LjU0LTQuNTVWNTQuMjhBMzEuODIsMzEuODIsMCwwLDEsNTguMjUsMjIuNDloMzUuMmEzMS44MywzMS44MywwLDAsMSwzMS44LDMxLjc5djU3LjE1QTQuNTUsNC41NSwwLDAsMSwxMjAuNywxMTZabS04NS4xNi05LjA5aDgwLjYyVjU0LjI4QTIyLjc0LDIyLjc0LDAsMCwwLDkzLjQ1LDMxLjU3SDU4LjI1QTIyLjc0LDIyLjc0LDAsMCwwLDM1LjU0LDU0LjI4djUyLjYxWlwiLz48cGF0aCBpZD1cInRyYW5zcG9ydFwiIGQ9XCJNNDkuMzUsMTI5LjIzYy04LjUzLDAtMTMuNjItMi43Ny0xMy42Mi03LjQxVjExNS42YTQuNTQsNC41NCwwLDEsMSw5LjA4LDB2NC4wNmEyMS4zMiwyMS4zMiwwLDAsMCw5LjA5LDBWMTE1LjZhNC41NCw0LjU0LDAsMCwxLDkuMDgsMHY2LjIyYzAsNC42NC01LjA5LDcuNDEtMTMuNjMsNy40MVpcIi8+PHBhdGggaWQ9XCJ0cmFuc3BvcnRcIiBkPVwiTTEwMi4zNCwxMjkuMjNjLTguNTMsMC0xMy42Mi0yLjc3LTEzLjYyLTcuNDFWMTE1LjZhNC41NCw0LjU0LDAsMCwxLDkuMDgsMHY0LjA2YTIxLjI4LDIxLjI4LDAsMCwwLDkuMDgsMFYxMTUuNmE0LjU1LDQuNTUsMCwwLDEsOS4wOSwwdjYuMjJjMCw0LjY0LTUuMDksNy40MS0xMy42Myw3LjQxWlwiLz48cGF0aCBpZD1cInRyYW5zcG9ydFwiIGQ9XCJNOTcuODEsNDQuODNINTMuOWE0LjU1LDQuNTUsMCwxLDEsMC05LjA5SDk3LjgxYTQuNTUsNC41NSwwLDAsMSwwLDkuMDlaXCIvPjxwYXRoIGlkPVwidHJhbnNwb3J0XCIgZD1cIk01NC4yOCw4NC4yQTYuOCw2LjgsMCwxLDAsNjEuMDcsOTFhNi44LDYuOCwwLDAsMC02Ljc5LTYuOFpcIi8+PHBhdGggaWQ9XCJ0cmFuc3BvcnRcIiBkPVwiTTk3LjQzLDg0LjJhNi44LDYuOCwwLDEsMCw2Ljc5LDYuOCw2LjgsNi44LDAsMCwwLTYuNzktNi44WlwiLz48cGF0aCBpZD1cInRyYW5zcG9ydFwiIGQ9XCJNMTA3LjA4LDgxSDQ0LjYzYTYuODIsNi44MiwwLDAsMS02LjgyLTYuODJWNTQuMjhhNi44Miw2LjgyLDAsMCwxLDYuODItNi44MWg2Mi40NWE2LjgyLDYuODIsMCwwLDEsNi44MSw2LjgxVjc0LjE1QTYuODMsNi44MywwLDAsMSwxMDcuMDgsODFaTTQ0LjYzLDUyYTIuMjgsMi4yOCwwLDAsMC0yLjI4LDIuMjdWNzQuMTVhMi4yOCwyLjI4LDAsMCwwLDIuMjgsMi4yN2g2Mi40NWEyLjI3LDIuMjcsMCwwLDAsMi4yNy0yLjI3VjU0LjI4QTIuMjcsMi4yNywwLDAsMCwxMDcuMDgsNTJaXCIvPjwvc3ZnPid9KSxlbW9qaUNhdGVnb3JpZXMucHVzaCh7bmFtZTpcIm9iamVjdHNcIixzdmc6JzxzdmcgaWQ9XCJvYmplY3RzXCIgZGF0YS1uYW1lPVwiTGF5ZXIgMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDE1MCAxNTBcIj48cGF0aCBpZD1cIm9iamVjdHNcIiBkPVwiTTEwNy43OCwxMjlhNC41NSw0LjU1LDAsMCwxLTIuNjctLjg3bC0zMC0yMS43OS0zMCwyMS43OWE0LjUzLDQuNTMsMCwwLDEtNS4zNCwwLDQuNTgsNC41OCwwLDAsMS0xLjY1LTUuMDhMNDkuNTksODcuODIsMTkuNiw2NmE0LjU0LDQuNTQsMCwwLDEsMi42Ny04LjIySDU5LjM0TDcwLjgsMjIuNTVhNC41NSw0LjU1LDAsMCwxLDguNjQsMEw5MC44OSw1Ny44MUgxMjhBNC41NCw0LjU0LDAsMCwxLDEzMC42Myw2NmwtMzAsMjEuNzksMTEuNDYsMzUuMjVhNC41NSw0LjU1LDAsMCwxLTQuMzIsNlpNNzUuMTIsOTYuMmE0LjUzLDQuNTMsMCwwLDEsMi42Ny44N2wyMS4zNSwxNS41MUw5MSw4Ny40OWE0LjU1LDQuNTUsMCwwLDEsMS42NS01LjA4TDExNCw2Ni44OUg4Ny41OWE0LjU0LDQuNTQsMCwwLDEtNC4zMi0zLjEzbC04LjE1LTI1LjFMNjcsNjMuNzZhNC41Myw0LjUzLDAsMCwxLTQuMzIsMy4xM0gzNi4yNUw1Ny42MSw4Mi40MWE0LjU0LDQuNTQsMCwwLDEsMS42NSw1LjA4bC04LjE3LDI1LjA5TDcyLjQ1LDk3LjA3YTQuNTMsNC41MywwLDAsMSwyLjY3LS44N1pcIi8+PC9zdmc+J30pO2Vtb2ppQ2F0ZWdvcmllcy5tYXAoZnVuY3Rpb24oaXRlbSl7dmFyIGVtb2ppTGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtlbW9qaUxpbmsuc3R5bGUudGV4dERlY29yYXRpb249XCJub25lXCIsZW1vamlMaW5rLnN0eWxlLnBhZGRpbmc9XCI1cHhcIixlbW9qaUxpbmsuc3R5bGUucG9zaXRpb249XCJpbml0aWFsXCIsZW1vamlMaW5rLnN0eWxlLmZvbnRTaXplPVwiMjRweFwiLGVtb2ppTGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsXCJqYXZhc2NyaXB0OnZvaWQoMClcIiksZW1vamlMaW5rLnN0eWxlLmRpc3BsYXk9XCJ0YWJsZS1jZWxsXCIsZW1vamlMaW5rLnN0eWxlLnRleHRBbGlnbj1cImNlbnRlclwiLGVtb2ppTGluay5pZD1TdHJpbmcoaXRlbS5uYW1lKSxcImZhY2VzXCI9PVN0cmluZyhpdGVtLm5hbWUpJiYoZW1vamlMaW5rLnN0eWxlLmJhY2tncm91bmQ9XCIjYzJjMmMyXCIpLGVtb2ppTGluay5pbm5lckhUTUw9U3RyaW5nKGl0ZW0uc3ZnKSxlbW9qaUxpbmsub25tb3VzZWRvd249Y2xpY2tDYXRlZ29yeSxlbW9qaUNhdGVnb3J5LmFwcGVuZENoaWxkKGVtb2ppTGluayl9KSxbMTI4NTEzLDEyODUxNCwxMjg1MTUsMTI4NTE2LDEyODUxNywxMjg1MTgsMTI4NTIxLDEyODUyMiwxMjg1MjMsMTI4NTI0LDEyODUyNSwxMjg1MjcsMTI4NTMwLDEyODUzMSwxMjg1MzIsMTI4NTM0LDEyODUzNiwxMjg1MzgsMTI4NTQwLDEyODU0MSwxMjg1NDIsMTI4NTQ0LDEyODU0NSwxMjg1NDYsMTI4NTQ3LDEyODU0OCwxMjg1NDksMTI4NTUyLDEyODU1MywxMjg1NTQsMTI4NTU1LDEyODU1NywxMjg1NjAsMTI4NTYxLDEyODU2MiwxMjg1NjMsMTI4NTY1LDEyODU2N10ubWFwKGZ1bmN0aW9uKGl0ZW0pe3ZhciBlbW9qaUxpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7ZW1vamlMaW5rLnN0eWxlLnRleHREZWNvcmF0aW9uPVwibm9uZVwiLGVtb2ppTGluay5zdHlsZS5tYXJnaW49XCI1cHhcIixlbW9qaUxpbmsuc3R5bGUucG9zaXRpb249XCJpbml0aWFsXCIsZW1vamlMaW5rLnN0eWxlLmZvbnRTaXplPVwiMjRweFwiLGVtb2ppTGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsXCJqYXZhc2NyaXB0OnZvaWQoMClcIiksZW1vamlMaW5rLmlubmVySFRNTD1TdHJpbmcuZnJvbUNvZGVQb2ludChpdGVtKSxlbW9qaUxpbmsub25tb3VzZWRvd249Y2xpY2tMaW5rLGZhY2VzQ2F0ZWdvcnkuYXBwZW5kQ2hpbGQoZW1vamlMaW5rKX0pLFsxMjgwMTIsMTI4MDEzLDEyODAxNCwxMjgwMTcsMTI4MDE4LDEyODAyMCwxMjgwMjMsMTI4MDI0LDEyODAyNSwxMjgwMjYsMTI4MDI3LDEyODAyOCwxMjgwMjksMTI4MDMwLDEyODAzMSwxMjgwMzIsMTI4MDMzLDEyODAzNCwxMjgwMzUsMTI4MDM2LDEyODAzNywxMjgwMzgsMTI4MDM5LDEyODA0MCwxMjgwNDEsMTI4MDQzLDEyODA0NCwxMjgwNDUsMTI4MDQ2LDEyODA0NywxMjgwNDgsMTI4MDQ5LDEyODA1MCwxMjgwNTEsMTI4MDUyLDEyODA1MywxMjgwNTQsMTI4MDU1LDEyODA1NiwxMjgwNTcsMTI4MDU4LDEyODA1OSwxMjgwNjBdLm1hcChmdW5jdGlvbihpdGVtKXt2YXIgZW1vamlMaW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2Vtb2ppTGluay5zdHlsZS50ZXh0RGVjb3JhdGlvbj1cIm5vbmVcIixlbW9qaUxpbmsuc3R5bGUubWFyZ2luPVwiNXB4XCIsZW1vamlMaW5rLnN0eWxlLnBvc2l0aW9uPVwiaW5pdGlhbFwiLGVtb2ppTGluay5zdHlsZS5mb250U2l6ZT1cIjI0cHhcIixlbW9qaUxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLFwiamF2YXNjcmlwdDp2b2lkKDApXCIpLGVtb2ppTGluay5pbm5lckhUTUw9U3RyaW5nLmZyb21Db2RlUG9pbnQoaXRlbSksZW1vamlMaW5rLm9ubW91c2Vkb3duPWNsaWNrTGluayxhbmltYWxzQ2F0ZWdvcnkuYXBwZW5kQ2hpbGQoZW1vamlMaW5rKX0pLFsxMjc4MTMsMTI3ODE0LDEyNzgxNSwxMjc4MTYsMTI3ODE3LDEyNzgxOCwxMjc4MjAsMTI3ODIxLDEyNzgyMiwxMjc4MjMsMTI3ODI1LDEyNzgyNiwxMjc4MjcsMTI3ODI4LDEyNzgyOSwxMjc4MzAsMTI3ODMxLDEyNzgzMiwxMjc4MzYsMTI3ODM3LDEyNzgzOCwxMjc4MzksMTI3ODQwLDEyNzg0MSwxMjc4NDIsMTI3ODQzLDEyNzg0NCwxMjc4NDYsMTI3ODQ4LDEyNzg0OSwxMjc4NTAsMTI3ODUxLDEyNzg1MiwxMjc4NTMsMTI3ODU2LDEyNzg1OCwxMjc4NTksMTI3ODYwLDEyNzg2MywxMjc4NjQsMTI3ODY3XS5tYXAoZnVuY3Rpb24oaXRlbSl7dmFyIGVtb2ppTGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtlbW9qaUxpbmsuc3R5bGUudGV4dERlY29yYXRpb249XCJub25lXCIsZW1vamlMaW5rLnN0eWxlLm1hcmdpbj1cIjVweFwiLGVtb2ppTGluay5zdHlsZS5wb3NpdGlvbj1cImluaXRpYWxcIixlbW9qaUxpbmsuc3R5bGUuZm9udFNpemU9XCIyNHB4XCIsZW1vamlMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIixcImphdmFzY3JpcHQ6dm9pZCgwKVwiKSxlbW9qaUxpbmsuaW5uZXJIVE1MPVN0cmluZy5mcm9tQ29kZVBvaW50KGl0ZW0pLGVtb2ppTGluay5vbm1vdXNlZG93bj1jbGlja0xpbmssZm9vZENhdGVnb3J5LmFwcGVuZENoaWxkKGVtb2ppTGluayl9KSxbMTI3OTIxLDEyNzkyMywxMjc5MzQsMTI3OTM1LDEyNzkzNiwxMjc5MzcsMTI3OTM4LDEyNzkzOSwxMjc5NDAsMTI3OTQyLDEyNzk0NCwxMjc5NDYsMTI4Njc1LDEyODY5MiwxMjg2OTMsOTkxNyw5OTE4LDk5NzgsMTI3OTA3LDEyNzkxOSw5OTcxXS5tYXAoZnVuY3Rpb24oaXRlbSl7dmFyIGVtb2ppTGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtlbW9qaUxpbmsuc3R5bGUudGV4dERlY29yYXRpb249XCJub25lXCIsZW1vamlMaW5rLnN0eWxlLm1hcmdpbj1cIjVweFwiLGVtb2ppTGluay5zdHlsZS5wb3NpdGlvbj1cImluaXRpYWxcIixlbW9qaUxpbmsuc3R5bGUuZm9udFNpemU9XCIyNHB4XCIsZW1vamlMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIixcImphdmFzY3JpcHQ6dm9pZCgwKVwiKSxlbW9qaUxpbmsuaW5uZXJIVE1MPVN0cmluZy5mcm9tQ29kZVBvaW50KGl0ZW0pLGVtb2ppTGluay5vbm1vdXNlZG93bj1jbGlja0xpbmssc3BvcnRDYXRlZ29yeS5hcHBlbmRDaGlsZChlbW9qaUxpbmspfSksWzEyODY0MSwxMjg2NDIsMTI4NjQ2LDEyODY0OCwxMjg2NTAsMTI4NjUzLDEyODY1NCwxMjg2NTYsMTI4NjYwLDEyODY2MiwxMjg2NjQsMTI4NjY3LDEyODY2OCwxMjg2NjksMTI4NjcwLDEyODY3MSwxMjg2NzIsMTI4NjczLDEyODY0MCwxMjg2NDMsMTI4NjQ0LDEyODY0NSwxMjg2NDcsMTI4NjQ5LDEyODY1MiwxMjg2NTcsMTI4NjU4LDEyODY1OSwxMjg2NjEsMTI4NjYzLDEyODY2NSwxMjg2NjYsMTI4Njc0LDEyODY3NiwxMjg2OTBdLm1hcChmdW5jdGlvbihpdGVtKXt2YXIgZW1vamlMaW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2Vtb2ppTGluay5zdHlsZS50ZXh0RGVjb3JhdGlvbj1cIm5vbmVcIixlbW9qaUxpbmsuc3R5bGUubWFyZ2luPVwiNXB4XCIsZW1vamlMaW5rLnN0eWxlLnBvc2l0aW9uPVwiaW5pdGlhbFwiLGVtb2ppTGluay5zdHlsZS5mb250U2l6ZT1cIjI0cHhcIixlbW9qaUxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLFwiamF2YXNjcmlwdDp2b2lkKDApXCIpLGVtb2ppTGluay5pbm5lckhUTUw9U3RyaW5nLmZyb21Db2RlUG9pbnQoaXRlbSksZW1vamlMaW5rLm9ubW91c2Vkb3duPWNsaWNrTGluayx0cmFuc3BvcnRDYXRlZ29yeS5hcHBlbmRDaGlsZChlbW9qaUxpbmspfSksWzEyNzg5MCwxMjc4ODAsMTI3ODgxLDEyNzg4NywxMjc4OTEsMTI3OTA1LDEyNzkwNiwxMjc5MDgsMTI3OTA5LDEyNzkxMSwxMjc5MTIsMTI3OTE1LDEyNzkxNiwxMjc5MTgsMTI3OTE5LDEyNzkyNiwxMjc5MjcsMTI3OTI4LDEyNzkyOSwxMjc5MzAsMTI3OTMxLDEyNzkzMiwxMjc5NjgsMTI3OTczLDEyNzk3OCwxMjgxNDcsMTI4MTQ4LDEyODE0OSwxMjgxNTAsMTI4MTUxLDEyODE1MiwxMjgxODcsMTI4MTg2LDEyODE5NywxMjgyMTMsMTI4MjQ3XS5tYXAoZnVuY3Rpb24oaXRlbSl7dmFyIGVtb2ppTGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO2Vtb2ppTGkuc3R5bGUuZGlzcGxheT1cImlubGluZS1ibG9ja1wiLGVtb2ppTGkuc3R5bGUubWFyZ2luPVwiNXB4XCI7dmFyIGVtb2ppTGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtlbW9qaUxpbmsuc3R5bGUudGV4dERlY29yYXRpb249XCJub25lXCIsZW1vamlMaW5rLnN0eWxlLm1hcmdpbj1cIjVweFwiLGVtb2ppTGluay5zdHlsZS5wb3NpdGlvbj1cImluaXRpYWxcIixlbW9qaUxpbmsuc3R5bGUuZm9udFNpemU9XCIyNHB4XCIsZW1vamlMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIixcImphdmFzY3JpcHQ6dm9pZCgwKVwiKSxlbW9qaUxpbmsuaW5uZXJIVE1MPVN0cmluZy5mcm9tQ29kZVBvaW50KGl0ZW0pLGVtb2ppTGluay5vbm1vdXNlZG93bj1jbGlja0xpbmssb2JqZWN0c0NhdGVnb3J5LmFwcGVuZENoaWxkKGVtb2ppTGluayl9KSxlbW9qaVBpY2tlci5hcHBlbmRDaGlsZChlbW9qaUNhdGVnb3J5KSxlbW9qaVBpY2tlci5hcHBlbmRDaGlsZChmYWNlc0NhdGVnb3J5KSxlbW9qaVBpY2tlci5hcHBlbmRDaGlsZChhbmltYWxzQ2F0ZWdvcnkpLGVtb2ppUGlja2VyLmFwcGVuZENoaWxkKGZvb2RDYXRlZ29yeSksZW1vamlQaWNrZXIuYXBwZW5kQ2hpbGQoc3BvcnRDYXRlZ29yeSksZW1vamlQaWNrZXIuYXBwZW5kQ2hpbGQodHJhbnNwb3J0Q2F0ZWdvcnkpLGVtb2ppUGlja2VyLmFwcGVuZENoaWxkKG9iamVjdHNDYXRlZ29yeSksZW1vamlDb250YWluZXIuYXBwZW5kQ2hpbGQoZW1vamlQaWNrZXIpfX1dKSxNZXRlb3JFbW9qaX0oKTttb2R1bGUuZXhwb3J0cz1NZXRlb3JFbW9qaX0pfSx7fV19LHt9LFsxXSkoMSl9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWV0ZW9yLWVtb2ppL2Rpc3QvbWV0ZW9yRW1vamkubWluLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRpZighbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=