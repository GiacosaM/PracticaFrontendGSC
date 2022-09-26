import { createInjectorType } from '@angular/compiler/src/render3/r3_injector_compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  paisPattern: string = '([A-Z]{2})';

  miFormulario: FormGroup = this.fb.group({
    name: ['', [Validators.required] ],
    date: ['', [Validators.required] ],
    time: ['', [Validators.required] ],
    location: this.fb.group({
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required, Validators.pattern(this.paisPattern)]],
      
    }),
  })

  



  constructor(private fb:FormBuilder, private eventService: EventService, private router: Router) { }

  ngOnInit() {
  }

campoEsValido( campo: string) {

  
    return this.miFormulario.get(campo)?.invalid
          && this.miFormulario.get(campo)?.touched
  
}


  cancel() {
    this.router.navigate(['/events']);
  }

  guardar () {
    
    this.eventService.saveEvent(this.miFormulario.value);
    this.router.navigate(['/events']);
    
    

  }
}
