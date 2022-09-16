import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  counter= 0;

  @Output() onNuevoEvento: EventEmitter<any>= new EventEmitter();

  constructor() { }


  ngOnInit() {
    setInterval(() => { this.counter++ }, 1000);
  }

  buttonClicked(): void {
      this.onNuevoEvento.emit(this.counter);
      
      
  }
}
