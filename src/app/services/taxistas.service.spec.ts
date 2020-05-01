import { TestBed } from '@angular/core/testing';

import { TaxistasService } from './taxistas.service';

describe('TaxistasService', () => {
  let service: TaxistasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxistasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
