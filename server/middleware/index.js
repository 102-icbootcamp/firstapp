var path = require('path');
var bodyParser = require('body-parser');
const logger = require('morgan');

module.exports = function(app, express) {
  app.use(logger('dev'));
  app.use(express.static(__dirname + '/../../dist'));
  app.use(bodyParser.json());
};