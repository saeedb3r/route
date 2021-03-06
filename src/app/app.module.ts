import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FileNotFoundComponent } from './components/file-not-found/file-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { GithubFollowersComponent } from './components/github-followers/github-followers.component';
import { GithubProfileComponent } from './components/github-profile/github-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsComponent } from './components/posts/posts.component';
import { DataService } from './services/data.service';
import { PostsService } from './services/posts.service';
import { GithubFollowersService } from './services/github-followers.service';
import { GlobalError } from './common/error/global.error';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FileNotFoundComponent,
    HomeComponent,
    GithubFollowersComponent,
    GithubProfileComponent,
    PostsComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [
    DataService,
    PostsService,
    GithubFollowersService,
    { provide: ErrorHandler, useClass: GlobalError },

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
