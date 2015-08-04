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

    it('should provide a createBook()-method', () => {

      expect(BookData.createBook).toBeDefined();
      expect(BookData.createBook).toEqual(jasmine.any(Function));

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

  describe('createBook()-method', function(){

    let testBook = {isbn:123};

    beforeEach(() => {
      $httpBackend
        .whenPOST('http://ajs-workshop.herokuapp.com/api/books/',testBook)
        .respond(testBook);
    });

    it('should make a POST on http://ajs-workshop.herokuapp.com/api/books/ with correct payload', () => {
      $httpBackend
        .expectPOST('http://ajs-workshop.herokuapp.com/api/books/', testBook);

      BookData.createBook(testBook);
      $httpBackend.flush();
    });

    it('should return a promise', () => {
      expect(BookData.createBook().then).toEqual(jasmine.any(Function));

      $httpBackend.flush();

    });

    it('should resolve the promise with response.data', () => {
      let result;

      BookData.createBook()
        .then((book) => result = book);
      $httpBackend.flush();

      expect(result).toEqual(testBook)
    })

  })

});