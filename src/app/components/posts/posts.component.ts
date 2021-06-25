import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/common/interface/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  constructor(private postService: PostsService) {}
  posts: Post[];

  ngOnInit(): void {
    this.getPosts();
  }
  getPosts() {
    this.postService
      .getAll()
      .subscribe((posts: Post[]) => (this.posts = posts));
  }
}
