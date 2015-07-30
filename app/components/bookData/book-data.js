import angular from 'angular';

import BookDataService from './book-data.service'

angular.module('bookDataModule', [])
  .service('bookData', BookDataService);

export default 'bookDataModule'