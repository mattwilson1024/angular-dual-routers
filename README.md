# Angular Dual Routers

This is an example hybrid Angular app which uses both the AngularJS and Angular routers.

## Bad Bootstrap

This branch shows an issue that can arise if the app is not bootstrapped properly.

See:
https://github.com/angular/angular/issues/19398 - ngOnInit not called when navigating to a route by URL #19398

The problem was solved by moving upgrade.bootstrap() to the AppModule's ngDoBootstrap() method, so that AngularJS is bootstrapped inside the Angular zone.