import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class PostsService extends DataService {
  constructor(http: HttpClient) {
    super(http, 'http://jsonplaceholder.typicode.com/posts');
  }
}
