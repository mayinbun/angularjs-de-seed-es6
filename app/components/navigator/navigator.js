import angular from 'angular';

import navigationNavbar from './navigator-navbar.directive'
import bookData from '../bookData'

angular.module('navigator', [bookData])
  .directive('navigatorNavbar', navigationNavbar);

export default 'navigator'