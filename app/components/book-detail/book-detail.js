import angular from 'angular'

import BookDataModule from '../book-data'
import BookDetailDirective from './book-detail.directive'

angular.module('book-detail', [
  BookDataModule
])
  .directive('bookDetail', BookDetailDirective);

export default 'book-detail'