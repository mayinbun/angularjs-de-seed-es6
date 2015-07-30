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

  it('should provide a x as "y"', () => {
    expect(bookData.x).toEqual('y');
  });

  it('should provide a y as "x"', () => {
    expect(bookData.y).toEqual('x');
  });

});