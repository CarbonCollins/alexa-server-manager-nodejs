'use strict';

const path = require('path');
const AlexaAppServer = require('alexa-app-server');

/**
 * @class AlexaServer
 * @classdesc the entry class for the alexa server
 */
class AlexaServer {

  /**
   * @constructor
   */
  constructor() {
    this.serverDir = path.dirname();
    this.appDir = path.join(this.serverDir, '../apps');
    this.publicDir = path.join(this.serverDir, './public');
    this.server = new AlexaAppServer({
      server_root: this.serverDir,
      public_html: this.publicDir,
      app_dir: this.appDir,
      app_root: '/',
      port: 8080
    });
  }

  /**
   * @method AlexaServer~start
   * @desc starts the alexa server to begin serving the alexa apps
   */
  start() {
    this.server.start();
  }

  /**
   * @method AlexaServer~stop
   * @desc stops the alexa server
   */
  stop() {
    this.server.stop();
  }

}

module.exports = new AlexaServer();
