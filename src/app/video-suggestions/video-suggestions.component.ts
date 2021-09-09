import { Component, OnInit } from '@angular/core';
import { YoutubeApiService } from '../services/youtube-api.service';

@Component({
  selector: 'app-video-suggestions',
  templateUrl: './video-suggestions.component.html',
  styleUrls: ['./video-suggestions.component.scss']
})
export class VideoSuggestionsComponent implements OnInit {
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
