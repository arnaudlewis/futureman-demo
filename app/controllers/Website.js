import Prismic from './Prismic'
import Router from '../Router'
import Error from '../utils/Error'

export default {
  index(req, res){
    Prismic.api(req, res)
      .then((api) => {
        api.getByUID('home', 'home')
          .then((doc) => res.render('index', {'doc': doc}))
          .catch((err) => res.redirect(Router.notFound))
        })
      .catch((err) => Error.handle(err, req, res))
  },

  notFound(req, res){
    res.render('notFound')
  }
}
