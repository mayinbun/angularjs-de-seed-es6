import angular from 'angular';
import angularRoute from 'angular-route'
import angularAria from 'angular-aria'

// Modules
import BookDataModule from '../components/book-data'
import BookListModule from '../components/book-list'
import BookDetailModule from '../components/book-detail'
import BookCreateModule from '../components/book-create'

// Configs
import RouteConfig from './configs/route.config'

angular.module('myApp', [

  // 3rd party || angular libs
  angularRoute,
  angularAria,

  // my libs
  BookDataModule,
  BookListModule,
  BookDetailModule,
  BookCreateModule
])
.config(RouteConfig);
