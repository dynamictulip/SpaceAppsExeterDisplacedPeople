import { TestBed } from '@angular/core/testing';

import { CampDataService } from './camp-data.service';

describe('CampDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CampDataService = TestBed.get(CampDataService);
    expect(service).toBeTruthy();
  });
});
