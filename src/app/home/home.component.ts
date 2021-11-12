import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';
import { Post } from '../post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: any;
  post: any;

  constructor(private crudService: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.items = this.crudService.getData();
  }

  getComments (item: Post) {
    this.crudService.currentPost = item;
    this.router.navigate(['post', item.id]);
    // [routerLink]="['/post', item.id]" 
  }

  getPost(e: any) {
    this.post = e;
  }
  save () {
    if (this.post && this.post.title.trim() === '' || this.post.body.trim() === '') {
      return;
    }
    this.crudService.createData(this.post).subscribe(data => {
      console.log(data);
    });
  }

  deletePost (item: Post, i: number) {
    this.crudService.deleteData(item.id).subscribe(data => {
      console.log(data);
    this.items = this.crudService.getData();
    }); 
  }

}
