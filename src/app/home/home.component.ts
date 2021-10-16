import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { JsonReponse } from '../interfaces/json-reponse';
import { JsonPlaceholderService } from '../services/json-placeholder.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  openFlypanel = false;
  postId: any;
  singlePost: JsonReponse = {
    title: '',
    body: ''
  };
  loading: boolean = false;
  postTitle: string = '';
  postBody: string = '';
  listOfPost: JsonReponse[] = [];
  constructor(private jsonService: JsonPlaceholderService) { }

  ngOnInit(): void {
    // console.log(this.jsonService.someDataToShare);
    this.jsonService.getAllPost().subscribe((data: JsonReponse[]) => {
      // console.log(data);
      this.listOfPost = data;
      this.jsonService.someDataToShare = data;
    });
  }

  showFlypanel() {
    this.openFlypanel = true;
  }

  onClose(e: any) {
    this.openFlypanel = false;
  }

  getPostById() {
    this.loading = true;
    this.jsonService.getSinglePost(this.postId)
      .subscribe(data => {
        this.singlePost = data;
        this.loading = false;
      }, (err) => {
        this.loading = false;
        alert(err.message);
      });
  }

  addNewPost () {
    this.jsonService.setPost(this.postTitle, this.postBody).subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    })
  }
}
