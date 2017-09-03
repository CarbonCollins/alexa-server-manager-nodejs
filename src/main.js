/* globals __dirname */
'use strict';

const path = require('path');
const fs = require('fs-extra');
const AlexaAppServer = require('alexa-app-server');
const socketIO = require('socket.io');

const args = require('./services/args');
const log = require('./services/log');
const help = require('./services/help');

const dashboardController = require('./controllers/dashboard');

log.setLogLevel('debug');
args.parseArguments(process.argv);

fs.ensureDir(path.join(__dirname, '../server/apps'));

if (args.help) {
  help(args);
} else if (args.start) {
  log.info('start app');
  const server = new AlexaAppServer({
    server_root: path.join(__dirname, '../'),
    public_html: './src/public',
    app_dir: './server/apps',
    app_root: 'alexa',
    port: args.port,
    httpEnabled: true,
  });
  server.start();
  const io = socketIO(server.instance);
  dashboardController.registerRoutes(server.express, io);

  io.on('connection', () => {
    log.info('client connected');
  });
} else {
  log.info('unknown command');
}
