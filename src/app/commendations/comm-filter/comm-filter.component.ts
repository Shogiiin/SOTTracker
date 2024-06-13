import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';
import { CommItem } from '../commendationItem';

const filters = [
  (item :CommItem) => item,
  (item :CommItem) => !item.commIsComplete,
  (item :CommItem) => item.commIsComplete,
];

@Component({
  selector: 'comm-filter',
  templateUrl: './comm-filter.component.html',
  styleUrl: './comm-filter.component.css'
})
export class CommFilterComponent implements OnInit {
  ngOnInit(): void {
      this.updateFilter('0');
  }

  @Input() filter :any;
  @Output() filterChange = new EventEmitter<any>();
  listFilter :any = '1';

  updateFilter(value :any) {
    this.filter = filters[value];
    this.filterChange.emit(this.filter);
  }
}
