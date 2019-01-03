import { TestBed } from '@angular/core/testing';

import { ReqLogService } from './req-log.service';

describe('ReqLogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReqLogService = TestBed.get(ReqLogService);
    expect(service).toBeTruthy();
  });
});
