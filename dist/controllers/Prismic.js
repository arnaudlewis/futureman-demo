'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Error = require('../utils/Error');

var _Error2 = _interopRequireDefault(_Error);

var _prismic = require('prismic.io');

var _prismic2 = _interopRequireDefault(_prismic);

var _prismicConfiguration = require('../conf/prismic-configuration');

var _prismicConfiguration2 = _interopRequireDefault(_prismicConfiguration);

var _Router = require('../Router');

var _Router2 = _interopRequireDefault(_Router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// -- Links resolution rules
// This function will be used to generate links to Prismic.io documents
// As your project grows, you should update this function according to your routes
function linkResolver(doc) {
  if (doc.uid === 'home') return _Router2.default.index;else return _Router2.default.notFound;
}

function initCtx(req, res, next) {
  // So we can use this information in the views
  res.locals.ctx = {
    endpoint: _prismicConfiguration2.default.apiEndpoint,
    linkResolver: linkResolver
  };
  next();
}

//return an ES6 promise
function api(req, res) {
  return _prismic2.default.api(_prismicConfiguration2.default.apiEndpoint, {
    accessToken: _prismicConfiguration2.default.accessToken,
    req: req
  });
}

function preview(req, res) {
  var previewToken = req.query['token'];
  api(req, res).then(function (api) {
    api.previewSession(previewToken, linkResolver, '/', function (err, redirectUrl) {
      res.cookie(_prismic2.default.previewCookie, previewToken, { maxAge: 60 * 30 * 1000, path: '/', httpOnly: false }); //30min
      res.redirect(redirectUrl);
    });
  }).catch(function (err) {
    _Error2.default.handle(err, req, res);
  });
}

exports.default = {
  linkResolver: linkResolver,
  initCtx: initCtx,
  api: api,
  preview: preview
};