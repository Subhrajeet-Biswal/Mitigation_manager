import { TestBed } from '@angular/core/testing';

import { AverageScoreService } from './average-score.service';

describe('AverageScoreService', () => {
  let service: AverageScoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AverageScoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
