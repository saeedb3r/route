import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { FileNotFoundComponent } from './components/file-not-found/file-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { GithubFollowersComponent } from './components/github-followers/github-followers.component';
import { GithubProfileComponent } from './components/github-profile/github-profile.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FileNotFoundComponent,
    HomeComponent,
    GithubFollowersComponent,
    GithubProfileComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
