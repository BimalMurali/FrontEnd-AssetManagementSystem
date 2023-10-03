import { TestBed } from '@angular/core/testing';

import { VendordetailsService } from './vendordetails.service';

describe('VendordetailsService', () => {
  let service: VendordetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendordetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
