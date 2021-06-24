import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Follower } from '../common/interface/github-follower.interface';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class GithubFollowersService {
  private url: string = 'https://api.github.com/users/mosh-hamedani/followers';

  constructor(private http: HttpClient) {}
  getAll() {
    return this.http.get<Follower>(this.url, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => response.body as Follower[]),
      catchError((err) => {
        throw new Error('');
      })
    );
  }
}
