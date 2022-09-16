import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  
  
  counter = 0;

  @Input() stopped:boolean =false;

  private intervalId: NodeJS.Timeout;


  constructor() { }
  
  ngOnInit() {
    this.intervalId = setInterval(() => { this.counter++ }, 1000);
  }



  stopTimer() {
    
    clearInterval(this.intervalId);
    this.stopped = true;
  }

}
