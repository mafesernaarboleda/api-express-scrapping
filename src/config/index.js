/**
 * @author Maria Fernanda Serna
 * Default specific configuration
 */

const path = require('path');
const _ = require('lodash');

const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

let envFile;

if (env === 'production') {
    // Register the Babel require hook
    envFile = require('./production.js');
}

// All configurations will extend these options
// ============================================
const all = {
    env: process.env.NODE_ENV,

    // Root path of server
    root: path.normalize(__dirname + '/../../..'),

    // Server port
    port: process.env.PORT || 3000,

    // Server IP
    ip: process.env.IP || '0.0.0.0',
};

// Export the config object based on the NODE_ENV
// ==============================================
module.exports = _.merge(all, envFile || {});