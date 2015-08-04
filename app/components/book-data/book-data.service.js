export default function ($http) {

  const baseUrl = 'http://ajs-workshop.herokuapp.com/api/books/';

  this.getAll = function () {
    return $http.get(baseUrl)
      .then(response => response.data);
  };

  this.getBookByIsbn = function (isbn) {
    return $http.get(baseUrl + isbn)
      .then(response => response.data);
  };

  this.createBook = function (book) {
    return $http.post(baseUrl, book)
      .then(response => response.data);
  };

  this.editBook = function (book) {
    return $http.put(baseUrl + book.isbn, book)
      .then(response => response.data);
  };

  this.deleteBook = function (book) {
    return $http.delete(baseUrl + book.isbn)
      .then(response => response.data);
  };

}