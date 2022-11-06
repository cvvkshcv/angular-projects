import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: Router, private router: ActivatedRoute) { }

  ngOnInit(): void {
    // console.log(this.router.snapshot.queryParams);
    this.router.params.subscribe(data => console.log(data));
    this.router.queryParams.subscribe(data => console.log(data));
  }

  gotoPage(page: number) {
    if (page === 1) {
      this.route.navigate(['home', 'page1'], { queryParams: { name: 'Vikash' }});
    } else {
      this.route.navigate(['home', 'page2'], { queryParams: { name: 'Cv Vikash' }});
    }
  }

}
