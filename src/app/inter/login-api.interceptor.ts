import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class LoginApiInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Request made: ', request);
    const token: any = this.auth.getToken();
    if (token) {
      request = request.clone({
        setHeaders: {
          'x-auth-token': token
        }
      });
    }
    return next.handle(request);
  }
}
