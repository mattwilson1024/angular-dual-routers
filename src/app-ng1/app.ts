import { downgradeComponent } from '@angular/upgrade/static';

import { AppComponent } from '../app/app.component';

angular.module('example', [
  'ngRoute',
  'example.actor',
  'example.actors-page'
])
.config(['$locationProvider', function($locationProvider) {
  // Restore the hash-prefix to /#/ instead of /#!/ to remain backwards compatible with the pre-1.6 routing - see https://docs.angularjs.org/guide/migration#commit-aa077e8
  $locationProvider.hashPrefix('');
}])
.config(['$routeProvider', function($routeProvider) {
  
}])
.directive('appRoot', downgradeComponent({component: AppComponent}));
