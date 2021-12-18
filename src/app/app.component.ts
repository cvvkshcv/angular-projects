import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-angular-app';
  text1 = 'This is title 1 input value';
  title2 = 'This is title 2 input value';
  title3 = 'This is title 3 input value';
  title4 = 'This is title 4 input value';

  captureKick (e: string) {
    console.log(e);
  }
}
