import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-async-demo',
  templateUrl: './async-demo.component.html',
  styleUrls: ['./async-demo.component.css']
})
export class AsyncDemoComponent implements OnInit {

  listOfTodos$: any;
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.listOfTodos$ = this.commonService.getDataFromApi();
  }


}
