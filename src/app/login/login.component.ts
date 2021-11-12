import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any;
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.auth.getToken()) {
      this.router.navigate(['/about']);
      return;
    }
    this.form = this.fb.group({
      email: ['cvvkshcv@gmail.com', Validators.email],
      password: ['vikash', Validators.required]
    })
  }

  onLogin() {
    this.auth.login(this.form.value).subscribe((data: any) => {
      // this.router.navigate(['/about']);
      console.log(data);
    });
  }
}
