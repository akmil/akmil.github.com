export const CONST = {
    url: {
        base: 'http://luxgram.ru/api/v1',
        registration: '/registration/basic/',
        login: '/registration/basic/login',
        confirmation: '/registration/basic/confirmation?token',
        instagram_addAccount: '/instagram/accounts/',
        instagram_getAccount: '/instagram/accounts/'
    },
    user: {
        email: '',
        password: '',
        token: ''
    },
    cookieStorage: {
        token: 'user_logged',
        emailConfirmed: 'false'
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
        USER_EMAIL_CONFIRMED: 'user_email_confirmed'
    },
    getPath(name) {
        return this.url.base + this.url[name];
    },
    setUser(obj) {
        this.user = {...this.user, obj};
    }
};
