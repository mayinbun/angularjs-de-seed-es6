import angular from 'angular';

import BookFormDirective from './book-form.directive.js';

angular.module('book-form', [])
  .directive('bookForm', BookFormDirective);


export default 'book-form';