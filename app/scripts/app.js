import angular from 'angular';
import angularRoute from 'angular-route'

import BookDataModule from '../components/book-data'
import BookListModule from '../components/book-list'
import RouteConfig from './configs/route.config'

angular.module('myApp', [

  // 3rd party || angular libs
  angularRoute,

  // my libs
  BookDataModule,
  BookListModule
])
.config(RouteConfig);
