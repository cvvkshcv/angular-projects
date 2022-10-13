import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() imageUrl = 'default';

  @Input() name = '';
  @Input() message = '';

  @Output() userSelected = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.imageUrl);
  }


  giveSelectionToParent() {
    this.userSelected.emit(this.name);
  }
}
