import Error from '../utils/Error'
import Prismic from 'prismic.io'
import configuration from '../conf/prismic-configuration'
import Router from '../Router'

// -- Links resolution rules
// This function will be used to generate links to Prismic.io documents
// As your project grows, you should update this function according to your routes
function linkResolver (doc) {
  if(doc.uid === 'home') return Router.index
  else return Router.notFound
}

function initCtx (req, res, next) {
  // So we can use this information in the views
  res.locals.ctx = {
    endpoint: configuration.apiEndpoint,
    linkResolver: linkResolver
  }
  next()
}

//return an ES6 promise
function api (req, res) {
  return Prismic.api(configuration.apiEndpoint, {
    accessToken: configuration.accessToken,
    req: req
  })
}

function preview (req, res) {
  var previewToken = req.query['token']
  api(req, res)
    .then(function(api) {
      api.previewSession(previewToken, linkResolver, '/', function(err, redirectUrl) {
        res.cookie(Prismic.previewCookie, previewToken, { maxAge: 60 * 30 * 1000, path: '/', httpOnly: false }); //30min
        res.redirect(redirectUrl);
      })
    })
    .catch(function(err) {
      Error.handle(err, req, res)
    })
}

export default {
  linkResolver: linkResolver,
  initCtx: initCtx,
  api: api,
  preview: preview
}
