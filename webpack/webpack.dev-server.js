import config from './webpack.config.dev.js';

function addCasUser(req, res, proxyOptions) {
    if (config.CAS_USER) {
        req.headers['CAS-User'] = config.CAS_USER;
    }
}

export default {
    proxy: {
        '/module/rest/*': {
            target: config.SERVER_URL,
            bypass: addCasUser
        },
        '/module/dev/rest/*': {
            target: config.SERVER_URL,
            bypass: addCasUser
        }
    },
    host: config.IP,
    port: config.FRONT_PORT,
    publicPath: config.FRONT_URL + '/module/',
    open: true,
    openPage: 'module/',
    stats: 'minimal'
};
