'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Prismic = require('./Prismic');

var _Prismic2 = _interopRequireDefault(_Prismic);

var _Router = require('../Router');

var _Router2 = _interopRequireDefault(_Router);

var _Error = require('../utils/Error');

var _Error2 = _interopRequireDefault(_Error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  index: function index(req, res) {
    _Prismic2.default.api(req, res).then(function (api) {
      api.getByUID('home', 'home', { 'fetchLinks': 'svg.svg' }).then(function (doc) {
        return res.render('index', { 'doc': doc });
      }).catch(function (err) {
        return res.redirect(_Router2.default.notFound);
      });
    }).catch(function (err) {
      return _Error2.default.handle(err, req, res);
    });
  },
  notFound: function notFound(req, res) {
    res.render('notFound');
  }
};