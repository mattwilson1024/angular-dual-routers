import { Router, NavigationEnd } from '@angular/router';
import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a [routerLink]="['/actors']">Actors</a>
    <a [routerLink]="['/movies']">Movies</a>

    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  constructor(private router: Router, private changeDetectorRef: ChangeDetectorRef) {

  }
}
