import angular from 'angular';

import BookDataModule from '../components/book-data'
import BookListModule from '../components/book-list'

angular.module('myApp', [
  BookDataModule,
  BookListModule
]);
