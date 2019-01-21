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

var _registerForm = __webpack_require__(13);

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

var _messages = __webpack_require__(12);

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

var _meteorEmoji = __webpack_require__(19);

var _meteorEmoji2 = _interopRequireDefault(_meteorEmoji);

var _user = __webpack_require__(1);

var _user2 = _interopRequireDefault(_user);

var _apiUserDirect = __webpack_require__(14);

var _apiUserDirect2 = _interopRequireDefault(_apiUserDirect);

var _spinner = __webpack_require__(15);

var _spinner2 = _interopRequireDefault(_spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var token = _user2.default.getToken();
// import qq from 'fine-uploader'; //todo: fine-uploade

var $msgList = $('.messages-list');
var updateInterval = '';

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

function addHandlers() {
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
            }
        });
    }

    $('#sendMessageButton').on('click', function (e) {
        var $textArea = $('#sendMessageTextArea');
        var value = $textArea.val();
        var userData = $('.messages-list').data('conversation');
        var username = userData.username,
            conversationId = userData.conversationId;

        _spinner2.default.add($(e.target), 'spinner-box--sendMsg');
        _apiUserDirect2.default.postMetadataDetailConversation(token, { username: username, conversationId: conversationId, value: value }).then(function (result) {
            if (result.status.state === 'ok') {
                getAndFillConversation(username, conversationId);
                $textArea.val('');
                _spinner2.default.remove();
            }
        });
    });
    $(document).on('click', '.list-group-item .collapse', function (e) {
        e.stopPropagation();
        var username = $(e.target).closest('.list-group-item').data('username');
        var conversationId = $(e.target).closest('.media').data('conversation-id');
        _spinner2.default.add($('#mainChatPart'), 'my-5 py-5');
        getAndFillConversation(username, conversationId, true);
        setInterval(function () {
            getAndFillConversation(username, conversationId);
        }, updateInterval);
    });
}

function init() {
    var $userList = $('.messages-user-list');
    // check we are in correct page (messages)
    if (!isInMessagePage()) {
        return;
    }

    var metadata = _apiUserDirect2.default.getMetadata(token);
    metadata.then(function (result) {
        fillUserList($userList, result.data);
        if (result.data.settings && result.data.settings.invoke_in_millis) {
            updateInterval = result.data.settings.invoke_in_millis;
        }
    });

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
    button: 'global-form-button--load'
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
        value: function remove() {
            this.$el.find('.spinner-box').remove();
        }

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
         * Adds spinner icon on button before the button text
         * @param {jQuery} $el
         */
        // startButtonSpinner = function ($el) {
        //     $el.addClass(classes.button);
        // };

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

        /**
         * Removes spinner icon from button
         * @param {jQuery} $el
         */
        // stopButtonSpinner = function ($el) {
        //     $el.removeClass(classes.button);
        // };

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTQ3NDQwMmYxYzViOWY3MTk5OGEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy91c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vanMtc2VydmljZXMvY29va2llLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vanMtc2VydmljZXMvdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9+L3B1YnN1Yi1qcy9zcmMvcHVic3ViLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vanMtc2VydmljZXMvbmV0d29yay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvY29uZmlybS1yZWcvY29uZmlybS1yZWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9oZWFkZXIvYnVyZ2VyLW1lbnUvYnVyZ2VyLW1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9oZWFkZXIvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaW5zdGFncmFtLWFjY291bnRzLWxpc3QvaW5zdGFncmFtLWFjY291bnRzLWxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9tZXNzYWdlcy9tZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3JlZ2lzdGVyLWZvcm0vcmVnaXN0ZXItZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2pzLXNlcnZpY2VzL2FwaS11c2VyLWRpcmVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2pzLXNlcnZpY2VzL3NwaW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL19hdXRoL2xvZ2luLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL19pbnN0YWdyYW0vaW5zdGFncmFtLmpzIiwid2VicGFjazovLy8uL3NyYy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vfi9tZXRlb3ItZW1vamkvZGlzdC9tZXRlb3JFbW9qaS5taW4uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyJdLCJuYW1lcyI6WyJDT05TVCIsInVybCIsImJhc2UiLCJyZWdpc3RyYXRpb24iLCJsb2dpbiIsImNvbmZpcm1hdGlvbiIsImluc3RhZ3JhbV9hZGRBY2NvdW50IiwiaW5zdGFncmFtQWNjb3VudF9nZXRNZXRhRGF0YSIsImluc3RhZ3JhbUFjY291bnRfY2hlY2twb2ludCIsImluc3RhZ3JhbUFjY291bnRfY29uZmlybUtleSIsImluc3RhZ3JhbURpcmVjdF9nZXRNZXRhRGF0YSIsImluc3RhZ3JhbURpcmVjdF9wb3N0TWVzc2FnZSIsInVzZXIiLCJlbWFpbCIsInBhc3N3b3JkIiwidG9rZW4iLCJjb29raWVTdG9yYWdlIiwiZW1haWxDb25maXJtZWQiLCJ1aVNlbGVjdG9ycyIsImhlYWRlckxvZ2luQm94IiwiaGVhZGVyTmF2TG9naW5CdG4iLCJoZWFkZXJSZWdCb3giLCJoZWFkZXJSZWdCdG4iLCJpbnN0YWdyYW0iLCJhZGRBY2NvdW50QnRuU2VsZWN0b3IiLCJhZGRBY2NvdW50QnRuSWQiLCJldmVudHMiLCJVU0VSX0xPR0dFRCIsIlVTRVJfTE9HT1VUIiwiVVNFUl9FTUFJTF9DT05GSVJNRUQiLCJTVE9QX0ZJWEVEX1NQSU5ORVIiLCJnZXRQYXRoIiwibmFtZSIsIlVzZXIiLCJuZXR3b3JrIiwiTmV0d29yayIsIkNvb2tpZVN0b3JhZ2UiLCJzZXR0aW5nUG9zdCIsIm1ldGhvZCIsImhlYWRlcnMiLCJnZXRUb2tlbiIsImdldCIsImNvb2tpZVRva2VuIiwiZm9ybURhdGEiLCJjYkVycm9yIiwic2V0dGluZyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwic2VuZFJlcXVlc3QiLCJ1c2VybmFtZSIsImNoZWNrcG9pbnRUeXBlIiwia2V5IiwidXNlckluc3RhbmNlIiwiQ29va2llU3J2IiwiYyIsImRvY3VtZW50IiwiY29va2llIiwibWF0Y2giLCJkZWNvZGVVUklDb21wb25lbnQiLCJzZXQiLCJ2YWx1ZSIsIm9wdHMiLCJwYXRoIiwiZGF5cyIsIk9iamVjdCIsImVudHJpZXMiLCJyZWR1Y2UiLCJzdHIiLCJrIiwidiIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlbW92ZSIsInZpZXdVdGlscyIsInNob3dJbmZvTWVzc2FnZSIsInNlbGVjdG9yIiwibWVzc2FnZTEiLCJtZXNzYWdlMiIsIiQiLCJlbXB0eSIsImFwcGVuZCIsImZpbGxMaXN0IiwiJGxpc3QiLCJkYXRhQXJyYXkiLCJpdGVtcyIsImNMaXN0IiwiZm9yRWFjaCIsIml0ZW0iLCJpIiwibGkiLCJhcHBlbmRUbyIsImFkZENsYXNzIiwidGV4dCIsImlzRW1haWwiLCJyZWdleCIsInRlc3QiLCJyZXN1bHQiLCIkZWwiLCJsZW5ndGgiLCJzdGF0dXMiLCJzdGF0ZSIsIm1lc3NhZ2UiLCJyZXNwb25zZSIsImVycm9yIiwiRXJyb3IiLCJzdGF0dXNUZXh0IiwiVVJMIiwiT1BUUyIsImZldGNoIiwidGhlbiIsIlByb21pc2UiLCJhbGwiLCJqc29uIiwib2siLCJjYkVycm9yRGVmYXVsdCIsImNoZWNrU3RhdHVzIiwiaGVhZGVyIiwiYnVyZ2VyTWVudSIsImluc3RhZ3JhbUFjY291bnRzIiwibWVzc2FnZXMiLCJzZWxlY3RvckNzc0xvZ2luRm9ybSIsIl9sb2dpbkJveCIsIl9mb3JtSWQiLCJfYnV0dG9uU3VibWl0SWQiLCJfc2hvd0xvZ2luQm94QnRuSWQiLCJzZWxlY3RvckNzc0xvZ2luRm9ybUluc3RhZ3JhbSIsImlzTG9naW5JbnN0YWdyYW0iLCJpbml0IiwiUmVnaXN0ZXJGb3JtIiwiaW5pdEhlYWRlciIsImNvbmZpcm1hdGlvbldpdGhSZWRpcmVjdCIsInBhcnNlUXVlcnlTdHJpbmciLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsIm9ialVSTCIsInJlcGxhY2UiLCJSZWdFeHAiLCIkMCIsIiQxIiwiJDIiLCJwYXJhbXMiLCJzZW5kQ29uZmlybSIsImNvbmZpcm0iLCJkYXRhIiwiY3VzdG9tZXJzRGF0YVN0cmluZyIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJzZXRUaW1lb3V0IiwicmVkaXJlY3QiLCJwYXRobmFtZSIsImluZGV4T2YiLCJzZWxlY3RvcnNFbCIsImxlZnRNZW51IiwiaGFtYnVyZ2VyQnV0dG9uQ2xzIiwiaGFtYnVyZ2VyTWVudUNscyIsImhhbWJ1cmdlck1lbnVPcGVuZWRDbGFzcyIsImhhbWJ1cmdlckJ1dHRvbkNsb3NlQ2xhc3MiLCJyaWdodE1lbnUiLCJzdWJIZWFkZXIiLCJ0b2dnbGVIYW1idXJnZXJNZW51IiwibWVudU5hbWUiLCJ0b2dnbGVDbGFzcyIsIm9uIiwiYmluZCIsInNlbGVjdG9yTG9naW5TdGF0ZSIsInNlbGVjdG9yRW1haWxDb25maXJtU3RhdGUiLCJjbG9zZUNsYXNzIiwib3BlbmVkQ2xhc3MiLCJlbWFpbE5vdENvbmZpcm1lZCIsIiRlbWFpbG5Nc2ciLCJjc3MiLCJvbkxvZ2luU3Vic2NyaWJlIiwibXNnIiwicmVtb3ZlQ2xhc3MiLCIkbG9naW5Nc2ciLCJpc0VtYWlsQ29uZmlybWVkIiwic2hvd0xvZ291dCIsImlzTG9nZ2VkIiwiaXNMb2dnZWRJbiIsInBhcmVudCIsInNob3ciLCJvbGRVUkwiLCJyZWZlcnJlciIsImluY2x1ZGVzIiwiJGxvZ2luQm94IiwiJHJlZ2lzdGVyQm94IiwiUHViU3ViIiwic3Vic2NyaWJlIiwiaGlkZSIsImFkZEluc3RhZ3JhbUFjY291bnQiLCJuZXdGb3JtRGF0YSIsIiRtc2dMaXN0IiwiY2F0Y2giLCJlcnIiLCJhZGRPbkxvYWRIYW5kbGVycyIsImUiLCJidG4iLCJ0YXJnZXQiLCIkbW9kYWxCb2R5IiwiY2xvc2VzdCIsImZpbmQiLCJ2YWwiLCJ0cmltIiwiJGZvcm0iLCJmb3JtIiwiY3NzVmFsaWRhdGlvbkNsYXNzIiwicHJldmVudERlZmF1bHQiLCJjaGVja1ZhbGlkaXR5IiwicmVwb3J0VmFsaWRpdHkiLCJhZGRMaXN0SGFuZGxlciIsIiRidXR0b24iLCJzZW5kVG8iLCJzdG9wUHJvcGFnYXRpb24iLCJtb2RhbCIsImdldFNlY3VyaXR5S2V5IiwiJG1vZGFsIiwiJGtleUlucHV0IiwiY29uZmlybVNlY3VyaXR5S2V5IiwibGVuIiwibWluTGVuIiwiTnVtYmVyIiwiYXR0ciIsIm9uSGlkZU1vZGFsIiwicmVtb3ZlQXR0ciIsInR5cGVTZWxlY3RlZCIsImNoZWNrcG9pbnRUeXBlQWN0aXZlIiwibW9kYWxDb25maWciLCJfY29uZmlnIiwiZGVmYXVsdEF2YXRhclNyYyIsImluc2VydEl0ZW0iLCJjc3NDbHMiLCJsaVRwbCIsInN0YXRzIiwiaW5mbyIsInRwbCIsImNoZWNrcG9pbnQiLCJ0eXBlIiwibWV0YWRhdGEiLCJnZXRNZXRhZGF0YSIsInJlc2VuZFJlcXVlc3QiLCJpc1NlbmRSZXFPbmNlIiwiY2hlY2tSZXNwb25zZSIsImlzUmVzZW5kUmVxdWVzdCIsImFjY291bnRzIiwiTG9naW5Gb3JtIiwic2VsZWN0b3JDc3MiLCIkZW1haWwiLCIkdGV4dEFyZWFEZXNjcmlwdGlvbiIsInVzZXJMb2dpbkhlYWRlciIsIl9mb3JtRGF0YSIsInN1Ym1pdEZvcm0iLCJmb3JtRGF0YU9iaiIsInRvTG9jYWxlTG93ZXJDYXNlIiwicHVibGlzaCIsImxvZ091dCIsImJpbmRFdmVudHMiLCIkc2hvd0xvZ2luQm94QnRuSWQiLCIkYnV0dG9uU3VibWl0IiwiZXZlbnQiLCJpc0xvZ2luQnRuQ2xpY2siLCJpc0FkZEluc3RhZ3JhbUJ0bkNsaWNrZWQiLCJoYXNDbGFzcyIsInVwZGF0ZUludGVydmFsIiwiaXNJbk1lc3NhZ2VQYWdlIiwiJHVzZXJMaXN0IiwicmVhZHkiLCJtIiwiTWV0ZW9yRW1vamkiLCIkcGlja2VyIiwic3R5bGUiLCJzdHlsZU5ldyIsImluc2VydE1zZyIsInRvTG93ZXJDYXNlIiwic2lkZSIsIlVzZXJDb252ZXJzYXRpb24iLCJnZXRGb3JtYXR0ZWREYXRlVXRpbCIsInRpbWVzdGFtcCIsImZpbGxVc2VyTGlzdCIsIm1ldGEiLCJjb252ZXJzYXRpb25EZXRhaWwiLCJhZGRDb252ZXJzYXRpb25zIiwiY29udmVyc2F0aW9ucyIsImlkIiwidG8iLCJwYXJzZUludCIsImlkeCIsImFkZEhhbmRsZXJzIiwiZ2V0QW5kRmlsbENvbnZlcnNhdGlvbiIsImNvbnZlcnNhdGlvbklkIiwiaXNTY3JvbGxEb3duIiwiZ2V0TWV0YWRhdGFEZXRhaWxDb252ZXJzYXRpb24iLCJTcGlubmVyIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsIiR0ZXh0QXJlYSIsInVzZXJEYXRhIiwiYWRkIiwicG9zdE1ldGFkYXRhRGV0YWlsQ29udmVyc2F0aW9uIiwic2V0SW50ZXJ2YWwiLCJzZXR0aW5ncyIsImludm9rZV9pbl9taWxsaXMiLCJzZWxlY3RvckNscyIsInN1Ym1pdEJ0biIsIiRwYXNzd29yZCIsIiRwYXNzd29yZENvbmZpcm0iLCJwYXNzd29yZENvbmZpcm0iLCJyZWdpc3RlciIsInJlZ2lzdGVyQm94IiwiJGJ0biIsImlzIiwiaXNSZWdCdG5DbGljayIsImRldGFpbHMiLCJ0U3RhbXAiLCJzaG93RnVsbFRpbWUiLCJkYXRlIiwiRGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXkiLCJnZXREYXRlIiwiaG91ciIsImdldEhvdXJzIiwibWluIiwiZ2V0TWludXRlcyIsInNlYyIsImdldFNlY29uZHMiLCJnZXRGdWxsWWVhciIsImNsYXNzZXMiLCJpbmxpbmUiLCJvdmVybGF5IiwiZml4ZWQiLCJidXR0b24iLCJfY2ZnIiwiY2ZnIiwiZXh0ZW5kIiwicHJld0NscyIsIm5ld0NscyIsInByZXBlbmQiLCJzcGlubmVySW5zdGFuY2UiLCJMb2dpblBhZ2UiLCJocmVmIiwiSW5zdGFncmFtIiwic2VsZWN0b3JDU1MiLCJnZXRJbnN0YWdyYW1BY2Nv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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaW5kZXgtYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYTQ3NDQwMmYxYzViOWY3MTk5OGEiLCJleHBvcnQgY29uc3QgQ09OU1QgPSB7XHJcbiAgICB1cmw6IHtcclxuICAgICAgICBiYXNlOiAnaHR0cDovL2FwaS5sdXhncmFtLnJ1L3YxLycsXHJcbiAgICAgICAgcmVnaXN0cmF0aW9uOiAncmVnaXN0cmF0aW9uL2Jhc2ljLycsXHJcbiAgICAgICAgbG9naW46ICdyZWdpc3RyYXRpb24vYmFzaWMvbG9naW4nLFxyXG4gICAgICAgIGNvbmZpcm1hdGlvbjogJ3JlZ2lzdHJhdGlvbi9iYXNpYy9jb25maXJtYXRpb24/dG9rZW4nLFxyXG4gICAgICAgIGluc3RhZ3JhbV9hZGRBY2NvdW50OiAnaW5zdGFncmFtLWFjY291bnRzLycsXHJcbiAgICAgICAgaW5zdGFncmFtQWNjb3VudF9nZXRNZXRhRGF0YTogJ2luc3RhZ3JhbS1hY2NvdW50cy9tZXRhJyxcclxuICAgICAgICBpbnN0YWdyYW1BY2NvdW50X2NoZWNrcG9pbnQ6ICdpbnN0YWdyYW0tYWNjb3VudHMvY2hlY2twb2ludC8nLFxyXG4gICAgICAgIGluc3RhZ3JhbUFjY291bnRfY29uZmlybUtleTogJ2luc3RhZ3JhbS1hY2NvdW50cy9jaGVja3BvaW50LycsXHJcbiAgICAgICAgaW5zdGFncmFtRGlyZWN0X2dldE1ldGFEYXRhOiAnaW5zdGFncmFtLWRpcmVjdC9tZXRhJyxcclxuICAgICAgICBpbnN0YWdyYW1EaXJlY3RfcG9zdE1lc3NhZ2U6ICdpbnN0YWdyYW0tZGlyZWN0LydcclxuICAgIH0sXHJcbiAgICB1c2VyOiB7XHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgICB0b2tlbjogJydcclxuICAgIH0sXHJcbiAgICBjb29raWVTdG9yYWdlOiB7XHJcbiAgICAgICAgdG9rZW46ICd1c2VyX2xvZ2dlZCcsXHJcbiAgICAgICAgZW1haWxDb25maXJtZWQ6ICdlbWFpbF9jb25maXJtZWQnXHJcbiAgICB9LFxyXG4gICAgdWlTZWxlY3RvcnM6IHtcclxuICAgICAgICBoZWFkZXJMb2dpbkJveDogJ25hdiAubG9naW4tYm94JyxcclxuICAgICAgICBoZWFkZXJOYXZMb2dpbkJ0bjogJ25hdiB1bCBsaSAuanNfbG9naW4nLFxyXG4gICAgICAgIGhlYWRlclJlZ0JveDogJ25hdiAucmVnaXN0ZXItYm94JyxcclxuICAgICAgICBoZWFkZXJSZWdCdG46ICduYXYgdWwgbGkgLmpzX3JlZ2lzdGVyJyxcclxuICAgICAgICBpbnN0YWdyYW06IHtcclxuICAgICAgICAgICAgYWRkQWNjb3VudEJ0blNlbGVjdG9yOiAnI2pzX3Nob3ctbG9naW4tYm94JyxcclxuICAgICAgICAgICAgYWRkQWNjb3VudEJ0bklkOiAnanNfc2hvdy1sb2dpbi1ib3gnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGV2ZW50czoge1xyXG4gICAgICAgIFVTRVJfTE9HR0VEOiAndXNlcl9sb2dnZWQnLFxyXG4gICAgICAgIFVTRVJfTE9HT1VUOiAndXNlcl9sb2dvdXQnLFxyXG4gICAgICAgIFVTRVJfRU1BSUxfQ09ORklSTUVEOiAndXNlcl9lbWFpbF9jb25maXJtZWQnLFxyXG4gICAgICAgIFNUT1BfRklYRURfU1BJTk5FUjogJ3N0b3BfZml4ZWRfc3Bpbm5lcidcclxuICAgIH0sXHJcbiAgICBnZXRQYXRoKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy51cmwuYmFzZSArIHRoaXMudXJsW25hbWVdO1xyXG4gICAgfVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uL2pzLXNlcnZpY2VzL2NvbnN0cy5qcyIsIi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCB7Q09OU1R9IGZyb20gJy4vY29uc3RzJztcclxuaW1wb3J0IE5ldHdvcmsgZnJvbSAnLi9uZXR3b3JrJztcclxuaW1wb3J0IENvb2tpZVN0b3JhZ2UgZnJvbSAnLi9jb29raWUnO1xyXG5cclxuY2xhc3MgVXNlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5uZXR3b3JrID0gbmV3IE5ldHdvcmsoKTtcclxuICAgICAgICB0aGlzLmNvb2tpZVN0b3JhZ2UgPSBDb29raWVTdG9yYWdlO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ1Bvc3QgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBpc0xvZ2dlZEluKCkge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMuZ2V0VG9rZW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0VtYWlsQ29uZmlybWVkKCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5jb29raWVTdG9yYWdlLmdldChDT05TVC5jb29raWVTdG9yYWdlLmVtYWlsQ29uZmlybWVkKSA9PT0gJ2NvbmZpcm1lZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRva2VuKCkge1xyXG4gICAgICAgIGNvbnN0IGNvb2tpZVRva2VuID0gdGhpcy5jb29raWVTdG9yYWdlLmdldChDT05TVC5jb29raWVTdG9yYWdlLnRva2VuKTtcclxuICAgICAgICByZXR1cm4gY29va2llVG9rZW47XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW4oZm9ybURhdGEsIGNiRXJyb3IpIHtcclxuICAgICAgICBjb25zdCBzZXR0aW5nID0gey4uLnRoaXMuc2V0dGluZ1Bvc3QsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKX07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChDT05TVC5nZXRQYXRoKCdsb2dpbicpLCBzZXR0aW5nLCBjYkVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRJbnN0YWdyYW1BY2NvdW50KGZvcm1EYXRhLCBjYkVycm9yKSB7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZyA9IHtcclxuICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdCxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnNldHRpbmdQb3N0LmhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICB0b2tlbjogdGhpcy5nZXRUb2tlbigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QoQ09OU1QuZ2V0UGF0aCgnaW5zdGFncmFtX2FkZEFjY291bnQnKSwgc2V0dGluZywgY2JFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5zdGFncmFtQWNjb3VudCgpIHtcclxuICAgICAgICBjb25zdCBzZXR0aW5nID0ge1xyXG4gICAgICAgICAgICAuLi50aGlzLnNldHRpbmdQb3N0LFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnNldHRpbmdQb3N0LmhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICB0b2tlbjogdGhpcy5nZXRUb2tlbigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QoQ09OU1QuZ2V0UGF0aCgnaW5zdGFncmFtX2FkZEFjY291bnQnKSwgc2V0dGluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uZmlybSh0b2tlbikge1xyXG4gICAgICAgIC8vIGNvbnN0IGNvbmZpcm1VcmwgPSBDT05TVC5nZXRQYXRoKCdjb25maXJtYXRpb24nKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KGAke0NPTlNULmdldFBhdGgoJ2NvbmZpcm1hdGlvbicpICsgdG9rZW59YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXIoZm9ybURhdGEpIHtcclxuICAgICAgICBjb25zdCBzZXR0aW5nID0ge1xyXG4gICAgICAgICAgICAuLi50aGlzLnNldHRpbmdQb3N0LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSlcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QoQ09OU1QuZ2V0UGF0aCgncmVnaXN0cmF0aW9uJyksIHNldHRpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1ldGFkYXRhKHRva2VuLCBjYkVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChgJHtDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1BY2NvdW50X2dldE1ldGFEYXRhJyl9YCwge2hlYWRlcnM6IHt0b2tlbn19LCBjYkVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTZWN1cml0eUtleSh1c2VybmFtZSwgY2hlY2twb2ludFR5cGUpIHtcclxuICAgICAgICBjb25zdCBzZXR0aW5nID0ge1xyXG4gICAgICAgICAgICAuLi50aGlzLnNldHRpbmdQb3N0LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7J3R5cGUnOiBjaGVja3BvaW50VHlwZX0pLCAvLyB0b2RvOiB0bXAgc2V0LCBpdCBzaG91bGQgYmUgJ3R5cGUnXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QuaGVhZGVycyxcclxuICAgICAgICAgICAgICAgICd0b2tlbic6IHRoaXMuZ2V0VG9rZW4oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KGAke0NPTlNULmdldFBhdGgoJ2luc3RhZ3JhbUFjY291bnRfY2hlY2twb2ludCcpfSR7dXNlcm5hbWV9YCwgc2V0dGluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uZmlybVNlY3VyaXR5S2V5KGtleSwgdXNlcm5hbWUpIHtcclxuICAgICAgICBjb25zdCBzZXR0aW5nID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7J3NlY3VyaXR5X2NvZGUnOiBrZXl9KSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdC5oZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgJ3Rva2VuJzogJzNlMzIxZTYwMDI5NzExZTk5MjY0YTA0ODFjOGUxN2Q0JyAvLyB0b2RvOiB0aGlzLmdldFRva2VuKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChgJHtDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1BY2NvdW50X2NvbmZpcm1LZXknKX0ke3VzZXJuYW1lfWAsIHNldHRpbmcpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxubGV0IHVzZXJJbnN0YW5jZSA9IG51bGw7XHJcblxyXG5pZiAoIXVzZXJJbnN0YW5jZSkge1xyXG4gICAgdXNlckluc3RhbmNlID0gbmV3IFVzZXIoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlckluc3RhbmNlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uL2pzLXNlcnZpY2VzL3VzZXIuanMiLCJcclxuY29uc3QgQ29va2llU3J2ID0ge1xyXG4gICAgZ2V0OiBuYW1lID0+IHtcclxuICAgICAgICBjb25zdCBjID0gZG9jdW1lbnQuY29va2llLm1hdGNoKGAoPzooPzpefC4qOyAqKSR7bmFtZX0gKj0gKihbXjtdKikuKiQpfF4uKiRgKVsxXTtcclxuICAgICAgICBpZiAoYykge1xyXG4gICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGMpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXQ6IChuYW1lLCB2YWx1ZSwgb3B0cyA9IHtwYXRoOiAnLycsIGRheXM6IDM2NX0pID0+IHtcclxuICAgICAgICBpZiAob3B0cy5kYXlzKSB7XHJcbiAgICAgICAgICAgIG9wdHNbJ21heC1hZ2UnXSA9IG9wdHMuZGF5cyAqIDYwICogNjAgKiAyNDtcclxuICAgICAgICAgICAgZGVsZXRlIG9wdHMuZGF5cztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXHJcbiAgICAgICAgb3B0cyA9IE9iamVjdC5lbnRyaWVzKG9wdHMpLnJlZHVjZSgoc3RyLCBbaywgdl0pID0+IGAke3N0cn07ICR7a309JHt2fWAsICcnKTtcclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBgJHtuYW1lfT0ke2VuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkgKyBvcHRzfWA7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlOiAobmFtZSwgb3B0cykgPT4gQ29va2llU3J2LnNldChuYW1lLCAnJywgeydtYXgtYWdlJzogLTEsIHBhdGg6ICcvJywgZGF5czogMCwgLi4ub3B0c30pXHJcbiAgICAvLyBwYXRoICYgZG9tYWluIG11c3QgbWF0Y2ggY29va2llIGJlaW5nIGRlbGV0ZWRcclxufTtcclxuXHJcbi8qXHJcbmNsYXNzIENvb2tpZVN0b3JhZ2Uge1xyXG4gICAgcmVhZChrZXkpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9ICQuY29va2llKGtleSk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyBudWxsIDogdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q29va2llKG5hbWUsIHZhbHVlLCBkYXlzKSB7XHJcbiAgICAgICAgbGV0IGV4cGlyZXMgPSAnJztcclxuICAgICAgICBpZiAoZGF5cykge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKGRheXMgKiAyNCAqIDYwICogNjAgKiAxMDAwKSk7XHJcbiAgICAgICAgICAgIGV4cGlyZXMgPSBgOyBleHBpcmVzPSR7ZGF0ZS50b1VUQ1N0cmluZygpfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGAke25hbWV9ID0keyh2YWx1ZSB8fCAnJykgKyBleHBpcmVzfTsgcGF0aD0vYDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb29raWUobmFtZSkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gYDsgJHtkb2N1bWVudC5jb29raWV9YDtcclxuICAgICAgICBjb25zdCBwYXJ0cyA9IHZhbHVlLnNwbGl0KGA7ICR7bmFtZX09YCk7XHJcbiAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCA9PSAyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJ0cy5wb3AoKS5zcGxpdCgnOycpLnNoaWZ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb29raWVTcnY7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tb24vanMtc2VydmljZXMvY29va2llLmpzIiwiLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuLy8gaW1wb3J0IHtDT05TVH0gZnJvbSAnLi9jb25zdHMnO1xyXG5cclxuZnVuY3Rpb24gdmlld1V0aWxzKCkge1xyXG4gICAgZnVuY3Rpb24gc2hvd0luZm9NZXNzYWdlKHNlbGVjdG9yLCBtZXNzYWdlMSwgbWVzc2FnZTIpIHtcclxuICAgICAgICAkKHNlbGVjdG9yKS5lbXB0eSgpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoYCR7KG1lc3NhZ2UxKSA/IGA8cD5zdGF0dXM6ICR7bWVzc2FnZTF9PC9wPmAgOiAnJ31gKVxyXG4gICAgICAgICAgICAuYXBwZW5kKGA8cD4ke21lc3NhZ2UyfSA8L3A+YCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZmlsbExpc3QoJGxpc3QsIGRhdGFBcnJheSkge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gZGF0YUFycmF5O1xyXG4gICAgICAgIGNvbnN0IGNMaXN0ID0gJGxpc3Q7XHJcbiAgICAgICAgY0xpc3QuZW1wdHkoKTtcclxuICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpID0gJCgnPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCI+PC9saT4nKVxyXG4gICAgICAgICAgICAgICAgLmFwcGVuZFRvKGNMaXN0KTtcclxuICAgICAgICAgICAgJCgnPGEvPicpLmFkZENsYXNzKCd1aS1hbGwnKVxyXG4gICAgICAgICAgICAgICAgLnRleHQoaXRlbS51c2VybmFtZSlcclxuICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhsaSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNFbWFpbChlbWFpbCkge1xyXG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlICovXHJcbiAgICAgICAgY29uc3QgcmVnZXggPSAvXihbYS16QS1aMC05Xy4rLV0pK1xcQCgoW2EtekEtWjAtOS1dKStcXC4pKyhbYS16QS1aMC05XXsyLDR9KSskLztcclxuICAgICAgICByZXR1cm4gcmVnZXgudGVzdChlbWFpbCk7XHJcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSAqL1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2hvd0luZm9NZXNzYWdlLFxyXG4gICAgICAgIGZpbGxMaXN0LFxyXG4gICAgICAgIGlzRW1haWxcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHZpZXdVdGlscygpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uL2pzLXNlcnZpY2VzL3ZpZXcuanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMCwyMDExLDIwMTIsMjAxMywyMDE0IE1vcmdhbiBSb2RlcmljayBodHRwOi8vcm9kZXJpY2suZGtcbiAqIExpY2Vuc2U6IE1JVCAtIGh0dHA6Ly9tcmducmRyY2subWl0LWxpY2Vuc2Uub3JnXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL21yb2Rlcmljay9QdWJTdWJKU1xuICovXG5cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSl7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIFB1YlN1YiA9IHt9O1xuICAgIHJvb3QuUHViU3ViID0gUHViU3ViO1xuXG4gICAgdmFyIGRlZmluZSA9IHJvb3QuZGVmaW5lO1xuXG4gICAgZmFjdG9yeShQdWJTdWIpO1xuXG4gICAgLy8gQU1EIHN1cHBvcnRcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKXtcbiAgICAgICAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gUHViU3ViOyB9KTtcblxuICAgICAgICAvLyBDb21tb25KUyBhbmQgTm9kZS5qcyBtb2R1bGUgc3VwcG9ydFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKXtcbiAgICAgICAgaWYgKG1vZHVsZSAhPT0gdW5kZWZpbmVkICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgICAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBQdWJTdWI7IC8vIE5vZGUuanMgc3BlY2lmaWMgYG1vZHVsZS5leHBvcnRzYFxuICAgICAgICB9XG4gICAgICAgIGV4cG9ydHMuUHViU3ViID0gUHViU3ViOyAvLyBDb21tb25KUyBtb2R1bGUgMS4xLjEgc3BlY1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBQdWJTdWI7IC8vIENvbW1vbkpTXG4gICAgfVxuXG59KCggdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgd2luZG93ICkgfHwgdGhpcywgZnVuY3Rpb24gKFB1YlN1Yil7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIG1lc3NhZ2VzID0ge30sXG4gICAgICAgIGxhc3RVaWQgPSAtMTtcblxuICAgIGZ1bmN0aW9uIGhhc0tleXMob2JqKXtcbiAgICAgICAgdmFyIGtleTtcblxuICAgICAgICBmb3IgKGtleSBpbiBvYmope1xuICAgICAgICAgICAgaWYgKCBvYmouaGFzT3duUHJvcGVydHkoa2V5KSApe1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB0aHJvd3MgdGhlIHBhc3NlZCBleGNlcHRpb24sIGZvciB1c2UgYXMgYXJndW1lbnQgZm9yIHNldFRpbWVvdXRcbiAgICAgKiBAYWxpYXMgdGhyb3dFeGNlcHRpb25cbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0geyBPYmplY3QgfSBleCBBbiBFcnJvciBvYmplY3RcbiAgICAgKi9cbiAgICBmdW5jdGlvbiB0aHJvd0V4Y2VwdGlvbiggZXggKXtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHJlVGhyb3dFeGNlcHRpb24oKXtcbiAgICAgICAgICAgIHRocm93IGV4O1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbGxTdWJzY3JpYmVyV2l0aERlbGF5ZWRFeGNlcHRpb25zKCBzdWJzY3JpYmVyLCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyKCBtZXNzYWdlLCBkYXRhICk7XG4gICAgICAgIH0gY2F0Y2goIGV4ICl7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCB0aHJvd0V4Y2VwdGlvbiggZXggKSwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWxsU3Vic2NyaWJlcldpdGhJbW1lZGlhdGVFeGNlcHRpb25zKCBzdWJzY3JpYmVyLCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHN1YnNjcmliZXIoIG1lc3NhZ2UsIGRhdGEgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxpdmVyTWVzc2FnZSggb3JpZ2luYWxNZXNzYWdlLCBtYXRjaGVkTWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApe1xuICAgICAgICB2YXIgc3Vic2NyaWJlcnMgPSBtZXNzYWdlc1ttYXRjaGVkTWVzc2FnZV0sXG4gICAgICAgICAgICBjYWxsU3Vic2NyaWJlciA9IGltbWVkaWF0ZUV4Y2VwdGlvbnMgPyBjYWxsU3Vic2NyaWJlcldpdGhJbW1lZGlhdGVFeGNlcHRpb25zIDogY2FsbFN1YnNjcmliZXJXaXRoRGVsYXllZEV4Y2VwdGlvbnMsXG4gICAgICAgICAgICBzO1xuXG4gICAgICAgIGlmICggIW1lc3NhZ2VzLmhhc093blByb3BlcnR5KCBtYXRjaGVkTWVzc2FnZSApICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChzIGluIHN1YnNjcmliZXJzKXtcbiAgICAgICAgICAgIGlmICggc3Vic2NyaWJlcnMuaGFzT3duUHJvcGVydHkocykpe1xuICAgICAgICAgICAgICAgIGNhbGxTdWJzY3JpYmVyKCBzdWJzY3JpYmVyc1tzXSwgb3JpZ2luYWxNZXNzYWdlLCBkYXRhICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVEZWxpdmVyeUZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICl7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBkZWxpdmVyTmFtZXNwYWNlZCgpe1xuICAgICAgICAgICAgdmFyIHRvcGljID0gU3RyaW5nKCBtZXNzYWdlICksXG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSB0b3BpYy5sYXN0SW5kZXhPZiggJy4nICk7XG5cbiAgICAgICAgICAgIC8vIGRlbGl2ZXIgdGhlIG1lc3NhZ2UgYXMgaXQgaXMgbm93XG4gICAgICAgICAgICBkZWxpdmVyTWVzc2FnZShtZXNzYWdlLCBtZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zKTtcblxuICAgICAgICAgICAgLy8gdHJpbSB0aGUgaGllcmFyY2h5IGFuZCBkZWxpdmVyIG1lc3NhZ2UgdG8gZWFjaCBsZXZlbFxuICAgICAgICAgICAgd2hpbGUoIHBvc2l0aW9uICE9PSAtMSApe1xuICAgICAgICAgICAgICAgIHRvcGljID0gdG9waWMuc3Vic3RyKCAwLCBwb3NpdGlvbiApO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoJy4nKTtcbiAgICAgICAgICAgICAgICBkZWxpdmVyTWVzc2FnZSggbWVzc2FnZSwgdG9waWMsIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtZXNzYWdlSGFzU3Vic2NyaWJlcnMoIG1lc3NhZ2UgKXtcbiAgICAgICAgdmFyIHRvcGljID0gU3RyaW5nKCBtZXNzYWdlICksXG4gICAgICAgICAgICBmb3VuZCA9IEJvb2xlYW4obWVzc2FnZXMuaGFzT3duUHJvcGVydHkoIHRvcGljICkgJiYgaGFzS2V5cyhtZXNzYWdlc1t0b3BpY10pKSxcbiAgICAgICAgICAgIHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoICcuJyApO1xuXG4gICAgICAgIHdoaWxlICggIWZvdW5kICYmIHBvc2l0aW9uICE9PSAtMSApe1xuICAgICAgICAgICAgdG9waWMgPSB0b3BpYy5zdWJzdHIoIDAsIHBvc2l0aW9uICk7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IHRvcGljLmxhc3RJbmRleE9mKCAnLicgKTtcbiAgICAgICAgICAgIGZvdW5kID0gQm9vbGVhbihtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eSggdG9waWMgKSAmJiBoYXNLZXlzKG1lc3NhZ2VzW3RvcGljXSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZvdW5kO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHB1Ymxpc2goIG1lc3NhZ2UsIGRhdGEsIHN5bmMsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKXtcbiAgICAgICAgbWVzc2FnZSA9ICh0eXBlb2YgbWVzc2FnZSA9PT0gJ3N5bWJvbCcpID8gbWVzc2FnZS50b1N0cmluZygpIDogbWVzc2FnZTtcblxuICAgICAgICB2YXIgZGVsaXZlciA9IGNyZWF0ZURlbGl2ZXJ5RnVuY3Rpb24oIG1lc3NhZ2UsIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKSxcbiAgICAgICAgICAgIGhhc1N1YnNjcmliZXJzID0gbWVzc2FnZUhhc1N1YnNjcmliZXJzKCBtZXNzYWdlICk7XG5cbiAgICAgICAgaWYgKCAhaGFzU3Vic2NyaWJlcnMgKXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggc3luYyA9PT0gdHJ1ZSApe1xuICAgICAgICAgICAgZGVsaXZlcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dCggZGVsaXZlciwgMCApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFB1Ymxpc2hlcyB0aGUgbWVzc2FnZSwgcGFzc2luZyB0aGUgZGF0YSB0byBpdCdzIHN1YnNjcmliZXJzXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQGFsaWFzIHB1Ymxpc2hcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHB1Ymxpc2hcbiAgICAgKiBAcGFyYW0ge30gZGF0YSBUaGUgZGF0YSB0byBwYXNzIHRvIHN1YnNjcmliZXJzXG4gICAgICogQHJldHVybiB7IEJvb2xlYW4gfVxuICAgICAqL1xuICAgIFB1YlN1Yi5wdWJsaXNoID0gZnVuY3Rpb24oIG1lc3NhZ2UsIGRhdGEgKXtcbiAgICAgICAgcmV0dXJuIHB1Ymxpc2goIG1lc3NhZ2UsIGRhdGEsIGZhbHNlLCBQdWJTdWIuaW1tZWRpYXRlRXhjZXB0aW9ucyApO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQdWJsaXNoZXMgdGhlIHRoZSBtZXNzYWdlIHN5bmNocm9ub3VzbHksIHBhc3NpbmcgdGhlIGRhdGEgdG8gaXQncyBzdWJzY3JpYmVyc1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBhbGlhcyBwdWJsaXNoU3luY1xuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gcHVibGlzaFxuICAgICAqIEBwYXJhbSB7fSBkYXRhIFRoZSBkYXRhIHRvIHBhc3MgdG8gc3Vic2NyaWJlcnNcbiAgICAgKiBAcmV0dXJuIHsgQm9vbGVhbiB9XG4gICAgICovXG4gICAgUHViU3ViLnB1Ymxpc2hTeW5jID0gZnVuY3Rpb24oIG1lc3NhZ2UsIGRhdGEgKXtcbiAgICAgICAgcmV0dXJuIHB1Ymxpc2goIG1lc3NhZ2UsIGRhdGEsIHRydWUsIFB1YlN1Yi5pbW1lZGlhdGVFeGNlcHRpb25zICk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZXMgdGhlIHBhc3NlZCBmdW5jdGlvbiB0byB0aGUgcGFzc2VkIG1lc3NhZ2UuIEV2ZXJ5IHJldHVybmVkIHRva2VuIGlzIHVuaXF1ZSBhbmQgc2hvdWxkIGJlIHN0b3JlZCBpZiB5b3UgbmVlZCB0byB1bnN1YnNjcmliZVxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBhbGlhcyBzdWJzY3JpYmVcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHN1YnNjcmliZSB0b1xuICAgICAqIEBwYXJhbSB7IEZ1bmN0aW9uIH0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIGEgbmV3IG1lc3NhZ2UgaXMgcHVibGlzaGVkXG4gICAgICogQHJldHVybiB7IFN0cmluZyB9XG4gICAgICovXG4gICAgUHViU3ViLnN1YnNjcmliZSA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBmdW5jICl7XG4gICAgICAgIGlmICggdHlwZW9mIGZ1bmMgIT09ICdmdW5jdGlvbicpe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWVzc2FnZSA9ICh0eXBlb2YgbWVzc2FnZSA9PT0gJ3N5bWJvbCcpID8gbWVzc2FnZS50b1N0cmluZygpIDogbWVzc2FnZTtcblxuICAgICAgICAvLyBtZXNzYWdlIGlzIG5vdCByZWdpc3RlcmVkIHlldFxuICAgICAgICBpZiAoICFtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eSggbWVzc2FnZSApICl7XG4gICAgICAgICAgICBtZXNzYWdlc1ttZXNzYWdlXSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZm9yY2luZyB0b2tlbiBhcyBTdHJpbmcsIHRvIGFsbG93IGZvciBmdXR1cmUgZXhwYW5zaW9ucyB3aXRob3V0IGJyZWFraW5nIHVzYWdlXG4gICAgICAgIC8vIGFuZCBhbGxvdyBmb3IgZWFzeSB1c2UgYXMga2V5IG5hbWVzIGZvciB0aGUgJ21lc3NhZ2VzJyBvYmplY3RcbiAgICAgICAgdmFyIHRva2VuID0gJ3VpZF8nICsgU3RyaW5nKCsrbGFzdFVpZCk7XG4gICAgICAgIG1lc3NhZ2VzW21lc3NhZ2VdW3Rva2VuXSA9IGZ1bmM7XG4gICAgICAgIFxuICAgICAgICAvLyByZXR1cm4gdG9rZW4gZm9yIHVuc3Vic2NyaWJpbmdcbiAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmVzIHRoZSBwYXNzZWQgZnVuY3Rpb24gdG8gdGhlIHBhc3NlZCBtZXNzYWdlIG9uY2VcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgc3Vic2NyaWJlT25jZVxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gc3Vic2NyaWJlIHRvXG4gICAgICogQHBhcmFtIHsgRnVuY3Rpb24gfSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gYSBuZXcgbWVzc2FnZSBpcyBwdWJsaXNoZWRcbiAgICAgKiBAcmV0dXJuIHsgUHViU3ViIH1cbiAgICAgKi9cbiAgICBQdWJTdWIuc3Vic2NyaWJlT25jZSA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBmdW5jICl7XG4gICAgICAgIHZhciB0b2tlbiA9IFB1YlN1Yi5zdWJzY3JpYmUoIG1lc3NhZ2UsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAvLyBiZWZvcmUgZnVuYyBhcHBseSwgdW5zdWJzY3JpYmUgbWVzc2FnZVxuICAgICAgICAgICAgUHViU3ViLnVuc3Vic2NyaWJlKCB0b2tlbiApO1xuICAgICAgICAgICAgZnVuYy5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gUHViU3ViO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYWxsIHN1YnNjcmlwdGlvbnNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcHVibGljXG4gICAgICogQGFsaWFzIGNsZWFyQWxsU3Vic2NyaXB0aW9uc1xuICAgICAqL1xuICAgIFB1YlN1Yi5jbGVhckFsbFN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiBjbGVhckFsbFN1YnNjcmlwdGlvbnMoKXtcbiAgICAgICAgbWVzc2FnZXMgPSB7fTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgc3Vic2NyaXB0aW9ucyBieSB0aGUgdG9waWNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcHVibGljXG4gICAgICogQGFsaWFzIGNsZWFyQWxsU3Vic2NyaXB0aW9uc1xuICAgICAqL1xuICAgIFB1YlN1Yi5jbGVhclN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiBjbGVhclN1YnNjcmlwdGlvbnModG9waWMpe1xuICAgICAgICB2YXIgbTtcbiAgICAgICAgZm9yIChtIGluIG1lc3NhZ2VzKXtcbiAgICAgICAgICAgIGlmIChtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eShtKSAmJiBtLmluZGV4T2YodG9waWMpID09PSAwKXtcbiAgICAgICAgICAgICAgICBkZWxldGUgbWVzc2FnZXNbbV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBzdWJzY3JpcHRpb25zXG4gICAgICpcbiAgICAgKiAtIFdoZW4gcGFzc2VkIGEgdG9rZW4sIHJlbW92ZXMgYSBzcGVjaWZpYyBzdWJzY3JpcHRpb24uXG4gICAgICpcblx0ICogLSBXaGVuIHBhc3NlZCBhIGZ1bmN0aW9uLCByZW1vdmVzIGFsbCBzdWJzY3JpcHRpb25zIGZvciB0aGF0IGZ1bmN0aW9uXG4gICAgICpcblx0ICogLSBXaGVuIHBhc3NlZCBhIHRvcGljLCByZW1vdmVzIGFsbCBzdWJzY3JpcHRpb25zIGZvciB0aGF0IHRvcGljIChoaWVyYXJjaHkpXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBhbGlhcyBzdWJzY3JpYmVPbmNlXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIHwgRnVuY3Rpb24gfSB2YWx1ZSBBIHRva2VuLCBmdW5jdGlvbiBvciB0b3BpYyB0byB1bnN1YnNjcmliZSBmcm9tXG4gICAgICogQGV4YW1wbGUgLy8gVW5zdWJzY3JpYmluZyB3aXRoIGEgdG9rZW5cbiAgICAgKiB2YXIgdG9rZW4gPSBQdWJTdWIuc3Vic2NyaWJlKCdteXRvcGljJywgbXlGdW5jKTtcbiAgICAgKiBQdWJTdWIudW5zdWJzY3JpYmUodG9rZW4pO1xuICAgICAqIEBleGFtcGxlIC8vIFVuc3Vic2NyaWJpbmcgd2l0aCBhIGZ1bmN0aW9uXG4gICAgICogUHViU3ViLnVuc3Vic2NyaWJlKG15RnVuYyk7XG4gICAgICogQGV4YW1wbGUgLy8gVW5zdWJzY3JpYmluZyBmcm9tIGEgdG9waWNcbiAgICAgKiBQdWJTdWIudW5zdWJzY3JpYmUoJ215dG9waWMnKTtcbiAgICAgKi9cbiAgICBQdWJTdWIudW5zdWJzY3JpYmUgPSBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgIHZhciBkZXNjZW5kYW50VG9waWNFeGlzdHMgPSBmdW5jdGlvbih0b3BpYykge1xuICAgICAgICAgICAgICAgIHZhciBtO1xuICAgICAgICAgICAgICAgIGZvciAoIG0gaW4gbWVzc2FnZXMgKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eShtKSAmJiBtLmluZGV4T2YodG9waWMpID09PSAwICl7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhIGRlc2NlbmRhbnQgb2YgdGhlIHRvcGljIGV4aXN0czpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzVG9waWMgICAgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICggbWVzc2FnZXMuaGFzT3duUHJvcGVydHkodmFsdWUpIHx8IGRlc2NlbmRhbnRUb3BpY0V4aXN0cyh2YWx1ZSkgKSxcbiAgICAgICAgICAgIGlzVG9rZW4gICAgPSAhaXNUb3BpYyAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnLFxuICAgICAgICAgICAgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyxcbiAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlLFxuICAgICAgICAgICAgbSwgbWVzc2FnZSwgdDtcblxuICAgICAgICBpZiAoaXNUb3BpYyl7XG4gICAgICAgICAgICBQdWJTdWIuY2xlYXJTdWJzY3JpcHRpb25zKHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoIG0gaW4gbWVzc2FnZXMgKXtcbiAgICAgICAgICAgIGlmICggbWVzc2FnZXMuaGFzT3duUHJvcGVydHkoIG0gKSApe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlc1ttXTtcblxuICAgICAgICAgICAgICAgIGlmICggaXNUb2tlbiAmJiBtZXNzYWdlW3ZhbHVlXSApe1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgbWVzc2FnZVt2YWx1ZV07XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAvLyB0b2tlbnMgYXJlIHVuaXF1ZSwgc28gd2UgY2FuIGp1c3Qgc3RvcCBoZXJlXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoIHQgaW4gbWVzc2FnZSApe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UuaGFzT3duUHJvcGVydHkodCkgJiYgbWVzc2FnZVt0XSA9PT0gdmFsdWUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBtZXNzYWdlW3RdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59KSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcHVic3ViLWpzL3NyYy9wdWJzdWIuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IHZpZXdVdGlscyBmcm9tICcuL3ZpZXcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV0d29yayB7XHJcblxyXG4gICAgY2JFcnJvckRlZmF1bHQocmVzdWx0KSB7XHJcbiAgICAgICAgY29uc3QgJGVsID0gKCQoJyNkZXNjcmlwdGlvbicpLmxlbmd0aCkgPyAkKCcjZGVzY3JpcHRpb24nKSA6ICQoJy5lcnJvci1tc2cnKTtcclxuICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKCRlbCxcclxuICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5zdGF0ZSxcclxuICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5tZXNzYWdlIHx8ICdMb2dpbiBlcnJvcicpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrU3RhdHVzKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAmJiByZXNwb25zZS5zdGF0dXMgPj0gMjAwICYmIHJlc3BvbnNlLnN0YXR1cyA8IDMwMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgICAgIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZW5kUmVxdWVzdChVUkwsIE9QVFMsIGNiRXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goVVJMLCBPUFRTKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiBQcm9taXNlLmFsbChbcmVzcG9uc2UsIHJlc3BvbnNlLmpzb24oKV0pKVxyXG4gICAgICAgICAgICAudGhlbigoW3Jlc3BvbnNlLCBqc29uXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghY2JFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNiRXJyb3JEZWZhdWx0KGpzb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNiRXJyb3IoanNvbik7IC8vIHVwZGF0ZSB2aWV3XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tTdGF0dXMocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihqc29uLnN0YXR1cy5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBqc29uO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy9uZXR3b3JrLmpzIiwiaW1wb3J0ICcuL2Jhc2Uuc2Nzcyc7XHJcbi8vIGltcG9ydCAnYm9vdHN0cmFwJztcclxuXHJcbmltcG9ydCBSZWdpc3RlckZvcm0gZnJvbSAnLi9ibG9ja3MvcmVnaXN0ZXItZm9ybS9yZWdpc3Rlci1mb3JtJztcclxuaW1wb3J0IHtMb2dpbkZvcm19IGZyb20gJy4vYmxvY2tzL2xvZ2luLWZvcm0vbG9naW4tZm9ybSc7XHJcbmltcG9ydCB7TG9naW5QYWdlfSBmcm9tICcuL3BhZ2VzL19hdXRoL2xvZ2luLXBhZ2UnO1xyXG5pbXBvcnQge2NvbmZpcm1hdGlvbldpdGhSZWRpcmVjdH0gZnJvbSAnLi9ibG9ja3MvY29uZmlybS1yZWcvY29uZmlybS1yZWcnO1xyXG5pbXBvcnQge0luc3RhZ3JhbX0gZnJvbSAnLi9wYWdlcy9faW5zdGFncmFtL2luc3RhZ3JhbSc7XHJcbmltcG9ydCAqIGFzIGhlYWRlciBmcm9tICcuL2Jsb2Nrcy9oZWFkZXIvaGVhZGVyJztcclxuaW1wb3J0ICogYXMgYnVyZ2VyTWVudSBmcm9tICcuL2Jsb2Nrcy9oZWFkZXIvYnVyZ2VyLW1lbnUvYnVyZ2VyLW1lbnUnO1xyXG5pbXBvcnQge0NPTlNUfSBmcm9tICcuL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMnO1xyXG5pbXBvcnQgKiBhcyBpbnN0YWdyYW1BY2NvdW50cyBmcm9tICcuL2Jsb2Nrcy9pbnN0YWdyYW0tYWNjb3VudHMtbGlzdC9pbnN0YWdyYW0tYWNjb3VudHMtbGlzdCc7XHJcbmltcG9ydCAqIGFzIG1lc3NhZ2VzIGZyb20gJy4vYmxvY2tzL21lc3NhZ2VzL21lc3NhZ2VzJztcclxuXHJcbmNvbnN0IHNlbGVjdG9yQ3NzTG9naW5Gb3JtID0ge1xyXG4gICAgX2xvZ2luQm94OiBDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJMb2dpbkJveCxcclxuICAgIF9mb3JtSWQ6ICcjanNfbG9naW4tZm9ybScsXHJcbiAgICBfYnV0dG9uU3VibWl0SWQ6ICcjanNfbG9naW5fYnRuJyxcclxuICAgIF9zaG93TG9naW5Cb3hCdG5JZDogQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyTmF2TG9naW5CdG5cclxufTtcclxuXHJcbmNvbnN0IHNlbGVjdG9yQ3NzTG9naW5Gb3JtSW5zdGFncmFtID0ge1xyXG4gICAgX2xvZ2luQm94OiAnbWFpbiAubG9naW4tYm94JyxcclxuICAgIF9mb3JtSWQ6ICcjanNfaW5zdGFncmFtLWFkZC1hY2NvdW50JyxcclxuICAgIF9idXR0b25TdWJtaXRJZDogJyNqc19pbnN0YWdyYW0tYWRkLWFjY291bnQtLWJ0bicsXHJcbiAgICBfc2hvd0xvZ2luQm94QnRuSWQ6ICcjanNfc2hvdy1sb2dpbi1ib3gnLFxyXG4gICAgaXNMb2dpbkluc3RhZ3JhbTogdHJ1ZVxyXG59O1xyXG5cclxuY29uc3QgaW5pdCA9ICgpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdpbml0IGpzIGhlcmUnLCBDT05TVC51c2VyKTtcclxuICAgIChuZXcgUmVnaXN0ZXJGb3JtKCkpLmluaXQoKTtcclxuICAgIExvZ2luRm9ybShzZWxlY3RvckNzc0xvZ2luRm9ybSkuaW5pdCgpO1xyXG4gICAgTG9naW5Gb3JtKHNlbGVjdG9yQ3NzTG9naW5Gb3JtSW5zdGFncmFtKS5pbml0KCk7IC8vIGluaXQgaW5zdGFncmFtIGxvZ2luIGZvcm0qIS9cclxuICAgIExvZ2luUGFnZSh7XHJcbiAgICAgICAgX2xvZ2luQm94OiAnLmF1dGgubG9naW4gLmNhcmQtc2lnbmluJyxcclxuICAgICAgICBfZm9ybUlkOiAnLmZvcm0tc2lnbmluJyxcclxuICAgICAgICBfYnV0dG9uU3VibWl0SWQ6ICcuZm9ybS1zaWduaW4gW3R5cGU9XCJzdWJtaXRcIl0nXHJcbiAgICB9KS5pbml0KCk7XHJcbiAgICBJbnN0YWdyYW0oKS5pbml0KCk7XHJcbiAgICBjb25maXJtYXRpb25XaXRoUmVkaXJlY3QoKS5pbml0KCk7XHJcbiAgICBoZWFkZXIuaW5pdEhlYWRlcigpO1xyXG4gICAgYnVyZ2VyTWVudS5pbml0KCk7XHJcbiAgICBpbnN0YWdyYW1BY2NvdW50cy5pbml0KCk7XHJcbiAgICBtZXNzYWdlcy5pbml0KCk7XHJcbn07XHJcblxyXG4oKCkgPT4gaW5pdCgpKSgpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYm9vdHN0cmFwLmpzIiwiLyogZXNsaW50LWRpc2FibGUgc29ydC12YXJzICovXHJcbi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy91c2VyJztcclxuaW1wb3J0IHtDT05TVH0gZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2NvbnN0cyc7XHJcbmltcG9ydCBjb29raWVTdG9yYWdlIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb29raWUnO1xyXG5cclxuY29uc3QgcGFyc2VRdWVyeVN0cmluZyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIGNvbnN0IHN0ciA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XHJcbiAgICBjb25zdCBvYmpVUkwgPSB7fTtcclxuXHJcbiAgICBzdHIucmVwbGFjZShcclxuICAgICAgbmV3IFJlZ0V4cCgnKFtePz0mXSspKD0oW14mXSopKT8nLCAnZycpLFxyXG4gICAgICAgIGZ1bmN0aW9uKCQwLCAkMSwgJDIpIHtcclxuICAgICAgICAgICAgb2JqVVJMWyQxXSA9ICQyO1xyXG4gICAgICAgIH1cclxuICApO1xyXG4gICAgcmV0dXJuIG9ialVSTDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb25maXJtYXRpb25XaXRoUmVkaXJlY3QoKSB7XHJcbiAgICBjb25zdCB1c2VyID0gVXNlcjtcclxuICAgIGNvbnN0IHBhcmFtcyA9IHBhcnNlUXVlcnlTdHJpbmcoKTtcclxuICAgIC8vIEV4YW1wbGUgaG93IHRvIHVzZSBpdDpcclxuXHJcbiAgICBjb25zdCBzZW5kQ29uZmlybSA9IGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgICAgIHVzZXIuY29uZmlybSh0b2tlbikudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzICYmIHJlc3VsdC5zdGF0dXMuc3RhdGUgPT09ICdvaycpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBzYXZlIHRoZSBpdGVtXHJcbiAgICAgICAgICAgICAgICBjb29raWVTdG9yYWdlLnNldChDT05TVC5jb29raWVTdG9yYWdlLmVtYWlsQ29uZmlybWVkLCAnY29uZmlybWVkJyk7XHJcbiAgICAgICAgICAgICAgICBjb29raWVTdG9yYWdlLnNldChDT05TVC5jb29raWVTdG9yYWdlLnRva2VuLCByZXN1bHQuZGF0YS50b2tlbik7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uID0gY29uZmlybS1yZWdpc3RyYXRpb24uaHRtbD90b2tlbj0nZnJvbSBzZXJ2ZXInO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHJldHJpZXZlIHRoZSBvYmplY3QgaW4gYSBzdHJpbmcgZm9ybVxyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VzdG9tZXJzRGF0YVN0cmluZyA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2N1c3RvbWVyc0RhdGEnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1c3RvbWVyc0RhdGFTdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlcXVlc3Qgc3VjY2VlZGVkIHdpdGggSlNPTiByZXNwb25zZScsIHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAkKCcuY29uZmlybS1yZWdpc3RyYXRpb24nKS5hcHBlbmQoYDxwPmNvbmZpcm1hdGlvbiBzdGF0dXM6ICR7cmVzdWx0LnN0YXR1cy5zdGF0ZX08L3A+YCk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSAnLi9wcm9maWxlLmh0bWwnO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LnN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVkaXJlY3QgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZG90LW5vdGF0aW9uXHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBwYXJhbXNbJ3Rva2VuJ107XHJcblxyXG4gICAgICAgIGlmICghbG9jYXRpb24ucGF0aG5hbWUuaW5kZXhPZignY29uZmlybS1yZWdpc3RyYXRpb24nKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2VuZCByZXEgdG8gJywgdG9rZW4pO1xyXG4gICAgICAgICAgICBzZW5kQ29uZmlybSh0b2tlbik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgICAgIHJlZGlyZWN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0XHJcbiAgICB9O1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3MvY29uZmlybS1yZWcvY29uZmlybS1yZWcuanMiLCIvLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuLy8gY29uc3QgaGFtYnVyZ2VyQnV0dG9uQ2xzID0gJyNhc2lkZV9tb2JpbGVfX2J1dHRvbic7XHJcbi8vIGNvbnN0IGhhbWJ1cmdlck1lbnVDbHMgPSAnLmFzaWRlLWJ1cmdlci1tZW51JztcclxuLy8gY29uc3QgaGFtYnVyZ2VyTWVudU9wZW5lZENsYXNzID0gJ2J1cmdlci1tZW51LS1jbG9zZWQnO1xyXG4vLyBjb25zdCBoYW1idXJnZXJCdXR0b25DbG9zZUNsYXNzID0gJ2J1cmdlci1tZW51X19idXR0b24tLWNsb3NlJztcclxuY29uc3Qgc2VsZWN0b3JzRWwgPSB7XHJcbiAgICBsZWZ0TWVudToge1xyXG4gICAgICAgIGhhbWJ1cmdlckJ1dHRvbkNsczogJyNhc2lkZV9tb2JpbGVfX2J1dHRvbicsXHJcbiAgICAgICAgaGFtYnVyZ2VyTWVudUNsczogJy5hc2lkZS1idXJnZXItbWVudScsXHJcbiAgICAgICAgaGFtYnVyZ2VyTWVudU9wZW5lZENsYXNzOiAnYnVyZ2VyLW1lbnUtLWNsb3NlZCcsXHJcbiAgICAgICAgaGFtYnVyZ2VyQnV0dG9uQ2xvc2VDbGFzczogJ2J1cmdlci1tZW51X19idXR0b24tLWNsb3NlJ1xyXG4gICAgfSxcclxuICAgIHJpZ2h0TWVudToge1xyXG4gICAgICAgIGhhbWJ1cmdlckJ1dHRvbkNsczogJyNoZWFkZXJfbW9iaWxlX3RvZ2dsZXInLFxyXG4gICAgICAgIGhhbWJ1cmdlck1lbnVDbHM6ICcuci1zaWRlLWJ1cmdlci1tZW51JyxcclxuICAgICAgICBoYW1idXJnZXJNZW51T3BlbmVkQ2xhc3M6ICdyLXNpZGUtYnVyZ2VyLW1lbnUtLW9wZW4nLFxyXG4gICAgICAgIGhhbWJ1cmdlckJ1dHRvbkNsb3NlQ2xhc3M6ICdidXJnZXItbWVudS1yaWdodF9fYnV0dG9uLS1jbG9zZSdcclxuICAgIH0sXHJcbiAgICBzdWJIZWFkZXI6IHtcclxuICAgICAgICBoYW1idXJnZXJCdXR0b25DbHM6ICcjaGVhZGVyX21vYmlsZV90b3BiYXJfdG9nZ2xlcicsXHJcbiAgICAgICAgaGFtYnVyZ2VyTWVudUNsczogJy5zdWItaGVhZGVyJyxcclxuICAgICAgICBoYW1idXJnZXJNZW51T3BlbmVkQ2xhc3M6ICdzdWItaGVhZGVyLS1vcGVuJyxcclxuICAgICAgICBoYW1idXJnZXJCdXR0b25DbG9zZUNsYXNzOiAnc3ViLWhlYWRlci1idXR0b24tLWNsb3NlJ1xyXG4gICAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRvZ2dsZSBoYW1idXJnZXIgbWVudSBwb3BvdmVyXHJcbiAqL1xyXG5mdW5jdGlvbiB0b2dnbGVIYW1idXJnZXJNZW51KG1lbnVOYW1lKSB7XHJcbiAgICBjb25zdCB7aGFtYnVyZ2VyTWVudUNscywgaGFtYnVyZ2VyQnV0dG9uQ2xzLCBoYW1idXJnZXJCdXR0b25DbG9zZUNsYXNzLCBoYW1idXJnZXJNZW51T3BlbmVkQ2xhc3N9ID0gc2VsZWN0b3JzRWxbbWVudU5hbWVdO1xyXG4gICAgJChoYW1idXJnZXJCdXR0b25DbHMpLnRvZ2dsZUNsYXNzKGhhbWJ1cmdlckJ1dHRvbkNsb3NlQ2xhc3MpO1xyXG4gICAgJChoYW1idXJnZXJNZW51Q2xzKS50b2dnbGVDbGFzcyhoYW1idXJnZXJNZW51T3BlbmVkQ2xhc3MpO1xyXG59XHJcblxyXG4vKipcclxuICogSW5pdCBoYW1idXJnZXIgbWVudVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBjb25zdCBsZWZ0TWVudSA9ICdsZWZ0TWVudSc7XHJcbiAgICBjb25zdCByaWdodE1lbnUgPSAncmlnaHRNZW51JztcclxuICAgIGNvbnN0IHN1YkhlYWRlciA9ICdzdWJIZWFkZXInO1xyXG5cclxuICAgICQoc2VsZWN0b3JzRWxbbGVmdE1lbnVdLmhhbWJ1cmdlckJ1dHRvbkNscykub24oJ2NsaWNrJywgdG9nZ2xlSGFtYnVyZ2VyTWVudS5iaW5kKHRoaXMsIGxlZnRNZW51KSk7XHJcbiAgICAkKHNlbGVjdG9yc0VsW3JpZ2h0TWVudV0uaGFtYnVyZ2VyQnV0dG9uQ2xzKS5vbignY2xpY2snLCB0b2dnbGVIYW1idXJnZXJNZW51LmJpbmQodGhpcywgcmlnaHRNZW51KSk7XHJcbiAgICAkKHNlbGVjdG9yc0VsW3N1YkhlYWRlcl0uaGFtYnVyZ2VyQnV0dG9uQ2xzKS5vbignY2xpY2snLCB0b2dnbGVIYW1idXJnZXJNZW51LmJpbmQodGhpcywgc3ViSGVhZGVyKSk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9oZWFkZXIvYnVyZ2VyLW1lbnUvYnVyZ2VyLW1lbnUuanMiLCIvLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdXNlcic7XHJcbmltcG9ydCBQdWJTdWIgZnJvbSAncHVic3ViLWpzJzsgLy8gaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvcHVic3ViLWpzXHJcbmltcG9ydCB7Q09OU1R9IGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMnO1xyXG5cclxuY29uc3Qgc2VsZWN0b3JMb2dpblN0YXRlID0gJy5qc19tZXNzYWdlX2xvZ2dlZC0tdGV4dCc7XHJcbmNvbnN0IHNlbGVjdG9yRW1haWxDb25maXJtU3RhdGUgPSAnLmpzX2VtYWlsLWNvbmZpcm0tLXRleHQnO1xyXG5jb25zdCBjbG9zZUNsYXNzID0gJ2Qtbm9uZSc7XHJcbmNvbnN0IG9wZW5lZENsYXNzID0gJ2QtYmxvY2snO1xyXG5cclxuZnVuY3Rpb24gZW1haWxOb3RDb25maXJtZWQoKSB7XHJcbiAgICBjb25zdCAkZW1haWxuTXNnID0gJChzZWxlY3RvckVtYWlsQ29uZmlybVN0YXRlKTtcclxuICAgICRlbWFpbG5Nc2cudGV4dCgnKiplbWFpbE5vdENvbmZpcm1lZCoqIEVtYWlsINC90LUg0L/QvtC00YLQstC10YDQttC00LXQvS4nKS5jc3MoJ2NvbG9yJywgJ2xpZ2h0Y29yYWwnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25Mb2dpblN1YnNjcmliZShtc2csIGRhdGEpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKG1zZywgZGF0YSk7XHJcbiAgICAkKENPTlNULnVpU2VsZWN0b3JzLmhlYWRlck5hdkxvZ2luQnRuKS5hZGRDbGFzcyhjbG9zZUNsYXNzKS5yZW1vdmVDbGFzcyhvcGVuZWRDbGFzcyk7XHJcbiAgICAkKENPTlNULnVpU2VsZWN0b3JzLmhlYWRlclJlZ0J0bikuYWRkQ2xhc3MoY2xvc2VDbGFzcykucmVtb3ZlQ2xhc3Mob3BlbmVkQ2xhc3MpO1xyXG4gICAgJChDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJMb2dpbkJveCkuYWRkQ2xhc3MoY2xvc2VDbGFzcykucmVtb3ZlQ2xhc3Mob3BlbmVkQ2xhc3MpO1xyXG5cclxuICAgICQoJy5uYXYtbGluay5qc19sb2dPdXQnKS5hZGRDbGFzcyhvcGVuZWRDbGFzcykucmVtb3ZlQ2xhc3MoY2xvc2VDbGFzcyk7IC8vIHNob3dcclxuICAgIGNvbnN0ICRsb2dpbk1zZyA9ICQoc2VsZWN0b3JMb2dpblN0YXRlKTtcclxuICAgICRsb2dpbk1zZy50ZXh0KCcqKm9uTG9naW5TdWJzY3JpYmUqKiDQstGLINC30LDQu9C+0LPQuNC90LjQu9C40YHRjCDQsiBMdXhncmFtINGD0YHQv9C10YjQvdC+JykuY3NzKCdjb2xvcicsICdsaWdodGJsdWUnKTtcclxuICAgIGNvbnN0IGlzRW1haWxDb25maXJtZWQgPSBVc2VyLmlzRW1haWxDb25maXJtZWQoKTtcclxuICAgIGlmICghaXNFbWFpbENvbmZpcm1lZCkge1xyXG4gICAgICAgIGVtYWlsTm90Q29uZmlybWVkKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dMb2dvdXQoKSB7XHJcbiAgICAvLyBjaGVjayBpcyBsb2dnZWRcclxuICAgIGNvbnN0IGlzTG9nZ2VkID0gVXNlci5pc0xvZ2dlZEluKCk7XHJcbiAgICBjb25zdCBpc0VtYWlsQ29uZmlybWVkID0gVXNlci5pc0VtYWlsQ29uZmlybWVkKCk7XHJcbiAgICBpZiAoIWlzRW1haWxDb25maXJtZWQpIHtcclxuICAgICAgICBlbWFpbE5vdENvbmZpcm1lZCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzTG9nZ2VkKSB7XHJcbiAgICAgICAgJCgnLm5hdi1saW5rLmpzX2xvZ091dCcpLnBhcmVudCgpLnNob3coKTtcclxuICAgICAgICAkKCcuanNfZW1haWwtY29uZmlybS0tdGV4dCcpLnRleHQoJ9Cy0Ysg0LfQsNC70L7Qs9C40L3QuNC70LjRgdGMINGD0YHQv9C10YjQvdC+Jyk7XHJcbiAgICAgICAgY29uc3Qgb2xkVVJMID0gZG9jdW1lbnQucmVmZXJyZXI7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cob2xkVVJMKTtcclxuICAgICAgICBpZiAob2xkVVJMLmluY2x1ZGVzKCdjb25maXJtLXJlZ2lzdHJhdGlvbicpKSB7XHJcbiAgICAgICAgICAgICQoJy5qc19tZXNzYWdlX2xvZ2dlZC0tdGV4dCcpLnRleHQoJ9Cy0Ysg0L/QvtC00YLQstC10YDQtNC40LvQuCDRgNC10LPQuNGB0YLRgNCw0YbQuNGOJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9uTG9naW5TdWJzY3JpYmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChzZWxlY3RvckxvZ2luU3RhdGUpLnRleHQoJ9Cf0YDQuNCy0LXRgiDQsNC90L7QvdC40LzQvdGL0Lkg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMJyk7XHJcbiAgICAgICAgJChzZWxlY3RvckVtYWlsQ29uZmlybVN0YXRlKS5lbXB0eSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogSW5pdCBoZWFkZXJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0SGVhZGVyKCkge1xyXG4gICAvLyBjaGVjayBvdGhlciBoYW5kbGVyIGluIGxvZ2luLWZvcm0uanNcclxuICAgIGNvbnN0ICRsb2dpbkJveCA9ICQoQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyTG9naW5Cb3gpO1xyXG4gICAgY29uc3QgJHJlZ2lzdGVyQm94ID0gJChDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJSZWdCb3gpO1xyXG5cclxuICAgIFB1YlN1Yi5zdWJzY3JpYmUoQ09OU1QuZXZlbnRzLlVTRVJfTE9HR0VELCBvbkxvZ2luU3Vic2NyaWJlKTtcclxuXHJcbiAgICBzaG93TG9nb3V0KCk7XHJcblxyXG4gICAgJChDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJSZWdCdG4pLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAkbG9naW5Cb3guaGlkZSgpO1xyXG4gICAgICAgICRyZWdpc3RlckJveC5jc3Moeyd0b3AnOiAwLCAncmlnaHQnOiAwfSlcclxuICAgICAgICAgICAgLmFkZENsYXNzKCdiZy1saWdodCBib3JkZXIgbXQtNSBteC1hdXRvIHBvc2l0aW9uLWFic29sdXRlIHB4LTMgZC1ibG9jaycpXHJcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKENPTlNULnVpU2VsZWN0b3JzLmhlYWRlck5hdkxvZ2luQnRuKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgJGxvZ2luQm94LmFkZENsYXNzKCdkLWJsb2NrJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICRyZWdpc3RlckJveC5hZGRDbGFzcygnZC1ub25lJykucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKTtcclxuICAgIH0pO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3MvaGVhZGVyL2hlYWRlci5qcyIsIi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy91c2VyJztcclxuLy8gaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3NwaW5uZXInO1xyXG5pbXBvcnQgdmlld1V0aWxzIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy92aWV3JztcclxuXHJcbi8qXHJcbmNvbnN0IHN0YXRpY1Jlc3AgPSB7XHJcbiAgICAnc3RhdHVzJzoge1xyXG4gICAgICAgICdzdGF0ZSc6ICdvaydcclxuICAgIH0sXHJcbiAgICAnZGF0YSc6IHtcclxuICAgICAgICAnYWNjb3VudHMnOiBbe1xyXG4gICAgICAgICAgICAnc3RhdHVzJzogJ09LJyxcclxuICAgICAgICAgICAgJ3VzZXJuYW1lJzogJ2FuZHJleS5qYWtpdmNoeWsnLFxyXG4gICAgICAgICAgICAnY2hlY2twb2ludCc6IHtcclxuICAgICAgICAgICAgICAgICdzdGF0dXMnOiAnQUJTRU5UJyxcclxuICAgICAgICAgICAgICAgICd0eXBlJzogJ1BIT05FJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAndGFyaWZmJzoge1xyXG4gICAgICAgICAgICAgICAgJ3N0YXR1cyc6ICdBQlNFTlQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICdpbmZvJzoge1xyXG4gICAgICAgICAgICAgICAgJ3Byb2ZpbGVfcGljX3VybCc6ICdodHRwczovL3JhbmRvbXVzZXIubWUvYXBpL3BvcnRyYWl0cy9tZW4vNTAuanBnJyxcclxuICAgICAgICAgICAgICAgICduYW1lJzogJ9CQ0L3QtNGA0LXQuSDQr9C60LjQstGH0YPQuicsXHJcbiAgICAgICAgICAgICAgICAnYmlvZ3JhcGh5JzogJycsXHJcbiAgICAgICAgICAgICAgICAndXJsJzogJycsXHJcbiAgICAgICAgICAgICAgICAnZW1haWwnOiAnbmlkenVrdUBpbmJveC5ydScsXHJcbiAgICAgICAgICAgICAgICAncGhvbmUnOiAnJyxcclxuICAgICAgICAgICAgICAgICdtZWRpYV9jb3VudCc6IDIsXHJcbiAgICAgICAgICAgICAgICAnZm9sbG93ZXJfY291bnQnOiA0LFxyXG4gICAgICAgICAgICAgICAgJ2ZvbGxvd2luZ19jb3VudCc6IDE1XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICdzdGF0dXMnOiAnT0snLFxyXG4gICAgICAgICAgICAndXNlcm5hbWUnOiAnYW5kcmV5Lmpha2l2Y2h5aycsXHJcbiAgICAgICAgICAgICdjaGVja3BvaW50Jzoge1xyXG4gICAgICAgICAgICAgICAgJ3N0YXR1cyc6ICdBQlNFTlQnLFxyXG4gICAgICAgICAgICAgICAgJ3R5cGUnOiAnRU1BSUwnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICd0YXJpZmYnOiB7XHJcbiAgICAgICAgICAgICAgICAnc3RhdHVzJzogJ0FCU0VOVCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ2luZm8nOiB7XHJcbiAgICAgICAgICAgICAgICAncHJvZmlsZV9waWNfdXJsJzogJ2h0dHBzOi8vcmFuZG9tdXNlci5tZS9hcGkvcG9ydHJhaXRzL21lbi81Mi5qcGcnLFxyXG4gICAgICAgICAgICAgICAgJ25hbWUnOiAn0JTQuNC80L7QvSDQn9Cw0YDQsNC70L7QvScsXHJcbiAgICAgICAgICAgICAgICAnYmlvZ3JhcGh5JzogJ2Jpb2dyYXBoeSB0ZXh0JyxcclxuICAgICAgICAgICAgICAgICd1cmwnOiAnd3d3LmxlbmVuZ3JhZC5ydScsXHJcbiAgICAgICAgICAgICAgICAnZW1haWwnOiAnbmlkenVrdUBpbmJveC5ydScsXHJcbiAgICAgICAgICAgICAgICAncGhvbmUnOiAnMDExLTExMS0xMTEtMTEnLFxyXG4gICAgICAgICAgICAgICAgJ21lZGlhX2NvdW50JzogNTE1LFxyXG4gICAgICAgICAgICAgICAgJ2ZvbGxvd2luZ19jb3VudCc6IDM0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICdzdGF0dXMnOiAnT0snLFxyXG4gICAgICAgICAgICAndXNlcm5hbWUnOiAnYWxleC5zbWl0aCcsXHJcbiAgICAgICAgICAgICdjaGVja3BvaW50Jzoge1xyXG4gICAgICAgICAgICAgICAgJ3N0YXR1cyc6ICdUUklHR0VSRUQnLFxyXG4gICAgICAgICAgICAgICAgJ3R5cGUnOiAnRU1BSUxfT1JfUEhPTkUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICd0YXJpZmYnOiB7XHJcbiAgICAgICAgICAgICAgICAnc3RhdHVzJzogJ0FCU0VOVCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgJ3N0YXR1cyc6ICdPSycsXHJcbiAgICAgICAgICAgICd1c2VybmFtZSc6ICcyMmFuZHJleS5qYWtpdmNoeWsyJyxcclxuICAgICAgICAgICAgJ2NoZWNrcG9pbnQnOiB7XHJcbiAgICAgICAgICAgICAgICAnc3RhdHVzJzogJ1RSSUdHRVJFRCcsXHJcbiAgICAgICAgICAgICAgICAndHlwZSc6ICdQSE9ORSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ3RhcmlmZic6IHtcclxuICAgICAgICAgICAgICAgICdzdGF0dXMnOiAnQUJTRU5UJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgJ2F2YWlsYWJsZV9wcm94eV9wdXJjaGFzZSc6IHRydWVcclxuICAgIH1cclxufTtcclxuKi8vKlxyXG5jb25zdCBzdGF0aWNSZXNwV2l0aERlbGF5ID0ge1xyXG4gICAgJ3N0YXR1cyc6IHtcclxuICAgICAgICAnc3RhdGUnOiAnb2snXHJcbiAgICB9LFxyXG4gICAgJ2RhdGEnOiB7XHJcbiAgICAgICAgJ2FjY291bnRzJzogW3tcclxuICAgICAgICAgICAgJ3N0YXR1cyc6ICdPSycsXHJcbiAgICAgICAgICAgICd1c2VybmFtZSc6ICdzdGF0aWNSZXNwLldpdGhEZWxheScsXHJcbiAgICAgICAgICAgICdjaGVja3BvaW50Jzoge1xyXG4gICAgICAgICAgICAgICAgJ3N0YXR1cyc6ICdBQlNFTlQnLFxyXG4gICAgICAgICAgICAgICAgJ3R5cGUnOiAnUEhPTkUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICd0YXJpZmYnOiB7XHJcbiAgICAgICAgICAgICAgICAnc3RhdHVzJzogJ0FCU0VOVCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1dLFxyXG4gICAgICAgICdhdmFpbGFibGVfcHJveHlfcHVyY2hhc2UnOiB0cnVlXHJcbiAgICB9XHJcbn07XHJcbiovXHJcblxyXG4vLyDQn9C+0YHQu9C1INC00L7QsdCw0LLQu9C10L3QuNGPINCw0LrQutCw0YPQvdGC0LAg0YHQvdC+0LLQsCDQtNC10YDQvdGD0YLRjCDQnNCV0KLQkCDQuCDQv9C10YDQtdGA0LjRgdC+0LLQsNGC0Ywg0YHQv9C40YHQvtC6INCw0LrQutCw0YPQvdGC0L7QslxyXG5jb25zdCBhZGRJbnN0YWdyYW1BY2NvdW50ID0gKG5ld0Zvcm1EYXRhKSA9PiB7XHJcbiAgICBjb25zdCBjYkVycm9yID0gKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUicsIHJlc3VsdCk7XHJcbiAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSgkKCcuZXJyb3ItbXNnJyksXHJcbiAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMuc3RhdGUsXHJcbiAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMubWVzc2FnZSB8fCAnTG9naW4gZXJyb3InKTtcclxuICAgICAgICAvLyAkKF9sb2dpbkJveCkuYWRkQ2xhc3MoY2xvc2VDbGFzcykucmVtb3ZlQ2xhc3Mob3BlbmVkQ2xhc3MpO1xyXG4gICAgfTtcclxuXHJcbiAgICBVc2VyLmFkZEluc3RhZ3JhbUFjY291bnQobmV3Rm9ybURhdGEsIGNiRXJyb3IpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnN0YXR1cykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQsIHJlc3VsdC5zdGF0dXMpO1xyXG4gICAgICAgICAgICAvLyBkZWJ1Z2dlcjtcclxuICAgICAgICAgICAgY29uc3QgJG1zZ0xpc3QgPSAkKCcuYWNjb3VudHMtbGlzdCcpO1xyXG4gICAgICAgICAgICAkbXNnTGlzdC5lbXB0eSgpO1xyXG4gICAgICAgICAgICAvLyB0b2RvIDogcmVsb2FkIGxpc3RcclxuICAgICAgICAgICAgLy8gZmlsbExpc3QoJG1zZ0xpc3QsIHJlc3VsdC5kYXRhLmFjY291bnRzKTtcclxuICAgICAgICAgICAgLy8gYWRkTGlzdEhhbmRsZXIoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UoJHRleHRBcmVhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIC8vICAgICByZXN1bHQuc3RhdHVzLnN0YXRlLFxyXG4gICAgICAgICAgICAvLyAgICAgcmVzdWx0LnN0YXR1cy5tZXNzYWdlIHx8ICdMb2dpbiBlcnJvcicpO1xyXG4gICAgICAgICAgICAvLyAkKF9sb2dpbkJveCkuYWRkQ2xhc3MoY2xvc2VDbGFzcykucmVtb3ZlQ2xhc3Mob3BlbmVkQ2xhc3MpO1xyXG4gICAgICAgIH1cclxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAvLyB0b2RvOiByZW5kZXIgZm9yIHVzZXJcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ3N1Ym1pdCcsIG5ld0Zvcm1EYXRhKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGFkZE9uTG9hZEhhbmRsZXJzKCkge1xyXG4gICAgLy8gJCgnLmpzX3JlcGVhdC1zZWN1cml0eS1jb2RlJykub24oJ2NsaWNrJywgKGUpID0+IHtcclxuXHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICAkKCcuanNfYWRkLWluc3RhZ3JhbS1hY2NvdW50Jykub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCBidG4gPSAkKGUudGFyZ2V0KTtcclxuICAgICAgICBjb25zdCAkbW9kYWxCb2R5ID0gYnRuLmNsb3Nlc3QoJy5tb2RhbCcpLmZpbmQoJy5tb2RhbC1kaWFsb2cgLm1vZGFsLWJvZHknKTtcclxuICAgICAgICBjb25zdCB1c2VybmFtZSA9ICRtb2RhbEJvZHkuZmluZCgnaW5wdXRbbmFtZT1cInVzZXJuYW1lXCJdJykudmFsKCkudHJpbSgpO1xyXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkID0gJG1vZGFsQm9keS5maW5kKCdpbnB1dFtuYW1lPVwicGFzc1wiXScpLnZhbCgpLnRyaW0oKTtcclxuICAgICAgICBjb25zdCAkZm9ybSA9ICQoJ2Zvcm0nLCAkbW9kYWxCb2R5KTtcclxuICAgICAgICBjb25zdCBmb3JtID0gJGZvcm0uZ2V0KDApO1xyXG4gICAgICAgIGNvbnN0IGNzc1ZhbGlkYXRpb25DbGFzcyA9ICdmb3JtLXZhbGlkYXRpb24nO1xyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIC8vIGNvbnN0IHZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoJGZvcm0pO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbGlkYXRvci52YWxpZGF0ZSgpKTtcclxuICAgICAgICBpZiAoZm9ybS5jaGVja1ZhbGlkaXR5KCkpIHtcclxuICAgICAgICAgICAgYWRkSW5zdGFncmFtQWNjb3VudCh7dXNlcm5hbWUsIHBhc3N3b3JkfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gSGlnaGxpZ2h0IGVycm9yc1xyXG4gICAgICAgICAgICBpZiAoZm9ybS5yZXBvcnRWYWxpZGl0eSkge1xyXG4gICAgICAgICAgICAgICAgZm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICRmb3JtLmFkZENsYXNzKGNzc1ZhbGlkYXRpb25DbGFzcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXVzZXJuYW1lIHx8ICFwYXNzd29yZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm90IHZhbGlkIC0gRW1wdHkgZmllbGRzJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkTGlzdEhhbmRsZXIoLyogdXNlcm5hbWUqLykge1xyXG4gICAgLy8gJCgnI3lvdXJNb2RhbElEJykub24oJ3Nob3cuYnMubW9kYWwnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAvLyAgICAgdmFyIHlvdXJwYXJhbWV0ZXIgPSBlLnJlbGF0ZWRUYXJnZXQuZGF0YXNldC55b3VycGFyYW1ldGVyO1xyXG4gICAgLy8gICAgIC8vIERvIHNvbWUgc3R1ZmYgdy8gaXQuXHJcbiAgICAvLyB9KTtcclxuICAgIGxldCBjaGVja3BvaW50VHlwZSA9ICcnO1xyXG5cclxuICAgICQoJy5qc19wYXNzLWNoZWNrcG9pbnQtYnRuJykub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCAkYnV0dG9uID0gJChlLnRhcmdldCk7XHJcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSAkYnV0dG9uLmRhdGEoJ3VzZXJuYW1lJyk7XHJcbiAgICAgICAgY2hlY2twb2ludFR5cGUgPSAkYnV0dG9uLmRhdGEoJ2NoZWNrcG9pbnRUeXBlJykgfHwgY2hlY2twb2ludFR5cGU7XHJcbiAgICAgICAgLy8gJCgnI3NlY3VyaXR5LWNvZGUnKS5kYXRhKCdjaGVja3BvaW50VHlwZScsIGNoZWNrcG9pbnRUeXBlKTtcclxuICAgICAgICAvLyB0b2RvIGFkZCAnY2hlY2twb2ludFR5cGUnIHRvIG1vZGFsXHJcbiAgICAgICAgY29uc3Qgc2VuZFRvID0gKGNoZWNrcG9pbnRUeXBlID09PSAnUEhPTkUnKSA/ICfRgtC10LvQtdGE0L7QvScgOiAnZW1haWwnO1xyXG4gICAgICAgIC8vIFNwaW5uZXIuc3RhcnQoJGJ1dHRvbiwgJ2ZhLWtleScpO1xyXG5cclxuICAgICAgICBpZiAoY2hlY2twb2ludFR5cGUgPT09ICdFTUFJTF9PUl9QSE9ORScpIHtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIC8vINC40L3Qv9GD0YLRiyDRgdC/0YDRj9GC0LDQvdGLLFxyXG4gICAgICAgICAgICAvLyDQv9C+0LrQsNC30LDRgtGMINGB0LXRgNGL0LUg0L/QtdGA0LXQutC70Y7Rh9Cw0YLQtdC70LggKNCy0YvQsdGA0LDQuyDRgtC40L8pXHJcbiAgICAgICAgICAgIC8vINC10YHRgtGMINC60L3QvtC/0LrQsCDQl9Cw0L/RgNC+0YHQuNGC0Ywg0LrQvtC0INC/0L7QtNGC0LLQtdGA0LbQtNC10L3QuNC1XHJcbiAgICAgICAgICAgICQoJyNzZWN1cml0eS1jb2RlLXBob25lT3JlbWFpbCcpLm1vZGFsKHtzaG93OiB0cnVlLCB1c2VybmFtZX0pO1xyXG5cclxuICAgICAgICAgICAgLy8g0L3QtSDQvtGC0L/RgNCw0LLQu9GP0LXQvCDRgNC10LrQstC10YHRglxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBVc2VyLmdldFNlY3VyaXR5S2V5KHVzZXJuYW1lLCBjaGVja3BvaW50VHlwZSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZWN1cml0eUtleSByZWNlaXZlZDonLCByZXN1bHQuc3RhdHVzLnN0YXRlKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMuc3RhdGUgPT09ICdvaycpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRtb2RhbCA9ICQoJyNzZWN1cml0eS1jb2RlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU3Bpbm5lci5zdG9wKCRidXR0b24sICdmYS1rZXknKTtcclxuICAgICAgICAgICAgICAgICQoJy5qc19zdWNjZXNzLWZlZWRiYWNrJywgJG1vZGFsKS5lbXB0eSgpLnRleHQoYNCa0LvRjtGHINC/0L7QtNGC0LLQtdGA0LbQtNC10L3QuNGPINCx0YvQuyDQvtGC0L/RgNCw0LLQu9C10L0g0JLQsNC8INC90LAgJHtzZW5kVG99YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGluc2lkZSBtb2RhbFxyXG4gICAgJCgnLmpzX2NvbmZpcm0tc2VjdXJpdHktY29kZScpLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYnRuID0gJChlLnRhcmdldCk7XHJcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSBidG4uZGF0YSgndXNlcm5hbWUnKTtcclxuICAgICAgICBjb25zdCAka2V5SW5wdXQgPSBidG4uY2xvc2VzdCgnLm1vZGFsJykuZmluZCgnLm1vZGFsLWRpYWxvZyBmb3JtIGlucHV0LmpzX2NvbmZpcm0ta2V5Jyk7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gJGtleUlucHV0LnZhbCgpLnRyaW0oKTtcclxuICAgICAgICBjb25zdCAkbW9kYWwgPSBidG4uY2xvc2VzdCgnLm1vZGFsJyk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgaWYgKGtleS5sZW5ndGggIT09IDYpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBVc2VyLmNvbmZpcm1TZWN1cml0eUtleShrZXksIHVzZXJuYW1lKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMuc3RhdGUgIT09ICdvaycpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnanNfY29uZmlybTonLCByZXN1bHQuc3RhdHVzLnN0YXRlLCAnY2xvc2UgbW9kYWwnKTtcclxuICAgICAgICAgICAgJG1vZGFsLm1vZGFsKCdoaWRlJyk7XHJcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyJyk7XHJcbiAgICAgICAgICAgICQoJy5qc19zdWNjZXNzLWZlZWRiYWNrJywgJG1vZGFsKS50ZXh0KCfQl9Cw0L/RgNC+0YEg0L3QtSDQvtGC0L/RgNCw0LLQu9C10L0nKS5jc3MoJ2NvbG9yJywgJ3JlZCcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnZm9ybSBpbnB1dFttaW5sZW5ndGhdJykub24oJ2JsdXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgbGVuID0gJCh0aGlzKS52YWwoKS50cmltKCkubGVuZ3RoO1xyXG4gICAgICAgIGNvbnN0IG1pbkxlbiA9IE51bWJlcigkKHRoaXMpLmF0dHIoJ21pbmxlbmd0aCcpKTtcclxuICAgICAgICAvLyBjb25zdCBtZXNzYWdlID0gbWluTGVuIDw9IGxlbiA/ICcnIDogbWluTGVuICsgJyBjaGFyYWN0ZXJzIG1pbmltdW0nO1xyXG4gICAgICAgIGlmIChtaW5MZW4gIT09IGxlbikge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNzcygnYm9yZGVyQ29sb3InLCAncmVkJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2JvcmRlckNvbG9yJywgJyNjZWQ0ZGEnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5zZXRDdXN0b21WYWxpZGl0eShtZXNzYWdlKVxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gb25IaWRlTW9kYWwoZSkge1xyXG4gICAgICAgIGNvbnN0ICRtb2RhbCA9ICQoZS50YXJnZXQpO1xyXG4gICAgICAgICRtb2RhbC5maW5kKCcuZmlyc3Qtc3RlcCcpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAkbW9kYWwuZmluZCgnLnNlY29uZC1zdGVwJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICQoJy5qc19jb25maXJtLWtleScpLnZhbCgnJyk7XHJcbiAgICAgICAgJCgnLmpzX3N1Y2Nlc3MtZmVlZGJhY2snLCAkbW9kYWwpLnJlbW92ZUF0dHIoJ3N0eWxlJykuZW1wdHkoKTtcclxuICAgIH1cclxuICAgICQoJyNzZWN1cml0eS1jb2RlLXBob25lT3JlbWFpbCcpLm9uKCdoaWRlLmJzLm1vZGFsJywgb25IaWRlTW9kYWwpO1xyXG4gICAgJCgnI3NlY3VyaXR5LWNvZGUnKS5vbignaGlkZS5icy5tb2RhbCcsIG9uSGlkZU1vZGFsKTtcclxuXHJcbiAgICAvLyBcIlBIT05FX09SX0VNQUlMXCIgbW9kYWxcclxuICAgICQoJy5qc19nZXQtc2VjdXJpdHktY29kZS1waG9uZU9yZW1haWwnKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0ICRtb2RhbCA9ICQoJyNzZWN1cml0eS1jb2RlLXBob25lT3JlbWFpbCcpO1xyXG4gICAgICAgIGNvbnN0IHR5cGVTZWxlY3RlZCA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJG1vZGFsKS5maW5kKCcuanNfYnRuLXR5cGUtc3dpdGNoZXIgaW5wdXQ6Y2hlY2tlZCcpO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrcG9pbnRUeXBlQWN0aXZlID0gdHlwZVNlbGVjdGVkLnZhbCgpO1xyXG4gICAgICAgIGNvbnN0IHNlbmRUbyA9IChjaGVja3BvaW50VHlwZUFjdGl2ZSA9PT0gJ1BIT05FJykgPyAn0YLQtdC70LXRhNC+0L0nIDogJ2VtYWlsJztcclxuICAgICAgICBjb25zdCBtb2RhbENvbmZpZyA9ICRtb2RhbC5kYXRhKClbJ2JzLm1vZGFsJ10uX2NvbmZpZztcclxuICAgICAgICBjb25zdCB1c2VybmFtZSA9IG1vZGFsQ29uZmlnLnVzZXJuYW1lO1xyXG4gICAgICAgIFVzZXIuZ2V0U2VjdXJpdHlLZXkodXNlcm5hbWUsIGNoZWNrcG9pbnRUeXBlQWN0aXZlKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgLy8g0L/RgNC4INC90LDQttCw0YLQuNC4IFwi0JfQsNC/0YDQvtGB0LjRgtGMINC60L7QtCDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjQtVwiIC0g0L7RgtC/0LDRgNC70Y/QtdGC0YHRjyDRgNC10LrQstC10YHRgiBcItGB0YLQsNGA0YIg0YfQtdC60L/QvtC40L3RglwiINC/0L7Rj9Cy0LvRj9C10YLRjNGB0Y8g0LjQvdC/0YPRgiDQuCDQutC90L7Qv9C60LAg0LTRgNGD0LPQuNGFINGC0LjQv9Cw0YVcclxuICAgICAgICAgICAgLy8gZ2V0IHNlbGVjdGVkIGJ1dHRvblxyXG5cclxuICAgICAgICAgICAgLy8g0L/QtdGA0LXQutC70Y7Rh9Cw0YLQtdC70Ywo0YHQtdGA0YvQuSkg0Lgg0LrQvdC+0L/QutCwIFwi0JfQsNC/0YDQvtGB0LjRgtGMINC60L7QtCDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjQtVwiINC40YHRh9C10LfQsNGO0YJcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlY3VyaXR5S2V5IHJlY2VpdmVkOicsIHJlc3VsdC5zdGF0dXMuc3RhdGUpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cy5zdGF0ZSA9PT0gJ29rJykge1xyXG4gICAgICAgICAgICAgICAgJCgnLmZpcnN0LXN0ZXAnLCAkbW9kYWwpLmFkZENsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgICAgICQoJy5zZWNvbmQtc3RlcCcsICRtb2RhbCkucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgJCgnLmpzX3N1Y2Nlc3MtZmVlZGJhY2snLCAkbW9kYWwpLmVtcHR5KCkudGV4dChg0JrQu9GO0Ycg0L/QvtC00YLQstC10YDQttC00LXQvdC40Y8g0LHRi9C7INC+0YLQv9GA0LDQstC70LXQvSDQktCw0Lwg0L3QsCAke3NlbmRUb31gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbGxMaXN0KCRsaXN0LCBkYXRhQXJyYXkpIHtcclxuICAgIGNvbnN0IGl0ZW1zID0gZGF0YUFycmF5O1xyXG4gICAgY29uc3QgY0xpc3QgPSAkbGlzdDtcclxuICAgIGNvbnN0IGRlZmF1bHRBdmF0YXJTcmMgPSAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9qTk5UNExFLnBuZyc7XHJcbiAgICBjb25zdCBpbnNlcnRJdGVtID0gKGRhdGEsIHRleHQsIGNzc0NscykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxpVHBsID0gYCR7KGRhdGEpXHJcbiAgICAgICAgICAgID8gYDxsaSBjbGFzcz1cImxpc3QtaW5saW5lLWl0ZW0gJHtjc3NDbHN9XCI+PHNwYW4gY2xhc3M9XCJmaWd1cmVcIj4ke2RhdGF9PC9zcGFuPjxzcGFuPiR7dGV4dH08L3NwYW4+PC9saT5gXHJcbiAgICAgICAgICAgIDogYDxsaSBjbGFzcz1cImxpc3QtaW5saW5lLWl0ZW0gJHtjc3NDbHN9XCI+PHNwYW4gY2xhc3M9XCJmaWd1cmVcIj4wPC9zcGFuPjxzcGFuPiR7dGV4dH08L3NwYW4+PC9saT5gfWA7XHJcbiAgICAgICAgcmV0dXJuIGxpVHBsO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHN0YXRzID0gKGluZm8pID0+IHtcclxuICAgICAgICBjb25zdCB0cGwgPSBgPGRpdiBjbGFzcz1cImNvbFwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LWlubGluZSB0ZXh0LWNlbnRlciBjb3VudHMtbGlzdFwiPlxyXG4gICAgICAgICAgICAkeyhpbmZvKVxyXG4gICAgICAgICAgICAgID8gYCR7aW5zZXJ0SXRlbShpbmZvWydtZWRpYV9jb3VudCddLCAn0J/Rg9Cx0LvQuNC60LDRhtC40LgnLCAnbWVkaWEtY291bnQnKX1cclxuICAgICAgICAgICAgICAgICR7aW5zZXJ0SXRlbShpbmZvWydmb2xsb3dlcl9jb3VudCddLCAn0J/QvtC00L/QuNGB0YfQuNC60LgnLCAnZm9sbG93ZXItY291bnQnKX1cclxuICAgICAgICAgICAgICAgICR7aW5zZXJ0SXRlbShpbmZvWydmb2xsb3dpbmdfY291bnQnXSwgJ9Cf0L7QtNC/0LjRgdC60LgnLCAnZm9sbG93aW5nLWNvdW50Jyl9YFxyXG4gICAgICAgICAgICAgIDogYCR7aW5zZXJ0SXRlbShmYWxzZSwgJ9Cf0YPQsdC70LjQutCw0YbQuNC4JywgJ21lZGlhLWNvdW50Jyl9XHJcbiAgICAgICAgICAgICAgICAke2luc2VydEl0ZW0oZmFsc2UsICfQn9C+0LTQv9C40YHRh9C40LrQuCcsICdmb2xsb3dlci1jb3VudCcpfVxyXG4gICAgICAgICAgICAgICAgJHtpbnNlcnRJdGVtKGZhbHNlLCAn0J/QvtC00L/QuNGB0LrQuCcsICdmb2xsb3dpbmctY291bnQnKX1gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5gO1xyXG4gICAgICAgIHJldHVybiB0cGw7XHJcbiAgICB9O1xyXG4gICAgY0xpc3QuZW1wdHkoKS5hZGRDbGFzcygnYm9yZGVyLWxpZ2h0LWNvbG9yJyk7XHJcbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5mbyA9IGl0ZW0uaW5mbztcclxuICAgICAgICBjb25zdCBjaGVja3BvaW50ID0gaXRlbS5jaGVja3BvaW50IHx8IGl0ZW07XHJcblxyXG4gICAgICAgIGlmICghaW5mbykge1xyXG4gICAgICAgICAgICAkKGA8bGkgY2xhc3M9XCJtZWRpYSBweS0zXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwibWwtMyByb3VuZGVkXCIgYWx0PVwiZGVmYXVsdCBhdmF0YXJcIiBzcmM9XCIke2RlZmF1bHRBdmF0YXJTcmN9XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEtYm9keSBkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHVzZXItaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkeyhpdGVtLnVzZXJuYW1lKSA/IGA8aDQgY2xhc3M9XCJtdC0wIG1iLTEgbmFtZVwiPiR7aXRlbS51c2VybmFtZX08L2g0PmAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7KGNoZWNrcG9pbnQuc3RhdHVzID09PSAnVFJJR0dFUkVEJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkganNfcGFzcy1jaGVja3BvaW50LWJ0biBkLWJsb2NrIG14LWF1dG9cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY2hlY2twb2ludC10eXBlPVwiJHtjaGVja3BvaW50LnR5cGV9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdXNlcm5hbWU9XCIke2l0ZW0udXNlcm5hbWUgfHwgJyd9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNzZWN1cml0eS1jb2RlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1rZXlcIj48L2k+0J/RgNC+0LnRgtC4INGH0LXQutC/0L7QuNC90YI8L2J1dHRvbj5gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYCh0b2RvKWNoZWNrcG9pbnQgc3RhdHVzIC0gJHtjaGVja3BvaW50LnN0YXR1c31gfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICR7c3RhdHMoKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPmApLmFwcGVuZFRvKGNMaXN0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKGA8bGkgY2xhc3M9XCJtZWRpYSBweS0zXCI+XHJcbiAgICAgICAgICAgICR7KGluZm9bJ3Byb2ZpbGVfcGljX3VybCddKVxyXG4gICAgICAgICAgICAgICAgPyBgPGltZyBjbGFzcz1cIm1sLTMgcm91bmRlZFwiIGFsdD1cIlVzZXIgcGhvdG9cIiBzcmM9XCIke2luZm9bJ3Byb2ZpbGVfcGljX3VybCddfVwiPmBcclxuICAgICAgICAgICAgICAgIDogYDxpbWcgY2xhc3M9XCJtbC0zIHJvdW5kZWRcIiBhbHQ9XCJkZWZhdWx0IGF2YXRhclwiIHNyYz1cIiR7ZGVmYXVsdEF2YXRhclNyY31cIj5gfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEtYm9keSBkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgdXNlci1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHsoaXRlbS51c2VybmFtZSkgPyBgPHAgY2xhc3M9XCJtdC0wIG1iLTEgbmFtZSBsZWFkXCI+JHtpdGVtLnVzZXJuYW1lfTwvcD5gIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgJHsoaW5mby5uYW1lKSA/IGA8aDQgY2xhc3M9XCJtdC0wIG1iLTFcIj4ke2luZm8ubmFtZX08L2g0PmAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAkeyhpbmZvLm5hbWUpID8gJycgOiAnJyAgLyogJHsoaW5mby5lbWFpbCkgPyBgPHAgY2xhc3M9XCJtdC0wIG1iLTFcIj4ke2luZm8uZW1haWx9PC9wPmAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgJHsoaW5mby5waG9uZSkgPyBgPHAgY2xhc3M9XCJtdC0wIG1iLTFcIj4ke2luZm8ucGhvbmV9PC9wPmAgOiAnJ30gKi8gfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgJHsoY2hlY2twb2ludC5zdGF0dXMgPT09ICdUUklHR0VSRUQnKVxyXG4gICAgICAgICAgICAgICAgPyBgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkganNfcGFzcy1jaGVja3BvaW50LWJ0biBkLWJsb2NrIG14LWF1dG9cIiBkYXRhLWNoZWNrcG9pbnQtdHlwZT1cIiR7Y2hlY2twb2ludC50eXBlfVwiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNzZWN1cml0eS1jb2RlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEta2V5XCI+PC9pPtCf0YDQvtC50YLQuCDRh9C10LrQv9C+0LjQvdGCPC9idXR0b24+YFxyXG4gICAgICAgICAgICAgICAgOiAnJ31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgJHtzdGF0cyhpbmZvKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9saT5gKS5hcHBlbmRUbyhjTGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbml0IGhlYWRlclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBjb25zdCAkbXNnTGlzdCA9ICQoJy5hY2NvdW50cy1saXN0Jyk7XHJcbiAgICAvLyBjaGVjayB3ZSBhcmUgaW4gcHJvZmlsZSBwYWdlXHJcbiAgICBpZiAoISRtc2dMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHRva2VuID0gVXNlci5nZXRUb2tlbigpOyAvLyB1cGQgdG86IFVzZXIuZ2V0VG9rZW4oKVxyXG4gICAgY29uc3QgbWV0YWRhdGEgPSBVc2VyLmdldE1ldGFkYXRhKHRva2VuKTtcclxuICAgIGNvbnN0IHJlc2VuZFJlcXVlc3QgPSAoKSA9PiBVc2VyLmdldE1ldGFkYXRhKHRva2VuKTtcclxuICAgIGxldCBpc1NlbmRSZXFPbmNlID0gZmFsc2U7XHJcbiAgICBjb25zdCBjaGVja1Jlc3BvbnNlID0gKHJlc3VsdCwgaXNSZXNlbmRSZXF1ZXN0KSA9PiB7XHJcbiAgICAgICAgaWYgKCFyZXN1bHQuc3RhdHVzLnN0YXRlID09PSAnb2snIHx8ICFyZXN1bHQuZGF0YSB8fCAhJG1zZ0xpc3QubGVuZ3RoIHx8IGlzUmVzZW5kUmVxdWVzdCkge1xyXG4gICAgICAgICAgICAvLyDQv9GA0L7QstC10YDRj9C8INC+0LTQuNC9INGA0LDQtyDQvdCw0LvQuNGH0LjQtSByZXN1bHQuZGF0YS5hY2NvdW50cy5pbmZvXHJcbiAgICAgICAgICAgICRtc2dMaXN0LmVtcHR5KCk7XHJcbiAgICAgICAgICAgICQoYDxsaSBjbGFzcz1cIm1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cIm10LTAgbWItM1wiPtCd0Lgg0L7QtNC90L7Qs9C+INCQ0LrQutCw0YPQvdGC0LAg0L3QtSDQtNC+0LHQsNCy0LvQtdC90L48L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+YCkuYXBwZW5kVG8oJG1zZ0xpc3QpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc2VuZFJlcXVlc3QoKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja1Jlc3BvbnNlKHJlc3VsdCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmVxdWVzdCByZXNlbmQnKTtcclxuICAgICAgICAgICAgfSwgMzUwMCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g0LLRi9Cy0L7QtCDRgNC10LfRg9C70YzRgtCw0YLQvtCyIChkYXRhLmFjY291bnRzLmluZm8pXHJcbiAgICAgICAgJCgnLnByb2ZpbGUtdXNlciAuc3Bpbm5lci1ib3gnKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgZmlsbExpc3QoJG1zZ0xpc3QsIHJlc3VsdC5kYXRhLmFjY291bnRzKTtcclxuICAgICAgICBhZGRMaXN0SGFuZGxlcigpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBjaGVjayB3ZSBhcmUgaW4gcHJvZmlsZSBwYWdlXHJcbiAgICBpZiAoISRtc2dMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBhZGRPbkxvYWRIYW5kbGVycygpO1xyXG5cclxuICAgIC8vINC80L7QttC10YIg0LjQvdGE0L4g0L7RgtGB0YPRgtGB0LLQvtCy0LDRgtGMIC0g0YHQtNC10LvQsNGC0Ywg0LXRidC1INGA0LDQtyDQt9Cw0L/RgNC+0YEg0YfQtdGA0LXQtyAzINGB0LXQui5cclxuXHJcbiAgICBtZXRhZGF0YS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAvLyDQv9GA0L7QstC10YDRj9C8INC+0LTQuNC9INGA0LDQtyDQvdCw0LvQuNGH0LjQtSByZXN1bHQuZGF0YS5hY2NvdW50cy5pbmZvXHJcbiAgICAgICAgbGV0IGlzUmVzZW5kUmVxdWVzdCA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChyZXN1bHQuZGF0YSAmJiByZXN1bHQuZGF0YS5hY2NvdW50cyAmJiAhaXNTZW5kUmVxT25jZSkge1xyXG4gICAgICAgICAgICByZXN1bHQuZGF0YS5hY2NvdW50cy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWl0ZW0uaW5mbykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzUmVzZW5kUmVxdWVzdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNTZW5kUmVxT25jZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2hlY2tSZXNwb25zZShyZXN1bHQsIGlzUmVzZW5kUmVxdWVzdCk7XHJcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UoJCgnLmVycm9yLW1zZycpLFxyXG4gICAgICAgICAgICAgICAgZXJyLnN0YXR1cyB8fCAnJyxcclxuICAgICAgICAgICAgICAgICfQndC1INC/0L7Qu9GD0YfQuNC70L7RgdGMINC30LDQs9GA0YPQt9C40YLRjCDQtNC+0YHRgtGD0L/QvdGL0LUgSW5zdGFncmFtINCw0LrQutCw0YPQvdGC0YsnKTtcclxuICAgICAgICB9LCAzMDAwKTtcclxuICAgICAgICAkKCcuc3Bpbm5lci1ib3gnKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICB9KTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL2luc3RhZ3JhbS1hY2NvdW50cy1saXN0L2luc3RhZ3JhbS1hY2NvdW50cy1saXN0LmpzIiwiLyogZXNsaW50LWRpc2FibGUgc29ydC12YXJzICovXHJcbi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy91c2VyJztcclxuaW1wb3J0IFB1YlN1YiBmcm9tICdwdWJzdWItanMnOyAvLyBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9wdWJzdWItanNcclxuaW1wb3J0IGNvb2tpZVN0b3JhZ2UgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2Nvb2tpZSc7XHJcbi8vIGltcG9ydCBWYWxpZGF0b3IgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2Zvcm0tdmFsaWRhdG9yJztcclxuaW1wb3J0IHZpZXdVdGlscyBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdmlldyc7XHJcbmltcG9ydCB7Q09OU1R9IGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMnO1xyXG5cclxuLy8gd2luZG93LiQgPSAkO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExvZ2luRm9ybShzZWxlY3RvckNzcykge1xyXG4gICAgY29uc3Qge19mb3JtSWQsIF9idXR0b25TdWJtaXRJZCwgX3Nob3dMb2dpbkJveEJ0bklkLCBfbG9naW5Cb3h9ID0gc2VsZWN0b3JDc3M7XHJcbiAgICBjb25zdCB1c2VyID0gVXNlciwgLy8gc2VydmljZVxyXG4gICAgICAgICRmb3JtID0gJChfZm9ybUlkKSxcclxuICAgICAgICAkZW1haWwgPSAkZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwibWFpbFwiXScpLFxyXG4gICAgICAgICR0ZXh0QXJlYURlc2NyaXB0aW9uID0gJCgnI2Rlc2NyaXB0aW9uJyk7XHJcbiAgICAvLyBjb25zdCBvcGVuZWRDbGFzcyA9ICdkLWJsb2NrJztcclxuICAgIC8vIGNvbnN0IGNsb3NlQ2xhc3MgPSAnZC1ub25lJztcclxuXHJcbiAgICBjb25zdCB1c2VyTG9naW5IZWFkZXIgPSAoX2Zvcm1EYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2JFcnJvciA9IChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgJChfbG9naW5Cb3gpLmFwcGVuZCgnPHA+cmVzdWx0LnN0YXR1cy5tZXNzYWdlPC9wPicpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiB1c2VyLmxvZ2luKF9mb3JtRGF0YSwgY2JFcnJvcilcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuZGF0YSAmJiByZXN1bHQuZGF0YS50b2tlbikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNhdmUgdGhlIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBjb29raWVTdG9yYWdlLnNldChDT05TVC5jb29raWVTdG9yYWdlLnRva2VuLCByZXN1bHQuZGF0YS50b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLm5hdi1saW5rLmpzX2xvZ091dCcpLnBhcmVudCgpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmVxdWVzdCBzdWNjZWVkZWQgd2l0aCBKU09OIHJlc3BvbnNlJywgcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKCR0ZXh0QXJlYURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLm1lc3NhZ2UgfHwgJ0xvZ2luIHN1Y2NzZXNzJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UodGhpcy4kdGV4dEFyZWFEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYDxwPnN0YXR1czogJHtyZXN1bHQuc3RhdHVzLnN0YXRlfTwvcD48cD4gbWVzc2FnZTogJHtyZXN1bHQuc3RhdHVzLm1lc3NhZ2V9PC9wPmApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSgkdGV4dEFyZWFEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5tZXNzYWdlIHx8ICdMb2dpbiBlcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc3VibWl0Rm9ybSA9IGZ1bmN0aW9uKGZvcm1EYXRhT2JqKSB7XHJcbiAgICAgICAgY29uc3QgZW1haWwgPSAkZW1haWwudmFsKCksXHJcbiAgICAgICAgICAgIHBhc3N3b3JkID0gJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cInBhc3NcIl0nKS52YWwoKSxcclxuICAgICAgICAgICAgX2Zvcm1EYXRhID0gZm9ybURhdGFPYmogfHwge2VtYWlsLCBwYXNzd29yZH07XHJcblxyXG4gICAgICAgIGlmIChzZWxlY3RvckNzcy5pc0xvZ2luSW5zdGFncmFtKSB7XHJcbiAgICAgICAgICAgIC8vIHRvZG86IGRlbGV0ZSBtZVxyXG4gICAgICAgICAgICAvLyBhZGRJbnN0YWdyYW1BY2NvdW50KHt1c2VybmFtZTogJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cInVzZXJuYW1lXCJdJykudmFsKCksIHBhc3N3b3JkfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGVtYWlsLnZhbCgkZW1haWwudmFsKCkudG9Mb2NhbGVMb3dlckNhc2UoKSk7XHJcbiAgICAgICAgICAgIHVzZXJMb2dpbkhlYWRlcihfZm9ybURhdGEpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgUHViU3ViLnB1Ymxpc2goQ09OU1QuZXZlbnRzLlVTRVJfTE9HR0VELCAnbG9naW4nKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBsb2dPdXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb29raWVTdG9yYWdlLnJlbW92ZShDT05TVC5jb29raWVTdG9yYWdlLnRva2VuKTtcclxuICAgICAgICBQdWJTdWIucHVibGlzaChDT05TVC5ldmVudHMuVVNFUl9MT0dPVVQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBiaW5kRXZlbnRzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3QgJHNob3dMb2dpbkJveEJ0bklkID0gJChfc2hvd0xvZ2luQm94QnRuSWQpO1xyXG4gICAgICAgIGNvbnN0ICRsb2dpbkJveCA9ICQoX2xvZ2luQm94KTtcclxuICAgICAgICBjb25zdCBvcGVuZWRDbGFzcyA9ICdkLWJsb2NrJztcclxuICAgICAgICBjb25zdCBjbG9zZUNsYXNzID0gJ2Qtbm9uZSc7XHJcblxyXG4gICAgICAgICRzaG93TG9naW5Cb3hCdG5JZC5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc2VsZWN0b3JDc3MuaXNMb2dpbkluc3RhZ3JhbSkge1xyXG4gICAgICAgICAgICAgICAgJGxvZ2luQm94LmNzcyh7J3RvcCc6IDAsICdyaWdodCc6IDB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnYmctbGlnaHQgYm9yZGVyIG10LTUgbXgtYXV0byBwb3NpdGlvbi1hYnNvbHV0ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICRsb2dpbkJveC5hZGRDbGFzcyhvcGVuZWRDbGFzcykucmVtb3ZlQ2xhc3MoY2xvc2VDbGFzcyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0ICRidXR0b25TdWJtaXQgPSAkKF9idXR0b25TdWJtaXRJZCksXHJcbiAgICAgICAgICAgIGNzc1ZhbGlkYXRpb25DbGFzcyA9ICdmb3JtLXZhbGlkYXRpb24nO1xyXG5cclxuICAgICAgICAkYnV0dG9uU3VibWl0Lm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc3QgZm9ybSA9ICRmb3JtLmdldCgwKTtcclxuICAgICAgICAgICAgLy8gY29uc3QgdmFsaWRhdG9yID0gbmV3IFZhbGlkYXRvcigkZm9ybSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbGlkYXRvci52YWxpZGF0ZSgpKTtcclxuICAgICAgICAgICAgaWYgKGZvcm0uY2hlY2tWYWxpZGl0eSgpICYmIHZpZXdVdGlscy5pc0VtYWlsKCRlbWFpbC52YWwoKSkpIHtcclxuICAgICAgICAgICAgICAgIHN1Ym1pdEZvcm0oKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIEhpZ2hsaWdodCBlcnJvcnNcclxuICAgICAgICAgICAgICAgIGlmIChmb3JtLnJlcG9ydFZhbGlkaXR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJGZvcm0uYWRkQ2xhc3MoY3NzVmFsaWRhdGlvbkNsYXNzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcubmF2LWxpbmsuanNfbG9nT3V0Jykub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBsb2dPdXQoKTtcclxuICAgICAgICAgICAgJChlLnRhcmdldCkucGFyZW50KCkuaGlkZSgpO1xyXG4gICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKCR0ZXh0QXJlYURlc2NyaXB0aW9uLCAnTG9nZ2VkIG91dCcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBQdWJTdWIuc3Vic2NyaWJlKENPTlNULmV2ZW50cy5VU0VSX0xPR09VVCwgKG1zZykgPT4ge1xyXG4gICAgICAgICAgICAkKENPTlNULnVpU2VsZWN0b3JzLmhlYWRlck5hdkxvZ2luQnRuKS5hZGRDbGFzcyhvcGVuZWRDbGFzcykucmVtb3ZlQ2xhc3MoY2xvc2VDbGFzcyk7IC8vIC5zaG93KCk7XHJcbiAgICAgICAgICAgICQoQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyUmVnQnRuKS5hZGRDbGFzcyhvcGVuZWRDbGFzcykucmVtb3ZlQ2xhc3MoY2xvc2VDbGFzcyk7XHJcbiAgICAgICAgICAgICQoJy5uYXYtbGluay5qc19sb2dPdXQnKS5hZGRDbGFzcyhjbG9zZUNsYXNzKS5yZW1vdmVDbGFzcyhvcGVuZWRDbGFzcyk7IC8vIC5oaWRlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9yTG9naW5TdGF0ZSA9ICcuanNfbWVzc2FnZV9sb2dnZWQtLXRleHQnO1xyXG4gICAgICAgICAgICAkKHNlbGVjdG9yTG9naW5TdGF0ZSkudGV4dCgn0JLRiyDQstGL0YjQu9C4INC40Lcg0LDQutC60LDRg9C90YLQsCcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXNMb2dpbkJ0bkNsaWNrID0gJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJ25hdi5uYXZiYXInKS5maW5kKCRsb2dpbkJveCkubGVuZ3RoO1xyXG4gICAgICAgICAgICBjb25zdCBpc0FkZEluc3RhZ3JhbUJ0bkNsaWNrZWQgPSAkKGV2ZW50LnRhcmdldCkuYXR0cignaWQnKSA9PT0gQ09OU1QudWlTZWxlY3RvcnMuaW5zdGFncmFtLmFkZEFjY291bnRCdG5JZDtcclxuXHJcbiAgICAgICAgICAgIGlmICghaXNMb2dpbkJ0bkNsaWNrICYmICRsb2dpbkJveC5oYXNDbGFzcyhvcGVuZWRDbGFzcykgJiYgIWlzQWRkSW5zdGFncmFtQnRuQ2xpY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgJGxvZ2luQm94LmFkZENsYXNzKGNsb3NlQ2xhc3MpLnJlbW92ZUNsYXNzKG9wZW5lZENsYXNzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgICAgIGJpbmRFdmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGluaXRcclxuICAgIH07XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uanMiLCJpbXBvcnQgTWV0ZW9yRW1vamkgZnJvbSAnbWV0ZW9yLWVtb2ppJztcclxuLy8gaW1wb3J0IHFxIGZyb20gJ2ZpbmUtdXBsb2FkZXInOyAvL3RvZG86IGZpbmUtdXBsb2FkZVxyXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdXNlcic7XHJcbmltcG9ydCBVc2VyQ29udmVyc2F0aW9uIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9hcGktdXNlci1kaXJlY3QnO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvc3Bpbm5lcic7XHJcblxyXG5jb25zdCB0b2tlbiA9IFVzZXIuZ2V0VG9rZW4oKTtcclxuY29uc3QgJG1zZ0xpc3QgPSAkKCcubWVzc2FnZXMtbGlzdCcpO1xyXG5sZXQgdXBkYXRlSW50ZXJ2YWwgPSAnJztcclxuXHJcbmZ1bmN0aW9uIGlzSW5NZXNzYWdlUGFnZSgpIHtcclxuICAgIGNvbnN0ICRtc2dMaXN0ID0gJCgnLm1lc3NhZ2VzLWxpc3QnKTtcclxuICAgIGNvbnN0ICR1c2VyTGlzdCA9ICQoJy5tZXNzYWdlcy11c2VyLWxpc3QnKTtcclxuICAgIHJldHVybiAhISRtc2dMaXN0Lmxlbmd0aCAmJiAhISR1c2VyTGlzdC5sZW5ndGg7XHJcbn1cclxuJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xyXG4gICAgaWYgKCFpc0luTWVzc2FnZVBhZ2UoKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gICAgY29uc3QgbSA9IG5ldyBNZXRlb3JFbW9qaSgpO1xyXG4gICAgY29uc3QgJHBpY2tlciA9ICQoJ3RleHRhcmVhW2RhdGEtbWV0ZW9yLWVtb2ppPVwidHJ1ZVwiXSB+IGRpdicpO1xyXG4gICAgY29uc3Qgc3R5bGUgPSAkcGlja2VyLmF0dHIoJ3N0eWxlJyk7XHJcbiAgICBjb25zdCBzdHlsZU5ldyA9IHN0eWxlLnJlcGxhY2UoJ3RvcDogMzBweDsnLCAndG9wOiAtMjEwcHg7Jyk7XHJcbiAgICAkcGlja2VyLmF0dHIoJ3N0eWxlJywgc3R5bGVOZXcpO1xyXG5cclxuICAgIC8qXHJcbiAgICAvL3RvZG86IGZpbmUtdXBsb2FkZVxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXHJcbiAgICBjb25zdCByZXN0cmljdGVkVXBsb2FkZXIgPSBuZXcgcXEuRmluZVVwbG9hZGVyKHtcclxuICAgICAgICBlbGVtZW50OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmluZS11cGxvYWRlci12YWxpZGF0aW9uJyksXHJcbiAgICAgICAgdGVtcGxhdGU6ICdxcS10ZW1wbGF0ZS12YWxpZGF0aW9uJyxcclxuICAgICAgICByZXF1ZXN0OiB7XHJcbiAgICAgICAgICAgIGVuZHBvaW50OiAnL3NlcnZlci91cGxvYWRzJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGh1bWJuYWlsczoge1xyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcnM6IHtcclxuICAgICAgICAgICAgICAgIHdhaXRpbmdQYXRoOiAnaHR0cHM6Ly9maW5ldXBsb2FkZXIuY29tL3NvdXJjZS9wbGFjZWhvbGRlcnMvd2FpdGluZy1nZW5lcmljLnBuZycsIC8vICcvc291cmNlL3BsYWNlaG9sZGVycy93YWl0aW5nLWdlbmVyaWMucG5nJyxcclxuICAgICAgICAgICAgICAgIG5vdEF2YWlsYWJsZVBhdGg6ICdodHRwczovL2ZpbmV1cGxvYWRlci5jb20vc2VydmVyL3dhaXRpbmctZ2VuZXJpYy5wbmcnIC8vICcvc291cmNlL3BsYWNlaG9sZGVycy9ub3RfYXZhaWxhYmxlLWdlbmVyaWMucG5nJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgICAgICAgIGFsbG93ZWRFeHRlbnNpb25zOiBbJ2pwZWcnLCAnanBnJywgJ3R4dCddLFxyXG4gICAgICAgICAgICBpdGVtTGltaXQ6IDMsXHJcbiAgICAgICAgICAgIHNpemVMaW1pdDogNTAwICogMTAyNFxyXG4gICAgICAgIH1cclxuICAgIH0pOyovXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gZmlsbExpc3QoJGxpc3QsIGRhdGFBcnJheSkge1xyXG4gICAgY29uc3QgaXRlbXMgPSBkYXRhQXJyYXk7XHJcbiAgICBjb25zdCBjTGlzdCA9ICRsaXN0O1xyXG4gICAgLy8gY29uc3QgZGVmYXVsdEF2YXRhclNyYyA9ICdodHRwczovL2kuaW1ndXIuY29tL2pOTlQ0TEUucG5nJztcclxuICAgIGNvbnN0IGluc2VydE1zZyA9ICh2YWx1ZSwgdHlwZSwgY3NzQ2xzKSA9PiB7XHJcbiAgICAgICAgbGV0IHN0ciA9ICcnO1xyXG4gICAgICAgIHN3aXRjaCAodHlwZS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3Bob3RvJzpcclxuICAgICAgICAgICAgICAgIHN0ciA9IGA8ZGl2IGNsYXNzPVwiY2hhdC1pbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7dmFsdWV9XCIgYWx0PVwiQ29udGVudCBJbWFnZVwiIGNsYXNzPVwiY29udGVudC1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+YDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdsaW5rJzpcclxuICAgICAgICAgICAgICAgIHN0ciA9IGA8ZGl2IGNsYXNzPVwiY2hhdC1pbWdcIj5cclxuICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIke3ZhbHVlfVwiPiR7dmFsdWV9PC9hPmA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDogc3RyID0gYDxkaXYgY2xhc3M9XCJjaGF0LXRleHRcIiA+JHt2YWx1ZX08L2Rpdj5gO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RyO1xyXG4gICAgfTtcclxuICAgIGNMaXN0LmVtcHR5KCkuYWRkQ2xhc3MoJ2JvcmRlci1saWdodC1jb2xvcicpO1xyXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBpdGVtO1xyXG4gICAgICAgIC8vIGNvbnN0IGNoZWNrcG9pbnQgPSBpdGVtLmNoZWNrcG9pbnQgfHwgaXRlbTtcclxuXHJcbiAgICAgICAgaWYgKG1lc3NhZ2Uuc2lkZS50b0xvd2VyQ2FzZSgpID09PSAnbGVmdCcpIHtcclxuICAgICAgICAgICAgJChgPGxpIGNsYXNzPVwiY2hhdC1pdGVtIGNoYXQtaXRlbS1sZWZ0XCIgdmFsdWU9XCIke21lc3NhZ2UudmFsdWV9XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAkeyhtZXNzYWdlWydwcm9maWxlX3BpY191cmwnXSlcclxuICAgICAgICAgICAgICAgICAgICA/IGA8ZGl2IGNsYXNzPVwiY2hhdC1pbWctYm94XCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke21lc3NhZ2VbJ3Byb2ZpbGVfcGljX3VybCddfVwiIGFsdD1cIlVzZXIgQXZhdGFyXCIgY2xhc3M9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjaGF0LXVzZXJuYW1lIHRleHQtbXV0ZWRcIj4ke21lc3NhZ2UudXNlcm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICR7aW5zZXJ0TXNnKG1lc3NhZ2UudmFsdWUsIG1lc3NhZ2UudHlwZSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJjaGF0LXRpbWUtdGV4dFwiPiR7VXNlckNvbnZlcnNhdGlvbi5nZXRGb3JtYXR0ZWREYXRlVXRpbChtZXNzYWdlLnRpbWVzdGFtcCl9PC9zbWFsbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPmApLmFwcGVuZFRvKGNMaXN0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKGA8bGkgY2xhc3M9XCJjaGF0LWl0ZW0ganVzdGlmeS1jb250ZW50LWVuZCBjaGF0LWl0ZW0tcmlnaHRcIiB2YWx1ZT1cIiR7bWVzc2FnZS52YWx1ZX1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAke2luc2VydE1zZyhtZXNzYWdlLnZhbHVlLCBtZXNzYWdlLnR5cGUpfVxyXG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInB1bGwtcmlnaHQgY2hhdC10aW1lLXRleHRcIj4ke1VzZXJDb252ZXJzYXRpb24uZ2V0Rm9ybWF0dGVkRGF0ZVV0aWwobWVzc2FnZS50aW1lc3RhbXApfTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+YCkuYXBwZW5kVG8oY0xpc3QpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaWxsVXNlckxpc3QoJGxpc3QsIGRhdGFBcnJheSkge1xyXG4gICAgY29uc3QgaXRlbXMgPSBkYXRhQXJyYXkubWV0YTtcclxuICAgIGNvbnN0IGNMaXN0ID0gJGxpc3Q7XHJcbiAgICBjb25zdCBjb252ZXJzYXRpb25EZXRhaWwgPSBmdW5jdGlvbihpdGVtcykge1xyXG4gICAgICAgIGxldCB0cGwgPSAnJztcclxuICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICB0cGwgKz0gYDxpbWcgc3JjPVwiJHtpdGVtWydwcm9maWxlX3BpY191cmwnXX1cIiBjbGFzcz1cIm1lZGlhLXBob3RvIG1yLTEgbWVkaWEtcGhvdG8tLWdyb3VwXCIgc3R5bGU9XCJ3aWR0aDogMjRweDtcIj5gO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdHBsICs9IGA8aW1nIHNyYz1cIiR7aXRlbVsncHJvZmlsZV9waWNfdXJsJ119XCIgY2xhc3M9XCJtZWRpYS1waG90byBtci0xXCIgc3R5bGU9XCJ3aWR0aDogMjRweDtcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7aXRlbS51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgIDwvaDU+YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChpdGVtcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIHRwbCArPSAnPGg1IGNsYXNzPVwidGl0bGVcIj7Qk9GA0YPQv9C+0LLQvtC5INGH0LDRgjwvaDU+JztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRwbDtcclxuICAgIH07XHJcbiAgICBjb25zdCBhZGRDb252ZXJzYXRpb25zID0gZnVuY3Rpb24oY29udmVyc2F0aW9ucykge1xyXG4gICAgICAgIGxldCB0cGwgPSAnJztcclxuICAgICAgICBjb252ZXJzYXRpb25zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgdHBsICs9IGA8ZGl2IGNsYXNzPVwibWVkaWEgcC0xXCIgZGF0YS1jb252ZXJzYXRpb24taWQ9XCIke2l0ZW0uaWR9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtjb252ZXJzYXRpb25EZXRhaWwoaXRlbS50byl9XHJcbiAgICAgICAgICAgICAgICAgICAgJHsoaXRlbVsnbGFzdF9tZXNzYWdlJ10gJiYgKHBhcnNlSW50KGl0ZW1bJ2xhc3RfbWVzc2FnZSddLmxlbmd0aCwgMTApKSA+IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYDxwIGNsYXNzPVwic3VtbWFyeSAke2l0ZW1bJ2lzX3VucmVhZCddID8gJ2ZvbnQtd2VpZ2h0LWJvbGQnIDogJ3RleHQtbXV0ZWQnfVwiPiR7aXRlbVsnbGFzdF9tZXNzYWdlJ119PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke2l0ZW1bJ2lzX3VucmVhZCddID8gJzxzcGFuIGNsYXNzPVwic3VtbWFyeS1kb3RcIj48L3NwYW4+JyA6ICcnfWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+YDtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdHBsO1xyXG4gICAgfTtcclxuICAgIGNMaXN0LmVtcHR5KCkuYWRkQ2xhc3MoJ2JvcmRlci1saWdodC1jb2xvcicpO1xyXG4gICAgLy8gdG9kbzogZml4IGhhcmQtY29kZSAgaW1nIHNyYz1cImh0dHBzOi8vaS5pbWd1ci5jb20vak5OVDRMRS5wbmdcIlxyXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaWR4KSA9PiB7XHJcbiAgICAgICAgJChgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI2NvbGxhcHNlLSR7aWR4fVwiIGRhdGEtdXNlcm5hbWU9XCIke2l0ZW0udXNlcm5hbWV9XCIgXHJcbiAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwidHJ1ZVwiIGFyaWEtY29udHJvbHM9XCJjb2xsYXBzZS0ke2lkeH1cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhXCIgaWQ9XCJoZWFkaW5nLSR7aWR4fVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1yLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaS5pbWd1ci5jb20vak5OVDRMRS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWVkaWEtcGhvdG9cIj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICR7KGl0ZW1bJ3VucmVhZF9jb252ZXJzYXRpb25zJ10gPiAwKSA/IGA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLXNlY29uZGFyeSBwb3NpdGlvbi1hYnNvbHV0ZSBwLTJcIj4ke2l0ZW1bJ3VucmVhZF9jb252ZXJzYXRpb25zJ119PC9zcGFuPmAgOiAnJ31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHtpdGVtLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb2xsYXBzZS0ke2lkeH1cIiBjbGFzcz1cImNvbGxhcHNlXCIgYXJpYS1sYWJlbGxlZGJ5PVwiaGVhZGluZy0ke2lkeH1cIiBkYXRhLXBhcmVudD1cIiNhY2NvcmRpb25cIj5cclxuICAgICAgICAgICAgICAgICR7YWRkQ29udmVyc2F0aW9ucyhpdGVtLmNvbnZlcnNhdGlvbnMsIGlkeCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPmApLmFwcGVuZFRvKGNMaXN0KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRIYW5kbGVycygpIHtcclxuICAgIGZ1bmN0aW9uIGdldEFuZEZpbGxDb252ZXJzYXRpb24odXNlcm5hbWUsIGNvbnZlcnNhdGlvbklkLCBpc1Njcm9sbERvd24pIHtcclxuICAgICAgICBVc2VyQ29udmVyc2F0aW9uLmdldE1ldGFkYXRhRGV0YWlsQ29udmVyc2F0aW9uKHRva2VuLCB7dXNlcm5hbWUsIGNvbnZlcnNhdGlvbklkfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGZpbGxMaXN0KCRtc2dMaXN0LCByZXN1bHQuZGF0YS5tZXRhLm1lc3NhZ2VzKTtcclxuICAgICAgICAgICAgU3Bpbm5lci5yZW1vdmUoKTtcclxuICAgICAgICAgICAgJCgnLmpzX3NlbmQtbWVzc2FnZS1ib3gnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgICAgICQoJy5tZXNzYWdlcy1saXN0JykuYXR0cignZGF0YS1jb252ZXJzYXRpb24nLCBKU09OLnN0cmluZ2lmeSh7dXNlcm5hbWUsIGNvbnZlcnNhdGlvbklkfSkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzU2Nyb2xsRG93bikge1xyXG4gICAgICAgICAgICAgICAgJG1zZ0xpc3QuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAkbXNnTGlzdFswXS5zY3JvbGxIZWlnaHQgLSAkbXNnTGlzdFswXS5jbGllbnRIZWlnaHRcclxuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgJCgnI3NlbmRNZXNzYWdlQnV0dG9uJykub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCAkdGV4dEFyZWEgPSAkKCcjc2VuZE1lc3NhZ2VUZXh0QXJlYScpO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gJHRleHRBcmVhLnZhbCgpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJEYXRhID0gJCgnLm1lc3NhZ2VzLWxpc3QnKS5kYXRhKCdjb252ZXJzYXRpb24nKTtcclxuICAgICAgICBjb25zdCB7dXNlcm5hbWUsIGNvbnZlcnNhdGlvbklkfSA9IHVzZXJEYXRhO1xyXG4gICAgICAgIFNwaW5uZXIuYWRkKCQoZS50YXJnZXQpLCAnc3Bpbm5lci1ib3gtLXNlbmRNc2cnKTtcclxuICAgICAgICBVc2VyQ29udmVyc2F0aW9uLnBvc3RNZXRhZGF0YURldGFpbENvbnZlcnNhdGlvbih0b2tlbiwge3VzZXJuYW1lLCBjb252ZXJzYXRpb25JZCwgdmFsdWV9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMuc3RhdGUgPT09ICdvaycpIHtcclxuICAgICAgICAgICAgICAgIGdldEFuZEZpbGxDb252ZXJzYXRpb24odXNlcm5hbWUsIGNvbnZlcnNhdGlvbklkKTtcclxuICAgICAgICAgICAgICAgICR0ZXh0QXJlYS52YWwoJycpO1xyXG4gICAgICAgICAgICAgICAgU3Bpbm5lci5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmxpc3QtZ3JvdXAtaXRlbSAuY29sbGFwc2UnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBjb25zdCB1c2VybmFtZSA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5saXN0LWdyb3VwLWl0ZW0nKS5kYXRhKCd1c2VybmFtZScpO1xyXG4gICAgICAgIGNvbnN0IGNvbnZlcnNhdGlvbklkID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLm1lZGlhJykuZGF0YSgnY29udmVyc2F0aW9uLWlkJyk7XHJcbiAgICAgICAgU3Bpbm5lci5hZGQoJCgnI21haW5DaGF0UGFydCcpLCAnbXktNSBweS01Jyk7XHJcbiAgICAgICAgZ2V0QW5kRmlsbENvbnZlcnNhdGlvbih1c2VybmFtZSwgY29udmVyc2F0aW9uSWQsIHRydWUpO1xyXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgZ2V0QW5kRmlsbENvbnZlcnNhdGlvbih1c2VybmFtZSwgY29udmVyc2F0aW9uSWQpO1xyXG4gICAgICAgIH0sIHVwZGF0ZUludGVydmFsKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIGNvbnN0ICR1c2VyTGlzdCA9ICQoJy5tZXNzYWdlcy11c2VyLWxpc3QnKTtcclxuICAgIC8vIGNoZWNrIHdlIGFyZSBpbiBjb3JyZWN0IHBhZ2UgKG1lc3NhZ2VzKVxyXG4gICAgaWYgKCFpc0luTWVzc2FnZVBhZ2UoKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtZXRhZGF0YSA9IFVzZXJDb252ZXJzYXRpb24uZ2V0TWV0YWRhdGEodG9rZW4pO1xyXG4gICAgbWV0YWRhdGEudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgZmlsbFVzZXJMaXN0KCR1c2VyTGlzdCwgcmVzdWx0LmRhdGEpO1xyXG4gICAgICAgIGlmIChyZXN1bHQuZGF0YS5zZXR0aW5ncyAmJiByZXN1bHQuZGF0YS5zZXR0aW5ncy5pbnZva2VfaW5fbWlsbGlzKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZUludGVydmFsID0gcmVzdWx0LmRhdGEuc2V0dGluZ3MuaW52b2tlX2luX21pbGxpcztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBhZGRIYW5kbGVycygpO1xyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL21lc3NhZ2VzL21lc3NhZ2VzLmpzIiwiLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IFB1YlN1YiBmcm9tICdwdWJzdWItanMnOyAvLyBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9wdWJzdWItanNcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3VzZXInO1xyXG5pbXBvcnQgY29va2llU3RvcmFnZSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29va2llJztcclxuaW1wb3J0IHtDT05TVH0gZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2NvbnN0cyc7XHJcbmltcG9ydCB2aWV3VXRpbHMgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3ZpZXcnO1xyXG5cclxuY29uc3Qgc2VsZWN0b3JDbHMgPSB7XHJcbiAgICBmb3JtOiAnLmF1dGgucmVnaXN0ZXIgLmZvcm0tc2lnbmluJyxcclxuICAgIHN1Ym1pdEJ0bjogJ1t0eXBlPVwic3VibWl0XCJdJ1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWdpc3RlckZvcm0ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy51c2VyID0gVXNlcjtcclxuICAgICAgICB0aGlzLiRmb3JtID0gJChzZWxlY3RvckNscy5mb3JtKTtcclxuICAgICAgICB0aGlzLiRlbWFpbCA9IHRoaXMuJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cIm1haWxcIl0nKTtcclxuICAgICAgICB0aGlzLiR0ZXh0QXJlYURlc2NyaXB0aW9uID0gJCgnI2Rlc2NyaXB0aW9uJyk7XHJcbiAgICAgICAgdGhpcy5mb3JtRGF0YSA9IHsnZW1haWwnOiAndGVzdDFfZW1haWxAbS5ydScsICdwYXNzd29yZCc6ICdwYXNzd29yZCd9O1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgaWYgKCQoJy5hdXRoLnJlZ2lzdGVyJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdWJtaXRGb3JtKGZvcm1EYXRhT2JqKSB7XHJcbiAgICAgICAgY29uc3QgZW1haWwgPSB0aGlzLiRlbWFpbC52YWwoKTtcclxuICAgICAgICBjb25zdCAkcGFzc3dvcmQgPSB0aGlzLiRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJwYXNzXCJdJyksXHJcbiAgICAgICAgICAgICRwYXNzd29yZENvbmZpcm0gPSB0aGlzLiRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJwYXNzLWNvbmZpcm1cIl0nKSxcclxuICAgICAgICAgICAgcGFzc3dvcmQgPSB0aGlzLiRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJwYXNzXCJdJykudmFsKCksXHJcbiAgICAgICAgICAgIHBhc3N3b3JkQ29uZmlybSA9IHRoaXMuJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cInBhc3MtY29uZmlybVwiXScpLnZhbCgpO1xyXG5cclxuICAgICAgICBpZiAocGFzc3dvcmRDb25maXJtICE9PSBwYXNzd29yZCkge1xyXG4gICAgICAgICAgICAkcGFzc3dvcmQuYWRkQ2xhc3MoJ2lucHV0LWVycm9yJyk7XHJcbiAgICAgICAgICAgICRwYXNzd29yZENvbmZpcm0uYWRkQ2xhc3MoJ2lucHV0LWVycm9yJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy4kZW1haWwudmFsKHRoaXMuJGVtYWlsLnZhbCgpLnRvTG9jYWxlTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgIHRoaXMuZm9ybURhdGEgPSBmb3JtRGF0YU9iaiB8fCB7ZW1haWwsIHBhc3N3b3JkfTtcclxuXHJcbiAgICAgICAgdGhpcy51c2VyLnJlZ2lzdGVyKHRoaXMuZm9ybURhdGEpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZGF0YSAmJiByZXN1bHQuZGF0YS50b2tlbikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBzYXZlIHRoZSBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgY29va2llU3RvcmFnZS5zZXQoQ09OU1QuY29va2llU3RvcmFnZS5lbWFpbENvbmZpcm1lZCwgJ2ZhbHNlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvb2tpZVN0b3JhZ2Uuc2V0KENPTlNULmNvb2tpZVN0b3JhZ2UudG9rZW4sIHJlc3VsdC5kYXRhLnRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmVxdWVzdCBzdWNjZWVkZWQgd2l0aCBKU09OIHJlc3BvbnNlJywgcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICBQdWJTdWIucHVibGlzaChDT05TVC5ldmVudHMuVVNFUl9MT0dHRUQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UodGhpcy4kdGV4dEFyZWFEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5tZXNzYWdlIHx8ICdSZWdpc3RlciBhbmQgTG9naW4gc3VjY3Nlc3MnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSh0aGlzLiR0ZXh0QXJlYURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLm1lc3NhZ2UgfHwgJ25vIHJlc3VsdC5kYXRhIGZvdW5kJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKHRoaXMuJHRleHRBcmVhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMuc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5sb2dpbi1ib3gnKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlcXVlc3QgZmFpbGVkJywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSh0aGlzLiR0ZXh0QXJlYURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RvIHNvbWV0aGluZycpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG4gICAgICAgIGNvbnN0IHJlZ2lzdGVyQm94ID0gQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyUmVnQm94OyAvLyAnbmF2IC5yZWdpc3Rlci1ib3gnO1xyXG4gICAgICAgIGNvbnN0IG9wZW5lZENsYXNzID0gJ2QtYmxvY2snO1xyXG4gICAgICAgIGNvbnN0IGNsb3NlQ2xhc3MgPSAnZC1ub25lJztcclxuICAgICAgICBjb25zdCAkYnRuID0gJChzZWxlY3RvckNscy5zdWJtaXRCdG4pLFxyXG4gICAgICAgICAgICBjc3NWYWxpZGF0aW9uQ2xhc3MgPSAnZm9ybS12YWxpZGF0aW9uJztcclxuXHJcbiAgICAgICAgJGJ0bi5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBmb3JtID0gdGhpcy4kZm9ybS5nZXQoMCk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghJGJ0bi5pcygnOmRpc2FibGVkJykpIHtcclxuICAgICAgICAgICAgICAgIGlmIChmb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICRidG4uYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdEZvcm0oKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSGlnaGxpZ2h0IGVycm9yc1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmb3JtLnJlcG9ydFZhbGlkaXR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0ucmVwb3J0VmFsaWRpdHkoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZm9ybS5hZGRDbGFzcyhjc3NWYWxpZGF0aW9uQ2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpc1JlZ0J0bkNsaWNrID0gJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJ25hdi5uYXZiYXInKS5maW5kKCcucmVnaXN0ZXItYm94JykubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFpc1JlZ0J0bkNsaWNrICYmICQocmVnaXN0ZXJCb3gpLmhhc0NsYXNzKG9wZW5lZENsYXNzKSkge1xyXG4gICAgICAgICAgICAgICAgJChyZWdpc3RlckJveCkuYWRkQ2xhc3MoY2xvc2VDbGFzcykucmVtb3ZlQ2xhc3Mob3BlbmVkQ2xhc3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9yZWdpc3Rlci1mb3JtL3JlZ2lzdGVyLWZvcm0uanMiLCIvLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQge0NPTlNUfSBmcm9tICcuL2NvbnN0cyc7XHJcbmltcG9ydCBOZXR3b3JrIGZyb20gJy4vbmV0d29yayc7XHJcbmltcG9ydCBDb29raWVTdG9yYWdlIGZyb20gJy4vY29va2llJztcclxuXHJcbmNsYXNzIFVzZXJDb252ZXJzYXRpb24ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubmV0d29yayA9IG5ldyBOZXR3b3JrKCk7XHJcbiAgICAgICAgdGhpcy5jb29raWVTdG9yYWdlID0gQ29va2llU3RvcmFnZTtcclxuICAgICAgICB0aGlzLnNldHRpbmdQb3N0ID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgaXNMb2dnZWRJbigpIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLmdldFRva2VuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNFbWFpbENvbmZpcm1lZCgpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuY29va2llU3RvcmFnZS5nZXQoQ09OU1QuY29va2llU3RvcmFnZS5lbWFpbENvbmZpcm1lZCkgPT09ICdjb25maXJtZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUb2tlbigpIHtcclxuICAgICAgICBjb25zdCBjb29raWVUb2tlbiA9IHRoaXMuY29va2llU3RvcmFnZS5nZXQoQ09OU1QuY29va2llU3RvcmFnZS50b2tlbik7XHJcbiAgICAgICAgcmV0dXJuIGNvb2tpZVRva2VuO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1ldGFkYXRhKHRva2VuLCBjYkVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChgJHtDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1EaXJlY3RfZ2V0TWV0YURhdGEnKX1gLCB7aGVhZGVyczoge3Rva2VufX0sIGNiRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1ldGFkYXRhRGV0YWlsQ29udmVyc2F0aW9uKHRva2VuLCBkZXRhaWxzLCBjYkVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChgJHtDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1EaXJlY3RfZ2V0TWV0YURhdGEnKX0vJHtkZXRhaWxzLnVzZXJuYW1lfS8ke2RldGFpbHMuY29udmVyc2F0aW9uSWR9YCxcclxuICAgICAgICAgICAge2hlYWRlcnM6IHt0b2tlbn19LCBjYkVycm9yKTtcclxuICAgIH1cclxuICAgIHBvc3RNZXRhZGF0YURldGFpbENvbnZlcnNhdGlvbih0b2tlbiwgZGV0YWlscywgY2JFcnJvcikge1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSB7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsndmFsdWUnOiBkZXRhaWxzLnZhbHVlfSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QuaGVhZGVycyxcclxuICAgICAgICAgICAgICAgICd0b2tlbic6IHRoaXMuZ2V0VG9rZW4oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KGAke0NPTlNULmdldFBhdGgoJ2luc3RhZ3JhbURpcmVjdF9wb3N0TWVzc2FnZScpfS8ke2RldGFpbHMudXNlcm5hbWV9LyR7ZGV0YWlscy5jb252ZXJzYXRpb25JZH0vdGV4dGAsXHJcbiAgICAgICAgICAgIHNldHRpbmcsIGNiRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEZvcm1hdHRlZERhdGVVdGlsKHRTdGFtcCwgc2hvd0Z1bGxUaW1lKSB7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRTdGFtcCk7XHJcblxyXG4gICAgICAgIGxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XHJcbiAgICAgICAgbGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIGxldCBob3VyID0gZGF0ZS5nZXRIb3VycygpO1xyXG4gICAgICAgIGxldCBtaW4gPSBkYXRlLmdldE1pbnV0ZXMoKTtcclxuICAgICAgICBsZXQgc2VjID0gZGF0ZS5nZXRTZWNvbmRzKCk7XHJcblxyXG4gICAgICAgIG1vbnRoID0gKG1vbnRoIDwgMTAgPyAnMCcgOiAnJykgKyBtb250aDtcclxuICAgICAgICBkYXkgPSAoZGF5IDwgMTAgPyAnMCcgOiAnJykgKyBkYXk7XHJcbiAgICAgICAgaG91ciA9IChob3VyIDwgMTAgPyAnMCcgOiAnJykgKyBob3VyO1xyXG4gICAgICAgIG1pbiA9IChtaW4gPCAxMCA/ICcwJyA6ICcnKSArIG1pbjtcclxuICAgICAgICBzZWMgPSAoc2VjIDwgMTAgPyAnMCcgOiAnJykgKyBzZWM7XHJcblxyXG4gICAgICAgIGxldCBzdHIgPSAnJztcclxuICAgICAgICBpZiAoIXNob3dGdWxsVGltZSkge1xyXG4gICAgICAgICAgICBzdHIgPSBgJHtob3VyfToke21pbn1gO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0ciA9IGAke2RhdGUuZ2V0RnVsbFllYXIoKX0tJHttb250aH0tJHtkYXl9XyR7aG91cn06JHttaW59OiR7c2VjfWA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc3RyO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxubGV0IHVzZXJJbnN0YW5jZSA9IG51bGw7XHJcblxyXG5pZiAoIXVzZXJJbnN0YW5jZSkge1xyXG4gICAgdXNlckluc3RhbmNlID0gbmV3IFVzZXJDb252ZXJzYXRpb24oKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlckluc3RhbmNlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uL2pzLXNlcnZpY2VzL2FwaS11c2VyLWRpcmVjdC5qcyIsIi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbi8vIGltcG9ydCB7Q09OU1R9IGZyb20gJy4vY29uc3RzJztcclxuLy8gaW1wb3J0IE5ldHdvcmsgZnJvbSAnLi9uZXR3b3JrJztcclxuLy8gaW1wb3J0IENvb2tpZVN0b3JhZ2UgZnJvbSAnLi9jb29raWUnO1xyXG4vLyBpbXBvcnQgUHViU3ViIGZyb20gJ3B1YnN1Yi1qcyc7IC8vIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3B1YnN1Yi1qc1xyXG5cclxuLy8gY29uc3QgU1BJTk5FUl9CQVNFX1RFTVBBTEFURSA9ICdqcy91aS90cGwvc3Bpbm5lci5oYnMnO1xyXG5jb25zdCBjbGFzc2VzID0ge1xyXG4gICAgaW5saW5lOiAnZ2xvYmFsLWlubGluZS1zcGlubmVyJyxcclxuICAgIG92ZXJsYXk6ICdnbG9iYWwtb3ZlcmxheS1zcGlubmVyJyxcclxuICAgIGZpeGVkOiAnZ2xvYmFsLWZpeGVkLXNwaW5uZXInLFxyXG4gICAgYnV0dG9uOiAnZ2xvYmFsLWZvcm0tYnV0dG9uLS1sb2FkJ1xyXG59O1xyXG4vLyBjb25zdCBoYW5kbGViYXJzVHBsID0gZnVuY3Rpb24gKG5hbWUsIGRhdGEsICR0YXJnZXQpIHtcclxuLy8gICAgIC8vIHZhciBodG1sID0gdGhpcy5nZXRUZW1wbGF0ZShuYW1lKShkYXRhKTtcclxuLy8gICAgIHZhciBodG1sID0gSGFuZGxlYmFycy5jb21waWxlKHRlbXBsYXRlKTtcclxuLy9cclxuLy8gICAgIGlmICgkdGFyZ2V0KSB7XHJcbi8vICAgICAgICAgLy9mb3IgcHJldmVudGluZyB4c3NcclxuLy8gICAgICAgICAkdGFyZ2V0WzBdLmlubmVySFRNTCA9IGh0bWw7XHJcbi8vICAgICB9XHJcbi8vXHJcbi8vICAgICByZXR1cm4gaHRtbDtcclxuLy8gfTtcclxuLy8gY29uc3QgaGFuZGxlYmFycyA9IHRoaXMuZ2V0U2VydmljZSgnY29yZS50ZW1wbGF0aW5nLmhhbmRsZWJhcnMnKTtcclxuXHJcbmNsYXNzIFNwaW5uZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKF9jZmcpIHtcclxuICAgICAgICB0aGlzLmNmZyA9IF9jZmcgfHwge307XHJcbiAgICAgICAgLy8gdGhpcy4kZGVmYXVsdENvbnRhaW5lciA9ICQoJ2JvZHknKTtcclxuICAgICAgICAkLmV4dGVuZChjbGFzc2VzLCB0aGlzLmNmZy5jbGFzc2VzKTtcclxuICAgICAgICAvLyB0aGlzLl9tZWRpYXRvci5zdWJzY3JpYmUoQ09OU1QuZXZlbnRzLlNUT1BfRklYRURfU1BJTk5FUiwgdGhpcy5zdG9wRml4ZWRTcGlubmVyLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG4gICAgLy8gX21lZGlhdG9yID0gUHViU3ViO1xyXG5cclxuICAgIHN0YXJ0KCRlbCwgcHJld0Nscykge1xyXG4gICAgICAgIC8vIGlmIChhZGRPclJlbW92ZSkge1xyXG4gICAgICAgIC8vICAgICAkKCcjZm9vJykuYWRkQ2xhc3MoY2xhc3NOYW1lKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICQoJyNmb28nKS5yZW1vdmVDbGFzcyhjbGFzc05hbWUpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAkZWwuZmluZCgnaScpLnRvZ2dsZUNsYXNzKHByZXdDbHMpLmFkZENsYXNzKCdmYS1zcGluIGZhLXNwaW5uZXInKTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wKCRlbCwgbmV3Q2xzKSB7XHJcbiAgICAgICAgJGVsLmZpbmQoJ2knKS50b2dnbGVDbGFzcyhuZXdDbHMpLnJlbW92ZUNsYXNzKCdmYS1zcGluIGZhLXNwaW5uZXInKTtcclxuICAgIH1cclxuICAgIGFkZCgkZWwsIG5ld0Nscykge1xyXG4gICAgICAgIHRoaXMuJGVsID0gJGVsO1xyXG4gICAgICAgICRlbC5wcmVwZW5kKGA8ZGl2IGNsYXNzPVwic3Bpbm5lci1ib3gganVzdGlmeS1jb250ZW50LWNlbnRlciAke25ld0Nsc31cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwaW4tYW5pbWF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGRhdGEtcHJlZml4PVwiZmFyXCIgZGF0YS1pY29uPVwic3luYy1hbHRcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIGNsYXNzPVwic3ZnLWlubGluZS0tZmEgZmEtc3luYy1hbHQgZmEtdy0xNiBmYS1mdyBmYS0yeFwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTQ4My41MTUgMjguNDg1TDQzMS4zNSA4MC42NUMzODYuNDc1IDM1Ljc2NyAzMjQuNDg1IDggMjU2IDggMTIzLjIyOCA4IDE0LjgyNCAxMTIuMzM4IDguMzEgMjQzLjQ5MyA3Ljk3MSAyNTAuMzExIDEzLjQ3NSAyNTYgMjAuMzAxIDI1NmgyOC4wNDVjNi4zNTMgMCAxMS42MTMtNC45NTIgMTEuOTczLTExLjI5NEM2Ni4xNjEgMTQxLjY0OSAxNTEuNDUzIDYwIDI1NiA2MGM1NC4xNjMgMCAxMDMuMTU3IDIxLjkyMyAxMzguNjE0IDU3LjM4NmwtNTQuMTI4IDU0LjEyOWMtNy41NiA3LjU2LTIuMjA2IDIwLjQ4NSA4LjQ4NSAyMC40ODVINDkyYzYuNjI3IDAgMTItNS4zNzMgMTItMTJWMzYuOTcxYzAtMTAuNjkxLTEyLjkyNi0xNi4wNDUtMjAuNDg1LTguNDg2ek00OTEuNjk5IDI1NmgtMjguMDQ1Yy02LjM1MyAwLTExLjYxMyA0Ljk1Mi0xMS45NzMgMTEuMjk0QzQ0NS44MzkgMzcwLjM1MSAzNjAuNTQ3IDQ1MiAyNTYgNDUyYy01NC4xNjMgMC0xMDMuMTU3LTIxLjkyMy0xMzguNjE0LTU3LjM4Nmw1NC4xMjgtNTQuMTI5YzcuNTYtNy41NiAyLjIwNi0yMC40ODUtOC40ODUtMjAuNDg1SDIwYy02LjYyNyAwLTEyIDUuMzczLTEyIDEydjE0My4wMjljMCAxMC42OTEgMTIuOTI2IDE2LjA0NSAyMC40ODUgOC40ODVMODAuNjUgNDMxLjM1QzEyNS41MjUgNDc2LjIzMyAxODcuNTE2IDUwNCAyNTYgNTA0YzEzMi43NzMgMCAyNDEuMTc2LTEwNC4zMzggMjQ3LjY5LTIzNS40OTMuMzM5LTYuODE4LTUuMTY1LTEyLjUwNy0xMS45OTEtMTIuNTA3elwiIGNsYXNzPVwiXCI+PC9wYXRoPjwvc3ZnPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5gKTtcclxuICAgIH1cclxuICAgIHJlbW92ZSgpIHtcclxuICAgICAgICB0aGlzLiRlbC5maW5kKCcuc3Bpbm5lci1ib3gnKS5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZpbmRzIHNwaW5uZXJzXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9ICRjb250YWluZXJcclxuICAgICAqIEByZXR1cm4gez9qUXVlcnl9IHNwaW5uZXJzXHJcbiAgICAgKi9cclxuICAgIC8vIF9maW5kU3Bpbm5lciA9IGZ1bmN0aW9uICh0eXBlLCAkY29udGFpbmVyKSB7XHJcbiAgICAvLyAgICAgY29uc3Qgc2VsZWN0b3IgPSAnLicgKyB0eXBlO1xyXG4gICAgLy8gICAgIGxldCAkZWwgPSB0aGlzLiRkZWZhdWx0Q29udGFpbmVyO1xyXG4gICAgLy8gICAgIGlmICgkY29udGFpbmVyKSB7XHJcbiAgICAvLyAgICAgICAgICRlbCA9ICRjb250YWluZXI7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy9cclxuICAgIC8vICAgICBpZiAoJGVsLmZpbmQoc2VsZWN0b3IpLmxlbmd0aCA+IDApIHtcclxuICAgIC8vICAgICAgICAgcmV0dXJuICRlbC5maW5kKHNlbGVjdG9yKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAkZWxcclxuICAgICAqL1xyXG4gICAgLypcclxuICAgIHN0YXJ0Q29udGVudFNwaW5uZXIgPSBmdW5jdGlvbiAoJGVsKSB7XHJcbiAgICAgICAgY29uc3QgaHRtbCA9IGhhbmRsZWJhcnNUcGwoXHJcbiAgICAgICAgICAgIFNQSU5ORVJfQkFTRV9URU1QQUxBVEUsIHtcclxuICAgICAgICAgICAgICAgIGltZ1NyYzogQ1RDLlVSTFMuV0FJVElOR19JTUFHRSxcclxuICAgICAgICAgICAgICAgICdjbGFzcyc6IGNsYXNzZXMub3ZlcmxheVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAkZWwucHJlcGVuZChodG1sKTtcclxuICAgIH07XHJcblxyXG4gICAgc3RhcnRJbmxpbmVDb250ZW50U3Bpbm5lciA9IGZ1bmN0aW9uICgkZWwpIHtcclxuICAgICAgICBjb25zdCBodG1sID0gaGFuZGxlYmFyc1RwbChcclxuICAgICAgICAgICAgU1BJTk5FUl9CQVNFX1RFTVBBTEFURSwge1xyXG4gICAgICAgICAgICAgICAgaW1nU3JjOiBDVEMuVVJMUy5XQUlUSU5HX0lNQUdFLFxyXG4gICAgICAgICAgICAgICAgJ2NsYXNzJzogY2xhc3Nlcy5pbmxpbmVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgJGVsLnByZXBlbmQoaHRtbCk7XHJcbiAgICB9O1xyXG4gICAgKi9cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0YXJ0cyBnbG9iYWwgZnVsbCBwYWdlIGZpeGVkIHNwaW5uZXJcclxuICAgICAqL1xyXG4gICAgLypcclxuICAgIHN0YXJ0Rml4ZWRTcGlubmVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IHNwaW5uZXJzID0gdGhpcy5fZmluZFNwaW5uZXIoY2xhc3Nlcy5maXhlZCk7XHJcbiAgICAgICAgaWYgKCEoQ1RDLmlzRWRpdCgpIHx8IENUQy5pc0Rlc2lnbigpKSAmJiAhc3Bpbm5lcnMpIHtcclxuICAgICAgICAgICAgY29uc3QgaHRtbCA9IGhhbmRsZWJhcnNUcGwoXHJcbiAgICAgICAgICAgICAgICBTUElOTkVSX0JBU0VfVEVNUEFMQVRFLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nU3JjOiBDVEMuVVJMUy5XQUlUSU5HX0lNQUdFLFxyXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6IGNsYXNzZXMuZml4ZWRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLiRkZWZhdWx0Q29udGFpbmVyLnByZXBlbmQoaHRtbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgICovXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIHNwaW5uZXIgaWNvbiBvbiBidXR0b24gYmVmb3JlIHRoZSBidXR0b24gdGV4dFxyXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRlbFxyXG4gICAgICovXHJcbiAgICAvLyBzdGFydEJ1dHRvblNwaW5uZXIgPSBmdW5jdGlvbiAoJGVsKSB7XHJcbiAgICAvLyAgICAgJGVsLmFkZENsYXNzKGNsYXNzZXMuYnV0dG9uKTtcclxuICAgIC8vIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9wcyBzcGlubmVyc1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAkY29udGFpbmVyXHJcbiAgICAgKi9cclxuICAgIC8vIF9zdG9wU3Bpbm5lciA9IGZ1bmN0aW9uICh0eXBlLCAkY29udGFpbmVyKSB7XHJcbiAgICAvLyAgICAgY29uc3Qgc3Bpbm5lcnMgPSB0aGlzLl9maW5kU3Bpbm5lcih0eXBlLCAkY29udGFpbmVyKTtcclxuICAgIC8vICAgICBpZiAoc3Bpbm5lcnMpIHtcclxuICAgIC8vICAgICAgICAgc3Bpbm5lcnMucmVtb3ZlKCk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gJGVsXHJcbiAgICAgKi9cclxuICAgIC8vIHN0b3BDb250ZW50U3Bpbm5lciA9IGZ1bmN0aW9uICgkZWwpIHtcclxuICAgIC8vICAgICAkZWwuZmluZCgnLicgKyBjbGFzc2VzLm92ZXJsYXkpLnJlbW92ZSgpO1xyXG4gICAgLy8gfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gJGVsXHJcbiAgICAgKi9cclxuICAgIC8vIHN0b3BJbmxpbmVDb250ZW50U3Bpbm5lciA9IGZ1bmN0aW9uICgkZWwpIHtcclxuICAgIC8vICAgICAkZWwuZmluZCgnLicgKyBjbGFzc2VzLmlubGluZSkucmVtb3ZlKCk7XHJcbiAgICAvLyB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RvcHMgZ2xvYmFsIGZ1bGwgcGFnZSBmaXhlZCBzcGlubmVyXHJcbiAgICAgKi9cclxuICAgIC8vIHN0b3BGaXhlZFNwaW5uZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICAgdGhpcy5fc3RvcFNwaW5uZXIoY2xhc3Nlcy5maXhlZCk7XHJcbiAgICAvLyB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBzcGlubmVyIGljb24gZnJvbSBidXR0b25cclxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkZWxcclxuICAgICAqL1xyXG4gICAgLy8gc3RvcEJ1dHRvblNwaW5uZXIgPSBmdW5jdGlvbiAoJGVsKSB7XHJcbiAgICAvLyAgICAgJGVsLnJlbW92ZUNsYXNzKGNsYXNzZXMuYnV0dG9uKTtcclxuICAgIC8vIH07XHJcbn1cclxuXHJcbmxldCBzcGlubmVySW5zdGFuY2UgPSBudWxsO1xyXG5cclxuaWYgKCFzcGlubmVySW5zdGFuY2UpIHtcclxuICAgIHNwaW5uZXJJbnN0YW5jZSA9IG5ldyBTcGlubmVyKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNwaW5uZXJJbnN0YW5jZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy9zcGlubmVyLmpzIiwiLyogZXNsaW50LWRpc2FibGUgc29ydC12YXJzICovXHJcbi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy91c2VyJztcclxuaW1wb3J0IFB1YlN1YiBmcm9tICdwdWJzdWItanMnOyAvLyBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9wdWJzdWItanNcclxuaW1wb3J0IGNvb2tpZVN0b3JhZ2UgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2Nvb2tpZSc7XHJcbi8vIGltcG9ydCBWYWxpZGF0b3IgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2Zvcm0tdmFsaWRhdG9yJztcclxuaW1wb3J0IHZpZXdVdGlscyBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdmlldyc7XHJcbmltcG9ydCB7Q09OU1R9IGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMnO1xyXG5cclxuLy8gd2luZG93LiQgPSAkO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExvZ2luUGFnZShzZWxlY3RvckNzcykge1xyXG4gICAgY29uc3Qge19mb3JtSWQsIF9idXR0b25TdWJtaXRJZCwgX2xvZ2luQm94fSA9IHNlbGVjdG9yQ3NzO1xyXG4gICAgY29uc3QgdXNlciA9IFVzZXIsIC8vIHNlcnZpY2VcclxuICAgICAgICAkZm9ybSA9ICQoX2Zvcm1JZCksXHJcbiAgICAgICAgJGVtYWlsID0gJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cIm1haWxcIl0nKSxcclxuICAgICAgICAkdGV4dEFyZWFEZXNjcmlwdGlvbiA9ICQoJyNkZXNjcmlwdGlvbicpO1xyXG4gICAgLy8gY29uc3Qgb3BlbmVkQ2xhc3MgPSAnZC1ibG9jayc7XHJcbiAgICAvLyBjb25zdCBjbG9zZUNsYXNzID0gJ2Qtbm9uZSc7XHJcblxyXG4gICAgY29uc3QgdXNlckxvZ2luSGVhZGVyID0gKF9mb3JtRGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNiRXJyb3IgPSAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICQoX2xvZ2luQm94KS5hcHBlbmQoJzxwPnJlc3VsdC5zdGF0dXMubWVzc2FnZTwvcD4nKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gdXNlci5sb2dpbihfZm9ybURhdGEsIGNiRXJyb3IpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LmRhdGEgJiYgcmVzdWx0LmRhdGEudG9rZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzYXZlIHRoZSBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgY29va2llU3RvcmFnZS5zZXQoQ09OU1QuY29va2llU3RvcmFnZS50b2tlbiwgcmVzdWx0LmRhdGEudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5uYXYtbGluay5qc19sb2dPdXQnKS5wYXJlbnQoKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3JlcXVlc3Qgc3VjY2VlZGVkIHdpdGggSlNPTiByZXNwb25zZScsIHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSgkdGV4dEFyZWFEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5tZXNzYWdlIHx8ICdMb2dpbiBzdWNjc2VzcycpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKHRoaXMuJHRleHRBcmVhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGA8cD5zdGF0dXM6ICR7cmVzdWx0LnN0YXR1cy5zdGF0ZX08L3A+PHA+IG1lc3NhZ2U6ICR7cmVzdWx0LnN0YXR1cy5tZXNzYWdlfTwvcD5gKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UoJHRleHRBcmVhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMubWVzc2FnZSB8fCAnTG9naW4gZXJyb3InKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHN1Ym1pdEZvcm0gPSBmdW5jdGlvbihmb3JtRGF0YU9iaikge1xyXG4gICAgICAgIGNvbnN0IGVtYWlsID0gJGVtYWlsLnZhbCgpLFxyXG4gICAgICAgICAgICBwYXNzd29yZCA9ICRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJwYXNzXCJdJykudmFsKCksXHJcbiAgICAgICAgICAgIF9mb3JtRGF0YSA9IGZvcm1EYXRhT2JqIHx8IHtlbWFpbCwgcGFzc3dvcmR9O1xyXG5cclxuICAgICAgICBpZiAoc2VsZWN0b3JDc3MuaXNMb2dpbkluc3RhZ3JhbSkge1xyXG4gICAgICAgICAgICAvLyB0b2RvOiBkZWxldGUgbWVcclxuICAgICAgICAgICAgLy8gYWRkSW5zdGFncmFtQWNjb3VudCh7dXNlcm5hbWU6ICRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJ1c2VybmFtZVwiXScpLnZhbCgpLCBwYXNzd29yZH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRlbWFpbC52YWwoJGVtYWlsLnZhbCgpLnRvTG9jYWxlTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICB1c2VyTG9naW5IZWFkZXIoX2Zvcm1EYXRhKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIFB1YlN1Yi5wdWJsaXNoKENPTlNULmV2ZW50cy5VU0VSX0xPR0dFRCwgJ2xvZ2luJyk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvaW5zdGFncmFtLWludGVncmF0aW9uL2luc3RhZ3JhbS1hY2NvdW50cy5odG1sJztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBsb2dPdXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb29raWVTdG9yYWdlLnJlbW92ZShDT05TVC5jb29raWVTdG9yYWdlLnRva2VuKTtcclxuICAgICAgICBQdWJTdWIucHVibGlzaChDT05TVC5ldmVudHMuVVNFUl9MT0dPVVQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBiaW5kRXZlbnRzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gY29uc3QgJHNob3dMb2dpbkJveEJ0bklkID0gJChfc2hvd0xvZ2luQm94QnRuSWQpO1xyXG4gICAgICAgIGNvbnN0ICRsb2dpbkJveCA9ICQoX2xvZ2luQm94KTtcclxuICAgICAgICBjb25zdCBvcGVuZWRDbGFzcyA9ICdkLWJsb2NrJztcclxuICAgICAgICBjb25zdCBjbG9zZUNsYXNzID0gJ2Qtbm9uZSc7XHJcblxyXG4gICAgICAgIC8vICRzaG93TG9naW5Cb3hCdG5JZC5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGlmICghc2VsZWN0b3JDc3MuaXNMb2dpbkluc3RhZ3JhbSkge1xyXG4gICAgICAgIC8vICAgICAgICAgJGxvZ2luQm94LmNzcyh7J3RvcCc6IDAsICdyaWdodCc6IDB9KVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC5hZGRDbGFzcygnYmctbGlnaHQgYm9yZGVyIG10LTUgbXgtYXV0byBwb3NpdGlvbi1hYnNvbHV0ZScpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgICRsb2dpbkJveC5hZGRDbGFzcyhvcGVuZWRDbGFzcykucmVtb3ZlQ2xhc3MoY2xvc2VDbGFzcyk7XHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgIGNvbnN0ICRidXR0b25TdWJtaXQgPSAkKF9idXR0b25TdWJtaXRJZCksXHJcbiAgICAgICAgICAgIGNzc1ZhbGlkYXRpb25DbGFzcyA9ICdmb3JtLXZhbGlkYXRpb24nO1xyXG5cclxuICAgICAgICAkYnV0dG9uU3VibWl0Lm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc3QgZm9ybSA9ICRmb3JtLmdldCgwKTtcclxuICAgICAgICAgICAgLy8gY29uc3QgdmFsaWRhdG9yID0gbmV3IFZhbGlkYXRvcigkZm9ybSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHZpZXdVdGlscywgdmlld1V0aWxzLmlzRW1haWwoJGVtYWlsLnZhbCgpKSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZm9ybS5jaGVja1ZhbGlkaXR5KCkgJiYgdmlld1V0aWxzLmlzRW1haWwoJGVtYWlsLnZhbCgpKSkge1xyXG4gICAgICAgICAgICAgICAgc3VibWl0Rm9ybSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gSGlnaGxpZ2h0IGVycm9yc1xyXG4gICAgICAgICAgICAgICAgaWYgKGZvcm0ucmVwb3J0VmFsaWRpdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtLnJlcG9ydFZhbGlkaXR5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAkZm9ybS5hZGRDbGFzcyhjc3NWYWxpZGF0aW9uQ2xhc3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5uYXYtbGluay5qc19sb2dPdXQnKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGxvZ091dCgpO1xyXG4gICAgICAgICAgICAkKGUudGFyZ2V0KS5wYXJlbnQoKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UoJHRleHRBcmVhRGVzY3JpcHRpb24sICdMb2dnZWQgb3V0Jyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFB1YlN1Yi5zdWJzY3JpYmUoQ09OU1QuZXZlbnRzLlVTRVJfTE9HT1VULCAobXNnKSA9PiB7XHJcbiAgICAgICAgICAgICQoQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyTmF2TG9naW5CdG4pLmFkZENsYXNzKG9wZW5lZENsYXNzKS5yZW1vdmVDbGFzcyhjbG9zZUNsYXNzKTsgLy8gLnNob3coKTtcclxuICAgICAgICAgICAgJChDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJSZWdCdG4pLmFkZENsYXNzKG9wZW5lZENsYXNzKS5yZW1vdmVDbGFzcyhjbG9zZUNsYXNzKTtcclxuICAgICAgICAgICAgJCgnLm5hdi1saW5rLmpzX2xvZ091dCcpLmFkZENsYXNzKGNsb3NlQ2xhc3MpLnJlbW92ZUNsYXNzKG9wZW5lZENsYXNzKTsgLy8gLmhpZGUoKTtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3JMb2dpblN0YXRlID0gJy5qc19tZXNzYWdlX2xvZ2dlZC0tdGV4dCc7XHJcbiAgICAgICAgICAgICQoc2VsZWN0b3JMb2dpblN0YXRlKS50ZXh0KCfQktGLINCy0YvRiNC70Lgg0LjQtyDQsNC60LrQsNGD0L3RgtCwJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpc0xvZ2luQnRuQ2xpY2sgPSAkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnbmF2Lm5hdmJhcicpLmZpbmQoJGxvZ2luQm94KS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzQWRkSW5zdGFncmFtQnRuQ2xpY2tlZCA9ICQoZXZlbnQudGFyZ2V0KS5hdHRyKCdpZCcpID09PSBDT05TVC51aVNlbGVjdG9ycy5pbnN0YWdyYW0uYWRkQWNjb3VudEJ0bklkO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFpc0xvZ2luQnRuQ2xpY2sgJiYgJGxvZ2luQm94Lmhhc0NsYXNzKG9wZW5lZENsYXNzKSAmJiAhaXNBZGRJbnN0YWdyYW1CdG5DbGlja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAkbG9naW5Cb3guYWRkQ2xhc3MoY2xvc2VDbGFzcykucmVtb3ZlQ2xhc3Mob3BlbmVkQ2xhc3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAgICAgaWYgKCQoJy5hdXRoLmxvZ2luJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGJpbmRFdmVudHMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0XHJcbiAgICB9O1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9fYXV0aC9sb2dpbi1wYWdlLmpzIiwiLyogZXNsaW50LWRpc2FibGUgc29ydC12YXJzICovXHJcbi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy91c2VyJztcclxuLy8gaW1wb3J0IGNvb2tpZVN0b3JhZ2UgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2Nvb2tpZSc7XHJcbmltcG9ydCB2aWV3VXRpbHMgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3ZpZXcnO1xyXG4vLyBpbXBvcnQge0NPTlNUfSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29uc3RzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBJbnN0YWdyYW0oc2VsZWN0b3JDU1MgPSB7fSkge1xyXG4gICAgY29uc3QgJGJ1dHRvblN1Ym1pdCA9ICQoJyNqc19pbnN0YWdyYW0tZ2V0LWFjY291bnRzLS1idG4nKTtcclxuICAgIGNvbnN0IHVzZXIgPSBVc2VyLCAvLyBzZXJ2aWNlXHJcbiAgICAgICAgJGxpc3QgPSAkKCcuaW5zdGFncmFtLWFjY291bnRzLWxpc3QnKTtcclxuXHJcbiAgICBjb25zdCBzdWJtaXRGb3JtID0gZnVuY3Rpb24oZm9ybURhdGFPYmopIHtcclxuICAgICAgICBpZiAoJGJ1dHRvblN1Ym1pdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdXNlci5nZXRJbnN0YWdyYW1BY2NvdW50KCkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdVdGlscy5maWxsTGlzdCgkbGlzdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmRhdGEuYWNjb3VudHMgfHwgJ0xvZ2luIGVycm9yJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dldEluc3RhZ3JhbUFjY291bnQgJywgJGJ1dHRvblN1Ym1pdCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGJpbmRFdmVudHMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkYnV0dG9uU3VibWl0Lm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc3VibWl0Rm9ybSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgICAgIGJpbmRFdmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGluaXRcclxuICAgIH07XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL19pbnN0YWdyYW0vaW5zdGFncmFtLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9iYXNlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIiFmdW5jdGlvbihmKXtpZihcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSltb2R1bGUuZXhwb3J0cz1mKCk7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKFtdLGYpO2Vsc2V7KFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OlwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWw/Z2xvYmFsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3NlbGY6dGhpcykuTWV0ZW9yRW1vamk9ZigpfX0oZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG58fGUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfWZvcih2YXIgaT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSh7MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7IWZ1bmN0aW9uKGdsb2JhbCxmYWN0b3J5KXtpZih2b2lkIDAhPT1leHBvcnRzKWZhY3RvcnkobW9kdWxlKTtlbHNle3ZhciBtb2Q9e2V4cG9ydHM6e319O2ZhY3RvcnkobW9kKSxnbG9iYWwubWV0ZW9yRW1vamk9bW9kLmV4cG9ydHN9fSh0aGlzLGZ1bmN0aW9uKG1vZHVsZSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIF9jcmVhdGVDbGFzcz1mdW5jdGlvbigpe2Z1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LHByb3BzKXtmb3IodmFyIGk9MDtpPHByb3BzLmxlbmd0aDtpKyspe3ZhciBkZXNjcmlwdG9yPXByb3BzW2ldO2Rlc2NyaXB0b3IuZW51bWVyYWJsZT1kZXNjcmlwdG9yLmVudW1lcmFibGV8fCExLGRlc2NyaXB0b3IuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIGRlc2NyaXB0b3ImJihkZXNjcmlwdG9yLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LGRlc2NyaXB0b3Iua2V5LGRlc2NyaXB0b3IpfX1yZXR1cm4gZnVuY3Rpb24oQ29uc3RydWN0b3IscHJvdG9Qcm9wcyxzdGF0aWNQcm9wcyl7cmV0dXJuIHByb3RvUHJvcHMmJmRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLHByb3RvUHJvcHMpLHN0YXRpY1Byb3BzJiZkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLHN0YXRpY1Byb3BzKSxDb25zdHJ1Y3Rvcn19KCksTWV0ZW9yRW1vamk9ZnVuY3Rpb24oKXtmdW5jdGlvbiBNZXRlb3JFbW9qaSgpeyFmdW5jdGlvbihpbnN0YW5jZSxDb25zdHJ1Y3Rvcil7aWYoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfSh0aGlzLE1ldGVvckVtb2ppKSx0aGlzLmluaXRpYXRlKCl9cmV0dXJuIF9jcmVhdGVDbGFzcyhNZXRlb3JFbW9qaSxbe2tleTpcImluaXRpYXRlXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgX3RoaXM9dGhpcztkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tZXRlb3ItZW1vamk9XCJ0cnVlXCJdLCBbZGF0YS1tZXRlb3ItZW1vamktbGFyZ2U9XCJ0cnVlXCJdJykuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KXtfdGhpcy5nZW5lcmF0ZUVsZW1lbnRzKGVsZW1lbnQpfSl9fSx7a2V5OlwiZ2VuZXJhdGVFbGVtZW50c1wiLHZhbHVlOmZ1bmN0aW9uKGVtb2ppSW5wdXQpe3ZhciBjbGlja0xpbms9ZnVuY3Rpb24oZXZlbnQpe3ZhciBjYXJldFBvcz1lbW9qaUlucHV0LnNlbGVjdGlvblN0YXJ0O2Vtb2ppSW5wdXQudmFsdWU9ZW1vamlJbnB1dC52YWx1ZS5zdWJzdHJpbmcoMCxjYXJldFBvcykrXCIgXCIrZXZlbnQudGFyZ2V0LmlubmVySFRNTCtlbW9qaUlucHV0LnZhbHVlLnN1YnN0cmluZyhjYXJldFBvcyksZW1vamlQaWNrZXIuc3R5bGUuZGlzcGxheT1cImJsb2NrXCIsXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGFuZ3VsYXImJmFuZ3VsYXIuZWxlbWVudChlbW9qaUlucHV0KS50cmlnZ2VySGFuZGxlcihcImNoYW5nZVwiKX0sY2xpY2tDYXRlZ29yeT1mdW5jdGlvbihldmVudCl7ZW1vamlJbnB1dC5zZWxlY3Rpb25TdGFydDtlbW9qaVBpY2tlci5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtmb3IodmFyIGhpZGVVbHM9ZW1vamlQaWNrZXIucXVlcnlTZWxlY3RvckFsbChcInVsXCIpLGk9MSxsPWhpZGVVbHMubGVuZ3RoO2k8bDtpKyspaGlkZVVsc1tpXS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO3ZhciBiYWNrZ3JvdW5kVG9nZ2xlPWVtb2ppUGlja2VyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2F0ZWdvcnkgYVwiKTtmb3IoaT0wLGw9YmFja2dyb3VuZFRvZ2dsZS5sZW5ndGg7aTxsO2krKyliYWNrZ3JvdW5kVG9nZ2xlW2ldLnN0eWxlLmJhY2tncm91bmQ9XCJub25lXCI7ZW1vamlQaWNrZXIucXVlcnlTZWxlY3RvcihcIi5cIitldmVudC50YXJnZXQuaWQpLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiLGVtb2ppUGlja2VyLnF1ZXJ5U2VsZWN0b3IoXCIjXCIrZXZlbnQudGFyZ2V0LmlkKS5zdHlsZS5iYWNrZ3JvdW5kPVwiI2MyYzJjMlwifTtlbW9qaUlucHV0LnN0eWxlLndpZHRoPVwiMTAwJVwiO3ZhciBlbW9qaUNvbnRhaW5lcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2Vtb2ppQ29udGFpbmVyLnN0eWxlLnBvc2l0aW9uPVwicmVsYXRpdmVcIixlbW9qaUlucHV0LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGVtb2ppQ29udGFpbmVyLGVtb2ppSW5wdXQpLGVtb2ppQ29udGFpbmVyLmFwcGVuZENoaWxkKGVtb2ppSW5wdXQpO3ZhciBlbW9qaVBpY2tlcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2Vtb2ppUGlja2VyLnRhYkluZGV4PTAsZW1vamlJbnB1dC5oYXNBdHRyaWJ1dGUoXCJkYXRhLW1ldGVvci1lbW9qaS1sYXJnZVwiKT8oZW1vamlQaWNrZXIuc3R5bGUuekluZGV4PVwiOTk5XCIsZW1vamlQaWNrZXIuc3R5bGUuZGlzcGxheT1cImJsb2NrXCIsZW1vamlQaWNrZXIuc3R5bGUud2lkdGg9XCIxMDAlXCIsZW1vamlQaWNrZXIuc3R5bGUubWFyZ2luQm90dG9tPVwiMTVweFwiKTooZW1vamlQaWNrZXIuc3R5bGUucG9zaXRpb249XCJhYnNvbHV0ZVwiLGVtb2ppUGlja2VyLnN0eWxlLnJpZ2h0PVwiMHB4XCIsZW1vamlQaWNrZXIuc3R5bGUudG9wPVwiMzBweFwiLGVtb2ppUGlja2VyLnN0eWxlLmRpc3BsYXk9XCJub25lXCIsZW1vamlQaWNrZXIuc3R5bGUud2lkdGg9XCI0MDBweFwiKSxlbW9qaVBpY2tlci5zdHlsZS56SW5kZXg9XCI5OTlcIixlbW9qaVBpY2tlci5zdHlsZS5vdmVyZmxvdz1cImhpZGRlblwiLGVtb2ppUGlja2VyLnN0eWxlLmJhY2tncm91bmQ9XCIjZmZmXCIsZW1vamlQaWNrZXIuc3R5bGUuYm9yZGVyUmFkaXVzPVwiNXB4XCIsZW1vamlQaWNrZXIuc3R5bGUuYm94U2hhZG93PVwiMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMjMpXCIsZW1vamlQaWNrZXIuc3R5bGUuYm9yZGVyUmFkaXVzPVwiMnB4O1wiLGVtb2ppUGlja2VyLnN0eWxlLm1hcmdpblRvcD1cIjVweFwiLGVtb2ppUGlja2VyLnN0eWxlLm91dGxpbmU9XCJub25lXCI7dmFyIGVtb2ppVHJpZ2dlcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtlbW9qaVRyaWdnZXIuc3R5bGUucG9zaXRpb249XCJhYnNvbHV0ZVwiLGVtb2ppVHJpZ2dlci5zdHlsZS50b3A9XCIxMHB4XCIsZW1vamlUcmlnZ2VyLnN0eWxlLnJpZ2h0PVwiMTBweFwiLGVtb2ppVHJpZ2dlci5zdHlsZS50ZXh0RGVjb3JhdGlvbj1cIm5vbmVcIixlbW9qaVRyaWdnZXIuc2V0QXR0cmlidXRlKFwiaHJlZlwiLFwiamF2YXNjcmlwdDp2b2lkKDApXCIpLGVtb2ppVHJpZ2dlci5pbm5lckhUTUw9JzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMTIgMTRcIj48cGF0aCBkPVwiTTguOSA4LjRxLTAuMyAwLjktMS4xIDEuNXQtMS44IDAuNi0xLjgtMC42LTEuMS0xLjVxLTAuMS0wLjIgMC0wLjR0MC4zLTAuMnEwLjItMC4xIDAuNCAwdDAuMiAwLjNxMC4yIDAuNiAwLjcgMXQxLjIgMC40IDEuMi0wLjQgMC43LTFxMC4xLTAuMiAwLjMtMC4zdDAuNCAwIDAuMyAwLjIgMCAwLjR6TTUgNXEwIDAuNC0wLjMgMC43dC0wLjcgMC4zLTAuNy0wLjMtMC4zLTAuNyAwLjMtMC43IDAuNy0wLjMgMC43IDAuMyAwLjMgMC43ek05IDVxMCAwLjQtMC4zIDAuN3QtMC43IDAuMy0wLjctMC4zLTAuMy0wLjcgMC4zLTAuNyAwLjctMC4zIDAuNyAwLjMgMC4zIDAuN3pNMTEgN3EwLTEtMC40LTEuOXQtMS4xLTEuNi0xLjYtMS4xLTEuOS0wLjQtMS45IDAuNC0xLjYgMS4xLTEuMSAxLjYtMC40IDEuOSAwLjQgMS45IDEuMSAxLjYgMS42IDEuMSAxLjkgMC40IDEuOS0wLjQgMS42LTEuMSAxLjEtMS42IDAuNC0xLjl6TTEyIDdxMCAxLjYtMC44IDN0LTIuMiAyLjItMyAwLjgtMy0wLjgtMi4yLTIuMi0wLjgtMyAwLjgtMyAyLjItMi4yIDMtMC44IDMgMC44IDIuMiAyLjIgMC44IDN6XCIvPjwvc3ZnPicsZW1vamlUcmlnZ2VyLm9uY2xpY2s9ZnVuY3Rpb24oKXtcIm5vbmVcIj09PWVtb2ppUGlja2VyLnN0eWxlLmRpc3BsYXk/ZW1vamlQaWNrZXIuc3R5bGUuZGlzcGxheT1cImJsb2NrXCI6XCJibG9ja1wiPT09ZW1vamlQaWNrZXIuc3R5bGUuZGlzcGxheSYmKGVtb2ppUGlja2VyLnN0eWxlLmRpc3BsYXk9XCJub25lXCIpLGVtb2ppUGlja2VyLmZvY3VzKCl9LGVtb2ppSW5wdXQuaGFzQXR0cmlidXRlKFwiZGF0YS1tZXRlb3ItZW1vamktbGFyZ2VcIil8fGVtb2ppQ29udGFpbmVyLmFwcGVuZENoaWxkKGVtb2ppVHJpZ2dlciksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKGUpe2Vtb2ppSW5wdXQuaGFzQXR0cmlidXRlKFwiZGF0YS1tZXRlb3ItZW1vamktbGFyZ2VcIil8fFwiYmxvY2tcIj09PWVtb2ppUGlja2VyLnN0eWxlLmRpc3BsYXkmJihlbW9qaVBpY2tlci5jb250YWlucyhlLnRhcmdldCl8fGVtb2ppVHJpZ2dlci5jb250YWlucyhlLnRhcmdldCl8fChlbW9qaVBpY2tlci5zdHlsZS5kaXNwbGF5PVwibm9uZVwiKSl9KTt2YXIgZmFjZXNDYXRlZ29yeT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7ZmFjZXNDYXRlZ29yeS5zdHlsZS5wYWRkaW5nPVwiMTBweCAwcHhcIixmYWNlc0NhdGVnb3J5LnN0eWxlLm1hcmdpbj1cIjBcIixmYWNlc0NhdGVnb3J5LnN0eWxlLmxpc3RTdHlsZT1cIm5vbmVcIixmYWNlc0NhdGVnb3J5LnN0eWxlLnRleHRBbGlnbj1cImxlZnRcIixmYWNlc0NhdGVnb3J5LnN0eWxlLm1hcmdpbkxlZnQ9XCIzJVwiLGZhY2VzQ2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChcImZhY2VzXCIpO3ZhciBhbmltYWxzQ2F0ZWdvcnk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO2FuaW1hbHNDYXRlZ29yeS5zdHlsZS5wYWRkaW5nPVwiMTBweCAwcHhcIixhbmltYWxzQ2F0ZWdvcnkuc3R5bGUubWFyZ2luPVwiMFwiLGFuaW1hbHNDYXRlZ29yeS5zdHlsZS5saXN0U3R5bGU9XCJub25lXCIsYW5pbWFsc0NhdGVnb3J5LnN0eWxlLnRleHRBbGlnbj1cImxlZnRcIixhbmltYWxzQ2F0ZWdvcnkuc3R5bGUubWFyZ2luTGVmdD1cIjMlXCIsYW5pbWFsc0NhdGVnb3J5LmNsYXNzTGlzdC5hZGQoXCJhbmltYWxzXCIpLGFuaW1hbHNDYXRlZ29yeS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO3ZhciBmb29kQ2F0ZWdvcnk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO2Zvb2RDYXRlZ29yeS5zdHlsZS5wYWRkaW5nPVwiMTBweCAwcHhcIixmb29kQ2F0ZWdvcnkuc3R5bGUubWFyZ2luPVwiMFwiLGZvb2RDYXRlZ29yeS5zdHlsZS5saXN0U3R5bGU9XCJub25lXCIsZm9vZENhdGVnb3J5LnN0eWxlLnRleHRBbGlnbj1cImxlZnRcIixmb29kQ2F0ZWdvcnkuc3R5bGUubWFyZ2luTGVmdD1cIjMlXCIsZm9vZENhdGVnb3J5LmNsYXNzTGlzdC5hZGQoXCJmb29kXCIpLGZvb2RDYXRlZ29yeS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO3ZhciBzcG9ydENhdGVnb3J5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtzcG9ydENhdGVnb3J5LnN0eWxlLnBhZGRpbmc9XCIxMHB4IDBweFwiLHNwb3J0Q2F0ZWdvcnkuc3R5bGUubWFyZ2luPVwiMFwiLHNwb3J0Q2F0ZWdvcnkuc3R5bGUubGlzdFN0eWxlPVwibm9uZVwiLHNwb3J0Q2F0ZWdvcnkuc3R5bGUudGV4dEFsaWduPVwibGVmdFwiLHNwb3J0Q2F0ZWdvcnkuc3R5bGUubWFyZ2luTGVmdD1cIjMlXCIsc3BvcnRDYXRlZ29yeS5jbGFzc0xpc3QuYWRkKFwic3BvcnRcIiksc3BvcnRDYXRlZ29yeS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO3ZhciB0cmFuc3BvcnRDYXRlZ29yeT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7dHJhbnNwb3J0Q2F0ZWdvcnkuc3R5bGUucGFkZGluZz1cIjEwcHggMHB4XCIsdHJhbnNwb3J0Q2F0ZWdvcnkuc3R5bGUubWFyZ2luPVwiMFwiLHRyYW5zcG9ydENhdGVnb3J5LnN0eWxlLmxpc3RTdHlsZT1cIm5vbmVcIix0cmFuc3BvcnRDYXRlZ29yeS5zdHlsZS50ZXh0QWxpZ249XCJsZWZ0XCIsdHJhbnNwb3J0Q2F0ZWdvcnkuc3R5bGUubWFyZ2luTGVmdD1cIjMlXCIsdHJhbnNwb3J0Q2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChcInRyYW5zcG9ydFwiKSx0cmFuc3BvcnRDYXRlZ29yeS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO3ZhciBvYmplY3RzQ2F0ZWdvcnk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO29iamVjdHNDYXRlZ29yeS5zdHlsZS5wYWRkaW5nPVwiMTBweCAwcHhcIixvYmplY3RzQ2F0ZWdvcnkuc3R5bGUubWFyZ2luPVwiMFwiLG9iamVjdHNDYXRlZ29yeS5zdHlsZS5saXN0U3R5bGU9XCJub25lXCIsb2JqZWN0c0NhdGVnb3J5LnN0eWxlLnRleHRBbGlnbj1cImxlZnRcIixvYmplY3RzQ2F0ZWdvcnkuc3R5bGUubWFyZ2luTGVmdD1cIjMlXCIsb2JqZWN0c0NhdGVnb3J5LmNsYXNzTGlzdC5hZGQoXCJvYmplY3RzXCIpLG9iamVjdHNDYXRlZ29yeS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO3ZhciBlbW9qaUNhdGVnb3J5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtlbW9qaUNhdGVnb3J5LnN0eWxlLnBhZGRpbmc9XCIwcHhcIixlbW9qaUNhdGVnb3J5LnN0eWxlLm1hcmdpbj1cIjBcIixlbW9qaUNhdGVnb3J5LnN0eWxlLmRpc3BsYXk9XCJ0YWJsZVwiLGVtb2ppQ2F0ZWdvcnkuc3R5bGUud2lkdGg9XCIxMDAlXCIsZW1vamlDYXRlZ29yeS5zdHlsZS5iYWNrZ3JvdW5kPVwiI2VmZjBmMVwiLGVtb2ppQ2F0ZWdvcnkuc3R5bGUubGlzdFN0eWxlPVwibm9uZVwiLGVtb2ppQ2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChcImNhdGVnb3J5XCIpO3ZhciBlbW9qaUNhdGVnb3JpZXM9bmV3IEFycmF5O2Vtb2ppQ2F0ZWdvcmllcy5wdXNoKHtuYW1lOlwiZmFjZXNcIixzdmc6JzxzdmcgaWQ9XCJmYWNlc1wiIGRhdGEtbmFtZT1cIkxheWVyIDFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAxNTAgMTUwXCI+PHBhdGggaWQ9XCJmYWNlc1wiIGQ9XCJNNzQuMzQsMTI4LjQ4YTUzLjUsNTMuNSwwLDEsMSwzNy44NC0xNS42Nyw1My4xNiw1My4xNiwwLDAsMS0zNy44NCwxNS42N1ptMC05Ny44OWE0NC40LDQ0LjQsMCwxLDAsMzEuNCwxMyw0NC4wNyw0NC4wNywwLDAsMC0zMS40LTEzWlwiLz48cGF0aCBpZD1cImZhY2VzXCIgZD1cIk03NC4zNSwxMDhBMzMuMDcsMzMuMDcsMCwwLDEsNDEuMjksNzVhMi4yOCwyLjI4LDAsMCwxLDIuMjctMi4yOGgwQTIuMjcsMi4yNywwLDAsMSw0NS44Myw3NWEyOC41MiwyOC41MiwwLDAsMCw1NywwLDIuMjcsMi4yNywwLDAsMSw0LjU0LDBBMzMuMDksMzMuMDksMCwwLDEsNzQuMzUsMTA4WlwiLz48cGF0aCBpZD1cImZhY2VzXCIgZD1cIk01OC44NCw2MmE2LjgxLDYuODEsMCwxLDAsNi44MSw2LjgxQTYuODEsNi44MSwwLDAsMCw1OC44NCw2MlpcIi8+PHBhdGggaWQ9XCJmYWNlc1wiIGQ9XCJNODkuODcsNjJhNi44MSw2LjgxLDAsMSwwLDYuODEsNi44MUE2LjgyLDYuODIsMCwwLDAsODkuODcsNjJaXCIvPjwvc3ZnPid9KSxlbW9qaUNhdGVnb3JpZXMucHVzaCh7bmFtZTpcImFuaW1hbHNcIixzdmc6JzxzdmcgaWQ9XCJhbmltYWxzXCIgZGF0YS1uYW1lPVwiTGF5ZXIgMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDE1MCAxNTBcIj48cGF0aCBpZD1cImFuaW1hbHNcIiBkPVwiTTU5LjksOTEuNzVoMGMtMjIuNDYsMC00MS44Mi0xOS4zNC00NC4wOS00NEE1Mi4xLDUyLjEsMCwwLDEsMTYsMzYuOGE0LjUxLDQuNTEsMCwwLDEsMi42My0zLjYyLDM5Ljc5LDM5Ljc5LDAsMCwxLDEyLjc0LTMuMzdjMjMuOTItMi4xNSw0NS4zNSwxNy44Myw0Ny43NCw0My44NmE1Mi43Nyw1Mi43NywwLDAsMS0uMTUsMTAuOTMsNC41Niw0LjU2LDAsMCwxLTIuNjQsMy42MiwzOS42NywzOS42NywwLDAsMS0xMi43MywzLjM2Yy0xLjIzLjExLTIuNDUuMTctMy42Ni4xN1pNMjQuNzYsNDAuNDlhNDEuMjksNDEuMjksMCwwLDAsLjA5LDYuNEMyNi43LDY3LDQyLjA5LDgyLjY2LDU5LjksODIuNjdoMGMuOTQsMCwxLjg4LDAsMi44My0uMTRhMzAuMzksMzAuMzksMCwwLDAsNy40MS0xLjYyLDQxLjE0LDQxLjE0LDAsMCwwLS4xMS02LjRDNjguMDksNTMuMzgsNTEuMTEsMzcuMDgsMzIuMTcsMzguODZhMzAuNzgsMzAuNzgsMCwwLDAtNy40MSwxLjYzWlwiLz48cGF0aCBpZD1cImFuaW1hbHNcIiBkPVwiTTM2LjY4LDEyNS42NGE0LjUzLDQuNTMsMCwwLDEtNC4zMy0zLjE3LDUzLjMyLDUzLjMyLDAsMCwxLTIuMjYtMTFBNTAuNDIsNTAuNDIsMCwwLDEsMzkuNTEsNzYuNmM3LjM1LTkuOTEsMTcuODQtMTYsMjkuNS0xNywxLjE2LS4xMSwyLjMzLS4xMywzLjQ3LS4xM2E0LjU0LDQuNTQsMCwwLDEsNC4zMywzLjE2LDUxLjU5LDUxLjU5LDAsMCwxLDIuMjcsMTEuMDgsNTAuMzksNTAuMzksMCwwLDEtOS40MiwzNC44Yy03LjM1LDkuOTEtMTcuODMsMTYtMjkuNSwxN2ExNy42MywxNy42MywwLDAsMS0zLjQ4LjEyWk02OS4wOSw2OC42OUEzMi40MSwzMi40MSwwLDAsMCw0Ni44LDgyYTQyLjU3LDQyLjU3LDAsMCwwLTYuNzEsMzQuMzgsMzIuMzgsMzIuMzgsMCwwLDAsMjIuMjgtMTMuMzJBNDEuMzUsNDEuMzUsMCwwLDAsNzAsNzQuNTFhMzkuMzgsMzkuMzgsMCwwLDAtLjk0LTUuODJaXCIvPjxwYXRoIGlkPVwiYW5pbWFsc1wiIGQ9XCJNOTAuMjcsOTEuNzVjLTEuMjIsMC0yLjQzLS4wNi0zLjY2LS4xN2EzOS42NywzOS42NywwLDAsMS0xMi43My0zLjM2LDQuNTcsNC41NywwLDAsMS0yLjY0LTMuNjEsNTMuMzgsNTMuMzgsMCwwLDEtLjE3LTEwLjkzYzIuNDEtMjYsMjMuNy00Ni4wNyw0Ny43Ni00My44N2EzOS43NCwzOS43NCwwLDAsMSwxMi43MywzLjM3LDQuNTcsNC41NywwLDAsMSwyLjY0LDMuNjIsNTMuMzUsNTMuMzUsMCwwLDEsLjE2LDEwLjkyYy0yLjI4LDI0LjY5LTIxLjY1LDQ0LTQ0LjA5LDQ0Wk04MCw4MC45MWEzMC41NywzMC41NywwLDAsMCw3LjQyLDEuNjJjMTkuMDcsMS43OCwzNS45Mi0xNC41MywzNy44Ny0zNS42NGE0Mi41NSw0Mi41NSwwLDAsMCwuMS02LjRBMzAuODYsMzAuODYsMCwwLDAsMTE4LDM4Ljg2Qzk5LDM3LjA3LDgyLjA2LDUzLjM4LDgwLjEyLDc0LjUxYTQzLjkxLDQzLjkxLDAsMCwwLS4xLDYuNFpcIi8+PHBhdGggaWQ9XCJhbmltYWxzXCIgZD1cIk0xMTMuNDksMTI1LjY0aDBjLTEuMTYsMC0yLjMsMC0zLjQ2LS4xMi0yMy45LTIuMjEtNDEuMzYtMjUuNDctMzguOTQtNTEuODVBNTMuNTIsNTMuNTIsMCwwLDEsNzMuMzQsNjIuNmE0LjU1LDQuNTUsMCwwLDEsNC4zMy0zLjE2YzEuMTYsMCwyLjM0LDAsMy41MS4xMywxMS42NCwxLjA3LDIyLjExLDcuMTIsMjkuNDgsMTdhNTAuNTEsNTAuNTEsMCwwLDEsOS40MiwzNC44MSw1My41MSw1My41MSwwLDAsMS0yLjI2LDExLDQuNTQsNC41NCwwLDAsMS00LjMzLDMuMTlaTTgxLjA4LDY4LjY5YTQyLjUzLDQyLjUzLDAsMCwwLTEsNS44MmMtMS45NCwyMS4xLDExLjQ1LDM5LjcxLDI5Ljk1LDQxLjg4QTQyLjM4LDQyLjM4LDAsMCwwLDEwMy4zNiw4MiwzMi40MiwzMi40MiwwLDAsMCw4MS4wOCw2OC42OVpcIi8+PHBhdGggaWQ9XCJhbmltYWxzXCIgZD1cIk03NS4wOCw0NS40NWE3LjgzLDcuODMsMCwxLDAsNy44Myw3LjgzLDcuODMsNy44MywwLDAsMC03LjgzLTcuODNaXCIvPjxwYXRoIGlkPVwiYW5pbWFsc1wiIGQ9XCJNNzYuMjksNTEuODlhMi4yNiwyLjI2LDAsMCwxLTIuMTQtM0E0Niw0NiwwLDAsMSw5Mi44MiwyNS4zNGEyLjI3LDIuMjcsMCwxLDEsMi40LDMuODZBNDEuNCw0MS40LDAsMCwwLDc4LjQzLDUwLjM5YTIuMjgsMi4yOCwwLDAsMS0yLjE0LDEuNVpcIi8+PHBhdGggaWQ9XCJhbmltYWxzXCIgZD1cIk03My44Nyw1MS44OWEyLjI4LDIuMjgsMCwwLDEtMi4xNC0xLjVBNDEuMzUsNDEuMzUsMCwwLDAsNTQuOTQsMjkuMmEyLjI3LDIuMjcsMCwwLDEsMi4zOS0zLjg2QTQ2LDQ2LDAsMCwxLDc2LDQ4Ljg1YTIuMjgsMi4yOCwwLDAsMS0xLjM3LDIuOTEsMi4zMSwyLjMxLDAsMCwxLS43Ny4xM1pcIi8+PC9zdmc+J30pLGVtb2ppQ2F0ZWdvcmllcy5wdXNoKHtuYW1lOlwiZm9vZFwiLHN2ZzonPHN2ZyBpZD1cImZvb2RcIiBkYXRhLW5hbWU9XCJMYXllciAxXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMTUwIDE1MFwiPjxwYXRoIGlkPVwiZm9vZFwiIGQ9XCJNMTA0LDIwLjc2aC4xNWMxNS44My41MiwyNC4wOCwyMS40OCwyNC4wNywzMi41Ni4yNiwxMi40Mi0xMC43MiwyMy41NS0yNCwyNC4yMWEzLjUzLDMuNTMsMCwwLDEtLjQ2LDBjLTEzLjI1LS42Ni0yNC4yMy0xMS44LTI0LTI0LjMsMC0xMSw4LjI2LTMxLjk1LDI0LjA3LTMyLjQ3Wm0wLDQ3LjY5YzguMjUtLjU0LDE1LjMtNy41MSwxNS4xNC0xNSwwLTguMTItNi4yMi0yMy4xLTE1LjE0LTIzLjU3LTguOS40Ni0xNS4xNCwxNS40NS0xNS4xNCwyMy40OC0uMTQsNy42MSw2LjksMTQuNTksMTUuMTQsMTUuMTNaXCIvPjxwYXRoIGlkPVwiZm9vZFwiIGQ9XCJNOTcuMTksNjkuMjFoLjE0YTQuNTMsNC41MywwLDAsMSw0LjQsNC42OGwtMS40OCw0Ni45MmExLjU5LDEuNTksMCwwLDAsLjUsMS4wNiw0LjYsNC42LDAsMCwwLDMuMjUsMS4xOWgwYTQuNTcsNC41NywwLDAsMCwzLjI2LTEuMiwxLjUzLDEuNTMsMCwwLDAsLjQ5LTFsLTEuNDgtNDYuOTVhNC41NCw0LjU0LDAsMSwxLDkuMDgtLjI4bDEuNDcsNDYuOTFhMTAuNDIsMTAuNDIsMCwwLDEtMyw3LjY1LDEzLjY1LDEzLjY1LDAsMCwxLTkuODEsNGgwYTEzLjU4LDEzLjU4LDAsMCwxLTkuNzktNCwxMC40MiwxMC40MiwwLDAsMS0zLTcuNjdsMS40OC00Ni44OWE0LjUzLDQuNTMsMCwwLDEsNC41My00LjRaXCIvPjxwYXRoIGlkPVwiZm9vZFwiIGQ9XCJNNDEuODQsNjkuMjFINDJhNC41Myw0LjUzLDAsMCwxLDQuNCw0LjY4TDQ0LjksMTIwLjgxYTEuNTcsMS41NywwLDAsMCwuNSwxLjA2LDQuNiw0LjYsMCwwLDAsMy4yNSwxLjE5aDBhNC41MSw0LjUxLDAsMCwwLDMuMjQtMS4xOSwxLjQ4LDEuNDgsMCwwLDAsLjUtMUw1MC45Myw3My44OWE0LjUzLDQuNTMsMCwwLDEsNC4zOS00LjY4QTQuNCw0LjQsMCwwLDEsNjAsNzMuNjFsMS40OCw0Ni45MWExMC40OSwxMC40OSwwLDAsMS0zLDcuNjYsMTMuNTcsMTMuNTcsMCwwLDEtOS43OCw0aDBhMTMuNTksMTMuNTksMCwwLDEtOS43OC00LDEwLjQ4LDEwLjQ4LDAsMCwxLTMtNy42N2wxLjQ4LTQ2LjlhNC41NCw0LjU0LDAsMCwxLDQuNTQtNC40WlwiLz48cGF0aCBpZD1cImZvb2RcIiBkPVwiTTI4LjU5LDIwLjc2YTQuNTQsNC41NCwwLDAsMSw0LjU0LDQuNTRWNTFhMTUuNTIsMTUuNTIsMCwwLDAsMzEsMFYyNS4zYTQuNTUsNC41NSwwLDAsMSw5LjA5LDBWNTFhMjQuNjEsMjQuNjEsMCwxLDEtNDkuMjEsMFYyNS4zYTQuNTQsNC41NCwwLDAsMSw0LjU0LTQuNTRaXCIvPjxwYXRoIGlkPVwiZm9vZFwiIGQ9XCJNNTUuMzQsMjAuNzZhNC41NCw0LjU0LDAsMCwxLDQuNTQsNC41NHYxOWE0LjU0LDQuNTQsMCwxLDEtOS4wOCwwdi0xOWE0LjU0LDQuNTQsMCwwLDEsNC41NC00LjU0WlwiLz48cGF0aCBpZD1cImZvb2RcIiBkPVwiTTQyLDIwLjc2YTQuNTQsNC41NCwwLDAsMSw0LjU0LDQuNTR2MTlhNC41NCw0LjU0LDAsMSwxLTkuMDgsMHYtMTlBNC41NCw0LjU0LDAsMCwxLDQyLDIwLjc2WlwiLz48L3N2Zz4nfSksZW1vamlDYXRlZ29yaWVzLnB1c2goe25hbWU6XCJzcG9ydFwiLHN2ZzonPHN2ZyBpZD1cInNwb3J0XCIgZGF0YS1uYW1lPVwiTGF5ZXIgMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDE1MCAxNTBcIj48cGF0aCBpZD1cInNwb3J0XCIgZD1cIk03NS4zNSwxMzAuMjRhNTMuNDksNTMuNDksMCwxLDEsNTMuNDgtNTMuNDksNTMuNTUsNTMuNTUsMCwwLDEtNTMuNDgsNTMuNDlabTAtOTcuODlhNDQuNDEsNDQuNDEsMCwxLDAsNDQuNCw0NC40LDQ0LjEsNDQuMSwwLDAsMC00NC40LTQ0LjRaXCIvPjxwYXRoIGlkPVwic3BvcnRcIiBkPVwiTTExOS4yNCw4NC4wOEE1MS4yOSw1MS4yOSwwLDAsMSw2OCwzMi44NmE0OS40NCw0OS40NCwwLDAsMSwuMjYtNSwyLjI2LDIuMjYsMCwwLDEsMi0yYzEuNjYtLjE2LDMuMzQtLjI1LDUtLjI1YTUxLjI2LDUxLjI2LDAsMCwxLDUxLjIxLDUxLjIxYzAsMS43MS0uMDksMy4zOC0uMjUsNWEyLjI4LDIuMjgsMCwwLDEtMiwyYy0xLjY1LjE2LTMuMzMuMjUtNSwuMjVaTTcyLjY0LDMwLjE2Yy0uMDYuOS0uMDgsMS43OS0uMDgsMi43YTQ2LjczLDQ2LjczLDAsMCwwLDQ2LjY4LDQ2LjY4cTEuMzcsMCwyLjctLjA5Yy4wNi0uODkuMDgtMS43OS4wOC0yLjdBNDYuNzIsNDYuNzIsMCwwLDAsNzUuMzUsMzAuMDhjLS45MSwwLTEuODIsMC0yLjcxLjA4WlwiLz48cGF0aCBpZD1cInNwb3J0XCIgZD1cIk03NS4zNSwxMjhBNTEuMjgsNTEuMjgsMCwwLDEsMjQuMTIsNzYuNzZjMC0xLjcuMS0zLjM4LjI1LTVhMi4yOSwyLjI5LDAsMCwxLDItMmMxLjY2LS4xNiwzLjMzLS4yNSw1LjA1LS4yNWE1MS4yNyw1MS4yNywwLDAsMSw1MS4yMSw1MS4yMmMwLDEuNjktLjA5LDMuMzctLjI1LDVhMi4yNywyLjI3LDAsMCwxLTIsMmMtMS42Ni4xNi0zLjMyLjI1LTUsLjI1Wk0yOC43NSw3NC4wNWMtLjA1LjktLjA5LDEuOC0uMDksMi43MWE0Ni43NCw0Ni43NCwwLDAsMCw0Ni42OSw0Ni42N2MuOTEsMCwxLjgsMCwyLjctLjA4LDAtLjkuMDgtMS44LjA4LTIuN0E0Ni43Myw0Ni43MywwLDAsMCwzMS40Niw3NGMtLjkxLDAtMS44MSwwLTIuNzEuMDhaXCIvPjxwb2x5Z29uIGlkPVwic3BvcnRcIiBwb2ludHM9XCI0Mi42OSAxMTIuNjEgMzkuNDggMTA5LjQgMTA4IDQwLjg4IDExMS4yMSA0NC4xIDQyLjY5IDExMi42MSA0Mi42OSAxMTIuNjFcIi8+PC9zdmc+J30pLGVtb2ppQ2F0ZWdvcmllcy5wdXNoKHtuYW1lOlwidHJhbnNwb3J0XCIsc3ZnOic8c3ZnIGlkPVwidHJhbnNwb3J0XCIgZGF0YS1uYW1lPVwiTGF5ZXIgMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDE1MCAxNTBcIj48cGF0aCBpZD1cInRyYW5zcG9ydFwiIGQ9XCJNMTIwLjcsMTE2SDMxYTQuNTUsNC41NSwwLDAsMS00LjU0LTQuNTVWNTQuMjhBMzEuODIsMzEuODIsMCwwLDEsNTguMjUsMjIuNDloMzUuMmEzMS44MywzMS44MywwLDAsMSwzMS44LDMxLjc5djU3LjE1QTQuNTUsNC41NSwwLDAsMSwxMjAuNywxMTZabS04NS4xNi05LjA5aDgwLjYyVjU0LjI4QTIyLjc0LDIyLjc0LDAsMCwwLDkzLjQ1LDMxLjU3SDU4LjI1QTIyLjc0LDIyLjc0LDAsMCwwLDM1LjU0LDU0LjI4djUyLjYxWlwiLz48cGF0aCBpZD1cInRyYW5zcG9ydFwiIGQ9XCJNNDkuMzUsMTI5LjIzYy04LjUzLDAtMTMuNjItMi43Ny0xMy42Mi03LjQxVjExNS42YTQuNTQsNC41NCwwLDEsMSw5LjA4LDB2NC4wNmEyMS4zMiwyMS4zMiwwLDAsMCw5LjA5LDBWMTE1LjZhNC41NCw0LjU0LDAsMCwxLDkuMDgsMHY2LjIyYzAsNC42NC01LjA5LDcuNDEtMTMuNjMsNy40MVpcIi8+PHBhdGggaWQ9XCJ0cmFuc3BvcnRcIiBkPVwiTTEwMi4zNCwxMjkuMjNjLTguNTMsMC0xMy42Mi0yLjc3LTEzLjYyLTcuNDFWMTE1LjZhNC41NCw0LjU0LDAsMCwxLDkuMDgsMHY0LjA2YTIxLjI4LDIxLjI4LDAsMCwwLDkuMDgsMFYxMTUuNmE0LjU1LDQuNTUsMCwwLDEsOS4wOSwwdjYuMjJjMCw0LjY0LTUuMDksNy40MS0xMy42Myw3LjQxWlwiLz48cGF0aCBpZD1cInRyYW5zcG9ydFwiIGQ9XCJNOTcuODEsNDQuODNINTMuOWE0LjU1LDQuNTUsMCwxLDEsMC05LjA5SDk3LjgxYTQuNTUsNC41NSwwLDAsMSwwLDkuMDlaXCIvPjxwYXRoIGlkPVwidHJhbnNwb3J0XCIgZD1cIk01NC4yOCw4NC4yQTYuOCw2LjgsMCwxLDAsNjEuMDcsOTFhNi44LDYuOCwwLDAsMC02Ljc5LTYuOFpcIi8+PHBhdGggaWQ9XCJ0cmFuc3BvcnRcIiBkPVwiTTk3LjQzLDg0LjJhNi44LDYuOCwwLDEsMCw2Ljc5LDYuOCw2LjgsNi44LDAsMCwwLTYuNzktNi44WlwiLz48cGF0aCBpZD1cInRyYW5zcG9ydFwiIGQ9XCJNMTA3LjA4LDgxSDQ0LjYzYTYuODIsNi44MiwwLDAsMS02LjgyLTYuODJWNTQuMjhhNi44Miw2LjgyLDAsMCwxLDYuODItNi44MWg2Mi40NWE2LjgyLDYuODIsMCwwLDEsNi44MSw2LjgxVjc0LjE1QTYuODMsNi44MywwLDAsMSwxMDcuMDgsODFaTTQ0LjYzLDUyYTIuMjgsMi4yOCwwLDAsMC0yLjI4LDIuMjdWNzQuMTVhMi4yOCwyLjI4LDAsMCwwLDIuMjgsMi4yN2g2Mi40NWEyLjI3LDIuMjcsMCwwLDAsMi4yNy0yLjI3VjU0LjI4QTIuMjcsMi4yNywwLDAsMCwxMDcuMDgsNTJaXCIvPjwvc3ZnPid9KSxlbW9qaUNhdGVnb3JpZXMucHVzaCh7bmFtZTpcIm9iamVjdHNcIixzdmc6JzxzdmcgaWQ9XCJvYmplY3RzXCIgZGF0YS1uYW1lPVwiTGF5ZXIgMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDE1MCAxNTBcIj48cGF0aCBpZD1cIm9iamVjdHNcIiBkPVwiTTEwNy43OCwxMjlhNC41NSw0LjU1LDAsMCwxLTIuNjctLjg3bC0zMC0yMS43OS0zMCwyMS43OWE0LjUzLDQuNTMsMCwwLDEtNS4zNCwwLDQuNTgsNC41OCwwLDAsMS0xLjY1LTUuMDhMNDkuNTksODcuODIsMTkuNiw2NmE0LjU0LDQuNTQsMCwwLDEsMi42Ny04LjIySDU5LjM0TDcwLjgsMjIuNTVhNC41NSw0LjU1LDAsMCwxLDguNjQsMEw5MC44OSw1Ny44MUgxMjhBNC41NCw0LjU0LDAsMCwxLDEzMC42Myw2NmwtMzAsMjEuNzksMTEuNDYsMzUuMjVhNC41NSw0LjU1LDAsMCwxLTQuMzIsNlpNNzUuMTIsOTYuMmE0LjUzLDQuNTMsMCwwLDEsMi42Ny44N2wyMS4zNSwxNS41MUw5MSw4Ny40OWE0LjU1LDQuNTUsMCwwLDEsMS42NS01LjA4TDExNCw2Ni44OUg4Ny41OWE0LjU0LDQuNTQsMCwwLDEtNC4zMi0zLjEzbC04LjE1LTI1LjFMNjcsNjMuNzZhNC41Myw0LjUzLDAsMCwxLTQuMzIsMy4xM0gzNi4yNUw1Ny42MSw4Mi40MWE0LjU0LDQuNTQsMCwwLDEsMS42NSw1LjA4bC04LjE3LDI1LjA5TDcyLjQ1LDk3LjA3YTQuNTMsNC41MywwLDAsMSwyLjY3LS44N1pcIi8+PC9zdmc+J30pO2Vtb2ppQ2F0ZWdvcmllcy5tYXAoZnVuY3Rpb24oaXRlbSl7dmFyIGVtb2ppTGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtlbW9qaUxpbmsuc3R5bGUudGV4dERlY29yYXRpb249XCJub25lXCIsZW1vamlMaW5rLnN0eWxlLnBhZGRpbmc9XCI1cHhcIixlbW9qaUxpbmsuc3R5bGUucG9zaXRpb249XCJpbml0aWFsXCIsZW1vamlMaW5rLnN0eWxlLmZvbnRTaXplPVwiMjRweFwiLGVtb2ppTGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsXCJqYXZhc2NyaXB0OnZvaWQoMClcIiksZW1vamlMaW5rLnN0eWxlLmRpc3BsYXk9XCJ0YWJsZS1jZWxsXCIsZW1vamlMaW5rLnN0eWxlLnRleHRBbGlnbj1cImNlbnRlclwiLGVtb2ppTGluay5pZD1TdHJpbmcoaXRlbS5uYW1lKSxcImZhY2VzXCI9PVN0cmluZyhpdGVtLm5hbWUpJiYoZW1vamlMaW5rLnN0eWxlLmJhY2tncm91bmQ9XCIjYzJjMmMyXCIpLGVtb2ppTGluay5pbm5lckhUTUw9U3RyaW5nKGl0ZW0uc3ZnKSxlbW9qaUxpbmsub25tb3VzZWRvd249Y2xpY2tDYXRlZ29yeSxlbW9qaUNhdGVnb3J5LmFwcGVuZENoaWxkKGVtb2ppTGluayl9KSxbMTI4NTEzLDEyODUxNCwxMjg1MTUsMTI4NTE2LDEyODUxNywxMjg1MTgsMTI4NTIxLDEyODUyMiwxMjg1MjMsMTI4NTI0LDEyODUyNSwxMjg1MjcsMTI4NTMwLDEyODUzMSwxMjg1MzIsMTI4NTM0LDEyODUzNiwxMjg1MzgsMTI4NTQwLDEyODU0MSwxMjg1NDIsMTI4NTQ0LDEyODU0NSwxMjg1NDYsMTI4NTQ3LDEyODU0OCwxMjg1NDksMTI4NTUyLDEyODU1MywxMjg1NTQsMTI4NTU1LDEyODU1NywxMjg1NjAsMTI4NTYxLDEyODU2MiwxMjg1NjMsMTI4NTY1LDEyODU2N10ubWFwKGZ1bmN0aW9uKGl0ZW0pe3ZhciBlbW9qaUxpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7ZW1vamlMaW5rLnN0eWxlLnRleHREZWNvcmF0aW9uPVwibm9uZVwiLGVtb2ppTGluay5zdHlsZS5tYXJnaW49XCI1cHhcIixlbW9qaUxpbmsuc3R5bGUucG9zaXRpb249XCJpbml0aWFsXCIsZW1vamlMaW5rLnN0eWxlLmZvbnRTaXplPVwiMjRweFwiLGVtb2ppTGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsXCJqYXZhc2NyaXB0OnZvaWQoMClcIiksZW1vamlMaW5rLmlubmVySFRNTD1TdHJpbmcuZnJvbUNvZGVQb2ludChpdGVtKSxlbW9qaUxpbmsub25tb3VzZWRvd249Y2xpY2tMaW5rLGZhY2VzQ2F0ZWdvcnkuYXBwZW5kQ2hpbGQoZW1vamlMaW5rKX0pLFsxMjgwMTIsMTI4MDEzLDEyODAxNCwxMjgwMTcsMTI4MDE4LDEyODAyMCwxMjgwMjMsMTI4MDI0LDEyODAyNSwxMjgwMjYsMTI4MDI3LDEyODAyOCwxMjgwMjksMTI4MDMwLDEyODAzMSwxMjgwMzIsMTI4MDMzLDEyODAzNCwxMjgwMzUsMTI4MDM2LDEyODAzNywxMjgwMzgsMTI4MDM5LDEyODA0MCwxMjgwNDEsMTI4MDQzLDEyODA0NCwxMjgwNDUsMTI4MDQ2LDEyODA0NywxMjgwNDgsMTI4MDQ5LDEyODA1MCwxMjgwNTEsMTI4MDUyLDEyODA1MywxMjgwNTQsMTI4MDU1LDEyODA1NiwxMjgwNTcsMTI4MDU4LDEyODA1OSwxMjgwNjBdLm1hcChmdW5jdGlvbihpdGVtKXt2YXIgZW1vamlMaW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2Vtb2ppTGluay5zdHlsZS50ZXh0RGVjb3JhdGlvbj1cIm5vbmVcIixlbW9qaUxpbmsuc3R5bGUubWFyZ2luPVwiNXB4XCIsZW1vamlMaW5rLnN0eWxlLnBvc2l0aW9uPVwiaW5pdGlhbFwiLGVtb2ppTGluay5zdHlsZS5mb250U2l6ZT1cIjI0cHhcIixlbW9qaUxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLFwiamF2YXNjcmlwdDp2b2lkKDApXCIpLGVtb2ppTGluay5pbm5lckhUTUw9U3RyaW5nLmZyb21Db2RlUG9pbnQoaXRlbSksZW1vamlMaW5rLm9ubW91c2Vkb3duPWNsaWNrTGluayxhbmltYWxzQ2F0ZWdvcnkuYXBwZW5kQ2hpbGQoZW1vamlMaW5rKX0pLFsxMjc4MTMsMTI3ODE0LDEyNzgxNSwxMjc4MTYsMTI3ODE3LDEyNzgxOCwxMjc4MjAsMTI3ODIxLDEyNzgyMiwxMjc4MjMsMTI3ODI1LDEyNzgyNiwxMjc4MjcsMTI3ODI4LDEyNzgyOSwxMjc4MzAsMTI3ODMxLDEyNzgzMiwxMjc4MzYsMTI3ODM3LDEyNzgzOCwxMjc4MzksMTI3ODQwLDEyNzg0MSwxMjc4NDIsMTI3ODQzLDEyNzg0NCwxMjc4NDYsMTI3ODQ4LDEyNzg0OSwxMjc4NTAsMTI3ODUxLDEyNzg1MiwxMjc4NTMsMTI3ODU2LDEyNzg1OCwxMjc4NTksMTI3ODYwLDEyNzg2MywxMjc4NjQsMTI3ODY3XS5tYXAoZnVuY3Rpb24oaXRlbSl7dmFyIGVtb2ppTGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtlbW9qaUxpbmsuc3R5bGUudGV4dERlY29yYXRpb249XCJub25lXCIsZW1vamlMaW5rLnN0eWxlLm1hcmdpbj1cIjVweFwiLGVtb2ppTGluay5zdHlsZS5wb3NpdGlvbj1cImluaXRpYWxcIixlbW9qaUxpbmsuc3R5bGUuZm9udFNpemU9XCIyNHB4XCIsZW1vamlMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIixcImphdmFzY3JpcHQ6dm9pZCgwKVwiKSxlbW9qaUxpbmsuaW5uZXJIVE1MPVN0cmluZy5mcm9tQ29kZVBvaW50KGl0ZW0pLGVtb2ppTGluay5vbm1vdXNlZG93bj1jbGlja0xpbmssZm9vZENhdGVnb3J5LmFwcGVuZENoaWxkKGVtb2ppTGluayl9KSxbMTI3OTIxLDEyNzkyMywxMjc5MzQsMTI3OTM1LDEyNzkzNiwxMjc5MzcsMTI3OTM4LDEyNzkzOSwxMjc5NDAsMTI3OTQyLDEyNzk0NCwxMjc5NDYsMTI4Njc1LDEyODY5MiwxMjg2OTMsOTkxNyw5OTE4LDk5NzgsMTI3OTA3LDEyNzkxOSw5OTcxXS5tYXAoZnVuY3Rpb24oaXRlbSl7dmFyIGVtb2ppTGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtlbW9qaUxpbmsuc3R5bGUudGV4dERlY29yYXRpb249XCJub25lXCIsZW1vamlMaW5rLnN0eWxlLm1hcmdpbj1cIjVweFwiLGVtb2ppTGluay5zdHlsZS5wb3NpdGlvbj1cImluaXRpYWxcIixlbW9qaUxpbmsuc3R5bGUuZm9udFNpemU9XCIyNHB4XCIsZW1vamlMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIixcImphdmFzY3JpcHQ6dm9pZCgwKVwiKSxlbW9qaUxpbmsuaW5uZXJIVE1MPVN0cmluZy5mcm9tQ29kZVBvaW50KGl0ZW0pLGVtb2ppTGluay5vbm1vdXNlZG93bj1jbGlja0xpbmssc3BvcnRDYXRlZ29yeS5hcHBlbmRDaGlsZChlbW9qaUxpbmspfSksWzEyODY0MSwxMjg2NDIsMTI4NjQ2LDEyODY0OCwxMjg2NTAsMTI4NjUzLDEyODY1NCwxMjg2NTYsMTI4NjYwLDEyODY2MiwxMjg2NjQsMTI4NjY3LDEyODY2OCwxMjg2NjksMTI4NjcwLDEyODY3MSwxMjg2NzIsMTI4NjczLDEyODY0MCwxMjg2NDMsMTI4NjQ0LDEyODY0NSwxMjg2NDcsMTI4NjQ5LDEyODY1MiwxMjg2NTcsMTI4NjU4LDEyODY1OSwxMjg2NjEsMTI4NjYzLDEyODY2NSwxMjg2NjYsMTI4Njc0LDEyODY3NiwxMjg2OTBdLm1hcChmdW5jdGlvbihpdGVtKXt2YXIgZW1vamlMaW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2Vtb2ppTGluay5zdHlsZS50ZXh0RGVjb3JhdGlvbj1cIm5vbmVcIixlbW9qaUxpbmsuc3R5bGUubWFyZ2luPVwiNXB4XCIsZW1vamlMaW5rLnN0eWxlLnBvc2l0aW9uPVwiaW5pdGlhbFwiLGVtb2ppTGluay5zdHlsZS5mb250U2l6ZT1cIjI0cHhcIixlbW9qaUxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLFwiamF2YXNjcmlwdDp2b2lkKDApXCIpLGVtb2ppTGluay5pbm5lckhUTUw9U3RyaW5nLmZyb21Db2RlUG9pbnQoaXRlbSksZW1vamlMaW5rLm9ubW91c2Vkb3duPWNsaWNrTGluayx0cmFuc3BvcnRDYXRlZ29yeS5hcHBlbmRDaGlsZChlbW9qaUxpbmspfSksWzEyNzg5MCwxMjc4ODAsMTI3ODgxLDEyNzg4NywxMjc4OTEsMTI3OTA1LDEyNzkwNiwxMjc5MDgsMTI3OTA5LDEyNzkxMSwxMjc5MTIsMTI3OTE1LDEyNzkxNiwxMjc5MTgsMTI3OTE5LDEyNzkyNiwxMjc5MjcsMTI3OTI4LDEyNzkyOSwxMjc5MzAsMTI3OTMxLDEyNzkzMiwxMjc5NjgsMTI3OTczLDEyNzk3OCwxMjgxNDcsMTI4MTQ4LDEyODE0OSwxMjgxNTAsMTI4MTUxLDEyODE1MiwxMjgxODcsMTI4MTg2LDEyODE5NywxMjgyMTMsMTI4MjQ3XS5tYXAoZnVuY3Rpb24oaXRlbSl7dmFyIGVtb2ppTGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO2Vtb2ppTGkuc3R5bGUuZGlzcGxheT1cImlubGluZS1ibG9ja1wiLGVtb2ppTGkuc3R5bGUubWFyZ2luPVwiNXB4XCI7dmFyIGVtb2ppTGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtlbW9qaUxpbmsuc3R5bGUudGV4dERlY29yYXRpb249XCJub25lXCIsZW1vamlMaW5rLnN0eWxlLm1hcmdpbj1cIjVweFwiLGVtb2ppTGluay5zdHlsZS5wb3NpdGlvbj1cImluaXRpYWxcIixlbW9qaUxpbmsuc3R5bGUuZm9udFNpemU9XCIyNHB4XCIsZW1vamlMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIixcImphdmFzY3JpcHQ6dm9pZCgwKVwiKSxlbW9qaUxpbmsuaW5uZXJIVE1MPVN0cmluZy5mcm9tQ29kZVBvaW50KGl0ZW0pLGVtb2ppTGluay5vbm1vdXNlZG93bj1jbGlja0xpbmssb2JqZWN0c0NhdGVnb3J5LmFwcGVuZENoaWxkKGVtb2ppTGluayl9KSxlbW9qaVBpY2tlci5hcHBlbmRDaGlsZChlbW9qaUNhdGVnb3J5KSxlbW9qaVBpY2tlci5hcHBlbmRDaGlsZChmYWNlc0NhdGVnb3J5KSxlbW9qaVBpY2tlci5hcHBlbmRDaGlsZChhbmltYWxzQ2F0ZWdvcnkpLGVtb2ppUGlja2VyLmFwcGVuZENoaWxkKGZvb2RDYXRlZ29yeSksZW1vamlQaWNrZXIuYXBwZW5kQ2hpbGQoc3BvcnRDYXRlZ29yeSksZW1vamlQaWNrZXIuYXBwZW5kQ2hpbGQodHJhbnNwb3J0Q2F0ZWdvcnkpLGVtb2ppUGlja2VyLmFwcGVuZENoaWxkKG9iamVjdHNDYXRlZ29yeSksZW1vamlDb250YWluZXIuYXBwZW5kQ2hpbGQoZW1vamlQaWNrZXIpfX1dKSxNZXRlb3JFbW9qaX0oKTttb2R1bGUuZXhwb3J0cz1NZXRlb3JFbW9qaX0pfSx7fV19LHt9LFsxXSkoMSl9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWV0ZW9yLWVtb2ppL2Rpc3QvbWV0ZW9yRW1vamkubWluLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRpZighbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=