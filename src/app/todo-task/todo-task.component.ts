import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {
  @Input() done: boolean = false;
  @Input() task: string = '';

  @Output() onTaskChange = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  onChange() {
    this.onTaskChange.emit(this.done);
  }

}
