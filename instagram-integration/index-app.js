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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
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
        instagramAccount_confirmKey: 'instagram-accounts/checkpoint/'
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

var _network = __webpack_require__(12);

var _network2 = _interopRequireDefault(_network);

var _cookie = __webpack_require__(3);

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
/* 3 */
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)(module)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(15);

var _registerForm = __webpack_require__(11);

var _registerForm2 = _interopRequireDefault(_registerForm);

var _loginForm = __webpack_require__(10);

var _loginPage = __webpack_require__(13);

var _confirmReg = __webpack_require__(6);

var _instagram = __webpack_require__(14);

var _header = __webpack_require__(8);

var header = _interopRequireWildcard(_header);

var _burgerMenu = __webpack_require__(7);

var burgerMenu = _interopRequireWildcard(_burgerMenu);

var _consts = __webpack_require__(0);

var _instagramAccountsList = __webpack_require__(9);

var instagramAccounts = _interopRequireWildcard(_instagramAccountsList);

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
    (0, _instagram.Instagram)().init();
    (0, _confirmReg.confirmationWithRedirect)().init();
    header.initHeader();
    burgerMenu.init();
    instagramAccounts.init();
};

(function () {
    return init();
})();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.confirmationWithRedirect = confirmationWithRedirect;

var _user = __webpack_require__(1);

var _user2 = _interopRequireDefault(_user);

var _consts = __webpack_require__(0);

var _cookie = __webpack_require__(3);

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
/* 7 */
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
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.init = init;

var _user = __webpack_require__(1);

var _user2 = _interopRequireDefault(_user);

var _view = __webpack_require__(2);

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
            var $accountsList = $('.accounts-list');
            $accountsList.empty();
            // todo : reload list
            // fillList($accountsList, result.data.accounts);
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
            $('<li class="media py-3">\n                <img class="ml-3 rounded" alt="default avatar" src="' + defaultAvatarSrc + '">\n                <div class="media-body d-flex">\n                    <div class="col user-info">\n                        ' + (item.username ? '<p class="mt-0 mb-1 name">' + item.username + '</p>' : '') + '\n                    </div>\n                    <div class="col">                        \n                        ' + (checkpoint.status === 'TRIGGERED' ? '<button class="btn btn-outline-secondary js_pass-checkpoint-btn d-block mx-auto" \n                            data-checkpoint-type="' + checkpoint.type + '"\n                            data-username="' + (item.username || '') + '"\n                            data-toggle="modal" data-target="#security-code">\n                            <i class="fas fa-key"></i>\u041F\u0440\u043E\u0439\u0442\u0438 \u0447\u0435\u043A\u043F\u043E\u0438\u043D\u0442</button>' : '(todo)checkpoint status - ' + checkpoint) + '\n                    </div>\n                    ' + stats() + '\n                </div>\n            </li>').appendTo(cList);
        } else {
            $('<li class="media py-3">\n            ' + (info['profile_pic_url'] ? '<img class="ml-3 rounded" alt="User photo" src="' + info['profile_pic_url'] + '">' : '<img class="ml-3 rounded" alt="default avatar" src="' + defaultAvatarSrc + '">') + '\n            <div class="media-body d-flex">\n                <div class="col user-info">\n                    ' + (item.username ? '<p class="mt-0 mb-1 name">' + item.username + '</p>' : '') + '\n                    ' + (info.name ? '<p class="mt-0 mb-1">' + info.name + '</p>' : '') + '\n                    ' + (info.email ? '<p class="mt-0 mb-1">' + info.email + '</p>' : '') + '\n                    ' + (info.phone ? '<p class="mt-0 mb-1">' + info.phone + '</p>' : '') + '\n                </div>\n                <div class="col">                        \n                    ' + (checkpoint.status === 'TRIGGERED' ? '<button class="btn btn-outline-secondary js_pass-checkpoint-btn d-block mx-auto" data-checkpoint-type="' + checkpoint.type + '" data-toggle="modal" data-target="#security-code">\n                    <i class="fas fa-key"></i>\u041F\u0440\u043E\u0439\u0442\u0438 \u0447\u0435\u043A\u043F\u043E\u0438\u043D\u0442</button>' : '') + '\n                </div>\n                ' + stats(info) + '\n            </div>\n        </li>').appendTo(cList);
        }
    });
}

/**
 * Init header
 */
function init() {
    var $accountsList = $('.accounts-list');
    // check we are in profile page
    if (!$accountsList.length) {
        return;
    }
    var token = _user2.default.getToken(); // upd to: User.getToken()
    var metadata = _user2.default.getMetadata(token);
    var resendRequest = function resendRequest() {
        return _user2.default.getMetadata(token);
    };
    var isSendReqOnce = false;
    var checkResponse = function checkResponse(result, isResendRequest) {
        if (!result.status.state === 'ok' || !result.data || !$accountsList.length || isResendRequest) {
            // проверям один раз наличие result.data.accounts.info
            $accountsList.empty();
            $('<li class="media">\n                <div class="media-body">\n                    <h3 class="mt-0 mb-3">\u041D\u0438 \u043E\u0434\u043D\u043E\u0433\u043E \u0410\u043A\u043A\u0430\u0443\u043D\u0442\u0430 \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E</h3>\n                </div>\n            </li>').appendTo($accountsList);
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
        fillList($accountsList, result.data.accounts);
        addListHandler();
    };

    // check we are in profile page
    if (!$accountsList.length) {
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
/* 10 */
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

var _cookie = __webpack_require__(3);

var _cookie2 = _interopRequireDefault(_cookie);

var _view = __webpack_require__(2);

var _view2 = _interopRequireDefault(_view);

var _consts = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Validator from '../../common/js-services/form-validator';
window.$ = $; // https://www.npmjs.com/package/pubsub-js
/* eslint-disable sort-vars */
// import $ from 'jquery';
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
}

/***/ }),
/* 11 */
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

var _cookie = __webpack_require__(3);

var _cookie2 = _interopRequireDefault(_cookie);

var _consts = __webpack_require__(0);

var _view = __webpack_require__(2);

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var selectorCls = {
    form: '.auth .register .form-signin',
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // import $ from 'jquery';


var _view = __webpack_require__(2);

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
/* 13 */
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

var _cookie = __webpack_require__(3);

var _cookie2 = _interopRequireDefault(_cookie);

var _view = __webpack_require__(2);

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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Instagram = Instagram;

var _user = __webpack_require__(1);

var _user2 = _interopRequireDefault(_user);

var _view = __webpack_require__(2);

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
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzdmMmNiZjI2NTNlNGNhYzYzMzciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy91c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vanMtc2VydmljZXMvdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2pzLXNlcnZpY2VzL2Nvb2tpZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3B1YnN1Yi1qcy9zcmMvcHVic3ViLmpzIiwid2VicGFjazovLy8uL3NyYy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9jb25maXJtLXJlZy9jb25maXJtLXJlZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2hlYWRlci9idXJnZXItbWVudS9idXJnZXItbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9pbnN0YWdyYW0tYWNjb3VudHMtbGlzdC9pbnN0YWdyYW0tYWNjb3VudHMtbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3JlZ2lzdGVyLWZvcm0vcmVnaXN0ZXItZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2pzLXNlcnZpY2VzL25ldHdvcmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL19hdXRoL2xvZ2luLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL19pbnN0YWdyYW0vaW5zdGFncmFtLmpzIiwid2VicGFjazovLy8uL3NyYy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyJdLCJuYW1lcyI6WyJDT05TVCIsInVybCIsImJhc2UiLCJyZWdpc3RyYXRpb24iLCJsb2dpbiIsImNvbmZpcm1hdGlvbiIsImluc3RhZ3JhbV9hZGRBY2NvdW50IiwiaW5zdGFncmFtQWNjb3VudF9nZXRNZXRhRGF0YSIsImluc3RhZ3JhbUFjY291bnRfY2hlY2twb2ludCIsImluc3RhZ3JhbUFjY291bnRfY29uZmlybUtleSIsInVzZXIiLCJlbWFpbCIsInBhc3N3b3JkIiwidG9rZW4iLCJjb29raWVTdG9yYWdlIiwiZW1haWxDb25maXJtZWQiLCJ1aVNlbGVjdG9ycyIsImhlYWRlckxvZ2luQm94IiwiaGVhZGVyTmF2TG9naW5CdG4iLCJoZWFkZXJSZWdCb3giLCJoZWFkZXJSZWdCdG4iLCJpbnN0YWdyYW0iLCJhZGRBY2NvdW50QnRuU2VsZWN0b3IiLCJhZGRBY2NvdW50QnRuSWQiLCJldmVudHMiLCJVU0VSX0xPR0dFRCIsIlVTRVJfTE9HT1VUIiwiVVNFUl9FTUFJTF9DT05GSVJNRUQiLCJTVE9QX0ZJWEVEX1NQSU5ORVIiLCJnZXRQYXRoIiwibmFtZSIsIlVzZXIiLCJuZXR3b3JrIiwic2V0dGluZ1Bvc3QiLCJtZXRob2QiLCJoZWFkZXJzIiwiZ2V0VG9rZW4iLCJnZXQiLCJjb29raWVUb2tlbiIsImZvcm1EYXRhIiwiY2JFcnJvciIsInNldHRpbmciLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInNlbmRSZXF1ZXN0IiwidXNlcm5hbWUiLCJjaGVja3BvaW50VHlwZSIsImtleSIsInVzZXJJbnN0YW5jZSIsInZpZXdVdGlscyIsInNob3dJbmZvTWVzc2FnZSIsInNlbGVjdG9yIiwibWVzc2FnZTEiLCJtZXNzYWdlMiIsIiQiLCJlbXB0eSIsImFwcGVuZCIsImZpbGxMaXN0IiwiJGxpc3QiLCJkYXRhQXJyYXkiLCJpdGVtcyIsImNMaXN0IiwiZm9yRWFjaCIsIml0ZW0iLCJpIiwibGkiLCJhcHBlbmRUbyIsImFkZENsYXNzIiwidGV4dCIsImlzRW1haWwiLCJyZWdleCIsInRlc3QiLCJDb29raWVTcnYiLCJjIiwiZG9jdW1lbnQiLCJjb29raWUiLCJtYXRjaCIsImRlY29kZVVSSUNvbXBvbmVudCIsInNldCIsInZhbHVlIiwib3B0cyIsInBhdGgiLCJkYXlzIiwiT2JqZWN0IiwiZW50cmllcyIsInJlZHVjZSIsInN0ciIsImsiLCJ2IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVtb3ZlIiwiaGVhZGVyIiwiYnVyZ2VyTWVudSIsImluc3RhZ3JhbUFjY291bnRzIiwic2VsZWN0b3JDc3NMb2dpbkZvcm0iLCJfbG9naW5Cb3giLCJfZm9ybUlkIiwiX2J1dHRvblN1Ym1pdElkIiwiX3Nob3dMb2dpbkJveEJ0bklkIiwic2VsZWN0b3JDc3NMb2dpbkZvcm1JbnN0YWdyYW0iLCJpc0xvZ2luSW5zdGFncmFtIiwiaW5pdCIsImluaXRIZWFkZXIiLCJjb25maXJtYXRpb25XaXRoUmVkaXJlY3QiLCJwYXJzZVF1ZXJ5U3RyaW5nIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJvYmpVUkwiLCJyZXBsYWNlIiwiUmVnRXhwIiwiJDAiLCIkMSIsIiQyIiwicGFyYW1zIiwic2VuZENvbmZpcm0iLCJjb25maXJtIiwidGhlbiIsInJlc3VsdCIsInN0YXR1cyIsInN0YXRlIiwiZGF0YSIsImN1c3RvbWVyc0RhdGFTdHJpbmciLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwic2V0VGltZW91dCIsInJlZGlyZWN0IiwicGF0aG5hbWUiLCJpbmRleE9mIiwic2VsZWN0b3JzRWwiLCJsZWZ0TWVudSIsImhhbWJ1cmdlckJ1dHRvbkNscyIsImhhbWJ1cmdlck1lbnVDbHMiLCJoYW1idXJnZXJNZW51T3BlbmVkQ2xhc3MiLCJoYW1idXJnZXJCdXR0b25DbG9zZUNsYXNzIiwicmlnaHRNZW51Iiwic3ViSGVhZGVyIiwidG9nZ2xlSGFtYnVyZ2VyTWVudSIsIm1lbnVOYW1lIiwidG9nZ2xlQ2xhc3MiLCJvbiIsImJpbmQiLCJzZWxlY3RvckxvZ2luU3RhdGUiLCJzZWxlY3RvckVtYWlsQ29uZmlybVN0YXRlIiwiY2xvc2VDbGFzcyIsIm9wZW5lZENsYXNzIiwiZW1haWxOb3RDb25maXJtZWQiLCIkZW1haWxuTXNnIiwiY3NzIiwib25Mb2dpblN1YnNjcmliZSIsIm1zZyIsInJlbW92ZUNsYXNzIiwiJGxvZ2luTXNnIiwiaXNFbWFpbENvbmZpcm1lZCIsInNob3dMb2dvdXQiLCJpc0xvZ2dlZCIsImlzTG9nZ2VkSW4iLCJwYXJlbnQiLCJzaG93Iiwib2xkVVJMIiwicmVmZXJyZXIiLCJpbmNsdWRlcyIsIiRsb2dpbkJveCIsIiRyZWdpc3RlckJveCIsInN1YnNjcmliZSIsImhpZGUiLCJhZGRJbnN0YWdyYW1BY2NvdW50IiwibmV3Rm9ybURhdGEiLCJtZXNzYWdlIiwiJGFjY291bnRzTGlzdCIsImNhdGNoIiwiZXJyIiwiYWRkT25Mb2FkSGFuZGxlcnMiLCJlIiwiYnRuIiwidGFyZ2V0IiwiJG1vZGFsQm9keSIsImNsb3Nlc3QiLCJmaW5kIiwidmFsIiwidHJpbSIsIiRmb3JtIiwiZm9ybSIsImNzc1ZhbGlkYXRpb25DbGFzcyIsInByZXZlbnREZWZhdWx0IiwiY2hlY2tWYWxpZGl0eSIsInJlcG9ydFZhbGlkaXR5IiwiYWRkTGlzdEhhbmRsZXIiLCIkYnV0dG9uIiwic2VuZFRvIiwic3RvcFByb3BhZ2F0aW9uIiwibW9kYWwiLCJnZXRTZWN1cml0eUtleSIsIiRtb2RhbCIsIiRrZXlJbnB1dCIsImxlbmd0aCIsImNvbmZpcm1TZWN1cml0eUtleSIsImxlbiIsIm1pbkxlbiIsIk51bWJlciIsImF0dHIiLCJvbkhpZGVNb2RhbCIsInJlbW92ZUF0dHIiLCJ0eXBlU2VsZWN0ZWQiLCJjaGVja3BvaW50VHlwZUFjdGl2ZSIsIm1vZGFsQ29uZmlnIiwiX2NvbmZpZyIsImRlZmF1bHRBdmF0YXJTcmMiLCJpbnNlcnRJdGVtIiwiY3NzQ2xzIiwibGlUcGwiLCJzdGF0cyIsImluZm8iLCJ0cGwiLCJjaGVja3BvaW50IiwidHlwZSIsInBob25lIiwibWV0YWRhdGEiLCJnZXRNZXRhZGF0YSIsInJlc2VuZFJlcXVlc3QiLCJpc1NlbmRSZXFPbmNlIiwiY2hlY2tSZXNwb25zZSIsImlzUmVzZW5kUmVxdWVzdCIsImFjY291bnRzIiwiTG9naW5Gb3JtIiwic2VsZWN0b3JDc3MiLCIkZW1haWwiLCIkdGV4dEFyZWFEZXNjcmlwdGlvbiIsInVzZXJMb2dpbkhlYWRlciIsIl9mb3JtRGF0YSIsInN1Ym1pdEZvcm0iLCJmb3JtRGF0YU9iaiIsInRvTG9jYWxlTG93ZXJDYXNlIiwicHVibGlzaCIsImxvZ091dCIsImJpbmRFdmVudHMiLCIkc2hvd0xvZ2luQm94QnRuSWQiLCIkYnV0dG9uU3VibWl0IiwiZXZlbnQiLCJpc0xvZ2luQnRuQ2xpY2siLCJpc0FkZEluc3RhZ3JhbUJ0bkNsaWNrZWQiLCJoYXNDbGFzcyIsInNlbGVjdG9yQ2xzIiwic3VibWl0QnRuIiwiUmVnaXN0ZXJGb3JtIiwiJHBhc3N3b3JkIiwiJHBhc3N3b3JkQ29uZmlybSIsInBhc3N3b3JkQ29uZmlybSIsInJlZ2lzdGVyIiwiZXJyb3IiLCJyZWdpc3RlckJveCIsIiRidG4iLCJpcyIsImlzUmVnQnRuQ2xpY2siLCJOZXR3b3JrIiwiJGVsIiwicmVzcG9uc2UiLCJFcnJvciIsInN0YXR1c1RleHQiLCJVUkwiLCJPUFRTIiwiZmV0Y2giLCJQcm9taXNlIiwiYWxsIiwianNvbiIsIm9rIiwiY2JFcnJvckRlZmF1bHQiLCJjaGVja1N0YXR1cyIsIkxvZ2luUGFnZSIsImhyZWYiLCJJbnN0YWdyYW0iLCJzZWxlY3RvckNTUyIsImdldEluc3RhZ3JhbUFjY291bnQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztB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d0k7QUFDSDs7QUFFRCxXQUFPO0FBQ0h4STtBQURHLEtBQVA7QUFHSDtBQXRDRCwrRDs7Ozs7O0FDSEEseUM7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJpbmRleC1hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjN2YyY2JmMjY1M2U0Y2FjNjMzNyIsImV4cG9ydCBjb25zdCBDT05TVCA9IHtcclxuICAgIHVybDoge1xyXG4gICAgICAgIGJhc2U6ICdodHRwOi8vYXBpLmx1eGdyYW0ucnUvdjEvJyxcclxuICAgICAgICByZWdpc3RyYXRpb246ICdyZWdpc3RyYXRpb24vYmFzaWMvJyxcclxuICAgICAgICBsb2dpbjogJ3JlZ2lzdHJhdGlvbi9iYXNpYy9sb2dpbicsXHJcbiAgICAgICAgY29uZmlybWF0aW9uOiAncmVnaXN0cmF0aW9uL2Jhc2ljL2NvbmZpcm1hdGlvbj90b2tlbicsXHJcbiAgICAgICAgaW5zdGFncmFtX2FkZEFjY291bnQ6ICdpbnN0YWdyYW0tYWNjb3VudHMvJyxcclxuICAgICAgICBpbnN0YWdyYW1BY2NvdW50X2dldE1ldGFEYXRhOiAnaW5zdGFncmFtLWFjY291bnRzL21ldGEnLFxyXG4gICAgICAgIGluc3RhZ3JhbUFjY291bnRfY2hlY2twb2ludDogJ2luc3RhZ3JhbS1hY2NvdW50cy9jaGVja3BvaW50LycsXHJcbiAgICAgICAgaW5zdGFncmFtQWNjb3VudF9jb25maXJtS2V5OiAnaW5zdGFncmFtLWFjY291bnRzL2NoZWNrcG9pbnQvJ1xyXG4gICAgfSxcclxuICAgIHVzZXI6IHtcclxuICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgIHRva2VuOiAnJ1xyXG4gICAgfSxcclxuICAgIGNvb2tpZVN0b3JhZ2U6IHtcclxuICAgICAgICB0b2tlbjogJ3VzZXJfbG9nZ2VkJyxcclxuICAgICAgICBlbWFpbENvbmZpcm1lZDogJ2VtYWlsX2NvbmZpcm1lZCdcclxuICAgIH0sXHJcbiAgICB1aVNlbGVjdG9yczoge1xyXG4gICAgICAgIGhlYWRlckxvZ2luQm94OiAnbmF2IC5sb2dpbi1ib3gnLFxyXG4gICAgICAgIGhlYWRlck5hdkxvZ2luQnRuOiAnbmF2IHVsIGxpIC5qc19sb2dpbicsXHJcbiAgICAgICAgaGVhZGVyUmVnQm94OiAnbmF2IC5yZWdpc3Rlci1ib3gnLFxyXG4gICAgICAgIGhlYWRlclJlZ0J0bjogJ25hdiB1bCBsaSAuanNfcmVnaXN0ZXInLFxyXG4gICAgICAgIGluc3RhZ3JhbToge1xyXG4gICAgICAgICAgICBhZGRBY2NvdW50QnRuU2VsZWN0b3I6ICcjanNfc2hvdy1sb2dpbi1ib3gnLFxyXG4gICAgICAgICAgICBhZGRBY2NvdW50QnRuSWQ6ICdqc19zaG93LWxvZ2luLWJveCdcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgICAgVVNFUl9MT0dHRUQ6ICd1c2VyX2xvZ2dlZCcsXHJcbiAgICAgICAgVVNFUl9MT0dPVVQ6ICd1c2VyX2xvZ291dCcsXHJcbiAgICAgICAgVVNFUl9FTUFJTF9DT05GSVJNRUQ6ICd1c2VyX2VtYWlsX2NvbmZpcm1lZCcsXHJcbiAgICAgICAgU1RPUF9GSVhFRF9TUElOTkVSOiAnc3RvcF9maXhlZF9zcGlubmVyJ1xyXG4gICAgfSxcclxuICAgIGdldFBhdGgobmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnVybC5iYXNlICsgdGhpcy51cmxbbmFtZV07XHJcbiAgICB9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tb24vanMtc2VydmljZXMvY29uc3RzLmpzIiwiLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IHtDT05TVH0gZnJvbSAnLi9jb25zdHMnO1xyXG5pbXBvcnQgTmV0d29yayBmcm9tICcuL25ldHdvcmsnO1xyXG5pbXBvcnQgQ29va2llU3RvcmFnZSBmcm9tICcuL2Nvb2tpZSc7XHJcblxyXG5jbGFzcyBVc2VyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm5ldHdvcmsgPSBuZXcgTmV0d29yaygpO1xyXG4gICAgICAgIHRoaXMuY29va2llU3RvcmFnZSA9IENvb2tpZVN0b3JhZ2U7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5nUG9zdCA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlzTG9nZ2VkSW4oKSB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5nZXRUb2tlbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRW1haWxDb25maXJtZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmNvb2tpZVN0b3JhZ2UuZ2V0KENPTlNULmNvb2tpZVN0b3JhZ2UuZW1haWxDb25maXJtZWQpID09PSAnY29uZmlybWVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VG9rZW4oKSB7XHJcbiAgICAgICAgY29uc3QgY29va2llVG9rZW4gPSB0aGlzLmNvb2tpZVN0b3JhZ2UuZ2V0KENPTlNULmNvb2tpZVN0b3JhZ2UudG9rZW4pO1xyXG4gICAgICAgIHJldHVybiBjb29raWVUb2tlbjtcclxuICAgIH1cclxuXHJcbiAgICBsb2dpbihmb3JtRGF0YSwgY2JFcnJvcikge1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSB7Li4udGhpcy5zZXR0aW5nUG9zdCwgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpfTtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KENPTlNULmdldFBhdGgoJ2xvZ2luJyksIHNldHRpbmcsIGNiRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEluc3RhZ3JhbUFjY291bnQoZm9ybURhdGEsIGNiRXJyb3IpIHtcclxuICAgICAgICBjb25zdCBzZXR0aW5nID0ge1xyXG4gICAgICAgICAgICAuLi50aGlzLnNldHRpbmdQb3N0LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QuaGVhZGVycyxcclxuICAgICAgICAgICAgICAgIHRva2VuOiB0aGlzLmdldFRva2VuKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1fYWRkQWNjb3VudCcpLCBzZXR0aW5nLCBjYkVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbnN0YWdyYW1BY2NvdW50KCkge1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSB7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QsXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QuaGVhZGVycyxcclxuICAgICAgICAgICAgICAgIHRva2VuOiB0aGlzLmdldFRva2VuKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1fYWRkQWNjb3VudCcpLCBzZXR0aW5nKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25maXJtKHRva2VuKSB7XHJcbiAgICAgICAgLy8gY29uc3QgY29uZmlybVVybCA9IENPTlNULmdldFBhdGgoJ2NvbmZpcm1hdGlvbicpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QoYCR7Q09OU1QuZ2V0UGF0aCgnY29uZmlybWF0aW9uJykgKyB0b2tlbn1gKTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3Rlcihmb3JtRGF0YSkge1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSB7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChDT05TVC5nZXRQYXRoKCdyZWdpc3RyYXRpb24nKSwgc2V0dGluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWV0YWRhdGEodG9rZW4sIGNiRXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KGAke0NPTlNULmdldFBhdGgoJ2luc3RhZ3JhbUFjY291bnRfZ2V0TWV0YURhdGEnKX1gLCB7aGVhZGVyczoge3Rva2VufX0sIGNiRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNlY3VyaXR5S2V5KHVzZXJuYW1lLCBjaGVja3BvaW50VHlwZSkge1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSB7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsndHlwZSc6IGNoZWNrcG9pbnRUeXBlfSksIC8vIHRvZG86IHRtcCBzZXQsIGl0IHNob3VsZCBiZSAndHlwZSdcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdC5oZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgJ3Rva2VuJzogJzNlMzIxZTYwMDI5NzExZTk5MjY0YTA0ODFjOGUxN2Q0JyAvLyB0b2RvOiB0aGlzLmdldFRva2VuKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChgJHtDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1BY2NvdW50X2NoZWNrcG9pbnQnKX0ke3VzZXJuYW1lfWAsIHNldHRpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmZpcm1TZWN1cml0eUtleShrZXksIHVzZXJuYW1lKSB7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeydzZWN1cml0eV9jb2RlJzoga2V5fSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QuaGVhZGVycyxcclxuICAgICAgICAgICAgICAgICd0b2tlbic6ICczZTMyMWU2MDAyOTcxMWU5OTI2NGEwNDgxYzhlMTdkNCcgLy8gdG9kbzogdGhpcy5nZXRUb2tlbigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QoYCR7Q09OU1QuZ2V0UGF0aCgnaW5zdGFncmFtQWNjb3VudF9jb25maXJtS2V5Jyl9JHt1c2VybmFtZX1gLCBzZXR0aW5nKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmxldCB1c2VySW5zdGFuY2UgPSBudWxsO1xyXG5cclxuaWYgKCF1c2VySW5zdGFuY2UpIHtcclxuICAgIHVzZXJJbnN0YW5jZSA9IG5ldyBVc2VyKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJJbnN0YW5jZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy91c2VyLmpzIiwiLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuLy8gaW1wb3J0IHtDT05TVH0gZnJvbSAnLi9jb25zdHMnO1xyXG5cclxuZnVuY3Rpb24gdmlld1V0aWxzKCkge1xyXG4gICAgZnVuY3Rpb24gc2hvd0luZm9NZXNzYWdlKHNlbGVjdG9yLCBtZXNzYWdlMSwgbWVzc2FnZTIpIHtcclxuICAgICAgICAkKHNlbGVjdG9yKS5lbXB0eSgpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoYCR7KG1lc3NhZ2UxKSA/IGA8cD5zdGF0dXM6ICR7bWVzc2FnZTF9PC9wPmAgOiAnJ31gKVxyXG4gICAgICAgICAgICAuYXBwZW5kKGA8cD4ke21lc3NhZ2UyfSA8L3A+YCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZmlsbExpc3QoJGxpc3QsIGRhdGFBcnJheSkge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gZGF0YUFycmF5O1xyXG4gICAgICAgIGNvbnN0IGNMaXN0ID0gJGxpc3Q7XHJcbiAgICAgICAgY0xpc3QuZW1wdHkoKTtcclxuICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpID0gJCgnPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCI+PC9saT4nKVxyXG4gICAgICAgICAgICAgICAgLmFwcGVuZFRvKGNMaXN0KTtcclxuICAgICAgICAgICAgJCgnPGEvPicpLmFkZENsYXNzKCd1aS1hbGwnKVxyXG4gICAgICAgICAgICAgICAgLnRleHQoaXRlbS51c2VybmFtZSlcclxuICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhsaSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNFbWFpbChlbWFpbCkge1xyXG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlICovXHJcbiAgICAgICAgY29uc3QgcmVnZXggPSAvXihbYS16QS1aMC05Xy4rLV0pK1xcQCgoW2EtekEtWjAtOS1dKStcXC4pKyhbYS16QS1aMC05XXsyLDR9KSskLztcclxuICAgICAgICByZXR1cm4gcmVnZXgudGVzdChlbWFpbCk7XHJcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSAqL1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2hvd0luZm9NZXNzYWdlLFxyXG4gICAgICAgIGZpbGxMaXN0LFxyXG4gICAgICAgIGlzRW1haWxcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHZpZXdVdGlscygpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uL2pzLXNlcnZpY2VzL3ZpZXcuanMiLCJcclxuY29uc3QgQ29va2llU3J2ID0ge1xyXG4gICAgZ2V0OiBuYW1lID0+IHtcclxuICAgICAgICBjb25zdCBjID0gZG9jdW1lbnQuY29va2llLm1hdGNoKGAoPzooPzpefC4qOyAqKSR7bmFtZX0gKj0gKihbXjtdKikuKiQpfF4uKiRgKVsxXTtcclxuICAgICAgICBpZiAoYykge1xyXG4gICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGMpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXQ6IChuYW1lLCB2YWx1ZSwgb3B0cyA9IHtwYXRoOiAnLycsIGRheXM6IDM2NX0pID0+IHtcclxuICAgICAgICBpZiAob3B0cy5kYXlzKSB7XHJcbiAgICAgICAgICAgIG9wdHNbJ21heC1hZ2UnXSA9IG9wdHMuZGF5cyAqIDYwICogNjAgKiAyNDtcclxuICAgICAgICAgICAgZGVsZXRlIG9wdHMuZGF5cztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXHJcbiAgICAgICAgb3B0cyA9IE9iamVjdC5lbnRyaWVzKG9wdHMpLnJlZHVjZSgoc3RyLCBbaywgdl0pID0+IGAke3N0cn07ICR7a309JHt2fWAsICcnKTtcclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBgJHtuYW1lfT0ke2VuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkgKyBvcHRzfWA7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlOiAobmFtZSwgb3B0cykgPT4gQ29va2llU3J2LnNldChuYW1lLCAnJywgeydtYXgtYWdlJzogLTEsIHBhdGg6ICcvJywgZGF5czogMCwgLi4ub3B0c30pXHJcbiAgICAvLyBwYXRoICYgZG9tYWluIG11c3QgbWF0Y2ggY29va2llIGJlaW5nIGRlbGV0ZWRcclxufTtcclxuXHJcbi8qXHJcbmNsYXNzIENvb2tpZVN0b3JhZ2Uge1xyXG4gICAgcmVhZChrZXkpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9ICQuY29va2llKGtleSk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyBudWxsIDogdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q29va2llKG5hbWUsIHZhbHVlLCBkYXlzKSB7XHJcbiAgICAgICAgbGV0IGV4cGlyZXMgPSAnJztcclxuICAgICAgICBpZiAoZGF5cykge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKGRheXMgKiAyNCAqIDYwICogNjAgKiAxMDAwKSk7XHJcbiAgICAgICAgICAgIGV4cGlyZXMgPSBgOyBleHBpcmVzPSR7ZGF0ZS50b1VUQ1N0cmluZygpfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGAke25hbWV9ID0keyh2YWx1ZSB8fCAnJykgKyBleHBpcmVzfTsgcGF0aD0vYDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb29raWUobmFtZSkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gYDsgJHtkb2N1bWVudC5jb29raWV9YDtcclxuICAgICAgICBjb25zdCBwYXJ0cyA9IHZhbHVlLnNwbGl0KGA7ICR7bmFtZX09YCk7XHJcbiAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCA9PSAyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJ0cy5wb3AoKS5zcGxpdCgnOycpLnNoaWZ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb29raWVTcnY7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tb24vanMtc2VydmljZXMvY29va2llLmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTAsMjAxMSwyMDEyLDIwMTMsMjAxNCBNb3JnYW4gUm9kZXJpY2sgaHR0cDovL3JvZGVyaWNrLmRrXG4gKiBMaWNlbnNlOiBNSVQgLSBodHRwOi8vbXJnbnJkcmNrLm1pdC1saWNlbnNlLm9yZ1xuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tcm9kZXJpY2svUHViU3ViSlNcbiAqL1xuXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3Rvcnkpe1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBQdWJTdWIgPSB7fTtcbiAgICByb290LlB1YlN1YiA9IFB1YlN1YjtcblxuICAgIHZhciBkZWZpbmUgPSByb290LmRlZmluZTtcblxuICAgIGZhY3RvcnkoUHViU3ViKTtcblxuICAgIC8vIEFNRCBzdXBwb3J0XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCl7XG4gICAgICAgIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIFB1YlN1YjsgfSk7XG5cbiAgICAgICAgLy8gQ29tbW9uSlMgYW5kIE5vZGUuanMgbW9kdWxlIHN1cHBvcnRcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jyl7XG4gICAgICAgIGlmIChtb2R1bGUgIT09IHVuZGVmaW5lZCAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICAgICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gUHViU3ViOyAvLyBOb2RlLmpzIHNwZWNpZmljIGBtb2R1bGUuZXhwb3J0c2BcbiAgICAgICAgfVxuICAgICAgICBleHBvcnRzLlB1YlN1YiA9IFB1YlN1YjsgLy8gQ29tbW9uSlMgbW9kdWxlIDEuMS4xIHNwZWNcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gUHViU3ViOyAvLyBDb21tb25KU1xuICAgIH1cblxufSgoIHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHdpbmRvdyApIHx8IHRoaXMsIGZ1bmN0aW9uIChQdWJTdWIpe1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBtZXNzYWdlcyA9IHt9LFxuICAgICAgICBsYXN0VWlkID0gLTE7XG5cbiAgICBmdW5jdGlvbiBoYXNLZXlzKG9iail7XG4gICAgICAgIHZhciBrZXk7XG5cbiAgICAgICAgZm9yIChrZXkgaW4gb2JqKXtcbiAgICAgICAgICAgIGlmICggb2JqLmhhc093blByb3BlcnR5KGtleSkgKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgdGhyb3dzIHRoZSBwYXNzZWQgZXhjZXB0aW9uLCBmb3IgdXNlIGFzIGFyZ3VtZW50IGZvciBzZXRUaW1lb3V0XG4gICAgICogQGFsaWFzIHRocm93RXhjZXB0aW9uXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHsgT2JqZWN0IH0gZXggQW4gRXJyb3Igb2JqZWN0XG4gICAgICovXG4gICAgZnVuY3Rpb24gdGhyb3dFeGNlcHRpb24oIGV4ICl7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiByZVRocm93RXhjZXB0aW9uKCl7XG4gICAgICAgICAgICB0aHJvdyBleDtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWxsU3Vic2NyaWJlcldpdGhEZWxheWVkRXhjZXB0aW9ucyggc3Vic2NyaWJlciwgbWVzc2FnZSwgZGF0YSApe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc3Vic2NyaWJlciggbWVzc2FnZSwgZGF0YSApO1xuICAgICAgICB9IGNhdGNoKCBleCApe1xuICAgICAgICAgICAgc2V0VGltZW91dCggdGhyb3dFeGNlcHRpb24oIGV4ICksIDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsbFN1YnNjcmliZXJXaXRoSW1tZWRpYXRlRXhjZXB0aW9ucyggc3Vic2NyaWJlciwgbWVzc2FnZSwgZGF0YSApe1xuICAgICAgICBzdWJzY3JpYmVyKCBtZXNzYWdlLCBkYXRhICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsaXZlck1lc3NhZ2UoIG9yaWdpbmFsTWVzc2FnZSwgbWF0Y2hlZE1lc3NhZ2UsIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKXtcbiAgICAgICAgdmFyIHN1YnNjcmliZXJzID0gbWVzc2FnZXNbbWF0Y2hlZE1lc3NhZ2VdLFxuICAgICAgICAgICAgY2FsbFN1YnNjcmliZXIgPSBpbW1lZGlhdGVFeGNlcHRpb25zID8gY2FsbFN1YnNjcmliZXJXaXRoSW1tZWRpYXRlRXhjZXB0aW9ucyA6IGNhbGxTdWJzY3JpYmVyV2l0aERlbGF5ZWRFeGNlcHRpb25zLFxuICAgICAgICAgICAgcztcblxuICAgICAgICBpZiAoICFtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eSggbWF0Y2hlZE1lc3NhZ2UgKSApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAocyBpbiBzdWJzY3JpYmVycyl7XG4gICAgICAgICAgICBpZiAoIHN1YnNjcmliZXJzLmhhc093blByb3BlcnR5KHMpKXtcbiAgICAgICAgICAgICAgICBjYWxsU3Vic2NyaWJlciggc3Vic2NyaWJlcnNbc10sIG9yaWdpbmFsTWVzc2FnZSwgZGF0YSApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRGVsaXZlcnlGdW5jdGlvbiggbWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApe1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gZGVsaXZlck5hbWVzcGFjZWQoKXtcbiAgICAgICAgICAgIHZhciB0b3BpYyA9IFN0cmluZyggbWVzc2FnZSApLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoICcuJyApO1xuXG4gICAgICAgICAgICAvLyBkZWxpdmVyIHRoZSBtZXNzYWdlIGFzIGl0IGlzIG5vd1xuICAgICAgICAgICAgZGVsaXZlck1lc3NhZ2UobWVzc2FnZSwgbWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyk7XG5cbiAgICAgICAgICAgIC8vIHRyaW0gdGhlIGhpZXJhcmNoeSBhbmQgZGVsaXZlciBtZXNzYWdlIHRvIGVhY2ggbGV2ZWxcbiAgICAgICAgICAgIHdoaWxlKCBwb3NpdGlvbiAhPT0gLTEgKXtcbiAgICAgICAgICAgICAgICB0b3BpYyA9IHRvcGljLnN1YnN0ciggMCwgcG9zaXRpb24gKTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHRvcGljLmxhc3RJbmRleE9mKCcuJyk7XG4gICAgICAgICAgICAgICAgZGVsaXZlck1lc3NhZ2UoIG1lc3NhZ2UsIHRvcGljLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWVzc2FnZUhhc1N1YnNjcmliZXJzKCBtZXNzYWdlICl7XG4gICAgICAgIHZhciB0b3BpYyA9IFN0cmluZyggbWVzc2FnZSApLFxuICAgICAgICAgICAgZm91bmQgPSBCb29sZWFuKG1lc3NhZ2VzLmhhc093blByb3BlcnR5KCB0b3BpYyApICYmIGhhc0tleXMobWVzc2FnZXNbdG9waWNdKSksXG4gICAgICAgICAgICBwb3NpdGlvbiA9IHRvcGljLmxhc3RJbmRleE9mKCAnLicgKTtcblxuICAgICAgICB3aGlsZSAoICFmb3VuZCAmJiBwb3NpdGlvbiAhPT0gLTEgKXtcbiAgICAgICAgICAgIHRvcGljID0gdG9waWMuc3Vic3RyKCAwLCBwb3NpdGlvbiApO1xuICAgICAgICAgICAgcG9zaXRpb24gPSB0b3BpYy5sYXN0SW5kZXhPZiggJy4nICk7XG4gICAgICAgICAgICBmb3VuZCA9IEJvb2xlYW4obWVzc2FnZXMuaGFzT3duUHJvcGVydHkoIHRvcGljICkgJiYgaGFzS2V5cyhtZXNzYWdlc1t0b3BpY10pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb3VuZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwdWJsaXNoKCBtZXNzYWdlLCBkYXRhLCBzeW5jLCBpbW1lZGlhdGVFeGNlcHRpb25zICl7XG4gICAgICAgIG1lc3NhZ2UgPSAodHlwZW9mIG1lc3NhZ2UgPT09ICdzeW1ib2wnKSA/IG1lc3NhZ2UudG9TdHJpbmcoKSA6IG1lc3NhZ2U7XG5cbiAgICAgICAgdmFyIGRlbGl2ZXIgPSBjcmVhdGVEZWxpdmVyeUZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICksXG4gICAgICAgICAgICBoYXNTdWJzY3JpYmVycyA9IG1lc3NhZ2VIYXNTdWJzY3JpYmVycyggbWVzc2FnZSApO1xuXG4gICAgICAgIGlmICggIWhhc1N1YnNjcmliZXJzICl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHN5bmMgPT09IHRydWUgKXtcbiAgICAgICAgICAgIGRlbGl2ZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoIGRlbGl2ZXIsIDAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQdWJsaXNoZXMgdGhlIG1lc3NhZ2UsIHBhc3NpbmcgdGhlIGRhdGEgdG8gaXQncyBzdWJzY3JpYmVyc1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBhbGlhcyBwdWJsaXNoXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBwdWJsaXNoXG4gICAgICogQHBhcmFtIHt9IGRhdGEgVGhlIGRhdGEgdG8gcGFzcyB0byBzdWJzY3JpYmVyc1xuICAgICAqIEByZXR1cm4geyBCb29sZWFuIH1cbiAgICAgKi9cbiAgICBQdWJTdWIucHVibGlzaCA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHJldHVybiBwdWJsaXNoKCBtZXNzYWdlLCBkYXRhLCBmYWxzZSwgUHViU3ViLmltbWVkaWF0ZUV4Y2VwdGlvbnMgKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUHVibGlzaGVzIHRoZSB0aGUgbWVzc2FnZSBzeW5jaHJvbm91c2x5LCBwYXNzaW5nIHRoZSBkYXRhIHRvIGl0J3Mgc3Vic2NyaWJlcnNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgcHVibGlzaFN5bmNcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHB1Ymxpc2hcbiAgICAgKiBAcGFyYW0ge30gZGF0YSBUaGUgZGF0YSB0byBwYXNzIHRvIHN1YnNjcmliZXJzXG4gICAgICogQHJldHVybiB7IEJvb2xlYW4gfVxuICAgICAqL1xuICAgIFB1YlN1Yi5wdWJsaXNoU3luYyA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHJldHVybiBwdWJsaXNoKCBtZXNzYWdlLCBkYXRhLCB0cnVlLCBQdWJTdWIuaW1tZWRpYXRlRXhjZXB0aW9ucyApO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmVzIHRoZSBwYXNzZWQgZnVuY3Rpb24gdG8gdGhlIHBhc3NlZCBtZXNzYWdlLiBFdmVyeSByZXR1cm5lZCB0b2tlbiBpcyB1bmlxdWUgYW5kIHNob3VsZCBiZSBzdG9yZWQgaWYgeW91IG5lZWQgdG8gdW5zdWJzY3JpYmVcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgc3Vic2NyaWJlXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBzdWJzY3JpYmUgdG9cbiAgICAgKiBAcGFyYW0geyBGdW5jdGlvbiB9IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBhIG5ldyBtZXNzYWdlIGlzIHB1Ymxpc2hlZFxuICAgICAqIEByZXR1cm4geyBTdHJpbmcgfVxuICAgICAqL1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUgPSBmdW5jdGlvbiggbWVzc2FnZSwgZnVuYyApe1xuICAgICAgICBpZiAoIHR5cGVvZiBmdW5jICE9PSAnZnVuY3Rpb24nKXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lc3NhZ2UgPSAodHlwZW9mIG1lc3NhZ2UgPT09ICdzeW1ib2wnKSA/IG1lc3NhZ2UudG9TdHJpbmcoKSA6IG1lc3NhZ2U7XG5cbiAgICAgICAgLy8gbWVzc2FnZSBpcyBub3QgcmVnaXN0ZXJlZCB5ZXRcbiAgICAgICAgaWYgKCAhbWVzc2FnZXMuaGFzT3duUHJvcGVydHkoIG1lc3NhZ2UgKSApe1xuICAgICAgICAgICAgbWVzc2FnZXNbbWVzc2FnZV0gPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZvcmNpbmcgdG9rZW4gYXMgU3RyaW5nLCB0byBhbGxvdyBmb3IgZnV0dXJlIGV4cGFuc2lvbnMgd2l0aG91dCBicmVha2luZyB1c2FnZVxuICAgICAgICAvLyBhbmQgYWxsb3cgZm9yIGVhc3kgdXNlIGFzIGtleSBuYW1lcyBmb3IgdGhlICdtZXNzYWdlcycgb2JqZWN0XG4gICAgICAgIHZhciB0b2tlbiA9ICd1aWRfJyArIFN0cmluZygrK2xhc3RVaWQpO1xuICAgICAgICBtZXNzYWdlc1ttZXNzYWdlXVt0b2tlbl0gPSBmdW5jO1xuICAgICAgICBcbiAgICAgICAgLy8gcmV0dXJuIHRva2VuIGZvciB1bnN1YnNjcmliaW5nXG4gICAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU3Vic2NyaWJlcyB0aGUgcGFzc2VkIGZ1bmN0aW9uIHRvIHRoZSBwYXNzZWQgbWVzc2FnZSBvbmNlXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQGFsaWFzIHN1YnNjcmliZU9uY2VcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHN1YnNjcmliZSB0b1xuICAgICAqIEBwYXJhbSB7IEZ1bmN0aW9uIH0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIGEgbmV3IG1lc3NhZ2UgaXMgcHVibGlzaGVkXG4gICAgICogQHJldHVybiB7IFB1YlN1YiB9XG4gICAgICovXG4gICAgUHViU3ViLnN1YnNjcmliZU9uY2UgPSBmdW5jdGlvbiggbWVzc2FnZSwgZnVuYyApe1xuICAgICAgICB2YXIgdG9rZW4gPSBQdWJTdWIuc3Vic2NyaWJlKCBtZXNzYWdlLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgLy8gYmVmb3JlIGZ1bmMgYXBwbHksIHVuc3Vic2NyaWJlIG1lc3NhZ2VcbiAgICAgICAgICAgIFB1YlN1Yi51bnN1YnNjcmliZSggdG9rZW4gKTtcbiAgICAgICAgICAgIGZ1bmMuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFB1YlN1YjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGFsbCBzdWJzY3JpcHRpb25zXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBhbGlhcyBjbGVhckFsbFN1YnNjcmlwdGlvbnNcbiAgICAgKi9cbiAgICBQdWJTdWIuY2xlYXJBbGxTdWJzY3JpcHRpb25zID0gZnVuY3Rpb24gY2xlYXJBbGxTdWJzY3JpcHRpb25zKCl7XG4gICAgICAgIG1lc3NhZ2VzID0ge307XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENsZWFyIHN1YnNjcmlwdGlvbnMgYnkgdGhlIHRvcGljXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBhbGlhcyBjbGVhckFsbFN1YnNjcmlwdGlvbnNcbiAgICAgKi9cbiAgICBQdWJTdWIuY2xlYXJTdWJzY3JpcHRpb25zID0gZnVuY3Rpb24gY2xlYXJTdWJzY3JpcHRpb25zKHRvcGljKXtcbiAgICAgICAgdmFyIG07XG4gICAgICAgIGZvciAobSBpbiBtZXNzYWdlcyl7XG4gICAgICAgICAgICBpZiAobWVzc2FnZXMuaGFzT3duUHJvcGVydHkobSkgJiYgbS5pbmRleE9mKHRvcGljKSA9PT0gMCl7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG1lc3NhZ2VzW21dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgc3Vic2NyaXB0aW9uc1xuICAgICAqXG4gICAgICogLSBXaGVuIHBhc3NlZCBhIHRva2VuLCByZW1vdmVzIGEgc3BlY2lmaWMgc3Vic2NyaXB0aW9uLlxuICAgICAqXG5cdCAqIC0gV2hlbiBwYXNzZWQgYSBmdW5jdGlvbiwgcmVtb3ZlcyBhbGwgc3Vic2NyaXB0aW9ucyBmb3IgdGhhdCBmdW5jdGlvblxuICAgICAqXG5cdCAqIC0gV2hlbiBwYXNzZWQgYSB0b3BpYywgcmVtb3ZlcyBhbGwgc3Vic2NyaXB0aW9ucyBmb3IgdGhhdCB0b3BpYyAoaGllcmFyY2h5KVxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWxpYXMgc3Vic2NyaWJlT25jZVxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB8IEZ1bmN0aW9uIH0gdmFsdWUgQSB0b2tlbiwgZnVuY3Rpb24gb3IgdG9waWMgdG8gdW5zdWJzY3JpYmUgZnJvbVxuICAgICAqIEBleGFtcGxlIC8vIFVuc3Vic2NyaWJpbmcgd2l0aCBhIHRva2VuXG4gICAgICogdmFyIHRva2VuID0gUHViU3ViLnN1YnNjcmliZSgnbXl0b3BpYycsIG15RnVuYyk7XG4gICAgICogUHViU3ViLnVuc3Vic2NyaWJlKHRva2VuKTtcbiAgICAgKiBAZXhhbXBsZSAvLyBVbnN1YnNjcmliaW5nIHdpdGggYSBmdW5jdGlvblxuICAgICAqIFB1YlN1Yi51bnN1YnNjcmliZShteUZ1bmMpO1xuICAgICAqIEBleGFtcGxlIC8vIFVuc3Vic2NyaWJpbmcgZnJvbSBhIHRvcGljXG4gICAgICogUHViU3ViLnVuc3Vic2NyaWJlKCdteXRvcGljJyk7XG4gICAgICovXG4gICAgUHViU3ViLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICB2YXIgZGVzY2VuZGFudFRvcGljRXhpc3RzID0gZnVuY3Rpb24odG9waWMpIHtcbiAgICAgICAgICAgICAgICB2YXIgbTtcbiAgICAgICAgICAgICAgICBmb3IgKCBtIGluIG1lc3NhZ2VzICl7XG4gICAgICAgICAgICAgICAgICAgIGlmICggbWVzc2FnZXMuaGFzT3duUHJvcGVydHkobSkgJiYgbS5pbmRleE9mKHRvcGljKSA9PT0gMCApe1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYSBkZXNjZW5kYW50IG9mIHRoZSB0b3BpYyBleGlzdHM6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc1RvcGljICAgID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAoIG1lc3NhZ2VzLmhhc093blByb3BlcnR5KHZhbHVlKSB8fCBkZXNjZW5kYW50VG9waWNFeGlzdHModmFsdWUpICksXG4gICAgICAgICAgICBpc1Rva2VuICAgID0gIWlzVG9waWMgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyxcbiAgICAgICAgICAgIGlzRnVuY3Rpb24gPSB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicsXG4gICAgICAgICAgICByZXN1bHQgPSBmYWxzZSxcbiAgICAgICAgICAgIG0sIG1lc3NhZ2UsIHQ7XG5cbiAgICAgICAgaWYgKGlzVG9waWMpe1xuICAgICAgICAgICAgUHViU3ViLmNsZWFyU3Vic2NyaXB0aW9ucyh2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKCBtIGluIG1lc3NhZ2VzICl7XG4gICAgICAgICAgICBpZiAoIG1lc3NhZ2VzLmhhc093blByb3BlcnR5KCBtICkgKXtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZXNbbV07XG5cbiAgICAgICAgICAgICAgICBpZiAoIGlzVG9rZW4gJiYgbWVzc2FnZVt2YWx1ZV0gKXtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG1lc3NhZ2VbdmFsdWVdO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdG9rZW5zIGFyZSB1bmlxdWUsIHNvIHdlIGNhbiBqdXN0IHN0b3AgaGVyZVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNGdW5jdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKCB0IGluIG1lc3NhZ2UgKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmhhc093blByb3BlcnR5KHQpICYmIG1lc3NhZ2VbdF0gPT09IHZhbHVlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgbWVzc2FnZVt0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xufSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3B1YnN1Yi1qcy9zcmMvcHVic3ViLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAnLi9iYXNlLnNjc3MnO1xyXG4vLyBpbXBvcnQgJ2Jvb3RzdHJhcCc7XHJcblxyXG5pbXBvcnQgUmVnaXN0ZXJGb3JtIGZyb20gJy4vYmxvY2tzL3JlZ2lzdGVyLWZvcm0vcmVnaXN0ZXItZm9ybSc7XHJcbmltcG9ydCB7TG9naW5Gb3JtfSBmcm9tICcuL2Jsb2Nrcy9sb2dpbi1mb3JtL2xvZ2luLWZvcm0nO1xyXG5pbXBvcnQge0xvZ2luUGFnZX0gZnJvbSAnLi9wYWdlcy9fYXV0aC9sb2dpbi1wYWdlJztcclxuaW1wb3J0IHtjb25maXJtYXRpb25XaXRoUmVkaXJlY3R9IGZyb20gJy4vYmxvY2tzL2NvbmZpcm0tcmVnL2NvbmZpcm0tcmVnJztcclxuaW1wb3J0IHtJbnN0YWdyYW19IGZyb20gJy4vcGFnZXMvX2luc3RhZ3JhbS9pbnN0YWdyYW0nO1xyXG5pbXBvcnQgKiBhcyBoZWFkZXIgZnJvbSAnLi9ibG9ja3MvaGVhZGVyL2hlYWRlcic7XHJcbmltcG9ydCAqIGFzIGJ1cmdlck1lbnUgZnJvbSAnLi9ibG9ja3MvaGVhZGVyL2J1cmdlci1tZW51L2J1cmdlci1tZW51JztcclxuaW1wb3J0IHtDT05TVH0gZnJvbSAnLi9jb21tb24vanMtc2VydmljZXMvY29uc3RzJztcclxuaW1wb3J0ICogYXMgaW5zdGFncmFtQWNjb3VudHMgZnJvbSAnLi9ibG9ja3MvaW5zdGFncmFtLWFjY291bnRzLWxpc3QvaW5zdGFncmFtLWFjY291bnRzLWxpc3QnO1xyXG5cclxuY29uc3Qgc2VsZWN0b3JDc3NMb2dpbkZvcm0gPSB7XHJcbiAgICBfbG9naW5Cb3g6IENPTlNULnVpU2VsZWN0b3JzLmhlYWRlckxvZ2luQm94LFxyXG4gICAgX2Zvcm1JZDogJyNqc19sb2dpbi1mb3JtJyxcclxuICAgIF9idXR0b25TdWJtaXRJZDogJyNqc19sb2dpbl9idG4nLFxyXG4gICAgX3Nob3dMb2dpbkJveEJ0bklkOiBDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJOYXZMb2dpbkJ0blxyXG59O1xyXG5cclxuY29uc3Qgc2VsZWN0b3JDc3NMb2dpbkZvcm1JbnN0YWdyYW0gPSB7XHJcbiAgICBfbG9naW5Cb3g6ICdtYWluIC5sb2dpbi1ib3gnLFxyXG4gICAgX2Zvcm1JZDogJyNqc19pbnN0YWdyYW0tYWRkLWFjY291bnQnLFxyXG4gICAgX2J1dHRvblN1Ym1pdElkOiAnI2pzX2luc3RhZ3JhbS1hZGQtYWNjb3VudC0tYnRuJyxcclxuICAgIF9zaG93TG9naW5Cb3hCdG5JZDogJyNqc19zaG93LWxvZ2luLWJveCcsXHJcbiAgICBpc0xvZ2luSW5zdGFncmFtOiB0cnVlXHJcbn07XHJcblxyXG5jb25zdCBpbml0ID0gKCkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2luaXQganMgaGVyZScsIENPTlNULnVzZXIpO1xyXG4gICAgKG5ldyBSZWdpc3RlckZvcm0oKSkuaW5pdCgpO1xyXG4gICAgTG9naW5Gb3JtKHNlbGVjdG9yQ3NzTG9naW5Gb3JtKS5pbml0KCk7XHJcbiAgICBMb2dpbkZvcm0oc2VsZWN0b3JDc3NMb2dpbkZvcm1JbnN0YWdyYW0pLmluaXQoKTsgLy8gaW5pdCBpbnN0YWdyYW0gbG9naW4gZm9ybSohL1xyXG4gICAgTG9naW5QYWdlKHtcclxuICAgICAgICBfbG9naW5Cb3g6ICcuYXV0aC5sb2dpbiAuY2FyZC1zaWduaW4nLFxyXG4gICAgICAgIF9mb3JtSWQ6ICcuZm9ybS1zaWduaW4nLFxyXG4gICAgICAgIF9idXR0b25TdWJtaXRJZDogJy5mb3JtLXNpZ25pbiBbdHlwZT1cInN1Ym1pdFwiXSdcclxuICAgIH0pLmluaXQoKTtcclxuICAgIEluc3RhZ3JhbSgpLmluaXQoKTtcclxuICAgIGNvbmZpcm1hdGlvbldpdGhSZWRpcmVjdCgpLmluaXQoKTtcclxuICAgIGhlYWRlci5pbml0SGVhZGVyKCk7XHJcbiAgICBidXJnZXJNZW51LmluaXQoKTtcclxuICAgIGluc3RhZ3JhbUFjY291bnRzLmluaXQoKTtcclxufTtcclxuXHJcbigoKSA9PiBpbml0KCkpKCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ib290c3RyYXAuanMiLCIvKiBlc2xpbnQtZGlzYWJsZSBzb3J0LXZhcnMgKi9cclxuLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3VzZXInO1xyXG5pbXBvcnQge0NPTlNUfSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29uc3RzJztcclxuaW1wb3J0IGNvb2tpZVN0b3JhZ2UgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2Nvb2tpZSc7XHJcblxyXG5jb25zdCBwYXJzZVF1ZXJ5U3RyaW5nID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgY29uc3Qgc3RyID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcclxuICAgIGNvbnN0IG9ialVSTCA9IHt9O1xyXG5cclxuICAgIHN0ci5yZXBsYWNlKFxyXG4gICAgICBuZXcgUmVnRXhwKCcoW14/PSZdKykoPShbXiZdKikpPycsICdnJyksXHJcbiAgICAgICAgZnVuY3Rpb24oJDAsICQxLCAkMikge1xyXG4gICAgICAgICAgICBvYmpVUkxbJDFdID0gJDI7XHJcbiAgICAgICAgfVxyXG4gICk7XHJcbiAgICByZXR1cm4gb2JqVVJMO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpcm1hdGlvbldpdGhSZWRpcmVjdCgpIHtcclxuICAgIGNvbnN0IHVzZXIgPSBVc2VyO1xyXG4gICAgY29uc3QgcGFyYW1zID0gcGFyc2VRdWVyeVN0cmluZygpO1xyXG4gICAgLy8gRXhhbXBsZSBob3cgdG8gdXNlIGl0OlxyXG5cclxuICAgIGNvbnN0IHNlbmRDb25maXJtID0gZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICAgICAgdXNlci5jb25maXJtKHRva2VuKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgJiYgcmVzdWx0LnN0YXR1cy5zdGF0ZSA9PT0gJ29rJykge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHNhdmUgdGhlIGl0ZW1cclxuICAgICAgICAgICAgICAgIGNvb2tpZVN0b3JhZ2Uuc2V0KENPTlNULmNvb2tpZVN0b3JhZ2UuZW1haWxDb25maXJtZWQsICdjb25maXJtZWQnKTtcclxuICAgICAgICAgICAgICAgIGNvb2tpZVN0b3JhZ2Uuc2V0KENPTlNULmNvb2tpZVN0b3JhZ2UudG9rZW4sIHJlc3VsdC5kYXRhLnRva2VuKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24gPSBjb25maXJtLXJlZ2lzdHJhdGlvbi5odG1sP3Rva2VuPSdmcm9tIHNlcnZlcic7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gcmV0cmlldmUgdGhlIG9iamVjdCBpbiBhIHN0cmluZyBmb3JtXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXN0b21lcnNEYXRhU3RyaW5nID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnY3VzdG9tZXJzRGF0YScpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VzdG9tZXJzRGF0YVN0cmluZyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVxdWVzdCBzdWNjZWVkZWQgd2l0aCBKU09OIHJlc3BvbnNlJywgcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICQoJy5jb25maXJtLXJlZ2lzdHJhdGlvbicpLmFwcGVuZChgPHA+Y29uZmlybWF0aW9uIHN0YXR1czogJHtyZXN1bHQuc3RhdHVzLnN0YXRlfTwvcD5gKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICcuL3Byb2ZpbGUuaHRtbCc7XHJcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZWRpcmVjdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkb3Qtbm90YXRpb25cclxuICAgICAgICBjb25zdCB0b2tlbiA9IHBhcmFtc1sndG9rZW4nXTtcclxuXHJcbiAgICAgICAgaWYgKCFsb2NhdGlvbi5wYXRobmFtZS5pbmRleE9mKCdjb25maXJtLXJlZ2lzdHJhdGlvbicpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZW5kIHJlcSB0byAnLCB0b2tlbik7XHJcbiAgICAgICAgICAgIHNlbmRDb25maXJtKHRva2VuKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAgICAgcmVkaXJlY3QoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGluaXRcclxuICAgIH07XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9jb25maXJtLXJlZy9jb25maXJtLXJlZy5qcyIsIi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG4vLyBjb25zdCBoYW1idXJnZXJCdXR0b25DbHMgPSAnI2FzaWRlX21vYmlsZV9fYnV0dG9uJztcclxuLy8gY29uc3QgaGFtYnVyZ2VyTWVudUNscyA9ICcuYXNpZGUtYnVyZ2VyLW1lbnUnO1xyXG4vLyBjb25zdCBoYW1idXJnZXJNZW51T3BlbmVkQ2xhc3MgPSAnYnVyZ2VyLW1lbnUtLWNsb3NlZCc7XHJcbi8vIGNvbnN0IGhhbWJ1cmdlckJ1dHRvbkNsb3NlQ2xhc3MgPSAnYnVyZ2VyLW1lbnVfX2J1dHRvbi0tY2xvc2UnO1xyXG5jb25zdCBzZWxlY3RvcnNFbCA9IHtcclxuICAgIGxlZnRNZW51OiB7XHJcbiAgICAgICAgaGFtYnVyZ2VyQnV0dG9uQ2xzOiAnI2FzaWRlX21vYmlsZV9fYnV0dG9uJyxcclxuICAgICAgICBoYW1idXJnZXJNZW51Q2xzOiAnLmFzaWRlLWJ1cmdlci1tZW51JyxcclxuICAgICAgICBoYW1idXJnZXJNZW51T3BlbmVkQ2xhc3M6ICdidXJnZXItbWVudS0tY2xvc2VkJyxcclxuICAgICAgICBoYW1idXJnZXJCdXR0b25DbG9zZUNsYXNzOiAnYnVyZ2VyLW1lbnVfX2J1dHRvbi0tY2xvc2UnXHJcbiAgICB9LFxyXG4gICAgcmlnaHRNZW51OiB7XHJcbiAgICAgICAgaGFtYnVyZ2VyQnV0dG9uQ2xzOiAnI2hlYWRlcl9tb2JpbGVfdG9nZ2xlcicsXHJcbiAgICAgICAgaGFtYnVyZ2VyTWVudUNsczogJy5yLXNpZGUtYnVyZ2VyLW1lbnUnLFxyXG4gICAgICAgIGhhbWJ1cmdlck1lbnVPcGVuZWRDbGFzczogJ3Itc2lkZS1idXJnZXItbWVudS0tb3BlbicsXHJcbiAgICAgICAgaGFtYnVyZ2VyQnV0dG9uQ2xvc2VDbGFzczogJ2J1cmdlci1tZW51LXJpZ2h0X19idXR0b24tLWNsb3NlJ1xyXG4gICAgfSxcclxuICAgIHN1YkhlYWRlcjoge1xyXG4gICAgICAgIGhhbWJ1cmdlckJ1dHRvbkNsczogJyNoZWFkZXJfbW9iaWxlX3RvcGJhcl90b2dnbGVyJyxcclxuICAgICAgICBoYW1idXJnZXJNZW51Q2xzOiAnLnN1Yi1oZWFkZXInLFxyXG4gICAgICAgIGhhbWJ1cmdlck1lbnVPcGVuZWRDbGFzczogJ3N1Yi1oZWFkZXItLW9wZW4nLFxyXG4gICAgICAgIGhhbWJ1cmdlckJ1dHRvbkNsb3NlQ2xhc3M6ICdzdWItaGVhZGVyLWJ1dHRvbi0tY2xvc2UnXHJcbiAgICB9XHJcbn07XHJcblxyXG4vKipcclxuICogVG9nZ2xlIGhhbWJ1cmdlciBtZW51IHBvcG92ZXJcclxuICovXHJcbmZ1bmN0aW9uIHRvZ2dsZUhhbWJ1cmdlck1lbnUobWVudU5hbWUpIHtcclxuICAgIGNvbnN0IHtoYW1idXJnZXJNZW51Q2xzLCBoYW1idXJnZXJCdXR0b25DbHMsIGhhbWJ1cmdlckJ1dHRvbkNsb3NlQ2xhc3MsIGhhbWJ1cmdlck1lbnVPcGVuZWRDbGFzc30gPSBzZWxlY3RvcnNFbFttZW51TmFtZV07XHJcbiAgICAkKGhhbWJ1cmdlckJ1dHRvbkNscykudG9nZ2xlQ2xhc3MoaGFtYnVyZ2VyQnV0dG9uQ2xvc2VDbGFzcyk7XHJcbiAgICAkKGhhbWJ1cmdlck1lbnVDbHMpLnRvZ2dsZUNsYXNzKGhhbWJ1cmdlck1lbnVPcGVuZWRDbGFzcyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbml0IGhhbWJ1cmdlciBtZW51XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIGNvbnN0IGxlZnRNZW51ID0gJ2xlZnRNZW51JztcclxuICAgIGNvbnN0IHJpZ2h0TWVudSA9ICdyaWdodE1lbnUnO1xyXG4gICAgY29uc3Qgc3ViSGVhZGVyID0gJ3N1YkhlYWRlcic7XHJcblxyXG4gICAgJChzZWxlY3RvcnNFbFtsZWZ0TWVudV0uaGFtYnVyZ2VyQnV0dG9uQ2xzKS5vbignY2xpY2snLCB0b2dnbGVIYW1idXJnZXJNZW51LmJpbmQodGhpcywgbGVmdE1lbnUpKTtcclxuICAgICQoc2VsZWN0b3JzRWxbcmlnaHRNZW51XS5oYW1idXJnZXJCdXR0b25DbHMpLm9uKCdjbGljaycsIHRvZ2dsZUhhbWJ1cmdlck1lbnUuYmluZCh0aGlzLCByaWdodE1lbnUpKTtcclxuICAgICQoc2VsZWN0b3JzRWxbc3ViSGVhZGVyXS5oYW1idXJnZXJCdXR0b25DbHMpLm9uKCdjbGljaycsIHRvZ2dsZUhhbWJ1cmdlck1lbnUuYmluZCh0aGlzLCBzdWJIZWFkZXIpKTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL2hlYWRlci9idXJnZXItbWVudS9idXJnZXItbWVudS5qcyIsIi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy91c2VyJztcclxuaW1wb3J0IFB1YlN1YiBmcm9tICdwdWJzdWItanMnOyAvLyBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9wdWJzdWItanNcclxuaW1wb3J0IHtDT05TVH0gZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2NvbnN0cyc7XHJcblxyXG5jb25zdCBzZWxlY3RvckxvZ2luU3RhdGUgPSAnLmpzX21lc3NhZ2VfbG9nZ2VkLS10ZXh0JztcclxuY29uc3Qgc2VsZWN0b3JFbWFpbENvbmZpcm1TdGF0ZSA9ICcuanNfZW1haWwtY29uZmlybS0tdGV4dCc7XHJcbmNvbnN0IGNsb3NlQ2xhc3MgPSAnZC1ub25lJztcclxuY29uc3Qgb3BlbmVkQ2xhc3MgPSAnZC1ibG9jayc7XHJcblxyXG5mdW5jdGlvbiBlbWFpbE5vdENvbmZpcm1lZCgpIHtcclxuICAgIGNvbnN0ICRlbWFpbG5Nc2cgPSAkKHNlbGVjdG9yRW1haWxDb25maXJtU3RhdGUpO1xyXG4gICAgJGVtYWlsbk1zZy50ZXh0KCcqKmVtYWlsTm90Q29uZmlybWVkKiogRW1haWwg0L3QtSDQv9C+0LTRgtCy0LXRgNC20LTQtdC9LicpLmNzcygnY29sb3InLCAnbGlnaHRjb3JhbCcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbkxvZ2luU3Vic2NyaWJlKG1zZywgZGF0YSkge1xyXG4gICAgLy8gY29uc29sZS5sb2cobXNnLCBkYXRhKTtcclxuICAgICQoQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyTmF2TG9naW5CdG4pLmFkZENsYXNzKGNsb3NlQ2xhc3MpLnJlbW92ZUNsYXNzKG9wZW5lZENsYXNzKTtcclxuICAgICQoQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyUmVnQnRuKS5hZGRDbGFzcyhjbG9zZUNsYXNzKS5yZW1vdmVDbGFzcyhvcGVuZWRDbGFzcyk7XHJcbiAgICAkKENPTlNULnVpU2VsZWN0b3JzLmhlYWRlckxvZ2luQm94KS5hZGRDbGFzcyhjbG9zZUNsYXNzKS5yZW1vdmVDbGFzcyhvcGVuZWRDbGFzcyk7XHJcblxyXG4gICAgJCgnLm5hdi1saW5rLmpzX2xvZ091dCcpLmFkZENsYXNzKG9wZW5lZENsYXNzKS5yZW1vdmVDbGFzcyhjbG9zZUNsYXNzKTsgLy8gc2hvd1xyXG4gICAgY29uc3QgJGxvZ2luTXNnID0gJChzZWxlY3RvckxvZ2luU3RhdGUpO1xyXG4gICAgJGxvZ2luTXNnLnRleHQoJyoqb25Mb2dpblN1YnNjcmliZSoqINCy0Ysg0LfQsNC70L7Qs9C40L3QuNC70LjRgdGMINCyIEx1eGdyYW0g0YPRgdC/0LXRiNC90L4nKS5jc3MoJ2NvbG9yJywgJ2xpZ2h0Ymx1ZScpO1xyXG4gICAgY29uc3QgaXNFbWFpbENvbmZpcm1lZCA9IFVzZXIuaXNFbWFpbENvbmZpcm1lZCgpO1xyXG4gICAgaWYgKCFpc0VtYWlsQ29uZmlybWVkKSB7XHJcbiAgICAgICAgZW1haWxOb3RDb25maXJtZWQoKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0xvZ291dCgpIHtcclxuICAgIC8vIGNoZWNrIGlzIGxvZ2dlZFxyXG4gICAgY29uc3QgaXNMb2dnZWQgPSBVc2VyLmlzTG9nZ2VkSW4oKTtcclxuICAgIGNvbnN0IGlzRW1haWxDb25maXJtZWQgPSBVc2VyLmlzRW1haWxDb25maXJtZWQoKTtcclxuICAgIGlmICghaXNFbWFpbENvbmZpcm1lZCkge1xyXG4gICAgICAgIGVtYWlsTm90Q29uZmlybWVkKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNMb2dnZWQpIHtcclxuICAgICAgICAkKCcubmF2LWxpbmsuanNfbG9nT3V0JykucGFyZW50KCkuc2hvdygpO1xyXG4gICAgICAgICQoJy5qc19lbWFpbC1jb25maXJtLS10ZXh0JykudGV4dCgn0LLRiyDQt9Cw0LvQvtCz0LjQvdC40LvQuNGB0Ywg0YPRgdC/0LXRiNC90L4nKTtcclxuICAgICAgICBjb25zdCBvbGRVUkwgPSBkb2N1bWVudC5yZWZlcnJlcjtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhvbGRVUkwpO1xyXG4gICAgICAgIGlmIChvbGRVUkwuaW5jbHVkZXMoJ2NvbmZpcm0tcmVnaXN0cmF0aW9uJykpIHtcclxuICAgICAgICAgICAgJCgnLmpzX21lc3NhZ2VfbG9nZ2VkLS10ZXh0JykudGV4dCgn0LLRiyDQv9C+0LTRgtCy0LXRgNC00LjQu9C4INGA0LXQs9C40YHRgtGA0LDRhtC40Y4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb25Mb2dpblN1YnNjcmliZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKHNlbGVjdG9yTG9naW5TdGF0ZSkudGV4dCgn0J/RgNC40LLQtdGCINCw0L3QvtC90LjQvNC90YvQuSDQv9C+0LvRjNC30L7QstCw0YLQtdC70YwnKTtcclxuICAgICAgICAkKHNlbGVjdG9yRW1haWxDb25maXJtU3RhdGUpLmVtcHR5KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbml0IGhlYWRlclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRIZWFkZXIoKSB7XHJcbiAgIC8vIGNoZWNrIG90aGVyIGhhbmRsZXIgaW4gbG9naW4tZm9ybS5qc1xyXG4gICAgY29uc3QgJGxvZ2luQm94ID0gJChDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJMb2dpbkJveCk7XHJcbiAgICBjb25zdCAkcmVnaXN0ZXJCb3ggPSAkKENPTlNULnVpU2VsZWN0b3JzLmhlYWRlclJlZ0JveCk7XHJcblxyXG4gICAgUHViU3ViLnN1YnNjcmliZShDT05TVC5ldmVudHMuVVNFUl9MT0dHRUQsIG9uTG9naW5TdWJzY3JpYmUpO1xyXG5cclxuICAgIHNob3dMb2dvdXQoKTtcclxuXHJcbiAgICAkKENPTlNULnVpU2VsZWN0b3JzLmhlYWRlclJlZ0J0bikub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICRsb2dpbkJveC5oaWRlKCk7XHJcbiAgICAgICAgJHJlZ2lzdGVyQm94LmNzcyh7J3RvcCc6IDAsICdyaWdodCc6IDB9KVxyXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ2JnLWxpZ2h0IGJvcmRlciBtdC01IG14LWF1dG8gcG9zaXRpb24tYWJzb2x1dGUgcHgtMyBkLWJsb2NrJylcclxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyTmF2TG9naW5CdG4pLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAkbG9naW5Cb3guYWRkQ2xhc3MoJ2QtYmxvY2snKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgJHJlZ2lzdGVyQm94LmFkZENsYXNzKCdkLW5vbmUnKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpO1xyXG4gICAgfSk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9oZWFkZXIvaGVhZGVyLmpzIiwiLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3VzZXInO1xyXG4vLyBpbXBvcnQgU3Bpbm5lciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvc3Bpbm5lcic7XHJcbmltcG9ydCB2aWV3VXRpbHMgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3ZpZXcnO1xyXG5cclxuLypcclxuY29uc3Qgc3RhdGljUmVzcCA9IHtcclxuICAgICdzdGF0dXMnOiB7XHJcbiAgICAgICAgJ3N0YXRlJzogJ29rJ1xyXG4gICAgfSxcclxuICAgICdkYXRhJzoge1xyXG4gICAgICAgICdhY2NvdW50cyc6IFt7XHJcbiAgICAgICAgICAgICdzdGF0dXMnOiAnT0snLFxyXG4gICAgICAgICAgICAndXNlcm5hbWUnOiAnYW5kcmV5Lmpha2l2Y2h5aycsXHJcbiAgICAgICAgICAgICdjaGVja3BvaW50Jzoge1xyXG4gICAgICAgICAgICAgICAgJ3N0YXR1cyc6ICdBQlNFTlQnLFxyXG4gICAgICAgICAgICAgICAgJ3R5cGUnOiAnUEhPTkUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICd0YXJpZmYnOiB7XHJcbiAgICAgICAgICAgICAgICAnc3RhdHVzJzogJ0FCU0VOVCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ2luZm8nOiB7XHJcbiAgICAgICAgICAgICAgICAncHJvZmlsZV9waWNfdXJsJzogJ2h0dHBzOi8vcmFuZG9tdXNlci5tZS9hcGkvcG9ydHJhaXRzL21lbi81MC5qcGcnLFxyXG4gICAgICAgICAgICAgICAgJ25hbWUnOiAn0JDQvdC00YDQtdC5INCv0LrQuNCy0YfRg9C6JyxcclxuICAgICAgICAgICAgICAgICdiaW9ncmFwaHknOiAnJyxcclxuICAgICAgICAgICAgICAgICd1cmwnOiAnJyxcclxuICAgICAgICAgICAgICAgICdlbWFpbCc6ICduaWR6dWt1QGluYm94LnJ1JyxcclxuICAgICAgICAgICAgICAgICdwaG9uZSc6ICcnLFxyXG4gICAgICAgICAgICAgICAgJ21lZGlhX2NvdW50JzogMixcclxuICAgICAgICAgICAgICAgICdmb2xsb3dlcl9jb3VudCc6IDQsXHJcbiAgICAgICAgICAgICAgICAnZm9sbG93aW5nX2NvdW50JzogMTVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgJ3N0YXR1cyc6ICdPSycsXHJcbiAgICAgICAgICAgICd1c2VybmFtZSc6ICdhbmRyZXkuamFraXZjaHlrJyxcclxuICAgICAgICAgICAgJ2NoZWNrcG9pbnQnOiB7XHJcbiAgICAgICAgICAgICAgICAnc3RhdHVzJzogJ0FCU0VOVCcsXHJcbiAgICAgICAgICAgICAgICAndHlwZSc6ICdFTUFJTCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ3RhcmlmZic6IHtcclxuICAgICAgICAgICAgICAgICdzdGF0dXMnOiAnQUJTRU5UJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnaW5mbyc6IHtcclxuICAgICAgICAgICAgICAgICdwcm9maWxlX3BpY191cmwnOiAnaHR0cHM6Ly9yYW5kb211c2VyLm1lL2FwaS9wb3J0cmFpdHMvbWVuLzUyLmpwZycsXHJcbiAgICAgICAgICAgICAgICAnbmFtZSc6ICfQlNC40LzQvtC9INCf0LDRgNCw0LvQvtC9JyxcclxuICAgICAgICAgICAgICAgICdiaW9ncmFwaHknOiAnYmlvZ3JhcGh5IHRleHQnLFxyXG4gICAgICAgICAgICAgICAgJ3VybCc6ICd3d3cubGVuZW5ncmFkLnJ1JyxcclxuICAgICAgICAgICAgICAgICdlbWFpbCc6ICduaWR6dWt1QGluYm94LnJ1JyxcclxuICAgICAgICAgICAgICAgICdwaG9uZSc6ICcwMTEtMTExLTExMS0xMScsXHJcbiAgICAgICAgICAgICAgICAnbWVkaWFfY291bnQnOiA1MTUsXHJcbiAgICAgICAgICAgICAgICAnZm9sbG93aW5nX2NvdW50JzogMzRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgJ3N0YXR1cyc6ICdPSycsXHJcbiAgICAgICAgICAgICd1c2VybmFtZSc6ICdhbGV4LnNtaXRoJyxcclxuICAgICAgICAgICAgJ2NoZWNrcG9pbnQnOiB7XHJcbiAgICAgICAgICAgICAgICAnc3RhdHVzJzogJ1RSSUdHRVJFRCcsXHJcbiAgICAgICAgICAgICAgICAndHlwZSc6ICdFTUFJTF9PUl9QSE9ORSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ3RhcmlmZic6IHtcclxuICAgICAgICAgICAgICAgICdzdGF0dXMnOiAnQUJTRU5UJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAnc3RhdHVzJzogJ09LJyxcclxuICAgICAgICAgICAgJ3VzZXJuYW1lJzogJzIyYW5kcmV5Lmpha2l2Y2h5azInLFxyXG4gICAgICAgICAgICAnY2hlY2twb2ludCc6IHtcclxuICAgICAgICAgICAgICAgICdzdGF0dXMnOiAnVFJJR0dFUkVEJyxcclxuICAgICAgICAgICAgICAgICd0eXBlJzogJ1BIT05FJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAndGFyaWZmJzoge1xyXG4gICAgICAgICAgICAgICAgJ3N0YXR1cyc6ICdBQlNFTlQnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICAnYXZhaWxhYmxlX3Byb3h5X3B1cmNoYXNlJzogdHJ1ZVxyXG4gICAgfVxyXG59O1xyXG4qLy8qXHJcbmNvbnN0IHN0YXRpY1Jlc3BXaXRoRGVsYXkgPSB7XHJcbiAgICAnc3RhdHVzJzoge1xyXG4gICAgICAgICdzdGF0ZSc6ICdvaydcclxuICAgIH0sXHJcbiAgICAnZGF0YSc6IHtcclxuICAgICAgICAnYWNjb3VudHMnOiBbe1xyXG4gICAgICAgICAgICAnc3RhdHVzJzogJ09LJyxcclxuICAgICAgICAgICAgJ3VzZXJuYW1lJzogJ3N0YXRpY1Jlc3AuV2l0aERlbGF5JyxcclxuICAgICAgICAgICAgJ2NoZWNrcG9pbnQnOiB7XHJcbiAgICAgICAgICAgICAgICAnc3RhdHVzJzogJ0FCU0VOVCcsXHJcbiAgICAgICAgICAgICAgICAndHlwZSc6ICdQSE9ORSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ3RhcmlmZic6IHtcclxuICAgICAgICAgICAgICAgICdzdGF0dXMnOiAnQUJTRU5UJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgJ2F2YWlsYWJsZV9wcm94eV9wdXJjaGFzZSc6IHRydWVcclxuICAgIH1cclxufTtcclxuKi9cclxuXHJcbi8vINCf0L7RgdC70LUg0LTQvtCx0LDQstC70LXQvdC40Y8g0LDQutC60LDRg9C90YLQsCDRgdC90L7QstCwINC00LXRgNC90YPRgtGMINCc0JXQotCQINC4INC/0LXRgNC10YDQuNGB0L7QstCw0YLRjCDRgdC/0LjRgdC+0Log0LDQutC60LDRg9C90YLQvtCyXHJcbmNvbnN0IGFkZEluc3RhZ3JhbUFjY291bnQgPSAobmV3Rm9ybURhdGEpID0+IHtcclxuICAgIGNvbnN0IGNiRXJyb3IgPSAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SJywgcmVzdWx0KTtcclxuICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKCQoJy5lcnJvci1tc2cnKSxcclxuICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5zdGF0ZSxcclxuICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5tZXNzYWdlIHx8ICdMb2dpbiBlcnJvcicpO1xyXG4gICAgICAgIC8vICQoX2xvZ2luQm94KS5hZGRDbGFzcyhjbG9zZUNsYXNzKS5yZW1vdmVDbGFzcyhvcGVuZWRDbGFzcyk7XHJcbiAgICB9O1xyXG5cclxuICAgIFVzZXIuYWRkSW5zdGFncmFtQWNjb3VudChuZXdGb3JtRGF0YSwgY2JFcnJvcikudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCwgcmVzdWx0LnN0YXR1cyk7XHJcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyO1xyXG4gICAgICAgICAgICBjb25zdCAkYWNjb3VudHNMaXN0ID0gJCgnLmFjY291bnRzLWxpc3QnKTtcclxuICAgICAgICAgICAgJGFjY291bnRzTGlzdC5lbXB0eSgpO1xyXG4gICAgICAgICAgICAvLyB0b2RvIDogcmVsb2FkIGxpc3RcclxuICAgICAgICAgICAgLy8gZmlsbExpc3QoJGFjY291bnRzTGlzdCwgcmVzdWx0LmRhdGEuYWNjb3VudHMpO1xyXG4gICAgICAgICAgICAvLyBhZGRMaXN0SGFuZGxlcigpO1xyXG5cclxuICAgICAgICAgICAgLy8gdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSgkdGV4dEFyZWFEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgLy8gICAgIHJlc3VsdC5zdGF0dXMuc3RhdGUsXHJcbiAgICAgICAgICAgIC8vICAgICByZXN1bHQuc3RhdHVzLm1lc3NhZ2UgfHwgJ0xvZ2luIGVycm9yJyk7XHJcbiAgICAgICAgICAgIC8vICQoX2xvZ2luQm94KS5hZGRDbGFzcyhjbG9zZUNsYXNzKS5yZW1vdmVDbGFzcyhvcGVuZWRDbGFzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIC8vIHRvZG86IHJlbmRlciBmb3IgdXNlclxyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnc3VibWl0JywgbmV3Rm9ybURhdGEpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gYWRkT25Mb2FkSGFuZGxlcnMoKSB7XHJcbiAgICAvLyAkKCcuanNfcmVwZWF0LXNlY3VyaXR5LWNvZGUnKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG5cclxuICAgIC8vIH0pO1xyXG5cclxuICAgICQoJy5qc19hZGQtaW5zdGFncmFtLWFjY291bnQnKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJ0biA9ICQoZS50YXJnZXQpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RhbEJvZHkgPSBidG4uY2xvc2VzdCgnLm1vZGFsJykuZmluZCgnLm1vZGFsLWRpYWxvZyAubW9kYWwtYm9keScpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gJG1vZGFsQm9keS5maW5kKCdpbnB1dFtuYW1lPVwidXNlcm5hbWVcIl0nKS52YWwoKS50cmltKCk7XHJcbiAgICAgICAgY29uc3QgcGFzc3dvcmQgPSAkbW9kYWxCb2R5LmZpbmQoJ2lucHV0W25hbWU9XCJwYXNzXCJdJykudmFsKCkudHJpbSgpO1xyXG4gICAgICAgIGNvbnN0ICRmb3JtID0gJCgnZm9ybScsICRtb2RhbEJvZHkpO1xyXG4gICAgICAgIGNvbnN0IGZvcm0gPSAkZm9ybS5nZXQoMCk7XHJcbiAgICAgICAgY29uc3QgY3NzVmFsaWRhdGlvbkNsYXNzID0gJ2Zvcm0tdmFsaWRhdGlvbic7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgLy8gY29uc3QgdmFsaWRhdG9yID0gbmV3IFZhbGlkYXRvcigkZm9ybSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codmFsaWRhdG9yLnZhbGlkYXRlKCkpO1xyXG4gICAgICAgIGlmIChmb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICAgICAgICBhZGRJbnN0YWdyYW1BY2NvdW50KHt1c2VybmFtZSwgcGFzc3dvcmR9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBIaWdobGlnaHQgZXJyb3JzXHJcbiAgICAgICAgICAgIGlmIChmb3JtLnJlcG9ydFZhbGlkaXR5KSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtLnJlcG9ydFZhbGlkaXR5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJGZvcm0uYWRkQ2xhc3MoY3NzVmFsaWRhdGlvbkNsYXNzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdXNlcm5hbWUgfHwgIXBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdub3QgdmFsaWQgLSBFbXB0eSBmaWVsZHMnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRMaXN0SGFuZGxlcigvKiB1c2VybmFtZSovKSB7XHJcbiAgICAvLyAkKCcjeW91ck1vZGFsSUQnKS5vbignc2hvdy5icy5tb2RhbCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgIC8vICAgICB2YXIgeW91cnBhcmFtZXRlciA9IGUucmVsYXRlZFRhcmdldC5kYXRhc2V0LnlvdXJwYXJhbWV0ZXI7XHJcbiAgICAvLyAgICAgLy8gRG8gc29tZSBzdHVmZiB3LyBpdC5cclxuICAgIC8vIH0pO1xyXG4gICAgbGV0IGNoZWNrcG9pbnRUeXBlID0gJyc7XHJcblxyXG4gICAgJCgnLmpzX3Bhc3MtY2hlY2twb2ludC1idG4nKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0ICRidXR0b24gPSAkKGUudGFyZ2V0KTtcclxuICAgICAgICBjb25zdCB1c2VybmFtZSA9ICRidXR0b24uZGF0YSgndXNlcm5hbWUnKTtcclxuICAgICAgICBjaGVja3BvaW50VHlwZSA9ICRidXR0b24uZGF0YSgnY2hlY2twb2ludFR5cGUnKSB8fCBjaGVja3BvaW50VHlwZTtcclxuICAgICAgICAvLyAkKCcjc2VjdXJpdHktY29kZScpLmRhdGEoJ2NoZWNrcG9pbnRUeXBlJywgY2hlY2twb2ludFR5cGUpO1xyXG4gICAgICAgIC8vIHRvZG8gYWRkICdjaGVja3BvaW50VHlwZScgdG8gbW9kYWxcclxuICAgICAgICBjb25zdCBzZW5kVG8gPSAoY2hlY2twb2ludFR5cGUgPT09ICdQSE9ORScpID8gJ9GC0LXQu9C10YTQvtC9JyA6ICdlbWFpbCc7XHJcbiAgICAgICAgLy8gU3Bpbm5lci5zdGFydCgkYnV0dG9uLCAnZmEta2V5Jyk7XHJcblxyXG4gICAgICAgIGlmIChjaGVja3BvaW50VHlwZSA9PT0gJ0VNQUlMX09SX1BIT05FJykge1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgLy8g0LjQvdC/0YPRgtGLINGB0L/RgNGP0YLQsNC90YssXHJcbiAgICAgICAgICAgIC8vINC/0L7QutCw0LfQsNGC0Ywg0YHQtdGA0YvQtSDQv9C10YDQtdC60LvRjtGH0LDRgtC10LvQuCAo0LLRi9Cx0YDQsNC7INGC0LjQvylcclxuICAgICAgICAgICAgLy8g0LXRgdGC0Ywg0LrQvdC+0L/QutCwINCX0LDQv9GA0L7RgdC40YLRjCDQutC+0LQg0L/QvtC00YLQstC10YDQttC00LXQvdC40LVcclxuICAgICAgICAgICAgJCgnI3NlY3VyaXR5LWNvZGUtcGhvbmVPcmVtYWlsJykubW9kYWwoe3Nob3c6IHRydWUsIHVzZXJuYW1lfSk7XHJcblxyXG4gICAgICAgICAgICAvLyDQvdC1INC+0YLQv9GA0LDQstC70Y/QtdC8INGA0LXQutCy0LXRgdGCXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFVzZXIuZ2V0U2VjdXJpdHlLZXkodXNlcm5hbWUsIGNoZWNrcG9pbnRUeXBlKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlY3VyaXR5S2V5IHJlY2VpdmVkOicsIHJlc3VsdC5zdGF0dXMuc3RhdGUpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cy5zdGF0ZSA9PT0gJ29rJykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJG1vZGFsID0gJCgnI3NlY3VyaXR5LWNvZGUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTcGlubmVyLnN0b3AoJGJ1dHRvbiwgJ2ZhLWtleScpO1xyXG4gICAgICAgICAgICAgICAgJCgnLmpzX3N1Y2Nlc3MtZmVlZGJhY2snLCAkbW9kYWwpLmVtcHR5KCkudGV4dChg0JrQu9GO0Ycg0L/QvtC00YLQstC10YDQttC00LXQvdC40Y8g0LHRi9C7INC+0YLQv9GA0LDQstC70LXQvSDQktCw0Lwg0L3QsCAke3NlbmRUb31gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gaW5zaWRlIG1vZGFsXHJcbiAgICAkKCcuanNfY29uZmlybS1zZWN1cml0eS1jb2RlJykub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCBidG4gPSAkKGUudGFyZ2V0KTtcclxuICAgICAgICBjb25zdCB1c2VybmFtZSA9IGJ0bi5kYXRhKCd1c2VybmFtZScpO1xyXG4gICAgICAgIGNvbnN0ICRrZXlJbnB1dCA9IGJ0bi5jbG9zZXN0KCcubW9kYWwnKS5maW5kKCcubW9kYWwtZGlhbG9nIGZvcm0gaW5wdXQuanNfY29uZmlybS1rZXknKTtcclxuICAgICAgICBjb25zdCBrZXkgPSAka2V5SW5wdXQudmFsKCkudHJpbSgpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RhbCA9IGJ0bi5jbG9zZXN0KCcubW9kYWwnKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICBpZiAoa2V5Lmxlbmd0aCAhPT0gNikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFVzZXIuY29uZmlybVNlY3VyaXR5S2V5KGtleSwgdXNlcm5hbWUpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cy5zdGF0ZSAhPT0gJ29rJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdqc19jb25maXJtOicsIHJlc3VsdC5zdGF0dXMuc3RhdGUsICdjbG9zZSBtb2RhbCcpO1xyXG4gICAgICAgICAgICAkbW9kYWwubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnInKTtcclxuICAgICAgICAgICAgJCgnLmpzX3N1Y2Nlc3MtZmVlZGJhY2snLCAkbW9kYWwpLnRleHQoJ9CX0LDQv9GA0L7RgSDQvdC1INC+0YLQv9GA0LDQstC70LXQvScpLmNzcygnY29sb3InLCAncmVkJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCdmb3JtIGlucHV0W21pbmxlbmd0aF0nKS5vbignYmx1cicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBsZW4gPSAkKHRoaXMpLnZhbCgpLnRyaW0oKS5sZW5ndGg7XHJcbiAgICAgICAgY29uc3QgbWluTGVuID0gTnVtYmVyKCQodGhpcykuYXR0cignbWlubGVuZ3RoJykpO1xyXG4gICAgICAgIC8vIGNvbnN0IG1lc3NhZ2UgPSBtaW5MZW4gPD0gbGVuID8gJycgOiBtaW5MZW4gKyAnIGNoYXJhY3RlcnMgbWluaW11bSc7XHJcbiAgICAgICAgaWYgKG1pbkxlbiAhPT0gbGVuKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuY3NzKCdib3JkZXJDb2xvcicsICdyZWQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNzcygnYm9yZGVyQ29sb3InLCAnI2NlZDRkYScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLnNldEN1c3RvbVZhbGlkaXR5KG1lc3NhZ2UpXHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBvbkhpZGVNb2RhbChlKSB7XHJcbiAgICAgICAgY29uc3QgJG1vZGFsID0gJChlLnRhcmdldCk7XHJcbiAgICAgICAgJG1vZGFsLmZpbmQoJy5maXJzdC1zdGVwJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICRtb2RhbC5maW5kKCcuc2Vjb25kLXN0ZXAnKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgJCgnLmpzX2NvbmZpcm0ta2V5JykudmFsKCcnKTtcclxuICAgICAgICAkKCcuanNfc3VjY2Vzcy1mZWVkYmFjaycsICRtb2RhbCkucmVtb3ZlQXR0cignc3R5bGUnKS5lbXB0eSgpO1xyXG4gICAgfVxyXG4gICAgJCgnI3NlY3VyaXR5LWNvZGUtcGhvbmVPcmVtYWlsJykub24oJ2hpZGUuYnMubW9kYWwnLCBvbkhpZGVNb2RhbCk7XHJcbiAgICAkKCcjc2VjdXJpdHktY29kZScpLm9uKCdoaWRlLmJzLm1vZGFsJywgb25IaWRlTW9kYWwpO1xyXG5cclxuICAgIC8vIFwiUEhPTkVfT1JfRU1BSUxcIiBtb2RhbFxyXG4gICAgJCgnLmpzX2dldC1zZWN1cml0eS1jb2RlLXBob25lT3JlbWFpbCcpLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgJG1vZGFsID0gJCgnI3NlY3VyaXR5LWNvZGUtcGhvbmVPcmVtYWlsJyk7XHJcbiAgICAgICAgY29uc3QgdHlwZVNlbGVjdGVkID0gJChlLnRhcmdldCkuY2xvc2VzdCgkbW9kYWwpLmZpbmQoJy5qc19idG4tdHlwZS1zd2l0Y2hlciBpbnB1dDpjaGVja2VkJyk7XHJcbiAgICAgICAgY29uc3QgY2hlY2twb2ludFR5cGVBY3RpdmUgPSB0eXBlU2VsZWN0ZWQudmFsKCk7XHJcbiAgICAgICAgY29uc3Qgc2VuZFRvID0gKGNoZWNrcG9pbnRUeXBlQWN0aXZlID09PSAnUEhPTkUnKSA/ICfRgtC10LvQtdGE0L7QvScgOiAnZW1haWwnO1xyXG4gICAgICAgIGNvbnN0IG1vZGFsQ29uZmlnID0gJG1vZGFsLmRhdGEoKVsnYnMubW9kYWwnXS5fY29uZmlnO1xyXG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gbW9kYWxDb25maWcudXNlcm5hbWU7XHJcbiAgICAgICAgVXNlci5nZXRTZWN1cml0eUtleSh1c2VybmFtZSwgY2hlY2twb2ludFR5cGVBY3RpdmUpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAvLyDQv9GA0Lgg0L3QsNC20LDRgtC40LggXCLQl9Cw0L/RgNC+0YHQuNGC0Ywg0LrQvtC0INC/0L7QtNGC0LLQtdGA0LbQtNC10L3QuNC1XCIgLSDQvtGC0L/QsNGA0LvRj9C10YLRgdGPINGA0LXQutCy0LXRgdGCIFwi0YHRgtCw0YDRgiDRh9C10LrQv9C+0LjQvdGCXCIg0L/QvtGP0LLQu9GP0LXRgtGM0YHRjyDQuNC90L/Rg9GCINC4INC60L3QvtC/0LrQsCDQtNGA0YPQs9C40YUg0YLQuNC/0LDRhVxyXG4gICAgICAgICAgICAvLyBnZXQgc2VsZWN0ZWQgYnV0dG9uXHJcblxyXG4gICAgICAgICAgICAvLyDQv9C10YDQtdC60LvRjtGH0LDRgtC10LvRjCjRgdC10YDRi9C5KSDQuCDQutC90L7Qv9C60LAgXCLQl9Cw0L/RgNC+0YHQuNGC0Ywg0LrQvtC0INC/0L7QtNGC0LLQtdGA0LbQtNC10L3QuNC1XCIg0LjRgdGH0LXQt9Cw0Y7RglxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2VjdXJpdHlLZXkgcmVjZWl2ZWQ6JywgcmVzdWx0LnN0YXR1cy5zdGF0ZSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzLnN0YXRlID09PSAnb2snKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuZmlyc3Qtc3RlcCcsICRtb2RhbCkuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgJCgnLnNlY29uZC1zdGVwJywgJG1vZGFsKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcuanNfc3VjY2Vzcy1mZWVkYmFjaycsICRtb2RhbCkuZW1wdHkoKS50ZXh0KGDQmtC70Y7RhyDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjRjyDQsdGL0Lsg0L7RgtC/0YDQsNCy0LvQtdC9INCS0LDQvCDQvdCwICR7c2VuZFRvfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsbExpc3QoJGxpc3QsIGRhdGFBcnJheSkge1xyXG4gICAgY29uc3QgaXRlbXMgPSBkYXRhQXJyYXk7XHJcbiAgICBjb25zdCBjTGlzdCA9ICRsaXN0O1xyXG4gICAgY29uc3QgZGVmYXVsdEF2YXRhclNyYyA9ICdodHRwczovL2kuaW1ndXIuY29tL2pOTlQ0TEUucG5nJztcclxuICAgIGNvbnN0IGluc2VydEl0ZW0gPSAoZGF0YSwgdGV4dCwgY3NzQ2xzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGlUcGwgPSBgJHsoZGF0YSlcclxuICAgICAgICAgICAgPyBgPGxpIGNsYXNzPVwibGlzdC1pbmxpbmUtaXRlbSAke2Nzc0Nsc31cIj48c3BhbiBjbGFzcz1cImZpZ3VyZVwiPiR7ZGF0YX08L3NwYW4+PHNwYW4+JHt0ZXh0fTwvc3Bhbj48L2xpPmBcclxuICAgICAgICAgICAgOiBgPGxpIGNsYXNzPVwibGlzdC1pbmxpbmUtaXRlbSAke2Nzc0Nsc31cIj48c3BhbiBjbGFzcz1cImZpZ3VyZVwiPi08L3NwYW4+PHNwYW4+JHt0ZXh0fTwvc3Bhbj48L2xpPmB9YDtcclxuICAgICAgICByZXR1cm4gbGlUcGw7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc3RhdHMgPSAoaW5mbykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRwbCA9IGA8ZGl2IGNsYXNzPVwiY29sXCI+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3QtaW5saW5lIHRleHQtY2VudGVyIGNvdW50cy1saXN0XCI+XHJcbiAgICAgICAgICAgICR7KGluZm8pXHJcbiAgICAgICAgICAgICAgPyBgJHtpbnNlcnRJdGVtKGluZm9bJ21lZGlhX2NvdW50J10sICfQn9GD0LHQu9C40LrQsNGG0LjQuCcsICdtZWRpYS1jb3VudCcpfVxyXG4gICAgICAgICAgICAgICAgJHtpbnNlcnRJdGVtKGluZm9bJ2ZvbGxvd2VyX2NvdW50J10sICfQn9C+0LTQv9C40YHRh9C40LrQuCcsICdmb2xsb3dlci1jb3VudCcpfVxyXG4gICAgICAgICAgICAgICAgJHtpbnNlcnRJdGVtKGluZm9bJ2ZvbGxvd2luZ19jb3VudCddLCAn0J/QvtC00L/QuNGB0LrQuCcsICdmb2xsb3dpbmctY291bnQnKX1gXHJcbiAgICAgICAgICAgICAgOiBgJHtpbnNlcnRJdGVtKGZhbHNlLCAn0J/Rg9Cx0LvQuNC60LDRhtC40LgnLCAnbWVkaWEtY291bnQnKX1cclxuICAgICAgICAgICAgICAgICR7aW5zZXJ0SXRlbShmYWxzZSwgJ9Cf0L7QtNC/0LjRgdGH0LjQutC4JywgJ2ZvbGxvd2VyLWNvdW50Jyl9XHJcbiAgICAgICAgICAgICAgICAke2luc2VydEl0ZW0oZmFsc2UsICfQn9C+0LTQv9C40YHQutC4JywgJ2ZvbGxvd2luZy1jb3VudCcpfWBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PmA7XHJcbiAgICAgICAgcmV0dXJuIHRwbDtcclxuICAgIH07XHJcbiAgICBjTGlzdC5lbXB0eSgpLmFkZENsYXNzKCdib3JkZXItbGlnaHQtY29sb3InKTtcclxuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCBpbmZvID0gaXRlbS5pbmZvO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrcG9pbnQgPSBpdGVtLmNoZWNrcG9pbnQgfHwgaXRlbTtcclxuXHJcbiAgICAgICAgaWYgKCFpbmZvKSB7XHJcbiAgICAgICAgICAgICQoYDxsaSBjbGFzcz1cIm1lZGlhIHB5LTNcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJtbC0zIHJvdW5kZWRcIiBhbHQ9XCJkZWZhdWx0IGF2YXRhclwiIHNyYz1cIiR7ZGVmYXVsdEF2YXRhclNyY31cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1ib2R5IGQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgdXNlci1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7KGl0ZW0udXNlcm5hbWUpID8gYDxwIGNsYXNzPVwibXQtMCBtYi0xIG5hbWVcIj4ke2l0ZW0udXNlcm5hbWV9PC9wPmAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7KGNoZWNrcG9pbnQuc3RhdHVzID09PSAnVFJJR0dFUkVEJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkganNfcGFzcy1jaGVja3BvaW50LWJ0biBkLWJsb2NrIG14LWF1dG9cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY2hlY2twb2ludC10eXBlPVwiJHtjaGVja3BvaW50LnR5cGV9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdXNlcm5hbWU9XCIke2l0ZW0udXNlcm5hbWUgfHwgJyd9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNzZWN1cml0eS1jb2RlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1rZXlcIj48L2k+0J/RgNC+0LnRgtC4INGH0LXQutC/0L7QuNC90YI8L2J1dHRvbj5gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYCh0b2RvKWNoZWNrcG9pbnQgc3RhdHVzIC0gJHtjaGVja3BvaW50fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtzdGF0cygpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+YCkuYXBwZW5kVG8oY0xpc3QpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoYDxsaSBjbGFzcz1cIm1lZGlhIHB5LTNcIj5cclxuICAgICAgICAgICAgJHsoaW5mb1sncHJvZmlsZV9waWNfdXJsJ10pXHJcbiAgICAgICAgICAgICAgICA/IGA8aW1nIGNsYXNzPVwibWwtMyByb3VuZGVkXCIgYWx0PVwiVXNlciBwaG90b1wiIHNyYz1cIiR7aW5mb1sncHJvZmlsZV9waWNfdXJsJ119XCI+YFxyXG4gICAgICAgICAgICAgICAgOiBgPGltZyBjbGFzcz1cIm1sLTMgcm91bmRlZFwiIGFsdD1cImRlZmF1bHQgYXZhdGFyXCIgc3JjPVwiJHtkZWZhdWx0QXZhdGFyU3JjfVwiPmB9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1ib2R5IGQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB1c2VyLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAkeyhpdGVtLnVzZXJuYW1lKSA/IGA8cCBjbGFzcz1cIm10LTAgbWItMSBuYW1lXCI+JHtpdGVtLnVzZXJuYW1lfTwvcD5gIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgJHsoaW5mby5uYW1lKSA/IGA8cCBjbGFzcz1cIm10LTAgbWItMVwiPiR7aW5mby5uYW1lfTwvcD5gIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgJHsoaW5mby5lbWFpbCkgPyBgPHAgY2xhc3M9XCJtdC0wIG1iLTFcIj4ke2luZm8uZW1haWx9PC9wPmAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAkeyhpbmZvLnBob25lKSA/IGA8cCBjbGFzcz1cIm10LTAgbWItMVwiPiR7aW5mby5waG9uZX08L3A+YCA6ICcnfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgJHsoY2hlY2twb2ludC5zdGF0dXMgPT09ICdUUklHR0VSRUQnKVxyXG4gICAgICAgICAgICAgICAgPyBgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkganNfcGFzcy1jaGVja3BvaW50LWJ0biBkLWJsb2NrIG14LWF1dG9cIiBkYXRhLWNoZWNrcG9pbnQtdHlwZT1cIiR7Y2hlY2twb2ludC50eXBlfVwiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNzZWN1cml0eS1jb2RlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEta2V5XCI+PC9pPtCf0YDQvtC50YLQuCDRh9C10LrQv9C+0LjQvdGCPC9idXR0b24+YFxyXG4gICAgICAgICAgICAgICAgOiAnJ31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgJHtzdGF0cyhpbmZvKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9saT5gKS5hcHBlbmRUbyhjTGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbml0IGhlYWRlclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBjb25zdCAkYWNjb3VudHNMaXN0ID0gJCgnLmFjY291bnRzLWxpc3QnKTtcclxuICAgIC8vIGNoZWNrIHdlIGFyZSBpbiBwcm9maWxlIHBhZ2VcclxuICAgIGlmICghJGFjY291bnRzTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCB0b2tlbiA9IFVzZXIuZ2V0VG9rZW4oKTsgLy8gdXBkIHRvOiBVc2VyLmdldFRva2VuKClcclxuICAgIGNvbnN0IG1ldGFkYXRhID0gVXNlci5nZXRNZXRhZGF0YSh0b2tlbik7XHJcbiAgICBjb25zdCByZXNlbmRSZXF1ZXN0ID0gKCkgPT4gVXNlci5nZXRNZXRhZGF0YSh0b2tlbik7XHJcbiAgICBsZXQgaXNTZW5kUmVxT25jZSA9IGZhbHNlO1xyXG4gICAgY29uc3QgY2hlY2tSZXNwb25zZSA9IChyZXN1bHQsIGlzUmVzZW5kUmVxdWVzdCkgPT4ge1xyXG4gICAgICAgIGlmICghcmVzdWx0LnN0YXR1cy5zdGF0ZSA9PT0gJ29rJyB8fCAhcmVzdWx0LmRhdGEgfHwgISRhY2NvdW50c0xpc3QubGVuZ3RoIHx8IGlzUmVzZW5kUmVxdWVzdCkge1xyXG4gICAgICAgICAgICAvLyDQv9GA0L7QstC10YDRj9C8INC+0LTQuNC9INGA0LDQtyDQvdCw0LvQuNGH0LjQtSByZXN1bHQuZGF0YS5hY2NvdW50cy5pbmZvXHJcbiAgICAgICAgICAgICRhY2NvdW50c0xpc3QuZW1wdHkoKTtcclxuICAgICAgICAgICAgJChgPGxpIGNsYXNzPVwibWVkaWFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwibXQtMCBtYi0zXCI+0J3QuCDQvtC00L3QvtCz0L4g0JDQutC60LDRg9C90YLQsCDQvdC1INC00L7QsdCw0LLQu9C10L3QvjwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5gKS5hcHBlbmRUbygkYWNjb3VudHNMaXN0KTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNlbmRSZXF1ZXN0KCkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tSZXNwb25zZShyZXN1bHQsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlcXVlc3QgcmVzZW5kJyk7XHJcbiAgICAgICAgICAgIH0sIDM1MDApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vINCy0YvQstC+0LQg0YDQtdC30YPQu9GM0YLQsNGC0L7QsiAoZGF0YS5hY2NvdW50cy5pbmZvKVxyXG4gICAgICAgICQoJy5wcm9maWxlLXVzZXIgLnNwaW5uZXItYm94JykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgIGZpbGxMaXN0KCRhY2NvdW50c0xpc3QsIHJlc3VsdC5kYXRhLmFjY291bnRzKTtcclxuICAgICAgICBhZGRMaXN0SGFuZGxlcigpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBjaGVjayB3ZSBhcmUgaW4gcHJvZmlsZSBwYWdlXHJcbiAgICBpZiAoISRhY2NvdW50c0xpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZE9uTG9hZEhhbmRsZXJzKCk7XHJcblxyXG4gICAgLy8g0LzQvtC20LXRgiDQuNC90YTQviDQvtGC0YHRg9GC0YHQstC+0LLQsNGC0YwgLSDRgdC00LXQu9Cw0YLRjCDQtdGJ0LUg0YDQsNC3INC30LDQv9GA0L7RgSDRh9C10YDQtdC3IDMg0YHQtdC6LlxyXG5cclxuICAgIG1ldGFkYXRhLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIC8vINC/0YDQvtCy0LXRgNGP0Lwg0L7QtNC40L0g0YDQsNC3INC90LDQu9C40YfQuNC1IHJlc3VsdC5kYXRhLmFjY291bnRzLmluZm9cclxuICAgICAgICBsZXQgaXNSZXNlbmRSZXF1ZXN0ID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5kYXRhICYmIHJlc3VsdC5kYXRhLmFjY291bnRzICYmICFpc1NlbmRSZXFPbmNlKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5kYXRhLmFjY291bnRzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghaXRlbS5pbmZvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNSZXNlbmRSZXF1ZXN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpc1NlbmRSZXFPbmNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjaGVja1Jlc3BvbnNlKHJlc3VsdCwgaXNSZXNlbmRSZXF1ZXN0KTtcclxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSgkKCcuZXJyb3ItbXNnJyksXHJcbiAgICAgICAgICAgICAgICBlcnIuc3RhdHVzIHx8ICcnLFxyXG4gICAgICAgICAgICAgICAgJ9Cd0LUg0L/QvtC70YPRh9C40LvQvtGB0Ywg0LfQsNCz0YDRg9C30LjRgtGMINC00L7RgdGC0YPQv9C90YvQtSBJbnN0YWdyYW0g0LDQutC60LDRg9C90YLRiycpO1xyXG4gICAgICAgIH0sIDMwMDApO1xyXG4gICAgICAgICQoJy5zcGlubmVyLWJveCcpLmFkZENsYXNzKCdkLW5vbmUnKTtcclxuICAgIH0pO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3MvaW5zdGFncmFtLWFjY291bnRzLWxpc3QvaW5zdGFncmFtLWFjY291bnRzLWxpc3QuanMiLCIvKiBlc2xpbnQtZGlzYWJsZSBzb3J0LXZhcnMgKi9cclxuLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3VzZXInO1xyXG5pbXBvcnQgUHViU3ViIGZyb20gJ3B1YnN1Yi1qcyc7IC8vIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3B1YnN1Yi1qc1xyXG5pbXBvcnQgY29va2llU3RvcmFnZSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29va2llJztcclxuLy8gaW1wb3J0IFZhbGlkYXRvciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvZm9ybS12YWxpZGF0b3InO1xyXG5pbXBvcnQgdmlld1V0aWxzIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy92aWV3JztcclxuaW1wb3J0IHtDT05TVH0gZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2NvbnN0cyc7XHJcblxyXG53aW5kb3cuJCA9ICQ7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTG9naW5Gb3JtKHNlbGVjdG9yQ3NzKSB7XHJcbiAgICBjb25zdCB7X2Zvcm1JZCwgX2J1dHRvblN1Ym1pdElkLCBfc2hvd0xvZ2luQm94QnRuSWQsIF9sb2dpbkJveH0gPSBzZWxlY3RvckNzcztcclxuICAgIGNvbnN0IHVzZXIgPSBVc2VyLCAvLyBzZXJ2aWNlXHJcbiAgICAgICAgJGZvcm0gPSAkKF9mb3JtSWQpLFxyXG4gICAgICAgICRlbWFpbCA9ICRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJtYWlsXCJdJyksXHJcbiAgICAgICAgJHRleHRBcmVhRGVzY3JpcHRpb24gPSAkKCcjZGVzY3JpcHRpb24nKTtcclxuICAgIC8vIGNvbnN0IG9wZW5lZENsYXNzID0gJ2QtYmxvY2snO1xyXG4gICAgLy8gY29uc3QgY2xvc2VDbGFzcyA9ICdkLW5vbmUnO1xyXG5cclxuICAgIGNvbnN0IHVzZXJMb2dpbkhlYWRlciA9IChfZm9ybURhdGEpID0+IHtcclxuICAgICAgICBjb25zdCBjYkVycm9yID0gKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAkKF9sb2dpbkJveCkuYXBwZW5kKCc8cD5yZXN1bHQuc3RhdHVzLm1lc3NhZ2U8L3A+Jyk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHVzZXIubG9naW4oX2Zvcm1EYXRhLCBjYkVycm9yKVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5kYXRhICYmIHJlc3VsdC5kYXRhLnRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2F2ZSB0aGUgaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGNvb2tpZVN0b3JhZ2Uuc2V0KENPTlNULmNvb2tpZVN0b3JhZ2UudG9rZW4sIHJlc3VsdC5kYXRhLnRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcubmF2LWxpbmsuanNfbG9nT3V0JykucGFyZW50KCkuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXF1ZXN0IHN1Y2NlZWRlZCB3aXRoIEpTT04gcmVzcG9uc2UnLCByZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UoJHRleHRBcmVhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMubWVzc2FnZSB8fCAnTG9naW4gc3VjY3Nlc3MnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LnN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSh0aGlzLiR0ZXh0QXJlYURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgPHA+c3RhdHVzOiAke3Jlc3VsdC5zdGF0dXMuc3RhdGV9PC9wPjxwPiBtZXNzYWdlOiAke3Jlc3VsdC5zdGF0dXMubWVzc2FnZX08L3A+YCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKCR0ZXh0QXJlYURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLm1lc3NhZ2UgfHwgJ0xvZ2luIGVycm9yJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzdWJtaXRGb3JtID0gZnVuY3Rpb24oZm9ybURhdGFPYmopIHtcclxuICAgICAgICBjb25zdCBlbWFpbCA9ICRlbWFpbC52YWwoKSxcclxuICAgICAgICAgICAgcGFzc3dvcmQgPSAkZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwicGFzc1wiXScpLnZhbCgpLFxyXG4gICAgICAgICAgICBfZm9ybURhdGEgPSBmb3JtRGF0YU9iaiB8fCB7ZW1haWwsIHBhc3N3b3JkfTtcclxuXHJcbiAgICAgICAgaWYgKHNlbGVjdG9yQ3NzLmlzTG9naW5JbnN0YWdyYW0pIHtcclxuICAgICAgICAgICAgLy8gdG9kbzogZGVsZXRlIG1lXHJcbiAgICAgICAgICAgIC8vIGFkZEluc3RhZ3JhbUFjY291bnQoe3VzZXJuYW1lOiAkZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwidXNlcm5hbWVcIl0nKS52YWwoKSwgcGFzc3dvcmR9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkZW1haWwudmFsKCRlbWFpbC52YWwoKS50b0xvY2FsZUxvd2VyQ2FzZSgpKTtcclxuICAgICAgICAgICAgdXNlckxvZ2luSGVhZGVyKF9mb3JtRGF0YSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBQdWJTdWIucHVibGlzaChDT05TVC5ldmVudHMuVVNFUl9MT0dHRUQsICdsb2dpbicpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGxvZ091dCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvb2tpZVN0b3JhZ2UucmVtb3ZlKENPTlNULmNvb2tpZVN0b3JhZ2UudG9rZW4pO1xyXG4gICAgICAgIFB1YlN1Yi5wdWJsaXNoKENPTlNULmV2ZW50cy5VU0VSX0xPR09VVCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGJpbmRFdmVudHMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCAkc2hvd0xvZ2luQm94QnRuSWQgPSAkKF9zaG93TG9naW5Cb3hCdG5JZCk7XHJcbiAgICAgICAgY29uc3QgJGxvZ2luQm94ID0gJChfbG9naW5Cb3gpO1xyXG4gICAgICAgIGNvbnN0IG9wZW5lZENsYXNzID0gJ2QtYmxvY2snO1xyXG4gICAgICAgIGNvbnN0IGNsb3NlQ2xhc3MgPSAnZC1ub25lJztcclxuXHJcbiAgICAgICAgJHNob3dMb2dpbkJveEJ0bklkLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzZWxlY3RvckNzcy5pc0xvZ2luSW5zdGFncmFtKSB7XHJcbiAgICAgICAgICAgICAgICAkbG9naW5Cb3guY3NzKHsndG9wJzogMCwgJ3JpZ2h0JzogMH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdiZy1saWdodCBib3JkZXIgbXQtNSBteC1hdXRvIHBvc2l0aW9uLWFic29sdXRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJGxvZ2luQm94LmFkZENsYXNzKG9wZW5lZENsYXNzKS5yZW1vdmVDbGFzcyhjbG9zZUNsYXNzKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgJGJ1dHRvblN1Ym1pdCA9ICQoX2J1dHRvblN1Ym1pdElkKSxcclxuICAgICAgICAgICAgY3NzVmFsaWRhdGlvbkNsYXNzID0gJ2Zvcm0tdmFsaWRhdGlvbic7XHJcblxyXG4gICAgICAgICRidXR0b25TdWJtaXQub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zdCBmb3JtID0gJGZvcm0uZ2V0KDApO1xyXG4gICAgICAgICAgICAvLyBjb25zdCB2YWxpZGF0b3IgPSBuZXcgVmFsaWRhdG9yKCRmb3JtKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codmFsaWRhdG9yLnZhbGlkYXRlKCkpO1xyXG4gICAgICAgICAgICBpZiAoZm9ybS5jaGVja1ZhbGlkaXR5KCkgJiYgdmlld1V0aWxzLmlzRW1haWwoJGVtYWlsLnZhbCgpKSkge1xyXG4gICAgICAgICAgICAgICAgc3VibWl0Rm9ybSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gSGlnaGxpZ2h0IGVycm9yc1xyXG4gICAgICAgICAgICAgICAgaWYgKGZvcm0ucmVwb3J0VmFsaWRpdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtLnJlcG9ydFZhbGlkaXR5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAkZm9ybS5hZGRDbGFzcyhjc3NWYWxpZGF0aW9uQ2xhc3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5uYXYtbGluay5qc19sb2dPdXQnKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGxvZ091dCgpO1xyXG4gICAgICAgICAgICAkKGUudGFyZ2V0KS5wYXJlbnQoKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UoJHRleHRBcmVhRGVzY3JpcHRpb24sICdMb2dnZWQgb3V0Jyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFB1YlN1Yi5zdWJzY3JpYmUoQ09OU1QuZXZlbnRzLlVTRVJfTE9HT1VULCAobXNnKSA9PiB7XHJcbiAgICAgICAgICAgICQoQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyTmF2TG9naW5CdG4pLmFkZENsYXNzKG9wZW5lZENsYXNzKS5yZW1vdmVDbGFzcyhjbG9zZUNsYXNzKTsgLy8gLnNob3coKTtcclxuICAgICAgICAgICAgJChDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJSZWdCdG4pLmFkZENsYXNzKG9wZW5lZENsYXNzKS5yZW1vdmVDbGFzcyhjbG9zZUNsYXNzKTtcclxuICAgICAgICAgICAgJCgnLm5hdi1saW5rLmpzX2xvZ091dCcpLmFkZENsYXNzKGNsb3NlQ2xhc3MpLnJlbW92ZUNsYXNzKG9wZW5lZENsYXNzKTsgLy8gLmhpZGUoKTtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3JMb2dpblN0YXRlID0gJy5qc19tZXNzYWdlX2xvZ2dlZC0tdGV4dCc7XHJcbiAgICAgICAgICAgICQoc2VsZWN0b3JMb2dpblN0YXRlKS50ZXh0KCfQktGLINCy0YvRiNC70Lgg0LjQtyDQsNC60LrQsNGD0L3RgtCwJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpc0xvZ2luQnRuQ2xpY2sgPSAkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnbmF2Lm5hdmJhcicpLmZpbmQoJGxvZ2luQm94KS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzQWRkSW5zdGFncmFtQnRuQ2xpY2tlZCA9ICQoZXZlbnQudGFyZ2V0KS5hdHRyKCdpZCcpID09PSBDT05TVC51aVNlbGVjdG9ycy5pbnN0YWdyYW0uYWRkQWNjb3VudEJ0bklkO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFpc0xvZ2luQnRuQ2xpY2sgJiYgJGxvZ2luQm94Lmhhc0NsYXNzKG9wZW5lZENsYXNzKSAmJiAhaXNBZGRJbnN0YWdyYW1CdG5DbGlja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAkbG9naW5Cb3guYWRkQ2xhc3MoY2xvc2VDbGFzcykucmVtb3ZlQ2xhc3Mob3BlbmVkQ2xhc3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAgICAgYmluZEV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5pdFxyXG4gICAgfTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5qcyIsIi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBQdWJTdWIgZnJvbSAncHVic3ViLWpzJzsgLy8gaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvcHVic3ViLWpzXHJcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy91c2VyJztcclxuaW1wb3J0IGNvb2tpZVN0b3JhZ2UgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2Nvb2tpZSc7XHJcbmltcG9ydCB7Q09OU1R9IGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMnO1xyXG5pbXBvcnQgdmlld1V0aWxzIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy92aWV3JztcclxuXHJcbmNvbnN0IHNlbGVjdG9yQ2xzID0ge1xyXG4gICAgZm9ybTogJy5hdXRoIC5yZWdpc3RlciAuZm9ybS1zaWduaW4nLFxyXG4gICAgc3VibWl0QnRuOiAnW3R5cGU9XCJzdWJtaXRcIl0nXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZ2lzdGVyRm9ybSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnVzZXIgPSBVc2VyO1xyXG4gICAgICAgIHRoaXMuJGZvcm0gPSAkKHNlbGVjdG9yQ2xzLmZvcm0pO1xyXG4gICAgICAgIHRoaXMuJGVtYWlsID0gdGhpcy4kZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwibWFpbFwiXScpO1xyXG4gICAgICAgIHRoaXMuJHRleHRBcmVhRGVzY3JpcHRpb24gPSAkKCcjZGVzY3JpcHRpb24nKTtcclxuICAgICAgICB0aGlzLmZvcm1EYXRhID0geydlbWFpbCc6ICd0ZXN0MV9lbWFpbEBtLnJ1JywgJ3Bhc3N3b3JkJzogJ3Bhc3N3b3JkJ307XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBpZiAoJCgnLmF1dGgucmVnaXN0ZXInKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN1Ym1pdEZvcm0oZm9ybURhdGFPYmopIHtcclxuICAgICAgICBjb25zdCBlbWFpbCA9IHRoaXMuJGVtYWlsLnZhbCgpO1xyXG4gICAgICAgIGNvbnN0ICRwYXNzd29yZCA9IHRoaXMuJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cInBhc3NcIl0nKSxcclxuICAgICAgICAgICAgJHBhc3N3b3JkQ29uZmlybSA9IHRoaXMuJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cInBhc3MtY29uZmlybVwiXScpLFxyXG4gICAgICAgICAgICBwYXNzd29yZCA9IHRoaXMuJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cInBhc3NcIl0nKS52YWwoKSxcclxuICAgICAgICAgICAgcGFzc3dvcmRDb25maXJtID0gdGhpcy4kZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwicGFzcy1jb25maXJtXCJdJykudmFsKCk7XHJcblxyXG4gICAgICAgIGlmIChwYXNzd29yZENvbmZpcm0gIT09IHBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgICRwYXNzd29yZC5hZGRDbGFzcygnaW5wdXQtZXJyb3InKTtcclxuICAgICAgICAgICAgJHBhc3N3b3JkQ29uZmlybS5hZGRDbGFzcygnaW5wdXQtZXJyb3InKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLiRlbWFpbC52YWwodGhpcy4kZW1haWwudmFsKCkudG9Mb2NhbGVMb3dlckNhc2UoKSk7XHJcbiAgICAgICAgdGhpcy5mb3JtRGF0YSA9IGZvcm1EYXRhT2JqIHx8IHtlbWFpbCwgcGFzc3dvcmR9O1xyXG5cclxuICAgICAgICB0aGlzLnVzZXIucmVnaXN0ZXIodGhpcy5mb3JtRGF0YSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5kYXRhICYmIHJlc3VsdC5kYXRhLnRva2VuKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNhdmUgdGhlIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBjb29raWVTdG9yYWdlLnNldChDT05TVC5jb29raWVTdG9yYWdlLmVtYWlsQ29uZmlybWVkLCAnZmFsc2UnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29va2llU3RvcmFnZS5zZXQoQ09OU1QuY29va2llU3RvcmFnZS50b2tlbiwgcmVzdWx0LmRhdGEudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXF1ZXN0IHN1Y2NlZWRlZCB3aXRoIEpTT04gcmVzcG9uc2UnLCByZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIFB1YlN1Yi5wdWJsaXNoKENPTlNULmV2ZW50cy5VU0VSX0xPR0dFRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSh0aGlzLiR0ZXh0QXJlYURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLm1lc3NhZ2UgfHwgJ1JlZ2lzdGVyIGFuZCBMb2dpbiBzdWNjc2VzcycpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKHRoaXMuJHRleHRBcmVhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMubWVzc2FnZSB8fCAnbm8gcmVzdWx0LmRhdGEgZm91bmQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UodGhpcy4kdGV4dEFyZWFEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5zdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmxvZ2luLWJveCcpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVxdWVzdCBmYWlsZWQnLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKHRoaXMuJHRleHRBcmVhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZG8gc29tZXRoaW5nJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcbiAgICAgICAgY29uc3QgcmVnaXN0ZXJCb3ggPSBDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJSZWdCb3g7IC8vICduYXYgLnJlZ2lzdGVyLWJveCc7XHJcbiAgICAgICAgY29uc3Qgb3BlbmVkQ2xhc3MgPSAnZC1ibG9jayc7XHJcbiAgICAgICAgY29uc3QgY2xvc2VDbGFzcyA9ICdkLW5vbmUnO1xyXG4gICAgICAgIGNvbnN0ICRidG4gPSAkKHNlbGVjdG9yQ2xzLnN1Ym1pdEJ0biksXHJcbiAgICAgICAgICAgIGNzc1ZhbGlkYXRpb25DbGFzcyA9ICdmb3JtLXZhbGlkYXRpb24nO1xyXG5cclxuICAgICAgICAkYnRuLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSB0aGlzLiRmb3JtLmdldCgwKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCEkYnRuLmlzKCc6ZGlzYWJsZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZvcm0uY2hlY2tWYWxpZGl0eSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gJGJ0bi5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0Rm9ybSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBIaWdobGlnaHQgZXJyb3JzXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm0ucmVwb3J0VmFsaWRpdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRmb3JtLmFkZENsYXNzKGNzc1ZhbGlkYXRpb25DbGFzcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzUmVnQnRuQ2xpY2sgPSAkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnbmF2Lm5hdmJhcicpLmZpbmQoJy5yZWdpc3Rlci1ib3gnKS5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWlzUmVnQnRuQ2xpY2sgJiYgJChyZWdpc3RlckJveCkuaGFzQ2xhc3Mob3BlbmVkQ2xhc3MpKSB7XHJcbiAgICAgICAgICAgICAgICAkKHJlZ2lzdGVyQm94KS5hZGRDbGFzcyhjbG9zZUNsYXNzKS5yZW1vdmVDbGFzcyhvcGVuZWRDbGFzcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL3JlZ2lzdGVyLWZvcm0vcmVnaXN0ZXItZm9ybS5qcyIsIi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCB2aWV3VXRpbHMgZnJvbSAnLi92aWV3JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ldHdvcmsge1xyXG5cclxuICAgIGNiRXJyb3JEZWZhdWx0KHJlc3VsdCkge1xyXG4gICAgICAgIGNvbnN0ICRlbCA9ICgkKCcjZGVzY3JpcHRpb24nKS5sZW5ndGgpID8gJCgnI2Rlc2NyaXB0aW9uJykgOiAkKCcuZXJyb3ItbXNnJyk7XHJcbiAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSgkZWwsXHJcbiAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMuc3RhdGUsXHJcbiAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMubWVzc2FnZSB8fCAnTG9naW4gZXJyb3InKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja1N0YXR1cyhyZXNwb25zZSkge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgJiYgcmVzcG9uc2Uuc3RhdHVzID49IDIwMCAmJiByZXNwb25zZS5zdGF0dXMgPCAzMDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG4gICAgICAgICAgICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2VuZFJlcXVlc3QoVVJMLCBPUFRTLCBjYkVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKFVSTCwgT1BUUylcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gUHJvbWlzZS5hbGwoW3Jlc3BvbnNlLCByZXNwb25zZS5qc29uKCldKSlcclxuICAgICAgICAgICAgLnRoZW4oKFtyZXNwb25zZSwganNvbl0pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNiRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYkVycm9yRGVmYXVsdChqc29uKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYkVycm9yKGpzb24pOyAvLyB1cGRhdGUgdmlld1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrU3RhdHVzKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoanNvbi5zdGF0dXMubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ganNvbjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tb24vanMtc2VydmljZXMvbmV0d29yay5qcyIsIi8qIGVzbGludC1kaXNhYmxlIHNvcnQtdmFycyAqL1xyXG4vLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdXNlcic7XHJcbmltcG9ydCBQdWJTdWIgZnJvbSAncHVic3ViLWpzJzsgLy8gaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvcHVic3ViLWpzXHJcbmltcG9ydCBjb29raWVTdG9yYWdlIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb29raWUnO1xyXG4vLyBpbXBvcnQgVmFsaWRhdG9yIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9mb3JtLXZhbGlkYXRvcic7XHJcbmltcG9ydCB2aWV3VXRpbHMgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3ZpZXcnO1xyXG5pbXBvcnQge0NPTlNUfSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29uc3RzJztcclxuXHJcbi8vIHdpbmRvdy4kID0gJDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMb2dpblBhZ2Uoc2VsZWN0b3JDc3MpIHtcclxuICAgIGNvbnN0IHtfZm9ybUlkLCBfYnV0dG9uU3VibWl0SWQsIF9sb2dpbkJveH0gPSBzZWxlY3RvckNzcztcclxuICAgIGNvbnN0IHVzZXIgPSBVc2VyLCAvLyBzZXJ2aWNlXHJcbiAgICAgICAgJGZvcm0gPSAkKF9mb3JtSWQpLFxyXG4gICAgICAgICRlbWFpbCA9ICRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJtYWlsXCJdJyksXHJcbiAgICAgICAgJHRleHRBcmVhRGVzY3JpcHRpb24gPSAkKCcjZGVzY3JpcHRpb24nKTtcclxuICAgIC8vIGNvbnN0IG9wZW5lZENsYXNzID0gJ2QtYmxvY2snO1xyXG4gICAgLy8gY29uc3QgY2xvc2VDbGFzcyA9ICdkLW5vbmUnO1xyXG5cclxuICAgIGNvbnN0IHVzZXJMb2dpbkhlYWRlciA9IChfZm9ybURhdGEpID0+IHtcclxuICAgICAgICBjb25zdCBjYkVycm9yID0gKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAkKF9sb2dpbkJveCkuYXBwZW5kKCc8cD5yZXN1bHQuc3RhdHVzLm1lc3NhZ2U8L3A+Jyk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHVzZXIubG9naW4oX2Zvcm1EYXRhLCBjYkVycm9yKVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5kYXRhICYmIHJlc3VsdC5kYXRhLnRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2F2ZSB0aGUgaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGNvb2tpZVN0b3JhZ2Uuc2V0KENPTlNULmNvb2tpZVN0b3JhZ2UudG9rZW4sIHJlc3VsdC5kYXRhLnRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcubmF2LWxpbmsuanNfbG9nT3V0JykucGFyZW50KCkuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXF1ZXN0IHN1Y2NlZWRlZCB3aXRoIEpTT04gcmVzcG9uc2UnLCByZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UoJHRleHRBcmVhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMubWVzc2FnZSB8fCAnTG9naW4gc3VjY3Nlc3MnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LnN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSh0aGlzLiR0ZXh0QXJlYURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgPHA+c3RhdHVzOiAke3Jlc3VsdC5zdGF0dXMuc3RhdGV9PC9wPjxwPiBtZXNzYWdlOiAke3Jlc3VsdC5zdGF0dXMubWVzc2FnZX08L3A+YCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKCR0ZXh0QXJlYURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLm1lc3NhZ2UgfHwgJ0xvZ2luIGVycm9yJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzdWJtaXRGb3JtID0gZnVuY3Rpb24oZm9ybURhdGFPYmopIHtcclxuICAgICAgICBjb25zdCBlbWFpbCA9ICRlbWFpbC52YWwoKSxcclxuICAgICAgICAgICAgcGFzc3dvcmQgPSAkZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwicGFzc1wiXScpLnZhbCgpLFxyXG4gICAgICAgICAgICBfZm9ybURhdGEgPSBmb3JtRGF0YU9iaiB8fCB7ZW1haWwsIHBhc3N3b3JkfTtcclxuXHJcbiAgICAgICAgaWYgKHNlbGVjdG9yQ3NzLmlzTG9naW5JbnN0YWdyYW0pIHtcclxuICAgICAgICAgICAgLy8gdG9kbzogZGVsZXRlIG1lXHJcbiAgICAgICAgICAgIC8vIGFkZEluc3RhZ3JhbUFjY291bnQoe3VzZXJuYW1lOiAkZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwidXNlcm5hbWVcIl0nKS52YWwoKSwgcGFzc3dvcmR9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkZW1haWwudmFsKCRlbWFpbC52YWwoKS50b0xvY2FsZUxvd2VyQ2FzZSgpKTtcclxuICAgICAgICAgICAgdXNlckxvZ2luSGVhZGVyKF9mb3JtRGF0YSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBQdWJTdWIucHVibGlzaChDT05TVC5ldmVudHMuVVNFUl9MT0dHRUQsICdsb2dpbicpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2luc3RhZ3JhbS1pbnRlZ3JhdGlvbi9pbnN0YWdyYW0tYWNjb3VudHMuaHRtbCc7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbG9nT3V0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29va2llU3RvcmFnZS5yZW1vdmUoQ09OU1QuY29va2llU3RvcmFnZS50b2tlbik7XHJcbiAgICAgICAgUHViU3ViLnB1Ymxpc2goQ09OU1QuZXZlbnRzLlVTRVJfTE9HT1VUKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYmluZEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIGNvbnN0ICRzaG93TG9naW5Cb3hCdG5JZCA9ICQoX3Nob3dMb2dpbkJveEJ0bklkKTtcclxuICAgICAgICBjb25zdCAkbG9naW5Cb3ggPSAkKF9sb2dpbkJveCk7XHJcbiAgICAgICAgY29uc3Qgb3BlbmVkQ2xhc3MgPSAnZC1ibG9jayc7XHJcbiAgICAgICAgY29uc3QgY2xvc2VDbGFzcyA9ICdkLW5vbmUnO1xyXG5cclxuICAgICAgICAvLyAkc2hvd0xvZ2luQm94QnRuSWQub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBpZiAoIXNlbGVjdG9yQ3NzLmlzTG9naW5JbnN0YWdyYW0pIHtcclxuICAgICAgICAvLyAgICAgICAgICRsb2dpbkJveC5jc3Moeyd0b3AnOiAwLCAncmlnaHQnOiAwfSlcclxuICAgICAgICAvLyAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2JnLWxpZ2h0IGJvcmRlciBtdC01IG14LWF1dG8gcG9zaXRpb24tYWJzb2x1dGUnKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICAkbG9naW5Cb3guYWRkQ2xhc3Mob3BlbmVkQ2xhc3MpLnJlbW92ZUNsYXNzKGNsb3NlQ2xhc3MpO1xyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICBjb25zdCAkYnV0dG9uU3VibWl0ID0gJChfYnV0dG9uU3VibWl0SWQpLFxyXG4gICAgICAgICAgICBjc3NWYWxpZGF0aW9uQ2xhc3MgPSAnZm9ybS12YWxpZGF0aW9uJztcclxuXHJcbiAgICAgICAgJGJ1dHRvblN1Ym1pdC5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSAkZm9ybS5nZXQoMCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IHZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoJGZvcm0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2aWV3VXRpbHMsIHZpZXdVdGlscy5pc0VtYWlsKCRlbWFpbC52YWwoKSkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGZvcm0uY2hlY2tWYWxpZGl0eSgpICYmIHZpZXdVdGlscy5pc0VtYWlsKCRlbWFpbC52YWwoKSkpIHtcclxuICAgICAgICAgICAgICAgIHN1Ym1pdEZvcm0oKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIEhpZ2hsaWdodCBlcnJvcnNcclxuICAgICAgICAgICAgICAgIGlmIChmb3JtLnJlcG9ydFZhbGlkaXR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJGZvcm0uYWRkQ2xhc3MoY3NzVmFsaWRhdGlvbkNsYXNzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcubmF2LWxpbmsuanNfbG9nT3V0Jykub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBsb2dPdXQoKTtcclxuICAgICAgICAgICAgJChlLnRhcmdldCkucGFyZW50KCkuaGlkZSgpO1xyXG4gICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKCR0ZXh0QXJlYURlc2NyaXB0aW9uLCAnTG9nZ2VkIG91dCcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBQdWJTdWIuc3Vic2NyaWJlKENPTlNULmV2ZW50cy5VU0VSX0xPR09VVCwgKG1zZykgPT4ge1xyXG4gICAgICAgICAgICAkKENPTlNULnVpU2VsZWN0b3JzLmhlYWRlck5hdkxvZ2luQnRuKS5hZGRDbGFzcyhvcGVuZWRDbGFzcykucmVtb3ZlQ2xhc3MoY2xvc2VDbGFzcyk7IC8vIC5zaG93KCk7XHJcbiAgICAgICAgICAgICQoQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyUmVnQnRuKS5hZGRDbGFzcyhvcGVuZWRDbGFzcykucmVtb3ZlQ2xhc3MoY2xvc2VDbGFzcyk7XHJcbiAgICAgICAgICAgICQoJy5uYXYtbGluay5qc19sb2dPdXQnKS5hZGRDbGFzcyhjbG9zZUNsYXNzKS5yZW1vdmVDbGFzcyhvcGVuZWRDbGFzcyk7IC8vIC5oaWRlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9yTG9naW5TdGF0ZSA9ICcuanNfbWVzc2FnZV9sb2dnZWQtLXRleHQnO1xyXG4gICAgICAgICAgICAkKHNlbGVjdG9yTG9naW5TdGF0ZSkudGV4dCgn0JLRiyDQstGL0YjQu9C4INC40Lcg0LDQutC60LDRg9C90YLQsCcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXNMb2dpbkJ0bkNsaWNrID0gJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJ25hdi5uYXZiYXInKS5maW5kKCRsb2dpbkJveCkubGVuZ3RoO1xyXG4gICAgICAgICAgICBjb25zdCBpc0FkZEluc3RhZ3JhbUJ0bkNsaWNrZWQgPSAkKGV2ZW50LnRhcmdldCkuYXR0cignaWQnKSA9PT0gQ09OU1QudWlTZWxlY3RvcnMuaW5zdGFncmFtLmFkZEFjY291bnRCdG5JZDtcclxuXHJcbiAgICAgICAgICAgIGlmICghaXNMb2dpbkJ0bkNsaWNrICYmICRsb2dpbkJveC5oYXNDbGFzcyhvcGVuZWRDbGFzcykgJiYgIWlzQWRkSW5zdGFncmFtQnRuQ2xpY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgJGxvZ2luQm94LmFkZENsYXNzKGNsb3NlQ2xhc3MpLnJlbW92ZUNsYXNzKG9wZW5lZENsYXNzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgICAgIGlmICgkKCcuYXV0aC5sb2dpbicpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBiaW5kRXZlbnRzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5pdFxyXG4gICAgfTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvX2F1dGgvbG9naW4tcGFnZS5qcyIsIi8qIGVzbGludC1kaXNhYmxlIHNvcnQtdmFycyAqL1xyXG4vLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdXNlcic7XHJcbi8vIGltcG9ydCBjb29raWVTdG9yYWdlIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb29raWUnO1xyXG5pbXBvcnQgdmlld1V0aWxzIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy92aWV3JztcclxuLy8gaW1wb3J0IHtDT05TVH0gZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2NvbnN0cyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSW5zdGFncmFtKHNlbGVjdG9yQ1NTID0ge30pIHtcclxuICAgIGNvbnN0ICRidXR0b25TdWJtaXQgPSAkKCcjanNfaW5zdGFncmFtLWdldC1hY2NvdW50cy0tYnRuJyk7XHJcbiAgICBjb25zdCB1c2VyID0gVXNlciwgLy8gc2VydmljZVxyXG4gICAgICAgICRsaXN0ID0gJCgnLmluc3RhZ3JhbS1hY2NvdW50cy1saXN0Jyk7XHJcblxyXG4gICAgY29uc3Qgc3VibWl0Rm9ybSA9IGZ1bmN0aW9uKGZvcm1EYXRhT2JqKSB7XHJcbiAgICAgICAgaWYgKCRidXR0b25TdWJtaXQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHVzZXIuZ2V0SW5zdGFncmFtQWNjb3VudCgpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3VXRpbHMuZmlsbExpc3QoJGxpc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5kYXRhLmFjY291bnRzIHx8ICdMb2dpbiBlcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnZXRJbnN0YWdyYW1BY2NvdW50ICcsICRidXR0b25TdWJtaXQpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBiaW5kRXZlbnRzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJGJ1dHRvblN1Ym1pdC5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHN1Ym1pdEZvcm0oKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgICAgICBiaW5kRXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0XHJcbiAgICB9O1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9faW5zdGFncmFtL2luc3RhZ3JhbS5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmFzZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRpZighbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=