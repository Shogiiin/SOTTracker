import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { CommendationsModule } from './commendations/commendations.module';
import { AchievementsModule } from './achievements/achievements.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    LoginModule,
    HomeModule,
    CommendationsModule,
    AchievementsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
