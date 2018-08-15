import { TestBed, inject } from '@angular/core/testing';

import { UnsplashService } from './unsplash.service';
import { HttpClientModule } from '@angular/common/http';

describe('UnsplashService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnsplashService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([UnsplashService], (service: UnsplashService) => {
    expect(service).toBeTruthy();
  }));
});
