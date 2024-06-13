import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommendationsComponent } from './commendations.component';
import { CommSearchbarComponent } from './comm-searchbar/comm-searchbar.component';
import { CommListItemComponent } from './comm-list-item/comm-list-item.component';
import { CommListComponent } from './comm-list/comm-list.component';
import { CommFilterComponent } from './comm-filter/comm-filter.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    CommendationsComponent,
    CommSearchbarComponent,
    CommListItemComponent,
    CommListComponent,
    CommFilterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatButtonToggleModule,
    MatIconModule
  ],
  exports: [
    CommendationsComponent
  ]
})
export class CommendationsModule { }
