import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';

@Injectable()
export class ModifyInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // logic to modify the request
    console.log(`Loading...`);
    request = request.clone({ headers: request.headers.set('Vikash', 'token12324234q324')});
    return next.handle(request).pipe(
      map((res) => {
        if (res instanceof HttpResponse) {
          console.log(res.body);
          res = res.clone({ body: res.body.slice(0, 50) });
          return res;
        } 
        return res;
      }),
      catchError((err) => {
        console.log(`Error `, err);
        return EMPTY;
      }),
      finalize(() => {
        console.log('Loading done...');
      })
    );
  }
}
