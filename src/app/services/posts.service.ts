import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
      catchError((error) => {
        throw new Error('');
      })
    );
  }
}
