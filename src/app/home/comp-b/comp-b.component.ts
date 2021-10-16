import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService } from 'src/app/services/json-placeholder.service';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css']
})
export class CompBComponent implements OnInit {

  constructor(private jsonService: JsonPlaceholderService) { }

  ngOnInit(): void {
    this.jsonService.observable.subscribe(data => console.log(data));
  }

}
