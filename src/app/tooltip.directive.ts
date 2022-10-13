import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective implements OnInit{


  @Input() tooltipText: string = '';
  constructor(private el: ElementRef) { }

  ngOnInit() {
    console.log('tooltip initalized');
    // this.changeBorder();
    // this.addEvent();
    // this.changeColor();
    this.el.nativeElement.title = this.tooltipText;
  }
  
  changeColor() {
    this.el.nativeElement.querySelector('button').style.color = 'red';
  }
  
  changeBorder() {
    this.el.nativeElement.querySelector('button').style.border = '5px solid red';
  }

  addEvent() {
    this.el.nativeElement.addEventListener('mouseout', () => alert(1));
  }

}
