import { TestBed } from '@angular/core/testing';

import { NavbarService } from './sidenav.service';

describe('NavbarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavbarService = TestBed.get(NavbarService);
    expect(service).toBeTruthy();
  });
});
