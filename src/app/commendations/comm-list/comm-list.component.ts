import { Component, Input } from '@angular/core';
import { CommItem } from '../commendationItem';

@Component({
  selector: 'comm-list',
  templateUrl: './comm-list.component.html',
  styleUrl: './comm-list.component.css'
})
export class CommListComponent {
  @Input() commies :CommItem[] = [];
}
