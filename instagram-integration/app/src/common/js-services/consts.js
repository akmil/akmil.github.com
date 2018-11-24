export const CONST = {
    url: {
        base: 'http://104.248.46.68:8080/api/v1',
        registration: '/registration/basic/',
        login: '/registration/basic/login'
    },
    user: {
        email: '',
        password: '',
        token: ''
    },
    getPath(name) {
        return this.url.base + this.url[name];
    }
};
