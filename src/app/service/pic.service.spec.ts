import { TestBed } from '@angular/core/testing';

import { PicService } from './pic.service';

describe('PicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PicService = TestBed.get(PicService);
    expect(service).toBeTruthy();
  });
});
