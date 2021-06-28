import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Follower } from '../common/interface/github-follower.interface';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { DataService } from './data.service';
@Injectable({
  providedIn: 'root',
})
export class GithubFollowersService extends DataService {
  constructor(http: HttpClient) {
    super(http, 'https://api.github.com/users/mosh-hamedani/followers');
  }
}
