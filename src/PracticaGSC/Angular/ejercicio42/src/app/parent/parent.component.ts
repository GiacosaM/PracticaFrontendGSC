import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Film, Result } from './film.interface';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  movieList:Result[]; 

  private apiUrl:string = "https://swapi.dev/api/films";

  constructor( private http: HttpClient) { }

  ngOnInit() {
  }

  makeRequest() {
    this.buscarFilm()
      .subscribe( (film) => {
        this.movieList=film.results;         
      }, (err)=> {
        console.log('Error');
        console.info (err);
      })
  }

  buscarFilm ( ):Observable<Film> {
    
    return this.http.get<Film>(this.apiUrl);
  }
}
