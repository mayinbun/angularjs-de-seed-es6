import angular from 'angular';

import BookForm from '../book-form';
import BookData from '../book-data';

import BookCreateDirective from './book-create.directive.js'

angular.module('book-create',[
  BookForm,
  BookData
])
.directive('bookCreate', BookCreateDirective);

export default 'book-create';