import { TestBed } from '@angular/core/testing';

import { OrdemDetailsService } from './ordem-details.service';

describe('OrdemDetailsService', () => {
  let service: OrdemDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdemDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
