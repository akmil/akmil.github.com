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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
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
        instagramDirect_postMessage: 'instagram-direct/'
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // import $ from 'jquery';


var _consts = __webpack_require__(0);

var _network = __webpack_require__(5);

var _network2 = _interopRequireDefault(_network);

var _cookie = __webpack_require__(2);

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
/* 2 */
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)(module)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // import $ from 'jquery';


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
            _view2.default.showInfoMessage($el, result.status.state, result.status.message || 'Login error');
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


__webpack_require__(17);

var _consts = __webpack_require__(0);

var _registerForm = __webpack_require__(13);

var _registerForm2 = _interopRequireDefault(_registerForm);

var _loginForm = __webpack_require__(11);

var _loginPage = __webpack_require__(16);

var _confirmReg = __webpack_require__(7);

var _header = __webpack_require__(9);

var header = _interopRequireWildcard(_header);

var _burgerMenu = __webpack_require__(8);

var burgerMenu = _interopRequireWildcard(_burgerMenu);

var _instagramAccountsList = __webpack_require__(10);

var instagramAccounts = _interopRequireWildcard(_instagramAccountsList);

var _messages = __webpack_require__(12);

var messages = _interopRequireWildcard(_messages);

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

var init = function init() {
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
    instagramAccounts.init();
    messages.init();
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

var _user = __webpack_require__(1);

var _user2 = _interopRequireDefault(_user);

var _consts = __webpack_require__(0);

var _cookie = __webpack_require__(2);

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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initHeader = initHeader;

var _user = __webpack_require__(1);

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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.init = init;

var _user = __webpack_require__(1);

var _user2 = _interopRequireDefault(_user);

var _view = __webpack_require__(3);

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// После добавления аккаунта снова дернуть МЕТА и перерисовать список аккаунтов
// import $ from 'jquery';
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
// import Spinner from '../../common/js-services/spinner';


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
            }
        });
    });

    // inside modal
    $('.js_confirm-security-code').on('click', function (e) {
        var btn = $(e.target);
        var username = btn.data('username');
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
            $('<li class="media py-3">\n                <img class="ml-3 rounded" alt="default avatar" src="' + defaultAvatarSrc + '">\n                <div class="media-body d-flex">\n                    <div class="col user-info">\n                        ' + (item.username ? '<h4 class="mt-0 mb-1 name">' + item.username + '</h4>' : '') + '\n                    </div>\n                    <div class="col">                        \n                        ' + (checkpoint.status === 'TRIGGERED' ? '<button class="btn btn-outline-secondary js_pass-checkpoint-btn d-block mx-auto" \n                            data-checkpoint-type="' + checkpoint.type + '"\n                            data-username="' + (item.username || '') + '"\n                            data-toggle="modal" data-target="#security-code">\n                            <i class="fas fa-key"></i>\u041F\u0440\u043E\u0439\u0442\u0438 \u0447\u0435\u043A\u043F\u043E\u0438\u043D\u0442</button>' : '(todo)checkpoint status - ' + checkpoint.status) + '\n                    </div>\n                    ' + stats() + '\n                </div>\n            </li>').appendTo(cList);
        } else {
            $('<li class="media py-3">\n            ' + (info['profile_pic_url'] ? '<img class="ml-3 rounded" alt="User photo" src="' + info['profile_pic_url'] + '">' : '<img class="ml-3 rounded" alt="default avatar" src="' + defaultAvatarSrc + '">') + '\n            <div class="media-body d-flex">\n                <div class="col user-info">\n                    ' + (item.username ? '<p class="mt-0 mb-1 name lead">' + item.username + '</p>' : '') + '\n                    ' + (info.name ? '<h4 class="mt-0 mb-1">' + info.name + '</h4>' : '') + '\n                    ' + (info.name ? '' : '' /* ${(info.email) ? `<p class="mt-0 mb-1">${info.email}</p>` : ''}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     ${(info.phone) ? `<p class="mt-0 mb-1">${info.phone}</p>` : ''} */) + '\n                    \n                </div>\n                <div class="col">                        \n                    ' + (checkpoint.status === 'TRIGGERED' ? '<button class="btn btn-outline-secondary js_pass-checkpoint-btn d-block mx-auto" data-checkpoint-type="' + checkpoint.type + '" data-toggle="modal" data-target="#security-code">\n                    <i class="fas fa-key"></i>\u041F\u0440\u043E\u0439\u0442\u0438 \u0447\u0435\u043A\u043F\u043E\u0438\u043D\u0442</button>' : '') + '\n                </div>\n                ' + stats(info) + '\n            </div>\n        </li>').appendTo(cList);
        }
    });
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LoginForm = LoginForm;

var _user = __webpack_require__(1);

var _user2 = _interopRequireDefault(_user);

var _pubsubJs = __webpack_require__(4);

var _pubsubJs2 = _interopRequireDefault(_pubsubJs);

var _cookie = __webpack_require__(2);

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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.init = init;

var _meteorEmoji = __webpack_require__(18);

var _meteorEmoji2 = _interopRequireDefault(_meteorEmoji);

var _user = __webpack_require__(1);

var _user2 = _interopRequireDefault(_user);

var _apiUserDirect = __webpack_require__(14);

var _apiUserDirect2 = _interopRequireDefault(_apiUserDirect);

var _spinner = __webpack_require__(15);

var _spinner2 = _interopRequireDefault(_spinner);

var _pubsubJs = __webpack_require__(4);

var _pubsubJs2 = _interopRequireDefault(_pubsubJs);

var _consts = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://www.npmjs.com/package/pubsub-js

var token = _user2.default.getToken();
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
    if (isAppentPrevMsg) {
        console.log('isAppentPrevMsg to', cList);
    } else {
        cList.empty().addClass('border-light-color');
        items.forEach(function (item) {
            var message = item;
            // const checkpoint = item.checkpoint || item;

            if (message.side.toLowerCase() === 'left') {
                $('<li class="chat-item chat-item-left col flex-column-reverse" value="' + message.value + '">\n                <div class="d-flex">\n                ' + (message['profile_pic_url'] ? '<div class="chat-img-box"> \n                         <img src="' + message['profile_pic_url'] + '" alt="User Avatar" class="">\n                        </div>' : '') + '\n                <div>\n                    <p class="chat-username text-muted">' + message.username + '</p>\n                    ' + insertMsg(message.value, message.type) + '\n                </div>\n                    <small class="chat-time-text">' + _apiUserDirect2.default.getFormattedDateUtil(message.timestamp) + '</small>\n                </div>\n            </li>').appendTo(cList);
            } else {
                $('<li class="chat-item chat-item-right col flex-column-reverse" value="' + message.value + '">\n                <div class="d-flex justify-content-end">\n                    ' + insertMsg(message.value, message.type) + '\n                    <small class="pull-right chat-time-text">' + _apiUserDirect2.default.getFormattedDateUtil(message.timestamp) + '</small>\n                    </div>\n            </li>').appendTo(cList);
            }
        });
    }
}
function addPagination($wrapper, pagination) {
    var conversationId = pagination.prev_cursor;
    var $button = $('<button class="btn load-more d-flex position-absolute" style="top: -42px;" \n        data-cursor="' + conversationId + '">\u0435\u0449\u0435 \u0434\u0430\u0432\u0430\u0439!</button>');

    if (!$wrapper.closest('.messages-list-box').find('.load-more').length) {
        $button.insertBefore($wrapper).on('click', function (e) {
            var userData = $('.messages-list').data('conversation');
            var username = userData.username;

            _spinner2.default.startButtonSpinner($button);
            _apiUserDirect2.default.getMetadataDetailConversation(token, { username: username, conversationId: conversationId }).then(function (result) {
                console.log('receive old msg', result);
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
        if (result.data.meta.pagination) {
            addPagination($msgList, result.data.meta.pagination);
        } else {
            $('.messages-list-box').find('.load-more').remove();
        }
        _spinner2.default.remove();
        $('.js_send-message-box').removeClass('d-none');
        $('.messages-list').attr('data-conversation', JSON.stringify({ username: username, conversationId: conversationId }));

        if (isScrollDown) {
            $msgList.animate({
                scrollTop: $msgList[0].scrollHeight - $msgList[0].clientHeight
            }, 1000);
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
                _pubsubJs2.default.publish(_consts.CONST.events.messages.RECIEVE_NEW_MESSAGE, { username: username, conversationId: conversationId, value: value, result: result });
            }
        });
    });
    $(document).on('click', '.list-group-item .collapse', function (e) {
        e.stopPropagation();
        var username = $(e.target).closest('.list-group-item').data('username');
        conversationId = $(e.target).closest('.media').data('conversation-id');
        _spinner2.default.add($('#mainChatPart'), 'my-5 py-5');
        getAndFillConversation(username, conversationId, 'isScrollDown');
        updateInterval = updateInterval > 6000 ? updateInterval : 9999996000;
        // resend request
        if (intervalId) {
            clearInterval(intervalId);
        }
        intervalId = setInterval(function () {
            console.log(intervalId, conversationId);
            getAndFillConversation(username, conversationId);
            getAndFillUserList();
        }, updateInterval);
    });

    _pubsubJs2.default.subscribe(_consts.CONST.events.messages.RECIEVE_NEW_MESSAGE, function (eventName, data) {
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // import $ from 'jquery';
// https://www.npmjs.com/package/pubsub-js


var _pubsubJs = __webpack_require__(4);

var _pubsubJs2 = _interopRequireDefault(_pubsubJs);

var _user = __webpack_require__(1);

var _user2 = _interopRequireDefault(_user);

var _cookie = __webpack_require__(2);

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
/* 14 */
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

var _cookie = __webpack_require__(2);

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
            return this.network.sendRequest(_consts.CONST.getPath('instagramDirect_getMetaData') + '/' + details.username + '/' + details.conversationId, { headers: { token: token } }, cbError);
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
/* 15 */
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LoginPage = LoginPage;

var _user = __webpack_require__(1);

var _user2 = _interopRequireDefault(_user);

var _pubsubJs = __webpack_require__(4);

var _pubsubJs2 = _interopRequireDefault(_pubsubJs);

var _cookie = __webpack_require__(2);

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
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;!function(f){if(true)module.exports=f();else if("function"==typeof define&&define.amd)define([],f);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).MeteorEmoji=f()}}(function(){return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n||e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){!function(global,factory){if(void 0!==exports)factory(module);else{var mod={exports:{}};factory(mod),global.meteorEmoji=mod.exports}}(this,function(module){"use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),MeteorEmoji=function(){function MeteorEmoji(){!function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,MeteorEmoji),this.initiate()}return _createClass(MeteorEmoji,[{key:"initiate",value:function(){var _this=this;document.querySelectorAll('[data-meteor-emoji="true"], [data-meteor-emoji-large="true"]').forEach(function(element){_this.generateElements(element)})}},{key:"generateElements",value:function(emojiInput){var clickLink=function(event){var caretPos=emojiInput.selectionStart;emojiInput.value=emojiInput.value.substring(0,caretPos)+" "+event.target.innerHTML+emojiInput.value.substring(caretPos),emojiPicker.style.display="block","undefined"!=typeof angular&&angular.element(emojiInput).triggerHandler("change")},clickCategory=function(event){emojiInput.selectionStart;emojiPicker.style.display="block";for(var hideUls=emojiPicker.querySelectorAll("ul"),i=1,l=hideUls.length;i<l;i++)hideUls[i].style.display="none";var backgroundToggle=emojiPicker.querySelectorAll(".category a");for(i=0,l=backgroundToggle.length;i<l;i++)backgroundToggle[i].style.background="none";emojiPicker.querySelector("."+event.target.id).style.display="block",emojiPicker.querySelector("#"+event.target.id).style.background="#c2c2c2"};emojiInput.style.width="100%";var emojiContainer=document.createElement("div");emojiContainer.style.position="relative",emojiInput.parentNode.replaceChild(emojiContainer,emojiInput),emojiContainer.appendChild(emojiInput);var emojiPicker=document.createElement("div");emojiPicker.tabIndex=0,emojiInput.hasAttribute("data-meteor-emoji-large")?(emojiPicker.style.zIndex="999",emojiPicker.style.display="block",emojiPicker.style.width="100%",emojiPicker.style.marginBottom="15px"):(emojiPicker.style.position="absolute",emojiPicker.style.right="0px",emojiPicker.style.top="30px",emojiPicker.style.display="none",emojiPicker.style.width="400px"),emojiPicker.style.zIndex="999",emojiPicker.style.overflow="hidden",emojiPicker.style.background="#fff",emojiPicker.style.borderRadius="5px",emojiPicker.style.boxShadow="0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",emojiPicker.style.borderRadius="2px;",emojiPicker.style.marginTop="5px",emojiPicker.style.outline="none";var emojiTrigger=document.createElement("a");emojiTrigger.style.position="absolute",emojiTrigger.style.top="10px",emojiTrigger.style.right="10px",emojiTrigger.style.textDecoration="none",emojiTrigger.setAttribute("href","javascript:void(0)"),emojiTrigger.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12 14"><path d="M8.9 8.4q-0.3 0.9-1.1 1.5t-1.8 0.6-1.8-0.6-1.1-1.5q-0.1-0.2 0-0.4t0.3-0.2q0.2-0.1 0.4 0t0.2 0.3q0.2 0.6 0.7 1t1.2 0.4 1.2-0.4 0.7-1q0.1-0.2 0.3-0.3t0.4 0 0.3 0.2 0 0.4zM5 5q0 0.4-0.3 0.7t-0.7 0.3-0.7-0.3-0.3-0.7 0.3-0.7 0.7-0.3 0.7 0.3 0.3 0.7zM9 5q0 0.4-0.3 0.7t-0.7 0.3-0.7-0.3-0.3-0.7 0.3-0.7 0.7-0.3 0.7 0.3 0.3 0.7zM11 7q0-1-0.4-1.9t-1.1-1.6-1.6-1.1-1.9-0.4-1.9 0.4-1.6 1.1-1.1 1.6-0.4 1.9 0.4 1.9 1.1 1.6 1.6 1.1 1.9 0.4 1.9-0.4 1.6-1.1 1.1-1.6 0.4-1.9zM12 7q0 1.6-0.8 3t-2.2 2.2-3 0.8-3-0.8-2.2-2.2-0.8-3 0.8-3 2.2-2.2 3-0.8 3 0.8 2.2 2.2 0.8 3z"/></svg>',emojiTrigger.onclick=function(){"none"===emojiPicker.style.display?emojiPicker.style.display="block":"block"===emojiPicker.style.display&&(emojiPicker.style.display="none"),emojiPicker.focus()},emojiInput.hasAttribute("data-meteor-emoji-large")||emojiContainer.appendChild(emojiTrigger),window.addEventListener("click",function(e){emojiInput.hasAttribute("data-meteor-emoji-large")||"block"===emojiPicker.style.display&&(emojiPicker.contains(e.target)||emojiTrigger.contains(e.target)||(emojiPicker.style.display="none"))});var facesCategory=document.createElement("ul");facesCategory.style.padding="10px 0px",facesCategory.style.margin="0",facesCategory.style.listStyle="none",facesCategory.style.textAlign="left",facesCategory.style.marginLeft="3%",facesCategory.classList.add("faces");var animalsCategory=document.createElement("ul");animalsCategory.style.padding="10px 0px",animalsCategory.style.margin="0",animalsCategory.style.listStyle="none",animalsCategory.style.textAlign="left",animalsCategory.style.marginLeft="3%",animalsCategory.classList.add("animals"),animalsCategory.style.display="none";var foodCategory=document.createElement("ul");foodCategory.style.padding="10px 0px",foodCategory.style.margin="0",foodCategory.style.listStyle="none",foodCategory.style.textAlign="left",foodCategory.style.marginLeft="3%",foodCategory.classList.add("food"),foodCategory.style.display="none";var sportCategory=document.createElement("ul");sportCategory.style.padding="10px 0px",sportCategory.style.margin="0",sportCategory.style.listStyle="none",sportCategory.style.textAlign="left",sportCategory.style.marginLeft="3%",sportCategory.classList.add("sport"),sportCategory.style.display="none";var transportCategory=document.createElement("ul");transportCategory.style.padding="10px 0px",transportCategory.style.margin="0",transportCategory.style.listStyle="none",transportCategory.style.textAlign="left",transportCategory.style.marginLeft="3%",transportCategory.classList.add("transport"),transportCategory.style.display="none";var objectsCategory=document.createElement("ul");objectsCategory.style.padding="10px 0px",objectsCategory.style.margin="0",objectsCategory.style.listStyle="none",objectsCategory.style.textAlign="left",objectsCategory.style.marginLeft="3%",objectsCategory.classList.add("objects"),objectsCategory.style.display="none";var emojiCategory=document.createElement("ul");emojiCategory.style.padding="0px",emojiCategory.style.margin="0",emojiCategory.style.display="table",emojiCategory.style.width="100%",emojiCategory.style.background="#eff0f1",emojiCategory.style.listStyle="none",emojiCategory.classList.add("category");var emojiCategories=new Array;emojiCategories.push({name:"faces",svg:'<svg id="faces" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150"><path id="faces" d="M74.34,128.48a53.5,53.5,0,1,1,37.84-15.67,53.16,53.16,0,0,1-37.84,15.67Zm0-97.89a44.4,44.4,0,1,0,31.4,13,44.07,44.07,0,0,0-31.4-13Z"/><path id="faces" d="M74.35,108A33.07,33.07,0,0,1,41.29,75a2.28,2.28,0,0,1,2.27-2.28h0A2.27,2.27,0,0,1,45.83,75a28.52,28.52,0,0,0,57,0,2.27,2.27,0,0,1,4.54,0A33.09,33.09,0,0,1,74.35,108Z"/><path id="faces" d="M58.84,62a6.81,6.81,0,1,0,6.81,6.81A6.81,6.81,0,0,0,58.84,62Z"/><path id="faces" d="M89.87,62a6.81,6.81,0,1,0,6.81,6.81A6.82,6.82,0,0,0,89.87,62Z"/></svg>'}),emojiCategories.push({name:"animals",svg:'<svg id="animals" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150"><path id="animals" d="M59.9,91.75h0c-22.46,0-41.82-19.34-44.09-44A52.1,52.1,0,0,1,16,36.8a4.51,4.51,0,0,1,2.63-3.62,39.79,39.79,0,0,1,12.74-3.37c23.92-2.15,45.35,17.83,47.74,43.86a52.77,52.77,0,0,1-.15,10.93,4.56,4.56,0,0,1-2.64,3.62,39.67,39.67,0,0,1-12.73,3.36c-1.23.11-2.45.17-3.66.17ZM24.76,40.49a41.29,41.29,0,0,0,.09,6.4C26.7,67,42.09,82.66,59.9,82.67h0c.94,0,1.88,0,2.83-.14a30.39,30.39,0,0,0,7.41-1.62,41.14,41.14,0,0,0-.11-6.4C68.09,53.38,51.11,37.08,32.17,38.86a30.78,30.78,0,0,0-7.41,1.63Z"/><path id="animals" d="M36.68,125.64a4.53,4.53,0,0,1-4.33-3.17,53.32,53.32,0,0,1-2.26-11A50.42,50.42,0,0,1,39.51,76.6c7.35-9.91,17.84-16,29.5-17,1.16-.11,2.33-.13,3.47-.13a4.54,4.54,0,0,1,4.33,3.16,51.59,51.59,0,0,1,2.27,11.08,50.39,50.39,0,0,1-9.42,34.8c-7.35,9.91-17.83,16-29.5,17a17.63,17.63,0,0,1-3.48.12ZM69.09,68.69A32.41,32.41,0,0,0,46.8,82a42.57,42.57,0,0,0-6.71,34.38,32.38,32.38,0,0,0,22.28-13.32A41.35,41.35,0,0,0,70,74.51a39.38,39.38,0,0,0-.94-5.82Z"/><path id="animals" d="M90.27,91.75c-1.22,0-2.43-.06-3.66-.17a39.67,39.67,0,0,1-12.73-3.36,4.57,4.57,0,0,1-2.64-3.61,53.38,53.38,0,0,1-.17-10.93c2.41-26,23.7-46.07,47.76-43.87a39.74,39.74,0,0,1,12.73,3.37,4.57,4.57,0,0,1,2.64,3.62,53.35,53.35,0,0,1,.16,10.92c-2.28,24.69-21.65,44-44.09,44ZM80,80.91a30.57,30.57,0,0,0,7.42,1.62c19.07,1.78,35.92-14.53,37.87-35.64a42.55,42.55,0,0,0,.1-6.4A30.86,30.86,0,0,0,118,38.86C99,37.07,82.06,53.38,80.12,74.51a43.91,43.91,0,0,0-.1,6.4Z"/><path id="animals" d="M113.49,125.64h0c-1.16,0-2.3,0-3.46-.12-23.9-2.21-41.36-25.47-38.94-51.85A53.52,53.52,0,0,1,73.34,62.6a4.55,4.55,0,0,1,4.33-3.16c1.16,0,2.34,0,3.51.13,11.64,1.07,22.11,7.12,29.48,17a50.51,50.51,0,0,1,9.42,34.81,53.51,53.51,0,0,1-2.26,11,4.54,4.54,0,0,1-4.33,3.19ZM81.08,68.69a42.53,42.53,0,0,0-1,5.82c-1.94,21.1,11.45,39.71,29.95,41.88A42.38,42.38,0,0,0,103.36,82,32.42,32.42,0,0,0,81.08,68.69Z"/><path id="animals" d="M75.08,45.45a7.83,7.83,0,1,0,7.83,7.83,7.83,7.83,0,0,0-7.83-7.83Z"/><path id="animals" d="M76.29,51.89a2.26,2.26,0,0,1-2.14-3A46,46,0,0,1,92.82,25.34a2.27,2.27,0,1,1,2.4,3.86A41.4,41.4,0,0,0,78.43,50.39a2.28,2.28,0,0,1-2.14,1.5Z"/><path id="animals" d="M73.87,51.89a2.28,2.28,0,0,1-2.14-1.5A41.35,41.35,0,0,0,54.94,29.2a2.27,2.27,0,0,1,2.39-3.86A46,46,0,0,1,76,48.85a2.28,2.28,0,0,1-1.37,2.91,2.31,2.31,0,0,1-.77.13Z"/></svg>'}),emojiCategories.push({name:"food",svg:'<svg id="food" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150"><path id="food" d="M104,20.76h.15c15.83.52,24.08,21.48,24.07,32.56.26,12.42-10.72,23.55-24,24.21a3.53,3.53,0,0,1-.46,0c-13.25-.66-24.23-11.8-24-24.3,0-11,8.26-31.95,24.07-32.47Zm0,47.69c8.25-.54,15.3-7.51,15.14-15,0-8.12-6.22-23.1-15.14-23.57-8.9.46-15.14,15.45-15.14,23.48-.14,7.61,6.9,14.59,15.14,15.13Z"/><path id="food" d="M97.19,69.21h.14a4.53,4.53,0,0,1,4.4,4.68l-1.48,46.92a1.59,1.59,0,0,0,.5,1.06,4.6,4.6,0,0,0,3.25,1.19h0a4.57,4.57,0,0,0,3.26-1.2,1.53,1.53,0,0,0,.49-1l-1.48-46.95a4.54,4.54,0,1,1,9.08-.28l1.47,46.91a10.42,10.42,0,0,1-3,7.65,13.65,13.65,0,0,1-9.81,4h0a13.58,13.58,0,0,1-9.79-4,10.42,10.42,0,0,1-3-7.67l1.48-46.89a4.53,4.53,0,0,1,4.53-4.4Z"/><path id="food" d="M41.84,69.21H42a4.53,4.53,0,0,1,4.4,4.68L44.9,120.81a1.57,1.57,0,0,0,.5,1.06,4.6,4.6,0,0,0,3.25,1.19h0a4.51,4.51,0,0,0,3.24-1.19,1.48,1.48,0,0,0,.5-1L50.93,73.89a4.53,4.53,0,0,1,4.39-4.68A4.4,4.4,0,0,1,60,73.61l1.48,46.91a10.49,10.49,0,0,1-3,7.66,13.57,13.57,0,0,1-9.78,4h0a13.59,13.59,0,0,1-9.78-4,10.48,10.48,0,0,1-3-7.67l1.48-46.9a4.54,4.54,0,0,1,4.54-4.4Z"/><path id="food" d="M28.59,20.76a4.54,4.54,0,0,1,4.54,4.54V51a15.52,15.52,0,0,0,31,0V25.3a4.55,4.55,0,0,1,9.09,0V51a24.61,24.61,0,1,1-49.21,0V25.3a4.54,4.54,0,0,1,4.54-4.54Z"/><path id="food" d="M55.34,20.76a4.54,4.54,0,0,1,4.54,4.54v19a4.54,4.54,0,1,1-9.08,0v-19a4.54,4.54,0,0,1,4.54-4.54Z"/><path id="food" d="M42,20.76a4.54,4.54,0,0,1,4.54,4.54v19a4.54,4.54,0,1,1-9.08,0v-19A4.54,4.54,0,0,1,42,20.76Z"/></svg>'}),emojiCategories.push({name:"sport",svg:'<svg id="sport" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150"><path id="sport" d="M75.35,130.24a53.49,53.49,0,1,1,53.48-53.49,53.55,53.55,0,0,1-53.48,53.49Zm0-97.89a44.41,44.41,0,1,0,44.4,44.4,44.1,44.1,0,0,0-44.4-44.4Z"/><path id="sport" d="M119.24,84.08A51.29,51.29,0,0,1,68,32.86a49.44,49.44,0,0,1,.26-5,2.26,2.26,0,0,1,2-2c1.66-.16,3.34-.25,5-.25a51.26,51.26,0,0,1,51.21,51.21c0,1.71-.09,3.38-.25,5a2.28,2.28,0,0,1-2,2c-1.65.16-3.33.25-5,.25ZM72.64,30.16c-.06.9-.08,1.79-.08,2.7a46.73,46.73,0,0,0,46.68,46.68q1.37,0,2.7-.09c.06-.89.08-1.79.08-2.7A46.72,46.72,0,0,0,75.35,30.08c-.91,0-1.82,0-2.71.08Z"/><path id="sport" d="M75.35,128A51.28,51.28,0,0,1,24.12,76.76c0-1.7.1-3.38.25-5a2.29,2.29,0,0,1,2-2c1.66-.16,3.33-.25,5.05-.25a51.27,51.27,0,0,1,51.21,51.22c0,1.69-.09,3.37-.25,5a2.27,2.27,0,0,1-2,2c-1.66.16-3.32.25-5,.25ZM28.75,74.05c-.05.9-.09,1.8-.09,2.71a46.74,46.74,0,0,0,46.69,46.67c.91,0,1.8,0,2.7-.08,0-.9.08-1.8.08-2.7A46.73,46.73,0,0,0,31.46,74c-.91,0-1.81,0-2.71.08Z"/><polygon id="sport" points="42.69 112.61 39.48 109.4 108 40.88 111.21 44.1 42.69 112.61 42.69 112.61"/></svg>'}),emojiCategories.push({name:"transport",svg:'<svg id="transport" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150"><path id="transport" d="M120.7,116H31a4.55,4.55,0,0,1-4.54-4.55V54.28A31.82,31.82,0,0,1,58.25,22.49h35.2a31.83,31.83,0,0,1,31.8,31.79v57.15A4.55,4.55,0,0,1,120.7,116Zm-85.16-9.09h80.62V54.28A22.74,22.74,0,0,0,93.45,31.57H58.25A22.74,22.74,0,0,0,35.54,54.28v52.61Z"/><path id="transport" d="M49.35,129.23c-8.53,0-13.62-2.77-13.62-7.41V115.6a4.54,4.54,0,1,1,9.08,0v4.06a21.32,21.32,0,0,0,9.09,0V115.6a4.54,4.54,0,0,1,9.08,0v6.22c0,4.64-5.09,7.41-13.63,7.41Z"/><path id="transport" d="M102.34,129.23c-8.53,0-13.62-2.77-13.62-7.41V115.6a4.54,4.54,0,0,1,9.08,0v4.06a21.28,21.28,0,0,0,9.08,0V115.6a4.55,4.55,0,0,1,9.09,0v6.22c0,4.64-5.09,7.41-13.63,7.41Z"/><path id="transport" d="M97.81,44.83H53.9a4.55,4.55,0,1,1,0-9.09H97.81a4.55,4.55,0,0,1,0,9.09Z"/><path id="transport" d="M54.28,84.2A6.8,6.8,0,1,0,61.07,91a6.8,6.8,0,0,0-6.79-6.8Z"/><path id="transport" d="M97.43,84.2a6.8,6.8,0,1,0,6.79,6.8,6.8,6.8,0,0,0-6.79-6.8Z"/><path id="transport" d="M107.08,81H44.63a6.82,6.82,0,0,1-6.82-6.82V54.28a6.82,6.82,0,0,1,6.82-6.81h62.45a6.82,6.82,0,0,1,6.81,6.81V74.15A6.83,6.83,0,0,1,107.08,81ZM44.63,52a2.28,2.28,0,0,0-2.28,2.27V74.15a2.28,2.28,0,0,0,2.28,2.27h62.45a2.27,2.27,0,0,0,2.27-2.27V54.28A2.27,2.27,0,0,0,107.08,52Z"/></svg>'}),emojiCategories.push({name:"objects",svg:'<svg id="objects" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150"><path id="objects" d="M107.78,129a4.55,4.55,0,0,1-2.67-.87l-30-21.79-30,21.79a4.53,4.53,0,0,1-5.34,0,4.58,4.58,0,0,1-1.65-5.08L49.59,87.82,19.6,66a4.54,4.54,0,0,1,2.67-8.22H59.34L70.8,22.55a4.55,4.55,0,0,1,8.64,0L90.89,57.81H128A4.54,4.54,0,0,1,130.63,66l-30,21.79,11.46,35.25a4.55,4.55,0,0,1-4.32,6ZM75.12,96.2a4.53,4.53,0,0,1,2.67.87l21.35,15.51L91,87.49a4.55,4.55,0,0,1,1.65-5.08L114,66.89H87.59a4.54,4.54,0,0,1-4.32-3.13l-8.15-25.1L67,63.76a4.53,4.53,0,0,1-4.32,3.13H36.25L57.61,82.41a4.54,4.54,0,0,1,1.65,5.08l-8.17,25.09L72.45,97.07a4.53,4.53,0,0,1,2.67-.87Z"/></svg>'});emojiCategories.map(function(item){var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.padding="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.style.display="table-cell",emojiLink.style.textAlign="center",emojiLink.id=String(item.name),"faces"==String(item.name)&&(emojiLink.style.background="#c2c2c2"),emojiLink.innerHTML=String(item.svg),emojiLink.onmousedown=clickCategory,emojiCategory.appendChild(emojiLink)}),[128513,128514,128515,128516,128517,128518,128521,128522,128523,128524,128525,128527,128530,128531,128532,128534,128536,128538,128540,128541,128542,128544,128545,128546,128547,128548,128549,128552,128553,128554,128555,128557,128560,128561,128562,128563,128565,128567].map(function(item){var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.margin="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.innerHTML=String.fromCodePoint(item),emojiLink.onmousedown=clickLink,facesCategory.appendChild(emojiLink)}),[128012,128013,128014,128017,128018,128020,128023,128024,128025,128026,128027,128028,128029,128030,128031,128032,128033,128034,128035,128036,128037,128038,128039,128040,128041,128043,128044,128045,128046,128047,128048,128049,128050,128051,128052,128053,128054,128055,128056,128057,128058,128059,128060].map(function(item){var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.margin="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.innerHTML=String.fromCodePoint(item),emojiLink.onmousedown=clickLink,animalsCategory.appendChild(emojiLink)}),[127813,127814,127815,127816,127817,127818,127820,127821,127822,127823,127825,127826,127827,127828,127829,127830,127831,127832,127836,127837,127838,127839,127840,127841,127842,127843,127844,127846,127848,127849,127850,127851,127852,127853,127856,127858,127859,127860,127863,127864,127867].map(function(item){var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.margin="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.innerHTML=String.fromCodePoint(item),emojiLink.onmousedown=clickLink,foodCategory.appendChild(emojiLink)}),[127921,127923,127934,127935,127936,127937,127938,127939,127940,127942,127944,127946,128675,128692,128693,9917,9918,9978,127907,127919,9971].map(function(item){var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.margin="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.innerHTML=String.fromCodePoint(item),emojiLink.onmousedown=clickLink,sportCategory.appendChild(emojiLink)}),[128641,128642,128646,128648,128650,128653,128654,128656,128660,128662,128664,128667,128668,128669,128670,128671,128672,128673,128640,128643,128644,128645,128647,128649,128652,128657,128658,128659,128661,128663,128665,128666,128674,128676,128690].map(function(item){var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.margin="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.innerHTML=String.fromCodePoint(item),emojiLink.onmousedown=clickLink,transportCategory.appendChild(emojiLink)}),[127890,127880,127881,127887,127891,127905,127906,127908,127909,127911,127912,127915,127916,127918,127919,127926,127927,127928,127929,127930,127931,127932,127968,127973,127978,128147,128148,128149,128150,128151,128152,128187,128186,128197,128213,128247].map(function(item){var emojiLi=document.createElement("li");emojiLi.style.display="inline-block",emojiLi.style.margin="5px";var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.margin="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.innerHTML=String.fromCodePoint(item),emojiLink.onmousedown=clickLink,objectsCategory.appendChild(emojiLink)}),emojiPicker.appendChild(emojiCategory),emojiPicker.appendChild(facesCategory),emojiPicker.appendChild(animalsCategory),emojiPicker.appendChild(foodCategory),emojiPicker.appendChild(sportCategory),emojiPicker.appendChild(transportCategory),emojiPicker.appendChild(objectsCategory),emojiContainer.appendChild(emojiPicker)}}]),MeteorEmoji}();module.exports=MeteorEmoji})},{}]},{},[1])(1)});

/***/ }),
/* 19 */
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTNmOTFlZTFkMmI0M2Y3Y2NjOGEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy91c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vanMtc2VydmljZXMvY29va2llLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vanMtc2VydmljZXMvdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9+L3B1YnN1Yi1qcy9zcmMvcHVic3ViLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vanMtc2VydmljZXMvbmV0d29yay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvY29uZmlybS1yZWcvY29uZmlybS1yZWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9oZWFkZXIvYnVyZ2VyLW1lbnUvYnVyZ2VyLW1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9oZWFkZXIvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaW5zdGFncmFtLWFjY291bnRzLWxpc3QvaW5zdGFncmFtLWFjY291bnRzLWxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9tZXNzYWdlcy9tZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3JlZ2lzdGVyLWZvcm0vcmVnaXN0ZXItZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2pzLXNlcnZpY2VzL2FwaS11c2VyLWRpcmVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2pzLXNlcnZpY2VzL3NwaW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL19hdXRoL2xvZ2luLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jhc2Uuc2NzcyIsIndlYnBhY2s6Ly8vLi9+L21ldGVvci1lbW9qaS9kaXN0L21ldGVvckVtb2ppLm1pbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIl0sIm5hbWVzIjpbIkNPTlNUIiwidXJsIiwiYmFzZSIsInJlZ2lzdHJhdGlvbiIsImxvZ2luIiwiY29uZmlybWF0aW9uIiwiaW5zdGFncmFtX2FkZEFjY291bnQiLCJpbnN0YWdyYW1BY2NvdW50X2dldE1ldGFEYXRhIiwiaW5zdGFncmFtQWNjb3VudF9jaGVja3BvaW50IiwiaW5zdGFncmFtQWNjb3VudF9jb25maXJtS2V5IiwiaW5zdGFncmFtRGlyZWN0X2dldE1ldGFEYXRhIiwiaW5zdGFncmFtRGlyZWN0X3Bvc3RNZXNzYWdlIiwidXNlciIsImVtYWlsIiwicGFzc3dvcmQiLCJ0b2tlbiIsImNvb2tpZVN0b3JhZ2UiLCJlbWFpbENvbmZpcm1lZCIsInVpU2VsZWN0b3JzIiwiaGVhZGVyTG9naW5Cb3giLCJoZWFkZXJOYXZMb2dpbkJ0biIsImhlYWRlclJlZ0JveCIsImhlYWRlclJlZ0J0biIsImluc3RhZ3JhbSIsImFkZEFjY291bnRCdG5TZWxlY3RvciIsImFkZEFjY291bnRCdG5JZCIsImV2ZW50cyIsIlVTRVJfTE9HR0VEIiwiVVNFUl9MT0dPVVQiLCJVU0VSX0VNQUlMX0NPTkZJUk1FRCIsIlNUT1BfRklYRURfU1BJTk5FUiIsIm1lc3NhZ2VzIiwiUkVDSUVWRV9ORVdfTUVTU0FHRSIsImdldFBhdGgiLCJuYW1lIiwiVXNlciIsIm5ldHdvcmsiLCJzZXR0aW5nUG9zdCIsIm1ldGhvZCIsImhlYWRlcnMiLCJnZXRUb2tlbiIsImdldCIsImNvb2tpZVRva2VuIiwiZm9ybURhdGEiLCJjYkVycm9yIiwic2V0dGluZyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwic2VuZFJlcXVlc3QiLCJ1c2VybmFtZSIsImNoZWNrcG9pbnRUeXBlIiwia2V5IiwidXNlckluc3RhbmNlIiwiQ29va2llU3J2IiwiYyIsImRvY3VtZW50IiwiY29va2llIiwibWF0Y2giLCJkZWNvZGVVUklDb21wb25lbnQiLCJzZXQiLCJ2YWx1ZSIsIm9wdHMiLCJwYXRoIiwiZGF5cyIsIk9iamVjdCIsImVudHJpZXMiLCJyZWR1Y2UiLCJzdHIiLCJrIiwidiIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlbW92ZSIsInZpZXdVdGlscyIsInNob3dJbmZvTWVzc2FnZSIsInNlbGVjdG9yIiwibWVzc2FnZTEiLCJtZXNzYWdlMiIsIiQiLCJlbXB0eSIsImFwcGVuZCIsImZpbGxMaXN0IiwiJGxpc3QiLCJkYXRhQXJyYXkiLCJpdGVtcyIsImNMaXN0IiwiZm9yRWFjaCIsIml0ZW0iLCJpIiwibGkiLCJhcHBlbmRUbyIsImFkZENsYXNzIiwidGV4dCIsImlzRW1haWwiLCJyZWdleCIsInRlc3QiLCJOZXR3b3JrIiwicmVzdWx0IiwiJGVsIiwibGVuZ3RoIiwic3RhdHVzIiwic3RhdGUiLCJtZXNzYWdlIiwicmVzcG9uc2UiLCJlcnJvciIsIkVycm9yIiwic3RhdHVzVGV4dCIsIlVSTCIsIk9QVFMiLCJmZXRjaCIsInRoZW4iLCJQcm9taXNlIiwiYWxsIiwianNvbiIsIm9rIiwiY2JFcnJvckRlZmF1bHQiLCJjaGVja1N0YXR1cyIsImhlYWRlciIsImJ1cmdlck1lbnUiLCJpbnN0YWdyYW1BY2NvdW50cyIsInNlbGVjdG9yQ3NzTG9naW5Gb3JtIiwiX2xvZ2luQm94IiwiX2Zvcm1JZCIsIl9idXR0b25TdWJtaXRJZCIsIl9zaG93TG9naW5Cb3hCdG5JZCIsInNlbGVjdG9yQ3NzTG9naW5Gb3JtSW5zdGFncmFtIiwiaXNMb2dpbkluc3RhZ3JhbSIsImluaXQiLCJpbml0SGVhZGVyIiwiY29uZmlybWF0aW9uV2l0aFJlZGlyZWN0IiwicGFyc2VRdWVyeVN0cmluZyIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwib2JqVVJMIiwicmVwbGFjZSIsIlJlZ0V4cCIsIiQwIiwiJDEiLCIkMiIsInBhcmFtcyIsInNlbmRDb25maXJtIiwiY29uZmlybSIsImRhdGEiLCJjdXN0b21lcnNEYXRhU3RyaW5nIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiY29uc29sZSIsImxvZyIsInNldFRpbWVvdXQiLCJyZWRpcmVjdCIsInBhdGhuYW1lIiwiaW5kZXhPZiIsInNlbGVjdG9yc0VsIiwibGVmdE1lbnUiLCJoYW1idXJnZXJCdXR0b25DbHMiLCJoYW1idXJnZXJNZW51Q2xzIiwiaGFtYnVyZ2VyTWVudU9wZW5lZENsYXNzIiwiaGFtYnVyZ2VyQnV0dG9uQ2xvc2VDbGFzcyIsInJpZ2h0TWVudSIsInN1YkhlYWRlciIsInRvZ2dsZUhhbWJ1cmdlck1lbnUiLCJtZW51TmFtZSIsInRvZ2dsZUNsYXNzIiwib24iLCJiaW5kIiwic2VsZWN0b3JMb2dpblN0YXRlIiwic2VsZWN0b3JFbWFpbENvbmZpcm1TdGF0ZSIsImNsb3NlQ2xhc3MiLCJvcGVuZWRDbGFzcyIsImVtYWlsTm90Q29uZmlybWVkIiwiJGVtYWlsbk1zZyIsImNzcyIsIm9uTG9naW5TdWJzY3JpYmUiLCJtc2ciLCJyZW1vdmVDbGFzcyIsIiRsb2dpbk1zZyIsImlzRW1haWxDb25maXJtZWQiLCJzaG93TG9nb3V0IiwiaXNMb2dnZWQiLCJpc0xvZ2dlZEluIiwicGFyZW50Iiwic2hvdyIsIm9sZFVSTCIsInJlZmVycmVyIiwiaW5jbHVkZXMiLCIkbG9naW5Cb3giLCIkcmVnaXN0ZXJCb3giLCJzdWJzY3JpYmUiLCJoaWRlIiwiYWRkSW5zdGFncmFtQWNjb3VudCIsIm5ld0Zvcm1EYXRhIiwiJG1zZ0xpc3QiLCJjYXRjaCIsImVyciIsImFkZE9uTG9hZEhhbmRsZXJzIiwiZSIsImJ0biIsInRhcmdldCIsIiRtb2RhbEJvZHkiLCJjbG9zZXN0IiwiZmluZCIsInZhbCIsInRyaW0iLCIkZm9ybSIsImZvcm0iLCJjc3NWYWxpZGF0aW9uQ2xhc3MiLCJwcmV2ZW50RGVmYXVsdCIsImNoZWNrVmFsaWRpdHkiLCJyZXBvcnRWYWxpZGl0eSIsImFkZExpc3RIYW5kbGVyIiwiJGJ1dHRvbiIsInNlbmRUbyIsInN0b3BQcm9wYWdhdGlvbiIsIm1vZGFsIiwiZ2V0U2VjdXJpdHlLZXkiLCIkbW9kYWwiLCIka2V5SW5wdXQiLCJjb25maXJtU2VjdXJpdHlLZXkiLCJsZW4iLCJtaW5MZW4iLCJOdW1iZXIiLCJhdHRyIiwib25IaWRlTW9kYWwiLCJyZW1vdmVBdHRyIiwidHlwZVNlbGVjdGVkIiwiY2hlY2twb2ludFR5cGVBY3RpdmUiLCJtb2RhbENvbmZpZyIsIl9jb25maWciLCJkZWZhdWx0QXZhdGFyU3JjIiwiaW5zZXJ0SXRlbSIsImNzc0NscyIsImxpVHBsIiwic3RhdHMiLCJpbmZvIiwidHBsIiwiY2hlY2twb2ludCIsInR5cGUiLCJtZXRhZGF0YSIsImdldE1ldGFkYXRhIiwicmVzZW5kUmVxdWVzdCIsImlzU2VuZFJlcU9uY2UiLCJjaGVja1Jlc3BvbnNlIiwiaXNSZXNlbmRSZXF1ZXN0IiwiYWNjb3VudHMiLCJMb2dpbkZvcm0iLCJzZWxlY3RvckNzcyIsIiRlbWFpbCIsIiR0ZXh0QXJlYURlc2NyaXB0aW9uIiwidXNlckxvZ2luSGVhZGVyIiwiX2Zvcm1EYXRhIiwic3VibWl0Rm9ybSIsImZvcm1EYXRhT2JqIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJwdWJsaXNoIiwibG9nT3V0IiwiYmluZEV2ZW50cyIsIiRzaG93TG9naW5Cb3hCdG5JZCIsIiRidXR0b25TdWJtaXQiLCJldmVudCIsImlzTG9naW5CdG5DbGljayIsImlzQWRkSW5zdGFncmFtQnRuQ2xpY2tlZCIsImhhc0NsYXNzIiwidXBkYXRlSW50ZXJ2YWwiLCJpbnRlcnZhbElkIiwiaXNJbk1lc3NhZ2VQYWdlIiwiJHVzZXJMaXN0IiwicmVhZHkiLCJtIiwiJHBpY2tlciIsInN0eWxlIiwic3R5bGVOZXciLCJpc0FwcGVudFByZXZNc2ciLCJpbnNlcnRNc2ciLCJ0b0xvd2VyQ2FzZSIsInNpZGUiLCJnZXRGb3JtYXR0ZWREYXRlVXRpbCIsInRpbWVzdGFtcCIsImFkZFBhZ2luYXRpb24iLCIkd3JhcHBlciIsInBhZ2luYXRpb24iLCJjb252ZXJzYXRpb25JZCIsInByZXZfY3Vyc29yIiwiaW5zZXJ0QmVmb3JlIiwidXNlckRhdGEiLCJzdGFydEJ1dHRvblNwaW5uZXIiLCJnZXRNZXRhZGF0YURldGFpbENvbnZlcnNhdGlvbiIsInN0b3BCdXR0b25TcGlubmVyIiwibWV0YSIsImZpbGxVc2VyTGlzdCIsImNvbnZlcnNhdGlvbkRldGFpbCIsImFkZENvbnZlcnNhdGlvbnMiLCJjb252ZXJzYXRpb25zIiwiaWQiLCJ0byIsInBhcnNlSW50IiwiaWR4IiwiZ2V0QW5kRmlsbFVzZXJMaXN0IiwiaXNBY3RpdmVGaXJzdCIsInByZXZBY3RpdmVEaWFsb2dJZCIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJzZXR0aW5ncyIsImludm9rZV9pbl9taWxsaXMiLCJnZXRBbmRGaWxsQ29udmVyc2F0aW9uIiwiaXNTY3JvbGxEb3duIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsImFkZEhhbmRsZXJzIiwiJHRleHRBcmVhIiwiYWRkIiwicG9zdE1ldGFkYXRhRGV0YWlsQ29udmVyc2F0aW9uIiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwiZXZlbnROYW1lIiwicmVzdWx0RnJvbVNlcnZlciIsIiRkaWFsb2ciLCJzZWxlY3RvckNscyIsInN1Ym1pdEJ0biIsIlJlZ2lzdGVyRm9ybSIsIiRwYXNzd29yZCIsIiRwYXNzd29yZENvbmZpcm0iLCJwYXNzd29yZENvbmZpcm0iLCJyZWdpc3RlciIsInJlZ2lzdGVyQm94IiwiJGJ0biIsImlzIiwiaXNSZWdCdG5DbGljayIsIlVzZXJDb252ZXJzYXRpb24iLCJkZXRhaWxzIiwidFN0YW1wIiwic2hvd0Z1bGxUaW1lIiwiZGF0ZSIsIkRhdGUiLCJtb250aCIsImdldE1vbnRoIiwiZGF5IiwiZ2V0RGF0ZSIsImhvdXIiLCJnZXRIb3VycyIsIm1pbiIsImdldE1pbnV0ZXMiLCJzZWMiLCJnZXRTZWNvbmRzIiwiZ2V0RnVsbFllYXIiLCJjbGFzc2VzIiwiaW5saW5lIiwib3ZlcmxheSIsImZpeGVkIiwiYnV0dG9uIiwiU3Bpbm5lciIsIl9jZmciLCJuZXdDbHMiLCJwcmVwZW5kIiwiY2ZnIiwiZXh0ZW5kIiwicHJld0NscyIsInNwaW5uZXJJbnN0YW5jZSIsIkxvZ2luUGFnZSIsImhyZWYiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hFTyxJQUFNQSx3QkFBUTtBQUNqQkMsU0FBSztBQUNEQyxjQUFNLDJCQURMO0FBRURDLHNCQUFjLHFCQUZiO0FBR0RDLGVBQU8sMEJBSE47QUFJREMsc0JBQWMsdUNBSmI7QUFLREMsOEJBQXNCLHFCQUxyQixFQUs0QztBQUM3Q0Msc0NBQThCLHlCQU43QjtBQU9EQyxxQ0FBNkIsZ0NBUDVCO0FBUURDLHFDQUE2QixnQ0FSNUI7QUFTREMscUNBQTZCLHVCQVQ1QjtBQVVEQyxxQ0FBNkI7QUFWNUIsS0FEWTtBQWFqQkMsVUFBTTtBQUNGQyxlQUFPLEVBREw7QUFFRkMsa0JBQVUsRUFGUjtBQUdGQyxlQUFPO0FBSEwsS0FiVztBQWtCakJDLG1CQUFlO0FBQ1hELGVBQU8sYUFESTtBQUVYRSx3QkFBZ0I7QUFGTCxLQWxCRTtBQXNCakJDLGlC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ZmlsZSI6ImluZGV4LWFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDEzZjkxZWUxZDJiNDNmN2NjYzhhIiwiZXhwb3J0IGNvbnN0IENPTlNUID0ge1xyXG4gICAgdXJsOiB7XHJcbiAgICAgICAgYmFzZTogJ2h0dHA6Ly9hcGkubHV4Z3JhbS5ydS92MS8nLFxyXG4gICAgICAgIHJlZ2lzdHJhdGlvbjogJ3JlZ2lzdHJhdGlvbi9iYXNpYy8nLFxyXG4gICAgICAgIGxvZ2luOiAncmVnaXN0cmF0aW9uL2Jhc2ljL2xvZ2luJyxcclxuICAgICAgICBjb25maXJtYXRpb246ICdyZWdpc3RyYXRpb24vYmFzaWMvY29uZmlybWF0aW9uP3Rva2VuJyxcclxuICAgICAgICBpbnN0YWdyYW1fYWRkQWNjb3VudDogJ2luc3RhZ3JhbS1hY2NvdW50cy8nLCAvLyB0b0RPOiBjaGVjayBpcyByZWR1bmRhbnRcclxuICAgICAgICBpbnN0YWdyYW1BY2NvdW50X2dldE1ldGFEYXRhOiAnaW5zdGFncmFtLWFjY291bnRzL21ldGEnLFxyXG4gICAgICAgIGluc3RhZ3JhbUFjY291bnRfY2hlY2twb2ludDogJ2luc3RhZ3JhbS1hY2NvdW50cy9jaGVja3BvaW50LycsXHJcbiAgICAgICAgaW5zdGFncmFtQWNjb3VudF9jb25maXJtS2V5OiAnaW5zdGFncmFtLWFjY291bnRzL2NoZWNrcG9pbnQvJyxcclxuICAgICAgICBpbnN0YWdyYW1EaXJlY3RfZ2V0TWV0YURhdGE6ICdpbnN0YWdyYW0tZGlyZWN0L21ldGEnLFxyXG4gICAgICAgIGluc3RhZ3JhbURpcmVjdF9wb3N0TWVzc2FnZTogJ2luc3RhZ3JhbS1kaXJlY3QvJ1xyXG4gICAgfSxcclxuICAgIHVzZXI6IHtcclxuICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgIHRva2VuOiAnJ1xyXG4gICAgfSxcclxuICAgIGNvb2tpZVN0b3JhZ2U6IHtcclxuICAgICAgICB0b2tlbjogJ3VzZXJfbG9nZ2VkJyxcclxuICAgICAgICBlbWFpbENvbmZpcm1lZDogJ2VtYWlsX2NvbmZpcm1lZCdcclxuICAgIH0sXHJcbiAgICB1aVNlbGVjdG9yczoge1xyXG4gICAgICAgIGhlYWRlckxvZ2luQm94OiAnbmF2IC5sb2dpbi1ib3gnLFxyXG4gICAgICAgIGhlYWRlck5hdkxvZ2luQnRuOiAnbmF2IHVsIGxpIC5qc19sb2dpbicsXHJcbiAgICAgICAgaGVhZGVyUmVnQm94OiAnbmF2IC5yZWdpc3Rlci1ib3gnLFxyXG4gICAgICAgIGhlYWRlclJlZ0J0bjogJ25hdiB1bCBsaSAuanNfcmVnaXN0ZXInLFxyXG4gICAgICAgIGluc3RhZ3JhbToge1xyXG4gICAgICAgICAgICBhZGRBY2NvdW50QnRuU2VsZWN0b3I6ICcjanNfc2hvdy1sb2dpbi1ib3gnLFxyXG4gICAgICAgICAgICBhZGRBY2NvdW50QnRuSWQ6ICdqc19zaG93LWxvZ2luLWJveCdcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgICAgVVNFUl9MT0dHRUQ6ICd1c2VyX2xvZ2dlZCcsXHJcbiAgICAgICAgVVNFUl9MT0dPVVQ6ICd1c2VyX2xvZ291dCcsXHJcbiAgICAgICAgVVNFUl9FTUFJTF9DT05GSVJNRUQ6ICd1c2VyX2VtYWlsX2NvbmZpcm1lZCcsXHJcbiAgICAgICAgU1RPUF9GSVhFRF9TUElOTkVSOiAnc3RvcF9maXhlZF9zcGlubmVyJyxcclxuICAgICAgICBtZXNzYWdlczoge1xyXG4gICAgICAgICAgICBSRUNJRVZFX05FV19NRVNTQUdFOiAncmVjZWl2ZV9uZXdfbWVzc2FnZSdcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZ2V0UGF0aChuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsLmJhc2UgKyB0aGlzLnVybFtuYW1lXTtcclxuICAgIH1cclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMuanMiLCIvLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQge0NPTlNUfSBmcm9tICcuL2NvbnN0cyc7XHJcbmltcG9ydCBOZXR3b3JrIGZyb20gJy4vbmV0d29yayc7XHJcbmltcG9ydCBDb29raWVTdG9yYWdlIGZyb20gJy4vY29va2llJztcclxuXHJcbmNsYXNzIFVzZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubmV0d29yayA9IG5ldyBOZXR3b3JrKCk7XHJcbiAgICAgICAgdGhpcy5jb29raWVTdG9yYWdlID0gQ29va2llU3RvcmFnZTtcclxuICAgICAgICB0aGlzLnNldHRpbmdQb3N0ID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgaXNMb2dnZWRJbigpIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLmdldFRva2VuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNFbWFpbENvbmZpcm1lZCgpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuY29va2llU3RvcmFnZS5nZXQoQ09OU1QuY29va2llU3RvcmFnZS5lbWFpbENvbmZpcm1lZCkgPT09ICdjb25maXJtZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUb2tlbigpIHtcclxuICAgICAgICBjb25zdCBjb29raWVUb2tlbiA9IHRoaXMuY29va2llU3RvcmFnZS5nZXQoQ09OU1QuY29va2llU3RvcmFnZS50b2tlbik7XHJcbiAgICAgICAgcmV0dXJuIGNvb2tpZVRva2VuO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luKGZvcm1EYXRhLCBjYkVycm9yKSB7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZyA9IHsuLi50aGlzLnNldHRpbmdQb3N0LCBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSl9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QoQ09OU1QuZ2V0UGF0aCgnbG9naW4nKSwgc2V0dGluZywgY2JFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkSW5zdGFncmFtQWNjb3VudChmb3JtRGF0YSwgY2JFcnJvcikge1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSB7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdC5oZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgdG9rZW46IHRoaXMuZ2V0VG9rZW4oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KENPTlNULmdldFBhdGgoJ2luc3RhZ3JhbV9hZGRBY2NvdW50JyksIHNldHRpbmcsIGNiRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEluc3RhZ3JhbUFjY291bnQoKSB7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZyA9IHtcclxuICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdCxcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdC5oZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgdG9rZW46IHRoaXMuZ2V0VG9rZW4oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KENPTlNULmdldFBhdGgoJ2luc3RhZ3JhbV9hZGRBY2NvdW50JyksIHNldHRpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmZpcm0odG9rZW4pIHtcclxuICAgICAgICAvLyBjb25zdCBjb25maXJtVXJsID0gQ09OU1QuZ2V0UGF0aCgnY29uZmlybWF0aW9uJyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChgJHtDT05TVC5nZXRQYXRoKCdjb25maXJtYXRpb24nKSArIHRva2VufWApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyKGZvcm1EYXRhKSB7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZyA9IHtcclxuICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdCxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KENPTlNULmdldFBhdGgoJ3JlZ2lzdHJhdGlvbicpLCBzZXR0aW5nKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRNZXRhZGF0YSh0b2tlbiwgY2JFcnJvcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QoYCR7Q09OU1QuZ2V0UGF0aCgnaW5zdGFncmFtQWNjb3VudF9nZXRNZXRhRGF0YScpfWAsIHtoZWFkZXJzOiB7dG9rZW59fSwgY2JFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2VjdXJpdHlLZXkodXNlcm5hbWUsIGNoZWNrcG9pbnRUeXBlKSB7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZyA9IHtcclxuICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdCxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyd0eXBlJzogY2hlY2twb2ludFR5cGV9KSwgLy8gdG9kbzogdG1wIHNldCwgaXQgc2hvdWxkIGJlICd0eXBlJ1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnNldHRpbmdQb3N0LmhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICAndG9rZW4nOiB0aGlzLmdldFRva2VuKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChgJHtDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1BY2NvdW50X2NoZWNrcG9pbnQnKX0ke3VzZXJuYW1lfWAsIHNldHRpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmZpcm1TZWN1cml0eUtleShrZXksIHVzZXJuYW1lKSB7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeydzZWN1cml0eV9jb2RlJzoga2V5fSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QuaGVhZGVycyxcclxuICAgICAgICAgICAgICAgICd0b2tlbic6ICczZTMyMWU2MDAyOTcxMWU5OTI2NGEwNDgxYzhlMTdkNCcgLy8gdG9kbzogdGhpcy5nZXRUb2tlbigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QoYCR7Q09OU1QuZ2V0UGF0aCgnaW5zdGFncmFtQWNjb3VudF9jb25maXJtS2V5Jyl9JHt1c2VybmFtZX1gLCBzZXR0aW5nKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmxldCB1c2VySW5zdGFuY2UgPSBudWxsO1xyXG5cclxuaWYgKCF1c2VySW5zdGFuY2UpIHtcclxuICAgIHVzZXJJbnN0YW5jZSA9IG5ldyBVc2VyKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJJbnN0YW5jZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy91c2VyLmpzIiwiXHJcbmNvbnN0IENvb2tpZVNydiA9IHtcclxuICAgIGdldDogbmFtZSA9PiB7XHJcbiAgICAgICAgY29uc3QgYyA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChgKD86KD86XnwuKjsgKikke25hbWV9ICo9ICooW147XSopLiokKXxeLiokYClbMV07XHJcbiAgICAgICAgaWYgKGMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChjKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2V0OiAobmFtZSwgdmFsdWUsIG9wdHMgPSB7cGF0aDogJy8nLCBkYXlzOiAzNjV9KSA9PiB7XHJcbiAgICAgICAgaWYgKG9wdHMuZGF5cykge1xyXG4gICAgICAgICAgICBvcHRzWydtYXgtYWdlJ10gPSBvcHRzLmRheXMgKiA2MCAqIDYwICogMjQ7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBvcHRzLmRheXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxyXG4gICAgICAgIG9wdHMgPSBPYmplY3QuZW50cmllcyhvcHRzKS5yZWR1Y2UoKHN0ciwgW2ssIHZdKSA9PiBgJHtzdHJ9OyAke2t9PSR7dn1gLCAnJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gYCR7bmFtZX09JHtlbmNvZGVVUklDb21wb25lbnQodmFsdWUpICsgb3B0c31gO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZTogKG5hbWUsIG9wdHMpID0+IENvb2tpZVNydi5zZXQobmFtZSwgJycsIHsnbWF4LWFnZSc6IC0xLCBwYXRoOiAnLycsIGRheXM6IDAsIC4uLm9wdHN9KVxyXG4gICAgLy8gcGF0aCAmIGRvbWFpbiBtdXN0IG1hdGNoIGNvb2tpZSBiZWluZyBkZWxldGVkXHJcbn07XHJcblxyXG4vKlxyXG5jbGFzcyBDb29raWVTdG9yYWdlIHtcclxuICAgIHJlYWQoa2V5KSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSAkLmNvb2tpZShrZXkpO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENvb2tpZShuYW1lLCB2YWx1ZSwgZGF5cykge1xyXG4gICAgICAgIGxldCBleHBpcmVzID0gJyc7XHJcbiAgICAgICAgaWYgKGRheXMpIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIChkYXlzICogMjQgKiA2MCAqIDYwICogMTAwMCkpO1xyXG4gICAgICAgICAgICBleHBpcmVzID0gYDsgZXhwaXJlcz0ke2RhdGUudG9VVENTdHJpbmcoKX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBgJHtuYW1lfSA9JHsodmFsdWUgfHwgJycpICsgZXhwaXJlc307IHBhdGg9L2A7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29va2llKG5hbWUpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGA7ICR7ZG9jdW1lbnQuY29va2llfWA7XHJcbiAgICAgICAgY29uc3QgcGFydHMgPSB2YWx1ZS5zcGxpdChgOyAke25hbWV9PWApO1xyXG4gICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPT0gMikge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFydHMucG9wKCkuc3BsaXQoJzsnKS5zaGlmdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4qL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29va2llU3J2O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uL2pzLXNlcnZpY2VzL2Nvb2tpZS5qcyIsIi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbi8vIGltcG9ydCB7Q09OU1R9IGZyb20gJy4vY29uc3RzJztcclxuXHJcbmZ1bmN0aW9uIHZpZXdVdGlscygpIHtcclxuICAgIGZ1bmN0aW9uIHNob3dJbmZvTWVzc2FnZShzZWxlY3RvciwgbWVzc2FnZTEsIG1lc3NhZ2UyKSB7XHJcbiAgICAgICAgJChzZWxlY3RvcikuZW1wdHkoKVxyXG4gICAgICAgICAgICAuYXBwZW5kKGAkeyhtZXNzYWdlMSkgPyBgPHA+c3RhdHVzOiAke21lc3NhZ2UxfTwvcD5gIDogJyd9YClcclxuICAgICAgICAgICAgLmFwcGVuZChgPHA+JHttZXNzYWdlMn0gPC9wPmApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZpbGxMaXN0KCRsaXN0LCBkYXRhQXJyYXkpIHtcclxuICAgICAgICBjb25zdCBpdGVtcyA9IGRhdGFBcnJheTtcclxuICAgICAgICBjb25zdCBjTGlzdCA9ICRsaXN0O1xyXG4gICAgICAgIGNMaXN0LmVtcHR5KCk7XHJcbiAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBsaSA9ICQoJzxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbVwiPjwvbGk+JylcclxuICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhjTGlzdCk7XHJcbiAgICAgICAgICAgICQoJzxhLz4nKS5hZGRDbGFzcygndWktYWxsJylcclxuICAgICAgICAgICAgICAgIC50ZXh0KGl0ZW0udXNlcm5hbWUpXHJcbiAgICAgICAgICAgICAgICAuYXBwZW5kVG8obGkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzRW1haWwoZW1haWwpIHtcclxuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xyXG4gICAgICAgIGNvbnN0IHJlZ2V4ID0gL14oW2EtekEtWjAtOV8uKy1dKStcXEAoKFthLXpBLVowLTktXSkrXFwuKSsoW2EtekEtWjAtOV17Miw0fSkrJC87XHJcbiAgICAgICAgcmV0dXJuIHJlZ2V4LnRlc3QoZW1haWwpO1xyXG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgKi9cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNob3dJbmZvTWVzc2FnZSxcclxuICAgICAgICBmaWxsTGlzdCxcclxuICAgICAgICBpc0VtYWlsXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB2aWV3VXRpbHMoKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy92aWV3LmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTAsMjAxMSwyMDEyLDIwMTMsMjAxNCBNb3JnYW4gUm9kZXJpY2sgaHR0cDovL3JvZGVyaWNrLmRrXG4gKiBMaWNlbnNlOiBNSVQgLSBodHRwOi8vbXJnbnJkcmNrLm1pdC1saWNlbnNlLm9yZ1xuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tcm9kZXJpY2svUHViU3ViSlNcbiAqL1xuXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3Rvcnkpe1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBQdWJTdWIgPSB7fTtcbiAgICByb290LlB1YlN1YiA9IFB1YlN1YjtcblxuICAgIHZhciBkZWZpbmUgPSByb290LmRlZmluZTtcblxuICAgIGZhY3RvcnkoUHViU3ViKTtcblxuICAgIC8vIEFNRCBzdXBwb3J0XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCl7XG4gICAgICAgIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIFB1YlN1YjsgfSk7XG5cbiAgICAgICAgLy8gQ29tbW9uSlMgYW5kIE5vZGUuanMgbW9kdWxlIHN1cHBvcnRcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jyl7XG4gICAgICAgIGlmIChtb2R1bGUgIT09IHVuZGVmaW5lZCAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICAgICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gUHViU3ViOyAvLyBOb2RlLmpzIHNwZWNpZmljIGBtb2R1bGUuZXhwb3J0c2BcbiAgICAgICAgfVxuICAgICAgICBleHBvcnRzLlB1YlN1YiA9IFB1YlN1YjsgLy8gQ29tbW9uSlMgbW9kdWxlIDEuMS4xIHNwZWNcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gUHViU3ViOyAvLyBDb21tb25KU1xuICAgIH1cblxufSgoIHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHdpbmRvdyApIHx8IHRoaXMsIGZ1bmN0aW9uIChQdWJTdWIpe1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBtZXNzYWdlcyA9IHt9LFxuICAgICAgICBsYXN0VWlkID0gLTE7XG5cbiAgICBmdW5jdGlvbiBoYXNLZXlzKG9iail7XG4gICAgICAgIHZhciBrZXk7XG5cbiAgICAgICAgZm9yIChrZXkgaW4gb2JqKXtcbiAgICAgICAgICAgIGlmICggb2JqLmhhc093blByb3BlcnR5KGtleSkgKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgdGhyb3dzIHRoZSBwYXNzZWQgZXhjZXB0aW9uLCBmb3IgdXNlIGFzIGFyZ3VtZW50IGZvciBzZXRUaW1lb3V0XG4gICAgICogQGFsaWFzIHRocm93RXhjZXB0aW9uXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHsgT2JqZWN0IH0gZXggQW4gRXJyb3Igb2JqZWN0XG4gICAgICovXG4gICAgZnVuY3Rpb24gdGhyb3dFeGNlcHRpb24oIGV4ICl7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiByZVRocm93RXhjZXB0aW9uKCl7XG4gICAgICAgICAgICB0aHJvdyBleDtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWxsU3Vic2NyaWJlcldpdGhEZWxheWVkRXhjZXB0aW9ucyggc3Vic2NyaWJlciwgbWVzc2FnZSwgZGF0YSApe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc3Vic2NyaWJlciggbWVzc2FnZSwgZGF0YSApO1xuICAgICAgICB9IGNhdGNoKCBleCApe1xuICAgICAgICAgICAgc2V0VGltZW91dCggdGhyb3dFeGNlcHRpb24oIGV4ICksIDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsbFN1YnNjcmliZXJXaXRoSW1tZWRpYXRlRXhjZXB0aW9ucyggc3Vic2NyaWJlciwgbWVzc2FnZSwgZGF0YSApe1xuICAgICAgICBzdWJzY3JpYmVyKCBtZXNzYWdlLCBkYXRhICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsaXZlck1lc3NhZ2UoIG9yaWdpbmFsTWVzc2FnZSwgbWF0Y2hlZE1lc3NhZ2UsIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKXtcbiAgICAgICAgdmFyIHN1YnNjcmliZXJzID0gbWVzc2FnZXNbbWF0Y2hlZE1lc3NhZ2VdLFxuICAgICAgICAgICAgY2FsbFN1YnNjcmliZXIgPSBpbW1lZGlhdGVFeGNlcHRpb25zID8gY2FsbFN1YnNjcmliZXJXaXRoSW1tZWRpYXRlRXhjZXB0aW9ucyA6IGNhbGxTdWJzY3JpYmVyV2l0aERlbGF5ZWRFeGNlcHRpb25zLFxuICAgICAgICAgICAgcztcblxuICAgICAgICBpZiAoICFtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eSggbWF0Y2hlZE1lc3NhZ2UgKSApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAocyBpbiBzdWJzY3JpYmVycyl7XG4gICAgICAgICAgICBpZiAoIHN1YnNjcmliZXJzLmhhc093blByb3BlcnR5KHMpKXtcbiAgICAgICAgICAgICAgICBjYWxsU3Vic2NyaWJlciggc3Vic2NyaWJlcnNbc10sIG9yaWdpbmFsTWVzc2FnZSwgZGF0YSApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRGVsaXZlcnlGdW5jdGlvbiggbWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApe1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gZGVsaXZlck5hbWVzcGFjZWQoKXtcbiAgICAgICAgICAgIHZhciB0b3BpYyA9IFN0cmluZyggbWVzc2FnZSApLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoICcuJyApO1xuXG4gICAgICAgICAgICAvLyBkZWxpdmVyIHRoZSBtZXNzYWdlIGFzIGl0IGlzIG5vd1xuICAgICAgICAgICAgZGVsaXZlck1lc3NhZ2UobWVzc2FnZSwgbWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyk7XG5cbiAgICAgICAgICAgIC8vIHRyaW0gdGhlIGhpZXJhcmNoeSBhbmQgZGVsaXZlciBtZXNzYWdlIHRvIGVhY2ggbGV2ZWxcbiAgICAgICAgICAgIHdoaWxlKCBwb3NpdGlvbiAhPT0gLTEgKXtcbiAgICAgICAgICAgICAgICB0b3BpYyA9IHRvcGljLnN1YnN0ciggMCwgcG9zaXRpb24gKTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHRvcGljLmxhc3RJbmRleE9mKCcuJyk7XG4gICAgICAgICAgICAgICAgZGVsaXZlck1lc3NhZ2UoIG1lc3NhZ2UsIHRvcGljLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWVzc2FnZUhhc1N1YnNjcmliZXJzKCBtZXNzYWdlICl7XG4gICAgICAgIHZhciB0b3BpYyA9IFN0cmluZyggbWVzc2FnZSApLFxuICAgICAgICAgICAgZm91bmQgPSBCb29sZWFuKG1lc3NhZ2VzLmhhc093blByb3BlcnR5KCB0b3BpYyApICYmIGhhc0tleXMobWVzc2FnZXNbdG9waWNdKSksXG4gICAgICAgICAgICBwb3NpdGlvbiA9IHRvcGljLmxhc3RJbmRleE9mKCAnLicgKTtcblxuICAgICAgICB3aGlsZSAoICFmb3VuZCAmJiBwb3NpdGlvbiAhPT0gLTEgKXtcbiAgICAgICAgICAgIHRvcGljID0gdG9waWMuc3Vic3RyKCAwLCBwb3NpdGlvbiApO1xuICAgICAgICAgICAgcG9zaXRpb24gPSB0b3BpYy5sYXN0SW5kZXhPZiggJy4nICk7XG4gICAgICAgICAgICBmb3VuZCA9IEJvb2xlYW4obWVzc2FnZXMuaGFzT3duUHJvcGVydHkoIHRvcGljICkgJiYgaGFzS2V5cyhtZXNzYWdlc1t0b3BpY10pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb3VuZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwdWJsaXNoKCBtZXNzYWdlLCBkYXRhLCBzeW5jLCBpbW1lZGlhdGVFeGNlcHRpb25zICl7XG4gICAgICAgIG1lc3NhZ2UgPSAodHlwZW9mIG1lc3NhZ2UgPT09ICdzeW1ib2wnKSA/IG1lc3NhZ2UudG9TdHJpbmcoKSA6IG1lc3NhZ2U7XG5cbiAgICAgICAgdmFyIGRlbGl2ZXIgPSBjcmVhdGVEZWxpdmVyeUZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICksXG4gICAgICAgICAgICBoYXNTdWJzY3JpYmVycyA9IG1lc3NhZ2VIYXNTdWJzY3JpYmVycyggbWVzc2FnZSApO1xuXG4gICAgICAgIGlmICggIWhhc1N1YnNjcmliZXJzICl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHN5bmMgPT09IHRydWUgKXtcbiAgICAgICAgICAgIGRlbGl2ZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoIGRlbGl2ZXIsIDAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQdWJsaXNoZXMgdGhlIG1lc3NhZ2UsIHBhc3NpbmcgdGhlIGRhdGEgdG8gaXQncyBzdWJzY3JpYmVyc1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBhbGlhcyBwdWJsaXNoXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBwdWJsaXNoXG4gICAgICogQHBhcmFtIHt9IGRhdGEgVGhlIGRhdGEgdG8gcGFzcyB0byBzdWJzY3JpYmVyc1xuICAgICAqIEByZXR1cm4geyBCb29sZWFuIH1cbiAgICAgKi9cbiAgICBQdWJTdWIucHVibGlzaCA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHJldHVybiBwdWJsaXNoKCBtZXNzYWdlLCBkYXRhLCBmYWxzZSwgUHViU3ViLmltbWVkaWF0ZUV4Y2VwdGlvbnMgKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUHVibGlzaGVzIHRoZSB0aGUgbWVzc2FnZSBzeW5jaHJvbm91c2x5LCBwYXNzaW5nIHRoZSBkYXRhIHRvIGl0J3Mgc3Vic2NyaWJlcnNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgcHVibGlzaFN5bmNcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHB1Ymxpc2hcbiAgICAgKiBAcGFyYW0ge30gZGF0YSBUaGUgZGF0YSB0byBwYXNzIHRvIHN1YnNjcmliZXJzXG4gICAgICogQHJldHVybiB7IEJvb2xlYW4gfVxuICAgICAqL1xuICAgIFB1YlN1Yi5wdWJsaXNoU3luYyA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHJldHVybiBwdWJsaXNoKCBtZXNzYWdlLCBkYXRhLCB0cnVlLCBQdWJTdWIuaW1tZWRpYXRlRXhjZXB0aW9ucyApO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmVzIHRoZSBwYXNzZWQgZnVuY3Rpb24gdG8gdGhlIHBhc3NlZCBtZXNzYWdlLiBFdmVyeSByZXR1cm5lZCB0b2tlbiBpcyB1bmlxdWUgYW5kIHNob3VsZCBiZSBzdG9yZWQgaWYgeW91IG5lZWQgdG8gdW5zdWJzY3JpYmVcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgc3Vic2NyaWJlXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBzdWJzY3JpYmUgdG9cbiAgICAgKiBAcGFyYW0geyBGdW5jdGlvbiB9IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBhIG5ldyBtZXNzYWdlIGlzIHB1Ymxpc2hlZFxuICAgICAqIEByZXR1cm4geyBTdHJpbmcgfVxuICAgICAqL1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUgPSBmdW5jdGlvbiggbWVzc2FnZSwgZnVuYyApe1xuICAgICAgICBpZiAoIHR5cGVvZiBmdW5jICE9PSAnZnVuY3Rpb24nKXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lc3NhZ2UgPSAodHlwZW9mIG1lc3NhZ2UgPT09ICdzeW1ib2wnKSA/IG1lc3NhZ2UudG9TdHJpbmcoKSA6IG1lc3NhZ2U7XG5cbiAgICAgICAgLy8gbWVzc2FnZSBpcyBub3QgcmVnaXN0ZXJlZCB5ZXRcbiAgICAgICAgaWYgKCAhbWVzc2FnZXMuaGFzT3duUHJvcGVydHkoIG1lc3NhZ2UgKSApe1xuICAgICAgICAgICAgbWVzc2FnZXNbbWVzc2FnZV0gPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZvcmNpbmcgdG9rZW4gYXMgU3RyaW5nLCB0byBhbGxvdyBmb3IgZnV0dXJlIGV4cGFuc2lvbnMgd2l0aG91dCBicmVha2luZyB1c2FnZVxuICAgICAgICAvLyBhbmQgYWxsb3cgZm9yIGVhc3kgdXNlIGFzIGtleSBuYW1lcyBmb3IgdGhlICdtZXNzYWdlcycgb2JqZWN0XG4gICAgICAgIHZhciB0b2tlbiA9ICd1aWRfJyArIFN0cmluZygrK2xhc3RVaWQpO1xuICAgICAgICBtZXNzYWdlc1ttZXNzYWdlXVt0b2tlbl0gPSBmdW5jO1xuICAgICAgICBcbiAgICAgICAgLy8gcmV0dXJuIHRva2VuIGZvciB1bnN1YnNjcmliaW5nXG4gICAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU3Vic2NyaWJlcyB0aGUgcGFzc2VkIGZ1bmN0aW9uIHRvIHRoZSBwYXNzZWQgbWVzc2FnZSBvbmNlXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQGFsaWFzIHN1YnNjcmliZU9uY2VcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHN1YnNjcmliZSB0b1xuICAgICAqIEBwYXJhbSB7IEZ1bmN0aW9uIH0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIGEgbmV3IG1lc3NhZ2UgaXMgcHVibGlzaGVkXG4gICAgICogQHJldHVybiB7IFB1YlN1YiB9XG4gICAgICovXG4gICAgUHViU3ViLnN1YnNjcmliZU9uY2UgPSBmdW5jdGlvbiggbWVzc2FnZSwgZnVuYyApe1xuICAgICAgICB2YXIgdG9rZW4gPSBQdWJTdWIuc3Vic2NyaWJlKCBtZXNzYWdlLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgLy8gYmVmb3JlIGZ1bmMgYXBwbHksIHVuc3Vic2NyaWJlIG1lc3NhZ2VcbiAgICAgICAgICAgIFB1YlN1Yi51bnN1YnNjcmliZSggdG9rZW4gKTtcbiAgICAgICAgICAgIGZ1bmMuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFB1YlN1YjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGFsbCBzdWJzY3JpcHRpb25zXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBhbGlhcyBjbGVhckFsbFN1YnNjcmlwdGlvbnNcbiAgICAgKi9cbiAgICBQdWJTdWIuY2xlYXJBbGxTdWJzY3JpcHRpb25zID0gZnVuY3Rpb24gY2xlYXJBbGxTdWJzY3JpcHRpb25zKCl7XG4gICAgICAgIG1lc3NhZ2VzID0ge307XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENsZWFyIHN1YnNjcmlwdGlvbnMgYnkgdGhlIHRvcGljXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBhbGlhcyBjbGVhckFsbFN1YnNjcmlwdGlvbnNcbiAgICAgKi9cbiAgICBQdWJTdWIuY2xlYXJTdWJzY3JpcHRpb25zID0gZnVuY3Rpb24gY2xlYXJTdWJzY3JpcHRpb25zKHRvcGljKXtcbiAgICAgICAgdmFyIG07XG4gICAgICAgIGZvciAobSBpbiBtZXNzYWdlcyl7XG4gICAgICAgICAgICBpZiAobWVzc2FnZXMuaGFzT3duUHJvcGVydHkobSkgJiYgbS5pbmRleE9mKHRvcGljKSA9PT0gMCl7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG1lc3NhZ2VzW21dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgc3Vic2NyaXB0aW9uc1xuICAgICAqXG4gICAgICogLSBXaGVuIHBhc3NlZCBhIHRva2VuLCByZW1vdmVzIGEgc3BlY2lmaWMgc3Vic2NyaXB0aW9uLlxuICAgICAqXG5cdCAqIC0gV2hlbiBwYXNzZWQgYSBmdW5jdGlvbiwgcmVtb3ZlcyBhbGwgc3Vic2NyaXB0aW9ucyBmb3IgdGhhdCBmdW5jdGlvblxuICAgICAqXG5cdCAqIC0gV2hlbiBwYXNzZWQgYSB0b3BpYywgcmVtb3ZlcyBhbGwgc3Vic2NyaXB0aW9ucyBmb3IgdGhhdCB0b3BpYyAoaGllcmFyY2h5KVxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWxpYXMgc3Vic2NyaWJlT25jZVxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB8IEZ1bmN0aW9uIH0gdmFsdWUgQSB0b2tlbiwgZnVuY3Rpb24gb3IgdG9waWMgdG8gdW5zdWJzY3JpYmUgZnJvbVxuICAgICAqIEBleGFtcGxlIC8vIFVuc3Vic2NyaWJpbmcgd2l0aCBhIHRva2VuXG4gICAgICogdmFyIHRva2VuID0gUHViU3ViLnN1YnNjcmliZSgnbXl0b3BpYycsIG15RnVuYyk7XG4gICAgICogUHViU3ViLnVuc3Vic2NyaWJlKHRva2VuKTtcbiAgICAgKiBAZXhhbXBsZSAvLyBVbnN1YnNjcmliaW5nIHdpdGggYSBmdW5jdGlvblxuICAgICAqIFB1YlN1Yi51bnN1YnNjcmliZShteUZ1bmMpO1xuICAgICAqIEBleGFtcGxlIC8vIFVuc3Vic2NyaWJpbmcgZnJvbSBhIHRvcGljXG4gICAgICogUHViU3ViLnVuc3Vic2NyaWJlKCdteXRvcGljJyk7XG4gICAgICovXG4gICAgUHViU3ViLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICB2YXIgZGVzY2VuZGFudFRvcGljRXhpc3RzID0gZnVuY3Rpb24odG9waWMpIHtcbiAgICAgICAgICAgICAgICB2YXIgbTtcbiAgICAgICAgICAgICAgICBmb3IgKCBtIGluIG1lc3NhZ2VzICl7XG4gICAgICAgICAgICAgICAgICAgIGlmICggbWVzc2FnZXMuaGFzT3duUHJvcGVydHkobSkgJiYgbS5pbmRleE9mKHRvcGljKSA9PT0gMCApe1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYSBkZXNjZW5kYW50IG9mIHRoZSB0b3BpYyBleGlzdHM6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc1RvcGljICAgID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAoIG1lc3NhZ2VzLmhhc093blByb3BlcnR5KHZhbHVlKSB8fCBkZXNjZW5kYW50VG9waWNFeGlzdHModmFsdWUpICksXG4gICAgICAgICAgICBpc1Rva2VuICAgID0gIWlzVG9waWMgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyxcbiAgICAgICAgICAgIGlzRnVuY3Rpb24gPSB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicsXG4gICAgICAgICAgICByZXN1bHQgPSBmYWxzZSxcbiAgICAgICAgICAgIG0sIG1lc3NhZ2UsIHQ7XG5cbiAgICAgICAgaWYgKGlzVG9waWMpe1xuICAgICAgICAgICAgUHViU3ViLmNsZWFyU3Vic2NyaXB0aW9ucyh2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKCBtIGluIG1lc3NhZ2VzICl7XG4gICAgICAgICAgICBpZiAoIG1lc3NhZ2VzLmhhc093blByb3BlcnR5KCBtICkgKXtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZXNbbV07XG5cbiAgICAgICAgICAgICAgICBpZiAoIGlzVG9rZW4gJiYgbWVzc2FnZVt2YWx1ZV0gKXtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG1lc3NhZ2VbdmFsdWVdO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdG9rZW5zIGFyZSB1bmlxdWUsIHNvIHdlIGNhbiBqdXN0IHN0b3AgaGVyZVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNGdW5jdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKCB0IGluIG1lc3NhZ2UgKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmhhc093blByb3BlcnR5KHQpICYmIG1lc3NhZ2VbdF0gPT09IHZhbHVlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgbWVzc2FnZVt0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xufSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3B1YnN1Yi1qcy9zcmMvcHVic3ViLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCB2aWV3VXRpbHMgZnJvbSAnLi92aWV3JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ldHdvcmsge1xyXG5cclxuICAgIGNiRXJyb3JEZWZhdWx0KHJlc3VsdCkge1xyXG4gICAgICAgIGNvbnN0ICRlbCA9ICgkKCcjZGVzY3JpcHRpb24nKS5sZW5ndGgpID8gJCgnI2Rlc2NyaXB0aW9uJykgOiAkKCcuZXJyb3ItbXNnJyk7XHJcbiAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSgkZWwsXHJcbiAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMuc3RhdGUsXHJcbiAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMubWVzc2FnZSB8fCAnTG9naW4gZXJyb3InKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja1N0YXR1cyhyZXNwb25zZSkge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgJiYgcmVzcG9uc2Uuc3RhdHVzID49IDIwMCAmJiByZXNwb25zZS5zdGF0dXMgPCAzMDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG4gICAgICAgICAgICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2VuZFJlcXVlc3QoVVJMLCBPUFRTLCBjYkVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKFVSTCwgT1BUUylcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gUHJvbWlzZS5hbGwoW3Jlc3BvbnNlLCByZXNwb25zZS5qc29uKCldKSlcclxuICAgICAgICAgICAgLnRoZW4oKFtyZXNwb25zZSwganNvbl0pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNiRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYkVycm9yRGVmYXVsdChqc29uKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYkVycm9yKGpzb24pOyAvLyB1cGRhdGUgdmlld1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrU3RhdHVzKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoanNvbi5zdGF0dXMubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ganNvbjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tb24vanMtc2VydmljZXMvbmV0d29yay5qcyIsImltcG9ydCAnLi9iYXNlLnNjc3MnO1xyXG4vLyBpbXBvcnQgJ2Jvb3RzdHJhcCc7XHJcbmltcG9ydCB7Q09OU1R9IGZyb20gJy4vY29tbW9uL2pzLXNlcnZpY2VzL2NvbnN0cyc7XHJcbmltcG9ydCBSZWdpc3RlckZvcm0gZnJvbSAnLi9ibG9ja3MvcmVnaXN0ZXItZm9ybS9yZWdpc3Rlci1mb3JtJztcclxuaW1wb3J0IHtMb2dpbkZvcm19IGZyb20gJy4vYmxvY2tzL2xvZ2luLWZvcm0vbG9naW4tZm9ybSc7XHJcbmltcG9ydCB7TG9naW5QYWdlfSBmcm9tICcuL3BhZ2VzL19hdXRoL2xvZ2luLXBhZ2UnO1xyXG5pbXBvcnQge2NvbmZpcm1hdGlvbldpdGhSZWRpcmVjdH0gZnJvbSAnLi9ibG9ja3MvY29uZmlybS1yZWcvY29uZmlybS1yZWcnO1xyXG5pbXBvcnQgKiBhcyBoZWFkZXIgZnJvbSAnLi9ibG9ja3MvaGVhZGVyL2hlYWRlcic7XHJcbmltcG9ydCAqIGFzIGJ1cmdlck1lbnUgZnJvbSAnLi9ibG9ja3MvaGVhZGVyL2J1cmdlci1tZW51L2J1cmdlci1tZW51JztcclxuaW1wb3J0ICogYXMgaW5zdGFncmFtQWNjb3VudHMgZnJvbSAnLi9ibG9ja3MvaW5zdGFncmFtLWFjY291bnRzLWxpc3QvaW5zdGFncmFtLWFjY291bnRzLWxpc3QnO1xyXG5pbXBvcnQgKiBhcyBtZXNzYWdlcyBmcm9tICcuL2Jsb2Nrcy9tZXNzYWdlcy9tZXNzYWdlcyc7XHJcblxyXG5jb25zdCBzZWxlY3RvckNzc0xvZ2luRm9ybSA9IHtcclxuICAgIF9sb2dpbkJveDogQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyTG9naW5Cb3gsXHJcbiAgICBfZm9ybUlkOiAnI2pzX2xvZ2luLWZvcm0nLFxyXG4gICAgX2J1dHRvblN1Ym1pdElkOiAnI2pzX2xvZ2luX2J0bicsXHJcbiAgICBfc2hvd0xvZ2luQm94QnRuSWQ6IENPTlNULnVpU2VsZWN0b3JzLmhlYWRlck5hdkxvZ2luQnRuXHJcbn07XHJcblxyXG5jb25zdCBzZWxlY3RvckNzc0xvZ2luRm9ybUluc3RhZ3JhbSA9IHtcclxuICAgIF9sb2dpbkJveDogJ21haW4gLmxvZ2luLWJveCcsXHJcbiAgICBfZm9ybUlkOiAnI2pzX2luc3RhZ3JhbS1hZGQtYWNjb3VudCcsXHJcbiAgICBfYnV0dG9uU3VibWl0SWQ6ICcjanNfaW5zdGFncmFtLWFkZC1hY2NvdW50LS1idG4nLFxyXG4gICAgX3Nob3dMb2dpbkJveEJ0bklkOiAnI2pzX3Nob3ctbG9naW4tYm94JyxcclxuICAgIGlzTG9naW5JbnN0YWdyYW06IHRydWVcclxufTtcclxuXHJcbmNvbnN0IGluaXQgPSAoKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnaW5pdCBqcyBoZXJlJywgQ09OU1QudXNlcik7XHJcbiAgICAobmV3IFJlZ2lzdGVyRm9ybSgpKS5pbml0KCk7XHJcbiAgICBMb2dpbkZvcm0oc2VsZWN0b3JDc3NMb2dpbkZvcm0pLmluaXQoKTtcclxuICAgIExvZ2luRm9ybShzZWxlY3RvckNzc0xvZ2luRm9ybUluc3RhZ3JhbSkuaW5pdCgpOyAvLyBpbml0IGluc3RhZ3JhbSBsb2dpbiBmb3JtKiEvXHJcbiAgICBMb2dpblBhZ2Uoe1xyXG4gICAgICAgIF9sb2dpbkJveDogJy5hdXRoLmxvZ2luIC5jYXJkLXNpZ25pbicsXHJcbiAgICAgICAgX2Zvcm1JZDogJy5mb3JtLXNpZ25pbicsXHJcbiAgICAgICAgX2J1dHRvblN1Ym1pdElkOiAnLmZvcm0tc2lnbmluIFt0eXBlPVwic3VibWl0XCJdJ1xyXG4gICAgfSkuaW5pdCgpO1xyXG5cclxuICAgIGNvbmZpcm1hdGlvbldpdGhSZWRpcmVjdCgpLmluaXQoKTtcclxuICAgIGhlYWRlci5pbml0SGVhZGVyKCk7XHJcbiAgICBidXJnZXJNZW51LmluaXQoKTtcclxuICAgIGluc3RhZ3JhbUFjY291bnRzLmluaXQoKTtcclxuICAgIG1lc3NhZ2VzLmluaXQoKTtcclxufTtcclxuXHJcbigoKSA9PiBpbml0KCkpKCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ib290c3RyYXAuanMiLCIvKiBlc2xpbnQtZGlzYWJsZSBzb3J0LXZhcnMgKi9cclxuLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3VzZXInO1xyXG5pbXBvcnQge0NPTlNUfSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29uc3RzJztcclxuaW1wb3J0IGNvb2tpZVN0b3JhZ2UgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2Nvb2tpZSc7XHJcblxyXG5jb25zdCBwYXJzZVF1ZXJ5U3RyaW5nID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgY29uc3Qgc3RyID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcclxuICAgIGNvbnN0IG9ialVSTCA9IHt9O1xyXG5cclxuICAgIHN0ci5yZXBsYWNlKFxyXG4gICAgICBuZXcgUmVnRXhwKCcoW14/PSZdKykoPShbXiZdKikpPycsICdnJyksXHJcbiAgICAgICAgZnVuY3Rpb24oJDAsICQxLCAkMikge1xyXG4gICAgICAgICAgICBvYmpVUkxbJDFdID0gJDI7XHJcbiAgICAgICAgfVxyXG4gICk7XHJcbiAgICByZXR1cm4gb2JqVVJMO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpcm1hdGlvbldpdGhSZWRpcmVjdCgpIHtcclxuICAgIGNvbnN0IHVzZXIgPSBVc2VyO1xyXG4gICAgY29uc3QgcGFyYW1zID0gcGFyc2VRdWVyeVN0cmluZygpO1xyXG4gICAgLy8gRXhhbXBsZSBob3cgdG8gdXNlIGl0OlxyXG5cclxuICAgIGNvbnN0IHNlbmRDb25maXJtID0gZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICAgICAgdXNlci5jb25maXJtKHRva2VuKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgJiYgcmVzdWx0LnN0YXR1cy5zdGF0ZSA9PT0gJ29rJykge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHNhdmUgdGhlIGl0ZW1cclxuICAgICAgICAgICAgICAgIGNvb2tpZVN0b3JhZ2Uuc2V0KENPTlNULmNvb2tpZVN0b3JhZ2UuZW1haWxDb25maXJtZWQsICdjb25maXJtZWQnKTtcclxuICAgICAgICAgICAgICAgIGNvb2tpZVN0b3JhZ2Uuc2V0KENPTlNULmNvb2tpZVN0b3JhZ2UudG9rZW4sIHJlc3VsdC5kYXRhLnRva2VuKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24gPSBjb25maXJtLXJlZ2lzdHJhdGlvbi5odG1sP3Rva2VuPSdmcm9tIHNlcnZlcic7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gcmV0cmlldmUgdGhlIG9iamVjdCBpbiBhIHN0cmluZyBmb3JtXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXN0b21lcnNEYXRhU3RyaW5nID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnY3VzdG9tZXJzRGF0YScpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VzdG9tZXJzRGF0YVN0cmluZyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVxdWVzdCBzdWNjZWVkZWQgd2l0aCBKU09OIHJlc3BvbnNlJywgcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICQoJy5jb25maXJtLXJlZ2lzdHJhdGlvbicpLmFwcGVuZChgPHA+Y29uZmlybWF0aW9uIHN0YXR1czogJHtyZXN1bHQuc3RhdHVzLnN0YXRlfTwvcD5gKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICcuL3Byb2ZpbGUuaHRtbCc7XHJcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZWRpcmVjdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkb3Qtbm90YXRpb25cclxuICAgICAgICBjb25zdCB0b2tlbiA9IHBhcmFtc1sndG9rZW4nXTtcclxuXHJcbiAgICAgICAgaWYgKCFsb2NhdGlvbi5wYXRobmFtZS5pbmRleE9mKCdjb25maXJtLXJlZ2lzdHJhdGlvbicpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZW5kIHJlcSB0byAnLCB0b2tlbik7XHJcbiAgICAgICAgICAgIHNlbmRDb25maXJtKHRva2VuKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAgICAgcmVkaXJlY3QoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGluaXRcclxuICAgIH07XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9jb25maXJtLXJlZy9jb25maXJtLXJlZy5qcyIsIi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG4vLyBjb25zdCBoYW1idXJnZXJCdXR0b25DbHMgPSAnI2FzaWRlX21vYmlsZV9fYnV0dG9uJztcclxuLy8gY29uc3QgaGFtYnVyZ2VyTWVudUNscyA9ICcuYXNpZGUtYnVyZ2VyLW1lbnUnO1xyXG4vLyBjb25zdCBoYW1idXJnZXJNZW51T3BlbmVkQ2xhc3MgPSAnYnVyZ2VyLW1lbnUtLWNsb3NlZCc7XHJcbi8vIGNvbnN0IGhhbWJ1cmdlckJ1dHRvbkNsb3NlQ2xhc3MgPSAnYnVyZ2VyLW1lbnVfX2J1dHRvbi0tY2xvc2UnO1xyXG5jb25zdCBzZWxlY3RvcnNFbCA9IHtcclxuICAgIGxlZnRNZW51OiB7XHJcbiAgICAgICAgaGFtYnVyZ2VyQnV0dG9uQ2xzOiAnI2FzaWRlX21vYmlsZV9fYnV0dG9uJyxcclxuICAgICAgICBoYW1idXJnZXJNZW51Q2xzOiAnLmFzaWRlLWJ1cmdlci1tZW51JyxcclxuICAgICAgICBoYW1idXJnZXJNZW51T3BlbmVkQ2xhc3M6ICdidXJnZXItbWVudS0tY2xvc2VkJyxcclxuICAgICAgICBoYW1idXJnZXJCdXR0b25DbG9zZUNsYXNzOiAnYnVyZ2VyLW1lbnVfX2J1dHRvbi0tY2xvc2UnXHJcbiAgICB9LFxyXG4gICAgcmlnaHRNZW51OiB7XHJcbiAgICAgICAgaGFtYnVyZ2VyQnV0dG9uQ2xzOiAnI2hlYWRlcl9tb2JpbGVfdG9nZ2xlcicsXHJcbiAgICAgICAgaGFtYnVyZ2VyTWVudUNsczogJy5yLXNpZGUtYnVyZ2VyLW1lbnUnLFxyXG4gICAgICAgIGhhbWJ1cmdlck1lbnVPcGVuZWRDbGFzczogJ3Itc2lkZS1idXJnZXItbWVudS0tb3BlbicsXHJcbiAgICAgICAgaGFtYnVyZ2VyQnV0dG9uQ2xvc2VDbGFzczogJ2J1cmdlci1tZW51LXJpZ2h0X19idXR0b24tLWNsb3NlJ1xyXG4gICAgfSxcclxuICAgIHN1YkhlYWRlcjoge1xyXG4gICAgICAgIGhhbWJ1cmdlckJ1dHRvbkNsczogJyNoZWFkZXJfbW9iaWxlX3RvcGJhcl90b2dnbGVyJyxcclxuICAgICAgICBoYW1idXJnZXJNZW51Q2xzOiAnLnN1Yi1oZWFkZXInLFxyXG4gICAgICAgIGhhbWJ1cmdlck1lbnVPcGVuZWRDbGFzczogJ3N1Yi1oZWFkZXItLW9wZW4nLFxyXG4gICAgICAgIGhhbWJ1cmdlckJ1dHRvbkNsb3NlQ2xhc3M6ICdzdWItaGVhZGVyLWJ1dHRvbi0tY2xvc2UnXHJcbiAgICB9XHJcbn07XHJcblxyXG4vKipcclxuICogVG9nZ2xlIGhhbWJ1cmdlciBtZW51IHBvcG92ZXJcclxuICovXHJcbmZ1bmN0aW9uIHRvZ2dsZUhhbWJ1cmdlck1lbnUobWVudU5hbWUpIHtcclxuICAgIGNvbnN0IHtoYW1idXJnZXJNZW51Q2xzLCBoYW1idXJnZXJCdXR0b25DbHMsIGhhbWJ1cmdlckJ1dHRvbkNsb3NlQ2xhc3MsIGhhbWJ1cmdlck1lbnVPcGVuZWRDbGFzc30gPSBzZWxlY3RvcnNFbFttZW51TmFtZV07XHJcbiAgICAkKGhhbWJ1cmdlckJ1dHRvbkNscykudG9nZ2xlQ2xhc3MoaGFtYnVyZ2VyQnV0dG9uQ2xvc2VDbGFzcyk7XHJcbiAgICAkKGhhbWJ1cmdlck1lbnVDbHMpLnRvZ2dsZUNsYXNzKGhhbWJ1cmdlck1lbnVPcGVuZWRDbGFzcyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbml0IGhhbWJ1cmdlciBtZW51XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIGNvbnN0IGxlZnRNZW51ID0gJ2xlZnRNZW51JztcclxuICAgIGNvbnN0IHJpZ2h0TWVudSA9ICdyaWdodE1lbnUnO1xyXG4gICAgY29uc3Qgc3ViSGVhZGVyID0gJ3N1YkhlYWRlcic7XHJcblxyXG4gICAgJChzZWxlY3RvcnNFbFtsZWZ0TWVudV0uaGFtYnVyZ2VyQnV0dG9uQ2xzKS5vbignY2xpY2snLCB0b2dnbGVIYW1idXJnZXJNZW51LmJpbmQodGhpcywgbGVmdE1lbnUpKTtcclxuICAgICQoc2VsZWN0b3JzRWxbcmlnaHRNZW51XS5oYW1idXJnZXJCdXR0b25DbHMpLm9uKCdjbGljaycsIHRvZ2dsZUhhbWJ1cmdlck1lbnUuYmluZCh0aGlzLCByaWdodE1lbnUpKTtcclxuICAgICQoc2VsZWN0b3JzRWxbc3ViSGVhZGVyXS5oYW1idXJnZXJCdXR0b25DbHMpLm9uKCdjbGljaycsIHRvZ2dsZUhhbWJ1cmdlck1lbnUuYmluZCh0aGlzLCBzdWJIZWFkZXIpKTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL2hlYWRlci9idXJnZXItbWVudS9idXJnZXItbWVudS5qcyIsIi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy91c2VyJztcclxuaW1wb3J0IFB1YlN1YiBmcm9tICdwdWJzdWItanMnOyAvLyBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9wdWJzdWItanNcclxuaW1wb3J0IHtDT05TVH0gZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2NvbnN0cyc7XHJcblxyXG5jb25zdCBzZWxlY3RvckxvZ2luU3RhdGUgPSAnLmpzX21lc3NhZ2VfbG9nZ2VkLS10ZXh0JztcclxuY29uc3Qgc2VsZWN0b3JFbWFpbENvbmZpcm1TdGF0ZSA9ICcuanNfZW1haWwtY29uZmlybS0tdGV4dCc7XHJcbmNvbnN0IGNsb3NlQ2xhc3MgPSAnZC1ub25lJztcclxuY29uc3Qgb3BlbmVkQ2xhc3MgPSAnZC1ibG9jayc7XHJcblxyXG5mdW5jdGlvbiBlbWFpbE5vdENvbmZpcm1lZCgpIHtcclxuICAgIGNvbnN0ICRlbWFpbG5Nc2cgPSAkKHNlbGVjdG9yRW1haWxDb25maXJtU3RhdGUpO1xyXG4gICAgJGVtYWlsbk1zZy50ZXh0KCcqKmVtYWlsTm90Q29uZmlybWVkKiogRW1haWwg0L3QtSDQv9C+0LTRgtCy0LXRgNC20LTQtdC9LicpLmNzcygnY29sb3InLCAnbGlnaHRjb3JhbCcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbkxvZ2luU3Vic2NyaWJlKG1zZywgZGF0YSkge1xyXG4gICAgLy8gY29uc29sZS5sb2cobXNnLCBkYXRhKTtcclxuICAgICQoQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyTmF2TG9naW5CdG4pLmFkZENsYXNzKGNsb3NlQ2xhc3MpLnJlbW92ZUNsYXNzKG9wZW5lZENsYXNzKTtcclxuICAgICQoQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyUmVnQnRuKS5hZGRDbGFzcyhjbG9zZUNsYXNzKS5yZW1vdmVDbGFzcyhvcGVuZWRDbGFzcyk7XHJcbiAgICAkKENPTlNULnVpU2VsZWN0b3JzLmhlYWRlckxvZ2luQm94KS5hZGRDbGFzcyhjbG9zZUNsYXNzKS5yZW1vdmVDbGFzcyhvcGVuZWRDbGFzcyk7XHJcblxyXG4gICAgJCgnLm5hdi1saW5rLmpzX2xvZ091dCcpLmFkZENsYXNzKG9wZW5lZENsYXNzKS5yZW1vdmVDbGFzcyhjbG9zZUNsYXNzKTsgLy8gc2hvd1xyXG4gICAgY29uc3QgJGxvZ2luTXNnID0gJChzZWxlY3RvckxvZ2luU3RhdGUpO1xyXG4gICAgJGxvZ2luTXNnLnRleHQoJyoqb25Mb2dpblN1YnNjcmliZSoqINCy0Ysg0LfQsNC70L7Qs9C40L3QuNC70LjRgdGMINCyIEx1eGdyYW0g0YPRgdC/0LXRiNC90L4nKS5jc3MoJ2NvbG9yJywgJ2xpZ2h0Ymx1ZScpO1xyXG4gICAgY29uc3QgaXNFbWFpbENvbmZpcm1lZCA9IFVzZXIuaXNFbWFpbENvbmZpcm1lZCgpO1xyXG4gICAgaWYgKCFpc0VtYWlsQ29uZmlybWVkKSB7XHJcbiAgICAgICAgZW1haWxOb3RDb25maXJtZWQoKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0xvZ291dCgpIHtcclxuICAgIC8vIGNoZWNrIGlzIGxvZ2dlZFxyXG4gICAgY29uc3QgaXNMb2dnZWQgPSBVc2VyLmlzTG9nZ2VkSW4oKTtcclxuICAgIGNvbnN0IGlzRW1haWxDb25maXJtZWQgPSBVc2VyLmlzRW1haWxDb25maXJtZWQoKTtcclxuICAgIGlmICghaXNFbWFpbENvbmZpcm1lZCkge1xyXG4gICAgICAgIGVtYWlsTm90Q29uZmlybWVkKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNMb2dnZWQpIHtcclxuICAgICAgICAkKCcubmF2LWxpbmsuanNfbG9nT3V0JykucGFyZW50KCkuc2hvdygpO1xyXG4gICAgICAgICQoJy5qc19lbWFpbC1jb25maXJtLS10ZXh0JykudGV4dCgn0LLRiyDQt9Cw0LvQvtCz0LjQvdC40LvQuNGB0Ywg0YPRgdC/0LXRiNC90L4nKTtcclxuICAgICAgICBjb25zdCBvbGRVUkwgPSBkb2N1bWVudC5yZWZlcnJlcjtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhvbGRVUkwpO1xyXG4gICAgICAgIGlmIChvbGRVUkwuaW5jbHVkZXMoJ2NvbmZpcm0tcmVnaXN0cmF0aW9uJykpIHtcclxuICAgICAgICAgICAgJCgnLmpzX21lc3NhZ2VfbG9nZ2VkLS10ZXh0JykudGV4dCgn0LLRiyDQv9C+0LTRgtCy0LXRgNC00LjQu9C4INGA0LXQs9C40YHRgtGA0LDRhtC40Y4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb25Mb2dpblN1YnNjcmliZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKHNlbGVjdG9yTG9naW5TdGF0ZSkudGV4dCgn0J/RgNC40LLQtdGCINCw0L3QvtC90LjQvNC90YvQuSDQv9C+0LvRjNC30L7QstCw0YLQtdC70YwnKTtcclxuICAgICAgICAkKHNlbGVjdG9yRW1haWxDb25maXJtU3RhdGUpLmVtcHR5KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbml0IGhlYWRlclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRIZWFkZXIoKSB7XHJcbiAgIC8vIGNoZWNrIG90aGVyIGhhbmRsZXIgaW4gbG9naW4tZm9ybS5qc1xyXG4gICAgY29uc3QgJGxvZ2luQm94ID0gJChDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJMb2dpbkJveCk7XHJcbiAgICBjb25zdCAkcmVnaXN0ZXJCb3ggPSAkKENPTlNULnVpU2VsZWN0b3JzLmhlYWRlclJlZ0JveCk7XHJcblxyXG4gICAgUHViU3ViLnN1YnNjcmliZShDT05TVC5ldmVudHMuVVNFUl9MT0dHRUQsIG9uTG9naW5TdWJzY3JpYmUpO1xyXG5cclxuICAgIHNob3dMb2dvdXQoKTtcclxuXHJcbiAgICAkKENPTlNULnVpU2VsZWN0b3JzLmhlYWRlclJlZ0J0bikub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICRsb2dpbkJveC5oaWRlKCk7XHJcbiAgICAgICAgJHJlZ2lzdGVyQm94LmNzcyh7J3RvcCc6IDAsICdyaWdodCc6IDB9KVxyXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ2JnLWxpZ2h0IGJvcmRlciBtdC01IG14LWF1dG8gcG9zaXRpb24tYWJzb2x1dGUgcHgtMyBkLWJsb2NrJylcclxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyTmF2TG9naW5CdG4pLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAkbG9naW5Cb3guYWRkQ2xhc3MoJ2QtYmxvY2snKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgJHJlZ2lzdGVyQm94LmFkZENsYXNzKCdkLW5vbmUnKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpO1xyXG4gICAgfSk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9oZWFkZXIvaGVhZGVyLmpzIiwiLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3VzZXInO1xyXG4vLyBpbXBvcnQgU3Bpbm5lciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvc3Bpbm5lcic7XHJcbmltcG9ydCB2aWV3VXRpbHMgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3ZpZXcnO1xyXG5cclxuLy8g0J/QvtGB0LvQtSDQtNC+0LHQsNCy0LvQtdC90LjRjyDQsNC60LrQsNGD0L3RgtCwINGB0L3QvtCy0LAg0LTQtdGA0L3Rg9GC0Ywg0JzQldCi0JAg0Lgg0L/QtdGA0LXRgNC40YHQvtCy0LDRgtGMINGB0L/QuNGB0L7QuiDQsNC60LrQsNGD0L3RgtC+0LJcclxuY29uc3QgYWRkSW5zdGFncmFtQWNjb3VudCA9IChuZXdGb3JtRGF0YSkgPT4ge1xyXG4gICAgY29uc3QgY2JFcnJvciA9IChyZXN1bHQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnRVJST1InLCByZXN1bHQpO1xyXG4gICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UoJCgnLmVycm9yLW1zZycpLFxyXG4gICAgICAgICAgICByZXN1bHQuc3RhdHVzLnN0YXRlLFxyXG4gICAgICAgICAgICByZXN1bHQuc3RhdHVzLm1lc3NhZ2UgfHwgJ0xvZ2luIGVycm9yJyk7XHJcbiAgICAgICAgLy8gJChfbG9naW5Cb3gpLmFkZENsYXNzKGNsb3NlQ2xhc3MpLnJlbW92ZUNsYXNzKG9wZW5lZENsYXNzKTtcclxuICAgIH07XHJcblxyXG4gICAgVXNlci5hZGRJbnN0YWdyYW1BY2NvdW50KG5ld0Zvcm1EYXRhLCBjYkVycm9yKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5zdGF0dXMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LCByZXN1bHQuc3RhdHVzKTtcclxuICAgICAgICAgICAgLy8gZGVidWdnZXI7XHJcbiAgICAgICAgICAgIGNvbnN0ICRtc2dMaXN0ID0gJCgnLmFjY291bnRzLWxpc3QnKTtcclxuICAgICAgICAgICAgJG1zZ0xpc3QuZW1wdHkoKTtcclxuICAgICAgICAgICAgLy8gdG9kbyA6IHJlbG9hZCBsaXN0XHJcbiAgICAgICAgICAgIC8vIGZpbGxMaXN0KCRtc2dMaXN0LCByZXN1bHQuZGF0YS5hY2NvdW50cyk7XHJcbiAgICAgICAgICAgIC8vIGFkZExpc3RIYW5kbGVyKCk7XHJcblxyXG4gICAgICAgICAgICAvLyB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKCR0ZXh0QXJlYURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAvLyAgICAgcmVzdWx0LnN0YXR1cy5zdGF0ZSxcclxuICAgICAgICAgICAgLy8gICAgIHJlc3VsdC5zdGF0dXMubWVzc2FnZSB8fCAnTG9naW4gZXJyb3InKTtcclxuICAgICAgICAgICAgLy8gJChfbG9naW5Cb3gpLmFkZENsYXNzKGNsb3NlQ2xhc3MpLnJlbW92ZUNsYXNzKG9wZW5lZENsYXNzKTtcclxuICAgICAgICB9XHJcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgLy8gdG9kbzogcmVuZGVyIGZvciB1c2VyXHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdzdWJtaXQnLCBuZXdGb3JtRGF0YSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBhZGRPbkxvYWRIYW5kbGVycygpIHtcclxuICAgIC8vICQoJy5qc19yZXBlYXQtc2VjdXJpdHktY29kZScpLm9uKCdjbGljaycsIChlKSA9PiB7XHJcblxyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgJCgnLmpzX2FkZC1pbnN0YWdyYW0tYWNjb3VudCcpLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYnRuID0gJChlLnRhcmdldCk7XHJcbiAgICAgICAgY29uc3QgJG1vZGFsQm9keSA9IGJ0bi5jbG9zZXN0KCcubW9kYWwnKS5maW5kKCcubW9kYWwtZGlhbG9nIC5tb2RhbC1ib2R5Jyk7XHJcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSAkbW9kYWxCb2R5LmZpbmQoJ2lucHV0W25hbWU9XCJ1c2VybmFtZVwiXScpLnZhbCgpLnRyaW0oKTtcclxuICAgICAgICBjb25zdCBwYXNzd29yZCA9ICRtb2RhbEJvZHkuZmluZCgnaW5wdXRbbmFtZT1cInBhc3NcIl0nKS52YWwoKS50cmltKCk7XHJcbiAgICAgICAgY29uc3QgJGZvcm0gPSAkKCdmb3JtJywgJG1vZGFsQm9keSk7XHJcbiAgICAgICAgY29uc3QgZm9ybSA9ICRmb3JtLmdldCgwKTtcclxuICAgICAgICBjb25zdCBjc3NWYWxpZGF0aW9uQ2xhc3MgPSAnZm9ybS12YWxpZGF0aW9uJztcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAvLyBjb25zdCB2YWxpZGF0b3IgPSBuZXcgVmFsaWRhdG9yKCRmb3JtKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWxpZGF0b3IudmFsaWRhdGUoKSk7XHJcbiAgICAgICAgaWYgKGZvcm0uY2hlY2tWYWxpZGl0eSgpKSB7XHJcbiAgICAgICAgICAgIGFkZEluc3RhZ3JhbUFjY291bnQoe3VzZXJuYW1lLCBwYXNzd29yZH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIEhpZ2hsaWdodCBlcnJvcnNcclxuICAgICAgICAgICAgaWYgKGZvcm0ucmVwb3J0VmFsaWRpdHkpIHtcclxuICAgICAgICAgICAgICAgIGZvcm0ucmVwb3J0VmFsaWRpdHkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkZm9ybS5hZGRDbGFzcyhjc3NWYWxpZGF0aW9uQ2xhc3MpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF1c2VybmFtZSB8fCAhcGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vdCB2YWxpZCAtIEVtcHR5IGZpZWxkcycpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZExpc3RIYW5kbGVyKC8qIHVzZXJuYW1lKi8pIHtcclxuICAgIC8vICQoJyN5b3VyTW9kYWxJRCcpLm9uKCdzaG93LmJzLm1vZGFsJywgZnVuY3Rpb24oZSkge1xyXG4gICAgLy8gICAgIHZhciB5b3VycGFyYW1ldGVyID0gZS5yZWxhdGVkVGFyZ2V0LmRhdGFzZXQueW91cnBhcmFtZXRlcjtcclxuICAgIC8vICAgICAvLyBEbyBzb21lIHN0dWZmIHcvIGl0LlxyXG4gICAgLy8gfSk7XHJcbiAgICBsZXQgY2hlY2twb2ludFR5cGUgPSAnJztcclxuXHJcbiAgICAkKCcuanNfcGFzcy1jaGVja3BvaW50LWJ0bicpLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgJGJ1dHRvbiA9ICQoZS50YXJnZXQpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gJGJ1dHRvbi5kYXRhKCd1c2VybmFtZScpO1xyXG4gICAgICAgIGNoZWNrcG9pbnRUeXBlID0gJGJ1dHRvbi5kYXRhKCdjaGVja3BvaW50VHlwZScpIHx8IGNoZWNrcG9pbnRUeXBlO1xyXG4gICAgICAgIC8vICQoJyNzZWN1cml0eS1jb2RlJykuZGF0YSgnY2hlY2twb2ludFR5cGUnLCBjaGVja3BvaW50VHlwZSk7XHJcbiAgICAgICAgLy8gdG9kbyBhZGQgJ2NoZWNrcG9pbnRUeXBlJyB0byBtb2RhbFxyXG4gICAgICAgIGNvbnN0IHNlbmRUbyA9IChjaGVja3BvaW50VHlwZSA9PT0gJ1BIT05FJykgPyAn0YLQtdC70LXRhNC+0L0nIDogJ2VtYWlsJztcclxuICAgICAgICAvLyBTcGlubmVyLnN0YXJ0KCRidXR0b24sICdmYS1rZXknKTtcclxuXHJcbiAgICAgICAgaWYgKGNoZWNrcG9pbnRUeXBlID09PSAnRU1BSUxfT1JfUEhPTkUnKSB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAvLyDQuNC90L/Rg9GC0Ysg0YHQv9GA0Y/RgtCw0L3RiyxcclxuICAgICAgICAgICAgLy8g0L/QvtC60LDQt9Cw0YLRjCDRgdC10YDRi9C1INC/0LXRgNC10LrQu9GO0YfQsNGC0LXQu9C4ICjQstGL0LHRgNCw0Lsg0YLQuNC/KVxyXG4gICAgICAgICAgICAvLyDQtdGB0YLRjCDQutC90L7Qv9C60LAg0JfQsNC/0YDQvtGB0LjRgtGMINC60L7QtCDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjQtVxyXG4gICAgICAgICAgICAkKCcjc2VjdXJpdHktY29kZS1waG9uZU9yZW1haWwnKS5tb2RhbCh7c2hvdzogdHJ1ZSwgdXNlcm5hbWV9KTtcclxuXHJcbiAgICAgICAgICAgIC8vINC90LUg0L7RgtC/0YDQsNCy0LvRj9C10Lwg0YDQtdC60LLQtdGB0YJcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgVXNlci5nZXRTZWN1cml0eUtleSh1c2VybmFtZSwgY2hlY2twb2ludFR5cGUpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2VjdXJpdHlLZXkgcmVjZWl2ZWQ6JywgcmVzdWx0LnN0YXR1cy5zdGF0ZSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzLnN0YXRlID09PSAnb2snKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkbW9kYWwgPSAkKCcjc2VjdXJpdHktY29kZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNwaW5uZXIuc3RvcCgkYnV0dG9uLCAnZmEta2V5Jyk7XHJcbiAgICAgICAgICAgICAgICAkKCcuanNfc3VjY2Vzcy1mZWVkYmFjaycsICRtb2RhbCkuZW1wdHkoKS50ZXh0KGDQmtC70Y7RhyDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjRjyDQsdGL0Lsg0L7RgtC/0YDQsNCy0LvQtdC9INCS0LDQvCDQvdCwICR7c2VuZFRvfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBpbnNpZGUgbW9kYWxcclxuICAgICQoJy5qc19jb25maXJtLXNlY3VyaXR5LWNvZGUnKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJ0biA9ICQoZS50YXJnZXQpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gYnRuLmRhdGEoJ3VzZXJuYW1lJyk7XHJcbiAgICAgICAgY29uc3QgJGtleUlucHV0ID0gYnRuLmNsb3Nlc3QoJy5tb2RhbCcpLmZpbmQoJy5tb2RhbC1kaWFsb2cgZm9ybSBpbnB1dC5qc19jb25maXJtLWtleScpO1xyXG4gICAgICAgIGNvbnN0IGtleSA9ICRrZXlJbnB1dC52YWwoKS50cmltKCk7XHJcbiAgICAgICAgY29uc3QgJG1vZGFsID0gYnRuLmNsb3Nlc3QoJy5tb2RhbCcpO1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIGlmIChrZXkubGVuZ3RoICE9PSA2KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgVXNlci5jb25maXJtU2VjdXJpdHlLZXkoa2V5LCB1c2VybmFtZSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzLnN0YXRlICE9PSAnb2snKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2pzX2NvbmZpcm06JywgcmVzdWx0LnN0YXR1cy5zdGF0ZSwgJ2Nsb3NlIG1vZGFsJyk7XHJcbiAgICAgICAgICAgICRtb2RhbC5tb2RhbCgnaGlkZScpO1xyXG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2VycicpO1xyXG4gICAgICAgICAgICAkKCcuanNfc3VjY2Vzcy1mZWVkYmFjaycsICRtb2RhbCkudGV4dCgn0JfQsNC/0YDQvtGBINC90LUg0L7RgtC/0YDQsNCy0LvQtdC9JykuY3NzKCdjb2xvcicsICdyZWQnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJ2Zvcm0gaW5wdXRbbWlubGVuZ3RoXScpLm9uKCdibHVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGxlbiA9ICQodGhpcykudmFsKCkudHJpbSgpLmxlbmd0aDtcclxuICAgICAgICBjb25zdCBtaW5MZW4gPSBOdW1iZXIoJCh0aGlzKS5hdHRyKCdtaW5sZW5ndGgnKSk7XHJcbiAgICAgICAgLy8gY29uc3QgbWVzc2FnZSA9IG1pbkxlbiA8PSBsZW4gPyAnJyA6IG1pbkxlbiArICcgY2hhcmFjdGVycyBtaW5pbXVtJztcclxuICAgICAgICBpZiAobWluTGVuICE9PSBsZW4pIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2JvcmRlckNvbG9yJywgJ3JlZCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQodGhpcykuY3NzKCdib3JkZXJDb2xvcicsICcjY2VkNGRhJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMuc2V0Q3VzdG9tVmFsaWRpdHkobWVzc2FnZSlcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9uSGlkZU1vZGFsKGUpIHtcclxuICAgICAgICBjb25zdCAkbW9kYWwgPSAkKGUudGFyZ2V0KTtcclxuICAgICAgICAkbW9kYWwuZmluZCgnLmZpcnN0LXN0ZXAnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgJG1vZGFsLmZpbmQoJy5zZWNvbmQtc3RlcCcpLmFkZENsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAkKCcuanNfY29uZmlybS1rZXknKS52YWwoJycpO1xyXG4gICAgICAgICQoJy5qc19zdWNjZXNzLWZlZWRiYWNrJywgJG1vZGFsKS5yZW1vdmVBdHRyKCdzdHlsZScpLmVtcHR5KCk7XHJcbiAgICB9XHJcbiAgICAkKCcjc2VjdXJpdHktY29kZS1waG9uZU9yZW1haWwnKS5vbignaGlkZS5icy5tb2RhbCcsIG9uSGlkZU1vZGFsKTtcclxuICAgICQoJyNzZWN1cml0eS1jb2RlJykub24oJ2hpZGUuYnMubW9kYWwnLCBvbkhpZGVNb2RhbCk7XHJcblxyXG4gICAgLy8gXCJQSE9ORV9PUl9FTUFJTFwiIG1vZGFsXHJcbiAgICAkKCcuanNfZ2V0LXNlY3VyaXR5LWNvZGUtcGhvbmVPcmVtYWlsJykub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCAkbW9kYWwgPSAkKCcjc2VjdXJpdHktY29kZS1waG9uZU9yZW1haWwnKTtcclxuICAgICAgICBjb25zdCB0eXBlU2VsZWN0ZWQgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCRtb2RhbCkuZmluZCgnLmpzX2J0bi10eXBlLXN3aXRjaGVyIGlucHV0OmNoZWNrZWQnKTtcclxuICAgICAgICBjb25zdCBjaGVja3BvaW50VHlwZUFjdGl2ZSA9IHR5cGVTZWxlY3RlZC52YWwoKTtcclxuICAgICAgICBjb25zdCBzZW5kVG8gPSAoY2hlY2twb2ludFR5cGVBY3RpdmUgPT09ICdQSE9ORScpID8gJ9GC0LXQu9C10YTQvtC9JyA6ICdlbWFpbCc7XHJcbiAgICAgICAgY29uc3QgbW9kYWxDb25maWcgPSAkbW9kYWwuZGF0YSgpWydicy5tb2RhbCddLl9jb25maWc7XHJcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSBtb2RhbENvbmZpZy51c2VybmFtZTtcclxuICAgICAgICBVc2VyLmdldFNlY3VyaXR5S2V5KHVzZXJuYW1lLCBjaGVja3BvaW50VHlwZUFjdGl2ZSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIC8vINC/0YDQuCDQvdCw0LbQsNGC0LjQuCBcItCX0LDQv9GA0L7RgdC40YLRjCDQutC+0LQg0L/QvtC00YLQstC10YDQttC00LXQvdC40LVcIiAtINC+0YLQv9Cw0YDQu9GP0LXRgtGB0Y8g0YDQtdC60LLQtdGB0YIgXCLRgdGC0LDRgNGCINGH0LXQutC/0L7QuNC90YJcIiDQv9C+0Y/QstC70Y/QtdGC0YzRgdGPINC40L3Qv9GD0YIg0Lgg0LrQvdC+0L/QutCwINC00YDRg9Cz0LjRhSDRgtC40L/QsNGFXHJcbiAgICAgICAgICAgIC8vIGdldCBzZWxlY3RlZCBidXR0b25cclxuXHJcbiAgICAgICAgICAgIC8vINC/0LXRgNC10LrQu9GO0YfQsNGC0LXQu9GMKNGB0LXRgNGL0LkpINC4INC60L3QvtC/0LrQsCBcItCX0LDQv9GA0L7RgdC40YLRjCDQutC+0LQg0L/QvtC00YLQstC10YDQttC00LXQvdC40LVcIiDQuNGB0YfQtdC30LDRjtGCXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZWN1cml0eUtleSByZWNlaXZlZDonLCByZXN1bHQuc3RhdHVzLnN0YXRlKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMuc3RhdGUgPT09ICdvaycpIHtcclxuICAgICAgICAgICAgICAgICQoJy5maXJzdC1zdGVwJywgJG1vZGFsKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcuc2Vjb25kLXN0ZXAnLCAkbW9kYWwpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgICAgICQoJy5qc19zdWNjZXNzLWZlZWRiYWNrJywgJG1vZGFsKS5lbXB0eSgpLnRleHQoYNCa0LvRjtGHINC/0L7QtNGC0LLQtdGA0LbQtNC10L3QuNGPINCx0YvQuyDQvtGC0L/RgNCw0LLQu9C10L0g0JLQsNC8INC90LAgJHtzZW5kVG99YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaWxsTGlzdCgkbGlzdCwgZGF0YUFycmF5KSB7XHJcbiAgICBjb25zdCBpdGVtcyA9IGRhdGFBcnJheTtcclxuICAgIGNvbnN0IGNMaXN0ID0gJGxpc3Q7XHJcbiAgICBjb25zdCBkZWZhdWx0QXZhdGFyU3JjID0gJ2h0dHBzOi8vaS5pbWd1ci5jb20vak5OVDRMRS5wbmcnO1xyXG4gICAgY29uc3QgaW5zZXJ0SXRlbSA9IChkYXRhLCB0ZXh0LCBjc3NDbHMpID0+IHtcclxuICAgICAgICBjb25zdCBsaVRwbCA9IGAkeyhkYXRhKVxyXG4gICAgICAgICAgICA/IGA8bGkgY2xhc3M9XCJsaXN0LWlubGluZS1pdGVtICR7Y3NzQ2xzfVwiPjxzcGFuIGNsYXNzPVwiZmlndXJlXCI+JHtkYXRhfTwvc3Bhbj48c3Bhbj4ke3RleHR9PC9zcGFuPjwvbGk+YFxyXG4gICAgICAgICAgICA6IGA8bGkgY2xhc3M9XCJsaXN0LWlubGluZS1pdGVtICR7Y3NzQ2xzfVwiPjxzcGFuIGNsYXNzPVwiZmlndXJlXCI+MDwvc3Bhbj48c3Bhbj4ke3RleHR9PC9zcGFuPjwvbGk+YH1gO1xyXG4gICAgICAgIHJldHVybiBsaVRwbDtcclxuICAgIH07XHJcbiAgICBjb25zdCBzdGF0cyA9IChpbmZvKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdHBsID0gYDxkaXYgY2xhc3M9XCJjb2xcIj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1pbmxpbmUgdGV4dC1jZW50ZXIgY291bnRzLWxpc3RcIj5cclxuICAgICAgICAgICAgJHsoaW5mbylcclxuICAgICAgICAgICAgICA/IGAke2luc2VydEl0ZW0oaW5mb1snbWVkaWFfY291bnQnXSwgJ9Cf0YPQsdC70LjQutCw0YbQuNC4JywgJ21lZGlhLWNvdW50Jyl9XHJcbiAgICAgICAgICAgICAgICAke2luc2VydEl0ZW0oaW5mb1snZm9sbG93ZXJfY291bnQnXSwgJ9Cf0L7QtNC/0LjRgdGH0LjQutC4JywgJ2ZvbGxvd2VyLWNvdW50Jyl9XHJcbiAgICAgICAgICAgICAgICAke2luc2VydEl0ZW0oaW5mb1snZm9sbG93aW5nX2NvdW50J10sICfQn9C+0LTQv9C40YHQutC4JywgJ2ZvbGxvd2luZy1jb3VudCcpfWBcclxuICAgICAgICAgICAgICA6IGAke2luc2VydEl0ZW0oZmFsc2UsICfQn9GD0LHQu9C40LrQsNGG0LjQuCcsICdtZWRpYS1jb3VudCcpfVxyXG4gICAgICAgICAgICAgICAgJHtpbnNlcnRJdGVtKGZhbHNlLCAn0J/QvtC00L/QuNGB0YfQuNC60LgnLCAnZm9sbG93ZXItY291bnQnKX1cclxuICAgICAgICAgICAgICAgICR7aW5zZXJ0SXRlbShmYWxzZSwgJ9Cf0L7QtNC/0LjRgdC60LgnLCAnZm9sbG93aW5nLWNvdW50Jyl9YFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+YDtcclxuICAgICAgICByZXR1cm4gdHBsO1xyXG4gICAgfTtcclxuICAgIGNMaXN0LmVtcHR5KCkuYWRkQ2xhc3MoJ2JvcmRlci1saWdodC1jb2xvcicpO1xyXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGluZm8gPSBpdGVtLmluZm87XHJcbiAgICAgICAgY29uc3QgY2hlY2twb2ludCA9IGl0ZW0uY2hlY2twb2ludCB8fCBpdGVtO1xyXG5cclxuICAgICAgICBpZiAoIWluZm8pIHtcclxuICAgICAgICAgICAgJChgPGxpIGNsYXNzPVwibWVkaWEgcHktM1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cIm1sLTMgcm91bmRlZFwiIGFsdD1cImRlZmF1bHQgYXZhdGFyXCIgc3JjPVwiJHtkZWZhdWx0QXZhdGFyU3JjfVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWJvZHkgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB1c2VyLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHsoaXRlbS51c2VybmFtZSkgPyBgPGg0IGNsYXNzPVwibXQtMCBtYi0xIG5hbWVcIj4ke2l0ZW0udXNlcm5hbWV9PC9oND5gIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkeyhjaGVja3BvaW50LnN0YXR1cyA9PT0gJ1RSSUdHRVJFRCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGpzX3Bhc3MtY2hlY2twb2ludC1idG4gZC1ibG9jayBteC1hdXRvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWNoZWNrcG9pbnQtdHlwZT1cIiR7Y2hlY2twb2ludC50eXBlfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXVzZXJuYW1lPVwiJHtpdGVtLnVzZXJuYW1lIHx8ICcnfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjc2VjdXJpdHktY29kZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEta2V5XCI+PC9pPtCf0YDQvtC50YLQuCDRh9C10LrQv9C+0LjQvdGCPC9idXR0b24+YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGAodG9kbyljaGVja3BvaW50IHN0YXR1cyAtICR7Y2hlY2twb2ludC5zdGF0dXN9YH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAke3N0YXRzKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5gKS5hcHBlbmRUbyhjTGlzdCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChgPGxpIGNsYXNzPVwibWVkaWEgcHktM1wiPlxyXG4gICAgICAgICAgICAkeyhpbmZvWydwcm9maWxlX3BpY191cmwnXSlcclxuICAgICAgICAgICAgICAgID8gYDxpbWcgY2xhc3M9XCJtbC0zIHJvdW5kZWRcIiBhbHQ9XCJVc2VyIHBob3RvXCIgc3JjPVwiJHtpbmZvWydwcm9maWxlX3BpY191cmwnXX1cIj5gXHJcbiAgICAgICAgICAgICAgICA6IGA8aW1nIGNsYXNzPVwibWwtMyByb3VuZGVkXCIgYWx0PVwiZGVmYXVsdCBhdmF0YXJcIiBzcmM9XCIke2RlZmF1bHRBdmF0YXJTcmN9XCI+YH1cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWJvZHkgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHVzZXItaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7KGl0ZW0udXNlcm5hbWUpID8gYDxwIGNsYXNzPVwibXQtMCBtYi0xIG5hbWUgbGVhZFwiPiR7aXRlbS51c2VybmFtZX08L3A+YCA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICR7KGluZm8ubmFtZSkgPyBgPGg0IGNsYXNzPVwibXQtMCBtYi0xXCI+JHtpbmZvLm5hbWV9PC9oND5gIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgJHsoaW5mby5uYW1lKSA/ICcnIDogJycgIC8qICR7KGluZm8uZW1haWwpID8gYDxwIGNsYXNzPVwibXQtMCBtYi0xXCI+JHtpbmZvLmVtYWlsfTwvcD5gIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICR7KGluZm8ucGhvbmUpID8gYDxwIGNsYXNzPVwibXQtMCBtYi0xXCI+JHtpbmZvLnBob25lfTwvcD5gIDogJyd9ICovIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICR7KGNoZWNrcG9pbnQuc3RhdHVzID09PSAnVFJJR0dFUkVEJylcclxuICAgICAgICAgICAgICAgID8gYDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGpzX3Bhc3MtY2hlY2twb2ludC1idG4gZC1ibG9jayBteC1hdXRvXCIgZGF0YS1jaGVja3BvaW50LXR5cGU9XCIke2NoZWNrcG9pbnQudHlwZX1cIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjc2VjdXJpdHktY29kZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWtleVwiPjwvaT7Qn9GA0L7QudGC0Lgg0YfQtdC60L/QvtC40L3RgjwvYnV0dG9uPmBcclxuICAgICAgICAgICAgICAgIDogJyd9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICR7c3RhdHMoaW5mbyl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbGk+YCkuYXBwZW5kVG8oY0xpc3QpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogSW5pdCBoZWFkZXJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgY29uc3QgJG1zZ0xpc3QgPSAkKCcuYWNjb3VudHMtbGlzdCcpO1xyXG4gICAgLy8gY2hlY2sgd2UgYXJlIGluIHByb2ZpbGUgcGFnZVxyXG4gICAgaWYgKCEkbXNnTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCB0b2tlbiA9IFVzZXIuZ2V0VG9rZW4oKTsgLy8gdXBkIHRvOiBVc2VyLmdldFRva2VuKClcclxuICAgIGNvbnN0IG1ldGFkYXRhID0gVXNlci5nZXRNZXRhZGF0YSh0b2tlbik7XHJcbiAgICBjb25zdCByZXNlbmRSZXF1ZXN0ID0gKCkgPT4gVXNlci5nZXRNZXRhZGF0YSh0b2tlbik7XHJcbiAgICBsZXQgaXNTZW5kUmVxT25jZSA9IGZhbHNlO1xyXG4gICAgY29uc3QgY2hlY2tSZXNwb25zZSA9IChyZXN1bHQsIGlzUmVzZW5kUmVxdWVzdCkgPT4ge1xyXG4gICAgICAgIGlmICghcmVzdWx0LnN0YXR1cy5zdGF0ZSA9PT0gJ29rJyB8fCAhcmVzdWx0LmRhdGEgfHwgISRtc2dMaXN0Lmxlbmd0aCB8fCBpc1Jlc2VuZFJlcXVlc3QpIHtcclxuICAgICAgICAgICAgLy8g0L/RgNC+0LLQtdGA0Y/QvCDQvtC00LjQvSDRgNCw0Lcg0L3QsNC70LjRh9C40LUgcmVzdWx0LmRhdGEuYWNjb3VudHMuaW5mb1xyXG4gICAgICAgICAgICAkbXNnTGlzdC5lbXB0eSgpO1xyXG4gICAgICAgICAgICAkKGA8bGkgY2xhc3M9XCJtZWRpYVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJtdC0wIG1iLTNcIj7QndC4INC+0LTQvdC+0LPQviDQkNC60LrQsNGD0L3RgtCwINC90LUg0LTQvtCx0LDQstC70LXQvdC+PC9oMz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPmApLmFwcGVuZFRvKCRtc2dMaXN0KTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNlbmRSZXF1ZXN0KCkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tSZXNwb25zZShyZXN1bHQsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlcXVlc3QgcmVzZW5kJyk7XHJcbiAgICAgICAgICAgIH0sIDM1MDApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vINCy0YvQstC+0LQg0YDQtdC30YPQu9GM0YLQsNGC0L7QsiAoZGF0YS5hY2NvdW50cy5pbmZvKVxyXG4gICAgICAgICQoJy5wcm9maWxlLXVzZXIgLnNwaW5uZXItYm94JykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgIGZpbGxMaXN0KCRtc2dMaXN0LCByZXN1bHQuZGF0YS5hY2NvdW50cyk7XHJcbiAgICAgICAgYWRkTGlzdEhhbmRsZXIoKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gY2hlY2sgd2UgYXJlIGluIHByb2ZpbGUgcGFnZVxyXG4gICAgaWYgKCEkbXNnTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgYWRkT25Mb2FkSGFuZGxlcnMoKTtcclxuXHJcbiAgICAvLyDQvNC+0LbQtdGCINC40L3RhNC+INC+0YLRgdGD0YLRgdCy0L7QstCw0YLRjCAtINGB0LTQtdC70LDRgtGMINC10YnQtSDRgNCw0Lcg0LfQsNC/0YDQvtGBINGH0LXRgNC10LcgMyDRgdC10LouXHJcblxyXG4gICAgbWV0YWRhdGEudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgLy8g0L/RgNC+0LLQtdGA0Y/QvCDQvtC00LjQvSDRgNCw0Lcg0L3QsNC70LjRh9C40LUgcmVzdWx0LmRhdGEuYWNjb3VudHMuaW5mb1xyXG4gICAgICAgIGxldCBpc1Jlc2VuZFJlcXVlc3QgPSBmYWxzZTtcclxuICAgICAgICBpZiAocmVzdWx0LmRhdGEgJiYgcmVzdWx0LmRhdGEuYWNjb3VudHMgJiYgIWlzU2VuZFJlcU9uY2UpIHtcclxuICAgICAgICAgICAgcmVzdWx0LmRhdGEuYWNjb3VudHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpdGVtLmluZm8pIHtcclxuICAgICAgICAgICAgICAgICAgICBpc1Jlc2VuZFJlcXVlc3QgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlzU2VuZFJlcU9uY2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNoZWNrUmVzcG9uc2UocmVzdWx0LCBpc1Jlc2VuZFJlcXVlc3QpO1xyXG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKCQoJy5lcnJvci1tc2cnKSxcclxuICAgICAgICAgICAgICAgIGVyci5zdGF0dXMgfHwgJycsXHJcbiAgICAgICAgICAgICAgICAn0J3QtSDQv9C+0LvRg9GH0LjQu9C+0YHRjCDQt9Cw0LPRgNGD0LfQuNGC0Ywg0LTQvtGB0YLRg9C/0L3Ri9C1IEluc3RhZ3JhbSDQsNC60LrQsNGD0L3RgtGLJyk7XHJcbiAgICAgICAgfSwgMzAwMCk7XHJcbiAgICAgICAgJCgnLnNwaW5uZXItYm94JykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgfSk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9pbnN0YWdyYW0tYWNjb3VudHMtbGlzdC9pbnN0YWdyYW0tYWNjb3VudHMtbGlzdC5qcyIsIi8qIGVzbGludC1kaXNhYmxlIHNvcnQtdmFycyAqL1xyXG4vLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdXNlcic7XHJcbmltcG9ydCBQdWJTdWIgZnJvbSAncHVic3ViLWpzJzsgLy8gaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvcHVic3ViLWpzXHJcbmltcG9ydCBjb29raWVTdG9yYWdlIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb29raWUnO1xyXG4vLyBpbXBvcnQgVmFsaWRhdG9yIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9mb3JtLXZhbGlkYXRvcic7XHJcbmltcG9ydCB2aWV3VXRpbHMgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3ZpZXcnO1xyXG5pbXBvcnQge0NPTlNUfSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29uc3RzJztcclxuXHJcbi8vIHdpbmRvdy4kID0gJDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMb2dpbkZvcm0oc2VsZWN0b3JDc3MpIHtcclxuICAgIGNvbnN0IHtfZm9ybUlkLCBfYnV0dG9uU3VibWl0SWQsIF9zaG93TG9naW5Cb3hCdG5JZCwgX2xvZ2luQm94fSA9IHNlbGVjdG9yQ3NzO1xyXG4gICAgY29uc3QgdXNlciA9IFVzZXIsIC8vIHNlcnZpY2VcclxuICAgICAgICAkZm9ybSA9ICQoX2Zvcm1JZCksXHJcbiAgICAgICAgJGVtYWlsID0gJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cIm1haWxcIl0nKSxcclxuICAgICAgICAkdGV4dEFyZWFEZXNjcmlwdGlvbiA9ICQoJyNkZXNjcmlwdGlvbicpO1xyXG4gICAgLy8gY29uc3Qgb3BlbmVkQ2xhc3MgPSAnZC1ibG9jayc7XHJcbiAgICAvLyBjb25zdCBjbG9zZUNsYXNzID0gJ2Qtbm9uZSc7XHJcblxyXG4gICAgY29uc3QgdXNlckxvZ2luSGVhZGVyID0gKF9mb3JtRGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNiRXJyb3IgPSAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICQoX2xvZ2luQm94KS5hcHBlbmQoJzxwPnJlc3VsdC5zdGF0dXMubWVzc2FnZTwvcD4nKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gdXNlci5sb2dpbihfZm9ybURhdGEsIGNiRXJyb3IpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LmRhdGEgJiYgcmVzdWx0LmRhdGEudG9rZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzYXZlIHRoZSBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgY29va2llU3RvcmFnZS5zZXQoQ09OU1QuY29va2llU3RvcmFnZS50b2tlbiwgcmVzdWx0LmRhdGEudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5uYXYtbGluay5qc19sb2dPdXQnKS5wYXJlbnQoKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3JlcXVlc3Qgc3VjY2VlZGVkIHdpdGggSlNPTiByZXNwb25zZScsIHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSgkdGV4dEFyZWFEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5tZXNzYWdlIHx8ICdMb2dpbiBzdWNjc2VzcycpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKHRoaXMuJHRleHRBcmVhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGA8cD5zdGF0dXM6ICR7cmVzdWx0LnN0YXR1cy5zdGF0ZX08L3A+PHA+IG1lc3NhZ2U6ICR7cmVzdWx0LnN0YXR1cy5tZXNzYWdlfTwvcD5gKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UoJHRleHRBcmVhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMubWVzc2FnZSB8fCAnTG9naW4gZXJyb3InKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHN1Ym1pdEZvcm0gPSBmdW5jdGlvbihmb3JtRGF0YU9iaikge1xyXG4gICAgICAgIGNvbnN0IGVtYWlsID0gJGVtYWlsLnZhbCgpLFxyXG4gICAgICAgICAgICBwYXNzd29yZCA9ICRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJwYXNzXCJdJykudmFsKCksXHJcbiAgICAgICAgICAgIF9mb3JtRGF0YSA9IGZvcm1EYXRhT2JqIHx8IHtlbWFpbCwgcGFzc3dvcmR9O1xyXG5cclxuICAgICAgICBpZiAoc2VsZWN0b3JDc3MuaXNMb2dpbkluc3RhZ3JhbSkge1xyXG4gICAgICAgICAgICAvLyB0b2RvOiBkZWxldGUgbWVcclxuICAgICAgICAgICAgLy8gYWRkSW5zdGFncmFtQWNjb3VudCh7dXNlcm5hbWU6ICRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJ1c2VybmFtZVwiXScpLnZhbCgpLCBwYXNzd29yZH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRlbWFpbC52YWwoJGVtYWlsLnZhbCgpLnRvTG9jYWxlTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICB1c2VyTG9naW5IZWFkZXIoX2Zvcm1EYXRhKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIFB1YlN1Yi5wdWJsaXNoKENPTlNULmV2ZW50cy5VU0VSX0xPR0dFRCwgJ2xvZ2luJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbG9nT3V0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29va2llU3RvcmFnZS5yZW1vdmUoQ09OU1QuY29va2llU3RvcmFnZS50b2tlbik7XHJcbiAgICAgICAgUHViU3ViLnB1Ymxpc2goQ09OU1QuZXZlbnRzLlVTRVJfTE9HT1VUKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYmluZEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0ICRzaG93TG9naW5Cb3hCdG5JZCA9ICQoX3Nob3dMb2dpbkJveEJ0bklkKTtcclxuICAgICAgICBjb25zdCAkbG9naW5Cb3ggPSAkKF9sb2dpbkJveCk7XHJcbiAgICAgICAgY29uc3Qgb3BlbmVkQ2xhc3MgPSAnZC1ibG9jayc7XHJcbiAgICAgICAgY29uc3QgY2xvc2VDbGFzcyA9ICdkLW5vbmUnO1xyXG5cclxuICAgICAgICAkc2hvd0xvZ2luQm94QnRuSWQub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXNlbGVjdG9yQ3NzLmlzTG9naW5JbnN0YWdyYW0pIHtcclxuICAgICAgICAgICAgICAgICRsb2dpbkJveC5jc3Moeyd0b3AnOiAwLCAncmlnaHQnOiAwfSlcclxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2JnLWxpZ2h0IGJvcmRlciBtdC01IG14LWF1dG8gcG9zaXRpb24tYWJzb2x1dGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkbG9naW5Cb3guYWRkQ2xhc3Mob3BlbmVkQ2xhc3MpLnJlbW92ZUNsYXNzKGNsb3NlQ2xhc3MpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCAkYnV0dG9uU3VibWl0ID0gJChfYnV0dG9uU3VibWl0SWQpLFxyXG4gICAgICAgICAgICBjc3NWYWxpZGF0aW9uQ2xhc3MgPSAnZm9ybS12YWxpZGF0aW9uJztcclxuXHJcbiAgICAgICAgJGJ1dHRvblN1Ym1pdC5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSAkZm9ybS5nZXQoMCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IHZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoJGZvcm0pO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWxpZGF0b3IudmFsaWRhdGUoKSk7XHJcbiAgICAgICAgICAgIGlmIChmb3JtLmNoZWNrVmFsaWRpdHkoKSAmJiB2aWV3VXRpbHMuaXNFbWFpbCgkZW1haWwudmFsKCkpKSB7XHJcbiAgICAgICAgICAgICAgICBzdWJtaXRGb3JtKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBIaWdobGlnaHQgZXJyb3JzXHJcbiAgICAgICAgICAgICAgICBpZiAoZm9ybS5yZXBvcnRWYWxpZGl0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm0ucmVwb3J0VmFsaWRpdHkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICRmb3JtLmFkZENsYXNzKGNzc1ZhbGlkYXRpb25DbGFzcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLm5hdi1saW5rLmpzX2xvZ091dCcpLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgbG9nT3V0KCk7XHJcbiAgICAgICAgICAgICQoZS50YXJnZXQpLnBhcmVudCgpLmhpZGUoKTtcclxuICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSgkdGV4dEFyZWFEZXNjcmlwdGlvbiwgJ0xvZ2dlZCBvdXQnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgUHViU3ViLnN1YnNjcmliZShDT05TVC5ldmVudHMuVVNFUl9MT0dPVVQsIChtc2cpID0+IHtcclxuICAgICAgICAgICAgJChDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJOYXZMb2dpbkJ0bikuYWRkQ2xhc3Mob3BlbmVkQ2xhc3MpLnJlbW92ZUNsYXNzKGNsb3NlQ2xhc3MpOyAvLyAuc2hvdygpO1xyXG4gICAgICAgICAgICAkKENPTlNULnVpU2VsZWN0b3JzLmhlYWRlclJlZ0J0bikuYWRkQ2xhc3Mob3BlbmVkQ2xhc3MpLnJlbW92ZUNsYXNzKGNsb3NlQ2xhc3MpO1xyXG4gICAgICAgICAgICAkKCcubmF2LWxpbmsuanNfbG9nT3V0JykuYWRkQ2xhc3MoY2xvc2VDbGFzcykucmVtb3ZlQ2xhc3Mob3BlbmVkQ2xhc3MpOyAvLyAuaGlkZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RvckxvZ2luU3RhdGUgPSAnLmpzX21lc3NhZ2VfbG9nZ2VkLS10ZXh0JztcclxuICAgICAgICAgICAgJChzZWxlY3RvckxvZ2luU3RhdGUpLnRleHQoJ9CS0Ysg0LLRi9GI0LvQuCDQuNC3INCw0LrQutCw0YPQvdGC0LAnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzTG9naW5CdG5DbGljayA9ICQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCduYXYubmF2YmFyJykuZmluZCgkbG9naW5Cb3gpLmxlbmd0aDtcclxuICAgICAgICAgICAgY29uc3QgaXNBZGRJbnN0YWdyYW1CdG5DbGlja2VkID0gJChldmVudC50YXJnZXQpLmF0dHIoJ2lkJykgPT09IENPTlNULnVpU2VsZWN0b3JzLmluc3RhZ3JhbS5hZGRBY2NvdW50QnRuSWQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWlzTG9naW5CdG5DbGljayAmJiAkbG9naW5Cb3guaGFzQ2xhc3Mob3BlbmVkQ2xhc3MpICYmICFpc0FkZEluc3RhZ3JhbUJ0bkNsaWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICRsb2dpbkJveC5hZGRDbGFzcyhjbG9zZUNsYXNzKS5yZW1vdmVDbGFzcyhvcGVuZWRDbGFzcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgICAgICBiaW5kRXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0XHJcbiAgICB9O1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3MvbG9naW4tZm9ybS9sb2dpbi1mb3JtLmpzIiwiaW1wb3J0IE1ldGVvckVtb2ppIGZyb20gJ21ldGVvci1lbW9qaSc7XHJcbi8vIGltcG9ydCBxcSBmcm9tICdmaW5lLXVwbG9hZGVyJzsgLy90b2RvOiBmaW5lLXVwbG9hZGVcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3VzZXInO1xyXG5pbXBvcnQgVXNlckNvbnZlcnNhdGlvbiBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvYXBpLXVzZXItZGlyZWN0JztcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3NwaW5uZXInO1xyXG5pbXBvcnQgUHViU3ViIGZyb20gJ3B1YnN1Yi1qcyc7XHJcbmltcG9ydCB7Q09OU1R9IGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMnOyAvLyBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9wdWJzdWItanNcclxuXHJcbmNvbnN0IHRva2VuID0gVXNlci5nZXRUb2tlbigpO1xyXG5jb25zdCAkbXNnTGlzdCA9ICQoJy5tZXNzYWdlcy1saXN0Jyk7XHJcbmxldCB1cGRhdGVJbnRlcnZhbCA9ICcnO1xyXG5sZXQgaW50ZXJ2YWxJZCA9IGZhbHNlO1xyXG5cclxuZnVuY3Rpb24gaXNJbk1lc3NhZ2VQYWdlKCkge1xyXG4gICAgY29uc3QgJG1zZ0xpc3QgPSAkKCcubWVzc2FnZXMtbGlzdCcpO1xyXG4gICAgY29uc3QgJHVzZXJMaXN0ID0gJCgnLm1lc3NhZ2VzLXVzZXItbGlzdCcpO1xyXG4gICAgcmV0dXJuICEhJG1zZ0xpc3QubGVuZ3RoICYmICEhJHVzZXJMaXN0Lmxlbmd0aDtcclxufVxyXG4kKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XHJcbiAgICBpZiAoIWlzSW5NZXNzYWdlUGFnZSgpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXHJcbiAgICBjb25zdCBtID0gbmV3IE1ldGVvckVtb2ppKCk7XHJcbiAgICBjb25zdCAkcGlja2VyID0gJCgndGV4dGFyZWFbZGF0YS1tZXRlb3ItZW1vamk9XCJ0cnVlXCJdIH4gZGl2Jyk7XHJcbiAgICBjb25zdCBzdHlsZSA9ICRwaWNrZXIuYXR0cignc3R5bGUnKTtcclxuICAgIGNvbnN0IHN0eWxlTmV3ID0gc3R5bGUucmVwbGFjZSgndG9wOiAzMHB4OycsICd0b3A6IC0yMTBweDsnKTtcclxuICAgICRwaWNrZXIuYXR0cignc3R5bGUnLCBzdHlsZU5ldyk7XHJcblxyXG4gICAgLypcclxuICAgIC8vdG9kbzogZmluZS11cGxvYWRlXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcclxuICAgIGNvbnN0IHJlc3RyaWN0ZWRVcGxvYWRlciA9IG5ldyBxcS5GaW5lVXBsb2FkZXIoe1xyXG4gICAgICAgIGVsZW1lbnQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaW5lLXVwbG9hZGVyLXZhbGlkYXRpb24nKSxcclxuICAgICAgICB0ZW1wbGF0ZTogJ3FxLXRlbXBsYXRlLXZhbGlkYXRpb24nLFxyXG4gICAgICAgIHJlcXVlc3Q6IHtcclxuICAgICAgICAgICAgZW5kcG9pbnQ6ICcvc2VydmVyL3VwbG9hZHMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0aHVtYm5haWxzOiB7XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyczoge1xyXG4gICAgICAgICAgICAgICAgd2FpdGluZ1BhdGg6ICdodHRwczovL2ZpbmV1cGxvYWRlci5jb20vc291cmNlL3BsYWNlaG9sZGVycy93YWl0aW5nLWdlbmVyaWMucG5nJywgLy8gJy9zb3VyY2UvcGxhY2Vob2xkZXJzL3dhaXRpbmctZ2VuZXJpYy5wbmcnLFxyXG4gICAgICAgICAgICAgICAgbm90QXZhaWxhYmxlUGF0aDogJ2h0dHBzOi8vZmluZXVwbG9hZGVyLmNvbS9zZXJ2ZXIvd2FpdGluZy1nZW5lcmljLnBuZycgLy8gJy9zb3VyY2UvcGxhY2Vob2xkZXJzL25vdF9hdmFpbGFibGUtZ2VuZXJpYy5wbmcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgICAgICAgYWxsb3dlZEV4dGVuc2lvbnM6IFsnanBlZycsICdqcGcnLCAndHh0J10sXHJcbiAgICAgICAgICAgIGl0ZW1MaW1pdDogMyxcclxuICAgICAgICAgICAgc2l6ZUxpbWl0OiA1MDAgKiAxMDI0XHJcbiAgICAgICAgfVxyXG4gICAgfSk7Ki9cclxufSk7XHJcblxyXG4vLyBtZXNzYWdlcy1saXN0XHJcbmZ1bmN0aW9uIGZpbGxMaXN0KCRsaXN0LCBkYXRhQXJyYXksIGlzQXBwZW50UHJldk1zZykge1xyXG4gICAgY29uc3QgaXRlbXMgPSBkYXRhQXJyYXk7XHJcbiAgICBjb25zdCBjTGlzdCA9ICRsaXN0O1xyXG4gICAgLy8gY29uc3QgZGVmYXVsdEF2YXRhclNyYyA9ICdodHRwczovL2kuaW1ndXIuY29tL2pOTlQ0TEUucG5nJztcclxuICAgIGNvbnN0IGluc2VydE1zZyA9ICh2YWx1ZSwgdHlwZSwgY3NzQ2xzKSA9PiB7XHJcbiAgICAgICAgbGV0IHN0ciA9ICcnO1xyXG4gICAgICAgIHN3aXRjaCAodHlwZS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3Bob3RvJzpcclxuICAgICAgICAgICAgICAgIHN0ciA9IGA8ZGl2IGNsYXNzPVwiY2hhdC1pbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7dmFsdWV9XCIgYWx0PVwiQ29udGVudCBJbWFnZVwiIGNsYXNzPVwiY29udGVudC1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+YDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdsaW5rJzpcclxuICAgICAgICAgICAgICAgIHN0ciA9IGA8ZGl2IGNsYXNzPVwiY2hhdC1pbWdcIj5cclxuICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIke3ZhbHVlfVwiPiR7dmFsdWV9PC9hPmA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDogc3RyID0gYDxkaXYgY2xhc3M9XCJjaGF0LXRleHRcIiA+JHt2YWx1ZX08L2Rpdj5gO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RyO1xyXG4gICAgfTtcclxuICAgIGlmIChpc0FwcGVudFByZXZNc2cpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnaXNBcHBlbnRQcmV2TXNnIHRvJywgY0xpc3QpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjTGlzdC5lbXB0eSgpLmFkZENsYXNzKCdib3JkZXItbGlnaHQtY29sb3InKTtcclxuICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBpdGVtO1xyXG4gICAgICAgICAgICAvLyBjb25zdCBjaGVja3BvaW50ID0gaXRlbS5jaGVja3BvaW50IHx8IGl0ZW07XHJcblxyXG4gICAgICAgICAgICBpZiAobWVzc2FnZS5zaWRlLnRvTG93ZXJDYXNlKCkgPT09ICdsZWZ0Jykge1xyXG4gICAgICAgICAgICAgICAgJChgPGxpIGNsYXNzPVwiY2hhdC1pdGVtIGNoYXQtaXRlbS1sZWZ0IGNvbCBmbGV4LWNvbHVtbi1yZXZlcnNlXCIgdmFsdWU9XCIke21lc3NhZ2UudmFsdWV9XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAkeyhtZXNzYWdlWydwcm9maWxlX3BpY191cmwnXSlcclxuICAgICAgICAgICAgICAgICAgICA/IGA8ZGl2IGNsYXNzPVwiY2hhdC1pbWctYm94XCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke21lc3NhZ2VbJ3Byb2ZpbGVfcGljX3VybCddfVwiIGFsdD1cIlVzZXIgQXZhdGFyXCIgY2xhc3M9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2hhdC11c2VybmFtZSB0ZXh0LW11dGVkXCI+JHttZXNzYWdlLnVzZXJuYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAke2luc2VydE1zZyhtZXNzYWdlLnZhbHVlLCBtZXNzYWdlLnR5cGUpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiY2hhdC10aW1lLXRleHRcIj4ke1VzZXJDb252ZXJzYXRpb24uZ2V0Rm9ybWF0dGVkRGF0ZVV0aWwobWVzc2FnZS50aW1lc3RhbXApfTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5gKS5hcHBlbmRUbyhjTGlzdCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKGA8bGkgY2xhc3M9XCJjaGF0LWl0ZW0gY2hhdC1pdGVtLXJpZ2h0IGNvbCBmbGV4LWNvbHVtbi1yZXZlcnNlXCIgdmFsdWU9XCIke21lc3NhZ2UudmFsdWV9XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAke2luc2VydE1zZyhtZXNzYWdlLnZhbHVlLCBtZXNzYWdlLnR5cGUpfVxyXG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInB1bGwtcmlnaHQgY2hhdC10aW1lLXRleHRcIj4ke1VzZXJDb252ZXJzYXRpb24uZ2V0Rm9ybWF0dGVkRGF0ZVV0aWwobWVzc2FnZS50aW1lc3RhbXApfTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+YCkuYXBwZW5kVG8oY0xpc3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gYWRkUGFnaW5hdGlvbigkd3JhcHBlciwgcGFnaW5hdGlvbikge1xyXG4gICAgY29uc3QgY29udmVyc2F0aW9uSWQgPSBwYWdpbmF0aW9uLnByZXZfY3Vyc29yO1xyXG4gICAgY29uc3QgJGJ1dHRvbiA9ICQoYDxidXR0b24gY2xhc3M9XCJidG4gbG9hZC1tb3JlIGQtZmxleCBwb3NpdGlvbi1hYnNvbHV0ZVwiIHN0eWxlPVwidG9wOiAtNDJweDtcIiBcclxuICAgICAgICBkYXRhLWN1cnNvcj1cIiR7Y29udmVyc2F0aW9uSWR9XCI+0LXRidC1INC00LDQstCw0LkhPC9idXR0b24+YCk7XHJcblxyXG4gICAgaWYgKCEkd3JhcHBlci5jbG9zZXN0KCcubWVzc2FnZXMtbGlzdC1ib3gnKS5maW5kKCcubG9hZC1tb3JlJykubGVuZ3RoKSB7XHJcbiAgICAgICAgJGJ1dHRvbi5pbnNlcnRCZWZvcmUoJHdyYXBwZXIpLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJEYXRhID0gJCgnLm1lc3NhZ2VzLWxpc3QnKS5kYXRhKCdjb252ZXJzYXRpb24nKTtcclxuICAgICAgICAgICAgY29uc3Qge3VzZXJuYW1lfSA9IHVzZXJEYXRhO1xyXG4gICAgICAgICAgICBTcGlubmVyLnN0YXJ0QnV0dG9uU3Bpbm5lcigkYnV0dG9uKTtcclxuICAgICAgICAgICAgVXNlckNvbnZlcnNhdGlvbi5nZXRNZXRhZGF0YURldGFpbENvbnZlcnNhdGlvbih0b2tlbiwge3VzZXJuYW1lLCBjb252ZXJzYXRpb25JZH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlY2VpdmUgb2xkIG1zZycsIHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICBTcGlubmVyLnN0b3BCdXR0b25TcGlubmVyKCRidXR0b24pO1xyXG4gICAgICAgICAgICAgICAgZmlsbExpc3QoJG1zZ0xpc3QsIHJlc3VsdC5kYXRhLm1ldGEubWVzc2FnZXMsICdhcHBlbnRQcmV2TXNnJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbi8vIG1lc3NhZ2VzLXVzZXItbGlzdFxyXG5mdW5jdGlvbiBmaWxsVXNlckxpc3QoJGxpc3QsIGRhdGFBcnJheSkge1xyXG4gICAgY29uc3QgaXRlbXMgPSBkYXRhQXJyYXkubWV0YTtcclxuICAgIGNvbnN0IGNMaXN0ID0gJGxpc3Q7XHJcbiAgICBjb25zdCBjb252ZXJzYXRpb25EZXRhaWwgPSBmdW5jdGlvbihpdGVtcykge1xyXG4gICAgICAgIGxldCB0cGwgPSAnJztcclxuICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICB0cGwgKz0gYDxpbWcgc3JjPVwiJHtpdGVtWydwcm9maWxlX3BpY191cmwnXX1cIiBjbGFzcz1cIm1lZGlhLXBob3RvIG1yLTEgbWVkaWEtcGhvdG8tLWdyb3VwXCIgc3R5bGU9XCJ3aWR0aDogMjRweDtcIj5gO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdHBsICs9IGA8aW1nIHNyYz1cIiR7aXRlbVsncHJvZmlsZV9waWNfdXJsJ119XCIgY2xhc3M9XCJtZWRpYS1waG90byBtci0xXCIgc3R5bGU9XCJ3aWR0aDogMjRweDtcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7aXRlbS51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgIDwvaDU+YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChpdGVtcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIHRwbCArPSAnPGg1IGNsYXNzPVwidGl0bGVcIj7Qk9GA0YPQv9C+0LLQvtC5INGH0LDRgjwvaDU+JztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRwbDtcclxuICAgIH07XHJcbiAgICBjb25zdCBhZGRDb252ZXJzYXRpb25zID0gZnVuY3Rpb24oY29udmVyc2F0aW9ucykge1xyXG4gICAgICAgIGxldCB0cGwgPSAnJztcclxuICAgICAgICBjb252ZXJzYXRpb25zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgdHBsICs9IGA8ZGl2IGNsYXNzPVwibWVkaWEgcC0xXCIgZGF0YS1jb252ZXJzYXRpb24taWQ9XCIke2l0ZW0uaWR9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtjb252ZXJzYXRpb25EZXRhaWwoaXRlbS50byl9XHJcbiAgICAgICAgICAgICAgICAgICAgJHsoaXRlbVsnbGFzdF9tZXNzYWdlJ10gJiYgKHBhcnNlSW50KGl0ZW1bJ2xhc3RfbWVzc2FnZSddLmxlbmd0aCwgMTApKSA+IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYDxwIGNsYXNzPVwic3VtbWFyeSAke2l0ZW1bJ2lzX3VucmVhZCddID8gJ2ZvbnQtd2VpZ2h0LWJvbGQnIDogJ3RleHQtbXV0ZWQnfVwiPiR7aXRlbVsnbGFzdF9tZXNzYWdlJ119PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke2l0ZW1bJ2lzX3VucmVhZCddID8gJzxzcGFuIGNsYXNzPVwic3VtbWFyeS1kb3RcIj48L3NwYW4+JyA6ICcnfWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+YDtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdHBsO1xyXG4gICAgfTtcclxuICAgIGNMaXN0LmVtcHR5KCkuYWRkQ2xhc3MoJ2JvcmRlci1saWdodC1jb2xvcicpO1xyXG4gICAgLy8gdG9kbzogZml4IGhhcmQtY29kZSAgaW1nIHNyYz1cImh0dHBzOi8vaS5pbWd1ci5jb20vak5OVDRMRS5wbmdcIlxyXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaWR4KSA9PiB7XHJcbiAgICAgICAgJChgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI2NvbGxhcHNlLSR7aWR4fVwiIGRhdGEtdXNlcm5hbWU9XCIke2l0ZW0udXNlcm5hbWV9XCIgXHJcbiAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwidHJ1ZVwiIGFyaWEtY29udHJvbHM9XCJjb2xsYXBzZS0ke2lkeH1cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhXCIgaWQ9XCJoZWFkaW5nLSR7aWR4fVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1yLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaS5pbWd1ci5jb20vak5OVDRMRS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWVkaWEtcGhvdG9cIj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICR7KGl0ZW1bJ3VucmVhZF9jb252ZXJzYXRpb25zJ10gPiAwKSA/IGA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLXNlY29uZGFyeSBwb3NpdGlvbi1hYnNvbHV0ZSBwLTJcIj4ke2l0ZW1bJ3VucmVhZF9jb252ZXJzYXRpb25zJ119PC9zcGFuPmAgOiAnJ31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHtpdGVtLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb2xsYXBzZS0ke2lkeH1cIiBjbGFzcz1cImNvbGxhcHNlXCIgYXJpYS1sYWJlbGxlZGJ5PVwiaGVhZGluZy0ke2lkeH1cIiBkYXRhLXBhcmVudD1cIiNhY2NvcmRpb25cIj5cclxuICAgICAgICAgICAgICAgICR7YWRkQ29udmVyc2F0aW9ucyhpdGVtLmNvbnZlcnNhdGlvbnMsIGlkeCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPmApLmFwcGVuZFRvKGNMaXN0KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBbmRGaWxsVXNlckxpc3QoaXNBY3RpdmVGaXJzdCkge1xyXG4gICAgY29uc3QgJHVzZXJMaXN0ID0gJCgnLm1lc3NhZ2VzLXVzZXItbGlzdCcpO1xyXG4gICAgY29uc3QgbWV0YWRhdGEgPSBVc2VyQ29udmVyc2F0aW9uLmdldE1ldGFkYXRhKHRva2VuKTtcclxuICAgIGxldCBwcmV2QWN0aXZlRGlhbG9nSWQgPSAnJztcclxuICAgIGlmICghaXNBY3RpdmVGaXJzdCkge1xyXG4gICAgICAgIHByZXZBY3RpdmVEaWFsb2dJZCA9ICR1c2VyTGlzdC5maW5kKCdsaSAuY29sbGFwc2Uuc2hvdycpLmF0dHIoJ2lkJyk7XHJcbiAgICB9XHJcbiAgICBtZXRhZGF0YS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAoIXJlc3VsdC5kYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzdWx0LmRhdGEubWV0YS5zb3J0KChhLCBiKSA9PiBhWyd1c2VybmFtZSddLmxvY2FsZUNvbXBhcmUoYlsndXNlcm5hbWUnXSkpO1xyXG4gICAgICAgIGZpbGxVc2VyTGlzdCgkdXNlckxpc3QsIHJlc3VsdC5kYXRhKTtcclxuICAgICAgICBpZiAocmVzdWx0LmRhdGEuc2V0dGluZ3MgJiYgcmVzdWx0LmRhdGEuc2V0dGluZ3MuaW52b2tlX2luX21pbGxpcykge1xyXG4gICAgICAgICAgICB1cGRhdGVJbnRlcnZhbCA9IHJlc3VsdC5kYXRhLnNldHRpbmdzLmludm9rZV9pbl9taWxsaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc0FjdGl2ZUZpcnN0KSB7XHJcbiAgICAgICAgICAgICR1c2VyTGlzdC5maW5kKCdsaTpmaXJzdC1jaGlsZCAuY29sbGFwc2UnKS5hZGRDbGFzcygnc2hvdycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0dHQnLCBwcmV2QWN0aXZlRGlhbG9nSWQpO1xyXG4gICAgICAgICAgICAkKGAjJHtwcmV2QWN0aXZlRGlhbG9nSWR9YCkuYWRkQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QW5kRmlsbENvbnZlcnNhdGlvbih1c2VybmFtZSwgY29udmVyc2F0aW9uSWQsIGlzU2Nyb2xsRG93bikge1xyXG4gICAgVXNlckNvbnZlcnNhdGlvbi5nZXRNZXRhZGF0YURldGFpbENvbnZlcnNhdGlvbih0b2tlbiwge3VzZXJuYW1lLCBjb252ZXJzYXRpb25JZH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGZpbGxMaXN0KCRtc2dMaXN0LCByZXN1bHQuZGF0YS5tZXRhLm1lc3NhZ2VzKTtcclxuICAgICAgICBpZiAocmVzdWx0LmRhdGEubWV0YS5wYWdpbmF0aW9uKSB7XHJcbiAgICAgICAgICAgIGFkZFBhZ2luYXRpb24oJG1zZ0xpc3QsIHJlc3VsdC5kYXRhLm1ldGEucGFnaW5hdGlvbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnLm1lc3NhZ2VzLWxpc3QtYm94JykuZmluZCgnLmxvYWQtbW9yZScpLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBTcGlubmVyLnJlbW92ZSgpO1xyXG4gICAgICAgICQoJy5qc19zZW5kLW1lc3NhZ2UtYm94JykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICQoJy5tZXNzYWdlcy1saXN0JykuYXR0cignZGF0YS1jb252ZXJzYXRpb24nLCBKU09OLnN0cmluZ2lmeSh7dXNlcm5hbWUsIGNvbnZlcnNhdGlvbklkfSkpO1xyXG5cclxuICAgICAgICBpZiAoaXNTY3JvbGxEb3duKSB7XHJcbiAgICAgICAgICAgICRtc2dMaXN0LmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAkbXNnTGlzdFswXS5zY3JvbGxIZWlnaHQgLSAkbXNnTGlzdFswXS5jbGllbnRIZWlnaHRcclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZEhhbmRsZXJzKCkge1xyXG4gICAgbGV0IGNvbnZlcnNhdGlvbklkID0gJyc7XHJcblxyXG4gICAgJCgnI3NlbmRNZXNzYWdlQnV0dG9uJykub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCAkdGV4dEFyZWEgPSAkKCcjc2VuZE1lc3NhZ2VUZXh0QXJlYScpO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gJHRleHRBcmVhLnZhbCgpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJEYXRhID0gJCgnLm1lc3NhZ2VzLWxpc3QnKS5kYXRhKCdjb252ZXJzYXRpb24nKTtcclxuICAgICAgICBjb25zdCB7dXNlcm5hbWUsIGNvbnZlcnNhdGlvbklkfSA9IHVzZXJEYXRhO1xyXG4gICAgICAgIFNwaW5uZXIuYWRkKCQoZS50YXJnZXQpLCAnc3Bpbm5lci1ib3gtLXNlbmRNc2cnKTtcclxuICAgICAgICBVc2VyQ29udmVyc2F0aW9uLnBvc3RNZXRhZGF0YURldGFpbENvbnZlcnNhdGlvbih0b2tlbiwge3VzZXJuYW1lLCBjb252ZXJzYXRpb25JZCwgdmFsdWV9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuc3RhdHVzICYmIHJlc3VsdC5zdGF0dXMuc3RhdGUgPT09ICdvaycpIHtcclxuICAgICAgICAgICAgICAgIGdldEFuZEZpbGxDb252ZXJzYXRpb24odXNlcm5hbWUsIGNvbnZlcnNhdGlvbklkKTtcclxuICAgICAgICAgICAgICAgICR0ZXh0QXJlYS52YWwoJycpO1xyXG4gICAgICAgICAgICAgICAgU3Bpbm5lci5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIFB1YlN1Yi5wdWJsaXNoKENPTlNULmV2ZW50cy5tZXNzYWdlcy5SRUNJRVZFX05FV19NRVNTQUdFLCB7dXNlcm5hbWUsIGNvbnZlcnNhdGlvbklkLCB2YWx1ZSwgcmVzdWx0fSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5saXN0LWdyb3VwLWl0ZW0gLmNvbGxhcHNlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcubGlzdC1ncm91cC1pdGVtJykuZGF0YSgndXNlcm5hbWUnKTtcclxuICAgICAgICBjb252ZXJzYXRpb25JZCA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5tZWRpYScpLmRhdGEoJ2NvbnZlcnNhdGlvbi1pZCcpO1xyXG4gICAgICAgIFNwaW5uZXIuYWRkKCQoJyNtYWluQ2hhdFBhcnQnKSwgJ215LTUgcHktNScpO1xyXG4gICAgICAgIGdldEFuZEZpbGxDb252ZXJzYXRpb24odXNlcm5hbWUsIGNvbnZlcnNhdGlvbklkLCAnaXNTY3JvbGxEb3duJyk7XHJcbiAgICAgICAgdXBkYXRlSW50ZXJ2YWwgPSAodXBkYXRlSW50ZXJ2YWwgPiA2MDAwKSA/IHVwZGF0ZUludGVydmFsIDogOTk5OTk5NjAwMDtcclxuICAgICAgICAvLyByZXNlbmQgcmVxdWVzdFxyXG4gICAgICAgIGlmIChpbnRlcnZhbElkKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGludGVydmFsSWQsIGNvbnZlcnNhdGlvbklkKTtcclxuICAgICAgICAgICAgZ2V0QW5kRmlsbENvbnZlcnNhdGlvbih1c2VybmFtZSwgY29udmVyc2F0aW9uSWQpO1xyXG4gICAgICAgICAgICBnZXRBbmRGaWxsVXNlckxpc3QoKTtcclxuICAgICAgICB9LCB1cGRhdGVJbnRlcnZhbCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBQdWJTdWIuc3Vic2NyaWJlKENPTlNULmV2ZW50cy5tZXNzYWdlcy5SRUNJRVZFX05FV19NRVNTQUdFLCAoZXZlbnROYW1lLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc3Qge3VzZXJuYW1lLCBjb252ZXJzYXRpb25JZCwgdmFsdWUsIHJlc3VsdEZyb21TZXJ2ZXJ9ID0gZGF0YTtcclxuICAgICAgICBjb25zdCAkZGlhbG9nID0gJChgLm1lc3NhZ2VzLXVzZXItbGlzdCAubGlzdC1ncm91cC1pdGVtW2RhdGEtdXNlcm5hbWU9XCIke3VzZXJuYW1lfVwiXSBkaXZbZGF0YS1jb252ZXJzYXRpb24taWQ9XCIke2NvbnZlcnNhdGlvbklkfVwiXWApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzZXQgdmFsIGZyb20gdGV4dC1hcmVhJywgdmFsdWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXN1bHRGcm9tU2VydmVyOiAnLCByZXN1bHRGcm9tU2VydmVyKTtcclxuICAgICAgICAkZGlhbG9nLmZpbmQoJy5zdW1tYXJ5JykudGV4dCh2YWx1ZSk7XHJcblxyXG4gICAgICAgIC8vIG1ldGFkYXRhLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBmaWxsVXNlckxpc3QoJHVzZXJMaXN0LCByZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgLy8gICAgIGlmIChyZXN1bHQuZGF0YS5zZXR0aW5ncyAmJiByZXN1bHQuZGF0YS5zZXR0aW5ncy5pbnZva2VfaW5fbWlsbGlzKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB1cGRhdGVJbnRlcnZhbCA9IHJlc3VsdC5kYXRhLnNldHRpbmdzLmludm9rZV9pbl9taWxsaXM7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIC8vIGNoZWNrIHdlIGFyZSBpbiBjb3JyZWN0IHBhZ2UgKG1lc3NhZ2VzKVxyXG4gICAgaWYgKCFpc0luTWVzc2FnZVBhZ2UoKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbmRGaWxsVXNlckxpc3QoJ3NldEFjdGl2ZUZpcnN0Jyk7XHJcbiAgICBhZGRIYW5kbGVycygpO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3MvbWVzc2FnZXMvbWVzc2FnZXMuanMiLCIvLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgUHViU3ViIGZyb20gJ3B1YnN1Yi1qcyc7IC8vIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3B1YnN1Yi1qc1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdXNlcic7XHJcbmltcG9ydCBjb29raWVTdG9yYWdlIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb29raWUnO1xyXG5pbXBvcnQge0NPTlNUfSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29uc3RzJztcclxuaW1wb3J0IHZpZXdVdGlscyBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdmlldyc7XHJcblxyXG5jb25zdCBzZWxlY3RvckNscyA9IHtcclxuICAgIGZvcm06ICcuYXV0aC5yZWdpc3RlciAuZm9ybS1zaWduaW4nLFxyXG4gICAgc3VibWl0QnRuOiAnW3R5cGU9XCJzdWJtaXRcIl0nXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZ2lzdGVyRm9ybSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnVzZXIgPSBVc2VyO1xyXG4gICAgICAgIHRoaXMuJGZvcm0gPSAkKHNlbGVjdG9yQ2xzLmZvcm0pO1xyXG4gICAgICAgIHRoaXMuJGVtYWlsID0gdGhpcy4kZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwibWFpbFwiXScpO1xyXG4gICAgICAgIHRoaXMuJHRleHRBcmVhRGVzY3JpcHRpb24gPSAkKCcjZGVzY3JpcHRpb24nKTtcclxuICAgICAgICB0aGlzLmZvcm1EYXRhID0geydlbWFpbCc6ICd0ZXN0MV9lbWFpbEBtLnJ1JywgJ3Bhc3N3b3JkJzogJ3Bhc3N3b3JkJ307XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBpZiAoJCgnLmF1dGgucmVnaXN0ZXInKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN1Ym1pdEZvcm0oZm9ybURhdGFPYmopIHtcclxuICAgICAgICBjb25zdCBlbWFpbCA9IHRoaXMuJGVtYWlsLnZhbCgpO1xyXG4gICAgICAgIGNvbnN0ICRwYXNzd29yZCA9IHRoaXMuJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cInBhc3NcIl0nKSxcclxuICAgICAgICAgICAgJHBhc3N3b3JkQ29uZmlybSA9IHRoaXMuJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cInBhc3MtY29uZmlybVwiXScpLFxyXG4gICAgICAgICAgICBwYXNzd29yZCA9IHRoaXMuJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cInBhc3NcIl0nKS52YWwoKSxcclxuICAgICAgICAgICAgcGFzc3dvcmRDb25maXJtID0gdGhpcy4kZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwicGFzcy1jb25maXJtXCJdJykudmFsKCk7XHJcblxyXG4gICAgICAgIGlmIChwYXNzd29yZENvbmZpcm0gIT09IHBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgICRwYXNzd29yZC5hZGRDbGFzcygnaW5wdXQtZXJyb3InKTtcclxuICAgICAgICAgICAgJHBhc3N3b3JkQ29uZmlybS5hZGRDbGFzcygnaW5wdXQtZXJyb3InKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLiRlbWFpbC52YWwodGhpcy4kZW1haWwudmFsKCkudG9Mb2NhbGVMb3dlckNhc2UoKSk7XHJcbiAgICAgICAgdGhpcy5mb3JtRGF0YSA9IGZvcm1EYXRhT2JqIHx8IHtlbWFpbCwgcGFzc3dvcmR9O1xyXG5cclxuICAgICAgICB0aGlzLnVzZXIucmVnaXN0ZXIodGhpcy5mb3JtRGF0YSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5kYXRhICYmIHJlc3VsdC5kYXRhLnRva2VuKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNhdmUgdGhlIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBjb29raWVTdG9yYWdlLnNldChDT05TVC5jb29raWVTdG9yYWdlLmVtYWlsQ29uZmlybWVkLCAnZmFsc2UnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29va2llU3RvcmFnZS5zZXQoQ09OU1QuY29va2llU3RvcmFnZS50b2tlbiwgcmVzdWx0LmRhdGEudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXF1ZXN0IHN1Y2NlZWRlZCB3aXRoIEpTT04gcmVzcG9uc2UnLCByZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIFB1YlN1Yi5wdWJsaXNoKENPTlNULmV2ZW50cy5VU0VSX0xPR0dFRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSh0aGlzLiR0ZXh0QXJlYURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLm1lc3NhZ2UgfHwgJ1JlZ2lzdGVyIGFuZCBMb2dpbiBzdWNjc2VzcycpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKHRoaXMuJHRleHRBcmVhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMubWVzc2FnZSB8fCAnbm8gcmVzdWx0LmRhdGEgZm91bmQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UodGhpcy4kdGV4dEFyZWFEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5zdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmxvZ2luLWJveCcpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVxdWVzdCBmYWlsZWQnLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKHRoaXMuJHRleHRBcmVhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZG8gc29tZXRoaW5nJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcbiAgICAgICAgY29uc3QgcmVnaXN0ZXJCb3ggPSBDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJSZWdCb3g7IC8vICduYXYgLnJlZ2lzdGVyLWJveCc7XHJcbiAgICAgICAgY29uc3Qgb3BlbmVkQ2xhc3MgPSAnZC1ibG9jayc7XHJcbiAgICAgICAgY29uc3QgY2xvc2VDbGFzcyA9ICdkLW5vbmUnO1xyXG4gICAgICAgIGNvbnN0ICRidG4gPSAkKHNlbGVjdG9yQ2xzLnN1Ym1pdEJ0biksXHJcbiAgICAgICAgICAgIGNzc1ZhbGlkYXRpb25DbGFzcyA9ICdmb3JtLXZhbGlkYXRpb24nO1xyXG5cclxuICAgICAgICAkYnRuLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSB0aGlzLiRmb3JtLmdldCgwKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCEkYnRuLmlzKCc6ZGlzYWJsZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZvcm0uY2hlY2tWYWxpZGl0eSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gJGJ0bi5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0Rm9ybSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBIaWdobGlnaHQgZXJyb3JzXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm0ucmVwb3J0VmFsaWRpdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRmb3JtLmFkZENsYXNzKGNzc1ZhbGlkYXRpb25DbGFzcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzUmVnQnRuQ2xpY2sgPSAkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnbmF2Lm5hdmJhcicpLmZpbmQoJy5yZWdpc3Rlci1ib3gnKS5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWlzUmVnQnRuQ2xpY2sgJiYgJChyZWdpc3RlckJveCkuaGFzQ2xhc3Mob3BlbmVkQ2xhc3MpKSB7XHJcbiAgICAgICAgICAgICAgICAkKHJlZ2lzdGVyQm94KS5hZGRDbGFzcyhjbG9zZUNsYXNzKS5yZW1vdmVDbGFzcyhvcGVuZWRDbGFzcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL3JlZ2lzdGVyLWZvcm0vcmVnaXN0ZXItZm9ybS5qcyIsIi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCB7Q09OU1R9IGZyb20gJy4vY29uc3RzJztcclxuaW1wb3J0IE5ldHdvcmsgZnJvbSAnLi9uZXR3b3JrJztcclxuaW1wb3J0IENvb2tpZVN0b3JhZ2UgZnJvbSAnLi9jb29raWUnO1xyXG5cclxuY2xhc3MgVXNlckNvbnZlcnNhdGlvbiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5uZXR3b3JrID0gbmV3IE5ldHdvcmsoKTtcclxuICAgICAgICB0aGlzLmNvb2tpZVN0b3JhZ2UgPSBDb29raWVTdG9yYWdlO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ1Bvc3QgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBpc0xvZ2dlZEluKCkge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMuZ2V0VG9rZW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0VtYWlsQ29uZmlybWVkKCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5jb29raWVTdG9yYWdlLmdldChDT05TVC5jb29raWVTdG9yYWdlLmVtYWlsQ29uZmlybWVkKSA9PT0gJ2NvbmZpcm1lZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRva2VuKCkge1xyXG4gICAgICAgIGNvbnN0IGNvb2tpZVRva2VuID0gdGhpcy5jb29raWVTdG9yYWdlLmdldChDT05TVC5jb29raWVTdG9yYWdlLnRva2VuKTtcclxuICAgICAgICByZXR1cm4gY29va2llVG9rZW47XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWV0YWRhdGEodG9rZW4sIGNiRXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KGAke0NPTlNULmdldFBhdGgoJ2luc3RhZ3JhbURpcmVjdF9nZXRNZXRhRGF0YScpfWAsIHtoZWFkZXJzOiB7dG9rZW59fSwgY2JFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWV0YWRhdGFEZXRhaWxDb252ZXJzYXRpb24odG9rZW4sIGRldGFpbHMsIGNiRXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KGAke0NPTlNULmdldFBhdGgoJ2luc3RhZ3JhbURpcmVjdF9nZXRNZXRhRGF0YScpfS8ke2RldGFpbHMudXNlcm5hbWV9LyR7ZGV0YWlscy5jb252ZXJzYXRpb25JZH1gLFxyXG4gICAgICAgICAgICB7aGVhZGVyczoge3Rva2VufX0sIGNiRXJyb3IpO1xyXG4gICAgfVxyXG4gICAgcG9zdE1ldGFkYXRhRGV0YWlsQ29udmVyc2F0aW9uKHRva2VuLCBkZXRhaWxzLCBjYkVycm9yKSB7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZyA9IHtcclxuICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdCxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyd2YWx1ZSc6IGRldGFpbHMudmFsdWV9KSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdC5oZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgJ3Rva2VuJzogdGhpcy5nZXRUb2tlbigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QoYCR7Q09OU1QuZ2V0UGF0aCgnaW5zdGFncmFtRGlyZWN0X3Bvc3RNZXNzYWdlJyl9LyR7ZGV0YWlscy51c2VybmFtZX0vJHtkZXRhaWxzLmNvbnZlcnNhdGlvbklkfS90ZXh0YCxcclxuICAgICAgICAgICAgc2V0dGluZywgY2JFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Rm9ybWF0dGVkRGF0ZVV0aWwodFN0YW1wLCBzaG93RnVsbFRpbWUpIHtcclxuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodFN0YW1wKTtcclxuXHJcbiAgICAgICAgbGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTtcclxuICAgICAgICBsZXQgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XHJcbiAgICAgICAgbGV0IGhvdXIgPSBkYXRlLmdldEhvdXJzKCk7XHJcbiAgICAgICAgbGV0IG1pbiA9IGRhdGUuZ2V0TWludXRlcygpO1xyXG4gICAgICAgIGxldCBzZWMgPSBkYXRlLmdldFNlY29uZHMoKTtcclxuXHJcbiAgICAgICAgbW9udGggPSAobW9udGggPCAxMCA/ICcwJyA6ICcnKSArIG1vbnRoO1xyXG4gICAgICAgIGRheSA9IChkYXkgPCAxMCA/ICcwJyA6ICcnKSArIGRheTtcclxuICAgICAgICBob3VyID0gKGhvdXIgPCAxMCA/ICcwJyA6ICcnKSArIGhvdXI7XHJcbiAgICAgICAgbWluID0gKG1pbiA8IDEwID8gJzAnIDogJycpICsgbWluO1xyXG4gICAgICAgIHNlYyA9IChzZWMgPCAxMCA/ICcwJyA6ICcnKSArIHNlYztcclxuXHJcbiAgICAgICAgbGV0IHN0ciA9ICcnO1xyXG4gICAgICAgIGlmICghc2hvd0Z1bGxUaW1lKSB7XHJcbiAgICAgICAgICAgIHN0ciA9IGAke2hvdXJ9OiR7bWlufWA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3RyID0gYCR7ZGF0ZS5nZXRGdWxsWWVhcigpfS0ke21vbnRofS0ke2RheX1fJHtob3VyfToke21pbn06JHtzZWN9YDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzdHI7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5sZXQgdXNlckluc3RhbmNlID0gbnVsbDtcclxuXHJcbmlmICghdXNlckluc3RhbmNlKSB7XHJcbiAgICB1c2VySW5zdGFuY2UgPSBuZXcgVXNlckNvbnZlcnNhdGlvbigpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VySW5zdGFuY2U7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tb24vanMtc2VydmljZXMvYXBpLXVzZXItZGlyZWN0LmpzIiwiLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuLy8gaW1wb3J0IHtDT05TVH0gZnJvbSAnLi9jb25zdHMnO1xyXG4vLyBpbXBvcnQgTmV0d29yayBmcm9tICcuL25ldHdvcmsnO1xyXG4vLyBpbXBvcnQgQ29va2llU3RvcmFnZSBmcm9tICcuL2Nvb2tpZSc7XHJcbi8vIGltcG9ydCBQdWJTdWIgZnJvbSAncHVic3ViLWpzJzsgLy8gaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvcHVic3ViLWpzXHJcblxyXG4vLyBjb25zdCBTUElOTkVSX0JBU0VfVEVNUEFMQVRFID0gJ2pzL3VpL3RwbC9zcGlubmVyLmhicyc7XHJcbmNvbnN0IGNsYXNzZXMgPSB7XHJcbiAgICBpbmxpbmU6ICdnbG9iYWwtaW5saW5lLXNwaW5uZXInLFxyXG4gICAgb3ZlcmxheTogJ2dsb2JhbC1vdmVybGF5LXNwaW5uZXInLFxyXG4gICAgZml4ZWQ6ICdnbG9iYWwtZml4ZWQtc3Bpbm5lcicsXHJcbiAgICBidXR0b246ICdidXR0b24tLWxvYWQnXHJcbn07XHJcbi8vIGNvbnN0IGhhbmRsZWJhcnNUcGwgPSBmdW5jdGlvbiAobmFtZSwgZGF0YSwgJHRhcmdldCkge1xyXG4vLyAgICAgLy8gdmFyIGh0bWwgPSB0aGlzLmdldFRlbXBsYXRlKG5hbWUpKGRhdGEpO1xyXG4vLyAgICAgdmFyIGh0bWwgPSBIYW5kbGViYXJzLmNvbXBpbGUodGVtcGxhdGUpO1xyXG4vL1xyXG4vLyAgICAgaWYgKCR0YXJnZXQpIHtcclxuLy8gICAgICAgICAvL2ZvciBwcmV2ZW50aW5nIHhzc1xyXG4vLyAgICAgICAgICR0YXJnZXRbMF0uaW5uZXJIVE1MID0gaHRtbDtcclxuLy8gICAgIH1cclxuLy9cclxuLy8gICAgIHJldHVybiBodG1sO1xyXG4vLyB9O1xyXG4vLyBjb25zdCBoYW5kbGViYXJzID0gdGhpcy5nZXRTZXJ2aWNlKCdjb3JlLnRlbXBsYXRpbmcuaGFuZGxlYmFycycpO1xyXG5cclxuY2xhc3MgU3Bpbm5lciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoX2NmZykge1xyXG4gICAgICAgIHRoaXMuY2ZnID0gX2NmZyB8fCB7fTtcclxuICAgICAgICAvLyB0aGlzLiRkZWZhdWx0Q29udGFpbmVyID0gJCgnYm9keScpO1xyXG4gICAgICAgICQuZXh0ZW5kKGNsYXNzZXMsIHRoaXMuY2ZnLmNsYXNzZXMpO1xyXG4gICAgICAgIC8vIHRoaXMuX21lZGlhdG9yLnN1YnNjcmliZShDT05TVC5ldmVudHMuU1RPUF9GSVhFRF9TUElOTkVSLCB0aGlzLnN0b3BGaXhlZFNwaW5uZXIuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbiAgICAvLyBfbWVkaWF0b3IgPSBQdWJTdWI7XHJcblxyXG4gICAgc3RhcnQoJGVsLCBwcmV3Q2xzKSB7XHJcbiAgICAgICAgLy8gaWYgKGFkZE9yUmVtb3ZlKSB7XHJcbiAgICAgICAgLy8gICAgICQoJyNmb28nKS5hZGRDbGFzcyhjbGFzc05hbWUpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBlbHNlIHtcclxuICAgICAgICAvLyAgICAgJCgnI2ZvbycpLnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgICRlbC5maW5kKCdpJykudG9nZ2xlQ2xhc3MocHJld0NscykuYWRkQ2xhc3MoJ2ZhLXNwaW4gZmEtc3Bpbm5lcicpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3AoJGVsLCBuZXdDbHMpIHtcclxuICAgICAgICAkZWwuZmluZCgnaScpLnRvZ2dsZUNsYXNzKG5ld0NscykucmVtb3ZlQ2xhc3MoJ2ZhLXNwaW4gZmEtc3Bpbm5lcicpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZCgkZWwsIG5ld0Nscykge1xyXG4gICAgICAgIHRoaXMuJGVsID0gJGVsO1xyXG4gICAgICAgICRlbC5wcmVwZW5kKGA8ZGl2IGNsYXNzPVwic3Bpbm5lci1ib3gganVzdGlmeS1jb250ZW50LWNlbnRlciAke25ld0Nsc31cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwaW4tYW5pbWF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGRhdGEtcHJlZml4PVwiZmFyXCIgZGF0YS1pY29uPVwic3luYy1hbHRcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIGNsYXNzPVwic3ZnLWlubGluZS0tZmEgZmEtc3luYy1hbHQgZmEtdy0xNiBmYS1mdyBmYS0yeFwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTQ4My41MTUgMjguNDg1TDQzMS4zNSA4MC42NUMzODYuNDc1IDM1Ljc2NyAzMjQuNDg1IDggMjU2IDggMTIzLjIyOCA4IDE0LjgyNCAxMTIuMzM4IDguMzEgMjQzLjQ5MyA3Ljk3MSAyNTAuMzExIDEzLjQ3NSAyNTYgMjAuMzAxIDI1NmgyOC4wNDVjNi4zNTMgMCAxMS42MTMtNC45NTIgMTEuOTczLTExLjI5NEM2Ni4xNjEgMTQxLjY0OSAxNTEuNDUzIDYwIDI1NiA2MGM1NC4xNjMgMCAxMDMuMTU3IDIxLjkyMyAxMzguNjE0IDU3LjM4NmwtNTQuMTI4IDU0LjEyOWMtNy41NiA3LjU2LTIuMjA2IDIwLjQ4NSA4LjQ4NSAyMC40ODVINDkyYzYuNjI3IDAgMTItNS4zNzMgMTItMTJWMzYuOTcxYzAtMTAuNjkxLTEyLjkyNi0xNi4wNDUtMjAuNDg1LTguNDg2ek00OTEuNjk5IDI1NmgtMjguMDQ1Yy02LjM1MyAwLTExLjYxMyA0Ljk1Mi0xMS45NzMgMTEuMjk0QzQ0NS44MzkgMzcwLjM1MSAzNjAuNTQ3IDQ1MiAyNTYgNDUyYy01NC4xNjMgMC0xMDMuMTU3LTIxLjkyMy0xMzguNjE0LTU3LjM4Nmw1NC4xMjgtNTQuMTI5YzcuNTYtNy41NiAyLjIwNi0yMC40ODUtOC40ODUtMjAuNDg1SDIwYy02LjYyNyAwLTEyIDUuMzczLTEyIDEydjE0My4wMjljMCAxMC42OTEgMTIuOTI2IDE2LjA0NSAyMC40ODUgOC40ODVMODAuNjUgNDMxLjM1QzEyNS41MjUgNDc2LjIzMyAxODcuNTE2IDUwNCAyNTYgNTA0YzEzMi43NzMgMCAyNDEuMTc2LTEwNC4zMzggMjQ3LjY5LTIzNS40OTMuMzM5LTYuODE4LTUuMTY1LTEyLjUwNy0xMS45OTEtMTIuNTA3elwiIGNsYXNzPVwiXCI+PC9wYXRoPjwvc3ZnPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5gKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmUoKSB7XHJcbiAgICAgICAgdGhpcy4kZWwuZmluZCgnLnNwaW5uZXItYm94JykucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIHNwaW5uZXIgaWNvbiBvbiBidXR0b24gYmVmb3JlIHRoZSBidXR0b24gdGV4dFxyXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRlbFxyXG4gICAgICovXHJcbiAgICBzdGFydEJ1dHRvblNwaW5uZXIgPSBmdW5jdGlvbiAoJGVsLCBuZXdDbHMpIHtcclxuICAgICAgICAkZWwuYWRkQ2xhc3MoY2xhc3Nlcy5idXR0b24pO1xyXG4gICAgICAgICRlbC5wcmVwZW5kKGA8ZGl2IGNsYXNzPVwic3Bpbm5lci1ib3ggc3Bpbm5lci1ib3gtLWJ1dHRvbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHBvc2l0aW9uLXJlbGF0aXZlIHAtMCBtLTAgYmctdHJhbnNwYXJlbnQgJHtuZXdDbHN9XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGluLWFuaW1hdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBkYXRhLXByZWZpeD1cImZhclwiIGRhdGEtaWNvbj1cInN5bmMtYWx0XCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZhLWZ3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDgzLjUxNSAyOC40ODVMNDMxLjM1IDgwLjY1QzM4Ni40NzUgMzUuNzY3IDMyNC40ODUgOCAyNTYgOCAxMjMuMjI4IDggMTQuODI0IDExMi4zMzggOC4zMSAyNDMuNDkzIDcuOTcxIDI1MC4zMTEgMTMuNDc1IDI1NiAyMC4zMDEgMjU2aDI4LjA0NWM2LjM1MyAwIDExLjYxMy00Ljk1MiAxMS45NzMtMTEuMjk0QzY2LjE2MSAxNDEuNjQ5IDE1MS40NTMgNjAgMjU2IDYwYzU0LjE2MyAwIDEwMy4xNTcgMjEuOTIzIDEzOC42MTQgNTcuMzg2bC01NC4xMjggNTQuMTI5Yy03LjU2IDcuNTYtMi4yMDYgMjAuNDg1IDguNDg1IDIwLjQ4NUg0OTJjNi42MjcgMCAxMi01LjM3MyAxMi0xMlYzNi45NzFjMC0xMC42OTEtMTIuOTI2LTE2LjA0NS0yMC40ODUtOC40ODZ6TTQ5MS42OTkgMjU2aC0yOC4wNDVjLTYuMzUzIDAtMTEuNjEzIDQuOTUyLTExLjk3MyAxMS4yOTRDNDQ1LjgzOSAzNzAuMzUxIDM2MC41NDcgNDUyIDI1NiA0NTJjLTU0LjE2MyAwLTEwMy4xNTctMjEuOTIzLTEzOC42MTQtNTcuMzg2bDU0LjEyOC01NC4xMjljNy41Ni03LjU2IDIuMjA2LTIwLjQ4NS04LjQ4NS0yMC40ODVIMjBjLTYuNjI3IDAtMTIgNS4zNzMtMTIgMTJ2MTQzLjAyOWMwIDEwLjY5MSAxMi45MjYgMTYuMDQ1IDIwLjQ4NSA4LjQ4NUw4MC42NSA0MzEuMzVDMTI1LjUyNSA0NzYuMjMzIDE4Ny41MTYgNTA0IDI1NiA1MDRjMTMyLjc3MyAwIDI0MS4xNzYtMTA0LjMzOCAyNDcuNjktMjM1LjQ5My4zMzktNi44MTgtNS4xNjUtMTIuNTA3LTExLjk5MS0xMi41MDd6XCIgY2xhc3M9XCJcIj48L3BhdGg+PC9zdmc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PmApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBzcGlubmVyIGljb24gZnJvbSBidXR0b25cclxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkZWxcclxuICAgICAqL1xyXG4gICAgc3RvcEJ1dHRvblNwaW5uZXIgPSBmdW5jdGlvbiAoJGVsKSB7XHJcbiAgICAgICAgJGVsLnJlbW92ZUNsYXNzKGNsYXNzZXMuYnV0dG9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZpbmRzIHNwaW5uZXJzXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9ICRjb250YWluZXJcclxuICAgICAqIEByZXR1cm4gez9qUXVlcnl9IHNwaW5uZXJzXHJcbiAgICAgKi9cclxuICAgIC8vIF9maW5kU3Bpbm5lciA9IGZ1bmN0aW9uICh0eXBlLCAkY29udGFpbmVyKSB7XHJcbiAgICAvLyAgICAgY29uc3Qgc2VsZWN0b3IgPSAnLicgKyB0eXBlO1xyXG4gICAgLy8gICAgIGxldCAkZWwgPSB0aGlzLiRkZWZhdWx0Q29udGFpbmVyO1xyXG4gICAgLy8gICAgIGlmICgkY29udGFpbmVyKSB7XHJcbiAgICAvLyAgICAgICAgICRlbCA9ICRjb250YWluZXI7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy9cclxuICAgIC8vICAgICBpZiAoJGVsLmZpbmQoc2VsZWN0b3IpLmxlbmd0aCA+IDApIHtcclxuICAgIC8vICAgICAgICAgcmV0dXJuICRlbC5maW5kKHNlbGVjdG9yKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAkZWxcclxuICAgICAqL1xyXG4gICAgLypcclxuICAgIHN0YXJ0Q29udGVudFNwaW5uZXIgPSBmdW5jdGlvbiAoJGVsKSB7XHJcbiAgICAgICAgY29uc3QgaHRtbCA9IGhhbmRsZWJhcnNUcGwoXHJcbiAgICAgICAgICAgIFNQSU5ORVJfQkFTRV9URU1QQUxBVEUsIHtcclxuICAgICAgICAgICAgICAgIGltZ1NyYzogQ1RDLlVSTFMuV0FJVElOR19JTUFHRSxcclxuICAgICAgICAgICAgICAgICdjbGFzcyc6IGNsYXNzZXMub3ZlcmxheVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAkZWwucHJlcGVuZChodG1sKTtcclxuICAgIH07XHJcblxyXG4gICAgc3RhcnRJbmxpbmVDb250ZW50U3Bpbm5lciA9IGZ1bmN0aW9uICgkZWwpIHtcclxuICAgICAgICBjb25zdCBodG1sID0gaGFuZGxlYmFyc1RwbChcclxuICAgICAgICAgICAgU1BJTk5FUl9CQVNFX1RFTVBBTEFURSwge1xyXG4gICAgICAgICAgICAgICAgaW1nU3JjOiBDVEMuVVJMUy5XQUlUSU5HX0lNQUdFLFxyXG4gICAgICAgICAgICAgICAgJ2NsYXNzJzogY2xhc3Nlcy5pbmxpbmVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgJGVsLnByZXBlbmQoaHRtbCk7XHJcbiAgICB9O1xyXG4gICAgKi9cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0YXJ0cyBnbG9iYWwgZnVsbCBwYWdlIGZpeGVkIHNwaW5uZXJcclxuICAgICAqL1xyXG4gICAgLypcclxuICAgIHN0YXJ0Rml4ZWRTcGlubmVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IHNwaW5uZXJzID0gdGhpcy5fZmluZFNwaW5uZXIoY2xhc3Nlcy5maXhlZCk7XHJcbiAgICAgICAgaWYgKCEoQ1RDLmlzRWRpdCgpIHx8IENUQy5pc0Rlc2lnbigpKSAmJiAhc3Bpbm5lcnMpIHtcclxuICAgICAgICAgICAgY29uc3QgaHRtbCA9IGhhbmRsZWJhcnNUcGwoXHJcbiAgICAgICAgICAgICAgICBTUElOTkVSX0JBU0VfVEVNUEFMQVRFLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nU3JjOiBDVEMuVVJMUy5XQUlUSU5HX0lNQUdFLFxyXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6IGNsYXNzZXMuZml4ZWRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLiRkZWZhdWx0Q29udGFpbmVyLnByZXBlbmQoaHRtbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgICovXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9wcyBzcGlubmVyc1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAkY29udGFpbmVyXHJcbiAgICAgKi9cclxuICAgIC8vIF9zdG9wU3Bpbm5lciA9IGZ1bmN0aW9uICh0eXBlLCAkY29udGFpbmVyKSB7XHJcbiAgICAvLyAgICAgY29uc3Qgc3Bpbm5lcnMgPSB0aGlzLl9maW5kU3Bpbm5lcih0eXBlLCAkY29udGFpbmVyKTtcclxuICAgIC8vICAgICBpZiAoc3Bpbm5lcnMpIHtcclxuICAgIC8vICAgICAgICAgc3Bpbm5lcnMucmVtb3ZlKCk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gJGVsXHJcbiAgICAgKi9cclxuICAgIC8vIHN0b3BDb250ZW50U3Bpbm5lciA9IGZ1bmN0aW9uICgkZWwpIHtcclxuICAgIC8vICAgICAkZWwuZmluZCgnLicgKyBjbGFzc2VzLm92ZXJsYXkpLnJlbW92ZSgpO1xyXG4gICAgLy8gfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gJGVsXHJcbiAgICAgKi9cclxuICAgIC8vIHN0b3BJbmxpbmVDb250ZW50U3Bpbm5lciA9IGZ1bmN0aW9uICgkZWwpIHtcclxuICAgIC8vICAgICAkZWwuZmluZCgnLicgKyBjbGFzc2VzLmlubGluZSkucmVtb3ZlKCk7XHJcbiAgICAvLyB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RvcHMgZ2xvYmFsIGZ1bGwgcGFnZSBmaXhlZCBzcGlubmVyXHJcbiAgICAgKi9cclxuICAgIC8vIHN0b3BGaXhlZFNwaW5uZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICAgdGhpcy5fc3RvcFNwaW5uZXIoY2xhc3Nlcy5maXhlZCk7XHJcbiAgICAvLyB9O1xyXG59XHJcblxyXG5sZXQgc3Bpbm5lckluc3RhbmNlID0gbnVsbDtcclxuXHJcbmlmICghc3Bpbm5lckluc3RhbmNlKSB7XHJcbiAgICBzcGlubmVySW5zdGFuY2UgPSBuZXcgU3Bpbm5lcigpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzcGlubmVySW5zdGFuY2U7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tb24vanMtc2VydmljZXMvc3Bpbm5lci5qcyIsIi8qIGVzbGludC1kaXNhYmxlIHNvcnQtdmFycyAqL1xyXG4vLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdXNlcic7XHJcbmltcG9ydCBQdWJTdWIgZnJvbSAncHVic3ViLWpzJzsgLy8gaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvcHVic3ViLWpzXHJcbmltcG9ydCBjb29raWVTdG9yYWdlIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb29raWUnO1xyXG4vLyBpbXBvcnQgVmFsaWRhdG9yIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9mb3JtLXZhbGlkYXRvcic7XHJcbmltcG9ydCB2aWV3VXRpbHMgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3ZpZXcnO1xyXG5pbXBvcnQge0NPTlNUfSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29uc3RzJztcclxuXHJcbi8vIHdpbmRvdy4kID0gJDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMb2dpblBhZ2Uoc2VsZWN0b3JDc3MpIHtcclxuICAgIGNvbnN0IHtfZm9ybUlkLCBfYnV0dG9uU3VibWl0SWQsIF9sb2dpbkJveH0gPSBzZWxlY3RvckNzcztcclxuICAgIGNvbnN0IHVzZXIgPSBVc2VyLCAvLyBzZXJ2aWNlXHJcbiAgICAgICAgJGZvcm0gPSAkKF9mb3JtSWQpLFxyXG4gICAgICAgICRlbWFpbCA9ICRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJtYWlsXCJdJyksXHJcbiAgICAgICAgJHRleHRBcmVhRGVzY3JpcHRpb24gPSAkKCcjZGVzY3JpcHRpb24nKTtcclxuICAgIC8vIGNvbnN0IG9wZW5lZENsYXNzID0gJ2QtYmxvY2snO1xyXG4gICAgLy8gY29uc3QgY2xvc2VDbGFzcyA9ICdkLW5vbmUnO1xyXG5cclxuICAgIGNvbnN0IHVzZXJMb2dpbkhlYWRlciA9IChfZm9ybURhdGEpID0+IHtcclxuICAgICAgICBjb25zdCBjYkVycm9yID0gKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAkKF9sb2dpbkJveCkuYXBwZW5kKCc8cD5yZXN1bHQuc3RhdHVzLm1lc3NhZ2U8L3A+Jyk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHVzZXIubG9naW4oX2Zvcm1EYXRhLCBjYkVycm9yKVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5kYXRhICYmIHJlc3VsdC5kYXRhLnRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2F2ZSB0aGUgaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGNvb2tpZVN0b3JhZ2Uuc2V0KENPTlNULmNvb2tpZVN0b3JhZ2UudG9rZW4sIHJlc3VsdC5kYXRhLnRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcubmF2LWxpbmsuanNfbG9nT3V0JykucGFyZW50KCkuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXF1ZXN0IHN1Y2NlZWRlZCB3aXRoIEpTT04gcmVzcG9uc2UnLCByZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UoJHRleHRBcmVhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMubWVzc2FnZSB8fCAnTG9naW4gc3VjY3Nlc3MnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LnN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSh0aGlzLiR0ZXh0QXJlYURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgPHA+c3RhdHVzOiAke3Jlc3VsdC5zdGF0dXMuc3RhdGV9PC9wPjxwPiBtZXNzYWdlOiAke3Jlc3VsdC5zdGF0dXMubWVzc2FnZX08L3A+YCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKCR0ZXh0QXJlYURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLm1lc3NhZ2UgfHwgJ0xvZ2luIGVycm9yJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzdWJtaXRGb3JtID0gZnVuY3Rpb24oZm9ybURhdGFPYmopIHtcclxuICAgICAgICBjb25zdCBlbWFpbCA9ICRlbWFpbC52YWwoKSxcclxuICAgICAgICAgICAgcGFzc3dvcmQgPSAkZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwicGFzc1wiXScpLnZhbCgpLFxyXG4gICAgICAgICAgICBfZm9ybURhdGEgPSBmb3JtRGF0YU9iaiB8fCB7ZW1haWwsIHBhc3N3b3JkfTtcclxuXHJcbiAgICAgICAgaWYgKHNlbGVjdG9yQ3NzLmlzTG9naW5JbnN0YWdyYW0pIHtcclxuICAgICAgICAgICAgLy8gdG9kbzogZGVsZXRlIG1lXHJcbiAgICAgICAgICAgIC8vIGFkZEluc3RhZ3JhbUFjY291bnQoe3VzZXJuYW1lOiAkZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwidXNlcm5hbWVcIl0nKS52YWwoKSwgcGFzc3dvcmR9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkZW1haWwudmFsKCRlbWFpbC52YWwoKS50b0xvY2FsZUxvd2VyQ2FzZSgpKTtcclxuICAgICAgICAgICAgdXNlckxvZ2luSGVhZGVyKF9mb3JtRGF0YSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBQdWJTdWIucHVibGlzaChDT05TVC5ldmVudHMuVVNFUl9MT0dHRUQsICdsb2dpbicpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2luc3RhZ3JhbS1pbnRlZ3JhdGlvbi9pbnN0YWdyYW0tYWNjb3VudHMuaHRtbCc7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbG9nT3V0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29va2llU3RvcmFnZS5yZW1vdmUoQ09OU1QuY29va2llU3RvcmFnZS50b2tlbik7XHJcbiAgICAgICAgUHViU3ViLnB1Ymxpc2goQ09OU1QuZXZlbnRzLlVTRVJfTE9HT1VUKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYmluZEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIGNvbnN0ICRzaG93TG9naW5Cb3hCdG5JZCA9ICQoX3Nob3dMb2dpbkJveEJ0bklkKTtcclxuICAgICAgICBjb25zdCAkbG9naW5Cb3ggPSAkKF9sb2dpbkJveCk7XHJcbiAgICAgICAgY29uc3Qgb3BlbmVkQ2xhc3MgPSAnZC1ibG9jayc7XHJcbiAgICAgICAgY29uc3QgY2xvc2VDbGFzcyA9ICdkLW5vbmUnO1xyXG5cclxuICAgICAgICAvLyAkc2hvd0xvZ2luQm94QnRuSWQub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBpZiAoIXNlbGVjdG9yQ3NzLmlzTG9naW5JbnN0YWdyYW0pIHtcclxuICAgICAgICAvLyAgICAgICAgICRsb2dpbkJveC5jc3Moeyd0b3AnOiAwLCAncmlnaHQnOiAwfSlcclxuICAgICAgICAvLyAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2JnLWxpZ2h0IGJvcmRlciBtdC01IG14LWF1dG8gcG9zaXRpb24tYWJzb2x1dGUnKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICAkbG9naW5Cb3guYWRkQ2xhc3Mob3BlbmVkQ2xhc3MpLnJlbW92ZUNsYXNzKGNsb3NlQ2xhc3MpO1xyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICBjb25zdCAkYnV0dG9uU3VibWl0ID0gJChfYnV0dG9uU3VibWl0SWQpLFxyXG4gICAgICAgICAgICBjc3NWYWxpZGF0aW9uQ2xhc3MgPSAnZm9ybS12YWxpZGF0aW9uJztcclxuXHJcbiAgICAgICAgJGJ1dHRvblN1Ym1pdC5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSAkZm9ybS5nZXQoMCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IHZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoJGZvcm0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2aWV3VXRpbHMsIHZpZXdVdGlscy5pc0VtYWlsKCRlbWFpbC52YWwoKSkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGZvcm0uY2hlY2tWYWxpZGl0eSgpICYmIHZpZXdVdGlscy5pc0VtYWlsKCRlbWFpbC52YWwoKSkpIHtcclxuICAgICAgICAgICAgICAgIHN1Ym1pdEZvcm0oKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIEhpZ2hsaWdodCBlcnJvcnNcclxuICAgICAgICAgICAgICAgIGlmIChmb3JtLnJlcG9ydFZhbGlkaXR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJGZvcm0uYWRkQ2xhc3MoY3NzVmFsaWRhdGlvbkNsYXNzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcubmF2LWxpbmsuanNfbG9nT3V0Jykub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBsb2dPdXQoKTtcclxuICAgICAgICAgICAgJChlLnRhcmdldCkucGFyZW50KCkuaGlkZSgpO1xyXG4gICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKCR0ZXh0QXJlYURlc2NyaXB0aW9uLCAnTG9nZ2VkIG91dCcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBQdWJTdWIuc3Vic2NyaWJlKENPTlNULmV2ZW50cy5VU0VSX0xPR09VVCwgKG1zZykgPT4ge1xyXG4gICAgICAgICAgICAkKENPTlNULnVpU2VsZWN0b3JzLmhlYWRlck5hdkxvZ2luQnRuKS5hZGRDbGFzcyhvcGVuZWRDbGFzcykucmVtb3ZlQ2xhc3MoY2xvc2VDbGFzcyk7IC8vIC5zaG93KCk7XHJcbiAgICAgICAgICAgICQoQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyUmVnQnRuKS5hZGRDbGFzcyhvcGVuZWRDbGFzcykucmVtb3ZlQ2xhc3MoY2xvc2VDbGFzcyk7XHJcbiAgICAgICAgICAgICQoJy5uYXYtbGluay5qc19sb2dPdXQnKS5hZGRDbGFzcyhjbG9zZUNsYXNzKS5yZW1vdmVDbGFzcyhvcGVuZWRDbGFzcyk7IC8vIC5oaWRlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9yTG9naW5TdGF0ZSA9ICcuanNfbWVzc2FnZV9sb2dnZWQtLXRleHQnO1xyXG4gICAgICAgICAgICAkKHNlbGVjdG9yTG9naW5TdGF0ZSkudGV4dCgn0JLRiyDQstGL0YjQu9C4INC40Lcg0LDQutC60LDRg9C90YLQsCcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXNMb2dpbkJ0bkNsaWNrID0gJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJ25hdi5uYXZiYXInKS5maW5kKCRsb2dpbkJveCkubGVuZ3RoO1xyXG4gICAgICAgICAgICBjb25zdCBpc0FkZEluc3RhZ3JhbUJ0bkNsaWNrZWQgPSAkKGV2ZW50LnRhcmdldCkuYXR0cignaWQnKSA9PT0gQ09OU1QudWlTZWxlY3RvcnMuaW5zdGFncmFtLmFkZEFjY291bnRCdG5JZDtcclxuXHJcbiAgICAgICAgICAgIGlmICghaXNMb2dpbkJ0bkNsaWNrICYmICRsb2dpbkJveC5oYXNDbGFzcyhvcGVuZWRDbGFzcykgJiYgIWlzQWRkSW5zdGFncmFtQnRuQ2xpY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgJGxvZ2luQm94LmFkZENsYXNzKGNsb3NlQ2xhc3MpLnJlbW92ZUNsYXNzKG9wZW5lZENsYXNzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgICAgIGlmICgkKCcuYXV0aC5sb2dpbicpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBiaW5kRXZlbnRzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5pdFxyXG4gICAgfTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvX2F1dGgvbG9naW4tcGFnZS5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmFzZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIhZnVuY3Rpb24oZil7aWYoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUpbW9kdWxlLmV4cG9ydHM9ZigpO2Vsc2UgaWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kKWRlZmluZShbXSxmKTtlbHNleyhcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzpcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsP2dsb2JhbDpcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZj9zZWxmOnRoaXMpLk1ldGVvckVtb2ppPWYoKX19KGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhufHxlKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c31mb3IodmFyIGk9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30oezE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpeyFmdW5jdGlvbihnbG9iYWwsZmFjdG9yeSl7aWYodm9pZCAwIT09ZXhwb3J0cylmYWN0b3J5KG1vZHVsZSk7ZWxzZXt2YXIgbW9kPXtleHBvcnRzOnt9fTtmYWN0b3J5KG1vZCksZ2xvYmFsLm1ldGVvckVtb2ppPW1vZC5leHBvcnRzfX0odGhpcyxmdW5jdGlvbihtb2R1bGUpe1widXNlIHN0cmljdFwiO3ZhciBfY3JlYXRlQ2xhc3M9ZnVuY3Rpb24oKXtmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCxwcm9wcyl7Zm9yKHZhciBpPTA7aTxwcm9wcy5sZW5ndGg7aSsrKXt2YXIgZGVzY3JpcHRvcj1wcm9wc1tpXTtkZXNjcmlwdG9yLmVudW1lcmFibGU9ZGVzY3JpcHRvci5lbnVtZXJhYmxlfHwhMSxkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBkZXNjcmlwdG9yJiYoZGVzY3JpcHRvci53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCxkZXNjcmlwdG9yLmtleSxkZXNjcmlwdG9yKX19cmV0dXJuIGZ1bmN0aW9uKENvbnN0cnVjdG9yLHByb3RvUHJvcHMsc3RhdGljUHJvcHMpe3JldHVybiBwcm90b1Byb3BzJiZkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSxwcm90b1Byb3BzKSxzdGF0aWNQcm9wcyYmZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3RvcixzdGF0aWNQcm9wcyksQ29uc3RydWN0b3J9fSgpLE1ldGVvckVtb2ppPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gTWV0ZW9yRW1vamkoKXshZnVuY3Rpb24oaW5zdGFuY2UsQ29uc3RydWN0b3Ipe2lmKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX0odGhpcyxNZXRlb3JFbW9qaSksdGhpcy5pbml0aWF0ZSgpfXJldHVybiBfY3JlYXRlQ2xhc3MoTWV0ZW9yRW1vamksW3trZXk6XCJpbml0aWF0ZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIF90aGlzPXRoaXM7ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbWV0ZW9yLWVtb2ppPVwidHJ1ZVwiXSwgW2RhdGEtbWV0ZW9yLWVtb2ppLWxhcmdlPVwidHJ1ZVwiXScpLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCl7X3RoaXMuZ2VuZXJhdGVFbGVtZW50cyhlbGVtZW50KX0pfX0se2tleTpcImdlbmVyYXRlRWxlbWVudHNcIix2YWx1ZTpmdW5jdGlvbihlbW9qaUlucHV0KXt2YXIgY2xpY2tMaW5rPWZ1bmN0aW9uKGV2ZW50KXt2YXIgY2FyZXRQb3M9ZW1vamlJbnB1dC5zZWxlY3Rpb25TdGFydDtlbW9qaUlucHV0LnZhbHVlPWVtb2ppSW5wdXQudmFsdWUuc3Vic3RyaW5nKDAsY2FyZXRQb3MpK1wiIFwiK2V2ZW50LnRhcmdldC5pbm5lckhUTUwrZW1vamlJbnB1dC52YWx1ZS5zdWJzdHJpbmcoY2FyZXRQb3MpLGVtb2ppUGlja2VyLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBhbmd1bGFyJiZhbmd1bGFyLmVsZW1lbnQoZW1vamlJbnB1dCkudHJpZ2dlckhhbmRsZXIoXCJjaGFuZ2VcIil9LGNsaWNrQ2F0ZWdvcnk9ZnVuY3Rpb24oZXZlbnQpe2Vtb2ppSW5wdXQuc2VsZWN0aW9uU3RhcnQ7ZW1vamlQaWNrZXIuc3R5bGUuZGlzcGxheT1cImJsb2NrXCI7Zm9yKHZhciBoaWRlVWxzPWVtb2ppUGlja2VyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ1bFwiKSxpPTEsbD1oaWRlVWxzLmxlbmd0aDtpPGw7aSsrKWhpZGVVbHNbaV0uc3R5bGUuZGlzcGxheT1cIm5vbmVcIjt2YXIgYmFja2dyb3VuZFRvZ2dsZT1lbW9qaVBpY2tlci5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhdGVnb3J5IGFcIik7Zm9yKGk9MCxsPWJhY2tncm91bmRUb2dnbGUubGVuZ3RoO2k8bDtpKyspYmFja2dyb3VuZFRvZ2dsZVtpXS5zdHlsZS5iYWNrZ3JvdW5kPVwibm9uZVwiO2Vtb2ppUGlja2VyLnF1ZXJ5U2VsZWN0b3IoXCIuXCIrZXZlbnQudGFyZ2V0LmlkKS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIixlbW9qaVBpY2tlci5xdWVyeVNlbGVjdG9yKFwiI1wiK2V2ZW50LnRhcmdldC5pZCkuc3R5bGUuYmFja2dyb3VuZD1cIiNjMmMyYzJcIn07ZW1vamlJbnB1dC5zdHlsZS53aWR0aD1cIjEwMCVcIjt2YXIgZW1vamlDb250YWluZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlbW9qaUNvbnRhaW5lci5zdHlsZS5wb3NpdGlvbj1cInJlbGF0aXZlXCIsZW1vamlJbnB1dC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChlbW9qaUNvbnRhaW5lcixlbW9qaUlucHV0KSxlbW9qaUNvbnRhaW5lci5hcHBlbmRDaGlsZChlbW9qaUlucHV0KTt2YXIgZW1vamlQaWNrZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlbW9qaVBpY2tlci50YWJJbmRleD0wLGVtb2ppSW5wdXQuaGFzQXR0cmlidXRlKFwiZGF0YS1tZXRlb3ItZW1vamktbGFyZ2VcIik/KGVtb2ppUGlja2VyLnN0eWxlLnpJbmRleD1cIjk5OVwiLGVtb2ppUGlja2VyLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiLGVtb2ppUGlja2VyLnN0eWxlLndpZHRoPVwiMTAwJVwiLGVtb2ppUGlja2VyLnN0eWxlLm1hcmdpbkJvdHRvbT1cIjE1cHhcIik6KGVtb2ppUGlja2VyLnN0eWxlLnBvc2l0aW9uPVwiYWJzb2x1dGVcIixlbW9qaVBpY2tlci5zdHlsZS5yaWdodD1cIjBweFwiLGVtb2ppUGlja2VyLnN0eWxlLnRvcD1cIjMwcHhcIixlbW9qaVBpY2tlci5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLGVtb2ppUGlja2VyLnN0eWxlLndpZHRoPVwiNDAwcHhcIiksZW1vamlQaWNrZXIuc3R5bGUuekluZGV4PVwiOTk5XCIsZW1vamlQaWNrZXIuc3R5bGUub3ZlcmZsb3c9XCJoaWRkZW5cIixlbW9qaVBpY2tlci5zdHlsZS5iYWNrZ3JvdW5kPVwiI2ZmZlwiLGVtb2ppUGlja2VyLnN0eWxlLmJvcmRlclJhZGl1cz1cIjVweFwiLGVtb2ppUGlja2VyLnN0eWxlLmJveFNoYWRvdz1cIjAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjIzKVwiLGVtb2ppUGlja2VyLnN0eWxlLmJvcmRlclJhZGl1cz1cIjJweDtcIixlbW9qaVBpY2tlci5zdHlsZS5tYXJnaW5Ub3A9XCI1cHhcIixlbW9qaVBpY2tlci5zdHlsZS5vdXRsaW5lPVwibm9uZVwiO3ZhciBlbW9qaVRyaWdnZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7ZW1vamlUcmlnZ2VyLnN0eWxlLnBvc2l0aW9uPVwiYWJzb2x1dGVcIixlbW9qaVRyaWdnZXIuc3R5bGUudG9wPVwiMTBweFwiLGVtb2ppVHJpZ2dlci5zdHlsZS5yaWdodD1cIjEwcHhcIixlbW9qaVRyaWdnZXIuc3R5bGUudGV4dERlY29yYXRpb249XCJub25lXCIsZW1vamlUcmlnZ2VyLnNldEF0dHJpYnV0ZShcImhyZWZcIixcImphdmFzY3JpcHQ6dm9pZCgwKVwiKSxlbW9qaVRyaWdnZXIuaW5uZXJIVE1MPSc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDEyIDE0XCI+PHBhdGggZD1cIk04LjkgOC40cS0wLjMgMC45LTEuMSAxLjV0LTEuOCAwLjYtMS44LTAuNi0xLjEtMS41cS0wLjEtMC4yIDAtMC40dDAuMy0wLjJxMC4yLTAuMSAwLjQgMHQwLjIgMC4zcTAuMiAwLjYgMC43IDF0MS4yIDAuNCAxLjItMC40IDAuNy0xcTAuMS0wLjIgMC4zLTAuM3QwLjQgMCAwLjMgMC4yIDAgMC40ek01IDVxMCAwLjQtMC4zIDAuN3QtMC43IDAuMy0wLjctMC4zLTAuMy0wLjcgMC4zLTAuNyAwLjctMC4zIDAuNyAwLjMgMC4zIDAuN3pNOSA1cTAgMC40LTAuMyAwLjd0LTAuNyAwLjMtMC43LTAuMy0wLjMtMC43IDAuMy0wLjcgMC43LTAuMyAwLjcgMC4zIDAuMyAwLjd6TTExIDdxMC0xLTAuNC0xLjl0LTEuMS0xLjYtMS42LTEuMS0xLjktMC40LTEuOSAwLjQtMS42IDEuMS0xLjEgMS42LTAuNCAxLjkgMC40IDEuOSAxLjEgMS42IDEuNiAxLjEgMS45IDAuNCAxLjktMC40IDEuNi0xLjEgMS4xLTEuNiAwLjQtMS45ek0xMiA3cTAgMS42LTAuOCAzdC0yLjIgMi4yLTMgMC44LTMtMC44LTIuMi0yLjItMC44LTMgMC44LTMgMi4yLTIuMiAzLTAuOCAzIDAuOCAyLjIgMi4yIDAuOCAzelwiLz48L3N2Zz4nLGVtb2ppVHJpZ2dlci5vbmNsaWNrPWZ1bmN0aW9uKCl7XCJub25lXCI9PT1lbW9qaVBpY2tlci5zdHlsZS5kaXNwbGF5P2Vtb2ppUGlja2VyLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiOlwiYmxvY2tcIj09PWVtb2ppUGlja2VyLnN0eWxlLmRpc3BsYXkmJihlbW9qaVBpY2tlci5zdHlsZS5kaXNwbGF5PVwibm9uZVwiKSxlbW9qaVBpY2tlci5mb2N1cygpfSxlbW9qaUlucHV0Lmhhc0F0dHJpYnV0ZShcImRhdGEtbWV0ZW9yLWVtb2ppLWxhcmdlXCIpfHxlbW9qaUNvbnRhaW5lci5hcHBlbmRDaGlsZChlbW9qaVRyaWdnZXIpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbihlKXtlbW9qaUlucHV0Lmhhc0F0dHJpYnV0ZShcImRhdGEtbWV0ZW9yLWVtb2ppLWxhcmdlXCIpfHxcImJsb2NrXCI9PT1lbW9qaVBpY2tlci5zdHlsZS5kaXNwbGF5JiYoZW1vamlQaWNrZXIuY29udGFpbnMoZS50YXJnZXQpfHxlbW9qaVRyaWdnZXIuY29udGFpbnMoZS50YXJnZXQpfHwoZW1vamlQaWNrZXIuc3R5bGUuZGlzcGxheT1cIm5vbmVcIikpfSk7dmFyIGZhY2VzQ2F0ZWdvcnk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO2ZhY2VzQ2F0ZWdvcnkuc3R5bGUucGFkZGluZz1cIjEwcHggMHB4XCIsZmFjZXNDYXRlZ29yeS5zdHlsZS5tYXJnaW49XCIwXCIsZmFjZXNDYXRlZ29yeS5zdHlsZS5saXN0U3R5bGU9XCJub25lXCIsZmFjZXNDYXRlZ29yeS5zdHlsZS50ZXh0QWxpZ249XCJsZWZ0XCIsZmFjZXNDYXRlZ29yeS5zdHlsZS5tYXJnaW5MZWZ0PVwiMyVcIixmYWNlc0NhdGVnb3J5LmNsYXNzTGlzdC5hZGQoXCJmYWNlc1wiKTt2YXIgYW5pbWFsc0NhdGVnb3J5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTthbmltYWxzQ2F0ZWdvcnkuc3R5bGUucGFkZGluZz1cIjEwcHggMHB4XCIsYW5pbWFsc0NhdGVnb3J5LnN0eWxlLm1hcmdpbj1cIjBcIixhbmltYWxzQ2F0ZWdvcnkuc3R5bGUubGlzdFN0eWxlPVwibm9uZVwiLGFuaW1hbHNDYXRlZ29yeS5zdHlsZS50ZXh0QWxpZ249XCJsZWZ0XCIsYW5pbWFsc0NhdGVnb3J5LnN0eWxlLm1hcmdpbkxlZnQ9XCIzJVwiLGFuaW1hbHNDYXRlZ29yeS5jbGFzc0xpc3QuYWRkKFwiYW5pbWFsc1wiKSxhbmltYWxzQ2F0ZWdvcnkuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjt2YXIgZm9vZENhdGVnb3J5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtmb29kQ2F0ZWdvcnkuc3R5bGUucGFkZGluZz1cIjEwcHggMHB4XCIsZm9vZENhdGVnb3J5LnN0eWxlLm1hcmdpbj1cIjBcIixmb29kQ2F0ZWdvcnkuc3R5bGUubGlzdFN0eWxlPVwibm9uZVwiLGZvb2RDYXRlZ29yeS5zdHlsZS50ZXh0QWxpZ249XCJsZWZ0XCIsZm9vZENhdGVnb3J5LnN0eWxlLm1hcmdpbkxlZnQ9XCIzJVwiLGZvb2RDYXRlZ29yeS5jbGFzc0xpc3QuYWRkKFwiZm9vZFwiKSxmb29kQ2F0ZWdvcnkuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjt2YXIgc3BvcnRDYXRlZ29yeT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7c3BvcnRDYXRlZ29yeS5zdHlsZS5wYWRkaW5nPVwiMTBweCAwcHhcIixzcG9ydENhdGVnb3J5LnN0eWxlLm1hcmdpbj1cIjBcIixzcG9ydENhdGVnb3J5LnN0eWxlLmxpc3RTdHlsZT1cIm5vbmVcIixzcG9ydENhdGVnb3J5LnN0eWxlLnRleHRBbGlnbj1cImxlZnRcIixzcG9ydENhdGVnb3J5LnN0eWxlLm1hcmdpbkxlZnQ9XCIzJVwiLHNwb3J0Q2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChcInNwb3J0XCIpLHNwb3J0Q2F0ZWdvcnkuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjt2YXIgdHJhbnNwb3J0Q2F0ZWdvcnk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO3RyYW5zcG9ydENhdGVnb3J5LnN0eWxlLnBhZGRpbmc9XCIxMHB4IDBweFwiLHRyYW5zcG9ydENhdGVnb3J5LnN0eWxlLm1hcmdpbj1cIjBcIix0cmFuc3BvcnRDYXRlZ29yeS5zdHlsZS5saXN0U3R5bGU9XCJub25lXCIsdHJhbnNwb3J0Q2F0ZWdvcnkuc3R5bGUudGV4dEFsaWduPVwibGVmdFwiLHRyYW5zcG9ydENhdGVnb3J5LnN0eWxlLm1hcmdpbkxlZnQ9XCIzJVwiLHRyYW5zcG9ydENhdGVnb3J5LmNsYXNzTGlzdC5hZGQoXCJ0cmFuc3BvcnRcIiksdHJhbnNwb3J0Q2F0ZWdvcnkuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjt2YXIgb2JqZWN0c0NhdGVnb3J5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtvYmplY3RzQ2F0ZWdvcnkuc3R5bGUucGFkZGluZz1cIjEwcHggMHB4XCIsb2JqZWN0c0NhdGVnb3J5LnN0eWxlLm1hcmdpbj1cIjBcIixvYmplY3RzQ2F0ZWdvcnkuc3R5bGUubGlzdFN0eWxlPVwibm9uZVwiLG9iamVjdHNDYXRlZ29yeS5zdHlsZS50ZXh0QWxpZ249XCJsZWZ0XCIsb2JqZWN0c0NhdGVnb3J5LnN0eWxlLm1hcmdpbkxlZnQ9XCIzJVwiLG9iamVjdHNDYXRlZ29yeS5jbGFzc0xpc3QuYWRkKFwib2JqZWN0c1wiKSxvYmplY3RzQ2F0ZWdvcnkuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjt2YXIgZW1vamlDYXRlZ29yeT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7ZW1vamlDYXRlZ29yeS5zdHlsZS5wYWRkaW5nPVwiMHB4XCIsZW1vamlDYXRlZ29yeS5zdHlsZS5tYXJnaW49XCIwXCIsZW1vamlDYXRlZ29yeS5zdHlsZS5kaXNwbGF5PVwidGFibGVcIixlbW9qaUNhdGVnb3J5LnN0eWxlLndpZHRoPVwiMTAwJVwiLGVtb2ppQ2F0ZWdvcnkuc3R5bGUuYmFja2dyb3VuZD1cIiNlZmYwZjFcIixlbW9qaUNhdGVnb3J5LnN0eWxlLmxpc3RTdHlsZT1cIm5vbmVcIixlbW9qaUNhdGVnb3J5LmNsYXNzTGlzdC5hZGQoXCJjYXRlZ29yeVwiKTt2YXIgZW1vamlDYXRlZ29yaWVzPW5ldyBBcnJheTtlbW9qaUNhdGVnb3JpZXMucHVzaCh7bmFtZTpcImZhY2VzXCIsc3ZnOic8c3ZnIGlkPVwiZmFjZXNcIiBkYXRhLW5hbWU9XCJMYXllciAxXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMTUwIDE1MFwiPjxwYXRoIGlkPVwiZmFjZXNcIiBkPVwiTTc0LjM0LDEyOC40OGE1My41LDUzLjUsMCwxLDEsMzcuODQtMTUuNjcsNTMuMTYsNTMuMTYsMCwwLDEtMzcuODQsMTUuNjdabTAtOTcuODlhNDQuNCw0NC40LDAsMSwwLDMxLjQsMTMsNDQuMDcsNDQuMDcsMCwwLDAtMzEuNC0xM1pcIi8+PHBhdGggaWQ9XCJmYWNlc1wiIGQ9XCJNNzQuMzUsMTA4QTMzLjA3LDMzLjA3LDAsMCwxLDQxLjI5LDc1YTIuMjgsMi4yOCwwLDAsMSwyLjI3LTIuMjhoMEEyLjI3LDIuMjcsMCwwLDEsNDUuODMsNzVhMjguNTIsMjguNTIsMCwwLDAsNTcsMCwyLjI3LDIuMjcsMCwwLDEsNC41NCwwQTMzLjA5LDMzLjA5LDAsMCwxLDc0LjM1LDEwOFpcIi8+PHBhdGggaWQ9XCJmYWNlc1wiIGQ9XCJNNTguODQsNjJhNi44MSw2LjgxLDAsMSwwLDYuODEsNi44MUE2LjgxLDYuODEsMCwwLDAsNTguODQsNjJaXCIvPjxwYXRoIGlkPVwiZmFjZXNcIiBkPVwiTTg5Ljg3LDYyYTYuODEsNi44MSwwLDEsMCw2LjgxLDYuODFBNi44Miw2LjgyLDAsMCwwLDg5Ljg3LDYyWlwiLz48L3N2Zz4nfSksZW1vamlDYXRlZ29yaWVzLnB1c2goe25hbWU6XCJhbmltYWxzXCIsc3ZnOic8c3ZnIGlkPVwiYW5pbWFsc1wiIGRhdGEtbmFtZT1cIkxheWVyIDFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAxNTAgMTUwXCI+PHBhdGggaWQ9XCJhbmltYWxzXCIgZD1cIk01OS45LDkxLjc1aDBjLTIyLjQ2LDAtNDEuODItMTkuMzQtNDQuMDktNDRBNTIuMSw1Mi4xLDAsMCwxLDE2LDM2LjhhNC41MSw0LjUxLDAsMCwxLDIuNjMtMy42MiwzOS43OSwzOS43OSwwLDAsMSwxMi43NC0zLjM3YzIzLjkyLTIuMTUsNDUuMzUsMTcuODMsNDcuNzQsNDMuODZhNTIuNzcsNTIuNzcsMCwwLDEtLjE1LDEwLjkzLDQuNTYsNC41NiwwLDAsMS0yLjY0LDMuNjIsMzkuNjcsMzkuNjcsMCwwLDEtMTIuNzMsMy4zNmMtMS4yMy4xMS0yLjQ1LjE3LTMuNjYuMTdaTTI0Ljc2LDQwLjQ5YTQxLjI5LDQxLjI5LDAsMCwwLC4wOSw2LjRDMjYuNyw2Nyw0Mi4wOSw4Mi42Niw1OS45LDgyLjY3aDBjLjk0LDAsMS44OCwwLDIuODMtLjE0YTMwLjM5LDMwLjM5LDAsMCwwLDcuNDEtMS42Miw0MS4xNCw0MS4xNCwwLDAsMC0uMTEtNi40QzY4LjA5LDUzLjM4LDUxLjExLDM3LjA4LDMyLjE3LDM4Ljg2YTMwLjc4LDMwLjc4LDAsMCwwLTcuNDEsMS42M1pcIi8+PHBhdGggaWQ9XCJhbmltYWxzXCIgZD1cIk0zNi42OCwxMjUuNjRhNC41Myw0LjUzLDAsMCwxLTQuMzMtMy4xNyw1My4zMiw1My4zMiwwLDAsMS0yLjI2LTExQTUwLjQyLDUwLjQyLDAsMCwxLDM5LjUxLDc2LjZjNy4zNS05LjkxLDE3Ljg0LTE2LDI5LjUtMTcsMS4xNi0uMTEsMi4zMy0uMTMsMy40Ny0uMTNhNC41NCw0LjU0LDAsMCwxLDQuMzMsMy4xNiw1MS41OSw1MS41OSwwLDAsMSwyLjI3LDExLjA4LDUwLjM5LDUwLjM5LDAsMCwxLTkuNDIsMzQuOGMtNy4zNSw5LjkxLTE3LjgzLDE2LTI5LjUsMTdhMTcuNjMsMTcuNjMsMCwwLDEtMy40OC4xMlpNNjkuMDksNjguNjlBMzIuNDEsMzIuNDEsMCwwLDAsNDYuOCw4MmE0Mi41Nyw0Mi41NywwLDAsMC02LjcxLDM0LjM4LDMyLjM4LDMyLjM4LDAsMCwwLDIyLjI4LTEzLjMyQTQxLjM1LDQxLjM1LDAsMCwwLDcwLDc0LjUxYTM5LjM4LDM5LjM4LDAsMCwwLS45NC01LjgyWlwiLz48cGF0aCBpZD1cImFuaW1hbHNcIiBkPVwiTTkwLjI3LDkxLjc1Yy0xLjIyLDAtMi40My0uMDYtMy42Ni0uMTdhMzkuNjcsMzkuNjcsMCwwLDEtMTIuNzMtMy4zNiw0LjU3LDQuNTcsMCwwLDEtMi42NC0zLjYxLDUzLjM4LDUzLjM4LDAsMCwxLS4xNy0xMC45M2MyLjQxLTI2LDIzLjctNDYuMDcsNDcuNzYtNDMuODdhMzkuNzQsMzkuNzQsMCwwLDEsMTIuNzMsMy4zNyw0LjU3LDQuNTcsMCwwLDEsMi42NCwzLjYyLDUzLjM1LDUzLjM1LDAsMCwxLC4xNiwxMC45MmMtMi4yOCwyNC42OS0yMS42NSw0NC00NC4wOSw0NFpNODAsODAuOTFhMzAuNTcsMzAuNTcsMCwwLDAsNy40MiwxLjYyYzE5LjA3LDEuNzgsMzUuOTItMTQuNTMsMzcuODctMzUuNjRhNDIuNTUsNDIuNTUsMCwwLDAsLjEtNi40QTMwLjg2LDMwLjg2LDAsMCwwLDExOCwzOC44NkM5OSwzNy4wNyw4Mi4wNiw1My4zOCw4MC4xMiw3NC41MWE0My45MSw0My45MSwwLDAsMC0uMSw2LjRaXCIvPjxwYXRoIGlkPVwiYW5pbWFsc1wiIGQ9XCJNMTEzLjQ5LDEyNS42NGgwYy0xLjE2LDAtMi4zLDAtMy40Ni0uMTItMjMuOS0yLjIxLTQxLjM2LTI1LjQ3LTM4Ljk0LTUxLjg1QTUzLjUyLDUzLjUyLDAsMCwxLDczLjM0LDYyLjZhNC41NSw0LjU1LDAsMCwxLDQuMzMtMy4xNmMxLjE2LDAsMi4zNCwwLDMuNTEuMTMsMTEuNjQsMS4wNywyMi4xMSw3LjEyLDI5LjQ4LDE3YTUwLjUxLDUwLjUxLDAsMCwxLDkuNDIsMzQuODEsNTMuNTEsNTMuNTEsMCwwLDEtMi4yNiwxMSw0LjU0LDQuNTQsMCwwLDEtNC4zMywzLjE5Wk04MS4wOCw2OC42OWE0Mi41Myw0Mi41MywwLDAsMC0xLDUuODJjLTEuOTQsMjEuMSwxMS40NSwzOS43MSwyOS45NSw0MS44OEE0Mi4zOCw0Mi4zOCwwLDAsMCwxMDMuMzYsODIsMzIuNDIsMzIuNDIsMCwwLDAsODEuMDgsNjguNjlaXCIvPjxwYXRoIGlkPVwiYW5pbWFsc1wiIGQ9XCJNNzUuMDgsNDUuNDVhNy44Myw3LjgzLDAsMSwwLDcuODMsNy44Myw3LjgzLDcuODMsMCwwLDAtNy44My03LjgzWlwiLz48cGF0aCBpZD1cImFuaW1hbHNcIiBkPVwiTTc2LjI5LDUxLjg5YTIuMjYsMi4yNiwwLDAsMS0yLjE0LTNBNDYsNDYsMCwwLDEsOTIuODIsMjUuMzRhMi4yNywyLjI3LDAsMSwxLDIuNCwzLjg2QTQxLjQsNDEuNCwwLDAsMCw3OC40Myw1MC4zOWEyLjI4LDIuMjgsMCwwLDEtMi4xNCwxLjVaXCIvPjxwYXRoIGlkPVwiYW5pbWFsc1wiIGQ9XCJNNzMuODcsNTEuODlhMi4yOCwyLjI4LDAsMCwxLTIuMTQtMS41QTQxLjM1LDQxLjM1LDAsMCwwLDU0Ljk0LDI5LjJhMi4yNywyLjI3LDAsMCwxLDIuMzktMy44NkE0Niw0NiwwLDAsMSw3Niw0OC44NWEyLjI4LDIuMjgsMCwwLDEtMS4zNywyLjkxLDIuMzEsMi4zMSwwLDAsMS0uNzcuMTNaXCIvPjwvc3ZnPid9KSxlbW9qaUNhdGVnb3JpZXMucHVzaCh7bmFtZTpcImZvb2RcIixzdmc6JzxzdmcgaWQ9XCJmb29kXCIgZGF0YS1uYW1lPVwiTGF5ZXIgMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDE1MCAxNTBcIj48cGF0aCBpZD1cImZvb2RcIiBkPVwiTTEwNCwyMC43NmguMTVjMTUuODMuNTIsMjQuMDgsMjEuNDgsMjQuMDcsMzIuNTYuMjYsMTIuNDItMTAuNzIsMjMuNTUtMjQsMjQuMjFhMy41MywzLjUzLDAsMCwxLS40NiwwYy0xMy4yNS0uNjYtMjQuMjMtMTEuOC0yNC0yNC4zLDAtMTEsOC4yNi0zMS45NSwyNC4wNy0zMi40N1ptMCw0Ny42OWM4LjI1LS41NCwxNS4zLTcuNTEsMTUuMTQtMTUsMC04LjEyLTYuMjItMjMuMS0xNS4xNC0yMy41Ny04LjkuNDYtMTUuMTQsMTUuNDUtMTUuMTQsMjMuNDgtLjE0LDcuNjEsNi45LDE0LjU5LDE1LjE0LDE1LjEzWlwiLz48cGF0aCBpZD1cImZvb2RcIiBkPVwiTTk3LjE5LDY5LjIxaC4xNGE0LjUzLDQuNTMsMCwwLDEsNC40LDQuNjhsLTEuNDgsNDYuOTJhMS41OSwxLjU5LDAsMCwwLC41LDEuMDYsNC42LDQuNiwwLDAsMCwzLjI1LDEuMTloMGE0LjU3LDQuNTcsMCwwLDAsMy4yNi0xLjIsMS41MywxLjUzLDAsMCwwLC40OS0xbC0xLjQ4LTQ2Ljk1YTQuNTQsNC41NCwwLDEsMSw5LjA4LS4yOGwxLjQ3LDQ2LjkxYTEwLjQyLDEwLjQyLDAsMCwxLTMsNy42NSwxMy42NSwxMy42NSwwLDAsMS05LjgxLDRoMGExMy41OCwxMy41OCwwLDAsMS05Ljc5LTQsMTAuNDIsMTAuNDIsMCwwLDEtMy03LjY3bDEuNDgtNDYuODlhNC41Myw0LjUzLDAsMCwxLDQuNTMtNC40WlwiLz48cGF0aCBpZD1cImZvb2RcIiBkPVwiTTQxLjg0LDY5LjIxSDQyYTQuNTMsNC41MywwLDAsMSw0LjQsNC42OEw0NC45LDEyMC44MWExLjU3LDEuNTcsMCwwLDAsLjUsMS4wNiw0LjYsNC42LDAsMCwwLDMuMjUsMS4xOWgwYTQuNTEsNC41MSwwLDAsMCwzLjI0LTEuMTksMS40OCwxLjQ4LDAsMCwwLC41LTFMNTAuOTMsNzMuODlhNC41Myw0LjUzLDAsMCwxLDQuMzktNC42OEE0LjQsNC40LDAsMCwxLDYwLDczLjYxbDEuNDgsNDYuOTFhMTAuNDksMTAuNDksMCwwLDEtMyw3LjY2LDEzLjU3LDEzLjU3LDAsMCwxLTkuNzgsNGgwYTEzLjU5LDEzLjU5LDAsMCwxLTkuNzgtNCwxMC40OCwxMC40OCwwLDAsMS0zLTcuNjdsMS40OC00Ni45YTQuNTQsNC41NCwwLDAsMSw0LjU0LTQuNFpcIi8+PHBhdGggaWQ9XCJmb29kXCIgZD1cIk0yOC41OSwyMC43NmE0LjU0LDQuNTQsMCwwLDEsNC41NCw0LjU0VjUxYTE1LjUyLDE1LjUyLDAsMCwwLDMxLDBWMjUuM2E0LjU1LDQuNTUsMCwwLDEsOS4wOSwwVjUxYTI0LjYxLDI0LjYxLDAsMSwxLTQ5LjIxLDBWMjUuM2E0LjU0LDQuNTQsMCwwLDEsNC41NC00LjU0WlwiLz48cGF0aCBpZD1cImZvb2RcIiBkPVwiTTU1LjM0LDIwLjc2YTQuNTQsNC41NCwwLDAsMSw0LjU0LDQuNTR2MTlhNC41NCw0LjU0LDAsMSwxLTkuMDgsMHYtMTlhNC41NCw0LjU0LDAsMCwxLDQuNTQtNC41NFpcIi8+PHBhdGggaWQ9XCJmb29kXCIgZD1cIk00MiwyMC43NmE0LjU0LDQuNTQsMCwwLDEsNC41NCw0LjU0djE5YTQuNTQsNC41NCwwLDEsMS05LjA4LDB2LTE5QTQuNTQsNC41NCwwLDAsMSw0MiwyMC43NlpcIi8+PC9zdmc+J30pLGVtb2ppQ2F0ZWdvcmllcy5wdXNoKHtuYW1lOlwic3BvcnRcIixzdmc6JzxzdmcgaWQ9XCJzcG9ydFwiIGRhdGEtbmFtZT1cIkxheWVyIDFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAxNTAgMTUwXCI+PHBhdGggaWQ9XCJzcG9ydFwiIGQ9XCJNNzUuMzUsMTMwLjI0YTUzLjQ5LDUzLjQ5LDAsMSwxLDUzLjQ4LTUzLjQ5LDUzLjU1LDUzLjU1LDAsMCwxLTUzLjQ4LDUzLjQ5Wm0wLTk3Ljg5YTQ0LjQxLDQ0LjQxLDAsMSwwLDQ0LjQsNDQuNCw0NC4xLDQ0LjEsMCwwLDAtNDQuNC00NC40WlwiLz48cGF0aCBpZD1cInNwb3J0XCIgZD1cIk0xMTkuMjQsODQuMDhBNTEuMjksNTEuMjksMCwwLDEsNjgsMzIuODZhNDkuNDQsNDkuNDQsMCwwLDEsLjI2LTUsMi4yNiwyLjI2LDAsMCwxLDItMmMxLjY2LS4xNiwzLjM0LS4yNSw1LS4yNWE1MS4yNiw1MS4yNiwwLDAsMSw1MS4yMSw1MS4yMWMwLDEuNzEtLjA5LDMuMzgtLjI1LDVhMi4yOCwyLjI4LDAsMCwxLTIsMmMtMS42NS4xNi0zLjMzLjI1LTUsLjI1Wk03Mi42NCwzMC4xNmMtLjA2LjktLjA4LDEuNzktLjA4LDIuN2E0Ni43Myw0Ni43MywwLDAsMCw0Ni42OCw0Ni42OHExLjM3LDAsMi43LS4wOWMuMDYtLjg5LjA4LTEuNzkuMDgtMi43QTQ2LjcyLDQ2LjcyLDAsMCwwLDc1LjM1LDMwLjA4Yy0uOTEsMC0xLjgyLDAtMi43MS4wOFpcIi8+PHBhdGggaWQ9XCJzcG9ydFwiIGQ9XCJNNzUuMzUsMTI4QTUxLjI4LDUxLjI4LDAsMCwxLDI0LjEyLDc2Ljc2YzAtMS43LjEtMy4zOC4yNS01YTIuMjksMi4yOSwwLDAsMSwyLTJjMS42Ni0uMTYsMy4zMy0uMjUsNS4wNS0uMjVhNTEuMjcsNTEuMjcsMCwwLDEsNTEuMjEsNTEuMjJjMCwxLjY5LS4wOSwzLjM3LS4yNSw1YTIuMjcsMi4yNywwLDAsMS0yLDJjLTEuNjYuMTYtMy4zMi4yNS01LC4yNVpNMjguNzUsNzQuMDVjLS4wNS45LS4wOSwxLjgtLjA5LDIuNzFhNDYuNzQsNDYuNzQsMCwwLDAsNDYuNjksNDYuNjdjLjkxLDAsMS44LDAsMi43LS4wOCwwLS45LjA4LTEuOC4wOC0yLjdBNDYuNzMsNDYuNzMsMCwwLDAsMzEuNDYsNzRjLS45MSwwLTEuODEsMC0yLjcxLjA4WlwiLz48cG9seWdvbiBpZD1cInNwb3J0XCIgcG9pbnRzPVwiNDIuNjkgMTEyLjYxIDM5LjQ4IDEwOS40IDEwOCA0MC44OCAxMTEuMjEgNDQuMSA0Mi42OSAxMTIuNjEgNDIuNjkgMTEyLjYxXCIvPjwvc3ZnPid9KSxlbW9qaUNhdGVnb3JpZXMucHVzaCh7bmFtZTpcInRyYW5zcG9ydFwiLHN2ZzonPHN2ZyBpZD1cInRyYW5zcG9ydFwiIGRhdGEtbmFtZT1cIkxheWVyIDFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAxNTAgMTUwXCI+PHBhdGggaWQ9XCJ0cmFuc3BvcnRcIiBkPVwiTTEyMC43LDExNkgzMWE0LjU1LDQuNTUsMCwwLDEtNC41NC00LjU1VjU0LjI4QTMxLjgyLDMxLjgyLDAsMCwxLDU4LjI1LDIyLjQ5aDM1LjJhMzEuODMsMzEuODMsMCwwLDEsMzEuOCwzMS43OXY1Ny4xNUE0LjU1LDQuNTUsMCwwLDEsMTIwLjcsMTE2Wm0tODUuMTYtOS4wOWg4MC42MlY1NC4yOEEyMi43NCwyMi43NCwwLDAsMCw5My40NSwzMS41N0g1OC4yNUEyMi43NCwyMi43NCwwLDAsMCwzNS41NCw1NC4yOHY1Mi42MVpcIi8+PHBhdGggaWQ9XCJ0cmFuc3BvcnRcIiBkPVwiTTQ5LjM1LDEyOS4yM2MtOC41MywwLTEzLjYyLTIuNzctMTMuNjItNy40MVYxMTUuNmE0LjU0LDQuNTQsMCwxLDEsOS4wOCwwdjQuMDZhMjEuMzIsMjEuMzIsMCwwLDAsOS4wOSwwVjExNS42YTQuNTQsNC41NCwwLDAsMSw5LjA4LDB2Ni4yMmMwLDQuNjQtNS4wOSw3LjQxLTEzLjYzLDcuNDFaXCIvPjxwYXRoIGlkPVwidHJhbnNwb3J0XCIgZD1cIk0xMDIuMzQsMTI5LjIzYy04LjUzLDAtMTMuNjItMi43Ny0xMy42Mi03LjQxVjExNS42YTQuNTQsNC41NCwwLDAsMSw5LjA4LDB2NC4wNmEyMS4yOCwyMS4yOCwwLDAsMCw5LjA4LDBWMTE1LjZhNC41NSw0LjU1LDAsMCwxLDkuMDksMHY2LjIyYzAsNC42NC01LjA5LDcuNDEtMTMuNjMsNy40MVpcIi8+PHBhdGggaWQ9XCJ0cmFuc3BvcnRcIiBkPVwiTTk3LjgxLDQ0LjgzSDUzLjlhNC41NSw0LjU1LDAsMSwxLDAtOS4wOUg5Ny44MWE0LjU1LDQuNTUsMCwwLDEsMCw5LjA5WlwiLz48cGF0aCBpZD1cInRyYW5zcG9ydFwiIGQ9XCJNNTQuMjgsODQuMkE2LjgsNi44LDAsMSwwLDYxLjA3LDkxYTYuOCw2LjgsMCwwLDAtNi43OS02LjhaXCIvPjxwYXRoIGlkPVwidHJhbnNwb3J0XCIgZD1cIk05Ny40Myw4NC4yYTYuOCw2LjgsMCwxLDAsNi43OSw2LjgsNi44LDYuOCwwLDAsMC02Ljc5LTYuOFpcIi8+PHBhdGggaWQ9XCJ0cmFuc3BvcnRcIiBkPVwiTTEwNy4wOCw4MUg0NC42M2E2LjgyLDYuODIsMCwwLDEtNi44Mi02LjgyVjU0LjI4YTYuODIsNi44MiwwLDAsMSw2LjgyLTYuODFoNjIuNDVhNi44Miw2LjgyLDAsMCwxLDYuODEsNi44MVY3NC4xNUE2LjgzLDYuODMsMCwwLDEsMTA3LjA4LDgxWk00NC42Myw1MmEyLjI4LDIuMjgsMCwwLDAtMi4yOCwyLjI3Vjc0LjE1YTIuMjgsMi4yOCwwLDAsMCwyLjI4LDIuMjdoNjIuNDVhMi4yNywyLjI3LDAsMCwwLDIuMjctMi4yN1Y1NC4yOEEyLjI3LDIuMjcsMCwwLDAsMTA3LjA4LDUyWlwiLz48L3N2Zz4nfSksZW1vamlDYXRlZ29yaWVzLnB1c2goe25hbWU6XCJvYmplY3RzXCIsc3ZnOic8c3ZnIGlkPVwib2JqZWN0c1wiIGRhdGEtbmFtZT1cIkxheWVyIDFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAxNTAgMTUwXCI+PHBhdGggaWQ9XCJvYmplY3RzXCIgZD1cIk0xMDcuNzgsMTI5YTQuNTUsNC41NSwwLDAsMS0yLjY3LS44N2wtMzAtMjEuNzktMzAsMjEuNzlhNC41Myw0LjUzLDAsMCwxLTUuMzQsMCw0LjU4LDQuNTgsMCwwLDEtMS42NS01LjA4TDQ5LjU5LDg3LjgyLDE5LjYsNjZhNC41NCw0LjU0LDAsMCwxLDIuNjctOC4yMkg1OS4zNEw3MC44LDIyLjU1YTQuNTUsNC41NSwwLDAsMSw4LjY0LDBMOTAuODksNTcuODFIMTI4QTQuNTQsNC41NCwwLDAsMSwxMzAuNjMsNjZsLTMwLDIxLjc5LDExLjQ2LDM1LjI1YTQuNTUsNC41NSwwLDAsMS00LjMyLDZaTTc1LjEyLDk2LjJhNC41Myw0LjUzLDAsMCwxLDIuNjcuODdsMjEuMzUsMTUuNTFMOTEsODcuNDlhNC41NSw0LjU1LDAsMCwxLDEuNjUtNS4wOEwxMTQsNjYuODlIODcuNTlhNC41NCw0LjU0LDAsMCwxLTQuMzItMy4xM2wtOC4xNS0yNS4xTDY3LDYzLjc2YTQuNTMsNC41MywwLDAsMS00LjMyLDMuMTNIMzYuMjVMNTcuNjEsODIuNDFhNC41NCw0LjU0LDAsMCwxLDEuNjUsNS4wOGwtOC4xNywyNS4wOUw3Mi40NSw5Ny4wN2E0LjUzLDQuNTMsMCwwLDEsMi42Ny0uODdaXCIvPjwvc3ZnPid9KTtlbW9qaUNhdGVnb3JpZXMubWFwKGZ1bmN0aW9uKGl0ZW0pe3ZhciBlbW9qaUxpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7ZW1vamlMaW5rLnN0eWxlLnRleHREZWNvcmF0aW9uPVwibm9uZVwiLGVtb2ppTGluay5zdHlsZS5wYWRkaW5nPVwiNXB4XCIsZW1vamlMaW5rLnN0eWxlLnBvc2l0aW9uPVwiaW5pdGlhbFwiLGVtb2ppTGluay5zdHlsZS5mb250U2l6ZT1cIjI0cHhcIixlbW9qaUxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLFwiamF2YXNjcmlwdDp2b2lkKDApXCIpLGVtb2ppTGluay5zdHlsZS5kaXNwbGF5PVwidGFibGUtY2VsbFwiLGVtb2ppTGluay5zdHlsZS50ZXh0QWxpZ249XCJjZW50ZXJcIixlbW9qaUxpbmsuaWQ9U3RyaW5nKGl0ZW0ubmFtZSksXCJmYWNlc1wiPT1TdHJpbmcoaXRlbS5uYW1lKSYmKGVtb2ppTGluay5zdHlsZS5iYWNrZ3JvdW5kPVwiI2MyYzJjMlwiKSxlbW9qaUxpbmsuaW5uZXJIVE1MPVN0cmluZyhpdGVtLnN2ZyksZW1vamlMaW5rLm9ubW91c2Vkb3duPWNsaWNrQ2F0ZWdvcnksZW1vamlDYXRlZ29yeS5hcHBlbmRDaGlsZChlbW9qaUxpbmspfSksWzEyODUxMywxMjg1MTQsMTI4NTE1LDEyODUxNiwxMjg1MTcsMTI4NTE4LDEyODUyMSwxMjg1MjIsMTI4NTIzLDEyODUyNCwxMjg1MjUsMTI4NTI3LDEyODUzMCwxMjg1MzEsMTI4NTMyLDEyODUzNCwxMjg1MzYsMTI4NTM4LDEyODU0MCwxMjg1NDEsMTI4NTQyLDEyODU0NCwxMjg1NDUsMTI4NTQ2LDEyODU0NywxMjg1NDgsMTI4NTQ5LDEyODU1MiwxMjg1NTMsMTI4NTU0LDEyODU1NSwxMjg1NTcsMTI4NTYwLDEyODU2MSwxMjg1NjIsMTI4NTYzLDEyODU2NSwxMjg1NjddLm1hcChmdW5jdGlvbihpdGVtKXt2YXIgZW1vamlMaW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2Vtb2ppTGluay5zdHlsZS50ZXh0RGVjb3JhdGlvbj1cIm5vbmVcIixlbW9qaUxpbmsuc3R5bGUubWFyZ2luPVwiNXB4XCIsZW1vamlMaW5rLnN0eWxlLnBvc2l0aW9uPVwiaW5pdGlhbFwiLGVtb2ppTGluay5zdHlsZS5mb250U2l6ZT1cIjI0cHhcIixlbW9qaUxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLFwiamF2YXNjcmlwdDp2b2lkKDApXCIpLGVtb2ppTGluay5pbm5lckhUTUw9U3RyaW5nLmZyb21Db2RlUG9pbnQoaXRlbSksZW1vamlMaW5rLm9ubW91c2Vkb3duPWNsaWNrTGluayxmYWNlc0NhdGVnb3J5LmFwcGVuZENoaWxkKGVtb2ppTGluayl9KSxbMTI4MDEyLDEyODAxMywxMjgwMTQsMTI4MDE3LDEyODAxOCwxMjgwMjAsMTI4MDIzLDEyODAyNCwxMjgwMjUsMTI4MDI2LDEyODAyNywxMjgwMjgsMTI4MDI5LDEyODAzMCwxMjgwMzEsMTI4MDMyLDEyODAzMywxMjgwMzQsMTI4MDM1LDEyODAzNiwxMjgwMzcsMTI4MDM4LDEyODAzOSwxMjgwNDAsMTI4MDQxLDEyODA0MywxMjgwNDQsMTI4MDQ1LDEyODA0NiwxMjgwNDcsMTI4MDQ4LDEyODA0OSwxMjgwNTAsMTI4MDUxLDEyODA1MiwxMjgwNTMsMTI4MDU0LDEyODA1NSwxMjgwNTYsMTI4MDU3LDEyODA1OCwxMjgwNTksMTI4MDYwXS5tYXAoZnVuY3Rpb24oaXRlbSl7dmFyIGVtb2ppTGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtlbW9qaUxpbmsuc3R5bGUudGV4dERlY29yYXRpb249XCJub25lXCIsZW1vamlMaW5rLnN0eWxlLm1hcmdpbj1cIjVweFwiLGVtb2ppTGluay5zdHlsZS5wb3NpdGlvbj1cImluaXRpYWxcIixlbW9qaUxpbmsuc3R5bGUuZm9udFNpemU9XCIyNHB4XCIsZW1vamlMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIixcImphdmFzY3JpcHQ6dm9pZCgwKVwiKSxlbW9qaUxpbmsuaW5uZXJIVE1MPVN0cmluZy5mcm9tQ29kZVBvaW50KGl0ZW0pLGVtb2ppTGluay5vbm1vdXNlZG93bj1jbGlja0xpbmssYW5pbWFsc0NhdGVnb3J5LmFwcGVuZENoaWxkKGVtb2ppTGluayl9KSxbMTI3ODEzLDEyNzgxNCwxMjc4MTUsMTI3ODE2LDEyNzgxNywxMjc4MTgsMTI3ODIwLDEyNzgyMSwxMjc4MjIsMTI3ODIzLDEyNzgyNSwxMjc4MjYsMTI3ODI3LDEyNzgyOCwxMjc4MjksMTI3ODMwLDEyNzgzMSwxMjc4MzIsMTI3ODM2LDEyNzgzNywxMjc4MzgsMTI3ODM5LDEyNzg0MCwxMjc4NDEsMTI3ODQyLDEyNzg0MywxMjc4NDQsMTI3ODQ2LDEyNzg0OCwxMjc4NDksMTI3ODUwLDEyNzg1MSwxMjc4NTIsMTI3ODUzLDEyNzg1NiwxMjc4NTgsMTI3ODU5LDEyNzg2MCwxMjc4NjMsMTI3ODY0LDEyNzg2N10ubWFwKGZ1bmN0aW9uKGl0ZW0pe3ZhciBlbW9qaUxpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7ZW1vamlMaW5rLnN0eWxlLnRleHREZWNvcmF0aW9uPVwibm9uZVwiLGVtb2ppTGluay5zdHlsZS5tYXJnaW49XCI1cHhcIixlbW9qaUxpbmsuc3R5bGUucG9zaXRpb249XCJpbml0aWFsXCIsZW1vamlMaW5rLnN0eWxlLmZvbnRTaXplPVwiMjRweFwiLGVtb2ppTGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsXCJqYXZhc2NyaXB0OnZvaWQoMClcIiksZW1vamlMaW5rLmlubmVySFRNTD1TdHJpbmcuZnJvbUNvZGVQb2ludChpdGVtKSxlbW9qaUxpbmsub25tb3VzZWRvd249Y2xpY2tMaW5rLGZvb2RDYXRlZ29yeS5hcHBlbmRDaGlsZChlbW9qaUxpbmspfSksWzEyNzkyMSwxMjc5MjMsMTI3OTM0LDEyNzkzNSwxMjc5MzYsMTI3OTM3LDEyNzkzOCwxMjc5MzksMTI3OTQwLDEyNzk0MiwxMjc5NDQsMTI3OTQ2LDEyODY3NSwxMjg2OTIsMTI4NjkzLDk5MTcsOTkxOCw5OTc4LDEyNzkwNywxMjc5MTksOTk3MV0ubWFwKGZ1bmN0aW9uKGl0ZW0pe3ZhciBlbW9qaUxpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7ZW1vamlMaW5rLnN0eWxlLnRleHREZWNvcmF0aW9uPVwibm9uZVwiLGVtb2ppTGluay5zdHlsZS5tYXJnaW49XCI1cHhcIixlbW9qaUxpbmsuc3R5bGUucG9zaXRpb249XCJpbml0aWFsXCIsZW1vamlMaW5rLnN0eWxlLmZvbnRTaXplPVwiMjRweFwiLGVtb2ppTGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsXCJqYXZhc2NyaXB0OnZvaWQoMClcIiksZW1vamlMaW5rLmlubmVySFRNTD1TdHJpbmcuZnJvbUNvZGVQb2ludChpdGVtKSxlbW9qaUxpbmsub25tb3VzZWRvd249Y2xpY2tMaW5rLHNwb3J0Q2F0ZWdvcnkuYXBwZW5kQ2hpbGQoZW1vamlMaW5rKX0pLFsxMjg2NDEsMTI4NjQyLDEyODY0NiwxMjg2NDgsMTI4NjUwLDEyODY1MywxMjg2NTQsMTI4NjU2LDEyODY2MCwxMjg2NjIsMTI4NjY0LDEyODY2NywxMjg2NjgsMTI4NjY5LDEyODY3MCwxMjg2NzEsMTI4NjcyLDEyODY3MywxMjg2NDAsMTI4NjQzLDEyODY0NCwxMjg2NDUsMTI4NjQ3LDEyODY0OSwxMjg2NTIsMTI4NjU3LDEyODY1OCwxMjg2NTksMTI4NjYxLDEyODY2MywxMjg2NjUsMTI4NjY2LDEyODY3NCwxMjg2NzYsMTI4NjkwXS5tYXAoZnVuY3Rpb24oaXRlbSl7dmFyIGVtb2ppTGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtlbW9qaUxpbmsuc3R5bGUudGV4dERlY29yYXRpb249XCJub25lXCIsZW1vamlMaW5rLnN0eWxlLm1hcmdpbj1cIjVweFwiLGVtb2ppTGluay5zdHlsZS5wb3NpdGlvbj1cImluaXRpYWxcIixlbW9qaUxpbmsuc3R5bGUuZm9udFNpemU9XCIyNHB4XCIsZW1vamlMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIixcImphdmFzY3JpcHQ6dm9pZCgwKVwiKSxlbW9qaUxpbmsuaW5uZXJIVE1MPVN0cmluZy5mcm9tQ29kZVBvaW50KGl0ZW0pLGVtb2ppTGluay5vbm1vdXNlZG93bj1jbGlja0xpbmssdHJhbnNwb3J0Q2F0ZWdvcnkuYXBwZW5kQ2hpbGQoZW1vamlMaW5rKX0pLFsxMjc4OTAsMTI3ODgwLDEyNzg4MSwxMjc4ODcsMTI3ODkxLDEyNzkwNSwxMjc5MDYsMTI3OTA4LDEyNzkwOSwxMjc5MTEsMTI3OTEyLDEyNzkxNSwxMjc5MTYsMTI3OTE4LDEyNzkxOSwxMjc5MjYsMTI3OTI3LDEyNzkyOCwxMjc5MjksMTI3OTMwLDEyNzkzMSwxMjc5MzIsMTI3OTY4LDEyNzk3MywxMjc5NzgsMTI4MTQ3LDEyODE0OCwxMjgxNDksMTI4MTUwLDEyODE1MSwxMjgxNTIsMTI4MTg3LDEyODE4NiwxMjgxOTcsMTI4MjEzLDEyODI0N10ubWFwKGZ1bmN0aW9uKGl0ZW0pe3ZhciBlbW9qaUxpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtlbW9qaUxpLnN0eWxlLmRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIixlbW9qaUxpLnN0eWxlLm1hcmdpbj1cIjVweFwiO3ZhciBlbW9qaUxpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7ZW1vamlMaW5rLnN0eWxlLnRleHREZWNvcmF0aW9uPVwibm9uZVwiLGVtb2ppTGluay5zdHlsZS5tYXJnaW49XCI1cHhcIixlbW9qaUxpbmsuc3R5bGUucG9zaXRpb249XCJpbml0aWFsXCIsZW1vamlMaW5rLnN0eWxlLmZvbnRTaXplPVwiMjRweFwiLGVtb2ppTGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsXCJqYXZhc2NyaXB0OnZvaWQoMClcIiksZW1vamlMaW5rLmlubmVySFRNTD1TdHJpbmcuZnJvbUNvZGVQb2ludChpdGVtKSxlbW9qaUxpbmsub25tb3VzZWRvd249Y2xpY2tMaW5rLG9iamVjdHNDYXRlZ29yeS5hcHBlbmRDaGlsZChlbW9qaUxpbmspfSksZW1vamlQaWNrZXIuYXBwZW5kQ2hpbGQoZW1vamlDYXRlZ29yeSksZW1vamlQaWNrZXIuYXBwZW5kQ2hpbGQoZmFjZXNDYXRlZ29yeSksZW1vamlQaWNrZXIuYXBwZW5kQ2hpbGQoYW5pbWFsc0NhdGVnb3J5KSxlbW9qaVBpY2tlci5hcHBlbmRDaGlsZChmb29kQ2F0ZWdvcnkpLGVtb2ppUGlja2VyLmFwcGVuZENoaWxkKHNwb3J0Q2F0ZWdvcnkpLGVtb2ppUGlja2VyLmFwcGVuZENoaWxkKHRyYW5zcG9ydENhdGVnb3J5KSxlbW9qaVBpY2tlci5hcHBlbmRDaGlsZChvYmplY3RzQ2F0ZWdvcnkpLGVtb2ppQ29udGFpbmVyLmFwcGVuZENoaWxkKGVtb2ppUGlja2VyKX19XSksTWV0ZW9yRW1vaml9KCk7bW9kdWxlLmV4cG9ydHM9TWV0ZW9yRW1vaml9KX0se31dfSx7fSxbMV0pKDEpfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21ldGVvci1lbW9qaS9kaXN0L21ldGVvckVtb2ppLm1pbi5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0aWYoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9