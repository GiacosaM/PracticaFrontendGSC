import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { EventosService } from '../../services/eventos.service';
import { eventos } from '../../interfaces/interfaces';


@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  
  constructor( private eventos:EventosService) { }

  eve:eventos[]= this.eventos.DevolverEventos();
  

  ngOnInit(): void {
  }

}
