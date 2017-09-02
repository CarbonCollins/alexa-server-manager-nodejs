'use strict';

const log = require('./log');

/**
 * @method isCommand
 * @desc checks to see if the about help is a command or root help
 * @param {object} args an object containing the commands arguments
 * @returns {boolean}
 */
function isCommand(args) {
  return args.start || args.stop;
}

module.exports = (args) => {
  if (args.help && !isCommand(args)) {
    log.raw(`alexa-server - alexa app manager

      usage: alexa-server [-h --help]
      usage: alexa-server [command] [-h --help] 
      usage: alexa-server start [-p --port] [-u --host]
      usage: alexa-server stop
    
      options:
        short\tfull\t\tdescription
        -h,\t\t--help\t\tprint help documentation

        -p,\t\t--port\t\tspecifys a port for the alexa server to listen to (defaults to 8080)
        -u,\t\t--host\t\tspecifies a host for the alexa server to listen to (defaults to 0.0.0.0)
    `);
  } else {
    log.raw('command help not written yet');
  }
};
