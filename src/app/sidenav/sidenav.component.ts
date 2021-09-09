import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
 // https://fonts.google.com/icons?selected=Material+Icons:history&icon.query=video
  menuList = [
    {
      icon: 'home',
      text: 'Home'
    },
    {
      icon: 'explore',
      text: 'Explore'
    },
    {
      icon: 'subscriptions',
      text: 'Subscriptions'
    },
    {
      line: true
    },
    {
      icon: 'video_library',
      text: 'Library'
    },
    {
      icon: 'history',
      text: 'History'
    },
    {
      icon: 'smart_display',
      text: 'Your videos'
    },
    {
      icon: 'watch_later',
      text: 'Watch later'
    },
    {
      icon: 'thumb_up',
      text: 'Liked videos'
    },
    {
      line: true
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
