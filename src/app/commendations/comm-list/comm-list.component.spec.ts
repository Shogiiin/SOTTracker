import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommListComponent } from './comm-list.component';

describe('CommListComponent', () => {
  let component: CommListComponent;
  let fixture: ComponentFixture<CommListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
