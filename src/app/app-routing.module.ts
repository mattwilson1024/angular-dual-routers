import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlHandlingStrategy, UrlTree } from '@angular/router';
import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';

import { MoviesPageComponent } from './movies-page/movies-page.component';

class Ng1Ng2UrlHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url: UrlTree) {
    const shouldProcess = url.toString() === '/'
      || url.toString().startsWith('/movies');
    return shouldProcess;
  }

  extract(url: UrlTree) { return url; }
  merge(url: UrlTree, whole: UrlTree) { return url; }
}

const routes: Routes = [
  { path: '', redirectTo: '/actors', pathMatch: 'full' },
  { path: 'actors', children: [] }, // Actually not handled by Angular, it's an AngularJS route. Provided just to allow the empty redirect to work
  { path: 'movies', component: MoviesPageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {initialNavigation: false}) ],
  exports: [ RouterModule ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: UrlHandlingStrategy, useClass: Ng1Ng2UrlHandlingStrategy }
  ]
})
export class AppRoutingModule { }
