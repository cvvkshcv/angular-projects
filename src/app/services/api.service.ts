import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface LatLng {
  lat: string,
  lng: string
}

interface UserAddress {
  geo: LatLng,
  street: string,
  suit: string,
  city: string,
  zipcode: string 
}

interface UserCompany {
  name: string,
  catchPhrase: string,
  bs: string
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string,
  address: UserAddress,
  phone: string,
  website: string,
  company: UserCompany
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUsers(id: string = '', name: string = '', company?: string): Observable<any> {
    // let queryParams = '';
    // if (name) {
    //   queryParams += 'name=' + name + '&'
    // }
    // if (company) {
    //   queryParams += 'company=' + company + '&'
    // }
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}
