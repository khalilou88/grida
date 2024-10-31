import { TestBed } from '@angular/core/testing';

import { NgxXliffToJsonService } from './ngx-xliff-to-json.service';

describe('NgxXliffToJsonService', () => {
  let service: NgxXliffToJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxXliffToJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
