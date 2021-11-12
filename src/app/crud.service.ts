import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  BASE_URL: string = 'https://jsonplaceholder.typicode.com/';

  currentPost: Post | null = null;
  constructor(private http: HttpClient) { }

  // getLocalData(id:any = null) {
  //   let url = 'http://localhost:3000/employees';
  //   if (id) {
  //     url += `/${id}`
  //   }
  //   return this.http.get(url);
  // }

  getData(id?: any) {
    let url = this.BASE_URL + 'posts';
    if (id) {
      url += `/${id}`
    }
    return this.http.get<Post[] | Post>(url);
  }

  getComment(id: number) {
    return this.http.get<Comment[]>(`${this.BASE_URL}posts/${id}/comments`);
  }
  
  createData ({ title, body }: any) {
    return this.http.post(this.BASE_URL + 'posts', {
      title, body, userId: 1
    });
  }

  updateData({ title, body, id }: any) {
    return this.http.put(this.BASE_URL + 'posts/' + id , {
      title, body, userId: 1
    });
  }

  deleteData (id: any) {
    return this.http.delete(this.BASE_URL + 'posts/' + id);
  }

  getProtected () {
    let url = 'http://localhost:3000/protected';
    return this.http.get(url);
  }
}
