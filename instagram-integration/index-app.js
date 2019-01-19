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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
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

var _network = __webpack_require__(14);

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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)(module)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(17);

var _registerForm = __webpack_require__(13);

var _registerForm2 = _interopRequireDefault(_registerForm);

var _loginForm = __webpack_require__(10);

var _loginPage = __webpack_require__(15);

var _confirmReg = __webpack_require__(6);

var _instagram = __webpack_require__(16);

var _header = __webpack_require__(8);

var header = _interopRequireWildcard(_header);

var _burgerMenu = __webpack_require__(7);

var burgerMenu = _interopRequireWildcard(_burgerMenu);

var _consts = __webpack_require__(0);

var _instagramAccountsList = __webpack_require__(9);

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
/* 11 */
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
                    'profile_pic_url': 'https://s.auto.drom.ru/i24224/pubs/4/63060/gen340_2880636.jpg'
                }, {
                    'username': 'your_dieta',
                    'profile_pic_url': 'https://s.auto.drom.ru/i24224/pubs/4/63060/gen340_2880636.jpg'
                }],
                'last_message': 'йоу',
                'is_unread': false
            }, {
                'id': '2',
                'name': 'Sergant',
                'to': [{
                    'username': 'dianacober7',
                    'profile_pic_url': 'https://s.auto.drom.ru/i24224/pubs/4/63060/gen340_2880636.jpg'
                }],
                'param_value': 'dianacober7',
                'last_message': '\u0416\u0456\u043D\u043E\u0447\u043A\u043E \uD83D\uDE0A',
                'is_unread': false
            }]
        }]
    }
};

exports.userList = userList;
exports.conversation = conversation;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.init = init;

var _dataServer = __webpack_require__(11);

var data = _interopRequireWildcard(_dataServer);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// import User from '../../common/js-services/user';
// import Spinner from '../../common/js-services/spinner';
/*
import viewUtils from '../../common/js-services/view';

function addOnLoadHandlers() {
    // $('.js_repeat-security-code').on('click', (e) => {

    // });

    $('.js_add-instagram-account').on('click', (e) => {
        const btn = $(e.target);
        const $modalBody = btn.closest('.modal').find('.modal-dialog .modal-body');
        const username = $modalBody.find('input[name="username"]').val().trim();
        const password = $modalBody.find('input[name="pass"]').val().trim();
        const $form = $('form', $modalBody);
        const form = $form.get(0);
        const cssValidationClass = 'form-validation';

        e.preventDefault();

        // const validator = new Validator($form);
        // console.log(validator.validate());
        if (form.checkValidity()) {
            // addInstagramAccount({username, password});
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

function addListHandler(/!* username*!/) {
    // $('#yourModalID').on('show.bs.modal', function(e) {
    //     var yourparameter = e.relatedTarget.dataset.yourparameter;
    //     // Do some stuff w/ it.
    // });
    let checkpointType = '';

    $('.js_pass-checkpoint-btn').on('click', (e) => {
        const $button = $(e.target);
        const username = $button.data('username');
        checkpointType = $button.data('checkpointType') || checkpointType;
        // $('#security-code').data('checkpointType', checkpointType);
        // todo add 'checkpointType' to modal
        const sendTo = (checkpointType === 'PHONE') ? 'телефон' : 'email';
        // Spinner.start($button, 'fa-key');

        if (checkpointType === 'EMAIL_OR_PHONE') {
            e.stopPropagation();

            // инпуты спрятаны,
            // показать серые переключатели (выбрал тип)
            // есть кнопка Запросить код подтверждение
            $('#security-code-phoneOremail').modal({show: true, username});

            // не отправляем реквест
            return;
        }

        User.getSecurityKey(username, checkpointType).then((result) => {
            console.log('SecurityKey received:', result.status.state);
            if (result.status.state === 'ok') {
                const $modal = $('#security-code');

                // Spinner.stop($button, 'fa-key');
                $('.js_success-feedback', $modal).empty().text(`Ключ подтверждения был отправлен Вам на ${sendTo}`);
            }
        });
    });

    // inside modal
    $('.js_confirm-security-code').on('click', (e) => {
        const btn = $(e.target);
        const username = btn.data('username');
        const $keyInput = btn.closest('.modal').find('.modal-dialog form input.js_confirm-key');
        const key = $keyInput.val().trim();
        const $modal = btn.closest('.modal');
        e.stopPropagation();

        if (key.length !== 6) {
            return;
        }
        User.confirmSecurityKey(key, username).then((result) => {
            if (result.status.state !== 'ok') {
                return;
            }
            console.log('js_confirm:', result.status.state, 'close modal');
            $modal.modal('hide');
        }).catch((err) => {
            console.log('err');
            $('.js_success-feedback', $modal).text('Запрос не отправлен').css('color', 'red');
            console.log(err);
        });
    });

    $('form input[minlength]').on('blur', function () {
        const len = $(this).val().trim().length;
        const minLen = Number($(this).attr('minlength'));
        // const message = minLen <= len ? '' : minLen + ' characters minimum';
        if (minLen !== len) {
            $(this).css('borderColor', 'red');
        } else {
            $(this).css('borderColor', '#ced4da');
        }
        // this.setCustomValidity(message)
    });

    function onHideModal(e) {
        const $modal = $(e.target);
        $modal.find('.first-step').removeClass('d-none');
        $modal.find('.second-step').addClass('d-none');
        $('.js_confirm-key').val('');
        $('.js_success-feedback', $modal).removeAttr('style').empty();
    }
    $('#security-code-phoneOremail').on('hide.bs.modal', onHideModal);
    $('#security-code').on('hide.bs.modal', onHideModal);

    // "PHONE_OR_EMAIL" modal
    $('.js_get-security-code-phoneOremail').on('click', (e) => {
        const $modal = $('#security-code-phoneOremail');
        const typeSelected = $(e.target).closest($modal).find('.js_btn-type-switcher input:checked');
        const checkpointTypeActive = typeSelected.val();
        const sendTo = (checkpointTypeActive === 'PHONE') ? 'телефон' : 'email';
        const modalConfig = $modal.data()['bs.modal']._config;
        const username = modalConfig.username;
        User.getSecurityKey(username, checkpointTypeActive).then((result) => {
            // при нажатии "Запросить код подтверждение" - отпарляется реквест "старт чекпоинт" появляеться инпут и кнопка других типах
            // get selected button

            // переключатель(серый) и кнопка "Запросить код подтверждение" исчезают
            console.log('SecurityKey received:', result.status.state);
            if (result.status.state === 'ok') {
                $('.first-step', $modal).addClass('d-none');
                $('.second-step', $modal).removeClass('d-none');
                $('.js_success-feedback', $modal).empty().text(`Ключ подтверждения был отправлен Вам на ${sendTo}`);
            }
        });
    });
}

*/

/**
 * Init header
 */
/*
export function initOld() {
    const $msgList = $('.messages-list');
    // check we are in profile page
    if (!$msgList.length) {
        return;
    }
    const token = User.getToken(); // upd to: User.getToken()
    const metadata = User.getMetadata(token);
    const resendRequest = () => User.getMetadata(token);
    let isSendReqOnce = false;
    const checkResponse = (result, isResendRequest) => {
        if (!result.status.state === 'ok' || !result.data || !$msgList.length || isResendRequest) {
            // проверям один раз наличие result.data.accounts.info
            $msgList.empty();
            $(`<li class="media">
                <div class="media-body">
                    <h3 class="mt-0 mb-3">Ни одного Аккаунта не добавлено</h3>
                </div>
            </li>`).appendTo($msgList);
            setTimeout(() => {
                resendRequest().then((result) => {
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

    addOnLoadHandlers();

    metadata.then((result) => {
        // проверям один раз наличие result.data.accounts.info
        let isResendRequest = false;
        if (result.data && result.data.accounts && !isSendReqOnce) {
            result.data.accounts.forEach((item) => {
                if (!item.info) {
                    isResendRequest = true;
                    isSendReqOnce = true;
                    return;
                }
            });
        }
        checkResponse(result, isResendRequest);
    }).catch((err) => {
        // может инфо отсутсвовать - сделать еще раз запрос через 3 сек.
        setTimeout(() => {
            viewUtils.showInfoMessage($('.error-msg'),
                err.status || '',
                'Не получилось загрузить доступные Instagram аккаунты');
        }, 3000);
        $('.spinner-box').addClass('d-none');
    });
}
*/

function fillList($list, dataArray) {
    var items = dataArray;
    var cList = $list;
    // const defaultAvatarSrc = 'https://i.imgur.com/jNNT4LE.png';
    var insertMsg = function insertMsg(value, type, cssCls) {
        var str = '';
        switch (type) {
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

    /*
    const stats = (info) => {
        const tpl = `<div class="col">
            <ul class="list-inline text-center counts-list">
            ${(info)
            ? `${insertItem(info['media_count'], 'Публикации', 'media-count')}
                ${insertItem(info['follower_count'], 'Подписчики', 'follower-count')}
                ${insertItem(info['following_count'], 'Подписки', 'following-count')}`
            : `${insertItem(false, 'Публикации', 'media-count')}
                ${insertItem(false, 'Подписчики', 'follower-count')}
                ${insertItem(false, 'Подписки', 'following-count')}`
            }
            </ul>
        </div>`;
        return tpl;
    };
    */
    cList.empty().addClass('border-light-color');
    items.forEach(function (item) {
        var message = item;
        // const checkpoint = item.checkpoint || item;

        if (message.side === 'left') {
            $('<li class="chat-item chat-item-left" value="' + message.value + '">\n                <div class="d-flex">\n                ' + (message['profile_pic_url'] ? '<div class="chat-img-box"> \n                         <img src="' + message['profile_pic_url'] + '" alt="User Avatar" class="">\n                        </div>' : '') + '\n                <div>\n                    <p class="chat-username text-muted">' + message.username + '</p>\n                    ' + insertMsg(message.value, message.type) + '\n                </div>\n                    <small class="chat-time-text">' + message.timestamp + '</small>\n                </div>\n            </li>').appendTo(cList);
        } else {
            $('<li class="chat-item justify-content-end chat-item-right" value="' + message.value + '">\n                <div class="d-flex">\n                    ' + insertMsg(message.value, message.type) + '\n                    <small class="pull-right chat-time-text">' + message.timestamp + '</small>\n                    </div>\n            </li>').appendTo(cList);
        }
    });
}
function fillUserList($list, dataArray) {
    var items = dataArray;
    var cList = $list;
    cList.empty().addClass('border-light-color');
    // <div class="media">
    //     <a href="#" class="mr-3">
    //         <img src="https://i.imgur.com/jNNT4LE.png"
    //              class="media-photo">
    //     </a>
    //     <span class="badge badge-secondary position-absolute p-2">3</span>
    //     <div class="media-body">
    //         <h4 class="title">
    //             John Doe John Doe
    //             <small class="text-muted time">11.02.2018</small>

    //         </h4>
    //         <p class="summary">last msg</p>
    //     </div>
    // </div>
    items.forEach(function (item) {
        console.log(item);
        $('<li class="list-group-item">\n            <div class="media">\n                <a href="#" class="mr-3">\n                    <img src="https://i.imgur.com/jNNT4LE.png"\n                    class="media-photo">\n                </a>\n            <span class="badge badge-secondary position-absolute p-2">3</span>\n            <div class="media-body">\n                <h4 class="title">\n                    ' + item.name + '\n                    <small class="text-muted time">11.02.2018</small>\n\n                </h4>\n                <p class="summary">' + item['last_message'] + '</p>\n            </div>\n            </li>').appendTo(cList);
    });
}

function init() {
    var conversation = data.conversation,
        userList = data.userList;

    console.log('test', userList, conversation);
    var $msgList = $('.messages-list');
    var $userList = $('.messages-user-list');
    // check we are in correct page (messages)
    if (!$msgList.length) {
        return;
    }
    fillList($msgList, conversation.data.meta.messages);
    fillUserList($userList, userList.data.meta[0].conversations);
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

var _cookie = __webpack_require__(3);

var _cookie2 = _interopRequireDefault(_cookie);

var _consts = __webpack_require__(0);

var _view = __webpack_require__(2);

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
/* 15 */
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
/* 16 */
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
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWE4OWFhM2YzZTcwZjg0NmFlNjUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy91c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vanMtc2VydmljZXMvdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2pzLXNlcnZpY2VzL2Nvb2tpZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3B1YnN1Yi1qcy9zcmMvcHVic3ViLmpzIiwid2VicGFjazovLy8uL3NyYy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9jb25maXJtLXJlZy9jb25maXJtLXJlZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2hlYWRlci9idXJnZXItbWVudS9idXJnZXItbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9pbnN0YWdyYW0tYWNjb3VudHMtbGlzdC9pbnN0YWdyYW0tYWNjb3VudHMtbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL21lc3NhZ2VzL2RhdGFTZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9tZXNzYWdlcy9tZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3JlZ2lzdGVyLWZvcm0vcmVnaXN0ZXItZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2pzLXNlcnZpY2VzL25ldHdvcmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL19hdXRoL2xvZ2luLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL19pbnN0YWdyYW0vaW5zdGFncmFtLmpzIiwid2VicGFjazovLy8uL3NyYy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyJdLCJuYW1lcyI6WyJDT05TVCIsInVybCIsImJhc2UiLCJyZWdpc3RyYXRpb24iLCJsb2dpbiIsImNvbmZpcm1hdGlvbiIsImluc3RhZ3JhbV9hZGRBY2NvdW50IiwiaW5zdGFncmFtQWNjb3VudF9nZXRNZXRhRGF0YSIsImluc3RhZ3JhbUFjY291bnRfY2hlY2twb2ludCIsImluc3RhZ3JhbUFjY291bnRfY29uZmlybUtleSIsInVzZXIiLCJlbWFpbCIsInBhc3N3b3JkIiwidG9rZW4iLCJjb29raWVTdG9yYWdlIiwiZW1haWxDb25maXJtZWQiLCJ1aVNlbGVjdG9ycyIsImhlYWRlckxvZ2luQm94IiwiaGVhZGVyTmF2TG9naW5CdG4iLCJoZWFkZXJSZWdCb3giLCJoZWFkZXJSZWdCdG4iLCJpbnN0YWdyYW0iLCJhZGRBY2NvdW50QnRuU2VsZWN0b3IiLCJhZGRBY2NvdW50QnRuSWQiLCJldmVudHMiLCJVU0VSX0xPR0dFRCIsIlVTRVJfTE9HT1VUIiwiVVNFUl9FTUFJTF9DT05GSVJNRUQiLCJTVE9QX0ZJWEVEX1NQSU5ORVIiLCJnZXRQYXRoIiwibmFtZSIsIlVzZXIiLCJuZXR3b3JrIiwiTmV0d29yayIsIkNvb2tpZVN0b3JhZ2UiLCJzZXR0aW5nUG9zdCIsIm1ldGhvZCIsImhlYWRlcnMiLCJnZXRUb2tlbiIsImdldCIsImNvb2tpZVRva2VuIiwiZm9ybURhdGEiLCJjYkVycm9yIiwic2V0dGluZyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwic2VuZFJlcXVlc3QiLCJ1c2VybmFtZSIsImNoZWNrcG9pbnRUeXBlIiwia2V5IiwidXNlckluc3RhbmNlIiwidmlld1V0aWxzIiwic2hvd0luZm9NZXNzYWdlIiwic2VsZWN0b3IiLCJtZXNzYWdlMSIsIm1lc3NhZ2UyIiwiJCIsImVtcHR5IiwiYXBwZW5kIiwiZmlsbExpc3QiLCIkbGlzdCIsImRhdGFBcnJheSIsIml0ZW1zIiwiY0xpc3QiLCJmb3JFYWNoIiwiaXRlbSIsImkiLCJsaSIsImFwcGVuZFRvIiwiYWRkQ2xhc3MiLCJ0ZXh0IiwiaXNFbWFpbCIsInJlZ2V4IiwidGVzdCIsIkNvb2tpZVNydiIsImMiLCJkb2N1bWVudCIsImNvb2tpZSIsIm1hdGNoIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2V0IiwidmFsdWUiLCJvcHRzIiwicGF0aCIsImRheXMiLCJPYmplY3QiLCJlbnRyaWVzIiwicmVkdWNlIiwic3RyIiwiayIsInYiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZW1vdmUiLCJoZWFkZXIiLCJidXJnZXJNZW51IiwiaW5zdGFncmFtQWNjb3VudHMiLCJtZXNzYWdlcyIsInNlbGVjdG9yQ3NzTG9naW5Gb3JtIiwiX2xvZ2luQm94IiwiX2Zvcm1JZCIsIl9idXR0b25TdWJtaXRJZCIsIl9zaG93TG9naW5Cb3hCdG5JZCIsInNlbGVjdG9yQ3NzTG9naW5Gb3JtSW5zdGFncmFtIiwiaXNMb2dpbkluc3RhZ3JhbSIsImluaXQiLCJSZWdpc3RlckZvcm0iLCJpbml0SGVhZGVyIiwiY29uZmlybWF0aW9uV2l0aFJlZGlyZWN0IiwicGFyc2VRdWVyeVN0cmluZyIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwib2JqVVJMIiwicmVwbGFjZSIsIlJlZ0V4cCIsIiQwIiwiJDEiLCIkMiIsInBhcmFtcyIsInNlbmRDb25maXJtIiwiY29uZmlybSIsInRoZW4iLCJyZXN1bHQiLCJzdGF0dXMiLCJzdGF0ZSIsImRhdGEiLCJjdXN0b21lcnNEYXRhU3RyaW5nIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiY29uc29sZSIsImxvZyIsInNldFRpbWVvdXQiLCJyZWRpcmVjdCIsInBhdGhuYW1lIiwiaW5kZXhPZiIsInNlbGVjdG9yc0VsIiwibGVmdE1lbnUiLCJoYW1idXJnZXJCdXR0b25DbHMiLCJoYW1idXJnZXJNZW51Q2xzIiwiaGFtYnVyZ2VyTWVudU9wZW5lZENsYXNzIiwiaGFtYnVyZ2VyQnV0dG9uQ2xvc2VDbGFzcyIsInJpZ2h0TWVudSIsInN1YkhlYWRlciIsInRvZ2dsZUhhbWJ1cmdlck1lbnUiLCJtZW51TmFtZSIsInRvZ2dsZUNsYXNzIiwib24iLCJiaW5kIiwic2VsZWN0b3JMb2dpblN0YXRlIiwic2VsZWN0b3JFbWFpbENvbmZpcm1TdGF0ZSIsImNsb3NlQ2xhc3MiLCJvcGVuZWRDbGFzcyIsImVtYWlsTm90Q29uZmlybWVkIiwiJGVtYWlsbk1zZyIsImNzcyIsIm9uTG9naW5TdWJzY3JpYmUiLCJtc2ciLCJyZW1vdmVDbGFzcyIsIiRsb2dpbk1zZyIsImlzRW1haWxDb25maXJtZWQiLCJzaG93TG9nb3V0IiwiaXNMb2dnZWQiLCJpc0xvZ2dlZEluIiwicGFyZW50Iiwic2hvdyIsIm9sZFVSTCIsInJlZmVycmVyIiwiaW5jbHVkZXMiLCIkbG9naW5Cb3giLCIkcmVnaXN0ZXJCb3giLCJQdWJTdWIiLCJzdWJzY3JpYmUiLCJoaWRlIiwiYWRkSW5zdGFncmFtQWNjb3VudCIsIm5ld0Zvcm1EYXRhIiwibWVzc2FnZSIsIiRtc2dMaXN0IiwiY2F0Y2giLCJlcnIiLCJhZGRPbkxvYWRIYW5kbGVycyIsImUiLCJidG4iLCJ0YXJnZXQiLCIkbW9kYWxCb2R5IiwiY2xvc2VzdCIsImZpbmQiLCJ2YWwiLCJ0cmltIiwiJGZvcm0iLCJmb3JtIiwiY3NzVmFsaWRhdGlvbkNsYXNzIiwicHJldmVudERlZmF1bHQiLCJjaGVja1ZhbGlkaXR5IiwicmVwb3J0VmFsaWRpdHkiLCJhZGRMaXN0SGFuZGxlciIsIiRidXR0b24iLCJzZW5kVG8iLCJzdG9wUHJvcGFnYXRpb24iLCJtb2RhbCIsImdldFNlY3VyaXR5S2V5IiwiJG1vZGFsIiwiJGtleUlucHV0IiwibGVuZ3RoIiwiY29uZmlybVNlY3VyaXR5S2V5IiwibGVuIiwibWluTGVuIiwiTnVtYmVyIiwiYXR0ciIsIm9uSGlkZU1vZGFsIiwicmVtb3ZlQXR0ciIsInR5cGVTZWxlY3RlZCIsImNoZWNrcG9pbnRUeXBlQWN0aXZlIiwibW9kYWxDb25maWciLCJfY29uZmlnIiwiZGVmYXVsdEF2YXRhclNyYyIsImluc2VydEl0ZW0iLCJjc3NDbHMiLCJsaVRwbCIsInN0YXRzIiwiaW5mbyIsInRwbCIsImNoZWNrcG9pbnQiLCJ0eXBlIiwibWV0YWRhdGEiLCJnZXRNZXRhZGF0YSIsInJlc2VuZFJlcXVlc3QiLCJpc1NlbmRSZXFPbmNlIiwiY2hlY2tSZXNwb25zZSIsImlzUmVzZW5kUmVxdWVzdCIsImFjY291bnRzIiwiTG9naW5Gb3JtIiwic2VsZWN0b3JDc3MiLCIkZW1haWwiLCIkdGV4dEFyZWFEZXNjcmlwdGlvbiIsInVzZXJMb2dpbkhlYWRlciIsIl9mb3JtRGF0YSIsInN1Ym1pdEZvcm0iLCJmb3JtRGF0YU9iaiIsInRvTG9jYWxlTG93ZXJDYXNlIiwicHVibGlzaCIsImxvZ091dCIsImJpbmRFdmVudHMiLCIkc2hvd0xvZ2luQm94QnRuSWQiLCIkYnV0dG9uU3VibWl0IiwiZXZlbnQiLCJpc0xvZ2luQnRuQ2xpY2siLCJpc0FkZEluc3RhZ3JhbUJ0bkNsaWNrZWQiLCJoYXNDbGFzcyIsImNvbnZlcnNhdGlvbiIsInVzZXJMaXN0IiwiaW5zZXJ0TXNnIiwic2lkZSIsInRpbWVzdGFtcCIsImZpbGxVc2VyTGlzdCIsIiR1c2VyTGlzdCIsIm1ldGEiLCJjb252ZXJzYXRpb25zIiwic2VsZWN0b3JDbHMiLCJzdWJtaXRCdG4iLCIkcGFzc3dvcmQiLCIkcGFzc3dvcmRDb25maXJtIiwicGFzc3dvcmRDb25maXJtIiwicmVnaXN0ZXIiLCJlcnJvciIsInJlZ2lzdGVyQm94IiwiJGJ0biIsImlzIiwiaXNSZWdCdG5DbGljayIsIiRlbCIsInJlc3BvbnNlIiwiRXJyb3IiLCJzdGF0dXNUZXh0IiwiVVJMIiwiT1BUUyIsImZldGNoIiwiUHJvbWlzZSIsImFsbCIsImpzb24iLCJvayIsImNiRXJyb3JEZWZhdWx0IiwiY2hlY2tTdGF0dXMiLCJMb2dpblBhZ2UiLCJocmVmIiwiSW5zdGFncmFtIiwic2VsZWN0b3JDU1MiLCJnZXRJbnN0YWdyYW1B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RUFBTztBQUM3QkEsY0FBRVcsY0FBRjtBQUNBNkM7QUFDSCxTQUhEO0FBSUgsS0FMRDs7QUFPQSxhQUFTcEksSUFBVCxHQUFnQjtBQUNaeUk7QUFDSDs7QUFFRCxXQUFPO0FBQ0h6STtBQURHLEtBQVA7QUFHSDtBQXRDRCwrRDs7Ozs7O0FDSEEseUM7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJpbmRleC1hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxYTg5YWEzZjNlNzBmODQ2YWU2NSIsImV4cG9ydCBjb25zdCBDT05TVCA9IHtcclxuICAgIHVybDoge1xyXG4gICAgICAgIGJhc2U6ICdodHRwOi8vYXBpLmx1eGdyYW0ucnUvdjEvJyxcclxuICAgICAgICByZWdpc3RyYXRpb246ICdyZWdpc3RyYXRpb24vYmFzaWMvJyxcclxuICAgICAgICBsb2dpbjogJ3JlZ2lzdHJhdGlvbi9iYXNpYy9sb2dpbicsXHJcbiAgICAgICAgY29uZmlybWF0aW9uOiAncmVnaXN0cmF0aW9uL2Jhc2ljL2NvbmZpcm1hdGlvbj90b2tlbicsXHJcbiAgICAgICAgaW5zdGFncmFtX2FkZEFjY291bnQ6ICdpbnN0YWdyYW0tYWNjb3VudHMvJyxcclxuICAgICAgICBpbnN0YWdyYW1BY2NvdW50X2dldE1ldGFEYXRhOiAnaW5zdGFncmFtLWFjY291bnRzL21ldGEnLFxyXG4gICAgICAgIGluc3RhZ3JhbUFjY291bnRfY2hlY2twb2ludDogJ2luc3RhZ3JhbS1hY2NvdW50cy9jaGVja3BvaW50LycsXHJcbiAgICAgICAgaW5zdGFncmFtQWNjb3VudF9jb25maXJtS2V5OiAnaW5zdGFncmFtLWFjY291bnRzL2NoZWNrcG9pbnQvJ1xyXG4gICAgfSxcclxuICAgIHVzZXI6IHtcclxuICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgIHRva2VuOiAnJ1xyXG4gICAgfSxcclxuICAgIGNvb2tpZVN0b3JhZ2U6IHtcclxuICAgICAgICB0b2tlbjogJ3VzZXJfbG9nZ2VkJyxcclxuICAgICAgICBlbWFpbENvbmZpcm1lZDogJ2VtYWlsX2NvbmZpcm1lZCdcclxuICAgIH0sXHJcbiAgICB1aVNlbGVjdG9yczoge1xyXG4gICAgICAgIGhlYWRlckxvZ2luQm94OiAnbmF2IC5sb2dpbi1ib3gnLFxyXG4gICAgICAgIGhlYWRlck5hdkxvZ2luQnRuOiAnbmF2IHVsIGxpIC5qc19sb2dpbicsXHJcbiAgICAgICAgaGVhZGVyUmVnQm94OiAnbmF2IC5yZWdpc3Rlci1ib3gnLFxyXG4gICAgICAgIGhlYWRlclJlZ0J0bjogJ25hdiB1bCBsaSAuanNfcmVnaXN0ZXInLFxyXG4gICAgICAgIGluc3RhZ3JhbToge1xyXG4gICAgICAgICAgICBhZGRBY2NvdW50QnRuU2VsZWN0b3I6ICcjanNfc2hvdy1sb2dpbi1ib3gnLFxyXG4gICAgICAgICAgICBhZGRBY2NvdW50QnRuSWQ6ICdqc19zaG93LWxvZ2luLWJveCdcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgICAgVVNFUl9MT0dHRUQ6ICd1c2VyX2xvZ2dlZCcsXHJcbiAgICAgICAgVVNFUl9MT0dPVVQ6ICd1c2VyX2xvZ291dCcsXHJcbiAgICAgICAgVVNFUl9FTUFJTF9DT05GSVJNRUQ6ICd1c2VyX2VtYWlsX2NvbmZpcm1lZCcsXHJcbiAgICAgICAgU1RPUF9GSVhFRF9TUElOTkVSOiAnc3RvcF9maXhlZF9zcGlubmVyJ1xyXG4gICAgfSxcclxuICAgIGdldFBhdGgobmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnVybC5iYXNlICsgdGhpcy51cmxbbmFtZV07XHJcbiAgICB9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tb24vanMtc2VydmljZXMvY29uc3RzLmpzIiwiLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IHtDT05TVH0gZnJvbSAnLi9jb25zdHMnO1xyXG5pbXBvcnQgTmV0d29yayBmcm9tICcuL25ldHdvcmsnO1xyXG5pbXBvcnQgQ29va2llU3RvcmFnZSBmcm9tICcuL2Nvb2tpZSc7XHJcblxyXG5jbGFzcyBVc2VyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm5ldHdvcmsgPSBuZXcgTmV0d29yaygpO1xyXG4gICAgICAgIHRoaXMuY29va2llU3RvcmFnZSA9IENvb2tpZVN0b3JhZ2U7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5nUG9zdCA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlzTG9nZ2VkSW4oKSB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5nZXRUb2tlbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRW1haWxDb25maXJtZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmNvb2tpZVN0b3JhZ2UuZ2V0KENPTlNULmNvb2tpZVN0b3JhZ2UuZW1haWxDb25maXJtZWQpID09PSAnY29uZmlybWVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VG9rZW4oKSB7XHJcbiAgICAgICAgY29uc3QgY29va2llVG9rZW4gPSB0aGlzLmNvb2tpZVN0b3JhZ2UuZ2V0KENPTlNULmNvb2tpZVN0b3JhZ2UudG9rZW4pO1xyXG4gICAgICAgIHJldHVybiBjb29raWVUb2tlbjtcclxuICAgIH1cclxuXHJcbiAgICBsb2dpbihmb3JtRGF0YSwgY2JFcnJvcikge1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSB7Li4udGhpcy5zZXR0aW5nUG9zdCwgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpfTtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KENPTlNULmdldFBhdGgoJ2xvZ2luJyksIHNldHRpbmcsIGNiRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEluc3RhZ3JhbUFjY291bnQoZm9ybURhdGEsIGNiRXJyb3IpIHtcclxuICAgICAgICBjb25zdCBzZXR0aW5nID0ge1xyXG4gICAgICAgICAgICAuLi50aGlzLnNldHRpbmdQb3N0LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QuaGVhZGVycyxcclxuICAgICAgICAgICAgICAgIHRva2VuOiB0aGlzLmdldFRva2VuKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1fYWRkQWNjb3VudCcpLCBzZXR0aW5nLCBjYkVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbnN0YWdyYW1BY2NvdW50KCkge1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSB7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QsXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QuaGVhZGVycyxcclxuICAgICAgICAgICAgICAgIHRva2VuOiB0aGlzLmdldFRva2VuKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1fYWRkQWNjb3VudCcpLCBzZXR0aW5nKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25maXJtKHRva2VuKSB7XHJcbiAgICAgICAgLy8gY29uc3QgY29uZmlybVVybCA9IENPTlNULmdldFBhdGgoJ2NvbmZpcm1hdGlvbicpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QoYCR7Q09OU1QuZ2V0UGF0aCgnY29uZmlybWF0aW9uJykgKyB0b2tlbn1gKTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3Rlcihmb3JtRGF0YSkge1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSB7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChDT05TVC5nZXRQYXRoKCdyZWdpc3RyYXRpb24nKSwgc2V0dGluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWV0YWRhdGEodG9rZW4sIGNiRXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLnNlbmRSZXF1ZXN0KGAke0NPTlNULmdldFBhdGgoJ2luc3RhZ3JhbUFjY291bnRfZ2V0TWV0YURhdGEnKX1gLCB7aGVhZGVyczoge3Rva2VufX0sIGNiRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNlY3VyaXR5S2V5KHVzZXJuYW1lLCBjaGVja3BvaW50VHlwZSkge1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSB7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsndHlwZSc6IGNoZWNrcG9pbnRUeXBlfSksIC8vIHRvZG86IHRtcCBzZXQsIGl0IHNob3VsZCBiZSAndHlwZSdcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nUG9zdC5oZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgJ3Rva2VuJzogJzNlMzIxZTYwMDI5NzExZTk5MjY0YTA0ODFjOGUxN2Q0JyAvLyB0b2RvOiB0aGlzLmdldFRva2VuKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5zZW5kUmVxdWVzdChgJHtDT05TVC5nZXRQYXRoKCdpbnN0YWdyYW1BY2NvdW50X2NoZWNrcG9pbnQnKX0ke3VzZXJuYW1lfWAsIHNldHRpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmZpcm1TZWN1cml0eUtleShrZXksIHVzZXJuYW1lKSB7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeydzZWN1cml0eV9jb2RlJzoga2V5fSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc2V0dGluZ1Bvc3QuaGVhZGVycyxcclxuICAgICAgICAgICAgICAgICd0b2tlbic6ICczZTMyMWU2MDAyOTcxMWU5OTI2NGEwNDgxYzhlMTdkNCcgLy8gdG9kbzogdGhpcy5nZXRUb2tlbigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuc2VuZFJlcXVlc3QoYCR7Q09OU1QuZ2V0UGF0aCgnaW5zdGFncmFtQWNjb3VudF9jb25maXJtS2V5Jyl9JHt1c2VybmFtZX1gLCBzZXR0aW5nKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmxldCB1c2VySW5zdGFuY2UgPSBudWxsO1xyXG5cclxuaWYgKCF1c2VySW5zdGFuY2UpIHtcclxuICAgIHVzZXJJbnN0YW5jZSA9IG5ldyBVc2VyKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJJbnN0YW5jZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9qcy1zZXJ2aWNlcy91c2VyLmpzIiwiLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuLy8gaW1wb3J0IHtDT05TVH0gZnJvbSAnLi9jb25zdHMnO1xyXG5cclxuZnVuY3Rpb24gdmlld1V0aWxzKCkge1xyXG4gICAgZnVuY3Rpb24gc2hvd0luZm9NZXNzYWdlKHNlbGVjdG9yLCBtZXNzYWdlMSwgbWVzc2FnZTIpIHtcclxuICAgICAgICAkKHNlbGVjdG9yKS5lbXB0eSgpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoYCR7KG1lc3NhZ2UxKSA/IGA8cD5zdGF0dXM6ICR7bWVzc2FnZTF9PC9wPmAgOiAnJ31gKVxyXG4gICAgICAgICAgICAuYXBwZW5kKGA8cD4ke21lc3NhZ2UyfSA8L3A+YCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZmlsbExpc3QoJGxpc3QsIGRhdGFBcnJheSkge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gZGF0YUFycmF5O1xyXG4gICAgICAgIGNvbnN0IGNMaXN0ID0gJGxpc3Q7XHJcbiAgICAgICAgY0xpc3QuZW1wdHkoKTtcclxuICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpID0gJCgnPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCI+PC9saT4nKVxyXG4gICAgICAgICAgICAgICAgLmFwcGVuZFRvKGNMaXN0KTtcclxuICAgICAgICAgICAgJCgnPGEvPicpLmFkZENsYXNzKCd1aS1hbGwnKVxyXG4gICAgICAgICAgICAgICAgLnRleHQoaXRlbS51c2VybmFtZSlcclxuICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhsaSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNFbWFpbChlbWFpbCkge1xyXG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlICovXHJcbiAgICAgICAgY29uc3QgcmVnZXggPSAvXihbYS16QS1aMC05Xy4rLV0pK1xcQCgoW2EtekEtWjAtOS1dKStcXC4pKyhbYS16QS1aMC05XXsyLDR9KSskLztcclxuICAgICAgICByZXR1cm4gcmVnZXgudGVzdChlbWFpbCk7XHJcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSAqL1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2hvd0luZm9NZXNzYWdlLFxyXG4gICAgICAgIGZpbGxMaXN0LFxyXG4gICAgICAgIGlzRW1haWxcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHZpZXdVdGlscygpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uL2pzLXNlcnZpY2VzL3ZpZXcuanMiLCJcclxuY29uc3QgQ29va2llU3J2ID0ge1xyXG4gICAgZ2V0OiBuYW1lID0+IHtcclxuICAgICAgICBjb25zdCBjID0gZG9jdW1lbnQuY29va2llLm1hdGNoKGAoPzooPzpefC4qOyAqKSR7bmFtZX0gKj0gKihbXjtdKikuKiQpfF4uKiRgKVsxXTtcclxuICAgICAgICBpZiAoYykge1xyXG4gICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGMpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXQ6IChuYW1lLCB2YWx1ZSwgb3B0cyA9IHtwYXRoOiAnLycsIGRheXM6IDM2NX0pID0+IHtcclxuICAgICAgICBpZiAob3B0cy5kYXlzKSB7XHJcbiAgICAgICAgICAgIG9wdHNbJ21heC1hZ2UnXSA9IG9wdHMuZGF5cyAqIDYwICogNjAgKiAyNDtcclxuICAgICAgICAgICAgZGVsZXRlIG9wdHMuZGF5cztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXHJcbiAgICAgICAgb3B0cyA9IE9iamVjdC5lbnRyaWVzKG9wdHMpLnJlZHVjZSgoc3RyLCBbaywgdl0pID0+IGAke3N0cn07ICR7a309JHt2fWAsICcnKTtcclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBgJHtuYW1lfT0ke2VuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkgKyBvcHRzfWA7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlOiAobmFtZSwgb3B0cykgPT4gQ29va2llU3J2LnNldChuYW1lLCAnJywgeydtYXgtYWdlJzogLTEsIHBhdGg6ICcvJywgZGF5czogMCwgLi4ub3B0c30pXHJcbiAgICAvLyBwYXRoICYgZG9tYWluIG11c3QgbWF0Y2ggY29va2llIGJlaW5nIGRlbGV0ZWRcclxufTtcclxuXHJcbi8qXHJcbmNsYXNzIENvb2tpZVN0b3JhZ2Uge1xyXG4gICAgcmVhZChrZXkpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9ICQuY29va2llKGtleSk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyBudWxsIDogdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q29va2llKG5hbWUsIHZhbHVlLCBkYXlzKSB7XHJcbiAgICAgICAgbGV0IGV4cGlyZXMgPSAnJztcclxuICAgICAgICBpZiAoZGF5cykge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKGRheXMgKiAyNCAqIDYwICogNjAgKiAxMDAwKSk7XHJcbiAgICAgICAgICAgIGV4cGlyZXMgPSBgOyBleHBpcmVzPSR7ZGF0ZS50b1VUQ1N0cmluZygpfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGAke25hbWV9ID0keyh2YWx1ZSB8fCAnJykgKyBleHBpcmVzfTsgcGF0aD0vYDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb29raWUobmFtZSkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gYDsgJHtkb2N1bWVudC5jb29raWV9YDtcclxuICAgICAgICBjb25zdCBwYXJ0cyA9IHZhbHVlLnNwbGl0KGA7ICR7bmFtZX09YCk7XHJcbiAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCA9PSAyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJ0cy5wb3AoKS5zcGxpdCgnOycpLnNoaWZ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb29raWVTcnY7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tb24vanMtc2VydmljZXMvY29va2llLmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTAsMjAxMSwyMDEyLDIwMTMsMjAxNCBNb3JnYW4gUm9kZXJpY2sgaHR0cDovL3JvZGVyaWNrLmRrXG4gKiBMaWNlbnNlOiBNSVQgLSBodHRwOi8vbXJnbnJkcmNrLm1pdC1saWNlbnNlLm9yZ1xuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tcm9kZXJpY2svUHViU3ViSlNcbiAqL1xuXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3Rvcnkpe1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBQdWJTdWIgPSB7fTtcbiAgICByb290LlB1YlN1YiA9IFB1YlN1YjtcblxuICAgIHZhciBkZWZpbmUgPSByb290LmRlZmluZTtcblxuICAgIGZhY3RvcnkoUHViU3ViKTtcblxuICAgIC8vIEFNRCBzdXBwb3J0XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCl7XG4gICAgICAgIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIFB1YlN1YjsgfSk7XG5cbiAgICAgICAgLy8gQ29tbW9uSlMgYW5kIE5vZGUuanMgbW9kdWxlIHN1cHBvcnRcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jyl7XG4gICAgICAgIGlmIChtb2R1bGUgIT09IHVuZGVmaW5lZCAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICAgICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gUHViU3ViOyAvLyBOb2RlLmpzIHNwZWNpZmljIGBtb2R1bGUuZXhwb3J0c2BcbiAgICAgICAgfVxuICAgICAgICBleHBvcnRzLlB1YlN1YiA9IFB1YlN1YjsgLy8gQ29tbW9uSlMgbW9kdWxlIDEuMS4xIHNwZWNcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gUHViU3ViOyAvLyBDb21tb25KU1xuICAgIH1cblxufSgoIHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHdpbmRvdyApIHx8IHRoaXMsIGZ1bmN0aW9uIChQdWJTdWIpe1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBtZXNzYWdlcyA9IHt9LFxuICAgICAgICBsYXN0VWlkID0gLTE7XG5cbiAgICBmdW5jdGlvbiBoYXNLZXlzKG9iail7XG4gICAgICAgIHZhciBrZXk7XG5cbiAgICAgICAgZm9yIChrZXkgaW4gb2JqKXtcbiAgICAgICAgICAgIGlmICggb2JqLmhhc093blByb3BlcnR5KGtleSkgKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgdGhyb3dzIHRoZSBwYXNzZWQgZXhjZXB0aW9uLCBmb3IgdXNlIGFzIGFyZ3VtZW50IGZvciBzZXRUaW1lb3V0XG4gICAgICogQGFsaWFzIHRocm93RXhjZXB0aW9uXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHsgT2JqZWN0IH0gZXggQW4gRXJyb3Igb2JqZWN0XG4gICAgICovXG4gICAgZnVuY3Rpb24gdGhyb3dFeGNlcHRpb24oIGV4ICl7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiByZVRocm93RXhjZXB0aW9uKCl7XG4gICAgICAgICAgICB0aHJvdyBleDtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWxsU3Vic2NyaWJlcldpdGhEZWxheWVkRXhjZXB0aW9ucyggc3Vic2NyaWJlciwgbWVzc2FnZSwgZGF0YSApe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc3Vic2NyaWJlciggbWVzc2FnZSwgZGF0YSApO1xuICAgICAgICB9IGNhdGNoKCBleCApe1xuICAgICAgICAgICAgc2V0VGltZW91dCggdGhyb3dFeGNlcHRpb24oIGV4ICksIDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsbFN1YnNjcmliZXJXaXRoSW1tZWRpYXRlRXhjZXB0aW9ucyggc3Vic2NyaWJlciwgbWVzc2FnZSwgZGF0YSApe1xuICAgICAgICBzdWJzY3JpYmVyKCBtZXNzYWdlLCBkYXRhICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsaXZlck1lc3NhZ2UoIG9yaWdpbmFsTWVzc2FnZSwgbWF0Y2hlZE1lc3NhZ2UsIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKXtcbiAgICAgICAgdmFyIHN1YnNjcmliZXJzID0gbWVzc2FnZXNbbWF0Y2hlZE1lc3NhZ2VdLFxuICAgICAgICAgICAgY2FsbFN1YnNjcmliZXIgPSBpbW1lZGlhdGVFeGNlcHRpb25zID8gY2FsbFN1YnNjcmliZXJXaXRoSW1tZWRpYXRlRXhjZXB0aW9ucyA6IGNhbGxTdWJzY3JpYmVyV2l0aERlbGF5ZWRFeGNlcHRpb25zLFxuICAgICAgICAgICAgcztcblxuICAgICAgICBpZiAoICFtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eSggbWF0Y2hlZE1lc3NhZ2UgKSApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAocyBpbiBzdWJzY3JpYmVycyl7XG4gICAgICAgICAgICBpZiAoIHN1YnNjcmliZXJzLmhhc093blByb3BlcnR5KHMpKXtcbiAgICAgICAgICAgICAgICBjYWxsU3Vic2NyaWJlciggc3Vic2NyaWJlcnNbc10sIG9yaWdpbmFsTWVzc2FnZSwgZGF0YSApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRGVsaXZlcnlGdW5jdGlvbiggbWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApe1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gZGVsaXZlck5hbWVzcGFjZWQoKXtcbiAgICAgICAgICAgIHZhciB0b3BpYyA9IFN0cmluZyggbWVzc2FnZSApLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoICcuJyApO1xuXG4gICAgICAgICAgICAvLyBkZWxpdmVyIHRoZSBtZXNzYWdlIGFzIGl0IGlzIG5vd1xuICAgICAgICAgICAgZGVsaXZlck1lc3NhZ2UobWVzc2FnZSwgbWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyk7XG5cbiAgICAgICAgICAgIC8vIHRyaW0gdGhlIGhpZXJhcmNoeSBhbmQgZGVsaXZlciBtZXNzYWdlIHRvIGVhY2ggbGV2ZWxcbiAgICAgICAgICAgIHdoaWxlKCBwb3NpdGlvbiAhPT0gLTEgKXtcbiAgICAgICAgICAgICAgICB0b3BpYyA9IHRvcGljLnN1YnN0ciggMCwgcG9zaXRpb24gKTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHRvcGljLmxhc3RJbmRleE9mKCcuJyk7XG4gICAgICAgICAgICAgICAgZGVsaXZlck1lc3NhZ2UoIG1lc3NhZ2UsIHRvcGljLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWVzc2FnZUhhc1N1YnNjcmliZXJzKCBtZXNzYWdlICl7XG4gICAgICAgIHZhciB0b3BpYyA9IFN0cmluZyggbWVzc2FnZSApLFxuICAgICAgICAgICAgZm91bmQgPSBCb29sZWFuKG1lc3NhZ2VzLmhhc093blByb3BlcnR5KCB0b3BpYyApICYmIGhhc0tleXMobWVzc2FnZXNbdG9waWNdKSksXG4gICAgICAgICAgICBwb3NpdGlvbiA9IHRvcGljLmxhc3RJbmRleE9mKCAnLicgKTtcblxuICAgICAgICB3aGlsZSAoICFmb3VuZCAmJiBwb3NpdGlvbiAhPT0gLTEgKXtcbiAgICAgICAgICAgIHRvcGljID0gdG9waWMuc3Vic3RyKCAwLCBwb3NpdGlvbiApO1xuICAgICAgICAgICAgcG9zaXRpb24gPSB0b3BpYy5sYXN0SW5kZXhPZiggJy4nICk7XG4gICAgICAgICAgICBmb3VuZCA9IEJvb2xlYW4obWVzc2FnZXMuaGFzT3duUHJvcGVydHkoIHRvcGljICkgJiYgaGFzS2V5cyhtZXNzYWdlc1t0b3BpY10pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb3VuZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwdWJsaXNoKCBtZXNzYWdlLCBkYXRhLCBzeW5jLCBpbW1lZGlhdGVFeGNlcHRpb25zICl7XG4gICAgICAgIG1lc3NhZ2UgPSAodHlwZW9mIG1lc3NhZ2UgPT09ICdzeW1ib2wnKSA/IG1lc3NhZ2UudG9TdHJpbmcoKSA6IG1lc3NhZ2U7XG5cbiAgICAgICAgdmFyIGRlbGl2ZXIgPSBjcmVhdGVEZWxpdmVyeUZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICksXG4gICAgICAgICAgICBoYXNTdWJzY3JpYmVycyA9IG1lc3NhZ2VIYXNTdWJzY3JpYmVycyggbWVzc2FnZSApO1xuXG4gICAgICAgIGlmICggIWhhc1N1YnNjcmliZXJzICl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHN5bmMgPT09IHRydWUgKXtcbiAgICAgICAgICAgIGRlbGl2ZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoIGRlbGl2ZXIsIDAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQdWJsaXNoZXMgdGhlIG1lc3NhZ2UsIHBhc3NpbmcgdGhlIGRhdGEgdG8gaXQncyBzdWJzY3JpYmVyc1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBhbGlhcyBwdWJsaXNoXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBwdWJsaXNoXG4gICAgICogQHBhcmFtIHt9IGRhdGEgVGhlIGRhdGEgdG8gcGFzcyB0byBzdWJzY3JpYmVyc1xuICAgICAqIEByZXR1cm4geyBCb29sZWFuIH1cbiAgICAgKi9cbiAgICBQdWJTdWIucHVibGlzaCA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHJldHVybiBwdWJsaXNoKCBtZXNzYWdlLCBkYXRhLCBmYWxzZSwgUHViU3ViLmltbWVkaWF0ZUV4Y2VwdGlvbnMgKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUHVibGlzaGVzIHRoZSB0aGUgbWVzc2FnZSBzeW5jaHJvbm91c2x5LCBwYXNzaW5nIHRoZSBkYXRhIHRvIGl0J3Mgc3Vic2NyaWJlcnNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgcHVibGlzaFN5bmNcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHB1Ymxpc2hcbiAgICAgKiBAcGFyYW0ge30gZGF0YSBUaGUgZGF0YSB0byBwYXNzIHRvIHN1YnNjcmliZXJzXG4gICAgICogQHJldHVybiB7IEJvb2xlYW4gfVxuICAgICAqL1xuICAgIFB1YlN1Yi5wdWJsaXNoU3luYyA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHJldHVybiBwdWJsaXNoKCBtZXNzYWdlLCBkYXRhLCB0cnVlLCBQdWJTdWIuaW1tZWRpYXRlRXhjZXB0aW9ucyApO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmVzIHRoZSBwYXNzZWQgZnVuY3Rpb24gdG8gdGhlIHBhc3NlZCBtZXNzYWdlLiBFdmVyeSByZXR1cm5lZCB0b2tlbiBpcyB1bmlxdWUgYW5kIHNob3VsZCBiZSBzdG9yZWQgaWYgeW91IG5lZWQgdG8gdW5zdWJzY3JpYmVcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgc3Vic2NyaWJlXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBzdWJzY3JpYmUgdG9cbiAgICAgKiBAcGFyYW0geyBGdW5jdGlvbiB9IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBhIG5ldyBtZXNzYWdlIGlzIHB1Ymxpc2hlZFxuICAgICAqIEByZXR1cm4geyBTdHJpbmcgfVxuICAgICAqL1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUgPSBmdW5jdGlvbiggbWVzc2FnZSwgZnVuYyApe1xuICAgICAgICBpZiAoIHR5cGVvZiBmdW5jICE9PSAnZnVuY3Rpb24nKXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lc3NhZ2UgPSAodHlwZW9mIG1lc3NhZ2UgPT09ICdzeW1ib2wnKSA/IG1lc3NhZ2UudG9TdHJpbmcoKSA6IG1lc3NhZ2U7XG5cbiAgICAgICAgLy8gbWVzc2FnZSBpcyBub3QgcmVnaXN0ZXJlZCB5ZXRcbiAgICAgICAgaWYgKCAhbWVzc2FnZXMuaGFzT3duUHJvcGVydHkoIG1lc3NhZ2UgKSApe1xuICAgICAgICAgICAgbWVzc2FnZXNbbWVzc2FnZV0gPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZvcmNpbmcgdG9rZW4gYXMgU3RyaW5nLCB0byBhbGxvdyBmb3IgZnV0dXJlIGV4cGFuc2lvbnMgd2l0aG91dCBicmVha2luZyB1c2FnZVxuICAgICAgICAvLyBhbmQgYWxsb3cgZm9yIGVhc3kgdXNlIGFzIGtleSBuYW1lcyBmb3IgdGhlICdtZXNzYWdlcycgb2JqZWN0XG4gICAgICAgIHZhciB0b2tlbiA9ICd1aWRfJyArIFN0cmluZygrK2xhc3RVaWQpO1xuICAgICAgICBtZXNzYWdlc1ttZXNzYWdlXVt0b2tlbl0gPSBmdW5jO1xuICAgICAgICBcbiAgICAgICAgLy8gcmV0dXJuIHRva2VuIGZvciB1bnN1YnNjcmliaW5nXG4gICAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU3Vic2NyaWJlcyB0aGUgcGFzc2VkIGZ1bmN0aW9uIHRvIHRoZSBwYXNzZWQgbWVzc2FnZSBvbmNlXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQGFsaWFzIHN1YnNjcmliZU9uY2VcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHN1YnNjcmliZSB0b1xuICAgICAqIEBwYXJhbSB7IEZ1bmN0aW9uIH0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIGEgbmV3IG1lc3NhZ2UgaXMgcHVibGlzaGVkXG4gICAgICogQHJldHVybiB7IFB1YlN1YiB9XG4gICAgICovXG4gICAgUHViU3ViLnN1YnNjcmliZU9uY2UgPSBmdW5jdGlvbiggbWVzc2FnZSwgZnVuYyApe1xuICAgICAgICB2YXIgdG9rZW4gPSBQdWJTdWIuc3Vic2NyaWJlKCBtZXNzYWdlLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgLy8gYmVmb3JlIGZ1bmMgYXBwbHksIHVuc3Vic2NyaWJlIG1lc3NhZ2VcbiAgICAgICAgICAgIFB1YlN1Yi51bnN1YnNjcmliZSggdG9rZW4gKTtcbiAgICAgICAgICAgIGZ1bmMuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFB1YlN1YjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGFsbCBzdWJzY3JpcHRpb25zXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBhbGlhcyBjbGVhckFsbFN1YnNjcmlwdGlvbnNcbiAgICAgKi9cbiAgICBQdWJTdWIuY2xlYXJBbGxTdWJzY3JpcHRpb25zID0gZnVuY3Rpb24gY2xlYXJBbGxTdWJzY3JpcHRpb25zKCl7XG4gICAgICAgIG1lc3NhZ2VzID0ge307XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENsZWFyIHN1YnNjcmlwdGlvbnMgYnkgdGhlIHRvcGljXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBhbGlhcyBjbGVhckFsbFN1YnNjcmlwdGlvbnNcbiAgICAgKi9cbiAgICBQdWJTdWIuY2xlYXJTdWJzY3JpcHRpb25zID0gZnVuY3Rpb24gY2xlYXJTdWJzY3JpcHRpb25zKHRvcGljKXtcbiAgICAgICAgdmFyIG07XG4gICAgICAgIGZvciAobSBpbiBtZXNzYWdlcyl7XG4gICAgICAgICAgICBpZiAobWVzc2FnZXMuaGFzT3duUHJvcGVydHkobSkgJiYgbS5pbmRleE9mKHRvcGljKSA9PT0gMCl7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG1lc3NhZ2VzW21dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgc3Vic2NyaXB0aW9uc1xuICAgICAqXG4gICAgICogLSBXaGVuIHBhc3NlZCBhIHRva2VuLCByZW1vdmVzIGEgc3BlY2lmaWMgc3Vic2NyaXB0aW9uLlxuICAgICAqXG5cdCAqIC0gV2hlbiBwYXNzZWQgYSBmdW5jdGlvbiwgcmVtb3ZlcyBhbGwgc3Vic2NyaXB0aW9ucyBmb3IgdGhhdCBmdW5jdGlvblxuICAgICAqXG5cdCAqIC0gV2hlbiBwYXNzZWQgYSB0b3BpYywgcmVtb3ZlcyBhbGwgc3Vic2NyaXB0aW9ucyBmb3IgdGhhdCB0b3BpYyAoaGllcmFyY2h5KVxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWxpYXMgc3Vic2NyaWJlT25jZVxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB8IEZ1bmN0aW9uIH0gdmFsdWUgQSB0b2tlbiwgZnVuY3Rpb24gb3IgdG9waWMgdG8gdW5zdWJzY3JpYmUgZnJvbVxuICAgICAqIEBleGFtcGxlIC8vIFVuc3Vic2NyaWJpbmcgd2l0aCBhIHRva2VuXG4gICAgICogdmFyIHRva2VuID0gUHViU3ViLnN1YnNjcmliZSgnbXl0b3BpYycsIG15RnVuYyk7XG4gICAgICogUHViU3ViLnVuc3Vic2NyaWJlKHRva2VuKTtcbiAgICAgKiBAZXhhbXBsZSAvLyBVbnN1YnNjcmliaW5nIHdpdGggYSBmdW5jdGlvblxuICAgICAqIFB1YlN1Yi51bnN1YnNjcmliZShteUZ1bmMpO1xuICAgICAqIEBleGFtcGxlIC8vIFVuc3Vic2NyaWJpbmcgZnJvbSBhIHRvcGljXG4gICAgICogUHViU3ViLnVuc3Vic2NyaWJlKCdteXRvcGljJyk7XG4gICAgICovXG4gICAgUHViU3ViLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICB2YXIgZGVzY2VuZGFudFRvcGljRXhpc3RzID0gZnVuY3Rpb24odG9waWMpIHtcbiAgICAgICAgICAgICAgICB2YXIgbTtcbiAgICAgICAgICAgICAgICBmb3IgKCBtIGluIG1lc3NhZ2VzICl7XG4gICAgICAgICAgICAgICAgICAgIGlmICggbWVzc2FnZXMuaGFzT3duUHJvcGVydHkobSkgJiYgbS5pbmRleE9mKHRvcGljKSA9PT0gMCApe1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYSBkZXNjZW5kYW50IG9mIHRoZSB0b3BpYyBleGlzdHM6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc1RvcGljICAgID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAoIG1lc3NhZ2VzLmhhc093blByb3BlcnR5KHZhbHVlKSB8fCBkZXNjZW5kYW50VG9waWNFeGlzdHModmFsdWUpICksXG4gICAgICAgICAgICBpc1Rva2VuICAgID0gIWlzVG9waWMgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyxcbiAgICAgICAgICAgIGlzRnVuY3Rpb24gPSB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicsXG4gICAgICAgICAgICByZXN1bHQgPSBmYWxzZSxcbiAgICAgICAgICAgIG0sIG1lc3NhZ2UsIHQ7XG5cbiAgICAgICAgaWYgKGlzVG9waWMpe1xuICAgICAgICAgICAgUHViU3ViLmNsZWFyU3Vic2NyaXB0aW9ucyh2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKCBtIGluIG1lc3NhZ2VzICl7XG4gICAgICAgICAgICBpZiAoIG1lc3NhZ2VzLmhhc093blByb3BlcnR5KCBtICkgKXtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZXNbbV07XG5cbiAgICAgICAgICAgICAgICBpZiAoIGlzVG9rZW4gJiYgbWVzc2FnZVt2YWx1ZV0gKXtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG1lc3NhZ2VbdmFsdWVdO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdG9rZW5zIGFyZSB1bmlxdWUsIHNvIHdlIGNhbiBqdXN0IHN0b3AgaGVyZVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNGdW5jdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKCB0IGluIG1lc3NhZ2UgKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmhhc093blByb3BlcnR5KHQpICYmIG1lc3NhZ2VbdF0gPT09IHZhbHVlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgbWVzc2FnZVt0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xufSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3B1YnN1Yi1qcy9zcmMvcHVic3ViLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAnLi9iYXNlLnNjc3MnO1xyXG4vLyBpbXBvcnQgJ2Jvb3RzdHJhcCc7XHJcblxyXG5pbXBvcnQgUmVnaXN0ZXJGb3JtIGZyb20gJy4vYmxvY2tzL3JlZ2lzdGVyLWZvcm0vcmVnaXN0ZXItZm9ybSc7XHJcbmltcG9ydCB7TG9naW5Gb3JtfSBmcm9tICcuL2Jsb2Nrcy9sb2dpbi1mb3JtL2xvZ2luLWZvcm0nO1xyXG5pbXBvcnQge0xvZ2luUGFnZX0gZnJvbSAnLi9wYWdlcy9fYXV0aC9sb2dpbi1wYWdlJztcclxuaW1wb3J0IHtjb25maXJtYXRpb25XaXRoUmVkaXJlY3R9IGZyb20gJy4vYmxvY2tzL2NvbmZpcm0tcmVnL2NvbmZpcm0tcmVnJztcclxuaW1wb3J0IHtJbnN0YWdyYW19IGZyb20gJy4vcGFnZXMvX2luc3RhZ3JhbS9pbnN0YWdyYW0nO1xyXG5pbXBvcnQgKiBhcyBoZWFkZXIgZnJvbSAnLi9ibG9ja3MvaGVhZGVyL2hlYWRlcic7XHJcbmltcG9ydCAqIGFzIGJ1cmdlck1lbnUgZnJvbSAnLi9ibG9ja3MvaGVhZGVyL2J1cmdlci1tZW51L2J1cmdlci1tZW51JztcclxuaW1wb3J0IHtDT05TVH0gZnJvbSAnLi9jb21tb24vanMtc2VydmljZXMvY29uc3RzJztcclxuaW1wb3J0ICogYXMgaW5zdGFncmFtQWNjb3VudHMgZnJvbSAnLi9ibG9ja3MvaW5zdGFncmFtLWFjY291bnRzLWxpc3QvaW5zdGFncmFtLWFjY291bnRzLWxpc3QnO1xyXG5pbXBvcnQgKiBhcyBtZXNzYWdlcyBmcm9tICcuL2Jsb2Nrcy9tZXNzYWdlcy9tZXNzYWdlcyc7XHJcblxyXG5jb25zdCBzZWxlY3RvckNzc0xvZ2luRm9ybSA9IHtcclxuICAgIF9sb2dpbkJveDogQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyTG9naW5Cb3gsXHJcbiAgICBfZm9ybUlkOiAnI2pzX2xvZ2luLWZvcm0nLFxyXG4gICAgX2J1dHRvblN1Ym1pdElkOiAnI2pzX2xvZ2luX2J0bicsXHJcbiAgICBfc2hvd0xvZ2luQm94QnRuSWQ6IENPTlNULnVpU2VsZWN0b3JzLmhlYWRlck5hdkxvZ2luQnRuXHJcbn07XHJcblxyXG5jb25zdCBzZWxlY3RvckNzc0xvZ2luRm9ybUluc3RhZ3JhbSA9IHtcclxuICAgIF9sb2dpbkJveDogJ21haW4gLmxvZ2luLWJveCcsXHJcbiAgICBfZm9ybUlkOiAnI2pzX2luc3RhZ3JhbS1hZGQtYWNjb3VudCcsXHJcbiAgICBfYnV0dG9uU3VibWl0SWQ6ICcjanNfaW5zdGFncmFtLWFkZC1hY2NvdW50LS1idG4nLFxyXG4gICAgX3Nob3dMb2dpbkJveEJ0bklkOiAnI2pzX3Nob3ctbG9naW4tYm94JyxcclxuICAgIGlzTG9naW5JbnN0YWdyYW06IHRydWVcclxufTtcclxuXHJcbmNvbnN0IGluaXQgPSAoKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnaW5pdCBqcyBoZXJlJywgQ09OU1QudXNlcik7XHJcbiAgICAobmV3IFJlZ2lzdGVyRm9ybSgpKS5pbml0KCk7XHJcbiAgICBMb2dpbkZvcm0oc2VsZWN0b3JDc3NMb2dpbkZvcm0pLmluaXQoKTtcclxuICAgIExvZ2luRm9ybShzZWxlY3RvckNzc0xvZ2luRm9ybUluc3RhZ3JhbSkuaW5pdCgpOyAvLyBpbml0IGluc3RhZ3JhbSBsb2dpbiBmb3JtKiEvXHJcbiAgICBMb2dpblBhZ2Uoe1xyXG4gICAgICAgIF9sb2dpbkJveDogJy5hdXRoLmxvZ2luIC5jYXJkLXNpZ25pbicsXHJcbiAgICAgICAgX2Zvcm1JZDogJy5mb3JtLXNpZ25pbicsXHJcbiAgICAgICAgX2J1dHRvblN1Ym1pdElkOiAnLmZvcm0tc2lnbmluIFt0eXBlPVwic3VibWl0XCJdJ1xyXG4gICAgfSkuaW5pdCgpO1xyXG4gICAgSW5zdGFncmFtKCkuaW5pdCgpO1xyXG4gICAgY29uZmlybWF0aW9uV2l0aFJlZGlyZWN0KCkuaW5pdCgpO1xyXG4gICAgaGVhZGVyLmluaXRIZWFkZXIoKTtcclxuICAgIGJ1cmdlck1lbnUuaW5pdCgpO1xyXG4gICAgaW5zdGFncmFtQWNjb3VudHMuaW5pdCgpO1xyXG4gICAgbWVzc2FnZXMuaW5pdCgpO1xyXG59O1xyXG5cclxuKCgpID0+IGluaXQoKSkoKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jvb3RzdHJhcC5qcyIsIi8qIGVzbGludC1kaXNhYmxlIHNvcnQtdmFycyAqL1xyXG4vLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdXNlcic7XHJcbmltcG9ydCB7Q09OU1R9IGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb25zdHMnO1xyXG5pbXBvcnQgY29va2llU3RvcmFnZSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29va2llJztcclxuXHJcbmNvbnN0IHBhcnNlUXVlcnlTdHJpbmcgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICBjb25zdCBzdHIgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xyXG4gICAgY29uc3Qgb2JqVVJMID0ge307XHJcblxyXG4gICAgc3RyLnJlcGxhY2UoXHJcbiAgICAgIG5ldyBSZWdFeHAoJyhbXj89Jl0rKSg9KFteJl0qKSk/JywgJ2cnKSxcclxuICAgICAgICBmdW5jdGlvbigkMCwgJDEsICQyKSB7XHJcbiAgICAgICAgICAgIG9ialVSTFskMV0gPSAkMjtcclxuICAgICAgICB9XHJcbiAgKTtcclxuICAgIHJldHVybiBvYmpVUkw7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29uZmlybWF0aW9uV2l0aFJlZGlyZWN0KCkge1xyXG4gICAgY29uc3QgdXNlciA9IFVzZXI7XHJcbiAgICBjb25zdCBwYXJhbXMgPSBwYXJzZVF1ZXJ5U3RyaW5nKCk7XHJcbiAgICAvLyBFeGFtcGxlIGhvdyB0byB1c2UgaXQ6XHJcblxyXG4gICAgY29uc3Qgc2VuZENvbmZpcm0gPSBmdW5jdGlvbiAodG9rZW4pIHtcclxuICAgICAgICB1c2VyLmNvbmZpcm0odG9rZW4pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyAmJiByZXN1bHQuc3RhdHVzLnN0YXRlID09PSAnb2snKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gc2F2ZSB0aGUgaXRlbVxyXG4gICAgICAgICAgICAgICAgY29va2llU3RvcmFnZS5zZXQoQ09OU1QuY29va2llU3RvcmFnZS5lbWFpbENvbmZpcm1lZCwgJ2NvbmZpcm1lZCcpO1xyXG4gICAgICAgICAgICAgICAgY29va2llU3RvcmFnZS5zZXQoQ09OU1QuY29va2llU3RvcmFnZS50b2tlbiwgcmVzdWx0LmRhdGEudG9rZW4pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbiA9IGNvbmZpcm0tcmVnaXN0cmF0aW9uLmh0bWw/dG9rZW49J2Zyb20gc2VydmVyJztcclxuXHJcbiAgICAgICAgICAgICAgICAvLyByZXRyaWV2ZSB0aGUgb2JqZWN0IGluIGEgc3RyaW5nIGZvcm1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1c3RvbWVyc0RhdGFTdHJpbmcgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdjdXN0b21lcnNEYXRhJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjdXN0b21lcnNEYXRhU3RyaW5nKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXF1ZXN0IHN1Y2NlZWRlZCB3aXRoIEpTT04gcmVzcG9uc2UnLCByZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgJCgnLmNvbmZpcm0tcmVnaXN0cmF0aW9uJykuYXBwZW5kKGA8cD5jb25maXJtYXRpb24gc3RhdHVzOiAke3Jlc3VsdC5zdGF0dXMuc3RhdGV9PC9wPmApO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gJy4vcHJvZmlsZS5odG1sJztcclxuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlZGlyZWN0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRvdC1ub3RhdGlvblxyXG4gICAgICAgIGNvbnN0IHRva2VuID0gcGFyYW1zWyd0b2tlbiddO1xyXG5cclxuICAgICAgICBpZiAoIWxvY2F0aW9uLnBhdGhuYW1lLmluZGV4T2YoJ2NvbmZpcm0tcmVnaXN0cmF0aW9uJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NlbmQgcmVxIHRvICcsIHRva2VuKTtcclxuICAgICAgICAgICAgc2VuZENvbmZpcm0odG9rZW4pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgICAgICByZWRpcmVjdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5pdFxyXG4gICAgfTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL2NvbmZpcm0tcmVnL2NvbmZpcm0tcmVnLmpzIiwiLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbi8vIGNvbnN0IGhhbWJ1cmdlckJ1dHRvbkNscyA9ICcjYXNpZGVfbW9iaWxlX19idXR0b24nO1xyXG4vLyBjb25zdCBoYW1idXJnZXJNZW51Q2xzID0gJy5hc2lkZS1idXJnZXItbWVudSc7XHJcbi8vIGNvbnN0IGhhbWJ1cmdlck1lbnVPcGVuZWRDbGFzcyA9ICdidXJnZXItbWVudS0tY2xvc2VkJztcclxuLy8gY29uc3QgaGFtYnVyZ2VyQnV0dG9uQ2xvc2VDbGFzcyA9ICdidXJnZXItbWVudV9fYnV0dG9uLS1jbG9zZSc7XHJcbmNvbnN0IHNlbGVjdG9yc0VsID0ge1xyXG4gICAgbGVmdE1lbnU6IHtcclxuICAgICAgICBoYW1idXJnZXJCdXR0b25DbHM6ICcjYXNpZGVfbW9iaWxlX19idXR0b24nLFxyXG4gICAgICAgIGhhbWJ1cmdlck1lbnVDbHM6ICcuYXNpZGUtYnVyZ2VyLW1lbnUnLFxyXG4gICAgICAgIGhhbWJ1cmdlck1lbnVPcGVuZWRDbGFzczogJ2J1cmdlci1tZW51LS1jbG9zZWQnLFxyXG4gICAgICAgIGhhbWJ1cmdlckJ1dHRvbkNsb3NlQ2xhc3M6ICdidXJnZXItbWVudV9fYnV0dG9uLS1jbG9zZSdcclxuICAgIH0sXHJcbiAgICByaWdodE1lbnU6IHtcclxuICAgICAgICBoYW1idXJnZXJCdXR0b25DbHM6ICcjaGVhZGVyX21vYmlsZV90b2dnbGVyJyxcclxuICAgICAgICBoYW1idXJnZXJNZW51Q2xzOiAnLnItc2lkZS1idXJnZXItbWVudScsXHJcbiAgICAgICAgaGFtYnVyZ2VyTWVudU9wZW5lZENsYXNzOiAnci1zaWRlLWJ1cmdlci1tZW51LS1vcGVuJyxcclxuICAgICAgICBoYW1idXJnZXJCdXR0b25DbG9zZUNsYXNzOiAnYnVyZ2VyLW1lbnUtcmlnaHRfX2J1dHRvbi0tY2xvc2UnXHJcbiAgICB9LFxyXG4gICAgc3ViSGVhZGVyOiB7XHJcbiAgICAgICAgaGFtYnVyZ2VyQnV0dG9uQ2xzOiAnI2hlYWRlcl9tb2JpbGVfdG9wYmFyX3RvZ2dsZXInLFxyXG4gICAgICAgIGhhbWJ1cmdlck1lbnVDbHM6ICcuc3ViLWhlYWRlcicsXHJcbiAgICAgICAgaGFtYnVyZ2VyTWVudU9wZW5lZENsYXNzOiAnc3ViLWhlYWRlci0tb3BlbicsXHJcbiAgICAgICAgaGFtYnVyZ2VyQnV0dG9uQ2xvc2VDbGFzczogJ3N1Yi1oZWFkZXItYnV0dG9uLS1jbG9zZSdcclxuICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBUb2dnbGUgaGFtYnVyZ2VyIG1lbnUgcG9wb3ZlclxyXG4gKi9cclxuZnVuY3Rpb24gdG9nZ2xlSGFtYnVyZ2VyTWVudShtZW51TmFtZSkge1xyXG4gICAgY29uc3Qge2hhbWJ1cmdlck1lbnVDbHMsIGhhbWJ1cmdlckJ1dHRvbkNscywgaGFtYnVyZ2VyQnV0dG9uQ2xvc2VDbGFzcywgaGFtYnVyZ2VyTWVudU9wZW5lZENsYXNzfSA9IHNlbGVjdG9yc0VsW21lbnVOYW1lXTtcclxuICAgICQoaGFtYnVyZ2VyQnV0dG9uQ2xzKS50b2dnbGVDbGFzcyhoYW1idXJnZXJCdXR0b25DbG9zZUNsYXNzKTtcclxuICAgICQoaGFtYnVyZ2VyTWVudUNscykudG9nZ2xlQ2xhc3MoaGFtYnVyZ2VyTWVudU9wZW5lZENsYXNzKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEluaXQgaGFtYnVyZ2VyIG1lbnVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgY29uc3QgbGVmdE1lbnUgPSAnbGVmdE1lbnUnO1xyXG4gICAgY29uc3QgcmlnaHRNZW51ID0gJ3JpZ2h0TWVudSc7XHJcbiAgICBjb25zdCBzdWJIZWFkZXIgPSAnc3ViSGVhZGVyJztcclxuXHJcbiAgICAkKHNlbGVjdG9yc0VsW2xlZnRNZW51XS5oYW1idXJnZXJCdXR0b25DbHMpLm9uKCdjbGljaycsIHRvZ2dsZUhhbWJ1cmdlck1lbnUuYmluZCh0aGlzLCBsZWZ0TWVudSkpO1xyXG4gICAgJChzZWxlY3RvcnNFbFtyaWdodE1lbnVdLmhhbWJ1cmdlckJ1dHRvbkNscykub24oJ2NsaWNrJywgdG9nZ2xlSGFtYnVyZ2VyTWVudS5iaW5kKHRoaXMsIHJpZ2h0TWVudSkpO1xyXG4gICAgJChzZWxlY3RvcnNFbFtzdWJIZWFkZXJdLmhhbWJ1cmdlckJ1dHRvbkNscykub24oJ2NsaWNrJywgdG9nZ2xlSGFtYnVyZ2VyTWVudS5iaW5kKHRoaXMsIHN1YkhlYWRlcikpO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3MvaGVhZGVyL2J1cmdlci1tZW51L2J1cmdlci1tZW51LmpzIiwiLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3VzZXInO1xyXG5pbXBvcnQgUHViU3ViIGZyb20gJ3B1YnN1Yi1qcyc7IC8vIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3B1YnN1Yi1qc1xyXG5pbXBvcnQge0NPTlNUfSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29uc3RzJztcclxuXHJcbmNvbnN0IHNlbGVjdG9yTG9naW5TdGF0ZSA9ICcuanNfbWVzc2FnZV9sb2dnZWQtLXRleHQnO1xyXG5jb25zdCBzZWxlY3RvckVtYWlsQ29uZmlybVN0YXRlID0gJy5qc19lbWFpbC1jb25maXJtLS10ZXh0JztcclxuY29uc3QgY2xvc2VDbGFzcyA9ICdkLW5vbmUnO1xyXG5jb25zdCBvcGVuZWRDbGFzcyA9ICdkLWJsb2NrJztcclxuXHJcbmZ1bmN0aW9uIGVtYWlsTm90Q29uZmlybWVkKCkge1xyXG4gICAgY29uc3QgJGVtYWlsbk1zZyA9ICQoc2VsZWN0b3JFbWFpbENvbmZpcm1TdGF0ZSk7XHJcbiAgICAkZW1haWxuTXNnLnRleHQoJyoqZW1haWxOb3RDb25maXJtZWQqKiBFbWFpbCDQvdC1INC/0L7QtNGC0LLQtdGA0LbQtNC10L0uJykuY3NzKCdjb2xvcicsICdsaWdodGNvcmFsJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uTG9naW5TdWJzY3JpYmUobXNnLCBkYXRhKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhtc2csIGRhdGEpO1xyXG4gICAgJChDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJOYXZMb2dpbkJ0bikuYWRkQ2xhc3MoY2xvc2VDbGFzcykucmVtb3ZlQ2xhc3Mob3BlbmVkQ2xhc3MpO1xyXG4gICAgJChDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJSZWdCdG4pLmFkZENsYXNzKGNsb3NlQ2xhc3MpLnJlbW92ZUNsYXNzKG9wZW5lZENsYXNzKTtcclxuICAgICQoQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyTG9naW5Cb3gpLmFkZENsYXNzKGNsb3NlQ2xhc3MpLnJlbW92ZUNsYXNzKG9wZW5lZENsYXNzKTtcclxuXHJcbiAgICAkKCcubmF2LWxpbmsuanNfbG9nT3V0JykuYWRkQ2xhc3Mob3BlbmVkQ2xhc3MpLnJlbW92ZUNsYXNzKGNsb3NlQ2xhc3MpOyAvLyBzaG93XHJcbiAgICBjb25zdCAkbG9naW5Nc2cgPSAkKHNlbGVjdG9yTG9naW5TdGF0ZSk7XHJcbiAgICAkbG9naW5Nc2cudGV4dCgnKipvbkxvZ2luU3Vic2NyaWJlKiog0LLRiyDQt9Cw0LvQvtCz0LjQvdC40LvQuNGB0Ywg0LIgTHV4Z3JhbSDRg9GB0L/QtdGI0L3QvicpLmNzcygnY29sb3InLCAnbGlnaHRibHVlJyk7XHJcbiAgICBjb25zdCBpc0VtYWlsQ29uZmlybWVkID0gVXNlci5pc0VtYWlsQ29uZmlybWVkKCk7XHJcbiAgICBpZiAoIWlzRW1haWxDb25maXJtZWQpIHtcclxuICAgICAgICBlbWFpbE5vdENvbmZpcm1lZCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93TG9nb3V0KCkge1xyXG4gICAgLy8gY2hlY2sgaXMgbG9nZ2VkXHJcbiAgICBjb25zdCBpc0xvZ2dlZCA9IFVzZXIuaXNMb2dnZWRJbigpO1xyXG4gICAgY29uc3QgaXNFbWFpbENvbmZpcm1lZCA9IFVzZXIuaXNFbWFpbENvbmZpcm1lZCgpO1xyXG4gICAgaWYgKCFpc0VtYWlsQ29uZmlybWVkKSB7XHJcbiAgICAgICAgZW1haWxOb3RDb25maXJtZWQoKTtcclxuICAgIH1cclxuICAgIGlmIChpc0xvZ2dlZCkge1xyXG4gICAgICAgICQoJy5uYXYtbGluay5qc19sb2dPdXQnKS5wYXJlbnQoKS5zaG93KCk7XHJcbiAgICAgICAgJCgnLmpzX2VtYWlsLWNvbmZpcm0tLXRleHQnKS50ZXh0KCfQstGLINC30LDQu9C+0LPQuNC90LjQu9C40YHRjCDRg9GB0L/QtdGI0L3QvicpO1xyXG4gICAgICAgIGNvbnN0IG9sZFVSTCA9IGRvY3VtZW50LnJlZmVycmVyO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG9sZFVSTCk7XHJcbiAgICAgICAgaWYgKG9sZFVSTC5pbmNsdWRlcygnY29uZmlybS1yZWdpc3RyYXRpb24nKSkge1xyXG4gICAgICAgICAgICAkKCcuanNfbWVzc2FnZV9sb2dnZWQtLXRleHQnKS50ZXh0KCfQstGLINC/0L7QtNGC0LLQtdGA0LTQuNC70Lgg0YDQtdCz0LjRgdGC0YDQsNGG0LjRjicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvbkxvZ2luU3Vic2NyaWJlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoc2VsZWN0b3JMb2dpblN0YXRlKS50ZXh0KCfQn9GA0LjQstC10YIg0LDQvdC+0L3QuNC80L3Ri9C5INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCcpO1xyXG4gICAgICAgICQoc2VsZWN0b3JFbWFpbENvbmZpcm1TdGF0ZSkuZW1wdHkoKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEluaXQgaGVhZGVyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW5pdEhlYWRlcigpIHtcclxuICAgLy8gY2hlY2sgb3RoZXIgaGFuZGxlciBpbiBsb2dpbi1mb3JtLmpzXHJcbiAgICBjb25zdCAkbG9naW5Cb3ggPSAkKENPTlNULnVpU2VsZWN0b3JzLmhlYWRlckxvZ2luQm94KTtcclxuICAgIGNvbnN0ICRyZWdpc3RlckJveCA9ICQoQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyUmVnQm94KTtcclxuXHJcbiAgICBQdWJTdWIuc3Vic2NyaWJlKENPTlNULmV2ZW50cy5VU0VSX0xPR0dFRCwgb25Mb2dpblN1YnNjcmliZSk7XHJcblxyXG4gICAgc2hvd0xvZ291dCgpO1xyXG5cclxuICAgICQoQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyUmVnQnRuKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgJGxvZ2luQm94LmhpZGUoKTtcclxuICAgICAgICAkcmVnaXN0ZXJCb3guY3NzKHsndG9wJzogMCwgJ3JpZ2h0JzogMH0pXHJcbiAgICAgICAgICAgIC5hZGRDbGFzcygnYmctbGlnaHQgYm9yZGVyIG10LTUgbXgtYXV0byBwb3NpdGlvbi1hYnNvbHV0ZSBweC0zIGQtYmxvY2snKVxyXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJOYXZMb2dpbkJ0bikub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICRsb2dpbkJveC5hZGRDbGFzcygnZC1ibG9jaycpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAkcmVnaXN0ZXJCb3guYWRkQ2xhc3MoJ2Qtbm9uZScpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJyk7XHJcbiAgICB9KTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL2hlYWRlci9oZWFkZXIuanMiLCIvLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdXNlcic7XHJcbi8vIGltcG9ydCBTcGlubmVyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9zcGlubmVyJztcclxuaW1wb3J0IHZpZXdVdGlscyBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdmlldyc7XHJcblxyXG4vKlxyXG5jb25zdCBzdGF0aWNSZXNwID0ge1xyXG4gICAgJ3N0YXR1cyc6IHtcclxuICAgICAgICAnc3RhdGUnOiAnb2snXHJcbiAgICB9LFxyXG4gICAgJ2RhdGEnOiB7XHJcbiAgICAgICAgJ2FjY291bnRzJzogW3tcclxuICAgICAgICAgICAgJ3N0YXR1cyc6ICdPSycsXHJcbiAgICAgICAgICAgICd1c2VybmFtZSc6ICdhbmRyZXkuamFraXZjaHlrJyxcclxuICAgICAgICAgICAgJ2NoZWNrcG9pbnQnOiB7XHJcbiAgICAgICAgICAgICAgICAnc3RhdHVzJzogJ0FCU0VOVCcsXHJcbiAgICAgICAgICAgICAgICAndHlwZSc6ICdQSE9ORSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ3RhcmlmZic6IHtcclxuICAgICAgICAgICAgICAgICdzdGF0dXMnOiAnQUJTRU5UJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnaW5mbyc6IHtcclxuICAgICAgICAgICAgICAgICdwcm9maWxlX3BpY191cmwnOiAnaHR0cHM6Ly9yYW5kb211c2VyLm1lL2FwaS9wb3J0cmFpdHMvbWVuLzUwLmpwZycsXHJcbiAgICAgICAgICAgICAgICAnbmFtZSc6ICfQkNC90LTRgNC10Lkg0K/QutC40LLRh9GD0LonLFxyXG4gICAgICAgICAgICAgICAgJ2Jpb2dyYXBoeSc6ICcnLFxyXG4gICAgICAgICAgICAgICAgJ3VybCc6ICcnLFxyXG4gICAgICAgICAgICAgICAgJ2VtYWlsJzogJ25pZHp1a3VAaW5ib3gucnUnLFxyXG4gICAgICAgICAgICAgICAgJ3Bob25lJzogJycsXHJcbiAgICAgICAgICAgICAgICAnbWVkaWFfY291bnQnOiAyLFxyXG4gICAgICAgICAgICAgICAgJ2ZvbGxvd2VyX2NvdW50JzogNCxcclxuICAgICAgICAgICAgICAgICdmb2xsb3dpbmdfY291bnQnOiAxNVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAnc3RhdHVzJzogJ09LJyxcclxuICAgICAgICAgICAgJ3VzZXJuYW1lJzogJ2FuZHJleS5qYWtpdmNoeWsnLFxyXG4gICAgICAgICAgICAnY2hlY2twb2ludCc6IHtcclxuICAgICAgICAgICAgICAgICdzdGF0dXMnOiAnQUJTRU5UJyxcclxuICAgICAgICAgICAgICAgICd0eXBlJzogJ0VNQUlMJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAndGFyaWZmJzoge1xyXG4gICAgICAgICAgICAgICAgJ3N0YXR1cyc6ICdBQlNFTlQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICdpbmZvJzoge1xyXG4gICAgICAgICAgICAgICAgJ3Byb2ZpbGVfcGljX3VybCc6ICdodHRwczovL3JhbmRvbXVzZXIubWUvYXBpL3BvcnRyYWl0cy9tZW4vNTIuanBnJyxcclxuICAgICAgICAgICAgICAgICduYW1lJzogJ9CU0LjQvNC+0L0g0J/QsNGA0LDQu9C+0L0nLFxyXG4gICAgICAgICAgICAgICAgJ2Jpb2dyYXBoeSc6ICdiaW9ncmFwaHkgdGV4dCcsXHJcbiAgICAgICAgICAgICAgICAndXJsJzogJ3d3dy5sZW5lbmdyYWQucnUnLFxyXG4gICAgICAgICAgICAgICAgJ2VtYWlsJzogJ25pZHp1a3VAaW5ib3gucnUnLFxyXG4gICAgICAgICAgICAgICAgJ3Bob25lJzogJzAxMS0xMTEtMTExLTExJyxcclxuICAgICAgICAgICAgICAgICdtZWRpYV9jb3VudCc6IDUxNSxcclxuICAgICAgICAgICAgICAgICdmb2xsb3dpbmdfY291bnQnOiAzNFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAnc3RhdHVzJzogJ09LJyxcclxuICAgICAgICAgICAgJ3VzZXJuYW1lJzogJ2FsZXguc21pdGgnLFxyXG4gICAgICAgICAgICAnY2hlY2twb2ludCc6IHtcclxuICAgICAgICAgICAgICAgICdzdGF0dXMnOiAnVFJJR0dFUkVEJyxcclxuICAgICAgICAgICAgICAgICd0eXBlJzogJ0VNQUlMX09SX1BIT05FJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAndGFyaWZmJzoge1xyXG4gICAgICAgICAgICAgICAgJ3N0YXR1cyc6ICdBQlNFTlQnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICdzdGF0dXMnOiAnT0snLFxyXG4gICAgICAgICAgICAndXNlcm5hbWUnOiAnMjJhbmRyZXkuamFraXZjaHlrMicsXHJcbiAgICAgICAgICAgICdjaGVja3BvaW50Jzoge1xyXG4gICAgICAgICAgICAgICAgJ3N0YXR1cyc6ICdUUklHR0VSRUQnLFxyXG4gICAgICAgICAgICAgICAgJ3R5cGUnOiAnUEhPTkUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICd0YXJpZmYnOiB7XHJcbiAgICAgICAgICAgICAgICAnc3RhdHVzJzogJ0FCU0VOVCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgICdhdmFpbGFibGVfcHJveHlfcHVyY2hhc2UnOiB0cnVlXHJcbiAgICB9XHJcbn07XHJcbiovLypcclxuY29uc3Qgc3RhdGljUmVzcFdpdGhEZWxheSA9IHtcclxuICAgICdzdGF0dXMnOiB7XHJcbiAgICAgICAgJ3N0YXRlJzogJ29rJ1xyXG4gICAgfSxcclxuICAgICdkYXRhJzoge1xyXG4gICAgICAgICdhY2NvdW50cyc6IFt7XHJcbiAgICAgICAgICAgICdzdGF0dXMnOiAnT0snLFxyXG4gICAgICAgICAgICAndXNlcm5hbWUnOiAnc3RhdGljUmVzcC5XaXRoRGVsYXknLFxyXG4gICAgICAgICAgICAnY2hlY2twb2ludCc6IHtcclxuICAgICAgICAgICAgICAgICdzdGF0dXMnOiAnQUJTRU5UJyxcclxuICAgICAgICAgICAgICAgICd0eXBlJzogJ1BIT05FJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAndGFyaWZmJzoge1xyXG4gICAgICAgICAgICAgICAgJ3N0YXR1cyc6ICdBQlNFTlQnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XSxcclxuICAgICAgICAnYXZhaWxhYmxlX3Byb3h5X3B1cmNoYXNlJzogdHJ1ZVxyXG4gICAgfVxyXG59O1xyXG4qL1xyXG5cclxuLy8g0J/QvtGB0LvQtSDQtNC+0LHQsNCy0LvQtdC90LjRjyDQsNC60LrQsNGD0L3RgtCwINGB0L3QvtCy0LAg0LTQtdGA0L3Rg9GC0Ywg0JzQldCi0JAg0Lgg0L/QtdGA0LXRgNC40YHQvtCy0LDRgtGMINGB0L/QuNGB0L7QuiDQsNC60LrQsNGD0L3RgtC+0LJcclxuY29uc3QgYWRkSW5zdGFncmFtQWNjb3VudCA9IChuZXdGb3JtRGF0YSkgPT4ge1xyXG4gICAgY29uc3QgY2JFcnJvciA9IChyZXN1bHQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnRVJST1InLCByZXN1bHQpO1xyXG4gICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UoJCgnLmVycm9yLW1zZycpLFxyXG4gICAgICAgICAgICByZXN1bHQuc3RhdHVzLnN0YXRlLFxyXG4gICAgICAgICAgICByZXN1bHQuc3RhdHVzLm1lc3NhZ2UgfHwgJ0xvZ2luIGVycm9yJyk7XHJcbiAgICAgICAgLy8gJChfbG9naW5Cb3gpLmFkZENsYXNzKGNsb3NlQ2xhc3MpLnJlbW92ZUNsYXNzKG9wZW5lZENsYXNzKTtcclxuICAgIH07XHJcblxyXG4gICAgVXNlci5hZGRJbnN0YWdyYW1BY2NvdW50KG5ld0Zvcm1EYXRhLCBjYkVycm9yKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5zdGF0dXMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LCByZXN1bHQuc3RhdHVzKTtcclxuICAgICAgICAgICAgLy8gZGVidWdnZXI7XHJcbiAgICAgICAgICAgIGNvbnN0ICRtc2dMaXN0ID0gJCgnLmFjY291bnRzLWxpc3QnKTtcclxuICAgICAgICAgICAgJG1zZ0xpc3QuZW1wdHkoKTtcclxuICAgICAgICAgICAgLy8gdG9kbyA6IHJlbG9hZCBsaXN0XHJcbiAgICAgICAgICAgIC8vIGZpbGxMaXN0KCRtc2dMaXN0LCByZXN1bHQuZGF0YS5hY2NvdW50cyk7XHJcbiAgICAgICAgICAgIC8vIGFkZExpc3RIYW5kbGVyKCk7XHJcblxyXG4gICAgICAgICAgICAvLyB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKCR0ZXh0QXJlYURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAvLyAgICAgcmVzdWx0LnN0YXR1cy5zdGF0ZSxcclxuICAgICAgICAgICAgLy8gICAgIHJlc3VsdC5zdGF0dXMubWVzc2FnZSB8fCAnTG9naW4gZXJyb3InKTtcclxuICAgICAgICAgICAgLy8gJChfbG9naW5Cb3gpLmFkZENsYXNzKGNsb3NlQ2xhc3MpLnJlbW92ZUNsYXNzKG9wZW5lZENsYXNzKTtcclxuICAgICAgICB9XHJcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgLy8gdG9kbzogcmVuZGVyIGZvciB1c2VyXHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdzdWJtaXQnLCBuZXdGb3JtRGF0YSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBhZGRPbkxvYWRIYW5kbGVycygpIHtcclxuICAgIC8vICQoJy5qc19yZXBlYXQtc2VjdXJpdHktY29kZScpLm9uKCdjbGljaycsIChlKSA9PiB7XHJcblxyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgJCgnLmpzX2FkZC1pbnN0YWdyYW0tYWNjb3VudCcpLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYnRuID0gJChlLnRhcmdldCk7XHJcbiAgICAgICAgY29uc3QgJG1vZGFsQm9keSA9IGJ0bi5jbG9zZXN0KCcubW9kYWwnKS5maW5kKCcubW9kYWwtZGlhbG9nIC5tb2RhbC1ib2R5Jyk7XHJcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSAkbW9kYWxCb2R5LmZpbmQoJ2lucHV0W25hbWU9XCJ1c2VybmFtZVwiXScpLnZhbCgpLnRyaW0oKTtcclxuICAgICAgICBjb25zdCBwYXNzd29yZCA9ICRtb2RhbEJvZHkuZmluZCgnaW5wdXRbbmFtZT1cInBhc3NcIl0nKS52YWwoKS50cmltKCk7XHJcbiAgICAgICAgY29uc3QgJGZvcm0gPSAkKCdmb3JtJywgJG1vZGFsQm9keSk7XHJcbiAgICAgICAgY29uc3QgZm9ybSA9ICRmb3JtLmdldCgwKTtcclxuICAgICAgICBjb25zdCBjc3NWYWxpZGF0aW9uQ2xhc3MgPSAnZm9ybS12YWxpZGF0aW9uJztcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAvLyBjb25zdCB2YWxpZGF0b3IgPSBuZXcgVmFsaWRhdG9yKCRmb3JtKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWxpZGF0b3IudmFsaWRhdGUoKSk7XHJcbiAgICAgICAgaWYgKGZvcm0uY2hlY2tWYWxpZGl0eSgpKSB7XHJcbiAgICAgICAgICAgIGFkZEluc3RhZ3JhbUFjY291bnQoe3VzZXJuYW1lLCBwYXNzd29yZH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIEhpZ2hsaWdodCBlcnJvcnNcclxuICAgICAgICAgICAgaWYgKGZvcm0ucmVwb3J0VmFsaWRpdHkpIHtcclxuICAgICAgICAgICAgICAgIGZvcm0ucmVwb3J0VmFsaWRpdHkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkZm9ybS5hZGRDbGFzcyhjc3NWYWxpZGF0aW9uQ2xhc3MpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF1c2VybmFtZSB8fCAhcGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vdCB2YWxpZCAtIEVtcHR5IGZpZWxkcycpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZExpc3RIYW5kbGVyKC8qIHVzZXJuYW1lKi8pIHtcclxuICAgIC8vICQoJyN5b3VyTW9kYWxJRCcpLm9uKCdzaG93LmJzLm1vZGFsJywgZnVuY3Rpb24oZSkge1xyXG4gICAgLy8gICAgIHZhciB5b3VycGFyYW1ldGVyID0gZS5yZWxhdGVkVGFyZ2V0LmRhdGFzZXQueW91cnBhcmFtZXRlcjtcclxuICAgIC8vICAgICAvLyBEbyBzb21lIHN0dWZmIHcvIGl0LlxyXG4gICAgLy8gfSk7XHJcbiAgICBsZXQgY2hlY2twb2ludFR5cGUgPSAnJztcclxuXHJcbiAgICAkKCcuanNfcGFzcy1jaGVja3BvaW50LWJ0bicpLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgJGJ1dHRvbiA9ICQoZS50YXJnZXQpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gJGJ1dHRvbi5kYXRhKCd1c2VybmFtZScpO1xyXG4gICAgICAgIGNoZWNrcG9pbnRUeXBlID0gJGJ1dHRvbi5kYXRhKCdjaGVja3BvaW50VHlwZScpIHx8IGNoZWNrcG9pbnRUeXBlO1xyXG4gICAgICAgIC8vICQoJyNzZWN1cml0eS1jb2RlJykuZGF0YSgnY2hlY2twb2ludFR5cGUnLCBjaGVja3BvaW50VHlwZSk7XHJcbiAgICAgICAgLy8gdG9kbyBhZGQgJ2NoZWNrcG9pbnRUeXBlJyB0byBtb2RhbFxyXG4gICAgICAgIGNvbnN0IHNlbmRUbyA9IChjaGVja3BvaW50VHlwZSA9PT0gJ1BIT05FJykgPyAn0YLQtdC70LXRhNC+0L0nIDogJ2VtYWlsJztcclxuICAgICAgICAvLyBTcGlubmVyLnN0YXJ0KCRidXR0b24sICdmYS1rZXknKTtcclxuXHJcbiAgICAgICAgaWYgKGNoZWNrcG9pbnRUeXBlID09PSAnRU1BSUxfT1JfUEhPTkUnKSB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAvLyDQuNC90L/Rg9GC0Ysg0YHQv9GA0Y/RgtCw0L3RiyxcclxuICAgICAgICAgICAgLy8g0L/QvtC60LDQt9Cw0YLRjCDRgdC10YDRi9C1INC/0LXRgNC10LrQu9GO0YfQsNGC0LXQu9C4ICjQstGL0LHRgNCw0Lsg0YLQuNC/KVxyXG4gICAgICAgICAgICAvLyDQtdGB0YLRjCDQutC90L7Qv9C60LAg0JfQsNC/0YDQvtGB0LjRgtGMINC60L7QtCDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjQtVxyXG4gICAgICAgICAgICAkKCcjc2VjdXJpdHktY29kZS1waG9uZU9yZW1haWwnKS5tb2RhbCh7c2hvdzogdHJ1ZSwgdXNlcm5hbWV9KTtcclxuXHJcbiAgICAgICAgICAgIC8vINC90LUg0L7RgtC/0YDQsNCy0LvRj9C10Lwg0YDQtdC60LLQtdGB0YJcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgVXNlci5nZXRTZWN1cml0eUtleSh1c2VybmFtZSwgY2hlY2twb2ludFR5cGUpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2VjdXJpdHlLZXkgcmVjZWl2ZWQ6JywgcmVzdWx0LnN0YXR1cy5zdGF0ZSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzLnN0YXRlID09PSAnb2snKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkbW9kYWwgPSAkKCcjc2VjdXJpdHktY29kZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNwaW5uZXIuc3RvcCgkYnV0dG9uLCAnZmEta2V5Jyk7XHJcbiAgICAgICAgICAgICAgICAkKCcuanNfc3VjY2Vzcy1mZWVkYmFjaycsICRtb2RhbCkuZW1wdHkoKS50ZXh0KGDQmtC70Y7RhyDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjRjyDQsdGL0Lsg0L7RgtC/0YDQsNCy0LvQtdC9INCS0LDQvCDQvdCwICR7c2VuZFRvfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBpbnNpZGUgbW9kYWxcclxuICAgICQoJy5qc19jb25maXJtLXNlY3VyaXR5LWNvZGUnKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJ0biA9ICQoZS50YXJnZXQpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gYnRuLmRhdGEoJ3VzZXJuYW1lJyk7XHJcbiAgICAgICAgY29uc3QgJGtleUlucHV0ID0gYnRuLmNsb3Nlc3QoJy5tb2RhbCcpLmZpbmQoJy5tb2RhbC1kaWFsb2cgZm9ybSBpbnB1dC5qc19jb25maXJtLWtleScpO1xyXG4gICAgICAgIGNvbnN0IGtleSA9ICRrZXlJbnB1dC52YWwoKS50cmltKCk7XHJcbiAgICAgICAgY29uc3QgJG1vZGFsID0gYnRuLmNsb3Nlc3QoJy5tb2RhbCcpO1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIGlmIChrZXkubGVuZ3RoICE9PSA2KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgVXNlci5jb25maXJtU2VjdXJpdHlLZXkoa2V5LCB1c2VybmFtZSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzLnN0YXRlICE9PSAnb2snKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2pzX2NvbmZpcm06JywgcmVzdWx0LnN0YXR1cy5zdGF0ZSwgJ2Nsb3NlIG1vZGFsJyk7XHJcbiAgICAgICAgICAgICRtb2RhbC5tb2RhbCgnaGlkZScpO1xyXG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2VycicpO1xyXG4gICAgICAgICAgICAkKCcuanNfc3VjY2Vzcy1mZWVkYmFjaycsICRtb2RhbCkudGV4dCgn0JfQsNC/0YDQvtGBINC90LUg0L7RgtC/0YDQsNCy0LvQtdC9JykuY3NzKCdjb2xvcicsICdyZWQnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJ2Zvcm0gaW5wdXRbbWlubGVuZ3RoXScpLm9uKCdibHVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGxlbiA9ICQodGhpcykudmFsKCkudHJpbSgpLmxlbmd0aDtcclxuICAgICAgICBjb25zdCBtaW5MZW4gPSBOdW1iZXIoJCh0aGlzKS5hdHRyKCdtaW5sZW5ndGgnKSk7XHJcbiAgICAgICAgLy8gY29uc3QgbWVzc2FnZSA9IG1pbkxlbiA8PSBsZW4gPyAnJyA6IG1pbkxlbiArICcgY2hhcmFjdGVycyBtaW5pbXVtJztcclxuICAgICAgICBpZiAobWluTGVuICE9PSBsZW4pIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2JvcmRlckNvbG9yJywgJ3JlZCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQodGhpcykuY3NzKCdib3JkZXJDb2xvcicsICcjY2VkNGRhJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMuc2V0Q3VzdG9tVmFsaWRpdHkobWVzc2FnZSlcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9uSGlkZU1vZGFsKGUpIHtcclxuICAgICAgICBjb25zdCAkbW9kYWwgPSAkKGUudGFyZ2V0KTtcclxuICAgICAgICAkbW9kYWwuZmluZCgnLmZpcnN0LXN0ZXAnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgJG1vZGFsLmZpbmQoJy5zZWNvbmQtc3RlcCcpLmFkZENsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAkKCcuanNfY29uZmlybS1rZXknKS52YWwoJycpO1xyXG4gICAgICAgICQoJy5qc19zdWNjZXNzLWZlZWRiYWNrJywgJG1vZGFsKS5yZW1vdmVBdHRyKCdzdHlsZScpLmVtcHR5KCk7XHJcbiAgICB9XHJcbiAgICAkKCcjc2VjdXJpdHktY29kZS1waG9uZU9yZW1haWwnKS5vbignaGlkZS5icy5tb2RhbCcsIG9uSGlkZU1vZGFsKTtcclxuICAgICQoJyNzZWN1cml0eS1jb2RlJykub24oJ2hpZGUuYnMubW9kYWwnLCBvbkhpZGVNb2RhbCk7XHJcblxyXG4gICAgLy8gXCJQSE9ORV9PUl9FTUFJTFwiIG1vZGFsXHJcbiAgICAkKCcuanNfZ2V0LXNlY3VyaXR5LWNvZGUtcGhvbmVPcmVtYWlsJykub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCAkbW9kYWwgPSAkKCcjc2VjdXJpdHktY29kZS1waG9uZU9yZW1haWwnKTtcclxuICAgICAgICBjb25zdCB0eXBlU2VsZWN0ZWQgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCRtb2RhbCkuZmluZCgnLmpzX2J0bi10eXBlLXN3aXRjaGVyIGlucHV0OmNoZWNrZWQnKTtcclxuICAgICAgICBjb25zdCBjaGVja3BvaW50VHlwZUFjdGl2ZSA9IHR5cGVTZWxlY3RlZC52YWwoKTtcclxuICAgICAgICBjb25zdCBzZW5kVG8gPSAoY2hlY2twb2ludFR5cGVBY3RpdmUgPT09ICdQSE9ORScpID8gJ9GC0LXQu9C10YTQvtC9JyA6ICdlbWFpbCc7XHJcbiAgICAgICAgY29uc3QgbW9kYWxDb25maWcgPSAkbW9kYWwuZGF0YSgpWydicy5tb2RhbCddLl9jb25maWc7XHJcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSBtb2RhbENvbmZpZy51c2VybmFtZTtcclxuICAgICAgICBVc2VyLmdldFNlY3VyaXR5S2V5KHVzZXJuYW1lLCBjaGVja3BvaW50VHlwZUFjdGl2ZSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIC8vINC/0YDQuCDQvdCw0LbQsNGC0LjQuCBcItCX0LDQv9GA0L7RgdC40YLRjCDQutC+0LQg0L/QvtC00YLQstC10YDQttC00LXQvdC40LVcIiAtINC+0YLQv9Cw0YDQu9GP0LXRgtGB0Y8g0YDQtdC60LLQtdGB0YIgXCLRgdGC0LDRgNGCINGH0LXQutC/0L7QuNC90YJcIiDQv9C+0Y/QstC70Y/QtdGC0YzRgdGPINC40L3Qv9GD0YIg0Lgg0LrQvdC+0L/QutCwINC00YDRg9Cz0LjRhSDRgtC40L/QsNGFXHJcbiAgICAgICAgICAgIC8vIGdldCBzZWxlY3RlZCBidXR0b25cclxuXHJcbiAgICAgICAgICAgIC8vINC/0LXRgNC10LrQu9GO0YfQsNGC0LXQu9GMKNGB0LXRgNGL0LkpINC4INC60L3QvtC/0LrQsCBcItCX0LDQv9GA0L7RgdC40YLRjCDQutC+0LQg0L/QvtC00YLQstC10YDQttC00LXQvdC40LVcIiDQuNGB0YfQtdC30LDRjtGCXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZWN1cml0eUtleSByZWNlaXZlZDonLCByZXN1bHQuc3RhdHVzLnN0YXRlKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMuc3RhdGUgPT09ICdvaycpIHtcclxuICAgICAgICAgICAgICAgICQoJy5maXJzdC1zdGVwJywgJG1vZGFsKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcuc2Vjb25kLXN0ZXAnLCAkbW9kYWwpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgICAgICQoJy5qc19zdWNjZXNzLWZlZWRiYWNrJywgJG1vZGFsKS5lbXB0eSgpLnRleHQoYNCa0LvRjtGHINC/0L7QtNGC0LLQtdGA0LbQtNC10L3QuNGPINCx0YvQuyDQvtGC0L/RgNCw0LLQu9C10L0g0JLQsNC8INC90LAgJHtzZW5kVG99YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaWxsTGlzdCgkbGlzdCwgZGF0YUFycmF5KSB7XHJcbiAgICBjb25zdCBpdGVtcyA9IGRhdGFBcnJheTtcclxuICAgIGNvbnN0IGNMaXN0ID0gJGxpc3Q7XHJcbiAgICBjb25zdCBkZWZhdWx0QXZhdGFyU3JjID0gJ2h0dHBzOi8vaS5pbWd1ci5jb20vak5OVDRMRS5wbmcnO1xyXG4gICAgY29uc3QgaW5zZXJ0SXRlbSA9IChkYXRhLCB0ZXh0LCBjc3NDbHMpID0+IHtcclxuICAgICAgICBjb25zdCBsaVRwbCA9IGAkeyhkYXRhKVxyXG4gICAgICAgICAgICA/IGA8bGkgY2xhc3M9XCJsaXN0LWlubGluZS1pdGVtICR7Y3NzQ2xzfVwiPjxzcGFuIGNsYXNzPVwiZmlndXJlXCI+JHtkYXRhfTwvc3Bhbj48c3Bhbj4ke3RleHR9PC9zcGFuPjwvbGk+YFxyXG4gICAgICAgICAgICA6IGA8bGkgY2xhc3M9XCJsaXN0LWlubGluZS1pdGVtICR7Y3NzQ2xzfVwiPjxzcGFuIGNsYXNzPVwiZmlndXJlXCI+LTwvc3Bhbj48c3Bhbj4ke3RleHR9PC9zcGFuPjwvbGk+YH1gO1xyXG4gICAgICAgIHJldHVybiBsaVRwbDtcclxuICAgIH07XHJcbiAgICBjb25zdCBzdGF0cyA9IChpbmZvKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdHBsID0gYDxkaXYgY2xhc3M9XCJjb2xcIj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1pbmxpbmUgdGV4dC1jZW50ZXIgY291bnRzLWxpc3RcIj5cclxuICAgICAgICAgICAgJHsoaW5mbylcclxuICAgICAgICAgICAgICA/IGAke2luc2VydEl0ZW0oaW5mb1snbWVkaWFfY291bnQnXSwgJ9Cf0YPQsdC70LjQutCw0YbQuNC4JywgJ21lZGlhLWNvdW50Jyl9XHJcbiAgICAgICAgICAgICAgICAke2luc2VydEl0ZW0oaW5mb1snZm9sbG93ZXJfY291bnQnXSwgJ9Cf0L7QtNC/0LjRgdGH0LjQutC4JywgJ2ZvbGxvd2VyLWNvdW50Jyl9XHJcbiAgICAgICAgICAgICAgICAke2luc2VydEl0ZW0oaW5mb1snZm9sbG93aW5nX2NvdW50J10sICfQn9C+0LTQv9C40YHQutC4JywgJ2ZvbGxvd2luZy1jb3VudCcpfWBcclxuICAgICAgICAgICAgICA6IGAke2luc2VydEl0ZW0oZmFsc2UsICfQn9GD0LHQu9C40LrQsNGG0LjQuCcsICdtZWRpYS1jb3VudCcpfVxyXG4gICAgICAgICAgICAgICAgJHtpbnNlcnRJdGVtKGZhbHNlLCAn0J/QvtC00L/QuNGB0YfQuNC60LgnLCAnZm9sbG93ZXItY291bnQnKX1cclxuICAgICAgICAgICAgICAgICR7aW5zZXJ0SXRlbShmYWxzZSwgJ9Cf0L7QtNC/0LjRgdC60LgnLCAnZm9sbG93aW5nLWNvdW50Jyl9YFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+YDtcclxuICAgICAgICByZXR1cm4gdHBsO1xyXG4gICAgfTtcclxuICAgIGNMaXN0LmVtcHR5KCkuYWRkQ2xhc3MoJ2JvcmRlci1saWdodC1jb2xvcicpO1xyXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGluZm8gPSBpdGVtLmluZm87XHJcbiAgICAgICAgY29uc3QgY2hlY2twb2ludCA9IGl0ZW0uY2hlY2twb2ludCB8fCBpdGVtO1xyXG5cclxuICAgICAgICBpZiAoIWluZm8pIHtcclxuICAgICAgICAgICAgJChgPGxpIGNsYXNzPVwibWVkaWEgcHktM1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cIm1sLTMgcm91bmRlZFwiIGFsdD1cImRlZmF1bHQgYXZhdGFyXCIgc3JjPVwiJHtkZWZhdWx0QXZhdGFyU3JjfVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWJvZHkgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB1c2VyLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHsoaXRlbS51c2VybmFtZSkgPyBgPGg0IGNsYXNzPVwibXQtMCBtYi0xIG5hbWVcIj4ke2l0ZW0udXNlcm5hbWV9PC9oND5gIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkeyhjaGVja3BvaW50LnN0YXR1cyA9PT0gJ1RSSUdHRVJFRCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGpzX3Bhc3MtY2hlY2twb2ludC1idG4gZC1ibG9jayBteC1hdXRvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWNoZWNrcG9pbnQtdHlwZT1cIiR7Y2hlY2twb2ludC50eXBlfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXVzZXJuYW1lPVwiJHtpdGVtLnVzZXJuYW1lIHx8ICcnfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjc2VjdXJpdHktY29kZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEta2V5XCI+PC9pPtCf0YDQvtC50YLQuCDRh9C10LrQv9C+0LjQvdGCPC9idXR0b24+YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGAodG9kbyljaGVja3BvaW50IHN0YXR1cyAtICR7Y2hlY2twb2ludC5zdGF0dXN9YH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAke3N0YXRzKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5gKS5hcHBlbmRUbyhjTGlzdCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChgPGxpIGNsYXNzPVwibWVkaWEgcHktM1wiPlxyXG4gICAgICAgICAgICAkeyhpbmZvWydwcm9maWxlX3BpY191cmwnXSlcclxuICAgICAgICAgICAgICAgID8gYDxpbWcgY2xhc3M9XCJtbC0zIHJvdW5kZWRcIiBhbHQ9XCJVc2VyIHBob3RvXCIgc3JjPVwiJHtpbmZvWydwcm9maWxlX3BpY191cmwnXX1cIj5gXHJcbiAgICAgICAgICAgICAgICA6IGA8aW1nIGNsYXNzPVwibWwtMyByb3VuZGVkXCIgYWx0PVwiZGVmYXVsdCBhdmF0YXJcIiBzcmM9XCIke2RlZmF1bHRBdmF0YXJTcmN9XCI+YH1cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWJvZHkgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHVzZXItaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7KGl0ZW0udXNlcm5hbWUpID8gYDxwIGNsYXNzPVwibXQtMCBtYi0xIG5hbWVcIj4ke2l0ZW0udXNlcm5hbWV9PC9wPmAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAkeyhpbmZvLm5hbWUpID8gYDxoNCBjbGFzcz1cIm10LTAgbWItMVwiPiR7aW5mby5uYW1lfTwvaDQ+YCA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICR7KGluZm8ubmFtZSkgPyAnJyA6ICdjb21tZW50ZWQnICAvKiAkeyhpbmZvLmVtYWlsKSA/IGA8cCBjbGFzcz1cIm10LTAgbWItMVwiPiR7aW5mby5lbWFpbH08L3A+YCA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAkeyhpbmZvLnBob25lKSA/IGA8cCBjbGFzcz1cIm10LTAgbWItMVwiPiR7aW5mby5waG9uZX08L3A+YCA6ICcnfSAqLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAkeyhjaGVja3BvaW50LnN0YXR1cyA9PT0gJ1RSSUdHRVJFRCcpXHJcbiAgICAgICAgICAgICAgICA/IGA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBqc19wYXNzLWNoZWNrcG9pbnQtYnRuIGQtYmxvY2sgbXgtYXV0b1wiIGRhdGEtY2hlY2twb2ludC10eXBlPVwiJHtjaGVja3BvaW50LnR5cGV9XCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI3NlY3VyaXR5LWNvZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1rZXlcIj48L2k+0J/RgNC+0LnRgtC4INGH0LXQutC/0L7QuNC90YI8L2J1dHRvbj5gXHJcbiAgICAgICAgICAgICAgICA6ICcnfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAke3N0YXRzKGluZm8pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2xpPmApLmFwcGVuZFRvKGNMaXN0KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEluaXQgaGVhZGVyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIGNvbnN0ICRtc2dMaXN0ID0gJCgnLmFjY291bnRzLWxpc3QnKTtcclxuICAgIC8vIGNoZWNrIHdlIGFyZSBpbiBwcm9maWxlIHBhZ2VcclxuICAgIGlmICghJG1zZ0xpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdG9rZW4gPSBVc2VyLmdldFRva2VuKCk7IC8vIHVwZCB0bzogVXNlci5nZXRUb2tlbigpXHJcbiAgICBjb25zdCBtZXRhZGF0YSA9IFVzZXIuZ2V0TWV0YWRhdGEodG9rZW4pO1xyXG4gICAgY29uc3QgcmVzZW5kUmVxdWVzdCA9ICgpID0+IFVzZXIuZ2V0TWV0YWRhdGEodG9rZW4pO1xyXG4gICAgbGV0IGlzU2VuZFJlcU9uY2UgPSBmYWxzZTtcclxuICAgIGNvbnN0IGNoZWNrUmVzcG9uc2UgPSAocmVzdWx0LCBpc1Jlc2VuZFJlcXVlc3QpID0+IHtcclxuICAgICAgICBpZiAoIXJlc3VsdC5zdGF0dXMuc3RhdGUgPT09ICdvaycgfHwgIXJlc3VsdC5kYXRhIHx8ICEkbXNnTGlzdC5sZW5ndGggfHwgaXNSZXNlbmRSZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgIC8vINC/0YDQvtCy0LXRgNGP0Lwg0L7QtNC40L0g0YDQsNC3INC90LDQu9C40YfQuNC1IHJlc3VsdC5kYXRhLmFjY291bnRzLmluZm9cclxuICAgICAgICAgICAgJG1zZ0xpc3QuZW1wdHkoKTtcclxuICAgICAgICAgICAgJChgPGxpIGNsYXNzPVwibWVkaWFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwibXQtMCBtYi0zXCI+0J3QuCDQvtC00L3QvtCz0L4g0JDQutC60LDRg9C90YLQsCDQvdC1INC00L7QsdCw0LLQu9C10L3QvjwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5gKS5hcHBlbmRUbygkbXNnTGlzdCk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzZW5kUmVxdWVzdCgpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrUmVzcG9uc2UocmVzdWx0LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXF1ZXN0IHJlc2VuZCcpO1xyXG4gICAgICAgICAgICB9LCAzNTAwKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDQstGL0LLQvtC0INGA0LXQt9GD0LvRjNGC0LDRgtC+0LIgKGRhdGEuYWNjb3VudHMuaW5mbylcclxuICAgICAgICAkKCcucHJvZmlsZS11c2VyIC5zcGlubmVyLWJveCcpLmFkZENsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICBmaWxsTGlzdCgkbXNnTGlzdCwgcmVzdWx0LmRhdGEuYWNjb3VudHMpO1xyXG4gICAgICAgIGFkZExpc3RIYW5kbGVyKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGNoZWNrIHdlIGFyZSBpbiBwcm9maWxlIHBhZ2VcclxuICAgIGlmICghJG1zZ0xpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZE9uTG9hZEhhbmRsZXJzKCk7XHJcblxyXG4gICAgLy8g0LzQvtC20LXRgiDQuNC90YTQviDQvtGC0YHRg9GC0YHQstC+0LLQsNGC0YwgLSDRgdC00LXQu9Cw0YLRjCDQtdGJ0LUg0YDQsNC3INC30LDQv9GA0L7RgSDRh9C10YDQtdC3IDMg0YHQtdC6LlxyXG5cclxuICAgIG1ldGFkYXRhLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIC8vINC/0YDQvtCy0LXRgNGP0Lwg0L7QtNC40L0g0YDQsNC3INC90LDQu9C40YfQuNC1IHJlc3VsdC5kYXRhLmFjY291bnRzLmluZm9cclxuICAgICAgICBsZXQgaXNSZXNlbmRSZXF1ZXN0ID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5kYXRhICYmIHJlc3VsdC5kYXRhLmFjY291bnRzICYmICFpc1NlbmRSZXFPbmNlKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5kYXRhLmFjY291bnRzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghaXRlbS5pbmZvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNSZXNlbmRSZXF1ZXN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpc1NlbmRSZXFPbmNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjaGVja1Jlc3BvbnNlKHJlc3VsdCwgaXNSZXNlbmRSZXF1ZXN0KTtcclxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSgkKCcuZXJyb3ItbXNnJyksXHJcbiAgICAgICAgICAgICAgICBlcnIuc3RhdHVzIHx8ICcnLFxyXG4gICAgICAgICAgICAgICAgJ9Cd0LUg0L/QvtC70YPRh9C40LvQvtGB0Ywg0LfQsNCz0YDRg9C30LjRgtGMINC00L7RgdGC0YPQv9C90YvQtSBJbnN0YWdyYW0g0LDQutC60LDRg9C90YLRiycpO1xyXG4gICAgICAgIH0sIDMwMDApO1xyXG4gICAgICAgICQoJy5zcGlubmVyLWJveCcpLmFkZENsYXNzKCdkLW5vbmUnKTtcclxuICAgIH0pO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3MvaW5zdGFncmFtLWFjY291bnRzLWxpc3QvaW5zdGFncmFtLWFjY291bnRzLWxpc3QuanMiLCIvKiBlc2xpbnQtZGlzYWJsZSBzb3J0LXZhcnMgKi9cclxuLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3VzZXInO1xyXG5pbXBvcnQgUHViU3ViIGZyb20gJ3B1YnN1Yi1qcyc7IC8vIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3B1YnN1Yi1qc1xyXG5pbXBvcnQgY29va2llU3RvcmFnZSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29va2llJztcclxuLy8gaW1wb3J0IFZhbGlkYXRvciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvZm9ybS12YWxpZGF0b3InO1xyXG5pbXBvcnQgdmlld1V0aWxzIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy92aWV3JztcclxuaW1wb3J0IHtDT05TVH0gZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2NvbnN0cyc7XHJcblxyXG4vLyB3aW5kb3cuJCA9ICQ7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTG9naW5Gb3JtKHNlbGVjdG9yQ3NzKSB7XHJcbiAgICBjb25zdCB7X2Zvcm1JZCwgX2J1dHRvblN1Ym1pdElkLCBfc2hvd0xvZ2luQm94QnRuSWQsIF9sb2dpbkJveH0gPSBzZWxlY3RvckNzcztcclxuICAgIGNvbnN0IHVzZXIgPSBVc2VyLCAvLyBzZXJ2aWNlXHJcbiAgICAgICAgJGZvcm0gPSAkKF9mb3JtSWQpLFxyXG4gICAgICAgICRlbWFpbCA9ICRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJtYWlsXCJdJyksXHJcbiAgICAgICAgJHRleHRBcmVhRGVzY3JpcHRpb24gPSAkKCcjZGVzY3JpcHRpb24nKTtcclxuICAgIC8vIGNvbnN0IG9wZW5lZENsYXNzID0gJ2QtYmxvY2snO1xyXG4gICAgLy8gY29uc3QgY2xvc2VDbGFzcyA9ICdkLW5vbmUnO1xyXG5cclxuICAgIGNvbnN0IHVzZXJMb2dpbkhlYWRlciA9IChfZm9ybURhdGEpID0+IHtcclxuICAgICAgICBjb25zdCBjYkVycm9yID0gKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAkKF9sb2dpbkJveCkuYXBwZW5kKCc8cD5yZXN1bHQuc3RhdHVzLm1lc3NhZ2U8L3A+Jyk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHVzZXIubG9naW4oX2Zvcm1EYXRhLCBjYkVycm9yKVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5kYXRhICYmIHJlc3VsdC5kYXRhLnRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2F2ZSB0aGUgaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGNvb2tpZVN0b3JhZ2Uuc2V0KENPTlNULmNvb2tpZVN0b3JhZ2UudG9rZW4sIHJlc3VsdC5kYXRhLnRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcubmF2LWxpbmsuanNfbG9nT3V0JykucGFyZW50KCkuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXF1ZXN0IHN1Y2NlZWRlZCB3aXRoIEpTT04gcmVzcG9uc2UnLCByZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UoJHRleHRBcmVhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMubWVzc2FnZSB8fCAnTG9naW4gc3VjY3Nlc3MnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LnN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSh0aGlzLiR0ZXh0QXJlYURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgPHA+c3RhdHVzOiAke3Jlc3VsdC5zdGF0dXMuc3RhdGV9PC9wPjxwPiBtZXNzYWdlOiAke3Jlc3VsdC5zdGF0dXMubWVzc2FnZX08L3A+YCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKCR0ZXh0QXJlYURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLm1lc3NhZ2UgfHwgJ0xvZ2luIGVycm9yJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzdWJtaXRGb3JtID0gZnVuY3Rpb24oZm9ybURhdGFPYmopIHtcclxuICAgICAgICBjb25zdCBlbWFpbCA9ICRlbWFpbC52YWwoKSxcclxuICAgICAgICAgICAgcGFzc3dvcmQgPSAkZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwicGFzc1wiXScpLnZhbCgpLFxyXG4gICAgICAgICAgICBfZm9ybURhdGEgPSBmb3JtRGF0YU9iaiB8fCB7ZW1haWwsIHBhc3N3b3JkfTtcclxuXHJcbiAgICAgICAgaWYgKHNlbGVjdG9yQ3NzLmlzTG9naW5JbnN0YWdyYW0pIHtcclxuICAgICAgICAgICAgLy8gdG9kbzogZGVsZXRlIG1lXHJcbiAgICAgICAgICAgIC8vIGFkZEluc3RhZ3JhbUFjY291bnQoe3VzZXJuYW1lOiAkZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwidXNlcm5hbWVcIl0nKS52YWwoKSwgcGFzc3dvcmR9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkZW1haWwudmFsKCRlbWFpbC52YWwoKS50b0xvY2FsZUxvd2VyQ2FzZSgpKTtcclxuICAgICAgICAgICAgdXNlckxvZ2luSGVhZGVyKF9mb3JtRGF0YSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBQdWJTdWIucHVibGlzaChDT05TVC5ldmVudHMuVVNFUl9MT0dHRUQsICdsb2dpbicpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGxvZ091dCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvb2tpZVN0b3JhZ2UucmVtb3ZlKENPTlNULmNvb2tpZVN0b3JhZ2UudG9rZW4pO1xyXG4gICAgICAgIFB1YlN1Yi5wdWJsaXNoKENPTlNULmV2ZW50cy5VU0VSX0xPR09VVCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGJpbmRFdmVudHMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCAkc2hvd0xvZ2luQm94QnRuSWQgPSAkKF9zaG93TG9naW5Cb3hCdG5JZCk7XHJcbiAgICAgICAgY29uc3QgJGxvZ2luQm94ID0gJChfbG9naW5Cb3gpO1xyXG4gICAgICAgIGNvbnN0IG9wZW5lZENsYXNzID0gJ2QtYmxvY2snO1xyXG4gICAgICAgIGNvbnN0IGNsb3NlQ2xhc3MgPSAnZC1ub25lJztcclxuXHJcbiAgICAgICAgJHNob3dMb2dpbkJveEJ0bklkLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzZWxlY3RvckNzcy5pc0xvZ2luSW5zdGFncmFtKSB7XHJcbiAgICAgICAgICAgICAgICAkbG9naW5Cb3guY3NzKHsndG9wJzogMCwgJ3JpZ2h0JzogMH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdiZy1saWdodCBib3JkZXIgbXQtNSBteC1hdXRvIHBvc2l0aW9uLWFic29sdXRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJGxvZ2luQm94LmFkZENsYXNzKG9wZW5lZENsYXNzKS5yZW1vdmVDbGFzcyhjbG9zZUNsYXNzKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgJGJ1dHRvblN1Ym1pdCA9ICQoX2J1dHRvblN1Ym1pdElkKSxcclxuICAgICAgICAgICAgY3NzVmFsaWRhdGlvbkNsYXNzID0gJ2Zvcm0tdmFsaWRhdGlvbic7XHJcblxyXG4gICAgICAgICRidXR0b25TdWJtaXQub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zdCBmb3JtID0gJGZvcm0uZ2V0KDApO1xyXG4gICAgICAgICAgICAvLyBjb25zdCB2YWxpZGF0b3IgPSBuZXcgVmFsaWRhdG9yKCRmb3JtKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codmFsaWRhdG9yLnZhbGlkYXRlKCkpO1xyXG4gICAgICAgICAgICBpZiAoZm9ybS5jaGVja1ZhbGlkaXR5KCkgJiYgdmlld1V0aWxzLmlzRW1haWwoJGVtYWlsLnZhbCgpKSkge1xyXG4gICAgICAgICAgICAgICAgc3VibWl0Rm9ybSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gSGlnaGxpZ2h0IGVycm9yc1xyXG4gICAgICAgICAgICAgICAgaWYgKGZvcm0ucmVwb3J0VmFsaWRpdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtLnJlcG9ydFZhbGlkaXR5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAkZm9ybS5hZGRDbGFzcyhjc3NWYWxpZGF0aW9uQ2xhc3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5uYXYtbGluay5qc19sb2dPdXQnKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGxvZ091dCgpO1xyXG4gICAgICAgICAgICAkKGUudGFyZ2V0KS5wYXJlbnQoKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UoJHRleHRBcmVhRGVzY3JpcHRpb24sICdMb2dnZWQgb3V0Jyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFB1YlN1Yi5zdWJzY3JpYmUoQ09OU1QuZXZlbnRzLlVTRVJfTE9HT1VULCAobXNnKSA9PiB7XHJcbiAgICAgICAgICAgICQoQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyTmF2TG9naW5CdG4pLmFkZENsYXNzKG9wZW5lZENsYXNzKS5yZW1vdmVDbGFzcyhjbG9zZUNsYXNzKTsgLy8gLnNob3coKTtcclxuICAgICAgICAgICAgJChDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJSZWdCdG4pLmFkZENsYXNzKG9wZW5lZENsYXNzKS5yZW1vdmVDbGFzcyhjbG9zZUNsYXNzKTtcclxuICAgICAgICAgICAgJCgnLm5hdi1saW5rLmpzX2xvZ091dCcpLmFkZENsYXNzKGNsb3NlQ2xhc3MpLnJlbW92ZUNsYXNzKG9wZW5lZENsYXNzKTsgLy8gLmhpZGUoKTtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3JMb2dpblN0YXRlID0gJy5qc19tZXNzYWdlX2xvZ2dlZC0tdGV4dCc7XHJcbiAgICAgICAgICAgICQoc2VsZWN0b3JMb2dpblN0YXRlKS50ZXh0KCfQktGLINCy0YvRiNC70Lgg0LjQtyDQsNC60LrQsNGD0L3RgtCwJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpc0xvZ2luQnRuQ2xpY2sgPSAkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnbmF2Lm5hdmJhcicpLmZpbmQoJGxvZ2luQm94KS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzQWRkSW5zdGFncmFtQnRuQ2xpY2tlZCA9ICQoZXZlbnQudGFyZ2V0KS5hdHRyKCdpZCcpID09PSBDT05TVC51aVNlbGVjdG9ycy5pbnN0YWdyYW0uYWRkQWNjb3VudEJ0bklkO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFpc0xvZ2luQnRuQ2xpY2sgJiYgJGxvZ2luQm94Lmhhc0NsYXNzKG9wZW5lZENsYXNzKSAmJiAhaXNBZGRJbnN0YWdyYW1CdG5DbGlja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAkbG9naW5Cb3guYWRkQ2xhc3MoY2xvc2VDbGFzcykucmVtb3ZlQ2xhc3Mob3BlbmVkQ2xhc3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAgICAgYmluZEV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5pdFxyXG4gICAgfTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5qcyIsImNvbnN0IGNvbnZlcnNhdGlvbiA9IHtcclxuICAgICdkYXRhJzoge1xyXG4gICAgICAgICdtZXRhJzoge1xyXG4gICAgICAgICAgICAncGFnaW5hdGlvbic6IHtcclxuICAgICAgICAgICAgICAgICdwcmV2X2N1cnNvcic6ICcuLi4nLFxyXG4gICAgICAgICAgICAgICAgJ25leHRfY3Vyc29yJzogJy4uLidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ21lc3NhZ2VzJzogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICd1c2VybmFtZSc6ICdOaWthJyxcclxuICAgICAgICAgICAgICAgICAgICAncHJvZmlsZV9waWNfdXJsJzogJ2h0dHBzOi8vaW5zdGFncmFtLmZoZWwyLTEuZm5hLmZiY2RuLm5ldC92cC9jOWQzYWRkNGIzNDc0OGUxMmE0MjI5MzUwZmI2MTFlNC81Q0M2NjdCOC90NTEuMjg4NS0xOS9zMTUweDE1MC80MTcxMDUyN18zMTkwMDQ3ODg2NTUwODJfMTY1MTUxNTcwNjcxOTYwMDY0MF9uLmpwZz9fbmNfaHQ9aW5zdGFncmFtLmZoZWwyLTEuZm5hLmZiY2RuLm5ldCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3NpZGUnOiAnbGVmdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAncGhvdG8nLCAvLyBwaG90bywgdmlkZW8sIGdpZiwgbGlrZSwgbGlua1xyXG4gICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6ICdodHRwOi8vd3d3LnpyLnJ1L2Qvc3RvcnkvYWQvOTEzNTgxLzAtMC5qcGcnLFxyXG4gICAgICAgICAgICAgICAgICAgICd0aW1lc3RhbXAnOiAnMTQ6MzMnXHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAnc2lkZSc6ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAndGV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogJ9CZ0L7RgyhyaWdodCknLFxyXG4gICAgICAgICAgICAgICAgICAgICd0aW1lc3RhbXAnOiAnMTQ6MzInXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICd1c2VybmFtZSc6ICdOaWthJyxcclxuICAgICAgICAgICAgICAgICAgICAncHJvZmlsZV9waWNfdXJsJzogJ2h0dHBzOi8vaW5zdGFncmFtLmZoZWwyLTEuZm5hLmZiY2RuLm5ldC92cC9jOWQzYWRkNGIzNDc0OGUxMmE0MjI5MzUwZmI2MTFlNC81Q0M2NjdCOC90NTEuMjg4NS0xOS9zMTUweDE1MC80MTcxMDUyN18zMTkwMDQ3ODg2NTUwODJfMTY1MTUxNTcwNjcxOTYwMDY0MF9uLmpwZz9fbmNfaHQ9aW5zdGFncmFtLmZoZWwyLTEuZm5hLmZiY2RuLm5ldCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3NpZGUnOiAnbGVmdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAndGV4dCcsIC8vIHBob3RvLCB2aWRlbywgZ2lmLCBsaWtlLCBsaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogJ9CX0LDRhdC+0LTQuCDRgdGO0LTQsDogZ29vZ2xlLmNvbScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RpbWVzdGFtcCc6ICcxNDozNCdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3VzZXJuYW1lJzogJ05pa2EnLFxyXG4gICAgICAgICAgICAgICAgICAgICdwcm9maWxlX3BpY191cmwnOiAnaHR0cHM6Ly9pbnN0YWdyYW0uZmhlbDItMS5mbmEuZmJjZG4ubmV0L3ZwL2M5ZDNhZGQ0YjM0NzQ4ZTEyYTQyMjkzNTBmYjYxMWU0LzVDQzY2N0I4L3Q1MS4yODg1LTE5L3MxNTB4MTUwLzQxNzEwNTI3XzMxOTAwNDc4ODY1NTA4Ml8xNjUxNTE1NzA2NzE5NjAwNjQwX24uanBnP19uY19odD1pbnN0YWdyYW0uZmhlbDItMS5mbmEuZmJjZG4ubmV0JyxcclxuICAgICAgICAgICAgICAgICAgICAnc2lkZSc6ICdsZWZ0JyxcclxuICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICdsaW5rJywgLy8gcGhvdG8sIHZpZGVvLCBnaWYsIGxpa2UsIGxpbmtcclxuICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiAnaHR0cDovL3d3dy56ci5ydS9kL3N0b3J5L2FkLzkxMzU4MS8wLTAuanBnJyxcclxuICAgICAgICAgICAgICAgICAgICAndGltZXN0YW1wJzogJzE0OjMzJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAnc2lkZSc6ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAncGhvdG8nLFxyXG4gICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6ICdodHRwczovL3MuYXV0by5kcm9tLnJ1L2kyNDIyNC9wdWJzLzQvNjMwNjAvZ2VuMzQwXzI4ODA2MzYuanBnJyxcclxuICAgICAgICAgICAgICAgICAgICAndGltZXN0YW1wJzogJzE5OjM4J1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgdXNlckxpc3QgPSB7XHJcbiAgICAnZGF0YSc6IHtcclxuICAgICAgICAnc2V0dGluZ3MnOiB7XHJcbiAgICAgICAgICAgICdkb19ub3RpZmljYXRpb24nOiB0cnVlLFxyXG4gICAgICAgICAgICAnaW52b2tlX2luX21pbGxpcyc6IDMwMDBcclxuICAgICAgICB9LFxyXG4gICAgICAgICdtZXRhJzogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAndXNlcm5hbWUnOiAndGhlX3Jvc3R5c2xhdicsXHJcbiAgICAgICAgICAgICAgICAndW5yZWFkX2NvbnZlcnNhdGlvbnMnOiAwLFxyXG4gICAgICAgICAgICAgICAgJ3BhZ2luYXRpb24nOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3ByZXZfY3Vyc29yJzogJy4uLicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ25leHRfY3Vyc29yJzogJy4uLidcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAnY29udmVyc2F0aW9ucyc6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6ICcxJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAn0KLQtdGB0YIxJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RvJzogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd1c2VybmFtZSc6ICdkaWFuYWNvYmVyNycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Byb2ZpbGVfcGljX3VybCc6ICdodHRwczovL3MuYXV0by5kcm9tLnJ1L2kyNDIyNC9wdWJzLzQvNjMwNjAvZ2VuMzQwXzI4ODA2MzYuanBnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndXNlcm5hbWUnOiAneW91cl9kaWV0YScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Byb2ZpbGVfcGljX3VybCc6ICdodHRwczovL3MuYXV0by5kcm9tLnJ1L2kyNDIyNC9wdWJzLzQvNjMwNjAvZ2VuMzQwXzI4ODA2MzYuanBnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnbGFzdF9tZXNzYWdlJzogJ9C50L7RgycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdpc191bnJlYWQnOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiAnMicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICduYW1lJzogJ1NlcmdhbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAndG8nOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3VzZXJuYW1lJzogJ2RpYW5hY29iZXI3JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncHJvZmlsZV9waWNfdXJsJzogJ2h0dHBzOi8vcy5hdXRvLmRyb20ucnUvaTI0MjI0L3B1YnMvNC82MzA2MC9nZW4zNDBfMjg4MDYzNi5qcGcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdwYXJhbV92YWx1ZSc6ICdkaWFuYWNvYmVyNycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdsYXN0X21lc3NhZ2UnOiAn0JbRltC90L7Rh9C60L4gXFx1RDgzRFxcdURFMEEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnaXNfdW5yZWFkJzogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQge3VzZXJMaXN0LCBjb252ZXJzYXRpb259O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL21lc3NhZ2VzL2RhdGFTZXJ2ZXIuanMiLCJpbXBvcnQgKiBhcyBkYXRhIGZyb20gJy4vZGF0YVNlcnZlcic7XHJcbi8vIGltcG9ydCBVc2VyIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy91c2VyJztcclxuLy8gaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3NwaW5uZXInO1xyXG4vKlxyXG5pbXBvcnQgdmlld1V0aWxzIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy92aWV3JztcclxuXHJcbmZ1bmN0aW9uIGFkZE9uTG9hZEhhbmRsZXJzKCkge1xyXG4gICAgLy8gJCgnLmpzX3JlcGVhdC1zZWN1cml0eS1jb2RlJykub24oJ2NsaWNrJywgKGUpID0+IHtcclxuXHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICAkKCcuanNfYWRkLWluc3RhZ3JhbS1hY2NvdW50Jykub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCBidG4gPSAkKGUudGFyZ2V0KTtcclxuICAgICAgICBjb25zdCAkbW9kYWxCb2R5ID0gYnRuLmNsb3Nlc3QoJy5tb2RhbCcpLmZpbmQoJy5tb2RhbC1kaWFsb2cgLm1vZGFsLWJvZHknKTtcclxuICAgICAgICBjb25zdCB1c2VybmFtZSA9ICRtb2RhbEJvZHkuZmluZCgnaW5wdXRbbmFtZT1cInVzZXJuYW1lXCJdJykudmFsKCkudHJpbSgpO1xyXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkID0gJG1vZGFsQm9keS5maW5kKCdpbnB1dFtuYW1lPVwicGFzc1wiXScpLnZhbCgpLnRyaW0oKTtcclxuICAgICAgICBjb25zdCAkZm9ybSA9ICQoJ2Zvcm0nLCAkbW9kYWxCb2R5KTtcclxuICAgICAgICBjb25zdCBmb3JtID0gJGZvcm0uZ2V0KDApO1xyXG4gICAgICAgIGNvbnN0IGNzc1ZhbGlkYXRpb25DbGFzcyA9ICdmb3JtLXZhbGlkYXRpb24nO1xyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIC8vIGNvbnN0IHZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoJGZvcm0pO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbGlkYXRvci52YWxpZGF0ZSgpKTtcclxuICAgICAgICBpZiAoZm9ybS5jaGVja1ZhbGlkaXR5KCkpIHtcclxuICAgICAgICAgICAgLy8gYWRkSW5zdGFncmFtQWNjb3VudCh7dXNlcm5hbWUsIHBhc3N3b3JkfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gSGlnaGxpZ2h0IGVycm9yc1xyXG4gICAgICAgICAgICBpZiAoZm9ybS5yZXBvcnRWYWxpZGl0eSkge1xyXG4gICAgICAgICAgICAgICAgZm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICRmb3JtLmFkZENsYXNzKGNzc1ZhbGlkYXRpb25DbGFzcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXVzZXJuYW1lIHx8ICFwYXNzd29yZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm90IHZhbGlkIC0gRW1wdHkgZmllbGRzJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkTGlzdEhhbmRsZXIoLyEqIHVzZXJuYW1lKiEvKSB7XHJcbiAgICAvLyAkKCcjeW91ck1vZGFsSUQnKS5vbignc2hvdy5icy5tb2RhbCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgIC8vICAgICB2YXIgeW91cnBhcmFtZXRlciA9IGUucmVsYXRlZFRhcmdldC5kYXRhc2V0LnlvdXJwYXJhbWV0ZXI7XHJcbiAgICAvLyAgICAgLy8gRG8gc29tZSBzdHVmZiB3LyBpdC5cclxuICAgIC8vIH0pO1xyXG4gICAgbGV0IGNoZWNrcG9pbnRUeXBlID0gJyc7XHJcblxyXG4gICAgJCgnLmpzX3Bhc3MtY2hlY2twb2ludC1idG4nKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0ICRidXR0b24gPSAkKGUudGFyZ2V0KTtcclxuICAgICAgICBjb25zdCB1c2VybmFtZSA9ICRidXR0b24uZGF0YSgndXNlcm5hbWUnKTtcclxuICAgICAgICBjaGVja3BvaW50VHlwZSA9ICRidXR0b24uZGF0YSgnY2hlY2twb2ludFR5cGUnKSB8fCBjaGVja3BvaW50VHlwZTtcclxuICAgICAgICAvLyAkKCcjc2VjdXJpdHktY29kZScpLmRhdGEoJ2NoZWNrcG9pbnRUeXBlJywgY2hlY2twb2ludFR5cGUpO1xyXG4gICAgICAgIC8vIHRvZG8gYWRkICdjaGVja3BvaW50VHlwZScgdG8gbW9kYWxcclxuICAgICAgICBjb25zdCBzZW5kVG8gPSAoY2hlY2twb2ludFR5cGUgPT09ICdQSE9ORScpID8gJ9GC0LXQu9C10YTQvtC9JyA6ICdlbWFpbCc7XHJcbiAgICAgICAgLy8gU3Bpbm5lci5zdGFydCgkYnV0dG9uLCAnZmEta2V5Jyk7XHJcblxyXG4gICAgICAgIGlmIChjaGVja3BvaW50VHlwZSA9PT0gJ0VNQUlMX09SX1BIT05FJykge1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgLy8g0LjQvdC/0YPRgtGLINGB0L/RgNGP0YLQsNC90YssXHJcbiAgICAgICAgICAgIC8vINC/0L7QutCw0LfQsNGC0Ywg0YHQtdGA0YvQtSDQv9C10YDQtdC60LvRjtGH0LDRgtC10LvQuCAo0LLRi9Cx0YDQsNC7INGC0LjQvylcclxuICAgICAgICAgICAgLy8g0LXRgdGC0Ywg0LrQvdC+0L/QutCwINCX0LDQv9GA0L7RgdC40YLRjCDQutC+0LQg0L/QvtC00YLQstC10YDQttC00LXQvdC40LVcclxuICAgICAgICAgICAgJCgnI3NlY3VyaXR5LWNvZGUtcGhvbmVPcmVtYWlsJykubW9kYWwoe3Nob3c6IHRydWUsIHVzZXJuYW1lfSk7XHJcblxyXG4gICAgICAgICAgICAvLyDQvdC1INC+0YLQv9GA0LDQstC70Y/QtdC8INGA0LXQutCy0LXRgdGCXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFVzZXIuZ2V0U2VjdXJpdHlLZXkodXNlcm5hbWUsIGNoZWNrcG9pbnRUeXBlKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlY3VyaXR5S2V5IHJlY2VpdmVkOicsIHJlc3VsdC5zdGF0dXMuc3RhdGUpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cy5zdGF0ZSA9PT0gJ29rJykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJG1vZGFsID0gJCgnI3NlY3VyaXR5LWNvZGUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTcGlubmVyLnN0b3AoJGJ1dHRvbiwgJ2ZhLWtleScpO1xyXG4gICAgICAgICAgICAgICAgJCgnLmpzX3N1Y2Nlc3MtZmVlZGJhY2snLCAkbW9kYWwpLmVtcHR5KCkudGV4dChg0JrQu9GO0Ycg0L/QvtC00YLQstC10YDQttC00LXQvdC40Y8g0LHRi9C7INC+0YLQv9GA0LDQstC70LXQvSDQktCw0Lwg0L3QsCAke3NlbmRUb31gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gaW5zaWRlIG1vZGFsXHJcbiAgICAkKCcuanNfY29uZmlybS1zZWN1cml0eS1jb2RlJykub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCBidG4gPSAkKGUudGFyZ2V0KTtcclxuICAgICAgICBjb25zdCB1c2VybmFtZSA9IGJ0bi5kYXRhKCd1c2VybmFtZScpO1xyXG4gICAgICAgIGNvbnN0ICRrZXlJbnB1dCA9IGJ0bi5jbG9zZXN0KCcubW9kYWwnKS5maW5kKCcubW9kYWwtZGlhbG9nIGZvcm0gaW5wdXQuanNfY29uZmlybS1rZXknKTtcclxuICAgICAgICBjb25zdCBrZXkgPSAka2V5SW5wdXQudmFsKCkudHJpbSgpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RhbCA9IGJ0bi5jbG9zZXN0KCcubW9kYWwnKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICBpZiAoa2V5Lmxlbmd0aCAhPT0gNikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFVzZXIuY29uZmlybVNlY3VyaXR5S2V5KGtleSwgdXNlcm5hbWUpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cy5zdGF0ZSAhPT0gJ29rJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdqc19jb25maXJtOicsIHJlc3VsdC5zdGF0dXMuc3RhdGUsICdjbG9zZSBtb2RhbCcpO1xyXG4gICAgICAgICAgICAkbW9kYWwubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnInKTtcclxuICAgICAgICAgICAgJCgnLmpzX3N1Y2Nlc3MtZmVlZGJhY2snLCAkbW9kYWwpLnRleHQoJ9CX0LDQv9GA0L7RgSDQvdC1INC+0YLQv9GA0LDQstC70LXQvScpLmNzcygnY29sb3InLCAncmVkJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCdmb3JtIGlucHV0W21pbmxlbmd0aF0nKS5vbignYmx1cicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBsZW4gPSAkKHRoaXMpLnZhbCgpLnRyaW0oKS5sZW5ndGg7XHJcbiAgICAgICAgY29uc3QgbWluTGVuID0gTnVtYmVyKCQodGhpcykuYXR0cignbWlubGVuZ3RoJykpO1xyXG4gICAgICAgIC8vIGNvbnN0IG1lc3NhZ2UgPSBtaW5MZW4gPD0gbGVuID8gJycgOiBtaW5MZW4gKyAnIGNoYXJhY3RlcnMgbWluaW11bSc7XHJcbiAgICAgICAgaWYgKG1pbkxlbiAhPT0gbGVuKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuY3NzKCdib3JkZXJDb2xvcicsICdyZWQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNzcygnYm9yZGVyQ29sb3InLCAnI2NlZDRkYScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLnNldEN1c3RvbVZhbGlkaXR5KG1lc3NhZ2UpXHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBvbkhpZGVNb2RhbChlKSB7XHJcbiAgICAgICAgY29uc3QgJG1vZGFsID0gJChlLnRhcmdldCk7XHJcbiAgICAgICAgJG1vZGFsLmZpbmQoJy5maXJzdC1zdGVwJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICRtb2RhbC5maW5kKCcuc2Vjb25kLXN0ZXAnKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgJCgnLmpzX2NvbmZpcm0ta2V5JykudmFsKCcnKTtcclxuICAgICAgICAkKCcuanNfc3VjY2Vzcy1mZWVkYmFjaycsICRtb2RhbCkucmVtb3ZlQXR0cignc3R5bGUnKS5lbXB0eSgpO1xyXG4gICAgfVxyXG4gICAgJCgnI3NlY3VyaXR5LWNvZGUtcGhvbmVPcmVtYWlsJykub24oJ2hpZGUuYnMubW9kYWwnLCBvbkhpZGVNb2RhbCk7XHJcbiAgICAkKCcjc2VjdXJpdHktY29kZScpLm9uKCdoaWRlLmJzLm1vZGFsJywgb25IaWRlTW9kYWwpO1xyXG5cclxuICAgIC8vIFwiUEhPTkVfT1JfRU1BSUxcIiBtb2RhbFxyXG4gICAgJCgnLmpzX2dldC1zZWN1cml0eS1jb2RlLXBob25lT3JlbWFpbCcpLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgJG1vZGFsID0gJCgnI3NlY3VyaXR5LWNvZGUtcGhvbmVPcmVtYWlsJyk7XHJcbiAgICAgICAgY29uc3QgdHlwZVNlbGVjdGVkID0gJChlLnRhcmdldCkuY2xvc2VzdCgkbW9kYWwpLmZpbmQoJy5qc19idG4tdHlwZS1zd2l0Y2hlciBpbnB1dDpjaGVja2VkJyk7XHJcbiAgICAgICAgY29uc3QgY2hlY2twb2ludFR5cGVBY3RpdmUgPSB0eXBlU2VsZWN0ZWQudmFsKCk7XHJcbiAgICAgICAgY29uc3Qgc2VuZFRvID0gKGNoZWNrcG9pbnRUeXBlQWN0aXZlID09PSAnUEhPTkUnKSA/ICfRgtC10LvQtdGE0L7QvScgOiAnZW1haWwnO1xyXG4gICAgICAgIGNvbnN0IG1vZGFsQ29uZmlnID0gJG1vZGFsLmRhdGEoKVsnYnMubW9kYWwnXS5fY29uZmlnO1xyXG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gbW9kYWxDb25maWcudXNlcm5hbWU7XHJcbiAgICAgICAgVXNlci5nZXRTZWN1cml0eUtleSh1c2VybmFtZSwgY2hlY2twb2ludFR5cGVBY3RpdmUpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAvLyDQv9GA0Lgg0L3QsNC20LDRgtC40LggXCLQl9Cw0L/RgNC+0YHQuNGC0Ywg0LrQvtC0INC/0L7QtNGC0LLQtdGA0LbQtNC10L3QuNC1XCIgLSDQvtGC0L/QsNGA0LvRj9C10YLRgdGPINGA0LXQutCy0LXRgdGCIFwi0YHRgtCw0YDRgiDRh9C10LrQv9C+0LjQvdGCXCIg0L/QvtGP0LLQu9GP0LXRgtGM0YHRjyDQuNC90L/Rg9GCINC4INC60L3QvtC/0LrQsCDQtNGA0YPQs9C40YUg0YLQuNC/0LDRhVxyXG4gICAgICAgICAgICAvLyBnZXQgc2VsZWN0ZWQgYnV0dG9uXHJcblxyXG4gICAgICAgICAgICAvLyDQv9C10YDQtdC60LvRjtGH0LDRgtC10LvRjCjRgdC10YDRi9C5KSDQuCDQutC90L7Qv9C60LAgXCLQl9Cw0L/RgNC+0YHQuNGC0Ywg0LrQvtC0INC/0L7QtNGC0LLQtdGA0LbQtNC10L3QuNC1XCIg0LjRgdGH0LXQt9Cw0Y7RglxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2VjdXJpdHlLZXkgcmVjZWl2ZWQ6JywgcmVzdWx0LnN0YXR1cy5zdGF0ZSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzLnN0YXRlID09PSAnb2snKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuZmlyc3Qtc3RlcCcsICRtb2RhbCkuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgJCgnLnNlY29uZC1zdGVwJywgJG1vZGFsKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcuanNfc3VjY2Vzcy1mZWVkYmFjaycsICRtb2RhbCkuZW1wdHkoKS50ZXh0KGDQmtC70Y7RhyDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjRjyDQsdGL0Lsg0L7RgtC/0YDQsNCy0LvQtdC9INCS0LDQvCDQvdCwICR7c2VuZFRvfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuKi9cclxuXHJcbi8qKlxyXG4gKiBJbml0IGhlYWRlclxyXG4gKi9cclxuLypcclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRPbGQoKSB7XHJcbiAgICBjb25zdCAkbXNnTGlzdCA9ICQoJy5tZXNzYWdlcy1saXN0Jyk7XHJcbiAgICAvLyBjaGVjayB3ZSBhcmUgaW4gcHJvZmlsZSBwYWdlXHJcbiAgICBpZiAoISRtc2dMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHRva2VuID0gVXNlci5nZXRUb2tlbigpOyAvLyB1cGQgdG86IFVzZXIuZ2V0VG9rZW4oKVxyXG4gICAgY29uc3QgbWV0YWRhdGEgPSBVc2VyLmdldE1ldGFkYXRhKHRva2VuKTtcclxuICAgIGNvbnN0IHJlc2VuZFJlcXVlc3QgPSAoKSA9PiBVc2VyLmdldE1ldGFkYXRhKHRva2VuKTtcclxuICAgIGxldCBpc1NlbmRSZXFPbmNlID0gZmFsc2U7XHJcbiAgICBjb25zdCBjaGVja1Jlc3BvbnNlID0gKHJlc3VsdCwgaXNSZXNlbmRSZXF1ZXN0KSA9PiB7XHJcbiAgICAgICAgaWYgKCFyZXN1bHQuc3RhdHVzLnN0YXRlID09PSAnb2snIHx8ICFyZXN1bHQuZGF0YSB8fCAhJG1zZ0xpc3QubGVuZ3RoIHx8IGlzUmVzZW5kUmVxdWVzdCkge1xyXG4gICAgICAgICAgICAvLyDQv9GA0L7QstC10YDRj9C8INC+0LTQuNC9INGA0LDQtyDQvdCw0LvQuNGH0LjQtSByZXN1bHQuZGF0YS5hY2NvdW50cy5pbmZvXHJcbiAgICAgICAgICAgICRtc2dMaXN0LmVtcHR5KCk7XHJcbiAgICAgICAgICAgICQoYDxsaSBjbGFzcz1cIm1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cIm10LTAgbWItM1wiPtCd0Lgg0L7QtNC90L7Qs9C+INCQ0LrQutCw0YPQvdGC0LAg0L3QtSDQtNC+0LHQsNCy0LvQtdC90L48L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+YCkuYXBwZW5kVG8oJG1zZ0xpc3QpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc2VuZFJlcXVlc3QoKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja1Jlc3BvbnNlKHJlc3VsdCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmVxdWVzdCByZXNlbmQnKTtcclxuICAgICAgICAgICAgfSwgMzUwMCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g0LLRi9Cy0L7QtCDRgNC10LfRg9C70YzRgtCw0YLQvtCyIChkYXRhLmFjY291bnRzLmluZm8pXHJcbiAgICAgICAgJCgnLnByb2ZpbGUtdXNlciAuc3Bpbm5lci1ib3gnKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgZmlsbExpc3QoJG1zZ0xpc3QsIHJlc3VsdC5kYXRhLmFjY291bnRzKTtcclxuICAgICAgICBhZGRMaXN0SGFuZGxlcigpO1xyXG4gICAgfTtcclxuXHJcbiAgICBhZGRPbkxvYWRIYW5kbGVycygpO1xyXG5cclxuICAgIG1ldGFkYXRhLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIC8vINC/0YDQvtCy0LXRgNGP0Lwg0L7QtNC40L0g0YDQsNC3INC90LDQu9C40YfQuNC1IHJlc3VsdC5kYXRhLmFjY291bnRzLmluZm9cclxuICAgICAgICBsZXQgaXNSZXNlbmRSZXF1ZXN0ID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5kYXRhICYmIHJlc3VsdC5kYXRhLmFjY291bnRzICYmICFpc1NlbmRSZXFPbmNlKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5kYXRhLmFjY291bnRzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghaXRlbS5pbmZvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNSZXNlbmRSZXF1ZXN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpc1NlbmRSZXFPbmNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjaGVja1Jlc3BvbnNlKHJlc3VsdCwgaXNSZXNlbmRSZXF1ZXN0KTtcclxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAvLyDQvNC+0LbQtdGCINC40L3RhNC+INC+0YLRgdGD0YLRgdCy0L7QstCw0YLRjCAtINGB0LTQtdC70LDRgtGMINC10YnQtSDRgNCw0Lcg0LfQsNC/0YDQvtGBINGH0LXRgNC10LcgMyDRgdC10LouXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UoJCgnLmVycm9yLW1zZycpLFxyXG4gICAgICAgICAgICAgICAgZXJyLnN0YXR1cyB8fCAnJyxcclxuICAgICAgICAgICAgICAgICfQndC1INC/0L7Qu9GD0YfQuNC70L7RgdGMINC30LDQs9GA0YPQt9C40YLRjCDQtNC+0YHRgtGD0L/QvdGL0LUgSW5zdGFncmFtINCw0LrQutCw0YPQvdGC0YsnKTtcclxuICAgICAgICB9LCAzMDAwKTtcclxuICAgICAgICAkKCcuc3Bpbm5lci1ib3gnKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICB9KTtcclxufVxyXG4qL1xyXG5cclxuZnVuY3Rpb24gZmlsbExpc3QoJGxpc3QsIGRhdGFBcnJheSkge1xyXG4gICAgY29uc3QgaXRlbXMgPSBkYXRhQXJyYXk7XHJcbiAgICBjb25zdCBjTGlzdCA9ICRsaXN0O1xyXG4gICAgLy8gY29uc3QgZGVmYXVsdEF2YXRhclNyYyA9ICdodHRwczovL2kuaW1ndXIuY29tL2pOTlQ0TEUucG5nJztcclxuICAgIGNvbnN0IGluc2VydE1zZyA9ICh2YWx1ZSwgdHlwZSwgY3NzQ2xzKSA9PiB7XHJcbiAgICAgICAgbGV0IHN0ciA9ICcnO1xyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICdwaG90byc6XHJcbiAgICAgICAgICAgICAgICBzdHIgPSBgPGRpdiBjbGFzcz1cImNoYXQtaW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3ZhbHVlfVwiIGFsdD1cIkNvbnRlbnQgSW1hZ2VcIiBjbGFzcz1cImNvbnRlbnQtaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PmA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbGluayc6XHJcbiAgICAgICAgICAgICAgICBzdHIgPSBgPGRpdiBjbGFzcz1cImNoYXQtaW1nXCI+XHJcbiAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiJHt2YWx1ZX1cIj4ke3ZhbHVlfTwvYT5gO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHN0ciA9IGA8ZGl2IGNsYXNzPVwiY2hhdC10ZXh0XCIgPiR7dmFsdWV9PC9kaXY+YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0cjtcclxuICAgIH07XHJcblxyXG4gICAgLypcclxuICAgIGNvbnN0IHN0YXRzID0gKGluZm8pID0+IHtcclxuICAgICAgICBjb25zdCB0cGwgPSBgPGRpdiBjbGFzcz1cImNvbFwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LWlubGluZSB0ZXh0LWNlbnRlciBjb3VudHMtbGlzdFwiPlxyXG4gICAgICAgICAgICAkeyhpbmZvKVxyXG4gICAgICAgICAgICA/IGAke2luc2VydEl0ZW0oaW5mb1snbWVkaWFfY291bnQnXSwgJ9Cf0YPQsdC70LjQutCw0YbQuNC4JywgJ21lZGlhLWNvdW50Jyl9XHJcbiAgICAgICAgICAgICAgICAke2luc2VydEl0ZW0oaW5mb1snZm9sbG93ZXJfY291bnQnXSwgJ9Cf0L7QtNC/0LjRgdGH0LjQutC4JywgJ2ZvbGxvd2VyLWNvdW50Jyl9XHJcbiAgICAgICAgICAgICAgICAke2luc2VydEl0ZW0oaW5mb1snZm9sbG93aW5nX2NvdW50J10sICfQn9C+0LTQv9C40YHQutC4JywgJ2ZvbGxvd2luZy1jb3VudCcpfWBcclxuICAgICAgICAgICAgOiBgJHtpbnNlcnRJdGVtKGZhbHNlLCAn0J/Rg9Cx0LvQuNC60LDRhtC40LgnLCAnbWVkaWEtY291bnQnKX1cclxuICAgICAgICAgICAgICAgICR7aW5zZXJ0SXRlbShmYWxzZSwgJ9Cf0L7QtNC/0LjRgdGH0LjQutC4JywgJ2ZvbGxvd2VyLWNvdW50Jyl9XHJcbiAgICAgICAgICAgICAgICAke2luc2VydEl0ZW0oZmFsc2UsICfQn9C+0LTQv9C40YHQutC4JywgJ2ZvbGxvd2luZy1jb3VudCcpfWBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PmA7XHJcbiAgICAgICAgcmV0dXJuIHRwbDtcclxuICAgIH07XHJcbiAgICAqL1xyXG4gICAgY0xpc3QuZW1wdHkoKS5hZGRDbGFzcygnYm9yZGVyLWxpZ2h0LWNvbG9yJyk7XHJcbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGl0ZW07XHJcbiAgICAgICAgLy8gY29uc3QgY2hlY2twb2ludCA9IGl0ZW0uY2hlY2twb2ludCB8fCBpdGVtO1xyXG5cclxuICAgICAgICBpZiAobWVzc2FnZS5zaWRlID09PSAnbGVmdCcpIHtcclxuICAgICAgICAgICAgJChgPGxpIGNsYXNzPVwiY2hhdC1pdGVtIGNoYXQtaXRlbS1sZWZ0XCIgdmFsdWU9XCIke21lc3NhZ2UudmFsdWV9XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAkeyhtZXNzYWdlWydwcm9maWxlX3BpY191cmwnXSlcclxuICAgICAgICAgICAgICAgICAgICA/IGA8ZGl2IGNsYXNzPVwiY2hhdC1pbWctYm94XCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke21lc3NhZ2VbJ3Byb2ZpbGVfcGljX3VybCddfVwiIGFsdD1cIlVzZXIgQXZhdGFyXCIgY2xhc3M9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjaGF0LXVzZXJuYW1lIHRleHQtbXV0ZWRcIj4ke21lc3NhZ2UudXNlcm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICR7aW5zZXJ0TXNnKG1lc3NhZ2UudmFsdWUsIG1lc3NhZ2UudHlwZSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJjaGF0LXRpbWUtdGV4dFwiPiR7bWVzc2FnZS50aW1lc3RhbXB9PC9zbWFsbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPmApLmFwcGVuZFRvKGNMaXN0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKGA8bGkgY2xhc3M9XCJjaGF0LWl0ZW0ganVzdGlmeS1jb250ZW50LWVuZCBjaGF0LWl0ZW0tcmlnaHRcIiB2YWx1ZT1cIiR7bWVzc2FnZS52YWx1ZX1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAke2luc2VydE1zZyhtZXNzYWdlLnZhbHVlLCBtZXNzYWdlLnR5cGUpfVxyXG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInB1bGwtcmlnaHQgY2hhdC10aW1lLXRleHRcIj4ke21lc3NhZ2UudGltZXN0YW1wfTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+YCkuYXBwZW5kVG8oY0xpc3QpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGZpbGxVc2VyTGlzdCgkbGlzdCwgZGF0YUFycmF5KSB7XHJcbiAgICBjb25zdCBpdGVtcyA9IGRhdGFBcnJheTtcclxuICAgIGNvbnN0IGNMaXN0ID0gJGxpc3Q7XHJcbiAgICBjTGlzdC5lbXB0eSgpLmFkZENsYXNzKCdib3JkZXItbGlnaHQtY29sb3InKTtcclxuICAgIC8vIDxkaXYgY2xhc3M9XCJtZWRpYVwiPlxyXG4gICAgLy8gICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtci0zXCI+XHJcbiAgICAvLyAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pLmltZ3VyLmNvbS9qTk5UNExFLnBuZ1wiXHJcbiAgICAvLyAgICAgICAgICAgICAgY2xhc3M9XCJtZWRpYS1waG90b1wiPlxyXG4gICAgLy8gICAgIDwvYT5cclxuICAgIC8vICAgICA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLXNlY29uZGFyeSBwb3NpdGlvbi1hYnNvbHV0ZSBwLTJcIj4zPC9zcGFuPlxyXG4gICAgLy8gICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1ib2R5XCI+XHJcbiAgICAvLyAgICAgICAgIDxoNCBjbGFzcz1cInRpdGxlXCI+XHJcbiAgICAvLyAgICAgICAgICAgICBKb2huIERvZSBKb2huIERvZVxyXG4gICAgLy8gICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZCB0aW1lXCI+MTEuMDIuMjAxODwvc21hbGw+XHJcblxyXG4gICAgLy8gICAgICAgICA8L2g0PlxyXG4gICAgLy8gICAgICAgICA8cCBjbGFzcz1cInN1bW1hcnlcIj5sYXN0IG1zZzwvcD5cclxuICAgIC8vICAgICA8L2Rpdj5cclxuICAgIC8vIDwvZGl2PlxyXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG4gICAgICAgICQoYDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWFcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtci0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2kuaW1ndXIuY29tL2pOTlQ0TEUucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1lZGlhLXBob3RvXCI+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2Utc2Vjb25kYXJ5IHBvc2l0aW9uLWFic29sdXRlIHAtMlwiPjM8L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWQgdGltZVwiPjExLjAyLjIwMTg8L3NtYWxsPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInN1bW1hcnlcIj4ke2l0ZW1bJ2xhc3RfbWVzc2FnZSddfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+YCkuYXBwZW5kVG8oY0xpc3QpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgY29uc3Qge2NvbnZlcnNhdGlvbiwgdXNlckxpc3R9ID0gZGF0YTtcclxuICAgIGNvbnNvbGUubG9nKCd0ZXN0JywgdXNlckxpc3QsIGNvbnZlcnNhdGlvbik7XHJcbiAgICBjb25zdCAkbXNnTGlzdCA9ICQoJy5tZXNzYWdlcy1saXN0Jyk7XHJcbiAgICBjb25zdCAkdXNlckxpc3QgPSAkKCcubWVzc2FnZXMtdXNlci1saXN0Jyk7XHJcbiAgICAvLyBjaGVjayB3ZSBhcmUgaW4gY29ycmVjdCBwYWdlIChtZXNzYWdlcylcclxuICAgIGlmICghJG1zZ0xpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZmlsbExpc3QoJG1zZ0xpc3QsIGNvbnZlcnNhdGlvbi5kYXRhLm1ldGEubWVzc2FnZXMpO1xyXG4gICAgZmlsbFVzZXJMaXN0KCR1c2VyTGlzdCwgdXNlckxpc3QuZGF0YS5tZXRhWzBdLmNvbnZlcnNhdGlvbnMpO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3MvbWVzc2FnZXMvbWVzc2FnZXMuanMiLCIvLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgUHViU3ViIGZyb20gJ3B1YnN1Yi1qcyc7IC8vIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3B1YnN1Yi1qc1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdXNlcic7XHJcbmltcG9ydCBjb29raWVTdG9yYWdlIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb29raWUnO1xyXG5pbXBvcnQge0NPTlNUfSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29uc3RzJztcclxuaW1wb3J0IHZpZXdVdGlscyBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdmlldyc7XHJcblxyXG5jb25zdCBzZWxlY3RvckNscyA9IHtcclxuICAgIGZvcm06ICcuYXV0aC5yZWdpc3RlciAuZm9ybS1zaWduaW4nLFxyXG4gICAgc3VibWl0QnRuOiAnW3R5cGU9XCJzdWJtaXRcIl0nXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZ2lzdGVyRm9ybSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnVzZXIgPSBVc2VyO1xyXG4gICAgICAgIHRoaXMuJGZvcm0gPSAkKHNlbGVjdG9yQ2xzLmZvcm0pO1xyXG4gICAgICAgIHRoaXMuJGVtYWlsID0gdGhpcy4kZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwibWFpbFwiXScpO1xyXG4gICAgICAgIHRoaXMuJHRleHRBcmVhRGVzY3JpcHRpb24gPSAkKCcjZGVzY3JpcHRpb24nKTtcclxuICAgICAgICB0aGlzLmZvcm1EYXRhID0geydlbWFpbCc6ICd0ZXN0MV9lbWFpbEBtLnJ1JywgJ3Bhc3N3b3JkJzogJ3Bhc3N3b3JkJ307XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBpZiAoJCgnLmF1dGgucmVnaXN0ZXInKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN1Ym1pdEZvcm0oZm9ybURhdGFPYmopIHtcclxuICAgICAgICBjb25zdCBlbWFpbCA9IHRoaXMuJGVtYWlsLnZhbCgpO1xyXG4gICAgICAgIGNvbnN0ICRwYXNzd29yZCA9IHRoaXMuJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cInBhc3NcIl0nKSxcclxuICAgICAgICAgICAgJHBhc3N3b3JkQ29uZmlybSA9IHRoaXMuJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cInBhc3MtY29uZmlybVwiXScpLFxyXG4gICAgICAgICAgICBwYXNzd29yZCA9IHRoaXMuJGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cInBhc3NcIl0nKS52YWwoKSxcclxuICAgICAgICAgICAgcGFzc3dvcmRDb25maXJtID0gdGhpcy4kZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwicGFzcy1jb25maXJtXCJdJykudmFsKCk7XHJcblxyXG4gICAgICAgIGlmIChwYXNzd29yZENvbmZpcm0gIT09IHBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgICRwYXNzd29yZC5hZGRDbGFzcygnaW5wdXQtZXJyb3InKTtcclxuICAgICAgICAgICAgJHBhc3N3b3JkQ29uZmlybS5hZGRDbGFzcygnaW5wdXQtZXJyb3InKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLiRlbWFpbC52YWwodGhpcy4kZW1haWwudmFsKCkudG9Mb2NhbGVMb3dlckNhc2UoKSk7XHJcbiAgICAgICAgdGhpcy5mb3JtRGF0YSA9IGZvcm1EYXRhT2JqIHx8IHtlbWFpbCwgcGFzc3dvcmR9O1xyXG5cclxuICAgICAgICB0aGlzLnVzZXIucmVnaXN0ZXIodGhpcy5mb3JtRGF0YSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5kYXRhICYmIHJlc3VsdC5kYXRhLnRva2VuKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNhdmUgdGhlIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBjb29raWVTdG9yYWdlLnNldChDT05TVC5jb29raWVTdG9yYWdlLmVtYWlsQ29uZmlybWVkLCAnZmFsc2UnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29va2llU3RvcmFnZS5zZXQoQ09OU1QuY29va2llU3RvcmFnZS50b2tlbiwgcmVzdWx0LmRhdGEudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXF1ZXN0IHN1Y2NlZWRlZCB3aXRoIEpTT04gcmVzcG9uc2UnLCByZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIFB1YlN1Yi5wdWJsaXNoKENPTlNULmV2ZW50cy5VU0VSX0xPR0dFRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSh0aGlzLiR0ZXh0QXJlYURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLm1lc3NhZ2UgfHwgJ1JlZ2lzdGVyIGFuZCBMb2dpbiBzdWNjc2VzcycpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKHRoaXMuJHRleHRBcmVhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMubWVzc2FnZSB8fCAnbm8gcmVzdWx0LmRhdGEgZm91bmQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UodGhpcy4kdGV4dEFyZWFEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cy5zdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmxvZ2luLWJveCcpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVxdWVzdCBmYWlsZWQnLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKHRoaXMuJHRleHRBcmVhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZG8gc29tZXRoaW5nJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcbiAgICAgICAgY29uc3QgcmVnaXN0ZXJCb3ggPSBDT05TVC51aVNlbGVjdG9ycy5oZWFkZXJSZWdCb3g7IC8vICduYXYgLnJlZ2lzdGVyLWJveCc7XHJcbiAgICAgICAgY29uc3Qgb3BlbmVkQ2xhc3MgPSAnZC1ibG9jayc7XHJcbiAgICAgICAgY29uc3QgY2xvc2VDbGFzcyA9ICdkLW5vbmUnO1xyXG4gICAgICAgIGNvbnN0ICRidG4gPSAkKHNlbGVjdG9yQ2xzLnN1Ym1pdEJ0biksXHJcbiAgICAgICAgICAgIGNzc1ZhbGlkYXRpb25DbGFzcyA9ICdmb3JtLXZhbGlkYXRpb24nO1xyXG5cclxuICAgICAgICAkYnRuLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSB0aGlzLiRmb3JtLmdldCgwKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCEkYnRuLmlzKCc6ZGlzYWJsZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZvcm0uY2hlY2tWYWxpZGl0eSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gJGJ0bi5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0Rm9ybSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBIaWdobGlnaHQgZXJyb3JzXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm0ucmVwb3J0VmFsaWRpdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRmb3JtLmFkZENsYXNzKGNzc1ZhbGlkYXRpb25DbGFzcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzUmVnQnRuQ2xpY2sgPSAkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnbmF2Lm5hdmJhcicpLmZpbmQoJy5yZWdpc3Rlci1ib3gnKS5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWlzUmVnQnRuQ2xpY2sgJiYgJChyZWdpc3RlckJveCkuaGFzQ2xhc3Mob3BlbmVkQ2xhc3MpKSB7XHJcbiAgICAgICAgICAgICAgICAkKHJlZ2lzdGVyQm94KS5hZGRDbGFzcyhjbG9zZUNsYXNzKS5yZW1vdmVDbGFzcyhvcGVuZWRDbGFzcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL3JlZ2lzdGVyLWZvcm0vcmVnaXN0ZXItZm9ybS5qcyIsIi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCB2aWV3VXRpbHMgZnJvbSAnLi92aWV3JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ldHdvcmsge1xyXG5cclxuICAgIGNiRXJyb3JEZWZhdWx0KHJlc3VsdCkge1xyXG4gICAgICAgIGNvbnN0ICRlbCA9ICgkKCcjZGVzY3JpcHRpb24nKS5sZW5ndGgpID8gJCgnI2Rlc2NyaXB0aW9uJykgOiAkKCcuZXJyb3ItbXNnJyk7XHJcbiAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSgkZWwsXHJcbiAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMuc3RhdGUsXHJcbiAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMubWVzc2FnZSB8fCAnTG9naW4gZXJyb3InKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja1N0YXR1cyhyZXNwb25zZSkge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgJiYgcmVzcG9uc2Uuc3RhdHVzID49IDIwMCAmJiByZXNwb25zZS5zdGF0dXMgPCAzMDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG4gICAgICAgICAgICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2VuZFJlcXVlc3QoVVJMLCBPUFRTLCBjYkVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKFVSTCwgT1BUUylcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gUHJvbWlzZS5hbGwoW3Jlc3BvbnNlLCByZXNwb25zZS5qc29uKCldKSlcclxuICAgICAgICAgICAgLnRoZW4oKFtyZXNwb25zZSwganNvbl0pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNiRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYkVycm9yRGVmYXVsdChqc29uKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYkVycm9yKGpzb24pOyAvLyB1cGRhdGUgdmlld1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrU3RhdHVzKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoanNvbi5zdGF0dXMubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ganNvbjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tb24vanMtc2VydmljZXMvbmV0d29yay5qcyIsIi8qIGVzbGludC1kaXNhYmxlIHNvcnQtdmFycyAqL1xyXG4vLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdXNlcic7XHJcbmltcG9ydCBQdWJTdWIgZnJvbSAncHVic3ViLWpzJzsgLy8gaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvcHVic3ViLWpzXHJcbmltcG9ydCBjb29raWVTdG9yYWdlIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb29raWUnO1xyXG4vLyBpbXBvcnQgVmFsaWRhdG9yIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9mb3JtLXZhbGlkYXRvcic7XHJcbmltcG9ydCB2aWV3VXRpbHMgZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL3ZpZXcnO1xyXG5pbXBvcnQge0NPTlNUfSBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvY29uc3RzJztcclxuXHJcbi8vIHdpbmRvdy4kID0gJDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMb2dpblBhZ2Uoc2VsZWN0b3JDc3MpIHtcclxuICAgIGNvbnN0IHtfZm9ybUlkLCBfYnV0dG9uU3VibWl0SWQsIF9sb2dpbkJveH0gPSBzZWxlY3RvckNzcztcclxuICAgIGNvbnN0IHVzZXIgPSBVc2VyLCAvLyBzZXJ2aWNlXHJcbiAgICAgICAgJGZvcm0gPSAkKF9mb3JtSWQpLFxyXG4gICAgICAgICRlbWFpbCA9ICRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJtYWlsXCJdJyksXHJcbiAgICAgICAgJHRleHRBcmVhRGVzY3JpcHRpb24gPSAkKCcjZGVzY3JpcHRpb24nKTtcclxuICAgIC8vIGNvbnN0IG9wZW5lZENsYXNzID0gJ2QtYmxvY2snO1xyXG4gICAgLy8gY29uc3QgY2xvc2VDbGFzcyA9ICdkLW5vbmUnO1xyXG5cclxuICAgIGNvbnN0IHVzZXJMb2dpbkhlYWRlciA9IChfZm9ybURhdGEpID0+IHtcclxuICAgICAgICBjb25zdCBjYkVycm9yID0gKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAkKF9sb2dpbkJveCkuYXBwZW5kKCc8cD5yZXN1bHQuc3RhdHVzLm1lc3NhZ2U8L3A+Jyk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHVzZXIubG9naW4oX2Zvcm1EYXRhLCBjYkVycm9yKVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5kYXRhICYmIHJlc3VsdC5kYXRhLnRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2F2ZSB0aGUgaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGNvb2tpZVN0b3JhZ2Uuc2V0KENPTlNULmNvb2tpZVN0b3JhZ2UudG9rZW4sIHJlc3VsdC5kYXRhLnRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcubmF2LWxpbmsuanNfbG9nT3V0JykucGFyZW50KCkuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXF1ZXN0IHN1Y2NlZWRlZCB3aXRoIEpTT04gcmVzcG9uc2UnLCByZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdVdGlscy5zaG93SW5mb01lc3NhZ2UoJHRleHRBcmVhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMubWVzc2FnZSB8fCAnTG9naW4gc3VjY3Nlc3MnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LnN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld1V0aWxzLnNob3dJbmZvTWVzc2FnZSh0aGlzLiR0ZXh0QXJlYURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgPHA+c3RhdHVzOiAke3Jlc3VsdC5zdGF0dXMuc3RhdGV9PC9wPjxwPiBtZXNzYWdlOiAke3Jlc3VsdC5zdGF0dXMubWVzc2FnZX08L3A+YCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKCR0ZXh0QXJlYURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzLm1lc3NhZ2UgfHwgJ0xvZ2luIGVycm9yJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzdWJtaXRGb3JtID0gZnVuY3Rpb24oZm9ybURhdGFPYmopIHtcclxuICAgICAgICBjb25zdCBlbWFpbCA9ICRlbWFpbC52YWwoKSxcclxuICAgICAgICAgICAgcGFzc3dvcmQgPSAkZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwicGFzc1wiXScpLnZhbCgpLFxyXG4gICAgICAgICAgICBfZm9ybURhdGEgPSBmb3JtRGF0YU9iaiB8fCB7ZW1haWwsIHBhc3N3b3JkfTtcclxuXHJcbiAgICAgICAgaWYgKHNlbGVjdG9yQ3NzLmlzTG9naW5JbnN0YWdyYW0pIHtcclxuICAgICAgICAgICAgLy8gdG9kbzogZGVsZXRlIG1lXHJcbiAgICAgICAgICAgIC8vIGFkZEluc3RhZ3JhbUFjY291bnQoe3VzZXJuYW1lOiAkZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwidXNlcm5hbWVcIl0nKS52YWwoKSwgcGFzc3dvcmR9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkZW1haWwudmFsKCRlbWFpbC52YWwoKS50b0xvY2FsZUxvd2VyQ2FzZSgpKTtcclxuICAgICAgICAgICAgdXNlckxvZ2luSGVhZGVyKF9mb3JtRGF0YSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBQdWJTdWIucHVibGlzaChDT05TVC5ldmVudHMuVVNFUl9MT0dHRUQsICdsb2dpbicpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2luc3RhZ3JhbS1pbnRlZ3JhdGlvbi9pbnN0YWdyYW0tYWNjb3VudHMuaHRtbCc7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbG9nT3V0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29va2llU3RvcmFnZS5yZW1vdmUoQ09OU1QuY29va2llU3RvcmFnZS50b2tlbik7XHJcbiAgICAgICAgUHViU3ViLnB1Ymxpc2goQ09OU1QuZXZlbnRzLlVTRVJfTE9HT1VUKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYmluZEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIGNvbnN0ICRzaG93TG9naW5Cb3hCdG5JZCA9ICQoX3Nob3dMb2dpbkJveEJ0bklkKTtcclxuICAgICAgICBjb25zdCAkbG9naW5Cb3ggPSAkKF9sb2dpbkJveCk7XHJcbiAgICAgICAgY29uc3Qgb3BlbmVkQ2xhc3MgPSAnZC1ibG9jayc7XHJcbiAgICAgICAgY29uc3QgY2xvc2VDbGFzcyA9ICdkLW5vbmUnO1xyXG5cclxuICAgICAgICAvLyAkc2hvd0xvZ2luQm94QnRuSWQub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBpZiAoIXNlbGVjdG9yQ3NzLmlzTG9naW5JbnN0YWdyYW0pIHtcclxuICAgICAgICAvLyAgICAgICAgICRsb2dpbkJveC5jc3Moeyd0b3AnOiAwLCAncmlnaHQnOiAwfSlcclxuICAgICAgICAvLyAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2JnLWxpZ2h0IGJvcmRlciBtdC01IG14LWF1dG8gcG9zaXRpb24tYWJzb2x1dGUnKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICAkbG9naW5Cb3guYWRkQ2xhc3Mob3BlbmVkQ2xhc3MpLnJlbW92ZUNsYXNzKGNsb3NlQ2xhc3MpO1xyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICBjb25zdCAkYnV0dG9uU3VibWl0ID0gJChfYnV0dG9uU3VibWl0SWQpLFxyXG4gICAgICAgICAgICBjc3NWYWxpZGF0aW9uQ2xhc3MgPSAnZm9ybS12YWxpZGF0aW9uJztcclxuXHJcbiAgICAgICAgJGJ1dHRvblN1Ym1pdC5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSAkZm9ybS5nZXQoMCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IHZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoJGZvcm0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2aWV3VXRpbHMsIHZpZXdVdGlscy5pc0VtYWlsKCRlbWFpbC52YWwoKSkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGZvcm0uY2hlY2tWYWxpZGl0eSgpICYmIHZpZXdVdGlscy5pc0VtYWlsKCRlbWFpbC52YWwoKSkpIHtcclxuICAgICAgICAgICAgICAgIHN1Ym1pdEZvcm0oKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIEhpZ2hsaWdodCBlcnJvcnNcclxuICAgICAgICAgICAgICAgIGlmIChmb3JtLnJlcG9ydFZhbGlkaXR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJGZvcm0uYWRkQ2xhc3MoY3NzVmFsaWRhdGlvbkNsYXNzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcubmF2LWxpbmsuanNfbG9nT3V0Jykub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBsb2dPdXQoKTtcclxuICAgICAgICAgICAgJChlLnRhcmdldCkucGFyZW50KCkuaGlkZSgpO1xyXG4gICAgICAgICAgICB2aWV3VXRpbHMuc2hvd0luZm9NZXNzYWdlKCR0ZXh0QXJlYURlc2NyaXB0aW9uLCAnTG9nZ2VkIG91dCcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBQdWJTdWIuc3Vic2NyaWJlKENPTlNULmV2ZW50cy5VU0VSX0xPR09VVCwgKG1zZykgPT4ge1xyXG4gICAgICAgICAgICAkKENPTlNULnVpU2VsZWN0b3JzLmhlYWRlck5hdkxvZ2luQnRuKS5hZGRDbGFzcyhvcGVuZWRDbGFzcykucmVtb3ZlQ2xhc3MoY2xvc2VDbGFzcyk7IC8vIC5zaG93KCk7XHJcbiAgICAgICAgICAgICQoQ09OU1QudWlTZWxlY3RvcnMuaGVhZGVyUmVnQnRuKS5hZGRDbGFzcyhvcGVuZWRDbGFzcykucmVtb3ZlQ2xhc3MoY2xvc2VDbGFzcyk7XHJcbiAgICAgICAgICAgICQoJy5uYXYtbGluay5qc19sb2dPdXQnKS5hZGRDbGFzcyhjbG9zZUNsYXNzKS5yZW1vdmVDbGFzcyhvcGVuZWRDbGFzcyk7IC8vIC5oaWRlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9yTG9naW5TdGF0ZSA9ICcuanNfbWVzc2FnZV9sb2dnZWQtLXRleHQnO1xyXG4gICAgICAgICAgICAkKHNlbGVjdG9yTG9naW5TdGF0ZSkudGV4dCgn0JLRiyDQstGL0YjQu9C4INC40Lcg0LDQutC60LDRg9C90YLQsCcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXNMb2dpbkJ0bkNsaWNrID0gJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJ25hdi5uYXZiYXInKS5maW5kKCRsb2dpbkJveCkubGVuZ3RoO1xyXG4gICAgICAgICAgICBjb25zdCBpc0FkZEluc3RhZ3JhbUJ0bkNsaWNrZWQgPSAkKGV2ZW50LnRhcmdldCkuYXR0cignaWQnKSA9PT0gQ09OU1QudWlTZWxlY3RvcnMuaW5zdGFncmFtLmFkZEFjY291bnRCdG5JZDtcclxuXHJcbiAgICAgICAgICAgIGlmICghaXNMb2dpbkJ0bkNsaWNrICYmICRsb2dpbkJveC5oYXNDbGFzcyhvcGVuZWRDbGFzcykgJiYgIWlzQWRkSW5zdGFncmFtQnRuQ2xpY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgJGxvZ2luQm94LmFkZENsYXNzKGNsb3NlQ2xhc3MpLnJlbW92ZUNsYXNzKG9wZW5lZENsYXNzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgICAgIGlmICgkKCcuYXV0aC5sb2dpbicpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBiaW5kRXZlbnRzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5pdFxyXG4gICAgfTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvX2F1dGgvbG9naW4tcGFnZS5qcyIsIi8qIGVzbGludC1kaXNhYmxlIHNvcnQtdmFycyAqL1xyXG4vLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9jb21tb24vanMtc2VydmljZXMvdXNlcic7XHJcbi8vIGltcG9ydCBjb29raWVTdG9yYWdlIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy9jb29raWUnO1xyXG5pbXBvcnQgdmlld1V0aWxzIGZyb20gJy4uLy4uL2NvbW1vbi9qcy1zZXJ2aWNlcy92aWV3JztcclxuLy8gaW1wb3J0IHtDT05TVH0gZnJvbSAnLi4vLi4vY29tbW9uL2pzLXNlcnZpY2VzL2NvbnN0cyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSW5zdGFncmFtKHNlbGVjdG9yQ1NTID0ge30pIHtcclxuICAgIGNvbnN0ICRidXR0b25TdWJtaXQgPSAkKCcjanNfaW5zdGFncmFtLWdldC1hY2NvdW50cy0tYnRuJyk7XHJcbiAgICBjb25zdCB1c2VyID0gVXNlciwgLy8gc2VydmljZVxyXG4gICAgICAgICRsaXN0ID0gJCgnLmluc3RhZ3JhbS1hY2NvdW50cy1saXN0Jyk7XHJcblxyXG4gICAgY29uc3Qgc3VibWl0Rm9ybSA9IGZ1bmN0aW9uKGZvcm1EYXRhT2JqKSB7XHJcbiAgICAgICAgaWYgKCRidXR0b25TdWJtaXQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHVzZXIuZ2V0SW5zdGFncmFtQWNjb3VudCgpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3VXRpbHMuZmlsbExpc3QoJGxpc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5kYXRhLmFjY291bnRzIHx8ICdMb2dpbiBlcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnZXRJbnN0YWdyYW1BY2NvdW50ICcsICRidXR0b25TdWJtaXQpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBiaW5kRXZlbnRzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJGJ1dHRvblN1Ym1pdC5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHN1Ym1pdEZvcm0oKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgICAgICBiaW5kRXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0XHJcbiAgICB9O1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9faW5zdGFncmFtL2luc3RhZ3JhbS5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmFzZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRpZighbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=