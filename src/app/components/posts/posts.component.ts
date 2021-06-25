import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Post } from 'src/app/common/interface/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: Post[];
  form: FormGroup;

  constructor(private postService: PostsService) {
    this.form = new FormGroup({
      postTitle: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      postBody: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }
  ngOnInit(): void {
    this.getPosts();
  }

  public get postBody(): FormControl {
    return this.form.get('postBody') as FormControl;
  }
  public get postTitle(): FormControl {
    return this.form.get('postTitle') as FormControl;
  }

  getPosts() {
    this.postService
      .getAll()
      .subscribe((posts: Post[]) => (this.posts = posts));
  }
  createPost(postForm: FormGroup) {
    let post: Post = {
      title: postForm.controls.postTitle.value,
      body: postForm.controls.postBody.value,
    };

    this.postService.create(post).subscribe((newPost) => {
      this.posts.splice(0, 0, { ...post, id: newPost.id });
    });
  }
  updatePost(post: Post) {
    this.postService
      .update(post)
      .subscribe((post: Post) => console.log(post.id));
  }
  deletePost(post: Post) {
    this.postService
      .delete(post)
      .subscribe((data) => this.deletePostFromView(post));
  }

  private deletePostFromView(post: Post): void {
    this.posts.splice(this.posts.indexOf(post), 1);
  }
}
