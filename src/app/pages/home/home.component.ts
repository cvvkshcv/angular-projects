import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  arr1 = [1, 2, 3];
  arr2 = [2, 3, 4];

  
  arr3 = [1, 2, 3];
  arr4 = [2, 3, 4];

  newArr1: number[] = [];
  newArr2: number[] = [];
  constructor() { }

  ngOnInit(): void {
    this.newArr1 = this.mergeArr(this.arr1, this.arr2);
    this.newArr2 = this.mergeArr(this.arr3, this.arr4);
  }

  mergeArr(arr1: number[], arr2: number[]) {
    return [...arr1, ...arr2];
  }



}
