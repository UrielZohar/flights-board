import { TestBed } from '@angular/core/testing';

import { WorkersServiceService } from './workers-service.service';

describe('WorkersServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkersServiceService = TestBed.get(WorkersServiceService);
    expect(service).toBeTruthy();
  });
});
