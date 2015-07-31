let baseUrl = "https://ajs-workshop.herokuapp.com/api/books";

export default function ($http) {

  this.getAll = function () {
    return $http.get(baseUrl);
  }

}

/* let $http;

export default
class BookDataService {
  constructor (_$http_) {
    'ngInject';
    $http = _$http_;
  }

  getAll () {
    return this._$http.get(baseUrl)
      .then(response => { response.data })
  }
}

BookDataService.$inject = ['$http'];
*/