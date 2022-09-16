import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.css']
})
export class DireccionComponent implements OnInit {
  
  @Input() location= {
    address: '',
    city: '',
    country: ''
    };
  
  constructor() { }

  ngOnInit(): void {
  }

}
