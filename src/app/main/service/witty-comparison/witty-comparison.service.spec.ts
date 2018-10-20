import { TestBed } from '@angular/core/testing';

import { WittyComparisonService } from './witty-comparison.service';

describe('WittyComparisonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WittyComparisonService = TestBed.get(WittyComparisonService);
    expect(service).toBeTruthy();
  });
});
