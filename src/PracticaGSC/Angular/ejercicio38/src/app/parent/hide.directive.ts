import { Directive, ElementRef, HostListener, AfterViewInit, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[hide]'
})
export class HideDirective implements OnInit {

  htmlElement: ElementRef;

constructor(private elem: ElementRef) {  
    this.htmlElement = elem;
  }

  ngOnInit(): void {}

  @HostListener('mouseenter') onmouseenter(event: Event){
    
    this.htmlElement.nativeElement.classList.add('hidden');
  }

  @HostListener('mouseleave') onmouseleave(event: Event){
    
    this.htmlElement.nativeElement.classList.remove('hidden');

  }

  
}

