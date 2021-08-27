import { Component, OnInit } from '@angular/core';
import { GetPostService } from 'src/app/services/get-post.service';

interface Post {
  userId: number,
  id: number,
  title: string
  body: string
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allPosts:Post[] = [];
  constructor(private postService: GetPostService) { }

  ngOnInit(): void {
  }

  getAllPosts() {
    this.postService.getPosts().subscribe((data: any) => {
      console.log(data);
      this.allPosts = data;
    });
  }

}
