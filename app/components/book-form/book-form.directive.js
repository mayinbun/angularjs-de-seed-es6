export default function(){


  // Controller
  class BookFormDirectiveVM{
    constructor($scope){

      $scope.$watch('BookForm.$invalid', (newValue, oldValue) => {
        if(newValue === true){
          this.onInvalid(); // Call onInvalid
        }
        else if(newValue === false){
          this.onValid(); // call onValid
        }
      })
    }
  }


  // Directive Definition Object
  return {
    restrict: 'E',
    templateUrl: 'book-form/book-form.directive.html',
    scope: {},
    controller: BookFormDirectiveVM,
    controllerAs: 'vm',
    bindToController: {
      onValid: '&',
      onInvalid: '&',
      book: '=bookAttr'
    }
  }



}