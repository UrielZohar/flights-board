import { TestBed } from '@angular/core/testing';

import { FlightsServiceService } from './flights-service.service';

describe('FlightsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlightsServiceService = TestBed.get(FlightsServiceService);
    expect(service).toBeTruthy();
  });
});
