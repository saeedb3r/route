import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubProfileService } from 'src/app/services/github-profile.service';
import { combineLatest, observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { UnavailableError } from 'src/app/common/error/unavailable.error';
import { InternalServerError } from 'src/app/common/error/internal-server.error';
import { AppError } from 'src/app/common/error/app.error';
interface Param {
  id: string;
  username: string;
  [key: string]: string;
}

type viewMode = 'card' | 'table';
interface QueryParam {
  page?: number;
  viewMode?: viewMode;
  version?: string;
}

// type Param = {[key:string]:string}
interface User {
  login?: string;
  id?: number;
  node_id?: string;
  avatar_url?: string;
  gravatar_id?: string;
  url?: string;
  html_url?: string;
  followers_url?: string;
  following_url?: string;
  gists_url?: string;
  starred_url?: string;
  subscriptions_url?: string;
  organizations_url?: string;
  repos_url?: string;
  events_url?: string;
  received_events_url?: string;
  type?: string;
  site_admin?: boolean;
  name?: string;
  company?: string;
  blog?: string;
  location?: string;
  email?: any;
  hireable?: any;
  bio?: any;
  twitter_username?: string;
  public_repos?: number;
  public_gists?: number;
  followers?: number;
  following?: number;
  created_at?: Date;
  updated_at?: Date;
}

@Component({
  selector: 'github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css'],
})
export class GithubProfileComponent implements OnInit {
  param: Param;
  queryParam: QueryParam;
  user: User;

  constructor(
    private route: ActivatedRoute,
    private service: GithubProfileService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProfile();
  }
  navFollowersList() {
    this.router.navigate(['github-followers']);
  }
  getProfile() {
    combineLatest([this.route.paramMap, this.route.queryParamMap])
      .pipe(
        switchMap((combined) => {
          this.param = {
            id: combined[0].get('id'),
            username: combined[0].get('username'),
          };
          this.queryParam = {
            page: +combined[1].get('page'),
            viewMode: combined[1].get('viewMode') as viewMode,
            version: combined[1].get('version'),
          };
          return this.service.get(this.param.id);
        })
      )
      .subscribe(
        (user: User) => (this.user = user),
        (error:AppError) => {
          if (error instanceof UnavailableError) alert('the API link broken');
          else if (error instanceof InternalServerError)
            alert('server is down');
          else throw error;
        }
      );
  }
}
