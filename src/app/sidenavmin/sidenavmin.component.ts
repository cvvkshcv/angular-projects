import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenavmin',
  templateUrl: './sidenavmin.component.html',
  styleUrls: ['./sidenavmin.component.scss']
})
export class SidenavminComponent implements OnInit {
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
      icon: 'video_library',
      text: 'Library'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
