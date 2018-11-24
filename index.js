/**
 * @author Maria Fernanda Serna
 * Main application file
 */

const express = require('express');
const https = require('https');
const winston = require('winston');
const config = require('./src/config');
const routeConfig = require('./routes');


const app = express();

const server = https.createServer(app);
routeConfig(app);

function startServer() {
    app.angularFullstack = server.listen(config.port, config.ip, () => {
        winston.info(`Express server listening on ${config.port}, in ${app.get('env')} mode`);
    });
}

setImmediate(startServer);