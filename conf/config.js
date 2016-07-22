/**
 * Module dependencies.
 */
import express from 'express'
import favicon from 'serve-favicon'
import logger from 'morgan'
import bodyParser from 'body-parser'
import methodOverride from 'method-override'
import errorHandler from 'errorhandler'
import http from 'http'
import path from 'path'
import routes from './routes'

export default (function() {
  var app = express();

  // all environments
  app.set('port', process.env.PORT || 3000)
  app.set('views', path.join(__dirname, '../app/views'))
  app.set('view engine', 'pug')
  app.use(favicon("public/img/punch.png"))
  app.use(logger('dev'))
  app.use(bodyParser())
  app.use(methodOverride())
  app.use(express.static(path.join(__dirname, '../public')))

  app.use(errorHandler())

  routes(app)

  return app
})()
