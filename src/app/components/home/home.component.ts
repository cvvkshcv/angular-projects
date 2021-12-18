import { Component, EventEmitter, Input,  OnInit, Output } from '@angular/core';
import { ApiService, User } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() title = 'Default works';

  today = new Date();
  num = 5;
  num1 = 5;
  

  userList: any = null;
  singleUserDetail: any = null;


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  passDataToParent() {
    this.apiService.getUsers().subscribe(data => {
      this.userList = data;
    });
  }

  getSingleUserDetail(id: string) {
    this.apiService.getUsers(id, 'benny', 'youtube').subscribe(data => {
      console.log(data);
      // this.singleUserDetail = data;
    });
  }

  multiply(num: number, toMultiply: number = 2) {
    console.log('This is from component');
    return num * toMultiply;
  }

}
