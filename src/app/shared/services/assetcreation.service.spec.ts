import { TestBed } from '@angular/core/testing';

import { AssetcreationService } from './assetcreation.service';

describe('AssetcreationService', () => {
  let service: AssetcreationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssetcreationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
