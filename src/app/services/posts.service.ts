import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Post } from '../common/interface/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(this.url, { observe: 'body' }).pipe(
      map((post) => post as Post[]),
      catchError((error) => throwError(new Error()))
    );
  }
  create(post: Post) {
    return this.http
      .post(this.url, JSON.stringify(post), { observe: 'body' })
      .pipe(map(data => data as Post));
  }
  update(arg0: Post) {
    throw new Error('Method not implemented.');
  }
  delete(arg0: Post) {
    throw new Error('Method not implemented.');
  }
}
