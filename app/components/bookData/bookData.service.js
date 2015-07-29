var angular = require('angular');

angular.module('myApp')
  .factory('bookData', () => {

    return {
      x: 'y',
      y: 'x'
    };
  });