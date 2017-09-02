'use strict';

const minimist = require('minimist');

const log = require('./services/log');
const help = require('./services/help');

log.setLogLevel('debug');

const args = minimist(process.argv, {
  string: [],
  boolean: [ 'development', 'help', 'daemon' ],
  alias: {
    help: 'h',
    daemon: 'd',
    development: 'dev'
  },
  default: {
    development: false,
    help: false,
    daemon: false
  }
});

if (args.help) {
  help(args);
} else {
  // tada
}
