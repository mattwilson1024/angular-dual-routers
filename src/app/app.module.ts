import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UpgradeModule } from '@angular/upgrade/static';

import { Ng1UpgradedComponents } from '../app-ng1/migration/ng1-upgraded-components';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MoviesService } from './movies-service/movies.service';
import { MovieComponent } from './movie/movie.component';
import { MoviesPageComponent } from './movies-page/movies-page.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    UpgradeModule
  ],
  declarations: [
    ...Ng1UpgradedComponents,
    AppComponent,
    MovieComponent,
    MoviesPageComponent
  ],
  entryComponents: [
    AppComponent
  ],
  providers: [
    MoviesService
  ]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule, private router: Router) {}

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['example'], { strictDi: true });
    this.router.initialNavigation();
  }
}

