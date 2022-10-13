import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-struct-dir',
  templateUrl: './struct-dir.component.html',
  styleUrls: ['./struct-dir.component.scss']
})
export class StructDirComponent {
  voted: boolean = false;

  fruitnames = ['Banana', 'Dragon fruit', 'kiwi', 'Papaya' ];

  users = [
    { id: 1, name: 'John' }, { id: 2, name: 'Joe' },
    { id: 3, name: 'Jack' }, { id: 4, name: 'Jill' }
  ];

  switchExample: string = 'c';

  vote() {
    this.voted = true;
  }

  selectionChanged(e: any) {
    this.switchExample = e.target.value;
  }

}
