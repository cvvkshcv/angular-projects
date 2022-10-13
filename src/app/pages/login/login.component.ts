import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = 'john@gmail.com';
  password: string = 'john';

  loading = false;
  submitted = false;
  loginError = false;


  fb: FormBuilder = new FormBuilder();
  fg: any;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.fg = this.fb.group({
      email: ['john@gmail.com', [Validators.required, Validators.email]],
      password: ['john', [Validators.required]]
    });
  }

  login() {
    this.submitted = true;
    if (this.fg.valid) {
      this.loading = true;
      this.authService.login(this.email, this.password).subscribe((data: any) => {
        localStorage.setItem('token', data.token);
        this.router.navigate(['/home']);
      }, err => {
        this.loginError = true;
        this.loading = false;
        console.log(`Login error `,err.message);
      });
    }
    
  }

  get emailField() {
    return this.fg?.get('email');
  }
  get pwdField() {
    return this.fg?.get('password');
  }
}
