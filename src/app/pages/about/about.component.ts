import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  id = '';
  passingId = '';

  inputName = '';
  
  name = '';
  constructor() { }

  ngOnInit(): void {
    // console.log('Initialize')
  }

  changeInputForLifeCycle() {
    // this.name = this.inputName;
    this.passingId = this.id
  }

}
