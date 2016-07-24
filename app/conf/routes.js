import Router from '../Router'
import Website from '../controllers/Website'
import Prismic from '../controllers/Prismic'

export default function (app) {
  //must be the first to set the API Context in the locals for templates
  app.route(Router.all).get(Prismic.initCtx)

  //prismic preview
  app.route(Router.preview).get(Prismic.preview)

  //standard routes
  app.route(Router.index).get(Website.index)
  app.route(Router.page(':uid')).get(Website.page)

  //handle route not found
  app.route(Router.all).get(Website.notFound)

  //Expose router for templates
  app.locals.Router = Router
}
