import { TestBed } from '@angular/core/testing';

import { LoginApiInterceptor } from './login-api.interceptor';

describe('LoginApiInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LoginApiInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LoginApiInterceptor = TestBed.inject(LoginApiInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
