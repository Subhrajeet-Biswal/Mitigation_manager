import { TestBed } from '@angular/core/testing';

import { ButtonenableService } from './buttonenable.service';

describe('ButtonenableService', () => {
  let service: ButtonenableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ButtonenableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
