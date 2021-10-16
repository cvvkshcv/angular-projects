import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-flypanel-heading',
  templateUrl: './flypanel-heading.component.html',
  styleUrls: ['./flypanel-heading.component.css']
})
export class FlypanelHeadingComponent implements OnInit {
  @Output() closingFlypanel = new EventEmitter();
  constructor() { }

  ngOnInit(): void {}
  
  emitClose() {
    this.closingFlypanel.emit(true);
  } 

}
