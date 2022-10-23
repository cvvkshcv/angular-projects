import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {


  @Input() name: string = 'fasdfdsa';

  @Output() onVikash = new EventEmitter();

  constructor(private commonService: CommonService) {
    console.log(`name is ${this.name}`);
    localStorage.setItem('myinfo', 'My name is vikash');
  }

  ngOnInit(): void {
  }

  handleParaClick() {
    console.log('Para is clicked');
    this.onVikash.emit('===This is message from the event==');
  }

  sendMessageToChildTwo() {
    this.commonService.dataSharing.next('Hi Hello from child one');
  }

}
