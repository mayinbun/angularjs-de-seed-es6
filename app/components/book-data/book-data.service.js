export default function(){

  this.getAll = function(){
    return [
      {
        title: 'A Sample Book 123',
        author: 'Sample Max',
        isbn: '123'
      },
      {
        title: 'A another Book',
        author: 'Robin',
        isbn: '1234'
      },
      {
        title: 'Ember.js',
        author: 'Peter ABC',
        isbn: '5555'
      }
    ];
  }

}