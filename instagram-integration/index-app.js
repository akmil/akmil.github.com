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
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
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
        instagramTaskManager_postStartFollowingList: 'instagram-task-manager/task'
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
        }
    },
    getPath: function getPath(name) {
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

    return {
        showInfoMessage: showInfoMessage,
        fillList: fillList,
        isEmail: isEmail
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)(module)))

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


__webpack_require__(20);

var _consts = __webpack_require__(0);

var _pubsubJs = __webpack_require__(4);

var _pubsubJs2 = _interopRequireDefault(_pubsubJs);

var _registerForm = __webpack_require__(14);

var _registerForm2 = _interopRequireDefault(_registerForm);

var _loginForm = __webpack_require__(12);

var _loginPage = __webpack_require__(18);

var _confirmReg = __webpack_require__(7);

var _header = __webpack_require__(10);

var header = _interopRequireWildcard(_header);

var _burgerMenu = __webpack_require__(9);

var burgerMenu = _interopRequireWildcard(_burgerMenu);

var _instagramAccountsList = __webpack_require__(11);

var instagramAccounts = _interopRequireWildcard(_instagramAccountsList);

var _messages = __webpack_require__(13);

var messages = _interopRequireWildcard(_messages);

var _follow = __webpack_require__(8);

var follow = _interopRequireWildcard(_follow);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import * as followSteps from './blocks/follow/follow-using-steps';

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

    // followSteps.init();
};

(function () {
    return init();
})();

/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.init = init;

var _consts = __webpack_require__(0);

var _apiTaskManager = __webpack_require__(15);

var _apiTaskManager2 = _interopRequireDefault(_apiTaskManager);

__webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = {
    username: '',
    user_default_config: {
        task_mode: 'SAFE'
    }
};

/*
function fillListMeta($list, dataArray) {
    const items = dataArray;
    // const defaultAvatarSrc = 'https://i.imgur.com/jNNT4LE.png';
    $list.empty().addClass('border-light-color');
    $('<li class="list-group-item py-2"><h3>UserTaskManager -> getMetadata</h3></li>').appendTo($list);
    items.forEach((item) => {
        // const info = item.info;
        // const checkpoint = item.checkpoint || item;
        $(`<li class="list-group-item py-2" data-username="${item.type}">
                <div class="media-body d-flex">
                    <div class="col task-type">
                        ${(item.type) ? `<h4 class="mt-0 mb-1 name">${item.type}</h4>` : ''}
                    </div>
                    <div class="col task-subtype">
                        ${(item.subtype) ? `<p class="mt-0 mb-1 name">${item.subtype}</p>` : ''}
                    </div>
                    <div class="col task-progress">
                        ${(item.status) ? `<p class="mt-0 mb-1 name">Статус - ${item.status.state}</p>` : ''}
                    </div>
                    <div class="col task-progress">
                        ${(item.progress)
                            ? `<p class="mt-0 mb-1 name">Количество - ${item.progress.count}</p>
                                <p class="mt-0 mb-1 name">Процент - ${item.progress.percent}</p>` : ''}
                    </div>
                </div>
            </li>`).appendTo($list);
    });
}*/

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
    // UserTaskManager.getMetadata().then((result) => {
    //     console.log(result);
    //     if (result.status.state === 'ok') {
    //         fillListMeta($('.js_task-meta-list'), result.data.meta);
    //     }
    // });

    // UserTaskManager.postStartFollowingList().then((result) => {
    //     console.log('postStartFollowingList', result);
    //     if (result.status.state === 'ok') {
    //         console.log(JSON.stringify(result));
    //         fillListTypes($('.js_task-start-following'), result.data);
    //     }
    // });
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
        console.log('draw speed radioBtn');
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
        console.log('getDefaultConfigs');
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
    var radioBtn = function radioBtn(idx) {
        return '<div class="col custom-control custom-radio js_user-radio">\n            <input type="radio" name="userAccountRadio" id="customRadio-' + idx + '" class="custom-control-input" value="">\n            <label class="custom-control-label" for="customRadio-' + idx + '">\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F</label>\n        </div>';
    };
    var $accountsList = $('.accounts-list');
    var $li = $accountsList.find('.media-body');

    for (var i = 0; i < $li.length; i++) {
        $($li[i]).append(radioBtn(i));
    }
    _apiTaskManager2.default.getTaskTypes().then(function (result) {
        if (result.status.state === 'ok') {
            // console.log(result);
            fillListTypes($('.js_task-types'), result.data);
        }
    });

    $('.js_user-radio input[type=radio]').on('click', function () {
        var $parentFieldset = $(this).parents('fieldset');
        $('.btn-next', $parentFieldset).prop('disabled', false);
    });

    $('.checkbox-cell').on('change', function (e) {
        console.log('validate');
        // updateStatus();
    });
}

/* working demo
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
    initSteps();
    if ($('.follow').length) {
        window.PubSub.subscribe(_consts.CONST.events.instagramAccouns.INSTAGRAM_ACCOUNS_RENDERED, function (eventName, data) {
            modifyAccList();
        });
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
/* 10 */
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
/* 11 */
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
    console.log('publish PubSub', _consts.CONST.events.instagramAccouns.INSTAGRAM_ACCOUNS_RENDERED);
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
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.init = init;

var _meteorEmoji = __webpack_require__(21);

var _meteorEmoji2 = _interopRequireDefault(_meteorEmoji);

var _user = __webpack_require__(2);

var _user2 = _interopRequireDefault(_user);

var _apiUserDirect = __webpack_require__(16);

var _apiUserDirect2 = _interopRequireDefault(_apiUserDirect);

var _spinner = __webpack_require__(17);

var _spinner2 = _interopRequireDefault(_spinner);

var _consts = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import qq from 'fine-uploader'; //todo: fine-uploade
var token = _user2.default.getToken();
// import PubSub from 'pubsub-js';// https://www.npmjs.com/package/pubsub-js

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
            var $li = $('<li class="chat-item chat-item-left col flex-column-reverse" value="' + message.value + '">\n                <div class="d-flex">\n                ' + (message['profile_pic_url'] ? '<div class="chat-img-box"> \n                            <img src="' + message['profile_pic_url'] + '" alt="User Avatar" class="">\n                        </div>' : '') + '\n                <div>\n                    <p class="chat-username text-muted">' + message.username + '</p>\n                    ' + insertMsg(message.value, message.type) + '\n                </div>\n                    <small class="chat-time-text">' + _apiUserDirect2.default.getFormattedDateUtil(message.timestamp) + '</small>\n                </div>\n            </li>');
            addToList(isAppentPrevMsg, $li, cList);
        } else {
            var _$li = $('<li class="chat-item chat-item-right col flex-column-reverse" value="' + message.value + '">\n                <div class="d-flex justify-content-end">\n                    ' + insertMsg(message.value, message.type) + '\n                    <small class="pull-right chat-time-text">' + _apiUserDirect2.default.getFormattedDateUtil(message.timestamp) + '</small>\n                    </div>\n            </li>');
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
/* 14 */
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
/* 15 */
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
                    'token': this.getToken()
                })
            });
            setting.body = JSON.stringify(body);
            // JSON.stringify({
            //     'username': 'brandylenhart',
            //     'type': 'FOLLOWING',
            //     'subtype': 'FOLLOWING_LIST',
            //     'user_default_config': {
            //         'task_mode': 'SAFE',
            //         'following_criteria': {
            //             'limit': 7500,
            //             'unfollow_then': true,
            //             'follow_on_closed_profiles': true,
            //             'have_posts': {
            //                 'from': 3,
            //                 'to': 999999
            //             },
            //             'have_followers': {
            //                 'from': 30,
            //                 'to': 99999
            //             },
            //             'have_followings': {
            //                 'from': 0,
            //                 'to': 999
            //             },
            //             'gender': 'ANY'
            //         }
            //     },
            //     'user_custom_config': {
            //         'users': [12496926, 251400884]
            //     }
            // });

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
/* 16 */
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
    }, {
        key: 'getFormattedDateUtil',
        value: function getFormattedDateUtil(tStamp, showFullTime) {
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
    }]);

    return UserConversation;
}();

var userInstance = null;

if (!userInstance) {
    userInstance = new UserConversation();
}

exports.default = userInstance;

/***/ }),
/* 17 */
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
/* 18 */
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
/* 19 */
/***/ (function(module, exports) {

if("undefined"==typeof brutusin)window.brutusin=new Object;else if("object"!=typeof brutusin)throw"brutusin global variable already exists";!function(){String.prototype.startsWith||(String.prototype.startsWith=function(e,t){return t=t||0,this.indexOf(e,t)===t}),String.prototype.endsWith||(String.prototype.endsWith=function(e,t){var r=this.toString();(void 0===t||t>r.length)&&(t=r.length),t-=e.length;var n=r.indexOf(e,t);return-1!==n&&n===t}),String.prototype.includes||(String.prototype.includes=function(){"use strict";return-1!==String.prototype.indexOf.apply(this,arguments)}),String.prototype.format||(String.prototype.format=function(){for(var e=this,t=0;t<arguments.length;t++){var r=new RegExp("\\{"+t+"\\}","gi");e=e.replace(r,arguments[t])}return e});var BrutusinForms=new Object;BrutusinForms.messages={validationError:"Validation error",required:"This field is **required**",invalidValue:"Invalid field value",addpropNameExistent:"This property is already present in the object",addpropNameRequired:"A name is required",minItems:"At least `{0}` items are required",maxItems:"At most `{0}` items are allowed",pattern:"Value does not match pattern: `{0}`",minLength:"Value must be **at least** `{0}` characters long",maxLength:"Value must be **at most** `{0}` characters long",multipleOf:"Value must be **multiple of** `{0}`",minimum:"Value must be **greater or equal than** `{0}`",exclusiveMinimum:"Value must be **greater than** `{0}`",maximum:"Value must be **lower or equal than** `{0}`",exclusiveMaximum:"Value must be **lower than** `{0}`",minProperties:"At least `{0}` properties are required",maxProperties:"At most `{0}` properties are allowed",uniqueItems:"Array items must be unique",addItem:"Add item","true":"True","false":"False"},BrutusinForms.decorators=new Array,BrutusinForms.addDecorator=function(e){BrutusinForms.decorators[BrutusinForms.decorators.length]=e},BrutusinForms.onResolutionStarted=function(e){},BrutusinForms.onResolutionFinished=function(e){},BrutusinForms.onValidationError=function(e,t){e.focus(),e.className.includes(" error")||(e.className+=" error"),alert(t)},BrutusinForms.onValidationSuccess=function(e){e.className=e.className.replace(" error","")},BrutusinForms.postRender=null,BrutusinForms.instances=new Array,BrutusinForms.create=function(schema){function validateDepencyMapIsAcyclic(){function e(t,r,n){if(r.hasOwnProperty(n))return void(error="Schema dependency graph has cycles");if(r[n]=null,!t.hasOwnProperty(n)){t[n]=null;var a=dependencyMap[n];if(a)for(var i=0;i<a.length;i++)e(t,r,a[i]);delete r[n]}}var t=new Object;for(var r in dependencyMap)t.hasOwnProperty(r)||e(t,new Object,r)}function appendChild(e,t,r){e.appendChild(t);for(var n=0;n<BrutusinForms.decorators.length;n++)BrutusinForms.decorators[n](t,r)}function createPseudoSchema(e){var t=new Object;for(var r in e)"items"!==r&&"properties"!==r&&"additionalProperties"!==r&&("pattern"===r?t[r]=new RegExp(e[r]):t[r]=e[r]);return t}function getDefinition(e){var t=e.split("/"),r=root;for(var n in t)"0"!==n&&(r=r[t[n]]);return r}function containsStr(e,t){for(var r=0;r<e.length;r++)if(e[r]==t)return!0;return!1}function renameRequiredPropeties(e){if(e)if(e.hasOwnProperty("oneOf"))for(var t in e.oneOf)renameRequiredPropeties(e.oneOf[t]);else if(e.hasOwnProperty("$ref")){var r=getDefinition(e.$ref);renameRequiredPropeties(r)}else if("object"===e.type){if(e.properties){e.hasOwnProperty("required")&&Array.isArray(e.required)&&(e.requiredProperties=e.required,delete e.required);for(var n in e.properties)renameRequiredPropeties(e.properties[n])}if(e.patternProperties)for(var a in e.patternProperties){var i=e.patternProperties[a];(i.hasOwnProperty("type")||i.hasOwnProperty("$ref")||i.hasOwnProperty("oneOf"))&&renameRequiredPropeties(e.patternProperties[a])}e.additionalProperties&&(e.additionalProperties.hasOwnProperty("type")||e.additionalProperties.hasOwnProperty("oneOf"))&&renameRequiredPropeties(e.additionalProperties)}else"array"===e.type&&renameRequiredPropeties(e.items)}function populateSchemaMap(e,t){var r=createPseudoSchema(t);if(r.$id=e,schemaMap[e]=r,t){if(t.hasOwnProperty("oneOf")){r.oneOf=new Array,r.type="oneOf";for(var n in t.oneOf){var a=e+"."+n;r.oneOf[n]=a,populateSchemaMap(a,t.oneOf[n])}}else if(t.hasOwnProperty("$ref")){var i=getDefinition(t.$ref);if(i){if(t.hasOwnProperty("title")||t.hasOwnProperty("description")){var o={};for(var s in i)o[s]=i[s];t.hasOwnProperty("title")&&(o.title=t.title),t.hasOwnProperty("description")&&(o.description=t.description),i=o}populateSchemaMap(e,i)}}else if("object"===t.type){if(t.properties){r.properties=new Object;for(var s in t.properties){var a=e+"."+s;r.properties[s]=a;var u=t.properties[s];t.requiredProperties&&(containsStr(t.requiredProperties,s)?u.required=!0:u.required=!1),populateSchemaMap(a,u)}}if(t.patternProperties){r.patternProperties=new Object;for(var l in t.patternProperties){var d=e+"["+l+"]";r.patternProperties[l]=d;var p=t.patternProperties[l];p.hasOwnProperty("type")||p.hasOwnProperty("$ref")||p.hasOwnProperty("oneOf")?populateSchemaMap(d,t.patternProperties[l]):populateSchemaMap(d,SCHEMA_ANY)}}if(t.additionalProperties){var a=e+"[*]";r.additionalProperties=a,t.additionalProperties.hasOwnProperty("type")||t.additionalProperties.hasOwnProperty("oneOf")?populateSchemaMap(a,t.additionalProperties):populateSchemaMap(a,SCHEMA_ANY)}}else"array"===t.type&&(r.items=e+"[#]",populateSchemaMap(r.items,t.items));if(t.hasOwnProperty("dependsOn")){null===t.dependsOn&&(t.dependsOn=["$"]);for(var c=new Array,n=0;n<t.dependsOn.length;n++)t.dependsOn[n]?t.dependsOn[n].startsWith("$")?c[n]=t.dependsOn[n]:e.endsWith("]")?c[n]=e+"."+t.dependsOn[n]:c[n]=e.substring(0,e.lastIndexOf("."))+"."+t.dependsOn[n]:c[n]="$";schemaMap[e].dependsOn=c;for(var n=0;n<c.length;n++){var m=dependencyMap[c[n]];m||(m=new Array,dependencyMap[c[n]]=m),m[m.length]=e}}}}function renderTitle(e,t,r){if(e&&t){var n=document.createElement("label");"any"!==r.type&&"object"!==r.type&&"array"!==r.type&&(n.htmlFor=getInputId());var a=document.createTextNode(t+":");if(appendChild(n,a,r),r.description&&(n.title=r.description),r.required){var i=document.createElement("sup");appendChild(i,document.createTextNode("*"),r),appendChild(n,i,r),n.className="required"}appendChild(e,n,r)}}function getInputId(){return formId+"_"+inputCounter}function validate(e){var t=!0;if(e.hasOwnProperty("getValidationError")){var r=e.getValidationError();r?(BrutusinForms.onValidationError(e,r),t=!1):BrutusinForms.onValidationSuccess(e)}if(e.childNodes)for(var n=0;n<e.childNodes.length;n++)validate(e.childNodes[n])||(t=!1);return t}function clear(e){if(e)for(;e.firstChild;)e.removeChild(e.firstChild)}function render(e,t,r,n,a,i){var o=getSchemaId(r),s=getSchema(o);renderInfoMap[o]=new Object,renderInfoMap[o].titleContainer=e,renderInfoMap[o].container=t,renderInfoMap[o].parentObject=n,renderInfoMap[o].propertyProvider=a,renderInfoMap[o].value=i,clear(e),clear(t);var u=renderers[s.type];if(u&&!s.dependsOn)s.title?renderTitle(e,s.title,s):a&&renderTitle(e,a.getValue(),s),i||(i="undefined"!=typeof initialValue&&null!==initialValue?getInitialValue(r):s["default"]),u(t,r,n,a,i);else if(s.$ref&&obj.schemaResolver){var l=function(e){if(e&&e.hasOwnProperty(r)&&JSON.stringify(schemaMap[r])!==JSON.stringify(e[r])){cleanSchemaMap(r),cleanData(r),populateSchemaMap(r,e[r]);var t=renderInfoMap[r];t&&render(t.titleContainer,t.container,r,t.parentObject,t.propertyProvider,t.value)}BrutusinForms.onResolutionFinished(n)};BrutusinForms.onResolutionStarted(n),obj.schemaResolver([r],obj.getData(),l)}}function createPropertyProvider(e,t){var r=new Object;return r.getValue=e,r.onchange=t,r}function getInitialValue(id){var ret;try{eval("ret = initialValue"+id.substring(1))}catch(e){ret=null}return ret}function getValue(schema,input){if("function"==typeof input.getValue)return input.getValue();var value;return value="select"===input.tagName.toLowerCase()?input.options[input.selectedIndex].value:input.value,""===value?null:("integer"===schema.type?(value=parseInt(value),isFinite(value)||(value=null)):"number"===schema.type?(value=parseFloat(value),isFinite(value)||(value=null)):"boolean"===schema.type?"input"===input.tagName.toLowerCase()?(value=input.checked,value||(value=!1)):"select"===input.tagName.toLowerCase()&&(value="true"===input.value?!0:"false"===input.value?!1:null):"any"===schema.type&&value&&eval("value="+value),value)}function getSchemaId(e){return e.replace(/\["[^"]*"\]/g,"[*]").replace(/\[\d*\]/g,"[#]")}function getParentSchemaId(e){return e.substring(0,e.lastIndexOf("."))}function getSchema(e){return schemaMap[e]}function cleanSchemaMap(e){for(var t in schemaMap)e.startsWith(t)&&delete schemaMap[t]}function cleanData(e){var t=new Expression(e);t.visit(data,function(e,t,r){delete t[r]})}function onDependencyChanged(e,t){var r=dependencyMap[e];if(r&&obj.schemaResolver){var n=function(e){if(e)for(var r in e)if(JSON.stringify(schemaMap[r])!==JSON.stringify(e[r])){cleanSchemaMap(r),cleanData(r),populateSchemaMap(r,e[r]);var n=renderInfoMap[r];n&&render(n.titleContainer,n.container,r,n.parentObject,n.propertyProvider,n.value)}BrutusinForms.onResolutionFinished(t)};BrutusinForms.onResolutionStarted(t),obj.schemaResolver(r,obj.getData(),n)}}function Expression(e){function t(e){if(null===e)return null;for(var t=new Array,r=null,n=0,a=0;a<e.length;a++)'"'===e.charAt(a)?null===r?r='"':'"'===r&&(r=null,t[t.length]=e.substring(n,a+1).trim(),n=a+1):"'"===e.charAt(a)?null===r?r="'":"'"===r&&(r=null,t[t.length]=e.substring(n,a+1).trim(),n=a+1):"["===e.charAt(a)?null===r&&(n!==a&&(t[t.length]=e.substring(n,a).trim()),t[t.length]="[",n=a+1):"]"===e.charAt(a)?null===r&&(n!==a&&(t[t.length]=e.substring(n,a).trim()),t[t.length]="]",n=a+1):"."===e.charAt(a)?null===r&&(n!==a&&(t[t.length]=e.substring(n,a).trim()),n=a+1):a===e.length-1&&(t[t.length]=e.substring(n,a+1).trim());return t}(null===e||0===e.length||"."===e)&&(e="$");for(var r=new Array,n=t(e),a=!1,i=0,o="",s=0;s<n.length;s++){var u=n[s];if("["===u){if(a)throw"Error parsing expression '"+e+"': Nested [ found";a=!0,i=0,o+=u}else if("]"===u){if(!a)throw"Error parsing expression '"+e+"': Unbalanced ] found";a=!1,o+=u,r[r.length]=o,o=""}else if(a){if(i>0)throw"Error parsing expression '"+e+"': Multiple tokens found inside a bracket";o+=u,i++}else r[r.length]=u;if(s===n.length-1&&a)throw"Error parsing expression '"+e+"': Unbalanced [ found"}this.exp=e,this.queue=r,this.visit=function(e,t){function r(e,n,a,i,o){if(null!=a){var s=n.shift();if("$"===s){e="$";var s=n.shift()}if(s)if(Array.isArray(a)){if(!s.startsWith("["))throw"Node '"+e+"' is of type array";var u=s.substring(1,s.length-1);if(u.equals("#"))for(var l=0;l<a.length;l++){var d=a[l];r(e+s,n.slice(0),d,a,l),r(e+"["+l+"]",n.slice(0),d,a,l)}else if("$"===u){var d=a[a.length-1];r(e+s,n.slice(0),d,a,a.length-1)}else{var p=parseInt(u);if(isNaN(p))throw"Element '"+u+"' of node '"+e+"' is not an integer, or the '$' last element symbol,  or the wilcard symbol '#'";if(0>p)throw"Element '"+u+"' of node '"+e+"' is lower than zero";var d=a[p];r(e+s,n.slice(0),d,a,p)}}else{if("object"!=typeof a)throw"boolean"==typeof a||"number"==typeof a||"string"==typeof a?"Node is leaf but still are tokens remaining: "+s:"Node type '"+typeof a+"' not supported for index field '"+e+"'";if("[*]"===s)for(var c in a){var d=a[c];r(e+s,n.slice(0),d,a,c),r(e+'["'+c+'"]',n.slice(0),d,a,c)}else{var d;if(s.startsWith("[")){var u=s.substring(1,s.length-1);if(!u.startsWith('"')&&!u.startsWith("'"))throw"Element '"+u+"' of node '"+e+"' must be a string expression or wilcard '*'";u=u.substring(1,u.length()-1),e+=s,d=a[u]}else e=e.length>0?e+"."+s:s,d=a[s];r(e,n,d,a,s)}}else t(a,i,o)}}r(this.exp,this.queue,e)}}var SCHEMA_ANY={type:"any"},obj=new Object,schemaMap=new Object,dependencyMap=new Object,renderInfoMap=new Object,container,data,error,initialValue,inputCounter=0,root=schema,formId="BrutusinForms#"+BrutusinForms.instances.length;renameRequiredPropeties(schema),populateSchemaMap("$",schema),validateDepencyMapIsAcyclic();var renderers=new Object;return renderers.integer=function(e,t,r,n,a){renderers.string(e,t,r,n,a)},renderers.number=function(e,t,r,n,a){renderers.string(e,t,r,n,a)},renderers.any=function(e,t,r,n,a){renderers.string(e,t,r,n,a)},renderers.string=function(e,t,r,n,a){var i,o=getSchemaId(t),s=getParentSchemaId(o),u=getSchema(o),l=getSchema(s);if("any"===u.type)i=document.createElement("textarea"),a&&(i.value=JSON.stringify(a,null,4),u.readOnly&&(i.disabled=!0));else if(u.media)i=document.createElement("input"),i.type="file",appendChild(i,d,u);else if(u["enum"]){if(i=document.createElement("select"),!u.required){var d=document.createElement("option"),p=document.createTextNode("");d.value="",appendChild(d,p,u),appendChild(i,d,u)}for(var c=0,m=0;m<u["enum"].length;m++){var d=document.createElement("option"),p=document.createTextNode(u["enum"][m]);d.value=u["enum"][m],appendChild(d,p,u),appendChild(i,d,u),a&&u["enum"][m]===a&&(c=m,u.required||c++,u.readOnly&&(i.disabled=!0))}1===u["enum"].length?i.selectedIndex=1:i.selectedIndex=c}else{if(i=document.createElement("input"),"integer"===u.type||"number"===u.type)i.type="number",i.step=u.step?""+u.step:"any","number"!=typeof a&&(a=null);else if("date-time"===u.format)try{i.type="datetime-local"}catch(f){i.type="text"}else"email"===u.format?i.type="email":"text"===u.format?i=document.createElement("textarea"):i.type="text";null!==a&&"undefined"!=typeof a&&(i.value=a,u.readOnly&&(i.disabled=!0))}return i.schema=o,i.setAttribute("autocorrect","off"),i.getValidationError=function(){try{var e=getValue(u,i);if(null===e){if(u.required){if(!l||"object"!==l.type)return BrutusinForms.messages.required;if(l.required)return BrutusinForms.messages.required;for(var t in r)if(null!==r[t])return BrutusinForms.messages.required}}else{if(u.pattern&&!u.pattern.test(e))return BrutusinForms.messages.pattern.format(u.pattern.source);if(u.minLength&&(!e||u.minLength>e.length))return BrutusinForms.messages.minLength.format(u.minLength);if(u.maxLength&&e&&u.maxLength<e.length)return BrutusinForms.messages.maxLength.format(u.maxLength)}if(null!==e&&!isNaN(e)){if(u.multipleOf&&e%u.multipleOf!==0)return BrutusinForms.messages.multipleOf.format(u.multipleOf);if(u.hasOwnProperty("maximum")){if(u.exclusiveMaximum&&e>=u.maximum)return BrutusinForms.messages.exclusiveMaximum.format(u.maximum);if(!u.exclusiveMaximum&&e>u.maximum)return BrutusinForms.messages.maximum.format(u.maximum)}if(u.hasOwnProperty("minimum")){if(u.exclusiveMinimum&&e<=u.minimum)return BrutusinForms.messages.exclusiveMinimum.format(u.minimum);if(!u.exclusiveMinimum&&e<u.minimum)return BrutusinForms.messages.minimum.format(u.minimum)}}}catch(n){return BrutusinForms.messages.invalidValue}},i.onchange=function(){var e;try{e=getValue(u,i)}catch(t){e=null}r?r[n.getValue()]=e:data=e,onDependencyChanged(o,i)},u.description&&(i.title=u.description,i.placeholder=u.description),i.onchange(),i.id=getInputId(),inputCounter++,appendChild(e,i,u),r},renderers["boolean"]=function(e,t,r,n,a){var i,o=getSchemaId(t),s=getSchema(o);if(s.required)i=document.createElement("input"),i.type="checkbox",a===!0&&(i.checked=!0);else{i=document.createElement("select");var u=document.createElement("option"),l=document.createTextNode("");l.value="",appendChild(u,l,s),appendChild(i,u,s);var d=document.createElement("option"),p=document.createTextNode(BrutusinForms.messages["true"]);d.value="true",appendChild(d,p,s),appendChild(i,d,s);var c=document.createElement("option"),m=document.createTextNode(BrutusinForms.messages["false"]);c.value="false",appendChild(c,m,s),appendChild(i,c,s),a===!0?i.selectedIndex=1:a===!1&&(i.selectedIndex=2)}i.onchange=function(){r?r[n.getValue()]=getValue(s,i):data=getValue(s,i),onDependencyChanged(o,i)},i.schema=o,i.id=getInputId(),inputCounter++,s.description&&(i.title=s.description),i.onchange(),appendChild(e,i,s)},renderers.oneOf=function(e,t,r,n,a){var i=getSchemaId(t),o=getSchema(i),s=document.createElement("select"),u=document.createElement("div");u.innerHTML="",s.type="select",s.schema=i;var l=document.createElement("option");l.value=null,appendChild(s,l,o);for(var d=0;d<o.oneOf.length;d++){var p=document.createElement("option"),c=i+"."+d,m=getSchema(c),f=document.createTextNode(m.title);if(p.value=o.oneOf[d],appendChild(p,f,o),appendChild(s,p,o),void 0!==a&&null!==a&&(o.readOnly&&(s.disabled=!0),a.hasOwnProperty("type")&&m.hasOwnProperty("properties")&&m.properties.hasOwnProperty("type"))){var h=getSchema(m.properties.type);a.type===h["enum"][0]&&(s.selectedIndex=d+1,render(null,u,t+"."+(s.selectedIndex-1),r,n,a))}}s.onchange=function(){render(null,u,t+"."+(s.selectedIndex-1),r,n,a)},appendChild(e,s,o),appendChild(e,u,o)},renderers.object=function(e,t,r,n,a){function i(e){var t=new Object;return t.getValue=function(){return e},t.onchange=function(e){},t}function o(e,t,r,n,a,i){var o=getSchemaId(r),s=getSchema(o),u=t.tBodies[0],l=document.createElement("tr"),d=document.createElement("td");d.className="add-prop-name";var p=document.createElement("table"),c=document.createElement("tr"),m=document.createElement("td"),f=document.createElement("td"),h="$"+Object.keys(e).length+"$",v=document.createElement("td");v.className="prop-value";var g=document.createElement("input");g.type="text";var y;i&&(y=RegExp(i)),g.getValidationError=function(){return g.previousValue!==g.value&&e.hasOwnProperty(g.value)?BrutusinForms.messages.addpropNameExistent:g.value?void 0:BrutusinForms.messages.addpropNameRequired};var b=createPropertyProvider(function(){if(g.value){if(!y)return g.value;if(-1!==g.value.search(y))return g.value}return h},function(t){b.getValue()!==t&&(t&&e.hasOwnProperty(t)||(t=h),(e.hasOwnProperty(t)||y&&-1===b.getValue().search(y))&&(e[b.getValue()]=e[t],delete e[t]))});g.onblur=function(){if(g.previousValue!==g.value){for(var t=g.value,r=1;g.previousValue!==t&&e.hasOwnProperty(t);)t=g.value+"("+r+")",r++;return g.value=t,b.onchange(g.previousValue),void(g.previousValue=g.value)}};var P=document.createElement("button");P.setAttribute("type","button"),P.className="remove",appendChild(P,document.createTextNode("x"),s),P.onclick=function(){delete e[g.value],t.deleteRow(l.rowIndex),g.value=null,b.onchange(g.previousValue)},appendChild(m,g,s),appendChild(f,P,s),appendChild(c,m,s),appendChild(c,f,s),appendChild(p,c,s),appendChild(d,p,s),void 0!==i&&(g.placeholder=i),appendChild(l,d,s),appendChild(l,v,s),appendChild(u,l,s),appendChild(t,u,s),render(null,v,r,e,b,a),n&&(g.value=n,g.onblur())}var s=getSchemaId(t),u=getSchema(s),l=new Object;r?(n.getValue()||0===n.getValue())&&(r[n.getValue()]=l):data=l;var d=document.createElement("table");d.className="object";var p=document.createElement("tbody");appendChild(d,p,u);var c=0;if(u.hasOwnProperty("properties")){c=u.properties.length;for(var m in u.properties){var f=document.createElement("tr"),h=document.createElement("td");h.className="prop-name";var v=t+"."+m,g=getSchema(getSchemaId(v)),y=document.createElement("td");y.className="prop-value",appendChild(p,f,g),appendChild(f,h,g),appendChild(f,y,g);var b=i(m),P=null;a&&(P=a[m]),render(h,y,v,l,b,P)}}var O=[];if(u.patternProperties||u.additionalProperties){var w=document.createElement("div");if(appendChild(w,d,u),u.patternProperties)for(var x in u.patternProperties){var C=u.patternProperties[x],E=document.createElement("div");E.className="add-pattern-div";var S=document.createElement("button");if(S.setAttribute("type","button"),S.pattern=x,S.id=t+"["+x+"]",S.onclick=function(){o(l,d,this.id,void 0,void 0,this.pattern)},(u.maxProperties||u.minProperties)&&(S.getValidationError=function(){return u.minProperties&&c+d.rows.length<u.minProperties?BrutusinForms.messages.minProperties.format(u.minProperties):u.maxProperties&&c+d.rows.length>u.maxProperties?BrutusinForms.messages.maxProperties.format(u.maxProperties):void 0}),C.description&&(S.title=C.description),appendChild(S,document.createTextNode("Add "+x),u),appendChild(E,S,u),a)for(var I in a)if(!u.properties||!u.properties.hasOwnProperty(I)){var N=RegExp(x);-1!==I.search(N)&&-1===O.indexOf(I)&&(o(l,d,t+"["+x+"]",I,a[I],x),O.push(I))}appendChild(w,E,u)}if(u.additionalProperties){var F=getSchema(u.additionalProperties),S=document.createElement("button");if(S.setAttribute("type","button"),S.onclick=function(){o(l,d,t+"[*]",void 0)},(u.maxProperties||u.minProperties)&&(S.getValidationError=function(){return u.minProperties&&c+d.rows.length<u.minProperties?BrutusinForms.messages.minProperties.format(u.minProperties):u.maxProperties&&c+d.rows.length>u.maxProperties?BrutusinForms.messages.maxProperties.format(u.maxProperties):void 0}),F.description&&(S.title=F.description),appendChild(S,document.createTextNode("Add"),u),appendChild(w,S,u),a)for(var I in a)u.properties&&u.properties.hasOwnProperty(I)||-1===O.indexOf(I)&&o(l,d,t+'["'+m+'"]',I,a[I])}appendChild(e,w,u)}else appendChild(e,d,u)},renderers.array=function(e,t,r,n,a){function i(e,t,r,n,a){var i=getSchemaId(r),o=getSchema(i),s=document.createElement("tbody"),u=document.createElement("tr");u.className="item";var l=document.createElement("td");l.className="item-index";var d=document.createElement("td");d.className="item-action";var p=document.createElement("td");p.className="item-value";var c=document.createElement("button");c.setAttribute("type","button"),c.className="remove",a===!0&&(c.disabled=!0),appendChild(c,document.createTextNode("x"),o);var m=function(){for(var e=0;e<t.rows.length;e++){var r=t.rows[e];r.cells[0].innerHTML=e+1}};c.onclick=function(){e.splice(u.rowIndex,1),t.deleteRow(u.rowIndex),m()},appendChild(d,c,o);var f=document.createTextNode(t.rows.length+1);appendChild(l,f,o),appendChild(u,l,o),appendChild(u,d,o),appendChild(u,p,o),appendChild(s,u,o),appendChild(t,s,o);var h=createPropertyProvider(function(){return u.rowIndex});render(null,p,r,e,h,n)}var o=getSchemaId(t),s=getSchema(o),u=getSchema(s.items),l=new Array;r?(n.getValue()||0===n.getValue())&&(r[n.getValue()]=l):data=l,n&&(n.onchange=function(e){delete r[e],r[n.getValue()]=l});var d=document.createElement("div"),p=document.createElement("table");p.className="array",appendChild(d,p,s),appendChild(e,d,s);var c=document.createElement("button");if(s.readOnly&&(c.disabled=!0),c.setAttribute("type","button"),c.getValidationError=function(){if(s.minItems&&s.minItems>p.rows.length)return BrutusinForms.messages.minItems.format(s.minItems);if(s.maxItems&&s.maxItems<p.rows.length)return BrutusinForms.messages.maxItems.format(s.maxItems);if(s.uniqueItems)for(var e=0;e<l.length;e++)for(var t=e+1;t<l.length;t++)if(JSON.stringify(l[e])===JSON.stringify(l[t]))return BrutusinForms.messages.uniqueItems},c.onclick=function(){i(l,p,t+"[#]",null)},u.description&&(c.title=u.description),appendChild(c,document.createTextNode(BrutusinForms.messages.addItem),s),appendChild(d,p,s),appendChild(d,c,s),a&&a instanceof Array)for(var m=0;m<a.length;m++)i(l,p,t+"["+m+"]",a[m],s.readOnly);appendChild(e,d,s)},obj.render=function(e,t){container=e,initialValue=t;var r=document.createElement("form");if(r.className="brutusin-form",r.onsubmit=function(e){return!1},container?appendChild(container,r):appendChild(document.body,r),error){var n=document.createElement("label"),a=document.createTextNode(error);appendChild(n,a),n.className="error-message",appendChild(r,n)}else render(null,r,"$",null,null);dependencyMap.hasOwnProperty("$")&&onDependencyChanged("$"),BrutusinForms.postRender&&BrutusinForms.postRender(obj)},obj.getRenderingContainer=function(){return container},obj.validate=function(){return validate(container)},obj.getData=function(){function e(t,r){if(null===s&&(s=SCHEMA_ANY),r.$ref&&(r=getDefinition(r.$ref)),t instanceof Array){if(0===t.length)return null;for(var n=new Array,a=0;a<t.length;a++)n[a]=e(t[a],r.items);return n}if(""===t)return null;if(t instanceof Object){var n=new Object,i=!1;for(var o in t)if(!o.startsWith("$")||!o.endsWith("$")){var s=null;if(r.hasOwnProperty("properties")&&r.properties.hasOwnProperty(o)&&(s=r.properties[o]),null===s&&r.hasOwnProperty("additionalProperties")&&"object"==typeof r.additionalProperties&&(s=r.additionalProperties),null===s&&r.hasOwnProperty("patternProperties"))for(var u in r.patternProperties){var l=RegExp(u);if(-1!==o.search(l)){s=r.patternProperties[u];break}}var d=e(t[o],s);null!==d&&(n[o]=d,i=!0)}return i||r.required?n:null}return t}return container?e(data,schema):null},BrutusinForms.instances[BrutusinForms.instances.length]=obj,obj},brutusin["json-forms"]=BrutusinForms}();

/***/ }),
/* 20 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;!function(f){if(true)module.exports=f();else if("function"==typeof define&&define.amd)define([],f);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).MeteorEmoji=f()}}(function(){return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n||e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){!function(global,factory){if(void 0!==exports)factory(module);else{var mod={exports:{}};factory(mod),global.meteorEmoji=mod.exports}}(this,function(module){"use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),MeteorEmoji=function(){function MeteorEmoji(){!function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,MeteorEmoji),this.initiate()}return _createClass(MeteorEmoji,[{key:"initiate",value:function(){var _this=this;document.querySelectorAll('[data-meteor-emoji="true"], [data-meteor-emoji-large="true"]').forEach(function(element){_this.generateElements(element)})}},{key:"generateElements",value:function(emojiInput){var clickLink=function(event){var caretPos=emojiInput.selectionStart;emojiInput.value=emojiInput.value.substring(0,caretPos)+" "+event.target.innerHTML+emojiInput.value.substring(caretPos),emojiPicker.style.display="block","undefined"!=typeof angular&&angular.element(emojiInput).triggerHandler("change")},clickCategory=function(event){emojiInput.selectionStart;emojiPicker.style.display="block";for(var hideUls=emojiPicker.querySelectorAll("ul"),i=1,l=hideUls.length;i<l;i++)hideUls[i].style.display="none";var backgroundToggle=emojiPicker.querySelectorAll(".category a");for(i=0,l=backgroundToggle.length;i<l;i++)backgroundToggle[i].style.background="none";emojiPicker.querySelector("."+event.target.id).style.display="block",emojiPicker.querySelector("#"+event.target.id).style.background="#c2c2c2"};emojiInput.style.width="100%";var emojiContainer=document.createElement("div");emojiContainer.style.position="relative",emojiInput.parentNode.replaceChild(emojiContainer,emojiInput),emojiContainer.appendChild(emojiInput);var emojiPicker=document.createElement("div");emojiPicker.tabIndex=0,emojiInput.hasAttribute("data-meteor-emoji-large")?(emojiPicker.style.zIndex="999",emojiPicker.style.display="block",emojiPicker.style.width="100%",emojiPicker.style.marginBottom="15px"):(emojiPicker.style.position="absolute",emojiPicker.style.right="0px",emojiPicker.style.top="30px",emojiPicker.style.display="none",emojiPicker.style.width="400px"),emojiPicker.style.zIndex="999",emojiPicker.style.overflow="hidden",emojiPicker.style.background="#fff",emojiPicker.style.borderRadius="5px",emojiPicker.style.boxShadow="0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",emojiPicker.style.borderRadius="2px;",emojiPicker.style.marginTop="5px",emojiPicker.style.outline="none";var emojiTrigger=document.createElement("a");emojiTrigger.style.position="absolute",emojiTrigger.style.top="10px",emojiTrigger.style.right="10px",emojiTrigger.style.textDecoration="none",emojiTrigger.setAttribute("href","javascript:void(0)"),emojiTrigger.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12 14"><path d="M8.9 8.4q-0.3 0.9-1.1 1.5t-1.8 0.6-1.8-0.6-1.1-1.5q-0.1-0.2 0-0.4t0.3-0.2q0.2-0.1 0.4 0t0.2 0.3q0.2 0.6 0.7 1t1.2 0.4 1.2-0.4 0.7-1q0.1-0.2 0.3-0.3t0.4 0 0.3 0.2 0 0.4zM5 5q0 0.4-0.3 0.7t-0.7 0.3-0.7-0.3-0.3-0.7 0.3-0.7 0.7-0.3 0.7 0.3 0.3 0.7zM9 5q0 0.4-0.3 0.7t-0.7 0.3-0.7-0.3-0.3-0.7 0.3-0.7 0.7-0.3 0.7 0.3 0.3 0.7zM11 7q0-1-0.4-1.9t-1.1-1.6-1.6-1.1-1.9-0.4-1.9 0.4-1.6 1.1-1.1 1.6-0.4 1.9 0.4 1.9 1.1 1.6 1.6 1.1 1.9 0.4 1.9-0.4 1.6-1.1 1.1-1.6 0.4-1.9zM12 7q0 1.6-0.8 3t-2.2 2.2-3 0.8-3-0.8-2.2-2.2-0.8-3 0.8-3 2.2-2.2 3-0.8 3 0.8 2.2 2.2 0.8 3z"/></svg>',emojiTrigger.onclick=function(){"none"===emojiPicker.style.display?emojiPicker.style.display="block":"block"===emojiPicker.style.display&&(emojiPicker.style.display="none"),emojiPicker.focus()},emojiInput.hasAttribute("data-meteor-emoji-large")||emojiContainer.appendChild(emojiTrigger),window.addEventListener("click",function(e){emojiInput.hasAttribute("data-meteor-emoji-large")||"block"===emojiPicker.style.display&&(emojiPicker.contains(e.target)||emojiTrigger.contains(e.target)||(emojiPicker.style.display="none"))});var facesCategory=document.createElement("ul");facesCategory.style.padding="10px 0px",facesCategory.style.margin="0",facesCategory.style.listStyle="none",facesCategory.style.textAlign="left",facesCategory.style.marginLeft="3%",facesCategory.classList.add("faces");var animalsCategory=document.createElement("ul");animalsCategory.style.padding="10px 0px",animalsCategory.style.margin="0",animalsCategory.style.listStyle="none",animalsCategory.style.textAlign="left",animalsCategory.style.marginLeft="3%",animalsCategory.classList.add("animals"),animalsCategory.style.display="none";var foodCategory=document.createElement("ul");foodCategory.style.padding="10px 0px",foodCategory.style.margin="0",foodCategory.style.listStyle="none",foodCategory.style.textAlign="left",foodCategory.style.marginLeft="3%",foodCategory.classList.add("food"),foodCategory.style.display="none";var sportCategory=document.createElement("ul");sportCategory.style.padding="10px 0px",sportCategory.style.margin="0",sportCategory.style.listStyle="none",sportCategory.style.textAlign="left",sportCategory.style.marginLeft="3%",sportCategory.classList.add("sport"),sportCategory.style.display="none";var transportCategory=document.createElement("ul");transportCategory.style.padding="10px 0px",transportCategory.style.margin="0",transportCategory.style.listStyle="none",transportCategory.style.textAlign="left",transportCategory.style.marginLeft="3%",transportCategory.classList.add("transport"),transportCategory.style.display="none";var objectsCategory=document.createElement("ul");objectsCategory.style.padding="10px 0px",objectsCategory.style.margin="0",objectsCategory.style.listStyle="none",objectsCategory.style.textAlign="left",objectsCategory.style.marginLeft="3%",objectsCategory.classList.add("objects"),objectsCategory.style.display="none";var emojiCategory=document.createElement("ul");emojiCategory.style.padding="0px",emojiCategory.style.margin="0",emojiCategory.style.display="table",emojiCategory.style.width="100%",emojiCategory.style.background="#eff0f1",emojiCategory.style.listStyle="none",emojiCategory.classList.add("category");var emojiCategories=new Array;emojiCategories.push({name:"faces",svg:'<svg id="faces" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150"><path id="faces" d="M74.34,128.48a53.5,53.5,0,1,1,37.84-15.67,53.16,53.16,0,0,1-37.84,15.67Zm0-97.89a44.4,44.4,0,1,0,31.4,13,44.07,44.07,0,0,0-31.4-13Z"/><path id="faces" d="M74.35,108A33.07,33.07,0,0,1,41.29,75a2.28,2.28,0,0,1,2.27-2.28h0A2.27,2.27,0,0,1,45.83,75a28.52,28.52,0,0,0,57,0,2.27,2.27,0,0,1,4.54,0A33.09,33.09,0,0,1,74.35,108Z"/><path id="faces" d="M58.84,62a6.81,6.81,0,1,0,6.81,6.81A6.81,6.81,0,0,0,58.84,62Z"/><path id="faces" d="M89.87,62a6.81,6.81,0,1,0,6.81,6.81A6.82,6.82,0,0,0,89.87,62Z"/></svg>'}),emojiCategories.push({name:"animals",svg:'<svg id="animals" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150"><path id="animals" d="M59.9,91.75h0c-22.46,0-41.82-19.34-44.09-44A52.1,52.1,0,0,1,16,36.8a4.51,4.51,0,0,1,2.63-3.62,39.79,39.79,0,0,1,12.74-3.37c23.92-2.15,45.35,17.83,47.74,43.86a52.77,52.77,0,0,1-.15,10.93,4.56,4.56,0,0,1-2.64,3.62,39.67,39.67,0,0,1-12.73,3.36c-1.23.11-2.45.17-3.66.17ZM24.76,40.49a41.29,41.29,0,0,0,.09,6.4C26.7,67,42.09,82.66,59.9,82.67h0c.94,0,1.88,0,2.83-.14a30.39,30.39,0,0,0,7.41-1.62,41.14,41.14,0,0,0-.11-6.4C68.09,53.38,51.11,37.08,32.17,38.86a30.78,30.78,0,0,0-7.41,1.63Z"/><path id="animals" d="M36.68,125.64a4.53,4.53,0,0,1-4.33-3.17,53.32,53.32,0,0,1-2.26-11A50.42,50.42,0,0,1,39.51,76.6c7.35-9.91,17.84-16,29.5-17,1.16-.11,2.33-.13,3.47-.13a4.54,4.54,0,0,1,4.33,3.16,51.59,51.59,0,0,1,2.27,11.08,50.39,50.39,0,0,1-9.42,34.8c-7.35,9.91-17.83,16-29.5,17a17.63,17.63,0,0,1-3.48.12ZM69.09,68.69A32.41,32.41,0,0,0,46.8,82a42.57,42.57,0,0,0-6.71,34.38,32.38,32.38,0,0,0,22.28-13.32A41.35,41.35,0,0,0,70,74.51a39.38,39.38,0,0,0-.94-5.82Z"/><path id="animals" d="M90.27,91.75c-1.22,0-2.43-.06-3.66-.17a39.67,39.67,0,0,1-12.73-3.36,4.57,4.57,0,0,1-2.64-3.61,53.38,53.38,0,0,1-.17-10.93c2.41-26,23.7-46.07,47.76-43.87a39.74,39.74,0,0,1,12.73,3.37,4.57,4.57,0,0,1,2.64,3.62,53.35,53.35,0,0,1,.16,10.92c-2.28,24.69-21.65,44-44.09,44ZM80,80.91a30.57,30.57,0,0,0,7.42,1.62c19.07,1.78,35.92-14.53,37.87-35.64a42.55,42.55,0,0,0,.1-6.4A30.86,30.86,0,0,0,118,38.86C99,37.07,82.06,53.38,80.12,74.51a43.91,43.91,0,0,0-.1,6.4Z"/><path id="animals" d="M113.49,125.64h0c-1.16,0-2.3,0-3.46-.12-23.9-2.21-41.36-25.47-38.94-51.85A53.52,53.52,0,0,1,73.34,62.6a4.55,4.55,0,0,1,4.33-3.16c1.16,0,2.34,0,3.51.13,11.64,1.07,22.11,7.12,29.48,17a50.51,50.51,0,0,1,9.42,34.81,53.51,53.51,0,0,1-2.26,11,4.54,4.54,0,0,1-4.33,3.19ZM81.08,68.69a42.53,42.53,0,0,0-1,5.82c-1.94,21.1,11.45,39.71,29.95,41.88A42.38,42.38,0,0,0,103.36,82,32.42,32.42,0,0,0,81.08,68.69Z"/><path id="animals" d="M75.08,45.45a7.83,7.83,0,1,0,7.83,7.83,7.83,7.83,0,0,0-7.83-7.83Z"/><path id="animals" d="M76.29,51.89a2.26,2.26,0,0,1-2.14-3A46,46,0,0,1,92.82,25.34a2.27,2.27,0,1,1,2.4,3.86A41.4,41.4,0,0,0,78.43,50.39a2.28,2.28,0,0,1-2.14,1.5Z"/><path id="animals" d="M73.87,51.89a2.28,2.28,0,0,1-2.14-1.5A41.35,41.35,0,0,0,54.94,29.2a2.27,2.27,0,0,1,2.39-3.86A46,46,0,0,1,76,48.85a2.28,2.28,0,0,1-1.37,2.91,2.31,2.31,0,0,1-.77.13Z"/></svg>'}),emojiCategories.push({name:"food",svg:'<svg id="food" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150"><path id="food" d="M104,20.76h.15c15.83.52,24.08,21.48,24.07,32.56.26,12.42-10.72,23.55-24,24.21a3.53,3.53,0,0,1-.46,0c-13.25-.66-24.23-11.8-24-24.3,0-11,8.26-31.95,24.07-32.47Zm0,47.69c8.25-.54,15.3-7.51,15.14-15,0-8.12-6.22-23.1-15.14-23.57-8.9.46-15.14,15.45-15.14,23.48-.14,7.61,6.9,14.59,15.14,15.13Z"/><path id="food" d="M97.19,69.21h.14a4.53,4.53,0,0,1,4.4,4.68l-1.48,46.92a1.59,1.59,0,0,0,.5,1.06,4.6,4.6,0,0,0,3.25,1.19h0a4.57,4.57,0,0,0,3.26-1.2,1.53,1.53,0,0,0,.49-1l-1.48-46.95a4.54,4.54,0,1,1,9.08-.28l1.47,46.91a10.42,10.42,0,0,1-3,7.65,13.65,13.65,0,0,1-9.81,4h0a13.58,13.58,0,0,1-9.79-4,10.42,10.42,0,0,1-3-7.67l1.48-46.89a4.53,4.53,0,0,1,4.53-4.4Z"/><path id="food" d="M41.84,69.21H42a4.53,4.53,0,0,1,4.4,4.68L44.9,120.81a1.57,1.57,0,0,0,.5,1.06,4.6,4.6,0,0,0,3.25,1.19h0a4.51,4.51,0,0,0,3.24-1.19,1.48,1.48,0,0,0,.5-1L50.93,73.89a4.53,4.53,0,0,1,4.39-4.68A4.4,4.4,0,0,1,60,73.61l1.48,46.91a10.49,10.49,0,0,1-3,7.66,13.57,13.57,0,0,1-9.78,4h0a13.59,13.59,0,0,1-9.78-4,10.48,10.48,0,0,1-3-7.67l1.48-46.9a4.54,4.54,0,0,1,4.54-4.4Z"/><path id="food" d="M28.59,20.76a4.54,4.54,0,0,1,4.54,4.54V51a15.52,15.52,0,0,0,31,0V25.3a4.55,4.55,0,0,1,9.09,0V51a24.61,24.61,0,1,1-49.21,0V25.3a4.54,4.54,0,0,1,4.54-4.54Z"/><path id="food" d="M55.34,20.76a4.54,4.54,0,0,1,4.54,4.54v19a4.54,4.54,0,1,1-9.08,0v-19a4.54,4.54,0,0,1,4.54-4.54Z"/><path id="food" d="M42,20.76a4.54,4.54,0,0,1,4.54,4.54v19a4.54,4.54,0,1,1-9.08,0v-19A4.54,4.54,0,0,1,42,20.76Z"/></svg>'}),emojiCategories.push({name:"sport",svg:'<svg id="sport" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150"><path id="sport" d="M75.35,130.24a53.49,53.49,0,1,1,53.48-53.49,53.55,53.55,0,0,1-53.48,53.49Zm0-97.89a44.41,44.41,0,1,0,44.4,44.4,44.1,44.1,0,0,0-44.4-44.4Z"/><path id="sport" d="M119.24,84.08A51.29,51.29,0,0,1,68,32.86a49.44,49.44,0,0,1,.26-5,2.26,2.26,0,0,1,2-2c1.66-.16,3.34-.25,5-.25a51.26,51.26,0,0,1,51.21,51.21c0,1.71-.09,3.38-.25,5a2.28,2.28,0,0,1-2,2c-1.65.16-3.33.25-5,.25ZM72.64,30.16c-.06.9-.08,1.79-.08,2.7a46.73,46.73,0,0,0,46.68,46.68q1.37,0,2.7-.09c.06-.89.08-1.79.08-2.7A46.72,46.72,0,0,0,75.35,30.08c-.91,0-1.82,0-2.71.08Z"/><path id="sport" d="M75.35,128A51.28,51.28,0,0,1,24.12,76.76c0-1.7.1-3.38.25-5a2.29,2.29,0,0,1,2-2c1.66-.16,3.33-.25,5.05-.25a51.27,51.27,0,0,1,51.21,51.22c0,1.69-.09,3.37-.25,5a2.27,2.27,0,0,1-2,2c-1.66.16-3.32.25-5,.25ZM28.75,74.05c-.05.9-.09,1.8-.09,2.71a46.74,46.74,0,0,0,46.69,46.67c.91,0,1.8,0,2.7-.08,0-.9.08-1.8.08-2.7A46.73,46.73,0,0,0,31.46,74c-.91,0-1.81,0-2.71.08Z"/><polygon id="sport" points="42.69 112.61 39.48 109.4 108 40.88 111.21 44.1 42.69 112.61 42.69 112.61"/></svg>'}),emojiCategories.push({name:"transport",svg:'<svg id="transport" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150"><path id="transport" d="M120.7,116H31a4.55,4.55,0,0,1-4.54-4.55V54.28A31.82,31.82,0,0,1,58.25,22.49h35.2a31.83,31.83,0,0,1,31.8,31.79v57.15A4.55,4.55,0,0,1,120.7,116Zm-85.16-9.09h80.62V54.28A22.74,22.74,0,0,0,93.45,31.57H58.25A22.74,22.74,0,0,0,35.54,54.28v52.61Z"/><path id="transport" d="M49.35,129.23c-8.53,0-13.62-2.77-13.62-7.41V115.6a4.54,4.54,0,1,1,9.08,0v4.06a21.32,21.32,0,0,0,9.09,0V115.6a4.54,4.54,0,0,1,9.08,0v6.22c0,4.64-5.09,7.41-13.63,7.41Z"/><path id="transport" d="M102.34,129.23c-8.53,0-13.62-2.77-13.62-7.41V115.6a4.54,4.54,0,0,1,9.08,0v4.06a21.28,21.28,0,0,0,9.08,0V115.6a4.55,4.55,0,0,1,9.09,0v6.22c0,4.64-5.09,7.41-13.63,7.41Z"/><path id="transport" d="M97.81,44.83H53.9a4.55,4.55,0,1,1,0-9.09H97.81a4.55,4.55,0,0,1,0,9.09Z"/><path id="transport" d="M54.28,84.2A6.8,6.8,0,1,0,61.07,91a6.8,6.8,0,0,0-6.79-6.8Z"/><path id="transport" d="M97.43,84.2a6.8,6.8,0,1,0,6.79,6.8,6.8,6.8,0,0,0-6.79-6.8Z"/><path id="transport" d="M107.08,81H44.63a6.82,6.82,0,0,1-6.82-6.82V54.28a6.82,6.82,0,0,1,6.82-6.81h62.45a6.82,6.82,0,0,1,6.81,6.81V74.15A6.83,6.83,0,0,1,107.08,81ZM44.63,52a2.28,2.28,0,0,0-2.28,2.27V74.15a2.28,2.28,0,0,0,2.28,2.27h62.45a2.27,2.27,0,0,0,2.27-2.27V54.28A2.27,2.27,0,0,0,107.08,52Z"/></svg>'}),emojiCategories.push({name:"objects",svg:'<svg id="objects" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150"><path id="objects" d="M107.78,129a4.55,4.55,0,0,1-2.67-.87l-30-21.79-30,21.79a4.53,4.53,0,0,1-5.34,0,4.58,4.58,0,0,1-1.65-5.08L49.59,87.82,19.6,66a4.54,4.54,0,0,1,2.67-8.22H59.34L70.8,22.55a4.55,4.55,0,0,1,8.64,0L90.89,57.81H128A4.54,4.54,0,0,1,130.63,66l-30,21.79,11.46,35.25a4.55,4.55,0,0,1-4.32,6ZM75.12,96.2a4.53,4.53,0,0,1,2.67.87l21.35,15.51L91,87.49a4.55,4.55,0,0,1,1.65-5.08L114,66.89H87.59a4.54,4.54,0,0,1-4.32-3.13l-8.15-25.1L67,63.76a4.53,4.53,0,0,1-4.32,3.13H36.25L57.61,82.41a4.54,4.54,0,0,1,1.65,5.08l-8.17,25.09L72.45,97.07a4.53,4.53,0,0,1,2.67-.87Z"/></svg>'});emojiCategories.map(function(item){var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.padding="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.style.display="table-cell",emojiLink.style.textAlign="center",emojiLink.id=String(item.name),"faces"==String(item.name)&&(emojiLink.style.background="#c2c2c2"),emojiLink.innerHTML=String(item.svg),emojiLink.onmousedown=clickCategory,emojiCategory.appendChild(emojiLink)}),[128513,128514,128515,128516,128517,128518,128521,128522,128523,128524,128525,128527,128530,128531,128532,128534,128536,128538,128540,128541,128542,128544,128545,128546,128547,128548,128549,128552,128553,128554,128555,128557,128560,128561,128562,128563,128565,128567].map(function(item){var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.margin="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.innerHTML=String.fromCodePoint(item),emojiLink.onmousedown=clickLink,facesCategory.appendChild(emojiLink)}),[128012,128013,128014,128017,128018,128020,128023,128024,128025,128026,128027,128028,128029,128030,128031,128032,128033,128034,128035,128036,128037,128038,128039,128040,128041,128043,128044,128045,128046,128047,128048,128049,128050,128051,128052,128053,128054,128055,128056,128057,128058,128059,128060].map(function(item){var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.margin="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.innerHTML=String.fromCodePoint(item),emojiLink.onmousedown=clickLink,animalsCategory.appendChild(emojiLink)}),[127813,127814,127815,127816,127817,127818,127820,127821,127822,127823,127825,127826,127827,127828,127829,127830,127831,127832,127836,127837,127838,127839,127840,127841,127842,127843,127844,127846,127848,127849,127850,127851,127852,127853,127856,127858,127859,127860,127863,127864,127867].map(function(item){var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.margin="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.innerHTML=String.fromCodePoint(item),emojiLink.onmousedown=clickLink,foodCategory.appendChild(emojiLink)}),[127921,127923,127934,127935,127936,127937,127938,127939,127940,127942,127944,127946,128675,128692,128693,9917,9918,9978,127907,127919,9971].map(function(item){var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.margin="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.innerHTML=String.fromCodePoint(item),emojiLink.onmousedown=clickLink,sportCategory.appendChild(emojiLink)}),[128641,128642,128646,128648,128650,128653,128654,128656,128660,128662,128664,128667,128668,128669,128670,128671,128672,128673,128640,128643,128644,128645,128647,128649,128652,128657,128658,128659,128661,128663,128665,128666,128674,128676,128690].map(function(item){var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.margin="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.innerHTML=String.fromCodePoint(item),emojiLink.onmousedown=clickLink,transportCategory.appendChild(emojiLink)}),[127890,127880,127881,127887,127891,127905,127906,127908,127909,127911,127912,127915,127916,127918,127919,127926,127927,127928,127929,127930,127931,127932,127968,127973,127978,128147,128148,128149,128150,128151,128152,128187,128186,128197,128213,128247].map(function(item){var emojiLi=document.createElement("li");emojiLi.style.display="inline-block",emojiLi.style.margin="5px";var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.margin="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.innerHTML=String.fromCodePoint(item),emojiLink.onmousedown=clickLink,objectsCategory.appendChild(emojiLink)}),emojiPicker.appendChild(emojiCategory),emojiPicker.appendChild(facesCategory),emojiPicker.appendChild(animalsCategory),emojiPicker.appendChild(foodCategory),emojiPicker.appendChild(sportCategory),emojiPicker.appendChild(transportCategory),emojiPicker.appendChild(objectsCategory),emojiContainer.appendChild(emojiPicker)}}]),MeteorEmoji}();module.exports=MeteorEmoji})},{}]},{},[1])(1)});

/***/ }),
/* 22 */
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzRhMmE3ODVjMTcyYWEwMDUyNGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb29raWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy91c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vanMtc2VydmljZXMvdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9+L3B1YnN1Yi1qcy9zcmMvcHVic3ViLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vanMtc2VydmljZXMvbmV0d29yay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvY29uZmlybS1yZWcvY29uZmlybS1yZWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9mb2xsb3cvZm9sbG93LmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaGVhZGVyL2J1cmdlci1tZW51L2J1cmdlci1tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaGVhZGVyL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2luc3RhZ3JhbS1hY2NvdW50cy1saXN0L2luc3RhZ3JhbS1hY2NvdW50cy1saXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvbG9naW4tZm9ybS9sb2dpbi1mb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvbWVzc2FnZXMvbWVzc2FnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9yZWdpc3Rlci1mb3JtL3JlZ2lzdGVyLWZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy9hcGktdGFzay1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vanMtc2VydmljZXMvYXBpLXVzZXItZGlyZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vanMtc2VydmljZXMvc3Bpbm5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2F1dGgvbG9naW4tcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JydXR1c2luLWpzb24tZm9ybXMvZGlzdC9qcy9icnV0dXNpbi1qc29uLWZvcm1zLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFzZS5zY3NzIiwid2VicGFjazovLy8uL34vbWV0ZW9yLWVtb2ppL2Rpc3QvbWV0ZW9yRW1vamkubWluLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiXSwibmFtZXMiOlsiQ09OU1QiLCJ1cmwiLCJiYXNlIiwicmVnaXN0cmF0aW9uIiwibG9naW4iLCJjb25maXJtYXRpb24iLCJpbnN0YWdyYW1fYWRkQWNjb3VudCIsImluc3RhZ3JhbUFjY291bnRfZ2V0TWV0YURhdGEiLCJpbnN0YWdyYW1BY2NvdW50X2NoZWNrcG9pbnQiLCJpbnN0YWdyYW1BY2NvdW50X2NvbmZpcm1LZXkiLCJpbnN0YWdyYW1EaXJlY3RfZ2V0TWV0YURhdGEiLCJpbnN0YWdyYW1EaXJlY3RfcG9zdE1lc3NhZ2UiLCJpbnN0YWdyYW1UYXNrTWFuYWdlciIsImluc3RhZ3JhbVRhc2tNYW5hZ2VyX2dldE1ldGFEYXRhIiwiaW5zdGFncmFtVGFza01hbmFnZXJfZ2V0VGFza1R5cGVzIiwiaW5zdGFncmFtVGFza01hbmFnZXJfZ2V0RGVmYXVsdENvbmZpZ3MiLCJpbnN0YWdyYW1UYXNrTWFuYWdlcl9wb3N0U3RhcnRGb2xsb3dpbmdMaXN0IiwidXNlciIsImVtYWlsIiwicGFzc3dvcmQiLCJ0b2tlbiIsImNvb2tpZVN0b3JhZ2UiLCJlbWFpbENvbmZpcm1lZCIsInVpU2VsZWN0b3JzIiwiaGVhZGVyTG9naW5Cb3giLCJoZWFkZXJOYXZMb2dpbkJ0biIsImhlYWRlclJlZ0JveCIsImhlYWRlclJlZ0J0biIsImluc3RhZ3JhbSIsImFkZEFjY291bnRCdG5TZWxlY3RvciIsImFkZEFjY291bnRCdG5JZCIsImV2ZW50cyIsIlVTRVJfTE9HR0VEIiwiVVNFUl9MT0dPVVQiLCJVU0VSX0VNQUlMX0NPTkZJUk1FRCIsIlNUT1BfRklYRURfU1BJTk5FUiIsIm1lc3NhZ2VzIiwiUkVDSUVWRV9ORVdfTUVTU0FHRSIsImluc3RhZ3JhbUFjY291bnMiLCJJTlNUQUdSQU1fQUNDT1VOU19SRU5ERVJFRCIsImdldFBhdGgiLCJuYW1lIiwiQ29va2llU3J2IiwiZ2V0IiwiYyIsImRvY3VtZW50IiwiY29va2llIiwibWF0Y2giLCJkZWNvZGVVUklDb21wb25lbnQiLCJzZXQiLCJ2YWx1ZSIsIm9wdHMiLCJwYXRoIiwiZGF5cyIsIk9iamVjdCIsImVudHJpZXMiLCJyZWR1Y2UiLCJzdHIiLCJrIiwidiIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlbW92ZSIsIlVzZXIiLCJuZXR3b3JrIiwic2V0dGluZ1Bvc3QiLCJtZXRob2QiLCJoZWFkZXJzIiwiZ2V0VG9rZW4iLCJjb29raWVUb2tlbiIsImZvcm1EYXRhIiwiY2JFcnJvciIsInNldHRpbmciLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInNlbmRSZXF1ZXN0IiwidXNlcm5hbWUiLCJjaGVja3BvaW50VHlwZSIsImtleSIsInVzZXJJbnN0YW5jZSIsInZpZXdVdGlscyIsInNob3dJbmZvTWVzc2FnZSIsInNlbGVjdG9yIiwibWVzc2FnZTEiLCJtZXNzYWdlMiIsIiQiLCJlbXB0eSIsImFwcGVuZCIsImZpbGxMaXN0IiwiJGxpc3QiLCJkYXRhQXJyYXkiLCJpdGVtcyIsImNMaXN0IiwiZm9yRWFjaCIsIml0ZW0iLCJpIiwibGkiLCJhcHBlbmRUbyIsImFkZENsYXNzIiwidGV4dCIsImlzRW1haWwiLCJyZWdleCIsInRlc3QiLCJOZXR3b3JrIiwicmVzdWx0IiwiJGVsIiwibGVuZ3RoIiwic3RhdHVzIiwic3RhdGUiLCJtZXNzYWdlIiwicmVzcG9uc2UiLCJlcnJvciIsIkVycm9yIiwic3RhdHVzVGV4dCIsIlVSTCIsIk9QVFMiLCJmZXRjaCIsInRoZW4iLCJQcm9taXNlIiwiYWxsIiwianNvbiIsIm9rIiwiY2JFcnJvckRlZmF1bHQiLCJjaGVja1N0YXR1cyIsImhlYWRlciIsImJ1cmdlck1lbnUiLCJpbnN0YWdyYW1BY2NvdW50cyIsImZvbGxvdyIsInNlbGVjdG9yQ3NzTG9naW5Gb3JtIiwiX2xvZ2luQm94IiwiX2Zvcm1JZCIsIl9idXR0b25TdWJtaXRJZCIsIl9zaG93TG9naW5Cb3hCdG5JZCIsInNlbGVjdG9yQ3NzTG9naW5Gb3JtSW5zdGFncmFtIiwiaXNMb2dpbkluc3RhZ3JhbSIsInNldFB1YlN1YiIsIlB1YlN1YiIsIndpbmRvdyIsImluaXQiLCJpbml0SGVhZGVyIiwiY29uZmlybWF0aW9uV2l0aFJlZGlyZWN0IiwicGFyc2VRdWVyeVN0cmluZyIsImxvY2F0aW9uIiwic2VhcmNoIiwib2JqVVJMIiwicmVwbGFjZSIsIlJlZ0V4cCIsIiQwIiwiJDEiLCIkMiIsInBhcmFtcyIsInNlbmRDb25maXJtIiwiY29uZmlybSIsImRhdGEiLCJjdXN0b21lcnNEYXRhU3RyaW5nIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiY29uc29sZSIsImxvZyIsInNldFRpbWVvdXQiLCJyZWRpcmVjdCIsInBhdGhuYW1lIiwiaW5kZXhPZiIsInVzZXJfZGVmYXVsdF9jb25maWciLCJ0YXNrX21vZGUiLCJmaWxsTGlzdFR5cGVzIiwiJHdyYXBwZXIiLCJzdHJ1Y3R1cmVPYmoiLCJ0eXBlIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwic3VidHlwZSIsImdldFRhc2tzRGF0YSIsImdldERhdGFTdGVwMiIsInVzZXJzTmFtZSIsImdldERhdGFTdGVwMyIsInVzZXJzIiwidmFsIiwidHJpbSIsInNwbGl0IiwiZmlsdGVyIiwiZmlsbFNwZWVkTGlzdCIsInRhc2tNb2RlcyIsImNmZyIsInRhc2tfbW9kZXMiLCJyYWRpb0J0blJlZHVjZXIiLCJnZXREZWZhdWx0Q29uZmlncyIsImZvdW5kIiwic3RlcFJlZHVjZXIiLCJzdGVwTnVtYmVyIiwiaW5pdFN0ZXBzIiwiJGZvcm0iLCJyZW1vdmVDbGFzcyIsImZpbmQiLCJmYWRlSW4iLCJvbiIsInBhcmVudF9maWVsZHNldCIsInBhcmVudHMiLCJuZXh0X3N0ZXAiLCJyYWRpb0J0bkFjdGl2ZSIsImluZGV4IiwiZWFjaCIsImZhZGVPdXQiLCJuZXh0IiwicHJldiIsImF0dHIiLCJ0b1VwcGVyQ2FzZSIsImUiLCJnZW5kZXJWYWwiLCJjcml0ZXJpYSIsImdlbmRlciIsImxpbWl0IiwiZm9ybXMiLCJoYXZlX3Bvc3RzIiwiZnJvbSIsInRvIiwiaGF2ZV9mb2xsb3dlcnMiLCJoYXZlX2ZvbGxvd2luZ3MiLCJmb2N1cyIsInByZXZlbnREZWZhdWx0IiwicG9zdFN0YXJ0Rm9sbG93aW5nTGlzdCIsInRhc2tfaWQiLCJtb2RpZnlBY2NMaXN0IiwicmFkaW9CdG4iLCJpZHgiLCIkYWNjb3VudHNMaXN0IiwiJGxpIiwiZ2V0VGFza1R5cGVzIiwiJHBhcmVudEZpZWxkc2V0IiwicHJvcCIsInN1YnNjcmliZSIsImV2ZW50TmFtZSIsInNlbGVjdG9yc0VsIiwibGVmdE1lbnUiLCJoYW1idXJnZXJCdXR0b25DbHMiLCJoYW1idXJnZXJNZW51Q2xzIiwiaGFtYnVyZ2VyTWVudU9wZW5lZENsYXNzIiwiaGFtYnVyZ2VyQnV0dG9uQ2xvc2VDbGFzcyIsInJpZ2h0TWVudSIsInN1YkhlYWRlciIsInRvZ2dsZUhhbWJ1cmdlck1lbnUiLCJtZW51TmFtZSIsInRvZ2dsZUNsYXNzIiwiYmluZCIsInNlbGVjdG9yTG9naW5TdGF0ZSIsInNlbGVjdG9yRW1haWxDb25maXJtU3RhdGUiLCJjbG9zZUNsYXNzIiwib3BlbmVkQ2xhc3MiLCJlbWFpbE5vdENvbmZpcm1lZCIsIiRlbWFpbG5Nc2ciLCJjc3MiLCJvbkxvZ2luU3Vic2NyaWJlIiwibXNnIiwiJGxvZ2luTXNnIiwiaXNFbWFpbENvbmZpcm1lZCIsInNob3dMb2dvdXQiLCJpc0xvZ2dlZCIsImlzTG9nZ2VkSW4iLCJwYXJlbnQiLCJzaG93Iiwib2xkVVJMIiwicmVmZXJyZXIiLCJpbmNsdWRlcyIsIiRsb2dpbkJveCIsIiRyZWdpc3RlckJveCIsImhpZGUiLCJhZGRJbnN0YWdyYW1BY2NvdW50IiwibmV3Rm9ybURhdGEiLCIkbXNnTGlzdCIsImNhdGNoIiwiZXJyIiwiYWRkT25Mb2FkSGFuZGxlcnMiLCJidG4iLCJ0YXJnZXQiLCIkbW9kYWxCb2R5IiwiY2xvc2VzdCIsImZvcm0iLCJjc3NWYWxpZGF0aW9uQ2xhc3MiLCJjaGVja1ZhbGlkaXR5IiwicmVwb3J0VmFsaWRpdHkiLCJhZGRMaXN0SGFuZGxlciIsIiRidXR0b24iLCJzZW5kVG8iLCJzdG9wUHJvcGFnYXRpb24iLCJtb2RhbCIsImdldFNlY3VyaXR5S2V5IiwiJG1vZGFsIiwiJGtleUlucHV0IiwiY29uZmlybVNlY3VyaXR5S2V5IiwibGVuIiwibWluTGVuIiwiTnVtYmVyIiwib25IaWRlTW9kYWwiLCJyZW1vdmVBdHRyIiwidHlwZVNlbGVjdGVkIiwiY2hlY2twb2ludFR5cGVBY3RpdmUiLCJtb2RhbENvbmZpZyIsIl9jb25maWciLCJkZWZhdWx0QXZhdGFyU3JjIiwiaW5zZXJ0SXRlbSIsImNzc0NscyIsImxpVHBsIiwic3RhdHMiLCJpbmZvIiwidHBsIiwiY2hlY2twb2ludCIsInB1Ymxpc2giLCJtZXRhZGF0YSIsImdldE1ldGFkYXRhIiwicmVzZW5kUmVxdWVzdCIsImlzU2VuZFJlcU9uY2UiLCJjaGVja1Jlc3BvbnNlIiwiaXNSZXNlbmRSZXF1ZXN0IiwiYWNjb3VudHMiLCJMb2dpbkZvcm0iLCJzZWxlY3RvckNzcyIsIiRlbWFpbCIsIiR0ZXh0QXJlYURlc2NyaXB0aW9uIiwidXNlckxvZ2luSGVhZGVyIiwiX2Zvcm1EYXRhIiwic3VibWl0Rm9ybSIsImZvcm1EYXRhT2JqIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJsb2dPdXQiLCJiaW5kRXZlbnRzIiwiJHNob3dMb2dpbkJveEJ0bklkIiwiJGJ1dHRvblN1Ym1pdCIsImV2ZW50IiwiaXNMb2dpbkJ0bkNsaWNrIiwiaXNBZGRJbnN0YWdyYW1CdG5DbGlja2VkIiwiaGFzQ2xhc3MiLCJ1cGRhdGVJbnRlcnZhbCIsImludGVydmFsSWQiLCJpc0luTWVzc2FnZVBhZ2UiLCIkdXNlckxpc3QiLCJyZWFkeSIsIm0iLCIkcGlja2VyIiwic3R5bGUiLCJzdHlsZU5ldyIsImlzQXBwZW50UHJldk1zZyIsImluc2VydE1zZyIsInRvTG93ZXJDYXNlIiwiYWRkVG9MaXN0IiwiaW5zZXJ0QmVmb3JlIiwic2lkZSIsImdldEZvcm1hdHRlZERhdGVVdGlsIiwidGltZXN0YW1wIiwiYWRkUGFnaW5hdGlvbiIsInBhZ2luYXRpb24iLCJjdXJzb3IiLCJwcmV2X2N1cnNvciIsInVzZXJEYXRhIiwiY29udmVyc2F0aW9uSWQiLCJzdGFydEJ1dHRvblNwaW5uZXIiLCJnZXRNZXRhZGF0YURldGFpbENvbnZlcnNhdGlvbiIsInN0b3BCdXR0b25TcGlubmVyIiwibWV0YSIsImZpbGxVc2VyTGlzdCIsImNvbnZlcnNhdGlvbkRldGFpbCIsImFkZENvbnZlcnNhdGlvbnMiLCJjb252ZXJzYXRpb25zIiwiaWQiLCJwYXJzZUludCIsImdldEFuZEZpbGxVc2VyTGlzdCIsImlzQWN0aXZlRmlyc3QiLCJwcmV2QWN0aXZlRGlhbG9nSWQiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwic2V0dGluZ3MiLCJpbnZva2VfaW5fbWlsbGlzIiwiZ2V0QW5kRmlsbENvbnZlcnNhdGlvbiIsImlzU2Nyb2xsRG93biIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJhZGRIYW5kbGVycyIsIiR0ZXh0QXJlYSIsImFkZCIsInBvc3RNZXRhZGF0YURldGFpbENvbnZlcnNhdGlvbiIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInJlc3VsdEZyb21TZXJ2ZXIiLCIkZGlhbG9nIiwic2VsZWN0b3JDbHMiLCJzdWJtaXRCdG4iLCJSZWdpc3RlckZvcm0iLCIkcGFzc3dvcmQiLCIkcGFzc3dvcmRDb25maXJtIiwicGFzc3dvcmRDb25maXJtIiwicmVnaXN0ZXIiLCJyZWdpc3RlckJveCIsIiRidG4iLCJpcyIsImlzUmVnQnRuQ2xpY2siLCJVc2VyVGFza01hbmFnZXIiLCJhc0hlYWRlciIsImRldGFpbHMiLCJTVFJBVEVHWV9UWVBFIiwiU1RSQVRFR1lfU1VCVFlQRSIsIlVzZXJDb252ZXJzYXRpb24iLCJ0U3RhbXAiLCJzaG93RnVsbFRpbWUiLCJkYXRlIiwiRGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXkiLCJnZXREYXRlIiwiaG91ciIsImdldEhvdXJzIiwibWluIiwiZ2V0TWludXRlcyIsInNlYyIsImdldFNlY29uZHMiLCJnZXRGdWxsWWVhciIsImNsYXNzZXMiLCJpbmxpbmUiLCJvdmVybGF5IiwiZml4ZWQiLCJidXR0b24iLCJTcGlubmVyIiwiX2NmZyIsIm5ld0NscyIsInByZXBlbmQiLCJleHRlbmQiLCJwcmV3Q2xzIiwic3Bpbm5lckluc3RhbmNlIiwiTG9naW5QYWdlIiwiaHJlZiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDaEVPLElBQU1BLHdCQUFRO0FBQ2pCQyxTQUFLO0FBQ0RDLGNBQU0sMkJBREw7QUFFREMsc0JBQWMscUJBRmI7QUFHREMs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b1BBQW9QLCtDQUErQyw0UEFBNFAsbURBQW1ELDRSQUE0UixpREFBaUQsNFFBQTRRLCtDQUErQyw0UEFBNFAsOEJBQThCLHNCQUFzQiw0b0JBQTRvQix3QkFBd0IsKzRFQUErNEUsd0JBQXdCLHlqREFBeWpELHdCQUF3QixncENBQWdwQyx3QkFBd0IsczFDQUFzMUMsd0JBQXdCLHlzQkFBeXNCLEVBQUUsbUNBQW1DLDBDQUEwQyxtZEFBbWQsaVNBQWlTLDBDQUEwQyw4U0FBOFMsb1VBQW9VLDBDQUEwQyxnVEFBZ1Qsc1RBQXNULDBDQUEwQyw2U0FBNlMsa0tBQWtLLDBDQUEwQyw4U0FBOFMsNFFBQTRRLDBDQUEwQyxrVEFBa1QsbVJBQW1SLHlDQUF5QyxnRUFBZ0UsMENBQTBDLGdUQUFnVCxtVUFBbVUsZUFBZSxHQUFHLDJCQUEyQixFQUFFLEdBQUcsRUFBRSxHQUFHLFNBQVMsRTs7Ozs7O0FDQS9vbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImluZGV4LWFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDM0YTJhNzg1YzE3MmFhMDA1MjRlIiwiZXhwb3J0IGNvbnN0IENPTlNUID0ge1xyXG4gICAgdXJsOiB7XHJcbiAgICAgICAgYmFzZTogJ2h0dHA6Ly9hcGkubHV4Z3JhbS5ydS92MS8nLFxyXG4gICAgICAgIHJlZ2lzdHJhdGlvbjogJ3JlZ2lzdHJhdGlvbi9iYXNpYy8nLFxyXG4gICAgICAgIGxvZ2luOiAncmVnaXN0cmF0aW9uL2Jhc2ljL2xvZ2luJyxcclxuICAgICAgICBjb25maXJtYXRpb246ICdyZWdpc3RyYXRpb24vYmFzaWMvY29uZmlybWF0aW9uP3Rva2VuJyxcclxuICAgICAgICBpbnN0YWdyYW1fYWRkQWNjb3VudDogJ2luc3RhZ3JhbS1hY2NvdW50cy8nLCAvLyB0b0RPOiBjaGVjayBpcyByZWR1bmRhbnRcclxuICAgICAgICBpbnN0YWdyYW1BY2NvdW50X2dldE1ldGFEYXRhOiAnaW5zdGFncmFtLWFjY291bnRzL21ldGEnLFxyXG4gICAgICAgIGluc3RhZ3JhbUFjY291bnRfY2hlY2twb2ludDogJ2luc3RhZ3JhbS1hY2NvdW50cy9jaGVja3BvaW50LycsXHJcbiAgICAgICAgaW5zdGFncmFtQWNjb3VudF9jb25maXJtS2V5OiAnaW5zdGFncmFtLWFjY291bnRzL2NoZWNrcG9pbnQvJyxcclxuICAgICAgICBpbnN0YWdyYW1EaXJlY3RfZ2V0TWV0YURhdGE6ICdpbnN0YWdyYW0tZGlyZWN0L21ldGEnLFxyXG4gICAgICAgIGluc3RhZ3JhbURpcmVjdF9wb3N0TWVzc2FnZTogJ2luc3RhZ3JhbS1kaXJlY3QvJyxcclxuICAgICAgICBpbnN0YWdyYW1UYXNrTWFuYWdlcjogJ2luc3RhZ3JhbS10YXNrLW1hbmFnZXIvJyxcclxuICAgICAgICBpbnN0YWdyYW1UYXNrTWFuYWdlcl9nZXRNZXRhRGF0YTogJ2luc3RhZ3JhbS10YXNrLW1hbmFnZXIvbWV0YScsXHJcbiAgICAgICAgaW5zdGFncmFtVGFza01hbmFnZXJfZ2V0VGFza1R5cGVzOiAnaW5zdGFncmFtLXRhc2stbWFuYWdlci90YXNrL3R5cGVzJyxcclxuICAgICAgICBpbnN0YWdyYW1UYXNrTWFuYWdlcl9nZXREZWZhdWx0Q29uZmlnczogJ2luc3RhZ3JhbS10YXNrLW1hbmFnZXIvY29uZmlnL3R5cGUnLCAvLyB7U1RSQVRFR1lfVFlQRX0vc3VidHlwZS97U1RSQVRFR1lfU1VCVFlQRX1cclxuICAgICAgICBpbnN0YWdyYW1UYXNrTWFuYWdlcl9wb3N0U3RhcnRGb2xsb3dpbmdMaXN0OiAnaW5zdGFncmFtLXRhc2stbWFuYWdlci90YXNrJ1xyXG4gICAgfSxcclxuICAgIHVzZXI6IHtcclxuICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgIHRva2VuOiAnJ1xyXG4gICAgfSxcclxuICAgIGNvb2tpZVN0b3JhZ2U6IHtcclxuICAgICAgICB0b2tlbjogJ3VzZXJfbG9nZ2VkJyxcclxuICAgICAgICBlbWFpbENvbmZpcm1lZDogJ2VtYWlsX2NvbmZpcm1lZCdcclxuICAgIH0sXHJcbiAgICB1aVNlbGVjdG9yczoge1xyXG4gICAgICAgIGhlYWRlckxvZ2luQm94OiAnbmF2IC5sb2dpbi1ib3gnLFxyXG4gICAgICAgIGhlYWRlck5hdkxvZ2luQnRuOiAnbmF2IHVsIGxpIC5qc19sb2dpbicsXHJcbiAgICAgICAgaGVhZGVyUmVnQm94OiAnbmF2IC5yZWdpc3Rlci1ib3gnLFxyXG4gICAgICAgIGhlYWRlclJlZ0J0bjogJ25hdiB1bCBsaSAuanNfcmVnaXN0ZXInLFxyXG4gICAgICAgIGluc3RhZ3JhbToge1xyXG4gICAgICAgICAgICBhZGRBY2NvdW50QnRuU2VsZWN0b3I6ICcjanNfc2hvdy1sb2dpbi1ib3gnLFxyXG4gICAgICAgICAgICBhZGRBY2NvdW50QnRuSWQ6ICdqc19zaG93LWxvZ2luLWJveCdcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgICAgVVNFUl9MT0dHRUQ6ICd1c2VyX2xvZ2dlZCcsXHJcbiAgICAgICAgVVNFUl9MT0dPVVQ6ICd1c2VyX2xvZ291dCcsXHJcbiAgICAgICAgVVNFUl9FTUFJTF9DT05GSVJNRUQ6ICd1c2VyX2VtYWlsX2NvbmZpcm1lZCcsXHJcbiAgICAgICAgU1RPUF9GSVhFRF9TUElOTkVSOiAnc3RvcF9maXhlZF9zcGlubmVyJyxcclxuICAgICAgICBtZXNzYWdlczoge1xyXG4gICAgICAgICAgICBSRUNJRVZFX05FV19NRVNTQUdFOiAncmVjZWl2ZV9uZXdfbWVzc2FnZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGluc3RhZ3JhbUFjY291bnM6IHtcclxuICAgICAgICAgICAgSU5TVEFHUkFNX0FDQ09VTlNfUkVOREVSRUQ6ICdpbnN0YWdyYW1fYWNjb3Vuc19yZW5kZXJlZCdcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZ2V0UGF0aChuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsLmJhc2UgKyB0aGlzLnVybFtuYW1lXTtcclxuICAgIH1cclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMuanMiLCJcclxuY29uc3QgQ29va2llU3J2ID0ge1xyXG4gICAgZ2V0OiBuYW1lID0+IHtcclxuICAgICAgICBjb25zdCBjID0gZG9jdW1lbnQuY29va2llLm1hdGNoKGAoPzooPzpefC4qOyAqKSR7bmFtZX0gKj0gKihbXjtdKikuKiQpfF4uKiRgKVsxXTtcclxuICAgICAgICBpZiAoYykge1xyXG4gICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGMpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXQ6IChuYW1lLCB2YWx1ZSwgb3B0cyA9IHtwYXRoOiAnLycsIGRheXM6IDM2NX0pID0+IHtcclxuICAgICAgICBpZiAob3B0cy5kYXlzKSB7XHJcbiAgICAgICAgICAgIG9wdHNbJ21heC1hZ2UnXSA9IG9wdHMuZGF5cyAqIDYwICogNjAgKiAyNDtcclxuICAgICAgICAgICAgZGVsZXRlIG9wdHMuZGF5cztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXHJcbiAgICAgICAgb3B0cyA9IE9iamVjdC5lbnRyaWVzKG9wdHMpLnJlZHVjZSgoc3RyLCBbaywgdl0pID0+IGAke3N0cn07ICR7a309JHt2fWAsICcnKTtcclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBgJHtuYW1lfT0ke2VuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkgKyBvcHRzfWA7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlOiAobmFtZSwgb3B0cykgPT4gQ29va2llU3J2LnNldChuYW1lLCAnJywgeydtYXgtYWdlJzogLTEsIHBhdGg6ICcvJywgZGF5czogMCwgLi4ub3B0c30pXHJcbiAgICAvLyBwYXRoICYgZG9tYWluIG11c3QgbWF0Y2ggY29va2llIGJlaW5nIGRlbGV0ZWRcclxufTtcclxuXHJcbi8qXHJcbmNsYXNzIENvb2tpZVN0b3JhZ2Uge1xyXG4gICAgcmVhZChrZXkpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9ICQuY29va2llKGtleSk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyBudWxsIDogdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q29va2llKG5hbWUsIHZhbHVlLCBkYXlzKSB7XHJcbiAgICAgICAgbGV0IGV4cGlyZXMgPSAnJztcclxuICAgICAgICBpZiAoZGF5cykge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKGRheXMgKiAyNCAqIDYwICogNjAgKiAxMDAwKSk7XHJcbiAgICAgICAgICAgIGV4cGlyZXMgPSBgOyBleHBpcmVzPSR7ZGF0ZS50b1VUQ1N0cmluZygpfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGAke25hbWV9ID0keyh2YWx1ZSB8fCAnJykgKyBleHBpcmVzfTsgcGF0aD0vYDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb29raWUobmFtZSkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gYDsgJHtkb2N1bWVudC5jb29raWV9YDtcclxuICAgICAgICBjb25zdCBwYXJ0cyA9IHZhbHVlLnNwbGl0KGA7ICR7bmFtZX09YCk7XHJcbiAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCA9PSAyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJ0cy5wb3AoKS5zcGxpdCgnOycpLnNoaWZ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb29raWVTcnY7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tb24vanMtc2VydmljZXMvY29va2llLmpzIiwiLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IHtDT05TVH0gZnJvbSAnLi9jb25zdHMnO1xyXG5pbXBvcnQgTmV0d29yayBmcm9tICcuL25ldHdvcmsnO1xyXG5pbXBvcnQgQ29va2llU3RvcmFnZSBmcm9tICcuL2Nvb2tpZSc7XHJcblxyXG5jbGFzcyBVc2VyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm5ldHdvcmsgPSBuZXcgTmV0d29yaygpO1xyXG4gICAgICAgIHRoaXMuY29va2llU3RvcmFnZSA9IENvb2tpZVN0b3JhZ2U7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5nUG9zdCA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlzTG9nZ2VkSW4oKSB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5nZXRUb2tlbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRW1haWxDb25maXJtZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmNvb2tpZVN0b3JhZ2UuZ2V0KENPTlNULmNvb2tpZVN0b3JhZ2UuZW1haWxDb25maXJtZWQpID09PSAnY29uZmlybWVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VG9rZW4oKSB7XHJcbiAgICAgICAgY29uc3QgY29va2llVG9rZW4gPSB0aGlzLmNvb2tpZVN0b3JhZ2UuZ2V0KENPTlNULmNvb2tpZVN0b3JhZ2UudG9rZW4pO1xyXG4gICAgICAgIHJldHVybiBjb29raWVUb2tlbjtcclxuICAgIH1cclxuXHJcbiAgICBsb2dpbihmb3JtRGF0YSwgY2JFcnJvcikge1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSB7Li4udGhpcy5zZXR0aW5nUG9zdCwgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpfTtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KENPTlNULmdldFBhdGgoJ2xvZ2luJyksIHNldHRpbmcsIGNiRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEluc3RhZ3JhbUFjY291bnQoZm9ybURhdGEsIGNiRXJyb3IpIHtcclxuICAgICAgICBjb25zdCBzZXR0aW5nID0ge1xyXG4gICAgICAgICAgICAuLi50aGlzLnNldHRpbmdQb3N0LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QuaGVhZGVycyxcclxuICAgICAgICAgICAgICAgIHRva2VuOiB0aGlzLmdldFRva2VuKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1fYWRkQWNjb3VudCcpLCBzZXR0aW5nLCBjYkVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbnN0YWdyYW1BY2NvdW50KCkge1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSB7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QsXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QuaGVhZGVycyxcclxuICAgICAgICAgICAgICAgIHRva2VuOiB0aGlzLmdldFRva2VuKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1fYWRkQWNjb3VudCcpLCBzZXR0aW5nKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25maXJtKHRva2VuKSB7XHJcbiAgICAgICAgLy8gY29uc3QgY29uZmlybVVybCA9IENPTlNULmdldFBhdGgoJ2NvbmZpcm1hdGlvbicpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QoYCR7Q09OU1QuZ2V0UGF0aCgnY29uZmlybWF0aW9uJykgKyB0b2tlbn1gKTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3Rlcihmb3JtRGF0YSkge1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSB7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChDT05TVC5nZXRQYXRoKCdyZWdpc3RyYXRpb24nKSwgc2V0dGluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWV0YWRhdGEodG9rZW4sIGNiRXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KGAke0NPTlNULmdldFBhdGgoJ2luc3RhZ3JhbUFjY291bnRfZ2V0TWV0YURhdGEnKX1gLCB7aGVhZGVyczoge3Rva2VufX0sIGNiRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNlY3VyaXR5S2V5KHVzZXJuYW1lLCBjaGVja3BvaW50VHlwZSkge1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSB7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsndHlwZSc6IGNoZWNrcG9pbnRUeXBlfSksIC8vIHRvZG86IHRtcCBzZXQsIGl0IHNob3VsZCBiZSAndHlwZSdcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdC5oZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgJ3Rva2VuJzogdGhpcy5nZXRUb2tlbigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QoYCR7Q09OU1QuZ2V0UGF0aCgnaW5zdGFncmFtQWNjb3VudF9jaGVja3BvaW50Jyl9JHt1c2VybmFtZX1gLCBzZXR0aW5nKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25maXJtU2VjdXJpdHlLZXkoa2V5LCB1c2VybmFtZSkge1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsnc2VjdXJpdHlfY29kZSc6IGtleX0pLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnNldHRpbmdQb3N0LmhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICAndG9rZW4nOiAnM2UzMjFlNjAwMjk3MTFlOTkyNjRhMDQ4MWM4ZTE3ZDQnIC8vIHRvZG86IHRoaXMuZ2V0VG9rZW4oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KGAke0NPTlNULmdldFBhdGgoJ2luc3RhZ3JhbUFjY291bnRfY29uZmlybUtleScpfSR7dXNlcm5hbWV9YCwgc2V0dGluZyk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5sZXQgdXNlckluc3RhbmNlID0gbnVsbDtcclxuXHJcbmlmICghdXNlckluc3RhbmNlKSB7XHJcbiAgICB1c2VySW5zdGFuY2UgPSBuZXcgVXNlcigpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VySW5zdGFuY2U7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tb24vanMtc2VydmljZXMvdXNlci5qcyIsIi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbi8vIGltcG9ydCB7Q09OU1R9IGZyb20gJy4vY29uc3RzJztcclxuXHJcbmZ1bmN0aW9uIHZpZXdVdGlscygpIHtcclxuICAgIGZ1bmN0aW9uIHNob3dJbmZvTWVzc2FnZShzZWxlY3RvciwgbWVzc2FnZTEsIG1lc3NhZ2UyKSB7XHJcbiAgICAgICAgJChzZWxlY3RvcikuZW1wdHkoKVxyXG4gICAgICAgICAgICAuYXBwZW5kKGAkeyhtZXNzYWdlMSkgPyBgPHA+c3RhdHVzOiAke21lc3NhZ2UxfTwvcD5gIDogJyd9YClcclxuICAgICAgICAgICAgLmFwcGVuZChgPHA+JHttZXNzYWdlMn0gPC9wPmApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZpbGxMaXN0KCRsaXN0LCBkYXRhQXJyYXkpIHtcclxuICAgICAgICBjb25zdCBpdGVtcyA9IGRhdGFBcnJheTtcclxuICAgICAgICBjb25zdCBjTGlzdCA9ICRsaXN0O1xyXG4gICAgICAgIGNMaXN0LmVtcHR5KCk7XHJcbiAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBsaSA9ICQoJzxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbVwiPjwvbGk+JylcclxuICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhjTGlzdCk7XHJcbiAgICAgICAgICAgICQoJzxhLz4nKS5hZGRDbGFzcygndWktYWxsJylcclxuICAgICAgICAgICAgICAgIC50ZXh0KGl0ZW0udXNlcm5hbWUpXHJcbiAgICAgICAgICAgICAgICAuYXBwZW5kVG8obGkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzRW1haWwoZW1haWwpIHtcclxuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xyXG4gICAgICAgIGNvbnN0IHJlZ2V4ID0gL14oW2EtekEtWjAtOV8uKy1dKStcXEAoKFthLXpBLVowLTktXSkrXFwuKSsoW2EtekEtWjAtOV17Miw0fSkrJC87XHJcbiAgICAgICAgcmV0dXJuIHJlZ2V4LnRlc3QoZW1haWwpO1xyXG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgKi9cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNob3dJbmZvTWVzc2FnZSxcclxuICAgICAgICBmaWxsTGlzdCxcclxuICAgICAgICBpc0VtYWlsXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB2aWV3VXRpbHMoKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy92aWV3LmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTAsMjAxMSwyMDEyLDIwMTMsMjAxNCBNb3JnYW4gUm9kZXJpY2sgaHR0cDovL3JvZGVyaWNrLmRrXG4gKiBMaWNlbnNlOiBNSVQgLSBodHRwOi8vbXJnbnJkcmNrLm1pdC1saWNlbnNlLm9yZ1xuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tcm9kZXJpY2svUHViU3ViSlNcbiAqL1xuXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3Rvcnkpe1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBQdWJTdWIgPSB7fTtcbiAgICByb290LlB1YlN1YiA9IFB1YlN1YjtcblxuICAgIHZhciBkZWZpbmUgPSByb290LmRlZmluZTtcblxuICAgIGZhY3RvcnkoUHViU3ViKTtcblxuICAgIC8vIEFNRCBzdXBwb3J0XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCl7XG4gICAgICAgIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIFB1YlN1YjsgfSk7XG5cbiAgICAgICAgLy8gQ29tbW9uSlMgYW5kIE5vZGUuanMgbW9kdWxlIHN1cHBvcnRcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jyl7XG4gICAgICAgIGlmIChtb2R1bGUgIT09IHVuZGVmaW5lZCAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICAgICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gUHViU3ViOyAvLyBOb2RlLmpzIHNwZWNpZmljIGBtb2R1bGUuZXhwb3J0c2BcbiAgICAgICAgfVxuICAgICAgICBleHBvcnRzLlB1YlN1YiA9IFB1YlN1YjsgLy8gQ29tbW9uSlMgbW9kdWxlIDEuMS4xIHNwZWNcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gUHViU3ViOyAvLyBDb21tb25KU1xuICAgIH1cblxufSgoIHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHdpbmRvdyApIHx8IHRoaXMsIGZ1bmN0aW9uIChQdWJTdWIpe1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBtZXNzYWdlcyA9IHt9LFxuICAgICAgICBsYXN0VWlkID0gLTE7XG5cbiAgICBmdW5jdGlvbiBoYXNLZXlzKG9iail7XG4gICAgICAgIHZhciBrZXk7XG5cbiAgICAgICAgZm9yIChrZXkgaW4gb2JqKXtcbiAgICAgICAgICAgIGlmICggb2JqLmhhc093blByb3BlcnR5KGtleSkgKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgdGhyb3dzIHRoZSBwYXNzZWQgZXhjZXB0aW9uLCBmb3IgdXNlIGFzIGFyZ3VtZW50IGZvciBzZXRUaW1lb3V0XG4gICAgICogQGFsaWFzIHRocm93RXhjZXB0aW9uXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHsgT2JqZWN0IH0gZXggQW4gRXJyb3Igb2JqZWN0XG4gICAgICovXG4gICAgZnVuY3Rpb24gdGhyb3dFeGNlcHRpb24oIGV4ICl7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiByZVRocm93RXhjZXB0aW9uKCl7XG4gICAgICAgICAgICB0aHJvdyBleDtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWxsU3Vic2NyaWJlcldpdGhEZWxheWVkRXhjZXB0aW9ucyggc3Vic2NyaWJlciwgbWVzc2FnZSwgZGF0YSApe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc3Vic2NyaWJlciggbWVzc2FnZSwgZGF0YSApO1xuICAgICAgICB9IGNhdGNoKCBleCApe1xuICAgICAgICAgICAgc2V0VGltZW91dCggdGhyb3dFeGNlcHRpb24oIGV4ICksIDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsbFN1YnNjcmliZXJXaXRoSW1tZWRpYXRlRXhjZXB0aW9ucyggc3Vic2NyaWJlciwgbWVzc2FnZSwgZGF0YSApe1xuICAgICAgICBzdWJzY3JpYmVyKCBtZXNzYWdlLCBkYXRhICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsaXZlck1lc3NhZ2UoIG9yaWdpbmFsTWVzc2FnZSwgbWF0Y2hlZE1lc3NhZ2UsIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKXtcbiAgICAgICAgdmFyIHN1YnNjcmliZXJzID0gbWVzc2FnZXNbbWF0Y2hlZE1lc3NhZ2VdLFxuICAgICAgICAgICAgY2FsbFN1YnNjcmliZXIgPSBpbW1lZGlhdGVFeGNlcHRpb25zID8gY2FsbFN1YnNjcmliZXJXaXRoSW1tZWRpYXRlRXhjZXB0aW9ucyA6IGNhbGxTdWJzY3JpYmVyV2l0aERlbGF5ZWRFeGNlcHRpb25zLFxuICAgICAgICAgICAgcztcblxuICAgICAgICBpZiAoICFtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eSggbWF0Y2hlZE1lc3NhZ2UgKSApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAocyBpbiBzdWJzY3JpYmVycyl7XG4gICAgICAgICAgICBpZiAoIHN1YnNjcmliZXJzLmhhc093blByb3BlcnR5KHMpKXtcbiAgICAgICAgICAgICAgICBjYWxsU3Vic2NyaWJlciggc3Vic2NyaWJlcnNbc10sIG9yaWdpbmFsTWVzc2FnZSwgZGF0YSApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRGVsaXZlcnlGdW5jdGlvbiggbWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApe1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gZGVsaXZlck5hbWVzcGFjZWQoKXtcbiAgICAgICAgICAgIHZhciB0b3BpYyA9IFN0cmluZyggbWVzc2FnZSApLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoICcuJyApO1xuXG4gICAgICAgICAgICAvLyBkZWxpdmVyIHRoZSBtZXNzYWdlIGFzIGl0IGlzIG5vd1xuICAgICAgICAgICAgZGVsaXZlck1lc3NhZ2UobWVzc2FnZSwgbWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyk7XG5cbiAgICAgICAgICAgIC8vIHRyaW0gdGhlIGhpZXJhcmNoeSBhbmQgZGVsaXZlciBtZXNzYWdlIHRvIGVhY2ggbGV2ZWxcbiAgICAgICAgICAgIHdoaWxlKCBwb3NpdGlvbiAhPT0gLTEgKXtcbiAgICAgICAgICAgICAgICB0b3BpYyA9IHRvcGljLnN1YnN0ciggMCwgcG9zaXRpb24gKTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHRvcGljLmxhc3RJbmRleE9mKCcuJyk7XG4gICAgICAgICAgICAgICAgZGVsaXZlck1lc3NhZ2UoIG1lc3NhZ2UsIHRvcGljLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWVzc2FnZUhhc1N1YnNjcmliZXJzKCBtZXNzYWdlICl7XG4gICAgICAgIHZhciB0b3BpYyA9IFN0cmluZyggbWVzc2FnZSApLFxuICAgICAgICAgICAgZm91bmQgPSBCb29sZWFuKG1lc3NhZ2VzLmhhc093blByb3BlcnR5KCB0b3BpYyApICYmIGhhc0tleXMobWVzc2FnZXNbdG9waWNdKSksXG4gICAgICAgICAgICBwb3NpdGlvbiA9IHRvcGljLmxhc3RJbmRleE9mKCAnLicgKTtcblxuICAgICAgICB3aGlsZSAoICFmb3VuZCAmJiBwb3NpdGlvbiAhPT0gLTEgKXtcbiAgICAgICAgICAgIHRvcGljID0gdG9waWMuc3Vic3RyKCAwLCBwb3NpdGlvbiApO1xuICAgICAgICAgICAgcG9zaXRpb24gPSB0b3BpYy5sYXN0SW5kZXhPZiggJy4nICk7XG4gICAgICAgICAgICBmb3VuZCA9IEJvb2xlYW4obWVzc2FnZXMuaGFzT3duUHJvcGVydHkoIHRvcGljICkgJiYgaGFzS2V5cyhtZXNzYWdlc1t0b3BpY10pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb3VuZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwdWJsaXNoKCBtZXNzYWdlLCBkYXRhLCBzeW5jLCBpbW1lZGlhdGVFeGNlcHRpb25zICl7XG4gICAgICAgIG1lc3NhZ2UgPSAodHlwZW9mIG1lc3NhZ2UgPT09ICdzeW1ib2wnKSA/IG1lc3NhZ2UudG9TdHJpbmcoKSA6IG1lc3NhZ2U7XG5cbiAgICAgICAgdmFyIGRlbGl2ZXIgPSBjcmVhdGVEZWxpdmVyeUZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICksXG4gICAgICAgICAgICBoYXNTdWJzY3JpYmVycyA9IG1lc3NhZ2VIYXNTdWJzY3JpYmVycyggbWVzc2FnZSApO1xuXG4gICAgICAgIGlmICggIWhhc1N1YnNjcmliZXJzICl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHN5bmMgPT09IHRydWUgKXtcbiAgICAgICAgICAgIGRlbGl2ZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoIGRlbGl2ZXIsIDAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQdWJsaXNoZXMgdGhlIG1lc3NhZ2UsIHBhc3NpbmcgdGhlIGRhdGEgdG8gaXQncyBzdWJzY3JpYmVyc1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBhbGlhcyBwdWJsaXNoXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBwdWJsaXNoXG4gICAgICogQHBhcmFtIHt9IGRhdGEgVGhlIGRhdGEgdG8gcGFzcyB0byBzdWJzY3JpYmVyc1xuICAgICAqIEByZXR1cm4geyBCb29sZWFuIH1cbiAgICAgKi9cbiAgICBQdWJTdWIucHVibGlzaCA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHJldHVybiBwdWJsaXNoKCBtZXNzYWdlLCBkYXRhLCBmYWxzZSwgUHViU3ViLmltbWVkaWF0ZUV4Y2VwdGlvbnMgKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUHVibGlzaGVzIHRoZSB0aGUgbWVzc2FnZSBzeW5jaHJvbm91c2x5LCBwYXNzaW5nIHRoZSBkYXRhIHRvIGl0J3Mgc3Vic2NyaWJlcnNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgcHVibGlzaFN5bmNcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHB1Ymxpc2hcbiAgICAgKiBAcGFyYW0ge30gZGF0YSBUaGUgZGF0YSB0byBwYXNzIHRvIHN1YnNjcmliZXJzXG4gICAgICogQHJldHVybiB7IEJvb2xlYW4gfVxuICAgICAqL1xuICAgIFB1YlN1Yi5wdWJsaXNoU3luYyA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHJldHVybiBwdWJsaXNoKCBtZXNzYWdlLCBkYXRhLCB0cnVlLCBQdWJTdWIuaW1tZWRpYXRlRXhjZXB0aW9ucyApO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmVzIHRoZSBwYXNzZWQgZnVuY3Rpb24gdG8gdGhlIHBhc3NlZCBtZXNzYWdlLiBFdmVyeSByZXR1cm5lZCB0b2tlbiBpcyB1bmlxdWUgYW5kIHNob3VsZCBiZSBzdG9yZWQgaWYgeW91IG5lZWQgdG8gdW5zdWJzY3JpYmVcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgc3Vic2NyaWJlXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBzdWJzY3JpYmUgdG9cbiAgICAgKiBAcGFyYW0geyBGdW5jdGlvbiB9IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBhIG5ldyBtZXNzYWdlIGlzIHB1Ymxpc2hlZFxuICAgICAqIEByZXR1cm4geyBTdHJpbmcgfVxuICAgICAqL1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUgPSBmdW5jdGlvbiggbWVzc2FnZSwgZnVuYyApe1xuICAgICAgICBpZiAoIHR5cGVvZiBmdW5jICE9PSAnZnVuY3Rpb24nKXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lc3NhZ2UgPSAodHlwZW9mIG1lc3NhZ2UgPT09ICdzeW1ib2wnKSA/IG1lc3NhZ2UudG9TdHJpbmcoKSA6IG1lc3NhZ2U7XG5cbiAgICAgICAgLy8gbWVzc2FnZSBpcyBub3QgcmVnaXN0ZXJlZCB5ZXRcbiAgICAgICAgaWYgKCAhbWVzc2FnZXMuaGFzT3duUHJvcGVydHkoIG1lc3NhZ2UgKSApe1xuICAgICAgICAgICAgbWVzc2FnZXNbbWVzc2FnZV0gPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZvcmNpbmcgdG9rZW4gYXMgU3RyaW5nLCB0byBhbGxvdyBmb3IgZnV0dXJlIGV4cGFuc2lvbnMgd2l0aG91dCBicmVha2luZyB1c2FnZVxuICAgICAgICAvLyBhbmQgYWxsb3cgZm9yIGVhc3kgdXNlIGFzIGtleSBuYW1lcyBmb3IgdGhlICdtZXNzYWdlcycgb2JqZWN0XG4gICAgICAgIHZhciB0b2tlbiA9ICd1aWRfJyArIFN0cmluZygrK2xhc3RVaWQpO1xuICAgICAgICBtZXNzYWdlc1ttZXNzYWdlXVt0b2tlbl0gPSBmdW5jO1xuICAgICAgICBcbiAgICAgICAgLy8gcmV0dXJuIHRva2VuIGZvciB1bnN1YnNjcmliaW5nXG4gICAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU3Vic2NyaWJlcyB0aGUgcGFzc2VkIGZ1bmN0aW9uIHRvIHRoZSBwYXNzZWQgbWVzc2FnZSBvbmNlXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQGFsaWFzIHN1YnNjcmliZU9uY2VcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHN1YnNjcmliZSB0b1xuICAgICAqIEBwYXJhbSB7IEZ1bmN0aW9uIH0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIGEgbmV3IG1lc3NhZ2UgaXMgcHVibGlzaGVkXG4gICAgICogQHJldHVybiB7IFB1YlN1YiB9XG4gICAgICovXG4gICAgUHViU3ViLnN1YnNjcmliZU9uY2UgPSBmdW5jdGlvbiggbWVzc2FnZSwgZnVuYyApe1xuICAgICAgICB2YXIgdG9rZW4gPSBQdWJTdWIuc3Vic2NyaWJlKCBtZXNzYWdlLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgLy8gYmVmb3JlIGZ1bmMgYXBwbHksIHVuc3Vic2NyaWJlIG1lc3NhZ2VcbiAgICAgICAgICAgIFB1YlN1Yi51bnN1YnNjcmliZSggdG9rZW4gKTtcbiAgICAgICAgICAgIGZ1bmMuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFB1YlN1YjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGFsbCBzdWJzY3JpcHRpb25zXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBhbGlhcyBjbGVhckFsbFN1YnNjcmlwdGlvbnNcbiAgICAgKi9cbiAgICBQdWJTdWIuY2xlYXJBbGxTdWJzY3JpcHRpb25zID0gZnVuY3Rpb24gY2xlYXJBbGxTdWJzY3JpcHRpb25zKCl7XG4gICAgICAgIG1lc3NhZ2VzID0ge307XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENsZWFyIHN1YnNjcmlwdGlvbnMgYnkgdGhlIHRvcGljXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBhbGlhcyBjbGVhckFsbFN1YnNjcmlwdGlvbnNcbiAgICAgKi9cbiAgICBQdWJTdWIuY2xlYXJTdWJzY3JpcHRpb25zID0gZnVuY3Rpb24gY2xlYXJTdWJzY3JpcHRpb25zKHRvcGljKXtcbiAgICAgICAgdmFyIG07XG4gICAgICAgIGZvciAobSBpbiBtZXNzYWdlcyl7XG4gICAgICAgICAgICBpZiAobWVzc2FnZXMuaGFzT3duUHJvcGVydHkobSkgJiYgbS5pbmRleE9mKHRvcGljKSA9PT0gMCl7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG1lc3NhZ2VzW21dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgc3Vic2NyaXB0aW9uc1xuICAgICAqXG4gICAgICogLSBXaGVuIHBhc3NlZCBhIHRva2VuLCByZW1vdmVzIGEgc3BlY2lmaWMgc3Vic2NyaXB0aW9uLlxuICAgICAqXG5cdCAqIC0gV2hlbiBwYXNzZWQgYSBmdW5jdGlvbiwgcmVtb3ZlcyBhbGwgc3Vic2NyaXB0aW9ucyBmb3IgdGhhdCBmdW5jdGlvblxuICAgICAqXG5cdCAqIC0gV2hlbiBwYXNzZWQgYSB0b3BpYywgcmVtb3ZlcyBhbGwgc3Vic2NyaXB0aW9ucyBmb3IgdGhhdCB0b3BpYyAoaGllcmFyY2h5KVxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWxpYXMgc3Vic2NyaWJlT25jZVxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB8IEZ1bmN0aW9uIH0gdmFsdWUgQSB0b2tlbiwgZnVuY3Rpb24gb3IgdG9waWMgdG8gdW5zdWJzY3JpYmUgZnJvbVxuICAgICAqIEBleGFtcGxlIC8vIFVuc3Vic2NyaWJpbmcgd2l0aCBhIHRva2VuXG4gICAgICogdmFyIHRva2VuID0gUHViU3ViLnN1YnNjcmliZSgnbXl0b3BpYycsIG15RnVuYyk7XG4gICAgICogUHViU3ViLnVuc3Vic2NyaWJlKHRva2VuKTtcbiAgICAgKiBAZXhhbXBsZSAvLyBVbnN1YnNjcmliaW5nIHdpdGggYSBmdW5jdGlvblxuICAgICAqIFB1YlN1Yi51bnN1YnNjcmliZShteUZ1bmMpO1xuICAgICAqIEBleGFtcGxlIC8vIFVuc3Vic2NyaWJpbmcgZnJvbSBhIHRvcGljXG4gICAgICogUHViU3ViLnVuc3Vic2NyaWJlKCdteXRvcGljJyk7XG4gICAgICovXG4gICAgUHViU3ViLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICB2YXIgZGVzY2VuZGFudFRvcGljRXhpc3RzID0gZnVuY3Rpb24odG9waWMpIHtcbiAgICAgICAgICAgICAgICB2YXIgbTtcbiAgICAgICAgICAgICAgICBmb3IgKCBtIGluIG1lc3NhZ2VzICl7XG4gICAgICAgICAgICAgICAgICAgIGlmICggbWVzc2FnZXMuaGFzT3duUHJvcGVydHkobSkgJiYgbS5pbmRleE9mKHRvcGljKSA9PT0gMCApe1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYSBkZXNjZW5kYW50IG9mIHRoZSB0b3BpYyBleGlzdHM6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc1RvcGljICAgID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAoIG1lc3NhZ2VzLmhhc093blByb3BlcnR5KHZhbHVlKSB8fCBkZXNjZW5kYW50VG9waWNFeGlzdHModmFsdWUpICksXG4gICAgICAgICAgICBpc1Rva2VuICAgID0gIWlzVG9waWMgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyxcbiAgICAgICAgICAgIGlzRnVuY3Rpb24gPSB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicsXG4gICAgICAgICAgICByZXN1bHQgPSBmYWxzZSxcbiAgICAgICAgICAgIG0sIG1lc3NhZ2UsIHQ7XG5cbiAgICAgICAgaWYgKGlzVG9waWMpe1xuICAgICAgICAgICAgUHViU3ViLmNsZWFyU3Vic2NyaXB0aW9ucyh2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKCBtIGluIG1lc3NhZ2VzICl7XG4gICAgICAgICAgICBpZiAoIG1lc3NhZ2VzLmhhc093blByb3BlcnR5KCBtICkgKXtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZXNbbV07XG5cbiAgICAgICAgICAgICAgICBpZiAoIGlzVG9rZW4gJiYgbWVzc2FnZVt2YWx1ZV0gKXtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG1lc3NhZ2VbdmFsdWVdO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdG9rZW5zIGFyZSB1bmlxdWUsIHNvIHdlIGNhbiBqdXN0IHN0b3AgaGVyZVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNGdW5jdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKCB0IGluIG1lc3NhZ2UgKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmhhc093blByb3BlcnR5KHQpICYmIG1lc3NhZ2VbdF0gPT09IHZhbHVlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgbWVzc2FnZVt0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xufSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3B1YnN1Yi1qcy9zcmMvcHVic3ViLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB2aWV3VXRpbHMgZnJvbSAnLi92aWV3JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ldHdvcmsge1xyXG5cclxuICAgIGNiRXJyb3JEZWZhdWx0KHJlc3VsdCkge1xyXG4gICAgICAgIGNvbnN0ICRlbCA9ICgkKCcjZGVzY3JpcHRpb24nKS5sZW5ndGgpID8gJCgnI2Rlc2NyaXB0aW9uJykgOiAkKCcuZXJyb3ItbXNnJyk7XHJcbiAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSgkZWwsXHJcbiAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMuc3RhdGUsXHJcbiAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMubWVzc2FnZSB8fCAnZXJyb3InKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja1N0YXR1cyhyZXNwb25zZSkge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgJiYgcmVzcG9uc2Uuc3RhdHVzID49IDIwMCAmJiByZXNwb25zZS5zdGF0dXMgPCAzMDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG4gICAgICAgICAgICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2VuZFJlcXVlc3QoVVJMLCBPUFRTLCBjYkVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKFVSTCwgT1BUUylcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gUHJvbWlzZS5hbGwoW3Jlc3BvbnNlLCByZXNwb25zZS5qc29uKCldKSlcclxuICAgICAgICAgICAgLnRoZW4oKFtyZXNwb25zZSwganNvbl0pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNiRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYkVycm9yRGVmYXVsdChqc29uKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYkVycm9yKGpzb24pOyAvLyB1cGRhdGUgdmlld1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrU3RhdHVzKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoanNvbi5zdGF0dXMubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ganNvbjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tb24vanMtc2VydmljZXMvbmV0d29yay5qcyIsImltcG9ydCAnLi9iYXNlLnNjc3MnO1xyXG4vLyBpbXBvcnQgJ2Jvb3RzdHJhcCc7XHJcbmltcG9ydCB7Q09OU1R9IGZyb20gJy4vY29tbW9uL2pzLXNlcnZpY2VzL2NvbnN0cyc7XHJcbmltcG9ydCBQdWJTdWIgZnJvbSAncHVic3ViLWpzJztcclxuaW1wb3J0IFJlZ2lzdGVyRm9ybSBmcm9tICcuL2Jsb2Nrcy9yZWdpc3Rlci1mb3JtL3JlZ2lzdGVyLWZvcm0nO1xyXG5pbXBvcnQge0xvZ2luRm9ybX0gZnJvbSAnLi9ibG9ja3MvbG9naW4tZm9ybS9sb2dpbi1mb3JtJztcclxuaW1wb3J0IHtMb2dpblBhZ2V9IGZyb20gJy4vcGFnZXMvX2F1dGgvbG9naW4tcGFnZSc7XHJcbmltcG9ydCB7Y29uZmlybWF0aW9uV2l0aFJlZGlyZWN0fSBmcm9tICcuL2Jsb2Nrcy9jb25maXJtLXJlZy9jb25maXJtLXJlZyc7XHJcbmltcG9ydCAqIGFzIGhlYWRlciBmcm9tICcuL2Jsb2Nrcy9oZWFkZXIvaGVhZGVyJztcclxuaW1wb3J0ICogYXMgYnVyZ2VyTWVudSBmcm9tICcuL2Jsb2Nrcy9oZWFkZXIvYnVyZ2VyLW1lbnUvYnVyZ2VyLW1lbnUnO1xyXG5pbXBvcnQgKiBhcyBpbnN0YWdyYW1BY2NvdW50cyBmcm9tICcuL2Jsb2Nrcy9pbnN0YWdyYW0tYWNjb3VudHMtbGlzdC9pbnN0YWdyYW0tYWNjb3VudHMtbGlzdCc7XHJcbmltcG9ydCAqIGFzIG1lc3NhZ2VzIGZyb20gJy4vYmxvY2tzL21lc3NhZ2VzL21lc3NhZ2VzJztcclxuaW1wb3J0ICogYXMgZm9sbG93IGZyb20gJy4vYmxvY2tzL2ZvbGxvdy9mb2xsb3cnO1xyXG4vLyBpbXBvcnQgKiBhcyBmb2xsb3dTdGVwcyBmcm9tICcuL2Jsb2Nrcy9mb2xsb3cvZm9sbG93LXVzaW5nLXN0ZXBzJztcclxuXHJcbmNvbnN0IHNlbGVjdG9yQ3NzTG9naW5Gb3JtID0ge1xyXG4gICAgX2xvZ2luQm94OiBDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJMb2dpbkJveCxcclxuICAgIF9mb3JtSWQ6ICcjanNfbG9naW4tZm9ybScsXHJcbiAgICBfYnV0dG9uU3VibWl0SWQ6ICcjanNfbG9naW5fYnRuJyxcclxuICAgIF9zaG93TG9naW5Cb3hCdG5JZDogQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyTmF2TG9naW5CdG5cclxufTtcclxuXHJcbmNvbnN0IHNlbGVjdG9yQ3NzTG9naW5Gb3JtSW5zdGFncmFtID0ge1xyXG4gICAgX2xvZ2luQm94OiAnbWFpbiAubG9naW4tYm94JyxcclxuICAgIF9mb3JtSWQ6ICcjanNfaW5zdGFncmFtLWFkZC1hY2NvdW50JyxcclxuICAgIF9idXR0b25TdWJtaXRJZDogJyNqc19pbnN0YWdyYW0tYWRkLWFjY291bnQtLWJ0bicsXHJcbiAgICBfc2hvd0xvZ2luQm94QnRuSWQ6ICcjanNfc2hvdy1sb2dpbi1ib3gnLFxyXG4gICAgaXNMb2dpbkluc3RhZ3JhbTogdHJ1ZVxyXG59O1xyXG5cclxuZnVuY3Rpb24gc2V0UHViU3ViKFB1YlN1Yikge1xyXG4gICAgd2luZG93LlB1YlN1YiA9IFB1YlN1YjtcclxufVxyXG5cclxuY29uc3QgaW5pdCA9ICgpID0+IHtcclxuICAgIHNldFB1YlN1YihQdWJTdWIpO1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2luaXQganMgaGVyZScsIENPTlNULnVzZXIpO1xyXG4gICAgKG5ldyBSZWdpc3RlckZvcm0oKSkuaW5pdCgpO1xyXG4gICAgTG9naW5Gb3JtKHNlbGVjdG9yQ3NzTG9naW5Gb3JtKS5pbml0KCk7XHJcbiAgICBMb2dpbkZvcm0oc2VsZWN0b3JDc3NMb2dpbkZvcm1JbnN0YWdyYW0pLmluaXQoKTsgLy8gaW5pdCBpbnN0YWdyYW0gbG9naW4gZm9ybSohL1xyXG4gICAgTG9naW5QYWdlKHtcclxuICAgICAgICBfbG9naW5Cb3g6ICcuYXV0aC5sb2dpbiAuY2FyZC1zaWduaW4nLFxyXG4gICAgICAgIF9mb3JtSWQ6ICcuZm9ybS1zaWduaW4nLFxyXG4gICAgICAgIF9idXR0b25TdWJtaXRJZDogJy5mb3JtLXNpZ25pbiBbdHlwZT1cInN1Ym1pdFwiXSdcclxuICAgIH0pLmluaXQoKTtcclxuXHJcbiAgICBjb25maXJtYXRpb25XaXRoUmVkaXJlY3QoKS5pbml0KCk7XHJcbiAgICBoZWFkZXIuaW5pdEhlYWRlcigpO1xyXG4gICAgYnVyZ2VyTWVudS5pbml0KCk7XHJcbiAgICBmb2xsb3cuaW5pdCgpO1xyXG4gICAgaW5zdGFncmFtQWNjb3VudHMuaW5pdCgpO1xyXG4gICAgbWVzc2FnZXMuaW5pdCgpO1xyXG5cclxuICAgIC8vIGZvbGxvd1N0ZXBzLmluaXQoKTtcclxufTtcclxuXHJcbigoKSA9PiBpbml0KCkpKCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ib290c3RyYXAuanMiLCIvKiBlc2xpbnQtZGlzYWJsZSBzb3J0LXZhcnMgKi9cclxuLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3VzZXInO1xyXG5pbXBvcnQge0NPTlNUfSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29uc3RzJztcclxuaW1wb3J0IGNvb2tpZVN0b3JhZ2UgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2Nvb2tpZSc7XHJcblxyXG5jb25zdCBwYXJzZVF1ZXJ5U3RyaW5nID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgY29uc3Qgc3RyID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcclxuICAgIGNvbnN0IG9ialVSTCA9IHt9O1xyXG5cclxuICAgIHN0ci5yZXBsYWNlKFxyXG4gICAgICBuZXcgUmVnRXhwKCcoW14/PSZdKykoPShbXiZdKikpPycsICdnJyksXHJcbiAgICAgICAgZnVuY3Rpb24oJDAsICQxLCAkMikge1xyXG4gICAgICAgICAgICBvYmpVUkxbJDFdID0gJDI7XHJcbiAgICAgICAgfVxyXG4gICk7XHJcbiAgICByZXR1cm4gb2JqVVJMO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpcm1hdGlvbldpdGhSZWRpcmVjdCgpIHtcclxuICAgIGNvbnN0IHVzZXIgPSBVc2VyO1xyXG4gICAgY29uc3QgcGFyYW1zID0gcGFyc2VRdWVyeVN0cmluZygpO1xyXG4gICAgLy8gRXhhbXBsZSBob3cgdG8gdXNlIGl0OlxyXG5cclxuICAgIGNvbnN0IHNlbmRDb25maXJtID0gZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICAgICAgdXNlci5jb25maXJtKHRva2VuKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgJiYgcmVzdWx0LnN0YXR1cy5zdGF0ZSA9PT0gJ29rJykge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHNhdmUgdGhlIGl0ZW1cclxuICAgICAgICAgICAgICAgIGNvb2tpZVN0b3JhZ2Uuc2V0KENPTlNULmNvb2tpZVN0b3JhZ2UuZW1haWxDb25maXJtZWQsICdjb25maXJtZWQnKTtcclxuICAgICAgICAgICAgICAgIGNvb2tpZVN0b3JhZ2Uuc2V0KENPTlNULmNvb2tpZVN0b3JhZ2UudG9rZW4sIHJlc3VsdC5kYXRhLnRva2VuKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24gPSBjb25maXJtLXJlZ2lzdHJhdGlvbi5odG1sP3Rva2VuPSdmcm9tIHNlcnZlcic7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gcmV0cmlldmUgdGhlIG9iamVjdCBpbiBhIHN0cmluZyBmb3JtXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXN0b21lcnNEYXRhU3RyaW5nID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnY3VzdG9tZXJzRGF0YScpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VzdG9tZXJzRGF0YVN0cmluZyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVxdWVzdCBzdWNjZWVkZWQgd2l0aCBKU09OIHJlc3BvbnNlJywgcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICQoJy5jb25maXJtLXJlZ2lzdHJhdGlvbicpLmFwcGVuZChgPHA+Y29uZmlybWF0aW9uIHN0YXR1czogJHtyZXN1bHQuc3RhdHVzLnN0YXRlfTwvcD5gKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICcuL3Byb2ZpbGUuaHRtbCc7XHJcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZWRpcmVjdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkb3Qtbm90YXRpb25cclxuICAgICAgICBjb25zdCB0b2tlbiA9IHBhcmFtc1sndG9rZW4nXTtcclxuXHJcbiAgICAgICAgaWYgKCFsb2NhdGlvbi5wYXRobmFtZS5pbmRleE9mKCdjb25maXJtLXJlZ2lzdHJhdGlvbicpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZW5kIHJlcSB0byAnLCB0b2tlbik7XHJcbiAgICAgICAgICAgIHNlbmRDb25maXJtKHRva2VuKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAgICAgcmVkaXJlY3QoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGluaXRcclxuICAgIH07XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9jb25maXJtLXJlZy9jb25maXJtLXJlZy5qcyIsImltcG9ydCB7Q09OU1R9IGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMnO1xyXG5pbXBvcnQgVXNlclRhc2tNYW5hZ2VyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9hcGktdGFzay1tYW5hZ2VyJztcclxuaW1wb3J0ICdicnV0dXNpbi1qc29uLWZvcm1zJztcclxuXHJcbmNvbnN0IHN0YXRlID0ge1xyXG4gICAgdXNlcm5hbWU6ICcnLFxyXG4gICAgdXNlcl9kZWZhdWx0X2NvbmZpZzoge1xyXG4gICAgICAgIHRhc2tfbW9kZTogJ1NBRkUnXHJcbiAgICB9XHJcbn07XHJcblxyXG4vKlxyXG5mdW5jdGlvbiBmaWxsTGlzdE1ldGEoJGxpc3QsIGRhdGFBcnJheSkge1xyXG4gICAgY29uc3QgaXRlbXMgPSBkYXRhQXJyYXk7XHJcbiAgICAvLyBjb25zdCBkZWZhdWx0QXZhdGFyU3JjID0gJ2h0dHBzOi8vaS5pbWd1ci5jb20vak5OVDRMRS5wbmcnO1xyXG4gICAgJGxpc3QuZW1wdHkoKS5hZGRDbGFzcygnYm9yZGVyLWxpZ2h0LWNvbG9yJyk7XHJcbiAgICAkKCc8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gcHktMlwiPjxoMz5Vc2VyVGFza01hbmFnZXIgLT4gZ2V0TWV0YWRhdGE8L2gzPjwvbGk+JykuYXBwZW5kVG8oJGxpc3QpO1xyXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnN0IGluZm8gPSBpdGVtLmluZm87XHJcbiAgICAgICAgLy8gY29uc3QgY2hlY2twb2ludCA9IGl0ZW0uY2hlY2twb2ludCB8fCBpdGVtO1xyXG4gICAgICAgICQoYDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBweS0yXCIgZGF0YS11c2VybmFtZT1cIiR7aXRlbS50eXBlfVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWJvZHkgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB0YXNrLXR5cGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHsoaXRlbS50eXBlKSA/IGA8aDQgY2xhc3M9XCJtdC0wIG1iLTEgbmFtZVwiPiR7aXRlbS50eXBlfTwvaDQ+YCA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgdGFzay1zdWJ0eXBlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7KGl0ZW0uc3VidHlwZSkgPyBgPHAgY2xhc3M9XCJtdC0wIG1iLTEgbmFtZVwiPiR7aXRlbS5zdWJ0eXBlfTwvcD5gIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB0YXNrLXByb2dyZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7KGl0ZW0uc3RhdHVzKSA/IGA8cCBjbGFzcz1cIm10LTAgbWItMSBuYW1lXCI+0KHRgtCw0YLRg9GBIC0gJHtpdGVtLnN0YXR1cy5zdGF0ZX08L3A+YCA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgdGFzay1wcm9ncmVzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkeyhpdGVtLnByb2dyZXNzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBgPHAgY2xhc3M9XCJtdC0wIG1iLTEgbmFtZVwiPtCa0L7Qu9C40YfQtdGB0YLQstC+IC0gJHtpdGVtLnByb2dyZXNzLmNvdW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm10LTAgbWItMSBuYW1lXCI+0J/RgNC+0YbQtdC90YIgLSAke2l0ZW0ucHJvZ3Jlc3MucGVyY2VudH08L3A+YCA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+YCkuYXBwZW5kVG8oJGxpc3QpO1xyXG4gICAgfSk7XHJcbn0qL1xyXG5cclxuZnVuY3Rpb24gZmlsbExpc3RUeXBlcygkd3JhcHBlciwgZGF0YSkge1xyXG4gICAgY29uc3Qgc3RydWN0dXJlT2JqID0gZGF0YVsnc3RydWN0dXJlJ107XHJcblxyXG4gICAgJHdyYXBwZXIuZW1wdHkoKS5hZGRDbGFzcygnYm9yZGVyLWxpZ2h0LWNvbG9yJyk7XHJcbiAgICAkKCc8ZGl2IGNsYXNzPVwiXCI+0KLQuNC/INC30LDQtNCw0L3QuNGPPC9kaXY+PHNlbGVjdCBuYW1lPVwidGFzay10eXBlXCIgaWQ9XCJ0YXNrLXR5cGVzXCI+PC9zZWxlY3Q+JykuYXBwZW5kVG8oJHdyYXBwZXIpO1xyXG4gICAgZm9yIChjb25zdCB0eXBlIGluIHN0cnVjdHVyZU9iaikge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzdHJ1Y3R1cmU6ICcgKyBpdGVtKTtcclxuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHN0cnVjdHVyZU9iaiwgdHlwZSkpIHtcclxuICAgICAgICAgICAgJChgPG9wdGlvbiBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBweS0yXCIgJHsodHlwZSAhPT0gJ0ZPTExPV0lORycpID8gJ2Rpc2FibGVkPVwiZGlzYWJsZWRcIicgOiAnJ31cclxuICAgICAgICAgICAgICAgIHZhbHVlID0gXCIke0pTT04uc3RyaW5naWZ5KHt0eXBlLCBzdWJ0eXBlOiBzdHJ1Y3R1cmVPYmpbdHlwZV19KX1cIj5cclxuICAgICAgICAgICAgICAgICR7dHlwZX1cclxuICAgICAgICAgICAgPC9vcHRpb24+YCkuYXBwZW5kVG8oJCgnI3Rhc2stdHlwZXMnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUYXNrc0RhdGEoKSB7XHJcbiAgICAvLyBVc2VyVGFza01hbmFnZXIuZ2V0TWV0YWRhdGEoKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgLy8gICAgIGlmIChyZXN1bHQuc3RhdHVzLnN0YXRlID09PSAnb2snKSB7XHJcbiAgICAvLyAgICAgICAgIGZpbGxMaXN0TWV0YSgkKCcuanNfdGFzay1tZXRhLWxpc3QnKSwgcmVzdWx0LmRhdGEubWV0YSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgLy8gVXNlclRhc2tNYW5hZ2VyLnBvc3RTdGFydEZvbGxvd2luZ0xpc3QoKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZygncG9zdFN0YXJ0Rm9sbG93aW5nTGlzdCcsIHJlc3VsdCk7XHJcbiAgICAvLyAgICAgaWYgKHJlc3VsdC5zdGF0dXMuc3RhdGUgPT09ICdvaycpIHtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XHJcbiAgICAvLyAgICAgICAgIGZpbGxMaXN0VHlwZXMoJCgnLmpzX3Rhc2stc3RhcnQtZm9sbG93aW5nJyksIHJlc3VsdC5kYXRhKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RGF0YVN0ZXAyKHVzZXJzTmFtZSkge1xyXG4gICAgY29uc29sZS5sb2codXNlcnNOYW1lKTtcclxuICAgIGdldFRhc2tzRGF0YSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXREYXRhU3RlcDMoKSB7XHJcbiAgICBjb25zdCB1c2VycyA9ICQoJyNmb2xsb3dlcnMnKS52YWwoKVxyXG4gICAgICAgIC50cmltKClcclxuICAgICAgICAucmVwbGFjZSgvIC9nLCAnJylcclxuICAgICAgICAuc3BsaXQoJywnKVxyXG4gICAgICAgIC5maWx0ZXIoaSA9PiBpLmxlbmd0aCA+IDApO1xyXG5cclxuICAgIHN0YXRlWyd1c2VyX2N1c3RvbV9jb25maWcnXSA9IHtcclxuICAgICAgICB1c2Vyc1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGZpbGxTcGVlZExpc3QgPSBmdW5jdGlvbiAoJHdyYXBwZXIsIGRhdGEpIHtcclxuICAgICAgICBjb25zdCB0YXNrTW9kZXMgPSBkYXRhLmNmZyAmJiBkYXRhLmNmZy50YXNrX21vZGVzO1xyXG4gICAgICAgIGNvbnN0IHJhZGlvQnRuUmVkdWNlciA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnQUdHUkVTU0lWRSc6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCIke2l0ZW19XCIgbmFtZT1cImN1c3RvbVJhZGlvXCIgdmFsdWU9XCJzYWZlXCIgY2xhc3M9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImN1c3RvbS1jb250cm9sLWxhYmVsXCIgZm9yPVwiJHtpdGVtfVwiPjxzdHJvbmc+0JDQs9GA0LXRgdGB0LjQstC90YvQuTo8L3N0cm9uZz4gMzAg0L/QvtC00L/QuNGB0L7QuiDQsiDRh9Cw0YE8L2xhYmVsPmA7XHJcbiAgICAgICAgICAgICAgICAvLyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ01JRERMRSc6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwiJHtpdGVtfVwiIG5hbWU9XCJjdXN0b21SYWRpb1wiIHZhbHVlPVwic2FmZVwiIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjdXN0b20tY29udHJvbC1sYWJlbFwiIGZvcj1cIiR7aXRlbX1cIj48c3Ryb25nPtCh0YDQtdC00L3QuNC5Ojwvc3Ryb25nPiAxOCDQv9C+0LTQv9C40YHQvtC6INCyINGH0LDRgTwvbGFiZWw+YCk7XHJcbiAgICAgICAgICAgICAgICAvLyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ1NBRkUnOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwiJHtpdGVtfVwiIG5hbWU9XCJjdXN0b21SYWRpb1wiIHZhbHVlPVwic2FmZVwiIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIiBjaGVja2VkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImN1c3RvbS1jb250cm9sLWxhYmVsXCIgZm9yPVwiJHtpdGVtfVwiPjxzdHJvbmc+0JHQtdC30L7Qv9Cw0YHQvdGL0Lk6PC9zdHJvbmc+IDkg0L/QvtC00L/QuNGB0L7QuiDQsiDRh9Cw0YE8L2xhYmVsPmA7XHJcbiAgICAgICAgICAgICAgICAvLyBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RlZmF1bHQnLCBpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2RyYXcgc3BlZWQgcmFkaW9CdG4nKTtcclxuICAgICAgICAkd3JhcHBlci5lbXB0eSgpO1xyXG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBpbiB0YXNrTW9kZXMpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3N0cnVjdHVyZTogJyArIGl0ZW0pO1xyXG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhc2tNb2RlcywgaXRlbSkpIHtcclxuICAgICAgICAgICAgICAgICQoYDxkaXYgY2xhc3M9XCJjdXN0b20tY29udHJvbCBjdXN0b20tcmFkaW9cIj5cclxuICAgICAgICAgICAgICAgICR7cmFkaW9CdG5SZWR1Y2VyKGl0ZW0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5gKS5hcHBlbmRUbygkd3JhcHBlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGRyYXcgY3JpdGVyaWFcclxuICAgIFVzZXJUYXNrTWFuYWdlci5nZXREZWZhdWx0Q29uZmlncygpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXREZWZhdWx0Q29uZmlncycpO1xyXG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzLnN0YXRlID09PSAnb2snKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIGZpbGxTcGVlZExpc3QoJCgnLmpzX2ZvbGxvdy1zcGVlZCcpLCByZXN1bHQuZGF0YS5mb3VuZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0ZXBSZWR1Y2VyKHN0ZXBOdW1iZXIpIHtcclxuICAgIHN3aXRjaCAoc3RlcE51bWJlcikge1xyXG4gICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgZ2V0RGF0YVN0ZXAyKHN0YXRlLnVzZXJuYW1lKTsgLy8gWy4uLm5ldyBTZXQoc3RhdGUudXNlcm5hbWUpXVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzdGF0ZSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgZ2V0RGF0YVN0ZXAzKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc3RlcE51bWJlcik7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHN0YXRlKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RlZmF1bHQnLCBzdGVwTnVtYmVyKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEluaXQgaGVhZGVyXHJcbiAqL1xyXG5mdW5jdGlvbiBpbml0U3RlcHMoKSB7XHJcbiAgICBjb25zdCAkZm9ybSA9ICQoJy5mb2xsb3ctZm9ybScpO1xyXG4gICAgJCgnLmpzX3Byb2ZpbGUtdXNlci1mb2xsb3c+LmNvbnRhaW5lcicpLnJlbW92ZUNsYXNzKCdjb250YWluZXInKTtcclxuXHJcbiAgICAkZm9ybS5maW5kKCdmaWVsZHNldDpmaXJzdC1jaGlsZCcpLmZhZGVJbignc2xvdycpO1xyXG5cclxuICAgICRmb3JtLmZpbmQoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdJykub24oJ2ZvY3VzJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2lucHV0LWVycm9yJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBuZXh0IHN0ZXBcclxuICAgICRmb3JtLmZpbmQoJy5idG4tbmV4dCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBwYXJlbnRfZmllbGRzZXQgPSAkKHRoaXMpLnBhcmVudHMoJ2ZpZWxkc2V0Jyk7XHJcbiAgICAgICAgbGV0IG5leHRfc3RlcCA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgcmFkaW9CdG5BY3RpdmUgPSBwYXJlbnRfZmllbGRzZXQuZmluZCgnaW5wdXRbbmFtZT1cInVzZXJBY2NvdW50UmFkaW9cIl06Y2hlY2tlZCcpO1xyXG5cclxuICAgICAgICBpZiAocmFkaW9CdG5BY3RpdmUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VybmFtZSA9IHJhZGlvQnRuQWN0aXZlLnBhcmVudHMoJ2xpJykuZGF0YSgndXNlcm5hbWUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RlcFJlZHVjZXIocGFyZW50X2ZpZWxkc2V0LmluZGV4KCksIHN0YXRlKTtcclxuXHJcbiAgICAgICAgcGFyZW50X2ZpZWxkc2V0LmZpbmQoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdLGlucHV0W3R5cGU9XCJlbWFpbFwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS52YWwoKSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2lucHV0LWVycm9yJyk7XHJcbiAgICAgICAgICAgICAgICBuZXh0X3N0ZXAgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2lucHV0LWVycm9yJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKG5leHRfc3RlcCkge1xyXG4gICAgICAgICAgICBwYXJlbnRfZmllbGRzZXQuZmFkZU91dCg0MDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykubmV4dCgpLmZhZGVJbigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gcHJldmlvdXMgc3RlcFxyXG4gICAgJGZvcm0uZmluZCgnLmJ0bi1wcmV2aW91cycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBzdGF0ZS51c2VybmFtZSA9IFsuLi5uZXcgU2V0KHN0YXRlLnVzZXJuYW1lKV07XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCdmaWVsZHNldCcpLmZhZGVPdXQoNDAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucHJldigpLmZhZGVJbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gc3BlZWQgcmFkaW8tYnRuIGdyb3VwXHJcbiAgICAkKCcuanNfZm9sbG93LXNwZWVkIGlucHV0W3R5cGU9cmFkaW9dJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gJCh0aGlzKS5hdHRyKCd2YWx1ZScpO1xyXG4gICAgICAgIHN0YXRlLnVzZXJfZGVmYXVsdF9jb25maWcgPSB7XHJcbiAgICAgICAgICAgIHRhc2tfbW9kZTogdmFsdWUudG9VcHBlckNhc2UoKVxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBzdWJtaXRcclxuICAgICRmb3JtLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGNvbnN0IGdlbmRlclZhbCA9ICQodGhpcykuZmluZCgnLnNlbGVjdC1nZW5kZXIgb3B0aW9uOnNlbGVjdGVkJykudmFsKCk7XHJcbiAgICAgICAgc3RhdGUudXNlcl9kZWZhdWx0X2NvbmZpZyA9IHtcclxuICAgICAgICAgICAgLi4uc3RhdGUudXNlcl9kZWZhdWx0X2NvbmZpZyxcclxuICAgICAgICAgICAgY3JpdGVyaWE6IHtcclxuICAgICAgICAgICAgICAgIGdlbmRlcjogZ2VuZGVyVmFsLnRvVXBwZXJDYXNlKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgbGltaXQgPSBkb2N1bWVudC5mb3Jtc1snZm9sbG93LWZvcm0nXVsnbGltaXQnXTtcclxuICAgICAgICBjb25zdCBoYXZlX3Bvc3RzID0ge1xyXG4gICAgICAgICAgICBmcm9tOiBkb2N1bWVudC5mb3Jtc1snZm9sbG93LWZvcm0nXVsnaGF2ZV9wb3N0c19mcm9tJ10udmFsdWUsXHJcbiAgICAgICAgICAgIHRvOiBkb2N1bWVudC5mb3Jtc1snZm9sbG93LWZvcm0nXVsnaGF2ZV9wb3N0c190byddLnZhbHVlXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBoYXZlX2ZvbGxvd2VycyA9IHtcclxuICAgICAgICAgICAgZnJvbTogZG9jdW1lbnQuZm9ybXNbJ2ZvbGxvdy1mb3JtJ11bJ2hhdmVfZm9sbG93ZXJzX2Zyb20nXS52YWx1ZSxcclxuICAgICAgICAgICAgdG86IGRvY3VtZW50LmZvcm1zWydmb2xsb3ctZm9ybSddWydoYXZlX2ZvbGxvd2Vyc190byddLnZhbHVlXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBoYXZlX2ZvbGxvd2luZ3MgPSB7XHJcbiAgICAgICAgICAgIGZyb206IGRvY3VtZW50LmZvcm1zWydmb2xsb3ctZm9ybSddWydoYXZlX2ZvbGxvd2luZ3NfZnJvbSddLnZhbHVlLFxyXG4gICAgICAgICAgICB0bzogZG9jdW1lbnQuZm9ybXNbJ2ZvbGxvdy1mb3JtJ11bJ2hhdmVfZm9sbG93aW5nc190byddLnZhbHVlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKGxpbWl0LnZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICBsaW1pdC5mb2N1cygpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0YXRlWyd1c2VyX2RlZmF1bHRfY29uZmlnJ10uY3JpdGVyaWEgPSB7XHJcbiAgICAgICAgICAgIGxpbWl0OiBsaW1pdC52YWx1ZSxcclxuICAgICAgICAgICAgJ3VuZm9sbG93X3RoZW4nOiAhISQoJyN1bmZvbGxvd190aGVuOmNoZWNrZWQnKS5sZW5ndGgsXHJcbiAgICAgICAgICAgICdmb2xsb3dfb25fY2xvc2VkX3Byb2ZpbGVzJzogISEkKCcjZm9sbG93X29uX2Nsb3NlZF9wcm9maWxlczpjaGVja2VkJykubGVuZ3RoLFxyXG4gICAgICAgICAgICBoYXZlX3Bvc3RzLFxyXG4gICAgICAgICAgICBoYXZlX2ZvbGxvd2VycyxcclxuICAgICAgICAgICAgaGF2ZV9mb2xsb3dpbmdzXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgJCh0aGlzKS5maW5kKCdpbnB1dFt0eXBlPVwidGV4dFwiXSxpbnB1dFt0eXBlPVwibnVtYmVyXCJdLGlucHV0W3R5cGU9XCJlbWFpbFwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS52YWwoKSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2lucHV0LWVycm9yJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdpbnB1dC1lcnJvcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHN0YXRlLnR5cGUgPSAnRk9MTE9XSU5HJztcclxuICAgICAgICBzdGF0ZS5zdWJ0eXBlID0gJ0ZPTExPV0lOR19MSVNUJztcclxuICAgICAgICBjb25zb2xlLmxvZygnbWFrZSByZXF1ZXN0KiogIHBvc3Q6IFN0YXJ0Rm9sbG93aW5nTGlzdCcsIHN0YXRlKTtcclxuXHJcbiAgICAgICAgVXNlclRhc2tNYW5hZ2VyLnBvc3RTdGFydEZvbGxvd2luZ0xpc3Qoc3RhdGUpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cy5zdGF0ZSA9PT0gJ29rJykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XHJcbiAgICAgICAgICAgICAgICAkKCcuZm9ybS1zdWJtaXQtZmluaXNoJykuYWRkQ2xhc3MoJ2QtYmxvY2snKVxyXG4gICAgICAgICAgICAgICAgICAgIC5maW5kKCcuYWxlcnQnKS5hcHBlbmQoYDxwPnRhc2tfaWQ6ICR7cmVzdWx0LmRhdGEudGFza19pZH08L3A+YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxufVxyXG5cclxuLypcclxuZnVuY3Rpb24gZml4U3RlcEluZGljYXRvcihuKSB7XHJcbiAgICAvLyBUaGlzIGZ1bmN0aW9uIHJlbW92ZXMgdGhlIFwiYWN0aXZlXCIgY2xhc3Mgb2YgYWxsIHN0ZXBzLi4uXHJcbiAgICB2YXIgaSwgeCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzdGVwXCIpO1xyXG4gICAgZm9yIChpID0gMDsgaSA8IHgubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB4W2ldLmNsYXNzTmFtZSA9IHhbaV0uY2xhc3NOYW1lLnJlcGxhY2UoXCIgYWN0aXZlXCIsIFwiXCIpO1xyXG4gICAgfVxyXG4gICAgLy8uLi4gYW5kIGFkZHMgdGhlIFwiYWN0aXZlXCIgY2xhc3Mgb24gdGhlIGN1cnJlbnQgc3RlcDpcclxuICAgIHhbbl0uY2xhc3NOYW1lICs9IFwiIGFjdGl2ZVwiO1xyXG59Ki9cclxuXHJcbmZ1bmN0aW9uIG1vZGlmeUFjY0xpc3QoKSB7XHJcbiAgICBjb25zdCByYWRpb0J0biA9IChpZHgpID0+IGA8ZGl2IGNsYXNzPVwiY29sIGN1c3RvbS1jb250cm9sIGN1c3RvbS1yYWRpbyBqc191c2VyLXJhZGlvXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwidXNlckFjY291bnRSYWRpb1wiIGlkPVwiY3VzdG9tUmFkaW8tJHtpZHh9XCIgY2xhc3M9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiIHZhbHVlPVwiXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImN1c3RvbS1jb250cm9sLWxhYmVsXCIgZm9yPVwiY3VzdG9tUmFkaW8tJHtpZHh9XCI+0J/QvtC00L/QuNGB0LDRgtGM0YHRjzwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+YDtcclxuICAgIGNvbnN0ICRhY2NvdW50c0xpc3QgPSAkKCcuYWNjb3VudHMtbGlzdCcpO1xyXG4gICAgY29uc3QgJGxpID0gJGFjY291bnRzTGlzdC5maW5kKCcubWVkaWEtYm9keScpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgJGxpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgJCgkbGlbaV0pLmFwcGVuZChyYWRpb0J0bihpKSk7XHJcbiAgICB9XHJcbiAgICBVc2VyVGFza01hbmFnZXIuZ2V0VGFza1R5cGVzKCkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMuc3RhdGUgPT09ICdvaycpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgZmlsbExpc3RUeXBlcygkKCcuanNfdGFzay10eXBlcycpLCByZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLmpzX3VzZXItcmFkaW8gaW5wdXRbdHlwZT1yYWRpb10nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgJHBhcmVudEZpZWxkc2V0ID0gJCh0aGlzKS5wYXJlbnRzKCdmaWVsZHNldCcpO1xyXG4gICAgICAgICQoJy5idG4tbmV4dCcsICRwYXJlbnRGaWVsZHNldCkucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuY2hlY2tib3gtY2VsbCcpLm9uKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd2YWxpZGF0ZScpO1xyXG4gICAgICAgIC8vIHVwZGF0ZVN0YXR1cygpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qIHdvcmtpbmcgZGVtb1xyXG5mdW5jdGlvbiBmb3JtRnJvbUpzb24oKSB7XHJcbiAgICBjb25zdCBzY2hlbWEgPSB7XHJcbiAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXHJcbiAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgXCJwcm9wMVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnRlZ2VyXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJwcm9wMlwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnRlZ2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInJlcXVpcmVkXCI6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJwcm9wM1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnRlZ2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInJlcXVpcmVkXCI6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJjb21wb3NpdGUxXCI6IHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5lc3RlZDFcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXF1aXJlZFwiOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5lc3RlZDJcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXF1aXJlZFwiOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwicmVxdWlyZWRcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmVzdGVkMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmVzdGVkMlwiXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiY29tcG9zaXRlMlwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcclxuICAgICAgICAgICAgICAgIFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuZXN0ZWQxXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuZXN0ZWQyXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcInJlcXVpcmVkXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICBcIm5lc3RlZDFcIixcclxuICAgICAgICAgICAgICAgICAgICBcIm5lc3RlZDJcIlxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInJlcXVpcmVkXCI6IFtcclxuICAgICAgICAgICAgXCJwcm9wMVwiLFxyXG4gICAgICAgICAgICBcInByb3AyXCIsXHJcbiAgICAgICAgICAgIFwiY29tcG9zaXRlMVwiXHJcbiAgICAgICAgXVxyXG4gICAgfTtcclxuICAgIGNvbnN0IEJydXR1c2luRm9ybXMgPSB3aW5kb3cuYnJ1dHVzaW5bJ2pzb24tZm9ybXMnXTtcclxuICAgIGNvbnN0IGJmID0gQnJ1dHVzaW5Gb3Jtcy5jcmVhdGUoc2NoZW1hKTtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtMScpO1xyXG4gICAgY29uc29sZS5sb2cod2luZG93LmJydXR1c2luKTtcclxuICAgIGJmLnJlbmRlcihjb250YWluZXIsIGRhdGEpO1xyXG59Ki9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgaW5pdFN0ZXBzKCk7XHJcbiAgICBpZiAoJCgnLmZvbGxvdycpLmxlbmd0aCkge1xyXG4gICAgICAgIHdpbmRvdy5QdWJTdWIuc3Vic2NyaWJlKENPTlNULmV2ZW50cy5pbnN0YWdyYW1BY2NvdW5zLklOU1RBR1JBTV9BQ0NPVU5TX1JFTkRFUkVELCAoZXZlbnROYW1lLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIG1vZGlmeUFjY0xpc3QoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL2ZvbGxvdy9mb2xsb3cuanMiLCIvLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuLy8gY29uc3QgaGFtYnVyZ2VyQnV0dG9uQ2xzID0gJyNhc2lkZV9tb2JpbGVfX2J1dHRvbic7XHJcbi8vIGNvbnN0IGhhbWJ1cmdlck1lbnVDbHMgPSAnLmFzaWRlLWJ1cmdlci1tZW51JztcclxuLy8gY29uc3QgaGFtYnVyZ2VyTWVudU9wZW5lZENsYXNzID0gJ2J1cmdlci1tZW51LS1jbG9zZWQnO1xyXG4vLyBjb25zdCBoYW1idXJnZXJCdXR0b25DbG9zZUNsYXNzID0gJ2J1cmdlci1tZW51X19idXR0b24tLWNsb3NlJztcclxuY29uc3Qgc2VsZWN0b3JzRWwgPSB7XHJcbiAgICBsZWZ0TWVudToge1xyXG4gICAgICAgIGhhbWJ1cmdlckJ1dHRvbkNsczogJyNhc2lkZV9tb2JpbGVfX2J1dHRvbicsXHJcbiAgICAgICAgaGFtYnVyZ2VyTWVudUNsczogJy5hc2lkZS1idXJnZXItbWVudScsXHJcbiAgICAgICAgaGFtYnVyZ2VyTWVudU9wZW5lZENsYXNzOiAnYnVyZ2VyLW1lbnUtLWNsb3NlZCcsXHJcbiAgICAgICAgaGFtYnVyZ2VyQnV0dG9uQ2xvc2VDbGFzczogJ2J1cmdlci1tZW51X19idXR0b24tLWNsb3NlJ1xyXG4gICAgfSxcclxuICAgIHJpZ2h0TWVudToge1xyXG4gICAgICAgIGhhbWJ1cmdlckJ1dHRvbkNsczogJyNoZWFkZXJfbW9iaWxlX3RvZ2dsZXInLFxyXG4gICAgICAgIGhhbWJ1cmdlck1lbnVDbHM6ICcuci1zaWRlLWJ1cmdlci1tZW51JyxcclxuICAgICAgICBoYW1idXJnZXJNZW51T3BlbmVkQ2xhc3M6ICdyLXNpZGUtYnVyZ2VyLW1lbnUtLW9wZW4nLFxyXG4gICAgICAgIGhhbWJ1cmdlckJ1dHRvbkNsb3NlQ2xhc3M6ICdidXJnZXItbWVudS1yaWdodF9fYnV0dG9uLS1jbG9zZSdcclxuICAgIH0sXHJcbiAgICBzdWJIZWFkZXI6IHtcclxuICAgICAgICBoYW1idXJnZXJCdXR0b25DbHM6ICcjaGVhZGVyX21vYmlsZV90b3BiYXJfdG9nZ2xlcicsXHJcbiAgICAgICAgaGFtYnVyZ2VyTWVudUNsczogJy5zdWItaGVhZGVyJyxcclxuICAgICAgICBoYW1idXJnZXJNZW51T3BlbmVkQ2xhc3M6ICdzdWItaGVhZGVyLS1vcGVuJyxcclxuICAgICAgICBoYW1idXJnZXJCdXR0b25DbG9zZUNsYXNzOiAnc3ViLWhlYWRlci1idXR0b24tLWNsb3NlJ1xyXG4gICAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRvZ2dsZSBoYW1idXJnZXIgbWVudSBwb3BvdmVyXHJcbiAqL1xyXG5mdW5jdGlvbiB0b2dnbGVIYW1idXJnZXJNZW51KG1lbnVOYW1lKSB7XHJcbiAgICBjb25zdCB7aGFtYnVyZ2VyTWVudUNscywgaGFtYnVyZ2VyQnV0dG9uQ2xzLCBoYW1idXJnZXJCdXR0b25DbG9zZUNsYXNzLCBoYW1idXJnZXJNZW51T3BlbmVkQ2xhc3N9ID0gc2VsZWN0b3JzRWxbbWVudU5hbWVdO1xyXG4gICAgJChoYW1idXJnZXJCdXR0b25DbHMpLnRvZ2dsZUNsYXNzKGhhbWJ1cmdlckJ1dHRvbkNsb3NlQ2xhc3MpO1xyXG4gICAgJChoYW1idXJnZXJNZW51Q2xzKS50b2dnbGVDbGFzcyhoYW1idXJnZXJNZW51T3BlbmVkQ2xhc3MpO1xyXG59XHJcblxyXG4vKipcclxuICogSW5pdCBoYW1idXJnZXIgbWVudVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBjb25zdCBsZWZ0TWVudSA9ICdsZWZ0TWVudSc7XHJcbiAgICBjb25zdCByaWdodE1lbnUgPSAncmlnaHRNZW51JztcclxuICAgIGNvbnN0IHN1YkhlYWRlciA9ICdzdWJIZWFkZXInO1xyXG5cclxuICAgICQoc2VsZWN0b3JzRWxbbGVmdE1lbnVdLmhhbWJ1cmdlckJ1dHRvbkNscykub24oJ2NsaWNrJywgdG9nZ2xlSGFtYnVyZ2VyTWVudS5iaW5kKHRoaXMsIGxlZnRNZW51KSk7XHJcbiAgICAkKHNlbGVjdG9yc0VsW3JpZ2h0TWVudV0uaGFtYnVyZ2VyQnV0dG9uQ2xzKS5vbignY2xpY2snLCB0b2dnbGVIYW1idXJnZXJNZW51LmJpbmQodGhpcywgcmlnaHRNZW51KSk7XHJcbiAgICAkKHNlbGVjdG9yc0VsW3N1YkhlYWRlcl0uaGFtYnVyZ2VyQnV0dG9uQ2xzKS5vbignY2xpY2snLCB0b2dnbGVIYW1idXJnZXJNZW51LmJpbmQodGhpcywgc3ViSGVhZGVyKSk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9oZWFkZXIvYnVyZ2VyLW1lbnUvYnVyZ2VyLW1lbnUuanMiLCIvLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdXNlcic7XHJcbmltcG9ydCBQdWJTdWIgZnJvbSAncHVic3ViLWpzJzsgLy8gaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvcHVic3ViLWpzXHJcbmltcG9ydCB7Q09OU1R9IGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMnO1xyXG5cclxuY29uc3Qgc2VsZWN0b3JMb2dpblN0YXRlID0gJy5qc19tZXNzYWdlX2xvZ2dlZC0tdGV4dCc7XHJcbmNvbnN0IHNlbGVjdG9yRW1haWxDb25maXJtU3RhdGUgPSAnLmpzX2VtYWlsLWNvbmZpcm0tLXRleHQnO1xyXG5jb25zdCBjbG9zZUNsYXNzID0gJ2Qtbm9uZSc7XHJcbmNvbnN0IG9wZW5lZENsYXNzID0gJ2QtYmxvY2snO1xyXG5cclxuZnVuY3Rpb24gZW1haWxOb3RDb25maXJtZWQoKSB7XHJcbiAgICBjb25zdCAkZW1haWxuTXNnID0gJChzZWxlY3RvckVtYWlsQ29uZmlybVN0YXRlKTtcclxuICAgICRlbWFpbG5Nc2cudGV4dCgnKiplbWFpbE5vdENvbmZpcm1lZCoqIEVtYWlsINC90LUg0L/QvtC00YLQstC10YDQttC00LXQvS4nKS5jc3MoJ2NvbG9yJywgJ2xpZ2h0Y29yYWwnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25Mb2dpblN1YnNjcmliZShtc2csIGRhdGEpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKG1zZywgZGF0YSk7XHJcbiAgICAkKENPTlNULnVpU2VsZWN0b3JzLmhlYWRlck5hdkxvZ2luQnRuKS5hZGRDbGFzcyhjbG9zZUNsYXNzKS5yZW1vdmVDbGFzcyhvcGVuZWRDbGFzcyk7XHJcbiAgICAkKENPTlNULnVpU2VsZWN0b3JzLmhlYWRlclJlZ0J0bikuYWRkQ2xhc3MoY2xvc2VDbGFzcykucmVtb3ZlQ2xhc3Mob3BlbmVkQ2xhc3MpO1xyXG4gICAgJChDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJMb2dpbkJveCkuYWRkQ2xhc3MoY2xvc2VDbGFzcykucmVtb3ZlQ2xhc3Mob3BlbmVkQ2xhc3MpO1xyXG5cclxuICAgICQoJy5uYXYtbGluay5qc19sb2dPdXQnKS5hZGRDbGFzcyhvcGVuZWRDbGFzcykucmVtb3ZlQ2xhc3MoY2xvc2VDbGFzcyk7IC8vIHNob3dcclxuICAgIGNvbnN0ICRsb2dpbk1zZyA9ICQoc2VsZWN0b3JMb2dpblN0YXRlKTtcclxuICAgICRsb2dpbk1zZy50ZXh0KCcqKm9uTG9naW5TdWJzY3JpYmUqKiDQstGLINC30LDQu9C+0LPQuNC90LjQu9C40YHRjCDQsiBMdXhncmFtINGD0YHQv9C10YjQvdC+JykuY3NzKCdjb2xvcicsICdsaWdodGJsdWUnKTtcclxuICAgIGNvbnN0IGlzRW1haWxDb25maXJtZWQgPSBVc2VyLmlzRW1haWxDb25maXJtZWQoKTtcclxuICAgIGlmICghaXNFbWFpbENvbmZpcm1lZCkge1xyXG4gICAgICAgIGVtYWlsTm90Q29uZmlybWVkKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dMb2dvdXQoKSB7XHJcbiAgICAvLyBjaGVjayBpcyBsb2dnZWRcclxuICAgIGNvbnN0IGlzTG9nZ2VkID0gVXNlci5pc0xvZ2dlZEluKCk7XHJcbiAgICBjb25zdCBpc0VtYWlsQ29uZmlybWVkID0gVXNlci5pc0VtYWlsQ29uZmlybWVkKCk7XHJcbiAgICBpZiAoIWlzRW1haWxDb25maXJtZWQpIHtcclxuICAgICAgICBlbWFpbE5vdENvbmZpcm1lZCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzTG9nZ2VkKSB7XHJcbiAgICAgICAgJCgnLm5hdi1saW5rLmpzX2xvZ091dCcpLnBhcmVudCgpLnNob3coKTtcclxuICAgICAgICAkKCcuanNfZW1haWwtY29uZmlybS0tdGV4dCcpLnRleHQoJ9Cy0Ysg0LfQsNC70L7Qs9C40L3QuNC70LjRgdGMINGD0YHQv9C10YjQvdC+Jyk7XHJcbiAgICAgICAgY29uc3Qgb2xkVVJMID0gZG9jdW1lbnQucmVmZXJyZXI7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cob2xkVVJMKTtcclxuICAgICAgICBpZiAob2xkVVJMLmluY2x1ZGVzKCdjb25maXJtLXJlZ2lzdHJhdGlvbicpKSB7XHJcbiAgICAgICAgICAgICQoJy5qc19tZXNzYWdlX2xvZ2dlZC0tdGV4dCcpLnRleHQoJ9Cy0Ysg0L/QvtC00YLQstC10YDQtNC40LvQuCDRgNC10LPQuNGB0YLRgNCw0YbQuNGOJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9uTG9naW5TdWJzY3JpYmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChzZWxlY3RvckxvZ2luU3RhdGUpLnRleHQoJ9Cf0YDQuNCy0LXRgiDQsNC90L7QvdC40LzQvdGL0Lkg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMJyk7XHJcbiAgICAgICAgJChzZWxlY3RvckVtYWlsQ29uZmlybVN0YXRlKS5lbXB0eSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogSW5pdCBoZWFkZXJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0SGVhZGVyKCkge1xyXG4gICAvLyBjaGVjayBvdGhlciBoYW5kbGVyIGluIGxvZ2luLWZvcm0uanNcclxuICAgIGNvbnN0ICRsb2dpbkJveCA9ICQoQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyTG9naW5Cb3gpO1xyXG4gICAgY29uc3QgJHJlZ2lzdGVyQm94ID0gJChDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJSZWdCb3gpO1xyXG5cclxuICAgIFB1YlN1Yi5zdWJzY3JpYmUoQ09OU1QuZXZlbnRzLlVTRVJfTE9HR0VELCBvbkxvZ2luU3Vic2NyaWJlKTtcclxuXHJcbiAgICBzaG93TG9nb3V0KCk7XHJcblxyXG4gICAgJChDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJSZWdCdG4pLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAkbG9naW5Cb3guaGlkZSgpO1xyXG4gICAgICAgICRyZWdpc3RlckJveC5jc3Moeyd0b3AnOiAwLCAncmlnaHQnOiAwfSlcclxuICAgICAgICAgICAgLmFkZENsYXNzKCdiZy1saWdodCBib3JkZXIgbXQtNSBteC1hdXRvIHBvc2l0aW9uLWFic29sdXRlIHB4LTMgZC1ibG9jaycpXHJcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKENPTlNULnVpU2VsZWN0b3JzLmhlYWRlck5hdkxvZ2luQnRuKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgJGxvZ2luQm94LmFkZENsYXNzKCdkLWJsb2NrJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICRyZWdpc3RlckJveC5hZGRDbGFzcygnZC1ub25lJykucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKTtcclxuICAgIH0pO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3MvaGVhZGVyL2hlYWRlci5qcyIsIi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy91c2VyJztcclxuLy8gaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3NwaW5uZXInO1xyXG5pbXBvcnQgdmlld1V0aWxzIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy92aWV3JztcclxuLy8gaW1wb3J0IFB1YlN1YiBmcm9tICdwdWJzdWItanMnO1xyXG5pbXBvcnQge0NPTlNUfSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29uc3RzJztcclxuXHJcbi8vINCf0L7RgdC70LUg0LTQvtCx0LDQstC70LXQvdC40Y8g0LDQutC60LDRg9C90YLQsCDRgdC90L7QstCwINC00LXRgNC90YPRgtGMINCc0JXQotCQINC4INC/0LXRgNC10YDQuNGB0L7QstCw0YLRjCDRgdC/0LjRgdC+0Log0LDQutC60LDRg9C90YLQvtCyXHJcbmNvbnN0IGFkZEluc3RhZ3JhbUFjY291bnQgPSAobmV3Rm9ybURhdGEpID0+IHtcclxuICAgIGNvbnN0IGNiRXJyb3IgPSAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SJywgcmVzdWx0KTtcclxuICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKCQoJy5lcnJvci1tc2cnKSxcclxuICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5zdGF0ZSxcclxuICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5tZXNzYWdlIHx8ICdMb2dpbiBlcnJvcicpO1xyXG4gICAgICAgIC8vICQoX2xvZ2luQm94KS5hZGRDbGFzcyhjbG9zZUNsYXNzKS5yZW1vdmVDbGFzcyhvcGVuZWRDbGFzcyk7XHJcbiAgICB9O1xyXG5cclxuICAgIFVzZXIuYWRkSW5zdGFncmFtQWNjb3VudChuZXdGb3JtRGF0YSwgY2JFcnJvcikudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCwgcmVzdWx0LnN0YXR1cyk7XHJcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyO1xyXG4gICAgICAgICAgICBjb25zdCAkbXNnTGlzdCA9ICQoJy5hY2NvdW50cy1saXN0Jyk7XHJcbiAgICAgICAgICAgICRtc2dMaXN0LmVtcHR5KCk7XHJcbiAgICAgICAgICAgIC8vIHRvZG8gOiByZWxvYWQgbGlzdFxyXG4gICAgICAgICAgICAvLyBmaWxsTGlzdCgkbXNnTGlzdCwgcmVzdWx0LmRhdGEuYWNjb3VudHMpO1xyXG4gICAgICAgICAgICAvLyBhZGRMaXN0SGFuZGxlcigpO1xyXG5cclxuICAgICAgICAgICAgLy8gdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSgkdGV4dEFyZWFEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgLy8gICAgIHJlc3VsdC5zdGF0dXMuc3RhdGUsXHJcbiAgICAgICAgICAgIC8vICAgICByZXN1bHQuc3RhdHVzLm1lc3NhZ2UgfHwgJ0xvZ2luIGVycm9yJyk7XHJcbiAgICAgICAgICAgIC8vICQoX2xvZ2luQm94KS5hZGRDbGFzcyhjbG9zZUNsYXNzKS5yZW1vdmVDbGFzcyhvcGVuZWRDbGFzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIC8vIHRvZG86IHJlbmRlciBmb3IgdXNlclxyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnc3VibWl0JywgbmV3Rm9ybURhdGEpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gYWRkT25Mb2FkSGFuZGxlcnMoKSB7XHJcbiAgICAvLyAkKCcuanNfcmVwZWF0LXNlY3VyaXR5LWNvZGUnKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG5cclxuICAgIC8vIH0pO1xyXG5cclxuICAgICQoJy5qc19hZGQtaW5zdGFncmFtLWFjY291bnQnKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJ0biA9ICQoZS50YXJnZXQpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RhbEJvZHkgPSBidG4uY2xvc2VzdCgnLm1vZGFsJykuZmluZCgnLm1vZGFsLWRpYWxvZyAubW9kYWwtYm9keScpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gJG1vZGFsQm9keS5maW5kKCdpbnB1dFtuYW1lPVwidXNlcm5hbWVcIl0nKS52YWwoKS50cmltKCk7XHJcbiAgICAgICAgY29uc3QgcGFzc3dvcmQgPSAkbW9kYWxCb2R5LmZpbmQoJ2lucHV0W25hbWU9XCJwYXNzXCJdJykudmFsKCkudHJpbSgpO1xyXG4gICAgICAgIGNvbnN0ICRmb3JtID0gJCgnZm9ybScsICRtb2RhbEJvZHkpO1xyXG4gICAgICAgIGNvbnN0IGZvcm0gPSAkZm9ybS5nZXQoMCk7XHJcbiAgICAgICAgY29uc3QgY3NzVmFsaWRhdGlvbkNsYXNzID0gJ2Zvcm0tdmFsaWRhdGlvbic7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgLy8gY29uc3QgdmFsaWRhdG9yID0gbmV3IFZhbGlkYXRvcigkZm9ybSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codmFsaWRhdG9yLnZhbGlkYXRlKCkpO1xyXG4gICAgICAgIGlmIChmb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICAgICAgICBhZGRJbnN0YWdyYW1BY2NvdW50KHt1c2VybmFtZSwgcGFzc3dvcmR9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBIaWdobGlnaHQgZXJyb3JzXHJcbiAgICAgICAgICAgIGlmIChmb3JtLnJlcG9ydFZhbGlkaXR5KSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtLnJlcG9ydFZhbGlkaXR5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJGZvcm0uYWRkQ2xhc3MoY3NzVmFsaWRhdGlvbkNsYXNzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdXNlcm5hbWUgfHwgIXBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdub3QgdmFsaWQgLSBFbXB0eSBmaWVsZHMnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRMaXN0SGFuZGxlcigvKiB1c2VybmFtZSovKSB7XHJcbiAgICAvLyAkKCcjeW91ck1vZGFsSUQnKS5vbignc2hvdy5icy5tb2RhbCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgIC8vICAgICB2YXIgeW91cnBhcmFtZXRlciA9IGUucmVsYXRlZFRhcmdldC5kYXRhc2V0LnlvdXJwYXJhbWV0ZXI7XHJcbiAgICAvLyAgICAgLy8gRG8gc29tZSBzdHVmZiB3LyBpdC5cclxuICAgIC8vIH0pO1xyXG4gICAgbGV0IGNoZWNrcG9pbnRUeXBlID0gJyc7XHJcblxyXG4gICAgJCgnLmpzX3Bhc3MtY2hlY2twb2ludC1idG4nKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0ICRidXR0b24gPSAkKGUudGFyZ2V0KTtcclxuICAgICAgICBjb25zdCB1c2VybmFtZSA9ICRidXR0b24uZGF0YSgndXNlcm5hbWUnKTtcclxuICAgICAgICBjaGVja3BvaW50VHlwZSA9ICRidXR0b24uZGF0YSgnY2hlY2twb2ludFR5cGUnKSB8fCBjaGVja3BvaW50VHlwZTtcclxuICAgICAgICAvLyAkKCcjc2VjdXJpdHktY29kZScpLmRhdGEoJ2NoZWNrcG9pbnRUeXBlJywgY2hlY2twb2ludFR5cGUpO1xyXG4gICAgICAgIC8vIHRvZG8gYWRkICdjaGVja3BvaW50VHlwZScgdG8gbW9kYWxcclxuICAgICAgICBjb25zdCBzZW5kVG8gPSAoY2hlY2twb2ludFR5cGUgPT09ICdQSE9ORScpID8gJ9GC0LXQu9C10YTQvtC9JyA6ICdlbWFpbCc7XHJcbiAgICAgICAgLy8gU3Bpbm5lci5zdGFydCgkYnV0dG9uLCAnZmEta2V5Jyk7XHJcblxyXG4gICAgICAgIGlmIChjaGVja3BvaW50VHlwZSA9PT0gJ0VNQUlMX09SX1BIT05FJykge1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgLy8g0LjQvdC/0YPRgtGLINGB0L/RgNGP0YLQsNC90YssXHJcbiAgICAgICAgICAgIC8vINC/0L7QutCw0LfQsNGC0Ywg0YHQtdGA0YvQtSDQv9C10YDQtdC60LvRjtGH0LDRgtC10LvQuCAo0LLRi9Cx0YDQsNC7INGC0LjQvylcclxuICAgICAgICAgICAgLy8g0LXRgdGC0Ywg0LrQvdC+0L/QutCwINCX0LDQv9GA0L7RgdC40YLRjCDQutC+0LQg0L/QvtC00YLQstC10YDQttC00LXQvdC40LVcclxuICAgICAgICAgICAgJCgnI3NlY3VyaXR5LWNvZGUtcGhvbmVPcmVtYWlsJykubW9kYWwoe3Nob3c6IHRydWUsIHVzZXJuYW1lfSk7XHJcblxyXG4gICAgICAgICAgICAvLyDQvdC1INC+0YLQv9GA0LDQstC70Y/QtdC8INGA0LXQutCy0LXRgdGCXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFVzZXIuZ2V0U2VjdXJpdHlLZXkodXNlcm5hbWUsIGNoZWNrcG9pbnRUeXBlKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlY3VyaXR5S2V5IHJlY2VpdmVkOicsIHJlc3VsdC5zdGF0dXMuc3RhdGUpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cy5zdGF0ZSA9PT0gJ29rJykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJG1vZGFsID0gJCgnI3NlY3VyaXR5LWNvZGUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTcGlubmVyLnN0b3AoJGJ1dHRvbiwgJ2ZhLWtleScpO1xyXG4gICAgICAgICAgICAgICAgJCgnLmpzX3N1Y2Nlc3MtZmVlZGJhY2snLCAkbW9kYWwpLmVtcHR5KCkudGV4dChg0JrQu9GO0Ycg0L/QvtC00YLQstC10YDQttC00LXQvdC40Y8g0LHRi9C7INC+0YLQv9GA0LDQstC70LXQvSDQktCw0Lwg0L3QsCAke3NlbmRUb31gKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKCcjc2VjdXJpdHktY29kZScpLmF0dHIoJ2RhdGEtdXNlcm5hbWUnLCB1c2VybmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGluc2lkZSBtb2RhbFxyXG4gICAgJCgnLmpzX2NvbmZpcm0tc2VjdXJpdHktY29kZScpLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYnRuID0gJChlLnRhcmdldCk7XHJcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSBidG4uY2xvc2VzdCgnI3NlY3VyaXR5LWNvZGUnKS5kYXRhKCd1c2VybmFtZScpO1xyXG4gICAgICAgIGNvbnN0ICRrZXlJbnB1dCA9IGJ0bi5jbG9zZXN0KCcubW9kYWwnKS5maW5kKCcubW9kYWwtZGlhbG9nIGZvcm0gaW5wdXQuanNfY29uZmlybS1rZXknKTtcclxuICAgICAgICBjb25zdCBrZXkgPSAka2V5SW5wdXQudmFsKCkudHJpbSgpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RhbCA9IGJ0bi5jbG9zZXN0KCcubW9kYWwnKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICBpZiAoa2V5Lmxlbmd0aCAhPT0gNikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFVzZXIuY29uZmlybVNlY3VyaXR5S2V5KGtleSwgdXNlcm5hbWUpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cy5zdGF0ZSAhPT0gJ29rJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdqc19jb25maXJtOicsIHJlc3VsdC5zdGF0dXMuc3RhdGUsICdjbG9zZSBtb2RhbCcpO1xyXG4gICAgICAgICAgICAkbW9kYWwubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnInKTtcclxuICAgICAgICAgICAgJCgnLmpzX3N1Y2Nlc3MtZmVlZGJhY2snLCAkbW9kYWwpLnRleHQoJ9CX0LDQv9GA0L7RgSDQvdC1INC+0YLQv9GA0LDQstC70LXQvScpLmNzcygnY29sb3InLCAncmVkJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCdmb3JtIGlucHV0W21pbmxlbmd0aF0nKS5vbignYmx1cicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBsZW4gPSAkKHRoaXMpLnZhbCgpLnRyaW0oKS5sZW5ndGg7XHJcbiAgICAgICAgY29uc3QgbWluTGVuID0gTnVtYmVyKCQodGhpcykuYXR0cignbWlubGVuZ3RoJykpO1xyXG4gICAgICAgIC8vIGNvbnN0IG1lc3NhZ2UgPSBtaW5MZW4gPD0gbGVuID8gJycgOiBtaW5MZW4gKyAnIGNoYXJhY3RlcnMgbWluaW11bSc7XHJcbiAgICAgICAgaWYgKG1pbkxlbiAhPT0gbGVuKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuY3NzKCdib3JkZXJDb2xvcicsICdyZWQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNzcygnYm9yZGVyQ29sb3InLCAnI2NlZDRkYScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLnNldEN1c3RvbVZhbGlkaXR5KG1lc3NhZ2UpXHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBvbkhpZGVNb2RhbChlKSB7XHJcbiAgICAgICAgY29uc3QgJG1vZGFsID0gJChlLnRhcmdldCk7XHJcbiAgICAgICAgJG1vZGFsLmZpbmQoJy5maXJzdC1zdGVwJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICRtb2RhbC5maW5kKCcuc2Vjb25kLXN0ZXAnKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgJCgnLmpzX2NvbmZpcm0ta2V5JykudmFsKCcnKTtcclxuICAgICAgICAkKCcuanNfc3VjY2Vzcy1mZWVkYmFjaycsICRtb2RhbCkucmVtb3ZlQXR0cignc3R5bGUnKS5lbXB0eSgpO1xyXG4gICAgfVxyXG4gICAgJCgnI3NlY3VyaXR5LWNvZGUtcGhvbmVPcmVtYWlsJykub24oJ2hpZGUuYnMubW9kYWwnLCBvbkhpZGVNb2RhbCk7XHJcbiAgICAkKCcjc2VjdXJpdHktY29kZScpLm9uKCdoaWRlLmJzLm1vZGFsJywgb25IaWRlTW9kYWwpO1xyXG5cclxuICAgIC8vIFwiUEhPTkVfT1JfRU1BSUxcIiBtb2RhbFxyXG4gICAgJCgnLmpzX2dldC1zZWN1cml0eS1jb2RlLXBob25lT3JlbWFpbCcpLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgJG1vZGFsID0gJCgnI3NlY3VyaXR5LWNvZGUtcGhvbmVPcmVtYWlsJyk7XHJcbiAgICAgICAgY29uc3QgdHlwZVNlbGVjdGVkID0gJChlLnRhcmdldCkuY2xvc2VzdCgkbW9kYWwpLmZpbmQoJy5qc19idG4tdHlwZS1zd2l0Y2hlciBpbnB1dDpjaGVja2VkJyk7XHJcbiAgICAgICAgY29uc3QgY2hlY2twb2ludFR5cGVBY3RpdmUgPSB0eXBlU2VsZWN0ZWQudmFsKCk7XHJcbiAgICAgICAgY29uc3Qgc2VuZFRvID0gKGNoZWNrcG9pbnRUeXBlQWN0aXZlID09PSAnUEhPTkUnKSA/ICfRgtC10LvQtdGE0L7QvScgOiAnZW1haWwnO1xyXG4gICAgICAgIGNvbnN0IG1vZGFsQ29uZmlnID0gJG1vZGFsLmRhdGEoKVsnYnMubW9kYWwnXS5fY29uZmlnO1xyXG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gbW9kYWxDb25maWcudXNlcm5hbWU7XHJcbiAgICAgICAgVXNlci5nZXRTZWN1cml0eUtleSh1c2VybmFtZSwgY2hlY2twb2ludFR5cGVBY3RpdmUpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAvLyDQv9GA0Lgg0L3QsNC20LDRgtC40LggXCLQl9Cw0L/RgNC+0YHQuNGC0Ywg0LrQvtC0INC/0L7QtNGC0LLQtdGA0LbQtNC10L3QuNC1XCIgLSDQvtGC0L/QsNGA0LvRj9C10YLRgdGPINGA0LXQutCy0LXRgdGCIFwi0YHRgtCw0YDRgiDRh9C10LrQv9C+0LjQvdGCXCIg0L/QvtGP0LLQu9GP0LXRgtGM0YHRjyDQuNC90L/Rg9GCINC4INC60L3QvtC/0LrQsCDQtNGA0YPQs9C40YUg0YLQuNC/0LDRhVxyXG4gICAgICAgICAgICAvLyBnZXQgc2VsZWN0ZWQgYnV0dG9uXHJcblxyXG4gICAgICAgICAgICAvLyDQv9C10YDQtdC60LvRjtGH0LDRgtC10LvRjCjRgdC10YDRi9C5KSDQuCDQutC90L7Qv9C60LAgXCLQl9Cw0L/RgNC+0YHQuNGC0Ywg0LrQvtC0INC/0L7QtNGC0LLQtdGA0LbQtNC10L3QuNC1XCIg0LjRgdGH0LXQt9Cw0Y7RglxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2VjdXJpdHlLZXkgcmVjZWl2ZWQ6JywgcmVzdWx0LnN0YXR1cy5zdGF0ZSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzLnN0YXRlID09PSAnb2snKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuZmlyc3Qtc3RlcCcsICRtb2RhbCkuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgJCgnLnNlY29uZC1zdGVwJywgJG1vZGFsKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcuanNfc3VjY2Vzcy1mZWVkYmFjaycsICRtb2RhbCkuZW1wdHkoKS50ZXh0KGDQmtC70Y7RhyDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjRjyDQsdGL0Lsg0L7RgtC/0YDQsNCy0LvQtdC9INCS0LDQvCDQvdCwICR7c2VuZFRvfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsbExpc3QoJGxpc3QsIGRhdGFBcnJheSkge1xyXG4gICAgY29uc3QgaXRlbXMgPSBkYXRhQXJyYXk7XHJcbiAgICBjb25zdCBjTGlzdCA9ICRsaXN0O1xyXG4gICAgY29uc3QgZGVmYXVsdEF2YXRhclNyYyA9ICdodHRwczovL2kuaW1ndXIuY29tL2pOTlQ0TEUucG5nJztcclxuICAgIGNvbnN0IGluc2VydEl0ZW0gPSAoZGF0YSwgdGV4dCwgY3NzQ2xzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGlUcGwgPSBgJHsoZGF0YSlcclxuICAgICAgICAgICAgPyBgPGxpIGNsYXNzPVwibGlzdC1pbmxpbmUtaXRlbSAke2Nzc0Nsc31cIj48c3BhbiBjbGFzcz1cImZpZ3VyZVwiPiR7ZGF0YX08L3NwYW4+PHNwYW4+JHt0ZXh0fTwvc3Bhbj48L2xpPmBcclxuICAgICAgICAgICAgOiBgPGxpIGNsYXNzPVwibGlzdC1pbmxpbmUtaXRlbSAke2Nzc0Nsc31cIj48c3BhbiBjbGFzcz1cImZpZ3VyZVwiPjA8L3NwYW4+PHNwYW4+JHt0ZXh0fTwvc3Bhbj48L2xpPmB9YDtcclxuICAgICAgICByZXR1cm4gbGlUcGw7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc3RhdHMgPSAoaW5mbykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRwbCA9IGA8ZGl2IGNsYXNzPVwiY29sXCI+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3QtaW5saW5lIHRleHQtY2VudGVyIGNvdW50cy1saXN0XCI+XHJcbiAgICAgICAgICAgICR7KGluZm8pXHJcbiAgICAgICAgICAgICAgPyBgJHtpbnNlcnRJdGVtKGluZm9bJ21lZGlhX2NvdW50J10sICfQn9GD0LHQu9C40LrQsNGG0LjQuCcsICdtZWRpYS1jb3VudCcpfVxyXG4gICAgICAgICAgICAgICAgJHtpbnNlcnRJdGVtKGluZm9bJ2ZvbGxvd2VyX2NvdW50J10sICfQn9C+0LTQv9C40YHRh9C40LrQuCcsICdmb2xsb3dlci1jb3VudCcpfVxyXG4gICAgICAgICAgICAgICAgJHtpbnNlcnRJdGVtKGluZm9bJ2ZvbGxvd2luZ19jb3VudCddLCAn0J/QvtC00L/QuNGB0LrQuCcsICdmb2xsb3dpbmctY291bnQnKX1gXHJcbiAgICAgICAgICAgICAgOiBgJHtpbnNlcnRJdGVtKGZhbHNlLCAn0J/Rg9Cx0LvQuNC60LDRhtC40LgnLCAnbWVkaWEtY291bnQnKX1cclxuICAgICAgICAgICAgICAgICR7aW5zZXJ0SXRlbShmYWxzZSwgJ9Cf0L7QtNC/0LjRgdGH0LjQutC4JywgJ2ZvbGxvd2VyLWNvdW50Jyl9XHJcbiAgICAgICAgICAgICAgICAke2luc2VydEl0ZW0oZmFsc2UsICfQn9C+0LTQv9C40YHQutC4JywgJ2ZvbGxvd2luZy1jb3VudCcpfWBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PmA7XHJcbiAgICAgICAgcmV0dXJuIHRwbDtcclxuICAgIH07XHJcbiAgICBjTGlzdC5lbXB0eSgpLmFkZENsYXNzKCdib3JkZXItbGlnaHQtY29sb3InKTtcclxuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCBpbmZvID0gaXRlbS5pbmZvO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrcG9pbnQgPSBpdGVtLmNoZWNrcG9pbnQgfHwgaXRlbTtcclxuXHJcbiAgICAgICAgaWYgKCFpbmZvKSB7XHJcbiAgICAgICAgICAgICQoYDxsaSBjbGFzcz1cIm1lZGlhIHB5LTNcIiBkYXRhLXVzZXJuYW1lPVwiJHtpdGVtLnVzZXJuYW1lfVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cIm1sLTMgcm91bmRlZFwiIGFsdD1cImRlZmF1bHQgYXZhdGFyXCIgc3JjPVwiJHtkZWZhdWx0QXZhdGFyU3JjfVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWJvZHkgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB1c2VyLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHsoaXRlbS51c2VybmFtZSkgPyBgPGg0IGNsYXNzPVwibXQtMCBtYi0xIG5hbWVcIj4ke2l0ZW0udXNlcm5hbWV9PC9oND5gIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB1c2VyLWNoZWNrcG9pbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHsoY2hlY2twb2ludC5zdGF0dXMgPT09ICdUUklHR0VSRUQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBqc19wYXNzLWNoZWNrcG9pbnQtYnRuIGQtYmxvY2sgbXgtYXV0b1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jaGVja3BvaW50LXR5cGU9XCIke2NoZWNrcG9pbnQudHlwZSB8fCAnRU1BSUwnfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXVzZXJuYW1lPVwiJHtpdGVtLnVzZXJuYW1lIHx8ICcnfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjc2VjdXJpdHktY29kZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEta2V5XCI+PC9pPtCf0YDQvtC50YLQuCDRh9C10LrQv9C+0LjQvdGCPC9idXR0b24+YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGAodG9kbyljaGVja3BvaW50IHN0YXR1cyAtICR7Y2hlY2twb2ludC5zdGF0dXN9YH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAke3N0YXRzKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5gKS5hcHBlbmRUbyhjTGlzdCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChgPGxpIGNsYXNzPVwibWVkaWEgcHktM1wiIGRhdGEtdXNlcm5hbWU9XCIke2l0ZW0udXNlcm5hbWV9XCI+XHJcbiAgICAgICAgICAgICR7KGluZm9bJ3Byb2ZpbGVfcGljX3VybCddKVxyXG4gICAgICAgICAgICAgICAgPyBgPGltZyBjbGFzcz1cIm1sLTMgcm91bmRlZFwiIGFsdD1cIlVzZXIgcGhvdG9cIiBzcmM9XCIke2luZm9bJ3Byb2ZpbGVfcGljX3VybCddfVwiPmBcclxuICAgICAgICAgICAgICAgIDogYDxpbWcgY2xhc3M9XCJtbC0zIHJvdW5kZWRcIiBhbHQ9XCJkZWZhdWx0IGF2YXRhclwiIHNyYz1cIiR7ZGVmYXVsdEF2YXRhclNyY31cIj5gfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEtYm9keSBkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgdXNlci1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHsoaXRlbS51c2VybmFtZSkgPyBgPHAgY2xhc3M9XCJtdC0wIG1iLTEgbmFtZSBsZWFkXCI+JHtpdGVtLnVzZXJuYW1lfTwvcD5gIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgJHsoaW5mby5uYW1lKSA/IGA8aDQgY2xhc3M9XCJtdC0wIG1iLTFcIj4ke2luZm8ubmFtZX08L2g0PmAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAkeyhpbmZvLm5hbWUpID8gJycgOiAnJyAgLyogJHsoaW5mby5lbWFpbCkgPyBgPHAgY2xhc3M9XCJtdC0wIG1iLTFcIj4ke2luZm8uZW1haWx9PC9wPmAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgJHsoaW5mby5waG9uZSkgPyBgPHAgY2xhc3M9XCJtdC0wIG1iLTFcIj4ke2luZm8ucGhvbmV9PC9wPmAgOiAnJ30gKi8gfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHVzZXItY2hlY2twb2ludFwiPiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICR7KGNoZWNrcG9pbnQuc3RhdHVzID09PSAnVFJJR0dFUkVEJylcclxuICAgICAgICAgICAgICAgICAgICA/IGA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBqc19wYXNzLWNoZWNrcG9pbnQtYnRuIGQtYmxvY2sgbXgtYXV0b1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jaGVja3BvaW50LXR5cGU9XCIke2NoZWNrcG9pbnQudHlwZSB8fCAnRU1BSUwnfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXVzZXJuYW1lPVwiJHtpdGVtLnVzZXJuYW1lIHx8ICcnfVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI3NlY3VyaXR5LWNvZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEta2V5XCI+PC9pPtCf0YDQvtC50YLQuCDRh9C10LrQv9C+0LjQvdGCPC9idXR0b24+YFxyXG4gICAgICAgICAgICAgICAgICAgIDogJyd9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICR7c3RhdHMoaW5mbyl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbGk+YCkuYXBwZW5kVG8oY0xpc3QpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coJ3B1Ymxpc2ggUHViU3ViJywgQ09OU1QuZXZlbnRzLmluc3RhZ3JhbUFjY291bnMuSU5TVEFHUkFNX0FDQ09VTlNfUkVOREVSRUQpO1xyXG4gICAgd2luZG93LlB1YlN1Yi5wdWJsaXNoKENPTlNULmV2ZW50cy5pbnN0YWdyYW1BY2NvdW5zLklOU1RBR1JBTV9BQ0NPVU5TX1JFTkRFUkVEKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEluaXQgaGVhZGVyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIGNvbnN0ICRtc2dMaXN0ID0gJCgnLmFjY291bnRzLWxpc3QnKTtcclxuICAgIC8vIGNoZWNrIHdlIGFyZSBpbiBwcm9maWxlIHBhZ2VcclxuICAgIGlmICghJG1zZ0xpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdG9rZW4gPSBVc2VyLmdldFRva2VuKCk7IC8vIHVwZCB0bzogVXNlci5nZXRUb2tlbigpXHJcbiAgICBjb25zdCBtZXRhZGF0YSA9IFVzZXIuZ2V0TWV0YWRhdGEodG9rZW4pO1xyXG4gICAgY29uc3QgcmVzZW5kUmVxdWVzdCA9ICgpID0+IFVzZXIuZ2V0TWV0YWRhdGEodG9rZW4pO1xyXG4gICAgbGV0IGlzU2VuZFJlcU9uY2UgPSBmYWxzZTtcclxuICAgIGNvbnN0IGNoZWNrUmVzcG9uc2UgPSAocmVzdWx0LCBpc1Jlc2VuZFJlcXVlc3QpID0+IHtcclxuICAgICAgICBpZiAoIXJlc3VsdC5zdGF0dXMuc3RhdGUgPT09ICdvaycgfHwgIXJlc3VsdC5kYXRhIHx8ICEkbXNnTGlzdC5sZW5ndGggfHwgaXNSZXNlbmRSZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgIC8vINC/0YDQvtCy0LXRgNGP0Lwg0L7QtNC40L0g0YDQsNC3INC90LDQu9C40YfQuNC1IHJlc3VsdC5kYXRhLmFjY291bnRzLmluZm9cclxuICAgICAgICAgICAgJG1zZ0xpc3QuZW1wdHkoKTtcclxuICAgICAgICAgICAgJChgPGxpIGNsYXNzPVwibWVkaWFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwibXQtMCBtYi0zXCI+0J3QuCDQvtC00L3QvtCz0L4g0JDQutC60LDRg9C90YLQsCDQvdC1INC00L7QsdCw0LLQu9C10L3QvjwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5gKS5hcHBlbmRUbygkbXNnTGlzdCk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzZW5kUmVxdWVzdCgpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrUmVzcG9uc2UocmVzdWx0LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXF1ZXN0IHJlc2VuZCcpO1xyXG4gICAgICAgICAgICB9LCAzNTAwKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDQstGL0LLQvtC0INGA0LXQt9GD0LvRjNGC0LDRgtC+0LIgKGRhdGEuYWNjb3VudHMuaW5mbylcclxuICAgICAgICAkKCcucHJvZmlsZS11c2VyIC5zcGlubmVyLWJveCcpLmFkZENsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICBmaWxsTGlzdCgkbXNnTGlzdCwgcmVzdWx0LmRhdGEuYWNjb3VudHMpO1xyXG4gICAgICAgIGFkZExpc3RIYW5kbGVyKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGNoZWNrIHdlIGFyZSBpbiBwcm9maWxlIHBhZ2VcclxuICAgIGlmICghJG1zZ0xpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZE9uTG9hZEhhbmRsZXJzKCk7XHJcblxyXG4gICAgLy8g0LzQvtC20LXRgiDQuNC90YTQviDQvtGC0YHRg9GC0YHQstC+0LLQsNGC0YwgLSDRgdC00LXQu9Cw0YLRjCDQtdGJ0LUg0YDQsNC3INC30LDQv9GA0L7RgSDRh9C10YDQtdC3IDMg0YHQtdC6LlxyXG5cclxuICAgIG1ldGFkYXRhLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIC8vINC/0YDQvtCy0LXRgNGP0Lwg0L7QtNC40L0g0YDQsNC3INC90LDQu9C40YfQuNC1IHJlc3VsdC5kYXRhLmFjY291bnRzLmluZm9cclxuICAgICAgICBsZXQgaXNSZXNlbmRSZXF1ZXN0ID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5kYXRhICYmIHJlc3VsdC5kYXRhLmFjY291bnRzICYmICFpc1NlbmRSZXFPbmNlKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5kYXRhLmFjY291bnRzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghaXRlbS5pbmZvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNSZXNlbmRSZXF1ZXN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpc1NlbmRSZXFPbmNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjaGVja1Jlc3BvbnNlKHJlc3VsdCwgaXNSZXNlbmRSZXF1ZXN0KTtcclxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSgkKCcuZXJyb3ItbXNnJyksXHJcbiAgICAgICAgICAgICAgICBlcnIuc3RhdHVzIHx8ICcnLFxyXG4gICAgICAgICAgICAgICAgJ9Cd0LUg0L/QvtC70YPRh9C40LvQvtGB0Ywg0LfQsNCz0YDRg9C30LjRgtGMINC00L7RgdGC0YPQv9C90YvQtSBJbnN0YWdyYW0g0LDQutC60LDRg9C90YLRiycpO1xyXG4gICAgICAgIH0sIDMwMDApO1xyXG4gICAgICAgICQoJy5zcGlubmVyLWJveCcpLmFkZENsYXNzKCdkLW5vbmUnKTtcclxuICAgIH0pO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3MvaW5zdGFncmFtLWFjY291bnRzLWxpc3QvaW5zdGFncmFtLWFjY291bnRzLWxpc3QuanMiLCIvKiBlc2xpbnQtZGlzYWJsZSBzb3J0LXZhcnMgKi9cclxuLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3VzZXInO1xyXG5pbXBvcnQgUHViU3ViIGZyb20gJ3B1YnN1Yi1qcyc7IC8vIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3B1YnN1Yi1qc1xyXG5pbXBvcnQgY29va2llU3RvcmFnZSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29va2llJztcclxuLy8gaW1wb3J0IFZhbGlkYXRvciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvZm9ybS12YWxpZGF0b3InO1xyXG5pbXBvcnQgdmlld1V0aWxzIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy92aWV3JztcclxuaW1wb3J0IHtDT05TVH0gZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2NvbnN0cyc7XHJcblxyXG4vLyB3aW5kb3cuJCA9ICQ7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTG9naW5Gb3JtKHNlbGVjdG9yQ3NzKSB7XHJcbiAgICBjb25zdCB7X2Zvcm1JZCwgX2J1dHRvblN1Ym1pdElkLCBfc2hvd0xvZ2luQm94QnRuSWQsIF9sb2dpbkJveH0gPSBzZWxlY3RvckNzcztcclxuICAgIGNvbnN0IHVzZXIgPSBVc2VyLCAvLyBzZXJ2aWNlXHJcbiAgICAgICAgJGZvcm0gPSAkKF9mb3JtSWQpLFxyXG4gICAgICAgICRlbWFpbCA9ICRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJtYWlsXCJdJyksXHJcbiAgICAgICAgJHRleHRBcmVhRGVzY3JpcHRpb24gPSAkKCcjZGVzY3JpcHRpb24nKTtcclxuICAgIC8vIGNvbnN0IG9wZW5lZENsYXNzID0gJ2QtYmxvY2snO1xyXG4gICAgLy8gY29uc3QgY2xvc2VDbGFzcyA9ICdkLW5vbmUnO1xyXG5cclxuICAgIGNvbnN0IHVzZXJMb2dpbkhlYWRlciA9IChfZm9ybURhdGEpID0+IHtcclxuICAgICAgICBjb25zdCBjYkVycm9yID0gKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAkKF9sb2dpbkJveCkuYXBwZW5kKCc8cD5yZXN1bHQuc3RhdHVzLm1lc3NhZ2U8L3A+Jyk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHVzZXIubG9naW4oX2Zvcm1EYXRhLCBjYkVycm9yKVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5kYXRhICYmIHJlc3VsdC5kYXRhLnRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2F2ZSB0aGUgaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGNvb2tpZVN0b3JhZ2Uuc2V0KENPTlNULmNvb2tpZVN0b3JhZ2UudG9rZW4sIHJlc3VsdC5kYXRhLnRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcubmF2LWxpbmsuanNfbG9nT3V0JykucGFyZW50KCkuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXF1ZXN0IHN1Y2NlZWRlZCB3aXRoIEpTT04gcmVzcG9uc2UnLCByZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UoJHRleHRBcmVhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMubWVzc2FnZSB8fCAnTG9naW4gc3VjY3Nlc3MnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LnN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSh0aGlzLiR0ZXh0QXJlYURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgPHA+c3RhdHVzOiAke3Jlc3VsdC5zdGF0dXMuc3RhdGV9PC9wPjxwPiBtZXNzYWdlOiAke3Jlc3VsdC5zdGF0dXMubWVzc2FnZX08L3A+YCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKCR0ZXh0QXJlYURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLm1lc3NhZ2UgfHwgJ0xvZ2luIGVycm9yJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzdWJtaXRGb3JtID0gZnVuY3Rpb24oZm9ybURhdGFPYmopIHtcclxuICAgICAgICBjb25zdCBlbWFpbCA9ICRlbWFpbC52YWwoKSxcclxuICAgICAgICAgICAgcGFzc3dvcmQgPSAkZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwicGFzc1wiXScpLnZhbCgpLFxyXG4gICAgICAgICAgICBfZm9ybURhdGEgPSBmb3JtRGF0YU9iaiB8fCB7ZW1haWwsIHBhc3N3b3JkfTtcclxuXHJcbiAgICAgICAgaWYgKHNlbGVjdG9yQ3NzLmlzTG9naW5JbnN0YWdyYW0pIHtcclxuICAgICAgICAgICAgLy8gdG9kbzogZGVsZXRlIG1lXHJcbiAgICAgICAgICAgIC8vIGFkZEluc3RhZ3JhbUFjY291bnQoe3VzZXJuYW1lOiAkZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwidXNlcm5hbWVcIl0nKS52YWwoKSwgcGFzc3dvcmR9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkZW1haWwudmFsKCRlbWFpbC52YWwoKS50b0xvY2FsZUxvd2VyQ2FzZSgpKTtcclxuICAgICAgICAgICAgdXNlckxvZ2luSGVhZGVyKF9mb3JtRGF0YSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBQdWJTdWIucHVibGlzaChDT05TVC5ldmVudHMuVVNFUl9MT0dHRUQsICdsb2dpbicpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGxvZ091dCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvb2tpZVN0b3JhZ2UucmVtb3ZlKENPTlNULmNvb2tpZVN0b3JhZ2UudG9rZW4pO1xyXG4gICAgICAgIFB1YlN1Yi5wdWJsaXNoKENPTlNULmV2ZW50cy5VU0VSX0xPR09VVCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGJpbmRFdmVudHMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCAkc2hvd0xvZ2luQm94QnRuSWQgPSAkKF9zaG93TG9naW5Cb3hCdG5JZCk7XHJcbiAgICAgICAgY29uc3QgJGxvZ2luQm94ID0gJChfbG9naW5Cb3gpO1xyXG4gICAgICAgIGNvbnN0IG9wZW5lZENsYXNzID0gJ2QtYmxvY2snO1xyXG4gICAgICAgIGNvbnN0IGNsb3NlQ2xhc3MgPSAnZC1ub25lJztcclxuXHJcbiAgICAgICAgJHNob3dMb2dpbkJveEJ0bklkLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzZWxlY3RvckNzcy5pc0xvZ2luSW5zdGFncmFtKSB7XHJcbiAgICAgICAgICAgICAgICAkbG9naW5Cb3guY3NzKHsndG9wJzogMCwgJ3JpZ2h0JzogMH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdiZy1saWdodCBib3JkZXIgbXQtNSBteC1hdXRvIHBvc2l0aW9uLWFic29sdXRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJGxvZ2luQm94LmFkZENsYXNzKG9wZW5lZENsYXNzKS5yZW1vdmVDbGFzcyhjbG9zZUNsYXNzKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgJGJ1dHRvblN1Ym1pdCA9ICQoX2J1dHRvblN1Ym1pdElkKSxcclxuICAgICAgICAgICAgY3NzVmFsaWRhdGlvbkNsYXNzID0gJ2Zvcm0tdmFsaWRhdGlvbic7XHJcblxyXG4gICAgICAgICRidXR0b25TdWJtaXQub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zdCBmb3JtID0gJGZvcm0uZ2V0KDApO1xyXG4gICAgICAgICAgICAvLyBjb25zdCB2YWxpZGF0b3IgPSBuZXcgVmFsaWRhdG9yKCRmb3JtKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codmFsaWRhdG9yLnZhbGlkYXRlKCkpO1xyXG4gICAgICAgICAgICBpZiAoZm9ybS5jaGVja1ZhbGlkaXR5KCkgJiYgdmlld1V0aWxzLmlzRW1haWwoJGVtYWlsLnZhbCgpKSkge1xyXG4gICAgICAgICAgICAgICAgc3VibWl0Rm9ybSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gSGlnaGxpZ2h0IGVycm9yc1xyXG4gICAgICAgICAgICAgICAgaWYgKGZvcm0ucmVwb3J0VmFsaWRpdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtLnJlcG9ydFZhbGlkaXR5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAkZm9ybS5hZGRDbGFzcyhjc3NWYWxpZGF0aW9uQ2xhc3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5uYXYtbGluay5qc19sb2dPdXQnKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGxvZ091dCgpO1xyXG4gICAgICAgICAgICAkKGUudGFyZ2V0KS5wYXJlbnQoKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UoJHRleHRBcmVhRGVzY3JpcHRpb24sICdMb2dnZWQgb3V0Jyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFB1YlN1Yi5zdWJzY3JpYmUoQ09OU1QuZXZlbnRzLlVTRVJfTE9HT1VULCAobXNnKSA9PiB7XHJcbiAgICAgICAgICAgICQoQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyTmF2TG9naW5CdG4pLmFkZENsYXNzKG9wZW5lZENsYXNzKS5yZW1vdmVDbGFzcyhjbG9zZUNsYXNzKTsgLy8gLnNob3coKTtcclxuICAgICAgICAgICAgJChDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJSZWdCdG4pLmFkZENsYXNzKG9wZW5lZENsYXNzKS5yZW1vdmVDbGFzcyhjbG9zZUNsYXNzKTtcclxuICAgICAgICAgICAgJCgnLm5hdi1saW5rLmpzX2xvZ091dCcpLmFkZENsYXNzKGNsb3NlQ2xhc3MpLnJlbW92ZUNsYXNzKG9wZW5lZENsYXNzKTsgLy8gLmhpZGUoKTtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3JMb2dpblN0YXRlID0gJy5qc19tZXNzYWdlX2xvZ2dlZC0tdGV4dCc7XHJcbiAgICAgICAgICAgICQoc2VsZWN0b3JMb2dpblN0YXRlKS50ZXh0KCfQktGLINCy0YvRiNC70Lgg0LjQtyDQsNC60LrQsNGD0L3RgtCwJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpc0xvZ2luQnRuQ2xpY2sgPSAkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnbmF2Lm5hdmJhcicpLmZpbmQoJGxvZ2luQm94KS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzQWRkSW5zdGFncmFtQnRuQ2xpY2tlZCA9ICQoZXZlbnQudGFyZ2V0KS5hdHRyKCdpZCcpID09PSBDT05TVC51aVNlbGVjdG9ycy5pbnN0YWdyYW0uYWRkQWNjb3VudEJ0bklkO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFpc0xvZ2luQnRuQ2xpY2sgJiYgJGxvZ2luQm94Lmhhc0NsYXNzKG9wZW5lZENsYXNzKSAmJiAhaXNBZGRJbnN0YWdyYW1CdG5DbGlja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAkbG9naW5Cb3guYWRkQ2xhc3MoY2xvc2VDbGFzcykucmVtb3ZlQ2xhc3Mob3BlbmVkQ2xhc3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAgICAgYmluZEV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5pdFxyXG4gICAgfTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5qcyIsImltcG9ydCBNZXRlb3JFbW9qaSBmcm9tICdtZXRlb3ItZW1vamknO1xyXG4vLyBpbXBvcnQgcXEgZnJvbSAnZmluZS11cGxvYWRlcic7IC8vdG9kbzogZmluZS11cGxvYWRlXHJcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy91c2VyJztcclxuaW1wb3J0IFVzZXJDb252ZXJzYXRpb24gZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2FwaS11c2VyLWRpcmVjdCc7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9zcGlubmVyJztcclxuLy8gaW1wb3J0IFB1YlN1YiBmcm9tICdwdWJzdWItanMnOy8vIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3B1YnN1Yi1qc1xyXG5pbXBvcnQge0NPTlNUfSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29uc3RzJztcclxuXHJcbmNvbnN0IHRva2VuID0gVXNlci5nZXRUb2tlbigpO1xyXG5jb25zdCAkbXNnTGlzdCA9ICQoJy5tZXNzYWdlcy1saXN0Jyk7XHJcbmxldCB1cGRhdGVJbnRlcnZhbCA9ICcnO1xyXG5sZXQgaW50ZXJ2YWxJZCA9IGZhbHNlO1xyXG5cclxuZnVuY3Rpb24gaXNJbk1lc3NhZ2VQYWdlKCkge1xyXG4gICAgY29uc3QgJG1zZ0xpc3QgPSAkKCcubWVzc2FnZXMtbGlzdCcpO1xyXG4gICAgY29uc3QgJHVzZXJMaXN0ID0gJCgnLm1lc3NhZ2VzLXVzZXItbGlzdCcpO1xyXG4gICAgcmV0dXJuICEhJG1zZ0xpc3QubGVuZ3RoICYmICEhJHVzZXJMaXN0Lmxlbmd0aDtcclxufVxyXG4kKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XHJcbiAgICBpZiAoIWlzSW5NZXNzYWdlUGFnZSgpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXHJcbiAgICBjb25zdCBtID0gbmV3IE1ldGVvckVtb2ppKCk7XHJcbiAgICBjb25zdCAkcGlja2VyID0gJCgndGV4dGFyZWFbZGF0YS1tZXRlb3ItZW1vamk9XCJ0cnVlXCJdIH4gZGl2Jyk7XHJcbiAgICBjb25zdCBzdHlsZSA9ICRwaWNrZXIuYXR0cignc3R5bGUnKTtcclxuICAgIGNvbnN0IHN0eWxlTmV3ID0gc3R5bGUucmVwbGFjZSgndG9wOiAzMHB4OycsICd0b3A6IC0yMTBweDsnKTtcclxuICAgICRwaWNrZXIuYXR0cignc3R5bGUnLCBzdHlsZU5ldyk7XHJcblxyXG4gICAgLypcclxuICAgIC8vdG9kbzogZmluZS11cGxvYWRlXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcclxuICAgIGNvbnN0IHJlc3RyaWN0ZWRVcGxvYWRlciA9IG5ldyBxcS5GaW5lVXBsb2FkZXIoe1xyXG4gICAgICAgIGVsZW1lbnQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaW5lLXVwbG9hZGVyLXZhbGlkYXRpb24nKSxcclxuICAgICAgICB0ZW1wbGF0ZTogJ3FxLXRlbXBsYXRlLXZhbGlkYXRpb24nLFxyXG4gICAgICAgIHJlcXVlc3Q6IHtcclxuICAgICAgICAgICAgZW5kcG9pbnQ6ICcvc2VydmVyL3VwbG9hZHMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0aHVtYm5haWxzOiB7XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyczoge1xyXG4gICAgICAgICAgICAgICAgd2FpdGluZ1BhdGg6ICdodHRwczovL2ZpbmV1cGxvYWRlci5jb20vc291cmNlL3BsYWNlaG9sZGVycy93YWl0aW5nLWdlbmVyaWMucG5nJywgLy8gJy9zb3VyY2UvcGxhY2Vob2xkZXJzL3dhaXRpbmctZ2VuZXJpYy5wbmcnLFxyXG4gICAgICAgICAgICAgICAgbm90QXZhaWxhYmxlUGF0aDogJ2h0dHBzOi8vZmluZXVwbG9hZGVyLmNvbS9zZXJ2ZXIvd2FpdGluZy1nZW5lcmljLnBuZycgLy8gJy9zb3VyY2UvcGxhY2Vob2xkZXJzL25vdF9hdmFpbGFibGUtZ2VuZXJpYy5wbmcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgICAgICAgYWxsb3dlZEV4dGVuc2lvbnM6IFsnanBlZycsICdqcGcnLCAndHh0J10sXHJcbiAgICAgICAgICAgIGl0ZW1MaW1pdDogMyxcclxuICAgICAgICAgICAgc2l6ZUxpbWl0OiA1MDAgKiAxMDI0XHJcbiAgICAgICAgfVxyXG4gICAgfSk7Ki9cclxufSk7XHJcblxyXG4vLyBtZXNzYWdlcy1saXN0XHJcbmZ1bmN0aW9uIGZpbGxMaXN0KCRsaXN0LCBkYXRhQXJyYXksIGlzQXBwZW50UHJldk1zZykge1xyXG4gICAgY29uc3QgaXRlbXMgPSBkYXRhQXJyYXk7XHJcbiAgICBjb25zdCBjTGlzdCA9ICRsaXN0O1xyXG4gICAgLy8gY29uc3QgZGVmYXVsdEF2YXRhclNyYyA9ICdodHRwczovL2kuaW1ndXIuY29tL2pOTlQ0TEUucG5nJztcclxuICAgIGNvbnN0IGluc2VydE1zZyA9ICh2YWx1ZSwgdHlwZSwgY3NzQ2xzKSA9PiB7XHJcbiAgICAgICAgbGV0IHN0ciA9ICcnO1xyXG4gICAgICAgIHN3aXRjaCAodHlwZS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3Bob3RvJzpcclxuICAgICAgICAgICAgICAgIHN0ciA9IGA8ZGl2IGNsYXNzPVwiY2hhdC1pbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7dmFsdWV9XCIgYWx0PVwiQ29udGVudCBJbWFnZVwiIGNsYXNzPVwiY29udGVudC1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+YDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdsaW5rJzpcclxuICAgICAgICAgICAgICAgIHN0ciA9IGA8ZGl2IGNsYXNzPVwiY2hhdC1pbWdcIj5cclxuICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIke3ZhbHVlfVwiPiR7dmFsdWV9PC9hPmA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDogc3RyID0gYDxkaXYgY2xhc3M9XCJjaGF0LXRleHRcIiA+JHt2YWx1ZX08L2Rpdj5gO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RyO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGFkZFRvTGlzdCA9IChpc0FwcGVudFByZXZNc2csICRsaSwgJGxpc3QpID0+IHtcclxuICAgICAgICBpZiAoaXNBcHBlbnRQcmV2TXNnKSB7XHJcbiAgICAgICAgICAgICRsaS5pbnNlcnRCZWZvcmUoJGxpc3QuZmluZCgnbGk6Zmlyc3QtY2hpbGQnKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGxpLmFwcGVuZFRvKCRsaXN0KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgaWYgKGlzQXBwZW50UHJldk1zZykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpc0FwcGVudFByZXZNc2cgdG8nLCBjTGlzdCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNMaXN0LmVtcHR5KCkuYWRkQ2xhc3MoJ2JvcmRlci1saWdodC1jb2xvcicpO1xyXG4gICAgfVxyXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBpdGVtO1xyXG4gICAgICAgIC8vIGNvbnN0IGNoZWNrcG9pbnQgPSBpdGVtLmNoZWNrcG9pbnQgfHwgaXRlbTtcclxuXHJcbiAgICAgICAgaWYgKG1lc3NhZ2Uuc2lkZS50b0xvd2VyQ2FzZSgpID09PSAnbGVmdCcpIHtcclxuICAgICAgICAgICAgY29uc3QgJGxpID0gJChgPGxpIGNsYXNzPVwiY2hhdC1pdGVtIGNoYXQtaXRlbS1sZWZ0IGNvbCBmbGV4LWNvbHVtbi1yZXZlcnNlXCIgdmFsdWU9XCIke21lc3NhZ2UudmFsdWV9XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAkeyhtZXNzYWdlWydwcm9maWxlX3BpY191cmwnXSlcclxuICAgICAgICAgICAgICAgICAgICA/IGA8ZGl2IGNsYXNzPVwiY2hhdC1pbWctYm94XCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke21lc3NhZ2VbJ3Byb2ZpbGVfcGljX3VybCddfVwiIGFsdD1cIlVzZXIgQXZhdGFyXCIgY2xhc3M9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2hhdC11c2VybmFtZSB0ZXh0LW11dGVkXCI+JHttZXNzYWdlLnVzZXJuYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAke2luc2VydE1zZyhtZXNzYWdlLnZhbHVlLCBtZXNzYWdlLnR5cGUpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiY2hhdC10aW1lLXRleHRcIj4ke1VzZXJDb252ZXJzYXRpb24uZ2V0Rm9ybWF0dGVkRGF0ZVV0aWwobWVzc2FnZS50aW1lc3RhbXApfTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5gKTtcclxuICAgICAgICAgICAgYWRkVG9MaXN0KGlzQXBwZW50UHJldk1zZywgJGxpLCBjTGlzdCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgJGxpID0gJChgPGxpIGNsYXNzPVwiY2hhdC1pdGVtIGNoYXQtaXRlbS1yaWdodCBjb2wgZmxleC1jb2x1bW4tcmV2ZXJzZVwiIHZhbHVlPVwiJHttZXNzYWdlLnZhbHVlfVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtpbnNlcnRNc2cobWVzc2FnZS52YWx1ZSwgbWVzc2FnZS50eXBlKX1cclxuICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJwdWxsLXJpZ2h0IGNoYXQtdGltZS10ZXh0XCI+JHtVc2VyQ29udmVyc2F0aW9uLmdldEZvcm1hdHRlZERhdGVVdGlsKG1lc3NhZ2UudGltZXN0YW1wKX08L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPmApO1xyXG4gICAgICAgICAgICBhZGRUb0xpc3QoaXNBcHBlbnRQcmV2TXNnLCAkbGksIGNMaXN0KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBhZGRQYWdpbmF0aW9uKCR3cmFwcGVyLCBwYWdpbmF0aW9uKSB7XHJcbiAgICBjb25zdCBjdXJzb3IgPSBwYWdpbmF0aW9uLnByZXZfY3Vyc29yO1xyXG4gICAgY29uc3QgJGJ1dHRvbiA9ICQoYDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSBsb2FkLW1vcmUgZC1mbGV4IHBvc2l0aW9uLWFic29sdXRlXCIgc3R5bGU9XCJ0b3A6IC00MnB4O1wiXHJcbiAgICAgICAgZGF0YS1jdXJzb3I9XCIke2N1cnNvcn1cIj7QtdGJ0LUg0LTQsNCy0LDQuSE8L2J1dHRvbj5gKTtcclxuXHJcbiAgICBpZiAoISR3cmFwcGVyLmNsb3Nlc3QoJy5tZXNzYWdlcy1saXN0LWJveCcpLmZpbmQoJy5sb2FkLW1vcmUnKS5sZW5ndGgpIHtcclxuICAgICAgICAkYnV0dG9uLmluc2VydEJlZm9yZSgkd3JhcHBlcikub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdXNlckRhdGEgPSAkKCcubWVzc2FnZXMtbGlzdCcpLmRhdGEoJ2NvbnZlcnNhdGlvbicpO1xyXG4gICAgICAgICAgICBjb25zdCB7dXNlcm5hbWUsIGNvbnZlcnNhdGlvbklkfSA9IHVzZXJEYXRhO1xyXG4gICAgICAgICAgICBTcGlubmVyLnN0YXJ0QnV0dG9uU3Bpbm5lcigkYnV0dG9uKTtcclxuICAgICAgICAgICAgVXNlckNvbnZlcnNhdGlvbi5nZXRNZXRhZGF0YURldGFpbENvbnZlcnNhdGlvbih0b2tlbiwge3VzZXJuYW1lLCBjb252ZXJzYXRpb25JZCwgY3Vyc29yfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVjZWl2ZSBtc2cnLCByZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgU3Bpbm5lci5zdG9wQnV0dG9uU3Bpbm5lcigkYnV0dG9uKTtcclxuICAgICAgICAgICAgICAgIGZpbGxMaXN0KCRtc2dMaXN0LCByZXN1bHQuZGF0YS5tZXRhLm1lc3NhZ2VzLCAnYXBwZW50UHJldk1zZycpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4vLyBtZXNzYWdlcy11c2VyLWxpc3RcclxuZnVuY3Rpb24gZmlsbFVzZXJMaXN0KCRsaXN0LCBkYXRhQXJyYXkpIHtcclxuICAgIGNvbnN0IGl0ZW1zID0gZGF0YUFycmF5Lm1ldGE7XHJcbiAgICBjb25zdCBjTGlzdCA9ICRsaXN0O1xyXG4gICAgY29uc3QgY29udmVyc2F0aW9uRGV0YWlsID0gZnVuY3Rpb24oaXRlbXMpIHtcclxuICAgICAgICBsZXQgdHBsID0gJyc7XHJcbiAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXRlbXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgdHBsICs9IGA8aW1nIHNyYz1cIiR7aXRlbVsncHJvZmlsZV9waWNfdXJsJ119XCIgY2xhc3M9XCJtZWRpYS1waG90byBtci0xIG1lZGlhLXBob3RvLS1ncm91cFwiIHN0eWxlPVwid2lkdGg6IDI0cHg7XCI+YDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRwbCArPSBgPGltZyBzcmM9XCIke2l0ZW1bJ3Byb2ZpbGVfcGljX3VybCddfVwiIGNsYXNzPVwibWVkaWEtcGhvdG8gbXItMVwiIHN0eWxlPVwid2lkdGg6IDI0cHg7XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAke2l0ZW0udXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L2g1PmA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoaXRlbXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICB0cGwgKz0gJzxoNSBjbGFzcz1cInRpdGxlXCI+0JPRgNGD0L/QvtCy0L7QuSDRh9Cw0YI8L2g1Pic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cGw7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgYWRkQ29udmVyc2F0aW9ucyA9IGZ1bmN0aW9uKGNvbnZlcnNhdGlvbnMpIHtcclxuICAgICAgICBsZXQgdHBsID0gJyc7XHJcbiAgICAgICAgY29udmVyc2F0aW9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHRwbCArPSBgPGRpdiBjbGFzcz1cIm1lZGlhIHAtMVwiIGRhdGEtY29udmVyc2F0aW9uLWlkPVwiJHtpdGVtLmlkfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7Y29udmVyc2F0aW9uRGV0YWlsKGl0ZW0udG8pfVxyXG4gICAgICAgICAgICAgICAgICAgICR7KGl0ZW1bJ2xhc3RfbWVzc2FnZSddICYmIChwYXJzZUludChpdGVtWydsYXN0X21lc3NhZ2UnXS5sZW5ndGgsIDEwKSkgPiAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGA8cCBjbGFzcz1cInN1bW1hcnkgJHtpdGVtWydpc191bnJlYWQnXSA/ICdmb250LXdlaWdodC1ib2xkJyA6ICd0ZXh0LW11dGVkJ31cIj4ke2l0ZW1bJ2xhc3RfbWVzc2FnZSddfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHtpdGVtWydpc191bnJlYWQnXSA/ICc8c3BhbiBjbGFzcz1cInN1bW1hcnktZG90XCI+PC9zcGFuPicgOiAnJ31gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRwbDtcclxuICAgIH07XHJcbiAgICBjTGlzdC5lbXB0eSgpLmFkZENsYXNzKCdib3JkZXItbGlnaHQtY29sb3InKTtcclxuICAgIC8vIHRvZG86IGZpeCBoYXJkLWNvZGUgIGltZyBzcmM9XCJodHRwczovL2kuaW1ndXIuY29tL2pOTlQ0TEUucG5nXCJcclxuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGlkeCkgPT4ge1xyXG4gICAgICAgICQoYDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbVwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNjb2xsYXBzZS0ke2lkeH1cIiBkYXRhLXVzZXJuYW1lPVwiJHtpdGVtLnVzZXJuYW1lfVwiIFxyXG4gICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cInRydWVcIiBhcmlhLWNvbnRyb2xzPVwiY29sbGFwc2UtJHtpZHh9XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYVwiIGlkPVwiaGVhZGluZy0ke2lkeH1cIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtci0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2kuaW1ndXIuY29tL2pOTlQ0TEUucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1lZGlhLXBob3RvXCI+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAkeyhpdGVtWyd1bnJlYWRfY29udmVyc2F0aW9ucyddID4gMCkgPyBgPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS1zZWNvbmRhcnkgcG9zaXRpb24tYWJzb2x1dGUgcC0yXCI+JHtpdGVtWyd1bnJlYWRfY29udmVyc2F0aW9ucyddfTwvc3Bhbj5gIDogJyd9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7aXRlbS51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiY29sbGFwc2UtJHtpZHh9XCIgY2xhc3M9XCJjb2xsYXBzZVwiIGFyaWEtbGFiZWxsZWRieT1cImhlYWRpbmctJHtpZHh9XCIgZGF0YS1wYXJlbnQ9XCIjYWNjb3JkaW9uXCI+XHJcbiAgICAgICAgICAgICAgICAke2FkZENvbnZlcnNhdGlvbnMoaXRlbS5jb252ZXJzYXRpb25zLCBpZHgpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5gKS5hcHBlbmRUbyhjTGlzdCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QW5kRmlsbFVzZXJMaXN0KGlzQWN0aXZlRmlyc3QpIHtcclxuICAgIGNvbnN0ICR1c2VyTGlzdCA9ICQoJy5tZXNzYWdlcy11c2VyLWxpc3QnKTtcclxuICAgIGNvbnN0IG1ldGFkYXRhID0gVXNlckNvbnZlcnNhdGlvbi5nZXRNZXRhZGF0YSh0b2tlbik7XHJcbiAgICBsZXQgcHJldkFjdGl2ZURpYWxvZ0lkID0gJyc7XHJcbiAgICBpZiAoIWlzQWN0aXZlRmlyc3QpIHtcclxuICAgICAgICBwcmV2QWN0aXZlRGlhbG9nSWQgPSAkdXNlckxpc3QuZmluZCgnbGkgLmNvbGxhcHNlLnNob3cnKS5hdHRyKCdpZCcpO1xyXG4gICAgfVxyXG4gICAgbWV0YWRhdGEudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgaWYgKCFyZXN1bHQuZGF0YSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc3VsdC5kYXRhLm1ldGEuc29ydCgoYSwgYikgPT4gYVsndXNlcm5hbWUnXS5sb2NhbGVDb21wYXJlKGJbJ3VzZXJuYW1lJ10pKTtcclxuICAgICAgICBmaWxsVXNlckxpc3QoJHVzZXJMaXN0LCByZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5kYXRhLnNldHRpbmdzICYmIHJlc3VsdC5kYXRhLnNldHRpbmdzLmludm9rZV9pbl9taWxsaXMpIHtcclxuICAgICAgICAgICAgdXBkYXRlSW50ZXJ2YWwgPSByZXN1bHQuZGF0YS5zZXR0aW5ncy5pbnZva2VfaW5fbWlsbGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNBY3RpdmVGaXJzdCkge1xyXG4gICAgICAgICAgICAkdXNlckxpc3QuZmluZCgnbGk6Zmlyc3QtY2hpbGQgLmNvbGxhcHNlJykuYWRkQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndHR0JywgcHJldkFjdGl2ZURpYWxvZ0lkKTtcclxuICAgICAgICAgICAgJChgIyR7cHJldkFjdGl2ZURpYWxvZ0lkfWApLmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFuZEZpbGxDb252ZXJzYXRpb24odXNlcm5hbWUsIGNvbnZlcnNhdGlvbklkLCBpc1Njcm9sbERvd24pIHtcclxuICAgIFVzZXJDb252ZXJzYXRpb24uZ2V0TWV0YWRhdGFEZXRhaWxDb252ZXJzYXRpb24odG9rZW4sIHt1c2VybmFtZSwgY29udmVyc2F0aW9uSWR9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBmaWxsTGlzdCgkbXNnTGlzdCwgcmVzdWx0LmRhdGEubWV0YS5tZXNzYWdlcyk7XHJcbiAgICAgICAgU3Bpbm5lci5yZW1vdmUoKTtcclxuICAgICAgICAkKCcuanNfc2VuZC1tZXNzYWdlLWJveCcpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAkKCcubWVzc2FnZXMtbGlzdCcpLmF0dHIoJ2RhdGEtY29udmVyc2F0aW9uJywgSlNPTi5zdHJpbmdpZnkoe3VzZXJuYW1lLCBjb252ZXJzYXRpb25JZH0pKTtcclxuXHJcbiAgICAgICAgaWYgKGlzU2Nyb2xsRG93bikge1xyXG4gICAgICAgICAgICAkbXNnTGlzdC5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogJG1zZ0xpc3RbMF0uc2Nyb2xsSGVpZ2h0IC0gJG1zZ0xpc3RbMF0uY2xpZW50SGVpZ2h0XHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmRhdGEubWV0YS5wYWdpbmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBhZGRQYWdpbmF0aW9uKCRtc2dMaXN0LCByZXN1bHQuZGF0YS5tZXRhLnBhZ2luYXRpb24pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCgnLm1lc3NhZ2VzLWxpc3QtYm94JykuZmluZCgnLmxvYWQtbW9yZScpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZEhhbmRsZXJzKCkge1xyXG4gICAgbGV0IGNvbnZlcnNhdGlvbklkID0gJyc7XHJcblxyXG4gICAgJCgnI3NlbmRNZXNzYWdlQnV0dG9uJykub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCAkdGV4dEFyZWEgPSAkKCcjc2VuZE1lc3NhZ2VUZXh0QXJlYScpO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gJHRleHRBcmVhLnZhbCgpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJEYXRhID0gJCgnLm1lc3NhZ2VzLWxpc3QnKS5kYXRhKCdjb252ZXJzYXRpb24nKTtcclxuICAgICAgICBjb25zdCB7dXNlcm5hbWUsIGNvbnZlcnNhdGlvbklkfSA9IHVzZXJEYXRhO1xyXG4gICAgICAgIFNwaW5uZXIuYWRkKCQoZS50YXJnZXQpLCAnc3Bpbm5lci1ib3gtLXNlbmRNc2cnKTtcclxuICAgICAgICBVc2VyQ29udmVyc2F0aW9uLnBvc3RNZXRhZGF0YURldGFpbENvbnZlcnNhdGlvbih0b2tlbiwge3VzZXJuYW1lLCBjb252ZXJzYXRpb25JZCwgdmFsdWV9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuc3RhdHVzICYmIHJlc3VsdC5zdGF0dXMuc3RhdGUgPT09ICdvaycpIHtcclxuICAgICAgICAgICAgICAgIGdldEFuZEZpbGxDb252ZXJzYXRpb24odXNlcm5hbWUsIGNvbnZlcnNhdGlvbklkKTtcclxuICAgICAgICAgICAgICAgICR0ZXh0QXJlYS52YWwoJycpO1xyXG4gICAgICAgICAgICAgICAgU3Bpbm5lci5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5QdWJTdWIucHVibGlzaChDT05TVC5ldmVudHMubWVzc2FnZXMuUkVDSUVWRV9ORVdfTUVTU0FHRSwge3VzZXJuYW1lLCBjb252ZXJzYXRpb25JZCwgdmFsdWUsIHJlc3VsdH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubGlzdC1ncm91cC1pdGVtIC5jb2xsYXBzZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLmxpc3QtZ3JvdXAtaXRlbScpLmRhdGEoJ3VzZXJuYW1lJyk7XHJcbiAgICAgICAgY29udmVyc2F0aW9uSWQgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcubWVkaWEnKS5kYXRhKCdjb252ZXJzYXRpb24taWQnKTtcclxuICAgICAgICBTcGlubmVyLmFkZCgkKCcjbWFpbkNoYXRQYXJ0JyksICdteS01IHB5LTUnKTtcclxuICAgICAgICBnZXRBbmRGaWxsQ29udmVyc2F0aW9uKHVzZXJuYW1lLCBjb252ZXJzYXRpb25JZCwgJ2lzU2Nyb2xsRG93bicpO1xyXG4gICAgICAgIHVwZGF0ZUludGVydmFsID0gKHVwZGF0ZUludGVydmFsID4gNjAwMCkgPyB1cGRhdGVJbnRlcnZhbCA6IDE1MDAwO1xyXG4gICAgICAgIC8vIHJlc2VuZCByZXF1ZXN0XHJcbiAgICAgICAgaWYgKGludGVydmFsSWQpIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgY29udmVyc2F0aW9uSWQgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcubWVkaWEnKS5kYXRhKCdjb252ZXJzYXRpb24taWQnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coaW50ZXJ2YWxJZCwgY29udmVyc2F0aW9uSWQpO1xyXG4gICAgICAgICAgICBnZXRBbmRGaWxsQ29udmVyc2F0aW9uKHVzZXJuYW1lLCBjb252ZXJzYXRpb25JZCk7XHJcbiAgICAgICAgICAgIGdldEFuZEZpbGxVc2VyTGlzdCgpO1xyXG4gICAgICAgIH0sIHVwZGF0ZUludGVydmFsKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHdpbmRvdy5QdWJTdWIuc3Vic2NyaWJlKENPTlNULmV2ZW50cy5tZXNzYWdlcy5SRUNJRVZFX05FV19NRVNTQUdFLCAoZXZlbnROYW1lLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc3Qge3VzZXJuYW1lLCBjb252ZXJzYXRpb25JZCwgdmFsdWUsIHJlc3VsdEZyb21TZXJ2ZXJ9ID0gZGF0YTtcclxuICAgICAgICBjb25zdCAkZGlhbG9nID0gJChgLm1lc3NhZ2VzLXVzZXItbGlzdCAubGlzdC1ncm91cC1pdGVtW2RhdGEtdXNlcm5hbWU9XCIke3VzZXJuYW1lfVwiXSBkaXZbZGF0YS1jb252ZXJzYXRpb24taWQ9XCIke2NvbnZlcnNhdGlvbklkfVwiXWApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzZXQgdmFsIGZyb20gdGV4dC1hcmVhJywgdmFsdWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXN1bHRGcm9tU2VydmVyOiAnLCByZXN1bHRGcm9tU2VydmVyKTtcclxuICAgICAgICAkZGlhbG9nLmZpbmQoJy5zdW1tYXJ5JykudGV4dCh2YWx1ZSk7XHJcblxyXG4gICAgICAgIC8vIG1ldGFkYXRhLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBmaWxsVXNlckxpc3QoJHVzZXJMaXN0LCByZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgLy8gICAgIGlmIChyZXN1bHQuZGF0YS5zZXR0aW5ncyAmJiByZXN1bHQuZGF0YS5zZXR0aW5ncy5pbnZva2VfaW5fbWlsbGlzKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB1cGRhdGVJbnRlcnZhbCA9IHJlc3VsdC5kYXRhLnNldHRpbmdzLmludm9rZV9pbl9taWxsaXM7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIC8vIGNoZWNrIHdlIGFyZSBpbiBjb3JyZWN0IHBhZ2UgKG1lc3NhZ2VzKVxyXG4gICAgaWYgKCFpc0luTWVzc2FnZVBhZ2UoKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbmRGaWxsVXNlckxpc3QoJ3NldEFjdGl2ZUZpcnN0Jyk7XHJcbiAgICBhZGRIYW5kbGVycygpO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3MvbWVzc2FnZXMvbWVzc2FnZXMuanMiLCIvLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgUHViU3ViIGZyb20gJ3B1YnN1Yi1qcyc7IC8vIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3B1YnN1Yi1qc1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdXNlcic7XHJcbmltcG9ydCBjb29raWVTdG9yYWdlIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb29raWUnO1xyXG5pbXBvcnQge0NPTlNUfSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29uc3RzJztcclxuaW1wb3J0IHZpZXdVdGlscyBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdmlldyc7XHJcblxyXG5jb25zdCBzZWxlY3RvckNscyA9IHtcclxuICAgIGZvcm06ICcuYXV0aC5yZWdpc3RlciAuZm9ybS1zaWduaW4nLFxyXG4gICAgc3VibWl0QnRuOiAnW3R5cGU9XCJzdWJtaXRcIl0nXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZ2lzdGVyRm9ybSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnVzZXIgPSBVc2VyO1xyXG4gICAgICAgIHRoaXMuJGZvcm0gPSAkKHNlbGVjdG9yQ2xzLmZvcm0pO1xyXG4gICAgICAgIHRoaXMuJGVtYWlsID0gdGhpcy4kZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwibWFpbFwiXScpO1xyXG4gICAgICAgIHRoaXMuJHRleHRBcmVhRGVzY3JpcHRpb24gPSAkKCcjZGVzY3JpcHRpb24nKTtcclxuICAgICAgICB0aGlzLmZvcm1EYXRhID0geydlbWFpbCc6ICd0ZXN0MV9lbWFpbEBtLnJ1JywgJ3Bhc3N3b3JkJzogJ3Bhc3N3b3JkJ307XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBpZiAoJCgnLmF1dGgucmVnaXN0ZXInKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN1Ym1pdEZvcm0oZm9ybURhdGFPYmopIHtcclxuICAgICAgICBjb25zdCBlbWFpbCA9IHRoaXMuJGVtYWlsLnZhbCgpO1xyXG4gICAgICAgIGNvbnN0ICRwYXNzd29yZCA9IHRoaXMuJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cInBhc3NcIl0nKSxcclxuICAgICAgICAgICAgJHBhc3N3b3JkQ29uZmlybSA9IHRoaXMuJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cInBhc3MtY29uZmlybVwiXScpLFxyXG4gICAgICAgICAgICBwYXNzd29yZCA9IHRoaXMuJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cInBhc3NcIl0nKS52YWwoKSxcclxuICAgICAgICAgICAgcGFzc3dvcmRDb25maXJtID0gdGhpcy4kZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwicGFzcy1jb25maXJtXCJdJykudmFsKCk7XHJcblxyXG4gICAgICAgIGlmIChwYXNzd29yZENvbmZpcm0gIT09IHBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgICRwYXNzd29yZC5hZGRDbGFzcygnaW5wdXQtZXJyb3InKTtcclxuICAgICAgICAgICAgJHBhc3N3b3JkQ29uZmlybS5hZGRDbGFzcygnaW5wdXQtZXJyb3InKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLiRlbWFpbC52YWwodGhpcy4kZW1haWwudmFsKCkudG9Mb2NhbGVMb3dlckNhc2UoKSk7XHJcbiAgICAgICAgdGhpcy5mb3JtRGF0YSA9IGZvcm1EYXRhT2JqIHx8IHtlbWFpbCwgcGFzc3dvcmR9O1xyXG5cclxuICAgICAgICB0aGlzLnVzZXIucmVnaXN0ZXIodGhpcy5mb3JtRGF0YSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5kYXRhICYmIHJlc3VsdC5kYXRhLnRva2VuKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNhdmUgdGhlIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBjb29raWVTdG9yYWdlLnNldChDT05TVC5jb29raWVTdG9yYWdlLmVtYWlsQ29uZmlybWVkLCAnZmFsc2UnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29va2llU3RvcmFnZS5zZXQoQ09OU1QuY29va2llU3RvcmFnZS50b2tlbiwgcmVzdWx0LmRhdGEudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXF1ZXN0IHN1Y2NlZWRlZCB3aXRoIEpTT04gcmVzcG9uc2UnLCByZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIFB1YlN1Yi5wdWJsaXNoKENPTlNULmV2ZW50cy5VU0VSX0xPR0dFRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSh0aGlzLiR0ZXh0QXJlYURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLm1lc3NhZ2UgfHwgJ1JlZ2lzdGVyIGFuZCBMb2dpbiBzdWNjc2VzcycpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKHRoaXMuJHRleHRBcmVhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMubWVzc2FnZSB8fCAnbm8gcmVzdWx0LmRhdGEgZm91bmQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UodGhpcy4kdGV4dEFyZWFEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5zdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmxvZ2luLWJveCcpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVxdWVzdCBmYWlsZWQnLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKHRoaXMuJHRleHRBcmVhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZG8gc29tZXRoaW5nJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcbiAgICAgICAgY29uc3QgcmVnaXN0ZXJCb3ggPSBDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJSZWdCb3g7IC8vICduYXYgLnJlZ2lzdGVyLWJveCc7XHJcbiAgICAgICAgY29uc3Qgb3BlbmVkQ2xhc3MgPSAnZC1ibG9jayc7XHJcbiAgICAgICAgY29uc3QgY2xvc2VDbGFzcyA9ICdkLW5vbmUnO1xyXG4gICAgICAgIGNvbnN0ICRidG4gPSAkKHNlbGVjdG9yQ2xzLnN1Ym1pdEJ0biksXHJcbiAgICAgICAgICAgIGNzc1ZhbGlkYXRpb25DbGFzcyA9ICdmb3JtLXZhbGlkYXRpb24nO1xyXG5cclxuICAgICAgICAkYnRuLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSB0aGlzLiRmb3JtLmdldCgwKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCEkYnRuLmlzKCc6ZGlzYWJsZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZvcm0uY2hlY2tWYWxpZGl0eSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gJGJ0bi5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0Rm9ybSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBIaWdobGlnaHQgZXJyb3JzXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm0ucmVwb3J0VmFsaWRpdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRmb3JtLmFkZENsYXNzKGNzc1ZhbGlkYXRpb25DbGFzcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzUmVnQnRuQ2xpY2sgPSAkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnbmF2Lm5hdmJhcicpLmZpbmQoJy5yZWdpc3Rlci1ib3gnKS5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWlzUmVnQnRuQ2xpY2sgJiYgJChyZWdpc3RlckJveCkuaGFzQ2xhc3Mob3BlbmVkQ2xhc3MpKSB7XHJcbiAgICAgICAgICAgICAgICAkKHJlZ2lzdGVyQm94KS5hZGRDbGFzcyhjbG9zZUNsYXNzKS5yZW1vdmVDbGFzcyhvcGVuZWRDbGFzcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL3JlZ2lzdGVyLWZvcm0vcmVnaXN0ZXItZm9ybS5qcyIsIi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCB7Q09OU1R9IGZyb20gJy4vY29uc3RzJztcclxuaW1wb3J0IE5ldHdvcmsgZnJvbSAnLi9uZXR3b3JrJztcclxuaW1wb3J0IENvb2tpZVN0b3JhZ2UgZnJvbSAnLi9jb29raWUnO1xyXG5cclxuY2xhc3MgVXNlclRhc2tNYW5hZ2VyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm5ldHdvcmsgPSBuZXcgTmV0d29yaygpO1xyXG4gICAgICAgIHRoaXMuY29va2llU3RvcmFnZSA9IENvb2tpZVN0b3JhZ2U7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5nUG9zdCA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGlzTG9nZ2VkSW4oKSB7XHJcbiAgICAvLyAgICAgcmV0dXJuICEhdGhpcy5nZXRUb2tlbigpO1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIGlzRW1haWxDb25maXJtZWQoKSB7XHJcbiAgICAvLyAgICAgcmV0dXJuICh0aGlzLmNvb2tpZVN0b3JhZ2UuZ2V0KENPTlNULmNvb2tpZVN0b3JhZ2UuZW1haWxDb25maXJtZWQpID09PSAnY29uZmlybWVkJyk7XHJcbiAgICAvLyB9XHJcbiAgICBnZXRUb2tlbihhc0hlYWRlcikge1xyXG4gICAgICAgIGNvbnN0IGNvb2tpZVRva2VuID0gdGhpcy5jb29raWVTdG9yYWdlLmdldChDT05TVC5jb29raWVTdG9yYWdlLnRva2VuKTtcclxuICAgICAgICByZXR1cm4gKGFzSGVhZGVyKSA/IHtoZWFkZXJzOiB7dG9rZW46IGNvb2tpZVRva2VufX0gOiBjb29raWVUb2tlbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRNZXRhZGF0YSh1c2Vyc05hbWUsIGNiRXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KGAke0NPTlNULmdldFBhdGgoJ2luc3RhZ3JhbVRhc2tNYW5hZ2VyX2dldE1ldGFEYXRhJyl9YCxcclxuICAgICAgICAgICAgdGhpcy5nZXRUb2tlbignYXNIZWFkZXInKSwgY2JFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGFza1R5cGVzKGRldGFpbHMsIGNiRXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KGAke0NPTlNULmdldFBhdGgoJ2luc3RhZ3JhbVRhc2tNYW5hZ2VyX2dldFRhc2tUeXBlcycpfWAsXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VG9rZW4oJ2FzSGVhZGVyJyksIGNiRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERlZmF1bHRDb25maWdzKGNiRXJyb3IpIHtcclxuICAgICAgICBjb25zdCBkZXRhaWxzID0ge1xyXG4gICAgICAgICAgICBTVFJBVEVHWV9UWVBFOiAnRk9MTE9XSU5HJyxcclxuICAgICAgICAgICAgU1RSQVRFR1lfU1VCVFlQRTogJ0ZPTExPV0lOR19MSVNUJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgdXJsID0gYCR7Q09OU1QuZ2V0UGF0aCgnaW5zdGFncmFtVGFza01hbmFnZXJfZ2V0RGVmYXVsdENvbmZpZ3MnKX0vJHtkZXRhaWxzLlNUUkFURUdZX1RZUEV9L3N1YnR5cGUvJHtkZXRhaWxzLlNUUkFURUdZX1NVQlRZUEV9YDtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KHVybCxcclxuICAgICAgICAgICAgdGhpcy5nZXRUb2tlbignYXNIZWFkZXInKSwgY2JFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcG9zdFN0YXJ0Rm9sbG93aW5nTGlzdChib2R5LCBjYkVycm9yKSB7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZyA9IHtcclxuICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdCxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdC5oZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgJ3Rva2VuJzogdGhpcy5nZXRUb2tlbigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHNldHRpbmcuYm9keSA9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xyXG4gICAgICAgIC8vIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAvLyAgICAgJ3VzZXJuYW1lJzogJ2JyYW5keWxlbmhhcnQnLFxyXG4gICAgICAgIC8vICAgICAndHlwZSc6ICdGT0xMT1dJTkcnLFxyXG4gICAgICAgIC8vICAgICAnc3VidHlwZSc6ICdGT0xMT1dJTkdfTElTVCcsXHJcbiAgICAgICAgLy8gICAgICd1c2VyX2RlZmF1bHRfY29uZmlnJzoge1xyXG4gICAgICAgIC8vICAgICAgICAgJ3Rhc2tfbW9kZSc6ICdTQUZFJyxcclxuICAgICAgICAvLyAgICAgICAgICdmb2xsb3dpbmdfY3JpdGVyaWEnOiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgJ2xpbWl0JzogNzUwMCxcclxuICAgICAgICAvLyAgICAgICAgICAgICAndW5mb2xsb3dfdGhlbic6IHRydWUsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgJ2ZvbGxvd19vbl9jbG9zZWRfcHJvZmlsZXMnOiB0cnVlLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICdoYXZlX3Bvc3RzJzoge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAnZnJvbSc6IDMsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICd0byc6IDk5OTk5OVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgJ2hhdmVfZm9sbG93ZXJzJzoge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAnZnJvbSc6IDMwLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAndG8nOiA5OTk5OVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgJ2hhdmVfZm9sbG93aW5ncyc6IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgJ2Zyb20nOiAwLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAndG8nOiA5OTlcclxuICAgICAgICAvLyAgICAgICAgICAgICB9LFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICdnZW5kZXInOiAnQU5ZJ1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgIC8vICAgICAndXNlcl9jdXN0b21fY29uZmlnJzoge1xyXG4gICAgICAgIC8vICAgICAgICAgJ3VzZXJzJzogWzEyNDk2OTI2LCAyNTE0MDA4ODRdXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChgJHtDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1UYXNrTWFuYWdlcl9wb3N0U3RhcnRGb2xsb3dpbmdMaXN0Jyl9YCxcclxuICAgICAgICAgICAgc2V0dGluZywgY2JFcnJvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCB1c2VySW5zdGFuY2UgPSBudWxsO1xyXG5cclxuaWYgKCF1c2VySW5zdGFuY2UpIHtcclxuICAgIHVzZXJJbnN0YW5jZSA9IG5ldyBVc2VyVGFza01hbmFnZXIoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlckluc3RhbmNlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uL2pzLXNlcnZpY2VzL2FwaS10YXNrLW1hbmFnZXIuanMiLCIvLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQge0NPTlNUfSBmcm9tICcuL2NvbnN0cyc7XHJcbmltcG9ydCBOZXR3b3JrIGZyb20gJy4vbmV0d29yayc7XHJcbmltcG9ydCBDb29raWVTdG9yYWdlIGZyb20gJy4vY29va2llJztcclxuXHJcbmNsYXNzIFVzZXJDb252ZXJzYXRpb24ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubmV0d29yayA9IG5ldyBOZXR3b3JrKCk7XHJcbiAgICAgICAgdGhpcy5jb29raWVTdG9yYWdlID0gQ29va2llU3RvcmFnZTtcclxuICAgICAgICB0aGlzLnNldHRpbmdQb3N0ID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgaXNMb2dnZWRJbigpIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLmdldFRva2VuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNFbWFpbENvbmZpcm1lZCgpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuY29va2llU3RvcmFnZS5nZXQoQ09OU1QuY29va2llU3RvcmFnZS5lbWFpbENvbmZpcm1lZCkgPT09ICdjb25maXJtZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUb2tlbigpIHtcclxuICAgICAgICBjb25zdCBjb29raWVUb2tlbiA9IHRoaXMuY29va2llU3RvcmFnZS5nZXQoQ09OU1QuY29va2llU3RvcmFnZS50b2tlbik7XHJcbiAgICAgICAgcmV0dXJuIGNvb2tpZVRva2VuO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1ldGFkYXRhKHRva2VuLCBjYkVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChgJHtDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1EaXJlY3RfZ2V0TWV0YURhdGEnKX1gLCB7aGVhZGVyczoge3Rva2VufX0sIGNiRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1ldGFkYXRhRGV0YWlsQ29udmVyc2F0aW9uKHRva2VuLCBkZXRhaWxzLCBjYkVycm9yKSB7XHJcbiAgICAgICAgY29uc3QgY3Vyc29yID0gKGRldGFpbHMuY3Vyc29yKSA/IGA/Y3Vyc29yPSR7ZGV0YWlscy5jdXJzb3J9YCA6ICcnO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QoYCR7Q09OU1QuZ2V0UGF0aCgnaW5zdGFncmFtRGlyZWN0X2dldE1ldGFEYXRhJyl9LyR7ZGV0YWlscy51c2VybmFtZX0vJHtkZXRhaWxzLmNvbnZlcnNhdGlvbklkfSR7Y3Vyc29yfWAsXHJcbiAgICAgICAgICAgIHtoZWFkZXJzOiB7dG9rZW59fSwgY2JFcnJvcik7XHJcbiAgICB9XHJcbiAgICBwb3N0TWV0YWRhdGFEZXRhaWxDb252ZXJzYXRpb24odG9rZW4sIGRldGFpbHMsIGNiRXJyb3IpIHtcclxuICAgICAgICBjb25zdCBzZXR0aW5nID0ge1xyXG4gICAgICAgICAgICAuLi50aGlzLnNldHRpbmdQb3N0LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7J3ZhbHVlJzogZGV0YWlscy52YWx1ZX0pLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnNldHRpbmdQb3N0LmhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICAndG9rZW4nOiB0aGlzLmdldFRva2VuKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChgJHtDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1EaXJlY3RfcG9zdE1lc3NhZ2UnKX0vJHtkZXRhaWxzLnVzZXJuYW1lfS8ke2RldGFpbHMuY29udmVyc2F0aW9uSWR9L3RleHRgLFxyXG4gICAgICAgICAgICBzZXR0aW5nLCBjYkVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGb3JtYXR0ZWREYXRlVXRpbCh0U3RhbXAsIHNob3dGdWxsVGltZSkge1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0U3RhbXApO1xyXG5cclxuICAgICAgICBsZXQgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xyXG4gICAgICAgIGxldCBkYXkgPSBkYXRlLmdldERhdGUoKTtcclxuICAgICAgICBsZXQgaG91ciA9IGRhdGUuZ2V0SG91cnMoKTtcclxuICAgICAgICBsZXQgbWluID0gZGF0ZS5nZXRNaW51dGVzKCk7XHJcbiAgICAgICAgbGV0IHNlYyA9IGRhdGUuZ2V0U2Vjb25kcygpO1xyXG5cclxuICAgICAgICBtb250aCA9IChtb250aCA8IDEwID8gJzAnIDogJycpICsgbW9udGg7XHJcbiAgICAgICAgZGF5ID0gKGRheSA8IDEwID8gJzAnIDogJycpICsgZGF5O1xyXG4gICAgICAgIGhvdXIgPSAoaG91ciA8IDEwID8gJzAnIDogJycpICsgaG91cjtcclxuICAgICAgICBtaW4gPSAobWluIDwgMTAgPyAnMCcgOiAnJykgKyBtaW47XHJcbiAgICAgICAgc2VjID0gKHNlYyA8IDEwID8gJzAnIDogJycpICsgc2VjO1xyXG5cclxuICAgICAgICBsZXQgc3RyID0gJyc7XHJcbiAgICAgICAgaWYgKCFzaG93RnVsbFRpbWUpIHtcclxuICAgICAgICAgICAgc3RyID0gYCR7aG91cn06JHttaW59YDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzdHIgPSBgJHtkYXRlLmdldEZ1bGxZZWFyKCl9LSR7bW9udGh9LSR7ZGF5fV8ke2hvdXJ9OiR7bWlufToke3NlY31gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHN0cjtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmxldCB1c2VySW5zdGFuY2UgPSBudWxsO1xyXG5cclxuaWYgKCF1c2VySW5zdGFuY2UpIHtcclxuICAgIHVzZXJJbnN0YW5jZSA9IG5ldyBVc2VyQ29udmVyc2F0aW9uKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJJbnN0YW5jZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy9hcGktdXNlci1kaXJlY3QuanMiLCIvLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG4vLyBpbXBvcnQge0NPTlNUfSBmcm9tICcuL2NvbnN0cyc7XHJcbi8vIGltcG9ydCBOZXR3b3JrIGZyb20gJy4vbmV0d29yayc7XHJcbi8vIGltcG9ydCBDb29raWVTdG9yYWdlIGZyb20gJy4vY29va2llJztcclxuLy8gaW1wb3J0IFB1YlN1YiBmcm9tICdwdWJzdWItanMnOyAvLyBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9wdWJzdWItanNcclxuXHJcbi8vIGNvbnN0IFNQSU5ORVJfQkFTRV9URU1QQUxBVEUgPSAnanMvdWkvdHBsL3NwaW5uZXIuaGJzJztcclxuY29uc3QgY2xhc3NlcyA9IHtcclxuICAgIGlubGluZTogJ2dsb2JhbC1pbmxpbmUtc3Bpbm5lcicsXHJcbiAgICBvdmVybGF5OiAnZ2xvYmFsLW92ZXJsYXktc3Bpbm5lcicsXHJcbiAgICBmaXhlZDogJ2dsb2JhbC1maXhlZC1zcGlubmVyJyxcclxuICAgIGJ1dHRvbjogJ2J1dHRvbi0tbG9hZCdcclxufTtcclxuLy8gY29uc3QgaGFuZGxlYmFyc1RwbCA9IGZ1bmN0aW9uIChuYW1lLCBkYXRhLCAkdGFyZ2V0KSB7XHJcbi8vICAgICAvLyB2YXIgaHRtbCA9IHRoaXMuZ2V0VGVtcGxhdGUobmFtZSkoZGF0YSk7XHJcbi8vICAgICB2YXIgaHRtbCA9IEhhbmRsZWJhcnMuY29tcGlsZSh0ZW1wbGF0ZSk7XHJcbi8vXHJcbi8vICAgICBpZiAoJHRhcmdldCkge1xyXG4vLyAgICAgICAgIC8vZm9yIHByZXZlbnRpbmcgeHNzXHJcbi8vICAgICAgICAgJHRhcmdldFswXS5pbm5lckhUTUwgPSBodG1sO1xyXG4vLyAgICAgfVxyXG4vL1xyXG4vLyAgICAgcmV0dXJuIGh0bWw7XHJcbi8vIH07XHJcbi8vIGNvbnN0IGhhbmRsZWJhcnMgPSB0aGlzLmdldFNlcnZpY2UoJ2NvcmUudGVtcGxhdGluZy5oYW5kbGViYXJzJyk7XHJcblxyXG5jbGFzcyBTcGlubmVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihfY2ZnKSB7XHJcbiAgICAgICAgdGhpcy5jZmcgPSBfY2ZnIHx8IHt9O1xyXG4gICAgICAgIC8vIHRoaXMuJGRlZmF1bHRDb250YWluZXIgPSAkKCdib2R5Jyk7XHJcbiAgICAgICAgJC5leHRlbmQoY2xhc3NlcywgdGhpcy5jZmcuY2xhc3Nlcyk7XHJcbiAgICAgICAgLy8gdGhpcy5fbWVkaWF0b3Iuc3Vic2NyaWJlKENPTlNULmV2ZW50cy5TVE9QX0ZJWEVEX1NQSU5ORVIsIHRoaXMuc3RvcEZpeGVkU3Bpbm5lci5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuICAgIC8vIF9tZWRpYXRvciA9IFB1YlN1YjtcclxuXHJcbiAgICBzdGFydCgkZWwsIHByZXdDbHMpIHtcclxuICAgICAgICAvLyBpZiAoYWRkT3JSZW1vdmUpIHtcclxuICAgICAgICAvLyAgICAgJCgnI2ZvbycpLmFkZENsYXNzKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAkKCcjZm9vJykucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgJGVsLmZpbmQoJ2knKS50b2dnbGVDbGFzcyhwcmV3Q2xzKS5hZGRDbGFzcygnZmEtc3BpbiBmYS1zcGlubmVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcCgkZWwsIG5ld0Nscykge1xyXG4gICAgICAgICRlbC5maW5kKCdpJykudG9nZ2xlQ2xhc3MobmV3Q2xzKS5yZW1vdmVDbGFzcygnZmEtc3BpbiBmYS1zcGlubmVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkKCRlbCwgbmV3Q2xzKSB7XHJcbiAgICAgICAgdGhpcy4kZWwgPSAkZWw7XHJcbiAgICAgICAgJGVsLnByZXBlbmQoYDxkaXYgY2xhc3M9XCJzcGlubmVyLWJveCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyICR7bmV3Q2xzfVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3Bpbi1hbmltYXRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZGF0YS1wcmVmaXg9XCJmYXJcIiBkYXRhLWljb249XCJzeW5jLWFsdFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgY2xhc3M9XCJzdmctaW5saW5lLS1mYSBmYS1zeW5jLWFsdCBmYS13LTE2IGZhLWZ3IGZhLTJ4XCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDgzLjUxNSAyOC40ODVMNDMxLjM1IDgwLjY1QzM4Ni40NzUgMzUuNzY3IDMyNC40ODUgOCAyNTYgOCAxMjMuMjI4IDggMTQuODI0IDExMi4zMzggOC4zMSAyNDMuNDkzIDcuOTcxIDI1MC4zMTEgMTMuNDc1IDI1NiAyMC4zMDEgMjU2aDI4LjA0NWM2LjM1MyAwIDExLjYxMy00Ljk1MiAxMS45NzMtMTEuMjk0QzY2LjE2MSAxNDEuNjQ5IDE1MS40NTMgNjAgMjU2IDYwYzU0LjE2MyAwIDEwMy4xNTcgMjEuOTIzIDEzOC42MTQgNTcuMzg2bC01NC4xMjggNTQuMTI5Yy03LjU2IDcuNTYtMi4yMDYgMjAuNDg1IDguNDg1IDIwLjQ4NUg0OTJjNi42MjcgMCAxMi01LjM3MyAxMi0xMlYzNi45NzFjMC0xMC42OTEtMTIuOTI2LTE2LjA0NS0yMC40ODUtOC40ODZ6TTQ5MS42OTkgMjU2aC0yOC4wNDVjLTYuMzUzIDAtMTEuNjEzIDQuOTUyLTExLjk3MyAxMS4yOTRDNDQ1LjgzOSAzNzAuMzUxIDM2MC41NDcgNDUyIDI1NiA0NTJjLTU0LjE2MyAwLTEwMy4xNTctMjEuOTIzLTEzOC42MTQtNTcuMzg2bDU0LjEyOC01NC4xMjljNy41Ni03LjU2IDIuMjA2LTIwLjQ4NS04LjQ4NS0yMC40ODVIMjBjLTYuNjI3IDAtMTIgNS4zNzMtMTIgMTJ2MTQzLjAyOWMwIDEwLjY5MSAxMi45MjYgMTYuMDQ1IDIwLjQ4NSA4LjQ4NUw4MC42NSA0MzEuMzVDMTI1LjUyNSA0NzYuMjMzIDE4Ny41MTYgNTA0IDI1NiA1MDRjMTMyLjc3MyAwIDI0MS4xNzYtMTA0LjMzOCAyNDcuNjktMjM1LjQ5My4zMzktNi44MTgtNS4xNjUtMTIuNTA3LTExLjk5MS0xMi41MDd6XCIgY2xhc3M9XCJcIj48L3BhdGg+PC9zdmc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PmApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZSgpIHtcclxuICAgICAgICB0aGlzLiRlbC5maW5kKCcuc3Bpbm5lci1ib3gnKS5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgc3Bpbm5lciBpY29uIG9uIGJ1dHRvbiBiZWZvcmUgdGhlIGJ1dHRvbiB0ZXh0XHJcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJGVsXHJcbiAgICAgKi9cclxuICAgIHN0YXJ0QnV0dG9uU3Bpbm5lciA9IGZ1bmN0aW9uICgkZWwsIG5ld0Nscykge1xyXG4gICAgICAgICRlbC5hZGRDbGFzcyhjbGFzc2VzLmJ1dHRvbik7XHJcbiAgICAgICAgJGVsLnByZXBlbmQoYDxkaXYgY2xhc3M9XCJzcGlubmVyLWJveCBzcGlubmVyLWJveC0tYnV0dG9uIGp1c3RpZnktY29udGVudC1jZW50ZXIgcG9zaXRpb24tcmVsYXRpdmUgcC0wIG0tMCBiZy10cmFuc3BhcmVudCAke25ld0Nsc31cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwaW4tYW5pbWF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGRhdGEtcHJlZml4PVwiZmFyXCIgZGF0YS1pY29uPVwic3luYy1hbHRcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmEtZndcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk00ODMuNTE1IDI4LjQ4NUw0MzEuMzUgODAuNjVDMzg2LjQ3NSAzNS43NjcgMzI0LjQ4NSA4IDI1NiA4IDEyMy4yMjggOCAxNC44MjQgMTEyLjMzOCA4LjMxIDI0My40OTMgNy45NzEgMjUwLjMxMSAxMy40NzUgMjU2IDIwLjMwMSAyNTZoMjguMDQ1YzYuMzUzIDAgMTEuNjEzLTQuOTUyIDExLjk3My0xMS4yOTRDNjYuMTYxIDE0MS42NDkgMTUxLjQ1MyA2MCAyNTYgNjBjNTQuMTYzIDAgMTAzLjE1NyAyMS45MjMgMTM4LjYxNCA1Ny4zODZsLTU0LjEyOCA1NC4xMjljLTcuNTYgNy41Ni0yLjIwNiAyMC40ODUgOC40ODUgMjAuNDg1SDQ5MmM2LjYyNyAwIDEyLTUuMzczIDEyLTEyVjM2Ljk3MWMwLTEwLjY5MS0xMi45MjYtMTYuMDQ1LTIwLjQ4NS04LjQ4NnpNNDkxLjY5OSAyNTZoLTI4LjA0NWMtNi4zNTMgMC0xMS42MTMgNC45NTItMTEuOTczIDExLjI5NEM0NDUuODM5IDM3MC4zNTEgMzYwLjU0NyA0NTIgMjU2IDQ1MmMtNTQuMTYzIDAtMTAzLjE1Ny0yMS45MjMtMTM4LjYxNC01Ny4zODZsNTQuMTI4LTU0LjEyOWM3LjU2LTcuNTYgMi4yMDYtMjAuNDg1LTguNDg1LTIwLjQ4NUgyMGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnYxNDMuMDI5YzAgMTAuNjkxIDEyLjkyNiAxNi4wNDUgMjAuNDg1IDguNDg1TDgwLjY1IDQzMS4zNUMxMjUuNTI1IDQ3Ni4yMzMgMTg3LjUxNiA1MDQgMjU2IDUwNGMxMzIuNzczIDAgMjQxLjE3Ni0xMDQuMzM4IDI0Ny42OS0yMzUuNDkzLjMzOS02LjgxOC01LjE2NS0xMi41MDctMTEuOTkxLTEyLjUwN3pcIiBjbGFzcz1cIlwiPjwvcGF0aD48L3N2Zz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+YCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIHNwaW5uZXIgaWNvbiBmcm9tIGJ1dHRvblxyXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRlbFxyXG4gICAgICovXHJcbiAgICBzdG9wQnV0dG9uU3Bpbm5lciA9IGZ1bmN0aW9uICgkZWwpIHtcclxuICAgICAgICAkZWwucmVtb3ZlQ2xhc3MoY2xhc3Nlcy5idXR0b24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmluZHMgc3Bpbm5lcnNcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gJGNvbnRhaW5lclxyXG4gICAgICogQHJldHVybiB7P2pRdWVyeX0gc3Bpbm5lcnNcclxuICAgICAqL1xyXG4gICAgLy8gX2ZpbmRTcGlubmVyID0gZnVuY3Rpb24gKHR5cGUsICRjb250YWluZXIpIHtcclxuICAgIC8vICAgICBjb25zdCBzZWxlY3RvciA9ICcuJyArIHR5cGU7XHJcbiAgICAvLyAgICAgbGV0ICRlbCA9IHRoaXMuJGRlZmF1bHRDb250YWluZXI7XHJcbiAgICAvLyAgICAgaWYgKCRjb250YWluZXIpIHtcclxuICAgIC8vICAgICAgICAgJGVsID0gJGNvbnRhaW5lcjtcclxuICAgIC8vICAgICB9XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIGlmICgkZWwuZmluZChzZWxlY3RvcikubGVuZ3RoID4gMCkge1xyXG4gICAgLy8gICAgICAgICByZXR1cm4gJGVsLmZpbmQoc2VsZWN0b3IpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9ICRlbFxyXG4gICAgICovXHJcbiAgICAvKlxyXG4gICAgc3RhcnRDb250ZW50U3Bpbm5lciA9IGZ1bmN0aW9uICgkZWwpIHtcclxuICAgICAgICBjb25zdCBodG1sID0gaGFuZGxlYmFyc1RwbChcclxuICAgICAgICAgICAgU1BJTk5FUl9CQVNFX1RFTVBBTEFURSwge1xyXG4gICAgICAgICAgICAgICAgaW1nU3JjOiBDVEMuVVJMUy5XQUlUSU5HX0lNQUdFLFxyXG4gICAgICAgICAgICAgICAgJ2NsYXNzJzogY2xhc3Nlcy5vdmVybGF5XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICRlbC5wcmVwZW5kKGh0bWwpO1xyXG4gICAgfTtcclxuXHJcbiAgICBzdGFydElubGluZUNvbnRlbnRTcGlubmVyID0gZnVuY3Rpb24gKCRlbCkge1xyXG4gICAgICAgIGNvbnN0IGh0bWwgPSBoYW5kbGViYXJzVHBsKFxyXG4gICAgICAgICAgICBTUElOTkVSX0JBU0VfVEVNUEFMQVRFLCB7XHJcbiAgICAgICAgICAgICAgICBpbWdTcmM6IENUQy5VUkxTLldBSVRJTkdfSU1BR0UsXHJcbiAgICAgICAgICAgICAgICAnY2xhc3MnOiBjbGFzc2VzLmlubGluZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAkZWwucHJlcGVuZChodG1sKTtcclxuICAgIH07XHJcbiAgICAqL1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RhcnRzIGdsb2JhbCBmdWxsIHBhZ2UgZml4ZWQgc3Bpbm5lclxyXG4gICAgICovXHJcbiAgICAvKlxyXG4gICAgc3RhcnRGaXhlZFNwaW5uZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3Qgc3Bpbm5lcnMgPSB0aGlzLl9maW5kU3Bpbm5lcihjbGFzc2VzLmZpeGVkKTtcclxuICAgICAgICBpZiAoIShDVEMuaXNFZGl0KCkgfHwgQ1RDLmlzRGVzaWduKCkpICYmICFzcGlubmVycykge1xyXG4gICAgICAgICAgICBjb25zdCBodG1sID0gaGFuZGxlYmFyc1RwbChcclxuICAgICAgICAgICAgICAgIFNQSU5ORVJfQkFTRV9URU1QQUxBVEUsIHtcclxuICAgICAgICAgICAgICAgICAgICBpbWdTcmM6IENUQy5VUkxTLldBSVRJTkdfSU1BR0UsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogY2xhc3Nlcy5maXhlZFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuJGRlZmF1bHRDb250YWluZXIucHJlcGVuZChodG1sKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgKi9cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0b3BzIHNwaW5uZXJzXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9ICRjb250YWluZXJcclxuICAgICAqL1xyXG4gICAgLy8gX3N0b3BTcGlubmVyID0gZnVuY3Rpb24gKHR5cGUsICRjb250YWluZXIpIHtcclxuICAgIC8vICAgICBjb25zdCBzcGlubmVycyA9IHRoaXMuX2ZpbmRTcGlubmVyKHR5cGUsICRjb250YWluZXIpO1xyXG4gICAgLy8gICAgIGlmIChzcGlubmVycykge1xyXG4gICAgLy8gICAgICAgICBzcGlubmVycy5yZW1vdmUoKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAkZWxcclxuICAgICAqL1xyXG4gICAgLy8gc3RvcENvbnRlbnRTcGlubmVyID0gZnVuY3Rpb24gKCRlbCkge1xyXG4gICAgLy8gICAgICRlbC5maW5kKCcuJyArIGNsYXNzZXMub3ZlcmxheSkucmVtb3ZlKCk7XHJcbiAgICAvLyB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAkZWxcclxuICAgICAqL1xyXG4gICAgLy8gc3RvcElubGluZUNvbnRlbnRTcGlubmVyID0gZnVuY3Rpb24gKCRlbCkge1xyXG4gICAgLy8gICAgICRlbC5maW5kKCcuJyArIGNsYXNzZXMuaW5saW5lKS5yZW1vdmUoKTtcclxuICAgIC8vIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9wcyBnbG9iYWwgZnVsbCBwYWdlIGZpeGVkIHNwaW5uZXJcclxuICAgICAqL1xyXG4gICAgLy8gc3RvcEZpeGVkU3Bpbm5lciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICAgICB0aGlzLl9zdG9wU3Bpbm5lcihjbGFzc2VzLmZpeGVkKTtcclxuICAgIC8vIH07XHJcbn1cclxuXHJcbmxldCBzcGlubmVySW5zdGFuY2UgPSBudWxsO1xyXG5cclxuaWYgKCFzcGlubmVySW5zdGFuY2UpIHtcclxuICAgIHNwaW5uZXJJbnN0YW5jZSA9IG5ldyBTcGlubmVyKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNwaW5uZXJJbnN0YW5jZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy9zcGlubmVyLmpzIiwiLyogZXNsaW50LWRpc2FibGUgc29ydC12YXJzICovXHJcbi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy91c2VyJztcclxuaW1wb3J0IFB1YlN1YiBmcm9tICdwdWJzdWItanMnOyAvLyBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9wdWJzdWItanNcclxuaW1wb3J0IGNvb2tpZVN0b3JhZ2UgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2Nvb2tpZSc7XHJcbi8vIGltcG9ydCBWYWxpZGF0b3IgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2Zvcm0tdmFsaWRhdG9yJztcclxuaW1wb3J0IHZpZXdVdGlscyBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdmlldyc7XHJcbmltcG9ydCB7Q09OU1R9IGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMnO1xyXG5cclxuLy8gd2luZG93LiQgPSAkO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExvZ2luUGFnZShzZWxlY3RvckNzcykge1xyXG4gICAgY29uc3Qge19mb3JtSWQsIF9idXR0b25TdWJtaXRJZCwgX2xvZ2luQm94fSA9IHNlbGVjdG9yQ3NzO1xyXG4gICAgY29uc3QgdXNlciA9IFVzZXIsIC8vIHNlcnZpY2VcclxuICAgICAgICAkZm9ybSA9ICQoX2Zvcm1JZCksXHJcbiAgICAgICAgJGVtYWlsID0gJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cIm1haWxcIl0nKSxcclxuICAgICAgICAkdGV4dEFyZWFEZXNjcmlwdGlvbiA9ICQoJyNkZXNjcmlwdGlvbicpO1xyXG4gICAgLy8gY29uc3Qgb3BlbmVkQ2xhc3MgPSAnZC1ibG9jayc7XHJcbiAgICAvLyBjb25zdCBjbG9zZUNsYXNzID0gJ2Qtbm9uZSc7XHJcblxyXG4gICAgY29uc3QgdXNlckxvZ2luSGVhZGVyID0gKF9mb3JtRGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNiRXJyb3IgPSAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICQoX2xvZ2luQm94KS5hcHBlbmQoJzxwPnJlc3VsdC5zdGF0dXMubWVzc2FnZTwvcD4nKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gdXNlci5sb2dpbihfZm9ybURhdGEsIGNiRXJyb3IpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LmRhdGEgJiYgcmVzdWx0LmRhdGEudG9rZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzYXZlIHRoZSBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgY29va2llU3RvcmFnZS5zZXQoQ09OU1QuY29va2llU3RvcmFnZS50b2tlbiwgcmVzdWx0LmRhdGEudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5uYXYtbGluay5qc19sb2dPdXQnKS5wYXJlbnQoKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3JlcXVlc3Qgc3VjY2VlZGVkIHdpdGggSlNPTiByZXNwb25zZScsIHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSgkdGV4dEFyZWFEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5tZXNzYWdlIHx8ICdMb2dpbiBzdWNjc2VzcycpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKHRoaXMuJHRleHRBcmVhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGA8cD5zdGF0dXM6ICR7cmVzdWx0LnN0YXR1cy5zdGF0ZX08L3A+PHA+IG1lc3NhZ2U6ICR7cmVzdWx0LnN0YXR1cy5tZXNzYWdlfTwvcD5gKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UoJHRleHRBcmVhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMubWVzc2FnZSB8fCAnTG9naW4gZXJyb3InKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHN1Ym1pdEZvcm0gPSBmdW5jdGlvbihmb3JtRGF0YU9iaikge1xyXG4gICAgICAgIGNvbnN0IGVtYWlsID0gJGVtYWlsLnZhbCgpLFxyXG4gICAgICAgICAgICBwYXNzd29yZCA9ICRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJwYXNzXCJdJykudmFsKCksXHJcbiAgICAgICAgICAgIF9mb3JtRGF0YSA9IGZvcm1EYXRhT2JqIHx8IHtlbWFpbCwgcGFzc3dvcmR9O1xyXG5cclxuICAgICAgICBpZiAoc2VsZWN0b3JDc3MuaXNMb2dpbkluc3RhZ3JhbSkge1xyXG4gICAgICAgICAgICAvLyB0b2RvOiBkZWxldGUgbWVcclxuICAgICAgICAgICAgLy8gYWRkSW5zdGFncmFtQWNjb3VudCh7dXNlcm5hbWU6ICRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJ1c2VybmFtZVwiXScpLnZhbCgpLCBwYXNzd29yZH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRlbWFpbC52YWwoJGVtYWlsLnZhbCgpLnRvTG9jYWxlTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICB1c2VyTG9naW5IZWFkZXIoX2Zvcm1EYXRhKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIFB1YlN1Yi5wdWJsaXNoKENPTlNULmV2ZW50cy5VU0VSX0xPR0dFRCwgJ2xvZ2luJyk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvaW5zdGFncmFtLWludGVncmF0aW9uL2luc3RhZ3JhbS1hY2NvdW50cy5odG1sJztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBsb2dPdXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb29raWVTdG9yYWdlLnJlbW92ZShDT05TVC5jb29raWVTdG9yYWdlLnRva2VuKTtcclxuICAgICAgICBQdWJTdWIucHVibGlzaChDT05TVC5ldmVudHMuVVNFUl9MT0dPVVQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBiaW5kRXZlbnRzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gY29uc3QgJHNob3dMb2dpbkJveEJ0bklkID0gJChfc2hvd0xvZ2luQm94QnRuSWQpO1xyXG4gICAgICAgIGNvbnN0ICRsb2dpbkJveCA9ICQoX2xvZ2luQm94KTtcclxuICAgICAgICBjb25zdCBvcGVuZWRDbGFzcyA9ICdkLWJsb2NrJztcclxuICAgICAgICBjb25zdCBjbG9zZUNsYXNzID0gJ2Qtbm9uZSc7XHJcblxyXG4gICAgICAgIC8vICRzaG93TG9naW5Cb3hCdG5JZC5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGlmICghc2VsZWN0b3JDc3MuaXNMb2dpbkluc3RhZ3JhbSkge1xyXG4gICAgICAgIC8vICAgICAgICAgJGxvZ2luQm94LmNzcyh7J3RvcCc6IDAsICdyaWdodCc6IDB9KVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC5hZGRDbGFzcygnYmctbGlnaHQgYm9yZGVyIG10LTUgbXgtYXV0byBwb3NpdGlvbi1hYnNvbHV0ZScpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgICRsb2dpbkJveC5hZGRDbGFzcyhvcGVuZWRDbGFzcykucmVtb3ZlQ2xhc3MoY2xvc2VDbGFzcyk7XHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgIGNvbnN0ICRidXR0b25TdWJtaXQgPSAkKF9idXR0b25TdWJtaXRJZCksXHJcbiAgICAgICAgICAgIGNzc1ZhbGlkYXRpb25DbGFzcyA9ICdmb3JtLXZhbGlkYXRpb24nO1xyXG5cclxuICAgICAgICAkYnV0dG9uU3VibWl0Lm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc3QgZm9ybSA9ICRmb3JtLmdldCgwKTtcclxuICAgICAgICAgICAgLy8gY29uc3QgdmFsaWRhdG9yID0gbmV3IFZhbGlkYXRvcigkZm9ybSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHZpZXdVdGlscywgdmlld1V0aWxzLmlzRW1haWwoJGVtYWlsLnZhbCgpKSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZm9ybS5jaGVja1ZhbGlkaXR5KCkgJiYgdmlld1V0aWxzLmlzRW1haWwoJGVtYWlsLnZhbCgpKSkge1xyXG4gICAgICAgICAgICAgICAgc3VibWl0Rm9ybSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gSGlnaGxpZ2h0IGVycm9yc1xyXG4gICAgICAgICAgICAgICAgaWYgKGZvcm0ucmVwb3J0VmFsaWRpdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtLnJlcG9ydFZhbGlkaXR5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAkZm9ybS5hZGRDbGFzcyhjc3NWYWxpZGF0aW9uQ2xhc3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5uYXYtbGluay5qc19sb2dPdXQnKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGxvZ091dCgpO1xyXG4gICAgICAgICAgICAkKGUudGFyZ2V0KS5wYXJlbnQoKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UoJHRleHRBcmVhRGVzY3JpcHRpb24sICdMb2dnZWQgb3V0Jyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFB1YlN1Yi5zdWJzY3JpYmUoQ09OU1QuZXZlbnRzLlVTRVJfTE9HT1VULCAobXNnKSA9PiB7XHJcbiAgICAgICAgICAgICQoQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyTmF2TG9naW5CdG4pLmFkZENsYXNzKG9wZW5lZENsYXNzKS5yZW1vdmVDbGFzcyhjbG9zZUNsYXNzKTsgLy8gLnNob3coKTtcclxuICAgICAgICAgICAgJChDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJSZWdCdG4pLmFkZENsYXNzKG9wZW5lZENsYXNzKS5yZW1vdmVDbGFzcyhjbG9zZUNsYXNzKTtcclxuICAgICAgICAgICAgJCgnLm5hdi1saW5rLmpzX2xvZ091dCcpLmFkZENsYXNzKGNsb3NlQ2xhc3MpLnJlbW92ZUNsYXNzKG9wZW5lZENsYXNzKTsgLy8gLmhpZGUoKTtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3JMb2dpblN0YXRlID0gJy5qc19tZXNzYWdlX2xvZ2dlZC0tdGV4dCc7XHJcbiAgICAgICAgICAgICQoc2VsZWN0b3JMb2dpblN0YXRlKS50ZXh0KCfQktGLINCy0YvRiNC70Lgg0LjQtyDQsNC60LrQsNGD0L3RgtCwJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpc0xvZ2luQnRuQ2xpY2sgPSAkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnbmF2Lm5hdmJhcicpLmZpbmQoJGxvZ2luQm94KS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzQWRkSW5zdGFncmFtQnRuQ2xpY2tlZCA9ICQoZXZlbnQudGFyZ2V0KS5hdHRyKCdpZCcpID09PSBDT05TVC51aVNlbGVjdG9ycy5pbnN0YWdyYW0uYWRkQWNjb3VudEJ0bklkO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFpc0xvZ2luQnRuQ2xpY2sgJiYgJGxvZ2luQm94Lmhhc0NsYXNzKG9wZW5lZENsYXNzKSAmJiAhaXNBZGRJbnN0YWdyYW1CdG5DbGlja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAkbG9naW5Cb3guYWRkQ2xhc3MoY2xvc2VDbGFzcykucmVtb3ZlQ2xhc3Mob3BlbmVkQ2xhc3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAgICAgaWYgKCQoJy5hdXRoLmxvZ2luJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGJpbmRFdmVudHMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0XHJcbiAgICB9O1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9fYXV0aC9sb2dpbi1wYWdlLmpzIiwiaWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIGJydXR1c2luKXdpbmRvdy5icnV0dXNpbj1uZXcgT2JqZWN0O2Vsc2UgaWYoXCJvYmplY3RcIiE9dHlwZW9mIGJydXR1c2luKXRocm93XCJicnV0dXNpbiBnbG9iYWwgdmFyaWFibGUgYWxyZWFkeSBleGlzdHNcIjshZnVuY3Rpb24oKXtTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGh8fChTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGg9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdD10fHwwLHRoaXMuaW5kZXhPZihlLHQpPT09dH0pLFN0cmluZy5wcm90b3R5cGUuZW5kc1dpdGh8fChTdHJpbmcucHJvdG90eXBlLmVuZHNXaXRoPWZ1bmN0aW9uKGUsdCl7dmFyIHI9dGhpcy50b1N0cmluZygpOyh2b2lkIDA9PT10fHx0PnIubGVuZ3RoKSYmKHQ9ci5sZW5ndGgpLHQtPWUubGVuZ3RoO3ZhciBuPXIuaW5kZXhPZihlLHQpO3JldHVybi0xIT09biYmbj09PXR9KSxTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzfHwoU3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlcz1mdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3JldHVybi0xIT09U3RyaW5nLnByb3RvdHlwZS5pbmRleE9mLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0pLFN0cmluZy5wcm90b3R5cGUuZm9ybWF0fHwoU3RyaW5nLnByb3RvdHlwZS5mb3JtYXQ9ZnVuY3Rpb24oKXtmb3IodmFyIGU9dGhpcyx0PTA7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIHI9bmV3IFJlZ0V4cChcIlxcXFx7XCIrdCtcIlxcXFx9XCIsXCJnaVwiKTtlPWUucmVwbGFjZShyLGFyZ3VtZW50c1t0XSl9cmV0dXJuIGV9KTt2YXIgQnJ1dHVzaW5Gb3Jtcz1uZXcgT2JqZWN0O0JydXR1c2luRm9ybXMubWVzc2FnZXM9e3ZhbGlkYXRpb25FcnJvcjpcIlZhbGlkYXRpb24gZXJyb3JcIixyZXF1aXJlZDpcIlRoaXMgZmllbGQgaXMgKipyZXF1aXJlZCoqXCIsaW52YWxpZFZhbHVlOlwiSW52YWxpZCBmaWVsZCB2YWx1ZVwiLGFkZHByb3BOYW1lRXhpc3RlbnQ6XCJUaGlzIHByb3BlcnR5IGlzIGFscmVhZHkgcHJlc2VudCBpbiB0aGUgb2JqZWN0XCIsYWRkcHJvcE5hbWVSZXF1aXJlZDpcIkEgbmFtZSBpcyByZXF1aXJlZFwiLG1pbkl0ZW1zOlwiQXQgbGVhc3QgYHswfWAgaXRlbXMgYXJlIHJlcXVpcmVkXCIsbWF4SXRlbXM6XCJBdCBtb3N0IGB7MH1gIGl0ZW1zIGFyZSBhbGxvd2VkXCIscGF0dGVybjpcIlZhbHVlIGRvZXMgbm90IG1hdGNoIHBhdHRlcm46IGB7MH1gXCIsbWluTGVuZ3RoOlwiVmFsdWUgbXVzdCBiZSAqKmF0IGxlYXN0KiogYHswfWAgY2hhcmFjdGVycyBsb25nXCIsbWF4TGVuZ3RoOlwiVmFsdWUgbXVzdCBiZSAqKmF0IG1vc3QqKiBgezB9YCBjaGFyYWN0ZXJzIGxvbmdcIixtdWx0aXBsZU9mOlwiVmFsdWUgbXVzdCBiZSAqKm11bHRpcGxlIG9mKiogYHswfWBcIixtaW5pbXVtOlwiVmFsdWUgbXVzdCBiZSAqKmdyZWF0ZXIgb3IgZXF1YWwgdGhhbioqIGB7MH1gXCIsZXhjbHVzaXZlTWluaW11bTpcIlZhbHVlIG11c3QgYmUgKipncmVhdGVyIHRoYW4qKiBgezB9YFwiLG1heGltdW06XCJWYWx1ZSBtdXN0IGJlICoqbG93ZXIgb3IgZXF1YWwgdGhhbioqIGB7MH1gXCIsZXhjbHVzaXZlTWF4aW11bTpcIlZhbHVlIG11c3QgYmUgKipsb3dlciB0aGFuKiogYHswfWBcIixtaW5Qcm9wZXJ0aWVzOlwiQXQgbGVhc3QgYHswfWAgcHJvcGVydGllcyBhcmUgcmVxdWlyZWRcIixtYXhQcm9wZXJ0aWVzOlwiQXQgbW9zdCBgezB9YCBwcm9wZXJ0aWVzIGFyZSBhbGxvd2VkXCIsdW5pcXVlSXRlbXM6XCJBcnJheSBpdGVtcyBtdXN0IGJlIHVuaXF1ZVwiLGFkZEl0ZW06XCJBZGQgaXRlbVwiLFwidHJ1ZVwiOlwiVHJ1ZVwiLFwiZmFsc2VcIjpcIkZhbHNlXCJ9LEJydXR1c2luRm9ybXMuZGVjb3JhdG9ycz1uZXcgQXJyYXksQnJ1dHVzaW5Gb3Jtcy5hZGREZWNvcmF0b3I9ZnVuY3Rpb24oZSl7QnJ1dHVzaW5Gb3Jtcy5kZWNvcmF0b3JzW0JydXR1c2luRm9ybXMuZGVjb3JhdG9ycy5sZW5ndGhdPWV9LEJydXR1c2luRm9ybXMub25SZXNvbHV0aW9uU3RhcnRlZD1mdW5jdGlvbihlKXt9LEJydXR1c2luRm9ybXMub25SZXNvbHV0aW9uRmluaXNoZWQ9ZnVuY3Rpb24oZSl7fSxCcnV0dXNpbkZvcm1zLm9uVmFsaWRhdGlvbkVycm9yPWZ1bmN0aW9uKGUsdCl7ZS5mb2N1cygpLGUuY2xhc3NOYW1lLmluY2x1ZGVzKFwiIGVycm9yXCIpfHwoZS5jbGFzc05hbWUrPVwiIGVycm9yXCIpLGFsZXJ0KHQpfSxCcnV0dXNpbkZvcm1zLm9uVmFsaWRhdGlvblN1Y2Nlc3M9ZnVuY3Rpb24oZSl7ZS5jbGFzc05hbWU9ZS5jbGFzc05hbWUucmVwbGFjZShcIiBlcnJvclwiLFwiXCIpfSxCcnV0dXNpbkZvcm1zLnBvc3RSZW5kZXI9bnVsbCxCcnV0dXNpbkZvcm1zLmluc3RhbmNlcz1uZXcgQXJyYXksQnJ1dHVzaW5Gb3Jtcy5jcmVhdGU9ZnVuY3Rpb24oc2NoZW1hKXtmdW5jdGlvbiB2YWxpZGF0ZURlcGVuY3lNYXBJc0FjeWNsaWMoKXtmdW5jdGlvbiBlKHQscixuKXtpZihyLmhhc093blByb3BlcnR5KG4pKXJldHVybiB2b2lkKGVycm9yPVwiU2NoZW1hIGRlcGVuZGVuY3kgZ3JhcGggaGFzIGN5Y2xlc1wiKTtpZihyW25dPW51bGwsIXQuaGFzT3duUHJvcGVydHkobikpe3Rbbl09bnVsbDt2YXIgYT1kZXBlbmRlbmN5TWFwW25dO2lmKGEpZm9yKHZhciBpPTA7aTxhLmxlbmd0aDtpKyspZSh0LHIsYVtpXSk7ZGVsZXRlIHJbbl19fXZhciB0PW5ldyBPYmplY3Q7Zm9yKHZhciByIGluIGRlcGVuZGVuY3lNYXApdC5oYXNPd25Qcm9wZXJ0eShyKXx8ZSh0LG5ldyBPYmplY3Qscil9ZnVuY3Rpb24gYXBwZW5kQ2hpbGQoZSx0LHIpe2UuYXBwZW5kQ2hpbGQodCk7Zm9yKHZhciBuPTA7bjxCcnV0dXNpbkZvcm1zLmRlY29yYXRvcnMubGVuZ3RoO24rKylCcnV0dXNpbkZvcm1zLmRlY29yYXRvcnNbbl0odCxyKX1mdW5jdGlvbiBjcmVhdGVQc2V1ZG9TY2hlbWEoZSl7dmFyIHQ9bmV3IE9iamVjdDtmb3IodmFyIHIgaW4gZSlcIml0ZW1zXCIhPT1yJiZcInByb3BlcnRpZXNcIiE9PXImJlwiYWRkaXRpb25hbFByb3BlcnRpZXNcIiE9PXImJihcInBhdHRlcm5cIj09PXI/dFtyXT1uZXcgUmVnRXhwKGVbcl0pOnRbcl09ZVtyXSk7cmV0dXJuIHR9ZnVuY3Rpb24gZ2V0RGVmaW5pdGlvbihlKXt2YXIgdD1lLnNwbGl0KFwiL1wiKSxyPXJvb3Q7Zm9yKHZhciBuIGluIHQpXCIwXCIhPT1uJiYocj1yW3Rbbl1dKTtyZXR1cm4gcn1mdW5jdGlvbiBjb250YWluc1N0cihlLHQpe2Zvcih2YXIgcj0wO3I8ZS5sZW5ndGg7cisrKWlmKGVbcl09PXQpcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gcmVuYW1lUmVxdWlyZWRQcm9wZXRpZXMoZSl7aWYoZSlpZihlLmhhc093blByb3BlcnR5KFwib25lT2ZcIikpZm9yKHZhciB0IGluIGUub25lT2YpcmVuYW1lUmVxdWlyZWRQcm9wZXRpZXMoZS5vbmVPZlt0XSk7ZWxzZSBpZihlLmhhc093blByb3BlcnR5KFwiJHJlZlwiKSl7dmFyIHI9Z2V0RGVmaW5pdGlvbihlLiRyZWYpO3JlbmFtZVJlcXVpcmVkUHJvcGV0aWVzKHIpfWVsc2UgaWYoXCJvYmplY3RcIj09PWUudHlwZSl7aWYoZS5wcm9wZXJ0aWVzKXtlLmhhc093blByb3BlcnR5KFwicmVxdWlyZWRcIikmJkFycmF5LmlzQXJyYXkoZS5yZXF1aXJlZCkmJihlLnJlcXVpcmVkUHJvcGVydGllcz1lLnJlcXVpcmVkLGRlbGV0ZSBlLnJlcXVpcmVkKTtmb3IodmFyIG4gaW4gZS5wcm9wZXJ0aWVzKXJlbmFtZVJlcXVpcmVkUHJvcGV0aWVzKGUucHJvcGVydGllc1tuXSl9aWYoZS5wYXR0ZXJuUHJvcGVydGllcylmb3IodmFyIGEgaW4gZS5wYXR0ZXJuUHJvcGVydGllcyl7dmFyIGk9ZS5wYXR0ZXJuUHJvcGVydGllc1thXTsoaS5oYXNPd25Qcm9wZXJ0eShcInR5cGVcIil8fGkuaGFzT3duUHJvcGVydHkoXCIkcmVmXCIpfHxpLmhhc093blByb3BlcnR5KFwib25lT2ZcIikpJiZyZW5hbWVSZXF1aXJlZFByb3BldGllcyhlLnBhdHRlcm5Qcm9wZXJ0aWVzW2FdKX1lLmFkZGl0aW9uYWxQcm9wZXJ0aWVzJiYoZS5hZGRpdGlvbmFsUHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShcInR5cGVcIil8fGUuYWRkaXRpb25hbFByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoXCJvbmVPZlwiKSkmJnJlbmFtZVJlcXVpcmVkUHJvcGV0aWVzKGUuYWRkaXRpb25hbFByb3BlcnRpZXMpfWVsc2VcImFycmF5XCI9PT1lLnR5cGUmJnJlbmFtZVJlcXVpcmVkUHJvcGV0aWVzKGUuaXRlbXMpfWZ1bmN0aW9uIHBvcHVsYXRlU2NoZW1hTWFwKGUsdCl7dmFyIHI9Y3JlYXRlUHNldWRvU2NoZW1hKHQpO2lmKHIuJGlkPWUsc2NoZW1hTWFwW2VdPXIsdCl7aWYodC5oYXNPd25Qcm9wZXJ0eShcIm9uZU9mXCIpKXtyLm9uZU9mPW5ldyBBcnJheSxyLnR5cGU9XCJvbmVPZlwiO2Zvcih2YXIgbiBpbiB0Lm9uZU9mKXt2YXIgYT1lK1wiLlwiK247ci5vbmVPZltuXT1hLHBvcHVsYXRlU2NoZW1hTWFwKGEsdC5vbmVPZltuXSl9fWVsc2UgaWYodC5oYXNPd25Qcm9wZXJ0eShcIiRyZWZcIikpe3ZhciBpPWdldERlZmluaXRpb24odC4kcmVmKTtpZihpKXtpZih0Lmhhc093blByb3BlcnR5KFwidGl0bGVcIil8fHQuaGFzT3duUHJvcGVydHkoXCJkZXNjcmlwdGlvblwiKSl7dmFyIG89e307Zm9yKHZhciBzIGluIGkpb1tzXT1pW3NdO3QuaGFzT3duUHJvcGVydHkoXCJ0aXRsZVwiKSYmKG8udGl0bGU9dC50aXRsZSksdC5oYXNPd25Qcm9wZXJ0eShcImRlc2NyaXB0aW9uXCIpJiYoby5kZXNjcmlwdGlvbj10LmRlc2NyaXB0aW9uKSxpPW99cG9wdWxhdGVTY2hlbWFNYXAoZSxpKX19ZWxzZSBpZihcIm9iamVjdFwiPT09dC50eXBlKXtpZih0LnByb3BlcnRpZXMpe3IucHJvcGVydGllcz1uZXcgT2JqZWN0O2Zvcih2YXIgcyBpbiB0LnByb3BlcnRpZXMpe3ZhciBhPWUrXCIuXCIrcztyLnByb3BlcnRpZXNbc109YTt2YXIgdT10LnByb3BlcnRpZXNbc107dC5yZXF1aXJlZFByb3BlcnRpZXMmJihjb250YWluc1N0cih0LnJlcXVpcmVkUHJvcGVydGllcyxzKT91LnJlcXVpcmVkPSEwOnUucmVxdWlyZWQ9ITEpLHBvcHVsYXRlU2NoZW1hTWFwKGEsdSl9fWlmKHQucGF0dGVyblByb3BlcnRpZXMpe3IucGF0dGVyblByb3BlcnRpZXM9bmV3IE9iamVjdDtmb3IodmFyIGwgaW4gdC5wYXR0ZXJuUHJvcGVydGllcyl7dmFyIGQ9ZStcIltcIitsK1wiXVwiO3IucGF0dGVyblByb3BlcnRpZXNbbF09ZDt2YXIgcD10LnBhdHRlcm5Qcm9wZXJ0aWVzW2xdO3AuaGFzT3duUHJvcGVydHkoXCJ0eXBlXCIpfHxwLmhhc093blByb3BlcnR5KFwiJHJlZlwiKXx8cC5oYXNPd25Qcm9wZXJ0eShcIm9uZU9mXCIpP3BvcHVsYXRlU2NoZW1hTWFwKGQsdC5wYXR0ZXJuUHJvcGVydGllc1tsXSk6cG9wdWxhdGVTY2hlbWFNYXAoZCxTQ0hFTUFfQU5ZKX19aWYodC5hZGRpdGlvbmFsUHJvcGVydGllcyl7dmFyIGE9ZStcIlsqXVwiO3IuYWRkaXRpb25hbFByb3BlcnRpZXM9YSx0LmFkZGl0aW9uYWxQcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KFwidHlwZVwiKXx8dC5hZGRpdGlvbmFsUHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShcIm9uZU9mXCIpP3BvcHVsYXRlU2NoZW1hTWFwKGEsdC5hZGRpdGlvbmFsUHJvcGVydGllcyk6cG9wdWxhdGVTY2hlbWFNYXAoYSxTQ0hFTUFfQU5ZKX19ZWxzZVwiYXJyYXlcIj09PXQudHlwZSYmKHIuaXRlbXM9ZStcIlsjXVwiLHBvcHVsYXRlU2NoZW1hTWFwKHIuaXRlbXMsdC5pdGVtcykpO2lmKHQuaGFzT3duUHJvcGVydHkoXCJkZXBlbmRzT25cIikpe251bGw9PT10LmRlcGVuZHNPbiYmKHQuZGVwZW5kc09uPVtcIiRcIl0pO2Zvcih2YXIgYz1uZXcgQXJyYXksbj0wO248dC5kZXBlbmRzT24ubGVuZ3RoO24rKyl0LmRlcGVuZHNPbltuXT90LmRlcGVuZHNPbltuXS5zdGFydHNXaXRoKFwiJFwiKT9jW25dPXQuZGVwZW5kc09uW25dOmUuZW5kc1dpdGgoXCJdXCIpP2Nbbl09ZStcIi5cIit0LmRlcGVuZHNPbltuXTpjW25dPWUuc3Vic3RyaW5nKDAsZS5sYXN0SW5kZXhPZihcIi5cIikpK1wiLlwiK3QuZGVwZW5kc09uW25dOmNbbl09XCIkXCI7c2NoZW1hTWFwW2VdLmRlcGVuZHNPbj1jO2Zvcih2YXIgbj0wO248Yy5sZW5ndGg7bisrKXt2YXIgbT1kZXBlbmRlbmN5TWFwW2Nbbl1dO218fChtPW5ldyBBcnJheSxkZXBlbmRlbmN5TWFwW2Nbbl1dPW0pLG1bbS5sZW5ndGhdPWV9fX19ZnVuY3Rpb24gcmVuZGVyVGl0bGUoZSx0LHIpe2lmKGUmJnQpe3ZhciBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcImFueVwiIT09ci50eXBlJiZcIm9iamVjdFwiIT09ci50eXBlJiZcImFycmF5XCIhPT1yLnR5cGUmJihuLmh0bWxGb3I9Z2V0SW5wdXRJZCgpKTt2YXIgYT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0K1wiOlwiKTtpZihhcHBlbmRDaGlsZChuLGEsciksci5kZXNjcmlwdGlvbiYmKG4udGl0bGU9ci5kZXNjcmlwdGlvbiksci5yZXF1aXJlZCl7dmFyIGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN1cFwiKTthcHBlbmRDaGlsZChpLGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiKlwiKSxyKSxhcHBlbmRDaGlsZChuLGksciksbi5jbGFzc05hbWU9XCJyZXF1aXJlZFwifWFwcGVuZENoaWxkKGUsbixyKX19ZnVuY3Rpb24gZ2V0SW5wdXRJZCgpe3JldHVybiBmb3JtSWQrXCJfXCIraW5wdXRDb3VudGVyfWZ1bmN0aW9uIHZhbGlkYXRlKGUpe3ZhciB0PSEwO2lmKGUuaGFzT3duUHJvcGVydHkoXCJnZXRWYWxpZGF0aW9uRXJyb3JcIikpe3ZhciByPWUuZ2V0VmFsaWRhdGlvbkVycm9yKCk7cj8oQnJ1dHVzaW5Gb3Jtcy5vblZhbGlkYXRpb25FcnJvcihlLHIpLHQ9ITEpOkJydXR1c2luRm9ybXMub25WYWxpZGF0aW9uU3VjY2VzcyhlKX1pZihlLmNoaWxkTm9kZXMpZm9yKHZhciBuPTA7bjxlLmNoaWxkTm9kZXMubGVuZ3RoO24rKyl2YWxpZGF0ZShlLmNoaWxkTm9kZXNbbl0pfHwodD0hMSk7cmV0dXJuIHR9ZnVuY3Rpb24gY2xlYXIoZSl7aWYoZSlmb3IoO2UuZmlyc3RDaGlsZDspZS5yZW1vdmVDaGlsZChlLmZpcnN0Q2hpbGQpfWZ1bmN0aW9uIHJlbmRlcihlLHQscixuLGEsaSl7dmFyIG89Z2V0U2NoZW1hSWQocikscz1nZXRTY2hlbWEobyk7cmVuZGVySW5mb01hcFtvXT1uZXcgT2JqZWN0LHJlbmRlckluZm9NYXBbb10udGl0bGVDb250YWluZXI9ZSxyZW5kZXJJbmZvTWFwW29dLmNvbnRhaW5lcj10LHJlbmRlckluZm9NYXBbb10ucGFyZW50T2JqZWN0PW4scmVuZGVySW5mb01hcFtvXS5wcm9wZXJ0eVByb3ZpZGVyPWEscmVuZGVySW5mb01hcFtvXS52YWx1ZT1pLGNsZWFyKGUpLGNsZWFyKHQpO3ZhciB1PXJlbmRlcmVyc1tzLnR5cGVdO2lmKHUmJiFzLmRlcGVuZHNPbilzLnRpdGxlP3JlbmRlclRpdGxlKGUscy50aXRsZSxzKTphJiZyZW5kZXJUaXRsZShlLGEuZ2V0VmFsdWUoKSxzKSxpfHwoaT1cInVuZGVmaW5lZFwiIT10eXBlb2YgaW5pdGlhbFZhbHVlJiZudWxsIT09aW5pdGlhbFZhbHVlP2dldEluaXRpYWxWYWx1ZShyKTpzW1wiZGVmYXVsdFwiXSksdSh0LHIsbixhLGkpO2Vsc2UgaWYocy4kcmVmJiZvYmouc2NoZW1hUmVzb2x2ZXIpe3ZhciBsPWZ1bmN0aW9uKGUpe2lmKGUmJmUuaGFzT3duUHJvcGVydHkocikmJkpTT04uc3RyaW5naWZ5KHNjaGVtYU1hcFtyXSkhPT1KU09OLnN0cmluZ2lmeShlW3JdKSl7Y2xlYW5TY2hlbWFNYXAociksY2xlYW5EYXRhKHIpLHBvcHVsYXRlU2NoZW1hTWFwKHIsZVtyXSk7dmFyIHQ9cmVuZGVySW5mb01hcFtyXTt0JiZyZW5kZXIodC50aXRsZUNvbnRhaW5lcix0LmNvbnRhaW5lcixyLHQucGFyZW50T2JqZWN0LHQucHJvcGVydHlQcm92aWRlcix0LnZhbHVlKX1CcnV0dXNpbkZvcm1zLm9uUmVzb2x1dGlvbkZpbmlzaGVkKG4pfTtCcnV0dXNpbkZvcm1zLm9uUmVzb2x1dGlvblN0YXJ0ZWQobiksb2JqLnNjaGVtYVJlc29sdmVyKFtyXSxvYmouZ2V0RGF0YSgpLGwpfX1mdW5jdGlvbiBjcmVhdGVQcm9wZXJ0eVByb3ZpZGVyKGUsdCl7dmFyIHI9bmV3IE9iamVjdDtyZXR1cm4gci5nZXRWYWx1ZT1lLHIub25jaGFuZ2U9dCxyfWZ1bmN0aW9uIGdldEluaXRpYWxWYWx1ZShpZCl7dmFyIHJldDt0cnl7ZXZhbChcInJldCA9IGluaXRpYWxWYWx1ZVwiK2lkLnN1YnN0cmluZygxKSl9Y2F0Y2goZSl7cmV0PW51bGx9cmV0dXJuIHJldH1mdW5jdGlvbiBnZXRWYWx1ZShzY2hlbWEsaW5wdXQpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGlucHV0LmdldFZhbHVlKXJldHVybiBpbnB1dC5nZXRWYWx1ZSgpO3ZhciB2YWx1ZTtyZXR1cm4gdmFsdWU9XCJzZWxlY3RcIj09PWlucHV0LnRhZ05hbWUudG9Mb3dlckNhc2UoKT9pbnB1dC5vcHRpb25zW2lucHV0LnNlbGVjdGVkSW5kZXhdLnZhbHVlOmlucHV0LnZhbHVlLFwiXCI9PT12YWx1ZT9udWxsOihcImludGVnZXJcIj09PXNjaGVtYS50eXBlPyh2YWx1ZT1wYXJzZUludCh2YWx1ZSksaXNGaW5pdGUodmFsdWUpfHwodmFsdWU9bnVsbCkpOlwibnVtYmVyXCI9PT1zY2hlbWEudHlwZT8odmFsdWU9cGFyc2VGbG9hdCh2YWx1ZSksaXNGaW5pdGUodmFsdWUpfHwodmFsdWU9bnVsbCkpOlwiYm9vbGVhblwiPT09c2NoZW1hLnR5cGU/XCJpbnB1dFwiPT09aW5wdXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpPyh2YWx1ZT1pbnB1dC5jaGVja2VkLHZhbHVlfHwodmFsdWU9ITEpKTpcInNlbGVjdFwiPT09aW5wdXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpJiYodmFsdWU9XCJ0cnVlXCI9PT1pbnB1dC52YWx1ZT8hMDpcImZhbHNlXCI9PT1pbnB1dC52YWx1ZT8hMTpudWxsKTpcImFueVwiPT09c2NoZW1hLnR5cGUmJnZhbHVlJiZldmFsKFwidmFsdWU9XCIrdmFsdWUpLHZhbHVlKX1mdW5jdGlvbiBnZXRTY2hlbWFJZChlKXtyZXR1cm4gZS5yZXBsYWNlKC9cXFtcIlteXCJdKlwiXFxdL2csXCJbKl1cIikucmVwbGFjZSgvXFxbXFxkKlxcXS9nLFwiWyNdXCIpfWZ1bmN0aW9uIGdldFBhcmVudFNjaGVtYUlkKGUpe3JldHVybiBlLnN1YnN0cmluZygwLGUubGFzdEluZGV4T2YoXCIuXCIpKX1mdW5jdGlvbiBnZXRTY2hlbWEoZSl7cmV0dXJuIHNjaGVtYU1hcFtlXX1mdW5jdGlvbiBjbGVhblNjaGVtYU1hcChlKXtmb3IodmFyIHQgaW4gc2NoZW1hTWFwKWUuc3RhcnRzV2l0aCh0KSYmZGVsZXRlIHNjaGVtYU1hcFt0XX1mdW5jdGlvbiBjbGVhbkRhdGEoZSl7dmFyIHQ9bmV3IEV4cHJlc3Npb24oZSk7dC52aXNpdChkYXRhLGZ1bmN0aW9uKGUsdCxyKXtkZWxldGUgdFtyXX0pfWZ1bmN0aW9uIG9uRGVwZW5kZW5jeUNoYW5nZWQoZSx0KXt2YXIgcj1kZXBlbmRlbmN5TWFwW2VdO2lmKHImJm9iai5zY2hlbWFSZXNvbHZlcil7dmFyIG49ZnVuY3Rpb24oZSl7aWYoZSlmb3IodmFyIHIgaW4gZSlpZihKU09OLnN0cmluZ2lmeShzY2hlbWFNYXBbcl0pIT09SlNPTi5zdHJpbmdpZnkoZVtyXSkpe2NsZWFuU2NoZW1hTWFwKHIpLGNsZWFuRGF0YShyKSxwb3B1bGF0ZVNjaGVtYU1hcChyLGVbcl0pO3ZhciBuPXJlbmRlckluZm9NYXBbcl07biYmcmVuZGVyKG4udGl0bGVDb250YWluZXIsbi5jb250YWluZXIscixuLnBhcmVudE9iamVjdCxuLnByb3BlcnR5UHJvdmlkZXIsbi52YWx1ZSl9QnJ1dHVzaW5Gb3Jtcy5vblJlc29sdXRpb25GaW5pc2hlZCh0KX07QnJ1dHVzaW5Gb3Jtcy5vblJlc29sdXRpb25TdGFydGVkKHQpLG9iai5zY2hlbWFSZXNvbHZlcihyLG9iai5nZXREYXRhKCksbil9fWZ1bmN0aW9uIEV4cHJlc3Npb24oZSl7ZnVuY3Rpb24gdChlKXtpZihudWxsPT09ZSlyZXR1cm4gbnVsbDtmb3IodmFyIHQ9bmV3IEFycmF5LHI9bnVsbCxuPTAsYT0wO2E8ZS5sZW5ndGg7YSsrKSdcIic9PT1lLmNoYXJBdChhKT9udWxsPT09cj9yPSdcIic6J1wiJz09PXImJihyPW51bGwsdFt0Lmxlbmd0aF09ZS5zdWJzdHJpbmcobixhKzEpLnRyaW0oKSxuPWErMSk6XCInXCI9PT1lLmNoYXJBdChhKT9udWxsPT09cj9yPVwiJ1wiOlwiJ1wiPT09ciYmKHI9bnVsbCx0W3QubGVuZ3RoXT1lLnN1YnN0cmluZyhuLGErMSkudHJpbSgpLG49YSsxKTpcIltcIj09PWUuY2hhckF0KGEpP251bGw9PT1yJiYobiE9PWEmJih0W3QubGVuZ3RoXT1lLnN1YnN0cmluZyhuLGEpLnRyaW0oKSksdFt0Lmxlbmd0aF09XCJbXCIsbj1hKzEpOlwiXVwiPT09ZS5jaGFyQXQoYSk/bnVsbD09PXImJihuIT09YSYmKHRbdC5sZW5ndGhdPWUuc3Vic3RyaW5nKG4sYSkudHJpbSgpKSx0W3QubGVuZ3RoXT1cIl1cIixuPWErMSk6XCIuXCI9PT1lLmNoYXJBdChhKT9udWxsPT09ciYmKG4hPT1hJiYodFt0Lmxlbmd0aF09ZS5zdWJzdHJpbmcobixhKS50cmltKCkpLG49YSsxKTphPT09ZS5sZW5ndGgtMSYmKHRbdC5sZW5ndGhdPWUuc3Vic3RyaW5nKG4sYSsxKS50cmltKCkpO3JldHVybiB0fShudWxsPT09ZXx8MD09PWUubGVuZ3RofHxcIi5cIj09PWUpJiYoZT1cIiRcIik7Zm9yKHZhciByPW5ldyBBcnJheSxuPXQoZSksYT0hMSxpPTAsbz1cIlwiLHM9MDtzPG4ubGVuZ3RoO3MrKyl7dmFyIHU9bltzXTtpZihcIltcIj09PXUpe2lmKGEpdGhyb3dcIkVycm9yIHBhcnNpbmcgZXhwcmVzc2lvbiAnXCIrZStcIic6IE5lc3RlZCBbIGZvdW5kXCI7YT0hMCxpPTAsbys9dX1lbHNlIGlmKFwiXVwiPT09dSl7aWYoIWEpdGhyb3dcIkVycm9yIHBhcnNpbmcgZXhwcmVzc2lvbiAnXCIrZStcIic6IFVuYmFsYW5jZWQgXSBmb3VuZFwiO2E9ITEsbys9dSxyW3IubGVuZ3RoXT1vLG89XCJcIn1lbHNlIGlmKGEpe2lmKGk+MCl0aHJvd1wiRXJyb3IgcGFyc2luZyBleHByZXNzaW9uICdcIitlK1wiJzogTXVsdGlwbGUgdG9rZW5zIGZvdW5kIGluc2lkZSBhIGJyYWNrZXRcIjtvKz11LGkrK31lbHNlIHJbci5sZW5ndGhdPXU7aWYocz09PW4ubGVuZ3RoLTEmJmEpdGhyb3dcIkVycm9yIHBhcnNpbmcgZXhwcmVzc2lvbiAnXCIrZStcIic6IFVuYmFsYW5jZWQgWyBmb3VuZFwifXRoaXMuZXhwPWUsdGhpcy5xdWV1ZT1yLHRoaXMudmlzaXQ9ZnVuY3Rpb24oZSx0KXtmdW5jdGlvbiByKGUsbixhLGksbyl7aWYobnVsbCE9YSl7dmFyIHM9bi5zaGlmdCgpO2lmKFwiJFwiPT09cyl7ZT1cIiRcIjt2YXIgcz1uLnNoaWZ0KCl9aWYocylpZihBcnJheS5pc0FycmF5KGEpKXtpZighcy5zdGFydHNXaXRoKFwiW1wiKSl0aHJvd1wiTm9kZSAnXCIrZStcIicgaXMgb2YgdHlwZSBhcnJheVwiO3ZhciB1PXMuc3Vic3RyaW5nKDEscy5sZW5ndGgtMSk7aWYodS5lcXVhbHMoXCIjXCIpKWZvcih2YXIgbD0wO2w8YS5sZW5ndGg7bCsrKXt2YXIgZD1hW2xdO3IoZStzLG4uc2xpY2UoMCksZCxhLGwpLHIoZStcIltcIitsK1wiXVwiLG4uc2xpY2UoMCksZCxhLGwpfWVsc2UgaWYoXCIkXCI9PT11KXt2YXIgZD1hW2EubGVuZ3RoLTFdO3IoZStzLG4uc2xpY2UoMCksZCxhLGEubGVuZ3RoLTEpfWVsc2V7dmFyIHA9cGFyc2VJbnQodSk7aWYoaXNOYU4ocCkpdGhyb3dcIkVsZW1lbnQgJ1wiK3UrXCInIG9mIG5vZGUgJ1wiK2UrXCInIGlzIG5vdCBhbiBpbnRlZ2VyLCBvciB0aGUgJyQnIGxhc3QgZWxlbWVudCBzeW1ib2wsICBvciB0aGUgd2lsY2FyZCBzeW1ib2wgJyMnXCI7aWYoMD5wKXRocm93XCJFbGVtZW50ICdcIit1K1wiJyBvZiBub2RlICdcIitlK1wiJyBpcyBsb3dlciB0aGFuIHplcm9cIjt2YXIgZD1hW3BdO3IoZStzLG4uc2xpY2UoMCksZCxhLHApfX1lbHNle2lmKFwib2JqZWN0XCIhPXR5cGVvZiBhKXRocm93XCJib29sZWFuXCI9PXR5cGVvZiBhfHxcIm51bWJlclwiPT10eXBlb2YgYXx8XCJzdHJpbmdcIj09dHlwZW9mIGE/XCJOb2RlIGlzIGxlYWYgYnV0IHN0aWxsIGFyZSB0b2tlbnMgcmVtYWluaW5nOiBcIitzOlwiTm9kZSB0eXBlICdcIit0eXBlb2YgYStcIicgbm90IHN1cHBvcnRlZCBmb3IgaW5kZXggZmllbGQgJ1wiK2UrXCInXCI7aWYoXCJbKl1cIj09PXMpZm9yKHZhciBjIGluIGEpe3ZhciBkPWFbY107cihlK3Msbi5zbGljZSgwKSxkLGEsYykscihlKydbXCInK2MrJ1wiXScsbi5zbGljZSgwKSxkLGEsYyl9ZWxzZXt2YXIgZDtpZihzLnN0YXJ0c1dpdGgoXCJbXCIpKXt2YXIgdT1zLnN1YnN0cmluZygxLHMubGVuZ3RoLTEpO2lmKCF1LnN0YXJ0c1dpdGgoJ1wiJykmJiF1LnN0YXJ0c1dpdGgoXCInXCIpKXRocm93XCJFbGVtZW50ICdcIit1K1wiJyBvZiBub2RlICdcIitlK1wiJyBtdXN0IGJlIGEgc3RyaW5nIGV4cHJlc3Npb24gb3Igd2lsY2FyZCAnKidcIjt1PXUuc3Vic3RyaW5nKDEsdS5sZW5ndGgoKS0xKSxlKz1zLGQ9YVt1XX1lbHNlIGU9ZS5sZW5ndGg+MD9lK1wiLlwiK3M6cyxkPWFbc107cihlLG4sZCxhLHMpfX1lbHNlIHQoYSxpLG8pfX1yKHRoaXMuZXhwLHRoaXMucXVldWUsZSl9fXZhciBTQ0hFTUFfQU5ZPXt0eXBlOlwiYW55XCJ9LG9iaj1uZXcgT2JqZWN0LHNjaGVtYU1hcD1uZXcgT2JqZWN0LGRlcGVuZGVuY3lNYXA9bmV3IE9iamVjdCxyZW5kZXJJbmZvTWFwPW5ldyBPYmplY3QsY29udGFpbmVyLGRhdGEsZXJyb3IsaW5pdGlhbFZhbHVlLGlucHV0Q291bnRlcj0wLHJvb3Q9c2NoZW1hLGZvcm1JZD1cIkJydXR1c2luRm9ybXMjXCIrQnJ1dHVzaW5Gb3Jtcy5pbnN0YW5jZXMubGVuZ3RoO3JlbmFtZVJlcXVpcmVkUHJvcGV0aWVzKHNjaGVtYSkscG9wdWxhdGVTY2hlbWFNYXAoXCIkXCIsc2NoZW1hKSx2YWxpZGF0ZURlcGVuY3lNYXBJc0FjeWNsaWMoKTt2YXIgcmVuZGVyZXJzPW5ldyBPYmplY3Q7cmV0dXJuIHJlbmRlcmVycy5pbnRlZ2VyPWZ1bmN0aW9uKGUsdCxyLG4sYSl7cmVuZGVyZXJzLnN0cmluZyhlLHQscixuLGEpfSxyZW5kZXJlcnMubnVtYmVyPWZ1bmN0aW9uKGUsdCxyLG4sYSl7cmVuZGVyZXJzLnN0cmluZyhlLHQscixuLGEpfSxyZW5kZXJlcnMuYW55PWZ1bmN0aW9uKGUsdCxyLG4sYSl7cmVuZGVyZXJzLnN0cmluZyhlLHQscixuLGEpfSxyZW5kZXJlcnMuc3RyaW5nPWZ1bmN0aW9uKGUsdCxyLG4sYSl7dmFyIGksbz1nZXRTY2hlbWFJZCh0KSxzPWdldFBhcmVudFNjaGVtYUlkKG8pLHU9Z2V0U2NoZW1hKG8pLGw9Z2V0U2NoZW1hKHMpO2lmKFwiYW55XCI9PT11LnR5cGUpaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIiksYSYmKGkudmFsdWU9SlNPTi5zdHJpbmdpZnkoYSxudWxsLDQpLHUucmVhZE9ubHkmJihpLmRpc2FibGVkPSEwKSk7ZWxzZSBpZih1Lm1lZGlhKWk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGkudHlwZT1cImZpbGVcIixhcHBlbmRDaGlsZChpLGQsdSk7ZWxzZSBpZih1W1wiZW51bVwiXSl7aWYoaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpLCF1LnJlcXVpcmVkKXt2YXIgZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpLHA9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIik7ZC52YWx1ZT1cIlwiLGFwcGVuZENoaWxkKGQscCx1KSxhcHBlbmRDaGlsZChpLGQsdSl9Zm9yKHZhciBjPTAsbT0wO208dVtcImVudW1cIl0ubGVuZ3RoO20rKyl7dmFyIGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSxwPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHVbXCJlbnVtXCJdW21dKTtkLnZhbHVlPXVbXCJlbnVtXCJdW21dLGFwcGVuZENoaWxkKGQscCx1KSxhcHBlbmRDaGlsZChpLGQsdSksYSYmdVtcImVudW1cIl1bbV09PT1hJiYoYz1tLHUucmVxdWlyZWR8fGMrKyx1LnJlYWRPbmx5JiYoaS5kaXNhYmxlZD0hMCkpfTE9PT11W1wiZW51bVwiXS5sZW5ndGg/aS5zZWxlY3RlZEluZGV4PTE6aS5zZWxlY3RlZEluZGV4PWN9ZWxzZXtpZihpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxcImludGVnZXJcIj09PXUudHlwZXx8XCJudW1iZXJcIj09PXUudHlwZSlpLnR5cGU9XCJudW1iZXJcIixpLnN0ZXA9dS5zdGVwP1wiXCIrdS5zdGVwOlwiYW55XCIsXCJudW1iZXJcIiE9dHlwZW9mIGEmJihhPW51bGwpO2Vsc2UgaWYoXCJkYXRlLXRpbWVcIj09PXUuZm9ybWF0KXRyeXtpLnR5cGU9XCJkYXRldGltZS1sb2NhbFwifWNhdGNoKGYpe2kudHlwZT1cInRleHRcIn1lbHNlXCJlbWFpbFwiPT09dS5mb3JtYXQ/aS50eXBlPVwiZW1haWxcIjpcInRleHRcIj09PXUuZm9ybWF0P2k9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpOmkudHlwZT1cInRleHRcIjtudWxsIT09YSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEmJihpLnZhbHVlPWEsdS5yZWFkT25seSYmKGkuZGlzYWJsZWQ9ITApKX1yZXR1cm4gaS5zY2hlbWE9byxpLnNldEF0dHJpYnV0ZShcImF1dG9jb3JyZWN0XCIsXCJvZmZcIiksaS5nZXRWYWxpZGF0aW9uRXJyb3I9ZnVuY3Rpb24oKXt0cnl7dmFyIGU9Z2V0VmFsdWUodSxpKTtpZihudWxsPT09ZSl7aWYodS5yZXF1aXJlZCl7aWYoIWx8fFwib2JqZWN0XCIhPT1sLnR5cGUpcmV0dXJuIEJydXR1c2luRm9ybXMubWVzc2FnZXMucmVxdWlyZWQ7aWYobC5yZXF1aXJlZClyZXR1cm4gQnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5yZXF1aXJlZDtmb3IodmFyIHQgaW4gcilpZihudWxsIT09clt0XSlyZXR1cm4gQnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5yZXF1aXJlZH19ZWxzZXtpZih1LnBhdHRlcm4mJiF1LnBhdHRlcm4udGVzdChlKSlyZXR1cm4gQnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5wYXR0ZXJuLmZvcm1hdCh1LnBhdHRlcm4uc291cmNlKTtpZih1Lm1pbkxlbmd0aCYmKCFlfHx1Lm1pbkxlbmd0aD5lLmxlbmd0aCkpcmV0dXJuIEJydXR1c2luRm9ybXMubWVzc2FnZXMubWluTGVuZ3RoLmZvcm1hdCh1Lm1pbkxlbmd0aCk7aWYodS5tYXhMZW5ndGgmJmUmJnUubWF4TGVuZ3RoPGUubGVuZ3RoKXJldHVybiBCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLm1heExlbmd0aC5mb3JtYXQodS5tYXhMZW5ndGgpfWlmKG51bGwhPT1lJiYhaXNOYU4oZSkpe2lmKHUubXVsdGlwbGVPZiYmZSV1Lm11bHRpcGxlT2YhPT0wKXJldHVybiBCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLm11bHRpcGxlT2YuZm9ybWF0KHUubXVsdGlwbGVPZik7aWYodS5oYXNPd25Qcm9wZXJ0eShcIm1heGltdW1cIikpe2lmKHUuZXhjbHVzaXZlTWF4aW11bSYmZT49dS5tYXhpbXVtKXJldHVybiBCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLmV4Y2x1c2l2ZU1heGltdW0uZm9ybWF0KHUubWF4aW11bSk7aWYoIXUuZXhjbHVzaXZlTWF4aW11bSYmZT51Lm1heGltdW0pcmV0dXJuIEJydXR1c2luRm9ybXMubWVzc2FnZXMubWF4aW11bS5mb3JtYXQodS5tYXhpbXVtKX1pZih1Lmhhc093blByb3BlcnR5KFwibWluaW11bVwiKSl7aWYodS5leGNsdXNpdmVNaW5pbXVtJiZlPD11Lm1pbmltdW0pcmV0dXJuIEJydXR1c2luRm9ybXMubWVzc2FnZXMuZXhjbHVzaXZlTWluaW11bS5mb3JtYXQodS5taW5pbXVtKTtpZighdS5leGNsdXNpdmVNaW5pbXVtJiZlPHUubWluaW11bSlyZXR1cm4gQnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5taW5pbXVtLmZvcm1hdCh1Lm1pbmltdW0pfX19Y2F0Y2gobil7cmV0dXJuIEJydXR1c2luRm9ybXMubWVzc2FnZXMuaW52YWxpZFZhbHVlfX0saS5vbmNoYW5nZT1mdW5jdGlvbigpe3ZhciBlO3RyeXtlPWdldFZhbHVlKHUsaSl9Y2F0Y2godCl7ZT1udWxsfXI/cltuLmdldFZhbHVlKCldPWU6ZGF0YT1lLG9uRGVwZW5kZW5jeUNoYW5nZWQobyxpKX0sdS5kZXNjcmlwdGlvbiYmKGkudGl0bGU9dS5kZXNjcmlwdGlvbixpLnBsYWNlaG9sZGVyPXUuZGVzY3JpcHRpb24pLGkub25jaGFuZ2UoKSxpLmlkPWdldElucHV0SWQoKSxpbnB1dENvdW50ZXIrKyxhcHBlbmRDaGlsZChlLGksdSkscn0scmVuZGVyZXJzW1wiYm9vbGVhblwiXT1mdW5jdGlvbihlLHQscixuLGEpe3ZhciBpLG89Z2V0U2NoZW1hSWQodCkscz1nZXRTY2hlbWEobyk7aWYocy5yZXF1aXJlZClpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxpLnR5cGU9XCJjaGVja2JveFwiLGE9PT0hMCYmKGkuY2hlY2tlZD0hMCk7ZWxzZXtpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7dmFyIHU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSxsPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpO2wudmFsdWU9XCJcIixhcHBlbmRDaGlsZCh1LGwscyksYXBwZW5kQ2hpbGQoaSx1LHMpO3ZhciBkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIikscD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzW1widHJ1ZVwiXSk7ZC52YWx1ZT1cInRydWVcIixhcHBlbmRDaGlsZChkLHAscyksYXBwZW5kQ2hpbGQoaSxkLHMpO3ZhciBjPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiksbT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzW1wiZmFsc2VcIl0pO2MudmFsdWU9XCJmYWxzZVwiLGFwcGVuZENoaWxkKGMsbSxzKSxhcHBlbmRDaGlsZChpLGMscyksYT09PSEwP2kuc2VsZWN0ZWRJbmRleD0xOmE9PT0hMSYmKGkuc2VsZWN0ZWRJbmRleD0yKX1pLm9uY2hhbmdlPWZ1bmN0aW9uKCl7cj9yW24uZ2V0VmFsdWUoKV09Z2V0VmFsdWUocyxpKTpkYXRhPWdldFZhbHVlKHMsaSksb25EZXBlbmRlbmN5Q2hhbmdlZChvLGkpfSxpLnNjaGVtYT1vLGkuaWQ9Z2V0SW5wdXRJZCgpLGlucHV0Q291bnRlcisrLHMuZGVzY3JpcHRpb24mJihpLnRpdGxlPXMuZGVzY3JpcHRpb24pLGkub25jaGFuZ2UoKSxhcHBlbmRDaGlsZChlLGkscyl9LHJlbmRlcmVycy5vbmVPZj1mdW5jdGlvbihlLHQscixuLGEpe3ZhciBpPWdldFNjaGVtYUlkKHQpLG89Z2V0U2NoZW1hKGkpLHM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKSx1PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dS5pbm5lckhUTUw9XCJcIixzLnR5cGU9XCJzZWxlY3RcIixzLnNjaGVtYT1pO3ZhciBsPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7bC52YWx1ZT1udWxsLGFwcGVuZENoaWxkKHMsbCxvKTtmb3IodmFyIGQ9MDtkPG8ub25lT2YubGVuZ3RoO2QrKyl7dmFyIHA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSxjPWkrXCIuXCIrZCxtPWdldFNjaGVtYShjKSxmPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG0udGl0bGUpO2lmKHAudmFsdWU9by5vbmVPZltkXSxhcHBlbmRDaGlsZChwLGYsbyksYXBwZW5kQ2hpbGQocyxwLG8pLHZvaWQgMCE9PWEmJm51bGwhPT1hJiYoby5yZWFkT25seSYmKHMuZGlzYWJsZWQ9ITApLGEuaGFzT3duUHJvcGVydHkoXCJ0eXBlXCIpJiZtLmhhc093blByb3BlcnR5KFwicHJvcGVydGllc1wiKSYmbS5wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KFwidHlwZVwiKSkpe3ZhciBoPWdldFNjaGVtYShtLnByb3BlcnRpZXMudHlwZSk7YS50eXBlPT09aFtcImVudW1cIl1bMF0mJihzLnNlbGVjdGVkSW5kZXg9ZCsxLHJlbmRlcihudWxsLHUsdCtcIi5cIisocy5zZWxlY3RlZEluZGV4LTEpLHIsbixhKSl9fXMub25jaGFuZ2U9ZnVuY3Rpb24oKXtyZW5kZXIobnVsbCx1LHQrXCIuXCIrKHMuc2VsZWN0ZWRJbmRleC0xKSxyLG4sYSl9LGFwcGVuZENoaWxkKGUscyxvKSxhcHBlbmRDaGlsZChlLHUsbyl9LHJlbmRlcmVycy5vYmplY3Q9ZnVuY3Rpb24oZSx0LHIsbixhKXtmdW5jdGlvbiBpKGUpe3ZhciB0PW5ldyBPYmplY3Q7cmV0dXJuIHQuZ2V0VmFsdWU9ZnVuY3Rpb24oKXtyZXR1cm4gZX0sdC5vbmNoYW5nZT1mdW5jdGlvbihlKXt9LHR9ZnVuY3Rpb24gbyhlLHQscixuLGEsaSl7dmFyIG89Z2V0U2NoZW1hSWQocikscz1nZXRTY2hlbWEobyksdT10LnRCb2RpZXNbMF0sbD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIiksZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7ZC5jbGFzc05hbWU9XCJhZGQtcHJvcC1uYW1lXCI7dmFyIHA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpLGM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpLG09ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpLGY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpLGg9XCIkXCIrT2JqZWN0LmtleXMoZSkubGVuZ3RoK1wiJFwiLHY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO3YuY2xhc3NOYW1lPVwicHJvcC12YWx1ZVwiO3ZhciBnPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtnLnR5cGU9XCJ0ZXh0XCI7dmFyIHk7aSYmKHk9UmVnRXhwKGkpKSxnLmdldFZhbGlkYXRpb25FcnJvcj1mdW5jdGlvbigpe3JldHVybiBnLnByZXZpb3VzVmFsdWUhPT1nLnZhbHVlJiZlLmhhc093blByb3BlcnR5KGcudmFsdWUpP0JydXR1c2luRm9ybXMubWVzc2FnZXMuYWRkcHJvcE5hbWVFeGlzdGVudDpnLnZhbHVlP3ZvaWQgMDpCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLmFkZHByb3BOYW1lUmVxdWlyZWR9O3ZhciBiPWNyZWF0ZVByb3BlcnR5UHJvdmlkZXIoZnVuY3Rpb24oKXtpZihnLnZhbHVlKXtpZigheSlyZXR1cm4gZy52YWx1ZTtpZigtMSE9PWcudmFsdWUuc2VhcmNoKHkpKXJldHVybiBnLnZhbHVlfXJldHVybiBofSxmdW5jdGlvbih0KXtiLmdldFZhbHVlKCkhPT10JiYodCYmZS5oYXNPd25Qcm9wZXJ0eSh0KXx8KHQ9aCksKGUuaGFzT3duUHJvcGVydHkodCl8fHkmJi0xPT09Yi5nZXRWYWx1ZSgpLnNlYXJjaCh5KSkmJihlW2IuZ2V0VmFsdWUoKV09ZVt0XSxkZWxldGUgZVt0XSkpfSk7Zy5vbmJsdXI9ZnVuY3Rpb24oKXtpZihnLnByZXZpb3VzVmFsdWUhPT1nLnZhbHVlKXtmb3IodmFyIHQ9Zy52YWx1ZSxyPTE7Zy5wcmV2aW91c1ZhbHVlIT09dCYmZS5oYXNPd25Qcm9wZXJ0eSh0KTspdD1nLnZhbHVlK1wiKFwiK3IrXCIpXCIscisrO3JldHVybiBnLnZhbHVlPXQsYi5vbmNoYW5nZShnLnByZXZpb3VzVmFsdWUpLHZvaWQoZy5wcmV2aW91c1ZhbHVlPWcudmFsdWUpfX07dmFyIFA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtQLnNldEF0dHJpYnV0ZShcInR5cGVcIixcImJ1dHRvblwiKSxQLmNsYXNzTmFtZT1cInJlbW92ZVwiLGFwcGVuZENoaWxkKFAsZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJ4XCIpLHMpLFAub25jbGljaz1mdW5jdGlvbigpe2RlbGV0ZSBlW2cudmFsdWVdLHQuZGVsZXRlUm93KGwucm93SW5kZXgpLGcudmFsdWU9bnVsbCxiLm9uY2hhbmdlKGcucHJldmlvdXNWYWx1ZSl9LGFwcGVuZENoaWxkKG0sZyxzKSxhcHBlbmRDaGlsZChmLFAscyksYXBwZW5kQ2hpbGQoYyxtLHMpLGFwcGVuZENoaWxkKGMsZixzKSxhcHBlbmRDaGlsZChwLGMscyksYXBwZW5kQ2hpbGQoZCxwLHMpLHZvaWQgMCE9PWkmJihnLnBsYWNlaG9sZGVyPWkpLGFwcGVuZENoaWxkKGwsZCxzKSxhcHBlbmRDaGlsZChsLHYscyksYXBwZW5kQ2hpbGQodSxsLHMpLGFwcGVuZENoaWxkKHQsdSxzKSxyZW5kZXIobnVsbCx2LHIsZSxiLGEpLG4mJihnLnZhbHVlPW4sZy5vbmJsdXIoKSl9dmFyIHM9Z2V0U2NoZW1hSWQodCksdT1nZXRTY2hlbWEocyksbD1uZXcgT2JqZWN0O3I/KG4uZ2V0VmFsdWUoKXx8MD09PW4uZ2V0VmFsdWUoKSkmJihyW24uZ2V0VmFsdWUoKV09bCk6ZGF0YT1sO3ZhciBkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtkLmNsYXNzTmFtZT1cIm9iamVjdFwiO3ZhciBwPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTthcHBlbmRDaGlsZChkLHAsdSk7dmFyIGM9MDtpZih1Lmhhc093blByb3BlcnR5KFwicHJvcGVydGllc1wiKSl7Yz11LnByb3BlcnRpZXMubGVuZ3RoO2Zvcih2YXIgbSBpbiB1LnByb3BlcnRpZXMpe3ZhciBmPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKSxoPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtoLmNsYXNzTmFtZT1cInByb3AtbmFtZVwiO3ZhciB2PXQrXCIuXCIrbSxnPWdldFNjaGVtYShnZXRTY2hlbWFJZCh2KSkseT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7eS5jbGFzc05hbWU9XCJwcm9wLXZhbHVlXCIsYXBwZW5kQ2hpbGQocCxmLGcpLGFwcGVuZENoaWxkKGYsaCxnKSxhcHBlbmRDaGlsZChmLHksZyk7dmFyIGI9aShtKSxQPW51bGw7YSYmKFA9YVttXSkscmVuZGVyKGgseSx2LGwsYixQKX19dmFyIE89W107aWYodS5wYXR0ZXJuUHJvcGVydGllc3x8dS5hZGRpdGlvbmFsUHJvcGVydGllcyl7dmFyIHc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtpZihhcHBlbmRDaGlsZCh3LGQsdSksdS5wYXR0ZXJuUHJvcGVydGllcylmb3IodmFyIHggaW4gdS5wYXR0ZXJuUHJvcGVydGllcyl7dmFyIEM9dS5wYXR0ZXJuUHJvcGVydGllc1t4XSxFPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7RS5jbGFzc05hbWU9XCJhZGQtcGF0dGVybi1kaXZcIjt2YXIgUz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO2lmKFMuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiYnV0dG9uXCIpLFMucGF0dGVybj14LFMuaWQ9dCtcIltcIit4K1wiXVwiLFMub25jbGljaz1mdW5jdGlvbigpe28obCxkLHRoaXMuaWQsdm9pZCAwLHZvaWQgMCx0aGlzLnBhdHRlcm4pfSwodS5tYXhQcm9wZXJ0aWVzfHx1Lm1pblByb3BlcnRpZXMpJiYoUy5nZXRWYWxpZGF0aW9uRXJyb3I9ZnVuY3Rpb24oKXtyZXR1cm4gdS5taW5Qcm9wZXJ0aWVzJiZjK2Qucm93cy5sZW5ndGg8dS5taW5Qcm9wZXJ0aWVzP0JydXR1c2luRm9ybXMubWVzc2FnZXMubWluUHJvcGVydGllcy5mb3JtYXQodS5taW5Qcm9wZXJ0aWVzKTp1Lm1heFByb3BlcnRpZXMmJmMrZC5yb3dzLmxlbmd0aD51Lm1heFByb3BlcnRpZXM/QnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5tYXhQcm9wZXJ0aWVzLmZvcm1hdCh1Lm1heFByb3BlcnRpZXMpOnZvaWQgMH0pLEMuZGVzY3JpcHRpb24mJihTLnRpdGxlPUMuZGVzY3JpcHRpb24pLGFwcGVuZENoaWxkKFMsZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJBZGQgXCIreCksdSksYXBwZW5kQ2hpbGQoRSxTLHUpLGEpZm9yKHZhciBJIGluIGEpaWYoIXUucHJvcGVydGllc3x8IXUucHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShJKSl7dmFyIE49UmVnRXhwKHgpOy0xIT09SS5zZWFyY2goTikmJi0xPT09Ty5pbmRleE9mKEkpJiYobyhsLGQsdCtcIltcIit4K1wiXVwiLEksYVtJXSx4KSxPLnB1c2goSSkpfWFwcGVuZENoaWxkKHcsRSx1KX1pZih1LmFkZGl0aW9uYWxQcm9wZXJ0aWVzKXt2YXIgRj1nZXRTY2hlbWEodS5hZGRpdGlvbmFsUHJvcGVydGllcyksUz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO2lmKFMuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiYnV0dG9uXCIpLFMub25jbGljaz1mdW5jdGlvbigpe28obCxkLHQrXCJbKl1cIix2b2lkIDApfSwodS5tYXhQcm9wZXJ0aWVzfHx1Lm1pblByb3BlcnRpZXMpJiYoUy5nZXRWYWxpZGF0aW9uRXJyb3I9ZnVuY3Rpb24oKXtyZXR1cm4gdS5taW5Qcm9wZXJ0aWVzJiZjK2Qucm93cy5sZW5ndGg8dS5taW5Qcm9wZXJ0aWVzP0JydXR1c2luRm9ybXMubWVzc2FnZXMubWluUHJvcGVydGllcy5mb3JtYXQodS5taW5Qcm9wZXJ0aWVzKTp1Lm1heFByb3BlcnRpZXMmJmMrZC5yb3dzLmxlbmd0aD51Lm1heFByb3BlcnRpZXM/QnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5tYXhQcm9wZXJ0aWVzLmZvcm1hdCh1Lm1heFByb3BlcnRpZXMpOnZvaWQgMH0pLEYuZGVzY3JpcHRpb24mJihTLnRpdGxlPUYuZGVzY3JpcHRpb24pLGFwcGVuZENoaWxkKFMsZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJBZGRcIiksdSksYXBwZW5kQ2hpbGQodyxTLHUpLGEpZm9yKHZhciBJIGluIGEpdS5wcm9wZXJ0aWVzJiZ1LnByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoSSl8fC0xPT09Ty5pbmRleE9mKEkpJiZvKGwsZCx0KydbXCInK20rJ1wiXScsSSxhW0ldKX1hcHBlbmRDaGlsZChlLHcsdSl9ZWxzZSBhcHBlbmRDaGlsZChlLGQsdSl9LHJlbmRlcmVycy5hcnJheT1mdW5jdGlvbihlLHQscixuLGEpe2Z1bmN0aW9uIGkoZSx0LHIsbixhKXt2YXIgaT1nZXRTY2hlbWFJZChyKSxvPWdldFNjaGVtYShpKSxzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKSx1PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTt1LmNsYXNzTmFtZT1cIml0ZW1cIjt2YXIgbD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7bC5jbGFzc05hbWU9XCJpdGVtLWluZGV4XCI7dmFyIGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO2QuY2xhc3NOYW1lPVwiaXRlbS1hY3Rpb25cIjt2YXIgcD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7cC5jbGFzc05hbWU9XCJpdGVtLXZhbHVlXCI7dmFyIGM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtjLnNldEF0dHJpYnV0ZShcInR5cGVcIixcImJ1dHRvblwiKSxjLmNsYXNzTmFtZT1cInJlbW92ZVwiLGE9PT0hMCYmKGMuZGlzYWJsZWQ9ITApLGFwcGVuZENoaWxkKGMsZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJ4XCIpLG8pO3ZhciBtPWZ1bmN0aW9uKCl7Zm9yKHZhciBlPTA7ZTx0LnJvd3MubGVuZ3RoO2UrKyl7dmFyIHI9dC5yb3dzW2VdO3IuY2VsbHNbMF0uaW5uZXJIVE1MPWUrMX19O2Mub25jbGljaz1mdW5jdGlvbigpe2Uuc3BsaWNlKHUucm93SW5kZXgsMSksdC5kZWxldGVSb3codS5yb3dJbmRleCksbSgpfSxhcHBlbmRDaGlsZChkLGMsbyk7dmFyIGY9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodC5yb3dzLmxlbmd0aCsxKTthcHBlbmRDaGlsZChsLGYsbyksYXBwZW5kQ2hpbGQodSxsLG8pLGFwcGVuZENoaWxkKHUsZCxvKSxhcHBlbmRDaGlsZCh1LHAsbyksYXBwZW5kQ2hpbGQocyx1LG8pLGFwcGVuZENoaWxkKHQscyxvKTt2YXIgaD1jcmVhdGVQcm9wZXJ0eVByb3ZpZGVyKGZ1bmN0aW9uKCl7cmV0dXJuIHUucm93SW5kZXh9KTtyZW5kZXIobnVsbCxwLHIsZSxoLG4pfXZhciBvPWdldFNjaGVtYUlkKHQpLHM9Z2V0U2NoZW1hKG8pLHU9Z2V0U2NoZW1hKHMuaXRlbXMpLGw9bmV3IEFycmF5O3I/KG4uZ2V0VmFsdWUoKXx8MD09PW4uZ2V0VmFsdWUoKSkmJihyW24uZ2V0VmFsdWUoKV09bCk6ZGF0YT1sLG4mJihuLm9uY2hhbmdlPWZ1bmN0aW9uKGUpe2RlbGV0ZSByW2VdLHJbbi5nZXRWYWx1ZSgpXT1sfSk7dmFyIGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxwPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtwLmNsYXNzTmFtZT1cImFycmF5XCIsYXBwZW5kQ2hpbGQoZCxwLHMpLGFwcGVuZENoaWxkKGUsZCxzKTt2YXIgYz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO2lmKHMucmVhZE9ubHkmJihjLmRpc2FibGVkPSEwKSxjLnNldEF0dHJpYnV0ZShcInR5cGVcIixcImJ1dHRvblwiKSxjLmdldFZhbGlkYXRpb25FcnJvcj1mdW5jdGlvbigpe2lmKHMubWluSXRlbXMmJnMubWluSXRlbXM+cC5yb3dzLmxlbmd0aClyZXR1cm4gQnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5taW5JdGVtcy5mb3JtYXQocy5taW5JdGVtcyk7aWYocy5tYXhJdGVtcyYmcy5tYXhJdGVtczxwLnJvd3MubGVuZ3RoKXJldHVybiBCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLm1heEl0ZW1zLmZvcm1hdChzLm1heEl0ZW1zKTtpZihzLnVuaXF1ZUl0ZW1zKWZvcih2YXIgZT0wO2U8bC5sZW5ndGg7ZSsrKWZvcih2YXIgdD1lKzE7dDxsLmxlbmd0aDt0KyspaWYoSlNPTi5zdHJpbmdpZnkobFtlXSk9PT1KU09OLnN0cmluZ2lmeShsW3RdKSlyZXR1cm4gQnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy51bmlxdWVJdGVtc30sYy5vbmNsaWNrPWZ1bmN0aW9uKCl7aShsLHAsdCtcIlsjXVwiLG51bGwpfSx1LmRlc2NyaXB0aW9uJiYoYy50aXRsZT11LmRlc2NyaXB0aW9uKSxhcHBlbmRDaGlsZChjLGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKEJydXR1c2luRm9ybXMubWVzc2FnZXMuYWRkSXRlbSkscyksYXBwZW5kQ2hpbGQoZCxwLHMpLGFwcGVuZENoaWxkKGQsYyxzKSxhJiZhIGluc3RhbmNlb2YgQXJyYXkpZm9yKHZhciBtPTA7bTxhLmxlbmd0aDttKyspaShsLHAsdCtcIltcIittK1wiXVwiLGFbbV0scy5yZWFkT25seSk7YXBwZW5kQ2hpbGQoZSxkLHMpfSxvYmoucmVuZGVyPWZ1bmN0aW9uKGUsdCl7Y29udGFpbmVyPWUsaW5pdGlhbFZhbHVlPXQ7dmFyIHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7aWYoci5jbGFzc05hbWU9XCJicnV0dXNpbi1mb3JtXCIsci5vbnN1Ym1pdD1mdW5jdGlvbihlKXtyZXR1cm4hMX0sY29udGFpbmVyP2FwcGVuZENoaWxkKGNvbnRhaW5lcixyKTphcHBlbmRDaGlsZChkb2N1bWVudC5ib2R5LHIpLGVycm9yKXt2YXIgbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiksYT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShlcnJvcik7YXBwZW5kQ2hpbGQobixhKSxuLmNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2VcIixhcHBlbmRDaGlsZChyLG4pfWVsc2UgcmVuZGVyKG51bGwscixcIiRcIixudWxsLG51bGwpO2RlcGVuZGVuY3lNYXAuaGFzT3duUHJvcGVydHkoXCIkXCIpJiZvbkRlcGVuZGVuY3lDaGFuZ2VkKFwiJFwiKSxCcnV0dXNpbkZvcm1zLnBvc3RSZW5kZXImJkJydXR1c2luRm9ybXMucG9zdFJlbmRlcihvYmopfSxvYmouZ2V0UmVuZGVyaW5nQ29udGFpbmVyPWZ1bmN0aW9uKCl7cmV0dXJuIGNvbnRhaW5lcn0sb2JqLnZhbGlkYXRlPWZ1bmN0aW9uKCl7cmV0dXJuIHZhbGlkYXRlKGNvbnRhaW5lcil9LG9iai5nZXREYXRhPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LHIpe2lmKG51bGw9PT1zJiYocz1TQ0hFTUFfQU5ZKSxyLiRyZWYmJihyPWdldERlZmluaXRpb24oci4kcmVmKSksdCBpbnN0YW5jZW9mIEFycmF5KXtpZigwPT09dC5sZW5ndGgpcmV0dXJuIG51bGw7Zm9yKHZhciBuPW5ldyBBcnJheSxhPTA7YTx0Lmxlbmd0aDthKyspblthXT1lKHRbYV0sci5pdGVtcyk7cmV0dXJuIG59aWYoXCJcIj09PXQpcmV0dXJuIG51bGw7aWYodCBpbnN0YW5jZW9mIE9iamVjdCl7dmFyIG49bmV3IE9iamVjdCxpPSExO2Zvcih2YXIgbyBpbiB0KWlmKCFvLnN0YXJ0c1dpdGgoXCIkXCIpfHwhby5lbmRzV2l0aChcIiRcIikpe3ZhciBzPW51bGw7aWYoci5oYXNPd25Qcm9wZXJ0eShcInByb3BlcnRpZXNcIikmJnIucHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShvKSYmKHM9ci5wcm9wZXJ0aWVzW29dKSxudWxsPT09cyYmci5oYXNPd25Qcm9wZXJ0eShcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCIpJiZcIm9iamVjdFwiPT10eXBlb2Ygci5hZGRpdGlvbmFsUHJvcGVydGllcyYmKHM9ci5hZGRpdGlvbmFsUHJvcGVydGllcyksbnVsbD09PXMmJnIuaGFzT3duUHJvcGVydHkoXCJwYXR0ZXJuUHJvcGVydGllc1wiKSlmb3IodmFyIHUgaW4gci5wYXR0ZXJuUHJvcGVydGllcyl7dmFyIGw9UmVnRXhwKHUpO2lmKC0xIT09by5zZWFyY2gobCkpe3M9ci5wYXR0ZXJuUHJvcGVydGllc1t1XTticmVha319dmFyIGQ9ZSh0W29dLHMpO251bGwhPT1kJiYobltvXT1kLGk9ITApfXJldHVybiBpfHxyLnJlcXVpcmVkP246bnVsbH1yZXR1cm4gdH1yZXR1cm4gY29udGFpbmVyP2UoZGF0YSxzY2hlbWEpOm51bGx9LEJydXR1c2luRm9ybXMuaW5zdGFuY2VzW0JydXR1c2luRm9ybXMuaW5zdGFuY2VzLmxlbmd0aF09b2JqLG9ian0sYnJ1dHVzaW5bXCJqc29uLWZvcm1zXCJdPUJydXR1c2luRm9ybXN9KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JydXR1c2luLWpzb24tZm9ybXMvZGlzdC9qcy9icnV0dXNpbi1qc29uLWZvcm1zLm1pbi5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9iYXNlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIiFmdW5jdGlvbihmKXtpZihcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSltb2R1bGUuZXhwb3J0cz1mKCk7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKFtdLGYpO2Vsc2V7KFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OlwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWw/Z2xvYmFsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3NlbGY6dGhpcykuTWV0ZW9yRW1vamk9ZigpfX0oZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG58fGUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfWZvcih2YXIgaT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSh7MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7IWZ1bmN0aW9uKGdsb2JhbCxmYWN0b3J5KXtpZih2b2lkIDAhPT1leHBvcnRzKWZhY3RvcnkobW9kdWxlKTtlbHNle3ZhciBtb2Q9e2V4cG9ydHM6e319O2ZhY3RvcnkobW9kKSxnbG9iYWwubWV0ZW9yRW1vamk9bW9kLmV4cG9ydHN9fSh0aGlzLGZ1bmN0aW9uKG1vZHVsZSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIF9jcmVhdGVDbGFzcz1mdW5jdGlvbigpe2Z1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LHByb3BzKXtmb3IodmFyIGk9MDtpPHByb3BzLmxlbmd0aDtpKyspe3ZhciBkZXNjcmlwdG9yPXByb3BzW2ldO2Rlc2NyaXB0b3IuZW51bWVyYWJsZT1kZXNjcmlwdG9yLmVudW1lcmFibGV8fCExLGRlc2NyaXB0b3IuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIGRlc2NyaXB0b3ImJihkZXNjcmlwdG9yLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LGRlc2NyaXB0b3Iua2V5LGRlc2NyaXB0b3IpfX1yZXR1cm4gZnVuY3Rpb24oQ29uc3RydWN0b3IscHJvdG9Qcm9wcyxzdGF0aWNQcm9wcyl7cmV0dXJuIHByb3RvUHJvcHMmJmRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLHByb3RvUHJvcHMpLHN0YXRpY1Byb3BzJiZkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLHN0YXRpY1Byb3BzKSxDb25zdHJ1Y3Rvcn19KCksTWV0ZW9yRW1vamk9ZnVuY3Rpb24oKXtmdW5jdGlvbiBNZXRlb3JFbW9qaSgpeyFmdW5jdGlvbihpbnN0YW5jZSxDb25zdHJ1Y3Rvcil7aWYoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfSh0aGlzLE1ldGVvckVtb2ppKSx0aGlzLmluaXRpYXRlKCl9cmV0dXJuIF9jcmVhdGVDbGFzcyhNZXRlb3JFbW9qaSxbe2tleTpcImluaXRpYXRlXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgX3RoaXM9dGhpcztkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tZXRlb3ItZW1vamk9XCJ0cnVlXCJdLCBbZGF0YS1tZXRlb3ItZW1vamktbGFyZ2U9XCJ0cnVlXCJdJykuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KXtfdGhpcy5nZW5lcmF0ZUVsZW1lbnRzKGVsZW1lbnQpfSl9fSx7a2V5OlwiZ2VuZXJhdGVFbGVtZW50c1wiLHZhbHVlOmZ1bmN0aW9uKGVtb2ppSW5wdXQpe3ZhciBjbGlja0xpbms9ZnVuY3Rpb24oZXZlbnQpe3ZhciBjYXJldFBvcz1lbW9qaUlucHV0LnNlbGVjdGlvblN0YXJ0O2Vtb2ppSW5wdXQudmFsdWU9ZW1vamlJbnB1dC52YWx1ZS5zdWJzdHJpbmcoMCxjYXJldFBvcykrXCIgXCIrZXZlbnQudGFyZ2V0LmlubmVySFRNTCtlbW9qaUlucHV0LnZhbHVlLnN1YnN0cmluZyhjYXJldFBvcyksZW1vamlQaWNrZXIuc3R5bGUuZGlzcGxheT1cImJsb2NrXCIsXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGFuZ3VsYXImJmFuZ3VsYXIuZWxlbWVudChlbW9qaUlucHV0KS50cmlnZ2VySGFuZGxlcihcImNoYW5nZVwiKX0sY2xpY2tDYXRlZ29yeT1mdW5jdGlvbihldmVudCl7ZW1vamlJbnB1dC5zZWxlY3Rpb25TdGFydDtlbW9qaVBpY2tlci5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtmb3IodmFyIGhpZGVVbHM9ZW1vamlQaWNrZXIucXVlcnlTZWxlY3RvckFsbChcInVsXCIpLGk9MSxsPWhpZGVVbHMubGVuZ3RoO2k8bDtpKyspaGlkZVVsc1tpXS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO3ZhciBiYWNrZ3JvdW5kVG9nZ2xlPWVtb2ppUGlja2VyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2F0ZWdvcnkgYVwiKTtmb3IoaT0wLGw9YmFja2dyb3VuZFRvZ2dsZS5sZW5ndGg7aTxsO2krKyliYWNrZ3JvdW5kVG9nZ2xlW2ldLnN0eWxlLmJhY2tncm91bmQ9XCJub25lXCI7ZW1vamlQaWNrZXIucXVlcnlTZWxlY3RvcihcIi5cIitldmVudC50YXJnZXQuaWQpLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiLGVtb2ppUGlja2VyLnF1ZXJ5U2VsZWN0b3IoXCIjXCIrZXZlbnQudGFyZ2V0LmlkKS5zdHlsZS5iYWNrZ3JvdW5kPVwiI2MyYzJjMlwifTtlbW9qaUlucHV0LnN0eWxlLndpZHRoPVwiMTAwJVwiO3ZhciBlbW9qaUNvbnRhaW5lcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2Vtb2ppQ29udGFpbmVyLnN0eWxlLnBvc2l0aW9uPVwicmVsYXRpdmVcIixlbW9qaUlucHV0LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGVtb2ppQ29udGFpbmVyLGVtb2ppSW5wdXQpLGVtb2ppQ29udGFpbmVyLmFwcGVuZENoaWxkKGVtb2ppSW5wdXQpO3ZhciBlbW9qaVBpY2tlcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2Vtb2ppUGlja2VyLnRhYkluZGV4PTAsZW1vamlJbnB1dC5oYXNBdHRyaWJ1dGUoXCJkYXRhLW1ldGVvci1lbW9qaS1sYXJnZVwiKT8oZW1vamlQaWNrZXIuc3R5bGUuekluZGV4PVwiOTk5XCIsZW1vamlQaWNrZXIuc3R5bGUuZGlzcGxheT1cImJsb2NrXCIsZW1vamlQaWNrZXIuc3R5bGUud2lkdGg9XCIxMDAlXCIsZW1vamlQaWNrZXIuc3R5bGUubWFyZ2luQm90dG9tPVwiMTVweFwiKTooZW1vamlQaWNrZXIuc3R5bGUucG9zaXRpb249XCJhYnNvbHV0ZVwiLGVtb2ppUGlja2VyLnN0eWxlLnJpZ2h0PVwiMHB4XCIsZW1vamlQaWNrZXIuc3R5bGUudG9wPVwiMzBweFwiLGVtb2ppUGlja2VyLnN0eWxlLmRpc3BsYXk9XCJub25lXCIsZW1vamlQaWNrZXIuc3R5bGUud2lkdGg9XCI0MDBweFwiKSxlbW9qaVBpY2tlci5zdHlsZS56SW5kZXg9XCI5OTlcIixlbW9qaVBpY2tlci5zdHlsZS5vdmVyZmxvdz1cImhpZGRlblwiLGVtb2ppUGlja2VyLnN0eWxlLmJhY2tncm91bmQ9XCIjZmZmXCIsZW1vamlQaWNrZXIuc3R5bGUuYm9yZGVyUmFkaXVzPVwiNXB4XCIsZW1vamlQaWNrZXIuc3R5bGUuYm94U2hhZG93PVwiMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMjMpXCIsZW1vamlQaWNrZXIuc3R5bGUuYm9yZGVyUmFkaXVzPVwiMnB4O1wiLGVtb2ppUGlja2VyLnN0eWxlLm1hcmdpblRvcD1cIjVweFwiLGVtb2ppUGlja2VyLnN0eWxlLm91dGxpbmU9XCJub25lXCI7dmFyIGVtb2ppVHJpZ2dlcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtlbW9qaVRyaWdnZXIuc3R5bGUucG9zaXRpb249XCJhYnNvbHV0ZVwiLGVtb2ppVHJpZ2dlci5zdHlsZS50b3A9XCIxMHB4XCIsZW1vamlUcmlnZ2VyLnN0eWxlLnJpZ2h0PVwiMTBweFwiLGVtb2ppVHJpZ2dlci5zdHlsZS50ZXh0RGVjb3JhdGlvbj1cIm5vbmVcIixlbW9qaVRyaWdnZXIuc2V0QXR0cmlidXRlKFwiaHJlZlwiLFwiamF2YXNjcmlwdDp2b2lkKDApXCIpLGVtb2ppVHJpZ2dlci5pbm5lckhUTUw9JzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMTIgMTRcIj48cGF0aCBkPVwiTTguOSA4LjRxLTAuMyAwLjktMS4xIDEuNXQtMS44IDAuNi0xLjgtMC42LTEuMS0xLjVxLTAuMS0wLjIgMC0wLjR0MC4zLTAuMnEwLjItMC4xIDAuNCAwdDAuMiAwLjNxMC4yIDAuNiAwLjcgMXQxLjIgMC40IDEuMi0wLjQgMC43LTFxMC4xLTAuMiAwLjMtMC4zdDAuNCAwIDAuMyAwLjIgMCAwLjR6TTUgNXEwIDAuNC0wLjMgMC43dC0wLjcgMC4zLTAuNy0wLjMtMC4zLTAuNyAwLjMtMC43IDAuNy0wLjMgMC43IDAuMyAwLjMgMC43ek05IDVxMCAwLjQtMC4zIDAuN3QtMC43IDAuMy0wLjctMC4zLTAuMy0wLjcgMC4zLTAuNyAwLjctMC4zIDAuNyAwLjMgMC4zIDAuN3pNMTEgN3EwLTEtMC40LTEuOXQtMS4xLTEuNi0xLjYtMS4xLTEuOS0wLjQtMS45IDAuNC0xLjYgMS4xLTEuMSAxLjYtMC40IDEuOSAwLjQgMS45IDEuMSAxLjYgMS42IDEuMSAxLjkgMC40IDEuOS0wLjQgMS42LTEuMSAxLjEtMS42IDAuNC0xLjl6TTEyIDdxMCAxLjYtMC44IDN0LTIuMiAyLjItMyAwLjgtMy0wLjgtMi4yLTIuMi0wLjgtMyAwLjgtMyAyLjItMi4yIDMtMC44IDMgMC44IDIuMiAyLjIgMC44IDN6XCIvPjwvc3ZnPicsZW1vamlUcmlnZ2VyLm9uY2xpY2s9ZnVuY3Rpb24oKXtcIm5vbmVcIj09PWVtb2ppUGlja2VyLnN0eWxlLmRpc3BsYXk/ZW1vamlQaWNrZXIuc3R5bGUuZGlzcGxheT1cImJsb2NrXCI6XCJibG9ja1wiPT09ZW1vamlQaWNrZXIuc3R5bGUuZGlzcGxheSYmKGVtb2ppUGlja2VyLnN0eWxlLmRpc3BsYXk9XCJub25lXCIpLGVtb2ppUGlja2VyLmZvY3VzKCl9LGVtb2ppSW5wdXQuaGFzQXR0cmlidXRlKFwiZGF0YS1tZXRlb3ItZW1vamktbGFyZ2VcIil8fGVtb2ppQ29udGFpbmVyLmFwcGVuZENoaWxkKGVtb2ppVHJpZ2dlciksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKGUpe2Vtb2ppSW5wdXQuaGFzQXR0cmlidXRlKFwiZGF0YS1tZXRlb3ItZW1vamktbGFyZ2VcIil8fFwiYmxvY2tcIj09PWVtb2ppUGlja2VyLnN0eWxlLmRpc3BsYXkmJihlbW9qaVBpY2tlci5jb250YWlucyhlLnRhcmdldCl8fGVtb2ppVHJpZ2dlci5jb250YWlucyhlLnRhcmdldCl8fChlbW9qaVBpY2tlci5zdHlsZS5kaXNwbGF5PVwibm9uZVwiKSl9KTt2YXIgZmFjZXNDYXRlZ29yeT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7ZmFjZXNDYXRlZ29yeS5zdHlsZS5wYWRkaW5nPVwiMTBweCAwcHhcIixmYWNlc0NhdGVnb3J5LnN0eWxlLm1hcmdpbj1cIjBcIixmYWNlc0NhdGVnb3J5LnN0eWxlLmxpc3RTdHlsZT1cIm5vbmVcIixmYWNlc0NhdGVnb3J5LnN0eWxlLnRleHRBbGlnbj1cImxlZnRcIixmYWNlc0NhdGVnb3J5LnN0eWxlLm1hcmdpbkxlZnQ9XCIzJVwiLGZhY2VzQ2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChcImZhY2VzXCIpO3ZhciBhbmltYWxzQ2F0ZWdvcnk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO2FuaW1hbHNDYXRlZ29yeS5zdHlsZS5wYWRkaW5nPVwiMTBweCAwcHhcIixhbmltYWxzQ2F0ZWdvcnkuc3R5bGUubWFyZ2luPVwiMFwiLGFuaW1hbHNDYXRlZ29yeS5zdHlsZS5saXN0U3R5bGU9XCJub25lXCIsYW5pbWFsc0NhdGVnb3J5LnN0eWxlLnRleHRBbGlnbj1cImxlZnRcIixhbmltYWxzQ2F0ZWdvcnkuc3R5bGUubWFyZ2luTGVmdD1cIjMlXCIsYW5pbWFsc0NhdGVnb3J5LmNsYXNzTGlzdC5hZGQoXCJhbmltYWxzXCIpLGFuaW1hbHNDYXRlZ29yeS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO3ZhciBmb29kQ2F0ZWdvcnk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO2Zvb2RDYXRlZ29yeS5zdHlsZS5wYWRkaW5nPVwiMTBweCAwcHhcIixmb29kQ2F0ZWdvcnkuc3R5bGUubWFyZ2luPVwiMFwiLGZvb2RDYXRlZ29yeS5zdHlsZS5saXN0U3R5bGU9XCJub25lXCIsZm9vZENhdGVnb3J5LnN0eWxlLnRleHRBbGlnbj1cImxlZnRcIixmb29kQ2F0ZWdvcnkuc3R5bGUubWFyZ2luTGVmdD1cIjMlXCIsZm9vZENhdGVnb3J5LmNsYXNzTGlzdC5hZGQoXCJmb29kXCIpLGZvb2RDYXRlZ29yeS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO3ZhciBzcG9ydENhdGVnb3J5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtzcG9ydENhdGVnb3J5LnN0eWxlLnBhZGRpbmc9XCIxMHB4IDBweFwiLHNwb3J0Q2F0ZWdvcnkuc3R5bGUubWFyZ2luPVwiMFwiLHNwb3J0Q2F0ZWdvcnkuc3R5bGUubGlzdFN0eWxlPVwibm9uZVwiLHNwb3J0Q2F0ZWdvcnkuc3R5bGUudGV4dEFsaWduPVwibGVmdFwiLHNwb3J0Q2F0ZWdvcnkuc3R5bGUubWFyZ2luTGVmdD1cIjMlXCIsc3BvcnRDYXRlZ29yeS5jbGFzc0xpc3QuYWRkKFwic3BvcnRcIiksc3BvcnRDYXRlZ29yeS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO3ZhciB0cmFuc3BvcnRDYXRlZ29yeT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7dHJhbnNwb3J0Q2F0ZWdvcnkuc3R5bGUucGFkZGluZz1cIjEwcHggMHB4XCIsdHJhbnNwb3J0Q2F0ZWdvcnkuc3R5bGUubWFyZ2luPVwiMFwiLHRyYW5zcG9ydENhdGVnb3J5LnN0eWxlLmxpc3RTdHlsZT1cIm5vbmVcIix0cmFuc3BvcnRDYXRlZ29yeS5zdHlsZS50ZXh0QWxpZ249XCJsZWZ0XCIsdHJhbnNwb3J0Q2F0ZWdvcnkuc3R5bGUubWFyZ2luTGVmdD1cIjMlXCIsdHJhbnNwb3J0Q2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChcInRyYW5zcG9ydFwiKSx0cmFuc3BvcnRDYXRlZ29yeS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO3ZhciBvYmplY3RzQ2F0ZWdvcnk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO29iamVjdHNDYXRlZ29yeS5zdHlsZS5wYWRkaW5nPVwiMTBweCAwcHhcIixvYmplY3RzQ2F0ZWdvcnkuc3R5bGUubWFyZ2luPVwiMFwiLG9iamVjdHNDYXRlZ29yeS5zdHlsZS5saXN0U3R5bGU9XCJub25lXCIsb2JqZWN0c0NhdGVnb3J5LnN0eWxlLnRleHRBbGlnbj1cImxlZnRcIixvYmplY3RzQ2F0ZWdvcnkuc3R5bGUubWFyZ2luTGVmdD1cIjMlXCIsb2JqZWN0c0NhdGVnb3J5LmNsYXNzTGlzdC5hZGQoXCJvYmplY3RzXCIpLG9iamVjdHNDYXRlZ29yeS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO3ZhciBlbW9qaUNhdGVnb3J5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtlbW9qaUNhdGVnb3J5LnN0eWxlLnBhZGRpbmc9XCIwcHhcIixlbW9qaUNhdGVnb3J5LnN0eWxlLm1hcmdpbj1cIjBcIixlbW9qaUNhdGVnb3J5LnN0eWxlLmRpc3BsYXk9XCJ0YWJsZVwiLGVtb2ppQ2F0ZWdvcnkuc3R5bGUud2lkdGg9XCIxMDAlXCIsZW1vamlDYXRlZ29yeS5zdHlsZS5iYWNrZ3JvdW5kPVwiI2VmZjBmMVwiLGVtb2ppQ2F0ZWdvcnkuc3R5bGUubGlzdFN0eWxlPVwibm9uZVwiLGVtb2ppQ2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChcImNhdGVnb3J5XCIpO3ZhciBlbW9qaUNhdGVnb3JpZXM9bmV3IEFycmF5O2Vtb2ppQ2F0ZWdvcmllcy5wdXNoKHtuYW1lOlwiZmFjZXNcIixzdmc6JzxzdmcgaWQ9XCJmYWNlc1wiIGRhdGEtbmFtZT1cIkxheWVyIDFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAxNTAgMTUwXCI+PHBhdGggaWQ9XCJmYWNlc1wiIGQ9XCJNNzQuMzQsMTI4LjQ4YTUzLjUsNTMuNSwwLDEsMSwzNy44NC0xNS42Nyw1My4xNiw1My4xNiwwLDAsMS0zNy44NCwxNS42N1ptMC05Ny44OWE0NC40LDQ0LjQsMCwxLDAsMzEuNCwxMyw0NC4wNyw0NC4wNywwLDAsMC0zMS40LTEzWlwiLz48cGF0aCBpZD1cImZhY2VzXCIgZD1cIk03NC4zNSwxMDhBMzMuMDcsMzMuMDcsMCwwLDEsNDEuMjksNzVhMi4yOCwyLjI4LDAsMCwxLDIuMjctMi4yOGgwQTIuMjcsMi4yNywwLDAsMSw0NS44Myw3NWEyOC41MiwyOC41MiwwLDAsMCw1NywwLDIuMjcsMi4yNywwLDAsMSw0LjU0LDBBMzMuMDksMzMuMDksMCwwLDEsNzQuMzUsMTA4WlwiLz48cGF0aCBpZD1cImZhY2VzXCIgZD1cIk01OC44NCw2MmE2LjgxLDYuODEsMCwxLDAsNi44MSw2LjgxQTYuODEsNi44MSwwLDAsMCw1OC44NCw2MlpcIi8+PHBhdGggaWQ9XCJmYWNlc1wiIGQ9XCJNODkuODcsNjJhNi44MSw2LjgxLDAsMSwwLDYuODEsNi44MUE2LjgyLDYuODIsMCwwLDAsODkuODcsNjJaXCIvPjwvc3ZnPid9KSxlbW9qaUNhdGVnb3JpZXMucHVzaCh7bmFtZTpcImFuaW1hbHNcIixzdmc6JzxzdmcgaWQ9XCJhbmltYWxzXCIgZGF0YS1uYW1lPVwiTGF5ZXIgMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDE1MCAxNTBcIj48cGF0aCBpZD1cImFuaW1hbHNcIiBkPVwiTTU5LjksOTEuNzVoMGMtMjIuNDYsMC00MS44Mi0xOS4zNC00NC4wOS00NEE1Mi4xLDUyLjEsMCwwLDEsMTYsMzYuOGE0LjUxLDQuNTEsMCwwLDEsMi42My0zLjYyLDM5Ljc5LDM5Ljc5LDAsMCwxLDEyLjc0LTMuMzdjMjMuOTItMi4xNSw0NS4zNSwxNy44Myw0Ny43NCw0My44NmE1Mi43Nyw1Mi43NywwLDAsMS0uMTUsMTAuOTMsNC41Niw0LjU2LDAsMCwxLTIuNjQsMy42MiwzOS42NywzOS42NywwLDAsMS0xMi43MywzLjM2Yy0xLjIzLjExLTIuNDUuMTctMy42Ni4xN1pNMjQuNzYsNDAuNDlhNDEuMjksNDEuMjksMCwwLDAsLjA5LDYuNEMyNi43LDY3LDQyLjA5LDgyLjY2LDU5LjksODIuNjdoMGMuOTQsMCwxLjg4LDAsMi44My0uMTRhMzAuMzksMzAuMzksMCwwLDAsNy40MS0xLjYyLDQxLjE0LDQxLjE0LDAsMCwwLS4xMS02LjRDNjguMDksNTMuMzgsNTEuMTEsMzcuMDgsMzIuMTcsMzguODZhMzAuNzgsMzAuNzgsMCwwLDAtNy40MSwxLjYzWlwiLz48cGF0aCBpZD1cImFuaW1hbHNcIiBkPVwiTTM2LjY4LDEyNS42NGE0LjUzLDQuNTMsMCwwLDEtNC4zMy0zLjE3LDUzLjMyLDUzLjMyLDAsMCwxLTIuMjYtMTFBNTAuNDIsNTAuNDIsMCwwLDEsMzkuNTEsNzYuNmM3LjM1LTkuOTEsMTcuODQtMTYsMjkuNS0xNywxLjE2LS4xMSwyLjMzLS4xMywzLjQ3LS4xM2E0LjU0LDQuNTQsMCwwLDEsNC4zMywzLjE2LDUxLjU5LDUxLjU5LDAsMCwxLDIuMjcsMTEuMDgsNTAuMzksNTAuMzksMCwwLDEtOS40MiwzNC44Yy03LjM1LDkuOTEtMTcuODMsMTYtMjkuNSwxN2ExNy42MywxNy42MywwLDAsMS0zLjQ4LjEyWk02OS4wOSw2OC42OUEzMi40MSwzMi40MSwwLDAsMCw0Ni44LDgyYTQyLjU3LDQyLjU3LDAsMCwwLTYuNzEsMzQuMzgsMzIuMzgsMzIuMzgsMCwwLDAsMjIuMjgtMTMuMzJBNDEuMzUsNDEuMzUsMCwwLDAsNzAsNzQuNTFhMzkuMzgsMzkuMzgsMCwwLDAtLjk0LTUuODJaXCIvPjxwYXRoIGlkPVwiYW5pbWFsc1wiIGQ9XCJNOTAuMjcsOTEuNzVjLTEuMjIsMC0yLjQzLS4wNi0zLjY2LS4xN2EzOS42NywzOS42NywwLDAsMS0xMi43My0zLjM2LDQuNTcsNC41NywwLDAsMS0yLjY0LTMuNjEsNTMuMzgsNTMuMzgsMCwwLDEtLjE3LTEwLjkzYzIuNDEtMjYsMjMuNy00Ni4wNyw0Ny43Ni00My44N2EzOS43NCwzOS43NCwwLDAsMSwxMi43MywzLjM3LDQuNTcsNC41NywwLDAsMSwyLjY0LDMuNjIsNTMuMzUsNTMuMzUsMCwwLDEsLjE2LDEwLjkyYy0yLjI4LDI0LjY5LTIxLjY1LDQ0LTQ0LjA5LDQ0Wk04MCw4MC45MWEzMC41NywzMC41NywwLDAsMCw3LjQyLDEuNjJjMTkuMDcsMS43OCwzNS45Mi0xNC41MywzNy44Ny0zNS42NGE0Mi41NSw0Mi41NSwwLDAsMCwuMS02LjRBMzAuODYsMzAuODYsMCwwLDAsMTE4LDM4Ljg2Qzk5LDM3LjA3LDgyLjA2LDUzLjM4LDgwLjEyLDc0LjUxYTQzLjkxLDQzLjkxLDAsMCwwLS4xLDYuNFpcIi8+PHBhdGggaWQ9XCJhbmltYWxzXCIgZD1cIk0xMTMuNDksMTI1LjY0aDBjLTEuMTYsMC0yLjMsMC0zLjQ2LS4xMi0yMy45LTIuMjEtNDEuMzYtMjUuNDctMzguOTQtNTEuODVBNTMuNTIsNTMuNTIsMCwwLDEsNzMuMzQsNjIuNmE0LjU1LDQuNTUsMCwwLDEsNC4zMy0zLjE2YzEuMTYsMCwyLjM0LDAsMy41MS4xMywxMS42NCwxLjA3LDIyLjExLDcuMTIsMjkuNDgsMTdhNTAuNTEsNTAuNTEsMCwwLDEsOS40MiwzNC44MSw1My41MSw1My41MSwwLDAsMS0yLjI2LDExLDQuNTQsNC41NCwwLDAsMS00LjMzLDMuMTlaTTgxLjA4LDY4LjY5YTQyLjUzLDQyLjUzLDAsMCwwLTEsNS44MmMtMS45NCwyMS4xLDExLjQ1LDM5LjcxLDI5Ljk1LDQxLjg4QTQyLjM4LDQyLjM4LDAsMCwwLDEwMy4zNiw4MiwzMi40MiwzMi40MiwwLDAsMCw4MS4wOCw2OC42OVpcIi8+PHBhdGggaWQ9XCJhbmltYWxzXCIgZD1cIk03NS4wOCw0NS40NWE3LjgzLDcuODMsMCwxLDAsNy44Myw3LjgzLDcuODMsNy44MywwLDAsMC03LjgzLTcuODNaXCIvPjxwYXRoIGlkPVwiYW5pbWFsc1wiIGQ9XCJNNzYuMjksNTEuODlhMi4yNiwyLjI2LDAsMCwxLTIuMTQtM0E0Niw0NiwwLDAsMSw5Mi44MiwyNS4zNGEyLjI3LDIuMjcsMCwxLDEsMi40LDMuODZBNDEuNCw0MS40LDAsMCwwLDc4LjQzLDUwLjM5YTIuMjgsMi4yOCwwLDAsMS0yLjE0LDEuNVpcIi8+PHBhdGggaWQ9XCJhbmltYWxzXCIgZD1cIk03My44Nyw1MS44OWEyLjI4LDIuMjgsMCwwLDEtMi4xNC0xLjVBNDEuMzUsNDEuMzUsMCwwLDAsNTQuOTQsMjkuMmEyLjI3LDIuMjcsMCwwLDEsMi4zOS0zLjg2QTQ2LDQ2LDAsMCwxLDc2LDQ4Ljg1YTIuMjgsMi4yOCwwLDAsMS0xLjM3LDIuOTEsMi4zMSwyLjMxLDAsMCwxLS43Ny4xM1pcIi8+PC9zdmc+J30pLGVtb2ppQ2F0ZWdvcmllcy5wdXNoKHtuYW1lOlwiZm9vZFwiLHN2ZzonPHN2ZyBpZD1cImZvb2RcIiBkYXRhLW5hbWU9XCJMYXllciAxXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMTUwIDE1MFwiPjxwYXRoIGlkPVwiZm9vZFwiIGQ9XCJNMTA0LDIwLjc2aC4xNWMxNS44My41MiwyNC4wOCwyMS40OCwyNC4wNywzMi41Ni4yNiwxMi40Mi0xMC43MiwyMy41NS0yNCwyNC4yMWEzLjUzLDMuNTMsMCwwLDEtLjQ2LDBjLTEzLjI1LS42Ni0yNC4yMy0xMS44LTI0LTI0LjMsMC0xMSw4LjI2LTMxLjk1LDI0LjA3LTMyLjQ3Wm0wLDQ3LjY5YzguMjUtLjU0LDE1LjMtNy41MSwxNS4xNC0xNSwwLTguMTItNi4yMi0yMy4xLTE1LjE0LTIzLjU3LTguOS40Ni0xNS4xNCwxNS40NS0xNS4xNCwyMy40OC0uMTQsNy42MSw2LjksMTQuNTksMTUuMTQsMTUuMTNaXCIvPjxwYXRoIGlkPVwiZm9vZFwiIGQ9XCJNOTcuMTksNjkuMjFoLjE0YTQuNTMsNC41MywwLDAsMSw0LjQsNC42OGwtMS40OCw0Ni45MmExLjU5LDEuNTksMCwwLDAsLjUsMS4wNiw0LjYsNC42LDAsMCwwLDMuMjUsMS4xOWgwYTQuNTcsNC41NywwLDAsMCwzLjI2LTEuMiwxLjUzLDEuNTMsMCwwLDAsLjQ5LTFsLTEuNDgtNDYuOTVhNC41NCw0LjU0LDAsMSwxLDkuMDgtLjI4bDEuNDcsNDYuOTFhMTAuNDIsMTAuNDIsMCwwLDEtMyw3LjY1LDEzLjY1LDEzLjY1LDAsMCwxLTkuODEsNGgwYTEzLjU4LDEzLjU4LDAsMCwxLTkuNzktNCwxMC40MiwxMC40MiwwLDAsMS0zLTcuNjdsMS40OC00Ni44OWE0LjUzLDQuNTMsMCwwLDEsNC41My00LjRaXCIvPjxwYXRoIGlkPVwiZm9vZFwiIGQ9XCJNNDEuODQsNjkuMjFINDJhNC41Myw0LjUzLDAsMCwxLDQuNCw0LjY4TDQ0LjksMTIwLjgxYTEuNTcsMS41NywwLDAsMCwuNSwxLjA2LDQuNiw0LjYsMCwwLDAsMy4yNSwxLjE5aDBhNC41MSw0LjUxLDAsMCwwLDMuMjQtMS4xOSwxLjQ4LDEuNDgsMCwwLDAsLjUtMUw1MC45Myw3My44OWE0LjUzLDQuNTMsMCwwLDEsNC4zOS00LjY4QTQuNCw0LjQsMCwwLDEsNjAsNzMuNjFsMS40OCw0Ni45MWExMC40OSwxMC40OSwwLDAsMS0zLDcuNjYsMTMuNTcsMTMuNTcsMCwwLDEtOS43OCw0aDBhMTMuNTksMTMuNTksMCwwLDEtOS43OC00LDEwLjQ4LDEwLjQ4LDAsMCwxLTMtNy42N2wxLjQ4LTQ2LjlhNC41NCw0LjU0LDAsMCwxLDQuNTQtNC40WlwiLz48cGF0aCBpZD1cImZvb2RcIiBkPVwiTTI4LjU5LDIwLjc2YTQuNTQsNC41NCwwLDAsMSw0LjU0LDQuNTRWNTFhMTUuNTIsMTUuNTIsMCwwLDAsMzEsMFYyNS4zYTQuNTUsNC41NSwwLDAsMSw5LjA5LDBWNTFhMjQuNjEsMjQuNjEsMCwxLDEtNDkuMjEsMFYyNS4zYTQuNTQsNC41NCwwLDAsMSw0LjU0LTQuNTRaXCIvPjxwYXRoIGlkPVwiZm9vZFwiIGQ9XCJNNTUuMzQsMjAuNzZhNC41NCw0LjU0LDAsMCwxLDQuNTQsNC41NHYxOWE0LjU0LDQuNTQsMCwxLDEtOS4wOCwwdi0xOWE0LjU0LDQuNTQsMCwwLDEsNC41NC00LjU0WlwiLz48cGF0aCBpZD1cImZvb2RcIiBkPVwiTTQyLDIwLjc2YTQuNTQsNC41NCwwLDAsMSw0LjU0LDQuNTR2MTlhNC41NCw0LjU0LDAsMSwxLTkuMDgsMHYtMTlBNC41NCw0LjU0LDAsMCwxLDQyLDIwLjc2WlwiLz48L3N2Zz4nfSksZW1vamlDYXRlZ29yaWVzLnB1c2goe25hbWU6XCJzcG9ydFwiLHN2ZzonPHN2ZyBpZD1cInNwb3J0XCIgZGF0YS1uYW1lPVwiTGF5ZXIgMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDE1MCAxNTBcIj48cGF0aCBpZD1cInNwb3J0XCIgZD1cIk03NS4zNSwxMzAuMjRhNTMuNDksNTMuNDksMCwxLDEsNTMuNDgtNTMuNDksNTMuNTUsNTMuNTUsMCwwLDEtNTMuNDgsNTMuNDlabTAtOTcuODlhNDQuNDEsNDQuNDEsMCwxLDAsNDQuNCw0NC40LDQ0LjEsNDQuMSwwLDAsMC00NC40LTQ0LjRaXCIvPjxwYXRoIGlkPVwic3BvcnRcIiBkPVwiTTExOS4yNCw4NC4wOEE1MS4yOSw1MS4yOSwwLDAsMSw2OCwzMi44NmE0OS40NCw0OS40NCwwLDAsMSwuMjYtNSwyLjI2LDIuMjYsMCwwLDEsMi0yYzEuNjYtLjE2LDMuMzQtLjI1LDUtLjI1YTUxLjI2LDUxLjI2LDAsMCwxLDUxLjIxLDUxLjIxYzAsMS43MS0uMDksMy4zOC0uMjUsNWEyLjI4LDIuMjgsMCwwLDEtMiwyYy0xLjY1LjE2LTMuMzMuMjUtNSwuMjVaTTcyLjY0LDMwLjE2Yy0uMDYuOS0uMDgsMS43OS0uMDgsMi43YTQ2LjczLDQ2LjczLDAsMCwwLDQ2LjY4LDQ2LjY4cTEuMzcsMCwyLjctLjA5Yy4wNi0uODkuMDgtMS43OS4wOC0yLjdBNDYuNzIsNDYuNzIsMCwwLDAsNzUuMzUsMzAuMDhjLS45MSwwLTEuODIsMC0yLjcxLjA4WlwiLz48cGF0aCBpZD1cInNwb3J0XCIgZD1cIk03NS4zNSwxMjhBNTEuMjgsNTEuMjgsMCwwLDEsMjQuMTIsNzYuNzZjMC0xLjcuMS0zLjM4LjI1LTVhMi4yOSwyLjI5LDAsMCwxLDItMmMxLjY2LS4xNiwzLjMzLS4yNSw1LjA1LS4yNWE1MS4yNyw1MS4yNywwLDAsMSw1MS4yMSw1MS4yMmMwLDEuNjktLjA5LDMuMzctLjI1LDVhMi4yNywyLjI3LDAsMCwxLTIsMmMtMS42Ni4xNi0zLjMyLjI1LTUsLjI1Wk0yOC43NSw3NC4wNWMtLjA1LjktLjA5LDEuOC0uMDksMi43MWE0Ni43NCw0Ni43NCwwLDAsMCw0Ni42OSw0Ni42N2MuOTEsMCwxLjgsMCwyLjctLjA4LDAtLjkuMDgtMS44LjA4LTIuN0E0Ni43Myw0Ni43MywwLDAsMCwzMS40Niw3NGMtLjkxLDAtMS44MSwwLTIuNzEuMDhaXCIvPjxwb2x5Z29uIGlkPVwic3BvcnRcIiBwb2ludHM9XCI0Mi42OSAxMTIuNjEgMzkuNDggMTA5LjQgMTA4IDQwLjg4IDExMS4yMSA0NC4xIDQyLjY5IDExMi42MSA0Mi42OSAxMTIuNjFcIi8+PC9zdmc+J30pLGVtb2ppQ2F0ZWdvcmllcy5wdXNoKHtuYW1lOlwidHJhbnNwb3J0XCIsc3ZnOic8c3ZnIGlkPVwidHJhbnNwb3J0XCIgZGF0YS1uYW1lPVwiTGF5ZXIgMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDE1MCAxNTBcIj48cGF0aCBpZD1cInRyYW5zcG9ydFwiIGQ9XCJNMTIwLjcsMTE2SDMxYTQuNTUsNC41NSwwLDAsMS00LjU0LTQuNTVWNTQuMjhBMzEuODIsMzEuODIsMCwwLDEsNTguMjUsMjIuNDloMzUuMmEzMS44MywzMS44MywwLDAsMSwzMS44LDMxLjc5djU3LjE1QTQuNTUsNC41NSwwLDAsMSwxMjAuNywxMTZabS04NS4xNi05LjA5aDgwLjYyVjU0LjI4QTIyLjc0LDIyLjc0LDAsMCwwLDkzLjQ1LDMxLjU3SDU4LjI1QTIyLjc0LDIyLjc0LDAsMCwwLDM1LjU0LDU0LjI4djUyLjYxWlwiLz48cGF0aCBpZD1cInRyYW5zcG9ydFwiIGQ9XCJNNDkuMzUsMTI5LjIzYy04LjUzLDAtMTMuNjItMi43Ny0xMy42Mi03LjQxVjExNS42YTQuNTQsNC41NCwwLDEsMSw5LjA4LDB2NC4wNmEyMS4zMiwyMS4zMiwwLDAsMCw5LjA5LDBWMTE1LjZhNC41NCw0LjU0LDAsMCwxLDkuMDgsMHY2LjIyYzAsNC42NC01LjA5LDcuNDEtMTMuNjMsNy40MVpcIi8+PHBhdGggaWQ9XCJ0cmFuc3BvcnRcIiBkPVwiTTEwMi4zNCwxMjkuMjNjLTguNTMsMC0xMy42Mi0yLjc3LTEzLjYyLTcuNDFWMTE1LjZhNC41NCw0LjU0LDAsMCwxLDkuMDgsMHY0LjA2YTIxLjI4LDIxLjI4LDAsMCwwLDkuMDgsMFYxMTUuNmE0LjU1LDQuNTUsMCwwLDEsOS4wOSwwdjYuMjJjMCw0LjY0LTUuMDksNy40MS0xMy42Myw3LjQxWlwiLz48cGF0aCBpZD1cInRyYW5zcG9ydFwiIGQ9XCJNOTcuODEsNDQuODNINTMuOWE0LjU1LDQuNTUsMCwxLDEsMC05LjA5SDk3LjgxYTQuNTUsNC41NSwwLDAsMSwwLDkuMDlaXCIvPjxwYXRoIGlkPVwidHJhbnNwb3J0XCIgZD1cIk01NC4yOCw4NC4yQTYuOCw2LjgsMCwxLDAsNjEuMDcsOTFhNi44LDYuOCwwLDAsMC02Ljc5LTYuOFpcIi8+PHBhdGggaWQ9XCJ0cmFuc3BvcnRcIiBkPVwiTTk3LjQzLDg0LjJhNi44LDYuOCwwLDEsMCw2Ljc5LDYuOCw2LjgsNi44LDAsMCwwLTYuNzktNi44WlwiLz48cGF0aCBpZD1cInRyYW5zcG9ydFwiIGQ9XCJNMTA3LjA4LDgxSDQ0LjYzYTYuODIsNi44MiwwLDAsMS02LjgyLTYuODJWNTQuMjhhNi44Miw2LjgyLDAsMCwxLDYuODItNi44MWg2Mi40NWE2LjgyLDYuODIsMCwwLDEsNi44MSw2LjgxVjc0LjE1QTYuODMsNi44MywwLDAsMSwxMDcuMDgsODFaTTQ0LjYzLDUyYTIuMjgsMi4yOCwwLDAsMC0yLjI4LDIuMjdWNzQuMTVhMi4yOCwyLjI4LDAsMCwwLDIuMjgsMi4yN2g2Mi40NWEyLjI3LDIuMjcsMCwwLDAsMi4yNy0yLjI3VjU0LjI4QTIuMjcsMi4yNywwLDAsMCwxMDcuMDgsNTJaXCIvPjwvc3ZnPid9KSxlbW9qaUNhdGVnb3JpZXMucHVzaCh7bmFtZTpcIm9iamVjdHNcIixzdmc6JzxzdmcgaWQ9XCJvYmplY3RzXCIgZGF0YS1uYW1lPVwiTGF5ZXIgMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDE1MCAxNTBcIj48cGF0aCBpZD1cIm9iamVjdHNcIiBkPVwiTTEwNy43OCwxMjlhNC41NSw0LjU1LDAsMCwxLTIuNjctLjg3bC0zMC0yMS43OS0zMCwyMS43OWE0LjUzLDQuNTMsMCwwLDEtNS4zNCwwLDQuNTgsNC41OCwwLDAsMS0xLjY1LTUuMDhMNDkuNTksODcuODIsMTkuNiw2NmE0LjU0LDQuNTQsMCwwLDEsMi42Ny04LjIySDU5LjM0TDcwLjgsMjIuNTVhNC41NSw0LjU1LDAsMCwxLDguNjQsMEw5MC44OSw1Ny44MUgxMjhBNC41NCw0LjU0LDAsMCwxLDEzMC42Myw2NmwtMzAsMjEuNzksMTEuNDYsMzUuMjVhNC41NSw0LjU1LDAsMCwxLTQuMzIsNlpNNzUuMTIsOTYuMmE0LjUzLDQuNTMsMCwwLDEsMi42Ny44N2wyMS4zNSwxNS41MUw5MSw4Ny40OWE0LjU1LDQuNTUsMCwwLDEsMS42NS01LjA4TDExNCw2Ni44OUg4Ny41OWE0LjU0LDQuNTQsMCwwLDEtNC4zMi0zLjEzbC04LjE1LTI1LjFMNjcsNjMuNzZhNC41Myw0LjUzLDAsMCwxLTQuMzIsMy4xM0gzNi4yNUw1Ny42MSw4Mi40MWE0LjU0LDQuNTQsMCwwLDEsMS42NSw1LjA4bC04LjE3LDI1LjA5TDcyLjQ1LDk3LjA3YTQuNTMsNC41MywwLDAsMSwyLjY3LS44N1pcIi8+PC9zdmc+J30pO2Vtb2ppQ2F0ZWdvcmllcy5tYXAoZnVuY3Rpb24oaXRlbSl7dmFyIGVtb2ppTGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtlbW9qaUxpbmsuc3R5bGUudGV4dERlY29yYXRpb249XCJub25lXCIsZW1vamlMaW5rLnN0eWxlLnBhZGRpbmc9XCI1cHhcIixlbW9qaUxpbmsuc3R5bGUucG9zaXRpb249XCJpbml0aWFsXCIsZW1vamlMaW5rLnN0eWxlLmZvbnRTaXplPVwiMjRweFwiLGVtb2ppTGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsXCJqYXZhc2NyaXB0OnZvaWQoMClcIiksZW1vamlMaW5rLnN0eWxlLmRpc3BsYXk9XCJ0YWJsZS1jZWxsXCIsZW1vamlMaW5rLnN0eWxlLnRleHRBbGlnbj1cImNlbnRlclwiLGVtb2ppTGluay5pZD1TdHJpbmcoaXRlbS5uYW1lKSxcImZhY2VzXCI9PVN0cmluZyhpdGVtLm5hbWUpJiYoZW1vamlMaW5rLnN0eWxlLmJhY2tncm91bmQ9XCIjYzJjMmMyXCIpLGVtb2ppTGluay5pbm5lckhUTUw9U3RyaW5nKGl0ZW0uc3ZnKSxlbW9qaUxpbmsub25tb3VzZWRvd249Y2xpY2tDYXRlZ29yeSxlbW9qaUNhdGVnb3J5LmFwcGVuZENoaWxkKGVtb2ppTGluayl9KSxbMTI4NTEzLDEyODUxNCwxMjg1MTUsMTI4NTE2LDEyODUxNywxMjg1MTgsMTI4NTIxLDEyODUyMiwxMjg1MjMsMTI4NTI0LDEyODUyNSwxMjg1MjcsMTI4NTMwLDEyODUzMSwxMjg1MzIsMTI4NTM0LDEyODUzNiwxMjg1MzgsMTI4NTQwLDEyODU0MSwxMjg1NDIsMTI4NTQ0LDEyODU0NSwxMjg1NDYsMTI4NTQ3LDEyODU0OCwxMjg1NDksMTI4NTUyLDEyODU1MywxMjg1NTQsMTI4NTU1LDEyODU1NywxMjg1NjAsMTI4NTYxLDEyODU2MiwxMjg1NjMsMTI4NTY1LDEyODU2N10ubWFwKGZ1bmN0aW9uKGl0ZW0pe3ZhciBlbW9qaUxpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7ZW1vamlMaW5rLnN0eWxlLnRleHREZWNvcmF0aW9uPVwibm9uZVwiLGVtb2ppTGluay5zdHlsZS5tYXJnaW49XCI1cHhcIixlbW9qaUxpbmsuc3R5bGUucG9zaXRpb249XCJpbml0aWFsXCIsZW1vamlMaW5rLnN0eWxlLmZvbnRTaXplPVwiMjRweFwiLGVtb2ppTGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsXCJqYXZhc2NyaXB0OnZvaWQoMClcIiksZW1vamlMaW5rLmlubmVySFRNTD1TdHJpbmcuZnJvbUNvZGVQb2ludChpdGVtKSxlbW9qaUxpbmsub25tb3VzZWRvd249Y2xpY2tMaW5rLGZhY2VzQ2F0ZWdvcnkuYXBwZW5kQ2hpbGQoZW1vamlMaW5rKX0pLFsxMjgwMTIsMTI4MDEzLDEyODAxNCwxMjgwMTcsMTI4MDE4LDEyODAyMCwxMjgwMjMsMTI4MDI0LDEyODAyNSwxMjgwMjYsMTI4MDI3LDEyODAyOCwxMjgwMjksMTI4MDMwLDEyODAzMSwxMjgwMzIsMTI4MDMzLDEyODAzNCwxMjgwMzUsMTI4MDM2LDEyODAzNywxMjgwMzgsMTI4MDM5LDEyODA0MCwxMjgwNDEsMTI4MDQzLDEyODA0NCwxMjgwNDUsMTI4MDQ2LDEyODA0NywxMjgwNDgsMTI4MDQ5LDEyODA1MCwxMjgwNTEsMTI4MDUyLDEyODA1MywxMjgwNTQsMTI4MDU1LDEyODA1NiwxMjgwNTcsMTI4MDU4LDEyODA1OSwxMjgwNjBdLm1hcChmdW5jdGlvbihpdGVtKXt2YXIgZW1vamlMaW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2Vtb2ppTGluay5zdHlsZS50ZXh0RGVjb3JhdGlvbj1cIm5vbmVcIixlbW9qaUxpbmsuc3R5bGUubWFyZ2luPVwiNXB4XCIsZW1vamlMaW5rLnN0eWxlLnBvc2l0aW9uPVwiaW5pdGlhbFwiLGVtb2ppTGluay5zdHlsZS5mb250U2l6ZT1cIjI0cHhcIixlbW9qaUxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLFwiamF2YXNjcmlwdDp2b2lkKDApXCIpLGVtb2ppTGluay5pbm5lckhUTUw9U3RyaW5nLmZyb21Db2RlUG9pbnQoaXRlbSksZW1vamlMaW5rLm9ubW91c2Vkb3duPWNsaWNrTGluayxhbmltYWxzQ2F0ZWdvcnkuYXBwZW5kQ2hpbGQoZW1vamlMaW5rKX0pLFsxMjc4MTMsMTI3ODE0LDEyNzgxNSwxMjc4MTYsMTI3ODE3LDEyNzgxOCwxMjc4MjAsMTI3ODIxLDEyNzgyMiwxMjc4MjMsMTI3ODI1LDEyNzgyNiwxMjc4MjcsMTI3ODI4LDEyNzgyOSwxMjc4MzAsMTI3ODMxLDEyNzgzMiwxMjc4MzYsMTI3ODM3LDEyNzgzOCwxMjc4MzksMTI3ODQwLDEyNzg0MSwxMjc4NDIsMTI3ODQzLDEyNzg0NCwxMjc4NDYsMTI3ODQ4LDEyNzg0OSwxMjc4NTAsMTI3ODUxLDEyNzg1MiwxMjc4NTMsMTI3ODU2LDEyNzg1OCwxMjc4NTksMTI3ODYwLDEyNzg2MywxMjc4NjQsMTI3ODY3XS5tYXAoZnVuY3Rpb24oaXRlbSl7dmFyIGVtb2ppTGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtlbW9qaUxpbmsuc3R5bGUudGV4dERlY29yYXRpb249XCJub25lXCIsZW1vamlMaW5rLnN0eWxlLm1hcmdpbj1cIjVweFwiLGVtb2ppTGluay5zdHlsZS5wb3NpdGlvbj1cImluaXRpYWxcIixlbW9qaUxpbmsuc3R5bGUuZm9udFNpemU9XCIyNHB4XCIsZW1vamlMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIixcImphdmFzY3JpcHQ6dm9pZCgwKVwiKSxlbW9qaUxpbmsuaW5uZXJIVE1MPVN0cmluZy5mcm9tQ29kZVBvaW50KGl0ZW0pLGVtb2ppTGluay5vbm1vdXNlZG93bj1jbGlja0xpbmssZm9vZENhdGVnb3J5LmFwcGVuZENoaWxkKGVtb2ppTGluayl9KSxbMTI3OTIxLDEyNzkyMywxMjc5MzQsMTI3OTM1LDEyNzkzNiwxMjc5MzcsMTI3OTM4LDEyNzkzOSwxMjc5NDAsMTI3OTQyLDEyNzk0NCwxMjc5NDYsMTI4Njc1LDEyODY5MiwxMjg2OTMsOTkxNyw5OTE4LDk5NzgsMTI3OTA3LDEyNzkxOSw5OTcxXS5tYXAoZnVuY3Rpb24oaXRlbSl7dmFyIGVtb2ppTGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtlbW9qaUxpbmsuc3R5bGUudGV4dERlY29yYXRpb249XCJub25lXCIsZW1vamlMaW5rLnN0eWxlLm1hcmdpbj1cIjVweFwiLGVtb2ppTGluay5zdHlsZS5wb3NpdGlvbj1cImluaXRpYWxcIixlbW9qaUxpbmsuc3R5bGUuZm9udFNpemU9XCIyNHB4XCIsZW1vamlMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIixcImphdmFzY3JpcHQ6dm9pZCgwKVwiKSxlbW9qaUxpbmsuaW5uZXJIVE1MPVN0cmluZy5mcm9tQ29kZVBvaW50KGl0ZW0pLGVtb2ppTGluay5vbm1vdXNlZG93bj1jbGlja0xpbmssc3BvcnRDYXRlZ29yeS5hcHBlbmRDaGlsZChlbW9qaUxpbmspfSksWzEyODY0MSwxMjg2NDIsMTI4NjQ2LDEyODY0OCwxMjg2NTAsMTI4NjUzLDEyODY1NCwxMjg2NTYsMTI4NjYwLDEyODY2MiwxMjg2NjQsMTI4NjY3LDEyODY2OCwxMjg2NjksMTI4NjcwLDEyODY3MSwxMjg2NzIsMTI4NjczLDEyODY0MCwxMjg2NDMsMTI4NjQ0LDEyODY0NSwxMjg2NDcsMTI4NjQ5LDEyODY1MiwxMjg2NTcsMTI4NjU4LDEyODY1OSwxMjg2NjEsMTI4NjYzLDEyODY2NSwxMjg2NjYsMTI4Njc0LDEyODY3NiwxMjg2OTBdLm1hcChmdW5jdGlvbihpdGVtKXt2YXIgZW1vamlMaW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2Vtb2ppTGluay5zdHlsZS50ZXh0RGVjb3JhdGlvbj1cIm5vbmVcIixlbW9qaUxpbmsuc3R5bGUubWFyZ2luPVwiNXB4XCIsZW1vamlMaW5rLnN0eWxlLnBvc2l0aW9uPVwiaW5pdGlhbFwiLGVtb2ppTGluay5zdHlsZS5mb250U2l6ZT1cIjI0cHhcIixlbW9qaUxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLFwiamF2YXNjcmlwdDp2b2lkKDApXCIpLGVtb2ppTGluay5pbm5lckhUTUw9U3RyaW5nLmZyb21Db2RlUG9pbnQoaXRlbSksZW1vamlMaW5rLm9ubW91c2Vkb3duPWNsaWNrTGluayx0cmFuc3BvcnRDYXRlZ29yeS5hcHBlbmRDaGlsZChlbW9qaUxpbmspfSksWzEyNzg5MCwxMjc4ODAsMTI3ODgxLDEyNzg4NywxMjc4OTEsMTI3OTA1LDEyNzkwNiwxMjc5MDgsMTI3OTA5LDEyNzkxMSwxMjc5MTIsMTI3OTE1LDEyNzkxNiwxMjc5MTgsMTI3OTE5LDEyNzkyNiwxMjc5MjcsMTI3OTI4LDEyNzkyOSwxMjc5MzAsMTI3OTMxLDEyNzkzMiwxMjc5NjgsMTI3OTczLDEyNzk3OCwxMjgxNDcsMTI4MTQ4LDEyODE0OSwxMjgxNTAsMTI4MTUxLDEyODE1MiwxMjgxODcsMTI4MTg2LDEyODE5NywxMjgyMTMsMTI4MjQ3XS5tYXAoZnVuY3Rpb24oaXRlbSl7dmFyIGVtb2ppTGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO2Vtb2ppTGkuc3R5bGUuZGlzcGxheT1cImlubGluZS1ibG9ja1wiLGVtb2ppTGkuc3R5bGUubWFyZ2luPVwiNXB4XCI7dmFyIGVtb2ppTGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtlbW9qaUxpbmsuc3R5bGUudGV4dERlY29yYXRpb249XCJub25lXCIsZW1vamlMaW5rLnN0eWxlLm1hcmdpbj1cIjVweFwiLGVtb2ppTGluay5zdHlsZS5wb3NpdGlvbj1cImluaXRpYWxcIixlbW9qaUxpbmsuc3R5bGUuZm9udFNpemU9XCIyNHB4XCIsZW1vamlMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIixcImphdmFzY3JpcHQ6dm9pZCgwKVwiKSxlbW9qaUxpbmsuaW5uZXJIVE1MPVN0cmluZy5mcm9tQ29kZVBvaW50KGl0ZW0pLGVtb2ppTGluay5vbm1vdXNlZG93bj1jbGlja0xpbmssb2JqZWN0c0NhdGVnb3J5LmFwcGVuZENoaWxkKGVtb2ppTGluayl9KSxlbW9qaVBpY2tlci5hcHBlbmRDaGlsZChlbW9qaUNhdGVnb3J5KSxlbW9qaVBpY2tlci5hcHBlbmRDaGlsZChmYWNlc0NhdGVnb3J5KSxlbW9qaVBpY2tlci5hcHBlbmRDaGlsZChhbmltYWxzQ2F0ZWdvcnkpLGVtb2ppUGlja2VyLmFwcGVuZENoaWxkKGZvb2RDYXRlZ29yeSksZW1vamlQaWNrZXIuYXBwZW5kQ2hpbGQoc3BvcnRDYXRlZ29yeSksZW1vamlQaWNrZXIuYXBwZW5kQ2hpbGQodHJhbnNwb3J0Q2F0ZWdvcnkpLGVtb2ppUGlja2VyLmFwcGVuZENoaWxkKG9iamVjdHNDYXRlZ29yeSksZW1vamlDb250YWluZXIuYXBwZW5kQ2hpbGQoZW1vamlQaWNrZXIpfX1dKSxNZXRlb3JFbW9qaX0oKTttb2R1bGUuZXhwb3J0cz1NZXRlb3JFbW9qaX0pfSx7fV19LHt9LFsxXSkoMSl9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWV0ZW9yLWVtb2ppL2Rpc3QvbWV0ZW9yRW1vamkubWluLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRpZighbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=