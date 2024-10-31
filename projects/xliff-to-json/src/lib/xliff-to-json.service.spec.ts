import { TestBed } from '@angular/core/testing';

import { XliffToJsonService } from './xliff-to-json.service';

describe('XliffToJsonService', () => {
  let service: XliffToJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XliffToJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
