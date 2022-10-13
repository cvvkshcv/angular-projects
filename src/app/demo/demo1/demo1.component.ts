import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Demo1Component implements OnInit {

  @Input() title = '';
  @Input() body = '';

  constructor() { }

  ngOnInit(): void {
  }

}
