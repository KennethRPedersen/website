import { TestBed } from '@angular/core/testing';

import { SnaccbarService } from './snaccbar.service';

describe('SnaccbarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SnaccbarService = TestBed.get(SnaccbarService);
    expect(service).toBeTruthy();
  });
});
