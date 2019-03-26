import { TestBed } from '@angular/core/testing';

import { CandeactivateGuardService } from './candeactivate-guard.service';

describe('CandeactivateGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CandeactivateGuardService = TestBed.get(CandeactivateGuardService);
    expect(service).toBeTruthy();
  });
});
