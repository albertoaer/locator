import { TestBed } from '@angular/core/testing';

import { MockArtifactManagerService } from './mock-artifact-manager.service';

describe('MockArtifactManagerService', () => {
  let service: MockArtifactManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockArtifactManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
