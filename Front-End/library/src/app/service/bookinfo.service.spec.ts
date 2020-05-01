import { TestBed } from '@angular/core/testing';

import { BookinfoService } from './bookinfo.service';

describe('BookinfoService', () => {
  let service: BookinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
