import { TestBed } from '@angular/core/testing';

import { SendToDbService } from './send-to-db.service';

describe('SendToDbService', () => {
  let service: SendToDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendToDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
