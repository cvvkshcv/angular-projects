import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HelloServiceService } from 'src/app/services/hello-service.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  @Output() onAdd = new EventEmitter<string>();
  todoTask: string = '';
  isSuccessModalOpen = false;

  constructor(private helloService: HelloServiceService) {
    this.helloService.commonFun();
    console.log(this.helloService.data);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.todoTask === '') return;
    this.onAdd.emit(this.todoTask);
    this.todoTask = '';
    this.isSuccessModalOpen = true;
  }

  handleModalClose() {
    this.isSuccessModalOpen = false;
  }

}
