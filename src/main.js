'use strict';

const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const args = require('./services/args');
const log = require('./services/log');
const help = require('./services/help');

const dashboardController = require('./controllers/dashboard');

const server = require('./server');

log.setLogLevel('debug');
args.parseArguments(process.argv);

if (args.help) {
  help(args);
} else if (args.start) {
  log.info('start app');
  const app = express();
  const httpServer = http.createServer(app);
  const io = socketIO(httpServer);

  dashboardController.registerRoutes(app, io);

  io.on('connection', () => {
    log.info('client connected');
  });

  httpServer.listen(args.port, args.host, () => {
    log.info(`Web server started on: ${args.host}:${args.port}`);
  });
} else {
  log.info('unknown command');
}
