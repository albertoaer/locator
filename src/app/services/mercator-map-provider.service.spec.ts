import { TestBed } from '@angular/core/testing';

import { MercatorMapProviderService } from './mercator-map-provider.service';

describe('MercatorMapProviderService', () => {
  let service: MercatorMapProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MercatorMapProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
