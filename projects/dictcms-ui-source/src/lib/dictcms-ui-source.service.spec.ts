import { TestBed } from '@angular/core/testing';

import { DictcmsUiSourceService } from './dictcms-ui-source.service';

describe('DictcmsUiSourceService', () => {
  let service: DictcmsUiSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DictcmsUiSourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
