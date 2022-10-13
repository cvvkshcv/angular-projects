import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  name: string = 'John';
  email: string = 'john@gmail.com';
  password: string = 'john';

  registerError = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  register() {
    this.authService.register(this.name, this.email, this.password).subscribe(data => {
      console.log(data);
    }, err => {
      console.log(`Register error `, err);
    })
  }

}
