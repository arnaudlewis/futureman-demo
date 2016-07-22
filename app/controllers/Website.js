import Prismic from './Prismic'
import Router from '../Router'
import Error from '../utils/Error'

export default {
  index(req, res){
    res.render('index')
  },

  page(req, res){
    Prismic.api(req, res)
      .then((api) => {
        api.getByUID("demo", req.params.uid)
          .then((doc) => res.render('page', {'doc': doc}))
          .catch((err) => res.redirect(Router.notFound))
        })
      .catch((err) => Error.handle(err, req, res))
  },

  notFound(req, res){
    res.render('notFound')
  }
}
