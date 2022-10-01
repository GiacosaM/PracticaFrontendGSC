import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clima } from './clima.interface';
import { ClimaService } from './clima.service';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  
  forecast
  climaObject: Clima | null = null;
  city;
  hayError:boolean = false;
  
  constructor( private http:HttpClient, private climaService: ClimaService) { }
  
  ngOnInit() {
  }
  
  makeRequest() {
    this.climaService.buscarClima(this.city)
      .subscribe( (clima)=> {
        this.climaObject = clima;
        this.hayError=false
      }, (err)=> {
        console.log('error en la conexion con la API');
        console.info(err);
        this.hayError=true
        this.climaObject=null
      })
  }
}
