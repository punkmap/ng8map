import { TestBed } from '@angular/core/testing';

import { MapObjectService } from './map-object.service';

describe('MapObjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MapObjectService = TestBed.get(MapObjectService);
    expect(service).toBeTruthy();
  });
});
