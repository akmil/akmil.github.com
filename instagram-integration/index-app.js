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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
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
        instagram_addAccount: 'instagram-accounts/',
        instagramAccount_getMetaData: 'instagram-accounts/meta',
        instagramAccount_checkpoint: 'instagram-accounts/checkpoint/',
        instagramAccount_confirmKey: 'instagram-accounts/checkpoint/',
        instagramDirect_getMetaData: 'instagram-direct/meta'
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
        STOP_FIXED_SPINNER: 'stop_fixed_spinner'
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
                    'token': '3e321e60029711e99264a0481c8e17d4' // todo: this.getToken()
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)(module)))

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


__webpack_require__(18);

var _registerForm = __webpack_require__(14);

var _registerForm2 = _interopRequireDefault(_registerForm);

var _loginForm = __webpack_require__(11);

var _loginPage = __webpack_require__(16);

var _confirmReg = __webpack_require__(7);

var _instagram = __webpack_require__(17);

var _header = __webpack_require__(9);

var header = _interopRequireWildcard(_header);

var _burgerMenu = __webpack_require__(8);

var burgerMenu = _interopRequireWildcard(_burgerMenu);

var _consts = __webpack_require__(0);

var _instagramAccountsList = __webpack_require__(10);

var instagramAccounts = _interopRequireWildcard(_instagramAccountsList);

var _messages = __webpack_require__(13);

var messages = _interopRequireWildcard(_messages);

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
    (0, _instagram.Instagram)().init();
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

/*
const staticResp = {
    'status': {
        'state': 'ok'
    },
    'data': {
        'accounts': [{
            'status': 'OK',
            'username': 'andrey.jakivchyk',
            'checkpoint': {
                'status': 'ABSENT',
                'type': 'PHONE'
            },
            'tariff': {
                'status': 'ABSENT'
            },
            'info': {
                'profile_pic_url': 'https://randomuser.me/api/portraits/men/50.jpg',
                'name': 'Андрей Якивчук',
                'biography': '',
                'url': '',
                'email': 'nidzuku@inbox.ru',
                'phone': '',
                'media_count': 2,
                'follower_count': 4,
                'following_count': 15
            }
        }, {
            'status': 'OK',
            'username': 'andrey.jakivchyk',
            'checkpoint': {
                'status': 'ABSENT',
                'type': 'EMAIL'
            },
            'tariff': {
                'status': 'ABSENT'
            },
            'info': {
                'profile_pic_url': 'https://randomuser.me/api/portraits/men/52.jpg',
                'name': 'Димон Паралон',
                'biography': 'biography text',
                'url': 'www.lenengrad.ru',
                'email': 'nidzuku@inbox.ru',
                'phone': '011-111-111-11',
                'media_count': 515,
                'following_count': 34
            }
        }, {
            'status': 'OK',
            'username': 'alex.smith',
            'checkpoint': {
                'status': 'TRIGGERED',
                'type': 'EMAIL_OR_PHONE'
            },
            'tariff': {
                'status': 'ABSENT'
            }
        }, {
            'status': 'OK',
            'username': '22andrey.jakivchyk2',
            'checkpoint': {
                'status': 'TRIGGERED',
                'type': 'PHONE'
            },
            'tariff': {
                'status': 'ABSENT'
            }
        }
        ],
        'available_proxy_purchase': true
    }
};
*/ /*
   const staticRespWithDelay = {
     'status': {
         'state': 'ok'
     },
     'data': {
         'accounts': [{
             'status': 'OK',
             'username': 'staticResp.WithDelay',
             'checkpoint': {
                 'status': 'ABSENT',
                 'type': 'PHONE'
             },
             'tariff': {
                 'status': 'ABSENT'
             }
         }],
         'available_proxy_purchase': true
     }
   };
   */

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
        var liTpl = '' + (data ? '<li class="list-inline-item ' + cssCls + '"><span class="figure">' + data + '</span><span>' + text + '</span></li>' : '<li class="list-inline-item ' + cssCls + '"><span class="figure">-</span><span>' + text + '</span></li>');
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
            $('<li class="media py-3">\n            ' + (info['profile_pic_url'] ? '<img class="ml-3 rounded" alt="User photo" src="' + info['profile_pic_url'] + '">' : '<img class="ml-3 rounded" alt="default avatar" src="' + defaultAvatarSrc + '">') + '\n            <div class="media-body d-flex">\n                <div class="col user-info">\n                    ' + (item.username ? '<p class="mt-0 mb-1 name">' + item.username + '</p>' : '') + '\n                    ' + (info.name ? '<h4 class="mt-0 mb-1">' + info.name + '</h4>' : '') + '\n                    ' + (info.name ? '' : 'commented' /* ${(info.email) ? `<p class="mt-0 mb-1">${info.email}</p>` : ''}
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
var conversation = {
    'data': {
        'meta': {
            'pagination': {
                'prev_cursor': '...',
                'next_cursor': '...'
            },
            'messages': [{
                'username': 'Nika',
                'profile_pic_url': 'https://instagram.fhel2-1.fna.fbcdn.net/vp/c9d3add4b34748e12a4229350fb611e4/5CC667B8/t51.2885-19/s150x150/41710527_319004788655082_1651515706719600640_n.jpg?_nc_ht=instagram.fhel2-1.fna.fbcdn.net',
                'side': 'left',
                'type': 'photo', // photo, video, gif, like, link
                'value': 'http://www.zr.ru/d/story/ad/913581/0-0.jpg',
                'timestamp': '14:33'

            }, {
                'side': 'right',
                'type': 'text',
                'value': 'Йоу(right)',
                'timestamp': '14:32'
            }, {
                'username': 'Nika',
                'profile_pic_url': 'https://instagram.fhel2-1.fna.fbcdn.net/vp/c9d3add4b34748e12a4229350fb611e4/5CC667B8/t51.2885-19/s150x150/41710527_319004788655082_1651515706719600640_n.jpg?_nc_ht=instagram.fhel2-1.fna.fbcdn.net',
                'side': 'left',
                'type': 'text', // photo, video, gif, like, link
                'value': 'Заходи сюда: google.com',
                'timestamp': '14:34'
            }, {
                'username': 'Nika',
                'profile_pic_url': 'https://instagram.fhel2-1.fna.fbcdn.net/vp/c9d3add4b34748e12a4229350fb611e4/5CC667B8/t51.2885-19/s150x150/41710527_319004788655082_1651515706719600640_n.jpg?_nc_ht=instagram.fhel2-1.fna.fbcdn.net',
                'side': 'left',
                'type': 'link', // photo, video, gif, like, link
                'value': 'http://www.zr.ru/d/story/ad/913581/0-0.jpg',
                'timestamp': '14:33'
            }, {
                'side': 'right',
                'type': 'photo',
                'value': 'https://s.auto.drom.ru/i24224/pubs/4/63060/gen340_2880636.jpg',
                'timestamp': '19:38'
            }, {
                'side': 'right',
                'type': 'text',
                'value': 'demos -> fineuploader.com',
                'timestamp': '19:38'
            }, {
                'side': 'right',
                'type': 'link',
                'value': 'https://fineuploader.com/demos#gallery-view',
                'timestamp': '19:38'
            }]
        }
    }
};

var userList = {
    'data': {
        'settings': {
            'do_notification': true,
            'invoke_in_millis': 3000
        },
        'meta': [{
            'username': 'the_rostyslav',
            'unread_conversations': 0,
            'pagination': {
                'prev_cursor': '...',
                'next_cursor': '...'
            },
            'conversations': [{
                'id': '1',
                'name': 'Тест1',
                'to': [{
                    'username': 'dianacober7',
                    'profile_pic_url': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAyVBMVEX///+re1CSXkV4QDqAqr9kl7GibT1eMi1zobhke5BxMyzDsK+mdU6KUDJuLCOQWj+fbUvn4N+ndUXXxLWsiXukbjrbrJiETz9TjqpkNTB1PDmpeEuVYUOIW0BqJBpZLCvv5+G/nIHk6/BxRTalajOInqlzj52aXh+NnKt1OjPNurK8xMyaeHXNnYmee2C5iHONsMOgvs5fAACDQRnAp5ygdWL38/DbzcZ9QjDQw8GUbmqVZUa7lnivjHHMtKKbZ0LBkXw/hKSnZSAqI9PKAAADR0lEQVR4nO3d21YaMRhAYbWCtB0QEKqAFbS0atXagkc81vd/qF41+amZhgxJJq619+WsyeFzbuIoi5UVIiIiIiIiIiIiKrXbj3G7jS6cNT7ErDGLLjw9fhez41OECBEiRIgQYSxhSzcLJtwWaeFMrB1QOGmoggH72apqt6+JeulJQOFeKJYUNrVwrW+6Yw8hQoQIESJE+EaFfZ35TBNQ2JrsqcIBtWp1W2jNd+sNTXycUVuNYK4cocO4BkKECL2FMC+ECBEuDjD3ZoT9nqWNu6z5uuxuQ9/yRScG5pzaogt7G5aG4tcFUXNoG9hDiBAhQoQIEZYs1Iev3tCYk9A8Rc/2TiqkcE332dzQQTjMmUOsElso32rm5CS0zpYZn2JIoXnT4YRNhAgRIkSIEKF34dVIdX2zbcp+phGvz8w3Z+IO62yZcRc313qjV07CrXH1b23r4mXWVvscb7kJ03aZaiNEmHwIEaYfQoSvqnZVbZG+2nXaX9c2XTW2sCpOgSfvVUdiDhdiV4w70tOd6KtXNqJ34SiycIQQIUKECBEiROhfOLjfVz380Omr+wMH4UCME7M96Kv3tum8n7wHIvNlB2DeuJxF4giTCyHC9EOIMP0Q/isUb7zK3vp/E6/l3ISjLdXjk+GzEvMfnAi2f9PHNOZ6etQbHTkJJba+Zsn+J/2iNW1L1wuzRK2khV7+FwMhQoQIESJEuIgwC1UqwhJDiBBh+SFEiLD8ECJEWH4IESIsP4QIEZafH+G0riq6kU2dF5dq6uW7LvQ3Z9j/WJoDfD5TnXsAjsJ9mUdR4dkn1fnyT7Hum4UQIUKECBEinGta7PTlRaiXngYUftdduuzuXOc0TnQp1g4oFHXcnuKyJ+/NThxWYeHSIUSIECFChIkKbbkJbMUXXnRs7bpkne0iutDeYXXxDsvebKEQIkw/hAjTDyHC9HuTwt87pio1Y2M7TDU2TpwzcyWgcKdiqrZuzElonDhn5hpChAgRIkSIMB3hy3jxXsoUHvzSuexj/Zuxr+acZv6pWj/wIRTLOO0jxs07CBEiRIgQIUKECwpzXqUlUcWLUBy3zT/SmvkBxLi5hhAhQoQIESJEiBAhQoQIESJEiBBhKsI/XikgQrJf9G0AAAAASUVORK5CYII='
                }, {
                    'username': 'your_dieta',
                    'profile_pic_url': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAw1BMVEX///+re1CRd15Em8XPqYYbhbiibT3brJiPd19ke5DMo32te0+eeVf17umpeEzIoHysmomJbVCndUXq5uPXxLXo18jg7PMxlMG/nIGmelPavaTSrIqXeFvv5+EmirujbDsAh7+pay6ig2yzhl2+k20AfLRFgKN+enXNoo16s9KNcl/NwrqHaUyee2BTboa4k328xMx1e4SfiXWwaRvInHG/sqeslH/MtqTjzbvh5ehJZ4BqcXzcwanUs5WvjHG7lnhYe5eai2xoAAAD/klEQVR4nO3cbVfTSBiAYQyli7SppUChUAwVWN9Qd1WQfUH5/79KP8g8T/c82emEmUl6vO+POcnMXC09DGl0Y4OIiIiIfrnKY9edOnwrhw/sC+/kjDLLSptW7vQe2lGHj93hnRqhum49hT2ECDsTQoQI2w/hOgkPzG57yiLdyeF/7QtF2Lu1z8guPN6x6qn8h0POOM4v7OUNIUKECBEiRJhNWEpK+CxdSliaxRZ+NrdZF6NUXahZzL3c59jEpe2jEj5J05LQLPofIggRIkSIECHCFoQnUjphaW/VcgifqA3cuUmMI6xx5RCqECJEiBAhQoTZhCdmF6OBK4JlYI52bm7gYgtPzs2Gc9fw8cSBHk4TpZN0QvPHcTDcLn62PY8gnMtw9gs2alFYRBEWCBEiRIgQ4doIZW813HbN7S3XCi5pLsMNzdEyCYfeQogD/3C5hTWv9EyObgcJ1XWzmp+O7ELz0zKTj2SgUK6bqXfW/IQjRIgQIUKEHRQWQ/mWb1Y8WljMZLhhkUxYnroO1IN0IhzdjF03R5IcHYfcRR2p69RoehI1t1rRgSw0DLtf9R+aqC9iZUl9/3hVgLDyv+Z99XpIE7fOaj9MOPEsqX+aWXja9wwxQYgQIUKECBGuv7DsiPCvv9+7fEOsIPxDhvvHt5HPJXz/9KH7GEI32tM/ESJEiBAhQoQtCO07UdPIQjfcfXbh6NuR1bd3Usj90pE52tHXgOFiC/UdPV3T7/EfP1x0YedCiLD7IUTY/RD+V1hNXE1/iadLrUiWGfj94em+60vDh/HSpR/z+yIL9d/frGlvt9nDeOlSj/nt7jVlLQmbPXyQLvVYA0KECFsKIUKE7ZdSOJOyu9Tc6YSF/lcRuYFq7iKdUFnzC61lIESIECFChAgTCwcB+f/HYO8Q2YV6A+fv1W++/GOYq0gpDMovbDgwQoQIESJEiDCW8GrX1XAdK+xpwlyuqxjCjT1XGUR8JX194SsIWMqSYgB1VyELUe9QEMDbVWwWQoQIESJEiHBZGLKBiyxUW7WEwrfSR++SPkgRhB/V3AmFqvHjFx3UOA8LIUKECBEiRLgsjHCTMaDd/MLrsdlLaR6Sus4e+Dq70G56eeZaVKu3kMsup20j/rfp5dZDZ4v+6i3O3HUIWw4hQoTthxDhegk/LVyVyarkhE9dET4/tNq6lLYk2YidvbGI1Rt1hrpOj2bO9zyh8HDT6nDLU63Qd2HNfAgRIkSIECHCTgqLhVXREeH0tWRO+GNKq0210t/t1Bk1Y9ipFcXYxE7r5vHle4OWajjHIUKECBEiRIgQYWKhujFXw1K3z9ZSqLEmsCkLIUKECBEiRIgQIUKECBEiRIgQIcIuCr8DS8wc0PgR4R4AAAAASUVORK5CYII='
                }],
                'last_message': 'йоу',
                'is_unread': false
            }, {
                'id': '2',
                'name': 'Sergant',
                'to': [{
                    'username': 'dianacober7',
                    'profile_pic_url': 'data:image/png;base64,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'
                }],
                'param_value': 'dianacober7',
                'last_message': 'hallo static sergant',
                'is_unread': false
            }]
        }, {
            'username': 'the_rostyslav2',
            'unread_conversations': 199,
            'pagination': {
                'prev_cursor': '...',
                'next_cursor': '...'
            },
            'conversations': [{
                'id': '3',
                'name': 'Тест22',
                'to': [{
                    'username': 'dianacober7',
                    'profile_pic_url': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAyVBMVEX///+re1CSXkV4QDqAqr9kl7GibT1eMi1zobhke5BxMyzDsK+mdU6KUDJuLCOQWj+fbUvn4N+ndUXXxLWsiXukbjrbrJiETz9TjqpkNTB1PDmpeEuVYUOIW0BqJBpZLCvv5+G/nIHk6/BxRTalajOInqlzj52aXh+NnKt1OjPNurK8xMyaeHXNnYmee2C5iHONsMOgvs5fAACDQRnAp5ygdWL38/DbzcZ9QjDQw8GUbmqVZUa7lnivjHHMtKKbZ0LBkXw/hKSnZSAqI9PKAAADR0lEQVR4nO3d21YaMRhAYbWCtB0QEKqAFbS0atXagkc81vd/qF41+amZhgxJJq619+WsyeFzbuIoi5UVIiIiIiIiIiIiKrXbj3G7jS6cNT7ErDGLLjw9fhez41OECBEiRIgQYSxhSzcLJtwWaeFMrB1QOGmoggH72apqt6+JeulJQOFeKJYUNrVwrW+6Yw8hQoQIESJE+EaFfZ35TBNQ2JrsqcIBtWp1W2jNd+sNTXycUVuNYK4cocO4BkKECL2FMC+ECBEuDjD3ZoT9nqWNu6z5uuxuQ9/yRScG5pzaogt7G5aG4tcFUXNoG9hDiBAhQoQIEZYs1Iev3tCYk9A8Rc/2TiqkcE332dzQQTjMmUOsElso32rm5CS0zpYZn2JIoXnT4YRNhAgRIkSIEKF34dVIdX2zbcp+phGvz8w3Z+IO62yZcRc313qjV07CrXH1b23r4mXWVvscb7kJ03aZaiNEmHwIEaYfQoSvqnZVbZG+2nXaX9c2XTW2sCpOgSfvVUdiDhdiV4w70tOd6KtXNqJ34SiycIQQIUKECBEiROhfOLjfVz380Omr+wMH4UCME7M96Kv3tum8n7wHIvNlB2DeuJxF4giTCyHC9EOIMP0Q/isUb7zK3vp/E6/l3ISjLdXjk+GzEvMfnAi2f9PHNOZ6etQbHTkJJba+Zsn+J/2iNW1L1wuzRK2khV7+FwMhQoQIESJEuIgwC1UqwhJDiBBh+SFEiLD8ECJEWH4IESIsP4QIEZafH+G0riq6kU2dF5dq6uW7LvQ3Z9j/WJoDfD5TnXsAjsJ9mUdR4dkn1fnyT7Hum4UQIUKECBEinGta7PTlRaiXngYUftdduuzuXOc0TnQp1g4oFHXcnuKyJ+/NThxWYeHSIUSIECFChIkKbbkJbMUXXnRs7bpkne0iutDeYXXxDsvebKEQIkw/hAjTDyHC9HuTwt87pio1Y2M7TDU2TpwzcyWgcKdiqrZuzElonDhn5hpChAgRIkSIMB3hy3jxXsoUHvzSuexj/Zuxr+acZv6pWj/wIRTLOO0jxs07CBEiRIgQIUKECwpzXqUlUcWLUBy3zT/SmvkBxLi5hhAhQoQIESJEiBAhQoQIESJEiBBhKsI/XikgQrJf9G0AAAAASUVORK5CYII='
                }],
                'last_message': 'hallo static',
                'is_unread': false
            }]
        }]
    }

};

exports.userList = userList;
exports.conversation = conversation;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.init = init;

var _dataServer = __webpack_require__(12);

var data = _interopRequireWildcard(_dataServer);

var _meteorEmoji = __webpack_require__(19);

var _meteorEmoji2 = _interopRequireDefault(_meteorEmoji);

var _user = __webpack_require__(1);

var _user2 = _interopRequireDefault(_user);

var _apiUserDirect = __webpack_require__(15);

var _apiUserDirect2 = _interopRequireDefault(_apiUserDirect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// import qq from 'fine-uploader'; //todo: fine-uploade
var token = _user2.default.getToken();

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

function fillList($list, dataArray) {
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
    cList.empty().addClass('border-light-color');
    items.forEach(function (item) {
        var message = item;
        // const checkpoint = item.checkpoint || item;

        if (message.side.toLowerCase() === 'left') {
            $('<li class="chat-item chat-item-left" value="' + message.value + '">\n                <div class="d-flex">\n                ' + (message['profile_pic_url'] ? '<div class="chat-img-box"> \n                         <img src="' + message['profile_pic_url'] + '" alt="User Avatar" class="">\n                        </div>' : '') + '\n                <div>\n                    <p class="chat-username text-muted">' + message.username + '</p>\n                    ' + insertMsg(message.value, message.type) + '\n                </div>\n                    <small class="chat-time-text">' + _apiUserDirect2.default.getFormattedDateUtil(message.timestamp) + '</small>\n                </div>\n            </li>').appendTo(cList);
        } else {
            $('<li class="chat-item justify-content-end chat-item-right" value="' + message.value + '">\n                <div class="d-flex">\n                    ' + insertMsg(message.value, message.type) + '\n                    <small class="pull-right chat-time-text">' + _apiUserDirect2.default.getFormattedDateUtil(message.timestamp) + '</small>\n                    </div>\n            </li>').appendTo(cList);
        }
    });
}

function fillUserList($list, dataArray) {
    var items = dataArray.meta;
    var cList = $list;
    var conversationDetail = function conversationDetail(items) {
        var tpl = '';
        items.forEach(function (item) {
            if (items.length > 1) {
                tpl += '<img src="' + item['profile_pic_url'] + '" class="media-photo mr-1 media-photo--group" style="width: 24px;">';
            } else {
                tpl += '<img src="' + item['profile_pic_url'] + '" class="media-photo mr-1" style="width: 24px;">\n                <div class="media-body">                \n                <h5 class="title">\n                    ' + item.username + '\n                </h5>';
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
            tpl += '<div class="media p-1" data-conversation-id="' + item.id + '">\n                    ' + conversationDetail(item.to) + '\n                    ' + (parseInt(item['last_message'], 10) > 0 ? '<p class="summary text-muted">' + item['last_message'] + '</p>' : '') + '\n                    </div>                                \n            </div>';
        });
        return tpl;
    };
    cList.empty().addClass('border-light-color');
    items.forEach(function (item, idx) {
        $('<li class="list-group-item" data-toggle="collapse" data-target="#collapse-' + idx + '" data-username="' + item.username + '" \n                aria-expanded="true" aria-controls="collapse-' + idx + '">\n            <div class="media" id="heading-' + idx + '">\n                <a href="#" class="mr-3">\n                    <img src="https://i.imgur.com/jNNT4LE.png"\n                    class="media-photo">\n                </a>\n                ' + (item['unread_conversations'] > 0 ? '<span class="badge badge-secondary position-absolute p-2">' + item['unread_conversations'] + '</span>' : '') + '\n                <div class="media-body">\n                    <h4 class="title">\n                        ' + item.username + '\n                    </h4>\n                </div>\n            </div>\n            <div id="collapse-' + idx + '" class="collapse" aria-labelledby="heading-' + idx + '" data-parent="#accordion">\n                ' + addConversations(item.conversations, idx) + '\n            </div>\n            </li>').appendTo(cList);
    });
}

function addHandlers() {
    // let checkpointType = '';

    $('#sendMessageButton').on('click', function (e) {
        // const $button = $(e.target);
        var userMsg = $('#sendMessageTextArea').val();
        console.log(userMsg);
    });
    $(document).on('click', '.list-group-item .collapse', function (e) {
        e.stopPropagation();
        var username = $(e.target).closest('.list-group-item').data('username');
        var conversationId = $(e.target).closest('.media').data('conversation-id');
        var $msgList = $('.messages-list');
        _apiUserDirect2.default.getMetadataDetailConversation(token, { username: username, conversationId: conversationId }).then(function (result) {
            fillList($msgList, result.data.meta.messages);
            $('.js_send-message-box').removeClass('d-none');
            $('.messages-list').data('conversation', JSON.stringify({ username: username, conversationId: conversationId }));
        });
    });
}

function init() {
    var conversation = data.conversation,
        userList = data.userList;

    var $msgList = $('.messages-list');
    var $userList = $('.messages-user-list');
    // check we are in correct page (messages)
    if (!isInMessagePage()) {
        return;
    }
    if (!window.location.href.includes('localhost')) {
        fillUserList($userList, userList.data);
        fillList($msgList, conversation.data.meta.messages);
        addHandlers();
    } else {
        var metadata = _apiUserDirect2.default.getMetadata(token);
        metadata.then(function (result) {
            fillUserList($userList, result.data || userList.data);
        }).then(function (result) {
            console.log('add onClick');
            _apiUserDirect2.default.getMetadata(token);
            // fillList($msgList, result.data.meta.messages || conversation.data.meta.messages);
            // addHandlers();
        });
    }
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
        // postMetadataDetailConversation(token, details, cbError) {
        //     const setting = {
        //         method: 'DELETE',
        //         body: JSON.stringify({'security_code': key}),
        //         headers: {
        //             ...this.settingPost.headers,
        //             'token': '3e321e60029711e99264a0481c8e17d4' // todo: this.getToken()
        //         }
        //     };
        //     return this.network.sendRequest(`${CONST.getPath('instagramDirect_getMetaData')}/${details.username}/${details.conversationId}`,
        //         setting, cbError);
        // }

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

    return UserConversation;
}();

var userInstance = null;

if (!userInstance) {
    userInstance = new UserConversation();
}

exports.default = userInstance;

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Instagram = Instagram;

var _user = __webpack_require__(1);

var _user2 = _interopRequireDefault(_user);

var _view = __webpack_require__(3);

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import {CONST} from '../../common/js-services/consts';

/* eslint-disable sort-vars */
// import $ from 'jquery';
function Instagram() {
    var selectorCSS = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var $buttonSubmit = $('#js_instagram-get-accounts--btn');
    var user = _user2.default,
        // service
    $list = $('.instagram-accounts-list');

    var submitForm = function submitForm(formDataObj) {
        if ($buttonSubmit.length) {
            user.getInstagramAccount().then(function (result) {
                if (result && result.status) {
                    console.log(result);
                    _view2.default.fillList($list, result.data.accounts || 'Login error');
                }
            });

            console.log('getInstagramAccount ', $buttonSubmit);
            return;
        }
    };

    var bindEvents = function bindEvents() {
        $buttonSubmit.on('click', function (e) {
            e.preventDefault();
            submitForm();
        });
    };

    function init() {
        bindEvents();
    }

    return {
        init: init
    };
}
// import cookieStorage from '../../common/js-services/cookie';

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;!function(f){if(true)module.exports=f();else if("function"==typeof define&&define.amd)define([],f);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).MeteorEmoji=f()}}(function(){return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n||e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){!function(global,factory){if(void 0!==exports)factory(module);else{var mod={exports:{}};factory(mod),global.meteorEmoji=mod.exports}}(this,function(module){"use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),MeteorEmoji=function(){function MeteorEmoji(){!function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,MeteorEmoji),this.initiate()}return _createClass(MeteorEmoji,[{key:"initiate",value:function(){var _this=this;document.querySelectorAll('[data-meteor-emoji="true"], [data-meteor-emoji-large="true"]').forEach(function(element){_this.generateElements(element)})}},{key:"generateElements",value:function(emojiInput){var clickLink=function(event){var caretPos=emojiInput.selectionStart;emojiInput.value=emojiInput.value.substring(0,caretPos)+" "+event.target.innerHTML+emojiInput.value.substring(caretPos),emojiPicker.style.display="block","undefined"!=typeof angular&&angular.element(emojiInput).triggerHandler("change")},clickCategory=function(event){emojiInput.selectionStart;emojiPicker.style.display="block";for(var hideUls=emojiPicker.querySelectorAll("ul"),i=1,l=hideUls.length;i<l;i++)hideUls[i].style.display="none";var backgroundToggle=emojiPicker.querySelectorAll(".category a");for(i=0,l=backgroundToggle.length;i<l;i++)backgroundToggle[i].style.background="none";emojiPicker.querySelector("."+event.target.id).style.display="block",emojiPicker.querySelector("#"+event.target.id).style.background="#c2c2c2"};emojiInput.style.width="100%";var emojiContainer=document.createElement("div");emojiContainer.style.position="relative",emojiInput.parentNode.replaceChild(emojiContainer,emojiInput),emojiContainer.appendChild(emojiInput);var emojiPicker=document.createElement("div");emojiPicker.tabIndex=0,emojiInput.hasAttribute("data-meteor-emoji-large")?(emojiPicker.style.zIndex="999",emojiPicker.style.display="block",emojiPicker.style.width="100%",emojiPicker.style.marginBottom="15px"):(emojiPicker.style.position="absolute",emojiPicker.style.right="0px",emojiPicker.style.top="30px",emojiPicker.style.display="none",emojiPicker.style.width="400px"),emojiPicker.style.zIndex="999",emojiPicker.style.overflow="hidden",emojiPicker.style.background="#fff",emojiPicker.style.borderRadius="5px",emojiPicker.style.boxShadow="0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",emojiPicker.style.borderRadius="2px;",emojiPicker.style.marginTop="5px",emojiPicker.style.outline="none";var emojiTrigger=document.createElement("a");emojiTrigger.style.position="absolute",emojiTrigger.style.top="10px",emojiTrigger.style.right="10px",emojiTrigger.style.textDecoration="none",emojiTrigger.setAttribute("href","javascript:void(0)"),emojiTrigger.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12 14"><path d="M8.9 8.4q-0.3 0.9-1.1 1.5t-1.8 0.6-1.8-0.6-1.1-1.5q-0.1-0.2 0-0.4t0.3-0.2q0.2-0.1 0.4 0t0.2 0.3q0.2 0.6 0.7 1t1.2 0.4 1.2-0.4 0.7-1q0.1-0.2 0.3-0.3t0.4 0 0.3 0.2 0 0.4zM5 5q0 0.4-0.3 0.7t-0.7 0.3-0.7-0.3-0.3-0.7 0.3-0.7 0.7-0.3 0.7 0.3 0.3 0.7zM9 5q0 0.4-0.3 0.7t-0.7 0.3-0.7-0.3-0.3-0.7 0.3-0.7 0.7-0.3 0.7 0.3 0.3 0.7zM11 7q0-1-0.4-1.9t-1.1-1.6-1.6-1.1-1.9-0.4-1.9 0.4-1.6 1.1-1.1 1.6-0.4 1.9 0.4 1.9 1.1 1.6 1.6 1.1 1.9 0.4 1.9-0.4 1.6-1.1 1.1-1.6 0.4-1.9zM12 7q0 1.6-0.8 3t-2.2 2.2-3 0.8-3-0.8-2.2-2.2-0.8-3 0.8-3 2.2-2.2 3-0.8 3 0.8 2.2 2.2 0.8 3z"/></svg>',emojiTrigger.onclick=function(){"none"===emojiPicker.style.display?emojiPicker.style.display="block":"block"===emojiPicker.style.display&&(emojiPicker.style.display="none"),emojiPicker.focus()},emojiInput.hasAttribute("data-meteor-emoji-large")||emojiContainer.appendChild(emojiTrigger),window.addEventListener("click",function(e){emojiInput.hasAttribute("data-meteor-emoji-large")||"block"===emojiPicker.style.display&&(emojiPicker.contains(e.target)||emojiTrigger.contains(e.target)||(emojiPicker.style.display="none"))});var facesCategory=document.createElement("ul");facesCategory.style.padding="10px 0px",facesCategory.style.margin="0",facesCategory.style.listStyle="none",facesCategory.style.textAlign="left",facesCategory.style.marginLeft="3%",facesCategory.classList.add("faces");var animalsCategory=document.createElement("ul");animalsCategory.style.padding="10px 0px",animalsCategory.style.margin="0",animalsCategory.style.listStyle="none",animalsCategory.style.textAlign="left",animalsCategory.style.marginLeft="3%",animalsCategory.classList.add("animals"),animalsCategory.style.display="none";var foodCategory=document.createElement("ul");foodCategory.style.padding="10px 0px",foodCategory.style.margin="0",foodCategory.style.listStyle="none",foodCategory.style.textAlign="left",foodCategory.style.marginLeft="3%",foodCategory.classList.add("food"),foodCategory.style.display="none";var sportCategory=document.createElement("ul");sportCategory.style.padding="10px 0px",sportCategory.style.margin="0",sportCategory.style.listStyle="none",sportCategory.style.textAlign="left",sportCategory.style.marginLeft="3%",sportCategory.classList.add("sport"),sportCategory.style.display="none";var transportCategory=document.createElement("ul");transportCategory.style.padding="10px 0px",transportCategory.style.margin="0",transportCategory.style.listStyle="none",transportCategory.style.textAlign="left",transportCategory.style.marginLeft="3%",transportCategory.classList.add("transport"),transportCategory.style.display="none";var objectsCategory=document.createElement("ul");objectsCategory.style.padding="10px 0px",objectsCategory.style.margin="0",objectsCategory.style.listStyle="none",objectsCategory.style.textAlign="left",objectsCategory.style.marginLeft="3%",objectsCategory.classList.add("objects"),objectsCategory.style.display="none";var emojiCategory=document.createElement("ul");emojiCategory.style.padding="0px",emojiCategory.style.margin="0",emojiCategory.style.display="table",emojiCategory.style.width="100%",emojiCategory.style.background="#eff0f1",emojiCategory.style.listStyle="none",emojiCategory.classList.add("category");var emojiCategories=new Array;emojiCategories.push({name:"faces",svg:'<svg id="faces" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150"><path id="faces" d="M74.34,128.48a53.5,53.5,0,1,1,37.84-15.67,53.16,53.16,0,0,1-37.84,15.67Zm0-97.89a44.4,44.4,0,1,0,31.4,13,44.07,44.07,0,0,0-31.4-13Z"/><path id="faces" d="M74.35,108A33.07,33.07,0,0,1,41.29,75a2.28,2.28,0,0,1,2.27-2.28h0A2.27,2.27,0,0,1,45.83,75a28.52,28.52,0,0,0,57,0,2.27,2.27,0,0,1,4.54,0A33.09,33.09,0,0,1,74.35,108Z"/><path id="faces" d="M58.84,62a6.81,6.81,0,1,0,6.81,6.81A6.81,6.81,0,0,0,58.84,62Z"/><path id="faces" d="M89.87,62a6.81,6.81,0,1,0,6.81,6.81A6.82,6.82,0,0,0,89.87,62Z"/></svg>'}),emojiCategories.push({name:"animals",svg:'<svg id="animals" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150"><path id="animals" d="M59.9,91.75h0c-22.46,0-41.82-19.34-44.09-44A52.1,52.1,0,0,1,16,36.8a4.51,4.51,0,0,1,2.63-3.62,39.79,39.79,0,0,1,12.74-3.37c23.92-2.15,45.35,17.83,47.74,43.86a52.77,52.77,0,0,1-.15,10.93,4.56,4.56,0,0,1-2.64,3.62,39.67,39.67,0,0,1-12.73,3.36c-1.23.11-2.45.17-3.66.17ZM24.76,40.49a41.29,41.29,0,0,0,.09,6.4C26.7,67,42.09,82.66,59.9,82.67h0c.94,0,1.88,0,2.83-.14a30.39,30.39,0,0,0,7.41-1.62,41.14,41.14,0,0,0-.11-6.4C68.09,53.38,51.11,37.08,32.17,38.86a30.78,30.78,0,0,0-7.41,1.63Z"/><path id="animals" d="M36.68,125.64a4.53,4.53,0,0,1-4.33-3.17,53.32,53.32,0,0,1-2.26-11A50.42,50.42,0,0,1,39.51,76.6c7.35-9.91,17.84-16,29.5-17,1.16-.11,2.33-.13,3.47-.13a4.54,4.54,0,0,1,4.33,3.16,51.59,51.59,0,0,1,2.27,11.08,50.39,50.39,0,0,1-9.42,34.8c-7.35,9.91-17.83,16-29.5,17a17.63,17.63,0,0,1-3.48.12ZM69.09,68.69A32.41,32.41,0,0,0,46.8,82a42.57,42.57,0,0,0-6.71,34.38,32.38,32.38,0,0,0,22.28-13.32A41.35,41.35,0,0,0,70,74.51a39.38,39.38,0,0,0-.94-5.82Z"/><path id="animals" d="M90.27,91.75c-1.22,0-2.43-.06-3.66-.17a39.67,39.67,0,0,1-12.73-3.36,4.57,4.57,0,0,1-2.64-3.61,53.38,53.38,0,0,1-.17-10.93c2.41-26,23.7-46.07,47.76-43.87a39.74,39.74,0,0,1,12.73,3.37,4.57,4.57,0,0,1,2.64,3.62,53.35,53.35,0,0,1,.16,10.92c-2.28,24.69-21.65,44-44.09,44ZM80,80.91a30.57,30.57,0,0,0,7.42,1.62c19.07,1.78,35.92-14.53,37.87-35.64a42.55,42.55,0,0,0,.1-6.4A30.86,30.86,0,0,0,118,38.86C99,37.07,82.06,53.38,80.12,74.51a43.91,43.91,0,0,0-.1,6.4Z"/><path id="animals" d="M113.49,125.64h0c-1.16,0-2.3,0-3.46-.12-23.9-2.21-41.36-25.47-38.94-51.85A53.52,53.52,0,0,1,73.34,62.6a4.55,4.55,0,0,1,4.33-3.16c1.16,0,2.34,0,3.51.13,11.64,1.07,22.11,7.12,29.48,17a50.51,50.51,0,0,1,9.42,34.81,53.51,53.51,0,0,1-2.26,11,4.54,4.54,0,0,1-4.33,3.19ZM81.08,68.69a42.53,42.53,0,0,0-1,5.82c-1.94,21.1,11.45,39.71,29.95,41.88A42.38,42.38,0,0,0,103.36,82,32.42,32.42,0,0,0,81.08,68.69Z"/><path id="animals" d="M75.08,45.45a7.83,7.83,0,1,0,7.83,7.83,7.83,7.83,0,0,0-7.83-7.83Z"/><path id="animals" d="M76.29,51.89a2.26,2.26,0,0,1-2.14-3A46,46,0,0,1,92.82,25.34a2.27,2.27,0,1,1,2.4,3.86A41.4,41.4,0,0,0,78.43,50.39a2.28,2.28,0,0,1-2.14,1.5Z"/><path id="animals" d="M73.87,51.89a2.28,2.28,0,0,1-2.14-1.5A41.35,41.35,0,0,0,54.94,29.2a2.27,2.27,0,0,1,2.39-3.86A46,46,0,0,1,76,48.85a2.28,2.28,0,0,1-1.37,2.91,2.31,2.31,0,0,1-.77.13Z"/></svg>'}),emojiCategories.push({name:"food",svg:'<svg id="food" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150"><path id="food" d="M104,20.76h.15c15.83.52,24.08,21.48,24.07,32.56.26,12.42-10.72,23.55-24,24.21a3.53,3.53,0,0,1-.46,0c-13.25-.66-24.23-11.8-24-24.3,0-11,8.26-31.95,24.07-32.47Zm0,47.69c8.25-.54,15.3-7.51,15.14-15,0-8.12-6.22-23.1-15.14-23.57-8.9.46-15.14,15.45-15.14,23.48-.14,7.61,6.9,14.59,15.14,15.13Z"/><path id="food" d="M97.19,69.21h.14a4.53,4.53,0,0,1,4.4,4.68l-1.48,46.92a1.59,1.59,0,0,0,.5,1.06,4.6,4.6,0,0,0,3.25,1.19h0a4.57,4.57,0,0,0,3.26-1.2,1.53,1.53,0,0,0,.49-1l-1.48-46.95a4.54,4.54,0,1,1,9.08-.28l1.47,46.91a10.42,10.42,0,0,1-3,7.65,13.65,13.65,0,0,1-9.81,4h0a13.58,13.58,0,0,1-9.79-4,10.42,10.42,0,0,1-3-7.67l1.48-46.89a4.53,4.53,0,0,1,4.53-4.4Z"/><path id="food" d="M41.84,69.21H42a4.53,4.53,0,0,1,4.4,4.68L44.9,120.81a1.57,1.57,0,0,0,.5,1.06,4.6,4.6,0,0,0,3.25,1.19h0a4.51,4.51,0,0,0,3.24-1.19,1.48,1.48,0,0,0,.5-1L50.93,73.89a4.53,4.53,0,0,1,4.39-4.68A4.4,4.4,0,0,1,60,73.61l1.48,46.91a10.49,10.49,0,0,1-3,7.66,13.57,13.57,0,0,1-9.78,4h0a13.59,13.59,0,0,1-9.78-4,10.48,10.48,0,0,1-3-7.67l1.48-46.9a4.54,4.54,0,0,1,4.54-4.4Z"/><path id="food" d="M28.59,20.76a4.54,4.54,0,0,1,4.54,4.54V51a15.52,15.52,0,0,0,31,0V25.3a4.55,4.55,0,0,1,9.09,0V51a24.61,24.61,0,1,1-49.21,0V25.3a4.54,4.54,0,0,1,4.54-4.54Z"/><path id="food" d="M55.34,20.76a4.54,4.54,0,0,1,4.54,4.54v19a4.54,4.54,0,1,1-9.08,0v-19a4.54,4.54,0,0,1,4.54-4.54Z"/><path id="food" d="M42,20.76a4.54,4.54,0,0,1,4.54,4.54v19a4.54,4.54,0,1,1-9.08,0v-19A4.54,4.54,0,0,1,42,20.76Z"/></svg>'}),emojiCategories.push({name:"sport",svg:'<svg id="sport" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150"><path id="sport" d="M75.35,130.24a53.49,53.49,0,1,1,53.48-53.49,53.55,53.55,0,0,1-53.48,53.49Zm0-97.89a44.41,44.41,0,1,0,44.4,44.4,44.1,44.1,0,0,0-44.4-44.4Z"/><path id="sport" d="M119.24,84.08A51.29,51.29,0,0,1,68,32.86a49.44,49.44,0,0,1,.26-5,2.26,2.26,0,0,1,2-2c1.66-.16,3.34-.25,5-.25a51.26,51.26,0,0,1,51.21,51.21c0,1.71-.09,3.38-.25,5a2.28,2.28,0,0,1-2,2c-1.65.16-3.33.25-5,.25ZM72.64,30.16c-.06.9-.08,1.79-.08,2.7a46.73,46.73,0,0,0,46.68,46.68q1.37,0,2.7-.09c.06-.89.08-1.79.08-2.7A46.72,46.72,0,0,0,75.35,30.08c-.91,0-1.82,0-2.71.08Z"/><path id="sport" d="M75.35,128A51.28,51.28,0,0,1,24.12,76.76c0-1.7.1-3.38.25-5a2.29,2.29,0,0,1,2-2c1.66-.16,3.33-.25,5.05-.25a51.27,51.27,0,0,1,51.21,51.22c0,1.69-.09,3.37-.25,5a2.27,2.27,0,0,1-2,2c-1.66.16-3.32.25-5,.25ZM28.75,74.05c-.05.9-.09,1.8-.09,2.71a46.74,46.74,0,0,0,46.69,46.67c.91,0,1.8,0,2.7-.08,0-.9.08-1.8.08-2.7A46.73,46.73,0,0,0,31.46,74c-.91,0-1.81,0-2.71.08Z"/><polygon id="sport" points="42.69 112.61 39.48 109.4 108 40.88 111.21 44.1 42.69 112.61 42.69 112.61"/></svg>'}),emojiCategories.push({name:"transport",svg:'<svg id="transport" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150"><path id="transport" d="M120.7,116H31a4.55,4.55,0,0,1-4.54-4.55V54.28A31.82,31.82,0,0,1,58.25,22.49h35.2a31.83,31.83,0,0,1,31.8,31.79v57.15A4.55,4.55,0,0,1,120.7,116Zm-85.16-9.09h80.62V54.28A22.74,22.74,0,0,0,93.45,31.57H58.25A22.74,22.74,0,0,0,35.54,54.28v52.61Z"/><path id="transport" d="M49.35,129.23c-8.53,0-13.62-2.77-13.62-7.41V115.6a4.54,4.54,0,1,1,9.08,0v4.06a21.32,21.32,0,0,0,9.09,0V115.6a4.54,4.54,0,0,1,9.08,0v6.22c0,4.64-5.09,7.41-13.63,7.41Z"/><path id="transport" d="M102.34,129.23c-8.53,0-13.62-2.77-13.62-7.41V115.6a4.54,4.54,0,0,1,9.08,0v4.06a21.28,21.28,0,0,0,9.08,0V115.6a4.55,4.55,0,0,1,9.09,0v6.22c0,4.64-5.09,7.41-13.63,7.41Z"/><path id="transport" d="M97.81,44.83H53.9a4.55,4.55,0,1,1,0-9.09H97.81a4.55,4.55,0,0,1,0,9.09Z"/><path id="transport" d="M54.28,84.2A6.8,6.8,0,1,0,61.07,91a6.8,6.8,0,0,0-6.79-6.8Z"/><path id="transport" d="M97.43,84.2a6.8,6.8,0,1,0,6.79,6.8,6.8,6.8,0,0,0-6.79-6.8Z"/><path id="transport" d="M107.08,81H44.63a6.82,6.82,0,0,1-6.82-6.82V54.28a6.82,6.82,0,0,1,6.82-6.81h62.45a6.82,6.82,0,0,1,6.81,6.81V74.15A6.83,6.83,0,0,1,107.08,81ZM44.63,52a2.28,2.28,0,0,0-2.28,2.27V74.15a2.28,2.28,0,0,0,2.28,2.27h62.45a2.27,2.27,0,0,0,2.27-2.27V54.28A2.27,2.27,0,0,0,107.08,52Z"/></svg>'}),emojiCategories.push({name:"objects",svg:'<svg id="objects" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150"><path id="objects" d="M107.78,129a4.55,4.55,0,0,1-2.67-.87l-30-21.79-30,21.79a4.53,4.53,0,0,1-5.34,0,4.58,4.58,0,0,1-1.65-5.08L49.59,87.82,19.6,66a4.54,4.54,0,0,1,2.67-8.22H59.34L70.8,22.55a4.55,4.55,0,0,1,8.64,0L90.89,57.81H128A4.54,4.54,0,0,1,130.63,66l-30,21.79,11.46,35.25a4.55,4.55,0,0,1-4.32,6ZM75.12,96.2a4.53,4.53,0,0,1,2.67.87l21.35,15.51L91,87.49a4.55,4.55,0,0,1,1.65-5.08L114,66.89H87.59a4.54,4.54,0,0,1-4.32-3.13l-8.15-25.1L67,63.76a4.53,4.53,0,0,1-4.32,3.13H36.25L57.61,82.41a4.54,4.54,0,0,1,1.65,5.08l-8.17,25.09L72.45,97.07a4.53,4.53,0,0,1,2.67-.87Z"/></svg>'});emojiCategories.map(function(item){var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.padding="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.style.display="table-cell",emojiLink.style.textAlign="center",emojiLink.id=String(item.name),"faces"==String(item.name)&&(emojiLink.style.background="#c2c2c2"),emojiLink.innerHTML=String(item.svg),emojiLink.onmousedown=clickCategory,emojiCategory.appendChild(emojiLink)}),[128513,128514,128515,128516,128517,128518,128521,128522,128523,128524,128525,128527,128530,128531,128532,128534,128536,128538,128540,128541,128542,128544,128545,128546,128547,128548,128549,128552,128553,128554,128555,128557,128560,128561,128562,128563,128565,128567].map(function(item){var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.margin="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.innerHTML=String.fromCodePoint(item),emojiLink.onmousedown=clickLink,facesCategory.appendChild(emojiLink)}),[128012,128013,128014,128017,128018,128020,128023,128024,128025,128026,128027,128028,128029,128030,128031,128032,128033,128034,128035,128036,128037,128038,128039,128040,128041,128043,128044,128045,128046,128047,128048,128049,128050,128051,128052,128053,128054,128055,128056,128057,128058,128059,128060].map(function(item){var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.margin="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.innerHTML=String.fromCodePoint(item),emojiLink.onmousedown=clickLink,animalsCategory.appendChild(emojiLink)}),[127813,127814,127815,127816,127817,127818,127820,127821,127822,127823,127825,127826,127827,127828,127829,127830,127831,127832,127836,127837,127838,127839,127840,127841,127842,127843,127844,127846,127848,127849,127850,127851,127852,127853,127856,127858,127859,127860,127863,127864,127867].map(function(item){var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.margin="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.innerHTML=String.fromCodePoint(item),emojiLink.onmousedown=clickLink,foodCategory.appendChild(emojiLink)}),[127921,127923,127934,127935,127936,127937,127938,127939,127940,127942,127944,127946,128675,128692,128693,9917,9918,9978,127907,127919,9971].map(function(item){var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.margin="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.innerHTML=String.fromCodePoint(item),emojiLink.onmousedown=clickLink,sportCategory.appendChild(emojiLink)}),[128641,128642,128646,128648,128650,128653,128654,128656,128660,128662,128664,128667,128668,128669,128670,128671,128672,128673,128640,128643,128644,128645,128647,128649,128652,128657,128658,128659,128661,128663,128665,128666,128674,128676,128690].map(function(item){var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.margin="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.innerHTML=String.fromCodePoint(item),emojiLink.onmousedown=clickLink,transportCategory.appendChild(emojiLink)}),[127890,127880,127881,127887,127891,127905,127906,127908,127909,127911,127912,127915,127916,127918,127919,127926,127927,127928,127929,127930,127931,127932,127968,127973,127978,128147,128148,128149,128150,128151,128152,128187,128186,128197,128213,128247].map(function(item){var emojiLi=document.createElement("li");emojiLi.style.display="inline-block",emojiLi.style.margin="5px";var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.margin="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.innerHTML=String.fromCodePoint(item),emojiLink.onmousedown=clickLink,objectsCategory.appendChild(emojiLink)}),emojiPicker.appendChild(emojiCategory),emojiPicker.appendChild(facesCategory),emojiPicker.appendChild(animalsCategory),emojiPicker.appendChild(foodCategory),emojiPicker.appendChild(sportCategory),emojiPicker.appendChild(transportCategory),emojiPicker.appendChild(objectsCategory),emojiContainer.appendChild(emojiPicker)}}]),MeteorEmoji}();module.exports=MeteorEmoji})},{}]},{},[1])(1)});

/***/ }),
/* 20 */
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmUwN2JhMjg4MzM3N2Y0MTA3MWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy91c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vanMtc2VydmljZXMvY29va2llLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vanMtc2VydmljZXMvdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9+L3B1YnN1Yi1qcy9zcmMvcHVic3ViLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vanMtc2VydmljZXMvbmV0d29yay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvY29uZmlybS1yZWcvY29uZmlybS1yZWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9oZWFkZXIvYnVyZ2VyLW1lbnUvYnVyZ2VyLW1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9oZWFkZXIvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaW5zdGFncmFtLWFjY291bnRzLWxpc3QvaW5zdGFncmFtLWFjY291bnRzLWxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9tZXNzYWdlcy9kYXRhU2VydmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvbWVzc2FnZXMvbWVzc2FnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9yZWdpc3Rlci1mb3JtL3JlZ2lzdGVyLWZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy9hcGktdXNlci1kaXJlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL19hdXRoL2xvZ2luLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL19pbnN0YWdyYW0vaW5zdGFncmFtLmpzIiwid2VicGFjazovLy8uL3NyYy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vfi9tZXRlb3ItZW1vamkvZGlzdC9tZXRlb3JFbW9qaS5taW4uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyJdLCJuYW1lcyI6WyJDT05TVCIsInVybCIsImJhc2UiLCJyZWdpc3RyYXRpb24iLCJsb2dpbiIsImNvbmZpcm1hdGlvbiIsImluc3RhZ3JhbV9hZGRBY2NvdW50IiwiaW5zdGFncmFtQWNjb3VudF9nZXRNZXRhRGF0YSIsImluc3RhZ3JhbUFjY291bnRfY2hlY2twb2ludCIsImluc3RhZ3JhbUFjY291bnRfY29uZmlybUtleSIsImluc3RhZ3JhbURpcmVjdF9nZXRNZXRhRGF0YSIsInVzZXIiLCJlbWFpbCIsInBhc3N3b3JkIiwidG9rZW4iLCJjb29raWVTdG9yYWdlIiwiZW1haWxDb25maXJtZWQiLCJ1aVNlbGVjdG9ycyIsImhlYWRlckxvZ2luQm94IiwiaGVhZGVyTmF2TG9naW5CdG4iLCJoZWFkZXJSZWdCb3giLCJoZWFkZXJSZWdCdG4iLCJpbnN0YWdyYW0iLCJhZGRBY2NvdW50QnRuU2VsZWN0b3IiLCJhZGRBY2NvdW50QnRuSWQiLCJldmVudHMiLCJVU0VSX0xPR0dFRCIsIlVTRVJfTE9HT1VUIiwiVVNFUl9FTUFJTF9DT05GSVJNRUQiLCJTVE9QX0ZJWEVEX1NQSU5ORVIiLCJnZXRQYXRoIiwibmFtZSIsIlVzZXIiLCJuZXR3b3JrIiwic2V0dGluZ1Bvc3QiLCJtZXRob2QiLCJoZWFkZXJzIiwiZ2V0VG9rZW4iLCJnZXQiLCJjb29raWVUb2tlbiIsImZvcm1EYXRhIiwiY2JFcnJvciIsInNldHRpbmciLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInNlbmRSZXF1ZXN0IiwidXNlcm5hbWUiLCJjaGVja3BvaW50VHlwZSIsImtleSIsInVzZXJJbnN0YW5jZSIsIkNvb2tpZVNydiIsImMiLCJkb2N1bWVudCIsImNvb2tpZSIsIm1hdGNoIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2V0IiwidmFsdWUiLCJvcHRzIiwicGF0aCIsImRheXMiLCJPYmplY3QiLCJlbnRyaWVzIiwicmVkdWNlIiwic3RyIiwiayIsInYiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZW1vdmUiLCJ2aWV3VXRpbHMiLCJzaG93SW5mb01lc3NhZ2UiLCJzZWxlY3RvciIsIm1lc3NhZ2UxIiwibWVzc2FnZTIiLCIkIiwiZW1wdHkiLCJhcHBlbmQiLCJmaWxsTGlzdCIsIiRsaXN0IiwiZGF0YUFycmF5IiwiaXRlbXMiLCJjTGlzdCIsImZvckVhY2giLCJpdGVtIiwiaSIsImxpIiwiYXBwZW5kVG8iLCJhZGRDbGFzcyIsInRleHQiLCJpc0VtYWlsIiwicmVnZXgiLCJ0ZXN0IiwiTmV0d29yayIsInJlc3VsdCIsIiRlbCIsImxlbmd0aCIsInN0YXR1cyIsInN0YXRlIiwibWVzc2FnZSIsInJlc3BvbnNlIiwiZXJyb3IiLCJFcnJvciIsInN0YXR1c1RleHQiLCJVUkwiLCJPUFRTIiwiZmV0Y2giLCJ0aGVuIiwiUHJvbWlzZSIsImFsbCIsImpzb24iLCJvayIsImNiRXJyb3JEZWZhdWx0IiwiY2hlY2tTdGF0dXMiLCJoZWFkZXIiLCJidXJnZXJNZW51IiwiaW5zdGFncmFtQWNjb3VudHMiLCJtZXNzYWdlcyIsInNlbGVjdG9yQ3NzTG9naW5Gb3JtIiwiX2xvZ2luQm94IiwiX2Zvcm1JZCIsIl9idXR0b25TdWJtaXRJZCIsIl9zaG93TG9naW5Cb3hCdG5JZCIsInNlbGVjdG9yQ3NzTG9naW5Gb3JtSW5zdGFncmFtIiwiaXNMb2dpbkluc3RhZ3JhbSIsImluaXQiLCJpbml0SGVhZGVyIiwiY29uZmlybWF0aW9uV2l0aFJlZGlyZWN0IiwicGFyc2VRdWVyeVN0cmluZyIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwib2JqVVJMIiwicmVwbGFjZSIsIlJlZ0V4cCIsIiQwIiwiJDEiLCIkMiIsInBhcmFtcyIsInNlbmRDb25maXJtIiwiY29uZmlybSIsImRhdGEiLCJjdXN0b21lcnNEYXRhU3RyaW5nIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiY29uc29sZSIsImxvZyIsInNldFRpbWVvdXQiLCJyZWRpcmVjdCIsInBhdGhuYW1lIiwiaW5kZXhPZiIsInNlbGVjdG9yc0VsIiwibGVmdE1lbnUiLCJoYW1idXJnZXJCdXR0b25DbHMiLCJoYW1idXJnZXJNZW51Q2xzIiwiaGFtYnVyZ2VyTWVudU9wZW5lZENsYXNzIiwiaGFtYnVyZ2VyQnV0dG9uQ2xvc2VDbGFzcyIsInJpZ2h0TWVudSIsInN1YkhlYWRlciIsInRvZ2dsZUhhbWJ1cmdlck1lbnUiLCJtZW51TmFtZSIsInRvZ2dsZUNsYXNzIiwib24iLCJiaW5kIiwic2VsZWN0b3JMb2dpblN0YXRlIiwic2VsZWN0b3JFbWFpbENvbmZpcm1TdGF0ZSIsImNsb3NlQ2xhc3MiLCJvcGVuZWRDbGFzcyIsImVtYWlsTm90Q29uZmlybWVkIiwiJGVtYWlsbk1zZyIsImNzcyIsIm9uTG9naW5TdWJzY3JpYmUiLCJtc2ciLCJyZW1vdmVDbGFzcyIsIiRsb2dpbk1zZyIsImlzRW1haWxDb25maXJtZWQiLCJzaG93TG9nb3V0IiwiaXNMb2dnZWQiLCJpc0xvZ2dlZEluIiwicGFyZW50Iiwic2hvdyIsIm9sZFVSTCIsInJlZmVycmVyIiwiaW5jbHVkZXMiLCIkbG9naW5Cb3giLCIkcmVnaXN0ZXJCb3giLCJzdWJzY3JpYmUiLCJoaWRlIiwiYWRkSW5zdGFncmFtQWNjb3VudCIsIm5ld0Zvcm1EYXRhIiwiJG1zZ0xpc3QiLCJjYXRjaCIsImVyciIsImFkZE9uTG9hZEhhbmRsZXJzIiwiZSIsImJ0biIsInRhcmdldCIsIiRtb2RhbEJvZHkiLCJjbG9zZXN0IiwiZmluZCIsInZhbCIsInRyaW0iLCIkZm9ybSIsImZvcm0iLCJjc3NWYWxpZGF0aW9uQ2xhc3MiLCJwcmV2ZW50RGVmYXVsdCIsImNoZWNrVmFsaWRpdHkiLCJyZXBvcnRWYWxpZGl0eSIsImFkZExpc3RIYW5kbGVyIiwiJGJ1dHRvbiIsInNlbmRUbyIsInN0b3BQcm9wYWdhdGlvbiIsIm1vZGFsIiwiZ2V0U2VjdXJpdHlLZXkiLCIkbW9kYWwiLCIka2V5SW5wdXQiLCJjb25maXJtU2VjdXJpdHlLZXkiLCJsZW4iLCJtaW5MZW4iLCJOdW1iZXIiLCJhdHRyIiwib25IaWRlTW9kYWwiLCJyZW1vdmVBdHRyIiwidHlwZVNlbGVjdGVkIiwiY2hlY2twb2ludFR5cGVBY3RpdmUiLCJtb2RhbENvbmZpZyIsIl9jb25maWciLCJkZWZhdWx0QXZhdGFyU3JjIiwiaW5zZXJ0SXRlbSIsImNzc0NscyIsImxpVHBsIiwic3RhdHMiLCJpbmZvIiwidHBsIiwiY2hlY2twb2ludCIsInR5cGUiLCJtZXRhZGF0YSIsImdldE1ldGFkYXRhIiwicmVzZW5kUmVxdWVzdCIsImlzU2VuZFJlcU9uY2UiLCJjaGVja1Jlc3BvbnNlIiwiaXNSZXNlbmRSZXF1ZXN0IiwiYWNjb3VudHMiLCJMb2dpbkZvcm0iLCJzZWxlY3RvckNzcyIsIiRlbWFpbCIsIiR0ZXh0QXJlYURlc2NyaXB0aW9uIiwidXNlckxvZ2luSGVhZGVyIiwiX2Zvcm1EYXRhIiwic3VibWl0Rm9ybSIsImZvcm1EYXRhT2JqIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJwdWJsaXNoIiwibG9nT3V0IiwiYmluZEV2ZW50cyIsIiRzaG93TG9naW5Cb3hCdG5JZCIsIiRidXR0b25TdWJtaXQiLCJldmVudCIsImlzTG9naW5CdG5DbGljayIsImlzQWRkSW5zdGFncmFtQnRuQ2xpY2tlZCIsImhhc0NsYXNzIiwiY29udmVyc2F0aW9uIiwidXNlckxpc3QiLCJpc0luTWVzc2FnZVBhZ2UiLCIkdXNlckxpc3QiLCJyZWFkeSIsIm0iLCIkcGlja2VyIiwic3R5bGUiLCJzdHlsZU5ldyIsImluc2VydE1zZyIsInRvTG93ZXJDYXNlIiwic2lkZSIsImdldEZvcm1hdHRlZERhdGVVdGlsIiwidGltZXN0YW1wIiwiZmlsbFVzZXJMaXN0IiwibWV0YSIsImNvbnZlcnNhdGlvbkRldGFpbCIsImFkZENvbnZlcnNhdGlvbnMiLCJjb252ZXJzYXRpb25zIiwiaWQiLCJ0byIsInBhcnNlSW50IiwiaWR4IiwiYWRkSGFuZGxlcnMiLCJ1c2VyTXNnIiwiY29udmVyc2F0aW9uSWQiLCJnZXRNZXRhZGF0YURldGFpbENvbnZlcnNhdGlvbiIsImhyZWYiLCJzZWxlY3RvckNscyIsInN1Ym1pdEJ0biIsIlJlZ2lzdGVyRm9ybSIsIiRwYXNzd29yZCIsIiRwYXNzd29yZENvbmZpcm0iLCJwYXNzd29yZENvbmZpcm0iLCJyZWdpc3RlciIsInJlZ2lzdGVyQm94IiwiJGJ0biIsImlzIiwiaXNSZWdCdG5DbGljayIsIlVzZXJDb252ZXJzYXRpb24iLCJkZXRhaWxzIiwidFN0YW1wIiwic2hvd0Z1bGxUaW1lIiwiZGF0ZSIsIkRhdGUiLCJtb250aCIsImdldE1vbnRoIiwiZGF5IiwiZ2V0RGF0ZSIsImhvdXIiLCJnZXRIb3VycyIsIm1pbiIsImdldE1pbnV0ZXMiLCJzZWMiLCJnZXRTZWNvbmRzIiwiZ2V0RnVsbFllYXIiLCJMb2dpblBhZ2UiLCJJbnN0YWdyYW0iLCJzZWxlY3RvckNTUyIsImdldEluc3RhZ3JhbUFjY291bnQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hFTyxJ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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJpbmRleC1hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmZTA3YmEyODgzMzc3ZjQxMDcxZiIsImV4cG9ydCBjb25zdCBDT05TVCA9IHtcclxuICAgIHVybDoge1xyXG4gICAgICAgIGJhc2U6ICdodHRwOi8vYXBpLmx1eGdyYW0ucnUvdjEvJyxcclxuICAgICAgICByZWdpc3RyYXRpb246ICdyZWdpc3RyYXRpb24vYmFzaWMvJyxcclxuICAgICAgICBsb2dpbjogJ3JlZ2lzdHJhdGlvbi9iYXNpYy9sb2dpbicsXHJcbiAgICAgICAgY29uZmlybWF0aW9uOiAncmVnaXN0cmF0aW9uL2Jhc2ljL2NvbmZpcm1hdGlvbj90b2tlbicsXHJcbiAgICAgICAgaW5zdGFncmFtX2FkZEFjY291bnQ6ICdpbnN0YWdyYW0tYWNjb3VudHMvJyxcclxuICAgICAgICBpbnN0YWdyYW1BY2NvdW50X2dldE1ldGFEYXRhOiAnaW5zdGFncmFtLWFjY291bnRzL21ldGEnLFxyXG4gICAgICAgIGluc3RhZ3JhbUFjY291bnRfY2hlY2twb2ludDogJ2luc3RhZ3JhbS1hY2NvdW50cy9jaGVja3BvaW50LycsXHJcbiAgICAgICAgaW5zdGFncmFtQWNjb3VudF9jb25maXJtS2V5OiAnaW5zdGFncmFtLWFjY291bnRzL2NoZWNrcG9pbnQvJyxcclxuICAgICAgICBpbnN0YWdyYW1EaXJlY3RfZ2V0TWV0YURhdGE6ICdpbnN0YWdyYW0tZGlyZWN0L21ldGEnXHJcbiAgICB9LFxyXG4gICAgdXNlcjoge1xyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgdG9rZW46ICcnXHJcbiAgICB9LFxyXG4gICAgY29va2llU3RvcmFnZToge1xyXG4gICAgICAgIHRva2VuOiAndXNlcl9sb2dnZWQnLFxyXG4gICAgICAgIGVtYWlsQ29uZmlybWVkOiAnZW1haWxfY29uZmlybWVkJ1xyXG4gICAgfSxcclxuICAgIHVpU2VsZWN0b3JzOiB7XHJcbiAgICAgICAgaGVhZGVyTG9naW5Cb3g6ICduYXYgLmxvZ2luLWJveCcsXHJcbiAgICAgICAgaGVhZGVyTmF2TG9naW5CdG46ICduYXYgdWwgbGkgLmpzX2xvZ2luJyxcclxuICAgICAgICBoZWFkZXJSZWdCb3g6ICduYXYgLnJlZ2lzdGVyLWJveCcsXHJcbiAgICAgICAgaGVhZGVyUmVnQnRuOiAnbmF2IHVsIGxpIC5qc19yZWdpc3RlcicsXHJcbiAgICAgICAgaW5zdGFncmFtOiB7XHJcbiAgICAgICAgICAgIGFkZEFjY291bnRCdG5TZWxlY3RvcjogJyNqc19zaG93LWxvZ2luLWJveCcsXHJcbiAgICAgICAgICAgIGFkZEFjY291bnRCdG5JZDogJ2pzX3Nob3ctbG9naW4tYm94J1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBldmVudHM6IHtcclxuICAgICAgICBVU0VSX0xPR0dFRDogJ3VzZXJfbG9nZ2VkJyxcclxuICAgICAgICBVU0VSX0xPR09VVDogJ3VzZXJfbG9nb3V0JyxcclxuICAgICAgICBVU0VSX0VNQUlMX0NPTkZJUk1FRDogJ3VzZXJfZW1haWxfY29uZmlybWVkJyxcclxuICAgICAgICBTVE9QX0ZJWEVEX1NQSU5ORVI6ICdzdG9wX2ZpeGVkX3NwaW5uZXInXHJcbiAgICB9LFxyXG4gICAgZ2V0UGF0aChuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsLmJhc2UgKyB0aGlzLnVybFtuYW1lXTtcclxuICAgIH1cclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMuanMiLCIvLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQge0NPTlNUfSBmcm9tICcuL2NvbnN0cyc7XHJcbmltcG9ydCBOZXR3b3JrIGZyb20gJy4vbmV0d29yayc7XHJcbmltcG9ydCBDb29raWVTdG9yYWdlIGZyb20gJy4vY29va2llJztcclxuXHJcbmNsYXNzIFVzZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubmV0d29yayA9IG5ldyBOZXR3b3JrKCk7XHJcbiAgICAgICAgdGhpcy5jb29raWVTdG9yYWdlID0gQ29va2llU3RvcmFnZTtcclxuICAgICAgICB0aGlzLnNldHRpbmdQb3N0ID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgaXNMb2dnZWRJbigpIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLmdldFRva2VuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNFbWFpbENvbmZpcm1lZCgpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuY29va2llU3RvcmFnZS5nZXQoQ09OU1QuY29va2llU3RvcmFnZS5lbWFpbENvbmZpcm1lZCkgPT09ICdjb25maXJtZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUb2tlbigpIHtcclxuICAgICAgICBjb25zdCBjb29raWVUb2tlbiA9IHRoaXMuY29va2llU3RvcmFnZS5nZXQoQ09OU1QuY29va2llU3RvcmFnZS50b2tlbik7XHJcbiAgICAgICAgcmV0dXJuIGNvb2tpZVRva2VuO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luKGZvcm1EYXRhLCBjYkVycm9yKSB7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZyA9IHsuLi50aGlzLnNldHRpbmdQb3N0LCBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSl9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QoQ09OU1QuZ2V0UGF0aCgnbG9naW4nKSwgc2V0dGluZywgY2JFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkSW5zdGFncmFtQWNjb3VudChmb3JtRGF0YSwgY2JFcnJvcikge1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSB7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdC5oZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgdG9rZW46IHRoaXMuZ2V0VG9rZW4oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KENPTlNULmdldFBhdGgoJ2luc3RhZ3JhbV9hZGRBY2NvdW50JyksIHNldHRpbmcsIGNiRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEluc3RhZ3JhbUFjY291bnQoKSB7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZyA9IHtcclxuICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdCxcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdC5oZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgdG9rZW46IHRoaXMuZ2V0VG9rZW4oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KENPTlNULmdldFBhdGgoJ2luc3RhZ3JhbV9hZGRBY2NvdW50JyksIHNldHRpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmZpcm0odG9rZW4pIHtcclxuICAgICAgICAvLyBjb25zdCBjb25maXJtVXJsID0gQ09OU1QuZ2V0UGF0aCgnY29uZmlybWF0aW9uJyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChgJHtDT05TVC5nZXRQYXRoKCdjb25maXJtYXRpb24nKSArIHRva2VufWApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyKGZvcm1EYXRhKSB7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZyA9IHtcclxuICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdCxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KENPTlNULmdldFBhdGgoJ3JlZ2lzdHJhdGlvbicpLCBzZXR0aW5nKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRNZXRhZGF0YSh0b2tlbiwgY2JFcnJvcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QoYCR7Q09OU1QuZ2V0UGF0aCgnaW5zdGFncmFtQWNjb3VudF9nZXRNZXRhRGF0YScpfWAsIHtoZWFkZXJzOiB7dG9rZW59fSwgY2JFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2VjdXJpdHlLZXkodXNlcm5hbWUsIGNoZWNrcG9pbnRUeXBlKSB7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZyA9IHtcclxuICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdCxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyd0eXBlJzogY2hlY2twb2ludFR5cGV9KSwgLy8gdG9kbzogdG1wIHNldCwgaXQgc2hvdWxkIGJlICd0eXBlJ1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnNldHRpbmdQb3N0LmhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICAndG9rZW4nOiAnM2UzMjFlNjAwMjk3MTFlOTkyNjRhMDQ4MWM4ZTE3ZDQnIC8vIHRvZG86IHRoaXMuZ2V0VG9rZW4oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KGAke0NPTlNULmdldFBhdGgoJ2luc3RhZ3JhbUFjY291bnRfY2hlY2twb2ludCcpfSR7dXNlcm5hbWV9YCwgc2V0dGluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uZmlybVNlY3VyaXR5S2V5KGtleSwgdXNlcm5hbWUpIHtcclxuICAgICAgICBjb25zdCBzZXR0aW5nID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7J3NlY3VyaXR5X2NvZGUnOiBrZXl9KSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdC5oZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgJ3Rva2VuJzogJzNlMzIxZTYwMDI5NzExZTk5MjY0YTA0ODFjOGUxN2Q0JyAvLyB0b2RvOiB0aGlzLmdldFRva2VuKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChgJHtDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1BY2NvdW50X2NvbmZpcm1LZXknKX0ke3VzZXJuYW1lfWAsIHNldHRpbmcpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxubGV0IHVzZXJJbnN0YW5jZSA9IG51bGw7XHJcblxyXG5pZiAoIXVzZXJJbnN0YW5jZSkge1xyXG4gICAgdXNlckluc3RhbmNlID0gbmV3IFVzZXIoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlckluc3RhbmNlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uL2pzLXNlcnZpY2VzL3VzZXIuanMiLCJcclxuY29uc3QgQ29va2llU3J2ID0ge1xyXG4gICAgZ2V0OiBuYW1lID0+IHtcclxuICAgICAgICBjb25zdCBjID0gZG9jdW1lbnQuY29va2llLm1hdGNoKGAoPzooPzpefC4qOyAqKSR7bmFtZX0gKj0gKihbXjtdKikuKiQpfF4uKiRgKVsxXTtcclxuICAgICAgICBpZiAoYykge1xyXG4gICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGMpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXQ6IChuYW1lLCB2YWx1ZSwgb3B0cyA9IHtwYXRoOiAnLycsIGRheXM6IDM2NX0pID0+IHtcclxuICAgICAgICBpZiAob3B0cy5kYXlzKSB7XHJcbiAgICAgICAgICAgIG9wdHNbJ21heC1hZ2UnXSA9IG9wdHMuZGF5cyAqIDYwICogNjAgKiAyNDtcclxuICAgICAgICAgICAgZGVsZXRlIG9wdHMuZGF5cztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXHJcbiAgICAgICAgb3B0cyA9IE9iamVjdC5lbnRyaWVzKG9wdHMpLnJlZHVjZSgoc3RyLCBbaywgdl0pID0+IGAke3N0cn07ICR7a309JHt2fWAsICcnKTtcclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBgJHtuYW1lfT0ke2VuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkgKyBvcHRzfWA7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlOiAobmFtZSwgb3B0cykgPT4gQ29va2llU3J2LnNldChuYW1lLCAnJywgeydtYXgtYWdlJzogLTEsIHBhdGg6ICcvJywgZGF5czogMCwgLi4ub3B0c30pXHJcbiAgICAvLyBwYXRoICYgZG9tYWluIG11c3QgbWF0Y2ggY29va2llIGJlaW5nIGRlbGV0ZWRcclxufTtcclxuXHJcbi8qXHJcbmNsYXNzIENvb2tpZVN0b3JhZ2Uge1xyXG4gICAgcmVhZChrZXkpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9ICQuY29va2llKGtleSk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyBudWxsIDogdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q29va2llKG5hbWUsIHZhbHVlLCBkYXlzKSB7XHJcbiAgICAgICAgbGV0IGV4cGlyZXMgPSAnJztcclxuICAgICAgICBpZiAoZGF5cykge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKGRheXMgKiAyNCAqIDYwICogNjAgKiAxMDAwKSk7XHJcbiAgICAgICAgICAgIGV4cGlyZXMgPSBgOyBleHBpcmVzPSR7ZGF0ZS50b1VUQ1N0cmluZygpfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGAke25hbWV9ID0keyh2YWx1ZSB8fCAnJykgKyBleHBpcmVzfTsgcGF0aD0vYDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb29raWUobmFtZSkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gYDsgJHtkb2N1bWVudC5jb29raWV9YDtcclxuICAgICAgICBjb25zdCBwYXJ0cyA9IHZhbHVlLnNwbGl0KGA7ICR7bmFtZX09YCk7XHJcbiAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCA9PSAyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJ0cy5wb3AoKS5zcGxpdCgnOycpLnNoaWZ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb29raWVTcnY7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tb24vanMtc2VydmljZXMvY29va2llLmpzIiwiLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuLy8gaW1wb3J0IHtDT05TVH0gZnJvbSAnLi9jb25zdHMnO1xyXG5cclxuZnVuY3Rpb24gdmlld1V0aWxzKCkge1xyXG4gICAgZnVuY3Rpb24gc2hvd0luZm9NZXNzYWdlKHNlbGVjdG9yLCBtZXNzYWdlMSwgbWVzc2FnZTIpIHtcclxuICAgICAgICAkKHNlbGVjdG9yKS5lbXB0eSgpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoYCR7KG1lc3NhZ2UxKSA/IGA8cD5zdGF0dXM6ICR7bWVzc2FnZTF9PC9wPmAgOiAnJ31gKVxyXG4gICAgICAgICAgICAuYXBwZW5kKGA8cD4ke21lc3NhZ2UyfSA8L3A+YCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZmlsbExpc3QoJGxpc3QsIGRhdGFBcnJheSkge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gZGF0YUFycmF5O1xyXG4gICAgICAgIGNvbnN0IGNMaXN0ID0gJGxpc3Q7XHJcbiAgICAgICAgY0xpc3QuZW1wdHkoKTtcclxuICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpID0gJCgnPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCI+PC9saT4nKVxyXG4gICAgICAgICAgICAgICAgLmFwcGVuZFRvKGNMaXN0KTtcclxuICAgICAgICAgICAgJCgnPGEvPicpLmFkZENsYXNzKCd1aS1hbGwnKVxyXG4gICAgICAgICAgICAgICAgLnRleHQoaXRlbS51c2VybmFtZSlcclxuICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhsaSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNFbWFpbChlbWFpbCkge1xyXG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlICovXHJcbiAgICAgICAgY29uc3QgcmVnZXggPSAvXihbYS16QS1aMC05Xy4rLV0pK1xcQCgoW2EtekEtWjAtOS1dKStcXC4pKyhbYS16QS1aMC05XXsyLDR9KSskLztcclxuICAgICAgICByZXR1cm4gcmVnZXgudGVzdChlbWFpbCk7XHJcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSAqL1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2hvd0luZm9NZXNzYWdlLFxyXG4gICAgICAgIGZpbGxMaXN0LFxyXG4gICAgICAgIGlzRW1haWxcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHZpZXdVdGlscygpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uL2pzLXNlcnZpY2VzL3ZpZXcuanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMCwyMDExLDIwMTIsMjAxMywyMDE0IE1vcmdhbiBSb2RlcmljayBodHRwOi8vcm9kZXJpY2suZGtcbiAqIExpY2Vuc2U6IE1JVCAtIGh0dHA6Ly9tcmducmRyY2subWl0LWxpY2Vuc2Uub3JnXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL21yb2Rlcmljay9QdWJTdWJKU1xuICovXG5cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSl7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIFB1YlN1YiA9IHt9O1xuICAgIHJvb3QuUHViU3ViID0gUHViU3ViO1xuXG4gICAgdmFyIGRlZmluZSA9IHJvb3QuZGVmaW5lO1xuXG4gICAgZmFjdG9yeShQdWJTdWIpO1xuXG4gICAgLy8gQU1EIHN1cHBvcnRcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKXtcbiAgICAgICAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gUHViU3ViOyB9KTtcblxuICAgICAgICAvLyBDb21tb25KUyBhbmQgTm9kZS5qcyBtb2R1bGUgc3VwcG9ydFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKXtcbiAgICAgICAgaWYgKG1vZHVsZSAhPT0gdW5kZWZpbmVkICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgICAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBQdWJTdWI7IC8vIE5vZGUuanMgc3BlY2lmaWMgYG1vZHVsZS5leHBvcnRzYFxuICAgICAgICB9XG4gICAgICAgIGV4cG9ydHMuUHViU3ViID0gUHViU3ViOyAvLyBDb21tb25KUyBtb2R1bGUgMS4xLjEgc3BlY1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBQdWJTdWI7IC8vIENvbW1vbkpTXG4gICAgfVxuXG59KCggdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgd2luZG93ICkgfHwgdGhpcywgZnVuY3Rpb24gKFB1YlN1Yil7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIG1lc3NhZ2VzID0ge30sXG4gICAgICAgIGxhc3RVaWQgPSAtMTtcblxuICAgIGZ1bmN0aW9uIGhhc0tleXMob2JqKXtcbiAgICAgICAgdmFyIGtleTtcblxuICAgICAgICBmb3IgKGtleSBpbiBvYmope1xuICAgICAgICAgICAgaWYgKCBvYmouaGFzT3duUHJvcGVydHkoa2V5KSApe1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB0aHJvd3MgdGhlIHBhc3NlZCBleGNlcHRpb24sIGZvciB1c2UgYXMgYXJndW1lbnQgZm9yIHNldFRpbWVvdXRcbiAgICAgKiBAYWxpYXMgdGhyb3dFeGNlcHRpb25cbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0geyBPYmplY3QgfSBleCBBbiBFcnJvciBvYmplY3RcbiAgICAgKi9cbiAgICBmdW5jdGlvbiB0aHJvd0V4Y2VwdGlvbiggZXggKXtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHJlVGhyb3dFeGNlcHRpb24oKXtcbiAgICAgICAgICAgIHRocm93IGV4O1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbGxTdWJzY3JpYmVyV2l0aERlbGF5ZWRFeGNlcHRpb25zKCBzdWJzY3JpYmVyLCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyKCBtZXNzYWdlLCBkYXRhICk7XG4gICAgICAgIH0gY2F0Y2goIGV4ICl7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCB0aHJvd0V4Y2VwdGlvbiggZXggKSwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWxsU3Vic2NyaWJlcldpdGhJbW1lZGlhdGVFeGNlcHRpb25zKCBzdWJzY3JpYmVyLCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHN1YnNjcmliZXIoIG1lc3NhZ2UsIGRhdGEgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxpdmVyTWVzc2FnZSggb3JpZ2luYWxNZXNzYWdlLCBtYXRjaGVkTWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApe1xuICAgICAgICB2YXIgc3Vic2NyaWJlcnMgPSBtZXNzYWdlc1ttYXRjaGVkTWVzc2FnZV0sXG4gICAgICAgICAgICBjYWxsU3Vic2NyaWJlciA9IGltbWVkaWF0ZUV4Y2VwdGlvbnMgPyBjYWxsU3Vic2NyaWJlcldpdGhJbW1lZGlhdGVFeGNlcHRpb25zIDogY2FsbFN1YnNjcmliZXJXaXRoRGVsYXllZEV4Y2VwdGlvbnMsXG4gICAgICAgICAgICBzO1xuXG4gICAgICAgIGlmICggIW1lc3NhZ2VzLmhhc093blByb3BlcnR5KCBtYXRjaGVkTWVzc2FnZSApICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChzIGluIHN1YnNjcmliZXJzKXtcbiAgICAgICAgICAgIGlmICggc3Vic2NyaWJlcnMuaGFzT3duUHJvcGVydHkocykpe1xuICAgICAgICAgICAgICAgIGNhbGxTdWJzY3JpYmVyKCBzdWJzY3JpYmVyc1tzXSwgb3JpZ2luYWxNZXNzYWdlLCBkYXRhICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVEZWxpdmVyeUZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICl7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBkZWxpdmVyTmFtZXNwYWNlZCgpe1xuICAgICAgICAgICAgdmFyIHRvcGljID0gU3RyaW5nKCBtZXNzYWdlICksXG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSB0b3BpYy5sYXN0SW5kZXhPZiggJy4nICk7XG5cbiAgICAgICAgICAgIC8vIGRlbGl2ZXIgdGhlIG1lc3NhZ2UgYXMgaXQgaXMgbm93XG4gICAgICAgICAgICBkZWxpdmVyTWVzc2FnZShtZXNzYWdlLCBtZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zKTtcblxuICAgICAgICAgICAgLy8gdHJpbSB0aGUgaGllcmFyY2h5IGFuZCBkZWxpdmVyIG1lc3NhZ2UgdG8gZWFjaCBsZXZlbFxuICAgICAgICAgICAgd2hpbGUoIHBvc2l0aW9uICE9PSAtMSApe1xuICAgICAgICAgICAgICAgIHRvcGljID0gdG9waWMuc3Vic3RyKCAwLCBwb3NpdGlvbiApO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoJy4nKTtcbiAgICAgICAgICAgICAgICBkZWxpdmVyTWVzc2FnZSggbWVzc2FnZSwgdG9waWMsIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtZXNzYWdlSGFzU3Vic2NyaWJlcnMoIG1lc3NhZ2UgKXtcbiAgICAgICAgdmFyIHRvcGljID0gU3RyaW5nKCBtZXNzYWdlICksXG4gICAgICAgICAgICBmb3VuZCA9IEJvb2xlYW4obWVzc2FnZXMuaGFzT3duUHJvcGVydHkoIHRvcGljICkgJiYgaGFzS2V5cyhtZXNzYWdlc1t0b3BpY10pKSxcbiAgICAgICAgICAgIHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoICcuJyApO1xuXG4gICAgICAgIHdoaWxlICggIWZvdW5kICYmIHBvc2l0aW9uICE9PSAtMSApe1xuICAgICAgICAgICAgdG9waWMgPSB0b3BpYy5zdWJzdHIoIDAsIHBvc2l0aW9uICk7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IHRvcGljLmxhc3RJbmRleE9mKCAnLicgKTtcbiAgICAgICAgICAgIGZvdW5kID0gQm9vbGVhbihtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eSggdG9waWMgKSAmJiBoYXNLZXlzKG1lc3NhZ2VzW3RvcGljXSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZvdW5kO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHB1Ymxpc2goIG1lc3NhZ2UsIGRhdGEsIHN5bmMsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKXtcbiAgICAgICAgbWVzc2FnZSA9ICh0eXBlb2YgbWVzc2FnZSA9PT0gJ3N5bWJvbCcpID8gbWVzc2FnZS50b1N0cmluZygpIDogbWVzc2FnZTtcblxuICAgICAgICB2YXIgZGVsaXZlciA9IGNyZWF0ZURlbGl2ZXJ5RnVuY3Rpb24oIG1lc3NhZ2UsIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKSxcbiAgICAgICAgICAgIGhhc1N1YnNjcmliZXJzID0gbWVzc2FnZUhhc1N1YnNjcmliZXJzKCBtZXNzYWdlICk7XG5cbiAgICAgICAgaWYgKCAhaGFzU3Vic2NyaWJlcnMgKXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggc3luYyA9PT0gdHJ1ZSApe1xuICAgICAgICAgICAgZGVsaXZlcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dCggZGVsaXZlciwgMCApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFB1Ymxpc2hlcyB0aGUgbWVzc2FnZSwgcGFzc2luZyB0aGUgZGF0YSB0byBpdCdzIHN1YnNjcmliZXJzXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQGFsaWFzIHB1Ymxpc2hcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHB1Ymxpc2hcbiAgICAgKiBAcGFyYW0ge30gZGF0YSBUaGUgZGF0YSB0byBwYXNzIHRvIHN1YnNjcmliZXJzXG4gICAgICogQHJldHVybiB7IEJvb2xlYW4gfVxuICAgICAqL1xuICAgIFB1YlN1Yi5wdWJsaXNoID0gZnVuY3Rpb24oIG1lc3NhZ2UsIGRhdGEgKXtcbiAgICAgICAgcmV0dXJuIHB1Ymxpc2goIG1lc3NhZ2UsIGRhdGEsIGZhbHNlLCBQdWJTdWIuaW1tZWRpYXRlRXhjZXB0aW9ucyApO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQdWJsaXNoZXMgdGhlIHRoZSBtZXNzYWdlIHN5bmNocm9ub3VzbHksIHBhc3NpbmcgdGhlIGRhdGEgdG8gaXQncyBzdWJzY3JpYmVyc1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBhbGlhcyBwdWJsaXNoU3luY1xuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gcHVibGlzaFxuICAgICAqIEBwYXJhbSB7fSBkYXRhIFRoZSBkYXRhIHRvIHBhc3MgdG8gc3Vic2NyaWJlcnNcbiAgICAgKiBAcmV0dXJuIHsgQm9vbGVhbiB9XG4gICAgICovXG4gICAgUHViU3ViLnB1Ymxpc2hTeW5jID0gZnVuY3Rpb24oIG1lc3NhZ2UsIGRhdGEgKXtcbiAgICAgICAgcmV0dXJuIHB1Ymxpc2goIG1lc3NhZ2UsIGRhdGEsIHRydWUsIFB1YlN1Yi5pbW1lZGlhdGVFeGNlcHRpb25zICk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZXMgdGhlIHBhc3NlZCBmdW5jdGlvbiB0byB0aGUgcGFzc2VkIG1lc3NhZ2UuIEV2ZXJ5IHJldHVybmVkIHRva2VuIGlzIHVuaXF1ZSBhbmQgc2hvdWxkIGJlIHN0b3JlZCBpZiB5b3UgbmVlZCB0byB1bnN1YnNjcmliZVxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBhbGlhcyBzdWJzY3JpYmVcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHN1YnNjcmliZSB0b1xuICAgICAqIEBwYXJhbSB7IEZ1bmN0aW9uIH0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIGEgbmV3IG1lc3NhZ2UgaXMgcHVibGlzaGVkXG4gICAgICogQHJldHVybiB7IFN0cmluZyB9XG4gICAgICovXG4gICAgUHViU3ViLnN1YnNjcmliZSA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBmdW5jICl7XG4gICAgICAgIGlmICggdHlwZW9mIGZ1bmMgIT09ICdmdW5jdGlvbicpe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWVzc2FnZSA9ICh0eXBlb2YgbWVzc2FnZSA9PT0gJ3N5bWJvbCcpID8gbWVzc2FnZS50b1N0cmluZygpIDogbWVzc2FnZTtcblxuICAgICAgICAvLyBtZXNzYWdlIGlzIG5vdCByZWdpc3RlcmVkIHlldFxuICAgICAgICBpZiAoICFtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eSggbWVzc2FnZSApICl7XG4gICAgICAgICAgICBtZXNzYWdlc1ttZXNzYWdlXSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZm9yY2luZyB0b2tlbiBhcyBTdHJpbmcsIHRvIGFsbG93IGZvciBmdXR1cmUgZXhwYW5zaW9ucyB3aXRob3V0IGJyZWFraW5nIHVzYWdlXG4gICAgICAgIC8vIGFuZCBhbGxvdyBmb3IgZWFzeSB1c2UgYXMga2V5IG5hbWVzIGZvciB0aGUgJ21lc3NhZ2VzJyBvYmplY3RcbiAgICAgICAgdmFyIHRva2VuID0gJ3VpZF8nICsgU3RyaW5nKCsrbGFzdFVpZCk7XG4gICAgICAgIG1lc3NhZ2VzW21lc3NhZ2VdW3Rva2VuXSA9IGZ1bmM7XG4gICAgICAgIFxuICAgICAgICAvLyByZXR1cm4gdG9rZW4gZm9yIHVuc3Vic2NyaWJpbmdcbiAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmVzIHRoZSBwYXNzZWQgZnVuY3Rpb24gdG8gdGhlIHBhc3NlZCBtZXNzYWdlIG9uY2VcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgc3Vic2NyaWJlT25jZVxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gc3Vic2NyaWJlIHRvXG4gICAgICogQHBhcmFtIHsgRnVuY3Rpb24gfSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gYSBuZXcgbWVzc2FnZSBpcyBwdWJsaXNoZWRcbiAgICAgKiBAcmV0dXJuIHsgUHViU3ViIH1cbiAgICAgKi9cbiAgICBQdWJTdWIuc3Vic2NyaWJlT25jZSA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBmdW5jICl7XG4gICAgICAgIHZhciB0b2tlbiA9IFB1YlN1Yi5zdWJzY3JpYmUoIG1lc3NhZ2UsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAvLyBiZWZvcmUgZnVuYyBhcHBseSwgdW5zdWJzY3JpYmUgbWVzc2FnZVxuICAgICAgICAgICAgUHViU3ViLnVuc3Vic2NyaWJlKCB0b2tlbiApO1xuICAgICAgICAgICAgZnVuYy5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gUHViU3ViO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYWxsIHN1YnNjcmlwdGlvbnNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcHVibGljXG4gICAgICogQGFsaWFzIGNsZWFyQWxsU3Vic2NyaXB0aW9uc1xuICAgICAqL1xuICAgIFB1YlN1Yi5jbGVhckFsbFN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiBjbGVhckFsbFN1YnNjcmlwdGlvbnMoKXtcbiAgICAgICAgbWVzc2FnZXMgPSB7fTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgc3Vic2NyaXB0aW9ucyBieSB0aGUgdG9waWNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcHVibGljXG4gICAgICogQGFsaWFzIGNsZWFyQWxsU3Vic2NyaXB0aW9uc1xuICAgICAqL1xuICAgIFB1YlN1Yi5jbGVhclN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiBjbGVhclN1YnNjcmlwdGlvbnModG9waWMpe1xuICAgICAgICB2YXIgbTtcbiAgICAgICAgZm9yIChtIGluIG1lc3NhZ2VzKXtcbiAgICAgICAgICAgIGlmIChtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eShtKSAmJiBtLmluZGV4T2YodG9waWMpID09PSAwKXtcbiAgICAgICAgICAgICAgICBkZWxldGUgbWVzc2FnZXNbbV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBzdWJzY3JpcHRpb25zXG4gICAgICpcbiAgICAgKiAtIFdoZW4gcGFzc2VkIGEgdG9rZW4sIHJlbW92ZXMgYSBzcGVjaWZpYyBzdWJzY3JpcHRpb24uXG4gICAgICpcblx0ICogLSBXaGVuIHBhc3NlZCBhIGZ1bmN0aW9uLCByZW1vdmVzIGFsbCBzdWJzY3JpcHRpb25zIGZvciB0aGF0IGZ1bmN0aW9uXG4gICAgICpcblx0ICogLSBXaGVuIHBhc3NlZCBhIHRvcGljLCByZW1vdmVzIGFsbCBzdWJzY3JpcHRpb25zIGZvciB0aGF0IHRvcGljIChoaWVyYXJjaHkpXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBhbGlhcyBzdWJzY3JpYmVPbmNlXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIHwgRnVuY3Rpb24gfSB2YWx1ZSBBIHRva2VuLCBmdW5jdGlvbiBvciB0b3BpYyB0byB1bnN1YnNjcmliZSBmcm9tXG4gICAgICogQGV4YW1wbGUgLy8gVW5zdWJzY3JpYmluZyB3aXRoIGEgdG9rZW5cbiAgICAgKiB2YXIgdG9rZW4gPSBQdWJTdWIuc3Vic2NyaWJlKCdteXRvcGljJywgbXlGdW5jKTtcbiAgICAgKiBQdWJTdWIudW5zdWJzY3JpYmUodG9rZW4pO1xuICAgICAqIEBleGFtcGxlIC8vIFVuc3Vic2NyaWJpbmcgd2l0aCBhIGZ1bmN0aW9uXG4gICAgICogUHViU3ViLnVuc3Vic2NyaWJlKG15RnVuYyk7XG4gICAgICogQGV4YW1wbGUgLy8gVW5zdWJzY3JpYmluZyBmcm9tIGEgdG9waWNcbiAgICAgKiBQdWJTdWIudW5zdWJzY3JpYmUoJ215dG9waWMnKTtcbiAgICAgKi9cbiAgICBQdWJTdWIudW5zdWJzY3JpYmUgPSBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgIHZhciBkZXNjZW5kYW50VG9waWNFeGlzdHMgPSBmdW5jdGlvbih0b3BpYykge1xuICAgICAgICAgICAgICAgIHZhciBtO1xuICAgICAgICAgICAgICAgIGZvciAoIG0gaW4gbWVzc2FnZXMgKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eShtKSAmJiBtLmluZGV4T2YodG9waWMpID09PSAwICl7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhIGRlc2NlbmRhbnQgb2YgdGhlIHRvcGljIGV4aXN0czpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzVG9waWMgICAgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICggbWVzc2FnZXMuaGFzT3duUHJvcGVydHkodmFsdWUpIHx8IGRlc2NlbmRhbnRUb3BpY0V4aXN0cyh2YWx1ZSkgKSxcbiAgICAgICAgICAgIGlzVG9rZW4gICAgPSAhaXNUb3BpYyAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnLFxuICAgICAgICAgICAgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyxcbiAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlLFxuICAgICAgICAgICAgbSwgbWVzc2FnZSwgdDtcblxuICAgICAgICBpZiAoaXNUb3BpYyl7XG4gICAgICAgICAgICBQdWJTdWIuY2xlYXJTdWJzY3JpcHRpb25zKHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoIG0gaW4gbWVzc2FnZXMgKXtcbiAgICAgICAgICAgIGlmICggbWVzc2FnZXMuaGFzT3duUHJvcGVydHkoIG0gKSApe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlc1ttXTtcblxuICAgICAgICAgICAgICAgIGlmICggaXNUb2tlbiAmJiBtZXNzYWdlW3ZhbHVlXSApe1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgbWVzc2FnZVt2YWx1ZV07XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAvLyB0b2tlbnMgYXJlIHVuaXF1ZSwgc28gd2UgY2FuIGp1c3Qgc3RvcCBoZXJlXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoIHQgaW4gbWVzc2FnZSApe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UuaGFzT3duUHJvcGVydHkodCkgJiYgbWVzc2FnZVt0XSA9PT0gdmFsdWUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBtZXNzYWdlW3RdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59KSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcHVic3ViLWpzL3NyYy9wdWJzdWIuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IHZpZXdVdGlscyBmcm9tICcuL3ZpZXcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV0d29yayB7XHJcblxyXG4gICAgY2JFcnJvckRlZmF1bHQocmVzdWx0KSB7XHJcbiAgICAgICAgY29uc3QgJGVsID0gKCQoJyNkZXNjcmlwdGlvbicpLmxlbmd0aCkgPyAkKCcjZGVzY3JpcHRpb24nKSA6ICQoJy5lcnJvci1tc2cnKTtcclxuICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKCRlbCxcclxuICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5zdGF0ZSxcclxuICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5tZXNzYWdlIHx8ICdMb2dpbiBlcnJvcicpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrU3RhdHVzKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAmJiByZXNwb25zZS5zdGF0dXMgPj0gMjAwICYmIHJlc3BvbnNlLnN0YXR1cyA8IDMwMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgICAgIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZW5kUmVxdWVzdChVUkwsIE9QVFMsIGNiRXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goVVJMLCBPUFRTKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiBQcm9taXNlLmFsbChbcmVzcG9uc2UsIHJlc3BvbnNlLmpzb24oKV0pKVxyXG4gICAgICAgICAgICAudGhlbigoW3Jlc3BvbnNlLCBqc29uXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghY2JFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNiRXJyb3JEZWZhdWx0KGpzb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNiRXJyb3IoanNvbik7IC8vIHVwZGF0ZSB2aWV3XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tTdGF0dXMocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihqc29uLnN0YXR1cy5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBqc29uO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy9uZXR3b3JrLmpzIiwiaW1wb3J0ICcuL2Jhc2Uuc2Nzcyc7XHJcbi8vIGltcG9ydCAnYm9vdHN0cmFwJztcclxuXHJcbmltcG9ydCBSZWdpc3RlckZvcm0gZnJvbSAnLi9ibG9ja3MvcmVnaXN0ZXItZm9ybS9yZWdpc3Rlci1mb3JtJztcclxuaW1wb3J0IHtMb2dpbkZvcm19IGZyb20gJy4vYmxvY2tzL2xvZ2luLWZvcm0vbG9naW4tZm9ybSc7XHJcbmltcG9ydCB7TG9naW5QYWdlfSBmcm9tICcuL3BhZ2VzL19hdXRoL2xvZ2luLXBhZ2UnO1xyXG5pbXBvcnQge2NvbmZpcm1hdGlvbldpdGhSZWRpcmVjdH0gZnJvbSAnLi9ibG9ja3MvY29uZmlybS1yZWcvY29uZmlybS1yZWcnO1xyXG5pbXBvcnQge0luc3RhZ3JhbX0gZnJvbSAnLi9wYWdlcy9faW5zdGFncmFtL2luc3RhZ3JhbSc7XHJcbmltcG9ydCAqIGFzIGhlYWRlciBmcm9tICcuL2Jsb2Nrcy9oZWFkZXIvaGVhZGVyJztcclxuaW1wb3J0ICogYXMgYnVyZ2VyTWVudSBmcm9tICcuL2Jsb2Nrcy9oZWFkZXIvYnVyZ2VyLW1lbnUvYnVyZ2VyLW1lbnUnO1xyXG5pbXBvcnQge0NPTlNUfSBmcm9tICcuL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMnO1xyXG5pbXBvcnQgKiBhcyBpbnN0YWdyYW1BY2NvdW50cyBmcm9tICcuL2Jsb2Nrcy9pbnN0YWdyYW0tYWNjb3VudHMtbGlzdC9pbnN0YWdyYW0tYWNjb3VudHMtbGlzdCc7XHJcbmltcG9ydCAqIGFzIG1lc3NhZ2VzIGZyb20gJy4vYmxvY2tzL21lc3NhZ2VzL21lc3NhZ2VzJztcclxuXHJcbmNvbnN0IHNlbGVjdG9yQ3NzTG9naW5Gb3JtID0ge1xyXG4gICAgX2xvZ2luQm94OiBDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJMb2dpbkJveCxcclxuICAgIF9mb3JtSWQ6ICcjanNfbG9naW4tZm9ybScsXHJcbiAgICBfYnV0dG9uU3VibWl0SWQ6ICcjanNfbG9naW5fYnRuJyxcclxuICAgIF9zaG93TG9naW5Cb3hCdG5JZDogQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyTmF2TG9naW5CdG5cclxufTtcclxuXHJcbmNvbnN0IHNlbGVjdG9yQ3NzTG9naW5Gb3JtSW5zdGFncmFtID0ge1xyXG4gICAgX2xvZ2luQm94OiAnbWFpbiAubG9naW4tYm94JyxcclxuICAgIF9mb3JtSWQ6ICcjanNfaW5zdGFncmFtLWFkZC1hY2NvdW50JyxcclxuICAgIF9idXR0b25TdWJtaXRJZDogJyNqc19pbnN0YWdyYW0tYWRkLWFjY291bnQtLWJ0bicsXHJcbiAgICBfc2hvd0xvZ2luQm94QnRuSWQ6ICcjanNfc2hvdy1sb2dpbi1ib3gnLFxyXG4gICAgaXNMb2dpbkluc3RhZ3JhbTogdHJ1ZVxyXG59O1xyXG5cclxuY29uc3QgaW5pdCA9ICgpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdpbml0IGpzIGhlcmUnLCBDT05TVC51c2VyKTtcclxuICAgIChuZXcgUmVnaXN0ZXJGb3JtKCkpLmluaXQoKTtcclxuICAgIExvZ2luRm9ybShzZWxlY3RvckNzc0xvZ2luRm9ybSkuaW5pdCgpO1xyXG4gICAgTG9naW5Gb3JtKHNlbGVjdG9yQ3NzTG9naW5Gb3JtSW5zdGFncmFtKS5pbml0KCk7IC8vIGluaXQgaW5zdGFncmFtIGxvZ2luIGZvcm0qIS9cclxuICAgIExvZ2luUGFnZSh7XHJcbiAgICAgICAgX2xvZ2luQm94OiAnLmF1dGgubG9naW4gLmNhcmQtc2lnbmluJyxcclxuICAgICAgICBfZm9ybUlkOiAnLmZvcm0tc2lnbmluJyxcclxuICAgICAgICBfYnV0dG9uU3VibWl0SWQ6ICcuZm9ybS1zaWduaW4gW3R5cGU9XCJzdWJtaXRcIl0nXHJcbiAgICB9KS5pbml0KCk7XHJcbiAgICBJbnN0YWdyYW0oKS5pbml0KCk7XHJcbiAgICBjb25maXJtYXRpb25XaXRoUmVkaXJlY3QoKS5pbml0KCk7XHJcbiAgICBoZWFkZXIuaW5pdEhlYWRlcigpO1xyXG4gICAgYnVyZ2VyTWVudS5pbml0KCk7XHJcbiAgICBpbnN0YWdyYW1BY2NvdW50cy5pbml0KCk7XHJcbiAgICBtZXNzYWdlcy5pbml0KCk7XHJcbn07XHJcblxyXG4oKCkgPT4gaW5pdCgpKSgpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYm9vdHN0cmFwLmpzIiwiLyogZXNsaW50LWRpc2FibGUgc29ydC12YXJzICovXHJcbi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy91c2VyJztcclxuaW1wb3J0IHtDT05TVH0gZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2NvbnN0cyc7XHJcbmltcG9ydCBjb29raWVTdG9yYWdlIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb29raWUnO1xyXG5cclxuY29uc3QgcGFyc2VRdWVyeVN0cmluZyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIGNvbnN0IHN0ciA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XHJcbiAgICBjb25zdCBvYmpVUkwgPSB7fTtcclxuXHJcbiAgICBzdHIucmVwbGFjZShcclxuICAgICAgbmV3IFJlZ0V4cCgnKFtePz0mXSspKD0oW14mXSopKT8nLCAnZycpLFxyXG4gICAgICAgIGZ1bmN0aW9uKCQwLCAkMSwgJDIpIHtcclxuICAgICAgICAgICAgb2JqVVJMWyQxXSA9ICQyO1xyXG4gICAgICAgIH1cclxuICApO1xyXG4gICAgcmV0dXJuIG9ialVSTDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb25maXJtYXRpb25XaXRoUmVkaXJlY3QoKSB7XHJcbiAgICBjb25zdCB1c2VyID0gVXNlcjtcclxuICAgIGNvbnN0IHBhcmFtcyA9IHBhcnNlUXVlcnlTdHJpbmcoKTtcclxuICAgIC8vIEV4YW1wbGUgaG93IHRvIHVzZSBpdDpcclxuXHJcbiAgICBjb25zdCBzZW5kQ29uZmlybSA9IGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgICAgIHVzZXIuY29uZmlybSh0b2tlbikudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzICYmIHJlc3VsdC5zdGF0dXMuc3RhdGUgPT09ICdvaycpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBzYXZlIHRoZSBpdGVtXHJcbiAgICAgICAgICAgICAgICBjb29raWVTdG9yYWdlLnNldChDT05TVC5jb29raWVTdG9yYWdlLmVtYWlsQ29uZmlybWVkLCAnY29uZmlybWVkJyk7XHJcbiAgICAgICAgICAgICAgICBjb29raWVTdG9yYWdlLnNldChDT05TVC5jb29raWVTdG9yYWdlLnRva2VuLCByZXN1bHQuZGF0YS50b2tlbik7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uID0gY29uZmlybS1yZWdpc3RyYXRpb24uaHRtbD90b2tlbj0nZnJvbSBzZXJ2ZXInO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHJldHJpZXZlIHRoZSBvYmplY3QgaW4gYSBzdHJpbmcgZm9ybVxyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VzdG9tZXJzRGF0YVN0cmluZyA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2N1c3RvbWVyc0RhdGEnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1c3RvbWVyc0RhdGFTdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlcXVlc3Qgc3VjY2VlZGVkIHdpdGggSlNPTiByZXNwb25zZScsIHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAkKCcuY29uZmlybS1yZWdpc3RyYXRpb24nKS5hcHBlbmQoYDxwPmNvbmZpcm1hdGlvbiBzdGF0dXM6ICR7cmVzdWx0LnN0YXR1cy5zdGF0ZX08L3A+YCk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSAnLi9wcm9maWxlLmh0bWwnO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LnN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVkaXJlY3QgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZG90LW5vdGF0aW9uXHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBwYXJhbXNbJ3Rva2VuJ107XHJcblxyXG4gICAgICAgIGlmICghbG9jYXRpb24ucGF0aG5hbWUuaW5kZXhPZignY29uZmlybS1yZWdpc3RyYXRpb24nKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2VuZCByZXEgdG8gJywgdG9rZW4pO1xyXG4gICAgICAgICAgICBzZW5kQ29uZmlybSh0b2tlbik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgICAgIHJlZGlyZWN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0XHJcbiAgICB9O1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3MvY29uZmlybS1yZWcvY29uZmlybS1yZWcuanMiLCIvLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuLy8gY29uc3QgaGFtYnVyZ2VyQnV0dG9uQ2xzID0gJyNhc2lkZV9tb2JpbGVfX2J1dHRvbic7XHJcbi8vIGNvbnN0IGhhbWJ1cmdlck1lbnVDbHMgPSAnLmFzaWRlLWJ1cmdlci1tZW51JztcclxuLy8gY29uc3QgaGFtYnVyZ2VyTWVudU9wZW5lZENsYXNzID0gJ2J1cmdlci1tZW51LS1jbG9zZWQnO1xyXG4vLyBjb25zdCBoYW1idXJnZXJCdXR0b25DbG9zZUNsYXNzID0gJ2J1cmdlci1tZW51X19idXR0b24tLWNsb3NlJztcclxuY29uc3Qgc2VsZWN0b3JzRWwgPSB7XHJcbiAgICBsZWZ0TWVudToge1xyXG4gICAgICAgIGhhbWJ1cmdlckJ1dHRvbkNsczogJyNhc2lkZV9tb2JpbGVfX2J1dHRvbicsXHJcbiAgICAgICAgaGFtYnVyZ2VyTWVudUNsczogJy5hc2lkZS1idXJnZXItbWVudScsXHJcbiAgICAgICAgaGFtYnVyZ2VyTWVudU9wZW5lZENsYXNzOiAnYnVyZ2VyLW1lbnUtLWNsb3NlZCcsXHJcbiAgICAgICAgaGFtYnVyZ2VyQnV0dG9uQ2xvc2VDbGFzczogJ2J1cmdlci1tZW51X19idXR0b24tLWNsb3NlJ1xyXG4gICAgfSxcclxuICAgIHJpZ2h0TWVudToge1xyXG4gICAgICAgIGhhbWJ1cmdlckJ1dHRvbkNsczogJyNoZWFkZXJfbW9iaWxlX3RvZ2dsZXInLFxyXG4gICAgICAgIGhhbWJ1cmdlck1lbnVDbHM6ICcuci1zaWRlLWJ1cmdlci1tZW51JyxcclxuICAgICAgICBoYW1idXJnZXJNZW51T3BlbmVkQ2xhc3M6ICdyLXNpZGUtYnVyZ2VyLW1lbnUtLW9wZW4nLFxyXG4gICAgICAgIGhhbWJ1cmdlckJ1dHRvbkNsb3NlQ2xhc3M6ICdidXJnZXItbWVudS1yaWdodF9fYnV0dG9uLS1jbG9zZSdcclxuICAgIH0sXHJcbiAgICBzdWJIZWFkZXI6IHtcclxuICAgICAgICBoYW1idXJnZXJCdXR0b25DbHM6ICcjaGVhZGVyX21vYmlsZV90b3BiYXJfdG9nZ2xlcicsXHJcbiAgICAgICAgaGFtYnVyZ2VyTWVudUNsczogJy5zdWItaGVhZGVyJyxcclxuICAgICAgICBoYW1idXJnZXJNZW51T3BlbmVkQ2xhc3M6ICdzdWItaGVhZGVyLS1vcGVuJyxcclxuICAgICAgICBoYW1idXJnZXJCdXR0b25DbG9zZUNsYXNzOiAnc3ViLWhlYWRlci1idXR0b24tLWNsb3NlJ1xyXG4gICAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRvZ2dsZSBoYW1idXJnZXIgbWVudSBwb3BvdmVyXHJcbiAqL1xyXG5mdW5jdGlvbiB0b2dnbGVIYW1idXJnZXJNZW51KG1lbnVOYW1lKSB7XHJcbiAgICBjb25zdCB7aGFtYnVyZ2VyTWVudUNscywgaGFtYnVyZ2VyQnV0dG9uQ2xzLCBoYW1idXJnZXJCdXR0b25DbG9zZUNsYXNzLCBoYW1idXJnZXJNZW51T3BlbmVkQ2xhc3N9ID0gc2VsZWN0b3JzRWxbbWVudU5hbWVdO1xyXG4gICAgJChoYW1idXJnZXJCdXR0b25DbHMpLnRvZ2dsZUNsYXNzKGhhbWJ1cmdlckJ1dHRvbkNsb3NlQ2xhc3MpO1xyXG4gICAgJChoYW1idXJnZXJNZW51Q2xzKS50b2dnbGVDbGFzcyhoYW1idXJnZXJNZW51T3BlbmVkQ2xhc3MpO1xyXG59XHJcblxyXG4vKipcclxuICogSW5pdCBoYW1idXJnZXIgbWVudVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBjb25zdCBsZWZ0TWVudSA9ICdsZWZ0TWVudSc7XHJcbiAgICBjb25zdCByaWdodE1lbnUgPSAncmlnaHRNZW51JztcclxuICAgIGNvbnN0IHN1YkhlYWRlciA9ICdzdWJIZWFkZXInO1xyXG5cclxuICAgICQoc2VsZWN0b3JzRWxbbGVmdE1lbnVdLmhhbWJ1cmdlckJ1dHRvbkNscykub24oJ2NsaWNrJywgdG9nZ2xlSGFtYnVyZ2VyTWVudS5iaW5kKHRoaXMsIGxlZnRNZW51KSk7XHJcbiAgICAkKHNlbGVjdG9yc0VsW3JpZ2h0TWVudV0uaGFtYnVyZ2VyQnV0dG9uQ2xzKS5vbignY2xpY2snLCB0b2dnbGVIYW1idXJnZXJNZW51LmJpbmQodGhpcywgcmlnaHRNZW51KSk7XHJcbiAgICAkKHNlbGVjdG9yc0VsW3N1YkhlYWRlcl0uaGFtYnVyZ2VyQnV0dG9uQ2xzKS5vbignY2xpY2snLCB0b2dnbGVIYW1idXJnZXJNZW51LmJpbmQodGhpcywgc3ViSGVhZGVyKSk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9oZWFkZXIvYnVyZ2VyLW1lbnUvYnVyZ2VyLW1lbnUuanMiLCIvLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdXNlcic7XHJcbmltcG9ydCBQdWJTdWIgZnJvbSAncHVic3ViLWpzJzsgLy8gaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvcHVic3ViLWpzXHJcbmltcG9ydCB7Q09OU1R9IGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMnO1xyXG5cclxuY29uc3Qgc2VsZWN0b3JMb2dpblN0YXRlID0gJy5qc19tZXNzYWdlX2xvZ2dlZC0tdGV4dCc7XHJcbmNvbnN0IHNlbGVjdG9yRW1haWxDb25maXJtU3RhdGUgPSAnLmpzX2VtYWlsLWNvbmZpcm0tLXRleHQnO1xyXG5jb25zdCBjbG9zZUNsYXNzID0gJ2Qtbm9uZSc7XHJcbmNvbnN0IG9wZW5lZENsYXNzID0gJ2QtYmxvY2snO1xyXG5cclxuZnVuY3Rpb24gZW1haWxOb3RDb25maXJtZWQoKSB7XHJcbiAgICBjb25zdCAkZW1haWxuTXNnID0gJChzZWxlY3RvckVtYWlsQ29uZmlybVN0YXRlKTtcclxuICAgICRlbWFpbG5Nc2cudGV4dCgnKiplbWFpbE5vdENvbmZpcm1lZCoqIEVtYWlsINC90LUg0L/QvtC00YLQstC10YDQttC00LXQvS4nKS5jc3MoJ2NvbG9yJywgJ2xpZ2h0Y29yYWwnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25Mb2dpblN1YnNjcmliZShtc2csIGRhdGEpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKG1zZywgZGF0YSk7XHJcbiAgICAkKENPTlNULnVpU2VsZWN0b3JzLmhlYWRlck5hdkxvZ2luQnRuKS5hZGRDbGFzcyhjbG9zZUNsYXNzKS5yZW1vdmVDbGFzcyhvcGVuZWRDbGFzcyk7XHJcbiAgICAkKENPTlNULnVpU2VsZWN0b3JzLmhlYWRlclJlZ0J0bikuYWRkQ2xhc3MoY2xvc2VDbGFzcykucmVtb3ZlQ2xhc3Mob3BlbmVkQ2xhc3MpO1xyXG4gICAgJChDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJMb2dpbkJveCkuYWRkQ2xhc3MoY2xvc2VDbGFzcykucmVtb3ZlQ2xhc3Mob3BlbmVkQ2xhc3MpO1xyXG5cclxuICAgICQoJy5uYXYtbGluay5qc19sb2dPdXQnKS5hZGRDbGFzcyhvcGVuZWRDbGFzcykucmVtb3ZlQ2xhc3MoY2xvc2VDbGFzcyk7IC8vIHNob3dcclxuICAgIGNvbnN0ICRsb2dpbk1zZyA9ICQoc2VsZWN0b3JMb2dpblN0YXRlKTtcclxuICAgICRsb2dpbk1zZy50ZXh0KCcqKm9uTG9naW5TdWJzY3JpYmUqKiDQstGLINC30LDQu9C+0LPQuNC90LjQu9C40YHRjCDQsiBMdXhncmFtINGD0YHQv9C10YjQvdC+JykuY3NzKCdjb2xvcicsICdsaWdodGJsdWUnKTtcclxuICAgIGNvbnN0IGlzRW1haWxDb25maXJtZWQgPSBVc2VyLmlzRW1haWxDb25maXJtZWQoKTtcclxuICAgIGlmICghaXNFbWFpbENvbmZpcm1lZCkge1xyXG4gICAgICAgIGVtYWlsTm90Q29uZmlybWVkKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dMb2dvdXQoKSB7XHJcbiAgICAvLyBjaGVjayBpcyBsb2dnZWRcclxuICAgIGNvbnN0IGlzTG9nZ2VkID0gVXNlci5pc0xvZ2dlZEluKCk7XHJcbiAgICBjb25zdCBpc0VtYWlsQ29uZmlybWVkID0gVXNlci5pc0VtYWlsQ29uZmlybWVkKCk7XHJcbiAgICBpZiAoIWlzRW1haWxDb25maXJtZWQpIHtcclxuICAgICAgICBlbWFpbE5vdENvbmZpcm1lZCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzTG9nZ2VkKSB7XHJcbiAgICAgICAgJCgnLm5hdi1saW5rLmpzX2xvZ091dCcpLnBhcmVudCgpLnNob3coKTtcclxuICAgICAgICAkKCcuanNfZW1haWwtY29uZmlybS0tdGV4dCcpLnRleHQoJ9Cy0Ysg0LfQsNC70L7Qs9C40L3QuNC70LjRgdGMINGD0YHQv9C10YjQvdC+Jyk7XHJcbiAgICAgICAgY29uc3Qgb2xkVVJMID0gZG9jdW1lbnQucmVmZXJyZXI7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cob2xkVVJMKTtcclxuICAgICAgICBpZiAob2xkVVJMLmluY2x1ZGVzKCdjb25maXJtLXJlZ2lzdHJhdGlvbicpKSB7XHJcbiAgICAgICAgICAgICQoJy5qc19tZXNzYWdlX2xvZ2dlZC0tdGV4dCcpLnRleHQoJ9Cy0Ysg0L/QvtC00YLQstC10YDQtNC40LvQuCDRgNC10LPQuNGB0YLRgNCw0YbQuNGOJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9uTG9naW5TdWJzY3JpYmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChzZWxlY3RvckxvZ2luU3RhdGUpLnRleHQoJ9Cf0YDQuNCy0LXRgiDQsNC90L7QvdC40LzQvdGL0Lkg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMJyk7XHJcbiAgICAgICAgJChzZWxlY3RvckVtYWlsQ29uZmlybVN0YXRlKS5lbXB0eSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogSW5pdCBoZWFkZXJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0SGVhZGVyKCkge1xyXG4gICAvLyBjaGVjayBvdGhlciBoYW5kbGVyIGluIGxvZ2luLWZvcm0uanNcclxuICAgIGNvbnN0ICRsb2dpbkJveCA9ICQoQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyTG9naW5Cb3gpO1xyXG4gICAgY29uc3QgJHJlZ2lzdGVyQm94ID0gJChDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJSZWdCb3gpO1xyXG5cclxuICAgIFB1YlN1Yi5zdWJzY3JpYmUoQ09OU1QuZXZlbnRzLlVTRVJfTE9HR0VELCBvbkxvZ2luU3Vic2NyaWJlKTtcclxuXHJcbiAgICBzaG93TG9nb3V0KCk7XHJcblxyXG4gICAgJChDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJSZWdCdG4pLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAkbG9naW5Cb3guaGlkZSgpO1xyXG4gICAgICAgICRyZWdpc3RlckJveC5jc3Moeyd0b3AnOiAwLCAncmlnaHQnOiAwfSlcclxuICAgICAgICAgICAgLmFkZENsYXNzKCdiZy1saWdodCBib3JkZXIgbXQtNSBteC1hdXRvIHBvc2l0aW9uLWFic29sdXRlIHB4LTMgZC1ibG9jaycpXHJcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKENPTlNULnVpU2VsZWN0b3JzLmhlYWRlck5hdkxvZ2luQnRuKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgJGxvZ2luQm94LmFkZENsYXNzKCdkLWJsb2NrJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICRyZWdpc3RlckJveC5hZGRDbGFzcygnZC1ub25lJykucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKTtcclxuICAgIH0pO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3MvaGVhZGVyL2hlYWRlci5qcyIsIi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy91c2VyJztcclxuLy8gaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3NwaW5uZXInO1xyXG5pbXBvcnQgdmlld1V0aWxzIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy92aWV3JztcclxuXHJcbi8qXHJcbmNvbnN0IHN0YXRpY1Jlc3AgPSB7XHJcbiAgICAnc3RhdHVzJzoge1xyXG4gICAgICAgICdzdGF0ZSc6ICdvaydcclxuICAgIH0sXHJcbiAgICAnZGF0YSc6IHtcclxuICAgICAgICAnYWNjb3VudHMnOiBbe1xyXG4gICAgICAgICAgICAnc3RhdHVzJzogJ09LJyxcclxuICAgICAgICAgICAgJ3VzZXJuYW1lJzogJ2FuZHJleS5qYWtpdmNoeWsnLFxyXG4gICAgICAgICAgICAnY2hlY2twb2ludCc6IHtcclxuICAgICAgICAgICAgICAgICdzdGF0dXMnOiAnQUJTRU5UJyxcclxuICAgICAgICAgICAgICAgICd0eXBlJzogJ1BIT05FJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAndGFyaWZmJzoge1xyXG4gICAgICAgICAgICAgICAgJ3N0YXR1cyc6ICdBQlNFTlQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICdpbmZvJzoge1xyXG4gICAgICAgICAgICAgICAgJ3Byb2ZpbGVfcGljX3VybCc6ICdodHRwczovL3JhbmRvbXVzZXIubWUvYXBpL3BvcnRyYWl0cy9tZW4vNTAuanBnJyxcclxuICAgICAgICAgICAgICAgICduYW1lJzogJ9CQ0L3QtNGA0LXQuSDQr9C60LjQstGH0YPQuicsXHJcbiAgICAgICAgICAgICAgICAnYmlvZ3JhcGh5JzogJycsXHJcbiAgICAgICAgICAgICAgICAndXJsJzogJycsXHJcbiAgICAgICAgICAgICAgICAnZW1haWwnOiAnbmlkenVrdUBpbmJveC5ydScsXHJcbiAgICAgICAgICAgICAgICAncGhvbmUnOiAnJyxcclxuICAgICAgICAgICAgICAgICdtZWRpYV9jb3VudCc6IDIsXHJcbiAgICAgICAgICAgICAgICAnZm9sbG93ZXJfY291bnQnOiA0LFxyXG4gICAgICAgICAgICAgICAgJ2ZvbGxvd2luZ19jb3VudCc6IDE1XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICdzdGF0dXMnOiAnT0snLFxyXG4gICAgICAgICAgICAndXNlcm5hbWUnOiAnYW5kcmV5Lmpha2l2Y2h5aycsXHJcbiAgICAgICAgICAgICdjaGVja3BvaW50Jzoge1xyXG4gICAgICAgICAgICAgICAgJ3N0YXR1cyc6ICdBQlNFTlQnLFxyXG4gICAgICAgICAgICAgICAgJ3R5cGUnOiAnRU1BSUwnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICd0YXJpZmYnOiB7XHJcbiAgICAgICAgICAgICAgICAnc3RhdHVzJzogJ0FCU0VOVCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ2luZm8nOiB7XHJcbiAgICAgICAgICAgICAgICAncHJvZmlsZV9waWNfdXJsJzogJ2h0dHBzOi8vcmFuZG9tdXNlci5tZS9hcGkvcG9ydHJhaXRzL21lbi81Mi5qcGcnLFxyXG4gICAgICAgICAgICAgICAgJ25hbWUnOiAn0JTQuNC80L7QvSDQn9Cw0YDQsNC70L7QvScsXHJcbiAgICAgICAgICAgICAgICAnYmlvZ3JhcGh5JzogJ2Jpb2dyYXBoeSB0ZXh0JyxcclxuICAgICAgICAgICAgICAgICd1cmwnOiAnd3d3LmxlbmVuZ3JhZC5ydScsXHJcbiAgICAgICAgICAgICAgICAnZW1haWwnOiAnbmlkenVrdUBpbmJveC5ydScsXHJcbiAgICAgICAgICAgICAgICAncGhvbmUnOiAnMDExLTExMS0xMTEtMTEnLFxyXG4gICAgICAgICAgICAgICAgJ21lZGlhX2NvdW50JzogNTE1LFxyXG4gICAgICAgICAgICAgICAgJ2ZvbGxvd2luZ19jb3VudCc6IDM0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICdzdGF0dXMnOiAnT0snLFxyXG4gICAgICAgICAgICAndXNlcm5hbWUnOiAnYWxleC5zbWl0aCcsXHJcbiAgICAgICAgICAgICdjaGVja3BvaW50Jzoge1xyXG4gICAgICAgICAgICAgICAgJ3N0YXR1cyc6ICdUUklHR0VSRUQnLFxyXG4gICAgICAgICAgICAgICAgJ3R5cGUnOiAnRU1BSUxfT1JfUEhPTkUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICd0YXJpZmYnOiB7XHJcbiAgICAgICAgICAgICAgICAnc3RhdHVzJzogJ0FCU0VOVCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgJ3N0YXR1cyc6ICdPSycsXHJcbiAgICAgICAgICAgICd1c2VybmFtZSc6ICcyMmFuZHJleS5qYWtpdmNoeWsyJyxcclxuICAgICAgICAgICAgJ2NoZWNrcG9pbnQnOiB7XHJcbiAgICAgICAgICAgICAgICAnc3RhdHVzJzogJ1RSSUdHRVJFRCcsXHJcbiAgICAgICAgICAgICAgICAndHlwZSc6ICdQSE9ORSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ3RhcmlmZic6IHtcclxuICAgICAgICAgICAgICAgICdzdGF0dXMnOiAnQUJTRU5UJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgJ2F2YWlsYWJsZV9wcm94eV9wdXJjaGFzZSc6IHRydWVcclxuICAgIH1cclxufTtcclxuKi8vKlxyXG5jb25zdCBzdGF0aWNSZXNwV2l0aERlbGF5ID0ge1xyXG4gICAgJ3N0YXR1cyc6IHtcclxuICAgICAgICAnc3RhdGUnOiAnb2snXHJcbiAgICB9LFxyXG4gICAgJ2RhdGEnOiB7XHJcbiAgICAgICAgJ2FjY291bnRzJzogW3tcclxuICAgICAgICAgICAgJ3N0YXR1cyc6ICdPSycsXHJcbiAgICAgICAgICAgICd1c2VybmFtZSc6ICdzdGF0aWNSZXNwLldpdGhEZWxheScsXHJcbiAgICAgICAgICAgICdjaGVja3BvaW50Jzoge1xyXG4gICAgICAgICAgICAgICAgJ3N0YXR1cyc6ICdBQlNFTlQnLFxyXG4gICAgICAgICAgICAgICAgJ3R5cGUnOiAnUEhPTkUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICd0YXJpZmYnOiB7XHJcbiAgICAgICAgICAgICAgICAnc3RhdHVzJzogJ0FCU0VOVCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1dLFxyXG4gICAgICAgICdhdmFpbGFibGVfcHJveHlfcHVyY2hhc2UnOiB0cnVlXHJcbiAgICB9XHJcbn07XHJcbiovXHJcblxyXG4vLyDQn9C+0YHQu9C1INC00L7QsdCw0LLQu9C10L3QuNGPINCw0LrQutCw0YPQvdGC0LAg0YHQvdC+0LLQsCDQtNC10YDQvdGD0YLRjCDQnNCV0KLQkCDQuCDQv9C10YDQtdGA0LjRgdC+0LLQsNGC0Ywg0YHQv9C40YHQvtC6INCw0LrQutCw0YPQvdGC0L7QslxyXG5jb25zdCBhZGRJbnN0YWdyYW1BY2NvdW50ID0gKG5ld0Zvcm1EYXRhKSA9PiB7XHJcbiAgICBjb25zdCBjYkVycm9yID0gKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUicsIHJlc3VsdCk7XHJcbiAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSgkKCcuZXJyb3ItbXNnJyksXHJcbiAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMuc3RhdGUsXHJcbiAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMubWVzc2FnZSB8fCAnTG9naW4gZXJyb3InKTtcclxuICAgICAgICAvLyAkKF9sb2dpbkJveCkuYWRkQ2xhc3MoY2xvc2VDbGFzcykucmVtb3ZlQ2xhc3Mob3BlbmVkQ2xhc3MpO1xyXG4gICAgfTtcclxuXHJcbiAgICBVc2VyLmFkZEluc3RhZ3JhbUFjY291bnQobmV3Rm9ybURhdGEsIGNiRXJyb3IpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnN0YXR1cykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQsIHJlc3VsdC5zdGF0dXMpO1xyXG4gICAgICAgICAgICAvLyBkZWJ1Z2dlcjtcclxuICAgICAgICAgICAgY29uc3QgJG1zZ0xpc3QgPSAkKCcuYWNjb3VudHMtbGlzdCcpO1xyXG4gICAgICAgICAgICAkbXNnTGlzdC5lbXB0eSgpO1xyXG4gICAgICAgICAgICAvLyB0b2RvIDogcmVsb2FkIGxpc3RcclxuICAgICAgICAgICAgLy8gZmlsbExpc3QoJG1zZ0xpc3QsIHJlc3VsdC5kYXRhLmFjY291bnRzKTtcclxuICAgICAgICAgICAgLy8gYWRkTGlzdEhhbmRsZXIoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UoJHRleHRBcmVhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIC8vICAgICByZXN1bHQuc3RhdHVzLnN0YXRlLFxyXG4gICAgICAgICAgICAvLyAgICAgcmVzdWx0LnN0YXR1cy5tZXNzYWdlIHx8ICdMb2dpbiBlcnJvcicpO1xyXG4gICAgICAgICAgICAvLyAkKF9sb2dpbkJveCkuYWRkQ2xhc3MoY2xvc2VDbGFzcykucmVtb3ZlQ2xhc3Mob3BlbmVkQ2xhc3MpO1xyXG4gICAgICAgIH1cclxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAvLyB0b2RvOiByZW5kZXIgZm9yIHVzZXJcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ3N1Ym1pdCcsIG5ld0Zvcm1EYXRhKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGFkZE9uTG9hZEhhbmRsZXJzKCkge1xyXG4gICAgLy8gJCgnLmpzX3JlcGVhdC1zZWN1cml0eS1jb2RlJykub24oJ2NsaWNrJywgKGUpID0+IHtcclxuXHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICAkKCcuanNfYWRkLWluc3RhZ3JhbS1hY2NvdW50Jykub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCBidG4gPSAkKGUudGFyZ2V0KTtcclxuICAgICAgICBjb25zdCAkbW9kYWxCb2R5ID0gYnRuLmNsb3Nlc3QoJy5tb2RhbCcpLmZpbmQoJy5tb2RhbC1kaWFsb2cgLm1vZGFsLWJvZHknKTtcclxuICAgICAgICBjb25zdCB1c2VybmFtZSA9ICRtb2RhbEJvZHkuZmluZCgnaW5wdXRbbmFtZT1cInVzZXJuYW1lXCJdJykudmFsKCkudHJpbSgpO1xyXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkID0gJG1vZGFsQm9keS5maW5kKCdpbnB1dFtuYW1lPVwicGFzc1wiXScpLnZhbCgpLnRyaW0oKTtcclxuICAgICAgICBjb25zdCAkZm9ybSA9ICQoJ2Zvcm0nLCAkbW9kYWxCb2R5KTtcclxuICAgICAgICBjb25zdCBmb3JtID0gJGZvcm0uZ2V0KDApO1xyXG4gICAgICAgIGNvbnN0IGNzc1ZhbGlkYXRpb25DbGFzcyA9ICdmb3JtLXZhbGlkYXRpb24nO1xyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIC8vIGNvbnN0IHZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoJGZvcm0pO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbGlkYXRvci52YWxpZGF0ZSgpKTtcclxuICAgICAgICBpZiAoZm9ybS5jaGVja1ZhbGlkaXR5KCkpIHtcclxuICAgICAgICAgICAgYWRkSW5zdGFncmFtQWNjb3VudCh7dXNlcm5hbWUsIHBhc3N3b3JkfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gSGlnaGxpZ2h0IGVycm9yc1xyXG4gICAgICAgICAgICBpZiAoZm9ybS5yZXBvcnRWYWxpZGl0eSkge1xyXG4gICAgICAgICAgICAgICAgZm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICRmb3JtLmFkZENsYXNzKGNzc1ZhbGlkYXRpb25DbGFzcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXVzZXJuYW1lIHx8ICFwYXNzd29yZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm90IHZhbGlkIC0gRW1wdHkgZmllbGRzJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkTGlzdEhhbmRsZXIoLyogdXNlcm5hbWUqLykge1xyXG4gICAgLy8gJCgnI3lvdXJNb2RhbElEJykub24oJ3Nob3cuYnMubW9kYWwnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAvLyAgICAgdmFyIHlvdXJwYXJhbWV0ZXIgPSBlLnJlbGF0ZWRUYXJnZXQuZGF0YXNldC55b3VycGFyYW1ldGVyO1xyXG4gICAgLy8gICAgIC8vIERvIHNvbWUgc3R1ZmYgdy8gaXQuXHJcbiAgICAvLyB9KTtcclxuICAgIGxldCBjaGVja3BvaW50VHlwZSA9ICcnO1xyXG5cclxuICAgICQoJy5qc19wYXNzLWNoZWNrcG9pbnQtYnRuJykub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCAkYnV0dG9uID0gJChlLnRhcmdldCk7XHJcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSAkYnV0dG9uLmRhdGEoJ3VzZXJuYW1lJyk7XHJcbiAgICAgICAgY2hlY2twb2ludFR5cGUgPSAkYnV0dG9uLmRhdGEoJ2NoZWNrcG9pbnRUeXBlJykgfHwgY2hlY2twb2ludFR5cGU7XHJcbiAgICAgICAgLy8gJCgnI3NlY3VyaXR5LWNvZGUnKS5kYXRhKCdjaGVja3BvaW50VHlwZScsIGNoZWNrcG9pbnRUeXBlKTtcclxuICAgICAgICAvLyB0b2RvIGFkZCAnY2hlY2twb2ludFR5cGUnIHRvIG1vZGFsXHJcbiAgICAgICAgY29uc3Qgc2VuZFRvID0gKGNoZWNrcG9pbnRUeXBlID09PSAnUEhPTkUnKSA/ICfRgtC10LvQtdGE0L7QvScgOiAnZW1haWwnO1xyXG4gICAgICAgIC8vIFNwaW5uZXIuc3RhcnQoJGJ1dHRvbiwgJ2ZhLWtleScpO1xyXG5cclxuICAgICAgICBpZiAoY2hlY2twb2ludFR5cGUgPT09ICdFTUFJTF9PUl9QSE9ORScpIHtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIC8vINC40L3Qv9GD0YLRiyDRgdC/0YDRj9GC0LDQvdGLLFxyXG4gICAgICAgICAgICAvLyDQv9C+0LrQsNC30LDRgtGMINGB0LXRgNGL0LUg0L/QtdGA0LXQutC70Y7Rh9Cw0YLQtdC70LggKNCy0YvQsdGA0LDQuyDRgtC40L8pXHJcbiAgICAgICAgICAgIC8vINC10YHRgtGMINC60L3QvtC/0LrQsCDQl9Cw0L/RgNC+0YHQuNGC0Ywg0LrQvtC0INC/0L7QtNGC0LLQtdGA0LbQtNC10L3QuNC1XHJcbiAgICAgICAgICAgICQoJyNzZWN1cml0eS1jb2RlLXBob25lT3JlbWFpbCcpLm1vZGFsKHtzaG93OiB0cnVlLCB1c2VybmFtZX0pO1xyXG5cclxuICAgICAgICAgICAgLy8g0L3QtSDQvtGC0L/RgNCw0LLQu9GP0LXQvCDRgNC10LrQstC10YHRglxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBVc2VyLmdldFNlY3VyaXR5S2V5KHVzZXJuYW1lLCBjaGVja3BvaW50VHlwZSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZWN1cml0eUtleSByZWNlaXZlZDonLCByZXN1bHQuc3RhdHVzLnN0YXRlKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMuc3RhdGUgPT09ICdvaycpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRtb2RhbCA9ICQoJyNzZWN1cml0eS1jb2RlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU3Bpbm5lci5zdG9wKCRidXR0b24sICdmYS1rZXknKTtcclxuICAgICAgICAgICAgICAgICQoJy5qc19zdWNjZXNzLWZlZWRiYWNrJywgJG1vZGFsKS5lbXB0eSgpLnRleHQoYNCa0LvRjtGHINC/0L7QtNGC0LLQtdGA0LbQtNC10L3QuNGPINCx0YvQuyDQvtGC0L/RgNCw0LLQu9C10L0g0JLQsNC8INC90LAgJHtzZW5kVG99YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGluc2lkZSBtb2RhbFxyXG4gICAgJCgnLmpzX2NvbmZpcm0tc2VjdXJpdHktY29kZScpLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYnRuID0gJChlLnRhcmdldCk7XHJcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSBidG4uZGF0YSgndXNlcm5hbWUnKTtcclxuICAgICAgICBjb25zdCAka2V5SW5wdXQgPSBidG4uY2xvc2VzdCgnLm1vZGFsJykuZmluZCgnLm1vZGFsLWRpYWxvZyBmb3JtIGlucHV0LmpzX2NvbmZpcm0ta2V5Jyk7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gJGtleUlucHV0LnZhbCgpLnRyaW0oKTtcclxuICAgICAgICBjb25zdCAkbW9kYWwgPSBidG4uY2xvc2VzdCgnLm1vZGFsJyk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgaWYgKGtleS5sZW5ndGggIT09IDYpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBVc2VyLmNvbmZpcm1TZWN1cml0eUtleShrZXksIHVzZXJuYW1lKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMuc3RhdGUgIT09ICdvaycpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnanNfY29uZmlybTonLCByZXN1bHQuc3RhdHVzLnN0YXRlLCAnY2xvc2UgbW9kYWwnKTtcclxuICAgICAgICAgICAgJG1vZGFsLm1vZGFsKCdoaWRlJyk7XHJcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyJyk7XHJcbiAgICAgICAgICAgICQoJy5qc19zdWNjZXNzLWZlZWRiYWNrJywgJG1vZGFsKS50ZXh0KCfQl9Cw0L/RgNC+0YEg0L3QtSDQvtGC0L/RgNCw0LLQu9C10L0nKS5jc3MoJ2NvbG9yJywgJ3JlZCcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnZm9ybSBpbnB1dFttaW5sZW5ndGhdJykub24oJ2JsdXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgbGVuID0gJCh0aGlzKS52YWwoKS50cmltKCkubGVuZ3RoO1xyXG4gICAgICAgIGNvbnN0IG1pbkxlbiA9IE51bWJlcigkKHRoaXMpLmF0dHIoJ21pbmxlbmd0aCcpKTtcclxuICAgICAgICAvLyBjb25zdCBtZXNzYWdlID0gbWluTGVuIDw9IGxlbiA/ICcnIDogbWluTGVuICsgJyBjaGFyYWN0ZXJzIG1pbmltdW0nO1xyXG4gICAgICAgIGlmIChtaW5MZW4gIT09IGxlbikge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNzcygnYm9yZGVyQ29sb3InLCAncmVkJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2JvcmRlckNvbG9yJywgJyNjZWQ0ZGEnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5zZXRDdXN0b21WYWxpZGl0eShtZXNzYWdlKVxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gb25IaWRlTW9kYWwoZSkge1xyXG4gICAgICAgIGNvbnN0ICRtb2RhbCA9ICQoZS50YXJnZXQpO1xyXG4gICAgICAgICRtb2RhbC5maW5kKCcuZmlyc3Qtc3RlcCcpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAkbW9kYWwuZmluZCgnLnNlY29uZC1zdGVwJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICQoJy5qc19jb25maXJtLWtleScpLnZhbCgnJyk7XHJcbiAgICAgICAgJCgnLmpzX3N1Y2Nlc3MtZmVlZGJhY2snLCAkbW9kYWwpLnJlbW92ZUF0dHIoJ3N0eWxlJykuZW1wdHkoKTtcclxuICAgIH1cclxuICAgICQoJyNzZWN1cml0eS1jb2RlLXBob25lT3JlbWFpbCcpLm9uKCdoaWRlLmJzLm1vZGFsJywgb25IaWRlTW9kYWwpO1xyXG4gICAgJCgnI3NlY3VyaXR5LWNvZGUnKS5vbignaGlkZS5icy5tb2RhbCcsIG9uSGlkZU1vZGFsKTtcclxuXHJcbiAgICAvLyBcIlBIT05FX09SX0VNQUlMXCIgbW9kYWxcclxuICAgICQoJy5qc19nZXQtc2VjdXJpdHktY29kZS1waG9uZU9yZW1haWwnKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0ICRtb2RhbCA9ICQoJyNzZWN1cml0eS1jb2RlLXBob25lT3JlbWFpbCcpO1xyXG4gICAgICAgIGNvbnN0IHR5cGVTZWxlY3RlZCA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJG1vZGFsKS5maW5kKCcuanNfYnRuLXR5cGUtc3dpdGNoZXIgaW5wdXQ6Y2hlY2tlZCcpO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrcG9pbnRUeXBlQWN0aXZlID0gdHlwZVNlbGVjdGVkLnZhbCgpO1xyXG4gICAgICAgIGNvbnN0IHNlbmRUbyA9IChjaGVja3BvaW50VHlwZUFjdGl2ZSA9PT0gJ1BIT05FJykgPyAn0YLQtdC70LXRhNC+0L0nIDogJ2VtYWlsJztcclxuICAgICAgICBjb25zdCBtb2RhbENvbmZpZyA9ICRtb2RhbC5kYXRhKClbJ2JzLm1vZGFsJ10uX2NvbmZpZztcclxuICAgICAgICBjb25zdCB1c2VybmFtZSA9IG1vZGFsQ29uZmlnLnVzZXJuYW1lO1xyXG4gICAgICAgIFVzZXIuZ2V0U2VjdXJpdHlLZXkodXNlcm5hbWUsIGNoZWNrcG9pbnRUeXBlQWN0aXZlKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgLy8g0L/RgNC4INC90LDQttCw0YLQuNC4IFwi0JfQsNC/0YDQvtGB0LjRgtGMINC60L7QtCDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjQtVwiIC0g0L7RgtC/0LDRgNC70Y/QtdGC0YHRjyDRgNC10LrQstC10YHRgiBcItGB0YLQsNGA0YIg0YfQtdC60L/QvtC40L3RglwiINC/0L7Rj9Cy0LvRj9C10YLRjNGB0Y8g0LjQvdC/0YPRgiDQuCDQutC90L7Qv9C60LAg0LTRgNGD0LPQuNGFINGC0LjQv9Cw0YVcclxuICAgICAgICAgICAgLy8gZ2V0IHNlbGVjdGVkIGJ1dHRvblxyXG5cclxuICAgICAgICAgICAgLy8g0L/QtdGA0LXQutC70Y7Rh9Cw0YLQtdC70Ywo0YHQtdGA0YvQuSkg0Lgg0LrQvdC+0L/QutCwIFwi0JfQsNC/0YDQvtGB0LjRgtGMINC60L7QtCDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjQtVwiINC40YHRh9C10LfQsNGO0YJcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlY3VyaXR5S2V5IHJlY2VpdmVkOicsIHJlc3VsdC5zdGF0dXMuc3RhdGUpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cy5zdGF0ZSA9PT0gJ29rJykge1xyXG4gICAgICAgICAgICAgICAgJCgnLmZpcnN0LXN0ZXAnLCAkbW9kYWwpLmFkZENsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgICAgICQoJy5zZWNvbmQtc3RlcCcsICRtb2RhbCkucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgJCgnLmpzX3N1Y2Nlc3MtZmVlZGJhY2snLCAkbW9kYWwpLmVtcHR5KCkudGV4dChg0JrQu9GO0Ycg0L/QvtC00YLQstC10YDQttC00LXQvdC40Y8g0LHRi9C7INC+0YLQv9GA0LDQstC70LXQvSDQktCw0Lwg0L3QsCAke3NlbmRUb31gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbGxMaXN0KCRsaXN0LCBkYXRhQXJyYXkpIHtcclxuICAgIGNvbnN0IGl0ZW1zID0gZGF0YUFycmF5O1xyXG4gICAgY29uc3QgY0xpc3QgPSAkbGlzdDtcclxuICAgIGNvbnN0IGRlZmF1bHRBdmF0YXJTcmMgPSAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9qTk5UNExFLnBuZyc7XHJcbiAgICBjb25zdCBpbnNlcnRJdGVtID0gKGRhdGEsIHRleHQsIGNzc0NscykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxpVHBsID0gYCR7KGRhdGEpXHJcbiAgICAgICAgICAgID8gYDxsaSBjbGFzcz1cImxpc3QtaW5saW5lLWl0ZW0gJHtjc3NDbHN9XCI+PHNwYW4gY2xhc3M9XCJmaWd1cmVcIj4ke2RhdGF9PC9zcGFuPjxzcGFuPiR7dGV4dH08L3NwYW4+PC9saT5gXHJcbiAgICAgICAgICAgIDogYDxsaSBjbGFzcz1cImxpc3QtaW5saW5lLWl0ZW0gJHtjc3NDbHN9XCI+PHNwYW4gY2xhc3M9XCJmaWd1cmVcIj4tPC9zcGFuPjxzcGFuPiR7dGV4dH08L3NwYW4+PC9saT5gfWA7XHJcbiAgICAgICAgcmV0dXJuIGxpVHBsO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHN0YXRzID0gKGluZm8pID0+IHtcclxuICAgICAgICBjb25zdCB0cGwgPSBgPGRpdiBjbGFzcz1cImNvbFwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LWlubGluZSB0ZXh0LWNlbnRlciBjb3VudHMtbGlzdFwiPlxyXG4gICAgICAgICAgICAkeyhpbmZvKVxyXG4gICAgICAgICAgICAgID8gYCR7aW5zZXJ0SXRlbShpbmZvWydtZWRpYV9jb3VudCddLCAn0J/Rg9Cx0LvQuNC60LDRhtC40LgnLCAnbWVkaWEtY291bnQnKX1cclxuICAgICAgICAgICAgICAgICR7aW5zZXJ0SXRlbShpbmZvWydmb2xsb3dlcl9jb3VudCddLCAn0J/QvtC00L/QuNGB0YfQuNC60LgnLCAnZm9sbG93ZXItY291bnQnKX1cclxuICAgICAgICAgICAgICAgICR7aW5zZXJ0SXRlbShpbmZvWydmb2xsb3dpbmdfY291bnQnXSwgJ9Cf0L7QtNC/0LjRgdC60LgnLCAnZm9sbG93aW5nLWNvdW50Jyl9YFxyXG4gICAgICAgICAgICAgIDogYCR7aW5zZXJ0SXRlbShmYWxzZSwgJ9Cf0YPQsdC70LjQutCw0YbQuNC4JywgJ21lZGlhLWNvdW50Jyl9XHJcbiAgICAgICAgICAgICAgICAke2luc2VydEl0ZW0oZmFsc2UsICfQn9C+0LTQv9C40YHRh9C40LrQuCcsICdmb2xsb3dlci1jb3VudCcpfVxyXG4gICAgICAgICAgICAgICAgJHtpbnNlcnRJdGVtKGZhbHNlLCAn0J/QvtC00L/QuNGB0LrQuCcsICdmb2xsb3dpbmctY291bnQnKX1gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5gO1xyXG4gICAgICAgIHJldHVybiB0cGw7XHJcbiAgICB9O1xyXG4gICAgY0xpc3QuZW1wdHkoKS5hZGRDbGFzcygnYm9yZGVyLWxpZ2h0LWNvbG9yJyk7XHJcbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5mbyA9IGl0ZW0uaW5mbztcclxuICAgICAgICBjb25zdCBjaGVja3BvaW50ID0gaXRlbS5jaGVja3BvaW50IHx8IGl0ZW07XHJcblxyXG4gICAgICAgIGlmICghaW5mbykge1xyXG4gICAgICAgICAgICAkKGA8bGkgY2xhc3M9XCJtZWRpYSBweS0zXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwibWwtMyByb3VuZGVkXCIgYWx0PVwiZGVmYXVsdCBhdmF0YXJcIiBzcmM9XCIke2RlZmF1bHRBdmF0YXJTcmN9XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEtYm9keSBkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHVzZXItaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkeyhpdGVtLnVzZXJuYW1lKSA/IGA8aDQgY2xhc3M9XCJtdC0wIG1iLTEgbmFtZVwiPiR7aXRlbS51c2VybmFtZX08L2g0PmAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7KGNoZWNrcG9pbnQuc3RhdHVzID09PSAnVFJJR0dFUkVEJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkganNfcGFzcy1jaGVja3BvaW50LWJ0biBkLWJsb2NrIG14LWF1dG9cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY2hlY2twb2ludC10eXBlPVwiJHtjaGVja3BvaW50LnR5cGV9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdXNlcm5hbWU9XCIke2l0ZW0udXNlcm5hbWUgfHwgJyd9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNzZWN1cml0eS1jb2RlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1rZXlcIj48L2k+0J/RgNC+0LnRgtC4INGH0LXQutC/0L7QuNC90YI8L2J1dHRvbj5gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYCh0b2RvKWNoZWNrcG9pbnQgc3RhdHVzIC0gJHtjaGVja3BvaW50LnN0YXR1c31gfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICR7c3RhdHMoKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPmApLmFwcGVuZFRvKGNMaXN0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKGA8bGkgY2xhc3M9XCJtZWRpYSBweS0zXCI+XHJcbiAgICAgICAgICAgICR7KGluZm9bJ3Byb2ZpbGVfcGljX3VybCddKVxyXG4gICAgICAgICAgICAgICAgPyBgPGltZyBjbGFzcz1cIm1sLTMgcm91bmRlZFwiIGFsdD1cIlVzZXIgcGhvdG9cIiBzcmM9XCIke2luZm9bJ3Byb2ZpbGVfcGljX3VybCddfVwiPmBcclxuICAgICAgICAgICAgICAgIDogYDxpbWcgY2xhc3M9XCJtbC0zIHJvdW5kZWRcIiBhbHQ9XCJkZWZhdWx0IGF2YXRhclwiIHNyYz1cIiR7ZGVmYXVsdEF2YXRhclNyY31cIj5gfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEtYm9keSBkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgdXNlci1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHsoaXRlbS51c2VybmFtZSkgPyBgPHAgY2xhc3M9XCJtdC0wIG1iLTEgbmFtZVwiPiR7aXRlbS51c2VybmFtZX08L3A+YCA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICR7KGluZm8ubmFtZSkgPyBgPGg0IGNsYXNzPVwibXQtMCBtYi0xXCI+JHtpbmZvLm5hbWV9PC9oND5gIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgJHsoaW5mby5uYW1lKSA/ICcnIDogJ2NvbW1lbnRlZCcgIC8qICR7KGluZm8uZW1haWwpID8gYDxwIGNsYXNzPVwibXQtMCBtYi0xXCI+JHtpbmZvLmVtYWlsfTwvcD5gIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICR7KGluZm8ucGhvbmUpID8gYDxwIGNsYXNzPVwibXQtMCBtYi0xXCI+JHtpbmZvLnBob25lfTwvcD5gIDogJyd9ICovIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICR7KGNoZWNrcG9pbnQuc3RhdHVzID09PSAnVFJJR0dFUkVEJylcclxuICAgICAgICAgICAgICAgID8gYDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGpzX3Bhc3MtY2hlY2twb2ludC1idG4gZC1ibG9jayBteC1hdXRvXCIgZGF0YS1jaGVja3BvaW50LXR5cGU9XCIke2NoZWNrcG9pbnQudHlwZX1cIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjc2VjdXJpdHktY29kZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWtleVwiPjwvaT7Qn9GA0L7QudGC0Lgg0YfQtdC60L/QvtC40L3RgjwvYnV0dG9uPmBcclxuICAgICAgICAgICAgICAgIDogJyd9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICR7c3RhdHMoaW5mbyl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbGk+YCkuYXBwZW5kVG8oY0xpc3QpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogSW5pdCBoZWFkZXJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgY29uc3QgJG1zZ0xpc3QgPSAkKCcuYWNjb3VudHMtbGlzdCcpO1xyXG4gICAgLy8gY2hlY2sgd2UgYXJlIGluIHByb2ZpbGUgcGFnZVxyXG4gICAgaWYgKCEkbXNnTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCB0b2tlbiA9IFVzZXIuZ2V0VG9rZW4oKTsgLy8gdXBkIHRvOiBVc2VyLmdldFRva2VuKClcclxuICAgIGNvbnN0IG1ldGFkYXRhID0gVXNlci5nZXRNZXRhZGF0YSh0b2tlbik7XHJcbiAgICBjb25zdCByZXNlbmRSZXF1ZXN0ID0gKCkgPT4gVXNlci5nZXRNZXRhZGF0YSh0b2tlbik7XHJcbiAgICBsZXQgaXNTZW5kUmVxT25jZSA9IGZhbHNlO1xyXG4gICAgY29uc3QgY2hlY2tSZXNwb25zZSA9IChyZXN1bHQsIGlzUmVzZW5kUmVxdWVzdCkgPT4ge1xyXG4gICAgICAgIGlmICghcmVzdWx0LnN0YXR1cy5zdGF0ZSA9PT0gJ29rJyB8fCAhcmVzdWx0LmRhdGEgfHwgISRtc2dMaXN0Lmxlbmd0aCB8fCBpc1Jlc2VuZFJlcXVlc3QpIHtcclxuICAgICAgICAgICAgLy8g0L/RgNC+0LLQtdGA0Y/QvCDQvtC00LjQvSDRgNCw0Lcg0L3QsNC70LjRh9C40LUgcmVzdWx0LmRhdGEuYWNjb3VudHMuaW5mb1xyXG4gICAgICAgICAgICAkbXNnTGlzdC5lbXB0eSgpO1xyXG4gICAgICAgICAgICAkKGA8bGkgY2xhc3M9XCJtZWRpYVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJtdC0wIG1iLTNcIj7QndC4INC+0LTQvdC+0LPQviDQkNC60LrQsNGD0L3RgtCwINC90LUg0LTQvtCx0LDQstC70LXQvdC+PC9oMz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPmApLmFwcGVuZFRvKCRtc2dMaXN0KTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNlbmRSZXF1ZXN0KCkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tSZXNwb25zZShyZXN1bHQsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlcXVlc3QgcmVzZW5kJyk7XHJcbiAgICAgICAgICAgIH0sIDM1MDApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vINCy0YvQstC+0LQg0YDQtdC30YPQu9GM0YLQsNGC0L7QsiAoZGF0YS5hY2NvdW50cy5pbmZvKVxyXG4gICAgICAgICQoJy5wcm9maWxlLXVzZXIgLnNwaW5uZXItYm94JykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgIGZpbGxMaXN0KCRtc2dMaXN0LCByZXN1bHQuZGF0YS5hY2NvdW50cyk7XHJcbiAgICAgICAgYWRkTGlzdEhhbmRsZXIoKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gY2hlY2sgd2UgYXJlIGluIHByb2ZpbGUgcGFnZVxyXG4gICAgaWYgKCEkbXNnTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgYWRkT25Mb2FkSGFuZGxlcnMoKTtcclxuXHJcbiAgICAvLyDQvNC+0LbQtdGCINC40L3RhNC+INC+0YLRgdGD0YLRgdCy0L7QstCw0YLRjCAtINGB0LTQtdC70LDRgtGMINC10YnQtSDRgNCw0Lcg0LfQsNC/0YDQvtGBINGH0LXRgNC10LcgMyDRgdC10LouXHJcblxyXG4gICAgbWV0YWRhdGEudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgLy8g0L/RgNC+0LLQtdGA0Y/QvCDQvtC00LjQvSDRgNCw0Lcg0L3QsNC70LjRh9C40LUgcmVzdWx0LmRhdGEuYWNjb3VudHMuaW5mb1xyXG4gICAgICAgIGxldCBpc1Jlc2VuZFJlcXVlc3QgPSBmYWxzZTtcclxuICAgICAgICBpZiAocmVzdWx0LmRhdGEgJiYgcmVzdWx0LmRhdGEuYWNjb3VudHMgJiYgIWlzU2VuZFJlcU9uY2UpIHtcclxuICAgICAgICAgICAgcmVzdWx0LmRhdGEuYWNjb3VudHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpdGVtLmluZm8pIHtcclxuICAgICAgICAgICAgICAgICAgICBpc1Jlc2VuZFJlcXVlc3QgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlzU2VuZFJlcU9uY2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNoZWNrUmVzcG9uc2UocmVzdWx0LCBpc1Jlc2VuZFJlcXVlc3QpO1xyXG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKCQoJy5lcnJvci1tc2cnKSxcclxuICAgICAgICAgICAgICAgIGVyci5zdGF0dXMgfHwgJycsXHJcbiAgICAgICAgICAgICAgICAn0J3QtSDQv9C+0LvRg9GH0LjQu9C+0YHRjCDQt9Cw0LPRgNGD0LfQuNGC0Ywg0LTQvtGB0YLRg9C/0L3Ri9C1IEluc3RhZ3JhbSDQsNC60LrQsNGD0L3RgtGLJyk7XHJcbiAgICAgICAgfSwgMzAwMCk7XHJcbiAgICAgICAgJCgnLnNwaW5uZXItYm94JykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgfSk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9pbnN0YWdyYW0tYWNjb3VudHMtbGlzdC9pbnN0YWdyYW0tYWNjb3VudHMtbGlzdC5qcyIsIi8qIGVzbGludC1kaXNhYmxlIHNvcnQtdmFycyAqL1xyXG4vLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdXNlcic7XHJcbmltcG9ydCBQdWJTdWIgZnJvbSAncHVic3ViLWpzJzsgLy8gaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvcHVic3ViLWpzXHJcbmltcG9ydCBjb29raWVTdG9yYWdlIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb29raWUnO1xyXG4vLyBpbXBvcnQgVmFsaWRhdG9yIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9mb3JtLXZhbGlkYXRvcic7XHJcbmltcG9ydCB2aWV3VXRpbHMgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3ZpZXcnO1xyXG5pbXBvcnQge0NPTlNUfSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29uc3RzJztcclxuXHJcbi8vIHdpbmRvdy4kID0gJDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMb2dpbkZvcm0oc2VsZWN0b3JDc3MpIHtcclxuICAgIGNvbnN0IHtfZm9ybUlkLCBfYnV0dG9uU3VibWl0SWQsIF9zaG93TG9naW5Cb3hCdG5JZCwgX2xvZ2luQm94fSA9IHNlbGVjdG9yQ3NzO1xyXG4gICAgY29uc3QgdXNlciA9IFVzZXIsIC8vIHNlcnZpY2VcclxuICAgICAgICAkZm9ybSA9ICQoX2Zvcm1JZCksXHJcbiAgICAgICAgJGVtYWlsID0gJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cIm1haWxcIl0nKSxcclxuICAgICAgICAkdGV4dEFyZWFEZXNjcmlwdGlvbiA9ICQoJyNkZXNjcmlwdGlvbicpO1xyXG4gICAgLy8gY29uc3Qgb3BlbmVkQ2xhc3MgPSAnZC1ibG9jayc7XHJcbiAgICAvLyBjb25zdCBjbG9zZUNsYXNzID0gJ2Qtbm9uZSc7XHJcblxyXG4gICAgY29uc3QgdXNlckxvZ2luSGVhZGVyID0gKF9mb3JtRGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNiRXJyb3IgPSAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICQoX2xvZ2luQm94KS5hcHBlbmQoJzxwPnJlc3VsdC5zdGF0dXMubWVzc2FnZTwvcD4nKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gdXNlci5sb2dpbihfZm9ybURhdGEsIGNiRXJyb3IpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LmRhdGEgJiYgcmVzdWx0LmRhdGEudG9rZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzYXZlIHRoZSBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgY29va2llU3RvcmFnZS5zZXQoQ09OU1QuY29va2llU3RvcmFnZS50b2tlbiwgcmVzdWx0LmRhdGEudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5uYXYtbGluay5qc19sb2dPdXQnKS5wYXJlbnQoKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3JlcXVlc3Qgc3VjY2VlZGVkIHdpdGggSlNPTiByZXNwb25zZScsIHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSgkdGV4dEFyZWFEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5tZXNzYWdlIHx8ICdMb2dpbiBzdWNjc2VzcycpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKHRoaXMuJHRleHRBcmVhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGA8cD5zdGF0dXM6ICR7cmVzdWx0LnN0YXR1cy5zdGF0ZX08L3A+PHA+IG1lc3NhZ2U6ICR7cmVzdWx0LnN0YXR1cy5tZXNzYWdlfTwvcD5gKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UoJHRleHRBcmVhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMubWVzc2FnZSB8fCAnTG9naW4gZXJyb3InKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHN1Ym1pdEZvcm0gPSBmdW5jdGlvbihmb3JtRGF0YU9iaikge1xyXG4gICAgICAgIGNvbnN0IGVtYWlsID0gJGVtYWlsLnZhbCgpLFxyXG4gICAgICAgICAgICBwYXNzd29yZCA9ICRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJwYXNzXCJdJykudmFsKCksXHJcbiAgICAgICAgICAgIF9mb3JtRGF0YSA9IGZvcm1EYXRhT2JqIHx8IHtlbWFpbCwgcGFzc3dvcmR9O1xyXG5cclxuICAgICAgICBpZiAoc2VsZWN0b3JDc3MuaXNMb2dpbkluc3RhZ3JhbSkge1xyXG4gICAgICAgICAgICAvLyB0b2RvOiBkZWxldGUgbWVcclxuICAgICAgICAgICAgLy8gYWRkSW5zdGFncmFtQWNjb3VudCh7dXNlcm5hbWU6ICRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJ1c2VybmFtZVwiXScpLnZhbCgpLCBwYXNzd29yZH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRlbWFpbC52YWwoJGVtYWlsLnZhbCgpLnRvTG9jYWxlTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICB1c2VyTG9naW5IZWFkZXIoX2Zvcm1EYXRhKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIFB1YlN1Yi5wdWJsaXNoKENPTlNULmV2ZW50cy5VU0VSX0xPR0dFRCwgJ2xvZ2luJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbG9nT3V0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29va2llU3RvcmFnZS5yZW1vdmUoQ09OU1QuY29va2llU3RvcmFnZS50b2tlbik7XHJcbiAgICAgICAgUHViU3ViLnB1Ymxpc2goQ09OU1QuZXZlbnRzLlVTRVJfTE9HT1VUKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYmluZEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0ICRzaG93TG9naW5Cb3hCdG5JZCA9ICQoX3Nob3dMb2dpbkJveEJ0bklkKTtcclxuICAgICAgICBjb25zdCAkbG9naW5Cb3ggPSAkKF9sb2dpbkJveCk7XHJcbiAgICAgICAgY29uc3Qgb3BlbmVkQ2xhc3MgPSAnZC1ibG9jayc7XHJcbiAgICAgICAgY29uc3QgY2xvc2VDbGFzcyA9ICdkLW5vbmUnO1xyXG5cclxuICAgICAgICAkc2hvd0xvZ2luQm94QnRuSWQub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXNlbGVjdG9yQ3NzLmlzTG9naW5JbnN0YWdyYW0pIHtcclxuICAgICAgICAgICAgICAgICRsb2dpbkJveC5jc3Moeyd0b3AnOiAwLCAncmlnaHQnOiAwfSlcclxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2JnLWxpZ2h0IGJvcmRlciBtdC01IG14LWF1dG8gcG9zaXRpb24tYWJzb2x1dGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkbG9naW5Cb3guYWRkQ2xhc3Mob3BlbmVkQ2xhc3MpLnJlbW92ZUNsYXNzKGNsb3NlQ2xhc3MpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCAkYnV0dG9uU3VibWl0ID0gJChfYnV0dG9uU3VibWl0SWQpLFxyXG4gICAgICAgICAgICBjc3NWYWxpZGF0aW9uQ2xhc3MgPSAnZm9ybS12YWxpZGF0aW9uJztcclxuXHJcbiAgICAgICAgJGJ1dHRvblN1Ym1pdC5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSAkZm9ybS5nZXQoMCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IHZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoJGZvcm0pO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWxpZGF0b3IudmFsaWRhdGUoKSk7XHJcbiAgICAgICAgICAgIGlmIChmb3JtLmNoZWNrVmFsaWRpdHkoKSAmJiB2aWV3VXRpbHMuaXNFbWFpbCgkZW1haWwudmFsKCkpKSB7XHJcbiAgICAgICAgICAgICAgICBzdWJtaXRGb3JtKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBIaWdobGlnaHQgZXJyb3JzXHJcbiAgICAgICAgICAgICAgICBpZiAoZm9ybS5yZXBvcnRWYWxpZGl0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm0ucmVwb3J0VmFsaWRpdHkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICRmb3JtLmFkZENsYXNzKGNzc1ZhbGlkYXRpb25DbGFzcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLm5hdi1saW5rLmpzX2xvZ091dCcpLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgbG9nT3V0KCk7XHJcbiAgICAgICAgICAgICQoZS50YXJnZXQpLnBhcmVudCgpLmhpZGUoKTtcclxuICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSgkdGV4dEFyZWFEZXNjcmlwdGlvbiwgJ0xvZ2dlZCBvdXQnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgUHViU3ViLnN1YnNjcmliZShDT05TVC5ldmVudHMuVVNFUl9MT0dPVVQsIChtc2cpID0+IHtcclxuICAgICAgICAgICAgJChDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJOYXZMb2dpbkJ0bikuYWRkQ2xhc3Mob3BlbmVkQ2xhc3MpLnJlbW92ZUNsYXNzKGNsb3NlQ2xhc3MpOyAvLyAuc2hvdygpO1xyXG4gICAgICAgICAgICAkKENPTlNULnVpU2VsZWN0b3JzLmhlYWRlclJlZ0J0bikuYWRkQ2xhc3Mob3BlbmVkQ2xhc3MpLnJlbW92ZUNsYXNzKGNsb3NlQ2xhc3MpO1xyXG4gICAgICAgICAgICAkKCcubmF2LWxpbmsuanNfbG9nT3V0JykuYWRkQ2xhc3MoY2xvc2VDbGFzcykucmVtb3ZlQ2xhc3Mob3BlbmVkQ2xhc3MpOyAvLyAuaGlkZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RvckxvZ2luU3RhdGUgPSAnLmpzX21lc3NhZ2VfbG9nZ2VkLS10ZXh0JztcclxuICAgICAgICAgICAgJChzZWxlY3RvckxvZ2luU3RhdGUpLnRleHQoJ9CS0Ysg0LLRi9GI0LvQuCDQuNC3INCw0LrQutCw0YPQvdGC0LAnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzTG9naW5CdG5DbGljayA9ICQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCduYXYubmF2YmFyJykuZmluZCgkbG9naW5Cb3gpLmxlbmd0aDtcclxuICAgICAgICAgICAgY29uc3QgaXNBZGRJbnN0YWdyYW1CdG5DbGlja2VkID0gJChldmVudC50YXJnZXQpLmF0dHIoJ2lkJykgPT09IENPTlNULnVpU2VsZWN0b3JzLmluc3RhZ3JhbS5hZGRBY2NvdW50QnRuSWQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWlzTG9naW5CdG5DbGljayAmJiAkbG9naW5Cb3guaGFzQ2xhc3Mob3BlbmVkQ2xhc3MpICYmICFpc0FkZEluc3RhZ3JhbUJ0bkNsaWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICRsb2dpbkJveC5hZGRDbGFzcyhjbG9zZUNsYXNzKS5yZW1vdmVDbGFzcyhvcGVuZWRDbGFzcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgICAgICBiaW5kRXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0XHJcbiAgICB9O1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3MvbG9naW4tZm9ybS9sb2dpbi1mb3JtLmpzIiwiY29uc3QgY29udmVyc2F0aW9uID0ge1xyXG4gICAgJ2RhdGEnOiB7XHJcbiAgICAgICAgJ21ldGEnOiB7XHJcbiAgICAgICAgICAgICdwYWdpbmF0aW9uJzoge1xyXG4gICAgICAgICAgICAgICAgJ3ByZXZfY3Vyc29yJzogJy4uLicsXHJcbiAgICAgICAgICAgICAgICAnbmV4dF9jdXJzb3InOiAnLi4uJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnbWVzc2FnZXMnOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3VzZXJuYW1lJzogJ05pa2EnLFxyXG4gICAgICAgICAgICAgICAgICAgICdwcm9maWxlX3BpY191cmwnOiAnaHR0cHM6Ly9pbnN0YWdyYW0uZmhlbDItMS5mbmEuZmJjZG4ubmV0L3ZwL2M5ZDNhZGQ0YjM0NzQ4ZTEyYTQyMjkzNTBmYjYxMWU0LzVDQzY2N0I4L3Q1MS4yODg1LTE5L3MxNTB4MTUwLzQxNzEwNTI3XzMxOTAwNDc4ODY1NTA4Ml8xNjUxNTE1NzA2NzE5NjAwNjQwX24uanBnP19uY19odD1pbnN0YWdyYW0uZmhlbDItMS5mbmEuZmJjZG4ubmV0JyxcclxuICAgICAgICAgICAgICAgICAgICAnc2lkZSc6ICdsZWZ0JyxcclxuICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICdwaG90bycsIC8vIHBob3RvLCB2aWRlbywgZ2lmLCBsaWtlLCBsaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogJ2h0dHA6Ly93d3cuenIucnUvZC9zdG9yeS9hZC85MTM1ODEvMC0wLmpwZycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RpbWVzdGFtcCc6ICcxNDozMydcclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICdzaWRlJzogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICd0ZXh0JyxcclxuICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiAn0JnQvtGDKHJpZ2h0KScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RpbWVzdGFtcCc6ICcxNDozMidcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3VzZXJuYW1lJzogJ05pa2EnLFxyXG4gICAgICAgICAgICAgICAgICAgICdwcm9maWxlX3BpY191cmwnOiAnaHR0cHM6Ly9pbnN0YWdyYW0uZmhlbDItMS5mbmEuZmJjZG4ubmV0L3ZwL2M5ZDNhZGQ0YjM0NzQ4ZTEyYTQyMjkzNTBmYjYxMWU0LzVDQzY2N0I4L3Q1MS4yODg1LTE5L3MxNTB4MTUwLzQxNzEwNTI3XzMxOTAwNDc4ODY1NTA4Ml8xNjUxNTE1NzA2NzE5NjAwNjQwX24uanBnP19uY19odD1pbnN0YWdyYW0uZmhlbDItMS5mbmEuZmJjZG4ubmV0JyxcclxuICAgICAgICAgICAgICAgICAgICAnc2lkZSc6ICdsZWZ0JyxcclxuICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICd0ZXh0JywgLy8gcGhvdG8sIHZpZGVvLCBnaWYsIGxpa2UsIGxpbmtcclxuICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiAn0JfQsNGF0L7QtNC4INGB0Y7QtNCwOiBnb29nbGUuY29tJyxcclxuICAgICAgICAgICAgICAgICAgICAndGltZXN0YW1wJzogJzE0OjM0J1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAndXNlcm5hbWUnOiAnTmlrYScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Byb2ZpbGVfcGljX3VybCc6ICdodHRwczovL2luc3RhZ3JhbS5maGVsMi0xLmZuYS5mYmNkbi5uZXQvdnAvYzlkM2FkZDRiMzQ3NDhlMTJhNDIyOTM1MGZiNjExZTQvNUNDNjY3QjgvdDUxLjI4ODUtMTkvczE1MHgxNTAvNDE3MTA1MjdfMzE5MDA0Nzg4NjU1MDgyXzE2NTE1MTU3MDY3MTk2MDA2NDBfbi5qcGc/X25jX2h0PWluc3RhZ3JhbS5maGVsMi0xLmZuYS5mYmNkbi5uZXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdzaWRlJzogJ2xlZnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ2xpbmsnLCAvLyBwaG90bywgdmlkZW8sIGdpZiwgbGlrZSwgbGlua1xyXG4gICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6ICdodHRwOi8vd3d3LnpyLnJ1L2Qvc3RvcnkvYWQvOTEzNTgxLzAtMC5qcGcnLFxyXG4gICAgICAgICAgICAgICAgICAgICd0aW1lc3RhbXAnOiAnMTQ6MzMnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICdzaWRlJzogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICdwaG90bycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogJ2h0dHBzOi8vcy5hdXRvLmRyb20ucnUvaTI0MjI0L3B1YnMvNC82MzA2MC9nZW4zNDBfMjg4MDYzNi5qcGcnLFxyXG4gICAgICAgICAgICAgICAgICAgICd0aW1lc3RhbXAnOiAnMTk6MzgnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICdzaWRlJzogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICd0ZXh0JyxcclxuICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiAnZGVtb3MgLT4gZmluZXVwbG9hZGVyLmNvbScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RpbWVzdGFtcCc6ICcxOTozOCdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3NpZGUnOiAncmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ2xpbmsnLFxyXG4gICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6ICdodHRwczovL2ZpbmV1cGxvYWRlci5jb20vZGVtb3MjZ2FsbGVyeS12aWV3JyxcclxuICAgICAgICAgICAgICAgICAgICAndGltZXN0YW1wJzogJzE5OjM4J1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgdXNlckxpc3QgPSB7XHJcbiAgICAnZGF0YSc6IHtcclxuICAgICAgICAnc2V0dGluZ3MnOiB7XHJcbiAgICAgICAgICAgICdkb19ub3RpZmljYXRpb24nOiB0cnVlLFxyXG4gICAgICAgICAgICAnaW52b2tlX2luX21pbGxpcyc6IDMwMDBcclxuICAgICAgICB9LFxyXG4gICAgICAgICdtZXRhJzogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAndXNlcm5hbWUnOiAndGhlX3Jvc3R5c2xhdicsXHJcbiAgICAgICAgICAgICAgICAndW5yZWFkX2NvbnZlcnNhdGlvbnMnOiAwLFxyXG4gICAgICAgICAgICAgICAgJ3BhZ2luYXRpb24nOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3ByZXZfY3Vyc29yJzogJy4uLicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ25leHRfY3Vyc29yJzogJy4uLidcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAnY29udmVyc2F0aW9ucyc6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6ICcxJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAn0KLQtdGB0YIxJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RvJzogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd1c2VybmFtZSc6ICdkaWFuYWNvYmVyNycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Byb2ZpbGVfcGljX3VybCc6ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU9FQUFBRGhDQU1BQUFBSmJTSklBQUFBeVZCTVZFWC8vLytyZTFDU1hrVjRRRHFBcXI5a2w3R2liVDFlTWkxem9iaGtlNUJ4TXl6RHNLK21kVTZLVURKdUxDT1FXaitmYlV2bjROK25kVVhYeExXc2lYdWtianJickppRVR6OVRqcXBrTlRCMVBEbXBlRXVWWVVPSVcwQnFKQnBaTEN2djUrRy9uSUhrNi9CeFJUYWxhak9JbnFsemo1MmFYaCtObkt0MU9qUE51cks4eE15YWVIWE5uWW1lZTJDNWlIT05zTU9ndnM1ZkFBQ0RRUm5BcDV5Z2RXTDM4L0RiemNaOVFqRFF3OEdVYm1xVlpVYTdsbml2akhITXRLS2JaMExCa1h3L2hLU25aU0FxSTlQS0FBQURSMGxFUVZSNG5PM2QyMVlhTVJoQVliV0N0QjBRRUtxQUZiUzBhdFhhZ2tjODF2ZC9xRjQxK2FtWmhneEpKcTYxOStXc3llRnpidUlvaTVVVklpSWlJaUlpSWlJaUtyWGJqM0c3alM2Y05UN0VyREdMTGp3OWZoZXo0MU9FQ0JFaVJJZ1FZU3hoU3pjTEp0d1dhZUZNckIxUU9HbW9nZ0g3MmFwcXQ2K0pldWxKUU9GZUtKWVVOclZ3clcrNll3OGhRb1FJRVNKRStFYUZmWjM1VEJOUTJKcnNxY0lCdFdwMVcyak5kK3NOVFh5Y1VWdU5ZSzRjb2NPNEJrS0VDTDJGTUMrRUNCRXVEakQzWm9UOW5xV051Nno1dXV4dVE5L3lSU2NHNXB6YW9ndDdHNWFHNHRjRlVYTm9HOWhEaUJBaFFvUUlFWllzMUlldjN0Q1lrOUE4UmMvMlRpcWtjRTMzMmR6UVFUak1tVU9zRWxzbzMycm01Q1MwenBZWm4ySklvWG5UNFlSTmhBZ1JJa1NJRUtGMzRkVklkWDJ6YmNwK3BoR3Z6OHczWitJTzYyeVpjUmMzMTNxalYwN0NyWEgxYjIzcjRtWFdWdnNjYjdrSjAzYVphaU5FbUh3SUVhWWZRb1N2cW5aVmJaRysyblhhWDljMlhUVzJzQ3BPZ1NmdlZVZGlEaGRpVjR3NzB0T2Q2S3RYTnFKMzRTaXljSVFRSVVLRUNCRWlST2hmT0xqZlZ6MzgwT21yK3dNSDRVQ01FN005Nkt2M3R1bThuN3dISXZObEIyRGV1SnhGNGdpVEN5SEM5RU9JTVAwUS9pc1ViN3pLM3ZwL0U2L2wzSVNqTGRYamsrR3pFdk1mbkFpMmY5UEhOT1o2ZXRRYkhUa0pKYmErWnNuK0ovMmlOVzFMMXd1elJLMmtoVjcrRndNaFFvUUlFU0pFdUlnd0MxVXF3aEpEaUJCaCtTRkVpTEQ4RUNKRVdINElFU0lzUDRRSUVaYWZIK0cwcmlxNmtVMmRGNWRxNnVXN0x2UTNaOWovV0pvRGZENVRuWHNBanNKOW1VZFI0ZGtuMWZueVQ3SHVtNFVRSVVLRUNCRWluR3RhN1BUbFJhaVhuZ1lVZnRkZHV1enVYT2MwVG5RcDFnNG9GSFhjbnVLeUorL05UaHhXWWVIU0lVU0lFQ0ZDaElrS2Jia0piTVVYWG5SczdicGtuZTBpdXREZVlYWHhEc3ZlYktFUUlrdy9oQWpURHlIQzlIdVR3dDg3cGlvMVkyTTdURFUyVHB3emN5V2djS2RpcXJadXpFbG9uRGhuNWhwQ2hBZ1JJa1NJTUIzaHkzanhYc29VSHZ6U3VleGovWnV4cithY1p2NnBXai93SVJUTE9PMGp4czA3Q0JFaVJJZ1FJVUtFQ3dwelhxVWxVY1dMVUJ5M3pUL1NtdmtCeExpNWhoQWhRb1FJRVNKRWlCQWhRb1FJRVNKRWlCQmhLc0kvWGlrZ1FySmY5RzBBQUFBQVNVVk9SSzVDWUlJPSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3VzZXJuYW1lJzogJ3lvdXJfZGlldGEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwcm9maWxlX3BpY191cmwnOiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFPRUFBQURoQ0FNQUFBQUpiU0pJQUFBQXcxQk1WRVgvLy8rcmUxQ1JkMTVFbThYUHFZWWJoYmlpYlQzYnJKaVBkMTlrZTVETW8zMnRlMCtlZVZmMTd1bXBlRXpJb0h5c21vbUpiVkNuZFVYcTV1UFh4TFhvMThqZzdQTXhsTUcvbklHbWVsUGF2YVRTcklxWGVGdnY1K0VtaXJ1amJEc0FoNytwYXk2aWcyeXpobDIrazIwQWZMUkZnS04rZW5YTm9vMTZzOUtOY2wvTndycUhhVXllZTJCVGJvYTRrMzI4eE14MWU0U2ZpWFd3YVJ2SW5IRy9zcWVzbEgvTXRxVGp6YnZoNWVoSlo0QnFjWHpjd2FuVXM1V3ZqSEc3bG5oWWU1ZWFpMnhvQUFBRC9rbEVRVlI0bk8zY2JWZlRTQmlBWVF5bGk3U3BwVUNoVUF3VldOOVFkMVdRZlVINS83OUtQOGc4VC9jODJlbUVtVWw2dk8rUE9jbk1YQzA5REdsMFk0T0lpSWlJZnJuS1k5ZWRPbndyaHcvc0MrL2tqRExMU3B0Vzd2UWUybEdIajkzaG5ScWh1bTQ5aFQyRUNEc1RRb1FJMncvaE9na1B6RzU3eWlMZHllRi83UXRGMkx1MXo4Z3VQTjZ4NnFuOGgwUE9PTTR2N09VTklVS0VDQkVpUkpoTldFcEsrQ3hkU2xpYXhSWitOcmRaRjZOVVhhaFp6TDNjNTlqRXBlMmpFajVKMDVMUUxQb2ZJZ2dSSWtTSUVDSENGb1FuVWpwaGFXL1ZjZ2lmcUEzY3VVbU1JNnh4NVJDcUVDSkVpQkFoUW9UWmhDZG1GNk9CSzRKbFlJNTJibTdnWWd0UHpzMkdjOWZ3OGNTQkhrNFRwWk4wUXZQSGNURGNMbjYyUFk4Z25NdHc5Z3MyYWxGWVJCRVdDQkVpUklnUTRkb0laVzgxM0hiTjdTM1hDaTVwTHNNTnpkRXlDWWZlUW9nRC8zQzVoVFd2OUV5T2JnY0oxWFd6bXArTzdFTHowektUajJTZ1VLNmJxWGZXL0lRalJJZ1FJVUtFSFJRV1EvbVdiMVk4V2xqTVpMaGhrVXhZbnJvTzFJTjBJaHpkakYwM1I1SWNIWWZjUlIycDY5Um9laEkxdDFyUmdTdzBETHRmOVIrYXFDOWlaVWw5LzNoVmdMRHl2K1o5OVhwSUU3Zk9hajlNT1BFc3FYK2FXWGphOXd3eFFZZ1FJVUtFQ0JHdXY3RHNpUEN2djkrN2ZFT3NJUHhEaHZ2SHQ1SFBKWHovOUtIN0dFSTMydE0vRVNKRWlCQWhRb1F0Q08wN1VkUElRamZjZlhiaDZOdVIxYmQzVXNqOTBwRTUydEhYZ09GaUMvVWRQVjNUNy9FZlAxeDBZZWRDaUxEN0lVVFkvUkQrVjFoTlhFMS9pYWRMclVpV0dmajk0ZW0rNjB2RGgvSFNwUi96K3lJTDlkL2ZyR2x2dDluRGVPbFNqL250N2pWbExRbWJQWHlRTHZWWUEwS0VDRnNLSVVLRTdaZFNPSk95dTlUYzZZU0YvbGNSdVlGcTdpS2RVRm56QzYxbElFU0lFQ0ZDaEFnVEN3Y0IrZi9IWU84UTJZVjZBK2Z2MVcrKy9HT1lxMGdwRE1vdmJEZ3dRb1FJRVNKRWlEQ1c4R3JYMVhBZEsreHB3bHl1cXhqQ2pUMVhHVVI4SlgxOTRTc0lXTXFTWWdCMVZ5RUxVZTlRRU1EYlZXd1dRb1FJRVNKRWlIQlpHTEtCaXl4VVc3V0V3cmZTUisrU1BrZ1JoQi9WM0FtRnF2SGpGeDNVT0E4TElVS0VDQkVpUkxnc2pIQ1RNYURkL01McnNkbExhUjZTdXM0ZStEcTcwRzU2ZWVaYVZLdTNrTXN1cDIwai9yZnA1ZFpEWjR2KzZpM08zSFVJV3c0aFFvVHRoeERoZWdrL0xWeVZ5YXJraEU5ZEVUNC90TnE2bExZazJZaWR2YkdJMVJ0MWhycE9qMmJPOXp5aDhIRFQ2bkRMVTYzUWQySE5mQWdSSWtTSUVDSENUZ3FMaFZYUkVlSDB0V1JPK0dOS3EwMjEwdC90MUJrMVk5aXBGY1hZeEU3cjV2SGxlNE9XYWpqSElVS0VDQkVpUklnUVlXS2h1akZYdzFLM3o5WlNxTEVtc0NrTElVS0VDQkVpUklnUUlVS0VDQkVpUklnUUljSXVDcjhEUzh3YzBQZ1I0UjRBQUFBQVNVVk9SSzVDWUlJPSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2xhc3RfbWVzc2FnZSc6ICfQudC+0YMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnaXNfdW5yZWFkJzogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogJzInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnbmFtZSc6ICdTZXJnYW50JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RvJzogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd1c2VybmFtZSc6ICdkaWFuYWNvYmVyNycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Byb2ZpbGVfcGljX3VybCc6ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU9FQUFBRGhDQU1BQUFBSmJTSklBQUFBeGxCTVZFWC8vLys5a21hS1NVTC8xWGxlRnkyMmhsWC96Rng3UVZQZUR3M0FsV2lGUFRYS3M3R25mWG1IUXp4d1BEYVdXMHRYQUNtbGNWWGdBQUM2alY2Q055N2Z6YnpwNGVCWkN5cXNmMXlTWWsyR1FqOTNPMUt6aFYvLzBtL0VmbGovOXVkOFFsUjJQanl3ZWtEL3ptTzZtV3YveUVtZWJsMy8wM09EVTBLeGdWWC8wVjNjcTFueHZsdVpiRkR5NitSL01TZlhPeXIvM3B0bkxETEhsbGRsSWpaOEtSNzA4UEJ5TkZHUlVqL091Yk9yZTFUa3Nsbll3YXpYUGl5aGRWV2djV3pYeDhWNlF6N0JMbHRZQUFBRTJVbEVRVlI0bk8zZFcxZlRRQlFGWUM5QURhaTBja2xMaTFLdFd0U2lvcVdLRi9ULy95bDk2WnlkdGZZNG1aQkpBdTc5eUpyTW1hK0J0UTdUU1h2bmpxSW9pcUlvaW5MYmN2V3dDN2xLS0Z3KzZrS1dDWVh2NzNVaDd5V1VVTUxXSTZHRUVwSWNwVW96d29zZHl6YXR1RHRJbFYxYWJ4dFdkRkdEOEhDNTdjTHY0Q0JMbFFHL2k3YWc1V0Vkd24zK3U0TEN1Mm5pRTFyMkpaUlFRZ2tsbEZEQ2F3Z3ZEbDErZVZvMXl6Q1pjQWhWNkNxMmY5bEM0eHE0bmVYK09wNVdiUUxOVlNMZ1g2Smw0bW5nM0RxWE8zRkM3a0poTWhhUFJ3aFdDU1dVVUVJSkpaU3dKaUZzOURVdkRHd3kxaUk4YXFKVDh3VnFVMkpOd3NaZExCSktLR0g3a1ZCQ0NkdFA3VUpvbDBDWU5kSGY4Q0laYmVDcUMzY25GcWd5bXJ2OFRMYWIrTk9LaktBSXJHaTNEaUZkZnpaLzdMSklKbHhZa1RsZmhvUVNTaWloaEJKS1dMOFFtaWlQa0ovZThna0NnNHRDT3FKbVlmYktNajEzZ1lacU1yTEFZTDcxT0lFUmNKME56a1pXWkFxRFlVVjFDMWZqZFhxZk45YkpUWmdOKy9rNmZUZDJ2QnBTNGRDbUc4TjE5cVo1TnNwZGxjODlteTZoY054YjU4UW5kRC9lT0hHRHh4NGhUR2VYK1lRd25ZUVNTaWloaEJJMkxUd3FDRTljQ2tLWGd0QmxURSsrWlVPWXJpQjBLUWh0T2hRZVZSUisvZUpPekkyR0xwT1ZleDJ4cDVuYmlJVXRhY1BHamdkRGxvSGR3NTVkbGk5c3hCeDdHcGZWeEVhTTNEcS9mSTBTSHV6WmJZSGVhb01tNzd2a2ZNU1k1L3JUcmV5Rzd4MUVDZ04vTFhIcDJSK1I1YVFYdnBDSC9vVkxLS0dFRWtvb29ZVFhFZ1o3bW5DaWVwcVk2VloxQ0hGWHN4K3V6dExIaHpNc2s2clQwYTNUYXdqQlduVkpudjh0S2d2WjRpU1VVRUlKSlpSUXdncEMrbzZyN1JHVldCd005Z2tyVGtmZmM0NFV3bTRpUE1lY3djYmlOTGdpMlBOanIvbmZ3SFJCNGhTbWd4VU5xdTRtOGgxaGJGSERRdG85RnU5aVJNYzc5YnlQWDNWSE9Id1dvNFRRNDZMVGxSRFM2eEtlTnBGUVFna2xsRkRDRWtJN3A0VUx5ZTMwVnB3dy8vZDAvZWFGQ3p0cTk5dFdkQTRuOEtLRWNOMjVUZmZiZnNxUGVDWVVZc2NGNzdiejNxb01rZldEZUVMQXM0cUVRbno5VVJqbG90TVZoS0hCRWtvb29ZUVNTdGdab1dzcWN4VFM5d3g5UWFGN3dmb05DZWxUc2xobE1YV0JKMXV5cHpHQjYrWTJuZWRwbkpxZmt2VTg2WXhFZWk5bVQySXlDMDJIOVdwKzBoa1M5YlQ2N01tRDhrRmhNRjE1SGw5Q0NTV1VVRUlKYjYwd1lwOEpleHFmaS9ZMFBwY2xuVER1VXdWbmxoOFUrQU5HQkdkcjVsTUYwUnJ6dVltekQxVDRJZVpYczl1ZmZTbWhoQkpLS0tHRU4xUm8zLzdneWVXZUpTeWt1MDloSWRTNERDMG84dHNmNEJzOFBEbXpmQThTUFZ1SVFlQjNxQkpjVVIxZndlWUpQNHhhU0dBWDJDZU1PMUNaTGlXRTFTSmhZNUZRUWduYmo0UzNRTGk1eHhLSFlkbnNpdkRzZ0lhN2VUYjVGR2R0MC82ZDU1dmw4N3p0eFZhS2hCSjJQeEpLMlAxSUtHSDNJNkdFM1krRUVuWS9Fa3JZL1Vnb1lTdlpPbWJaZWtsekdpRTg1Vk40NmlVVUh0OW5PZDVpZVJNbGZFUG44TlNUVUVJSkpaUlFRZ203STd3OGRmRzVYQzdiRkQ3N2FIbE5LNzYySVBhZDVSTUZmb0lSeUlMNWVEMVkwYk02aE1lQmdvWGkvSFo2aFB6R2xhaGlyMmc5d21ERnBvVVdDU1dVVUVJSkpieEp3bE9XbXluRUxUSEx0N2NzMzJBRVhOZHRJWWJlSUY4cTFwQlFRZ2tsbEZCQ0NTVk1MWHdSa3hzcGJDSVNTaWhoKzVGUVFnbmJqNFQvaGZBUElhRytha2NwVkM0QUFBQUFTVVZPUks1Q1lJST0nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdwYXJhbV92YWx1ZSc6ICdkaWFuYWNvYmVyNycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdsYXN0X21lc3NhZ2UnOiAnaGFsbG8gc3RhdGljIHNlcmdhbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnaXNfdW5yZWFkJzogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICd1c2VybmFtZSc6ICd0aGVfcm9zdHlzbGF2MicsXHJcbiAgICAgICAgICAgICAgICAndW5yZWFkX2NvbnZlcnNhdGlvbnMnOiAxOTksXHJcbiAgICAgICAgICAgICAgICAncGFnaW5hdGlvbic6IHtcclxuICAgICAgICAgICAgICAgICAgICAncHJldl9jdXJzb3InOiAnLi4uJyxcclxuICAgICAgICAgICAgICAgICAgICAnbmV4dF9jdXJzb3InOiAnLi4uJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICdjb252ZXJzYXRpb25zJzogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogJzMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnbmFtZSc6ICfQotC10YHRgjIyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RvJzogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd1c2VybmFtZSc6ICdkaWFuYWNvYmVyNycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Byb2ZpbGVfcGljX3VybCc6ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU9FQUFBRGhDQU1BQUFBSmJTSklBQUFBeVZCTVZFWC8vLytyZTFDU1hrVjRRRHFBcXI5a2w3R2liVDFlTWkxem9iaGtlNUJ4TXl6RHNLK21kVTZLVURKdUxDT1FXaitmYlV2bjROK25kVVhYeExXc2lYdWtianJickppRVR6OVRqcXBrTlRCMVBEbXBlRXVWWVVPSVcwQnFKQnBaTEN2djUrRy9uSUhrNi9CeFJUYWxhak9JbnFsemo1MmFYaCtObkt0MU9qUE51cks4eE15YWVIWE5uWW1lZTJDNWlIT05zTU9ndnM1ZkFBQ0RRUm5BcDV5Z2RXTDM4L0RiemNaOVFqRFF3OEdVYm1xVlpVYTdsbml2akhITXRLS2JaMExCa1h3L2hLU25aU0FxSTlQS0FBQURSMGxFUVZSNG5PM2QyMVlhTVJoQVliV0N0QjBRRUtxQUZiUzBhdFhhZ2tjODF2ZC9xRjQxK2FtWmhneEpKcTYxOStXc3llRnpidUlvaTVVVklpSWlJaUlpSWlJaUtyWGJqM0c3alM2Y05UN0VyREdMTGp3OWZoZXo0MU9FQ0JFaVJJZ1FZU3hoU3pjTEp0d1dhZUZNckIxUU9HbW9nZ0g3MmFwcXQ2K0pldWxKUU9GZUtKWVVOclZ3clcrNll3OGhRb1FJRVNKRStFYUZmWjM1VEJOUTJKcnNxY0lCdFdwMVcyak5kK3NOVFh5Y1VWdU5ZSzRjb2NPNEJrS0VDTDJGTUMrRUNCRXVEakQzWm9UOW5xV051Nno1dXV4dVE5L3lSU2NHNXB6YW9ndDdHNWFHNHRjRlVYTm9HOWhEaUJBaFFvUUlFWllzMUlldjN0Q1lrOUE4UmMvMlRpcWtjRTMzMmR6UVFUak1tVU9zRWxzbzMycm01Q1MwenBZWm4ySklvWG5UNFlSTmhBZ1JJa1NJRUtGMzRkVklkWDJ6YmNwK3BoR3Z6OHczWitJTzYyeVpjUmMzMTNxalYwN0NyWEgxYjIzcjRtWFdWdnNjYjdrSjAzYVphaU5FbUh3SUVhWWZRb1N2cW5aVmJaRysyblhhWDljMlhUVzJzQ3BPZ1NmdlZVZGlEaGRpVjR3NzB0T2Q2S3RYTnFKMzRTaXljSVFRSVVLRUNCRWlST2hmT0xqZlZ6MzgwT21yK3dNSDRVQ01FN005Nkt2M3R1bThuN3dISXZObEIyRGV1SnhGNGdpVEN5SEM5RU9JTVAwUS9pc1ViN3pLM3ZwL0U2L2wzSVNqTGRYamsrR3pFdk1mbkFpMmY5UEhOT1o2ZXRRYkhUa0pKYmErWnNuK0ovMmlOVzFMMXd1elJLMmtoVjcrRndNaFFvUUlFU0pFdUlnd0MxVXF3aEpEaUJCaCtTRkVpTEQ4RUNKRVdINElFU0lzUDRRSUVaYWZIK0cwcmlxNmtVMmRGNWRxNnVXN0x2UTNaOWovV0pvRGZENVRuWHNBanNKOW1VZFI0ZGtuMWZueVQ3SHVtNFVRSVVLRUNCRWluR3RhN1BUbFJhaVhuZ1lVZnRkZHV1enVYT2MwVG5RcDFnNG9GSFhjbnVLeUorL05UaHhXWWVIU0lVU0lFQ0ZDaElrS2Jia0piTVVYWG5SczdicGtuZTBpdXREZVlYWHhEc3ZlYktFUUlrdy9oQWpURHlIQzlIdVR3dDg3cGlvMVkyTTdURFUyVHB3emN5V2djS2RpcXJadXpFbG9uRGhuNWhwQ2hBZ1JJa1NJTUIzaHkzanhYc29VSHZ6U3VleGovWnV4cithY1p2NnBXai93SVJUTE9PMGp4czA3Q0JFaVJJZ1FJVUtFQ3dwelhxVWxVY1dMVUJ5M3pUL1NtdmtCeExpNWhoQWhRb1FJRVNKRWlCQWhRb1FJRVNKRWlCQmhLc0kvWGlrZ1FySmY5RzBBQUFBQVNVVk9SSzVDWUlJPSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2xhc3RfbWVzc2FnZSc6ICdoYWxsbyBzdGF0aWMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnaXNfdW5yZWFkJzogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IHt1c2VyTGlzdCwgY29udmVyc2F0aW9ufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9tZXNzYWdlcy9kYXRhU2VydmVyLmpzIiwiaW1wb3J0ICogYXMgZGF0YSBmcm9tICcuL2RhdGFTZXJ2ZXInO1xyXG5pbXBvcnQgTWV0ZW9yRW1vamkgZnJvbSAnbWV0ZW9yLWVtb2ppJztcclxuLy8gaW1wb3J0IHFxIGZyb20gJ2ZpbmUtdXBsb2FkZXInOyAvL3RvZG86IGZpbmUtdXBsb2FkZVxyXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdXNlcic7XHJcbmltcG9ydCBVc2VyQ29udmVyc2F0aW9uIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9hcGktdXNlci1kaXJlY3QnO1xyXG5cclxuY29uc3QgdG9rZW4gPSBVc2VyLmdldFRva2VuKCk7XHJcblxyXG5mdW5jdGlvbiBpc0luTWVzc2FnZVBhZ2UoKSB7XHJcbiAgICBjb25zdCAkbXNnTGlzdCA9ICQoJy5tZXNzYWdlcy1saXN0Jyk7XHJcbiAgICBjb25zdCAkdXNlckxpc3QgPSAkKCcubWVzc2FnZXMtdXNlci1saXN0Jyk7XHJcbiAgICByZXR1cm4gISEkbXNnTGlzdC5sZW5ndGggJiYgISEkdXNlckxpc3QubGVuZ3RoO1xyXG59XHJcbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcclxuICAgIGlmICghaXNJbk1lc3NhZ2VQYWdlKCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcclxuICAgIGNvbnN0IG0gPSBuZXcgTWV0ZW9yRW1vamkoKTtcclxuICAgIGNvbnN0ICRwaWNrZXIgPSAkKCd0ZXh0YXJlYVtkYXRhLW1ldGVvci1lbW9qaT1cInRydWVcIl0gfiBkaXYnKTtcclxuICAgIGNvbnN0IHN0eWxlID0gJHBpY2tlci5hdHRyKCdzdHlsZScpO1xyXG4gICAgY29uc3Qgc3R5bGVOZXcgPSBzdHlsZS5yZXBsYWNlKCd0b3A6IDMwcHg7JywgJ3RvcDogLTIxMHB4OycpO1xyXG4gICAgJHBpY2tlci5hdHRyKCdzdHlsZScsIHN0eWxlTmV3KTtcclxuXHJcbiAgICAvKlxyXG4gICAgLy90b2RvOiBmaW5lLXVwbG9hZGVcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gICAgY29uc3QgcmVzdHJpY3RlZFVwbG9hZGVyID0gbmV3IHFxLkZpbmVVcGxvYWRlcih7XHJcbiAgICAgICAgZWxlbWVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbmUtdXBsb2FkZXItdmFsaWRhdGlvbicpLFxyXG4gICAgICAgIHRlbXBsYXRlOiAncXEtdGVtcGxhdGUtdmFsaWRhdGlvbicsXHJcbiAgICAgICAgcmVxdWVzdDoge1xyXG4gICAgICAgICAgICBlbmRwb2ludDogJy9zZXJ2ZXIvdXBsb2FkcydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRodW1ibmFpbHM6IHtcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICB3YWl0aW5nUGF0aDogJ2h0dHBzOi8vZmluZXVwbG9hZGVyLmNvbS9zb3VyY2UvcGxhY2Vob2xkZXJzL3dhaXRpbmctZ2VuZXJpYy5wbmcnLCAvLyAnL3NvdXJjZS9wbGFjZWhvbGRlcnMvd2FpdGluZy1nZW5lcmljLnBuZycsXHJcbiAgICAgICAgICAgICAgICBub3RBdmFpbGFibGVQYXRoOiAnaHR0cHM6Ly9maW5ldXBsb2FkZXIuY29tL3NlcnZlci93YWl0aW5nLWdlbmVyaWMucG5nJyAvLyAnL3NvdXJjZS9wbGFjZWhvbGRlcnMvbm90X2F2YWlsYWJsZS1nZW5lcmljLnBuZydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICAgICAgICBhbGxvd2VkRXh0ZW5zaW9uczogWydqcGVnJywgJ2pwZycsICd0eHQnXSxcclxuICAgICAgICAgICAgaXRlbUxpbWl0OiAzLFxyXG4gICAgICAgICAgICBzaXplTGltaXQ6IDUwMCAqIDEwMjRcclxuICAgICAgICB9XHJcbiAgICB9KTsqL1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGZpbGxMaXN0KCRsaXN0LCBkYXRhQXJyYXkpIHtcclxuICAgIGNvbnN0IGl0ZW1zID0gZGF0YUFycmF5O1xyXG4gICAgY29uc3QgY0xpc3QgPSAkbGlzdDtcclxuICAgIC8vIGNvbnN0IGRlZmF1bHRBdmF0YXJTcmMgPSAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9qTk5UNExFLnBuZyc7XHJcbiAgICBjb25zdCBpbnNlcnRNc2cgPSAodmFsdWUsIHR5cGUsIGNzc0NscykgPT4ge1xyXG4gICAgICAgIGxldCBzdHIgPSAnJztcclxuICAgICAgICBzd2l0Y2ggKHR5cGUudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICBjYXNlICdwaG90byc6XHJcbiAgICAgICAgICAgICAgICBzdHIgPSBgPGRpdiBjbGFzcz1cImNoYXQtaW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3ZhbHVlfVwiIGFsdD1cIkNvbnRlbnQgSW1hZ2VcIiBjbGFzcz1cImNvbnRlbnQtaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PmA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbGluayc6XHJcbiAgICAgICAgICAgICAgICBzdHIgPSBgPGRpdiBjbGFzcz1cImNoYXQtaW1nXCI+XHJcbiAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiJHt2YWx1ZX1cIj4ke3ZhbHVlfTwvYT5gO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHN0ciA9IGA8ZGl2IGNsYXNzPVwiY2hhdC10ZXh0XCIgPiR7dmFsdWV9PC9kaXY+YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0cjtcclxuICAgIH07XHJcbiAgICBjTGlzdC5lbXB0eSgpLmFkZENsYXNzKCdib3JkZXItbGlnaHQtY29sb3InKTtcclxuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gaXRlbTtcclxuICAgICAgICAvLyBjb25zdCBjaGVja3BvaW50ID0gaXRlbS5jaGVja3BvaW50IHx8IGl0ZW07XHJcblxyXG4gICAgICAgIGlmIChtZXNzYWdlLnNpZGUudG9Mb3dlckNhc2UoKSA9PT0gJ2xlZnQnKSB7XHJcbiAgICAgICAgICAgICQoYDxsaSBjbGFzcz1cImNoYXQtaXRlbSBjaGF0LWl0ZW0tbGVmdFwiIHZhbHVlPVwiJHttZXNzYWdlLnZhbHVlfVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgJHsobWVzc2FnZVsncHJvZmlsZV9waWNfdXJsJ10pXHJcbiAgICAgICAgICAgICAgICAgICAgPyBgPGRpdiBjbGFzcz1cImNoYXQtaW1nLWJveFwiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHttZXNzYWdlWydwcm9maWxlX3BpY191cmwnXX1cIiBhbHQ9XCJVc2VyIEF2YXRhclwiIGNsYXNzPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2hhdC11c2VybmFtZSB0ZXh0LW11dGVkXCI+JHttZXNzYWdlLnVzZXJuYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAke2luc2VydE1zZyhtZXNzYWdlLnZhbHVlLCBtZXNzYWdlLnR5cGUpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiY2hhdC10aW1lLXRleHRcIj4ke1VzZXJDb252ZXJzYXRpb24uZ2V0Rm9ybWF0dGVkRGF0ZVV0aWwobWVzc2FnZS50aW1lc3RhbXApfTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5gKS5hcHBlbmRUbyhjTGlzdCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChgPGxpIGNsYXNzPVwiY2hhdC1pdGVtIGp1c3RpZnktY29udGVudC1lbmQgY2hhdC1pdGVtLXJpZ2h0XCIgdmFsdWU9XCIke21lc3NhZ2UudmFsdWV9XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtpbnNlcnRNc2cobWVzc2FnZS52YWx1ZSwgbWVzc2FnZS50eXBlKX1cclxuICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJwdWxsLXJpZ2h0IGNoYXQtdGltZS10ZXh0XCI+JHtVc2VyQ29udmVyc2F0aW9uLmdldEZvcm1hdHRlZERhdGVVdGlsKG1lc3NhZ2UudGltZXN0YW1wKX08L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPmApLmFwcGVuZFRvKGNMaXN0KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsbFVzZXJMaXN0KCRsaXN0LCBkYXRhQXJyYXkpIHtcclxuICAgIGNvbnN0IGl0ZW1zID0gZGF0YUFycmF5Lm1ldGE7XHJcbiAgICBjb25zdCBjTGlzdCA9ICRsaXN0O1xyXG4gICAgY29uc3QgY29udmVyc2F0aW9uRGV0YWlsID0gZnVuY3Rpb24oaXRlbXMpIHtcclxuICAgICAgICBsZXQgdHBsID0gJyc7XHJcbiAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXRlbXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgdHBsICs9IGA8aW1nIHNyYz1cIiR7aXRlbVsncHJvZmlsZV9waWNfdXJsJ119XCIgY2xhc3M9XCJtZWRpYS1waG90byBtci0xIG1lZGlhLXBob3RvLS1ncm91cFwiIHN0eWxlPVwid2lkdGg6IDI0cHg7XCI+YDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRwbCArPSBgPGltZyBzcmM9XCIke2l0ZW1bJ3Byb2ZpbGVfcGljX3VybCddfVwiIGNsYXNzPVwibWVkaWEtcGhvdG8gbXItMVwiIHN0eWxlPVwid2lkdGg6IDI0cHg7XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEtYm9keVwiPiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtpdGVtLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9oNT5gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgdHBsICs9ICc8aDUgY2xhc3M9XCJ0aXRsZVwiPtCT0YDRg9C/0L7QstC+0Lkg0YfQsNGCPC9oNT4nO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHBsO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGFkZENvbnZlcnNhdGlvbnMgPSBmdW5jdGlvbihjb252ZXJzYXRpb25zKSB7XHJcbiAgICAgICAgbGV0IHRwbCA9ICcnO1xyXG4gICAgICAgIGNvbnZlcnNhdGlvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICB0cGwgKz0gYDxkaXYgY2xhc3M9XCJtZWRpYSBwLTFcIiBkYXRhLWNvbnZlcnNhdGlvbi1pZD1cIiR7aXRlbS5pZH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAke2NvbnZlcnNhdGlvbkRldGFpbChpdGVtLnRvKX1cclxuICAgICAgICAgICAgICAgICAgICAkeyhwYXJzZUludChpdGVtWydsYXN0X21lc3NhZ2UnXSwgMTApID4gMCkgPyBgPHAgY2xhc3M9XCJzdW1tYXJ5IHRleHQtbXV0ZWRcIj4ke2l0ZW1bJ2xhc3RfbWVzc2FnZSddfTwvcD5gIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+YDtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdHBsO1xyXG4gICAgfTtcclxuICAgIGNMaXN0LmVtcHR5KCkuYWRkQ2xhc3MoJ2JvcmRlci1saWdodC1jb2xvcicpO1xyXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaWR4KSA9PiB7XHJcbiAgICAgICAgJChgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI2NvbGxhcHNlLSR7aWR4fVwiIGRhdGEtdXNlcm5hbWU9XCIke2l0ZW0udXNlcm5hbWV9XCIgXHJcbiAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwidHJ1ZVwiIGFyaWEtY29udHJvbHM9XCJjb2xsYXBzZS0ke2lkeH1cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhXCIgaWQ9XCJoZWFkaW5nLSR7aWR4fVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1yLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaS5pbWd1ci5jb20vak5OVDRMRS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWVkaWEtcGhvdG9cIj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICR7KGl0ZW1bJ3VucmVhZF9jb252ZXJzYXRpb25zJ10gPiAwKSA/IGA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLXNlY29uZGFyeSBwb3NpdGlvbi1hYnNvbHV0ZSBwLTJcIj4ke2l0ZW1bJ3VucmVhZF9jb252ZXJzYXRpb25zJ119PC9zcGFuPmAgOiAnJ31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHtpdGVtLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb2xsYXBzZS0ke2lkeH1cIiBjbGFzcz1cImNvbGxhcHNlXCIgYXJpYS1sYWJlbGxlZGJ5PVwiaGVhZGluZy0ke2lkeH1cIiBkYXRhLXBhcmVudD1cIiNhY2NvcmRpb25cIj5cclxuICAgICAgICAgICAgICAgICR7YWRkQ29udmVyc2F0aW9ucyhpdGVtLmNvbnZlcnNhdGlvbnMsIGlkeCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPmApLmFwcGVuZFRvKGNMaXN0KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRIYW5kbGVycygpIHtcclxuICAgIC8vIGxldCBjaGVja3BvaW50VHlwZSA9ICcnO1xyXG5cclxuICAgICQoJyNzZW5kTWVzc2FnZUJ1dHRvbicpLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgLy8gY29uc3QgJGJ1dHRvbiA9ICQoZS50YXJnZXQpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJNc2cgPSAkKCcjc2VuZE1lc3NhZ2VUZXh0QXJlYScpLnZhbCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJNc2cpO1xyXG5cclxuICAgIH0pO1xyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5saXN0LWdyb3VwLWl0ZW0gLmNvbGxhcHNlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcubGlzdC1ncm91cC1pdGVtJykuZGF0YSgndXNlcm5hbWUnKTtcclxuICAgICAgICBjb25zdCBjb252ZXJzYXRpb25JZCA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5tZWRpYScpLmRhdGEoJ2NvbnZlcnNhdGlvbi1pZCcpO1xyXG4gICAgICAgIGNvbnN0ICRtc2dMaXN0ID0gJCgnLm1lc3NhZ2VzLWxpc3QnKTtcclxuICAgICAgICBVc2VyQ29udmVyc2F0aW9uLmdldE1ldGFkYXRhRGV0YWlsQ29udmVyc2F0aW9uKHRva2VuLCB7dXNlcm5hbWUsIGNvbnZlcnNhdGlvbklkfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGZpbGxMaXN0KCRtc2dMaXN0LCByZXN1bHQuZGF0YS5tZXRhLm1lc3NhZ2VzKTtcclxuICAgICAgICAgICAgJCgnLmpzX3NlbmQtbWVzc2FnZS1ib3gnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgICAgICQoJy5tZXNzYWdlcy1saXN0JykuZGF0YSgnY29udmVyc2F0aW9uJywgSlNPTi5zdHJpbmdpZnkoe3VzZXJuYW1lLCBjb252ZXJzYXRpb25JZH0pKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIGNvbnN0IHtjb252ZXJzYXRpb24sIHVzZXJMaXN0fSA9IGRhdGE7XHJcbiAgICBjb25zdCAkbXNnTGlzdCA9ICQoJy5tZXNzYWdlcy1saXN0Jyk7XHJcbiAgICBjb25zdCAkdXNlckxpc3QgPSAkKCcubWVzc2FnZXMtdXNlci1saXN0Jyk7XHJcbiAgICAvLyBjaGVjayB3ZSBhcmUgaW4gY29ycmVjdCBwYWdlIChtZXNzYWdlcylcclxuICAgIGlmICghaXNJbk1lc3NhZ2VQYWdlKCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIXdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKCdsb2NhbGhvc3QnKSkge1xyXG4gICAgICAgIGZpbGxVc2VyTGlzdCgkdXNlckxpc3QsIHVzZXJMaXN0LmRhdGEpO1xyXG4gICAgICAgIGZpbGxMaXN0KCRtc2dMaXN0LCBjb252ZXJzYXRpb24uZGF0YS5tZXRhLm1lc3NhZ2VzKTtcclxuICAgICAgICBhZGRIYW5kbGVycygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBtZXRhZGF0YSA9IFVzZXJDb252ZXJzYXRpb24uZ2V0TWV0YWRhdGEodG9rZW4pO1xyXG4gICAgICAgIG1ldGFkYXRhLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBmaWxsVXNlckxpc3QoJHVzZXJMaXN0LCByZXN1bHQuZGF0YSB8fCB1c2VyTGlzdC5kYXRhKTtcclxuICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FkZCBvbkNsaWNrJyk7XHJcbiAgICAgICAgICAgIFVzZXJDb252ZXJzYXRpb24uZ2V0TWV0YWRhdGEodG9rZW4pO1xyXG4gICAgICAgICAgICAvLyBmaWxsTGlzdCgkbXNnTGlzdCwgcmVzdWx0LmRhdGEubWV0YS5tZXNzYWdlcyB8fCBjb252ZXJzYXRpb24uZGF0YS5tZXRhLm1lc3NhZ2VzKTtcclxuICAgICAgICAgICAgLy8gYWRkSGFuZGxlcnMoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGFkZEhhbmRsZXJzKCk7XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3MvbWVzc2FnZXMvbWVzc2FnZXMuanMiLCIvLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgUHViU3ViIGZyb20gJ3B1YnN1Yi1qcyc7IC8vIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3B1YnN1Yi1qc1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdXNlcic7XHJcbmltcG9ydCBjb29raWVTdG9yYWdlIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb29raWUnO1xyXG5pbXBvcnQge0NPTlNUfSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29uc3RzJztcclxuaW1wb3J0IHZpZXdVdGlscyBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdmlldyc7XHJcblxyXG5jb25zdCBzZWxlY3RvckNscyA9IHtcclxuICAgIGZvcm06ICcuYXV0aC5yZWdpc3RlciAuZm9ybS1zaWduaW4nLFxyXG4gICAgc3VibWl0QnRuOiAnW3R5cGU9XCJzdWJtaXRcIl0nXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZ2lzdGVyRm9ybSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnVzZXIgPSBVc2VyO1xyXG4gICAgICAgIHRoaXMuJGZvcm0gPSAkKHNlbGVjdG9yQ2xzLmZvcm0pO1xyXG4gICAgICAgIHRoaXMuJGVtYWlsID0gdGhpcy4kZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwibWFpbFwiXScpO1xyXG4gICAgICAgIHRoaXMuJHRleHRBcmVhRGVzY3JpcHRpb24gPSAkKCcjZGVzY3JpcHRpb24nKTtcclxuICAgICAgICB0aGlzLmZvcm1EYXRhID0geydlbWFpbCc6ICd0ZXN0MV9lbWFpbEBtLnJ1JywgJ3Bhc3N3b3JkJzogJ3Bhc3N3b3JkJ307XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBpZiAoJCgnLmF1dGgucmVnaXN0ZXInKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN1Ym1pdEZvcm0oZm9ybURhdGFPYmopIHtcclxuICAgICAgICBjb25zdCBlbWFpbCA9IHRoaXMuJGVtYWlsLnZhbCgpO1xyXG4gICAgICAgIGNvbnN0ICRwYXNzd29yZCA9IHRoaXMuJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cInBhc3NcIl0nKSxcclxuICAgICAgICAgICAgJHBhc3N3b3JkQ29uZmlybSA9IHRoaXMuJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cInBhc3MtY29uZmlybVwiXScpLFxyXG4gICAgICAgICAgICBwYXNzd29yZCA9IHRoaXMuJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cInBhc3NcIl0nKS52YWwoKSxcclxuICAgICAgICAgICAgcGFzc3dvcmRDb25maXJtID0gdGhpcy4kZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwicGFzcy1jb25maXJtXCJdJykudmFsKCk7XHJcblxyXG4gICAgICAgIGlmIChwYXNzd29yZENvbmZpcm0gIT09IHBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgICRwYXNzd29yZC5hZGRDbGFzcygnaW5wdXQtZXJyb3InKTtcclxuICAgICAgICAgICAgJHBhc3N3b3JkQ29uZmlybS5hZGRDbGFzcygnaW5wdXQtZXJyb3InKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLiRlbWFpbC52YWwodGhpcy4kZW1haWwudmFsKCkudG9Mb2NhbGVMb3dlckNhc2UoKSk7XHJcbiAgICAgICAgdGhpcy5mb3JtRGF0YSA9IGZvcm1EYXRhT2JqIHx8IHtlbWFpbCwgcGFzc3dvcmR9O1xyXG5cclxuICAgICAgICB0aGlzLnVzZXIucmVnaXN0ZXIodGhpcy5mb3JtRGF0YSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5kYXRhICYmIHJlc3VsdC5kYXRhLnRva2VuKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNhdmUgdGhlIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBjb29raWVTdG9yYWdlLnNldChDT05TVC5jb29raWVTdG9yYWdlLmVtYWlsQ29uZmlybWVkLCAnZmFsc2UnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29va2llU3RvcmFnZS5zZXQoQ09OU1QuY29va2llU3RvcmFnZS50b2tlbiwgcmVzdWx0LmRhdGEudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXF1ZXN0IHN1Y2NlZWRlZCB3aXRoIEpTT04gcmVzcG9uc2UnLCByZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIFB1YlN1Yi5wdWJsaXNoKENPTlNULmV2ZW50cy5VU0VSX0xPR0dFRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSh0aGlzLiR0ZXh0QXJlYURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLm1lc3NhZ2UgfHwgJ1JlZ2lzdGVyIGFuZCBMb2dpbiBzdWNjc2VzcycpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKHRoaXMuJHRleHRBcmVhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMubWVzc2FnZSB8fCAnbm8gcmVzdWx0LmRhdGEgZm91bmQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UodGhpcy4kdGV4dEFyZWFEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5zdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmxvZ2luLWJveCcpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVxdWVzdCBmYWlsZWQnLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKHRoaXMuJHRleHRBcmVhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZG8gc29tZXRoaW5nJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcbiAgICAgICAgY29uc3QgcmVnaXN0ZXJCb3ggPSBDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJSZWdCb3g7IC8vICduYXYgLnJlZ2lzdGVyLWJveCc7XHJcbiAgICAgICAgY29uc3Qgb3BlbmVkQ2xhc3MgPSAnZC1ibG9jayc7XHJcbiAgICAgICAgY29uc3QgY2xvc2VDbGFzcyA9ICdkLW5vbmUnO1xyXG4gICAgICAgIGNvbnN0ICRidG4gPSAkKHNlbGVjdG9yQ2xzLnN1Ym1pdEJ0biksXHJcbiAgICAgICAgICAgIGNzc1ZhbGlkYXRpb25DbGFzcyA9ICdmb3JtLXZhbGlkYXRpb24nO1xyXG5cclxuICAgICAgICAkYnRuLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSB0aGlzLiRmb3JtLmdldCgwKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCEkYnRuLmlzKCc6ZGlzYWJsZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZvcm0uY2hlY2tWYWxpZGl0eSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gJGJ0bi5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0Rm9ybSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBIaWdobGlnaHQgZXJyb3JzXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm0ucmVwb3J0VmFsaWRpdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRmb3JtLmFkZENsYXNzKGNzc1ZhbGlkYXRpb25DbGFzcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzUmVnQnRuQ2xpY2sgPSAkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnbmF2Lm5hdmJhcicpLmZpbmQoJy5yZWdpc3Rlci1ib3gnKS5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWlzUmVnQnRuQ2xpY2sgJiYgJChyZWdpc3RlckJveCkuaGFzQ2xhc3Mob3BlbmVkQ2xhc3MpKSB7XHJcbiAgICAgICAgICAgICAgICAkKHJlZ2lzdGVyQm94KS5hZGRDbGFzcyhjbG9zZUNsYXNzKS5yZW1vdmVDbGFzcyhvcGVuZWRDbGFzcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL3JlZ2lzdGVyLWZvcm0vcmVnaXN0ZXItZm9ybS5qcyIsIi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCB7Q09OU1R9IGZyb20gJy4vY29uc3RzJztcclxuaW1wb3J0IE5ldHdvcmsgZnJvbSAnLi9uZXR3b3JrJztcclxuaW1wb3J0IENvb2tpZVN0b3JhZ2UgZnJvbSAnLi9jb29raWUnO1xyXG5cclxuY2xhc3MgVXNlckNvbnZlcnNhdGlvbiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5uZXR3b3JrID0gbmV3IE5ldHdvcmsoKTtcclxuICAgICAgICB0aGlzLmNvb2tpZVN0b3JhZ2UgPSBDb29raWVTdG9yYWdlO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ1Bvc3QgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBpc0xvZ2dlZEluKCkge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMuZ2V0VG9rZW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0VtYWlsQ29uZmlybWVkKCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5jb29raWVTdG9yYWdlLmdldChDT05TVC5jb29raWVTdG9yYWdlLmVtYWlsQ29uZmlybWVkKSA9PT0gJ2NvbmZpcm1lZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRva2VuKCkge1xyXG4gICAgICAgIGNvbnN0IGNvb2tpZVRva2VuID0gdGhpcy5jb29raWVTdG9yYWdlLmdldChDT05TVC5jb29raWVTdG9yYWdlLnRva2VuKTtcclxuICAgICAgICByZXR1cm4gY29va2llVG9rZW47XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWV0YWRhdGEodG9rZW4sIGNiRXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KGAke0NPTlNULmdldFBhdGgoJ2luc3RhZ3JhbURpcmVjdF9nZXRNZXRhRGF0YScpfWAsIHtoZWFkZXJzOiB7dG9rZW59fSwgY2JFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWV0YWRhdGFEZXRhaWxDb252ZXJzYXRpb24odG9rZW4sIGRldGFpbHMsIGNiRXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KGAke0NPTlNULmdldFBhdGgoJ2luc3RhZ3JhbURpcmVjdF9nZXRNZXRhRGF0YScpfS8ke2RldGFpbHMudXNlcm5hbWV9LyR7ZGV0YWlscy5jb252ZXJzYXRpb25JZH1gLFxyXG4gICAgICAgICAgICB7aGVhZGVyczoge3Rva2VufX0sIGNiRXJyb3IpO1xyXG4gICAgfVxyXG4gICAgLy8gcG9zdE1ldGFkYXRhRGV0YWlsQ29udmVyc2F0aW9uKHRva2VuLCBkZXRhaWxzLCBjYkVycm9yKSB7XHJcbiAgICAvLyAgICAgY29uc3Qgc2V0dGluZyA9IHtcclxuICAgIC8vICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgIC8vICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeydzZWN1cml0eV9jb2RlJzoga2V5fSksXHJcbiAgICAvLyAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgIC8vICAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QuaGVhZGVycyxcclxuICAgIC8vICAgICAgICAgICAgICd0b2tlbic6ICczZTMyMWU2MDAyOTcxMWU5OTI2NGEwNDgxYzhlMTdkNCcgLy8gdG9kbzogdGhpcy5nZXRUb2tlbigpXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9O1xyXG4gICAgLy8gICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QoYCR7Q09OU1QuZ2V0UGF0aCgnaW5zdGFncmFtRGlyZWN0X2dldE1ldGFEYXRhJyl9LyR7ZGV0YWlscy51c2VybmFtZX0vJHtkZXRhaWxzLmNvbnZlcnNhdGlvbklkfWAsXHJcbiAgICAvLyAgICAgICAgIHNldHRpbmcsIGNiRXJyb3IpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGdldEZvcm1hdHRlZERhdGVVdGlsKHRTdGFtcCwgc2hvd0Z1bGxUaW1lKSB7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRTdGFtcCk7XHJcblxyXG4gICAgICAgIGxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XHJcbiAgICAgICAgbGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIGxldCBob3VyID0gZGF0ZS5nZXRIb3VycygpO1xyXG4gICAgICAgIGxldCBtaW4gPSBkYXRlLmdldE1pbnV0ZXMoKTtcclxuICAgICAgICBsZXQgc2VjID0gZGF0ZS5nZXRTZWNvbmRzKCk7XHJcblxyXG4gICAgICAgIG1vbnRoID0gKG1vbnRoIDwgMTAgPyAnMCcgOiAnJykgKyBtb250aDtcclxuICAgICAgICBkYXkgPSAoZGF5IDwgMTAgPyAnMCcgOiAnJykgKyBkYXk7XHJcbiAgICAgICAgaG91ciA9IChob3VyIDwgMTAgPyAnMCcgOiAnJykgKyBob3VyO1xyXG4gICAgICAgIG1pbiA9IChtaW4gPCAxMCA/ICcwJyA6ICcnKSArIG1pbjtcclxuICAgICAgICBzZWMgPSAoc2VjIDwgMTAgPyAnMCcgOiAnJykgKyBzZWM7XHJcblxyXG4gICAgICAgIGxldCBzdHIgPSAnJztcclxuICAgICAgICBpZiAoIXNob3dGdWxsVGltZSkge1xyXG4gICAgICAgICAgICBzdHIgPSBgJHtob3VyfToke21pbn1gO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0ciA9IGAke2RhdGUuZ2V0RnVsbFllYXIoKX0tJHttb250aH0tJHtkYXl9XyR7aG91cn06JHttaW59OiR7c2VjfWA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc3RyO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmZpcm1TZWN1cml0eUtleShrZXksIHVzZXJuYW1lKSB7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeydzZWN1cml0eV9jb2RlJzoga2V5fSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QuaGVhZGVycyxcclxuICAgICAgICAgICAgICAgICd0b2tlbic6ICczZTMyMWU2MDAyOTcxMWU5OTI2NGEwNDgxYzhlMTdkNCcgLy8gdG9kbzogdGhpcy5nZXRUb2tlbigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QoYCR7Q09OU1QuZ2V0UGF0aCgnaW5zdGFncmFtQWNjb3VudF9jb25maXJtS2V5Jyl9JHt1c2VybmFtZX1gLCBzZXR0aW5nKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmxldCB1c2VySW5zdGFuY2UgPSBudWxsO1xyXG5cclxuaWYgKCF1c2VySW5zdGFuY2UpIHtcclxuICAgIHVzZXJJbnN0YW5jZSA9IG5ldyBVc2VyQ29udmVyc2F0aW9uKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJJbnN0YW5jZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy9hcGktdXNlci1kaXJlY3QuanMiLCIvKiBlc2xpbnQtZGlzYWJsZSBzb3J0LXZhcnMgKi9cclxuLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3VzZXInO1xyXG5pbXBvcnQgUHViU3ViIGZyb20gJ3B1YnN1Yi1qcyc7IC8vIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3B1YnN1Yi1qc1xyXG5pbXBvcnQgY29va2llU3RvcmFnZSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29va2llJztcclxuLy8gaW1wb3J0IFZhbGlkYXRvciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvZm9ybS12YWxpZGF0b3InO1xyXG5pbXBvcnQgdmlld1V0aWxzIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy92aWV3JztcclxuaW1wb3J0IHtDT05TVH0gZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2NvbnN0cyc7XHJcblxyXG4vLyB3aW5kb3cuJCA9ICQ7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTG9naW5QYWdlKHNlbGVjdG9yQ3NzKSB7XHJcbiAgICBjb25zdCB7X2Zvcm1JZCwgX2J1dHRvblN1Ym1pdElkLCBfbG9naW5Cb3h9ID0gc2VsZWN0b3JDc3M7XHJcbiAgICBjb25zdCB1c2VyID0gVXNlciwgLy8gc2VydmljZVxyXG4gICAgICAgICRmb3JtID0gJChfZm9ybUlkKSxcclxuICAgICAgICAkZW1haWwgPSAkZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwibWFpbFwiXScpLFxyXG4gICAgICAgICR0ZXh0QXJlYURlc2NyaXB0aW9uID0gJCgnI2Rlc2NyaXB0aW9uJyk7XHJcbiAgICAvLyBjb25zdCBvcGVuZWRDbGFzcyA9ICdkLWJsb2NrJztcclxuICAgIC8vIGNvbnN0IGNsb3NlQ2xhc3MgPSAnZC1ub25lJztcclxuXHJcbiAgICBjb25zdCB1c2VyTG9naW5IZWFkZXIgPSAoX2Zvcm1EYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2JFcnJvciA9IChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgJChfbG9naW5Cb3gpLmFwcGVuZCgnPHA+cmVzdWx0LnN0YXR1cy5tZXNzYWdlPC9wPicpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiB1c2VyLmxvZ2luKF9mb3JtRGF0YSwgY2JFcnJvcilcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuZGF0YSAmJiByZXN1bHQuZGF0YS50b2tlbikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNhdmUgdGhlIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBjb29raWVTdG9yYWdlLnNldChDT05TVC5jb29raWVTdG9yYWdlLnRva2VuLCByZXN1bHQuZGF0YS50b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLm5hdi1saW5rLmpzX2xvZ091dCcpLnBhcmVudCgpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmVxdWVzdCBzdWNjZWVkZWQgd2l0aCBKU09OIHJlc3BvbnNlJywgcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKCR0ZXh0QXJlYURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLm1lc3NhZ2UgfHwgJ0xvZ2luIHN1Y2NzZXNzJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UodGhpcy4kdGV4dEFyZWFEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYDxwPnN0YXR1czogJHtyZXN1bHQuc3RhdHVzLnN0YXRlfTwvcD48cD4gbWVzc2FnZTogJHtyZXN1bHQuc3RhdHVzLm1lc3NhZ2V9PC9wPmApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSgkdGV4dEFyZWFEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5tZXNzYWdlIHx8ICdMb2dpbiBlcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc3VibWl0Rm9ybSA9IGZ1bmN0aW9uKGZvcm1EYXRhT2JqKSB7XHJcbiAgICAgICAgY29uc3QgZW1haWwgPSAkZW1haWwudmFsKCksXHJcbiAgICAgICAgICAgIHBhc3N3b3JkID0gJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cInBhc3NcIl0nKS52YWwoKSxcclxuICAgICAgICAgICAgX2Zvcm1EYXRhID0gZm9ybURhdGFPYmogfHwge2VtYWlsLCBwYXNzd29yZH07XHJcblxyXG4gICAgICAgIGlmIChzZWxlY3RvckNzcy5pc0xvZ2luSW5zdGFncmFtKSB7XHJcbiAgICAgICAgICAgIC8vIHRvZG86IGRlbGV0ZSBtZVxyXG4gICAgICAgICAgICAvLyBhZGRJbnN0YWdyYW1BY2NvdW50KHt1c2VybmFtZTogJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cInVzZXJuYW1lXCJdJykudmFsKCksIHBhc3N3b3JkfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGVtYWlsLnZhbCgkZW1haWwudmFsKCkudG9Mb2NhbGVMb3dlckNhc2UoKSk7XHJcbiAgICAgICAgICAgIHVzZXJMb2dpbkhlYWRlcihfZm9ybURhdGEpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gUHViU3ViLnB1Ymxpc2goQ09OU1QuZXZlbnRzLlVTRVJfTE9HR0VELCAnbG9naW4nKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9pbnN0YWdyYW0taW50ZWdyYXRpb24vaW5zdGFncmFtLWFjY291bnRzLmh0bWwnO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGxvZ091dCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvb2tpZVN0b3JhZ2UucmVtb3ZlKENPTlNULmNvb2tpZVN0b3JhZ2UudG9rZW4pO1xyXG4gICAgICAgIFB1YlN1Yi5wdWJsaXNoKENPTlNULmV2ZW50cy5VU0VSX0xPR09VVCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGJpbmRFdmVudHMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyBjb25zdCAkc2hvd0xvZ2luQm94QnRuSWQgPSAkKF9zaG93TG9naW5Cb3hCdG5JZCk7XHJcbiAgICAgICAgY29uc3QgJGxvZ2luQm94ID0gJChfbG9naW5Cb3gpO1xyXG4gICAgICAgIGNvbnN0IG9wZW5lZENsYXNzID0gJ2QtYmxvY2snO1xyXG4gICAgICAgIGNvbnN0IGNsb3NlQ2xhc3MgPSAnZC1ub25lJztcclxuXHJcbiAgICAgICAgLy8gJHNob3dMb2dpbkJveEJ0bklkLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAvLyAgICAgaWYgKCFzZWxlY3RvckNzcy5pc0xvZ2luSW5zdGFncmFtKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAkbG9naW5Cb3guY3NzKHsndG9wJzogMCwgJ3JpZ2h0JzogMH0pXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLmFkZENsYXNzKCdiZy1saWdodCBib3JkZXIgbXQtNSBteC1hdXRvIHBvc2l0aW9uLWFic29sdXRlJyk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgJGxvZ2luQm94LmFkZENsYXNzKG9wZW5lZENsYXNzKS5yZW1vdmVDbGFzcyhjbG9zZUNsYXNzKTtcclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgJGJ1dHRvblN1Ym1pdCA9ICQoX2J1dHRvblN1Ym1pdElkKSxcclxuICAgICAgICAgICAgY3NzVmFsaWRhdGlvbkNsYXNzID0gJ2Zvcm0tdmFsaWRhdGlvbic7XHJcblxyXG4gICAgICAgICRidXR0b25TdWJtaXQub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zdCBmb3JtID0gJGZvcm0uZ2V0KDApO1xyXG4gICAgICAgICAgICAvLyBjb25zdCB2YWxpZGF0b3IgPSBuZXcgVmFsaWRhdG9yKCRmb3JtKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codmlld1V0aWxzLCB2aWV3VXRpbHMuaXNFbWFpbCgkZW1haWwudmFsKCkpKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChmb3JtLmNoZWNrVmFsaWRpdHkoKSAmJiB2aWV3VXRpbHMuaXNFbWFpbCgkZW1haWwudmFsKCkpKSB7XHJcbiAgICAgICAgICAgICAgICBzdWJtaXRGb3JtKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBIaWdobGlnaHQgZXJyb3JzXHJcbiAgICAgICAgICAgICAgICBpZiAoZm9ybS5yZXBvcnRWYWxpZGl0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm0ucmVwb3J0VmFsaWRpdHkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICRmb3JtLmFkZENsYXNzKGNzc1ZhbGlkYXRpb25DbGFzcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLm5hdi1saW5rLmpzX2xvZ091dCcpLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgbG9nT3V0KCk7XHJcbiAgICAgICAgICAgICQoZS50YXJnZXQpLnBhcmVudCgpLmhpZGUoKTtcclxuICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSgkdGV4dEFyZWFEZXNjcmlwdGlvbiwgJ0xvZ2dlZCBvdXQnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgUHViU3ViLnN1YnNjcmliZShDT05TVC5ldmVudHMuVVNFUl9MT0dPVVQsIChtc2cpID0+IHtcclxuICAgICAgICAgICAgJChDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJOYXZMb2dpbkJ0bikuYWRkQ2xhc3Mob3BlbmVkQ2xhc3MpLnJlbW92ZUNsYXNzKGNsb3NlQ2xhc3MpOyAvLyAuc2hvdygpO1xyXG4gICAgICAgICAgICAkKENPTlNULnVpU2VsZWN0b3JzLmhlYWRlclJlZ0J0bikuYWRkQ2xhc3Mob3BlbmVkQ2xhc3MpLnJlbW92ZUNsYXNzKGNsb3NlQ2xhc3MpO1xyXG4gICAgICAgICAgICAkKCcubmF2LWxpbmsuanNfbG9nT3V0JykuYWRkQ2xhc3MoY2xvc2VDbGFzcykucmVtb3ZlQ2xhc3Mob3BlbmVkQ2xhc3MpOyAvLyAuaGlkZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RvckxvZ2luU3RhdGUgPSAnLmpzX21lc3NhZ2VfbG9nZ2VkLS10ZXh0JztcclxuICAgICAgICAgICAgJChzZWxlY3RvckxvZ2luU3RhdGUpLnRleHQoJ9CS0Ysg0LLRi9GI0LvQuCDQuNC3INCw0LrQutCw0YPQvdGC0LAnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzTG9naW5CdG5DbGljayA9ICQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCduYXYubmF2YmFyJykuZmluZCgkbG9naW5Cb3gpLmxlbmd0aDtcclxuICAgICAgICAgICAgY29uc3QgaXNBZGRJbnN0YWdyYW1CdG5DbGlja2VkID0gJChldmVudC50YXJnZXQpLmF0dHIoJ2lkJykgPT09IENPTlNULnVpU2VsZWN0b3JzLmluc3RhZ3JhbS5hZGRBY2NvdW50QnRuSWQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWlzTG9naW5CdG5DbGljayAmJiAkbG9naW5Cb3guaGFzQ2xhc3Mob3BlbmVkQ2xhc3MpICYmICFpc0FkZEluc3RhZ3JhbUJ0bkNsaWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICRsb2dpbkJveC5hZGRDbGFzcyhjbG9zZUNsYXNzKS5yZW1vdmVDbGFzcyhvcGVuZWRDbGFzcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgICAgICBpZiAoJCgnLmF1dGgubG9naW4nKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgYmluZEV2ZW50cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGluaXRcclxuICAgIH07XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL19hdXRoL2xvZ2luLXBhZ2UuanMiLCIvKiBlc2xpbnQtZGlzYWJsZSBzb3J0LXZhcnMgKi9cclxuLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3VzZXInO1xyXG4vLyBpbXBvcnQgY29va2llU3RvcmFnZSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29va2llJztcclxuaW1wb3J0IHZpZXdVdGlscyBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdmlldyc7XHJcbi8vIGltcG9ydCB7Q09OU1R9IGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEluc3RhZ3JhbShzZWxlY3RvckNTUyA9IHt9KSB7XHJcbiAgICBjb25zdCAkYnV0dG9uU3VibWl0ID0gJCgnI2pzX2luc3RhZ3JhbS1nZXQtYWNjb3VudHMtLWJ0bicpO1xyXG4gICAgY29uc3QgdXNlciA9IFVzZXIsIC8vIHNlcnZpY2VcclxuICAgICAgICAkbGlzdCA9ICQoJy5pbnN0YWdyYW0tYWNjb3VudHMtbGlzdCcpO1xyXG5cclxuICAgIGNvbnN0IHN1Ym1pdEZvcm0gPSBmdW5jdGlvbihmb3JtRGF0YU9iaikge1xyXG4gICAgICAgIGlmICgkYnV0dG9uU3VibWl0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICB1c2VyLmdldEluc3RhZ3JhbUFjY291bnQoKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld1V0aWxzLmZpbGxMaXN0KCRsaXN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuZGF0YS5hY2NvdW50cyB8fCAnTG9naW4gZXJyb3InKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZ2V0SW5zdGFncmFtQWNjb3VudCAnLCAkYnV0dG9uU3VibWl0KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYmluZEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRidXR0b25TdWJtaXQub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzdWJtaXRGb3JtKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAgICAgYmluZEV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5pdFxyXG4gICAgfTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvX2luc3RhZ3JhbS9pbnN0YWdyYW0uanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jhc2Uuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiIWZ1bmN0aW9uKGYpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlKW1vZHVsZS5leHBvcnRzPWYoKTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW10sZik7ZWxzZXsoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbD9nbG9iYWw6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGY/c2VsZjp0aGlzKS5NZXRlb3JFbW9qaT1mKCl9fShmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobnx8ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9Zm9yKHZhciBpPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KHsxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXshZnVuY3Rpb24oZ2xvYmFsLGZhY3Rvcnkpe2lmKHZvaWQgMCE9PWV4cG9ydHMpZmFjdG9yeShtb2R1bGUpO2Vsc2V7dmFyIG1vZD17ZXhwb3J0czp7fX07ZmFjdG9yeShtb2QpLGdsb2JhbC5tZXRlb3JFbW9qaT1tb2QuZXhwb3J0c319KHRoaXMsZnVuY3Rpb24obW9kdWxlKXtcInVzZSBzdHJpY3RcIjt2YXIgX2NyZWF0ZUNsYXNzPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQscHJvcHMpe2Zvcih2YXIgaT0wO2k8cHJvcHMubGVuZ3RoO2krKyl7dmFyIGRlc2NyaXB0b3I9cHJvcHNbaV07ZGVzY3JpcHRvci5lbnVtZXJhYmxlPWRlc2NyaXB0b3IuZW51bWVyYWJsZXx8ITEsZGVzY3JpcHRvci5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gZGVzY3JpcHRvciYmKGRlc2NyaXB0b3Iud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsZGVzY3JpcHRvci5rZXksZGVzY3JpcHRvcil9fXJldHVybiBmdW5jdGlvbihDb25zdHJ1Y3Rvcixwcm90b1Byb3BzLHN0YXRpY1Byb3BzKXtyZXR1cm4gcHJvdG9Qcm9wcyYmZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUscHJvdG9Qcm9wcyksc3RhdGljUHJvcHMmJmRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3Isc3RhdGljUHJvcHMpLENvbnN0cnVjdG9yfX0oKSxNZXRlb3JFbW9qaT1mdW5jdGlvbigpe2Z1bmN0aW9uIE1ldGVvckVtb2ppKCl7IWZ1bmN0aW9uKGluc3RhbmNlLENvbnN0cnVjdG9yKXtpZighKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9KHRoaXMsTWV0ZW9yRW1vamkpLHRoaXMuaW5pdGlhdGUoKX1yZXR1cm4gX2NyZWF0ZUNsYXNzKE1ldGVvckVtb2ppLFt7a2V5OlwiaW5pdGlhdGVcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBfdGhpcz10aGlzO2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1ldGVvci1lbW9qaT1cInRydWVcIl0sIFtkYXRhLW1ldGVvci1lbW9qaS1sYXJnZT1cInRydWVcIl0nKS5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpe190aGlzLmdlbmVyYXRlRWxlbWVudHMoZWxlbWVudCl9KX19LHtrZXk6XCJnZW5lcmF0ZUVsZW1lbnRzXCIsdmFsdWU6ZnVuY3Rpb24oZW1vamlJbnB1dCl7dmFyIGNsaWNrTGluaz1mdW5jdGlvbihldmVudCl7dmFyIGNhcmV0UG9zPWVtb2ppSW5wdXQuc2VsZWN0aW9uU3RhcnQ7ZW1vamlJbnB1dC52YWx1ZT1lbW9qaUlucHV0LnZhbHVlLnN1YnN0cmluZygwLGNhcmV0UG9zKStcIiBcIitldmVudC50YXJnZXQuaW5uZXJIVE1MK2Vtb2ppSW5wdXQudmFsdWUuc3Vic3RyaW5nKGNhcmV0UG9zKSxlbW9qaVBpY2tlci5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIixcInVuZGVmaW5lZFwiIT10eXBlb2YgYW5ndWxhciYmYW5ndWxhci5lbGVtZW50KGVtb2ppSW5wdXQpLnRyaWdnZXJIYW5kbGVyKFwiY2hhbmdlXCIpfSxjbGlja0NhdGVnb3J5PWZ1bmN0aW9uKGV2ZW50KXtlbW9qaUlucHV0LnNlbGVjdGlvblN0YXJ0O2Vtb2ppUGlja2VyLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiO2Zvcih2YXIgaGlkZVVscz1lbW9qaVBpY2tlci5xdWVyeVNlbGVjdG9yQWxsKFwidWxcIiksaT0xLGw9aGlkZVVscy5sZW5ndGg7aTxsO2krKyloaWRlVWxzW2ldLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7dmFyIGJhY2tncm91bmRUb2dnbGU9ZW1vamlQaWNrZXIucXVlcnlTZWxlY3RvckFsbChcIi5jYXRlZ29yeSBhXCIpO2ZvcihpPTAsbD1iYWNrZ3JvdW5kVG9nZ2xlLmxlbmd0aDtpPGw7aSsrKWJhY2tncm91bmRUb2dnbGVbaV0uc3R5bGUuYmFja2dyb3VuZD1cIm5vbmVcIjtlbW9qaVBpY2tlci5xdWVyeVNlbGVjdG9yKFwiLlwiK2V2ZW50LnRhcmdldC5pZCkuc3R5bGUuZGlzcGxheT1cImJsb2NrXCIsZW1vamlQaWNrZXIucXVlcnlTZWxlY3RvcihcIiNcIitldmVudC50YXJnZXQuaWQpLnN0eWxlLmJhY2tncm91bmQ9XCIjYzJjMmMyXCJ9O2Vtb2ppSW5wdXQuc3R5bGUud2lkdGg9XCIxMDAlXCI7dmFyIGVtb2ppQ29udGFpbmVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZW1vamlDb250YWluZXIuc3R5bGUucG9zaXRpb249XCJyZWxhdGl2ZVwiLGVtb2ppSW5wdXQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoZW1vamlDb250YWluZXIsZW1vamlJbnB1dCksZW1vamlDb250YWluZXIuYXBwZW5kQ2hpbGQoZW1vamlJbnB1dCk7dmFyIGVtb2ppUGlja2VyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZW1vamlQaWNrZXIudGFiSW5kZXg9MCxlbW9qaUlucHV0Lmhhc0F0dHJpYnV0ZShcImRhdGEtbWV0ZW9yLWVtb2ppLWxhcmdlXCIpPyhlbW9qaVBpY2tlci5zdHlsZS56SW5kZXg9XCI5OTlcIixlbW9qaVBpY2tlci5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIixlbW9qaVBpY2tlci5zdHlsZS53aWR0aD1cIjEwMCVcIixlbW9qaVBpY2tlci5zdHlsZS5tYXJnaW5Cb3R0b209XCIxNXB4XCIpOihlbW9qaVBpY2tlci5zdHlsZS5wb3NpdGlvbj1cImFic29sdXRlXCIsZW1vamlQaWNrZXIuc3R5bGUucmlnaHQ9XCIwcHhcIixlbW9qaVBpY2tlci5zdHlsZS50b3A9XCIzMHB4XCIsZW1vamlQaWNrZXIuc3R5bGUuZGlzcGxheT1cIm5vbmVcIixlbW9qaVBpY2tlci5zdHlsZS53aWR0aD1cIjQwMHB4XCIpLGVtb2ppUGlja2VyLnN0eWxlLnpJbmRleD1cIjk5OVwiLGVtb2ppUGlja2VyLnN0eWxlLm92ZXJmbG93PVwiaGlkZGVuXCIsZW1vamlQaWNrZXIuc3R5bGUuYmFja2dyb3VuZD1cIiNmZmZcIixlbW9qaVBpY2tlci5zdHlsZS5ib3JkZXJSYWRpdXM9XCI1cHhcIixlbW9qaVBpY2tlci5zdHlsZS5ib3hTaGFkb3c9XCIwIDNweCA2cHggcmdiYSgwLDAsMCwwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yMylcIixlbW9qaVBpY2tlci5zdHlsZS5ib3JkZXJSYWRpdXM9XCIycHg7XCIsZW1vamlQaWNrZXIuc3R5bGUubWFyZ2luVG9wPVwiNXB4XCIsZW1vamlQaWNrZXIuc3R5bGUub3V0bGluZT1cIm5vbmVcIjt2YXIgZW1vamlUcmlnZ2VyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2Vtb2ppVHJpZ2dlci5zdHlsZS5wb3NpdGlvbj1cImFic29sdXRlXCIsZW1vamlUcmlnZ2VyLnN0eWxlLnRvcD1cIjEwcHhcIixlbW9qaVRyaWdnZXIuc3R5bGUucmlnaHQ9XCIxMHB4XCIsZW1vamlUcmlnZ2VyLnN0eWxlLnRleHREZWNvcmF0aW9uPVwibm9uZVwiLGVtb2ppVHJpZ2dlci5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsXCJqYXZhc2NyaXB0OnZvaWQoMClcIiksZW1vamlUcmlnZ2VyLmlubmVySFRNTD0nPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAxMiAxNFwiPjxwYXRoIGQ9XCJNOC45IDguNHEtMC4zIDAuOS0xLjEgMS41dC0xLjggMC42LTEuOC0wLjYtMS4xLTEuNXEtMC4xLTAuMiAwLTAuNHQwLjMtMC4ycTAuMi0wLjEgMC40IDB0MC4yIDAuM3EwLjIgMC42IDAuNyAxdDEuMiAwLjQgMS4yLTAuNCAwLjctMXEwLjEtMC4yIDAuMy0wLjN0MC40IDAgMC4zIDAuMiAwIDAuNHpNNSA1cTAgMC40LTAuMyAwLjd0LTAuNyAwLjMtMC43LTAuMy0wLjMtMC43IDAuMy0wLjcgMC43LTAuMyAwLjcgMC4zIDAuMyAwLjd6TTkgNXEwIDAuNC0wLjMgMC43dC0wLjcgMC4zLTAuNy0wLjMtMC4zLTAuNyAwLjMtMC43IDAuNy0wLjMgMC43IDAuMyAwLjMgMC43ek0xMSA3cTAtMS0wLjQtMS45dC0xLjEtMS42LTEuNi0xLjEtMS45LTAuNC0xLjkgMC40LTEuNiAxLjEtMS4xIDEuNi0wLjQgMS45IDAuNCAxLjkgMS4xIDEuNiAxLjYgMS4xIDEuOSAwLjQgMS45LTAuNCAxLjYtMS4xIDEuMS0xLjYgMC40LTEuOXpNMTIgN3EwIDEuNi0wLjggM3QtMi4yIDIuMi0zIDAuOC0zLTAuOC0yLjItMi4yLTAuOC0zIDAuOC0zIDIuMi0yLjIgMy0wLjggMyAwLjggMi4yIDIuMiAwLjggM3pcIi8+PC9zdmc+JyxlbW9qaVRyaWdnZXIub25jbGljaz1mdW5jdGlvbigpe1wibm9uZVwiPT09ZW1vamlQaWNrZXIuc3R5bGUuZGlzcGxheT9lbW9qaVBpY2tlci5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjpcImJsb2NrXCI9PT1lbW9qaVBpY2tlci5zdHlsZS5kaXNwbGF5JiYoZW1vamlQaWNrZXIuc3R5bGUuZGlzcGxheT1cIm5vbmVcIiksZW1vamlQaWNrZXIuZm9jdXMoKX0sZW1vamlJbnB1dC5oYXNBdHRyaWJ1dGUoXCJkYXRhLW1ldGVvci1lbW9qaS1sYXJnZVwiKXx8ZW1vamlDb250YWluZXIuYXBwZW5kQ2hpbGQoZW1vamlUcmlnZ2VyKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oZSl7ZW1vamlJbnB1dC5oYXNBdHRyaWJ1dGUoXCJkYXRhLW1ldGVvci1lbW9qaS1sYXJnZVwiKXx8XCJibG9ja1wiPT09ZW1vamlQaWNrZXIuc3R5bGUuZGlzcGxheSYmKGVtb2ppUGlja2VyLmNvbnRhaW5zKGUudGFyZ2V0KXx8ZW1vamlUcmlnZ2VyLmNvbnRhaW5zKGUudGFyZ2V0KXx8KGVtb2ppUGlja2VyLnN0eWxlLmRpc3BsYXk9XCJub25lXCIpKX0pO3ZhciBmYWNlc0NhdGVnb3J5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtmYWNlc0NhdGVnb3J5LnN0eWxlLnBhZGRpbmc9XCIxMHB4IDBweFwiLGZhY2VzQ2F0ZWdvcnkuc3R5bGUubWFyZ2luPVwiMFwiLGZhY2VzQ2F0ZWdvcnkuc3R5bGUubGlzdFN0eWxlPVwibm9uZVwiLGZhY2VzQ2F0ZWdvcnkuc3R5bGUudGV4dEFsaWduPVwibGVmdFwiLGZhY2VzQ2F0ZWdvcnkuc3R5bGUubWFyZ2luTGVmdD1cIjMlXCIsZmFjZXNDYXRlZ29yeS5jbGFzc0xpc3QuYWRkKFwiZmFjZXNcIik7dmFyIGFuaW1hbHNDYXRlZ29yeT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7YW5pbWFsc0NhdGVnb3J5LnN0eWxlLnBhZGRpbmc9XCIxMHB4IDBweFwiLGFuaW1hbHNDYXRlZ29yeS5zdHlsZS5tYXJnaW49XCIwXCIsYW5pbWFsc0NhdGVnb3J5LnN0eWxlLmxpc3RTdHlsZT1cIm5vbmVcIixhbmltYWxzQ2F0ZWdvcnkuc3R5bGUudGV4dEFsaWduPVwibGVmdFwiLGFuaW1hbHNDYXRlZ29yeS5zdHlsZS5tYXJnaW5MZWZ0PVwiMyVcIixhbmltYWxzQ2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChcImFuaW1hbHNcIiksYW5pbWFsc0NhdGVnb3J5LnN0eWxlLmRpc3BsYXk9XCJub25lXCI7dmFyIGZvb2RDYXRlZ29yeT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7Zm9vZENhdGVnb3J5LnN0eWxlLnBhZGRpbmc9XCIxMHB4IDBweFwiLGZvb2RDYXRlZ29yeS5zdHlsZS5tYXJnaW49XCIwXCIsZm9vZENhdGVnb3J5LnN0eWxlLmxpc3RTdHlsZT1cIm5vbmVcIixmb29kQ2F0ZWdvcnkuc3R5bGUudGV4dEFsaWduPVwibGVmdFwiLGZvb2RDYXRlZ29yeS5zdHlsZS5tYXJnaW5MZWZ0PVwiMyVcIixmb29kQ2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChcImZvb2RcIiksZm9vZENhdGVnb3J5LnN0eWxlLmRpc3BsYXk9XCJub25lXCI7dmFyIHNwb3J0Q2F0ZWdvcnk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO3Nwb3J0Q2F0ZWdvcnkuc3R5bGUucGFkZGluZz1cIjEwcHggMHB4XCIsc3BvcnRDYXRlZ29yeS5zdHlsZS5tYXJnaW49XCIwXCIsc3BvcnRDYXRlZ29yeS5zdHlsZS5saXN0U3R5bGU9XCJub25lXCIsc3BvcnRDYXRlZ29yeS5zdHlsZS50ZXh0QWxpZ249XCJsZWZ0XCIsc3BvcnRDYXRlZ29yeS5zdHlsZS5tYXJnaW5MZWZ0PVwiMyVcIixzcG9ydENhdGVnb3J5LmNsYXNzTGlzdC5hZGQoXCJzcG9ydFwiKSxzcG9ydENhdGVnb3J5LnN0eWxlLmRpc3BsYXk9XCJub25lXCI7dmFyIHRyYW5zcG9ydENhdGVnb3J5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTt0cmFuc3BvcnRDYXRlZ29yeS5zdHlsZS5wYWRkaW5nPVwiMTBweCAwcHhcIix0cmFuc3BvcnRDYXRlZ29yeS5zdHlsZS5tYXJnaW49XCIwXCIsdHJhbnNwb3J0Q2F0ZWdvcnkuc3R5bGUubGlzdFN0eWxlPVwibm9uZVwiLHRyYW5zcG9ydENhdGVnb3J5LnN0eWxlLnRleHRBbGlnbj1cImxlZnRcIix0cmFuc3BvcnRDYXRlZ29yeS5zdHlsZS5tYXJnaW5MZWZ0PVwiMyVcIix0cmFuc3BvcnRDYXRlZ29yeS5jbGFzc0xpc3QuYWRkKFwidHJhbnNwb3J0XCIpLHRyYW5zcG9ydENhdGVnb3J5LnN0eWxlLmRpc3BsYXk9XCJub25lXCI7dmFyIG9iamVjdHNDYXRlZ29yeT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7b2JqZWN0c0NhdGVnb3J5LnN0eWxlLnBhZGRpbmc9XCIxMHB4IDBweFwiLG9iamVjdHNDYXRlZ29yeS5zdHlsZS5tYXJnaW49XCIwXCIsb2JqZWN0c0NhdGVnb3J5LnN0eWxlLmxpc3RTdHlsZT1cIm5vbmVcIixvYmplY3RzQ2F0ZWdvcnkuc3R5bGUudGV4dEFsaWduPVwibGVmdFwiLG9iamVjdHNDYXRlZ29yeS5zdHlsZS5tYXJnaW5MZWZ0PVwiMyVcIixvYmplY3RzQ2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChcIm9iamVjdHNcIiksb2JqZWN0c0NhdGVnb3J5LnN0eWxlLmRpc3BsYXk9XCJub25lXCI7dmFyIGVtb2ppQ2F0ZWdvcnk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO2Vtb2ppQ2F0ZWdvcnkuc3R5bGUucGFkZGluZz1cIjBweFwiLGVtb2ppQ2F0ZWdvcnkuc3R5bGUubWFyZ2luPVwiMFwiLGVtb2ppQ2F0ZWdvcnkuc3R5bGUuZGlzcGxheT1cInRhYmxlXCIsZW1vamlDYXRlZ29yeS5zdHlsZS53aWR0aD1cIjEwMCVcIixlbW9qaUNhdGVnb3J5LnN0eWxlLmJhY2tncm91bmQ9XCIjZWZmMGYxXCIsZW1vamlDYXRlZ29yeS5zdHlsZS5saXN0U3R5bGU9XCJub25lXCIsZW1vamlDYXRlZ29yeS5jbGFzc0xpc3QuYWRkKFwiY2F0ZWdvcnlcIik7dmFyIGVtb2ppQ2F0ZWdvcmllcz1uZXcgQXJyYXk7ZW1vamlDYXRlZ29yaWVzLnB1c2goe25hbWU6XCJmYWNlc1wiLHN2ZzonPHN2ZyBpZD1cImZhY2VzXCIgZGF0YS1uYW1lPVwiTGF5ZXIgMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDE1MCAxNTBcIj48cGF0aCBpZD1cImZhY2VzXCIgZD1cIk03NC4zNCwxMjguNDhhNTMuNSw1My41LDAsMSwxLDM3Ljg0LTE1LjY3LDUzLjE2LDUzLjE2LDAsMCwxLTM3Ljg0LDE1LjY3Wm0wLTk3Ljg5YTQ0LjQsNDQuNCwwLDEsMCwzMS40LDEzLDQ0LjA3LDQ0LjA3LDAsMCwwLTMxLjQtMTNaXCIvPjxwYXRoIGlkPVwiZmFjZXNcIiBkPVwiTTc0LjM1LDEwOEEzMy4wNywzMy4wNywwLDAsMSw0MS4yOSw3NWEyLjI4LDIuMjgsMCwwLDEsMi4yNy0yLjI4aDBBMi4yNywyLjI3LDAsMCwxLDQ1LjgzLDc1YTI4LjUyLDI4LjUyLDAsMCwwLDU3LDAsMi4yNywyLjI3LDAsMCwxLDQuNTQsMEEzMy4wOSwzMy4wOSwwLDAsMSw3NC4zNSwxMDhaXCIvPjxwYXRoIGlkPVwiZmFjZXNcIiBkPVwiTTU4Ljg0LDYyYTYuODEsNi44MSwwLDEsMCw2LjgxLDYuODFBNi44MSw2LjgxLDAsMCwwLDU4Ljg0LDYyWlwiLz48cGF0aCBpZD1cImZhY2VzXCIgZD1cIk04OS44Nyw2MmE2LjgxLDYuODEsMCwxLDAsNi44MSw2LjgxQTYuODIsNi44MiwwLDAsMCw4OS44Nyw2MlpcIi8+PC9zdmc+J30pLGVtb2ppQ2F0ZWdvcmllcy5wdXNoKHtuYW1lOlwiYW5pbWFsc1wiLHN2ZzonPHN2ZyBpZD1cImFuaW1hbHNcIiBkYXRhLW5hbWU9XCJMYXllciAxXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMTUwIDE1MFwiPjxwYXRoIGlkPVwiYW5pbWFsc1wiIGQ9XCJNNTkuOSw5MS43NWgwYy0yMi40NiwwLTQxLjgyLTE5LjM0LTQ0LjA5LTQ0QTUyLjEsNTIuMSwwLDAsMSwxNiwzNi44YTQuNTEsNC41MSwwLDAsMSwyLjYzLTMuNjIsMzkuNzksMzkuNzksMCwwLDEsMTIuNzQtMy4zN2MyMy45Mi0yLjE1LDQ1LjM1LDE3LjgzLDQ3Ljc0LDQzLjg2YTUyLjc3LDUyLjc3LDAsMCwxLS4xNSwxMC45Myw0LjU2LDQuNTYsMCwwLDEtMi42NCwzLjYyLDM5LjY3LDM5LjY3LDAsMCwxLTEyLjczLDMuMzZjLTEuMjMuMTEtMi40NS4xNy0zLjY2LjE3Wk0yNC43Niw0MC40OWE0MS4yOSw0MS4yOSwwLDAsMCwuMDksNi40QzI2LjcsNjcsNDIuMDksODIuNjYsNTkuOSw4Mi42N2gwYy45NCwwLDEuODgsMCwyLjgzLS4xNGEzMC4zOSwzMC4zOSwwLDAsMCw3LjQxLTEuNjIsNDEuMTQsNDEuMTQsMCwwLDAtLjExLTYuNEM2OC4wOSw1My4zOCw1MS4xMSwzNy4wOCwzMi4xNywzOC44NmEzMC43OCwzMC43OCwwLDAsMC03LjQxLDEuNjNaXCIvPjxwYXRoIGlkPVwiYW5pbWFsc1wiIGQ9XCJNMzYuNjgsMTI1LjY0YTQuNTMsNC41MywwLDAsMS00LjMzLTMuMTcsNTMuMzIsNTMuMzIsMCwwLDEtMi4yNi0xMUE1MC40Miw1MC40MiwwLDAsMSwzOS41MSw3Ni42YzcuMzUtOS45MSwxNy44NC0xNiwyOS41LTE3LDEuMTYtLjExLDIuMzMtLjEzLDMuNDctLjEzYTQuNTQsNC41NCwwLDAsMSw0LjMzLDMuMTYsNTEuNTksNTEuNTksMCwwLDEsMi4yNywxMS4wOCw1MC4zOSw1MC4zOSwwLDAsMS05LjQyLDM0LjhjLTcuMzUsOS45MS0xNy44MywxNi0yOS41LDE3YTE3LjYzLDE3LjYzLDAsMCwxLTMuNDguMTJaTTY5LjA5LDY4LjY5QTMyLjQxLDMyLjQxLDAsMCwwLDQ2LjgsODJhNDIuNTcsNDIuNTcsMCwwLDAtNi43MSwzNC4zOCwzMi4zOCwzMi4zOCwwLDAsMCwyMi4yOC0xMy4zMkE0MS4zNSw0MS4zNSwwLDAsMCw3MCw3NC41MWEzOS4zOCwzOS4zOCwwLDAsMC0uOTQtNS44MlpcIi8+PHBhdGggaWQ9XCJhbmltYWxzXCIgZD1cIk05MC4yNyw5MS43NWMtMS4yMiwwLTIuNDMtLjA2LTMuNjYtLjE3YTM5LjY3LDM5LjY3LDAsMCwxLTEyLjczLTMuMzYsNC41Nyw0LjU3LDAsMCwxLTIuNjQtMy42MSw1My4zOCw1My4zOCwwLDAsMS0uMTctMTAuOTNjMi40MS0yNiwyMy43LTQ2LjA3LDQ3Ljc2LTQzLjg3YTM5Ljc0LDM5Ljc0LDAsMCwxLDEyLjczLDMuMzcsNC41Nyw0LjU3LDAsMCwxLDIuNjQsMy42Miw1My4zNSw1My4zNSwwLDAsMSwuMTYsMTAuOTJjLTIuMjgsMjQuNjktMjEuNjUsNDQtNDQuMDksNDRaTTgwLDgwLjkxYTMwLjU3LDMwLjU3LDAsMCwwLDcuNDIsMS42MmMxOS4wNywxLjc4LDM1LjkyLTE0LjUzLDM3Ljg3LTM1LjY0YTQyLjU1LDQyLjU1LDAsMCwwLC4xLTYuNEEzMC44NiwzMC44NiwwLDAsMCwxMTgsMzguODZDOTksMzcuMDcsODIuMDYsNTMuMzgsODAuMTIsNzQuNTFhNDMuOTEsNDMuOTEsMCwwLDAtLjEsNi40WlwiLz48cGF0aCBpZD1cImFuaW1hbHNcIiBkPVwiTTExMy40OSwxMjUuNjRoMGMtMS4xNiwwLTIuMywwLTMuNDYtLjEyLTIzLjktMi4yMS00MS4zNi0yNS40Ny0zOC45NC01MS44NUE1My41Miw1My41MiwwLDAsMSw3My4zNCw2Mi42YTQuNTUsNC41NSwwLDAsMSw0LjMzLTMuMTZjMS4xNiwwLDIuMzQsMCwzLjUxLjEzLDExLjY0LDEuMDcsMjIuMTEsNy4xMiwyOS40OCwxN2E1MC41MSw1MC41MSwwLDAsMSw5LjQyLDM0LjgxLDUzLjUxLDUzLjUxLDAsMCwxLTIuMjYsMTEsNC41NCw0LjU0LDAsMCwxLTQuMzMsMy4xOVpNODEuMDgsNjguNjlhNDIuNTMsNDIuNTMsMCwwLDAtMSw1LjgyYy0xLjk0LDIxLjEsMTEuNDUsMzkuNzEsMjkuOTUsNDEuODhBNDIuMzgsNDIuMzgsMCwwLDAsMTAzLjM2LDgyLDMyLjQyLDMyLjQyLDAsMCwwLDgxLjA4LDY4LjY5WlwiLz48cGF0aCBpZD1cImFuaW1hbHNcIiBkPVwiTTc1LjA4LDQ1LjQ1YTcuODMsNy44MywwLDEsMCw3LjgzLDcuODMsNy44Myw3LjgzLDAsMCwwLTcuODMtNy44M1pcIi8+PHBhdGggaWQ9XCJhbmltYWxzXCIgZD1cIk03Ni4yOSw1MS44OWEyLjI2LDIuMjYsMCwwLDEtMi4xNC0zQTQ2LDQ2LDAsMCwxLDkyLjgyLDI1LjM0YTIuMjcsMi4yNywwLDEsMSwyLjQsMy44NkE0MS40LDQxLjQsMCwwLDAsNzguNDMsNTAuMzlhMi4yOCwyLjI4LDAsMCwxLTIuMTQsMS41WlwiLz48cGF0aCBpZD1cImFuaW1hbHNcIiBkPVwiTTczLjg3LDUxLjg5YTIuMjgsMi4yOCwwLDAsMS0yLjE0LTEuNUE0MS4zNSw0MS4zNSwwLDAsMCw1NC45NCwyOS4yYTIuMjcsMi4yNywwLDAsMSwyLjM5LTMuODZBNDYsNDYsMCwwLDEsNzYsNDguODVhMi4yOCwyLjI4LDAsMCwxLTEuMzcsMi45MSwyLjMxLDIuMzEsMCwwLDEtLjc3LjEzWlwiLz48L3N2Zz4nfSksZW1vamlDYXRlZ29yaWVzLnB1c2goe25hbWU6XCJmb29kXCIsc3ZnOic8c3ZnIGlkPVwiZm9vZFwiIGRhdGEtbmFtZT1cIkxheWVyIDFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAxNTAgMTUwXCI+PHBhdGggaWQ9XCJmb29kXCIgZD1cIk0xMDQsMjAuNzZoLjE1YzE1LjgzLjUyLDI0LjA4LDIxLjQ4LDI0LjA3LDMyLjU2LjI2LDEyLjQyLTEwLjcyLDIzLjU1LTI0LDI0LjIxYTMuNTMsMy41MywwLDAsMS0uNDYsMGMtMTMuMjUtLjY2LTI0LjIzLTExLjgtMjQtMjQuMywwLTExLDguMjYtMzEuOTUsMjQuMDctMzIuNDdabTAsNDcuNjljOC4yNS0uNTQsMTUuMy03LjUxLDE1LjE0LTE1LDAtOC4xMi02LjIyLTIzLjEtMTUuMTQtMjMuNTctOC45LjQ2LTE1LjE0LDE1LjQ1LTE1LjE0LDIzLjQ4LS4xNCw3LjYxLDYuOSwxNC41OSwxNS4xNCwxNS4xM1pcIi8+PHBhdGggaWQ9XCJmb29kXCIgZD1cIk05Ny4xOSw2OS4yMWguMTRhNC41Myw0LjUzLDAsMCwxLDQuNCw0LjY4bC0xLjQ4LDQ2LjkyYTEuNTksMS41OSwwLDAsMCwuNSwxLjA2LDQuNiw0LjYsMCwwLDAsMy4yNSwxLjE5aDBhNC41Nyw0LjU3LDAsMCwwLDMuMjYtMS4yLDEuNTMsMS41MywwLDAsMCwuNDktMWwtMS40OC00Ni45NWE0LjU0LDQuNTQsMCwxLDEsOS4wOC0uMjhsMS40Nyw0Ni45MWExMC40MiwxMC40MiwwLDAsMS0zLDcuNjUsMTMuNjUsMTMuNjUsMCwwLDEtOS44MSw0aDBhMTMuNTgsMTMuNTgsMCwwLDEtOS43OS00LDEwLjQyLDEwLjQyLDAsMCwxLTMtNy42N2wxLjQ4LTQ2Ljg5YTQuNTMsNC41MywwLDAsMSw0LjUzLTQuNFpcIi8+PHBhdGggaWQ9XCJmb29kXCIgZD1cIk00MS44NCw2OS4yMUg0MmE0LjUzLDQuNTMsMCwwLDEsNC40LDQuNjhMNDQuOSwxMjAuODFhMS41NywxLjU3LDAsMCwwLC41LDEuMDYsNC42LDQuNiwwLDAsMCwzLjI1LDEuMTloMGE0LjUxLDQuNTEsMCwwLDAsMy4yNC0xLjE5LDEuNDgsMS40OCwwLDAsMCwuNS0xTDUwLjkzLDczLjg5YTQuNTMsNC41MywwLDAsMSw0LjM5LTQuNjhBNC40LDQuNCwwLDAsMSw2MCw3My42MWwxLjQ4LDQ2LjkxYTEwLjQ5LDEwLjQ5LDAsMCwxLTMsNy42NiwxMy41NywxMy41NywwLDAsMS05Ljc4LDRoMGExMy41OSwxMy41OSwwLDAsMS05Ljc4LTQsMTAuNDgsMTAuNDgsMCwwLDEtMy03LjY3bDEuNDgtNDYuOWE0LjU0LDQuNTQsMCwwLDEsNC41NC00LjRaXCIvPjxwYXRoIGlkPVwiZm9vZFwiIGQ9XCJNMjguNTksMjAuNzZhNC41NCw0LjU0LDAsMCwxLDQuNTQsNC41NFY1MWExNS41MiwxNS41MiwwLDAsMCwzMSwwVjI1LjNhNC41NSw0LjU1LDAsMCwxLDkuMDksMFY1MWEyNC42MSwyNC42MSwwLDEsMS00OS4yMSwwVjI1LjNhNC41NCw0LjU0LDAsMCwxLDQuNTQtNC41NFpcIi8+PHBhdGggaWQ9XCJmb29kXCIgZD1cIk01NS4zNCwyMC43NmE0LjU0LDQuNTQsMCwwLDEsNC41NCw0LjU0djE5YTQuNTQsNC41NCwwLDEsMS05LjA4LDB2LTE5YTQuNTQsNC41NCwwLDAsMSw0LjU0LTQuNTRaXCIvPjxwYXRoIGlkPVwiZm9vZFwiIGQ9XCJNNDIsMjAuNzZhNC41NCw0LjU0LDAsMCwxLDQuNTQsNC41NHYxOWE0LjU0LDQuNTQsMCwxLDEtOS4wOCwwdi0xOUE0LjU0LDQuNTQsMCwwLDEsNDIsMjAuNzZaXCIvPjwvc3ZnPid9KSxlbW9qaUNhdGVnb3JpZXMucHVzaCh7bmFtZTpcInNwb3J0XCIsc3ZnOic8c3ZnIGlkPVwic3BvcnRcIiBkYXRhLW5hbWU9XCJMYXllciAxXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMTUwIDE1MFwiPjxwYXRoIGlkPVwic3BvcnRcIiBkPVwiTTc1LjM1LDEzMC4yNGE1My40OSw1My40OSwwLDEsMSw1My40OC01My40OSw1My41NSw1My41NSwwLDAsMS01My40OCw1My40OVptMC05Ny44OWE0NC40MSw0NC40MSwwLDEsMCw0NC40LDQ0LjQsNDQuMSw0NC4xLDAsMCwwLTQ0LjQtNDQuNFpcIi8+PHBhdGggaWQ9XCJzcG9ydFwiIGQ9XCJNMTE5LjI0LDg0LjA4QTUxLjI5LDUxLjI5LDAsMCwxLDY4LDMyLjg2YTQ5LjQ0LDQ5LjQ0LDAsMCwxLC4yNi01LDIuMjYsMi4yNiwwLDAsMSwyLTJjMS42Ni0uMTYsMy4zNC0uMjUsNS0uMjVhNTEuMjYsNTEuMjYsMCwwLDEsNTEuMjEsNTEuMjFjMCwxLjcxLS4wOSwzLjM4LS4yNSw1YTIuMjgsMi4yOCwwLDAsMS0yLDJjLTEuNjUuMTYtMy4zMy4yNS01LC4yNVpNNzIuNjQsMzAuMTZjLS4wNi45LS4wOCwxLjc5LS4wOCwyLjdhNDYuNzMsNDYuNzMsMCwwLDAsNDYuNjgsNDYuNjhxMS4zNywwLDIuNy0uMDljLjA2LS44OS4wOC0xLjc5LjA4LTIuN0E0Ni43Miw0Ni43MiwwLDAsMCw3NS4zNSwzMC4wOGMtLjkxLDAtMS44MiwwLTIuNzEuMDhaXCIvPjxwYXRoIGlkPVwic3BvcnRcIiBkPVwiTTc1LjM1LDEyOEE1MS4yOCw1MS4yOCwwLDAsMSwyNC4xMiw3Ni43NmMwLTEuNy4xLTMuMzguMjUtNWEyLjI5LDIuMjksMCwwLDEsMi0yYzEuNjYtLjE2LDMuMzMtLjI1LDUuMDUtLjI1YTUxLjI3LDUxLjI3LDAsMCwxLDUxLjIxLDUxLjIyYzAsMS42OS0uMDksMy4zNy0uMjUsNWEyLjI3LDIuMjcsMCwwLDEtMiwyYy0xLjY2LjE2LTMuMzIuMjUtNSwuMjVaTTI4Ljc1LDc0LjA1Yy0uMDUuOS0uMDksMS44LS4wOSwyLjcxYTQ2Ljc0LDQ2Ljc0LDAsMCwwLDQ2LjY5LDQ2LjY3Yy45MSwwLDEuOCwwLDIuNy0uMDgsMC0uOS4wOC0xLjguMDgtMi43QTQ2LjczLDQ2LjczLDAsMCwwLDMxLjQ2LDc0Yy0uOTEsMC0xLjgxLDAtMi43MS4wOFpcIi8+PHBvbHlnb24gaWQ9XCJzcG9ydFwiIHBvaW50cz1cIjQyLjY5IDExMi42MSAzOS40OCAxMDkuNCAxMDggNDAuODggMTExLjIxIDQ0LjEgNDIuNjkgMTEyLjYxIDQyLjY5IDExMi42MVwiLz48L3N2Zz4nfSksZW1vamlDYXRlZ29yaWVzLnB1c2goe25hbWU6XCJ0cmFuc3BvcnRcIixzdmc6JzxzdmcgaWQ9XCJ0cmFuc3BvcnRcIiBkYXRhLW5hbWU9XCJMYXllciAxXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMTUwIDE1MFwiPjxwYXRoIGlkPVwidHJhbnNwb3J0XCIgZD1cIk0xMjAuNywxMTZIMzFhNC41NSw0LjU1LDAsMCwxLTQuNTQtNC41NVY1NC4yOEEzMS44MiwzMS44MiwwLDAsMSw1OC4yNSwyMi40OWgzNS4yYTMxLjgzLDMxLjgzLDAsMCwxLDMxLjgsMzEuNzl2NTcuMTVBNC41NSw0LjU1LDAsMCwxLDEyMC43LDExNlptLTg1LjE2LTkuMDloODAuNjJWNTQuMjhBMjIuNzQsMjIuNzQsMCwwLDAsOTMuNDUsMzEuNTdINTguMjVBMjIuNzQsMjIuNzQsMCwwLDAsMzUuNTQsNTQuMjh2NTIuNjFaXCIvPjxwYXRoIGlkPVwidHJhbnNwb3J0XCIgZD1cIk00OS4zNSwxMjkuMjNjLTguNTMsMC0xMy42Mi0yLjc3LTEzLjYyLTcuNDFWMTE1LjZhNC41NCw0LjU0LDAsMSwxLDkuMDgsMHY0LjA2YTIxLjMyLDIxLjMyLDAsMCwwLDkuMDksMFYxMTUuNmE0LjU0LDQuNTQsMCwwLDEsOS4wOCwwdjYuMjJjMCw0LjY0LTUuMDksNy40MS0xMy42Myw3LjQxWlwiLz48cGF0aCBpZD1cInRyYW5zcG9ydFwiIGQ9XCJNMTAyLjM0LDEyOS4yM2MtOC41MywwLTEzLjYyLTIuNzctMTMuNjItNy40MVYxMTUuNmE0LjU0LDQuNTQsMCwwLDEsOS4wOCwwdjQuMDZhMjEuMjgsMjEuMjgsMCwwLDAsOS4wOCwwVjExNS42YTQuNTUsNC41NSwwLDAsMSw5LjA5LDB2Ni4yMmMwLDQuNjQtNS4wOSw3LjQxLTEzLjYzLDcuNDFaXCIvPjxwYXRoIGlkPVwidHJhbnNwb3J0XCIgZD1cIk05Ny44MSw0NC44M0g1My45YTQuNTUsNC41NSwwLDEsMSwwLTkuMDlIOTcuODFhNC41NSw0LjU1LDAsMCwxLDAsOS4wOVpcIi8+PHBhdGggaWQ9XCJ0cmFuc3BvcnRcIiBkPVwiTTU0LjI4LDg0LjJBNi44LDYuOCwwLDEsMCw2MS4wNyw5MWE2LjgsNi44LDAsMCwwLTYuNzktNi44WlwiLz48cGF0aCBpZD1cInRyYW5zcG9ydFwiIGQ9XCJNOTcuNDMsODQuMmE2LjgsNi44LDAsMSwwLDYuNzksNi44LDYuOCw2LjgsMCwwLDAtNi43OS02LjhaXCIvPjxwYXRoIGlkPVwidHJhbnNwb3J0XCIgZD1cIk0xMDcuMDgsODFINDQuNjNhNi44Miw2LjgyLDAsMCwxLTYuODItNi44MlY1NC4yOGE2LjgyLDYuODIsMCwwLDEsNi44Mi02LjgxaDYyLjQ1YTYuODIsNi44MiwwLDAsMSw2LjgxLDYuODFWNzQuMTVBNi44Myw2LjgzLDAsMCwxLDEwNy4wOCw4MVpNNDQuNjMsNTJhMi4yOCwyLjI4LDAsMCwwLTIuMjgsMi4yN1Y3NC4xNWEyLjI4LDIuMjgsMCwwLDAsMi4yOCwyLjI3aDYyLjQ1YTIuMjcsMi4yNywwLDAsMCwyLjI3LTIuMjdWNTQuMjhBMi4yNywyLjI3LDAsMCwwLDEwNy4wOCw1MlpcIi8+PC9zdmc+J30pLGVtb2ppQ2F0ZWdvcmllcy5wdXNoKHtuYW1lOlwib2JqZWN0c1wiLHN2ZzonPHN2ZyBpZD1cIm9iamVjdHNcIiBkYXRhLW5hbWU9XCJMYXllciAxXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMTUwIDE1MFwiPjxwYXRoIGlkPVwib2JqZWN0c1wiIGQ9XCJNMTA3Ljc4LDEyOWE0LjU1LDQuNTUsMCwwLDEtMi42Ny0uODdsLTMwLTIxLjc5LTMwLDIxLjc5YTQuNTMsNC41MywwLDAsMS01LjM0LDAsNC41OCw0LjU4LDAsMCwxLTEuNjUtNS4wOEw0OS41OSw4Ny44MiwxOS42LDY2YTQuNTQsNC41NCwwLDAsMSwyLjY3LTguMjJINTkuMzRMNzAuOCwyMi41NWE0LjU1LDQuNTUsMCwwLDEsOC42NCwwTDkwLjg5LDU3LjgxSDEyOEE0LjU0LDQuNTQsMCwwLDEsMTMwLjYzLDY2bC0zMCwyMS43OSwxMS40NiwzNS4yNWE0LjU1LDQuNTUsMCwwLDEtNC4zMiw2Wk03NS4xMiw5Ni4yYTQuNTMsNC41MywwLDAsMSwyLjY3Ljg3bDIxLjM1LDE1LjUxTDkxLDg3LjQ5YTQuNTUsNC41NSwwLDAsMSwxLjY1LTUuMDhMMTE0LDY2Ljg5SDg3LjU5YTQuNTQsNC41NCwwLDAsMS00LjMyLTMuMTNsLTguMTUtMjUuMUw2Nyw2My43NmE0LjUzLDQuNTMsMCwwLDEtNC4zMiwzLjEzSDM2LjI1TDU3LjYxLDgyLjQxYTQuNTQsNC41NCwwLDAsMSwxLjY1LDUuMDhsLTguMTcsMjUuMDlMNzIuNDUsOTcuMDdhNC41Myw0LjUzLDAsMCwxLDIuNjctLjg3WlwiLz48L3N2Zz4nfSk7ZW1vamlDYXRlZ29yaWVzLm1hcChmdW5jdGlvbihpdGVtKXt2YXIgZW1vamlMaW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2Vtb2ppTGluay5zdHlsZS50ZXh0RGVjb3JhdGlvbj1cIm5vbmVcIixlbW9qaUxpbmsuc3R5bGUucGFkZGluZz1cIjVweFwiLGVtb2ppTGluay5zdHlsZS5wb3NpdGlvbj1cImluaXRpYWxcIixlbW9qaUxpbmsuc3R5bGUuZm9udFNpemU9XCIyNHB4XCIsZW1vamlMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIixcImphdmFzY3JpcHQ6dm9pZCgwKVwiKSxlbW9qaUxpbmsuc3R5bGUuZGlzcGxheT1cInRhYmxlLWNlbGxcIixlbW9qaUxpbmsuc3R5bGUudGV4dEFsaWduPVwiY2VudGVyXCIsZW1vamlMaW5rLmlkPVN0cmluZyhpdGVtLm5hbWUpLFwiZmFjZXNcIj09U3RyaW5nKGl0ZW0ubmFtZSkmJihlbW9qaUxpbmsuc3R5bGUuYmFja2dyb3VuZD1cIiNjMmMyYzJcIiksZW1vamlMaW5rLmlubmVySFRNTD1TdHJpbmcoaXRlbS5zdmcpLGVtb2ppTGluay5vbm1vdXNlZG93bj1jbGlja0NhdGVnb3J5LGVtb2ppQ2F0ZWdvcnkuYXBwZW5kQ2hpbGQoZW1vamlMaW5rKX0pLFsxMjg1MTMsMTI4NTE0LDEyODUxNSwxMjg1MTYsMTI4NTE3LDEyODUxOCwxMjg1MjEsMTI4NTIyLDEyODUyMywxMjg1MjQsMTI4NTI1LDEyODUyNywxMjg1MzAsMTI4NTMxLDEyODUzMiwxMjg1MzQsMTI4NTM2LDEyODUzOCwxMjg1NDAsMTI4NTQxLDEyODU0MiwxMjg1NDQsMTI4NTQ1LDEyODU0NiwxMjg1NDcsMTI4NTQ4LDEyODU0OSwxMjg1NTIsMTI4NTUzLDEyODU1NCwxMjg1NTUsMTI4NTU3LDEyODU2MCwxMjg1NjEsMTI4NTYyLDEyODU2MywxMjg1NjUsMTI4NTY3XS5tYXAoZnVuY3Rpb24oaXRlbSl7dmFyIGVtb2ppTGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtlbW9qaUxpbmsuc3R5bGUudGV4dERlY29yYXRpb249XCJub25lXCIsZW1vamlMaW5rLnN0eWxlLm1hcmdpbj1cIjVweFwiLGVtb2ppTGluay5zdHlsZS5wb3NpdGlvbj1cImluaXRpYWxcIixlbW9qaUxpbmsuc3R5bGUuZm9udFNpemU9XCIyNHB4XCIsZW1vamlMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIixcImphdmFzY3JpcHQ6dm9pZCgwKVwiKSxlbW9qaUxpbmsuaW5uZXJIVE1MPVN0cmluZy5mcm9tQ29kZVBvaW50KGl0ZW0pLGVtb2ppTGluay5vbm1vdXNlZG93bj1jbGlja0xpbmssZmFjZXNDYXRlZ29yeS5hcHBlbmRDaGlsZChlbW9qaUxpbmspfSksWzEyODAxMiwxMjgwMTMsMTI4MDE0LDEyODAxNywxMjgwMTgsMTI4MDIwLDEyODAyMywxMjgwMjQsMTI4MDI1LDEyODAyNiwxMjgwMjcsMTI4MDI4LDEyODAyOSwxMjgwMzAsMTI4MDMxLDEyODAzMiwxMjgwMzMsMTI4MDM0LDEyODAzNSwxMjgwMzYsMTI4MDM3LDEyODAzOCwxMjgwMzksMTI4MDQwLDEyODA0MSwxMjgwNDMsMTI4MDQ0LDEyODA0NSwxMjgwNDYsMTI4MDQ3LDEyODA0OCwxMjgwNDksMTI4MDUwLDEyODA1MSwxMjgwNTIsMTI4MDUzLDEyODA1NCwxMjgwNTUsMTI4MDU2LDEyODA1NywxMjgwNTgsMTI4MDU5LDEyODA2MF0ubWFwKGZ1bmN0aW9uKGl0ZW0pe3ZhciBlbW9qaUxpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7ZW1vamlMaW5rLnN0eWxlLnRleHREZWNvcmF0aW9uPVwibm9uZVwiLGVtb2ppTGluay5zdHlsZS5tYXJnaW49XCI1cHhcIixlbW9qaUxpbmsuc3R5bGUucG9zaXRpb249XCJpbml0aWFsXCIsZW1vamlMaW5rLnN0eWxlLmZvbnRTaXplPVwiMjRweFwiLGVtb2ppTGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsXCJqYXZhc2NyaXB0OnZvaWQoMClcIiksZW1vamlMaW5rLmlubmVySFRNTD1TdHJpbmcuZnJvbUNvZGVQb2ludChpdGVtKSxlbW9qaUxpbmsub25tb3VzZWRvd249Y2xpY2tMaW5rLGFuaW1hbHNDYXRlZ29yeS5hcHBlbmRDaGlsZChlbW9qaUxpbmspfSksWzEyNzgxMywxMjc4MTQsMTI3ODE1LDEyNzgxNiwxMjc4MTcsMTI3ODE4LDEyNzgyMCwxMjc4MjEsMTI3ODIyLDEyNzgyMywxMjc4MjUsMTI3ODI2LDEyNzgyNywxMjc4MjgsMTI3ODI5LDEyNzgzMCwxMjc4MzEsMTI3ODMyLDEyNzgzNiwxMjc4MzcsMTI3ODM4LDEyNzgzOSwxMjc4NDAsMTI3ODQxLDEyNzg0MiwxMjc4NDMsMTI3ODQ0LDEyNzg0NiwxMjc4NDgsMTI3ODQ5LDEyNzg1MCwxMjc4NTEsMTI3ODUyLDEyNzg1MywxMjc4NTYsMTI3ODU4LDEyNzg1OSwxMjc4NjAsMTI3ODYzLDEyNzg2NCwxMjc4NjddLm1hcChmdW5jdGlvbihpdGVtKXt2YXIgZW1vamlMaW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2Vtb2ppTGluay5zdHlsZS50ZXh0RGVjb3JhdGlvbj1cIm5vbmVcIixlbW9qaUxpbmsuc3R5bGUubWFyZ2luPVwiNXB4XCIsZW1vamlMaW5rLnN0eWxlLnBvc2l0aW9uPVwiaW5pdGlhbFwiLGVtb2ppTGluay5zdHlsZS5mb250U2l6ZT1cIjI0cHhcIixlbW9qaUxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLFwiamF2YXNjcmlwdDp2b2lkKDApXCIpLGVtb2ppTGluay5pbm5lckhUTUw9U3RyaW5nLmZyb21Db2RlUG9pbnQoaXRlbSksZW1vamlMaW5rLm9ubW91c2Vkb3duPWNsaWNrTGluayxmb29kQ2F0ZWdvcnkuYXBwZW5kQ2hpbGQoZW1vamlMaW5rKX0pLFsxMjc5MjEsMTI3OTIzLDEyNzkzNCwxMjc5MzUsMTI3OTM2LDEyNzkzNywxMjc5MzgsMTI3OTM5LDEyNzk0MCwxMjc5NDIsMTI3OTQ0LDEyNzk0NiwxMjg2NzUsMTI4NjkyLDEyODY5Myw5OTE3LDk5MTgsOTk3OCwxMjc5MDcsMTI3OTE5LDk5NzFdLm1hcChmdW5jdGlvbihpdGVtKXt2YXIgZW1vamlMaW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2Vtb2ppTGluay5zdHlsZS50ZXh0RGVjb3JhdGlvbj1cIm5vbmVcIixlbW9qaUxpbmsuc3R5bGUubWFyZ2luPVwiNXB4XCIsZW1vamlMaW5rLnN0eWxlLnBvc2l0aW9uPVwiaW5pdGlhbFwiLGVtb2ppTGluay5zdHlsZS5mb250U2l6ZT1cIjI0cHhcIixlbW9qaUxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLFwiamF2YXNjcmlwdDp2b2lkKDApXCIpLGVtb2ppTGluay5pbm5lckhUTUw9U3RyaW5nLmZyb21Db2RlUG9pbnQoaXRlbSksZW1vamlMaW5rLm9ubW91c2Vkb3duPWNsaWNrTGluayxzcG9ydENhdGVnb3J5LmFwcGVuZENoaWxkKGVtb2ppTGluayl9KSxbMTI4NjQxLDEyODY0MiwxMjg2NDYsMTI4NjQ4LDEyODY1MCwxMjg2NTMsMTI4NjU0LDEyODY1NiwxMjg2NjAsMTI4NjYyLDEyODY2NCwxMjg2NjcsMTI4NjY4LDEyODY2OSwxMjg2NzAsMTI4NjcxLDEyODY3MiwxMjg2NzMsMTI4NjQwLDEyODY0MywxMjg2NDQsMTI4NjQ1LDEyODY0NywxMjg2NDksMTI4NjUyLDEyODY1NywxMjg2NTgsMTI4NjU5LDEyODY2MSwxMjg2NjMsMTI4NjY1LDEyODY2NiwxMjg2NzQsMTI4Njc2LDEyODY5MF0ubWFwKGZ1bmN0aW9uKGl0ZW0pe3ZhciBlbW9qaUxpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7ZW1vamlMaW5rLnN0eWxlLnRleHREZWNvcmF0aW9uPVwibm9uZVwiLGVtb2ppTGluay5zdHlsZS5tYXJnaW49XCI1cHhcIixlbW9qaUxpbmsuc3R5bGUucG9zaXRpb249XCJpbml0aWFsXCIsZW1vamlMaW5rLnN0eWxlLmZvbnRTaXplPVwiMjRweFwiLGVtb2ppTGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsXCJqYXZhc2NyaXB0OnZvaWQoMClcIiksZW1vamlMaW5rLmlubmVySFRNTD1TdHJpbmcuZnJvbUNvZGVQb2ludChpdGVtKSxlbW9qaUxpbmsub25tb3VzZWRvd249Y2xpY2tMaW5rLHRyYW5zcG9ydENhdGVnb3J5LmFwcGVuZENoaWxkKGVtb2ppTGluayl9KSxbMTI3ODkwLDEyNzg4MCwxMjc4ODEsMTI3ODg3LDEyNzg5MSwxMjc5MDUsMTI3OTA2LDEyNzkwOCwxMjc5MDksMTI3OTExLDEyNzkxMiwxMjc5MTUsMTI3OTE2LDEyNzkxOCwxMjc5MTksMTI3OTI2LDEyNzkyNywxMjc5MjgsMTI3OTI5LDEyNzkzMCwxMjc5MzEsMTI3OTMyLDEyNzk2OCwxMjc5NzMsMTI3OTc4LDEyODE0NywxMjgxNDgsMTI4MTQ5LDEyODE1MCwxMjgxNTEsMTI4MTUyLDEyODE4NywxMjgxODYsMTI4MTk3LDEyODIxMywxMjgyNDddLm1hcChmdW5jdGlvbihpdGVtKXt2YXIgZW1vamlMaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7ZW1vamlMaS5zdHlsZS5kaXNwbGF5PVwiaW5saW5lLWJsb2NrXCIsZW1vamlMaS5zdHlsZS5tYXJnaW49XCI1cHhcIjt2YXIgZW1vamlMaW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2Vtb2ppTGluay5zdHlsZS50ZXh0RGVjb3JhdGlvbj1cIm5vbmVcIixlbW9qaUxpbmsuc3R5bGUubWFyZ2luPVwiNXB4XCIsZW1vamlMaW5rLnN0eWxlLnBvc2l0aW9uPVwiaW5pdGlhbFwiLGVtb2ppTGluay5zdHlsZS5mb250U2l6ZT1cIjI0cHhcIixlbW9qaUxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLFwiamF2YXNjcmlwdDp2b2lkKDApXCIpLGVtb2ppTGluay5pbm5lckhUTUw9U3RyaW5nLmZyb21Db2RlUG9pbnQoaXRlbSksZW1vamlMaW5rLm9ubW91c2Vkb3duPWNsaWNrTGluayxvYmplY3RzQ2F0ZWdvcnkuYXBwZW5kQ2hpbGQoZW1vamlMaW5rKX0pLGVtb2ppUGlja2VyLmFwcGVuZENoaWxkKGVtb2ppQ2F0ZWdvcnkpLGVtb2ppUGlja2VyLmFwcGVuZENoaWxkKGZhY2VzQ2F0ZWdvcnkpLGVtb2ppUGlja2VyLmFwcGVuZENoaWxkKGFuaW1hbHNDYXRlZ29yeSksZW1vamlQaWNrZXIuYXBwZW5kQ2hpbGQoZm9vZENhdGVnb3J5KSxlbW9qaVBpY2tlci5hcHBlbmRDaGlsZChzcG9ydENhdGVnb3J5KSxlbW9qaVBpY2tlci5hcHBlbmRDaGlsZCh0cmFuc3BvcnRDYXRlZ29yeSksZW1vamlQaWNrZXIuYXBwZW5kQ2hpbGQob2JqZWN0c0NhdGVnb3J5KSxlbW9qaUNvbnRhaW5lci5hcHBlbmRDaGlsZChlbW9qaVBpY2tlcil9fV0pLE1ldGVvckVtb2ppfSgpO21vZHVsZS5leHBvcnRzPU1ldGVvckVtb2ppfSl9LHt9XX0se30sWzFdKSgxKX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tZXRlb3ItZW1vamkvZGlzdC9tZXRlb3JFbW9qaS5taW4uanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdGlmKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==