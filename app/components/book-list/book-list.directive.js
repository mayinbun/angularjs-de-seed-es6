export default function () {


  // controller
  class BookListDirectiveVM {
    constructor (BookData) {
      this.books = BookData.getAll();
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