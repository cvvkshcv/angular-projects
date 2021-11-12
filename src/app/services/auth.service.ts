import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  email: string = '';
  constructor(private http: HttpClient) { }

  login (obj: any) {
    let url = 'http://localhost:3000/auth/login';
    return this.http.post(url, obj)
      .pipe(
        tap(res => this.doLogin(obj.email, res)),
        mapTo(true),
        catchError(err => {
          return of(false);
        })
      );
  }

  doLogin (email: string, res: any) {
    this.email = email;
    localStorage.setItem('token', res.token);
  }

  getToken () {
    return localStorage.getItem('token');
  }

  doLogout() {
    this.email = '';
    localStorage.removeItem('token');
  }
}
