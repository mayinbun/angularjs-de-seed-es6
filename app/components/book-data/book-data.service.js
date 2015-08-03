export default function ($http) {

  const baseUrl = 'http://ajs-workshop.herokuapp.com/api/books/';

  this.getAll = function () {
    return $http.get(baseUrl)
      .then(response => response.data);
  }

}