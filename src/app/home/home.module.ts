import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeroComponent } from './hero/hero.component';
import { LatestcommendationsComponent } from './latestcommendations/latestcommendations.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    LatestcommendationsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
