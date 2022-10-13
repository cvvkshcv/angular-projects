import { Component, OnInit } from '@angular/core';
import { HelloServiceService } from 'src/app/services/hello-service.service';

@Component({
  selector: 'app-parent-wrapper',
  templateUrl: './parent-wrapper.component.html',
  styleUrls: ['./parent-wrapper.component.scss']
})
export class ParentWrapperComponent implements OnInit {

  users: any[] = [];
  constructor(private helloService: HelloServiceService) { }

  ngOnInit(): void {
  }

  getList() {
    this.helloService.getAllUsers().subscribe(
        (data: any) => {
          console.log(data);
          this.users = data.users;
        },
        err => {
          console.log(err);
        }
    );
  }

  getAllBlog() {
    this.helloService.getAllBlogs().subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    });
  }

}
