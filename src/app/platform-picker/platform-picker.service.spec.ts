import { TestBed } from '@angular/core/testing';

import { PlatformPickerService } from './platform-picker.service';

describe('PlatformPickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlatformPickerService = TestBed.get(PlatformPickerService);
    expect(service).toBeTruthy();
  });
});
