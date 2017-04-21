import { TestBed, inject } from '@angular/core/testing';

import { CompetitionService } from './competition.service';

describe('CompetitionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompetitionService]
    });
  });

  it('should ...', inject([CompetitionService], (service: CompetitionService) => {
    expect(service).toBeTruthy();
  }));
});
