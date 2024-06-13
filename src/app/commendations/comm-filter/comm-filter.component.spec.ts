import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommFilterComponent } from './comm-filter.component';

describe('CommFilterComponent', () => {
  let component: CommFilterComponent;
  let fixture: ComponentFixture<CommFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
