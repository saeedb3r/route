import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { FileNotFoundComponent } from './components/file-not-found/file-not-found.component';
import { GithubFollowersComponent } from './components/github-followers/github-followers.component';
import { GithubProfileComponent } from './components/github-profile/github-profile.component';
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';


const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'posts', component: PostsComponent },
  {
    path: `github-followers/:username/:id`,
    component: GithubProfileComponent,
  },
  { path: 'github-followers', component: GithubFollowersComponent },
  { path: '**', component: FileNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
