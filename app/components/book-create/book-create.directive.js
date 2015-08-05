export default function(BookData, $location){


  // Controller
  class BookCreateDirectiveVM{
    constructor(){
      this.isButtonDisabled = true;
      this.bookOnCreate = {}
    }
    createBook(book){
      BookData.createBook(book)
      .then(() => $location.path('#/books'));
    }
    setButton(validState){
      this.isButtonEnabled = validState;
    }
  }


  // DDO
  return {
    restrict: 'E',
    templateUrl: 'book-create/book-create.directive.html',
    controller: BookCreateDirectiveVM,
    controllerAs: 'vm',
    scope: {}
  }

}