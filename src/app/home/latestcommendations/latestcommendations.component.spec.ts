import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestcommendationsComponent } from './latestcommendations.component';

describe('LatestcommendationsComponent', () => {
  let component: LatestcommendationsComponent;
  let fixture: ComponentFixture<LatestcommendationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LatestcommendationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LatestcommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
