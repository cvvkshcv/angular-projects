import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  dataSharing = new Subject();
  constructor(private httpClient: HttpClient) { }


  getDataFromApi() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/todos');
  }



}
