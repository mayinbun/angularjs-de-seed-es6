export default function ($routeProvider) {

  $routeProvider
    .when('/books', {
      template: '<book-list></book-list>'
    })
    .when('/books/create',{
      template: '<book-create></book-create>'
    })
    .when('/books/:isbn',{
      template: '<book-detail></book-detail>'
    })
    .otherwise({
      redirectTo: '/books'
    })
}