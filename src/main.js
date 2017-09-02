'use strict';

const minimist = require('minimist');

const log = require('./services/log');

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
  log.raw(`alexa-server - alexa app manager

  usage: alexa-server -h
  usage: alexa-server [command] -h 

  options:
    short\tfull\t\tdescription
    -h,\t\t--help\t\tprint help documentation
  `);
}
