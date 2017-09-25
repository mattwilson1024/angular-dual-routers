import { Component, OnInit } from '@angular/core';
import { IMovie } from '../movies-service/movie';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html'
})
export class MoviesPageComponent implements OnInit {
  public movies: IMovie[] = [
    {
      title: 'Superbad',
      released: 2007,
      actors: [
        'Jonah Hill',
        'Michael Cera',
        'Seth Rogan',
        'Emma Stone'
      ]
    },
    {
      title: 'The Matrix',
      released: 1999,
      actors: [
        'Keanu Reeves',
        'Laurence Fishburne',
        'Carrie-Anne Moss'
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
