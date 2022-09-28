import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  @ViewChild ('miFormulario') miFormulario!:NgForm;

initForm= {
    name: '',
    date: '',
    time: '',
    location:{
      address:'',
      city: '',
      country: ''
    }
    
  }
  
  constructor(private eventService: EventService, private router: Router) { }

  
  ngOnInit() {
  }

  campoEsValido( campo: string){
    return this.miFormulario?.form.controls[campo]?.invalid 
    && this.miFormulario?.form.controls[campo]?.touched
  }

  guardar(){
    this.eventService.saveEvent(this.initForm);
    this.router.navigate(['/events']);
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
