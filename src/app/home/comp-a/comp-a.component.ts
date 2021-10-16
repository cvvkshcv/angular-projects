import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService } from 'src/app/services/json-placeholder.service';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent implements OnInit {
  constructor(private jsonService: JsonPlaceholderService) { }

  ngOnInit(): void {
  }

  passData() {
    this.jsonService.sub.next('Passing some data');
  }

}
