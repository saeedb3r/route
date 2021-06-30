import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from 'src/app/services/github-followers.service';
import { GithubProfileService } from 'src/app/services/github-profile.service';
interface Param {
  id: string;
  user: string;
}
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
  user: User;
  constructor(
    private route: ActivatedRoute,
    private service: GithubProfileService
  ) {}

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {
    console.log(this.route.params);

    this.route.params.subscribe((param: Param) => (this.param = param));
    this.service.get(this.param.id).subscribe((user: User) => {
      this.user = user;
    });
  }
}
