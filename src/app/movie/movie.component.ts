import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from '../movies-service/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html'
})
export class MovieComponent implements OnInit {
  @Input() movie: IMovie;

  constructor() { }

  ngOnInit() {
  }

}
