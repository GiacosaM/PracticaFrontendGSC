import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventosService } from '../../services/eventos.service';
import { eventos } from '../../interfaces/interfaces';



@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  

  public verificado:boolean = false;
  evento:eventos | undefined;
  resultado:eventos | undefined;
  

  buscar() {
    
    //console.log(this.resultado)
  }

  cambioValor(event:any){
    if (event.target.checked === true){
      this.verificado = true;
      
    } else {
      
      this.verificado= false;
    }
  
  
  }

  estado(){
    return this.verificado;
  }

  constructor( private router: Router, private service: EventosService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.evento = this.service.getUserById(id);
    
    
  }

  returnToEvents () {
      this.router.navigate(['/eventos'])
  }

}
