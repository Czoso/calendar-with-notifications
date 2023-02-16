/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PreviewService } from './preview.service';

describe('Service: Preview', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreviewService]
    });
  });

  it('should ...', inject([PreviewService], (service: PreviewService) => {
    expect(service).toBeTruthy();
  }));
});
