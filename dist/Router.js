'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  index: '/',
  page: function page(uid) {
    return '/page/' + uid;
  },

  notFound: '/not-found',
  //prismic preview
  preview: '/preview',

  //specific cases
  all: '*'
};