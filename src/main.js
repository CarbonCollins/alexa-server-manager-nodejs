'use strict';

const minimist = require('minimist');

const log = require('./services/log');
const help = require('./services/help');

const server = require('./server');

log.setLogLevel('debug');

const args = minimist(process.argv, {
  string: [ 'port', 'host' ],
  boolean: [ 'development', 'help', 'daemon' ],
  alias: {
    help: 'h',
    daemon: 'd',
    development: 'dev',
    port: 'p',
    host: 'u'
  },
  default: {
    development: false,
    help: false,
    daemon: false,
    port: '8080',
    host: '0.0.0.0'
  }
});

if (args.help) {
  help(args);
} else {
  // tada
}
