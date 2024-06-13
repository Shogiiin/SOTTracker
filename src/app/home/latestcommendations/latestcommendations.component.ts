import { Component } from '@angular/core';

@Component({
  selector: 'latestcommendations',
  templateUrl: './latestcommendations.component.html',
  styleUrl: './latestcommendations.component.css'
})
export class LatestcommendationsComponent {
  calcBarPercentage(data1 :number, data2 :number) {
    return data2/data1;
  }
}
