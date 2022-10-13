import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelloServiceService {

  data = [1, 2, 3];
  makeChange$ = new Subject();

  constructor(private httpClient: HttpClient) { }

  commonFun() {
    console.log('This is a common/shared function b/w components');
  }

  getTodos() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/todos/');
  }

  getAllUsers() {
    return this.httpClient.get('http://localhost:3000/api/users');
  }

  getAllBlogs() {
    return this.httpClient.get('http://localhost:3000/todo/get_all_blog');
  }

  getPhotos(id: string | number) {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/photos/' + id);
  }

}
