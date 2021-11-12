import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../crud.service';
import { Post } from '../post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  currentPost: Post | null = null;
  commentsSub: any;
  updatedPost: any;
  currentPostId: any;
  isEditing: boolean = false;
  constructor(private route: ActivatedRoute, private crudService: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.currentPostId = this.route.snapshot.params['id'];
    this.currentPost = this.crudService.currentPost;
    if (!this.currentPost) {
      this.crudService.getData(this.currentPostId).subscribe((data: any) => {
        this.currentPost = data;
      });
    }
    this.commentsSub = this.crudService.getComment(this.currentPostId);
  }

  editPost(opt: boolean) {
    this.isEditing = opt;
  }

  getPost(e: any) {
    this.updatedPost = e;
  }

  updatePost() {
    this.crudService.updateData({
      id: this.currentPostId,
      title: this.updatedPost.title,
      body: this.updatedPost.body
    }).subscribe((data: any) => {
      alert('Post updated');
      this.currentPost = data;
      this.isEditing = false;
    });
  }

}
