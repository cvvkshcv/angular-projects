import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  hasError: boolean = false;
  constructor(private crud: CrudService, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.crud.getProtected().subscribe((data) => {
      this.hasError = false;
    }, (err) => {
      this.hasError = true;
    });
  }

}
