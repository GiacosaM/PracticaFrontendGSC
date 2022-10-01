import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clima } from './clima.interface';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  appid = "69bc9bb1bbaa496601358677ea57a017";
  constructor(private http:HttpClient) { }

  buscarClima (city:string): Observable<Clima>{
    return this.http.get<Clima>("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + this.appid);
    
  }
}
