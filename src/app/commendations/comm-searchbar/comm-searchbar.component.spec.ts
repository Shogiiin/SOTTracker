import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommSearchbarComponent } from './comm-searchbar.component';

describe('CommSearchbarComponent', () => {
  let component: CommSearchbarComponent;
  let fixture: ComponentFixture<CommSearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommSearchbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
