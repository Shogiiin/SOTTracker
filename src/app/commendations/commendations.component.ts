import { Component, OnInit } from '@angular/core';
import { CommendationService } from './commendation.service';
import {CommItem} from './commendationItem';

@Component({
  selector: 'commendations',
  templateUrl: './commendations.component.html',
  styleUrl: './commendations.component.css'
})
export class CommendationsComponent implements OnInit {
  constructor(private commService :CommendationService) {}

  ngOnInit(): void {
      this.commService.getCommendations().subscribe((data :any) => {
        this.commies = data;
      });
  }

  commies! :CommItem[];
  filter :any;
}
