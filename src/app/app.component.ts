import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-angular-app';
  isExpanded = true;

  toggleSideMenu(e: boolean) {
    this.isExpanded = e;
  }
}
