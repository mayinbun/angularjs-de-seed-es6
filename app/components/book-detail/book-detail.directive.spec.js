import angular from 'angular'
import angularMocks from 'angular-mocks'

describe('A book-detail Directive', function(){

  let $compile, $rootScope;

  let $routeParams = {
    isbn: 123
  };

  let BookData = {
    getBookByIsbn: function(){}
  };

  beforeEach(angular.mock.module('book-detail',($provide) => {
    // Mock $routeParams
    $provide.value('$routeParams',$routeParams);
    //
    $provide.value('BookData',BookData);
  }));


  beforeEach(inject((_$compile_, _$rootScope_) => {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('should use BookData.getBookByIsbn(isbn)', () => {

    spyOn(BookData, 'getBookByIsbn');

    var html = '<book-detail></book-detail>';

    // $compile + linkFn
    var elem = $compile(html)($rootScope);

    // resolve promises in sync
    $rootScope.$apply();

    expect(BookData.getBookByIsbn).toHaveBeenCalledWith($routeParams.isbn);
  })

});