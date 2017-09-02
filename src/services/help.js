'use strict';

const log = require('./log');

/**
 * @method isCommand
 * @desc checks to see if the about help is a command or root help
 * @param {object} args an object containing the commands arguments
 * @returns {boolean}
 */
function isCommand(args) {
  return !args.start && !args.stop;
}

module.exports = (args) => {
  if (args.help && !isCommand(args)) {
    log.raw(`alexa-server - alexa app manager
    
      usage: alexa-server -h | -s | -c
      usage: alexa-server --help | --start | --stop
      usage: alexa-server [command] -h 
    
      options:
        short\tfull\t\tdescription
        -h,\t\t--help\t\tprint help documentation
        -s,\t\t--start\t\tstarts the alexa app manager
        -c,\t\t--stop\t\tstops the alexa app manager
    `);
  } else {
    log.raw('command help not written yet');
  }
};
