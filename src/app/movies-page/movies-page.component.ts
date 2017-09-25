import { Component, OnInit } from '@angular/core';

import { MoviesService } from './../movies-service/movies.service';
import { IMovie } from '../movies-service/movie';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html'
})
export class MoviesPageComponent implements OnInit {
  public isLoading: boolean;
  public movies: IMovie[] = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.isLoading = true;

    this.moviesService.getMovies().subscribe(
      movies => {
        this.isLoading = false;
        this.movies = movies
      },
      err => console.error(err)
    );
  }

}
