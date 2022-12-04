import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  @ViewChild('input1', { static: true }) input1: ElementRef = {} as ElementRef;
  constructor() {}

  ngOnInit() {
    console.log(this.input1.nativeElement);
  }

  ngAfterViewInit() {
    console.log(this.input1.nativeElement);
  }

  getInput(input: HTMLInputElement) {
    console.log(input);
    input.classList.add('myinput');
    input.value = "ABCD"
  }
}
