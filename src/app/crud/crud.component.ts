import { Component, OnInit } from '@angular/core';
import { CrudService } from './service/crud.service';

interface TodoItem {
  id: number,
  todo: string,
  done: boolean
}

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  public todoText: string = '';

  public allTodos: TodoItem[] = [];
  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.getTodo().subscribe(data => {
      this.allTodos = data as TodoItem[];
    });
  }

  addTodo() {
    this.crudService.addTodo(this.todoText, false).subscribe((data) => {
      console.log('Added the todo item', data);
      this.allTodos.push(data as TodoItem);
      this.todoText = '';
    });
  }

  handleDoneChange(todo: TodoItem, e: any) {
    this.crudService.updateTodo(todo.id, todo.todo, e.target.checked).subscribe((data) => {
      console.log('Updated todo ', data);
      todo.done = (data as TodoItem).done;
    });
  }

  handleDelete(todo: TodoItem) {
    this.crudService.deleteTodo(todo.id).subscribe(data => {
      console.log('Item is deleted');
      this.allTodos = this.allTodos.filter((_todo: TodoItem)=> {
        return (_todo.id !== todo.id) 
      });
    });
  }

}
