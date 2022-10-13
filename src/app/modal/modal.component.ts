import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() isOpen = false;

  @Input() title = 'Modal';
  @Input() body = 'Content of modal';

  @Output() onClose  = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.onClose.emit(false);
  }

}
