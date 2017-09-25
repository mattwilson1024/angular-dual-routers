// Add babel-polyfill to provide ES2015 support in IE
// See: http://babeljs.io/docs/usage/polyfill/
import 'babel-polyfill';

// Libs
require('script-loader!../node_modules/angular/angular.min.js');
require('script-loader!../node_modules/angular-route/angular-route.min.js');

// App Source
require('./app-ng1/app');
require('./app-ng1/actor/actor');
require('./app-ng1/actors-page/actors-page');

// Bootstrap the app
require('./polyfills');
require('./bootstrap');
