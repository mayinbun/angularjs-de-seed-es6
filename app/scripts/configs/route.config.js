export default function ($routeProvider) {

  $routeProvider
    .when('/books', {
      template: '<book-list></book-list>'
    })
    .when('/books/:isbn',{
      template: '<book-detail></book-detail>'
    })
    .otherwise({
      redirectTo: '/books'
    })
}