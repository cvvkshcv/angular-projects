import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flypanel',
  templateUrl: './flypanel.component.html',
  styleUrls: ['./flypanel.component.css']
})
export class FlypanelComponent implements OnInit {
  @Input() backdrop: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
