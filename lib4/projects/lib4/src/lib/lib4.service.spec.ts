import { TestBed } from '@angular/core/testing';

import { Lib4Service } from './lib4.service';

describe('Lib4Service', () => {
  let service: Lib4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
