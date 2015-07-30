import angular from 'angular';

angular.module('bookDataModule', [])
  .service('bookData', require('./book-data.service.js'));

export default 'bookDataModule'