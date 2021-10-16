import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usernameText = 'abc';
  passwordText = 'abc';

  youtubeVideos = [
    {
      thumbnail: 'https://i.ytimg.com/vi/Cti47WFpygM/hq720.jpg',
      title: "fasdfasdfsd",
      view: "63M",
      channel: "",
      channelPic: "",
      timeAgo: "2months"
    },{
      thumbnail: 'https://i.ytimg.com/vi/Cti47WFpygM/hq720.jpg',
      title: "fasdfasdfsd",
      view: "63M",
      channel: "",
      channelPic: "",
      timeAgo: "2months"
    },{
      thumbnail: 'https://i.ytimg.com/vi/Cti47WFpygM/hq720.jpg',
      title: "fasdfasdfsd",
      view: "63M",
      channel: "",
      channelPic: "",
      timeAgo: "2months"
    },{
      thumbnail: 'https://i.ytimg.com/vi/Cti47WFpygM/hq720.jpg',
      title: "fasdfasdfsd",
      view: "63M",
      channel: "",
      channelPic: "",
      timeAgo: "2months"
    },{
      thumbnail: 'https://i.ytimg.com/vi/Cti47WFpygM/hq720.jpg',
      title: "fasdfasdfsd",
      view: "63M",
      channel: "",
      channelPic: "",
      timeAgo: "2months"
    }
  ];


  showCredentials() {
    console.log(this.usernameText);
    console.log(this.passwordText);
  }

  userNameChanged(newUsername: number) {
    console.log(newUsername);
  }

}
