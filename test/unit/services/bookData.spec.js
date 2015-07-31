require('angular');
require('angular-mocks');

describe('A BookDataService', () => {

  var bookData;

  beforeEach(angular.mock.module('bookDataModule'));


  beforeEach(inject(_bookData_ => {
    bookData = _bookData_;
  }));

  it('should be defined', () => {
    expect(bookData).toBeDefined();
  });

  it('should provide a "getAll()" method', () => {
    expect(bookData.getAll).toEqual(jasmine.any(Function));
  });

  it('should not provide a "$http()" method', () => {
    expect(bookData.$http).not.toBeDefined();
  });

});