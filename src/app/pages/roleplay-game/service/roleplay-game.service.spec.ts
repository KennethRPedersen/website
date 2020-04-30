import { TestBed } from '@angular/core/testing';

import { RoleplayGameService } from './roleplay-game.service';

describe('RoleplayGameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoleplayGameService = TestBed.get(RoleplayGameService);
    expect(service).toBeTruthy();
  });
});
