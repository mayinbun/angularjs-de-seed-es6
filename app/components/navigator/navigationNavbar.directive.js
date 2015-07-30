export default function NavigatorNavbar() {
  /**
   * The view model for the Navigator Navbar
   */
  class NavigatorNavbarVM {
    constructor($routeSegment, APP_CONFIG) {
      'ngInject';
      this.$routeSegment = $routeSegment;
      this.apps = Object.keys(APP_CONFIG.apps).filter((key) => APP_CONFIG.apps[key]);
    }
  }

  // return the directive definition object
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'navigator/templates/navigator-navbar.html',
    controller: NavigatorNavbarVM,
    controllerAs: 'vm',
    bindToController: {
      title: '='
    }
  };
};