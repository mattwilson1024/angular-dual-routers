import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';

import { IMovie } from './movie';

@Injectable()
export class MoviesService {
  constructor(private http: HttpClient) { }

  getMovies(): Observable<IMovie[]> {
    return this.http
      .get('https://raw.githubusercontent.com/mattwilson1024/angular-dual-routers/master/movies.json')
      .delay(3000)
      .map(response => response as IMovie[]);
  }
}
