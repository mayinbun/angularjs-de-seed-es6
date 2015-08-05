export default function(){


  // Controller
  class BookFormDirectiveVM{
    constructor($scope){

      $scope.$watch('BookForm.$valid', (newValue, oldValue) => {
        this.onStateChange({
          validState: newValue
        })
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
      onStateChange: '&',
      book: '=bookAttr'
    }
  }



}