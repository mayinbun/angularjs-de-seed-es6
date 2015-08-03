import angular from 'angular'

import BookDataModule from '../book-data'

import BookListDirective from './book-list.directive'

angular.module('book-list',[
  BookDataModule
])
.directive('bookList',BookListDirective);

export default 'book-list'