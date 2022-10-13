import { Component, OnInit } from '@angular/core';
import { HelloServiceService } from 'src/app/services/hello-service.service';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.scss']
})
export class Sibling2Component implements OnInit {

  isSubscribed = false;
  constructor(public helloService: HelloServiceService) { }

  ngOnInit(): void {
  }

  subscribe() {
    this.isSubscribed = true;
    this.helloService.makeChange$.subscribe(data => {
      console.log(`${data} this is my data`);
    });
  }

  unsubscribe() {
    this.isSubscribed = false;
    this.helloService.makeChange$.unsubscribe();
  }

}
