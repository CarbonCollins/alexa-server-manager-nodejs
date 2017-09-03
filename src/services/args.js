'use strict';

const minimist = require('minimist');

const defaultPort = 8080;
const defaultHost = '0.0.0.0';

/**
 * @class ArgumentsService
 * @classdesc a service for parsing arguments and supplying helpfull functionality
 */
class ArgumentsService {

  /**
   * @constructor
   */
  constructor() {
    this.parsedArgs = {};
  }

  /**
   * @method ArgumentsService~parseArguments
   * @desc parses the raw arguments
   * @param {string[]} argv an array of arguments to be parsed 
   */
  parseArguments(argv) {
    this.parsedArgs = minimist(argv, {
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
  }

  /**
   * @member {boolean} help
   * @readonly
   */
  get help() {
    return this.parsedArgs.help || false;
  }

  /**
   * @member {number} port
   * @readonly
   */
  get port() {
    return parseInt(this.parsedArgs.port, 10) || defaultPort;
  }

  /**
   * @member {string} host
   * @readonly
   */
  get host() {
    return this.parsedArgs.host || defaultHost;
  }

  /**
   * @member {boolean} start
   * @readonly
   */
  get start() {
    return this.parsedArgs._.includes('start') || false;
  }

}

module.exports = new ArgumentsService();
