import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeApiService {

  public search = new BehaviorSubject('ui gems javascript'); 
  public querying = new BehaviorSubject(true); 
  constructor(private http: HttpClient) { }

  getSearchResult(query: string) {
    const key = 'AIzaSyA2ymnOZEtWnDfmxgCUcSJbCKcCEJTwZlU';
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${key}`;
    return this.http.get(url);
  }

  setQuerying(isSearching: boolean) {
    this.querying.next(isSearching);
  }

  searchString(str: string) {
    return this.search.next(str);
  }
}
