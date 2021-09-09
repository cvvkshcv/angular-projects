import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { YoutubeApiService } from '../services/youtube-api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() drawer: any;
  @Output() openSideMenu = new EventEmitter();

  query = '';
  loading = true;

  menuExpanded = true;
  constructor(private youtubeService: YoutubeApiService) {
    this.youtubeService.querying.subscribe(data => this.loading = data);
  }

  ngOnInit(): void {
  }

  toggleSideMenu() {
    this.menuExpanded = !this.menuExpanded;
    this.openSideMenu.emit(this.menuExpanded);
  }

  search() {
    this.loading = true;
    this.youtubeService.searchString(this.query);
  }

}
