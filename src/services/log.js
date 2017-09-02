/* global console __dirname */
'use strict';

const path = require('path');
const chalk = require('chalk');
const moment = require('moment');

const logLevels = [ 'DEBUG', 'INFO', 'WARN', 'ERROR', 'CRITICAL', 'NONE' ];

const debug = chalk.blue;
const info = chalk.green;
const warning = chalk.yellow;
const error = chalk.redBright;
const critical = chalk.bold.redBright;

/**
 * @class Log
 * @classdesc a log service for providing more detailed logs
 */
class Log {

  /**
   * @constructor
   */
  constructor() {
    this.console = console;
    this.daemon = false;
    this.logDir = path.join(__dirname, 'logs');
    this.logLevel = 0;
  }

  /**
   * @method Log~setLogLevel
   * @desc sets the logging service to output errors above a certain level
   * @param {string|number} level the desired log level
   */
  setLogLevel(level) {
    if (level && typeof level === 'string' && logLevels.includes(level.toUpperCase())) {
      this.logLevel = logLevels.indexOf(level.toUpperCase());
      this.info(`Log level set to "${logLevels[this.logLevel]}"`, true);
    } else if (level && typeof level === 'number' && level < logLevels.length) {
      this.logLevel = level;
      this.info(`Log level set to "${logLevels[this.logLevel]}"`, true);
    } else {
      this.warn(`Invalid log level entered.
        log level must be a number between 0 and ${logLevels.length - 1}
        or one of the following strings: "${logLevels.join('", "')}"`, true);
    }
  }

  /**
   * @method Log~debug
   * @desc prints a debug message into the log
   * @param {string} message the message to be printed in the log
   * @param {boolean} forced if the log will ignore log levels
   */
  debug(message = '', forced = false) {
    this.output(debug('debug'), 'DEBUG', message, forced);
  }

  /**
   * @method Log~info
   * @desc prints a info message into the log
   * @param {string} message the message to be printed in the log
   * @param {boolean} forced if the log will ignore log levels
   */
  info(message = '', forced = false) {
    this.output(info('info'), 'INFO', message, forced);
  }

  /**
   * @method Log~warn
   * @desc prints a warn message into the log
   * @param {string} message the message to be printed in the log
   * @param {boolean} forced if the log will ignore log levels
   */
  warn(message = '', forced = false) {
    this.output(warning('warn'), 'WARN', message, forced);
  }

  /**
   * @method Log~error
   * @desc prints an error message into the log
   * @param {string} message the message to be printed in the log
   * @param {boolean} forced if the log will ignore log levels
   */
  error(message = '', forced = false) {
    this.output(error('critical'), 'ERROR', message, forced);
  }

  /**
   * @method Log~critical
   * @desc prints an critical message into the log
   * @param {string} message the message to be printed in the log
   * @param {boolean} forced if the log will ignore log levels
   */
  critical(message = '', forced = false) {
    this.output(critical('critical'), 'CRITICAL', message, forced);
  }

  /**
   * @method Log~output
   * @desc outputs a message with a header to the console
   * @private
   * @param {string} header the header text to display on the console
   * @param {string} messageLevel the level in which the message should be emited at
   * @param {string|number|object} message the message to be printed in the log
   * @param {boolean} forced if the log will ignore log levels
   */
  output(header, messageLevel, message, forced) {
    if (this.logLevel <= logLevels.indexOf(messageLevel) || forced) {
      this.console.log(`[ ${header} ] ${message}`);
    }
  }

  /**
   * @method Log~raw
   * @desc prints a value out using the standard console.log function
   * @param {string|number|object} message the message to be printed
   */
  raw(message) {
    this.console.log(message);
  }

}

module.exports = new Log();
