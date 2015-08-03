export default function () {

  // Controller
  class BookDetailDirectiveVM {
    constructor ($routeParams, BookData) {
      BookData.getBookByIsbn($routeParams.isbn)
        .then(book => this.book = book)
    }
  }

  // DDO
  return {
    restrict     : 'E',
    templateUrl  : 'book-detail/book-detail.directive.html',
    controller   : BookDetailDirectiveVM,
    controllerAs : 'vm'
  }
}