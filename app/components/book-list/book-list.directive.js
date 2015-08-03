export default function(){


  // controller
  class BookListDirectiveVM {
    constructor(BookData){
      this.books = BookData.getAll();
    }
  }



  // DDO - Directive Definition Object
  return {
    restrict: 'E',
    template: 'BookListDirective bla bla ',
    controller: BookListDirectiveVM,
    controllerAs: 'vm'
  }

}