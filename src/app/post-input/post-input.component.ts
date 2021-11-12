import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post-input',
  templateUrl: './post-input.component.html',
  styleUrls: ['./post-input.component.scss']
})
export class PostInputComponent implements OnInit {
  postText: string = '';
  postTitle: string = '';

  @Input() title: any = '';
  @Input() body: any = '';
  @Output() onPostEdit = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.postText = this.body;
    this.postTitle = this.title;
  }

  emitPost() {
    this.onPostEdit.emit({
      body: this.postText,
      title: this.postTitle
    });
  }

}
