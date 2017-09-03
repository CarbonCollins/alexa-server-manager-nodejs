/* globals __dirname */
'use strict';

const path = require('path');

class DashboardController {

  /**
   * @constructor
   */
  constructor() {}

  /**
   * @method DashboardController~registerRoutes
   * @desc registers the routes for this controller in the express app
   * @param {object} app the express app to register the routes too
   * @param {object} io the socket server to register events too
   */
  registerRoutes(app, io) {
    app.get('/', this.getDashboard);
    app.get('/dashboard', this.getDashboard);
  }

  /**
   * @method DashboardController~getDashboard
   * @desc returns and displays the dashboar for the alexa app manager
   * @param {object} req the request payload
   * @param {object} res the response object
   */
  getDashboard(req, res) {
    res.sendFile(path.join(__dirname, '../views/index.html'));
  }

}

const dashboard = new DashboardController();

module.exports = dashboard;
