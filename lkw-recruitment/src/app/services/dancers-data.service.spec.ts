import { TestBed, inject } from '@angular/core/testing';

import { DancersDataService } from './dancers-data.service';

describe('DancersDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DancersDataService]
    });
  });

  it('should be created', inject([DancersDataService], (service: DancersDataService) => {
    expect(service).toBeTruthy();
  }));
});
