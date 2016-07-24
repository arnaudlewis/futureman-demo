'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (app) {
  //must be the first to set the API Context in the locals for templates
  app.route(_Router2.default.all).get(_Prismic2.default.initCtx);

  //prismic preview
  app.route(_Router2.default.preview).get(_Prismic2.default.preview);

  //standard routes
  app.route(_Router2.default.index).get(_Website2.default.index);
  app.route(_Router2.default.page(':uid')).get(_Website2.default.page);

  //handle route not found
  app.route(_Router2.default.all).get(_Website2.default.notFound);

  //Expose router for templates
  app.locals.Router = _Router2.default;
};

var _Router = require('../Router');

var _Router2 = _interopRequireDefault(_Router);

var _Website = require('../controllers/Website');

var _Website2 = _interopRequireDefault(_Website);

var _Prismic = require('../controllers/Prismic');

var _Prismic2 = _interopRequireDefault(_Prismic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }