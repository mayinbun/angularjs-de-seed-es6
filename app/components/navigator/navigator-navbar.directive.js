export default function NavigatorNavbar () {
  /**
   * The view model for the Navigator Navbar
   */
  class NavigatorNavbarVM {
    constructor (bookData) {
      this.x = bookData.x;
    }
  }

  // return the directive definition object
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'navigator/navigator-navbar.html',
    controller: NavigatorNavbarVM,
    controllerAs: 'vm',
    bindToController: {
      title: '='
    }
  };
};