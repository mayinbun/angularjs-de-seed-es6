import angular from 'angular'
import angularMocks from 'angular-mocks'

describe('A BookData Service', () => {

  let BookData, $httpBackend, $rootScope;

  beforeEach(angular.mock.module('book-data'));

  beforeEach(inject((_BookData_, _$httpBackend_, _$rootScope_) => {
    BookData = _BookData_;
    $httpBackend = _$httpBackend_;
    $rootScope = _$rootScope_;
  }));

  afterEach(()=> {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });


  describe('Public API', function(){
    it('should provide a getAll()-method', () => {

      expect(BookData.getAll).toBeDefined();
      expect(BookData.getAll).toEqual(jasmine.any(Function));

    });
  });


  describe('getAll()-method', () => {

    let testData = [{}, {}];

    beforeEach(() => {
      $httpBackend
        .whenGET('http://ajs-workshop.herokuapp.com/api/books/')
        .respond(testData);
    });

    it('should return a promise', () => {
      expect(BookData.getAll().then).toEqual(jasmine.any(Function));

      $httpBackend.flush();

    });

    it('should make a GET on http://ajs-workshop.herokuapp.com/api/books/', () => {
      $httpBackend
        .expectGET('http://ajs-workshop.herokuapp.com/api/books/');

      BookData.getAll();
      $httpBackend.flush();
    });

    it('should resolve the promise with response.data', () => {
      let result;

      BookData.getAll()
        .then((books) => result = books);
      $httpBackend.flush();

      expect(result).toEqual(testData)
    })
  })

});