import { TestBed } from '@angular/core/testing';

import { GlobalRepoService } from './global-repo.service';

describe('GlobalRepoService', () => {
  let service: GlobalRepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalRepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
