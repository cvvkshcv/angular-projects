import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent implements OnInit {

  name: string = 'Vikash CV';
  count: number = 0;
  accountBalance: number = 1000;
  obj = { name: 'Vikash'};

  constructor() { }

  ngOnInit(): void {
  }

  upperCase(str: string) {
    console.log('PipeExampleComponent upperCase pipe is rendering');
    return str.toUpperCase();
  }

  changeCount() {
    this.count += 1;
  }

}
