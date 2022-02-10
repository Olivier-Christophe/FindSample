import { TestBed } from '@angular/core/testing';

import { CnxapiService } from './cnxapi.service';

describe('CnxapiService', () => {
  let service: CnxapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CnxapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
