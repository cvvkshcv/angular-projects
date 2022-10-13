import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { HelloServiceService } from 'src/app/services/hello-service.service';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.scss']
})
export class TodoItemsComponent implements OnInit {

  @Input() listItems: any  = [];

  @Output() onStatusChange = new EventEmitter<{ id:number, checked: boolean}>();

  constructor(private helloService: HelloServiceService) {
    this.helloService.commonFun();
    console.log(this.helloService.data);
  }

  ngOnInit(): void {
  }

  checkBoxChanged(id: number, e: any) {
    this.onStatusChange.emit({ id, checked: e.target.checked });
  }

}
