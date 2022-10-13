import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  htmlContent = ''
  loggedIn = false;
  constructor(private router: Router, private authService: AuthService) {}


  ngOnInit() {

   
    
    this.loggedIn = !!this.authService.getToken();
    this.authService.notifyLogin$.subscribe(data => {
      console.log(data);
      this.loggedIn = true;
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
    this.loggedIn = false;
  }

}
