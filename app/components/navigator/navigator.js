import angular from 'angular';

import navigationNavbar from './navigator-navbar.directive'

angular.module('navigator', [])
  .directive('navigatorNavbar', navigationNavbar);

export default 'navigator'