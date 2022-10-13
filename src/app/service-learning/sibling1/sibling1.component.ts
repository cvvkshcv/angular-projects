import { Component, OnInit } from '@angular/core';
import { HelloServiceService } from 'src/app/services/hello-service.service';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.scss']
})
export class Sibling1Component implements OnInit {

  mydata = [1];
  constructor(public helloService: HelloServiceService) { }

  ngOnInit(): void {
  }

  addData() {
    let randomVal = Math.floor(Math.random() * 100)
    // this.helloService.data.push(randomVal);
    // console.log(this.helloService.data);
    // this.mydata.push(randomVal);
    this.helloService.makeChange$.next(`Video number ${randomVal} is uploaded`);
  }

}
