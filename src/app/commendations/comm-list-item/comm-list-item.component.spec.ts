import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommListItemComponent } from './comm-list-item.component';

describe('CommListItemComponent', () => {
  let component: CommListItemComponent;
  let fixture: ComponentFixture<CommListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommListItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
