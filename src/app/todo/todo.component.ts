import { Component, OnInit } from '@angular/core';

interface todo {
  done: boolean,
  task: string
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  taskText: string = '';
  todos: todo[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  onSave() {
    this.todos.push({
      done: false,
      task: this.taskText
    });
    this.taskText = '';
  }

  onTaskChange(currentStatus: any, index: number) {
    this.todos[index].done = currentStatus;
  }

  showPendingTasks() {
    const incompleteTask = this.todos.filter(todo => !todo.done);
    console.log(incompleteTask);
  }
}
