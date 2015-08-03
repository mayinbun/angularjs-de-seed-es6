import angular from 'angular'

import BookDataService from './book-data.service'

angular.module('book-data', [])
  .service('BookData', BookDataService);

export default 'book-data';