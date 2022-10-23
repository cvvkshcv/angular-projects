import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent implements OnInit {

  @Input() name: string = 'Spidy';

  constructor(private commonService: CommonService) {
    
    console.log(`Localstorage`, localStorage.getItem('myinfo'));
  }

  ngOnInit(): void {
    this.commonService.dataSharing.subscribe(data => console.log(data));
  }

  showMyName() {
    console.log('My name is ', this.name);
  }

}
