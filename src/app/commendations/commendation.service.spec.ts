import { TestBed } from '@angular/core/testing';

import { CommendationService } from './commendation.service';

describe('CommendationService', () => {
  let service: CommendationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommendationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
