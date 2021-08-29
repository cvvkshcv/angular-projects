import { Component, OnInit } from '@angular/core';
import { GetPostService } from 'src/app/services/get-post.service';

interface Post {
  id: number
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isBtnClicked = false;
  allPosts:Post[] = [];
  constructor(private postService: GetPostService) { }

  ngOnInit(): void {
  }

  isUserClickedBtn() {
    this.isBtnClicked = true;
  }

  isLoggedIn() {
    return localStorage.getItem('loggedIn') === 'true';
  }

  getAllPosts() {
    if (this.isLoggedIn()) {
      this.isUserClickedBtn();
      this.postService.getPosts().subscribe((data: any) => {
        console.log(data);
        this.allPosts = data;
      });
    }
  }

}
