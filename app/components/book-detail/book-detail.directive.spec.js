import angular from 'angular'
import angularMocks from 'angular-mocks'

describe('A book-detail Directive', function(){

  let $compile, $rootScope, $q;

  let $routeParams = {
    isbn: 123
  };

  let BookData = {
    getBookByIsbn: function(){}
  };

  beforeEach(angular.mock.module('book-detail',($provide) => {
    // Mock
    $provide.value('$routeParams',$routeParams);
    $provide.value('BookData',BookData);
  }));


  beforeEach(inject((_$compile_, _$rootScope_, _$q_) => {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $q = _$q_;
  }));

  it('should use BookData.getBookByIsbn(isbn)', () => {

    spyOn(BookData, 'getBookByIsbn')
      .and.returnValue($q.when({}));

    var html = '<book-detail></book-detail>';

    // $compile + linkFn
    var elem = $compile(html)($rootScope);

    // resolve promises in sync
    $rootScope.$apply();

    expect(BookData.getBookByIsbn).toHaveBeenCalled();
    expect(BookData.getBookByIsbn).toHaveBeenCalledWith($routeParams.isbn);
  });


  it('should bind a book an vm.book', () => {

    let testBook = {};
    spyOn(BookData, 'getBookByIsbn')
      .and.returnValue($q.when(testBook));

    var html = '<book-detail></book-detail>';

    // $compile + linkFn
    var elem = $compile(html)($rootScope);

    // resolve promises in sync
    $rootScope.$apply();

    var directiveScope = elem.isolateScope();

    expect(directiveScope.vm).toBeDefined();
    expect(directiveScope.vm.book).toBeDefined();
    expect(directiveScope.vm.book).toBe(testBook);

  });

  it('should render the book title', () => {

    let testBook = {title:'ABC'};
    spyOn(BookData, 'getBookByIsbn')
      .and.returnValue($q.when(testBook));

    var html = '<book-detail></book-detail>';

    // $compile + linkFn
    var elem = $compile(html)($rootScope);

    // resolve promises in sync
    $rootScope.$apply();


    expect(elem.text().trim()).toBe('ABC');

    expect(elem.find('[data-test="book-detail.title"]').length).toBe(1)
  })

});