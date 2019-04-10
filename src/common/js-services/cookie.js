
const CookieSrv = {
    get: name => {
        const c = document.cookie.match(`(?:(?:^|.*; *)${name} *= *([^;]*).*$)|^.*$`)[1];
        if (c) {
            return decodeURIComponent(c);
        }
    },
    set: (name, value, opts = {path: '/', days: 365}) => {
        if (opts.days) {
            opts['max-age'] = opts.days * 60 * 60 * 24;
            delete opts.days;
        }
        // eslint-disable-next-line no-param-reassign
        opts = Object.entries(opts).reduce((str, [k, v]) => `${str}; ${k}=${v}`, '');
        document.cookie = `${name}=${encodeURIComponent(value) + opts}`;
    },
    remove: (name, opts) => CookieSrv.set(name, '', {'max-age': -1, path: '/', days: 0, ...opts})
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

export default CookieSrv;
