import { TestBed } from '@angular/core/testing';

import { InterceptionInterceptor } from './interception.interceptor';

describe('InterceptionInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InterceptionInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InterceptionInterceptor = TestBed.inject(InterceptionInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
