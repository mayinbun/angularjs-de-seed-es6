describe('A BookDataService', () => {

  var bookData;

  beforeEach(module('myApp'));


  beforeEach(inject(_bookData_ => {
    bookData = _bookData_;
  }));

  it('should be defined', () => {

  })

});