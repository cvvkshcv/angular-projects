import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrls: ['./my-first-component.component.css']
})
export class MyFirstComponentComponent implements OnInit {
  @Input() label: string = 'Some random label';
  @Input() placeholder: string = 'Enter some data';
  @Input() type: string = 'text';
  @Input() value: string = '';

  @Output() throwSomeValue = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.label);
  }

  showTypedText(value: string) {
    console.log(value);
    this.throwSomeValue.emit(100);
  }

}
