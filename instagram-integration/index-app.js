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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(23)(module)))

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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(21);

var _consts = __webpack_require__(0);

var _pubsubJs = __webpack_require__(4);

var _pubsubJs2 = _interopRequireDefault(_pubsubJs);

var _registerForm = __webpack_require__(16);

var _registerForm2 = _interopRequireDefault(_registerForm);

var _loginForm = __webpack_require__(14);

var _loginPage = __webpack_require__(19);

var _confirmReg = __webpack_require__(8);

var _header = __webpack_require__(12);

var header = _interopRequireWildcard(_header);

var _burgerMenu = __webpack_require__(11);

var burgerMenu = _interopRequireWildcard(_burgerMenu);

var _instagramAccountsList = __webpack_require__(13);

var instagramAccounts = _interopRequireWildcard(_instagramAccountsList);

var _messages = __webpack_require__(15);

var messages = _interopRequireWildcard(_messages);

var _follow = __webpack_require__(10);

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
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.init = init;

var _apiTaskManager = __webpack_require__(6);

var _apiTaskManager2 = _interopRequireDefault(_apiTaskManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $btnShowRuns = $('.js_btn-show-task-runs'); // import {CONST} from '../../common/js-services/consts';

var $btnShowStopped = $('.js_btn-show-task-stopped');
var $taskListRuns = $('.follow-tasks-runs--box');
var $taskListStopped = $('.follow-tasks-stopped--box');
var hideCls = 'd-none';
var showCls = 'd-block';

function fillListMeta($list, dataArray, isRuns) {
    var items = dataArray;
    // const defaultAvatarSrc = 'https://i.imgur.com/jNNT4LE.png';
    $list.empty();
    items.forEach(function (item) {
        if (item.type !== 'FOLLOWING') {
            return;
        }
        if (item.status.state === 'STOPPED' && !isRuns) {
            $('<li class="list-group-item p-0" data-username="' + item.type + '">\n                <div class="media-body d-flex">\n                    <div class="col task-type">\n                        ' + (item.task_id ? '<p class="badge badge-secondary">' + item.task_id + '</p>' : '') + '\n                    </div>\n                    <!--<div class="col task-subtype">\n                        ' + (item.subtype ? '<p class="mt-0 mb-1">' + item.subtype + '</p>' : '') + '\n                    </div>-->\n                    <div class="col task-progress">\n                        <p class="small mb-1">reason</p>\n                        <p class="mb-1">' + item.status.reason + '</p>\n                    </div>\n                </div>\n            </li>').appendTo($list);
        } else if (item.status.state !== 'STOPPED' && isRuns) {
            $('<li class="list-group-item py-2" data-username="' + item.type + '">\n                <div class="col task-progress">\n                    <p class="mt-0 mb-1 name">Runs - ' + item.status.reason + '</p>\n                </div>\n            </li>').appendTo($list);
        }
        if (!$('li', $list).length) {
            $('<li class="list-group-item py-2">\n                \u0412 \u044D\u0442\u043E\u043C \u0440\u0430\u0437\u0434\u0435\u043B\u0435 \u043D\u0435\u0442 \u043D\u0438 \u043E\u0434\u043D\u043E\u0439 \u0437\u0430\u0434\u0430\u0447\u0438.\n            </li>').appendTo($list);
        }
    });
}

function getTasksData() {
    _apiTaskManager2.default.getMetadata().then(function (result) {
        console.log(result);
        if (result.status.state === 'ok') {
            fillListMeta($('.follow-tasks-runs'), result.data.meta, 'isRuns');
            fillListMeta($('.follow-tasks-stopped'), result.data.meta);
        }
    });
}
function initHandlers() {
    $btnShowRuns.on('click', function () {
        console.log('$btnShowRuns');
        $taskListStopped.addClass(hideCls).removeClass(showCls);
        $taskListRuns.addClass(showCls).removeClass(hideCls);
    });

    $btnShowStopped.on('click', function () {
        console.log('$btnShowStopped');
        $taskListRuns.addClass(hideCls).removeClass(showCls);
        $taskListStopped.addClass(showCls).removeClass(hideCls);
    });
}

/**
 * Init
 */
function init() {
    getTasksData();
    initHandlers();
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.init = init;

var _followStatus = __webpack_require__(9);

var followStatus = _interopRequireWildcard(_followStatus);

var _consts = __webpack_require__(0);

var _apiTaskManager = __webpack_require__(6);

var _apiTaskManager2 = _interopRequireDefault(_apiTaskManager);

__webpack_require__(20);

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
        console.log(result);
        if (result.status.state === 'ok') {
            fillListMeta($('.follow-tasks-list'), result.data.meta);
        }
    });

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
    followStatus.init();
    initSteps();
    if ($('.follow').length) {
        window.PubSub.subscribe(_consts.CONST.events.instagramAccouns.INSTAGRAM_ACCOUNS_RENDERED, function (eventName, data) {
            modifyAccList();
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
/* 12 */
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
/* 13 */
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
/* 14 */
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.init = init;

var _meteorEmoji = __webpack_require__(22);

var _meteorEmoji2 = _interopRequireDefault(_meteorEmoji);

var _user = __webpack_require__(2);

var _user2 = _interopRequireDefault(_user);

var _apiUserDirect = __webpack_require__(17);

var _apiUserDirect2 = _interopRequireDefault(_apiUserDirect);

var _spinner = __webpack_require__(18);

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
/* 16 */
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
/* 17 */
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
/* 18 */
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
/* 19 */
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
/* 20 */
/***/ (function(module, exports) {

if("undefined"==typeof brutusin)window.brutusin=new Object;else if("object"!=typeof brutusin)throw"brutusin global variable already exists";!function(){String.prototype.startsWith||(String.prototype.startsWith=function(e,t){return t=t||0,this.indexOf(e,t)===t}),String.prototype.endsWith||(String.prototype.endsWith=function(e,t){var r=this.toString();(void 0===t||t>r.length)&&(t=r.length),t-=e.length;var n=r.indexOf(e,t);return-1!==n&&n===t}),String.prototype.includes||(String.prototype.includes=function(){"use strict";return-1!==String.prototype.indexOf.apply(this,arguments)}),String.prototype.format||(String.prototype.format=function(){for(var e=this,t=0;t<arguments.length;t++){var r=new RegExp("\\{"+t+"\\}","gi");e=e.replace(r,arguments[t])}return e});var BrutusinForms=new Object;BrutusinForms.messages={validationError:"Validation error",required:"This field is **required**",invalidValue:"Invalid field value",addpropNameExistent:"This property is already present in the object",addpropNameRequired:"A name is required",minItems:"At least `{0}` items are required",maxItems:"At most `{0}` items are allowed",pattern:"Value does not match pattern: `{0}`",minLength:"Value must be **at least** `{0}` characters long",maxLength:"Value must be **at most** `{0}` characters long",multipleOf:"Value must be **multiple of** `{0}`",minimum:"Value must be **greater or equal than** `{0}`",exclusiveMinimum:"Value must be **greater than** `{0}`",maximum:"Value must be **lower or equal than** `{0}`",exclusiveMaximum:"Value must be **lower than** `{0}`",minProperties:"At least `{0}` properties are required",maxProperties:"At most `{0}` properties are allowed",uniqueItems:"Array items must be unique",addItem:"Add item","true":"True","false":"False"},BrutusinForms.decorators=new Array,BrutusinForms.addDecorator=function(e){BrutusinForms.decorators[BrutusinForms.decorators.length]=e},BrutusinForms.onResolutionStarted=function(e){},BrutusinForms.onResolutionFinished=function(e){},BrutusinForms.onValidationError=function(e,t){e.focus(),e.className.includes(" error")||(e.className+=" error"),alert(t)},BrutusinForms.onValidationSuccess=function(e){e.className=e.className.replace(" error","")},BrutusinForms.postRender=null,BrutusinForms.instances=new Array,BrutusinForms.create=function(schema){function validateDepencyMapIsAcyclic(){function e(t,r,n){if(r.hasOwnProperty(n))return void(error="Schema dependency graph has cycles");if(r[n]=null,!t.hasOwnProperty(n)){t[n]=null;var a=dependencyMap[n];if(a)for(var i=0;i<a.length;i++)e(t,r,a[i]);delete r[n]}}var t=new Object;for(var r in dependencyMap)t.hasOwnProperty(r)||e(t,new Object,r)}function appendChild(e,t,r){e.appendChild(t);for(var n=0;n<BrutusinForms.decorators.length;n++)BrutusinForms.decorators[n](t,r)}function createPseudoSchema(e){var t=new Object;for(var r in e)"items"!==r&&"properties"!==r&&"additionalProperties"!==r&&("pattern"===r?t[r]=new RegExp(e[r]):t[r]=e[r]);return t}function getDefinition(e){var t=e.split("/"),r=root;for(var n in t)"0"!==n&&(r=r[t[n]]);return r}function containsStr(e,t){for(var r=0;r<e.length;r++)if(e[r]==t)return!0;return!1}function renameRequiredPropeties(e){if(e)if(e.hasOwnProperty("oneOf"))for(var t in e.oneOf)renameRequiredPropeties(e.oneOf[t]);else if(e.hasOwnProperty("$ref")){var r=getDefinition(e.$ref);renameRequiredPropeties(r)}else if("object"===e.type){if(e.properties){e.hasOwnProperty("required")&&Array.isArray(e.required)&&(e.requiredProperties=e.required,delete e.required);for(var n in e.properties)renameRequiredPropeties(e.properties[n])}if(e.patternProperties)for(var a in e.patternProperties){var i=e.patternProperties[a];(i.hasOwnProperty("type")||i.hasOwnProperty("$ref")||i.hasOwnProperty("oneOf"))&&renameRequiredPropeties(e.patternProperties[a])}e.additionalProperties&&(e.additionalProperties.hasOwnProperty("type")||e.additionalProperties.hasOwnProperty("oneOf"))&&renameRequiredPropeties(e.additionalProperties)}else"array"===e.type&&renameRequiredPropeties(e.items)}function populateSchemaMap(e,t){var r=createPseudoSchema(t);if(r.$id=e,schemaMap[e]=r,t){if(t.hasOwnProperty("oneOf")){r.oneOf=new Array,r.type="oneOf";for(var n in t.oneOf){var a=e+"."+n;r.oneOf[n]=a,populateSchemaMap(a,t.oneOf[n])}}else if(t.hasOwnProperty("$ref")){var i=getDefinition(t.$ref);if(i){if(t.hasOwnProperty("title")||t.hasOwnProperty("description")){var o={};for(var s in i)o[s]=i[s];t.hasOwnProperty("title")&&(o.title=t.title),t.hasOwnProperty("description")&&(o.description=t.description),i=o}populateSchemaMap(e,i)}}else if("object"===t.type){if(t.properties){r.properties=new Object;for(var s in t.properties){var a=e+"."+s;r.properties[s]=a;var u=t.properties[s];t.requiredProperties&&(containsStr(t.requiredProperties,s)?u.required=!0:u.required=!1),populateSchemaMap(a,u)}}if(t.patternProperties){r.patternProperties=new Object;for(var l in t.patternProperties){var d=e+"["+l+"]";r.patternProperties[l]=d;var p=t.patternProperties[l];p.hasOwnProperty("type")||p.hasOwnProperty("$ref")||p.hasOwnProperty("oneOf")?populateSchemaMap(d,t.patternProperties[l]):populateSchemaMap(d,SCHEMA_ANY)}}if(t.additionalProperties){var a=e+"[*]";r.additionalProperties=a,t.additionalProperties.hasOwnProperty("type")||t.additionalProperties.hasOwnProperty("oneOf")?populateSchemaMap(a,t.additionalProperties):populateSchemaMap(a,SCHEMA_ANY)}}else"array"===t.type&&(r.items=e+"[#]",populateSchemaMap(r.items,t.items));if(t.hasOwnProperty("dependsOn")){null===t.dependsOn&&(t.dependsOn=["$"]);for(var c=new Array,n=0;n<t.dependsOn.length;n++)t.dependsOn[n]?t.dependsOn[n].startsWith("$")?c[n]=t.dependsOn[n]:e.endsWith("]")?c[n]=e+"."+t.dependsOn[n]:c[n]=e.substring(0,e.lastIndexOf("."))+"."+t.dependsOn[n]:c[n]="$";schemaMap[e].dependsOn=c;for(var n=0;n<c.length;n++){var m=dependencyMap[c[n]];m||(m=new Array,dependencyMap[c[n]]=m),m[m.length]=e}}}}function renderTitle(e,t,r){if(e&&t){var n=document.createElement("label");"any"!==r.type&&"object"!==r.type&&"array"!==r.type&&(n.htmlFor=getInputId());var a=document.createTextNode(t+":");if(appendChild(n,a,r),r.description&&(n.title=r.description),r.required){var i=document.createElement("sup");appendChild(i,document.createTextNode("*"),r),appendChild(n,i,r),n.className="required"}appendChild(e,n,r)}}function getInputId(){return formId+"_"+inputCounter}function validate(e){var t=!0;if(e.hasOwnProperty("getValidationError")){var r=e.getValidationError();r?(BrutusinForms.onValidationError(e,r),t=!1):BrutusinForms.onValidationSuccess(e)}if(e.childNodes)for(var n=0;n<e.childNodes.length;n++)validate(e.childNodes[n])||(t=!1);return t}function clear(e){if(e)for(;e.firstChild;)e.removeChild(e.firstChild)}function render(e,t,r,n,a,i){var o=getSchemaId(r),s=getSchema(o);renderInfoMap[o]=new Object,renderInfoMap[o].titleContainer=e,renderInfoMap[o].container=t,renderInfoMap[o].parentObject=n,renderInfoMap[o].propertyProvider=a,renderInfoMap[o].value=i,clear(e),clear(t);var u=renderers[s.type];if(u&&!s.dependsOn)s.title?renderTitle(e,s.title,s):a&&renderTitle(e,a.getValue(),s),i||(i="undefined"!=typeof initialValue&&null!==initialValue?getInitialValue(r):s["default"]),u(t,r,n,a,i);else if(s.$ref&&obj.schemaResolver){var l=function(e){if(e&&e.hasOwnProperty(r)&&JSON.stringify(schemaMap[r])!==JSON.stringify(e[r])){cleanSchemaMap(r),cleanData(r),populateSchemaMap(r,e[r]);var t=renderInfoMap[r];t&&render(t.titleContainer,t.container,r,t.parentObject,t.propertyProvider,t.value)}BrutusinForms.onResolutionFinished(n)};BrutusinForms.onResolutionStarted(n),obj.schemaResolver([r],obj.getData(),l)}}function createPropertyProvider(e,t){var r=new Object;return r.getValue=e,r.onchange=t,r}function getInitialValue(id){var ret;try{eval("ret = initialValue"+id.substring(1))}catch(e){ret=null}return ret}function getValue(schema,input){if("function"==typeof input.getValue)return input.getValue();var value;return value="select"===input.tagName.toLowerCase()?input.options[input.selectedIndex].value:input.value,""===value?null:("integer"===schema.type?(value=parseInt(value),isFinite(value)||(value=null)):"number"===schema.type?(value=parseFloat(value),isFinite(value)||(value=null)):"boolean"===schema.type?"input"===input.tagName.toLowerCase()?(value=input.checked,value||(value=!1)):"select"===input.tagName.toLowerCase()&&(value="true"===input.value?!0:"false"===input.value?!1:null):"any"===schema.type&&value&&eval("value="+value),value)}function getSchemaId(e){return e.replace(/\["[^"]*"\]/g,"[*]").replace(/\[\d*\]/g,"[#]")}function getParentSchemaId(e){return e.substring(0,e.lastIndexOf("."))}function getSchema(e){return schemaMap[e]}function cleanSchemaMap(e){for(var t in schemaMap)e.startsWith(t)&&delete schemaMap[t]}function cleanData(e){var t=new Expression(e);t.visit(data,function(e,t,r){delete t[r]})}function onDependencyChanged(e,t){var r=dependencyMap[e];if(r&&obj.schemaResolver){var n=function(e){if(e)for(var r in e)if(JSON.stringify(schemaMap[r])!==JSON.stringify(e[r])){cleanSchemaMap(r),cleanData(r),populateSchemaMap(r,e[r]);var n=renderInfoMap[r];n&&render(n.titleContainer,n.container,r,n.parentObject,n.propertyProvider,n.value)}BrutusinForms.onResolutionFinished(t)};BrutusinForms.onResolutionStarted(t),obj.schemaResolver(r,obj.getData(),n)}}function Expression(e){function t(e){if(null===e)return null;for(var t=new Array,r=null,n=0,a=0;a<e.length;a++)'"'===e.charAt(a)?null===r?r='"':'"'===r&&(r=null,t[t.length]=e.substring(n,a+1).trim(),n=a+1):"'"===e.charAt(a)?null===r?r="'":"'"===r&&(r=null,t[t.length]=e.substring(n,a+1).trim(),n=a+1):"["===e.charAt(a)?null===r&&(n!==a&&(t[t.length]=e.substring(n,a).trim()),t[t.length]="[",n=a+1):"]"===e.charAt(a)?null===r&&(n!==a&&(t[t.length]=e.substring(n,a).trim()),t[t.length]="]",n=a+1):"."===e.charAt(a)?null===r&&(n!==a&&(t[t.length]=e.substring(n,a).trim()),n=a+1):a===e.length-1&&(t[t.length]=e.substring(n,a+1).trim());return t}(null===e||0===e.length||"."===e)&&(e="$");for(var r=new Array,n=t(e),a=!1,i=0,o="",s=0;s<n.length;s++){var u=n[s];if("["===u){if(a)throw"Error parsing expression '"+e+"': Nested [ found";a=!0,i=0,o+=u}else if("]"===u){if(!a)throw"Error parsing expression '"+e+"': Unbalanced ] found";a=!1,o+=u,r[r.length]=o,o=""}else if(a){if(i>0)throw"Error parsing expression '"+e+"': Multiple tokens found inside a bracket";o+=u,i++}else r[r.length]=u;if(s===n.length-1&&a)throw"Error parsing expression '"+e+"': Unbalanced [ found"}this.exp=e,this.queue=r,this.visit=function(e,t){function r(e,n,a,i,o){if(null!=a){var s=n.shift();if("$"===s){e="$";var s=n.shift()}if(s)if(Array.isArray(a)){if(!s.startsWith("["))throw"Node '"+e+"' is of type array";var u=s.substring(1,s.length-1);if(u.equals("#"))for(var l=0;l<a.length;l++){var d=a[l];r(e+s,n.slice(0),d,a,l),r(e+"["+l+"]",n.slice(0),d,a,l)}else if("$"===u){var d=a[a.length-1];r(e+s,n.slice(0),d,a,a.length-1)}else{var p=parseInt(u);if(isNaN(p))throw"Element '"+u+"' of node '"+e+"' is not an integer, or the '$' last element symbol,  or the wilcard symbol '#'";if(0>p)throw"Element '"+u+"' of node '"+e+"' is lower than zero";var d=a[p];r(e+s,n.slice(0),d,a,p)}}else{if("object"!=typeof a)throw"boolean"==typeof a||"number"==typeof a||"string"==typeof a?"Node is leaf but still are tokens remaining: "+s:"Node type '"+typeof a+"' not supported for index field '"+e+"'";if("[*]"===s)for(var c in a){var d=a[c];r(e+s,n.slice(0),d,a,c),r(e+'["'+c+'"]',n.slice(0),d,a,c)}else{var d;if(s.startsWith("[")){var u=s.substring(1,s.length-1);if(!u.startsWith('"')&&!u.startsWith("'"))throw"Element '"+u+"' of node '"+e+"' must be a string expression or wilcard '*'";u=u.substring(1,u.length()-1),e+=s,d=a[u]}else e=e.length>0?e+"."+s:s,d=a[s];r(e,n,d,a,s)}}else t(a,i,o)}}r(this.exp,this.queue,e)}}var SCHEMA_ANY={type:"any"},obj=new Object,schemaMap=new Object,dependencyMap=new Object,renderInfoMap=new Object,container,data,error,initialValue,inputCounter=0,root=schema,formId="BrutusinForms#"+BrutusinForms.instances.length;renameRequiredPropeties(schema),populateSchemaMap("$",schema),validateDepencyMapIsAcyclic();var renderers=new Object;return renderers.integer=function(e,t,r,n,a){renderers.string(e,t,r,n,a)},renderers.number=function(e,t,r,n,a){renderers.string(e,t,r,n,a)},renderers.any=function(e,t,r,n,a){renderers.string(e,t,r,n,a)},renderers.string=function(e,t,r,n,a){var i,o=getSchemaId(t),s=getParentSchemaId(o),u=getSchema(o),l=getSchema(s);if("any"===u.type)i=document.createElement("textarea"),a&&(i.value=JSON.stringify(a,null,4),u.readOnly&&(i.disabled=!0));else if(u.media)i=document.createElement("input"),i.type="file",appendChild(i,d,u);else if(u["enum"]){if(i=document.createElement("select"),!u.required){var d=document.createElement("option"),p=document.createTextNode("");d.value="",appendChild(d,p,u),appendChild(i,d,u)}for(var c=0,m=0;m<u["enum"].length;m++){var d=document.createElement("option"),p=document.createTextNode(u["enum"][m]);d.value=u["enum"][m],appendChild(d,p,u),appendChild(i,d,u),a&&u["enum"][m]===a&&(c=m,u.required||c++,u.readOnly&&(i.disabled=!0))}1===u["enum"].length?i.selectedIndex=1:i.selectedIndex=c}else{if(i=document.createElement("input"),"integer"===u.type||"number"===u.type)i.type="number",i.step=u.step?""+u.step:"any","number"!=typeof a&&(a=null);else if("date-time"===u.format)try{i.type="datetime-local"}catch(f){i.type="text"}else"email"===u.format?i.type="email":"text"===u.format?i=document.createElement("textarea"):i.type="text";null!==a&&"undefined"!=typeof a&&(i.value=a,u.readOnly&&(i.disabled=!0))}return i.schema=o,i.setAttribute("autocorrect","off"),i.getValidationError=function(){try{var e=getValue(u,i);if(null===e){if(u.required){if(!l||"object"!==l.type)return BrutusinForms.messages.required;if(l.required)return BrutusinForms.messages.required;for(var t in r)if(null!==r[t])return BrutusinForms.messages.required}}else{if(u.pattern&&!u.pattern.test(e))return BrutusinForms.messages.pattern.format(u.pattern.source);if(u.minLength&&(!e||u.minLength>e.length))return BrutusinForms.messages.minLength.format(u.minLength);if(u.maxLength&&e&&u.maxLength<e.length)return BrutusinForms.messages.maxLength.format(u.maxLength)}if(null!==e&&!isNaN(e)){if(u.multipleOf&&e%u.multipleOf!==0)return BrutusinForms.messages.multipleOf.format(u.multipleOf);if(u.hasOwnProperty("maximum")){if(u.exclusiveMaximum&&e>=u.maximum)return BrutusinForms.messages.exclusiveMaximum.format(u.maximum);if(!u.exclusiveMaximum&&e>u.maximum)return BrutusinForms.messages.maximum.format(u.maximum)}if(u.hasOwnProperty("minimum")){if(u.exclusiveMinimum&&e<=u.minimum)return BrutusinForms.messages.exclusiveMinimum.format(u.minimum);if(!u.exclusiveMinimum&&e<u.minimum)return BrutusinForms.messages.minimum.format(u.minimum)}}}catch(n){return BrutusinForms.messages.invalidValue}},i.onchange=function(){var e;try{e=getValue(u,i)}catch(t){e=null}r?r[n.getValue()]=e:data=e,onDependencyChanged(o,i)},u.description&&(i.title=u.description,i.placeholder=u.description),i.onchange(),i.id=getInputId(),inputCounter++,appendChild(e,i,u),r},renderers["boolean"]=function(e,t,r,n,a){var i,o=getSchemaId(t),s=getSchema(o);if(s.required)i=document.createElement("input"),i.type="checkbox",a===!0&&(i.checked=!0);else{i=document.createElement("select");var u=document.createElement("option"),l=document.createTextNode("");l.value="",appendChild(u,l,s),appendChild(i,u,s);var d=document.createElement("option"),p=document.createTextNode(BrutusinForms.messages["true"]);d.value="true",appendChild(d,p,s),appendChild(i,d,s);var c=document.createElement("option"),m=document.createTextNode(BrutusinForms.messages["false"]);c.value="false",appendChild(c,m,s),appendChild(i,c,s),a===!0?i.selectedIndex=1:a===!1&&(i.selectedIndex=2)}i.onchange=function(){r?r[n.getValue()]=getValue(s,i):data=getValue(s,i),onDependencyChanged(o,i)},i.schema=o,i.id=getInputId(),inputCounter++,s.description&&(i.title=s.description),i.onchange(),appendChild(e,i,s)},renderers.oneOf=function(e,t,r,n,a){var i=getSchemaId(t),o=getSchema(i),s=document.createElement("select"),u=document.createElement("div");u.innerHTML="",s.type="select",s.schema=i;var l=document.createElement("option");l.value=null,appendChild(s,l,o);for(var d=0;d<o.oneOf.length;d++){var p=document.createElement("option"),c=i+"."+d,m=getSchema(c),f=document.createTextNode(m.title);if(p.value=o.oneOf[d],appendChild(p,f,o),appendChild(s,p,o),void 0!==a&&null!==a&&(o.readOnly&&(s.disabled=!0),a.hasOwnProperty("type")&&m.hasOwnProperty("properties")&&m.properties.hasOwnProperty("type"))){var h=getSchema(m.properties.type);a.type===h["enum"][0]&&(s.selectedIndex=d+1,render(null,u,t+"."+(s.selectedIndex-1),r,n,a))}}s.onchange=function(){render(null,u,t+"."+(s.selectedIndex-1),r,n,a)},appendChild(e,s,o),appendChild(e,u,o)},renderers.object=function(e,t,r,n,a){function i(e){var t=new Object;return t.getValue=function(){return e},t.onchange=function(e){},t}function o(e,t,r,n,a,i){var o=getSchemaId(r),s=getSchema(o),u=t.tBodies[0],l=document.createElement("tr"),d=document.createElement("td");d.className="add-prop-name";var p=document.createElement("table"),c=document.createElement("tr"),m=document.createElement("td"),f=document.createElement("td"),h="$"+Object.keys(e).length+"$",v=document.createElement("td");v.className="prop-value";var g=document.createElement("input");g.type="text";var y;i&&(y=RegExp(i)),g.getValidationError=function(){return g.previousValue!==g.value&&e.hasOwnProperty(g.value)?BrutusinForms.messages.addpropNameExistent:g.value?void 0:BrutusinForms.messages.addpropNameRequired};var b=createPropertyProvider(function(){if(g.value){if(!y)return g.value;if(-1!==g.value.search(y))return g.value}return h},function(t){b.getValue()!==t&&(t&&e.hasOwnProperty(t)||(t=h),(e.hasOwnProperty(t)||y&&-1===b.getValue().search(y))&&(e[b.getValue()]=e[t],delete e[t]))});g.onblur=function(){if(g.previousValue!==g.value){for(var t=g.value,r=1;g.previousValue!==t&&e.hasOwnProperty(t);)t=g.value+"("+r+")",r++;return g.value=t,b.onchange(g.previousValue),void(g.previousValue=g.value)}};var P=document.createElement("button");P.setAttribute("type","button"),P.className="remove",appendChild(P,document.createTextNode("x"),s),P.onclick=function(){delete e[g.value],t.deleteRow(l.rowIndex),g.value=null,b.onchange(g.previousValue)},appendChild(m,g,s),appendChild(f,P,s),appendChild(c,m,s),appendChild(c,f,s),appendChild(p,c,s),appendChild(d,p,s),void 0!==i&&(g.placeholder=i),appendChild(l,d,s),appendChild(l,v,s),appendChild(u,l,s),appendChild(t,u,s),render(null,v,r,e,b,a),n&&(g.value=n,g.onblur())}var s=getSchemaId(t),u=getSchema(s),l=new Object;r?(n.getValue()||0===n.getValue())&&(r[n.getValue()]=l):data=l;var d=document.createElement("table");d.className="object";var p=document.createElement("tbody");appendChild(d,p,u);var c=0;if(u.hasOwnProperty("properties")){c=u.properties.length;for(var m in u.properties){var f=document.createElement("tr"),h=document.createElement("td");h.className="prop-name";var v=t+"."+m,g=getSchema(getSchemaId(v)),y=document.createElement("td");y.className="prop-value",appendChild(p,f,g),appendChild(f,h,g),appendChild(f,y,g);var b=i(m),P=null;a&&(P=a[m]),render(h,y,v,l,b,P)}}var O=[];if(u.patternProperties||u.additionalProperties){var w=document.createElement("div");if(appendChild(w,d,u),u.patternProperties)for(var x in u.patternProperties){var C=u.patternProperties[x],E=document.createElement("div");E.className="add-pattern-div";var S=document.createElement("button");if(S.setAttribute("type","button"),S.pattern=x,S.id=t+"["+x+"]",S.onclick=function(){o(l,d,this.id,void 0,void 0,this.pattern)},(u.maxProperties||u.minProperties)&&(S.getValidationError=function(){return u.minProperties&&c+d.rows.length<u.minProperties?BrutusinForms.messages.minProperties.format(u.minProperties):u.maxProperties&&c+d.rows.length>u.maxProperties?BrutusinForms.messages.maxProperties.format(u.maxProperties):void 0}),C.description&&(S.title=C.description),appendChild(S,document.createTextNode("Add "+x),u),appendChild(E,S,u),a)for(var I in a)if(!u.properties||!u.properties.hasOwnProperty(I)){var N=RegExp(x);-1!==I.search(N)&&-1===O.indexOf(I)&&(o(l,d,t+"["+x+"]",I,a[I],x),O.push(I))}appendChild(w,E,u)}if(u.additionalProperties){var F=getSchema(u.additionalProperties),S=document.createElement("button");if(S.setAttribute("type","button"),S.onclick=function(){o(l,d,t+"[*]",void 0)},(u.maxProperties||u.minProperties)&&(S.getValidationError=function(){return u.minProperties&&c+d.rows.length<u.minProperties?BrutusinForms.messages.minProperties.format(u.minProperties):u.maxProperties&&c+d.rows.length>u.maxProperties?BrutusinForms.messages.maxProperties.format(u.maxProperties):void 0}),F.description&&(S.title=F.description),appendChild(S,document.createTextNode("Add"),u),appendChild(w,S,u),a)for(var I in a)u.properties&&u.properties.hasOwnProperty(I)||-1===O.indexOf(I)&&o(l,d,t+'["'+m+'"]',I,a[I])}appendChild(e,w,u)}else appendChild(e,d,u)},renderers.array=function(e,t,r,n,a){function i(e,t,r,n,a){var i=getSchemaId(r),o=getSchema(i),s=document.createElement("tbody"),u=document.createElement("tr");u.className="item";var l=document.createElement("td");l.className="item-index";var d=document.createElement("td");d.className="item-action";var p=document.createElement("td");p.className="item-value";var c=document.createElement("button");c.setAttribute("type","button"),c.className="remove",a===!0&&(c.disabled=!0),appendChild(c,document.createTextNode("x"),o);var m=function(){for(var e=0;e<t.rows.length;e++){var r=t.rows[e];r.cells[0].innerHTML=e+1}};c.onclick=function(){e.splice(u.rowIndex,1),t.deleteRow(u.rowIndex),m()},appendChild(d,c,o);var f=document.createTextNode(t.rows.length+1);appendChild(l,f,o),appendChild(u,l,o),appendChild(u,d,o),appendChild(u,p,o),appendChild(s,u,o),appendChild(t,s,o);var h=createPropertyProvider(function(){return u.rowIndex});render(null,p,r,e,h,n)}var o=getSchemaId(t),s=getSchema(o),u=getSchema(s.items),l=new Array;r?(n.getValue()||0===n.getValue())&&(r[n.getValue()]=l):data=l,n&&(n.onchange=function(e){delete r[e],r[n.getValue()]=l});var d=document.createElement("div"),p=document.createElement("table");p.className="array",appendChild(d,p,s),appendChild(e,d,s);var c=document.createElement("button");if(s.readOnly&&(c.disabled=!0),c.setAttribute("type","button"),c.getValidationError=function(){if(s.minItems&&s.minItems>p.rows.length)return BrutusinForms.messages.minItems.format(s.minItems);if(s.maxItems&&s.maxItems<p.rows.length)return BrutusinForms.messages.maxItems.format(s.maxItems);if(s.uniqueItems)for(var e=0;e<l.length;e++)for(var t=e+1;t<l.length;t++)if(JSON.stringify(l[e])===JSON.stringify(l[t]))return BrutusinForms.messages.uniqueItems},c.onclick=function(){i(l,p,t+"[#]",null)},u.description&&(c.title=u.description),appendChild(c,document.createTextNode(BrutusinForms.messages.addItem),s),appendChild(d,p,s),appendChild(d,c,s),a&&a instanceof Array)for(var m=0;m<a.length;m++)i(l,p,t+"["+m+"]",a[m],s.readOnly);appendChild(e,d,s)},obj.render=function(e,t){container=e,initialValue=t;var r=document.createElement("form");if(r.className="brutusin-form",r.onsubmit=function(e){return!1},container?appendChild(container,r):appendChild(document.body,r),error){var n=document.createElement("label"),a=document.createTextNode(error);appendChild(n,a),n.className="error-message",appendChild(r,n)}else render(null,r,"$",null,null);dependencyMap.hasOwnProperty("$")&&onDependencyChanged("$"),BrutusinForms.postRender&&BrutusinForms.postRender(obj)},obj.getRenderingContainer=function(){return container},obj.validate=function(){return validate(container)},obj.getData=function(){function e(t,r){if(null===s&&(s=SCHEMA_ANY),r.$ref&&(r=getDefinition(r.$ref)),t instanceof Array){if(0===t.length)return null;for(var n=new Array,a=0;a<t.length;a++)n[a]=e(t[a],r.items);return n}if(""===t)return null;if(t instanceof Object){var n=new Object,i=!1;for(var o in t)if(!o.startsWith("$")||!o.endsWith("$")){var s=null;if(r.hasOwnProperty("properties")&&r.properties.hasOwnProperty(o)&&(s=r.properties[o]),null===s&&r.hasOwnProperty("additionalProperties")&&"object"==typeof r.additionalProperties&&(s=r.additionalProperties),null===s&&r.hasOwnProperty("patternProperties"))for(var u in r.patternProperties){var l=RegExp(u);if(-1!==o.search(l)){s=r.patternProperties[u];break}}var d=e(t[o],s);null!==d&&(n[o]=d,i=!0)}return i||r.required?n:null}return t}return container?e(data,schema):null},BrutusinForms.instances[BrutusinForms.instances.length]=obj,obj},brutusin["json-forms"]=BrutusinForms}();

/***/ }),
/* 21 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;!function(f){if(true)module.exports=f();else if("function"==typeof define&&define.amd)define([],f);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).MeteorEmoji=f()}}(function(){return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n||e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){!function(global,factory){if(void 0!==exports)factory(module);else{var mod={exports:{}};factory(mod),global.meteorEmoji=mod.exports}}(this,function(module){"use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),MeteorEmoji=function(){function MeteorEmoji(){!function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,MeteorEmoji),this.initiate()}return _createClass(MeteorEmoji,[{key:"initiate",value:function(){var _this=this;document.querySelectorAll('[data-meteor-emoji="true"], [data-meteor-emoji-large="true"]').forEach(function(element){_this.generateElements(element)})}},{key:"generateElements",value:function(emojiInput){var clickLink=function(event){var caretPos=emojiInput.selectionStart;emojiInput.value=emojiInput.value.substring(0,caretPos)+" "+event.target.innerHTML+emojiInput.value.substring(caretPos),emojiPicker.style.display="block","undefined"!=typeof angular&&angular.element(emojiInput).triggerHandler("change")},clickCategory=function(event){emojiInput.selectionStart;emojiPicker.style.display="block";for(var hideUls=emojiPicker.querySelectorAll("ul"),i=1,l=hideUls.length;i<l;i++)hideUls[i].style.display="none";var backgroundToggle=emojiPicker.querySelectorAll(".category a");for(i=0,l=backgroundToggle.length;i<l;i++)backgroundToggle[i].style.background="none";emojiPicker.querySelector("."+event.target.id).style.display="block",emojiPicker.querySelector("#"+event.target.id).style.background="#c2c2c2"};emojiInput.style.width="100%";var emojiContainer=document.createElement("div");emojiContainer.style.position="relative",emojiInput.parentNode.replaceChild(emojiContainer,emojiInput),emojiContainer.appendChild(emojiInput);var emojiPicker=document.createElement("div");emojiPicker.tabIndex=0,emojiInput.hasAttribute("data-meteor-emoji-large")?(emojiPicker.style.zIndex="999",emojiPicker.style.display="block",emojiPicker.style.width="100%",emojiPicker.style.marginBottom="15px"):(emojiPicker.style.position="absolute",emojiPicker.style.right="0px",emojiPicker.style.top="30px",emojiPicker.style.display="none",emojiPicker.style.width="400px"),emojiPicker.style.zIndex="999",emojiPicker.style.overflow="hidden",emojiPicker.style.background="#fff",emojiPicker.style.borderRadius="5px",emojiPicker.style.boxShadow="0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",emojiPicker.style.borderRadius="2px;",emojiPicker.style.marginTop="5px",emojiPicker.style.outline="none";var emojiTrigger=document.createElement("a");emojiTrigger.style.position="absolute",emojiTrigger.style.top="10px",emojiTrigger.style.right="10px",emojiTrigger.style.textDecoration="none",emojiTrigger.setAttribute("href","javascript:void(0)"),emojiTrigger.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12 14"><path d="M8.9 8.4q-0.3 0.9-1.1 1.5t-1.8 0.6-1.8-0.6-1.1-1.5q-0.1-0.2 0-0.4t0.3-0.2q0.2-0.1 0.4 0t0.2 0.3q0.2 0.6 0.7 1t1.2 0.4 1.2-0.4 0.7-1q0.1-0.2 0.3-0.3t0.4 0 0.3 0.2 0 0.4zM5 5q0 0.4-0.3 0.7t-0.7 0.3-0.7-0.3-0.3-0.7 0.3-0.7 0.7-0.3 0.7 0.3 0.3 0.7zM9 5q0 0.4-0.3 0.7t-0.7 0.3-0.7-0.3-0.3-0.7 0.3-0.7 0.7-0.3 0.7 0.3 0.3 0.7zM11 7q0-1-0.4-1.9t-1.1-1.6-1.6-1.1-1.9-0.4-1.9 0.4-1.6 1.1-1.1 1.6-0.4 1.9 0.4 1.9 1.1 1.6 1.6 1.1 1.9 0.4 1.9-0.4 1.6-1.1 1.1-1.6 0.4-1.9zM12 7q0 1.6-0.8 3t-2.2 2.2-3 0.8-3-0.8-2.2-2.2-0.8-3 0.8-3 2.2-2.2 3-0.8 3 0.8 2.2 2.2 0.8 3z"/></svg>',emojiTrigger.onclick=function(){"none"===emojiPicker.style.display?emojiPicker.style.display="block":"block"===emojiPicker.style.display&&(emojiPicker.style.display="none"),emojiPicker.focus()},emojiInput.hasAttribute("data-meteor-emoji-large")||emojiContainer.appendChild(emojiTrigger),window.addEventListener("click",function(e){emojiInput.hasAttribute("data-meteor-emoji-large")||"block"===emojiPicker.style.display&&(emojiPicker.contains(e.target)||emojiTrigger.contains(e.target)||(emojiPicker.style.display="none"))});var facesCategory=document.createElement("ul");facesCategory.style.padding="10px 0px",facesCategory.style.margin="0",facesCategory.style.listStyle="none",facesCategory.style.textAlign="left",facesCategory.style.marginLeft="3%",facesCategory.classList.add("faces");var animalsCategory=document.createElement("ul");animalsCategory.style.padding="10px 0px",animalsCategory.style.margin="0",animalsCategory.style.listStyle="none",animalsCategory.style.textAlign="left",animalsCategory.style.marginLeft="3%",animalsCategory.classList.add("animals"),animalsCategory.style.display="none";var foodCategory=document.createElement("ul");foodCategory.style.padding="10px 0px",foodCategory.style.margin="0",foodCategory.style.listStyle="none",foodCategory.style.textAlign="left",foodCategory.style.marginLeft="3%",foodCategory.classList.add("food"),foodCategory.style.display="none";var sportCategory=document.createElement("ul");sportCategory.style.padding="10px 0px",sportCategory.style.margin="0",sportCategory.style.listStyle="none",sportCategory.style.textAlign="left",sportCategory.style.marginLeft="3%",sportCategory.classList.add("sport"),sportCategory.style.display="none";var transportCategory=document.createElement("ul");transportCategory.style.padding="10px 0px",transportCategory.style.margin="0",transportCategory.style.listStyle="none",transportCategory.style.textAlign="left",transportCategory.style.marginLeft="3%",transportCategory.classList.add("transport"),transportCategory.style.display="none";var objectsCategory=document.createElement("ul");objectsCategory.style.padding="10px 0px",objectsCategory.style.margin="0",objectsCategory.style.listStyle="none",objectsCategory.style.textAlign="left",objectsCategory.style.marginLeft="3%",objectsCategory.classList.add("objects"),objectsCategory.style.display="none";var emojiCategory=document.createElement("ul");emojiCategory.style.padding="0px",emojiCategory.style.margin="0",emojiCategory.style.display="table",emojiCategory.style.width="100%",emojiCategory.style.background="#eff0f1",emojiCategory.style.listStyle="none",emojiCategory.classList.add("category");var emojiCategories=new Array;emojiCategories.push({name:"faces",svg:'<svg id="faces" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150"><path id="faces" d="M74.34,128.48a53.5,53.5,0,1,1,37.84-15.67,53.16,53.16,0,0,1-37.84,15.67Zm0-97.89a44.4,44.4,0,1,0,31.4,13,44.07,44.07,0,0,0-31.4-13Z"/><path id="faces" d="M74.35,108A33.07,33.07,0,0,1,41.29,75a2.28,2.28,0,0,1,2.27-2.28h0A2.27,2.27,0,0,1,45.83,75a28.52,28.52,0,0,0,57,0,2.27,2.27,0,0,1,4.54,0A33.09,33.09,0,0,1,74.35,108Z"/><path id="faces" d="M58.84,62a6.81,6.81,0,1,0,6.81,6.81A6.81,6.81,0,0,0,58.84,62Z"/><path id="faces" d="M89.87,62a6.81,6.81,0,1,0,6.81,6.81A6.82,6.82,0,0,0,89.87,62Z"/></svg>'}),emojiCategories.push({name:"animals",svg:'<svg id="animals" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150"><path id="animals" d="M59.9,91.75h0c-22.46,0-41.82-19.34-44.09-44A52.1,52.1,0,0,1,16,36.8a4.51,4.51,0,0,1,2.63-3.62,39.79,39.79,0,0,1,12.74-3.37c23.92-2.15,45.35,17.83,47.74,43.86a52.77,52.77,0,0,1-.15,10.93,4.56,4.56,0,0,1-2.64,3.62,39.67,39.67,0,0,1-12.73,3.36c-1.23.11-2.45.17-3.66.17ZM24.76,40.49a41.29,41.29,0,0,0,.09,6.4C26.7,67,42.09,82.66,59.9,82.67h0c.94,0,1.88,0,2.83-.14a30.39,30.39,0,0,0,7.41-1.62,41.14,41.14,0,0,0-.11-6.4C68.09,53.38,51.11,37.08,32.17,38.86a30.78,30.78,0,0,0-7.41,1.63Z"/><path id="animals" d="M36.68,125.64a4.53,4.53,0,0,1-4.33-3.17,53.32,53.32,0,0,1-2.26-11A50.42,50.42,0,0,1,39.51,76.6c7.35-9.91,17.84-16,29.5-17,1.16-.11,2.33-.13,3.47-.13a4.54,4.54,0,0,1,4.33,3.16,51.59,51.59,0,0,1,2.27,11.08,50.39,50.39,0,0,1-9.42,34.8c-7.35,9.91-17.83,16-29.5,17a17.63,17.63,0,0,1-3.48.12ZM69.09,68.69A32.41,32.41,0,0,0,46.8,82a42.57,42.57,0,0,0-6.71,34.38,32.38,32.38,0,0,0,22.28-13.32A41.35,41.35,0,0,0,70,74.51a39.38,39.38,0,0,0-.94-5.82Z"/><path id="animals" d="M90.27,91.75c-1.22,0-2.43-.06-3.66-.17a39.67,39.67,0,0,1-12.73-3.36,4.57,4.57,0,0,1-2.64-3.61,53.38,53.38,0,0,1-.17-10.93c2.41-26,23.7-46.07,47.76-43.87a39.74,39.74,0,0,1,12.73,3.37,4.57,4.57,0,0,1,2.64,3.62,53.35,53.35,0,0,1,.16,10.92c-2.28,24.69-21.65,44-44.09,44ZM80,80.91a30.57,30.57,0,0,0,7.42,1.62c19.07,1.78,35.92-14.53,37.87-35.64a42.55,42.55,0,0,0,.1-6.4A30.86,30.86,0,0,0,118,38.86C99,37.07,82.06,53.38,80.12,74.51a43.91,43.91,0,0,0-.1,6.4Z"/><path id="animals" d="M113.49,125.64h0c-1.16,0-2.3,0-3.46-.12-23.9-2.21-41.36-25.47-38.94-51.85A53.52,53.52,0,0,1,73.34,62.6a4.55,4.55,0,0,1,4.33-3.16c1.16,0,2.34,0,3.51.13,11.64,1.07,22.11,7.12,29.48,17a50.51,50.51,0,0,1,9.42,34.81,53.51,53.51,0,0,1-2.26,11,4.54,4.54,0,0,1-4.33,3.19ZM81.08,68.69a42.53,42.53,0,0,0-1,5.82c-1.94,21.1,11.45,39.71,29.95,41.88A42.38,42.38,0,0,0,103.36,82,32.42,32.42,0,0,0,81.08,68.69Z"/><path id="animals" d="M75.08,45.45a7.83,7.83,0,1,0,7.83,7.83,7.83,7.83,0,0,0-7.83-7.83Z"/><path id="animals" d="M76.29,51.89a2.26,2.26,0,0,1-2.14-3A46,46,0,0,1,92.82,25.34a2.27,2.27,0,1,1,2.4,3.86A41.4,41.4,0,0,0,78.43,50.39a2.28,2.28,0,0,1-2.14,1.5Z"/><path id="animals" d="M73.87,51.89a2.28,2.28,0,0,1-2.14-1.5A41.35,41.35,0,0,0,54.94,29.2a2.27,2.27,0,0,1,2.39-3.86A46,46,0,0,1,76,48.85a2.28,2.28,0,0,1-1.37,2.91,2.31,2.31,0,0,1-.77.13Z"/></svg>'}),emojiCategories.push({name:"food",svg:'<svg id="food" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150"><path id="food" d="M104,20.76h.15c15.83.52,24.08,21.48,24.07,32.56.26,12.42-10.72,23.55-24,24.21a3.53,3.53,0,0,1-.46,0c-13.25-.66-24.23-11.8-24-24.3,0-11,8.26-31.95,24.07-32.47Zm0,47.69c8.25-.54,15.3-7.51,15.14-15,0-8.12-6.22-23.1-15.14-23.57-8.9.46-15.14,15.45-15.14,23.48-.14,7.61,6.9,14.59,15.14,15.13Z"/><path id="food" d="M97.19,69.21h.14a4.53,4.53,0,0,1,4.4,4.68l-1.48,46.92a1.59,1.59,0,0,0,.5,1.06,4.6,4.6,0,0,0,3.25,1.19h0a4.57,4.57,0,0,0,3.26-1.2,1.53,1.53,0,0,0,.49-1l-1.48-46.95a4.54,4.54,0,1,1,9.08-.28l1.47,46.91a10.42,10.42,0,0,1-3,7.65,13.65,13.65,0,0,1-9.81,4h0a13.58,13.58,0,0,1-9.79-4,10.42,10.42,0,0,1-3-7.67l1.48-46.89a4.53,4.53,0,0,1,4.53-4.4Z"/><path id="food" d="M41.84,69.21H42a4.53,4.53,0,0,1,4.4,4.68L44.9,120.81a1.57,1.57,0,0,0,.5,1.06,4.6,4.6,0,0,0,3.25,1.19h0a4.51,4.51,0,0,0,3.24-1.19,1.48,1.48,0,0,0,.5-1L50.93,73.89a4.53,4.53,0,0,1,4.39-4.68A4.4,4.4,0,0,1,60,73.61l1.48,46.91a10.49,10.49,0,0,1-3,7.66,13.57,13.57,0,0,1-9.78,4h0a13.59,13.59,0,0,1-9.78-4,10.48,10.48,0,0,1-3-7.67l1.48-46.9a4.54,4.54,0,0,1,4.54-4.4Z"/><path id="food" d="M28.59,20.76a4.54,4.54,0,0,1,4.54,4.54V51a15.52,15.52,0,0,0,31,0V25.3a4.55,4.55,0,0,1,9.09,0V51a24.61,24.61,0,1,1-49.21,0V25.3a4.54,4.54,0,0,1,4.54-4.54Z"/><path id="food" d="M55.34,20.76a4.54,4.54,0,0,1,4.54,4.54v19a4.54,4.54,0,1,1-9.08,0v-19a4.54,4.54,0,0,1,4.54-4.54Z"/><path id="food" d="M42,20.76a4.54,4.54,0,0,1,4.54,4.54v19a4.54,4.54,0,1,1-9.08,0v-19A4.54,4.54,0,0,1,42,20.76Z"/></svg>'}),emojiCategories.push({name:"sport",svg:'<svg id="sport" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150"><path id="sport" d="M75.35,130.24a53.49,53.49,0,1,1,53.48-53.49,53.55,53.55,0,0,1-53.48,53.49Zm0-97.89a44.41,44.41,0,1,0,44.4,44.4,44.1,44.1,0,0,0-44.4-44.4Z"/><path id="sport" d="M119.24,84.08A51.29,51.29,0,0,1,68,32.86a49.44,49.44,0,0,1,.26-5,2.26,2.26,0,0,1,2-2c1.66-.16,3.34-.25,5-.25a51.26,51.26,0,0,1,51.21,51.21c0,1.71-.09,3.38-.25,5a2.28,2.28,0,0,1-2,2c-1.65.16-3.33.25-5,.25ZM72.64,30.16c-.06.9-.08,1.79-.08,2.7a46.73,46.73,0,0,0,46.68,46.68q1.37,0,2.7-.09c.06-.89.08-1.79.08-2.7A46.72,46.72,0,0,0,75.35,30.08c-.91,0-1.82,0-2.71.08Z"/><path id="sport" d="M75.35,128A51.28,51.28,0,0,1,24.12,76.76c0-1.7.1-3.38.25-5a2.29,2.29,0,0,1,2-2c1.66-.16,3.33-.25,5.05-.25a51.27,51.27,0,0,1,51.21,51.22c0,1.69-.09,3.37-.25,5a2.27,2.27,0,0,1-2,2c-1.66.16-3.32.25-5,.25ZM28.75,74.05c-.05.9-.09,1.8-.09,2.71a46.74,46.74,0,0,0,46.69,46.67c.91,0,1.8,0,2.7-.08,0-.9.08-1.8.08-2.7A46.73,46.73,0,0,0,31.46,74c-.91,0-1.81,0-2.71.08Z"/><polygon id="sport" points="42.69 112.61 39.48 109.4 108 40.88 111.21 44.1 42.69 112.61 42.69 112.61"/></svg>'}),emojiCategories.push({name:"transport",svg:'<svg id="transport" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150"><path id="transport" d="M120.7,116H31a4.55,4.55,0,0,1-4.54-4.55V54.28A31.82,31.82,0,0,1,58.25,22.49h35.2a31.83,31.83,0,0,1,31.8,31.79v57.15A4.55,4.55,0,0,1,120.7,116Zm-85.16-9.09h80.62V54.28A22.74,22.74,0,0,0,93.45,31.57H58.25A22.74,22.74,0,0,0,35.54,54.28v52.61Z"/><path id="transport" d="M49.35,129.23c-8.53,0-13.62-2.77-13.62-7.41V115.6a4.54,4.54,0,1,1,9.08,0v4.06a21.32,21.32,0,0,0,9.09,0V115.6a4.54,4.54,0,0,1,9.08,0v6.22c0,4.64-5.09,7.41-13.63,7.41Z"/><path id="transport" d="M102.34,129.23c-8.53,0-13.62-2.77-13.62-7.41V115.6a4.54,4.54,0,0,1,9.08,0v4.06a21.28,21.28,0,0,0,9.08,0V115.6a4.55,4.55,0,0,1,9.09,0v6.22c0,4.64-5.09,7.41-13.63,7.41Z"/><path id="transport" d="M97.81,44.83H53.9a4.55,4.55,0,1,1,0-9.09H97.81a4.55,4.55,0,0,1,0,9.09Z"/><path id="transport" d="M54.28,84.2A6.8,6.8,0,1,0,61.07,91a6.8,6.8,0,0,0-6.79-6.8Z"/><path id="transport" d="M97.43,84.2a6.8,6.8,0,1,0,6.79,6.8,6.8,6.8,0,0,0-6.79-6.8Z"/><path id="transport" d="M107.08,81H44.63a6.82,6.82,0,0,1-6.82-6.82V54.28a6.82,6.82,0,0,1,6.82-6.81h62.45a6.82,6.82,0,0,1,6.81,6.81V74.15A6.83,6.83,0,0,1,107.08,81ZM44.63,52a2.28,2.28,0,0,0-2.28,2.27V74.15a2.28,2.28,0,0,0,2.28,2.27h62.45a2.27,2.27,0,0,0,2.27-2.27V54.28A2.27,2.27,0,0,0,107.08,52Z"/></svg>'}),emojiCategories.push({name:"objects",svg:'<svg id="objects" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150"><path id="objects" d="M107.78,129a4.55,4.55,0,0,1-2.67-.87l-30-21.79-30,21.79a4.53,4.53,0,0,1-5.34,0,4.58,4.58,0,0,1-1.65-5.08L49.59,87.82,19.6,66a4.54,4.54,0,0,1,2.67-8.22H59.34L70.8,22.55a4.55,4.55,0,0,1,8.64,0L90.89,57.81H128A4.54,4.54,0,0,1,130.63,66l-30,21.79,11.46,35.25a4.55,4.55,0,0,1-4.32,6ZM75.12,96.2a4.53,4.53,0,0,1,2.67.87l21.35,15.51L91,87.49a4.55,4.55,0,0,1,1.65-5.08L114,66.89H87.59a4.54,4.54,0,0,1-4.32-3.13l-8.15-25.1L67,63.76a4.53,4.53,0,0,1-4.32,3.13H36.25L57.61,82.41a4.54,4.54,0,0,1,1.65,5.08l-8.17,25.09L72.45,97.07a4.53,4.53,0,0,1,2.67-.87Z"/></svg>'});emojiCategories.map(function(item){var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.padding="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.style.display="table-cell",emojiLink.style.textAlign="center",emojiLink.id=String(item.name),"faces"==String(item.name)&&(emojiLink.style.background="#c2c2c2"),emojiLink.innerHTML=String(item.svg),emojiLink.onmousedown=clickCategory,emojiCategory.appendChild(emojiLink)}),[128513,128514,128515,128516,128517,128518,128521,128522,128523,128524,128525,128527,128530,128531,128532,128534,128536,128538,128540,128541,128542,128544,128545,128546,128547,128548,128549,128552,128553,128554,128555,128557,128560,128561,128562,128563,128565,128567].map(function(item){var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.margin="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.innerHTML=String.fromCodePoint(item),emojiLink.onmousedown=clickLink,facesCategory.appendChild(emojiLink)}),[128012,128013,128014,128017,128018,128020,128023,128024,128025,128026,128027,128028,128029,128030,128031,128032,128033,128034,128035,128036,128037,128038,128039,128040,128041,128043,128044,128045,128046,128047,128048,128049,128050,128051,128052,128053,128054,128055,128056,128057,128058,128059,128060].map(function(item){var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.margin="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.innerHTML=String.fromCodePoint(item),emojiLink.onmousedown=clickLink,animalsCategory.appendChild(emojiLink)}),[127813,127814,127815,127816,127817,127818,127820,127821,127822,127823,127825,127826,127827,127828,127829,127830,127831,127832,127836,127837,127838,127839,127840,127841,127842,127843,127844,127846,127848,127849,127850,127851,127852,127853,127856,127858,127859,127860,127863,127864,127867].map(function(item){var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.margin="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.innerHTML=String.fromCodePoint(item),emojiLink.onmousedown=clickLink,foodCategory.appendChild(emojiLink)}),[127921,127923,127934,127935,127936,127937,127938,127939,127940,127942,127944,127946,128675,128692,128693,9917,9918,9978,127907,127919,9971].map(function(item){var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.margin="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.innerHTML=String.fromCodePoint(item),emojiLink.onmousedown=clickLink,sportCategory.appendChild(emojiLink)}),[128641,128642,128646,128648,128650,128653,128654,128656,128660,128662,128664,128667,128668,128669,128670,128671,128672,128673,128640,128643,128644,128645,128647,128649,128652,128657,128658,128659,128661,128663,128665,128666,128674,128676,128690].map(function(item){var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.margin="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.innerHTML=String.fromCodePoint(item),emojiLink.onmousedown=clickLink,transportCategory.appendChild(emojiLink)}),[127890,127880,127881,127887,127891,127905,127906,127908,127909,127911,127912,127915,127916,127918,127919,127926,127927,127928,127929,127930,127931,127932,127968,127973,127978,128147,128148,128149,128150,128151,128152,128187,128186,128197,128213,128247].map(function(item){var emojiLi=document.createElement("li");emojiLi.style.display="inline-block",emojiLi.style.margin="5px";var emojiLink=document.createElement("a");emojiLink.style.textDecoration="none",emojiLink.style.margin="5px",emojiLink.style.position="initial",emojiLink.style.fontSize="24px",emojiLink.setAttribute("href","javascript:void(0)"),emojiLink.innerHTML=String.fromCodePoint(item),emojiLink.onmousedown=clickLink,objectsCategory.appendChild(emojiLink)}),emojiPicker.appendChild(emojiCategory),emojiPicker.appendChild(facesCategory),emojiPicker.appendChild(animalsCategory),emojiPicker.appendChild(foodCategory),emojiPicker.appendChild(sportCategory),emojiPicker.appendChild(transportCategory),emojiPicker.appendChild(objectsCategory),emojiContainer.appendChild(emojiPicker)}}]),MeteorEmoji}();module.exports=MeteorEmoji})},{}]},{},[1])(1)});

/***/ }),
/* 23 */
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGU4YWQ2NzgyMjA3ZGRhNmE2NzEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb29raWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy91c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vanMtc2VydmljZXMvdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9+L3B1YnN1Yi1qcy9zcmMvcHVic3ViLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vanMtc2VydmljZXMvbmV0d29yay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2pzLXNlcnZpY2VzL2FwaS10YXNrLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2NvbmZpcm0tcmVnL2NvbmZpcm0tcmVnLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvZm9sbG93L2ZvbGxvdy1zdGF0dXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9mb2xsb3cvZm9sbG93LmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaGVhZGVyL2J1cmdlci1tZW51L2J1cmdlci1tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaGVhZGVyL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2luc3RhZ3JhbS1hY2NvdW50cy1saXN0L2luc3RhZ3JhbS1hY2NvdW50cy1saXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvbG9naW4tZm9ybS9sb2dpbi1mb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvbWVzc2FnZXMvbWVzc2FnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9yZWdpc3Rlci1mb3JtL3JlZ2lzdGVyLWZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy9hcGktdXNlci1kaXJlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy9zcGlubmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9fYXV0aC9sb2dpbi1wYWdlLmpzIiwid2VicGFjazovLy8uL34vYnJ1dHVzaW4tanNvbi1mb3Jtcy9kaXN0L2pzL2JydXR1c2luLWpzb24tZm9ybXMubWluLmpzIiwid2VicGFjazovLy8uL3NyYy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vfi9tZXRlb3ItZW1vamkvZGlzdC9tZXRlb3JFbW9qaS5taW4uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyJdLCJuYW1lcyI6WyJDT05TVCIsInVybCIsImJhc2UiLCJyZWdpc3RyYXRpb24iLCJsb2dpbiIsImNvbmZpcm1hdGlvbiIsImluc3RhZ3JhbV9hZGRBY2NvdW50IiwiaW5zdGFncmFtQWNjb3VudF9nZXRNZXRhRGF0YSIsImluc3RhZ3JhbUFjY291bnRfY2hlY2twb2ludCIsImluc3RhZ3JhbUFjY291bnRfY29uZmlybUtleSIsImluc3RhZ3JhbURpcmVjdF9nZXRNZXRhRGF0YSIsImluc3RhZ3JhbURpcmVjdF9wb3N0TWVzc2FnZSIsImluc3RhZ3JhbVRhc2tNYW5hZ2VyIiwiaW5zdGFncmFtVGFza01hbmFnZXJfZ2V0TWV0YURhdGEiLCJpbnN0YWdyYW1UYXNrTWFuYWdlcl9nZXRUYXNrVHlwZXMiLCJpbnN0YWdyYW1UYXNrTWFuYWdlcl9nZXREZWZhdWx0Q29uZmlncyIsImluc3RhZ3JhbVRhc2tNYW5hZ2VyX3Bvc3RTdGFydEZvbGxvd2luZ0xpc3QiLCJ1c2VyIiwiZW1haWwiLCJwYXNzd29yZCIsInRva2VuIiwiY29va2llU3RvcmFnZSIsImVtYWlsQ29uZmlybWVkIiwidWlTZWxlY3RvcnMiLCJoZWFkZXJMb2dpbkJveCIsImhlYWRlck5hdkxvZ2luQnRuIiwiaGVhZGVyUmVnQm94IiwiaGVhZGVyUmVnQnRuIiwiaW5zdGFncmFtIiwiYWRkQWNjb3VudEJ0blNlbGVjdG9yIiwiYWRkQWNjb3VudEJ0bklkIiwiZXZlbnRzIiwiVVNFUl9MT0dHRUQiLCJVU0VSX0xPR09VVCIsIlVTRVJfRU1BSUxfQ09ORklSTUVEIiwiU1RPUF9GSVhFRF9TUElOTkVSIiwibWVzc2FnZXMiLCJSRUNJRVZFX05FV19NRVNTQUdFIiwiaW5zdGFncmFtQWNjb3VucyIsIklOU1RBR1JBTV9BQ0NPVU5TX1JFTkRFUkVEIiwiZ2V0UGF0aCIsIm5hbWUiLCJDb29raWVTcnYiLCJnZXQiLCJjIiwiZG9jdW1lbnQiLCJjb29raWUiLCJtYXRjaCIsImRlY29kZVVSSUNvbXBvbmVudCIsInNldCIsInZhbHVlIiwib3B0cyIsInBhdGgiLCJkYXlzIiwiT2JqZWN0IiwiZW50cmllcyIsInJlZHVjZSIsInN0ciIsImsiLCJ2IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVtb3ZlIiwiVXNlciIsIm5ldHdvcmsiLCJOZXR3b3JrIiwiQ29va2llU3RvcmFnZSIsInNldHRpbmdQb3N0IiwibWV0aG9kIiwiaGVhZGVycyIsImdldFRva2VuIiwiY29va2llVG9rZW4iLCJmb3JtRGF0YSIsImNiRXJyb3IiLCJzZXR0aW5nIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZW5kUmVxdWVzdCIsInVzZXJuYW1lIiwiY2hlY2twb2ludFR5cGUiLCJrZXkiLCJ1c2VySW5zdGFuY2UiLCJ2aWV3VXRpbHMiLCJzaG93SW5mb01lc3NhZ2UiLCJzZWxlY3RvciIsIm1lc3NhZ2UxIiwibWVzc2FnZTIiLCIkIiwiZW1wdHkiLCJhcHBlbmQiLCJmaWxsTGlzdCIsIiRsaXN0IiwiZGF0YUFycmF5IiwiaXRlbXMiLCJjTGlzdCIsImZvckVhY2giLCJpdGVtIiwiaSIsImxpIiwiYXBwZW5kVG8iLCJhZGRDbGFzcyIsInRleHQiLCJpc0VtYWlsIiwicmVnZXgiLCJ0ZXN0IiwicmVzdWx0IiwiJGVsIiwibGVuZ3RoIiwic3RhdHVzIiwic3RhdGUiLCJtZXNzYWdlIiwicmVzcG9uc2UiLCJlcnJvciIsIkVycm9yIiwic3RhdHVzVGV4dCIsIlVSTCIsIk9QVFMiLCJmZXRjaCIsInRoZW4iLCJQcm9taXNlIiwiYWxsIiwianNvbiIsIm9rIiwiY2JFcnJvckRlZmF1bHQiLCJjaGVja1N0YXR1cyIsIlVzZXJUYXNrTWFuYWdlciIsImFzSGVhZGVyIiwidXNlcnNOYW1lIiwiZGV0YWlscyIsIlNUUkFURUdZX1RZUEUiLCJTVFJBVEVHWV9TVUJUWVBFIiwiaGVhZGVyIiwiYnVyZ2VyTWVudSIsImluc3RhZ3JhbUFjY291bnRzIiwiZm9sbG93Iiwic2VsZWN0b3JDc3NMb2dpbkZvcm0iLCJfbG9naW5Cb3giLCJfZm9ybUlkIiwiX2J1dHRvblN1Ym1pdElkIiwiX3Nob3dMb2dpbkJveEJ0bklkIiwic2VsZWN0b3JDc3NMb2dpbkZvcm1JbnN0YWdyYW0iLCJpc0xvZ2luSW5zdGFncmFtIiwic2V0UHViU3ViIiwiUHViU3ViIiwid2luZG93IiwiaW5pdCIsIlJlZ2lzdGVyRm9ybSIsImluaXRIZWFkZXIiLCJjb25maXJtYXRpb25XaXRoUmVkaXJlY3QiLCJwYXJzZVF1ZXJ5U3RyaW5nIiwibG9jYXRpb24iLCJzZWFyY2giLCJvYmpVUkwiLCJyZXBsYWNlIiwiUmVnRXhwIiwiJDAiLCIkMSIsIiQyIiwicGFyYW1zIiwic2VuZENvbmZpcm0iLCJjb25maXJtIiwiZGF0YSIsImN1c3RvbWVyc0RhdGFTdHJpbmciLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwic2V0VGltZW91dCIsInJlZGlyZWN0IiwicGF0aG5hbWUiLCJpbmRleE9mIiwiJGJ0blNob3dSdW5zIiwiJGJ0blNob3dTdG9wcGVkIiwiJHRhc2tMaXN0UnVucyIsIiR0YXNrTGlzdFN0b3BwZWQiLCJoaWRlQ2xzIiwic2hvd0NscyIsImZpbGxMaXN0TWV0YSIsImlzUnVucyIsInR5cGUiLCJ0YXNrX2lkIiwic3VidHlwZSIsInJlYXNvbiIsImdldFRhc2tzRGF0YSIsImdldE1ldGFkYXRhIiwibWV0YSIsImluaXRIYW5kbGVycyIsIm9uIiwicmVtb3ZlQ2xhc3MiLCJmb2xsb3dTdGF0dXMiLCJ1c2VyX2RlZmF1bHRfY29uZmlnIiwidGFza19tb2RlIiwicHJvZ3Jlc3MiLCJjb3VudCIsInBlcmNlbnQiLCJmaWxsTGlzdFR5cGVzIiwiJHdyYXBwZXIiLCJzdHJ1Y3R1cmVPYmoiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJnZXREYXRhU3RlcDIiLCJnZXREYXRhU3RlcDMiLCJ1c2VycyIsInZhbCIsInRyaW0iLCJzcGxpdCIsImZpbHRlciIsImZpbGxTcGVlZExpc3QiLCJ0YXNrTW9kZXMiLCJjZmciLCJ0YXNrX21vZGVzIiwicmFkaW9CdG5SZWR1Y2VyIiwiZ2V0RGVmYXVsdENvbmZpZ3MiLCJmb3VuZCIsInN0ZXBSZWR1Y2VyIiwic3RlcE51bWJlciIsImluaXRTdGVwcyIsIiRmb3JtIiwiZmluZCIsImZhZGVJbiIsInBhcmVudF9maWVsZHNldCIsInBhcmVudHMiLCJuZXh0X3N0ZXAiLCJyYWRpb0J0bkFjdGl2ZSIsImluZGV4IiwiZWFjaCIsImZhZGVPdXQiLCJuZXh0IiwicHJldiIsImF0dHIiLCJ0b1VwcGVyQ2FzZSIsImUiLCJnZW5kZXJWYWwiLCJjcml0ZXJpYSIsImdlbmRlciIsImxpbWl0IiwiZm9ybXMiLCJoYXZlX3Bvc3RzIiwiZnJvbSIsInRvIiwiaGF2ZV9mb2xsb3dlcnMiLCJoYXZlX2ZvbGxvd2luZ3MiLCJmb2N1cyIsInByZXZlbnREZWZhdWx0IiwicG9zdFN0YXJ0Rm9sbG93aW5nTGlzdCIsIm1vZGlmeUFjY0xpc3QiLCJyYWRpb0J0biIsImlkeCIsIiRhY2NvdW50c0xpc3QiLCIkbGkiLCJnZXRUYXNrVHlwZXMiLCIkcGFyZW50RmllbGRzZXQiLCJwcm9wIiwic3Vic2NyaWJlIiwiZXZlbnROYW1lIiwic2VsZWN0b3JzRWwiLCJsZWZ0TWVudSIsImhhbWJ1cmdlckJ1dHRvbkNscyIsImhhbWJ1cmdlck1lbnVDbHMiLCJoYW1idXJnZXJNZW51T3BlbmVkQ2xhc3MiLCJoYW1idXJnZXJCdXR0b25DbG9zZUNsYXNzIiwicmlnaHRNZW51Iiwic3ViSGVhZGVyIiwidG9nZ2xlSGFtYnVyZ2VyTWVudSIsIm1lbnVOYW1lIiwidG9nZ2xlQ2xhc3MiLCJiaW5kIiwic2VsZWN0b3JMb2dpblN0YXRlIiwic2VsZWN0b3JFbWFpbENvbmZpcm1TdGF0ZSIsImNsb3NlQ2xhc3MiLCJvcGVuZWRDbGFzcyIsImVtYWlsTm90Q29uZmlybWVkIiwiJGVtYWlsbk1zZyIsImNzcyIsIm9uTG9naW5TdWJzY3JpYmUiLCJtc2ciLCIkbG9naW5Nc2ciLCJpc0VtYWlsQ29uZmlybWVkIiwic2hvd0xvZ291dCIsImlzTG9nZ2VkIiwiaXNMb2dnZWRJbiIsInBhcmVudCIsInNob3ciLCJvbGRVUkwiLCJyZWZlcnJlciIsImluY2x1ZGVzIiwiJGxvZ2luQm94IiwiJHJlZ2lzdGVyQm94IiwiaGlkZSIsImFkZEluc3RhZ3JhbUFjY291bnQiLCJuZXdGb3JtRGF0YSIsIiRtc2dMaXN0IiwiY2F0Y2giLCJlcnIiLCJhZGRPbkxvYWRIYW5kbGVycyIsImJ0biIsInRhcmdldCIsIiRtb2RhbEJvZHkiLCJjbG9zZXN0IiwiZm9ybSIsImNzc1ZhbGlkYXRpb25DbGFzcyIsImNoZWNrVmFsaWRpdHkiLCJyZXBvcnRWYWxpZGl0eSIsImFkZExpc3RIYW5kbGVyIiwiJGJ1dHRvbiIsInNlbmRUbyIsInN0b3BQcm9wYWdhdGlvbiIsIm1vZGFsIiwiZ2V0U2VjdXJpdHlLZXkiLCIkbW9kYWwiLCIka2V5SW5wdXQiLCJjb25maXJtU2VjdXJpdHlLZXkiLCJsZW4iLCJtaW5MZW4iLCJOdW1iZXIiLCJvbkhpZGVNb2RhbCIsInJlbW92ZUF0dHIiLCJ0eXBlU2VsZWN0ZWQiLCJjaGVja3BvaW50VHlwZUFjdGl2ZSIsIm1vZGFsQ29uZmlnIiwiX2NvbmZpZyIsImRlZmF1bHRBdmF0YXJTcmMiLCJpbnNlcnRJdGVtIiwiY3NzQ2xzIiwibGlUcGwiLCJzdGF0cyIsImluZm8iLCJ0cGwiLCJjaGVja3BvaW50IiwicHVibGlzaCIsIm1ldGFkYXRhIiwicmVzZW5kUmVxdWVzdCIsImlzU2VuZFJlcU9uY2UiLCJjaGVja1Jlc3BvbnNlIiwiaXNSZXNlbmRSZXF1ZXN0IiwiYWNjb3VudHMiLCJMb2dpbkZvcm0iLCJzZWxlY3RvckNzcyIsIiRlbWFpbCIsIiR0ZXh0QXJlYURlc2NyaXB0aW9uIiwidXNlckxvZ2luSGVhZGVyIiwiX2Zvcm1EYXRhIiwic3VibWl0Rm9ybSIsImZvcm1EYXRhT2JqIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJsb2dPdXQiLCJiaW5kRXZlbnRzIiwiJHNob3dMb2dpbkJveEJ0bklkIiwiJGJ1dHRvblN1Ym1pdCIsImV2ZW50IiwiaXNMb2dpbkJ0bkNsaWNrIiwiaXNBZGRJbnN0YWdyYW1CdG5DbGlja2VkIiwiaGFzQ2xhc3MiLCJ1cGRhdGVJbnRlcnZhbCIsImludGVydmFsSWQiLCJpc0luTWVzc2FnZVBhZ2UiLCIkdXNlckxpc3QiLCJyZWFkeSIsIm0iLCJNZXRlb3JFbW9qaSIsIiRwaWNrZXIiLCJzdHlsZSIsInN0eWxlTmV3IiwiaXNBcHBlbnRQcmV2TXNnIiwiaW5zZXJ0TXNnIiwidG9Mb3dlckNhc2UiLCJhZGRUb0xpc3QiLCJpbnNlcnRCZWZvcmUiLCJzaWRlIiwiVXNlckNvbnZlcnNhdGlvbiIsImdldEZvcm1hdHRlZERhdGVVdGlsIiwidGltZXN0YW1wIiwiYWRkUGFnaW5hdGlvbiIsInBhZ2luYXRpb24iLCJjdXJzb3IiLCJwcmV2X2N1cnNvciIsInVzZXJEYXRhIiwiY29udmVyc2F0aW9uSWQiLCJTcGlubmVyIiwic3RhcnRCdXR0b25TcGlubmVyIiwiZ2V0TWV0YWRhdGFEZXRhaWxDb252ZXJzYXRpb24iLCJzdG9wQnV0dG9uU3Bpbm5lciIsImZpbGxVc2VyTGlzdCIsImNvbnZlcnNhdGlvbkRldGFpbCIsImFkZENvbnZlcnNhdGlvbnMiLCJjb252ZXJzYXRpb25zIiwiaWQiLCJwYXJzZUludCIsImdldEFuZEZpbGxVc2VyTGlzdCIsImlzQWN0aXZlRmlyc3QiLCJwcmV2QWN0aXZlRGlhbG9nSWQiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwic2V0dGluZ3MiLCJpbnZva2VfaW5fbWlsbGlzIiwiZ2V0QW5kRmlsbENvbnZlcnNhdGlvbiIsImlzU2Nyb2xsRG93biIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJhZGRIYW5kbGVycyIsIiR0ZXh0QXJlYSIsImFkZCIsInBvc3RNZXRhZGF0YURldGFpbENvbnZlcnNhdGlvbiIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInJlc3VsdEZyb21TZXJ2ZXIiLCIkZGlhbG9nIiwic2VsZWN0b3JDbHMiLCJzdWJtaXRCdG4iLCIkcGFzc3dvcmQiLCIkcGFzc3dvcmRDb25maXJtIiwicGFzc3dvcmRDb25maXJtIiwicmVnaXN0ZXIiLCJyZWdpc3RlckJveCIsIiRidG4iLCJpcyIsImlzUmVnQnRuQ2xpY2siLCJ0U3RhbXAiLCJzaG93RnVsbFRpbWUiLCJkYXRlIiwiRGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXkiLCJnZXREYXRlIiwiaG91ciIsImdldEhvdXJzIiwibWluIiwiZ2V0TWludXRlcyIsInNlYyIsImdldFNlY29uZHMiLCJnZXRGdWxsWWVhciIsImNsYXNzZXMiLCJpbmxpbmUiLCJvdmVybGF5IiwiZml4ZWQiLCJidXR0b24iLCJfY2ZnIiwibmV3Q2xzIiwicHJlcGVuZCIsImV4dGVuZCIsInByZXdDbHMiLCJzcGlubmVySW5zdGFuY2UiLCJMb2dpblBhZ2UiLCJocmVmIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztB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ZUFBZSxHQUFHLDJCQUEyQixFQUFFLEdBQUcsRUFBRSxHQUFHLFNBQVMsRTs7Ozs7O0FDQS9vbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImluZGV4LWFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDBlOGFkNjc4MjIwN2RkYTZhNjcxIiwiZXhwb3J0IGNvbnN0IENPTlNUID0ge1xyXG4gICAgdXJsOiB7XHJcbiAgICAgICAgYmFzZTogJ2h0dHA6Ly9hcGkubHV4Z3JhbS5ydS92MS8nLFxyXG4gICAgICAgIHJlZ2lzdHJhdGlvbjogJ3JlZ2lzdHJhdGlvbi9iYXNpYy8nLFxyXG4gICAgICAgIGxvZ2luOiAncmVnaXN0cmF0aW9uL2Jhc2ljL2xvZ2luJyxcclxuICAgICAgICBjb25maXJtYXRpb246ICdyZWdpc3RyYXRpb24vYmFzaWMvY29uZmlybWF0aW9uP3Rva2VuJyxcclxuICAgICAgICBpbnN0YWdyYW1fYWRkQWNjb3VudDogJ2luc3RhZ3JhbS1hY2NvdW50cy8nLCAvLyB0b0RPOiBjaGVjayBpcyByZWR1bmRhbnRcclxuICAgICAgICBpbnN0YWdyYW1BY2NvdW50X2dldE1ldGFEYXRhOiAnaW5zdGFncmFtLWFjY291bnRzL21ldGEnLFxyXG4gICAgICAgIGluc3RhZ3JhbUFjY291bnRfY2hlY2twb2ludDogJ2luc3RhZ3JhbS1hY2NvdW50cy9jaGVja3BvaW50LycsXHJcbiAgICAgICAgaW5zdGFncmFtQWNjb3VudF9jb25maXJtS2V5OiAnaW5zdGFncmFtLWFjY291bnRzL2NoZWNrcG9pbnQvJyxcclxuICAgICAgICBpbnN0YWdyYW1EaXJlY3RfZ2V0TWV0YURhdGE6ICdpbnN0YWdyYW0tZGlyZWN0L21ldGEnLFxyXG4gICAgICAgIGluc3RhZ3JhbURpcmVjdF9wb3N0TWVzc2FnZTogJ2luc3RhZ3JhbS1kaXJlY3QvJyxcclxuICAgICAgICBpbnN0YWdyYW1UYXNrTWFuYWdlcjogJ2luc3RhZ3JhbS10YXNrLW1hbmFnZXIvJyxcclxuICAgICAgICBpbnN0YWdyYW1UYXNrTWFuYWdlcl9nZXRNZXRhRGF0YTogJ2luc3RhZ3JhbS10YXNrLW1hbmFnZXIvbWV0YScsXHJcbiAgICAgICAgaW5zdGFncmFtVGFza01hbmFnZXJfZ2V0VGFza1R5cGVzOiAnaW5zdGFncmFtLXRhc2stbWFuYWdlci90YXNrL3R5cGVzJyxcclxuICAgICAgICBpbnN0YWdyYW1UYXNrTWFuYWdlcl9nZXREZWZhdWx0Q29uZmlnczogJ2luc3RhZ3JhbS10YXNrLW1hbmFnZXIvY29uZmlnL3R5cGUnLCAvLyB7U1RSQVRFR1lfVFlQRX0vc3VidHlwZS97U1RSQVRFR1lfU1VCVFlQRX1cclxuICAgICAgICBpbnN0YWdyYW1UYXNrTWFuYWdlcl9wb3N0U3RhcnRGb2xsb3dpbmdMaXN0OiAnaW5zdGFncmFtLXRhc2stbWFuYWdlci90YXNrJ1xyXG4gICAgfSxcclxuICAgIHVzZXI6IHtcclxuICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgIHRva2VuOiAnJ1xyXG4gICAgfSxcclxuICAgIGNvb2tpZVN0b3JhZ2U6IHtcclxuICAgICAgICB0b2tlbjogJ3VzZXJfbG9nZ2VkJyxcclxuICAgICAgICBlbWFpbENvbmZpcm1lZDogJ2VtYWlsX2NvbmZpcm1lZCdcclxuICAgIH0sXHJcbiAgICB1aVNlbGVjdG9yczoge1xyXG4gICAgICAgIGhlYWRlckxvZ2luQm94OiAnbmF2IC5sb2dpbi1ib3gnLFxyXG4gICAgICAgIGhlYWRlck5hdkxvZ2luQnRuOiAnbmF2IHVsIGxpIC5qc19sb2dpbicsXHJcbiAgICAgICAgaGVhZGVyUmVnQm94OiAnbmF2IC5yZWdpc3Rlci1ib3gnLFxyXG4gICAgICAgIGhlYWRlclJlZ0J0bjogJ25hdiB1bCBsaSAuanNfcmVnaXN0ZXInLFxyXG4gICAgICAgIGluc3RhZ3JhbToge1xyXG4gICAgICAgICAgICBhZGRBY2NvdW50QnRuU2VsZWN0b3I6ICcjanNfc2hvdy1sb2dpbi1ib3gnLFxyXG4gICAgICAgICAgICBhZGRBY2NvdW50QnRuSWQ6ICdqc19zaG93LWxvZ2luLWJveCdcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgICAgVVNFUl9MT0dHRUQ6ICd1c2VyX2xvZ2dlZCcsXHJcbiAgICAgICAgVVNFUl9MT0dPVVQ6ICd1c2VyX2xvZ291dCcsXHJcbiAgICAgICAgVVNFUl9FTUFJTF9DT05GSVJNRUQ6ICd1c2VyX2VtYWlsX2NvbmZpcm1lZCcsXHJcbiAgICAgICAgU1RPUF9GSVhFRF9TUElOTkVSOiAnc3RvcF9maXhlZF9zcGlubmVyJyxcclxuICAgICAgICBtZXNzYWdlczoge1xyXG4gICAgICAgICAgICBSRUNJRVZFX05FV19NRVNTQUdFOiAncmVjZWl2ZV9uZXdfbWVzc2FnZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGluc3RhZ3JhbUFjY291bnM6IHtcclxuICAgICAgICAgICAgSU5TVEFHUkFNX0FDQ09VTlNfUkVOREVSRUQ6ICdpbnN0YWdyYW1fYWNjb3Vuc19yZW5kZXJlZCdcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZ2V0UGF0aChuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsLmJhc2UgKyB0aGlzLnVybFtuYW1lXTtcclxuICAgIH1cclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMuanMiLCJcclxuY29uc3QgQ29va2llU3J2ID0ge1xyXG4gICAgZ2V0OiBuYW1lID0+IHtcclxuICAgICAgICBjb25zdCBjID0gZG9jdW1lbnQuY29va2llLm1hdGNoKGAoPzooPzpefC4qOyAqKSR7bmFtZX0gKj0gKihbXjtdKikuKiQpfF4uKiRgKVsxXTtcclxuICAgICAgICBpZiAoYykge1xyXG4gICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGMpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXQ6IChuYW1lLCB2YWx1ZSwgb3B0cyA9IHtwYXRoOiAnLycsIGRheXM6IDM2NX0pID0+IHtcclxuICAgICAgICBpZiAob3B0cy5kYXlzKSB7XHJcbiAgICAgICAgICAgIG9wdHNbJ21heC1hZ2UnXSA9IG9wdHMuZGF5cyAqIDYwICogNjAgKiAyNDtcclxuICAgICAgICAgICAgZGVsZXRlIG9wdHMuZGF5cztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXHJcbiAgICAgICAgb3B0cyA9IE9iamVjdC5lbnRyaWVzKG9wdHMpLnJlZHVjZSgoc3RyLCBbaywgdl0pID0+IGAke3N0cn07ICR7a309JHt2fWAsICcnKTtcclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBgJHtuYW1lfT0ke2VuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkgKyBvcHRzfWA7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlOiAobmFtZSwgb3B0cykgPT4gQ29va2llU3J2LnNldChuYW1lLCAnJywgeydtYXgtYWdlJzogLTEsIHBhdGg6ICcvJywgZGF5czogMCwgLi4ub3B0c30pXHJcbiAgICAvLyBwYXRoICYgZG9tYWluIG11c3QgbWF0Y2ggY29va2llIGJlaW5nIGRlbGV0ZWRcclxufTtcclxuXHJcbi8qXHJcbmNsYXNzIENvb2tpZVN0b3JhZ2Uge1xyXG4gICAgcmVhZChrZXkpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9ICQuY29va2llKGtleSk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyBudWxsIDogdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q29va2llKG5hbWUsIHZhbHVlLCBkYXlzKSB7XHJcbiAgICAgICAgbGV0IGV4cGlyZXMgPSAnJztcclxuICAgICAgICBpZiAoZGF5cykge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKGRheXMgKiAyNCAqIDYwICogNjAgKiAxMDAwKSk7XHJcbiAgICAgICAgICAgIGV4cGlyZXMgPSBgOyBleHBpcmVzPSR7ZGF0ZS50b1VUQ1N0cmluZygpfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGAke25hbWV9ID0keyh2YWx1ZSB8fCAnJykgKyBleHBpcmVzfTsgcGF0aD0vYDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb29raWUobmFtZSkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gYDsgJHtkb2N1bWVudC5jb29raWV9YDtcclxuICAgICAgICBjb25zdCBwYXJ0cyA9IHZhbHVlLnNwbGl0KGA7ICR7bmFtZX09YCk7XHJcbiAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCA9PSAyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJ0cy5wb3AoKS5zcGxpdCgnOycpLnNoaWZ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb29raWVTcnY7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tb24vanMtc2VydmljZXMvY29va2llLmpzIiwiLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IHtDT05TVH0gZnJvbSAnLi9jb25zdHMnO1xyXG5pbXBvcnQgTmV0d29yayBmcm9tICcuL25ldHdvcmsnO1xyXG5pbXBvcnQgQ29va2llU3RvcmFnZSBmcm9tICcuL2Nvb2tpZSc7XHJcblxyXG5jbGFzcyBVc2VyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm5ldHdvcmsgPSBuZXcgTmV0d29yaygpO1xyXG4gICAgICAgIHRoaXMuY29va2llU3RvcmFnZSA9IENvb2tpZVN0b3JhZ2U7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5nUG9zdCA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlzTG9nZ2VkSW4oKSB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5nZXRUb2tlbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRW1haWxDb25maXJtZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmNvb2tpZVN0b3JhZ2UuZ2V0KENPTlNULmNvb2tpZVN0b3JhZ2UuZW1haWxDb25maXJtZWQpID09PSAnY29uZmlybWVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VG9rZW4oKSB7XHJcbiAgICAgICAgY29uc3QgY29va2llVG9rZW4gPSB0aGlzLmNvb2tpZVN0b3JhZ2UuZ2V0KENPTlNULmNvb2tpZVN0b3JhZ2UudG9rZW4pO1xyXG4gICAgICAgIHJldHVybiBjb29raWVUb2tlbjtcclxuICAgIH1cclxuXHJcbiAgICBsb2dpbihmb3JtRGF0YSwgY2JFcnJvcikge1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSB7Li4udGhpcy5zZXR0aW5nUG9zdCwgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpfTtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KENPTlNULmdldFBhdGgoJ2xvZ2luJyksIHNldHRpbmcsIGNiRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEluc3RhZ3JhbUFjY291bnQoZm9ybURhdGEsIGNiRXJyb3IpIHtcclxuICAgICAgICBjb25zdCBzZXR0aW5nID0ge1xyXG4gICAgICAgICAgICAuLi50aGlzLnNldHRpbmdQb3N0LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QuaGVhZGVycyxcclxuICAgICAgICAgICAgICAgIHRva2VuOiB0aGlzLmdldFRva2VuKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1fYWRkQWNjb3VudCcpLCBzZXR0aW5nLCBjYkVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbnN0YWdyYW1BY2NvdW50KCkge1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSB7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QsXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QuaGVhZGVycyxcclxuICAgICAgICAgICAgICAgIHRva2VuOiB0aGlzLmdldFRva2VuKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1fYWRkQWNjb3VudCcpLCBzZXR0aW5nKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25maXJtKHRva2VuKSB7XHJcbiAgICAgICAgLy8gY29uc3QgY29uZmlybVVybCA9IENPTlNULmdldFBhdGgoJ2NvbmZpcm1hdGlvbicpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QoYCR7Q09OU1QuZ2V0UGF0aCgnY29uZmlybWF0aW9uJykgKyB0b2tlbn1gKTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3Rlcihmb3JtRGF0YSkge1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSB7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChDT05TVC5nZXRQYXRoKCdyZWdpc3RyYXRpb24nKSwgc2V0dGluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWV0YWRhdGEodG9rZW4sIGNiRXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KGAke0NPTlNULmdldFBhdGgoJ2luc3RhZ3JhbUFjY291bnRfZ2V0TWV0YURhdGEnKX1gLCB7aGVhZGVyczoge3Rva2VufX0sIGNiRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNlY3VyaXR5S2V5KHVzZXJuYW1lLCBjaGVja3BvaW50VHlwZSkge1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSB7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsndHlwZSc6IGNoZWNrcG9pbnRUeXBlfSksIC8vIHRvZG86IHRtcCBzZXQsIGl0IHNob3VsZCBiZSAndHlwZSdcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdC5oZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgJ3Rva2VuJzogdGhpcy5nZXRUb2tlbigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QoYCR7Q09OU1QuZ2V0UGF0aCgnaW5zdGFncmFtQWNjb3VudF9jaGVja3BvaW50Jyl9JHt1c2VybmFtZX1gLCBzZXR0aW5nKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25maXJtU2VjdXJpdHlLZXkoa2V5LCB1c2VybmFtZSkge1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsnc2VjdXJpdHlfY29kZSc6IGtleX0pLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnNldHRpbmdQb3N0LmhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICAndG9rZW4nOiAnM2UzMjFlNjAwMjk3MTFlOTkyNjRhMDQ4MWM4ZTE3ZDQnIC8vIHRvZG86IHRoaXMuZ2V0VG9rZW4oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KGAke0NPTlNULmdldFBhdGgoJ2luc3RhZ3JhbUFjY291bnRfY29uZmlybUtleScpfSR7dXNlcm5hbWV9YCwgc2V0dGluZyk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5sZXQgdXNlckluc3RhbmNlID0gbnVsbDtcclxuXHJcbmlmICghdXNlckluc3RhbmNlKSB7XHJcbiAgICB1c2VySW5zdGFuY2UgPSBuZXcgVXNlcigpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VySW5zdGFuY2U7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tb24vanMtc2VydmljZXMvdXNlci5qcyIsIi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbi8vIGltcG9ydCB7Q09OU1R9IGZyb20gJy4vY29uc3RzJztcclxuXHJcbmZ1bmN0aW9uIHZpZXdVdGlscygpIHtcclxuICAgIGZ1bmN0aW9uIHNob3dJbmZvTWVzc2FnZShzZWxlY3RvciwgbWVzc2FnZTEsIG1lc3NhZ2UyKSB7XHJcbiAgICAgICAgJChzZWxlY3RvcikuZW1wdHkoKVxyXG4gICAgICAgICAgICAuYXBwZW5kKGAkeyhtZXNzYWdlMSkgPyBgPHA+c3RhdHVzOiAke21lc3NhZ2UxfTwvcD5gIDogJyd9YClcclxuICAgICAgICAgICAgLmFwcGVuZChgPHA+JHttZXNzYWdlMn0gPC9wPmApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZpbGxMaXN0KCRsaXN0LCBkYXRhQXJyYXkpIHtcclxuICAgICAgICBjb25zdCBpdGVtcyA9IGRhdGFBcnJheTtcclxuICAgICAgICBjb25zdCBjTGlzdCA9ICRsaXN0O1xyXG4gICAgICAgIGNMaXN0LmVtcHR5KCk7XHJcbiAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBsaSA9ICQoJzxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbVwiPjwvbGk+JylcclxuICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhjTGlzdCk7XHJcbiAgICAgICAgICAgICQoJzxhLz4nKS5hZGRDbGFzcygndWktYWxsJylcclxuICAgICAgICAgICAgICAgIC50ZXh0KGl0ZW0udXNlcm5hbWUpXHJcbiAgICAgICAgICAgICAgICAuYXBwZW5kVG8obGkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzRW1haWwoZW1haWwpIHtcclxuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xyXG4gICAgICAgIGNvbnN0IHJlZ2V4ID0gL14oW2EtekEtWjAtOV8uKy1dKStcXEAoKFthLXpBLVowLTktXSkrXFwuKSsoW2EtekEtWjAtOV17Miw0fSkrJC87XHJcbiAgICAgICAgcmV0dXJuIHJlZ2V4LnRlc3QoZW1haWwpO1xyXG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgKi9cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNob3dJbmZvTWVzc2FnZSxcclxuICAgICAgICBmaWxsTGlzdCxcclxuICAgICAgICBpc0VtYWlsXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB2aWV3VXRpbHMoKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy92aWV3LmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTAsMjAxMSwyMDEyLDIwMTMsMjAxNCBNb3JnYW4gUm9kZXJpY2sgaHR0cDovL3JvZGVyaWNrLmRrXG4gKiBMaWNlbnNlOiBNSVQgLSBodHRwOi8vbXJnbnJkcmNrLm1pdC1saWNlbnNlLm9yZ1xuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tcm9kZXJpY2svUHViU3ViSlNcbiAqL1xuXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3Rvcnkpe1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBQdWJTdWIgPSB7fTtcbiAgICByb290LlB1YlN1YiA9IFB1YlN1YjtcblxuICAgIHZhciBkZWZpbmUgPSByb290LmRlZmluZTtcblxuICAgIGZhY3RvcnkoUHViU3ViKTtcblxuICAgIC8vIEFNRCBzdXBwb3J0XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCl7XG4gICAgICAgIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIFB1YlN1YjsgfSk7XG5cbiAgICAgICAgLy8gQ29tbW9uSlMgYW5kIE5vZGUuanMgbW9kdWxlIHN1cHBvcnRcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jyl7XG4gICAgICAgIGlmIChtb2R1bGUgIT09IHVuZGVmaW5lZCAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICAgICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gUHViU3ViOyAvLyBOb2RlLmpzIHNwZWNpZmljIGBtb2R1bGUuZXhwb3J0c2BcbiAgICAgICAgfVxuICAgICAgICBleHBvcnRzLlB1YlN1YiA9IFB1YlN1YjsgLy8gQ29tbW9uSlMgbW9kdWxlIDEuMS4xIHNwZWNcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gUHViU3ViOyAvLyBDb21tb25KU1xuICAgIH1cblxufSgoIHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHdpbmRvdyApIHx8IHRoaXMsIGZ1bmN0aW9uIChQdWJTdWIpe1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBtZXNzYWdlcyA9IHt9LFxuICAgICAgICBsYXN0VWlkID0gLTE7XG5cbiAgICBmdW5jdGlvbiBoYXNLZXlzKG9iail7XG4gICAgICAgIHZhciBrZXk7XG5cbiAgICAgICAgZm9yIChrZXkgaW4gb2JqKXtcbiAgICAgICAgICAgIGlmICggb2JqLmhhc093blByb3BlcnR5KGtleSkgKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgdGhyb3dzIHRoZSBwYXNzZWQgZXhjZXB0aW9uLCBmb3IgdXNlIGFzIGFyZ3VtZW50IGZvciBzZXRUaW1lb3V0XG4gICAgICogQGFsaWFzIHRocm93RXhjZXB0aW9uXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHsgT2JqZWN0IH0gZXggQW4gRXJyb3Igb2JqZWN0XG4gICAgICovXG4gICAgZnVuY3Rpb24gdGhyb3dFeGNlcHRpb24oIGV4ICl7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiByZVRocm93RXhjZXB0aW9uKCl7XG4gICAgICAgICAgICB0aHJvdyBleDtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWxsU3Vic2NyaWJlcldpdGhEZWxheWVkRXhjZXB0aW9ucyggc3Vic2NyaWJlciwgbWVzc2FnZSwgZGF0YSApe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc3Vic2NyaWJlciggbWVzc2FnZSwgZGF0YSApO1xuICAgICAgICB9IGNhdGNoKCBleCApe1xuICAgICAgICAgICAgc2V0VGltZW91dCggdGhyb3dFeGNlcHRpb24oIGV4ICksIDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsbFN1YnNjcmliZXJXaXRoSW1tZWRpYXRlRXhjZXB0aW9ucyggc3Vic2NyaWJlciwgbWVzc2FnZSwgZGF0YSApe1xuICAgICAgICBzdWJzY3JpYmVyKCBtZXNzYWdlLCBkYXRhICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsaXZlck1lc3NhZ2UoIG9yaWdpbmFsTWVzc2FnZSwgbWF0Y2hlZE1lc3NhZ2UsIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKXtcbiAgICAgICAgdmFyIHN1YnNjcmliZXJzID0gbWVzc2FnZXNbbWF0Y2hlZE1lc3NhZ2VdLFxuICAgICAgICAgICAgY2FsbFN1YnNjcmliZXIgPSBpbW1lZGlhdGVFeGNlcHRpb25zID8gY2FsbFN1YnNjcmliZXJXaXRoSW1tZWRpYXRlRXhjZXB0aW9ucyA6IGNhbGxTdWJzY3JpYmVyV2l0aERlbGF5ZWRFeGNlcHRpb25zLFxuICAgICAgICAgICAgcztcblxuICAgICAgICBpZiAoICFtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eSggbWF0Y2hlZE1lc3NhZ2UgKSApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAocyBpbiBzdWJzY3JpYmVycyl7XG4gICAgICAgICAgICBpZiAoIHN1YnNjcmliZXJzLmhhc093blByb3BlcnR5KHMpKXtcbiAgICAgICAgICAgICAgICBjYWxsU3Vic2NyaWJlciggc3Vic2NyaWJlcnNbc10sIG9yaWdpbmFsTWVzc2FnZSwgZGF0YSApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRGVsaXZlcnlGdW5jdGlvbiggbWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApe1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gZGVsaXZlck5hbWVzcGFjZWQoKXtcbiAgICAgICAgICAgIHZhciB0b3BpYyA9IFN0cmluZyggbWVzc2FnZSApLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoICcuJyApO1xuXG4gICAgICAgICAgICAvLyBkZWxpdmVyIHRoZSBtZXNzYWdlIGFzIGl0IGlzIG5vd1xuICAgICAgICAgICAgZGVsaXZlck1lc3NhZ2UobWVzc2FnZSwgbWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyk7XG5cbiAgICAgICAgICAgIC8vIHRyaW0gdGhlIGhpZXJhcmNoeSBhbmQgZGVsaXZlciBtZXNzYWdlIHRvIGVhY2ggbGV2ZWxcbiAgICAgICAgICAgIHdoaWxlKCBwb3NpdGlvbiAhPT0gLTEgKXtcbiAgICAgICAgICAgICAgICB0b3BpYyA9IHRvcGljLnN1YnN0ciggMCwgcG9zaXRpb24gKTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHRvcGljLmxhc3RJbmRleE9mKCcuJyk7XG4gICAgICAgICAgICAgICAgZGVsaXZlck1lc3NhZ2UoIG1lc3NhZ2UsIHRvcGljLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWVzc2FnZUhhc1N1YnNjcmliZXJzKCBtZXNzYWdlICl7XG4gICAgICAgIHZhciB0b3BpYyA9IFN0cmluZyggbWVzc2FnZSApLFxuICAgICAgICAgICAgZm91bmQgPSBCb29sZWFuKG1lc3NhZ2VzLmhhc093blByb3BlcnR5KCB0b3BpYyApICYmIGhhc0tleXMobWVzc2FnZXNbdG9waWNdKSksXG4gICAgICAgICAgICBwb3NpdGlvbiA9IHRvcGljLmxhc3RJbmRleE9mKCAnLicgKTtcblxuICAgICAgICB3aGlsZSAoICFmb3VuZCAmJiBwb3NpdGlvbiAhPT0gLTEgKXtcbiAgICAgICAgICAgIHRvcGljID0gdG9waWMuc3Vic3RyKCAwLCBwb3NpdGlvbiApO1xuICAgICAgICAgICAgcG9zaXRpb24gPSB0b3BpYy5sYXN0SW5kZXhPZiggJy4nICk7XG4gICAgICAgICAgICBmb3VuZCA9IEJvb2xlYW4obWVzc2FnZXMuaGFzT3duUHJvcGVydHkoIHRvcGljICkgJiYgaGFzS2V5cyhtZXNzYWdlc1t0b3BpY10pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb3VuZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwdWJsaXNoKCBtZXNzYWdlLCBkYXRhLCBzeW5jLCBpbW1lZGlhdGVFeGNlcHRpb25zICl7XG4gICAgICAgIG1lc3NhZ2UgPSAodHlwZW9mIG1lc3NhZ2UgPT09ICdzeW1ib2wnKSA/IG1lc3NhZ2UudG9TdHJpbmcoKSA6IG1lc3NhZ2U7XG5cbiAgICAgICAgdmFyIGRlbGl2ZXIgPSBjcmVhdGVEZWxpdmVyeUZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICksXG4gICAgICAgICAgICBoYXNTdWJzY3JpYmVycyA9IG1lc3NhZ2VIYXNTdWJzY3JpYmVycyggbWVzc2FnZSApO1xuXG4gICAgICAgIGlmICggIWhhc1N1YnNjcmliZXJzICl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHN5bmMgPT09IHRydWUgKXtcbiAgICAgICAgICAgIGRlbGl2ZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoIGRlbGl2ZXIsIDAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQdWJsaXNoZXMgdGhlIG1lc3NhZ2UsIHBhc3NpbmcgdGhlIGRhdGEgdG8gaXQncyBzdWJzY3JpYmVyc1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBhbGlhcyBwdWJsaXNoXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBwdWJsaXNoXG4gICAgICogQHBhcmFtIHt9IGRhdGEgVGhlIGRhdGEgdG8gcGFzcyB0byBzdWJzY3JpYmVyc1xuICAgICAqIEByZXR1cm4geyBCb29sZWFuIH1cbiAgICAgKi9cbiAgICBQdWJTdWIucHVibGlzaCA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHJldHVybiBwdWJsaXNoKCBtZXNzYWdlLCBkYXRhLCBmYWxzZSwgUHViU3ViLmltbWVkaWF0ZUV4Y2VwdGlvbnMgKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUHVibGlzaGVzIHRoZSB0aGUgbWVzc2FnZSBzeW5jaHJvbm91c2x5LCBwYXNzaW5nIHRoZSBkYXRhIHRvIGl0J3Mgc3Vic2NyaWJlcnNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgcHVibGlzaFN5bmNcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHB1Ymxpc2hcbiAgICAgKiBAcGFyYW0ge30gZGF0YSBUaGUgZGF0YSB0byBwYXNzIHRvIHN1YnNjcmliZXJzXG4gICAgICogQHJldHVybiB7IEJvb2xlYW4gfVxuICAgICAqL1xuICAgIFB1YlN1Yi5wdWJsaXNoU3luYyA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHJldHVybiBwdWJsaXNoKCBtZXNzYWdlLCBkYXRhLCB0cnVlLCBQdWJTdWIuaW1tZWRpYXRlRXhjZXB0aW9ucyApO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmVzIHRoZSBwYXNzZWQgZnVuY3Rpb24gdG8gdGhlIHBhc3NlZCBtZXNzYWdlLiBFdmVyeSByZXR1cm5lZCB0b2tlbiBpcyB1bmlxdWUgYW5kIHNob3VsZCBiZSBzdG9yZWQgaWYgeW91IG5lZWQgdG8gdW5zdWJzY3JpYmVcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgc3Vic2NyaWJlXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBzdWJzY3JpYmUgdG9cbiAgICAgKiBAcGFyYW0geyBGdW5jdGlvbiB9IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBhIG5ldyBtZXNzYWdlIGlzIHB1Ymxpc2hlZFxuICAgICAqIEByZXR1cm4geyBTdHJpbmcgfVxuICAgICAqL1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUgPSBmdW5jdGlvbiggbWVzc2FnZSwgZnVuYyApe1xuICAgICAgICBpZiAoIHR5cGVvZiBmdW5jICE9PSAnZnVuY3Rpb24nKXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lc3NhZ2UgPSAodHlwZW9mIG1lc3NhZ2UgPT09ICdzeW1ib2wnKSA/IG1lc3NhZ2UudG9TdHJpbmcoKSA6IG1lc3NhZ2U7XG5cbiAgICAgICAgLy8gbWVzc2FnZSBpcyBub3QgcmVnaXN0ZXJlZCB5ZXRcbiAgICAgICAgaWYgKCAhbWVzc2FnZXMuaGFzT3duUHJvcGVydHkoIG1lc3NhZ2UgKSApe1xuICAgICAgICAgICAgbWVzc2FnZXNbbWVzc2FnZV0gPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZvcmNpbmcgdG9rZW4gYXMgU3RyaW5nLCB0byBhbGxvdyBmb3IgZnV0dXJlIGV4cGFuc2lvbnMgd2l0aG91dCBicmVha2luZyB1c2FnZVxuICAgICAgICAvLyBhbmQgYWxsb3cgZm9yIGVhc3kgdXNlIGFzIGtleSBuYW1lcyBmb3IgdGhlICdtZXNzYWdlcycgb2JqZWN0XG4gICAgICAgIHZhciB0b2tlbiA9ICd1aWRfJyArIFN0cmluZygrK2xhc3RVaWQpO1xuICAgICAgICBtZXNzYWdlc1ttZXNzYWdlXVt0b2tlbl0gPSBmdW5jO1xuICAgICAgICBcbiAgICAgICAgLy8gcmV0dXJuIHRva2VuIGZvciB1bnN1YnNjcmliaW5nXG4gICAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU3Vic2NyaWJlcyB0aGUgcGFzc2VkIGZ1bmN0aW9uIHRvIHRoZSBwYXNzZWQgbWVzc2FnZSBvbmNlXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQGFsaWFzIHN1YnNjcmliZU9uY2VcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHN1YnNjcmliZSB0b1xuICAgICAqIEBwYXJhbSB7IEZ1bmN0aW9uIH0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIGEgbmV3IG1lc3NhZ2UgaXMgcHVibGlzaGVkXG4gICAgICogQHJldHVybiB7IFB1YlN1YiB9XG4gICAgICovXG4gICAgUHViU3ViLnN1YnNjcmliZU9uY2UgPSBmdW5jdGlvbiggbWVzc2FnZSwgZnVuYyApe1xuICAgICAgICB2YXIgdG9rZW4gPSBQdWJTdWIuc3Vic2NyaWJlKCBtZXNzYWdlLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgLy8gYmVmb3JlIGZ1bmMgYXBwbHksIHVuc3Vic2NyaWJlIG1lc3NhZ2VcbiAgICAgICAgICAgIFB1YlN1Yi51bnN1YnNjcmliZSggdG9rZW4gKTtcbiAgICAgICAgICAgIGZ1bmMuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFB1YlN1YjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGFsbCBzdWJzY3JpcHRpb25zXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBhbGlhcyBjbGVhckFsbFN1YnNjcmlwdGlvbnNcbiAgICAgKi9cbiAgICBQdWJTdWIuY2xlYXJBbGxTdWJzY3JpcHRpb25zID0gZnVuY3Rpb24gY2xlYXJBbGxTdWJzY3JpcHRpb25zKCl7XG4gICAgICAgIG1lc3NhZ2VzID0ge307XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENsZWFyIHN1YnNjcmlwdGlvbnMgYnkgdGhlIHRvcGljXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBhbGlhcyBjbGVhckFsbFN1YnNjcmlwdGlvbnNcbiAgICAgKi9cbiAgICBQdWJTdWIuY2xlYXJTdWJzY3JpcHRpb25zID0gZnVuY3Rpb24gY2xlYXJTdWJzY3JpcHRpb25zKHRvcGljKXtcbiAgICAgICAgdmFyIG07XG4gICAgICAgIGZvciAobSBpbiBtZXNzYWdlcyl7XG4gICAgICAgICAgICBpZiAobWVzc2FnZXMuaGFzT3duUHJvcGVydHkobSkgJiYgbS5pbmRleE9mKHRvcGljKSA9PT0gMCl7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG1lc3NhZ2VzW21dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgc3Vic2NyaXB0aW9uc1xuICAgICAqXG4gICAgICogLSBXaGVuIHBhc3NlZCBhIHRva2VuLCByZW1vdmVzIGEgc3BlY2lmaWMgc3Vic2NyaXB0aW9uLlxuICAgICAqXG5cdCAqIC0gV2hlbiBwYXNzZWQgYSBmdW5jdGlvbiwgcmVtb3ZlcyBhbGwgc3Vic2NyaXB0aW9ucyBmb3IgdGhhdCBmdW5jdGlvblxuICAgICAqXG5cdCAqIC0gV2hlbiBwYXNzZWQgYSB0b3BpYywgcmVtb3ZlcyBhbGwgc3Vic2NyaXB0aW9ucyBmb3IgdGhhdCB0b3BpYyAoaGllcmFyY2h5KVxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWxpYXMgc3Vic2NyaWJlT25jZVxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB8IEZ1bmN0aW9uIH0gdmFsdWUgQSB0b2tlbiwgZnVuY3Rpb24gb3IgdG9waWMgdG8gdW5zdWJzY3JpYmUgZnJvbVxuICAgICAqIEBleGFtcGxlIC8vIFVuc3Vic2NyaWJpbmcgd2l0aCBhIHRva2VuXG4gICAgICogdmFyIHRva2VuID0gUHViU3ViLnN1YnNjcmliZSgnbXl0b3BpYycsIG15RnVuYyk7XG4gICAgICogUHViU3ViLnVuc3Vic2NyaWJlKHRva2VuKTtcbiAgICAgKiBAZXhhbXBsZSAvLyBVbnN1YnNjcmliaW5nIHdpdGggYSBmdW5jdGlvblxuICAgICAqIFB1YlN1Yi51bnN1YnNjcmliZShteUZ1bmMpO1xuICAgICAqIEBleGFtcGxlIC8vIFVuc3Vic2NyaWJpbmcgZnJvbSBhIHRvcGljXG4gICAgICogUHViU3ViLnVuc3Vic2NyaWJlKCdteXRvcGljJyk7XG4gICAgICovXG4gICAgUHViU3ViLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICB2YXIgZGVzY2VuZGFudFRvcGljRXhpc3RzID0gZnVuY3Rpb24odG9waWMpIHtcbiAgICAgICAgICAgICAgICB2YXIgbTtcbiAgICAgICAgICAgICAgICBmb3IgKCBtIGluIG1lc3NhZ2VzICl7XG4gICAgICAgICAgICAgICAgICAgIGlmICggbWVzc2FnZXMuaGFzT3duUHJvcGVydHkobSkgJiYgbS5pbmRleE9mKHRvcGljKSA9PT0gMCApe1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYSBkZXNjZW5kYW50IG9mIHRoZSB0b3BpYyBleGlzdHM6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc1RvcGljICAgID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAoIG1lc3NhZ2VzLmhhc093blByb3BlcnR5KHZhbHVlKSB8fCBkZXNjZW5kYW50VG9waWNFeGlzdHModmFsdWUpICksXG4gICAgICAgICAgICBpc1Rva2VuICAgID0gIWlzVG9waWMgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyxcbiAgICAgICAgICAgIGlzRnVuY3Rpb24gPSB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicsXG4gICAgICAgICAgICByZXN1bHQgPSBmYWxzZSxcbiAgICAgICAgICAgIG0sIG1lc3NhZ2UsIHQ7XG5cbiAgICAgICAgaWYgKGlzVG9waWMpe1xuICAgICAgICAgICAgUHViU3ViLmNsZWFyU3Vic2NyaXB0aW9ucyh2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKCBtIGluIG1lc3NhZ2VzICl7XG4gICAgICAgICAgICBpZiAoIG1lc3NhZ2VzLmhhc093blByb3BlcnR5KCBtICkgKXtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZXNbbV07XG5cbiAgICAgICAgICAgICAgICBpZiAoIGlzVG9rZW4gJiYgbWVzc2FnZVt2YWx1ZV0gKXtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG1lc3NhZ2VbdmFsdWVdO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdG9rZW5zIGFyZSB1bmlxdWUsIHNvIHdlIGNhbiBqdXN0IHN0b3AgaGVyZVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNGdW5jdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKCB0IGluIG1lc3NhZ2UgKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmhhc093blByb3BlcnR5KHQpICYmIG1lc3NhZ2VbdF0gPT09IHZhbHVlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgbWVzc2FnZVt0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xufSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3B1YnN1Yi1qcy9zcmMvcHVic3ViLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB2aWV3VXRpbHMgZnJvbSAnLi92aWV3JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ldHdvcmsge1xyXG5cclxuICAgIGNiRXJyb3JEZWZhdWx0KHJlc3VsdCkge1xyXG4gICAgICAgIGNvbnN0ICRlbCA9ICgkKCcjZGVzY3JpcHRpb24nKS5sZW5ndGgpID8gJCgnI2Rlc2NyaXB0aW9uJykgOiAkKCcuZXJyb3ItbXNnJyk7XHJcbiAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSgkZWwsXHJcbiAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMuc3RhdGUsXHJcbiAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMubWVzc2FnZSB8fCAnZXJyb3InKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja1N0YXR1cyhyZXNwb25zZSkge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgJiYgcmVzcG9uc2Uuc3RhdHVzID49IDIwMCAmJiByZXNwb25zZS5zdGF0dXMgPCAzMDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG4gICAgICAgICAgICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2VuZFJlcXVlc3QoVVJMLCBPUFRTLCBjYkVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKFVSTCwgT1BUUylcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gUHJvbWlzZS5hbGwoW3Jlc3BvbnNlLCByZXNwb25zZS5qc29uKCldKSlcclxuICAgICAgICAgICAgLnRoZW4oKFtyZXNwb25zZSwganNvbl0pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNiRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYkVycm9yRGVmYXVsdChqc29uKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYkVycm9yKGpzb24pOyAvLyB1cGRhdGUgdmlld1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrU3RhdHVzKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoanNvbi5zdGF0dXMubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ganNvbjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tb24vanMtc2VydmljZXMvbmV0d29yay5qcyIsIi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCB7Q09OU1R9IGZyb20gJy4vY29uc3RzJztcclxuaW1wb3J0IE5ldHdvcmsgZnJvbSAnLi9uZXR3b3JrJztcclxuaW1wb3J0IENvb2tpZVN0b3JhZ2UgZnJvbSAnLi9jb29raWUnO1xyXG5cclxuY2xhc3MgVXNlclRhc2tNYW5hZ2VyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm5ldHdvcmsgPSBuZXcgTmV0d29yaygpO1xyXG4gICAgICAgIHRoaXMuY29va2llU3RvcmFnZSA9IENvb2tpZVN0b3JhZ2U7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5nUG9zdCA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGlzTG9nZ2VkSW4oKSB7XHJcbiAgICAvLyAgICAgcmV0dXJuICEhdGhpcy5nZXRUb2tlbigpO1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIGlzRW1haWxDb25maXJtZWQoKSB7XHJcbiAgICAvLyAgICAgcmV0dXJuICh0aGlzLmNvb2tpZVN0b3JhZ2UuZ2V0KENPTlNULmNvb2tpZVN0b3JhZ2UuZW1haWxDb25maXJtZWQpID09PSAnY29uZmlybWVkJyk7XHJcbiAgICAvLyB9XHJcbiAgICBnZXRUb2tlbihhc0hlYWRlcikge1xyXG4gICAgICAgIGNvbnN0IGNvb2tpZVRva2VuID0gdGhpcy5jb29raWVTdG9yYWdlLmdldChDT05TVC5jb29raWVTdG9yYWdlLnRva2VuKTtcclxuICAgICAgICByZXR1cm4gKGFzSGVhZGVyKSA/IHtoZWFkZXJzOiB7dG9rZW46IGNvb2tpZVRva2VufX0gOiBjb29raWVUb2tlbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRNZXRhZGF0YSh1c2Vyc05hbWUsIGNiRXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KGAke0NPTlNULmdldFBhdGgoJ2luc3RhZ3JhbVRhc2tNYW5hZ2VyX2dldE1ldGFEYXRhJyl9YCxcclxuICAgICAgICAgICAgdGhpcy5nZXRUb2tlbignYXNIZWFkZXInKSwgY2JFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGFza1R5cGVzKGRldGFpbHMsIGNiRXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KGAke0NPTlNULmdldFBhdGgoJ2luc3RhZ3JhbVRhc2tNYW5hZ2VyX2dldFRhc2tUeXBlcycpfWAsXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VG9rZW4oJ2FzSGVhZGVyJyksIGNiRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERlZmF1bHRDb25maWdzKGNiRXJyb3IpIHtcclxuICAgICAgICBjb25zdCBkZXRhaWxzID0ge1xyXG4gICAgICAgICAgICBTVFJBVEVHWV9UWVBFOiAnRk9MTE9XSU5HJyxcclxuICAgICAgICAgICAgU1RSQVRFR1lfU1VCVFlQRTogJ0ZPTExPV0lOR19MSVNUJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgdXJsID0gYCR7Q09OU1QuZ2V0UGF0aCgnaW5zdGFncmFtVGFza01hbmFnZXJfZ2V0RGVmYXVsdENvbmZpZ3MnKX0vJHtkZXRhaWxzLlNUUkFURUdZX1RZUEV9L3N1YnR5cGUvJHtkZXRhaWxzLlNUUkFURUdZX1NVQlRZUEV9YDtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KHVybCxcclxuICAgICAgICAgICAgdGhpcy5nZXRUb2tlbignYXNIZWFkZXInKSwgY2JFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcG9zdFN0YXJ0Rm9sbG93aW5nTGlzdChib2R5LCBjYkVycm9yKSB7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZyA9IHtcclxuICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdCxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdC5oZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgJ3Rva2VuJzogdGhpcy5nZXRUb2tlbigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHNldHRpbmcuYm9keSA9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xyXG4gICAgICAgIC8vIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAvLyAgICAgJ3VzZXJuYW1lJzogJ2JyYW5keWxlbmhhcnQnLFxyXG4gICAgICAgIC8vICAgICAndHlwZSc6ICdGT0xMT1dJTkcnLFxyXG4gICAgICAgIC8vICAgICAnc3VidHlwZSc6ICdGT0xMT1dJTkdfTElTVCcsXHJcbiAgICAgICAgLy8gICAgICd1c2VyX2RlZmF1bHRfY29uZmlnJzoge1xyXG4gICAgICAgIC8vICAgICAgICAgJ3Rhc2tfbW9kZSc6ICdTQUZFJyxcclxuICAgICAgICAvLyAgICAgICAgICdmb2xsb3dpbmdfY3JpdGVyaWEnOiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgJ2xpbWl0JzogNzUwMCxcclxuICAgICAgICAvLyAgICAgICAgICAgICAndW5mb2xsb3dfdGhlbic6IHRydWUsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgJ2ZvbGxvd19vbl9jbG9zZWRfcHJvZmlsZXMnOiB0cnVlLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICdoYXZlX3Bvc3RzJzoge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAnZnJvbSc6IDMsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICd0byc6IDk5OTk5OVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgJ2hhdmVfZm9sbG93ZXJzJzoge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAnZnJvbSc6IDMwLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAndG8nOiA5OTk5OVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgJ2hhdmVfZm9sbG93aW5ncyc6IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgJ2Zyb20nOiAwLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAndG8nOiA5OTlcclxuICAgICAgICAvLyAgICAgICAgICAgICB9LFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICdnZW5kZXInOiAnQU5ZJ1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgIC8vICAgICAndXNlcl9jdXN0b21fY29uZmlnJzoge1xyXG4gICAgICAgIC8vICAgICAgICAgJ3VzZXJzJzogWzEyNDk2OTI2LCAyNTE0MDA4ODRdXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChgJHtDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1UYXNrTWFuYWdlcl9wb3N0U3RhcnRGb2xsb3dpbmdMaXN0Jyl9YCxcclxuICAgICAgICAgICAgc2V0dGluZywgY2JFcnJvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCB1c2VySW5zdGFuY2UgPSBudWxsO1xyXG5cclxuaWYgKCF1c2VySW5zdGFuY2UpIHtcclxuICAgIHVzZXJJbnN0YW5jZSA9IG5ldyBVc2VyVGFza01hbmFnZXIoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlckluc3RhbmNlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uL2pzLXNlcnZpY2VzL2FwaS10YXNrLW1hbmFnZXIuanMiLCJpbXBvcnQgJy4vYmFzZS5zY3NzJztcclxuLy8gaW1wb3J0ICdib290c3RyYXAnO1xyXG5pbXBvcnQge0NPTlNUfSBmcm9tICcuL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMnO1xyXG5pbXBvcnQgUHViU3ViIGZyb20gJ3B1YnN1Yi1qcyc7XHJcbmltcG9ydCBSZWdpc3RlckZvcm0gZnJvbSAnLi9ibG9ja3MvcmVnaXN0ZXItZm9ybS9yZWdpc3Rlci1mb3JtJztcclxuaW1wb3J0IHtMb2dpbkZvcm19IGZyb20gJy4vYmxvY2tzL2xvZ2luLWZvcm0vbG9naW4tZm9ybSc7XHJcbmltcG9ydCB7TG9naW5QYWdlfSBmcm9tICcuL3BhZ2VzL19hdXRoL2xvZ2luLXBhZ2UnO1xyXG5pbXBvcnQge2NvbmZpcm1hdGlvbldpdGhSZWRpcmVjdH0gZnJvbSAnLi9ibG9ja3MvY29uZmlybS1yZWcvY29uZmlybS1yZWcnO1xyXG5pbXBvcnQgKiBhcyBoZWFkZXIgZnJvbSAnLi9ibG9ja3MvaGVhZGVyL2hlYWRlcic7XHJcbmltcG9ydCAqIGFzIGJ1cmdlck1lbnUgZnJvbSAnLi9ibG9ja3MvaGVhZGVyL2J1cmdlci1tZW51L2J1cmdlci1tZW51JztcclxuaW1wb3J0ICogYXMgaW5zdGFncmFtQWNjb3VudHMgZnJvbSAnLi9ibG9ja3MvaW5zdGFncmFtLWFjY291bnRzLWxpc3QvaW5zdGFncmFtLWFjY291bnRzLWxpc3QnO1xyXG5pbXBvcnQgKiBhcyBtZXNzYWdlcyBmcm9tICcuL2Jsb2Nrcy9tZXNzYWdlcy9tZXNzYWdlcyc7XHJcbmltcG9ydCAqIGFzIGZvbGxvdyBmcm9tICcuL2Jsb2Nrcy9mb2xsb3cvZm9sbG93JztcclxuLy8gaW1wb3J0ICogYXMgZm9sbG93U3RlcHMgZnJvbSAnLi9ibG9ja3MvZm9sbG93L2ZvbGxvdy11c2luZy1zdGVwcyc7XHJcblxyXG5jb25zdCBzZWxlY3RvckNzc0xvZ2luRm9ybSA9IHtcclxuICAgIF9sb2dpbkJveDogQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyTG9naW5Cb3gsXHJcbiAgICBfZm9ybUlkOiAnI2pzX2xvZ2luLWZvcm0nLFxyXG4gICAgX2J1dHRvblN1Ym1pdElkOiAnI2pzX2xvZ2luX2J0bicsXHJcbiAgICBfc2hvd0xvZ2luQm94QnRuSWQ6IENPTlNULnVpU2VsZWN0b3JzLmhlYWRlck5hdkxvZ2luQnRuXHJcbn07XHJcblxyXG5jb25zdCBzZWxlY3RvckNzc0xvZ2luRm9ybUluc3RhZ3JhbSA9IHtcclxuICAgIF9sb2dpbkJveDogJ21haW4gLmxvZ2luLWJveCcsXHJcbiAgICBfZm9ybUlkOiAnI2pzX2luc3RhZ3JhbS1hZGQtYWNjb3VudCcsXHJcbiAgICBfYnV0dG9uU3VibWl0SWQ6ICcjanNfaW5zdGFncmFtLWFkZC1hY2NvdW50LS1idG4nLFxyXG4gICAgX3Nob3dMb2dpbkJveEJ0bklkOiAnI2pzX3Nob3ctbG9naW4tYm94JyxcclxuICAgIGlzTG9naW5JbnN0YWdyYW06IHRydWVcclxufTtcclxuXHJcbmZ1bmN0aW9uIHNldFB1YlN1YihQdWJTdWIpIHtcclxuICAgIHdpbmRvdy5QdWJTdWIgPSBQdWJTdWI7XHJcbn1cclxuXHJcbmNvbnN0IGluaXQgPSAoKSA9PiB7XHJcbiAgICBzZXRQdWJTdWIoUHViU3ViKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdpbml0IGpzIGhlcmUnLCBDT05TVC51c2VyKTtcclxuICAgIChuZXcgUmVnaXN0ZXJGb3JtKCkpLmluaXQoKTtcclxuICAgIExvZ2luRm9ybShzZWxlY3RvckNzc0xvZ2luRm9ybSkuaW5pdCgpO1xyXG4gICAgTG9naW5Gb3JtKHNlbGVjdG9yQ3NzTG9naW5Gb3JtSW5zdGFncmFtKS5pbml0KCk7IC8vIGluaXQgaW5zdGFncmFtIGxvZ2luIGZvcm0qIS9cclxuICAgIExvZ2luUGFnZSh7XHJcbiAgICAgICAgX2xvZ2luQm94OiAnLmF1dGgubG9naW4gLmNhcmQtc2lnbmluJyxcclxuICAgICAgICBfZm9ybUlkOiAnLmZvcm0tc2lnbmluJyxcclxuICAgICAgICBfYnV0dG9uU3VibWl0SWQ6ICcuZm9ybS1zaWduaW4gW3R5cGU9XCJzdWJtaXRcIl0nXHJcbiAgICB9KS5pbml0KCk7XHJcblxyXG4gICAgY29uZmlybWF0aW9uV2l0aFJlZGlyZWN0KCkuaW5pdCgpO1xyXG4gICAgaGVhZGVyLmluaXRIZWFkZXIoKTtcclxuICAgIGJ1cmdlck1lbnUuaW5pdCgpO1xyXG4gICAgZm9sbG93LmluaXQoKTtcclxuICAgIGluc3RhZ3JhbUFjY291bnRzLmluaXQoKTtcclxuICAgIG1lc3NhZ2VzLmluaXQoKTtcclxuXHJcbiAgICAvLyBmb2xsb3dTdGVwcy5pbml0KCk7XHJcbn07XHJcblxyXG4oKCkgPT4gaW5pdCgpKSgpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYm9vdHN0cmFwLmpzIiwiLyogZXNsaW50LWRpc2FibGUgc29ydC12YXJzICovXHJcbi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy91c2VyJztcclxuaW1wb3J0IHtDT05TVH0gZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2NvbnN0cyc7XHJcbmltcG9ydCBjb29raWVTdG9yYWdlIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb29raWUnO1xyXG5cclxuY29uc3QgcGFyc2VRdWVyeVN0cmluZyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIGNvbnN0IHN0ciA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XHJcbiAgICBjb25zdCBvYmpVUkwgPSB7fTtcclxuXHJcbiAgICBzdHIucmVwbGFjZShcclxuICAgICAgbmV3IFJlZ0V4cCgnKFtePz0mXSspKD0oW14mXSopKT8nLCAnZycpLFxyXG4gICAgICAgIGZ1bmN0aW9uKCQwLCAkMSwgJDIpIHtcclxuICAgICAgICAgICAgb2JqVVJMWyQxXSA9ICQyO1xyXG4gICAgICAgIH1cclxuICApO1xyXG4gICAgcmV0dXJuIG9ialVSTDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb25maXJtYXRpb25XaXRoUmVkaXJlY3QoKSB7XHJcbiAgICBjb25zdCB1c2VyID0gVXNlcjtcclxuICAgIGNvbnN0IHBhcmFtcyA9IHBhcnNlUXVlcnlTdHJpbmcoKTtcclxuICAgIC8vIEV4YW1wbGUgaG93IHRvIHVzZSBpdDpcclxuXHJcbiAgICBjb25zdCBzZW5kQ29uZmlybSA9IGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgICAgIHVzZXIuY29uZmlybSh0b2tlbikudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzICYmIHJlc3VsdC5zdGF0dXMuc3RhdGUgPT09ICdvaycpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBzYXZlIHRoZSBpdGVtXHJcbiAgICAgICAgICAgICAgICBjb29raWVTdG9yYWdlLnNldChDT05TVC5jb29raWVTdG9yYWdlLmVtYWlsQ29uZmlybWVkLCAnY29uZmlybWVkJyk7XHJcbiAgICAgICAgICAgICAgICBjb29raWVTdG9yYWdlLnNldChDT05TVC5jb29raWVTdG9yYWdlLnRva2VuLCByZXN1bHQuZGF0YS50b2tlbik7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uID0gY29uZmlybS1yZWdpc3RyYXRpb24uaHRtbD90b2tlbj0nZnJvbSBzZXJ2ZXInO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHJldHJpZXZlIHRoZSBvYmplY3QgaW4gYSBzdHJpbmcgZm9ybVxyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VzdG9tZXJzRGF0YVN0cmluZyA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2N1c3RvbWVyc0RhdGEnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1c3RvbWVyc0RhdGFTdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlcXVlc3Qgc3VjY2VlZGVkIHdpdGggSlNPTiByZXNwb25zZScsIHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAkKCcuY29uZmlybS1yZWdpc3RyYXRpb24nKS5hcHBlbmQoYDxwPmNvbmZpcm1hdGlvbiBzdGF0dXM6ICR7cmVzdWx0LnN0YXR1cy5zdGF0ZX08L3A+YCk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSAnLi9wcm9maWxlLmh0bWwnO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LnN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVkaXJlY3QgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZG90LW5vdGF0aW9uXHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBwYXJhbXNbJ3Rva2VuJ107XHJcblxyXG4gICAgICAgIGlmICghbG9jYXRpb24ucGF0aG5hbWUuaW5kZXhPZignY29uZmlybS1yZWdpc3RyYXRpb24nKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2VuZCByZXEgdG8gJywgdG9rZW4pO1xyXG4gICAgICAgICAgICBzZW5kQ29uZmlybSh0b2tlbik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgICAgIHJlZGlyZWN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0XHJcbiAgICB9O1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3MvY29uZmlybS1yZWcvY29uZmlybS1yZWcuanMiLCIvLyBpbXBvcnQge0NPTlNUfSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29uc3RzJztcclxuaW1wb3J0IFVzZXJUYXNrTWFuYWdlciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvYXBpLXRhc2stbWFuYWdlcic7XHJcblxyXG5jb25zdCAkYnRuU2hvd1J1bnMgPSAkKCcuanNfYnRuLXNob3ctdGFzay1ydW5zJyk7XHJcbmNvbnN0ICRidG5TaG93U3RvcHBlZCA9ICQoJy5qc19idG4tc2hvdy10YXNrLXN0b3BwZWQnKTtcclxuY29uc3QgJHRhc2tMaXN0UnVucyA9ICQoJy5mb2xsb3ctdGFza3MtcnVucy0tYm94Jyk7XHJcbmNvbnN0ICR0YXNrTGlzdFN0b3BwZWQgPSAkKCcuZm9sbG93LXRhc2tzLXN0b3BwZWQtLWJveCcpO1xyXG5jb25zdCBoaWRlQ2xzID0gJ2Qtbm9uZSc7XHJcbmNvbnN0IHNob3dDbHMgPSAnZC1ibG9jayc7XHJcblxyXG5mdW5jdGlvbiBmaWxsTGlzdE1ldGEoJGxpc3QsIGRhdGFBcnJheSwgaXNSdW5zKSB7XHJcbiAgICBjb25zdCBpdGVtcyA9IGRhdGFBcnJheTtcclxuICAgIC8vIGNvbnN0IGRlZmF1bHRBdmF0YXJTcmMgPSAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9qTk5UNExFLnBuZyc7XHJcbiAgICAkbGlzdC5lbXB0eSgpO1xyXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLnR5cGUgIT09ICdGT0xMT1dJTkcnKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGl0ZW0uc3RhdHVzLnN0YXRlID09PSAnU1RPUFBFRCcgJiYgIWlzUnVucykge1xyXG4gICAgICAgICAgICAkKGA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gcC0wXCIgZGF0YS11c2VybmFtZT1cIiR7aXRlbS50eXBlfVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWJvZHkgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB0YXNrLXR5cGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHsoaXRlbS50YXNrX2lkKSA/IGA8cCBjbGFzcz1cImJhZGdlIGJhZGdlLXNlY29uZGFyeVwiPiR7aXRlbS50YXNrX2lkfTwvcD5gIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJjb2wgdGFzay1zdWJ0eXBlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7KGl0ZW0uc3VidHlwZSkgPyBgPHAgY2xhc3M9XCJtdC0wIG1iLTFcIj4ke2l0ZW0uc3VidHlwZX08L3A+YCA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgdGFzay1wcm9ncmVzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInNtYWxsIG1iLTFcIj5yZWFzb248L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibWItMVwiPiR7aXRlbS5zdGF0dXMucmVhc29ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPmApLmFwcGVuZFRvKCRsaXN0KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uc3RhdHVzLnN0YXRlICE9PSAnU1RPUFBFRCcgJiYgaXNSdW5zKSB7XHJcbiAgICAgICAgICAgICQoYDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBweS0yXCIgZGF0YS11c2VybmFtZT1cIiR7aXRlbS50eXBlfVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB0YXNrLXByb2dyZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtdC0wIG1iLTEgbmFtZVwiPlJ1bnMgLSAke2l0ZW0uc3RhdHVzLnJlYXNvbn08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5gKS5hcHBlbmRUbygkbGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghJCgnbGknLCAkbGlzdCkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICQoYDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBweS0yXCI+XHJcbiAgICAgICAgICAgICAgICDQkiDRjdGC0L7QvCDRgNCw0LfQtNC10LvQtSDQvdC10YIg0L3QuCDQvtC00L3QvtC5INC30LDQtNCw0YfQuC5cclxuICAgICAgICAgICAgPC9saT5gKS5hcHBlbmRUbygkbGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRhc2tzRGF0YSgpIHtcclxuICAgIFVzZXJUYXNrTWFuYWdlci5nZXRNZXRhZGF0YSgpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMuc3RhdGUgPT09ICdvaycpIHtcclxuICAgICAgICAgICAgZmlsbExpc3RNZXRhKCQoJy5mb2xsb3ctdGFza3MtcnVucycpLCByZXN1bHQuZGF0YS5tZXRhLCAnaXNSdW5zJyk7XHJcbiAgICAgICAgICAgIGZpbGxMaXN0TWV0YSgkKCcuZm9sbG93LXRhc2tzLXN0b3BwZWQnKSwgcmVzdWx0LmRhdGEubWV0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gaW5pdEhhbmRsZXJzKCkge1xyXG4gICAgJGJ0blNob3dSdW5zLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnJGJ0blNob3dSdW5zJyk7XHJcbiAgICAgICAgJHRhc2tMaXN0U3RvcHBlZC5hZGRDbGFzcyhoaWRlQ2xzKS5yZW1vdmVDbGFzcyhzaG93Q2xzKTtcclxuICAgICAgICAkdGFza0xpc3RSdW5zLmFkZENsYXNzKHNob3dDbHMpLnJlbW92ZUNsYXNzKGhpZGVDbHMpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJGJ0blNob3dTdG9wcGVkLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnJGJ0blNob3dTdG9wcGVkJyk7XHJcbiAgICAgICAgJHRhc2tMaXN0UnVucy5hZGRDbGFzcyhoaWRlQ2xzKS5yZW1vdmVDbGFzcyhzaG93Q2xzKTtcclxuICAgICAgICAkdGFza0xpc3RTdG9wcGVkLmFkZENsYXNzKHNob3dDbHMpLnJlbW92ZUNsYXNzKGhpZGVDbHMpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbml0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIGdldFRhc2tzRGF0YSgpO1xyXG4gICAgaW5pdEhhbmRsZXJzKCk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9mb2xsb3cvZm9sbG93LXN0YXR1cy5qcyIsImltcG9ydCAqIGFzIGZvbGxvd1N0YXR1cyBmcm9tICcuL2ZvbGxvdy1zdGF0dXMnO1xyXG5pbXBvcnQge0NPTlNUfSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29uc3RzJztcclxuaW1wb3J0IFVzZXJUYXNrTWFuYWdlciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvYXBpLXRhc2stbWFuYWdlcic7XHJcbmltcG9ydCAnYnJ1dHVzaW4tanNvbi1mb3Jtcyc7XHJcblxyXG5jb25zdCBzdGF0ZSA9IHtcclxuICAgIHVzZXJuYW1lOiAnJyxcclxuICAgIHVzZXJfZGVmYXVsdF9jb25maWc6IHtcclxuICAgICAgICB0YXNrX21vZGU6ICdTQUZFJ1xyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gZmlsbExpc3RNZXRhKCRsaXN0LCBkYXRhQXJyYXkpIHtcclxuICAgIGNvbnN0IGl0ZW1zID0gZGF0YUFycmF5O1xyXG4gICAgLy8gY29uc3QgZGVmYXVsdEF2YXRhclNyYyA9ICdodHRwczovL2kuaW1ndXIuY29tL2pOTlQ0TEUucG5nJztcclxuICAgICRsaXN0LmVtcHR5KCkuYWRkQ2xhc3MoJ2JvcmRlci1saWdodC1jb2xvcicpO1xyXG4gICAgJCgnPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIHB5LTJcIj48aDM+VXNlclRhc2tNYW5hZ2VyIC0+IGdldE1ldGFkYXRhPC9oMz48L2xpPicpLmFwcGVuZFRvKCRsaXN0KTtcclxuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAvLyBjb25zdCBpbmZvID0gaXRlbS5pbmZvO1xyXG4gICAgICAgIC8vIGNvbnN0IGNoZWNrcG9pbnQgPSBpdGVtLmNoZWNrcG9pbnQgfHwgaXRlbTtcclxuICAgICAgICAkKGA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gcHktMlwiIGRhdGEtdXNlcm5hbWU9XCIke2l0ZW0udHlwZX1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1ib2R5IGQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgdGFzay10eXBlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7KGl0ZW0udGFza19pZCkgPyBgPHAgY2xhc3M9XCJtdC0wIG1iLTEgbmFtZVwiPiR7aXRlbS50YXNrX2lkfTwvcD5gIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB0YXNrLXN1YnR5cGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHsoaXRlbS5zdWJ0eXBlKSA/IGA8cCBjbGFzcz1cIm10LTAgbWItMSBuYW1lXCI+JHtpdGVtLnN1YnR5cGV9PC9wPmAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHRhc2stcHJvZ3Jlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHsoaXRlbS5zdGF0dXMuc3RhdGUgPT09ICdTVE9QUEVEJykgPyBgPHAgY2xhc3M9XCJtdC0wIG1iLTEgbmFtZVwiPtCe0YHRgtCw0L3QvtCy0LvQtdC90L4gLSAke2l0ZW0uc3RhdHVzLnJlYXNvbn08L3A+YCA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwiY29sIHRhc2stcHJvZ3Jlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHsoaXRlbS5wcm9ncmVzcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYDxwIGNsYXNzPVwibXQtMCBtYi0xIG5hbWVcIj7QmtC+0LvQuNGH0LXRgdGC0LLQviAtICR7aXRlbS5wcm9ncmVzcy5jb3VudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtdC0wIG1iLTEgbmFtZVwiPtCf0YDQvtGG0LXQvdGCIC0gJHtpdGVtLnByb2dyZXNzLnBlcmNlbnR9PC9wPmAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4tLT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPmApLmFwcGVuZFRvKCRsaXN0KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaWxsTGlzdFR5cGVzKCR3cmFwcGVyLCBkYXRhKSB7XHJcbiAgICBjb25zdCBzdHJ1Y3R1cmVPYmogPSBkYXRhWydzdHJ1Y3R1cmUnXTtcclxuXHJcbiAgICAkd3JhcHBlci5lbXB0eSgpLmFkZENsYXNzKCdib3JkZXItbGlnaHQtY29sb3InKTtcclxuICAgICQoJzxkaXYgY2xhc3M9XCJcIj7QotC40L8g0LfQsNC00LDQvdC40Y88L2Rpdj48c2VsZWN0IG5hbWU9XCJ0YXNrLXR5cGVcIiBpZD1cInRhc2stdHlwZXNcIj48L3NlbGVjdD4nKS5hcHBlbmRUbygkd3JhcHBlcik7XHJcbiAgICBmb3IgKGNvbnN0IHR5cGUgaW4gc3RydWN0dXJlT2JqKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3N0cnVjdHVyZTogJyArIGl0ZW0pO1xyXG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc3RydWN0dXJlT2JqLCB0eXBlKSkge1xyXG4gICAgICAgICAgICAkKGA8b3B0aW9uIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIHB5LTJcIiAkeyh0eXBlICE9PSAnRk9MTE9XSU5HJykgPyAnZGlzYWJsZWQ9XCJkaXNhYmxlZFwiJyA6ICcnfVxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBcIiR7SlNPTi5zdHJpbmdpZnkoe3R5cGUsIHN1YnR5cGU6IHN0cnVjdHVyZU9ialt0eXBlXX0pfVwiPlxyXG4gICAgICAgICAgICAgICAgJHt0eXBlfVxyXG4gICAgICAgICAgICA8L29wdGlvbj5gKS5hcHBlbmRUbygkKCcjdGFzay10eXBlcycpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRhc2tzRGF0YSgpIHtcclxuICAgIFVzZXJUYXNrTWFuYWdlci5nZXRNZXRhZGF0YSgpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMuc3RhdGUgPT09ICdvaycpIHtcclxuICAgICAgICAgICAgZmlsbExpc3RNZXRhKCQoJy5mb2xsb3ctdGFza3MtbGlzdCcpLCByZXN1bHQuZGF0YS5tZXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBVc2VyVGFza01hbmFnZXIucG9zdFN0YXJ0Rm9sbG93aW5nTGlzdCgpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdwb3N0U3RhcnRGb2xsb3dpbmdMaXN0JywgcmVzdWx0KTtcclxuICAgIC8vICAgICBpZiAocmVzdWx0LnN0YXR1cy5zdGF0ZSA9PT0gJ29rJykge1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcclxuICAgIC8vICAgICAgICAgZmlsbExpc3RUeXBlcygkKCcuanNfdGFzay1zdGFydC1mb2xsb3dpbmcnKSwgcmVzdWx0LmRhdGEpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXREYXRhU3RlcDIodXNlcnNOYW1lKSB7XHJcbiAgICBjb25zb2xlLmxvZyh1c2Vyc05hbWUpO1xyXG4gICAgZ2V0VGFza3NEYXRhKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldERhdGFTdGVwMygpIHtcclxuICAgIGNvbnN0IHVzZXJzID0gJCgnI2ZvbGxvd2VycycpLnZhbCgpXHJcbiAgICAgICAgLnRyaW0oKVxyXG4gICAgICAgIC5yZXBsYWNlKC8gL2csICcnKVxyXG4gICAgICAgIC5zcGxpdCgnLCcpXHJcbiAgICAgICAgLmZpbHRlcihpID0+IGkubGVuZ3RoID4gMCk7XHJcblxyXG4gICAgc3RhdGVbJ3VzZXJfY3VzdG9tX2NvbmZpZyddID0ge1xyXG4gICAgICAgIHVzZXJzXHJcbiAgICB9O1xyXG4gICAgY29uc3QgZmlsbFNwZWVkTGlzdCA9IGZ1bmN0aW9uICgkd3JhcHBlciwgZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IHRhc2tNb2RlcyA9IGRhdGEuY2ZnICYmIGRhdGEuY2ZnLnRhc2tfbW9kZXM7XHJcbiAgICAgICAgY29uc3QgcmFkaW9CdG5SZWR1Y2VyID0gZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgc3dpdGNoIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdBR0dSRVNTSVZFJzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cIiR7aXRlbX1cIiBuYW1lPVwiY3VzdG9tUmFkaW9cIiB2YWx1ZT1cInNhZmVcIiBjbGFzcz1cImN1c3RvbS1jb250cm9sLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIiBmb3I9XCIke2l0ZW19XCI+PHN0cm9uZz7QkNCz0YDQtdGB0YHQuNCy0L3Ri9C5Ojwvc3Ryb25nPiAzMCDQv9C+0LTQv9C40YHQvtC6INCyINGH0LDRgTwvbGFiZWw+YDtcclxuICAgICAgICAgICAgICAgIC8vIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnTUlERExFJzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCIke2l0ZW19XCIgbmFtZT1cImN1c3RvbVJhZGlvXCIgdmFsdWU9XCJzYWZlXCIgY2xhc3M9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImN1c3RvbS1jb250cm9sLWxhYmVsXCIgZm9yPVwiJHtpdGVtfVwiPjxzdHJvbmc+0KHRgNC10LTQvdC40Lk6PC9zdHJvbmc+IDE4INC/0L7QtNC/0LjRgdC+0Log0LIg0YfQsNGBPC9sYWJlbD5gKTtcclxuICAgICAgICAgICAgICAgIC8vIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnU0FGRSc6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCIke2l0ZW19XCIgbmFtZT1cImN1c3RvbVJhZGlvXCIgdmFsdWU9XCJzYWZlXCIgY2xhc3M9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiIGNoZWNrZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIiBmb3I9XCIke2l0ZW19XCI+PHN0cm9uZz7QkdC10LfQvtC/0LDRgdC90YvQuTo8L3N0cm9uZz4gOSDQv9C+0LTQv9C40YHQvtC6INCyINGH0LDRgTwvbGFiZWw+YDtcclxuICAgICAgICAgICAgICAgIC8vIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGVmYXVsdCcsIGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zb2xlLmxvZygnZHJhdyBzcGVlZCByYWRpb0J0bicpO1xyXG4gICAgICAgICR3cmFwcGVyLmVtcHR5KCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIGluIHRhc2tNb2Rlcykge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnc3RydWN0dXJlOiAnICsgaXRlbSk7XHJcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGFza01vZGVzLCBpdGVtKSkge1xyXG4gICAgICAgICAgICAgICAgJChgPGRpdiBjbGFzcz1cImN1c3RvbS1jb250cm9sIGN1c3RvbS1yYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgJHtyYWRpb0J0blJlZHVjZXIoaXRlbSl9XHJcbiAgICAgICAgICAgIDwvZGl2PmApLmFwcGVuZFRvKCR3cmFwcGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gZHJhdyBjcml0ZXJpYVxyXG4gICAgVXNlclRhc2tNYW5hZ2VyLmdldERlZmF1bHRDb25maWdzKCkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2dldERlZmF1bHRDb25maWdzJyk7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMuc3RhdGUgPT09ICdvaycpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgZmlsbFNwZWVkTGlzdCgkKCcuanNfZm9sbG93LXNwZWVkJyksIHJlc3VsdC5kYXRhLmZvdW5kKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RlcFJlZHVjZXIoc3RlcE51bWJlcikge1xyXG4gICAgc3dpdGNoIChzdGVwTnVtYmVyKSB7XHJcbiAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICBnZXREYXRhU3RlcDIoc3RhdGUudXNlcm5hbWUpOyAvLyBbLi4ubmV3IFNldChzdGF0ZS51c2VybmFtZSldXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHN0YXRlKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICBnZXREYXRhU3RlcDMoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzdGVwTnVtYmVyKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc3RhdGUpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZGVmYXVsdCcsIHN0ZXBOdW1iZXIpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogSW5pdCBoZWFkZXJcclxuICovXHJcbmZ1bmN0aW9uIGluaXRTdGVwcygpIHtcclxuICAgIGNvbnN0ICRmb3JtID0gJCgnLmZvbGxvdy1mb3JtJyk7XHJcbiAgICAkKCcuanNfcHJvZmlsZS11c2VyLWZvbGxvdz4uY29udGFpbmVyJykucmVtb3ZlQ2xhc3MoJ2NvbnRhaW5lcicpO1xyXG5cclxuICAgICRmb3JtLmZpbmQoJ2ZpZWxkc2V0OmZpcnN0LWNoaWxkJykuZmFkZUluKCdzbG93Jyk7XHJcblxyXG4gICAgJGZvcm0uZmluZCgnaW5wdXRbdHlwZT1cInRleHRcIl0nKS5vbignZm9jdXMnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaW5wdXQtZXJyb3InKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIG5leHQgc3RlcFxyXG4gICAgJGZvcm0uZmluZCgnLmJ0bi1uZXh0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IHBhcmVudF9maWVsZHNldCA9ICQodGhpcykucGFyZW50cygnZmllbGRzZXQnKTtcclxuICAgICAgICBsZXQgbmV4dF9zdGVwID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCByYWRpb0J0bkFjdGl2ZSA9IHBhcmVudF9maWVsZHNldC5maW5kKCdpbnB1dFtuYW1lPVwidXNlckFjY291bnRSYWRpb1wiXTpjaGVja2VkJyk7XHJcblxyXG4gICAgICAgIGlmIChyYWRpb0J0bkFjdGl2ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJuYW1lID0gcmFkaW9CdG5BY3RpdmUucGFyZW50cygnbGknKS5kYXRhKCd1c2VybmFtZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdGVwUmVkdWNlcihwYXJlbnRfZmllbGRzZXQuaW5kZXgoKSwgc3RhdGUpO1xyXG5cclxuICAgICAgICBwYXJlbnRfZmllbGRzZXQuZmluZCgnaW5wdXRbdHlwZT1cInRleHRcIl0saW5wdXRbdHlwZT1cImVtYWlsXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLnZhbCgpID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaW5wdXQtZXJyb3InKTtcclxuICAgICAgICAgICAgICAgIG5leHRfc3RlcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaW5wdXQtZXJyb3InKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAobmV4dF9zdGVwKSB7XHJcbiAgICAgICAgICAgIHBhcmVudF9maWVsZHNldC5mYWRlT3V0KDQwMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5uZXh0KCkuZmFkZUluKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBwcmV2aW91cyBzdGVwXHJcbiAgICAkZm9ybS5maW5kKCcuYnRuLXByZXZpb3VzJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIHN0YXRlLnVzZXJuYW1lID0gWy4uLm5ldyBTZXQoc3RhdGUudXNlcm5hbWUpXTtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudHMoJ2ZpZWxkc2V0JykuZmFkZU91dCg0MDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5wcmV2KCkuZmFkZUluKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBzcGVlZCByYWRpby1idG4gZ3JvdXBcclxuICAgICQoJy5qc19mb2xsb3ctc3BlZWQgaW5wdXRbdHlwZT1yYWRpb10nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSAkKHRoaXMpLmF0dHIoJ3ZhbHVlJyk7XHJcbiAgICAgICAgc3RhdGUudXNlcl9kZWZhdWx0X2NvbmZpZyA9IHtcclxuICAgICAgICAgICAgdGFza19tb2RlOiB2YWx1ZS50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHN1Ym1pdFxyXG4gICAgJGZvcm0ub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgY29uc3QgZ2VuZGVyVmFsID0gJCh0aGlzKS5maW5kKCcuc2VsZWN0LWdlbmRlciBvcHRpb246c2VsZWN0ZWQnKS52YWwoKTtcclxuICAgICAgICBzdGF0ZS51c2VyX2RlZmF1bHRfY29uZmlnID0ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZS51c2VyX2RlZmF1bHRfY29uZmlnLFxyXG4gICAgICAgICAgICBjcml0ZXJpYToge1xyXG4gICAgICAgICAgICAgICAgZ2VuZGVyOiBnZW5kZXJWYWwudG9VcHBlckNhc2UoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBsaW1pdCA9IGRvY3VtZW50LmZvcm1zWydmb2xsb3ctZm9ybSddWydsaW1pdCddO1xyXG4gICAgICAgIGNvbnN0IGhhdmVfcG9zdHMgPSB7XHJcbiAgICAgICAgICAgIGZyb206IGRvY3VtZW50LmZvcm1zWydmb2xsb3ctZm9ybSddWydoYXZlX3Bvc3RzX2Zyb20nXS52YWx1ZSxcclxuICAgICAgICAgICAgdG86IGRvY3VtZW50LmZvcm1zWydmb2xsb3ctZm9ybSddWydoYXZlX3Bvc3RzX3RvJ10udmFsdWVcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGhhdmVfZm9sbG93ZXJzID0ge1xyXG4gICAgICAgICAgICBmcm9tOiBkb2N1bWVudC5mb3Jtc1snZm9sbG93LWZvcm0nXVsnaGF2ZV9mb2xsb3dlcnNfZnJvbSddLnZhbHVlLFxyXG4gICAgICAgICAgICB0bzogZG9jdW1lbnQuZm9ybXNbJ2ZvbGxvdy1mb3JtJ11bJ2hhdmVfZm9sbG93ZXJzX3RvJ10udmFsdWVcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGhhdmVfZm9sbG93aW5ncyA9IHtcclxuICAgICAgICAgICAgZnJvbTogZG9jdW1lbnQuZm9ybXNbJ2ZvbGxvdy1mb3JtJ11bJ2hhdmVfZm9sbG93aW5nc19mcm9tJ10udmFsdWUsXHJcbiAgICAgICAgICAgIHRvOiBkb2N1bWVudC5mb3Jtc1snZm9sbG93LWZvcm0nXVsnaGF2ZV9mb2xsb3dpbmdzX3RvJ10udmFsdWVcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAobGltaXQudmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGxpbWl0LmZvY3VzKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RhdGVbJ3VzZXJfZGVmYXVsdF9jb25maWcnXS5jcml0ZXJpYSA9IHtcclxuICAgICAgICAgICAgbGltaXQ6IGxpbWl0LnZhbHVlLFxyXG4gICAgICAgICAgICAndW5mb2xsb3dfdGhlbic6ICEhJCgnI3VuZm9sbG93X3RoZW46Y2hlY2tlZCcpLmxlbmd0aCxcclxuICAgICAgICAgICAgJ2ZvbGxvd19vbl9jbG9zZWRfcHJvZmlsZXMnOiAhISQoJyNmb2xsb3dfb25fY2xvc2VkX3Byb2ZpbGVzOmNoZWNrZWQnKS5sZW5ndGgsXHJcbiAgICAgICAgICAgIGhhdmVfcG9zdHMsXHJcbiAgICAgICAgICAgIGhhdmVfZm9sbG93ZXJzLFxyXG4gICAgICAgICAgICBoYXZlX2ZvbGxvd2luZ3NcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAkKHRoaXMpLmZpbmQoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdLGlucHV0W3R5cGU9XCJudW1iZXJcIl0saW5wdXRbdHlwZT1cImVtYWlsXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLnZhbCgpID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaW5wdXQtZXJyb3InKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2lucHV0LWVycm9yJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc3RhdGUudHlwZSA9ICdGT0xMT1dJTkcnO1xyXG4gICAgICAgIHN0YXRlLnN1YnR5cGUgPSAnRk9MTE9XSU5HX0xJU1QnO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdtYWtlIHJlcXVlc3QqKiAgcG9zdDogU3RhcnRGb2xsb3dpbmdMaXN0Jywgc3RhdGUpO1xyXG5cclxuICAgICAgICBVc2VyVGFza01hbmFnZXIucG9zdFN0YXJ0Rm9sbG93aW5nTGlzdChzdGF0ZSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzLnN0YXRlID09PSAnb2snKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcclxuICAgICAgICAgICAgICAgICQoJy5mb3JtLXN1Ym1pdC1maW5pc2gnKS5hZGRDbGFzcygnZC1ibG9jaycpXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbmQoJy5hbGVydCcpLmFwcGVuZChgPHA+dGFza19pZDogJHtyZXN1bHQuZGF0YS50YXNrX2lkfTwvcD5gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0pO1xyXG59XHJcblxyXG4vKlxyXG5mdW5jdGlvbiBmaXhTdGVwSW5kaWNhdG9yKG4pIHtcclxuICAgIC8vIFRoaXMgZnVuY3Rpb24gcmVtb3ZlcyB0aGUgXCJhY3RpdmVcIiBjbGFzcyBvZiBhbGwgc3RlcHMuLi5cclxuICAgIHZhciBpLCB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInN0ZXBcIik7XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHhbaV0uY2xhc3NOYW1lID0geFtpXS5jbGFzc05hbWUucmVwbGFjZShcIiBhY3RpdmVcIiwgXCJcIik7XHJcbiAgICB9XHJcbiAgICAvLy4uLiBhbmQgYWRkcyB0aGUgXCJhY3RpdmVcIiBjbGFzcyBvbiB0aGUgY3VycmVudCBzdGVwOlxyXG4gICAgeFtuXS5jbGFzc05hbWUgKz0gXCIgYWN0aXZlXCI7XHJcbn0qL1xyXG5cclxuZnVuY3Rpb24gbW9kaWZ5QWNjTGlzdCgpIHtcclxuICAgIGNvbnN0IHJhZGlvQnRuID0gKGlkeCkgPT4gYDxkaXYgY2xhc3M9XCJjb2wgY3VzdG9tLWNvbnRyb2wgY3VzdG9tLXJhZGlvIGpzX3VzZXItcmFkaW9cIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ1c2VyQWNjb3VudFJhZGlvXCIgaWQ9XCJjdXN0b21SYWRpby0ke2lkeH1cIiBjbGFzcz1cImN1c3RvbS1jb250cm9sLWlucHV0XCIgdmFsdWU9XCJcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIiBmb3I9XCJjdXN0b21SYWRpby0ke2lkeH1cIj7Qn9C+0LTQv9C40YHQsNGC0YzRgdGPPC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5gO1xyXG4gICAgY29uc3QgJGFjY291bnRzTGlzdCA9ICQoJy5hY2NvdW50cy1saXN0Jyk7XHJcbiAgICBjb25zdCAkbGkgPSAkYWNjb3VudHNMaXN0LmZpbmQoJy5tZWRpYS1ib2R5Jyk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAkbGkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAkKCRsaVtpXSkuYXBwZW5kKHJhZGlvQnRuKGkpKTtcclxuICAgIH1cclxuICAgIFVzZXJUYXNrTWFuYWdlci5nZXRUYXNrVHlwZXMoKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0LnN0YXR1cy5zdGF0ZSA9PT0gJ29rJykge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICBmaWxsTGlzdFR5cGVzKCQoJy5qc190YXNrLXR5cGVzJyksIHJlc3VsdC5kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuanNfdXNlci1yYWRpbyBpbnB1dFt0eXBlPXJhZGlvXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCAkcGFyZW50RmllbGRzZXQgPSAkKHRoaXMpLnBhcmVudHMoJ2ZpZWxkc2V0Jyk7XHJcbiAgICAgICAgJCgnLmJ0bi1uZXh0JywgJHBhcmVudEZpZWxkc2V0KS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5jaGVja2JveC1jZWxsJykub24oJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3ZhbGlkYXRlJyk7XHJcbiAgICAgICAgLy8gdXBkYXRlU3RhdHVzKCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyogd29ya2luZyBkZW1vIDogaHR0cDovL2JydXR1c2luLm9yZy9qc29uLWZvcm1zLyMxM1xyXG5mdW5jdGlvbiBmb3JtRnJvbUpzb24oKSB7XHJcbiAgICBjb25zdCBzY2hlbWEgPSB7XHJcbiAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXHJcbiAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgXCJwcm9wMVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnRlZ2VyXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJwcm9wMlwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnRlZ2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInJlcXVpcmVkXCI6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJwcm9wM1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnRlZ2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInJlcXVpcmVkXCI6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJjb21wb3NpdGUxXCI6IHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5lc3RlZDFcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXF1aXJlZFwiOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5lc3RlZDJcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXF1aXJlZFwiOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwicmVxdWlyZWRcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmVzdGVkMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmVzdGVkMlwiXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiY29tcG9zaXRlMlwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcclxuICAgICAgICAgICAgICAgIFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuZXN0ZWQxXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuZXN0ZWQyXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcInJlcXVpcmVkXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICBcIm5lc3RlZDFcIixcclxuICAgICAgICAgICAgICAgICAgICBcIm5lc3RlZDJcIlxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInJlcXVpcmVkXCI6IFtcclxuICAgICAgICAgICAgXCJwcm9wMVwiLFxyXG4gICAgICAgICAgICBcInByb3AyXCIsXHJcbiAgICAgICAgICAgIFwiY29tcG9zaXRlMVwiXHJcbiAgICAgICAgXVxyXG4gICAgfTtcclxuICAgIGNvbnN0IEJydXR1c2luRm9ybXMgPSB3aW5kb3cuYnJ1dHVzaW5bJ2pzb24tZm9ybXMnXTtcclxuICAgIGNvbnN0IGJmID0gQnJ1dHVzaW5Gb3Jtcy5jcmVhdGUoc2NoZW1hKTtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtMScpO1xyXG4gICAgY29uc29sZS5sb2cod2luZG93LmJydXR1c2luKTtcclxuICAgIGJmLnJlbmRlcihjb250YWluZXIsIGRhdGEpO1xyXG59Ki9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgZm9sbG93U3RhdHVzLmluaXQoKTtcclxuICAgIGluaXRTdGVwcygpO1xyXG4gICAgaWYgKCQoJy5mb2xsb3cnKS5sZW5ndGgpIHtcclxuICAgICAgICB3aW5kb3cuUHViU3ViLnN1YnNjcmliZShDT05TVC5ldmVudHMuaW5zdGFncmFtQWNjb3Vucy5JTlNUQUdSQU1fQUNDT1VOU19SRU5ERVJFRCwgKGV2ZW50TmFtZSwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBtb2RpZnlBY2NMaXN0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9mb2xsb3cvZm9sbG93LmpzIiwiLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbi8vIGNvbnN0IGhhbWJ1cmdlckJ1dHRvbkNscyA9ICcjYXNpZGVfbW9iaWxlX19idXR0b24nO1xyXG4vLyBjb25zdCBoYW1idXJnZXJNZW51Q2xzID0gJy5hc2lkZS1idXJnZXItbWVudSc7XHJcbi8vIGNvbnN0IGhhbWJ1cmdlck1lbnVPcGVuZWRDbGFzcyA9ICdidXJnZXItbWVudS0tY2xvc2VkJztcclxuLy8gY29uc3QgaGFtYnVyZ2VyQnV0dG9uQ2xvc2VDbGFzcyA9ICdidXJnZXItbWVudV9fYnV0dG9uLS1jbG9zZSc7XHJcbmNvbnN0IHNlbGVjdG9yc0VsID0ge1xyXG4gICAgbGVmdE1lbnU6IHtcclxuICAgICAgICBoYW1idXJnZXJCdXR0b25DbHM6ICcjYXNpZGVfbW9iaWxlX19idXR0b24nLFxyXG4gICAgICAgIGhhbWJ1cmdlck1lbnVDbHM6ICcuYXNpZGUtYnVyZ2VyLW1lbnUnLFxyXG4gICAgICAgIGhhbWJ1cmdlck1lbnVPcGVuZWRDbGFzczogJ2J1cmdlci1tZW51LS1jbG9zZWQnLFxyXG4gICAgICAgIGhhbWJ1cmdlckJ1dHRvbkNsb3NlQ2xhc3M6ICdidXJnZXItbWVudV9fYnV0dG9uLS1jbG9zZSdcclxuICAgIH0sXHJcbiAgICByaWdodE1lbnU6IHtcclxuICAgICAgICBoYW1idXJnZXJCdXR0b25DbHM6ICcjaGVhZGVyX21vYmlsZV90b2dnbGVyJyxcclxuICAgICAgICBoYW1idXJnZXJNZW51Q2xzOiAnLnItc2lkZS1idXJnZXItbWVudScsXHJcbiAgICAgICAgaGFtYnVyZ2VyTWVudU9wZW5lZENsYXNzOiAnci1zaWRlLWJ1cmdlci1tZW51LS1vcGVuJyxcclxuICAgICAgICBoYW1idXJnZXJCdXR0b25DbG9zZUNsYXNzOiAnYnVyZ2VyLW1lbnUtcmlnaHRfX2J1dHRvbi0tY2xvc2UnXHJcbiAgICB9LFxyXG4gICAgc3ViSGVhZGVyOiB7XHJcbiAgICAgICAgaGFtYnVyZ2VyQnV0dG9uQ2xzOiAnI2hlYWRlcl9tb2JpbGVfdG9wYmFyX3RvZ2dsZXInLFxyXG4gICAgICAgIGhhbWJ1cmdlck1lbnVDbHM6ICcuc3ViLWhlYWRlcicsXHJcbiAgICAgICAgaGFtYnVyZ2VyTWVudU9wZW5lZENsYXNzOiAnc3ViLWhlYWRlci0tb3BlbicsXHJcbiAgICAgICAgaGFtYnVyZ2VyQnV0dG9uQ2xvc2VDbGFzczogJ3N1Yi1oZWFkZXItYnV0dG9uLS1jbG9zZSdcclxuICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBUb2dnbGUgaGFtYnVyZ2VyIG1lbnUgcG9wb3ZlclxyXG4gKi9cclxuZnVuY3Rpb24gdG9nZ2xlSGFtYnVyZ2VyTWVudShtZW51TmFtZSkge1xyXG4gICAgY29uc3Qge2hhbWJ1cmdlck1lbnVDbHMsIGhhbWJ1cmdlckJ1dHRvbkNscywgaGFtYnVyZ2VyQnV0dG9uQ2xvc2VDbGFzcywgaGFtYnVyZ2VyTWVudU9wZW5lZENsYXNzfSA9IHNlbGVjdG9yc0VsW21lbnVOYW1lXTtcclxuICAgICQoaGFtYnVyZ2VyQnV0dG9uQ2xzKS50b2dnbGVDbGFzcyhoYW1idXJnZXJCdXR0b25DbG9zZUNsYXNzKTtcclxuICAgICQoaGFtYnVyZ2VyTWVudUNscykudG9nZ2xlQ2xhc3MoaGFtYnVyZ2VyTWVudU9wZW5lZENsYXNzKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEluaXQgaGFtYnVyZ2VyIG1lbnVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgY29uc3QgbGVmdE1lbnUgPSAnbGVmdE1lbnUnO1xyXG4gICAgY29uc3QgcmlnaHRNZW51ID0gJ3JpZ2h0TWVudSc7XHJcbiAgICBjb25zdCBzdWJIZWFkZXIgPSAnc3ViSGVhZGVyJztcclxuXHJcbiAgICAkKHNlbGVjdG9yc0VsW2xlZnRNZW51XS5oYW1idXJnZXJCdXR0b25DbHMpLm9uKCdjbGljaycsIHRvZ2dsZUhhbWJ1cmdlck1lbnUuYmluZCh0aGlzLCBsZWZ0TWVudSkpO1xyXG4gICAgJChzZWxlY3RvcnNFbFtyaWdodE1lbnVdLmhhbWJ1cmdlckJ1dHRvbkNscykub24oJ2NsaWNrJywgdG9nZ2xlSGFtYnVyZ2VyTWVudS5iaW5kKHRoaXMsIHJpZ2h0TWVudSkpO1xyXG4gICAgJChzZWxlY3RvcnNFbFtzdWJIZWFkZXJdLmhhbWJ1cmdlckJ1dHRvbkNscykub24oJ2NsaWNrJywgdG9nZ2xlSGFtYnVyZ2VyTWVudS5iaW5kKHRoaXMsIHN1YkhlYWRlcikpO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3MvaGVhZGVyL2J1cmdlci1tZW51L2J1cmdlci1tZW51LmpzIiwiLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3VzZXInO1xyXG5pbXBvcnQgUHViU3ViIGZyb20gJ3B1YnN1Yi1qcyc7IC8vIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3B1YnN1Yi1qc1xyXG5pbXBvcnQge0NPTlNUfSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29uc3RzJztcclxuXHJcbmNvbnN0IHNlbGVjdG9yTG9naW5TdGF0ZSA9ICcuanNfbWVzc2FnZV9sb2dnZWQtLXRleHQnO1xyXG5jb25zdCBzZWxlY3RvckVtYWlsQ29uZmlybVN0YXRlID0gJy5qc19lbWFpbC1jb25maXJtLS10ZXh0JztcclxuY29uc3QgY2xvc2VDbGFzcyA9ICdkLW5vbmUnO1xyXG5jb25zdCBvcGVuZWRDbGFzcyA9ICdkLWJsb2NrJztcclxuXHJcbmZ1bmN0aW9uIGVtYWlsTm90Q29uZmlybWVkKCkge1xyXG4gICAgY29uc3QgJGVtYWlsbk1zZyA9ICQoc2VsZWN0b3JFbWFpbENvbmZpcm1TdGF0ZSk7XHJcbiAgICAkZW1haWxuTXNnLnRleHQoJyoqZW1haWxOb3RDb25maXJtZWQqKiBFbWFpbCDQvdC1INC/0L7QtNGC0LLQtdGA0LbQtNC10L0uJykuY3NzKCdjb2xvcicsICdsaWdodGNvcmFsJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uTG9naW5TdWJzY3JpYmUobXNnLCBkYXRhKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhtc2csIGRhdGEpO1xyXG4gICAgJChDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJOYXZMb2dpbkJ0bikuYWRkQ2xhc3MoY2xvc2VDbGFzcykucmVtb3ZlQ2xhc3Mob3BlbmVkQ2xhc3MpO1xyXG4gICAgJChDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJSZWdCdG4pLmFkZENsYXNzKGNsb3NlQ2xhc3MpLnJlbW92ZUNsYXNzKG9wZW5lZENsYXNzKTtcclxuICAgICQoQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyTG9naW5Cb3gpLmFkZENsYXNzKGNsb3NlQ2xhc3MpLnJlbW92ZUNsYXNzKG9wZW5lZENsYXNzKTtcclxuXHJcbiAgICAkKCcubmF2LWxpbmsuanNfbG9nT3V0JykuYWRkQ2xhc3Mob3BlbmVkQ2xhc3MpLnJlbW92ZUNsYXNzKGNsb3NlQ2xhc3MpOyAvLyBzaG93XHJcbiAgICBjb25zdCAkbG9naW5Nc2cgPSAkKHNlbGVjdG9yTG9naW5TdGF0ZSk7XHJcbiAgICAkbG9naW5Nc2cudGV4dCgnKipvbkxvZ2luU3Vic2NyaWJlKiog0LLRiyDQt9Cw0LvQvtCz0LjQvdC40LvQuNGB0Ywg0LIgTHV4Z3JhbSDRg9GB0L/QtdGI0L3QvicpLmNzcygnY29sb3InLCAnbGlnaHRibHVlJyk7XHJcbiAgICBjb25zdCBpc0VtYWlsQ29uZmlybWVkID0gVXNlci5pc0VtYWlsQ29uZmlybWVkKCk7XHJcbiAgICBpZiAoIWlzRW1haWxDb25maXJtZWQpIHtcclxuICAgICAgICBlbWFpbE5vdENvbmZpcm1lZCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93TG9nb3V0KCkge1xyXG4gICAgLy8gY2hlY2sgaXMgbG9nZ2VkXHJcbiAgICBjb25zdCBpc0xvZ2dlZCA9IFVzZXIuaXNMb2dnZWRJbigpO1xyXG4gICAgY29uc3QgaXNFbWFpbENvbmZpcm1lZCA9IFVzZXIuaXNFbWFpbENvbmZpcm1lZCgpO1xyXG4gICAgaWYgKCFpc0VtYWlsQ29uZmlybWVkKSB7XHJcbiAgICAgICAgZW1haWxOb3RDb25maXJtZWQoKTtcclxuICAgIH1cclxuICAgIGlmIChpc0xvZ2dlZCkge1xyXG4gICAgICAgICQoJy5uYXYtbGluay5qc19sb2dPdXQnKS5wYXJlbnQoKS5zaG93KCk7XHJcbiAgICAgICAgJCgnLmpzX2VtYWlsLWNvbmZpcm0tLXRleHQnKS50ZXh0KCfQstGLINC30LDQu9C+0LPQuNC90LjQu9C40YHRjCDRg9GB0L/QtdGI0L3QvicpO1xyXG4gICAgICAgIGNvbnN0IG9sZFVSTCA9IGRvY3VtZW50LnJlZmVycmVyO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG9sZFVSTCk7XHJcbiAgICAgICAgaWYgKG9sZFVSTC5pbmNsdWRlcygnY29uZmlybS1yZWdpc3RyYXRpb24nKSkge1xyXG4gICAgICAgICAgICAkKCcuanNfbWVzc2FnZV9sb2dnZWQtLXRleHQnKS50ZXh0KCfQstGLINC/0L7QtNGC0LLQtdGA0LTQuNC70Lgg0YDQtdCz0LjRgdGC0YDQsNGG0LjRjicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvbkxvZ2luU3Vic2NyaWJlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoc2VsZWN0b3JMb2dpblN0YXRlKS50ZXh0KCfQn9GA0LjQstC10YIg0LDQvdC+0L3QuNC80L3Ri9C5INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCcpO1xyXG4gICAgICAgICQoc2VsZWN0b3JFbWFpbENvbmZpcm1TdGF0ZSkuZW1wdHkoKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEluaXQgaGVhZGVyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW5pdEhlYWRlcigpIHtcclxuICAgLy8gY2hlY2sgb3RoZXIgaGFuZGxlciBpbiBsb2dpbi1mb3JtLmpzXHJcbiAgICBjb25zdCAkbG9naW5Cb3ggPSAkKENPTlNULnVpU2VsZWN0b3JzLmhlYWRlckxvZ2luQm94KTtcclxuICAgIGNvbnN0ICRyZWdpc3RlckJveCA9ICQoQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyUmVnQm94KTtcclxuXHJcbiAgICBQdWJTdWIuc3Vic2NyaWJlKENPTlNULmV2ZW50cy5VU0VSX0xPR0dFRCwgb25Mb2dpblN1YnNjcmliZSk7XHJcblxyXG4gICAgc2hvd0xvZ291dCgpO1xyXG5cclxuICAgICQoQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyUmVnQnRuKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgJGxvZ2luQm94LmhpZGUoKTtcclxuICAgICAgICAkcmVnaXN0ZXJCb3guY3NzKHsndG9wJzogMCwgJ3JpZ2h0JzogMH0pXHJcbiAgICAgICAgICAgIC5hZGRDbGFzcygnYmctbGlnaHQgYm9yZGVyIG10LTUgbXgtYXV0byBwb3NpdGlvbi1hYnNvbHV0ZSBweC0zIGQtYmxvY2snKVxyXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJOYXZMb2dpbkJ0bikub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICRsb2dpbkJveC5hZGRDbGFzcygnZC1ibG9jaycpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAkcmVnaXN0ZXJCb3guYWRkQ2xhc3MoJ2Qtbm9uZScpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJyk7XHJcbiAgICB9KTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL2hlYWRlci9oZWFkZXIuanMiLCIvLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdXNlcic7XHJcbi8vIGltcG9ydCBTcGlubmVyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9zcGlubmVyJztcclxuaW1wb3J0IHZpZXdVdGlscyBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdmlldyc7XHJcbi8vIGltcG9ydCBQdWJTdWIgZnJvbSAncHVic3ViLWpzJztcclxuaW1wb3J0IHtDT05TVH0gZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2NvbnN0cyc7XHJcblxyXG4vLyDQn9C+0YHQu9C1INC00L7QsdCw0LLQu9C10L3QuNGPINCw0LrQutCw0YPQvdGC0LAg0YHQvdC+0LLQsCDQtNC10YDQvdGD0YLRjCDQnNCV0KLQkCDQuCDQv9C10YDQtdGA0LjRgdC+0LLQsNGC0Ywg0YHQv9C40YHQvtC6INCw0LrQutCw0YPQvdGC0L7QslxyXG5jb25zdCBhZGRJbnN0YWdyYW1BY2NvdW50ID0gKG5ld0Zvcm1EYXRhKSA9PiB7XHJcbiAgICBjb25zdCBjYkVycm9yID0gKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUicsIHJlc3VsdCk7XHJcbiAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSgkKCcuZXJyb3ItbXNnJyksXHJcbiAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMuc3RhdGUsXHJcbiAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMubWVzc2FnZSB8fCAnTG9naW4gZXJyb3InKTtcclxuICAgICAgICAvLyAkKF9sb2dpbkJveCkuYWRkQ2xhc3MoY2xvc2VDbGFzcykucmVtb3ZlQ2xhc3Mob3BlbmVkQ2xhc3MpO1xyXG4gICAgfTtcclxuXHJcbiAgICBVc2VyLmFkZEluc3RhZ3JhbUFjY291bnQobmV3Rm9ybURhdGEsIGNiRXJyb3IpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnN0YXR1cykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQsIHJlc3VsdC5zdGF0dXMpO1xyXG4gICAgICAgICAgICAvLyBkZWJ1Z2dlcjtcclxuICAgICAgICAgICAgY29uc3QgJG1zZ0xpc3QgPSAkKCcuYWNjb3VudHMtbGlzdCcpO1xyXG4gICAgICAgICAgICAkbXNnTGlzdC5lbXB0eSgpO1xyXG4gICAgICAgICAgICAvLyB0b2RvIDogcmVsb2FkIGxpc3RcclxuICAgICAgICAgICAgLy8gZmlsbExpc3QoJG1zZ0xpc3QsIHJlc3VsdC5kYXRhLmFjY291bnRzKTtcclxuICAgICAgICAgICAgLy8gYWRkTGlzdEhhbmRsZXIoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UoJHRleHRBcmVhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIC8vICAgICByZXN1bHQuc3RhdHVzLnN0YXRlLFxyXG4gICAgICAgICAgICAvLyAgICAgcmVzdWx0LnN0YXR1cy5tZXNzYWdlIHx8ICdMb2dpbiBlcnJvcicpO1xyXG4gICAgICAgICAgICAvLyAkKF9sb2dpbkJveCkuYWRkQ2xhc3MoY2xvc2VDbGFzcykucmVtb3ZlQ2xhc3Mob3BlbmVkQ2xhc3MpO1xyXG4gICAgICAgIH1cclxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAvLyB0b2RvOiByZW5kZXIgZm9yIHVzZXJcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ3N1Ym1pdCcsIG5ld0Zvcm1EYXRhKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGFkZE9uTG9hZEhhbmRsZXJzKCkge1xyXG4gICAgLy8gJCgnLmpzX3JlcGVhdC1zZWN1cml0eS1jb2RlJykub24oJ2NsaWNrJywgKGUpID0+IHtcclxuXHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICAkKCcuanNfYWRkLWluc3RhZ3JhbS1hY2NvdW50Jykub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCBidG4gPSAkKGUudGFyZ2V0KTtcclxuICAgICAgICBjb25zdCAkbW9kYWxCb2R5ID0gYnRuLmNsb3Nlc3QoJy5tb2RhbCcpLmZpbmQoJy5tb2RhbC1kaWFsb2cgLm1vZGFsLWJvZHknKTtcclxuICAgICAgICBjb25zdCB1c2VybmFtZSA9ICRtb2RhbEJvZHkuZmluZCgnaW5wdXRbbmFtZT1cInVzZXJuYW1lXCJdJykudmFsKCkudHJpbSgpO1xyXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkID0gJG1vZGFsQm9keS5maW5kKCdpbnB1dFtuYW1lPVwicGFzc1wiXScpLnZhbCgpLnRyaW0oKTtcclxuICAgICAgICBjb25zdCAkZm9ybSA9ICQoJ2Zvcm0nLCAkbW9kYWxCb2R5KTtcclxuICAgICAgICBjb25zdCBmb3JtID0gJGZvcm0uZ2V0KDApO1xyXG4gICAgICAgIGNvbnN0IGNzc1ZhbGlkYXRpb25DbGFzcyA9ICdmb3JtLXZhbGlkYXRpb24nO1xyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIC8vIGNvbnN0IHZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoJGZvcm0pO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbGlkYXRvci52YWxpZGF0ZSgpKTtcclxuICAgICAgICBpZiAoZm9ybS5jaGVja1ZhbGlkaXR5KCkpIHtcclxuICAgICAgICAgICAgYWRkSW5zdGFncmFtQWNjb3VudCh7dXNlcm5hbWUsIHBhc3N3b3JkfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gSGlnaGxpZ2h0IGVycm9yc1xyXG4gICAgICAgICAgICBpZiAoZm9ybS5yZXBvcnRWYWxpZGl0eSkge1xyXG4gICAgICAgICAgICAgICAgZm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICRmb3JtLmFkZENsYXNzKGNzc1ZhbGlkYXRpb25DbGFzcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXVzZXJuYW1lIHx8ICFwYXNzd29yZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm90IHZhbGlkIC0gRW1wdHkgZmllbGRzJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkTGlzdEhhbmRsZXIoLyogdXNlcm5hbWUqLykge1xyXG4gICAgLy8gJCgnI3lvdXJNb2RhbElEJykub24oJ3Nob3cuYnMubW9kYWwnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAvLyAgICAgdmFyIHlvdXJwYXJhbWV0ZXIgPSBlLnJlbGF0ZWRUYXJnZXQuZGF0YXNldC55b3VycGFyYW1ldGVyO1xyXG4gICAgLy8gICAgIC8vIERvIHNvbWUgc3R1ZmYgdy8gaXQuXHJcbiAgICAvLyB9KTtcclxuICAgIGxldCBjaGVja3BvaW50VHlwZSA9ICcnO1xyXG5cclxuICAgICQoJy5qc19wYXNzLWNoZWNrcG9pbnQtYnRuJykub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCAkYnV0dG9uID0gJChlLnRhcmdldCk7XHJcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSAkYnV0dG9uLmRhdGEoJ3VzZXJuYW1lJyk7XHJcbiAgICAgICAgY2hlY2twb2ludFR5cGUgPSAkYnV0dG9uLmRhdGEoJ2NoZWNrcG9pbnRUeXBlJykgfHwgY2hlY2twb2ludFR5cGU7XHJcbiAgICAgICAgLy8gJCgnI3NlY3VyaXR5LWNvZGUnKS5kYXRhKCdjaGVja3BvaW50VHlwZScsIGNoZWNrcG9pbnRUeXBlKTtcclxuICAgICAgICAvLyB0b2RvIGFkZCAnY2hlY2twb2ludFR5cGUnIHRvIG1vZGFsXHJcbiAgICAgICAgY29uc3Qgc2VuZFRvID0gKGNoZWNrcG9pbnRUeXBlID09PSAnUEhPTkUnKSA/ICfRgtC10LvQtdGE0L7QvScgOiAnZW1haWwnO1xyXG4gICAgICAgIC8vIFNwaW5uZXIuc3RhcnQoJGJ1dHRvbiwgJ2ZhLWtleScpO1xyXG5cclxuICAgICAgICBpZiAoY2hlY2twb2ludFR5cGUgPT09ICdFTUFJTF9PUl9QSE9ORScpIHtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIC8vINC40L3Qv9GD0YLRiyDRgdC/0YDRj9GC0LDQvdGLLFxyXG4gICAgICAgICAgICAvLyDQv9C+0LrQsNC30LDRgtGMINGB0LXRgNGL0LUg0L/QtdGA0LXQutC70Y7Rh9Cw0YLQtdC70LggKNCy0YvQsdGA0LDQuyDRgtC40L8pXHJcbiAgICAgICAgICAgIC8vINC10YHRgtGMINC60L3QvtC/0LrQsCDQl9Cw0L/RgNC+0YHQuNGC0Ywg0LrQvtC0INC/0L7QtNGC0LLQtdGA0LbQtNC10L3QuNC1XHJcbiAgICAgICAgICAgICQoJyNzZWN1cml0eS1jb2RlLXBob25lT3JlbWFpbCcpLm1vZGFsKHtzaG93OiB0cnVlLCB1c2VybmFtZX0pO1xyXG5cclxuICAgICAgICAgICAgLy8g0L3QtSDQvtGC0L/RgNCw0LLQu9GP0LXQvCDRgNC10LrQstC10YHRglxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBVc2VyLmdldFNlY3VyaXR5S2V5KHVzZXJuYW1lLCBjaGVja3BvaW50VHlwZSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZWN1cml0eUtleSByZWNlaXZlZDonLCByZXN1bHQuc3RhdHVzLnN0YXRlKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMuc3RhdGUgPT09ICdvaycpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRtb2RhbCA9ICQoJyNzZWN1cml0eS1jb2RlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU3Bpbm5lci5zdG9wKCRidXR0b24sICdmYS1rZXknKTtcclxuICAgICAgICAgICAgICAgICQoJy5qc19zdWNjZXNzLWZlZWRiYWNrJywgJG1vZGFsKS5lbXB0eSgpLnRleHQoYNCa0LvRjtGHINC/0L7QtNGC0LLQtdGA0LbQtNC10L3QuNGPINCx0YvQuyDQvtGC0L/RgNCw0LLQu9C10L0g0JLQsNC8INC90LAgJHtzZW5kVG99YCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnI3NlY3VyaXR5LWNvZGUnKS5hdHRyKCdkYXRhLXVzZXJuYW1lJywgdXNlcm5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBpbnNpZGUgbW9kYWxcclxuICAgICQoJy5qc19jb25maXJtLXNlY3VyaXR5LWNvZGUnKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJ0biA9ICQoZS50YXJnZXQpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gYnRuLmNsb3Nlc3QoJyNzZWN1cml0eS1jb2RlJykuZGF0YSgndXNlcm5hbWUnKTtcclxuICAgICAgICBjb25zdCAka2V5SW5wdXQgPSBidG4uY2xvc2VzdCgnLm1vZGFsJykuZmluZCgnLm1vZGFsLWRpYWxvZyBmb3JtIGlucHV0LmpzX2NvbmZpcm0ta2V5Jyk7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gJGtleUlucHV0LnZhbCgpLnRyaW0oKTtcclxuICAgICAgICBjb25zdCAkbW9kYWwgPSBidG4uY2xvc2VzdCgnLm1vZGFsJyk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgaWYgKGtleS5sZW5ndGggIT09IDYpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBVc2VyLmNvbmZpcm1TZWN1cml0eUtleShrZXksIHVzZXJuYW1lKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMuc3RhdGUgIT09ICdvaycpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnanNfY29uZmlybTonLCByZXN1bHQuc3RhdHVzLnN0YXRlLCAnY2xvc2UgbW9kYWwnKTtcclxuICAgICAgICAgICAgJG1vZGFsLm1vZGFsKCdoaWRlJyk7XHJcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyJyk7XHJcbiAgICAgICAgICAgICQoJy5qc19zdWNjZXNzLWZlZWRiYWNrJywgJG1vZGFsKS50ZXh0KCfQl9Cw0L/RgNC+0YEg0L3QtSDQvtGC0L/RgNCw0LLQu9C10L0nKS5jc3MoJ2NvbG9yJywgJ3JlZCcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnZm9ybSBpbnB1dFttaW5sZW5ndGhdJykub24oJ2JsdXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgbGVuID0gJCh0aGlzKS52YWwoKS50cmltKCkubGVuZ3RoO1xyXG4gICAgICAgIGNvbnN0IG1pbkxlbiA9IE51bWJlcigkKHRoaXMpLmF0dHIoJ21pbmxlbmd0aCcpKTtcclxuICAgICAgICAvLyBjb25zdCBtZXNzYWdlID0gbWluTGVuIDw9IGxlbiA/ICcnIDogbWluTGVuICsgJyBjaGFyYWN0ZXJzIG1pbmltdW0nO1xyXG4gICAgICAgIGlmIChtaW5MZW4gIT09IGxlbikge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNzcygnYm9yZGVyQ29sb3InLCAncmVkJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2JvcmRlckNvbG9yJywgJyNjZWQ0ZGEnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5zZXRDdXN0b21WYWxpZGl0eShtZXNzYWdlKVxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gb25IaWRlTW9kYWwoZSkge1xyXG4gICAgICAgIGNvbnN0ICRtb2RhbCA9ICQoZS50YXJnZXQpO1xyXG4gICAgICAgICRtb2RhbC5maW5kKCcuZmlyc3Qtc3RlcCcpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAkbW9kYWwuZmluZCgnLnNlY29uZC1zdGVwJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICQoJy5qc19jb25maXJtLWtleScpLnZhbCgnJyk7XHJcbiAgICAgICAgJCgnLmpzX3N1Y2Nlc3MtZmVlZGJhY2snLCAkbW9kYWwpLnJlbW92ZUF0dHIoJ3N0eWxlJykuZW1wdHkoKTtcclxuICAgIH1cclxuICAgICQoJyNzZWN1cml0eS1jb2RlLXBob25lT3JlbWFpbCcpLm9uKCdoaWRlLmJzLm1vZGFsJywgb25IaWRlTW9kYWwpO1xyXG4gICAgJCgnI3NlY3VyaXR5LWNvZGUnKS5vbignaGlkZS5icy5tb2RhbCcsIG9uSGlkZU1vZGFsKTtcclxuXHJcbiAgICAvLyBcIlBIT05FX09SX0VNQUlMXCIgbW9kYWxcclxuICAgICQoJy5qc19nZXQtc2VjdXJpdHktY29kZS1waG9uZU9yZW1haWwnKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0ICRtb2RhbCA9ICQoJyNzZWN1cml0eS1jb2RlLXBob25lT3JlbWFpbCcpO1xyXG4gICAgICAgIGNvbnN0IHR5cGVTZWxlY3RlZCA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJG1vZGFsKS5maW5kKCcuanNfYnRuLXR5cGUtc3dpdGNoZXIgaW5wdXQ6Y2hlY2tlZCcpO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrcG9pbnRUeXBlQWN0aXZlID0gdHlwZVNlbGVjdGVkLnZhbCgpO1xyXG4gICAgICAgIGNvbnN0IHNlbmRUbyA9IChjaGVja3BvaW50VHlwZUFjdGl2ZSA9PT0gJ1BIT05FJykgPyAn0YLQtdC70LXRhNC+0L0nIDogJ2VtYWlsJztcclxuICAgICAgICBjb25zdCBtb2RhbENvbmZpZyA9ICRtb2RhbC5kYXRhKClbJ2JzLm1vZGFsJ10uX2NvbmZpZztcclxuICAgICAgICBjb25zdCB1c2VybmFtZSA9IG1vZGFsQ29uZmlnLnVzZXJuYW1lO1xyXG4gICAgICAgIFVzZXIuZ2V0U2VjdXJpdHlLZXkodXNlcm5hbWUsIGNoZWNrcG9pbnRUeXBlQWN0aXZlKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgLy8g0L/RgNC4INC90LDQttCw0YLQuNC4IFwi0JfQsNC/0YDQvtGB0LjRgtGMINC60L7QtCDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjQtVwiIC0g0L7RgtC/0LDRgNC70Y/QtdGC0YHRjyDRgNC10LrQstC10YHRgiBcItGB0YLQsNGA0YIg0YfQtdC60L/QvtC40L3RglwiINC/0L7Rj9Cy0LvRj9C10YLRjNGB0Y8g0LjQvdC/0YPRgiDQuCDQutC90L7Qv9C60LAg0LTRgNGD0LPQuNGFINGC0LjQv9Cw0YVcclxuICAgICAgICAgICAgLy8gZ2V0IHNlbGVjdGVkIGJ1dHRvblxyXG5cclxuICAgICAgICAgICAgLy8g0L/QtdGA0LXQutC70Y7Rh9Cw0YLQtdC70Ywo0YHQtdGA0YvQuSkg0Lgg0LrQvdC+0L/QutCwIFwi0JfQsNC/0YDQvtGB0LjRgtGMINC60L7QtCDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjQtVwiINC40YHRh9C10LfQsNGO0YJcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlY3VyaXR5S2V5IHJlY2VpdmVkOicsIHJlc3VsdC5zdGF0dXMuc3RhdGUpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cy5zdGF0ZSA9PT0gJ29rJykge1xyXG4gICAgICAgICAgICAgICAgJCgnLmZpcnN0LXN0ZXAnLCAkbW9kYWwpLmFkZENsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgICAgICQoJy5zZWNvbmQtc3RlcCcsICRtb2RhbCkucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgJCgnLmpzX3N1Y2Nlc3MtZmVlZGJhY2snLCAkbW9kYWwpLmVtcHR5KCkudGV4dChg0JrQu9GO0Ycg0L/QvtC00YLQstC10YDQttC00LXQvdC40Y8g0LHRi9C7INC+0YLQv9GA0LDQstC70LXQvSDQktCw0Lwg0L3QsCAke3NlbmRUb31gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbGxMaXN0KCRsaXN0LCBkYXRhQXJyYXkpIHtcclxuICAgIGNvbnN0IGl0ZW1zID0gZGF0YUFycmF5O1xyXG4gICAgY29uc3QgY0xpc3QgPSAkbGlzdDtcclxuICAgIGNvbnN0IGRlZmF1bHRBdmF0YXJTcmMgPSAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9qTk5UNExFLnBuZyc7XHJcbiAgICBjb25zdCBpbnNlcnRJdGVtID0gKGRhdGEsIHRleHQsIGNzc0NscykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxpVHBsID0gYCR7KGRhdGEpXHJcbiAgICAgICAgICAgID8gYDxsaSBjbGFzcz1cImxpc3QtaW5saW5lLWl0ZW0gJHtjc3NDbHN9XCI+PHNwYW4gY2xhc3M9XCJmaWd1cmVcIj4ke2RhdGF9PC9zcGFuPjxzcGFuPiR7dGV4dH08L3NwYW4+PC9saT5gXHJcbiAgICAgICAgICAgIDogYDxsaSBjbGFzcz1cImxpc3QtaW5saW5lLWl0ZW0gJHtjc3NDbHN9XCI+PHNwYW4gY2xhc3M9XCJmaWd1cmVcIj4wPC9zcGFuPjxzcGFuPiR7dGV4dH08L3NwYW4+PC9saT5gfWA7XHJcbiAgICAgICAgcmV0dXJuIGxpVHBsO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHN0YXRzID0gKGluZm8pID0+IHtcclxuICAgICAgICBjb25zdCB0cGwgPSBgPGRpdiBjbGFzcz1cImNvbFwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LWlubGluZSB0ZXh0LWNlbnRlciBjb3VudHMtbGlzdFwiPlxyXG4gICAgICAgICAgICAkeyhpbmZvKVxyXG4gICAgICAgICAgICAgID8gYCR7aW5zZXJ0SXRlbShpbmZvWydtZWRpYV9jb3VudCddLCAn0J/Rg9Cx0LvQuNC60LDRhtC40LgnLCAnbWVkaWEtY291bnQnKX1cclxuICAgICAgICAgICAgICAgICR7aW5zZXJ0SXRlbShpbmZvWydmb2xsb3dlcl9jb3VudCddLCAn0J/QvtC00L/QuNGB0YfQuNC60LgnLCAnZm9sbG93ZXItY291bnQnKX1cclxuICAgICAgICAgICAgICAgICR7aW5zZXJ0SXRlbShpbmZvWydmb2xsb3dpbmdfY291bnQnXSwgJ9Cf0L7QtNC/0LjRgdC60LgnLCAnZm9sbG93aW5nLWNvdW50Jyl9YFxyXG4gICAgICAgICAgICAgIDogYCR7aW5zZXJ0SXRlbShmYWxzZSwgJ9Cf0YPQsdC70LjQutCw0YbQuNC4JywgJ21lZGlhLWNvdW50Jyl9XHJcbiAgICAgICAgICAgICAgICAke2luc2VydEl0ZW0oZmFsc2UsICfQn9C+0LTQv9C40YHRh9C40LrQuCcsICdmb2xsb3dlci1jb3VudCcpfVxyXG4gICAgICAgICAgICAgICAgJHtpbnNlcnRJdGVtKGZhbHNlLCAn0J/QvtC00L/QuNGB0LrQuCcsICdmb2xsb3dpbmctY291bnQnKX1gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5gO1xyXG4gICAgICAgIHJldHVybiB0cGw7XHJcbiAgICB9O1xyXG4gICAgY0xpc3QuZW1wdHkoKS5hZGRDbGFzcygnYm9yZGVyLWxpZ2h0LWNvbG9yJyk7XHJcbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5mbyA9IGl0ZW0uaW5mbztcclxuICAgICAgICBjb25zdCBjaGVja3BvaW50ID0gaXRlbS5jaGVja3BvaW50IHx8IGl0ZW07XHJcblxyXG4gICAgICAgIGlmICghaW5mbykge1xyXG4gICAgICAgICAgICAkKGA8bGkgY2xhc3M9XCJtZWRpYSBweS0zXCIgZGF0YS11c2VybmFtZT1cIiR7aXRlbS51c2VybmFtZX1cIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJtbC0zIHJvdW5kZWRcIiBhbHQ9XCJkZWZhdWx0IGF2YXRhclwiIHNyYz1cIiR7ZGVmYXVsdEF2YXRhclNyY31cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1ib2R5IGQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgdXNlci1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7KGl0ZW0udXNlcm5hbWUpID8gYDxoNCBjbGFzcz1cIm10LTAgbWItMSBuYW1lXCI+JHtpdGVtLnVzZXJuYW1lfTwvaDQ+YCA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgdXNlci1jaGVja3BvaW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7KGNoZWNrcG9pbnQuc3RhdHVzID09PSAnVFJJR0dFUkVEJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkganNfcGFzcy1jaGVja3BvaW50LWJ0biBkLWJsb2NrIG14LWF1dG9cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY2hlY2twb2ludC10eXBlPVwiJHtjaGVja3BvaW50LnR5cGUgfHwgJ0VNQUlMJ31cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS11c2VybmFtZT1cIiR7aXRlbS51c2VybmFtZSB8fCAnJ31cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI3NlY3VyaXR5LWNvZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWtleVwiPjwvaT7Qn9GA0L7QudGC0Lgg0YfQtdC60L/QvtC40L3RgjwvYnV0dG9uPmBcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBgKHRvZG8pY2hlY2twb2ludCBzdGF0dXMgLSAke2NoZWNrcG9pbnQuc3RhdHVzfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtzdGF0cygpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+YCkuYXBwZW5kVG8oY0xpc3QpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoYDxsaSBjbGFzcz1cIm1lZGlhIHB5LTNcIiBkYXRhLXVzZXJuYW1lPVwiJHtpdGVtLnVzZXJuYW1lfVwiPlxyXG4gICAgICAgICAgICAkeyhpbmZvWydwcm9maWxlX3BpY191cmwnXSlcclxuICAgICAgICAgICAgICAgID8gYDxpbWcgY2xhc3M9XCJtbC0zIHJvdW5kZWRcIiBhbHQ9XCJVc2VyIHBob3RvXCIgc3JjPVwiJHtpbmZvWydwcm9maWxlX3BpY191cmwnXX1cIj5gXHJcbiAgICAgICAgICAgICAgICA6IGA8aW1nIGNsYXNzPVwibWwtMyByb3VuZGVkXCIgYWx0PVwiZGVmYXVsdCBhdmF0YXJcIiBzcmM9XCIke2RlZmF1bHRBdmF0YXJTcmN9XCI+YH1cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWJvZHkgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHVzZXItaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7KGl0ZW0udXNlcm5hbWUpID8gYDxwIGNsYXNzPVwibXQtMCBtYi0xIG5hbWUgbGVhZFwiPiR7aXRlbS51c2VybmFtZX08L3A+YCA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICR7KGluZm8ubmFtZSkgPyBgPGg0IGNsYXNzPVwibXQtMCBtYi0xXCI+JHtpbmZvLm5hbWV9PC9oND5gIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgJHsoaW5mby5uYW1lKSA/ICcnIDogJycgIC8qICR7KGluZm8uZW1haWwpID8gYDxwIGNsYXNzPVwibXQtMCBtYi0xXCI+JHtpbmZvLmVtYWlsfTwvcD5gIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICR7KGluZm8ucGhvbmUpID8gYDxwIGNsYXNzPVwibXQtMCBtYi0xXCI+JHtpbmZvLnBob25lfTwvcD5gIDogJyd9ICovIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB1c2VyLWNoZWNrcG9pbnRcIj4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAkeyhjaGVja3BvaW50LnN0YXR1cyA9PT0gJ1RSSUdHRVJFRCcpXHJcbiAgICAgICAgICAgICAgICAgICAgPyBgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkganNfcGFzcy1jaGVja3BvaW50LWJ0biBkLWJsb2NrIG14LWF1dG9cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY2hlY2twb2ludC10eXBlPVwiJHtjaGVja3BvaW50LnR5cGUgfHwgJ0VNQUlMJ31cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS11c2VybmFtZT1cIiR7aXRlbS51c2VybmFtZSB8fCAnJ31cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNzZWN1cml0eS1jb2RlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWtleVwiPjwvaT7Qn9GA0L7QudGC0Lgg0YfQtdC60L/QvtC40L3RgjwvYnV0dG9uPmBcclxuICAgICAgICAgICAgICAgICAgICA6ICcnfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAke3N0YXRzKGluZm8pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2xpPmApLmFwcGVuZFRvKGNMaXN0KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKCdwdWJsaXNoIFB1YlN1YicsIENPTlNULmV2ZW50cy5pbnN0YWdyYW1BY2NvdW5zLklOU1RBR1JBTV9BQ0NPVU5TX1JFTkRFUkVEKTtcclxuICAgIHdpbmRvdy5QdWJTdWIucHVibGlzaChDT05TVC5ldmVudHMuaW5zdGFncmFtQWNjb3Vucy5JTlNUQUdSQU1fQUNDT1VOU19SRU5ERVJFRCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbml0IGhlYWRlclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBjb25zdCAkbXNnTGlzdCA9ICQoJy5hY2NvdW50cy1saXN0Jyk7XHJcbiAgICAvLyBjaGVjayB3ZSBhcmUgaW4gcHJvZmlsZSBwYWdlXHJcbiAgICBpZiAoISRtc2dMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHRva2VuID0gVXNlci5nZXRUb2tlbigpOyAvLyB1cGQgdG86IFVzZXIuZ2V0VG9rZW4oKVxyXG4gICAgY29uc3QgbWV0YWRhdGEgPSBVc2VyLmdldE1ldGFkYXRhKHRva2VuKTtcclxuICAgIGNvbnN0IHJlc2VuZFJlcXVlc3QgPSAoKSA9PiBVc2VyLmdldE1ldGFkYXRhKHRva2VuKTtcclxuICAgIGxldCBpc1NlbmRSZXFPbmNlID0gZmFsc2U7XHJcbiAgICBjb25zdCBjaGVja1Jlc3BvbnNlID0gKHJlc3VsdCwgaXNSZXNlbmRSZXF1ZXN0KSA9PiB7XHJcbiAgICAgICAgaWYgKCFyZXN1bHQuc3RhdHVzLnN0YXRlID09PSAnb2snIHx8ICFyZXN1bHQuZGF0YSB8fCAhJG1zZ0xpc3QubGVuZ3RoIHx8IGlzUmVzZW5kUmVxdWVzdCkge1xyXG4gICAgICAgICAgICAvLyDQv9GA0L7QstC10YDRj9C8INC+0LTQuNC9INGA0LDQtyDQvdCw0LvQuNGH0LjQtSByZXN1bHQuZGF0YS5hY2NvdW50cy5pbmZvXHJcbiAgICAgICAgICAgICRtc2dMaXN0LmVtcHR5KCk7XHJcbiAgICAgICAgICAgICQoYDxsaSBjbGFzcz1cIm1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cIm10LTAgbWItM1wiPtCd0Lgg0L7QtNC90L7Qs9C+INCQ0LrQutCw0YPQvdGC0LAg0L3QtSDQtNC+0LHQsNCy0LvQtdC90L48L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+YCkuYXBwZW5kVG8oJG1zZ0xpc3QpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc2VuZFJlcXVlc3QoKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja1Jlc3BvbnNlKHJlc3VsdCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmVxdWVzdCByZXNlbmQnKTtcclxuICAgICAgICAgICAgfSwgMzUwMCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g0LLRi9Cy0L7QtCDRgNC10LfRg9C70YzRgtCw0YLQvtCyIChkYXRhLmFjY291bnRzLmluZm8pXHJcbiAgICAgICAgJCgnLnByb2ZpbGUtdXNlciAuc3Bpbm5lci1ib3gnKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgZmlsbExpc3QoJG1zZ0xpc3QsIHJlc3VsdC5kYXRhLmFjY291bnRzKTtcclxuICAgICAgICBhZGRMaXN0SGFuZGxlcigpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBjaGVjayB3ZSBhcmUgaW4gcHJvZmlsZSBwYWdlXHJcbiAgICBpZiAoISRtc2dMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBhZGRPbkxvYWRIYW5kbGVycygpO1xyXG5cclxuICAgIC8vINC80L7QttC10YIg0LjQvdGE0L4g0L7RgtGB0YPRgtGB0LLQvtCy0LDRgtGMIC0g0YHQtNC10LvQsNGC0Ywg0LXRidC1INGA0LDQtyDQt9Cw0L/RgNC+0YEg0YfQtdGA0LXQtyAzINGB0LXQui5cclxuXHJcbiAgICBtZXRhZGF0YS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAvLyDQv9GA0L7QstC10YDRj9C8INC+0LTQuNC9INGA0LDQtyDQvdCw0LvQuNGH0LjQtSByZXN1bHQuZGF0YS5hY2NvdW50cy5pbmZvXHJcbiAgICAgICAgbGV0IGlzUmVzZW5kUmVxdWVzdCA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChyZXN1bHQuZGF0YSAmJiByZXN1bHQuZGF0YS5hY2NvdW50cyAmJiAhaXNTZW5kUmVxT25jZSkge1xyXG4gICAgICAgICAgICByZXN1bHQuZGF0YS5hY2NvdW50cy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWl0ZW0uaW5mbykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzUmVzZW5kUmVxdWVzdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNTZW5kUmVxT25jZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2hlY2tSZXNwb25zZShyZXN1bHQsIGlzUmVzZW5kUmVxdWVzdCk7XHJcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UoJCgnLmVycm9yLW1zZycpLFxyXG4gICAgICAgICAgICAgICAgZXJyLnN0YXR1cyB8fCAnJyxcclxuICAgICAgICAgICAgICAgICfQndC1INC/0L7Qu9GD0YfQuNC70L7RgdGMINC30LDQs9GA0YPQt9C40YLRjCDQtNC+0YHRgtGD0L/QvdGL0LUgSW5zdGFncmFtINCw0LrQutCw0YPQvdGC0YsnKTtcclxuICAgICAgICB9LCAzMDAwKTtcclxuICAgICAgICAkKCcuc3Bpbm5lci1ib3gnKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICB9KTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL2luc3RhZ3JhbS1hY2NvdW50cy1saXN0L2luc3RhZ3JhbS1hY2NvdW50cy1saXN0LmpzIiwiLyogZXNsaW50LWRpc2FibGUgc29ydC12YXJzICovXHJcbi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy91c2VyJztcclxuaW1wb3J0IFB1YlN1YiBmcm9tICdwdWJzdWItanMnOyAvLyBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9wdWJzdWItanNcclxuaW1wb3J0IGNvb2tpZVN0b3JhZ2UgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2Nvb2tpZSc7XHJcbi8vIGltcG9ydCBWYWxpZGF0b3IgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2Zvcm0tdmFsaWRhdG9yJztcclxuaW1wb3J0IHZpZXdVdGlscyBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdmlldyc7XHJcbmltcG9ydCB7Q09OU1R9IGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMnO1xyXG5cclxuLy8gd2luZG93LiQgPSAkO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExvZ2luRm9ybShzZWxlY3RvckNzcykge1xyXG4gICAgY29uc3Qge19mb3JtSWQsIF9idXR0b25TdWJtaXRJZCwgX3Nob3dMb2dpbkJveEJ0bklkLCBfbG9naW5Cb3h9ID0gc2VsZWN0b3JDc3M7XHJcbiAgICBjb25zdCB1c2VyID0gVXNlciwgLy8gc2VydmljZVxyXG4gICAgICAgICRmb3JtID0gJChfZm9ybUlkKSxcclxuICAgICAgICAkZW1haWwgPSAkZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwibWFpbFwiXScpLFxyXG4gICAgICAgICR0ZXh0QXJlYURlc2NyaXB0aW9uID0gJCgnI2Rlc2NyaXB0aW9uJyk7XHJcbiAgICAvLyBjb25zdCBvcGVuZWRDbGFzcyA9ICdkLWJsb2NrJztcclxuICAgIC8vIGNvbnN0IGNsb3NlQ2xhc3MgPSAnZC1ub25lJztcclxuXHJcbiAgICBjb25zdCB1c2VyTG9naW5IZWFkZXIgPSAoX2Zvcm1EYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2JFcnJvciA9IChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgJChfbG9naW5Cb3gpLmFwcGVuZCgnPHA+cmVzdWx0LnN0YXR1cy5tZXNzYWdlPC9wPicpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiB1c2VyLmxvZ2luKF9mb3JtRGF0YSwgY2JFcnJvcilcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuZGF0YSAmJiByZXN1bHQuZGF0YS50b2tlbikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNhdmUgdGhlIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBjb29raWVTdG9yYWdlLnNldChDT05TVC5jb29raWVTdG9yYWdlLnRva2VuLCByZXN1bHQuZGF0YS50b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLm5hdi1saW5rLmpzX2xvZ091dCcpLnBhcmVudCgpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmVxdWVzdCBzdWNjZWVkZWQgd2l0aCBKU09OIHJlc3BvbnNlJywgcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKCR0ZXh0QXJlYURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLm1lc3NhZ2UgfHwgJ0xvZ2luIHN1Y2NzZXNzJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UodGhpcy4kdGV4dEFyZWFEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYDxwPnN0YXR1czogJHtyZXN1bHQuc3RhdHVzLnN0YXRlfTwvcD48cD4gbWVzc2FnZTogJHtyZXN1bHQuc3RhdHVzLm1lc3NhZ2V9PC9wPmApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSgkdGV4dEFyZWFEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5tZXNzYWdlIHx8ICdMb2dpbiBlcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc3VibWl0Rm9ybSA9IGZ1bmN0aW9uKGZvcm1EYXRhT2JqKSB7XHJcbiAgICAgICAgY29uc3QgZW1haWwgPSAkZW1haWwudmFsKCksXHJcbiAgICAgICAgICAgIHBhc3N3b3JkID0gJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cInBhc3NcIl0nKS52YWwoKSxcclxuICAgICAgICAgICAgX2Zvcm1EYXRhID0gZm9ybURhdGFPYmogfHwge2VtYWlsLCBwYXNzd29yZH07XHJcblxyXG4gICAgICAgIGlmIChzZWxlY3RvckNzcy5pc0xvZ2luSW5zdGFncmFtKSB7XHJcbiAgICAgICAgICAgIC8vIHRvZG86IGRlbGV0ZSBtZVxyXG4gICAgICAgICAgICAvLyBhZGRJbnN0YWdyYW1BY2NvdW50KHt1c2VybmFtZTogJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cInVzZXJuYW1lXCJdJykudmFsKCksIHBhc3N3b3JkfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGVtYWlsLnZhbCgkZW1haWwudmFsKCkudG9Mb2NhbGVMb3dlckNhc2UoKSk7XHJcbiAgICAgICAgICAgIHVzZXJMb2dpbkhlYWRlcihfZm9ybURhdGEpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgUHViU3ViLnB1Ymxpc2goQ09OU1QuZXZlbnRzLlVTRVJfTE9HR0VELCAnbG9naW4nKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBsb2dPdXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb29raWVTdG9yYWdlLnJlbW92ZShDT05TVC5jb29raWVTdG9yYWdlLnRva2VuKTtcclxuICAgICAgICBQdWJTdWIucHVibGlzaChDT05TVC5ldmVudHMuVVNFUl9MT0dPVVQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBiaW5kRXZlbnRzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3QgJHNob3dMb2dpbkJveEJ0bklkID0gJChfc2hvd0xvZ2luQm94QnRuSWQpO1xyXG4gICAgICAgIGNvbnN0ICRsb2dpbkJveCA9ICQoX2xvZ2luQm94KTtcclxuICAgICAgICBjb25zdCBvcGVuZWRDbGFzcyA9ICdkLWJsb2NrJztcclxuICAgICAgICBjb25zdCBjbG9zZUNsYXNzID0gJ2Qtbm9uZSc7XHJcblxyXG4gICAgICAgICRzaG93TG9naW5Cb3hCdG5JZC5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc2VsZWN0b3JDc3MuaXNMb2dpbkluc3RhZ3JhbSkge1xyXG4gICAgICAgICAgICAgICAgJGxvZ2luQm94LmNzcyh7J3RvcCc6IDAsICdyaWdodCc6IDB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnYmctbGlnaHQgYm9yZGVyIG10LTUgbXgtYXV0byBwb3NpdGlvbi1hYnNvbHV0ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICRsb2dpbkJveC5hZGRDbGFzcyhvcGVuZWRDbGFzcykucmVtb3ZlQ2xhc3MoY2xvc2VDbGFzcyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0ICRidXR0b25TdWJtaXQgPSAkKF9idXR0b25TdWJtaXRJZCksXHJcbiAgICAgICAgICAgIGNzc1ZhbGlkYXRpb25DbGFzcyA9ICdmb3JtLXZhbGlkYXRpb24nO1xyXG5cclxuICAgICAgICAkYnV0dG9uU3VibWl0Lm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc3QgZm9ybSA9ICRmb3JtLmdldCgwKTtcclxuICAgICAgICAgICAgLy8gY29uc3QgdmFsaWRhdG9yID0gbmV3IFZhbGlkYXRvcigkZm9ybSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbGlkYXRvci52YWxpZGF0ZSgpKTtcclxuICAgICAgICAgICAgaWYgKGZvcm0uY2hlY2tWYWxpZGl0eSgpICYmIHZpZXdVdGlscy5pc0VtYWlsKCRlbWFpbC52YWwoKSkpIHtcclxuICAgICAgICAgICAgICAgIHN1Ym1pdEZvcm0oKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIEhpZ2hsaWdodCBlcnJvcnNcclxuICAgICAgICAgICAgICAgIGlmIChmb3JtLnJlcG9ydFZhbGlkaXR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJGZvcm0uYWRkQ2xhc3MoY3NzVmFsaWRhdGlvbkNsYXNzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcubmF2LWxpbmsuanNfbG9nT3V0Jykub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBsb2dPdXQoKTtcclxuICAgICAgICAgICAgJChlLnRhcmdldCkucGFyZW50KCkuaGlkZSgpO1xyXG4gICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKCR0ZXh0QXJlYURlc2NyaXB0aW9uLCAnTG9nZ2VkIG91dCcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBQdWJTdWIuc3Vic2NyaWJlKENPTlNULmV2ZW50cy5VU0VSX0xPR09VVCwgKG1zZykgPT4ge1xyXG4gICAgICAgICAgICAkKENPTlNULnVpU2VsZWN0b3JzLmhlYWRlck5hdkxvZ2luQnRuKS5hZGRDbGFzcyhvcGVuZWRDbGFzcykucmVtb3ZlQ2xhc3MoY2xvc2VDbGFzcyk7IC8vIC5zaG93KCk7XHJcbiAgICAgICAgICAgICQoQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyUmVnQnRuKS5hZGRDbGFzcyhvcGVuZWRDbGFzcykucmVtb3ZlQ2xhc3MoY2xvc2VDbGFzcyk7XHJcbiAgICAgICAgICAgICQoJy5uYXYtbGluay5qc19sb2dPdXQnKS5hZGRDbGFzcyhjbG9zZUNsYXNzKS5yZW1vdmVDbGFzcyhvcGVuZWRDbGFzcyk7IC8vIC5oaWRlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9yTG9naW5TdGF0ZSA9ICcuanNfbWVzc2FnZV9sb2dnZWQtLXRleHQnO1xyXG4gICAgICAgICAgICAkKHNlbGVjdG9yTG9naW5TdGF0ZSkudGV4dCgn0JLRiyDQstGL0YjQu9C4INC40Lcg0LDQutC60LDRg9C90YLQsCcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXNMb2dpbkJ0bkNsaWNrID0gJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJ25hdi5uYXZiYXInKS5maW5kKCRsb2dpbkJveCkubGVuZ3RoO1xyXG4gICAgICAgICAgICBjb25zdCBpc0FkZEluc3RhZ3JhbUJ0bkNsaWNrZWQgPSAkKGV2ZW50LnRhcmdldCkuYXR0cignaWQnKSA9PT0gQ09OU1QudWlTZWxlY3RvcnMuaW5zdGFncmFtLmFkZEFjY291bnRCdG5JZDtcclxuXHJcbiAgICAgICAgICAgIGlmICghaXNMb2dpbkJ0bkNsaWNrICYmICRsb2dpbkJveC5oYXNDbGFzcyhvcGVuZWRDbGFzcykgJiYgIWlzQWRkSW5zdGFncmFtQnRuQ2xpY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgJGxvZ2luQm94LmFkZENsYXNzKGNsb3NlQ2xhc3MpLnJlbW92ZUNsYXNzKG9wZW5lZENsYXNzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgICAgIGJpbmRFdmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGluaXRcclxuICAgIH07XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uanMiLCJpbXBvcnQgTWV0ZW9yRW1vamkgZnJvbSAnbWV0ZW9yLWVtb2ppJztcclxuLy8gaW1wb3J0IHFxIGZyb20gJ2ZpbmUtdXBsb2FkZXInOyAvL3RvZG86IGZpbmUtdXBsb2FkZVxyXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdXNlcic7XHJcbmltcG9ydCBVc2VyQ29udmVyc2F0aW9uIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9hcGktdXNlci1kaXJlY3QnO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvc3Bpbm5lcic7XHJcbi8vIGltcG9ydCBQdWJTdWIgZnJvbSAncHVic3ViLWpzJzsvLyBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9wdWJzdWItanNcclxuaW1wb3J0IHtDT05TVH0gZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2NvbnN0cyc7XHJcblxyXG5jb25zdCB0b2tlbiA9IFVzZXIuZ2V0VG9rZW4oKTtcclxuY29uc3QgJG1zZ0xpc3QgPSAkKCcubWVzc2FnZXMtbGlzdCcpO1xyXG5sZXQgdXBkYXRlSW50ZXJ2YWwgPSAnJztcclxubGV0IGludGVydmFsSWQgPSBmYWxzZTtcclxuXHJcbmZ1bmN0aW9uIGlzSW5NZXNzYWdlUGFnZSgpIHtcclxuICAgIGNvbnN0ICRtc2dMaXN0ID0gJCgnLm1lc3NhZ2VzLWxpc3QnKTtcclxuICAgIGNvbnN0ICR1c2VyTGlzdCA9ICQoJy5tZXNzYWdlcy11c2VyLWxpc3QnKTtcclxuICAgIHJldHVybiAhISRtc2dMaXN0Lmxlbmd0aCAmJiAhISR1c2VyTGlzdC5sZW5ndGg7XHJcbn1cclxuJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xyXG4gICAgaWYgKCFpc0luTWVzc2FnZVBhZ2UoKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gICAgY29uc3QgbSA9IG5ldyBNZXRlb3JFbW9qaSgpO1xyXG4gICAgY29uc3QgJHBpY2tlciA9ICQoJ3RleHRhcmVhW2RhdGEtbWV0ZW9yLWVtb2ppPVwidHJ1ZVwiXSB+IGRpdicpO1xyXG4gICAgY29uc3Qgc3R5bGUgPSAkcGlja2VyLmF0dHIoJ3N0eWxlJyk7XHJcbiAgICBjb25zdCBzdHlsZU5ldyA9IHN0eWxlLnJlcGxhY2UoJ3RvcDogMzBweDsnLCAndG9wOiAtMjEwcHg7Jyk7XHJcbiAgICAkcGlja2VyLmF0dHIoJ3N0eWxlJywgc3R5bGVOZXcpO1xyXG5cclxuICAgIC8qXHJcbiAgICAvL3RvZG86IGZpbmUtdXBsb2FkZVxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXHJcbiAgICBjb25zdCByZXN0cmljdGVkVXBsb2FkZXIgPSBuZXcgcXEuRmluZVVwbG9hZGVyKHtcclxuICAgICAgICBlbGVtZW50OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmluZS11cGxvYWRlci12YWxpZGF0aW9uJyksXHJcbiAgICAgICAgdGVtcGxhdGU6ICdxcS10ZW1wbGF0ZS12YWxpZGF0aW9uJyxcclxuICAgICAgICByZXF1ZXN0OiB7XHJcbiAgICAgICAgICAgIGVuZHBvaW50OiAnL3NlcnZlci91cGxvYWRzJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGh1bWJuYWlsczoge1xyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcnM6IHtcclxuICAgICAgICAgICAgICAgIHdhaXRpbmdQYXRoOiAnaHR0cHM6Ly9maW5ldXBsb2FkZXIuY29tL3NvdXJjZS9wbGFjZWhvbGRlcnMvd2FpdGluZy1nZW5lcmljLnBuZycsIC8vICcvc291cmNlL3BsYWNlaG9sZGVycy93YWl0aW5nLWdlbmVyaWMucG5nJyxcclxuICAgICAgICAgICAgICAgIG5vdEF2YWlsYWJsZVBhdGg6ICdodHRwczovL2ZpbmV1cGxvYWRlci5jb20vc2VydmVyL3dhaXRpbmctZ2VuZXJpYy5wbmcnIC8vICcvc291cmNlL3BsYWNlaG9sZGVycy9ub3RfYXZhaWxhYmxlLWdlbmVyaWMucG5nJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgICAgICAgIGFsbG93ZWRFeHRlbnNpb25zOiBbJ2pwZWcnLCAnanBnJywgJ3R4dCddLFxyXG4gICAgICAgICAgICBpdGVtTGltaXQ6IDMsXHJcbiAgICAgICAgICAgIHNpemVMaW1pdDogNTAwICogMTAyNFxyXG4gICAgICAgIH1cclxuICAgIH0pOyovXHJcbn0pO1xyXG5cclxuLy8gbWVzc2FnZXMtbGlzdFxyXG5mdW5jdGlvbiBmaWxsTGlzdCgkbGlzdCwgZGF0YUFycmF5LCBpc0FwcGVudFByZXZNc2cpIHtcclxuICAgIGNvbnN0IGl0ZW1zID0gZGF0YUFycmF5O1xyXG4gICAgY29uc3QgY0xpc3QgPSAkbGlzdDtcclxuICAgIC8vIGNvbnN0IGRlZmF1bHRBdmF0YXJTcmMgPSAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9qTk5UNExFLnBuZyc7XHJcbiAgICBjb25zdCBpbnNlcnRNc2cgPSAodmFsdWUsIHR5cGUsIGNzc0NscykgPT4ge1xyXG4gICAgICAgIGxldCBzdHIgPSAnJztcclxuICAgICAgICBzd2l0Y2ggKHR5cGUudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICBjYXNlICdwaG90byc6XHJcbiAgICAgICAgICAgICAgICBzdHIgPSBgPGRpdiBjbGFzcz1cImNoYXQtaW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3ZhbHVlfVwiIGFsdD1cIkNvbnRlbnQgSW1hZ2VcIiBjbGFzcz1cImNvbnRlbnQtaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PmA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbGluayc6XHJcbiAgICAgICAgICAgICAgICBzdHIgPSBgPGRpdiBjbGFzcz1cImNoYXQtaW1nXCI+XHJcbiAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiJHt2YWx1ZX1cIj4ke3ZhbHVlfTwvYT5gO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHN0ciA9IGA8ZGl2IGNsYXNzPVwiY2hhdC10ZXh0XCIgPiR7dmFsdWV9PC9kaXY+YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0cjtcclxuICAgIH07XHJcbiAgICBjb25zdCBhZGRUb0xpc3QgPSAoaXNBcHBlbnRQcmV2TXNnLCAkbGksICRsaXN0KSA9PiB7XHJcbiAgICAgICAgaWYgKGlzQXBwZW50UHJldk1zZykge1xyXG4gICAgICAgICAgICAkbGkuaW5zZXJ0QmVmb3JlKCRsaXN0LmZpbmQoJ2xpOmZpcnN0LWNoaWxkJykpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRsaS5hcHBlbmRUbygkbGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGlmIChpc0FwcGVudFByZXZNc2cpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnaXNBcHBlbnRQcmV2TXNnIHRvJywgY0xpc3QpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjTGlzdC5lbXB0eSgpLmFkZENsYXNzKCdib3JkZXItbGlnaHQtY29sb3InKTtcclxuICAgIH1cclxuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gaXRlbTtcclxuICAgICAgICAvLyBjb25zdCBjaGVja3BvaW50ID0gaXRlbS5jaGVja3BvaW50IHx8IGl0ZW07XHJcblxyXG4gICAgICAgIGlmIChtZXNzYWdlLnNpZGUudG9Mb3dlckNhc2UoKSA9PT0gJ2xlZnQnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRsaSA9ICQoYDxsaSBjbGFzcz1cImNoYXQtaXRlbSBjaGF0LWl0ZW0tbGVmdCBjb2wgZmxleC1jb2x1bW4tcmV2ZXJzZVwiIHZhbHVlPVwiJHttZXNzYWdlLnZhbHVlfVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgJHsobWVzc2FnZVsncHJvZmlsZV9waWNfdXJsJ10pXHJcbiAgICAgICAgICAgICAgICAgICAgPyBgPGRpdiBjbGFzcz1cImNoYXQtaW1nLWJveFwiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHttZXNzYWdlWydwcm9maWxlX3BpY191cmwnXX1cIiBhbHQ9XCJVc2VyIEF2YXRhclwiIGNsYXNzPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNoYXQtdXNlcm5hbWUgdGV4dC1tdXRlZFwiPiR7bWVzc2FnZS51c2VybmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtpbnNlcnRNc2cobWVzc2FnZS52YWx1ZSwgbWVzc2FnZS50eXBlKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImNoYXQtdGltZS10ZXh0XCI+JHtVc2VyQ29udmVyc2F0aW9uLmdldEZvcm1hdHRlZERhdGVVdGlsKG1lc3NhZ2UudGltZXN0YW1wKX08L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+YCk7XHJcbiAgICAgICAgICAgIGFkZFRvTGlzdChpc0FwcGVudFByZXZNc2csICRsaSwgY0xpc3QpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRsaSA9ICQoYDxsaSBjbGFzcz1cImNoYXQtaXRlbSBjaGF0LWl0ZW0tcmlnaHQgY29sIGZsZXgtY29sdW1uLXJldmVyc2VcIiB2YWx1ZT1cIiR7bWVzc2FnZS52YWx1ZX1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7aW5zZXJ0TXNnKG1lc3NhZ2UudmFsdWUsIG1lc3NhZ2UudHlwZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwicHVsbC1yaWdodCBjaGF0LXRpbWUtdGV4dFwiPiR7VXNlckNvbnZlcnNhdGlvbi5nZXRGb3JtYXR0ZWREYXRlVXRpbChtZXNzYWdlLnRpbWVzdGFtcCl9PC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5gKTtcclxuICAgICAgICAgICAgYWRkVG9MaXN0KGlzQXBwZW50UHJldk1zZywgJGxpLCBjTGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gYWRkUGFnaW5hdGlvbigkd3JhcHBlciwgcGFnaW5hdGlvbikge1xyXG4gICAgY29uc3QgY3Vyc29yID0gcGFnaW5hdGlvbi5wcmV2X2N1cnNvcjtcclxuICAgIGNvbnN0ICRidXR0b24gPSAkKGA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgbG9hZC1tb3JlIGQtZmxleCBwb3NpdGlvbi1hYnNvbHV0ZVwiIHN0eWxlPVwidG9wOiAtNDJweDtcIlxyXG4gICAgICAgIGRhdGEtY3Vyc29yPVwiJHtjdXJzb3J9XCI+0LXRidC1INC00LDQstCw0LkhPC9idXR0b24+YCk7XHJcblxyXG4gICAgaWYgKCEkd3JhcHBlci5jbG9zZXN0KCcubWVzc2FnZXMtbGlzdC1ib3gnKS5maW5kKCcubG9hZC1tb3JlJykubGVuZ3RoKSB7XHJcbiAgICAgICAgJGJ1dHRvbi5pbnNlcnRCZWZvcmUoJHdyYXBwZXIpLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJEYXRhID0gJCgnLm1lc3NhZ2VzLWxpc3QnKS5kYXRhKCdjb252ZXJzYXRpb24nKTtcclxuICAgICAgICAgICAgY29uc3Qge3VzZXJuYW1lLCBjb252ZXJzYXRpb25JZH0gPSB1c2VyRGF0YTtcclxuICAgICAgICAgICAgU3Bpbm5lci5zdGFydEJ1dHRvblNwaW5uZXIoJGJ1dHRvbik7XHJcbiAgICAgICAgICAgIFVzZXJDb252ZXJzYXRpb24uZ2V0TWV0YWRhdGFEZXRhaWxDb252ZXJzYXRpb24odG9rZW4sIHt1c2VybmFtZSwgY29udmVyc2F0aW9uSWQsIGN1cnNvcn0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlY2VpdmUgbXNnJywgcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIFNwaW5uZXIuc3RvcEJ1dHRvblNwaW5uZXIoJGJ1dHRvbik7XHJcbiAgICAgICAgICAgICAgICBmaWxsTGlzdCgkbXNnTGlzdCwgcmVzdWx0LmRhdGEubWV0YS5tZXNzYWdlcywgJ2FwcGVudFByZXZNc2cnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuLy8gbWVzc2FnZXMtdXNlci1saXN0XHJcbmZ1bmN0aW9uIGZpbGxVc2VyTGlzdCgkbGlzdCwgZGF0YUFycmF5KSB7XHJcbiAgICBjb25zdCBpdGVtcyA9IGRhdGFBcnJheS5tZXRhO1xyXG4gICAgY29uc3QgY0xpc3QgPSAkbGlzdDtcclxuICAgIGNvbnN0IGNvbnZlcnNhdGlvbkRldGFpbCA9IGZ1bmN0aW9uKGl0ZW1zKSB7XHJcbiAgICAgICAgbGV0IHRwbCA9ICcnO1xyXG4gICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgIHRwbCArPSBgPGltZyBzcmM9XCIke2l0ZW1bJ3Byb2ZpbGVfcGljX3VybCddfVwiIGNsYXNzPVwibWVkaWEtcGhvdG8gbXItMSBtZWRpYS1waG90by0tZ3JvdXBcIiBzdHlsZT1cIndpZHRoOiAyNHB4O1wiPmA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0cGwgKz0gYDxpbWcgc3JjPVwiJHtpdGVtWydwcm9maWxlX3BpY191cmwnXX1cIiBjbGFzcz1cIm1lZGlhLXBob3RvIG1yLTFcIiBzdHlsZT1cIndpZHRoOiAyNHB4O1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtpdGVtLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9oNT5gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgdHBsICs9ICc8aDUgY2xhc3M9XCJ0aXRsZVwiPtCT0YDRg9C/0L7QstC+0Lkg0YfQsNGCPC9oNT4nO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHBsO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGFkZENvbnZlcnNhdGlvbnMgPSBmdW5jdGlvbihjb252ZXJzYXRpb25zKSB7XHJcbiAgICAgICAgbGV0IHRwbCA9ICcnO1xyXG4gICAgICAgIGNvbnZlcnNhdGlvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICB0cGwgKz0gYDxkaXYgY2xhc3M9XCJtZWRpYSBwLTFcIiBkYXRhLWNvbnZlcnNhdGlvbi1pZD1cIiR7aXRlbS5pZH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAke2NvbnZlcnNhdGlvbkRldGFpbChpdGVtLnRvKX1cclxuICAgICAgICAgICAgICAgICAgICAkeyhpdGVtWydsYXN0X21lc3NhZ2UnXSAmJiAocGFyc2VJbnQoaXRlbVsnbGFzdF9tZXNzYWdlJ10ubGVuZ3RoLCAxMCkpID4gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBgPHAgY2xhc3M9XCJzdW1tYXJ5ICR7aXRlbVsnaXNfdW5yZWFkJ10gPyAnZm9udC13ZWlnaHQtYm9sZCcgOiAndGV4dC1tdXRlZCd9XCI+JHtpdGVtWydsYXN0X21lc3NhZ2UnXX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7aXRlbVsnaXNfdW5yZWFkJ10gPyAnPHNwYW4gY2xhc3M9XCJzdW1tYXJ5LWRvdFwiPjwvc3Bhbj4nIDogJyd9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0cGw7XHJcbiAgICB9O1xyXG4gICAgY0xpc3QuZW1wdHkoKS5hZGRDbGFzcygnYm9yZGVyLWxpZ2h0LWNvbG9yJyk7XHJcbiAgICAvLyB0b2RvOiBmaXggaGFyZC1jb2RlICBpbWcgc3JjPVwiaHR0cHM6Ly9pLmltZ3VyLmNvbS9qTk5UNExFLnBuZ1wiXHJcbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpZHgpID0+IHtcclxuICAgICAgICAkKGA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW1cIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjY29sbGFwc2UtJHtpZHh9XCIgZGF0YS11c2VybmFtZT1cIiR7aXRlbS51c2VybmFtZX1cIiBcclxuICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJ0cnVlXCIgYXJpYS1jb250cm9scz1cImNvbGxhcHNlLSR7aWR4fVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWFcIiBpZD1cImhlYWRpbmctJHtpZHh9XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibXItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pLmltZ3VyLmNvbS9qTk5UNExFLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtZWRpYS1waG90b1wiPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgJHsoaXRlbVsndW5yZWFkX2NvbnZlcnNhdGlvbnMnXSA+IDApID8gYDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2Utc2Vjb25kYXJ5IHBvc2l0aW9uLWFic29sdXRlIHAtMlwiPiR7aXRlbVsndW5yZWFkX2NvbnZlcnNhdGlvbnMnXX08L3NwYW4+YCA6ICcnfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke2l0ZW0udXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImNvbGxhcHNlLSR7aWR4fVwiIGNsYXNzPVwiY29sbGFwc2VcIiBhcmlhLWxhYmVsbGVkYnk9XCJoZWFkaW5nLSR7aWR4fVwiIGRhdGEtcGFyZW50PVwiI2FjY29yZGlvblwiPlxyXG4gICAgICAgICAgICAgICAgJHthZGRDb252ZXJzYXRpb25zKGl0ZW0uY29udmVyc2F0aW9ucywgaWR4KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+YCkuYXBwZW5kVG8oY0xpc3QpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFuZEZpbGxVc2VyTGlzdChpc0FjdGl2ZUZpcnN0KSB7XHJcbiAgICBjb25zdCAkdXNlckxpc3QgPSAkKCcubWVzc2FnZXMtdXNlci1saXN0Jyk7XHJcbiAgICBjb25zdCBtZXRhZGF0YSA9IFVzZXJDb252ZXJzYXRpb24uZ2V0TWV0YWRhdGEodG9rZW4pO1xyXG4gICAgbGV0IHByZXZBY3RpdmVEaWFsb2dJZCA9ICcnO1xyXG4gICAgaWYgKCFpc0FjdGl2ZUZpcnN0KSB7XHJcbiAgICAgICAgcHJldkFjdGl2ZURpYWxvZ0lkID0gJHVzZXJMaXN0LmZpbmQoJ2xpIC5jb2xsYXBzZS5zaG93JykuYXR0cignaWQnKTtcclxuICAgIH1cclxuICAgIG1ldGFkYXRhLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGlmICghcmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXN1bHQuZGF0YS5tZXRhLnNvcnQoKGEsIGIpID0+IGFbJ3VzZXJuYW1lJ10ubG9jYWxlQ29tcGFyZShiWyd1c2VybmFtZSddKSk7XHJcbiAgICAgICAgZmlsbFVzZXJMaXN0KCR1c2VyTGlzdCwgcmVzdWx0LmRhdGEpO1xyXG4gICAgICAgIGlmIChyZXN1bHQuZGF0YS5zZXR0aW5ncyAmJiByZXN1bHQuZGF0YS5zZXR0aW5ncy5pbnZva2VfaW5fbWlsbGlzKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZUludGVydmFsID0gcmVzdWx0LmRhdGEuc2V0dGluZ3MuaW52b2tlX2luX21pbGxpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzQWN0aXZlRmlyc3QpIHtcclxuICAgICAgICAgICAgJHVzZXJMaXN0LmZpbmQoJ2xpOmZpcnN0LWNoaWxkIC5jb2xsYXBzZScpLmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3R0dCcsIHByZXZBY3RpdmVEaWFsb2dJZCk7XHJcbiAgICAgICAgICAgICQoYCMke3ByZXZBY3RpdmVEaWFsb2dJZH1gKS5hZGRDbGFzcygnc2hvdycpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBbmRGaWxsQ29udmVyc2F0aW9uKHVzZXJuYW1lLCBjb252ZXJzYXRpb25JZCwgaXNTY3JvbGxEb3duKSB7XHJcbiAgICBVc2VyQ29udmVyc2F0aW9uLmdldE1ldGFkYXRhRGV0YWlsQ29udmVyc2F0aW9uKHRva2VuLCB7dXNlcm5hbWUsIGNvbnZlcnNhdGlvbklkfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgZmlsbExpc3QoJG1zZ0xpc3QsIHJlc3VsdC5kYXRhLm1ldGEubWVzc2FnZXMpO1xyXG4gICAgICAgIFNwaW5uZXIucmVtb3ZlKCk7XHJcbiAgICAgICAgJCgnLmpzX3NlbmQtbWVzc2FnZS1ib3gnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgJCgnLm1lc3NhZ2VzLWxpc3QnKS5hdHRyKCdkYXRhLWNvbnZlcnNhdGlvbicsIEpTT04uc3RyaW5naWZ5KHt1c2VybmFtZSwgY29udmVyc2F0aW9uSWR9KSk7XHJcblxyXG4gICAgICAgIGlmIChpc1Njcm9sbERvd24pIHtcclxuICAgICAgICAgICAgJG1zZ0xpc3QuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6ICRtc2dMaXN0WzBdLnNjcm9sbEhlaWdodCAtICRtc2dMaXN0WzBdLmNsaWVudEhlaWdodFxyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5kYXRhLm1ldGEucGFnaW5hdGlvbikge1xyXG4gICAgICAgICAgICAgICAgYWRkUGFnaW5hdGlvbigkbXNnTGlzdCwgcmVzdWx0LmRhdGEubWV0YS5wYWdpbmF0aW9uKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJy5tZXNzYWdlcy1saXN0LWJveCcpLmZpbmQoJy5sb2FkLW1vcmUnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRIYW5kbGVycygpIHtcclxuICAgIGxldCBjb252ZXJzYXRpb25JZCA9ICcnO1xyXG5cclxuICAgICQoJyNzZW5kTWVzc2FnZUJ1dHRvbicpLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgJHRleHRBcmVhID0gJCgnI3NlbmRNZXNzYWdlVGV4dEFyZWEnKTtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9ICR0ZXh0QXJlYS52YWwoKTtcclxuICAgICAgICBjb25zdCB1c2VyRGF0YSA9ICQoJy5tZXNzYWdlcy1saXN0JykuZGF0YSgnY29udmVyc2F0aW9uJyk7XHJcbiAgICAgICAgY29uc3Qge3VzZXJuYW1lLCBjb252ZXJzYXRpb25JZH0gPSB1c2VyRGF0YTtcclxuICAgICAgICBTcGlubmVyLmFkZCgkKGUudGFyZ2V0KSwgJ3NwaW5uZXItYm94LS1zZW5kTXNnJyk7XHJcbiAgICAgICAgVXNlckNvbnZlcnNhdGlvbi5wb3N0TWV0YWRhdGFEZXRhaWxDb252ZXJzYXRpb24odG9rZW4sIHt1c2VybmFtZSwgY29udmVyc2F0aW9uSWQsIHZhbHVlfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnN0YXR1cyAmJiByZXN1bHQuc3RhdHVzLnN0YXRlID09PSAnb2snKSB7XHJcbiAgICAgICAgICAgICAgICBnZXRBbmRGaWxsQ29udmVyc2F0aW9uKHVzZXJuYW1lLCBjb252ZXJzYXRpb25JZCk7XHJcbiAgICAgICAgICAgICAgICAkdGV4dEFyZWEudmFsKCcnKTtcclxuICAgICAgICAgICAgICAgIFNwaW5uZXIucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuUHViU3ViLnB1Ymxpc2goQ09OU1QuZXZlbnRzLm1lc3NhZ2VzLlJFQ0lFVkVfTkVXX01FU1NBR0UsIHt1c2VybmFtZSwgY29udmVyc2F0aW9uSWQsIHZhbHVlLCByZXN1bHR9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmxpc3QtZ3JvdXAtaXRlbSAuY29sbGFwc2UnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBjb25zdCB1c2VybmFtZSA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5saXN0LWdyb3VwLWl0ZW0nKS5kYXRhKCd1c2VybmFtZScpO1xyXG4gICAgICAgIGNvbnZlcnNhdGlvbklkID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLm1lZGlhJykuZGF0YSgnY29udmVyc2F0aW9uLWlkJyk7XHJcbiAgICAgICAgU3Bpbm5lci5hZGQoJCgnI21haW5DaGF0UGFydCcpLCAnbXktNSBweS01Jyk7XHJcbiAgICAgICAgZ2V0QW5kRmlsbENvbnZlcnNhdGlvbih1c2VybmFtZSwgY29udmVyc2F0aW9uSWQsICdpc1Njcm9sbERvd24nKTtcclxuICAgICAgICB1cGRhdGVJbnRlcnZhbCA9ICh1cGRhdGVJbnRlcnZhbCA+IDYwMDApID8gdXBkYXRlSW50ZXJ2YWwgOiAxNTAwMDtcclxuICAgICAgICAvLyByZXNlbmQgcmVxdWVzdFxyXG4gICAgICAgIGlmIChpbnRlcnZhbElkKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnZlcnNhdGlvbklkID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLm1lZGlhJykuZGF0YSgnY29udmVyc2F0aW9uLWlkJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGludGVydmFsSWQsIGNvbnZlcnNhdGlvbklkKTtcclxuICAgICAgICAgICAgZ2V0QW5kRmlsbENvbnZlcnNhdGlvbih1c2VybmFtZSwgY29udmVyc2F0aW9uSWQpO1xyXG4gICAgICAgICAgICBnZXRBbmRGaWxsVXNlckxpc3QoKTtcclxuICAgICAgICB9LCB1cGRhdGVJbnRlcnZhbCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB3aW5kb3cuUHViU3ViLnN1YnNjcmliZShDT05TVC5ldmVudHMubWVzc2FnZXMuUkVDSUVWRV9ORVdfTUVTU0FHRSwgKGV2ZW50TmFtZSwgZGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHt1c2VybmFtZSwgY29udmVyc2F0aW9uSWQsIHZhbHVlLCByZXN1bHRGcm9tU2VydmVyfSA9IGRhdGE7XHJcbiAgICAgICAgY29uc3QgJGRpYWxvZyA9ICQoYC5tZXNzYWdlcy11c2VyLWxpc3QgLmxpc3QtZ3JvdXAtaXRlbVtkYXRhLXVzZXJuYW1lPVwiJHt1c2VybmFtZX1cIl0gZGl2W2RhdGEtY29udmVyc2F0aW9uLWlkPVwiJHtjb252ZXJzYXRpb25JZH1cIl1gKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2V0IHZhbCBmcm9tIHRleHQtYXJlYScsIHZhbHVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZygncmVzdWx0RnJvbVNlcnZlcjogJywgcmVzdWx0RnJvbVNlcnZlcik7XHJcbiAgICAgICAgJGRpYWxvZy5maW5kKCcuc3VtbWFyeScpLnRleHQodmFsdWUpO1xyXG5cclxuICAgICAgICAvLyBtZXRhZGF0YS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAvLyAgICAgZmlsbFVzZXJMaXN0KCR1c2VyTGlzdCwgcmVzdWx0LmRhdGEpO1xyXG4gICAgICAgIC8vICAgICBpZiAocmVzdWx0LmRhdGEuc2V0dGluZ3MgJiYgcmVzdWx0LmRhdGEuc2V0dGluZ3MuaW52b2tlX2luX21pbGxpcykge1xyXG4gICAgICAgIC8vICAgICAgICAgdXBkYXRlSW50ZXJ2YWwgPSByZXN1bHQuZGF0YS5zZXR0aW5ncy5pbnZva2VfaW5fbWlsbGlzO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAvLyBjaGVjayB3ZSBhcmUgaW4gY29ycmVjdCBwYWdlIChtZXNzYWdlcylcclxuICAgIGlmICghaXNJbk1lc3NhZ2VQYWdlKCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QW5kRmlsbFVzZXJMaXN0KCdzZXRBY3RpdmVGaXJzdCcpO1xyXG4gICAgYWRkSGFuZGxlcnMoKTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL21lc3NhZ2VzL21lc3NhZ2VzLmpzIiwiLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IFB1YlN1YiBmcm9tICdwdWJzdWItanMnOyAvLyBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9wdWJzdWItanNcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3VzZXInO1xyXG5pbXBvcnQgY29va2llU3RvcmFnZSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29va2llJztcclxuaW1wb3J0IHtDT05TVH0gZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2NvbnN0cyc7XHJcbmltcG9ydCB2aWV3VXRpbHMgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3ZpZXcnO1xyXG5cclxuY29uc3Qgc2VsZWN0b3JDbHMgPSB7XHJcbiAgICBmb3JtOiAnLmF1dGgucmVnaXN0ZXIgLmZvcm0tc2lnbmluJyxcclxuICAgIHN1Ym1pdEJ0bjogJ1t0eXBlPVwic3VibWl0XCJdJ1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWdpc3RlckZvcm0ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy51c2VyID0gVXNlcjtcclxuICAgICAgICB0aGlzLiRmb3JtID0gJChzZWxlY3RvckNscy5mb3JtKTtcclxuICAgICAgICB0aGlzLiRlbWFpbCA9IHRoaXMuJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cIm1haWxcIl0nKTtcclxuICAgICAgICB0aGlzLiR0ZXh0QXJlYURlc2NyaXB0aW9uID0gJCgnI2Rlc2NyaXB0aW9uJyk7XHJcbiAgICAgICAgdGhpcy5mb3JtRGF0YSA9IHsnZW1haWwnOiAndGVzdDFfZW1haWxAbS5ydScsICdwYXNzd29yZCc6ICdwYXNzd29yZCd9O1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgaWYgKCQoJy5hdXRoLnJlZ2lzdGVyJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdWJtaXRGb3JtKGZvcm1EYXRhT2JqKSB7XHJcbiAgICAgICAgY29uc3QgZW1haWwgPSB0aGlzLiRlbWFpbC52YWwoKTtcclxuICAgICAgICBjb25zdCAkcGFzc3dvcmQgPSB0aGlzLiRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJwYXNzXCJdJyksXHJcbiAgICAgICAgICAgICRwYXNzd29yZENvbmZpcm0gPSB0aGlzLiRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJwYXNzLWNvbmZpcm1cIl0nKSxcclxuICAgICAgICAgICAgcGFzc3dvcmQgPSB0aGlzLiRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJwYXNzXCJdJykudmFsKCksXHJcbiAgICAgICAgICAgIHBhc3N3b3JkQ29uZmlybSA9IHRoaXMuJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cInBhc3MtY29uZmlybVwiXScpLnZhbCgpO1xyXG5cclxuICAgICAgICBpZiAocGFzc3dvcmRDb25maXJtICE9PSBwYXNzd29yZCkge1xyXG4gICAgICAgICAgICAkcGFzc3dvcmQuYWRkQ2xhc3MoJ2lucHV0LWVycm9yJyk7XHJcbiAgICAgICAgICAgICRwYXNzd29yZENvbmZpcm0uYWRkQ2xhc3MoJ2lucHV0LWVycm9yJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy4kZW1haWwudmFsKHRoaXMuJGVtYWlsLnZhbCgpLnRvTG9jYWxlTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgIHRoaXMuZm9ybURhdGEgPSBmb3JtRGF0YU9iaiB8fCB7ZW1haWwsIHBhc3N3b3JkfTtcclxuXHJcbiAgICAgICAgdGhpcy51c2VyLnJlZ2lzdGVyKHRoaXMuZm9ybURhdGEpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZGF0YSAmJiByZXN1bHQuZGF0YS50b2tlbikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBzYXZlIHRoZSBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgY29va2llU3RvcmFnZS5zZXQoQ09OU1QuY29va2llU3RvcmFnZS5lbWFpbENvbmZpcm1lZCwgJ2ZhbHNlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvb2tpZVN0b3JhZ2Uuc2V0KENPTlNULmNvb2tpZVN0b3JhZ2UudG9rZW4sIHJlc3VsdC5kYXRhLnRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmVxdWVzdCBzdWNjZWVkZWQgd2l0aCBKU09OIHJlc3BvbnNlJywgcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICBQdWJTdWIucHVibGlzaChDT05TVC5ldmVudHMuVVNFUl9MT0dHRUQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UodGhpcy4kdGV4dEFyZWFEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5tZXNzYWdlIHx8ICdSZWdpc3RlciBhbmQgTG9naW4gc3VjY3Nlc3MnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSh0aGlzLiR0ZXh0QXJlYURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLm1lc3NhZ2UgfHwgJ25vIHJlc3VsdC5kYXRhIGZvdW5kJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKHRoaXMuJHRleHRBcmVhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMuc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5sb2dpbi1ib3gnKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlcXVlc3QgZmFpbGVkJywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSh0aGlzLiR0ZXh0QXJlYURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RvIHNvbWV0aGluZycpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG4gICAgICAgIGNvbnN0IHJlZ2lzdGVyQm94ID0gQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyUmVnQm94OyAvLyAnbmF2IC5yZWdpc3Rlci1ib3gnO1xyXG4gICAgICAgIGNvbnN0IG9wZW5lZENsYXNzID0gJ2QtYmxvY2snO1xyXG4gICAgICAgIGNvbnN0IGNsb3NlQ2xhc3MgPSAnZC1ub25lJztcclxuICAgICAgICBjb25zdCAkYnRuID0gJChzZWxlY3RvckNscy5zdWJtaXRCdG4pLFxyXG4gICAgICAgICAgICBjc3NWYWxpZGF0aW9uQ2xhc3MgPSAnZm9ybS12YWxpZGF0aW9uJztcclxuXHJcbiAgICAgICAgJGJ0bi5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBmb3JtID0gdGhpcy4kZm9ybS5nZXQoMCk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghJGJ0bi5pcygnOmRpc2FibGVkJykpIHtcclxuICAgICAgICAgICAgICAgIGlmIChmb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICRidG4uYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdEZvcm0oKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSGlnaGxpZ2h0IGVycm9yc1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmb3JtLnJlcG9ydFZhbGlkaXR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0ucmVwb3J0VmFsaWRpdHkoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZm9ybS5hZGRDbGFzcyhjc3NWYWxpZGF0aW9uQ2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpc1JlZ0J0bkNsaWNrID0gJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJ25hdi5uYXZiYXInKS5maW5kKCcucmVnaXN0ZXItYm94JykubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFpc1JlZ0J0bkNsaWNrICYmICQocmVnaXN0ZXJCb3gpLmhhc0NsYXNzKG9wZW5lZENsYXNzKSkge1xyXG4gICAgICAgICAgICAgICAgJChyZWdpc3RlckJveCkuYWRkQ2xhc3MoY2xvc2VDbGFzcykucmVtb3ZlQ2xhc3Mob3BlbmVkQ2xhc3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9yZWdpc3Rlci1mb3JtL3JlZ2lzdGVyLWZvcm0uanMiLCIvLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQge0NPTlNUfSBmcm9tICcuL2NvbnN0cyc7XHJcbmltcG9ydCBOZXR3b3JrIGZyb20gJy4vbmV0d29yayc7XHJcbmltcG9ydCBDb29raWVTdG9yYWdlIGZyb20gJy4vY29va2llJztcclxuXHJcbmNsYXNzIFVzZXJDb252ZXJzYXRpb24ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubmV0d29yayA9IG5ldyBOZXR3b3JrKCk7XHJcbiAgICAgICAgdGhpcy5jb29raWVTdG9yYWdlID0gQ29va2llU3RvcmFnZTtcclxuICAgICAgICB0aGlzLnNldHRpbmdQb3N0ID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgaXNMb2dnZWRJbigpIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLmdldFRva2VuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNFbWFpbENvbmZpcm1lZCgpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuY29va2llU3RvcmFnZS5nZXQoQ09OU1QuY29va2llU3RvcmFnZS5lbWFpbENvbmZpcm1lZCkgPT09ICdjb25maXJtZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUb2tlbigpIHtcclxuICAgICAgICBjb25zdCBjb29raWVUb2tlbiA9IHRoaXMuY29va2llU3RvcmFnZS5nZXQoQ09OU1QuY29va2llU3RvcmFnZS50b2tlbik7XHJcbiAgICAgICAgcmV0dXJuIGNvb2tpZVRva2VuO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1ldGFkYXRhKHRva2VuLCBjYkVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChgJHtDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1EaXJlY3RfZ2V0TWV0YURhdGEnKX1gLCB7aGVhZGVyczoge3Rva2VufX0sIGNiRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1ldGFkYXRhRGV0YWlsQ29udmVyc2F0aW9uKHRva2VuLCBkZXRhaWxzLCBjYkVycm9yKSB7XHJcbiAgICAgICAgY29uc3QgY3Vyc29yID0gKGRldGFpbHMuY3Vyc29yKSA/IGA/Y3Vyc29yPSR7ZGV0YWlscy5jdXJzb3J9YCA6ICcnO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QoYCR7Q09OU1QuZ2V0UGF0aCgnaW5zdGFncmFtRGlyZWN0X2dldE1ldGFEYXRhJyl9LyR7ZGV0YWlscy51c2VybmFtZX0vJHtkZXRhaWxzLmNvbnZlcnNhdGlvbklkfSR7Y3Vyc29yfWAsXHJcbiAgICAgICAgICAgIHtoZWFkZXJzOiB7dG9rZW59fSwgY2JFcnJvcik7XHJcbiAgICB9XHJcbiAgICBwb3N0TWV0YWRhdGFEZXRhaWxDb252ZXJzYXRpb24odG9rZW4sIGRldGFpbHMsIGNiRXJyb3IpIHtcclxuICAgICAgICBjb25zdCBzZXR0aW5nID0ge1xyXG4gICAgICAgICAgICAuLi50aGlzLnNldHRpbmdQb3N0LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7J3ZhbHVlJzogZGV0YWlscy52YWx1ZX0pLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnNldHRpbmdQb3N0LmhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICAndG9rZW4nOiB0aGlzLmdldFRva2VuKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChgJHtDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1EaXJlY3RfcG9zdE1lc3NhZ2UnKX0vJHtkZXRhaWxzLnVzZXJuYW1lfS8ke2RldGFpbHMuY29udmVyc2F0aW9uSWR9L3RleHRgLFxyXG4gICAgICAgICAgICBzZXR0aW5nLCBjYkVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGb3JtYXR0ZWREYXRlVXRpbCh0U3RhbXAsIHNob3dGdWxsVGltZSkge1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0U3RhbXApO1xyXG5cclxuICAgICAgICBsZXQgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xyXG4gICAgICAgIGxldCBkYXkgPSBkYXRlLmdldERhdGUoKTtcclxuICAgICAgICBsZXQgaG91ciA9IGRhdGUuZ2V0SG91cnMoKTtcclxuICAgICAgICBsZXQgbWluID0gZGF0ZS5nZXRNaW51dGVzKCk7XHJcbiAgICAgICAgbGV0IHNlYyA9IGRhdGUuZ2V0U2Vjb25kcygpO1xyXG5cclxuICAgICAgICBtb250aCA9IChtb250aCA8IDEwID8gJzAnIDogJycpICsgbW9udGg7XHJcbiAgICAgICAgZGF5ID0gKGRheSA8IDEwID8gJzAnIDogJycpICsgZGF5O1xyXG4gICAgICAgIGhvdXIgPSAoaG91ciA8IDEwID8gJzAnIDogJycpICsgaG91cjtcclxuICAgICAgICBtaW4gPSAobWluIDwgMTAgPyAnMCcgOiAnJykgKyBtaW47XHJcbiAgICAgICAgc2VjID0gKHNlYyA8IDEwID8gJzAnIDogJycpICsgc2VjO1xyXG5cclxuICAgICAgICBsZXQgc3RyID0gJyc7XHJcbiAgICAgICAgaWYgKCFzaG93RnVsbFRpbWUpIHtcclxuICAgICAgICAgICAgc3RyID0gYCR7aG91cn06JHttaW59YDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzdHIgPSBgJHtkYXRlLmdldEZ1bGxZZWFyKCl9LSR7bW9udGh9LSR7ZGF5fV8ke2hvdXJ9OiR7bWlufToke3NlY31gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHN0cjtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmxldCB1c2VySW5zdGFuY2UgPSBudWxsO1xyXG5cclxuaWYgKCF1c2VySW5zdGFuY2UpIHtcclxuICAgIHVzZXJJbnN0YW5jZSA9IG5ldyBVc2VyQ29udmVyc2F0aW9uKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJJbnN0YW5jZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy9hcGktdXNlci1kaXJlY3QuanMiLCIvLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG4vLyBpbXBvcnQge0NPTlNUfSBmcm9tICcuL2NvbnN0cyc7XHJcbi8vIGltcG9ydCBOZXR3b3JrIGZyb20gJy4vbmV0d29yayc7XHJcbi8vIGltcG9ydCBDb29raWVTdG9yYWdlIGZyb20gJy4vY29va2llJztcclxuLy8gaW1wb3J0IFB1YlN1YiBmcm9tICdwdWJzdWItanMnOyAvLyBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9wdWJzdWItanNcclxuXHJcbi8vIGNvbnN0IFNQSU5ORVJfQkFTRV9URU1QQUxBVEUgPSAnanMvdWkvdHBsL3NwaW5uZXIuaGJzJztcclxuY29uc3QgY2xhc3NlcyA9IHtcclxuICAgIGlubGluZTogJ2dsb2JhbC1pbmxpbmUtc3Bpbm5lcicsXHJcbiAgICBvdmVybGF5OiAnZ2xvYmFsLW92ZXJsYXktc3Bpbm5lcicsXHJcbiAgICBmaXhlZDogJ2dsb2JhbC1maXhlZC1zcGlubmVyJyxcclxuICAgIGJ1dHRvbjogJ2J1dHRvbi0tbG9hZCdcclxufTtcclxuLy8gY29uc3QgaGFuZGxlYmFyc1RwbCA9IGZ1bmN0aW9uIChuYW1lLCBkYXRhLCAkdGFyZ2V0KSB7XHJcbi8vICAgICAvLyB2YXIgaHRtbCA9IHRoaXMuZ2V0VGVtcGxhdGUobmFtZSkoZGF0YSk7XHJcbi8vICAgICB2YXIgaHRtbCA9IEhhbmRsZWJhcnMuY29tcGlsZSh0ZW1wbGF0ZSk7XHJcbi8vXHJcbi8vICAgICBpZiAoJHRhcmdldCkge1xyXG4vLyAgICAgICAgIC8vZm9yIHByZXZlbnRpbmcgeHNzXHJcbi8vICAgICAgICAgJHRhcmdldFswXS5pbm5lckhUTUwgPSBodG1sO1xyXG4vLyAgICAgfVxyXG4vL1xyXG4vLyAgICAgcmV0dXJuIGh0bWw7XHJcbi8vIH07XHJcbi8vIGNvbnN0IGhhbmRsZWJhcnMgPSB0aGlzLmdldFNlcnZpY2UoJ2NvcmUudGVtcGxhdGluZy5oYW5kbGViYXJzJyk7XHJcblxyXG5jbGFzcyBTcGlubmVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihfY2ZnKSB7XHJcbiAgICAgICAgdGhpcy5jZmcgPSBfY2ZnIHx8IHt9O1xyXG4gICAgICAgIC8vIHRoaXMuJGRlZmF1bHRDb250YWluZXIgPSAkKCdib2R5Jyk7XHJcbiAgICAgICAgJC5leHRlbmQoY2xhc3NlcywgdGhpcy5jZmcuY2xhc3Nlcyk7XHJcbiAgICAgICAgLy8gdGhpcy5fbWVkaWF0b3Iuc3Vic2NyaWJlKENPTlNULmV2ZW50cy5TVE9QX0ZJWEVEX1NQSU5ORVIsIHRoaXMuc3RvcEZpeGVkU3Bpbm5lci5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuICAgIC8vIF9tZWRpYXRvciA9IFB1YlN1YjtcclxuXHJcbiAgICBzdGFydCgkZWwsIHByZXdDbHMpIHtcclxuICAgICAgICAvLyBpZiAoYWRkT3JSZW1vdmUpIHtcclxuICAgICAgICAvLyAgICAgJCgnI2ZvbycpLmFkZENsYXNzKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAkKCcjZm9vJykucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgJGVsLmZpbmQoJ2knKS50b2dnbGVDbGFzcyhwcmV3Q2xzKS5hZGRDbGFzcygnZmEtc3BpbiBmYS1zcGlubmVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcCgkZWwsIG5ld0Nscykge1xyXG4gICAgICAgICRlbC5maW5kKCdpJykudG9nZ2xlQ2xhc3MobmV3Q2xzKS5yZW1vdmVDbGFzcygnZmEtc3BpbiBmYS1zcGlubmVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkKCRlbCwgbmV3Q2xzKSB7XHJcbiAgICAgICAgdGhpcy4kZWwgPSAkZWw7XHJcbiAgICAgICAgJGVsLnByZXBlbmQoYDxkaXYgY2xhc3M9XCJzcGlubmVyLWJveCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyICR7bmV3Q2xzfVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3Bpbi1hbmltYXRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZGF0YS1wcmVmaXg9XCJmYXJcIiBkYXRhLWljb249XCJzeW5jLWFsdFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgY2xhc3M9XCJzdmctaW5saW5lLS1mYSBmYS1zeW5jLWFsdCBmYS13LTE2IGZhLWZ3IGZhLTJ4XCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDgzLjUxNSAyOC40ODVMNDMxLjM1IDgwLjY1QzM4Ni40NzUgMzUuNzY3IDMyNC40ODUgOCAyNTYgOCAxMjMuMjI4IDggMTQuODI0IDExMi4zMzggOC4zMSAyNDMuNDkzIDcuOTcxIDI1MC4zMTEgMTMuNDc1IDI1NiAyMC4zMDEgMjU2aDI4LjA0NWM2LjM1MyAwIDExLjYxMy00Ljk1MiAxMS45NzMtMTEuMjk0QzY2LjE2MSAxNDEuNjQ5IDE1MS40NTMgNjAgMjU2IDYwYzU0LjE2MyAwIDEwMy4xNTcgMjEuOTIzIDEzOC42MTQgNTcuMzg2bC01NC4xMjggNTQuMTI5Yy03LjU2IDcuNTYtMi4yMDYgMjAuNDg1IDguNDg1IDIwLjQ4NUg0OTJjNi42MjcgMCAxMi01LjM3MyAxMi0xMlYzNi45NzFjMC0xMC42OTEtMTIuOTI2LTE2LjA0NS0yMC40ODUtOC40ODZ6TTQ5MS42OTkgMjU2aC0yOC4wNDVjLTYuMzUzIDAtMTEuNjEzIDQuOTUyLTExLjk3MyAxMS4yOTRDNDQ1LjgzOSAzNzAuMzUxIDM2MC41NDcgNDUyIDI1NiA0NTJjLTU0LjE2MyAwLTEwMy4xNTctMjEuOTIzLTEzOC42MTQtNTcuMzg2bDU0LjEyOC01NC4xMjljNy41Ni03LjU2IDIuMjA2LTIwLjQ4NS04LjQ4NS0yMC40ODVIMjBjLTYuNjI3IDAtMTIgNS4zNzMtMTIgMTJ2MTQzLjAyOWMwIDEwLjY5MSAxMi45MjYgMTYuMDQ1IDIwLjQ4NSA4LjQ4NUw4MC42NSA0MzEuMzVDMTI1LjUyNSA0NzYuMjMzIDE4Ny41MTYgNTA0IDI1NiA1MDRjMTMyLjc3MyAwIDI0MS4xNzYtMTA0LjMzOCAyNDcuNjktMjM1LjQ5My4zMzktNi44MTgtNS4xNjUtMTIuNTA3LTExLjk5MS0xMi41MDd6XCIgY2xhc3M9XCJcIj48L3BhdGg+PC9zdmc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PmApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZSgpIHtcclxuICAgICAgICB0aGlzLiRlbC5maW5kKCcuc3Bpbm5lci1ib3gnKS5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgc3Bpbm5lciBpY29uIG9uIGJ1dHRvbiBiZWZvcmUgdGhlIGJ1dHRvbiB0ZXh0XHJcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJGVsXHJcbiAgICAgKi9cclxuICAgIHN0YXJ0QnV0dG9uU3Bpbm5lciA9IGZ1bmN0aW9uICgkZWwsIG5ld0Nscykge1xyXG4gICAgICAgICRlbC5hZGRDbGFzcyhjbGFzc2VzLmJ1dHRvbik7XHJcbiAgICAgICAgJGVsLnByZXBlbmQoYDxkaXYgY2xhc3M9XCJzcGlubmVyLWJveCBzcGlubmVyLWJveC0tYnV0dG9uIGp1c3RpZnktY29udGVudC1jZW50ZXIgcG9zaXRpb24tcmVsYXRpdmUgcC0wIG0tMCBiZy10cmFuc3BhcmVudCAke25ld0Nsc31cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwaW4tYW5pbWF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGRhdGEtcHJlZml4PVwiZmFyXCIgZGF0YS1pY29uPVwic3luYy1hbHRcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmEtZndcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk00ODMuNTE1IDI4LjQ4NUw0MzEuMzUgODAuNjVDMzg2LjQ3NSAzNS43NjcgMzI0LjQ4NSA4IDI1NiA4IDEyMy4yMjggOCAxNC44MjQgMTEyLjMzOCA4LjMxIDI0My40OTMgNy45NzEgMjUwLjMxMSAxMy40NzUgMjU2IDIwLjMwMSAyNTZoMjguMDQ1YzYuMzUzIDAgMTEuNjEzLTQuOTUyIDExLjk3My0xMS4yOTRDNjYuMTYxIDE0MS42NDkgMTUxLjQ1MyA2MCAyNTYgNjBjNTQuMTYzIDAgMTAzLjE1NyAyMS45MjMgMTM4LjYxNCA1Ny4zODZsLTU0LjEyOCA1NC4xMjljLTcuNTYgNy41Ni0yLjIwNiAyMC40ODUgOC40ODUgMjAuNDg1SDQ5MmM2LjYyNyAwIDEyLTUuMzczIDEyLTEyVjM2Ljk3MWMwLTEwLjY5MS0xMi45MjYtMTYuMDQ1LTIwLjQ4NS04LjQ4NnpNNDkxLjY5OSAyNTZoLTI4LjA0NWMtNi4zNTMgMC0xMS42MTMgNC45NTItMTEuOTczIDExLjI5NEM0NDUuODM5IDM3MC4zNTEgMzYwLjU0NyA0NTIgMjU2IDQ1MmMtNTQuMTYzIDAtMTAzLjE1Ny0yMS45MjMtMTM4LjYxNC01Ny4zODZsNTQuMTI4LTU0LjEyOWM3LjU2LTcuNTYgMi4yMDYtMjAuNDg1LTguNDg1LTIwLjQ4NUgyMGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnYxNDMuMDI5YzAgMTAuNjkxIDEyLjkyNiAxNi4wNDUgMjAuNDg1IDguNDg1TDgwLjY1IDQzMS4zNUMxMjUuNTI1IDQ3Ni4yMzMgMTg3LjUxNiA1MDQgMjU2IDUwNGMxMzIuNzczIDAgMjQxLjE3Ni0xMDQuMzM4IDI0Ny42OS0yMzUuNDkzLjMzOS02LjgxOC01LjE2NS0xMi41MDctMTEuOTkxLTEyLjUwN3pcIiBjbGFzcz1cIlwiPjwvcGF0aD48L3N2Zz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+YCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIHNwaW5uZXIgaWNvbiBmcm9tIGJ1dHRvblxyXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRlbFxyXG4gICAgICovXHJcbiAgICBzdG9wQnV0dG9uU3Bpbm5lciA9IGZ1bmN0aW9uICgkZWwpIHtcclxuICAgICAgICAkZWwucmVtb3ZlQ2xhc3MoY2xhc3Nlcy5idXR0b24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmluZHMgc3Bpbm5lcnNcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gJGNvbnRhaW5lclxyXG4gICAgICogQHJldHVybiB7P2pRdWVyeX0gc3Bpbm5lcnNcclxuICAgICAqL1xyXG4gICAgLy8gX2ZpbmRTcGlubmVyID0gZnVuY3Rpb24gKHR5cGUsICRjb250YWluZXIpIHtcclxuICAgIC8vICAgICBjb25zdCBzZWxlY3RvciA9ICcuJyArIHR5cGU7XHJcbiAgICAvLyAgICAgbGV0ICRlbCA9IHRoaXMuJGRlZmF1bHRDb250YWluZXI7XHJcbiAgICAvLyAgICAgaWYgKCRjb250YWluZXIpIHtcclxuICAgIC8vICAgICAgICAgJGVsID0gJGNvbnRhaW5lcjtcclxuICAgIC8vICAgICB9XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIGlmICgkZWwuZmluZChzZWxlY3RvcikubGVuZ3RoID4gMCkge1xyXG4gICAgLy8gICAgICAgICByZXR1cm4gJGVsLmZpbmQoc2VsZWN0b3IpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9ICRlbFxyXG4gICAgICovXHJcbiAgICAvKlxyXG4gICAgc3RhcnRDb250ZW50U3Bpbm5lciA9IGZ1bmN0aW9uICgkZWwpIHtcclxuICAgICAgICBjb25zdCBodG1sID0gaGFuZGxlYmFyc1RwbChcclxuICAgICAgICAgICAgU1BJTk5FUl9CQVNFX1RFTVBBTEFURSwge1xyXG4gICAgICAgICAgICAgICAgaW1nU3JjOiBDVEMuVVJMUy5XQUlUSU5HX0lNQUdFLFxyXG4gICAgICAgICAgICAgICAgJ2NsYXNzJzogY2xhc3Nlcy5vdmVybGF5XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICRlbC5wcmVwZW5kKGh0bWwpO1xyXG4gICAgfTtcclxuXHJcbiAgICBzdGFydElubGluZUNvbnRlbnRTcGlubmVyID0gZnVuY3Rpb24gKCRlbCkge1xyXG4gICAgICAgIGNvbnN0IGh0bWwgPSBoYW5kbGViYXJzVHBsKFxyXG4gICAgICAgICAgICBTUElOTkVSX0JBU0VfVEVNUEFMQVRFLCB7XHJcbiAgICAgICAgICAgICAgICBpbWdTcmM6IENUQy5VUkxTLldBSVRJTkdfSU1BR0UsXHJcbiAgICAgICAgICAgICAgICAnY2xhc3MnOiBjbGFzc2VzLmlubGluZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAkZWwucHJlcGVuZChodG1sKTtcclxuICAgIH07XHJcbiAgICAqL1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RhcnRzIGdsb2JhbCBmdWxsIHBhZ2UgZml4ZWQgc3Bpbm5lclxyXG4gICAgICovXHJcbiAgICAvKlxyXG4gICAgc3RhcnRGaXhlZFNwaW5uZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3Qgc3Bpbm5lcnMgPSB0aGlzLl9maW5kU3Bpbm5lcihjbGFzc2VzLmZpeGVkKTtcclxuICAgICAgICBpZiAoIShDVEMuaXNFZGl0KCkgfHwgQ1RDLmlzRGVzaWduKCkpICYmICFzcGlubmVycykge1xyXG4gICAgICAgICAgICBjb25zdCBodG1sID0gaGFuZGxlYmFyc1RwbChcclxuICAgICAgICAgICAgICAgIFNQSU5ORVJfQkFTRV9URU1QQUxBVEUsIHtcclxuICAgICAgICAgICAgICAgICAgICBpbWdTcmM6IENUQy5VUkxTLldBSVRJTkdfSU1BR0UsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogY2xhc3Nlcy5maXhlZFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuJGRlZmF1bHRDb250YWluZXIucHJlcGVuZChodG1sKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgKi9cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0b3BzIHNwaW5uZXJzXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9ICRjb250YWluZXJcclxuICAgICAqL1xyXG4gICAgLy8gX3N0b3BTcGlubmVyID0gZnVuY3Rpb24gKHR5cGUsICRjb250YWluZXIpIHtcclxuICAgIC8vICAgICBjb25zdCBzcGlubmVycyA9IHRoaXMuX2ZpbmRTcGlubmVyKHR5cGUsICRjb250YWluZXIpO1xyXG4gICAgLy8gICAgIGlmIChzcGlubmVycykge1xyXG4gICAgLy8gICAgICAgICBzcGlubmVycy5yZW1vdmUoKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAkZWxcclxuICAgICAqL1xyXG4gICAgLy8gc3RvcENvbnRlbnRTcGlubmVyID0gZnVuY3Rpb24gKCRlbCkge1xyXG4gICAgLy8gICAgICRlbC5maW5kKCcuJyArIGNsYXNzZXMub3ZlcmxheSkucmVtb3ZlKCk7XHJcbiAgICAvLyB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAkZWxcclxuICAgICAqL1xyXG4gICAgLy8gc3RvcElubGluZUNvbnRlbnRTcGlubmVyID0gZnVuY3Rpb24gKCRlbCkge1xyXG4gICAgLy8gICAgICRlbC5maW5kKCcuJyArIGNsYXNzZXMuaW5saW5lKS5yZW1vdmUoKTtcclxuICAgIC8vIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9wcyBnbG9iYWwgZnVsbCBwYWdlIGZpeGVkIHNwaW5uZXJcclxuICAgICAqL1xyXG4gICAgLy8gc3RvcEZpeGVkU3Bpbm5lciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICAgICB0aGlzLl9zdG9wU3Bpbm5lcihjbGFzc2VzLmZpeGVkKTtcclxuICAgIC8vIH07XHJcbn1cclxuXHJcbmxldCBzcGlubmVySW5zdGFuY2UgPSBudWxsO1xyXG5cclxuaWYgKCFzcGlubmVySW5zdGFuY2UpIHtcclxuICAgIHNwaW5uZXJJbnN0YW5jZSA9IG5ldyBTcGlubmVyKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNwaW5uZXJJbnN0YW5jZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy9zcGlubmVyLmpzIiwiLyogZXNsaW50LWRpc2FibGUgc29ydC12YXJzICovXHJcbi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy91c2VyJztcclxuaW1wb3J0IFB1YlN1YiBmcm9tICdwdWJzdWItanMnOyAvLyBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9wdWJzdWItanNcclxuaW1wb3J0IGNvb2tpZVN0b3JhZ2UgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2Nvb2tpZSc7XHJcbi8vIGltcG9ydCBWYWxpZGF0b3IgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2Zvcm0tdmFsaWRhdG9yJztcclxuaW1wb3J0IHZpZXdVdGlscyBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdmlldyc7XHJcbmltcG9ydCB7Q09OU1R9IGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMnO1xyXG5cclxuLy8gd2luZG93LiQgPSAkO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExvZ2luUGFnZShzZWxlY3RvckNzcykge1xyXG4gICAgY29uc3Qge19mb3JtSWQsIF9idXR0b25TdWJtaXRJZCwgX2xvZ2luQm94fSA9IHNlbGVjdG9yQ3NzO1xyXG4gICAgY29uc3QgdXNlciA9IFVzZXIsIC8vIHNlcnZpY2VcclxuICAgICAgICAkZm9ybSA9ICQoX2Zvcm1JZCksXHJcbiAgICAgICAgJGVtYWlsID0gJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cIm1haWxcIl0nKSxcclxuICAgICAgICAkdGV4dEFyZWFEZXNjcmlwdGlvbiA9ICQoJyNkZXNjcmlwdGlvbicpO1xyXG4gICAgLy8gY29uc3Qgb3BlbmVkQ2xhc3MgPSAnZC1ibG9jayc7XHJcbiAgICAvLyBjb25zdCBjbG9zZUNsYXNzID0gJ2Qtbm9uZSc7XHJcblxyXG4gICAgY29uc3QgdXNlckxvZ2luSGVhZGVyID0gKF9mb3JtRGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNiRXJyb3IgPSAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICQoX2xvZ2luQm94KS5hcHBlbmQoJzxwPnJlc3VsdC5zdGF0dXMubWVzc2FnZTwvcD4nKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gdXNlci5sb2dpbihfZm9ybURhdGEsIGNiRXJyb3IpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LmRhdGEgJiYgcmVzdWx0LmRhdGEudG9rZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzYXZlIHRoZSBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgY29va2llU3RvcmFnZS5zZXQoQ09OU1QuY29va2llU3RvcmFnZS50b2tlbiwgcmVzdWx0LmRhdGEudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5uYXYtbGluay5qc19sb2dPdXQnKS5wYXJlbnQoKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3JlcXVlc3Qgc3VjY2VlZGVkIHdpdGggSlNPTiByZXNwb25zZScsIHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSgkdGV4dEFyZWFEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5tZXNzYWdlIHx8ICdMb2dpbiBzdWNjc2VzcycpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKHRoaXMuJHRleHRBcmVhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGA8cD5zdGF0dXM6ICR7cmVzdWx0LnN0YXR1cy5zdGF0ZX08L3A+PHA+IG1lc3NhZ2U6ICR7cmVzdWx0LnN0YXR1cy5tZXNzYWdlfTwvcD5gKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UoJHRleHRBcmVhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMubWVzc2FnZSB8fCAnTG9naW4gZXJyb3InKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHN1Ym1pdEZvcm0gPSBmdW5jdGlvbihmb3JtRGF0YU9iaikge1xyXG4gICAgICAgIGNvbnN0IGVtYWlsID0gJGVtYWlsLnZhbCgpLFxyXG4gICAgICAgICAgICBwYXNzd29yZCA9ICRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJwYXNzXCJdJykudmFsKCksXHJcbiAgICAgICAgICAgIF9mb3JtRGF0YSA9IGZvcm1EYXRhT2JqIHx8IHtlbWFpbCwgcGFzc3dvcmR9O1xyXG5cclxuICAgICAgICBpZiAoc2VsZWN0b3JDc3MuaXNMb2dpbkluc3RhZ3JhbSkge1xyXG4gICAgICAgICAgICAvLyB0b2RvOiBkZWxldGUgbWVcclxuICAgICAgICAgICAgLy8gYWRkSW5zdGFncmFtQWNjb3VudCh7dXNlcm5hbWU6ICRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJ1c2VybmFtZVwiXScpLnZhbCgpLCBwYXNzd29yZH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRlbWFpbC52YWwoJGVtYWlsLnZhbCgpLnRvTG9jYWxlTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICB1c2VyTG9naW5IZWFkZXIoX2Zvcm1EYXRhKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIFB1YlN1Yi5wdWJsaXNoKENPTlNULmV2ZW50cy5VU0VSX0xPR0dFRCwgJ2xvZ2luJyk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvaW5zdGFncmFtLWludGVncmF0aW9uL2luc3RhZ3JhbS1hY2NvdW50cy5odG1sJztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBsb2dPdXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb29raWVTdG9yYWdlLnJlbW92ZShDT05TVC5jb29raWVTdG9yYWdlLnRva2VuKTtcclxuICAgICAgICBQdWJTdWIucHVibGlzaChDT05TVC5ldmVudHMuVVNFUl9MT0dPVVQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBiaW5kRXZlbnRzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gY29uc3QgJHNob3dMb2dpbkJveEJ0bklkID0gJChfc2hvd0xvZ2luQm94QnRuSWQpO1xyXG4gICAgICAgIGNvbnN0ICRsb2dpbkJveCA9ICQoX2xvZ2luQm94KTtcclxuICAgICAgICBjb25zdCBvcGVuZWRDbGFzcyA9ICdkLWJsb2NrJztcclxuICAgICAgICBjb25zdCBjbG9zZUNsYXNzID0gJ2Qtbm9uZSc7XHJcblxyXG4gICAgICAgIC8vICRzaG93TG9naW5Cb3hCdG5JZC5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGlmICghc2VsZWN0b3JDc3MuaXNMb2dpbkluc3RhZ3JhbSkge1xyXG4gICAgICAgIC8vICAgICAgICAgJGxvZ2luQm94LmNzcyh7J3RvcCc6IDAsICdyaWdodCc6IDB9KVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC5hZGRDbGFzcygnYmctbGlnaHQgYm9yZGVyIG10LTUgbXgtYXV0byBwb3NpdGlvbi1hYnNvbHV0ZScpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgICRsb2dpbkJveC5hZGRDbGFzcyhvcGVuZWRDbGFzcykucmVtb3ZlQ2xhc3MoY2xvc2VDbGFzcyk7XHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgIGNvbnN0ICRidXR0b25TdWJtaXQgPSAkKF9idXR0b25TdWJtaXRJZCksXHJcbiAgICAgICAgICAgIGNzc1ZhbGlkYXRpb25DbGFzcyA9ICdmb3JtLXZhbGlkYXRpb24nO1xyXG5cclxuICAgICAgICAkYnV0dG9uU3VibWl0Lm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc3QgZm9ybSA9ICRmb3JtLmdldCgwKTtcclxuICAgICAgICAgICAgLy8gY29uc3QgdmFsaWRhdG9yID0gbmV3IFZhbGlkYXRvcigkZm9ybSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHZpZXdVdGlscywgdmlld1V0aWxzLmlzRW1haWwoJGVtYWlsLnZhbCgpKSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZm9ybS5jaGVja1ZhbGlkaXR5KCkgJiYgdmlld1V0aWxzLmlzRW1haWwoJGVtYWlsLnZhbCgpKSkge1xyXG4gICAgICAgICAgICAgICAgc3VibWl0Rm9ybSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gSGlnaGxpZ2h0IGVycm9yc1xyXG4gICAgICAgICAgICAgICAgaWYgKGZvcm0ucmVwb3J0VmFsaWRpdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtLnJlcG9ydFZhbGlkaXR5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAkZm9ybS5hZGRDbGFzcyhjc3NWYWxpZGF0aW9uQ2xhc3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5uYXYtbGluay5qc19sb2dPdXQnKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGxvZ091dCgpO1xyXG4gICAgICAgICAgICAkKGUudGFyZ2V0KS5wYXJlbnQoKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UoJHRleHRBcmVhRGVzY3JpcHRpb24sICdMb2dnZWQgb3V0Jyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFB1YlN1Yi5zdWJzY3JpYmUoQ09OU1QuZXZlbnRzLlVTRVJfTE9HT1VULCAobXNnKSA9PiB7XHJcbiAgICAgICAgICAgICQoQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyTmF2TG9naW5CdG4pLmFkZENsYXNzKG9wZW5lZENsYXNzKS5yZW1vdmVDbGFzcyhjbG9zZUNsYXNzKTsgLy8gLnNob3coKTtcclxuICAgICAgICAgICAgJChDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJSZWdCdG4pLmFkZENsYXNzKG9wZW5lZENsYXNzKS5yZW1vdmVDbGFzcyhjbG9zZUNsYXNzKTtcclxuICAgICAgICAgICAgJCgnLm5hdi1saW5rLmpzX2xvZ091dCcpLmFkZENsYXNzKGNsb3NlQ2xhc3MpLnJlbW92ZUNsYXNzKG9wZW5lZENsYXNzKTsgLy8gLmhpZGUoKTtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3JMb2dpblN0YXRlID0gJy5qc19tZXNzYWdlX2xvZ2dlZC0tdGV4dCc7XHJcbiAgICAgICAgICAgICQoc2VsZWN0b3JMb2dpblN0YXRlKS50ZXh0KCfQktGLINCy0YvRiNC70Lgg0LjQtyDQsNC60LrQsNGD0L3RgtCwJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpc0xvZ2luQnRuQ2xpY2sgPSAkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnbmF2Lm5hdmJhcicpLmZpbmQoJGxvZ2luQm94KS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzQWRkSW5zdGFncmFtQnRuQ2xpY2tlZCA9ICQoZXZlbnQudGFyZ2V0KS5hdHRyKCdpZCcpID09PSBDT05TVC51aVNlbGVjdG9ycy5pbnN0YWdyYW0uYWRkQWNjb3VudEJ0bklkO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFpc0xvZ2luQnRuQ2xpY2sgJiYgJGxvZ2luQm94Lmhhc0NsYXNzKG9wZW5lZENsYXNzKSAmJiAhaXNBZGRJbnN0YWdyYW1CdG5DbGlja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAkbG9naW5Cb3guYWRkQ2xhc3MoY2xvc2VDbGFzcykucmVtb3ZlQ2xhc3Mob3BlbmVkQ2xhc3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAgICAgaWYgKCQoJy5hdXRoLmxvZ2luJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGJpbmRFdmVudHMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0XHJcbiAgICB9O1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9fYXV0aC9sb2dpbi1wYWdlLmpzIiwiaWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIGJydXR1c2luKXdpbmRvdy5icnV0dXNpbj1uZXcgT2JqZWN0O2Vsc2UgaWYoXCJvYmplY3RcIiE9dHlwZW9mIGJydXR1c2luKXRocm93XCJicnV0dXNpbiBnbG9iYWwgdmFyaWFibGUgYWxyZWFkeSBleGlzdHNcIjshZnVuY3Rpb24oKXtTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGh8fChTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGg9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdD10fHwwLHRoaXMuaW5kZXhPZihlLHQpPT09dH0pLFN0cmluZy5wcm90b3R5cGUuZW5kc1dpdGh8fChTdHJpbmcucHJvdG90eXBlLmVuZHNXaXRoPWZ1bmN0aW9uKGUsdCl7dmFyIHI9dGhpcy50b1N0cmluZygpOyh2b2lkIDA9PT10fHx0PnIubGVuZ3RoKSYmKHQ9ci5sZW5ndGgpLHQtPWUubGVuZ3RoO3ZhciBuPXIuaW5kZXhPZihlLHQpO3JldHVybi0xIT09biYmbj09PXR9KSxTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzfHwoU3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlcz1mdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3JldHVybi0xIT09U3RyaW5nLnByb3RvdHlwZS5pbmRleE9mLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0pLFN0cmluZy5wcm90b3R5cGUuZm9ybWF0fHwoU3RyaW5nLnByb3RvdHlwZS5mb3JtYXQ9ZnVuY3Rpb24oKXtmb3IodmFyIGU9dGhpcyx0PTA7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIHI9bmV3IFJlZ0V4cChcIlxcXFx7XCIrdCtcIlxcXFx9XCIsXCJnaVwiKTtlPWUucmVwbGFjZShyLGFyZ3VtZW50c1t0XSl9cmV0dXJuIGV9KTt2YXIgQnJ1dHVzaW5Gb3Jtcz1uZXcgT2JqZWN0O0JydXR1c2luRm9ybXMubWVzc2FnZXM9e3ZhbGlkYXRpb25FcnJvcjpcIlZhbGlkYXRpb24gZXJyb3JcIixyZXF1aXJlZDpcIlRoaXMgZmllbGQgaXMgKipyZXF1aXJlZCoqXCIsaW52YWxpZFZhbHVlOlwiSW52YWxpZCBmaWVsZCB2YWx1ZVwiLGFkZHByb3BOYW1lRXhpc3RlbnQ6XCJUaGlzIHByb3BlcnR5IGlzIGFscmVhZHkgcHJlc2VudCBpbiB0aGUgb2JqZWN0XCIsYWRkcHJvcE5hbWVSZXF1aXJlZDpcIkEgbmFtZSBpcyByZXF1aXJlZFwiLG1pbkl0ZW1zOlwiQXQgbGVhc3QgYHswfWAgaXRlbXMgYXJlIHJlcXVpcmVkXCIsbWF4SXRlbXM6XCJBdCBtb3N0IGB7MH1gIGl0ZW1zIGFyZSBhbGxvd2VkXCIscGF0dGVybjpcIlZhbHVlIGRvZXMgbm90IG1hdGNoIHBhdHRlcm46IGB7MH1gXCIsbWluTGVuZ3RoOlwiVmFsdWUgbXVzdCBiZSAqKmF0IGxlYXN0KiogYHswfWAgY2hhcmFjdGVycyBsb25nXCIsbWF4TGVuZ3RoOlwiVmFsdWUgbXVzdCBiZSAqKmF0IG1vc3QqKiBgezB9YCBjaGFyYWN0ZXJzIGxvbmdcIixtdWx0aXBsZU9mOlwiVmFsdWUgbXVzdCBiZSAqKm11bHRpcGxlIG9mKiogYHswfWBcIixtaW5pbXVtOlwiVmFsdWUgbXVzdCBiZSAqKmdyZWF0ZXIgb3IgZXF1YWwgdGhhbioqIGB7MH1gXCIsZXhjbHVzaXZlTWluaW11bTpcIlZhbHVlIG11c3QgYmUgKipncmVhdGVyIHRoYW4qKiBgezB9YFwiLG1heGltdW06XCJWYWx1ZSBtdXN0IGJlICoqbG93ZXIgb3IgZXF1YWwgdGhhbioqIGB7MH1gXCIsZXhjbHVzaXZlTWF4aW11bTpcIlZhbHVlIG11c3QgYmUgKipsb3dlciB0aGFuKiogYHswfWBcIixtaW5Qcm9wZXJ0aWVzOlwiQXQgbGVhc3QgYHswfWAgcHJvcGVydGllcyBhcmUgcmVxdWlyZWRcIixtYXhQcm9wZXJ0aWVzOlwiQXQgbW9zdCBgezB9YCBwcm9wZXJ0aWVzIGFyZSBhbGxvd2VkXCIsdW5pcXVlSXRlbXM6XCJBcnJheSBpdGVtcyBtdXN0IGJlIHVuaXF1ZVwiLGFkZEl0ZW06XCJBZGQgaXRlbVwiLFwidHJ1ZVwiOlwiVHJ1ZVwiLFwiZmFsc2VcIjpcIkZhbHNlXCJ9LEJydXR1c2luRm9ybXMuZGVjb3JhdG9ycz1uZXcgQXJyYXksQnJ1dHVzaW5Gb3Jtcy5hZGREZWNvcmF0b3I9ZnVuY3Rpb24oZSl7QnJ1dHVzaW5Gb3Jtcy5kZWNvcmF0b3JzW0JydXR1c2luRm9ybXMuZGVjb3JhdG9ycy5sZW5ndGhdPWV9LEJydXR1c2luRm9ybXMub25SZXNvbHV0aW9uU3RhcnRlZD1mdW5jdGlvbihlKXt9LEJydXR1c2luRm9ybXMub25SZXNvbHV0aW9uRmluaXNoZWQ9ZnVuY3Rpb24oZSl7fSxCcnV0dXNpbkZvcm1zLm9uVmFsaWRhdGlvbkVycm9yPWZ1bmN0aW9uKGUsdCl7ZS5mb2N1cygpLGUuY2xhc3NOYW1lLmluY2x1ZGVzKFwiIGVycm9yXCIpfHwoZS5jbGFzc05hbWUrPVwiIGVycm9yXCIpLGFsZXJ0KHQpfSxCcnV0dXNpbkZvcm1zLm9uVmFsaWRhdGlvblN1Y2Nlc3M9ZnVuY3Rpb24oZSl7ZS5jbGFzc05hbWU9ZS5jbGFzc05hbWUucmVwbGFjZShcIiBlcnJvclwiLFwiXCIpfSxCcnV0dXNpbkZvcm1zLnBvc3RSZW5kZXI9bnVsbCxCcnV0dXNpbkZvcm1zLmluc3RhbmNlcz1uZXcgQXJyYXksQnJ1dHVzaW5Gb3Jtcy5jcmVhdGU9ZnVuY3Rpb24oc2NoZW1hKXtmdW5jdGlvbiB2YWxpZGF0ZURlcGVuY3lNYXBJc0FjeWNsaWMoKXtmdW5jdGlvbiBlKHQscixuKXtpZihyLmhhc093blByb3BlcnR5KG4pKXJldHVybiB2b2lkKGVycm9yPVwiU2NoZW1hIGRlcGVuZGVuY3kgZ3JhcGggaGFzIGN5Y2xlc1wiKTtpZihyW25dPW51bGwsIXQuaGFzT3duUHJvcGVydHkobikpe3Rbbl09bnVsbDt2YXIgYT1kZXBlbmRlbmN5TWFwW25dO2lmKGEpZm9yKHZhciBpPTA7aTxhLmxlbmd0aDtpKyspZSh0LHIsYVtpXSk7ZGVsZXRlIHJbbl19fXZhciB0PW5ldyBPYmplY3Q7Zm9yKHZhciByIGluIGRlcGVuZGVuY3lNYXApdC5oYXNPd25Qcm9wZXJ0eShyKXx8ZSh0LG5ldyBPYmplY3Qscil9ZnVuY3Rpb24gYXBwZW5kQ2hpbGQoZSx0LHIpe2UuYXBwZW5kQ2hpbGQodCk7Zm9yKHZhciBuPTA7bjxCcnV0dXNpbkZvcm1zLmRlY29yYXRvcnMubGVuZ3RoO24rKylCcnV0dXNpbkZvcm1zLmRlY29yYXRvcnNbbl0odCxyKX1mdW5jdGlvbiBjcmVhdGVQc2V1ZG9TY2hlbWEoZSl7dmFyIHQ9bmV3IE9iamVjdDtmb3IodmFyIHIgaW4gZSlcIml0ZW1zXCIhPT1yJiZcInByb3BlcnRpZXNcIiE9PXImJlwiYWRkaXRpb25hbFByb3BlcnRpZXNcIiE9PXImJihcInBhdHRlcm5cIj09PXI/dFtyXT1uZXcgUmVnRXhwKGVbcl0pOnRbcl09ZVtyXSk7cmV0dXJuIHR9ZnVuY3Rpb24gZ2V0RGVmaW5pdGlvbihlKXt2YXIgdD1lLnNwbGl0KFwiL1wiKSxyPXJvb3Q7Zm9yKHZhciBuIGluIHQpXCIwXCIhPT1uJiYocj1yW3Rbbl1dKTtyZXR1cm4gcn1mdW5jdGlvbiBjb250YWluc1N0cihlLHQpe2Zvcih2YXIgcj0wO3I8ZS5sZW5ndGg7cisrKWlmKGVbcl09PXQpcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gcmVuYW1lUmVxdWlyZWRQcm9wZXRpZXMoZSl7aWYoZSlpZihlLmhhc093blByb3BlcnR5KFwib25lT2ZcIikpZm9yKHZhciB0IGluIGUub25lT2YpcmVuYW1lUmVxdWlyZWRQcm9wZXRpZXMoZS5vbmVPZlt0XSk7ZWxzZSBpZihlLmhhc093blByb3BlcnR5KFwiJHJlZlwiKSl7dmFyIHI9Z2V0RGVmaW5pdGlvbihlLiRyZWYpO3JlbmFtZVJlcXVpcmVkUHJvcGV0aWVzKHIpfWVsc2UgaWYoXCJvYmplY3RcIj09PWUudHlwZSl7aWYoZS5wcm9wZXJ0aWVzKXtlLmhhc093blByb3BlcnR5KFwicmVxdWlyZWRcIikmJkFycmF5LmlzQXJyYXkoZS5yZXF1aXJlZCkmJihlLnJlcXVpcmVkUHJvcGVydGllcz1lLnJlcXVpcmVkLGRlbGV0ZSBlLnJlcXVpcmVkKTtmb3IodmFyIG4gaW4gZS5wcm9wZXJ0aWVzKXJlbmFtZVJlcXVpcmVkUHJvcGV0aWVzKGUucHJvcGVydGllc1tuXSl9aWYoZS5wYXR0ZXJuUHJvcGVydGllcylmb3IodmFyIGEgaW4gZS5wYXR0ZXJuUHJvcGVydGllcyl7dmFyIGk9ZS5wYXR0ZXJuUHJvcGVydGllc1thXTsoaS5oYXNPd25Qcm9wZXJ0eShcInR5cGVcIil8fGkuaGFzT3duUHJvcGVydHkoXCIkcmVmXCIpfHxpLmhhc093blByb3BlcnR5KFwib25lT2ZcIikpJiZyZW5hbWVSZXF1aXJlZFByb3BldGllcyhlLnBhdHRlcm5Qcm9wZXJ0aWVzW2FdKX1lLmFkZGl0aW9uYWxQcm9wZXJ0aWVzJiYoZS5hZGRpdGlvbmFsUHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShcInR5cGVcIil8fGUuYWRkaXRpb25hbFByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoXCJvbmVPZlwiKSkmJnJlbmFtZVJlcXVpcmVkUHJvcGV0aWVzKGUuYWRkaXRpb25hbFByb3BlcnRpZXMpfWVsc2VcImFycmF5XCI9PT1lLnR5cGUmJnJlbmFtZVJlcXVpcmVkUHJvcGV0aWVzKGUuaXRlbXMpfWZ1bmN0aW9uIHBvcHVsYXRlU2NoZW1hTWFwKGUsdCl7dmFyIHI9Y3JlYXRlUHNldWRvU2NoZW1hKHQpO2lmKHIuJGlkPWUsc2NoZW1hTWFwW2VdPXIsdCl7aWYodC5oYXNPd25Qcm9wZXJ0eShcIm9uZU9mXCIpKXtyLm9uZU9mPW5ldyBBcnJheSxyLnR5cGU9XCJvbmVPZlwiO2Zvcih2YXIgbiBpbiB0Lm9uZU9mKXt2YXIgYT1lK1wiLlwiK247ci5vbmVPZltuXT1hLHBvcHVsYXRlU2NoZW1hTWFwKGEsdC5vbmVPZltuXSl9fWVsc2UgaWYodC5oYXNPd25Qcm9wZXJ0eShcIiRyZWZcIikpe3ZhciBpPWdldERlZmluaXRpb24odC4kcmVmKTtpZihpKXtpZih0Lmhhc093blByb3BlcnR5KFwidGl0bGVcIil8fHQuaGFzT3duUHJvcGVydHkoXCJkZXNjcmlwdGlvblwiKSl7dmFyIG89e307Zm9yKHZhciBzIGluIGkpb1tzXT1pW3NdO3QuaGFzT3duUHJvcGVydHkoXCJ0aXRsZVwiKSYmKG8udGl0bGU9dC50aXRsZSksdC5oYXNPd25Qcm9wZXJ0eShcImRlc2NyaXB0aW9uXCIpJiYoby5kZXNjcmlwdGlvbj10LmRlc2NyaXB0aW9uKSxpPW99cG9wdWxhdGVTY2hlbWFNYXAoZSxpKX19ZWxzZSBpZihcIm9iamVjdFwiPT09dC50eXBlKXtpZih0LnByb3BlcnRpZXMpe3IucHJvcGVydGllcz1uZXcgT2JqZWN0O2Zvcih2YXIgcyBpbiB0LnByb3BlcnRpZXMpe3ZhciBhPWUrXCIuXCIrcztyLnByb3BlcnRpZXNbc109YTt2YXIgdT10LnByb3BlcnRpZXNbc107dC5yZXF1aXJlZFByb3BlcnRpZXMmJihjb250YWluc1N0cih0LnJlcXVpcmVkUHJvcGVydGllcyxzKT91LnJlcXVpcmVkPSEwOnUucmVxdWlyZWQ9ITEpLHBvcHVsYXRlU2NoZW1hTWFwKGEsdSl9fWlmKHQucGF0dGVyblByb3BlcnRpZXMpe3IucGF0dGVyblByb3BlcnRpZXM9bmV3IE9iamVjdDtmb3IodmFyIGwgaW4gdC5wYXR0ZXJuUHJvcGVydGllcyl7dmFyIGQ9ZStcIltcIitsK1wiXVwiO3IucGF0dGVyblByb3BlcnRpZXNbbF09ZDt2YXIgcD10LnBhdHRlcm5Qcm9wZXJ0aWVzW2xdO3AuaGFzT3duUHJvcGVydHkoXCJ0eXBlXCIpfHxwLmhhc093blByb3BlcnR5KFwiJHJlZlwiKXx8cC5oYXNPd25Qcm9wZXJ0eShcIm9uZU9mXCIpP3BvcHVsYXRlU2NoZW1hTWFwKGQsdC5wYXR0ZXJuUHJvcGVydGllc1tsXSk6cG9wdWxhdGVTY2hlbWFNYXAoZCxTQ0hFTUFfQU5ZKX19aWYodC5hZGRpdGlvbmFsUHJvcGVydGllcyl7dmFyIGE9ZStcIlsqXVwiO3IuYWRkaXRpb25hbFByb3BlcnRpZXM9YSx0LmFkZGl0aW9uYWxQcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KFwidHlwZVwiKXx8dC5hZGRpdGlvbmFsUHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShcIm9uZU9mXCIpP3BvcHVsYXRlU2NoZW1hTWFwKGEsdC5hZGRpdGlvbmFsUHJvcGVydGllcyk6cG9wdWxhdGVTY2hlbWFNYXAoYSxTQ0hFTUFfQU5ZKX19ZWxzZVwiYXJyYXlcIj09PXQudHlwZSYmKHIuaXRlbXM9ZStcIlsjXVwiLHBvcHVsYXRlU2NoZW1hTWFwKHIuaXRlbXMsdC5pdGVtcykpO2lmKHQuaGFzT3duUHJvcGVydHkoXCJkZXBlbmRzT25cIikpe251bGw9PT10LmRlcGVuZHNPbiYmKHQuZGVwZW5kc09uPVtcIiRcIl0pO2Zvcih2YXIgYz1uZXcgQXJyYXksbj0wO248dC5kZXBlbmRzT24ubGVuZ3RoO24rKyl0LmRlcGVuZHNPbltuXT90LmRlcGVuZHNPbltuXS5zdGFydHNXaXRoKFwiJFwiKT9jW25dPXQuZGVwZW5kc09uW25dOmUuZW5kc1dpdGgoXCJdXCIpP2Nbbl09ZStcIi5cIit0LmRlcGVuZHNPbltuXTpjW25dPWUuc3Vic3RyaW5nKDAsZS5sYXN0SW5kZXhPZihcIi5cIikpK1wiLlwiK3QuZGVwZW5kc09uW25dOmNbbl09XCIkXCI7c2NoZW1hTWFwW2VdLmRlcGVuZHNPbj1jO2Zvcih2YXIgbj0wO248Yy5sZW5ndGg7bisrKXt2YXIgbT1kZXBlbmRlbmN5TWFwW2Nbbl1dO218fChtPW5ldyBBcnJheSxkZXBlbmRlbmN5TWFwW2Nbbl1dPW0pLG1bbS5sZW5ndGhdPWV9fX19ZnVuY3Rpb24gcmVuZGVyVGl0bGUoZSx0LHIpe2lmKGUmJnQpe3ZhciBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcImFueVwiIT09ci50eXBlJiZcIm9iamVjdFwiIT09ci50eXBlJiZcImFycmF5XCIhPT1yLnR5cGUmJihuLmh0bWxGb3I9Z2V0SW5wdXRJZCgpKTt2YXIgYT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0K1wiOlwiKTtpZihhcHBlbmRDaGlsZChuLGEsciksci5kZXNjcmlwdGlvbiYmKG4udGl0bGU9ci5kZXNjcmlwdGlvbiksci5yZXF1aXJlZCl7dmFyIGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN1cFwiKTthcHBlbmRDaGlsZChpLGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiKlwiKSxyKSxhcHBlbmRDaGlsZChuLGksciksbi5jbGFzc05hbWU9XCJyZXF1aXJlZFwifWFwcGVuZENoaWxkKGUsbixyKX19ZnVuY3Rpb24gZ2V0SW5wdXRJZCgpe3JldHVybiBmb3JtSWQrXCJfXCIraW5wdXRDb3VudGVyfWZ1bmN0aW9uIHZhbGlkYXRlKGUpe3ZhciB0PSEwO2lmKGUuaGFzT3duUHJvcGVydHkoXCJnZXRWYWxpZGF0aW9uRXJyb3JcIikpe3ZhciByPWUuZ2V0VmFsaWRhdGlvbkVycm9yKCk7cj8oQnJ1dHVzaW5Gb3Jtcy5vblZhbGlkYXRpb25FcnJvcihlLHIpLHQ9ITEpOkJydXR1c2luRm9ybXMub25WYWxpZGF0aW9uU3VjY2VzcyhlKX1pZihlLmNoaWxkTm9kZXMpZm9yKHZhciBuPTA7bjxlLmNoaWxkTm9kZXMubGVuZ3RoO24rKyl2YWxpZGF0ZShlLmNoaWxkTm9kZXNbbl0pfHwodD0hMSk7cmV0dXJuIHR9ZnVuY3Rpb24gY2xlYXIoZSl7aWYoZSlmb3IoO2UuZmlyc3RDaGlsZDspZS5yZW1vdmVDaGlsZChlLmZpcnN0Q2hpbGQpfWZ1bmN0aW9uIHJlbmRlcihlLHQscixuLGEsaSl7dmFyIG89Z2V0U2NoZW1hSWQocikscz1nZXRTY2hlbWEobyk7cmVuZGVySW5mb01hcFtvXT1uZXcgT2JqZWN0LHJlbmRlckluZm9NYXBbb10udGl0bGVDb250YWluZXI9ZSxyZW5kZXJJbmZvTWFwW29dLmNvbnRhaW5lcj10LHJlbmRlckluZm9NYXBbb10ucGFyZW50T2JqZWN0PW4scmVuZGVySW5mb01hcFtvXS5wcm9wZXJ0eVByb3ZpZGVyPWEscmVuZGVySW5mb01hcFtvXS52YWx1ZT1pLGNsZWFyKGUpLGNsZWFyKHQpO3ZhciB1PXJlbmRlcmVyc1tzLnR5cGVdO2lmKHUmJiFzLmRlcGVuZHNPbilzLnRpdGxlP3JlbmRlclRpdGxlKGUscy50aXRsZSxzKTphJiZyZW5kZXJUaXRsZShlLGEuZ2V0VmFsdWUoKSxzKSxpfHwoaT1cInVuZGVmaW5lZFwiIT10eXBlb2YgaW5pdGlhbFZhbHVlJiZudWxsIT09aW5pdGlhbFZhbHVlP2dldEluaXRpYWxWYWx1ZShyKTpzW1wiZGVmYXVsdFwiXSksdSh0LHIsbixhLGkpO2Vsc2UgaWYocy4kcmVmJiZvYmouc2NoZW1hUmVzb2x2ZXIpe3ZhciBsPWZ1bmN0aW9uKGUpe2lmKGUmJmUuaGFzT3duUHJvcGVydHkocikmJkpTT04uc3RyaW5naWZ5KHNjaGVtYU1hcFtyXSkhPT1KU09OLnN0cmluZ2lmeShlW3JdKSl7Y2xlYW5TY2hlbWFNYXAociksY2xlYW5EYXRhKHIpLHBvcHVsYXRlU2NoZW1hTWFwKHIsZVtyXSk7dmFyIHQ9cmVuZGVySW5mb01hcFtyXTt0JiZyZW5kZXIodC50aXRsZUNvbnRhaW5lcix0LmNvbnRhaW5lcixyLHQucGFyZW50T2JqZWN0LHQucHJvcGVydHlQcm92aWRlcix0LnZhbHVlKX1CcnV0dXNpbkZvcm1zLm9uUmVzb2x1dGlvbkZpbmlzaGVkKG4pfTtCcnV0dXNpbkZvcm1zLm9uUmVzb2x1dGlvblN0YXJ0ZWQobiksb2JqLnNjaGVtYVJlc29sdmVyKFtyXSxvYmouZ2V0RGF0YSgpLGwpfX1mdW5jdGlvbiBjcmVhdGVQcm9wZXJ0eVByb3ZpZGVyKGUsdCl7dmFyIHI9bmV3IE9iamVjdDtyZXR1cm4gci5nZXRWYWx1ZT1lLHIub25jaGFuZ2U9dCxyfWZ1bmN0aW9uIGdldEluaXRpYWxWYWx1ZShpZCl7dmFyIHJldDt0cnl7ZXZhbChcInJldCA9IGluaXRpYWxWYWx1ZVwiK2lkLnN1YnN0cmluZygxKSl9Y2F0Y2goZSl7cmV0PW51bGx9cmV0dXJuIHJldH1mdW5jdGlvbiBnZXRWYWx1ZShzY2hlbWEsaW5wdXQpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGlucHV0LmdldFZhbHVlKXJldHVybiBpbnB1dC5nZXRWYWx1ZSgpO3ZhciB2YWx1ZTtyZXR1cm4gdmFsdWU9XCJzZWxlY3RcIj09PWlucHV0LnRhZ05hbWUudG9Mb3dlckNhc2UoKT9pbnB1dC5vcHRpb25zW2lucHV0LnNlbGVjdGVkSW5kZXhdLnZhbHVlOmlucHV0LnZhbHVlLFwiXCI9PT12YWx1ZT9udWxsOihcImludGVnZXJcIj09PXNjaGVtYS50eXBlPyh2YWx1ZT1wYXJzZUludCh2YWx1ZSksaXNGaW5pdGUodmFsdWUpfHwodmFsdWU9bnVsbCkpOlwibnVtYmVyXCI9PT1zY2hlbWEudHlwZT8odmFsdWU9cGFyc2VGbG9hdCh2YWx1ZSksaXNGaW5pdGUodmFsdWUpfHwodmFsdWU9bnVsbCkpOlwiYm9vbGVhblwiPT09c2NoZW1hLnR5cGU/XCJpbnB1dFwiPT09aW5wdXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpPyh2YWx1ZT1pbnB1dC5jaGVja2VkLHZhbHVlfHwodmFsdWU9ITEpKTpcInNlbGVjdFwiPT09aW5wdXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpJiYodmFsdWU9XCJ0cnVlXCI9PT1pbnB1dC52YWx1ZT8hMDpcImZhbHNlXCI9PT1pbnB1dC52YWx1ZT8hMTpudWxsKTpcImFueVwiPT09c2NoZW1hLnR5cGUmJnZhbHVlJiZldmFsKFwidmFsdWU9XCIrdmFsdWUpLHZhbHVlKX1mdW5jdGlvbiBnZXRTY2hlbWFJZChlKXtyZXR1cm4gZS5yZXBsYWNlKC9cXFtcIlteXCJdKlwiXFxdL2csXCJbKl1cIikucmVwbGFjZSgvXFxbXFxkKlxcXS9nLFwiWyNdXCIpfWZ1bmN0aW9uIGdldFBhcmVudFNjaGVtYUlkKGUpe3JldHVybiBlLnN1YnN0cmluZygwLGUubGFzdEluZGV4T2YoXCIuXCIpKX1mdW5jdGlvbiBnZXRTY2hlbWEoZSl7cmV0dXJuIHNjaGVtYU1hcFtlXX1mdW5jdGlvbiBjbGVhblNjaGVtYU1hcChlKXtmb3IodmFyIHQgaW4gc2NoZW1hTWFwKWUuc3RhcnRzV2l0aCh0KSYmZGVsZXRlIHNjaGVtYU1hcFt0XX1mdW5jdGlvbiBjbGVhbkRhdGEoZSl7dmFyIHQ9bmV3IEV4cHJlc3Npb24oZSk7dC52aXNpdChkYXRhLGZ1bmN0aW9uKGUsdCxyKXtkZWxldGUgdFtyXX0pfWZ1bmN0aW9uIG9uRGVwZW5kZW5jeUNoYW5nZWQoZSx0KXt2YXIgcj1kZXBlbmRlbmN5TWFwW2VdO2lmKHImJm9iai5zY2hlbWFSZXNvbHZlcil7dmFyIG49ZnVuY3Rpb24oZSl7aWYoZSlmb3IodmFyIHIgaW4gZSlpZihKU09OLnN0cmluZ2lmeShzY2hlbWFNYXBbcl0pIT09SlNPTi5zdHJpbmdpZnkoZVtyXSkpe2NsZWFuU2NoZW1hTWFwKHIpLGNsZWFuRGF0YShyKSxwb3B1bGF0ZVNjaGVtYU1hcChyLGVbcl0pO3ZhciBuPXJlbmRlckluZm9NYXBbcl07biYmcmVuZGVyKG4udGl0bGVDb250YWluZXIsbi5jb250YWluZXIscixuLnBhcmVudE9iamVjdCxuLnByb3BlcnR5UHJvdmlkZXIsbi52YWx1ZSl9QnJ1dHVzaW5Gb3Jtcy5vblJlc29sdXRpb25GaW5pc2hlZCh0KX07QnJ1dHVzaW5Gb3Jtcy5vblJlc29sdXRpb25TdGFydGVkKHQpLG9iai5zY2hlbWFSZXNvbHZlcihyLG9iai5nZXREYXRhKCksbil9fWZ1bmN0aW9uIEV4cHJlc3Npb24oZSl7ZnVuY3Rpb24gdChlKXtpZihudWxsPT09ZSlyZXR1cm4gbnVsbDtmb3IodmFyIHQ9bmV3IEFycmF5LHI9bnVsbCxuPTAsYT0wO2E8ZS5sZW5ndGg7YSsrKSdcIic9PT1lLmNoYXJBdChhKT9udWxsPT09cj9yPSdcIic6J1wiJz09PXImJihyPW51bGwsdFt0Lmxlbmd0aF09ZS5zdWJzdHJpbmcobixhKzEpLnRyaW0oKSxuPWErMSk6XCInXCI9PT1lLmNoYXJBdChhKT9udWxsPT09cj9yPVwiJ1wiOlwiJ1wiPT09ciYmKHI9bnVsbCx0W3QubGVuZ3RoXT1lLnN1YnN0cmluZyhuLGErMSkudHJpbSgpLG49YSsxKTpcIltcIj09PWUuY2hhckF0KGEpP251bGw9PT1yJiYobiE9PWEmJih0W3QubGVuZ3RoXT1lLnN1YnN0cmluZyhuLGEpLnRyaW0oKSksdFt0Lmxlbmd0aF09XCJbXCIsbj1hKzEpOlwiXVwiPT09ZS5jaGFyQXQoYSk/bnVsbD09PXImJihuIT09YSYmKHRbdC5sZW5ndGhdPWUuc3Vic3RyaW5nKG4sYSkudHJpbSgpKSx0W3QubGVuZ3RoXT1cIl1cIixuPWErMSk6XCIuXCI9PT1lLmNoYXJBdChhKT9udWxsPT09ciYmKG4hPT1hJiYodFt0Lmxlbmd0aF09ZS5zdWJzdHJpbmcobixhKS50cmltKCkpLG49YSsxKTphPT09ZS5sZW5ndGgtMSYmKHRbdC5sZW5ndGhdPWUuc3Vic3RyaW5nKG4sYSsxKS50cmltKCkpO3JldHVybiB0fShudWxsPT09ZXx8MD09PWUubGVuZ3RofHxcIi5cIj09PWUpJiYoZT1cIiRcIik7Zm9yKHZhciByPW5ldyBBcnJheSxuPXQoZSksYT0hMSxpPTAsbz1cIlwiLHM9MDtzPG4ubGVuZ3RoO3MrKyl7dmFyIHU9bltzXTtpZihcIltcIj09PXUpe2lmKGEpdGhyb3dcIkVycm9yIHBhcnNpbmcgZXhwcmVzc2lvbiAnXCIrZStcIic6IE5lc3RlZCBbIGZvdW5kXCI7YT0hMCxpPTAsbys9dX1lbHNlIGlmKFwiXVwiPT09dSl7aWYoIWEpdGhyb3dcIkVycm9yIHBhcnNpbmcgZXhwcmVzc2lvbiAnXCIrZStcIic6IFVuYmFsYW5jZWQgXSBmb3VuZFwiO2E9ITEsbys9dSxyW3IubGVuZ3RoXT1vLG89XCJcIn1lbHNlIGlmKGEpe2lmKGk+MCl0aHJvd1wiRXJyb3IgcGFyc2luZyBleHByZXNzaW9uICdcIitlK1wiJzogTXVsdGlwbGUgdG9rZW5zIGZvdW5kIGluc2lkZSBhIGJyYWNrZXRcIjtvKz11LGkrK31lbHNlIHJbci5sZW5ndGhdPXU7aWYocz09PW4ubGVuZ3RoLTEmJmEpdGhyb3dcIkVycm9yIHBhcnNpbmcgZXhwcmVzc2lvbiAnXCIrZStcIic6IFVuYmFsYW5jZWQgWyBmb3VuZFwifXRoaXMuZXhwPWUsdGhpcy5xdWV1ZT1yLHRoaXMudmlzaXQ9ZnVuY3Rpb24oZSx0KXtmdW5jdGlvbiByKGUsbixhLGksbyl7aWYobnVsbCE9YSl7dmFyIHM9bi5zaGlmdCgpO2lmKFwiJFwiPT09cyl7ZT1cIiRcIjt2YXIgcz1uLnNoaWZ0KCl9aWYocylpZihBcnJheS5pc0FycmF5KGEpKXtpZighcy5zdGFydHNXaXRoKFwiW1wiKSl0aHJvd1wiTm9kZSAnXCIrZStcIicgaXMgb2YgdHlwZSBhcnJheVwiO3ZhciB1PXMuc3Vic3RyaW5nKDEscy5sZW5ndGgtMSk7aWYodS5lcXVhbHMoXCIjXCIpKWZvcih2YXIgbD0wO2w8YS5sZW5ndGg7bCsrKXt2YXIgZD1hW2xdO3IoZStzLG4uc2xpY2UoMCksZCxhLGwpLHIoZStcIltcIitsK1wiXVwiLG4uc2xpY2UoMCksZCxhLGwpfWVsc2UgaWYoXCIkXCI9PT11KXt2YXIgZD1hW2EubGVuZ3RoLTFdO3IoZStzLG4uc2xpY2UoMCksZCxhLGEubGVuZ3RoLTEpfWVsc2V7dmFyIHA9cGFyc2VJbnQodSk7aWYoaXNOYU4ocCkpdGhyb3dcIkVsZW1lbnQgJ1wiK3UrXCInIG9mIG5vZGUgJ1wiK2UrXCInIGlzIG5vdCBhbiBpbnRlZ2VyLCBvciB0aGUgJyQnIGxhc3QgZWxlbWVudCBzeW1ib2wsICBvciB0aGUgd2lsY2FyZCBzeW1ib2wgJyMnXCI7aWYoMD5wKXRocm93XCJFbGVtZW50ICdcIit1K1wiJyBvZiBub2RlICdcIitlK1wiJyBpcyBsb3dlciB0aGFuIHplcm9cIjt2YXIgZD1hW3BdO3IoZStzLG4uc2xpY2UoMCksZCxhLHApfX1lbHNle2lmKFwib2JqZWN0XCIhPXR5cGVvZiBhKXRocm93XCJib29sZWFuXCI9PXR5cGVvZiBhfHxcIm51bWJlclwiPT10eXBlb2YgYXx8XCJzdHJpbmdcIj09dHlwZW9mIGE/XCJOb2RlIGlzIGxlYWYgYnV0IHN0aWxsIGFyZSB0b2tlbnMgcmVtYWluaW5nOiBcIitzOlwiTm9kZSB0eXBlICdcIit0eXBlb2YgYStcIicgbm90IHN1cHBvcnRlZCBmb3IgaW5kZXggZmllbGQgJ1wiK2UrXCInXCI7aWYoXCJbKl1cIj09PXMpZm9yKHZhciBjIGluIGEpe3ZhciBkPWFbY107cihlK3Msbi5zbGljZSgwKSxkLGEsYykscihlKydbXCInK2MrJ1wiXScsbi5zbGljZSgwKSxkLGEsYyl9ZWxzZXt2YXIgZDtpZihzLnN0YXJ0c1dpdGgoXCJbXCIpKXt2YXIgdT1zLnN1YnN0cmluZygxLHMubGVuZ3RoLTEpO2lmKCF1LnN0YXJ0c1dpdGgoJ1wiJykmJiF1LnN0YXJ0c1dpdGgoXCInXCIpKXRocm93XCJFbGVtZW50ICdcIit1K1wiJyBvZiBub2RlICdcIitlK1wiJyBtdXN0IGJlIGEgc3RyaW5nIGV4cHJlc3Npb24gb3Igd2lsY2FyZCAnKidcIjt1PXUuc3Vic3RyaW5nKDEsdS5sZW5ndGgoKS0xKSxlKz1zLGQ9YVt1XX1lbHNlIGU9ZS5sZW5ndGg+MD9lK1wiLlwiK3M6cyxkPWFbc107cihlLG4sZCxhLHMpfX1lbHNlIHQoYSxpLG8pfX1yKHRoaXMuZXhwLHRoaXMucXVldWUsZSl9fXZhciBTQ0hFTUFfQU5ZPXt0eXBlOlwiYW55XCJ9LG9iaj1uZXcgT2JqZWN0LHNjaGVtYU1hcD1uZXcgT2JqZWN0LGRlcGVuZGVuY3lNYXA9bmV3IE9iamVjdCxyZW5kZXJJbmZvTWFwPW5ldyBPYmplY3QsY29udGFpbmVyLGRhdGEsZXJyb3IsaW5pdGlhbFZhbHVlLGlucHV0Q291bnRlcj0wLHJvb3Q9c2NoZW1hLGZvcm1JZD1cIkJydXR1c2luRm9ybXMjXCIrQnJ1dHVzaW5Gb3Jtcy5pbnN0YW5jZXMubGVuZ3RoO3JlbmFtZVJlcXVpcmVkUHJvcGV0aWVzKHNjaGVtYSkscG9wdWxhdGVTY2hlbWFNYXAoXCIkXCIsc2NoZW1hKSx2YWxpZGF0ZURlcGVuY3lNYXBJc0FjeWNsaWMoKTt2YXIgcmVuZGVyZXJzPW5ldyBPYmplY3Q7cmV0dXJuIHJlbmRlcmVycy5pbnRlZ2VyPWZ1bmN0aW9uKGUsdCxyLG4sYSl7cmVuZGVyZXJzLnN0cmluZyhlLHQscixuLGEpfSxyZW5kZXJlcnMubnVtYmVyPWZ1bmN0aW9uKGUsdCxyLG4sYSl7cmVuZGVyZXJzLnN0cmluZyhlLHQscixuLGEpfSxyZW5kZXJlcnMuYW55PWZ1bmN0aW9uKGUsdCxyLG4sYSl7cmVuZGVyZXJzLnN0cmluZyhlLHQscixuLGEpfSxyZW5kZXJlcnMuc3RyaW5nPWZ1bmN0aW9uKGUsdCxyLG4sYSl7dmFyIGksbz1nZXRTY2hlbWFJZCh0KSxzPWdldFBhcmVudFNjaGVtYUlkKG8pLHU9Z2V0U2NoZW1hKG8pLGw9Z2V0U2NoZW1hKHMpO2lmKFwiYW55XCI9PT11LnR5cGUpaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIiksYSYmKGkudmFsdWU9SlNPTi5zdHJpbmdpZnkoYSxudWxsLDQpLHUucmVhZE9ubHkmJihpLmRpc2FibGVkPSEwKSk7ZWxzZSBpZih1Lm1lZGlhKWk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGkudHlwZT1cImZpbGVcIixhcHBlbmRDaGlsZChpLGQsdSk7ZWxzZSBpZih1W1wiZW51bVwiXSl7aWYoaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpLCF1LnJlcXVpcmVkKXt2YXIgZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpLHA9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIik7ZC52YWx1ZT1cIlwiLGFwcGVuZENoaWxkKGQscCx1KSxhcHBlbmRDaGlsZChpLGQsdSl9Zm9yKHZhciBjPTAsbT0wO208dVtcImVudW1cIl0ubGVuZ3RoO20rKyl7dmFyIGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSxwPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHVbXCJlbnVtXCJdW21dKTtkLnZhbHVlPXVbXCJlbnVtXCJdW21dLGFwcGVuZENoaWxkKGQscCx1KSxhcHBlbmRDaGlsZChpLGQsdSksYSYmdVtcImVudW1cIl1bbV09PT1hJiYoYz1tLHUucmVxdWlyZWR8fGMrKyx1LnJlYWRPbmx5JiYoaS5kaXNhYmxlZD0hMCkpfTE9PT11W1wiZW51bVwiXS5sZW5ndGg/aS5zZWxlY3RlZEluZGV4PTE6aS5zZWxlY3RlZEluZGV4PWN9ZWxzZXtpZihpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxcImludGVnZXJcIj09PXUudHlwZXx8XCJudW1iZXJcIj09PXUudHlwZSlpLnR5cGU9XCJudW1iZXJcIixpLnN0ZXA9dS5zdGVwP1wiXCIrdS5zdGVwOlwiYW55XCIsXCJudW1iZXJcIiE9dHlwZW9mIGEmJihhPW51bGwpO2Vsc2UgaWYoXCJkYXRlLXRpbWVcIj09PXUuZm9ybWF0KXRyeXtpLnR5cGU9XCJkYXRldGltZS1sb2NhbFwifWNhdGNoKGYpe2kudHlwZT1cInRleHRcIn1lbHNlXCJlbWFpbFwiPT09dS5mb3JtYXQ/aS50eXBlPVwiZW1haWxcIjpcInRleHRcIj09PXUuZm9ybWF0P2k9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpOmkudHlwZT1cInRleHRcIjtudWxsIT09YSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEmJihpLnZhbHVlPWEsdS5yZWFkT25seSYmKGkuZGlzYWJsZWQ9ITApKX1yZXR1cm4gaS5zY2hlbWE9byxpLnNldEF0dHJpYnV0ZShcImF1dG9jb3JyZWN0XCIsXCJvZmZcIiksaS5nZXRWYWxpZGF0aW9uRXJyb3I9ZnVuY3Rpb24oKXt0cnl7dmFyIGU9Z2V0VmFsdWUodSxpKTtpZihudWxsPT09ZSl7aWYodS5yZXF1aXJlZCl7aWYoIWx8fFwib2JqZWN0XCIhPT1sLnR5cGUpcmV0dXJuIEJydXR1c2luRm9ybXMubWVzc2FnZXMucmVxdWlyZWQ7aWYobC5yZXF1aXJlZClyZXR1cm4gQnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5yZXF1aXJlZDtmb3IodmFyIHQgaW4gcilpZihudWxsIT09clt0XSlyZXR1cm4gQnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5yZXF1aXJlZH19ZWxzZXtpZih1LnBhdHRlcm4mJiF1LnBhdHRlcm4udGVzdChlKSlyZXR1cm4gQnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5wYXR0ZXJuLmZvcm1hdCh1LnBhdHRlcm4uc291cmNlKTtpZih1Lm1pbkxlbmd0aCYmKCFlfHx1Lm1pbkxlbmd0aD5lLmxlbmd0aCkpcmV0dXJuIEJydXR1c2luRm9ybXMubWVzc2FnZXMubWluTGVuZ3RoLmZvcm1hdCh1Lm1pbkxlbmd0aCk7aWYodS5tYXhMZW5ndGgmJmUmJnUubWF4TGVuZ3RoPGUubGVuZ3RoKXJldHVybiBCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLm1heExlbmd0aC5mb3JtYXQodS5tYXhMZW5ndGgpfWlmKG51bGwhPT1lJiYhaXNOYU4oZSkpe2lmKHUubXVsdGlwbGVPZiYmZSV1Lm11bHRpcGxlT2YhPT0wKXJldHVybiBCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLm11bHRpcGxlT2YuZm9ybWF0KHUubXVsdGlwbGVPZik7aWYodS5oYXNPd25Qcm9wZXJ0eShcIm1heGltdW1cIikpe2lmKHUuZXhjbHVzaXZlTWF4aW11bSYmZT49dS5tYXhpbXVtKXJldHVybiBCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLmV4Y2x1c2l2ZU1heGltdW0uZm9ybWF0KHUubWF4aW11bSk7aWYoIXUuZXhjbHVzaXZlTWF4aW11bSYmZT51Lm1heGltdW0pcmV0dXJuIEJydXR1c2luRm9ybXMubWVzc2FnZXMubWF4aW11bS5mb3JtYXQodS5tYXhpbXVtKX1pZih1Lmhhc093blByb3BlcnR5KFwibWluaW11bVwiKSl7aWYodS5leGNsdXNpdmVNaW5pbXVtJiZlPD11Lm1pbmltdW0pcmV0dXJuIEJydXR1c2luRm9ybXMubWVzc2FnZXMuZXhjbHVzaXZlTWluaW11bS5mb3JtYXQodS5taW5pbXVtKTtpZighdS5leGNsdXNpdmVNaW5pbXVtJiZlPHUubWluaW11bSlyZXR1cm4gQnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5taW5pbXVtLmZvcm1hdCh1Lm1pbmltdW0pfX19Y2F0Y2gobil7cmV0dXJuIEJydXR1c2luRm9ybXMubWVzc2FnZXMuaW52YWxpZFZhbHVlfX0saS5vbmNoYW5nZT1mdW5jdGlvbigpe3ZhciBlO3RyeXtlPWdldFZhbHVlKHUsaSl9Y2F0Y2godCl7ZT1udWxsfXI/cltuLmdldFZhbHVlKCldPWU6ZGF0YT1lLG9uRGVwZW5kZW5jeUNoYW5nZWQobyxpKX0sdS5kZXNjcmlwdGlvbiYmKGkudGl0bGU9dS5kZXNjcmlwdGlvbixpLnBsYWNlaG9sZGVyPXUuZGVzY3JpcHRpb24pLGkub25jaGFuZ2UoKSxpLmlkPWdldElucHV0SWQoKSxpbnB1dENvdW50ZXIrKyxhcHBlbmRDaGlsZChlLGksdSkscn0scmVuZGVyZXJzW1wiYm9vbGVhblwiXT1mdW5jdGlvbihlLHQscixuLGEpe3ZhciBpLG89Z2V0U2NoZW1hSWQodCkscz1nZXRTY2hlbWEobyk7aWYocy5yZXF1aXJlZClpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxpLnR5cGU9XCJjaGVja2JveFwiLGE9PT0hMCYmKGkuY2hlY2tlZD0hMCk7ZWxzZXtpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7dmFyIHU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSxsPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpO2wudmFsdWU9XCJcIixhcHBlbmRDaGlsZCh1LGwscyksYXBwZW5kQ2hpbGQoaSx1LHMpO3ZhciBkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIikscD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzW1widHJ1ZVwiXSk7ZC52YWx1ZT1cInRydWVcIixhcHBlbmRDaGlsZChkLHAscyksYXBwZW5kQ2hpbGQoaSxkLHMpO3ZhciBjPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiksbT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzW1wiZmFsc2VcIl0pO2MudmFsdWU9XCJmYWxzZVwiLGFwcGVuZENoaWxkKGMsbSxzKSxhcHBlbmRDaGlsZChpLGMscyksYT09PSEwP2kuc2VsZWN0ZWRJbmRleD0xOmE9PT0hMSYmKGkuc2VsZWN0ZWRJbmRleD0yKX1pLm9uY2hhbmdlPWZ1bmN0aW9uKCl7cj9yW24uZ2V0VmFsdWUoKV09Z2V0VmFsdWUocyxpKTpkYXRhPWdldFZhbHVlKHMsaSksb25EZXBlbmRlbmN5Q2hhbmdlZChvLGkpfSxpLnNjaGVtYT1vLGkuaWQ9Z2V0SW5wdXRJZCgpLGlucHV0Q291bnRlcisrLHMuZGVzY3JpcHRpb24mJihpLnRpdGxlPXMuZGVzY3JpcHRpb24pLGkub25jaGFuZ2UoKSxhcHBlbmRDaGlsZChlLGkscyl9LHJlbmRlcmVycy5vbmVPZj1mdW5jdGlvbihlLHQscixuLGEpe3ZhciBpPWdldFNjaGVtYUlkKHQpLG89Z2V0U2NoZW1hKGkpLHM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKSx1PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dS5pbm5lckhUTUw9XCJcIixzLnR5cGU9XCJzZWxlY3RcIixzLnNjaGVtYT1pO3ZhciBsPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7bC52YWx1ZT1udWxsLGFwcGVuZENoaWxkKHMsbCxvKTtmb3IodmFyIGQ9MDtkPG8ub25lT2YubGVuZ3RoO2QrKyl7dmFyIHA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSxjPWkrXCIuXCIrZCxtPWdldFNjaGVtYShjKSxmPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG0udGl0bGUpO2lmKHAudmFsdWU9by5vbmVPZltkXSxhcHBlbmRDaGlsZChwLGYsbyksYXBwZW5kQ2hpbGQocyxwLG8pLHZvaWQgMCE9PWEmJm51bGwhPT1hJiYoby5yZWFkT25seSYmKHMuZGlzYWJsZWQ9ITApLGEuaGFzT3duUHJvcGVydHkoXCJ0eXBlXCIpJiZtLmhhc093blByb3BlcnR5KFwicHJvcGVydGllc1wiKSYmbS5wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KFwidHlwZVwiKSkpe3ZhciBoPWdldFNjaGVtYShtLnByb3BlcnRpZXMudHlwZSk7YS50eXBlPT09aFtcImVudW1cIl1bMF0mJihzLnNlbGVjdGVkSW5kZXg9ZCsxLHJlbmRlcihudWxsLHUsdCtcIi5cIisocy5zZWxlY3RlZEluZGV4LTEpLHIsbixhKSl9fXMub25jaGFuZ2U9ZnVuY3Rpb24oKXtyZW5kZXIobnVsbCx1LHQrXCIuXCIrKHMuc2VsZWN0ZWRJbmRleC0xKSxyLG4sYSl9LGFwcGVuZENoaWxkKGUscyxvKSxhcHBlbmRDaGlsZChlLHUsbyl9LHJlbmRlcmVycy5vYmplY3Q9ZnVuY3Rpb24oZSx0LHIsbixhKXtmdW5jdGlvbiBpKGUpe3ZhciB0PW5ldyBPYmplY3Q7cmV0dXJuIHQuZ2V0VmFsdWU9ZnVuY3Rpb24oKXtyZXR1cm4gZX0sdC5vbmNoYW5nZT1mdW5jdGlvbihlKXt9LHR9ZnVuY3Rpb24gbyhlLHQscixuLGEsaSl7dmFyIG89Z2V0U2NoZW1hSWQocikscz1nZXRTY2hlbWEobyksdT10LnRCb2RpZXNbMF0sbD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIiksZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7ZC5jbGFzc05hbWU9XCJhZGQtcHJvcC1uYW1lXCI7dmFyIHA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpLGM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpLG09ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpLGY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpLGg9XCIkXCIrT2JqZWN0LmtleXMoZSkubGVuZ3RoK1wiJFwiLHY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO3YuY2xhc3NOYW1lPVwicHJvcC12YWx1ZVwiO3ZhciBnPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtnLnR5cGU9XCJ0ZXh0XCI7dmFyIHk7aSYmKHk9UmVnRXhwKGkpKSxnLmdldFZhbGlkYXRpb25FcnJvcj1mdW5jdGlvbigpe3JldHVybiBnLnByZXZpb3VzVmFsdWUhPT1nLnZhbHVlJiZlLmhhc093blByb3BlcnR5KGcudmFsdWUpP0JydXR1c2luRm9ybXMubWVzc2FnZXMuYWRkcHJvcE5hbWVFeGlzdGVudDpnLnZhbHVlP3ZvaWQgMDpCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLmFkZHByb3BOYW1lUmVxdWlyZWR9O3ZhciBiPWNyZWF0ZVByb3BlcnR5UHJvdmlkZXIoZnVuY3Rpb24oKXtpZihnLnZhbHVlKXtpZigheSlyZXR1cm4gZy52YWx1ZTtpZigtMSE9PWcudmFsdWUuc2VhcmNoKHkpKXJldHVybiBnLnZhbHVlfXJldHVybiBofSxmdW5jdGlvbih0KXtiLmdldFZhbHVlKCkhPT10JiYodCYmZS5oYXNPd25Qcm9wZXJ0eSh0KXx8KHQ9aCksKGUuaGFzT3duUHJvcGVydHkodCl8fHkmJi0xPT09Yi5nZXRWYWx1ZSgpLnNlYXJjaCh5KSkmJihlW2IuZ2V0VmFsdWUoKV09ZVt0XSxkZWxldGUgZVt0XSkpfSk7Zy5vbmJsdXI9ZnVuY3Rpb24oKXtpZihnLnByZXZpb3VzVmFsdWUhPT1nLnZhbHVlKXtmb3IodmFyIHQ9Zy52YWx1ZSxyPTE7Zy5wcmV2aW91c1ZhbHVlIT09dCYmZS5oYXNPd25Qcm9wZXJ0eSh0KTspdD1nLnZhbHVlK1wiKFwiK3IrXCIpXCIscisrO3JldHVybiBnLnZhbHVlPXQsYi5vbmNoYW5nZShnLnByZXZpb3VzVmFsdWUpLHZvaWQoZy5wcmV2aW91c1ZhbHVlPWcudmFsdWUpfX07dmFyIFA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtQLnNldEF0dHJpYnV0ZShcInR5cGVcIixcImJ1dHRvblwiKSxQLmNsYXNzTmFtZT1cInJlbW92ZVwiLGFwcGVuZENoaWxkKFAsZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJ4XCIpLHMpLFAub25jbGljaz1mdW5jdGlvbigpe2RlbGV0ZSBlW2cudmFsdWVdLHQuZGVsZXRlUm93KGwucm93SW5kZXgpLGcudmFsdWU9bnVsbCxiLm9uY2hhbmdlKGcucHJldmlvdXNWYWx1ZSl9LGFwcGVuZENoaWxkKG0sZyxzKSxhcHBlbmRDaGlsZChmLFAscyksYXBwZW5kQ2hpbGQoYyxtLHMpLGFwcGVuZENoaWxkKGMsZixzKSxhcHBlbmRDaGlsZChwLGMscyksYXBwZW5kQ2hpbGQoZCxwLHMpLHZvaWQgMCE9PWkmJihnLnBsYWNlaG9sZGVyPWkpLGFwcGVuZENoaWxkKGwsZCxzKSxhcHBlbmRDaGlsZChsLHYscyksYXBwZW5kQ2hpbGQodSxsLHMpLGFwcGVuZENoaWxkKHQsdSxzKSxyZW5kZXIobnVsbCx2LHIsZSxiLGEpLG4mJihnLnZhbHVlPW4sZy5vbmJsdXIoKSl9dmFyIHM9Z2V0U2NoZW1hSWQodCksdT1nZXRTY2hlbWEocyksbD1uZXcgT2JqZWN0O3I/KG4uZ2V0VmFsdWUoKXx8MD09PW4uZ2V0VmFsdWUoKSkmJihyW24uZ2V0VmFsdWUoKV09bCk6ZGF0YT1sO3ZhciBkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtkLmNsYXNzTmFtZT1cIm9iamVjdFwiO3ZhciBwPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTthcHBlbmRDaGlsZChkLHAsdSk7dmFyIGM9MDtpZih1Lmhhc093blByb3BlcnR5KFwicHJvcGVydGllc1wiKSl7Yz11LnByb3BlcnRpZXMubGVuZ3RoO2Zvcih2YXIgbSBpbiB1LnByb3BlcnRpZXMpe3ZhciBmPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKSxoPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtoLmNsYXNzTmFtZT1cInByb3AtbmFtZVwiO3ZhciB2PXQrXCIuXCIrbSxnPWdldFNjaGVtYShnZXRTY2hlbWFJZCh2KSkseT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7eS5jbGFzc05hbWU9XCJwcm9wLXZhbHVlXCIsYXBwZW5kQ2hpbGQocCxmLGcpLGFwcGVuZENoaWxkKGYsaCxnKSxhcHBlbmRDaGlsZChmLHksZyk7dmFyIGI9aShtKSxQPW51bGw7YSYmKFA9YVttXSkscmVuZGVyKGgseSx2LGwsYixQKX19dmFyIE89W107aWYodS5wYXR0ZXJuUHJvcGVydGllc3x8dS5hZGRpdGlvbmFsUHJvcGVydGllcyl7dmFyIHc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtpZihhcHBlbmRDaGlsZCh3LGQsdSksdS5wYXR0ZXJuUHJvcGVydGllcylmb3IodmFyIHggaW4gdS5wYXR0ZXJuUHJvcGVydGllcyl7dmFyIEM9dS5wYXR0ZXJuUHJvcGVydGllc1t4XSxFPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7RS5jbGFzc05hbWU9XCJhZGQtcGF0dGVybi1kaXZcIjt2YXIgUz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO2lmKFMuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiYnV0dG9uXCIpLFMucGF0dGVybj14LFMuaWQ9dCtcIltcIit4K1wiXVwiLFMub25jbGljaz1mdW5jdGlvbigpe28obCxkLHRoaXMuaWQsdm9pZCAwLHZvaWQgMCx0aGlzLnBhdHRlcm4pfSwodS5tYXhQcm9wZXJ0aWVzfHx1Lm1pblByb3BlcnRpZXMpJiYoUy5nZXRWYWxpZGF0aW9uRXJyb3I9ZnVuY3Rpb24oKXtyZXR1cm4gdS5taW5Qcm9wZXJ0aWVzJiZjK2Qucm93cy5sZW5ndGg8dS5taW5Qcm9wZXJ0aWVzP0JydXR1c2luRm9ybXMubWVzc2FnZXMubWluUHJvcGVydGllcy5mb3JtYXQodS5taW5Qcm9wZXJ0aWVzKTp1Lm1heFByb3BlcnRpZXMmJmMrZC5yb3dzLmxlbmd0aD51Lm1heFByb3BlcnRpZXM/QnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5tYXhQcm9wZXJ0aWVzLmZvcm1hdCh1Lm1heFByb3BlcnRpZXMpOnZvaWQgMH0pLEMuZGVzY3JpcHRpb24mJihTLnRpdGxlPUMuZGVzY3JpcHRpb24pLGFwcGVuZENoaWxkKFMsZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJBZGQgXCIreCksdSksYXBwZW5kQ2hpbGQoRSxTLHUpLGEpZm9yKHZhciBJIGluIGEpaWYoIXUucHJvcGVydGllc3x8IXUucHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShJKSl7dmFyIE49UmVnRXhwKHgpOy0xIT09SS5zZWFyY2goTikmJi0xPT09Ty5pbmRleE9mKEkpJiYobyhsLGQsdCtcIltcIit4K1wiXVwiLEksYVtJXSx4KSxPLnB1c2goSSkpfWFwcGVuZENoaWxkKHcsRSx1KX1pZih1LmFkZGl0aW9uYWxQcm9wZXJ0aWVzKXt2YXIgRj1nZXRTY2hlbWEodS5hZGRpdGlvbmFsUHJvcGVydGllcyksUz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO2lmKFMuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiYnV0dG9uXCIpLFMub25jbGljaz1mdW5jdGlvbigpe28obCxkLHQrXCJbKl1cIix2b2lkIDApfSwodS5tYXhQcm9wZXJ0aWVzfHx1Lm1pblByb3BlcnRpZXMpJiYoUy5nZXRWYWxpZGF0aW9uRXJyb3I9ZnVuY3Rpb24oKXtyZXR1cm4gdS5taW5Qcm9wZXJ0aWVzJiZjK2Qucm93cy5sZW5ndGg8dS5taW5Qcm9wZXJ0aWVzP0JydXR1c2luRm9ybXMubWVzc2FnZXMubWluUHJvcGVydGllcy5mb3JtYXQodS5taW5Qcm9wZXJ0aWVzKTp1Lm1heFByb3BlcnRpZXMmJmMrZC5yb3dzLmxlbmd0aD51Lm1heFByb3BlcnRpZXM/QnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5tYXhQcm9wZXJ0aWVzLmZvcm1hdCh1Lm1heFByb3BlcnRpZXMpOnZvaWQgMH0pLEYuZGVzY3JpcHRpb24mJihTLnRpdGxlPUYuZGVzY3JpcHRpb24pLGFwcGVuZENoaWxkKFMsZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJBZGRcIiksdSksYXBwZW5kQ2hpbGQodyxTLHUpLGEpZm9yKHZhciBJIGluIGEpdS5wcm9wZXJ0aWVzJiZ1LnByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoSSl8fC0xPT09Ty5pbmRleE9mKEkpJiZvKGwsZCx0KydbXCInK20rJ1wiXScsSSxhW0ldKX1hcHBlbmRDaGlsZChlLHcsdSl9ZWxzZSBhcHBlbmRDaGlsZChlLGQsdSl9LHJlbmRlcmVycy5hcnJheT1mdW5jdGlvbihlLHQscixuLGEpe2Z1bmN0aW9uIGkoZSx0LHIsbixhKXt2YXIgaT1nZXRTY2hlbWFJZChyKSxvPWdldFNjaGVtYShpKSxzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKSx1PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTt1LmNsYXNzTmFtZT1cIml0ZW1cIjt2YXIgbD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7bC5jbGFzc05hbWU9XCJpdGVtLWluZGV4XCI7dmFyIGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO2QuY2xhc3NOYW1lPVwiaXRlbS1hY3Rpb25cIjt2YXIgcD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7cC5jbGFzc05hbWU9XCJpdGVtLXZhbHVlXCI7dmFyIGM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtjLnNldEF0dHJpYnV0ZShcInR5cGVcIixcImJ1dHRvblwiKSxjLmNsYXNzTmFtZT1cInJlbW92ZVwiLGE9PT0hMCYmKGMuZGlzYWJsZWQ9ITApLGFwcGVuZENoaWxkKGMsZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJ4XCIpLG8pO3ZhciBtPWZ1bmN0aW9uKCl7Zm9yKHZhciBlPTA7ZTx0LnJvd3MubGVuZ3RoO2UrKyl7dmFyIHI9dC5yb3dzW2VdO3IuY2VsbHNbMF0uaW5uZXJIVE1MPWUrMX19O2Mub25jbGljaz1mdW5jdGlvbigpe2Uuc3BsaWNlKHUucm93SW5kZXgsMSksdC5kZWxldGVSb3codS5yb3dJbmRleCksbSgpfSxhcHBlbmRDaGlsZChkLGMsbyk7dmFyIGY9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodC5yb3dzLmxlbmd0aCsxKTthcHBlbmRDaGlsZChsLGYsbyksYXBwZW5kQ2hpbGQodSxsLG8pLGFwcGVuZENoaWxkKHUsZCxvKSxhcHBlbmRDaGlsZCh1LHAsbyksYXBwZW5kQ2hpbGQocyx1LG8pLGFwcGVuZENoaWxkKHQscyxvKTt2YXIgaD1jcmVhdGVQcm9wZXJ0eVByb3ZpZGVyKGZ1bmN0aW9uKCl7cmV0dXJuIHUucm93SW5kZXh9KTtyZW5kZXIobnVsbCxwLHIsZSxoLG4pfXZhciBvPWdldFNjaGVtYUlkKHQpLHM9Z2V0U2NoZW1hKG8pLHU9Z2V0U2NoZW1hKHMuaXRlbXMpLGw9bmV3IEFycmF5O3I/KG4uZ2V0VmFsdWUoKXx8MD09PW4uZ2V0VmFsdWUoKSkmJihyW24uZ2V0VmFsdWUoKV09bCk6ZGF0YT1sLG4mJihuLm9uY2hhbmdlPWZ1bmN0aW9uKGUpe2RlbGV0ZSByW2VdLHJbbi5nZXRWYWx1ZSgpXT1sfSk7dmFyIGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxwPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtwLmNsYXNzTmFtZT1cImFycmF5XCIsYXBwZW5kQ2hpbGQoZCxwLHMpLGFwcGVuZENoaWxkKGUsZCxzKTt2YXIgYz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO2lmKHMucmVhZE9ubHkmJihjLmRpc2FibGVkPSEwKSxjLnNldEF0dHJpYnV0ZShcInR5cGVcIixcImJ1dHRvblwiKSxjLmdldFZhbGlkYXRpb25FcnJvcj1mdW5jdGlvbigpe2lmKHMubWluSXRlbXMmJnMubWluSXRlbXM+cC5yb3dzLmxlbmd0aClyZXR1cm4gQnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy5taW5JdGVtcy5mb3JtYXQocy5taW5JdGVtcyk7aWYocy5tYXhJdGVtcyYmcy5tYXhJdGVtczxwLnJvd3MubGVuZ3RoKXJldHVybiBCcnV0dXNpbkZvcm1zLm1lc3NhZ2VzLm1heEl0ZW1zLmZvcm1hdChzLm1heEl0ZW1zKTtpZihzLnVuaXF1ZUl0ZW1zKWZvcih2YXIgZT0wO2U8bC5sZW5ndGg7ZSsrKWZvcih2YXIgdD1lKzE7dDxsLmxlbmd0aDt0KyspaWYoSlNPTi5zdHJpbmdpZnkobFtlXSk9PT1KU09OLnN0cmluZ2lmeShsW3RdKSlyZXR1cm4gQnJ1dHVzaW5Gb3Jtcy5tZXNzYWdlcy51bmlxdWVJdGVtc30sYy5vbmNsaWNrPWZ1bmN0aW9uKCl7aShsLHAsdCtcIlsjXVwiLG51bGwpfSx1LmRlc2NyaXB0aW9uJiYoYy50aXRsZT11LmRlc2NyaXB0aW9uKSxhcHBlbmRDaGlsZChjLGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKEJydXR1c2luRm9ybXMubWVzc2FnZXMuYWRkSXRlbSkscyksYXBwZW5kQ2hpbGQoZCxwLHMpLGFwcGVuZENoaWxkKGQsYyxzKSxhJiZhIGluc3RhbmNlb2YgQXJyYXkpZm9yKHZhciBtPTA7bTxhLmxlbmd0aDttKyspaShsLHAsdCtcIltcIittK1wiXVwiLGFbbV0scy5yZWFkT25seSk7YXBwZW5kQ2hpbGQoZSxkLHMpfSxvYmoucmVuZGVyPWZ1bmN0aW9uKGUsdCl7Y29udGFpbmVyPWUsaW5pdGlhbFZhbHVlPXQ7dmFyIHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7aWYoci5jbGFzc05hbWU9XCJicnV0dXNpbi1mb3JtXCIsci5vbnN1Ym1pdD1mdW5jdGlvbihlKXtyZXR1cm4hMX0sY29udGFpbmVyP2FwcGVuZENoaWxkKGNvbnRhaW5lcixyKTphcHBlbmRDaGlsZChkb2N1bWVudC5ib2R5LHIpLGVycm9yKXt2YXIgbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiksYT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShlcnJvcik7YXBwZW5kQ2hpbGQobixhKSxuLmNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2VcIixhcHBlbmRDaGlsZChyLG4pfWVsc2UgcmVuZGVyKG51bGwscixcIiRcIixudWxsLG51bGwpO2RlcGVuZGVuY3lNYXAuaGFzT3duUHJvcGVydHkoXCIkXCIpJiZvbkRlcGVuZGVuY3lDaGFuZ2VkKFwiJFwiKSxCcnV0dXNpbkZvcm1zLnBvc3RSZW5kZXImJkJydXR1c2luRm9ybXMucG9zdFJlbmRlcihvYmopfSxvYmouZ2V0UmVuZGVyaW5nQ29udGFpbmVyPWZ1bmN0aW9uKCl7cmV0dXJuIGNvbnRhaW5lcn0sb2JqLnZhbGlkYXRlPWZ1bmN0aW9uKCl7cmV0dXJuIHZhbGlkYXRlKGNvbnRhaW5lcil9LG9iai5nZXREYXRhPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LHIpe2lmKG51bGw9PT1zJiYocz1TQ0hFTUFfQU5ZKSxyLiRyZWYmJihyPWdldERlZmluaXRpb24oci4kcmVmKSksdCBpbnN0YW5jZW9mIEFycmF5KXtpZigwPT09dC5sZW5ndGgpcmV0dXJuIG51bGw7Zm9yKHZhciBuPW5ldyBBcnJheSxhPTA7YTx0Lmxlbmd0aDthKyspblthXT1lKHRbYV0sci5pdGVtcyk7cmV0dXJuIG59aWYoXCJcIj09PXQpcmV0dXJuIG51bGw7aWYodCBpbnN0YW5jZW9mIE9iamVjdCl7dmFyIG49bmV3IE9iamVjdCxpPSExO2Zvcih2YXIgbyBpbiB0KWlmKCFvLnN0YXJ0c1dpdGgoXCIkXCIpfHwhby5lbmRzV2l0aChcIiRcIikpe3ZhciBzPW51bGw7aWYoci5oYXNPd25Qcm9wZXJ0eShcInByb3BlcnRpZXNcIikmJnIucHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShvKSYmKHM9ci5wcm9wZXJ0aWVzW29dKSxudWxsPT09cyYmci5oYXNPd25Qcm9wZXJ0eShcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCIpJiZcIm9iamVjdFwiPT10eXBlb2Ygci5hZGRpdGlvbmFsUHJvcGVydGllcyYmKHM9ci5hZGRpdGlvbmFsUHJvcGVydGllcyksbnVsbD09PXMmJnIuaGFzT3duUHJvcGVydHkoXCJwYXR0ZXJuUHJvcGVydGllc1wiKSlmb3IodmFyIHUgaW4gci5wYXR0ZXJuUHJvcGVydGllcyl7dmFyIGw9UmVnRXhwKHUpO2lmKC0xIT09by5zZWFyY2gobCkpe3M9ci5wYXR0ZXJuUHJvcGVydGllc1t1XTticmVha319dmFyIGQ9ZSh0W29dLHMpO251bGwhPT1kJiYobltvXT1kLGk9ITApfXJldHVybiBpfHxyLnJlcXVpcmVkP246bnVsbH1yZXR1cm4gdH1yZXR1cm4gY29udGFpbmVyP2UoZGF0YSxzY2hlbWEpOm51bGx9LEJydXR1c2luRm9ybXMuaW5zdGFuY2VzW0JydXR1c2luRm9ybXMuaW5zdGFuY2VzLmxlbmd0aF09b2JqLG9ian0sYnJ1dHVzaW5bXCJqc29uLWZvcm1zXCJdPUJydXR1c2luRm9ybXN9KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JydXR1c2luLWpzb24tZm9ybXMvZGlzdC9qcy9icnV0dXNpbi1qc29uLWZvcm1zLm1pbi5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9iYXNlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIiFmdW5jdGlvbihmKXtpZihcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSltb2R1bGUuZXhwb3J0cz1mKCk7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKFtdLGYpO2Vsc2V7KFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OlwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWw/Z2xvYmFsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3NlbGY6dGhpcykuTWV0ZW9yRW1vamk9ZigpfX0oZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG58fGUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfWZvcih2YXIgaT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSh7MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7IWZ1bmN0aW9uKGdsb2JhbCxmYWN0b3J5KXtpZih2b2lkIDAhPT1leHBvcnRzKWZhY3RvcnkobW9kdWxlKTtlbHNle3ZhciBtb2Q9e2V4cG9ydHM6e319O2ZhY3RvcnkobW9kKSxnbG9iYWwubWV0ZW9yRW1vamk9bW9kLmV4cG9ydHN9fSh0aGlzLGZ1bmN0aW9uKG1vZHVsZSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIF9jcmVhdGVDbGFzcz1mdW5jdGlvbigpe2Z1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LHByb3BzKXtmb3IodmFyIGk9MDtpPHByb3BzLmxlbmd0aDtpKyspe3ZhciBkZXNjcmlwdG9yPXByb3BzW2ldO2Rlc2NyaXB0b3IuZW51bWVyYWJsZT1kZXNjcmlwdG9yLmVudW1lcmFibGV8fCExLGRlc2NyaXB0b3IuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIGRlc2NyaXB0b3ImJihkZXNjcmlwdG9yLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LGRlc2NyaXB0b3Iua2V5LGRlc2NyaXB0b3IpfX1yZXR1cm4gZnVuY3Rpb24oQ29uc3RydWN0b3IscHJvdG9Qcm9wcyxzdGF0aWNQcm9wcyl7cmV0dXJuIHByb3RvUHJvcHMmJmRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLHByb3RvUHJvcHMpLHN0YXRpY1Byb3BzJiZkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLHN0YXRpY1Byb3BzKSxDb25zdHJ1Y3Rvcn19KCksTWV0ZW9yRW1vamk9ZnVuY3Rpb24oKXtmdW5jdGlvbiBNZXRlb3JFbW9qaSgpeyFmdW5jdGlvbihpbnN0YW5jZSxDb25zdHJ1Y3Rvcil7aWYoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfSh0aGlzLE1ldGVvckVtb2ppKSx0aGlzLmluaXRpYXRlKCl9cmV0dXJuIF9jcmVhdGVDbGFzcyhNZXRlb3JFbW9qaSxbe2tleTpcImluaXRpYXRlXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgX3RoaXM9dGhpcztkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tZXRlb3ItZW1vamk9XCJ0cnVlXCJdLCBbZGF0YS1tZXRlb3ItZW1vamktbGFyZ2U9XCJ0cnVlXCJdJykuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KXtfdGhpcy5nZW5lcmF0ZUVsZW1lbnRzKGVsZW1lbnQpfSl9fSx7a2V5OlwiZ2VuZXJhdGVFbGVtZW50c1wiLHZhbHVlOmZ1bmN0aW9uKGVtb2ppSW5wdXQpe3ZhciBjbGlja0xpbms9ZnVuY3Rpb24oZXZlbnQpe3ZhciBjYXJldFBvcz1lbW9qaUlucHV0LnNlbGVjdGlvblN0YXJ0O2Vtb2ppSW5wdXQudmFsdWU9ZW1vamlJbnB1dC52YWx1ZS5zdWJzdHJpbmcoMCxjYXJldFBvcykrXCIgXCIrZXZlbnQudGFyZ2V0LmlubmVySFRNTCtlbW9qaUlucHV0LnZhbHVlLnN1YnN0cmluZyhjYXJldFBvcyksZW1vamlQaWNrZXIuc3R5bGUuZGlzcGxheT1cImJsb2NrXCIsXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGFuZ3VsYXImJmFuZ3VsYXIuZWxlbWVudChlbW9qaUlucHV0KS50cmlnZ2VySGFuZGxlcihcImNoYW5nZVwiKX0sY2xpY2tDYXRlZ29yeT1mdW5jdGlvbihldmVudCl7ZW1vamlJbnB1dC5zZWxlY3Rpb25TdGFydDtlbW9qaVBpY2tlci5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtmb3IodmFyIGhpZGVVbHM9ZW1vamlQaWNrZXIucXVlcnlTZWxlY3RvckFsbChcInVsXCIpLGk9MSxsPWhpZGVVbHMubGVuZ3RoO2k8bDtpKyspaGlkZVVsc1tpXS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO3ZhciBiYWNrZ3JvdW5kVG9nZ2xlPWVtb2ppUGlja2VyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2F0ZWdvcnkgYVwiKTtmb3IoaT0wLGw9YmFja2dyb3VuZFRvZ2dsZS5sZW5ndGg7aTxsO2krKyliYWNrZ3JvdW5kVG9nZ2xlW2ldLnN0eWxlLmJhY2tncm91bmQ9XCJub25lXCI7ZW1vamlQaWNrZXIucXVlcnlTZWxlY3RvcihcIi5cIitldmVudC50YXJnZXQuaWQpLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiLGVtb2ppUGlja2VyLnF1ZXJ5U2VsZWN0b3IoXCIjXCIrZXZlbnQudGFyZ2V0LmlkKS5zdHlsZS5iYWNrZ3JvdW5kPVwiI2MyYzJjMlwifTtlbW9qaUlucHV0LnN0eWxlLndpZHRoPVwiMTAwJVwiO3ZhciBlbW9qaUNvbnRhaW5lcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2Vtb2ppQ29udGFpbmVyLnN0eWxlLnBvc2l0aW9uPVwicmVsYXRpdmVcIixlbW9qaUlucHV0LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGVtb2ppQ29udGFpbmVyLGVtb2ppSW5wdXQpLGVtb2ppQ29udGFpbmVyLmFwcGVuZENoaWxkKGVtb2ppSW5wdXQpO3ZhciBlbW9qaVBpY2tlcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2Vtb2ppUGlja2VyLnRhYkluZGV4PTAsZW1vamlJbnB1dC5oYXNBdHRyaWJ1dGUoXCJkYXRhLW1ldGVvci1lbW9qaS1sYXJnZVwiKT8oZW1vamlQaWNrZXIuc3R5bGUuekluZGV4PVwiOTk5XCIsZW1vamlQaWNrZXIuc3R5bGUuZGlzcGxheT1cImJsb2NrXCIsZW1vamlQaWNrZXIuc3R5bGUud2lkdGg9XCIxMDAlXCIsZW1vamlQaWNrZXIuc3R5bGUubWFyZ2luQm90dG9tPVwiMTVweFwiKTooZW1vamlQaWNrZXIuc3R5bGUucG9zaXRpb249XCJhYnNvbHV0ZVwiLGVtb2ppUGlja2VyLnN0eWxlLnJpZ2h0PVwiMHB4XCIsZW1vamlQaWNrZXIuc3R5bGUudG9wPVwiMzBweFwiLGVtb2ppUGlja2VyLnN0eWxlLmRpc3BsYXk9XCJub25lXCIsZW1vamlQaWNrZXIuc3R5bGUud2lkdGg9XCI0MDBweFwiKSxlbW9qaVBpY2tlci5zdHlsZS56SW5kZXg9XCI5OTlcIixlbW9qaVBpY2tlci5zdHlsZS5vdmVyZmxvdz1cImhpZGRlblwiLGVtb2ppUGlja2VyLnN0eWxlLmJhY2tncm91bmQ9XCIjZmZmXCIsZW1vamlQaWNrZXIuc3R5bGUuYm9yZGVyUmFkaXVzPVwiNXB4XCIsZW1vamlQaWNrZXIuc3R5bGUuYm94U2hhZG93PVwiMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMjMpXCIsZW1vamlQaWNrZXIuc3R5bGUuYm9yZGVyUmFkaXVzPVwiMnB4O1wiLGVtb2ppUGlja2VyLnN0eWxlLm1hcmdpblRvcD1cIjVweFwiLGVtb2ppUGlja2VyLnN0eWxlLm91dGxpbmU9XCJub25lXCI7dmFyIGVtb2ppVHJpZ2dlcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtlbW9qaVRyaWdnZXIuc3R5bGUucG9zaXRpb249XCJhYnNvbHV0ZVwiLGVtb2ppVHJpZ2dlci5zdHlsZS50b3A9XCIxMHB4XCIsZW1vamlUcmlnZ2VyLnN0eWxlLnJpZ2h0PVwiMTBweFwiLGVtb2ppVHJpZ2dlci5zdHlsZS50ZXh0RGVjb3JhdGlvbj1cIm5vbmVcIixlbW9qaVRyaWdnZXIuc2V0QXR0cmlidXRlKFwiaHJlZlwiLFwiamF2YXNjcmlwdDp2b2lkKDApXCIpLGVtb2ppVHJpZ2dlci5pbm5lckhUTUw9JzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMTIgMTRcIj48cGF0aCBkPVwiTTguOSA4LjRxLTAuMyAwLjktMS4xIDEuNXQtMS44IDAuNi0xLjgtMC42LTEuMS0xLjVxLTAuMS0wLjIgMC0wLjR0MC4zLTAuMnEwLjItMC4xIDAuNCAwdDAuMiAwLjNxMC4yIDAuNiAwLjcgMXQxLjIgMC40IDEuMi0wLjQgMC43LTFxMC4xLTAuMiAwLjMtMC4zdDAuNCAwIDAuMyAwLjIgMCAwLjR6TTUgNXEwIDAuNC0wLjMgMC43dC0wLjcgMC4zLTAuNy0wLjMtMC4zLTAuNyAwLjMtMC43IDAuNy0wLjMgMC43IDAuMyAwLjMgMC43ek05IDVxMCAwLjQtMC4zIDAuN3QtMC43IDAuMy0wLjctMC4zLTAuMy0wLjcgMC4zLTAuNyAwLjctMC4zIDAuNyAwLjMgMC4zIDAuN3pNMTEgN3EwLTEtMC40LTEuOXQtMS4xLTEuNi0xLjYtMS4xLTEuOS0wLjQtMS45IDAuNC0xLjYgMS4xLTEuMSAxLjYtMC40IDEuOSAwLjQgMS45IDEuMSAxLjYgMS42IDEuMSAxLjkgMC40IDEuOS0wLjQgMS42LTEuMSAxLjEtMS42IDAuNC0xLjl6TTEyIDdxMCAxLjYtMC44IDN0LTIuMiAyLjItMyAwLjgtMy0wLjgtMi4yLTIuMi0wLjgtMyAwLjgtMyAyLjItMi4yIDMtMC44IDMgMC44IDIuMiAyLjIgMC44IDN6XCIvPjwvc3ZnPicsZW1vamlUcmlnZ2VyLm9uY2xpY2s9ZnVuY3Rpb24oKXtcIm5vbmVcIj09PWVtb2ppUGlja2VyLnN0eWxlLmRpc3BsYXk/ZW1vamlQaWNrZXIuc3R5bGUuZGlzcGxheT1cImJsb2NrXCI6XCJibG9ja1wiPT09ZW1vamlQaWNrZXIuc3R5bGUuZGlzcGxheSYmKGVtb2ppUGlja2VyLnN0eWxlLmRpc3BsYXk9XCJub25lXCIpLGVtb2ppUGlja2VyLmZvY3VzKCl9LGVtb2ppSW5wdXQuaGFzQXR0cmlidXRlKFwiZGF0YS1tZXRlb3ItZW1vamktbGFyZ2VcIil8fGVtb2ppQ29udGFpbmVyLmFwcGVuZENoaWxkKGVtb2ppVHJpZ2dlciksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKGUpe2Vtb2ppSW5wdXQuaGFzQXR0cmlidXRlKFwiZGF0YS1tZXRlb3ItZW1vamktbGFyZ2VcIil8fFwiYmxvY2tcIj09PWVtb2ppUGlja2VyLnN0eWxlLmRpc3BsYXkmJihlbW9qaVBpY2tlci5jb250YWlucyhlLnRhcmdldCl8fGVtb2ppVHJpZ2dlci5jb250YWlucyhlLnRhcmdldCl8fChlbW9qaVBpY2tlci5zdHlsZS5kaXNwbGF5PVwibm9uZVwiKSl9KTt2YXIgZmFjZXNDYXRlZ29yeT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7ZmFjZXNDYXRlZ29yeS5zdHlsZS5wYWRkaW5nPVwiMTBweCAwcHhcIixmYWNlc0NhdGVnb3J5LnN0eWxlLm1hcmdpbj1cIjBcIixmYWNlc0NhdGVnb3J5LnN0eWxlLmxpc3RTdHlsZT1cIm5vbmVcIixmYWNlc0NhdGVnb3J5LnN0eWxlLnRleHRBbGlnbj1cImxlZnRcIixmYWNlc0NhdGVnb3J5LnN0eWxlLm1hcmdpbkxlZnQ9XCIzJVwiLGZhY2VzQ2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChcImZhY2VzXCIpO3ZhciBhbmltYWxzQ2F0ZWdvcnk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO2FuaW1hbHNDYXRlZ29yeS5zdHlsZS5wYWRkaW5nPVwiMTBweCAwcHhcIixhbmltYWxzQ2F0ZWdvcnkuc3R5bGUubWFyZ2luPVwiMFwiLGFuaW1hbHNDYXRlZ29yeS5zdHlsZS5saXN0U3R5bGU9XCJub25lXCIsYW5pbWFsc0NhdGVnb3J5LnN0eWxlLnRleHRBbGlnbj1cImxlZnRcIixhbmltYWxzQ2F0ZWdvcnkuc3R5bGUubWFyZ2luTGVmdD1cIjMlXCIsYW5pbWFsc0NhdGVnb3J5LmNsYXNzTGlzdC5hZGQoXCJhbmltYWxzXCIpLGFuaW1hbHNDYXRlZ29yeS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO3ZhciBmb29kQ2F0ZWdvcnk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO2Zvb2RDYXRlZ29yeS5zdHlsZS5wYWRkaW5nPVwiMTBweCAwcHhcIixmb29kQ2F0ZWdvcnkuc3R5bGUubWFyZ2luPVwiMFwiLGZvb2RDYXRlZ29yeS5zdHlsZS5saXN0U3R5bGU9XCJub25lXCIsZm9vZENhdGVnb3J5LnN0eWxlLnRleHRBbGlnbj1cImxlZnRcIixmb29kQ2F0ZWdvcnkuc3R5bGUubWFyZ2luTGVmdD1cIjMlXCIsZm9vZENhdGVnb3J5LmNsYXNzTGlzdC5hZGQoXCJmb29kXCIpLGZvb2RDYXRlZ29yeS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO3ZhciBzcG9ydENhdGVnb3J5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtzcG9ydENhdGVnb3J5LnN0eWxlLnBhZGRpbmc9XCIxMHB4IDBweFwiLHNwb3J0Q2F0ZWdvcnkuc3R5bGUubWFyZ2luPVwiMFwiLHNwb3J0Q2F0ZWdvcnkuc3R5bGUubGlzdFN0eWxlPVwibm9uZVwiLHNwb3J0Q2F0ZWdvcnkuc3R5bGUudGV4dEFsaWduPVwibGVmdFwiLHNwb3J0Q2F0ZWdvcnkuc3R5bGUubWFyZ2luTGVmdD1cIjMlXCIsc3BvcnRDYXRlZ29yeS5jbGFzc0xpc3QuYWRkKFwic3BvcnRcIiksc3BvcnRDYXRlZ29yeS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO3ZhciB0cmFuc3BvcnRDYXRlZ29yeT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7dHJhbnNwb3J0Q2F0ZWdvcnkuc3R5bGUucGFkZGluZz1cIjEwcHggMHB4XCIsdHJhbnNwb3J0Q2F0ZWdvcnkuc3R5bGUubWFyZ2luPVwiMFwiLHRyYW5zcG9ydENhdGVnb3J5LnN0eWxlLmxpc3RTdHlsZT1cIm5vbmVcIix0cmFuc3BvcnRDYXRlZ29yeS5zdHlsZS50ZXh0QWxpZ249XCJsZWZ0XCIsdHJhbnNwb3J0Q2F0ZWdvcnkuc3R5bGUubWFyZ2luTGVmdD1cIjMlXCIsdHJhbnNwb3J0Q2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChcInRyYW5zcG9ydFwiKSx0cmFuc3BvcnRDYXRlZ29yeS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO3ZhciBvYmplY3RzQ2F0ZWdvcnk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO29iamVjdHNDYXRlZ29yeS5zdHlsZS5wYWRkaW5nPVwiMTBweCAwcHhcIixvYmplY3RzQ2F0ZWdvcnkuc3R5bGUubWFyZ2luPVwiMFwiLG9iamVjdHNDYXRlZ29yeS5zdHlsZS5saXN0U3R5bGU9XCJub25lXCIsb2JqZWN0c0NhdGVnb3J5LnN0eWxlLnRleHRBbGlnbj1cImxlZnRcIixvYmplY3RzQ2F0ZWdvcnkuc3R5bGUubWFyZ2luTGVmdD1cIjMlXCIsb2JqZWN0c0NhdGVnb3J5LmNsYXNzTGlzdC5hZGQoXCJvYmplY3RzXCIpLG9iamVjdHNDYXRlZ29yeS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO3ZhciBlbW9qaUNhdGVnb3J5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtlbW9qaUNhdGVnb3J5LnN0eWxlLnBhZGRpbmc9XCIwcHhcIixlbW9qaUNhdGVnb3J5LnN0eWxlLm1hcmdpbj1cIjBcIixlbW9qaUNhdGVnb3J5LnN0eWxlLmRpc3BsYXk9XCJ0YWJsZVwiLGVtb2ppQ2F0ZWdvcnkuc3R5bGUud2lkdGg9XCIxMDAlXCIsZW1vamlDYXRlZ29yeS5zdHlsZS5iYWNrZ3JvdW5kPVwiI2VmZjBmMVwiLGVtb2ppQ2F0ZWdvcnkuc3R5bGUubGlzdFN0eWxlPVwibm9uZVwiLGVtb2ppQ2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChcImNhdGVnb3J5XCIpO3ZhciBlbW9qaUNhdGVnb3JpZXM9bmV3IEFycmF5O2Vtb2ppQ2F0ZWdvcmllcy5wdXNoKHtuYW1lOlwiZmFjZXNcIixzdmc6JzxzdmcgaWQ9XCJmYWNlc1wiIGRhdGEtbmFtZT1cIkxheWVyIDFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAxNTAgMTUwXCI+PHBhdGggaWQ9XCJmYWNlc1wiIGQ9XCJNNzQuMzQsMTI4LjQ4YTUzLjUsNTMuNSwwLDEsMSwzNy44NC0xNS42Nyw1My4xNiw1My4xNiwwLDAsMS0zNy44NCwxNS42N1ptMC05Ny44OWE0NC40LDQ0LjQsMCwxLDAsMzEuNCwxMyw0NC4wNyw0NC4wNywwLDAsMC0zMS40LTEzWlwiLz48cGF0aCBpZD1cImZhY2VzXCIgZD1cIk03NC4zNSwxMDhBMzMuMDcsMzMuMDcsMCwwLDEsNDEuMjksNzVhMi4yOCwyLjI4LDAsMCwxLDIuMjctMi4yOGgwQTIuMjcsMi4yNywwLDAsMSw0NS44Myw3NWEyOC41MiwyOC41MiwwLDAsMCw1NywwLDIuMjcsMi4yNywwLDAsMSw0LjU0LDBBMzMuMDksMzMuMDksMCwwLDEsNzQuMzUsMTA4WlwiLz48cGF0aCBpZD1cImZhY2VzXCIgZD1cIk01OC44NCw2MmE2LjgxLDYuODEsMCwxLDAsNi44MSw2LjgxQTYuODEsNi44MSwwLDAsMCw1OC44NCw2MlpcIi8+PHBhdGggaWQ9XCJmYWNlc1wiIGQ9XCJNODkuODcsNjJhNi44MSw2LjgxLDAsMSwwLDYuODEsNi44MUE2LjgyLDYuODIsMCwwLDAsODkuODcsNjJaXCIvPjwvc3ZnPid9KSxlbW9qaUNhdGVnb3JpZXMucHVzaCh7bmFtZTpcImFuaW1hbHNcIixzdmc6JzxzdmcgaWQ9XCJhbmltYWxzXCIgZGF0YS1uYW1lPVwiTGF5ZXIgMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDE1MCAxNTBcIj48cGF0aCBpZD1cImFuaW1hbHNcIiBkPVwiTTU5LjksOTEuNzVoMGMtMjIuNDYsMC00MS44Mi0xOS4zNC00NC4wOS00NEE1Mi4xLDUyLjEsMCwwLDEsMTYsMzYuOGE0LjUxLDQuNTEsMCwwLDEsMi42My0zLjYyLDM5Ljc5LDM5Ljc5LDAsMCwxLDEyLjc0LTMuMzdjMjMuOTItMi4xNSw0NS4zNSwxNy44Myw0Ny43NCw0My44NmE1Mi43Nyw1Mi43NywwLDAsMS0uMTUsMTAuOTMsNC41Niw0LjU2LDAsMCwxLTIuNjQsMy42MiwzOS42NywzOS42NywwLDAsMS0xMi43MywzLjM2Yy0xLjIzLjExLTIuNDUuMTctMy42Ni4xN1pNMjQuNzYsNDAuNDlhNDEuMjksNDEuMjksMCwwLDAsLjA5LDYuNEMyNi43LDY3LDQyLjA5LDgyLjY2LDU5LjksODIuNjdoMGMuOTQsMCwxLjg4LDAsMi44My0uMTRhMzAuMzksMzAuMzksMCwwLDAsNy40MS0xLjYyLDQxLjE0LDQxLjE0LDAsMCwwLS4xMS02LjRDNjguMDksNTMuMzgsNTEuMTEsMzcuMDgsMzIuMTcsMzguODZhMzAuNzgsMzAuNzgsMCwwLDAtNy40MSwxLjYzWlwiLz48cGF0aCBpZD1cImFuaW1hbHNcIiBkPVwiTTM2LjY4LDEyNS42NGE0LjUzLDQuNTMsMCwwLDEtNC4zMy0zLjE3LDUzLjMyLDUzLjMyLDAsMCwxLTIuMjYtMTFBNTAuNDIsNTAuNDIsMCwwLDEsMzkuNTEsNzYuNmM3LjM1LTkuOTEsMTcuODQtMTYsMjkuNS0xNywxLjE2LS4xMSwyLjMzLS4xMywzLjQ3LS4xM2E0LjU0LDQuNTQsMCwwLDEsNC4zMywzLjE2LDUxLjU5LDUxLjU5LDAsMCwxLDIuMjcsMTEuMDgsNTAuMzksNTAuMzksMCwwLDEtOS40MiwzNC44Yy03LjM1LDkuOTEtMTcuODMsMTYtMjkuNSwxN2ExNy42MywxNy42MywwLDAsMS0zLjQ4LjEyWk02OS4wOSw2OC42OUEzMi40MSwzMi40MSwwLDAsMCw0Ni44LDgyYTQyLjU3LDQyLjU3LDAsMCwwLTYuNzEsMzQuMzgsMzIuMzgsMzIuMzgsMCwwLDAsMjIuMjgtMTMuMzJBNDEuMzUsNDEuMzUsMCwwLDAsNzAsNzQuNTFhMzkuMzgsMzkuMzgsMCwwLDAtLjk0LTUuODJaXCIvPjxwYXRoIGlkPVwiYW5pbWFsc1wiIGQ9XCJNOTAuMjcsOTEuNzVjLTEuMjIsMC0yLjQzLS4wNi0zLjY2LS4xN2EzOS42NywzOS42NywwLDAsMS0xMi43My0zLjM2LDQuNTcsNC41NywwLDAsMS0yLjY0LTMuNjEsNTMuMzgsNTMuMzgsMCwwLDEtLjE3LTEwLjkzYzIuNDEtMjYsMjMuNy00Ni4wNyw0Ny43Ni00My44N2EzOS43NCwzOS43NCwwLDAsMSwxMi43MywzLjM3LDQuNTcsNC41NywwLDAsMSwyLjY0LDMuNjIsNTMuMzUsNTMuMzUsMCwwLDEsLjE2LDEwLjkyYy0yLjI4LDI0LjY5LTIxLjY1LDQ0LTQ0LjA5LDQ0Wk04MCw4MC45MWEzMC41NywzMC41NywwLDAsMCw3LjQyLDEuNjJjMTkuMDcsMS43OCwzNS45Mi0xNC41MywzNy44Ny0zNS42NGE0Mi41NSw0Mi41NSwwLDAsMCwuMS02LjRBMzAuODYsMzAuODYsMCwwLDAsMTE4LDM4Ljg2Qzk5LDM3LjA3LDgyLjA2LDUzLjM4LDgwLjEyLDc0LjUxYTQzLjkxLDQzLjkxLDAsMCwwLS4xLDYuNFpcIi8+PHBhdGggaWQ9XCJhbmltYWxzXCIgZD1cIk0xMTMuNDksMTI1LjY0aDBjLTEuMTYsMC0yLjMsMC0zLjQ2LS4xMi0yMy45LTIuMjEtNDEuMzYtMjUuNDctMzguOTQtNTEuODVBNTMuNTIsNTMuNTIsMCwwLDEsNzMuMzQsNjIuNmE0LjU1LDQuNTUsMCwwLDEsNC4zMy0zLjE2YzEuMTYsMCwyLjM0LDAsMy41MS4xMywxMS42NCwxLjA3LDIyLjExLDcuMTIsMjkuNDgsMTdhNTAuNTEsNTAuNTEsMCwwLDEsOS40MiwzNC44MSw1My41MSw1My41MSwwLDAsMS0yLjI2LDExLDQuNTQsNC41NCwwLDAsMS00LjMzLDMuMTlaTTgxLjA4LDY4LjY5YTQyLjUzLDQyLjUzLDAsMCwwLTEsNS44MmMtMS45NCwyMS4xLDExLjQ1LDM5LjcxLDI5Ljk1LDQxLjg4QTQyLjM4LDQyLjM4LDAsMCwwLDEwMy4zNiw4MiwzMi40MiwzMi40MiwwLDAsMCw4MS4wOCw2OC42OVpcIi8+PHBhdGggaWQ9XCJhbmltYWxzXCIgZD1cIk03NS4wOCw0NS40NWE3LjgzLDcuODMsMCwxLDAsNy44Myw3LjgzLDcuODMsNy44MywwLDAsMC03LjgzLTcuODNaXCIvPjxwYXRoIGlkPVwiYW5pbWFsc1wiIGQ9XCJNNzYuMjksNTEuODlhMi4yNiwyLjI2LDAsMCwxLTIuMTQtM0E0Niw0NiwwLDAsMSw5Mi44MiwyNS4zNGEyLjI3LDIuMjcsMCwxLDEsMi40LDMuODZBNDEuNCw0MS40LDAsMCwwLDc4LjQzLDUwLjM5YTIuMjgsMi4yOCwwLDAsMS0yLjE0LDEuNVpcIi8+PHBhdGggaWQ9XCJhbmltYWxzXCIgZD1cIk03My44Nyw1MS44OWEyLjI4LDIuMjgsMCwwLDEtMi4xNC0xLjVBNDEuMzUsNDEuMzUsMCwwLDAsNTQuOTQsMjkuMmEyLjI3LDIuMjcsMCwwLDEsMi4zOS0zLjg2QTQ2LDQ2LDAsMCwxLDc2LDQ4Ljg1YTIuMjgsMi4yOCwwLDAsMS0xLjM3LDIuOTEsMi4zMSwyLjMxLDAsMCwxLS43Ny4xM1pcIi8+PC9zdmc+J30pLGVtb2ppQ2F0ZWdvcmllcy5wdXNoKHtuYW1lOlwiZm9vZFwiLHN2ZzonPHN2ZyBpZD1cImZvb2RcIiBkYXRhLW5hbWU9XCJMYXllciAxXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMTUwIDE1MFwiPjxwYXRoIGlkPVwiZm9vZFwiIGQ9XCJNMTA0LDIwLjc2aC4xNWMxNS44My41MiwyNC4wOCwyMS40OCwyNC4wNywzMi41Ni4yNiwxMi40Mi0xMC43MiwyMy41NS0yNCwyNC4yMWEzLjUzLDMuNTMsMCwwLDEtLjQ2LDBjLTEzLjI1LS42Ni0yNC4yMy0xMS44LTI0LTI0LjMsMC0xMSw4LjI2LTMxLjk1LDI0LjA3LTMyLjQ3Wm0wLDQ3LjY5YzguMjUtLjU0LDE1LjMtNy41MSwxNS4xNC0xNSwwLTguMTItNi4yMi0yMy4xLTE1LjE0LTIzLjU3LTguOS40Ni0xNS4xNCwxNS40NS0xNS4xNCwyMy40OC0uMTQsNy42MSw2LjksMTQuNTksMTUuMTQsMTUuMTNaXCIvPjxwYXRoIGlkPVwiZm9vZFwiIGQ9XCJNOTcuMTksNjkuMjFoLjE0YTQuNTMsNC41MywwLDAsMSw0LjQsNC42OGwtMS40OCw0Ni45MmExLjU5LDEuNTksMCwwLDAsLjUsMS4wNiw0LjYsNC42LDAsMCwwLDMuMjUsMS4xOWgwYTQuNTcsNC41NywwLDAsMCwzLjI2LTEuMiwxLjUzLDEuNTMsMCwwLDAsLjQ5LTFsLTEuNDgtNDYuOTVhNC41NCw0LjU0LDAsMSwxLDkuMDgtLjI4bDEuNDcsNDYuOTFhMTAuNDIsMTAuNDIsMCwwLDEtMyw3LjY1LDEzLjY1LDEzLjY1LDAsMCwxLTkuODEsNGgwYTEzLjU4LDEzLjU4LDAsMCwxLTkuNzktNCwxMC40MiwxMC40MiwwLDAsMS0zLTcuNjdsMS40OC00Ni44OWE0LjUzLDQuNTMsMCwwLDEsNC41My00LjRaXCIvPjxwYXRoIGlkPVwiZm9vZFwiIGQ9XCJNNDEuODQsNjkuMjFINDJhNC41Myw0LjUzLDAsMCwxLDQuNCw0LjY4TDQ0LjksMTIwLjgxYTEuNTcsMS41NywwLDAsMCwuNSwxLjA2LDQuNiw0LjYsMCwwLDAsMy4yNSwxLjE5aDBhNC41MSw0LjUxLDAsMCwwLDMuMjQtMS4xOSwxLjQ4LDEuNDgsMCwwLDAsLjUtMUw1MC45Myw3My44OWE0LjUzLDQuNTMsMCwwLDEsNC4zOS00LjY4QTQuNCw0LjQsMCwwLDEsNjAsNzMuNjFsMS40OCw0Ni45MWExMC40OSwxMC40OSwwLDAsMS0zLDcuNjYsMTMuNTcsMTMuNTcsMCwwLDEtOS43OCw0aDBhMTMuNTksMTMuNTksMCwwLDEtOS43OC00LDEwLjQ4LDEwLjQ4LDAsMCwxLTMtNy42N2wxLjQ4LTQ2LjlhNC41NCw0LjU0LDAsMCwxLDQuNTQtNC40WlwiLz48cGF0aCBpZD1cImZvb2RcIiBkPVwiTTI4LjU5LDIwLjc2YTQuNTQsNC41NCwwLDAsMSw0LjU0LDQuNTRWNTFhMTUuNTIsMTUuNTIsMCwwLDAsMzEsMFYyNS4zYTQuNTUsNC41NSwwLDAsMSw5LjA5LDBWNTFhMjQuNjEsMjQuNjEsMCwxLDEtNDkuMjEsMFYyNS4zYTQuNTQsNC41NCwwLDAsMSw0LjU0LTQuNTRaXCIvPjxwYXRoIGlkPVwiZm9vZFwiIGQ9XCJNNTUuMzQsMjAuNzZhNC41NCw0LjU0LDAsMCwxLDQuNTQsNC41NHYxOWE0LjU0LDQuNTQsMCwxLDEtOS4wOCwwdi0xOWE0LjU0LDQuNTQsMCwwLDEsNC41NC00LjU0WlwiLz48cGF0aCBpZD1cImZvb2RcIiBkPVwiTTQyLDIwLjc2YTQuNTQsNC41NCwwLDAsMSw0LjU0LDQuNTR2MTlhNC41NCw0LjU0LDAsMSwxLTkuMDgsMHYtMTlBNC41NCw0LjU0LDAsMCwxLDQyLDIwLjc2WlwiLz48L3N2Zz4nfSksZW1vamlDYXRlZ29yaWVzLnB1c2goe25hbWU6XCJzcG9ydFwiLHN2ZzonPHN2ZyBpZD1cInNwb3J0XCIgZGF0YS1uYW1lPVwiTGF5ZXIgMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDE1MCAxNTBcIj48cGF0aCBpZD1cInNwb3J0XCIgZD1cIk03NS4zNSwxMzAuMjRhNTMuNDksNTMuNDksMCwxLDEsNTMuNDgtNTMuNDksNTMuNTUsNTMuNTUsMCwwLDEtNTMuNDgsNTMuNDlabTAtOTcuODlhNDQuNDEsNDQuNDEsMCwxLDAsNDQuNCw0NC40LDQ0LjEsNDQuMSwwLDAsMC00NC40LTQ0LjRaXCIvPjxwYXRoIGlkPVwic3BvcnRcIiBkPVwiTTExOS4yNCw4NC4wOEE1MS4yOSw1MS4yOSwwLDAsMSw2OCwzMi44NmE0OS40NCw0OS40NCwwLDAsMSwuMjYtNSwyLjI2LDIuMjYsMCwwLDEsMi0yYzEuNjYtLjE2LDMuMzQtLjI1LDUtLjI1YTUxLjI2LDUxLjI2LDAsMCwxLDUxLjIxLDUxLjIxYzAsMS43MS0uMDksMy4zOC0uMjUsNWEyLjI4LDIuMjgsMCwwLDEtMiwyYy0xLjY1LjE2LTMuMzMuMjUtNSwuMjVaTTcyLjY0LDMwLjE2Yy0uMDYuOS0uMDgsMS43OS0uMDgsMi43YTQ2LjczLDQ2LjczLDAsMCwwLDQ2LjY4LDQ2LjY4cTEuMzcsMCwyLjctLjA5Yy4wNi0uODkuMDgtMS43OS4wOC0yLjdBNDYuNzIsNDYuNzIsMCwwLDAsNzUuMzUsMzAuMDhjLS45MSwwLTEuODIsMC0yLjcxLjA4WlwiLz48cGF0aCBpZD1cInNwb3J0XCIgZD1cIk03NS4zNSwxMjhBNTEuMjgsNTEuMjgsMCwwLDEsMjQuMTIsNzYuNzZjMC0xLjcuMS0zLjM4LjI1LTVhMi4yOSwyLjI5LDAsMCwxLDItMmMxLjY2LS4xNiwzLjMzLS4yNSw1LjA1LS4yNWE1MS4yNyw1MS4yNywwLDAsMSw1MS4yMSw1MS4yMmMwLDEuNjktLjA5LDMuMzctLjI1LDVhMi4yNywyLjI3LDAsMCwxLTIsMmMtMS42Ni4xNi0zLjMyLjI1LTUsLjI1Wk0yOC43NSw3NC4wNWMtLjA1LjktLjA5LDEuOC0uMDksMi43MWE0Ni43NCw0Ni43NCwwLDAsMCw0Ni42OSw0Ni42N2MuOTEsMCwxLjgsMCwyLjctLjA4LDAtLjkuMDgtMS44LjA4LTIuN0E0Ni43Myw0Ni43MywwLDAsMCwzMS40Niw3NGMtLjkxLDAtMS44MSwwLTIuNzEuMDhaXCIvPjxwb2x5Z29uIGlkPVwic3BvcnRcIiBwb2ludHM9XCI0Mi42OSAxMTIuNjEgMzkuNDggMTA5LjQgMTA4IDQwLjg4IDExMS4yMSA0NC4xIDQyLjY5IDExMi42MSA0Mi42OSAxMTIuNjFcIi8+PC9zdmc+J30pLGVtb2ppQ2F0ZWdvcmllcy5wdXNoKHtuYW1lOlwidHJhbnNwb3J0XCIsc3ZnOic8c3ZnIGlkPVwidHJhbnNwb3J0XCIgZGF0YS1uYW1lPVwiTGF5ZXIgMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDE1MCAxNTBcIj48cGF0aCBpZD1cInRyYW5zcG9ydFwiIGQ9XCJNMTIwLjcsMTE2SDMxYTQuNTUsNC41NSwwLDAsMS00LjU0LTQuNTVWNTQuMjhBMzEuODIsMzEuODIsMCwwLDEsNTguMjUsMjIuNDloMzUuMmEzMS44MywzMS44MywwLDAsMSwzMS44LDMxLjc5djU3LjE1QTQuNTUsNC41NSwwLDAsMSwxMjAuNywxMTZabS04NS4xNi05LjA5aDgwLjYyVjU0LjI4QTIyLjc0LDIyLjc0LDAsMCwwLDkzLjQ1LDMxLjU3SDU4LjI1QTIyLjc0LDIyLjc0LDAsMCwwLDM1LjU0LDU0LjI4djUyLjYxWlwiLz48cGF0aCBpZD1cInRyYW5zcG9ydFwiIGQ9XCJNNDkuMzUsMTI5LjIzYy04LjUzLDAtMTMuNjItMi43Ny0xMy42Mi03LjQxVjExNS42YTQuNTQsNC41NCwwLDEsMSw5LjA4LDB2NC4wNmEyMS4zMiwyMS4zMiwwLDAsMCw5LjA5LDBWMTE1LjZhNC41NCw0LjU0LDAsMCwxLDkuMDgsMHY2LjIyYzAsNC42NC01LjA5LDcuNDEtMTMuNjMsNy40MVpcIi8+PHBhdGggaWQ9XCJ0cmFuc3BvcnRcIiBkPVwiTTEwMi4zNCwxMjkuMjNjLTguNTMsMC0xMy42Mi0yLjc3LTEzLjYyLTcuNDFWMTE1LjZhNC41NCw0LjU0LDAsMCwxLDkuMDgsMHY0LjA2YTIxLjI4LDIxLjI4LDAsMCwwLDkuMDgsMFYxMTUuNmE0LjU1LDQuNTUsMCwwLDEsOS4wOSwwdjYuMjJjMCw0LjY0LTUuMDksNy40MS0xMy42Myw3LjQxWlwiLz48cGF0aCBpZD1cInRyYW5zcG9ydFwiIGQ9XCJNOTcuODEsNDQuODNINTMuOWE0LjU1LDQuNTUsMCwxLDEsMC05LjA5SDk3LjgxYTQuNTUsNC41NSwwLDAsMSwwLDkuMDlaXCIvPjxwYXRoIGlkPVwidHJhbnNwb3J0XCIgZD1cIk01NC4yOCw4NC4yQTYuOCw2LjgsMCwxLDAsNjEuMDcsOTFhNi44LDYuOCwwLDAsMC02Ljc5LTYuOFpcIi8+PHBhdGggaWQ9XCJ0cmFuc3BvcnRcIiBkPVwiTTk3LjQzLDg0LjJhNi44LDYuOCwwLDEsMCw2Ljc5LDYuOCw2LjgsNi44LDAsMCwwLTYuNzktNi44WlwiLz48cGF0aCBpZD1cInRyYW5zcG9ydFwiIGQ9XCJNMTA3LjA4LDgxSDQ0LjYzYTYuODIsNi44MiwwLDAsMS02LjgyLTYuODJWNTQuMjhhNi44Miw2LjgyLDAsMCwxLDYuODItNi44MWg2Mi40NWE2LjgyLDYuODIsMCwwLDEsNi44MSw2LjgxVjc0LjE1QTYuODMsNi44MywwLDAsMSwxMDcuMDgsODFaTTQ0LjYzLDUyYTIuMjgsMi4yOCwwLDAsMC0yLjI4LDIuMjdWNzQuMTVhMi4yOCwyLjI4LDAsMCwwLDIuMjgsMi4yN2g2Mi40NWEyLjI3LDIuMjcsMCwwLDAsMi4yNy0yLjI3VjU0LjI4QTIuMjcsMi4yNywwLDAsMCwxMDcuMDgsNTJaXCIvPjwvc3ZnPid9KSxlbW9qaUNhdGVnb3JpZXMucHVzaCh7bmFtZTpcIm9iamVjdHNcIixzdmc6JzxzdmcgaWQ9XCJvYmplY3RzXCIgZGF0YS1uYW1lPVwiTGF5ZXIgMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDE1MCAxNTBcIj48cGF0aCBpZD1cIm9iamVjdHNcIiBkPVwiTTEwNy43OCwxMjlhNC41NSw0LjU1LDAsMCwxLTIuNjctLjg3bC0zMC0yMS43OS0zMCwyMS43OWE0LjUzLDQuNTMsMCwwLDEtNS4zNCwwLDQuNTgsNC41OCwwLDAsMS0xLjY1LTUuMDhMNDkuNTksODcuODIsMTkuNiw2NmE0LjU0LDQuNTQsMCwwLDEsMi42Ny04LjIySDU5LjM0TDcwLjgsMjIuNTVhNC41NSw0LjU1LDAsMCwxLDguNjQsMEw5MC44OSw1Ny44MUgxMjhBNC41NCw0LjU0LDAsMCwxLDEzMC42Myw2NmwtMzAsMjEuNzksMTEuNDYsMzUuMjVhNC41NSw0LjU1LDAsMCwxLTQuMzIsNlpNNzUuMTIsOTYuMmE0LjUzLDQuNTMsMCwwLDEsMi42Ny44N2wyMS4zNSwxNS41MUw5MSw4Ny40OWE0LjU1LDQuNTUsMCwwLDEsMS42NS01LjA4TDExNCw2Ni44OUg4Ny41OWE0LjU0LDQuNTQsMCwwLDEtNC4zMi0zLjEzbC04LjE1LTI1LjFMNjcsNjMuNzZhNC41Myw0LjUzLDAsMCwxLTQuMzIsMy4xM0gzNi4yNUw1Ny42MSw4Mi40MWE0LjU0LDQuNTQsMCwwLDEsMS42NSw1LjA4bC04LjE3LDI1LjA5TDcyLjQ1LDk3LjA3YTQuNTMsNC41MywwLDAsMSwyLjY3LS44N1pcIi8+PC9zdmc+J30pO2Vtb2ppQ2F0ZWdvcmllcy5tYXAoZnVuY3Rpb24oaXRlbSl7dmFyIGVtb2ppTGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtlbW9qaUxpbmsuc3R5bGUudGV4dERlY29yYXRpb249XCJub25lXCIsZW1vamlMaW5rLnN0eWxlLnBhZGRpbmc9XCI1cHhcIixlbW9qaUxpbmsuc3R5bGUucG9zaXRpb249XCJpbml0aWFsXCIsZW1vamlMaW5rLnN0eWxlLmZvbnRTaXplPVwiMjRweFwiLGVtb2ppTGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsXCJqYXZhc2NyaXB0OnZvaWQoMClcIiksZW1vamlMaW5rLnN0eWxlLmRpc3BsYXk9XCJ0YWJsZS1jZWxsXCIsZW1vamlMaW5rLnN0eWxlLnRleHRBbGlnbj1cImNlbnRlclwiLGVtb2ppTGluay5pZD1TdHJpbmcoaXRlbS5uYW1lKSxcImZhY2VzXCI9PVN0cmluZyhpdGVtLm5hbWUpJiYoZW1vamlMaW5rLnN0eWxlLmJhY2tncm91bmQ9XCIjYzJjMmMyXCIpLGVtb2ppTGluay5pbm5lckhUTUw9U3RyaW5nKGl0ZW0uc3ZnKSxlbW9qaUxpbmsub25tb3VzZWRvd249Y2xpY2tDYXRlZ29yeSxlbW9qaUNhdGVnb3J5LmFwcGVuZENoaWxkKGVtb2ppTGluayl9KSxbMTI4NTEzLDEyODUxNCwxMjg1MTUsMTI4NTE2LDEyODUxNywxMjg1MTgsMTI4NTIxLDEyODUyMiwxMjg1MjMsMTI4NTI0LDEyODUyNSwxMjg1MjcsMTI4NTMwLDEyODUzMSwxMjg1MzIsMTI4NTM0LDEyODUzNiwxMjg1MzgsMTI4NTQwLDEyODU0MSwxMjg1NDIsMTI4NTQ0LDEyODU0NSwxMjg1NDYsMTI4NTQ3LDEyODU0OCwxMjg1NDksMTI4NTUyLDEyODU1MywxMjg1NTQsMTI4NTU1LDEyODU1NywxMjg1NjAsMTI4NTYxLDEyODU2MiwxMjg1NjMsMTI4NTY1LDEyODU2N10ubWFwKGZ1bmN0aW9uKGl0ZW0pe3ZhciBlbW9qaUxpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7ZW1vamlMaW5rLnN0eWxlLnRleHREZWNvcmF0aW9uPVwibm9uZVwiLGVtb2ppTGluay5zdHlsZS5tYXJnaW49XCI1cHhcIixlbW9qaUxpbmsuc3R5bGUucG9zaXRpb249XCJpbml0aWFsXCIsZW1vamlMaW5rLnN0eWxlLmZvbnRTaXplPVwiMjRweFwiLGVtb2ppTGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsXCJqYXZhc2NyaXB0OnZvaWQoMClcIiksZW1vamlMaW5rLmlubmVySFRNTD1TdHJpbmcuZnJvbUNvZGVQb2ludChpdGVtKSxlbW9qaUxpbmsub25tb3VzZWRvd249Y2xpY2tMaW5rLGZhY2VzQ2F0ZWdvcnkuYXBwZW5kQ2hpbGQoZW1vamlMaW5rKX0pLFsxMjgwMTIsMTI4MDEzLDEyODAxNCwxMjgwMTcsMTI4MDE4LDEyODAyMCwxMjgwMjMsMTI4MDI0LDEyODAyNSwxMjgwMjYsMTI4MDI3LDEyODAyOCwxMjgwMjksMTI4MDMwLDEyODAzMSwxMjgwMzIsMTI4MDMzLDEyODAzNCwxMjgwMzUsMTI4MDM2LDEyODAzNywxMjgwMzgsMTI4MDM5LDEyODA0MCwxMjgwNDEsMTI4MDQzLDEyODA0NCwxMjgwNDUsMTI4MDQ2LDEyODA0NywxMjgwNDgsMTI4MDQ5LDEyODA1MCwxMjgwNTEsMTI4MDUyLDEyODA1MywxMjgwNTQsMTI4MDU1LDEyODA1NiwxMjgwNTcsMTI4MDU4LDEyODA1OSwxMjgwNjBdLm1hcChmdW5jdGlvbihpdGVtKXt2YXIgZW1vamlMaW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2Vtb2ppTGluay5zdHlsZS50ZXh0RGVjb3JhdGlvbj1cIm5vbmVcIixlbW9qaUxpbmsuc3R5bGUubWFyZ2luPVwiNXB4XCIsZW1vamlMaW5rLnN0eWxlLnBvc2l0aW9uPVwiaW5pdGlhbFwiLGVtb2ppTGluay5zdHlsZS5mb250U2l6ZT1cIjI0cHhcIixlbW9qaUxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLFwiamF2YXNjcmlwdDp2b2lkKDApXCIpLGVtb2ppTGluay5pbm5lckhUTUw9U3RyaW5nLmZyb21Db2RlUG9pbnQoaXRlbSksZW1vamlMaW5rLm9ubW91c2Vkb3duPWNsaWNrTGluayxhbmltYWxzQ2F0ZWdvcnkuYXBwZW5kQ2hpbGQoZW1vamlMaW5rKX0pLFsxMjc4MTMsMTI3ODE0LDEyNzgxNSwxMjc4MTYsMTI3ODE3LDEyNzgxOCwxMjc4MjAsMTI3ODIxLDEyNzgyMiwxMjc4MjMsMTI3ODI1LDEyNzgyNiwxMjc4MjcsMTI3ODI4LDEyNzgyOSwxMjc4MzAsMTI3ODMxLDEyNzgzMiwxMjc4MzYsMTI3ODM3LDEyNzgzOCwxMjc4MzksMTI3ODQwLDEyNzg0MSwxMjc4NDIsMTI3ODQzLDEyNzg0NCwxMjc4NDYsMTI3ODQ4LDEyNzg0OSwxMjc4NTAsMTI3ODUxLDEyNzg1MiwxMjc4NTMsMTI3ODU2LDEyNzg1OCwxMjc4NTksMTI3ODYwLDEyNzg2MywxMjc4NjQsMTI3ODY3XS5tYXAoZnVuY3Rpb24oaXRlbSl7dmFyIGVtb2ppTGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtlbW9qaUxpbmsuc3R5bGUudGV4dERlY29yYXRpb249XCJub25lXCIsZW1vamlMaW5rLnN0eWxlLm1hcmdpbj1cIjVweFwiLGVtb2ppTGluay5zdHlsZS5wb3NpdGlvbj1cImluaXRpYWxcIixlbW9qaUxpbmsuc3R5bGUuZm9udFNpemU9XCIyNHB4XCIsZW1vamlMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIixcImphdmFzY3JpcHQ6dm9pZCgwKVwiKSxlbW9qaUxpbmsuaW5uZXJIVE1MPVN0cmluZy5mcm9tQ29kZVBvaW50KGl0ZW0pLGVtb2ppTGluay5vbm1vdXNlZG93bj1jbGlja0xpbmssZm9vZENhdGVnb3J5LmFwcGVuZENoaWxkKGVtb2ppTGluayl9KSxbMTI3OTIxLDEyNzkyMywxMjc5MzQsMTI3OTM1LDEyNzkzNiwxMjc5MzcsMTI3OTM4LDEyNzkzOSwxMjc5NDAsMTI3OTQyLDEyNzk0NCwxMjc5NDYsMTI4Njc1LDEyODY5MiwxMjg2OTMsOTkxNyw5OTE4LDk5NzgsMTI3OTA3LDEyNzkxOSw5OTcxXS5tYXAoZnVuY3Rpb24oaXRlbSl7dmFyIGVtb2ppTGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtlbW9qaUxpbmsuc3R5bGUudGV4dERlY29yYXRpb249XCJub25lXCIsZW1vamlMaW5rLnN0eWxlLm1hcmdpbj1cIjVweFwiLGVtb2ppTGluay5zdHlsZS5wb3NpdGlvbj1cImluaXRpYWxcIixlbW9qaUxpbmsuc3R5bGUuZm9udFNpemU9XCIyNHB4XCIsZW1vamlMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIixcImphdmFzY3JpcHQ6dm9pZCgwKVwiKSxlbW9qaUxpbmsuaW5uZXJIVE1MPVN0cmluZy5mcm9tQ29kZVBvaW50KGl0ZW0pLGVtb2ppTGluay5vbm1vdXNlZG93bj1jbGlja0xpbmssc3BvcnRDYXRlZ29yeS5hcHBlbmRDaGlsZChlbW9qaUxpbmspfSksWzEyODY0MSwxMjg2NDIsMTI4NjQ2LDEyODY0OCwxMjg2NTAsMTI4NjUzLDEyODY1NCwxMjg2NTYsMTI4NjYwLDEyODY2MiwxMjg2NjQsMTI4NjY3LDEyODY2OCwxMjg2NjksMTI4NjcwLDEyODY3MSwxMjg2NzIsMTI4NjczLDEyODY0MCwxMjg2NDMsMTI4NjQ0LDEyODY0NSwxMjg2NDcsMTI4NjQ5LDEyODY1MiwxMjg2NTcsMTI4NjU4LDEyODY1OSwxMjg2NjEsMTI4NjYzLDEyODY2NSwxMjg2NjYsMTI4Njc0LDEyODY3NiwxMjg2OTBdLm1hcChmdW5jdGlvbihpdGVtKXt2YXIgZW1vamlMaW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2Vtb2ppTGluay5zdHlsZS50ZXh0RGVjb3JhdGlvbj1cIm5vbmVcIixlbW9qaUxpbmsuc3R5bGUubWFyZ2luPVwiNXB4XCIsZW1vamlMaW5rLnN0eWxlLnBvc2l0aW9uPVwiaW5pdGlhbFwiLGVtb2ppTGluay5zdHlsZS5mb250U2l6ZT1cIjI0cHhcIixlbW9qaUxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLFwiamF2YXNjcmlwdDp2b2lkKDApXCIpLGVtb2ppTGluay5pbm5lckhUTUw9U3RyaW5nLmZyb21Db2RlUG9pbnQoaXRlbSksZW1vamlMaW5rLm9ubW91c2Vkb3duPWNsaWNrTGluayx0cmFuc3BvcnRDYXRlZ29yeS5hcHBlbmRDaGlsZChlbW9qaUxpbmspfSksWzEyNzg5MCwxMjc4ODAsMTI3ODgxLDEyNzg4NywxMjc4OTEsMTI3OTA1LDEyNzkwNiwxMjc5MDgsMTI3OTA5LDEyNzkxMSwxMjc5MTIsMTI3OTE1LDEyNzkxNiwxMjc5MTgsMTI3OTE5LDEyNzkyNiwxMjc5MjcsMTI3OTI4LDEyNzkyOSwxMjc5MzAsMTI3OTMxLDEyNzkzMiwxMjc5NjgsMTI3OTczLDEyNzk3OCwxMjgxNDcsMTI4MTQ4LDEyODE0OSwxMjgxNTAsMTI4MTUxLDEyODE1MiwxMjgxODcsMTI4MTg2LDEyODE5NywxMjgyMTMsMTI4MjQ3XS5tYXAoZnVuY3Rpb24oaXRlbSl7dmFyIGVtb2ppTGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO2Vtb2ppTGkuc3R5bGUuZGlzcGxheT1cImlubGluZS1ibG9ja1wiLGVtb2ppTGkuc3R5bGUubWFyZ2luPVwiNXB4XCI7dmFyIGVtb2ppTGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtlbW9qaUxpbmsuc3R5bGUudGV4dERlY29yYXRpb249XCJub25lXCIsZW1vamlMaW5rLnN0eWxlLm1hcmdpbj1cIjVweFwiLGVtb2ppTGluay5zdHlsZS5wb3NpdGlvbj1cImluaXRpYWxcIixlbW9qaUxpbmsuc3R5bGUuZm9udFNpemU9XCIyNHB4XCIsZW1vamlMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIixcImphdmFzY3JpcHQ6dm9pZCgwKVwiKSxlbW9qaUxpbmsuaW5uZXJIVE1MPVN0cmluZy5mcm9tQ29kZVBvaW50KGl0ZW0pLGVtb2ppTGluay5vbm1vdXNlZG93bj1jbGlja0xpbmssb2JqZWN0c0NhdGVnb3J5LmFwcGVuZENoaWxkKGVtb2ppTGluayl9KSxlbW9qaVBpY2tlci5hcHBlbmRDaGlsZChlbW9qaUNhdGVnb3J5KSxlbW9qaVBpY2tlci5hcHBlbmRDaGlsZChmYWNlc0NhdGVnb3J5KSxlbW9qaVBpY2tlci5hcHBlbmRDaGlsZChhbmltYWxzQ2F0ZWdvcnkpLGVtb2ppUGlja2VyLmFwcGVuZENoaWxkKGZvb2RDYXRlZ29yeSksZW1vamlQaWNrZXIuYXBwZW5kQ2hpbGQoc3BvcnRDYXRlZ29yeSksZW1vamlQaWNrZXIuYXBwZW5kQ2hpbGQodHJhbnNwb3J0Q2F0ZWdvcnkpLGVtb2ppUGlja2VyLmFwcGVuZENoaWxkKG9iamVjdHNDYXRlZ29yeSksZW1vamlDb250YWluZXIuYXBwZW5kQ2hpbGQoZW1vamlQaWNrZXIpfX1dKSxNZXRlb3JFbW9qaX0oKTttb2R1bGUuZXhwb3J0cz1NZXRlb3JFbW9qaX0pfSx7fV19LHt9LFsxXSkoMSl9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWV0ZW9yLWVtb2ppL2Rpc3QvbWV0ZW9yRW1vamkubWluLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRpZighbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=