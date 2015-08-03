export default function () {


  // controller
  class BookListDirectiveVM {
    constructor (BookData) {
      BookData.getAll()
      .then(books => this.books = books);
    }
  }


  // DDO - Directive Definition Object
  return {
    restrict     : 'E',
    templateUrl  : 'book-list/book-list.directive.html',
    controller   : BookListDirectiveVM,
    controllerAs : 'vm',
    scope        : {}
  }

}