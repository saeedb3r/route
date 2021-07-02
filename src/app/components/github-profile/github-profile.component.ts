import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubProfileService } from 'src/app/services/github-profile.service';
import { combineLatest, observable } from 'rxjs';
import { map } from 'rxjs/operators';
interface Param {
  id: string;
  username: string;
  [key: string]: string;
}

type viewMode = 'card' | 'table';
interface QueryParam {
  page?: number;
  view?: viewMode;
  version?: number;
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
    private service: GithubProfileService
  ) {}

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {
    combineLatest([this.route.paramMap, this.route.queryParamMap])
      .pipe(
        map((combined) => {
          this.param = combined[0] as Param;
          this.queryParam = combined[1] as QueryParam;
        })
      )
      .subscribe((combined) => console.log(combined));

    combineLatest([this.route.params, this.route.queryParams]).subscribe(
      (combined) => {
        console.log(combined);

        this.param = combined[0] as Param;
        this.queryParam = combined[1] as QueryParam;
      }
    );

    this.service.get(this.param.id).subscribe((user: User) => {
      this.user = user;
    });
  }
}
