import angular from 'angular';

import navigationNavbarDirective from './navigator-navbar.directive'
import bookData from '../bookData'

angular.module('navigator', [bookData])
  .directive('navigatorNavbar', navigationNavbarDirective);

export default 'navigator'