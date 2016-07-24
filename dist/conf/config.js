'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _serveFavicon = require('serve-favicon');

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _methodOverride = require('method-override');

var _methodOverride2 = _interopRequireDefault(_methodOverride);

var _errorhandler = require('errorhandler');

var _errorhandler2 = _interopRequireDefault(_errorhandler);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var app = (0, _express2.default)();

  // all environments
  app.set('port', process.env.PORT || 3000);
  app.set('views', _path2.default.join(__dirname, '../../views'));
  app.set('view engine', 'pug');
  app.use((0, _serveFavicon2.default)("public/img/fm-icon.png"));
  app.use((0, _morgan2.default)('dev'));
  app.use((0, _bodyParser2.default)());
  app.use((0, _methodOverride2.default)());
  app.use(_express2.default.static(_path2.default.join(__dirname, '../../public')));

  app.use((0, _errorhandler2.default)());

  (0, _routes2.default)(app);

  return app;
}(); /**
      * Module dependencies.
      */