import { Component, OnInit } from '@angular/core';
import { YoutubeApiService } from '../services/youtube-api.service';

@Component({
  selector: 'app-video-suggestions',
  templateUrl: './video-suggestions.component.html',
  styleUrls: ['./video-suggestions.component.scss']
})
export class VideoSuggestionsComponent implements OnInit {
  videoSuggestions = [
    {
      image: 'thumbnail-1.jpg',
      title: 'Matrix 4: Trailer',
      channel: 'Trailer in Spanish',
      views: 201000,
      time: 1631178540
    },{
      image: 'thumbnail-2.jpg',
      title: 'Apple Iphone 13 Leaks & Rumours | Let’s talk…',
      channel: 'SRVTWIZ Tamil',
      views: 1700,
      time: 1630513740
    },{
      image: 'thumbnail-3.jpg',
      title: 'Avengers infinity war',
      channel: 'Marvel',
      views: 1000000,
      time: 1630559340
    },{
      image: 'thumbnail-4.jpg',
      title: 'Mr Bean eats',
      channel: 'Mr Bean',
      views: 20100000,
      time: 1599023340
    }
  ];
  videos: any;
  constructor(private youtubeService: YoutubeApiService) {}

  ngOnInit(): void {
    this.youtubeService.search.subscribe(data => {
      this.getVideos(data);
    })
  }

  getVideos(searchString: string) {
    this.youtubeService.getSearchResult(searchString).subscribe((data: any) => {
      this.videos = data.items;
      this.youtubeService.setQuerying(false);
    }, (err) => {
      this.youtubeService.setQuerying(false);
    });
  }

}
