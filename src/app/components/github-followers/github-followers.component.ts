import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Follower } from 'src/app/common/interface/github-follower.interface';
import { GithubFollowersService } from 'src/app/services/github-followers.service';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css'],
})
export class GithubFollowersComponent implements OnInit {
  followers: Follower[];
  constructor(private service: GithubFollowersService) {}

  ngOnInit(): void {
    this.getAllFollower();
  }
  getAllFollower() {
    this.service.getAll().subscribe((followers: Follower[]) => {
      this.followers = followers;
      followers.forEach((f) => console.log(f.followers_url));
    });
  }
}
